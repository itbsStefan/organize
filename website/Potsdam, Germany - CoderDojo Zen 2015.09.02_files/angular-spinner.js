!function(a){"use strict";function b(a,b){return a.module("angularSpinner",[]).provider("usSpinnerConfig",function(){var a={};return{setDefaults:function(b){a=b||a},$get:function(){return{config:a}}}}).factory("usSpinnerService",["$rootScope",function(a){var b={};return b.spin=function(b){a.$broadcast("us-spinner:spin",b)},b.stop=function(b){a.$broadcast("us-spinner:stop",b)},b}]).directive("usSpinner",["$window","usSpinnerConfig",function(c,d){return{scope:!0,link:function(e,f,g){function h(){e.spinner&&e.spinner.stop()}var i=b||c.Spinner;e.spinner=null,e.key=a.isDefined(g.spinnerKey)?g.spinnerKey:!1,e.startActive=a.isDefined(g.spinnerStartActive)?e.$eval(g.spinnerStartActive):e.key?!1:!0,e.spin=function(){e.spinner&&e.spinner.spin(f[0])},e.stop=function(){e.startActive=!1,h()},e.$watch(g.usSpinner,function(a){h(),a=a||{};for(var b in d.config)void 0===a[b]&&(a[b]=d.config[b]);e.spinner=new i(a),(!e.key||e.startActive)&&e.spinner.spin(f[0])},!0),e.$on("us-spinner:spin",function(a,b){b===e.key&&e.spin()}),e.$on("us-spinner:stop",function(a,b){b===e.key&&e.stop()}),e.$on("$destroy",function(){e.stop(),e.spinner=null})}}}])}"function"==typeof define&&define.amd?define(["angular","spin"],b):b(a.angular)}(window);
//# sourceMappingURL=angular-spinner.min.js.map