import React from 'react';
// import PropTypes from 'prop-types';
import { useStaticQuery, graphql, Link } from 'gatsby';

const query = graphql`
  {
    projects: allProjectsYaml {
      nodes {
        name
        description
        nameSlug: gatsbyPath(filePath: "/project/{projectsYaml.name}")
      }
    }
  }
`;

export default function Resume() {
  const data = useStaticQuery(query);
  return (
    <div>
      <div>
        <h1><Link to="/about">Jeff Birori</Link></h1>
        {data && data.projects.nodes.map((project) => (
          <p key={project.name}>
            <Link to={project.nameSlug}>{project.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
}
