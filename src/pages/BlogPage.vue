<template>
  <div class="container fluid">
    <div class="row text-center my-2">
      <div class="col">
        <h2>Enjoy my Blog Post</h2>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <div class="card">
          <div class="card-body shadow">
            <h5 class="card-title">{{blog.blog.title}}</h5>

            <p class="card-text">{{blog.blog.body}}</p>

            <button class="btn btn-outline-danger" v-if="isCreator">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row my-2">
      <div class="col">
        <div class="card">
          <div class="card-body shadow">
            <h5 class="card-title text-center">Comments</h5>
            <p
              class="card-text"
              v-for="comment in blog.comments"
              :key="comment.id"
            >{{comment.creator.name}} - {{comment.body}}</p>

            <button class="btn btn-outline-danger" v-if="isCreator">Delete</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Profile",
  mounted() {
    this.$store.dispatch("getFullBlog", this.$route.params.id);
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },

    blog() {
      return this.$store.state.activeBlog;
    },
    isCreator() {
      return this.$store.state.profile.email == this.blog.creatorEmail;
    }
  },
  methods: {
    // deleteBlogPost() {
    //   this.$store.dispatch("deleteBlogPost", this.blog.id);
    // }
  }

  // comments(){

  // }
};
</script>

<style>
</style>