import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import styled from 'styled-components';

export default function ProjectItem({
  active,
  category,
  summary,
  endDate,
  startDate,
  title,
  url,
}) {
  return (
    <ProjectItem.Container active={active}>
      <Link to={url}>
        <ProjectItem.Title>
          {title}
          {category && ` | ${category}`}
        </ProjectItem.Title>
        <ProjectItem.DateRange>
          {startDate}
          &nbsp;-&nbsp;
          {endDate}
        </ProjectItem.DateRange>
        {summary && <ProjectItem.Summary>{summary}</ProjectItem.Summary>}
      </Link>
    </ProjectItem.Container>
  );
}

ProjectItem.Container = styled.div`
  & + & {
    margin-top: 0.5rem;
  }

  a, p {
    color: ${(p) => (p.active ? '#F7644A' : '#000')};
    text-decoration: none;
  }

  :hover {
    a, p {
      color: #F7644A;
    }
  }
`;

const sharedTextStyles = `
  color: inherit;
  font-size: 0.875rem;
  line-height: 1rem;
  margin: 0;
  transition: color 0.3s;
`;

ProjectItem.Title = styled.p`
  ${sharedTextStyles}
  font-family: Rubik;
  font-weight: 600;
`;

ProjectItem.DateRange = styled.p`
  ${sharedTextStyles}
  font-style: italic;
  font-weight: 300;
  margin-top: 0.25rem;
`;

ProjectItem.Summary = styled.p`
  ${sharedTextStyles}
  font-weight: 300;
  margin-top: 0.25rem;
`;

ProjectItem.propTypes = {
  active: PropTypes.bool,
  category: PropTypes.string,
  summary: PropTypes.string,
  endDate: PropTypes.string,
  startDate: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

ProjectItem.defaultProps = {
  active: false,
  category: '',
  summary: '',
  endDate: '',
  startDate: '',
  title: '',
  url: '',
};
