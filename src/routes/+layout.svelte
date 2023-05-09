<script>
	import '../app.postcss';
	import Header from '../libs/components/header.svelte';
</script>

<Header />

<div class="absolute left-0 top-[4rem] w-full max-w-full h-[calc(100%-4rem)]">
	<slot />
</div>
