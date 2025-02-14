<template>
  <v-container fluid class="knowledge-base-section">
    <!-- Knowledge Base Section -->
    <v-row justify="center" class="mt-12">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 font-weight-bold accent--text mb-6">Knowledge Base</h2>
        <p class="white--text">Explore top technology research pages and blogs to stay updated with the latest trends and innovations.</p>
      </v-col>

      <!-- Technology Research Pages -->
      <v-col cols="12" class="text-center">
        <h3 class="text-h5 font-weight-bold accent--text mb-4">Top Technology Research Pages</h3>
      </v-col>

      <v-col
        v-for="(page, index) in researchPages"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="d-flex align-stretch px-4 py-2"
      >
        <v-card elevation="0" class="pa-6 text-left flex-grow-1" color="surface">
          <v-card-title class="text-h6 font-weight-bold accent--text">{{ page.name }}</v-card-title>
          <v-card-text class="white--text">{{ page.description }}</v-card-text>
          <v-card-actions>
            <v-btn :href="page.link" target="_blank" color="accent" small outlined>
              Visit Website
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>

      <!-- Technology Blogs -->
      <v-col cols="12" class="text-center mt-12">
        <h3 class="text-h5 font-weight-bold accent--text mb-4">Top Technology Blogs</h3>
      </v-col>

      <v-col
        v-for="(blog, index) in techBlogs"
        :key="index"
        cols="12"
        sm="6"
        md="4"
        class="d-flex align-stretch px-4 py-2"
      >
        <v-card elevation="0" class="pa-6 text-left flex-grow-1" color="surface">
          <v-card-title class="text-h6 font-weight-bold accent--text">{{ blog.name }}</v-card-title>
          <v-card-text class="white--text">{{ blog.description }}</v-card-text>
          <v-card-actions>
            <v-btn :href="blog.link" target="_blank" color="accent" small outlined>
              Read Blog
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      researchPages: [
        {
          name: 'MIT Technology Review',
          description: 'A leading source of insights on emerging technologies and their impact on business and society.',
          link: 'https://www.technologyreview.com/',
        },
        {
          name: 'IEEE Spectrum',
          description: 'The flagship magazine of the IEEE, covering engineering, technology, and science.',
          link: 'https://spectrum.ieee.org/',
        },
        {
          name: 'Nature Research',
          description: 'High-quality research papers and authoritative analysis from across the natural sciences.',
          link: 'https://www.nature.com/',
        },
        {
          name: 'ACM Digital Library',
          description: 'A comprehensive collection of computing literature, including journals, conference proceedings, and magazines.',
          link: 'https://dl.acm.org/',
        },
        {
          name: 'Google AI Blog',
          description: 'Updates and insights from Google’s AI research teams on machine learning, deep learning, and more.',
          link: 'https://ai.googleblog.com/',
        },
      ],
      techBlogs: [
        {
          name: 'Towards Data Science',
          description: 'A Medium publication sharing concepts, ideas, and codes in data science and machine learning.',
          link: 'https://towardsdatascience.com/',
        },
        {
          name: 'Smashing Magazine',
          description: 'A blog focused on web development, design, UX, and front-end technologies.',
          link: 'https://www.smashingmagazine.com/',
        },
        {
          name: 'CSS-Tricks',
          description: 'A blog about CSS, HTML, JavaScript, and all things web design and development.',
          link: 'https://css-tricks.com/',
        },
        {
          name: 'Dev.to',
          description: 'A community of software developers sharing articles, tutorials, and discussions on coding.',
          link: 'https://dev.to/',
        },
        {
          name: 'FreeCodeCamp Blog',
          description: 'Articles and tutorials on coding, web development, and career advice for developers.',
          link: 'https://www.freecodecamp.org/news/',
        },
      ],
    };
  },
};
</script>

<style scoped>
.knowledge-base-section {
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