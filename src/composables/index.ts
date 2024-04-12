import { useAddressStore } from './../stores/modules/address'
// src/composables/index.ts

import { getMemberAddressAPI } from '@/services/address'
import { getHomeBannerAPI } from '@/services/home'
import type { AddressItem } from '@/types/address'
import type { XtxGuessInstance } from '@/types/component'
import type { BannerItem } from '@/types/home'
import { ref } from 'vue'

/**
 * 猜你喜欢组合式函数
 */
export const useGuessList = () => {
  // 获取猜你喜欢组件实例
  const guessRef = ref<XtxGuessInstance>()

  // 滚动触底事件
  const onScrolltolower = () => {
    guessRef.value?.getMore()
  }

  // 返回 ref 和事件处理函数
  return { guessRef, onScrolltolower }
}

// 获取轮播图函数
export const useBannerList = () => {
  const bannerList = ref<BannerItem[]>([])
  const getBannerData = async () => {
    const res = await getHomeBannerAPI(2)
    bannerList.value = res.result
  }

  return { getBannerData, bannerList }
}

// 获取收货地址列表数据
export const useAddressList = () => {
  const addressList = ref<AddressItem[]>([])
  const getMemberAddressData = async () => {
    const res = await getMemberAddressAPI()
    addressList.value = res.result
  }
  return { addressList, getMemberAddressData }
}
