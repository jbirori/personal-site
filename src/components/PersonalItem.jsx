import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function PersonalItem({
  label,
  title,
  url,
}) {
  const personalItemText = (
    <>
      <PersonalItem.Title>{title}</PersonalItem.Title>
      <PersonalItem.Description>{label}</PersonalItem.Description>
    </>
  );

  return (
    <PersonalItem.Container>
      {url
        ? <a href={url}>{personalItemText}</a>
        : <div>{personalItemText}</div>}
    </PersonalItem.Container>
  );
}

PersonalItem.Container = styled.div`
  & + & {
    margin-top: 0.5rem;
  }

  a, p {
    color: #000;
    text-decoration: none;
  }
`;

const sharedTextStyles = `
  color: inherit;
  font-size: 0.875rem;
  line-height: 1rem;
  margin: 0;
  transition: color 0.3s;
`;

PersonalItem.Title = styled.p`
  ${sharedTextStyles}
  font-family: Rubik;
  font-weight: 600;
`;

PersonalItem.Description = styled.p`
  ${sharedTextStyles}
  font-weight: 300;
  margin-top: 0.25rem;
`;

PersonalItem.propTypes = {
  label: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
};

PersonalItem.defaultProps = {
  label: '',
  title: '',
  url: '',
};
