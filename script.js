let data = [
    {
        id: 1,
        imageUrl: 'images/amsterdam.jpg',
        title: 'Amsterdam',
        url: 'https://google.com'
    },
    {
        id: 2,
        imageUrl: 'images/london.jpg',
        title: 'London',
        url: 'https://facebook.ge'
    },
    {
        id: 3,
        imageUrl: 'images/New-York.jpg',
        title: 'New-York',
        url: 'https://youtube.com'
    },
    {
        id: 4,
        imageUrl: 'images/paris.jpg',
        title: 'Paris',
        url: 'https://gmail.com'
    },
    {
        id: 5,
        imageUrl: 'images/rome.jpg',
        title: 'Rome',
        url: 'https://google.com'
    }
]

let arrowLeft = document.getElementById('arrow-left');
let arrowRight = document.getElementById('arrow-right');
let sliderContent = document.getElementById('slider-content');
let dotsList = document.getElementsByClassName('dot');

let sliderIndex = 0;

function createAtag(item) {
    let aTag = document.createElement('a');
    aTag.setAttribute('href', item.url);
    aTag.classList.add('slide');

    return aTag;
}

function createBackgroundImg(item) {
    let backgrImgDiv = document.createElement('div')
    backgrImgDiv.classList.add('background-img')
    backgrImgDiv.style.backgroundImage =  "url(" + item.imageUrl + ")";
    
    return backgrImgDiv;

}

function createH2Tag (item){
    let H2tag = document.createElement('h2');
    H2tag.append(item.title);
    H2tag.classList.add('slider-title');

    return H2tag;
}

function createDots(item) {
    let dots = document.createElement('div');
    dots.classList.add('dots');

    data.forEach( (element) => {
        let dot = document.createElement('div');
        dot.classList.add('dot');
        dot.setAttribute('data-id', element.id - 1);

        dot.onclick = function(event) {
            let id = event.target.getAttribute('data-id');
            sliderIndex = id;
            setSlide();
        }
        dots.appendChild(dot);
    });
    return dots;
}

function setSlide() {
    sliderContent.innerHTML = ' ';
    let tagA = createAtag(data[sliderIndex]);
    let backgrImg = createBackgroundImg(data[sliderIndex]);
    let tagH2 = createH2Tag(data[sliderIndex]);
    let sliderDots = createDots();
    
    tagA.appendChild(backgrImg);
    tagA.appendChild(tagH2);
    sliderContent.appendChild(tagA);
    sliderContent.appendChild(sliderDots);

    currentDotActive();
}

function currentDotActive() {
    dotsList[sliderIndex].classList.add('active');
}

function leftArrowClick() {
    if (sliderIndex <= 0) {
        sliderIndex = data.length - 1;
        setSlide();
        return;
    }
    sliderIndex--;
    setSlide();
}
function rightArrowClick() {
    if (sliderIndex >= data.length-1) {
        sliderIndex = 0;
        setSlide();
        return;
    }
    sliderIndex++;
    setSlide();
}
arrowLeft.addEventListener('click',leftArrowClick);
arrowRight.addEventListener('click',rightArrowClick);

setInterval( () => {
    rightArrowClick();
}, 3000);

setSlide();