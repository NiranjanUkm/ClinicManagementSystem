<template>
    <div class="container vh-100">
   <div class="h-100 d-flex flex-column align-items-center justify-content-center">
    <h2>Reception Login</h2>
    <div class="container-fluid rounded shadow p-5">
      <input required v-model="email" type="text" placeholder="email" class="form-control">
      <input required v-model="password" type="password" placeholder="password" class="form-control mt-3">
      <button @click="recepLogin()" class="btn btn-primary w-100 mt-3">Login</button>
    </div>
   </div>
  </div>
</template>

<script>
import router from '@/router';
import {auth} from '../../../firebaseSDK.js'
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";

export default {
  name: 'MyComponent',
  data() {
    return {
      email:"",
      password:"",
      id:"hOPi3T0Ld9dF6ks9uXxaVP2LmTC3"
    };
  },
  methods: {
    async recepLogin() {
      if (!this.email || !this.password) {
        toast("Please fill all fields", {
          "type": "info",
          "position": "bottom-right",
          "dangerouslyHTMLString": true
        });
        return;
      }
      try {
        const userCredential = await signInWithEmailAndPassword(auth, this.email, this.password);
        const uid = userCredential.user.uid;
        if( uid == this.id){
          router.push('/reception');
        }else{
          toast("Unauthorized user", {
          "type": "info",
          "position": "bottom-right",
          "dangerouslyHTMLString": true
        });
        }
      } catch (error) {
        console.error('Login error:', error);
        toast("Invalid credentials", {
          "type": "info",
          "position": "bottom-right",
          "dangerouslyHTMLString": true
        });
      }
    }
  },
}
</script>

<style scoped>
/* your styles here */
</style>