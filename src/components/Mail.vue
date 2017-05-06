<template lang="html">
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
import formatAddress from '../utils/formatAddress'

export default {
  data () {
    return {
      mail: {
        _id: 2,
        subject: 'This is subject2',
        from: [{
          address: 'fromaddr2@naver.com',
          name: 'Holly2'
        }],
        to: [{
          address: 'test2@sh8.email',
          name: 'Tester2'
        }],
        date: new Date('2017-01-10'),
        text: 'This is test text2',
        isSecret: true
      }
    }
  },
  filters: {
    formatAddress
  }
}
</script>

<style lang="css">
.detail-toolbar {
  padding-top: 2em;
  padding-bottom: 2em;
}
</style>
