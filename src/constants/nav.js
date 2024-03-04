import { BsFillPeopleFill } from "react-icons/bs";
import {
  MdAddHome,
  MdDashboard,
  MdOutlineConnectWithoutContact,
} from "react-icons/md";
import { FaBell, FaBrain } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FiBookmark } from "react-icons/fi";
import { BiMessageAltError, BiSolidMessageAltDetail } from "react-icons/bi";
import { RiAccountPinBoxFill } from "react-icons/ri";

export const navlinksdata = [
  { text: "Home", link: "/" },
  { text: "Sign Up", link: "/auth/sign-up" },
  { text: "Login", link: "/auth/login" },
];

export const sidenavdata = [
  {
    text: "Ideas",
    link: "/ideas",
    label: "Ideas",
    icon: <FaBrain size={25} />,
  },
  {
    text: "New Community",
    link: "/new-community",
    label: "New Community",
    icon: <MdAddHome size={25} />,
  },
  {
    text: "Notification",
    link: "/notification",
    label: "Notification",
    icon: <FaBell size={25} />,
    isNote: true,
  },
  {
    text: "Messages",
    // link: "/messages",
    link: "/coming-soon",
    label: "Messages",
    icon: <BiSolidMessageAltDetail size={25} />,
    isMsg: true,
  },
  {
    text: "Communities",
    link: "/communities",
    label: "Communities",
    icon: <BsFillPeopleFill size={25} />,
  },
  {
    text: "Connect with traders",
    link: "/connect",
    label: "Connect",
    showOnTab: true,
    icon: <MdOutlineConnectWithoutContact size={30} color="#fff" />,
  },
  {
    text: "Dashboard",
    link: "/dashboard",
    label: "Dashboard",
    icon: <MdDashboard size={25} />,
  },
];

export const moremodaldata = [
  // {
  //   text: "Settings",
  //   icon: <IoMdSettings size={25} color="#fff" />,
  //   link: "/account/settings",
  // },
  {
    text: "Saved",
    icon: <FiBookmark size={25} />,
    link: "/dashboard/saved",
  },
  {
    text: "Account",
    icon: <RiAccountPinBoxFill size={25} />,
    link: "/account/",
    isprofie: true,
  },
  {
    text: "Report a problem",
    icon: <BiMessageAltError size={25} />,
    // link: "/account/settings/?report",
    link: "coming-soon",
  },
];

export const mobilenavdata = [
  {
    text: "Account",
    icon: <RiAccountPinBoxFill size={30} color="#fff" />,
    link: "/account/",
    isprofie: true,
  },
  {
    text: "New Community",
    link: "/new-community",
    icon: <MdAddHome size={30} color="#fff" />,
  },
  {
    text: "Communities",
    link: "/communities",
    icon: <BsFillPeopleFill size={30} color="#fff" />,
  },
  {
    text: "Saved",
    icon: <FiBookmark size={30} color="#fff" />,
    link: "/dashboard/saved",
  },
  {
    text: "Settings",
    icon: <IoMdSettings size={30} color="#fff" />,
    link: "/account/settings",
  },
  {
    text: "Connect with traders",
    link: "/connect",
    icon: <MdOutlineConnectWithoutContact size={30} color="#fff" />,
  },
  {
    text: "Report a problem",
    icon: <BiMessageAltError size={30} color="#fff" />,
    // link: "/account/settings/?report",
    link: "coming-soon",
  },
];
