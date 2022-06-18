/*
 * @Author: vacrain
 * @Date: 2022-04-17 14:09:24
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-30 15:51:12
 * @FilePath: /steppp/src/base/typings/global.d.ts
 * @Description:
 *
 */
export {}
declare global {
  interface Window {
    $message: import('naive-ui').MessageApi
    $dialog: import('naive-ui').DialogApi
    $notification: import('naive-ui').NotificationApi
    $loadingBar: import('naive-ui').LoadingBarApi
  }
}

// from soybean-admin
interface Window {
  $loadingBar?: import('naive-ui').LoadingBarProviderInst
  $dialog?: import('naive-ui').DialogProviderInst
  $message?: import('naive-ui').MessageProviderInst
  $notification?: import('naive-ui').NotificationProviderInst
}

/** 通用类型 */
declare namespace Common {
  /**
   * 策略模式
   * [状态, 为true时执行的回调函数]
   */
  type StrategyAction = [boolean, () => void]
}

/** 构建时间 */
declare const PROJECT_BUILD_TIME: string
