import { Avatar, BackTop, Col, Flex, List, Row, Space, Typography } from "antd";

import { LuGithub } from "react-icons/lu";
import { TbChartPie } from "react-icons/tb";
import { PiTargetBold } from "react-icons/pi";
import { CodeOutlined } from "@ant-design/icons";
import { MdOutlineArrowOutward } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";

import IdeoImage from "./assets/ideo.png";
import AmazonImage from "./assets/amazon.png";
import GoogleImage from "./assets/google.png";
import CallPhoneImage from "./assets/phone-call.png";
import ChillibeansImage from "./assets/chillibeans.png";

import Polyglot2Image from "./assets/polyglot-2.png";
import Polyglot3Image from "./assets/polyglot-3.png";
import Polyglot4Image from "./assets/polyglot-4.png";

function App() {
  return (
    <>
      <header className="header container">
        <div className="content">
          <div className="logo">
            <CodeOutlined style={{ color: "white" }} />
            <h2>polyglot</h2>
          </div>

          <ul>
            <li>
              <a href="#company">Empresa</a>
            </li>
            <li>
              <a href="#app">Plataforma</a>
            </li>
            <li>
              <a href="#about">Sobre</a>
            </li>
          </ul>

          <button>Entrar</button>
        </div>
      </header>

      <main>
        <section className="container">
          <Row className="content hero-section">
            <Col span={12}>
              <Typography.Title level={1}>
                Compromisso com ensino a distância <span>.</span>
              </Typography.Title>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>

              <button>
                Conheça a plataforma
                <MdOutlineArrowOutward />
              </button>
            </Col>
            <Col span={12}>
              <Flex align="center" justify="center">
                <img src={CallPhoneImage} />
              </Flex>
            </Col>
          </Row>
        </section>

        <section className="container logo-section">
          <Space className="content" direction="horizontal" size={32}>
            <img src={AmazonImage} />
            <img src={GoogleImage} />
            <img src={ChillibeansImage} />
            <img src={IdeoImage} />
          </Space>
        </section>

        <section id="company" className="container company-section">
          <Row className="content">
            <Col className="left">
              <span className="badge-number">1.</span>
              <Typography.Title level={1}>
                Encontre o melhor professor para <b>seu perfil!</b>
              </Typography.Title>
              <Typography.Paragraph>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography.Paragraph>
              <span className="badge-tag">Lorem Ipsum dolor</span>
            </Col>

            <Col className="right">
              <List itemLayout="horizontal">
                <List.Item>
                  <List.Item.Meta
                    avatar={<HiOutlineClipboardList />}
                    title={<h3>Missão</h3>}
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  />
                </List.Item>
                <List.Item>
                  <List.Item.Meta
                    avatar={<PiTargetBold />}
                    title={<h3>Visão</h3>}
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  />
                </List.Item>
                <List.Item>
                  <List.Item.Meta
                    avatar={<TbChartPie />}
                    title={<h3>Valores</h3>}
                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
                  />
                </List.Item>
              </List>
            </Col>
          </Row>
        </section>

        <section id="app" className="container app-section">
          <Space direction="vertical" size={42} className="content ">
            <Flex justify="space-between" align="center">
              <Typography.Title level={1}>
                Plataforma que funciona<span>!</span>
              </Typography.Title>
              <span className="badge-number">2.</span>
            </Flex>

            <Row className="grid" gutter={20}>
              <Col span={8} style={{ gap: 20 }}>
                <Row style={{ marginBottom: 32 }}>
                  <Col>
                    <img src={Polyglot2Image} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <img src={Polyglot4Image} />
                  </Col>
                </Row>
              </Col>

              <Col span={6}>
                <Row>
                  <Col>
                    <img src={Polyglot3Image} />
                  </Col>
                </Row>
              </Col>

              <Col span={8} style={{ gap: 20 }}>
                <Row style={{ marginBottom: 32 }}>
                  <Col>
                    <img src={Polyglot2Image} />
                  </Col>
                </Row>

                <Row>
                  <Col>
                    <img src={Polyglot4Image} />
                  </Col>
                </Row>
              </Col>
            </Row>
          </Space>
        </section>

        <section id="about" className="container about-section">
          <div className="content">
            <Row className="title">
              <span>Lorem ipsum dolor</span>

              <Typography.Title level={1}>
                O que dizem nossos usuários
              </Typography.Title>
            </Row>

            <Row>
              <Col className="comments">
                <article className="comment" style={{ marginTop: 20 }}>
                  <Flex align="center">
                    <Avatar style={{ marginRight: 8 }} size="large" />
                    <div>
                      <h1>Jéssica Silva</h1>
                      <p>Analista de RH</p>
                    </div>
                  </Flex>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Curabitur efficitur ipsum eget neque consectetur, eu cursus
                    mi tincidunt.
                  </p>
                </article>

                <article className="comment">
                  <Flex align="center">
                    <Avatar style={{ marginRight: 8 }} size="large" />
                    <div>
                      <h1>Jéssica Silva</h1>
                      <p>Analista de RH</p>
                    </div>
                  </Flex>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </article>

                <article className="comment" style={{ marginTop: 25 }}>
                  <Flex align="center">
                    <Avatar style={{ marginRight: 8 }} size="large" />
                    <div>
                      <h1>Jéssica Silva</h1>
                      <p>Analista de RH</p>
                    </div>
                  </Flex>
                  <p>Lorem ipsum dolor sit amet, consectetur.</p>
                </article>
              </Col>
            </Row>
          </div>
        </section>

        <section className="container phrase-section">
          <div className="content">
            <span className="divider"></span>

            <Typography.Title level={1}>
              Aulas que você irá adorar. Garantido.
            </Typography.Title>

            <Typography.Paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </Typography.Paragraph>
          </div>
        </section>
      </main>

      <footer className="container">
        <Row className="content">
          <Col span={6} className="logo">
            <Flex>
              <CodeOutlined style={{ color: "white", fontSize: 20 }} />
              <h2>polyglot</h2>
            </Flex>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </Col>

          <Col span={18} className="content menu">
            <div>
              <h6>Explore</h6>
              <ul>
                <li>
                  <a href="#company"> Empresa</a>
                </li>
                <li>
                  <a href="#app"> Plataforma</a>
                </li>
                <li>
                  <a href="#about"> Sobre</a>
                </li>
              </ul>
            </div>

            <div>
              <h6>Comunidade</h6>
              <ul>
                <li>
                  <a href="#company"> Empresa</a>
                </li>
                <li>
                  <a href="#app"> Plataforma</a>
                </li>
                <li>
                  <a href="#about"> Sobre</a>
                </li>
              </ul>
            </div>

            <div>
              <h6>Comunidade</h6>
              <a
                href="https://github.com/amadorgabriel/polyglot"
                target="_blank"
              >
                <LuGithub />
              </a>
            </div>
          </Col>
        </Row>

        <Row className="content" style={{ marginTop: 20 }}>
          <Col>Todos os diretos reservados, 2022</Col>
        </Row>
      </footer>

      <BackTop />
    </>
  );
}

export default App;
