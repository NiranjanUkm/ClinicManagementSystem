<template>
  <div class="container-fluid">
    <Header />
    <h1 class="text-center mt-3">Hai Doc!</h1>
    <div class="container">
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