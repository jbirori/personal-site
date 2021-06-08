import * as React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Helmet from 'react-helmet';
import projImage from '../../static/proj_background.png';

export const query = graphql`
  query($title: String) {
    markdownRemark(frontmatter: { title: { eq: $title } }) {
      frontmatter {
        title
        description
        subProjects {
          title
          description
          websiteUrl
          tools
        }
      }
    }
  }
`;

export default function Project({ data }) {
  const proj = data.markdownRemark.frontmatter;
  const { subProjects } = proj;
  return (
    <Project.Page>
      <Helmet>
        <title key="Tab Title">{proj.title}</title>
        <meta key="OG Title" property="og:title" content={proj.title} />
        <meta key="Twitter Title" name="twitter:title" content={proj.title} />
      </Helmet>
      <Project.ImageContainer><Project.Image src={projImage} /></Project.ImageContainer>
      <Project.ContentContainer>
        <Project.ContentTitle>{proj.title}</Project.ContentTitle>
        <Project.Description>{proj.description}</Project.Description>
        {subProjects && subProjects.map((project) => (
          <Project.SubProjectContainer key={project.title}>
            <Project.SubProjectTitle>
              {project.title}
              {project.websiteUrl && ' | X'}
            </Project.SubProjectTitle>
            <Project.Description>{project.description}</Project.Description>
            {project.tools && (
              <Project.Description>
                Tools:&nbsp;
                {project.tools}
              </Project.Description>
            )}
          </Project.SubProjectContainer>
        ))}
      </Project.ContentContainer>
    </Project.Page>
  );
}

Project.Page = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

Project.ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-height: 19rem;
  overflow: hidden;
`;

Project.Image = styled.img`
  width: 100%;

`;

Project.ContentContainer = styled.div`
  flex: 1;
  padding: 1.25rem 2rem;
  overflow: scroll;
`;

Project.ContentTitle = styled.h1`
  font-family: rubik;
  color: #000;
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.75rem;
  margin: 0;
  margin-bottom: 0.75rem;
`;

Project.Description = styled.p`
  color: #000;
  font-size: 0.875rem;
  margin: 0;

  & + & {
    margin-top: 0.25rem;
  }
`;

Project.SubProjectContainer = styled.div`
  margin-top: 1rem;
  & + & {
    margin-top: 0.5rem;
  }
`;

Project.SubProjectTitle = styled.h2`
  color: #000;
  font-family: rubik;  
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
  margin-bottom: 0.5rem;
`;

Project.propTypes = {
  data: PropTypes.shape().isRequired,
};
