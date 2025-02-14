<template>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <h2 class="text-h4 text-center">Let's Connect</h2>
          <p class="text-body-1 text-center mt-4">
            Feel free to reach out via email or connect on social media.
          </p>
          <div class="text-center">
            <v-btn
              v-for="(icon, index) in socialIcons"
              :key="index"
              :href="icon.link"
              target="_blank"
              icon
              class="mx-2"
            >
              <v-icon>{{ icon.icon }}</v-icon>
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    data() {
      return {
        socialIcons: [
          { icon: 'github.ico', link: 'https://www.linkedin.com/in/adityaprasath' },
          { icon: 'mdi-github', link: 'https://github.com/Aditya-Techsphere' },
          { icon: 'mdi-email', link: 'prasathaditya3333@gmail.com' },
        ],
      };
    },
  };
  </script>