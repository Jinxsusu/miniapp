<template>
  <!-- 搜索框 -->
  <div class="search" :class="{focused:focused}">
    <div class="input-box">
      <input @focus="goSearch" type="text" :placeholder="placeholder" />
      <p class="cancel" @click="cancelSearch">取消</p>
    </div>
    <div class="content"></div>
  </div>
  <!-- /搜索框 -->
</template>

<script>
export default {
  data () {
    return {
      focused: false,
      placeholder: ''
    }
  },
  methods: {
    goSearch () {
      // 添加focused 类名
      this.focused = true
      // 设置占位符
      this.placeholder = '请输入您想要的商品'
      // 获得焦点时动态获取 屏幕的可用高度
      // 小程序api 基础上 使用的异步
      const { windowHeight } = wx.getSystemInfoSync()
      // console.log(windowHeight)
      // 触发父组件事件并传值
      this.$emit('search', {
        pageHeight: windowHeight
      })
    },
    cancelSearch () {
      // 删除focused这个类名
      this.focused = false
      // 移除占位符
      this.placeholder = ''
      this.$emit('search', {
        pageHeight: 'auto'
      })
    }
  }
}
</script>

<style lang="less">
// 搜索框
.search {
  background-color: #ea4451;
  padding: 20rpx 30rpx;

  .input-box {
    display: flex;
    position: relative;
    &::before {
      content: "";
      display: none;
      position: absolute;
      left: 0;
      top: 50%;
      height: 32rpx;
      line-height: 32rpx;
      padding-left: 32rpx;
      transform: translate(20rpx, -50%);
      background-image: url("https://ugo2.oss-cn-hangzhou.aliyuncs.com/images/icon_search%402x.png");
      background-size: auto 32rpx;
    }
    &::after {
      content: "搜索";
      position: absolute;
      left: 50%;
      top: 50%;
      height: 32rpx;
      line-height: 32rpx;
      padding-left: 50rpx;
      transform: translate(-50%, -50%);
      color: #bbbbbb;
      font-size: 24rpx;
      background-image: url("https://ugo2.oss-cn-hangzhou.aliyuncs.com/images/icon_search%402x.png");
      background-repeat: no-repeat;
      background-size: auto 32rpx;
    }
  }
  input {
    flex: 1;
    border-radius: 10rpx;
    padding-left: 60rpx;
    height: 60rpx;
    background-color: #fff;
    font-size: 27rpx;
    color: #808080;
  }
  .cancel {
    display: none;
    width: 100rpx;
    line-height: 60rpx;
    text-align: center;
    color: #333333;
    font-size: 30rpx;
  }
  .content {
    position: absolute;
    top: 100rpx;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ffffff;
    display: none;
  }
  &.focused {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9;
    background-color: #eeeeee;
    .input-box {
      &::before {
        display: block;
      }
      &::after {
        display: none;
      }
    }
    .cancel {
      display: block;
    }
    .content {
      display: block;
    }
  }
}
</style>