<template>
  <div class="containerPage">
    <div class="topbar">
      <NavBar fixed="true" z-index="10" clickable="true" class="topNavBar">
        <template #left>
          <span class="topBarImg"><img src="@/assets/img/icon.png" /></span>
          <span class="topBarImgText">梦岛&nbsp;</span>
          <span class="topBarTextSmall">&nbsp;满足您的一切幻想</span>
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
      <div class="pictureCom">
        <div class="titleText">
          <h2 class="largeText">扫码即刻下载</h2>
          <h6 class="smallerText">享受顶级服务</h6>
          <div class="QRCode">
            <img src="" alt="">
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">Copyright © Mengdao 2023, All Rights Reserved</footer>
  </div>
</template>

<script setup>
import { NavBar } from "vant";
</script>

<style lang="less" scoped>
.containerPage {
  position: relative;
  margin: 0;
  padding: 0;
  min-width: 600px;
  min-height: 880px;
  background-color: #6d2dfc;
  .topbar {
    position: relative;
    width: 100vw;
    height: 65px;
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
      padding-top: 20px;
      :deep(.van-nav-bar__left) {
        display: flex !important;
        padding: 0;
      }
      .topBarTextSmall {
        font-family: "Helvetica";
        font-weight: 100;
        font-size: 25px;
        color: rgba(88, 88, 88, 0.8);
        line-height: 30px;
        margin: 0;
        margin-top: 10px;
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
    }
    .titleText {
      padding: 20px;
      position: absolute;
      top: 120px;
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
        width: 100%;
        height: 550px;
        overflow: hidden;  
        border-radius: 25px;
      }
    }
  }
  .footer{
    font-family: "Helvetica";
    color: white;
    font-weight: 100;
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translate(-50%);
  }
}
a {
  color: #ffffff;

  text-decoration: none;
}
</style>
