<template>
  <div class="container py-16">
    <section class="font-header mb-8 lg:mb-16">
      <h2 class="text-2xl md:text-3xl text-orange-500 mb-12 uppercase font-semibold">Films actuellement en salles</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <movie v-for="up in now_playing.results" :key="up.id" :movie="up" withDate="true" />
      </div>
      <div class="spinner mt-32 lg:mt-48" v-if="!popular"></div>
    </section>

    <section class="font-header">
      <h2 class="text-2xl md:text-3xl text-orange-500 mb-12 uppercase font-semibold"> films populaires </h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <movie v-for="movie in popular.results" :key="movie.id" :movie="movie" />
      </div>
      <div v-observe-visibility="handleVisibilityChanged"></div>
    </section>
  </div>
</template>

<script>
  import movie from './movies/components/movie'
  import VueObserveVisibility from 'vue-observe-visibility'
  export default {
    components : {
      movie
    },
    data () {
      return {
        page : 1,
        last_page : 1,
        popular : null,
        now_playing : null,
        moreMovies : null
      }
    },
    async asyncData ({app}) {
      let popular = await app.$axios.get(`movie/popular?api_key=0f3f33dced31eeefc8ffbfc3c474b7b6&page=1&language=fr`)
      let now_playing = await app.$axios.get(`movie/now_playing?api_key=0f3f33dced31eeefc8ffbfc3c474b7b6&language=fr&page=1`)
      return { popular : popular.data, now_playing : now_playing.data }
    },
    methods : {
      async loadMovie() {
         let movies = await this.$axios.get(`movie/popular?api_key=0f3f33dced31eeefc8ffbfc3c474b7b6&page=${this.page}&language=fr`)
         this.popular = movies.data
      },
      handleVisibilityChanged(isVisible) {
        if(!isVisible) {
          return
        }
        this.page++
        this.loadMovie()
      }
    }
  }
</script>