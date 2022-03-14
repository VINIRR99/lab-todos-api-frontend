import axios from "axios";

class TodosApi {
    constructor () {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_TODOS_KEY}/todo` });
    };
    getTodos = async () => {
        try {
            const { data } = await this.api.get("/");
            return data;
        } catch (error) {throw new Error(`Cannot get "Todos" => ${error}`)}
    };
    postTodo = async todo => {
        try {
            const { data } = await this.api.post("/", { title: todo });
            return data;
        } catch (error) {throw new Error(`Error while creating "${todo}": ${error}`)};
    };
};

export const todosApi = new TodosApi();