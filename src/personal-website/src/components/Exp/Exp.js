import React from 'react';
import { Row, Col, Card, Icon} from 'antd';
import {Timeline, TimelineEvent} from 'react-event-timeline'

class Exp extends React.Component{

    render(){
        // const dot = <FontAwesomeIcon icon="circle" style={{ fontSize: '30px' }} />
        const headerStyle = {"font-size":"30px",
            "color": this.props.theme === "light" ? 'black' : 'white'};
        const contentStyle = {"font-size":"20px",
        "color": 'white', 'background-color':'#40424a'};
        return(
            <div id="curious" className={"container curious-" +this.props.theme}>
                <h1 className={"section-header-"+this.props.theme}>Work Experience</h1>
                <Row type="flex" justify="center">
                    <Col>
                    <Timeline>
                        <TimelineEvent title="NormaTec"
                                        createdAt="1/1/2019 - Present"
                                        titleStyle={headerStyle}
                                        contentStyle={contentStyle}>
                                        I received the payment for $543. Should be shipping the item within a couple of hours.
                                        <ul className="timeline-list">
                                            <li>JSX</li>
                                        </ul>
                        </TimelineEvent>
                        <TimelineEvent title="NormaTec"
                                        createdAt="1/1/2019 - Present"
                                        titleStyle={headerStyle}
                                        contentStyle={contentStyle}>
                                        I received the payment for $543. Should be shipping the item within a couple of hours.
                                        <ul className="timeline-list">
                                            <li>JSX</li>
                                        </ul>
                        </TimelineEvent>
                        <TimelineEvent title="NormaTec"
                                        createdAt="1/1/2019 - Present"
                                        titleStyle={headerStyle}
                                        contentStyle={contentStyle}>
                                        I received the payment for $543. Should be shipping the item within a couple of hours.
                                        <ul className="timeline-list">
                                            <li>JSX</li>
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