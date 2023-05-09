<script>
	import '../app.postcss';
	import Header from '../libs/components/header.svelte';
</script>

<Header />

<div class="absolute left-0 top-[4.5rem] w-full max-w-full h-[calc(100%-4.5rem)] px-4">
	<slot />
</div>
