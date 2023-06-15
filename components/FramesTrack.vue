<script setup lang="ts">

</script>

<template>
 <section class="frames-track">
		 <slot />
 </section>
</template>

<style scoped>
	.frames-track {
			/*height: 100%;*/
			height: inherit;
			width: 100vw;
			transform-style: preserve-3d;
      /*scroll-snap-type: mandatory;*/
      scroll-snap-type: y mandatory;
      scroll-snap-points-y: repeat(100vh);
	}
</style>
