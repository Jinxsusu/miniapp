<template>
  <div>
    <search />
    <bolck v-if="topCategoriesList.length">
    <!-- 分类页面 -->
    <div class="category">
      <!-- 顶级分类 -->
      <ul class="sup">
        <scroll-view scroll-y>
          <!-- <li class="active">大家电</li> -->
          <li :class="{active :currentIndex===topIndex}" @click="getChildCategories(topIndex)" v-for="(top,topIndex) in topCategoriesList" :key="topIndex">{{top.cat_name}}</li>
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
          <div 
          class="children" 
          v-for="(child,childIndex) in childCategoriesList" 
          :key="childIndex">
            <!-- 标题 -->
            <div class="title">{{child.cat_name}}</div>
            <!-- /标题 -->
            <!-- 品牌 -->
            <div class="brands">
              <navigator v-for="(product,productIndex) in child.children" :key="productIndex">
                <img :src="product.cat_icon" alt />
                <span>{{product.cat_name}}</span>
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
    </bolck>
  </div>
</template>

<script>
import search from '@/components/search'
// 引入接口方法
import request from '@/utils/request'
export default {
  data () {
    return {
      topCategoriesList: [],
      currentIndex: 0
    }
  },
  computed: {
    childCategoriesList () {
      return (
        this.topCategoriesList.length && this.topCategoriesList[this.currentIndex].children
      )
    }
  },
  methods: {
    // 获取二级分类信息
    getChildCategories (index) {
      this.currentIndex = index
    },
    // 获取分类信息
    async getTopCategoriesList () {
      const { message } = await request({
        url: 'api/public/v1/categories'
      })
      // console.log(message)
      this.topCategoriesList = message
    }
  },
  mounted () {
    this.getTopCategoriesList()
  },
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
      border-bottom: 1px solid #eeeeee;
      color: #333333;
      font-size: 26rpx;
      line-height: 100rpx;
      text-align: center;
      &.last-child {
        border-bottom: none;
      }
      &.active {
        position: relative;
        color: #ea4451;
        background-color: #fff;

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