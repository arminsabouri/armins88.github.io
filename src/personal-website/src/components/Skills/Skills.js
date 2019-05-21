import React from 'react';
import { Row, Col, Progress} from 'antd';

class Exp extends React.Component{

    render(){
        const colorGradient = {
            from: '#003366',
            to: '#006666',
        };

        return(
            <div id="curious" className={"container curious-" +this.props.theme}>
                <h1 className={"section-header-"+this.props.theme}>Skills and Intrests</h1>
                <Row type="flex" justify="space-around">
                    <Col span={6}>
                    <ul className="no-style-list">
                        <li>

                            <Progress
                                strokeColor={colorGradient}
                                percent={56.9}
                                status="active"
                                showInfo={false}
                                />
                                <h3 className={"subsection-content-"+this.props.theme}>C</h3>
                        </li>
                    </ul>
                    </Col>
                    <Col span={6}>
                    <Progress
                        strokeColor={colorGradient}
                        percent={99.9}
                        status="active"
                        showInfo={false}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Exp