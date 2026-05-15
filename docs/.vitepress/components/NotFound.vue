<template>
	<div class="NotFound">
		<div class="container">
			<img :src="withBase('/assets/look.png')" alt="not_found" loading="eager">
			<p class="code">{{ theme.notFound?.code }}</p>
			<h1 class="title">{{ theme.notFound?.title }}</h1>
			<div class="divider" />
			<blockquote class="quote">
				{{ theme.notFound?.quote }}
			</blockquote>
			<VPButton :href="theme.notFound?.link" :text="theme.notFound?.linkText" theme="sponsor" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { useData, withBase } from 'vitepress';
import { VPButton } from 'vitepress/theme'

const { theme } = useData();
</script>

<style scoped>
.NotFound {
	text-align: center;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-top: var(--vp-nav-height);
}

.code {
	margin-top: 1rem;
	margin-bottom: 1rem;
	line-height: 64px;
	font-size: 64px;
	font-weight: 600;
}

.title {
	padding-top: 0.5rem;
	letter-spacing: 2px;
	line-height: 20px;
	font-size: 20px;
	font-weight: 700;
}

.divider {
	margin: 1.5rem auto;
	width: auto;
	height: 1px;
	background-color: var(--vp-c-divider);
}

.quote {
	margin: auto;
	margin-bottom: 1.5rem;
	max-width: 256px;
	font-size: 14px;
	font-weight: 500;
	color: var(--vp-c-text-2);
}
</style>
