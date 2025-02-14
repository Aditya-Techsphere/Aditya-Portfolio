<template>
  <v-app>
    <!-- Navigation Bar -->
    <v-app-bar color="surface" dark app>
      <v-toolbar-title class="text-h5 font-weight-bold">Tech-driven. Solution-focused.</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        v-for="link in links"
        :key="link.name"
        :to="link.path"
        text
        class="text-capitalize"
      >
        {{ link.name }}
      </v-btn>
    </v-app-bar>

    <!-- Main Content -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <!-- Footer -->
    <v-footer color="surface" dark padless>
      <v-container>
        <v-row justify="center">
          <v-col cols="12" class="text-center">
            <p class="mb-0">
              &copy; {{ new Date().getFullYear() }} Developed by Aditya Prasath. All rights reserved.
            </p>
            <div class="mt-2">
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
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      // Navigation Links
      links: [
        { name: 'Home', path: '/' },
        { name: 'Skills', path: '/skills' },
        { name: 'Experience', path: '/experience' },
        { name: 'Education', path: '/education' },
        { name: 'Certifications', path: '/certifications' },
        { name: 'Knowledge Base', path: '/knowledge-base' },
        { name: 'Connect', path: '/connect' },
      ],

      // Social Media Icons
      // socialIcons: [
      //   { icon: 'mdi-linkedin', link: 'https://www.linkedin.com/in/your-profile' },
      //   { icon: 'mdi-github', link: 'https://github.com/your-profile' },
      //   { icon: 'mdi-twitter', link: 'https://twitter.com/your-profile' },
      //   { icon: 'mdi-email', link: 'mailto:your-email@example.com' },
      // ],
    };
  },
};
</script>

<style scoped>
.v-application .text-capitalize {
  text-transform: capitalize;
}
</style>