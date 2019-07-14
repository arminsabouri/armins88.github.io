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
                
                <Row type="flex" justify="space-around" style={{padding: "101px"}}>
                    <Col>
                    <h1 className={"section-header-"+this.props.theme}>Skills</h1>
                    <ul className="no-style-list">
                        <li>

                            <Progress
                                strokeColor={colorGradient}
                                percent={80}
                                status="active"
                                showInfo={false}
                                />
                                <h3 className={"subsection-content-"+this.props.theme}>C</h3>
                        </li>
                        <li>

                            <Progress
                                strokeColor={colorGradient}
                                percent={87}
                                status="active"
                                showInfo={false}
                                />
                                <h3 className={"subsection-content-"+this.props.theme}>ES6/TS</h3>
                        </li>
                        <li>

                            <Progress
                                strokeColor={colorGradient}
                                percent={83}
                                status="active"
                                showInfo={false}
                                />
                                <h3 className={"subsection-content-"+this.props.theme}>React</h3>
                        </li>
                        <li>

                            <Progress
                                strokeColor={colorGradient}
                                percent={73}
                                status="active"
                                showInfo={false}
                                />
                                <h3 className={"subsection-content-"+this.props.theme}>C# - .NET Core</h3>
                        </li>
                        <li>

                            <Progress
                                strokeColor={colorGradient}
                                percent={77}
                                status="active"
                                showInfo={false}
                                />
                                <h3 className={"subsection-content-"+this.props.theme}>Python 3.6</h3>
                        </li>
                        <li>

                            <Progress
                                strokeColor={colorGradient}
                                percent={66}
                                status="active"
                                showInfo={false}
                                />
                                <h3 className={"subsection-content-"+this.props.theme}>Node</h3>
                        </li>
                        <li>

                            <Progress
                                strokeColor={colorGradient}
                                percent={75}
                                status="active"
                                showInfo={false}
                                />
                                <h3 className={"subsection-content-"+this.props.theme}>PHP7</h3>
                        </li>
                        <li>

                            <Progress
                                strokeColor={colorGradient}
                                percent={65}
                                status="active"
                                showInfo={false}
                                />
                                <h3 className={"subsection-content-"+this.props.theme}>SQL</h3>
                        </li>
                        <li>

                            <Progress
                                strokeColor={colorGradient}
                                percent={60}
                                status="active"
                                showInfo={false}
                                />
                                <h3 className={"subsection-content-"+this.props.theme}>MongoDB</h3>
                        </li>
                        <li>

                            <Progress
                                strokeColor={colorGradient}
                                percent={50}
                                status="active"
                                showInfo={false}
                                />
                                <h3 className={"subsection-content-"+this.props.theme}>UI/UX</h3>
                        </li>
                        <li>

                            <Progress
                                strokeColor={colorGradient}
                                percent={39}
                                status="active"
                                showInfo={false}
                                />
                                <h3 className={"subsection-content-"+this.props.theme}>x86 Assembly</h3>
                        </li>
                        <li>

                            <Progress
                                strokeColor={colorGradient}
                                percent={20}
                                status="active"
                                showInfo={false}
                                />
                                <h3 className={"subsection-content-"+this.props.theme}>ARMv7 Assembly</h3>
                        </li>
                    </ul>
                    </Col>
                    <Col>
                    <h1 className={"section-header-"+this.props.theme}>Instrests</h1>
                    <ul className="no-style-list">
                        <li>
                            <Progress
                                strokeColor={colorGradient}
                                percent={90}
                                status="active"
                                showInfo={false}
                                />
                            <h3 className={"subsection-content-"+this.props.theme}>Web Engenieering</h3>
                        </li>
                        <li>
                            <Progress
                                strokeColor={colorGradient}
                                percent={75}
                                status="active"
                                showInfo={false}
                                />
                            <h3 className={"subsection-content-"+this.props.theme}>Embedded Systems</h3>
                        </li>
                        <li>
                            <Progress
                                strokeColor={colorGradient}
                                percent={60}
                                status="active"
                                showInfo={false}
                                />
                            <h3 className={"subsection-content-"+this.props.theme}>Resource Managment</h3>
                        </li>
                        <li>
                            <Progress
                                strokeColor={colorGradient}
                                percent={50}
                                status="active"
                                showInfo={false}
                                />
                            <h3 className={"subsection-content-"+this.props.theme}>Block Chain/Distributed Systems</h3>
                        </li>
                        <li>
                            <Progress
                                strokeColor={colorGradient}
                                percent={25}
                                status="active"
                                showInfo={false}
                                />
                            <h3 className={"subsection-content-"+this.props.theme}>Data Science</h3>
                        </li>
                    </ul>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Exp