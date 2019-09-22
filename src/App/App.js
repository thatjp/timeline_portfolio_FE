import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import isMobile from 'ismobilejs';
import Nav from '../components/Nav/Nav';
import ColorShift from '../components/ColorShift/ColorShift';
import About from '../components/About/About';
import Center from '../components/Center/Center';
import { GlobalStyle, AppStyles, theme } from './styles';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: {
        projects: false,
        sketches: false,
        about: false,
        resume: false,
      },
      isNightColor: true,
      userAgent: null,
      isProjects: false,
      isAbout: false,
      isContact: false,
      navItem: null,
    };
  }

  componentDidMount() {
    const userAgent = navigator.userAgent;
    this.setState({
      userAgent,
    });
  }

  handleColorShiftClick = (isNightTime) => {
    if (isNightTime) {
      this.setState({
        isNightColor: true,
      });
    } else {
      this.setState({
        isNightColor: false,
      });
    }
  }

  // handleTimeLineClick = (e) => {
  //   e.preventDefault();
  //   const { isProjects } = this.state;
  //   let item;

  //   if (isProjects) {
  //     item = projects.projects.filter(project => (
  //       project.name === e.target.name));
  //   } else {
  //     item = projects.work.filter(job => (
  //       job.name === e.target.name));
  //   }

  //   this.setState({
  //     timeLineContent: item[0],
  //   });
  // }

  handleProjectsClick = () => {
    const { isProjects } = this.state;
    this.setState({
      isProjects: !isProjects,
    });
  };

  handleAboutClick = () => {
    const { isAbout } = this.state;
    this.setState({
      isAbout: !isAbout,
    });
  };

  handleContactClick = () => {
    const { isContact } = this.state;
    this.setState({
      isContact: !isContact,
    });
  };

  handleNavClick = (e) => {
    this.setState({
      navItem: e.target.innerHTML,
    });
  }

  renderTimeline = (projectsData) => {
    const { navItem } = this.state;

    switch (navItem) {
      case 'Projects':
        return projectsData.projects;
      case 'Work':
        return projectsData.work;
      default:
        return null;
    }
  };

  detectMobile = (userAgent) => (
    isMobile(userAgent).any
  );

  render() {
    const {
      isOpen,
      isProjects,
      isNightColor,
      isAbout,
      isContact,
      navItem,
      userAgent,
    } = this.state;

    return (
      <ThemeProvider theme={theme}>
        <AppStyles>
          <GlobalStyle
            nightTime={isNightColor}
          />
          <div className="section left">
            <Nav
              openContent={this.openContent}
              onClick={this.handleClick}
              about={isOpen.about}
              projects={isOpen.projects}
              sketches={isOpen.sketches}
              resume={isOpen.resume}
              nightTime={isNightColor}
              handleProjectsClick={() => this.handleProjectsClick}
              handleAboutClick={() => this.handleAboutClick}
              handleContactClick={() => this.handleContactClick}
              isMobile={this.detectMobile(userAgent)}
            />
          </div>
          <div className="section center">
            <Center
              isAbout={isAbout}
              isContact={isContact}
              isProjects={isProjects}
              renderTimeline={() => this.renderTimeline()}
              navItem={navItem}
              isNightCol={isNightColor}
              isNightColor={isNightColor}
            />
          </div>
          <div className="section right">
            <About />
            <ColorShift
              handleColorShiftClick={bool => this.handleColorShiftClick(bool)}
            />
          </div>
        </AppStyles>
      </ThemeProvider>
    );
  }
}

export default App;