import React from 'react';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Resume from '../components/Resume';

export default function Layout({ children }) {
  return (
    <Page>
      <GlobalStyle />
      <LeftPane>
        <Resume />
      </LeftPane>
      <RightPane>
        {children}
      </RightPane>
    </Page>
  );
}

const GlobalStyle = createGlobalStyle`
  html, body, #___gatsby, #gatsby-focus-wrapper {
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
  max-width: 34.5rem;
  max-height: 44rem;
  width: 100%;
  height: 100%;
  background: #fff;
  box-shadow:
    0px 24px 48px rgba(0, 0, 0, 0.2),
    0px 0px 1px rgba(0, 0, 0, 0.12);
`;

const LeftPane = styled.div`
  ${sharedPaneStyles}
`;

const RightPane = styled.div`
  ${sharedPaneStyles}
  margin-left: 4rem;
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
