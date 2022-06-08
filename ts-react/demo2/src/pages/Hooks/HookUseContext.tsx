
// 1.创建context,如本文件
// 2.根组件App下加入提供者
/* <HookUseContext.Provider value={{ color: 'red' }}>
      {useRoutes(router)}//子组件都可以使用context数据
    </HookUseContext.Provider> */
// 3.子组件使用方式：
// import HookUseContext from './HookUseContext'
// const colorObj = useContext(HookUseContext)

import { createContext } from 'react'
// const themes = {
//   light: {
//     foreground: "#000",
//     background: "#eee"
//   },
//   dark: {
//     foreground: "#fff",
//     background: "#222"
//   }
// }
// const MyContext = createContext(themes)
const MyContext = createContext({ color: "red" })
export default MyContext