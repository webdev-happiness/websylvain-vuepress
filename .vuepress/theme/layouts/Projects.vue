<template>
  <Wrapper>
    <section class="container toped page">
        <h1>Les projets</h1>
        <Content/>
        <section class="columns projects-list">
          <article class="colum col-4 projects-list_item"  v-for="project in recentFiles">
            <div class="wip" v-if="project.frontmatter.wip">
                <p>
                    W.I.P <br>
                    <span>En cours de développement</span>
                </p>
            </div>
            <div class="">
                <a :href="project.path" :title="project.title">
                <img style="width: 100%"
                :src="$withBase('/img/projects/' + project.frontmatter.missionPicture)" :alt="project.title">
                </a>
            </div>
            <div class="">
                <h3><a :href="project.path" :title="project.title">{{project.title}}</a></h3>
                <p>{{project.frontmatter.description}}</p>
                <p><a :href="project.path" :title="project.title">Voir le projet</a></p>
            </div>
          </article>
        </section>
        <section id="contact" class="section home-section">
            <header class="home-section-header">
                    <h2>Envie de collaborer ? N'hésitez pas à me contacter.</h2>
            </header>
            <section class="columns">
                <div class="column col-lg-12 col-6">
                    Par téléphone
                    <h3>07 61 74 17 02</h3>
                </div>
                <div class="column col-lg-12 col-6">
                    Par email
                    <h3><a href="mailto:contact@websylvain.com">contact@websylvain.com</a></h3>
                </div>
                <div class="column col-12">
                    <a
                    id="typef_orm_share"
                    href="https://websylvain.typeform.com/to/l2724z"
                    data-mode="popup"
                    data-hide-headers=true
                    data-hide-footer=true
                    data-submit-close-delay="5" target="_blank"
                    class="btn typeform-share" data-aos="fade-up" data-aos-duration="1000">Débuter un projet</a>
                </div>
            </section>
        </section>
    </section>
  </Wrapper>
</template>


<script>
import Wrapper from '../components/Wrapper.vue'
export default {
    components:{
        Wrapper
    },
    data () {
        return {
            not: '/projects/',
            limit: 20
        }
    },
    computed:{
        recentFiles() {
            let files = this.$site.pages.filter(p => {
                if (p.path != this.not){
                    return p.path.indexOf('/projects/') >= 0;
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
.projects-list{
  margin-bottom: 110px;
  .projects-list_item{
      padding: 50px;
      position relative
      .wip{
          background-color : #039be5;
          position: absolute;
          left : 0px;
          top : 0px;
          width : 100px;
          height : 100px;
          text-align : center;
          border-radius:  100px;
          border: 2px solid white;
          p{
              font-size: 12px;
              font-weight : bold;
              line-height : 18px;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              -webkit-transform: translate(-50%, -50%);
              -moz-transform: translate(-50%, -50%);
              -ms-transform: translate(-50%, -50%);
              -o-transform: translate(-50%, -50%);
              span {
                  font-size: 9px;
              }
          }
      }
  }
}


</style>
