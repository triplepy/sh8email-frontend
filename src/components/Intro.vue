<template>
  <div class="intro">
    <form id="login" action="{% url 'checkin' %}" method="post" class="js-forms-submitform">
      <div class="cover-container">
        <div class="inner cover">
          <h1 class="cover-heading intro-cover-title">sh8.email <sup><i>βeta</i></sup></h1>
          <p class="lead">
            <label class="intro-cover-subtitle" for="">세상에서 가장 조용한 이메일</label>
          <div class="row">
            <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12">
              <div class="input-group">
                <div class="input-group input-group-lg">
                  <input type="text" name="recipient" id="recipient" class="form-control" placeholder="닉네임"
                         required="required" autofocus>
                  <span class="input-group-addon" id="basic-addon2">@sh8.email</span>
                </div>
              </div>
            </div>
          </div>
          </p>
          <p class="lead"><!-- 공백을 위함 --></p>
          <p class="lead">
            <div class="row">
              <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12">
                <button class="btn btn-lg btn-primary mailcheck js-forms-submitbutton">메일 확인</button>
              </div>
            </div>
          </p>
          <p class="lead">
            <div class="row">
              <div class="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12">
                <router-link to="help" class="btn btn-lg btn-default mailcheck">이게 뭐고, 어떻게 쓰는거죠?</router-link>
              </div>
            </div>
          </p>
          <a href="https://play.google.com/store/apps/details?id=org.triplepy.sh8email.sh8"><img class="playstore-img" src="../assets/playstore_badge.png" alt="Play Store에서 다운받기"></a>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'intro',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Source from https://getbootstrap.com/examples/cover/cover.css -->
<style scoped>
/*
 * Globals
 */

/* Links */
a,
a:focus,
a:hover {
  color: #fff;
}

/* Custom default button */
.btn-default,
.btn-default:hover,
.btn-default:focus {
  color: #333;
  text-shadow: none; /* Prevent inheritance from `body` */
  background-color: #fff;
  border: 1px solid #fff;
}

/* Extra markup and styles for table-esque vertical and horizontal centering */
.intro {
  display: table;
  width: 100%;
  height: 100%; /* For at least Firefox */
  min-height: 100%;
  -webkit-box-shadow: inset 0 0 100px rgba(0,0,0,.5);
          box-shadow: inset 0 0 100px rgba(0,0,0,.5);
}
.intro > form {
  display: table-cell;
  vertical-align: top;
}
.cover-container {
  margin-right: auto;
  margin-left: auto;
}

/* Padding for spacing */
.inner {
  padding: 30px;
}

/*
 * Base structure
 */
.intro {
   height: 100%;
   background-color: #333;
   color: #fff;
   text-align: center;
   text-shadow: 0 1px 3px rgba(0,0,0,.5);
 }

/*
 * Header
 */
.masthead-brand {
  margin-top: 10px;
  margin-bottom: 10px;
}

.masthead-nav > li {
  display: inline-block;
}
.masthead-nav > li + li {
  margin-left: 20px;
}
.masthead-nav > li > a {
  padding-right: 0;
  padding-left: 0;
  font-size: 16px;
  font-weight: bold;
  color: #fff; /* IE8 proofing */
  color: rgba(255,255,255,.75);
  border-bottom: 2px solid transparent;
}
.masthead-nav > li > a:hover,
.masthead-nav > li > a:focus {
  background-color: transparent;
  border-bottom-color: #a9a9a9;
  border-bottom-color: rgba(255,255,255,.25);
}
.masthead-nav > .active > a,
.masthead-nav > .active > a:hover,
.masthead-nav > .active > a:focus {
  color: #fff;
  border-bottom-color: #fff;
}

@media (min-width: 768px) {
  .masthead-brand {
    float: left;
  }
  .masthead-nav {
    float: right;
  }
}


/*
 * Cover
 */

.cover {
  padding: 0 20px;
}
.cover .btn-lg {
  padding: 10px 20px;
  font-weight: bold;
}


/*
 * Footer
 */

.mastfoot {
  color: #999; /* IE8 proofing */
  color: rgba(255,255,255,.5);
}


/*
 * Affix and center
 */

@media (min-width: 768px) {
  /* Pull out the header and footer */
  .masthead {
    position: fixed;
    top: 0;
  }
  .mastfoot {
    position: fixed;
    bottom: 0;
  }
  /* Start the vertical centering */
  .intro > form {
    vertical-align: middle;
  }
  /* Handle the widths */
  .masthead,
  .mastfoot,
  .cover-container {
    width: 100%; /* Must be percentage or pixels for horizontal alignment */
  }
}

@media (min-width: 992px) {
  .masthead,
  .mastfoot,
  .cover-container {
    width: 700px;
  }
}
</style>

<!-- Source from https://getbootstrap.com/examples/cover/cover.css -->
<style>
html, body {
  height: 100%;
}
</style>


<style scoped>
.input-group {
  text-align: center;
  width: 100%;
}

.form-control:focus {
  background-color: transparent;
}

.btn.mailcheck{
  width: 100%;
}

.intro-cover-subtitle {
  color: #999999;
}

.intro-cover-title {
  color: #FFFFFF;
}

.playstore-img {
  margin-top: 3em;
}
</style>

<style>
div#app {
  height: 100%
}
</style>
