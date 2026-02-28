import React from 'react';
import './help.css';
import Header from '../../components/header/header.component';
const HomeBodyMessageCSS = {
    fontStyle: 'Italic', 
    color:'black', 
    textAlign:'center', 
    borderRadius: '8px',
    fontSize: '20px',
    lineHeight: '30px'
}
const MainDivCSS = {
    width: '100%', 
}
const NestedDivCSS = {
    height:'100%', 
    paddingLeft: '15px', 
};
const astyles = {
    textDecoration: 'none'
};
const HelpPage = () => (<>
    <div className='home' >
        <Header showPicture={true}/>
        <div style={MainDivCSS}>
            <div style={NestedDivCSS}>

            <p style={HomeBodyMessageCSS}>
                <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/calculator"}>https://github.com/gabrielnatividaddev-coder/calculator</a> <br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/boxing-news-website"}>https://github.com/gabrielnatividaddev-coder/boxing-news-website</a><br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/BMI-Calculator"}>https://github.com/gabrielnatividaddev-coder/BMI-Calculator</a> <br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/React-JS-Paint-Application"}>https://github.com/gabrielnatividaddev-coder/React-JS-Paint-Application</a> <br/>      
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar"}>https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar</a> <br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar-2"}>https://github.com/gabrielnatividaddev-coder/React-Website-Sidebar-2</a><br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Header"}>https://github.com/gabrielnatividaddev-coder/React-Website-Header</a> <br/>
               <a style={astyles} href ={"https://github.com/gabrielnatividaddev-coder/React-Website-Header-2"}>https://github.com/gabrielnatividaddev-coder/React-Website-Header-2</a> <br/>     
               <a style={astyles} href={"https://bmi-calculator-website-9491fd7ea394.herokuapp.com/"}> https://bmi-calculator-website-9491fd7ea394.herokuapp.com/ </a> <br/>
               <a style={astyles} href={"https://boxing-news-09ce3e637120.herokuapp.com/"}> https://boxing-news-09ce3e637120.herokuapp.com/ </a> <br/>
               <a style={astyles} href={"https://calculator-master-79ac6e52ed8a.herokuapp.com/"}> https://calculator-master-79ac6e52ed8a.herokuapp.com/ </a> <br/>
               <a style={astyles} href={"https://react-canvas-ba3ef7e3cbe6.herokuapp.com/"}> https://react-canvas-ba3ef7e3cbe6.herokuapp.com/ </a> <br/>
               <a style={astyles} href={"https://react-sidebar-c9b48d6c91e3.herokuapp.com/"}> https://react-sidebar-c9b48d6c91e3.herokuapp.com/ </a> <br/>
               <a style={astyles} href={"https://react-sidebar2-d796912b03f7.herokuapp.com/"}> https://react-sidebar2-d796912b03f7.herokuapp.com/</a> <br/>
               <a style={astyles} href={"https://react-website-header-a782a166ef6d.herokuapp.com/"}> https://react-website-header-a782a166ef6d.herokuapp.com/ </a> <br/>
               <a style={astyles} href={"https://react-website-header2-7aa1cc753cbd.herokuapp.com/"}> https://react-website-header2-7aa1cc753cbd.herokuapp.com/ </a> <br/>
                 <a style={astyles} href={'https://newsapi.org/'} >https://newsapi.org/</a><br/>
               <a style={astyles} href={"https://tabler.io/icons"}> https://tabler.io/icons </a> <br/>
               <a style={astyles} href={"https://styled-components.com/"}> https://styled-components.com/ </a> <br/>
               <a style={astyles} href={"https://semantic-ui.com//"}> https://semantic-ui.com// </a> <br/>
               <a style={astyles} href={"https://react-redux.js.org/"}> https://react-redux.js.org/ </a> <br/>
               <a style={astyles} href={"https://mantine.dev/getting-started/"}> https://mantine.dev/getting-started/ </a> <br/>
            </p>
            </div>
            {/* <p style={{width: '200px'}}></p> */}
        </div>
        
    </div>




    </>
);

export default HelpPage;
