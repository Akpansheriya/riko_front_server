import dashboard from "../assets/Union.png";
import users from "../assets/users.png";
import listeners from "../assets/listener.png";
import payment from "../assets/payment.png";
import recharge from "../assets/recharge.png";
import contact from "../assets/user-setting.png";
import cms from "../assets/cms.png";
import subAdmin from "../assets/subadmin.png";
import mis from "../assets/mis.png";
import setting from "../assets/setting.png";
import notification from "../assets/flag.png";
import status from "../assets/status.png";
import dropdown from "../assets/dropdown.png";
export const links = [
  {
    title: "Dashboard",
    path: "/dashboard/analytics",
    icon: dashboard,
    type: "button",
  },
  {
    title: "User Management",
    icon: users,
    type: "dropdown",
    children: [
      {
        title: "User List",
        path: "/dashboard/user-management/users-list",
        icon: dropdown,
      },
      {
        title: "Active User",
        path: "/dashboard/user-management/active-users",
        icon: dropdown,
      },
      {
        title: "Recent User",
        path: "/dashboard/user-management/recent-users",
        icon: dropdown,
      },
    ],
  },
  {
    title: "Listener Management",
    icon: listeners,
    type: "dropdown",
    children: [
      {
        title: "Listeners",
        path: "/dashboard/listener-management/listeners-list",
        icon: dropdown,
      },
      {
        title: "Listener Application Request List",
        path: "/dashboard/listener-management/listener-application-request",
        icon: dropdown,
      },
      {
        title: "Listeners Profile Approval Requests List",
        path: "/dashboard/listener-management/listeners-profile-approvals",
        icon: dropdown,
      },
    ],
  },

  {
    title: "Payment Management",
    icon: payment,
    type: "dropdown",
    children: [
      {
        title: "Payment List",
        path: "/dashboard/payment-management/payment-list",
        icon: dropdown,
      },
      {
        title: "Salary Payout",
        path: "/dashboard/payment-management/salary-payout",
        icon: dropdown,
      },
      {
        title: "GST List",
        path: "/dashboard/payment-management/Gst-list",
        icon: dropdown,
      },
      {
        title: "Commission List",
        path: "/dashboard/payment-management/commission-list",
        icon: dropdown,
      },
      {
        title: "Revenue Info",
        path: "/dashboard/payment-management/revenue-info",
        icon: dropdown,
      }
    ],
  },
  {
    title: "Recharge and Charges Management",
    path: "/dashboard/recharge-charges",
    icon: recharge,
    type: "dropdown",
    children: [
      {
        title: "Recharge Plan Manage",
        path: "/dashboard/recharge-charges/plans",
        icon: dropdown,
      },
      {
        title: "Gift Amount Manage",
        path: "/dashboard/recharge-charges/gift-manage",
        icon: dropdown,
      },
      {
        title: "Coupen Manage",
        path: "/dashboard/recharge-charges/coupen-manage",
        icon: dropdown,
      },
      {
        title: "Charge Manage",
        path: "/dashboard/recharge-charges/charge-manage",
        icon: dropdown,
      },
      {
        title: "Penalty Manage",
        path: "/dashboard/recharge-charges/penalty-manage",
        icon: dropdown,
      }
    ],
  },
  {
    title: "Contact & Queries Management",
    path: "/dashboard/contact-queries",
    icon: contact,
    type: "dropdown",
    children: [
      {
        title: "Contact Manage",
        path: "/dashboard/contact-queries/contact-manage",
        icon: dropdown,
      },
      {
        title: "Report and Block Manage",
        path: "/dashboard/contact-queries/report-block",
        icon: dropdown,
      },
      {
        title: "Queries Manage",
        path: "/dashboard/contact-queries/queries-manage",
        icon: dropdown,
      }
    ]
  },
  {
    title: "CMS & Data Management",
    path: "/dashboard/cms",
    icon: cms,
    type: "dropdown",
    children: [
      {
        title: "Pages Manage",
        path: "/dashboard/cms/pages-manage",
        icon: dropdown,
      },
      {
        title: "FAQ Category Manage",
        path: "/dashboard/cms/FAQ-Category-manage",
        icon: dropdown,
      },
      {
        title: "FAQ Manage",
        path: "/dashboard/cms/FAQ-manage",
        icon: dropdown,
      },
      {
        title: "Topic Manage",
        path: "/dashboard/cms/topic-manage",
        icon: dropdown,
      },
      {
        title: "Refer & Earn Manage",
        path: "/dashboard/cms/refer-earn-manage",
        icon: dropdown,
      },
      {
        title: "Review Manage",
        path: "/dashboard/cms/review-manage",
        icon: dropdown,
      },
      {
        title: "Message, Video, Audio",
        path: "/dashboard/cms/Message-Video-Audio",
        icon: dropdown,
      }
    ]
  },
  {
    title: "Sub Admin & Role Management",
    path: "/dashboard/sub-admin",
    icon: subAdmin,
    type: "dropdown",
    children: [
      {
        title: "Sub Admin & Role Management",
        path: "/dashboard/sub-admin/create-role",
        icon: dropdown,
      },
      {
        title: "Sub Admin Manage",
        path: "/dashboard/sub-admin/manage-roles",
        icon: dropdown,
      },
    ],
  },
  {
    title: "MIS",
    path: "/dashboard/mis",
    icon: mis,
    type: "dropdown",
    children: [
      {
        title: "Business Mis",
        path: "/dashboard/mis/business-mis",
        icon: dropdown,
      },
      {
        title: "Revenue Mis",
        path: "/dashboard/mis/revenue-mis",
        icon: dropdown,
      },
      {
        title: "GST Mis",
        path: "/dashboard/mis/gst-mis",
        icon: dropdown,
      },
      {
        title: "360 Mis",
        path: "/dashboard/mis/360-mis",
        icon: dropdown,
      }
    ],
  },
  {
    title: "Setting",
    path: "/dashboard/setting",
    icon: setting,
    type: "button",
  },
  {
    title: "Notification",
    path: "/dashboard/notification",
    icon: notification,
    type: "button",
  },
  {
    title: "Status",
    path: "/dashboard/status",
    icon: status,
    type: "button",
  },
];
