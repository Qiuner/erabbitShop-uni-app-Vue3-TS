<script setup lang="ts">
import { getHomeBannerAPI, getHomeCategoryAPI } from '@/services/home'
import CoustomNavbar from './components/CustomNavbar.vue'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem, CategoryItem } from '@/types/home'
import CategoryPanel from './components/CategoryPanel.vue'

// 获取轮播图数据
const bannerList = ref<BannerItem[]>([])
const getHomeBannerDate = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
const categoryList = ref<CategoryItem[]>([])
const getHomeCategoryDate = async () => {
  const res = await getHomeCategoryAPI()
  categoryList.value = res.result
}
onLoad(() => {
  getHomeBannerDate()
  getHomeCategoryDate()
})
</script>

<template>
  <CoustomNavbar />
  <XtxSwiper :list="bannerList" />
  <CategoryPanel :list="categoryList" />
  <view class="index">index </view>
</template>

<style lang="scss">
// 修改小程序的颜色 类似html5中为body指定颜色
page {
  background-color: #f7f7f7;
}
</style>
