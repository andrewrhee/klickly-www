module.exports = class ModalRegion extends Backbone.Marionette.Region
  el: "#modal"

  constructor: ->
    super()
    @on "show", @showModal

  showModal: (view) =>
    view.on "close", => @hideModal(view)
    $modal = view.$('.modal')
    $modal.modal()
    $modal.on 'hidden.bs.modal', @close

  hideModal: (view) ->
    view.$('.modal').modal('hide')