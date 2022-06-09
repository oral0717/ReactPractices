export interface StateProps {
  id: number
  text: string
  isFinished: boolean
}
export interface ActionProps {
  type: string
  [key: string]: any
}
export default function aReducer(state: StateProps[], action: ActionProps) {
  switch (action.type) {
    case 'ADD':
      return [...state, action.todo]
    case 'CHANGE_FINISHED':
      return state.map(item => {
        if (item.id === action.id) {
          return Object.assign({}, item, {
            isFinished: !item.isFinished
          })
        }
        return item
      })
    default:
      return state
  }
}