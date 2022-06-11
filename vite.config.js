// vite.config.js
const { resolve } = require('path')
const { defineConfig } = require('vite')

module.exports = defineConfig({
    build: {
        rollupOptions: {
            input: {
                home: resolve(__dirname, 'index.html'),
                work: resolve(__dirname, 'work.html'),
                blog: resolve(__dirname, 'blog.html'),
                thongtin: resolve(__dirname, 'thongtin.html'),

            }
        }
    }
})