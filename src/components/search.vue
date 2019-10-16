<template>
  <!-- 搜索框 -->
    <div class="search">
      <div class="input-box">
        <input type="text" />
      </div>
    </div>
    <!-- /搜索框 -->
</template>

<script>
export default {

}
</script>

<style lang="less">
// 搜索框
.search {
  background-color: #ea4451;
  padding: 20rpx 30rpx;
  .input-box{
      &::after{
          content: '搜索';
          position: absolute;
          left: 50%;
          top: 50%;
          height: 32rpx;
          line-height: 32rpx;
          padding-left: 50rpx;
          transform: translate(-50%,-50%);
          color:#bbbbbb;
          font-size: 24rpx;
          background-color: pink;
          background-image: url();
          background-color:auto 32rpx;
          background-repeat: no-repeat;
      }
  }
  input {
    border-radius: 10rpx;
    height: 60rpx;
    background-color: #fff;
  }
}
</style>