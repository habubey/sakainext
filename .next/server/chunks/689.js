"use strict";
exports.id = 689;
exports.ids = [689];
exports.modules = {

/***/ 8689:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ LayoutContext),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2250);
/* harmony import */ var primereact_api__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primereact_api__WEBPACK_IMPORTED_MODULE_2__);



const LayoutContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext();
function LayoutProvider({ children  }) {
    const { 0: layoutColorMode , 1: setLayoutColorMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("light");
    const { 0: layoutMode , 1: setLayoutMode  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("static");
    const { 0: inputStyle , 1: setInputStyle  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("outlined");
    const { 0: ripple , 1: setRipple  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);
    const { 0: staticMenuInactive , 1: setStaticMenuInactive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: overlayMenuActive , 1: setOverlayMenuActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: mobileMenuActive , 1: setMobileMenuActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { 0: mobileTopbarMenuActive , 1: setMobileTopbarMenuActive  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    let menuClick = false;
    let mobileTopbarMenuClick = false;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (mobileMenuActive) {
            addClass(document.body, "body-overflow-hidden");
        } else {
            removeClass(document.body, "body-overflow-hidden");
        }
    }, [
        mobileMenuActive
    ]);
    const onInputStyleChange = (inputStyle)=>{
        setInputStyle(inputStyle);
    };
    const onRipple = (e)=>{
        (primereact_api__WEBPACK_IMPORTED_MODULE_2___default().ripple) = e.value;
        setRipple(e.value);
    };
    const onLayoutModeChange = (mode)=>{
        setLayoutMode(mode);
    };
    const onColorModeChange = (mode)=>{
        setLayoutColorMode(mode);
    };
    const onWrapperClick = (event)=>{
        if (!menuClick) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }
        if (!mobileTopbarMenuClick) {
            setMobileTopbarMenuActive(false);
        }
        mobileTopbarMenuClick = false;
        menuClick = false;
    };
    const onToggleMenuClick = (event)=>{
        menuClick = true;
        if (isDesktop()) {
            if (layoutMode === "overlay") {
                if (mobileMenuActive === true) {
                    setOverlayMenuActive(true);
                }
                setOverlayMenuActive((prevState)=>!prevState);
                setMobileMenuActive(false);
            } else if (layoutMode === "static") {
                setStaticMenuInactive((prevState)=>!prevState);
            }
        } else {
            setMobileMenuActive((prevState)=>!prevState);
        }
        event.preventDefault();
    };
    const onSidebarClick = ()=>{
        menuClick = true;
    };
    const onMobileTopbarMenuClick = (event)=>{
        mobileTopbarMenuClick = true;
        setMobileTopbarMenuActive((prevState)=>!prevState);
        event.preventDefault();
    };
    const onMobileSubTopbarMenuClick = (event)=>{
        mobileTopbarMenuClick = true;
        event.preventDefault();
    };
    const onMenuItemClick = (event)=>{
        if (!event.item.items) {
            setOverlayMenuActive(false);
            setMobileMenuActive(false);
        }
    };
    const isDesktop = ()=>{
        return window.innerWidth >= 992;
    };
    const addClass = (element, className)=>{
        if (element.classList) element.classList.add(className);
        else element.className += " " + className;
    };
    const removeClass = (element, className)=>{
        if (element.classList) element.classList.remove(className);
        else element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    };
    const initLayoutState = {
        layoutMode,
        inputStyle,
        ripple,
        staticMenuInactive,
        overlayMenuActive,
        mobileMenuActive,
        mobileTopbarMenuActive,
        setLayoutMode,
        setInputStyle,
        setRipple,
        setStaticMenuInactive,
        setOverlayMenuActive,
        setMobileMenuActive,
        setMobileTopbarMenuActive,
        onInputStyleChange,
        onRipple,
        onLayoutModeChange,
        onColorModeChange,
        onWrapperClick,
        onToggleMenuClick,
        onSidebarClick,
        onMobileTopbarMenuClick,
        onMobileSubTopbarMenuClick,
        onMenuItemClick,
        layoutColorMode,
        setLayoutColorMode
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(LayoutContext.Provider, {
        value: initLayoutState,
        children: children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LayoutProvider);


/***/ })

};
;