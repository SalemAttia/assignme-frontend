<template>
  <nav class="navbar navbar-custom navbar-fixed-top top-nav-collapse">
    <div class="container">
      <div class="navbar-header">
        <!-- Collapsed Hamburger -->
        <button
          type="button"
          class="navbar-toggle"
          data-toggle="collapse"
          data-target=".navbar-main-collapse"
        >
          <i class="fa fa-bars fa-2x"></i>
        </button>

        <!-- Branding Image -->

        <a class="navbar-brand page-scroll" href="/">
          Task
          <span class="color">Manager</span>
          <i class="fa fa-star"></i>
        </a>
      </div>

      <div class="collapse navbar-collapse" id="app-navbar-collapse">
        <!-- Left Side Of Navbar -->
        <ul class="nav navbar-nav">
          &nbsp;
          <li v-if="logged">
            <a href="/">Home</a>
          </li>

          <li v-if="logged">
            <a
              href="/board"
              v-if="logged"
              style="cursor: pointer;"
              class
              data-toggle="modal"
              data-target="#myModal"
            >Board</a>
          </li>
          <li v-if="logged">
            <a
              style="cursor: pointer;"
              class
              data-toggle="modal"
              data-target="#myModal2"
            >Add new user</a>
          </li>
        </ul>

        <!-- Right Side Of Navbar -->
        <ul class="nav navbar-nav navbar-right">
          <!-- Authentication Links -->
          <li v-if="!logged">
            <a href="/login">Login</a>
          </li>
          <li v-if="!logged">
            <a href="/register">Register</a>
          </li>
          <li v-if="logged">
            <a class="logbuton" @click="logout">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      msg: "",
      logged: false
    };
  },
  mounted() {
    if (localStorage.getItem("jwt") !== null) {
      this.logged = true;
    }
  },
  methods: {
    logout() {
      localStorage.removeItem("jwt");
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style lang="scss">
.logbuton {
  cursor: pointer;
}
</style>
