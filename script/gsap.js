s0();
s1();
s2();
s3();
s4();
s5();
s6();
s7();
s8();

function s0(){
    let tl = gsap.timeline();

    tl.fromTo("#section0 .tit_wrap > *",
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            stagger: 0.3,
        }
    );

    tl.fromTo("#section0 .scroll",
        {
            opacity: 0,
            y: -50
        },
        {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'elastic.out(1,0.3)',
        }
    )
}

function s1(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: '#section1',
            start: 'top 70%',
            end: 'bottom 20%',
            toggleActions: "play reverse play reverse",
            /*
                toggleAction - 스크롤 방향과 요소 위치에 따라 애니메이션 동작 제어
                - onEnter, onLeave, onEnterBack, onLeaveBack
                - "아래로 스크롤하면 진입 / 화면을 벗어날 때 / 위로 스크롤해서 다시 화면에 들어올 때 / 위로 스크롤해서 다시 화면을 벗어날 때"
                - ""
            */
        }
    });
    
    tl.to('#section1 .tit', {
        opacity: 1,
        y: 0
    });

    tl.to('.s1_list > *',{
        opacity: 1,
        y: 0,
        stagger: 0.3
    })
    tl.to('#section1 .sub_txt_wrap',
    {
        opacity: 1,
        y: 0
    })
}

function s2(){
    let tl = gsap.timeline({
        scrollTrigger:{
            trigger: '#section2',
            start: 'top 70%',
            toggleActions: "play reverse play reverse",
        }
    });
    
    tl.fromTo('#section2 .tit_wrap > *',
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            stagger: 0.3,
        }
    );

    tl.fromTo('#section2 .s2_list > li > article',{
        opacity: 0,
        y: -50,
        scale: 0,
    },
    {
        opacity: 1,
        y: 0,
        duration: 1,
        scale: 1,
        ease: 'elastic.out(1,0.9)',
        stagger: 0.3,
    });
}

function s3(){
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section3',
            start: 'top 70%',
            // scrub: true
        }
    });

    tl.fromTo('#section3 .tit_wrap > *',
        {
            opacity: 0,
            y: -30
        },
        {
            opacity: 1,
            y: 0,
        }
    );

    tl.fromTo('#section3 .s3_slide', {
        opacity: 0,
        y: -30,
    },
    {
        opacity: 1,
        y: 0,
    });
    
    tl.fromTo('#section3 .s3_con_box', {
        opacity: 0,
        y: -30,
    },
    {
        opacity: 1,
        y: 0,
    })
}

function s4(){
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section4',
            start: 'top 70%',
            // scrub: true
        }
    });

    tl.fromTo('#section4 .tit_wrap > *',
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            stagger: 0.3
        }
    );

    tl.fromTo('#section4 .s4_img_wrap > *', {
        opacity: 0,
        y: 30,
    },
    {
        opacity: 1,
        y: 0,
        stagger: 0.3
    });
}

function s5(){
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section5',
            start: 'top 70%',
            // scrub: true
        }
    });

    tl.fromTo('#section5 .tit_wrap > *',
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            stagger: 0.3
        }
    );

    tl.fromTo('#section5 .s5_img_wrap > *', {
        opacity: 0,
        y: 30,
    },
    {
        opacity: 1,
        y: 0,
        stagger: 0.3
    });
}

function s6(){
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section6',
            start: 'top 70%',
            // scrub: true
        }
    });

    tl.fromTo('#section6 .tit_wrap > *',
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            stagger: 0.3
        }
    );

    tl.fromTo('#section6 .s6_img_wrap > *', {
        opacity: 0,
        y: 30,
    },
    {
        opacity: 1,
        y: 0,
        stagger: 0.3
    });
}

function s7(){
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section7',
            start: 'top 70%',
            // scrub: true
        }
    });

    tl.fromTo('#section7 .tit_wrap > *',
        {
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            stagger: 0.3
        }
    );

    tl.fromTo('#section7 .s7_img_wrap > *', {
        opacity: 0,
        y: 30,
    },
    {
        opacity: 1,
        y: 0,
        stagger: 0.3
    });
}

function s8(){
    tl = gsap.timeline({
        scrollTrigger: {
            trigger: '#section8',
            start: 'top 70%',
        }
    });

    tl.fromTo('#section8 .tit_wrap',
        {
            opacity: 0,
            x: 50
        },
        {
            opacity: 1,
            x: 0,
        }
    );

    tl.fromTo('#section8 .s8_list > *', {
        opacity: 0,
        y: 30,
    },
    {
        opacity: 1,
        y: 0,
        stagger: 0.3
    });
}

