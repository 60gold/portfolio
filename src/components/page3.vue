<template>
  <div id="page3">
    <div id="page3-cover"></div>
    <div class="box">
      <h1 class="web-title">Notebook<span>個人筆記本，可上傳圖片及文字，並進行資料CRUD管理</span></h1>
      <div class="web-thumbnail notebook-thumbnail" @click="openNotebook"></div>
      <div class="web-intro notebook-intro" @click="openNotebook">
        <div class="intro-background"></div>
        <div class="intro">
          <div class="tag"><span>Vue3</span><span>CRUD</span><span>VUEX</span><span>Webpack</span><span>RWD</span></div>
          <h5>使用Node.js建立Vue CLI專案，配合VUEX模組化開發</h5>
          <h5>C：新增筆記 / R：閱讀筆記 / U：更新筆記 / D：刪除筆記</h5>
          <h5>建立store資料庫、透過v-model輸出資料，並使用v-if仿製SPA功能</h5>
          <h5>網頁Nightmode模式及新增/刪除我的最愛功能</h5>
          <div class="go"><span>👉</span> 前往專案</div>
        </div>
      </div>
    </div>
    <div class="box">
      <h1 class="web-title">Alice<span>VR虛擬實境恐怖遊戲，《Alice．ToDream》是我大學畢業專題開發的遊戲，為這個作品模擬建立一個官方網站</span></h1>
      <div class="web-thumbnail alice-thumbnail" @click="openAlice"></div>
      <div class="web-intro alice-intro" @click="openAlice">
        <div class="intro-background"></div>
        <div class="intro">
          <div class="tag"><span>Vue3</span><span>CSS3Animation</span><span>Webpack</span><span>RWD</span></div>
          <h5>video播放控制及影片響應式畫面調整</h5>
          <h5>CSS3漸層及多重背景、動畫3D元件</h5>
          <h5>玩家回饋：PC及Mobile橫向拖曳功能，透過v-model獲取資料</h5>
          <h5>(因Github處理較慢，網頁開頭若沒像gif一樣顯示可以重新整理！)</h5>
          <div class="go"><span>👉</span> 前往專案</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page3',
  props: {
  },
  methods: {
    openNotebook() {
      window.open('https://60gold.github.io/notebook/');
    },
    openAlice() {
      window.open('https://60gold.github.io/alice/');
    }
  }
}
</script>

<style lang="less" scoped>
#page3 {
  width: 60%;
  margin: 0 auto;
}

#page3-cover {
  position: absolute;
  height: 90%;
  width: 90%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #889897;
  transition: all 0.3s;
  // animation-name: background-cover;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}

.box {
  position: relative;
  margin-top: 2%;
  margin-bottom: 2%;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.1);
    .notebook-thumbnail {
      background-image: url(../assets/image/notebook.gif);
    }
    .alice-thumbnail {
      background-image: url(../assets/image/alice.gif);
    }
  }
}

.web-title {
  flex: 0 0 100%;
  text-align: left;
  cursor: default;
  span {
    margin-left: 4%;
    font-size: 1.6rem;
    font-weight: normal;
  }
}

.web-thumbnail {
  height: 225px;
  flex: 0 0 40%;
  cursor: pointer;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
}

.notebook-thumbnail {
  background-image: url(../assets/image/notebook.jpg);
}

.alice-thumbnail {
  background-image: url(../assets/image/alice.jpg);
}

.web-intro {
  position: relative;
  padding: 1% 2%;
  flex: 1;
  text-align: left;
  cursor: pointer;
  .intro {
    position: relative;
    height: 100%;
    opacity: 0;
  }
  .tag {
    position: relative;
    margin-bottom: 2%;
    span {
    margin-right: 2%;
    padding: 2px 5px;
    font-size: 2.2rem;
    background: rgba(0, 0, 0, .5);
    border-radius: 5px;
      &:before {
        content: '#';
      }
    } 
  }
  h5 {
    position: relative;
    font-size: 2rem;
    font-weight: normal;
    color: #cecece;
    &:before {
      content: '- ';
    }
  }
  .go {
    position: absolute;
    bottom: 0;
    font-size: 2rem;
    span {
      font-size: 2.4rem;
    }
  }
}

.intro-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 0%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  transition: all 0.3s;
  // animation-name: intro-background-animation;
  animation-duration: 1s;
  animation-timing-function: ease;
  animation-fill-mode: forwards;
}


@media screen and (max-width:1600px) {
  #page3 {
    width: 70%;
  }
}

@media screen and (max-width:1200px) {
  #page3 {
    width: 80%;
  }
  .box:hover {
    transform: scale(1);
  }
  .web-title span {
    display: none;
  }
}

@media screen and (max-width:768px) {
  .web-thumbnail, .web-intro {
    flex: 0 0 100%;
  }
  .web-intro {
    .tag span {
      padding: 0;
      font-size: 1.8rem;
    }
    .intro h5 {
      display: none;
    }
    .go {
      position: relative;
    }
  }
}
</style>
