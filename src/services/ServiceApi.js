import axios from "axios";
import {API_URL, JPA_API_URL} from "../Constants";


class ServiceApi{


    getAllMembers(){
        return axios.get(`${API_URL}/final`)
    }

    applySearchFilterQuery(postData){
        let data = Object.assign({}, postData);

        console.log(data)

        let percentageOfMembersMet = data["percentageOfMembersMet"]

        if(percentageOfMembersMet > 1)
            data["percentageOfMembersMet"] = percentageOfMembersMet * .01;

        return axios.post(`${API_URL}/filter`, data)
    }
/*
    deleteTodoById(name, id){
        return axios.delete(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }

    retrieveTodo(name, id){
        return axios.get(`${JPA_API_URL}/users/${name}/todos/${id}`)
    }

    updateTodo(name, id, todo){
        return axios.put(`${JPA_API_URL}/users/${name}/todos/${id}`, todo)
    }

    createTodo(name, id, todo){
        return axios.post(`${JPA_API_URL}/users/${name}/todos`, todo)
    }

 */


}

export default new ServiceApi()