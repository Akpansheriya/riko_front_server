import React from "react";
import "./listenerProfileView.scss";
import learn from "../../assets/learn.png";
import profile from "../../assets/image.png";
import { Button } from "react-bootstrap";
import Rupee from "../../assets/orange-amount.png";
import locationImage from "../../assets/location.png";
import setting from "../../assets/green-setting.png";
import watch from "../../assets/watch.png";
import aadhar from "../../assets/adhar.png";
import display from "../../assets/display-image.png";
import { useListenerProfileQuery } from "../../../services/listener";
import { useLocation } from "react-router-dom";
import moment from "moment";
function ListenerProfileView() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const id = searchParams.get("id");
  const { data, error, isLoading } = useListenerProfileQuery(id); // Use query to fetch listener profile
  console.log("id", id);
  console.log("data", data);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching listener profile</div>;
  }
  function maskEmail(email) {
    const [localPart, domain] = email.split("@");
    const maskedLocalPart =
      localPart.length > 3 ? `${localPart.slice(0, 3)}...` : localPart;
    return `${maskedLocalPart}@${domain}`;
  }
  const profileData = data?.profile;
  return (
    <div className="listener-profile-view">
      {data ? (
        <>
          <div className="row-class">
            <div className="first-col">
              <div className="profile-card-top">
                <img src={learn} alt="learn" />
              </div>
              <div className="profile-card-bottom">
                <div className="edit-profile">
                  <div className="img-wrapper">
                    {" "}
                    <img
                      src={profileData?.listenerProfileData[0]?.display_image}
                      alt="profile"
                    />
                  </div>

                  <Button className="profile-btn">Edit Profile</Button>
                </div>
                <div className="refund-detail">
                  <div className="text-alignment">
                    <p className="name">{profileData?.fullName}</p>
                    <p className="email">{maskEmail(profileData?.email)}</p>
                  </div>
                  <Button className="profile-btn">Money Refund</Button>
                </div>
                <div className="user-details">
                  <div>
                    <p className="text-1"> {profileData?.mobile_number}</p>
                    <p className="text-2">GISDF1S2XE</p>
                  </div>
                  <div>
                    <a className="text-3" href="#">
                      View Details
                    </a>
                    <p className="text-4">Available Any Time</p>
                  </div>
                </div>
                <div className="bottom-details">
                  <div>
                    <p className="p1">
                      {" "}
                      {moment(
                        profileData?.listenerProfileData[0]?.createdAt
                      ).format("MM/DD/YYYY, hh:mm A")}
                    </p>
                    <p className="p2">Registration Date:</p>
                  </div>
                  <div>
                    <p className="p1">{profileData?.balance ? profileData?.balance : "0.0"}</p>
                    <p className="p2">Wallet Amount:</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="second-col">
              <div className="user-card">
                <div className="left-sec">
                  <p className="title">Available Services:</p>
                  <div className="btns">
                    {profileData?.listenerProfileData[0]?.service.map((ele,index) => (
                      <>
                      <Button className="profile-btn">{ele === "audioCall" ? "Audio" :ele === "videoCall" ?  "video" : "chat" }</Button> 
                   
                    </>
                    ) )}
                  </div>
                </div>
                <div className="right-sec green">
                  <img src={setting} alt="setting" />
                </div>
              </div>
              <div className="user-card">
                <div className="left-sec">
                  <p className="title">Available Services:</p>
                  <div className="text-amount">₹8,000.00</div>
                </div>
                <div className="right-sec orange">
                  <img src={Rupee} alt="rupee" />
                </div>
              </div>
            </div>
            <div className="third-col">
              <div className="user-card">
                <div className="left-sec space">
                  <div className="upper-sec">
                    {" "}
                    <p className="title">State:</p>
                    <p className="text">{profileData?.state}</p>
                  </div>

                  <div className="lower-sec">
                    <p className="title">Country:</p>
                    <p className="text">{profileData?.nationality}</p>
                  </div>
                </div>
                <div className="right-sec dark-blue">
                  <img src={locationImage} alt="location" />
                </div>
              </div>
              <div className="user-card">
                <div className="left-sec">
                  <p className="title">Average Time Spend:</p>
                  <div className="text-amount">2 hr</div>
                </div>
                <div className="right-sec purple">
                  <img src={watch} alt="watch" />
                </div>
              </div>
            </div>
            <div></div>
          </div>
          <div className="about">
            <div className="about-text">About me:</div>
            <p className="description">
             {profileData?.listenerProfileData[0]?.about}
            </p>
          </div>
          <div className="document">
            <div className="document-text">Human Identifier Document:</div>
            <div className="documents-data">
              <a href={profileData?.listenerProfileData[0]?.display_image} className="doc">
                <img src={profileData?.listenerProfileData[0]?.display_image} alt="display-image" />
                <p>Display Image</p>
              </a>
              <a href={profileData?.listenerProfileData[0]?.adhar_front} className="doc">
                <img src={profileData?.listenerProfileData[0]?.adhar_front} alt="aadhar-image" />
                <p>aadhar Image</p>
              </a>
              <a href={profileData?.listenerProfileData[0]?.adhar_back} className="doc">
                <img src={profileData?.listenerProfileData[0]?.adhar_back} alt="aadhar-image" />
                <p>aadhar Image</p>
              </a>
              <a href={profileData?.listenerProfileData[0]?.pancard} className="doc">
                <img src={profileData?.listenerProfileData[0]?.pancard} alt="aadhar-image" />
                <p>Pancard Image</p>
              </a>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default ListenerProfileView;
