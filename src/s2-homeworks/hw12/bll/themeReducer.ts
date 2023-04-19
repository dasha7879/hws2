const initState = {
    themeId: 1,
}
export type stateType = {
    themeId: number
}

export const themeReducer = (state = initState, action:actionType): stateType => { 
    switch (action.type) {
        case 'SET_THEME_ID':
            return {...state, themeId:action.id}
        default:
            return state
    }
}


type actionType = {
    type: string,
    id: number
}
export const changeThemeId = (id: number): actionType => ({ type: 'SET_THEME_ID', id })

