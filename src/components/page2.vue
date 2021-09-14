<template>
  <div id="page2">
    <div id="page2-cover"></div>
    <div class="box">
      <h1 class="web-title">Massive<span>電子商務官方網站，包含首頁、產品、提供服務、及聯絡表單等四個頁面</span></h1>
      <div class="web-thumbnail massive-thumbnail" @click="openMassive"></div>
      <div class="web-intro massive-intro" @click="openMassive">
        <div class="intro-background"></div>
        <div class="intro">
          <div class="tag"><span>CSS3Animation</span><span>jQuery</span><span>Bootstrap</span><span>RWD</span></div>
          <h5>JS監聽滾動事件並控制動畫時機</h5>
          <h5>ContactUs頁面：監聽Form表單狀態，根據使用者操作進行提示</h5>
          <h5>建立網頁所需色碼表/客製化class/通用class檔案</h5>
          <h5>RWD優化，注重Mobile使用體驗</h5>
          <div class="go"><span>👉</span> 前往專案</div>
        </div>
      </div>
    </div>
    <div class="box">
      <h1 class="web-title">House Hotel<span>民宿房型介紹及訂房網站，《THE F2E》第二屆作品 (API由主辦方提供)</span></h1>
      <div class="web-thumbnail house-thumbnail" @click="openHouse"></div>
      <div class="web-intro house-intro" @click="openHouse">
        <div class="intro-background"></div>
        <div class="intro">
          <div class="tag"><span>CallAPI</span><span>AJAX</span><span>jQuery</span><span>Flex</span><span>RWD</span></div>
          <h5>使用TOKEN呼叫並串接API，獲取所需房型及訂房資料</h5>
          <h5>GET房間詳細資料，使用在房型介紹及確認訂房頁面</h5>
          <h5>JS計算消費者下訂日期的總金額</h5>
          <h5>配合API改寫時間選擇器參數，並建立回傳格式</h5>
          <div class="go"><span>👉</span> 前往專案</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'page2',
  props: {
  },
  methods: {
    openMassive() {
      window.open('https://60gold.github.io/massive-demo/');
    },
    openHouse() {
      window.open('https://60gold.github.io/house-hotel/');
    }
  }
}
</script>

<style lang="less" scoped>
#page2 {
  width: 60%;
  margin: 0 auto;
}

#page2-cover {
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
    .massive-thumbnail {
      background-image: url(../assets/image/massive.gif);
    }
    .house-thumbnail {
      background-image: url(../assets/image/house.gif);
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

.massive-thumbnail {
  background-image: url(../assets/image/massive.jpg);
}

.house-thumbnail {
  background-image: url(../assets/image/house.jpg);
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


@media screen and (max-width:1800px) {
  #page2 {
    width: 70%;
  }
}

@media screen and (max-width:1200px) {
  #page2 {
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
