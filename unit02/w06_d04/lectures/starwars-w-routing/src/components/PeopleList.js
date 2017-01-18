import React, { PropTypes } from 'react';
import { Link } from 'react-router';

const PeopleList = ({ people }) => (
  <div className="people-list">
    {people.map((person, index) => (
      <p key={index}>
        <Link to={`/people/${index + 1}`}>{person.name}</Link>
      </p>
    ))}
  </div>
);

PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
};

export default PeopleList;
