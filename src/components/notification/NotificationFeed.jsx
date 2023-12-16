import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotifications } from "../../helper/fetch";
import BackArrow from "../Back";
import { BottomDivider, Error, ScaleInLoader } from "../../lib";
import NotificationItem from "./NotificationItem";
import { fetchNotifications } from "../../redux/notification";

const NotificationFeed = () => {
  const userId = useSelector((state) => state.AUTH.id);
  const dispatch = useDispatch();
  const noteState = useSelector((state) => state.NOTIFICATION);
  const notifications = noteState.NOTIFICATIONS;
  const isLoading = noteState.FETCH_STATUS === "Pending";
  const error = noteState.FETCH_STATUS === "Rejected";

  useEffect(() => {
    dispatch(fetchNotifications(userId));
  }, []);

  useEffect(() => {
    document.title = "Notification | EquityEagle";
  });

  return (
    <div className="flex flex-col relative w-full mt-5">
      <BackArrow title="Notifications" />
      <BottomDivider />
      <div className="flex flex-col w-full relative">
        {error ? (
          <Error
            text="Cannot retieve notifications at this time. Please try again later"
            btnText="Retry"
            className="translate-y-52"
            onClick={() => dispatch(fetchNotifications(userId))}
          />
        ) : isLoading ? (
          <div className="flex flex-col min-w-full">
            <ScaleInLoader />
          </div>
        ) : (
          notifications &&
          notifications?.map((notification, index) => (
            <NotificationItem key={index} notification={notification} />
          ))
        )}
      </div>
    </div>
  );
};

export default NotificationFeed;
