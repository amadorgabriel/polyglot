import React, { ReactNode } from 'react';

import styled from 'styled-components';
import SimpleBarReact from 'simplebar-react';

// import 'simplebar/src/simplebar.css';

export const StyledScrollbar = styled(SimpleBarReact)`
  position: relative;
  width: 100%;
  height: 100%;

  & .simplebar-offset,
  & .simplebar-content-wrapper,
  & .simplebar-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
  }
`;

// eslint-disable-next-line no-unused-vars
type AppScrollbarProps = {
  children: ReactNode;
  className?: string;
  scrollToTop?: boolean;

  [x: string]: any;
};

const AppScrollbar: React.FC<AppScrollbarProps> = ({
  children,
  className,
  ...others
}) => {
  return (
    <StyledScrollbar {...others} className={className}>
      {children}
    </StyledScrollbar>
  );
};

export default AppScrollbar;
