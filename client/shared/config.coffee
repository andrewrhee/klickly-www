module.exports = require '../../config/locals.json'
module.exports.errors =
  ajax: "<div class=\"alert alert-danger fade in\">
    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>
    <strong>Oh snap!</strong> There was an error saving. Please try again.
    </div>"
  validation: "<div class=\"alert alert-danger fade in\">
    <button type=\"button\" class=\"close\" data-dismiss=\"alert\">×</button>
    <strong>Oh snap!</strong> Please fix the errors below
    </div>"