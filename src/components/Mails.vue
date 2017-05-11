<template lang="html">
  <div class="mails container">
    <div class="row" v-if="!recipient">
      <div class="col-lg-12">
        닉네임을 입력하여 체크인을 해주세요.
      </div>
    </div>
    <div class="row" v-else-if="!mails || mails.length === 0">
      <div class="col-lg-12">
        <h3 class="text-center">({{ recipient }}@sh8.email)로 메일을 보내주세요</h3>
        <h1 class="text-center"><icon name="envelope" class="icon-envelope"></icon></h1>
      </div>
    </div>
    <div class="list-group maillist-content-list-group" v-else>
      <router-link class="list-group-item" :to="{ name: 'Mail', params: { id: mail.id } }" v-for="mail in mails" :key="mail.id">
        <div class="row">
          <div class="col-xs-10 col-sm-10 col-md-11 col-lg-11 col-xl-11">
            <div class="row">
              <div class="col-lg-10">
                {{ mail.from[0] | formatAddress }}
                <span class="glyphicon glyphicon-lock" v-if="mail.isSecret"></span>
              </div>
              <div class="col-lg-2 text-right">{{ moment(mail.date).fromNow() }}</div>
            </div>
            <div class="row h4">
              <div class="col-lg-12">
                {{ mail.subject.substring(0, 50) }}
              </div>
            </div>
            <div class="row">
              <div class="col-lg-12" v-if="mail.isSecret">
              </div>
              <div class="col-lg-12" v-else-if="mail.text">
                {{ mail.text.substring(0, 200) }}
              </div>
            </div>
          </div>
          <div class="col-xs-2 col-sm-2 col-md-1 col-lg-1 col-xl-1 text-right deco-right-arrow">&gt;</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'

import 'vue-awesome/icons/envelope'
import Icon from 'vue-awesome/components/Icon'

import formatAddress from '../utils/formatAddress'

export default {
  data () {
    return {
      recipient: this.$route.params.recipient,
      mails: []
    }
  },
  created: function () {
    this.fetchMails()
  },
  filters: {
    formatAddress
  },
  methods: {
    moment: function (...args) {
      return moment(...args)
    },
    fetchMails: function () {
      const that = this
      const recipient = this.recipient
      axios.get(`${process.env.API_URL}/recipient/${recipient}/mails`).then(function (res) {
        that.mails = res.data
      }).catch(function (err) {
        // TODO change this with proper error handling
        console.error(err)
      })
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
