/* @ds-bundle: {"format":3,"namespace":"MoodShelfDesignSystem_76979c","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"ICON_NAMES","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SegmentedControl","sourcePath":"components/core/SegmentedControl.jsx"},{"name":"AuraOrb","sourcePath":"components/reading/AuraOrb.jsx"},{"name":"BookCover","sourcePath":"components/reading/BookCover.jsx"},{"name":"EmotionTag","sourcePath":"components/reading/EmotionTag.jsx"},{"name":"ShelfCard","sourcePath":"components/reading/ShelfCard.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"65af5312fcae","components/core/Badge.jsx":"4b31e488a9d2","components/core/Button.jsx":"78f40e8e0ee7","components/core/Card.jsx":"8d46bb6a2383","components/core/Icon.jsx":"771b218c2cdb","components/core/IconButton.jsx":"a436ddbaaf5f","components/core/Input.jsx":"dc49ffc1e62c","components/core/SegmentedControl.jsx":"2c6c359ba6d8","components/reading/AuraOrb.jsx":"4346924b0650","components/reading/BookCover.jsx":"f2941ce138f6","components/reading/EmotionTag.jsx":"0c0c6c5f7cda","components/reading/ShelfCard.jsx":"209bba2c9513","ui_kits/moodshelf/app.jsx":"9c41da0eb452","ui_kits/moodshelf/data.js":"d0f3647aa822","ui_kits/moodshelf/icons.js":"4d22b3625f04","ui_kits/moodshelf/primitives.jsx":"1c2638a30b63","ui_kits/moodshelf/reading.jsx":"f24c72801abf","ui_kits/moodshelf/screens-intro.jsx":"c560ae3fae47","ui_kits/moodshelf/screens.jsx":"d02f3dedffb9","ui_kits/moodshelf/shell.jsx":"838dbc126fb0"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MoodShelfDesignSystem_76979c = window.MoodShelfDesignSystem_76979c || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Avatar with a warm ring. Falls back to initials on a tinted plate.
 * Pass `src` for a photo, otherwise `name` renders initials.
 */
function Avatar({
  src,
  name = '',
  size = 44,
  ring = true,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const tints = ['var(--plum-300)', 'var(--candle-300)', 'var(--sage-300)', 'var(--rose-400)', 'var(--dusk-300)'];
  const tint = tints[(name.charCodeAt(0) || 0) % tints.length];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      padding: ring ? '2px' : 0,
      background: ring ? 'var(--surface-card)' : 'transparent',
      boxShadow: ring ? '0 0 0 1.5px var(--accent), var(--shadow-xs)' : 'none',
      flexShrink: 0,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'var(--surface-sunken)' : tint,
      backgroundImage: src ? `url(${src})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'var(--ink-800)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size * 0.4,
      lineHeight: 1
    }
  }, !src && initials));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Reading-status badge: where a book sits in your life.
 * status: reading | finished | want | dnf | favorite
 */
function Badge({
  status = 'reading',
  children,
  style = {},
  ...rest
}) {
  const map = {
    reading: {
      label: 'Reading',
      bg: 'var(--candle-100)',
      fg: 'var(--candle-700)',
      dot: 'var(--candle-500)'
    },
    finished: {
      label: 'Finished',
      bg: 'var(--sage-100)',
      fg: 'var(--sage-600)',
      dot: 'var(--sage-500)'
    },
    want: {
      label: 'Want to read',
      bg: 'var(--paper-200)',
      fg: 'var(--ink-600)',
      dot: 'var(--clay-400)'
    },
    dnf: {
      label: 'Set down',
      bg: 'var(--surface-sunken)',
      fg: 'var(--text-muted)',
      dot: 'var(--sand-300)'
    },
    favorite: {
      label: 'Beloved',
      bg: 'var(--oxblood-200)',
      fg: 'var(--oxblood-700)',
      dot: 'var(--oxblood-600)'
    }
  };
  const t = map[status] || map.reading;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: '24px',
      padding: '0 10px 0 8px',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--w-semibold)',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: t.dot
    }
  }), children || t.label);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MoodShelf primary button. Warm, tactile, candlelit.
 * Variants: primary (candle gold), secondary (ink outline),
 * ghost (text only), soft (tinted fill). Press = gentle shrink.
 */
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 'var(--h-control-sm)',
      padding: '0 16px',
      font: 'var(--text-sm)',
      radius: 'var(--radius-pill)'
    },
    md: {
      height: 'var(--h-control)',
      padding: '0 22px',
      font: 'var(--text-base)',
      radius: 'var(--radius-pill)'
    },
    lg: {
      height: '56px',
      padding: '0 30px',
      font: 'var(--text-lg)',
      radius: 'var(--radius-pill)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      backgroundImage: 'var(--wash-candle)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xs)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    soft: {
      background: 'var(--accent-soft)',
      color: 'var(--accent-deep)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--oxblood-600)',
      color: '#F4E6E2',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: full ? '100%' : 'auto',
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: s.font,
      fontWeight: 'var(--w-semibold)',
      letterSpacing: '0.01em',
      borderRadius: s.radius,
      cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-soft), filter var(--dur-fast) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      ...variants[variant],
      ...style
    },
    onPointerDown: e => {
      e.currentTarget.style.transform = 'scale(0.97)';
    },
    onPointerUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onPointerLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseEnter: e => {
      e.currentTarget.style.filter = 'brightness(1.04)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.filter = 'none';
    }
  }), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Surface container. The fundamental "treasured object" plate.
 * tone: paper (default) | raised | sunken | inverse (dark moody)
 * Use `interactive` for hover lift on tappable cards.
 */
function Card({
  tone = 'paper',
  pad = 'md',
  interactive = false,
  style = {},
  children,
  ...rest
}) {
  const tones = {
    paper: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border)'
    },
    raised: {
      background: 'var(--surface-raised)',
      color: 'var(--text-body)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-md)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)',
      border: '1px solid var(--border)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      backgroundImage: 'var(--texture-vignette)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--border-on-dark)'
    }
  };
  const pads = {
    none: '0',
    sm: '14px',
    md: '18px',
    lg: '24px'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[pad],
      transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      cursor: interactive ? 'pointer' : 'default',
      ...tones[tone],
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = tones[tone].boxShadow || 'none';
    } : undefined
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MoodShelf icon set — a curated subset of Lucide (ISC-licensed),
 * at a refined 1.75 stroke that suits the literary aesthetic.
 * Inner SVG markup is stored per name so multi-shape icons work.
 */
const ICONS = {
  'book-open': '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  'book': '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  'library': '<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',
  'bookmark': '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>',
  'heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  'share': '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'star': '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  'sparkles': '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  'feather': '<path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"/><path d="M16 8 2 22"/><path d="M17.5 15H9"/>',
  'flame': '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  'moon': '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'settings': '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'calendar': '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  'check': '<path d="M20 6 9 17l-5-5"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'more-horizontal': '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  'quote': '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>',
  'bell': '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  'camera': '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  'instagram': '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  'pen-line': '<path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>',
  'globe': '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>'
};
function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  fill = 'none',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: fill,
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: ICONS[name] || ''
    }
  }));
}
const ICON_NAMES = Object.keys(ICONS);
Object.assign(__ds_scope, { Icon, ICON_NAMES });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Circular icon button for toolbars, app bars, card corners.
 * Variants: ghost (default), soft (tinted), solid (ink), glass (on imagery).
 */
function IconButton({
  name,
  variant = 'ghost',
  size = 40,
  iconSize,
  active = false,
  label,
  style = {},
  ...rest
}) {
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    soft: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border)'
    },
    solid: {
      background: 'var(--ink-800)',
      color: 'var(--paper-100)',
      border: '1px solid transparent'
    },
    glass: {
      background: 'rgba(30,20,12,0.42)',
      color: '#F6ECD8',
      border: '1px solid rgba(246,236,216,0.22)',
      backdropFilter: 'blur(8px)'
    }
  };
  const activeStyle = active ? {
    background: 'var(--accent-soft)',
    color: 'var(--accent-deep)',
    border: '1px solid transparent'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    "aria-label": label || name,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-soft), background var(--dur-base) var(--ease-soft)',
      ...variants[variant],
      ...activeStyle,
      ...style
    },
    onPointerDown: e => {
      e.currentTarget.style.transform = 'scale(0.9)';
    },
    onPointerUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onPointerLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: name,
    size: iconSize || Math.round(size * 0.5),
    fill: active && name === 'heart' ? 'currentColor' : 'none'
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text / search field on sunken paper. Optional leading icon.
 * Variant "search" rounds fully into a pill.
 */
function Input({
  icon,
  variant = 'default',
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const isSearch = variant === 'search';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      height: 'var(--h-control)',
      padding: '0 16px',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border)',
      borderRadius: isSearch ? 'var(--radius-pill)' : 'var(--radius-md)',
      boxShadow: 'var(--shadow-inset)',
      transition: 'border-color var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      ...wrapStyle
    },
    onFocusCapture: e => {
      e.currentTarget.style.borderColor = 'var(--accent)';
    },
    onBlurCapture: e => {
      e.currentTarget.style.borderColor = 'var(--border)';
    }
  }, (icon || isSearch) && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon || 'search',
    size: 18,
    style: {
      color: 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      ...style
    }
  })));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SegmentedControl.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Segmented control for the app's view switches
 * (e.g. Reading · Finished · Want, or Grid · Spine · Cover).
 * Controlled: pass `value` and `onChange(optionValue)`.
 */
function SegmentedControl({
  options = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "tablist",
    style: {
      display: 'inline-flex',
      padding: '4px',
      gap: '2px',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }), options.map(opt => {
    const v = typeof opt === 'string' ? opt : opt.value;
    const label = typeof opt === 'string' ? opt : opt.label;
    const active = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(v),
      style: {
        appearance: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '7px 16px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--w-semibold)',
        color: active ? 'var(--text-on-accent)' : 'var(--text-muted)',
        background: active ? 'var(--accent)' : 'transparent',
        backgroundImage: active ? 'var(--wash-candle)' : 'none',
        boxShadow: active ? 'var(--shadow-xs)' : 'none',
        transition: 'color var(--dur-base) var(--ease-soft), background var(--dur-base) var(--ease-soft)'
      }
    }, label);
  }));
}
Object.assign(__ds_scope, { SegmentedControl });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SegmentedControl.jsx", error: String((e && e.message) || e) }); }

// components/reading/AuraOrb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * AuraOrb — a soft glowing orb that visualizes a reader's emotional
 * mix (their "reading aura"). Blends 2–4 emotion colors into a living
 * gradient with a candlelit glow. Used in recaps and profiles.
 */
function AuraOrb({
  colors = ['var(--emo-longing)', 'var(--emo-wonder)', 'var(--emo-joy)'],
  size = 180,
  label,
  caption,
  style = {},
  ...rest
}) {
  const stops = colors.length === 1 ? `${colors[0]}, ${colors[0]}` : colors.map((c, i) => `${c} ${Math.round(i / (colors.length - 1) * 100)}%`).join(', ');
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '14px',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      background: `conic-gradient(from 210deg, ${stops}, ${colors[0]})`,
      filter: 'saturate(1.05)',
      boxShadow: 'var(--glow-aura), inset 0 0 40px rgba(255,255,255,0.18), inset 0 -10px 30px rgba(0,0,0,0.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '24%',
      borderRadius: '50%',
      background: 'radial-gradient(circle at 38% 32%, rgba(255,248,232,0.55), rgba(255,248,232,0) 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.18)'
    }
  }), label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: size * 0.16,
      color: '#FFF7E8',
      textShadow: '0 1px 8px rgba(40,24,10,0.45)',
      textAlign: 'center',
      padding: '0 14%',
      lineHeight: 1.05
    }
  }, label)), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, caption));
}
Object.assign(__ds_scope, { AuraOrb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/AuraOrb.jsx", error: String((e && e.message) || e) }); }

// components/reading/BookCover.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * BookCover — a book rendered as a treasured object (Letterboxd-for-books).
 * If `src` is given, shows the real cover image. Otherwise generates a
 * designed typographic cover from title/author + a warm palette.
 * Casts a directional shelf shadow.
 */
const PALETTES = [{
  bg: '#3B2D20',
  fg: '#EAD8B8',
  rule: '#C8913A'
},
// espresso
{
  bg: '#5E211E',
  fg: '#F0D9C8',
  rule: '#DCA94F'
},
// oxblood
{
  bg: '#4C583F',
  fg: '#E7E9D4',
  rule: '#C9B26A'
},
// sage
{
  bg: '#3C4A5A',
  fg: '#DCE6EE',
  rule: '#A9BBCB'
},
// dusk
{
  bg: '#4C3050',
  fg: '#ECDDEC',
  rule: '#C79BC4'
},
// plum
{
  bg: '#1F1712',
  fg: '#E7D2A6',
  rule: '#C8913A'
},
// ink
{
  bg: '#B5786A',
  fg: '#FDF2EC',
  rule: '#FFFFFF'
},
// rose
{
  bg: '#E7D8BE',
  fg: '#3B2D20',
  rule: '#7A2E2A'
} // parchment
];
function pick(title = '') {
  let h = 0;
  for (let i = 0; i < title.length; i++) h = h * 31 + title.charCodeAt(i) >>> 0;
  return PALETTES[h % PALETTES.length];
}
function BookCover({
  title = '',
  author = '',
  src,
  width = 120,
  palette,
  spine = true,
  style = {},
  ...rest
}) {
  const height = Math.round(width * 1.5);
  const p = palette || pick(title);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      width,
      height,
      borderRadius: 'var(--radius-book)',
      boxShadow: 'var(--shadow-book)',
      overflow: 'hidden',
      flexShrink: 0,
      ...style
    }
  }), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: p.bg,
      color: p.fg,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: `${width * 0.11}px ${width * 0.11}px ${width * 0.1}px`,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '30%',
      height: '2px',
      background: p.rule,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: width * 0.155,
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: width * 0.072,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      opacity: 0.82
    }
  }, author)), spine && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(0,0,0,0.26) 0%, rgba(0,0,0,0.06) 7%, rgba(0,0,0,0) 16%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: '2px',
      background: 'rgba(255,255,255,0.14)',
      pointerEvents: 'none'
    }
  })));
}
Object.assign(__ds_scope, { BookCover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/BookCover.jsx", error: String((e && e.message) || e) }); }

// components/reading/EmotionTag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Emotion tag — the signature MoodShelf element. Handwritten, warm,
 * colored by emotion. Use for moods, vibes, feelings on a book.
 * Pass a known `emotion` for its hue, or `color` to override.
 */
const EMO = {
  joy: 'joy',
  heartbreak: 'heartbreak',
  comfort: 'comfort',
  longing: 'longing',
  eerie: 'eerie',
  tender: 'tender',
  wonder: 'wonder',
  rage: 'rage'
};
function EmotionTag({
  emotion,
  color,
  children,
  size = 'md',
  onRemove,
  style = {},
  ...rest
}) {
  const key = EMO[emotion];
  const fill = color || (key ? `var(--emo-${key})` : 'var(--clay-400)');
  const fg = key ? `var(--emo-${key}-on)` : '#FFF7E8';
  const sizes = {
    sm: {
      fz: '15px',
      pad: '2px 10px',
      h: '24px'
    },
    md: {
      fz: '18px',
      pad: '3px 13px',
      h: '30px'
    },
    lg: {
      fz: '22px',
      pad: '4px 16px',
      h: '38px'
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: s.h,
      padding: s.pad,
      background: fill,
      color: fg,
      fontFamily: 'var(--font-hand)',
      fontWeight: 600,
      fontSize: s.fz,
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-xs)',
      transform: 'rotate(-1deg)',
      ...style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove tag",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: fg,
      opacity: 0.7,
      padding: 0,
      lineHeight: 1,
      fontSize: s.fz
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { EmotionTag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/EmotionTag.jsx", error: String((e && e.message) || e) }); }

// components/reading/ShelfCard.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * ShelfCard — a themed shelf preview: a few covers leaning together
 * on a wooden ledge, with the shelf's name and count. The core unit
 * of the home/library grid.
 */
function ShelfCard({
  name = '',
  count,
  books = [],
  tone = 'paper',
  onClick,
  style = {},
  ...rest
}) {
  const inverse = tone === 'inverse';
  const shown = books.slice(0, 4);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onClick: onClick,
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 18px 0',
      background: inverse ? 'var(--surface-inverse)' : 'var(--surface-card)',
      backgroundImage: inverse ? 'var(--texture-vignette)' : 'none',
      color: inverse ? 'var(--text-on-dark)' : 'var(--text-body)',
      border: inverse ? '1px solid var(--border-on-dark)' : '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      ...style
    },
    onMouseEnter: onClick ? e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: onClick ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    } : undefined
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '10px',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-title-3)',
      lineHeight: 1.05,
      color: inverse ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, name), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: inverse ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, count, " ", count === 1 ? 'book' : 'books')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '116px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: '0',
      paddingLeft: '4px'
    }
  }, shown.map((b, i) => /*#__PURE__*/React.createElement(__ds_scope.BookCover, {
    key: i,
    title: b.title,
    author: b.author,
    src: b.src,
    palette: b.palette,
    width: 70,
    style: {
      marginLeft: i === 0 ? 0 : '-22px',
      transform: `rotate(${(i - 1.5) * 2.2}deg)`,
      transformOrigin: 'bottom center',
      zIndex: i
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-18px',
      right: '-18px',
      bottom: 0,
      height: '10px',
      background: inverse ? 'linear-gradient(180deg, #3a2c1d, #271c10)' : 'linear-gradient(180deg, #c9a878, #a9824f)',
      boxShadow: '0 -8px 14px -8px rgba(40,24,10,0.45)'
    }
  })));
}
Object.assign(__ds_scope, { ShelfCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/reading/ShelfCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/moodshelf/app.jsx
try { (() => {
/* MoodShelf app shell — nav stack + phone frame. */
const SC = window.MSScreens;
const KK = window.MSKit;
const TAB_SCREENS = ['home', 'shelves', 'recap', 'profile'];
const TAB_TITLES = {
  home: '',
  shelves: 'Your shelves',
  recap: 'Reading recap',
  profile: ''
};
function render(name, payload, go) {
  switch (name) {
    case 'landing':
      return /*#__PURE__*/React.createElement(SC.Landing, {
        go: go
      });
    case 'onboard':
      return /*#__PURE__*/React.createElement(SC.Onboarding, {
        go: go
      });
    case 'home':
      return /*#__PURE__*/React.createElement(SC.HomeLibrary, {
        go: go
      });
    case 'shelves':
      return /*#__PURE__*/React.createElement(SC.ShelvesScreen, {
        go: go
      });
    case 'recap':
      return /*#__PURE__*/React.createElement(SC.RecapScreen, {
        go: go
      });
    case 'profile':
      return /*#__PURE__*/React.createElement(SC.ProfileScreen, {
        go: go
      });
    case 'detail':
      return /*#__PURE__*/React.createElement(SC.BookDetail, {
        go: go,
        book: payload
      });
    case 'shelf':
      return /*#__PURE__*/React.createElement(SC.ShelfDetail, {
        go: go,
        shelf: payload
      });
    case 'createShelf':
      return /*#__PURE__*/React.createElement(SC.CreateShelf, {
        go: go
      });
    case 'themeShop':
      return /*#__PURE__*/React.createElement(SC.ThemeShop, {
        go: go
      });
    default:
      return /*#__PURE__*/React.createElement(SC.HomeLibrary, {
        go: go
      });
  }
}
function App() {
  const [stack, setStack] = React.useState([{
    name: 'landing'
  }]);
  const top = stack[stack.length - 1];
  const isShare = top.name === 'share';
  const base = isShare ? stack[stack.length - 2] : top;
  const go = React.useCallback((name, payload) => {
    if (name === 'back') {
      setStack(s => s.length > 1 ? s.slice(0, -1) : s);
      return;
    }
    if (TAB_SCREENS.includes(name)) {
      setStack([{
        name
      }]);
      return;
    }
    setStack(s => [...s, {
      name,
      payload
    }]);
  }, []);
  const showTabs = TAB_SCREENS.includes(base.name);
  const fullChrome = base.name === 'landing';
  const darkStatus = base.name === 'landing';
  const title = TAB_TITLES[base.name];
  const quick = [['landing', 'Landing'], ['onboard', 'Onboarding'], ['home', 'Library'], ['detail', 'Book'], ['shelf', 'Shelf'], ['createShelf', 'Create'], ['recap', 'Recap'], ['profile', 'Profile'], ['themeShop', 'Themes'], ['share', 'Share']];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 22,
      padding: '34px 20px 44px',
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(SC.Mark, {
    size: 26,
    color: "var(--ink-800)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--ink-900)'
    }
  }, "Mood", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-strong)'
    }
  }, "Shelf")), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginLeft: 6,
      letterSpacing: '0.04em'
    }
  }, "\xB7 mobile UI kit")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 7,
      justifyContent: 'center',
      maxWidth: 560
    }
  }, quick.map(([n, label]) => {
    const on = base.name === n || isShare && n === 'share';
    return /*#__PURE__*/React.createElement("button", {
      key: n,
      onClick: () => {
        if (n === 'share') {
          setStack(s => [...s, {
            name: 'share',
            payload: window.MSData.byId('al')
          }]);
        } else {
          go(n, n === 'detail' ? window.MSData.byId('al') : n === 'shelf' ? window.MSData.shelves[0] : undefined);
        }
      },
      style: {
        padding: '6px 13px',
        borderRadius: 'var(--radius-pill)',
        border: '1px solid var(--border)',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontSize: 12.5,
        fontWeight: 600,
        background: on ? 'var(--accent)' : 'var(--surface-card)',
        backgroundImage: on ? 'var(--wash-candle)' : 'none',
        color: on ? 'var(--text-on-accent)' : 'var(--text-muted)'
      }
    }, label);
  })), /*#__PURE__*/React.createElement(KK.PhoneFrame, null, /*#__PURE__*/React.createElement(KK.StatusBar, {
    dark: darkStatus
  }), !fullChrome && showTabs && (title ? /*#__PURE__*/React.createElement(KK.AppBar, {
    title: title,
    big: true,
    right: /*#__PURE__*/React.createElement(KK.IconButton, {
      name: base.name === 'profile' ? 'settings' : 'bell',
      variant: "soft"
    })
  }) : /*#__PURE__*/React.createElement(KK.AppBar, {
    right: /*#__PURE__*/React.createElement(KK.IconButton, {
      name: "search",
      variant: "soft"
    }),
    left: /*#__PURE__*/React.createElement(KK.IconButton, {
      name: "bell",
      variant: "ghost"
    })
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      position: 'relative'
    }
  }, render(base.name, base.payload, go), isShare && /*#__PURE__*/React.createElement(SC.ShareCard, {
    go: go,
    book: top.payload
  })), showTabs && !isShare && /*#__PURE__*/React.createElement(KK.TabBar, {
    active: base.name,
    onChange: t => go(t)
  })));
}
ReactDOM.createRoot(document.getElementById('root')).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/moodshelf/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/moodshelf/data.js
try { (() => {
/* MoodShelf sample data. */
window.MSData = function () {
  const books = [{
    id: 'sh',
    title: 'The Secret History',
    author: 'Donna Tartt',
    status: 'finished',
    rating: 5,
    emotions: ['eerie', 'longing', 'wonder'],
    spice: 'dark academia',
    note: 'Wanted to be cold and brilliant and doomed.'
  }, {
    id: 'pi',
    title: 'Piranesi',
    author: 'Susanna Clarke',
    status: 'finished',
    rating: 5,
    emotions: ['wonder', 'longing'],
    spice: 'quiet awe',
    note: 'The Beauty of the House is immeasurable; its Kindness infinite.'
  }, {
    id: 'al',
    title: 'A Little Life',
    author: 'Hanya Yanagihara',
    status: 'finished',
    rating: 5,
    emotions: ['heartbreak', 'tender'],
    spice: 'destroyed me',
    note: 'Cried on the train. Twice. Same chapter.'
  }, {
    id: 'be',
    title: 'Beloved',
    author: 'Toni Morrison',
    status: 'reading',
    rating: 0,
    emotions: ['heartbreak', 'eerie'],
    spice: 'haunting',
    note: ''
  }, {
    id: 'cr',
    title: 'Crying in H Mart',
    author: 'Michelle Zauner',
    status: 'finished',
    rating: 4,
    emotions: ['tender', 'longing'],
    spice: 'grief & garlic',
    note: ''
  }, {
    id: 'no',
    title: 'Norwegian Wood',
    author: 'Haruki Murakami',
    status: 'finished',
    rating: 4,
    emotions: ['longing', 'comfort'],
    spice: 'rain & loss',
    note: ''
  }, {
    id: 'ci',
    title: 'Circe',
    author: 'Madeline Miller',
    status: 'want',
    rating: 0,
    emotions: ['wonder', 'rage'],
    spice: 'slow burn power',
    note: ''
  }, {
    id: 'ba',
    title: 'Bunny',
    author: 'Mona Awad',
    status: 'reading',
    rating: 0,
    emotions: ['eerie', 'rage'],
    spice: 'unhinged',
    note: ''
  }, {
    id: 'pr',
    title: 'The Price of Salt',
    author: 'Patricia Highsmith',
    status: 'want',
    rating: 0,
    emotions: ['tender', 'longing'],
    spice: 'aching',
    note: ''
  }];
  const byId = id => books.find(b => b.id === id);
  const shelves = [{
    id: 's1',
    name: 'books that destroyed me',
    count: 12,
    ids: ['al', 'be', 'no'],
    tone: 'inverse'
  }, {
    id: 's2',
    name: 'comfort reads',
    count: 8,
    ids: ['no', 'cr', 'pi'],
    tone: 'paper'
  }, {
    id: 's3',
    name: 'dark academia shelf',
    count: 14,
    ids: ['sh', 'ba', 'ci'],
    tone: 'paper'
  }, {
    id: 's4',
    name: 'books that feel like rain',
    count: 6,
    ids: ['no', 'be', 'pr'],
    tone: 'inverse'
  }];
  const profile = {
    name: 'Wren Adler',
    handle: '@wrenreads',
    bio: 'Reader of doomed academics & quiet magic. I keep the books that keep me.',
    booksThisYear: 47,
    moods: 9,
    streak: 23,
    aura: ['var(--emo-longing)', 'var(--emo-wonder)', 'var(--emo-eerie)', 'var(--emo-joy)'],
    auraWord: 'Longing'
  };
  const themes = [{
    id: 'dark-academia',
    name: 'Dark Academia Library',
    price: 'Premium',
    sub: 'Candlelight, leather, oxblood & gold'
  }, {
    id: 'cozy-cottage',
    name: 'Cozy Cottage Shelf',
    price: 'Premium',
    sub: 'Soft cream, sage & warm linen'
  }, {
    id: 'gothic-romance',
    name: 'Gothic Romance',
    price: 'Premium',
    sub: 'Ink black, oxblood & dramatic gold'
  }, {
    id: 'japanese-minimal',
    name: 'Japanese Minimal Library',
    price: 'Free',
    sub: 'Paper white, sumi ink, vermilion'
  }, {
    id: 'witchy',
    name: 'Witchy Reading Room',
    price: 'Premium',
    sub: 'Deep plum, moss & moonlight'
  }];
  const vibes = [{
    id: 'da',
    label: 'Dark Academia',
    emo: 'eerie',
    line: 'candlelight & doomed brilliance'
  }, {
    id: 'co',
    label: 'Cozy & Comforting',
    emo: 'comfort',
    line: 'tea, rain, a blanket'
  }, {
    id: 'ro',
    label: 'Hopeless Romantic',
    emo: 'tender',
    line: 'yearning above all'
  }, {
    id: 'wo',
    label: 'Wonder & Magic',
    emo: 'wonder',
    line: 'worlds that glow'
  }, {
    id: 'me',
    label: 'Beautifully Sad',
    emo: 'heartbreak',
    line: 'books that wreck me'
  }, {
    id: 'un',
    label: 'Unhinged & Weird',
    emo: 'rage',
    line: 'feral little stories'
  }];
  return {
    books,
    byId,
    shelves,
    profile,
    themes,
    vibes
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/moodshelf/data.js", error: String((e && e.message) || e) }); }

// ui_kits/moodshelf/icons.js
try { (() => {
/* MoodShelf icon paths (Lucide-derived). Shared with the DS Icon component. */
window.__MS_ICONS = {
  'book-open': '<path d="M12 7v14"/><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"/>',
  'book': '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>',
  'library': '<path d="m16 6 4 14"/><path d="M12 6v14"/><path d="M8 8v12"/><path d="M4 4v16"/>',
  'bookmark': '<path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"/>',
  'heart': '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  'share': '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>',
  'plus': '<path d="M5 12h14"/><path d="M12 5v14"/>',
  'star': '<path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/>',
  'sparkles': '<path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/><path d="M4 17v2"/><path d="M5 18H3"/>',
  'feather': '<path d="M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z"/><path d="M16 8 2 22"/><path d="M17.5 15H9"/>',
  'flame': '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  'moon': '<path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/>',
  'search': '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
  'x': '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  'settings': '<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/><circle cx="12" cy="12" r="3"/>',
  'user': '<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>',
  'calendar': '<path d="M8 2v4"/><path d="M16 2v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/>',
  'check': '<path d="M20 6 9 17l-5-5"/>',
  'chevron-right': '<path d="m9 18 6-6-6-6"/>',
  'chevron-left': '<path d="m15 18-6-6 6-6"/>',
  'arrow-right': '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  'more-horizontal': '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  'quote': '<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"/>',
  'bell': '<path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>',
  'camera': '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  'download': '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="M7 10l5 5 5-5"/><path d="M12 15V3"/>',
  'instagram': '<rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>',
  'pen-line': '<path d="M12 20h9"/><path d="M16.376 3.622a1 1 0 0 1 3.002 3.002L7.368 18.635a2 2 0 0 1-.855.506l-2.872.838a.5.5 0 0 1-.62-.62l.838-2.872a2 2 0 0 1 .506-.854z"/>',
  'globe': '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>'
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/moodshelf/icons.js", error: String((e && e.message) || e) }); }

// ui_kits/moodshelf/primitives.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* MoodShelf UI-kit primitives.
   Faithful, self-contained copies of the design-system components
   (same token-based styling) so the kit renders without the compiled
   bundle. Canonical source lives in /components. Exported to window. */

function Icon({
  name,
  size = 20,
  strokeWidth = 1.75,
  fill = 'none',
  style = {},
  ...rest
}) {
  const ICONS = window.__MS_ICONS;
  return /*#__PURE__*/React.createElement("svg", _extends({}, rest, {
    viewBox: "0 0 24 24",
    width: size,
    height: size,
    fill: fill,
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      display: 'block',
      flexShrink: 0,
      ...style
    },
    dangerouslySetInnerHTML: {
      __html: ICONS[name] || ''
    }
  }));
}
function Button({
  variant = 'primary',
  size = 'md',
  full = false,
  iconLeft = null,
  iconRight = null,
  style = {},
  children,
  ...rest
}) {
  const sizes = {
    sm: {
      height: 'var(--h-control-sm)',
      padding: '0 16px',
      font: 'var(--text-sm)'
    },
    md: {
      height: 'var(--h-control)',
      padding: '0 22px',
      font: 'var(--text-base)'
    },
    lg: {
      height: '56px',
      padding: '0 30px',
      font: 'var(--text-lg)'
    }
  };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: {
      background: 'var(--accent)',
      backgroundImage: 'var(--wash-candle)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-strong)',
      border: '1.5px solid var(--border-strong)',
      boxShadow: 'var(--shadow-xs)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    soft: {
      background: 'var(--accent-soft)',
      color: 'var(--accent-deep)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'var(--oxblood-600)',
      color: '#F4E6E2',
      border: '1px solid transparent',
      boxShadow: 'var(--shadow-sm)'
    },
    glass: {
      background: 'rgba(246,236,216,0.12)',
      color: '#F6ECD8',
      border: '1px solid rgba(246,236,216,0.30)',
      backdropFilter: 'blur(6px)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      width: full ? '100%' : 'auto',
      height: s.height,
      padding: s.padding,
      fontFamily: 'var(--font-sans)',
      fontSize: s.font,
      fontWeight: 'var(--w-semibold)',
      letterSpacing: '0.01em',
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-soft), filter var(--dur-fast) var(--ease-soft)',
      ...variants[variant],
      ...style
    },
    onPointerDown: e => {
      e.currentTarget.style.transform = 'scale(0.97)';
    },
    onPointerUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onPointerLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }), iconLeft, children, iconRight);
}
function IconButton({
  name,
  variant = 'ghost',
  size = 40,
  iconSize,
  active = false,
  label,
  style = {},
  ...rest
}) {
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-body)',
      border: '1px solid transparent'
    },
    soft: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-strong)',
      border: '1px solid var(--border)'
    },
    solid: {
      background: 'var(--ink-800)',
      color: 'var(--paper-100)',
      border: '1px solid transparent'
    },
    glass: {
      background: 'rgba(30,20,12,0.42)',
      color: '#F6ECD8',
      border: '1px solid rgba(246,236,216,0.22)',
      backdropFilter: 'blur(8px)'
    }
  };
  const activeStyle = active ? {
    background: 'var(--accent-soft)',
    color: 'var(--accent-deep)',
    border: '1px solid transparent'
  } : {};
  return /*#__PURE__*/React.createElement("button", _extends({}, rest, {
    "aria-label": label || name,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: size,
      height: size,
      borderRadius: 'var(--radius-pill)',
      cursor: 'pointer',
      transition: 'transform var(--dur-fast) var(--ease-soft)',
      ...variants[variant],
      ...activeStyle,
      ...style
    },
    onPointerDown: e => {
      e.currentTarget.style.transform = 'scale(0.9)';
    },
    onPointerUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onPointerLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }), /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: iconSize || Math.round(size * 0.5),
    fill: active && name === 'heart' ? 'currentColor' : 'none'
  }));
}
function Badge({
  status = 'reading',
  children,
  style = {},
  ...rest
}) {
  const map = {
    reading: {
      label: 'Reading',
      bg: 'var(--candle-100)',
      fg: 'var(--candle-700)',
      dot: 'var(--candle-500)'
    },
    finished: {
      label: 'Finished',
      bg: 'var(--sage-100)',
      fg: 'var(--sage-600)',
      dot: 'var(--sage-500)'
    },
    want: {
      label: 'Want to read',
      bg: 'var(--paper-200)',
      fg: 'var(--ink-600)',
      dot: 'var(--clay-400)'
    },
    dnf: {
      label: 'Set down',
      bg: 'var(--surface-sunken)',
      fg: 'var(--text-muted)',
      dot: 'var(--sand-300)'
    },
    favorite: {
      label: 'Beloved',
      bg: 'var(--oxblood-200)',
      fg: 'var(--oxblood-700)',
      dot: 'var(--oxblood-600)'
    }
  };
  const t = map[status] || map.reading;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: '24px',
      padding: '0 10px 0 8px',
      background: t.bg,
      color: t.fg,
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--w-semibold)',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      ...style
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: '6px',
      height: '6px',
      borderRadius: '50%',
      background: t.dot
    }
  }), children || t.label);
}
function Avatar({
  src,
  name = '',
  size = 44,
  ring = true,
  style = {},
  ...rest
}) {
  const initials = name.split(' ').map(p => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  const tints = ['var(--plum-300)', 'var(--candle-300)', 'var(--sage-300)', 'var(--rose-400)', 'var(--dusk-300)'];
  const tint = tints[(name.charCodeAt(0) || 0) % tints.length];
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      padding: ring ? '2px' : 0,
      background: ring ? 'var(--surface-card)' : 'transparent',
      boxShadow: ring ? '0 0 0 1.5px var(--accent), var(--shadow-xs)' : 'none',
      flexShrink: 0,
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: src ? 'var(--surface-sunken)' : tint,
      backgroundImage: src ? `url(${src})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'var(--ink-800)',
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size * 0.4,
      lineHeight: 1
    }
  }, !src && initials));
}
function Input({
  icon,
  variant = 'default',
  style = {},
  wrapStyle = {},
  ...rest
}) {
  const isSearch = variant === 'search';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      height: 'var(--h-control)',
      padding: '0 16px',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border)',
      borderRadius: isSearch ? 'var(--radius-pill)' : 'var(--radius-md)',
      boxShadow: 'var(--shadow-inset)',
      ...wrapStyle
    },
    onFocusCapture: e => {
      e.currentTarget.style.borderColor = 'var(--accent)';
    },
    onBlurCapture: e => {
      e.currentTarget.style.borderColor = 'var(--border)';
    }
  }, (icon || isSearch) && /*#__PURE__*/React.createElement(Icon, {
    name: icon || 'search',
    size: 18,
    style: {
      color: 'var(--text-muted)'
    }
  }), /*#__PURE__*/React.createElement("input", _extends({}, rest, {
    style: {
      flex: 1,
      minWidth: 0,
      border: 'none',
      outline: 'none',
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-base)',
      color: 'var(--text-strong)',
      ...style
    }
  })));
}
function SegmentedControl({
  options = [],
  value,
  onChange,
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    role: "tablist",
    style: {
      display: 'inline-flex',
      padding: '4px',
      gap: '2px',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius-pill)',
      ...style
    }
  }), options.map(opt => {
    const v = typeof opt === 'string' ? opt : opt.value;
    const label = typeof opt === 'string' ? opt : opt.label;
    const active = v === value;
    return /*#__PURE__*/React.createElement("button", {
      key: v,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(v),
      style: {
        appearance: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '7px 16px',
        borderRadius: 'var(--radius-pill)',
        fontFamily: 'var(--font-sans)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--w-semibold)',
        color: active ? 'var(--text-on-accent)' : 'var(--text-muted)',
        background: active ? 'var(--accent)' : 'transparent',
        backgroundImage: active ? 'var(--wash-candle)' : 'none',
        boxShadow: active ? 'var(--shadow-xs)' : 'none',
        transition: 'all var(--dur-base) var(--ease-soft)'
      }
    }, label);
  }));
}
function Card({
  tone = 'paper',
  pad = 'md',
  interactive = false,
  style = {},
  children,
  ...rest
}) {
  const tones = {
    paper: {
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      border: '1px solid var(--border)'
    },
    raised: {
      background: 'var(--surface-raised)',
      color: 'var(--text-body)',
      border: '1px solid var(--border)',
      boxShadow: 'var(--shadow-md)'
    },
    sunken: {
      background: 'var(--surface-sunken)',
      color: 'var(--text-body)',
      border: '1px solid var(--border)'
    },
    inverse: {
      background: 'var(--surface-inverse)',
      backgroundImage: 'var(--texture-vignette)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--border-on-dark)'
    }
  };
  const pads = {
    none: '0',
    sm: '14px',
    md: '18px',
    lg: '24px'
  };
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      borderRadius: 'var(--radius-lg)',
      padding: pads[pad],
      transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      cursor: interactive ? 'pointer' : 'default',
      ...tones[tone],
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = tones[tone].boxShadow || 'none';
    } : undefined
  }), children);
}
window.MSKit = Object.assign(window.MSKit || {}, {
  Icon,
  Button,
  IconButton,
  Badge,
  Avatar,
  Input,
  SegmentedControl,
  Card
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/moodshelf/primitives.jsx", error: String((e && e.message) || e) }); }

// ui_kits/moodshelf/reading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/* MoodShelf UI-kit reading primitives: EmotionTag, BookCover, AuraOrb,
   ShelfCard. Faithful copies of /components/reading. Exported to window. */

function EmotionTag({
  emotion,
  color,
  children,
  size = 'md',
  onRemove,
  style = {},
  ...rest
}) {
  const EMO = {
    joy: 'joy',
    heartbreak: 'heartbreak',
    comfort: 'comfort',
    longing: 'longing',
    eerie: 'eerie',
    tender: 'tender',
    wonder: 'wonder',
    rage: 'rage'
  };
  const key = EMO[emotion];
  const fill = color || (key ? `var(--emo-${key})` : 'var(--clay-400)');
  const fg = key ? `var(--emo-${key}-on)` : '#FFF7E8';
  const sizes = {
    sm: {
      fz: '15px',
      pad: '2px 10px',
      h: '24px'
    },
    md: {
      fz: '18px',
      pad: '3px 13px',
      h: '30px'
    },
    lg: {
      fz: '22px',
      pad: '4px 16px',
      h: '38px'
    }
  };
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      height: s.h,
      padding: s.pad,
      background: fill,
      color: fg,
      fontFamily: 'var(--font-hand)',
      fontWeight: 600,
      fontSize: s.fz,
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-xs)',
      transform: 'rotate(-1deg)',
      ...style
    }
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: onRemove,
    "aria-label": "Remove tag",
    style: {
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      color: fg,
      opacity: 0.7,
      padding: 0,
      lineHeight: 1,
      fontSize: s.fz
    }
  }, "\xD7"));
}
const MS_PALETTES = [{
  bg: '#3B2D20',
  fg: '#EAD8B8',
  rule: '#C8913A'
}, {
  bg: '#5E211E',
  fg: '#F0D9C8',
  rule: '#DCA94F'
}, {
  bg: '#4C583F',
  fg: '#E7E9D4',
  rule: '#C9B26A'
}, {
  bg: '#3C4A5A',
  fg: '#DCE6EE',
  rule: '#A9BBCB'
}, {
  bg: '#4C3050',
  fg: '#ECDDEC',
  rule: '#C79BC4'
}, {
  bg: '#1F1712',
  fg: '#E7D2A6',
  rule: '#C8913A'
}, {
  bg: '#B5786A',
  fg: '#FDF2EC',
  rule: '#FFFFFF'
}, {
  bg: '#E7D8BE',
  fg: '#3B2D20',
  rule: '#7A2E2A'
}];
function msPick(title = '') {
  let h = 0;
  for (let i = 0; i < title.length; i++) h = h * 31 + title.charCodeAt(i) >>> 0;
  return MS_PALETTES[h % MS_PALETTES.length];
}
function BookCover({
  title = '',
  author = '',
  src,
  width = 120,
  palette,
  spine = true,
  style = {},
  ...rest
}) {
  const height = Math.round(width * 1.5);
  const p = palette || msPick(title);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      position: 'relative',
      width,
      height,
      borderRadius: 'var(--radius-book)',
      boxShadow: 'var(--shadow-book)',
      overflow: 'hidden',
      flexShrink: 0,
      ...style
    }
  }), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: title,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      height: '100%',
      background: p.bg,
      color: p.fg,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: `${width * 0.11}px ${width * 0.11}px ${width * 0.1}px`,
      boxSizing: 'border-box'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '30%',
      height: '2px',
      background: p.rule,
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: width * 0.155,
      lineHeight: 1.05,
      letterSpacing: '-0.01em',
      textWrap: 'balance'
    }
  }, title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: width * 0.072,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      opacity: 0.82
    }
  }, author)), spine && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(0,0,0,0.26) 0%, rgba(0,0,0,0.06) 7%, rgba(0,0,0,0) 16%)',
      pointerEvents: 'none'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      right: 0,
      width: '2px',
      background: 'rgba(255,255,255,0.14)',
      pointerEvents: 'none'
    }
  })));
}
function AuraOrb({
  colors = ['var(--emo-longing)', 'var(--emo-wonder)', 'var(--emo-joy)'],
  size = 180,
  label,
  caption,
  style = {},
  ...rest
}) {
  const stops = colors.length === 1 ? `${colors[0]}, ${colors[0]}` : colors.map((c, i) => `${c} ${Math.round(i / (colors.length - 1) * 100)}%`).join(', ');
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '14px',
      ...style
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      width: size,
      height: size,
      borderRadius: '50%',
      background: `conic-gradient(from 210deg, ${stops}, ${colors[0]})`,
      filter: 'saturate(1.05)',
      boxShadow: 'var(--glow-aura), inset 0 0 40px rgba(255,255,255,0.18), inset 0 -10px 30px rgba(0,0,0,0.25)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '24%',
      borderRadius: '50%',
      background: 'radial-gradient(circle at 38% 32%, rgba(255,248,232,0.55), rgba(255,248,232,0) 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      borderRadius: '50%',
      boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.18)'
    }
  }), label && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: size * 0.16,
      color: '#FFF7E8',
      textShadow: '0 1px 8px rgba(40,24,10,0.45)',
      textAlign: 'center',
      padding: '0 14%',
      lineHeight: 1.05
    }
  }, label)), caption && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-2xs)',
      fontWeight: 600,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, caption));
}
function ShelfCard({
  name = '',
  count,
  books = [],
  tone = 'paper',
  onClick,
  style = {},
  ...rest
}) {
  const inverse = tone === 'inverse';
  const shown = books.slice(0, 4);
  return /*#__PURE__*/React.createElement("div", _extends({}, rest, {
    onClick: onClick,
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      padding: '18px 18px 0',
      background: inverse ? 'var(--surface-inverse)' : 'var(--surface-card)',
      backgroundImage: inverse ? 'var(--texture-vignette)' : 'none',
      color: inverse ? 'var(--text-on-dark)' : 'var(--text-body)',
      border: inverse ? '1px solid var(--border-on-dark)' : '1px solid var(--border)',
      boxShadow: 'var(--shadow-sm)',
      cursor: onClick ? 'pointer' : 'default',
      overflow: 'hidden',
      transition: 'transform var(--dur-base) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      ...style
    },
    onMouseEnter: onClick ? e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
    } : undefined,
    onMouseLeave: onClick ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
    } : undefined
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: '10px',
      marginBottom: '14px'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-title-3)',
      lineHeight: 1.05,
      color: inverse ? 'var(--text-on-dark)' : 'var(--text-strong)'
    }
  }, name), count != null && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-xs)',
      fontWeight: 600,
      color: inverse ? 'var(--text-on-dark-muted)' : 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, count, " ", count === 1 ? 'book' : 'books')), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '116px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      paddingLeft: '4px'
    }
  }, shown.map((b, i) => /*#__PURE__*/React.createElement(BookCover, {
    key: i,
    title: b.title,
    author: b.author,
    src: b.src,
    palette: b.palette,
    width: 70,
    style: {
      marginLeft: i === 0 ? 0 : '-22px',
      transform: `rotate(${(i - 1.5) * 2.2}deg)`,
      transformOrigin: 'bottom center',
      zIndex: i
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '-18px',
      right: '-18px',
      bottom: 0,
      height: '10px',
      background: inverse ? 'linear-gradient(180deg, #3a2c1d, #271c10)' : 'linear-gradient(180deg, #c9a878, #a9824f)',
      boxShadow: '0 -8px 14px -8px rgba(40,24,10,0.45)'
    }
  })));
}
window.MSKit = Object.assign(window.MSKit || {}, {
  EmotionTag,
  BookCover,
  AuraOrb,
  ShelfCard
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/moodshelf/reading.jsx", error: String((e && e.message) || e) }); }

// ui_kits/moodshelf/screens-intro.jsx
try { (() => {
/* MoodShelf intro + detail + share screens. */
const K = window.MSKit;
const DATA = window.MSData;
function VScroll({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      ...style
    }
  }, children);
}
const GP = {
  padding: '0 20px'
};

/* ---------------- LANDING ---------------- */
function Landing({
  go
}) {
  const floats = [DATA.byId('sh'), DATA.byId('pi'), DATA.byId('al')];
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": "dark-academia",
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-page)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement(VScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      padding: '8px 24px 28px',
      backgroundImage: 'var(--wash-dusk)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      marginBottom: 40
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 28,
    color: "var(--paper-100)",
    flame: "var(--candle-400)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      color: 'var(--paper-50)'
    }
  }, "Mood", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--candle-400)'
    }
  }, "Shelf"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 188,
      marginBottom: 8
    }
  }, floats.map((b, i) => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    style: {
      position: 'absolute',
      left: `${14 + i * 84}px`,
      top: `${i % 2 ? 22 : 0}px`,
      transform: `rotate(${(i - 1) * 7}deg)`,
      zIndex: i === 1 ? 3 : 1
    }
  }, /*#__PURE__*/React.createElement(K.BookCover, {
    title: b.title,
    author: b.author,
    width: i === 1 ? 128 : 110
  })))), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 42,
      lineHeight: 1.02,
      letterSpacing: '-0.02em',
      color: 'var(--paper-50)',
      marginTop: 14
    }
  }, "The books that", /*#__PURE__*/React.createElement("br", null), "made you ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--candle-400)'
    }
  }, "feel.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 16,
      lineHeight: 1.55,
      color: 'var(--text-on-dark-muted)',
      marginTop: 16,
      maxWidth: 320
    }
  }, "Goodreads tracks what you read. MoodShelf remembers how it left you \u2014 the moods, the quotes, the ache, the wonder."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(K.Button, {
    variant: "primary",
    size: "lg",
    full: true,
    onClick: () => go('onboard')
  }, "Begin your library"), /*#__PURE__*/React.createElement(K.Button, {
    variant: "glass",
    full: true,
    onClick: () => go('home')
  }, "I already have one"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '26px 24px 30px',
      background: 'var(--surface-page)'
    }
  }, [['heart', 'Tag the feeling', 'Log moods, quotes & memories on every book.'], ['library', 'Build emotional shelves', '“books that destroyed me.” “comfort reads.” “rain.”'], ['sparkles', 'See your reading aura', 'Monthly recaps & share cards made to be screenshotted.']].map(([ic, t, d]) => /*#__PURE__*/React.createElement("div", {
    key: t,
    style: {
      display: 'flex',
      gap: 14,
      padding: '14px 0',
      borderBottom: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 42,
      height: 42,
      borderRadius: 12,
      background: 'var(--surface-card)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--accent)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(K.Icon, {
    name: ic,
    size: 20
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 18,
      color: 'var(--text-on-dark)'
    }
  }, t), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-on-dark-muted)',
      marginTop: 2
    }
  }, d)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      marginTop: 22,
      fontFamily: 'var(--font-hand)',
      fontSize: 20,
      color: 'var(--accent-300, var(--candle-300))'
    }
  }, "made by readers who feel things \u2665"))));
}
function Mark({
  size = 28,
  color = 'var(--ink-800)',
  flame = '#C8913A'
}) {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 64",
    width: size,
    height: size,
    fill: "none",
    style: {
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M32 22.5C26 18.8 19.5 18.4 11.8 20.4C10.7 20.7 10 21.7 10 22.8V43.3C10 44.8 11.4 45.9 12.8 45.6C19.4 44.1 25.7 44.6 32 47.8",
    stroke: color,
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 22.5C38 18.8 44.5 18.4 52.2 20.4C53.3 20.7 54 21.7 54 22.8V43.3C54 44.8 52.6 45.9 51.2 45.6C44.6 44.1 38.3 44.6 32 47.8",
    stroke: color,
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 23.5V47",
    stroke: color,
    strokeWidth: "2.6",
    strokeLinecap: "round"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M32 6C32 6 27.5 10.2 27.5 13.4C27.5 15.9 29.5 17.6 32 17.6C34.5 17.6 36.5 15.9 36.5 13.4C36.5 10.2 32 6 32 6Z",
    fill: flame
  }));
}

/* ---------------- ONBOARDING: choose your vibe ---------------- */
function Onboarding({
  go
}) {
  const [sel, setSel] = React.useState(['da', 'me']);
  const toggle = id => setSel(s => s.includes(id) ? s.filter(x => x !== id) : [...s, id]);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(K.AppBar, {
    left: /*#__PURE__*/React.createElement(K.IconButton, {
      name: "chevron-left",
      variant: "soft",
      onClick: () => go('landing')
    }),
    title: "Step 1 of 3"
  }), /*#__PURE__*/React.createElement(VScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...GP,
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 32,
      lineHeight: 1.05,
      color: 'var(--text-strong)'
    }
  }, "Choose your ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-strong)'
    }
  }, "reading vibe")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, "Pick the moods you read for. We'll set the tone of your library.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...GP,
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 12,
      paddingBottom: 16
    }
  }, DATA.vibes.map(v => {
    const on = sel.includes(v.id);
    return /*#__PURE__*/React.createElement("div", {
      key: v.id,
      onClick: () => toggle(v.id),
      style: {
        position: 'relative',
        cursor: 'pointer',
        borderRadius: 'var(--radius-lg)',
        padding: '16px 14px 14px',
        minHeight: 116,
        background: on ? `var(--emo-${v.emo})` : 'var(--surface-card)',
        color: on ? `var(--emo-${v.emo}-on)` : 'var(--text-body)',
        border: on ? '1px solid transparent' : '1px solid var(--border)',
        boxShadow: on ? 'var(--shadow-md)' : 'var(--shadow-xs)',
        transition: 'all var(--dur-base) var(--ease-soft)',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
      }
    }, on && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        top: 12,
        right: 12
      }
    }, /*#__PURE__*/React.createElement(K.Icon, {
      name: "check",
      size: 18
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 13,
        height: 13,
        borderRadius: '50%',
        background: on ? `var(--emo-${v.emo}-on)` : `var(--emo-${v.emo})`,
        opacity: on ? 0.6 : 1
      }
    }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 19,
        lineHeight: 1.1
      }
    }, v.label), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-hand)',
        fontSize: 16,
        marginTop: 3,
        opacity: 0.9
      }
    }, v.line)));
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...GP,
      padding: '12px 20px 20px',
      borderTop: '1px solid var(--border)',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement(K.Button, {
    variant: "primary",
    size: "lg",
    full: true,
    iconRight: /*#__PURE__*/React.createElement(K.Icon, {
      name: "arrow-right",
      size: 18
    }),
    onClick: () => go('home')
  }, "Continue with ", sel.length, " ", sel.length === 1 ? 'vibe' : 'vibes')));
}

/* ---------------- BOOK DETAIL ---------------- */
function BookDetail({
  go,
  book
}) {
  const b = book || DATA.byId('al');
  const [emos, setEmos] = React.useState(b.emotions);
  const [rating, setRating] = React.useState(b.rating || 4);
  const adding = ['joy', 'comfort', 'eerie', 'tender', 'wonder', 'rage'].filter(e => !emos.includes(e));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(K.AppBar, {
    left: /*#__PURE__*/React.createElement(K.IconButton, {
      name: "chevron-left",
      variant: "soft",
      onClick: () => go('home')
    }),
    right: /*#__PURE__*/React.createElement(K.IconButton, {
      name: "share",
      variant: "soft",
      onClick: () => go('share', b)
    })
  }), /*#__PURE__*/React.createElement(VScroll, null, /*#__PURE__*/React.createElement("div", {
    "data-theme": "dark-academia",
    style: {
      background: 'var(--surface-page)',
      backgroundImage: 'var(--wash-dusk)',
      padding: '14px 20px 26px',
      display: 'flex',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(K.BookCover, {
    title: b.title,
    author: b.author,
    width: 120
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      lineHeight: 1.05,
      color: 'var(--paper-50)'
    }
  }, b.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-on-dark-muted)',
      marginTop: 4
    }
  }, b.author), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, /*#__PURE__*/React.createElement(K.Badge, {
    status: b.status
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement(K.Stars, {
    value: rating,
    size: 22,
    onChange: setRating
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...GP,
      paddingTop: 20
    }
  }, /*#__PURE__*/React.createElement(K.SectionLabel, null, "How it left you"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 9
    }
  }, emos.map(e => /*#__PURE__*/React.createElement(K.EmotionTag, {
    key: e,
    emotion: e,
    onRemove: () => setEmos(emos.filter(x => x !== e))
  }, e))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8,
      marginTop: 14
    }
  }, adding.slice(0, 5).map(e => /*#__PURE__*/React.createElement("button", {
    key: e,
    onClick: () => setEmos([...emos, e]),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 5,
      padding: '5px 12px',
      borderRadius: 'var(--radius-pill)',
      border: '1px dashed var(--border-strong)',
      background: 'transparent',
      cursor: 'pointer',
      fontFamily: 'var(--font-hand)',
      fontSize: 16,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(K.Icon, {
    name: "plus",
    size: 13
  }), e)))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...GP,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(K.SectionLabel, null, "Your margin note"), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border)',
      borderLeft: '3px solid var(--accent)',
      borderRadius: 'var(--radius-md)',
      padding: '14px 16px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-hand)',
      fontSize: 22,
      lineHeight: 1.4,
      color: 'var(--text-body)'
    }
  }, b.note || 'Tap to write what this book did to you…'))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...GP,
      marginTop: 24
    }
  }, /*#__PURE__*/React.createElement(K.SectionLabel, {
    action: "Add quote"
  }, "Saved quote"), /*#__PURE__*/React.createElement(K.Card, {
    tone: "inverse",
    pad: "lg"
  }, /*#__PURE__*/React.createElement(K.Icon, {
    name: "quote",
    size: 22,
    style: {
      color: 'var(--accent)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 17,
      lineHeight: 1.55,
      color: 'var(--text-on-dark)',
      marginTop: 8
    }
  }, "\u201CThings that happen for the first time can never happen the same way twice.\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      color: 'var(--text-on-dark-muted)',
      marginTop: 10
    }
  }, "page 214"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...GP,
      marginTop: 24,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement(K.SectionLabel, null, "On your shelves"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['books that destroyed me', 'comfort reads', 'rain'].map(s => /*#__PURE__*/React.createElement("span", {
    key: s,
    style: {
      padding: '7px 14px',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--surface-sunken)',
      border: '1px solid var(--border)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--text-body)'
    }
  }, s))))));
}

/* ---------------- SHELF DETAIL ---------------- */
function ShelfDetail({
  go,
  shelf
}) {
  const s = shelf || DATA.shelves[0];
  const books = [...s.ids, 'cr', 'pr', 'ci'].map(DATA.byId).filter(Boolean);
  const inverse = s.tone === 'inverse';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(K.AppBar, {
    left: /*#__PURE__*/React.createElement(K.IconButton, {
      name: "chevron-left",
      variant: "soft",
      onClick: () => go('shelves')
    }),
    right: /*#__PURE__*/React.createElement(K.IconButton, {
      name: "share",
      variant: "soft",
      onClick: () => go('share')
    })
  }), /*#__PURE__*/React.createElement(VScroll, null, /*#__PURE__*/React.createElement("div", {
    "data-theme": inverse ? 'dark-academia' : undefined,
    style: {
      ...GP,
      paddingBottom: 18,
      paddingTop: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, s.count, " books \xB7 a shelf by Wren"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 34,
      lineHeight: 1.04,
      color: 'var(--text-strong)',
      marginTop: 8
    }
  }, s.name), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 15,
      color: 'var(--text-muted)',
      marginTop: 8
    }
  }, "The ones I'd warn you about and hand you anyway.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...GP,
      display: 'grid',
      gridTemplateColumns: 'repeat(3,1fr)',
      gap: 16,
      paddingBottom: 24
    }
  }, books.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    onClick: () => go('detail', b),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(K.BookCover, {
    title: b.title,
    author: b.author,
    width: 98,
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-hand)',
      fontSize: 15,
      color: `var(--emo-${b.emotions[0]})`,
      marginTop: 6
    }
  }, b.spice))))));
}

/* ---------------- CREATE SHELF ---------------- */
function CreateShelf({
  go
}) {
  const [name, setName] = React.useState('books that feel like rain');
  const [emo, setEmo] = React.useState('eerie');
  const emos = ['heartbreak', 'comfort', 'longing', 'eerie', 'tender', 'wonder', 'joy', 'rage'];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(K.AppBar, {
    left: /*#__PURE__*/React.createElement(K.IconButton, {
      name: "x",
      variant: "soft",
      onClick: () => go('shelves')
    }),
    title: "New shelf"
  }), /*#__PURE__*/React.createElement(VScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...GP
    }
  }, /*#__PURE__*/React.createElement("div", {
    "data-theme": "dark-academia",
    style: {
      borderRadius: 'var(--radius-xl)',
      backgroundImage: 'var(--wash-dusk)',
      padding: 22,
      textAlign: 'center',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(K.EmotionTag, {
    emotion: emo,
    size: "lg"
  }, emo)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 28,
      lineHeight: 1.08,
      color: 'var(--paper-50)',
      marginTop: 14
    }
  }, name || 'name your shelf')), /*#__PURE__*/React.createElement(K.SectionLabel, null, "Shelf name"), /*#__PURE__*/React.createElement(K.Input, {
    value: name,
    onChange: e => setName(e.target.value),
    placeholder: "books that\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(K.SectionLabel, null, "Its dominant feeling")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, emos.map(e => /*#__PURE__*/React.createElement("button", {
    key: e,
    onClick: () => setEmo(e),
    style: {
      width: 38,
      height: 38,
      borderRadius: '50%',
      background: `var(--emo-${e})`,
      border: emo === e ? '3px solid var(--accent)' : '3px solid transparent',
      cursor: 'pointer',
      boxShadow: 'var(--shadow-xs)'
    },
    "aria-label": e
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(K.SectionLabel, {
    action: "Browse library"
  }, "Add books")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      overflowX: 'auto',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 70,
      height: 105,
      borderRadius: 'var(--radius-book)',
      border: '2px dashed var(--border-strong)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--text-muted)',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(K.Icon, {
    name: "plus",
    size: 22
  })), ['no', 'be', 'pr'].map(DATA.byId).map(b => /*#__PURE__*/React.createElement(K.BookCover, {
    key: b.id,
    title: b.title,
    author: b.author,
    width: 70
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 20px 20px',
      borderTop: '1px solid var(--border)'
    }
  }, /*#__PURE__*/React.createElement(K.Button, {
    variant: "primary",
    size: "lg",
    full: true,
    onClick: () => go('shelves')
  }, "Create shelf")));
}

/* ---------------- SHARE CARD (overlay) ---------------- */
function ShareCard({
  go,
  book
}) {
  const b = book || DATA.byId('al');
  const p = DATA.profile;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      zIndex: 50,
      background: 'rgba(20,13,8,0.72)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '8px 16px',
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(K.IconButton, {
    name: "x",
    variant: "glass",
    onClick: () => go('back')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 26px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 286,
      aspectRatio: '9 / 16',
      borderRadius: 22,
      overflow: 'hidden',
      boxShadow: 'var(--shadow-xl)',
      position: 'relative',
      background: '#1F1712',
      backgroundImage: 'var(--wash-aura)',
      display: 'flex',
      flexDirection: 'column',
      padding: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 7
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 20,
    color: "#FFF7E8",
    flame: "#FFD98A"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 15,
      color: '#FFF7E8'
    }
  }, "MoodShelf")), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(K.BookCover, {
    title: b.title,
    author: b.author,
    width: 120
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 22,
      color: '#FFF7E8',
      lineHeight: 1.1
    }
  }, b.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'rgba(255,247,232,0.7)',
      marginTop: 4
    }
  }, b.author)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flexWrap: 'wrap',
      justifyContent: 'center'
    }
  }, b.emotions.map(e => /*#__PURE__*/React.createElement(K.EmotionTag, {
    key: e,
    emotion: e,
    size: "sm"
  }, e)))), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center',
      fontFamily: 'var(--font-hand)',
      fontSize: 19,
      color: '#FFF7E8'
    }
  }, p.handle, " \xB7 it ruined me \u2665"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '18px 26px 26px',
      display: 'flex',
      gap: 12,
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(K.IconButton, {
    name: "instagram",
    variant: "glass",
    size: 52
  }), /*#__PURE__*/React.createElement(K.IconButton, {
    name: "camera",
    variant: "glass",
    size: 52
  }), /*#__PURE__*/React.createElement(K.Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(K.Icon, {
      name: "download",
      size: 18
    }),
    onClick: () => go('back')
  }, "Save card")));
}

/* ---------------- THEME SHOP ---------------- */
function ThemeShop({
  go
}) {
  const [applied, setApplied] = React.useState('dark-academia');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(K.AppBar, {
    left: /*#__PURE__*/React.createElement(K.IconButton, {
      name: "chevron-left",
      variant: "soft",
      onClick: () => go('profile')
    }),
    title: "Theme shop"
  }), /*#__PURE__*/React.createElement(VScroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...GP,
      paddingBottom: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      lineHeight: 1.05,
      color: 'var(--text-strong)'
    }
  }, "Dress your ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-strong)'
    }
  }, "library")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 15,
      color: 'var(--text-muted)',
      marginTop: 6
    }
  }, "Every shelf, recap and share card, re-skinned.")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...GP,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      paddingTop: 12,
      paddingBottom: 20
    }
  }, DATA.themes.map(t => {
    const on = applied === t.id;
    return /*#__PURE__*/React.createElement("div", {
      key: t.id,
      "data-theme": t.id,
      style: {
        borderRadius: 'var(--radius-lg)',
        overflow: 'hidden',
        border: '1px solid var(--border)',
        background: 'var(--surface-page)',
        boxShadow: 'var(--shadow-sm)'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        height: 76,
        display: 'flex'
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--surface-card)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        background: 'var(--surface-inverse, var(--surface-card))'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 60,
        background: 'var(--accent)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        width: 40,
        background: 'var(--accent-ink)'
      }
    })), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '14px 16px',
        background: 'var(--surface-card)'
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-display)',
        fontWeight: 600,
        fontSize: 18,
        color: 'var(--text-strong)'
      }
    }, t.name), /*#__PURE__*/React.createElement("div", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        color: 'var(--text-muted)'
      }
    }, t.sub)), /*#__PURE__*/React.createElement("button", {
      onClick: () => setApplied(t.id),
      style: {
        flexShrink: 0,
        padding: '8px 16px',
        borderRadius: 'var(--radius-pill)',
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'var(--font-sans)',
        fontWeight: 600,
        fontSize: 13,
        background: on ? 'var(--accent)' : 'var(--surface-sunken)',
        backgroundImage: on ? 'var(--wash-candle)' : 'none',
        color: on ? 'var(--text-on-accent)' : 'var(--text-body)'
      }
    }, on ? 'Applied' : t.price === 'Free' ? 'Apply' : 'Unlock')));
  }))));
}
window.MSScreens = Object.assign(window.MSScreens || {}, {
  Landing,
  Onboarding,
  BookDetail,
  ShelfDetail,
  CreateShelf,
  ShareCard,
  ThemeShop,
  Mark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/moodshelf/screens-intro.jsx", error: String((e && e.message) || e) }); }

// ui_kits/moodshelf/screens.jsx
try { (() => {
/* MoodShelf in-app screens: Home/Library, Shelves, Recap, Profile. */
const {
  Icon,
  Button,
  IconButton,
  Badge,
  Avatar,
  Input,
  SegmentedControl,
  Card,
  EmotionTag,
  BookCover,
  AuraOrb,
  ShelfCard,
  AppBar,
  SectionLabel,
  Stars
} = window.MSKit;
const D = window.MSData;
function Scroll({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      overflowY: 'auto',
      overflowX: 'hidden',
      ...style
    }
  }, children);
}
const PAD = {
  padding: '0 20px'
};

/* ---------------- HOME / LIBRARY ---------------- */
function HomeLibrary({
  go
}) {
  const [filter, setFilter] = React.useState('All');
  const reading = D.byId('be');
  const list = D.books.filter(b => filter === 'All' ? true : b.status === filter.toLowerCase());
  return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      paddingTop: 4,
      paddingBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 30,
      lineHeight: 1.04,
      color: 'var(--text-strong)'
    }
  }, "Good evening,", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontStyle: 'italic',
      color: 'var(--accent-strong)'
    }
  }, "Wren")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 6,
      marginTop: 8,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flame",
    size: 16,
    style: {
      color: 'var(--candle-500)'
    }
  }), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--text-body)'
    }
  }, "23-day"), " reading streak \xB7 47 this year"))), /*#__PURE__*/React.createElement("div", {
    style: PAD
  }, /*#__PURE__*/React.createElement(SectionLabel, null, "Currently reading"), /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    pad: "none",
    interactive: true,
    onClick: () => go('detail', reading),
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 16,
      padding: 16
    }
  }, /*#__PURE__*/React.createElement(BookCover, {
    title: reading.title,
    author: reading.author,
    width: 92
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 21,
      lineHeight: 1.08,
      color: 'var(--text-on-dark)'
    }
  }, reading.title), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      color: 'var(--text-on-dark-muted)',
      marginTop: 3
    }
  }, reading.author), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--text-on-dark-muted)',
      marginBottom: 6
    }
  }, /*#__PURE__*/React.createElement("span", null, "page 168"), /*#__PURE__*/React.createElement("span", null, "62%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 5,
      borderRadius: 3,
      background: 'rgba(246,236,216,0.18)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '62%',
      height: '100%',
      borderRadius: 3,
      background: 'var(--wash-candle)'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '12px 16px',
      borderTop: '1px solid var(--border-on-dark)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 14,
      color: 'var(--text-on-dark)'
    }
  }, "How is it leaving you?"), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-right",
    size: 18,
    style: {
      color: 'var(--accent)'
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement(SegmentedControl, {
    options: ['All', 'Reading', 'Finished', 'Want'],
    value: filter,
    onChange: setFilter,
    style: {
      marginBottom: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 16,
      marginTop: 4
    }
  }, list.map(b => /*#__PURE__*/React.createElement("div", {
    key: b.id,
    onClick: () => go('detail', b),
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement(BookCover, {
    title: b.title,
    author: b.author,
    width: 98,
    style: {
      width: '100%'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 12,
      color: 'var(--text-body)',
      marginTop: 8,
      lineHeight: 1.2
    }
  }, b.title), b.emotions[0] && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-hand)',
      fontSize: 14,
      color: `var(--emo-${b.emotions[0]})`,
      marginTop: 1
    }
  }, b.spice))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26,
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: PAD
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    action: "All shelves",
    onAction: () => go('shelves')
  }, "Your shelves")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      overflowX: 'auto',
      padding: '0 20px 6px',
      scrollbarWidth: 'none'
    }
  }, D.shelves.map(s => /*#__PURE__*/React.createElement("div", {
    key: s.id,
    style: {
      width: 230,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(ShelfCard, {
    name: s.name,
    count: s.count,
    tone: s.tone,
    books: s.ids.map(D.byId),
    onClick: () => go('shelf', s)
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }));
}

/* ---------------- SHELVES ---------------- */
function ShelvesScreen({
  go
}) {
  return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      paddingBottom: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    full: true,
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "plus",
      size: 18
    }),
    onClick: () => go('createShelf')
  }, "Create an emotional shelf")), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      paddingBottom: 16
    }
  }, D.shelves.map(s => /*#__PURE__*/React.createElement(ShelfCard, {
    key: s.id,
    name: s.name,
    count: s.count,
    tone: s.tone,
    books: s.ids.map(D.byId),
    onClick: () => go('shelf', s)
  }))));
}

/* ---------------- RECAP / AURA ---------------- */
function RecapScreen({
  go
}) {
  const p = D.profile;
  const emo = [{
    k: 'longing',
    pct: 34
  }, {
    k: 'wonder',
    pct: 22
  }, {
    k: 'heartbreak',
    pct: 18
  }, {
    k: 'comfort',
    pct: 14
  }, {
    k: 'eerie',
    pct: 12
  }];
  return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    "data-theme": "dark-academia",
    style: {
      margin: '0 16px 18px',
      borderRadius: 'var(--radius-xl)',
      background: 'var(--surface-page)',
      backgroundImage: 'var(--wash-dusk)',
      padding: '26px 22px 28px',
      textAlign: 'center',
      border: '1px solid var(--border-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, "Your June aura"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      margin: '18px 0 16px'
    }
  }, /*#__PURE__*/React.createElement(AuraOrb, {
    size: 184,
    colors: p.aura,
    label: p.auraWord
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 18,
      lineHeight: 1.5,
      color: 'var(--text-on-dark)',
      maxWidth: 280,
      margin: '0 auto'
    }
  }, "\u201CYour June was mostly ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)',
      fontStyle: 'normal'
    }
  }, "longing"), ", with a sharp turn into ", /*#__PURE__*/React.createElement("b", {
    style: {
      color: 'var(--accent)',
      fontStyle: 'normal'
    }
  }, "wonder"), ".\u201D"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 20
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "share",
      size: 17
    }),
    onClick: () => go('share')
  }, "Share your aura"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      gap: 10,
      marginBottom: 22
    }
  }, [['9', 'books'], ['2,841', 'pages'], ['5', 'moods']].map(([n, l]) => /*#__PURE__*/React.createElement(Card, {
    key: l,
    pad: "sm",
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--text-strong)',
      lineHeight: 1
    }
  }, n), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: 'var(--text-muted)',
      marginTop: 4,
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    }
  }, l)))), /*#__PURE__*/React.createElement(SectionLabel, null, "Your emotional spectrum"), /*#__PURE__*/React.createElement(Card, {
    pad: "lg",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, emo.map(e => /*#__PURE__*/React.createElement("div", {
    key: e.k
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-hand)',
      fontWeight: 600,
      fontSize: 19,
      color: `var(--emo-${e.k})`,
      textTransform: 'capitalize'
    }
  }, e.k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, e.pct, "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 4,
      background: 'var(--surface-sunken)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: e.pct * 2.6 + '%',
      height: '100%',
      borderRadius: 4,
      background: `var(--emo-${e.k})`
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  })));
}

/* ---------------- PROFILE ---------------- */
function ProfileScreen({
  go
}) {
  const p = D.profile;
  return /*#__PURE__*/React.createElement(Scroll, null, /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      textAlign: 'center',
      paddingBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    size: 84
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--text-strong)',
      marginTop: 12
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--accent-strong)',
      fontWeight: 600
    }
  }, p.handle), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontStyle: 'italic',
      fontSize: 15,
      lineHeight: 1.5,
      color: 'var(--text-body)',
      maxWidth: 300,
      margin: '12px auto 0'
    }
  }, p.bio), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      gap: 10,
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "share",
      size: 16
    }),
    onClick: () => go('share')
  }, "Share profile"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm",
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "settings",
      size: 16
    }),
    onClick: () => go('themeShop')
  }, "Themes"))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(Card, {
    tone: "inverse",
    pad: "lg",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(AuraOrb, {
    size: 92,
    colors: p.aura
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-on-dark-muted)'
    }
  }, "Reading aura"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontWeight: 600,
      fontSize: 28,
      color: 'var(--text-on-dark)',
      lineHeight: 1.1,
      marginTop: 2
    }
  }, p.auraWord, " &", /*#__PURE__*/React.createElement("br", null), "Wonder")))), /*#__PURE__*/React.createElement("div", {
    style: {
      ...PAD,
      marginTop: 22
    }
  }, /*#__PURE__*/React.createElement(SectionLabel, {
    action: "See all",
    onAction: () => go('shelves')
  }, "Featured shelves"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, D.shelves.slice(0, 2).map(s => /*#__PURE__*/React.createElement(ShelfCard, {
    key: s.id,
    name: s.name,
    count: s.count,
    tone: s.tone,
    books: s.ids.map(D.byId),
    onClick: () => go('shelf', s)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 14
    }
  })));
}
window.MSScreens = Object.assign(window.MSScreens || {}, {
  HomeLibrary,
  ShelvesScreen,
  RecapScreen,
  ProfileScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/moodshelf/screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/moodshelf/shell.jsx
try { (() => {
/* MoodShelf UI-kit shell helpers: status bar, app bar, phone frame,
   tab bar, section labels, star rating. Exported to window.MSKit. */

function StatusBar({
  dark = false
}) {
  const c = dark ? 'var(--text-on-dark)' : 'var(--text-strong)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 44,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 22px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 14,
      color: c
    }
  }, "9:41"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      alignItems: 'center',
      color: c
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "17",
    height: "11",
    viewBox: "0 0 17 11",
    fill: "currentColor"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0",
    y: "6",
    width: "3",
    height: "5",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "4.5",
    y: "4",
    width: "3",
    height: "7",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "9",
    y: "2",
    width: "3",
    height: "9",
    rx: "1"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "13.5",
    y: "0",
    width: "3",
    height: "11",
    rx: "1"
  })), /*#__PURE__*/React.createElement("svg", {
    width: "22",
    height: "11",
    viewBox: "0 0 22 11",
    fill: "none"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "0.5",
    y: "0.5",
    width: "18",
    height: "10",
    rx: "2.5",
    stroke: "currentColor",
    opacity: "0.5"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "14",
    height: "7",
    rx: "1.3",
    fill: "currentColor"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "3.5",
    width: "1.5",
    height: "4",
    rx: "0.75",
    fill: "currentColor",
    opacity: "0.5"
  }))));
}
function AppBar({
  title,
  subtitle,
  left,
  right,
  dark = false,
  big = false
}) {
  const fg = dark ? 'var(--text-on-dark)' : 'var(--text-strong)';
  const sub = dark ? 'var(--text-on-dark-muted)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '6px 18px 12px',
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      display: 'flex',
      justifyContent: 'flex-start'
    }
  }, left), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      textAlign: 'center'
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: big ? 'var(--font-display)' : 'var(--font-sans)',
      fontWeight: big ? 600 : 700,
      fontSize: big ? 24 : 16,
      color: fg,
      lineHeight: 1.1
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      color: sub,
      marginTop: 2
    }
  }, subtitle)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 40,
      display: 'flex',
      justifyContent: 'flex-end'
    }
  }, right));
}
function SectionLabel({
  children,
  action,
  onAction
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      margin: '0 0 12px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 11,
      fontWeight: 600,
      letterSpacing: '0.18em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, children), action && /*#__PURE__*/React.createElement("span", {
    onClick: onAction,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      fontWeight: 600,
      color: 'var(--accent-strong)',
      cursor: 'pointer'
    }
  }, action));
}
function Stars({
  value = 0,
  size = 16,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 2
    }
  }, [1, 2, 3, 4, 5].map(n => /*#__PURE__*/React.createElement("span", {
    key: n,
    onClick: onChange ? () => onChange(n) : undefined,
    style: {
      color: n <= value ? 'var(--candle-500)' : 'var(--border-strong)',
      cursor: onChange ? 'pointer' : 'default',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(window.MSKit.Icon, {
    name: "star",
    size: size,
    fill: n <= value ? 'currentColor' : 'none'
  }))));
}
function TabBar({
  active,
  onChange
}) {
  const tabs = [{
    id: 'home',
    icon: 'book-open',
    label: 'Library'
  }, {
    id: 'shelves',
    icon: 'library',
    label: 'Shelves'
  }, {
    id: 'recap',
    icon: 'sparkles',
    label: 'Recap'
  }, {
    id: 'profile',
    icon: 'user',
    label: 'You'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height: 'var(--h-tabbar)',
      flexShrink: 0,
      display: 'flex',
      alignItems: 'stretch',
      padding: '0 8px 8px',
      background: 'linear-gradient(180deg, rgba(248,241,226,0) 0%, var(--surface-page) 36%)',
      backdropFilter: 'blur(4px)'
    }
  }, tabs.map(t => {
    const on = active === t.id;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => onChange(t.id),
      style: {
        flex: 1,
        border: 'none',
        background: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3,
        color: on ? 'var(--accent-deep)' : 'var(--text-faint)'
      }
    }, /*#__PURE__*/React.createElement(window.MSKit.Icon, {
      name: t.icon,
      size: 22,
      strokeWidth: on ? 2 : 1.6
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-sans)',
        fontSize: 10,
        fontWeight: on ? 700 : 600,
        letterSpacing: '0.02em'
      }
    }, t.label));
  }));
}
function PhoneFrame({
  children,
  theme
}) {
  return /*#__PURE__*/React.createElement("div", {
    "data-theme": theme || undefined,
    style: {
      width: 390,
      height: 844,
      borderRadius: 46,
      padding: 0,
      background: 'var(--surface-page)',
      backgroundImage: 'var(--texture-paper)',
      boxShadow: '0 50px 100px -30px rgba(36,24,10,0.55), 0 0 0 11px #1c140d, 0 0 0 13px #2c2016',
      overflow: 'hidden',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column'
    }
  }, children);
}
window.MSKit = Object.assign(window.MSKit || {}, {
  StatusBar,
  AppBar,
  SectionLabel,
  Stars,
  TabBar,
  PhoneFrame
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/moodshelf/shell.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.ICON_NAMES = __ds_scope.ICON_NAMES;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SegmentedControl = __ds_scope.SegmentedControl;

__ds_ns.AuraOrb = __ds_scope.AuraOrb;

__ds_ns.BookCover = __ds_scope.BookCover;

__ds_ns.EmotionTag = __ds_scope.EmotionTag;

__ds_ns.ShelfCard = __ds_scope.ShelfCard;

})();
