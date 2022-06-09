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
const MyContext = createContext({ color: 'red' })
export default MyContext