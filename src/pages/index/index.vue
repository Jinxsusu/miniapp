<template>
  <div :style="{height:pageHeight,overflow:'hidden'}">
    <search @search="disableScroll" />
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
      <swiper-item v-for="banner in bannerList" :key="banner.goods_id">
        <a href>
          <img :src="banner.image_src" />
        </a>
      </swiper-item>
    </swiper>
    <!-- /焦点图(轮播图) -->

    <!-- 主导航 -->
    <div class="navs">
      <a href v-for="nav in navList" :key="nav.name">
        <img :src="nav.image_src" />
      </a>
    </div>
    <!-- /主导航 -->

    <!-- 楼层(分类数据) -->
    <div class="foolrs">
      <div class="floor" v-for="(floor,index) in floorList" :key="index">
        <!-- 标题 -->
        <div class="title">
          <img :src="floor.floor_title.image_src" alt />
        </div>
        <!-- 分类 -->
        <div class="items">
          <a href v-for="(product,key) in floor.product_list" :key="key">
            <img :src="product.image_src" alt />
          </a>
        </div>
      </div>
    </div>
    <!-- /楼层(分类数据) -->
    <!-- 回到顶部锚点 -->
    <p v-show="scrollTop>200" class="goTop" @click="goTop">回到顶部</p>
  </div>
</template>

<script>
import search from '@/components/search'
import request from '@/utils/request'
export default {
  data () {
    return {
      pageHeight: 'auto', // 一个盒子的默认值是auto
      bannerList: [], // 轮播图
      navList: [], // 主导航信息
      floorList: [],
      scrollTop: 0
    }
  },
  // 注册组件
  components: {
    search
  },
  methods: {
    // 获取轮播图
    async  getBannerList () {
      const {message} = await request({
        url: 'api/public/v1/home/swiperdata'
      })
      // 更新数据
      this.bannerList = message
    },
    // 获取主导航信息
    async  getNavList () {
      const {message} = await request({
        url: 'api/public/v1/home/catitems'
      })
      // 更新数据
      this.navList = message
    },
    // 获取楼层信息
    async  getFloorList () {
      const {message} = await request({
        url: 'api/public/v1/home/floordata'
      })
      // 更新数据
      this.floorList = message
    },
    disableScroll (ev) {
      this.pageHeight = ev.pageHeight + 'px'
    },
    // 点击回到顶部事件
    goTop () {
      // 执行小程序 api 方法
      // 将页面滚动到目标位置，支持选择器和滚动距离两种方式定位

      mpvue.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    }
  },
  // 监听用户下拉刷新事件
  async onPullDownRefresh () {
    await this.getBannerList()
    await this.getNavList()
    await this.getFloorList()
    // 重新刷新数据以后
    // 停止刷新 api方法
    mpvue.stopPullDownRefresh()
  },
  // 监听用户滑动页面事件
  onPageScroll (ev) {
    this.scrollTop = ev.scrollTop
  },
  // 监听用户点击页面内转发按钮
  // （button 组件 open-type="share"）
  // 或右上角菜单“转发”按钮的行为，并自定义转发内容。
  onShareAppMessage () {
    return {
      title: '黄子韬热血少年',
      path: '/pages/index/index'
    }
  },
  mounted () {
    this.getBannerList()
    this.getNavList()
    this.getFloorList()
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
//回到顶部锚点
.goTop {
  width: 100rpx;
  height: 100rpx;
  border-radius: 50%;
  position: fixed;
  right: 40rpx;
  bottom: 40rpx;
  background-color: rgba(255, 255, 255, 0.6);
  font-size: 36rpx;
  text-align: center;
}
</style>
