import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ResumeItem from './ProjectItem';
import PersonalItem from './PersonalItem';

const query = graphql`
  {
    projects: allProjectsYaml {
      nodes {
        name
        summary
        nameSlug: gatsbyPath(filePath: "/project/{projectsYaml.name}")
        meta {
          type
          start
          end
        }
      }
    }
    about: allAboutYaml {
      nodes {
        name
        contact {
          label
          title
          url
        }
        education {
          degree
          school
        }
        skills {
          type
          items
        }
      }
    }
  }
`;

export default function Resume({ path }) {
  const data = useStaticQuery(query);
  const personal = data.projects.nodes.filter((e) => e.meta.type === 'personal');
  const professional = data.projects.nodes.filter((e) => e.meta.type === 'professional');
  const {
    contact,
    education,
    name,
    skills,
  } = data.about.nodes[0];

  return (
    <Resume.Page>
      <Link to="/about">
        <Resume.MainHeader active={path === '/about'}>{name}</Resume.MainHeader>
      </Link>
      <Resume.Divider />
      <Resume.Grid>
        <div>
          <Resume.SectionHeader>Projects</Resume.SectionHeader>
          {personal && personal.map((project) => (
            <ResumeItem
              active={path === project.nameSlug}
              summary={project.summary}
              endDate={project.meta.end}
              key={project.name}
              title={project.name}
              startDate={project.meta.start}
              url={project.nameSlug}
            />
          ))}
          <Resume.SectionHeader>Experience</Resume.SectionHeader>
          {professional && professional.map((project) => (
            <ResumeItem
              active={path === project.nameSlug}
              endDate={project.meta.end}
              key={project.name}
              title={project.name}
              startDate={project.meta.start}
              url={project.nameSlug}
            />
          ))}
        </div>
        <div>
          <Resume.SectionHeader>Personal</Resume.SectionHeader>
          {contact.map((item) => (
            <PersonalItem
              key={item.title}
              title={item.title}
              label={item.label}
              url={item.url}
            />
          ))}
          <Resume.SectionHeader>Education</Resume.SectionHeader>
          {education.map((item) => (
            <PersonalItem
              key={item.school}
              title={item.school}
              label={item.degree}
            />
          ))}
          <Resume.SectionHeader>Skills</Resume.SectionHeader>
          {skills.map((item) => (
            <PersonalItem
              key={item.type}
              title={item.type}
              label={item.items}
            />
          ))}
        </div>
      </Resume.Grid>
    </Resume.Page>
  );
}

Resume.Page = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.25rem 2rem;
  box-sizing: border-box;
  overflow: scroll;

  a {
    text-decoration: none;
  }
`;

Resume.Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 9rem;
  grid-gap: 1rem;
`;

Resume.MainHeader = styled.h1`
  font-family: rubik;
  color: ${(p) => (p.active ? '#F7644A' : '#000')};
  font-size: 2.25rem;
  font-weight: 700;
  line-height: 2.75rem;
  margin: 0;
  margin-bottom: 1rem;
`;

Resume.SectionHeader = styled.h2`
  color: #000;
  font-family: rubik;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 2rem;
  margin: 0;
  margin-top: 1rem;
  margin-bottom: 0.75rem;
`;

Resume.Divider = styled.div`
  width: 100%;
  height: 0.125rem;
  background: #000;
`;

Resume.propTypes = {
  path: PropTypes.string.isRequired,
};
