<template>
    <aside class="rigth-nav" :class="{'visible': scrolled}" v-scroll="showOnScroll">
		<a class="page-scroll" href="#about">SCROLL  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
	</aside>
</template>

<script>
  
import scroll from './directives/scroll.js'

export default {
    data(){
        return {
            scrolled: false
        }
    },
    directives: {scroll},
    methods:{
        showOnScroll(){
            if(window.scrollY > window.innerHeight-500){
                this.scrolled = true;
            }else{
                this.scrolled = false;
            }
            
        }
    }
}
</script>


<style lang="stylus">
    .rigth-nav{
        opacity: 0;
        transition: all 0.5s ease;
        
        position: fixed;
        right: 0px;
        bottom: 60px;
        -webkit-transform: rotate(90deg);
        transform: rotate(90deg);
        color: $second_color;
        font-weight: 600;
        text-transform: uppercase;
        letter-spacing: 2px;
        font-size: 12px;
        z-index: 3;
        &.visible{
            opacity: 1;
        }
    }
    
</style>
