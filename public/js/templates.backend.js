this["JST"] = this["JST"] || {};

this["JST"]["client"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <div class=\"form-group checkbox\">\n            <label>\n              <input type=\"checkbox\" name='isAdmin' value='true' ";
  stack1 = helpers['if'].call(depth0, depth0.isAdmin, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " /> Is Admin\n            </label>\n          </div>\n        ";
  return buffer;
  }
function program2(depth0,data) {
  
  
  return "checked";
  }

function program4(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.social),stack1 == null || stack1 === false ? stack1 : stack1.twitter)),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=24 />\n              "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.social),stack1 == null || stack1 === false ? stack1 : stack1.twitter)),stack1 == null || stack1 === false ? stack1 : stack1.screenName)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n              (<a href=\"#\" class='remove-twitter'>remove</a>)\n            ";
  return buffer;
  }

function program6(depth0,data) {
  
  
  return "\n              <a class='btn btn-success' href='/client/twitter/connect'>Sign into Twitter</a>\n            ";
  }

function program8(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              <img src=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.social),stack1 == null || stack1 === false ? stack1 : stack1.facebook)),stack1 == null || stack1 === false ? stack1 : stack1.image)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" height=24 />\n              "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.social),stack1 == null || stack1 === false ? stack1 : stack1.facebook)),stack1 == null || stack1 === false ? stack1 : stack1.username)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\n              (<a href=\"#\" class='remove-facebook'>remove</a>)\n            ";
  return buffer;
  }

function program10(depth0,data) {
  
  
  return "\n              <a class='btn btn-success' href='/client/facebook/connect'>Sign into Facebook</a>\n            ";
  }

function program12(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n              "
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.payment),stack1 == null || stack1 === false ? stack1 : stack1.braintree)),stack1 == null || stack1 === false ? stack1 : stack1.status)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + " (<a href=\"#\" class='remove-payment'>remove merchant info</a>)\n            ";
  return buffer;
  }

function program14(depth0,data) {
  
  
  return "\n              <a class='btn btn-success payment-modal' href='#'>Enter Payment Info</a>\n            ";
  }

function program16(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"klicklyRate\">Klickly Rate</label>\n            <div class=\"controls\">\n              <input type=\"text\" class=\"form-control\" name=\"klicklyRate\" value=\"";
  if (stack1 = helpers.klicklyRate) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.klicklyRate; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" placeholder=\"0.05\"/>\n            </div>\n          </div>\n        ";
  return buffer;
  }

  buffer += "<h1>Client</h1>\n<form>\n  <fieldset>\n    <legend>Basic Information</legend>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"name\">Name</label>\n          <div class=\"controls\">\n            <input type=\"text\" class=\"form-control\" name=\"name\" value=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"username\">Username</label>\n          <div class=\"controls\">\n            <input type=\"text\" autocomplete='off' class=\"form-control\" name=\"username\" value=\"";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"password\">Password</label>\n          <div class=\"controls\">\n            <input type=\"password\" autocomplete='off' class=\"form-control\" name=\"password\" placeholder=\"Min. 6 Characters\" />\n          </div>\n        </div>\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.isAdmin), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"email\">Email</label>\n          <div class=\"controls\">\n            <input type=\"text\" autocomplete='off' class=\"form-control\" name=\"email\" value=\"";
  if (stack2 = helpers.email) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.email; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"phone\">Phone Number</label>\n          <div class=\"controls\">\n            <input type=\"text\" class=\"form-control\" name=\"phone\" value=\"";
  if (stack2 = helpers.phone) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0.phone; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"address.street1\">Address</label>\n          <div class=\"controls\">\n            <input type=\"text\" class=\"form-control\" name=\"address.street1\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.street1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"Street\"/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"controls\">\n            <input type=\"text\" class=\"form-control\" name=\"address.street2\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.street2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"Apt or Unit #\"/>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"form-group col-lg-7\">\n            <div class=\"controls\">\n              <input type=\"text\" class=\"form-control\" name=\"address.city\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"City\"/>\n            </div>\n          </div>\n          <div class=\"form-group col-lg-2\">\n            <div class=\"controls\">\n              <input type=\"text\" class=\"form-control\" name=\"address.state\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"State\"/>\n            </div>\n          </div>\n          <div class=\"form-group col-lg-3\">\n            <div class=\"controls\">\n              <input type=\"text\" class=\"form-control\" name=\"address.postalCode\" value=\""
    + escapeExpression(((stack1 = ((stack1 = depth0.address),stack1 == null || stack1 === false ? stack1 : stack1.postalCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"Zip Code\"/>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <fieldset>\n    <legend>Social</legend>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"social.twitter\">Twitter</label>\n          <div class=\"controls\">\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.social),stack1 == null || stack1 === false ? stack1 : stack1.twitter)),stack1 == null || stack1 === false ? stack1 : stack1.screenName), {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"social.facebook\">Facebook</label>\n          <div class=\"controls\">\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.social),stack1 == null || stack1 === false ? stack1 : stack1.facebook)),stack1 == null || stack1 === false ? stack1 : stack1.username), {hash:{},inverse:self.program(10, program10, data),fn:self.program(8, program8, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </div>\n        </div>\n      </div>\n    </div>\n  </fieldset>\n  <fieldset>\n    <legend>Payment</legend>\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"paypal.email\">Merchant Account</label>\n          <div class=\"controls\">\n            ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = depth0.payment),stack1 == null || stack1 === false ? stack1 : stack1.braintree)),stack1 == null || stack1 === false ? stack1 : stack1.id), {hash:{},inverse:self.program(14, program14, data),fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6\">\n        ";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.isAdmin), {hash:{},inverse:self.noop,fn:self.program(16, program16, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      </div>\n    </div>\n    <div class=\"form-group\">\n      <button type=\"submit\" class=\"btn btn-primary btn-lg\">Save Customer</button>\n    </div>\n  </fieldset>\n</form>";
  return buffer;
  });

this["JST"]["client/merchant"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class='modal fade'>\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form class=\"form\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\">Merchant Information</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"firstName\">Name</label>\n            <div class=\"controls\">\n              <div class=\"row\">\n                <div class=\"col-lg-6\">\n                  <input type=\"text\" class=\"form-control\" name=\"firstName\" placeholder=\"First Name\"/>\n                </div>\n                <div class=\"col-lg-6\">\n                  <input type=\"text\" class=\"form-control\" name=\"lastName\" placeholder=\"Last Name\"/>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-lg-6\">\n              <label class=\"control-label\" for=\"dateOfBirth\">Date of Birth</label>\n              <div class=\"controls\">\n                <input type=\"text\" class=\"form-control\" name=\"dateOfBirth\" value=\"\" placeholder=\"1980-10-09\"/>\n              </div>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-lg-6\">\n              <label class=\"control-label\" for=\"routingNumber\">Routing Number</label>\n              <div class=\"controls\">\n                <input type=\"text\" class=\"form-control\" name=\"routingNumber\" value=\"\"/>\n              </div>\n            </div>\n            <div class=\"form-group col-lg-6\">\n              <label class=\"control-label\" for=\"accountNumber\">Account Number</label>\n              <div class=\"controls\">\n                <input type=\"text\" class=\"form-control\" name=\"accountNumber\" value=\"\"/>\n              </div>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"address.streetAddress\">Address</label>\n            <div class=\"controls\">\n              <input type=\"text\" class=\"form-control\" name=\"address.streetAddress\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.address)),stack1 == null || stack1 === false ? stack1 : stack1.street1)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"Street\"/>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <div class=\"controls\">\n              <input type=\"text\" class=\"form-control\" name=\"address.extendedAddress\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.address)),stack1 == null || stack1 === false ? stack1 : stack1.street2)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"Apt or Unit #\"/>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"form-group col-lg-7\">\n              <div class=\"controls\">\n                <input type=\"text\" class=\"form-control\" name=\"address.locality\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.address)),stack1 == null || stack1 === false ? stack1 : stack1.city)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"City\"/>\n              </div>\n            </div>\n            <div class=\"form-group col-lg-2\">\n              <div class=\"controls\">\n                <input type=\"text\" class=\"form-control\" name=\"address.region\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.address)),stack1 == null || stack1 === false ? stack1 : stack1.state)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"State\"/>\n              </div>\n            </div>\n            <div class=\"form-group col-lg-3\">\n              <div class=\"controls\">\n                <input type=\"text\" class=\"form-control\" name=\"address.postalCode\" value=\""
    + escapeExpression(((stack1 = ((stack1 = ((stack1 = depth0.client),stack1 == null || stack1 === false ? stack1 : stack1.address)),stack1 == null || stack1 === false ? stack1 : stack1.postalCode)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\" placeholder=\"Zip Code\"/>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>";
  return buffer;
  });

this["JST"]["clients/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='clearfix header'>\n  <h2 class='pull-left'>Clients</h2>\n  <ul class='list-unstyled pull-right clearfix'>\n    <li class='pull-left'>\n      <button class=\"add btn btn-primary\"><span class=\"glyphicon glyphicon-plus\"></span> Add Client</button>\n    </li>\n  </ul>\n</div>\n\n<table class=\"table table-striped list\">\n  <thead>\n    <th>Name</th>\n    <th>Username</th>\n    <th>Email</th>\n    <th>Phone</th>\n    <th>Type</th>\n    <th class='last'>Actions</th>\n  </thead>\n  <tbody></tbody>\n</table>";
  });

this["JST"]["clients/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  
  return "Admin";
  }

function program3(depth0,data) {
  
  
  return "Client";
  }

  buffer += "<td>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.username) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.username; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.email) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.email; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.phone) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.phone; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  stack1 = helpers['if'].call(depth0, depth0.isAdmin, {hash:{},inverse:self.program(3, program3, data),fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "</td>\n<td class='last'>\n  <a href=\"#\" class='edit' data-id=\"";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">edit</a>\n  <span class='row-spacer'>|</span>\n  <a href=\"#\" class='delete' data-id=\"";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">delete</a>\n</td>";
  return buffer;
  });

this["JST"]["login"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='row'>\n  <div class='col-md-4 panel'>\n    <form method='post' action='/client/login'>\n      <fieldset>\n        <legend>Login</legend>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"username\">Username</label>\n          <div class=\"controls\">\n            <input type=\"text\" class=\"form-control\" name=\"username\"/>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <label class=\"control-label\" for=\"password\">Password</label>\n          <div class=\"controls\">\n            <input type=\"password\" class=\"form-control\" name=\"password\" />\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"controls\">\n            <button type=\"submit\" class=\"btn btn-primary\">Login</button>\n          </div>\n        </div>\n      </fieldset>\n    </form>\n  </div>\n  <div class=\"col-md-8\">\n    <div class=\"well well-lg\">\n      Klickly is in closed beta. To request an invite please email <a href=\"mailto:info@klickly.com\">info@klickly.com</a>.\n    </div>\n  </div>\n</div>";
  });

this["JST"]["nav"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, self=this, functionType="function", escapeExpression=this.escapeExpression;

function program1(depth0,data) {
  
  var buffer = "";
  buffer += " "
    + "\n      <button type=\"button\" data-toggle=\"collapse\" data-target=\".navbar-collapse\" class=\"navbar-toggle\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n    ";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        <li><a href=\"/client/products\" data-path='/client/products'>Products</a></li>\n        <li><a href=\"/client/orders\" data-path='/client/orders'>Orders</a></li>\n        ";
  stack1 = helpers['if'].call(depth0, depth0.isAdmin, {hash:{},inverse:self.noop,fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n      ";
  return buffer;
  }
function program4(depth0,data) {
  
  var buffer = "";
  buffer += "\n          <li><a href=\"/client/list\" data-path='/client/list'>Clients</a></li>\n          "
    + "\n        ";
  return buffer;
  }

function program6(depth0,data) {
  
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
  buffer += "\n    <a href=\"/\" class=\"navbar-brand\">Klickly</a>\n  </div>\n  <nav role=\"navigation\" class=\"collapse navbar-collapse bs-navbar-collapse\">\n    <ul class=\"nav navbar-nav nav-main\">\n      ";
  stack1 = helpers['if'].call(depth0, depth0._id, {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      ";
  stack1 = helpers['if'].call(depth0, depth0._id, {hash:{},inverse:self.noop,fn:self.program(6, program6, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n    </ul>\n  </nav>\n</div>";
  return buffer;
  });

this["JST"]["order/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"panel\">\n  <div class='clearfix header'>\n    <h1 class='pull-left'>Order #";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</h1>\n  </div>\n</div>";
  return buffer;
  });

this["JST"]["orders/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='clearfix header'>\n  <h2 class='pull-left'>Orders</h2>\n</div>\n\n<table class=\"table table-striped list\">\n  <thead>\n    <th>Order ID</th>\n    <th>Status</th>\n    <th>Product</th>\n    <th class='last'>Actions</th>\n  </thead>\n  <tbody></tbody>\n</table>";
  });

this["JST"]["orders/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td>";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.status) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.status; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>"
    + escapeExpression(((stack1 = ((stack1 = depth0.product),stack1 == null || stack1 === false ? stack1 : stack1.name)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td>\n<td class='last'>\n  <a href=\"#\" class='edit' data-id=\"";
  if (stack2 = helpers._id) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = depth0._id; stack2 = typeof stack2 === functionType ? stack2.apply(depth0) : stack2; }
  buffer += escapeExpression(stack2)
    + "\">view</a>\n</td>";
  return buffer;
  });

this["JST"]["product/campaignItem"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;

function program1(depth0,data) {
  
  
  return "Twitter";
  }

function program3(depth0,data) {
  
  
  return " &amp; ";
  }

function program5(depth0,data) {
  
  
  return "Facebook";
  }

  buffer += "<td>";
  if (stack1 = helpers.message) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.message; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  options = {hash:{
    'format': ("from now")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers.formateDate || depth0.formateDate),stack1 ? stack1.call(depth0, depth0.expiresAt, options) : helperMissing.call(depth0, "formateDate", depth0.expiresAt, options)))
    + "</td>\n<td class='last'>";
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.channels),stack1 == null || stack1 === false ? stack1 : stack1.twitter), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  options = {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data};
  stack2 = ((stack1 = helpers.ifAnd || depth0.ifAnd),stack1 ? stack1.call(depth0, ((stack1 = depth0.channels),stack1 == null || stack1 === false ? stack1 : stack1.twitter), ((stack1 = depth0.channels),stack1 == null || stack1 === false ? stack1 : stack1.facebook), options) : helperMissing.call(depth0, "ifAnd", ((stack1 = depth0.channels),stack1 == null || stack1 === false ? stack1 : stack1.twitter), ((stack1 = depth0.channels),stack1 == null || stack1 === false ? stack1 : stack1.facebook), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  stack2 = helpers['if'].call(depth0, ((stack1 = depth0.channels),stack1 == null || stack1 === false ? stack1 : stack1.facebook), {hash:{},inverse:self.noop,fn:self.program(5, program5, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "</td>";
  return buffer;
  });

this["JST"]["product/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, options, functionType="function", escapeExpression=this.escapeExpression, self=this, helperMissing=helpers.helperMissing;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n            <div class=\"form-group\">\n              <label class=\"control-label\" for=\"image\">Product Image</label>\n              <div class=\"controls\">\n                ";
  stack1 = helpers['if'].call(depth0, depth0.image, {hash:{},inverse:self.noop,fn:self.program(2, program2, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n                <span class=\"btn btn-success fileinput-button\">\n                  <i class=\"glyphicon glyphicon-plus\"></i>\n                  <span>";
  stack1 = helpers['if'].call(depth0, depth0.image, {hash:{},inverse:self.program(6, program6, data),fn:self.program(4, program4, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += " Image</span>\n                  <input id=\"fileupload\" type=\"file\" name=\"image\" data-url=\"/product/";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/image\" />\n                </span>\n              </div>\n            </div>\n          ";
  return buffer;
  }
function program2(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n                  <img height=\"32\" src=\"/product/";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "/images/";
  if (stack1 = helpers.image) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.image; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">&nbsp;&nbsp;\n                ";
  return buffer;
  }

function program4(depth0,data) {
  
  
  return "Update";
  }

function program6(depth0,data) {
  
  
  return "Add";
  }

function program8(depth0,data) {
  
  
  return "\n        <li class='pull-left'>\n          <button class=\"publish btn btn-success\"><span class=\"glyphicon glyphicon-bullhorn\"></span> Publish</button>\n        </li>\n      ";
  }

function program10(depth0,data) {
  
  
  return "\n        <li class='pull-left'>\n          <a href=\"/client/twitter/connect\" class=\"btn btn-info\">Add Twitter Channel</a>\n        </li>\n      ";
  }

function program12(depth0,data) {
  
  
  return "\n        <li class='pull-left'>\n          <a href=\"/client/facebook/connect\" class=\"btn btn-info\">Add Facebook Channel</a>\n        </li>\n      ";
  }

  buffer += "<div class=\"panel\">\n  <div class='clearfix header'>\n    <h1 class='pull-left'>Product Information</h1>\n  </div>\n  <form enctype=\"multipart/form-data\" type='post'>\n    <fieldset>\n\n      <div class=\"row\">\n\n        <div class=\"col-md-4\">\n\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"email\">Name</label>\n            <div class=\"controls\">\n              <input type=\"text\" class=\"form-control\" name=\"name\" value=\"";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"sku\">SKU</label>\n            <div class=\"controls\">\n              <input type=\"text\" class=\"form-control\" name=\"sku\" value=\"";
  if (stack1 = helpers.sku) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sku; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" />\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"price\">Price</label>\n            <div class=\"controls\">\n              <input type=\"number\" class=\"form-control\" name=\"price\" value=\"";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"col-md-4\">\n\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"qty\">Available Quantity</label>\n            <div class=\"controls\">\n              <input type=\"number\" step='1' class=\"form-control\" name=\"qty\" value=\"";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\"/>\n            </div>\n          </div>\n\n          <div class=\"form-group\">\n            <label class=\"control-label\" for=\"description\">Product Description</label>\n            <div class=\"controls\">\n              <textarea name='description' class=\"form-control\" rows=\"3\">";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.description; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</textarea>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"col-md-4\">\n\n          ";
  stack1 = helpers['if'].call(depth0, depth0._id, {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n\n        </div>\n\n      </div>\n\n      <div class=\"form-group\">\n        <div class=\"controls\">\n          <button type=\"submit\" class=\"btn btn-primary btn-lg\">Save Product</button>\n        </div>\n      </div>\n    </fieldset>\n  </form>\n</div>\n\n<div class=\"panel\">\n\n  <div class='clearfix header'>\n    <h2 class='pull-left'>Campaigns</h2>\n    <ul class='list-unstyled pull-right clearfix'>\n\n      ";
  options = {hash:{},inverse:self.noop,fn:self.program(8, program8, data),data:data};
  stack2 = ((stack1 = helpers.ifOr || depth0.ifOr),stack1 ? stack1.call(depth0, ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.social)),stack1 == null || stack1 === false ? stack1 : stack1.twitter)),stack1 == null || stack1 === false ? stack1 : stack1.token), ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.social)),stack1 == null || stack1 === false ? stack1 : stack1.facebook)),stack1 == null || stack1 === false ? stack1 : stack1.token), options) : helperMissing.call(depth0, "ifOr", ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.social)),stack1 == null || stack1 === false ? stack1 : stack1.twitter)),stack1 == null || stack1 === false ? stack1 : stack1.token), ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.social)),stack1 == null || stack1 === false ? stack1 : stack1.facebook)),stack1 == null || stack1 === false ? stack1 : stack1.token), options));
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n\n      ";
  stack2 = helpers.unless.call(depth0, ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.social)),stack1 == null || stack1 === false ? stack1 : stack1.twitter)),stack1 == null || stack1 === false ? stack1 : stack1.token), {hash:{},inverse:self.noop,fn:self.program(10, program10, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n      ";
  stack2 = helpers.unless.call(depth0, ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.social)),stack1 == null || stack1 === false ? stack1 : stack1.facebook)),stack1 == null || stack1 === false ? stack1 : stack1.token), {hash:{},inverse:self.noop,fn:self.program(12, program12, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n    </ul>\n  </div>\n\n  <table class=\"table table-striped list\">\n    <thead>\n      <th>Message</th>\n      <th>Expires</th>\n      <th class='last'>Channels</th>\n    </thead>\n    <tbody></tbody>\n  </table>\n</div>";
  return buffer;
  });

this["JST"]["products/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class='clearfix header'>\n  <h2 class='pull-left'>Products</h2>\n  <ul class='list-unstyled pull-right clearfix'>\n    <li class='pull-left'>\n      <button class=\"add btn btn-primary\"><span class=\"glyphicon glyphicon-plus\"></span> Add Product</button>\n    </li>\n  </ul>\n</div>\n\n<table class=\"table table-striped list\">\n  <thead>\n    <th>Name</th>\n    <th>SKU</th>\n    <th>Quantity</th>\n    <th>Price</th>\n    <th class='last'>Actions</th>\n  </thead>\n  <tbody></tbody>\n</table>";
  });

this["JST"]["products/item"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<td>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.name; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.sku) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.sku; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.qty) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.qty; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td>";
  if (stack1 = helpers.price) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0.price; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td>\n<td class='last'>\n  <a href=\"#\" class='create-campaign' data-id=\"";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">create campaign</a>\n  <span class='row-spacer'>|</span>\n  <a href=\"#\" class='edit' data-id=\"";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">edit</a>\n  <span class='row-spacer'>|</span>\n  <a href=\"#\" class='delete' data-id=\"";
  if (stack1 = helpers._id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = depth0._id; stack1 = typeof stack1 === functionType ? stack1.apply(depth0) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">delete</a>\n</td>";
  return buffer;
  });

this["JST"]["publish/modal"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, self=this;

function program1(depth0,data) {
  
  
  return "\n                <label class=\"checkbox-inline\">\n                  <input type=\"checkbox\" name=\"channels.twitter\" value=\"1\" checked=\"checked\"> Twitter\n                </label>\n              ";
  }

function program3(depth0,data) {
  
  
  return "\n                <label class=\"checkbox-inline\">\n                  <input type=\"checkbox\" name=\"channels.facebook\" value=\"1\" checked=\"checked\"> Facebook\n                </label>\n              ";
  }

  buffer += "<div class='modal fade'>\n  <div class=\"modal-dialog\">\n    <div class=\"modal-content\">\n      <form class=\"form-horizontal\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\n          <h4 class=\"modal-title\">Publish</h4>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"form-group\">\n            <label class=\"control-label col-lg-3\" for=\"message\">Message:</label>\n            <div class=\"col-lg-9 controls\">\n              <textarea class=\"form-control\" rows=\"5\" name='message' placeholder='Your Message'></textarea>\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label class=\"control-label col-lg-3\" for=\"address.state\">Expires In:</label>\n            <div class=\"col-lg-9 controls\">\n              <input type=\"text\" class=\"form-control\" name=\"expiresIn\" value='12:00' placeholder=\"HH:MM\"/>\n            </div>\n          </div>\n\n          <div class=\"form-group channels\">\n            <label class=\"control-label col-lg-3\">Channels:</label>\n            <div class=\"col-lg-9 controls\">\n              ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.social)),stack1 == null || stack1 === false ? stack1 : stack1.twitter)),stack1 == null || stack1 === false ? stack1 : stack1.token), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n              ";
  stack2 = helpers['if'].call(depth0, ((stack1 = ((stack1 = ((stack1 = depth0.session),stack1 == null || stack1 === false ? stack1 : stack1.social)),stack1 == null || stack1 === false ? stack1 : stack1.facebook)),stack1 == null || stack1 === false ? stack1 : stack1.token), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n            </div>\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\" aria-hidden=\"true\">Cancel</button>\n          <button type=\"submit\" class=\"btn btn-primary\">Save</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>";
  return buffer;
  });

this["JST"]["utils/noItems"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<td colspan=100 style='background:#fff'>\n  <div class=\"well text-center\">\n    <h4>No items found...</h4>\n    <button class='btn btn-primary add'><span class=\"glyphicon glyphicon-plus\"></span> Add</button>\n  </div>\n</td>";
  });