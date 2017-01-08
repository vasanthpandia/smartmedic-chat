module.exports = plugin => {
  plugin.route({
    path: '/chat',
    method: 'GET',
    handler(request, reply) {
      reply.file('public/chat.html');
    }
  })
}