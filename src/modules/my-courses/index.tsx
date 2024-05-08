import { Col } from 'antd';

import { academyData } from '../../core/mocks/my-courses';
import MyClass from '../../components/my-courses/MyClass';
import { PageMeta } from '../../components/_shared/PageMeta';
import MyProfile from '../../components/my-courses/MyProfile';
import MyCourses from '../../components/my-courses/MyCourses';
import MyLearning from '../../components/my-courses/MyLearning';
import VideoPromo from '../../components/my-courses/VideoPromo';
import GeneralStats from '../../components/my-courses/GeneralStats';
import LatestResults from '../../components/my-courses/LatestResults';
import Notifications from '../../components/my-courses/Notifications';
import AppRowContainer from '../../components/_shared/AppRowContainer';

import { StyledAcaNotificationRoot, StyledMyCourseRoot } from './index.styled';
import { DrawerLayout } from '../../components/_shared/Layout/Drawer';

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

        <Col xs={24} className="mb-0" key={'c'}>
          <AppRowContainer>
            <Col xs={24} sm={12} lg={6}>
              <MyProfile profile={academyData.profile} />
            </Col>

            <StyledAcaNotificationRoot xs={24} sm={12} lg={6} key={'d'}>
              <Notifications notifications={academyData.notifications} />
            </StyledAcaNotificationRoot>

            <StyledMyCourseRoot xs={24} sm={24} lg={12} key={'e'}>
              <MyCourses courses={academyData.courses} />
            </StyledMyCourseRoot>
          </AppRowContainer>
        </Col>

        <Col xs={24} sm={24} lg={10} xxl={12} key={'g'}>
          <VideoPromo videoPromo={academyData.videoPromo} />
        </Col>

        <Col xs={24} sm={24} lg={14} xxl={12} className="mb-0" key={'h'}>
          <AppRowContainer>
            <Col xs={24}>
              <MyLearning learningData={academyData.learningData} />
            </Col>
            <Col xs={24} sm={12} xl={12} key={'i'}>
              <LatestResults latestResults={academyData.latestResults} />
            </Col>
            <Col xs={24} sm={12} xl={12} key={'j'}>
              <MyClass classData={academyData.classData} />
            </Col>
          </AppRowContainer>
        </Col>
      </AppRowContainer>
    </DrawerLayout>
  );
};
