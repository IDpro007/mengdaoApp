<template>
  <div class="containerPage">
    <div class="topbar">
    <NavBar
      fixed="true"
      z-index="10"
      clickable="true"
      class="topNavBar"
      >
      <template #left>
        <span class="topBarImg"><img src="../img/icon.png"  ></span>
        <span class="topBarImgText" >梦岛&nbsp;</span>
        <span style="font-weight:100;color:gray;font-size:30px;" >|</span>
        <span class="topBarTextSmall" >&nbsp;满足您的一切幻想</span>
      </template>
      <template #right>
        <Button type="primary" class="topBarButton" @click="downloadPositionClick('#downloadPosition')">下载App</Button>
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
      <img src="../img/picture1.png">
    </div>
    </div>
    <div class="pictureCom">
      <div class="titleText">
      <h2 class="largeText">声音甜美听指挥</h2>
      <h6 class="smallerText">甜美的声音只为您服务</h6>
    </div>
    <div class="pictureDiv2">
      <img src="../img/picture2.png">
    </div>
    </div>
    <div class="pictureCom">
      <div class="titleText">
      <h2 class="largeText" id="downloadPosition">立即下载梦岛</h2>
      <h6 class="smallerText">享受顶级服务</h6>
      <div class="downloadLink">
        <div class="androidButton">
          <button type="primary" class="downloadButton" @click="androidDownload"><a href="https://www.baidu.com"><span class="iconfont">&#xe87f;</span>  安卓下载</a></button>
        </div>
        <div class="IOSButton">
          <button type="primary" class="downloadButton" ><span class="iconfont">&#xe87e;</span>  IOS下载</button>
        </div>
        
      </div>
    </div>
    <div>
    </div>
    </div>
  </div>
  </div>
</template>

<script setup>
import { NavBar, Button } from "vant";
  const downloadPositionClick = (selector) => {
    document.querySelector(selector).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  const androidDownload = () => {
    
  }
</script>

<style lang="less" scoped>
.containerPage{
  .topbar {
  position: relative;
  width: 100vw;
  height: 65px;
  position: fixed;
  top: 0;
  z-index: 10;
  
  .topNavBar{
    position: relative;
    height: 100%;
    width: 100%;
    border-bottom: 1px solid rgba(174, 174, 174, 0.8);
    min-height: 50px;
    min-width: 350px;
    padding-top: 20px;
    :deep(.van-nav-bar__left){
      display: flex !important;
      padding: 0;
    }
    .topBarTextSmall{
      font-family:'Helvetica';
      font-weight: 100;
      font-size: 15px;
      color: rgba(88, 88, 88, 0.8);
      line-height: 30px;
      margin: 0;
      margin-top: 10px;
    }
    .topBarButton{
      background-color: #6D2DFC;
      border-radius: 20px;
      min-width: 18vw;
      min-height: 3vh;
      right: -10px;
      margin-top: 10px;
    }
  }
  .topBarImg{
    left: 0;
  }
  .topBarImgText{
    width: 20vw;
    min-width: 60px;
    font-family: 'zihun196hao-damingsong';
    font-size: 30px;
    text-align: right;  
    line-height: 30px;
  }
}
.body{
  width: 100%;
  height: 2400px;
  background-color: #6D2DFC;
  .pictureCom{
    display: flex;
    position: relative;
    height: 800px;
    width: 100%;
    .downloadLink{
      position: absolute;
      display: flex;
      flex-direction: column;
      left: 50%;
      top: 40%;
      transform: translate(-50%, -50%);
      width: 300px;
      height: 150px;
      justify-content: space-between;
      .downloadButton {
        font-family: 'Helvetica';
        background-color: #000000;
        width: 304px;
        height: 73px;
        border: none;
        border-radius: 40px;
      }
    }
  }
  .titleText{
    font-family: 'Helvetica';
    color: white;
    .largeText{
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      width: 100%;
      position: absolute;
      text-align: center;
      line-height: inherit;
      top: 139px;
      font-weight: 400;
      font-size: 30px;
    }
    .smallerText{
      display: flex;
      justify-content: center;
      flex-wrap: nowrap;
      min-width: 200px;
      margin-top: 5%;
      position: absolute;
      left: 50%;
      top: 181px;
      transform: translate(-50%);
      font-size: 16px;
      font-weight: 100;
      line-height: 18px;
      margin-left: -5px;
    }
  }
  .pictureDiv{
    position: absolute;
    left: 25vw;
    top: 140px;
    transform: translate(-50%);
    scale: 0.7;
    width: 296.15px;
    height: 650px;
  }
  .pictureDiv2{
    position: absolute;
    left: 21vw;
    top: 140px;
    transform: translate(-50%);
    scale: 0.65;
    width: 296.15px;
    height: 650px;
  }
}
}
@font-face {
  font-family: 'iconfont';  /* Project id 4045900 */
  src: url('//at.alicdn.com/t/c/font_4045900_qbil1riydcn.woff2?t=1682861302042') format('woff2'),
       url('//at.alicdn.com/t/c/font_4045900_qbil1riydcn.woff?t=1682861302042') format('woff'),
       url('//at.alicdn.com/t/c/font_4045900_qbil1riydcn.ttf?t=1682861302042') format('truetype');
}
.iconfont{
    font-family:"iconfont" !important;
    font-size:24px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
    }
    a:visited {
  color: inherit; /* 或者你想要的颜色 */
}
</style>
