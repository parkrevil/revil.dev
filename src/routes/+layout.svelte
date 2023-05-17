<script>
	import '../app.postcss';
  import { PUBLIC_APOLLO_URI } from '$env/static/public';
  import { ApolloClient, InMemoryCache } from '@apollo/client/core';
  import { setClient } from 'svelte-apollo';
	import Header from '../lib/components/header.svelte';

  const client = new ApolloClient({
    uri: PUBLIC_APOLLO_URI,
    cache: new InMemoryCache(),
  });
  setClient(client);
</script>

<Header />

<div class="absolute left-0 top-[4.5rem] w-full max-w-full h-[calc(100%-4.5rem)] px-4">
	<slot />
</div>
