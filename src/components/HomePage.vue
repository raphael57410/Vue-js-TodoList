<template>
  <div class="container mx-auto flex flex-col items-center py-12 sm:py-24">
    <div
      class="
        w-11/12
        sm:w-2/3
        lg:flex
        justify-center
        items-center
        flex-col
        mb-5
        sm:mb-10
      "
    >
      <h1
        class="
          text-2xl
          sm:text-3xl
          md:text-4xl
          lg:text-5xl
          xl:text-6xl
          text-center text-gray-800
          font-black
          leading-7
          md:leading-10
        "
      >
        Ceci est ma
        <span class="text-blue-500">Page d'accueil</span>
      </h1>
      <p
        class="
          mt-5
          sm:mt-10
          lg:w-10/12
          text-gray-400
          font-normal
          text-center text-sm
          sm:text-lg
        "
      >
        C'est une page à part entière sur la route /. Pour atteindre ma todo
        liste je vais vers /todos
      </p>
    </div>
    <form
      class="flex flex-col m-5"
      method="POST"
      v-on:submit.prevent="
        () => {
          onSubmit(email);
          email = '';
        }
      "
    >
      <label class="text-center" for="email">Qui êtes-vous ?</label>
      <input
        type="text"
        v-model="email"
        class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          mb-3
          focus:text-gray-700
          focus:bg-white
          focus:border-blue-600
          focus:outline-none
        "
        id="email"
        placeholder="Entrez votre email"
      />
      <button
        class="
          flex-shrink-0
          bg-teal-500
          hover:bg-teal-700
          border-teal-500
          hover:border-teal-700
          text-sm
          border-4
          text-white
          py-1
          px-2
          rounded
        "
        type="submit"
      >
        Envoyer
      </button>
    </form>
    <div class="flex justify-center items-center">
      <router-link to="/todos">
        <button
          v-if="this.$store.state.isConnected"
          class="
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-blue-500
            bg-blue-500
            transition
            duration-150
            ease-in-out
            hover:bg-blue-600
            lg:text-xl lg:font-bold
            rounded
            text-white
            px-4
            sm:px-10
            border border-blue-500
            py-2
            sm:py-4
            text-sm
          "
        >
          Page Todo
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { mapActions } from "vuex";
import { VueReCaptcha } from "vue-recaptcha-v3";
Vue.use(VueReCaptcha, { siteKey: "6LdXTFgfAAAAAO1H5GjmTJDeopkOd1avXzqa4rRz" });

export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    ...mapActions(["onSubmit"]),
    async captcha() {
      // (optional) Wait until recaptcha has been loaded.
      await this.$recaptchaLoaded();

      // Execute reCAPTCHA with action "login".
      const token = await this.$recaptcha("login");

      // Do stuff with the received token.
      console.log(token);
    },
  },
  name: "HomePage",
};
</script>