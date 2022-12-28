<script>
  import LoginForm from "$lib/component/LoginForm.svelte"
</script>

<div class="min-h-screen bg-gray-50 flex flex-col">
  <div class="flex-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
    </div>
    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <LoginForm/>
      </div>
    </div>
  </div>
</div>

<style>
  button:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
</style>