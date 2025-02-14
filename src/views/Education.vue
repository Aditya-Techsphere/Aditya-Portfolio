<template>
    <v-container>
      <v-row>
        <v-col cols="12">
          <h2 class="text-h4">Education</h2>
        </v-col>
        <v-col cols="12" sm="6" v-for="(edu, index) in education" :key="index">
          <v-card class="pa-4">
            <v-card-title>{{ edu.degree }}</v-card-title>
            <v-card-subtitle>{{ edu.institution }} | {{ edu.year }}</v-card-subtitle>
            <v-card-subtitle>{{ edu.award }}</v-card-subtitle>
            <v-card-text>GPA: {{ edu.gpa }}</v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        education: [
          {
            degree: 'B.Tech in Computer Science and Business Systems',
            institution: 'SRM Institute of Science and Technology',
            year: '2019 - 2023',
            gpa: '3.98/4.00',
            award: 'Outstanding Contribution Award 2019-23, Presented by Dean.'
          },
        ],
      };
    },
  };
  </script>