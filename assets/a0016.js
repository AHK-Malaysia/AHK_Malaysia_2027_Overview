/* @ds-bundle: {"format":4,"namespace":"AHKMalaysiaDesignSystem_861388","components":[{"name":"Eyebrow","sourcePath":"components/brand/Eyebrow.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"PinCallout","sourcePath":"components/brand/PinCallout.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"StatCard","sourcePath":"components/core/StatCard.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/brand/Eyebrow.jsx":"90928c348d68","components/brand/Logo.jsx":"2153ca471729","components/brand/PinCallout.jsx":"fe31a501a263","components/core/Button.jsx":"f98d595e604e","components/core/Card.jsx":"a882bf940457","components/core/StatCard.jsx":"0f1c030d0bd9","components/core/Tag.jsx":"a60c788abf18","ui_kits/slides/slides.jsx":"c2549ad99df1","ui_kits/website/site.jsx":"dd33cbfab418"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.AHKMalaysiaDesignSystem_861388 = window.AHKMalaysiaDesignSystem_861388 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AHK Eyebrow — the wide-tracked uppercase kicker ("Versal") that sits
 * above headlines. Optional leading rule.
 */
function Eyebrow({
  children,
  color = 'blue',
  rule = false,
  ...rest
}) {
  const c = {
    blue: 'var(--ahk-blue)',
    navy: 'var(--ahk-navy)',
    green: 'var(--ahk-green)',
    orange: 'var(--ahk-orange)',
    red: 'var(--ahk-red)',
    gray: 'var(--ahk-gray-500)'
  }[color] || 'var(--ahk-blue)';
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '10px',
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: '13px',
      letterSpacing: '0.14em',
      textTransform: 'uppercase',
      color: c
    }
  }, rest), rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: '28px',
      height: '2px',
      background: c
    },
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/brand/Logo.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AHK Logo — renders the official AHK Malaysia mark from the SVG assets.
 * This does NOT redraw the logo; it points at the supplied SVG files.
 * A reversed / knock-out logo is NOT permitted — on dark backgrounds set
 * `keeper` to place the full-colour logo inside a white clear-space box.
 * Set `basePath` to wherever /assets/logos is served from (or pass `src`).
 */
function Logo({
  variant = 'full',
  basePath = 'assets/logos',
  src,
  height = 56,
  keeper = false,
  alt = 'AHK Malaysia — Malaysian-German Chamber of Commerce and Industry',
  style = {},
  ...rest
}) {
  const file = {
    full: 'ahk-logo-text.svg',
    // block + bilingual descriptor
    mark: 'ahk-logo.svg' // AHK block only
  }[variant] || 'ahk-logo-text.svg';
  const resolved = src || `${basePath.replace(/\/$/, '')}/${file}`;
  const h = typeof height === 'number' ? `${height}px` : height;
  const imgStyle = {
    height: h,
    width: 'auto',
    display: 'block'
  };
  if (!keeper) {
    return /*#__PURE__*/React.createElement("img", _extends({
      src: resolved,
      alt: alt,
      style: {
        ...imgStyle,
        ...style
      }
    }, rest));
  }

  // White clear-space box for placement on dark / photographic backgrounds
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-block',
      background: '#fff',
      padding: '14px 18px',
      borderRadius: 'var(--radius-sm)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", _extends({
    src: resolved,
    alt: alt,
    style: imgStyle
  }, rest)));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/brand/PinCallout.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AHK PinCallout — the brand's signature map-pin device. A light-blue
 * teardrop framing a short claim, with the AHK mark at the shoulder.
 * The pin silhouette is a plain geometric shape (not the logo). Supply
 * the AHK mark via `logoSrc`.
 */
function PinCallout({
  claim = 'Auf zu neuen Märkten.',
  logoSrc = 'assets/logos/ahk-logo.svg',
  width = 340,
  tone = 'light',
  ...rest
}) {
  const height = Math.round(width * 1.18);
  const fill = tone === 'blue' ? 'var(--ahk-blue)' : 'var(--ahk-lightblue)';
  const claimColor = tone === 'blue' ? '#fff' : 'var(--ahk-navy)';
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      width,
      height,
      fontFamily: 'var(--font-sans)'
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 100 118",
    width: width,
    height: height,
    style: {
      position: 'absolute',
      inset: 0,
      display: 'block'
    },
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M50 2 C23 2 2 23 2 49 C2 82 50 116 50 116 C50 116 98 82 98 49 C98 23 77 2 50 2 Z",
    fill: fill
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '8%',
      left: '10%',
      right: '8%',
      height: '52%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4%'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontStyle: 'italic',
      fontSize: `${width * 0.072}px`,
      lineHeight: 1.15,
      color: claimColor,
      textAlign: 'right',
      flex: '1 1 auto'
    }
  }, claim), /*#__PURE__*/React.createElement("img", {
    src: logoSrc,
    alt: "AHK",
    style: {
      height: `${width * 0.12}px`,
      width: 'auto',
      flex: 'none'
    }
  })));
}
Object.assign(__ds_scope, { PinCallout });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/PinCallout.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AHK Button — the primary call to action.
 * Navy-first, square-ish corners, no gloss. Accent variant for
 * campaign moments only.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  accent = 'blue',
  disabled = false,
  href,
  iconLeft,
  iconRight,
  onClick,
  type = 'button',
  ...rest
}) {
  const sizes = {
    sm: {
      fontSize: '13px',
      padding: '7px 14px',
      gap: '6px'
    },
    md: {
      fontSize: '15px',
      padding: '11px 22px',
      gap: '8px'
    },
    lg: {
      fontSize: '17px',
      padding: '15px 30px',
      gap: '10px'
    }
  };
  const accentColor = {
    blue: 'var(--ahk-blue)',
    green: 'var(--ahk-green)',
    orange: 'var(--ahk-orange)',
    red: 'var(--ahk-red)'
  }[accent] || 'var(--ahk-blue)';
  const base = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 700,
    letterSpacing: '0.01em',
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontSize: sizes[size].fontSize,
    padding: sizes[size].padding,
    borderRadius: 'var(--radius-sm)',
    border: '1.5px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    textDecoration: 'none',
    transition: 'background var(--dur-fast) var(--ease-standard), color var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)',
    opacity: disabled ? 0.45 : 1,
    whiteSpace: 'nowrap'
  };
  const variants = {
    primary: {
      background: 'var(--ahk-navy)',
      color: '#fff',
      borderColor: 'var(--ahk-navy)'
    },
    secondary: {
      background: 'transparent',
      color: 'var(--ahk-navy)',
      borderColor: 'var(--ahk-navy)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--ahk-navy)',
      borderColor: 'transparent'
    },
    accent: {
      background: accentColor,
      color: '#fff',
      borderColor: accentColor
    }
  };
  const [hover, setHover] = React.useState(false);
  const hoverStyle = !disabled && hover ? {
    primary: {
      background: 'var(--ahk-navy-700)',
      borderColor: 'var(--ahk-navy-700)'
    },
    secondary: {
      background: 'var(--ahk-lightblue-300)'
    },
    ghost: {
      background: 'var(--ahk-gray-100)'
    },
    accent: {
      filter: 'brightness(0.92)'
    }
  }[variant] : {};
  const style = {
    ...base,
    ...variants[variant],
    ...hoverStyle
  };
  const content = /*#__PURE__*/React.createElement(React.Fragment, null, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    },
    "aria-hidden": "true"
  }, iconLeft), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    },
    "aria-hidden": "true"
  }, iconRight));
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  if (href && !disabled) {
    return /*#__PURE__*/React.createElement("a", _extends({
      href: href,
      style: style,
      onClick: onClick
    }, handlers, rest), content);
  }
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    style: style,
    disabled: disabled,
    onClick: onClick
  }, handlers, rest), content);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AHK Card — a clean content surface. Optional cover image, eyebrow,
 * title, body and footer. A hairline border and subtle shadow; the
 * signature navy left-rule can be enabled for editorial emphasis.
 */
function Card({
  image,
  imageAlt = '',
  eyebrow,
  title,
  children,
  footer,
  rule = false,
  href,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const wrap = {
    fontFamily: 'var(--font-sans)',
    background: 'var(--color-surface-card)',
    border: '1px solid var(--color-border)',
    borderLeft: rule ? '4px solid var(--ahk-navy)' : '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    boxShadow: hover && href ? 'var(--shadow-md)' : 'var(--shadow-xs)',
    transform: hover && href ? 'translateY(-2px)' : 'none',
    transition: 'box-shadow var(--dur-normal) var(--ease-standard), transform var(--dur-normal) var(--ease-standard)',
    textDecoration: 'none',
    color: 'inherit',
    height: '100%'
  };
  const body = {
    padding: 'var(--space-6)',
    display: 'flex',
    flexDirection: 'column',
    gap: 'var(--space-2)',
    flex: 1
  };
  const inner = /*#__PURE__*/React.createElement(React.Fragment, null, image && /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      background: 'var(--ahk-gray-100)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: imageAlt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transform: hover && href ? 'scale(1.03)' : 'none',
      transition: 'transform var(--dur-slow) var(--ease-standard)'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: body
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: '12.5px',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--ahk-blue)'
    }
  }, eyebrow), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: '22px',
      lineHeight: 1.2,
      letterSpacing: '-0.01em',
      color: 'var(--ahk-navy)',
      margin: 0
    }
  }, title), children && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: '15px',
      lineHeight: 1.6,
      color: 'var(--ahk-gray-700)'
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 'var(--space-4)'
    }
  }, footer)));
  const handlers = {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  };
  if (href) return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    style: wrap
  }, handlers, rest), inner);
  return /*#__PURE__*/React.createElement("div", _extends({
    style: wrap
  }, handlers, rest), inner);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/StatCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AHK StatCard — a single bold figure with a label. For membership
 * numbers, years, trade volumes. Big serif number, quiet caption.
 */
function StatCard({
  value,
  label,
  accent = 'navy',
  align = 'left',
  ...rest
}) {
  const accentColor = {
    navy: 'var(--ahk-navy)',
    blue: 'var(--ahk-blue)',
    green: 'var(--ahk-green)',
    orange: 'var(--ahk-orange)',
    red: 'var(--ahk-red)'
  }[accent] || 'var(--ahk-navy)';
  const style = {
    fontFamily: 'var(--font-sans)',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    textAlign: align,
    alignItems: align === 'center' ? 'center' : 'flex-start'
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: style
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '32px',
      height: '3px',
      background: accentColor,
      marginBottom: '10px'
    },
    "aria-hidden": "true"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: '52px',
      lineHeight: 1,
      letterSpacing: '-0.02em',
      color: accentColor
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: '14px',
      lineHeight: 1.45,
      color: 'var(--ahk-gray-700)',
      maxWidth: '24ch'
    }
  }, label));
}
Object.assign(__ds_scope, { StatCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/StatCard.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AHK Tag — a small pill label for categories, sectors, statuses.
 * Uses an accent colour as a quiet tint by default, or solid for emphasis.
 */
function Tag({
  children,
  color = 'navy',
  solid = false,
  ...rest
}) {
  const map = {
    navy: {
      fg: 'var(--ahk-navy)',
      bg: 'var(--ahk-lightblue-300)',
      solidBg: 'var(--ahk-navy)'
    },
    blue: {
      fg: 'var(--ahk-blue)',
      bg: 'var(--ahk-blue-100)',
      solidBg: 'var(--ahk-blue)'
    },
    green: {
      fg: 'var(--ahk-green)',
      bg: 'var(--ahk-green-100)',
      solidBg: 'var(--ahk-green)'
    },
    orange: {
      fg: 'var(--ahk-orange)',
      bg: 'var(--ahk-orange-100)',
      solidBg: 'var(--ahk-orange)'
    },
    red: {
      fg: 'var(--ahk-red)',
      bg: 'var(--ahk-red-100)',
      solidBg: 'var(--ahk-red)'
    },
    gray: {
      fg: 'var(--ahk-gray-700)',
      bg: 'var(--ahk-gray-100)',
      solidBg: 'var(--ahk-gray-700)'
    }
  }[color] || {};
  const style = {
    fontFamily: 'var(--font-sans)',
    fontWeight: 600,
    fontSize: '12.5px',
    letterSpacing: '0.02em',
    lineHeight: 1,
    display: 'inline-flex',
    alignItems: 'center',
    padding: '5px 11px',
    borderRadius: 'var(--radius-pill)',
    background: solid ? map.solidBg : map.bg,
    color: solid ? '#fff' : map.fg,
    whiteSpace: 'nowrap'
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: style
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/slides/slides.jsx
try { (() => {
/* global React */
// AHK Malaysia — sample slide components (1280×720 canvas).
// Composes the design-system bundle; loaded via <script type="text/babel">.
const AHK = window.AHKMalaysiaDesignSystem_861388;
const A = "../../assets";
const W = 1280,
  H = 720;

// ---- shared slide chrome ----------------------------------------------
function Slide({
  children,
  bg = "#fff",
  pad = 84,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: W,
      height: H,
      background: bg,
      overflow: "hidden",
      fontFamily: "var(--font-sans)",
      color: "var(--ahk-ink)",
      boxSizing: "border-box",
      padding: pad,
      ...style
    }
  }, children);
}
function Kicker({
  children,
  color = "var(--ahk-blue)",
  rule = true
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 20
    }
  }, rule && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 3,
      background: color
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 16,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color
    }
  }, children));
}
function LogoTag({
  variant = "full",
  height = 40,
  keeper = false,
  style = {}
}) {
  return /*#__PURE__*/React.createElement(AHK.Logo, {
    variant: variant,
    keeper: keeper,
    basePath: A + "/logos",
    height: height,
    style: style
  });
}
function PageNo({
  n,
  tone = "navy"
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 84,
      bottom: 54,
      fontWeight: 700,
      fontSize: 15,
      letterSpacing: "0.1em",
      color: tone === "light" ? "rgba(255,255,255,.75)" : "var(--ahk-gray-400)"
    }
  }, n);
}
function Serif({
  children,
  size = 60,
  color = "var(--ahk-navy)",
  weight = 600,
  style = {}
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: weight,
      fontSize: size,
      lineHeight: 1.06,
      letterSpacing: "-0.02em",
      color,
      ...style
    }
  }, children);
}

// ---- 1. TITLE ----------------------------------------------------------
function TitleSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--ahk-navy)",
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "/images/sailing-regatta.jpg",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: 0.34
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(0,31,61,.92) 38%, rgba(0,31,61,.25) 100%)"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      padding: 84,
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: "var(--ahk-blue)"
  }, "Corporate Presentation 2025"), /*#__PURE__*/React.createElement(Serif, {
    size: 76,
    color: "#fff",
    style: {
      maxWidth: 900
    }
  }, "Connecting German &", /*#__PURE__*/React.createElement("br", null), "Malaysian business"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 23,
      color: "var(--ahk-lightblue)",
      marginTop: 26,
      maxWidth: 620,
      lineHeight: 1.5
    }
  }, "Trade \xB7 Investment \xB7 Innovation \xB7 Sustainability \u2014 the bridge between two economies.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      bottom: 52
    }
  }, /*#__PURE__*/React.createElement(LogoTag, {
    keeper: true,
    height: 46
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 64,
      bottom: 52,
      background: "#fff",
      padding: "14px 20px",
      borderRadius: "var(--radius-sm)"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "/logos/ahk-35-years.png",
    style: {
      height: 74,
      display: "block"
    }
  })));
}

// ---- 2. SECTION DIVIDER ------------------------------------------------
function SectionSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--ahk-navy)"
  }, /*#__PURE__*/React.createElement(LogoTag, {
    keeper: true,
    height: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      top: "50%",
      transform: "translateY(-50%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 150,
      lineHeight: 1,
      color: "var(--ahk-blue)",
      letterSpacing: "-0.03em"
    }
  }, "01"), /*#__PURE__*/React.createElement(Serif, {
    size: 58,
    color: "#fff",
    style: {
      marginTop: 8
    }
  }, "Market Entry & Advisory"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 20,
      color: "var(--ahk-lightblue)",
      marginTop: 20,
      maxWidth: 560,
      lineHeight: 1.55
    }
  }, "How AHK Malaysia guides German companies into Southeast Asia's fastest-growing market.")), /*#__PURE__*/React.createElement(PageNo, {
    n: "02",
    tone: "light"
  }));
}

// ---- 3. AGENDA ---------------------------------------------------------
function AgendaSlide() {
  const items = [["Who we are", "The Malaysian-German Chamber of Commerce and Industry"], ["Our services", "Market entry, delegations, membership and advocacy"], ["Bilateral trade", "Key sectors and 2025 outlook"], ["Get in touch", "Partner with us in Kuala Lumpur"]];
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement(LogoTag, {
    height: 24
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Agenda"), /*#__PURE__*/React.createElement(Serif, {
    size: 52
  }, "What we'll cover")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 44,
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "30px 70px",
      maxWidth: 1000
    }
  }, items.map(([t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      gap: 20,
      alignItems: "flex-start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 34,
      color: "var(--ahk-blue)",
      lineHeight: 1,
      minWidth: 44
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 22,
      color: "var(--ahk-navy)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16.5,
      color: "var(--ahk-gray-700)",
      marginTop: 5,
      lineHeight: 1.5
    }
  }, d))))), /*#__PURE__*/React.createElement(PageNo, {
    n: "03"
  }));
}

// ---- 4. CONTENT + IMAGE ------------------------------------------------
function ContentSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    pad: 0
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      bottom: 0,
      width: 560
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "/images/shanghai-skyline.jpg",
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 620,
      right: 84,
      top: 84,
      bottom: 84
    }
  }, /*#__PURE__*/React.createElement(LogoTag, {
    height: 24
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Market Intelligence"), /*#__PURE__*/React.createElement(Serif, {
    size: 44
  }, "A gateway to Southeast Asia")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18.5,
      lineHeight: 1.6,
      color: "var(--ahk-gray-700)",
      marginTop: 22,
      maxWidth: 520
    }
  }, "Malaysia offers German industry a stable, open economy at the heart of ASEAN \u2014 with strengths in electronics, green tech and advanced manufacturing."), /*#__PURE__*/React.createElement("ul", {
    style: {
      margin: "22px 0 0",
      padding: 0,
      listStyle: "none",
      display: "flex",
      flexDirection: "column",
      gap: 14
    }
  }, ["Strategic ASEAN location", "Skilled, multilingual workforce", "Strong German business community"].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      gap: 12,
      alignItems: "center",
      fontSize: 17.5,
      color: "var(--ahk-ink)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      background: "var(--ahk-blue)",
      flex: "none",
      borderRadius: 1
    }
  }), t)))), /*#__PURE__*/React.createElement(PageNo, {
    n: "04"
  }));
}

// ---- 5. STATS ----------------------------------------------------------
function StatSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--ahk-gray-100)"
  }, /*#__PURE__*/React.createElement(LogoTag, {
    height: 24
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Bilateral impact"), /*#__PURE__*/React.createElement(Serif, {
    size: 50
  }, "35 years, measured in trust")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 40,
      marginTop: 66
    }
  }, /*#__PURE__*/React.createElement(AHK.StatCard, {
    value: "35",
    label: "Years of bilateral success"
  }), /*#__PURE__*/React.createElement(AHK.StatCard, {
    value: "600+",
    label: "Member companies across sectors",
    accent: "green"
  }), /*#__PURE__*/React.createElement(AHK.StatCard, {
    value: "\u20AC23bn",
    label: "Annual Germany\u2013Malaysia trade",
    accent: "orange"
  }), /*#__PURE__*/React.createElement(AHK.StatCard, {
    value: "#1",
    label: "German chamber network worldwide",
    accent: "blue"
  })), /*#__PURE__*/React.createElement(PageNo, {
    n: "05"
  }));
}

// ---- 6. QUOTE ----------------------------------------------------------
function QuoteSlide() {
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--ahk-lightblue)"
  }, /*#__PURE__*/React.createElement(LogoTag, {
    height: 24
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      right: 200,
      top: "50%",
      transform: "translateY(-50%)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 120,
      lineHeight: 0.6,
      color: "var(--ahk-navy)",
      opacity: 0.28
    }
  }, "\u201C"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 600,
      fontSize: 42,
      lineHeight: 1.28,
      color: "var(--ahk-navy)",
      letterSpacing: "-0.01em",
      marginTop: -20
    }
  }, "German precision and Malaysian hospitality make an exceptional partnership \u2014 one we've built for over three decades."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 30,
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 40,
      height: 3,
      background: "var(--ahk-navy)"
    }
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      color: "var(--ahk-navy)"
    }
  }, "Dr. Anna Weber"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--ahk-navy)",
      opacity: 0.75
    }
  }, "Executive Director, AHK Malaysia")))), /*#__PURE__*/React.createElement(PageNo, {
    n: "06"
  }));
}

// ---- 7. COMPARISON (three columns) ------------------------------------
function ComparisonSlide() {
  const cols = [["blue", "Market Entry", "Company setup, licensing and legal orientation for a confident start."], ["green", "Business Development", "Partner search, delegations and trade-fair representation."], ["orange", "Advocacy & Network", "A voice for German industry and a 600-strong member community."]];
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement(LogoTag, {
    height: 24
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Our services"), /*#__PURE__*/React.createElement(Serif, {
    size: 50
  }, "Three ways we support you")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 26,
      marginTop: 54
    }
  }, cols.map(([c, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#fff",
      border: "1px solid var(--ahk-gray-200)",
      borderTop: "4px solid var(--ahk-" + c + ")",
      borderRadius: 6,
      padding: 30,
      minHeight: 240
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 30,
      color: "var(--ahk-" + c + ")"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 21,
      color: "var(--ahk-navy)",
      marginTop: 14
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16.5,
      lineHeight: 1.55,
      color: "var(--ahk-gray-700)",
      marginTop: 10
    }
  }, d)))), /*#__PURE__*/React.createElement(PageNo, {
    n: "07"
  }));
}

// ---- 8. TEAM -----------------------------------------------------------
function TeamSlide() {
  const people = [["Dr. Anna Weber", "Executive Director", "Management"], ["Lim Wei Jian", "Head of Market Entry", "Consulting"], ["Sarah Müller", "Trade Fairs & Delegations", "Business Development"], ["Ahmad Rizal", "Member Relations", "Membership"]];
  return /*#__PURE__*/React.createElement(Slide, null, /*#__PURE__*/React.createElement(LogoTag, {
    height: 24
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 40
    }
  }, /*#__PURE__*/React.createElement(Kicker, null, "Your contacts"), /*#__PURE__*/React.createElement(Serif, {
    size: 50
  }, "The people behind AHK Malaysia")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 26,
      marginTop: 56
    }
  }, people.map(([n, f, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "1/1",
      background: "var(--ahk-lightblue-300)",
      borderRadius: 6,
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "center",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 56,
      color: "var(--ahk-lightblue)",
      marginBottom: -6
    }
  }, n.split(" ").map(x => x[0]).slice(0, 2).join(""))), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 18,
      color: "var(--ahk-navy)",
      marginTop: 14
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 15,
      color: "var(--ahk-ink)",
      marginTop: 3
    }
  }, f), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13.5,
      color: "var(--ahk-gray-500)",
      marginTop: 2
    }
  }, d)))), /*#__PURE__*/React.createElement(PageNo, {
    n: "08"
  }));
}

// ---- 9. CLOSING --------------------------------------------------------
function ClosingSlide() {
  const rows = [["Visit", "Menara MASA, Jalan Raja Chulan\n50250 Kuala Lumpur, Malaysia"], ["Email", "info@malaysia.ahk.de"], ["Phone", "+60 3 9235 1800"], ["Web", "malaysia.ahk.de"]];
  return /*#__PURE__*/React.createElement(Slide, {
    bg: "var(--ahk-navy)"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      top: 84
    }
  }, /*#__PURE__*/React.createElement(LogoTag, {
    keeper: true,
    height: 44
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 84,
      top: "50%",
      transform: "translateY(-50%)",
      maxWidth: 560
    }
  }, /*#__PURE__*/React.createElement(Kicker, {
    color: "var(--ahk-blue)"
  }, "Let's talk"), /*#__PURE__*/React.createElement(Serif, {
    size: 62,
    color: "#fff"
  }, "Terima kasih.", /*#__PURE__*/React.createElement("br", null), "Vielen Dank."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24,
      fontSize: 18,
      color: "var(--ahk-lightblue)",
      lineHeight: 1.6,
      maxWidth: 440
    }
  }, "Malaysian-German Chamber of Commerce and Industry \u2014 your partner for German\u2013Malaysian business.")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      right: 84,
      top: "50%",
      transform: "translateY(-50%)",
      width: 380,
      border: "1px solid rgba(255,255,255,.20)",
      borderRadius: 6,
      padding: "34px 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 13,
      letterSpacing: "0.16em",
      textTransform: "uppercase",
      color: "var(--ahk-blue)",
      marginBottom: 22
    }
  }, "Contact us"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 18
    }
  }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "rgba(255,255,255,.55)",
      marginBottom: 4
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 17,
      color: "#fff",
      lineHeight: 1.45,
      whiteSpace: "pre-line"
    }
  }, v))))));
}
const SLIDES = [["Title", TitleSlide], ["Section", SectionSlide], ["Agenda", AgendaSlide], ["Content", ContentSlide], ["Stats", StatSlide], ["Quote", QuoteSlide], ["Comparison", ComparisonSlide], ["Team", TeamSlide], ["Closing", ClosingSlide]];
Object.assign(window, {
  Slide,
  Kicker,
  LogoTag,
  PageNo,
  Serif,
  TitleSlide,
  SectionSlide,
  AgendaSlide,
  ContentSlide,
  StatSlide,
  QuoteSlide,
  ComparisonSlide,
  TeamSlide,
  ClosingSlide,
  SLIDES
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/slides/slides.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/site.jsx
try { (() => {
/* global React */
// AHK Malaysia — corporate website recreation. Composes the DS bundle.
const AHK = window.AHKMalaysiaDesignSystem_861388;
const A = "../../assets";
const {
  useState
} = React;
const NAV = ["About us", "Services", "Events", "Publications", "Membership", "Contact"];
function TopBar({
  lang,
  setLang
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--ahk-navy-800)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 40px",
      height: 40,
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      gap: 22,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7
    }
  }, "Kuala Lumpur"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .3
    }
  }, "|"), ["EN", "DE"].map(l => /*#__PURE__*/React.createElement("button", {
    key: l,
    onClick: () => setLang(l),
    style: {
      background: "none",
      border: "none",
      cursor: "pointer",
      color: "#fff",
      fontWeight: lang === l ? 700 : 400,
      opacity: lang === l ? 1 : .6,
      fontSize: 13,
      padding: 0,
      fontFamily: "var(--font-sans)"
    }
  }, l)), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .3
    }
  }, "|"), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7,
      display: "inline-flex",
      alignItems: "center",
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })), "Search")));
}
function Header({
  lang,
  setLang
}) {
  const [active, setActive] = useState("");
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "#fff",
      borderBottom: "1px solid var(--ahk-gray-200)"
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "0 40px",
      height: 84,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement(AHK.Logo, {
    variant: "full",
    basePath: A + "/logos",
    height: 50
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 4
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("a", {
    key: n,
    href: "#",
    onMouseEnter: () => setActive(n),
    onMouseLeave: () => setActive(""),
    style: {
      textDecoration: "none",
      fontSize: 15.5,
      fontWeight: 600,
      color: active === n ? "var(--ahk-blue)" : "var(--ahk-navy)",
      padding: "10px 14px",
      borderRadius: 4
    }
  }, n)), /*#__PURE__*/React.createElement("div", {
    style: {
      marginLeft: 10
    }
  }, /*#__PURE__*/React.createElement(AHK.Button, {
    size: "sm"
  }, "Become a member")))));
}
function Hero({
  lang
}) {
  const copy = lang === "DE" ? {
    eye: "Deutsch-Malaysische Industrie- und Handelskammer",
    h: ["Auf zu", "neuen Märkten."],
    p: "Wir verbinden deutsche und malaysische Unternehmen — durch Handel, Investitionen und Innovation."
  } : {
    eye: "Malaysian-German Chamber of Commerce & Industry",
    h: ["Onward to", "new markets."],
    p: "We connect German and Malaysian businesses through trade, investment and innovation — for over 35 years."
  };
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      background: "var(--ahk-navy)",
      color: "#fff",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: A + "/images/sailing-regatta.jpg",
    style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      opacity: .32
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(90deg, rgba(0,31,61,.95) 40%, rgba(0,31,61,.2) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: 1280,
      margin: "0 auto",
      padding: "96px 40px 104px",
      display: "grid",
      gridTemplateColumns: "1.3fr .7fr",
      alignItems: "center",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 3,
      background: "var(--ahk-blue)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ahk-blue)"
    }
  }, copy.eye)), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 68,
      lineHeight: 1.03,
      letterSpacing: "-0.02em",
      color: "#fff",
      margin: 0
    }
  }, copy.h[0], /*#__PURE__*/React.createElement("br", null), copy.h[1]), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 20,
      lineHeight: 1.55,
      color: "var(--ahk-lightblue)",
      marginTop: 26,
      maxWidth: 540
    }
  }, copy.p), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 14,
      marginTop: 34
    }
  }, /*#__PURE__*/React.createElement(AHK.Button, {
    size: "lg"
  }, "Explore our services"), /*#__PURE__*/React.createElement(AHK.Button, {
    size: "lg",
    variant: "accent",
    accent: "blue"
  }, "Doing business in Malaysia"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, /*#__PURE__*/React.createElement(AHK.PinCallout, {
    claim: lang === "DE" ? "Auf zu neuen Märkten." : "Onward to new markets.",
    width: 280,
    logoSrc: A + "/logos/ahk-logo.svg"
  }))));
}
function StatsBand() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ahk-gray-100)",
      borderBottom: "1px solid var(--ahk-gray-200)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "56px 40px",
      display: "grid",
      gridTemplateColumns: "repeat(4,1fr)",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement(AHK.StatCard, {
    value: "35",
    label: "Years of bilateral success"
  }), /*#__PURE__*/React.createElement(AHK.StatCard, {
    value: "600+",
    label: "Member companies",
    accent: "green"
  }), /*#__PURE__*/React.createElement(AHK.StatCard, {
    value: "\u20AC23bn",
    label: "Annual bilateral trade",
    accent: "orange"
  }), /*#__PURE__*/React.createElement(AHK.StatCard, {
    value: "140+",
    label: "AHK offices worldwide",
    accent: "blue"
  })));
}
function Services() {
  const items = [["blue", "Market Entry", "Company setup, licensing and legal orientation for a confident start in Malaysia."], ["green", "Business Development", "Partner search, delegation visits and trade-fair representation."], ["orange", "Membership & Network", "Join a 600-strong community of German and Malaysian businesses."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "88px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 3,
      background: "var(--ahk-blue)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ahk-blue)"
    }
  }, "What we do")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 44,
      letterSpacing: "-0.02em",
      color: "var(--ahk-navy)",
      margin: 0,
      maxWidth: 640
    }
  }, "Your partner for German\u2013Malaysian business"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 26,
      marginTop: 48
    }
  }, items.map(([c, t, d], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      background: "#fff",
      border: "1px solid var(--ahk-gray-200)",
      borderTop: "4px solid var(--ahk-" + c + ")",
      borderRadius: 6,
      padding: 34,
      display: "flex",
      flexDirection: "column",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 700,
      fontSize: 30,
      color: "var(--ahk-" + c + ")"
    }
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 22,
      color: "var(--ahk-navy)"
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 16,
      lineHeight: 1.6,
      color: "var(--ahk-gray-700)"
    }
  }, d), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      marginTop: 6,
      fontWeight: 700,
      fontSize: 15,
      color: "var(--ahk-navy)",
      textDecoration: "none"
    }
  }, "Learn more \u2192")))));
}
function News() {
  const items = [[A + "/images/shanghai-skyline.jpg", "Event", "German–Malaysian Business Forum 2025", "200+ leaders explore bilateral trade opportunities in Kuala Lumpur."], [A + "/images/balloons-landscape.jpg", "Insight", "Doing Business in Malaysia — 2025 Guide", "Our annual overview of regulation, tax and market opportunity."], [A + "/images/buenos-aires-skyline.jpg", "News", "AHK welcomes 40 new member companies", "The chamber's network continues to grow across key sectors."]];
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ahk-gray-100)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "88px 40px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 34,
      height: 3,
      background: "var(--ahk-green)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "0.14em",
      textTransform: "uppercase",
      color: "var(--ahk-green)"
    }
  }, "Latest")), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 44,
      letterSpacing: "-0.02em",
      color: "var(--ahk-navy)",
      margin: 0
    }
  }, "News & events")), /*#__PURE__*/React.createElement(AHK.Button, {
    variant: "secondary"
  }, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: 26
    }
  }, items.map(([img, eye, t, d], i) => /*#__PURE__*/React.createElement(AHK.Card, {
    key: i,
    image: img,
    eyebrow: eye,
    title: t,
    footer: /*#__PURE__*/React.createElement("a", {
      href: "#",
      style: {
        fontWeight: 700,
        fontSize: 15,
        color: "var(--ahk-navy)",
        textDecoration: "none"
      }
    }, "Read more \u2192")
  }, d)))));
}
function MemberCTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--ahk-navy)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "80px 40px",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 60,
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 40,
      letterSpacing: "-0.02em",
      color: "#fff",
      margin: 0
    }
  }, "Stay close to the market"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 18,
      lineHeight: 1.6,
      color: "var(--ahk-lightblue)",
      marginTop: 16,
      maxWidth: 460
    }
  }, "Get bilateral trade insights, event invitations and market updates from AHK Malaysia.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      if (email) setSent(true);
    },
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("input", {
    value: email,
    onChange: e => setEmail(e.target.value),
    type: "email",
    placeholder: "Your work email",
    style: {
      flex: 1,
      fontFamily: "var(--font-sans)",
      fontSize: 16,
      padding: "14px 16px",
      borderRadius: 4,
      border: "1.5px solid rgba(255,255,255,.25)",
      background: "rgba(255,255,255,.08)",
      color: "#fff"
    }
  }), /*#__PURE__*/React.createElement(AHK.Button, {
    variant: "accent",
    accent: "blue",
    size: "lg",
    type: "submit"
  }, sent ? "Subscribed ✓" : "Subscribe"))));
}
function Footer() {
  const cols = [["About us", ["Who we are", "Our team", "35 years", "Careers"]], ["Services", ["Market entry", "Delegations", "Trade fairs", "Legal & tax"]], ["Resources", ["Publications", "Events", "Newsletter", "Press"]]];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--ahk-navy-800)",
      color: "#fff"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "64px 40px 40px",
      display: "grid",
      gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
      gap: 40
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(AHK.Logo, {
    variant: "full",
    keeper: true,
    basePath: A + "/logos",
    height: 46
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 14.5,
      lineHeight: 1.7,
      color: "var(--ahk-lightblue)",
      marginTop: 20,
      maxWidth: 280
    }
  }, "Malaysian-German Chamber of Commerce and Industry", /*#__PURE__*/React.createElement("br", null), "Menara MASA, Kuala Lumpur", /*#__PURE__*/React.createElement("br", null), "info@malaysia.ahk.de")), cols.map(([h, links]) => /*#__PURE__*/React.createElement("div", {
    key: h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14,
      letterSpacing: "0.06em",
      textTransform: "uppercase",
      color: "#fff",
      marginBottom: 16
    }
  }, h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    href: "#",
    style: {
      fontSize: 14.5,
      color: "var(--ahk-lightblue)",
      textDecoration: "none"
    }
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid rgba(255,255,255,.12)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: "0 auto",
      padding: "20px 40px",
      display: "flex",
      justifyContent: "space-between",
      fontSize: 13,
      color: "rgba(255,255,255,.6)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 AHK Malaysia. All rights reserved."), /*#__PURE__*/React.createElement("span", null, "Part of the global AHK network \xB7 malaysia.ahk.de"))));
}
function Site() {
  const [lang, setLang] = useState("EN");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-sans)",
      color: "var(--ahk-ink)",
      background: "#fff"
    }
  }, /*#__PURE__*/React.createElement(Header, {
    lang: lang,
    setLang: setLang
  }), /*#__PURE__*/React.createElement(Hero, {
    lang: lang
  }), /*#__PURE__*/React.createElement(StatsBand, null), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(News, null), /*#__PURE__*/React.createElement(MemberCTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
Object.assign(window, {
  Site
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/site.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.PinCallout = __ds_scope.PinCallout;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.StatCard = __ds_scope.StatCard;

__ds_ns.Tag = __ds_scope.Tag;

})();
