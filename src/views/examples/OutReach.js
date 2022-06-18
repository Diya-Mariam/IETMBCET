import React from "react";

// reactstrap components
// import { Button, Card, CardBody, CardTitle, Container, Row, Col, UncontrolledCollapse } from "reactstrap";

// core components
import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
// import LandingPageHeader from "components/Headers/LandingPageHeader.js";
// import DemoFooter from "components/Footers/DemoFooter.js";
// import SectionCarousel from "views/index-sections/SectionCarousel.js";

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
            <ExamplesNavbar />
            <IndexHeader />
        </>
    );
}

export default LandingPage;
