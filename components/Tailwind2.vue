<template>
  <div class="relative lg:min-h-screen overflow-hidden bg-gray-700">
    <div class="hidden lg:block absolute bg-img scroll-bg" />
    <transition name="fade">
      <div v-show="!continued" class="z-20 angled relative lg:min-h-screen lg:min-w-3xl xl:min-w-4xl lg:flex lg:items-center lg:justify-center lg:w-3/5 lg:py-20 lg:pl-8 lg:pr-8 bg-no-repeat transition-opacity" style="background-size:100% auto;background-position:-5px -5px;">
        <div class="lg:pb-16">
          <div class="px-6 pt-16 pb-12 md:max-w-3xl md:mx-auto lg:max-w-full lg:pt-0">
            <img class="h-10 lg:h-12" src="~/static/VortexRisingLogo.png" alt="Tailwind UI">
            <div class="mt-8 lg:mt-16">
              <p class="text-sm font-semibold text-gray-600 uppercase tracking-wider">
                Community-backed
              </p>
              <h1 class="mt-2 text-4xl leading-tight xl:text-5xl font-semibold font-display text-gray-900 tracking-tight">
                Holograms, Skins, and Items.
              </h1>
              <p class="mt-3 text-lg max-w-xl lg:max-w-3xl text-gray-700 xl:text-2xl tracking-tighter">
                <span class="hidden sm:block">Design your own in-game items and get featured in Vortex Rising.<br></span>We welcome players, artists, brands, streamers, and more.
              </p>
            </div>
            <div class="mt-10">
              <p class="text-base xl:text-lg font-medium text-gray-400">
                You can either describe your design or supply reference files.
              </p>
              <section class="relative mt-5 lg:pb-12">
                <div class="sm:flex">
                  <button class="mt-4 relative h-12 sm:mt-0 sm:h-auto block w-auto sm:w-full px-6 py-3 font-semibold leading-snug bg-teal-500 text-teal-50 hover:text-white text-lg rounded shadow-md focus:outline-none focus:shadow-outline hover:bg-teal-600 transition-colors duration-200" @click.prevent="getStarted">
                    <span class="">Get Started</span>
                    <span class="v-cloak:hidden absolute inset-0 flex items-center justify-center pointer-events-none opacity-0">
                      <svg viewBox="0 0 24 24" class="h-8 w-8 spin">
                        <path fill="currentColor" d="M12 21a9 9 0 100-18 9 9 0 000 18zm0-2a7 7 0 110-14 7 7 0 010 14z" class="text-gray-600" />
                        <path fill="currentColor" d="M12 3a9 9 0 010 18v-2a7 7 0 000-14V3z" class="text-gray-400" />
                      </svg>
                    </span>
                  </button>
                </div>
                <!---->
              </section>
            </div>
          </div>
          <!-- <div class="px-6 py-8 md:max-w-3xl md:mx-auto lg:max-w-full lg:py-0">
          <p class="text-sm font-semibold text-gray-400 uppercase tracking-wider">
            A project by
          </p> <div class="mt-4 sm:flex">
            <a href="https://twitter.com/adamwathan" class="flex items-center no-underline"> <div class="flex-shrink-0"> <img class="h-12 w-12 rounded-full border-2 border-white" src="https://www.tailwindui.com/adam.87c84df4.jpg" alt=""> </div> <div class="ml-3"> <p class="font-semibold text-gray-900 leading-tight">Adam Wathan</p> <p class="text-sm text-gray-500 leading-tight">Creator of Tailwind CSS</p> </div> </a> <a href="https://twitter.com/steveschoger" class="mt-6 sm:mt-0 sm:ml-12 flex items-center no-underline"> <div class="flex-shrink-0"> <img class="h-12 w-12 rounded-full border-2 border-white" src="https://www.tailwindui.com/steve.d85280f0.jpg" alt=""> </div> <div class="ml-3"> <p class="font-semibold text-gray-900 leading-tight">Steve Schoger</p> <p class="text-sm text-gray-500 leading-tight">Author of Refactoring UI</p> </div> </a>
          </div>
        </div> -->
          <section
            class="hidden lg:hidden stats"
          >
            <p
              class="px-6 py-2 text-sm font-semibold text-gray-400 uppercase tracking-wider"
            >
              Check the numbers:
            </p>
            <div class="px-6 py-8 md:max-w-3xl md:mx-auto lg:max-w-full lg:py-0 flex justify-between">
              <section class="inline-block">
                <span class="text-3xl text-gray-900 font-bold">20,000+</span><span class="text-lg text-gray-100 pl-1 absolute mt-3 pl-2"> pins produced</span>
              </section>
              <section class="inline-block mr-6">
                <span class="text-3xl text-gray-900 font-bold">12</span><span class="text-lg text-gray-100 pl-1 absolute mt-3 pl-2"> graphic designers</span>
              </section>
              <section class="inline-block">
                <span class="text-3xl text-gray-900 font-bold">24</span><span class="text-lg text-gray-100 pl-1"> hour support</span>
              </section>
            </div>
          </section>
        </div>
      </div>
    </transition>
    <div :class="[continued ? 'ml-0' : 'ml-8']" class="relative border-t-4 border-b-4 border-gray-800 h-32 overflow-hidden sm:hidden">
      <div class="absolute scroll-bg" style="height:400%;width:400%;top:-100%;left:-100%;background-size:400px auto;background-image:url(https://firebasestorage.googleapis.com/v0/b/lapelpinsandcoins-5f3f1.appspot.com/o/Quotes%2FtestScrolloptimized.png?alt=media&token=23285733-b586-4e42-aa15-f6cd56a7cc50);" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Tailwind2',
  data () {
    return {
      start: false,
      continued: false
    }
  },
  methods: {
    toggleContinue () {
      this.continued = true
    },
    getStarted () {
      this.continued = true
      this.start = true
    }
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity .2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.bg-img {
  height:400%;
  width:400%;
  top:-50%;
  left:-100%;
  background-size:800px auto;
  background-image:url('https://firebasestorage.googleapis.com/v0/b/vortexflow2.appspot.com/o/VortexCollage.jpg?alt=media&token=3ee15171-2572-41bb-8dd0-6e59a5bec7fb');
}
.bg-img:before {
  content: '';
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: linear-gradient(to bottom right,#1f1f1f,#1f1f1f);
  opacity: 0.2;
}
@keyframes scrollSmall {
  from {
    transform: rotate(-13deg) translateY(0px);
  }
  to {
    transform: rotate(-13deg) translateY(-217px);
  }
}
@keyframes scrollLarge {
  from {
    transform: rotate(-13deg) translateY(0px);
  }
  to {
    transform: rotate(-13deg) translateY(-833px);
  }
}
.scroll-bg {
  animation-name: scrollSmall;
  animation-direction: reverse, normal;
  animation-duration: 100s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

@media screen and (min-width: 1024px) {
  .angled {
    background-image:url('https://firebasestorage.googleapis.com/v0/b/vortexflow2.appspot.com/o/angledback.svg?alt=media&token=99c70c2f-f068-4bf0-a524-b4fce1be6d03');
  }
  .scroll-bg {
    animation-direction: normal;
    animation-name: scrollLarge;
    animation-duration: 90s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
}
</style>
