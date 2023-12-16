const MessageIcon = ({ value, className }) => {
  return (
    <p
      className={`bg-red-600 text-white flex ${className} items-center text-center text-[13px] absolute right-4 border border-white justify-center rounded-full w-5 h-5 font-kanit`}
    >
      {value}
    </p>
  );
};

export default MessageIcon;
