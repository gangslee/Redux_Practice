import {createStore} from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

const countModifier = () => {};

const countStore = createStore(countModifier);

add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);
