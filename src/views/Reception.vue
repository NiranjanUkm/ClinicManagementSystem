<template>
  <div class="container-fluid">
    <Header />
    <div class="container">
      <div class="d-flex w-100 justify-content-end mt-3">
        <PatientModal/>
      </div>
      <patientList/>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import PatientModal from '../components/patientModal.vue'
import patientList from '@/components/patientList.vue';
export default {
  name: 'MyComponent',
  data() {
    return {
      // your data here
    };
  },
  components: {
    Header,
    PatientModal,
    patientList,
  },
  methods: {
    // your methods here
  },
}
</script>

<style scoped>
/* your styles here */
</style>