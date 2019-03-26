<template>
    <ul class="project-list columns no-gap" >
        <li v-for="p,i in recentFiles" class="project column col-lg-12 col-4" data-aos="fade-down" data-aos-duration="1000">
            <a :href="p.path" :style="'background-image: url(' + $withBase('/img/projects/' + p.frontmatter.img) + ');'">
            <div class="mask"></div>
            <div class="index">
                {{i+1}}
            </div>
            <div class="detail">
                <h3>{{p.title}}</h3>
                <p>{{p.frontmatter.description}}</p>
            </div>
            </a>
        </li>
    </ul>
</template>

<script>
export default {
    props: {
        not: String,
        limit: Number
    },
    data () {
        return {}
    },
    computed:{
        recentFiles() {
            let files = this.$site.pages.filter(p => {
                if (p.path != this.not){
                    return p.path.indexOf('/projects/') >= 0;
                    console.log('hello')
                }
            }).sort((a,b) => {
                let aDate = new Date(a.frontmatter.published).getTime();
                let bDate = new Date(b.frontmatter.published).getTime();
                let diff = aDate - bDate;
                if(diff > 0) return -1;
                if(diff < 0) return 1;
                return 0;
            }).slice(0,parseInt(this.limit));

            return files;
        }
    }
}
</script>

<style lang="stylus">
@require '../websylvain-styles/theme/variables.styl'
ul.project-list{
  margin-top: 130px !important;
  li.project{
    list-style: none!important;
    margin-bottom: 135px;
    a{
      width: 100%;
      display: block;
      height: 100%;
      opacity: 1;
      height: 600px;
      background-color: #1c1d25;
      position: relative;
      box-shadow: 0 20px 80px 0 rgba(0,0,0,.45);
      margin-left: auto;
      margin-right: auto;
      background-position: 50%;
      background-size: cover;
      background-repeat: no-repeat;
      transition: all .35s ease;

      //MASK
      .mask{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        overflow: hidden;
        z-index: 0;
      }
      .mask:after{
        content: "";
        position: absolute;
        top: 0;
        opacity: 1;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(28,29,37,.9);
        //GRADIENT
          background: linear-gradient(270deg,rgba(38,41,51,.9),rgba(16,27,59,.9));

        -webkit-transform: translateX(-100%);
        transform: translateX(-100%);
        transition: opacity .2s,-webkit-transform .35s cubic-bezier(.694,.048,.335,1) .2s;
        transition: transform .35s cubic-bezier(.694,.048,.335,1) .2s,opacity .2s;
        transition: transform .35s cubic-bezier(.694,.048,.335,1) .2s,opacity .2s,-webkit-transform .35s cubic-bezier(.694,.048,.335,1) .2s;
        z-index: 9;
      }

      //DETAIL
      .detail{
        position: absolute;
        bottom: 90px;
        left: -50px;
        color: #fff;
        z-index: 10;
        max-width: 550px;
        -webkit-transform: scale(1) translateX(0);
        transform: scale(1) translateX(0);
        transition: opacity .25s,-webkit-transform .45s;
        transition: transform .45s,opacity .25s;
        transition: transform .45s,opacity .25s,-webkit-transform .45s;

        h3{
          font-weight: bold;
          text-transform: uppercase;
        }

      }

      //INDEX
      .index{
        display: block;
        font-weight: bold;
        position: absolute;
        top: -40px;
        left:50%;
        font-size: 7em;
        font-family: League Spartan,Helvetica,Arial,sans-serif;
        color: $second-color;
        -webkit-transform: translateY(15px);
        transform: translateY(15px);
        transition: opacity .3s,-webkit-transform .45s cubic-bezier(.694,.048,.335,1);
        transition: opacity .3s,transform .45s cubic-bezier(.694,.048,.335,1);
        transition: opacity .3s,transform .45s cubic-bezier(.694,.048,.335,1),-webkit-transform .45s cubic-bezier(.694,.048,.335,1);
        z-index: 90;
      }

    }

    //ANIMATION
    &:hover{
      a{
        box-shadow: 0 20px 80px 0 rgba(0,0,0,.65);
      }
      .detail{
        webkit-transform: scale(1.10);
        transform: scale(1.10);
      }

      .mask:after{
        -webkit-transform: translateX(0);
        transform: translateX(0);
      }
    }

    &:nth-child(even) {
      margin-top: 130px!important;
    }

  }
}

.palette-list{
  margin: 50px 0px 50px 0px;
  .palette{
    .color{
      width: 160px;
      height: 160px;
      margin: 0 auto;
      background-color: #fff;
      background-size: cover!important;
      box-shadow: 0 5px 20px 0 rgba(0,0,0,.33);
      border-radius: 50%;
    }
  }
}

@media screen and (max-width: $MQMobile) {
  ul.project-list {
    li {
      margin-bottom : 80px!important;
      a {
        height: 400px!important;
        .detail {
          bottom: 40px!important;
          left: -20px!important;
        }
      }
    }
  }

}
</style>
