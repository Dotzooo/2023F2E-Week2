// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  vite: {
    css: {
      
    }
  },
  css: ['@/assets/css/tailwind.css'],
  postcss: { // CSS 屬性加上瀏覽器相容性前綴
    plugins: {
        autoprefixer: true
    }
  },
  modules: ['@nuxtjs/tailwindcss', "@nuxt/image"],
})