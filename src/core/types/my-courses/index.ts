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

export type CoursesType = {
  categories: {
    id: number;
    title: string;
    slug: string;
  }[];
  courses: {
    id: number;
    title: string;
    duration: string;
    rating: number;
    isCompleted: boolean;
    thumb: string;
  }[];
};

export type VideoPromoDataType = {
  title: string;
  owner: string;
  category: string;
  assignments: {
    id: number;
    title: string;

    desc: string;
    students: number;
    daysLeft: number;
  }[];
};

export type LearningDataType = {
  id: number;
  icon: string;
  title: string;
  desc: string;
  percentage: number;
};

export type LatestResultDataType = {
  id: number;
  chapter: string;
  topic: string;
  percentage: number;
};

export type ClassDataType = {
  id: number;
  name: string;
  percent: number;
  icon: string;
};

export type AcademyType = {
  academicStats: AcademicStatsType[];
  profile: ProfileType;
  notifications: NotificationDataType[];
  courses: CoursesType;
  videoPromo: VideoPromoDataType;
  learningData: LearningDataType[];
  latestResults: LatestResultDataType[];
  classData: ClassDataType[];
};
