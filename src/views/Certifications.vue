<template>
  <v-container fluid class="certifications-section">
    <!-- Certifications Section -->
    <v-row justify="center" class="mt-12">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 font-weight-bold accent--text mb-6">Certifications</h2>
      </v-col>

      <!-- Certification Cards -->
      <v-col
        v-for="(cert, index) in certifications"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="d-flex align-stretch px-4 py-2"
      >
        <v-card elevation="0" class="pa-6 text-left flex-grow-1" color="surface">
          <v-card-title class="text-h6 font-weight-bold accent--text">{{ cert.name }}</v-card-title>
          <v-card-subtitle class="white--text">{{ cert.organization }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <!-- Courses Section -->
    <v-row justify="center" class="mt-12">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 font-weight-bold accent--text mb-6">Courses</h2>
      </v-col>

      <!-- Course Cards -->
      <v-col
        v-for="(course, index) in courses"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="d-flex align-stretch px-4 py-2"
      >
        <v-card elevation="0" class="pa-6 text-left flex-grow-1" color="surface">
          <v-card-title class="text-h6 font-weight-bold accent--text">{{ course.name }}</v-card-title>
          <v-card-subtitle class="white--text">{{ course.duration }}</v-card-subtitle>
          <v-card-subtitle class="white--text">{{ course.organization }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      certifications: [
        { name: 'PEGA Certified System Architect', organization: 'Pegasystems' },
        { name: 'PEGA Certified Decisioning Consultant', organization: 'Pegasystems' },
        { name: 'Telecommunication Domain', organization: 'Cognizant' },
        { name: 'Design Thinking', organization: 'Cognizant' },
      ],
      courses: [
        {
          name: 'Introduction to Programming using Python',
          duration: '04/2021 – 07/2021 (Online)',
          organization: 'University of Michigan',
        },
        {
          name: 'Introduction to Elasticsearch (ELK Stack)',
          duration: '10/2024 – 12/2024 (Online)',
          organization: 'Udemy',
        },
        {
          name: 'Introduction to Programming using Java',
          duration: '05/2022 – 05/2022 (Online)',
          organization: 'Microsoft Technology Associate',
        },
        {
          name: 'JavaScript',
          duration: '02/2023 – 04/2023 (Online)',
          organization: 'Udemy',
        },
        {
          name: 'SQL and Database Design',
          duration: '03/2023 – 05/2023 (Online)',
          organization: 'Udemy',
        },
        {
          name: 'AI + ChatGPT-Gen AI',
          duration: '04/2024 – 05/2024 (Online)',
          organization: 'Udemy',
        },
        {
          name: 'Accounting Fundamentals',
          duration: '01/2022 – 02/2022 (Online)',
          organization: 'TCS LMS',
        },
        {
          name: 'German Language A1',
          duration: '08/2024 – 10/2024 (Online)',
          organization: 'Udemy Cognizant',
        },
      ],
    };
  },
};
</script>

<style scoped>
.certifications-section {
  background-color: #121212; /* Dark background */
  min-height: 100vh;
  padding-top: 64px;
}

.surface {
  background-color: #1e1e1e !important; /* Card background */
}

.accent--text {
  color: #1DB954 !important; /* Spotify green accent */
}

.white--text {
  color: white !important;
}
</style>