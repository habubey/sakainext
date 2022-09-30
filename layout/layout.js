import React, { useRef, useContext, useEffect } from "react";
import Head from "next/head";
import { CSSTransition } from "react-transition-group";
import AppTopbar from "./AppTopbar";
import AppFooter from "./AppFooter";
import AppMenu from "./AppMenu";
import AppConfig from "./AppConfig";
import ScrollToTop from "../demo/utils/ScrollToTop";
import PrimeReact from "primereact/api";
import { Tooltip } from "primereact/tooltip";
import getConfig from "next/config";
import { LayoutContext } from "./layoutcontext";
import classNames from "classnames";
import { useEventListener } from "primereact/hooks";
function Layout({ children }) {
    const { layoutState, layoutConfig, onWrapperClick, onSidebarClick } = useContext(LayoutContext);
    const copyTooltipRef = useRef();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    PrimeReact.ripple = true;
    const containerRef = useRef();
    const sideBarRef = useRef();

    const [bindTopbarDocumentClickListener, unbindTopbarDocumentClickListener] = useEventListener({
        target: containerRef,
        type: "click",
        listener: onWrapperClick,
    });
    const [bindSidebarDocumentClickListener, unbindSidebarDocumentClickListener] = useEventListener({
        target: sideBarRef,
        type: "click",
        listener: onSidebarClick,
    });

    useEffect(() => {
        bindTopbarDocumentClickListener();
        bindSidebarDocumentClickListener();
    }, [layoutConfig.overlayMenuActive]);

    const containerClass = classNames("layout-wrapper", {
        "layout-overlay": layoutState.layoutMode === "overlay",
        "layout-static": layoutState.layoutMode === "static",
        "layout-static-sidebar-inactive": layoutConfig.staticMenuInactive && layoutState.layoutMode === "static",
        "layout-overlay-sidebar-active": layoutConfig.overlayMenuActive && layoutState.layoutMode === "overlay",
        "layout-mobile-sidebar-active": layoutConfig.mobileMenuActive,
        "p-input-filled": layoutState.inputStyle === "filled",
        "p-ripple-disabled": layoutState.ripple === false,
        "layout-theme-light": layoutState.layoutColorMode === "light",
    });

    return (
        <>
            <ScrollToTop>
                <Head>
                    <base href={contextPath}></base>
                    <title>Sakai React with NextJS</title>
                    <meta charSet="UTF-8" />
                    <link rel="icon" href={`${contextPath}/favicon.ico`} type="image/x-icon"></link>
                    {/* eslint-disable */}
                    <script src={`${contextPath}/layout/scripts/prism/prism.js`} data-manual></script>
                    {/* eslint-enable */}
                </Head>

                <div ref={containerRef} className={containerClass}>
                    <Tooltip ref={copyTooltipRef} target=".block-action-copy" position="bottom" content="Copied to clipboard" event="focus" />

                    <AppTopbar />

                    <div ref={sideBarRef} className="layout-sidebar">
                        <AppMenu />
                    </div>

                    <div className="layout-main-container">
                        <div className="layout-main">{children}</div>

                        <AppFooter />
                    </div>
                    <AppConfig />

                    <CSSTransition classNames="layout-mask" timeout={{ enter: 200, exit: 200 }} in={layoutConfig.mobileMenuActive} unmountOnExit>
                        <div className="layout-mask p-component-overlay"></div>
                    </CSSTransition>
                </div>
            </ScrollToTop>
        </>
    );
}

export default Layout;
