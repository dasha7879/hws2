import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name

            return state // need to fix
        }
        case 'check': {
            let CheckArray = state.filter((el: { age: number; }) => el.age >= 18)
    
            return CheckArray 
        }
        default:
            return state
    }
}
