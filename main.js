const indicator = document.querySelectorAll('.indicator button');
const lightbox = document.querySelector('.lightbox');
const block = document.querySelector('.block');

const lightbox_open = (num) => {
  console.log('===>', num);
  lightbox.classList.add('active');
  block.classList.add('active');
  change_img(num);
  indicator[num-1].focus();
}

const lightbox_close = () => {
  lightbox.classList.remove('active');
  block.classList.remove('active');
}

const change_img = (val) => {
  const imgs = document.querySelectorAll('figure > img');

  for( let i=0; i < imgs.length; i++ ) {
    imgs[i].removeAttribute('class');
  }  
  imgs[val-1].setAttribute('class', 'active');
}



