<template>
  <div class="component">
    <div class="card">
      <div class="card-body shadow">
        <h5 class="card-title text-center">Comments</h5>
        <p class="card-text">{{comment.creator.name}} - {{comment.body}}</p>

        <button class="btn btn-outline-danger" v-if="isCreator">Delete</button>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "Comment",
  props: [comment]
};
</script>


<style>
</style>