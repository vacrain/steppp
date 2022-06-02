/*
 * @Author: vacrain
 * @Date: 2022-04-30 07:58:35
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-30 15:51:43
 * @FilePath: /steppp/src/base/typings/utils.d.ts
 * @Description:
 *
 */
declare namespace TypeUtil {
  type Noop = (...args: any) => any

  type GetFunArgs<F extends Noop> = F extends (...args: infer P) => any ? P : never

  type GetFunReturn<F extends Noop> = F extends (...args: any) => infer R ? R : never
}
