<template>
  <layout :showheader="false" :footerheader="false">
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
                  <input
                    type="text"
                    class="username-input form-control"
                    name="email"
                    value
                    required
                    autofocus
                  />
                  <span class="help-block">
                    <strong>User Name</strong>
                  </span>
                </div>
              </div>

              <div class="form-group">
                <div class="col-md-12">
                  <input
                    id="password"
                    type="password"
                    class="password-input form-control"
                    name="password"
                    required
                  />
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
.intro {
  background-size: 100% 100% !important;
}
.intro .intro-body {
  padding: 192px 0;
}
.username-input {
  width: 81%;
  height: 42px;
  background: rgba(165, 42, 42, 0.06);
  color: #66afe9 !important;
}
.password-input {
  width: 81%;
  height: 42px;
  background: rgba(165, 42, 42, 0.06);
  color: #66afe9 !important;
}
.help-block strong {
  color: antiquewhite;
}

@media (min-width: 1370px) {
  .intro .intro-body {
    padding: 100vh 0;
  }
}

@media (min-width: 1362px) and (max-width: 1366px) {
  .intro .intro-body {
    padding: 192px 0;
  }
  .intro .intro-body .brand-heading {
    font-size: 34px;
  }
  .btn {
    letter-spacing: 1px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (min-width: 1297px) and (max-width: 1362px) {
  .intro .intro-body {
    padding: 187px 0;
  }
  .intro .intro-body .brand-heading {
    font-size: 34px;
  }
  .btn {
    letter-spacing: 1px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (min-width: 1201px) and (max-width: 1297px) {
  .intro .intro-body {
    padding: 187px 0;
  }
  .intro .intro-body .brand-heading {
    font-size: 34px;
  }
  .btn {
    letter-spacing: 1px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (min-width: 992px) and (max-width: 1201px) {
  .intro .intro-body {
    padding: 171px 0;
  }
  .intro .intro-body .brand-heading {
    font-size: 34px;
  }
  .btn {
    letter-spacing: 1px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (max-width: 1024px) and (max-height: 1366px) {
  .intro .intro-body {
    padding: 525.5px 0;
  }
  .intro {
    background-size: 100% 100% !important;
  }
  .intro .intro-body .brand-heading {
    font-size: 40px;
  }
  .btn {
    letter-spacing: 2px;
  }

  .help-block strong {
    font-size: 18px;
  }
}
@media (min-width: 954px) and (max-width: 991px) {
  .intro .intro-body {
    padding: 137px 0;
  }
  .intro .intro-body .brand-heading {
    font-size: 34px;
  }
  .btn {
    letter-spacing: 1px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (min-width: 771px) and (max-width: 953px) {
  .intro .intro-body {
    padding: 137px 0;
  }
  .intro .intro-body .brand-heading {
    font-size: 34px;
  }
  .btn {
    letter-spacing: 1px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (max-width: 800px) and (max-height: 1280px) {
  .intro .intro-body {
    padding: 442.5px 0;
  }
  .intro {
    background-size: 100% 100% !important;
  }
  .intro .intro-body .brand-heading {
    font-size: 40px;
  }
  .btn {
    letter-spacing: 2px;
  }
  .help-block strong {
    font-size: 20px;
  }
}
@media (max-width: 770px) {
  .intro .intro-body {
    padding: 143px 0;
  }
  .intro .intro-body .brand-heading {
    font-size: 34px;
  }
  .btn {
    letter-spacing: 1px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (max-width: 768px) and (max-height: 1024px) {
  .intro .intro-body {
    padding: 320.5px 0;
  }
  .intro {
    background-size: 100% 100% !important;
  }
  .intro .intro-body .brand-heading {
    font-size: 35px;
  }
  .btn {
    letter-spacing: 2px;
  }
  .help-block strong {
    font-size: 18px;
  }
}
@media (max-width: 414px) and (max-height: 736px) {
  .intro .intro-body {
    padding: 186.5px 0;
  }
  .intro {
    background-size: 100% 100% !important;
  }
  .intro .intro-body .brand-heading {
    font-size: 35px;
  }
  .btn {
    letter-spacing: 0;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (max-width: 411px) and (max-height: 1220px) {
  .intro .intro-body {
    padding: 396px 0;
  }
  .intro {
    background-size: 100% 100% !important;
  }
  .intro .intro-body .brand-heading {
    font-size: 34px;
  }
  .btn {
    letter-spacing: 1px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (max-width: 411px) and (max-height: 823px) {
  .intro .intro-body {
    padding: 230.5px 0;
  }
  .intro {
    background-size: 100% 100% !important;
  }
  .intro .intro-body .brand-heading {
    font-size: 34px;
  }
  .btn {
    letter-spacing: 1px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (max-width: 411px) and (max-height: 731px) {
  .intro .intro-body {
    padding: 184.5px 0;
  }
  .intro {
    background-size: 100% 100% !important;
  }
  .intro .intro-body .brand-heading {
    font-size: 34px;
  }
  .btn {
    letter-spacing: 1px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (max-width: 384px) and (max-height: 640px) {
  .intro .intro-body {
    padding: 140px 0;
  }
  .intro {
    background-size: 100% 100%;
  }
  .intro .intro-body .brand-heading {
    font-size: 32px;
  }
  .btn {
    letter-spacing: 2px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (max-width: 375px) and (max-height: 812px) {
  .intro .intro-body {
    padding: 223px 0;
  }
  .intro {
    background-size: 100% 100%;
  }
  .intro .intro-body .brand-heading {
    font-size: 31px;
  }
  .btn {
    letter-spacing: 2px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (max-width: 375px) and (max-height: 667px) {
  .intro .intro-body {
    padding: 151px 0;
  }
  .intro {
    background-size: 100% 100%;
  }
  .intro .intro-body .brand-heading {
    font-size: 31px;
  }
  .btn {
    letter-spacing: 2px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (max-width: 360px) and (max-height: 640px) {
  .intro .intro-body {
    padding: 144px 0;
  }
  .intro {
    background-size: 100% 100%;
  }
  .intro .intro-body .brand-heading {
    font-size: 25px;
  }
  .btn {
    letter-spacing: 0px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
@media (max-width: 320px) and (max-height: 568px) {
  .intro .intro-body {
    padding: 106.5px 0;
  }
  .intro {
    background-size: 100% 100%;
  }
  .btn {
    letter-spacing: 0px;
  }
  .intro .intro-body .brand-heading {
    font-size: 25px;
  }
  .help-block strong {
    font-size: 14px;
  }
}
</style>
