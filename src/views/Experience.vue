<template>
    <v-container>
      <v-timeline>
        <v-timeline-item v-for="(exp, index) in experiences" :key="index" :dot-color="exp.color">
          <v-card>
            <v-card-title>{{ exp.company }}</v-card-title>
            <v-card-subtitle>{{ exp.position }} | {{ exp.duration }}</v-card-subtitle>
            <v-card-text>{{ exp.description }}</v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        experiences: [
          {
            company: 'Cognizant',
            position: 'Programmer Analyst',
            duration: '11/2023 - Present',
            description: 'Contributed to a Telecom Giant - 5G development, focusing on billing and defect management. Collaborated on cutting-edge technologies to enhance network infrastructure and improve client solutions. Developed efficient solutions through defect management processes, ensuring optimal service delivery.',
            color: 'primary',
          },
          {
            company: 'BSP & CO.',
            position: 'Software Developer Intern',
            duration: 'Summer 2023',
            description: 'Worked on developing and improving software systems for clients, contributing to project success. Focused on the end-to-end development of applications, ensuring smooth integration and functionality.',
            color: 'secondary',
          },
          {
            company: 'SMZ & CO.',
            position: 'Software Developer Intern',
            duration: 'Summer 2022',
            description: 'Developed internal workflow automation software for a finance and forex company using Node.js. Enhanced business efficiency by automating complex processes, reducing time and effort for daily operations. Gained hands-on experience in full stack development and contributed to product enhancements.',
            color: 'accent',
          },
        ],
      };
    },
  };
  </script>