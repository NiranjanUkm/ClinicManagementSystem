<template>
  <div>
    <button  data-bs-toggle="modal" data-bs-target="#staticBackdrop" class="btn btn-primary" >Add <i class="fa-solid fa-plus"></i></button>
    
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Add Patient</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
            <div class="col-6">
                <label for="">Name</label>
                <input v-model="name" type="text" class="form-control mt-2">
                <label for="">Age</label>
                <input v-model="age" type="text" class="form-control mt-2">
                <label for="">Phone</label>
                <input v-model="phone" type="text" class="form-control mt-2">
            </div>
            <div class="col-6">
                <label for="">BMI</label>
                <input v-model="bmi" type="text" class="form-control mt-2">
            </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="addPatient()" type="button" class="btn btn-primary">Add</button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from '../../firebaseSDK';

export default {
  name: 'MyComponent',
  data() {
    return {
      name: '',
      age: '',
      phone: '',
      bmi: '',
      token: 0, 
    };
  },
  mounted() {
    this.fetchToken(); 
  },
  methods: {
    async fetchToken() {
      try {
        const querySnapshot = await getDocs(collection(db, 'patients'));
        this.token = querySnapshot.size + 1; 
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    },
    async addPatient() {
      try {
        if (!this.name || !this.age || !this.phone || !this.bmi) {
          console.error('Please fill all required fields.');
          return;
        }
        const docRef = await addDoc(collection(db, 'patients'), {
          name: this.name,
          age: parseInt(this.age),
          phone: this.phone,
          bmi: this.bmi,
          token: this.token, 
        });

        console.log('Patient added with ID: ', docRef.id);
        this.name = '';
        this.age = '';
        this.phone = '';
        this.bmi = '';
        this.token++;
        window.location.reload();
      } catch (error) {
        console.error('Error adding patient:', error);
      }
    },
  },
};
</script>


<style scoped>
/* your styles here */
</style>