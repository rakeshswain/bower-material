/*!
 * Angular Material Design
 * https://github.com/angular/material
 * @license MIT
 * v0.5.1-master-b098b3b
 */
!function(){"use strict";function t(t){function e(t,e){this.$scope=t,this.$element=e}return{restrict:"E",controller:["$scope","$element",e],link:function(e,n){t(n),e.$broadcast("$mdContentLoaded",n)}}}angular.module("material.components.content",["material.core"]).directive("mdContent",t),t.$inject=["$mdTheming"]}();