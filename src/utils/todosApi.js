import axios from "axios";

class TodosApi {
    constructor () {
        this.api = axios.create({ baseURL: `${process.env.REACT_APP_TODOS_KEY}/todo` });
        this.testAxios = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1" });
    };
    test = async () => {
        try {
            const { data: { meals } } = await this.testAxios.get("/filter.php?c=Seafood");
            return meals;
        } catch (error) {throw new Error(`Cannot get Recipes => ${error}`)};
    };
    getTodos = async () => {
        try {
            const response = await this.api("/");
            return response;
        } catch (error) {throw new Error(`Cannot get "Todos" => ${error}`)}
    };
};

export const todosApi = new TodosApi();