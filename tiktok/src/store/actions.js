import { Set_Todo_Input,Add_Todo} from "./constants";

export const setTodoInput = payload =>({
    type:Set_Todo_Input,
    payload
})
export const addTodo = payload =>({
    type:Add_Todo,
    payload
})