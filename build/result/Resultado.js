/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var $app_template$ = __webpack_require__(8)
var $app_style$ = __webpack_require__(9)
var $app_script$ = __webpack_require__(10)

$app_define$('@app-component/Resultado', [], function($app_require$, $app_exports$, $app_module$){
     $app_script$($app_module$, $app_exports$, $app_require$)
     if ($app_exports$.__esModule && $app_exports$.default) {
            $app_module$.exports = $app_exports$.default
        }
     $app_module$.exports.template = $app_template$
     $app_module$.exports.style = $app_style$
})

$app_bootstrap$('@app-component/Resultado',{ packagerName:'fa-toolkit', packagerVersion: '2.1.1-Stable.300'})

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {
  "type": "div",
  "attr": {},
  "classList": [
    "container"
  ],
  "children": [
    {
      "type": "text",
      "attr": {
        "value": function () {return this.titulo}
      },
      "classList": [
        "title"
      ]
    },
    {
      "type": "text",
      "attr": {
        "value": function () {return this.consulta}
      },
      "classList": [
        "title"
      ]
    },
    {
      "type": "list",
      "attr": {
        "id": "list"
      },
      "id": "list",
      "children": [
        {
          "type": "list-item",
          "attr": {
            "type": "ab"
          },
          "classList": [
            "elemento"
          ],
          "repeat": function () {return this.resultados},
          "children": [
            {
              "type": "text",
              "attr": {
                "value": function () {return (this.$item.name)+' '+(this.$item.formatAddress)}
              },
              "classList": [
                "listado"
              ],
              "events": {
                "click": function(evt){this.procesar(this.$item.name,evt)}
              }
            }
          ]
        }
      ]
    }
  ]
}

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  ".container": {
    "flexDirection": "column",
    "justifyContent": "center",
    "alignContent": "center",
    "alignItems": "center"
  },
  ".title": {
    "fontSize": "50px"
  },
  ".listado": {
    "alignContent": "flex-start",
    "fontSize": "40px"
  },
  ".elemento": {
    "height": "150px",
    "alignItems": "flex-start",
    "marginBottom": "15px",
    "borderTopColor": "#0000cd",
    "borderRightColor": "#0000cd",
    "borderBottomColor": "#0000cd",
    "borderLeftColor": "#0000cd",
    "borderRadius": "10px",
    "borderTopWidth": "2px",
    "borderRightWidth": "2px",
    "borderBottomWidth": "2px",
    "borderLeftWidth": "2px",
    "marginRight": "10px",
    "marginLeft": "10px"
  }
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(module, exports, $app_require$){"use strict";

var _system = _interopRequireDefault($app_require$("@app-module/system.fetch"));

var _system2 = _interopRequireDefault($app_require$("@app-module/system.prompt"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

module.exports = {
  data: {
    titulo: 'Resultado búsqueda',
    resultados: []
  },
  poststring: function poststring() {
    var that = this;
    var i;
    var codigoRetorno = -1;
    var cantidad = -1;
    var apikey = encodeURIComponent("CV5nEvwZGi+uniEahMk1GqWmeWx7ZfxLyt0fB4uSoix/6Oi/EW1+UcEwvMimUDOc/vOJO7rwL7srTb2mPITiyltsRUuw");
    var datos = JSON.stringify({
      "location": {
        "lng": that.longitud,
        "lat": that.latitud
      },
      "radius": 1000,
      "query": that.tipo,
      "poiType": "ESTABLISHMENT",
      "language": "es",
      "pageIndex": 1,
      "pageSize": 5,
      "politicalView": "CN"
    });
    console.log(datos);

    _system["default"].fetch({
      url: "https://siteapi.cloud.huawei.com/mapApi/v1/siteService/nearbySearch?key=" + apikey,
      header: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      responseType: "json",
      data: datos,
      method: "POST",
      success: function success(ret) {
        console.log(JSON.stringify(ret));
        codigoRetorno = JSON.parse(ret.data.returnCode);
        console.log('Code:' + codigoRetorno);

        if (codigoRetorno === 0) {
          cantidad = JSON.parse(ret.data.totalCount);
          console.log('Cantidad:' + cantidad);

          if (cantidad > 0) {
            that.resultados = ret.data.sites;

            for (i = 0; i < cantidad; i++) {
              console.log(ret.data.sites[i].name);
              console.log(ret.data.sites[i].formatAddress);
            }
          }
        }
      },
      fail: function fail(msg, code) {
        console.log(msg, code);
      },
      complete: function complete() {
        console.log("complete");
      }
    });
  },
  onInit: function onInit() {
    console.log(this.tipo);
    this.poststring(this.tipo);
    this.consulta = this.tipo;
  },
  procesar: function procesar(valor) {
    console.log('El valor es: ' + valor);

    _system2["default"].showToast({
      message: valor,
      duration: "10000",
      gravity: "center"
    });
  }
};
var moduleOwn = exports.default || module.exports;
var accessors = ['public', 'protected', 'private'];
if (moduleOwn.data && accessors.some(function (acc) {
    return moduleOwn[acc];
  })) {
  throw new Error('For VM objects, attribute data must not coexist with public, protected, or private. Please replace data with public.');
} else if (!moduleOwn.data) {
  moduleOwn.data = {};
  moduleOwn._descriptor = {};
  accessors.forEach(function(acc) {
    var accType = typeof moduleOwn[acc];
    if (accType === 'object') {
      moduleOwn.data = Object.assign(moduleOwn.data, moduleOwn[acc]);
      for (var name in moduleOwn[acc]) {
        moduleOwn._descriptor[name] = {access : acc};
      }
    } else if (accType === 'function') {
      console.warn('For VM objects, attribute ' + acc + ' value must not be a function. Change the value to an object.');
    }
  });
}}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRcXHJlc3VsdFxcUmVzdWx0YWRvLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9jOi9Vc2Vycy9yODQxNDI3NTQvLnF1aWNrYXBwLWlkZS93b3Jrc3BhY2UvY29tLmh1YXdlaS5xYWNvZGVsYWJkZW1vL3NyYy9yZXN1bHQvUmVzdWx0YWRvLnV4Iiwid2VicGFjazovLy9jOi9Vc2Vycy9yODQxNDI3NTQvLnF1aWNrYXBwLWlkZS93b3Jrc3BhY2UvY29tLmh1YXdlaS5xYWNvZGVsYWJkZW1vL3NyYy9yZXN1bHQvUmVzdWx0YWRvLnV4P2Y3MGYiLCJ3ZWJwYWNrOi8vL2M6L1VzZXJzL3I4NDE0Mjc1NC8ucXVpY2thcHAtaWRlL3dvcmtzcGFjZS9jb20uaHVhd2VpLnFhY29kZWxhYmRlbW8vc3JjL3Jlc3VsdC9SZXN1bHRhZG8udXg/MzRiMCIsIndlYnBhY2s6Ly8vYzovVXNlcnMvcjg0MTQyNzU0Ly5xdWlja2FwcC1pZGUvd29ya3NwYWNlL2NvbS5odWF3ZWkucWFjb2RlbGFiZGVtby9zcmMvcmVzdWx0L1Jlc3VsdGFkby51eD9hNjI4Il0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA3KTtcbiIsInZhciAkYXBwX3RlbXBsYXRlJCA9IHJlcXVpcmUoXCIhIWQ6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtanNvbi1sb2FkZXIuanMhZDpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS10ZW1wbGF0ZS1sb2FkZXIuanMhZDpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXRlbXBsYXRlcyEuL1Jlc3VsdGFkby51eFwiKVxudmFyICRhcHBfc3R5bGUkID0gcmVxdWlyZShcIiEhZDpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1qc29uLWxvYWRlci5qcyFkOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLXN0eWxlLWxvYWRlci5qcz9pbmRleD0wJnR5cGU9c3R5bGVzJnJlc291cmNlUGF0aD1jOlxcXFxVc2Vyc1xcXFxyODQxNDI3NTRcXFxcLnF1aWNrYXBwLWlkZVxcXFx3b3Jrc3BhY2VcXFxcY29tLmh1YXdlaS5xYWNvZGVsYWJkZW1vXFxcXHNyY1xcXFxyZXN1bHRcXFxcUmVzdWx0YWRvLnV4IWQ6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcZmEtZnJhZ21lbnQtbG9hZGVyLmpzP2luZGV4PTAmdHlwZT1zdHlsZXMmcmVzb3VyY2VQYXRoPWM6XFxcXFVzZXJzXFxcXHI4NDE0Mjc1NFxcXFwucXVpY2thcHAtaWRlXFxcXHdvcmtzcGFjZVxcXFxjb20uaHVhd2VpLnFhY29kZWxhYmRlbW9cXFxcc3JjXFxcXHJlc3VsdFxcXFxSZXN1bHRhZG8udXghLi9SZXN1bHRhZG8udXhcIilcbnZhciAkYXBwX3NjcmlwdCQgPSByZXF1aXJlKFwiISFkOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXGZhLXRvb2xraXRcXFxcbGliXFxcXGZhLXNjcmlwdC1sb2FkZXIuanMhZDpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1hY2Nlc3MtbG9hZGVyLmpzIWQ6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcYmFiZWwtbG9hZGVyP3ByZXNldHNbXT1kOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwcmVzZXQtZW52JnBsdWdpbnNbXT1kOlxcXFxIdWF3ZWkgUXVpY2tBcHAgSURFXFxcXHJlc291cmNlc1xcXFxhcHBcXFxcZXh0ZW5zaW9uc1xcXFxkZXZlY28tZGVidWdcXFxcbm9kZV9tb2R1bGVzXFxcXEBiYWJlbFxcXFxwbHVnaW4tdHJhbnNmb3JtLW1vZHVsZXMtY29tbW9uanMmcGx1Z2luc1tdPWQ6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcZmEtdG9vbGtpdFxcXFxsaWJcXFxcanN4LWxvYWRlci5qcyZwbHVnaW5zW109ZDpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxAYmFiZWxcXFxccGx1Z2luLXByb3Bvc2FsLWNsYXNzLXByb3BlcnRpZXMmcGx1Z2luc1tdPWQ6XFxcXEh1YXdlaSBRdWlja0FwcCBJREVcXFxccmVzb3VyY2VzXFxcXGFwcFxcXFxleHRlbnNpb25zXFxcXGRldmVjby1kZWJ1Z1xcXFxub2RlX21vZHVsZXNcXFxcQGJhYmVsXFxcXHBsdWdpbi1wcm9wb3NhbC1vYmplY3QtcmVzdC1zcHJlYWQmY29tbWVudHM9ZmFsc2UhZDpcXFxcSHVhd2VpIFF1aWNrQXBwIElERVxcXFxyZXNvdXJjZXNcXFxcYXBwXFxcXGV4dGVuc2lvbnNcXFxcZGV2ZWNvLWRlYnVnXFxcXG5vZGVfbW9kdWxlc1xcXFxmYS10b29sa2l0XFxcXGxpYlxcXFxmYS1mcmFnbWVudC1sb2FkZXIuanM/aW5kZXg9MCZ0eXBlPXNjcmlwdHMhLi9SZXN1bHRhZG8udXhcIilcblxuJGFwcF9kZWZpbmUkKCdAYXBwLWNvbXBvbmVudC9SZXN1bHRhZG8nLCBbXSwgZnVuY3Rpb24oJGFwcF9yZXF1aXJlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9tb2R1bGUkKXtcbiAgICAgJGFwcF9zY3JpcHQkKCRhcHBfbW9kdWxlJCwgJGFwcF9leHBvcnRzJCwgJGFwcF9yZXF1aXJlJClcbiAgICAgaWYgKCRhcHBfZXhwb3J0cyQuX19lc01vZHVsZSAmJiAkYXBwX2V4cG9ydHMkLmRlZmF1bHQpIHtcbiAgICAgICAgICAgICRhcHBfbW9kdWxlJC5leHBvcnRzID0gJGFwcF9leHBvcnRzJC5kZWZhdWx0XG4gICAgICAgIH1cbiAgICAgJGFwcF9tb2R1bGUkLmV4cG9ydHMudGVtcGxhdGUgPSAkYXBwX3RlbXBsYXRlJFxuICAgICAkYXBwX21vZHVsZSQuZXhwb3J0cy5zdHlsZSA9ICRhcHBfc3R5bGUkXG59KVxuXG4kYXBwX2Jvb3RzdHJhcCQoJ0BhcHAtY29tcG9uZW50L1Jlc3VsdGFkbycseyBwYWNrYWdlck5hbWU6J2ZhLXRvb2xraXQnLCBwYWNrYWdlclZlcnNpb246ICcyLjEuMS1TdGFibGUuMzAwJ30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwidHlwZVwiOiBcImRpdlwiLFxuICBcImF0dHJcIjoge30sXG4gIFwiY2xhc3NMaXN0XCI6IFtcbiAgICBcImNvbnRhaW5lclwiXG4gIF0sXG4gIFwiY2hpbGRyZW5cIjogW1xuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwidmFsdWVcIjogZnVuY3Rpb24gKCkge3JldHVybiB0aGlzLnRpdHVsb31cbiAgICAgIH0sXG4gICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgIFwidGl0bGVcIlxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgXCJ0eXBlXCI6IFwidGV4dFwiLFxuICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgXCJ2YWx1ZVwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMuY29uc3VsdGF9XG4gICAgICB9LFxuICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICBcInRpdGxlXCJcbiAgICAgIF1cbiAgICB9LFxuICAgIHtcbiAgICAgIFwidHlwZVwiOiBcImxpc3RcIixcbiAgICAgIFwiYXR0clwiOiB7XG4gICAgICAgIFwiaWRcIjogXCJsaXN0XCJcbiAgICAgIH0sXG4gICAgICBcImlkXCI6IFwibGlzdFwiLFxuICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBcInR5cGVcIjogXCJsaXN0LWl0ZW1cIixcbiAgICAgICAgICBcImF0dHJcIjoge1xuICAgICAgICAgICAgXCJ0eXBlXCI6IFwiYWJcIlxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGFzc0xpc3RcIjogW1xuICAgICAgICAgICAgXCJlbGVtZW50b1wiXG4gICAgICAgICAgXSxcbiAgICAgICAgICBcInJlcGVhdFwiOiBmdW5jdGlvbiAoKSB7cmV0dXJuIHRoaXMucmVzdWx0YWRvc30sXG4gICAgICAgICAgXCJjaGlsZHJlblwiOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFwidHlwZVwiOiBcInRleHRcIixcbiAgICAgICAgICAgICAgXCJhdHRyXCI6IHtcbiAgICAgICAgICAgICAgICBcInZhbHVlXCI6IGZ1bmN0aW9uICgpIHtyZXR1cm4gKHRoaXMuJGl0ZW0ubmFtZSkrJyAnKyh0aGlzLiRpdGVtLmZvcm1hdEFkZHJlc3MpfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImNsYXNzTGlzdFwiOiBbXG4gICAgICAgICAgICAgICAgXCJsaXN0YWRvXCJcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgXCJldmVudHNcIjoge1xuICAgICAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oZXZ0KXt0aGlzLnByb2Nlc2FyKHRoaXMuJGl0ZW0ubmFtZSxldnQpfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICBdXG4gICAgfVxuICBdXG59IiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIFwiLmNvbnRhaW5lclwiOiB7XG4gICAgXCJmbGV4RGlyZWN0aW9uXCI6IFwiY29sdW1uXCIsXG4gICAgXCJqdXN0aWZ5Q29udGVudFwiOiBcImNlbnRlclwiLFxuICAgIFwiYWxpZ25Db250ZW50XCI6IFwiY2VudGVyXCIsXG4gICAgXCJhbGlnbkl0ZW1zXCI6IFwiY2VudGVyXCJcbiAgfSxcbiAgXCIudGl0bGVcIjoge1xuICAgIFwiZm9udFNpemVcIjogXCI1MHB4XCJcbiAgfSxcbiAgXCIubGlzdGFkb1wiOiB7XG4gICAgXCJhbGlnbkNvbnRlbnRcIjogXCJmbGV4LXN0YXJ0XCIsXG4gICAgXCJmb250U2l6ZVwiOiBcIjQwcHhcIlxuICB9LFxuICBcIi5lbGVtZW50b1wiOiB7XG4gICAgXCJoZWlnaHRcIjogXCIxNTBweFwiLFxuICAgIFwiYWxpZ25JdGVtc1wiOiBcImZsZXgtc3RhcnRcIixcbiAgICBcIm1hcmdpbkJvdHRvbVwiOiBcIjE1cHhcIixcbiAgICBcImJvcmRlclRvcENvbG9yXCI6IFwiIzAwMDBjZFwiLFxuICAgIFwiYm9yZGVyUmlnaHRDb2xvclwiOiBcIiMwMDAwY2RcIixcbiAgICBcImJvcmRlckJvdHRvbUNvbG9yXCI6IFwiIzAwMDBjZFwiLFxuICAgIFwiYm9yZGVyTGVmdENvbG9yXCI6IFwiIzAwMDBjZFwiLFxuICAgIFwiYm9yZGVyUmFkaXVzXCI6IFwiMTBweFwiLFxuICAgIFwiYm9yZGVyVG9wV2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlclJpZ2h0V2lkdGhcIjogXCIycHhcIixcbiAgICBcImJvcmRlckJvdHRvbVdpZHRoXCI6IFwiMnB4XCIsXG4gICAgXCJib3JkZXJMZWZ0V2lkdGhcIjogXCIycHhcIixcbiAgICBcIm1hcmdpblJpZ2h0XCI6IFwiMTBweFwiLFxuICAgIFwibWFyZ2luTGVmdFwiOiBcIjEwcHhcIlxuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsICRhcHBfcmVxdWlyZSQpe1widXNlIHN0cmljdFwiO1xuXG52YXIgX3N5c3RlbSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5mZXRjaFwiKSk7XG5cbnZhciBfc3lzdGVtMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoJGFwcF9yZXF1aXJlJChcIkBhcHAtbW9kdWxlL3N5c3RlbS5wcm9tcHRcIikpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBcImRlZmF1bHRcIjogb2JqIH07IH1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGRhdGE6IHtcbiAgICB0aXR1bG86ICdSZXN1bHRhZG8gYsO6c3F1ZWRhJyxcbiAgICByZXN1bHRhZG9zOiBbXVxuICB9LFxuICBwb3N0c3RyaW5nOiBmdW5jdGlvbiBwb3N0c3RyaW5nKCkge1xuICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICB2YXIgaTtcbiAgICB2YXIgY29kaWdvUmV0b3JubyA9IC0xO1xuICAgIHZhciBjYW50aWRhZCA9IC0xO1xuICAgIHZhciBhcGlrZXkgPSBlbmNvZGVVUklDb21wb25lbnQoXCJDVjVuRXZ3WkdpK3VuaUVhaE1rMUdxV21lV3g3WmZ4THl0MGZCNHVTb2l4LzZPaS9FVzErVWNFd3ZNaW1VRE9jL3ZPSk83cndMN3NyVGIybVBJVGl5bHRzUlV1d1wiKTtcbiAgICB2YXIgZGF0b3MgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBcImxvY2F0aW9uXCI6IHtcbiAgICAgICAgXCJsbmdcIjogdGhhdC5sb25naXR1ZCxcbiAgICAgICAgXCJsYXRcIjogdGhhdC5sYXRpdHVkXG4gICAgICB9LFxuICAgICAgXCJyYWRpdXNcIjogMTAwMCxcbiAgICAgIFwicXVlcnlcIjogdGhhdC50aXBvLFxuICAgICAgXCJwb2lUeXBlXCI6IFwiRVNUQUJMSVNITUVOVFwiLFxuICAgICAgXCJsYW5ndWFnZVwiOiBcImVzXCIsXG4gICAgICBcInBhZ2VJbmRleFwiOiAxLFxuICAgICAgXCJwYWdlU2l6ZVwiOiA1LFxuICAgICAgXCJwb2xpdGljYWxWaWV3XCI6IFwiQ05cIlxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKGRhdG9zKTtcblxuICAgIF9zeXN0ZW1bXCJkZWZhdWx0XCJdLmZldGNoKHtcbiAgICAgIHVybDogXCJodHRwczovL3NpdGVhcGkuY2xvdWQuaHVhd2VpLmNvbS9tYXBBcGkvdjEvc2l0ZVNlcnZpY2UvbmVhcmJ5U2VhcmNoP2tleT1cIiArIGFwaWtleSxcbiAgICAgIGhlYWRlcjoge1xuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCJcbiAgICAgIH0sXG4gICAgICByZXNwb25zZVR5cGU6IFwianNvblwiLFxuICAgICAgZGF0YTogZGF0b3MsXG4gICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgc3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhyZXQpIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkocmV0KSk7XG4gICAgICAgIGNvZGlnb1JldG9ybm8gPSBKU09OLnBhcnNlKHJldC5kYXRhLnJldHVybkNvZGUpO1xuICAgICAgICBjb25zb2xlLmxvZygnQ29kZTonICsgY29kaWdvUmV0b3Jubyk7XG5cbiAgICAgICAgaWYgKGNvZGlnb1JldG9ybm8gPT09IDApIHtcbiAgICAgICAgICBjYW50aWRhZCA9IEpTT04ucGFyc2UocmV0LmRhdGEudG90YWxDb3VudCk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ0NhbnRpZGFkOicgKyBjYW50aWRhZCk7XG5cbiAgICAgICAgICBpZiAoY2FudGlkYWQgPiAwKSB7XG4gICAgICAgICAgICB0aGF0LnJlc3VsdGFkb3MgPSByZXQuZGF0YS5zaXRlcztcblxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGNhbnRpZGFkOyBpKyspIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cocmV0LmRhdGEuc2l0ZXNbaV0ubmFtZSk7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJldC5kYXRhLnNpdGVzW2ldLmZvcm1hdEFkZHJlc3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGZhaWw6IGZ1bmN0aW9uIGZhaWwobXNnLCBjb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1zZywgY29kZSk7XG4gICAgICB9LFxuICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIGNvbXBsZXRlKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvbXBsZXRlXCIpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuICBvbkluaXQ6IGZ1bmN0aW9uIG9uSW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzLnRpcG8pO1xuICAgIHRoaXMucG9zdHN0cmluZyh0aGlzLnRpcG8pO1xuICAgIHRoaXMuY29uc3VsdGEgPSB0aGlzLnRpcG87XG4gIH0sXG4gIHByb2Nlc2FyOiBmdW5jdGlvbiBwcm9jZXNhcih2YWxvcikge1xuICAgIGNvbnNvbGUubG9nKCdFbCB2YWxvciBlczogJyArIHZhbG9yKTtcblxuICAgIF9zeXN0ZW0yW1wiZGVmYXVsdFwiXS5zaG93VG9hc3Qoe1xuICAgICAgbWVzc2FnZTogdmFsb3IsXG4gICAgICBkdXJhdGlvbjogXCIxMDAwMFwiLFxuICAgICAgZ3Jhdml0eTogXCJjZW50ZXJcIlxuICAgIH0pO1xuICB9XG59O1xudmFyIG1vZHVsZU93biA9IGV4cG9ydHMuZGVmYXVsdCB8fCBtb2R1bGUuZXhwb3J0cztcbnZhciBhY2Nlc3NvcnMgPSBbJ3B1YmxpYycsICdwcm90ZWN0ZWQnLCAncHJpdmF0ZSddO1xuaWYgKG1vZHVsZU93bi5kYXRhICYmIGFjY2Vzc29ycy5zb21lKGZ1bmN0aW9uIChhY2MpIHtcbiAgICByZXR1cm4gbW9kdWxlT3duW2FjY107XG4gIH0pKSB7XG4gIHRocm93IG5ldyBFcnJvcignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSBkYXRhIG11c3Qgbm90IGNvZXhpc3Qgd2l0aCBwdWJsaWMsIHByb3RlY3RlZCwgb3IgcHJpdmF0ZS4gUGxlYXNlIHJlcGxhY2UgZGF0YSB3aXRoIHB1YmxpYy4nKTtcbn0gZWxzZSBpZiAoIW1vZHVsZU93bi5kYXRhKSB7XG4gIG1vZHVsZU93bi5kYXRhID0ge307XG4gIG1vZHVsZU93bi5fZGVzY3JpcHRvciA9IHt9O1xuICBhY2Nlc3NvcnMuZm9yRWFjaChmdW5jdGlvbihhY2MpIHtcbiAgICB2YXIgYWNjVHlwZSA9IHR5cGVvZiBtb2R1bGVPd25bYWNjXTtcbiAgICBpZiAoYWNjVHlwZSA9PT0gJ29iamVjdCcpIHtcbiAgICAgIG1vZHVsZU93bi5kYXRhID0gT2JqZWN0LmFzc2lnbihtb2R1bGVPd24uZGF0YSwgbW9kdWxlT3duW2FjY10pO1xuICAgICAgZm9yICh2YXIgbmFtZSBpbiBtb2R1bGVPd25bYWNjXSkge1xuICAgICAgICBtb2R1bGVPd24uX2Rlc2NyaXB0b3JbbmFtZV0gPSB7YWNjZXNzIDogYWNjfTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGFjY1R5cGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIGNvbnNvbGUud2FybignRm9yIFZNIG9iamVjdHMsIGF0dHJpYnV0ZSAnICsgYWNjICsgJyB2YWx1ZSBtdXN0IG5vdCBiZSBhIGZ1bmN0aW9uLiBDaGFuZ2UgdGhlIHZhbHVlIHRvIGFuIG9iamVjdC4nKTtcbiAgICB9XG4gIH0pO1xufX0iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==