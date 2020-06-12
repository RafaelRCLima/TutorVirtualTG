const AssistantV2 = require('ibm-watson/assistant/v2')
const { IamAuthenticator } = require('ibm-watson/auth')

const assistant = new AssistantV2({
  version: '2020-06-08',
  authenticator: new IamAuthenticator({
    apikey: '4Woy5ObjCDDc9n9nBQ7XtcvOSIxKF6gkAQm9G0J6zQgo'
  }),
  url: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/fa5e8ab9-3b9c-4fd8-9d95-4489d5b6a05d',
  disableSslVerification: true
})

module.exports = assistant
