<template>
  <div class="container w-50 vh-100">
    <div class="d-flex flex-column align-items-center justify-content-center w-100 h-100">
      <button @click="gotToDocLogin()" class="btn btn-primary w-100">Doctor Login</button>
      <button @click="gotToRecepLogin()" class="btn btn-primary w-100 mt-3">Reception Login</button>
    </div>
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: 'MyComponent',
  data() {
    return {
      // your data here
    };
  },
  methods: {
    gotToDocLogin(){
      router.push('/doc-login')
    },
    gotToRecepLogin(){
      router.push('/reception-login')
    }
  },
}
</script>

<style scoped>
/* your styles here */
</style>