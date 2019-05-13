import React from 'react';
import propic from '../../../public/imgs/propic.jpg';
import { Row, Col, Switch, Icon} from 'antd';

class Header extends React.Component{

    toggleThemechange = (checked) =>{
        this.props.toggleTheme();
        console.log(`switch to ${checked}`);
    }

    render(){
        return(
            <div id="h" className={"container h-" +this.props.theme}>
                <Row type="flex" justify="center">
                    <Col span={10}>
                        <img src={propic} alt="Profile Picture" className="propic"/> 
                    </Col>
                    <Col span={2}>
                        <Row>
                        <div className={"cv-btn-"+this.props.theme}>
                            <a target="_blank" rel="noopener noreferrer" href="assets/misc/Armin_Sabouri_Resume.pdf" className={"site-btn-"+this.props.theme}>DOWNLOAD MY CV</a>
                        </div>    
                        <div className={"header-btns-"+this.props.theme}>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/armins88"><Icon type="github" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/armin-sabouri-88875054/"><Icon type="linkedin" /></a>
                        </div>
                        </Row>
                        <Row>
                            <b> Toggle Theme </b> <Switch onChange={this.toggleThemechange} />
                        </Row>
                    </Col>
                </Row>  
                <Row type="flex" justify="center">                
                    <h1 className={this.props.theme}>Armin Sabouri</h1>
                    <p className={this.props.theme}>
                        I am recent Computer Science graduate from Boston Univeristy and a full-stack engineer at NormaTec 
                    </p>
                </Row>
            </div>
        );
    }
}

export default Header