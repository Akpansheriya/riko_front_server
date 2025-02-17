import React, { useRef, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useListenerListQuery } from "../../../services/listener"; // Import the API hook
import DatePicker from "../../user-management/user-list/date-picker/DatePicker";
import sort from "../../assets/sort.png";
import viewIcon from "../../assets/view.png";
import frontIcon from "../../assets/front.png";
import backIcon from "../../assets/back.png";
import forwardIcon from "../../assets/forward.png";
import backwardIcon from "../../assets/backward.png";
import eraser from "../../assets/eraser.png";
import deleteIcon from "../../assets/delete.png";
import actionIcon from "../../assets/action.png";
import search from "../../assets/search.png";
import "./listeners.scss";
import ExportExcel from "../../common/export-modal/ExportExcel";
import RemoveListener from "../../common/remove-listener/RemoveListener";
import { useNavigate } from "react-router-dom";
import moment from "moment";
import {
  useAccountFreezeMutation,
  useWalletFreezeMutation,
} from "../../../services/auth";
import AccountFreeze from "../../common/account-freeze/AccountFreeze";
import WalletFreeze from "../../common/account-freeze/WalletFreeze";
function Listeners() {
  const [modalShow, setModalShow] = useState(false);
  const [deleteModalShow, setDeleteModalShow] = useState(false);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchParams, setSearchParams] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [showFreezeModal, setShowFreezeModal] = useState(false);
  const [selectedUserWallet, setSelectedUserWallet] = useState(null);
  const [userNameWallet, setUserNameWallet] = useState(null);
  const [showFreezeWalletModal, setShowFreezeWalletModal] = useState(false);
  const navigate = useNavigate();

  const { data, isLoading, isError, refetch } = useListenerListQuery({
    page,
    pageSize,
    searchParams: searchParams ? searchParams : "",
    date: selectedDate ? selectedDate.toISOString().split("T")[0] : "",
  });

  const [accountFreeze , {isLoading:isFreezeLoading}] = useAccountFreezeMutation();
  const [wallletFreeze, {isLoading:isWalletFreezeLoading}] = useWalletFreezeMutation();

  const [freezeStatus, setFreezeStatus] = useState({});
  const [freezeStatusWallet, setFreezeStatusWallet] = useState({});
  const handleView = () => {
    navigate("/dashboard/profile-view");
  };

  function maskEmail(email) {
    const [localPart, domain] = email.split("@");
    const maskedLocalPart =
      localPart.length > 3 ? `${localPart.slice(0, 3)}...` : localPart;
    return `${maskedLocalPart}@${domain}`;
  }

  const handleSearch = (e) => {
    setSearchParams(e.target.value);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(e.target.value);
  };

  const handleNextPage = () => {
    if (page < data?.data?.pagination?.totalPages) {
      setPage(page + 1);
    }
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleToggle = (userId, userName) => {
    setSelectedUser(userId);
    setShowFreezeModal(true);
    setUserName(userName);
  };
  const confirmFreeze = async () => {
    try {
      await accountFreeze(selectedUser).unwrap();
      refetch();
    } catch (err) {
      console.error("Error toggling account freeze:", err);
    } finally {
      setShowFreezeModal(false);
      setSelectedUser(null);
      setUserName(null);
    }
  };
  const handleWalletToggle = (userId, userName) => {
    setSelectedUserWallet(userId);
    setShowFreezeWalletModal(true);
    setUserNameWallet(userName);
  };
  const confirmWallet = async () => {
    try {
      await wallletFreeze(selectedUserWallet).unwrap();
      refetch();
    } catch (err) {
      console.error("Error toggling account freeze:", err);
    } finally {
      setShowFreezeWalletModal(false);
      setSelectedUserWallet(null);
      setUserNameWallet(null);
    }
  };
  const tableRef = useRef(null);

  const handleMouseDown = (e) => {
    const table = tableRef.current;
    table.isDown = true;
    table.startX = e.pageX - table.offsetLeft;
    table.scrollLeft = table.scrollLeft;
  };

  const handleMouseMove = (e) => {
    const table = tableRef.current;
    if (!table.isDown) return;
    e.preventDefault();
    const x = e.pageX - table.offsetLeft;
    const walk = (x - table.startX) * 2; // scroll speed
    table.scrollLeft = table.scrollLeft - walk;
  };

  const handleMouseUp = () => {
    const table = tableRef.current;
    table.isDown = false;
  };

  return (
    <div className="listeners-main">
      <div className="top-section">
        <div className="left-section">
          <Button onClick={() => setModalShow(true)}>Excel</Button>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search User"
              value={searchParams}
              onChange={handleSearch}
            />
            <img src={search} alt="Search" className="search-icon" />
          </div>
        </div>
        <div className="right-section">
          <DatePicker onChange={handleDateChange} />
        </div>
      </div>

      <div className="table table-container"  ref={tableRef}
      onMouseDown={handleMouseDown}
      onMouseLeave={handleMouseUp}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}>
        <div className="table-headings">
          <div>
            <p className="heading-text">Sr. No</p>
          </div>
          <div>
            <p className="heading-text">
              Full Name <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
          <div>
            <p className="heading-text">Email ID</p>
          </div>
          <div>
            <p className="heading-text">Contact Number</p>
          </div>
          <div>
            <p className="heading-text">
              Registration Date <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
          <div>
            <p className="heading-text">
              Wallet Balance <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
          <div>
            <p className="heading-text">
              Account Freeze <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
          <div>
            <p className="heading-text">
              Wallet Freeze <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
          <div>
            <p className="heading-text">Devices</p>
          </div>
          <div>
            <p className="heading-text">Action</p>
          </div>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : isError ? (
          <p>Error fetching data</p>
        ) : (
          data?.data?.users.map((user, index) => (
            <div className="table-body" key={user.id}>
              <div>
                <p className="heading-text">
                  {(page - 1) * pageSize + index + 1}
                </p>
              </div>
              <div>
                <p className="heading-text">{user?.fullName}</p>
              </div>
              <div>
                <p className="heading-text">{maskEmail(user.email)}</p>
              </div>
              <div>
                <p className="heading-text">{user.mobile_number || "N/A"}</p>
              </div>
              <div>
                <p className="heading-text">
                  {moment(user.createdAt).format("MM/DD/YYYY, hh:mm A")}
                </p>
              </div>
              <div>
                <p className="heading-text">{user?.balance}</p>
              </div>
              <div>
                <p className="heading-text">
                  <div className="material-switch pull-right">
                    <input
                      id={`switch-${user.id}`}
                      name={`switch-${user.id}`}
                      type="checkbox"
                      checked={user?.account_freeze === true ? true : false}
                      onChange={() => handleToggle(user.id, user.fullName)}
                    />
                    <label
                      htmlFor={`switch-${user.id}`}
                      className="label-default"
                    ></label>
                  </div>
                </p>
              </div>
              <div>
                <p className="heading-text">
                  <div className="material-switch pull-right">
                    <input
                      id={`wallet-switch-${user.id}`}
                      name={`wallet-switch-${user.id}`}
                      type="checkbox"
                      checked={user?.wallet_freeze === true ? true : false}
                      onChange={() =>
                        handleWalletToggle(user.id, user.fullName)
                      }
                    />
                    <label
                      htmlFor={`wallet-switch-${user.id}`}
                      className="label-default"
                    ></label>
                  </div>
                </p>
              </div>
              <div>
                <p className="heading-text">{user?.device_type}</p>
              </div>
              <div>
                <div className="actions">
                  <img src={actionIcon} alt={actionIcon} />
                  <img src={viewIcon} alt={viewIcon} onClick={handleView} />
                  <img
                    onClick={() => setDeleteModalShow(true)}
                    src={eraser}
                    alt={eraser}
                  />
                  <img src={deleteIcon} alt={deleteIcon} />
                </div>
              </div>
            </div>
          ))
        )}

        <div className="pagination">
          <div className="pagination-dropdown">
            <p>Items Per Pages:</p>
            <Form.Select
              aria-label="Items per page"
              value={pageSize}
              onChange={handlePageSizeChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
            </Form.Select>
          </div>
          <div className="pagination-details">
            <div className="pagination-numbers">
              <p>{(page - 1) * pageSize + 1}</p>-<p>{page * pageSize}</p>
              <p>of</p>
              <p>{data?.data?.pagination?.totalRecords}</p>
            </div>
            <div className="pagination-controls">
              <img src={backwardIcon} alt={backwardIcon} />
              <img src={frontIcon} alt={frontIcon} />
              <img onClick={handlePreviousPage} src={backIcon} alt={backIcon} />
              <img
                onClick={handleNextPage}
                src={forwardIcon}
                alt={forwardIcon}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Modals */}
      <ExportExcel show={modalShow} onHide={() => setModalShow(false)} />
      <RemoveListener
        show={deleteModalShow}
        onHide={() => setDeleteModalShow(false)}
      />
      <AccountFreeze
        show={showFreezeModal}
        onHide={() => setShowFreezeModal(false)}
        onConfirm={confirmFreeze}
        userId={selectedUser}
        userName={userName}
        isFreezeLoading={isFreezeLoading}
      />
      <WalletFreeze
        show={showFreezeWalletModal}
        onHide={() => setShowFreezeWalletModal(false)}
        onConfirm={confirmWallet}
        userId={selectedUserWallet}
        userName={userNameWallet}
        isWalletFreezeLoading={isWalletFreezeLoading}
      />
    </div>
  );
}

export default Listeners;
