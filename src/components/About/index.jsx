import React from "react";
import "./styles.css";
import avatar from "./images/avatar.jpg";
import { SocialIcon } from 'react-social-icons';
import { MDBProgress, MDBProgressBar } from 'mdb-react-ui-kit';
import { FaPhoneSquareAlt } from 'react-icons/fa';

const About = () => {
    return (
        <div className="cv-box">
            <div className="left-box">
                <div className="name">
                    <h1> Svetlana Simonyan </h1>
                    <p> Web Developer </p>
                </div>
                <div className=" box">
                    <div className="vertical-text ">
                        <h6> Experience </h6>
                        <div></div>
                    </div>
                    <div className="info">
                        <div>
                            <p className="head-txt">Ardshinbank CJSC</p>
                            <p className="spec-style">Teller, Customer Service Specialist (2019-2021 october), Hall manager (2018-2019)</p>
                        </div>
                    </div>
                </div>

                <div className="courses-box box">
                    <div className="vertical-text">
                        <h6>  Courses </h6>
                        <div></div>
                    </div>
                    <div className="info">
                        <div>
                            <p className="head-txt">TCO LLC </p>
                            <p className="spec-style">Web Full Stack Development courses (2021-2022)</p>
                            <p className="head-txt">Artoutik Design and More</p>
                            <p className="spec-style">Graphic Design courses  (2021)</p>
                        </div>
                    </div>
                </div>
                <div className="education-box box">
                    <div className="vertical-text">
                        <h6> Education </h6>
                        <div></div>
                    </div>
                    <div className="info">
                        <div>
                            <div>
                                <p className="head-txt">Master's degree</p>
                                <p>National Polytechnic University of Armenia (2017 - 2019)</p>
                                <p className="spec-style">Speciality: Economics and management of enterprises in the field of information technology</p>
                            </div>
                            <div>
                                <p className="head-txt">Bachelor's  degree</p>
                                <p>National Polytechnic University of Armenia (2012 - 2017)</p>
                                <p className="spec-style">Speciality: Economics and management of enterprises in the field of information technology</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-box">
                <div className="avatar-box">
                    <div className="img-fone">
                    </div>
                    <div className="avatar">
                        <img src={avatar} alt="" />
                    </div>
                </div>
                <div className="about">
                    <h4>My Profile</h4>
                    <p>Hello, my name is Svetlana, I'm Junior Full Stack Web Developer and Graphic Designer</p>
                    <div className="social">
                        <SocialIcon url="https://github.com/Sveta191295" target="_blank" className="icon" />
                        <SocialIcon url="https://www.linkedin.com/in/svetlana-simonyan-005bb5228/" target="_blank" className="icon" />
                        <SocialIcon network="email" className="icon" url="mailto:svetlana.simonyan.95@mail" />
                        <a href="tel:077-166-359"><FaPhoneSquareAlt className="phone-icon icon" /></a>
                    </div>
                </div>
                <div className="soft-lang">
                    <div className="skills-border"></div>
                    <div className="soft-lang-box">
                        <div className="skills">
                            <h6>Software Skills</h6>
                            <ul>
                                <li>HTML, CSS</li>
                                <li>JavaScript, React JS</li>
                                <li>PHP, OOP, Laravel</li>
                                <li>MySql, Git</li>
                                <li>Adobe Illustrator, Adobe Photoshop</li>
                            </ul>
                        </div>
                        <div className="lang">

                            <h6>Languages Knowledge</h6>
                            <ul className="language-progress-style">
                                <li>Armenian language</li>
                                <MDBProgress>
                                    <MDBProgressBar width='100' valuemin={0} valuemax={100} > 100% </MDBProgressBar>
                                </MDBProgress>
                                <li>Russian language</li>
                                <MDBProgress>
                                    <MDBProgressBar width='100' valuemin={0} valuemax={100} > 100% </MDBProgressBar>
                                </MDBProgress>
                                <li>English language</li>
                                <MDBProgress>
                                    <MDBProgressBar width='40' valuemin={0} valuemax={100}>40%</MDBProgressBar>
                                </MDBProgress>
                            </ul>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );

}

export default About;