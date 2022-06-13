// 自定义hook
import { useDebugValue, useState } from 'react'

export function useMyHook() {
  const [count, setCount] = useState(0)
  useDebugValue(count > 6 ? 'count>6' : 'count<=6') // 调试自定义hook,devtools中Components tab下查看
  const setMyCount = () => {
    setCount(count + 2)
  }
  return [count, setMyCount] as const
}

