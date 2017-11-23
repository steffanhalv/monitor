module.exports = {
  externals: {
    electron: 'electron',
    path: 'path'
  },
  target : 'node',

  env: require('./build.env')
}
