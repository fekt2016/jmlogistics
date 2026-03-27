(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Desktop/jmlogistic/components/AnimateInView.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AnimateInView
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jmlogistic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jmlogistic/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jmlogistic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/jmlogistic/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
const variants = {
    'fade-up': 'opacity-0 translate-y-8',
    'fade-down': 'opacity-0 -translate-y-8',
    'fade-left': 'opacity-0 translate-x-8',
    'fade-right': 'opacity-0 -translate-x-8',
    'fade': 'opacity-0',
    'zoom': 'opacity-0 scale-95'
};
const visible = 'opacity-100 translate-y-0 translate-x-0 scale-100';
function AnimateInView({ children, variant = 'fade-up', delay = 0, duration = 600, threshold = 0.15, className = '', once = true }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jmlogistic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [inView, setInView] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jmlogistic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jmlogistic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AnimateInView.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const observer = new IntersectionObserver({
                "AnimateInView.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setInView(true);
                        if (once) observer.unobserve(el);
                    } else if (!once) {
                        setInView(false);
                    }
                }
            }["AnimateInView.useEffect"], {
                threshold
            });
            observer.observe(el);
            return ({
                "AnimateInView.useEffect": ()=>observer.disconnect()
            })["AnimateInView.useEffect"];
        }
    }["AnimateInView.useEffect"], [
        once,
        threshold
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$jmlogistic$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: `transition-all ease-out ${variants[variant]} ${inView ? visible : ''} ${className}`,
        style: {
            transitionDuration: `${duration}ms`,
            transitionDelay: inView ? `${delay}ms` : '0ms'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Desktop/jmlogistic/components/AnimateInView.jsx",
        lineNumber: 49,
        columnNumber: 5
    }, this);
}
_s(AnimateInView, "K+dCFMkCcTyPMHOI0MxAWPXS6Js=");
_c = AnimateInView;
var _c;
__turbopack_context__.k.register(_c, "AnimateInView");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Desktop_jmlogistic_components_AnimateInView_jsx_0ni_ijf._.js.map