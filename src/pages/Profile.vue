<template>
  <div class="about text-center">
    <h1>Welcome {{ profile.name }}</h1>
    <img class="rounded" :src="profile.picture" alt />
    <p>{{ profile.email }}</p>
    <p></p>
    <ul>
      <li v-for="blog in myBlogs" :key="blog.id">
        <router-link :to="{name:'Blog', params: {id: blog.id }}">TITLE-{{blog.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Profile",
  mounted() {
    this.$store.dispatch("getProfile", this.$auth.userInfo);
    this.$store.dispatch("myBlogs", this.$auth.userInfo);
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },

    myBlogs() {
      return this.$store.state.myBlogs;
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100px;
}
</style>
