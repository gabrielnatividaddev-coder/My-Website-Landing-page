import React from 'react';
import './aboutpage.css';
import Header from '../../components/header/header.component';
import Samsung from '../../assets/samsung_electronics_logo.jpg';
import Hypereonlabs from '../../assets/hypereonlabs_logo.jpg';
import collabera from '../../assets/collabera_digital_logo.jpg';
import JMD from '../../assets/javier.png';
import proup from '../../assets/proup.jpg';
import testdome from '../../assets/testdome.png';
import linkedinbadge from '../../assets/linkedinbadge.png';
const HomeBodyMessageCSS = {
    color:'black', 
    padding: '5px',
    fontSize: '18px',
    letterSpacing: '.5px',
    lineHeight: '25px',
    fontFamily: '"Times New Roman", Times, serif',
    backgroundColor: 'white',
    borderRadius: '5px'
}
const AccomplishmentsCSS = {
    fontFamily: '"Times New Roman", Times, serif',
    backgroundColor: 'white',
    borderRadius: '5px',
    lineHeight: '30px',
    padding: '10px'
}

const NestedDivCSS = {
    paddingBottom: '40px',
    paddingTop: '10px'
};
const CaptionStyleCSS = { 
  fontFamily:'Snell Roundhand, cursive', 
  fontWeight:'bold', 
  fontStyle: 'italic', 
  color: 'red', 
  textAlign:'center', 
  backgroundColor:'white'
};
const ImageStyleCSS = { 
  verticalAlign: 'middle', 
  border: '5px solid #FFFFFF',
  filter: 'grayscale(25%)'
};
const AboutPage = () => (
    <div className='home' >
        <Header showPicture={true}/>
        <div className='MainDivCSS'>
            <div style={NestedDivCSS}>
                <div className='çenterimage'>
                    <div>
                    <img width="200" src={JMD} style={ImageStyleCSS}></img>
                    <figcaption style={CaptionStyleCSS} >Gabriel Natividad</figcaption>
                </div>
                </div>
            <p style={HomeBodyMessageCSS}>
            Hi! Im Gabriel M. Nativdad, I am a Graduate of Computer Science I have a degree and my working experience is Web Development.
            The Technologies I used for my work for over my 5 years of Web Development experience are Javascript, 
            React JS, React-Boilerplate, React-Redux, Node.js, Node-Loopback,
            Express.js, HTML, CSS, JavaScript, Jira, Gitlab, SonarQube, DevOps, Material-UI,
            Semantic-UI, Mantine UI, SQL, Oracle DB, Mongo DB, WebServices, Agile Work Flow. 
            My most current work experience was in Samsung please see in my work experience section on this page
            </p>
            <h3 className='workexperienceheaders'>Accomplishments: </h3>
            <p style={AccomplishmentsCSS}>
            •&nbsp; <span style={{color: 'red'}}>Samsung Web Developer (2023-2024)</span>.<br/>
            •&nbsp; <span style={{color: 'red'}}>Software Project Manager (Sept 2021 - March 2022) </span><br/>
            •&nbsp; <span style={{color: 'darkblue'}}>“TestDome” certified(Top 10%) for JavaScript, React, Node, PHP, ASP.NET core (MVC), Angular, TypeScript, SQL, C#, HTML, CSS.<br/></span>
            •&nbsp; <span style={{color: 'gold'}}>Linkedin JavaScript skill-based assessment certified (Top 5%).</span><br/>
            •&nbsp; Overall lead of 2 company projects(1. Backend API 2. Frontend Web), also involved in analysis and coding of other company projects (backend and frontend).(Sept 2020 - June 2021)<br/>
            •&nbsp; Assigned 3 positions in the span of 8 months. (Sept 2020 - May 2021)<br/>
            •&nbsp; One of the leaders with the most number of deployed defect fixes - Development Team Progress Board. (Sept 2020 - June 2021)<br/>
            •&nbsp; Consulting company in the construction industry - Researcher, Blueprint Maker, Plan Loader, Matrix Tracker, Data Model Logic. (June 2017, July 2020)<br/>
            •&nbsp; BS in Computer Science (2014-2018)<br/>
            </p>
            <h3 className='workexperienceheaders'> Work Experience </h3>
            <div className='workexperience'>
            <img src={Samsung} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
                Web Developer Samsung Electronics · Full-time
                <br/>Jun 2023 - May 2024 · 1 yr
                <br/>Samsung Electronics· Full-time
                <br/>2023 - 2024 · 1 yr
                <br/>Bonifacio Global City, Philippines · On-site
                <br/>Responsibilities:
                <br/>• Developing and maintaining web applications using technologies such as React JS, React-Boilerplate, React-Redux, Node.js, Node-Loopback, and Express.js.
                <br/>• Implementing responsive and visually appealing user interfaces (UI) with HTML, CSS, and JavaScript.
                <br/>• Collaborating with cross-functional teams, including product managers, designers, and other developers.
                <br/>• Utilizing tools like Jira, Gitlab, and SonarQube for project management and code quality.
                <br/>• Working with Material-UI, Semantic-UI, and Mantine UI to create consistent and user-friendly designs.
                <br/>• Managing databases (SQL, Oracle DB, and Mongo DB) and integrating web services.
                <br/>• Following Agile workflows and participating in DevOps practices.
                <br/><br/>Technologies: React JS, React-Boilerplate, React-Redux, Node.js, Node-Loopback,
                <br/>Express.js, HTML, CSS, JavaScript, Jira, Gitlab, SonarQube, DevOps, Material-UI, 
                <br/>Semantic-UI, Mantine UI, SQL, Oracle DB, Mongo DB, WebServices, Agile Work Flow.
            </p>
            </div>
             <div className='workexperience fix'>
            <img src={Hypereonlabs} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
            Web Developer
            <br/>Hypereon Labs · Full-time
            <br/>Sep 2021 - Mar 2022 · 7 mos
            <br/>Remote
            <br/>Software Project Manager/ Web Developer Software Project Manager/ Web Developer
            <br/>Project Management:
            <br/>• Collaborate with cross-functional teams to define project scope, objectives, and deliverables.
            <br/>• Develop project plans, allocate resources, and track progress.
            <br/>• Ensure adherence to timelines, budgets, and quality standards.
            <br/>• Mitigate risks and resolve issues during the project lifecycle.
            Web Development:
            <br/>• Utilize technologies such as React JS, React-Boilerplate, React-Redux, Node.js, Node-Loopback, Express.js, HTML, CSS, and JavaScript.
            <br/>• Design and implement responsive web interfaces using Material-UI.
            <br/>• Work with databases (SQL, Oracle DB, Mongo DB) and integrate web services.
            <br/>• Collaborate with Gitlab, Jira, and DevOps tools for efficient development workflows.
            <br/>• Apply Agile methodologies to enhance productivity and adapt to changing requirements.
            Quality Assurance:
            <br/>• Implement code reviews, automated testing, and SonarQube analysis.
            <br/>• Ensure code quality, security, and performance.
            <br/>• Communication and Collaboration:
            <br/>• Facilitate communication between technical and non-technical stakeholders.
            <br/>• Coordinate with designers, developers, and testers to achieve project goals.
            <br/>
            <br/>Technologies used: React JS, React-Boilerplate, React-Redux, Node.js, Node-Loopback,
             <br/>Express.js, HTML, CSS, JavaScript, Jira, Gitlab, SonarQube, DevOps, Material-UI, SQL,
              <br/>Oracle DB, Mongo DB, WebServices, Agile Work Flow.
            </p>
            </div>
            <div className='workexperience fix'>
            <img src={collabera} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
            Web Developer
            <br/>Collabera Digital · Full-time
            <br/>Sep 2020 - Mar 2021 · 7 mos
            <br/>On-site
            <br/>Responsibilities
            <br/>• Lead the creation of banking tools using frontend and backend technologies.
            <br/>• Adapted to existing company technologies without any prior knowledge 
            <br/>• Proven ability to adapt under pressure while still meeting excellent standards
            <br/>• Help teammates understand and build software tools.
            <br/>• Architected an entire project functionality.
            <br/><br/>Technologies used: React JS, React-Boilerplate, React-Redux, Node.js, Node-Loopback,
             <br/>Express.js, HTML, CSS, JavaScript, Jira, Gitlab, SonarQube, DevOps, Material-UI, SQL
             <br/>, Oracle DB, Mongo DB, WebServices, Agile Work Flow.
            </p>
            </div>
            <div className='workexperience fix'>
            <img src={proup} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
            Web Developer
            <br/>Programmer
            <br/>ProUP · Part-time
            <br/>Jun 2017 - Jul 2020 · 3 yrs 2 mos
            <br/>United States
            <br/>Consulting company in the construction industry -  Researcher, Blueprint Maker, Plan Loader, Matrix Tracker, Data Model Logic., 
            <br/><br/>Technologies used: (React.js, Node.js, Angular.js, JavaScript, TypeScript, ASP.Net core (MVC), HTML, 
            <br/>CSS, Vanilla.js, SQL, SQL Server, Web Server, JQUERY, AJAX, SOAP, REST, Agile Work Flow)
            </p>
            </div>
            <h3 className='workexperienceheaders'>Awards: </h3>
            <div className='workexperience fix'>
            <img src={testdome} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
             React – TestDome (Top 10%)
             <br/>View online: <a class = "samp" target='_blank' href='https://app.testdome.com/cert/030137d1f1444b6198fd9d31a723bcb0'>cert/030137d1f1444b6198fd9d31a723bcb0</a>
            </p>
            </div>


            <div className='workexperience fix'>
            <img src={testdome} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
             SQL – TestDome (Top 10%)
             <br/>View online: <a target='_blank' href='https://app.testdome.com/cert/019a45ffe19a4bc9a2289158ef1f6c33'>cert/019a45ffe19a4bc9a2289158ef1f6c33</a>
            </p>
            </div>

            <div className='workexperience fix'>
            <img src={testdome} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
             JavaScript  – TestDome (Top 10%)
             <br/>View online: <a target='_blank' href='https://app.testdome.com/cert/7c5bdf9e00b7485d89237af29ff43e28'>cert/7c5bdf9e00b7485d89237af29ff43e28</a>
            </p>
            </div>

            <div className='workexperience fix'>
            <img src={testdome} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
             HTML/CSS and JavaScript  – TestDome (Top 10%)
             <br/>View online: <a target='_blank' href='https://app.testdome.com/cert/517d9140d677484fbabc23c657592120'>cert/517d9140d677484fbabc23c657592120</a>
            </p>
            </div>
            
            <div className='workexperience fix'>
            <img src={testdome} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
             HTML/CSS, React, and Node.js  – TestDome (Top 10%)
             <br/>View online: <a target='_blank' href='https://app.testdome.com/cert/06c651e124ad41eeaf06fe50d65e7e47'>cert/06c651e124ad41eeaf06fe50d65e7e47</a>
            </p>
            </div>

            <div className='workexperience fix'>
            <img src={testdome} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
             Node.js  – TestDome (Top 10%)
             <br/>View online: <a target='_blank' href='https://app.testdome.com/cert/96efdb0e1b644deb83899504283e97ff'>cert/96efdb0e1b644deb83899504283e97ff</a>
            </p>
            </div>

            <div className='workexperience fix'>
            <img src={testdome} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
             Angular  – TestDome (Top 10%)
             <br/>View online: <a target='_blank' href='https://app.testdome.com/cert/848e31b7011f4d7ca7f3cac87bb8e4b1'>cert/848e31b7011f4d7ca7f3cac87bb8e4b1</a>
            </p>
            </div>

            <div className='workexperience fix'>
            <img src={testdome} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
             ASP.NET (Core) MVC – TestDome (Top 10%)
             <br/>View online: <a target='_blank' href='https://app.testdome.com/cert/d16f457e191e4e0495bd4594cc72625d'>cert/d16f457e191e4e0495bd4594cc72625d</a>
            </p>
            </div>

            <div className='workexperience fix'>
            <img src={testdome} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
             C# – TestDome (Top 10%)
             <br/>View online: <a target='_blank' href='https://app.testdome.com/cert/a31d3d35a41a4c04beb344d74eaf3845'>cert/a31d3d35a41a4c04beb344d74eaf3845</a>
            </p>
            </div>

            <div className='workexperience fix'>
            <img src={testdome} width={'48px'} height="48px" ></img>
            <p className='workexperiencedetails'>
             PHP – TestDome (Top 10%)
             <br/>View online: <a target='_blank' href='https://app.testdome.com/cert/8bb37ae534ec40cd9fa2178999adecfb'>cert/8bb37ae534ec40cd9fa2178999adecfb</a>
            </p>
            </div>

            <h3 className='workexperienceheaders'>LinkedIn JavaScript Certification: </h3>
            <img src={linkedinbadge} width={'266.88px'} height="362.88px" ></img>
            </div>
        </div>
    </div>
);

export default AboutPage;
