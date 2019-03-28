import _ from 'lodash';

const testObject = {
  foo: 'bar',
  test: 'here',
  numeric: 10,
  string2: 'Hello World',
  bar: 'foo',
  notToBeSeparated: 'Lorem ipsum dollar'
};

// a very long comment jasflkjh asddlfkjhsadf ljjasdhflkjjhsaddflkjhasd flkajsddhflkjhasdflkjhasddf lkjhsadf lkjhasdf lkjhasdf kjjh

const constant = 'test';
let variable = 'test';

const myFunction = test => {
  variable = 'not here';
  return _.concat(test, constant, variable);
};

export default myFunction;
