<template>
  <div id="page1">
    <div id="page1-cover"></div>
    <ul class="circles">
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
      <li></li>
    </ul>
    <h1 class="page1-title">
      <div class="line1-outer">
        <div class="line1">Front End Skills</div>
      </div>
      <div class="line2-outer">
        <div class="line2">&amp;</div>
      </div>
      <div class="line3-outer">
        <div class="line3">Other Tools</div>
      </div>
    </h1>
    <h1 class="page1-title-xs">Front End Skills &amp; Other Tools</h1>
    <div class="box">
      <div class="logo-box">
        <div class="logo logo1">
          <img src="../assets/image/logo/vue.png" alt="vue" />
          <p>Vue.js</p>
        </div>
        <div class="logo logo2">
          <img src="../assets/image/logo/javascript.png" alt="javascript" />
          <p>JavaScript</p>
        </div>
        <div class="logo logo3">
          <img src="../assets/image/logo/jquery.png" alt="jquery" />
          <p>jQuery</p>
        </div>
        <div class="logo logo4">
          <img src="../assets/image/logo/bootstrap.png" alt="bootstrap" />
          <p>Bootstrap</p>
        </div>
        <div class="logo logo5">
          <img src="../assets/image/logo/sass-less.png" alt="sass-less" />
          <p>Sass / Less</p>
        </div>
        <div class="logo logo6">
          <img src="../assets/image/logo/git.png" alt="git" />
          <p>Git</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "page1",
  props: {},
  mounted() {
    document.addEventListener("mousemove", this.onMouseMove);
  },
  methods: {
    onMouseMove(e) {
      var x = e.clientX / 50;
      var y = e.clientY / 50;
      document.querySelector(".box").style.transform = "translate(" + x + "px, " + y + "px)";
    },
  },
  destroyed() {
    document.removeEventListener('mousemove', this.onMouseMove)
  },
};
</script>

<style lang="less" scoped>
#page1-cover {
  position: absolute;
  height: 90%;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: linear-gradient(to top, #296B67 0%,#296B67 5%,rgba(16,19,22,0) 40%), #799C9A;
  transition: all 0.3s;
  // animation-name: background-cover;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

ul.circles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  margin: 0;
  overflow: hidden;
  li {
    position: absolute;
    display: block;
    bottom: -150px;
    border-radius: 50%;
    animation-name: circle-animation;
    animation-duration: 25s;
    animation-delay: 1s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  li:nth-child(1) {
    left: 5%;
    width: 2vw;
    height: 2vw;
    background: linear-gradient(10deg, #FDEAA6, #7280C1);
    animation-delay: 0s;
  }
  li:nth-child(2) {
    left: 12%;
    width: 4vw;
    height: 4vw;
    background: linear-gradient(280deg, #FDEAA6, #7280C1);
    animation-delay: 2s;
    animation-duration: 12s;
  }
  li:nth-child(3) {
    left: 21%;
    width: 3vw;
    height: 3vw;
    background: linear-gradient(200deg, #FDEAA6, #7280C1);
    animation-delay: 4s;
  }
  li:nth-child(4) {
    left: 26%;
    width: 8vw;
    height: 8vw;
    background: linear-gradient(150deg, #FDEAA6, #7280C1);
    animation-delay: 0s;
    animation-duration: 18s;
  }
  li:nth-child(5) {
    left: 38%;
    width: 4vw;
    height: 4vw;
    background: linear-gradient(45deg, #FDEAA6, #7280C1);
    animation-delay: 0s;
  }
  li:nth-child(6) {
    left: 47%;
    width: 5vw;
    height: 5vw;
    background: linear-gradient(190deg, #FDEAA6, #7280C1);
    animation-delay: 3s;
  }
  li:nth-child(7) {
    left: 53%;
    width: 2vw;
    height: 2vw;
    background: linear-gradient(300deg, #FDEAA6, #7280C1);
    animation-delay: 7s;
  }
  li:nth-child(8) {
    left: 71%;
    width: 3vw;
    height: 3vw;
    background: linear-gradient(10deg, #FDEAA6, #7280C1);
    animation-delay: 15s;
    animation-duration: 45s;
  }
  li:nth-child(9) {
    left: 79%;
    width: 7vw;
    height: 7vw;
    background: linear-gradient(220deg, #FDEAA6, #7280C1);
    animation-delay: 2s;
    animation-duration: 35s;
  }
  li:nth-child(10) {
    left: 94%;
    width: 3vw;
    height: 3vw;
    background: linear-gradient(120deg, #FDEAA6, #7280C1);
    animation-delay: 0s;
    animation-duration: 11s;
  }
}

@keyframes circle-animation {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-1000px);
    opacity: 0;
  }
}

h1.page1-title {
  margin: 0 auto;
  width: 70%;
  font-size: 7rem;
}

.line1-outer,
.line2-outer,
.line3-outer {
  position: relative;
  height: 100px;
  clip-path: polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%);
  transition: all 0.3s;
  // animation-name: text-clip;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0.5, 0, 0.1, 1);
  animation-fill-mode: both;
}

.line1,
.line2,
.line3 {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  transition: all 0.3s;
  // animation-name: line-left;
  animation-duration: 1s;
  animation-delay: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

h1.page1-title-xs {
  position: relative;
  display: none;
  padding-left: 5%;
  width: 50%;
  font-size: 8rem;
  opacity: 0;
  transition: all 0.3s;
}

.box {
  position: absolute;
  height: 100%;
  width: 60%;
  top: 0;
  right: 0;
  padding: 10% 10% 10% 2%;
}

.logo-box {
  position: relative;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  opacity: 0;
  transition: all 0.3s;
  // animation-name: logo-animation;
  animation-duration: 1s;
  animation-delay: 2s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  cursor: default;
  img {
    margin: 0 auto;
    width: auto;
    height: 8rem;
    &:hover {
      -webkit-filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.7));
      filter: drop-shadow(0px 0px 10px rgba(255, 255, 255, 0.7));
    }
  }
  p {
    margin: 0;
    line-height: 2;
    font-size: 2rem;
  }
}


@media screen and (max-width:1200px) {
  .box {
    width: 45%;
  }
  .logo {
    width: 50%;
  }
}

@media screen and (max-width:768px) {
  h1.page1-title {
    display: none;
  }
  h1.page1-title-xs {
    display: block;
  }
  .logo {
    width: 100%;
    img {
      height: 5rem;
    }
  }
}
</style>
