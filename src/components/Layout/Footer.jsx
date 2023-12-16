import React from "react";
import { StyledFooter } from "../../styles/components/styled";
import { EquityEagleLogo } from "../../assets";
import { links } from "../../constants/link";
import { useLocation } from "react-router-dom";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const path = useLocation();
  const notHome =
    path.pathname !== "/" &&
    !path.pathname.includes("auth") &&
    path.pathname !== "/get-in-touch";
  // const notHome = path.pathname !== "/" && path.pathname.includes("auth");
  return (
    <StyledFooter notHome={notHome} className="border-t border-t-neutral-500">
      <div className="flex flex-col w-[380px] max-[700px]:w-[300px] gap-5">
        <img
          src={EquityEagleLogo}
          alt="Logo"
          className="w-[200px] max-[700px]:w-[150px]"
        />
        <p className="text-gray font-kanit text-[20px] max-[700px]:text-[17px]">
          Empowering you to capture, analyze, and optimize your trading journey.
          Seamlessly record every trade, gain valuable insights, and enhance
          your trading strategy
        </p>
        <p className="text-neutral-300 font-kanit mt-[2rem]">
          &copy; 2023 EquityEagle . All Rights Reserved
        </p>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-blue-600 font-kanit text-[18px]">Brokers</h2>
        <a
          href={links.kwakol}
          target="_blank"
          rel="noreferrer"
          className="text-white text-[16px] hover:opacity-75 font-kanit"
        >
          Kwakolmarkets
        </a>
        <a
          href={links.fbs}
          target="_blank"
          rel="noreferrer"
          className="text-white text-[16px] hover:opacity-75 font-kanit"
        >
          FBS Trader
        </a>
        <a
          href={links.octafx}
          target="_blank"
          rel="noreferrer"
          className="text-white text-[16px] hover:opacity-75 font-kanit"
        >
          OctaFx
        </a>
        <a
          href={links.exness}
          target="_blank"
          rel="noreferrer"
          className="text-white text-[16px] hover:opacity-75 font-kanit"
        >
          Exness
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-blue-600 font-kanit text-[18px]">Prop Firms</h2>
        <a
          href={links.consumate}
          target="_blank"
          rel="noreferrer"
          className="text-white text-[16px] hover:opacity-75 font-kanit"
        >
          ConsumateTraders
        </a>
        <a
          href={links.ftmo}
          target="_blank"
          rel="noreferrer"
          className="text-white text-[16px] hover:opacity-75 font-kanit"
        >
          FTMO
        </a>
      </div>
      <div className="flex flex-col gap-3">
        <h2 className="text-blue-600 font-kanit text-[18px]">Get in touch</h2>
        <div className="flex gap-4">
          <a
            href="https://twitter.com/kingrashy64"
            target="_blank"
            rel="noreferrer"
            className="text-white text-[16px] hover:opacity-75 font-kanit"
          >
            <FaSquareXTwitter size={25} className="cursor-pointer" />
          </a>
          <a
            href="https://instagram.com/iamkingrashy"
            target="_blank"
            rel="noreferrer"
            className="text-white text-[16px] hover:opacity-75 font-kanit"
          >
            <FaInstagram size={25} color="" className="cursor-pointer" />
          </a>
          <a
            href="/"
            target="_blank"
            rel="noreferrer"
            className="text-white text-[16px] hover:opacity-75 font-kanit"
          >
            <FaWhatsapp size={25} className="cursor-pointer text-green-500" />
          </a>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
