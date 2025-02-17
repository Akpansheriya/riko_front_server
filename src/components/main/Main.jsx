import React, { useState } from "react";
import "./main.scss";
import Sidebar from "../sidebar/Sidebar";
import Navbars from "../navbars/Navbars";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import Users from "../user-management/user-list/Users";
import ActiveUsers from "../user-management/active-users/ActiveUsers";
import RecentUsers from "../user-management/recent-users/RecentUsers";
import Listeners from "../listener-management/listeners-list/Listeners";
import ApplicationRequests from "../listener-management/application-requests/ApplicationRequests";
import ProfileApproval from "../listener-management/profile-approvals/ProfileApproval";
import PaymentList from "../payment-management/payment-list/PaymentList";
import SalaryPyout from "../payment-management/salary-payout/SalaryPyout";
import Gst from "../payment-management/gst-list/Gst";
import CommisionLiat from "../payment-management/commision-list/CommisionLiat";
import RevenueInfo from "../payment-management/revenue-info/RevenueInfo";
import Recharge from "../recharge-charges/recharge-plans/Recharge";
import GiftManagement from "../recharge-charges/gift-management/GiftManagement";
import CoupenManagement from "../recharge-charges/coupen-management/CoupenManagement";
import ChargeManagement from "../recharge-charges/charge-management/ChargeManagement";
import ContactManage from "../contact-quires-manage/contact-manage/ContactManage";
import ReportBlock from "../contact-quires-manage/report-block/ReportBlock";
import QueriesManage from "../contact-quires-manage/query-manage/Queriesmanage";
import FaqCategoryManage from "../cms-data/faq-category-manage/FaqCategoryManage";
import FaqManage from "../cms-data/faq-manage/FaqManage";
import TopicManage from "../cms-data/topic-manage/TopicManage";
import ReferEarn from "../cms-data/refer-earn/ReferEarn";
import Reviewmanage from "../cms-data/review-manage/ReviewMange";
import SessionManage from "../cms-data/message-video-audio/SessionRecords";
import SubAdminManage from "../sub-admin-role/sub-admin-manage/SubAdminManage";
import RoleManage from "../sub-admin-role/role-manage/RoleManage";
import BusinessMis from "../mis/business-mis/BusinessMis";
import RevenueMis from "../mis/revenue-mis/RevenueMis";
import GstMis from "../mis/gst-mis/GstMis";
import MisSixty from "../mis/360-mis/MisSixty";
import NotificationMain from "../notification-and-banner/NotificationMain";
import Addbanner from "../notification-and-banner/banner/Addbanner";
import AddNotification from "../notification-and-banner/notification/AddNotification";
import Status from "../status/Status";
import PenaltyManage from "../recharge-charges/penalty-manage/Penaltymanage";
import Setting from "../setting/Setting";
import ListenerProfileView from "../listener-management/listener-profile-view/ListenerProfileView";
import Docs from "../listener-management/docs/Docs";

const Main = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <>
      <div className="main-section ">
        <Sidebar isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
        <div id="main" className="main">
          <Navbars toggleSidebar={toggleSidebar} />
          <Routes>
            <Route path="/analytics" element={<Dashboard />} />

            <Route path="/user-management/users-list" element={<Users />} />
            <Route
              path="/user-management/active-users"
              element={<ActiveUsers />}
            />
            <Route
              path="/user-management/recent-users"
              element={<RecentUsers />}
            />

            <Route
              path="/listener-management/listeners-list"
              element={<Listeners />}
            />
            <Route
              path="/listener-management/listener-application-request"
              element={<ApplicationRequests />}
            />
            <Route
              path="/listener-management/listeners-profile-approvals"
              element={<ProfileApproval />}
            />
            <Route
              path="/listener-management/listeners-profile-approvals-docs"
              element={<Docs />}
            />
            {/* <Route
              path="/payment-management/payment-list"
              element={<PaymentList />}
            />
            <Route
              path="/payment-management/salary-payout"
              element={<SalaryPyout />}
            />
            <Route path="/payment-management/Gst-list" element={<Gst />} />
            <Route
              path="/payment-management/commission-list"
              element={<CommisionLiat />}
            />
            <Route
              path="/payment-management/revenue-info"
              element={<RevenueInfo />}
            />

            <Route path="/recharge-charges/plans" element={<Recharge />} />
            <Route
              path="/recharge-charges/gift-manage"
              element={<GiftManagement />}
            />
            <Route
              path="/recharge-charges/coupen-manage"
              element={<CoupenManagement />}
            />
            <Route
              path="/recharge-charges/charge-manage"
              element={<ChargeManagement />}
            />
            <Route
              path="/recharge-charges/penalty-manage"
              element={<PenaltyManage />}
            />

            <Route
              path="/contact-queries/contact-manage"
              element={<ContactManage />}
            />
            <Route
              path="/contact-queries/report-block"
              element={<ReportBlock />}
            />
            <Route
              path="/contact-queries/queries-manage"
              element={<QueriesManage />}
            />

            <Route
              path="/cms/FAQ-Category-manage"
              element={<FaqCategoryManage />}
            />
            <Route path="/cms/FAQ-manage" element={<FaqManage />} />
            <Route path="/cms/topic-manage" element={<TopicManage />} />
            <Route path="/cms/refer-earn-manage" element={<ReferEarn />} />
            <Route path="/cms/review-manage" element={<Reviewmanage />} />
            <Route
              path="/cms/message-video-audio"
              element={<SessionManage />}
            />

            <Route path="/sub-admin/create-role" element={<SubAdminManage />} />
            <Route path="/sub-admin/manage-roles" element={<RoleManage />} />

            <Route path="/mis/business-mis" element={<BusinessMis />} />
            <Route path="/mis/revenue-mis" element={<RevenueMis />} />
            <Route path="/mis/gst-mis" element={<GstMis />} />
            <Route path="/mis/360-mis" element={<MisSixty />} />

            <Route path="/notification" element={<NotificationMain />} />
            <Route path="/add-banner" element={<Addbanner />} />
            <Route path="/add-notification" element={<AddNotification />} />

            <Route path="/status" element={<Status />} />
            <Route path="/setting" element={<Setting />} /> */}
            <Route
              path="/listener-management/profile-view"
              element={<ListenerProfileView />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Main;
