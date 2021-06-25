module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8070',
        // ws: true,
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        },
      },
      '/media': {
        target: 'http://localhost:8070',
        changeOrigin: true,
      },
    },
  },
}