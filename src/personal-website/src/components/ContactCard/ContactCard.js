import React from 'react';
import { Row, Col, Card} from 'antd';

class ContactCard extends React.Component{

    render(){
        return(
            <div id="picton" className={"container picton-" + this.props.theme}>
                 <Row type="flex" justify="center" align="top">
                     <Col span={6}>
                        <h1 className={"contact-card-"+this.props.theme}>Boston Ma</h1>
                     </Col>
                     <Col span={6}>
                        <h1 className={"contact-card-"+this.props.theme}>+18578912488</h1>
                     </Col>
                 </Row>
            </div>
        );
    }
}

export default ContactCard