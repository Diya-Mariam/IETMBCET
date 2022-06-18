/*!

=========================================================
* Paper Kit React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

// core components

function IndexHeader() {
  return (
    <>
        <div
            className="page-header section-dark"
            style={{
                backgroundImage:
                "url(" + require("assets/img/mbcet.jpg") + ")",
            }}
        >
            <div className="filter" />
            <div className="content-center">
                <Container>
                    <div className="title-brand">
                        {/* <h1 className="presentation-title">IET MBCET</h1> */}
                        <img
                            alt="..."
                            className="img-thumbnail img-responsive"
                            src={require("assets/img/IET_Logo.svg")}
                            width="50%"
                        />
                        <div className="fog-low">
                            <img alt="..." src={require("assets/img/fog-low.png")} />
                        </div>
                        <div className="fog-low right">
                            <img alt="..." src={require("assets/img/fog-low.png")} />
                        </div>
                    </div>
                    <h2 className="presentation-subtitle text-center">
                        The Institution of Engineering and Technology, MBCET
                    </h2>
                </Container>
            </div>
            <div
                className="moving-clouds"
                style={{
                    backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
                }}
            />
            <h6 className="category category-absolute">
                <img
                    alt="..."
                    className="creative-tim-logo"
                    src={require("assets/img/mbcet_logo.png")}
                />
            </h6>
        </div>
    </>
  );
}

export default IndexHeader;
