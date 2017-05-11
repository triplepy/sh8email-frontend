<template lang="html">
  <!-- TODO Display secretCode input view if the mail is secret -->

  <div class="mail container">
    <div class="title">
      <div class="container">
        <h1 class="text-primary">{{ mail.subject }}</h1>
      </div>
    </div>

    <div class="container detail-content">
      <fieldset>
        <legend>
          <h4>
            <small>{{ mail.from[0] | formatAddress }}</small>
          </h4>
        </legend>
        <div v-html="mail.html" v-if="mail.html"></div>
        <div v-else-if="mail.text">{{ mail.text }}</div>
        <div v-else></div>
      </fieldset>
    </div>

    <div class="container detail-toolbar">
      <router-link class="btn back-btn" :to="{ name: 'Mails', params: { recipient: $route.params.recipient }}" role="button">← 뒤로</router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import formatAddress from '../utils/formatAddress'

export default {
  data () {
    return {
      mail: null,
      secret: false,
      recipient: this.$route.params.recipient,
      id: this.$route.params.id
    }
  },
  created: function () {
    this.fetchMail()
  },
  filters: {
    formatAddress
  },
  methods: {
    fetchMail: function () {
      const that = this
      const recipient = this.recipient
      const id = this.id
      axios.get(`${process.env.API_URL}/recipient/${recipient}/mails/${id}`).then(function (res) {
        that.mail = res.data
      }).catch(function (err) {
        if (err.response.status === 403) {
          that.secret = true
          return
        }

        // TODO change this with proper error handling
        console.error(err)
      })
    }
  }
}
</script>

<style lang="css">
.detail-toolbar {
  padding-top: 2em;
  padding-bottom: 2em;
}
</style>
