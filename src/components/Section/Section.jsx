import PropTypes from 'prop-types';
import React from 'react';
import css from './Section.module.css';

const Section = ({ title, children }) => {
  return (
    <div className={css.container}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string,
};
