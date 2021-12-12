import { Route, Switch as Switching } from 'react-router';
import styled from 'styled-components'
import Sidebar from './Components/Sidebar';
import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ResumePage from './Pages/ResumePage';
import PortfoliosPage from './Pages/PortfoliosPage';
import BlogsPage from './Pages/BlogsPage';
import ContactPage from './Pages/ContactPage';
import Switch from '@material-ui/core/Switch'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { useEffect, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { IconButton } from '@material-ui/core';



function App() {
  // usestate to toggle dark/light theme; by default it is dark-theme
  const [theme, setTheme] = useState('dark-theme');
  const [checked, setChecked] = useState(false);
  const [navToggle, setNavToggle] = useState(false);

  //when the theme change useEffect will run and set documentElement's class as theme
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  const themeToggler = () => {
    if (theme === 'light-theme') {
      setTheme('dark-theme');
      setChecked(false);
    }
    else {
      setTheme('light-theme');
      setChecked(true);
    }

  }

  return (
    <div className="App">
      <Sidebar navToggle={navToggle} />

      <div className="theme">
        <div className="light-dark-mode">
          <div className="left-content">
            <Brightness4Icon />
          </div>

          <div className="right-content">
            <Switch value="" checked={checked} inputProps={{ 'aria-label': '' }} onClick={themeToggler} />
          </div>
        </div>
      </div>

      <div className="ham-burger-menu">
        <IconButton onClick={()=> setNavToggle(!navToggle)}>
          <MenuIcon />
        </IconButton>
      </div>


      <MainContentStyled>
        <div className="lines">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
          <div className="line-4"></div>
        </div>



        <Switching>

          <Route path="/" exact>
            <HomePage />
          </Route>

          <Route path="/about" exact>
            <AboutPage />
          </Route>

          <Route path="/resume" exact>
            <ResumePage />
          </Route>

          <Route path="/portfolios" exact>
            <PortfoliosPage />
          </Route>

          <Route path="/blogs" exact>
            <BlogsPage />
          </Route>

          <Route path="/contact" exact>
            <ContactPage />
          </Route>


        </Switching>

      </MainContentStyled>

    </div>
  );
}

export default App;

const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;

  @media screen and (max-width: 1200px){
    margin-left: 0;
  }

  .lines{
    position: absolute;
    min-height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    opacity: 0.4;
    z-index: -1;

    .line-1, .line-2, .line-3, .line-4 {
      width: 1px;
      min-height: 100vh;
      background-color: var(--border-color)
    }
  }
`