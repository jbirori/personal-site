import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export default function IconLink({
  //   label,
  iconSrc,
  url,
}) {
  return (
    <IconLink.Container href={url}>
      <IconLink.Icon src={iconSrc} />
    </IconLink.Container>
  );
}

IconLink.Container = styled.a`
  text-decoration: none;
`;

IconLink.Icon = styled.img`

`;

IconLink.propTypes = {
  //   label: PropTypes.string,
  iconSrc: PropTypes.string,
  url: PropTypes.string,
};

IconLink.defaultProps = {
  //   label: '',
  iconSrc: '',
  url: '',
};
