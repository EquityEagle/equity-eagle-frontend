import React from "react";
import { Flex } from "../../styles/components/styled";
import { Placeholder } from "../../assets";
import { FlexBetween } from "../../styles/Global";
import { BottomDivider } from "../../lib";

const NotificationItem = ({ notification }) => {
  const timestamp = new Date(notification.createdAt);
  const formattedDate = timestamp.toLocaleString("en-US", {
    month: "short",
    day: "2-digit",
  });
  return (
    <>
      <FlexBetween className={`cursor-pointer p-[16px] hover:bg-neutral-800`}>
        <Flex className="gap-2">
          <img
            src={notification.image?.url || Placeholder}
            alt="Image"
            className="w-[45px] h-[45px] rounded-full"
          />
          <p className="text-white font-poppins text-[16px]">
            {notification.body}
          </p>
        </Flex>
        <p className="text-neutral-300 font-kanit text-[14px]">
          {formattedDate}
        </p>
      </FlexBetween>
      <BottomDivider />
    </>
  );
};

export default NotificationItem;
