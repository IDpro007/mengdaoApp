<template>
  <div class="containerPage">
    <div class="topbar">
      <NavBar fixed="true" z-index="10" clickable="true" class="topNavBar">
        <template #left>
          <span class="topBarImg"><img src="@/assets/img/icon.png" /></span>
          <span class="topBarImgText">梦岛&nbsp;</span>
          <span class="topBarTextSmall">&nbsp;满足您的一切幻想</span>
        </template>
        <template #right>
          <Button
            type="primary"
            class="topBarButton"
            @click="downloadPositionClick('#downloadPosition')"
            >下载App</Button
          >
        </template>
      </NavBar>
    </div>
    <div class="body">
      <div class="pictureCom">
        <div class="titleText">
          <h2 class="largeText">超高颜值</h2>
          <h6 class="smallerText">网罗台湾、大陆高质量美女</h6>
        </div>
        <div class="pictureDiv">
          <img class="imgClass" src="@/assets/img/mengdao2.jpg" />
        </div>
      </div>
      <div class="pictureCom">
        <div class="titleText">
          <h2 class="largeText">声音甜美听指挥</h2>
          <h6 class="smallerText">甜美的声音只为您服务</h6>
        </div>
        <div class="pictureDiv">
          <img class="imgClass" src="@/assets/img/mengdao1.jpg" />
        </div>
      </div>
      <div class="pictureCom mobile">
        <div class="titleText">
          <h2 class="largeText" id="downloadPosition">立即下载梦岛</h2>
          <h6 class="smallerText">享受顶级服务</h6>
          <div class="downloadLink">
            <div class="androidButton">
              <a ref="andiroidRef"
                ><button type="primary" class="downloadButton">
                  <span class="iconfont">&#xe87f;</span> 安卓下载
                </button></a
              >
            </div>
            <div class="IOSButton">
              <a ref="IOSRef"
                ><button type="primary" class="downloadButton">
                  <span class="iconfont">&#xe87e;</span> IOS下载
                </button></a
              >
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="pictureCom web">
        <div class="titleText">
          <h2 class="largeText">扫码即刻下载</h2>
          <h6 class="smallerText">享受顶级服务</h6>
          <div id="QRCode" class="qrCode">
          </div>
        </div>
      </div>
    </div>
    <footer class="mobileFooter">DreamIsland Team <br> Copyright © Mengdao  2023, All Rights Reserved </footer>
    <footer class="webFooter">Copyright © Mengdao 2023, All Rights Reserved</footer>
  </div>
</template>

<script setup>
import { NavBar, Button } from "vant";
import { onMounted, ref } from "vue";
import { queryDownLoadLink } from "./common";
import { nextTick } from "vue";
import QRCode from 'qrcodejs2-fix'

const andiroidRef = ref();
const IOSRef = ref();

const downloadPositionClick = (selector) => {
  document.querySelector(selector).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

const queryLink = () => {
  queryDownLoadLink()
    .then((res) => {
      andiroidRef.value.href = res.data.payload.android_download_url;
      IOSRef.value.href = res.data.payload.ios_download_url;
    })
    .catch((error) => {
      alert(error);
    });
};


const locationUrl = window.location.href
const getCode = () => {
  const qrcode = new QRCode('QRCode',{
  text:locationUrl,
  width:110,
  height:111,
  colorDark: '#000000',
  colorLight : "#ffffff"
})
}



onMounted(() => {
  if (window.innerWidth >= 776) {
    nextTick(()=>{
      getCode()
    })
  }
  else if (window.innerWidth < 776) {
    queryLink();
  }
});
</script>

<style lang="less" scoped>
@media screen and (max-width: 766px) {
  .containerPage {
    position: relative;
    margin: 0;
    padding: 0;
    background-color: #6d2dfc;
    .topbar {
      position: relative;
      width: 100%;
      height: 65px;
      position: fixed;
      top: 0;
      z-index: 10;

      .topNavBar {
        position: relative;
        height: 100%;
        width: 100%;
        border-bottom: 1px solid #aeaead;
        min-height: 50px;
        min-width: 350px;
        padding-top: 20px;
        /* :deep(.van-nav-bar__left) {
          display: flex !important;
          padding: 0;
        } */
        .topBarTextSmall {
          font-family: "Helvetica";
          font-weight: 100;
          font-size: 15px;
          color: rgba(88, 88, 88, 0.8);
          line-height: 30px;
          margin: 0;
          margin-top: 10px;
          margin-left: 8px;
        }
        .topBarButton {
          background-color: #6d2dfc;
          border-radius: 20px;
          min-width: 18vw;
          min-height: 3vh;
          right: -10px;
          margin-top: 10px;
        }
      }
      .topBarImg {
        left: 0;
      }
      .topBarImgText {
        min-width: 60px;
        font-family: "zihun196hao-damingsong";
        font-size: 30px;
        text-align: right;
        line-height: 30px;
        border-right: 1px solid #6d2dfc;
      }
    }
    .body {
      width: 100%;
      .pictureCom {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        position: relative;
        height: 700px;
        .downloadLink {
          position: absolute;
          display: flex;
          flex-direction: column;
          left: 50%;
          margin-top: 450px;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 150px;
          justify-content: space-between;
          .downloadButton {
            font-family: "Helvetica";
            background-color: #000000;
            width: 304px;
            height: 73px;
            border: none;
            border-radius: 40px;
          }
        }
      }
      .web {
        display: none;
      }
      .titleText {
        position: absolute;
        top: 80px;
        font-family: "Helvetica";
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .largeText {
          white-space: nowrap;
        text-align: center;
        line-height: inherit;
        font-weight: 400;
        font-size: 30px;
        }
        .smallerText {
          white-space: nowrap;
          margin-top: 100px;
          position: absolute;
          font-size: 16px;
          font-weight: 100;
          line-height: 18px;
        }
      }
      .pictureDiv {
        position: absolute;
        margin-top: 220px;
        padding: 0 50px;
        .imgClass {
          text-align: center;
          width: 250px;
          height: 550px;
          overflow: hidden;
          border-radius: 25px;
        }
      }
    }
    .mobileFooter {
      font-family: "Helvetica";
      font-style: normal;
      color: white;
      font-weight: 400;
      font-size: 13px;
      text-align: center;
      line-height: 15px;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translate(-50%);
    }
    .webFooter{
      display: none;
    }
  }
}

@media screen and (min-width: 766px) {
  .containerPage {
    position: relative;
    margin: 0;
    padding: 0;
    min-width: 600px;
    min-height: 880px;
    background: linear-gradient(66.21deg,#6d2dfc 3.51%, #5fbbe7 89.08%);
    .topbar {
      position: relative;
      width: 100vw;
      height: 140px;
      position: fixed;
      top: 0;
      z-index: 10;

      .topNavBar {
        position: relative;
        height: 100%;
        width: 100%;
        border-bottom: 1px solid rgba(174, 174, 174, 0.8);
        min-height: 50px;
        min-width: 350px;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: start;
        align-items: center;
        :deep(.van-nav-bar__content){
          width: 100%;
        }
        :deep(.van-nav-bar__left) {
          display: flex !important;
          padding: 0;
          margin-left: 34px;
        }
        .topBarButton {
          display: none;
        }
        .topBarTextSmall {
          font-family: "Helvetica";
          font-weight: 100;
          font-size: 25px;
          color: rgba(88, 88, 88, 0.8);
          line-height: 30px;
          margin: 0;
          margin-top: 10px;
          margin-left: 13px;
        }
      }
      .topBarImg {
        left: 0;
      }
      .topBarImgText {
        min-width: 60px;
        margin-left: 20px;
        font-weight: 400;
        font-family: "zihun196hao-damingsong";
        font-size: 50px;
        text-align: right;
        line-height: 30px;
        color: #6d2dfc;
        border-right: 0.1px solid #6d2dfc;
      }
    }
    .body {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100vh;
      .pictureCom {
        min-width: 255px;
        min-height: 850px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        .qrCode{
          position: absolute;
          margin-top: 230px;
          background: #ffffff;
          border-radius:20px;
          padding: 7px;
        }
      }
      .mobile {
        display: none;
      }
      .titleText {
        padding: 20px;
        position: absolute;
        top: 150px;
        font-family: "Helvetica";
        color: white;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .largeText {
          white-space: nowrap;
          text-align: center;
          line-height: inherit;
          font-weight: 400;
          font-size: 30px;
        }
        .smallerText {
          white-space: nowrap;
          margin-top: 100px;
          position: absolute;
          font-size: 16px;
          font-weight: 100;
          line-height: 18px;
        }
      }
      .pictureDiv {
        position: absolute;
        margin-top: 180px;
        .imgClass {
          width: 223.74px;
          height: 483.51px;
          overflow: hidden;
          border-radius: 25px;
        }
      }
    }
    .webFooter {
      font-family: "Helvetica";
      color: white;
      font-weight: 100;
      position: absolute;
      bottom: 20px;
      left: 50%;
      transform: translate(-50%);
    }
    .mobileFooter{
      display: none;
    }
  }
}

@font-face {
  font-family: "iconfont"; /* Project id 4045900 */
  src: url("//at.alicdn.com/t/c/font_4045900_qbil1riydcn.woff2?t=1682861302042")
      format("woff2"),
    url("//at.alicdn.com/t/c/font_4045900_qbil1riydcn.woff?t=1682861302042")
      format("woff"),
    url("//at.alicdn.com/t/c/font_4045900_qbil1riydcn.ttf?t=1682861302042")
      format("truetype");
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 24px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 0.2px;
  -moz-osx-font-smoothing: grayscale;
}
a:visited {
  color: inherit; /* 或者你想要的颜色 */
}
a {
  color: #ffffff;

  text-decoration: none;
}
</style>
