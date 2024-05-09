import React from 'react';

import { Button, Tabs } from 'antd';

import { ClockCircleOutlined, CloudDownloadOutlined } from '@ant-design/icons';

import { VideoPromoDataType } from '../../../core/types/my-courses';
import {
  StyledBorderRightBefore,
  StyledReactPlayer,
  StyledReactPlayerView,
  StyledVideoPromo,
  StyledVideoPromoCard,
  StyledVideoPromoHeader,
  StyledVideoPromoHeaderAction,
  StyledVideoPromoHeaderContent,
  StyledVideoPromoHeaderIcon,
  StyledVideoPromoTabs,
  StyledVideoTabsAction,
  StyledVideoTabsActionLeft,
  StyledVideoTabsActionRight,
  StyledVideoTabsContent,
} from './index.styled';

const tabs = [
  { id: 1, title: 'Detalhes da classe', slug: 'class' },
  { id: 2, title: 'atribuições', slug: 'assignments' },
  { id: 3, title: 'Projetos', slug: 'projects' },
  { id: 4, title: 'Exames', slug: 'exams' },
];

type VideoPromoProps = {
  videoPromo: VideoPromoDataType;
};

const VideoPromo: React.FC<VideoPromoProps> = ({ videoPromo }) => {
  const { TabPane } = Tabs;

  return (
    <StyledVideoPromoCard heightFull>
      <StyledReactPlayerView>
        <StyledReactPlayer controls={true} url="https://youtu.be/06sKvW2k20o" />
      </StyledReactPlayerView>
      <StyledVideoPromo>
        <StyledVideoPromoHeader>
          <StyledVideoPromoHeaderContent>
            <h3>{videoPromo.title}</h3>
            <p>
              <StyledBorderRightBefore>
                {videoPromo.owner}
              </StyledBorderRightBefore>
              <StyledBorderRightBefore>
                {videoPromo.category}
              </StyledBorderRightBefore>
              <span className="text-primary">+ Siga mentor</span>
            </p>
          </StyledVideoPromoHeaderContent>
          <StyledVideoPromoHeaderAction>
            <StyledVideoPromoHeaderIcon>
              <ClockCircleOutlined />
            </StyledVideoPromoHeaderIcon>
            <StyledVideoPromoHeaderIcon className="cloud">
              <CloudDownloadOutlined />
            </StyledVideoPromoHeaderIcon>
          </StyledVideoPromoHeaderAction>
        </StyledVideoPromoHeader>

        <StyledVideoPromoTabs defaultActiveKey="1">
          {tabs.map((item, index) => (
            <TabPane tab={item.title} key={index}>
              {item.slug}
            </TabPane>
          ))}
        </StyledVideoPromoTabs>

        {videoPromo.assignments.map((item, index) => (
          <StyledVideoTabsContent key={index}>
            <h4>{`${index + 1}. ${item.title} `}</h4>
            <p>{item.desc}</p>
            <StyledVideoTabsAction>
              <StyledVideoTabsActionLeft>
                <Button
                  size="small"
                  className="btn-primary-outline"
                  style={{ fontSize: 10, whiteSpace: 'nowrap' }}
                >
                 Veja Calendário
                </Button>
                <Button
                  size="small"
                  style={{ fontSize: 10, whiteSpace: 'nowrap' }}
                  type="primary"
                >
                 Ver detalhes
                </Button>
              </StyledVideoTabsActionLeft>
              <StyledVideoTabsActionRight>
                <span>{item.students} Alunos matriculados</span>
                <span className="text-secondary">
                  {item.daysLeft} Dias restantes
                </span>
              </StyledVideoTabsActionRight>
            </StyledVideoTabsAction>
          </StyledVideoTabsContent>
        ))}
      </StyledVideoPromo>
    </StyledVideoPromoCard>
  );
};

export default VideoPromo;
