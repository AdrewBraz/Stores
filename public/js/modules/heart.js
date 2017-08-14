import axios from 'axios';

export default function addHeart(e){
  e.preventDefault();
  axios
    .post(this.action)
    .then( res => {
        console.log(this.heart)
        const isHearted = this.heart.classList.toggle('heart__button--hearted');
        const count = document.querySelector('.heart-count');
        count.textContent = res.data.hearts.length;
        if(isHearted){
            this.heart.classList.add('heart__button--float')
            setTimeout( () => this.heart.classList.remove('heart__button--float'), 2400);
        }
    })
    .catch(console.error)
}