import React from 'react';
import './services.css';
import Header from '../../components/header/header.component';
import boxing from '../../assets/boxing.png';
import paint from '../../assets/reactpaint.png';
import bmicalc from '../../assets/bmicalc.png';
import calculator from '../../assets/calc.png';
import ReactWebsiteHeader1 from '../../assets/ReactWebsiteHeader1.png';
import ReactWebsiteHeader2 from '../../assets/ReactWebsiteHeader2.png';
import ReactWebsiteSidebar1 from '../../assets/ReactWebsiteSidebar1.png';
import ReactWebsiteSidebar2 from '../../assets/ReactWebsiteSidebar2.png';
const ServicesPage = () => (<>
    <div className='homestead' >
        <Header showPicture={true} />
            <div class="my-apps">
                <a class="single-app" target={'_blank'} href ={"https://react-website-header-a782a166ef6d.herokuapp.com/"}><img className='serv-image' src={ReactWebsiteHeader1} ></img>
                    <p className='reduce'>
                    <h4 class="reduceh">React Website Header 1</h4>
                    This is an example on how to implement a header in React JS using CSS Libraries. Website link: <a target={'blank'} href={"https://react-website-header-a782a166ef6d.herokuapp.com/"}>https://react-website-header-a782a166ef6d.herokuapp.com/</a>
                    Github link <a target={'_blank'} href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Header"}>https://github.com/gabrielnatividaddev-coder/React-Website-Header</a> 
                   </p>
                </a>   
            
                <a class="single-app" target={'_blank'} href ={"https://react-website-header2-7aa1cc753cbd.herokuapp.com/"}><img className='serv-image' src={ReactWebsiteHeader2} ></img>
                    <p className='reduce'>
                    <h4 class="reduceh">React Website Header 2</h4>
                    This is an example on how to implement a header in React JS using CSS Libraries.
                    Website link: <a target={'_blank'} href={"https://react-website-header2-7aa1cc753cbd.herokuapp.com/"}>https://react-website-header2-7aa1cc753cbd.herokuapp.com/</a>
                    Github link <a target={'_blank'} href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Header-2"}>https://github.com/gabrielnatividaddev-coder/React-Website-Header-2</a> 
                   </p>
                </a>   
            
                <a class="single-app" target={'_blank'} href ={"https://react-sidebar-c9b48d6c91e3.herokuapp.com/"}><img className='serv-image' src={ReactWebsiteSidebar1} ></img>
                   <p className='reduce'>
                    <h4 class="reduceh">React Website Sidebar 1</h4>
                    This is an example on how to implement a Sidebar in React JS using CSS Libraries.
                    Website link: <a target={'_blank'} href={"https://react-sidebar-c9b48d6c91e3.herokuapp.com/"}>https://react-sidebar-c9b48d6c91e3.herokuapp.com/</a>
                    Github link <a target={'_blank'} href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar"}>https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar</a> 
                    </p>
                </a>   
            
                <a class="single-app" target={'_blank'} href ={"https://react-sidebar2-d796912b03f7.herokuapp.com/"}><img className='serv-image' src={ReactWebsiteSidebar2} ></img>
                   <p className='reduce'>
                    <h4 class="reduceh">React Website Sidebar 2</h4>
                    This is an example on how to implement a Sidebar in React JS using CSS Libraries. 
                    Website link: <a target={'_blank'} href={"https://react-sidebar2-d796912b03f7.herokuapp.com/"}>https://react-sidebar2-d796912b03f7.herokuapp.com/</a>
                    Github link <a target={'_blank'} href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar-2"}>https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar-2</a> 
                    </p>
                </a>

                <a class="single-app" target={'_blank'} href ={"https://boxing-news-09ce3e637120.herokuapp.com/"} >
                    <img src={boxing} className='serv-image' ></img>
                    <p className='reduce'>
                    <h4 class="reduceh">World Boxing News Website</h4>
                    This application fetches the latest boxing news using this api ( <a href={'https://newsapi.org/'} >https://newsapi.org/</a> )
                     The frontend used in this application is React JS and for the Backend Node JS with express js framework. This application 
                     uses React-Redux for state management. Website link: ( <a target={'_blank'} href="https://boxing-news-09ce3e637120.herokuapp.com/">https://boxing-news-09ce3e637120.herokuapp.com/</a> )
                    Github link <a target={'_blank'} href ={"https://github.com/gabrielnatividaddev-coder/boxing-news-website"}>https://github.com/gabrielnatividaddev-coder/boxing-news-website</a> 
                    </p>
                </a>

                <a class="single-app" target={'_blank'} href ={"https://react-canvas-ba3ef7e3cbe6.herokuapp.com/"}><img className='serv-image' src={paint} ></img>
                   <p className='reduce'>
                    <h4 class="reduceh">React JS Paint Application</h4>
                    This is a React JS paint website application. The website application has a guide on how to use tools/colors etc. The frontend used in this application is React JS and for the Backend Node JS. This application uses React-Redux for state management. Website link: ( <a target={'_blank'} href="https://react-canvas-ba3ef7e3cbe6.herokuapp.com/">https://react-canvas-ba3ef7e3cbe6.herokuapp.com/</a> ) Github link  <a target={'_blank'} href ={"https://github.com/gabrielnatividaddev-coder/React-JS-Paint-Application"}>https://github.com/gabrielnatividaddev-coder/React-JS-Paint-Application</a>
                    </p>
                </a>

                <a class="single-app" target={'_blank'} href ={"https://bmi-calculator-website-9491fd7ea394.herokuapp.com/"}><img className='serv-image' src={bmicalc} ></img>
                    <p className='reduce'>
                    <h4  class="reduceh">BMI Calculator Website</h4>
                    This application calculates a person body mass index. 
                    The frontend used in this application is React JS and Mantine UI, Styled Components, CSS and for the Backend Node JS with express js framework.
                    This application uses React-Redux for state management.
                    Website link:  <a target={'_blank'} href ={"https://bmi-calculator-website-9491fd7ea394.herokuapp.com/"}>https://bmi-calculator-website-9491fd7ea394.herokuapp.com/</a> 
                    Github link <a target={'_blank'} href ={"https://github.com/gabrielnatividaddev-coder/BMI-Calculator"}>https://github.com/gabrielnatividaddev-coder/BMI-Calculator</a> 
                    </p>
                </a>

                <a class="single-app" target={'_blank'} href ={"https://calculator-master-79ac6e52ed8a.herokuapp.com/"}><img className='serv-image' src={calculator} ></img>
                    <p className='reduce'>
                    <h4 class="reduceh">Basic Calculator Application</h4>
                    This is a calculator application you can perform basic mathematical operations.
                    This application is built using React.JS and ECMAScript 2023 javascript, Mantine UI and has an inbuilt redux state management scaffold that I made you should see more of redux on my other projects.
                    Website link: <a target={'_blank'} href={"https://calculator-master-79ac6e52ed8a.herokuapp.com/"}>https://calculator-master-79ac6e52ed8a.herokuapp.com/</a>
                    Github link <a target={'_blank'} href ={"https://github.com/gabrielnatividaddev-coder/calculator"}>https://github.com/gabrielnatividaddev-coder/calculator</a> 
                   </p>
                </a>
          

        </div>
        
    </div>




    </>
);

export default ServicesPage;
