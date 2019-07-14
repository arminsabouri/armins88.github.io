import React from 'react';
import { Layout } from 'antd';
import "antd/dist/antd.css";
import style from '../../../public/css/style.css';
import PageHeader from '../../components/Header';
import Contactcard from '../../components/ContactCard';
import Exp from '../../components/Exp';
import Personal from '../../components/Personal';
import Skills from '../../components/Skills';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
                {/* <Navbar theme={this.state.theme} /> */}
                <PageHeader theme={this.state.theme} toggleTheme={this.toggleTheme}/>
                <Contactcard theme={this.state.theme}/>
                <Exp theme={this.state.theme}/>
                <Personal theme={this.state.theme}/>
                <Skills theme={this.state.theme}/>
                <Footer theme={this.state.theme} />
            </React.Fragment>
        );
    }
}

export default Home