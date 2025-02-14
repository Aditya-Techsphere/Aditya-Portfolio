import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';

export default createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'spotifyTheme',
    themes: {
      spotifyTheme: {
        dark: true,
        colors: {
          background: '#121212',
          surface: '#181818',
          primary: '#1DB954',
          secondary: '#1ED760',
          accent: '#FFD700',
          error: '#FF5252',
          info: '#2196F3',
          success: '#4CAF50',
          warning: '#FFC107',
        },
      },
    },
  },
});