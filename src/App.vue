<template>
  <div class="min-h-screen flex flex-col">
    <HeaderEl />
    <div class="grow" style="background: #edf2f7">
      <router-view></router-view>
    </div>
    <FooterEl />
  </div>
</template>

<script>
import HeaderEl from "@/layouts/Header";
import FooterEl from "@/layouts/Footer";
import { fetchAllRequest } from "@/requests";

export default {
  name: "App",
  components: {
    FooterEl,
    HeaderEl,
  },
  created() {
    fetchAllRequest(this.$store.dispatch);
  },
};
</script>
