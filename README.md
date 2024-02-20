# no2fa [![CI Build](https://github.com/MrExplode/no2fa/actions/workflows/check.yml/badge.svg)](https://github.com/MrExplode/no2fa/actions/workflows/check.yml)

A simple userscript to bypass the Neptun 2fa.  
This userscript is compatible with [npu](https://github.com/solymosi/npu).

> Why would I want to do that?

This tool is right for you if:
- You are confident in your security measures without 2fa
- Annoyed with the dumb implementation on Neptun (no session restore, no device remembering)

## Install
1. Install [**TamperMonkey**](https://www.tampermonkey.net/)

## Usage
2. Go to `My Data > Settings > Two-factor authentication`
3. Click `Turn off`
4. Click enable
5. Click on the `Enable Bypass` button
6. Enable the 2fa as usual (eg. with Microsoft Authenticator)

## Development
This project is built with [Vite](https://vitejs.dev/) using [pnpm](https://pnpm.io/).   

---
Install the dependencies:
```bash
pnpm install
```
Start development server:  
(This will start the Vite dev server, and install a bridge userscript that allows hot reloading)
```bash
pnpm run dev
```
Building the production release:
```bash
pnpm run build
```

## Licensing
```
MIT License

Copyright (c) 2024 SunStorm

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```