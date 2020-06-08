 <template>
  <div class="col-9">
    <ul>
      <li>
        <router-link
          :to="{name:'Blog', params: {id: blog.id }}"
        >TITLE-{{blog.title}} BLOG CREATOR-{{blog.creator.name}}</router-link>
      </li>
    </ul>
  </div>
</template>  

<script>
export default {
  name: "Blog",
  props: ["blog"]
};
</script>