<script>
  import LogoText from "$lib/component/LogoText.svelte"
  import ProSvg from "$lib/component/ProSvg.svelte"
  import MessageArrow from "$lib/component/MessageArrow.svelte"
  import MessageArrowRight from "$lib/component/MessageArrowRight.svelte"
  import LoadingRound from "$lib/component/LoadingRound.svelte"
</script>

<div class="page bg-gray-50">
  <div class=""></div>
  <nav>
    <div class="py-3 px-6 md:py-6 md:px-10 border-b border-gray-200">
      <div class="flex justify-between items-center">
        <div class="flex items-center space-x-2">
          <LogoText color="#101828"/>
          <span class="w-px" style="height:14px;background:#004EEB"></span>
          <ProSvg/>
        </div>
        <div class="">
          <div class="text-black font-medium">Log In</div>
        </div>
      </div>
    </div>
  </nav>
  <section>
    <div class="px-6 md:px-10">
      <div class="max-w-screen-lg w-full mx-auto">
        <div class="w-full py-10 md:py-20 md:flex md:justify-between space-y-10 md:space-y-0 lg:space-x-16">
          <div class="flex-1">
            <h2 class="text-gray-900 text-2xl md:text-4xxl leading-tighter font-extrabold">Get exclusive access to the best quota for sale</h2>
            <div class="mt-4 text-gray-600 md:text-xl leading-normal">Get priority notification of off-market quota listings, through the widest network of sellers and brokers in Australia. </div>
            <div class="mt-6 md:mt-10 flex">
              <button class="py-2 px-12 rounded-full bg-gray-800 font-medium text-white leading-loose">Join for free</button>
            </div>
          </div>
          <div class="flex-1">
            <div data-controller="animation-step" style="">
              <div class="flex flex-col items-start mb-6">
                <div data-animation-step-target="step" class="css-animation-scale hidden transform scale-0 text-xs text-gray-500 mb-2">Meredith</div>
                <div data-animation-step-target="svg" class="css-animation-scale hidden transform scale-0 rounded-full bg-gray-200 py-2 px-4">
                  <LoadingRound />
                </div>
                <div data-animation-step-target="step" class="css-animation-scale hidden transform scale-0 rounded-full bg-white py-2 px-4 shadow-t-xxl relative mb-3">
                  <p class="text-gray-900">Hi, is the glow cream back in stock?</p>
                  <div class="absolute -left-2 top-4">
                    <MessageArrow />
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-end">
                <div data-animation-step-target="step" class="css-animation-scale hidden transform scale-0 text-xs text-gray-500 mb-2">Powdur.me</div>
                <div data-animation-step-target="step" class="css-animation-scale hidden transform scale-0 rounded-full py-2 px-4 shadow-t-xxl relative mb-3" style="background:#0048e5;">
                  <p class="text-white">Hey, yes it is!</p>
                  <div class="absolute -right-2 top-4">
                    <MessageArrowRight />
                  </div>
                </div>
                <div data-animation-step-target="step" class="css-animation-scale hidden transform scale-0 rounded-full py-2 px-4 shadow-t-xxl relative mb-3" style="background:#0048e5;">
                  <p class="text-white">it’s part of this new set we just launched.</p>
                  <div class="absolute -right-2 top-4">
                    <MessageArrowRight />
                  </div>
                </div>
                <div data-animation-step-target="step" class="css-animation-scale hidden transform scale-0 relative mb-3">
                  <div class="rounded-xl overflow-hidden relative z-10">
                    <img src="/hero-animation-coffee.jpeg" class="" style="width:250px;" />
                    <div class="p-3 pt-2 bg-white">
                      <div class="mb-0.5 text-xs text-gray-800">Powdur Pure Set</div>
                      <div class="text-xxs text-gray-500">https://buy.stripe.com/aF8fUK</div>
                    </div>
                  </div>
                  <div class="absolute -right-2" style="transform: scaleX(-1);bottom:-7px;">
                    <MessageArrow />
                  </div>
                </div>
                <div data-animation-step-target="svg" class="css-animation-scale hidden transform scale-0 rounded-full bg-gray-200 py-2 px-4">
                  <LoadingRound />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white">
    <div class="px-6 md:px-10">
      <div class="max-w-3xxl w-full mx-auto">
        <div class="py-14 md:py-32">
          <div class="mb-14">
            <h3 class="text-gray-900 text-3xl font-extrabold text-center">Australia’s largest network of buyers and sellers</h3>
          </div>
          <div class="">
            <div class="mb-14 md:mb-32">
              <div class="md:flex md:justify-between md:items-center">
                <div class="flex-1">
                  <div class="bg-gray-100 rounded-lg flex justify-evenly pt-10 pb-14">
                    <div class="text-center">
                      <img src="" class="w-16 h-16 mx-auto rounded-full bg-gray-200" />
                      <div class="mt-4 text-center text-black font-medium">Brokers</div>
                    </div>
                    <div class="text-center">
                      <img src="" class="w-16 h-16 mx-auto rounded-full bg-gray-200" />
                      <div class="mt-4 text-center text-black font-medium">Private <br/>Sellers</div>
                    </div>
                  </div>
                </div>
                <div class="mt-6 md:mt-0 flex-1">
                  <div class="md:pl-6 lg:pl-24">
                    <div class="text-gray-900 text-xl font-semibold mb-2">Sellers</div>
                    <div class="text-gray-600">We source the best opportunities from our network of private owners and quota brokers.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="mb-14 md:mb-32">
              <div class="md:flex md:justify-between md:items-center">
                <div class="flex-1">
                  <div class="bg-gray-900 rounded-lg py-10">
                    <div class="flex justify-center items-center space-x-2">
                      <LogoText color="white"/>
                      <span class="w-px" style="height:14px;background:#004EEB"></span>
                      <ProSvg/>
                    </div>
                  </div>
                </div>
                <div class="mt-6 md:mt-0 flex-1">
                  <div class="md:pl-6 lg:pl-24">
                    <div class="text-gray-900 text-xl font-semibold mb-2">Platform</div>
                    <div class="text-gray-600">We source the best opportunities from our network of private owners and quota brokers.</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="">
              <div class="md:flex md:justify-between md:items-center">
                <div class="flex-1">
                  <div class="bg-gray-100 rounded-lg flex justify-evenly pt-10 pb-14">
                    <div class="text-center">
                      <img src="" class="w-16 h-16 mx-auto rounded-full bg-gray-200" />
                      <div class="mt-4 text-center text-black font-medium">Fishers</div>
                    </div>
                    <div class="text-center">
                      <img src="" class="w-16 h-16 mx-auto rounded-full bg-gray-200" />
                      <div class="mt-4 text-center text-black font-medium">Processors</div>
                    </div>
                    <div class="text-center">
                      <img src="" class="w-16 h-16 mx-auto rounded-full bg-gray-200" />
                      <div class="mt-4 text-center text-black font-medium">Investors</div>
                    </div>
                  </div>
                </div>
                <div class="mt-6 md:mt-0 flex-1">
                  <div class="md:pl-6 lg:pl-24">
                    <div class="text-gray-900 text-xl font-semibold mb-2">Buyers</div>
                    <div class="text-gray-600">We source the best opportunities from our network of private owners and quota brokers.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="px-6 md:px-10">
      <div class="max-w-screen-lg w-full mx-auto">
        <div class="pt-14 pb-6 md:pt-24 md:pb-20">
          <div class="w-full md:flex md:justify-between md:items-center">
            <div class="md:max-w-base w-full">
              <div class="uppercase text-xs font-medium tracking-wide-1em" style="color:#004EEB;">Why sell with us</div>
              <div class="mt-5 text-gray-900 text-3xl leading-tight font-extrabold">Sell quickly, easily, and for the highest price</div>
              <div class="mt-6 text-gray-600 text-xl leading-normal">List your quota or entitlements for sale and instantly reach thousands of verified buyers. It’s fast, free, and anonymous.</div>
              <ul class="mt-8 flex flex-col space-y-6">
                <li class="text-gray-600 leading-tight">Run a competitive sales campaign in minutes</li>
                <li class="text-gray-600 leading-tight">100% seller protection with BeachPrice Escrow</li>
                <li class="text-gray-600 leading-tight">No percentage based comissions</li>
              </ul>
            </div>
            <div class="">
              <img src="/section-img-1.png" class="mx-auto md:mr-0" style="max-width:424px;" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white">
    <div class="px-6 md:px-10">
      <div class="max-w-screen-lg w-full mx-auto">
        <div class="pt-14 pb-6 md:pt-24 md:pb-20">
          <div class="w-full md:flex md:justify-between md:items-center">
            <div class="md:max-w-base w-full">
              <div class="uppercase text-green-600 text-xs font-medium tracking-wide-1em" style="">why buy through us</div>
              <div class="mt-5 text-gray-900 text-3xl leading-tight font-extrabold">Access and purchase the very best quota opportunities</div>
              <div class="mt-6 text-gray-600 text-xl leading-normal">By joining BeachPrice Pro, you’ll be on the exclusive waitlist for new opportunities as they arise. You’ll also get access to all current opportunities.</div>
              <ul class="mt-8 flex flex-col space-y-6">
                <li class="text-gray-600 leading-tight">A seller benefit line goes here.</li>
                <li class="text-gray-600 leading-tight">A seller benefit line goes here.</li>
                <li class="text-gray-600 leading-tight">A seller benefit line goes here.</li>
              </ul>
            </div>
            <div class="relative">
              <img src="/section-img-1.png" class="mx-auto md:mr-0" style="max-width:424px;" />
              <img src="/section-img-2.png" class="hidden md:block absolute top-14 md:right-12 lg:right-16" style="max-width:424px;" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-white">
    <div class="px-6 md:px-10">
      <div class="mx-auto" style="max-width:400px;">
        <div class="py-14 md:py-32 text-center">
          <h3 class="text-gray-900 text-2xl md:text-3xl font-extrabold leading-normal">Get started for free</h3>
          <div class="mt-8 text-gray-600 md:text-xl leading-normal">Get priority notification of off-market quota listings, through the widest network of sellers and brokers in Australia. </div>
          <button class="mt-8 py-2 px-12 rounded-full bg-gray-800 font-medium text-white leading-loose">Join for free</button>
        </div>
      </div>
    </div>
  </section>
  <section></section>
</div>

<style>
  .page {
    font-size: 16px;
  }
  .css-animation-scale {
    transition: all 300ms ease-in-out;
  }

/*   .step-show-1 {
    animation:showStep1 0.5s forwards;
	  -webkit-animation:showStep1 0.5s forwards;
  }
  @keyframes showStep1
  {
    from {
      display: none;
      transform: scale(0);
    }
    to {
      display:block;
      transform: scale(1);
    }
  }
  @-webkit-keyframes showStep1
  {
    from {
      display: none;
      transform: scale(0);
    }
    to {
      display:block;
      transform: scale(1);
    }
  }

  .step-hide-1 {
    animation:hideStep1 2s forwards;
	  -webkit-animation:hideStep1 2s forwards;
  }
  @keyframes hideStep1
  {
    0% {
      display: none;
      transform: scale(0);
    }
    25% {
      display:block;
      transform: scale(1);
    }
    50% {
      display:block;
      transform: scale(1);
    }
    100% {
      display: none;
    }
  }
  @-webkit-keyframes hideStep1
  {
    0% {
      display: none;
      transform: scale(0);
    }
    25% {
      display:block;
      transform: scale(1);
    }
    50% {
      display:block;
      transform: scale(1);
    }
    100% {
      display: none;
      height: 0;
      overflow: hidden;
    }
  }
  
  .step-show-2 {
    animation:showStep2 0.5s 2s forwards;
	  -webkit-animation:showStep2 0.5s 2s forwards;
  }
  @keyframes showStep2
  {
    from {
      display: none;
      transform: scale(0);
    }
    to {
      display:block;
      transform: scale(1);
    }
  }
  @-webkit-keyframes showStep2
  {
    from {
      display: none;
      transform: scale(0);
    }
    to {
      display:block;
      transform: scale(1);
    }
  } */
  
</style>
