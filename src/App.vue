<template>
  <div id="app">
    <nav class="navbar navbar-default" v-if="$route.name !== 'Intro'">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <router-link class="navbar-brand" to="/"><img src="./assets/logo.png" alt="sh8.email"><span>sh8.email </span><span class="badge">βETA</span></router-link>
        </div>

        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <form class="navbar-form navbar-right js-forms-submitform" role="search"
                method="post" action="{% url 'checkin' %}" >
            <div class="form-group">
              <div class="input-group">
                <input type="text" class="form-control" name="recipient"
                       placeholder="닉네임을 입력하세요" required="required">
                <span class="input-group-btn">
                  <button class="btn btn-default js-forms-submitbutton" type="button">메일 확인</button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </nav>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import url(//fonts.googleapis.com/earlyaccess/nanumgothic.css);

html, body {
  font-family: 'Nanum Gothic', sans-serif;
  word-break: keep-all; /* 한글 띄어쓰기를 경계로 줄바꿈. */
}

.navbar-brand > img {
  display: inline;
  margin-right: 0.3em;
}

.btn.btn-default.js-forms-submitbutton {
  margin-left: 10px;
}
</style>
