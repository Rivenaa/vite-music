import { get } from '@/service/base'

export function getRecommend() {
  return get('/getRecommend')
}
