import axios from "axios";

export const connectRequest = async (email) => {
    return await axios.post("http://localhost:3000/api/v1/users/login", { body: { email } })
        .then((response) => {
            return response.status;
        })
        .catch((error) => {
            console.log("Error fetch", error);
        });
}

export const fetchAllRequest = (storeDispatch) => {
    axios.get("http://localhost:3000/api/v1/todos")
        .then((response) => {
            storeDispatch("initData", response.data.reverse());
        })
        .catch((error) => {
            console.log("Error fetch", error);
        });
}

export const addTodoRequest = (newTodo, state) => {
    axios.post("http://localhost:3000/api/v1/todos/add", { body: { ...newTodo } })
        .then((response) => {
            state.todos.unshift(response.data);
        })
        .catch((error) => {
            console.log("Error fetch", error);
        });
}

export const editTodoRequest = (editTodo) => {
    axios.put("http://localhost:3000/api/v1/todos/edit", { body: { ...editTodo } })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            console.log("Error fetch", error);
        });
}

export const removeTodoRequest = (todoId) => {
    fetch(`http://localhost:3000/api/v1/todos/delete/${todoId}`, {
        method: "DELETE",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        mode: "cors",
        cache: "default",
    })
        .then((res) => {
            if (res.ok) return res.json();
            return Promise.reject(res);
        })
        .then((response) => {
            console.log(response.body);
        })
        .catch((error) => {
            console.log("Error fetch", error);
        });

}