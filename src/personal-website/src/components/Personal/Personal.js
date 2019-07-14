import React from 'react';
import { Row, Col, Icon} from 'antd';
import Youtube from 'react-youtube';

class Personal extends React.Component{

    toUpper = (str) =>{
        return str.toUpperCase();
    }

    render(){
        return(
            <div id="jelly" className={"container jelly-" +this.props.theme}>
                <h1 className={"section-header-"+this.props.theme}> Projects and Research</h1>
                <Row type="content" justify="center">
                    <Col>
                        <ul className="no-style-list personal-projects">
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Aqua Watch</h3>
                                <p className={"subsection-content-"+this.props.theme}>A data-driven, real-time, cost-efficient approach towards detecing lead and other contaminants in drinking water.
                                <br />
                                
                                <a target="_blank" rel="noopener noreferrer" href="assets/misc/AquaWatch.pdf" className={"site-btn-"+this.props.theme}>READ THE PAPER</a>
                                <a target="_blank" rel="noopener noreferrer" href="assets/misc/AquaWatch.pdf" className={"site-btn-"+this.props.theme}>{this.toUpper("Hariri Institute Research Incubation Award.")}</a>
                                <div className={"header-btns-"+this.props.theme}>
                                    <a target="_blank" href="https://github.com/aqua-watch"><Icon type="github"></Icon></a>
                                </div>
                                 </p>
                                
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Self Balancing Board</h3>
                                <p className={"subsection-content-"+this.props.theme}> Balancing a ball at a user determined set point using two servo motors moving a touch screen plane in the x and y direction.
                                <hr />

                                <div className={"header-btns-"+this.props.theme}>
                                    <Youtube videoId="m-j_BAwmVwc" />
                                </div>
                                </p>
                                
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Write Free</h3>
                                <p className={"subsection-content-"+this.props.theme}> World’s first web-based note-taking application specifically designed to support people with dyslexia.
                                <hr />
                                <a target="_blank" rel="noopener noreferrer" href="http://www.bu.edu/hic/project-spotlight/" className={"site-btn-"+this.props.theme}>READ MORE</a>
                                
                                <div className={"header-btns-"+this.props.theme}>
                                    Front End: <a target="_blank" href="https://github.com/armins88/writefree-fe"><Icon type="github"></Icon></a>
                                    Back End: <a target="_blank" href="https://github.com/armins88/writefree-be"><Icon type="github"></Icon></a>
                                </div>
                                </p>
                                
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Fat Pants</h3>
                                <p className={"subsection-content-"+this.props.theme}>Fat pants is a simple usb device built from scratch that dims and switches a set of lights. Submited as a final project for CS545 Embeded Systems
                                <hr />
                                <div className={"header-btns-"+this.props.theme}>
                                    <a target="_blank" href="https://github.com/armins88/Fat_Pants"><Icon type="github"></Icon></a>
                                </div>
                                </p>
                            </li>
                            
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Quest to Arm</h3>
                                <p className={"subsection-content-"+this.props.theme}> A port of the real time x86 OS <a href="http://www.questos.org">quest</a> to ARMv7. Submited as a final project for CS522 Operating Systems
                                <hr />
                                <div className={"header-btns-"+this.props.theme}>
                                    <a target="_blank" href="https://github.com/armins88/quest/tree/arm"><Icon type="github"></Icon></a>
                                </div>
                                
                                </p>
                                
                               
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Redux ORM</h3>
                                <p className={"subsection-content-"+this.props.theme}> An object relation manager meant for redux stores (Current work in progress)
                                <hr />
                                <div className={"header-btns-"+this.props.theme}>
                                     <a target="_blank" href="https://github.com/armins88/redux-ODM"><Icon type="github"></Icon></a>
                                </div>
                                
                                 </p>
                                
                                
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Stove Watch</h3>
                                <p className={"subsection-content-"+this.props.theme}> A specialized embedded device which determines if your stove is on or off shipped with an web app. 
                                <hr />
                                <div className={"header-btns-"+this.props.theme}>
                                     <a target="_blank" href="https://github.com/armins88/stove_watch"><Icon type="github"></Icon></a>
                                </div>
                                
                                 </p>
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Cross Word Generator</h3>
                                <p className={"subsection-content-"+this.props.theme}> Angular 7 app to generate a valid cross word puzzle given specific grid constraints. 
                                <hr />
                                <div className={"header-btns-"+this.props.theme}>
                                     <a target="_blank" href="https://github.com/armins88/Crossword_Generator"><Icon type="github"></Icon></a>
                                </div>
                                
                                 </p>
                            </li>
                            <li>
                                <h3 className={"subsection-header-"+this.props.theme}>Smart Lights</h3>
                                <p className={"subsection-content-"+this.props.theme}> A full stack implementation of a RGB light system hosted from a Raspi3 and controlled from a phone. 
                                <hr />
                                <div className={"header-btns-"+this.props.theme}>
                                     <a target="_blank" href="https://github.com/armins88/Smart_Lights"><Icon type="github"></Icon></a>
                                </div>
                                
                                 </p>
                            </li>
                        </ul>
                    </Col>
                   
                </Row>
          </div>
        );
    }
}

export default Personal