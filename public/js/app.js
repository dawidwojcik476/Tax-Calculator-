webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      productname: "",
      productnameError: "",
      nettoError: "",
      currencyError: "",
      vatchoiceError: "",
      netto: "",
      nettoResult: "",
      brutto: "",
      currency: "",
      vatchoice: "",
      taxresult: "",
      taxNumber: "",
      flag: false
    };
  },
  mounted() {},
  methods: {
    handleSubmit() {
      this.productnameError = this.productname.length > 1 ? "" : "Uzupełnij polę";
      if (this.netto.length < 1 || this.netto == "NaN PLN" || this.netto == "NaN EURO") {
        this.nettoError = "Uzupełnij polę";
      } else if (this.netto < 1) {
        this.nettoError = "Wartość produktu musi być dodatnia";
      } else {
        this.nettoError = "";
      }
      this.currencyError = this.currency.length > 1 ? "" : "Uzupełnij polę";
      this.vatchoiceError = this.vatchoice.length > 1 ? "" : "Uzupełnij polę";

      if (!this.productnameError && !this.nettoError && !this.currencyError && !this.vatchoices) {
        this.calculateTax();
        this.brutto = Number(this.brutto).toFixed(2) + " " + this.currency;
        this.netto = Number(this.netto).toFixed(2) + " " + this.currency;
        this.nettoResult = this.netto;
        this.taxresult = Number(this.taxresult).toFixed(2) + " " + this.currency;
        this.flag = true;
        this.netto = "";
      }
    },
    calculateTax() {
      this.taxNumber = this.vatchoice.match(/(\d+)/);
      this.taxresult = +this.netto * (+this.taxNumber[0] * 0.01);
      this.brutto = +this.netto + +this.taxresult;
    }
  }
});

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_Calculator_vue__ = __webpack_require__(7);



window.Vue = __WEBPACK_IMPORTED_MODULE_0_vue__["default"];

const taxCalculator = document.querySelector("#tax-calculator");

if (taxCalculator) {
    __WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('taxcalculator', __WEBPACK_IMPORTED_MODULE_1__components_Calculator_vue__["a" /* default */]);

    new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
        el: '#tax-calculator'
    });
}

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calculator_vue__ = __webpack_require__(3);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ec481f16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calculator_vue__ = __webpack_require__(9);
var disposed = false
var normalizeComponent = __webpack_require__(8)
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_Calculator_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_ec481f16_hasScoped_false_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_Calculator_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "assets/js/app/components/Calculator.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ec481f16", Component.options)
  } else {
    hotAPI.reload("data-v-ec481f16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 8 */
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "tax-form" }, [
    _c("form", { attrs: { method: "post" } }, [
      _c("h1", [_vm._v("Kalkulator Podatku")]),
      _vm._v(" "),
      _c("div", { staticClass: "tax-form__productname" }, [
        _c("label", { attrs: { for: "productname" } }, [
          _vm._v("Nazwa produktu")
        ]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.productname,
              expression: "productname"
            }
          ],
          attrs: {
            type: "text",
            name: "productname",
            id: "productname",
            required: "",
            placeholder: "Nazwa produktu"
          },
          domProps: { value: _vm.productname },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.productname = $event.target.value
            }
          }
        }),
        _vm._v(" "),
        _vm.productnameError
          ? _c("div", { staticClass: "error" }, [
              _vm._v(_vm._s(_vm.productnameError))
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tax-form__netto" }, [
        _c("label", { attrs: { for: "netto" } }, [_vm._v("Kwota netto")]),
        _vm._v(" "),
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model.number",
              value: _vm.netto,
              expression: "netto",
              modifiers: { number: true }
            }
          ],
          attrs: {
            type: "number",
            min: "1",
            name: "netto",
            id: "netto",
            placeholder: "Kwota netto"
          },
          domProps: { value: _vm.netto },
          on: {
            input: function($event) {
              if ($event.target.composing) {
                return
              }
              _vm.netto = _vm._n($event.target.value)
            },
            blur: function($event) {
              return _vm.$forceUpdate()
            }
          }
        }),
        _vm._v(" "),
        _vm.nettoError
          ? _c("div", { staticClass: "error" }, [
              _vm._v(_vm._s(_vm.nettoError))
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tax-form__currency" }, [
        _c("label", { attrs: { for: "currency-choice" } }, [
          _vm._v("Wybierz walutę")
        ]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.currency,
                expression: "currency"
              }
            ],
            attrs: {
              name: "currency-choice",
              id: "currency-choice",
              required: "",
              placeholder: "Waluta"
            },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.currency = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          },
          [
            _c(
              "option",
              { staticClass: "currency-choice__pln", attrs: { value: "PLN" } },
              [_vm._v("PLN")]
            ),
            _vm._v(" "),
            _c(
              "option",
              {
                staticClass: "currency-choice__euro",
                attrs: { value: "EURO" }
              },
              [_vm._v("EURO")]
            )
          ]
        ),
        _vm._v(" "),
        _vm.currencyError
          ? _c("div", { staticClass: "error" }, [
              _vm._v(_vm._s(_vm.currencyError))
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "tax-form__vat-choice" }, [
        _c("label", { attrs: { for: "vat-choice" } }, [
          _vm._v("Wybierz stawkę VAT")
        ]),
        _vm._v(" "),
        _c(
          "select",
          {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.vatchoice,
                expression: "vatchoice"
              }
            ],
            attrs: {
              name: "vat-choice",
              id: "vat-choice",
              required: "",
              placeholder: "Stawka VAT"
            },
            on: {
              change: function($event) {
                var $$selectedVal = Array.prototype.filter
                  .call($event.target.options, function(o) {
                    return o.selected
                  })
                  .map(function(o) {
                    var val = "_value" in o ? o._value : o.value
                    return val
                  })
                _vm.vatchoice = $event.target.multiple
                  ? $$selectedVal
                  : $$selectedVal[0]
              }
            }
          },
          [
            _c("option", { attrs: { value: "23%" } }, [_vm._v("23%")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "22%" } }, [_vm._v("22%")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "8%" } }, [_vm._v("8%")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "7%" } }, [_vm._v("7%")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "5%" } }, [_vm._v("5%")]),
            _vm._v(" "),
            _c("option", { attrs: { value: "0%" } }, [_vm._v("0%")])
          ]
        ),
        _vm._v(" "),
        _vm.vatchoiceError
          ? _c("div", { staticClass: "error" }, [
              _vm._v(_vm._s(_vm.productnameError))
            ])
          : _vm._e()
      ]),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.brutto,
            expression: "brutto"
          }
        ],
        attrs: { name: "brutto", type: "hidden" },
        domProps: { value: _vm.brutto },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.brutto = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.taxresult,
            expression: "taxresult"
          }
        ],
        attrs: { name: "taxresult", type: "hidden" },
        domProps: { value: _vm.taxresult },
        on: {
          input: function($event) {
            if ($event.target.composing) {
              return
            }
            _vm.taxresult = $event.target.value
          }
        }
      }),
      _vm._v(" "),
      _vm.flag == true
        ? _c("input", {
            staticClass: "submit",
            attrs: { type: "submit", value: "Zapisz produkt" }
          })
        : _vm._e()
    ]),
    _vm._v(" "),
    _c("button", { staticClass: "submit", on: { click: _vm.handleSubmit } }, [
      _vm._v("Oblicz")
    ]),
    _vm._v(" "),
    _vm.flag == true
      ? _c("div", { staticClass: "tax-form__result" }, [
          _vm._v("\n    Cena produktu brutto wynosi: "),
          _c("b", [_vm._v(" " + _vm._s(_vm.brutto) + " ")]),
          _vm._v(" "),
          _c("br"),
          _vm._v("\n    Cena produktu netto wynosi: "),
          _c("b", [_vm._v(" " + _vm._s(_vm.nettoResult) + " ")]),
          _c("br"),
          _vm._v("\n    Kwota podatku wynosi "),
          _c("b", [_vm._v(" " + _vm._s(_vm.taxresult) + " ")]),
          _c("br")
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-ec481f16", esExports)
  }
}

/***/ })
],[4]);
