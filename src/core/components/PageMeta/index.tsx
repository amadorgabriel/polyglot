import React, { ReactNode } from 'react';

import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SITE_URL = process.env.REACT_APP_SITE_URL;

type AppPageMetaProps = {
  children?: ReactNode;
  title: string;
  description?: string;
};

export const AppPageMeta: React.FC<AppPageMetaProps> = ({
  children,
  ...rest
}) => {
  const { pathname } = useLocation();

  const defaultTitle = 'Poliglot Academy';
  const defaultDescription = 'Plataforma de ensino de idiomas a distância. ';

  const metaTags = [
    { itemprop: 'name', content: rest.title ?? defaultTitle },
    { itemprop: 'description', content: defaultDescription },
    { name: 'description', content: defaultDescription },
  ];

  return (
    <>
      <Helmet
        htmlAttributes={{
          lang: 'ptBR',
          itemscope: undefined,
        }}
        title={rest.title ? rest.title : defaultTitle}
        link={[
          {
            rel: 'canonical',
            href: SITE_URL + pathname,
          },
        ]}
        meta={metaTags}
      />
      {children}
    </>
  );
};
