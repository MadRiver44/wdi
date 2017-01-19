CREATE TABLE movies (
  id serial PRIMARY KEY,
  title varchar(255) NOT NULL,
  synopsis text,
  release_date timestamp
);

INSERT INTO movies (title, synopsis) VALUES
  (
    'Birdman or (The Unexpected Virtue of Ignorance)',
    'Illustrated upon the progress of his latest Broadway play, a former popular actor''s struggle to cope with his current life as a wasted actor is shown.'
  ),
  (
    'Whiplash',
    'A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student''s potential.'
  ),
  (
    'Nightcrawler',
    'When Louis Bloom, a driven man desperate for work, muscles into the world of L.A. crime journalism, he blurs the line between observer and participant to become the star of his own story. Aiding him in his effort is Nina, a TV-news veteran.'
  ),
  (
    'Guardians of the Galaxy',
    'A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.'
  ),
  (
    'Mad Max: Fury Road',
    'A woman rebels against a tyrannical ruler in postapocalyptic Australia in search for her home-land with the help of a group of female prisoners, a psychotic worshipper, and a drifter named Max.'
  ),
  (
    'Ex Machina',
    'A young programmer is selected to participate in a ground-breaking experiment in synthetic intelligence by evaluating the human qualities of a breath-taking humanoid A.I.'
  ),
  (
    'Arrival',
    'When 12 mysterious spacecraft appear around the world, linguistics professor Louise Banks is tasked with interpreting the language of the apparent alien visitors.'
  ),
  (
    'The Lobster',
    'In a dystopian near future, single people, according to the laws of The City, are taken to The Hotel, where they are obliged to find a romantic partner in forty-five days or are transformed into beasts and sent off into The Woods.'
  ),
  (
    '2001: A Space Odyssey ',
    'Humanity finds a mysterious, obviously artificial object buried beneath the Lunar surface and, with the intelligent computer H.A.L. 9000, sets off on a quest.'
  ),
  (
    'District 9',
    'An extraterrestrial race forced to live in slum-like conditions on Earth suddenly finds a kindred spirit in a government agent who is exposed to their biotechnology.'
  ),
  (
    'The Godfather',
    'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.'),
  (
    'Annie Hall',
    'Neurotic New York comedian Alvy Singer falls in love with the ditzy Annie Hall.'
  ),
  (
    'Boogie Nights',
    'The story of a young man''s adventures in the Californian pornography industry of the late 1970s and early 1980s.'
  ),
  (
    'The Red Shoes',
    'A young ballet dancer is torn between the man she loves and her pursuit to become a prima ballerina.'
  ),
  (
    'Taxi Driver',
    'A mentally unstable Vietnam War veteran works as a night-time taxi driver in New York City where the perceived decadence and sleaze feeds his urge for violent action, attempting to save a preadolescent prostitute in the process.'
  ),
  (
    'The Shining',
    'A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.'
  ),
  (
    'Pulp Fiction',
    'The lives of two mob hit men, a boxer, a gangster''s wife, and a pair of diner bandits intertwine in four tales of violence and redemption.'
  ),
  (
    'Fargo',
    'Jerry Lundegaard''s inept crime falls apart due to his and his henchmen''s bungling and the persistent police work of the quite pregnant Marge Gunderson.'
  ),
  (
    'Rosemary''s Baby',
    'A young couple move into an apartment, only to be surrounded by peculiar neighbors and occurrences. When the wife becomes mysteriously pregnant, paranoia over the safety of her unborn child begins to control her life.'
  ),
  (
    'There Will Be Blood',
    'A story of family, religion, hatred, oil and madness, focusing on a turn-of-the-century prospector in the early days of the business.'
  ),
  (
    'American Beauty',
    'A sexually frustrated suburban father has a mid-life crisis after becoming infatuated with his daughter''s best friend.'
  );
