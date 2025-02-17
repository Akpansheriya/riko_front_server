import React, { useRef, useState } from "react";
import "./users.scss";
import { Button, Form } from "react-bootstrap";
import search from "../../assets/search.png";
import sort from "../../assets/sort.png";
import editIcon from "../../assets/edit.png";
import deleteIcon from "../../assets/delete.png";
import viewIcon from "../../assets/view.png";
import actionIcon from "../../assets/action.png";
import frontIcon from "../../assets/front.png";
import backIcon from "../../assets/back.png";
import forwardIcon from "../../assets/forward.png";
import backwardIcon from "../../assets/backward.png";
import DatePicker from "./date-picker/DatePicker";
import ExportExcel from "../../common/export-modal/ExportExcel";

import { useUserListQuery } from "../../../services/user";
import { useListenerFormLinkMutation } from "../../../services/listener";
import moment from "moment";
import { useAccountFreezeMutation } from "../../../services/auth";
import AccountFreeze from "../../common/account-freeze/AccountFreeze";
import LinkShare from "../../common/link-share/LinkShare";

function Users() {
  const [modalShow, setModalShow] = useState(false);
  const [freeze, setFreeze] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDate, setSelectedDate] = useState(null);
  const [page, setPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userName, setUserName] = useState(null);
  const [userId, setUserId] = useState(null);
  const [linkUserName, setLinkUserName] = useState(null);
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showFreezeModal, setShowFreezeModal] = useState(false);
  const [pageSize, setPageSize] = useState(10);
  const [
    sendFormLink,
    { data: mutationData, error: mutationError, isLoading: isMutationLoading },
  ] = useListenerFormLinkMutation();
  const [accountFreeze, {isLoading:isFreezeLoading}] = useAccountFreezeMutation();
  const { data, error, isLoading, refetch } = useUserListQuery({
    page,
    pageSize,
    searchParams: searchQuery ? searchQuery : "",
    date: selectedDate ? selectedDate.toISOString().split("T")[0] : "",
  });
  console.log("data", data);
  const handlePageChange = (direction) => {
    if (direction === "next" && page < data?.data?.pagination?.totalPages)
      setPage((prev) => prev + 1);
    if (direction === "prev" && page > 1) setPage((prev) => prev - 1);
  };

  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setPage(1);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setPage(1);
  };

  function maskEmail(email) {
    const [localPart, domain] = email.split("@");
    const maskedLocalPart =
      localPart.length > 3 ? `${localPart.slice(0, 3)}...` : localPart;
    return `${maskedLocalPart}@${domain}`;
  }
 
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

  const handleSendLinkToggle = (userId,userName) => {
    setUserId(userId);
    setShowLinkModal(true);
 setLinkUserName(userName)
  };
  const handleSendFormLink = async() => {
   ;
    try {
      await sendFormLink(userId).unwrap();
      refetch();
    } catch (err) {
      console.error("Error toggling account freeze:", err);
    } finally {
      setShowLinkModal(false);
      setUserId(null);
      setLinkUserName(null)
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
    <div className="users-main">
      <div className="top-section">
        <div className="left-section">
          <Button onClick={() => setModalShow(true)}>Excel</Button>
          <div className="search-bar">
            <input
              type="text"
              className="search-input"
              placeholder="Search User"
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <img src={search} alt="Search" className="search-icon" />
          </div>
        </div>
        <div className="right-section">
          <DatePicker onChange={handleDateChange} />
          <Button className="add-user-btn">+ Add New User</Button>
          <Button className="add-user-btn-plus">+</Button>
        </div>
      </div>
      <div className="table table-container "   ref={tableRef}
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
              Full Name <img className="sort" src={sort} alt="Sort" />
            </p>
          </div>
          <div>
            <p className="heading-text">Email ID</p>
          </div>
          <div>
            <p className="heading-text">Contact Number</p>
          </div>
          <div>
            <p className="heading-text">User Type</p>
          </div>
          <div>
            <p className="heading-text">
              Registration Date <img className="sort" src={sort} alt="Sort" />
            </p>
          </div>
          <div>
            <p className="heading-text">
              Wallet Balance <img className="sort" src={sort} alt="Sort" />
            </p>
          </div>
          <div>
            <p className="heading-text">
              Form Status <img className="sort" src={sort} alt={sort} />
            </p>
          </div>

          <div>
            <p className="heading-text">
              Account Freeze <img className="sort" src={sort} alt={sort} />
            </p>
          </div>
          <div>
            <p className="heading-text">Devices</p>
          </div>
          <div>
            <p className="heading-text">Action</p>
          </div>
        </div>

        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {data?.data?.users?.map((user, index) => (
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
              <p className="heading-text">{user.userType || "N/A"}</p>
            </div>
            <div>
              <p className="heading-text">
                {moment(user.createdAt).format("MM/DD/YYYY, hh:mm A")}
              </p>
            </div>
            <div>
              <p className="heading-text">{user.balance}</p>
            </div>

            <div>
              <p
                className={`heading-text ${
                  user?.listener_request_status === "no request"
                    ? "red-text"
                    : "green-text"
                }`}
              >
                {user?.listener_request_status === "no request"
                  ? "Pending"
                  : user?.listener_request_status === "processing"
                  ? "Sent"
                  : "Sent"}
              </p>
            </div>
            <div>
              <p className="heading-text">
                <div className="material-switch pull-right">
                  <input
                    id={`switch-${user.id}`}
                    name={`switch-${user.id}`}
                    type="checkbox"
                    checked={user?.account_freeze === true ? true : false}
                    onChange={(event) => {handleToggle(user?.id, user?.fullName,event)}}
                  />
                  <label
                    htmlFor={`switch-${user.id}`}
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
                <img
                  src={actionIcon}
                  alt="Action"
                  onClick={() => handleSendLinkToggle(user.id,user.fullName)}
                />
                <img src={viewIcon} alt="View" />
                <img src={editIcon} alt="Edit" />
                <img src={deleteIcon} alt="Delete" />
              </div>
            </div>
          </div>
        ))}

        <div className="pagination">
          <div className="pagination-dropdown">
            <p>Items Per Page:</p>
            <Form.Select
              value={pageSize}
              onChange={handlePageSizeChange}
              aria-label="Items Per Page"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </Form.Select>
          </div>
          <div className="pagination-details">
            <div className="pagination-numbers">
              <p>{(page - 1) * pageSize + 1}</p>-
              <p>
                {Math.min(
                  page * pageSize,
                  data?.data?.pagination?.totalRecords || 0
                )}
              </p>
              <p>of</p>
              <p>{data?.data?.pagination?.totalRecords || 0}</p>
            </div>
            <div className="pagination-controls">
              <img
                src={backwardIcon}
                alt="Backward"
                onClick={() => setPage(1)}
                style={{ cursor: "pointer" }}
              />
              <img
                src={backIcon}
                alt="Back"
                onClick={() => handlePageChange("prev")}
                style={{ cursor: "pointer" }}
              />
              <img
                src={frontIcon}
                alt="Front"
                onClick={() => handlePageChange("next")}
                style={{ cursor: "pointer" }}
              />
              <img
                src={forwardIcon}
                alt="Forward"
                onClick={() =>
                  setPage(Math.ceil(data?.pagination?.totalRecords / pageSize))
                }
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
      <ExportExcel show={modalShow} onHide={() => setModalShow(false)} />
      <AccountFreeze
        show={showFreezeModal}
        onHide={() => setShowFreezeModal(false)}
        onConfirm={confirmFreeze}
        userId={selectedUser}
        userName={userName}
        isFreezeLoading={isFreezeLoading}
       
      />
      <LinkShare
        show={showLinkModal}
        onHide={() => setShowLinkModal(false)}
        onConfirm={handleSendFormLink}
        userId={userId}
        userName={linkUserName}
        isMutationLoading={isMutationLoading}
      />
    </div>
  );
}

export default Users;
