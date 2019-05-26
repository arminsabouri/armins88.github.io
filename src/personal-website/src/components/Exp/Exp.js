import React from 'react';
import { Row, Col, Card, Icon} from 'antd';
import {Timeline, TimelineEvent} from 'react-event-timeline'

class Exp extends React.Component{

    render(){
        // const dot = <FontAwesomeIcon icon="circle" style={{ fontSize: '30px' }} />
        const headerStyle = {"fontSize":"30px",
            "color": this.props.theme === "light" ? 'black' : 'white'};
        const subtitleStyle = {"fontSize":"25px",
            "color": this.props.theme === "light" ? 'black' : 'white'};
        const contentStyle = {"fontSize":"20px",
        "color": 'white', 'backgroundColor':'#40424a'};
        return(
            <div id="curious" className={"container curious-" +this.props.theme}>
                <h1 className={"section-header-"+this.props.theme}>Work Experience</h1>
                <Row type="flex" justify="center">
                    <Col>
                    <Timeline>
                        <TimelineEvent title="NormaTec"
                                        subtitle="Full-stack Engineer"
                                        createdAt="1/1/2019 - Present"
                                        titleStyle={headerStyle}
                                        contentStyle={contentStyle}
                                        subtitleStyle={subtitleStyle}>                                        

                                        Developing the user facing web application that allows customers to buy product online. Contributing to the backend API service. <a href="https://www.normatecrecovery.com/"> Check it out </a>                                        
                                        <br />
                                        Technologies used:
                                        <ul className="timeline-list">
                                            <li>React</li>
                                            <li>JSX</li>
                                            <li>Redux</li>
                                            <li>SCSS</li>
                                            <li>Type Script</li>
                                            <li>.NET Web Api</li>
                                            <li>Entity Framework as a ORM for MySql</li>
                                            <li>AWS</li>
                                        </ul>
                        </TimelineEvent>
                        <TimelineEvent title="MIT- Civil and Environmental Engineering"
                                        createdAt="10/1/2017 - 12/1/2018"
                                        subtitle="Full-stack Engineer"
                                        titleStyle={headerStyle}
                                        contentStyle={contentStyle}
                                        subtitleStyle={subtitleStyle}>                                        

Developed a web portal for faculty, staff and students in the Department of Civil and Environmental Engineering at MIT. CEE affiliates  can create, update, or view department/personal resources including student forms, departmental policies, and  a department wide intranet designed to manage space
                                      <ul className="timeline-list">
                                            <li>Es6, Css3</li>
                                            <li>MySql</li>
                                            <li>Python3</li>
                                            <li>Php7</li>
                                            <li>Ui/Ux</li>
                                        </ul>
                        </TimelineEvent>
                        <TimelineEvent title="Bluum Technologies"
                                        subtitle="Full-stack Engineer"
                                        createdAt="1/1/2019 - Present"
                                        titleStyle={headerStyle}
                                        contentStyle={contentStyle}
                                        subtitleStyle={subtitleStyle}>                                        
Contributed to several front end applications using technologies including React and Redux. Lead the development of an API  service for a webportal intended to be used by retail managers using frameworks such as Node and Lumen. Deployed decoupled web applications on Google Cloud Platform. 
                                       <ul className="timeline-list">
                                            <li>JSX</li>
                                            <li>React/Redux</li>
                                            <li>Lumen</li>
                                            <li>Node</li>
                                            <li>GCP</li>
                                            <li>Css3</li>
                                        </ul>
                        </TimelineEvent>
                        <TimelineEvent title="Mass. General Hospital"
                                        subtitle="Data Science Intern"
                                        createdAt="5/1/2017 - 9/15/2017"
                                        titleStyle={headerStyle}
                                        contentStyle={contentStyle}
                                        subtitleStyle={subtitleStyle}>
                                            Pioneered multiple data science projects, from the extraction process to statistical analysis and classification using Python, Mysql, Pandas, Numpy, Scipy. Worked with a team of engineers to successfully migrate MySql databases from an obsolete server to a newer server, using MySql, C#, Python. 
                                       <ul className="timeline-list">
                                            <li>Python3 -- Pandas, Scipy, Nump</li>
                                            <li>C#</li>
                                            <li>MySql</li>
                                        </ul>
                        </TimelineEvent>
                        <TimelineEvent title="Reggora Inc."
                                        subtitle="Software Engineering Intern"
                                        createdAt="5/1/2017 - 9/15/2017"
                                        titleStyle={headerStyle}
                                        contentStyle={contentStyle}
                                        subtitleStyle={subtitleStyle}>
Designed a fully client side floor planning software intended for  lenders and appraisers to create maps of  real estate using Javascript, JQuery, React, CSS. Developed the maps module that assisted appraisers in making detailed reports using  Python3, various third party REST API’s, MongoDB, React.
                                       <ul className="timeline-list">
                                            <li>Python3 </li>
                                            <li>Flask</li>
                                            <li>React</li>
                                            <li>Typescript</li>
                                            <li>Jquery</li>
                                            <li>MongoDB</li>
                                        </ul>
                        </TimelineEvent>
                </Timeline>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Exp