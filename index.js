import A from './first.js';
import { B, C, D } from './second.js';
import F, { E } from './third.js';

document.body.innerHTML += `Values imported: ${A} ${B} ${C} ${D} ${F} ${E}`;
