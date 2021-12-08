import axios from 'axios'
import Swal from 'sweetalert2'

const task = {
    namespaced: true,
    state: {
        tasks: [],
    },
    getters: {
        alltask(state) {
            return state.tasks
        }
    },
    mutations: {
        ftodos(state, aray) {
            state.tasks = aray
        },
        createtodos(state, task) {
            console.log(task);
            state.tasks.unshift(task);
        },
        updatetodo(state, updateTask) {
            console.log(updateTask);
            const index = state.tasks.findIndex(task => task.id == updateTask.id);
            if (index != -1) {
                state.tasks.splice(index, 1, updateTask)
            }
        },
        delTodos(state, deltask) {
            const index = state.tasks.findIndex(task => task.id == deltask.id)
            if (index != -1) {
                state.tasks.splice(index, 1)
            }
        }
    },
    actions: {

        async gtodos({ commit }) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
                commit('ftodos', response.data);
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
                console.log(error)
            }
        },
        async filtertask({ commit }, limit) {
            try {
                const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);
                commit('ftodos', response.data);
            } catch (error) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Do you want to continue',
                    icon: 'error',
                    confirmButtonText: 'ok'
                })
                console.log(error)
            }
        },
        async createTask({ commit }, title) {
            try {
                const response = await axios.post("https://jsonplaceholder.typicode.com/posts/", {
                    title,
                    completed: true
                })
                commit('createtodos', response.data)
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Task Added',
                    toast: true,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 2000
                })
            } catch (error) {}
        },
        async updateTask({ commit }, task) {
            try {
                const response = await axios.put(`https://jsonplaceholder.typicode.com/posts/${task.id}`, {
                    id: task.id,
                    title: task.title,
                    completed: !task.completed
                })
                console.log("hhhhh")
                commit('updatetodo', response.data)
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'Task Updated',
                    toast: true,
                    showConfirmButton: false,
                    timerProgressBar: true,
                    timer: 2000
                })
            } catch (error) {
                console.log(error)
            }
        },
        async DelTask({ commit }, task) {
            // console.log(commit, task)
            try {
                // console.log("aaaaa")
                const response = await axios.delete(`https://jsonplaceholder.typicode.com/todos/${task.id}`)
                commit("delTodos", task);

                Swal.fire({
                    position: 'top',
                    icon: 'warning',
                    title: 'Your Delete Task Success',
                    toast: true,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    timer: 2000
                })
            } catch (error) {
                console.log(error)
            }
        }
    },
}
export default task;