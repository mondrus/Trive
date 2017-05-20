# See https://github.com/meteor-useraccounts/core/blob/master/Guide.md

AccountsTemplates.configure

  # Behaviour
  confirmPassword: true
  enablePasswordChange: true
  forbidClientAccountCreation: false
  overrideLoginErrors: true
  sendVerificationEmail: true
  lowercaseUsername: true

  # Appearance
  showAddRemoveServices: true
  showForgotPasswordLink: true
  showLabels: true
  showPlaceholders: true
  showResendVerificationEmailLink: true

  # Client-side Validation
  continuousValidation: true
  negativeFeedback: true
  negativeValidation: true
  positiveValidation: false
  positiveFeedback: true
  showValidating: true

  # Privacy Policy and Terms of Use
  privacyUrl: Config.privacyUrl || null
  termsUrl: Config.termsUrl || null
  
  # Redirects
  homeRoutePath: Config.dashboardRoute || null

  # Hooks
  onLogoutHook: ->
    console.log 'logout'

  onSubmitHook: ->
    console.log 'submitting form'

AccountsTemplates.configureRoute 'signIn'
AccountsTemplates.configureRoute 'signUp'
AccountsTemplates.configureRoute 'forgotPwd'
