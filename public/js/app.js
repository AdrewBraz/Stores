require('./svg')
import '../style/style.styl';
import autoComplete from'./modules/autocomplete';
import type from './modules/type'

const input = document.getElementById('address');
const lng = document.getElementById('lng');
const lat = document.getElementById('lat');
const search = document.querySelector('.search');


autoComplete(input, lat, lng);

type(search)