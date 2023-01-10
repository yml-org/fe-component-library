module.exports = {
  mode:'jit',
  content: [
    './*.html',
    './src/**/*.{ts,html,css,scss,js}'
  ],
  theme: {
    colors: {
      'white':'#ffffff',
      'black':'#000000',
      'grey':'#d3dce6',
      'brown':'#364546'
    },
    extend: {},
  },
  plugins: [],
};
