const initState = {
    loading:false
}
type initStateType = typeof initState
export const loadingReducer = (state:initStateType = initState, action: ActionType): initStateType => { // fix any
    switch (action.type) {
        case 'LOADING-VALUE' : {
            return {
                ...state, loading: !state.loading
            }
        }
        default: return state
    }
}

export const loadingAC = () =>( {type:'LOADING-VALUE'} as const)// fix any
export type LoadingACType = ReturnType<typeof loadingAC>
export type ActionType = LoadingACType