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

            <button class="btn btn-outline-danger" v-if="isCreator" @click="deleteBlogPost">Delete</button>
            <button class="btn btn-outline-secondary" v-if="isCreator" @click="editBlogPost">Edit</button>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form action @submit.prevent="createCommentEntry">
          <textarea
            class="form-control"
            placeholder="Comment..."
            v-model="newComments.body"
            rows="4"
          ></textarea>
          <button type="submit" class="btn btn-outline-success">Submit</button>
        </form>
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
// import Comment from "@/components/CommentComponent.vue";
export default {
  name: "Profile",
  data() {
    return {
      newComments: {
        body: ""
      }
    };
  },
  mounted() {
    this.$store.dispatch("getFullBlog", this.$route.params.id);
    this.$store.dispatch("getProfile", this.$auth.userInfo);
    this.$store.dispatch("myBlogs", this.$auth.userInfo);
    this.$store.dispatch("createCommentEntry", this.$rout.params.id);
  },
  computed: {
    profile() {
      return this.$store.state.profile;
    },
    comments() {
      return this.$store.state.comments;
    },
    blog() {
      return this.$store.state.activeBlog;
    },
    isCreator() {
      return this.$store.state.profile.email == this.blog.blog.creatorEmail;
    }
  },
  methods: {
    deleteBlogPost() {
      this.$store.dispatch("deleteBlogPost", this.blog.blog);
    },
    createCommentEntry(data) {
      this.$store.dispatch("createCommentEntry", this.blog.blog, {
        ...this.newComments
      });
      this.newComments = {};
    }
  },
  components: {
    Comment
  }
};
</script>

<style>
</style>