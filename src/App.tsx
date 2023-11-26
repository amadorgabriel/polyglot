import {
  Avatar,
  BackTop,
  Badge,
  Button,
  Col,
  Flex,
  Layout,
  List,
  Row,
  Space,
  Typography,
} from "antd";

import { LuGithub } from "react-icons/lu";
import { TbChartPie } from "react-icons/tb";
import { PiTargetBold } from "react-icons/pi";
import { CodeOutlined } from "@ant-design/icons";
import { MdOutlineArrowOutward } from "react-icons/md";
import { HiOutlineClipboardList } from "react-icons/hi";

import IdeoImage from "./assets/ideo.png";
import AmazonImage from "./assets/amazon.png";
import GoogleImage from "./assets/google.png";
import { Section } from "./components/Section";
import CallPhoneImage from "./assets/phone-call.png";
import ChillibeansImage from "./assets/chillibeans.png";

function App() {
  const { Footer } = Layout;

  return (
    <>
      <Layout className="layout">
        <Section>
          <header className="header">
            <Flex justify="space-between" align="center">
              <div className="logo">
                <CodeOutlined style={{ color: "white" }} />
                <h2>polyglot</h2>
              </div>

              <ul>
                <li>Empresa</li>
                <li>Plataforma</li>
                <li>Sobre</li>
              </ul>

              <Button>Entrar</Button>
            </Flex>
          </header>
        </Section>

        <Section>
          <Row>
            <Col span={12}>
              <Typography.Title>
                Compromisso com ensino a distância
              </Typography.Title>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.{" "}
              </p>
              <Button>
                Conheça a plataforma
                <MdOutlineArrowOutward />
              </Button>
            </Col>
            <Col span={12}>
              <img src={CallPhoneImage} />
            </Col>
          </Row>
        </Section>

        <Section>
          <Flex justify="center" align="center">
            <Space direction="horizontal" size={32}>
              <img src={AmazonImage} />
              <img src={GoogleImage} />
              <img src={ChillibeansImage} />
              <img src={IdeoImage} />
            </Space>
          </Flex>
        </Section>

        <Section>
          <Row>
            <Col span={12}>
              <span>1.</span>
              <Typography.Title>
                Encontre o melhor professor para
                <b>seu perfil!</b>
              </Typography.Title>
              <Typography.Text>
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </Typography.Text>
              <Badge>Lorem Ipsum dolor</Badge>
            </Col>

            <Col span={12}>
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
        </Section>

        <Section>
          <Space direction="vertical" size={42}>
            <Flex justify="space-between" align="center">
              <Typography.Title>Plataforma que funciona</Typography.Title>
              <span>2.</span>
            </Flex>

            <Row>
              <Col span={18}>
                <Row>
                  <Col span={12}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" />
                  </Col>

                  <Col span={12}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" />
                  </Col>
                </Row>

                <Row>
                  <Col span={24}>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" />
                  </Col>
                </Row>
              </Col>

              <Col span={6}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Placeholder_view_vector.svg/310px-Placeholder_view_vector.svg.png" />
              </Col>
            </Row>
          </Space>
        </Section>

        <Section>
          <Row>
            <Badge>Lorem ipsum dolor</Badge>
            <Typography.Title>O que dizem nossos usuários</Typography.Title>
          </Row>

          <Row>
            <Col>
              <article>
                <div>
                  <Avatar />
                  <h1>Jéssica Silva</h1>
                  <p>Analista de RH</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur efficitur ipsum eget neque consectetur, eu cursus mi
                  tincidunt.
                </p>
              </article>

              <article>
                <div>
                  <Avatar />
                  <h1>Jéssica Silva</h1>
                  <p>Analista de RH</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur efficitur ipsum eget neque consectetur, eu cursus mi
                  tincidunt.
                </p>
              </article>

              <article>
                <div>
                  <Avatar />
                  <h1>Jéssica Silva</h1>
                  <p>Analista de RH</p>
                </div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Curabitur efficitur ipsum eget neque consectetur, eu cursus mi
                  tincidunt.
                </p>
              </article>
            </Col>
          </Row>
        </Section>

        <Section>
          <span className="divider" />

          <Typography.Title>
            Aulas que você irá adorar. Garantido.
          </Typography.Title>

          <Typography.Paragraph>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Typography.Paragraph>
        </Section>

        <Section>
          <Row>
            <Col span={6}>
              <div className="logo">
                <CodeOutlined style={{ color: "white" }} />
                <h2>polyglot</h2>
              </div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry.
              </p>
            </Col>

            <Col span={18}>
              <div>
                <h6>Explore</h6>
                <ul>
                  <li>
                    <a href="#"> Empresa</a>
                  </li>
                  <li>
                    <a href="#"> Plataforma</a>
                  </li>
                  <li>
                    <a href="#"> Sobre</a>
                  </li>
                </ul>
              </div>

              <div>
                <h6>Comunidade</h6>
                <ul>
                  <li>
                    <a href="#"> Empresa</a>
                  </li>
                  <li>
                    <a href="#"> Plataforma</a>
                  </li>
                  <li>
                    <a href="#"> Sobre</a>
                  </li>
                </ul>
              </div>
              
              <div>
                <h6>Comunidade</h6>
                <a href="#">
                  <LuGithub />
                </a>
              </div>
            </Col>
          </Row>

          <Row>Todos os diretos reservados, 2022</Row>
        </Section>
      </Layout>

      <BackTop />
    </>
  );
}

export default App;
