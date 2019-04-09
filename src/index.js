import React from 'react';
import {render} from 'react-dom';
import HelloWorld from './component/hello'

const root = document.querySelector('#root');

render(
    <HelloWorld name1='Tom' name2='Jack'></HelloWorld>,root);