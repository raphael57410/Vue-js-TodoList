<template>
  <div>
    <div class="flex mb-4 items-center">
      <p
        @click="$router.push('/todos/' + todo._id)"
        class="w-full text-gray-900"
        :class="{ 'line-through': todo.done }"
      >
        {{ todo.description }}
      </p>
      <button
        @click="editTodo({ ...todo, done: !todo.done })"
        class="flex p-2 ml-4 mr-2 border-2 rounded hover:text-white"
        :class="{
          'border-green-500 hover:bg-green-500 text-green-500 border-green-500 hover:bg-green-500':
            todo.done,
          'text-gray-500 border-gray-500 hover:bg-gray-500 ': !todo.done,
        }"
      >
        {{ todo.done ? "Fait" : "À faire" }}
      </button>
      <button
        @click="removeTodo(todo._id)"
        class="
          flex
          p-2
          ml-2
          border-2
          rounded
          text-red-500
          border-red-500
          hover:text-white hover:bg-red-500
        "
      >
        Supprimer
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data() {
    return {
      isEditing: false,
      description: this.$props.todo.description,
    };
  },
  updated() {
    console.log("update");
  },
  props: {
    todo: Object,
  },
  methods: {
    ...mapActions(["editTodo", "removeTodo"]),
  },
};
</script>
