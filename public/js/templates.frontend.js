this["JST"] = this["JST"] || {};

this["JST"]["nav"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += " "
    + "\n      <button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li class=\"dropdown\">\n          <a href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">Account <b class=\"caret\"></b></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"/client/edit/";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" data-path='/client/edit/";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "'>My Profile</a></li>\n            <li><a href=\"/client/logout\">Logout</a></li>\n          </ul>\n        </li>\n      ";
  return buffer;
  }

  buffer += "<div id=\"header-container\" class=\"container\">\n  <div class=\"navbar-header\">\n    ";
  stack1 = helpers['if'].call(depth0, depth0._id, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    <a href=\"/\" class=\"navbar-brand\">Klickly</a>\n  </div>\n  <nav role=\"navigation\" class=\"collapse navbar-collapse bs-navbar-collapse\">\n    <ul class=\"nav navbar-nav navbar-right\">\n      ";
  stack1 = helpers['if'].call(depth0, depth0._id, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </nav>\n</div>";
  return buffer;
  });

this["JST"]["order/checkout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n  <div class=\"panel\">\n    <h3>Thank you for your order!</h3>\n    <dl class=\"dl-horizontal\">\n      <dt>Order Id:</dt>\n      <dd>";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</dd>\n      <dt>Total:</dt>\n      <dd>";
  if (stack1 = helpers.amount) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.amount; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</dd>\n\n      <dt>Address:</dt>\n      <dd>\n        "
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n        "
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.street1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.street2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "<br/>\n        "
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ", "
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " "
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.postalCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n      </dd>\n    </dl>\n  </div>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n  <div class=\"panel\">\n    <form method=\"post\" class=\"form\">\n      ";
  stack2 = helpers.unless.call(depth0, ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.email), {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      <fieldset>\n        <legend>Billing Information</legend>\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.payment)),stack1 == null || stack1 === false ? stack1 : stack1.token), {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        <div class='card-entry' ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.payment)),stack1 == null || stack1 === false ? stack1 : stack1.token), {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += ">\n          <div class=\"row\">\n            <div class=\"form-group form-group col-lg-8\">\n              <label for=\"card.number\" class=\"control-label\">Card Number:</label>\n              <div class=\"controlls\">\n                <input type=\"text\" name=\"card.number\" value=\"\" placeholder=\"•••• •••• •••• ••••\" class=\"form-control\"/>\n              </div>\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"card.expiresAt\" class=\"control-label\">Expires:</label>\n              <div class=\"controlls\">\n                <input type=\"text\" name=\"card.exiresAt\" value=\"\" placeholder=\"MM / YY\" class=\"form-control\"/>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-lg-8\">\n              <label for=\"card.cardholderName\" class=\"control-label\">Name on Card:</label>\n              <div class=\"controlls\">\n                <input type=\"text\" name=\"card.cardholderName\" placeholder=\"\" class=\"form-control\"/>\n              </div>\n            </div>\n            <div class=\"form-group col-lg-4\">\n              <label for=\"card.cvv\" class=\"control-label\">Card Code:</label>\n              <div class=\"controlls\">\n                <input type=\"text\" name=\"card.cvv\" value=\"\" placeholder=\"CVC\" class=\"form-control\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n      </fieldset>\n      <fieldset>\n        <legend>Shipping Information</legend>\n        <div class=\"form-group\">\n          <div class=\"controls\">\n            <input type=\"text\" name=\"address.name\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.addresses)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"Recepient's Name\" class=\"form-control\"/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"controls\">\n            <input type=\"text\" name=\"address.streetAddress\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.addresses)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.street1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"Street\" class=\"form-control\"/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"controls\">\n            <input type=\"text\" name=\"address.extendedAddress\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.addresses)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.street2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"Apt or Unit #\" class=\"form-control\"/>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-lg-7\">\n            <div class=\"controls\">\n              <input type=\"text\" name=\"address.locality\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.addresses)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"City\" class=\"form-control\"/>\n            </div>\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <div class=\"controls\">\n              <input type=\"text\" name=\"address.region\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.addresses)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"State\" class=\"form-control\"/>\n            </div>\n          </div>\n          <div class=\"form-group col-lg-3\">\n            <div class=\"controls\">\n              <input type=\"text\" name=\"address.postalCode\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.addresses)),stack1 == null || stack1 === false ? stack1 : stack1[0])),stack1 == null || stack1 === false ? stack1 : stack1.postalCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"Postal Code\" class=\"form-control\"/>\n            </div>\n          </div>\n        </div>\n      </fieldset>\n      <div class=\"form-group clearfix\">\n        <button type=\"submit\" class=\"pull-right btn btn-primary btn-lg\">Purchase Now!</button>\n      </div>\n    </form>\n  </div>\n";
  return buffer;
  }
function program4(depth0,data) {
  
  
  return "\n      <fieldset>\n          <legend>Contact Information</legend>\n          <div class=\"row\">\n            <div class=\"form-group col-lg-8\">\n              <label for=\"email\" class=\"control-label\">Email:</label>\n              <div class=\"controlls\">\n                <input type=\"text\" name=\"email\" placeholder=\"me@domain.com\" class=\"form-control\"/>\n              </div>\n            </div>\n          </div>\n        </fieldset>\n      ";
  }

function program6(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <div class=\"saved-card\">Use "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.payment)),stack1 == null || stack1 === false ? stack1 : stack1.cardType)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " ending with "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.payment)),stack1 == null || stack1 === false ? stack1 : stack1.last4)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " <a href=\"#\" class='change-cc'>change</a></div>\n        ";
  return buffer;
  }

function program8(depth0,data) {
  
  
  return "style=\"display:none;\"";
  }

  stack1 = helpers['if'].call(depth0, depth0._id, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });

this["JST"]["product/details"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n    <div class=\"buy\">\n      <a href=\"/purchase/"
    + escapeExpression(((stack1 = ((stack1 = depth0.campaign),stack1 == null || stack1 === false ? stack1 : stack1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn btn-primary btn-lg\"><i class=\"glyphicon glyphicon-shopping-cart\"></i> Buy Now</a>\n    </div>\n  ";
  return buffer;
  }

  buffer += "<div id=\"panel-product\" class=\"panel\">\n  <div class='product-header'>\n    <img width=\"72\" src=\"";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" class=\"product-img\"/>\n    <h2>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h2>\n  </div>\n  <p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n  <div>$";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</div>\n  ";
  stack1 = helpers.unless.call(depth0, depth0.isCheckout, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n</div>";
  return buffer;
  });

this["JST"]["twoPanel"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n  <div class=\"col-lg-6\" id=\"left-region\">\n  </div>\n  <div class=\"col-lg-6\" id=\"right-region\">\n  </div>\n</div>";
  });

this["JST"]["user/loginModal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='modal fade'>\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <div class=\"login-modal\">\n        <h1>Please login to Klickly</h1>\n        <div class=\"login-to-facebook\">\n          <a href=\"/user/facebook/connect/"
    + escapeExpression(((stack1 = ((stack1 = depth0.campaign),stack1 == null || stack1 === false ? stack1 : stack1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn btn-lg btn-facebook\">\n            <i class=\"icon-facebook\"></i><span>|</span>Login to Facebook\n          </a>\n          </div>\n        <h6>- OR -</h6>\n        <div class=\"login-to-twitter\">\n          <a href=\"/user/twitter/connect/"
    + escapeExpression(((stack1 = ((stack1 = depth0.campaign),stack1 == null || stack1 === false ? stack1 : stack1._id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" class=\"btn btn-lg btn-twitter\">\n            <i class=\"icon-twitter\"></i><span>|</span>Login to Twitter\n          </a>\n        </div>\n\n        <small>By login in I agree to both the <a href=\"#\">terms of service</a> and our <a href=\"#\">privacy policy</a>.</small>\n\n      </div>\n    </div>\n  </div>\n</div>";
  return buffer;
  });