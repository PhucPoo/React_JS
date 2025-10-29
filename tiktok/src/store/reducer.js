import { Set_Todo_Input,Add_Todo } from "./constants"
const initState={
    todos:[],
    todoInput:''
}

function reducer(state,action){
    switch (action.type){
        case Set_Todo_Input:
            return {
                ...state,
                todoInput:action.payload
            }
        case Add_Todo:
            return{
                ...state,
                todos:[...state.todos,action.payload]
            }
        default:
            throw new Error('Looix vc')
    }
}
export default reducer
export{initState}