<template>
  <Wrapper>
    <div class="container toped page">
      <h1>{{$frontmatter.title}}</h1>
      <Content/>
    </div>
  </Wrapper>
</template>

<script>
  import Wrapper from '../components/Wrapper.vue'
  export default {
    data(){
      return {
      }
    },
    components: {
      Wrapper
    }
  }
</script>
