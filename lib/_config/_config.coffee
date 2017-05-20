# These values get propagated through the app
# E.g. The 'name' and 'subtitle' are used in seo.coffee

@Config =

	# Basic Details
	name: 'Trive'
	title: ->
			TAPi18n.__ 'configTitle'
	subtitle: ->
			TAPi18n.__ 'configSubtitle'
	logo: ->
		'<b>' + @name + '</b>'
	footer: ->
		@name + ' - Copyright ' + new Date().getFullYear()

	# Emails
	emails:
		from: 'no-reply@' + Meteor.absoluteUrl()
		contact: 'hello' + Meteor.absoluteUrl()

	# Username - if true, users are forced to set a username
	username: false

	# Localisation
	defaultLanguage: 'en'
	dateFormat: 'D/M/YYYY'

	# Meta / Extenrnal content
	privacyUrl: 'http://trive.news'
	termsUrl: 'http://trive.news'

	# For email footers
	legal:
		address: 'Eichenstrasse 30, 6015 Luzern, Switzerland'
		name: 'Orbit GmbH'
		url: 'http://orbit.mn'

	about: 'http://orbit.mn'
	blog: 'http://trive.news'

	socialMedia:
		facebook:
			url: 'http://facebook.com/TriveNews'
			icon: 'facebook'
		twitter:
			url: 'http://twitter.com/trive_news'
			icon: 'twitter'
		github:
			url: 'http://github.com/mondrus/trive'
			icon: 'github'
		info:
			url: 'http://trive.news'
			icon: 'link'

	#Routes
	homeRoute: '/'
	publicRoutes: ['home']
	dashboardRoute: '/dashboard'
