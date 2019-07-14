import React from 'react';
import { Row, Col, Progress} from 'antd';

class Exp extends React.Component{

    render(){
        const colorGradient = {
            from: '#003366',
            to: '#006666',
        };

        return(
            <div id="c" className={"container c-" +this.props.theme}>
                <Row type="flex" justify="space-around">
                    Copyright {new Date().getFullYear()} | Armin Sabouri
                </Row>
            </div>
        );
    }
}

export default Exp