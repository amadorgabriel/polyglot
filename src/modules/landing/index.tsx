import { Avatar, BackTop, Col, Flex, List, Row, Space, Typography } from 'antd';

import { LuGithub } from 'react-icons/lu';
import { TbChartPie } from 'react-icons/tb';
import { PiTargetBold } from 'react-icons/pi';
import { CodeOutlined } from '@ant-design/icons';
import { MdOutlineArrowOutward } from 'react-icons/md';
import { HiOutlineClipboardList } from 'react-icons/hi';

import IdeoImage from '../../assets/ideo.png';
import AmazonImage from '../../assets/amazon.png';
import GoogleImage from '../../assets/google.png';
import CallPhoneImage from '../../assets/phone-call.png';
import Polyglot2Image from '../../assets/polyglot-2.png';
import Polyglot3Image from '../../assets/polyglot-3.png';
import Polyglot4Image from '../../assets/polyglot-4.png';
import ChillibeansImage from '../../assets/chillibeans.png';
import { useNavigate } from 'react-router-dom';

export function LandingPage() {
  const navigate = useNavigate();

  return (
    <>
      <header className="header container">
        <div className="content">
          <div className="logo">
            <CodeOutlined style={{ color: 'white' }} />
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

          <button
            onClick={() => {
              navigate('/signin');
            }}
          >
            Entrar
          </button>
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
                A Polyglot Academy é uma empresa inovadora e diferenciada no
                setor de ensino de idiomas.
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
                Aqui é o lugar de escolha para qualquer pessoa que deseje
                aprender um novo idioma! Nossos programas de ensino são
                projetados para serem flexíveis e adaptáveis, permitindo aos
                alunos aprenderem no seu próprio ritmo.
              </Typography.Paragraph>
              <span className="badge-tag">Estude em qualquer lugar</span>
            </Col>

            <Col className="right">
              <List itemLayout="horizontal">
                <List.Item>
                  <List.Item.Meta
                    avatar={<HiOutlineClipboardList />}
                    title={<h3>Missão</h3>}
                    description="Nossa missão é fornecer um serviço de ensino de idiomas personalizado e inovador que atenda às necessidades individuais de cada aluno."
                  />
                </List.Item>
                <List.Item style={{ marginTop: 10 }}>
                  <List.Item.Meta
                    avatar={<PiTargetBold />}
                    title={<h3>Visão</h3>}
                    description="Ser um líder global no ensino de idiomas, reconhecido por nossa abordagem personalizada e inovadora."
                  />
                </List.Item>
                <List.Item style={{ marginTop: 10 }}>
                  <List.Item.Meta
                    avatar={<TbChartPie />}
                    title={<h3>Valores</h3>}
                    description="Personalização, inovação, flexibilidade e acessibilidade. "
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
              <span>Saiba mais</span>

              <Typography.Title level={1}>
                O que dizem nossos usuários
              </Typography.Title>
            </Row>

            <Row>
              <Col className="comments">
                <article className="comment" style={{ marginTop: 20 }}>
                  <Flex align="center">
                    <Avatar
                      style={{ marginRight: 8 }}
                      size="large"
                      src="https://media.licdn.com/dms/image/C5603AQGpV1idOlLwZA/profile-displayphoto-shrink_800_800/0/1517346098599?e=2147483647&v=beta&t=xJBBsEqLAZv5jkwMm-b4vmwvL_Bq0fYLUKdwjn7OHXg"
                    />
                    <div>
                      <h1>Wallace Ferraz</h1>
                      <p>Auxiliar de Enfermagem</p>
                    </div>
                  </Flex>
                  <p>
                    "O site de ensino de idiomas oferece uma experiência
                    intuitiva e fácil de usar. Estou impressionado com a
                    abordagem personalizada do site para o ensino de idiomas."
                  </p>
                </article>

                <article className="comment">
                  <Flex align="center">
                    <Avatar
                      style={{ marginRight: 8 }}
                      size="large"
                      src="https://media.licdn.com/dms/image/D4D03AQG1VIClFddOOg/profile-displayphoto-shrink_800_800/0/1692020925357?e=2147483647&v=beta&t=O5CsqwYS71xmuh6cW9vJhb3EDZRpOhL1cawzE82w8IM"
                    />
                    <div>
                      <h1>José Fernando</h1>
                      <p>Estudante de Design</p>
                    </div>
                  </Flex>
                  <p>
                    "Os materiais didáticos são bem estruturados, adaptáveis ao
                    ritmo de aprendizado de cada aluno."
                  </p>
                </article>

                <article className="comment" style={{ marginTop: 25 }}>
                  <Flex align="center">
                    <Avatar
                      style={{ marginRight: 8 }}
                      size="large"
                      src="https://i.scdn.co/image/ab676161000051744b3c12a7a4ac6fdad8fb973c"
                    />
                    <div>
                      <h1>Amanda de Paula</h1>
                      <p>Bióloga</p>
                    </div>
                  </Flex>
                  <p>
                    "A plataforma de ensino de idiomas se destaca pela sua
                    versatilidade, oferecendo desde aulas básicas para
                    iniciantes até conteúdos mais avançados para quem busca
                    aperfeiçoamento."
                  </p>
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

            <Typography.Paragraph
              style={{ maxWidth: 500, textAlign: 'center' }}
            >
              Venha e junte-se a nós na nossa jornada para tornar o aprendizado
              de idiomas acessível e agradável para todos!
            </Typography.Paragraph>
          </div>
        </section>
      </main>

      <footer className="container">
        <Row className="content">
          <Col span={6} className="logo">
            <Flex>
              <CodeOutlined style={{ color: 'white', fontSize: 20 }} />
              <h2>polyglot</h2>
            </Flex>
            <p>
              A Polyglot Academy é uma empresa inovadora e diferenciada no setor
              de ensino de idiomas.
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
