import * as React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

function Project({ data }) {
  const proj = data.projectsYaml;
  return (
    <div>{proj.name}</div>
  );
}

Project.propTypes = {
  data: PropTypes.shape().isRequired,
};

export default Project;

export const query = graphql`
query($id: String!) {
  projectsYaml(id: { eq: $id }) {
    name
    description
    projects {
      name
      description
    }
    meta {
      start
      end
    }
  }
}
`;
