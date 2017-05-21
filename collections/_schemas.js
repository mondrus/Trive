// Generated by CoffeeScript 1.12.6
(function() {
  this.Schemas = {};

  Schemas.updatePassword = new SimpleSchema({
    old: {
      type: String,
      label: "Current Password",
      max: 50
    },
    "new": {
      type: String,
      min: 6,
      max: 20,
      label: "New Password"
    },
    confirm: {
      type: String,
      min: 6,
      max: 20,
      label: "Confirm new Password"
    }
  });

}).call(this);