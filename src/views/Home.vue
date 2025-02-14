<template>
  <v-container fluid class="home-section">
    <!-- Hero Section -->
    <v-row justify="center" align="center" class="hero-section">
      <v-col cols="12" md="8" class="text-center z-index-1">
        <h1 class="text-h3 font-weight-bold accent--text mb-4">Aditya Prasath - Developer / Innovator.</h1>

        <!-- Animated Text Section -->
        <div class="animated-text">
          <p class="highlight white--text animate-fade-in">Bridging the gap between ideas and technology, one innovation at a time.</p>
          <p class="white--text animate-fade-in delay-1">-- Passionate about AI-driven solutions, automation, and scalable applications.</p>
          <p class="white--text animate-fade-in delay-2">-- <strong>Tech Stack:</strong> AI, ML, Full Stack Development, Blockchain, Cloud Solutions</p>
          <p class="white--text animate-fade-in delay-3">-- Always pushing the boundaries of technology to create impactful solutions.</p>
          <p class="white--text animate-fade-in delay-4">-- On a mission to revolutionize the digital landscape with cutting-edge innovations.</p>
        </div>

        <!-- Call-to-Action Buttons -->
        <v-btn
          href="https://www.linkedin.com/in/adityaprasath"
          target="_blank"
          color="accent"
          class="mt-4 mr-4"
        >
          Connect on LinkedIn
        </v-btn>
      </v-col>
    </v-row>

    <!-- Fun Section: Guess the Number Game -->
    <v-row justify="center" class="fun-section mt-12 z-index-1">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 font-weight-bold accent--text mb-6">Take a Break! Play "Guess the Number" 🎮</h2>
        <v-card elevation="0" class="pa-6 text-center" color="surface">
          <v-card-title class="text-h5 accent--text">Guess the Number</v-card-title>
          <v-card-text class="white--text">
            I've picked a number between 1 and 100. Can you guess it?
          </v-card-text>
          <v-text-field
            v-model="userGuess"
            label="Enter your guess"
            type="number"
            dark
            outlined
            dense
            class="mb-4"
          ></v-text-field>
          <v-btn color="accent" @click="checkGuess" :disabled="gameOver">Submit Guess</v-btn>
          <v-card-text class="white--text">
            {{ message }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <!-- Tailored Facts Section -->
    <v-row justify="center" class="facts-section mt-12 z-index-1">
      <v-col cols="12" class="text-center">
        <h2 class="text-h4 font-weight-bold accent--text mb-6">My Power Spots</h2>
        <v-row justify="center">
          <v-col cols="12" sm="6" md="4" v-for="(fact, index) in facts" :key="index">
            <v-card elevation="0" class="pa-6 text-center" color="surface">
              <v-icon size="64" color="accent">{{ fact.icon }}</v-icon>
              <v-card-title class="text-h6 font-weight-bold accent--text">{{ fact.title }}</v-card-title>
              <v-card-text class="white--text">{{ fact.description }}</v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      randomNumber: Math.floor(Math.random() * 100) + 1, // Random number between 1 and 100
      userGuess: null,
      message: "Start guessing!",
      gameOver: false,
      facts: [
        {
          icon: 'mdi-lightbulb-on',
          title: 'Freelance Projects',
          description: 'Created custom automation solutions for government and private sectors, enhancing workflow efficiency.',
        },
        {
          icon: 'mdi-brain',
          title: 'Intelligent Surveillance Research',
          description: 'Contributed to research on intelligent surveillance using deep learning modules for edge networks.',
        },
        {
          icon: 'mdi-school',
          title: 'Teaching & Mentoring',
          description: 'Served as a resource person at institutions like SIMS Hospital and VIT Chennai, teaching Full Stack Development and AI.',
        },
        {
          icon: 'mdi-laptop',
          title: 'Full Stack Automation',
          description: 'Built Internal Workflow Automation Software for finance companies using Node.js.',
        },
        {
          icon: 'mdi-certificate',
          title: 'Certifications & Training',
          description: 'Earned certifications in PEGA, Cisco, Intel AI, and trained teams on emerging technologies.',
        },
        {
          icon: 'mdi-account-group',
          title: 'Leadership Roles',
          description: 'Led events for Rotary International and White Hat Hackers Club, securing sponsorships and organizing tech symposiums.',
        },
      ],
    };
  },
  methods: {
    checkGuess() {
      const guess = parseInt(this.userGuess);
      if (isNaN(guess)) {
        this.message = "Please enter a valid number!";
        return;
      }
      if (guess === this.randomNumber) {
        this.message = `🎉 Correct! The number was ${this.randomNumber}.`;
        this.gameOver = true;
      } else if (guess < this.randomNumber) {
        this.message = "Too low! Try again.";
      } else {
        this.message = "Too high! Try again.";
      }
    },
  },
};
</script>

<style scoped>
.home-section {
  background-color: #121212; /* Dark background */
  min-height: 100vh;
  padding-top: 64px;
  position: relative;
  overflow: hidden;
}

.hero-section {
  padding: 64px 16px;
  position: relative;
  z-index: 1;
}

/* Background Math Formulas */
.home-section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='250'%3E%3Ctext x='10%25' y='50%25' font-size='20' fill='%231DB954' text-anchor='middle' dominant-baseline='middle'%3E%E2%88%AB%28x%5E2%29dx%3C/text%3E%3C/svg%3E"),
             url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='150'%3E%3Ctext x='50%25' y='50%25' font-size='25' fill='%231DB954' text-anchor='middle' dominant-baseline='middle'%3E%E2%88%9A%7Bx%5E2+%2B+y%5E2%7D%3C/text%3E%3C/svg%3E"),
             url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height=350'%3E%3Ctext x='50%25' y='50%25' font-size='10' fill='%231DB954' text-anchor='middle' dominant-baseline='middle'%3E%E2%88%82u/%E2%88%82t%3C/text%3E%3C/svg%3E");
  background-repeat: repeat;
  opacity: 0.1;
  z-index: 0;
}

.highlight {
  font-size: 1.5rem;
  font-weight: 500;
}

.fun-section {
  padding: 64px 16px;
}

.facts-section {
  padding: 64px 16px;
}

.accent--text {
  color: #1DB954 !important; /* Spotify green accent */
}

.white--text {
  color: white !important;
}

.surface {
  background-color: #1e1e1e !important; /* Card background */
}

.z-index-1 {
  position: relative;
  z-index: 1;
}

/* Animation Styles */
.animated-text p {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 1s ease-in-out forwards;
}

.animate-fade-in.delay-1 {
  animation-delay: 0.5s;
}

.animate-fade-in.delay-2 {
  animation-delay: 1s;
}

.animate-fade-in.delay-3 {
  animation-delay: 1.5s;
}

.animate-fade-in.delay-4 {
  animation-delay: 2s;
}

@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>