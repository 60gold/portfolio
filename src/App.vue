<template>
  <div>
    <full-page :options="options" ref="fullpage">
      <div class="section">
        <page0></page0>
      </div>
      <div class="section">
        <page1></page1>
      </div>
      <div class="section">
        <page2></page2>
      </div>
      <div class="section">
        <page3></page3>
      </div>
      <div class="section">
        <page4></page4>
      </div>
    </full-page>
  </div>
</template>

<script>
import Page0 from './components/page0.vue'
import Page1 from './components/page1.vue'
import Page2 from './components/page2.vue'
import Page3 from './components/page3.vue'
import Page4 from './components/page4.vue'

export default {
  name: 'app',
  data() {
    return {
      isTop: 0,
      isLeft: 0,
      currentPage: 1,
      options: {
        licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
        sectionsColor: [
          "#F7F3E8",
          "#5F7777",
          "#5F7777",
          "#5F7777",
          "#5F7777",
        ],
        navigation: true,
        navigationTooltips: ["About", "Skill", "Portfolio", "Portfolio", "Contact"],
        navigationPosition: "left",
        showActiveTooltip: true,
        scrollBar: true,
        afterRender: this.afterRender,
        afterLoad: this.afterLoad,
        onLeave: this.onLeave,
      },
    }
  },
  methods: {
    afterRender: function() {
      //設定page0動畫
      document.querySelector('.title').style.animation = 'title-animation 2s 1.5s forwards';
      document.querySelector('.wordCarousel').style.animation = 'word-animation 2s 1.5s forwards'
    },
    afterLoad: function(origin, destination, direction) {
      //to>page0
      if (origin.index == 1 && direction == 'up') {
        document.querySelector('.title').style.animation = 'title-animation 2s 0s forwards';
        document.querySelector('.wordCarousel').style.animation = 'word-animation 2s 0s forwards'
      }
      //to>page1
      if (origin.index == 0 && direction == 'down') {
        document.getElementById('page1-cover').style.animationName = 'background-cover';
        document.querySelector('.line1-outer').style.animationName = 'text-clip';
        document.querySelector('.line2-outer').style.animationName = 'text-clip';
        document.querySelector('.line3-outer').style.animationName = 'text-clip';
        document.querySelector('.line1').style.animationName = 'line-left';
        document.querySelector('.line2').style.animationName = 'line-left';
        document.querySelector('.line3').style.animationName = 'line-left';
        document.querySelector('.logo-box').style.animationName = 'logo-animation';
        document.querySelector('.page1-title').style.animation = '';
        document.querySelector('.box').style.animation = '';
        document.querySelector('.page1-title-xs').style.animation = 'opacity-to-1 2s 0s forwards';
      }
      if (origin.index == 2 && direction == 'up') {
        document.getElementById('page1-cover').style.animationName = 'background-cover';
        document.querySelector('.line1-outer').style.animationName = 'text-clip';
        document.querySelector('.line2-outer').style.animationName = 'text-clip';
        document.querySelector('.line3-outer').style.animationName = 'text-clip';
        document.querySelector('.line1').style.animationName = 'line-left';
        document.querySelector('.line2').style.animationName = 'line-left';
        document.querySelector('.line3').style.animationName = 'line-left';
        document.querySelector('.logo-box').style.animationName = 'logo-animation';
        document.querySelector('.page1-title').style.animation = '';
        document.querySelector('.box').style.animation = '';
        document.querySelector('.page1-title-xs').style.animation = 'opacity-to-1 2s 0s forwards';
      }
      //to>page2
      if (origin.index == 1 && direction == 'down') {
        document.getElementById('page2-cover').style.animationName = 'background-cover';
        document.querySelectorAll('.intro-background')[0].style.animationName = 'intro-background-animation';
        document.querySelectorAll('.intro-background')[1].style.animationName = 'intro-background-animation';
        document.querySelectorAll('.intro')[0].style.animation = 'opacity-to-1 1s 0.5s forwards';
        document.querySelectorAll('.intro')[1].style.animation = 'opacity-to-1 1s 0.5s forwards';
      }
      if (origin.index == 3 && direction == 'up') {
        document.getElementById('page2-cover').style.animationName = 'background-cover';
        document.querySelectorAll('.intro-background')[0].style.animationName = 'intro-background-animation';
        document.querySelectorAll('.intro-background')[1].style.animationName = 'intro-background-animation';
        document.querySelectorAll('.intro')[0].style.animation = 'opacity-to-1 1s 0.5s forwards';
        document.querySelectorAll('.intro')[1].style.animation = 'opacity-to-1 1s 0.5s forwards';
      }
      //to>page3
      if (origin.index == 2 && direction == 'down') {
        document.getElementById('page3-cover').style.animationName = 'background-cover';
        document.querySelectorAll('.intro-background')[2].style.animationName = 'intro-background-animation';
        document.querySelectorAll('.intro-background')[3].style.animationName = 'intro-background-animation';
        document.querySelectorAll('.intro')[2].style.animation = 'opacity-to-1 1s 0.5s forwards';
        document.querySelectorAll('.intro')[3].style.animation = 'opacity-to-1 1s 0.5s forwards';
      }
      if (origin.index == 4 && direction == 'up') {
        document.getElementById('page3-cover').style.animationName = 'background-cover';
        document.querySelectorAll('.intro-background')[2].style.animationName = 'intro-background-animation';
        document.querySelectorAll('.intro-background')[3].style.animationName = 'intro-background-animation';
        document.querySelectorAll('.intro')[2].style.animation = 'opacity-to-1 1s 0.5s forwards';
        document.querySelectorAll('.intro')[3].style.animation = 'opacity-to-1 1s 0.5s forwards';
      }
    },
    onLeave: function(origin) {
      //leave>page0
      if (origin.index ==0) {
        document.querySelector('.title').style.animation = 'opacity-to-0 0.5s 0s';
        document.querySelector('.wordCarousel').style.animation = '';
      }
      //leave>page1
      if (origin.index ==1) {
        document.getElementById('page1-cover').style.animationName = 'background-delete-cover';
        document.querySelector('.page1-title').style.animation = 'opacity-to-0 0.5s 0s';
        document.querySelector('.box').style.animation = 'opacity-to-0 0.5s 0s';
        document.querySelector('.page1-title-xs').style.animation = 'opacity-to-0 0.5s 0s';
      }
      //leave>page2
      if (origin.index ==2) {
        document.getElementById('page2-cover').style.animationName = 'background-delete-cover';
        document.querySelectorAll('.intro-background')[0].style.animationName = '';
        document.querySelectorAll('.intro-background')[1].style.animationName = '';
        document.querySelectorAll('.intro')[0].style.animation = 'opacity-to-0 0.5s 0s';
        document.querySelectorAll('.intro')[1].style.animation = 'opacity-to-0 0.5s 0s';
      }
      //leave>page3
      if (origin.index ==3) {
        document.getElementById('page3-cover').style.animationName = 'background-delete-cover';
        document.querySelectorAll('.intro-background')[2].style.animationName = '';
        document.querySelectorAll('.intro-background')[3].style.animationName = '';
        document.querySelectorAll('.intro')[2].style.animation = 'opacity-to-0 0.5s 0s';
        document.querySelectorAll('.intro')[3].style.animation = 'opacity-to-0 0.5s 0s';
      }
    }
  },
  components: {
    Page0,
    Page1,
    Page2,
    Page3,
    Page4
  },
}
</script>

<style lang="less">
@import "./common/font/fontello.css";
@import "../node_modules/animate.css/animate.min.css";
@import "../node_modules/fullpage.js/dist/fullpage.min.css";
@import url('https://fonts.googleapis.com/css2?family=Cormorant:wght@400;500;700&family=Noto+Sans+TC:wght@300;400;700&display=swap');

* {
  box-sizing: border-box;
  touch-action: none;
}

修改反白顏色
::-moz-selection {
  color: #fff;
  background: #2e3e3e;
}
::selection {
  color: #fff;
  background: #2e3e3e;
}

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  font-family: 'Cormorant', serif !important;
  font-family: 'Noto Sans TC', sans-serif;
  font-family: fontello;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow-x: hidden;
  color: #fff;
}

html {
  font-size: 10px;
}

body {
  padding-top: constant(safe-area-inset-top);
  padding-top: env(safe-area-inset-top);
  // padding-bottom: constant(safe-area-inset-bottom);
  // padding-bottom: env(safe-area-inset-bottom);
  font-size: 1.6rem;
}

#App {
  font-family: 'Cormorant', serif;
  font-family: 'Noto Sans TC', sans-serif;
  font-family: fontello;
}

.section {
  position: relative;
  text-align: center;
  font-size: 2.6rem;
  overflow: hidden;
}

img {
  display: block;
}

h1, h2, h3, h4, h5 {
  margin-top: 0;
  margin-bottom: 0;
  line-height: 1.5;
}

//nav設定
#fp-nav {
  top: 80%;
  cursor: default;
  opacity: 0;
  transition: all .3s;
  animation-name: opacity-to-1;
  animation-duration: 2s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
}
#fp-nav.fp-left {
  left: 3%;
}
#fp-nav ul li, .fp-slidesNav ul li {
  margin-bottom: 3.5rem;
  letter-spacing: 2px;
}
//span設定
#fp-nav ul li a span, .fp-slidesNav ul li a span {
  margin: 8px 0 0 0;
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, .5);
}
#fp-nav ul li:hover a span, .fp-slidesNav ul li:hover a span {
  margin: 8px 0 0 0;
  width: 8px;
  height: 8px;
  background: rgba(255, 255, 255, .8);
}
#fp-nav ul li .fp-tooltip {
  top: 3px;
}
#fp-nav ul li .fp-tooltip.fp-left {
  left: 30px;
  width: auto;
  font-size: 2rem;
  color:rgba(255,255,255,0);
  text-shadow: 0 0 2px rgba(255,255,255,1);
  cursor: default;
  opacity: 1;
  font-family: 'Cormorant', serif !important;
}
#fp-nav ul li a {
  cursor: default;
  pointer-events: none;
}
//active span設定
#fp-nav ul li a.active span, #fp-nav ul li:hover a.active span, .fp-slidesNav ul li a.active span, .fp-slidesNav ul li:hover a.active span {
  margin: 8px 0 0 0;
  height: 8px;
  width: 8px;
  background: rgba(255, 255, 255, 1);
}
#fp-nav ul li:hover .fp-tooltip, #fp-nav.fp-show-active a.active+.fp-tooltip {
  font-size: 2rem;
  color:rgba(255,255,255,0);
  text-shadow: 0 0 0 rgba(255,255,255,1);
  font-weight: 600;
}

//通用動畫
@keyframes opacity-to-1 {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes opacity-to-0 {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

//page0動畫
@keyframes title-animation {
  0% {
    opacity: 0;
    top: 55%;
  }
  100% {
    opacity: 1;
    top: 45%;
  }
}

@keyframes word-animation {
  0% {
    opacity: 0;
    bottom: 25%;
  }
  100% {
    opacity: 1;
    bottom: 35%;
  }
}

//page1動畫
@keyframes background-cover {
  0% {
    height: 90%;
    width: 90%;
  }
  100% {
    height: 100%;
    width: 100%;
  }
}

@keyframes background-delete-cover {
  0% {
    height: 100%;
    width: 100%;
  }
  100% {
    height: 90%;
    width: 90%;
  }
}

@keyframes text-clip {
  from {
    clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  }
  to {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  }
}

@keyframes line-left {
  0% {
    left: 50%;
    transform: translateX(-50%);
  }
  100% {
    left: 0%;
    transform: translateX(0%);
  }
}

@keyframes logo-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

//page2動畫
@keyframes intro-background-animation {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}


@media screen and (max-width:1600px) {
  html {
    font-size: 9px;
  }
}

@media screen and (max-width:1200px) {
  html {
    font-size: 8px;
  }
}

@media screen and (max-width:768px) {
  #fp-nav {
    display: none;
  }
}
</style>