import type { App, Plugin } from "vue";
export type SFCWithInstall<T> = T & Plugin;

/*
 * 定义一个withInstall方法处理以下组件类型问题
 * @param comp
 */
export default <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    // 获取组件名称
    const name = (comp as any).name || (comp as any).__name;
    // 注册组件
    app.component(name, comp as SFCWithInstall<T>);
  };
  return comp as SFCWithInstall<T>;
};
