var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/react/cjs/react.production.min.js
var require_react_production_min = __commonJS({
  "node_modules/react/cjs/react.production.min.js"(exports) {
    "use strict";
    var l3 = Symbol.for("react.element");
    var n3 = Symbol.for("react.portal");
    var p3 = Symbol.for("react.fragment");
    var q2 = Symbol.for("react.strict_mode");
    var r3 = Symbol.for("react.profiler");
    var t3 = Symbol.for("react.provider");
    var u3 = Symbol.for("react.context");
    var v2 = Symbol.for("react.forward_ref");
    var w2 = Symbol.for("react.suspense");
    var x2 = Symbol.for("react.memo");
    var y2 = Symbol.for("react.lazy");
    var z2 = Symbol.iterator;
    function A2(a3) {
      if (null === a3 || "object" !== typeof a3)
        return null;
      a3 = z2 && a3[z2] || a3["@@iterator"];
      return "function" === typeof a3 ? a3 : null;
    }
    var B2 = { isMounted: function() {
      return false;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } };
    var C2 = Object.assign;
    var D2 = {};
    function E2(a3, b3, e3) {
      this.props = a3;
      this.context = b3;
      this.refs = D2;
      this.updater = e3 || B2;
    }
    E2.prototype.isReactComponent = {};
    E2.prototype.setState = function(a3, b3) {
      if ("object" !== typeof a3 && "function" !== typeof a3 && null != a3)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, a3, b3, "setState");
    };
    E2.prototype.forceUpdate = function(a3) {
      this.updater.enqueueForceUpdate(this, a3, "forceUpdate");
    };
    function F2() {
    }
    F2.prototype = E2.prototype;
    function G2(a3, b3, e3) {
      this.props = a3;
      this.context = b3;
      this.refs = D2;
      this.updater = e3 || B2;
    }
    var H2 = G2.prototype = new F2();
    H2.constructor = G2;
    C2(H2, E2.prototype);
    H2.isPureReactComponent = true;
    var I2 = Array.isArray;
    var J2 = Object.prototype.hasOwnProperty;
    var K2 = { current: null };
    var L2 = { key: true, ref: true, __self: true, __source: true };
    function M2(a3, b3, e3) {
      var d3, c3 = {}, k2 = null, h3 = null;
      if (null != b3)
        for (d3 in void 0 !== b3.ref && (h3 = b3.ref), void 0 !== b3.key && (k2 = "" + b3.key), b3)
          J2.call(b3, d3) && !L2.hasOwnProperty(d3) && (c3[d3] = b3[d3]);
      var g3 = arguments.length - 2;
      if (1 === g3)
        c3.children = e3;
      else if (1 < g3) {
        for (var f3 = Array(g3), m2 = 0; m2 < g3; m2++)
          f3[m2] = arguments[m2 + 2];
        c3.children = f3;
      }
      if (a3 && a3.defaultProps)
        for (d3 in g3 = a3.defaultProps, g3)
          void 0 === c3[d3] && (c3[d3] = g3[d3]);
      return { $$typeof: l3, type: a3, key: k2, ref: h3, props: c3, _owner: K2.current };
    }
    function N2(a3, b3) {
      return { $$typeof: l3, type: a3.type, key: b3, ref: a3.ref, props: a3.props, _owner: a3._owner };
    }
    function O2(a3) {
      return "object" === typeof a3 && null !== a3 && a3.$$typeof === l3;
    }
    function escape(a3) {
      var b3 = { "=": "=0", ":": "=2" };
      return "$" + a3.replace(/[=:]/g, function(a4) {
        return b3[a4];
      });
    }
    var P2 = /\/+/g;
    function Q2(a3, b3) {
      return "object" === typeof a3 && null !== a3 && null != a3.key ? escape("" + a3.key) : b3.toString(36);
    }
    function R2(a3, b3, e3, d3, c3) {
      var k2 = typeof a3;
      if ("undefined" === k2 || "boolean" === k2)
        a3 = null;
      var h3 = false;
      if (null === a3)
        h3 = true;
      else
        switch (k2) {
          case "string":
          case "number":
            h3 = true;
            break;
          case "object":
            switch (a3.$$typeof) {
              case l3:
              case n3:
                h3 = true;
            }
        }
      if (h3)
        return h3 = a3, c3 = c3(h3), a3 = "" === d3 ? "." + Q2(h3, 0) : d3, I2(c3) ? (e3 = "", null != a3 && (e3 = a3.replace(P2, "$&/") + "/"), R2(c3, b3, e3, "", function(a4) {
          return a4;
        })) : null != c3 && (O2(c3) && (c3 = N2(c3, e3 + (!c3.key || h3 && h3.key === c3.key ? "" : ("" + c3.key).replace(P2, "$&/") + "/") + a3)), b3.push(c3)), 1;
      h3 = 0;
      d3 = "" === d3 ? "." : d3 + ":";
      if (I2(a3))
        for (var g3 = 0; g3 < a3.length; g3++) {
          k2 = a3[g3];
          var f3 = d3 + Q2(k2, g3);
          h3 += R2(k2, b3, e3, f3, c3);
        }
      else if (f3 = A2(a3), "function" === typeof f3)
        for (a3 = f3.call(a3), g3 = 0; !(k2 = a3.next()).done; )
          k2 = k2.value, f3 = d3 + Q2(k2, g3++), h3 += R2(k2, b3, e3, f3, c3);
      else if ("object" === k2)
        throw b3 = String(a3), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b3 ? "object with keys {" + Object.keys(a3).join(", ") + "}" : b3) + "). If you meant to render a collection of children, use an array instead.");
      return h3;
    }
    function S2(a3, b3, e3) {
      if (null == a3)
        return a3;
      var d3 = [], c3 = 0;
      R2(a3, d3, "", "", function(a4) {
        return b3.call(e3, a4, c3++);
      });
      return d3;
    }
    function T2(a3) {
      if (-1 === a3._status) {
        var b3 = a3._result;
        b3 = b3();
        b3.then(function(b4) {
          if (0 === a3._status || -1 === a3._status)
            a3._status = 1, a3._result = b4;
        }, function(b4) {
          if (0 === a3._status || -1 === a3._status)
            a3._status = 2, a3._result = b4;
        });
        -1 === a3._status && (a3._status = 0, a3._result = b3);
      }
      if (1 === a3._status)
        return a3._result.default;
      throw a3._result;
    }
    var U2 = { current: null };
    var V2 = { transition: null };
    var W2 = { ReactCurrentDispatcher: U2, ReactCurrentBatchConfig: V2, ReactCurrentOwner: K2 };
    exports.Children = { map: S2, forEach: function(a3, b3, e3) {
      S2(a3, function() {
        b3.apply(this, arguments);
      }, e3);
    }, count: function(a3) {
      var b3 = 0;
      S2(a3, function() {
        b3++;
      });
      return b3;
    }, toArray: function(a3) {
      return S2(a3, function(a4) {
        return a4;
      }) || [];
    }, only: function(a3) {
      if (!O2(a3))
        throw Error("React.Children.only expected to receive a single React element child.");
      return a3;
    } };
    exports.Component = E2;
    exports.Fragment = p3;
    exports.Profiler = r3;
    exports.PureComponent = G2;
    exports.StrictMode = q2;
    exports.Suspense = w2;
    exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W2;
    exports.cloneElement = function(a3, b3, e3) {
      if (null === a3 || void 0 === a3)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a3 + ".");
      var d3 = C2({}, a3.props), c3 = a3.key, k2 = a3.ref, h3 = a3._owner;
      if (null != b3) {
        void 0 !== b3.ref && (k2 = b3.ref, h3 = K2.current);
        void 0 !== b3.key && (c3 = "" + b3.key);
        if (a3.type && a3.type.defaultProps)
          var g3 = a3.type.defaultProps;
        for (f3 in b3)
          J2.call(b3, f3) && !L2.hasOwnProperty(f3) && (d3[f3] = void 0 === b3[f3] && void 0 !== g3 ? g3[f3] : b3[f3]);
      }
      var f3 = arguments.length - 2;
      if (1 === f3)
        d3.children = e3;
      else if (1 < f3) {
        g3 = Array(f3);
        for (var m2 = 0; m2 < f3; m2++)
          g3[m2] = arguments[m2 + 2];
        d3.children = g3;
      }
      return { $$typeof: l3, type: a3.type, key: c3, ref: k2, props: d3, _owner: h3 };
    };
    exports.createContext = function(a3) {
      a3 = { $$typeof: u3, _currentValue: a3, _currentValue2: a3, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
      a3.Provider = { $$typeof: t3, _context: a3 };
      return a3.Consumer = a3;
    };
    exports.createElement = M2;
    exports.createFactory = function(a3) {
      var b3 = M2.bind(null, a3);
      b3.type = a3;
      return b3;
    };
    exports.createRef = function() {
      return { current: null };
    };
    exports.forwardRef = function(a3) {
      return { $$typeof: v2, render: a3 };
    };
    exports.isValidElement = O2;
    exports.lazy = function(a3) {
      return { $$typeof: y2, _payload: { _status: -1, _result: a3 }, _init: T2 };
    };
    exports.memo = function(a3, b3) {
      return { $$typeof: x2, type: a3, compare: void 0 === b3 ? null : b3 };
    };
    exports.startTransition = function(a3) {
      var b3 = V2.transition;
      V2.transition = {};
      try {
        a3();
      } finally {
        V2.transition = b3;
      }
    };
    exports.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    };
    exports.useCallback = function(a3, b3) {
      return U2.current.useCallback(a3, b3);
    };
    exports.useContext = function(a3) {
      return U2.current.useContext(a3);
    };
    exports.useDebugValue = function() {
    };
    exports.useDeferredValue = function(a3) {
      return U2.current.useDeferredValue(a3);
    };
    exports.useEffect = function(a3, b3) {
      return U2.current.useEffect(a3, b3);
    };
    exports.useId = function() {
      return U2.current.useId();
    };
    exports.useImperativeHandle = function(a3, b3, e3) {
      return U2.current.useImperativeHandle(a3, b3, e3);
    };
    exports.useInsertionEffect = function(a3, b3) {
      return U2.current.useInsertionEffect(a3, b3);
    };
    exports.useLayoutEffect = function(a3, b3) {
      return U2.current.useLayoutEffect(a3, b3);
    };
    exports.useMemo = function(a3, b3) {
      return U2.current.useMemo(a3, b3);
    };
    exports.useReducer = function(a3, b3, e3) {
      return U2.current.useReducer(a3, b3, e3);
    };
    exports.useRef = function(a3) {
      return U2.current.useRef(a3);
    };
    exports.useState = function(a3) {
      return U2.current.useState(a3);
    };
    exports.useSyncExternalStore = function(a3, b3, e3) {
      return U2.current.useSyncExternalStore(a3, b3, e3);
    };
    exports.useTransition = function() {
      return U2.current.useTransition();
    };
    exports.version = "18.2.0";
  }
});

// node_modules/react/cjs/react.development.js
var require_react_development = __commonJS({
  "node_modules/react/cjs/react.development.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV !== "production") {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var ReactVersion = "18.2.0";
        var REACT_ELEMENT_TYPE = Symbol.for("react.element");
        var REACT_PORTAL_TYPE = Symbol.for("react.portal");
        var REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
        var REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode");
        var REACT_PROFILER_TYPE = Symbol.for("react.profiler");
        var REACT_PROVIDER_TYPE = Symbol.for("react.provider");
        var REACT_CONTEXT_TYPE = Symbol.for("react.context");
        var REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref");
        var REACT_SUSPENSE_TYPE = Symbol.for("react.suspense");
        var REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list");
        var REACT_MEMO_TYPE = Symbol.for("react.memo");
        var REACT_LAZY_TYPE = Symbol.for("react.lazy");
        var REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen");
        var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
        var FAUX_ITERATOR_SYMBOL = "@@iterator";
        function getIteratorFn(maybeIterable) {
          if (maybeIterable === null || typeof maybeIterable !== "object") {
            return null;
          }
          var maybeIterator = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL];
          if (typeof maybeIterator === "function") {
            return maybeIterator;
          }
          return null;
        }
        var ReactCurrentDispatcher = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactCurrentBatchConfig = {
          transition: null
        };
        var ReactCurrentActQueue = {
          current: null,
          // Used to reproduce behavior of `batchedUpdates` in legacy mode.
          isBatchingLegacy: false,
          didScheduleLegacyUpdate: false
        };
        var ReactCurrentOwner = {
          /**
           * @internal
           * @type {ReactComponent}
           */
          current: null
        };
        var ReactDebugCurrentFrame = {};
        var currentExtraStackFrame = null;
        function setExtraStackFrame(stack) {
          {
            currentExtraStackFrame = stack;
          }
        }
        {
          ReactDebugCurrentFrame.setExtraStackFrame = function(stack) {
            {
              currentExtraStackFrame = stack;
            }
          };
          ReactDebugCurrentFrame.getCurrentStack = null;
          ReactDebugCurrentFrame.getStackAddendum = function() {
            var stack = "";
            if (currentExtraStackFrame) {
              stack += currentExtraStackFrame;
            }
            var impl = ReactDebugCurrentFrame.getCurrentStack;
            if (impl) {
              stack += impl() || "";
            }
            return stack;
          };
        }
        var enableScopeAPI = false;
        var enableCacheElement = false;
        var enableTransitionTracing = false;
        var enableLegacyHidden = false;
        var enableDebugTracing = false;
        var ReactSharedInternals = {
          ReactCurrentDispatcher,
          ReactCurrentBatchConfig,
          ReactCurrentOwner
        };
        {
          ReactSharedInternals.ReactDebugCurrentFrame = ReactDebugCurrentFrame;
          ReactSharedInternals.ReactCurrentActQueue = ReactCurrentActQueue;
        }
        function warn(format) {
          {
            {
              for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = arguments[_key];
              }
              printWarning("warn", format, args);
            }
          }
        }
        function error(format) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format, args);
            }
          }
        }
        function printWarning(level, format, args) {
          {
            var ReactDebugCurrentFrame2 = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame2.getStackAddendum();
            if (stack !== "") {
              format += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        var didWarnStateUpdateForUnmountedComponent = {};
        function warnNoop(publicInstance, callerName) {
          {
            var _constructor = publicInstance.constructor;
            var componentName = _constructor && (_constructor.displayName || _constructor.name) || "ReactClass";
            var warningKey = componentName + "." + callerName;
            if (didWarnStateUpdateForUnmountedComponent[warningKey]) {
              return;
            }
            error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, componentName);
            didWarnStateUpdateForUnmountedComponent[warningKey] = true;
          }
        }
        var ReactNoopUpdateQueue = {
          /**
           * Checks whether or not this composite component is mounted.
           * @param {ReactClass} publicInstance The instance we want to test.
           * @return {boolean} True if mounted, false otherwise.
           * @protected
           * @final
           */
          isMounted: function(publicInstance) {
            return false;
          },
          /**
           * Forces an update. This should only be invoked when it is known with
           * certainty that we are **not** in a DOM transaction.
           *
           * You may want to call this when you know that some deeper aspect of the
           * component's state has changed but `setState` was not called.
           *
           * This will not invoke `shouldComponentUpdate`, but it will invoke
           * `componentWillUpdate` and `componentDidUpdate`.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueForceUpdate: function(publicInstance, callback, callerName) {
            warnNoop(publicInstance, "forceUpdate");
          },
          /**
           * Replaces all of the state. Always use this or `setState` to mutate state.
           * You should treat `this.state` as immutable.
           *
           * There is no guarantee that `this.state` will be immediately updated, so
           * accessing `this.state` after calling this method may return the old value.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} completeState Next state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} callerName name of the calling function in the public API.
           * @internal
           */
          enqueueReplaceState: function(publicInstance, completeState, callback, callerName) {
            warnNoop(publicInstance, "replaceState");
          },
          /**
           * Sets a subset of the state. This only exists because _pendingState is
           * internal. This provides a merging strategy that is not available to deep
           * properties which is confusing. TODO: Expose pendingState or don't use it
           * during the merge.
           *
           * @param {ReactClass} publicInstance The instance that should rerender.
           * @param {object} partialState Next partial state to be merged with state.
           * @param {?function} callback Called after component is updated.
           * @param {?string} Name of the calling function in the public API.
           * @internal
           */
          enqueueSetState: function(publicInstance, partialState, callback, callerName) {
            warnNoop(publicInstance, "setState");
          }
        };
        var assign = Object.assign;
        var emptyObject = {};
        {
          Object.freeze(emptyObject);
        }
        function Component(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        Component.prototype.isReactComponent = {};
        Component.prototype.setState = function(partialState, callback) {
          if (typeof partialState !== "object" && typeof partialState !== "function" && partialState != null) {
            throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
          }
          this.updater.enqueueSetState(this, partialState, callback, "setState");
        };
        Component.prototype.forceUpdate = function(callback) {
          this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
        };
        {
          var deprecatedAPIs = {
            isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
            replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
          };
          var defineDeprecationWarning = function(methodName, info) {
            Object.defineProperty(Component.prototype, methodName, {
              get: function() {
                warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
                return void 0;
              }
            });
          };
          for (var fnName in deprecatedAPIs) {
            if (deprecatedAPIs.hasOwnProperty(fnName)) {
              defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
            }
          }
        }
        function ComponentDummy() {
        }
        ComponentDummy.prototype = Component.prototype;
        function PureComponent(props, context, updater) {
          this.props = props;
          this.context = context;
          this.refs = emptyObject;
          this.updater = updater || ReactNoopUpdateQueue;
        }
        var pureComponentPrototype = PureComponent.prototype = new ComponentDummy();
        pureComponentPrototype.constructor = PureComponent;
        assign(pureComponentPrototype, Component.prototype);
        pureComponentPrototype.isPureReactComponent = true;
        function createRef() {
          var refObject = {
            current: null
          };
          {
            Object.seal(refObject);
          }
          return refObject;
        }
        var isArrayImpl = Array.isArray;
        function isArray(a3) {
          return isArrayImpl(a3);
        }
        function typeName(value) {
          {
            var hasToStringTag = typeof Symbol === "function" && Symbol.toStringTag;
            var type = hasToStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            return type;
          }
        }
        function willCoercionThrow(value) {
          {
            try {
              testStringCoercion(value);
              return false;
            } catch (e3) {
              return true;
            }
          }
        }
        function testStringCoercion(value) {
          return "" + value;
        }
        function checkKeyStringCoercion(value) {
          {
            if (willCoercionThrow(value)) {
              error("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", typeName(value));
              return testStringCoercion(value);
            }
          }
        }
        function getWrappedName(outerType, innerType, wrapperName) {
          var displayName = outerType.displayName;
          if (displayName) {
            return displayName;
          }
          var functionName = innerType.displayName || innerType.name || "";
          return functionName !== "" ? wrapperName + "(" + functionName + ")" : wrapperName;
        }
        function getContextName(type) {
          return type.displayName || "Context";
        }
        function getComponentNameFromType(type) {
          if (type == null) {
            return null;
          }
          {
            if (typeof type.tag === "number") {
              error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue.");
            }
          }
          if (typeof type === "function") {
            return type.displayName || type.name || null;
          }
          if (typeof type === "string") {
            return type;
          }
          switch (type) {
            case REACT_FRAGMENT_TYPE:
              return "Fragment";
            case REACT_PORTAL_TYPE:
              return "Portal";
            case REACT_PROFILER_TYPE:
              return "Profiler";
            case REACT_STRICT_MODE_TYPE:
              return "StrictMode";
            case REACT_SUSPENSE_TYPE:
              return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
              return "SuspenseList";
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_CONTEXT_TYPE:
                var context = type;
                return getContextName(context) + ".Consumer";
              case REACT_PROVIDER_TYPE:
                var provider = type;
                return getContextName(provider._context) + ".Provider";
              case REACT_FORWARD_REF_TYPE:
                return getWrappedName(type, type.render, "ForwardRef");
              case REACT_MEMO_TYPE:
                var outerName = type.displayName || null;
                if (outerName !== null) {
                  return outerName;
                }
                return getComponentNameFromType(type.type) || "Memo";
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return getComponentNameFromType(init(payload));
                } catch (x2) {
                  return null;
                }
              }
            }
          }
          return null;
        }
        var hasOwnProperty = Object.prototype.hasOwnProperty;
        var RESERVED_PROPS = {
          key: true,
          ref: true,
          __self: true,
          __source: true
        };
        var specialPropKeyWarningShown, specialPropRefWarningShown, didWarnAboutStringRefs;
        {
          didWarnAboutStringRefs = {};
        }
        function hasValidRef(config) {
          {
            if (hasOwnProperty.call(config, "ref")) {
              var getter = Object.getOwnPropertyDescriptor(config, "ref").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.ref !== void 0;
        }
        function hasValidKey(config) {
          {
            if (hasOwnProperty.call(config, "key")) {
              var getter = Object.getOwnPropertyDescriptor(config, "key").get;
              if (getter && getter.isReactWarning) {
                return false;
              }
            }
          }
          return config.key !== void 0;
        }
        function defineKeyPropWarningGetter(props, displayName) {
          var warnAboutAccessingKey = function() {
            {
              if (!specialPropKeyWarningShown) {
                specialPropKeyWarningShown = true;
                error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingKey.isReactWarning = true;
          Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: true
          });
        }
        function defineRefPropWarningGetter(props, displayName) {
          var warnAboutAccessingRef = function() {
            {
              if (!specialPropRefWarningShown) {
                specialPropRefWarningShown = true;
                error("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", displayName);
              }
            }
          };
          warnAboutAccessingRef.isReactWarning = true;
          Object.defineProperty(props, "ref", {
            get: warnAboutAccessingRef,
            configurable: true
          });
        }
        function warnIfStringRefCannotBeAutoConverted(config) {
          {
            if (typeof config.ref === "string" && ReactCurrentOwner.current && config.__self && ReactCurrentOwner.current.stateNode !== config.__self) {
              var componentName = getComponentNameFromType(ReactCurrentOwner.current.type);
              if (!didWarnAboutStringRefs[componentName]) {
                error('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', componentName, config.ref);
                didWarnAboutStringRefs[componentName] = true;
              }
            }
          }
        }
        var ReactElement = function(type, key, ref, self2, source, owner, props) {
          var element = {
            // This tag allows us to uniquely identify this as a React Element
            $$typeof: REACT_ELEMENT_TYPE,
            // Built-in properties that belong on the element
            type,
            key,
            ref,
            props,
            // Record the component responsible for creating this element.
            _owner: owner
          };
          {
            element._store = {};
            Object.defineProperty(element._store, "validated", {
              configurable: false,
              enumerable: false,
              writable: true,
              value: false
            });
            Object.defineProperty(element, "_self", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: self2
            });
            Object.defineProperty(element, "_source", {
              configurable: false,
              enumerable: false,
              writable: false,
              value: source
            });
            if (Object.freeze) {
              Object.freeze(element.props);
              Object.freeze(element);
            }
          }
          return element;
        };
        function createElement3(type, config, children) {
          var propName;
          var props = {};
          var key = null;
          var ref = null;
          var self2 = null;
          var source = null;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              {
                warnIfStringRefCannotBeAutoConverted(config);
              }
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            self2 = config.__self === void 0 ? null : config.__self;
            source = config.__source === void 0 ? null : config.__source;
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                props[propName] = config[propName];
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i3 = 0; i3 < childrenLength; i3++) {
              childArray[i3] = arguments[i3 + 2];
            }
            {
              if (Object.freeze) {
                Object.freeze(childArray);
              }
            }
            props.children = childArray;
          }
          if (type && type.defaultProps) {
            var defaultProps = type.defaultProps;
            for (propName in defaultProps) {
              if (props[propName] === void 0) {
                props[propName] = defaultProps[propName];
              }
            }
          }
          {
            if (key || ref) {
              var displayName = typeof type === "function" ? type.displayName || type.name || "Unknown" : type;
              if (key) {
                defineKeyPropWarningGetter(props, displayName);
              }
              if (ref) {
                defineRefPropWarningGetter(props, displayName);
              }
            }
          }
          return ReactElement(type, key, ref, self2, source, ReactCurrentOwner.current, props);
        }
        function cloneAndReplaceKey(oldElement, newKey) {
          var newElement = ReactElement(oldElement.type, newKey, oldElement.ref, oldElement._self, oldElement._source, oldElement._owner, oldElement.props);
          return newElement;
        }
        function cloneElement(element, config, children) {
          if (element === null || element === void 0) {
            throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + element + ".");
          }
          var propName;
          var props = assign({}, element.props);
          var key = element.key;
          var ref = element.ref;
          var self2 = element._self;
          var source = element._source;
          var owner = element._owner;
          if (config != null) {
            if (hasValidRef(config)) {
              ref = config.ref;
              owner = ReactCurrentOwner.current;
            }
            if (hasValidKey(config)) {
              {
                checkKeyStringCoercion(config.key);
              }
              key = "" + config.key;
            }
            var defaultProps;
            if (element.type && element.type.defaultProps) {
              defaultProps = element.type.defaultProps;
            }
            for (propName in config) {
              if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
                if (config[propName] === void 0 && defaultProps !== void 0) {
                  props[propName] = defaultProps[propName];
                } else {
                  props[propName] = config[propName];
                }
              }
            }
          }
          var childrenLength = arguments.length - 2;
          if (childrenLength === 1) {
            props.children = children;
          } else if (childrenLength > 1) {
            var childArray = Array(childrenLength);
            for (var i3 = 0; i3 < childrenLength; i3++) {
              childArray[i3] = arguments[i3 + 2];
            }
            props.children = childArray;
          }
          return ReactElement(element.type, key, ref, self2, source, owner, props);
        }
        function isValidElement(object) {
          return typeof object === "object" && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        }
        var SEPARATOR = ".";
        var SUBSEPARATOR = ":";
        function escape(key) {
          var escapeRegex = /[=:]/g;
          var escaperLookup = {
            "=": "=0",
            ":": "=2"
          };
          var escapedString = key.replace(escapeRegex, function(match) {
            return escaperLookup[match];
          });
          return "$" + escapedString;
        }
        var didWarnAboutMaps = false;
        var userProvidedKeyEscapeRegex = /\/+/g;
        function escapeUserProvidedKey(text) {
          return text.replace(userProvidedKeyEscapeRegex, "$&/");
        }
        function getElementKey(element, index) {
          if (typeof element === "object" && element !== null && element.key != null) {
            {
              checkKeyStringCoercion(element.key);
            }
            return escape("" + element.key);
          }
          return index.toString(36);
        }
        function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
          var type = typeof children;
          if (type === "undefined" || type === "boolean") {
            children = null;
          }
          var invokeCallback = false;
          if (children === null) {
            invokeCallback = true;
          } else {
            switch (type) {
              case "string":
              case "number":
                invokeCallback = true;
                break;
              case "object":
                switch (children.$$typeof) {
                  case REACT_ELEMENT_TYPE:
                  case REACT_PORTAL_TYPE:
                    invokeCallback = true;
                }
            }
          }
          if (invokeCallback) {
            var _child = children;
            var mappedChild = callback(_child);
            var childKey = nameSoFar === "" ? SEPARATOR + getElementKey(_child, 0) : nameSoFar;
            if (isArray(mappedChild)) {
              var escapedChildKey = "";
              if (childKey != null) {
                escapedChildKey = escapeUserProvidedKey(childKey) + "/";
              }
              mapIntoArray(mappedChild, array, escapedChildKey, "", function(c3) {
                return c3;
              });
            } else if (mappedChild != null) {
              if (isValidElement(mappedChild)) {
                {
                  if (mappedChild.key && (!_child || _child.key !== mappedChild.key)) {
                    checkKeyStringCoercion(mappedChild.key);
                  }
                }
                mappedChild = cloneAndReplaceKey(
                  mappedChild,
                  // Keep both the (mapped) and old keys if they differ, just as
                  // traverseAllChildren used to do for objects as children
                  escapedPrefix + // $FlowFixMe Flow incorrectly thinks React.Portal doesn't have a key
                  (mappedChild.key && (!_child || _child.key !== mappedChild.key) ? (
                    // $FlowFixMe Flow incorrectly thinks existing element's key can be a number
                    // eslint-disable-next-line react-internal/safe-string-coercion
                    escapeUserProvidedKey("" + mappedChild.key) + "/"
                  ) : "") + childKey
                );
              }
              array.push(mappedChild);
            }
            return 1;
          }
          var child;
          var nextName;
          var subtreeCount = 0;
          var nextNamePrefix = nameSoFar === "" ? SEPARATOR : nameSoFar + SUBSEPARATOR;
          if (isArray(children)) {
            for (var i3 = 0; i3 < children.length; i3++) {
              child = children[i3];
              nextName = nextNamePrefix + getElementKey(child, i3);
              subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
            }
          } else {
            var iteratorFn = getIteratorFn(children);
            if (typeof iteratorFn === "function") {
              var iterableChildren = children;
              {
                if (iteratorFn === iterableChildren.entries) {
                  if (!didWarnAboutMaps) {
                    warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead.");
                  }
                  didWarnAboutMaps = true;
                }
              }
              var iterator = iteratorFn.call(iterableChildren);
              var step;
              var ii = 0;
              while (!(step = iterator.next()).done) {
                child = step.value;
                nextName = nextNamePrefix + getElementKey(child, ii++);
                subtreeCount += mapIntoArray(child, array, escapedPrefix, nextName, callback);
              }
            } else if (type === "object") {
              var childrenString = String(children);
              throw new Error("Objects are not valid as a React child (found: " + (childrenString === "[object Object]" ? "object with keys {" + Object.keys(children).join(", ") + "}" : childrenString) + "). If you meant to render a collection of children, use an array instead.");
            }
          }
          return subtreeCount;
        }
        function mapChildren(children, func, context) {
          if (children == null) {
            return children;
          }
          var result = [];
          var count = 0;
          mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
          });
          return result;
        }
        function countChildren(children) {
          var n3 = 0;
          mapChildren(children, function() {
            n3++;
          });
          return n3;
        }
        function forEachChildren(children, forEachFunc, forEachContext) {
          mapChildren(children, function() {
            forEachFunc.apply(this, arguments);
          }, forEachContext);
        }
        function toArray(children) {
          return mapChildren(children, function(child) {
            return child;
          }) || [];
        }
        function onlyChild(children) {
          if (!isValidElement(children)) {
            throw new Error("React.Children.only expected to receive a single React element child.");
          }
          return children;
        }
        function createContext(defaultValue) {
          var context = {
            $$typeof: REACT_CONTEXT_TYPE,
            // As a workaround to support multiple concurrent renderers, we categorize
            // some renderers as primary and others as secondary. We only expect
            // there to be two concurrent renderers at most: React Native (primary) and
            // Fabric (secondary); React DOM (primary) and React ART (secondary).
            // Secondary renderers store their context values on separate fields.
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            // Used to track how many concurrent renderers this context currently
            // supports within in a single renderer. Such as parallel server rendering.
            _threadCount: 0,
            // These are circular
            Provider: null,
            Consumer: null,
            // Add these to use same hidden class in VM as ServerContext
            _defaultValue: null,
            _globalName: null
          };
          context.Provider = {
            $$typeof: REACT_PROVIDER_TYPE,
            _context: context
          };
          var hasWarnedAboutUsingNestedContextConsumers = false;
          var hasWarnedAboutUsingConsumerProvider = false;
          var hasWarnedAboutDisplayNameOnConsumer = false;
          {
            var Consumer = {
              $$typeof: REACT_CONTEXT_TYPE,
              _context: context
            };
            Object.defineProperties(Consumer, {
              Provider: {
                get: function() {
                  if (!hasWarnedAboutUsingConsumerProvider) {
                    hasWarnedAboutUsingConsumerProvider = true;
                    error("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?");
                  }
                  return context.Provider;
                },
                set: function(_Provider) {
                  context.Provider = _Provider;
                }
              },
              _currentValue: {
                get: function() {
                  return context._currentValue;
                },
                set: function(_currentValue) {
                  context._currentValue = _currentValue;
                }
              },
              _currentValue2: {
                get: function() {
                  return context._currentValue2;
                },
                set: function(_currentValue2) {
                  context._currentValue2 = _currentValue2;
                }
              },
              _threadCount: {
                get: function() {
                  return context._threadCount;
                },
                set: function(_threadCount) {
                  context._threadCount = _threadCount;
                }
              },
              Consumer: {
                get: function() {
                  if (!hasWarnedAboutUsingNestedContextConsumers) {
                    hasWarnedAboutUsingNestedContextConsumers = true;
                    error("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?");
                  }
                  return context.Consumer;
                }
              },
              displayName: {
                get: function() {
                  return context.displayName;
                },
                set: function(displayName) {
                  if (!hasWarnedAboutDisplayNameOnConsumer) {
                    warn("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", displayName);
                    hasWarnedAboutDisplayNameOnConsumer = true;
                  }
                }
              }
            });
            context.Consumer = Consumer;
          }
          {
            context._currentRenderer = null;
            context._currentRenderer2 = null;
          }
          return context;
        }
        var Uninitialized = -1;
        var Pending = 0;
        var Resolved = 1;
        var Rejected = 2;
        function lazyInitializer(payload) {
          if (payload._status === Uninitialized) {
            var ctor = payload._result;
            var thenable = ctor();
            thenable.then(function(moduleObject2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var resolved = payload;
                resolved._status = Resolved;
                resolved._result = moduleObject2;
              }
            }, function(error2) {
              if (payload._status === Pending || payload._status === Uninitialized) {
                var rejected = payload;
                rejected._status = Rejected;
                rejected._result = error2;
              }
            });
            if (payload._status === Uninitialized) {
              var pending = payload;
              pending._status = Pending;
              pending._result = thenable;
            }
          }
          if (payload._status === Resolved) {
            var moduleObject = payload._result;
            {
              if (moduleObject === void 0) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", moduleObject);
              }
            }
            {
              if (!("default" in moduleObject)) {
                error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", moduleObject);
              }
            }
            return moduleObject.default;
          } else {
            throw payload._result;
          }
        }
        function lazy(ctor) {
          var payload = {
            // We use these fields to store the result.
            _status: Uninitialized,
            _result: ctor
          };
          var lazyType = {
            $$typeof: REACT_LAZY_TYPE,
            _payload: payload,
            _init: lazyInitializer
          };
          {
            var defaultProps;
            var propTypes;
            Object.defineProperties(lazyType, {
              defaultProps: {
                configurable: true,
                get: function() {
                  return defaultProps;
                },
                set: function(newDefaultProps) {
                  error("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  defaultProps = newDefaultProps;
                  Object.defineProperty(lazyType, "defaultProps", {
                    enumerable: true
                  });
                }
              },
              propTypes: {
                configurable: true,
                get: function() {
                  return propTypes;
                },
                set: function(newPropTypes) {
                  error("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it.");
                  propTypes = newPropTypes;
                  Object.defineProperty(lazyType, "propTypes", {
                    enumerable: true
                  });
                }
              }
            });
          }
          return lazyType;
        }
        function forwardRef(render) {
          {
            if (render != null && render.$$typeof === REACT_MEMO_TYPE) {
              error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).");
            } else if (typeof render !== "function") {
              error("forwardRef requires a render function but was given %s.", render === null ? "null" : typeof render);
            } else {
              if (render.length !== 0 && render.length !== 2) {
                error("forwardRef render functions accept exactly two parameters: props and ref. %s", render.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
              }
            }
            if (render != null) {
              if (render.defaultProps != null || render.propTypes != null) {
                error("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
              }
            }
          }
          var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!render.name && !render.displayName) {
                  render.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        var REACT_MODULE_REFERENCE;
        {
          REACT_MODULE_REFERENCE = Symbol.for("react.module.reference");
        }
        function isValidElementType(type) {
          if (typeof type === "string" || typeof type === "function") {
            return true;
          }
          if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || enableDebugTracing || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || enableLegacyHidden || type === REACT_OFFSCREEN_TYPE || enableScopeAPI || enableCacheElement || enableTransitionTracing) {
            return true;
          }
          if (typeof type === "object" && type !== null) {
            if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || // This needs to include all possible module reference object
            // types supported by any Flight configuration anywhere since
            // we don't know which Flight build this will end up being used
            // with.
            type.$$typeof === REACT_MODULE_REFERENCE || type.getModuleId !== void 0) {
              return true;
            }
          }
          return false;
        }
        function memo(type, compare) {
          {
            if (!isValidElementType(type)) {
              error("memo: The first argument must be a component. Instead received: %s", type === null ? "null" : typeof type);
            }
          }
          var elementType = {
            $$typeof: REACT_MEMO_TYPE,
            type,
            compare: compare === void 0 ? null : compare
          };
          {
            var ownName;
            Object.defineProperty(elementType, "displayName", {
              enumerable: false,
              configurable: true,
              get: function() {
                return ownName;
              },
              set: function(name) {
                ownName = name;
                if (!type.name && !type.displayName) {
                  type.displayName = name;
                }
              }
            });
          }
          return elementType;
        }
        function resolveDispatcher() {
          var dispatcher = ReactCurrentDispatcher.current;
          {
            if (dispatcher === null) {
              error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.");
            }
          }
          return dispatcher;
        }
        function useContext(Context) {
          var dispatcher = resolveDispatcher();
          {
            if (Context._context !== void 0) {
              var realContext = Context._context;
              if (realContext.Consumer === Context) {
                error("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?");
              } else if (realContext.Provider === Context) {
                error("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
              }
            }
          }
          return dispatcher.useContext(Context);
        }
        function useState2(initialState) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useState(initialState);
        }
        function useReducer(reducer, initialArg, init) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useReducer(reducer, initialArg, init);
        }
        function useRef3(initialValue) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useRef(initialValue);
        }
        function useEffect3(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useEffect(create, deps);
        }
        function useInsertionEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useInsertionEffect(create, deps);
        }
        function useLayoutEffect(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useLayoutEffect(create, deps);
        }
        function useCallback(callback, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useCallback(callback, deps);
        }
        function useMemo(create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useMemo(create, deps);
        }
        function useImperativeHandle(ref, create, deps) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useImperativeHandle(ref, create, deps);
        }
        function useDebugValue(value, formatterFn) {
          {
            var dispatcher = resolveDispatcher();
            return dispatcher.useDebugValue(value, formatterFn);
          }
        }
        function useTransition() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useTransition();
        }
        function useDeferredValue(value) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useDeferredValue(value);
        }
        function useId() {
          var dispatcher = resolveDispatcher();
          return dispatcher.useId();
        }
        function useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
          var dispatcher = resolveDispatcher();
          return dispatcher.useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
        }
        var disabledDepth = 0;
        var prevLog;
        var prevInfo;
        var prevWarn;
        var prevError;
        var prevGroup;
        var prevGroupCollapsed;
        var prevGroupEnd;
        function disabledLog() {
        }
        disabledLog.__reactDisabledLog = true;
        function disableLogs() {
          {
            if (disabledDepth === 0) {
              prevLog = console.log;
              prevInfo = console.info;
              prevWarn = console.warn;
              prevError = console.error;
              prevGroup = console.group;
              prevGroupCollapsed = console.groupCollapsed;
              prevGroupEnd = console.groupEnd;
              var props = {
                configurable: true,
                enumerable: true,
                value: disabledLog,
                writable: true
              };
              Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
              });
            }
            disabledDepth++;
          }
        }
        function reenableLogs() {
          {
            disabledDepth--;
            if (disabledDepth === 0) {
              var props = {
                configurable: true,
                enumerable: true,
                writable: true
              };
              Object.defineProperties(console, {
                log: assign({}, props, {
                  value: prevLog
                }),
                info: assign({}, props, {
                  value: prevInfo
                }),
                warn: assign({}, props, {
                  value: prevWarn
                }),
                error: assign({}, props, {
                  value: prevError
                }),
                group: assign({}, props, {
                  value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                  value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                  value: prevGroupEnd
                })
              });
            }
            if (disabledDepth < 0) {
              error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
            }
          }
        }
        var ReactCurrentDispatcher$1 = ReactSharedInternals.ReactCurrentDispatcher;
        var prefix;
        function describeBuiltInComponentFrame(name, source, ownerFn) {
          {
            if (prefix === void 0) {
              try {
                throw Error();
              } catch (x2) {
                var match = x2.stack.trim().match(/\n( *(at )?)/);
                prefix = match && match[1] || "";
              }
            }
            return "\n" + prefix + name;
          }
        }
        var reentry = false;
        var componentFrameCache;
        {
          var PossiblyWeakMap = typeof WeakMap === "function" ? WeakMap : Map;
          componentFrameCache = new PossiblyWeakMap();
        }
        function describeNativeComponentFrame(fn, construct) {
          if (!fn || reentry) {
            return "";
          }
          {
            var frame = componentFrameCache.get(fn);
            if (frame !== void 0) {
              return frame;
            }
          }
          var control;
          reentry = true;
          var previousPrepareStackTrace = Error.prepareStackTrace;
          Error.prepareStackTrace = void 0;
          var previousDispatcher;
          {
            previousDispatcher = ReactCurrentDispatcher$1.current;
            ReactCurrentDispatcher$1.current = null;
            disableLogs();
          }
          try {
            if (construct) {
              var Fake = function() {
                throw Error();
              };
              Object.defineProperty(Fake.prototype, "props", {
                set: function() {
                  throw Error();
                }
              });
              if (typeof Reflect === "object" && Reflect.construct) {
                try {
                  Reflect.construct(Fake, []);
                } catch (x2) {
                  control = x2;
                }
                Reflect.construct(fn, [], Fake);
              } else {
                try {
                  Fake.call();
                } catch (x2) {
                  control = x2;
                }
                fn.call(Fake.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (x2) {
                control = x2;
              }
              fn();
            }
          } catch (sample) {
            if (sample && control && typeof sample.stack === "string") {
              var sampleLines = sample.stack.split("\n");
              var controlLines = control.stack.split("\n");
              var s3 = sampleLines.length - 1;
              var c3 = controlLines.length - 1;
              while (s3 >= 1 && c3 >= 0 && sampleLines[s3] !== controlLines[c3]) {
                c3--;
              }
              for (; s3 >= 1 && c3 >= 0; s3--, c3--) {
                if (sampleLines[s3] !== controlLines[c3]) {
                  if (s3 !== 1 || c3 !== 1) {
                    do {
                      s3--;
                      c3--;
                      if (c3 < 0 || sampleLines[s3] !== controlLines[c3]) {
                        var _frame = "\n" + sampleLines[s3].replace(" at new ", " at ");
                        if (fn.displayName && _frame.includes("<anonymous>")) {
                          _frame = _frame.replace("<anonymous>", fn.displayName);
                        }
                        {
                          if (typeof fn === "function") {
                            componentFrameCache.set(fn, _frame);
                          }
                        }
                        return _frame;
                      }
                    } while (s3 >= 1 && c3 >= 0);
                  }
                  break;
                }
              }
            }
          } finally {
            reentry = false;
            {
              ReactCurrentDispatcher$1.current = previousDispatcher;
              reenableLogs();
            }
            Error.prepareStackTrace = previousPrepareStackTrace;
          }
          var name = fn ? fn.displayName || fn.name : "";
          var syntheticFrame = name ? describeBuiltInComponentFrame(name) : "";
          {
            if (typeof fn === "function") {
              componentFrameCache.set(fn, syntheticFrame);
            }
          }
          return syntheticFrame;
        }
        function describeFunctionComponentFrame(fn, source, ownerFn) {
          {
            return describeNativeComponentFrame(fn, false);
          }
        }
        function shouldConstruct(Component2) {
          var prototype = Component2.prototype;
          return !!(prototype && prototype.isReactComponent);
        }
        function describeUnknownElementTypeFrameInDEV(type, source, ownerFn) {
          if (type == null) {
            return "";
          }
          if (typeof type === "function") {
            {
              return describeNativeComponentFrame(type, shouldConstruct(type));
            }
          }
          if (typeof type === "string") {
            return describeBuiltInComponentFrame(type);
          }
          switch (type) {
            case REACT_SUSPENSE_TYPE:
              return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
              return describeBuiltInComponentFrame("SuspenseList");
          }
          if (typeof type === "object") {
            switch (type.$$typeof) {
              case REACT_FORWARD_REF_TYPE:
                return describeFunctionComponentFrame(type.render);
              case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type, source, ownerFn);
              case REACT_LAZY_TYPE: {
                var lazyComponent = type;
                var payload = lazyComponent._payload;
                var init = lazyComponent._init;
                try {
                  return describeUnknownElementTypeFrameInDEV(init(payload), source, ownerFn);
                } catch (x2) {
                }
              }
            }
          }
          return "";
        }
        var loggedTypeFailures = {};
        var ReactDebugCurrentFrame$1 = ReactSharedInternals.ReactDebugCurrentFrame;
        function setCurrentlyValidatingElement(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              ReactDebugCurrentFrame$1.setExtraStackFrame(stack);
            } else {
              ReactDebugCurrentFrame$1.setExtraStackFrame(null);
            }
          }
        }
        function checkPropTypes(typeSpecs, values, location, componentName, element) {
          {
            var has = Function.call.bind(hasOwnProperty);
            for (var typeSpecName in typeSpecs) {
              if (has(typeSpecs, typeSpecName)) {
                var error$1 = void 0;
                try {
                  if (typeof typeSpecs[typeSpecName] !== "function") {
                    var err = Error((componentName || "React class") + ": " + location + " type `" + typeSpecName + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof typeSpecs[typeSpecName] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                    err.name = "Invariant Violation";
                    throw err;
                  }
                  error$1 = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
                } catch (ex) {
                  error$1 = ex;
                }
                if (error$1 && !(error$1 instanceof Error)) {
                  setCurrentlyValidatingElement(element);
                  error("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", componentName || "React class", location, typeSpecName, typeof error$1);
                  setCurrentlyValidatingElement(null);
                }
                if (error$1 instanceof Error && !(error$1.message in loggedTypeFailures)) {
                  loggedTypeFailures[error$1.message] = true;
                  setCurrentlyValidatingElement(element);
                  error("Failed %s type: %s", location, error$1.message);
                  setCurrentlyValidatingElement(null);
                }
              }
            }
          }
        }
        function setCurrentlyValidatingElement$1(element) {
          {
            if (element) {
              var owner = element._owner;
              var stack = describeUnknownElementTypeFrameInDEV(element.type, element._source, owner ? owner.type : null);
              setExtraStackFrame(stack);
            } else {
              setExtraStackFrame(null);
            }
          }
        }
        var propTypesMisspellWarningShown;
        {
          propTypesMisspellWarningShown = false;
        }
        function getDeclarationErrorAddendum() {
          if (ReactCurrentOwner.current) {
            var name = getComponentNameFromType(ReactCurrentOwner.current.type);
            if (name) {
              return "\n\nCheck the render method of `" + name + "`.";
            }
          }
          return "";
        }
        function getSourceInfoErrorAddendum(source) {
          if (source !== void 0) {
            var fileName = source.fileName.replace(/^.*[\\\/]/, "");
            var lineNumber = source.lineNumber;
            return "\n\nCheck your code at " + fileName + ":" + lineNumber + ".";
          }
          return "";
        }
        function getSourceInfoErrorAddendumForProps(elementProps) {
          if (elementProps !== null && elementProps !== void 0) {
            return getSourceInfoErrorAddendum(elementProps.__source);
          }
          return "";
        }
        var ownerHasKeyUseWarning = {};
        function getCurrentComponentErrorInfo(parentType) {
          var info = getDeclarationErrorAddendum();
          if (!info) {
            var parentName = typeof parentType === "string" ? parentType : parentType.displayName || parentType.name;
            if (parentName) {
              info = "\n\nCheck the top-level render call using <" + parentName + ">.";
            }
          }
          return info;
        }
        function validateExplicitKey(element, parentType) {
          if (!element._store || element._store.validated || element.key != null) {
            return;
          }
          element._store.validated = true;
          var currentComponentErrorInfo = getCurrentComponentErrorInfo(parentType);
          if (ownerHasKeyUseWarning[currentComponentErrorInfo]) {
            return;
          }
          ownerHasKeyUseWarning[currentComponentErrorInfo] = true;
          var childOwner = "";
          if (element && element._owner && element._owner !== ReactCurrentOwner.current) {
            childOwner = " It was passed a child from " + getComponentNameFromType(element._owner.type) + ".";
          }
          {
            setCurrentlyValidatingElement$1(element);
            error('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', currentComponentErrorInfo, childOwner);
            setCurrentlyValidatingElement$1(null);
          }
        }
        function validateChildKeys(node, parentType) {
          if (typeof node !== "object") {
            return;
          }
          if (isArray(node)) {
            for (var i3 = 0; i3 < node.length; i3++) {
              var child = node[i3];
              if (isValidElement(child)) {
                validateExplicitKey(child, parentType);
              }
            }
          } else if (isValidElement(node)) {
            if (node._store) {
              node._store.validated = true;
            }
          } else if (node) {
            var iteratorFn = getIteratorFn(node);
            if (typeof iteratorFn === "function") {
              if (iteratorFn !== node.entries) {
                var iterator = iteratorFn.call(node);
                var step;
                while (!(step = iterator.next()).done) {
                  if (isValidElement(step.value)) {
                    validateExplicitKey(step.value, parentType);
                  }
                }
              }
            }
          }
        }
        function validatePropTypes(element) {
          {
            var type = element.type;
            if (type === null || type === void 0 || typeof type === "string") {
              return;
            }
            var propTypes;
            if (typeof type === "function") {
              propTypes = type.propTypes;
            } else if (typeof type === "object" && (type.$$typeof === REACT_FORWARD_REF_TYPE || // Note: Memo only checks outer props here.
            // Inner props are checked in the reconciler.
            type.$$typeof === REACT_MEMO_TYPE)) {
              propTypes = type.propTypes;
            } else {
              return;
            }
            if (propTypes) {
              var name = getComponentNameFromType(type);
              checkPropTypes(propTypes, element.props, "prop", name, element);
            } else if (type.PropTypes !== void 0 && !propTypesMisspellWarningShown) {
              propTypesMisspellWarningShown = true;
              var _name = getComponentNameFromType(type);
              error("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _name || "Unknown");
            }
            if (typeof type.getDefaultProps === "function" && !type.getDefaultProps.isReactClassApproved) {
              error("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
            }
          }
        }
        function validateFragmentProps(fragment) {
          {
            var keys = Object.keys(fragment.props);
            for (var i3 = 0; i3 < keys.length; i3++) {
              var key = keys[i3];
              if (key !== "children" && key !== "key") {
                setCurrentlyValidatingElement$1(fragment);
                error("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", key);
                setCurrentlyValidatingElement$1(null);
                break;
              }
            }
            if (fragment.ref !== null) {
              setCurrentlyValidatingElement$1(fragment);
              error("Invalid attribute `ref` supplied to `React.Fragment`.");
              setCurrentlyValidatingElement$1(null);
            }
          }
        }
        function createElementWithValidation(type, props, children) {
          var validType = isValidElementType(type);
          if (!validType) {
            var info = "";
            if (type === void 0 || typeof type === "object" && type !== null && Object.keys(type).length === 0) {
              info += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            }
            var sourceInfo = getSourceInfoErrorAddendumForProps(props);
            if (sourceInfo) {
              info += sourceInfo;
            } else {
              info += getDeclarationErrorAddendum();
            }
            var typeString;
            if (type === null) {
              typeString = "null";
            } else if (isArray(type)) {
              typeString = "array";
            } else if (type !== void 0 && type.$$typeof === REACT_ELEMENT_TYPE) {
              typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />";
              info = " Did you accidentally export a JSX literal instead of a component?";
            } else {
              typeString = typeof type;
            }
            {
              error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, info);
            }
          }
          var element = createElement3.apply(this, arguments);
          if (element == null) {
            return element;
          }
          if (validType) {
            for (var i3 = 2; i3 < arguments.length; i3++) {
              validateChildKeys(arguments[i3], type);
            }
          }
          if (type === REACT_FRAGMENT_TYPE) {
            validateFragmentProps(element);
          } else {
            validatePropTypes(element);
          }
          return element;
        }
        var didWarnAboutDeprecatedCreateFactory = false;
        function createFactoryWithValidation(type) {
          var validatedFactory = createElementWithValidation.bind(null, type);
          validatedFactory.type = type;
          {
            if (!didWarnAboutDeprecatedCreateFactory) {
              didWarnAboutDeprecatedCreateFactory = true;
              warn("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.");
            }
            Object.defineProperty(validatedFactory, "type", {
              enumerable: false,
              get: function() {
                warn("Factory.type is deprecated. Access the class directly before passing it to createFactory.");
                Object.defineProperty(this, "type", {
                  value: type
                });
                return type;
              }
            });
          }
          return validatedFactory;
        }
        function cloneElementWithValidation(element, props, children) {
          var newElement = cloneElement.apply(this, arguments);
          for (var i3 = 2; i3 < arguments.length; i3++) {
            validateChildKeys(arguments[i3], newElement.type);
          }
          validatePropTypes(newElement);
          return newElement;
        }
        function startTransition(scope, options) {
          var prevTransition = ReactCurrentBatchConfig.transition;
          ReactCurrentBatchConfig.transition = {};
          var currentTransition = ReactCurrentBatchConfig.transition;
          {
            ReactCurrentBatchConfig.transition._updatedFibers = /* @__PURE__ */ new Set();
          }
          try {
            scope();
          } finally {
            ReactCurrentBatchConfig.transition = prevTransition;
            {
              if (prevTransition === null && currentTransition._updatedFibers) {
                var updatedFibersCount = currentTransition._updatedFibers.size;
                if (updatedFibersCount > 10) {
                  warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.");
                }
                currentTransition._updatedFibers.clear();
              }
            }
          }
        }
        var didWarnAboutMessageChannel = false;
        var enqueueTaskImpl = null;
        function enqueueTask(task) {
          if (enqueueTaskImpl === null) {
            try {
              var requireString = ("require" + Math.random()).slice(0, 7);
              var nodeRequire = module && module[requireString];
              enqueueTaskImpl = nodeRequire.call(module, "timers").setImmediate;
            } catch (_err) {
              enqueueTaskImpl = function(callback) {
                {
                  if (didWarnAboutMessageChannel === false) {
                    didWarnAboutMessageChannel = true;
                    if (typeof MessageChannel === "undefined") {
                      error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning.");
                    }
                  }
                }
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
              };
            }
          }
          return enqueueTaskImpl(task);
        }
        var actScopeDepth = 0;
        var didWarnNoAwaitAct = false;
        function act(callback) {
          {
            var prevActScopeDepth = actScopeDepth;
            actScopeDepth++;
            if (ReactCurrentActQueue.current === null) {
              ReactCurrentActQueue.current = [];
            }
            var prevIsBatchingLegacy = ReactCurrentActQueue.isBatchingLegacy;
            var result;
            try {
              ReactCurrentActQueue.isBatchingLegacy = true;
              result = callback();
              if (!prevIsBatchingLegacy && ReactCurrentActQueue.didScheduleLegacyUpdate) {
                var queue = ReactCurrentActQueue.current;
                if (queue !== null) {
                  ReactCurrentActQueue.didScheduleLegacyUpdate = false;
                  flushActQueue(queue);
                }
              }
            } catch (error2) {
              popActScope(prevActScopeDepth);
              throw error2;
            } finally {
              ReactCurrentActQueue.isBatchingLegacy = prevIsBatchingLegacy;
            }
            if (result !== null && typeof result === "object" && typeof result.then === "function") {
              var thenableResult = result;
              var wasAwaited = false;
              var thenable = {
                then: function(resolve, reject) {
                  wasAwaited = true;
                  thenableResult.then(function(returnValue2) {
                    popActScope(prevActScopeDepth);
                    if (actScopeDepth === 0) {
                      recursivelyFlushAsyncActWork(returnValue2, resolve, reject);
                    } else {
                      resolve(returnValue2);
                    }
                  }, function(error2) {
                    popActScope(prevActScopeDepth);
                    reject(error2);
                  });
                }
              };
              {
                if (!didWarnNoAwaitAct && typeof Promise !== "undefined") {
                  Promise.resolve().then(function() {
                  }).then(function() {
                    if (!wasAwaited) {
                      didWarnNoAwaitAct = true;
                      error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);");
                    }
                  });
                }
              }
              return thenable;
            } else {
              var returnValue = result;
              popActScope(prevActScopeDepth);
              if (actScopeDepth === 0) {
                var _queue = ReactCurrentActQueue.current;
                if (_queue !== null) {
                  flushActQueue(_queue);
                  ReactCurrentActQueue.current = null;
                }
                var _thenable = {
                  then: function(resolve, reject) {
                    if (ReactCurrentActQueue.current === null) {
                      ReactCurrentActQueue.current = [];
                      recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                    } else {
                      resolve(returnValue);
                    }
                  }
                };
                return _thenable;
              } else {
                var _thenable2 = {
                  then: function(resolve, reject) {
                    resolve(returnValue);
                  }
                };
                return _thenable2;
              }
            }
          }
        }
        function popActScope(prevActScopeDepth) {
          {
            if (prevActScopeDepth !== actScopeDepth - 1) {
              error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
            }
            actScopeDepth = prevActScopeDepth;
          }
        }
        function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
          {
            var queue = ReactCurrentActQueue.current;
            if (queue !== null) {
              try {
                flushActQueue(queue);
                enqueueTask(function() {
                  if (queue.length === 0) {
                    ReactCurrentActQueue.current = null;
                    resolve(returnValue);
                  } else {
                    recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                  }
                });
              } catch (error2) {
                reject(error2);
              }
            } else {
              resolve(returnValue);
            }
          }
        }
        var isFlushing = false;
        function flushActQueue(queue) {
          {
            if (!isFlushing) {
              isFlushing = true;
              var i3 = 0;
              try {
                for (; i3 < queue.length; i3++) {
                  var callback = queue[i3];
                  do {
                    callback = callback(true);
                  } while (callback !== null);
                }
                queue.length = 0;
              } catch (error2) {
                queue = queue.slice(i3 + 1);
                throw error2;
              } finally {
                isFlushing = false;
              }
            }
          }
        }
        var createElement$1 = createElementWithValidation;
        var cloneElement$1 = cloneElementWithValidation;
        var createFactory = createFactoryWithValidation;
        var Children = {
          map: mapChildren,
          forEach: forEachChildren,
          count: countChildren,
          toArray,
          only: onlyChild
        };
        exports.Children = Children;
        exports.Component = Component;
        exports.Fragment = REACT_FRAGMENT_TYPE;
        exports.Profiler = REACT_PROFILER_TYPE;
        exports.PureComponent = PureComponent;
        exports.StrictMode = REACT_STRICT_MODE_TYPE;
        exports.Suspense = REACT_SUSPENSE_TYPE;
        exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ReactSharedInternals;
        exports.cloneElement = cloneElement$1;
        exports.createContext = createContext;
        exports.createElement = createElement$1;
        exports.createFactory = createFactory;
        exports.createRef = createRef;
        exports.forwardRef = forwardRef;
        exports.isValidElement = isValidElement;
        exports.lazy = lazy;
        exports.memo = memo;
        exports.startTransition = startTransition;
        exports.unstable_act = act;
        exports.useCallback = useCallback;
        exports.useContext = useContext;
        exports.useDebugValue = useDebugValue;
        exports.useDeferredValue = useDeferredValue;
        exports.useEffect = useEffect3;
        exports.useId = useId;
        exports.useImperativeHandle = useImperativeHandle;
        exports.useInsertionEffect = useInsertionEffect;
        exports.useLayoutEffect = useLayoutEffect;
        exports.useMemo = useMemo;
        exports.useReducer = useReducer;
        exports.useRef = useRef3;
        exports.useState = useState2;
        exports.useSyncExternalStore = useSyncExternalStore;
        exports.useTransition = useTransition;
        exports.version = ReactVersion;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/react/index.js
var require_react = __commonJS({
  "node_modules/react/index.js"(exports, module) {
    "use strict";
    if (process.env.NODE_ENV === "production") {
      module.exports = require_react_production_min();
    } else {
      module.exports = require_react_development();
    }
  }
});

// src/react-carousel.tsx
var React = __toESM(require_react());

// node_modules/@fancyapps/ui/dist/index.esm.js
var t = (t3, e3 = 1e4) => (t3 = parseFloat(t3 + "") || 0, Math.round((t3 + Number.EPSILON) * e3) / e3);
var e = function(t3) {
  if (!(t3 && t3 instanceof Element && t3.offsetParent))
    return false;
  const e3 = t3.scrollHeight > t3.clientHeight, i3 = window.getComputedStyle(t3).overflowY, n3 = -1 !== i3.indexOf("hidden"), s3 = -1 !== i3.indexOf("visible");
  return e3 && !n3 && !s3;
};
var i = function(t3, n3 = void 0) {
  return !(!t3 || t3 === document.body || n3 && t3 === n3) && (e(t3) ? t3 : i(t3.parentElement, n3));
};
var n = function(t3) {
  var e3 = new DOMParser().parseFromString(t3, "text/html").body;
  if (e3.childElementCount > 1) {
    for (var i3 = document.createElement("div"); e3.firstChild; )
      i3.appendChild(e3.firstChild);
    return i3;
  }
  return e3.firstChild;
};
var s = (t3) => `${t3 || ""}`.split(" ").filter((t4) => !!t4);
var o = (t3, e3, i3) => {
  t3 && s(e3).forEach((e4) => {
    t3.classList.toggle(e4, i3 || false);
  });
};
var a = class {
  constructor(t3) {
    Object.defineProperty(this, "pageX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "pageY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "clientX", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "clientY", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "id", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "time", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "nativePointer", { enumerable: true, configurable: true, writable: true, value: void 0 }), this.nativePointer = t3, this.pageX = t3.pageX, this.pageY = t3.pageY, this.clientX = t3.clientX, this.clientY = t3.clientY, this.id = self.Touch && t3 instanceof Touch ? t3.identifier : -1, this.time = Date.now();
  }
};
var r = { passive: false };
var l = class {
  constructor(t3, { start: e3 = () => true, move: i3 = () => {
  }, end: n3 = () => {
  } }) {
    Object.defineProperty(this, "element", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "startCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "moveCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "endCallback", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "currentPointers", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "startPointers", { enumerable: true, configurable: true, writable: true, value: [] }), this.element = t3, this.startCallback = e3, this.moveCallback = i3, this.endCallback = n3;
    for (const t4 of ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"])
      this[t4] = this[t4].bind(this);
    this.element.addEventListener("mousedown", this.onPointerStart, r), this.element.addEventListener("touchstart", this.onTouchStart, r), this.element.addEventListener("touchmove", this.onMove, r), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd);
  }
  onPointerStart(t3) {
    if (!t3.buttons || 0 !== t3.button)
      return;
    const e3 = new a(t3);
    this.currentPointers.some((t4) => t4.id === e3.id) || this.triggerPointerStart(e3, t3) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
  }
  onTouchStart(t3) {
    for (const e3 of Array.from(t3.changedTouches || []))
      this.triggerPointerStart(new a(e3), t3);
    window.addEventListener("blur", this.onWindowBlur);
  }
  onMove(t3) {
    const e3 = this.currentPointers.slice(), i3 = "changedTouches" in t3 ? Array.from(t3.changedTouches || []).map((t4) => new a(t4)) : [new a(t3)], n3 = [];
    for (const t4 of i3) {
      const e4 = this.currentPointers.findIndex((e5) => e5.id === t4.id);
      e4 < 0 || (n3.push(t4), this.currentPointers[e4] = t4);
    }
    n3.length && this.moveCallback(t3, this.currentPointers.slice(), e3);
  }
  onPointerEnd(t3) {
    t3.buttons > 0 && 0 !== t3.button || (this.triggerPointerEnd(t3, new a(t3)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
  }
  onTouchEnd(t3) {
    for (const e3 of Array.from(t3.changedTouches || []))
      this.triggerPointerEnd(t3, new a(e3));
  }
  triggerPointerStart(t3, e3) {
    return !!this.startCallback(e3, t3, this.currentPointers.slice()) && (this.currentPointers.push(t3), this.startPointers.push(t3), true);
  }
  triggerPointerEnd(t3, e3) {
    const i3 = this.currentPointers.findIndex((t4) => t4.id === e3.id);
    i3 < 0 || (this.currentPointers.splice(i3, 1), this.startPointers.splice(i3, 1), this.endCallback(t3, e3, this.currentPointers.slice()));
  }
  onWindowBlur() {
    this.clear();
  }
  clear() {
    for (; this.currentPointers.length; ) {
      const t3 = this.currentPointers[this.currentPointers.length - 1];
      this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), this.endCallback(new Event("touchend", { bubbles: true, cancelable: true, clientX: t3.clientX, clientY: t3.clientY }), t3, this.currentPointers.slice());
    }
  }
  stop() {
    this.element.removeEventListener("mousedown", this.onPointerStart, r), this.element.removeEventListener("touchstart", this.onTouchStart, r), this.element.removeEventListener("touchmove", this.onMove, r), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
  }
};
function c(t3, e3) {
  return e3 ? Math.sqrt(Math.pow(e3.clientX - t3.clientX, 2) + Math.pow(e3.clientY - t3.clientY, 2)) : 0;
}
function h(t3, e3) {
  return e3 ? { clientX: (t3.clientX + e3.clientX) / 2, clientY: (t3.clientY + e3.clientY) / 2 } : t3;
}
var d = (t3) => "object" == typeof t3 && null !== t3 && t3.constructor === Object && "[object Object]" === Object.prototype.toString.call(t3);
var u = (t3, ...e3) => {
  const i3 = e3.length;
  for (let n3 = 0; n3 < i3; n3++) {
    const i4 = e3[n3] || {};
    Object.entries(i4).forEach(([e4, i5]) => {
      const n4 = Array.isArray(i5) ? [] : {};
      t3[e4] || Object.assign(t3, { [e4]: n4 }), d(i5) ? Object.assign(t3[e4], u(n4, i5)) : Array.isArray(i5) ? Object.assign(t3, { [e4]: [...i5] }) : Object.assign(t3, { [e4]: i5 });
    });
  }
  return t3;
};
var p = function(t3, e3) {
  return t3.split(".").reduce((t4, e4) => "object" == typeof t4 ? t4[e4] : void 0, e3);
};
var f = class {
  constructor(t3 = {}) {
    Object.defineProperty(this, "options", { enumerable: true, configurable: true, writable: true, value: t3 }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Map() }), this.setOptions(t3);
    for (const t4 of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
      t4.startsWith("on") && "function" == typeof this[t4] && (this[t4] = this[t4].bind(this));
  }
  setOptions(t3) {
    this.options = t3 ? u({}, this.constructor.defaults, t3) : {};
    for (const [t4, e3] of Object.entries(this.option("on") || {}))
      this.on(t4, e3);
  }
  option(t3, ...e3) {
    let i3 = p(t3, this.options);
    return i3 && "function" == typeof i3 && (i3 = i3.call(this, this, ...e3)), i3;
  }
  optionFor(t3, e3, i3, ...n3) {
    let s3 = p(e3, t3);
    var o3;
    "string" != typeof (o3 = s3) || isNaN(o3) || isNaN(parseFloat(o3)) || (s3 = parseFloat(s3)), "true" === s3 && (s3 = true), "false" === s3 && (s3 = false), s3 && "function" == typeof s3 && (s3 = s3.call(this, this, t3, ...n3));
    let a3 = p(e3, this.options);
    return a3 && "function" == typeof a3 ? s3 = a3.call(this, this, t3, ...n3, s3) : void 0 === s3 && (s3 = a3), void 0 === s3 ? i3 : s3;
  }
  cn(t3) {
    const e3 = this.options.classes;
    return e3 && e3[t3] || "";
  }
  localize(t3, e3 = []) {
    t3 = String(t3).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t4, e4, i3) => {
      let n3 = "";
      return i3 ? n3 = this.option(`${e4[0] + e4.toLowerCase().substring(1)}.l10n.${i3}`) : e4 && (n3 = this.option(`l10n.${e4}`)), n3 || (n3 = t4), n3;
    });
    for (let i3 = 0; i3 < e3.length; i3++)
      t3 = t3.split(e3[i3][0]).join(e3[i3][1]);
    return t3 = t3.replace(/\{\{(.*?)\}\}/g, (t4, e4) => e4);
  }
  on(t3, e3) {
    let i3 = [];
    "string" == typeof t3 ? i3 = t3.split(" ") : Array.isArray(t3) && (i3 = t3), this.events || (this.events = /* @__PURE__ */ new Map()), i3.forEach((t4) => {
      let i4 = this.events.get(t4);
      i4 || (this.events.set(t4, []), i4 = []), i4.includes(e3) || i4.push(e3), this.events.set(t4, i4);
    });
  }
  off(t3, e3) {
    let i3 = [];
    "string" == typeof t3 ? i3 = t3.split(" ") : Array.isArray(t3) && (i3 = t3), i3.forEach((t4) => {
      const i4 = this.events.get(t4);
      if (Array.isArray(i4)) {
        const t5 = i4.indexOf(e3);
        t5 > -1 && i4.splice(t5, 1);
      }
    });
  }
  emit(t3, ...e3) {
    [...this.events.get(t3) || []].forEach((t4) => t4(this, ...e3)), "*" !== t3 && this.emit("*", t3, ...e3);
  }
};
Object.defineProperty(f, "version", { enumerable: true, configurable: true, writable: true, value: "5.0.36" }), Object.defineProperty(f, "defaults", { enumerable: true, configurable: true, writable: true, value: {} });
var g = class extends f {
  constructor(t3 = {}) {
    super(t3), Object.defineProperty(this, "plugins", { enumerable: true, configurable: true, writable: true, value: {} });
  }
  attachPlugins(t3 = {}) {
    const e3 = /* @__PURE__ */ new Map();
    for (const [i3, n3] of Object.entries(t3)) {
      const t4 = this.option(i3), s3 = this.plugins[i3];
      s3 || false === t4 ? s3 && false === t4 && (s3.detach(), delete this.plugins[i3]) : e3.set(i3, new n3(this, t4 || {}));
    }
    for (const [t4, i3] of e3)
      this.plugins[t4] = i3, i3.attach();
  }
  detachPlugins(t3) {
    t3 = t3 || Object.keys(this.plugins);
    for (const e3 of t3) {
      const t4 = this.plugins[e3];
      t4 && t4.detach(), delete this.plugins[e3];
    }
    return this.emit("detachPlugins"), this;
  }
};
var m;
!function(t3) {
  t3[t3.Init = 0] = "Init", t3[t3.Error = 1] = "Error", t3[t3.Ready = 2] = "Ready", t3[t3.Panning = 3] = "Panning", t3[t3.Mousemove = 4] = "Mousemove", t3[t3.Destroy = 5] = "Destroy";
}(m || (m = {}));
var v = ["a", "b", "c", "d", "e", "f"];
var b = { PANUP: "Move up", PANDOWN: "Move down", PANLEFT: "Move left", PANRIGHT: "Move right", ZOOMIN: "Zoom in", ZOOMOUT: "Zoom out", TOGGLEZOOM: "Toggle zoom level", TOGGLE1TO1: "Toggle zoom level", ITERATEZOOM: "Toggle zoom level", ROTATECCW: "Rotate counterclockwise", ROTATECW: "Rotate clockwise", FLIPX: "Flip horizontally", FLIPY: "Flip vertically", FITX: "Fit horizontally", FITY: "Fit vertically", RESET: "Reset", TOGGLEFS: "Toggle fullscreen" };
var y = { content: null, width: "auto", height: "auto", panMode: "drag", touch: true, dragMinThreshold: 3, lockAxis: false, mouseMoveFactor: 1, mouseMoveFriction: 0.12, zoom: true, pinchToZoom: true, panOnlyZoomed: "auto", minScale: 1, maxScale: 2, friction: 0.25, dragFriction: 0.35, decelFriction: 0.05, click: "toggleZoom", dblClick: false, wheel: "zoom", wheelLimit: 7, spinner: true, bounds: "auto", infinite: false, rubberband: true, bounce: true, maxVelocity: 75, transformParent: false, classes: { content: "f-panzoom__content", isLoading: "is-loading", canZoomIn: "can-zoom_in", canZoomOut: "can-zoom_out", isDraggable: "is-draggable", isDragging: "is-dragging", inFullscreen: "in-fullscreen", htmlHasFullscreen: "with-panzoom-in-fullscreen" }, l10n: b };
var w = '<circle cx="25" cy="25" r="20"></circle>';
var x = '<div class="f-spinner"><svg viewBox="0 0 50 50">' + w + w + "</svg></div>";
var E = (t3) => t3 && null !== t3 && t3 instanceof Element && "nodeType" in t3;
var S = (t3, e3) => {
  t3 && s(e3).forEach((e4) => {
    t3.classList.remove(e4);
  });
};
var P = (t3, e3) => {
  t3 && s(e3).forEach((e4) => {
    t3.classList.add(e4);
  });
};
var C = { a: 1, b: 0, c: 0, d: 1, e: 0, f: 0 };
var T = 1e5;
var M = 1e4;
var O = "mousemove";
var A = "drag";
var L = "content";
var z = "auto";
var R = null;
var k = null;
var I = class extends g {
  get fits() {
    return this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1;
  }
  get isTouchDevice() {
    return null === k && (k = window.matchMedia("(hover: none)").matches), k;
  }
  get isMobile() {
    return null === R && (R = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), R;
  }
  get panMode() {
    return this.options.panMode !== O || this.isTouchDevice ? A : O;
  }
  get panOnlyZoomed() {
    const t3 = this.options.panOnlyZoomed;
    return t3 === z ? this.isTouchDevice : t3;
  }
  get isInfinite() {
    return this.option("infinite");
  }
  get angle() {
    return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
  }
  get targetAngle() {
    return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
  }
  get scale() {
    const { a: t3, b: e3 } = this.current;
    return Math.sqrt(t3 * t3 + e3 * e3) || 1;
  }
  get targetScale() {
    const { a: t3, b: e3 } = this.target;
    return Math.sqrt(t3 * t3 + e3 * e3) || 1;
  }
  get minScale() {
    return this.option("minScale") || 1;
  }
  get fullScale() {
    const { contentRect: t3 } = this;
    return t3.fullWidth / t3.fitWidth || 1;
  }
  get maxScale() {
    return this.fullScale * (this.option("maxScale") || 1) || 1;
  }
  get coverScale() {
    const { containerRect: t3, contentRect: e3 } = this, i3 = Math.max(t3.height / e3.fitHeight, t3.width / e3.fitWidth) || 1;
    return Math.min(this.fullScale, i3);
  }
  get isScaling() {
    return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
  }
  get isContentLoading() {
    const t3 = this.content;
    return !!(t3 && t3 instanceof HTMLImageElement) && !t3.complete;
  }
  get isResting() {
    if (this.isBouncingX || this.isBouncingY)
      return false;
    for (const t3 of v) {
      const e3 = "e" == t3 || "f" === t3 ? 1e-4 : 1e-5;
      if (Math.abs(this.target[t3] - this.current[t3]) > e3)
        return false;
    }
    return !(!this.ignoreBounds && !this.checkBounds().inBounds);
  }
  constructor(t3, e3 = {}, i3 = {}) {
    var s3;
    if (super(e3), Object.defineProperty(this, "pointerTracker", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "resizeObserver", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "updateTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "clickTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "rAF", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "isTicking", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "ignoreBounds", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "isBouncingX", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "isBouncingY", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "clicks", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "trackingPoints", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "pwt", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "cwd", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "pmme", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "friction", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: m.Init }), Object.defineProperty(this, "isDragging", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "content", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "spinner", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "containerRect", { enumerable: true, configurable: true, writable: true, value: { width: 0, height: 0, innerWidth: 0, innerHeight: 0 } }), Object.defineProperty(this, "contentRect", { enumerable: true, configurable: true, writable: true, value: { top: 0, right: 0, bottom: 0, left: 0, fullWidth: 0, fullHeight: 0, fitWidth: 0, fitHeight: 0, width: 0, height: 0 } }), Object.defineProperty(this, "dragStart", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0, top: 0, left: 0, time: 0 } }), Object.defineProperty(this, "dragOffset", { enumerable: true, configurable: true, writable: true, value: { x: 0, y: 0, time: 0 } }), Object.defineProperty(this, "current", { enumerable: true, configurable: true, writable: true, value: Object.assign({}, C) }), Object.defineProperty(this, "target", { enumerable: true, configurable: true, writable: true, value: Object.assign({}, C) }), Object.defineProperty(this, "velocity", { enumerable: true, configurable: true, writable: true, value: { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0 } }), Object.defineProperty(this, "lockedAxis", { enumerable: true, configurable: true, writable: true, value: false }), !t3)
      throw new Error("Container Element Not Found");
    this.container = t3, this.initContent(), this.attachPlugins(Object.assign(Object.assign({}, I.Plugins), i3)), this.emit("attachPlugins"), this.emit("init");
    const o3 = this.content;
    if (o3.addEventListener("load", this.onLoad), o3.addEventListener("error", this.onError), this.isContentLoading) {
      if (this.option("spinner")) {
        t3.classList.add(this.cn("isLoading"));
        const e4 = n(x);
        !t3.contains(o3) || o3.parentElement instanceof HTMLPictureElement ? this.spinner = t3.appendChild(e4) : this.spinner = (null === (s3 = o3.parentElement) || void 0 === s3 ? void 0 : s3.insertBefore(e4, o3)) || null;
      }
      this.emit("beforeLoad");
    } else
      queueMicrotask(() => {
        this.enable();
      });
  }
  initContent() {
    const { container: t3 } = this, e3 = this.cn(L);
    let i3 = this.option(L) || t3.querySelector(`.${e3}`);
    if (i3 || (i3 = t3.querySelector("img,picture") || t3.firstElementChild, i3 && P(i3, e3)), i3 instanceof HTMLPictureElement && (i3 = i3.querySelector("img")), !i3)
      throw new Error("No content found");
    this.content = i3;
  }
  onLoad() {
    const { spinner: t3, container: e3, state: i3 } = this;
    t3 && (t3.remove(), this.spinner = null), this.option("spinner") && e3.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), i3 === m.Init ? this.enable() : this.updateMetrics();
  }
  onError() {
    this.state !== m.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = m.Error, this.emit("error"));
  }
  getNextScale(t3) {
    const { fullScale: e3, targetScale: i3, coverScale: n3, maxScale: s3, minScale: o3 } = this;
    let a3 = o3;
    switch (t3) {
      case "toggleMax":
        a3 = i3 - o3 < 0.5 * (s3 - o3) ? s3 : o3;
        break;
      case "toggleCover":
        a3 = i3 - o3 < 0.5 * (n3 - o3) ? n3 : o3;
        break;
      case "toggleZoom":
        a3 = i3 - o3 < 0.5 * (e3 - o3) ? e3 : o3;
        break;
      case "iterateZoom":
        let t4 = [1, e3, s3].sort((t5, e4) => t5 - e4), r3 = t4.findIndex((t5) => t5 > i3 + 1e-5);
        a3 = t4[r3] || 1;
    }
    return a3;
  }
  attachObserver() {
    var t3;
    const e3 = () => {
      const { container: t4, containerRect: e4 } = this;
      return Math.abs(e4.width - t4.getBoundingClientRect().width) > 0.1 || Math.abs(e4.height - t4.getBoundingClientRect().height) > 0.1;
    };
    this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver(() => {
      this.updateTimer || (e3() ? (this.onResize(), this.isMobile && (this.updateTimer = setTimeout(() => {
        e3() && this.onResize(), this.updateTimer = null;
      }, 500))) : this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null));
    })), null === (t3 = this.resizeObserver) || void 0 === t3 || t3.observe(this.container);
  }
  detachObserver() {
    var t3;
    null === (t3 = this.resizeObserver) || void 0 === t3 || t3.disconnect();
  }
  attachEvents() {
    const { container: t3 } = this;
    t3.addEventListener("click", this.onClick, { passive: false, capture: false }), t3.addEventListener("wheel", this.onWheel, { passive: false }), this.pointerTracker = new l(t3, { start: this.onPointerDown, move: this.onPointerMove, end: this.onPointerUp }), document.addEventListener(O, this.onMouseMove);
  }
  detachEvents() {
    var t3;
    const { container: e3 } = this;
    e3.removeEventListener("click", this.onClick, { passive: false, capture: false }), e3.removeEventListener("wheel", this.onWheel, { passive: false }), null === (t3 = this.pointerTracker) || void 0 === t3 || t3.stop(), this.pointerTracker = null, document.removeEventListener(O, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, true), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null);
  }
  animate() {
    this.setTargetForce();
    const t3 = this.friction, e3 = this.option("maxVelocity");
    for (const i3 of v)
      t3 ? (this.velocity[i3] *= 1 - t3, e3 && !this.isScaling && (this.velocity[i3] = Math.max(Math.min(this.velocity[i3], e3), -1 * e3)), this.current[i3] += this.velocity[i3]) : this.current[i3] = this.target[i3];
    this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(() => this.animate()) : this.stop("current");
  }
  setTargetForce() {
    for (const t3 of v)
      "e" === t3 && this.isBouncingX || "f" === t3 && this.isBouncingY || (this.velocity[t3] = (1 / (1 - this.friction) - 1) * (this.target[t3] - this.current[t3]));
  }
  checkBounds(t3 = 0, e3 = 0) {
    const { current: i3 } = this, n3 = i3.e + t3, s3 = i3.f + e3, o3 = this.getBounds(), { x: a3, y: r3 } = o3, l3 = a3.min, c3 = a3.max, h3 = r3.min, d3 = r3.max;
    let u3 = 0, p3 = 0;
    return l3 !== 1 / 0 && n3 < l3 ? u3 = l3 - n3 : c3 !== 1 / 0 && n3 > c3 && (u3 = c3 - n3), h3 !== 1 / 0 && s3 < h3 ? p3 = h3 - s3 : d3 !== 1 / 0 && s3 > d3 && (p3 = d3 - s3), Math.abs(u3) < 1e-4 && (u3 = 0), Math.abs(p3) < 1e-4 && (p3 = 0), Object.assign(Object.assign({}, o3), { xDiff: u3, yDiff: p3, inBounds: !u3 && !p3 });
  }
  clampTargetBounds() {
    const { target: t3 } = this, { x: e3, y: i3 } = this.getBounds();
    e3.min !== 1 / 0 && (t3.e = Math.max(t3.e, e3.min)), e3.max !== 1 / 0 && (t3.e = Math.min(t3.e, e3.max)), i3.min !== 1 / 0 && (t3.f = Math.max(t3.f, i3.min)), i3.max !== 1 / 0 && (t3.f = Math.min(t3.f, i3.max));
  }
  calculateContentDim(t3 = this.current) {
    const { content: e3, contentRect: i3 } = this, { fitWidth: n3, fitHeight: s3, fullWidth: o3, fullHeight: a3 } = i3;
    let r3 = o3, l3 = a3;
    if (this.option("zoom") || 0 !== this.angle) {
      const i4 = !(e3 instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e3).maxWidth || "none" === window.getComputedStyle(e3).maxHeight), c3 = i4 ? o3 : n3, h3 = i4 ? a3 : s3, d3 = this.getMatrix(t3), u3 = new DOMPoint(0, 0).matrixTransform(d3), p3 = new DOMPoint(0 + c3, 0).matrixTransform(d3), f3 = new DOMPoint(0 + c3, 0 + h3).matrixTransform(d3), g3 = new DOMPoint(0, 0 + h3).matrixTransform(d3), m2 = Math.abs(f3.x - u3.x), v2 = Math.abs(f3.y - u3.y), b3 = Math.abs(g3.x - p3.x), y2 = Math.abs(g3.y - p3.y);
      r3 = Math.max(m2, b3), l3 = Math.max(v2, y2);
    }
    return { contentWidth: r3, contentHeight: l3 };
  }
  setEdgeForce() {
    if (this.ignoreBounds || this.isDragging || this.panMode === O || this.targetScale < this.scale)
      return this.isBouncingX = false, void (this.isBouncingY = false);
    const { target: t3 } = this, { x: e3, y: i3, xDiff: n3, yDiff: s3 } = this.checkBounds();
    const o3 = this.option("maxVelocity");
    let a3 = this.velocity.e, r3 = this.velocity.f;
    0 !== n3 ? (this.isBouncingX = true, n3 * a3 <= 0 ? a3 += 0.14 * n3 : (a3 = 0.14 * n3, e3.min !== 1 / 0 && (this.target.e = Math.max(t3.e, e3.min)), e3.max !== 1 / 0 && (this.target.e = Math.min(t3.e, e3.max))), o3 && (a3 = Math.max(Math.min(a3, o3), -1 * o3))) : this.isBouncingX = false, 0 !== s3 ? (this.isBouncingY = true, s3 * r3 <= 0 ? r3 += 0.14 * s3 : (r3 = 0.14 * s3, i3.min !== 1 / 0 && (this.target.f = Math.max(t3.f, i3.min)), i3.max !== 1 / 0 && (this.target.f = Math.min(t3.f, i3.max))), o3 && (r3 = Math.max(Math.min(r3, o3), -1 * o3))) : this.isBouncingY = false, this.isBouncingX && (this.velocity.e = a3), this.isBouncingY && (this.velocity.f = r3);
  }
  enable() {
    const { content: t3 } = this, e3 = new DOMMatrixReadOnly(window.getComputedStyle(t3).transform);
    for (const t4 of v)
      this.current[t4] = this.target[t4] = e3[t4];
    this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = m.Ready, this.emit("ready");
  }
  onClick(t3) {
    var e3;
    "click" === t3.type && 0 === t3.detail && (this.dragOffset.x = 0, this.dragOffset.y = 0), this.isDragging && (null === (e3 = this.pointerTracker) || void 0 === e3 || e3.clear(), this.trackingPoints = [], this.startDecelAnim());
    const i3 = t3.target;
    if (!i3 || t3.defaultPrevented)
      return;
    if (i3.hasAttribute("disabled"))
      return t3.preventDefault(), void t3.stopPropagation();
    if ((() => {
      const t4 = window.getSelection();
      return t4 && "Range" === t4.type;
    })() && !i3.closest("button"))
      return;
    const n3 = i3.closest("[data-panzoom-action]"), s3 = i3.closest("[data-panzoom-change]"), o3 = n3 || s3, a3 = o3 && E(o3) ? o3.dataset : null;
    if (a3) {
      const e4 = a3.panzoomChange, i4 = a3.panzoomAction;
      if ((e4 || i4) && t3.preventDefault(), e4) {
        let t4 = {};
        try {
          t4 = JSON.parse(e4);
        } catch (t5) {
          console && console.warn("The given data was not valid JSON");
        }
        return void this.applyChange(t4);
      }
      if (i4)
        return void (this[i4] && this[i4]());
    }
    if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3)
      return t3.preventDefault(), void t3.stopPropagation();
    if (i3.closest("[data-fancybox]"))
      return;
    const r3 = this.content.getBoundingClientRect(), l3 = this.dragStart;
    if (l3.time && !this.canZoomOut() && (Math.abs(r3.x - l3.x) > 2 || Math.abs(r3.y - l3.y) > 2))
      return;
    this.dragStart.time = 0;
    const c3 = (e4) => {
      this.option("zoom", t3) && e4 && "string" == typeof e4 && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e4) && "function" == typeof this[e4] && (t3.preventDefault(), this[e4]({ event: t3 }));
    }, h3 = this.option("click", t3), d3 = this.option("dblClick", t3);
    d3 ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout(() => {
      1 === this.clicks ? (this.emit("click", t3), !t3.defaultPrevented && h3 && c3(h3)) : (this.emit("dblClick", t3), t3.defaultPrevented || c3(d3)), this.clicks = 0, this.clickTimer = null;
    }, 350))) : (this.emit("click", t3), !t3.defaultPrevented && h3 && c3(h3));
  }
  addTrackingPoint(t3) {
    const e3 = this.trackingPoints.filter((t4) => t4.time > Date.now() - 100);
    e3.push(t3), this.trackingPoints = e3;
  }
  onPointerDown(t3, e3, i3) {
    var n3;
    if (false === this.option("touch", t3))
      return false;
    this.pwt = 0, this.dragOffset = { x: 0, y: 0, time: 0 }, this.trackingPoints = [];
    const s3 = this.content.getBoundingClientRect();
    if (this.dragStart = { x: s3.x, y: s3.y, top: s3.top, left: s3.left, time: Date.now() }, this.clickTimer)
      return false;
    if (this.panMode === O && this.targetScale > 1)
      return t3.preventDefault(), t3.stopPropagation(), false;
    const o3 = t3.composedPath()[0];
    if (!i3.length) {
      if (["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(o3.nodeName) || o3.closest("[contenteditable],[data-selectable],[data-draggable],[data-clickable],[data-panzoom-change],[data-panzoom-action]"))
        return false;
      null === (n3 = window.getSelection()) || void 0 === n3 || n3.removeAllRanges();
    }
    if ("mousedown" === t3.type)
      ["A", "BUTTON"].includes(o3.nodeName) || t3.preventDefault();
    else if (Math.abs(this.velocity.a) > 0.3)
      return false;
    return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), this.isDragging || (this.isDragging = true, this.addTrackingPoint(e3), this.emit("touchStart", t3)), true;
  }
  onPointerMove(e3, n3, s3) {
    if (false === this.option("touch", e3))
      return;
    if (!this.isDragging)
      return;
    if (n3.length < 2 && this.panOnlyZoomed && t(this.targetScale) <= t(this.minScale))
      return;
    if (this.emit("touchMove", e3), e3.defaultPrevented)
      return;
    this.addTrackingPoint(n3[0]);
    const { content: o3 } = this, a3 = h(s3[0], s3[1]), r3 = h(n3[0], n3[1]);
    let l3 = 0, d3 = 0;
    if (n3.length > 1) {
      const t3 = o3.getBoundingClientRect();
      l3 = a3.clientX - t3.left - 0.5 * t3.width, d3 = a3.clientY - t3.top - 0.5 * t3.height;
    }
    const u3 = c(s3[0], s3[1]), p3 = c(n3[0], n3[1]);
    let f3 = u3 ? p3 / u3 : 1, g3 = r3.clientX - a3.clientX, m2 = r3.clientY - a3.clientY;
    this.dragOffset.x += g3, this.dragOffset.y += m2, this.dragOffset.time = Date.now() - this.dragStart.time;
    let v2 = t(this.targetScale) === t(this.minScale) && this.option("lockAxis");
    if (v2 && !this.lockedAxis)
      if ("xy" === v2 || "y" === v2 || "touchmove" === e3.type) {
        if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6)
          return void e3.preventDefault();
        const t3 = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
        this.lockedAxis = t3 > 45 && t3 < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, g3 = 0, m2 = 0;
      } else
        this.lockedAxis = v2;
    if (i(e3.target, this.content) && (v2 = "x", this.dragOffset.y = 0), v2 && "xy" !== v2 && this.lockedAxis !== v2 && t(this.targetScale) === t(this.minScale))
      return;
    e3.cancelable && e3.preventDefault(), this.container.classList.add(this.cn("isDragging"));
    const b3 = this.checkBounds(g3, m2);
    this.option("rubberband") ? ("x" !== this.isInfinite && (b3.xDiff > 0 && g3 < 0 || b3.xDiff < 0 && g3 > 0) && (g3 *= Math.max(0, 0.5 - Math.abs(0.75 / this.contentRect.fitWidth * b3.xDiff))), "y" !== this.isInfinite && (b3.yDiff > 0 && m2 < 0 || b3.yDiff < 0 && m2 > 0) && (m2 *= Math.max(0, 0.5 - Math.abs(0.75 / this.contentRect.fitHeight * b3.yDiff)))) : (b3.xDiff && (g3 = 0), b3.yDiff && (m2 = 0));
    const y2 = this.targetScale, w2 = this.minScale, x2 = this.maxScale;
    y2 < 0.5 * w2 && (f3 = Math.max(f3, w2)), y2 > 1.5 * x2 && (f3 = Math.min(f3, x2)), "y" === this.lockedAxis && t(y2) === t(w2) && (g3 = 0), "x" === this.lockedAxis && t(y2) === t(w2) && (m2 = 0), this.applyChange({ originX: l3, originY: d3, panX: g3, panY: m2, scale: f3, friction: this.option("dragFriction"), ignoreBounds: true });
  }
  onPointerUp(t3, e3, n3) {
    if (n3.length)
      return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
    this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e3), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), i(t3.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), this.emit("touchEnd", t3), this.isDragging = false, this.lockedAxis = false, this.state !== m.Destroy && (t3.defaultPrevented || this.startDecelAnim()));
  }
  startDecelAnim() {
    var e3;
    const i3 = this.isScaling;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = false, this.isBouncingY = false;
    for (const t3 of v)
      this.velocity[t3] = 0;
    this.target.e = this.current.e, this.target.f = this.current.f, S(this.container, "is-scaling"), S(this.container, "is-animating"), this.isTicking = false;
    const { trackingPoints: n3 } = this, s3 = n3[0], o3 = n3[n3.length - 1];
    let a3 = 0, r3 = 0, l3 = 0;
    o3 && s3 && (a3 = o3.clientX - s3.clientX, r3 = o3.clientY - s3.clientY, l3 = o3.time - s3.time);
    const c3 = (null === (e3 = window.visualViewport) || void 0 === e3 ? void 0 : e3.scale) || 1;
    1 !== c3 && (a3 *= c3, r3 *= c3);
    let h3 = 0, d3 = 0, u3 = 0, p3 = 0, f3 = this.option("decelFriction");
    const g3 = this.targetScale;
    if (l3 > 0) {
      u3 = Math.abs(a3) > 3 ? a3 / (l3 / 30) : 0, p3 = Math.abs(r3) > 3 ? r3 / (l3 / 30) : 0;
      const t3 = this.option("maxVelocity");
      t3 && (u3 = Math.max(Math.min(u3, t3), -1 * t3), p3 = Math.max(Math.min(p3, t3), -1 * t3));
    }
    u3 && (h3 = u3 / (1 / (1 - f3) - 1)), p3 && (d3 = p3 / (1 / (1 - f3) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && t(g3) === this.minScale) && (h3 = u3 = 0), ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && t(g3) === this.minScale) && (d3 = p3 = 0);
    const m2 = this.dragOffset.x, b3 = this.dragOffset.y, y2 = this.option("dragMinThreshold") || 0;
    Math.abs(m2) < y2 && Math.abs(b3) < y2 && (h3 = d3 = 0, u3 = p3 = 0), (this.option("zoom") && (g3 < this.minScale - 1e-5 || g3 > this.maxScale + 1e-5) || i3 && !h3 && !d3) && (f3 = 0.35), this.applyChange({ panX: h3, panY: d3, friction: f3 }), this.emit("decel", u3, p3, m2, b3);
  }
  onWheel(t3) {
    var e3 = [-t3.deltaX || 0, -t3.deltaY || 0, -t3.detail || 0].reduce(function(t4, e4) {
      return Math.abs(e4) > Math.abs(t4) ? e4 : t4;
    });
    const i3 = Math.max(-1, Math.min(1, e3));
    if (this.emit("wheel", t3, i3), this.panMode === O)
      return;
    if (t3.defaultPrevented)
      return;
    const n3 = this.option("wheel");
    "pan" === n3 ? (t3.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({ panX: 2 * -t3.deltaX, panY: 2 * -t3.deltaY, bounce: false })) : "zoom" === n3 && false !== this.option("zoom") && this.zoomWithWheel(t3);
  }
  onMouseMove(t3) {
    this.panWithMouse(t3);
  }
  onKeydown(t3) {
    "Escape" === t3.key && this.toggleFS();
  }
  onResize() {
    this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
  }
  setTransform() {
    this.emit("beforeTransform");
    const { current: e3, target: i3, content: n3, contentRect: s3 } = this, o3 = Object.assign({}, C);
    for (const n4 of v) {
      const s4 = "e" == n4 || "f" === n4 ? M : T;
      o3[n4] = t(e3[n4], s4), Math.abs(i3[n4] - e3[n4]) < ("e" == n4 || "f" === n4 ? 0.51 : 1e-3) && (e3[n4] = i3[n4]);
    }
    let { a: a3, b: r3, c: l3, d: c3, e: h3, f: d3 } = o3, u3 = `matrix(${a3}, ${r3}, ${l3}, ${c3}, ${h3}, ${d3})`, p3 = n3.parentElement instanceof HTMLPictureElement ? n3.parentElement : n3;
    if (this.option("transformParent") && (p3 = p3.parentElement || p3), p3.style.transform === u3)
      return;
    p3.style.transform = u3;
    const { contentWidth: f3, contentHeight: g3 } = this.calculateContentDim();
    s3.width = f3, s3.height = g3, this.emit("afterTransform");
  }
  updateMetrics(e3 = false) {
    var i3;
    if (!this || this.state === m.Destroy)
      return;
    if (this.isContentLoading)
      return;
    const n3 = Math.max(1, (null === (i3 = window.visualViewport) || void 0 === i3 ? void 0 : i3.scale) || 1), { container: s3, content: o3 } = this, a3 = o3 instanceof HTMLImageElement, r3 = s3.getBoundingClientRect(), l3 = getComputedStyle(this.container);
    let c3 = r3.width * n3, h3 = r3.height * n3;
    const d3 = parseFloat(l3.paddingTop) + parseFloat(l3.paddingBottom), u3 = c3 - (parseFloat(l3.paddingLeft) + parseFloat(l3.paddingRight)), p3 = h3 - d3;
    this.containerRect = { width: c3, height: h3, innerWidth: u3, innerHeight: p3 };
    const f3 = parseFloat(o3.dataset.width || "") || ((t3) => {
      let e4 = 0;
      return e4 = t3 instanceof HTMLImageElement ? t3.naturalWidth : t3 instanceof SVGElement ? t3.width.baseVal.value : Math.max(t3.offsetWidth, t3.scrollWidth), e4 || 0;
    })(o3), g3 = parseFloat(o3.dataset.height || "") || ((t3) => {
      let e4 = 0;
      return e4 = t3 instanceof HTMLImageElement ? t3.naturalHeight : t3 instanceof SVGElement ? t3.height.baseVal.value : Math.max(t3.offsetHeight, t3.scrollHeight), e4 || 0;
    })(o3);
    let v2 = this.option("width", f3) || z, b3 = this.option("height", g3) || z;
    const y2 = v2 === z, w2 = b3 === z;
    "number" != typeof v2 && (v2 = f3), "number" != typeof b3 && (b3 = g3), y2 && (v2 = f3 * (b3 / g3)), w2 && (b3 = g3 / (f3 / v2));
    let x2 = o3.parentElement instanceof HTMLPictureElement ? o3.parentElement : o3;
    this.option("transformParent") && (x2 = x2.parentElement || x2);
    const E2 = x2.getAttribute("style") || "";
    x2.style.setProperty("transform", "none", "important"), a3 && (x2.style.width = "", x2.style.height = ""), x2.offsetHeight;
    const S2 = o3.getBoundingClientRect();
    let P2 = S2.width * n3, C2 = S2.height * n3, T2 = P2, M2 = C2;
    P2 = Math.min(P2, v2), C2 = Math.min(C2, b3), a3 ? { width: P2, height: C2 } = ((t3, e4, i4, n4) => {
      const s4 = i4 / t3, o4 = n4 / e4, a4 = Math.min(s4, o4);
      return { width: t3 *= a4, height: e4 *= a4 };
    })(v2, b3, P2, C2) : (P2 = Math.min(P2, v2), C2 = Math.min(C2, b3));
    let O2 = 0.5 * (M2 - C2), A2 = 0.5 * (T2 - P2);
    this.contentRect = Object.assign(Object.assign({}, this.contentRect), { top: S2.top - r3.top + O2, bottom: r3.bottom - S2.bottom + O2, left: S2.left - r3.left + A2, right: r3.right - S2.right + A2, fitWidth: P2, fitHeight: C2, width: P2, height: C2, fullWidth: v2, fullHeight: b3 }), x2.style.cssText = E2, a3 && (x2.style.width = `${P2}px`, x2.style.height = `${C2}px`), this.setTransform(), true !== e3 && this.emit("refresh"), this.ignoreBounds || (t(this.targetScale) < t(this.minScale) ? this.zoomTo(this.minScale, { friction: 0 }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, { friction: 0 }) : this.state === m.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls();
  }
  calculateBounds() {
    const { contentWidth: e3, contentHeight: i3 } = this.calculateContentDim(this.target), { targetScale: n3, lockedAxis: s3 } = this, { fitWidth: o3, fitHeight: a3 } = this.contentRect;
    let r3 = 0, l3 = 0, c3 = 0, h3 = 0;
    const d3 = this.option("infinite");
    if (true === d3 || s3 && d3 === s3)
      r3 = -1 / 0, c3 = 1 / 0, l3 = -1 / 0, h3 = 1 / 0;
    else {
      let { containerRect: s4, contentRect: d4 } = this, u3 = t(o3 * n3, M), p3 = t(a3 * n3, M), { innerWidth: f3, innerHeight: g3 } = s4;
      if (s4.width === u3 && (f3 = s4.width), s4.width === p3 && (g3 = s4.height), e3 > f3) {
        c3 = 0.5 * (e3 - f3), r3 = -1 * c3;
        let t3 = 0.5 * (d4.right - d4.left);
        r3 += t3, c3 += t3;
      }
      if (o3 > f3 && e3 < f3 && (r3 -= 0.5 * (o3 - f3), c3 -= 0.5 * (o3 - f3)), i3 > g3) {
        h3 = 0.5 * (i3 - g3), l3 = -1 * h3;
        let t3 = 0.5 * (d4.bottom - d4.top);
        l3 += t3, h3 += t3;
      }
      a3 > g3 && i3 < g3 && (r3 -= 0.5 * (a3 - g3), c3 -= 0.5 * (a3 - g3));
    }
    return { x: { min: r3, max: c3 }, y: { min: l3, max: h3 } };
  }
  getBounds() {
    const t3 = this.option("bounds");
    return t3 !== z ? t3 : this.calculateBounds();
  }
  updateControls() {
    const e3 = this, i3 = e3.container, { panMode: n3, contentRect: s3, targetScale: a3, minScale: r3 } = e3;
    let l3 = r3, c3 = e3.option("click") || false;
    c3 && (l3 = e3.getNextScale(c3));
    let h3 = e3.canZoomIn(), d3 = e3.canZoomOut(), u3 = n3 === A && !!this.option("touch"), p3 = d3 && u3;
    if (u3 && (t(a3) < t(r3) && !this.panOnlyZoomed && (p3 = true), (t(s3.width, 1) > t(s3.fitWidth, 1) || t(s3.height, 1) > t(s3.fitHeight, 1)) && (p3 = true)), t(s3.width * a3, 1) < t(s3.fitWidth, 1) && (p3 = false), n3 === O && (p3 = false), o(i3, this.cn("isDraggable"), p3), !this.option("zoom"))
      return;
    let f3 = h3 && t(l3) > t(a3), g3 = !f3 && !p3 && d3 && t(l3) < t(a3);
    o(i3, this.cn("canZoomIn"), f3), o(i3, this.cn("canZoomOut"), g3);
    for (const t3 of i3.querySelectorAll("[data-panzoom-action]")) {
      let e4 = false, i4 = false;
      switch (t3.dataset.panzoomAction) {
        case "zoomIn":
          h3 ? e4 = true : i4 = true;
          break;
        case "zoomOut":
          d3 ? e4 = true : i4 = true;
          break;
        case "toggleZoom":
        case "iterateZoom":
          h3 || d3 ? e4 = true : i4 = true;
          const n4 = t3.querySelector("g");
          n4 && (n4.style.display = h3 ? "" : "none");
      }
      e4 ? (t3.removeAttribute("disabled"), t3.removeAttribute("tabindex")) : i4 && (t3.setAttribute("disabled", ""), t3.setAttribute("tabindex", "-1"));
    }
  }
  panTo({ x: t3 = this.target.e, y: e3 = this.target.f, scale: i3 = this.targetScale, friction: n3 = this.option("friction"), angle: s3 = 0, originX: o3 = 0, originY: a3 = 0, flipX: r3 = false, flipY: l3 = false, ignoreBounds: c3 = false }) {
    this.state !== m.Destroy && this.applyChange({ panX: t3 - this.target.e, panY: e3 - this.target.f, scale: i3 / this.targetScale, angle: s3, originX: o3, originY: a3, friction: n3, flipX: r3, flipY: l3, ignoreBounds: c3 });
  }
  applyChange({ panX: e3 = 0, panY: i3 = 0, scale: n3 = 1, angle: s3 = 0, originX: o3 = -this.current.e, originY: a3 = -this.current.f, friction: r3 = this.option("friction"), flipX: l3 = false, flipY: c3 = false, ignoreBounds: h3 = false, bounce: d3 = this.option("bounce") }) {
    const u3 = this.state;
    if (u3 === m.Destroy)
      return;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r3 || 0, this.ignoreBounds = h3;
    const { current: p3 } = this, f3 = p3.e, g3 = p3.f, b3 = this.getMatrix(this.target);
    let y2 = new DOMMatrix().translate(f3, g3).translate(o3, a3).translate(e3, i3);
    if (this.option("zoom")) {
      if (!h3) {
        const t3 = this.targetScale, e4 = this.minScale, i4 = this.maxScale;
        t3 * n3 < e4 && (n3 = e4 / t3), t3 * n3 > i4 && (n3 = i4 / t3);
      }
      y2 = y2.scale(n3);
    }
    y2 = y2.translate(-o3, -a3).translate(-f3, -g3).multiply(b3), s3 && (y2 = y2.rotate(s3)), l3 && (y2 = y2.scale(-1, 1)), c3 && (y2 = y2.scale(1, -1));
    for (const e4 of v)
      "e" !== e4 && "f" !== e4 && (y2[e4] > this.minScale + 1e-5 || y2[e4] < this.minScale - 1e-5) ? this.target[e4] = y2[e4] : this.target[e4] = t(y2[e4], M);
    (this.targetScale < this.scale || Math.abs(n3 - 1) > 0.1 || this.panMode === O || false === d3) && !h3 && this.clampTargetBounds(), u3 === m.Init ? this.animate() : this.isResting || (this.state = m.Panning, this.requestTick());
  }
  stop(t3 = false) {
    if (this.state === m.Init || this.state === m.Destroy)
      return;
    const e3 = this.isTicking;
    this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = false, this.isBouncingY = false;
    for (const e4 of v)
      this.velocity[e4] = 0, "current" === t3 ? this.current[e4] = this.target[e4] : "target" === t3 && (this.target[e4] = this.current[e4]);
    this.setTransform(), S(this.container, "is-scaling"), S(this.container, "is-animating"), this.isTicking = false, this.state = m.Ready, e3 && (this.emit("endAnimation"), this.updateControls());
  }
  requestTick() {
    this.isTicking || (this.emit("startAnimation"), this.updateControls(), P(this.container, "is-animating"), this.isScaling && P(this.container, "is-scaling")), this.isTicking = true, this.rAF || (this.rAF = requestAnimationFrame(() => this.animate()));
  }
  panWithMouse(e3, i3 = this.option("mouseMoveFriction")) {
    if (this.pmme = e3, this.panMode !== O || !e3)
      return;
    if (t(this.targetScale) <= t(this.minScale))
      return;
    this.emit("mouseMove", e3);
    const { container: n3, containerRect: s3, contentRect: o3 } = this, a3 = s3.width, r3 = s3.height, l3 = n3.getBoundingClientRect(), c3 = (e3.clientX || 0) - l3.left, h3 = (e3.clientY || 0) - l3.top;
    let { contentWidth: d3, contentHeight: u3 } = this.calculateContentDim(this.target);
    const p3 = this.option("mouseMoveFactor");
    p3 > 1 && (d3 !== a3 && (d3 *= p3), u3 !== r3 && (u3 *= p3));
    let f3 = 0.5 * (d3 - a3) - c3 / a3 * 100 / 100 * (d3 - a3);
    f3 += 0.5 * (o3.right - o3.left);
    let g3 = 0.5 * (u3 - r3) - h3 / r3 * 100 / 100 * (u3 - r3);
    g3 += 0.5 * (o3.bottom - o3.top), this.applyChange({ panX: f3 - this.target.e, panY: g3 - this.target.f, friction: i3 });
  }
  zoomWithWheel(e3) {
    if (this.state === m.Destroy || this.state === m.Init)
      return;
    const i3 = Date.now();
    if (i3 - this.pwt < 45)
      return void e3.preventDefault();
    this.pwt = i3;
    var n3 = [-e3.deltaX || 0, -e3.deltaY || 0, -e3.detail || 0].reduce(function(t3, e4) {
      return Math.abs(e4) > Math.abs(t3) ? e4 : t3;
    });
    const s3 = Math.max(-1, Math.min(1, n3)), { targetScale: o3, maxScale: a3, minScale: r3 } = this;
    let l3 = o3 * (100 + 45 * s3) / 100;
    t(l3) < t(r3) && t(o3) <= t(r3) ? (this.cwd += Math.abs(s3), l3 = r3) : t(l3) > t(a3) && t(o3) >= t(a3) ? (this.cwd += Math.abs(s3), l3 = a3) : (this.cwd = 0, l3 = Math.max(Math.min(l3, a3), r3)), this.cwd > this.option("wheelLimit") || (e3.preventDefault(), t(l3) !== t(o3) && this.zoomTo(l3, { event: e3 }));
  }
  canZoomIn() {
    return this.option("zoom") && (t(this.contentRect.width, 1) < t(this.contentRect.fitWidth, 1) || t(this.targetScale) < t(this.maxScale));
  }
  canZoomOut() {
    return this.option("zoom") && t(this.targetScale) > t(this.minScale);
  }
  zoomIn(t3 = 1.25, e3) {
    this.zoomTo(this.targetScale * t3, e3);
  }
  zoomOut(t3 = 0.8, e3) {
    this.zoomTo(this.targetScale * t3, e3);
  }
  zoomToFit(t3) {
    this.zoomTo("fit", t3);
  }
  zoomToCover(t3) {
    this.zoomTo("cover", t3);
  }
  zoomToFull(t3) {
    this.zoomTo("full", t3);
  }
  zoomToMax(t3) {
    this.zoomTo("max", t3);
  }
  toggleZoom(t3) {
    this.zoomTo(this.getNextScale("toggleZoom"), t3);
  }
  toggleMax(t3) {
    this.zoomTo(this.getNextScale("toggleMax"), t3);
  }
  toggleCover(t3) {
    this.zoomTo(this.getNextScale("toggleCover"), t3);
  }
  iterateZoom(t3) {
    this.zoomTo("next", t3);
  }
  zoomTo(t3 = 1, { friction: e3 = z, originX: i3 = z, originY: n3 = z, event: s3 } = {}) {
    if (this.isContentLoading || this.state === m.Destroy)
      return;
    const { targetScale: o3, fullScale: a3, maxScale: r3, coverScale: l3 } = this;
    if (this.stop(), this.panMode === O && (s3 = this.pmme || s3), s3 || i3 === z || n3 === z) {
      const t4 = this.content.getBoundingClientRect(), e4 = this.container.getBoundingClientRect(), o4 = s3 ? s3.clientX : e4.left + 0.5 * e4.width, a4 = s3 ? s3.clientY : e4.top + 0.5 * e4.height;
      i3 = o4 - t4.left - 0.5 * t4.width, n3 = a4 - t4.top - 0.5 * t4.height;
    }
    let c3 = 1;
    "number" == typeof t3 ? c3 = t3 : "full" === t3 ? c3 = a3 : "cover" === t3 ? c3 = l3 : "max" === t3 ? c3 = r3 : "fit" === t3 ? c3 = 1 : "next" === t3 && (c3 = this.getNextScale("iterateZoom")), c3 = c3 / o3 || 1, e3 = e3 === z ? c3 > 1 ? 0.15 : 0.25 : e3, this.applyChange({ scale: c3, originX: i3, originY: n3, friction: e3 }), s3 && this.panMode === O && this.panWithMouse(s3, e3);
  }
  rotateCCW() {
    this.applyChange({ angle: -90 });
  }
  rotateCW() {
    this.applyChange({ angle: 90 });
  }
  flipX() {
    this.applyChange({ flipX: true });
  }
  flipY() {
    this.applyChange({ flipY: true });
  }
  fitX() {
    this.stop("target");
    const { containerRect: t3, contentRect: e3, target: i3 } = this;
    this.applyChange({ panX: 0.5 * t3.width - (e3.left + 0.5 * e3.fitWidth) - i3.e, panY: 0.5 * t3.height - (e3.top + 0.5 * e3.fitHeight) - i3.f, scale: t3.width / e3.fitWidth / this.targetScale, originX: 0, originY: 0, ignoreBounds: true });
  }
  fitY() {
    this.stop("target");
    const { containerRect: t3, contentRect: e3, target: i3 } = this;
    this.applyChange({ panX: 0.5 * t3.width - (e3.left + 0.5 * e3.fitWidth) - i3.e, panY: 0.5 * t3.innerHeight - (e3.top + 0.5 * e3.fitHeight) - i3.f, scale: t3.height / e3.fitHeight / this.targetScale, originX: 0, originY: 0, ignoreBounds: true });
  }
  toggleFS() {
    const { container: t3 } = this, e3 = this.cn("inFullscreen"), i3 = this.cn("htmlHasFullscreen");
    t3.classList.toggle(e3);
    const n3 = t3.classList.contains(e3);
    n3 ? (document.documentElement.classList.add(i3), document.addEventListener("keydown", this.onKeydown, true)) : (document.documentElement.classList.remove(i3), document.removeEventListener("keydown", this.onKeydown, true)), this.updateMetrics(), this.emit(n3 ? "enterFS" : "exitFS");
  }
  getMatrix(t3 = this.current) {
    const { a: e3, b: i3, c: n3, d: s3, e: o3, f: a3 } = t3;
    return new DOMMatrix([e3, i3, n3, s3, o3, a3]);
  }
  reset(t3) {
    if (this.state !== m.Init && this.state !== m.Destroy) {
      this.stop("current");
      for (const t4 of v)
        this.target[t4] = C[t4];
      this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = void 0 === t3 ? this.option("friction") : t3, this.state = m.Panning, this.requestTick());
    }
  }
  destroy() {
    this.stop(), this.state = m.Destroy, this.detachEvents(), this.detachObserver();
    const { container: t3, content: e3 } = this, i3 = this.option("classes") || {};
    for (const e4 of Object.values(i3))
      t3.classList.remove(e4 + "");
    e3 && (e3.removeEventListener("load", this.onLoad), e3.removeEventListener("error", this.onError)), this.detachPlugins();
  }
};
Object.defineProperty(I, "defaults", { enumerable: true, configurable: true, writable: true, value: y }), Object.defineProperty(I, "Plugins", { enumerable: true, configurable: true, writable: true, value: {} });
var D = function(t3, e3) {
  let i3 = true;
  return (...n3) => {
    i3 && (i3 = false, t3(...n3), setTimeout(() => {
      i3 = true;
    }, e3));
  };
};
var F = (t3, e3) => {
  let i3 = [];
  return t3.childNodes.forEach((t4) => {
    t4.nodeType !== Node.ELEMENT_NODE || e3 && !t4.matches(e3) || i3.push(t4);
  }), i3;
};
var j = { viewport: null, track: null, enabled: true, slides: [], axis: "x", transition: "fade", preload: 1, slidesPerPage: "auto", initialPage: 0, friction: 0.12, Panzoom: { decelFriction: 0.12 }, center: true, infinite: true, fill: true, dragFree: false, adaptiveHeight: false, direction: "ltr", classes: { container: "f-carousel", viewport: "f-carousel__viewport", track: "f-carousel__track", slide: "f-carousel__slide", isLTR: "is-ltr", isRTL: "is-rtl", isHorizontal: "is-horizontal", isVertical: "is-vertical", inTransition: "in-transition", isSelected: "is-selected" }, l10n: { NEXT: "Next slide", PREV: "Previous slide", GOTO: "Go to slide #%d" } };
var B;
!function(t3) {
  t3[t3.Init = 0] = "Init", t3[t3.Ready = 1] = "Ready", t3[t3.Destroy = 2] = "Destroy";
}(B || (B = {}));
var H = (t3) => {
  if ("string" == typeof t3 || t3 instanceof HTMLElement)
    t3 = { html: t3 };
  else {
    const e3 = t3.thumb;
    void 0 !== e3 && ("string" == typeof e3 && (t3.thumbSrc = e3), e3 instanceof HTMLImageElement && (t3.thumbEl = e3, t3.thumbElSrc = e3.src, t3.thumbSrc = e3.src), delete t3.thumb);
  }
  return Object.assign({ html: "", el: null, isDom: false, class: "", customClass: "", index: -1, dim: 0, gap: 0, pos: 0, transition: false }, t3);
};
var N = (t3 = {}) => Object.assign({ index: -1, slides: [], dim: 0, pos: -1 }, t3);
var _ = class extends f {
  constructor(t3, e3) {
    super(e3), Object.defineProperty(this, "instance", { enumerable: true, configurable: true, writable: true, value: t3 });
  }
  attach() {
  }
  detach() {
  }
};
var $ = { classes: { list: "f-carousel__dots", isDynamic: "is-dynamic", hasDots: "has-dots", dot: "f-carousel__dot", isBeforePrev: "is-before-prev", isPrev: "is-prev", isCurrent: "is-current", isNext: "is-next", isAfterNext: "is-after-next" }, dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>', dynamicFrom: 11, maxCount: 1 / 0, minCount: 2 };
var W = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "isDynamic", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "list", { enumerable: true, configurable: true, writable: true, value: null });
  }
  onRefresh() {
    this.refresh();
  }
  build() {
    let t3 = this.list;
    if (!t3) {
      t3 = document.createElement("ul"), P(t3, this.cn("list")), t3.setAttribute("role", "tablist");
      const e3 = this.instance.container;
      e3.appendChild(t3), P(e3, this.cn("hasDots")), this.list = t3;
    }
    return t3;
  }
  refresh() {
    var t3;
    const e3 = this.instance.pages.length, i3 = Math.min(2, this.option("minCount")), n3 = Math.max(2e3, this.option("maxCount")), s3 = this.option("dynamicFrom");
    if (e3 < i3 || e3 > n3)
      return void this.cleanup();
    const a3 = "number" == typeof s3 && e3 > 5 && e3 >= s3, r3 = !this.list || this.isDynamic !== a3 || this.list.children.length !== e3;
    r3 && this.cleanup();
    const l3 = this.build();
    if (o(l3, this.cn("isDynamic"), !!a3), r3)
      for (let t4 = 0; t4 < e3; t4++)
        l3.append(this.createItem(t4));
    let c3, h3 = 0;
    for (const e4 of [...l3.children]) {
      const i4 = h3 === this.instance.page;
      i4 && (c3 = e4), o(e4, this.cn("isCurrent"), i4), null === (t3 = e4.children[0]) || void 0 === t3 || t3.setAttribute("aria-selected", i4 ? "true" : "false");
      for (const t4 of ["isBeforePrev", "isPrev", "isNext", "isAfterNext"])
        S(e4, this.cn(t4));
      h3++;
    }
    if (c3 = c3 || l3.firstChild, a3 && c3) {
      const t4 = c3.previousElementSibling, e4 = t4 && t4.previousElementSibling;
      P(t4, this.cn("isPrev")), P(e4, this.cn("isBeforePrev"));
      const i4 = c3.nextElementSibling, n4 = i4 && i4.nextElementSibling;
      P(i4, this.cn("isNext")), P(n4, this.cn("isAfterNext"));
    }
    this.isDynamic = a3;
  }
  createItem(t3 = 0) {
    var e3;
    const i3 = document.createElement("li");
    i3.setAttribute("role", "presentation");
    const s3 = n(this.instance.localize(this.option("dotTpl"), [["%d", t3 + 1]]).replace(/\%i/g, t3 + ""));
    return i3.appendChild(s3), null === (e3 = i3.children[0]) || void 0 === e3 || e3.setAttribute("role", "tab"), i3;
  }
  cleanup() {
    this.list && (this.list.remove(), this.list = null), this.isDynamic = false, S(this.instance.container, this.cn("hasDots"));
  }
  attach() {
    this.instance.on(["refresh", "change"], this.onRefresh);
  }
  detach() {
    this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
  }
};
Object.defineProperty(W, "defaults", { enumerable: true, configurable: true, writable: true, value: $ });
var X = "disabled";
var q = "next";
var Y = "prev";
var V = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "prev", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "next", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "isDom", { enumerable: true, configurable: true, writable: true, value: false });
  }
  onRefresh() {
    const t3 = this.instance, e3 = t3.pages.length, i3 = t3.page;
    if (e3 < 2)
      return void this.cleanup();
    this.build();
    let n3 = this.prev, s3 = this.next;
    n3 && s3 && (n3.removeAttribute(X), s3.removeAttribute(X), t3.isInfinite || (i3 <= 0 && n3.setAttribute(X, ""), i3 >= e3 - 1 && s3.setAttribute(X, "")));
  }
  addBtn(t3) {
    var e3;
    const i3 = this.instance, n3 = document.createElement("button");
    n3.setAttribute("tabindex", "0"), n3.setAttribute("title", i3.localize(`{{${t3.toUpperCase()}}}`)), P(n3, this.cn("button") + " " + this.cn(t3 === q ? "isNext" : "isPrev"));
    const s3 = i3.isRTL ? t3 === q ? Y : q : t3;
    var o3;
    return n3.innerHTML = i3.localize(this.option(`${s3}Tpl`)), n3.dataset[`carousel${o3 = t3, o3 ? o3.match("^[a-z]") ? o3.charAt(0).toUpperCase() + o3.substring(1) : o3 : ""}`] = "true", null === (e3 = this.container) || void 0 === e3 || e3.appendChild(n3), n3;
  }
  build() {
    const t3 = this.instance.container, e3 = this.cn("container");
    let { container: i3, prev: n3, next: s3 } = this;
    i3 || (i3 = t3.querySelector("." + e3), this.isDom = !!i3), i3 || (i3 = document.createElement("div"), P(i3, e3), t3.appendChild(i3)), this.container = i3, s3 || (s3 = i3.querySelector("[data-carousel-next]")), s3 || (s3 = this.addBtn(q)), this.next = s3, n3 || (n3 = i3.querySelector("[data-carousel-prev]")), n3 || (n3 = this.addBtn(Y)), this.prev = n3;
  }
  cleanup() {
    this.isDom || (this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove()), this.prev = null, this.next = null, this.container = null, this.isDom = false;
  }
  attach() {
    this.instance.on(["refresh", "change"], this.onRefresh);
  }
  detach() {
    this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
  }
};
Object.defineProperty(V, "defaults", { enumerable: true, configurable: true, writable: true, value: { classes: { container: "f-carousel__nav", button: "f-button", isNext: "is-next", isPrev: "is-prev" }, nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>', prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>' } });
var Z = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "selectedIndex", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "target", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "nav", { enumerable: true, configurable: true, writable: true, value: null });
  }
  addAsTargetFor(t3) {
    this.target = this.instance, this.nav = t3, this.attachEvents();
  }
  addAsNavFor(t3) {
    this.nav = this.instance, this.target = t3, this.attachEvents();
  }
  attachEvents() {
    const { nav: t3, target: e3 } = this;
    t3 && e3 && (t3.options.initialSlide = e3.options.initialPage, t3.state === B.Ready ? this.onNavReady(t3) : t3.on("ready", this.onNavReady), e3.state === B.Ready ? this.onTargetReady(e3) : e3.on("ready", this.onTargetReady));
  }
  onNavReady(t3) {
    t3.on("createSlide", this.onNavCreateSlide), t3.on("Panzoom.click", this.onNavClick), t3.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
  }
  onTargetReady(t3) {
    t3.on("change", this.onTargetChange), t3.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange();
  }
  onNavClick(t3, e3, i3) {
    this.onNavTouch(t3, t3.panzoom, i3);
  }
  onNavTouch(t3, e3, i3) {
    var n3, s3;
    if (Math.abs(e3.dragOffset.x) > 3 || Math.abs(e3.dragOffset.y) > 3)
      return;
    const o3 = i3.target, { nav: a3, target: r3 } = this;
    if (!a3 || !r3 || !o3)
      return;
    const l3 = o3.closest("[data-index]");
    if (i3.stopPropagation(), i3.preventDefault(), !l3)
      return;
    const c3 = parseInt(l3.dataset.index || "", 10) || 0, h3 = r3.getPageForSlide(c3), d3 = a3.getPageForSlide(c3);
    a3.slideTo(d3), r3.slideTo(h3, { friction: (null === (s3 = null === (n3 = this.nav) || void 0 === n3 ? void 0 : n3.plugins) || void 0 === s3 ? void 0 : s3.Sync.option("friction")) || 0 }), this.markSelectedSlide(c3);
  }
  onNavCreateSlide(t3, e3) {
    e3.index === this.selectedIndex && this.markSelectedSlide(e3.index);
  }
  onTargetChange() {
    var t3, e3;
    const { target: i3, nav: n3 } = this;
    if (!i3 || !n3)
      return;
    if (n3.state !== B.Ready || i3.state !== B.Ready)
      return;
    const s3 = null === (e3 = null === (t3 = i3.pages[i3.page]) || void 0 === t3 ? void 0 : t3.slides[0]) || void 0 === e3 ? void 0 : e3.index, o3 = n3.getPageForSlide(s3);
    this.markSelectedSlide(s3), n3.slideTo(o3, null === n3.prevPage && null === i3.prevPage ? { friction: 0 } : void 0);
  }
  markSelectedSlide(t3) {
    const e3 = this.nav;
    e3 && e3.state === B.Ready && (this.selectedIndex = t3, [...e3.slides].map((e4) => {
      e4.el && e4.el.classList[e4.index === t3 ? "add" : "remove"]("is-nav-selected");
    }));
  }
  attach() {
    const t3 = this;
    let e3 = t3.options.target, i3 = t3.options.nav;
    e3 ? t3.addAsNavFor(e3) : i3 && t3.addAsTargetFor(i3);
  }
  detach() {
    const t3 = this, e3 = t3.nav, i3 = t3.target;
    e3 && (e3.off("ready", t3.onNavReady), e3.off("createSlide", t3.onNavCreateSlide), e3.off("Panzoom.click", t3.onNavClick), e3.off("Panzoom.touchEnd", t3.onNavTouch)), t3.nav = null, i3 && (i3.off("ready", t3.onTargetReady), i3.off("refresh", t3.onTargetChange), i3.off("change", t3.onTargetChange)), t3.target = null;
  }
};
Object.defineProperty(Z, "defaults", { enumerable: true, configurable: true, writable: true, value: { friction: 0.35 } });
var U = { Navigation: V, Dots: W, Sync: Z };
var G = "animationend";
var K = "isSelected";
var J = "slide";
var Q = class extends g {
  get axis() {
    return this.isHorizontal ? "e" : "f";
  }
  get isEnabled() {
    return this.state === B.Ready;
  }
  get isInfinite() {
    let t3 = false;
    const { contentDim: e3, viewportDim: i3, pages: n3, slides: s3 } = this, o3 = s3[0];
    return n3.length >= 2 && o3 && e3 + o3.dim >= i3 && (t3 = this.option("infinite")), t3;
  }
  get isRTL() {
    return "rtl" === this.option("direction");
  }
  get isHorizontal() {
    return "x" === this.option("axis");
  }
  constructor(t3, e3 = {}, i3 = {}) {
    if (super(), Object.defineProperty(this, "bp", { enumerable: true, configurable: true, writable: true, value: "" }), Object.defineProperty(this, "lp", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "userOptions", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "userPlugins", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: B.Init }), Object.defineProperty(this, "page", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "prevPage", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: void 0 }), Object.defineProperty(this, "viewport", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "track", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "slides", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "pages", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "panzoom", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "inTransition", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Set() }), Object.defineProperty(this, "contentDim", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "viewportDim", { enumerable: true, configurable: true, writable: true, value: 0 }), "string" == typeof t3 && (t3 = document.querySelector(t3)), !t3 || !E(t3))
      throw new Error("No Element found");
    this.container = t3, this.slideNext = D(this.slideNext.bind(this), 150), this.slidePrev = D(this.slidePrev.bind(this), 150), this.userOptions = e3, this.userPlugins = i3, queueMicrotask(() => {
      this.processOptions();
    });
  }
  processOptions() {
    var t3, e3;
    const i3 = u({}, Q.defaults, this.userOptions);
    let n3 = "";
    const s3 = i3.breakpoints;
    if (s3 && d(s3))
      for (const [t4, e4] of Object.entries(s3))
        window.matchMedia(t4).matches && d(e4) && (n3 += t4, u(i3, e4));
    n3 === this.bp && this.state !== B.Init || (this.bp = n3, this.state === B.Ready && (i3.initialSlide = (null === (e3 = null === (t3 = this.pages[this.page]) || void 0 === t3 ? void 0 : t3.slides[0]) || void 0 === e3 ? void 0 : e3.index) || 0), this.state !== B.Init && this.destroy(), super.setOptions(i3), false === this.option("enabled") ? this.attachEvents() : setTimeout(() => {
      this.init();
    }, 0));
  }
  init() {
    this.state = B.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, Q.Plugins), this.userPlugins)), this.emit("attachPlugins"), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = B.Ready, this.emit("ready");
  }
  initLayout() {
    const { container: t3 } = this, e3 = this.option("classes");
    P(t3, this.cn("container")), o(t3, e3.isLTR, !this.isRTL), o(t3, e3.isRTL, this.isRTL), o(t3, e3.isVertical, !this.isHorizontal), o(t3, e3.isHorizontal, this.isHorizontal);
    let i3 = this.option("viewport") || t3.querySelector(`.${e3.viewport}`);
    i3 || (i3 = document.createElement("div"), P(i3, e3.viewport), i3.append(...F(t3, `.${e3.slide}`)), t3.prepend(i3)), i3.addEventListener("scroll", this.onScroll);
    let n3 = this.option("track") || t3.querySelector(`.${e3.track}`);
    n3 || (n3 = document.createElement("div"), P(n3, e3.track), n3.append(...Array.from(i3.childNodes))), n3.setAttribute("aria-live", "polite"), i3.contains(n3) || i3.prepend(n3), this.viewport = i3, this.track = n3, this.emit("initLayout");
  }
  initSlides() {
    const { track: t3 } = this;
    if (!t3)
      return;
    const e3 = [...this.slides], i3 = [];
    [...F(t3, `.${this.cn(J)}`)].forEach((t4) => {
      if (E(t4)) {
        const e4 = H({ el: t4, isDom: true, index: this.slides.length });
        i3.push(e4);
      }
    });
    for (let t4 of [...this.option("slides", []) || [], ...e3])
      i3.push(H(t4));
    this.slides = i3;
    for (let t4 = 0; t4 < this.slides.length; t4++)
      this.slides[t4].index = t4;
    for (const t4 of i3)
      this.emit("beforeInitSlide", t4, t4.index), this.emit("initSlide", t4, t4.index);
    this.emit("initSlides");
  }
  setInitialPage() {
    const t3 = this.option("initialSlide");
    this.page = "number" == typeof t3 ? this.getPageForSlide(t3) : parseInt(this.option("initialPage", 0) + "", 10) || 0;
  }
  setInitialPosition() {
    const { track: t3, pages: e3, isHorizontal: i3 } = this;
    if (!t3 || !e3.length)
      return;
    let n3 = this.page;
    e3[n3] || (this.page = n3 = 0);
    const s3 = (e3[n3].pos || 0) * (this.isRTL && i3 ? 1 : -1), o3 = i3 ? `${s3}px` : "0", a3 = i3 ? "0" : `${s3}px`;
    t3.style.transform = `translate3d(${o3}, ${a3}, 0) scale(1)`, this.option("adaptiveHeight") && this.setViewportHeight();
  }
  initPanzoom() {
    this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
    const t3 = this.option("Panzoom") || {};
    this.panzoom = new I(this.viewport, u({}, { content: this.track, zoom: false, panOnlyZoomed: false, lockAxis: this.isHorizontal ? "x" : "y", infinite: this.isInfinite, click: false, dblClick: false, touch: (t4) => !(this.pages.length < 2 && !t4.options.infinite), bounds: () => this.getBounds(), maxVelocity: (t4) => Math.abs(t4.target[this.axis] - t4.current[this.axis]) < 2 * this.viewportDim ? 100 : 0 }, t3)), this.panzoom.on("*", (t4, e3, ...i3) => {
      this.emit(`Panzoom.${e3}`, t4, ...i3);
    }), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
  }
  attachEvents() {
    const t3 = this.container;
    t3 && (t3.addEventListener("click", this.onClick, { passive: false, capture: false }), t3.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
  }
  createPages() {
    let t3 = [];
    const { contentDim: e3, viewportDim: i3 } = this;
    let n3 = this.option("slidesPerPage");
    n3 = ("auto" === n3 || e3 <= i3) && false !== this.option("fill") ? 1 / 0 : parseFloat(n3 + "");
    let s3 = 0, o3 = 0, a3 = 0;
    for (const e4 of this.slides)
      (!t3.length || o3 + e4.dim - i3 > 0.05 || a3 >= n3) && (t3.push(N()), s3 = t3.length - 1, o3 = 0, a3 = 0), t3[s3].slides.push(e4), o3 += e4.dim + e4.gap, a3++;
    return t3;
  }
  processPages() {
    const e3 = this.pages, { contentDim: i3, viewportDim: n3, isInfinite: s3 } = this, o3 = this.option("center"), a3 = this.option("fill"), r3 = a3 && o3 && i3 > n3 && !s3;
    if (e3.forEach((t3, e4) => {
      var s4;
      t3.index = e4, t3.pos = (null === (s4 = t3.slides[0]) || void 0 === s4 ? void 0 : s4.pos) || 0, t3.dim = 0;
      for (const [e5, i4] of t3.slides.entries())
        t3.dim += i4.dim, e5 < t3.slides.length - 1 && (t3.dim += i4.gap);
      r3 && t3.pos + 0.5 * t3.dim < 0.5 * n3 ? t3.pos = 0 : r3 && t3.pos + 0.5 * t3.dim >= i3 - 0.5 * n3 ? t3.pos = i3 - n3 : o3 && (t3.pos += -0.5 * (n3 - t3.dim));
    }), e3.forEach((e4) => {
      a3 && !s3 && i3 > n3 && (e4.pos = Math.max(e4.pos, 0), e4.pos = Math.min(e4.pos, i3 - n3)), e4.pos = t(e4.pos, 1e3), e4.dim = t(e4.dim, 1e3), Math.abs(e4.pos) <= 0.1 && (e4.pos = 0);
    }), s3)
      return e3;
    const l3 = [];
    let c3;
    return e3.forEach((t3) => {
      const e4 = Object.assign({}, t3);
      c3 && e4.pos === c3.pos ? (c3.dim += e4.dim, c3.slides = [...c3.slides, ...e4.slides]) : (e4.index = l3.length, c3 = e4, l3.push(e4));
    }), l3;
  }
  getPageFromIndex(t3 = 0) {
    const e3 = this.pages.length;
    let i3;
    return t3 = parseInt((t3 || 0).toString()) || 0, i3 = this.isInfinite ? (t3 % e3 + e3) % e3 : Math.max(Math.min(t3, e3 - 1), 0), i3;
  }
  getSlideMetrics(e3) {
    var i3, n3;
    const s3 = this.isHorizontal ? "width" : "height";
    let o3 = 0, a3 = 0, r3 = e3.el;
    const l3 = !(!r3 || r3.parentNode);
    if (r3 ? o3 = parseFloat(r3.dataset[s3] || "") || 0 : (r3 = document.createElement("div"), r3.style.visibility = "hidden", (this.track || document.body).prepend(r3)), P(r3, this.cn(J) + " " + e3.class + " " + e3.customClass), o3)
      r3.style[s3] = `${o3}px`, r3.style["width" === s3 ? "height" : "width"] = "";
    else {
      l3 && (this.track || document.body).prepend(r3), o3 = r3.getBoundingClientRect()[s3] * Math.max(1, (null === (i3 = window.visualViewport) || void 0 === i3 ? void 0 : i3.scale) || 1);
      let t3 = r3[this.isHorizontal ? "offsetWidth" : "offsetHeight"];
      t3 - 1 > o3 && (o3 = t3);
    }
    const c3 = getComputedStyle(r3);
    return "content-box" === c3.boxSizing && (this.isHorizontal ? (o3 += parseFloat(c3.paddingLeft) || 0, o3 += parseFloat(c3.paddingRight) || 0) : (o3 += parseFloat(c3.paddingTop) || 0, o3 += parseFloat(c3.paddingBottom) || 0)), a3 = parseFloat(c3[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l3 ? null === (n3 = r3.parentElement) || void 0 === n3 || n3.removeChild(r3) : e3.el || r3.remove(), { dim: t(o3, 1e3), gap: t(a3, 1e3) };
  }
  getBounds() {
    const { isInfinite: t3, isRTL: e3, isHorizontal: i3, pages: n3 } = this;
    let s3 = { min: 0, max: 0 };
    if (t3)
      s3 = { min: -1 / 0, max: 1 / 0 };
    else if (n3.length) {
      const t4 = n3[0].pos, o3 = n3[n3.length - 1].pos;
      s3 = e3 && i3 ? { min: t4, max: o3 } : { min: -1 * o3, max: -1 * t4 };
    }
    return { x: i3 ? s3 : { min: 0, max: 0 }, y: i3 ? { min: 0, max: 0 } : s3 };
  }
  repositionSlides() {
    let e3, { isHorizontal: i3, isRTL: n3, isInfinite: s3, viewport: o3, viewportDim: a3, contentDim: r3, page: l3, pages: c3, slides: h3, panzoom: d3 } = this, u3 = 0, p3 = 0, f3 = 0, g3 = 0;
    d3 ? g3 = -1 * d3.current[this.axis] : c3[l3] && (g3 = c3[l3].pos || 0), e3 = i3 ? n3 ? "right" : "left" : "top", n3 && i3 && (g3 *= -1);
    for (const i4 of h3) {
      const n4 = i4.el;
      n4 ? ("top" === e3 ? (n4.style.right = "", n4.style.left = "") : n4.style.top = "", i4.index !== u3 ? n4.style[e3] = 0 === p3 ? "" : `${t(p3, 1e3)}px` : n4.style[e3] = "", f3 += i4.dim + i4.gap, u3++) : p3 += i4.dim + i4.gap;
    }
    if (s3 && f3 && o3) {
      let n4 = getComputedStyle(o3), s4 = "padding", l4 = i3 ? "Right" : "Bottom", c4 = parseFloat(n4[s4 + (i3 ? "Left" : "Top")]);
      g3 -= c4, a3 += c4, a3 += parseFloat(n4[s4 + l4]);
      for (const i4 of h3)
        i4.el && (t(i4.pos) < t(a3) && t(i4.pos + i4.dim + i4.gap) < t(g3) && t(g3) > t(r3 - a3) && (i4.el.style[e3] = `${t(p3 + f3, 1e3)}px`), t(i4.pos + i4.gap) >= t(r3 - a3) && t(i4.pos) > t(g3 + a3) && t(g3) < t(a3) && (i4.el.style[e3] = `-${t(f3, 1e3)}px`));
    }
    let m2, v2, b3 = [...this.inTransition];
    if (b3.length > 1 && (m2 = c3[b3[0]], v2 = c3[b3[1]]), m2 && v2) {
      let i4 = 0;
      for (const n4 of h3)
        n4.el ? this.inTransition.has(n4.index) && m2.slides.indexOf(n4) < 0 && (n4.el.style[e3] = `${t(i4 + (m2.pos - v2.pos), 1e3)}px`) : i4 += n4.dim + n4.gap;
    }
  }
  createSlideEl(t3) {
    const { track: e3, slides: i3 } = this;
    if (!e3 || !t3)
      return;
    if (t3.el && t3.el.parentNode)
      return;
    const n3 = t3.el || document.createElement("div");
    P(n3, this.cn(J)), P(n3, t3.class), P(n3, t3.customClass);
    const s3 = t3.html;
    s3 && (s3 instanceof HTMLElement ? n3.appendChild(s3) : n3.innerHTML = t3.html + "");
    const o3 = [];
    i3.forEach((t4, e4) => {
      t4.el && o3.push(e4);
    });
    const a3 = t3.index;
    let r3 = null;
    if (o3.length) {
      r3 = i3[o3.reduce((t4, e4) => Math.abs(e4 - a3) < Math.abs(t4 - a3) ? e4 : t4)];
    }
    const l3 = r3 && r3.el && r3.el.parentNode ? r3.index < t3.index ? r3.el.nextSibling : r3.el : null;
    e3.insertBefore(n3, e3.contains(l3) ? l3 : null), t3.el = n3, this.emit("createSlide", t3);
  }
  removeSlideEl(t3, e3 = false) {
    const i3 = null == t3 ? void 0 : t3.el;
    if (!i3 || !i3.parentNode)
      return;
    const n3 = this.cn(K);
    if (i3.classList.contains(n3) && (S(i3, n3), this.emit("unselectSlide", t3)), t3.isDom && !e3)
      return i3.removeAttribute("aria-hidden"), i3.removeAttribute("data-index"), void (i3.style.left = "");
    this.emit("removeSlide", t3);
    const s3 = new CustomEvent(G);
    i3.dispatchEvent(s3), t3.el && (t3.el.remove(), t3.el = null);
  }
  transitionTo(t3 = 0, e3 = this.option("transition")) {
    var i3, n3, s3, o3;
    if (!e3)
      return false;
    const a3 = this.page, { pages: r3, panzoom: l3 } = this;
    t3 = parseInt((t3 || 0).toString()) || 0;
    const c3 = this.getPageFromIndex(t3);
    if (!l3 || !r3[c3] || r3.length < 2 || Math.abs(((null === (n3 = null === (i3 = r3[a3]) || void 0 === i3 ? void 0 : i3.slides[0]) || void 0 === n3 ? void 0 : n3.dim) || 0) - this.viewportDim) > 1)
      return false;
    let h3 = t3 > a3 ? 1 : -1;
    this.isInfinite && (0 === a3 && t3 === r3.length - 1 && (h3 = -1), a3 === r3.length - 1 && 0 === t3 && (h3 = 1));
    const d3 = r3[c3].pos * (this.isRTL ? 1 : -1);
    if (a3 === c3 && Math.abs(d3 - l3.target[this.axis]) < 1)
      return false;
    this.clearTransitions();
    const u3 = l3.isResting;
    P(this.container, this.cn("inTransition"));
    const p3 = (null === (s3 = r3[a3]) || void 0 === s3 ? void 0 : s3.slides[0]) || null, f3 = (null === (o3 = r3[c3]) || void 0 === o3 ? void 0 : o3.slides[0]) || null;
    this.inTransition.add(f3.index), this.createSlideEl(f3);
    let g3 = p3.el, m2 = f3.el;
    u3 || e3 === J || (e3 = "fadeFast", g3 = null);
    const v2 = this.isRTL ? "next" : "prev", b3 = this.isRTL ? "prev" : "next";
    return g3 && (this.inTransition.add(p3.index), p3.transition = e3, g3.addEventListener(G, this.onAnimationEnd), g3.classList.add(`f-${e3}Out`, `to-${h3 > 0 ? b3 : v2}`)), m2 && (f3.transition = e3, m2.addEventListener(G, this.onAnimationEnd), m2.classList.add(`f-${e3}In`, `from-${h3 > 0 ? v2 : b3}`)), l3.current[this.axis] = d3, l3.target[this.axis] = d3, l3.requestTick(), this.onChange(c3), true;
  }
  manageSlideVisiblity() {
    const t3 = /* @__PURE__ */ new Set(), e3 = /* @__PURE__ */ new Set(), i3 = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
    for (const n3 of this.slides)
      i3.has(n3) ? t3.add(n3) : e3.add(n3);
    for (const e4 of this.inTransition)
      t3.add(this.slides[e4]);
    for (const e4 of t3)
      this.createSlideEl(e4), this.lazyLoadSlide(e4);
    for (const i4 of e3)
      t3.has(i4) || this.removeSlideEl(i4);
    this.markSelectedSlides(), this.repositionSlides();
  }
  markSelectedSlides() {
    if (!this.pages[this.page] || !this.pages[this.page].slides)
      return;
    const t3 = "aria-hidden";
    let e3 = this.cn(K);
    if (e3)
      for (const i3 of this.slides) {
        const n3 = i3.el;
        n3 && (n3.dataset.index = `${i3.index}`, n3.classList.contains("f-thumbs__slide") ? this.getVisibleSlides(0).has(i3) ? n3.removeAttribute(t3) : n3.setAttribute(t3, "true") : this.pages[this.page].slides.includes(i3) ? (n3.classList.contains(e3) || (P(n3, e3), this.emit("selectSlide", i3)), n3.removeAttribute(t3)) : (n3.classList.contains(e3) && (S(n3, e3), this.emit("unselectSlide", i3)), n3.setAttribute(t3, "true")));
      }
  }
  flipInfiniteTrack() {
    const { axis: t3, isHorizontal: e3, isInfinite: i3, isRTL: n3, viewportDim: s3, contentDim: o3 } = this, a3 = this.panzoom;
    if (!a3 || !i3)
      return;
    let r3 = a3.current[t3], l3 = a3.target[t3] - r3, c3 = 0, h3 = 0.5 * s3;
    n3 && e3 ? (r3 < -h3 && (c3 = -1, r3 += o3), r3 > o3 - h3 && (c3 = 1, r3 -= o3)) : (r3 > h3 && (c3 = 1, r3 -= o3), r3 < -o3 + h3 && (c3 = -1, r3 += o3)), c3 && (a3.current[t3] = r3, a3.target[t3] = r3 + l3);
  }
  lazyLoadImg(t3, e3) {
    const i3 = this, s3 = "f-fadeIn", o3 = "is-preloading";
    let a3 = false, r3 = null;
    const l3 = () => {
      a3 || (a3 = true, r3 && (r3.remove(), r3 = null), S(e3, o3), e3.complete && (P(e3, s3), setTimeout(() => {
        S(e3, s3);
      }, 350)), this.option("adaptiveHeight") && t3.el && this.pages[this.page].slides.indexOf(t3) > -1 && (i3.updateMetrics(), i3.setViewportHeight()), this.emit("load", t3));
    };
    P(e3, o3), e3.src = e3.dataset.lazySrcset || e3.dataset.lazySrc || "", delete e3.dataset.lazySrc, delete e3.dataset.lazySrcset, e3.addEventListener("error", () => {
      l3();
    }), e3.addEventListener("load", () => {
      l3();
    }), setTimeout(() => {
      const i4 = e3.parentNode;
      i4 && t3.el && (e3.complete ? l3() : a3 || (r3 = n(x), i4.insertBefore(r3, e3)));
    }, 300);
  }
  lazyLoadSlide(t3) {
    const e3 = t3 && t3.el;
    if (!e3)
      return;
    const i3 = /* @__PURE__ */ new Set();
    let n3 = Array.from(e3.querySelectorAll("[data-lazy-src],[data-lazy-srcset]"));
    e3.dataset.lazySrc && n3.push(e3), n3.map((t4) => {
      t4 instanceof HTMLImageElement ? i3.add(t4) : t4 instanceof HTMLElement && t4.dataset.lazySrc && (t4.style.backgroundImage = `url('${t4.dataset.lazySrc}')`, delete t4.dataset.lazySrc);
    });
    for (const e4 of i3)
      this.lazyLoadImg(t3, e4);
  }
  onAnimationEnd(t3) {
    var e3;
    const i3 = t3.target, n3 = i3 ? parseInt(i3.dataset.index || "", 10) || 0 : -1, s3 = this.slides[n3], o3 = t3.animationName;
    if (!i3 || !s3 || !o3)
      return;
    const a3 = !!this.inTransition.has(n3) && s3.transition;
    a3 && o3.substring(0, a3.length + 2) === `f-${a3}` && this.inTransition.delete(n3), this.inTransition.size || this.clearTransitions(), n3 === this.page && (null === (e3 = this.panzoom) || void 0 === e3 ? void 0 : e3.isResting) && this.emit("settle");
  }
  onDecel(t3, e3 = 0, i3 = 0, n3 = 0, s3 = 0) {
    if (this.option("dragFree"))
      return void this.setPageFromPosition();
    const { isRTL: o3, isHorizontal: a3, axis: r3, pages: l3 } = this, c3 = l3.length, h3 = Math.abs(Math.atan2(i3, e3) / (Math.PI / 180));
    let d3 = 0;
    if (d3 = h3 > 45 && h3 < 135 ? a3 ? 0 : i3 : a3 ? e3 : 0, !c3)
      return;
    let u3 = this.page, p3 = o3 && a3 ? 1 : -1;
    const f3 = t3.current[r3] * p3;
    let { pageIndex: g3 } = this.getPageFromPosition(f3);
    Math.abs(d3) > 5 ? (l3[u3].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (u3 = g3), u3 = o3 && a3 ? d3 < 0 ? u3 - 1 : u3 + 1 : d3 < 0 ? u3 + 1 : u3 - 1) : u3 = 0 === n3 && 0 === s3 ? u3 : g3, this.slideTo(u3, { transition: false, friction: t3.option("decelFriction") });
  }
  onClick(t3) {
    const e3 = t3.target, i3 = e3 && E(e3) ? e3.dataset : null;
    let n3, s3;
    i3 && (void 0 !== i3.carouselPage ? (s3 = "slideTo", n3 = i3.carouselPage) : void 0 !== i3.carouselNext ? s3 = "slideNext" : void 0 !== i3.carouselPrev && (s3 = "slidePrev")), s3 ? (t3.preventDefault(), t3.stopPropagation(), e3 && !e3.hasAttribute("disabled") && this[s3](n3)) : this.emit("click", t3);
  }
  onSlideTo(t3) {
    const e3 = t3.detail || 0;
    this.slideTo(this.getPageForSlide(e3), { friction: 0 });
  }
  onChange(t3, e3 = 0) {
    const i3 = this.page;
    this.prevPage = i3, this.page = t3, this.option("adaptiveHeight") && this.setViewportHeight(), t3 !== i3 && (this.markSelectedSlides(), this.emit("change", t3, i3, e3));
  }
  onRefresh() {
    let t3 = this.contentDim, e3 = this.viewportDim;
    this.updateMetrics(), this.contentDim === t3 && this.viewportDim === e3 || this.slideTo(this.page, { friction: 0, transition: false });
  }
  onScroll() {
    var t3;
    null === (t3 = this.viewport) || void 0 === t3 || t3.scroll(0, 0);
  }
  onResize() {
    this.option("breakpoints") && this.processOptions();
  }
  onBeforeTransform(t3) {
    this.lp !== t3.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), this.lp = t3.current.e;
  }
  onEndAnimation() {
    this.inTransition.size || this.emit("settle");
  }
  reInit(t3 = null, e3 = null) {
    this.destroy(), this.state = B.Init, this.prevPage = null, this.userOptions = t3 || this.userOptions, this.userPlugins = e3 || this.userPlugins, this.processOptions();
  }
  slideTo(t3 = 0, { friction: e3 = this.option("friction"), transition: i3 = this.option("transition") } = {}) {
    if (this.state === B.Destroy)
      return;
    t3 = parseInt((t3 || 0).toString()) || 0;
    const n3 = this.getPageFromIndex(t3), { axis: s3, isHorizontal: o3, isRTL: a3, pages: r3, panzoom: l3 } = this, c3 = r3.length, h3 = a3 && o3 ? 1 : -1;
    if (!l3 || !c3)
      return;
    if (this.page !== n3) {
      const e4 = new Event("beforeChange", { bubbles: true, cancelable: true });
      if (this.emit("beforeChange", e4, t3), e4.defaultPrevented)
        return;
    }
    if (this.transitionTo(t3, i3))
      return;
    let d3 = r3[n3].pos;
    if (this.isInfinite) {
      const e4 = this.contentDim, i4 = l3.target[s3] * h3;
      if (2 === c3)
        d3 += e4 * Math.floor(parseFloat(t3 + "") / 2);
      else {
        d3 = [d3, d3 - e4, d3 + e4].reduce(function(t4, e5) {
          return Math.abs(e5 - i4) < Math.abs(t4 - i4) ? e5 : t4;
        });
      }
    }
    d3 *= h3, Math.abs(l3.target[s3] - d3) < 1 || (l3.panTo({ x: o3 ? d3 : 0, y: o3 ? 0 : d3, friction: e3 }), this.onChange(n3));
  }
  slideToClosest(t3) {
    if (this.panzoom) {
      const { pageIndex: e3 } = this.getPageFromPosition();
      this.slideTo(e3, t3);
    }
  }
  slideNext() {
    this.slideTo(this.page + 1);
  }
  slidePrev() {
    this.slideTo(this.page - 1);
  }
  clearTransitions() {
    this.inTransition.clear(), S(this.container, this.cn("inTransition"));
    const t3 = ["to-prev", "to-next", "from-prev", "from-next"];
    for (const e3 of this.slides) {
      const i3 = e3.el;
      if (i3) {
        i3.removeEventListener(G, this.onAnimationEnd), i3.classList.remove(...t3);
        const n3 = e3.transition;
        n3 && i3.classList.remove(`f-${n3}Out`, `f-${n3}In`);
      }
    }
    this.manageSlideVisiblity();
  }
  addSlide(t3, e3) {
    var i3, n3, s3, o3;
    const a3 = this.panzoom, r3 = (null === (i3 = this.pages[this.page]) || void 0 === i3 ? void 0 : i3.pos) || 0, l3 = (null === (n3 = this.pages[this.page]) || void 0 === n3 ? void 0 : n3.dim) || 0, c3 = this.contentDim < this.viewportDim;
    let h3 = Array.isArray(e3) ? e3 : [e3];
    const d3 = [];
    for (const t4 of h3)
      d3.push(H(t4));
    this.slides.splice(t3, 0, ...d3);
    for (let t4 = 0; t4 < this.slides.length; t4++)
      this.slides[t4].index = t4;
    for (const t4 of d3)
      this.emit("beforeInitSlide", t4, t4.index);
    if (this.page >= t3 && (this.page += d3.length), this.updateMetrics(), a3) {
      const e4 = (null === (s3 = this.pages[this.page]) || void 0 === s3 ? void 0 : s3.pos) || 0, i4 = (null === (o3 = this.pages[this.page]) || void 0 === o3 ? void 0 : o3.dim) || 0, n4 = this.pages.length || 1, h4 = this.isRTL ? l3 - i4 : i4 - l3, d4 = this.isRTL ? r3 - e4 : e4 - r3;
      c3 && 1 === n4 ? (t3 <= this.page && (a3.current[this.axis] -= h4, a3.target[this.axis] -= h4), a3.panTo({ [this.isHorizontal ? "x" : "y"]: -1 * e4 })) : d4 && t3 <= this.page && (a3.target[this.axis] -= d4, a3.current[this.axis] -= d4, a3.requestTick());
    }
    for (const t4 of d3)
      this.emit("initSlide", t4, t4.index);
  }
  prependSlide(t3) {
    this.addSlide(0, t3);
  }
  appendSlide(t3) {
    this.addSlide(this.slides.length, t3);
  }
  removeSlide(t3) {
    const e3 = this.slides.length;
    t3 = (t3 % e3 + e3) % e3;
    const i3 = this.slides[t3];
    if (i3) {
      this.removeSlideEl(i3, true), this.slides.splice(t3, 1);
      for (let t4 = 0; t4 < this.slides.length; t4++)
        this.slides[t4].index = t4;
      this.updateMetrics(), this.slideTo(this.page, { friction: 0, transition: false }), this.emit("destroySlide", i3);
    }
  }
  updateMetrics() {
    const { panzoom: e3, viewport: i3, track: n3, slides: s3, isHorizontal: o3, isInfinite: a3 } = this;
    if (!n3)
      return;
    const r3 = o3 ? "width" : "height", l3 = o3 ? "offsetWidth" : "offsetHeight";
    if (i3) {
      let e4 = Math.max(i3[l3], t(i3.getBoundingClientRect()[r3], 1e3)), n4 = getComputedStyle(i3), s4 = "padding", a4 = o3 ? "Right" : "Bottom";
      e4 -= parseFloat(n4[s4 + (o3 ? "Left" : "Top")]) + parseFloat(n4[s4 + a4]), this.viewportDim = e4;
    }
    let c3, h3 = 0;
    for (const [e4, i4] of s3.entries()) {
      let n4 = 0, o4 = 0;
      !i4.el && c3 ? (n4 = c3.dim, o4 = c3.gap) : ({ dim: n4, gap: o4 } = this.getSlideMetrics(i4), c3 = i4), n4 = t(n4, 1e3), o4 = t(o4, 1e3), i4.dim = n4, i4.gap = o4, i4.pos = h3, h3 += n4, (a3 || e4 < s3.length - 1) && (h3 += o4);
    }
    h3 = t(h3, 1e3), this.contentDim = h3, e3 && (e3.contentRect[r3] = h3, e3.contentRect[o3 ? "fullWidth" : "fullHeight"] = h3), this.pages = this.createPages(), this.pages = this.processPages(), this.state === B.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), this.manageSlideVisiblity(), this.emit("refresh");
  }
  getProgress(e3, i3 = false, n3 = false) {
    void 0 === e3 && (e3 = this.page);
    const s3 = this, o3 = s3.panzoom, a3 = s3.contentDim, r3 = s3.pages[e3] || 0;
    if (!r3 || !o3)
      return e3 > this.page ? -1 : 1;
    let l3 = -1 * o3.current.e, c3 = t((l3 - r3.pos) / (1 * r3.dim), 1e3), h3 = c3, d3 = c3;
    this.isInfinite && true !== n3 && (h3 = t((l3 - r3.pos + a3) / (1 * r3.dim), 1e3), d3 = t((l3 - r3.pos - a3) / (1 * r3.dim), 1e3));
    let u3 = [c3, h3, d3].reduce(function(t3, e4) {
      return Math.abs(e4) < Math.abs(t3) ? e4 : t3;
    });
    return i3 ? u3 : u3 > 1 ? 1 : u3 < -1 ? -1 : u3;
  }
  setViewportHeight() {
    const { page: t3, pages: e3, viewport: i3, isHorizontal: n3 } = this;
    if (!i3 || !e3[t3])
      return;
    let s3 = 0;
    n3 && this.track && (this.track.style.height = "auto", e3[t3].slides.forEach((t4) => {
      t4.el && (s3 = Math.max(s3, t4.el.offsetHeight));
    })), i3.style.height = s3 ? `${s3}px` : "";
  }
  getPageForSlide(t3) {
    for (const e3 of this.pages)
      for (const i3 of e3.slides)
        if (i3.index === t3)
          return e3.index;
    return -1;
  }
  getVisibleSlides(t3 = 0) {
    var e3;
    const i3 = /* @__PURE__ */ new Set();
    let { panzoom: n3, contentDim: s3, viewportDim: o3, pages: a3, page: r3 } = this;
    if (o3) {
      s3 = s3 + (null === (e3 = this.slides[this.slides.length - 1]) || void 0 === e3 ? void 0 : e3.gap) || 0;
      let l3 = 0;
      l3 = n3 && n3.state !== m.Init && n3.state !== m.Destroy ? -1 * n3.current[this.axis] : a3[r3] && a3[r3].pos || 0, this.isInfinite && (l3 -= Math.floor(l3 / s3) * s3), this.isRTL && this.isHorizontal && (l3 *= -1);
      const c3 = l3 - o3 * t3, h3 = l3 + o3 * (t3 + 1), d3 = this.isInfinite ? [-1, 0, 1] : [0];
      for (const t4 of this.slides)
        for (const e4 of d3) {
          const n4 = t4.pos + e4 * s3, o4 = n4 + t4.dim + t4.gap;
          n4 < h3 && o4 > c3 && i3.add(t4);
        }
    }
    return i3;
  }
  getPageFromPosition(t3) {
    const { viewportDim: e3, contentDim: i3, slides: n3, pages: s3, panzoom: o3 } = this, a3 = s3.length, r3 = n3.length, l3 = n3[0], c3 = n3[r3 - 1], h3 = this.option("center");
    let d3 = 0, u3 = 0, p3 = 0, f3 = void 0 === t3 ? -1 * ((null == o3 ? void 0 : o3.target[this.axis]) || 0) : t3;
    h3 && (f3 += 0.5 * e3), this.isInfinite ? (f3 < l3.pos - 0.5 * c3.gap && (f3 -= i3, p3 = -1), f3 > c3.pos + c3.dim + 0.5 * c3.gap && (f3 -= i3, p3 = 1)) : f3 = Math.max(l3.pos || 0, Math.min(f3, c3.pos));
    let g3 = c3, m2 = n3.find((t4) => {
      const e4 = t4.pos - 0.5 * g3.gap, i4 = t4.pos + t4.dim + 0.5 * t4.gap;
      return g3 = t4, f3 >= e4 && f3 < i4;
    });
    return m2 || (m2 = c3), u3 = this.getPageForSlide(m2.index), d3 = u3 + p3 * a3, { page: d3, pageIndex: u3 };
  }
  setPageFromPosition() {
    const { pageIndex: t3 } = this.getPageFromPosition();
    this.onChange(t3);
  }
  destroy() {
    if ([B.Destroy].includes(this.state))
      return;
    this.state = B.Destroy;
    const { container: t3, viewport: e3, track: i3, slides: n3, panzoom: s3 } = this, o3 = this.option("classes");
    t3.removeEventListener("click", this.onClick, { passive: false, capture: false }), t3.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), s3 && (s3.destroy(), this.panzoom = null), n3 && n3.forEach((t4) => {
      this.removeSlideEl(t4);
    }), this.detachPlugins(), e3 && (e3.removeEventListener("scroll", this.onScroll), e3.offsetParent && i3 && i3.offsetParent && e3.replaceWith(...i3.childNodes));
    for (const [e4, i4] of Object.entries(o3))
      "container" !== e4 && i4 && t3.classList.remove(i4);
    this.track = null, this.viewport = null, this.page = 0, this.slides = [];
    const a3 = this.events.get("ready");
    this.events = /* @__PURE__ */ new Map(), a3 && this.events.set("ready", a3);
  }
};
Object.defineProperty(Q, "Panzoom", { enumerable: true, configurable: true, writable: true, value: I }), Object.defineProperty(Q, "defaults", { enumerable: true, configurable: true, writable: true, value: j }), Object.defineProperty(Q, "Plugins", { enumerable: true, configurable: true, writable: true, value: U });
var tt = function(t3) {
  if (!E(t3))
    return 0;
  const e3 = window.scrollY, i3 = window.innerHeight, n3 = e3 + i3, s3 = t3.getBoundingClientRect(), o3 = s3.y + e3, a3 = s3.height, r3 = o3 + a3;
  if (e3 > r3 || n3 < o3)
    return 0;
  if (e3 < o3 && n3 > r3)
    return 100;
  if (o3 < e3 && r3 > n3)
    return 100;
  let l3 = a3;
  o3 < e3 && (l3 -= e3 - o3), r3 > n3 && (l3 -= r3 - n3);
  const c3 = l3 / i3 * 100;
  return Math.round(c3);
};
var et = !("undefined" == typeof window || !window.document || !window.document.createElement);
var it;
var nt = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(",");
var st = (t3) => {
  if (t3 && et) {
    void 0 === it && document.createElement("div").focus({ get preventScroll() {
      return it = true, false;
    } });
    try {
      if (it)
        t3.focus({ preventScroll: true });
      else {
        const e3 = window.scrollY || document.body.scrollTop, i3 = window.scrollX || document.body.scrollLeft;
        t3.focus(), document.body.scrollTo({ top: e3, left: i3, behavior: "auto" });
      }
    } catch (t4) {
    }
  }
};
var ot = () => {
  const t3 = document;
  let e3, i3 = "", n3 = "", s3 = "";
  return t3.fullscreenEnabled ? (i3 = "requestFullscreen", n3 = "exitFullscreen", s3 = "fullscreenElement") : t3.webkitFullscreenEnabled && (i3 = "webkitRequestFullscreen", n3 = "webkitExitFullscreen", s3 = "webkitFullscreenElement"), i3 && (e3 = { request: function(e4 = t3.documentElement) {
    return "webkitRequestFullscreen" === i3 ? e4[i3](Element.ALLOW_KEYBOARD_INPUT) : e4[i3]();
  }, exit: function() {
    return t3[s3] && t3[n3]();
  }, isFullscreen: function() {
    return t3[s3];
  } }), e3;
};
var at = { animated: true, autoFocus: true, backdropClick: "close", Carousel: { classes: { container: "fancybox__carousel", viewport: "fancybox__viewport", track: "fancybox__track", slide: "fancybox__slide" } }, closeButton: "auto", closeExisting: false, commonCaption: false, compact: () => window.matchMedia("(max-width: 578px), (max-height: 578px)").matches, contentClick: "toggleZoom", contentDblClick: false, defaultType: "image", defaultDisplay: "flex", dragToClose: true, Fullscreen: { autoStart: false }, groupAll: false, groupAttr: "data-fancybox", hideClass: "f-fadeOut", hideScrollbar: true, idle: 3500, keyboard: { Escape: "close", Delete: "close", Backspace: "close", PageUp: "next", PageDown: "prev", ArrowUp: "prev", ArrowDown: "next", ArrowRight: "next", ArrowLeft: "prev" }, l10n: Object.assign(Object.assign({}, b), { CLOSE: "Close", NEXT: "Next", PREV: "Previous", MODAL: "You can close this modal content with the ESC key", ERROR: "Something Went Wrong, Please Try Again Later", IMAGE_ERROR: "Image Not Found", ELEMENT_NOT_FOUND: "HTML Element Not Found", AJAX_NOT_FOUND: "Error Loading AJAX : Not Found", AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden", IFRAME_ERROR: "Error Loading Page", TOGGLE_ZOOM: "Toggle zoom level", TOGGLE_THUMBS: "Toggle thumbnails", TOGGLE_SLIDESHOW: "Toggle slideshow", TOGGLE_FULLSCREEN: "Toggle full-screen mode", DOWNLOAD: "Download" }), parentEl: null, placeFocusBack: true, showClass: "f-zoomInUp", startIndex: 0, tpl: { closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>', main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>' }, trapFocus: true, wheel: "zoom" };
var rt;
var lt;
!function(t3) {
  t3[t3.Init = 0] = "Init", t3[t3.Ready = 1] = "Ready", t3[t3.Closing = 2] = "Closing", t3[t3.CustomClosing = 3] = "CustomClosing", t3[t3.Destroy = 4] = "Destroy";
}(rt || (rt = {})), function(t3) {
  t3[t3.Loading = 0] = "Loading", t3[t3.Opening = 1] = "Opening", t3[t3.Ready = 2] = "Ready", t3[t3.Closing = 3] = "Closing";
}(lt || (lt = {}));
var ct = "";
var ht = false;
var dt = false;
var ut = null;
var pt = () => {
  let t3 = "", e3 = "";
  const i3 = Oe.getInstance();
  if (i3) {
    const n3 = i3.carousel, s3 = i3.getSlide();
    if (n3 && s3) {
      let o3 = s3.slug || void 0, a3 = s3.triggerEl || void 0;
      e3 = o3 || (i3.option("slug") || ""), !e3 && a3 && a3.dataset && (e3 = a3.dataset.fancybox || ""), e3 && "true" !== e3 && (t3 = "#" + e3 + (!o3 && n3.slides.length > 1 ? "-" + (s3.index + 1) : ""));
    }
  }
  return { hash: t3, slug: e3, index: 1 };
};
var ft = () => {
  const t3 = new URL(document.URL).hash, e3 = t3.slice(1).split("-"), i3 = e3[e3.length - 1], n3 = i3 && /^\+?\d+$/.test(i3) && parseInt(e3.pop() || "1", 10) || 1;
  return { hash: t3, slug: e3.join("-"), index: n3 };
};
var gt = () => {
  const { slug: t3, index: e3 } = ft();
  if (!t3)
    return;
  let i3 = document.querySelector(`[data-slug="${t3}"]`);
  if (i3 && i3.dispatchEvent(new CustomEvent("click", { bubbles: true, cancelable: true })), Oe.getInstance())
    return;
  const n3 = document.querySelectorAll(`[data-fancybox="${t3}"]`);
  n3.length && (i3 = n3[e3 - 1], i3 && i3.dispatchEvent(new CustomEvent("click", { bubbles: true, cancelable: true })));
};
var mt = () => {
  if (false === Oe.defaults.Hash)
    return;
  const t3 = Oe.getInstance();
  if (false === (null == t3 ? void 0 : t3.options.Hash))
    return;
  const { slug: e3, index: i3 } = ft(), { slug: n3 } = pt();
  t3 && (e3 === n3 ? t3.jumpTo(i3 - 1) : (ht = true, t3.close())), gt();
};
var vt = () => {
  ut && clearTimeout(ut), queueMicrotask(() => {
    mt();
  });
};
var bt = () => {
  window.addEventListener("hashchange", vt, false), setTimeout(() => {
    mt();
  }, 500);
};
et && (/complete|interactive|loaded/.test(document.readyState) ? bt() : document.addEventListener("DOMContentLoaded", bt));
var yt = "is-zooming-in";
var wt = class extends _ {
  onCreateSlide(t3, e3, i3) {
    const n3 = this.instance.optionFor(i3, "src") || "";
    i3.el && "image" === i3.type && "string" == typeof n3 && this.setImage(i3, n3);
  }
  onRemoveSlide(t3, e3, i3) {
    i3.panzoom && i3.panzoom.destroy(), i3.panzoom = void 0, i3.imageEl = void 0;
  }
  onChange(t3, e3, i3, n3) {
    S(this.instance.container, yt);
    for (const t4 of e3.slides) {
      const e4 = t4.panzoom;
      e4 && t4.index !== i3 && e4.reset(0.35);
    }
  }
  onClose() {
    var t3;
    const e3 = this.instance, i3 = e3.container, n3 = e3.getSlide();
    if (!i3 || !i3.parentElement || !n3)
      return;
    const { el: s3, contentEl: o3, panzoom: a3, thumbElSrc: r3 } = n3;
    if (!s3 || !r3 || !o3 || !a3 || a3.isContentLoading || a3.state === m.Init || a3.state === m.Destroy)
      return;
    a3.updateMetrics();
    let l3 = this.getZoomInfo(n3);
    if (!l3)
      return;
    this.instance.state = rt.CustomClosing, i3.classList.remove(yt), i3.classList.add("is-zooming-out"), o3.style.backgroundImage = `url('${r3}')`;
    const c3 = i3.getBoundingClientRect();
    1 === ((null === (t3 = window.visualViewport) || void 0 === t3 ? void 0 : t3.scale) || 1) && Object.assign(i3.style, { position: "absolute", top: `${i3.offsetTop + window.scrollY}px`, left: `${i3.offsetLeft + window.scrollX}px`, bottom: "auto", right: "auto", width: `${c3.width}px`, height: `${c3.height}px`, overflow: "hidden" });
    const { x: h3, y: d3, scale: u3, opacity: p3 } = l3;
    if (p3) {
      const t4 = ((t5, e4, i4, n4) => {
        const s4 = e4 - t5, o4 = n4 - i4;
        return (e5) => i4 + ((e5 - t5) / s4 * o4 || 0);
      })(a3.scale, u3, 1, 0);
      a3.on("afterTransform", () => {
        o3.style.opacity = t4(a3.scale) + "";
      });
    }
    a3.on("endAnimation", () => {
      e3.destroy();
    }), a3.target.a = u3, a3.target.b = 0, a3.target.c = 0, a3.target.d = u3, a3.panTo({ x: h3, y: d3, scale: u3, friction: p3 ? 0.2 : 0.33, ignoreBounds: true }), a3.isResting && e3.destroy();
  }
  setImage(t3, e3) {
    const i3 = this.instance;
    t3.src = e3, this.process(t3, e3).then((e4) => {
      const { contentEl: n3, imageEl: s3, thumbElSrc: o3, el: a3 } = t3;
      if (i3.isClosing() || !n3 || !s3)
        return;
      n3.offsetHeight;
      const r3 = !!i3.isOpeningSlide(t3) && this.getZoomInfo(t3);
      if (this.option("protected") && a3) {
        a3.addEventListener("contextmenu", (t5) => {
          t5.preventDefault();
        });
        const t4 = document.createElement("div");
        P(t4, "fancybox-protected"), n3.appendChild(t4);
      }
      if (o3 && r3) {
        const s4 = e4.contentRect, a4 = Math.max(s4.fullWidth, s4.fullHeight);
        let c3 = null;
        !r3.opacity && a4 > 1200 && (c3 = document.createElement("img"), P(c3, "fancybox-ghost"), c3.src = o3, n3.appendChild(c3));
        const h3 = () => {
          c3 && (P(c3, "f-fadeFastOut"), setTimeout(() => {
            c3 && (c3.remove(), c3 = null);
          }, 200));
        };
        (l3 = o3, new Promise((t4, e5) => {
          const i4 = new Image();
          i4.onload = t4, i4.onerror = e5, i4.src = l3;
        })).then(() => {
          i3.hideLoading(t3), t3.state = lt.Opening, this.instance.emit("reveal", t3), this.zoomIn(t3).then(() => {
            h3(), this.instance.done(t3);
          }, () => {
          }), c3 && setTimeout(() => {
            h3();
          }, a4 > 2500 ? 800 : 200);
        }, () => {
          i3.hideLoading(t3), i3.revealContent(t3);
        });
      } else {
        const n4 = this.optionFor(t3, "initialSize"), s4 = this.optionFor(t3, "zoom"), o4 = { event: i3.prevMouseMoveEvent || i3.options.event, friction: s4 ? 0.12 : 0 };
        let a4 = i3.optionFor(t3, "showClass") || void 0, r4 = true;
        i3.isOpeningSlide(t3) && ("full" === n4 ? e4.zoomToFull(o4) : "cover" === n4 ? e4.zoomToCover(o4) : "max" === n4 ? e4.zoomToMax(o4) : r4 = false, e4.stop("current")), r4 && a4 && (a4 = e4.isDragging ? "f-fadeIn" : ""), i3.hideLoading(t3), i3.revealContent(t3, a4);
      }
      var l3;
    }, () => {
      i3.setError(t3, "{{IMAGE_ERROR}}");
    });
  }
  process(t3, e3) {
    return new Promise((i3, s3) => {
      var o3;
      const a3 = this.instance, r3 = t3.el;
      a3.clearContent(t3), a3.showLoading(t3);
      let l3 = this.optionFor(t3, "content");
      if ("string" == typeof l3 && (l3 = n(l3)), !l3 || !E(l3)) {
        if (l3 = document.createElement("img"), l3 instanceof HTMLImageElement) {
          let i4 = "", n3 = t3.caption;
          i4 = "string" == typeof n3 && n3 ? n3.replace(/<[^>]+>/gi, "").substring(0, 1e3) : `Image ${t3.index + 1} of ${(null === (o3 = a3.carousel) || void 0 === o3 ? void 0 : o3.pages.length) || 1}`, l3.src = e3 || "", l3.alt = i4, l3.draggable = false, t3.srcset && l3.setAttribute("srcset", t3.srcset), this.instance.isOpeningSlide(t3) && (l3.fetchPriority = "high");
        }
        t3.sizes && l3.setAttribute("sizes", t3.sizes);
      }
      P(l3, "fancybox-image"), t3.imageEl = l3, a3.setContent(t3, l3, false);
      t3.panzoom = new I(r3, u({ transformParent: true }, this.option("Panzoom") || {}, { content: l3, width: (e4, i4) => a3.optionFor(t3, "width", "auto", i4) || "auto", height: (e4, i4) => a3.optionFor(t3, "height", "auto", i4) || "auto", wheel: () => {
        const t4 = a3.option("wheel");
        return ("zoom" === t4 || "pan" == t4) && t4;
      }, click: (e4, i4) => {
        var n3, s4;
        if (a3.isCompact || a3.isClosing())
          return false;
        if (t3.index !== (null === (n3 = a3.getSlide()) || void 0 === n3 ? void 0 : n3.index))
          return false;
        if (i4) {
          const t4 = i4.composedPath()[0];
          if (["A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(t4.nodeName))
            return false;
        }
        let o4 = !i4 || i4.target && (null === (s4 = t3.contentEl) || void 0 === s4 ? void 0 : s4.contains(i4.target));
        return a3.option(o4 ? "contentClick" : "backdropClick") || false;
      }, dblClick: () => a3.isCompact ? "toggleZoom" : a3.option("contentDblClick") || false, spinner: false, panOnlyZoomed: true, wheelLimit: 1 / 0, on: { ready: (t4) => {
        i3(t4);
      }, error: () => {
        s3();
      }, destroy: () => {
        s3();
      } } }));
    });
  }
  zoomIn(t3) {
    return new Promise((e3, i3) => {
      const n3 = this.instance, s3 = n3.container, { panzoom: o3, contentEl: a3, el: r3 } = t3;
      o3 && o3.updateMetrics();
      const l3 = this.getZoomInfo(t3);
      if (!(l3 && r3 && a3 && o3 && s3))
        return void i3();
      const { x: c3, y: h3, scale: d3, opacity: u3 } = l3, p3 = () => {
        t3.state !== lt.Closing && (u3 && (a3.style.opacity = Math.max(Math.min(1, 1 - (1 - o3.scale) / (1 - d3)), 0) + ""), o3.scale >= 1 && o3.scale > o3.targetScale - 0.1 && e3(o3));
      }, f3 = (t4) => {
        (t4.scale < 0.99 || t4.scale > 1.01) && !t4.isDragging || (S(s3, yt), a3.style.opacity = "", t4.off("endAnimation", f3), t4.off("touchStart", f3), t4.off("afterTransform", p3), e3(t4));
      };
      o3.on("endAnimation", f3), o3.on("touchStart", f3), o3.on("afterTransform", p3), o3.on(["error", "destroy"], () => {
        i3();
      }), o3.panTo({ x: c3, y: h3, scale: d3, friction: 0, ignoreBounds: true }), o3.stop("current");
      const g3 = { event: "mousemove" === o3.panMode ? n3.prevMouseMoveEvent || n3.options.event : void 0 }, m2 = this.optionFor(t3, "initialSize");
      P(s3, yt), n3.hideLoading(t3), "full" === m2 ? o3.zoomToFull(g3) : "cover" === m2 ? o3.zoomToCover(g3) : "max" === m2 ? o3.zoomToMax(g3) : o3.reset(0.172);
    });
  }
  getZoomInfo(t3) {
    const { el: e3, imageEl: i3, thumbEl: n3, panzoom: s3 } = t3, o3 = this.instance, a3 = o3.container;
    if (!e3 || !i3 || !n3 || !s3 || tt(n3) < 3 || !this.optionFor(t3, "zoom") || !a3 || o3.state === rt.Destroy)
      return false;
    if ("0" === getComputedStyle(a3).getPropertyValue("--f-images-zoom"))
      return false;
    const r3 = window.visualViewport || null;
    if (1 !== (r3 ? r3.scale : 1))
      return false;
    let { top: l3, left: c3, width: h3, height: d3 } = n3.getBoundingClientRect(), { top: u3, left: p3, fitWidth: f3, fitHeight: g3 } = s3.contentRect;
    if (!(h3 && d3 && f3 && g3))
      return false;
    const m2 = s3.container.getBoundingClientRect();
    p3 += m2.left, u3 += m2.top;
    const v2 = -1 * (p3 + 0.5 * f3 - (c3 + 0.5 * h3)), b3 = -1 * (u3 + 0.5 * g3 - (l3 + 0.5 * d3)), y2 = h3 / f3;
    let w2 = this.option("zoomOpacity") || false;
    return "auto" === w2 && (w2 = Math.abs(h3 / d3 - f3 / g3) > 0.1), { x: v2, y: b3, scale: y2, opacity: w2 };
  }
  attach() {
    const t3 = this, e3 = t3.instance;
    e3.on("Carousel.change", t3.onChange), e3.on("Carousel.createSlide", t3.onCreateSlide), e3.on("Carousel.removeSlide", t3.onRemoveSlide), e3.on("close", t3.onClose);
  }
  detach() {
    const t3 = this, e3 = t3.instance;
    e3.off("Carousel.change", t3.onChange), e3.off("Carousel.createSlide", t3.onCreateSlide), e3.off("Carousel.removeSlide", t3.onRemoveSlide), e3.off("close", t3.onClose);
  }
};
Object.defineProperty(wt, "defaults", { enumerable: true, configurable: true, writable: true, value: { initialSize: "fit", Panzoom: { maxScale: 1 }, protected: false, zoom: true, zoomOpacity: "auto" } }), "function" == typeof SuppressedError && SuppressedError;
var xt = "html";
var Et = "image";
var St = "map";
var Pt = "youtube";
var Ct = "vimeo";
var Tt = "html5video";
var Mt = (t3, e3 = {}) => {
  const i3 = new URL(t3), n3 = new URLSearchParams(i3.search), s3 = new URLSearchParams();
  for (const [t4, i4] of [...n3, ...Object.entries(e3)]) {
    let e4 = i4 + "";
    if ("t" === t4) {
      let t5 = e4.match(/((\d*)m)?(\d*)s?/);
      t5 && s3.set("start", 60 * parseInt(t5[2] || "0") + parseInt(t5[3] || "0") + "");
    } else
      s3.set(t4, e4);
  }
  let o3 = s3 + "", a3 = t3.match(/#t=((.*)?\d+s)/);
  return a3 && (o3 += `#t=${a3[1]}`), o3;
};
var Ot = { ajax: null, autoSize: true, iframeAttr: { allow: "autoplay; fullscreen", scrolling: "auto" }, preload: true, videoAutoplay: true, videoRatio: 16 / 9, videoTpl: `<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">
  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn't support embedded videos.</video>`, videoFormat: "", vimeo: { byline: 1, color: "00adef", controls: 1, dnt: 1, muted: 0 }, youtube: { controls: 1, enablejsapi: 1, nocookie: 1, rel: 0, fs: 1 } };
var At = ["image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo"];
var Lt = class extends _ {
  onBeforeInitSlide(t3, e3, i3) {
    this.processType(i3);
  }
  onCreateSlide(t3, e3, i3) {
    this.setContent(i3);
  }
  onClearContent(t3, e3) {
    e3.xhr && (e3.xhr.abort(), e3.xhr = null);
    const i3 = e3.iframeEl;
    i3 && (i3.onload = i3.onerror = null, i3.src = "//about:blank", e3.iframeEl = null);
    const n3 = e3.contentEl, s3 = e3.placeholderEl;
    if ("inline" === e3.type && n3 && s3)
      n3.classList.remove("fancybox__content"), "none" !== getComputedStyle(n3).getPropertyValue("display") && (n3.style.display = "none"), setTimeout(() => {
        s3 && (n3 && s3.parentNode && s3.parentNode.insertBefore(n3, s3), s3.remove());
      }, 0), e3.contentEl = void 0, e3.placeholderEl = void 0;
    else
      for (; e3.el && e3.el.firstChild; )
        e3.el.removeChild(e3.el.firstChild);
  }
  onSelectSlide(t3, e3, i3) {
    i3.state === lt.Ready && this.playVideo();
  }
  onUnselectSlide(t3, e3, i3) {
    var n3, s3;
    if (i3.type === Tt) {
      try {
        null === (s3 = null === (n3 = i3.el) || void 0 === n3 ? void 0 : n3.querySelector("video")) || void 0 === s3 || s3.pause();
      } catch (t4) {
      }
      return;
    }
    let o3;
    i3.type === Ct ? o3 = { method: "pause", value: "true" } : i3.type === Pt && (o3 = { event: "command", func: "pauseVideo" }), o3 && i3.iframeEl && i3.iframeEl.contentWindow && i3.iframeEl.contentWindow.postMessage(JSON.stringify(o3), "*"), i3.poller && clearTimeout(i3.poller);
  }
  onDone(t3, e3) {
    t3.isCurrentSlide(e3) && !t3.isClosing() && this.playVideo();
  }
  onRefresh(t3, e3) {
    e3.slides.forEach((t4) => {
      t4.el && (this.resizeIframe(t4), this.setAspectRatio(t4));
    });
  }
  onMessage(t3) {
    try {
      let e3 = JSON.parse(t3.data);
      if ("https://player.vimeo.com" === t3.origin) {
        if ("ready" === e3.event)
          for (let e4 of Array.from(document.getElementsByClassName("fancybox__iframe")))
            e4 instanceof HTMLIFrameElement && e4.contentWindow === t3.source && (e4.dataset.ready = "true");
      } else if (t3.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === e3.event) {
        const t4 = document.getElementById(e3.id);
        t4 && (t4.dataset.ready = "true");
      }
    } catch (t4) {
    }
  }
  loadAjaxContent(t3) {
    const e3 = this.instance.optionFor(t3, "src") || "";
    this.instance.showLoading(t3);
    const i3 = this.instance, n3 = new XMLHttpRequest();
    i3.showLoading(t3), n3.onreadystatechange = function() {
      n3.readyState === XMLHttpRequest.DONE && i3.state === rt.Ready && (i3.hideLoading(t3), 200 === n3.status ? i3.setContent(t3, n3.responseText) : i3.setError(t3, 404 === n3.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
    };
    const s3 = t3.ajax || null;
    n3.open(s3 ? "POST" : "GET", e3 + ""), n3.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n3.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n3.send(s3), t3.xhr = n3;
  }
  setInlineContent(t3) {
    let e3 = null;
    if (E(t3.src))
      e3 = t3.src;
    else if ("string" == typeof t3.src) {
      const i3 = t3.src.split("#", 2).pop();
      e3 = i3 ? document.getElementById(i3) : null;
    }
    if (e3) {
      if ("clone" === t3.type || e3.closest(".fancybox__slide")) {
        e3 = e3.cloneNode(true);
        const i3 = e3.dataset.animationName;
        i3 && (e3.classList.remove(i3), delete e3.dataset.animationName);
        let n3 = e3.getAttribute("id");
        n3 = n3 ? `${n3}--clone` : `clone-${this.instance.id}-${t3.index}`, e3.setAttribute("id", n3);
      } else if (e3.parentNode) {
        const i3 = document.createElement("div");
        i3.classList.add("fancybox-placeholder"), e3.parentNode.insertBefore(i3, e3), t3.placeholderEl = i3;
      }
      this.instance.setContent(t3, e3);
    } else
      this.instance.setError(t3, "{{ELEMENT_NOT_FOUND}}");
  }
  setIframeContent(t3) {
    const { src: e3, el: i3 } = t3;
    if (!e3 || "string" != typeof e3 || !i3)
      return;
    i3.classList.add("is-loading");
    const n3 = this.instance, s3 = document.createElement("iframe");
    s3.className = "fancybox__iframe", s3.setAttribute("id", `fancybox__iframe_${n3.id}_${t3.index}`);
    for (const [e4, i4] of Object.entries(this.optionFor(t3, "iframeAttr") || {}))
      s3.setAttribute(e4, i4);
    s3.onerror = () => {
      n3.setError(t3, "{{IFRAME_ERROR}}");
    }, t3.iframeEl = s3;
    const o3 = this.optionFor(t3, "preload");
    if ("iframe" !== t3.type || false === o3)
      return s3.setAttribute("src", t3.src + ""), n3.setContent(t3, s3, false), this.resizeIframe(t3), void n3.revealContent(t3);
    n3.showLoading(t3), s3.onload = () => {
      if (!s3.src.length)
        return;
      const e4 = "true" !== s3.dataset.ready;
      s3.dataset.ready = "true", this.resizeIframe(t3), e4 ? n3.revealContent(t3) : n3.hideLoading(t3);
    }, s3.setAttribute("src", e3), n3.setContent(t3, s3, false);
  }
  resizeIframe(t3) {
    const { type: e3, iframeEl: i3 } = t3;
    if (e3 === Pt || e3 === Ct)
      return;
    const n3 = null == i3 ? void 0 : i3.parentElement;
    if (!i3 || !n3)
      return;
    let s3 = t3.autoSize;
    void 0 === s3 && (s3 = this.optionFor(t3, "autoSize"));
    let o3 = t3.width || 0, a3 = t3.height || 0;
    o3 && a3 && (s3 = false);
    const r3 = n3 && n3.style;
    if (false !== t3.preload && false !== s3 && r3)
      try {
        const t4 = window.getComputedStyle(n3), e4 = parseFloat(t4.paddingLeft) + parseFloat(t4.paddingRight), s4 = parseFloat(t4.paddingTop) + parseFloat(t4.paddingBottom), l3 = i3.contentWindow;
        if (l3) {
          const t5 = l3.document, i4 = t5.getElementsByTagName(xt)[0], n4 = t5.body;
          r3.width = "", n4.style.overflow = "hidden", o3 = o3 || i4.scrollWidth + e4, r3.width = `${o3}px`, n4.style.overflow = "", r3.flex = "0 0 auto", r3.height = `${n4.scrollHeight}px`, a3 = i4.scrollHeight + s4;
        }
      } catch (t4) {
      }
    if (o3 || a3) {
      const t4 = { flex: "0 1 auto", width: "", height: "" };
      o3 && "auto" !== o3 && (t4.width = `${o3}px`), a3 && "auto" !== a3 && (t4.height = `${a3}px`), Object.assign(r3, t4);
    }
  }
  playVideo() {
    const t3 = this.instance.getSlide();
    if (!t3)
      return;
    const { el: e3 } = t3;
    if (!e3 || !e3.offsetParent)
      return;
    if (!this.optionFor(t3, "videoAutoplay"))
      return;
    if (t3.type === Tt)
      try {
        const t4 = e3.querySelector("video");
        if (t4) {
          const e4 = t4.play();
          void 0 !== e4 && e4.then(() => {
          }).catch((e5) => {
            t4.muted = true, t4.play();
          });
        }
      } catch (t4) {
      }
    if (t3.type !== Pt && t3.type !== Ct)
      return;
    const i3 = () => {
      if (t3.iframeEl && t3.iframeEl.contentWindow) {
        let e4;
        if ("true" === t3.iframeEl.dataset.ready)
          return e4 = t3.type === Pt ? { event: "command", func: "playVideo" } : { method: "play", value: "true" }, e4 && t3.iframeEl.contentWindow.postMessage(JSON.stringify(e4), "*"), void (t3.poller = void 0);
        t3.type === Pt && (e4 = { event: "listening", id: t3.iframeEl.getAttribute("id") }, t3.iframeEl.contentWindow.postMessage(JSON.stringify(e4), "*"));
      }
      t3.poller = setTimeout(i3, 250);
    };
    i3();
  }
  processType(t3) {
    if (t3.html)
      return t3.type = xt, t3.src = t3.html, void (t3.html = "");
    const e3 = this.instance.optionFor(t3, "src", "");
    if (!e3 || "string" != typeof e3)
      return;
    let i3 = t3.type, n3 = null;
    if (n3 = e3.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
      const s3 = this.optionFor(t3, Pt), { nocookie: o3 } = s3, a3 = function(t4, e4) {
        var i4 = {};
        for (var n4 in t4)
          Object.prototype.hasOwnProperty.call(t4, n4) && e4.indexOf(n4) < 0 && (i4[n4] = t4[n4]);
        if (null != t4 && "function" == typeof Object.getOwnPropertySymbols) {
          var s4 = 0;
          for (n4 = Object.getOwnPropertySymbols(t4); s4 < n4.length; s4++)
            e4.indexOf(n4[s4]) < 0 && Object.prototype.propertyIsEnumerable.call(t4, n4[s4]) && (i4[n4[s4]] = t4[n4[s4]]);
        }
        return i4;
      }(s3, ["nocookie"]), r3 = `www.youtube${o3 ? "-nocookie" : ""}.com`, l3 = Mt(e3, a3), c3 = encodeURIComponent(n3[2]);
      t3.videoId = c3, t3.src = `https://${r3}/embed/${c3}?${l3}`, t3.thumbSrc = t3.thumbSrc || `https://i.ytimg.com/vi/${c3}/mqdefault.jpg`, i3 = Pt;
    } else if (n3 = e3.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
      const s3 = Mt(e3, this.optionFor(t3, Ct)), o3 = encodeURIComponent(n3[1]), a3 = n3[4] || "";
      t3.videoId = o3, t3.src = `https://player.vimeo.com/video/${o3}?${a3 ? `h=${a3}${s3 ? "&" : ""}` : ""}${s3}`, i3 = Ct;
    }
    if (!i3 && t3.triggerEl) {
      const e4 = t3.triggerEl.dataset.type;
      At.includes(e4) && (i3 = e4);
    }
    i3 || "string" == typeof e3 && ("#" === e3.charAt(0) ? i3 = "inline" : (n3 = e3.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i3 = Tt, t3.videoFormat = t3.videoFormat || "video/" + ("ogv" === n3[1] ? "ogg" : n3[1])) : e3.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i3 = Et : e3.match(/\.(pdf)((\?|#).*)?$/i) && (i3 = "pdf")), (n3 = e3.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t3.src = `https://maps.google.${n3[1]}/?ll=${(n3[2] ? n3[2] + "&z=" + Math.floor(parseFloat(n3[3])) + (n3[4] ? n3[4].replace(/^\//, "&") : "") : n3[4] + "").replace(/\?/, "&")}&output=${n3[4] && n3[4].indexOf("layer=c") > 0 ? "svembed" : "embed"}`, i3 = St) : (n3 = e3.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t3.src = `https://maps.google.${n3[1]}/maps?q=${n3[2].replace("query=", "q=").replace("api=1", "")}&output=embed`, i3 = St), i3 = i3 || this.instance.option("defaultType"), t3.type = i3, i3 === Et && (t3.thumbSrc = t3.thumbSrc || t3.src);
  }
  setContent(t3) {
    const e3 = this.instance.optionFor(t3, "src") || "";
    if (t3 && t3.type && e3) {
      switch (t3.type) {
        case xt:
          this.instance.setContent(t3, e3);
          break;
        case Tt:
          const i3 = this.option("videoTpl");
          i3 && this.instance.setContent(t3, i3.replace(/\{\{src\}\}/gi, e3 + "").replace(/\{\{format\}\}/gi, this.optionFor(t3, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t3.poster || t3.thumbSrc || ""));
          break;
        case "inline":
        case "clone":
          this.setInlineContent(t3);
          break;
        case "ajax":
          this.loadAjaxContent(t3);
          break;
        case "pdf":
        case St:
        case Pt:
        case Ct:
          t3.preload = false;
        case "iframe":
          this.setIframeContent(t3);
      }
      this.setAspectRatio(t3);
    }
  }
  setAspectRatio(t3) {
    const e3 = t3.contentEl;
    if (!(t3.el && e3 && t3.type && [Pt, Ct, Tt].includes(t3.type)))
      return;
    let i3, n3 = t3.width || "auto", s3 = t3.height || "auto";
    if ("auto" === n3 || "auto" === s3) {
      i3 = this.optionFor(t3, "videoRatio");
      const e4 = (i3 + "").match(/(\d+)\s*\/\s?(\d+)/);
      i3 = e4 && e4.length > 2 ? parseFloat(e4[1]) / parseFloat(e4[2]) : parseFloat(i3 + "");
    } else
      n3 && s3 && (i3 = n3 / s3);
    if (!i3)
      return;
    e3.style.aspectRatio = "", e3.style.width = "", e3.style.height = "", e3.offsetHeight;
    const o3 = e3.getBoundingClientRect(), a3 = o3.width || 1, r3 = o3.height || 1;
    e3.style.aspectRatio = i3 + "", i3 < a3 / r3 ? (s3 = "auto" === s3 ? r3 : Math.min(r3, s3), e3.style.width = "auto", e3.style.height = `${s3}px`) : (n3 = "auto" === n3 ? a3 : Math.min(a3, n3), e3.style.width = `${n3}px`, e3.style.height = "auto");
  }
  attach() {
    const t3 = this, e3 = t3.instance;
    e3.on("Carousel.beforeInitSlide", t3.onBeforeInitSlide), e3.on("Carousel.createSlide", t3.onCreateSlide), e3.on("Carousel.selectSlide", t3.onSelectSlide), e3.on("Carousel.unselectSlide", t3.onUnselectSlide), e3.on("Carousel.Panzoom.refresh", t3.onRefresh), e3.on("done", t3.onDone), e3.on("clearContent", t3.onClearContent), window.addEventListener("message", t3.onMessage);
  }
  detach() {
    const t3 = this, e3 = t3.instance;
    e3.off("Carousel.beforeInitSlide", t3.onBeforeInitSlide), e3.off("Carousel.createSlide", t3.onCreateSlide), e3.off("Carousel.selectSlide", t3.onSelectSlide), e3.off("Carousel.unselectSlide", t3.onUnselectSlide), e3.off("Carousel.Panzoom.refresh", t3.onRefresh), e3.off("done", t3.onDone), e3.off("clearContent", t3.onClearContent), window.removeEventListener("message", t3.onMessage);
  }
};
Object.defineProperty(Lt, "defaults", { enumerable: true, configurable: true, writable: true, value: Ot });
var zt = "play";
var Rt = "pause";
var kt = "ready";
var It = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: kt }), Object.defineProperty(this, "inHover", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "timer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "progressBar", { enumerable: true, configurable: true, writable: true, value: null });
  }
  get isActive() {
    return this.state !== kt;
  }
  onReady(t3) {
    this.option("autoStart") && (t3.isInfinite || t3.page < t3.pages.length - 1) && this.start();
  }
  onChange() {
    this.removeProgressBar(), this.pause();
  }
  onSettle() {
    this.resume();
  }
  onVisibilityChange() {
    "visible" === document.visibilityState ? this.resume() : this.pause();
  }
  onMouseEnter() {
    this.inHover = true, this.pause();
  }
  onMouseLeave() {
    var t3;
    this.inHover = false, (null === (t3 = this.instance.panzoom) || void 0 === t3 ? void 0 : t3.isResting) && this.resume();
  }
  onTimerEnd() {
    const t3 = this.instance;
    "play" === this.state && (t3.isInfinite || t3.page !== t3.pages.length - 1 ? t3.slideNext() : t3.slideTo(0));
  }
  removeProgressBar() {
    this.progressBar && (this.progressBar.remove(), this.progressBar = null);
  }
  createProgressBar() {
    var t3;
    if (!this.option("showProgress"))
      return null;
    this.removeProgressBar();
    const e3 = this.instance, i3 = (null === (t3 = e3.pages[e3.page]) || void 0 === t3 ? void 0 : t3.slides) || [];
    let n3 = this.option("progressParentEl");
    if (n3 || (n3 = (1 === i3.length ? i3[0].el : null) || e3.viewport), !n3)
      return null;
    const s3 = document.createElement("div");
    return P(s3, "f-progress"), n3.prepend(s3), this.progressBar = s3, s3.offsetHeight, s3;
  }
  set() {
    const t3 = this, e3 = t3.instance;
    if (e3.pages.length < 2)
      return;
    if (t3.timer)
      return;
    const i3 = t3.option("timeout");
    t3.state = zt, P(e3.container, "has-autoplay");
    let n3 = t3.createProgressBar();
    n3 && (n3.style.transitionDuration = `${i3}ms`, n3.style.transform = "scaleX(1)"), t3.timer = setTimeout(() => {
      t3.timer = null, t3.inHover || t3.onTimerEnd();
    }, i3), t3.emit("set");
  }
  clear() {
    const t3 = this;
    t3.timer && (clearTimeout(t3.timer), t3.timer = null), t3.removeProgressBar();
  }
  start() {
    const t3 = this;
    if (t3.set(), t3.state !== kt) {
      if (t3.option("pauseOnHover")) {
        const e3 = t3.instance.container;
        e3.addEventListener("mouseenter", t3.onMouseEnter, false), e3.addEventListener("mouseleave", t3.onMouseLeave, false);
      }
      document.addEventListener("visibilitychange", t3.onVisibilityChange, false), t3.emit("start");
    }
  }
  stop() {
    const t3 = this, e3 = t3.state, i3 = t3.instance.container;
    t3.clear(), t3.state = kt, i3.removeEventListener("mouseenter", t3.onMouseEnter, false), i3.removeEventListener("mouseleave", t3.onMouseLeave, false), document.removeEventListener("visibilitychange", t3.onVisibilityChange, false), S(i3, "has-autoplay"), e3 !== kt && t3.emit("stop");
  }
  pause() {
    const t3 = this;
    t3.state === zt && (t3.state = Rt, t3.clear(), t3.emit(Rt));
  }
  resume() {
    const t3 = this, e3 = t3.instance;
    if (e3.isInfinite || e3.page !== e3.pages.length - 1)
      if (t3.state !== zt) {
        if (t3.state === Rt && !t3.inHover) {
          const e4 = new Event("resume", { bubbles: true, cancelable: true });
          t3.emit("resume", e4), e4.defaultPrevented || t3.set();
        }
      } else
        t3.set();
    else
      t3.stop();
  }
  toggle() {
    this.state === zt || this.state === Rt ? this.stop() : this.start();
  }
  attach() {
    const t3 = this, e3 = t3.instance;
    e3.on("ready", t3.onReady), e3.on("Panzoom.startAnimation", t3.onChange), e3.on("Panzoom.endAnimation", t3.onSettle), e3.on("Panzoom.touchMove", t3.onChange);
  }
  detach() {
    const t3 = this, e3 = t3.instance;
    e3.off("ready", t3.onReady), e3.off("Panzoom.startAnimation", t3.onChange), e3.off("Panzoom.endAnimation", t3.onSettle), e3.off("Panzoom.touchMove", t3.onChange), t3.stop();
  }
};
Object.defineProperty(It, "defaults", { enumerable: true, configurable: true, writable: true, value: { autoStart: true, pauseOnHover: true, progressParentEl: null, showProgress: true, timeout: 3e3 } });
var Dt = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ref", { enumerable: true, configurable: true, writable: true, value: null });
  }
  onPrepare(t3) {
    const e3 = t3.carousel;
    if (!e3)
      return;
    const i3 = t3.container;
    i3 && (e3.options.Autoplay = u({ autoStart: false }, this.option("Autoplay") || {}, { pauseOnHover: false, timeout: this.option("timeout"), progressParentEl: () => this.option("progressParentEl") || null, on: { start: () => {
      t3.emit("startSlideshow");
    }, set: (e4) => {
      var n3;
      i3.classList.add("has-slideshow"), (null === (n3 = t3.getSlide()) || void 0 === n3 ? void 0 : n3.state) !== lt.Ready && e4.pause();
    }, stop: () => {
      i3.classList.remove("has-slideshow"), t3.isCompact || t3.endIdle(), t3.emit("endSlideshow");
    }, resume: (e4, i4) => {
      var n3, s3, o3;
      !i4 || !i4.cancelable || (null === (n3 = t3.getSlide()) || void 0 === n3 ? void 0 : n3.state) === lt.Ready && (null === (o3 = null === (s3 = t3.carousel) || void 0 === s3 ? void 0 : s3.panzoom) || void 0 === o3 ? void 0 : o3.isResting) || i4.preventDefault();
    } } }), e3.attachPlugins({ Autoplay: It }), this.ref = e3.plugins.Autoplay);
  }
  onReady(t3) {
    const e3 = t3.carousel, i3 = this.ref;
    i3 && e3 && this.option("playOnStart") && (e3.isInfinite || e3.page < e3.pages.length - 1) && i3.start();
  }
  onDone(t3, e3) {
    const i3 = this.ref, n3 = t3.carousel;
    if (!i3 || !n3)
      return;
    const s3 = e3.panzoom;
    s3 && s3.on("startAnimation", () => {
      t3.isCurrentSlide(e3) && i3.stop();
    }), t3.isCurrentSlide(e3) && i3.resume();
  }
  onKeydown(t3, e3) {
    var i3;
    const n3 = this.ref;
    n3 && e3 === this.option("key") && "BUTTON" !== (null === (i3 = document.activeElement) || void 0 === i3 ? void 0 : i3.nodeName) && n3.toggle();
  }
  attach() {
    const t3 = this, e3 = t3.instance;
    e3.on("Carousel.init", t3.onPrepare), e3.on("Carousel.ready", t3.onReady), e3.on("done", t3.onDone), e3.on("keydown", t3.onKeydown);
  }
  detach() {
    const t3 = this, e3 = t3.instance;
    e3.off("Carousel.init", t3.onPrepare), e3.off("Carousel.ready", t3.onReady), e3.off("done", t3.onDone), e3.off("keydown", t3.onKeydown);
  }
};
Object.defineProperty(Dt, "defaults", { enumerable: true, configurable: true, writable: true, value: { key: " ", playOnStart: false, progressParentEl: (t3) => {
  var e3;
  return (null === (e3 = t3.instance.container) || void 0 === e3 ? void 0 : e3.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t3.instance.container;
}, timeout: 3e3 } });
var Ft = { classes: { container: "f-thumbs f-carousel__thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide", isResting: "is-resting", isSelected: "is-selected", isLoading: "is-loading", hasThumbs: "has-thumbs" }, minCount: 2, parentEl: null, thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>', type: "modern" };
var jt;
!function(t3) {
  t3[t3.Init = 0] = "Init", t3[t3.Ready = 1] = "Ready", t3[t3.Hidden = 2] = "Hidden";
}(jt || (jt = {}));
var Bt = "isResting";
var Ht = "thumbWidth";
var Nt = "thumbHeight";
var _t = "thumbClipWidth";
var $t = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "type", { enumerable: true, configurable: true, writable: true, value: "modern" }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "track", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "carousel", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "thumbWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbClipWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbGap", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbExtraGap", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: jt.Init });
  }
  get isModern() {
    return "modern" === this.type;
  }
  onInitSlide(t3, e3) {
    const i3 = e3.el ? e3.el.dataset : void 0;
    i3 && (e3.thumbSrc = i3.thumbSrc || e3.thumbSrc || "", e3[_t] = parseFloat(i3[_t] || "") || e3[_t] || 0, e3[Nt] = parseFloat(i3.thumbHeight || "") || e3[Nt] || 0), this.addSlide(e3);
  }
  onInitSlides() {
    this.build();
  }
  onChange() {
    var t3;
    if (!this.isModern)
      return;
    const e3 = this.container, i3 = this.instance, n3 = i3.panzoom, s3 = this.carousel, a3 = s3 ? s3.panzoom : null, r3 = i3.page;
    if (n3 && s3 && a3) {
      if (n3.isDragging) {
        S(e3, this.cn(Bt));
        let n4 = (null === (t3 = s3.pages[r3]) || void 0 === t3 ? void 0 : t3.pos) || 0;
        n4 += i3.getProgress(r3) * (this[_t] + this.thumbGap);
        let o3 = a3.getBounds();
        -1 * n4 > o3.x.min && -1 * n4 < o3.x.max && a3.panTo({ x: -1 * n4, friction: 0.12 });
      } else
        o(e3, this.cn(Bt), n3.isResting);
      this.shiftModern();
    }
  }
  onRefresh() {
    this.updateProps();
    for (const t3 of this.instance.slides || [])
      this.resizeModernSlide(t3);
    this.shiftModern();
  }
  isDisabled() {
    const t3 = this.option("minCount") || 0;
    if (t3) {
      const e4 = this.instance;
      let i3 = 0;
      for (const t4 of e4.slides || [])
        t4.thumbSrc && i3++;
      if (i3 < t3)
        return true;
    }
    const e3 = this.option("type");
    return ["modern", "classic"].indexOf(e3) < 0;
  }
  getThumb(t3) {
    const e3 = this.option("thumbTpl") || "";
    return { html: this.instance.localize(e3, [["%i", t3.index], ["%d", t3.index + 1], ["%s", t3.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]]) };
  }
  addSlide(t3) {
    const e3 = this.carousel;
    e3 && e3.addSlide(t3.index, this.getThumb(t3));
  }
  getSlides() {
    const t3 = [];
    for (const e3 of this.instance.slides || [])
      t3.push(this.getThumb(e3));
    return t3;
  }
  resizeModernSlide(t3) {
    this.isModern && (t3[Ht] = t3[_t] && t3[Nt] ? Math.round(this[Nt] * (t3[_t] / t3[Nt])) : this[Ht]);
  }
  updateProps() {
    const t3 = this.container;
    if (!t3)
      return;
    const e3 = (e4) => parseFloat(getComputedStyle(t3).getPropertyValue("--f-thumb-" + e4)) || 0;
    this.thumbGap = e3("gap"), this.thumbExtraGap = e3("extra-gap"), this[Ht] = e3("width") || 40, this[_t] = e3("clip-width") || 40, this[Nt] = e3("height") || 40;
  }
  build() {
    const t3 = this;
    if (t3.state !== jt.Init)
      return;
    if (t3.isDisabled())
      return void t3.emit("disabled");
    const e3 = t3.instance, i3 = e3.container, n3 = t3.getSlides(), s3 = t3.option("type");
    t3.type = s3;
    const o3 = t3.option("parentEl"), a3 = t3.cn("container"), r3 = t3.cn("track");
    let l3 = null == o3 ? void 0 : o3.querySelector("." + a3);
    l3 || (l3 = document.createElement("div"), P(l3, a3), o3 ? o3.appendChild(l3) : i3.after(l3)), P(l3, `is-${s3}`), P(i3, t3.cn("hasThumbs")), t3.container = l3, t3.updateProps();
    let c3 = l3.querySelector("." + r3);
    c3 || (c3 = document.createElement("div"), P(c3, t3.cn("track")), l3.appendChild(c3)), t3.track = c3;
    const h3 = u({}, { track: c3, infinite: false, center: true, fill: "classic" === s3, dragFree: true, slidesPerPage: 1, transition: false, preload: 0.25, friction: 0.12, Panzoom: { maxVelocity: 0 }, Dots: false, Navigation: false, classes: { container: "f-thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide" } }, t3.option("Carousel") || {}, { Sync: { target: e3 }, slides: n3 }), d3 = new e3.constructor(l3, h3);
    d3.on("createSlide", (e4, i4) => {
      t3.setProps(i4.index), t3.emit("createSlide", i4, i4.el);
    }), d3.on("ready", () => {
      t3.shiftModern(), t3.emit("ready");
    }), d3.on("refresh", () => {
      t3.shiftModern();
    }), d3.on("Panzoom.click", (e4, i4, n4) => {
      t3.onClick(n4);
    }), t3.carousel = d3, t3.state = jt.Ready;
  }
  onClick(t3) {
    t3.preventDefault(), t3.stopPropagation();
    const e3 = this.instance, { pages: i3, page: n3 } = e3, s3 = (t4) => {
      if (t4) {
        const e4 = t4.closest("[data-carousel-index]");
        if (e4)
          return [parseInt(e4.dataset.carouselIndex || "", 10) || 0, e4];
      }
      return [-1, void 0];
    }, o3 = (t4, e4) => {
      const i4 = document.elementFromPoint(t4, e4);
      return i4 ? s3(i4) : [-1, void 0];
    };
    let [a3, r3] = s3(t3.target);
    if (a3 > -1)
      return;
    const l3 = this[_t], c3 = t3.clientX, h3 = t3.clientY;
    let [d3, u3] = o3(c3 - l3, h3), [p3, f3] = o3(c3 + l3, h3);
    u3 && f3 ? (a3 = Math.abs(c3 - u3.getBoundingClientRect().right) < Math.abs(c3 - f3.getBoundingClientRect().left) ? d3 : p3, a3 === n3 && (a3 = a3 === d3 ? p3 : d3)) : u3 ? a3 = d3 : f3 && (a3 = p3), a3 > -1 && i3[a3] && e3.slideTo(a3);
  }
  getShift(t3) {
    var e3;
    const i3 = this, { instance: n3 } = i3, s3 = i3.carousel;
    if (!n3 || !s3)
      return 0;
    const o3 = i3[Ht], a3 = i3[_t], r3 = i3.thumbGap, l3 = i3.thumbExtraGap;
    if (!(null === (e3 = s3.slides[t3]) || void 0 === e3 ? void 0 : e3.el))
      return 0;
    const c3 = 0.5 * (o3 - a3), h3 = n3.pages.length - 1;
    let d3 = n3.getProgress(0), u3 = n3.getProgress(h3), p3 = n3.getProgress(t3, false, true), f3 = 0, g3 = c3 + l3 + r3;
    const m2 = d3 < 0 && d3 > -1, v2 = u3 > 0 && u3 < 1;
    return 0 === t3 ? (f3 = g3 * Math.abs(d3), v2 && 1 === d3 && (f3 -= g3 * Math.abs(u3))) : t3 === h3 ? (f3 = g3 * Math.abs(u3) * -1, m2 && -1 === u3 && (f3 += g3 * Math.abs(d3))) : m2 || v2 ? (f3 = -1 * g3, f3 += g3 * Math.abs(d3), f3 += g3 * (1 - Math.abs(u3))) : f3 = g3 * p3, f3;
  }
  setProps(e3) {
    var i3;
    const n3 = this;
    if (!n3.isModern)
      return;
    const { instance: s3 } = n3, o3 = n3.carousel;
    if (s3 && o3) {
      const a3 = null === (i3 = o3.slides[e3]) || void 0 === i3 ? void 0 : i3.el;
      if (a3 && a3.childNodes.length) {
        let i4 = t(1 - Math.abs(s3.getProgress(e3))), o4 = t(n3.getShift(e3));
        a3.style.setProperty("--progress", i4 ? i4 + "" : ""), a3.style.setProperty("--shift", o4 + "");
      }
    }
  }
  shiftModern() {
    const t3 = this;
    if (!t3.isModern)
      return;
    const { instance: e3, track: i3 } = t3, n3 = e3.panzoom, s3 = t3.carousel;
    if (!(e3 && i3 && n3 && s3))
      return;
    if (n3.state === m.Init || n3.state === m.Destroy)
      return;
    for (const i4 of e3.slides)
      t3.setProps(i4.index);
    let o3 = (t3[_t] + t3.thumbGap) * (s3.slides.length || 0);
    i3.style.setProperty("--width", o3 + "");
  }
  cleanup() {
    const t3 = this;
    t3.carousel && t3.carousel.destroy(), t3.carousel = null, t3.container && t3.container.remove(), t3.container = null, t3.track && t3.track.remove(), t3.track = null, t3.state = jt.Init, S(t3.instance.container, t3.cn("hasThumbs"));
  }
  attach() {
    const t3 = this, e3 = t3.instance;
    e3.on("initSlide", t3.onInitSlide), e3.state === B.Init ? e3.on("initSlides", t3.onInitSlides) : t3.onInitSlides(), e3.on(["change", "Panzoom.afterTransform"], t3.onChange), e3.on("Panzoom.refresh", t3.onRefresh);
  }
  detach() {
    const t3 = this, e3 = t3.instance;
    e3.off("initSlide", t3.onInitSlide), e3.off("initSlides", t3.onInitSlides), e3.off(["change", "Panzoom.afterTransform"], t3.onChange), e3.off("Panzoom.refresh", t3.onRefresh), t3.cleanup();
  }
};
Object.defineProperty($t, "defaults", { enumerable: true, configurable: true, writable: true, value: Ft });
var Wt = Object.assign(Object.assign({}, Ft), { key: "t", showOnStart: true, parentEl: null });
var Xt = "is-masked";
var qt = "aria-hidden";
var Yt = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "ref", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "hidden", { enumerable: true, configurable: true, writable: true, value: false });
  }
  get isEnabled() {
    const t3 = this.ref;
    return t3 && !t3.isDisabled();
  }
  get isHidden() {
    return this.hidden;
  }
  onClick(t3, e3) {
    e3.stopPropagation();
  }
  onCreateSlide(t3, e3) {
    var i3, n3, s3;
    const o3 = (null === (s3 = null === (n3 = null === (i3 = this.instance) || void 0 === i3 ? void 0 : i3.carousel) || void 0 === n3 ? void 0 : n3.slides[e3.index]) || void 0 === s3 ? void 0 : s3.type) || "", a3 = e3.el;
    if (a3 && o3) {
      let t4 = `for-${o3}`;
      ["video", "youtube", "vimeo", "html5video"].includes(o3) && (t4 += " for-video"), P(a3, t4);
    }
  }
  onInit() {
    var t3;
    const e3 = this, i3 = e3.instance, n3 = i3.carousel;
    if (e3.ref || !n3)
      return;
    const s3 = e3.option("parentEl") || i3.footer || i3.container;
    if (!s3)
      return;
    const o3 = u({}, e3.options, { parentEl: s3, classes: { container: "f-thumbs fancybox__thumbs" }, Carousel: { Sync: { friction: i3.option("Carousel.friction") || 0 } }, on: { ready: (t4) => {
      const i4 = t4.container;
      i4 && this.hidden && (e3.refresh(), i4.style.transition = "none", e3.hide(), i4.offsetHeight, queueMicrotask(() => {
        i4.style.transition = "", e3.show();
      }));
    } } });
    o3.Carousel = o3.Carousel || {}, o3.Carousel.on = u((null === (t3 = e3.options.Carousel) || void 0 === t3 ? void 0 : t3.on) || {}, { click: this.onClick, createSlide: this.onCreateSlide }), n3.options.Thumbs = o3, n3.attachPlugins({ Thumbs: $t }), e3.ref = n3.plugins.Thumbs, e3.option("showOnStart") || (e3.ref.state = jt.Hidden, e3.hidden = true);
  }
  onResize() {
    var t3;
    const e3 = null === (t3 = this.ref) || void 0 === t3 ? void 0 : t3.container;
    e3 && (e3.style.maxHeight = "");
  }
  onKeydown(t3, e3) {
    const i3 = this.option("key");
    i3 && i3 === e3 && this.toggle();
  }
  toggle() {
    const t3 = this.ref;
    if (t3 && !t3.isDisabled())
      return t3.state === jt.Hidden ? (t3.state = jt.Init, void t3.build()) : void (this.hidden ? this.show() : this.hide());
  }
  show() {
    const t3 = this.ref;
    if (!t3 || t3.isDisabled())
      return;
    const e3 = t3.container;
    e3 && (this.refresh(), e3.offsetHeight, e3.removeAttribute(qt), e3.classList.remove(Xt), this.hidden = false);
  }
  hide() {
    const t3 = this.ref, e3 = t3 && t3.container;
    e3 && (this.refresh(), e3.offsetHeight, e3.classList.add(Xt), e3.setAttribute(qt, "true")), this.hidden = true;
  }
  refresh() {
    const t3 = this.ref;
    if (!t3 || !t3.state)
      return;
    const e3 = t3.container, i3 = (null == e3 ? void 0 : e3.firstChild) || null;
    e3 && i3 && i3.childNodes.length && (e3.style.maxHeight = `${i3.getBoundingClientRect().height}px`);
  }
  attach() {
    const t3 = this, e3 = t3.instance;
    e3.state === rt.Init ? e3.on("Carousel.init", t3.onInit) : t3.onInit(), e3.on("resize", t3.onResize), e3.on("keydown", t3.onKeydown);
  }
  detach() {
    var t3;
    const e3 = this, i3 = e3.instance;
    i3.off("Carousel.init", e3.onInit), i3.off("resize", e3.onResize), i3.off("keydown", e3.onKeydown), null === (t3 = i3.carousel) || void 0 === t3 || t3.detachPlugins(["Thumbs"]), e3.ref = null;
  }
};
Object.defineProperty(Yt, "defaults", { enumerable: true, configurable: true, writable: true, value: Wt });
var Vt = { panLeft: { icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>', change: { panX: -100 } }, panRight: { icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>', change: { panX: 100 } }, panUp: { icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>', change: { panY: -100 } }, panDown: { icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>', change: { panY: 100 } }, zoomIn: { icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>', action: "zoomIn" }, zoomOut: { icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "zoomOut" }, toggle1to1: { icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>', action: "toggleZoom" }, toggleZoom: { icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "toggleZoom" }, iterateZoom: { icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>', action: "iterateZoom" }, rotateCCW: { icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>', action: "rotateCCW" }, rotateCW: { icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>', action: "rotateCW" }, flipX: { icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>', action: "flipX" }, flipY: { icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>', action: "flipY" }, fitX: { icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>', action: "fitX" }, fitY: { icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>', action: "fitY" }, reset: { icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>', action: "reset" }, toggleFS: { icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>', action: "toggleFS" } };
var Zt;
!function(t3) {
  t3[t3.Init = 0] = "Init", t3[t3.Ready = 1] = "Ready", t3[t3.Disabled = 2] = "Disabled";
}(Zt || (Zt = {}));
var Ut = { absolute: "auto", display: { left: ["infobar"], middle: [], right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"] }, enabled: "auto", items: { infobar: { tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>' }, download: { tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>' }, prev: { tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>' }, next: { tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>' }, slideshow: { tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>' }, fullscreen: { tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>' }, thumbs: { tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>' }, close: { tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>' } }, parentEl: null };
var Gt = { tabindex: "-1", width: "24", height: "24", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" };
var Kt = "has-toolbar";
var Jt = "fancybox__toolbar";
var Qt = class extends _ {
  constructor() {
    super(...arguments), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: Zt.Init }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null });
  }
  onReady(t3) {
    var e3;
    if (!t3.carousel)
      return;
    let i3 = this.option("display"), n3 = this.option("absolute"), s3 = this.option("enabled");
    if ("auto" === s3) {
      const t4 = this.instance.carousel;
      let e4 = 0;
      if (t4)
        for (const i4 of t4.slides)
          (i4.panzoom || "image" === i4.type) && e4++;
      e4 || (s3 = false);
    }
    s3 || (i3 = void 0);
    let o3 = 0;
    const a3 = { left: [], middle: [], right: [] };
    if (i3)
      for (const t4 of ["left", "middle", "right"])
        for (const n4 of i3[t4]) {
          const i4 = this.createEl(n4);
          i4 && (null === (e3 = a3[t4]) || void 0 === e3 || e3.push(i4), o3++);
        }
    let r3 = null;
    if (o3 && (r3 = this.createContainer()), r3) {
      for (const [t4, e4] of Object.entries(a3)) {
        const i4 = document.createElement("div");
        P(i4, Jt + "__column is-" + t4);
        for (const t5 of e4)
          i4.appendChild(t5);
        "auto" !== n3 || "middle" !== t4 || e4.length || (n3 = true), r3.appendChild(i4);
      }
      true === n3 && P(r3, "is-absolute"), this.state = Zt.Ready, this.onRefresh();
    } else
      this.state = Zt.Disabled;
  }
  onClick(t3) {
    var e3, i3;
    const n3 = this.instance, s3 = n3.getSlide(), o3 = null == s3 ? void 0 : s3.panzoom, a3 = t3.target, r3 = a3 && E(a3) ? a3.dataset : null;
    if (!r3)
      return;
    if (void 0 !== r3.fancyboxToggleThumbs)
      return t3.preventDefault(), t3.stopPropagation(), void (null === (e3 = n3.plugins.Thumbs) || void 0 === e3 || e3.toggle());
    if (void 0 !== r3.fancyboxToggleFullscreen)
      return t3.preventDefault(), t3.stopPropagation(), void this.instance.toggleFullscreen();
    if (void 0 !== r3.fancyboxToggleSlideshow) {
      t3.preventDefault(), t3.stopPropagation();
      const e4 = null === (i3 = n3.carousel) || void 0 === i3 ? void 0 : i3.plugins.Autoplay;
      let s4 = e4.isActive;
      return o3 && "mousemove" === o3.panMode && !s4 && o3.reset(), void (s4 ? e4.stop() : e4.start());
    }
    const l3 = r3.panzoomAction, c3 = r3.panzoomChange;
    if ((c3 || l3) && (t3.preventDefault(), t3.stopPropagation()), c3) {
      let t4 = {};
      try {
        t4 = JSON.parse(c3);
      } catch (t5) {
      }
      o3 && o3.applyChange(t4);
    } else
      l3 && o3 && o3[l3] && o3[l3]();
  }
  onChange() {
    this.onRefresh();
  }
  onRefresh() {
    if (this.instance.isClosing())
      return;
    const t3 = this.container;
    if (!t3)
      return;
    const e3 = this.instance.getSlide();
    if (!e3 || e3.state !== lt.Ready)
      return;
    const i3 = e3 && !e3.error && e3.panzoom;
    for (const e4 of t3.querySelectorAll("[data-panzoom-action]"))
      i3 ? (e4.removeAttribute("disabled"), e4.removeAttribute("tabindex")) : (e4.setAttribute("disabled", ""), e4.setAttribute("tabindex", "-1"));
    let n3 = i3 && i3.canZoomIn(), s3 = i3 && i3.canZoomOut();
    for (const e4 of t3.querySelectorAll('[data-panzoom-action="zoomIn"]'))
      n3 ? (e4.removeAttribute("disabled"), e4.removeAttribute("tabindex")) : (e4.setAttribute("disabled", ""), e4.setAttribute("tabindex", "-1"));
    for (const e4 of t3.querySelectorAll('[data-panzoom-action="zoomOut"]'))
      s3 ? (e4.removeAttribute("disabled"), e4.removeAttribute("tabindex")) : (e4.setAttribute("disabled", ""), e4.setAttribute("tabindex", "-1"));
    for (const e4 of t3.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')) {
      s3 || n3 ? (e4.removeAttribute("disabled"), e4.removeAttribute("tabindex")) : (e4.setAttribute("disabled", ""), e4.setAttribute("tabindex", "-1"));
      const t4 = e4.querySelector("g");
      t4 && (t4.style.display = n3 ? "" : "none");
    }
  }
  onDone(t3, e3) {
    var i3;
    null === (i3 = e3.panzoom) || void 0 === i3 || i3.on("afterTransform", () => {
      this.instance.isCurrentSlide(e3) && this.onRefresh();
    }), this.instance.isCurrentSlide(e3) && this.onRefresh();
  }
  createContainer() {
    const t3 = this.instance.container;
    if (!t3)
      return null;
    const e3 = this.option("parentEl") || t3;
    let i3 = e3.querySelector("." + Jt);
    return i3 || (i3 = document.createElement("div"), P(i3, Jt), e3.prepend(i3)), i3.addEventListener("click", this.onClick, { passive: false, capture: true }), t3 && P(t3, Kt), this.container = i3, i3;
  }
  createEl(t3) {
    const e3 = this.instance, i3 = e3.carousel;
    if (!i3)
      return null;
    if ("toggleFS" === t3)
      return null;
    if ("fullscreen" === t3 && !ot())
      return null;
    let s3 = null;
    const o3 = i3.slides.length || 0;
    let a3 = 0, r3 = 0;
    for (const t4 of i3.slides)
      (t4.panzoom || "image" === t4.type) && a3++, ("image" === t4.type || t4.downloadSrc) && r3++;
    if (o3 < 2 && ["infobar", "prev", "next"].includes(t3))
      return s3;
    if (void 0 !== Vt[t3] && !a3)
      return null;
    if ("download" === t3 && !r3)
      return null;
    if ("thumbs" === t3) {
      const t4 = e3.plugins.Thumbs;
      if (!t4 || !t4.isEnabled)
        return null;
    }
    if ("slideshow" === t3) {
      if (!i3.plugins.Autoplay || o3 < 2)
        return null;
    }
    if (void 0 !== Vt[t3]) {
      const e4 = Vt[t3];
      s3 = document.createElement("button"), s3.setAttribute("title", this.instance.localize(`{{${t3.toUpperCase()}}}`)), P(s3, "f-button"), e4.action && (s3.dataset.panzoomAction = e4.action), e4.change && (s3.dataset.panzoomChange = JSON.stringify(e4.change)), s3.appendChild(n(this.instance.localize(e4.icon)));
    } else {
      const e4 = (this.option("items") || [])[t3];
      e4 && (s3 = n(this.instance.localize(e4.tpl)), "function" == typeof e4.click && s3.addEventListener("click", (t4) => {
        t4.preventDefault(), t4.stopPropagation(), "function" == typeof e4.click && e4.click.call(this, this, t4);
      }));
    }
    const l3 = null == s3 ? void 0 : s3.querySelector("svg");
    if (l3)
      for (const [t4, e4] of Object.entries(Gt))
        l3.getAttribute(t4) || l3.setAttribute(t4, String(e4));
    return s3;
  }
  removeContainer() {
    const t3 = this.container;
    t3 && t3.remove(), this.container = null, this.state = Zt.Disabled;
    const e3 = this.instance.container;
    e3 && S(e3, Kt);
  }
  attach() {
    const t3 = this, e3 = t3.instance;
    e3.on("Carousel.initSlides", t3.onReady), e3.on("done", t3.onDone), e3.on(["reveal", "Carousel.change"], t3.onChange), t3.onReady(t3.instance);
  }
  detach() {
    const t3 = this, e3 = t3.instance;
    e3.off("Carousel.initSlides", t3.onReady), e3.off("done", t3.onDone), e3.off(["reveal", "Carousel.change"], t3.onChange), t3.removeContainer();
  }
};
Object.defineProperty(Qt, "defaults", { enumerable: true, configurable: true, writable: true, value: Ut });
var te = { Hash: class extends _ {
  onReady() {
    ht = false;
  }
  onChange(t3) {
    ut && clearTimeout(ut);
    const { hash: e3 } = pt(), { hash: i3 } = ft(), n3 = t3.isOpeningSlide(t3.getSlide());
    n3 && (ct = i3 === e3 ? "" : i3), e3 && e3 !== i3 && (ut = setTimeout(() => {
      try {
        if (t3.state === rt.Ready) {
          let t4 = "replaceState";
          n3 && !dt && (t4 = "pushState", dt = true), window.history[t4]({}, document.title, window.location.pathname + window.location.search + e3);
        }
      } catch (t4) {
      }
    }, 300));
  }
  onClose(t3) {
    if (ut && clearTimeout(ut), !ht && dt)
      return dt = false, ht = false, void window.history.back();
    if (!ht)
      try {
        window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (ct || ""));
      } catch (t4) {
      }
  }
  attach() {
    const t3 = this.instance;
    t3.on("ready", this.onReady), t3.on(["Carousel.ready", "Carousel.change"], this.onChange), t3.on("close", this.onClose);
  }
  detach() {
    const t3 = this.instance;
    t3.off("ready", this.onReady), t3.off(["Carousel.ready", "Carousel.change"], this.onChange), t3.off("close", this.onClose);
  }
  static parseURL() {
    return ft();
  }
  static startFromUrl() {
    gt();
  }
  static destroy() {
    window.removeEventListener("hashchange", vt, false);
  }
}, Html: Lt, Images: wt, Slideshow: Dt, Thumbs: Yt, Toolbar: Qt };
var ee = "with-fancybox";
var ie = "hide-scrollbar";
var ne = "--fancybox-scrollbar-compensate";
var se = "--fancybox-body-margin";
var oe = "aria-hidden";
var ae = "is-using-tab";
var re = "is-animated";
var le = "is-compact";
var ce = "is-loading";
var he = "is-opening";
var de = "has-caption";
var ue = "disabled";
var pe = "tabindex";
var fe = "download";
var ge = "href";
var me = "src";
var ve = (t3) => "string" == typeof t3;
var be = function() {
  var t3 = window.getSelection();
  return !!t3 && "Range" === t3.type;
};
var ye;
var we = null;
var xe = null;
var Ee = 0;
var Se = 0;
var Pe = 0;
var Ce = 0;
var Te = /* @__PURE__ */ new Map();
var Me = 0;
var Oe = class extends g {
  get isIdle() {
    return this.idle;
  }
  get isCompact() {
    return this.option("compact");
  }
  constructor(t3 = [], e3 = {}, i3 = {}) {
    super(e3), Object.defineProperty(this, "userSlides", { enumerable: true, configurable: true, writable: true, value: [] }), Object.defineProperty(this, "userPlugins", { enumerable: true, configurable: true, writable: true, value: {} }), Object.defineProperty(this, "idle", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "idleTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "clickTimer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "pwt", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "ignoreFocusChange", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "startedFs", { enumerable: true, configurable: true, writable: true, value: false }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: rt.Init }), Object.defineProperty(this, "id", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "caption", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "footer", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "carousel", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "lastFocus", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "prevMouseMoveEvent", { enumerable: true, configurable: true, writable: true, value: void 0 }), ye || (ye = ot()), this.id = e3.id || ++Me, Te.set(this.id, this), this.userSlides = t3, this.userPlugins = i3, queueMicrotask(() => {
      this.init();
    });
  }
  init() {
    if (this.state === rt.Destroy)
      return;
    this.state = rt.Init, this.attachPlugins(Object.assign(Object.assign({}, Oe.Plugins), this.userPlugins)), this.emit("init"), this.emit("attachPlugins"), true === this.option("hideScrollbar") && (() => {
      if (!et)
        return;
      const t4 = document, e3 = t4.body, i3 = t4.documentElement;
      if (e3.classList.contains(ie))
        return;
      let n3 = window.innerWidth - i3.getBoundingClientRect().width;
      const s3 = parseFloat(window.getComputedStyle(e3).marginRight);
      n3 < 0 && (n3 = 0), i3.style.setProperty(ne, `${n3}px`), s3 && e3.style.setProperty(se, `${s3}px`), e3.classList.add(ie);
    })(), this.initLayout(), this.scale();
    const t3 = () => {
      this.initCarousel(this.userSlides), this.state = rt.Ready, this.attachEvents(), this.emit("ready"), setTimeout(() => {
        this.container && this.container.setAttribute(oe, "false");
      }, 16);
    };
    this.option("Fullscreen.autoStart") && ye && !ye.isFullscreen() ? ye.request().then(() => {
      this.startedFs = true, t3();
    }).catch(() => t3()) : t3();
  }
  initLayout() {
    var t3, e3;
    const i3 = this.option("parentEl") || document.body, s3 = n(this.localize(this.option("tpl.main") || ""));
    if (s3) {
      if (s3.setAttribute("id", `fancybox-${this.id}`), s3.setAttribute("aria-label", this.localize("{{MODAL}}")), s3.classList.toggle(le, this.isCompact), P(s3, this.option("mainClass") || ""), P(s3, he), this.container = s3, this.footer = s3.querySelector(".fancybox__footer"), i3.appendChild(s3), P(document.documentElement, ee), we && xe || (we = document.createElement("span"), P(we, "fancybox-focus-guard"), we.setAttribute(pe, "0"), we.setAttribute(oe, "true"), we.setAttribute("aria-label", "Focus guard"), xe = we.cloneNode(), null === (t3 = s3.parentElement) || void 0 === t3 || t3.insertBefore(we, s3), null === (e3 = s3.parentElement) || void 0 === e3 || e3.append(xe)), s3.addEventListener("mousedown", (t4) => {
        Ee = t4.pageX, Se = t4.pageY, S(s3, ae);
      }), this.option("closeExisting"))
        for (const t4 of Te.values())
          t4.id !== this.id && t4.close();
      else
        this.option("animated") && (P(s3, re), setTimeout(() => {
          this.isClosing() || S(s3, re);
        }, 350));
      this.emit("initLayout");
    }
  }
  initCarousel(t3) {
    const i3 = this.container;
    if (!i3)
      return;
    const n3 = i3.querySelector(".fancybox__carousel");
    if (!n3)
      return;
    const s3 = this.carousel = new Q(n3, u({}, { slides: t3, transition: "fade", Panzoom: { lockAxis: this.option("dragToClose") ? "xy" : "x", infinite: !!this.option("dragToClose") && "y" }, Dots: false, Navigation: { classes: { container: "fancybox__nav", button: "f-button", isNext: "is-next", isPrev: "is-prev" } }, initialPage: this.option("startIndex"), l10n: this.option("l10n") }, this.option("Carousel") || {}));
    s3.on("*", (t4, e3, ...i4) => {
      this.emit(`Carousel.${e3}`, t4, ...i4);
    }), s3.on(["ready", "change"], () => {
      this.manageCaption();
    }), this.on("Carousel.removeSlide", (t4, e3, i4) => {
      this.clearContent(i4), i4.state = void 0;
    }), s3.on("Panzoom.touchStart", () => {
      var t4, e3;
      this.isCompact || this.endIdle(), (null === (t4 = document.activeElement) || void 0 === t4 ? void 0 : t4.closest(".f-thumbs")) && (null === (e3 = this.container) || void 0 === e3 || e3.focus());
    }), s3.on("settle", () => {
      this.idleTimer || this.isCompact || !this.option("idle") || this.setIdle(), this.option("autoFocus") && !this.isClosing && this.checkFocus();
    }), this.option("dragToClose") && (s3.on("Panzoom.afterTransform", (t4, i4) => {
      const n4 = this.getSlide();
      if (n4 && e(n4.el))
        return;
      const s4 = this.container;
      if (s4) {
        const t5 = Math.abs(i4.current.f), e3 = t5 < 1 ? "" : Math.max(0.5, Math.min(1, 1 - t5 / i4.contentRect.fitHeight * 1.5));
        s4.style.setProperty("--fancybox-ts", e3 ? "0s" : ""), s4.style.setProperty("--fancybox-opacity", e3 + "");
      }
    }), s3.on("Panzoom.touchEnd", (t4, i4, n4) => {
      var s4;
      const o3 = this.getSlide();
      if (o3 && e(o3.el))
        return;
      if (i4.isMobile && document.activeElement && -1 !== ["TEXTAREA", "INPUT"].indexOf(null === (s4 = document.activeElement) || void 0 === s4 ? void 0 : s4.nodeName))
        return;
      const a3 = Math.abs(i4.dragOffset.y);
      "y" === i4.lockedAxis && (a3 >= 200 || a3 >= 50 && i4.dragOffset.time < 300) && (n4 && n4.cancelable && n4.preventDefault(), this.close(n4, "f-throwOut" + (i4.current.f < 0 ? "Up" : "Down")));
    })), s3.on("change", (t4) => {
      var e3;
      let i4 = null === (e3 = this.getSlide()) || void 0 === e3 ? void 0 : e3.triggerEl;
      if (i4) {
        const e4 = new CustomEvent("slideTo", { bubbles: true, cancelable: true, detail: t4.page });
        i4.dispatchEvent(e4);
      }
    }), s3.on(["refresh", "change"], (t4) => {
      const e3 = this.container;
      if (!e3)
        return;
      for (const i5 of e3.querySelectorAll("[data-fancybox-current-index]"))
        i5.innerHTML = t4.page + 1;
      for (const i5 of e3.querySelectorAll("[data-fancybox-count]"))
        i5.innerHTML = t4.pages.length;
      if (!t4.isInfinite) {
        for (const i5 of e3.querySelectorAll("[data-fancybox-next]"))
          t4.page < t4.pages.length - 1 ? (i5.removeAttribute(ue), i5.removeAttribute(pe)) : (i5.setAttribute(ue, ""), i5.setAttribute(pe, "-1"));
        for (const i5 of e3.querySelectorAll("[data-fancybox-prev]"))
          t4.page > 0 ? (i5.removeAttribute(ue), i5.removeAttribute(pe)) : (i5.setAttribute(ue, ""), i5.setAttribute(pe, "-1"));
      }
      const i4 = this.getSlide();
      if (!i4)
        return;
      let n4 = i4.downloadSrc || "";
      n4 || "image" !== i4.type || i4.error || !ve(i4[me]) || (n4 = i4[me]);
      for (const t5 of e3.querySelectorAll("[data-fancybox-download]")) {
        const e4 = i4.downloadFilename;
        n4 ? (t5.removeAttribute(ue), t5.removeAttribute(pe), t5.setAttribute(ge, n4), t5.setAttribute(fe, e4 || n4), t5.setAttribute("target", "_blank")) : (t5.setAttribute(ue, ""), t5.setAttribute(pe, "-1"), t5.removeAttribute(ge), t5.removeAttribute(fe));
      }
    }), this.emit("initCarousel");
  }
  attachEvents() {
    const t3 = this, e3 = t3.container;
    if (!e3)
      return;
    e3.addEventListener("click", t3.onClick, { passive: false, capture: false }), e3.addEventListener("wheel", t3.onWheel, { passive: false, capture: false }), document.addEventListener("keydown", t3.onKeydown, { passive: false, capture: true }), document.addEventListener("visibilitychange", t3.onVisibilityChange, false), document.addEventListener("mousemove", t3.onMousemove), t3.option("trapFocus") && document.addEventListener("focus", t3.onFocus, true), window.addEventListener("resize", t3.onResize);
    const i3 = window.visualViewport;
    i3 && (i3.addEventListener("scroll", t3.onResize), i3.addEventListener("resize", t3.onResize));
  }
  detachEvents() {
    const t3 = this, e3 = t3.container;
    if (!e3)
      return;
    document.removeEventListener("keydown", t3.onKeydown, { passive: false, capture: true }), e3.removeEventListener("wheel", t3.onWheel, { passive: false, capture: false }), e3.removeEventListener("click", t3.onClick, { passive: false, capture: false }), document.removeEventListener("mousemove", t3.onMousemove), window.removeEventListener("resize", t3.onResize);
    const i3 = window.visualViewport;
    i3 && (i3.removeEventListener("resize", t3.onResize), i3.removeEventListener("scroll", t3.onResize)), document.removeEventListener("visibilitychange", t3.onVisibilityChange, false), document.removeEventListener("focus", t3.onFocus, true);
  }
  scale() {
    const t3 = this.container;
    if (!t3)
      return;
    const e3 = window.visualViewport, i3 = Math.max(1, (null == e3 ? void 0 : e3.scale) || 1);
    let n3 = "", s3 = "", o3 = "";
    if (e3 && i3 > 1) {
      let t4 = `${e3.offsetLeft}px`, a3 = `${e3.offsetTop}px`;
      n3 = e3.width * i3 + "px", s3 = e3.height * i3 + "px", o3 = `translate3d(${t4}, ${a3}, 0) scale(${1 / i3})`;
    }
    t3.style.transform = o3, t3.style.width = n3, t3.style.height = s3;
  }
  onClick(t3) {
    var e3;
    const { container: i3, isCompact: n3 } = this;
    if (!i3 || this.isClosing())
      return;
    !n3 && this.option("idle") && this.resetIdle();
    const s3 = t3.composedPath()[0];
    if (s3.closest(".fancybox-spinner") || s3.closest("[data-fancybox-close]"))
      return t3.preventDefault(), void this.close(t3);
    if (s3.closest("[data-fancybox-prev]"))
      return t3.preventDefault(), void this.prev();
    if (s3.closest("[data-fancybox-next]"))
      return t3.preventDefault(), void this.next();
    if ("click" === t3.type && 0 === t3.detail)
      return;
    if (Math.abs(t3.pageX - Ee) > 30 || Math.abs(t3.pageY - Se) > 30)
      return;
    const o3 = document.activeElement;
    if (be() && o3 && i3.contains(o3))
      return;
    if (n3 && "image" === (null === (e3 = this.getSlide()) || void 0 === e3 ? void 0 : e3.type))
      return void (this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null) : this.clickTimer = setTimeout(() => {
        this.toggleIdle(), this.clickTimer = null;
      }, 350));
    if (this.emit("click", t3), t3.defaultPrevented)
      return;
    let a3 = false;
    if (s3.closest(".fancybox__content")) {
      if (o3) {
        if (o3.closest("[contenteditable]"))
          return;
        s3.matches(nt) || o3.blur();
      }
      if (be())
        return;
      a3 = this.option("contentClick");
    } else
      s3.closest(".fancybox__carousel") && !s3.matches(nt) && (a3 = this.option("backdropClick"));
    "close" === a3 ? (t3.preventDefault(), this.close(t3)) : "next" === a3 ? (t3.preventDefault(), this.next()) : "prev" === a3 && (t3.preventDefault(), this.prev());
  }
  onWheel(t3) {
    const e3 = t3.target;
    let n3 = this.option("wheel", t3);
    e3.closest(".fancybox__thumbs") && (n3 = "slide");
    const s3 = "slide" === n3, o3 = [-t3.deltaX || 0, -t3.deltaY || 0, -t3.detail || 0].reduce(function(t4, e4) {
      return Math.abs(e4) > Math.abs(t4) ? e4 : t4;
    }), a3 = Math.max(-1, Math.min(1, o3)), r3 = Date.now();
    this.pwt && r3 - this.pwt < 300 ? s3 && t3.preventDefault() : (this.pwt = r3, this.emit("wheel", t3, a3), t3.defaultPrevented || ("close" === n3 ? (t3.preventDefault(), this.close(t3)) : "slide" === n3 && (i(e3) || (t3.preventDefault(), this[a3 > 0 ? "prev" : "next"]()))));
  }
  onScroll() {
    window.scrollTo(Pe, Ce);
  }
  onKeydown(t3) {
    if (!this.isTopmost())
      return;
    this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
    const e3 = t3.key, i3 = this.option("keyboard");
    if (!i3)
      return;
    const n3 = t3.composedPath()[0], s3 = document.activeElement && document.activeElement.classList, o3 = s3 && s3.contains("f-button") || n3.dataset.carouselPage || n3.dataset.carouselIndex;
    if ("Escape" !== e3 && !o3 && E(n3)) {
      if (n3.isContentEditable || -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(n3.nodeName))
        return;
    }
    if ("Tab" === t3.key ? P(this.container, ae) : S(this.container, ae), t3.ctrlKey || t3.altKey || t3.shiftKey)
      return;
    this.emit("keydown", e3, t3);
    const a3 = i3[e3];
    a3 && "function" == typeof this[a3] && (t3.preventDefault(), this[a3]());
  }
  onResize() {
    const t3 = this.container;
    if (!t3)
      return;
    const e3 = this.isCompact;
    t3.classList.toggle(le, e3), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), this.scale(), this.emit("resize");
  }
  onFocus(t3) {
    this.isTopmost() && this.checkFocus(t3);
  }
  onMousemove(t3) {
    this.prevMouseMoveEvent = t3, !this.isCompact && this.option("idle") && this.resetIdle();
  }
  onVisibilityChange() {
    "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
  }
  manageCloseBtn(t3) {
    const e3 = this.optionFor(t3, "closeButton") || false;
    if ("auto" === e3) {
      const t4 = this.plugins.Toolbar;
      if (t4 && t4.state === Zt.Ready)
        return;
    }
    if (!e3)
      return;
    if (!t3.contentEl || t3.closeBtnEl)
      return;
    const i3 = this.option("tpl.closeButton");
    if (i3) {
      const e4 = n(this.localize(i3));
      t3.closeBtnEl = t3.contentEl.appendChild(e4), t3.el && P(t3.el, "has-close-btn");
    }
  }
  manageCaption(t3 = void 0) {
    var e3, i3;
    const n3 = "fancybox__caption", s3 = this.container;
    if (!s3)
      return;
    S(s3, de);
    const o3 = this.isCompact || this.option("commonCaption"), a3 = !o3;
    if (this.caption && this.stop(this.caption), a3 && this.caption && (this.caption.remove(), this.caption = null), o3 && !this.caption)
      for (const t4 of (null === (e3 = this.carousel) || void 0 === e3 ? void 0 : e3.slides) || [])
        t4.captionEl && (t4.captionEl.remove(), t4.captionEl = void 0, S(t4.el, de), null === (i3 = t4.el) || void 0 === i3 || i3.removeAttribute("aria-labelledby"));
    if (t3 || (t3 = this.getSlide()), !t3 || o3 && !this.isCurrentSlide(t3))
      return;
    const r3 = t3.el;
    let l3 = this.optionFor(t3, "caption", "");
    if (!l3)
      return void (o3 && this.caption && this.animate(this.caption, "f-fadeOut", () => {
        this.caption && (this.caption.innerHTML = "");
      }));
    let c3 = null;
    if (a3) {
      if (c3 = t3.captionEl || null, r3 && !c3) {
        const e4 = n3 + `_${this.id}_${t3.index}`;
        c3 = document.createElement("div"), P(c3, n3), c3.setAttribute("id", e4), t3.captionEl = r3.appendChild(c3), P(r3, de), r3.setAttribute("aria-labelledby", e4);
      }
    } else {
      if (c3 = this.caption, c3 || (c3 = s3.querySelector("." + n3)), !c3) {
        c3 = document.createElement("div"), c3.dataset.fancyboxCaption = "", P(c3, n3);
        (this.footer || s3).prepend(c3);
      }
      P(s3, de), this.caption = c3;
    }
    c3 && (c3.innerHTML = "", ve(l3) || "number" == typeof l3 ? c3.innerHTML = l3 + "" : l3 instanceof HTMLElement && c3.appendChild(l3));
  }
  checkFocus(t3) {
    this.focus(t3);
  }
  focus(t3) {
    var e3;
    if (this.ignoreFocusChange)
      return;
    const i3 = document.activeElement || null, n3 = (null == t3 ? void 0 : t3.target) || null, s3 = this.container, o3 = null === (e3 = this.carousel) || void 0 === e3 ? void 0 : e3.viewport;
    if (!s3 || !o3)
      return;
    if (!t3 && i3 && s3.contains(i3))
      return;
    const a3 = this.getSlide(), r3 = a3 && a3.state === lt.Ready ? a3.el : null;
    if (!r3 || r3.contains(i3) || s3 === i3)
      return;
    t3 && t3.cancelable && t3.preventDefault(), this.ignoreFocusChange = true;
    const l3 = Array.from(s3.querySelectorAll(nt));
    let c3 = [], h3 = null;
    for (let t4 of l3) {
      const e4 = !t4.offsetParent || !!t4.closest('[aria-hidden="true"]'), i4 = r3 && r3.contains(t4), n4 = !o3.contains(t4);
      if (t4 === s3 || (i4 || n4) && !e4) {
        c3.push(t4);
        const e5 = t4.dataset.origTabindex;
        void 0 !== e5 && e5 && (t4.tabIndex = parseFloat(e5)), t4.removeAttribute("data-orig-tabindex"), !t4.hasAttribute("autoFocus") && h3 || (h3 = t4);
      } else {
        const e5 = void 0 === t4.dataset.origTabindex ? t4.getAttribute("tabindex") || "" : t4.dataset.origTabindex;
        e5 && (t4.dataset.origTabindex = e5), t4.tabIndex = -1;
      }
    }
    let d3 = null;
    t3 ? (!n3 || c3.indexOf(n3) < 0) && (d3 = h3 || s3, c3.length && (i3 === xe ? d3 = c3[0] : this.lastFocus !== s3 && i3 !== we || (d3 = c3[c3.length - 1]))) : d3 = a3 && "image" === a3.type ? s3 : h3 || s3, d3 && st(d3), this.lastFocus = document.activeElement, this.ignoreFocusChange = false;
  }
  next() {
    const t3 = this.carousel;
    t3 && t3.pages.length > 1 && t3.slideNext();
  }
  prev() {
    const t3 = this.carousel;
    t3 && t3.pages.length > 1 && t3.slidePrev();
  }
  jumpTo(...t3) {
    this.carousel && this.carousel.slideTo(...t3);
  }
  isTopmost() {
    var t3;
    return (null === (t3 = Oe.getInstance()) || void 0 === t3 ? void 0 : t3.id) == this.id;
  }
  animate(t3 = null, e3 = "", i3) {
    if (!t3 || !e3)
      return void (i3 && i3());
    this.stop(t3);
    const n3 = (s3) => {
      s3.target === t3 && t3.dataset.animationName && (t3.removeEventListener("animationend", n3), delete t3.dataset.animationName, i3 && i3(), S(t3, e3));
    };
    t3.dataset.animationName = e3, t3.addEventListener("animationend", n3), P(t3, e3);
  }
  stop(t3) {
    t3 && t3.dispatchEvent(new CustomEvent("animationend", { bubbles: false, cancelable: true, currentTarget: t3 }));
  }
  setContent(t3, e3 = "", i3 = true) {
    if (this.isClosing())
      return;
    const s3 = t3.el;
    if (!s3)
      return;
    let o3 = null;
    if (E(e3) ? o3 = e3 : (o3 = n(e3 + ""), E(o3) || (o3 = document.createElement("div"), o3.innerHTML = e3 + "")), ["img", "picture", "iframe", "video", "audio"].includes(o3.nodeName.toLowerCase())) {
      const t4 = document.createElement("div");
      t4.appendChild(o3), o3 = t4;
    }
    E(o3) && t3.filter && !t3.error && (o3 = o3.querySelector(t3.filter)), o3 && E(o3) ? (P(o3, "fancybox__content"), t3.id && o3.setAttribute("id", t3.id), s3.classList.add(`has-${t3.error ? "error" : t3.type || "unknown"}`), s3.prepend(o3), "none" === o3.style.display && (o3.style.display = ""), "none" === getComputedStyle(o3).getPropertyValue("display") && (o3.style.display = t3.display || this.option("defaultDisplay") || "flex"), t3.contentEl = o3, i3 && this.revealContent(t3), this.manageCloseBtn(t3), this.manageCaption(t3)) : this.setError(t3, "{{ELEMENT_NOT_FOUND}}");
  }
  revealContent(t3, e3) {
    const i3 = t3.el, n3 = t3.contentEl;
    i3 && n3 && (this.emit("reveal", t3), this.hideLoading(t3), t3.state = lt.Opening, (e3 = this.isOpeningSlide(t3) ? void 0 === e3 ? this.optionFor(t3, "showClass") : e3 : "f-fadeIn") ? this.animate(n3, e3, () => {
      this.done(t3);
    }) : this.done(t3));
  }
  done(t3) {
    this.isClosing() || (t3.state = lt.Ready, this.emit("done", t3), P(t3.el, "is-done"), this.isCurrentSlide(t3) && this.option("autoFocus") && queueMicrotask(() => {
      var e3;
      null === (e3 = t3.panzoom) || void 0 === e3 || e3.updateControls(), this.option("autoFocus") && this.focus();
    }), this.isOpeningSlide(t3) && (S(this.container, he), !this.isCompact && this.option("idle") && this.setIdle()));
  }
  isCurrentSlide(t3) {
    const e3 = this.getSlide();
    return !(!t3 || !e3) && e3.index === t3.index;
  }
  isOpeningSlide(t3) {
    var e3, i3;
    return null === (null === (e3 = this.carousel) || void 0 === e3 ? void 0 : e3.prevPage) && t3 && t3.index === (null === (i3 = this.getSlide()) || void 0 === i3 ? void 0 : i3.index);
  }
  showLoading(t3) {
    t3.state = lt.Loading;
    const e3 = t3.el;
    if (!e3)
      return;
    P(e3, ce), this.emit("loading", t3), t3.spinnerEl || setTimeout(() => {
      if (!this.isClosing() && !t3.spinnerEl && t3.state === lt.Loading) {
        let i3 = n(x);
        P(i3, "fancybox-spinner"), t3.spinnerEl = i3, e3.prepend(i3), this.animate(i3, "f-fadeIn");
      }
    }, 250);
  }
  hideLoading(t3) {
    const e3 = t3.el;
    if (!e3)
      return;
    const i3 = t3.spinnerEl;
    this.isClosing() ? null == i3 || i3.remove() : (S(e3, ce), i3 && this.animate(i3, "f-fadeOut", () => {
      i3.remove();
    }), t3.state === lt.Loading && (this.emit("loaded", t3), t3.state = lt.Ready));
  }
  setError(t3, e3) {
    if (this.isClosing())
      return;
    const i3 = new Event("error", { bubbles: true, cancelable: true });
    if (this.emit("error", i3, t3), i3.defaultPrevented)
      return;
    t3.error = e3, this.hideLoading(t3), this.clearContent(t3);
    const n3 = document.createElement("div");
    n3.classList.add("fancybox-error"), n3.innerHTML = this.localize(e3 || "<p>{{ERROR}}</p>"), this.setContent(t3, n3);
  }
  clearContent(t3) {
    if (void 0 === t3.state)
      return;
    this.emit("clearContent", t3), t3.contentEl && (t3.contentEl.remove(), t3.contentEl = void 0);
    const e3 = t3.el;
    e3 && (S(e3, "has-error"), S(e3, "has-unknown"), S(e3, `has-${t3.type || "unknown"}`)), t3.closeBtnEl && t3.closeBtnEl.remove(), t3.closeBtnEl = void 0, t3.captionEl && t3.captionEl.remove(), t3.captionEl = void 0, t3.spinnerEl && t3.spinnerEl.remove(), t3.spinnerEl = void 0;
  }
  getSlide() {
    var t3;
    const e3 = this.carousel;
    return (null === (t3 = null == e3 ? void 0 : e3.pages[null == e3 ? void 0 : e3.page]) || void 0 === t3 ? void 0 : t3.slides[0]) || void 0;
  }
  close(t3, e3) {
    if (this.isClosing())
      return;
    const i3 = new Event("shouldClose", { bubbles: true, cancelable: true });
    if (this.emit("shouldClose", i3, t3), i3.defaultPrevented)
      return;
    t3 && t3.cancelable && (t3.preventDefault(), t3.stopPropagation());
    const n3 = () => {
      this.proceedClose(t3, e3);
    };
    this.startedFs && ye && ye.isFullscreen() ? Promise.resolve(ye.exit()).then(() => n3()) : n3();
  }
  clearIdle() {
    this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
  }
  setIdle(t3 = false) {
    const e3 = () => {
      this.clearIdle(), this.idle = true, P(this.container, "is-idle"), this.emit("setIdle");
    };
    if (this.clearIdle(), !this.isClosing())
      if (t3)
        e3();
      else {
        const t4 = this.option("idle");
        t4 && (this.idleTimer = setTimeout(e3, t4));
      }
  }
  endIdle() {
    this.clearIdle(), this.idle && !this.isClosing() && (this.idle = false, S(this.container, "is-idle"), this.emit("endIdle"));
  }
  resetIdle() {
    this.endIdle(), this.setIdle();
  }
  toggleIdle() {
    this.idle ? this.endIdle() : this.setIdle(true);
  }
  toggleFullscreen() {
    ye && (ye.isFullscreen() ? ye.exit() : ye.request().then(() => {
      this.startedFs = true;
    }));
  }
  isClosing() {
    return [rt.Closing, rt.CustomClosing, rt.Destroy].includes(this.state);
  }
  proceedClose(t3, e3) {
    var i3, n3;
    this.state = rt.Closing, this.clearIdle(), this.detachEvents();
    const s3 = this.container, o3 = this.carousel, a3 = this.getSlide(), r3 = a3 && this.option("placeFocusBack") ? a3.triggerEl || this.option("triggerEl") : null;
    if (r3 && (tt(r3) ? st(r3) : r3.focus()), s3 && (S(s3, he), P(s3, "is-closing"), s3.setAttribute(oe, "true"), this.option("animated") && P(s3, re), s3.style.pointerEvents = "none"), o3) {
      o3.clearTransitions(), null === (i3 = o3.panzoom) || void 0 === i3 || i3.destroy(), null === (n3 = o3.plugins.Navigation) || void 0 === n3 || n3.detach();
      for (const t4 of o3.slides) {
        t4.state = lt.Closing, this.hideLoading(t4);
        const e4 = t4.contentEl;
        e4 && this.stop(e4);
        const i4 = null == t4 ? void 0 : t4.panzoom;
        i4 && (i4.stop(), i4.detachEvents(), i4.detachObserver()), this.isCurrentSlide(t4) || o3.emit("removeSlide", t4);
      }
    }
    Pe = window.scrollX, Ce = window.scrollY, window.addEventListener("scroll", this.onScroll), this.emit("close", t3), this.state !== rt.CustomClosing ? (void 0 === e3 && a3 && (e3 = this.optionFor(a3, "hideClass")), e3 && a3 ? (this.animate(a3.contentEl, e3, () => {
      o3 && o3.emit("removeSlide", a3);
    }), setTimeout(() => {
      this.destroy();
    }, 500)) : this.destroy()) : setTimeout(() => {
      this.destroy();
    }, 500);
  }
  destroy() {
    var t3;
    if (this.state === rt.Destroy)
      return;
    window.removeEventListener("scroll", this.onScroll), this.state = rt.Destroy, null === (t3 = this.carousel) || void 0 === t3 || t3.destroy();
    const e3 = this.container;
    e3 && e3.remove(), Te.delete(this.id);
    const i3 = Oe.getInstance();
    i3 ? i3.focus() : (we && (we.remove(), we = null), xe && (xe.remove(), xe = null), S(document.documentElement, ee), (() => {
      if (!et)
        return;
      const t4 = document, e4 = t4.body;
      e4.classList.remove(ie), e4.style.setProperty(se, ""), t4.documentElement.style.setProperty(ne, "");
    })(), this.emit("destroy"));
  }
  static bind(t3, e3, i3) {
    if (!et)
      return;
    let n3, s3 = "", o3 = {};
    if (void 0 === t3 ? n3 = document.body : ve(t3) ? (n3 = document.body, s3 = t3, "object" == typeof e3 && (o3 = e3 || {})) : (n3 = t3, ve(e3) && (s3 = e3), "object" == typeof i3 && (o3 = i3 || {})), !n3 || !E(n3))
      return;
    s3 = s3 || "[data-fancybox]";
    const a3 = Oe.openers.get(n3) || /* @__PURE__ */ new Map();
    a3.set(s3, o3), Oe.openers.set(n3, a3), 1 === a3.size && n3.addEventListener("click", Oe.fromEvent);
  }
  static unbind(t3, e3) {
    let i3, n3 = "";
    if (ve(t3) ? (i3 = document.body, n3 = t3) : (i3 = t3, ve(e3) && (n3 = e3)), !i3)
      return;
    const s3 = Oe.openers.get(i3);
    s3 && n3 && s3.delete(n3), n3 && s3 || (Oe.openers.delete(i3), i3.removeEventListener("click", Oe.fromEvent));
  }
  static destroy() {
    let t3;
    for (; t3 = Oe.getInstance(); )
      t3.destroy();
    for (const t4 of Oe.openers.keys())
      t4.removeEventListener("click", Oe.fromEvent);
    Oe.openers = /* @__PURE__ */ new Map();
  }
  static fromEvent(t3) {
    if (t3.defaultPrevented)
      return;
    if (t3.button && 0 !== t3.button)
      return;
    if (t3.ctrlKey || t3.metaKey || t3.shiftKey)
      return;
    let e3 = t3.composedPath()[0];
    const i3 = e3.closest("[data-fancybox-trigger]");
    if (i3) {
      const t4 = i3.dataset.fancyboxTrigger || "", n4 = document.querySelectorAll(`[data-fancybox="${t4}"]`), s4 = parseInt(i3.dataset.fancyboxIndex || "", 10) || 0;
      e3 = n4[s4] || e3;
    }
    if (!(e3 && e3 instanceof Element))
      return;
    let n3, s3, o3, a3;
    if ([...Oe.openers].reverse().find(([t4, i4]) => !(!t4.contains(e3) || ![...i4].reverse().find(([i5, r4]) => {
      let l4 = e3.closest(i5);
      return !!l4 && (n3 = t4, s3 = i5, o3 = l4, a3 = r4, true);
    }))), !n3 || !s3 || !o3)
      return;
    a3 = a3 || {}, t3.preventDefault(), e3 = o3;
    let r3 = [], l3 = u({}, at, a3);
    l3.event = t3, l3.triggerEl = e3, l3.delegate = i3;
    const c3 = l3.groupAll, h3 = l3.groupAttr, d3 = h3 && e3 ? e3.getAttribute(`${h3}`) : "";
    if ((!e3 || d3 || c3) && (r3 = [].slice.call(n3.querySelectorAll(s3))), e3 && !c3 && (r3 = d3 ? r3.filter((t4) => t4.getAttribute(`${h3}`) === d3) : [e3]), !r3.length)
      return;
    const p3 = Oe.getInstance();
    return p3 && p3.options.triggerEl && r3.indexOf(p3.options.triggerEl) > -1 ? void 0 : (e3 && (l3.startIndex = r3.indexOf(e3)), Oe.fromNodes(r3, l3));
  }
  static fromSelector(t3, e3, i3) {
    let n3 = null, s3 = "", o3 = {};
    if (ve(t3) ? (n3 = document.body, s3 = t3, "object" == typeof e3 && (o3 = e3 || {})) : t3 instanceof HTMLElement && ve(e3) && (n3 = t3, s3 = e3, "object" == typeof i3 && (o3 = i3 || {})), !n3 || !s3)
      return false;
    const a3 = Oe.openers.get(n3);
    return !!a3 && (o3 = u({}, a3.get(s3) || {}, o3), !!o3 && Oe.fromNodes(Array.from(n3.querySelectorAll(s3)), o3));
  }
  static fromNodes(t3, e3) {
    e3 = u({}, at, e3 || {});
    const i3 = [];
    for (const n3 of t3) {
      const t4 = n3.dataset || {}, s3 = t4[me] || n3.getAttribute(ge) || n3.getAttribute("currentSrc") || n3.getAttribute(me) || void 0;
      let o3;
      const a3 = e3.delegate;
      let r3;
      a3 && i3.length === e3.startIndex && (o3 = a3 instanceof HTMLImageElement ? a3 : a3.querySelector("img:not([aria-hidden])")), o3 || (o3 = n3 instanceof HTMLImageElement ? n3 : n3.querySelector("img:not([aria-hidden])")), o3 && (r3 = o3.currentSrc || o3[me] || void 0, !r3 && o3.dataset && (r3 = o3.dataset.lazySrc || o3.dataset[me] || void 0));
      const l3 = { src: s3, triggerEl: n3, thumbEl: o3, thumbElSrc: r3, thumbSrc: r3 };
      for (const e4 in t4) {
        let i4 = t4[e4] + "";
        i4 = "false" !== i4 && ("true" === i4 || i4), l3[e4] = i4;
      }
      i3.push(l3);
    }
    return new Oe(i3, e3);
  }
  static getInstance(t3) {
    if (t3)
      return Te.get(t3);
    return Array.from(Te.values()).reverse().find((t4) => !t4.isClosing() && t4) || null;
  }
  static getSlide() {
    var t3;
    return (null === (t3 = Oe.getInstance()) || void 0 === t3 ? void 0 : t3.getSlide()) || null;
  }
  static show(t3 = [], e3 = {}) {
    return new Oe(t3, e3);
  }
  static next() {
    const t3 = Oe.getInstance();
    t3 && t3.next();
  }
  static prev() {
    const t3 = Oe.getInstance();
    t3 && t3.prev();
  }
  static close(t3 = true, ...e3) {
    if (t3)
      for (const t4 of Te.values())
        t4.close(...e3);
    else {
      const t4 = Oe.getInstance();
      t4 && t4.close(...e3);
    }
  }
};
Object.defineProperty(Oe, "version", { enumerable: true, configurable: true, writable: true, value: "5.0.36" }), Object.defineProperty(Oe, "defaults", { enumerable: true, configurable: true, writable: true, value: at }), Object.defineProperty(Oe, "Plugins", { enumerable: true, configurable: true, writable: true, value: te }), Object.defineProperty(Oe, "openers", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Map() });

// src/i10n/Carousel/vi.ts
var vi = {
  NEXT: "Ti\u1EBFp",
  PREV: "Tr\u01B0\u1EDBc",
  GOTO: "\u0110i \u0111\u1EBFn slide #%d"
};

// node_modules/@fancyapps/ui/dist/carousel/carousel.thumbs.esm.js
var t2 = (e3, ...i3) => {
  const s3 = i3.length;
  for (let n3 = 0; n3 < s3; n3++) {
    const s4 = i3[n3] || {};
    Object.entries(s4).forEach(([i4, s5]) => {
      const n4 = Array.isArray(s5) ? [] : {};
      var r3;
      e3[i4] || Object.assign(e3, { [i4]: n4 }), "object" == typeof (r3 = s5) && null !== r3 && r3.constructor === Object && "[object Object]" === Object.prototype.toString.call(r3) ? Object.assign(e3[i4], t2(n4, s5)) : Array.isArray(s5) ? Object.assign(e3, { [i4]: [...s5] }) : Object.assign(e3, { [i4]: s5 });
    });
  }
  return e3;
};
var e2 = (t3) => `${t3 || ""}`.split(" ").filter((t4) => !!t4);
var i2 = (t3, i3) => {
  t3 && e2(i3).forEach((e3) => {
    t3.classList.add(e3);
  });
};
var s2 = (t3, i3) => {
  t3 && e2(i3).forEach((e3) => {
    t3.classList.remove(e3);
  });
};
var n2 = function(t3, e3) {
  return t3.split(".").reduce((t4, e4) => "object" == typeof t4 ? t4[e4] : void 0, e3);
};
var r2 = class {
  constructor(t3 = {}) {
    Object.defineProperty(this, "options", { enumerable: true, configurable: true, writable: true, value: t3 }), Object.defineProperty(this, "events", { enumerable: true, configurable: true, writable: true, value: /* @__PURE__ */ new Map() }), this.setOptions(t3);
    for (const t4 of Object.getOwnPropertyNames(Object.getPrototypeOf(this)))
      t4.startsWith("on") && "function" == typeof this[t4] && (this[t4] = this[t4].bind(this));
  }
  setOptions(e3) {
    this.options = e3 ? t2({}, this.constructor.defaults, e3) : {};
    for (const [t3, e4] of Object.entries(this.option("on") || {}))
      this.on(t3, e4);
  }
  option(t3, ...e3) {
    let i3 = n2(t3, this.options);
    return i3 && "function" == typeof i3 && (i3 = i3.call(this, this, ...e3)), i3;
  }
  optionFor(t3, e3, i3, ...s3) {
    let r3 = n2(e3, t3);
    var o3;
    "string" != typeof (o3 = r3) || isNaN(o3) || isNaN(parseFloat(o3)) || (r3 = parseFloat(r3)), "true" === r3 && (r3 = true), "false" === r3 && (r3 = false), r3 && "function" == typeof r3 && (r3 = r3.call(this, this, t3, ...s3));
    let a3 = n2(e3, this.options);
    return a3 && "function" == typeof a3 ? r3 = a3.call(this, this, t3, ...s3, r3) : void 0 === r3 && (r3 = a3), void 0 === r3 ? i3 : r3;
  }
  cn(t3) {
    const e3 = this.options.classes;
    return e3 && e3[t3] || "";
  }
  localize(t3, e3 = []) {
    t3 = String(t3).replace(/\{\{(\w+).?(\w+)?\}\}/g, (t4, e4, i3) => {
      let s3 = "";
      return i3 ? s3 = this.option(`${e4[0] + e4.toLowerCase().substring(1)}.l10n.${i3}`) : e4 && (s3 = this.option(`l10n.${e4}`)), s3 || (s3 = t4), s3;
    });
    for (let i3 = 0; i3 < e3.length; i3++)
      t3 = t3.split(e3[i3][0]).join(e3[i3][1]);
    return t3 = t3.replace(/\{\{(.*?)\}\}/g, (t4, e4) => e4);
  }
  on(t3, e3) {
    let i3 = [];
    "string" == typeof t3 ? i3 = t3.split(" ") : Array.isArray(t3) && (i3 = t3), this.events || (this.events = /* @__PURE__ */ new Map()), i3.forEach((t4) => {
      let i4 = this.events.get(t4);
      i4 || (this.events.set(t4, []), i4 = []), i4.includes(e3) || i4.push(e3), this.events.set(t4, i4);
    });
  }
  off(t3, e3) {
    let i3 = [];
    "string" == typeof t3 ? i3 = t3.split(" ") : Array.isArray(t3) && (i3 = t3), i3.forEach((t4) => {
      const i4 = this.events.get(t4);
      if (Array.isArray(i4)) {
        const t5 = i4.indexOf(e3);
        t5 > -1 && i4.splice(t5, 1);
      }
    });
  }
  emit(t3, ...e3) {
    [...this.events.get(t3) || []].forEach((t4) => t4(this, ...e3)), "*" !== t3 && this.emit("*", t3, ...e3);
  }
};
Object.defineProperty(r2, "version", { enumerable: true, configurable: true, writable: true, value: "5.0.36" }), Object.defineProperty(r2, "defaults", { enumerable: true, configurable: true, writable: true, value: {} });
var o2 = class extends r2 {
  constructor(t3, e3) {
    super(e3), Object.defineProperty(this, "instance", { enumerable: true, configurable: true, writable: true, value: t3 });
  }
  attach() {
  }
  detach() {
  }
};
var a2;
var l2;
!function(t3) {
  t3[t3.Init = 0] = "Init", t3[t3.Error = 1] = "Error", t3[t3.Ready = 2] = "Ready", t3[t3.Panning = 3] = "Panning", t3[t3.Mousemove = 4] = "Mousemove", t3[t3.Destroy = 5] = "Destroy";
}(a2 || (a2 = {})), function(t3) {
  t3[t3.Init = 0] = "Init", t3[t3.Ready = 1] = "Ready", t3[t3.Destroy = 2] = "Destroy";
}(l2 || (l2 = {}));
var c2 = (t3, e3 = 1e4) => (t3 = parseFloat(t3 + "") || 0, Math.round((t3 + Number.EPSILON) * e3) / e3);
var h2 = { classes: { container: "f-thumbs f-carousel__thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide", isResting: "is-resting", isSelected: "is-selected", isLoading: "is-loading", hasThumbs: "has-thumbs" }, minCount: 2, parentEl: null, thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>', type: "modern" };
var u2;
!function(t3) {
  t3[t3.Init = 0] = "Init", t3[t3.Ready = 1] = "Ready", t3[t3.Hidden = 2] = "Hidden";
}(u2 || (u2 = {}));
var d2 = "isResting";
var f2 = "thumbWidth";
var b2 = "thumbHeight";
var p2 = "thumbClipWidth";
var g2 = class extends o2 {
  constructor() {
    super(...arguments), Object.defineProperty(this, "type", { enumerable: true, configurable: true, writable: true, value: "modern" }), Object.defineProperty(this, "container", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "track", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "carousel", { enumerable: true, configurable: true, writable: true, value: null }), Object.defineProperty(this, "thumbWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbClipWidth", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbHeight", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbGap", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "thumbExtraGap", { enumerable: true, configurable: true, writable: true, value: 0 }), Object.defineProperty(this, "state", { enumerable: true, configurable: true, writable: true, value: u2.Init });
  }
  get isModern() {
    return "modern" === this.type;
  }
  onInitSlide(t3, e3) {
    const i3 = e3.el ? e3.el.dataset : void 0;
    i3 && (e3.thumbSrc = i3.thumbSrc || e3.thumbSrc || "", e3[p2] = parseFloat(i3[p2] || "") || e3[p2] || 0, e3[b2] = parseFloat(i3.thumbHeight || "") || e3[b2] || 0), this.addSlide(e3);
  }
  onInitSlides() {
    this.build();
  }
  onChange() {
    var t3;
    if (!this.isModern)
      return;
    const i3 = this.container, n3 = this.instance, r3 = n3.panzoom, o3 = this.carousel, a3 = o3 ? o3.panzoom : null, l3 = n3.page;
    if (r3 && o3 && a3) {
      if (r3.isDragging) {
        s2(i3, this.cn(d2));
        let e3 = (null === (t3 = o3.pages[l3]) || void 0 === t3 ? void 0 : t3.pos) || 0;
        e3 += n3.getProgress(l3) * (this[p2] + this.thumbGap);
        let r4 = a3.getBounds();
        -1 * e3 > r4.x.min && -1 * e3 < r4.x.max && a3.panTo({ x: -1 * e3, friction: 0.12 });
      } else
        c3 = i3, h3 = this.cn(d2), u3 = r3.isResting, c3 && e2(h3).forEach((t4) => {
          c3.classList.toggle(t4, u3 || false);
        });
      var c3, h3, u3;
      this.shiftModern();
    }
  }
  onRefresh() {
    this.updateProps();
    for (const t3 of this.instance.slides || [])
      this.resizeModernSlide(t3);
    this.shiftModern();
  }
  isDisabled() {
    const t3 = this.option("minCount") || 0;
    if (t3) {
      const e4 = this.instance;
      let i3 = 0;
      for (const t4 of e4.slides || [])
        t4.thumbSrc && i3++;
      if (i3 < t3)
        return true;
    }
    const e3 = this.option("type");
    return ["modern", "classic"].indexOf(e3) < 0;
  }
  getThumb(t3) {
    const e3 = this.option("thumbTpl") || "";
    return { html: this.instance.localize(e3, [["%i", t3.index], ["%d", t3.index + 1], ["%s", t3.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]]) };
  }
  addSlide(t3) {
    const e3 = this.carousel;
    e3 && e3.addSlide(t3.index, this.getThumb(t3));
  }
  getSlides() {
    const t3 = [];
    for (const e3 of this.instance.slides || [])
      t3.push(this.getThumb(e3));
    return t3;
  }
  resizeModernSlide(t3) {
    this.isModern && (t3[f2] = t3[p2] && t3[b2] ? Math.round(this[b2] * (t3[p2] / t3[b2])) : this[f2]);
  }
  updateProps() {
    const t3 = this.container;
    if (!t3)
      return;
    const e3 = (e4) => parseFloat(getComputedStyle(t3).getPropertyValue("--f-thumb-" + e4)) || 0;
    this.thumbGap = e3("gap"), this.thumbExtraGap = e3("extra-gap"), this[f2] = e3("width") || 40, this[p2] = e3("clip-width") || 40, this[b2] = e3("height") || 40;
  }
  build() {
    const e3 = this;
    if (e3.state !== u2.Init)
      return;
    if (e3.isDisabled())
      return void e3.emit("disabled");
    const s3 = e3.instance, n3 = s3.container, r3 = e3.getSlides(), o3 = e3.option("type");
    e3.type = o3;
    const a3 = e3.option("parentEl"), l3 = e3.cn("container"), c3 = e3.cn("track");
    let h3 = null == a3 ? void 0 : a3.querySelector("." + l3);
    h3 || (h3 = document.createElement("div"), i2(h3, l3), a3 ? a3.appendChild(h3) : n3.after(h3)), i2(h3, `is-${o3}`), i2(n3, e3.cn("hasThumbs")), e3.container = h3, e3.updateProps();
    let d3 = h3.querySelector("." + c3);
    d3 || (d3 = document.createElement("div"), i2(d3, e3.cn("track")), h3.appendChild(d3)), e3.track = d3;
    const f3 = t2({}, { track: d3, infinite: false, center: true, fill: "classic" === o3, dragFree: true, slidesPerPage: 1, transition: false, preload: 0.25, friction: 0.12, Panzoom: { maxVelocity: 0 }, Dots: false, Navigation: false, classes: { container: "f-thumbs", viewport: "f-thumbs__viewport", track: "f-thumbs__track", slide: "f-thumbs__slide" } }, e3.option("Carousel") || {}, { Sync: { target: s3 }, slides: r3 }), b3 = new s3.constructor(h3, f3);
    b3.on("createSlide", (t3, i3) => {
      e3.setProps(i3.index), e3.emit("createSlide", i3, i3.el);
    }), b3.on("ready", () => {
      e3.shiftModern(), e3.emit("ready");
    }), b3.on("refresh", () => {
      e3.shiftModern();
    }), b3.on("Panzoom.click", (t3, i3, s4) => {
      e3.onClick(s4);
    }), e3.carousel = b3, e3.state = u2.Ready;
  }
  onClick(t3) {
    t3.preventDefault(), t3.stopPropagation();
    const e3 = this.instance, { pages: i3, page: s3 } = e3, n3 = (t4) => {
      if (t4) {
        const e4 = t4.closest("[data-carousel-index]");
        if (e4)
          return [parseInt(e4.dataset.carouselIndex || "", 10) || 0, e4];
      }
      return [-1, void 0];
    }, r3 = (t4, e4) => {
      const i4 = document.elementFromPoint(t4, e4);
      return i4 ? n3(i4) : [-1, void 0];
    };
    let [o3, a3] = n3(t3.target);
    if (o3 > -1)
      return;
    const l3 = this[p2], c3 = t3.clientX, h3 = t3.clientY;
    let [u3, d3] = r3(c3 - l3, h3), [f3, b3] = r3(c3 + l3, h3);
    d3 && b3 ? (o3 = Math.abs(c3 - d3.getBoundingClientRect().right) < Math.abs(c3 - b3.getBoundingClientRect().left) ? u3 : f3, o3 === s3 && (o3 = o3 === u3 ? f3 : u3)) : d3 ? o3 = u3 : b3 && (o3 = f3), o3 > -1 && i3[o3] && e3.slideTo(o3);
  }
  getShift(t3) {
    var e3;
    const i3 = this, { instance: s3 } = i3, n3 = i3.carousel;
    if (!s3 || !n3)
      return 0;
    const r3 = i3[f2], o3 = i3[p2], a3 = i3.thumbGap, l3 = i3.thumbExtraGap;
    if (!(null === (e3 = n3.slides[t3]) || void 0 === e3 ? void 0 : e3.el))
      return 0;
    const c3 = 0.5 * (r3 - o3), h3 = s3.pages.length - 1;
    let u3 = s3.getProgress(0), d3 = s3.getProgress(h3), b3 = s3.getProgress(t3, false, true), g3 = 0, m2 = c3 + l3 + a3;
    const y2 = u3 < 0 && u3 > -1, v2 = d3 > 0 && d3 < 1;
    return 0 === t3 ? (g3 = m2 * Math.abs(u3), v2 && 1 === u3 && (g3 -= m2 * Math.abs(d3))) : t3 === h3 ? (g3 = m2 * Math.abs(d3) * -1, y2 && -1 === d3 && (g3 += m2 * Math.abs(u3))) : y2 || v2 ? (g3 = -1 * m2, g3 += m2 * Math.abs(u3), g3 += m2 * (1 - Math.abs(d3))) : g3 = m2 * b3, g3;
  }
  setProps(t3) {
    var e3;
    const i3 = this;
    if (!i3.isModern)
      return;
    const { instance: s3 } = i3, n3 = i3.carousel;
    if (s3 && n3) {
      const r3 = null === (e3 = n3.slides[t3]) || void 0 === e3 ? void 0 : e3.el;
      if (r3 && r3.childNodes.length) {
        let e4 = c2(1 - Math.abs(s3.getProgress(t3))), n4 = c2(i3.getShift(t3));
        r3.style.setProperty("--progress", e4 ? e4 + "" : ""), r3.style.setProperty("--shift", n4 + "");
      }
    }
  }
  shiftModern() {
    const t3 = this;
    if (!t3.isModern)
      return;
    const { instance: e3, track: i3 } = t3, s3 = e3.panzoom, n3 = t3.carousel;
    if (!(e3 && i3 && s3 && n3))
      return;
    if (s3.state === a2.Init || s3.state === a2.Destroy)
      return;
    for (const i4 of e3.slides)
      t3.setProps(i4.index);
    let r3 = (t3[p2] + t3.thumbGap) * (n3.slides.length || 0);
    i3.style.setProperty("--width", r3 + "");
  }
  cleanup() {
    const t3 = this;
    t3.carousel && t3.carousel.destroy(), t3.carousel = null, t3.container && t3.container.remove(), t3.container = null, t3.track && t3.track.remove(), t3.track = null, t3.state = u2.Init, s2(t3.instance.container, t3.cn("hasThumbs"));
  }
  attach() {
    const t3 = this, e3 = t3.instance;
    e3.on("initSlide", t3.onInitSlide), e3.state === l2.Init ? e3.on("initSlides", t3.onInitSlides) : t3.onInitSlides(), e3.on(["change", "Panzoom.afterTransform"], t3.onChange), e3.on("Panzoom.refresh", t3.onRefresh);
  }
  detach() {
    const t3 = this, e3 = t3.instance;
    e3.off("initSlide", t3.onInitSlide), e3.off("initSlides", t3.onInitSlides), e3.off(["change", "Panzoom.afterTransform"], t3.onChange), e3.off("Panzoom.refresh", t3.onRefresh), t3.cleanup();
  }
};
Object.defineProperty(g2, "defaults", { enumerable: true, configurable: true, writable: true, value: h2 });

// src/react-carousel.tsx
var defaultOptions = {
  l10n: vi
};
function ReactCarousel({
  children,
  options = {},
  ...props
}) {
  const containerRef = React.useRef(null);
  const [isReady, setIsReady] = React.useState(false);
  Q.defaults.on = {
    ready: () => {
      setIsReady(true);
    }
  };
  React.useEffect(() => {
    const container = containerRef.current;
    const instance = new Q(
      container,
      {
        ...defaultOptions,
        ...options
      },
      { Thumbs: g2 }
    );
    return () => {
      instance.destroy();
    };
  });
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      ...props,
      className: `f-carousel disabled:[&_.f-button]:invisible ${props.className || ""}`,
      ref: containerRef
    },
    isReady ? children : /* @__PURE__ */ React.createElement("div", { className: "size-full flex items-center justify-center" }, "loading...")
  );
}

// src/react-fancybox.tsx
var React2 = __toESM(require_react());

// src/i10n/Panzoom/vi.ts
var vi2 = {
  PANUP: "\u0110i l\xEAn",
  PANDOWN: "\u0110i xu\u1ED1ng",
  PANLEFT: "Sang tr\xE1i",
  PANRIGHT: "Sang ph\u1EA3i",
  ZOOMIN: "Ph\xF3ng to",
  ZOOMOUT: "Thu nh\u1ECF",
  TOGGLEZOOM: "Chuy\u1EC3n m\u1EE9c \u0111\u1ED9 ph\xF3ng to",
  TOGGLE1TO1: "Chuy\u1EC3n m\u1EE9c \u0111\u1ED9 ph\xF3ng to",
  ITERATEZOOM: "Chuy\u1EC3n m\u1EE9c \u0111\u1ED9 ph\xF3ng to",
  ROTATECCW: "Xoay ng\u01B0\u1EE3c chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3",
  ROTATECW: "Xoay theo chi\u1EC1u kim \u0111\u1ED3ng h\u1ED3",
  FLIPX: "L\u1EADt theo chi\u1EC1u ngang",
  FLIPY: "L\u1EADt theo chi\u1EC1u d\u1ECDc",
  FITX: "V\u1EEBa v\u1EB7n theo chi\u1EC1u ngang",
  FITY: "V\u1EEBa v\u1EB7n theo chi\u1EC1u d\u1ECDc",
  RESET: "\u0110\u1EB7t l\u1EA1i",
  TOGGLEFS: "B\u1EADt ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh"
};

// src/i10n/Fancybox/vi.ts
var vi3 = {
  ...vi2,
  CLOSE: "\u0110\xF3ng",
  NEXT: "Ti\u1EBFp",
  PREV: "Tr\u01B0\u1EDBc",
  MODAL: "B\u1EA1n c\xF3 th\u1EC3 \u0111\xF3ng n\u1ED9i dung b\u1EB1ng ph\xEDm ESC",
  ERROR: "\u0110\xE3 x\u1EA3y ra l\u1ED7i, vui l\xF2ng th\u1EED l\u1EA1i sau",
  IMAGE_ERROR: "Kh\xF4ng t\xECm th\u1EA5y h\xECnh \u1EA3nh",
  ELEMENT_NOT_FOUND: "Kh\xF4ng t\xECm th\u1EA5y ph\u1EA7n t\u1EED HTML",
  AJAX_NOT_FOUND: "L\u1ED7i t\u1EA3i AJAX: Kh\xF4ng t\xECm th\u1EA5y",
  AJAX_FORBIDDEN: "L\u1ED7i t\u1EA3i AJAX: B\u1ECB c\u1EA5m",
  IFRAME_ERROR: "L\u1ED7i t\u1EA3i trang",
  TOGGLE_ZOOM: "Chuy\u1EC3n m\u1EE9c \u0111\u1ED9 ph\xF3ng to",
  TOGGLE_THUMBS: "Chuy\u1EC3n h\xECnh thu nh\u1ECF",
  TOGGLE_SLIDESHOW: "Chuy\u1EC3n tr\xECnh chi\u1EBFu",
  TOGGLE_FULLSCREEN: "B\u1EADt ch\u1EBF \u0111\u1ED9 to\xE0n m\xE0n h\xECnh",
  DOWNLOAD: "T\u1EA3i xu\u1ED1ng"
};

// src/react-fancybox.tsx
var defaultOptions2 = {
  l10n: vi3
};
function ReactFancybox({
  children,
  delegate = "[data-fancybox]",
  options = {},
  setFancyboxIsActive,
  ...props
}) {
  const containerRef = React2.useRef(null);
  if (setFancyboxIsActive) {
    Oe.defaults.on = {
      init: () => {
        setFancyboxIsActive(true);
      },
      close: () => {
        setFancyboxIsActive(false);
      }
    };
  }
  React2.useEffect(() => {
    const container = containerRef.current;
    Oe.bind(container, delegate, {
      ...defaultOptions2,
      ...options
    });
    return () => {
      Oe.unbind(container);
    };
  });
  return /* @__PURE__ */ React2.createElement("div", { ...props, ref: containerRef }, children);
}
export {
  ReactCarousel,
  ReactFancybox
};
/*! Bundled license information:

react/cjs/react.production.min.js:
  (**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)

react/cjs/react.development.js:
  (**
   * @license React
   * react.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=index.mjs.map