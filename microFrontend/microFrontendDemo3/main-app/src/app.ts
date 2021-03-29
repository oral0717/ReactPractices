import {useState} from 'react'
// export function useQiankunStateForSlave() {
//   const [masterState, setMasterState] = useState({
//     stateFrom: '主应用'
//   });

//   return {
//     masterState,
//     setMasterState,
//   };
// }
// src/App.ts
export function useQiankunStateForSlave() {
  const [globalState, setGlobalState] = useState({ dataName: 'oral' })
  const [ableState, setAbleState] = useState({ dataAge: 18 })
  // 实际给子应用调用修改 state 的方法
  // 传参和实现可以自定义, 子应用直接调用 setGlobalState 是不生效的, 所以才需要这个额外的方法, 这是一个坑
  const setGlobalStateHandle = (dataName: any) => { setGlobalState({ dataName }) }
  const setAbleStateHandle = (dataAge: any) => { setAbleState({ dataAge }) }
  return {
    globalState,
    setGlobalState,
    ableState,
    setAbleState,
    setGlobalStateHandle,
    setAbleStateHandle
  };
}
