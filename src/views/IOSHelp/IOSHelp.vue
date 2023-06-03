<template>
  <div class="containerPage">
    <header class="topbar">
      <NavBar fixed="true" z-index="10" clickable="true" class="topNavBar">
        <template #left>
          <span class="topBarImg"><img src="@assets/img/icon_1.png" /></span>
          <span class="topBarImgText">梦岛&nbsp;</span>
          <span class="topBarTextSmall">&nbsp;满足您的一切幻想</span>
        </template>
        <template #right>
          <RouterLink to="Home">
          <Button
            type="primary"
            class="topBarButton"
            >下载App</Button
          >
          </RouterLink>
        </template>
      </NavBar>
    </header>
    <body>
      <h2 class="pageTitle">iOS安装指南</h2>
      <div class="imgText">
        <div class="pictureCom">
          <h6 class="pictureComText">第一步：点击“下载APP”，再点击“安装”</h6>
          <div class="pictureComImgDiv">
            <img
              src="@assets/img/iosHelp1.png"
              alt=""
              class="pictureComImg"
            />
          </div>
        </div>
        <div class="pictureCom">
          <h6 class="pictureComText">第二步：返回手机桌面，待梦岛APP安装完成后，点击应用图标</h6>
          <div class="pictureComImgDiv">
            <img
              src="@assets/img/iosHelp1.png"
              alt=""
              class="pictureComImg"
            />
          </div>
        </div>
        <div class="pictureCom">
          <h6 class="pictureComText">第三步：记住下图中的证书名称，并点击取消</h6>
          <div class="pictureComImgDiv">
            <img
              src="@assets/img/iosHelp1.png"
              alt=""
              class="pictureComImg"
            />
          </div>
        </div>
        <div class="pictureCom">
          <h6 class="pictureComText">第四步：进入「设置」-「通用」-「设备管理」</h6>
          <div class="pictureComImgDiv">
            <img
              src="@assets/img/iosHelp1.png"
              alt=""
              class="pictureComImg"
            />
          </div>
        </div>
        <div class="pictureCom">
          <h6 class="pictureComText">第五步：找到对应的证书，点击进入</h6>
          <div class="pictureComImgDiv">
            <img
              src="@assets/img/iosHelp1.png"
              alt=""
              class="pictureComImg"
            />
          </div>
        </div>
        <div class="pictureCom">
          <h6 class="pictureComText">第六步：找到并点击信任该证书，最后返回手机桌面，点击应用图标，即可打开梦岛APP</h6>
          <div class="pictureComImgDiv">
            <img
              src="@assets/img/iosHelp1.png"
              alt=""
              class="pictureComImg"
            />
          </div>
        </div>
      </div>
    </body>
    <footer class="mobileFooter">
      DreamIsland Team <br />
      Copyright © Mengdao 2023, All Rights Reserved
    </footer>
  </div>
</template>

<script setup>
import { NavBar, Button } from "vant";

</script>

<style lang="less" scoped>
.containerPage {
  min-width: 442px;
  margin: 0;
  padding: 0;
  background-color: #6d2dfc;
  overflow: hidden;
  position: relative;
  padding-bottom: 100px;
  .topbar {
    position: relative;
    width: 100%;
    height: 65px;
    position: fixed ;
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
      :deep(.van-nav-bar__left) {
        padding: 0;
      }
      .topBarTextSmall {
        font-family: "Helvetica";
        font-weight: 400;
        font-size: 15px;
        color: rgba(88, 88, 88, 0.8);
        margin: 7px 8px 5px 8px;
      }
      .topBarButton {
        height: 46px;
        width: 115.59px;
        border: none;
        font-family: "Helvetica";
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        line-height: 21px;
        background-color: #6d2dfc;
        border-radius: 20px;
      }
    }
    .topBarImg {
      margin-right: -10px;
      scale: 0.7;
      left: 0;
    }
    .topBarImgText {
      height: 31px;
      min-width: 60px;
      font-family: "zihun196hao-damingsong";
      text-align: left;
      border-right: 1px solid #6d2dfc;
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 31px;
    }
  }
  .pageTitle {
      margin-top: 50px;
      color: #ffffff;
      text-align: center;
      font-family: "Helvetica";
      font-style: normal;
      font-weight: 400;
      font-size: 30px;
      line-height: 34px;
      letter-spacing: -0.05em;
    }
  .imgText {
    display: flex;
    flex-direction: column;
    align-items: center;
    .pictureCom {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 300px;
      .pictureComText {
        width: 350px;
        font-family: "Helvetica";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 18px;
        text-align: center;
        letter-spacing: -0.05em;
        color: rgba(255, 255, 255, 0.75);
      }
      .pictureComImgDiv {
        .pictureComImg{
        width: 300px;
        height: 196.66px;
        border-radius: 20px;
      }
      }
      
    }
  }

  .mobileFooter {
    width: 336px;
    font-family: "Helvetica";
    font-style: normal;
    color: #ffffff;
    opacity: 70%;
    font-weight: 400;
    font-size: 13px;
    text-align: center;
    line-height: 15px;
    position: absolute;
    bottom: 40px;
    left: 50%;
    transform: translate(-50%);
  }
}
</style>
