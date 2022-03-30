'use strict';

const makeFilterFn = (params) => ({ name, status, origin }) => {

  if (params.name && !RegExp(params.name, 'gi').test(name)) return false;

  if (params.origin && !RegExp(params.origin, 'gi').test(origin)) return false;

  if (params.status && !RegExp(params.status, 'gi').test(status)) return false;

  return true;
};

class StrangerThingsRepository {
  constructor(dataset) {
    this.dataset = dataset;
  }

  search(params) {
    const { page = 1, size = 20 } = params;

    const offset = (page - 1) * size;

    return this.dataset.filter(makeFilterFn(params)).splice(offset, size);
  }
}

module.exports = StrangerThingsRepository;
