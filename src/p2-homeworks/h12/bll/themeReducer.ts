

const initState: {theme:string} = {
    theme:'some'
};

export const themeReducer = (state:{theme:string} = initState, action: changeThemType): {theme:string} => { // fix any
    switch (action.type) {
        case 'THEM-CHANGE': {
            return {
                ...state, theme:action.theme
            };
        }
        default: return state;
    }
};

export const changeThemeC = (theme:string): any => ({type:'THEM-CHANGE',theme}as const); // fix any
type changeThemType = ReturnType<typeof changeThemeC>