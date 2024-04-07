import { http } from '@/utils/http'
import type { PageParams } from '@/types/global'

type HotParams = PageParams & {
  // & 是类型合并符 用来合并不同数据类 类似继承概念 但其实是合并而不是继承
  /** Tab 项的 id，默认查询全部 Tab 项的第 1 页数据 */
  subType?: string
}
/**
 * 通用热门推荐类型
 * @param url 请求地址
 * @param data 请求参数
 */
export const getHotRecommendAPI = (url: string, data?: HotParams) => {
  return http({
    method: 'GET',
    url,
    data,
  })
}
