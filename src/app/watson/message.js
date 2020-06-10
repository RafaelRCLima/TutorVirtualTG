let message = (assistant, msg, session, assistId) => {
  return new Promise((resolve, reject) => {
    assistant.message({
      assistantId: assistId,
      sessionId: session,
      input: {
        'message_type': 'text',
        'text': msg,
      }
    })
      .then(async res => {
        resolve(res.result)
      })
      .catch(err => {
        reject(err)
      })
  })
}

module.exports = message
