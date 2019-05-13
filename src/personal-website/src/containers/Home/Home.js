import React from 'react';
import { Layout } from 'antd';
import "antd/dist/antd.css";
import style from '../../../public/css/style.css';
import PageHeader from '../../components/Header';



class Home extends React.Component{
    LIGHT_THEMED = 'light';
    DARK_THEMED = 'dark';
    constructor(){
        super();
    }

    render(){
        return(
            <React.Fragment>
                <PageHeader theme={this.LIGHT_THEMED}/>
            </React.Fragment>
        );
    }
}

export default Home