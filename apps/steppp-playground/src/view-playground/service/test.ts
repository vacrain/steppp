/*
 * @Author: vacrain
 * @Date: 2022-06-02 00:47:33
 * @LastEditors: vacrain
 * @LastEditTime: 2022-06-02 07:38:29
 * @FilePath: /steppp-monorepo/apps/quan/src/view-playground/service/test.ts
 * @Description:
 *
 */

import { defineStore, acceptHMRUpdate } from 'pinia'
import { request } from '@/base/utils/request'

export const useTestStore = defineStore({
  id: 'test',
  state: () => ({
    message: 'test-msg',
  }),

  actions: {
    /**
     * @description: 测试
     * @return {*}
     */
    async test() {
      // TODO 报错先不用管，也不影响提交，eslint能通过，有空再看看
      const msg: string = (await request({ url: '/test' })) || ''

      this.$patch({ message: msg })

      return msg
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useTestStore, import.meta.hot))
}
