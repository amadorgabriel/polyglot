import { Col } from 'antd';

import { academyData } from '../../core/mocks/my-courses';
import { PageMeta } from '../../components/_shared/PageMeta';
import GeneralStats from '../../components/my-courses/GeneralStats';
import AppRowContainer from '../../components/_shared/AppRowContainer';

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
      </AppRowContainer>
    </DrawerLayout>
  );
};
