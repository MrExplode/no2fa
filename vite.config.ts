import { defineConfig } from 'vite'
import monkey from 'vite-plugin-monkey'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        monkey({
            entry: 'src/main.ts',
            userscript: {
                icon: 'https://vitejs.dev/logo.svg',
                namespace: 'sunstorm/neptun',
                author: 'SunStorm',
                description: 'Bypass the Neptun 2fa',
                copyright: 'MIT License',
                supportURL: 'https://github.com/MrExplode/no2fa',
                updateURL:
                    'https://github.com/MrExplode/no2fa/releases/latest/download/no2fa.user.js',
                // list borrowed from NPU
                include: [
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
                grant: ['GM.getValue', 'GM.setValue', 'GM_deleteValue']
            }
        })
    ]
})
