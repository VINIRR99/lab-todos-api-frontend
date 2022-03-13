import axios from "axios";

class TodosApi {
    constructor () {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_TODOS_KEY}/todo` });
    };
    getTodos = async () => {
        try {
            const { data } = await this.api("/");
            return data;
        } catch (error) {throw new Error(`Cannot get "Todos" => ${error}`)}
    };
};

export const todosApi = new TodosApi();