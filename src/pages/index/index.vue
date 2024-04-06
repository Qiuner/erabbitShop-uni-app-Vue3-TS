<script setup lang="ts">
import { getHomeBannerAPI } from '@/services/home'
import CoustomNavbar from './components/CustomNavbar.vue'
import { ref } from 'vue'
import { onLoad } from '@dcloudio/uni-app'
import type { BannerItem } from '@/types/home'

const bannerList = ref<BannerItem[]>([])
const getHomeBannerDate = async () => {
  const res = await getHomeBannerAPI()
  bannerList.value = res.result
}
onLoad(() => {
  getHomeBannerDate()
})
</script>

<template>
  <CoustomNavbar />
  <XtxSwiper :list="bannerList" />
  <view class="index">index </view>
</template>

<style lang="scss"></style>
