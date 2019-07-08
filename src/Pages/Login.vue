<template>
  <layout :showheader="false">
    <header class="intro">
      <div class="intro-body">
        <div class="container">
          <div class="col-md-7">
            <h1 class="brand-heading">
              Task
              <span class="color">Manager</span>
              <i class="fa fa-star-o"></i>
            </h1>
            <p class="intro-text">Work - haveFun (task manager)</p>
          </div>
          <div class="col-md-5">
            <form class="form-horizontal" role="form" method="POST" action>
              <div class="form-group">
                <div class="col-md-12">
                  <input type ="text" class="username-input form-control" name="email" value ="" required autofocus/>
                  <span class="help-block">
                    <strong>User Name</strong>
                  </span>
                </div>
              </div>

              <div class="form-group">
                <div class="col-md-12">
                  <input id="password" type="password" class="password-input form-control" name="password" required/>
                  <span class="help-block">
                    <strong>password</strong>
                  </span>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-12">
                  <div class="checkbox">
                    <label>
                      <input type="checkbox" name="remember" /> Remember Me
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-group">
                <div class="col-md-8">
                  <button type="submit" class="btn btn-primary">Login</button>

                  <a class="btn btn-link" href="#">Forgot Your Password?</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </header>
  </layout>
</template>

<script>
import Layout from "../Layout/index.vue";
export default {
  name: "Login",
  data() {
    return {
      msg: ""
    };
  },
  components: {
    Layout
  }
};
</script>

<style>
.intro .intro-body 
{
  padding: 192px 0;
}
.username-input
{
  width: 81%;
  height: 42px;
  background: rgba(165, 42, 42, 0.06); 
  color: #66afe9 !important;
}
.password-input
{
  width: 81%;
  height: 42px;
  background: rgba(165, 42, 42, 0.06); 
  color: #66afe9 !important;
}
.help-block strong
{
  color:antiquewhite;
}
@media (max-width: 768px)
section {
     padding: 0 !important;
}
</style>
