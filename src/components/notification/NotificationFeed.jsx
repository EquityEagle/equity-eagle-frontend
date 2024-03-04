import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getNotifications } from "../../helper/fetch";
import BackArrow from "../Back";
import { BottomDivider, Empty, Error, ScaleInLoader } from "../../lib";
import NotificationItem from "./NotificationItem";
import { fetchNotifications } from "../../redux/notification";
import { notifydata } from "../../constants/noti";
import { RiFolderHistoryLine } from "react-icons/ri";

const NotificationFeed = () => {
  const userId = useSelector((state) => state.AUTH.id);
  const dispatch = useDispatch();
  const noteState = useSelector((state) => state.NOTIFICATION);
  const notifications = noteState.NOTIFICATIONS;
  const isLoading = noteState.FETCH_STATUS === "Pending";
  const error = noteState.FETCH_STATUS === "Rejected";
  const empty = notifications.length === 0;

  useEffect(() => {
    document.title = "Notification | EquityEagle";
  });

  return (
    <div className="flex flex-col relative w-full h-full mt-5 border-l border-r border-r-neutral-800 border-l-neutral-800">
      <BackArrow title="Notifications" hasBg />
      <BottomDivider />
      <div className="flex flex-col w-full relative h-full">
        {error ? (
          <Error
            text="Cannot retieve notifications at this time. Please try again later"
            btnText="Retry"
            className="translate-y-52"
            onClick={() => dispatch(fetchNotifications(userId))}
          />
        ) : empty ? (
          <Empty text="You have no notifications" />
        ) : isLoading ? (
          <div className="flex flex-col min-w-full">
            <ScaleInLoader />
          </div>
        ) : (
          notifications &&
          notifications
            ?.filter((not) => not.reactionId !== userId)
            .map((notification, index) => (
              <NotificationItem key={index} notification={notification} />
            ))
        )}
      </div>
    </div>
  );
};

export default NotificationFeed;
