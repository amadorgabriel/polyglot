import { Col, Space } from 'antd';

import { academyData } from '../../core/mocks/my-courses';
import { PageMeta } from '../../components/_shared/PageMeta';
import MyProfile from '../../components/my-courses/MyProfile';
import MyCourses from '../../components/my-courses/MyCourses';
import PromoCard from '../../components/my-courses/PromoCard';
import GeneralStats from '../../components/my-courses/GeneralStats';
import { DrawerLayout } from '../../components/_shared/Layout/Drawer';
import Notifications from '../../components/my-courses/Notifications';
import AppRowContainer from '../../components/_shared/AppRowContainer';
import { StyledAcaNotificationRoot, StyledMyCourseRoot } from './index.styled';

export const MyCoursesPage = () => {
  return (
    <DrawerLayout>
      <PageMeta title="Meus Cursos | Polyglot Academy" />

      <AppRowContainer>
        {academyData.academicStats.map((item, index) => (
          <Col xs={24} sm={12} lg={6} key={'a' + index}>
            <GeneralStats stats={item} />
          </Col>
        ))}

        <Col xs={24} sm={12} lg={6}>
          <MyProfile profile={academyData.profile} />
        </Col>

        <StyledMyCourseRoot xs={24} sm={24} lg={12}>
          <MyCourses />
        </StyledMyCourseRoot>

        <StyledAcaNotificationRoot xs={24} sm={12} lg={6}>
          <Space size="large" direction="vertical">
            <Notifications notifications={academyData.notifications} />
            <PromoCard />
          </Space>
        </StyledAcaNotificationRoot>
      </AppRowContainer>
    </DrawerLayout>
  );
};
