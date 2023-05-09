<script>
  import '../app.css';
	import Header from '../libs/components/header.svelte';
</script>

<Header></Header>

<input type="range" min="0" max="100" value="40" class="range range-primary" />

<slot></slot>
