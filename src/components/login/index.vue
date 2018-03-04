<template>
  <div>
    <h1>Login</h1>
    <input type="text" v-model="username">
    <input type="password" v-model="password">
    <span v-if="loading">Please wait...</span>
    <button type="button" name="button" @click="login">Login</button>
    <div v-if="loggedInFailed">Incorrect username and password.</div>
  </div>
</template>
<script>

import auth from '@src/utils/auth'

export default {
  data: () => ({
    loggedInFailed: false,
    loading: false,
    username: '',
    password: '',
  }),

  methods: {
    login() {


      console.log(process.env)
      // auth.login(this.username, this.password, (success) => {
      //   console.log(this.$router)
      //   console.log(this.$router.history.current.query.redirect)
      //   if (success) {
      //     this.$router.push(this.$router.history.current.query.redirect || '/dashboard')
      //     return;
      //   }
      //
      //   this.loggedInFailed = true
      //   this.clearFields()
      // })


      // this.loading = true;
      // let api = 'https://www.booknomads.com/api/v0/isbn/9789000010134'
      // // this.$router.router.go('/todo')
      // this.axios.get(api).then((response) => {
      //   this.book = response.data
      //   this.$router.push('/todo')
      //   this.loading = false;
      // })
    },

    clearFields() {
      this.username = ''
      this.password = ''
    }
  }

}
</script>
<style lang="scss" scoped>

</style>
