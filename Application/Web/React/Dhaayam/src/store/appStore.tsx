export default function Reducers(state: object = {}, action: { type: string, data: {} }) {
    switch (action.type) {
        case 'dispatch':
            return { ...state, ...action.data };
        default:
            return state;
    }
}