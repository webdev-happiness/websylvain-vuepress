<template>
    <div class="intro">
        <div class="intro-left">
            <h1>Hi</h1>
        </div>
        <div class="intro-right">
            <h4>Sylvain Pastor alias</h4>
            <h2>Websylvain</h2>
            <h4><span  id="typed"></span></h4>
        </div>
    </div>
</template>

<script>
import Typed from 'typed.js';

export default {
    data(){
        return {
            options: {
                strings: ["Développeur web", "Indépendant", "Consultant Web", "Formateur JS"],
                typeSpeed: 50,
                loop: true
            },
            scrolled: false
        }
    },
    mounted(){
        var typed = new Typed("#typed", this.options);
    },
    methods:{

    }
}
</script>





<style lang="stylus">
@require '../websylvain-styles/theme/variables.styl'

.intro{
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);

  .intro-left {
      display: inline-block;
      padding-right: 20px;
  }

  .intro-left h1 {
        font-size: 80px;
      color: #fff;
      font-weight: 600;
  }

  .intro-right {
      display: inline-block;
      text-align: left;
      padding-left: 20px;
      position: relative;
  }

  .intro-right:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 10px;
      height: 89%;
      width: 10px;
      background: #fff;
  }


    .intro-right h2 {
        font-size: 1.9em;
        line-height: 1.0;
        font-weight: 600;
    }


  .intro-right h4 {
      font-size: 0.8rem;
      line-height: 1rem;
      font-weight: 300;
      display: inline-block;
  }

  .intro-right h4,
  .intro-right h2 {
      border: none;
      padding: 0px;
      margin: 0;
      color: #fff;
      text-transform: uppercase;
      letter-spacing: 1px;
  }

  .intro-right span {
      font-size: 0.8rem;
      color: $second_color;
      font-weight: 300;
  }
}

@media screen and (min-width: $MQMobile){
    .intro-left h1 {
        font-size: 160px!important;
    }

    .intro-right h4 {
        font-size: 1.24rem!important;
    }


    .intro-right h2 {
        font-size: 3em!important;
        line-height: 1.4!important;
    }

    .intro-right span {
        font-size: 30px!important;
    }
}

</style>
