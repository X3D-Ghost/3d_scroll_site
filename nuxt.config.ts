// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        "@/assets/scss/main.scss",
    ],
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "@/assets/scss/variables.scss" as *;'
                }
            },
            devSourcemap: true,
        },
    },
    app: {
        head: {
            htmlAttrs: {
                'data-bs-theme':"dark"
            }
        }
    }
})
