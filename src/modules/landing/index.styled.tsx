import styled from 'styled-components';

export const StyledLanding = styled.body`
  /* Global */
  ::-moz-selection {
    color: #151512;
    background: #cae033;
  }

  ::selection {
    color: #151512;
    background: #cae033;
  }

  b {
    color: #cae033;
  }

  .container {
    width: 100%;

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
  }

  .content {
    width: 100%;
    max-width: 1120px;
  }

  .badge-number {
    color: #151512;
    font-family: Sora;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;

    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;

    border-radius: 6px;
    background: #cae033;
  }

  .badge-tag {
    color: #151512;
    font-family: Sora;
    font-size: 12px;
    font-style: 0.75rem;
    font-weight: 600;
    line-height: normal;

    display: inline-flex;
    padding: 8px 12px;
    align-items: flex-start;
    gap: 10px;

    border-radius: 30px;
    background: rgba(202, 224, 51, 0.6);
  }

  /* Home Page */
  .header {
    height: 80px;
    width: 100%;

    .content {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      justify-content: start;

      font-size: 22px;

      h2 {
        margin-left: 8px;

        color: #fdfdfd;
        font-family: Sora;
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 600;
        line-height: 19px; /* 105.556% */
        letter-spacing: 0.54px;
      }
    }

    ul {
      list-style: none;
      display: flex;
      align-items: center;
      justify-content: space-around;

      a {
        margin: 12px;
        text-decoration: none;

        color: #6e6e62;
        font-family: Sora;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 18px; /* 112.5% */
        transition: ease 0.2s;
      }

      a:hover {
        color: #8e9e27;
      }
    }

    button {
      cursor: pointer;
      display: inline-flex;
      padding: 10px 16px;

      border-radius: 8px;
      background-color: transparent;
      border: 1px solid var(--Brand, #dbf047);

      color: #fdfdfd;
      font-family: Sora;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      text-transform: uppercase;
      transition: ease 0.2s;

      &:hover {
        color: #151512;
        background-color: #dbf047;
      }
    }
  }

  .hero-section {
    height: 550px;

    display: flex;
    align-items: center;

    img {
      margin-top: -80px;
    }

    h1 {
      margin-top: 0;

      color: #fdfdfd;
      font-family: Sora;
      font-size: 3.75rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;

      span {
        color: #cae033;
      }
    }

    p {
      color: #e3e4d7;
      font-family: Sora;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 162.5% */
    }

    button {
      display: inline-flex;
      margin-top: 12px;
      cursor: pointer;

      padding: 12px 24px;
      justify-content: center;
      align-items: center;
      gap: 8px;

      color: #141412;
      font-family: Sora;
      font-size: 1rem;
      font-style: normal;
      line-height: 26px; /* 162.5% */

      border-radius: 8px;
      background: var(
        --Brand,
        linear-gradient(99deg, #dbf047 -5.72%, #a7bd08 109.68%)
      );
      transition: linear 0.4s;
      border: 1px solid transparent;

      &:hover {
        background: transparent;
        border: 1px solid #cae033;
        color: #cae033;
      }
    }
  }

  .logo-section {
    height: 150px;
    background-color: #cae033;

    .ant-space {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    img {
      height: 70px !important;
    }
  }

  .company-section {
    height: 550px;
    flex-shrink: 0;
    background-color: #fff;

    .content {
      display: flex;
      justify-content: space-between;
    }

    .left {
      width: 500px;

      span.badge-number {
        margin-bottom: 36px;
      }

      h1 {
        color: #4b272f;
        font-family: Sora;
        font-size: 2rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        margin-top: 0px;
      }

      p {
        color: #655679;
        font-family: Inter;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 150% */
      }

      span.badge-tag {
        margin-top: 40px;
      }
    }

    .right {
      width: 500px;
      justify-content: flex-end;

      svg {
        width: 24px;
        height: 24px;
        flex-shrink: 0;

        border-radius: 26px;
        border: 2px solid #151512;

        padding: 10px;
      }

      .ant-list-item h3 {
        margin-top: 0;
        margin-bottom: 12px;

        color: #4b272f;
        font-family: Sora;
        font-size: 1.75rem;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      .ant-list-item-meta-description {
        color: #655679;
        font-family: Sora;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }
    }
  }

  .app-section {
    height: 650px;
    flex-shrink: 0;
    background: #f7f7f7;

    h1 {
      margin-top: 0;

      color: #151512;
      font-family: Sora;
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;

      span {
        color: #cae033;
      }
    }

    .grid {
      height: 508px;
      width: 100%;

      img {
        border-radius: 12px;
        width: 100%;
      }
    }
  }

  .about-section {
    min-height: 500px;
    padding: 20px 0;

    background: linear-gradient(82deg, #151512 -1.4%, #2e3400 100%);

    .content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    .title {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;

      max-width: 400px;

      span {
        padding: 8px 12px;
        gap: 10px;

        border-radius: 30px;
        background: rgba(202, 224, 51, 0.75);

        color: #f7f7f7;
        text-align: center;
        font-family: Sora;
        font-size: 12px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      h1 {
        color: #fcfcfc;
        text-align: center;
        font-family: Sora;
        font-size: 32px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        margin-bottom: 50px;
      }
    }

    .comments {
      display: flex;
      justify-content: space-around;
      align-items: start;

      gap: 20px;
    }

    .comment {
      display: flex;
      width: 360px;
      padding: 24px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;

      border-radius: 12px;
      border: 1px solid #e2e8f0;
      background: #fcfcfc;

      color: #655679;
      font-family: Sora;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 157.143% */

      box-shadow: 0px 0px 6px 4px rgb(49, 49, 49);

      h1 {
        margin-bottom: 0px;
      }

      p {
        margin-top: 0px;
      }
    }
  }

  .phrase-section {
    height: 350px;
    flex-shrink: 0;
    background-color: #fff;

    .content {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
    }

    span.divider {
      content: '';
      width: 72px;
      height: 6px;
      border-radius: 3px;
      background: #dbf047;
    }

    h1 {
      color: #151512;
      text-align: center;
      font-family: Sora;
      font-size: 60px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;

      margin-top: 28px;
    }

    p {
      color: #151512;
      text-align: center;
      font-family: Sora;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px; /* 162.5% */
    }
  }

  footer {
    padding: 40px 0;

    div {
      font-size: 22px;

      h2 {
        margin-left: 8px;

        color: #fdfdfd;
        font-family: Sora;
        font-size: 1.375rem;
        font-style: normal;
        font-weight: 600;
        line-height: 19px; /* 105.556% */
        letter-spacing: 0.54px;
      }

      p {
        color: #e3e4d7;
        font-family: Sora;
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 26px; /* 162.5% */
      }
    }

    .menu {
      display: flex;
      justify-content: flex-end;

      h6 {
        color: #fdfdfd;
        font-family: Sora;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 26px; /* 162.5% */

        margin: 0 0 16px 0;
      }

      div {
        display: flex;
        flex-direction: column;
        margin-left: 40px;
      }

      ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
      }

      li,
      a {
        color: #6e6e62;
        font-family: Sora;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16px; /* 114.286% */
      }

      li {
        margin-bottom: 6px;
        transition: ease 0.2s;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  /* Antd Override */
  .site-back-top-basic {
    color: rgba(64, 64, 64, 0.6);
  }
`;
