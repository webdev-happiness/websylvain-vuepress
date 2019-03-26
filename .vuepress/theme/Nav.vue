<template>
    <header>
        <header class="site-header navbar container">
            <section class="navbar-section">
                <a class="navbar-brand navbar-brand_normal mr-2" :href="$site.base"><img src="../public/img/logo-min.png" alt="" srcset=""></a>
                <a class="navbar-brand navbar-brand_reverse mr-2" :href="$site.base"><img src="../public/img/logo-min-black.png" alt="" srcset=""></a>
            </section>
            <section class="navbar-section">
                <a href="mailto:contact@websylvain.com" class="mail">contact@websylvain.com</a>
                <a @click.prevent="nav" class="cd-nav-trigger"><span class="fa fa-bars"></span></a>
            </section>
        </header>
        <nav class="asideNav">
            <div class="asideNav-link">
                <a href="#cd-nav" @click.prevent="nav" class="cd-nav-trigger" :class="scrolled" v-scroll="showOnScroll">
                    Menu
                    <span class="fa fa-bars"></span>

                    <svg x="0px" y="0px" width="54px" height="54px" viewBox="0 0 54 54">
                        <circle fill="transparent" stroke="#656e79" stroke-width="1" cx="27" cy="27" r="25" stroke-dasharray="157 157" stroke-dashoffset="157"></circle>
                    </svg>
                </a>
            </div>
            <div id="cd-nav" class="cd-nav">
                <div class="cd-navigation-wrapper columns">
                    <div class="column col-sm-12 col-6">
                        <h2>Navigation</h2>
                        <NavLinks/>
                    </div><!-- .cd-half-block -->

                    <div class="column col-sm-12 col-6">
                        <address>
                            <ul class="cd-contact-info">
                                <li><a href="mailto:contact@websylvain.com">contact@websylvain.com</a></li>
                                <li>07 61 74 17 02</li>
                                <li>
                                    <span>A Carcassonne</span>
                                    <span>Dans l'Aude</span>
                                    <span>Occitanie, FRANCE</span>
                                </li>
                            </ul>
                        </address>
                    </div> <!-- .cd-half-block -->
                </div> <!-- .cd-navigation-wrapper -->
            </div> <!-- .cd-nav -->
        </nav>
    </header>
</template>

<script>
import NavLinks from "./NavLinks.vue"
import scroll from './directives/scroll.js'

export default {
    data() {
        return {
            isLateralNavAnimating: false,
            scrolled: 'no-scrolled'
        }
    },
    components: { NavLinks },
    methods:{
        nav(){
            if( !this.isLateralNavAnimating ) {
                this.$emit('navAction');
		    }
        },
        showOnScroll(){
            if(window.scrollY > window.innerHeight-550){
                this.scrolled = "scrolled"
            }else{
                this.scrolled = "no-scrolled"
            }

        }
    }
}
</script>
