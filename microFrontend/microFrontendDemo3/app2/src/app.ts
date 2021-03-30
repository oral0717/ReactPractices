
// src/app.ts
export const qiankun = {
  // 应用加载之前
  async bootstrap(props: any) {
    console.log('app2 bootstrap', props);
  },

  // 应用 render 之前触发
  async mount(props: any) {
    console.log('app2 mount', props);
    const state = {
      way: 'app2 修改数据'
    }
    props.onGlobalStateChange((state: any, prev: any) => {
      // state: 变更后的状态; prev 变更前的状态
      console.log(state, prev);
    });
    props.setGlobalState(state);
  },

  // 应用卸载之后触发
  async unmount(props: any) {
    console.log('app2 unmount', props);
  },
};


