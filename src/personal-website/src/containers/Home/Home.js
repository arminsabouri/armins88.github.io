import React from 'react';
import { Layout } from 'antd';
import "antd/dist/antd.css";
import style from '../../../public/css/style.css';
import PageHeader from '../../components/Header';
import Contactcard from '../../components/ContactCard';



class Home extends React.Component{
    LIGHT_THEMED = 'light';
    DARK_THEMED = 'dark';
    constructor(){
        super();
        this.state = {
            theme: this.LIGHT_THEMED,
        }
    }

    toggleTheme = () =>{
        this.setState({
            theme: this.state.theme === 'light' ? 'dark' : 'light',
        })
    }

    render(){
        return(
            <React.Fragment>
                <PageHeader theme={this.state.theme} toggleTheme={this.toggleTheme}/>
                <Contactcard theme={this.state.theme}/>
            </React.Fragment>
        );
    }
}

export default Home