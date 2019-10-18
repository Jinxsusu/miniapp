<template>
  <div>
    <search />
    <!-- 分类页面 -->
    <div class="category">
      <!-- 顶级分类 -->
      <ul class="sup">
        <scroll-view scroll-y>
          <li class="active">大家电</li>
          <li>热门推荐</li>
          <li>海外购</li>
          <li>苏宁房产</li>
          <li>电脑办公</li>
          <li>厨卫电器</li>
          <li>食品酒水</li>
          <li>居家生活</li>
          <li>厨房电器</li>
        </scroll-view>
      </ul>
      <!-- /顶级分类 -->
      <!-- 二级分类 -->
      <div class="sub">
        <scroll-view scroll-y>
          <!-- 封面图片 -->
          <img class="thumb" src="/static/uploads/category.png" />
          <!-- /封面图片 -->
          <!-- 二级分类子盒子 -->
          <div class="children">
            <!-- 标题 -->
            <div class="title">电视</div>
            <!-- /标题 -->
            <!-- 品牌 -->
            <div class="brands">
              <navigator>
                <img src="/static/uploads/brand_1.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_2.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_3.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_4.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_5.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_6.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_7.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_8.jpg" alt />
                <span>曲面电视</span>
              </navigator>
            </div>
            <!-- /品牌 -->
          </div>
          <div class="children">
            <!-- 标题 -->
            <div class="title">电视</div>
            <!-- /标题 -->
            <!-- 品牌 -->
            <div class="brands">
              <navigator>
                <img src="/static/uploads/brand_1.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_2.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_3.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_4.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_5.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_6.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_7.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_8.jpg" alt />
                <span>曲面电视</span>
              </navigator>
            </div>
            <!-- /品牌 -->
          </div>
          <div class="children">
            <!-- 标题 -->
            <div class="title">电视</div>
            <!-- /标题 -->
            <!-- 品牌 -->
            <div class="brands">
              <navigator>
                <img src="/static/uploads/brand_1.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_2.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_3.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_4.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_5.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_6.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_7.jpg" alt />
                <span>曲面电视</span>
              </navigator>
              <navigator>
                <img src="/static/uploads/brand_8.jpg" alt />
                <span>曲面电视</span>
              </navigator>
            </div>
            <!-- /品牌 -->
          </div>
          <!--/ 二级分类子盒子 -->
        </scroll-view>
      </div>
      <!--/ 二级分类 -->
    </div>
    <!--/ 分类页面 -->
  </div>
</template>

<script>
import search from '@/components/search'
export default {
  // 注册组件
  components: {
    search
  }
}
</script>

<style lang="less" scoped>
scroll-view {
  height: 100%;
}
.category {
  display: flex;
  width: 100%;
  position: absolute;
  top: 100rpx;
  bottom: 0;
  //顶级分类
  .sup {
    width: 196rpx;
    background-color: #f4f4f4;
    li {
      height: 100rpx;
      border: 1px solid #eeeeee;
      color: #333333;
      font-size: 26rpx;
      line-height: 100rpx;
      text-align: center;
      &.last-child {
        border-bottom: none;
      }
      &.active {
        position: relative;
        height: 100rpx;
        border: 1px solid #eeeeee;
        color: #ea4451;
        font-size: 26rpx;
        line-height: 100rpx;
        text-align: center;

        &::before {
          position: absolute;
          left: 0;
          top: 50%;
          content: "";
          display: block;
          width: 8rpx;
          height: 60rpx;
          background-color: #ea4451;
          transform: translateY(-50%);
        }
      }
    }
  }
  //二级分类
  .sub {
    flex: 1;
    padding: 20rpx 18rpx;
    // background-color: pink;
    //封面图片
    .thumb {
      width: 100%;
      height: 180rpx;
    }
  }
  .children {
    text-align: center;
    color: #333;
    .title {
      margin: 40rpx 0 20rpx;
      font-size: 28rpx;
      &::before {
        content: "/";
        color: #666;
        margin-right: 20rpx;
      }
      &::after {
        content: "/";
        color: #666;
        margin-left: 20rpx;
      }
    }
    .brands {
      // background-color: #3333;
      display: flex;
      flex-wrap: wrap;
      navigator {
        width: 33%;
        margin-bottom: 20rpx;
        img {
          width: 120rpx;
          height: 120rpx;
        }
        span {
          display: block;
          font-size: 24rpx;
        }
      }
    }
  }
}
</style>