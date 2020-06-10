let watsonSession = (assistant, assistId) => {
  return new Promise(async (resolve, reject) => {
    await assistant.createSession({
      assistantId: assistId
    })
      .then(async res => {
        let session = await res.result.session_id
        resolve(session)
      }).catch(err => {
        reject(err)
      })
  })
}

module.exports = watsonSession
