import React from 'react';
import { List } from 'antd';
import {
  StyledNotificationThumb,
  StyledNotificationContent,
  StyledNotificationItem,
} from './index.styled';
import { NotificationDataType } from '../../../core/types/my-courses';
import AppCard from '../../_shared/AppCard';

type NotificationItemProps = {
  notification: NotificationDataType;
};

const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
}) => {
  return (
    <StyledNotificationItem className="item-hover">
      <StyledNotificationThumb
        style={{
          backgroundColor: notification.bgcolor,
          color: notification.color,
        }}
      >
        {notification.letter}
      </StyledNotificationThumb>
      <StyledNotificationContent>
        <h3>{notification.content}</h3>
        <p className="text-truncate">{notification.date}</p>
      </StyledNotificationContent>
    </StyledNotificationItem>
  );
};

type NotificationsProps = {
  notifications: NotificationDataType[];
};

const Notifications: React.FC<NotificationsProps> = ({ notifications }) => {
  return (
    <AppCard className="no-card-space-ltr-rtl" heightFull title="Notificações">
      <List
        dataSource={notifications}
        renderItem={(data, index) => (
          <NotificationItem key={index} notification={data} />
        )}
      />
    </AppCard>
  );
};

export default Notifications;
