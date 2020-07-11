module.exports = {
  apps : [{
    name: 'mapport',
    script: 'index.js',
    watch: '.',
    env: {
      SOURCE: 4444,
      DEST: '10.8.0.3:4444'
    }
  }]
};
