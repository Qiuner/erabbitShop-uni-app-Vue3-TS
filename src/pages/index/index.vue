<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import CoustomNavbar from './components/CustomNavbar.vue'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'
import HotPanel from './components/HotPanel.vue'
import type { XtxGuessInstance } from '@/types/component'


// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerDate = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}

// 获取前台数据
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryDate = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}

const hotList = ref<HotItem[]>([])
// 获取热门推荐数据
const getgetHomeHotDate = async () => {
  const res = await getHomeHotAPI()
  hotList.value = res.result
}

// 获取猜你喜欢组件实例
const guessRef = ref<XtxGuessInstance>()

// 滚动触底事件
const onScrolltolower = () => {
  guessRef.value?.getMore()
}

onLoad(() => {
  getHomeBannerDate()
  getHomeCategoryDate()
  getgetHomeHotDate()
})
</script>

<template>
  <!-- 自定义导航栏 -->
  <CoustomNavbar />
  <!-- 使用这个来实现上面的不会滚动 -->
  <scroll-view scroll-y @scrolltolower="onScrolltolower">
    <XtxSwiper :list="bannerList" />
    <CategoryPanel :list="categoryList" />
    <!-- 热门推荐 -->
    <HotPanel :list="hotList" />
    <!-- 猜你喜欢，已经在pages.json中实现了自动导入 -->
    <XtxGuess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
// 修改小程序的颜色 类似html5中为body指定颜色
page {
  background-color: #f7f7f7;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.scroll-view {
  flex: 1;
}
</style>
