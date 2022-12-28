<script>
  import LoginForm from "$lib/component/LoginForm.svelte"
  import LogoText from "$lib/component/LogoText.svelte"
  import ProSvg from "$lib/component/ProSvg.svelte"
</script>

<div class="px-4 bg-gray-50">
  <div class="max-w-screen-lg w-full mx-auto">
    <div class="min-h-screen flex flex-col justify-center items-center py-16">
      <div class="md:flex md:justify-between pb-20 md:pb-0">
        <div class="w-full h-full md:flex flex-col">
          <div class="py-6 pb-8 md:py-0">
            <div class="flex items-center space-x-2">
              <LogoText color="#101828"/>
              <span class="w-px" style="height:14px;background:#004EEB"></span>
              <ProSvg/>
            </div>
            <div class="mt-6 md:mt-12 text-gray-800 md:text-xl lg:text-2xl leading-snug">Get exclusive access to the <span class="font-bold">best quota for sale</span> before it hits the market</div>
            <ul class="mt-6 lg:mt-10 flex flex-col space-y-4">
              <li class="flex space-x-3">
                <svg aria-hidden="true" class="mt-1.5" height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#635bff">
                  <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z" fill-rule="evenodd"></path>
                </svg>
                <div class="flex-1">
                  <div class="text-gray-800 font-medium">quick start</div>
                  <div class="text-gray-500 text-sm">Integrate with a developer-friendly API or choose a low-code or pre-built solution.</div>
                </div>
              </li>
              <li class="flex space-x-3">
                <svg aria-hidden="true" class="mt-1.5" height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#635bff">
                  <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z" fill-rule="evenodd"></path>
                </svg>
                <div class="flex-1">
                  <div class="text-gray-800 font-medium">Support any business model</div>
                  <div class="text-gray-500 text-sm">E-commerce, subscriptions, SaaS platforms, marketplaces, and more—all on one unified platform.</div>
                </div>
              </li>
              <li class="flex space-x-3">
                <svg aria-hidden="true" class="mt-1.5" height="16" width="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#635bff">
                  <path d="M8 16A8 8 0 1 1 8 0a8 8 0 0 1 0 16zm3.083-11.005L7 9.085 5.207 7.294a1 1 0 0 0-1.414 1.414l2.5 2.5a1 1 0 0 0 1.414 0l4.79-4.798a1 1 0 1 0-1.414-1.414z" fill-rule="evenodd"></path>
                </svg>
                <div class="flex-1">
                  <div class="text-gray-800 font-medium">Join millions of merchants</div>
                  <div class="text-gray-500 text-sm">Stripe is trusted by ambitious startups and entrepreneurs of all sizes.</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div class="w-full h-full flex flex-col">
          <div class="max-w-sm w-full mx-auto md:mr-0 md:ml-auto">
            <div class="lg:rounded-md bg-white shadow-t-xl py-8 pb-10 px-4 sm:px-10">
              <div class="mb-5 text-gray-800 text-xl md:text-2xl font-medium">Sign in to your account</div>
              <LoginForm/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>