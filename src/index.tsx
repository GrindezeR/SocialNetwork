import React from 'react';
import './index.css';
import {rerenderEntireTree} from './Render';
import state from './Redux/State';

rerenderEntireTree(state);
