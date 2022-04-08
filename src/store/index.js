import Vue from "vue"
import Vuex from "vuex"
// import { getData, } from '../../services/persistService';
import { addTodoRequest, editTodoRequest, removeTodoRequest, connectRequest } from '@/requests';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isConnected: false,
    currentPage: 1,
    pageSize: 5,
    todos: [],
  },
  getters: {
    newId(state) {
      if (state.todos.length > 0) return state.todos[0]._id;
      return 1;
    },
    getById: (state) => (id) => {
      return state.todos.find(todo => todo._id === id);
    },
    progressBarPct(state) {
      if (state.todos.length > 0) {
        return Math.floor(state.todos.filter((todo) => todo.done).length * 100 / state.todos.length);
      }
      return 0;
    },
    todosOfCurrentPage(state) {
      return state.todos.slice(state.pageSize * (state.currentPage - 1), state.pageSize * state.currentPage);
    },
    lastPage(state) {
      return Math.ceil(state.todos.length / state.pageSize);
    }
  },
  mutations: {
    initData(state, todos) {
      state.todos = todos;
    },
    setPage(state, page) {
      state.currentPage = page;
    },
    addTodo(state, newTodo) {
      addTodoRequest(newTodo, state);
    },
    editTodo(state, updatedTodo) {
      state.todos.splice(state.todos.findIndex(todo => todo._id === updatedTodo._id), 1, updatedTodo);
      editTodoRequest(updatedTodo);
    },
    removeTodo(state, todoId) {
      state.todos.splice(state.todos.findIndex(todo => todo._id === todoId), 1);
      removeTodoRequest(todoId);
    },
    async onSubmit(state, email) {
      //! mettre le state a true si on trouve un user ne fonctionne pas
      const userAuth = await connectRequest(email);
      if (userAuth === 200) state.isConnected = true;
    },
  },
  actions: {
    initData({ commit }, initialTodos) {
      // const initialTodos = getData("todos");
      commit("initData", initialTodos ? initialTodos : []);
    },
    setCurrentPage({ commit, getters }, page) {
      if (page <= 0) commit("setPage", 1);
      else if (page > getters.lastPage) commit("setPage", getters.lastPage);
      commit("setPage", page);
    },
    addTodo({ commit, getters }, descriptionObj) {
      if (descriptionObj.description) {
        commit("addTodo", {
          ...descriptionObj,
          _id: getters.newId,
          done: false
        });
        //setData("todos", state.todos);
      }
    },
    editTodo({ commit }, updatedTodo) {
      commit("editTodo", updatedTodo);
      // setData("todos", state.todos);
    },
    removeTodo({ commit }, todoId) {
      commit("removeTodo", todoId);
      //setData("todos", state.todos);
    },
    onSubmit({ commit }, email) {

      commit("onSubmit", email);
    },
  },
});

export default store;
