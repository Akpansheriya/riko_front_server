import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import DatePicker from "../user-list/date-picker/DatePicker";
import sort from "../../assets/sort.png";
import viewIcon from "../../assets/view.png";
import frontIcon from "../../assets/front.png";
import backIcon from "../../assets/back.png";
import forwardIcon from "../../assets/forward.png";
import backwardIcon from "../../assets/backward.png";
import search from "../../assets/search.png";
import "./activeUsers.scss";
import { useActiveUserListQuery } from "../../../services/user";
import moment from "moment";

function ActiveUsers() {
  const [page, setPage] = useState(1); // Current page
  const [pageSize, setPageSize] = useState(10); // Items per page
  const [searchQuery, setSearchQuery] = useState(""); // Search query
  const [selectedDate, setSelectedDate] = useState(null); // Selected date range

  // Fetch data using the query hook
  const { data, error, isLoading } = useActiveUserListQuery({
    page,
    pageSize,
    searchParams: searchQuery ? searchQuery : "", // Pass the search query
    date: selectedDate ? selectedDate.toISOString().split("T")[0] : "", // Pass the selected date in YYYY-MM-DD format
  });

  // Handle page change
  const handlePageChange = (direction) => {
    if (direction === "next" && page < data?.pagination?.totalPages) {
      setPage((prev) => prev + 1);
    } else if (direction === "prev" && page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  // Handle page size change
  const handlePageSizeChange = (e) => {
    setPageSize(Number(e.target.value));
    setPage(1); // Reset to the first page
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value); // Update the search query
    setPage(1); // Reset to the first page
  };

  // Handle date picker change
  const handleDateChange = (date) => {
    setSelectedDate(date); // Update the selected date
    setPage(1); // Reset to the first page
  };

  return (
    <div className="active-users">
      <div className="top-section">
        <div className="left-section">
          <Button>Export to Excel</Button>
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
        </div>
      </div>

      
      <div className="table">
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
            <p className="heading-text">
              Wallet Balance <img className="sort" src={sort} alt="Sort" />
            </p>
          </div>
          <div>
            <p className="heading-text">
              Recharge Amount <img className="sort" src={sort} alt="Sort" />
            </p>
          </div>
          <div>
            <p className="heading-text">
              Gift Amount <img className="sort" src={sort} alt="Sort" />
            </p>
          </div>
          <div>
            <p className="heading-text">
              Registration Date <img className="sort" src={sort} alt="Sort" />
            </p>
          </div>
          <div>
            <p className="heading-text">Action</p>
          </div>
        </div>

       
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          data?.data?.users?.map((user, index) => (
            <div className="table-body" key={user.id}>
              <div>
                <p className="heading-text">{(page - 1) * pageSize + index + 1}</p>
              </div>
              <div>
                <p className="heading-text">{user.fullName}</p>
              </div>
              <div>
                <p className="heading-text">{user.balance}</p>
              </div>
              <div>
                <p className="heading-text">{user.totalRechargeAmount}</p>
              </div>
              <div>
                <p className="heading-text">{user.totalGiftAmount}</p>
              </div>
              <div>
                <p className="heading-text">
                  {moment(user.createdAt).format("MM/DD/YYYY, hh:mm A")}
                </p>
              </div>
              <div>
                <div className="actions">
                  <img src={viewIcon} alt="View" />
                </div>
              </div>
            </div>
          ))
        )}

     
        <div className="pagination">
          <div className="pagination-dropdown">
            <p>Items Per Page:</p>
            <Form.Select
              value={pageSize}
              onChange={handlePageSizeChange}
              aria-label="Select Page Size"
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
              <p>{(page - 1) * pageSize + 1}</p>-<p>{Math.min(page * pageSize, data?.pagination?.totalRecords || 0)}</p>
              <p>of</p>
              <p>{data?.pagination?.totalRecords || 0}</p>
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
                  setPage(data?.pagination?.totalPages || page)
                }
                style={{ cursor: "pointer" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ActiveUsers;
