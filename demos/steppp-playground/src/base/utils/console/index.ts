/* eslint-disable no-console */

/** 打印log */
export const consoleLog = (message?: any, ...optionalParams: any[]) => {
  console.log(message, ...optionalParams)
}

/** 打印警告 */
export const consoleWarn = (message?: any, ...optionalParams: any[]) => {
  console.warn(message, ...optionalParams)
}

/** 打印错误 */
export const consoleError = (message?: any, ...optionalParams: any[]) => {
  console.error(message, ...optionalParams)
}

/// ////////////////////////////
// 克隆对象

// const cloneObj = (obj?: any) => {
//     let newObj = {};
//     // if (obj instanceof Array) {
//     //     newObj = [];
//     // } else newObj = {};

//     for (let key in obj) {
//         let val = obj[key];
//         // newObj[key] = typeof val === "object" ? cloneObj(val) : val;
//         newObj[key] = cloneObj(val);
//     }
//     return newObj;
// };

// export function deepMerge(...objs: any[]): any {
//     const result = Object.create(null)
//     objs.forEach(obj => {
//         if (obj) {
//             Object.keys(obj).forEach(key => {
//                 const val = obj[key]
//                 if (isPlainObject(val)) {
//                     // 递归
//                     if (isPlainObject(result[key])) {
//                         result[key] = deepMerge(result[key], val)
//                     } else {
//                         result[key] = deepMerge(val)
//                     }
//                 } else {
//                     result[key] = val
//                 }
//             })
//         }
//     })
//     return result
// }

// export function isPlainObject(val: any): val is Object {
//     return toString.call(val) === '[object Object]'
// }
