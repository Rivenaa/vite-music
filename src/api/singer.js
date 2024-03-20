import { get } from '@/service/base'

export function getSingerList() {
  return get('/getSingerList ')
}
