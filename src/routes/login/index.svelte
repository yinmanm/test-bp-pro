<script>
  import { onMount } from 'svelte';
  import intlTelInput from 'intl-tel-input';
  import 'intl-tel-input/build/css/intlTelInput.css';
  import { auth } from "../../firebase";
  import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

  let phone;
  let phoneError = false;
  let phoneErrorText = "";
  let countryCode = "";
  let phoneCode;
  let codeError = false;
  let codeErrorText = "";
  let error;
  let showGetCodeButton = true;
  let loginButtonDisabled = false;

  onMount(() => {
    const phoneInput = document.querySelector("#phone");
    var iti = intlTelInput(phoneInput, {
      
    });
    countryCode = iti.getSelectedCountryData().dialCode;
    phoneInput.addEventListener("countrychange", function(e) {
      // do something with iti.getSelectedCountryData()
      countryCode = iti.getSelectedCountryData().dialCode;
    });
    
  });

  

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
      'size': 'invisible',
      'callback': (response) => {
        
      }
    }, auth)
  }

  const getCode = (e) => {
    e.preventDefault();
    if(!phone) {
      phoneError = true;
      phoneErrorText = "please input the phone!";
      return false;
    }else {
      phoneError = false;
      phoneErrorText = "";
    }
    if(phone) {
      let allPhone = "+" + countryCode + phone;
      showGetCodeButton = false;
      generateRecaptcha();
      let appVerifier = window.recaptchaVerifier;
      signInWithPhoneNumber(auth, allPhone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
      }).catch((error) => {
        console.log(error)
      });
    }
    
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!phone || !phoneCode) {
      codeError = true;
      codeErrorText = "please input the phone and code!"
      return false;
    }else {
      codeError = false;
      codeErrorText = ""
    }
    loginButtonDisabled = true;
    let confirmationResult = window.confirmationResult;
    confirmationResult.confirm(phoneCode).then((result) => {
      // User signed in successfully.
      const user = result.user;
      window.location = '/';
      // console.log(user);
      // ...
    }).catch((error) => {
      loginButtonDisabled = false;
      // User couldn't sign in (bad verification code?)
      // ...
    });
  };
</script>

<div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
  <div class="sm:mx-auto sm:w-full sm:max-w-md">
    <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
  </div>

  <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
    <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
      <form class="space-y-6" action="#" method="POST">
        <div>
          <label for="phone" class="block text-sm font-medium text-gray-700"> Phone </label>
          <div class="relative mt-1 rounded-md shadow-sm grid grid-cols-1">
            <input id="phone" name="phone" type="text" autocomplete="text" bind:value={phone} required placeholder="+1 (555) 987-6543" class="block w-full rounded-md border border-gray-300 px-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" style="height:38px;">
          </div>
          {#if phoneError}
          <div class="mt-1 text-red-500 text-sm">{phoneErrorText}</div>
          {/if}
        </div>
        <div id="recaptcha-container"></div>
        <div>
          <label for="code" class="block text-sm font-medium text-gray-700"> Verifier code </label>
          <div class="mt-1 flex rounded-md shadow-sm">
            <div class="relative flex flex-grow items-stretch focus-within:z-10">
              <input id="code" name="code" type="number" autocomplete="phone-code" bind:value={phoneCode} required class="block w-full rounded-none rounded-l-md border border-gray-300 pl-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" style="height:38px;">
            </div>
            <button on:click={getCode} type="button" disabled={!showGetCodeButton} class="relative -ml-px inline-flex items-center space-x-2 rounded-r-md border border-gray-300 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500">
              <span>send Code</span>
            </button>
          </div>
          {#if codeError}
            <div class="mt-1 text-red-500 text-sm">{codeErrorText}</div>
          {/if}
        </div>

        <div>
          {#if error}
            <p class="text-red-500">{error}</p>
          {/if}
        </div>

        <div>
          <button type="submit" on:click={handleSubmit} disabled={loginButtonDisabled} class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
        </div>
      </form>

    </div>
  </div>
</div>

<style>
  button:disabled {
    color: #ccc;
    cursor: not-allowed;
  }
</style>