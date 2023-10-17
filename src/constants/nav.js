import { BsFillPeopleFill, BsHeadsetVr } from "react-icons/bs";
import {
  MdDashboard,
  MdOutlineExplore,
  MdOutlineLightMode,
  MdTravelExplore,
} from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { FiBookmark } from "react-icons/fi";
import { BiMessageAltError } from "react-icons/bi";
import { RiAccountPinBoxFill, RiAccountPinCircleFill } from "react-icons/ri";

export const navlinksdata = [
  { text: "Home", link: "/" },
  { text: "Why Us?", link: "/" },
  { text: "Setups", link: "/" },
  { text: "Channels", link: "/" },
  { text: "Signals", link: "/" },
];

export const sidenavdata = [
  {
    text: "Setups",
    link: "/setups",
    label: "Setups",
    icon: <BsHeadsetVr size={25} />,
  },
  {
    text: "Explore",
    link: "/explore",
    label: "Explore",
    icon: <MdTravelExplore size={25} />,
  },
  {
    text: "Notification",
    link: "/notification",
    label: "Notification",
    icon: <FaBell size={25} />,
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
  },
  {
    text: "Report a problem",
    icon: <BiMessageAltError size={25} color="#fff" />,
    link: "/account/settings/?report",
  },
];
