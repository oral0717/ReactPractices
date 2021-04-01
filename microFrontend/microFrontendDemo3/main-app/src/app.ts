import {useState} from 'react'
import { initGlobalState, MicroAppStateActions } from 'qiankun';

// 使用 initGlobalState(state) 全局传值 start
// 初始化 state
const state = {
  way: 'initGlobalState(state)'
}
const actions: MicroAppStateActions = initGlobalState(state);
actions.onGlobalStateChange((state, prev) => { // 在当前应用监听全局状态，有变更触发 callback，fireImmediately = true 立即触发 callback
  // state: 变更后的状态; prev 变更前的状态
  console.log('主应用数据监听', state, prev);
});
actions.setGlobalState(state); // 设置全局数据
actions.offGlobalStateChange(); // 关闭子应用修改全局数据的通道， 移除当前应用的状态监听，微应用 umount 时会默认调用
// end

// useQiankunStateForSlave 名字固定
export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = useState({ dataName: 'useQiankunStateForSlave' })
  const [ableState, setAbleState] = useState({ dataAge: 18 })
  // 实际给子应用调用修改 state 的方法
  // 传参和实现可以自定义, 子应用直接调用 setGlobalState 是不生效的, 所以才需要这个额外的方法, 这是一个坑
  // const setGlobalStateHandle = (dataName: any) => { setGlobalState({ dataName }) }
  // const setAbleStateHandle = (dataAge: any) => { setAbleState({ dataAge }) }
  return {
    globalState,
    setGlobalState,
    ableState,
    setAbleState
    // setGlobalStateHandle,
    // setAbleStateHandle
  };
}
