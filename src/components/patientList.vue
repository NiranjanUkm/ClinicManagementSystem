<template>
    <div class="container mt-3">
        <ul class="list-group">
            <li v-for="patient in sortedPatients" :key="patient.id" class="list-group-item mt-3 shadow-sm">
                <div class="row">
                    <div class="col-4">
                        <div class="d-flex flex-column align-items-center justify-content-center">
                            <p>Token Number</p>
                            <p class="p-0 m-0 fs-1 fw-bolder">{{patient.token}}</p>
                        </div>
                    </div>
                    <div class="col-4">
                        <h3 class="p-0 m-0">{{ patient.name }}</h3>
                        <p class="p-0 m-0">Age: {{ patient.age }}</p>
                        <p class="p-0 m-0">Phone: {{ patient.phone }}</p>
                        <p class="p-0 m-0">BMI: {{ patient.bmi }}</p>
                    </div>
                    <div class="col-4">
                       <div class="d-flex justify-content-between">
                        <div>
                            <p class="p-0 m-0">Doctor's Name: {{ patient.doctor }}</p>
                            <p class="p-0 m-0">prescription: {{ patient.priscription }}</p>
                        </div>
                            <EditModal 
                            :patientId="patient.id" 
                            :name="patient.name" 
                            :age="patient.age"
                            :phone="patient.phone" 
                            :bmi="patient.bmi"
                            :priscription="patient.priscription" />
                       </div>
                    </div>
                </div>

            </li>

        </ul>
    </div>
</template>
  
<script>
import { db } from '../../firebaseSDK';
import { collection, getDocs } from 'firebase/firestore';
import EditModal from './editModal.vue'

export default {
    name: 'MyComponent',
    data() {
        return {
            patients: [],
        };
    },
    computed: {
    sortedPatients() {
      return this.patients.slice().sort((a, b) => a.token - b.token);
    },
  },
    components: {
        EditModal,
    },
    async mounted() {
        try {
            const querySnapshot = await getDocs(collection(db, 'patients'));
            querySnapshot.forEach((doc) => {
                this.patients.push({ id: doc.id, ...doc.data() });
            });
        } catch (error) {
            console.error('Error fetching patients:', error);
        }
    },
};
</script>
  
<style scoped>
/* your styles here */
</style>
  