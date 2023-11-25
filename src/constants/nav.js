import { BsFillPeopleFill, BsHeadsetVr } from "react-icons/bs";
import {
  MdAddHome,
  MdDashboard,
  MdOutlineExplore,
  MdOutlineLightMode,
  MdTravelExplore,
} from "react-icons/md";
import { FaBell, FaBrain } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FiBookmark } from "react-icons/fi";
import { BiMessageAltError, BiSolidMessageAltDetail } from "react-icons/bi";
import { RiAccountPinBoxFill, RiAccountPinCircleFill } from "react-icons/ri";

export const navlinksdata = [
  { text: "Home", link: "/" },
  // { text: "Get in touch", link: "/get-in-touch" },
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
    link: "/messages",
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
    text: "Dashboard",
    link: "/dashboard",
    label: "Dashboard",
    icon: <MdDashboard size={25} />,
  },
];

export const moremodaldata = [
  {
    text: "Settings",
    icon: <IoMdSettings size={25} color="#fff" />,
    link: "/account/settings",
  },
  {
    text: "Saved",
    icon: <FiBookmark size={25} color="#fff" />,
    link: "/dashboard/saved",
  },
  {
    text: "Account",
    icon: <RiAccountPinBoxFill size={25} color="#fff" />,
    link: "/account/",
    isprofie: true,
  },
  {
    text: "Report a problem",
    icon: <BiMessageAltError size={25} color="#fff" />,
    link: "/account/settings/?report",
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
    text: "Report a problem",
    icon: <BiMessageAltError size={30} color="#fff" />,
    link: "/account/settings/?report",
  },
];
