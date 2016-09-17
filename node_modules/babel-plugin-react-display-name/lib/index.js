"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _temporalUndefined = {};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _temporalAssertDefined(val, name, undef) { if (val === undef) { throw new ReferenceError(name + " is not defined - temporal dead zone"); } return true; }

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

exports["default"] = function (_ref) {
  var Plugin = _ref.Plugin;
  var t = _ref.types;

  function addDisplayName(id, call) {
    var props = call.arguments[0].properties;
    var safe = true;

    for (var i = 0; i < props.length; i++) {
      var prop = props[i];
      var key = (_temporalAssertDefined(t, "t", _temporalUndefined) && t).toComputedKey(prop);
      if ((_temporalAssertDefined(t, "t", _temporalUndefined) && t).isLiteral(key, { value: "displayName" })) {
        safe = false;
        break;
      }
    }

    if (safe) {
      props.unshift((_temporalAssertDefined(t, "t", _temporalUndefined) && t).property("init", (_temporalAssertDefined(t, "t", _temporalUndefined) && t).identifier("displayName"), (_temporalAssertDefined(t, "t", _temporalUndefined) && t).literal(id)));
    }
  }

  var isCreateClassCallExpression = t.buildMatchMemberExpression("React.createClass");

  function isCreateClass(node) {
    if (!node || !(_temporalAssertDefined(t, "t", _temporalUndefined) && t).isCallExpression(node)) return false;

    // not React.createClass call member object
    if (!isCreateClassCallExpression(node.callee)) return false;

    // no call arguments
    var args = node.arguments;
    if (args.length !== 1) return false;

    // first node arg is not an object
    var first = args[0];
    if (!(_temporalAssertDefined(t, "t", _temporalUndefined) && t).isObjectExpression(first)) return false;

    return true;
  }

  return new Plugin("react-display-name", {
    metadata: {
      group: "builtin-pre"
    },

    visitor: {
      ExportDefaultDeclaration: function ExportDefaultDeclaration(node, parent, scope, file) {
        if (isCreateClass(node.declaration)) {
          var displayName = file.opts.basename;

          // ./{module name}/index.js
          if (displayName === "index") {
            displayName = _path2["default"].basename(_path2["default"].dirname(file.opts.filename));
          }

          addDisplayName(displayName, node.declaration);
        }
      },

      "AssignmentExpression|Property|VariableDeclarator": function AssignmentExpressionPropertyVariableDeclarator(node) {
        var left, right;

        if ((_temporalAssertDefined(t, "t", _temporalUndefined) && t).isAssignmentExpression(node)) {
          left = node.left;
          right = node.right;
        } else if ((_temporalAssertDefined(t, "t", _temporalUndefined) && t).isProperty(node)) {
          left = node.key;
          right = node.value;
        } else if ((_temporalAssertDefined(t, "t", _temporalUndefined) && t).isVariableDeclarator(node)) {
          left = node.id;
          right = node.init;
        }

        if ((_temporalAssertDefined(t, "t", _temporalUndefined) && t).isMemberExpression(left)) {
          left = left.property;
        }

        if ((_temporalAssertDefined(t, "t", _temporalUndefined) && t).isIdentifier(left) && isCreateClass(right)) {
          addDisplayName(left.name, right);
        }
      }
    }
  });
};

module.exports = exports["default"];