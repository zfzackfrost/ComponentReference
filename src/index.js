import React from "react";
import ReactDOM from "react-dom";
import {
  Button,
  ButtonGroup,
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  CardSubTitle,
  CardHeader,
  CardFooter,
  Badge
} from "reactstrap";
import classNames from "classnames";

import "./styles.scss";
import chroma from "chroma-js";
import faker from "faker";

function PlaceholderImg({ children, bgColor, textColor, size, className }) {
  const bColor = bgColor || chroma([150, 150, 150]).hex();
  const tColor =
    textColor ||
    (chroma(bColor).luminance() > 0.5
      ? chroma("black")
      : chroma("white")
    ).hex();
  return (
    <svg
      viewBox={`0 0 ${size[0]} ${size[1]}`}
      className={classNames(className)}
    >
      <rect x={0} y={0} width={size[0]} height={size[1]} fill={bColor} />
      <text
        x={size[0] / 2}
        y={size[1] / 2}
        fill={tColor}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: "30px"
        }}
      >
        {children}
      </text>
    </svg>
  );
}

function LoremIpsum({ words }) {
  return <p>{faker.random.words(words)}</p>;
}

function DemoSection({ sectionName, children }) {
  return (
    <div>
      <h2 className="font-weight-bold text-center">{sectionName}</h2>
      <div className="mb-5">{children}</div>
    </div>
  );
}

function ButtonsDemo({}) {
  return (
    <DemoSection sectionName="Single Buttons">
      <Container fluid className="m-0 p-0">
        <Row className="border-dark border-top p-2 mx-2">
          <Col className="align-items-center d-flex flex-column border-dark border-right">
            <h3>Button</h3>
            <Button color="primary">Button</Button>
          </Col>
          <Col className="align-items-center d-flex flex-column">
            <h3>Pill Button</h3>
            <Button color="primary" className="rounded-pill">
              Button
            </Button>
          </Col>
        </Row>
        <Row className="border-dark border-top p-2 mx-2">
          <Col className="align-items-center d-flex flex-column border-dark border-right">
            <h3>Outline Button</h3>
            <Button color="primary" outline>
              Button
            </Button>
          </Col>
          <Col className="align-items-center d-flex flex-column">
            <h3>Pill Outline Button</h3>
            <Button color="primary" outline className="rounded-pill">
              Button
            </Button>
          </Col>
        </Row>
      </Container>
    </DemoSection>
  );
}

function ButtonGroupDemo({}) {
  return (
    <DemoSection sectionName="Button Groups">
      <Container fluid className="m-0 p-0">
        <Row className="border-dark border-top p-2 mx-2">
          <Col className="align-items-center d-flex flex-column border-dark border-right">
            <h3>Simple</h3>
            <ButtonGroup>
              <Button color="primary">Primary 1</Button>
              <Button color="primary">Primary 2</Button>
            </ButtonGroup>
          </Col>
          <Col className="align-items-center d-flex flex-column border-dark border-0">
            <h3>Multi-color</h3>
            <ButtonGroup>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
            </ButtonGroup>
          </Col>
        </Row>
        <Row className="border-dark border-top p-2 mx-2">
          <Col className="align-items-center d-flex flex-column border-dark border-right">
            <h3>Vertical</h3>
            <ButtonGroup vertical>
              <Button color="primary">Primary 1</Button>
              <Button color="primary">Primary 2</Button>
            </ButtonGroup>
          </Col>
          <Col className="align-items-center d-flex flex-column border-dark border-0">
            <h3>Vertical, Multi-color</h3>
            <ButtonGroup vertical>
              <Button color="primary">Primary</Button>
              <Button color="secondary">Secondary</Button>
            </ButtonGroup>
          </Col>
        </Row>
      </Container>
    </DemoSection>
  );
}

function CardDemo({}) {
  return (
    <DemoSection sectionName="Cards">
      <Container fluid className="m-0 p-0 mb-5">
        <Row className="border-dark border-top p-2 mx-2">
          <Col className="align-items-center d-flex flex-column border-dark border-right">
            <h3>Simple</h3>
            <Card>
              <CardBody>
                <LoremIpsum words={10} />
              </CardBody>
            </Card>
          </Col>
          <Col className="align-items-center d-flex flex-column border-dark border-0">
            <h3>Shadow</h3>
            <Card className="shadow-sm">
              <CardBody>
                <LoremIpsum words={10} />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row className="border-dark border-top p-2 mx-2">
          <Col className="align-items-center d-flex flex-column border-dark border-right">
            <h3>Header</h3>
            <Card>
              <CardHeader>Example Header</CardHeader>
              <CardBody>
                <LoremIpsum words={10} />
              </CardBody>
            </Card>
          </Col>
          <Col className="align-items-center d-flex flex-column border-dark border-0">
            <h3>Header, Shadow</h3>
            <Card className="shadow-sm">
              <CardHeader>Example Header</CardHeader>
              <CardBody>
                <LoremIpsum words={10} />
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col>
            <strong className="text-center d-block">
              Shadows, like the ones shown above, can be added to most Bootstrap
              components.
            </strong>
          </Col>
        </Row>

        <Row className="border-dark border-top p-2 mx-2">
          <Col className="align-items-center d-flex flex-column border-dark border-right">
            <h3>Image</h3>
            <Card>
              <PlaceholderImg size={[350, 180]} className="card-img-top">
                Card Image
              </PlaceholderImg>
              <CardBody>
                <LoremIpsum words={10} />
              </CardBody>
            </Card>
          </Col>
          <Col className="align-items-center d-flex flex-column border-dark border-0">
            <h3>Header, Image, Shadow</h3>
            <Card className="shadow-sm">
              <CardHeader>Example Header</CardHeader>
              <PlaceholderImg size={[350, 180]}>Card Image</PlaceholderImg>
              <CardBody>
                <LoremIpsum words={10} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </DemoSection>
  );
}

function BadgesDemo({}) {
  return (
    <DemoSection sectionName="Badges">
      <Container fluid className="m-0 p-0">
        <Row className="border-dark border-top p-2 mx-2">
          <Col className="align-items-center d-flex flex-column border-dark border-right">
            <h3>Simple</h3>
            <div>
              <Badge color="primary">Primary</Badge> Color
            </div>
            <div>
              <Badge color="secondary">Secondary</Badge> Color
            </div>
          </Col>
          <Col className="align-items-center d-flex flex-column border-dark">
            <h3>Pill</h3>
            <div>
              <Badge pill color="primary">
                Primary
              </Badge>{" "}
              Color
            </div>
            <div>
              <Badge pill color="secondary">
                Secondary
              </Badge>{" "}
              Color
            </div>
          </Col>
        </Row>

        <Row className="border-dark border-top p-2 mx-2">
          <Col className="align-items-center d-flex flex-column border-dark border-right">
            <h3>On a Button</h3>
            <Button outline>
              <div>
                <Badge color="success">Success</Badge> Color
              </div>
            </Button>
          </Col>

          <Col className="align-items-center d-flex flex-column border-dark">
            <h3>Pill</h3>
            <div>
              <Badge pill color="primary">
                Primary
              </Badge>{" "}
              Color
            </div>
            <div>
              <Badge pill color="secondary">
                Secondary
              </Badge>{" "}
              Color
            </div>
          </Col>
        </Row>
      </Container>
    </DemoSection>
  );
}

function App() {
  return (
    <div className="App" className="p-3">
      <ButtonsDemo />
      <ButtonGroupDemo />
      <CardDemo />
      <BadgesDemo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
