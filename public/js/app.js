import '../style/style.styl';
import symbol from './svg'
import autoComplete from'./modules/autocomplete' 
import { $, $$ } from './modules/bling';

const input = document.getElementById('address');
const lng = document.getElementById('lng')
const lat = document.getElementById('lat')

autoComplete(input, lat, lng);