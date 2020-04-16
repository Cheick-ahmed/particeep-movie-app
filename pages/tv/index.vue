<template>
  <div class="container py-16">
    <section class="font-header">
      <h2 class="text-2xl md:text-3xl text-orange-500 mb-12 uppercase font-semibold">Séries diffusées aujourd'hui</h2>
      <template v-if="loaded">
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <tv v-for="on in on_the_air.results" :key="on.id" :tv="on" />
        </div>
      </template>
      <template v-else>
        <div class="spinner mt-32 lg:mt-48"></div>
      </template>
      <div v-observe-visibility="handleVisibilityChanged"></div>
    </section>
  </div>
</template>

<script>
  import tv from './components/tv'
  import VueObserveVisibility from 'vue-observe-visibility'
  export default {
    components : {
      tv
    },
    data () {
      return {
        page : 1,
        last_page : 1,
        on_the_air : null,
        now_playing : null,
        loaded : false
      }
    },
    async asyncData ({app}) {
      let on_the_air = await app.$axios.get(`tv/on_the_air?api_key=0f3f33dced31eeefc8ffbfc3c474b7b6&page=1&language=fr`)
      return { on_the_air : on_the_air.data }
    },
    methods : {
      async loadTv() {
       let data = await this.$axios.get(`tv/on_the_air?api_key=0f3f33dced31eeefc8ffbfc3c474b7b6&page=${this.page}&language=fr`)
       this.on_the_air = data.data
       this.loaded = true
     },
     handleVisibilityChanged(isVisible) {
      if(!isVisible) {
        return
      }
      this.loaded = false
      this.page++
      this.loadTv()
    }
  },
  mounted () {
    setTimeout(() => {
        this.loaded = true
    },1000)
  }
}
</script>