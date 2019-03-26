<template>
  <main :class="{'navigation-is-open': nav, 'light': light}">
    <Nav v-on:navAction="displayNav"/>
    <section class="site-content">
      <div class="bck-page"></div>
      <slot/>
      <Footer/>
    </section>
    <RightSide/>
  </main>
</template>

<script>
import Vue from 'vue'
import nprogress from 'nprogress'
import Nav from '../Nav.vue'
import RightSide from '../RightSide.vue'
import Footer from '../Footer.vue'
import { resolveSidebarItems } from '../util'
export default {
  props: {
    light: {
      type: Boolean,
      default: false,
    }
  },
  data(){
    return {
      nav: false,
      isSidebarOpen: false,
    }
  },
  components: {
    Nav, RightSide, Footer, nprogress
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)

    // configure progress bar
    nprogress.configure({ showSpinner: false })

    this.$router.beforeEach((to, from, next) => {
      if (to.path !== from.path && !Vue.component(to.name)) {
        nprogress.start()
      }
      next()
    })

    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
      nprogress.done()
      this.nav = false;
    })
  },
  methods:{
    displayNav(){
      this.nav = !this.nav;
    }
  },
  computed:{
    shouldShowSidebar () {
      const { frontmatter } = this.$page
      return (
        !frontmatter.layout &&
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      )
    },
    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$route,
        this.$site,
        this.$localePath
      )
    },
    pageClasses () {
      const userPageClass = this.$page.frontmatter.pageClass
      return [
        {
          'no-navbar': !this.shouldShowNavbar,
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.shouldShowSidebar
        },
        userPageClass
      ]
    }
  }
}
</script>

<style src="prismjs/themes/prism-tomorrow.css"></style>
<style src="../websylvain-styles/base/spectre/spectre.min.css" lang="css"></style>
<style src="../websylvain-styles/base/spectre/spectre-icons.min.css" lang="css"></style>
<style src="../websylvain-styles/base/spectre/spectre-exp.min.css" lang="css"></style>
<style src="../websylvain-styles/app.styl" lang="stylus"></style>

<style lang="stylus">
.site-content
  .page, .post
    padding: 0px 11%;
  .toped
    padding-top:200px;
</style>
