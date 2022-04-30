/*
 * @Author: vacrain
 * @Date: 2022-04-30 07:58:35
 * @LastEditors: vacrain
 * @LastEditTime: 2022-04-30 15:51:16
 * @FilePath: /steppp/src/base/typings/package.d.ts
 * @Description:
 *
 */
/// <reference types="@amap/amap-jsapi-types" />
/// <reference types="bmapgl" />

declare namespace BMap {
    class Map extends BMapGL.Map {}
    class Point extends BMapGL.Point {}
}

declare const TMap: any
