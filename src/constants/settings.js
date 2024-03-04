import { BiSolidMessageSquareEdit } from "react-icons/bi";
import { FaBell } from "react-icons/fa";
import { FiHelpCircle } from "react-icons/fi";
import { MdAccountBox, MdDataUsage, MdSecurity } from "react-icons/md";
import { TbBell } from "react-icons/tb";

export const settinglinks = [
  {
    title: "Account",
    subtitle:
      "See information about your account, learn about your account deactivtation option",
    icon: <MdAccountBox color="white" size={36} />,
  },
  {
    title: "Privacy",
    subtitle: "Manage what you see and share on EquityEagle, block user",
    icon: <MdSecurity color="white" size={30} />,
  },
  {
    title: "Notifications",
    subtitle:
      "Manage the kind of notifications you get, interest and recommendation",
    icon: <TbBell color="white" size={28} />,
  },
  {
    title: "Personalization",
    subtitle: "Change theme, text size",
    icon: <BiSolidMessageSquareEdit color="white" size={30} />,
  },
  {
    title: "Storage and data",
    subtitle: "Netword usage",
    icon: <MdDataUsage color="white" size={30} />,
  },
  {
    title: "Help",
    subtitle: "Help center, contact us, privacy policy",
    icon: <FiHelpCircle color="white" size={30} />,
  },
];
