import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';
import Helmet from 'react-helmet';
import profileImage from '../../static/jeffrey birori.png';
import instagram from '../../static/instagram.png';

const query = graphql`
  {
    about: allAboutYaml {
      nodes {
        name
        bio
        contact {
          title
          url
        }
      }
    }
  }
`;

export default function About() {
  const data = useStaticQuery(query);
  const {
    name,
    bio,
    contact,
  } = data.about.nodes[0];

  return (
    <About.Page>
      <Helmet>
        <title key="Tab Title">About Jeff Birori</title>
        <meta key="OG Title" property="og:title" content="About Jeff Birori" />
        <meta key="Twitter Title" name="twitter:title" content="About Jeff Birori" />
      </Helmet>
      <About.Image src={profileImage} />
      <About.Header>{name}</About.Header>
      <About.Bio dangerouslySetInnerHTML={{ __html: bio }} />
      <About.ContactContainer>
        {contact.map((contactItem) => (
          <a href={contactItem.url}>
            <About.ContactIcon src={instagram} alt={contactItem.title} />
          </a>
        ))}
      </About.ContactContainer>
    </About.Page>
  );
}

About.Page = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

About.Image = styled.img`
  max-width: 50%;
`;

About.Header = styled.h1`
  font-family: Rubik;
  margin: 1.5rem 0;
`;

About.Bio = styled.p`
  flex: 1;
  margin: 0;
  text-align: center;
`;

About.ContactContainer = styled.div`
  a + a {
    margin-left: 2.5rem;
  }

`;

About.ContactIcon = styled.img`

`;
