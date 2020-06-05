<template>
  <div class="home container-fluid">
    <div class="row text-center text-light">
      <div class="col-12">
        <h1>Blog This!</h1>
        <div class="row display-flex justify-content-center">
          <div class="col-6">
            <form action @submit.prevent="creatPost">
              <input type="text" class="form-control" placeholder="Title" />
              <input type="text" class="form-control" placeholder="ImgUrl" />
              <label>Blog Post</label>
              <textarea class="form-control" placeholder="Blog away Brothas and Sistas" rows="8"></textarea>
              <button type="submit" class="btn btn-outline-success">Submit</button>
            </form>
            <div class="row">
              <div class="col-9">
                <ul>
                  <li>Title-{{posts}}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Post from "@/components/PostComponent.vue";
export default {
  name: "home",
  data() {
    return {
      newPost: {}
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    }
  }
};
</script>
