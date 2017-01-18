import React, { PropTypes } from 'react';
import { Link, Redirect } from 'react-router';

// In class we encountered a bug wherein navigating to
// 'people/anythingOtherThanAnIndexInOurArray' caused the
// loading screen to appear forever. The following two comments
// explain how I fixed it. This isn't pretty and should probably
// be refactored, but this is the logic.
const Person = ({ peopleLength, person, id }) => {
  // This first conditional checks to see if person is
  // undefined. If so, our api request might not have returned
  // yet. If the id is not a number or if the number is outside
  // of our array (e.g. -1 or 1000) then it might still be
  // undefined even if the api request returned. That second
  // conjunct makes sure that if the person is undefined,
  // it's because the api request hasn't loaded yet.
  // Checking both of these things gurantees that we want
  // to show the loading page.
  if ((person === undefined) && (peopleLength === 0)) {
    return (
      <div className="person">
        Loading...
      </div>
    );
  }
  // This second conditional makes sure that our id is somewhere
  // between 1 and the length of our array. The last conjunct
  // makes sure that the id is not 1.5, or 2.4, etc. If someone
  // navigates to 1.5, we want to send them to the 404 page.
  // So far this seems to fix our bug, BUT, try to break it :D
  // We had to use parseFloat because the id, even though it looks
  // like a number, is actually a string.
  // The second argument to parseInt is the base. It works without
  // that argument, but we get a warning.
  if (((parseFloat(id) < 1) || (parseFloat(id) > peopleLength)) || parseFloat(id) !== parseInt(id, 10)) {
    return (
      <Redirect to={"/404"} />
    )
  }
  return (
    <div className="person">
      <h3>{person.name}</h3>
      <p>Birth year: {person.birth_year}</p>
      <p>Gender: {person.gender}</p>
      <p>Height: {person.height}</p>
      <p>Mass: {person.mass}</p>
      <p>Eye color: {person.eye_color}</p>
      <p>Hair color: {person.hair_color}</p>
      <p>Skin color: {person.skin_color}</p>
      <p>
        <Link to="/people">{'<== Back to people list'}</Link>
      </p>
    </div>
  );
};

Person.propTypes = {
  peopleLength: PropTypes.number.isRequired,
  person: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
};

export default Person;
