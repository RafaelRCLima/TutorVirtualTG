let watsonController = {
  async sendMessage(req, res) {
    resultado = await watsonService.message(req.body.message)
    res.json(resultado)
  }
}

module.exports = watsonController
