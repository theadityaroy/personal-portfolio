import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

// Functional components for better readability and maintainability
function App() {
  return (
    <div className="app-container">
      <Header />
      <MainContent />
    </div>
  );
}

const Header = () => {
  return (
    <div className="header">
      <div className="nav-item">theadityaroy.</div>
      <Nav />
    </div>
  );
};

const Nav = () => {
  return (
    <div className="nav-menu">
      <div className="nav-item">home.</div>
      <div className="nav-item --grey">works.</div>
      <div className="nav-item --grey">contact.</div>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="main-content">
      <ProfileCard />
      <ContactCard />
    </div>
  );
};

const ProfileCard = () => {
  return (
    <div className="card">
      <img
        src="Assets/ProfilePicture.jpg"
        alt="aditya roy"
        className="image"
      />
      <p className="description">
        aditya roy
        <br />
        is a <span className="span --grey">web developer.</span>
      </p>
    </div>
  );
};

const ContactCard = () => {
  return (
    <div className="card contact-card">
      <div className="context-container">
        <img
          src="Assets/project-icon.png"
          alt="Project Icon"
          className="contact-icon"
        />
        <div className="contact-text">
          Have a project
          <br />
          in mind?
        </div>
      </div>
      <a href="mailto:workwithadityaroy@gmail.com" className="button">
        heyy@aadi.com
      </a>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
