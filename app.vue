<template>
  <div class="site-wrapper">
    <FramesTrack ref="FramesTrackRef">
      <Frame :scroll="top" :order="1" :scroll-trigger="scrollStart" ref="FrameItems">
        <div class="container my-5 grid">
          <div class="g-col-md-6 p-5 text-center rounded-3">
            <svg class="bi mt-4 mb-3" style="color: var(--bs-indigo);" width="100" height="100"><use xlink:href="#bootstrap"></use></svg>
            <h1 class="text-body-emphasis">Jumbotron with icon</h1>
            <p class="col-lg-8 mx-auto fs-5 text-muted">
              This is a custom jumbotron featuring an SVG image at the top, some longer text that wraps early thanks to a responsive <code>.col-*</code> class, and a customized call to action.
            </p>
            <div class="d-inline-flex gap-2 mb-5">
              <button class="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill" type="button">
                Call to action
                <svg class="bi ms-2" width="24" height="24"><use xlink:href="#arrow-right-short"></use></svg>
              </button>
              <button class="btn btn-outline-secondary btn-lg px-4 rounded-pill" type="button">
                Secondary link
              </button>
            </div>
          </div>
          <div class="g-col-md-6">
            <img src="/img/image-4.jpg" class="img-fluid" alt="">
          </div>
        </div>
      </Frame>
      <Frame :scroll="top" :order="2" :scroll-trigger="scrollStart + windowHeight" ref="FrameItems">
        <div class="grid">
          <div class="g-col-6" style="perspective: 1000px">
            <img src="/img/image-1.jpg" class="img-fluid" style="transform: translateZ(calc(var(--frame-depth)/2))" alt="">
          </div>
          <div class="g-col-6">
            <h2 class="display-2">
              Zaebis!
            </h2>
          </div>
        </div>
      </Frame>
      <Frame :scroll="top" :order="3" :scroll-trigger="scrollStart + windowHeight * 2" ref="FrameItems">
        <div class="grid">
          <div class="g-col-6">
            <h2 class="display-2">
              Zaebis!
            </h2>
          </div>
          <div class="g-col-6" style="perspective: 1000px">
            <img src="/img/image-2.jpg" class="img-fluid" style="transform: translateZ(calc(var(--frame-depth)/2))" alt="">
          </div>
        </div>
      </Frame>
      <Frame :scroll="top" :order="4" :scroll-trigger="scrollStart + windowHeight * 3" ref="FrameItems">
          <div class="position-relative">
            <img src="/img/image-3.jpg" class="img-fluid position-absolute" alt="">
            <div class="position-absolute w-100">
              <div class="container">
                <h2 class="display-2">Ti prosti kosmos!</h2>
              </div>
              <div class="container">
                <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                  <p class="col-md-4 mb-0 text-body-secondary">© 2023 Company, Inc</p>

                  <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                  </a>

                  <ul class="nav col-md-4 justify-content-end">
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Home</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Features</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">Pricing</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">FAQs</a></li>
                    <li class="nav-item"><a href="#" class="nav-link px-2 text-body-secondary">About</a></li>
                  </ul>
                </footer>
              </div>
            </div>
          </div>
      </Frame>
    </FramesTrack>
  </div>
</template>
<script setup lang="ts">
let top = ref(0);

// let top = computed(() => document?.documentElement.scrollTop)
const totalDepth = ref(0);
const scrollStep = -500;
const scrollStart = ref(-4700);
const windowHeight = ref();
const FrameItems = ref([]);
const FramesTrackRef = ref(null);
const framesCount = ref(4);
const totalDepthResult = computed(()=> `${totalDepth.value}px`)
onMounted(()=>{
  console.log(document.documentElement.clientHeight)
  framesCount.value = FramesTrackRef.value.$el.children.length
  windowHeight.value = document.documentElement.clientHeight;
  totalDepth.value = windowHeight.value * framesCount.value
  scrollStart.value = totalDepth.value * -1
  document.documentElement.style.setProperty('--depth', `${totalDepth.value}px`);
  window.onscroll = function () {
    requestAnimationFrame(()=>{
      top.value = scrollStart.value + document.documentElement.scrollTop;
    })
  }
  window.scrollTo(0, 1)
})
// onMounted(() => console.log(FrameItems.value))

</script>

<style lang="scss">
  :root {
    --depth: v-bind(totalDepthResult);
  }
  body {
      //background-color: rgb(46, 52, 59);
    height: var(--depth);
  }
  .site-wrapper {
    height: 100%;
    position: fixed;
    perspective: 1500px;
  }
  /*h1 {
    font-size: 10rem;
    color: beige;
  }*/
</style>
