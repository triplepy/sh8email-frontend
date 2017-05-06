<template lang="html">
  <div class="mails container">
    <div class="row" v-if="!recipient">
      <div class="col-lg-12">
        닉네임을 입력하여 체크인을 해주세요.
      </div>
    </div>
    <div class="row" v-else-if="!mails">
      <div class="col-lg-12">
        <h3 class="text-center">({{ recipient }}@sh8.email)로 메일을 보내주세요</h3>
        <h1 class="text-center"><icon name="envelope" class="icon-envelope"></icon></h1>
      </div>
    </div>
    <div class="list-group maillist-content-list-group" v-else>
      <a class="list-group-item" href="{% url 'web:detail' mail.id %}" v-for="mail in mails">
        <div class="row">
          <div class="col-xs-10 col-sm-10 col-md-11 col-lg-11 col-xl-11">
            <div class="row">
              <div class="col-lg-10">
                {{ mail.sender }}
                <span class="glyphicon glyphicon-lock" v-if="mail.is_secret"></span>
              </div>
              <div class="col-lg-2 text-right">{{ mail.recip_date | naturaltime }}</div>
            </div>
            <div class="row h4">
              <div class="col-lg-12">
                {{ mail.subject | truncatechars:50 }}
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12">
                {% if not mail.is_secret and not mail.is_html %}
                  {{ mail.contents | striptags | truncatechars:200 }}
                {% endif %}
              </div>
            </div>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 text-right deco-right-arrow">&gt;</div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/envelope'
import Icon from 'vue-awesome/components/Icon'

export default {
  data () {
    return {
      recipient: this.$route.query.recipient,
      mails: null
    }
  },
  components: {
    Icon
  }
}
</script>

<style lang="css">
.deco-right-arrow {
  font-size: 4em;
}

.icon-envelope {
  width: 3.5em;
  height: auto;
}
</style>
