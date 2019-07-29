(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{1980:function(e,t,n){"use strict";(function(e,r,i,o){Object.defineProperty(t,"__esModule",{value:!0}),t.PhoneNumberManager=void 0;var a,u,c,l,s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(55),d=g(n(13)),p=g(n(1664)),m=n(33),h=g(n(495)),b=g(n(2939)),v=g(n(0)),_=n(7),I=n(31),E=n(2952),y=g(n(2953)),N=n(2954);function g(e){return e&&e.__esModule?e:{default:e}}function A(t){return function(){var n=t.apply(this,arguments);return new e(function(t,r){return function i(o,a){try{var u=n[o](a),c=u.value}catch(e){return void r(e)}if(!u.done)return e.resolve(c).then(function(e){i("next",e)},function(e){i("throw",e)});t(c)}("next")})}}var C={UNVERIFIED:"UNVERIFIED",VERIFICATION_STARTED:"VERIFICATION_STARTED",WAITING_FOR_CODE:"WAITING_FOR_CODE",CODE_VALIDATION_STARTED:"CODE_VALIDATION_STARTED",WAITING_FOR_VALIDATION:"WAITING_FOR_VALIDATION",VALIDATION_FAILED:"VALIDATION_FAILED",VERIFIED:"VERIFIED"},O=t.PhoneNumberManager=r(y.default)((c=u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));l.call(n);var r=n.props,i=r.number,o=r.verified;return n.state={number:i||"",verificationCode:"",verificationState:o?C.VERIFIED:C.UNVERIFIED},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,i.Component),s(t,[{key:"renderVerifying",value:function(){var e=this.state,t=e.isCodeValid,n=e.verificationCode,r=e.verificationState;return r===C.VERIFICATION_STARTED?i.createElement(m.Loading,null):i.createElement("div",null,i.createElement("a",{href:"#",styleName:"phone-note",onClick:this.handleStartVerification},i.createElement(f.IconRepeat,{size:"sm"}),i.createElement("span",null,(0,_.__)("Resend verification code"))),i.createElement("p",{id:"code-description"},(0,_.__)("Enter your one-time verification code that was sent to your mobile device:")),i.createElement("div",{styleName:"verification-code"},i.createElement("input",{className:r===C.VALIDATION_FAILED?y.default["error-field"]:y.default.field,type:"text",value:n,onChange:this.handleCodeChange,maxLength:4,"aria-describedby":"code-description"}),i.createElement(p.default,{onClick:this.handleSubmitVerification,variant:"primary",disabled:!t,label:(0,_.__)("Submit")})))}},{key:"renderNotVerifying",value:function(){var e=this.state.verificationState;return i.createElement("div",{styleName:"phone-note"},e===C.VERIFIED?i.createElement(f.IconCheckCircled,{size:"sm",color:"black"}):i.createElement(f.IconInfo,{size:"sm",color:"orange"}),i.createElement("p",null,e===C.VERIFIED?(0,_.__)("Mobile phone number is verified."):(0,_.__)("A one-time verification code will be sent to your mobile device.")))}},{key:"render",value:function(){var e=this.props.className,t=this.state,n=t.number,r=t.verificationState,a=(0,N.validatePhoneNumber)(n),u=r===C.VERIFIED,c=o.includes([C.VERIFICATION_STARTED,C.WAITING_FOR_CODE,C.CODE_VALIDATION_STARTED,C.WAITING_FOR_VALIDATION,C.VALIDATION_FAILED],r),l=(0,_.__)("Send Code");return c?l=(0,_.__)("Verifying..."):u&&(l=(0,_.__)("Verified")),i.createElement("div",{className:e},i.createElement("div",{styleName:"phone-number"},i.createElement(b.default,{styleName:"editor",inputClassName:a||o.isEmpty(n)?y.default.field:y.default["error-field"],value:n,onChange:this.handleNumberChange}),i.createElement(p.default,{onClick:this.handleStartVerification,variant:"primary",disabled:!a||u||c,label:l})),c?this.renderVerifying():this.renderNotVerifying())}}]),t}(),u.displayName="settings/setting-personal-info/_phone-number-manager",u.propTypes={className:v.default.string,createErrorAlert:v.default.func.isRequired,createNotificationAlert:v.default.func.isRequired,notifyPhoneVerificationComplete:v.default.func.isRequired,number:v.default.string.isRequired,onChange:v.default.func.isRequired,userKey:v.default.string.isRequired,verified:v.default.bool.isRequired},l=function(){var e,t=this;this.handleNumberChange=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=t.state.verificationState;t.isNumberChanged(e)?n=C.UNVERIFIED:t.props.verified&&(n=C.VERIFIED),t.setState({number:e,verificationState:n})},this.handleCodeChange=function(e){var n=e.target.value;t.setState({verificationCode:n,isCodeValid:4===n.length})},this.handleStartVerification=(e=A(regeneratorRuntime.mark(function e(n){var r,i,o,a,u,c,l,s,f;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.preventDefault(),r=t.props,i=r.createErrorAlert,o=r.userKey,a=t.state.number,u=(0,E.parsePhoneNumberFromString)(a||"")||{},t.setState({verificationState:C.VERIFICATION_STARTED}),e.next=7,h.default.startPhoneNumberVerification(o,u.countryCallingCode,u.nationalNumber,_.i18n.getLocale());case 7:c=e.sent,l=c.success,s=c.error,l?t.setState({verificationState:C.WAITING_FOR_CODE}):(t.setState({verificationState:C.UNVERIFIED}),f="InvalidPhoneNumberOrCountryCode"===s?(0,_.__)("Our SMS service does not consider this a valid number. Please check your phone number and try again."):(0,_.__)("An error occurred while trying to generate a verification code. Please try again."),i(f));case 11:case"end":return e.stop()}},e,t)})),function(t){return e.apply(this,arguments)}),this.handleSubmitVerification=A(regeneratorRuntime.mark(function e(){var n,r,i,o,a,u,c,l,s,f,d,p,m,b;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.props,r=n.createErrorAlert,i=n.createNotificationAlert,o=n.notifyPhoneVerificationComplete,a=n.onChange,u=n.userKey,c=t.state,l=c.number,s=c.verificationCode,f=(0,E.parsePhoneNumberFromString)(l||"")||{},t.setState({verificationState:C.CODE_VALIDATION_STARTED}),e.next=6,h.default.verifyPhoneNumber(u,s,f.countryCallingCode,f.nationalNumber);case 6:d=e.sent,p=d.success,m=d.error,p?(t.setState({verificationState:C.VERIFIED}),o(l),i((0,_.__)("Verification Successful! Your mobile number is saved.")),a(l,!0)):(t.setState({verificationState:C.VALIDATION_FAILED}),b="IncorrectVerificationCode"===m?(0,_.__)("Failed to verify. Please check your verification code and try again."):(0,_.__)("An error occurred while trying to validate your verification code. Please try again."),r(b));case 10:case"end":return e.stop()}},e,t)})),this.isNumberChanged=function(e){return t.props.number!==e}},a=c))||a,R=d.default.createNotificationAlert,V=d.default.createErrorAlert,D=d.default.notifyPhoneVerificationComplete;t.default=(0,I.connect)(null,{createNotificationAlert:R,createErrorAlert:V,notifyPhoneVerificationComplete:D})(O)}).call(this,n(11),n(5),n(1),n(4))},2939:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,o,a,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();n(2940);var c=f(n(2076)),l=f(n(0)),s=n(7);function f(e){return e&&e.__esModule?e:{default:e}}var d=e(f(n(2951)).default)((a=o=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.Component),u(t,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.inputClassName,i=e.onChange,o=e.value;return r.createElement("div",{styleName:"phone-number-editor",className:t},r.createElement(c.default,{placeholder:(0,s.__)("Phone Number"),inputClassName:n,country:s.i18n.getGeoLocation(),value:o,onChange:i}))}}]),t}(),o.displayName="settings/setting-personal-info/_phone-number-editor",o.propTypes={className:l.default.string,inputClassName:l.default.string,onChange:l.default.func.isRequired,value:l.default.string.isRequired},i=a))||i;t.default=d}).call(this,n(5),n(1))},2951:function(e,t,n){e.exports={"phone-number-editor":"_phone-number-editor--phone-number-editor--213bi"}},2953:function(e,t,n){e.exports={field:"_phone-number-manager--field--2w6Pz form--input-field--1iAH4","error-field":"_phone-number-manager--error-field--14-Ia _phone-number-manager--field--2w6Pz form--input-field--1iAH4 form--error-field--10p67","phone-number":"_phone-number-manager--phone-number--2gD6Y",editor:"_phone-number-manager--editor--3GNjo","verification-code":"_phone-number-manager--verification-code--1Uo2T","phone-note":"_phone-number-manager--phone-note--1hGU5"}},2954:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.validatePhoneNumber=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,r.isValidPhoneNumber)(e)};var r=n(2076)}}]);
//# sourceMappingURL=https://s3-us-west-2.amazonaws.com/udacity-classroom-web/js/phone-number-manager.e8d2a.js.map