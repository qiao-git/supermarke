<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '../src/views/components/header/index'
import Footer from '../src/views/components/footer/index'
export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  components: {
    Header,
    Footer
  }
}
</script>

<style>

</style>
