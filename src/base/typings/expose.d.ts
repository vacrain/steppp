/*
 * @Author: vacrain
 * @Date: 2022-04-30 07:58:35
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-30 15:51:09
 * @FilePath: /steppp/src/base/typings/expose.d.ts
 * @Description:
 *
 */
/** vue 的defineExpose导出的类型 */
declare namespace Expose {
    interface BetterScroll {
        instance: import('@better-scroll/core')
    }
}
