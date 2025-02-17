import user from "../assets/blue-user.png";
import headphone from "../assets/purple-headphone.png";
import yellowAmount from "../assets/yellow-amount.png";
import greenAmount from "../assets/green-amount.png";
import purpleAmount from "../assets/purple-amount.png";
import soilGreenAmount from "../assets/soil-green-amount.png";
import brownAmount from "../assets/brown-amount.png";
import greyAmount from "../assets/grey-amount.png";
import ups from "../assets/ups.png";
import down from "../assets/down.png";
export const details = [
  {
    title: "Total User",
    amount: "9000",
    percentage: "10%",
    icon: user,
    growth: ups,
    growthClass: "text-green",
    backgroundClass: "blue",
  },
  {
    title: "Total Listeners ",
    percentage: "10%",
    amount: "Customers",
    icon: headphone,
    growth: ups,
    growthClass: "text-green",
    backgroundClass: "purple",
  },
  {
    title: "This Month listener earnings",
    percentage: "10%",
    amount: "Loans",
    icon: yellowAmount,
    growth: ups,
    growthClass: "text-green",
    backgroundClass: "yellow",
  },
  {
    title: " This Month Recharge",
    percentage: "10%",
    amount: "Invested Capital",
    icon: greenAmount,
    growth: down,
    growthClass: "text-red",
    backgroundClass: "green",
  },
  {
    title: "This Month Admin collection",
    percentage: "10%",
    amount: "Collected",
    icon: purpleAmount,
    growth: ups,
    growthClass: "text-green",
    backgroundClass: "purple",
  },
  {
    title: "Today's Admin collection",
    percentage: "10%",
    amount: "Customers",
    icon: soilGreenAmount,
    growth: ups,
    growthClass: "text-green",
    backgroundClass: "soil-green",
  },
  {
    title: "Today’s listener Earnings",
    percentage: "10%",
    amount: "Loans",
    icon: brownAmount,
    growth: ups,
    growthClass: "text-green",
    backgroundClass: "brown",
  },
  {
    title: "Today’s listener Earnings",
    percentage: "10%",
    amount: "Invested Capital",
    icon: greyAmount,
    growth: down,
    growthClass: "text-red",
    backgroundClass: "grey",
  },
];
