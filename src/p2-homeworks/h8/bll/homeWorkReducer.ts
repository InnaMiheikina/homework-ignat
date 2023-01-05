import {UserType} from "../HW8";

type SortAT = {
    type: 'sort'
    payload: 'up' | 'down'
}
type DownAT = {
    type: 'down'
    payload: {}
}
type CheckAT = {
    type: 'check'
}

export type ActionType = SortAT | DownAT | CheckAT

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                 return [...state].sort((a,b) =>a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1)
            } else if (action.payload === 'down') {
              return [...state].sort((a,b) =>a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1).reverse()
            }
            return state
        }

        case 'check': {
            return state.filter(o => o.age > 18).sort((a,b)=> a.age-b.age)
        }
        default:
            return state
    }
}