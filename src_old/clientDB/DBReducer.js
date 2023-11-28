// Actions
export const Actions={
    TOGGLE_MENU:"toggle_menu",
}
// Reducer
export const DBReducer=(state,action)=> {
    const {type,payload}=action;
    switch (type) {
        case Actions.TOGGLE_MENU: 
        return {
            ...state,
            isOpen: payload.isOpen
        }
        default:
            console.log("action type not found")
    }
}
