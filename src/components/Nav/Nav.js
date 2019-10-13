/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import NavStyles from './styles';
import FadeAnimation from '../styles/FadeAnimation';
import NavArrowSvg from '../styles/svg/NavArrow';

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentHover: '',
    };
  }

  showProjects = (itemName) => {
    const { onClick } = this.props;

    switch (itemName) {
      case 'projects':
        onClick('projects');
        break;
      case 'about':
        onClick('about');
        break;
      case 'sketches':
        onClick('sketches');
        break;
      case 'contact':
        onClick('contact');
        break;
      default:
        break;
    }
  };

  onNavHover = (name) => {
    this.setState({
      currentHover: name,
    });
  };

  onNavExit = () => {
    this.setState({
      currentHover: '',
    });
  };

  render() {
    const { currentHover } = this.state;
    const {
      nightTime,
      handleProjectsClick,
      handleAboutClick,
      handleContactClick,
      isMobile,
    } = this.props;

    return (
      <FadeAnimation>
        <NavStyles nightTime mobile={isMobile}>
          <ul>
            <li>
              <div
                onMouseEnter={() => this.onNavHover('about')}
                onMouseLeave={() => this.onNavExit()}
              >
                { currentHover === 'about'
                && (
                <FadeAnimation>
                  <div className="arrow">
                    <NavArrowSvg nightTime={nightTime} />
                  </div>
                </FadeAnimation>
                )}
                <h2 onClick={handleAboutClick()}>About</h2>
              </div>
            </li>
            <li>
              <div
                onMouseEnter={() => this.onNavHover('work')}
                onMouseLeave={() => this.onNavExit()}
              >
                { currentHover === 'work'
                && (
                <FadeAnimation>
                  <div className="arrow">
                    <NavArrowSvg nightTime={nightTime} />
                  </div>
                </FadeAnimation>
                )}
                <button name="work" onClick={handleProjectsClick()}>
                  <h2>Work</h2>
                </button>
              </div>
            </li>
            <li>
              <div
                onMouseEnter={() => this.onNavHover('projects')}
                onMouseLeave={() => this.onNavExit()}
              >
                { currentHover === 'projects'
                && (
                <FadeAnimation>
                  <div className="arrow">
                    <NavArrowSvg nightTime={nightTime} />
                  </div>
                </FadeAnimation>
                )}
                <h2 onClick={handleProjectsClick()}>Projects</h2>
              </div>
            </li>
            <li
              onMouseEnter={() => this.onNavHover('contact')}
              onMouseLeave={() => this.onNavExit()}
            >
              {/* <div
                onMouseEnter={() => this.onNavHover('contact')}
                onMouseLeave={() => this.onNavExit()}
              > */}
              { currentHover === 'contact'
                && (
                <FadeAnimation>
                  <div className="arrow">
                    <NavArrowSvg nightTime={nightTime} />
                  </div>
                </FadeAnimation>
                )}
              <h2 onClick={handleContactClick()}>Contact</h2>
              {/* </div> */}
            </li>
            <li>
              <div
                onMouseEnter={() => this.onNavHover('resume')}
                onMouseLeave={() => this.onNavExit()}
              >
                <a
                  href={require('../../assets/JP-Harris-resume-121318.pdf')}
                >
                  { currentHover === 'resume'
                  && (
                  <FadeAnimation>
                    <div className="arrow">
                      <NavArrowSvg nightTime={nightTime} />
                    </div>
                  </FadeAnimation>
                  )}
                  <h2>Resume</h2>
                </a>
              </div>
            </li>
          </ul>
        </NavStyles>
      </FadeAnimation>
    );
  }
}

Nav.propTypes = {
  onClick: PropTypes.func,
  nightTime: PropTypes.bool.isRequired,
  isMobile: PropTypes.bool.isRequired,
  handleContactClick: PropTypes.func.isRequired,
  handleAboutClick: PropTypes.bool.isRequired,
  handleProjectsClick: PropTypes.bool.isRequired,
};

Nav.defaultProps = {
  onClick: () => {},
};

export default Nav;
