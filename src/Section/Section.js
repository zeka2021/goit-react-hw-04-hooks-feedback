// import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Container from '../Container';

function Section({ title, children}) {
  
    return (
      <section>
        <Container>
          <h2>{title}</h2>
          {children}
        </Container>
      </section>
    );
  }


Section.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Section;
