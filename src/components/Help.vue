<template>
  <div class="help container">
    <div class="row help--item">
      <div class="col-lg-8">
        <img src="../assets/no_signup_required.gif" alt="가입없이 바로 메일을 받아볼 수 있습니다." class="img-responsive">
      </div>
      <div class="col-lg-4">
        <h4>가입없이 바로 받자!</h4>

        <p>
          메일을 받긴 해야 하는데 내 메일함이 더러워지는 것도 싫고, 메일 계정 하나 더 만들기도 귀찮죠?<br>
          sh8.email은 가입없이, 아무 계정으로나 바로 메일을 받아볼 수 있습니다.
        </p>

        <ul>
          <li>온라인 쇼핑몰에서 물건 구입할 때,</li>
          <li>이벤트 응모할 때,</li>
          <li>회원가입할 때,</li>
          <li>회원/로그인 기능 개발시 테스트할 때</li>
        </ul>
      </div>
    </div>
    <div class="row help--item">
      <div class="col-lg-8 col-lg-push-4">
        <img src="../assets/secret_mail.gif" alt="쉿메일을 사용하면 남들에게 메일을 보여주지 않을 수 있습니다." class="img-responsive">
      </div>
      <div class="col-lg-4 col-lg-pull-8">
        <h4>남 몰래 받고 싶을 땐!</h4>

        <p>
          가입없이 편하게 받고는 싶고, 남한테 보여주긴 싫고...<br>
          "쉿메일"로 메일에 비밀번호를 걸어보세요.
        </p>
      </div>
    </div>
    <div class="row help--item">
      <div class="col-lg-8">
        <img src="../assets/auto_delete.gif" alt="메일을 읽은 뒤에는 불편하지 않게 똑똑한 방식으로 지워줍니다." class="img-responsive">
      </div>
      <div class="col-lg-4">
        <h4>세상에서 가장 조용한 이메일</h4>

        <p>
          sh8.email로 전달된 메일은 읽지 않아도 24시간 후 자동으로 지워지고,
          읽은 후에는 불편하지 않도록 똑똑하게 알아서 지워줍니다.
        </p>

        <ul>
          <li>온라인 쇼핑몰에서 물건 구입할 때,</li>
          <li>이벤트 응모할 때,</li>
          <li>회원가입할 때,</li>
          <li>회원/로그인 기능 개발시 테스트할 때</li>
        </ul>
      </div>
    </div>

    <router-link role="button" class="btn btn-primary btn-lg btn-block help--button" :to="{name: 'Intro'}">인트로 화면으로 이동하기</router-link>
  </div>
</template>

<script>
export default {
  name: 'Help'
}
</script>

<style scoped>
.help--item {
  padding-top: 1em;
  padding-bottom: 2em;
}

.help--button {
    margin-bottom:1em;
}
</style>
