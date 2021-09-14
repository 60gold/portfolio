<template>
  <div id="page0">
    <div id="circle" ref="circle"></div>
    <video data-autoplay data-keepplaying class="banner-video" autoplay loop muted>
      <source src="../assets/image/banner.mp4" type="video/mp4" />
    </video>
    <div class="video-cover"></div>
    <img src="../assets/image/banner-cat.png" alt="cat" class="cat" />
    <img src="../assets/image/banner-god.png" alt="god" class="god" />
    <h1 class="title">WenYu</h1>
    <div class="wordCarousel">
      <div>
        <ul class="flip3">
          <li>- 愛貓貓😺 -</li>
          <li>- 喜歡動畫效果 -</li>
          <li>- 網頁前端 -</li>
        </ul>
      </div>
    </div>
    <div class="tips">歡迎使用PC瀏覽本網頁，以獲得更好的動畫體驗😀</div>
  </div>
</template>

<script>
export default {
  name: "page0",
  props: {},
  mounted () {
    document.addEventListener('mousemove', this.onMouseMove)
  },
  methods: {
    onMouseMove(e) {
      this.$refs.circle.style.top = e.pageY + 'px';
      this.$refs.circle.style.left = e.pageX + 'px';
    }
  },
  destroyed() {
    document.removeEventListener('mousemove', this.onMouseMove)
  },
};
</script>

<style lang="less" scoped>
#page0 {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#circle{
  width: 10vw;
  height: 10vw;
  background: #fff;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  mix-blend-mode: difference;
  pointer-events: none;
  opacity: 0;
  z-index: 99;
  animation-name: circle-animation;
  animation-duration: 1s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
}

@keyframes circle-animation {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

video.banner-video {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 0%;
  height: 100%;
  object-fit: cover;
  transition: width 0.8s;
  animation-name: video-animation;
  animation-duration: 2s;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
}

@keyframes video-animation {
  0% {
    width: 0%;
  }
  100% {
    width: 100%;
  }
}

.video-cover {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(178, 210, 140, 0.5);
}

img.cat {
  position: absolute;
  top: 50%;
  left: 25%;
  transform: translateY(-50%);
  // height: 40%;
  height: 19vw;
  transition: all 0.3s;
  animation-name: cat-animation;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

img.god {
  position: absolute;
  top: 50%;
  right: 25%;
  transform: translateY(-50%);
  height: 40%;
  height: 19vw;
  transition: all 0.3s;
  animation-name: god-animation;
  animation-duration: 3s;
  animation-fill-mode: forwards;
}

@keyframes cat-animation {
  0% {
    left: 25%;
  }
  50% {
    left: 28%;
  }
  100% {
    left: 0%;
  }
}

@keyframes god-animation {
  0% {
    right: 25%;
  }
  50% {
    right: 28%;
  }
  100% {
    right: 0%;
  }
}

h1.title {
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 11vw;
  cursor: default;
  opacity: 0;
  transition: all 0.8s;
  // animation-name: title-animation;
  // animation-duration: 2s;
  // animation-delay: 1.5s;
  // animation-fill-mode: forwards;
}

.wordCarousel {
  position: absolute;
  left: 50%;
  bottom: 35%;
  transform: translateX(-50%);
  font-size: 36px;
  font-weight: 100;
  color: #eee;
  cursor: default;
  opacity: 0;
  transition: all 0.8s;
  // animation-name: word-animation;
  // animation-duration: 2s;
  // animation-delay: 1.5s;
  // animation-fill-mode: forwards;
  div {
    position: relative;
    margin-top: -10px;
    padding-top: 10px;
    height: 65px;
    overflow: hidden;
    float: right;
    ul {
      padding-left: 0;
    }
    li {
      display: block;
      margin-bottom: 45px;
      padding: 0 10px;
      height: 45px;
      font-family: 'Noto Sans TC', sans-serif;
      color: #eee;
    }
  }
}

.flip3 {
  animation: flip3 8s cubic-bezier(0.23, 1, 0.32, 1.2) infinite;
}

@keyframes flip3 {
  0% {
    margin-top: -270px;
  }
  5% {
    margin-top: -180px;
  }
  33% {
    margin-top: -180px;
  }
  38% {
    margin-top: -90px;
  }
  66% {
    margin-top: -90px;
  }
  71% {
    margin-top: 0px;
  }
  99.99% {
    margin-top: 0px;
  }
  100% {
    margin-top: -270px;
  }
}

.tips {
  display: none;
  position: absolute;
  left: 50%;
  bottom: 5%;
  transform: translateX(-50%);
  padding: 2%;
  width: 80%;
  background: rgba(246, 224, 94, .5);
  border-radius: 5px;
  opacity: 0;
  transition: all 0.83;
  animation-name: tips-animation;
  animation-duration: 1s;
  animation-delay: 2s;
  animation-fill-mode: forwards;
}

@keyframes tips-animation {
  0% {
    bottom: 5%;
    opacity: 0;
  }
  100% {
    bottom: 10%;
    opacity: 1;
  }
}


@media screen and (max-width:768px) {
  #circle {
    display: none;
  }
  h1.title {
    font-size: 7rem;
  }
  .wordCarousel {
    font-size: 2.2rem;
    bottom: 0;
  }
  .tips {
    display: block;
  }
}
</style>
