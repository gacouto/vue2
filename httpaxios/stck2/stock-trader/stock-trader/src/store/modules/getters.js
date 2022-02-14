export const getName = state => state.name
export const getCompleteName = state => state.name + state.middlename
export const getAllNames = state => {
    return state.name + state.middlename
}