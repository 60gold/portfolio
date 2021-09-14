<template>
  <div id="page4">
    <div class="contact-box">
      <h4><i class="icon-mail"></i> 寫信告訴我今天海是什麼顏色？</h4>
      <div class="bar">
        <div id="email">wowatermelon@gmail.com</div>
        <div class="copy">
          <i class="icon-copy" @click="copyEmail">
            <div class="tooltip">
              <div class="trangle"></div><span>Copy</span>
            </div>
          </i>
        </div>
      </div>
    </div>
    <div class="monalisa-photo">
      <img src="../assets/image/monalisa.png" alt="monalisa" id="photo">
      <img src="../assets/image/monalisa-eyes.png" alt="" id="eyes">
    </div>
    <div class="copyright">&copy;2021 WenYu Design</div>
  </div>
</template>

<script>
export default {
  name: 'page4',
  props: {
  },
  mounted() {
    document.addEventListener("mousemove", this.onMouseMove);
  },
  methods: {
    copyEmail() {
      var email = document.getElementById('email');
      window.getSelection().selectAllChildren(email);
      document.execCommand('Copy');
    },
    onMouseMove(e) {
      var eyes = document.getElementById('eyes');
      var x = e.clientX * 2 / window.innerWidth + '%';
      eyes.style.left = x;
    },
  },
  destroyed() {
    document.removeEventListener('mousemove', this.onMouseMove)
  },
}
</script>

<style lang="less" scoped>
#page4 {
  width: 60%;
  margin: 0 auto;
}

.contact-box {
  position: relative;
  margin-bottom: 10%;
  text-align: left;
  z-index: 20;
  h4 {
    margin-bottom: 1%;
    font-size: 2.5rem;
    font-weight: normal;
  }
}

.bar {
  display: flex;
  padding: 2% 4%;
  width: 550px;
  background: #95a9a7;
  border: 1px solid #FFF;
  border-radius: 40px;
  font-size: 3rem;
  font-weight: 700;
  color: #2e3e3e;  
}

#email {
  display: inline;
  background-image: linear-gradient(#f6e05e, #f6e05e);
  background-repeat: no-repeat;
  background-position: left;
  background-size: 0% 100%;
  transition: all 500ms ease-in-out;
  &:hover {
    background-size: 100% 100%;
  }
}

.copy {
  text-align: right;
  flex: 1;
  i {
    position: relative;
    cursor: pointer;
    &:hover {
      color: #eaeaea;
      .tooltip {
        opacity: 0.9;
      }
    }
  }
}

.tooltip {
  position: absolute;
  top: 50%;
  right: -50px;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  opacity: 0;
  transition: all 0.3s;
  .trangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 8.7px 5px 0;
    border-color: transparent #2e3e3e transparent transparent;
  }
  span {
    padding: 10% 18%;
    background: #2e3e3e;
    border-radius: 4px;
    font-size: 2rem;
    font-style: normal;
    font-weight: normal;
    color: #FFF;
  }
}

.monalisa-photo {
  position: absolute;
  top: 0;
  right: 0;
  height: 90%;
  margin: 5% 10%;
  img {
    height: 90%;
    width: auto;
  }
  img#photo {
    position: relative;
    z-index: 10;
  }
  img#eyes {
    position: absolute;
    top: 0;
    left: 0;
  }
}

.copyright {
  position: absolute;
  right: 2%;
  bottom: 2%;
  font-size: 2rem;
}


@media screen and (max-width:1200px) {
  .contact-box {
    .bar {
      width: 400px;
    }
  }
}

@media screen and (max-width:768px) {
  #page4 {
    width: 90%;
  }
  .contact-box {
    h4 {
      font-size: 2.5rem;
    }
    .bar {
      width: 100%;
      font-size: 3rem;
    }
    .tooltip {
      display: none;
    }
  }
  .monalisa-photo {
    position: relative;
    margin: 0;
    width: 100%;
    img {
      width: 100%;
      height: auto;
    }
  }
  .copyright {
    right: 5%;
    bottom: 5%;
  }
}
</style>