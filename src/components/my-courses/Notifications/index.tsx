import React from 'react';

import { List } from 'antd';

import AppCard from '../../_shared/AppCard';
import { NotificationDataType } from '../../../core/types/my-courses';
import {
  StyledNotificationContent,
  StyledNotificationItem,
  StyledNotificationThumb,
} from './index.styled';

type NotificationItemProps = {
  notification: NotificationDataType;
};

type NotificationsProps = {
  notifications: NotificationDataType[];
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

export const Notifications = ({ notifications }: NotificationsProps) => {
  return (
    <AppCard
      className="no-card-space-ltr-rtl"
      heightFull
      title="Notificações"
      style={{
        maxHeight: '434px',
      }}
    >
      <List
        size="small"
        dataSource={notifications}
        renderItem={(data, index) => (
          <NotificationItem key={index} notification={data} />
        )}
      />
    </AppCard>
  );
};
