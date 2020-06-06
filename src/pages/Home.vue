<template>
  <div class="home container-fluid">
    <div class="row text-center text-light">
      <div class="col-12">
        <h1>Blog This!</h1>
      </div>
    </div>
    <div class="row display-flex justify-content-center" v-if="$auth.isAuthenticated">
      <div class="col-6">
        <form action @submit.prevent="createBlogEntry">
          <input
            type="text"
            class="form-control"
            placeholder="Title"
            v-model="newBlogs.title"
            name="title"
          />
          <label>Blog Post</label>
          <textarea
            class="form-control"
            placeholder="Blog away Brothas and Sistas"
            v-model="newBlogs.body"
            rows="8"
          ></textarea>
          <button type="submit" class="btn btn-outline-success">Submit</button>
        </form>
      </div>
    </div>
    <div class="row">
      <div class="col-9">
        <ul>
          <li v-for="blog in blogs" :key="blog.id">
            <router-link
              :to="{name:'Blog', params: {id: blog.id }}"
            >TITLE-{{blog.title}} BLOG CREATOR-{{blog.creator.name}}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "@/components/PostComponent.vue";
export default {
  name: "home",
  mounted() {
    this.$store.dispatch("getBlogs");
  },
  data() {
    return {
      newBlogs: {
        title: "",
        body: ""
      }
    };
  },
  computed: {
    blogs() {
      return this.$store.state.blogs;
    }
  },
  methods: {
    createBlogEntry() {
      this.$store.dispatch("createBlogEntry", { ...this.newBlogs });
      this.newBlogs = {};
    }
  }
};
</script>
