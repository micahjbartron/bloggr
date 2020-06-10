import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    profile: {},
    blogs: [],
    activeBlog: [],
    myBlogs: [],
    comments: []
  },
  mutations: {
    setProfile(state, profile) {
      state.profile = profile;
    },
    setMyBlogs(state, myBlogs) {
      state.myBlogs = myBlogs
    },
    setBlogs(state, data) {
      state.blogs = data
    },
    setActiveBlog(state, data) {
      state.activeBlog = data
    },
    addBlogs(state, blog) {
      state.blogs.push(blog)
    },
    addComments(state, comment) {
      state.comments.push(comment)
    }
  },
  actions: {
    setBearer({ }, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
    async myBlogs() {
      try {
        let res = await api.get("profile/blogs")
        this.commit("setMyBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getBlogs({ commit, dispatch }) {
      try {
        let res = await api.get("blogs")
        commit("setBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async getFullBlog({ commit, dispatch }, id) {
      try {
        let res = await api.get('blogs/' + id)

        commit("setActiveBlog", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createBlogEntry({ commit, dispatch }, blog) {
      try {
        let res = await api.post('blogs', blog);
        commit("addBlogs", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async createCommentEntry({ commit, dispatch }, comment) {
      try {
        debugger
        let res = await api.post('comments', comment);
        commit("addComments", res.data)
      } catch (error) {
        console.error(error)
      }
    },
    async deleteBlogPost({ commit, dispatch }, id) {
      try {

        let res = await api.delete('blogs/' + id)
        router.push({ name: "Home" })
      } catch (error) {
        console.error(error)
      }
    }

  }
});
