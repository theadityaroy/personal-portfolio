import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <SectionA />
    </div>
  );
}

////// HEAD SECTION //////
const Header = () => {
  return (
    <div className='header-bar'>
      <HeaderItem text="theadityaroy" className="header-brand" />
      <div className='nav-menu'>
        <HeaderItem text="home" />
        <HeaderItem text="works" />
        <HeaderItem text="contact" />
      </div>
    </div>
  );
}

const HeaderItem = (props) => {
  return (
    <div className={`nav-item ${props.className}`}>
      {props.text}
    </div>
  );
}

////// MAIN ///////
const SectionA = () => {
  return (
    <div className='main-container'>
      <ProfileCard width='60%' />
      <ContactCard width='40%' />
    </div>
  )
}

////// CARD //////
const ProfileCard = (props) => {
  return (
    <div className='card' style={{ maxWidth: props.width }}>
      <img src='Assets/ProfilePicture.jpg' alt='profile-picture' className='image' />
      <h1 className='big-heading'>aditya roy<br></br>is a full stack<br></br>web developer.</h1>
    </div>
  )
}

const ContactCard = (props) => {
  return (
    <div className='card' style={{ maxWidth: props.width, alignItems: 'center' }}>
      <div className='contact-sectionA'>
        <img src='Assets/project-icon.png' alt='project-icon' />
        Have a project<br></br>in mind?
      </div>
      <button className='button'>heyy@aadi.com</button>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
