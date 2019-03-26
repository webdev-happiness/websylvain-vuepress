<template>
  <Wrapper>
    <section class="container columns toped page">
        <header>
            <h1>JOURNAL DE BORD D'UN DÉVELOPPEUR WEB</h1>
            <Content/>
        </header>
        <section class="column col-lg-12 col-8">
            <LastNews :not="not" :limit="limit"/>
        </section>
        <aside class="column col-lg-12 col-4">
            <Sidebar :items="sidebarItems">
                <slot name="sidebar-top" slot="top"/>
                <slot name="sidebar-bottom" slot="bottom"></slot>
            </Sidebar>
        </aside>
    </section>
  </Wrapper>
</template>


<script>
import { resolvePage, normalize, outboundRE, endingSlashRE, resolveSidebarItems } from '../util'

import Wrapper from '../components/Wrapper.vue'
import LastNews from '../components/LastNews.vue'
import Sidebar from '../Sidebar.vue'
export default {
    components:{
        Wrapper, LastNews, Sidebar
    },
    data () {
        return {
            not: '/posts/',
            limit: 20
        }
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


<style lang="stylus">
</style>
