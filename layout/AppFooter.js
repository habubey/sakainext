import React, { useContext } from "react";
import { LayoutContext } from "./layoutcontext";
import getConfig from "next/config";

export default function AppFooter() {
    const { layoutColorMode } = useContext(LayoutContext);
    const contextPath = getConfig().publicRuntimeConfig.contextPath;

    return (
        <div className="layout-footer">
            <img src={layoutColorMode === "light" ? `${contextPath}/layout/images/logo-dark.svg` : `${contextPath}/layout/images/logo-white.svg`} alt="Logo" height="20" className="mr-2" />
            by
            <span className="font-medium ml-2">PrimeReact</span>
        </div>
    );
}
