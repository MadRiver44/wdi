'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Director', [
      { name: 'Alejandro G. Iñárritu' },
      { name: 'Damien Chazelle' },
      { name: 'Dan Gilroy' },
      { name: 'James Gunn' },
      { name: 'George Miller' },
      { name: 'Alex Garland' },
      { name: 'Denis Villeneuve' },
      { name: 'Yorgos Lanthimos' },
      { name: 'Stanley Kubrick' },
      { name: 'Neill Blomkamp' },
      { name: 'Francis Ford Coppola' },
      { name: 'Woody Allen' },
      { name: 'Paul Thomas Anderson' },
      { name: 'Michael Powell' },
      { name: 'Martin Scorsese' },
      { name: 'Quentin Tarantino' },
      { name: 'Joel Coen' },
      { name: 'Roman Polanski' },
      { name: 'Sam Mendes' }
    ], {});
  }
};
