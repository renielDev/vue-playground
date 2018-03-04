<template>
  <div>
    <Header />
    <Sidebar />

    <router-link to="/dashboard">Main</router-link>
    <router-link to="/dashboard/todo">Todo</router-link>
    <router-link to="/dashboard/todo/item">Todo Item</router-link>
    <router-link to="/logout">Logout</router-link>

    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
import Header from '@components/partials/header'
import Footer from '@components/partials/footer'
import Sidebar from '@components/partials/sidebar'

export default {
  components: {
    Header, Footer, Sidebar
  },

}
</script>
<style lang="scss" scoped>
</style>
