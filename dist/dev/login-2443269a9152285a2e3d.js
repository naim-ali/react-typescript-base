(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login"],{

/***/ "/bki":
/*!*************************************************!*\
  !*** ./src/app/components/Auth/Login/Login.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "PrCN");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "lTCR");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils */ "45a1");
/* harmony import */ var _Auth_m_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Auth.m.scss */ "wURd");
/* harmony import */ var _Auth_m_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Auth_m_scss__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "55Ip");








/* harmony default export */ __webpack_exports__["default"] = (function () {
    var history = Object(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["useHistory"])();
    var _a = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
        email: "",
        password: ""
    }), 2), loginDetails = _a[0], setLoginDetails = _a[1];
    var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__read"])(Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useMutation"])(graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(templateObject_1 || (templateObject_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__makeTemplateObject"])(["\n        mutation Login($email: String!) {\n          login(email: $email)\n        }\n    "], ["\n        mutation Login($email: String!) {\n          login(email: $email)\n        }\n    "])))), 2), login = _b[0], data = _b[1].data;
    function submitLogin(e) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var data;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        e.preventDefault();
                        return [4 /*yield*/, login({ variables: loginDetails })];
                    case 1:
                        data = (_a.sent()).data;
                        if (data && data.login) {
                            Object(_utils__WEBPACK_IMPORTED_MODULE_5__["saveTokens"])(data.login);
                            history.push("/client");
                        }
                        return [2 /*return*/];
                }
            });
        });
    }
    return Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getTokens"])() ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__["Redirect"], { to: '/client' }) :
        (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_Auth_m_scss__WEBPACK_IMPORTED_MODULE_6___default.a.form_panel, _Auth_m_scss__WEBPACK_IMPORTED_MODULE_6___default.a.one) },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_6___default.a.form_header },
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Account Login")),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", { onSubmit: submitLogin },
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_6___default.a.form_group },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { htmlFor: "username" }, "Username"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "text", id: "username", name: "username", required: true })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_6___default.a.form_group },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { htmlFor: "password" }, "Password"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "password", id: "password", name: "password", required: true })),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_6___default.a.form_group },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_6___default.a.form_remember },
                            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", { type: "checkbox" }),
                            "Remember Me"),
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_6___default.a.form_recovery, href: "#" }, "Forgot Password?")),
                    react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_6___default.a.form_group },
                        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", { type: "submit" }, "Log In"))))));
});
var templateObject_1;


/***/ }),

/***/ "45a1":
/*!*******************************************!*\
  !*** ./src/app/components/Auth/utils.tsx ***!
  \*******************************************/
/*! exports provided: saveTokens, getTokens, deleteTokens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTokens", function() { return saveTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTokens", function() { return getTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTokens", function() { return deleteTokens; });
// module for saving tokens to local storage
var TOKEN_KEY = 'aurign://auth/jwt';
// tokens = { accessToken: "xyz", refreshToken: "abc" }
function saveTokens(tokens) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify(tokens));
}
function getTokens() {
    var token = localStorage.getItem(TOKEN_KEY);
    return token && JSON.parse(token);
}
function deleteTokens() {
    localStorage.removeItem(TOKEN_KEY);
}


/***/ }),

/***/ "KNKZ":
/*!*************************************************!*\
  !*** ./src/app/components/Auth/Gaurd/Gaurd.tsx ***!
  \*************************************************/
/*! exports provided: GaurdRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GaurdRoute", function() { return GaurdRoute; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "45a1");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "55Ip");




var GaurdRoute = function (_a) {
    var Component = _a.component, rest = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__rest"])(_a, ["component"]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Route"], Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, rest, { render: function (props) { return (Object(_utils__WEBPACK_IMPORTED_MODULE_2__["getTokens"])() ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Component, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, props))
            : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__["Redirect"], { to: '/auth' })); } })));
};


/***/ }),

/***/ "KcP/":
/*!******************************************!*\
  !*** ./src/app/components/Dash/Dash.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dash.m.scss */ "tqS/");
/* harmony import */ var _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Dash_m_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "gdfu");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ant-design/icons */ "RBnf");





/* harmony default export */ __webpack_exports__["default"] = (function () {
    var menu = (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"], { theme: "dark" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, { key: "0" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "/" }, "Profile")),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Menu"].Item, { key: "1" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "/" }, "Sign out"))));
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.dash_wrap },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.site_wrap },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.site_nav },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.name },
                    "Orion.Studio",
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: "24", height: "24", viewBox: "0 0 24 24" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", { d: "M11.5,22C11.64,22 11.77,22 11.9,21.96C12.55,21.82 13.09,21.38 13.34,20.78C13.44,20.54 13.5,20.27 13.5,20H9.5A2,2 0 0,0 11.5,22M18,10.5C18,7.43 15.86,4.86 13,4.18V3.5A1.5,1.5 0 0,0 11.5,2A1.5,1.5 0 0,0 10,3.5V4.18C7.13,4.86 5,7.43 5,10.5V16L3,18V19H20V18L18,16M19.97,10H21.97C21.82,6.79 20.24,3.97 17.85,2.15L16.42,3.58C18.46,5 19.82,7.35 19.97,10M6.58,3.58L5.15,2.15C2.76,3.97 1.18,6.79 1,10H3C3.18,7.35 4.54,5 6.58,3.58Z" }))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.active },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "#" }, "Projects")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "#0" }, "Collab")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "#0" }, "Payment")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "#0" }, "Video")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "#0" }, "Distribution")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null,
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "#0" }, "Messages"))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.note },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Open the D.A.W"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Start a recording session with talented artists."))),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "breadcrumbs" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "#0/" }, "Home/")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", { className: "title" }, "All Projects"),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.nav_tabs, id: "nav-tabs" },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "#0", className: "active" },
                            "All Projects",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "0")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "#0" },
                            "Archived Projects",
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, "0")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "#0" }, "Invited Projects")),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profile_card },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.stripe_wrapper },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.stripe_wrapper_stripe, _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.stripe_wrapper_stripe_one) }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.stripe_wrapper_stripe, _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.stripe_wrapper_stripe_two) }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.stripe_wrapper_stripe, _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.stripe_wrapper_stripe_three) }),
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_1___default()(_Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.stripe_wrapper_stripe, _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.stripe_wrapper_stripe_four) })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profile_image },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: "https://www.al.com/resizer/4T8A_W8jgJk1h2_7PunP0NDfxQE=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/FSH23MTNCFH6LN7CI4X2GYL7SU.jpg" })),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.profile_name },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(antd__WEBPACK_IMPORTED_MODULE_3__["Dropdown"], { placement: "bottomCenter", overlay: menu, trigger: ['hover'] },
                                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { className: "ant-dropdown-link", onClick: function (e) { return e.preventDefault(); } },
                                    "test user ",
                                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_4__["DownOutlined"], null)))))),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.content_columns },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.col },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "https://ec2-34-239-248-142.compute-1.amazonaws.com/studio" }, "test 1")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "https://ec2-34-239-248-142.compute-1.amazonaws.com/studio" }, "test 5")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.col },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "https://ec2-34-239-248-142.compute-1.amazonaws.com/studio" }, "test 2")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.col },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "https://ec2-34-239-248-142.compute-1.amazonaws.com/studio" }, "test 3")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.col },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item },
                            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", { href: "https://ec2-34-239-248-142.compute-1.amazonaws.com/studio" }, "test 4")),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item }),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Dash_m_scss__WEBPACK_IMPORTED_MODULE_2___default.a.item })))))));
});


/***/ }),

/***/ "N63E":
/*!*******************************************************!*\
  !*** ./src/app/components/Auth/Register/Register.tsx ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "TSYQ");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "45a1");
/* harmony import */ var _Auth_m_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Auth.m.scss */ "wURd");
/* harmony import */ var _Auth_m_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Auth_m_scss__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function () {
    return Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getTokens"])() ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Redirect"], { to: '/client' }) :
        (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(_Auth_m_scss__WEBPACK_IMPORTED_MODULE_4___default.a.form_panel, _Auth_m_scss__WEBPACK_IMPORTED_MODULE_4___default.a.two) },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_4___default.a.form_header },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Register Account")),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null,
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_4___default.a.form_group },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { htmlFor: "username" }, "Username"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "text", id: "username", name: "username", required: true })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_4___default.a.form_group },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { htmlFor: "password" }, "Password"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "password", id: "password", name: "password", required: true })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_4___default.a.form_group },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { htmlFor: "cpassword" }, "Confirm Password"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "password", id: "cpassword", name: "cpassword", required: true })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_4___default.a.form_group },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", { htmlFor: "email" }, "Email Address"),
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", { type: "email", id: "email", name: "email", required: true })),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_4___default.a.form_group },
                        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { type: "submit" }, "Register"))))));
});


/***/ }),

/***/ "SCmg":
/*!************************************!*\
  !*** ./src/app/components/App.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _auth0_auth0_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @auth0/auth0-react */ "rk4w");
/* harmony import */ var _Auth_Gaurd_Gaurd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth/Gaurd/Gaurd */ "KNKZ");
/* harmony import */ var _Auth_Auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Auth/Auth */ "gT3f");
/* harmony import */ var _Dash_Dash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Dash/Dash */ "KcP/");






var App = function () {
    var _a = Object(_auth0_auth0_react__WEBPACK_IMPORTED_MODULE_2__["useAuth0"])(), isLoading = _a.isLoading, error = _a.error;
    if (error) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
            "Oops... ",
            error.message);
    }
    // if (isLoading) {
    //   return <Loading />;
    // }
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { id: "app", className: "d-flex flex-column h-100" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], null,
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Auth_Gaurd_Gaurd__WEBPACK_IMPORTED_MODULE_3__["GaurdRoute"], { path: "/client", exact: true, component: _Dash_Dash__WEBPACK_IMPORTED_MODULE_5__["default"] }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], { path: "/auth", exact: true, component: _Auth_Auth__WEBPACK_IMPORTED_MODULE_4__["default"] }))));
};
/* harmony default export */ __webpack_exports__["default"] = (App);


/***/ }),

/***/ "gT3f":
/*!******************************************!*\
  !*** ./src/app/components/Auth/Auth.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Login_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login/Login */ "/bki");
/* harmony import */ var _Register_Register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Register/Register */ "N63E");
/* harmony import */ var _Auth_m_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Auth.m.scss */ "wURd");
/* harmony import */ var _Auth_m_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Auth_m_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ "7l9Y");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["default"] = (function () {
    var videoSource = 'https://grando.io/orian/video/video.mp4';
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_3___default.a.videobg },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_4___default.a, { playing: true, loop: true, muted: true, url: videoSource }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_3___default.a.overlay })),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_3___default.a.form },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_3___default.a.form_videobg },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_4___default.a, { playing: true, loop: true, muted: true, url: videoSource }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_3___default.a.overlay })),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Auth_m_scss__WEBPACK_IMPORTED_MODULE_3___default.a.form_toggle }),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Login_Login__WEBPACK_IMPORTED_MODULE_1__["default"], null),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Register_Register__WEBPACK_IMPORTED_MODULE_2__["default"], null))));
});


/***/ }),

/***/ "jlLB":
/*!*****************************************************!*\
  !*** ./node_modules/moment/locale sync en-us|en-gb ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en-gb": "Oaa7",
	"./en-gb.js": "Oaa7"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "jlLB";

/***/ }),

/***/ "oduv":
/*!**************************************!*\
  !*** ./src/app/assets/css/site.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "qgVz":
/*!***************************!*\
  !*** ./src/app/index.tsx ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "i8i4");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_AppContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AppContainer */ "zEEe");



react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AppContainer__WEBPACK_IMPORTED_MODULE_2__["default"], null), document.getElementById("root"));


/***/ }),

/***/ "tqS/":
/*!*********************************************!*\
  !*** ./src/app/components/Dash/Dash.m.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"dash_wrap":"dash-dash_wrap","site_wrap":"dash-site_wrap","profile_card":"dash-profile_card","profile_image":"dash-profile_image","profile_name":"dash-profile_name","stripe_wrapper":"dash-stripe_wrapper","stripe_wrapper_stripe":"dash-stripe_wrapper_stripe","stripe_wrapper_stripe_one":"dash-stripe_wrapper_stripe_one","stripe_wrapper_stripe_two":"dash-stripe_wrapper_stripe_two","stripe_wrapper_stripe_three":"dash-stripe_wrapper_stripe_three","stripe_wrapper_stripe_four":"dash-stripe_wrapper_stripe_four","site_nav":"dash-site_nav","active":"dash-active","note":"dash-note","name":"dash-name","content_columns":"dash-content_columns","col":"dash-col","item":"dash-item","nav_tabs":"dash-nav_tabs"};

/***/ }),

/***/ "wURd":
/*!*********************************************!*\
  !*** ./src/app/components/Auth/Auth.m.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"overlay":"auth-overlay","form_panel":"auth-form_panel","one":"auth-one","videobg":"auth-videobg","form":"auth-form","form_videobg":"auth-form_videobg","form_toggle":"auth-form_toggle","visible":"auth-visible","form_group":"auth-form_group","two":"auth-two","form_remember":"auth-form_remember","form_recovery":"auth-form_recovery","hidden":"auth-hidden","active":"auth-active","form_header":"auth-form_header","pen-footer":"auth-pen-footer","material-icons":"auth-material-icons","cp-fab":"auth-cp-fab"};

/***/ }),

/***/ "zEEe":
/*!*********************************************!*\
  !*** ./src/app/components/AppContainer.tsx ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "q1tI");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_site_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/site.scss */ "oduv");
/* harmony import */ var _assets_css_site_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_site_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./App */ "SCmg");
/* harmony import */ var history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! history */ "LhCv");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "55Ip");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ "VX74");
/* harmony import */ var _apollo_client_link_context__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @apollo/client/link/context */ "MWEN");









var httpLink = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["createHttpLink"])({
    uri: 'http://localhost:3000/graphql',
});
var authLink = Object(_apollo_client_link_context__WEBPACK_IMPORTED_MODULE_7__["setContext"])(function (_, _a) {
    var headers = _a.headers;
    // get the authentication token from local storage if it exists
    var token = localStorage.getItem('aurign://auth/jwt');
    // return the headers to the context so httpLink can read them
    return {
        headers: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])(Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, headers), { authorization: token ? "Bearer " + token : "" })
    };
});
var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_6__["ApolloClient"]({
    link: authLink.concat(httpLink),
    cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_6__["InMemoryCache"]()
});
var AppContainer = function () {
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_apollo_client__WEBPACK_IMPORTED_MODULE_6__["ApolloProvider"], { client: client },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_5__["Router"], { history: Object(history__WEBPACK_IMPORTED_MODULE_4__["createBrowserHistory"])() },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_App__WEBPACK_IMPORTED_MODULE_3__["default"], null))));
};
/* harmony default export */ __webpack_exports__["default"] = (AppContainer);


/***/ })

}]);
//# sourceMappingURL=login-2443269a9152285a2e3d.js.map