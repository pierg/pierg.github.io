import React from 'react';
import PropTypes from 'prop-types';
import { Helmet, HelmetProvider } from 'react-helmet-async';

// import Analytics from '../components/Template/Analytics';
import { GTMProvider } from '@elgorditosalsero/react-gtm-hook';
import Navigation from '../components/Template/Navigation';
import SideBar from '../components/Template/SideBar';
import ScrollToTop from '../components/Template/ScrollToTop';

const Main = (props) => {
  const gtmParams = { id: 'G-GFM7XET0JB' };

  return (
    <GTMProvider state={gtmParams}>
      <HelmetProvider>
        {/* <Analytics /> */}
        <ScrollToTop />
        <Helmet
          titleTemplate="%s | Piergiuseppe Mallozzi"
          defaultTitle="Piergiuseppe Mallozzi"
          defer={false}
        >
          {props.title && <title>{props.title}</title>}
          <meta name="description" content={props.description} />
        </Helmet>
        <div id="wrapper">
          <Navigation />
          <div id="main">{props.children}</div>
          {props.fullPage ? null : <SideBar />}
        </div>
      </HelmetProvider>
    </GTMProvider>
  );
};

Main.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  fullPage: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
};

Main.defaultProps = {
  children: null,
  fullPage: false,
  title: null,
  description: "Piergiuseppe Mallozzi's personal website.",
};

export default Main;
