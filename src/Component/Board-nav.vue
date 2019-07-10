<template>
  <div>
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
            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a
                href="/board"
                style="cursor: pointer;"
                class
                data-toggle="modal"
                data-target="#myModal"
              >Board</a>
            </li>
            <li>
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
            <li>
              <a href="/login">Login</a>
            </li>
            <li>
              <a href="/register">Register</a>
            </li>
            <li class="dropdown">
              <a
                href="#"
                class="dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-expanded="false"
              >
                Salem
                <span class="caret"></span>
              </a>

              <ul class="dropdown-menu" role="menu">
                <li>
                  <a
                    href="/logout"
                    onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();"
                  >Logout</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>


<script>
export default {
  name: "boardnav",
  data() {
    return {};
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: #f4f5f7;
  background-image: url(../assets/image/background.jpg);
  background-repeat: no-repeat;
  background-size: auto;
  z-index: 0;
  height: 100%;
  position: relative;
  overflow-y: hidden;
}

::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

::-webkit-scrollbar-track {
  background-color: white;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: rgba(85, 150, 69, 1);
  transition: all 0.2s ease-in-out;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #172b4d;
  transition: all 0.2s ease-in-out;
}

.navbar {
  position: fixed;
  width: 100%;
  color: white;
}

.navbar-light .navbar-nav .nav-link {
  color: #cccccc !important;
}
/* .mr-auto {
    margin-right: 50% !important;
}
 */
.navbar {
  background-color: transparent !important;
}

.nav-item {
  background-color: rgb(128, 128, 128, 0.1);
  border-radius: 15%;
  margin: 5px;
}

.mr-sm-2 {
  background-color: rgb(128, 128, 128, 0.1);
}

.name {
  text-align: center;
  position: relative;
  margin-left: 55%;
  padding: 10px;
  background-color: rgb(128, 128, 128, 0.1);
  border-radius: 8%;
  line-height: 2em;
  font-size: medium;
  font-weight: 600;
  cursor: pointer;
}

.name:hover {
  color: #cccccccc;
  transition: all 0.2s ease-in-out;
}

.clear {
  clear: both;
}
</style>

