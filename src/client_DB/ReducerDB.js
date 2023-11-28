export const Actions = {
    SIDEBAR_TOGGLE:"sidebar_toggle"
}

export default function ReducerDB(state,{actionType,payload}) {
    switch (actionType) {
        case Actions.SIDEBAR_TOGGLE:
            return {
                ...state,
                isSideBarOpen:payload,
            };
        // default:
        //     throw new Error();
        default:
            return state;
    }
}
