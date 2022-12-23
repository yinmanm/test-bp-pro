<script lang="ts">
	import '../app.css';
  import { onMount } from 'svelte';
  import { onAuthStateChanged } from "firebase/auth";
  import { auth } from "../firebase";

  onMount(() => {
    if(window.location.pathname == '/login') {
      return
    }else {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          // window.location = '/';
        } else {
          window.location = '/login';
        }
      });
    }
	});

  
  
</script>

<main>
	<slot />
</main>

<style>
	@tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
