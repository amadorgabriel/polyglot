import { Col,  Space } from 'antd';

import { PageMeta } from '../../components/_shared/PageMeta';
import { MyProfile } from '../../components/my-courses/MyProfile';
import { MyCourses } from '../../components/my-courses/MyCourses';
import { GeneralStats } from '../../components/my-courses/GeneralStats';
import { DrawerLayout } from '../../components/_shared/Layout/Drawer';
import { AppRowContainer } from '../../components/_shared/AppRowContainer';
import { StyledAcaNotificationRoot, StyledMyCourseRoot } from './index.styled';
import { AddCourseCard } from '../../components/my-courses/AddCourseCard';
import { useFindCourses } from '../../core/domain/courses/courses.hook';
import { useFindEnrollments } from '../../core/domain/enrollments/enrollment.hook';
import { useFindStudents } from '../../core/domain/students/students.hook';
import { ProfileType } from '../../core/types/my-courses';
// import { notificationsData } from '../../core/mocks/my-courses';

export const MyCoursesPage = () => {
  const coursesData = useFindCourses();
  const studentsData = useFindStudents();
  const enrollmentsData = useFindEnrollments();

  const profileData: ProfileType = {
    id: 1,
    profile_pic:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfcmUC96OhfxsSjyYVVZ5S7Ith_fRFidm8qA&s',
    name: 'Renato Nogueira',
    designation: 'Professor',
    achievements: 0,
    friends: studentsData.data?.length || 0,
  };

  return (
    <DrawerLayout>
      <PageMeta title="Meus Cursos | Polyglot Academy" />

      <AppRowContainer>
        <Col xs={24} sm={12} lg={6}>
          <GeneralStats
            stats={{
              title: 'Vendas totais',
              count: 'R$0',
              new: 'Novo R$0',
              badgeColor: '#9E49E6',
              bgcolor: '#F5EDFC',
              icon: 'BiBasket',
            }}
          />
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <GeneralStats
            loading={enrollmentsData.isLoading}
            stats={{
              title: 'Total de inscrições',
              count: String(enrollmentsData.data?.length || 0),
              new: 'Novo 0',
              badgeColor: '#0A8FDC',
              bgcolor: '#E7F4FB',
              icon: 'FcGraduationCap',
            }}
          />
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <GeneralStats
            loading={coursesData.isLoading}
            stats={{
              title: 'Total de cursos',
              count: String(coursesData.data?.length || 0),
              new: 'Novo 0',
              badgeColor: '#F44D50',
              bgcolor: '#EDF8F0',
              icon: 'GiBookshelf',
            }}
          />
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <GeneralStats
            loading={studentsData.isLoading}
            stats={{
              title: 'Total de alunos',
              count: String(studentsData.data?.length || 0),
              new: 'Novo 0',
              badgeColor: '#49BD65',
              bgcolor: '#EAF7EE',
              icon: 'FcReading',
            }}
          />
        </Col>

        <Col xs={24} sm={12} lg={6}>
          <MyProfile profile={profileData} loading={coursesData.isLoading} />
        </Col>

        <StyledMyCourseRoot xs={24} sm={24} lg={12}>
          <MyCourses
            courses={coursesData.data || []}
            loading={coursesData.isLoading}
          />
        </StyledMyCourseRoot>

        <StyledAcaNotificationRoot xs={24} sm={12} lg={6}>
          <Space size="large" direction="vertical">
            <AddCourseCard />
            {/* <Notifications notifications={notificationsData} /> */}
          </Space>
        </StyledAcaNotificationRoot>
      </AppRowContainer>
    </DrawerLayout>
  );
};
