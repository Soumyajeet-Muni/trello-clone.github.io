import { randomId } from './utils';

const getCard = content => ({
  id: randomId(),
  content
});
export default [
  { id: randomId(),
    name: 'To do',
    cards: [
      getCard('Setup Redux Toolkit'),
      getCard('Implement Landing Page')
    ] },
  { id: randomId(),
    name: 'Doing',
    cards: [
      getCard('Setup Material UI')
    ] },
  { id: randomId(),
    name: 'Done',
    cards: [
      getCard('Initialize React Project'),
      getCard('Setup Eslint and Prettier'),
      getCard('New task Updated')
    ] },
];
