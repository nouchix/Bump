/* @ds-bundle: {"format":4,"namespace":"BumpDesignSystem_4e5c17","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Logo","sourcePath":"components/brand/Logo.jsx"},{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Divider","sourcePath":"components/display/Divider.jsx"},{"name":"Icon","sourcePath":"components/display/Icon.jsx"},{"name":"Alert","sourcePath":"components/feedback/Alert.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Dropzone","sourcePath":"components/forms/Dropzone.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"CoverArt","sourcePath":"components/music/CoverArt.jsx"},{"name":"Equalizer","sourcePath":"components/music/Equalizer.jsx"},{"name":"PlayerBar","sourcePath":"components/music/PlayerBar.jsx"},{"name":"TrackCard","sourcePath":"components/music/TrackCard.jsx"},{"name":"AppHeader","sourcePath":"components/navigation/AppHeader.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Wordmark","sourcePath":"components/navigation/Wordmark.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"d567d1ad934f","components/actions/IconButton.jsx":"b455ac92aac7","components/brand/Logo.jsx":"034823462936","components/display/Avatar.jsx":"daef28384b71","components/display/Badge.jsx":"b01039824d2d","components/display/Card.jsx":"8f28bfad4075","components/display/Divider.jsx":"cae9f26ad024","components/display/Icon.jsx":"4b3887e0f92e","components/feedback/Alert.jsx":"ac469d0ed119","components/feedback/Dialog.jsx":"9cf7809f20d4","components/feedback/Toast.jsx":"043719dce0d7","components/feedback/Tooltip.jsx":"0cafb465b7de","components/forms/Checkbox.jsx":"955a77d14c9b","components/forms/Dropzone.jsx":"ae99901f01a4","components/forms/Field.jsx":"e90253f635f5","components/forms/Input.jsx":"4f71e9333d3f","components/forms/Select.jsx":"77bf56c7964e","components/forms/Switch.jsx":"a516b7decd30","components/music/CoverArt.jsx":"54a6cc92a52d","components/music/Equalizer.jsx":"5bb7dfab2605","components/music/PlayerBar.jsx":"66a513cfed95","components/music/TrackCard.jsx":"fcbf4258387a","components/navigation/AppHeader.jsx":"c9cd31f4353b","components/navigation/Tabs.jsx":"fd1d439afbe8","components/navigation/Wordmark.jsx":"1a98022ca5a3","ui_kits/web/App.jsx":"75e942be00c7","ui_kits/web/ConsentScreen.jsx":"5ac794fc9be7","ui_kits/web/HomeScreen.jsx":"42036a01404d","ui_kits/web/LoginScreen.jsx":"98fc97d6d161","ui_kits/web/UploadScreen.jsx":"9b965e391487","ui_kits/web/data.js":"a0da40c85c75"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BumpDesignSystem_4e5c17 = window.BumpDesignSystem_4e5c17 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/brand/Logo.jsx
try { (() => {
const TONES = {
  dark: {
    body: '#F5F5F7',
    pod: '#FF3D5A',
    text: '#F5F5F7'
  },
  light: {
    body: '#0A0A0F',
    pod: '#FF3D5A',
    text: '#0A0A0F'
  },
  signal: {
    body: '#FF3D5A',
    pod: '#FF3D5A',
    text: '#FF3D5A'
  },
  white: {
    body: '#F5F5F7',
    pod: '#F5F5F7',
    text: '#F5F5F7'
  },
  black: {
    body: '#0A0A0F',
    pod: '#0A0A0F',
    text: '#0A0A0F'
  }
};
function Mark({
  body,
  pod
}) {
  return /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "4.5",
    width: "39",
    height: "71",
    rx: "19.5",
    fill: "none",
    stroke: body,
    strokeWidth: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "21.5",
    cy: "20.5",
    r: "7.5",
    fill: pod
  }), /*#__PURE__*/React.createElement("path", {
    d: "M25.8 25.5 L28.8 35",
    stroke: pod,
    strokeWidth: "6",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    stroke: body,
    strokeWidth: "4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M29.2 62 A6 6 0 0 0 18.8 62"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M33.53 59.5 A11 11 0 0 0 14.47 59.5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M37.86 57 A16 16 0 0 0 10.14 57"
  })));
}
function Logo({
  variant = 'horizontal',
  tone = 'dark',
  height = 32,
  title = 'Bump',
  style
}) {
  const c = TONES[tone] || TONES.dark;
  const txt = {
    fontFamily: 'var(--font-display)',
    fontWeight: 700
  };
  if (variant === 'mark') return /*#__PURE__*/React.createElement("svg", {
    role: "img",
    "aria-label": title,
    viewBox: "0 0 48 80",
    height: height,
    width: height * 0.6,
    style: {
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Mark, c));
  if (variant === 'stacked') return /*#__PURE__*/React.createElement("svg", {
    role: "img",
    "aria-label": title,
    viewBox: "0 0 160 150",
    height: height,
    width: height * 160 / 150,
    style: {
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(56 0)"
  }, /*#__PURE__*/React.createElement(Mark, c)), /*#__PURE__*/React.createElement("text", {
    x: "80",
    y: "144",
    textAnchor: "middle",
    fontSize: "52",
    letterSpacing: "-2",
    fill: c.text,
    style: txt
  }, "BUMP"));
  if (variant === 'wordmark') return /*#__PURE__*/React.createElement("svg", {
    role: "img",
    "aria-label": title,
    viewBox: "0 0 188 56",
    height: height,
    width: height * 188 / 56,
    style: {
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement("text", {
    x: "0",
    y: "50",
    fontSize: "68",
    letterSpacing: "-2.72",
    fill: c.text,
    style: txt
  }, "BUMP"));
  return /*#__PURE__*/React.createElement("svg", {
    role: "img",
    "aria-label": title,
    viewBox: "0 0 254 80",
    height: height,
    width: height * 254 / 80,
    style: {
      display: 'block',
      ...style
    }
  }, /*#__PURE__*/React.createElement(Mark, c), /*#__PURE__*/React.createElement("text", {
    x: "62",
    y: "66",
    fontSize: "68",
    letterSpacing: "-2.72",
    fill: c.text,
    style: txt
  }, "BUMP"));
}
Object.assign(__ds_scope, { Logo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Logo.jsx", error: String((e && e.message) || e) }); }

// components/display/Avatar.jsx
try { (() => {
function Avatar({
  src,
  name = '',
  size = 40,
  verified = false,
  style
}) {
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const ring = verified ? 3 : 0;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      width: size,
      height: size,
      borderRadius: '50%',
      padding: ring ? 2 : 0,
      background: verified ? 'var(--accent-2)' : 'transparent',
      flexShrink: 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      overflow: 'hidden',
      background: 'var(--ink-800)',
      border: verified ? '2px solid var(--bg-app)' : 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-secondary)',
      fontWeight: 700,
      fontSize: Math.round(size * 0.36)
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Card({
  variant = 'default',
  padding = 16,
  interactive = false,
  glow = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const base = {
    default: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)'
    },
    outline: {
      background: 'transparent',
      border: '1px solid var(--border-default)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border-subtle)'
    },
    raised: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-lg)'
    }
  }[variant];
  const h = (interactive || glow) && hover;
  return /*#__PURE__*/React.createElement("div", _extends({
    onPointerEnter: () => setHover(true),
    onPointerLeave: () => setHover(false),
    style: {
      borderRadius: 'var(--radius-lg)',
      padding,
      position: 'relative',
      transition: 'border-color var(--duration-base) var(--ease-out-expo), box-shadow var(--duration-base) var(--ease-out-expo)',
      ...base,
      ...(h && !glow ? {
        borderColor: 'var(--border-default)'
      } : {}),
      ...(h && glow ? {
        borderColor: 'transparent',
        boxShadow: '0 0 0 1px rgba(255,61,90,.55), 0 0 0 1px rgba(124,92,255,.55) inset, 0 12px 40px rgba(124,92,255,.18)'
      } : {}),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Divider.jsx
try { (() => {
function Divider({
  label,
  style
}) {
  if (!label) return /*#__PURE__*/React.createElement("hr", {
    style: {
      border: 0,
      borderTop: '1px solid var(--border-subtle)',
      margin: 0,
      ...style
    }
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-tertiary)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: 'var(--border-subtle)'
    }
  }));
}
Object.assign(__ds_scope, { Divider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Divider.jsx", error: String((e && e.message) || e) }); }

// components/display/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const toPascal = n => String(n || '').replace(/(^|[-_ ])(\w)/g, (_, __, c) => c.toUpperCase());
function Icon({
  name,
  size = 20,
  strokeWidth = 2,
  color = 'currentColor',
  fill = 'none',
  style,
  ...rest
}) {
  const lib = typeof window !== 'undefined' ? window.lucide : null;
  const key = toPascal(name);
  const node = lib && (lib.icons && lib.icons[key] || lib[key]);
  let kids = null;
  if (Array.isArray(node)) {
    const list = node[0] === 'svg' ? node[2] : node;
    kids = (list || []).map(([tag, attrs], i) => React.createElement(tag, {
      key: i,
      ...attrs
    }));
  }
  return /*#__PURE__*/React.createElement("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill,
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    }
  }, rest), kids);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    h: 32,
    px: 12,
    fs: 12,
    ic: 14,
    gap: 6
  },
  md: {
    h: 40,
    px: 16,
    fs: 14,
    ic: 16,
    gap: 8
  },
  lg: {
    h: 48,
    px: 20,
    fs: 16,
    ic: 20,
    gap: 8
  }
};
function variantStyle(v, hover) {
  switch (v) {
    case 'secondary':
      return {
        background: hover ? 'var(--ink-700)' : 'var(--surface-raised)',
        color: 'var(--text-primary)',
        borderColor: 'transparent'
      };
    case 'soft':
      return {
        background: hover ? 'rgba(255,61,90,.24)' : 'var(--accent-soft)',
        color: 'var(--signal-300)',
        borderColor: 'var(--accent-soft-border)'
      };
    case 'outline':
      return {
        background: hover ? 'var(--ink-850)' : 'transparent',
        color: 'var(--text-primary)',
        borderColor: 'var(--border-default)'
      };
    case 'ghost':
      return {
        background: hover ? 'var(--ink-850)' : 'transparent',
        color: hover ? 'var(--text-primary)' : 'var(--text-secondary)',
        borderColor: 'transparent'
      };
    case 'pulse':
      return {
        background: hover ? 'var(--pulse-400)' : 'var(--accent-2)',
        color: '#fff',
        borderColor: 'transparent'
      };
    default:
      return {
        background: hover ? 'var(--accent-hover)' : 'var(--accent)',
        color: 'var(--text-on-accent)',
        borderColor: 'transparent'
      };
  }
}
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  loading = false,
  disabled = false,
  fullWidth = false,
  pill = false,
  type = 'button',
  onClick,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const off = disabled || loading;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: off,
    onClick: onClick,
    onPointerEnter: () => setHover(true),
    onPointerLeave: () => {
      setHover(false);
      setPress(false);
    },
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: s.gap,
      height: s.h,
      padding: '0 ' + s.px + 'px',
      borderRadius: pill ? 'var(--radius-pill)' : size === 'sm' ? 'var(--radius-sm)' : 'var(--radius-md)',
      border: '1px solid',
      fontFamily: 'var(--font-body)',
      fontSize: s.fs,
      fontWeight: 700,
      letterSpacing: '-0.01em',
      whiteSpace: 'nowrap',
      cursor: off ? 'not-allowed' : 'pointer',
      opacity: off ? 0.5 : 1,
      transform: press && !off ? 'scale(var(--bump-scale))' : 'scale(1)',
      transition: 'transform var(--duration-bump) var(--ease-bump), background var(--duration-fast) var(--ease-out-expo), color var(--duration-fast) var(--ease-out-expo)',
      ...variantStyle(variant, hover && !off),
      ...style
    }
  }, rest), loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "loader-2",
    size: s.ic,
    style: {
      animation: 'bump-spin .9s linear infinite'
    }
  }) : icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.ic
  }) : null, children, iconRight && !loading ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: s.ic
  }) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
const SIZES = {
  sm: {
    d: 32,
    ic: 16
  },
  md: {
    d: 40,
    ic: 20
  },
  lg: {
    d: 56,
    ic: 24
  }
};
function IconButton({
  icon,
  label,
  variant = 'secondary',
  size = 'md',
  filled = false,
  disabled = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = useState(false);
  const [press, setPress] = useState(false);
  const s = SIZES[size] || SIZES.md;
  const h = hover && !disabled;
  const v = {
    primary: {
      background: h ? 'var(--accent-hover)' : 'var(--accent)',
      color: '#fff'
    },
    secondary: {
      background: h ? 'var(--ink-700)' : 'var(--surface-raised)',
      color: 'var(--text-primary)'
    },
    ghost: {
      background: h ? 'var(--ink-850)' : 'transparent',
      color: h ? 'var(--text-primary)' : 'var(--text-secondary)'
    },
    soft: {
      background: h ? 'rgba(255,61,90,.24)' : 'var(--accent-soft)',
      color: 'var(--signal-300)'
    },
    static: {
      background: h ? '#fff' : 'var(--bump-static)',
      color: 'var(--bump-void)'
    }
  }[variant] || {};
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onPointerEnter: () => setHover(true),
    onPointerLeave: () => {
      setHover(false);
      setPress(false);
    },
    onPointerDown: () => setPress(true),
    onPointerUp: () => setPress(false),
    style: {
      width: s.d,
      height: s.d,
      borderRadius: 'var(--radius-pill)',
      border: 0,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.4 : 1,
      transform: press && !disabled ? 'scale(var(--bump-scale))' : 'scale(1)',
      transition: 'transform var(--duration-bump) var(--ease-bump), background var(--duration-fast) var(--ease-out-expo)',
      ...v,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: s.ic,
    fill: filled ? 'currentColor' : 'none'
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function Badge({
  tone = 'neutral',
  icon,
  children,
  style
}) {
  const t = {
    neutral: {
      background: 'var(--ink-800)',
      color: 'var(--text-secondary)',
      border: 'transparent'
    },
    signal: {
      background: 'var(--accent-soft)',
      color: 'var(--signal-300)',
      border: 'var(--accent-soft-border)'
    },
    pulse: {
      background: 'var(--accent-2-soft)',
      color: 'var(--pulse-300)',
      border: 'var(--accent-2-soft-border)'
    },
    success: {
      background: 'rgba(43,217,138,.12)',
      color: '#7BEDB8',
      border: 'rgba(43,217,138,.3)'
    },
    live: {
      background: 'var(--accent)',
      color: '#fff',
      border: 'transparent'
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-xs)',
      border: '1px solid ' + t.border,
      background: t.background,
      color: t.color,
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 12,
    strokeWidth: 2.5
  }) : null, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Alert.jsx
try { (() => {
function Alert({
  tone = 'info',
  title,
  icon,
  children,
  style
}) {
  const t = {
    error: {
      bg: 'var(--danger-bg)',
      bd: 'var(--danger-border)',
      fg: 'var(--danger-fg)',
      ic: 'alert-circle'
    },
    success: {
      bg: 'var(--accent-soft)',
      bd: 'var(--accent-soft-border)',
      fg: 'var(--signal-300)',
      ic: 'mail-check'
    },
    info: {
      bg: 'var(--surface-sunken)',
      bd: 'var(--border-subtle)',
      fg: 'var(--text-secondary)',
      ic: 'info'
    },
    pulse: {
      bg: 'var(--accent-2-soft)',
      bd: 'var(--accent-2-soft-border)',
      fg: 'var(--pulse-300)',
      ic: 'sparkles'
    }
  }[tone] || {};
  return /*#__PURE__*/React.createElement("div", {
    role: tone === 'error' ? 'alert' : 'status',
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-start',
      padding: '12px 14px',
      borderRadius: 'var(--radius-md)',
      background: t.bg,
      border: '1px solid ' + t.bd,
      color: t.fg,
      fontSize: 13,
      lineHeight: 1.45,
      textAlign: 'left',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || t.ic,
    size: 16
  })), /*#__PURE__*/React.createElement("div", null, title ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      color: 'var(--text-primary)',
      marginBottom: 2
    }
  }, title) : null, children));
}
Object.assign(__ds_scope, { Alert });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Alert.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open = true,
  icon,
  title,
  description,
  children,
  actions,
  onClose,
  inline = false,
  width = 420
}) {
  if (!open) return null;
  const panel = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": !inline,
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-xl)',
      padding: 32,
      textAlign: 'center',
      boxShadow: 'var(--shadow-lg)',
      animation: 'bump-rise var(--duration-slow) var(--ease-out-expo)'
    }
  }, icon ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 48,
      height: 48,
      borderRadius: 999,
      background: 'var(--accent-soft)',
      border: '1px solid var(--accent-soft-border)',
      color: 'var(--signal-300)',
      margin: '0 auto 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 24
  })) : null, title ? /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 8px',
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, title) : null, description ? /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 13,
      color: 'var(--text-secondary)',
      lineHeight: 1.5
    }
  }, description) : null, children, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: children ? 24 : 0
    }
  }, actions) : null);
  if (inline) return panel;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(6px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 24
    }
  }, panel);
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  title,
  message,
  icon = 'zap',
  tone = 'signal',
  action,
  onAction,
  onClose,
  style
}) {
  const c = tone === 'pulse' ? 'var(--accent-2)' : tone === 'neutral' ? 'var(--ink-600)' : 'var(--accent)';
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minWidth: 300,
      maxWidth: 420,
      padding: '12px 12px 12px 14px',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-default)',
      boxShadow: 'var(--shadow-md)',
      animation: 'bump-rise var(--duration-slow) var(--ease-out-expo)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 32,
      height: 32,
      borderRadius: 999,
      background: c,
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, title), message ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, message) : null), action ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      background: 'none',
      border: 0,
      color: 'var(--accent)',
      fontWeight: 700,
      fontSize: 13,
      cursor: 'pointer',
      fontFamily: 'inherit'
    }
  }, action) : null, onClose ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      background: 'none',
      border: 0,
      color: 'var(--text-tertiary)',
      cursor: 'pointer',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })) : null);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  label,
  side = 'top',
  children,
  style
}) {
  const [show, setShow] = useState(false);
  const pos = side === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    onPointerEnter: () => setShow(true),
    onPointerLeave: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      ...pos,
      transform: 'translateX(-50%) ' + (show ? 'scale(1)' : 'scale(.96)'),
      opacity: show ? 1 : 0,
      pointerEvents: 'none',
      background: 'var(--bump-static)',
      color: 'var(--bump-void)',
      fontSize: 12,
      fontWeight: 600,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      transition: 'opacity var(--duration-fast) var(--ease-out-expo), transform var(--duration-bump) var(--ease-bump)',
      zIndex: 20
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
const {
  useState
} = React;
function Checkbox({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    const n = !on;
    if (checked === undefined) setInner(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      color: 'var(--text-primary)',
      fontSize: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "checkbox",
    "aria-checked": on,
    style: {
      width: 20,
      height: 20,
      borderRadius: 6,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: on ? 'var(--accent)' : 'var(--bg-app)',
      border: '1px solid ' + (on ? 'var(--accent)' : 'var(--border-strong)'),
      color: '#fff',
      transform: on ? 'scale(1)' : 'scale(.96)',
      transition: 'all var(--duration-bump) var(--ease-bump)'
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 14,
    strokeWidth: 3
  }) : null), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Dropzone.jsx
try { (() => {
const {
  useState,
  useRef
} = React;
function Dropzone({
  icon = 'music',
  title = 'Select or drop a file',
  hint,
  fileName,
  accept,
  onFile,
  compact = false,
  style
}) {
  const [hover, setHover] = useState(false);
  const ref = useRef(null);
  const pick = f => {
    if (f && onFile) onFile(f);
  };
  return /*#__PURE__*/React.createElement("div", {
    role: "button",
    tabIndex: 0,
    onClick: () => ref.current && ref.current.click(),
    onPointerEnter: () => setHover(true),
    onPointerLeave: () => setHover(false),
    onDragOver: e => {
      e.preventDefault();
      setHover(true);
    },
    onDragLeave: () => setHover(false),
    onDrop: e => {
      e.preventDefault();
      setHover(false);
      pick(e.dataTransfer.files && e.dataTransfer.files[0]);
    },
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: compact ? 4 : 8,
      padding: compact ? 16 : 28,
      cursor: 'pointer',
      textAlign: 'center',
      border: '2px dashed ' + (hover ? 'var(--accent)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      background: hover ? 'rgba(255,61,90,.05)' : 'var(--bg-app)',
      transition: 'border-color var(--duration-fast) var(--ease-out-expo), background var(--duration-fast) var(--ease-out-expo)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: fileName || !compact ? 'var(--accent)' : 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: fileName ? 'check-circle-2' : icon,
    size: compact ? 24 : 32
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: compact ? 12 : 14,
      fontWeight: compact ? 400 : 500,
      color: compact ? 'var(--text-secondary)' : 'var(--ink-200)'
    }
  }, fileName || title), hint && !fileName ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, hint) : null, /*#__PURE__*/React.createElement("input", {
    ref: ref,
    type: "file",
    accept: accept,
    style: {
      display: 'none'
    },
    onChange: e => pick(e.target.files && e.target.files[0])
  }));
}
Object.assign(__ds_scope, { Dropzone });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Dropzone.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
function Field({
  label,
  hint,
  error,
  htmlFor,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: htmlFor,
    style: {
      font: 'var(--type-label)',
      textTransform: 'uppercase',
      letterSpacing: 'var(--tracking-label)',
      color: 'var(--text-secondary)'
    }
  }, label) : null, children, error ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--danger-fg)'
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Input({
  label,
  hint,
  error,
  prefix,
  icon,
  size = 'md',
  id,
  style,
  inputStyle,
  onFocus,
  onBlur,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const h = size === 'lg' ? 48 : size === 'sm' ? 34 : 42;
  const control = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      height: h,
      background: 'var(--bg-app)',
      border: '1px solid ' + (error ? 'var(--danger-500)' : focus ? 'var(--accent)' : 'var(--border-default)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: focus ? '0 0 0 3px var(--accent-soft)' : 'none',
      transition: 'border-color var(--duration-fast) var(--ease-out-expo), box-shadow var(--duration-fast) var(--ease-out-expo)',
      ...(label || hint || error ? {} : style)
    }
  }, icon ? /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 14,
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  })) : null, prefix ? /*#__PURE__*/React.createElement("span", {
    style: {
      paddingLeft: 14,
      color: 'var(--text-secondary)',
      fontSize: 14
    }
  }, prefix) : null, /*#__PURE__*/React.createElement("input", _extends({
    id: id,
    onFocus: e => {
      setFocus(true);
      onFocus && onFocus(e);
    },
    onBlur: e => {
      setFocus(false);
      onBlur && onBlur(e);
    },
    style: {
      flex: 1,
      minWidth: 0,
      height: '100%',
      background: 'transparent',
      border: 0,
      outline: 'none',
      color: 'var(--text-primary)',
      fontFamily: 'var(--font-body)',
      fontSize: size === 'sm' ? 13 : 14,
      padding: icon || prefix ? '0 14px 0 8px' : '0 14px',
      ...inputStyle
    }
  }, rest)));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: id,
    style: style
  }, control);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function Select({
  label,
  hint,
  error,
  options = [],
  value,
  onChange,
  id,
  style,
  ...rest
}) {
  const [focus, setFocus] = useState(false);
  const control = /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 42,
      ...(label || hint ? {} : style)
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    value: value,
    onChange: onChange,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: '100%',
      background: 'var(--bg-app)',
      color: 'var(--text-primary)',
      border: '1px solid ' + (focus ? 'var(--accent)' : 'var(--border-default)'),
      boxShadow: focus ? '0 0 0 3px var(--accent-soft)' : 'none',
      borderRadius: 'var(--radius-md)',
      padding: '0 40px 0 14px',
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      outline: 'none',
      cursor: 'pointer'
    }
  }, rest), options.map(o => {
    const opt = typeof o === 'string' ? {
      value: o,
      label: o
    } : o;
    return /*#__PURE__*/React.createElement("option", {
      key: opt.value,
      value: opt.value
    }, opt.label);
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 16
  })));
  if (!label && !hint && !error) return control;
  return /*#__PURE__*/React.createElement(__ds_scope.Field, {
    label: label,
    hint: hint,
    error: error,
    htmlFor: id,
    style: style
  }, control);
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
const {
  useState
} = React;
function Switch({
  checked,
  defaultChecked = false,
  onChange,
  label,
  disabled = false,
  style
}) {
  const [inner, setInner] = useState(defaultChecked);
  const on = checked !== undefined ? checked : inner;
  const toggle = () => {
    if (disabled) return;
    const n = !on;
    if (checked === undefined) setInner(n);
    onChange && onChange(n);
  };
  return /*#__PURE__*/React.createElement("label", {
    onClick: e => {
      e.preventDefault();
      toggle();
    },
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.5 : 1,
      color: 'var(--text-primary)',
      fontSize: 14,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    role: "switch",
    "aria-checked": on,
    style: {
      width: 40,
      height: 24,
      borderRadius: 999,
      padding: 3,
      background: on ? 'var(--accent)' : 'var(--ink-700)',
      transition: 'background var(--duration-base) var(--ease-out-expo)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 18,
      borderRadius: 999,
      background: '#fff',
      boxShadow: 'var(--shadow-sm)',
      transform: on ? 'translateX(16px)' : 'translateX(0)',
      transition: 'transform var(--duration-bump) var(--ease-bump)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/music/CoverArt.jsx
try { (() => {
const {
  useState
} = React;
function CoverArt({
  src,
  alt = '',
  size = 80,
  radius,
  playing = false,
  showPlay = false,
  onPlay,
  style
}) {
  const [hover, setHover] = useState(false);
  const r = radius !== undefined ? radius : size >= 64 ? 'var(--radius-md)' : 'var(--radius-sm)';
  return /*#__PURE__*/React.createElement("div", {
    onPointerEnter: () => setHover(true),
    onPointerLeave: () => setHover(false),
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: r,
      overflow: 'hidden',
      flexShrink: 0,
      background: 'var(--ink-800)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-tertiary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "disc-3",
    size: Math.round(size * 0.4)
  })), showPlay ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": playing ? 'Pause' : 'Play',
    onClick: onPlay,
    style: {
      position: 'absolute',
      inset: 0,
      border: 0,
      cursor: 'pointer',
      background: 'rgba(10,10,15,.55)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--accent)',
      opacity: hover || playing ? 1 : 0,
      transition: 'opacity var(--duration-fast) var(--ease-out-expo)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: playing ? 'pause' : 'play',
    size: Math.round(size * 0.36),
    fill: "currentColor"
  })) : null);
}
Object.assign(__ds_scope, { CoverArt });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/music/CoverArt.jsx", error: String((e && e.message) || e) }); }

// components/music/Equalizer.jsx
try { (() => {
function Equalizer({
  playing = true,
  bars = 5,
  height = 16,
  color = 'var(--accent)',
  barWidth = 3,
  style
}) {
  const delays = [0, .35, .15, .5, .25, .4, .1];
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      alignItems: 'flex-end',
      gap: 2,
      height,
      ...style
    }
  }, Array.from({
    length: bars
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      width: barWidth,
      height: '100%',
      borderRadius: barWidth,
      background: color,
      transformOrigin: 'bottom',
      transform: playing ? undefined : 'scaleY(.25)',
      animation: playing ? 'bump-eq ' + (0.9 + i % 3 * 0.18) + 's cubic-bezier(.45,0,.55,1) ' + delays[i % 7] + 's infinite' : 'none',
      transition: 'transform var(--duration-base) var(--ease-out-expo)'
    }
  })));
}
Object.assign(__ds_scope, { Equalizer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/music/Equalizer.jsx", error: String((e && e.message) || e) }); }

// components/music/PlayerBar.jsx
try { (() => {
const t = s => {
  s = Math.max(0, Math.floor(s || 0));
  return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0');
};
function PlayerBar({
  track,
  playing = false,
  currentTime = 0,
  duration = 0,
  onToggle,
  onSeek,
  onBuy,
  fixed = false,
  style
}) {
  if (!track) return null;
  const pct = duration ? Math.min(100, currentTime / duration * 100) : 0;
  const seek = e => {
    if (!onSeek || !duration) return;
    const r = e.currentTarget.getBoundingClientRect();
    onSeek(Math.max(0, Math.min(1, (e.clientX - r.left) / r.width)) * duration);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      ...(fixed ? {
        position: 'fixed',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50
      } : {}),
      height: 'var(--player-height)',
      background: 'rgba(10,10,15,.92)',
      backdropFilter: 'blur(var(--blur-bar))',
      WebkitBackdropFilter: 'blur(var(--blur-bar))',
      borderTop: '1px solid var(--border-subtle)',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 24,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      flex: '1 1 25%',
      minWidth: 180
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CoverArt, {
    src: track.coverUrl,
    alt: track.title,
    size: 48
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, track.title), /*#__PURE__*/React.createElement(__ds_scope.Equalizer, {
    playing: playing,
    height: 12,
    barWidth: 2
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12,
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, track.artist || 'Independent artist'))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 6,
      flex: '2 1 50%',
      maxWidth: 576
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: playing ? 'pause' : 'play',
    label: playing ? 'Pause' : 'Play',
    variant: "static",
    size: "sm",
    filled: true,
    onClick: onToggle
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, t(currentTime)), /*#__PURE__*/React.createElement("div", {
    onClick: seek,
    style: {
      flex: 1,
      height: 12,
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: 4,
      borderRadius: 4,
      background: 'var(--ink-700)',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      top: 0,
      bottom: 0,
      width: pct + '%',
      borderRadius: 4,
      background: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: '50%',
      left: pct + '%',
      width: 12,
      height: 12,
      borderRadius: 12,
      background: '#fff',
      transform: 'translate(-50%,-50%)',
      boxShadow: 'var(--shadow-sm)'
    }
  }))), /*#__PURE__*/React.createElement("span", null, t(duration)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      gap: 16,
      flex: '1 1 25%',
      minWidth: 150
    }
  }, track.priceCents > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "soft",
    size: "sm",
    pill: true,
    onClick: onBuy
  }, 'Buy $' + (track.priceCents / 100).toFixed(2) + ' · 100% to artist') : /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      color: 'var(--text-tertiary)'
    }
  }, "Free stream"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "volume-2",
    size: 18
  }))));
}
Object.assign(__ds_scope, { PlayerBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/music/PlayerBar.jsx", error: String((e && e.message) || e) }); }

// components/music/TrackCard.jsx
try { (() => {
const fmt = c => c > 0 ? '$' + (c / 100).toFixed(2) : 'Free';
function TrackCard({
  title,
  artist,
  coverUrl,
  priceCents = 0,
  verified = false,
  active = false,
  playing = false,
  onPlay,
  onBuy,
  style
}) {
  const on = active && playing;
  return /*#__PURE__*/React.createElement(__ds_scope.Card, {
    interactive: true,
    padding: 16,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      ...(active ? {
        borderColor: 'var(--accent-soft-border)'
      } : {}),
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.CoverArt, {
    src: coverUrl,
    alt: title,
    size: 80,
    showPlay: true,
    playing: on,
    onPlay: onPlay
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      minWidth: 0
    }
  }, on ? /*#__PURE__*/React.createElement(__ds_scope.Equalizer, {
    height: 12,
    barWidth: 2
  }) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      fontWeight: 700,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, title)), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      fontSize: 12,
      color: 'var(--text-secondary)',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }, artist, verified ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--pulse-400)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "badge-check",
    size: 14
  })) : null), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      color: priceCents > 0 ? 'var(--accent)' : 'var(--text-secondary)'
    }
  }, fmt(priceCents)))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 12,
      borderTop: '1px solid var(--border-subtle)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "ghost",
    size: "sm",
    icon: on ? 'pause' : 'play',
    onClick: onPlay,
    style: {
      paddingLeft: 6
    }
  }, on ? 'Pause' : 'Stream'), priceCents > 0 ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    pill: true,
    icon: "shopping-cart",
    onClick: onBuy
  }, "Buy track") : /*#__PURE__*/React.createElement(__ds_scope.Badge, null, "Free stream")));
}
Object.assign(__ds_scope, { TrackCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/music/TrackCard.jsx", error: String((e && e.message) || e) }); }

// components/navigation/AppHeader.jsx
try { (() => {
function AppHeader({
  onNavigate,
  user,
  sticky = true,
  style
}) {
  const go = p => e => {
    if (e && e.preventDefault) e.preventDefault();
    onNavigate && onNavigate(p);
  };
  return /*#__PURE__*/React.createElement("header", {
    style: {
      ...(sticky ? {
        position: 'sticky',
        top: 0,
        zIndex: 40
      } : {}),
      height: 'var(--header-height)',
      padding: '0 24px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      background: 'rgba(10,10,15,.8)',
      backdropFilter: 'blur(var(--blur-bar))',
      WebkitBackdropFilter: 'blur(var(--blur-bar))',
      borderBottom: '1px solid var(--border-subtle)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: go('home'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Logo, {
    height: 28
  }), /*#__PURE__*/React.createElement(__ds_scope.Badge, null, "100% to artist")), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    icon: "upload-cloud",
    onClick: go('upload')
  }, "Upload track"), user ? /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: user.name,
    src: user.avatar,
    size: 32,
    verified: user.verified
  }) : /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    variant: "ghost",
    onClick: go('login')
  }, "Sign in")));
}
Object.assign(__ds_scope, { AppHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/AppHeader.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'pill',
  style
}) {
  if (variant === 'underline') {
    return /*#__PURE__*/React.createElement("div", {
      role: "tablist",
      style: {
        display: 'flex',
        gap: 24,
        borderBottom: '1px solid var(--border-subtle)',
        ...style
      }
    }, items.map(it => {
      const id = typeof it === 'string' ? it : it.id;
      const lb = typeof it === 'string' ? it : it.label;
      const on = id === value;
      return /*#__PURE__*/React.createElement("button", {
        key: id,
        role: "tab",
        "aria-selected": on,
        onClick: () => onChange && onChange(id),
        style: {
          background: 'none',
          border: 0,
          padding: '0 0 12px',
          marginBottom: -1,
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 14,
          fontWeight: 600,
          color: on ? 'var(--text-primary)' : 'var(--text-secondary)',
          borderBottom: '2px solid ' + (on ? 'var(--accent)' : 'transparent'),
          transition: 'color var(--duration-fast) var(--ease-out-expo)'
        }
      }, lb);
    }));
  }
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }, items.map(it => {
    const id = typeof it === 'string' ? it : it.id;
    const lb = typeof it === 'string' ? it : it.label;
    const on = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        height: 32,
        padding: '0 14px',
        border: 0,
        borderRadius: 'var(--radius-pill)',
        cursor: 'pointer',
        fontFamily: 'inherit',
        fontSize: 13,
        fontWeight: 600,
        background: on ? 'var(--bump-static)' : 'transparent',
        color: on ? 'var(--bump-void)' : 'var(--text-secondary)',
        transition: 'background var(--duration-base) var(--ease-out-expo), color var(--duration-base) var(--ease-out-expo)'
      }
    }, lb);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Wordmark.jsx
try { (() => {
function Wordmark({
  size = 22,
  color = 'var(--text-primary)',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: size,
      letterSpacing: '-0.04em',
      lineHeight: 1,
      color,
      textTransform: 'uppercase',
      ...style
    }
  }, "Bump");
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Wordmark.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/App.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function App() {
  const {
    AppHeader,
    PlayerBar,
    Toast
  } = window.BumpDesignSystem_4e5c17;
  const initial = (location.hash || '#home').slice(1);
  const [page, setPage] = React.useState(['home', 'login', 'upload', 'consent'].includes(initial) ? initial : 'home');
  const [tracks, setTracks] = React.useState(window.BUMP_TRACKS);
  const [current, setCurrent] = React.useState(null);
  const [playing, setPlaying] = React.useState(false);
  const [time, setTime] = React.useState(0);
  const [toast, setToast] = React.useState(null);
  const go = p => {
    setPage(p);
    location.hash = p;
    window.scrollTo(0, 0);
  };
  React.useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setTime(t => {
      const d = current && current.duration || 200;
      return t + 1 >= d ? 0 : t + 1;
    }), 1000);
    return () => clearInterval(id);
  }, [playing, current]);
  React.useEffect(() => {
    if (!toast) return;
    const id = setTimeout(() => setToast(null), 3600);
    return () => clearTimeout(id);
  }, [toast]);
  const play = t => {
    if (current && current.id === t.id) {
      setPlaying(p => !p);
    } else {
      setCurrent(t);
      setTime(0);
      setPlaying(true);
    }
  };
  const buy = t => setToast({
    icon: 'shopping-cart',
    title: 'Checkout opened',
    message: '$' + (t.priceCents / 100).toFixed(2) + ' goes straight to ' + t.artist + '.'
  });
  const publish = ({
    title,
    priceCents
  }) => {
    const t = {
      id: 'n' + Date.now(),
      title,
      artist: 'You',
      priceCents,
      duration: 198
    };
    setTracks(ts => [t, ...ts]);
    go('home');
    setToast({
      icon: 'radio',
      title: "It's live. Go tell people.",
      action: 'Share'
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      paddingBottom: current ? 96 : 24
    }
  }, /*#__PURE__*/React.createElement(AppHeader, {
    onNavigate: go
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '32px 24px'
    }
  }, page === 'home' ? /*#__PURE__*/React.createElement(HomeScreen, {
    tracks: tracks,
    currentId: current && current.id,
    playing: playing,
    onPlay: play,
    onBuy: buy,
    onNavigate: go
  }) : null, page === 'login' ? /*#__PURE__*/React.createElement(LoginScreen, null) : null, page === 'upload' ? /*#__PURE__*/React.createElement(UploadScreen, {
    onPublish: publish
  }) : null, page === 'consent' ? /*#__PURE__*/React.createElement(ConsentScreen, {
    onNavigate: go
  }) : null), toast ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      right: 24,
      bottom: current ? 104 : 24,
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, _extends({}, toast, {
    onClose: () => setToast(null)
  }))) : null, /*#__PURE__*/React.createElement(PlayerBar, {
    fixed: true,
    track: current,
    playing: playing,
    currentTime: time,
    duration: current && current.duration,
    onToggle: () => setPlaying(p => !p),
    onSeek: setTime,
    onBuy: () => buy(current)
  }));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/ConsentScreen.jsx
try { (() => {
function ConsentScreen({
  onNavigate
}) {
  const {
    Dialog,
    Button
  } = window.BumpDesignSystem_4e5c17;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '64px 0',
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Dialog, {
    inline: true,
    width: 448,
    icon: "shield-check",
    title: "Authorize third-party app",
    description: /*#__PURE__*/React.createElement("span", null, "An application (", /*#__PURE__*/React.createElement("code", {
      style: {
        color: 'var(--signal-300)',
        fontFamily: 'var(--font-mono)'
      }
    }, "studio-sync"), ") is requesting access to your Bump account."),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "secondary",
      size: "sm",
      style: {
        flex: 1
      },
      onClick: () => onNavigate('home')
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      size: "sm",
      style: {
        flex: 1
      },
      onClick: () => onNavigate('home')
    }, "Authorize"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--bg-app)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-md)',
      padding: 16,
      textAlign: 'left',
      fontSize: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      fontWeight: 600,
      color: 'var(--ink-300)',
      marginBottom: 4
    }
  }, "Requested permissions"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-secondary)'
    }
  }, "profile email"))));
}
window.ConsentScreen = ConsentScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/ConsentScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/HomeScreen.jsx
try { (() => {
function HomeScreen({
  tracks,
  currentId,
  playing,
  onPlay,
  onBuy,
  onNavigate
}) {
  const {
    TrackCard,
    Card,
    Icon,
    Button
  } = window.BumpDesignSystem_4e5c17;
  const list = tracks;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 36,
      fontWeight: 700,
      letterSpacing: '-0.04em',
      lineHeight: 1.05
    }
  }, "Trending & new releases"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '6px 0 0',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "Stream independent music. Direct-to-artist payouts with zero platform cut on music sales."))), list.length === 0 ? /*#__PURE__*/React.createElement(Card, {
    padding: 48,
    style: {
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-600)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "disc-3",
    size: 48
  })), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: 18
    }
  }, "No tracks published yet"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 12px',
      color: 'var(--text-secondary)'
    }
  }, "Be the first artist to publish a track on Bump."), /*#__PURE__*/React.createElement(Button, {
    icon: "upload-cloud",
    onClick: () => onNavigate('upload')
  }, "Upload track")) : /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(300px,1fr))',
      gap: 24
    }
  }, list.map(t => /*#__PURE__*/React.createElement(TrackCard, {
    key: t.id,
    title: t.title,
    artist: t.artist,
    verified: t.verified,
    priceCents: t.priceCents,
    coverUrl: t.coverUrl,
    active: currentId === t.id,
    playing: playing,
    onPlay: () => onPlay(t),
    onBuy: () => onBuy(t)
  }))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/HomeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/LoginScreen.jsx
try { (() => {
function LoginScreen() {
  const {
    Card,
    Button,
    Input,
    Divider,
    Alert
  } = window.BumpDesignSystem_4e5c17;
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const submit = e => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 900);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 448,
      margin: '0 auto',
      padding: '48px 0'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 32,
    style: {
      textAlign: 'center',
      borderRadius: 'var(--radius-xl)'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 8px',
      fontSize: 24,
      fontWeight: 700,
      letterSpacing: '-0.02em'
    }
  }, "Welcome to Bump"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 12,
      color: 'var(--text-secondary)'
    }
  }, "Sign in to stream, support artists, or upload your own catalogue."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    icon: "music",
    style: {
      background: '#1DB954',
      color: '#000'
    }
  }, "Continue with Spotify"), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    variant: "secondary"
  }, "Continue with Google")), /*#__PURE__*/React.createElement(Divider, {
    label: "Or with email",
    style: {
      marginBottom: 24
    }
  }), sent ? /*#__PURE__*/React.createElement(Alert, {
    tone: "success"
  }, "Login link sent to ", /*#__PURE__*/React.createElement("strong", null, email), ". Check your inbox.") : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    required: true,
    placeholder: "name@domain.com",
    value: email,
    onChange: e => setEmail(e.target.value)
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    fullWidth: true,
    icon: "mail",
    loading: loading
  }, loading ? 'Sending link…' : 'Send magic link'))));
}
window.LoginScreen = LoginScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/LoginScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/UploadScreen.jsx
try { (() => {
function UploadScreen({
  onPublish
}) {
  const {
    Card,
    Button,
    Input,
    Dropzone,
    Alert
  } = window.BumpDesignSystem_4e5c17;
  const [title, setTitle] = React.useState('');
  const [audio, setAudio] = React.useState(null);
  const [cover, setCover] = React.useState(null);
  const [price, setPrice] = React.useState('1.99');
  const [busy, setBusy] = React.useState(false);
  const [err, setErr] = React.useState(null);
  const submit = e => {
    e.preventDefault();
    if (!audio || !title) {
      setErr('Please provide an audio file and a title.');
      return;
    }
    setErr(null);
    setBusy(true);
    setTimeout(() => {
      setBusy(false);
      onPublish({
        title,
        priceCents: Math.round(parseFloat(price || '0') * 100)
      });
    }, 1400);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 672,
      margin: '0 auto',
      padding: '32px 0'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: '0 0 8px',
      fontSize: 30,
      fontWeight: 700,
      letterSpacing: '-0.04em'
    }
  }, "Upload your music"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 24px',
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, "Direct upload to global CDN. You set your price and keep 100% of sales."), err ? /*#__PURE__*/React.createElement(Alert, {
    tone: "error",
    style: {
      marginBottom: 16
    }
  }, err) : null, /*#__PURE__*/React.createElement(Card, {
    padding: 24
  }, /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Track title",
    placeholder: "e.g. Midnight Horizon",
    value: title,
    onChange: e => setTitle(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Audio file (MP3, 320kbps recommended)"), /*#__PURE__*/React.createElement(Dropzone, {
    accept: "audio/*",
    title: "Select or drop MP3 file",
    fileName: audio && audio.name,
    onFile: setAudio
  }), !audio ? /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: () => setAudio({
      name: 'midnight-horizon-master.mp3'
    }),
    style: {
      alignSelf: 'flex-start',
      background: 'none',
      border: 0,
      color: 'var(--text-tertiary)',
      fontSize: 12,
      cursor: 'pointer',
      padding: 0,
      fontFamily: 'inherit'
    }
  }, "Use a sample file") : null), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, "Cover artwork (optional)"), /*#__PURE__*/React.createElement(Dropzone, {
    compact: true,
    icon: "image",
    accept: "image/*",
    title: "Upload square artwork (JPG, PNG)",
    fileName: cover && cover.name,
    onFile: setCover
  })), /*#__PURE__*/React.createElement(Input, {
    label: "Download price (USD) \u2014 0 for free",
    prefix: "$",
    type: "number",
    step: "0.01",
    min: "0",
    value: price,
    onChange: e => setPrice(e.target.value),
    hint: "100% of this amount goes directly to you via Stripe."
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "lg",
    fullWidth: true,
    icon: "upload-cloud",
    loading: busy
  }, busy ? 'Publishing…' : 'Publish track'))));
}
window.UploadScreen = UploadScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/UploadScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/data.js
try { (() => {
window.BUMP_TRACKS = [{
  id: 't1',
  title: 'Midnight Horizon',
  artist: 'Nova Reyes',
  verified: true,
  priceCents: 199,
  duration: 214
}, {
  id: 't2',
  title: 'Low Tide Static',
  artist: 'Kito Mbeki',
  priceCents: 0,
  duration: 187
}, {
  id: 't3',
  title: 'Basement Choir',
  artist: 'June Ortega',
  verified: true,
  priceCents: 149,
  duration: 243
}, {
  id: 't4',
  title: 'Neon Ferry',
  artist: 'Halcyon Drive',
  priceCents: 99,
  duration: 176
}, {
  id: 't5',
  title: 'Overpass Lights',
  artist: 'Independent Creator',
  priceCents: 0,
  duration: 205
}, {
  id: 't6',
  title: 'Kick Drum Prayer',
  artist: 'Sable & Rue',
  priceCents: 249,
  duration: 229
}];
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Logo = __ds_scope.Logo;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Divider = __ds_scope.Divider;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Alert = __ds_scope.Alert;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Dropzone = __ds_scope.Dropzone;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.CoverArt = __ds_scope.CoverArt;

__ds_ns.Equalizer = __ds_scope.Equalizer;

__ds_ns.PlayerBar = __ds_scope.PlayerBar;

__ds_ns.TrackCard = __ds_scope.TrackCard;

__ds_ns.AppHeader = __ds_scope.AppHeader;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Wordmark = __ds_scope.Wordmark;

})();
