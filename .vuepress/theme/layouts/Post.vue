<template>
  <Wrapper :light="true">
      <section class="container columns toped post">
        <article class="section column col-lg-12 col-8">
          <header class="page-header">
              <h1 class="page-header-title">{{$page.title}}</h1>
          </header>
          <slot name="top"/>
          <Content :custom="false"/>
          <aside class="page-infos columns">
            <div class="column col-6 page-infos-l">
              <Signature :author="this.$page.frontmatter.author"/>
            </div>
            <div class="column col-6 page-infos-r">
                <ShareLinks
                :url="this.$site.themeConfig.domain + this.$page.path"
                :message="this.$page.frontmatter.title"
                :hashtags="'webdev,blogging,freelance'"/>
            </div>
          </aside>
          <footer class="post-comments">
            <Comments />
          </footer>
          <slot name="bottom"/>
        </article>
        <Sidebar :items="sidebarItems" class="column col-lg-12 col-4">
          <slot name="sidebar-top" slot="top"/>
          <slot name="sidebar-bottom" slot="bottom"></slot>
        </Sidebar>
      </section>
  </Wrapper>
</template>
<script>

import { resolvePage, normalize, outboundRE, endingSlashRE, resolveSidebarItems } from '../util'
import Wrapper from '../components/Wrapper.vue'
import ShareLinks from '../components/ShareLinks'
import Comments from '../components/Comments'
import Signature from '../components/Signature'
import Sidebar from '../Sidebar.vue'

export default {    
    data(){
        return{
          scrolled: false,
          nav: false,
          isSidebarOpen: false,
        }
    },
    components: {Wrapper, ShareLinks, Comments, Signature, Sidebar},
    methods:{
      displayNav(){
        this.nav = !this.nav;
      },
    },
    computed:{
      sidebarItems () {
        return resolveSidebarItems(
          this.$page,
          this.$route,
          this.$site,
          this.$localePath
        )
      },
    }
}
</script>
<style src="../websylvain-styles/base/spectre/spectre.min.css" lang="css"></style>
<style src="../websylvain-styles/base/spectre/spectre-icons.min.css" lang="css"></style>
<style src="../websylvain-styles/base/spectre/spectre-exp.min.css" lang="css"></style>
<style src="../websylvain-styles/app.styl" lang="stylus"></style>
<style lang="stylus">
  .page-infos-r
    text-align right 
  .site-content
    .page, .post
      padding: 0px 11%;
    .toped
      padding-top:200px;
</style>
