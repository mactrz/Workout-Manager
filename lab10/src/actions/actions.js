import axios from 'axios';

export const get = () => async (dispatch) => {
    try {
        const todos = await axios.get('https://jsonplaceholder.typicode.com/todos');
        dispatch({type: 'GET', payload: todos.data});
    }

    catch(e) {
        console.log(e)
    }
}

export const post = (payload) => async (dispatch) => {
    try {
        const posted = await axios.post('https://jsonplaceholder.typicode.com/todos', {...payload})
        console.log(posted);
    }

    catch(e) {
        console.log(e);
    }
}

export const put = (payload) => async (dispatch) => {
    try {
        const posted = await axios.put('https://jsonplaceholder.typicode.com/todos/'+payload.id, {...payload.data})
        console.log(posted);
    }

    catch(e) {
        console.log(e);
    }
}

export const del = (payload) => async (dispatch) => {
    try {
        const posted = await axios.delete('https://jsonplaceholder.typicode.com/todos/'+payload)
        console.log(posted);
    }

    catch(e) {
        console.log(e);
    }
}

