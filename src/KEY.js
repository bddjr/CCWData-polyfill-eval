//@ts-nocheck

// jsonObj./*CCWData-polyfill-eval*/toString.constructor`
(function (jsonObj) {
    function _typeof(e) {
        return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        }
            : function (e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
            }
            ,
            _typeof(e)
    }
    try {
        window.Function = toString.constructor
        if (document.location) {
            // polyfill
            ((source) => {
                const vm = (() => {
                    try {
                        // www.ccw.site
                        // codingclip.com
                        // turbowarp.org
                        const rootElem = document.querySelector("#root,#__next,#app")
                        if (!rootElem) return;
                        const rootKey = Object.keys(rootElem).find(k => k.startsWith("__reactContainer"))
                        if (!rootKey) return;
                        const root = rootElem[rootKey];
                        if (typeof root != "object" || !root) return;
                        const ignoreObj = new Set();
                        function search(obj) {
                            ignoreObj.add(obj);
                            if (typeof obj.getState == "function") {
                                const r = obj.getState()?.scratchGui?.vm;
                                if (typeof r == "object" && r) return r;
                            }
                            for (const name in obj) {
                                if (name !== "getState" && Object.prototype.hasOwnProperty.call(obj, name)) {
                                    const value = obj[name]
                                    if (typeof value == "object" && value && !ignoreObj.has(value)) {
                                        const r = search(value);
                                        if (r) return r;
                                    }
                                }
                            }
                        }
                        return search(root);
                    } catch (e) {
                        window?.console?.error?.(e)
                    }
                })();
                Object.assign(Object.getPrototypeOf(vm.runtime.ext_CCWData), source)
            })({
                getValueInJSON(args) {
                    var key = String(args.KEY), json = String(args.JSON), jsonObj;
                    try {
                        jsonObj = JSON.parse(json)
                    } catch (e) {
                        return "error: ".concat(e.message)
                    }
                    if (/[()=]/gm.test(key))
                        return "error: invalid key ".concat(key, ", cannot contain ()=");
                    var key2 = "jsonObj[".concat(key, "]"), rtObj;
                    Array.isArray(jsonObj) ? key = key.startsWith("[") ? "jsonObj".concat(key) : "jsonObj[".concat(key, "]") : /\s/gm.test(key) ? (console.warn("[CCW Data] warning: invalid key ".concat(key, ", space and dot cannot be used together")),
                        key = 'jsonObj["'.concat(key, '"]')) : key = "jsonObj.".concat(key);
                    try {
                        rtObj = eval(key)
                    } catch (e) {
                        try {
                            rtObj = eval(key2)
                        } catch (e) {
                            return "error: key or expression invalid"
                        }
                    }
                    return "object" === _typeof(rtObj) ? JSON.stringify(rtObj) : rtObj
                },
                setValueInJSON(args) {
                    var key = String(args.KEY), value = String(args.VALUE), json = String(args.JSON), jsonObj;
                    try {
                        jsonObj = JSON.parse(json)
                    } catch (e) {
                        return "error: ".concat(e.message)
                    }
                    if (/[()=]/gm.test(key))
                        return "error: invalid key ".concat(key, ", cannot contain ()=");
                    var valueObj = value;
                    if (/^[\[].*?[\]]$/gm.test(value) || /^[\{].*?[\}]$/gm.test(value))
                        try {
                            valueObj = JSON.parse(value)
                        } catch (e) { }
                    "string" == typeof valueObj && /^-?\d*\.?\d*$/gm.test(valueObj) && (valueObj = Number(valueObj));
                    try {
                        Array.isArray(jsonObj) ? jsonObj[key] = valueObj : /[\.\[\]]/gm.test(key) ? (valueObj instanceof Object ? (valueObj = JSON.stringify(valueObj),
                            valueObj = "JSON.parse('".concat(valueObj, "')")) : "string" == typeof valueObj && (valueObj = "'".concat(valueObj, "'")),
                            eval("jsonObj.".concat(key, " = ").concat(valueObj))) : jsonObj[key] = valueObj
                    } catch (e) {
                        return "error: key or expression invalid"
                    }
                    return JSON.stringify(jsonObj)
                },
            })
        } else {
            // CSense
            delete this.getValueInJSON;
            delete this.setValueInJSON;
            jsonObj.toJSON = _ => { throw '' }
        }
    } catch (e) {
        window?.console?.error?.(e)
    }
}).call(...arguments[1])
// ``${[this,jsonObj]}`
