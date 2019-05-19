import React from 'react';
import { Row, Col, Icon} from 'antd';

class Personal extends React.Component{

   
    render(){
        return(
            <div id="jelly" className={"container jelly-" +this.props.theme}>
                <h1 className={"section-header-"+this.props.theme}> Projects and Research</h1>
                <Row type="flex" justify="center">
                    <Col>
                        <ul className="no-style-list">
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Aqua Watch</h3>
                                <p className={"subsection-content-"+this.props.theme}>A data-driven, real-time, cost-efficient approach towards detecing lead and other contaminants in drinking water. </p>
                                <a target="_blank" rel="noopener noreferrer" href="assets/misc/AquaWatch.pdf" className={"site-btn-"+this.props.theme}>READ THE PAPER</a>
                                <div className={"header-btns-"+this.props.theme}>
                                    <a target="_blank" href="https://github.com/aqua-watch"><Icon type="github"></Icon></a>
                                </div>
                            </li>
                            
                        </ul>
                    </Col>
                   
                </Row>
          </div>
        );
    }
}

export default Personal