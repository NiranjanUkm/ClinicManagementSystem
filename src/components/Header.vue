<template>
  <div class="container-fluid">
    <nav class="nav p-2 shadow rounded mt-2">
        <div class="d-flex w-100 justify-content-center align-items-center">
          <button @click="gotToHome()" class="btn fs-5"><i class="fa-solid fa-house"></i></button>
        </div>
    </nav>
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
    gotToHome(){
      router.push('/')
    }
  },
}
</script>

<style scoped>
/* your styles here */
</style>