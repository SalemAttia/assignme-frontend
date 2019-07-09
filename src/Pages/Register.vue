<template>
  <layout :showheader="false" :footerheader="false">
    <div class="reg">
      <div class="container">
        <div class="row">
          <div class="col-md-8 col-md-offset-2">
            <div class="panel panel-default">
              <div class="panel-heading" style="text-shadow:0px 1px #333">Register</div>
              <div class="panel-body">
                <form class="form-horizontal" role="form" method="POST" action>
                  <div class="form-group">
                    <label for="name" class="col-md-4 control-label">Name</label>
                    <div class="col-md-6">
                      <input id="name" type="text" class="form-control" name="name" required autofocus/>
                      <span class="help-block">
                        <strong>User name</strong>
                      </span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="email" class="col-md-4 control-label">E-Mail Address</label>
                    <div class="col-md-6">
                      <input id="email" type="email" class="form-control" name="email" value required/>
                      <span class="help-block">
                        <strong>Email</strong>
                      </span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="password" class="col-md-4 control-label">Password</label>
                    <div class="col-md-6">
                      <input id="password" type="password" class="form-control" name="password" required />
                      <span class="help-block">
                        <strong>Password</strong>
                      </span>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="password-confirm" class="col-md-4 control-label">Confirm Password</label>
                    <div class="col-md-6">
                      <input id="password-confirm" type="password" class="form-control" name="password_confirmation" required />
                    </div>
                  </div>
                  <div class="form-group">
                    <div class="col-md-6 col-md-offset-4">
                      <button type="submit" class="btn btn-primary">Register</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from "../Layout/index.vue";
export default {
  name: "Register",
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
body {
  background-image: url(../assets/image/register.jpg);
  background-repeat: no-repeat;
  background-size: cover;
}
.help-block strong {
  opacity: 0.6;
}
.reg {
  position: relative;
  padding-top: 30px;
}
.panel-heading {
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
}
</style>
