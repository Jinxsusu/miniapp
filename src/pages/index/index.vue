<template>
  <div>
    <search />
    <!-- 焦点图(轮播图) -->
    <swiper
      class="banner"
      indicator-dots
      indicator-color="rgba(255, 255, 255, .6)"
      indicator-active-color="#ffffff"
      autoplay
      interval="3000"
      circular
    >
      <swiper-item>
        <a href>
          <img src="https://jinxsusu.github.io/myapp/static/uploads/banner1.png" />
        </a>
      </swiper-item>
      <swiper-item>
        <a href>
          <img src="https://jinxsusu.github.io/myapp/static/uploads/banner2.png" />
        </a>
      </swiper-item>
      <swiper-item>
        <a href>
          <img src="https://jinxsusu.github.io/myapp/static/uploads/banner3.png" />
        </a>
      </swiper-item>
    </swiper>
    <!-- /焦点图(轮播图) -->

    <!-- 主导航 -->
    <div class="navs">
      <a href>
        <img src="https://jinxsusu.github.io/myapp/static/uploads/icon_index_nav_4@2x.png" />
      </a>
      <a href>
        <img src="https://jinxsusu.github.io/myapp/static/uploads/icon_index_nav_3@2x.png" />
      </a>
      <a href>
        <img src="https://jinxsusu.github.io/myapp/static/uploads/icon_index_nav_2@2x.png" />
      </a>
      <a href>
        <img src="https://jinxsusu.github.io/myapp/static/uploads/icon_index_nav_1@2x.png" />
      </a>
    </div>
    <!-- /主导航 -->

    <!-- 楼层(分类数据) -->
    <div class="foolrs">
      <div class="floor">
        <!-- 标题 -->
        <div class="title">
          <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor01_title.png" alt />
        </div>
        <!-- 分类 -->
        <div class="items">
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor01_1@2x.png" alt />
          </a>
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor01_2@2x.png" alt />
          </a>
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor01_3@2x.png" alt />
          </a>
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor01_4@2x.png" alt />
          </a>
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor01_5@2x.png" alt />
          </a>
        </div>
      </div>
      <div class="floor">
        <!-- 标题 -->
        <div class="title">
          <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor02_title.png" alt />
        </div>
        <!-- 分类 -->
        <div class="items">
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor02_1@2x.png" alt />
          </a>
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor02_2@2x.png" alt />
          </a>
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor02_3@2x.png" alt />
          </a>
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor02_4@2x.png" alt />
          </a>
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor02_5@2x.png" alt />
          </a>
        </div>
      </div>
      <div class="floor">
        <!-- 标题 -->
        <div class="title">
          <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor03_title.png" alt />
        </div>
        <!-- 分类 -->
        <div class="items">
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor03_1@2x.png" alt />
          </a>
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor03_2@2x.png" alt />
          </a>
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor03_3@2x.png" alt />
          </a>
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor03_4@2x.png" alt />
          </a>
          <a href>
            <img src="https://jinxsusu.github.io/myapp/static/uploads/pic_floor03_5@2x.png" alt />
          </a>
        </div>
      </div>
    </div>
    <!-- /楼层(分类数据) -->
  </div>
</template>

<script>
import search from '@/components/search'
export default {
  data () {
    return {}
  },
  // 注册组件
  components: {
    search
  },
  methods: {},

  created () {
    // let app = getApp()
  }
}
</script>

<style lang="less" scoped>
// 焦点图
.banner {
  height: 340rpx;
  a {
    display: block;
    height: 340rpx;
  }
}
//主导航
.navs {
  display: flex;
  height: 192rpx;
  align-items: center;
  justify-content: space-between;
  padding: 0 36rpx;
  a {
    width: 128rpx;
    height: 140rpx;
  }
}
//楼层(分类数据)

.floor {
  .title {
    padding: 30rpx 0 0 15rpx;
    width: 750rpx;
    height: 60rpx;
    background-color: #f4f4f4;
  }
  .items {
    overflow: hidden;
    padding: 20rpx 10rpx;
    a {
      float: left;
      margin-left: 10rpx;
      //选中后两个
      &:nth-last-child(-n + 2) {
        margin-top: 10rpx;
      }
      &:first-child {
        width: 232rpx;
        height: 386rpx;
        margin-left: 0;
      }
      &:nth-child(2),
      &:nth-child(5) {
        width: 273rpx;
        height: 188rpx;
      }
      &:nth-child(3),
      &:nth-child(4) {
        width: 193rpx;
        height: 188rpx;
      }
    }
  }
  &:first-child {
    a {
      width: 233rpx !important;
      height: 188rpx;
    }
  }
}
</style>
