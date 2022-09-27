"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ MyApp)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./node_modules/primereact/resources/primereact.css
var primereact = __webpack_require__(1909);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: external "react-transition-group"
const external_react_transition_group_namespaceObject = require("react-transition-group");
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./layout/layoutcontext.js
var layoutcontext = __webpack_require__(8689);
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
;// CONCATENATED MODULE: ./layout/AppTopbar.js






function AppTopbar() {
    const contextPath = config_default()().publicRuntimeConfig.contextPath;
    const { onToggleMenuClick , layoutColorMode , mobileTopbarMenuActive , onMobileTopbarMenuClick , onMobileSubTopbarMenuClick  } = (0,external_react_.useContext)(layoutcontext/* LayoutContext */.V);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout-topbar",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                href: `${contextPath}/`,
                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    className: "layout-topbar-logo",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: layoutColorMode === "light" ? `${contextPath}/layout/images/logo-dark.svg` : `${contextPath}/layout/images/logo-white.svg`,
                                width: "47.22px",
                                height: "35px",
                                widt: "true",
                                alt: "logo"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "SAKAI"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "p-link layout-menu-button layout-topbar-button",
                onClick: onToggleMenuClick,
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "pi pi-bars"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                type: "button",
                className: "p-link layout-topbar-menu-button layout-topbar-button",
                onClick: onMobileTopbarMenuClick,
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "pi pi-ellipsis-v"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                className: external_classnames_default()("layout-topbar-menu lg:flex origin-top", {
                    "layout-topbar-menu-mobile-active": mobileTopbarMenuActive
                }),
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: "p-link layout-topbar-button",
                            onClick: onMobileSubTopbarMenuClick,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "pi pi-calendar"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Events"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: "p-link layout-topbar-button",
                            onClick: onMobileSubTopbarMenuClick,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "pi pi-cog"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Settings"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                            className: "p-link layout-topbar-button",
                            onClick: onMobileSubTopbarMenuClick,
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "pi pi-user"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Profile"
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./layout/AppFooter.js




function AppFooter() {
    const { layoutColorMode  } = (0,external_react_.useContext)(layoutcontext/* LayoutContext */.V);
    const contextPath = config_default()().publicRuntimeConfig.contextPath;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout-footer",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                src: layoutColorMode === "light" ? `${contextPath}/layout/images/logo-dark.svg` : `${contextPath}/layout/images/logo-white.svg`,
                alt: "Logo",
                height: "20",
                className: "mr-2"
            }),
            "by",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "font-medium ml-2",
                children: "PrimeReact"
            })
        ]
    });
};

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: external "prop-types"
const external_prop_types_namespaceObject = require("prop-types");
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_namespaceObject);
;// CONCATENATED MODULE: ./demo/utils/navlink.js





NavLink.propTypes = {
    href: (external_prop_types_default()).string.isRequired,
    activeclassname: (external_prop_types_default()).string,
    exact: (external_prop_types_default()).bool,
    role: (external_prop_types_default()).string
};
NavLink.defaultProps = {
    exact: false
};
function NavLink({ href , exact , children , role , target , ariaLabel , ...props }) {
    const { pathname  } = (0,router_.useRouter)();
    const isActive = exact ? pathname === href : pathname.startsWith(href);
    if (isActive) {
        props.className += " active router-link-active router-link-exact-active";
    }
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        role: role,
        target: target,
        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
            "aria-label": ariaLabel,
            ...props,
            children: children
        })
    });
}

;// CONCATENATED MODULE: external "primereact/ripple"
const ripple_namespaceObject = require("primereact/ripple");
// EXTERNAL MODULE: external "primereact/badge"
var badge_ = __webpack_require__(9797);
;// CONCATENATED MODULE: ./layout/AppMenu.js









const AppSubmenu = (props)=>{
    const { 0: activeIndex , 1: setActiveIndex  } = (0,external_react_.useState)(null);
    const onMenuItemClick = (event, item, index)=>{
        //avoid processing disabled items
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        //execute command
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
        if (index === activeIndex) setActiveIndex(null);
        else setActiveIndex(index);
        if (props.onMenuItemClick) {
            props.onMenuItemClick({
                originalEvent: event,
                item: item
            });
        }
    };
    const onKeyDown = (event)=>{
        if (event.code === "Enter" || event.code === "Space") {
            event.preventDefault();
            event.target.click();
        }
    };
    const renderLinkContent = (item)=>{
        let submenuIcon = item.items && /*#__PURE__*/ jsx_runtime_.jsx("i", {
            className: "pi pi-fw pi-angle-down menuitem-toggle-icon"
        });
        let badge = item.badge && /*#__PURE__*/ jsx_runtime_.jsx(badge_.Badge, {
            value: item.badge
        });
        return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: item.icon
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                    children: item.label
                }),
                submenuIcon,
                badge,
                /*#__PURE__*/ jsx_runtime_.jsx(ripple_namespaceObject.Ripple, {})
            ]
        });
    };
    const renderLink = (item, i)=>{
        let content = renderLinkContent(item);
        if (item.to) {
            return /*#__PURE__*/ jsx_runtime_.jsx(NavLink, {
                ariaLabel: item.label,
                onKeyDown: onKeyDown,
                role: "menuitem",
                className: "p-ripple",
                href: item.to,
                onClick: (e)=>onMenuItemClick(e, item, i),
                exact: true,
                children: content
            });
        } else {
            return /*#__PURE__*/ jsx_runtime_.jsx("a", {
                tabIndex: "0",
                "aria-label": item.label,
                onKeyDown: onKeyDown,
                role: "menuitem",
                href: item.url,
                className: "p-ripple",
                onClick: (e)=>onMenuItemClick(e, item, i),
                target: "_blank",
                rel: "noreferrer",
                children: content
            });
        }
    };
    let items = props.items && props.items.map((item, i)=>{
        let active = activeIndex === i;
        let styleClass = external_classnames_default()(item.badgeStyleClass, {
            "layout-menuitem-category": props.root,
            "active-menuitem": active && !item.to
        });
        if (props.root) {
            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                className: styleClass,
                role: "none",
                children: props.root === true && /*#__PURE__*/ (0,jsx_runtime_.jsxs)((external_react_default()).Fragment, {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "layout-menuitem-root-text",
                            "aria-label": item.label,
                            children: item.label
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(AppSubmenu, {
                            items: item.items,
                            onMenuItemClick: props.onMenuItemClick
                        })
                    ]
                })
            }, i);
        } else {
            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                className: styleClass,
                role: "none",
                children: [
                    renderLink(item, i),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_namespaceObject.CSSTransition, {
                        classNames: "layout-submenu-wrapper",
                        timeout: {
                            enter: 1000,
                            exit: 450
                        },
                        in: active,
                        unmountOnExit: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(AppSubmenu, {
                            items: item.items,
                            onMenuItemClick: props.onMenuItemClick
                        })
                    })
                ]
            }, i);
        }
    });
    return items ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: props.className,
        role: "menu",
        children: items
    }) : null;
};
function AppMenu() {
    const { onMenuItemClick , layoutColorMode  } = (0,external_react_.useContext)(layoutcontext/* LayoutContext */.V);
    const contextPath = config_default()().publicRuntimeConfig.contextPath;
    const menu = [
        {
            label: "Home",
            items: [
                {
                    label: "Dashboard",
                    icon: "pi pi-fw pi-home",
                    to: "/"
                }, 
            ]
        },
        {
            label: "UI Components",
            icon: "pi pi-fw pi-sitemap",
            items: [
                {
                    label: "Form Layout",
                    icon: "pi pi-fw pi-id-card",
                    to: "/formlayout"
                },
                {
                    label: "Input",
                    icon: "pi pi-fw pi-check-square",
                    to: "/input"
                },
                {
                    label: "Float Label",
                    icon: "pi pi-fw pi-bookmark",
                    to: "/floatlabel"
                },
                {
                    label: "Invalid State",
                    icon: "pi pi-fw pi-exclamation-circle",
                    to: "/invalidstate"
                },
                {
                    label: "Button",
                    icon: "pi pi-fw pi-mobile",
                    to: "/button"
                },
                {
                    label: "Table",
                    icon: "pi pi-fw pi-table",
                    to: "/table"
                },
                {
                    label: "List",
                    icon: "pi pi-fw pi-list",
                    to: "/list"
                },
                {
                    label: "Tree",
                    icon: "pi pi-fw pi-share-alt",
                    to: "/tree"
                },
                {
                    label: "Panel",
                    icon: "pi pi-fw pi-tablet",
                    to: "/panel"
                },
                {
                    label: "Overlay",
                    icon: "pi pi-fw pi-clone",
                    to: "/overlay"
                },
                {
                    label: "Media",
                    icon: "pi pi-fw pi-image",
                    to: "/media"
                },
                {
                    label: "Menu",
                    icon: "pi pi-fw pi-bars",
                    to: "/menu"
                },
                {
                    label: "Message",
                    icon: "pi pi-fw pi-comment",
                    to: "/messages"
                },
                {
                    label: "File",
                    icon: "pi pi-fw pi-file",
                    to: "/file"
                },
                {
                    label: "Chart",
                    icon: "pi pi-fw pi-chart-bar",
                    to: "/chart"
                },
                {
                    label: "Misc",
                    icon: "pi pi-fw pi-circle-off",
                    to: "/misc"
                }, 
            ]
        },
        {
            label: "UI Blocks",
            items: [
                {
                    label: "Free Blocks",
                    icon: "pi pi-fw pi-eye",
                    to: "/blocks",
                    badge: "NEW"
                },
                {
                    label: "All Blocks",
                    icon: "pi pi-fw pi-globe",
                    url: "https://www.primefaces.org/primeblocks-react"
                }, 
            ]
        },
        {
            label: "Icons",
            items: [
                {
                    label: "PrimeIcons",
                    icon: "pi pi-fw pi-prime",
                    to: "/icons",
                    badge: "NEW"
                }
            ]
        },
        {
            label: "Pages",
            icon: "pi pi-fw pi-clone",
            items: [
                {
                    label: "Crud",
                    icon: "pi pi-fw pi-user-edit",
                    to: "/crud"
                },
                {
                    label: "Timeline",
                    icon: "pi pi-fw pi-calendar",
                    to: "/timeline"
                },
                {
                    label: "Empty",
                    icon: "pi pi-fw pi-circle-off",
                    to: "/empty"
                }, 
            ]
        },
        {
            label: "Menu Hierarchy",
            icon: "pi pi-fw pi-search",
            items: [
                {
                    label: "Submenu 1",
                    icon: "pi pi-fw pi-bookmark",
                    items: [
                        {
                            label: "Submenu 1.1",
                            icon: "pi pi-fw pi-bookmark",
                            items: [
                                {
                                    label: "Submenu 1.1.1",
                                    icon: "pi pi-fw pi-bookmark"
                                },
                                {
                                    label: "Submenu 1.1.2",
                                    icon: "pi pi-fw pi-bookmark"
                                },
                                {
                                    label: "Submenu 1.1.3",
                                    icon: "pi pi-fw pi-bookmark"
                                }, 
                            ]
                        },
                        {
                            label: "Submenu 1.2",
                            icon: "pi pi-fw pi-bookmark",
                            items: [
                                {
                                    label: "Submenu 1.2.1",
                                    icon: "pi pi-fw pi-bookmark"
                                },
                                {
                                    label: "Submenu 1.2.2",
                                    icon: "pi pi-fw pi-bookmark"
                                }, 
                            ]
                        }, 
                    ]
                },
                {
                    label: "Submenu 2",
                    icon: "pi pi-fw pi-bookmark",
                    items: [
                        {
                            label: "Submenu 2.1",
                            icon: "pi pi-fw pi-bookmark",
                            items: [
                                {
                                    label: "Submenu 2.1.1",
                                    icon: "pi pi-fw pi-bookmark"
                                },
                                {
                                    label: "Submenu 2.1.2",
                                    icon: "pi pi-fw pi-bookmark"
                                },
                                {
                                    label: "Submenu 2.1.3",
                                    icon: "pi pi-fw pi-bookmark"
                                }, 
                            ]
                        },
                        {
                            label: "Submenu 2.2",
                            icon: "pi pi-fw pi-bookmark",
                            items: [
                                {
                                    label: "Submenu 2.2.1",
                                    icon: "pi pi-fw pi-bookmark"
                                },
                                {
                                    label: "Submenu 2.2.2",
                                    icon: "pi pi-fw pi-bookmark"
                                }, 
                            ]
                        }, 
                    ]
                }, 
            ]
        },
        {
            label: "Get Started",
            items: [
                {
                    label: "Documentation",
                    icon: "pi pi-fw pi-question",
                    to: "/documentation"
                },
                {
                    label: "View Source",
                    icon: "pi pi-fw pi-search",
                    url: "https://github.com/primefaces/sakai-react"
                }, 
            ]
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "layout-menu-container",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(AppSubmenu, {
                items: menu,
                className: "layout-menu",
                onMenuItemClick: onMenuItemClick,
                root: true,
                role: "menu"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("a", {
                href: "https://www.primefaces.org/primeblocks-react",
                className: "block mt-3",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    alt: "primeblocks",
                    className: "w-full",
                    src: layoutColorMode === "light" ? `${contextPath}/layout/images/banner-primeblocks.png` : `${contextPath}/layout/images/banner-primeblocks-dark.png`
                })
            })
        ]
    });
};

// EXTERNAL MODULE: external "primereact/radiobutton"
var radiobutton_ = __webpack_require__(2948);
// EXTERNAL MODULE: external "primereact/inputswitch"
var inputswitch_ = __webpack_require__(5452);
// EXTERNAL MODULE: external "primereact/button"
var button_ = __webpack_require__(1088);
;// CONCATENATED MODULE: ./layout/AppConfig.js








function AppConfig() {
    const { 0: active , 1: setActive  } = (0,external_react_.useState)(false);
    const { 0: scale , 1: setScale  } = (0,external_react_.useState)(14);
    const { 0: scales  } = (0,external_react_.useState)([
        12,
        13,
        14,
        15,
        16
    ]);
    const { 0: theme , 1: setTheme  } = (0,external_react_.useState)("lara-light-indigo");
    const { ripple , onRipple , inputStyle , onInputStyleChange , layoutMode , onLayoutModeChange , onColorModeChange  } = (0,external_react_.useContext)(layoutcontext/* LayoutContext */.V);
    const contextPath = config_default()().publicRuntimeConfig.contextPath;
    const config = (0,external_react_.useRef)(null);
    let outsideClickListener = (0,external_react_.useRef)(null);
    const unbindOutsideClickListener = (0,external_react_.useCallback)(()=>{
        if (outsideClickListener.current) {
            document.removeEventListener("click", outsideClickListener.current);
            outsideClickListener.current = null;
        }
    }, []);
    const hideConfigurator = (0,external_react_.useCallback)((event)=>{
        setActive(false);
        unbindOutsideClickListener();
        event.preventDefault();
    }, [
        unbindOutsideClickListener
    ]);
    const bindOutsideClickListener = (0,external_react_.useCallback)(()=>{
        if (!outsideClickListener.current) {
            outsideClickListener.current = (event)=>{
                if (active && isOutsideClicked(event)) {
                    hideConfigurator(event);
                }
            };
            document.addEventListener("click", outsideClickListener.current);
        }
    }, [
        active,
        hideConfigurator
    ]);
    (0,external_react_.useEffect)(()=>{
        if (active) {
            bindOutsideClickListener();
        } else {
            unbindOutsideClickListener();
        }
    }, [
        active,
        bindOutsideClickListener,
        unbindOutsideClickListener
    ]);
    const isOutsideClicked = (event)=>{
        return !(config.current.isSameNode(event.target) || config.current.contains(event.target));
    };
    const decrementScale = ()=>{
        setScale((prevState)=>--prevState);
    };
    const incrementScale = ()=>{
        setScale((prevState)=>++prevState);
    };
    (0,external_react_.useEffect)(()=>{
        document.documentElement.style.fontSize = scale + "px";
    }, [
        scale
    ]);
    const toggleConfigurator = (event)=>{
        setActive((prevState)=>!prevState);
    };
    const configClassName = external_classnames_default()("layout-config", {
        "layout-config-active": active
    });
    const replaceLink = (0,external_react_.useCallback)((linkElement, href, callback)=>{
        if (isIE()) {
            linkElement.setAttribute("href", href);
            if (callback) {
                callback();
            }
        } else {
            const id = linkElement.getAttribute("id");
            const cloneLinkElement = linkElement.cloneNode(true);
            cloneLinkElement.setAttribute("href", href);
            cloneLinkElement.setAttribute("id", id + "-clone");
            linkElement.parentNode.insertBefore(cloneLinkElement, linkElement.nextSibling);
            cloneLinkElement.addEventListener("load", ()=>{
                linkElement.remove();
                cloneLinkElement.setAttribute("id", id);
                if (callback) {
                    callback();
                }
            });
        }
    }, []);
    (0,external_react_.useEffect)(()=>{
        let themeElement = document.getElementById("theme-link");
        const themeHref = contextPath + "/themes/" + theme + "/theme.css";
        replaceLink(themeElement, themeHref);
    }, [
        theme,
        replaceLink
    ]);
    const isIE = ()=>{
        return /(MSIE|Trident\/|Edge\/)/i.test(window.navigator.userAgent);
    };
    const changeTheme = (e, theme, scheme)=>{
        onColorModeChange(scheme);
        setTheme(theme);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        ref: config,
        className: configClassName,
        id: "layout-config",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                className: "layout-config-button p-link",
                id: "layout-config-button",
                onClick: toggleConfigurator,
                children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                    className: "pi pi-cog"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(button_.Button, {
                className: "p-button-danger layout-config-close p-button-rounded p-button-text",
                icon: "pi pi-times",
                onClick: hideConfigurator
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "layout-config-content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        className: "mt-0",
                        children: "Component Scale"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "config-scale",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(button_.Button, {
                                icon: "pi pi-minus",
                                onClick: decrementScale,
                                className: "p-button-text",
                                disabled: scale === scales[0]
                            }),
                            scales.map((item)=>{
                                return /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: external_classnames_default()("pi pi-circle-on", {
                                        "scale-active": item === scale
                                    })
                                }, item);
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(button_.Button, {
                                icon: "pi pi-plus",
                                onClick: incrementScale,
                                className: "p-button-text",
                                disabled: scale === scales[scales.length - 1]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "Input Style"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "p-formgroup-inline",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "field-radiobutton",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(radiobutton_.RadioButton, {
                                        inputId: "input_outlined",
                                        name: "inputstyle",
                                        value: "outlined",
                                        onChange: (e)=>onInputStyleChange(e.value),
                                        checked: inputStyle === "outlined"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "input_outlined",
                                        children: "Outlined"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "field-radiobutton",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(radiobutton_.RadioButton, {
                                        inputId: "input_filled",
                                        name: "inputstyle",
                                        value: "filled",
                                        onChange: (e)=>onInputStyleChange(e.value),
                                        checked: inputStyle === "filled"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "input_filled",
                                        children: "Filled"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "Ripple Effect"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(inputswitch_.InputSwitch, {
                        checked: ripple,
                        onChange: onRipple
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "Menu Type"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "p-formgroup-inline",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "field-radiobutton",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(radiobutton_.RadioButton, {
                                        inputId: "static",
                                        name: "layoutMode",
                                        value: "static",
                                        onChange: (e)=>onLayoutModeChange(e.value),
                                        checked: layoutMode === "static"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "static",
                                        children: "Static"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "field-radiobutton",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(radiobutton_.RadioButton, {
                                        inputId: "overlay",
                                        name: "layoutMode",
                                        value: "overlay",
                                        onChange: (e)=>onLayoutModeChange(e.value),
                                        checked: layoutMode === "overlay"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                        htmlFor: "overlay",
                                        children: "Overlay"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h5", {
                        children: "Themes"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        className: "mt-0",
                        children: "Bootstrap"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid free-themes",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "bootstrap4-light-blue", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/bootstrap4-light-blue.svg`,
                                        alt: "Bootstrap Light Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "bootstrap4-light-purple", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/bootstrap4-light-purple.svg`,
                                        alt: "Bootstrap Light Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "bootstrap4-dark-blue", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/bootstrap4-dark-blue.svg`,
                                        alt: "Bootstrap Dark Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "bootstrap4-dark-purple", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/bootstrap4-dark-purple.svg`,
                                        alt: "Bootstrap Dark Purple"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        children: "Material Design"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid free-themes",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "md-light-indigo", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-light-indigo.svg`,
                                        alt: "Material Light Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "md-light-deeppurple", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-light-deeppurple.svg`,
                                        alt: "Material Light DeepPurple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "md-dark-indigo", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-dark-indigo.svg`,
                                        alt: "Material Dark Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "md-dark-deeppurple", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-dark-deeppurple.svg`,
                                        alt: "Material Dark DeepPurple"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        children: "Material Design Compact"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid free-themes",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "mdc-light-indigo", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-light-indigo.svg`,
                                        alt: "Material Light Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "mdc-light-deeppurple", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-light-deeppurple.svg`,
                                        alt: "Material Light DeepPurple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "mdc-dark-indigo", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-dark-indigo.svg`,
                                        alt: "Material Dark Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "mdc-dark-deeppurple", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/md-dark-deeppurple.svg`,
                                        alt: "Material Dark DeepPurple"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        children: "Tailwind"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid free-themes",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-3 text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "p-link",
                                onClick: (e)=>changeTheme(e, "tailwind-light", "light"),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `${contextPath}/layout/images/themes/tailwind-light.png`,
                                    alt: "Tailwind Light"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        children: "Fluent UI"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "grid free-themes",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-3 text-center",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                className: "p-link",
                                onClick: (e)=>changeTheme(e, "fluent-light", "light"),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    src: `${contextPath}/layout/images/themes/fluent-light.png`,
                                    alt: "Fluent Light"
                                })
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        children: "PrimeOne Design - 2022"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid free-themes",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "lara-light-indigo", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-light-indigo.png`,
                                        alt: "Lara Light Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "lara-light-blue", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-light-blue.png`,
                                        alt: "Lara Light Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "lara-light-purple", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-light-purple.png`,
                                        alt: "Lara Light Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "lara-light-teal", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-light-teal.png`,
                                        alt: "Lara Light Teal"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "lara-dark-indigo", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-dark-indigo.png`,
                                        alt: "Lara Dark Indigo"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "lara-dark-blue", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-dark-blue.png`,
                                        alt: "Lara Dark Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "lara-dark-purple", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-dark-purple.png`,
                                        alt: "Lara Dark Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "lara-dark-teal", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/lara-dark-teal.png`,
                                        alt: "Lara Dark Teal"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                        children: "PrimeOne Design - 2021"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "grid free-themes",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "saga-blue", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/saga-blue.png`,
                                        alt: "Saga Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "saga-green", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/saga-green.png`,
                                        alt: "Saga Green"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "saga-orange", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/saga-orange.png`,
                                        alt: "Saga Orange"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "saga-purple", "light"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/saga-purple.png`,
                                        alt: "Saga Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "vela-blue", "dim"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/vela-blue.png`,
                                        alt: "Vela Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "vela-green", "dim"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/vela-green.png`,
                                        alt: "Vela Green"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "vela-orange", "dim"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/vela-orange.png`,
                                        alt: "Vela Orange"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "vela-purple", "dim"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/vela-purple.png`,
                                        alt: "Vela Purple"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "arya-blue", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/arya-blue.png`,
                                        alt: "Arya Blue"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "arya-green", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/arya-green.png`,
                                        alt: "Arya Green"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "arya-orange", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/arya-orange.png`,
                                        alt: "Arya Orange"
                                    })
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "col-3 text-center",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "p-link",
                                    onClick: (e)=>changeTheme(e, "arya-purple", "dark"),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                        src: `${contextPath}/layout/images/themes/arya-purple.png`,
                                        alt: "Arya Purple"
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./demo/utils/ScrollToTop.js


function ScrollToTop(props) {
    const router = (0,router_.useRouter)();
    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [router]);
    return props.children;
}
/* harmony default export */ const utils_ScrollToTop = ((0,router_.withRouter)(ScrollToTop));

// EXTERNAL MODULE: external "primereact/api"
var api_ = __webpack_require__(2250);
var api_default = /*#__PURE__*/__webpack_require__.n(api_);
;// CONCATENATED MODULE: external "primereact/tooltip"
const tooltip_namespaceObject = require("primereact/tooltip");
;// CONCATENATED MODULE: ./layout/layout.js














function Layout({ children  }) {
    const { inputStyle , ripple , layoutColorMode , layoutMode , staticMenuInactive , overlayMenuActive , onWrapperClick , onSidebarClick , mobileMenuActive  } = (0,external_react_.useContext)(layoutcontext/* LayoutContext */.V);
    const copyTooltipRef = (0,external_react_.useRef)();
    const contextPath = config_default()().publicRuntimeConfig.contextPath;
    (api_default()).ripple = true;
    const containerClass = external_classnames_default()("layout-wrapper", {
        "layout-overlay": layoutMode === "overlay",
        "layout-static": layoutMode === "static",
        "layout-static-sidebar-inactive": staticMenuInactive && layoutMode === "static",
        "layout-overlay-sidebar-active": overlayMenuActive && layoutMode === "overlay",
        "layout-mobile-sidebar-active": mobileMenuActive,
        "p-input-filled": inputStyle === "filled",
        "p-ripple-disabled": ripple === false,
        "layout-theme-light": layoutColorMode === "light"
    });
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(utils_ScrollToTop, {
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("base", {
                            href: contextPath
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("title", {
                            children: "Sakai React with NextJS"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                            charSet: "UTF-8"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("link", {
                            rel: "icon",
                            href: `${contextPath}/favicon.ico`,
                            type: "image/x-icon"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("script", {
                            src: `${contextPath}/layout/scripts/prism/prism.js`,
                            "data-manual": true
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: containerClass,
                    onClick: onWrapperClick,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(tooltip_namespaceObject.Tooltip, {
                            ref: copyTooltipRef,
                            target: ".block-action-copy",
                            position: "bottom",
                            content: "Copied to clipboard",
                            event: "focus"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(AppTopbar, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "layout-sidebar",
                            onClick: onSidebarClick,
                            children: /*#__PURE__*/ jsx_runtime_.jsx(AppMenu, {})
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "layout-main-container",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "layout-main",
                                    children: children
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(AppFooter, {})
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(AppConfig, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(external_react_transition_group_namespaceObject.CSSTransition, {
                            classNames: "layout-mask",
                            timeout: {
                                enter: 200,
                                exit: 200
                            },
                            in: mobileMenuActive,
                            unmountOnExit: true,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "layout-mask p-component-overlay"
                            })
                        })
                    ]
                })
            ]
        })
    });
}
/* harmony default export */ const layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.js










function MyApp({ Component , pageProps  }) {
    if (Component.getLayout) {
        return Component.getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        }));
    } else {
        return /*#__PURE__*/ jsx_runtime_.jsx(layoutcontext/* default */.Z, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(layout, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        });
    }
};


/***/ }),

/***/ 9003:
/***/ ((module) => {

module.exports = require("classnames");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 2250:
/***/ ((module) => {

module.exports = require("primereact/api");

/***/ }),

/***/ 9797:
/***/ ((module) => {

module.exports = require("primereact/badge");

/***/ }),

/***/ 1088:
/***/ ((module) => {

module.exports = require("primereact/button");

/***/ }),

/***/ 5452:
/***/ ((module) => {

module.exports = require("primereact/inputswitch");

/***/ }),

/***/ 2948:
/***/ ((module) => {

module.exports = require("primereact/radiobutton");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,479,689], () => (__webpack_exec__(2161)));
module.exports = __webpack_exports__;

})();