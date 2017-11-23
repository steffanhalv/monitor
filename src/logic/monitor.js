import net from 'net'

class Monitor {
  constructor () {
    this.install = (Vue) => {
      Vue.prototype.$mo = {
        Monitor: {
          start () {
            let server = net.createServer(connection => {
              connection.on('end', () => {
                console.log('client disconnected')
              })
              connection.write('hello')
              connection.pipe(connection)
            })
            server.on('error', error => {
              console.log(error)
            })
            server.listen(8124, () => {
              console.log('server started')
            })
          }
        }
      }
    }
  }
}

export default new Monitor()
