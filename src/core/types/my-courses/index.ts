export type AcademicStatsType = {
  id: number;
  title: string;
  count: string;
  new: string;
  badgeColor: string;
  bgcolor: string;
  icon: string;
};

export type ProfileType = {
  id: number;
  profile_pic: string;
  name: string;
  designation: string;
  achievements: number;
  friends: number;
};

export type NotificationDataType = {
  id: number;
  bgcolor: string;
  color: string;
  letter: string;
  content: string;
  date: any;
};
