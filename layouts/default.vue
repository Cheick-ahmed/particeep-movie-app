<template>
  <div>
    <the-navigation />
    <nuxt />
  </div>
</template>
<script>
  import theNavigation from '@/components/global/theNavigation'
  export default {
    components : {
      theNavigation
    }
  }
</script>