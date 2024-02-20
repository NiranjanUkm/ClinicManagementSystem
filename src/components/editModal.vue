<template>
  <div>
    <button @click="openModal" class="btn btn-danger fs-5 rounded-pill">Edit<i
        class="fa-solid fa-user-pen ms-2"></i></button>
    <div class="modal fade" id="staticBackdrop" ref="myModal" data-bs-backdrop="static" data-bs-keyboard="false"
      tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Patient</h1>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <div class="row">
              <div class="col-6">
                <label for="">Name</label>
                <input v-model="eName" type="text" class="form-control mt-2">
                <label for="">Age</label>
                <input v-model="eAge" type="text" class="form-control mt-2">
                <label for="">Phone</label>
                <input v-model="ePhone" type="text" class="form-control mt-2">
              </div>
              <div class="col-6">
                <label for="">BMI</label>
                <input v-model="eBmi" type="text" class="form-control mt-2">
                <label for="">Doctor's name</label>
                <input v-model="doctor" type="text" class="form-control mt-2">
                <div class="form-floating mt-2">
                <textarea v-model="priscription" class="form-control" placeholder="Enter Priscription here" id="floatingTextarea"></textarea>
                <label for="floatingTextarea">Priscription</label>
              </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button @click="deletePatient()" type="button" class="btn btn-danger">Delete</button>
            <button @click="editPatient()" type="button" class="btn btn-primary">Edit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { db } from '../../firebaseSDK';
import { doc, updateDoc, deleteDoc } from 'firebase/firestore';

export default {
  data() {
    return {
      eName: this.name,
      eAge: this.age,
      ePhone: this.phone,
      eBmi: this.bmi,
      priscription:"",
      doctor:"",
      myModal: null,
    };
  },
  props: {
    patientId: String,
    name: String,
    age: String,
    phone: String,
    bmi: String,
  },
  mounted() {
    this.myModal = new bootstrap.Modal(this.$refs.myModal);
  },
  methods: {
    openModal() {
      this.myModal.show();
    },
    closeModal() {
      this.myModal.hide();
    },
    async editPatient() {
      try {
        const patientRef = doc(db, 'patients', this.patientId);
        await updateDoc(patientRef, {
          name: this.eName,
          age: this.eAge,
          phone: this.ePhone,
          bmi: this.eBmi,
          priscription: this.priscription,
          doctor: this.doctor
        });
        this.closeModal();
        window.location.reload();
      } catch (error) {
        console.error('Error editing patient:', error);
      }
    },
    async deletePatient() {
      try {
        const patientRef = doc(db, 'patients', this.patientId);
        await deleteDoc(patientRef);
        console.log('Patient deleted successfully!');
        this.closeModal();
        window.location.reload();
      } catch (error) {
        console.error('Error deleting patient:', error);
      }
    },
  },
};
</script>

  
<style scoped>
/* your styles here */
</style>
  