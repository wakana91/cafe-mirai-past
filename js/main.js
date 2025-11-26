
$(function () {
  /*=================================================
  ハンバーガ―メニュー
  ===================================================*/
  // ハンバーガーメニューをクリックした時
  $(".hamburger").on("click", function () {
    $("header").toggleClass("open");
  });
  // メニューのリンクをクリックした時
  $("#nav a").on("click", function () {
    $("header").toggleClass("open");
  });
  /*=================================================
  スムーススクロール
  ===================================================*/
  $('a[href^="#"]').on("click", function () {
    /* let headerHeight = 80; */
    let href = $(this).attr("href");
    let target = $(href == "#" || href == "" ? "html" : href);
    let position = target.offset().top;
    /* let position = target.offset().top - headerHeight; */
    $("html, body").animate({ scrollTop: position }, 1200, "swing");
    return false;
  });

  /*=================================================
  スライダー
  ===================================================*/
  $(".slide-items").slick({
    arrows: false,
    centerMode: true,
    centerPadding: "100px",
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '60px'
        }
      },
      {
        breakpoint: 768,
        settings: {
          centerPadding: "50px",
          slidesToShow: 1,
        },
      },
    ],
  });

gsap.registerPlugin(ScrollTrigger);

gsap.set('.main-page .section-title', {
   opacity: 0, y: 16 
  }); // 初期状態セット

gsap.utils.toArray('.main-page .section-title').forEach((el) => {
  gsap.fromTo(
    el,
    {
      opacity: 0, y: 25 
    },
    {
      opacity: 1, y: 0,
      duration: 1.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: el,
        start: 'top 80%', 
        once: true        // 一度だけ再生
      }
    }
  );
});

gsap.utils.toArray('.featured-card.left-item').forEach((el) => {
  gsap.fromTo(
    el,
    { 
      opacity: 0, x: -60 
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    }
  );
});

gsap.utils.toArray('.featured-card.right-item').forEach((el) => {
  gsap.fromTo(
    el,
    { 
      opacity: 0, x: 60 
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    }
  );
});

/*=================================================
  food-card
  ===================================================*/
gsap.utils.toArray('.food-card').forEach((el, i) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
      delay: (i % 3) * 0.08, // 1行3カラムっぽいので軽く横並び感のディレイ
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    }
  );
});

/*=================================================
  drink-card
  ===================================================*/
gsap.utils.toArray('.drink-card').forEach((el, i) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
      delay: (i % 3) * 0.08,
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    }
  );
});

/*=================================================
  dessert-card
  ===================================================*/
gsap.utils.toArray('.dessert-card').forEach((el, i) => {
  gsap.fromTo(
    el,
    { opacity: 0, y: 40 },
    {
      opacity: 1, y: 0, duration: 0.5, ease: 'power2.out',
      delay: (i % 3) * 0.08,
      scrollTrigger: { trigger: el, start: 'top 85%', once: true }
    }
  );
});

/*=================================================
  about
  ===================================================*/
gsap.fromTo(
    ['.story .story-img', '.story .story-text'], // 画像→テキスト
    { 
      opacity: 0, x: (i) => i === 0 ? -50 : 50 
    }, // 画像は左から、テキストは右から
    { 
      opacity: 0.8, x: 0, duration: 1, ease: 'power3.out',

      stagger: { 
        each: 0.3, 
        from: 'start' 
      },     
      scrollTrigger: {
        trigger: '.story',
        start: 'top 75%',
      }
    }
  );

  gsap.fromTo(
    ['.concept .concept-text', '.concept .concept-img'], // テキスト→画像
    { 
      opacity: 0, x: (i) => i === 0 ? -50 : 50 
    }, // テキストは左から、画像は右から
    { 
      opacity: 0.8, x: 0, duration: 1, ease: 'power3.out',
      stagger: { 
        each: 0.3, 
        from: 'start' 
      },
      scrollTrigger: {
        trigger: '.concept',
        start: 'top 75%',
      }
    }
  );

   gsap.fromTo(
    '.story .story-text > *',
    { 
      opacity: 0, y: 16 },
    { 
      opacity: 1, y: 0, duration: 1, ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: { 
        trigger: '.story', start: 'top 75%',
      },
      delay: 0.35 // 画像→テキスト後に少し被せる
    }
  );

  gsap.fromTo(
    '.concept .concept-text > *',
    { opacity: 0, y: 16 },
    { 
      opacity: 1, y: 0, duration: 1, ease: 'power2.out',
      stagger: 0.08,
      scrollTrigger: { trigger: '.concept', start: 'top 75%',
      },
      delay: 0.35
    }
  );
});






