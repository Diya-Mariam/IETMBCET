import React from "react";

// reactstrap components
import { Button, Card, CardBody, CardTitle, Container, Row, Col, UncontrolledCollapse } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";

import IndexHeader from "components/Headers/IndexHeader.js";

function LandingPage() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
        document.body.classList.add("profile-page");
        return function cleanup() {
            document.body.classList.remove("profile-page");
        };
    });
    return (
        <>
            <form name="contact" netlify netlify-honeypot="bot-field" hidden>
                <input type="text" name="name" />
                <input type="email" name="email" />
                <textarea name="message"></textarea>
            </form>
            <ExamplesNavbar />
            <IndexHeader />
            <div className="main">
                <div className="section text-center">
                    <Container>
                        <Row>
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="title">About IET MBCET</h2>
                                <h5 className="description">
                                    The chapter with around 200 members from EEE, ECE, CSE and ME streams and 6 faculty from EEE is an integral part of IET
                                    Kanyakumari Local Network since its induction. It is actively involved in Inspiring, Promoting and Guiding its members and
                                    non-members in their professional and personal growth through Skill development programme, Outreach activities, Life skill
                                    programme.
                                </h5>
                                <br />
                                <Button
                                    className="btn-round"
                                    color="info"
                                    target="_blank"
                                    href="https://mbcet.ac.in/wp-content/uploads/2020/10/Annual-Report-2019-20.pdf">
                                    Annual Report 2019-20
                                </Button>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <br />
                        <Row>
                            <Col md="6">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <img alt="..." className="img-thumbnail img-responsive" src={require("assets/img/nexuz.jpg")} width="50%" />
                                    </div>
                                    <div className="description">
                                        <h3 className="info-title event-title">Nexuz '19</h3>
                                        <br />
                                        <p className="description">
                                            A whole new idea conceived and organized by IET MBCET, NEXUZ aimed to connect Engineering with several
                                            Non-Engineering fields providing a common platform for engineers to explore job and research opportunities thereby
                                            contributing to the technological advancements in various fields.
                                        </p>
                                        {/* <Button className="btn-link" color="info" href="#pablo">
                                        See more
                                    </Button> */}
                                    </div>
                                </div>
                            </Col>
                            <Col md="6">
                                <div className="info">
                                    <div className="icon icon-info">
                                        <img alt="..." className="img-thumbnail img-responsive" src={require("assets/img/patw_logo.jpg")} width="50%" />
                                    </div>
                                    <div className="description">
                                        <h3 className="primary-title event-title">Present Around the World</h3>
                                        <br />
                                        <p className="description">
                                            The college heats of the Global Competition PATW (Present Around The World) was conducted in MBCET on the 7th of
                                            March,2020. 18 participants from all the branches participated in the Event. Mr. Jobby Johnson arrived as the winner
                                            and Mr. Joseph John Panicker as the Runner -up in the college heats.
                                        </p>
                                        {/* <Button className="btn-link" color="info" href="#pablo">
                                        See more
                                    </Button> */}
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <h2>Some Highlights</h2>
                        <SectionCarousel />
                    </Container>
                </div>
                <div className="section section-dark text-center">
                    <Container>
                        <h2 className="title">Under the Leadership of</h2>
                        <Row className="justify-content-md-center">
                            <Col md="3">
                                <Card className="card-profile">
                                    <div className="card-avatar">
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <img alt="..." src={require("assets/img/faces/jomole.jpg")} />
                                        </a>
                                    </div>
                                    <CardBody>
                                        <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                            <div className="author">
                                                <CardTitle tag="h4">Jomole Joseph</CardTitle>
                                                <h6 className="card-category">Faculty in-Charge</h6>
                                            </div>
                                        </a>
                                        <br />
                                        <Button
                                            className="btn-just-icon btn-neutral ml-1"
                                            color="primary"
                                            target="_blank"
                                            href="https://www.linkedin.com/in/jomole-joseph-6075733b/">
                                            <i className="fa fa-linkedin" />
                                        </Button>
                                    </CardBody>
                                </Card>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <div>
                            <Button color="primary" id="toggler" style={{ marginBottom: "1rem" }}>
                                Our Team
                            </Button>
                            <UncontrolledCollapse toggler="#toggler">
                                <Row>
                                    <Col md="4">
                                        <Card className="card-profile card-plain">
                                            <div className="card-avatar">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img alt="..." src={require("assets/img/faces/placeholder.jpg")} />
                                                </a>
                                            </div>
                                            <CardBody>
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <div className="author">
                                                        <CardTitle tag="h4">Balu Bijubal</CardTitle>
                                                        <h6 className="card-category">Secretary</h6>
                                                    </div>
                                                </a>
                                                <br />
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                    <Card className="card-profile card-plain">
                                        <div className="card-avatar">
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <img alt="..." src={require("assets/img/faces/william.jpg")} />
                                            </a>
                                        </div>
                                        <CardBody>
                                            <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                <div className="author">
                                                    <CardTitle tag="h4">William George</CardTitle>
                                                    <h6 className="card-category">Chair</h6>
                                                </div>
                                            </a>
                                            <br />
                                            <Button
                                                className="btn-just-icon btn-neutral ml-1"
                                                color="link"
                                                target="_blank"
                                                href="https://www.linkedin.com/in/william-george2020/">
                                                <i className="fa fa-linkedin" />
                                            </Button>
                                        </CardBody>
                                    </Card>
                                </Col>
                                    <Col md="4">
                                        <Card className="card-profile card-plain">
                                            <div className="card-avatar">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img alt="..." src={require("assets/img/faces/gowri.jpg")} />
                                                </a>
                                            </div>
                                            <CardBody>
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <div className="author">
                                                        <CardTitle tag="h4">Gowri Muralikrishnan</CardTitle>
                                                        <h6 className="card-category">Treasurer</h6>
                                                    </div>
                                                </a>
                                                <br />
                                                <Button
                                                    className="btn-just-icon btn-neutral ml-1"
                                                    color="link"
                                                    target="_blank"
                                                    href="https://www.linkedin.com/in/gowrimuralikrishnan/">
                                                    <i className="fa fa-linkedin" />
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="4">
                                        <Card className="card-profile card-plain">
                                            <div className="card-avatar">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img alt="..." src={require("assets/img/faces/placeholder.jpg")} />
                                                </a>
                                            </div>
                                            <CardBody>
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <div className="author">
                                                        <CardTitle tag="h4">Ashwin Abraham Thomas</CardTitle>
                                                        <h6 className="card-category">Joint Secretary</h6>
                                                    </div>
                                                </a>
                                                <br />
                                                <Button
                                                    className="btn-just-icon btn-neutral ml-1"
                                                    color="link"
                                                    target="_blank"
                                                    href="https://www.linkedin.com/in/ashwin-abraham-thomas-4975a2185/">
                                                    <i className="fa fa-linkedin" />
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card className="card-profile card-plain">
                                            <div className="card-avatar">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img alt="..." src={require("assets/img/faces/noel.jpg")} />
                                                </a>
                                            </div>
                                            <CardBody>
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <div className="author">
                                                        <CardTitle tag="h4">Noel Jacob</CardTitle>
                                                        <h6 className="card-category">Vice Chair</h6>
                                                    </div>
                                                </a>
                                                <br />
                                                <Button
                                                    className="btn-just-icon btn-neutral ml-1"
                                                    color="link"
                                                    target="_blank"
                                                    href="https://www.linkedin.com/in/noel-mathew-jacob-843219145/">
                                                    <i className="fa fa-linkedin" />
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                    <Col md="4">
                                        <Card className="card-profile card-plain">
                                            <div className="card-avatar">
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <img alt="..." src={require("assets/img/faces/deepthi.jpg")} />
                                                </a>
                                            </div>
                                            <CardBody>
                                                <a href="#pablo" onClick={(e) => e.preventDefault()}>
                                                    <div className="author">
                                                        <CardTitle tag="h4">Deepthi Anilkumar</CardTitle>
                                                        <h6 className="card-category">Joint Treasurer</h6>
                                                    </div>
                                                </a>
                                                <br />
                                                <Button
                                                    className="btn-just-icon btn-neutral ml-1"
                                                    color="link"
                                                    target="_blank"
                                                    href="https://www.linkedin.com/in/deepthi-g-a-8b44a0180/">
                                                    <i className="fa fa-linkedin" />
                                                </Button>
                                            </CardBody>
                                        </Card>
                                    </Col>
                                </Row>
                            </UncontrolledCollapse>
                        </div>
                    </Container>
                </div>
                <div className="section landing-section">
                    <Container>
                        <Row className="justify-content-md-center">
                            <Col className="ml-auto mr-auto" md="8">
                                <h2 className="text-center">Keep in touch?</h2>
                            </Col>
                        </Row>
                        <br />
                        <br />
                        <br />
                        <Row className="justify-content-md-center">
                            <Col md="3">
                                <Button className="btn-round btn-icon" color="primary" target="_blank" href="https://www.instagram.com/ietmbcet/">
                                    <i className="fa fa-instagram" /> Follow us on Instagram
                                </Button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <DemoFooter />
        </>
    );
}

export default LandingPage;
