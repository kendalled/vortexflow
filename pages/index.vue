<template>
  <div>
    <Tailwind2 />
    <Features />
    <Stats />
    <SimpleNewsletter />
    <TailFoot />
  </div>
</template>

<script>
import Tailwind2 from '~/components/Tailwind2'
import Features from '~/components/Features'
import Stats from '~/components/Stats'
import SimpleNewsletter from '~/components/SimpleNewsletter'
import TailFoot from '~/components/TailFoot'
export default {
  components: {
    Tailwind2,
    Features,
    Stats,
    SimpleNewsletter,
    TailFoot
  }
}
</script>

<style scoped>
/* styles and purgecss whitelist */
</style>
