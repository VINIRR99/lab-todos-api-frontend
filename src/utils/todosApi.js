import axios from "axios";

class TodosApi {
    constructor () {
        this.testAxios = axios.create({ baseURL: "https://www.themealdb.com/api/json/v1/1" });
    };
    test = async () => {
        try {
            const { data: { meals } } = await this.testAxios.get("/filter.php?c=Seafood");
            return meals;
        } catch (error) {throw new Error(`Cannot get Recipes => ${error}`)};
    };
};

export const todosApi = new TodosApi();