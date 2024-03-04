import React from "react";
import { Skeleton } from "@mui/joy";

const TruncatedText = ({
  className,
  fontSemiBold,
  fontBold,
  fontMedium,
  fontExtraBold,
  isLoading,
  variant,
  loadingWidth,
  loadingHeight,
  text,
  fontPoppins,
  underText,
  onClick,
  maxLength,
  underClick,
  fontKanit,
}) => {
  const textReducer =
    text?.length > maxLength ? `${text.slice(0, maxLength)}....` : text;
  return (
    <>
      {isLoading ? (
        <Skeleton
          variant={variant}
          width={loadingWidth}
          height={loadingHeight}
        />
      ) : (
        <div className="flex flex-col">
          <p
            onClick={onClick}
            className={`${className} pre-tag /whitespace-pre-wrap /overflow-auto`}
          >
            {textReducer}
          </p>
          <p
            onClick={underClick}
            className="cursor-pointer hover:underline w-[90px] show-more-text -translate-x-2 mt-1"
          >
            {text?.length > 95 ? underText : ""}
          </p>
        </div>
      )}
    </>
  );
};

export default TruncatedText;
