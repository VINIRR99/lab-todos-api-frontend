import axios from "axios";

class TodosApi {
    constructor () {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_TODO_URL}/todo` });
    };
    
    getTodos = async () => {
        try {
            const { data } = await this.api.get("/");
            return data;
        } catch (error) {throw new Error(`Cannot get "Todos" => ${error}`)}
    };

    postTodo = async title => {
        try {
            const { data } = await this.api.post("/", { title });
            return data;
        } catch (error) {throw new Error(`Error while creating "${title}" => ${error}`)};
    };

    updateCompleted = async (id, toggle) => {
        try {
            const { data } = await this.api.put(`/${id}`, { completed: toggle });
            return data;
        } catch (error) {throw new Error(`Error while updating todo with id equal to "${id}" => ${error}`)};
    };

    deleteTodo = async id => {
        try {
            await this.api.delete(`/${id}`)
        } catch (error) {throw new Error(`Error while deleting todo with id equal to "${id}"  => ${error}`)};
    };
};

export default new TodosApi()