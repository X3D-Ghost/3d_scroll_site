<script setup lang="ts">
const props = defineProps({
		scroll: Number,
		scrollTrigger: Number,
		order: Number
})
// const scrollTrigger = computed(() => (props.scroll / props.order))
const difference = computed(()=>props.scrollTrigger - props.scroll)
const scrollDepth = computed(() => `${(difference.value) * 1}px`)
const opacity = computed(()=>difference.value > 300 || difference.value < -2000 ? 0 : 1);
// const opacity = computed(()=>props.scrollTrigger < 1000 / 1.8 ? 1 : 0);
</script>

<template>
	<div class="frame">
			<div class="frame__inner">
					<slot />
			</div>
	</div>
</template>

<style lang="scss">
 .frame {
		 --frame-depth: v-bind(scrollDepth);
		 --opacity: v-bind(opacity);
		 position: absolute;
		 width: 100%;
		 height: 100%;
		 transform-style: preserve-3d;
		 will-change: transform;
		 /*transform: translateZ(calc(var(--depth) - var(--frame-depth)));*/
		 transform: translateZ(var(--frame-depth));
		 transform-origin: center;
		 display: flex;
		 place-content: center;
     opacity: var(--opacity);
		 transition: opacity 0.35s ease;

     scroll-snap-align: start;
 }
 .frame__inner {
		 height: 100%;
		 width: 100%;
		 //background-color: black;
		 perspective: var(--frame-depth);
 }
</style>
