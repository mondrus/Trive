Router.map ->

  @route 'signOut',
    path: '/sign-out'
    onBeforeAction: ->
      Meteor.logout ->
      @redirect '/'
      @next()