import React, { useState } from 'react';
import Banner from './components/Banner';
import ProfileFoto from './components/ProfileFoto';
import Description from './components/Description';
import Navbar from './components/Navbar';
import Visit from './components/Visit';
import ProjectsWeb from './components/ProjectsWeb';
import ProjectsDesign from './components/ProjectsDesign';
import ProjectsGame from './components/ProjectsGame';
import './styles.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('WEB');

  const renderSection = () => {
    switch (activeSection) {
      case 'WEB':
        return <ProjectsWeb />;
      case 'DESIGN':
        return <ProjectsDesign />;
      case 'GAME':
        return <ProjectsGame />;
      default:
        return <ProjectsWeb />;
    }
  };

  return (
    <div className="container">
      <Banner />
      <ProfileFoto />
      <Description />
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <Visit />
      {renderSection()}
    </div>
  );
};

export default App;
