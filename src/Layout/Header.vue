<template>
  <nav class="navbar navbar-custom navbar-fixed-top top-nav-collapse">
            <div class="container">
                <div class="navbar-header">

                    <!-- Collapsed Hamburger -->
                     <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-main-collapse">
                <i class="fa fa-bars fa-2x"></i>
            </button>

                    <!-- Branding Image -->

                       <a class="navbar-brand page-scroll" href="/">
                Task<span class="color">Manager</span> <i class="fa fa-star"></i>
            </a>
                </div>

                <div class="collapse navbar-collapse" id="app-navbar-collapse">
                    <!-- Left Side Of Navbar -->
                    <ul class="nav navbar-nav">
                        &nbsp;
                        <li><a href="/">Home</a></li>

                        <li> <a style="cursor: pointer;" class="" data-toggle="modal" data-target="#myModal">
                   Add new Task
                 </a></li>
                  <li>
                       <a style="cursor: pointer;" class="" data-toggle="modal" data-target="#myModal2">
                   Add new user
                 </a>
                  </li>

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="nav navbar-nav navbar-right">
                        <!-- Authentication Links -->
                            <li><a href="/login">Login</a></li>
                            <li><a href="/register">Register</a></li>
                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                                   Salem <span class="caret"></span>
                                </a>

                                <ul class="dropdown-menu" role="menu">
                                    <li>
                                        <a href="/logout"
                                            onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                            Logout
                                        </a>

                                    </li>
                                </ul>
                            </li>
                    </ul>
                </div>
            </div>
        </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style lang="scss">

</style>
