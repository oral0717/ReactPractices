export default function reducer(state: any, action: any) {
  switch (action.type) {
    case 'add':
      return { ...state, count: state.count + 1 }
    case 'sub':
      return { ...state, count: state.count - 1 }
    default:
      return state
  }
}