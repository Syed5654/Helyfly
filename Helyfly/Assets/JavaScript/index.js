document.getElementById('thumbnail').addEventListener('click', function() {
    var videoWrapper = document.getElementById('video-wrapper');
    videoWrapper.innerHTML = '<iframe width="500" height="333" src="https://www.youtube.com/embed/0AeeZoXFGj8?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
});
  

let showMoreBtn = document.getElementById('show-more');
let hideBtn = document.getElementById('hide-all');
let galleryRows = document.getElementsByClassName('gallery-row');

showMoreBtn.addEventListener('click', function() {
  for (let i = 0; i < galleryRows.length; i++) {
    galleryRows[i].style.display = 'flex';
  }
  showMoreBtn.style.display = 'none';
  hideBtn.style.display = 'flex';
});

hideBtn.addEventListener('click', function() {
  for (let i = 2; i < galleryRows.length; i++) {
    galleryRows[i].style.display = 'none';
  }
  showMoreBtn.style.display = 'flex';
  hideBtn.style.display = 'none';
});


let readMoreBtn = document.getElementById('read-more');
let hideText = document.getElementById('hide-text');
let text = document.getElementsByClassName('hidden-text');
readMoreBtn.addEventListener('click', function() {
    for (let i = 0; i < text.length; i++) {
      text[i].style.display = 'block';
    }
    readMoreBtn.style.display = 'none';
    hideText.style.display = 'flex';
  });
  
  hideText.addEventListener('click', function() {
    for (let i = 0; i < text.length; i++) {
      text[i].style.display = 'none';
    }
    readMoreBtn.style.display = 'flex';
    hideText.style.display = 'none';
});


let readMoreBtn2 = document.getElementById('read-more-btn-2');
let hideText2 = document.getElementById('hide-text-btn-2');
let text2 = document.getElementsByClassName('hidden-text-2');
readMoreBtn2.addEventListener('click', function() {
    for (let i = 0; i < text2.length; i++) {
      text2[i].style.display = 'block';
    }
    readMoreBtn2.style.display = 'none';
    hideText2.style.display = 'flex';
  });
  
  hideText2.addEventListener('click', function() {
    for (let i = 0; i < text2.length; i++) {
      text2[i].style.display = 'none';
    }
    readMoreBtn2.style.display = 'flex';
    hideText2.style.display = 'none';
});


const btnBook = document.querySelectorAll('.book-now');
const formArea = document.getElementById('form-area');
const closeIcon = document.getElementById('close-icon');

btnBook.forEach(btn => {
  btn.addEventListener('click', () => {
    formArea.style.display = 'block';
    let blur = document.getElementById(`whole-content`)
  blur.classList.add(`active`)
  });
});

closeIcon.addEventListener('click', () => {
  formArea.style.display = 'none';
  let blur = document.getElementById(`whole-content`)
  blur.classList.remove(`active`)
});



let reviewBtn = document.getElementById('more-reviews');
let hideReview = document.getElementById('hide-review');
let review = document.getElementsByClassName('hidden-review');
reviewBtn.addEventListener('click', function() {
    for (let i = 0; i < review.length; i++) {
      review[i].style.display = 'block';
    }
    reviewBtn.style.display = 'none';
    hideReview.style.display = 'flex';
  });
  
  hideReview.addEventListener('click', function() {
    for (let i = 0; i < review.length; i++) {
      review[i].style.display = 'none';
    }
    reviewBtn.style.display = 'flex';
    hideReview.style.display = 'none';
});
