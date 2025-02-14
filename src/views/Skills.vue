<template>
  <v-container fluid class="skills-section">
    <!-- Skills Section -->
    <v-row justify="center" class="mt-12">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 font-weight-bold accent--text mb-6">My Skills</h2>
      </v-col>

      <!-- Skill Cards -->
      <v-col
        v-for="(category, index) in skillCategories"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        class="d-flex align-stretch"
      >
        <v-card elevation="0" class="pa-6 text-center flex-grow-1" color="surface">
          <v-card-title class="text-h6 font-weight-bold accent--text">{{ category.title }}</v-card-title>
          <v-card-text>
            <v-chip
              v-for="(skill, idx) in category.skills"
              :key="idx"
              class="ma-1"
              color="accent"
              text-color="white"
            >
              {{ skill }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      skillCategories: [
        {
          title: 'Programming Languages',
          skills: ['Java', 'JavaScript','R','C++'],
        },
        {
          title: 'Web Development',
          skills: ['HTML', 'CSS', 'React.js', 'Node.js', 'Laravel', 'TailwindCSS'],
        },
        {
          title: 'AI & Machine Learning',
          skills: ['TensorFlow', 'Keras', 'Scikit-learn', 'NLP', 'Deep Learning', 'Recommendation Systems'],
        },
        {
          title: 'Data Analytics & Visualization',
          skills: ['Tableau', 'Microsoft Excel', 'RStudio', 'Applied Statistics'],
        },
        {
          title: 'Cloud Computing',
          skills: ['AWS', 'Google Cloud'],
        },
        {
          title: 'Automation',
          skills: ['Workflow Automation', 'Robotic Process Automation (RPA)', 'AI-based Process Automation'],
        },
        {
          title: 'Database Management',
          skills: ['SQL', 'GraphQL', 'PL/SQL', 'JSON', 'XML', 'APIs'],
        },
        {
          title: 'App Development',
          skills: ['Flutter'],
        },
        {
          title: 'Blockchain',
          skills: ['Smart Contracts', 'Ethereum'],
        },
        {
          title: 'Tools & Frameworks',
          skills: ['Git', 'Docker', 'PEGA Platform 24.2', 'PEGA Customer Decision Hub', 'Postman', 'Kibana'],
        },
        {
          title: 'Project Management',
          skills: ['Jira', 'Slack', 'Scrum'],
        },
        {
          title: 'Soft Skills',
          skills: ['Problem Solving', 'Leadership', 'Team Collaboration', 'Communication', 'Adaptability'],
        },
      ],
    };
  },
};
</script>

<style scoped>
.skills-section {
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

.v-card {
  height: 100%; /* Ensure all cards have the same height */
  display: flex;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1; /* Allow the content to fill available space */
}
</style>