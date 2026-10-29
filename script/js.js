const body = document.body;
const mobBtn = document.querySelector('.mob_btn');
const header = document.querySelector('header');
const h_nav = document.querySelector('.h_nav');

function resetMenu() {
    body.classList.remove('mOpen');
    closeSubMenu();
}

// 화면 크기가 커졌을 때 모바일에서 적용된 것 초기화
window.addEventListener('resize', ()=>{
    if(window.innerWidth >= 1240){
        body.classList.remove('mOpen');
        resetMenu();
    }
})


// 스크롤
window.addEventListener('scroll', ()=>{
    header.classList.toggle('scrolling', window.scrollY > 100);
})

// header에 hover 
header.addEventListener('mouseover', ()=>{
    header.classList.add('scrolling');
})
header.addEventListener('mouseleave', ()=>{
    if(window.scrollY <= 100){
        header.classList.remove('scrolling');
    }
})


// PC 상태 네비게이션
h_nav.addEventListener('mouseover', ()=>{
    header.classList.add('on')
})
header.addEventListener('mouseleave', (e)=>{
    if(!header.contains(e.relatedTarget)){
        header.classList.remove('on')
    }
})
// relatedTarget : 마우스가 머물러 있냐를 확인


// mOpen - 모바일 네비게이션 오픈
mobBtn.addEventListener('click', ()=>{
    body.classList.toggle('mOpen');

    if(!body.classList.contains('mOpen')){
        closeSubMenu();
    }
})

// section3  s3_slide
const rows = document.querySelectorAll('#section3 .row');

rows.forEach(row => {
    const leftBtn = row.querySelector('#section3 .left');
    const rightBtn = row.querySelector('#section3 .right');
    const imgs = row.querySelectorAll('.row_inner img');
    
    // 오른쪽 버튼
    rightBtn.addEventListener('click', function(e){
        e.preventDefault();
        const activeImg = row.querySelector('.row_inner img.active');

        activeImg.classList.remove('active');        
        
        if( activeImg.nextElementSibling ){
            activeImg.nextElementSibling.classList.add('active');
        } else {
            imgs[0].classList.add('active');
        }
    })

    // 왼쪽 버튼
    leftBtn.addEventListener('click', function(e){
        e.preventDefault();
        const activeImg = row.querySelector('.row_inner img.active');

        activeImg.classList.remove('active');        
        
        if( activeImg.previousElementSibling ){
            activeImg.previousElementSibling.classList.add('active');
        } else {
            imgs[imgs.length - 1].classList.add('active');
        }
    })
});


// 모바일 슬라이드 메뉴
const subNav = document.querySelector('.subNav_wrap');
const depth1Btn = document.querySelectorAll('.depth1 > li > span');

depth1Btn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const parent = btn.parentElement;
        // 클릭한 depth1 > li의 .active 유무를 변수로 넣어줌
        const isOpen = parent.classList.contains('active');

        // 다른 depth1 메뉴 닫기
        subNav.querySelectorAll('.depth1 > li').forEach(li=>{
            li.classList.remove('active');
        })

        // 클릭한 메뉴만 토글
        if(!isOpen){
            parent.classList.add('active');
        }
    })
})

const depth2Btn = document.querySelectorAll('.depth2 > li > a');

depth2Btn.forEach(btn => {
    btn.addEventListener('click', ()=>{
        const parent = btn.parentElement;
        const depth3 = parent.classList.contains('.depth3');

        console.log('btn :>> ', btn);

        if(!depth3){
            parent.classList.toggle('on')
        }
    })
})

// 모바일 슬라이드가 닫히면 열려있는 하위 메뉴가 닫힘
function closeSubMenu(){
    subNav.querySelectorAll('.depth1 > li.active').forEach(li=>{
        console.log('작동');
        li.classList.remove('active');
    })
    subNav.querySelectorAll('.depth2 > li.on').forEach(li=>{
        li.classList.remove('on');
    })
}


// section3 play/stop 버튼
const stopPlayBtn = document.querySelector('.stop_play');
const rowInners = document.querySelectorAll('.row_inner');

stopPlayBtn.addEventListener('click', ()=>{
    const isPaused = stopPlayBtn.classList.toggle('paused');

    rowInners.forEach(row =>{
        row.style.animationPlayState = isPaused ? "paused" : "running";
    })

    stopPlayBtn.setAttribute('aria-label', isPaused ? "애니메이션 재생" : "애니메이션 정지");
})

const footBtn = document.querySelector('.family_btn');
const footWrap = document.querySelector('.family_wrap');

footBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    footWrap.classList.toggle('active');
})