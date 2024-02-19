import { defineConfig } from 'vite'
import monkey from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        minify: 'esbuild'
    },
    plugins: [
        monkey({
            entry: 'src/main.ts',
            userscript: {
                icon: 'https://vitejs.dev/logo.svg',
                namespace: 'npm/vite-plugin-monkey',
                author: 'SunStorm',
                description: 'Bypass the Neptun 2fa',
                // list borrowed from NPU
                match: [
                    'https://*neptun*/*hallgato*/*',
                    'https://*neptun*/*Hallgatoi*/*',
                    'https://*neptun*/*oktato*/*',
                    'https://*hallgato*.*neptun*/*',
                    'https://*oktato*.*neptun*/*',
                    'https://netw*.nnet.sze.hu/hallgato/*',
                    'https://nappw.dfad.duf.hu/hallgato/*',
                    'https://host.sdakft.hu/*',
                    'https://neptun.ejf.hu/ejfhw/*'
                ],
                grant: ['GM.getValue', 'GM.setValue']
            }
        })
    ]
})
