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
        <div className="flex flex-col gap-1 relative">
          <p
            onClick={onClick}
            className={`${className} ${
              fontMedium ? "font-medium" : "font-normal"
            } ${fontSemiBold ? "font-semibold" : "font-normal"} ${
              fontExtraBold ? "font-extrabold" : "font-normal"
            } ${fontBold ? "font-bold" : "font-normal"} ${
              fontKanit && "font-kanit"
            } ${fontPoppins && "font-poppins"}`}
          >
            {textReducer}
          </p>
          <p
            onClick={underClick}
            className="cursor-pointer hover:underline w-[90px]"
          >
            {text?.length > 70 ? underText : ""}
          </p>
        </div>
      )}
    </>
  );
};

export default TruncatedText;
