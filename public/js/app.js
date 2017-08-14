require('./svg')
import '../style/style.styl';
import autoComplete from'./modules/autocomplete';
import type from './modules/type'
import makeMap from './modules/map';
import addHeart from './modules/heart'

const input = document.getElementById('address');
const lng = document.getElementById('lng');
const lat = document.getElementById('lat');
const search = document.querySelector('.search');
const map = document.getElementById('map-container');
const hearts = document.querySelectorAll('form.heart')
const heartList = Array.prototype.slice.call(hearts);

autoComplete(input, lat, lng);

type(search)

makeMap(map)

heartList.map( heart => {
    heart.addEventListener('click', addHeart)
})



