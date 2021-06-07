import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Resume from '../components/Resume';
import SEO from '../components/seo';

export default function Layout({ children, location }) {
  return (
    <Page>
      <SEO path={location.pathname} />
      <GlobalStyle />
      <LeftPane>
        <Resume path={location.pathname} />
      </LeftPane>
      <RightPane>
        {children}
      </RightPane>
    </Page>
  );
}

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
    font-family: Poppins;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
`;

const Page = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: linear-gradient(111.02deg, #FFD431 2.53%, #B7EF5A 49.42%, #44A3BB 96.3%);
`;

const sharedPaneStyles = `
  background: #fff;
  border-radius: 0.5rem;
  box-shadow:
    0px 24px 48px rgba(0, 0, 0, 0.2),
    0px 0px 1px rgba(0, 0, 0, 0.12);
  max-width: 34.5rem;
  max-height: 44.25rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const LeftPane = styled.div`
  ${sharedPaneStyles}
`;

const RightPane = styled.div`
  ${sharedPaneStyles}
  margin-left: 3rem;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.shape().isRequired,
};
