const generateUniqueId = require('../../src/utils/generateUniqueId');

describe('Generate Unique ID', () => {
  it('shold generate an unique Id', () => {
    const id = generateUniqueId();

    expect(id).toHaveLength(8);
  });
});