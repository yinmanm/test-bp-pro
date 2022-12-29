<script lang="ts">
	import '../app.css';
  import { onMount } from 'svelte';
  import { onAuthStateChanged } from "firebase/auth";
  import { auth } from "../firebase";

  let user;

  onMount(() => {
    if(window.location.pathname == '/login' || window.location.pathname == '/register' || window.location.pathname == '/') {
      return
    }else {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user)
          user = user.uid;
          // window.location = '/';
        } else {
          window.location = '/login';
        }
      });
    }
	});

  
  
</script>

<main>
	<slot user={user} />
</main>

<style>
	@tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>
