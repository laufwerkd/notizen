<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
	<!-- <nav>
		<RouterLink to="/">Notes</RouterLink>
		<RouterLink to="/about">About</RouterLink>
	</nav> -->
	<main>
		<RouterView />
	</main>
</template>

<style>
#app {
	width: 100vw;
	height: 100vh;
}
</style>

<style scoped>
main {
	padding: 32px;
}
</style>
