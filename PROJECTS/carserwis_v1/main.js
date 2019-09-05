// BANNER ---------------------------------------------------------------------

const bannerList = {
    img1: 'img/banner1.jpg',

    img2: 'img/banner2.jpg',

    img3: 'img/banner3.jpg',
}

const h1BannerList = {
    text1: 'Z sercem do motoryzacji...',
    text2: '',
    text3: '',
}

const h2BannerList = {
    text1: 'Zapraszamy do najlepszego warsztatu w Warszawie i okolicach!',
    text2: 'Szukasz pomocy z drobną usterką, a nie chcesz wydać dużo pieniędzy na naprawę?',
    text3: 'Specjalizujemy się w drobnych naprawach oraz serwisie klimatyzacji i robimy to w przestępnych cenach!',
}

const PBannerList = {
    text1: 'Pracujemy w godz. 8:00-19:00. Zadzwoń! tel. 888 555 333',
    text2: 'Zadzwoń, a nasz mechanik pomoże Ci i zrobi to z uśmiechem na twarzy! tel. 888 555 333',
    text3: '',
}


const leftClick = document.querySelector('.icon1');
const rightClick = document.querySelector('.icon2');
const bannerH1 = document.querySelector('.wrap h1');
const bannerH2 = document.querySelector('.wrap h2');
const bannerP = document.querySelector('.wrap p');

const banner = document.querySelector('.banner');

const time = 6000;
let index = 0;

const changeSlide = () =>{
    index++;
    if(index==0){
        banner.style.backgroundImage = `url(${bannerList.img1})`;
        bannerH1.textContent = h1BannerList.text1;
        bannerH2.textContent = h2BannerList.text1;
        bannerP.textContent = PBannerList.text1;

        bannerH1.style.top = '25%';
        bannerH1.style.lineHeight = '0';

        bannerH2.style.top = '55%';
        bannerH2.style.lineHeight = '0';

        bannerP.style.top = '75%';
        bannerP.style.lineHeight = '0';
    }
    else if(index==1){
        banner.style.backgroundImage = `url(${bannerList.img2})`;
        bannerH1.textContent = h1BannerList.text2;
        bannerH2.textContent = h2BannerList.text2;
        bannerP.textContent = PBannerList.text2;

        bannerH2.style.top = '20%';
        bannerH2.style.lineHeight = '10vh';

        bannerP.style.top = '50%';
        bannerP.style.lineHeight = '10vh';
    }
    else if(index==2){
        banner.style.backgroundImage = `url(${bannerList.img3})`;
        bannerH1.textContent = h1BannerList.text3;
        bannerH2.textContent = h2BannerList.text3;
        bannerP.textContent = PBannerList.text3;

        bannerH2.style.top = '30%';
        bannerH2.style.lineHeight = '10vh';

        index = -1;
    }
}

let intervalIndex = setInterval(changeSlide, time);

const changeSlideRight = () =>{
    index++;
    if(index == 0){
        banner.style.backgroundImage = `url(${bannerList.img1})`;
        bannerH1.textContent = h1BannerList.text1;
        bannerH2.textContent = h2BannerList.text1;
        bannerP.textContent = PBannerList.text1;

        bannerH1.style.top = '25%';
        bannerH1.style.lineHeight = '0';

        bannerH2.style.top = '55%';
        bannerH2.style.lineHeight = '0';

        bannerP.style.top = '75%';
        bannerP.style.lineHeight = '0';
    }
    else if(index == 1){
        banner.style.backgroundImage = `url(${bannerList.img2})`;
        bannerH1.textContent = h1BannerList.text2;
        bannerH2.textContent = h2BannerList.text2;
        bannerP.textContent = PBannerList.text2;

        bannerH2.style.top = '20%';
        bannerH2.style.lineHeight = '10vh';

        bannerP.style.top = '50%';
        bannerP.style.lineHeight = '10vh';

    }

    else if(index >= 2){
        banner.style.backgroundImage = `url(${bannerList.img3})`;
        bannerH1.textContent = h1BannerList.text3;
        bannerH2.textContent = h2BannerList.text3;
        bannerP.textContent = PBannerList.text3;

        bannerH2.style.top = '30%';
        bannerH2.style.lineHeight = '10vh';
        index = -1;
    }
    clearInterval(intervalIndex);
    intervalIndex = setInterval(changeSlide, time);
}

const changeSlideLeft = () =>{
    index--;
    if(index <= -1){
        banner.style.backgroundImage = `url(${bannerList.img3})`;
        bannerH1.textContent = h1BannerList.text3;
        bannerH2.textContent = h2BannerList.text3;
        bannerP.textContent = PBannerList.text3;

        bannerH2.style.top = '30%';
        bannerH2.style.lineHeight = '10vh';
        index = 2;
    }
    else if(index == 1){
        banner.style.backgroundImage = `url(${bannerList.img2})`;
        bannerH1.textContent = h1BannerList.text2;
        bannerH2.textContent = h2BannerList.text2;
        bannerP.textContent = PBannerList.text2;

        bannerH2.style.top = '20%';
        bannerH2.style.lineHeight = '10vh';

        bannerP.style.top = '50%';
        bannerP.style.lineHeight = '10vh';
    }
    else if(index == 0){
        banner.style.backgroundImage = `url(${bannerList.img1})`;
        bannerH1.textContent = h1BannerList.text1;
        bannerH2.textContent = h2BannerList.text1;
        bannerP.textContent = PBannerList.text1;

        bannerH1.style.top = '25%';
        bannerH1.style.lineHeight = '0';

        bannerH2.style.top = '55%';
        bannerH2.style.lineHeight = '0';

        bannerP.style.top = '75%';
        bannerP.style.lineHeight = '0';
    }
    clearInterval(intervalIndex);
    intervalIndex = setInterval(changeSlide, time);
}

rightClick.addEventListener("click", changeSlideRight);
leftClick.addEventListener("click", changeSlideLeft);

// formularz kontaktowy

