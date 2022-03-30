'use strict';

const flipout = require('flipout');

class StrangerThingsService {
  constructor(repository) {
    this.repository = repository;
  }

  search({ ...params }, upsideDownMode) {

    const characters = this.repository.search(params);

    if (upsideDownMode) {
      return characters.map(({ name, origin, status }) => ({
        name: flipout(name),
        origin: flipout(origin),
        status: flipout(status),
      }));
    }

    return characters;
  }
}

module.exports = StrangerThingsService;
