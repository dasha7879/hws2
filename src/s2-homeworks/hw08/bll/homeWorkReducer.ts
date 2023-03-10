import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            if(action.payload == 'up'){
                let copy = [...state]
                let sortArrayUp = copy.sort((a,b) => a.name.localeCompare(b.name))
               return sortArrayUp 
            }else{
                let copy = [...state]
                let sortArrayDown = copy.sort((a,b) => b.name.localeCompare(a.name))
                return sortArrayDown 
            }
        }
        case 'check': {
            let CheckArray = state.filter((el: { age: number; }) => el.age >= 18)
    
            return CheckArray 
        }
        default:
            return state
    }
}
