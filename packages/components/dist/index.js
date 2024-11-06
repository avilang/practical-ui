import { isVNode as Po, Comment as $o, Fragment as _r, defineComponent as xe, inject as Ce, getCurrentInstance as yn, watch as Ke, onBeforeUnmount as lr, computed as z, ref as q, onMounted as sr, readonly as Ro, renderSlot as Tr, onActivated as To, onDeactivated as zo, provide as Dt, onBeforeMount as Bn, shallowRef as Oo, watchEffect as dt, h as g, Transition as er, TransitionGroup as ko, toRef as We, mergeProps as wn, nextTick as tn, markRaw as Mn, openBlock as Xe, createBlock as ct, unref as ve, withCtx as At, useAttrs as Mo, useSlots as _o, normalizeClass as Io, createSlots as ki, createCommentVNode as Ho, createVNode as Mi, mergeModels as _n, useModel as Wo, normalizeProps as jo, guardReactiveProps as Lo, useTemplateRef as In, withModifiers as No, createElementBlock as Vo, renderList as qo, resolveDynamicComponent as Go, toValue as Uo, onScopeDispose as Yo } from "vue";
function Xo(t) {
  return t.composedPath()[0] || null;
}
function Hn(t) {
  return typeof t == "string" ? t.endsWith("px") ? Number(t.slice(0, t.length - 2)) : Number(t) : t;
}
function _i(t, r) {
  const n = t.trim().split(/\s+/g), i = {
    top: n[0]
  };
  switch (n.length) {
    case 1:
      i.right = n[0], i.bottom = n[0], i.left = n[0];
      break;
    case 2:
      i.right = n[1], i.left = n[1], i.bottom = n[0];
      break;
    case 3:
      i.right = n[1], i.bottom = n[2], i.left = n[1];
      break;
    case 4:
      i.right = n[1], i.bottom = n[2], i.left = n[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + t + " is not a valid value.");
  }
  return i;
}
const Wn = {
  black: "#000",
  silver: "#C0C0C0",
  gray: "#808080",
  white: "#FFF",
  maroon: "#800000",
  red: "#F00",
  purple: "#800080",
  fuchsia: "#F0F",
  green: "#008000",
  lime: "#0F0",
  olive: "#808000",
  yellow: "#FF0",
  navy: "#000080",
  blue: "#00F",
  teal: "#008080",
  aqua: "#0FF",
  transparent: "#0000"
}, Pt = "^\\s*", $t = "\\s*$", ot = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", lt = "([0-9A-Fa-f])", st = "([0-9A-Fa-f]{2})", Ko = new RegExp(`${Pt}rgb\\s*\\(${ot},${ot},${ot}\\)${$t}`), Zo = new RegExp(`${Pt}rgba\\s*\\(${ot},${ot},${ot},${ot}\\)${$t}`), Jo = new RegExp(`${Pt}#${lt}${lt}${lt}${$t}`), Qo = new RegExp(`${Pt}#${st}${st}${st}${$t}`), el = new RegExp(`${Pt}#${lt}${lt}${lt}${lt}${$t}`), tl = new RegExp(`${Pt}#${st}${st}${st}${st}${$t}`);
function Se(t) {
  return parseInt(t, 16);
}
function mt(t) {
  try {
    let r;
    if (r = Qo.exec(t))
      return [Se(r[1]), Se(r[2]), Se(r[3]), 1];
    if (r = Ko.exec(t))
      return [De(r[1]), De(r[5]), De(r[9]), 1];
    if (r = Zo.exec(t))
      return [
        De(r[1]),
        De(r[5]),
        De(r[9]),
        Yt(r[13])
      ];
    if (r = Jo.exec(t))
      return [
        Se(r[1] + r[1]),
        Se(r[2] + r[2]),
        Se(r[3] + r[3]),
        1
      ];
    if (r = tl.exec(t))
      return [
        Se(r[1]),
        Se(r[2]),
        Se(r[3]),
        Yt(Se(r[4]) / 255)
      ];
    if (r = el.exec(t))
      return [
        Se(r[1] + r[1]),
        Se(r[2] + r[2]),
        Se(r[3] + r[3]),
        Yt(Se(r[4] + r[4]) / 255)
      ];
    if (t in Wn)
      return mt(Wn[t]);
    throw new Error(`[seemly/rgba]: Invalid color value ${t}.`);
  } catch (r) {
    throw r;
  }
}
function rl(t) {
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function rn(t, r, n, i) {
  return `rgba(${De(t)}, ${De(r)}, ${De(n)}, ${rl(i)})`;
}
function Yr(t, r, n, i, a) {
  return De((t * r * (1 - i) + n * i) / a);
}
function Dn(t, r) {
  Array.isArray(t) || (t = mt(t)), Array.isArray(r) || (r = mt(r));
  const n = t[3], i = r[3], a = Yt(n + i - n * i);
  return rn(Yr(t[0], n, r[0], i, a), Yr(t[1], n, r[1], i, a), Yr(t[2], n, r[2], i, a), a);
}
function ut(t, r) {
  const [n, i, a, o = 1] = Array.isArray(t) ? t : mt(t);
  return r.alpha ? rn(n, i, a, r.alpha) : rn(n, i, a, o);
}
function br(t, r) {
  const [n, i, a, o = 1] = Array.isArray(t) ? t : mt(t), { lightness: l = 1, alpha: s = 1 } = r;
  return nl([n * l, i * l, a * l, o * s]);
}
function Yt(t) {
  const r = Math.round(Number(t) * 100) / 100;
  return r > 1 ? 1 : r < 0 ? 0 : r;
}
function De(t) {
  const r = Math.round(Number(t));
  return r > 255 ? 255 : r < 0 ? 0 : r;
}
function nl(t) {
  const [r, n, i] = t;
  return 3 in t ? `rgba(${De(r)}, ${De(n)}, ${De(i)}, ${Yt(t[3])})` : `rgba(${De(r)}, ${De(n)}, ${De(i)}, 1)`;
}
function jn(t = 8) {
  return Math.random().toString(16).slice(2, 2 + t);
}
function ge(t, ...r) {
  if (Array.isArray(t))
    t.forEach((n) => ge(n, ...r));
  else
    return t(...r);
}
function Ln(t) {
  return Object.keys(t);
}
const Nn = /* @__PURE__ */ new Set();
function Ii(t, r) {
  const n = `[naive/${t}]: ${r}`;
  Nn.has(n) || (Nn.add(n), console.error(n));
}
function zr(t, r) {
  console.error(`[naive/${t}]: ${r}`);
}
function Hi(t, r) {
  throw new Error(`[naive/${t}]: ${r}`);
}
function ur(t) {
  return t.some((r) => Po(r) ? !(r.type === $o || r.type === _r && !ur(r.children)) : !0) ? t : null;
}
function Xt(t, r) {
  return t && ur(t()) || r();
}
function il(t, r, n) {
  return t && ur(t(r)) || n(r);
}
function ft(t, r) {
  const n = t && ur(t());
  return r(n || null);
}
function al(t) {
  return !(t && ur(t()));
}
const Vn = xe({
  render() {
    var t, r;
    return (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t);
  }
}), ol = /^(\d|\.)+$/, qn = /(\d|\.)+/;
function Sr(t, {
  c: r = 1,
  offset: n = 0,
  attachPx: i = !0
} = {}) {
  if (typeof t == "number") {
    const a = (t + n) * r;
    return a === 0 ? "0" : `${a}px`;
  } else if (typeof t == "string")
    if (ol.test(t)) {
      const a = (Number(t) + n) * r;
      return i ? a === 0 ? "0" : `${a}px` : `${a}`;
    } else {
      const a = qn.exec(t);
      return a ? t.replace(qn, String((Number(a[0]) + n) * r)) : t;
    }
  return t;
}
function Gn(t) {
  return t.replace(/#|\(|\)|,|\s|\./g, "_");
}
function Un(t) {
  const {
    left: r,
    right: n,
    top: i,
    bottom: a
  } = _i(t);
  return `${i} ${n} ${a} ${r}`;
}
function ll(t) {
  let r = 0;
  for (let n = 0; n < t.length; ++n)
    t[n] === "&" && ++r;
  return r;
}
const Wi = /\s*,(?![^(]*\))\s*/g, sl = /\s+/g;
function ul(t, r) {
  const n = [];
  return r.split(Wi).forEach((i) => {
    let a = ll(i);
    if (a) {
      if (a === 1) {
        t.forEach((l) => {
          n.push(i.replace("&", l));
        });
        return;
      }
    } else {
      t.forEach((l) => {
        n.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (l && l + " ") + i
        );
      });
      return;
    }
    let o = [
      i
    ];
    for (; a--; ) {
      const l = [];
      o.forEach((s) => {
        t.forEach((u) => {
          l.push(s.replace("&", u));
        });
      }), o = l;
    }
    o.forEach((l) => n.push(l));
  }), n;
}
function fl(t, r) {
  const n = [];
  return r.split(Wi).forEach((i) => {
    t.forEach((a) => {
      n.push((a && a + " ") + i);
    });
  }), n;
}
function xl(t) {
  let r = [""];
  return t.forEach((n) => {
    n = n && n.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    n && (n.includes("&") ? r = ul(r, n) : r = fl(r, n));
  }), r.join(", ").replace(sl, " ");
}
function Yn(t) {
  if (!t)
    return;
  const r = t.parentElement;
  r && r.removeChild(t);
}
function Ir(t, r) {
  return (r ?? document.head).querySelector(`style[cssr-id="${t}"]`);
}
function hl(t) {
  const r = document.createElement("style");
  return r.setAttribute("cssr-id", t), r;
}
function Cr(t) {
  return t ? /^\s*@(s|m)/.test(t) : !1;
}
const dl = /[A-Z]/g;
function ji(t) {
  return t.replace(dl, (r) => "-" + r.toLowerCase());
}
function cl(t, r = "  ") {
  return typeof t == "object" && t !== null ? ` {
` + Object.entries(t).map((n) => r + `  ${ji(n[0])}: ${n[1]};`).join(`
`) + `
` + r + "}" : `: ${t};`;
}
function pl(t, r, n) {
  return typeof t == "function" ? t({
    context: r.context,
    props: n
  }) : t;
}
function Xn(t, r, n, i) {
  if (!r)
    return "";
  const a = pl(r, n, i);
  if (!a)
    return "";
  if (typeof a == "string")
    return `${t} {
${a}
}`;
  const o = Object.keys(a);
  if (o.length === 0)
    return n.config.keepEmptyBlock ? t + ` {
}` : "";
  const l = t ? [
    t + " {"
  ] : [];
  return o.forEach((s) => {
    const u = a[s];
    if (s === "raw") {
      l.push(`
` + u + `
`);
      return;
    }
    s = ji(s), u != null && l.push(`  ${s}${cl(u)}`);
  }), t && l.push("}"), l.join(`
`);
}
function nn(t, r, n) {
  t && t.forEach((i) => {
    if (Array.isArray(i))
      nn(i, r, n);
    else if (typeof i == "function") {
      const a = i(r);
      Array.isArray(a) ? nn(a, r, n) : a && n(a);
    } else i && n(i);
  });
}
function Li(t, r, n, i, a) {
  const o = t.$;
  let l = "";
  if (!o || typeof o == "string")
    Cr(o) ? l = o : r.push(o);
  else if (typeof o == "function") {
    const f = o({
      context: i.context,
      props: a
    });
    Cr(f) ? l = f : r.push(f);
  } else if (o.before && o.before(i.context), !o.$ || typeof o.$ == "string")
    Cr(o.$) ? l = o.$ : r.push(o.$);
  else if (o.$) {
    const f = o.$({
      context: i.context,
      props: a
    });
    Cr(f) ? l = f : r.push(f);
  }
  const s = xl(r), u = Xn(s, t.props, i, a);
  l ? n.push(`${l} {`) : u.length && n.push(u), t.children && nn(t.children, {
    context: i.context,
    props: a
  }, (f) => {
    if (typeof f == "string") {
      const x = Xn(s, { raw: f }, i, a);
      n.push(x);
    } else
      Li(f, r, n, i, a);
  }), r.pop(), l && n.push("}"), o && o.after && o.after(i.context);
}
function vl(t, r, n) {
  const i = [];
  return Li(t, [], i, r, n), i.join(`

`);
}
function tr(t) {
  for (var r = 0, n, i = 0, a = t.length; a >= 4; ++i, a -= 4)
    n = t.charCodeAt(i) & 255 | (t.charCodeAt(++i) & 255) << 8 | (t.charCodeAt(++i) & 255) << 16 | (t.charCodeAt(++i) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, r = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      r ^= (t.charCodeAt(i + 2) & 255) << 16;
    case 2:
      r ^= (t.charCodeAt(i + 1) & 255) << 8;
    case 1:
      r ^= t.charCodeAt(i) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function ml(t, r, n, i) {
  const { els: a } = r;
  if (n === void 0)
    a.forEach(Yn), r.els = [];
  else {
    const o = Ir(n, i);
    o && a.includes(o) && (Yn(o), r.els = a.filter((l) => l !== o));
  }
}
function Kn(t, r) {
  t.push(r);
}
function gl(t, r, n, i, a, o, l, s, u) {
  let f;
  if (n === void 0 && (f = r.render(i), n = tr(f)), u) {
    u.adapter(n, f ?? r.render(i));
    return;
  }
  s === void 0 && (s = document.head);
  const x = Ir(n, s);
  if (x !== null && !o)
    return x;
  const d = x ?? hl(n);
  if (f === void 0 && (f = r.render(i)), d.textContent = f, x !== null)
    return x;
  if (l) {
    const b = s.querySelector(`meta[name="${l}"]`);
    if (b)
      return s.insertBefore(d, b), Kn(r.els, d), d;
  }
  return a ? s.insertBefore(d, s.querySelector("style, link")) : s.appendChild(d), Kn(r.els, d), d;
}
function bl(t) {
  return vl(this, this.instance, t);
}
function Cl(t = {}) {
  const { id: r, ssr: n, props: i, head: a = !1, force: o = !1, anchorMetaName: l, parent: s } = t;
  return gl(this.instance, this, r, i, a, o, l, s, n);
}
function yl(t = {}) {
  const { id: r, parent: n } = t;
  ml(this.instance, this, r, n);
}
const yr = function(t, r, n, i) {
  return {
    instance: t,
    $: r,
    props: n,
    children: i,
    els: [],
    render: bl,
    mount: Cl,
    unmount: yl
  };
}, Bl = function(t, r, n, i) {
  return Array.isArray(r) ? yr(t, { $: null }, null, r) : Array.isArray(n) ? yr(t, r, null, n) : Array.isArray(i) ? yr(t, r, n, i) : yr(t, r, n, null);
};
function wl(t = {}) {
  const r = {
    c: (...n) => Bl(r, ...n),
    use: (n, ...i) => n.install(r, ...i),
    find: Ir,
    context: {},
    config: t
  };
  return r;
}
function Dl(t, r) {
  if (t === void 0)
    return !1;
  if (r) {
    const { context: { ids: n } } = r;
    return n.has(t);
  }
  return Ir(t) !== null;
}
function Al(t) {
  let r = ".", n = "__", i = "--", a;
  if (t) {
    let c = t.blockPrefix;
    c && (r = c), c = t.elementPrefix, c && (n = c), c = t.modifierPrefix, c && (i = c);
  }
  const o = {
    install(c) {
      a = c.c;
      const v = c.context;
      v.bem = {}, v.bem.b = null, v.bem.els = null;
    }
  };
  function l(c) {
    let v, C;
    return {
      before(m) {
        v = m.bem.b, C = m.bem.els, m.bem.els = null;
      },
      after(m) {
        m.bem.b = v, m.bem.els = C;
      },
      $({ context: m, props: P }) {
        return c = typeof c == "string" ? c : c({ context: m, props: P }), m.bem.b = c, `${(P == null ? void 0 : P.bPrefix) || r}${m.bem.b}`;
      }
    };
  }
  function s(c) {
    let v;
    return {
      before(C) {
        v = C.bem.els;
      },
      after(C) {
        C.bem.els = v;
      },
      $({ context: C, props: m }) {
        return c = typeof c == "string" ? c : c({ context: C, props: m }), C.bem.els = c.split(",").map((P) => P.trim()), C.bem.els.map((P) => `${(m == null ? void 0 : m.bPrefix) || r}${C.bem.b}${n}${P}`).join(", ");
      }
    };
  }
  function u(c) {
    return {
      $({ context: v, props: C }) {
        c = typeof c == "string" ? c : c({ context: v, props: C });
        const m = c.split(",").map((B) => B.trim());
        function P(B) {
          return m.map((O) => `&${(C == null ? void 0 : C.bPrefix) || r}${v.bem.b}${B !== void 0 ? `${n}${B}` : ""}${i}${O}`).join(", ");
        }
        const A = v.bem.els;
        if (A !== null) {
          if (process.env.NODE_ENV !== "production" && A.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${c}) is invalid, using modifier inside multiple elements is not allowed`);
          return P(A[0]);
        } else
          return P();
      }
    };
  }
  function f(c) {
    return {
      $({ context: v, props: C }) {
        c = typeof c == "string" ? c : c({ context: v, props: C });
        const m = v.bem.els;
        if (process.env.NODE_ENV !== "production" && m !== null && m.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${c}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(C == null ? void 0 : C.bPrefix) || r}${v.bem.b}${m !== null && m.length > 0 ? `${n}${m[0]}` : ""}${i}${c})`;
      }
    };
  }
  return Object.assign(o, {
    cB: (...c) => a(l(c[0]), c[1], c[2]),
    cE: (...c) => a(s(c[0]), c[1], c[2]),
    cM: (...c) => a(u(c[0]), c[1], c[2]),
    cNotM: (...c) => a(f(c[0]), c[1], c[2])
  }), o;
}
const Fl = "n", El = `.${Fl}-`, Sl = "__", Pl = "--", Ni = wl(), Vi = Al({
  blockPrefix: El,
  elementPrefix: Sl,
  modifierPrefix: Pl
});
Ni.use(Vi);
const {
  c: k,
  find: Gd
} = Ni, {
  cB: j,
  cE: T,
  cM: K,
  cNotM: at
} = Vi;
function U(t, r) {
  return t + (r === "default" ? "" : r.replace(/^[a-z]/, (n) => n.toUpperCase()));
}
const Hr = typeof document < "u" && typeof window < "u";
function $l(t, r, n) {
  var i;
  const a = Ce(t, null);
  if (a === null) return;
  const o = (i = yn()) === null || i === void 0 ? void 0 : i.proxy;
  Ke(n, l), l(n.value), lr(() => {
    l(void 0, n.value);
  });
  function l(f, x) {
    if (!a) return;
    const d = a[r];
    x !== void 0 && s(d, x), f !== void 0 && u(d, f);
  }
  function s(f, x) {
    f[x] || (f[x] = []), f[x].splice(f[x].findIndex((d) => d === o), 1);
  }
  function u(f, x) {
    f[x] || (f[x] = []), ~f[x].findIndex((d) => d === o) || f[x].push(o);
  }
}
function rr(t) {
  const r = z(t), n = q(r.value);
  return Ke(r, (i) => {
    n.value = i;
  }), typeof t == "function" ? n : {
    __v_isRef: !0,
    get value() {
      return n.value;
    },
    set value(i) {
      t.set(i);
    }
  };
}
function Pr(t) {
  return t.composedPath()[0];
}
const Rl = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Tl(t, r, n) {
  if (t === "mousemoveoutside") {
    const i = (a) => {
      r.contains(Pr(a)) || n(a);
    };
    return {
      mousemove: i,
      touchstart: i
    };
  } else if (t === "clickoutside") {
    let i = !1;
    const a = (l) => {
      i = !r.contains(Pr(l));
    }, o = (l) => {
      i && (r.contains(Pr(l)) || n(l));
    };
    return {
      mousedown: a,
      mouseup: o,
      touchstart: a,
      touchend: o
    };
  }
  return console.error(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `[evtd/create-trap-handler]: name \`${t}\` is invalid. This could be a bug of evtd.`
  ), {};
}
function qi(t, r, n) {
  const i = Rl[t];
  let a = i.get(r);
  a === void 0 && i.set(r, a = /* @__PURE__ */ new WeakMap());
  let o = a.get(n);
  return o === void 0 && a.set(n, o = Tl(t, r, n)), o;
}
function zl(t, r, n, i) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const a = qi(t, r, n);
    return Object.keys(a).forEach((o) => {
      xt(o, document, a[o], i);
    }), !0;
  }
  return !1;
}
function Ol(t, r, n, i) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const a = qi(t, r, n);
    return Object.keys(a).forEach((o) => {
      Ne(o, document, a[o], i);
    }), !0;
  }
  return !1;
}
function kl() {
  if (typeof window > "u")
    return {
      on: () => {
      },
      off: () => {
      }
    };
  const t = /* @__PURE__ */ new WeakMap(), r = /* @__PURE__ */ new WeakMap();
  function n() {
    t.set(this, !0);
  }
  function i() {
    t.set(this, !0), r.set(this, !0);
  }
  function a(p, w, $) {
    const W = p[w];
    return p[w] = function() {
      return $.apply(p, arguments), W.apply(p, arguments);
    }, p;
  }
  function o(p, w) {
    p[w] = Event.prototype[w];
  }
  const l = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function u() {
    var p;
    return (p = l.get(this)) !== null && p !== void 0 ? p : null;
  }
  function f(p, w) {
    s !== void 0 && Object.defineProperty(p, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: w ?? s.get
    });
  }
  const x = {
    bubble: {},
    capture: {}
  }, d = {};
  function b() {
    const p = function(w) {
      const { type: $, eventPhase: W, bubbles: G } = w, I = Pr(w);
      if (W === 2)
        return;
      const e = W === 1 ? "capture" : "bubble";
      let F = I;
      const M = [];
      for (; F === null && (F = window), M.push(F), F !== window; )
        F = F.parentNode || null;
      const R = x.capture[$], S = x.bubble[$];
      if (a(w, "stopPropagation", n), a(w, "stopImmediatePropagation", i), f(w, u), e === "capture") {
        if (R === void 0)
          return;
        for (let L = M.length - 1; L >= 0 && !t.has(w); --L) {
          const le = M[L], te = R.get(le);
          if (te !== void 0) {
            l.set(w, le);
            for (const he of te) {
              if (r.has(w))
                break;
              he(w);
            }
          }
          if (L === 0 && !G && S !== void 0) {
            const he = S.get(le);
            if (he !== void 0)
              for (const ie of he) {
                if (r.has(w))
                  break;
                ie(w);
              }
          }
        }
      } else if (e === "bubble") {
        if (S === void 0)
          return;
        for (let L = 0; L < M.length && !t.has(w); ++L) {
          const le = M[L], te = S.get(le);
          if (te !== void 0) {
            l.set(w, le);
            for (const he of te) {
              if (r.has(w))
                break;
              he(w);
            }
          }
        }
      }
      o(w, "stopPropagation"), o(w, "stopImmediatePropagation"), f(w);
    };
    return p.displayName = "evtdUnifiedHandler", p;
  }
  function D() {
    const p = function(w) {
      const { type: $, eventPhase: W } = w;
      if (W !== 2)
        return;
      const G = d[$];
      G !== void 0 && G.forEach((I) => I(w));
    };
    return p.displayName = "evtdUnifiedWindowEventHandler", p;
  }
  const c = b(), v = D();
  function C(p, w) {
    const $ = x[p];
    return $[w] === void 0 && ($[w] = /* @__PURE__ */ new Map(), window.addEventListener(w, c, p === "capture")), $[w];
  }
  function m(p) {
    return d[p] === void 0 && (d[p] = /* @__PURE__ */ new Set(), window.addEventListener(p, v)), d[p];
  }
  function P(p, w) {
    let $ = p.get(w);
    return $ === void 0 && p.set(w, $ = /* @__PURE__ */ new Set()), $;
  }
  function A(p, w, $, W) {
    const G = x[w][$];
    if (G !== void 0) {
      const I = G.get(p);
      if (I !== void 0 && I.has(W))
        return !0;
    }
    return !1;
  }
  function B(p, w) {
    const $ = d[p];
    return !!($ !== void 0 && $.has(w));
  }
  function O(p, w, $, W) {
    let G;
    if (typeof W == "object" && W.once === !0 ? G = (R) => {
      _(p, w, G, W), $(R);
    } : G = $, zl(p, w, G, W))
      return;
    const e = W === !0 || typeof W == "object" && W.capture === !0 ? "capture" : "bubble", F = C(e, p), M = P(F, w);
    if (M.has(G) || M.add(G), w === window) {
      const R = m(p);
      R.has(G) || R.add(G);
    }
  }
  function _(p, w, $, W) {
    if (Ol(p, w, $, W))
      return;
    const I = W === !0 || typeof W == "object" && W.capture === !0, e = I ? "capture" : "bubble", F = C(e, p), M = P(F, w);
    if (w === window && !A(w, I ? "bubble" : "capture", p, $) && B(p, $)) {
      const S = d[p];
      S.delete($), S.size === 0 && (window.removeEventListener(p, v), d[p] = void 0);
    }
    M.has($) && M.delete($), M.size === 0 && F.delete(w), F.size === 0 && (window.removeEventListener(p, c, e === "capture"), x[e][p] = void 0);
  }
  return {
    on: O,
    off: _
  };
}
const { on: xt, off: Ne } = kl();
function Ml(t, r) {
  return Ke(t, (n) => {
    n !== void 0 && (r.value = n);
  }), z(() => t.value === void 0 ? r.value : t.value);
}
function _l() {
  const t = q(!1);
  return sr(() => {
    t.value = !0;
  }), Ro(t);
}
const Il = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Hl() {
  return Il;
}
const Wl = "@css-render/vue3-ssr";
function jl(t, r) {
  return `<style cssr-id="${t}">
${r}
</style>`;
}
function Ll(t, r, n) {
  const { styles: i, ids: a } = n;
  a.has(t) || i !== null && (a.add(t), i.push(jl(t, r)));
}
const Nl = typeof document < "u";
function Wr() {
  if (Nl)
    return;
  const t = Ce(Wl, null);
  if (t !== null)
    return {
      adapter: (r, n) => Ll(r, n, t),
      context: t
    };
}
function Zn(t, r) {
  console.error(`[vueuc/${t}]: ${r}`);
}
var pt = [], Vl = function() {
  return pt.some(function(t) {
    return t.activeTargets.length > 0;
  });
}, ql = function() {
  return pt.some(function(t) {
    return t.skippedTargets.length > 0;
  });
}, Jn = "ResizeObserver loop completed with undelivered notifications.", Gl = function() {
  var t;
  typeof ErrorEvent == "function" ? t = new ErrorEvent("error", {
    message: Jn
  }) : (t = document.createEvent("Event"), t.initEvent("error", !1, !1), t.message = Jn), window.dispatchEvent(t);
}, nr;
(function(t) {
  t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(nr || (nr = {}));
var vt = function(t) {
  return Object.freeze(t);
}, Ul = /* @__PURE__ */ function() {
  function t(r, n) {
    this.inlineSize = r, this.blockSize = n, vt(this);
  }
  return t;
}(), Gi = function() {
  function t(r, n, i, a) {
    return this.x = r, this.y = n, this.width = i, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, vt(this);
  }
  return t.prototype.toJSON = function() {
    var r = this, n = r.x, i = r.y, a = r.top, o = r.right, l = r.bottom, s = r.left, u = r.width, f = r.height;
    return { x: n, y: i, top: a, right: o, bottom: l, left: s, width: u, height: f };
  }, t.fromRect = function(r) {
    return new t(r.x, r.y, r.width, r.height);
  }, t;
}(), An = function(t) {
  return t instanceof SVGElement && "getBBox" in t;
}, Ui = function(t) {
  if (An(t)) {
    var r = t.getBBox(), n = r.width, i = r.height;
    return !n && !i;
  }
  var a = t, o = a.offsetWidth, l = a.offsetHeight;
  return !(o || l || t.getClientRects().length);
}, Qn = function(t) {
  var r;
  if (t instanceof Element)
    return !0;
  var n = (r = t == null ? void 0 : t.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView;
  return !!(n && t instanceof n.Element);
}, Yl = function(t) {
  switch (t.tagName) {
    case "INPUT":
      if (t.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, Kt = typeof window < "u" ? window : {}, Br = /* @__PURE__ */ new WeakMap(), ei = /auto|scroll/, Xl = /^tb|vertical/, Kl = /msie|trident/i.test(Kt.navigator && Kt.navigator.userAgent), _e = function(t) {
  return parseFloat(t || "0");
}, Bt = function(t, r, n) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0), n === void 0 && (n = !1), new Ul((n ? r : t) || 0, (n ? t : r) || 0);
}, ti = vt({
  devicePixelContentBoxSize: Bt(),
  borderBoxSize: Bt(),
  contentBoxSize: Bt(),
  contentRect: new Gi(0, 0, 0, 0)
}), Yi = function(t, r) {
  if (r === void 0 && (r = !1), Br.has(t) && !r)
    return Br.get(t);
  if (Ui(t))
    return Br.set(t, ti), ti;
  var n = getComputedStyle(t), i = An(t) && t.ownerSVGElement && t.getBBox(), a = !Kl && n.boxSizing === "border-box", o = Xl.test(n.writingMode || ""), l = !i && ei.test(n.overflowY || ""), s = !i && ei.test(n.overflowX || ""), u = i ? 0 : _e(n.paddingTop), f = i ? 0 : _e(n.paddingRight), x = i ? 0 : _e(n.paddingBottom), d = i ? 0 : _e(n.paddingLeft), b = i ? 0 : _e(n.borderTopWidth), D = i ? 0 : _e(n.borderRightWidth), c = i ? 0 : _e(n.borderBottomWidth), v = i ? 0 : _e(n.borderLeftWidth), C = d + f, m = u + x, P = v + D, A = b + c, B = s ? t.offsetHeight - A - t.clientHeight : 0, O = l ? t.offsetWidth - P - t.clientWidth : 0, _ = a ? C + P : 0, p = a ? m + A : 0, w = i ? i.width : _e(n.width) - _ - O, $ = i ? i.height : _e(n.height) - p - B, W = w + C + O + P, G = $ + m + B + A, I = vt({
    devicePixelContentBoxSize: Bt(Math.round(w * devicePixelRatio), Math.round($ * devicePixelRatio), o),
    borderBoxSize: Bt(W, G, o),
    contentBoxSize: Bt(w, $, o),
    contentRect: new Gi(d, u, w, $)
  });
  return Br.set(t, I), I;
}, Xi = function(t, r, n) {
  var i = Yi(t, n), a = i.borderBoxSize, o = i.contentBoxSize, l = i.devicePixelContentBoxSize;
  switch (r) {
    case nr.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case nr.BORDER_BOX:
      return a;
    default:
      return o;
  }
}, Zl = /* @__PURE__ */ function() {
  function t(r) {
    var n = Yi(r);
    this.target = r, this.contentRect = n.contentRect, this.borderBoxSize = vt([n.borderBoxSize]), this.contentBoxSize = vt([n.contentBoxSize]), this.devicePixelContentBoxSize = vt([n.devicePixelContentBoxSize]);
  }
  return t;
}(), Ki = function(t) {
  if (Ui(t))
    return 1 / 0;
  for (var r = 0, n = t.parentNode; n; )
    r += 1, n = n.parentNode;
  return r;
}, Jl = function() {
  var t = 1 / 0, r = [];
  pt.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(f) {
        var x = new Zl(f.target), d = Ki(f.target);
        s.push(x), f.lastReportedSize = Xi(f.target, f.observedBox), d < t && (t = d);
      }), r.push(function() {
        l.callback.call(l.observer, s, l.observer);
      }), l.activeTargets.splice(0, l.activeTargets.length);
    }
  });
  for (var n = 0, i = r; n < i.length; n++) {
    var a = i[n];
    a();
  }
  return t;
}, ri = function(t) {
  pt.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(a) {
      a.isActive() && (Ki(a.target) > t ? n.activeTargets.push(a) : n.skippedTargets.push(a));
    });
  });
}, Ql = function() {
  var t = 0;
  for (ri(t); Vl(); )
    t = Jl(), ri(t);
  return ql() && Gl(), t > 0;
}, Xr, Zi = [], es = function() {
  return Zi.splice(0).forEach(function(t) {
    return t();
  });
}, ts = function(t) {
  if (!Xr) {
    var r = 0, n = document.createTextNode(""), i = { characterData: !0 };
    new MutationObserver(function() {
      return es();
    }).observe(n, i), Xr = function() {
      n.textContent = "".concat(r ? r-- : r++);
    };
  }
  Zi.push(t), Xr();
}, rs = function(t) {
  ts(function() {
    requestAnimationFrame(t);
  });
}, $r = 0, ns = function() {
  return !!$r;
}, is = 250, as = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, ni = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], ii = function(t) {
  return t === void 0 && (t = 0), Date.now() + t;
}, Kr = !1, os = function() {
  function t() {
    var r = this;
    this.stopped = !0, this.listener = function() {
      return r.schedule();
    };
  }
  return t.prototype.run = function(r) {
    var n = this;
    if (r === void 0 && (r = is), !Kr) {
      Kr = !0;
      var i = ii(r);
      rs(function() {
        var a = !1;
        try {
          a = Ql();
        } finally {
          if (Kr = !1, r = i - ii(), !ns())
            return;
          a ? n.run(1e3) : r > 0 ? n.run(r) : n.start();
        }
      });
    }
  }, t.prototype.schedule = function() {
    this.stop(), this.run();
  }, t.prototype.observe = function() {
    var r = this, n = function() {
      return r.observer && r.observer.observe(document.body, as);
    };
    document.body ? n() : Kt.addEventListener("DOMContentLoaded", n);
  }, t.prototype.start = function() {
    var r = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), ni.forEach(function(n) {
      return Kt.addEventListener(n, r.listener, !0);
    }));
  }, t.prototype.stop = function() {
    var r = this;
    this.stopped || (this.observer && this.observer.disconnect(), ni.forEach(function(n) {
      return Kt.removeEventListener(n, r.listener, !0);
    }), this.stopped = !0);
  }, t;
}(), an = new os(), ai = function(t) {
  !$r && t > 0 && an.start(), $r += t, !$r && an.stop();
}, ls = function(t) {
  return !An(t) && !Yl(t) && getComputedStyle(t).display === "inline";
}, ss = function() {
  function t(r, n) {
    this.target = r, this.observedBox = n || nr.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return t.prototype.isActive = function() {
    var r = Xi(this.target, this.observedBox, !0);
    return ls(this.target) && (this.lastReportedSize = r), this.lastReportedSize.inlineSize !== r.inlineSize || this.lastReportedSize.blockSize !== r.blockSize;
  }, t;
}(), us = /* @__PURE__ */ function() {
  function t(r, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = r, this.callback = n;
  }
  return t;
}(), wr = /* @__PURE__ */ new WeakMap(), oi = function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n].target === r)
      return n;
  return -1;
}, Dr = function() {
  function t() {
  }
  return t.connect = function(r, n) {
    var i = new us(r, n);
    wr.set(r, i);
  }, t.observe = function(r, n, i) {
    var a = wr.get(r), o = a.observationTargets.length === 0;
    oi(a.observationTargets, n) < 0 && (o && pt.push(a), a.observationTargets.push(new ss(n, i && i.box)), ai(1), an.schedule());
  }, t.unobserve = function(r, n) {
    var i = wr.get(r), a = oi(i.observationTargets, n), o = i.observationTargets.length === 1;
    a >= 0 && (o && pt.splice(pt.indexOf(i), 1), i.observationTargets.splice(a, 1), ai(-1));
  }, t.disconnect = function(r) {
    var n = this, i = wr.get(r);
    i.observationTargets.slice().forEach(function(a) {
      return n.unobserve(r, a.target);
    }), i.activeTargets.splice(0, i.activeTargets.length);
  }, t;
}(), fs = function() {
  function t(r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof r != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Dr.connect(this, r);
  }
  return t.prototype.observe = function(r, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Qn(r))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Dr.observe(this, r, n);
  }, t.prototype.unobserve = function(r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Qn(r))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Dr.unobserve(this, r);
  }, t.prototype.disconnect = function() {
    Dr.disconnect(this);
  }, t.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, t;
}();
class xs {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || fs)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(r) {
    for (const n of r) {
      const i = this.elHandlersMap.get(n.target);
      i !== void 0 && i(n);
    }
  }
  registerHandler(r, n) {
    this.elHandlersMap.set(r, n), this.observer.observe(r);
  }
  unregisterHandler(r) {
    this.elHandlersMap.has(r) && (this.elHandlersMap.delete(r), this.observer.unobserve(r));
  }
}
const li = new xs(), on = xe({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(t) {
    let r = !1;
    const n = yn().proxy;
    function i(a) {
      const { onResize: o } = t;
      o !== void 0 && o(a);
    }
    sr(() => {
      const a = n.$el;
      if (a === void 0) {
        Zn("resize-observer", "$el does not exist.");
        return;
      }
      if (a.nextElementSibling !== a.nextSibling && a.nodeType === 3 && a.nodeValue !== "") {
        Zn("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      a.nextElementSibling !== null && (li.registerHandler(a.nextElementSibling, i), r = !0);
    }), lr(() => {
      r && li.unregisterHandler(n.$el.nextElementSibling);
    });
  },
  render() {
    return Tr(this.$slots, "default");
  }
});
function hs(t) {
  const r = {
    isDeactivated: !1
  };
  let n = !1;
  return To(() => {
    if (r.isDeactivated = !1, !n) {
      n = !0;
      return;
    }
    t();
  }), zo(() => {
    r.isDeactivated = !0, n || (n = !0);
  }), r;
}
const ln = "n-form-item";
function Ji(t, {
  defaultSize: r = "medium",
  mergedSize: n,
  mergedDisabled: i
} = {}) {
  const a = Ce(ln, null);
  Dt(ln, null);
  const o = z(n ? () => n(a) : () => {
    const {
      size: u
    } = t;
    if (u) return u;
    if (a) {
      const {
        mergedSize: f
      } = a;
      if (f.value !== void 0)
        return f.value;
    }
    return r;
  }), l = z(i ? () => i(a) : () => {
    const {
      disabled: u
    } = t;
    return u !== void 0 ? u : a ? a.disabled.value : !1;
  }), s = z(() => {
    const {
      status: u
    } = t;
    return u || (a == null ? void 0 : a.mergedValidationStatus.value);
  });
  return lr(() => {
    a && a.restoreValidation();
  }), {
    mergedSizeRef: o,
    mergedDisabledRef: l,
    mergedStatusRef: s,
    nTriggerFormBlur() {
      a && a.handleContentBlur();
    },
    nTriggerFormChange() {
      a && a.handleContentChange();
    },
    nTriggerFormFocus() {
      a && a.handleContentFocus();
    },
    nTriggerFormInput() {
      a && a.handleContentInput();
    }
  };
}
var Qi = typeof global == "object" && global && global.Object === Object && global, ds = typeof self == "object" && self && self.Object === Object && self, Rt = Qi || ds || Function("return this")(), Ft = Rt.Symbol, ea = Object.prototype, cs = ea.hasOwnProperty, ps = ea.toString, Vt = Ft ? Ft.toStringTag : void 0;
function vs(t) {
  var r = cs.call(t, Vt), n = t[Vt];
  try {
    t[Vt] = void 0;
    var i = !0;
  } catch {
  }
  var a = ps.call(t);
  return i && (r ? t[Vt] = n : delete t[Vt]), a;
}
var ms = Object.prototype, gs = ms.toString;
function bs(t) {
  return gs.call(t);
}
var Cs = "[object Null]", ys = "[object Undefined]", si = Ft ? Ft.toStringTag : void 0;
function fr(t) {
  return t == null ? t === void 0 ? ys : Cs : si && si in Object(t) ? vs(t) : bs(t);
}
function Tt(t) {
  return t != null && typeof t == "object";
}
var Bs = "[object Symbol]";
function Fn(t) {
  return typeof t == "symbol" || Tt(t) && fr(t) == Bs;
}
function ws(t, r) {
  for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
    a[n] = r(t[n], n, t);
  return a;
}
var Et = Array.isArray, Ds = 1 / 0, ui = Ft ? Ft.prototype : void 0, fi = ui ? ui.toString : void 0;
function ta(t) {
  if (typeof t == "string")
    return t;
  if (Et(t))
    return ws(t, ta) + "";
  if (Fn(t))
    return fi ? fi.call(t) : "";
  var r = t + "";
  return r == "0" && 1 / t == -Ds ? "-0" : r;
}
function bt(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
function ra(t) {
  return t;
}
var As = "[object AsyncFunction]", Fs = "[object Function]", Es = "[object GeneratorFunction]", Ss = "[object Proxy]";
function En(t) {
  if (!bt(t))
    return !1;
  var r = fr(t);
  return r == Fs || r == Es || r == As || r == Ss;
}
var Zr = Rt["__core-js_shared__"], xi = function() {
  var t = /[^.]+$/.exec(Zr && Zr.keys && Zr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Ps(t) {
  return !!xi && xi in t;
}
var $s = Function.prototype, Rs = $s.toString;
function Ts(t) {
  if (t != null) {
    try {
      return Rs.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var zs = /[\\^$.*+?()[\]{}|]/g, Os = /^\[object .+?Constructor\]$/, ks = Function.prototype, Ms = Object.prototype, _s = ks.toString, Is = Ms.hasOwnProperty, Hs = RegExp(
  "^" + _s.call(Is).replace(zs, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ws(t) {
  if (!bt(t) || Ps(t))
    return !1;
  var r = En(t) ? Hs : Os;
  return r.test(Ts(t));
}
function js(t, r) {
  return t == null ? void 0 : t[r];
}
function Sn(t, r) {
  var n = js(t, r);
  return Ws(n) ? n : void 0;
}
var hi = Object.create, Ls = /* @__PURE__ */ function() {
  function t() {
  }
  return function(r) {
    if (!bt(r))
      return {};
    if (hi)
      return hi(r);
    t.prototype = r;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
function Ns(t, r, n) {
  switch (n.length) {
    case 0:
      return t.call(r);
    case 1:
      return t.call(r, n[0]);
    case 2:
      return t.call(r, n[0], n[1]);
    case 3:
      return t.call(r, n[0], n[1], n[2]);
  }
  return t.apply(r, n);
}
function Vs(t, r) {
  var n = -1, i = t.length;
  for (r || (r = Array(i)); ++n < i; )
    r[n] = t[n];
  return r;
}
var qs = 800, Gs = 16, Us = Date.now;
function Ys(t) {
  var r = 0, n = 0;
  return function() {
    var i = Us(), a = Gs - (i - n);
    if (n = i, a > 0) {
      if (++r >= qs)
        return arguments[0];
    } else
      r = 0;
    return t.apply(void 0, arguments);
  };
}
function Xs(t) {
  return function() {
    return t;
  };
}
var Or = function() {
  try {
    var t = Sn(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Ks = Or ? function(t, r) {
  return Or(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Xs(r),
    writable: !0
  });
} : ra, Zs = Ys(Ks), Js = 9007199254740991, Qs = /^(?:0|[1-9]\d*)$/;
function na(t, r) {
  var n = typeof t;
  return r = r ?? Js, !!r && (n == "number" || n != "symbol" && Qs.test(t)) && t > -1 && t % 1 == 0 && t < r;
}
function Pn(t, r, n) {
  r == "__proto__" && Or ? Or(t, r, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[r] = n;
}
function jr(t, r) {
  return t === r || t !== t && r !== r;
}
var eu = Object.prototype, tu = eu.hasOwnProperty;
function ru(t, r, n) {
  var i = t[r];
  (!(tu.call(t, r) && jr(i, n)) || n === void 0 && !(r in t)) && Pn(t, r, n);
}
function nu(t, r, n, i) {
  var a = !n;
  n || (n = {});
  for (var o = -1, l = r.length; ++o < l; ) {
    var s = r[o], u = void 0;
    u === void 0 && (u = t[s]), a ? Pn(n, s, u) : ru(n, s, u);
  }
  return n;
}
var di = Math.max;
function iu(t, r, n) {
  return r = di(r === void 0 ? t.length - 1 : r, 0), function() {
    for (var i = arguments, a = -1, o = di(i.length - r, 0), l = Array(o); ++a < o; )
      l[a] = i[r + a];
    a = -1;
    for (var s = Array(r + 1); ++a < r; )
      s[a] = i[a];
    return s[r] = n(l), Ns(t, this, s);
  };
}
function au(t, r) {
  return Zs(iu(t, r, ra), t + "");
}
var ou = 9007199254740991;
function ia(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= ou;
}
function $n(t) {
  return t != null && ia(t.length) && !En(t);
}
function lu(t, r, n) {
  if (!bt(n))
    return !1;
  var i = typeof r;
  return (i == "number" ? $n(n) && na(r, n.length) : i == "string" && r in n) ? jr(n[r], t) : !1;
}
function su(t) {
  return au(function(r, n) {
    var i = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, l = a > 2 ? n[2] : void 0;
    for (o = t.length > 3 && typeof o == "function" ? (a--, o) : void 0, l && lu(n[0], n[1], l) && (o = a < 3 ? void 0 : o, a = 1), r = Object(r); ++i < a; ) {
      var s = n[i];
      s && t(r, s, i, o);
    }
    return r;
  });
}
var uu = Object.prototype;
function aa(t) {
  var r = t && t.constructor, n = typeof r == "function" && r.prototype || uu;
  return t === n;
}
function fu(t, r) {
  for (var n = -1, i = Array(t); ++n < t; )
    i[n] = r(n);
  return i;
}
var xu = "[object Arguments]";
function ci(t) {
  return Tt(t) && fr(t) == xu;
}
var oa = Object.prototype, hu = oa.hasOwnProperty, du = oa.propertyIsEnumerable, sn = ci(/* @__PURE__ */ function() {
  return arguments;
}()) ? ci : function(t) {
  return Tt(t) && hu.call(t, "callee") && !du.call(t, "callee");
};
function cu() {
  return !1;
}
var la = typeof exports == "object" && exports && !exports.nodeType && exports, pi = la && typeof module == "object" && module && !module.nodeType && module, pu = pi && pi.exports === la, vi = pu ? Rt.Buffer : void 0, vu = vi ? vi.isBuffer : void 0, sa = vu || cu, mu = "[object Arguments]", gu = "[object Array]", bu = "[object Boolean]", Cu = "[object Date]", yu = "[object Error]", Bu = "[object Function]", wu = "[object Map]", Du = "[object Number]", Au = "[object Object]", Fu = "[object RegExp]", Eu = "[object Set]", Su = "[object String]", Pu = "[object WeakMap]", $u = "[object ArrayBuffer]", Ru = "[object DataView]", Tu = "[object Float32Array]", zu = "[object Float64Array]", Ou = "[object Int8Array]", ku = "[object Int16Array]", Mu = "[object Int32Array]", _u = "[object Uint8Array]", Iu = "[object Uint8ClampedArray]", Hu = "[object Uint16Array]", Wu = "[object Uint32Array]", fe = {};
fe[Tu] = fe[zu] = fe[Ou] = fe[ku] = fe[Mu] = fe[_u] = fe[Iu] = fe[Hu] = fe[Wu] = !0;
fe[mu] = fe[gu] = fe[$u] = fe[bu] = fe[Ru] = fe[Cu] = fe[yu] = fe[Bu] = fe[wu] = fe[Du] = fe[Au] = fe[Fu] = fe[Eu] = fe[Su] = fe[Pu] = !1;
function ju(t) {
  return Tt(t) && ia(t.length) && !!fe[fr(t)];
}
function Lu(t) {
  return function(r) {
    return t(r);
  };
}
var ua = typeof exports == "object" && exports && !exports.nodeType && exports, Zt = ua && typeof module == "object" && module && !module.nodeType && module, Nu = Zt && Zt.exports === ua, Jr = Nu && Qi.process, mi = function() {
  try {
    var t = Zt && Zt.require && Zt.require("util").types;
    return t || Jr && Jr.binding && Jr.binding("util");
  } catch {
  }
}(), gi = mi && mi.isTypedArray, fa = gi ? Lu(gi) : ju;
function Vu(t, r) {
  var n = Et(t), i = !n && sn(t), a = !n && !i && sa(t), o = !n && !i && !a && fa(t), l = n || i || a || o, s = l ? fu(t.length, String) : [], u = s.length;
  for (var f in t)
    l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    na(f, u)) || s.push(f);
  return s;
}
function qu(t, r) {
  return function(n) {
    return t(r(n));
  };
}
function Gu(t) {
  var r = [];
  if (t != null)
    for (var n in Object(t))
      r.push(n);
  return r;
}
var Uu = Object.prototype, Yu = Uu.hasOwnProperty;
function Xu(t) {
  if (!bt(t))
    return Gu(t);
  var r = aa(t), n = [];
  for (var i in t)
    i == "constructor" && (r || !Yu.call(t, i)) || n.push(i);
  return n;
}
function xa(t) {
  return $n(t) ? Vu(t) : Xu(t);
}
var Ku = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Zu = /^\w*$/;
function Ju(t, r) {
  if (Et(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Fn(t) ? !0 : Zu.test(t) || !Ku.test(t) || r != null && t in Object(r);
}
var ir = Sn(Object, "create");
function Qu() {
  this.__data__ = ir ? ir(null) : {}, this.size = 0;
}
function e0(t) {
  var r = this.has(t) && delete this.__data__[t];
  return this.size -= r ? 1 : 0, r;
}
var t0 = "__lodash_hash_undefined__", r0 = Object.prototype, n0 = r0.hasOwnProperty;
function i0(t) {
  var r = this.__data__;
  if (ir) {
    var n = r[t];
    return n === t0 ? void 0 : n;
  }
  return n0.call(r, t) ? r[t] : void 0;
}
var a0 = Object.prototype, o0 = a0.hasOwnProperty;
function l0(t) {
  var r = this.__data__;
  return ir ? r[t] !== void 0 : o0.call(r, t);
}
var s0 = "__lodash_hash_undefined__";
function u0(t, r) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = ir && r === void 0 ? s0 : r, this;
}
function gt(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
gt.prototype.clear = Qu;
gt.prototype.delete = e0;
gt.prototype.get = i0;
gt.prototype.has = l0;
gt.prototype.set = u0;
function f0() {
  this.__data__ = [], this.size = 0;
}
function Lr(t, r) {
  for (var n = t.length; n--; )
    if (jr(t[n][0], r))
      return n;
  return -1;
}
var x0 = Array.prototype, h0 = x0.splice;
function d0(t) {
  var r = this.__data__, n = Lr(r, t);
  if (n < 0)
    return !1;
  var i = r.length - 1;
  return n == i ? r.pop() : h0.call(r, n, 1), --this.size, !0;
}
function c0(t) {
  var r = this.__data__, n = Lr(r, t);
  return n < 0 ? void 0 : r[n][1];
}
function p0(t) {
  return Lr(this.__data__, t) > -1;
}
function v0(t, r) {
  var n = this.__data__, i = Lr(n, t);
  return i < 0 ? (++this.size, n.push([t, r])) : n[i][1] = r, this;
}
function qe(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
qe.prototype.clear = f0;
qe.prototype.delete = d0;
qe.prototype.get = c0;
qe.prototype.has = p0;
qe.prototype.set = v0;
var ha = Sn(Rt, "Map");
function m0() {
  this.size = 0, this.__data__ = {
    hash: new gt(),
    map: new (ha || qe)(),
    string: new gt()
  };
}
function g0(t) {
  var r = typeof t;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
}
function Nr(t, r) {
  var n = t.__data__;
  return g0(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
}
function b0(t) {
  var r = Nr(this, t).delete(t);
  return this.size -= r ? 1 : 0, r;
}
function C0(t) {
  return Nr(this, t).get(t);
}
function y0(t) {
  return Nr(this, t).has(t);
}
function B0(t, r) {
  var n = Nr(this, t), i = n.size;
  return n.set(t, r), this.size += n.size == i ? 0 : 1, this;
}
function Ze(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
Ze.prototype.clear = m0;
Ze.prototype.delete = b0;
Ze.prototype.get = C0;
Ze.prototype.has = y0;
Ze.prototype.set = B0;
var w0 = "Expected a function";
function Rn(t, r) {
  if (typeof t != "function" || r != null && typeof r != "function")
    throw new TypeError(w0);
  var n = function() {
    var i = arguments, a = r ? r.apply(this, i) : i[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var l = t.apply(this, i);
    return n.cache = o.set(a, l) || o, l;
  };
  return n.cache = new (Rn.Cache || Ze)(), n;
}
Rn.Cache = Ze;
var D0 = 500;
function A0(t) {
  var r = Rn(t, function(i) {
    return n.size === D0 && n.clear(), i;
  }), n = r.cache;
  return r;
}
var F0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, E0 = /\\(\\)?/g, S0 = A0(function(t) {
  var r = [];
  return t.charCodeAt(0) === 46 && r.push(""), t.replace(F0, function(n, i, a, o) {
    r.push(a ? o.replace(E0, "$1") : i || n);
  }), r;
});
function da(t) {
  return t == null ? "" : ta(t);
}
function P0(t, r) {
  return Et(t) ? t : Ju(t, r) ? [t] : S0(da(t));
}
var $0 = 1 / 0;
function R0(t) {
  if (typeof t == "string" || Fn(t))
    return t;
  var r = t + "";
  return r == "0" && 1 / t == -$0 ? "-0" : r;
}
function T0(t, r) {
  r = P0(r, t);
  for (var n = 0, i = r.length; t != null && n < i; )
    t = t[R0(r[n++])];
  return n && n == i ? t : void 0;
}
function ca(t, r, n) {
  var i = t == null ? void 0 : T0(t, r);
  return i === void 0 ? n : i;
}
var pa = qu(Object.getPrototypeOf, Object), z0 = "[object Object]", O0 = Function.prototype, k0 = Object.prototype, va = O0.toString, M0 = k0.hasOwnProperty, _0 = va.call(Object);
function I0(t) {
  if (!Tt(t) || fr(t) != z0)
    return !1;
  var r = pa(t);
  if (r === null)
    return !0;
  var n = M0.call(r, "constructor") && r.constructor;
  return typeof n == "function" && n instanceof n && va.call(n) == _0;
}
function H0(t, r, n) {
  var i = -1, a = t.length;
  r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
  for (var o = Array(a); ++i < a; )
    o[i] = t[i + r];
  return o;
}
function W0(t, r, n) {
  var i = t.length;
  return n = n === void 0 ? i : n, !r && n >= i ? t : H0(t, r, n);
}
var j0 = "\\ud800-\\udfff", L0 = "\\u0300-\\u036f", N0 = "\\ufe20-\\ufe2f", V0 = "\\u20d0-\\u20ff", q0 = L0 + N0 + V0, G0 = "\\ufe0e\\ufe0f", U0 = "\\u200d", Y0 = RegExp("[" + U0 + j0 + q0 + G0 + "]");
function ma(t) {
  return Y0.test(t);
}
function X0(t) {
  return t.split("");
}
var ga = "\\ud800-\\udfff", K0 = "\\u0300-\\u036f", Z0 = "\\ufe20-\\ufe2f", J0 = "\\u20d0-\\u20ff", Q0 = K0 + Z0 + J0, ef = "\\ufe0e\\ufe0f", tf = "[" + ga + "]", un = "[" + Q0 + "]", fn = "\\ud83c[\\udffb-\\udfff]", rf = "(?:" + un + "|" + fn + ")", ba = "[^" + ga + "]", Ca = "(?:\\ud83c[\\udde6-\\uddff]){2}", ya = "[\\ud800-\\udbff][\\udc00-\\udfff]", nf = "\\u200d", Ba = rf + "?", wa = "[" + ef + "]?", af = "(?:" + nf + "(?:" + [ba, Ca, ya].join("|") + ")" + wa + Ba + ")*", of = wa + Ba + af, lf = "(?:" + [ba + un + "?", un, Ca, ya, tf].join("|") + ")", sf = RegExp(fn + "(?=" + fn + ")|" + lf + of, "g");
function uf(t) {
  return t.match(sf) || [];
}
function ff(t) {
  return ma(t) ? uf(t) : X0(t);
}
function xf(t) {
  return function(r) {
    r = da(r);
    var n = ma(r) ? ff(r) : void 0, i = n ? n[0] : r.charAt(0), a = n ? W0(n, 1).join("") : r.slice(1);
    return i[t]() + a;
  };
}
var hf = xf("toUpperCase");
function df() {
  this.__data__ = new qe(), this.size = 0;
}
function cf(t) {
  var r = this.__data__, n = r.delete(t);
  return this.size = r.size, n;
}
function pf(t) {
  return this.__data__.get(t);
}
function vf(t) {
  return this.__data__.has(t);
}
var mf = 200;
function gf(t, r) {
  var n = this.__data__;
  if (n instanceof qe) {
    var i = n.__data__;
    if (!ha || i.length < mf - 1)
      return i.push([t, r]), this.size = ++n.size, this;
    n = this.__data__ = new Ze(i);
  }
  return n.set(t, r), this.size = n.size, this;
}
function zt(t) {
  var r = this.__data__ = new qe(t);
  this.size = r.size;
}
zt.prototype.clear = df;
zt.prototype.delete = cf;
zt.prototype.get = pf;
zt.prototype.has = vf;
zt.prototype.set = gf;
var Da = typeof exports == "object" && exports && !exports.nodeType && exports, bi = Da && typeof module == "object" && module && !module.nodeType && module, bf = bi && bi.exports === Da, Ci = bf ? Rt.Buffer : void 0;
Ci && Ci.allocUnsafe;
function Cf(t, r) {
  return t.slice();
}
var yi = Rt.Uint8Array;
function yf(t) {
  var r = new t.constructor(t.byteLength);
  return new yi(r).set(new yi(t)), r;
}
function Bf(t, r) {
  var n = yf(t.buffer);
  return new t.constructor(n, t.byteOffset, t.length);
}
function wf(t) {
  return typeof t.constructor == "function" && !aa(t) ? Ls(pa(t)) : {};
}
function Df(t) {
  return function(r, n, i) {
    for (var a = -1, o = Object(r), l = i(r), s = l.length; s--; ) {
      var u = l[++a];
      if (n(o[u], u, o) === !1)
        break;
    }
    return r;
  };
}
var Af = Df();
function xn(t, r, n) {
  (n !== void 0 && !jr(t[r], n) || n === void 0 && !(r in t)) && Pn(t, r, n);
}
function Ff(t) {
  return Tt(t) && $n(t);
}
function hn(t, r) {
  if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
    return t[r];
}
function Ef(t) {
  return nu(t, xa(t));
}
function Sf(t, r, n, i, a, o, l) {
  var s = hn(t, n), u = hn(r, n), f = l.get(u);
  if (f) {
    xn(t, n, f);
    return;
  }
  var x = o ? o(s, u, n + "", t, r, l) : void 0, d = x === void 0;
  if (d) {
    var b = Et(u), D = !b && sa(u), c = !b && !D && fa(u);
    x = u, b || D || c ? Et(s) ? x = s : Ff(s) ? x = Vs(s) : D ? (d = !1, x = Cf(u)) : c ? (d = !1, x = Bf(u)) : x = [] : I0(u) || sn(u) ? (x = s, sn(s) ? x = Ef(s) : (!bt(s) || En(s)) && (x = wf(u))) : d = !1;
  }
  d && (l.set(u, x), a(x, u, i, o, l), l.delete(u)), xn(t, n, x);
}
function Aa(t, r, n, i, a) {
  t !== r && Af(r, function(o, l) {
    if (a || (a = new zt()), bt(o))
      Sf(t, r, l, n, Aa, i, a);
    else {
      var s = i ? i(hn(t, l), o, l + "", t, r, a) : void 0;
      s === void 0 && (s = o), xn(t, l, s);
    }
  }, xa);
}
var qt = su(function(t, r, n) {
  Aa(t, r, n);
});
const Ot = {
  fontFamily: 'v-sans, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
  fontFamilyMono: "v-mono, SFMono-Regular, Menlo, Consolas, Courier, monospace",
  fontWeight: "400",
  fontWeightStrong: "500",
  cubicBezierEaseInOut: "cubic-bezier(.4, 0, .2, 1)",
  cubicBezierEaseOut: "cubic-bezier(0, 0, .2, 1)",
  cubicBezierEaseIn: "cubic-bezier(.4, 0, 1, 1)",
  borderRadius: "3px",
  borderRadiusSmall: "2px",
  fontSize: "14px",
  fontSizeMini: "12px",
  fontSizeTiny: "12px",
  fontSizeSmall: "14px",
  fontSizeMedium: "14px",
  fontSizeLarge: "15px",
  fontSizeHuge: "16px",
  lineHeight: "1.6",
  heightMini: "16px",
  // private now, it's too small
  heightTiny: "22px",
  heightSmall: "28px",
  heightMedium: "34px",
  heightLarge: "40px",
  heightHuge: "46px"
}, {
  fontSize: Pf,
  fontFamily: $f,
  lineHeight: Rf
} = Ot, Fa = k("body", `
 margin: 0;
 font-size: ${Pf};
 font-family: ${$f};
 line-height: ${Rf};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [k("input", `
 font-family: inherit;
 font-size: inherit;
 `)]), Ve = "n-config-provider", ar = "naive-ui-style";
function Ee(t, r, n, i, a, o) {
  const l = Wr(), s = Ce(Ve, null);
  if (n) {
    const f = () => {
      const x = o == null ? void 0 : o.value;
      n.mount({
        id: x === void 0 ? r : x + r,
        head: !0,
        props: {
          bPrefix: x ? `.${x}-` : void 0
        },
        anchorMetaName: ar,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || Fa.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: ar,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    l ? f() : Bn(f);
  }
  return z(() => {
    var f;
    const {
      theme: {
        common: x,
        self: d,
        peers: b = {}
      } = {},
      themeOverrides: D = {},
      builtinThemeOverrides: c = {}
    } = a, {
      common: v,
      peers: C
    } = D, {
      common: m = void 0,
      [t]: {
        common: P = void 0,
        self: A = void 0,
        peers: B = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: O = void 0,
      [t]: _ = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: p,
      peers: w = {}
    } = _, $ = qt({}, x || P || m || i.common, O, p, v), W = qt(
      // {}, executed every time, no need for empty obj
      (f = d || A || i.self) === null || f === void 0 ? void 0 : f($),
      c,
      _,
      D
    );
    return {
      common: $,
      self: W,
      peers: qt({}, i.peers, B, b),
      peerOverrides: qt({}, c.peers, w, C)
    };
  });
}
Ee.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const dn = "n";
function Je(t = {}, r = {
  defaultBordered: !0
}) {
  const n = Ce(Ve, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: n == null ? void 0 : n.inlineThemeDisabled,
    mergedRtlRef: n == null ? void 0 : n.mergedRtlRef,
    mergedComponentPropsRef: n == null ? void 0 : n.mergedComponentPropsRef,
    mergedBreakpointsRef: n == null ? void 0 : n.mergedBreakpointsRef,
    mergedBorderedRef: z(() => {
      var i, a;
      const {
        bordered: o
      } = t;
      return o !== void 0 ? o : (a = (i = n == null ? void 0 : n.mergedBorderedRef.value) !== null && i !== void 0 ? i : r.defaultBordered) !== null && a !== void 0 ? a : !0;
    }),
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : Oo(dn),
    namespaceRef: z(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
const Tf = {
  name: "zh-CN",
  global: {
    undo: "撤销",
    redo: "重做",
    confirm: "确认",
    clear: "清除"
  },
  Popconfirm: {
    positiveText: "确认",
    negativeText: "取消"
  },
  Cascader: {
    placeholder: "请选择",
    loading: "加载中",
    loadingRequiredMessage: (t) => `加载全部 ${t} 的子节点后才可选中`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy年",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    weekFormat: "YYYY-w周",
    clear: "清除",
    now: "此刻",
    confirm: "确认",
    selectTime: "选择时间",
    selectDate: "选择日期",
    datePlaceholder: "选择日期",
    datetimePlaceholder: "选择日期时间",
    monthPlaceholder: "选择月份",
    yearPlaceholder: "选择年份",
    quarterPlaceholder: "选择季度",
    weekPlaceholder: "选择周",
    startDatePlaceholder: "开始日期",
    endDatePlaceholder: "结束日期",
    startDatetimePlaceholder: "开始日期时间",
    endDatetimePlaceholder: "结束日期时间",
    startMonthPlaceholder: "开始月份",
    endMonthPlaceholder: "结束月份",
    monthBeforeYear: !1,
    firstDayOfWeek: 0,
    today: "今天"
  },
  DataTable: {
    checkTableAll: "选择全部表格数据",
    uncheckTableAll: "取消选择全部表格数据",
    confirm: "确认",
    clear: "重置"
  },
  LegacyTransfer: {
    sourceTitle: "源项",
    targetTitle: "目标项"
  },
  Transfer: {
    selectAll: "全选",
    clearAll: "清除",
    unselectAll: "取消全选",
    total: (t) => `共 ${t} 项`,
    selected: (t) => `已选 ${t} 项`
  },
  Empty: {
    description: "无数据"
  },
  Select: {
    placeholder: "请选择"
  },
  TimePicker: {
    placeholder: "请选择时间",
    positiveText: "确认",
    negativeText: "取消",
    now: "此刻",
    clear: "清除"
  },
  Pagination: {
    goto: "跳至",
    selectionSuffix: "页"
  },
  DynamicTags: {
    add: "添加"
  },
  Log: {
    loading: "加载中"
  },
  Input: {
    placeholder: "请输入"
  },
  InputNumber: {
    placeholder: "请输入"
  },
  DynamicInput: {
    create: "添加"
  },
  ThemeEditor: {
    title: "主题编辑器",
    clearAllVars: "清除全部变量",
    clearSearch: "清除搜索",
    filterCompName: "过滤组件名",
    filterVarName: "过滤变量名",
    import: "导入",
    export: "导出",
    restore: "恢复默认"
  },
  Image: {
    tipPrevious: "上一张（←）",
    tipNext: "下一张（→）",
    tipCounterclockwise: "向左旋转",
    tipClockwise: "向右旋转",
    tipZoomOut: "缩小",
    tipZoomIn: "放大",
    tipDownload: "下载",
    tipClose: "关闭（Esc）",
    tipOriginalSize: "缩放到原始尺寸"
  }
}, zf = {
  name: "en-US",
  global: {
    undo: "Undo",
    redo: "Redo",
    confirm: "Confirm",
    clear: "Clear"
  },
  Popconfirm: {
    positiveText: "Confirm",
    negativeText: "Cancel"
  },
  Cascader: {
    placeholder: "Please Select",
    loading: "Loading",
    loadingRequiredMessage: (t) => `Please load all ${t}'s descendants before checking it.`
  },
  Time: {
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
  },
  DatePicker: {
    yearFormat: "yyyy",
    monthFormat: "MMM",
    dayFormat: "eeeeee",
    yearTypeFormat: "yyyy",
    monthTypeFormat: "yyyy-MM",
    dateFormat: "yyyy-MM-dd",
    dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
    quarterFormat: "yyyy-qqq",
    weekFormat: "YYYY-w",
    clear: "Clear",
    now: "Now",
    confirm: "Confirm",
    selectTime: "Select Time",
    selectDate: "Select Date",
    datePlaceholder: "Select Date",
    datetimePlaceholder: "Select Date and Time",
    monthPlaceholder: "Select Month",
    yearPlaceholder: "Select Year",
    quarterPlaceholder: "Select Quarter",
    weekPlaceholder: "Select Week",
    startDatePlaceholder: "Start Date",
    endDatePlaceholder: "End Date",
    startDatetimePlaceholder: "Start Date and Time",
    endDatetimePlaceholder: "End Date and Time",
    startMonthPlaceholder: "Start Month",
    endMonthPlaceholder: "End Month",
    monthBeforeYear: !0,
    firstDayOfWeek: 6,
    today: "Today"
  },
  DataTable: {
    checkTableAll: "Select all in the table",
    uncheckTableAll: "Unselect all in the table",
    confirm: "Confirm",
    clear: "Clear"
  },
  LegacyTransfer: {
    sourceTitle: "Source",
    targetTitle: "Target"
  },
  Transfer: {
    selectAll: "Select all",
    unselectAll: "Unselect all",
    clearAll: "Clear",
    total: (t) => `Total ${t} items`,
    selected: (t) => `${t} items selected`
  },
  Empty: {
    description: "No Data"
  },
  Select: {
    placeholder: "Please Select"
  },
  TimePicker: {
    placeholder: "Select Time",
    positiveText: "OK",
    negativeText: "Cancel",
    now: "Now",
    clear: "Clear"
  },
  Pagination: {
    goto: "Goto",
    selectionSuffix: "page"
  },
  DynamicTags: {
    add: "Add"
  },
  Log: {
    loading: "Loading"
  },
  Input: {
    placeholder: "Please Input"
  },
  InputNumber: {
    placeholder: "Please Input"
  },
  DynamicInput: {
    create: "Create"
  },
  ThemeEditor: {
    title: "Theme Editor",
    clearAllVars: "Clear All Variables",
    clearSearch: "Clear Search",
    filterCompName: "Filter Component Name",
    filterVarName: "Filter Variable Name",
    import: "Import",
    export: "Export",
    restore: "Reset to Default"
  },
  Image: {
    tipPrevious: "Previous picture (←)",
    tipNext: "Next picture (→)",
    tipCounterclockwise: "Counterclockwise",
    tipClockwise: "Clockwise",
    tipZoomOut: "Zoom out",
    tipZoomIn: "Zoom in",
    tipDownload: "Download",
    tipClose: "Close (Esc)",
    // TODO: translation
    tipOriginalSize: "Zoom to original size"
  }
};
function wt(t) {
  return (r = {}) => {
    const n = r.width ? String(r.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
function Ie(t) {
  return (r, n) => {
    const i = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (i === "formatting" && t.formattingValues) {
      const l = t.defaultFormattingWidth || t.defaultWidth, s = n != null && n.width ? String(n.width) : l;
      a = t.formattingValues[s] || t.formattingValues[l];
    } else {
      const l = t.defaultWidth, s = n != null && n.width ? String(n.width) : t.defaultWidth;
      a = t.values[s] || t.values[l];
    }
    const o = t.argumentCallback ? t.argumentCallback(r) : r;
    return a[o];
  };
}
function He(t) {
  return (r, n = {}) => {
    const i = n.width, a = i && t.matchPatterns[i] || t.matchPatterns[t.defaultMatchWidth], o = r.match(a);
    if (!o)
      return null;
    const l = o[0], s = i && t.parsePatterns[i] || t.parsePatterns[t.defaultParseWidth], u = Array.isArray(s) ? kf(s, (d) => d.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Of(s, (d) => d.test(l))
    );
    let f;
    f = t.valueCallback ? t.valueCallback(u) : u, f = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(f)
    ) : f;
    const x = r.slice(l.length);
    return { value: f, rest: x };
  };
}
function Of(t, r) {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && r(t[n]))
      return n;
}
function kf(t, r) {
  for (let n = 0; n < t.length; n++)
    if (r(t[n]))
      return n;
}
function Ea(t) {
  return (r, n = {}) => {
    const i = r.match(t.matchPattern);
    if (!i) return null;
    const a = i[0], o = r.match(t.parsePattern);
    if (!o) return null;
    let l = t.valueCallback ? t.valueCallback(o[0]) : o[0];
    l = n.valueCallback ? n.valueCallback(l) : l;
    const s = r.slice(a.length);
    return { value: l, rest: s };
  };
}
function Mf(t) {
  const r = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && r === "[object Date]" ? new t.constructor(+t) : typeof t == "number" || r === "[object Number]" || typeof t == "string" || r === "[object String]" ? new Date(t) : /* @__PURE__ */ new Date(NaN);
}
let _f = {};
function If() {
  return _f;
}
function Bi(t, r) {
  var s, u, f, x;
  const n = If(), i = (r == null ? void 0 : r.weekStartsOn) ?? ((u = (s = r == null ? void 0 : r.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? n.weekStartsOn ?? ((x = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : x.weekStartsOn) ?? 0, a = Mf(t), o = a.getDay(), l = (o < i ? 7 : 0) + o - i;
  return a.setDate(a.getDate() - l), a.setHours(0, 0, 0, 0), a;
}
function Hf(t, r, n) {
  const i = Bi(t, n), a = Bi(r, n);
  return +i == +a;
}
const Wf = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds"
  },
  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds"
  },
  halfAMinute: "half a minute",
  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes"
  },
  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes"
  },
  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours"
  },
  xHours: {
    one: "1 hour",
    other: "{{count}} hours"
  },
  xDays: {
    one: "1 day",
    other: "{{count}} days"
  },
  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks"
  },
  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks"
  },
  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months"
  },
  xMonths: {
    one: "1 month",
    other: "{{count}} months"
  },
  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years"
  },
  xYears: {
    one: "1 year",
    other: "{{count}} years"
  },
  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years"
  },
  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years"
  }
}, jf = (t, r, n) => {
  let i;
  const a = Wf[t];
  return typeof a == "string" ? i = a : r === 1 ? i = a.one : i = a.other.replace("{{count}}", r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + i : i + " ago" : i;
}, Lf = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Nf = (t, r, n, i) => Lf[t], Vf = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, qf = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Gf = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ],
  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]
}, Uf = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ]
}, Yf = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night"
  }
}, Xf = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night"
  }
}, Kf = (t, r) => {
  const n = Number(t), i = n % 100;
  if (i > 20 || i < 10)
    switch (i % 10) {
      case 1:
        return n + "st";
      case 2:
        return n + "nd";
      case 3:
        return n + "rd";
    }
  return n + "th";
}, Zf = {
  ordinalNumber: Kf,
  era: Ie({
    values: Vf,
    defaultWidth: "wide"
  }),
  quarter: Ie({
    values: qf,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: Ie({
    values: Gf,
    defaultWidth: "wide"
  }),
  day: Ie({
    values: Uf,
    defaultWidth: "wide"
  }),
  dayPeriod: Ie({
    values: Yf,
    defaultWidth: "wide",
    formattingValues: Xf,
    defaultFormattingWidth: "wide"
  })
}, Jf = /^(\d+)(th|st|nd|rd)?/i, Qf = /\d+/i, ex = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, tx = {
  any: [/^b/i, /^(a|c)/i]
}, rx = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, nx = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ix = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, ax = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ],
  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i
  ]
}, ox = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, lx = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, sx = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ux = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i
  }
}, fx = {
  ordinalNumber: Ea({
    matchPattern: Jf,
    parsePattern: Qf,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: He({
    matchPatterns: ex,
    defaultMatchWidth: "wide",
    parsePatterns: tx,
    defaultParseWidth: "any"
  }),
  quarter: He({
    matchPatterns: rx,
    defaultMatchWidth: "wide",
    parsePatterns: nx,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: He({
    matchPatterns: ix,
    defaultMatchWidth: "wide",
    parsePatterns: ax,
    defaultParseWidth: "any"
  }),
  day: He({
    matchPatterns: ox,
    defaultMatchWidth: "wide",
    parsePatterns: lx,
    defaultParseWidth: "any"
  }),
  dayPeriod: He({
    matchPatterns: sx,
    defaultMatchWidth: "any",
    parsePatterns: ux,
    defaultParseWidth: "any"
  })
}, xx = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, hx = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, dx = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, cx = {
  date: wt({
    formats: xx,
    defaultWidth: "full"
  }),
  time: wt({
    formats: hx,
    defaultWidth: "full"
  }),
  dateTime: wt({
    formats: dx,
    defaultWidth: "full"
  })
}, px = {
  code: "en-US",
  formatDistance: jf,
  formatLong: cx,
  formatRelative: Nf,
  localize: Zf,
  match: fx,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, vx = {
  lessThanXSeconds: {
    one: "不到 1 秒",
    other: "不到 {{count}} 秒"
  },
  xSeconds: {
    one: "1 秒",
    other: "{{count}} 秒"
  },
  halfAMinute: "半分钟",
  lessThanXMinutes: {
    one: "不到 1 分钟",
    other: "不到 {{count}} 分钟"
  },
  xMinutes: {
    one: "1 分钟",
    other: "{{count}} 分钟"
  },
  xHours: {
    one: "1 小时",
    other: "{{count}} 小时"
  },
  aboutXHours: {
    one: "大约 1 小时",
    other: "大约 {{count}} 小时"
  },
  xDays: {
    one: "1 天",
    other: "{{count}} 天"
  },
  aboutXWeeks: {
    one: "大约 1 个星期",
    other: "大约 {{count}} 个星期"
  },
  xWeeks: {
    one: "1 个星期",
    other: "{{count}} 个星期"
  },
  aboutXMonths: {
    one: "大约 1 个月",
    other: "大约 {{count}} 个月"
  },
  xMonths: {
    one: "1 个月",
    other: "{{count}} 个月"
  },
  aboutXYears: {
    one: "大约 1 年",
    other: "大约 {{count}} 年"
  },
  xYears: {
    one: "1 年",
    other: "{{count}} 年"
  },
  overXYears: {
    one: "超过 1 年",
    other: "超过 {{count}} 年"
  },
  almostXYears: {
    one: "将近 1 年",
    other: "将近 {{count}} 年"
  }
}, mx = (t, r, n) => {
  let i;
  const a = vx[t];
  return typeof a == "string" ? i = a : r === 1 ? i = a.one : i = a.other.replace("{{count}}", String(r)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? i + "内" : i + "前" : i;
}, gx = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, bx = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, Cx = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, yx = {
  date: wt({
    formats: gx,
    defaultWidth: "full"
  }),
  time: wt({
    formats: bx,
    defaultWidth: "full"
  }),
  dateTime: wt({
    formats: Cx,
    defaultWidth: "full"
  })
};
function wi(t, r, n) {
  const i = "eeee p";
  return Hf(t, r, n) ? i : t.getTime() > r.getTime() ? "'下个'" + i : "'上个'" + i;
}
const Bx = {
  lastWeek: wi,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: wi,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, wx = (t, r, n, i) => {
  const a = Bx[t];
  return typeof a == "function" ? a(r, n, i) : a;
}, Dx = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, Ax = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, Fx = {
  narrow: [
    "一",
    "二",
    "三",
    "四",
    "五",
    "六",
    "七",
    "八",
    "九",
    "十",
    "十一",
    "十二"
  ],
  abbreviated: [
    "1月",
    "2月",
    "3月",
    "4月",
    "5月",
    "6月",
    "7月",
    "8月",
    "9月",
    "10月",
    "11月",
    "12月"
  ],
  wide: [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ]
}, Ex = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, Sx = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, Px = {
  narrow: {
    am: "上",
    pm: "下",
    midnight: "凌晨",
    noon: "午",
    morning: "早",
    afternoon: "下午",
    evening: "晚",
    night: "夜"
  },
  abbreviated: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  },
  wide: {
    am: "上午",
    pm: "下午",
    midnight: "凌晨",
    noon: "中午",
    morning: "早晨",
    afternoon: "中午",
    evening: "晚上",
    night: "夜间"
  }
}, $x = (t, r) => {
  const n = Number(t);
  switch (r == null ? void 0 : r.unit) {
    case "date":
      return n.toString() + "日";
    case "hour":
      return n.toString() + "时";
    case "minute":
      return n.toString() + "分";
    case "second":
      return n.toString() + "秒";
    default:
      return "第 " + n.toString();
  }
}, Rx = {
  ordinalNumber: $x,
  era: Ie({
    values: Dx,
    defaultWidth: "wide"
  }),
  quarter: Ie({
    values: Ax,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: Ie({
    values: Fx,
    defaultWidth: "wide"
  }),
  day: Ie({
    values: Ex,
    defaultWidth: "wide"
  }),
  dayPeriod: Ie({
    values: Sx,
    defaultWidth: "wide",
    formattingValues: Px,
    defaultFormattingWidth: "wide"
  })
}, Tx = /^(第\s*)?\d+(日|时|分|秒)?/i, zx = /\d+/i, Ox = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, kx = {
  any: [/^(前)/i, /^(公元)/i]
}, Mx = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, _x = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, Ix = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, Hx = {
  narrow: [
    /^一/i,
    /^二/i,
    /^三/i,
    /^四/i,
    /^五/i,
    /^六/i,
    /^七/i,
    /^八/i,
    /^九/i,
    /^十(?!(一|二))/i,
    /^十一/i,
    /^十二/i
  ],
  any: [
    /^一|1/i,
    /^二|2/i,
    /^三|3/i,
    /^四|4/i,
    /^五|5/i,
    /^六|6/i,
    /^七|7/i,
    /^八|8/i,
    /^九|9/i,
    /^十(?!(一|二))|10/i,
    /^十一|11/i,
    /^十二|12/i
  ]
}, Wx = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, jx = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, Lx = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, Nx = {
  any: {
    am: /^上午?/i,
    pm: /^下午?/i,
    midnight: /^午夜/i,
    noon: /^[中正]午/i,
    morning: /^早上/i,
    afternoon: /^下午/i,
    evening: /^晚上?/i,
    night: /^凌晨/i
  }
}, Vx = {
  ordinalNumber: Ea({
    matchPattern: Tx,
    parsePattern: zx,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: He({
    matchPatterns: Ox,
    defaultMatchWidth: "wide",
    parsePatterns: kx,
    defaultParseWidth: "any"
  }),
  quarter: He({
    matchPatterns: Mx,
    defaultMatchWidth: "wide",
    parsePatterns: _x,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: He({
    matchPatterns: Ix,
    defaultMatchWidth: "wide",
    parsePatterns: Hx,
    defaultParseWidth: "any"
  }),
  day: He({
    matchPatterns: Wx,
    defaultMatchWidth: "wide",
    parsePatterns: jx,
    defaultParseWidth: "any"
  }),
  dayPeriod: He({
    matchPatterns: Lx,
    defaultMatchWidth: "any",
    parsePatterns: Nx,
    defaultParseWidth: "any"
  })
}, qx = {
  code: "zh-CN",
  formatDistance: mx,
  formatLong: yx,
  formatRelative: wx,
  localize: Rx,
  match: Vx,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Gx = {
  name: "zh-CN",
  locale: qx
}, Ux = {
  name: "en-US",
  locale: px
};
function Yx(t) {
  const {
    mergedLocaleRef: r,
    mergedDateLocaleRef: n
  } = Ce(Ve, null) || {}, i = z(() => {
    var o, l;
    return (l = (o = r == null ? void 0 : r.value) === null || o === void 0 ? void 0 : o[t]) !== null && l !== void 0 ? l : zf[t];
  });
  return {
    dateLocaleRef: z(() => {
      var o;
      return (o = n == null ? void 0 : n.value) !== null && o !== void 0 ? o : Ux;
    }),
    localeRef: i
  };
}
function kt(t, r, n) {
  if (!r) {
    process.env.NODE_ENV !== "production" && Hi("use-style", "No style is specified.");
    return;
  }
  const i = Wr(), a = Ce(Ve, null), o = () => {
    const l = n.value;
    r.mount({
      id: l === void 0 ? t : l + t,
      head: !0,
      anchorMetaName: ar,
      props: {
        bPrefix: l ? `.${l}-` : void 0
      },
      ssr: i,
      parent: a == null ? void 0 : a.styleMountTarget
    }), a != null && a.preflightStyleDisabled || Fa.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: ar,
      ssr: i,
      parent: a == null ? void 0 : a.styleMountTarget
    });
  };
  i ? o() : Bn(o);
}
function Mt(t, r, n, i) {
  n || Hi("useThemeClass", "cssVarsRef is not passed");
  const a = Ce(Ve, null), o = a == null ? void 0 : a.mergedThemeHashRef, l = a == null ? void 0 : a.styleMountTarget, s = q(""), u = Wr();
  let f;
  const x = `__${t}`, d = () => {
    let b = x;
    const D = r ? r.value : void 0, c = o == null ? void 0 : o.value;
    c && (b += `-${c}`), D && (b += `-${D}`);
    const {
      themeOverrides: v,
      builtinThemeOverrides: C
    } = i;
    v && (b += `-${tr(JSON.stringify(v))}`), C && (b += `-${tr(JSON.stringify(C))}`), s.value = b, f = () => {
      const m = n.value;
      let P = "";
      for (const A in m)
        P += `${A}: ${m[A]};`;
      k(`.${b}`, P).mount({
        id: b,
        ssr: u,
        parent: l
      }), f = void 0;
    };
  };
  return dt(() => {
    d();
  }), {
    themeClass: s,
    onRender: () => {
      f == null || f();
    }
  };
}
function Tn(t, r, n) {
  if (!r) return;
  const i = Wr(), a = z(() => {
    const {
      value: s
    } = r;
    if (!s)
      return;
    const u = s[t];
    if (u)
      return u;
  }), o = Ce(Ve, null), l = () => {
    dt(() => {
      const {
        value: s
      } = n, u = `${s}${t}Rtl`;
      if (Dl(u, i)) return;
      const {
        value: f
      } = a;
      f && f.style.mount({
        id: u,
        head: !0,
        anchorMetaName: ar,
        props: {
          bPrefix: s ? `.${s}-` : void 0
        },
        ssr: i,
        parent: o == null ? void 0 : o.styleMountTarget
      });
    });
  };
  return i ? l() : Bn(l), a;
}
function Xx(t, r) {
  return xe({
    name: hf(t),
    setup() {
      var n;
      const i = (n = Ce(Ve, null)) === null || n === void 0 ? void 0 : n.mergedIconsRef;
      return () => {
        var a;
        const o = (a = i == null ? void 0 : i.value) === null || a === void 0 ? void 0 : a[t];
        return o ? o() : r;
      };
    }
  });
}
const Kx = xe({
  name: "Eye",
  render() {
    return g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, g("path", {
      d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }), g("circle", {
      cx: "256",
      cy: "256",
      r: "80",
      fill: "none",
      stroke: "currentColor",
      "stroke-miterlimit": "10",
      "stroke-width": "32"
    }));
  }
}), Zx = xe({
  name: "EyeOff",
  render() {
    return g("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, g("path", {
      d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
      fill: "currentColor"
    }), g("path", {
      d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
      fill: "currentColor"
    }), g("path", {
      d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
      fill: "currentColor"
    }), g("path", {
      d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
      fill: "currentColor"
    }), g("path", {
      d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
      fill: "currentColor"
    }));
  }
}), Jx = xe({
  name: "ChevronDown",
  render() {
    return g("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, g("path", {
      d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
      fill: "currentColor"
    }));
  }
}), Qx = Xx("clear", g("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, g("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, g("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, g("path", {
  d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
}))))), zn = xe({
  name: "BaseIconSwitchTransition",
  setup(t, {
    slots: r
  }) {
    const n = _l();
    return () => g(er, {
      name: "icon-switch-transition",
      appear: n.value
    }, r);
  }
}), eh = xe({
  name: "FadeInExpandTransition",
  props: {
    appear: Boolean,
    group: Boolean,
    mode: String,
    onLeave: Function,
    onAfterLeave: Function,
    onAfterEnter: Function,
    width: Boolean,
    // reverse mode is only used in tree
    // it make it from expanded to collapsed after mounted
    reverse: Boolean
  },
  setup(t, {
    slots: r
  }) {
    function n(s) {
      t.width ? s.style.maxWidth = `${s.offsetWidth}px` : s.style.maxHeight = `${s.offsetHeight}px`, s.offsetWidth;
    }
    function i(s) {
      t.width ? s.style.maxWidth = "0" : s.style.maxHeight = "0", s.offsetWidth;
      const {
        onLeave: u
      } = t;
      u && u();
    }
    function a(s) {
      t.width ? s.style.maxWidth = "" : s.style.maxHeight = "";
      const {
        onAfterLeave: u
      } = t;
      u && u();
    }
    function o(s) {
      if (s.style.transition = "none", t.width) {
        const u = s.offsetWidth;
        s.style.maxWidth = "0", s.offsetWidth, s.style.transition = "", s.style.maxWidth = `${u}px`;
      } else if (t.reverse)
        s.style.maxHeight = `${s.offsetHeight}px`, s.offsetHeight, s.style.transition = "", s.style.maxHeight = "0";
      else {
        const u = s.offsetHeight;
        s.style.maxHeight = "0", s.offsetWidth, s.style.transition = "", s.style.maxHeight = `${u}px`;
      }
      s.offsetWidth;
    }
    function l(s) {
      var u;
      t.width ? s.style.maxWidth = "" : t.reverse || (s.style.maxHeight = ""), (u = t.onAfterEnter) === null || u === void 0 || u.call(t);
    }
    return () => {
      const {
        group: s,
        width: u,
        appear: f,
        mode: x
      } = t, d = s ? ko : er, b = {
        name: u ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: f,
        onEnter: o,
        onAfterEnter: l,
        onBeforeLeave: n,
        onLeave: i,
        onAfterLeave: a
      };
      return s || (b.mode = x), g(d, b, r);
    };
  }
}), th = j("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [k("svg", `
 height: 1em;
 width: 1em;
 `)]), kr = xe({
  name: "BaseIcon",
  props: {
    role: String,
    ariaLabel: String,
    ariaDisabled: {
      type: Boolean,
      default: void 0
    },
    ariaHidden: {
      type: Boolean,
      default: void 0
    },
    clsPrefix: {
      type: String,
      required: !0
    },
    onClick: Function,
    onMousedown: Function,
    onMouseup: Function
  },
  setup(t) {
    kt("-base-icon", th, We(t, "clsPrefix"));
  },
  render() {
    return g("i", {
      class: `${this.clsPrefix}-base-icon`,
      onClick: this.onClick,
      onMousedown: this.onMousedown,
      onMouseup: this.onMouseup,
      role: this.role,
      "aria-label": this.ariaLabel,
      "aria-hidden": this.ariaHidden,
      "aria-disabled": this.ariaDisabled
    }, this.$slots);
  }
}), {
  cubicBezierEaseInOut: rh
} = Ot;
function Mr({
  originalTransform: t = "",
  left: r = 0,
  top: n = 0,
  transition: i = `all .3s ${rh} !important`
} = {}) {
  return [k("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${t} scale(0.75)`,
    left: r,
    top: n,
    opacity: 0
  }), k("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${t}`,
    left: r,
    top: n,
    opacity: 1
  }), k("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: r,
    top: n,
    transition: i
  })];
}
const nh = k([k("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), j("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [T("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [Mr()]), T("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Mr({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), T("container", `
 animation: rotator 3s linear infinite both;
 `, [T("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Qr = "1.6s", ih = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Sa = xe({
  name: "BaseLoading",
  props: Object.assign({
    clsPrefix: {
      type: String,
      required: !0
    },
    show: {
      type: Boolean,
      default: !0
    },
    scale: {
      type: Number,
      default: 1
    },
    radius: {
      type: Number,
      default: 100
    }
  }, ih),
  setup(t) {
    kt("-base-loading", nh, We(t, "clsPrefix"));
  },
  render() {
    const {
      clsPrefix: t,
      radius: r,
      strokeWidth: n,
      stroke: i,
      scale: a
    } = this, o = r / a;
    return g("div", {
      class: `${t}-base-loading`,
      role: "img",
      "aria-label": "loading"
    }, g(zn, null, {
      default: () => this.show ? g("div", {
        key: "icon",
        class: `${t}-base-loading__transition-wrapper`
      }, g("div", {
        class: `${t}-base-loading__container`
      }, g("svg", {
        class: `${t}-base-loading__icon`,
        viewBox: `0 0 ${2 * o} ${2 * o}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          color: i
        }
      }, g("g", null, g("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${o} ${o};270 ${o} ${o}`,
        begin: "0s",
        dur: Qr,
        fill: "freeze",
        repeatCount: "indefinite"
      }), g("circle", {
        class: `${t}-base-loading__icon`,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": n,
        "stroke-linecap": "round",
        cx: o,
        cy: o,
        r: r - n / 2,
        "stroke-dasharray": 5.67 * r,
        "stroke-dashoffset": 18.48 * r
      }, g("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${o} ${o};135 ${o} ${o};450 ${o} ${o}`,
        begin: "0s",
        dur: Qr,
        fill: "freeze",
        repeatCount: "indefinite"
      }), g("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * r};${1.42 * r};${5.67 * r}`,
        begin: "0s",
        dur: Qr,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : g("div", {
        key: "placeholder",
        class: `${t}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), N = {
  neutralBase: "#FFF",
  neutralInvertBase: "#000",
  neutralTextBase: "#000",
  neutralPopover: "#fff",
  neutralCard: "#fff",
  neutralModal: "#fff",
  neutralBody: "#fff",
  alpha1: "0.82",
  alpha2: "0.72",
  alpha3: "0.38",
  alpha4: "0.24",
  // disabled text, placeholder, icon
  alpha5: "0.18",
  // disabled placeholder
  alphaClose: "0.6",
  alphaDisabled: "0.5",
  alphaDisabledInput: "0.02",
  alphaPending: "0.05",
  alphaTablePending: "0.02",
  alphaPressed: "0.07",
  alphaAvatar: "0.2",
  alphaRail: "0.14",
  alphaProgressRail: ".08",
  alphaBorder: "0.12",
  alphaDivider: "0.06",
  alphaInput: "0",
  alphaAction: "0.02",
  alphaTab: "0.04",
  alphaScrollbar: "0.25",
  alphaScrollbarHover: "0.4",
  alphaCode: "0.05",
  alphaTag: "0.02",
  // primary
  primaryHover: "#36ad6a",
  primaryDefault: "#18a058",
  primaryActive: "#0c7a43",
  primarySuppl: "#36ad6a",
  // info
  infoHover: "#4098fc",
  infoDefault: "#2080f0",
  infoActive: "#1060c9",
  infoSuppl: "#4098fc",
  // error
  errorHover: "#de576d",
  errorDefault: "#d03050",
  errorActive: "#ab1f3f",
  errorSuppl: "#de576d",
  // warning
  warningHover: "#fcb040",
  warningDefault: "#f0a020",
  warningActive: "#c97c10",
  warningSuppl: "#fcb040",
  // success
  successHover: "#36ad6a",
  successDefault: "#18a058",
  successActive: "#0c7a43",
  successSuppl: "#36ad6a"
}, ah = mt(N.neutralBase), Pa = mt(N.neutralInvertBase), oh = `rgba(${Pa.slice(0, 3).join(", ")}, `;
function Di(t) {
  return `${oh + String(t)})`;
}
function we(t) {
  const r = Array.from(Pa);
  return r[3] = Number(t), Dn(ah, r);
}
const xr = Object.assign(Object.assign({
  name: "common"
}, Ot), {
  baseColor: N.neutralBase,
  // primary color
  primaryColor: N.primaryDefault,
  primaryColorHover: N.primaryHover,
  primaryColorPressed: N.primaryActive,
  primaryColorSuppl: N.primarySuppl,
  // info color
  infoColor: N.infoDefault,
  infoColorHover: N.infoHover,
  infoColorPressed: N.infoActive,
  infoColorSuppl: N.infoSuppl,
  // success color
  successColor: N.successDefault,
  successColorHover: N.successHover,
  successColorPressed: N.successActive,
  successColorSuppl: N.successSuppl,
  // warning color
  warningColor: N.warningDefault,
  warningColorHover: N.warningHover,
  warningColorPressed: N.warningActive,
  warningColorSuppl: N.warningSuppl,
  // error color
  errorColor: N.errorDefault,
  errorColorHover: N.errorHover,
  errorColorPressed: N.errorActive,
  errorColorSuppl: N.errorSuppl,
  // text color
  textColorBase: N.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: we(N.alpha4),
  placeholderColor: we(N.alpha4),
  placeholderColorDisabled: we(N.alpha5),
  iconColor: we(N.alpha4),
  iconColorHover: br(we(N.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: br(we(N.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: we(N.alpha5),
  opacity1: N.alpha1,
  opacity2: N.alpha2,
  opacity3: N.alpha3,
  opacity4: N.alpha4,
  opacity5: N.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: we(Number(N.alphaClose)),
  closeIconColorHover: we(Number(N.alphaClose)),
  closeIconColorPressed: we(Number(N.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: we(N.alpha4),
  clearColorHover: br(we(N.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: br(we(N.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Di(N.alphaScrollbar),
  scrollbarColorHover: Di(N.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: we(N.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: N.neutralPopover,
  tableColor: N.neutralCard,
  cardColor: N.neutralCard,
  modalColor: N.neutralModal,
  bodyColor: N.neutralBody,
  tagColor: "#eee",
  avatarColor: we(N.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: we(N.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: N.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), lh = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function sh(t) {
  const {
    scrollbarColor: r,
    scrollbarColorHover: n,
    scrollbarHeight: i,
    scrollbarWidth: a,
    scrollbarBorderRadius: o
  } = t;
  return Object.assign(Object.assign({}, lh), {
    height: i,
    width: a,
    borderRadius: o,
    color: r,
    colorHover: n
  });
}
const uh = {
  name: "Scrollbar",
  common: xr,
  self: sh
}, {
  cubicBezierEaseInOut: Ai
} = Ot;
function fh({
  name: t = "fade-in",
  enterDuration: r = "0.2s",
  leaveDuration: n = "0.2s",
  enterCubicBezier: i = Ai,
  leaveCubicBezier: a = Ai
} = {}) {
  return [k(`&.${t}-transition-enter-active`, {
    transition: `all ${r} ${i}!important`
  }), k(`&.${t}-transition-leave-active`, {
    transition: `all ${n} ${a}!important`
  }), k(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`, {
    opacity: 0
  }), k(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`, {
    opacity: 1
  })];
}
const xh = j("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [k(">", [j("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [k("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), k(">", [
  // We can't set overflow hidden since it affects positioning.
  j("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), k(">, +", [j("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [K("horizontal", `
 height: var(--n-scrollbar-height);
 `, [k(">", [T("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), K("horizontal--top", `
 inset: var(--n-scrollbar-rail-inset-horizontal-top); 
 `), K("horizontal--bottom", `
 inset: var(--n-scrollbar-rail-inset-horizontal-bottom); 
 `), K("vertical", `
 width: var(--n-scrollbar-width);
 `, [k(">", [T("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), K("vertical--left", `
 inset: var(--n-scrollbar-rail-inset-vertical-left); 
 `), K("vertical--right", `
 inset: var(--n-scrollbar-rail-inset-vertical-right); 
 `), K("disabled", [k(">", [T("scrollbar", "pointer-events: none;")])]), k(">", [T("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [fh(), k("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), hh = Object.assign(Object.assign({}, Ee.props), {
  duration: {
    type: Number,
    default: 0
  },
  scrollable: {
    type: Boolean,
    default: !0
  },
  xScrollable: Boolean,
  trigger: {
    type: String,
    default: "hover"
  },
  useUnifiedContainer: Boolean,
  triggerDisplayManually: Boolean,
  // If container is set, resize observer won't not attached
  container: Function,
  content: Function,
  containerClass: String,
  containerStyle: [String, Object],
  contentClass: [String, Array],
  contentStyle: [String, Object],
  horizontalRailStyle: [String, Object],
  verticalRailStyle: [String, Object],
  onScroll: Function,
  onWheel: Function,
  onResize: Function,
  internalOnUpdateScrollLeft: Function,
  internalHoistYRail: Boolean,
  yPlacement: {
    type: String,
    default: "right"
  },
  xPlacement: {
    type: String,
    default: "bottom"
  }
}), dh = xe({
  name: "Scrollbar",
  props: hh,
  inheritAttrs: !1,
  setup(t) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n,
      mergedRtlRef: i
    } = Je(t), a = Tn("Scrollbar", i, r), o = q(null), l = q(null), s = q(null), u = q(null), f = q(null), x = q(null), d = q(null), b = q(null), D = q(null), c = q(null), v = q(null), C = q(0), m = q(0), P = q(!1), A = q(!1);
    let B = !1, O = !1, _, p, w = 0, $ = 0, W = 0, G = 0;
    const I = Hl(), e = Ee("Scrollbar", "-scrollbar", xh, uh, t, r), F = z(() => {
      const {
        value: E
      } = b, {
        value: H
      } = x, {
        value: Y
      } = c;
      return E === null || H === null || Y === null ? 0 : Math.min(E, Y * E / H + Hn(e.value.self.width) * 1.5);
    }), M = z(() => `${F.value}px`), R = z(() => {
      const {
        value: E
      } = D, {
        value: H
      } = d, {
        value: Y
      } = v;
      return E === null || H === null || Y === null ? 0 : Y * E / H + Hn(e.value.self.height) * 1.5;
    }), S = z(() => `${R.value}px`), L = z(() => {
      const {
        value: E
      } = b, {
        value: H
      } = C, {
        value: Y
      } = x, {
        value: re
      } = c;
      if (E === null || Y === null || re === null)
        return 0;
      {
        const ce = Y - E;
        return ce ? H / ce * (re - F.value) : 0;
      }
    }), le = z(() => `${L.value}px`), te = z(() => {
      const {
        value: E
      } = D, {
        value: H
      } = m, {
        value: Y
      } = d, {
        value: re
      } = v;
      if (E === null || Y === null || re === null)
        return 0;
      {
        const ce = Y - E;
        return ce ? H / ce * (re - R.value) : 0;
      }
    }), he = z(() => `${te.value}px`), ie = z(() => {
      const {
        value: E
      } = b, {
        value: H
      } = x;
      return E !== null && H !== null && H > E;
    }), Ae = z(() => {
      const {
        value: E
      } = D, {
        value: H
      } = d;
      return E !== null && H !== null && H > E;
    }), be = z(() => {
      const {
        trigger: E
      } = t;
      return E === "none" || P.value;
    }), Pe = z(() => {
      const {
        trigger: E
      } = t;
      return E === "none" || A.value;
    }), X = z(() => {
      const {
        container: E
      } = t;
      return E ? E() : l.value;
    }), Fe = z(() => {
      const {
        content: E
      } = t;
      return E ? E() : s.value;
    }), ze = (E, H) => {
      if (!t.scrollable) return;
      if (typeof E == "number") {
        ae(E, H ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: Y,
        top: re,
        index: ce,
        elSize: ye,
        position: Re,
        behavior: ue,
        el: Be,
        debounce: Me = !0
      } = E;
      (Y !== void 0 || re !== void 0) && ae(Y ?? 0, re ?? 0, 0, !1, ue), Be !== void 0 ? ae(0, Be.offsetTop, Be.offsetHeight, Me, ue) : ce !== void 0 && ye !== void 0 ? ae(0, ce * ye, ye, Me, ue) : Re === "bottom" ? ae(0, Number.MAX_SAFE_INTEGER, 0, !1, ue) : Re === "top" && ae(0, 0, 0, !1, ue);
    }, Z = hs(() => {
      t.container || ze({
        top: C.value,
        left: m.value
      });
    }), $e = () => {
      Z.isDeactivated || Le();
    }, Oe = (E) => {
      if (Z.isDeactivated) return;
      const {
        onResize: H
      } = t;
      H && H(E), Le();
    }, Q = (E, H) => {
      if (!t.scrollable) return;
      const {
        value: Y
      } = X;
      Y && (typeof E == "object" ? Y.scrollBy(E) : Y.scrollBy(E, H || 0));
    };
    function ae(E, H, Y, re, ce) {
      const {
        value: ye
      } = X;
      if (ye) {
        if (re) {
          const {
            scrollTop: Re,
            offsetHeight: ue
          } = ye;
          if (H > Re) {
            H + Y <= Re + ue || ye.scrollTo({
              left: E,
              top: H + Y - ue,
              behavior: ce
            });
            return;
          }
        }
        ye.scrollTo({
          left: E,
          top: H,
          behavior: ce
        });
      }
    }
    function ee() {
      It(), se(), Le();
    }
    function ke() {
      Qe();
    }
    function Qe() {
      _t(), Ge();
    }
    function _t() {
      p !== void 0 && window.clearTimeout(p), p = window.setTimeout(() => {
        A.value = !1;
      }, t.duration);
    }
    function Ge() {
      _ !== void 0 && window.clearTimeout(_), _ = window.setTimeout(() => {
        P.value = !1;
      }, t.duration);
    }
    function It() {
      _ !== void 0 && window.clearTimeout(_), P.value = !0;
    }
    function se() {
      p !== void 0 && window.clearTimeout(p), A.value = !0;
    }
    function pe(E) {
      const {
        onScroll: H
      } = t;
      H && H(E), je();
    }
    function je() {
      const {
        value: E
      } = X;
      E && (C.value = E.scrollTop, m.value = E.scrollLeft * (a != null && a.value ? -1 : 1));
    }
    function Vr() {
      const {
        value: E
      } = Fe;
      E && (x.value = E.offsetHeight, d.value = E.offsetWidth);
      const {
        value: H
      } = X;
      H && (b.value = H.offsetHeight, D.value = H.offsetWidth);
      const {
        value: Y
      } = f, {
        value: re
      } = u;
      Y && (v.value = Y.offsetWidth), re && (c.value = re.offsetHeight);
    }
    function et() {
      const {
        value: E
      } = X;
      E && (C.value = E.scrollTop, m.value = E.scrollLeft * (a != null && a.value ? -1 : 1), b.value = E.offsetHeight, D.value = E.offsetWidth, x.value = E.scrollHeight, d.value = E.scrollWidth);
      const {
        value: H
      } = f, {
        value: Y
      } = u;
      H && (v.value = H.offsetWidth), Y && (c.value = Y.offsetHeight);
    }
    function Le() {
      t.scrollable && (t.useUnifiedContainer ? et() : (Vr(), je()));
    }
    function dr(E) {
      var H;
      return !(!((H = o.value) === null || H === void 0) && H.contains(Xo(E)));
    }
    function qr(E) {
      E.preventDefault(), E.stopPropagation(), O = !0, xt("mousemove", window, Ht, !0), xt("mouseup", window, cr, !0), $ = m.value, W = a != null && a.value ? window.innerWidth - E.clientX : E.clientX;
    }
    function Ht(E) {
      if (!O) return;
      _ !== void 0 && window.clearTimeout(_), p !== void 0 && window.clearTimeout(p);
      const {
        value: H
      } = D, {
        value: Y
      } = d, {
        value: re
      } = R;
      if (H === null || Y === null) return;
      const ye = (a != null && a.value ? window.innerWidth - E.clientX - W : E.clientX - W) * (Y - H) / (H - re), Re = Y - H;
      let ue = $ + ye;
      ue = Math.min(Re, ue), ue = Math.max(ue, 0);
      const {
        value: Be
      } = X;
      if (Be) {
        Be.scrollLeft = ue * (a != null && a.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: Me
        } = t;
        Me && Me(ue);
      }
    }
    function cr(E) {
      E.preventDefault(), E.stopPropagation(), Ne("mousemove", window, Ht, !0), Ne("mouseup", window, cr, !0), O = !1, Le(), dr(E) && Qe();
    }
    function Gr(E) {
      E.preventDefault(), E.stopPropagation(), B = !0, xt("mousemove", window, Wt, !0), xt("mouseup", window, jt, !0), w = C.value, G = E.clientY;
    }
    function Wt(E) {
      if (!B) return;
      _ !== void 0 && window.clearTimeout(_), p !== void 0 && window.clearTimeout(p);
      const {
        value: H
      } = b, {
        value: Y
      } = x, {
        value: re
      } = F;
      if (H === null || Y === null) return;
      const ye = (E.clientY - G) * (Y - H) / (H - re), Re = Y - H;
      let ue = w + ye;
      ue = Math.min(Re, ue), ue = Math.max(ue, 0);
      const {
        value: Be
      } = X;
      Be && (Be.scrollTop = ue);
    }
    function jt(E) {
      E.preventDefault(), E.stopPropagation(), Ne("mousemove", window, Wt, !0), Ne("mouseup", window, jt, !0), B = !1, Le(), dr(E) && Qe();
    }
    dt(() => {
      const {
        value: E
      } = Ae, {
        value: H
      } = ie, {
        value: Y
      } = r, {
        value: re
      } = f, {
        value: ce
      } = u;
      re && (E ? re.classList.remove(`${Y}-scrollbar-rail--disabled`) : re.classList.add(`${Y}-scrollbar-rail--disabled`)), ce && (H ? ce.classList.remove(`${Y}-scrollbar-rail--disabled`) : ce.classList.add(`${Y}-scrollbar-rail--disabled`));
    }), sr(() => {
      t.container || Le();
    }), lr(() => {
      _ !== void 0 && window.clearTimeout(_), p !== void 0 && window.clearTimeout(p), Ne("mousemove", window, Wt, !0), Ne("mouseup", window, jt, !0);
    });
    const pr = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: E
        },
        self: {
          color: H,
          colorHover: Y,
          height: re,
          width: ce,
          borderRadius: ye,
          railInsetHorizontalTop: Re,
          railInsetHorizontalBottom: ue,
          railInsetVerticalRight: Be,
          railInsetVerticalLeft: Me,
          railColor: vr
        }
      } = e.value;
      return {
        "--n-scrollbar-bezier": E,
        "--n-scrollbar-color": H,
        "--n-scrollbar-color-hover": Y,
        "--n-scrollbar-border-radius": ye,
        "--n-scrollbar-width": ce,
        "--n-scrollbar-height": re,
        "--n-scrollbar-rail-inset-horizontal-top": Re,
        "--n-scrollbar-rail-inset-horizontal-bottom": ue,
        "--n-scrollbar-rail-inset-vertical-right": a != null && a.value ? Un(Be) : Be,
        "--n-scrollbar-rail-inset-vertical-left": a != null && a.value ? Un(Me) : Me,
        "--n-scrollbar-rail-color": vr
      };
    }), Ue = n ? Mt("scrollbar", void 0, pr, t) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: ze,
      scrollBy: Q,
      sync: Le,
      syncUnifiedContainer: et,
      handleMouseEnterWrapper: ee,
      handleMouseLeaveWrapper: ke
    }), {
      mergedClsPrefix: r,
      rtlEnabled: a,
      containerScrollTop: C,
      wrapperRef: o,
      containerRef: l,
      contentRef: s,
      yRailRef: u,
      xRailRef: f,
      needYBar: ie,
      needXBar: Ae,
      yBarSizePx: M,
      xBarSizePx: S,
      yBarTopPx: le,
      xBarLeftPx: he,
      isShowXBar: be,
      isShowYBar: Pe,
      isIos: I,
      handleScroll: pe,
      handleContentResize: $e,
      handleContainerResize: Oe,
      handleYScrollMouseDown: Gr,
      handleXScrollMouseDown: qr,
      cssVars: n ? void 0 : pr,
      themeClass: Ue == null ? void 0 : Ue.themeClass,
      onRender: Ue == null ? void 0 : Ue.onRender
    });
  },
  render() {
    var t;
    const {
      $slots: r,
      mergedClsPrefix: n,
      triggerDisplayManually: i,
      rtlEnabled: a,
      internalHoistYRail: o,
      yPlacement: l,
      xPlacement: s,
      xScrollable: u
    } = this;
    if (!this.scrollable) return (t = r.default) === null || t === void 0 ? void 0 : t.call(r);
    const f = this.trigger === "none", x = (D, c) => g("div", {
      ref: "yRailRef",
      class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`, `${n}-scrollbar-rail--vertical--${l}`, D],
      "data-scrollbar-rail": !0,
      style: [c || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, g(f ? Vn : er, f ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? g("div", {
        class: `${n}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), d = () => {
      var D, c;
      return (D = this.onRender) === null || D === void 0 || D.call(this), g("div", wn(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${n}-scrollbar`, this.themeClass, a && `${n}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: i ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: i ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (c = r.default) === null || c === void 0 ? void 0 : c.call(r) : g("div", {
        role: "none",
        ref: "containerRef",
        class: [`${n}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, g(on, {
        onResize: this.handleContentResize
      }, {
        default: () => g("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${n}-scrollbar-content`, this.contentClass]
        }, r)
      })), o ? null : x(void 0, void 0), u && g("div", {
        ref: "xRailRef",
        class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--horizontal`, `${n}-scrollbar-rail--horizontal--${s}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, g(f ? Vn : er, f ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? g("div", {
          class: `${n}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: a ? this.xBarLeftPx : void 0,
            left: a ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, b = this.container ? d() : g(on, {
      onResize: this.handleContainerResize
    }, {
      default: d
    });
    return o ? g(_r, null, b, x(this.themeClass, this.cssVars)) : b;
  }
}), ch = j("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), ph = xe({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    kt("-base-wave", ch, We(t, "clsPrefix"));
    const r = q(null), n = q(!1);
    let i = null;
    return lr(() => {
      i !== null && window.clearTimeout(i);
    }), {
      active: n,
      selfRef: r,
      play() {
        i !== null && (window.clearTimeout(i), n.value = !1, i = null), tn(() => {
          var a;
          (a = r.value) === null || a === void 0 || a.offsetHeight, n.value = !0, i = window.setTimeout(() => {
            n.value = !1, i = null;
          }, 1e3);
        });
      }
    };
  },
  render() {
    const {
      clsPrefix: t
    } = this;
    return g("div", {
      ref: "selfRef",
      "aria-hidden": !0,
      class: [`${t}-base-wave`, this.active && `${t}-base-wave--active`]
    });
  }
}), vh = j("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [k(">", [T("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [k("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), k("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), T("placeholder", `
 display: flex;
 `), T("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Mr({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), cn = xe({
  name: "BaseClear",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    show: Boolean,
    onClear: Function
  },
  setup(t) {
    return kt("-base-clear", vh, We(t, "clsPrefix")), {
      handleMouseDown(r) {
        r.preventDefault();
      }
    };
  },
  render() {
    const {
      clsPrefix: t
    } = this;
    return g("div", {
      class: `${t}-base-clear`
    }, g(zn, null, {
      default: () => {
        var r, n;
        return this.show ? g("div", {
          key: "dismiss",
          class: `${t}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, Xt(this.$slots.icon, () => [g(kr, {
          clsPrefix: t
        }, {
          default: () => g(Qx, null)
        })])) : g("div", {
          key: "icon",
          class: `${t}-base-clear__placeholder`
        }, (n = (r = this.$slots).placeholder) === null || n === void 0 ? void 0 : n.call(r));
      }
    }));
  }
}), mh = xe({
  name: "InternalSelectionSuffix",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    showArrow: {
      type: Boolean,
      default: void 0
    },
    showClear: {
      type: Boolean,
      default: void 0
    },
    loading: {
      type: Boolean,
      default: !1
    },
    onClear: Function
  },
  setup(t, {
    slots: r
  }) {
    return () => {
      const {
        clsPrefix: n
      } = t;
      return g(Sa, {
        clsPrefix: n,
        class: `${n}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: t.loading
      }, {
        default: () => t.showArrow ? g(cn, {
          clsPrefix: n,
          show: t.showClear,
          onClear: t.onClear
        }, {
          placeholder: () => g(kr, {
            clsPrefix: n,
            class: `${n}-base-suffix__arrow`
          }, {
            default: () => Xt(r.default, () => [g(Jx, null)])
          })
        }) : null
      });
    };
  }
}), {
  cubicBezierEaseInOut: Ye
} = Ot;
function gh({
  duration: t = ".2s",
  delay: r = ".1s"
} = {}) {
  return [k("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", {
    opacity: 1
  }), k("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), k("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${t} ${Ye},
 max-width ${t} ${Ye} ${r},
 margin-left ${t} ${Ye} ${r},
 margin-right ${t} ${Ye} ${r};
 `), k("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${t} ${Ye} ${r},
 max-width ${t} ${Ye},
 margin-left ${t} ${Ye},
 margin-right ${t} ${Ye};
 `)];
}
const bh = Hr && "chrome" in window;
Hr && navigator.userAgent.includes("Firefox");
const $a = Hr && navigator.userAgent.includes("Safari") && !bh, Ch = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function yh(t) {
  const {
    textColor2: r,
    textColor3: n,
    textColorDisabled: i,
    primaryColor: a,
    primaryColorHover: o,
    inputColor: l,
    inputColorDisabled: s,
    borderColor: u,
    warningColor: f,
    warningColorHover: x,
    errorColor: d,
    errorColorHover: b,
    borderRadius: D,
    lineHeight: c,
    fontSizeTiny: v,
    fontSizeSmall: C,
    fontSizeMedium: m,
    fontSizeLarge: P,
    heightTiny: A,
    heightSmall: B,
    heightMedium: O,
    heightLarge: _,
    actionColor: p,
    clearColor: w,
    clearColorHover: $,
    clearColorPressed: W,
    placeholderColor: G,
    placeholderColorDisabled: I,
    iconColor: e,
    iconColorDisabled: F,
    iconColorHover: M,
    iconColorPressed: R
  } = t;
  return Object.assign(Object.assign({}, Ch), {
    countTextColorDisabled: i,
    countTextColor: n,
    heightTiny: A,
    heightSmall: B,
    heightMedium: O,
    heightLarge: _,
    fontSizeTiny: v,
    fontSizeSmall: C,
    fontSizeMedium: m,
    fontSizeLarge: P,
    lineHeight: c,
    lineHeightTextarea: c,
    borderRadius: D,
    iconSize: "16px",
    groupLabelColor: p,
    groupLabelTextColor: r,
    textColor: r,
    textColorDisabled: i,
    textDecorationColor: r,
    caretColor: a,
    placeholderColor: G,
    placeholderColorDisabled: I,
    color: l,
    colorDisabled: s,
    colorFocus: l,
    groupLabelBorder: `1px solid ${u}`,
    border: `1px solid ${u}`,
    borderHover: `1px solid ${o}`,
    borderDisabled: `1px solid ${u}`,
    borderFocus: `1px solid ${o}`,
    boxShadowFocus: `0 0 0 2px ${ut(a, {
      alpha: 0.2
    })}`,
    loadingColor: a,
    // warning
    loadingColorWarning: f,
    borderWarning: `1px solid ${f}`,
    borderHoverWarning: `1px solid ${x}`,
    colorFocusWarning: l,
    borderFocusWarning: `1px solid ${x}`,
    boxShadowFocusWarning: `0 0 0 2px ${ut(f, {
      alpha: 0.2
    })}`,
    caretColorWarning: f,
    // error
    loadingColorError: d,
    borderError: `1px solid ${d}`,
    borderHoverError: `1px solid ${b}`,
    colorFocusError: l,
    borderFocusError: `1px solid ${b}`,
    boxShadowFocusError: `0 0 0 2px ${ut(d, {
      alpha: 0.2
    })}`,
    caretColorError: d,
    clearColor: w,
    clearColorHover: $,
    clearColorPressed: W,
    iconColor: e,
    iconColorDisabled: F,
    iconColorHover: M,
    iconColorPressed: R,
    suffixTextColor: r
  });
}
const Ra = {
  name: "Input",
  common: xr,
  self: yh
}, Ta = "n-input";
function Bh(t) {
  let r = 0;
  for (const n of t)
    r++;
  return r;
}
function Ar(t) {
  return t === "" || t == null;
}
function wh(t) {
  const r = q(null);
  function n() {
    const {
      value: o
    } = t;
    if (!(o != null && o.focus)) {
      a();
      return;
    }
    const {
      selectionStart: l,
      selectionEnd: s,
      value: u
    } = o;
    if (l == null || s == null) {
      a();
      return;
    }
    r.value = {
      start: l,
      end: s,
      beforeText: u.slice(0, l),
      afterText: u.slice(s)
    };
  }
  function i() {
    var o;
    const {
      value: l
    } = r, {
      value: s
    } = t;
    if (!l || !s)
      return;
    const {
      value: u
    } = s, {
      start: f,
      beforeText: x,
      afterText: d
    } = l;
    let b = u.length;
    if (u.endsWith(d))
      b = u.length - d.length;
    else if (u.startsWith(x))
      b = x.length;
    else {
      const D = x[f - 1], c = u.indexOf(D, f - 1);
      c !== -1 && (b = c + 1);
    }
    (o = s.setSelectionRange) === null || o === void 0 || o.call(s, b, b);
  }
  function a() {
    r.value = null;
  }
  return Ke(t, a), {
    recordCursor: n,
    restoreCursor: i
  };
}
const Fi = xe({
  name: "InputWordCount",
  setup(t, {
    slots: r
  }) {
    const {
      mergedValueRef: n,
      maxlengthRef: i,
      mergedClsPrefixRef: a,
      countGraphemesRef: o
    } = Ce(Ta), l = z(() => {
      const {
        value: s
      } = n;
      return s === null || Array.isArray(s) ? 0 : (o.value || Bh)(s);
    });
    return () => {
      const {
        value: s
      } = i, {
        value: u
      } = n;
      return g("span", {
        class: `${a.value}-input-word-count`
      }, il(r.default, {
        value: u === null || Array.isArray(u) ? "" : u
      }, () => [s === void 0 ? l.value : `${l.value} / ${s}`]));
    };
  }
}), Dh = j("input", `
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`, [
  // common
  T("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),
  T("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `),
  T("input-el, textarea-el", `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [k("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), k("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), k("&:-webkit-autofill ~", [T("placeholder", "display: none;")])]),
  K("round", [at("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  T("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [k("span", `
 width: 100%;
 display: inline-block;
 `)]),
  K("textarea", [T("placeholder", "overflow: visible;")]),
  at("autosize", "width: 100%;"),
  K("autosize", [T("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  j("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),
  T("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),
  T("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [k("&[type=password]::-ms-reveal", "display: none;"), k("+", [T("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  at("textarea", [T("placeholder", "white-space: nowrap;")]),
  T("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  K("textarea", "width: 100%;", [j("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), K("resizable", [j("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), T("textarea-el, textarea-mirror, placeholder", `
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `), T("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
  // pair
  K("pair", [T("input-el, placeholder", "text-align: center;"), T("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [j("icon", `
 color: var(--n-icon-color);
 `), j("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  K("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [T("border", "border: var(--n-border-disabled);"), T("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), T("placeholder", "color: var(--n-placeholder-color-disabled);"), T("separator", "color: var(--n-text-color-disabled);", [j("icon", `
 color: var(--n-icon-color-disabled);
 `), j("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), j("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), T("suffix, prefix", "color: var(--n-text-color-disabled);", [j("icon", `
 color: var(--n-icon-color-disabled);
 `), j("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  at("disabled", [T("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [k("&:hover", `
 color: var(--n-icon-color-hover);
 `), k("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), k("&:hover", [T("state-border", "border: var(--n-border-hover);")]), K("focus", "background-color: var(--n-color-focus);", [T("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),
  T("border, state-border", `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),
  T("state-border", `
 border-color: #0000;
 z-index: 1;
 `),
  T("prefix", "margin-right: 4px;"),
  T("suffix", `
 margin-left: 4px;
 `),
  T("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [j("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), j("base-clear", `
 font-size: var(--n-icon-size);
 `, [T("placeholder", [j("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), k(">", [j("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), j("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  j("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((t) => K(`${t}-status`, [at("disabled", [j("base-loading", `
 color: var(--n-loading-color-${t})
 `), T("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${t});
 `), T("state-border", `
 border: var(--n-border-${t});
 `), k("&:hover", [T("state-border", `
 border: var(--n-border-hover-${t});
 `)]), k("&:focus", `
 background-color: var(--n-color-focus-${t});
 `, [T("state-border", `
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]), K("focus", `
 background-color: var(--n-color-focus-${t});
 `, [T("state-border", `
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))
]), Ah = j("input", [K("disabled", [T("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]), Fh = Object.assign(Object.assign({}, Ee.props), {
  bordered: {
    type: Boolean,
    default: void 0
  },
  type: {
    type: String,
    default: "text"
  },
  placeholder: [Array, String],
  defaultValue: {
    type: [String, Array],
    default: null
  },
  value: [String, Array],
  disabled: {
    type: Boolean,
    default: void 0
  },
  size: String,
  rows: {
    type: [Number, String],
    default: 3
  },
  round: Boolean,
  minlength: [String, Number],
  maxlength: [String, Number],
  clearable: Boolean,
  autosize: {
    type: [Boolean, Object],
    default: !1
  },
  pair: Boolean,
  separator: String,
  readonly: {
    type: [String, Boolean],
    default: !1
  },
  passivelyActivated: Boolean,
  showPasswordOn: String,
  stateful: {
    type: Boolean,
    default: !0
  },
  autofocus: Boolean,
  inputProps: Object,
  resizable: {
    type: Boolean,
    default: !0
  },
  showCount: Boolean,
  loading: {
    type: Boolean,
    default: void 0
  },
  allowInput: Function,
  renderCount: Function,
  onMousedown: Function,
  onKeydown: Function,
  onKeyup: [Function, Array],
  onInput: [Function, Array],
  onFocus: [Function, Array],
  onBlur: [Function, Array],
  onClick: [Function, Array],
  onChange: [Function, Array],
  onClear: [Function, Array],
  countGraphemes: Function,
  status: String,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  /** private */
  textDecoration: [String, Array],
  attrSize: {
    type: Number,
    default: 20
  },
  onInputBlur: [Function, Array],
  onInputFocus: [Function, Array],
  onDeactivate: [Function, Array],
  onActivate: [Function, Array],
  onWrapperFocus: [Function, Array],
  onWrapperBlur: [Function, Array],
  internalDeactivateOnEnter: Boolean,
  internalForceFocus: Boolean,
  internalLoadingBeforeSuffix: {
    type: Boolean,
    default: !0
  },
  /** deprecated */
  showPasswordToggle: Boolean
}), Eh = xe({
  name: "Input",
  props: Fh,
  setup(t) {
    process.env.NODE_ENV !== "production" && dt(() => {
      t.showPasswordToggle && Ii("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: r,
      mergedBorderedRef: n,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Je(t), o = Ee("Input", "-input", Dh, Ra, t, r);
    $a && kt("-input-safari", Ah, r);
    const l = q(null), s = q(null), u = q(null), f = q(null), x = q(null), d = q(null), b = q(null), D = wh(b), c = q(null), {
      localeRef: v
    } = Yx("Input"), C = q(t.defaultValue), m = We(t, "value"), P = Ml(m, C), A = Ji(t), {
      mergedSizeRef: B,
      mergedDisabledRef: O,
      mergedStatusRef: _
    } = A, p = q(!1), w = q(!1), $ = q(!1), W = q(!1);
    let G = null;
    const I = z(() => {
      const {
        placeholder: h,
        pair: y
      } = t;
      return y ? Array.isArray(h) ? h : h === void 0 ? ["", ""] : [h, h] : h === void 0 ? [v.value.placeholder] : [h];
    }), e = z(() => {
      const {
        value: h
      } = $, {
        value: y
      } = P, {
        value: V
      } = I;
      return !h && (Ar(y) || Array.isArray(y) && Ar(y[0])) && V[0];
    }), F = z(() => {
      const {
        value: h
      } = $, {
        value: y
      } = P, {
        value: V
      } = I;
      return !h && V[1] && (Ar(y) || Array.isArray(y) && Ar(y[1]));
    }), M = rr(() => t.internalForceFocus || p.value), R = rr(() => {
      if (O.value || t.readonly || !t.clearable || !M.value && !w.value)
        return !1;
      const {
        value: h
      } = P, {
        value: y
      } = M;
      return t.pair ? !!(Array.isArray(h) && (h[0] || h[1])) && (w.value || y) : !!h && (w.value || y);
    }), S = z(() => {
      const {
        showPasswordOn: h
      } = t;
      if (h)
        return h;
      if (t.showPasswordToggle) return "click";
    }), L = q(!1), le = z(() => {
      const {
        textDecoration: h
      } = t;
      return h ? Array.isArray(h) ? h.map((y) => ({
        textDecoration: y
      })) : [{
        textDecoration: h
      }] : ["", ""];
    }), te = q(void 0), he = () => {
      var h, y;
      if (t.type === "textarea") {
        const {
          autosize: V
        } = t;
        if (V && (te.value = (y = (h = c.value) === null || h === void 0 ? void 0 : h.$el) === null || y === void 0 ? void 0 : y.offsetWidth), !s.value || typeof V == "boolean") return;
        const {
          paddingTop: oe,
          paddingBottom: de,
          lineHeight: ne
        } = window.getComputedStyle(s.value), tt = Number(oe.slice(0, -2)), rt = Number(de.slice(0, -2)), nt = Number(ne.slice(0, -2)), {
          value: Lt
        } = u;
        if (!Lt) return;
        if (V.minRows) {
          const Nt = Math.max(V.minRows, 1), Ur = `${tt + rt + nt * Nt}px`;
          Lt.style.minHeight = Ur;
        }
        if (V.maxRows) {
          const Nt = `${tt + rt + nt * V.maxRows}px`;
          Lt.style.maxHeight = Nt;
        }
      }
    }, ie = z(() => {
      const {
        maxlength: h
      } = t;
      return h === void 0 ? void 0 : Number(h);
    });
    sr(() => {
      const {
        value: h
      } = P;
      Array.isArray(h) || Be(h);
    });
    const Ae = yn().proxy;
    function be(h, y) {
      const {
        onUpdateValue: V,
        "onUpdate:value": oe,
        onInput: de
      } = t, {
        nTriggerFormInput: ne
      } = A;
      V && ge(V, h, y), oe && ge(oe, h, y), de && ge(de, h, y), C.value = h, ne();
    }
    function Pe(h, y) {
      const {
        onChange: V
      } = t, {
        nTriggerFormChange: oe
      } = A;
      V && ge(V, h, y), C.value = h, oe();
    }
    function X(h) {
      const {
        onBlur: y
      } = t, {
        nTriggerFormBlur: V
      } = A;
      y && ge(y, h), V();
    }
    function Fe(h) {
      const {
        onFocus: y
      } = t, {
        nTriggerFormFocus: V
      } = A;
      y && ge(y, h), V();
    }
    function ze(h) {
      const {
        onClear: y
      } = t;
      y && ge(y, h);
    }
    function Z(h) {
      const {
        onInputBlur: y
      } = t;
      y && ge(y, h);
    }
    function $e(h) {
      const {
        onInputFocus: y
      } = t;
      y && ge(y, h);
    }
    function Oe() {
      const {
        onDeactivate: h
      } = t;
      h && ge(h);
    }
    function Q() {
      const {
        onActivate: h
      } = t;
      h && ge(h);
    }
    function ae(h) {
      const {
        onClick: y
      } = t;
      y && ge(y, h);
    }
    function ee(h) {
      const {
        onWrapperFocus: y
      } = t;
      y && ge(y, h);
    }
    function ke(h) {
      const {
        onWrapperBlur: y
      } = t;
      y && ge(y, h);
    }
    function Qe() {
      $.value = !0;
    }
    function _t(h) {
      $.value = !1, h.target === d.value ? Ge(h, 1) : Ge(h, 0);
    }
    function Ge(h, y = 0, V = "input") {
      const oe = h.target.value;
      if (Be(oe), h instanceof InputEvent && !h.isComposing && ($.value = !1), t.type === "textarea") {
        const {
          value: ne
        } = c;
        ne && ne.syncUnifiedContainer();
      }
      if (G = oe, $.value) return;
      D.recordCursor();
      const de = It(oe);
      if (de)
        if (!t.pair)
          V === "input" ? be(oe, {
            source: y
          }) : Pe(oe, {
            source: y
          });
        else {
          let {
            value: ne
          } = P;
          Array.isArray(ne) ? ne = [ne[0], ne[1]] : ne = ["", ""], ne[y] = oe, V === "input" ? be(ne, {
            source: y
          }) : Pe(ne, {
            source: y
          });
        }
      Ae.$forceUpdate(), de || tn(D.restoreCursor);
    }
    function It(h) {
      const {
        countGraphemes: y,
        maxlength: V,
        minlength: oe
      } = t;
      if (y) {
        let ne;
        if (V !== void 0 && (ne === void 0 && (ne = y(h)), ne > Number(V)) || oe !== void 0 && (ne === void 0 && (ne = y(h)), ne < Number(V)))
          return !1;
      }
      const {
        allowInput: de
      } = t;
      return typeof de == "function" ? de(h) : !0;
    }
    function se(h) {
      Z(h), h.relatedTarget === l.value && Oe(), h.relatedTarget !== null && (h.relatedTarget === x.value || h.relatedTarget === d.value || h.relatedTarget === s.value) || (W.value = !1), et(h, "blur"), b.value = null;
    }
    function pe(h, y) {
      $e(h), p.value = !0, W.value = !0, Q(), et(h, "focus"), y === 0 ? b.value = x.value : y === 1 ? b.value = d.value : y === 2 && (b.value = s.value);
    }
    function je(h) {
      t.passivelyActivated && (ke(h), et(h, "blur"));
    }
    function Vr(h) {
      t.passivelyActivated && (p.value = !0, ee(h), et(h, "focus"));
    }
    function et(h, y) {
      h.relatedTarget !== null && (h.relatedTarget === x.value || h.relatedTarget === d.value || h.relatedTarget === s.value || h.relatedTarget === l.value) || (y === "focus" ? (Fe(h), p.value = !0) : y === "blur" && (X(h), p.value = !1));
    }
    function Le(h, y) {
      Ge(h, y, "change");
    }
    function dr(h) {
      ae(h);
    }
    function qr(h) {
      ze(h), Ht();
    }
    function Ht() {
      t.pair ? (be(["", ""], {
        source: "clear"
      }), Pe(["", ""], {
        source: "clear"
      })) : (be("", {
        source: "clear"
      }), Pe("", {
        source: "clear"
      }));
    }
    function cr(h) {
      const {
        onMousedown: y
      } = t;
      y && y(h);
      const {
        tagName: V
      } = h.target;
      if (V !== "INPUT" && V !== "TEXTAREA") {
        if (t.resizable) {
          const {
            value: oe
          } = l;
          if (oe) {
            const {
              left: de,
              top: ne,
              width: tt,
              height: rt
            } = oe.getBoundingClientRect(), nt = 14;
            if (de + tt - nt < h.clientX && h.clientX < de + tt && ne + rt - nt < h.clientY && h.clientY < ne + rt)
              return;
          }
        }
        h.preventDefault(), p.value || Y();
      }
    }
    function Gr() {
      var h;
      w.value = !0, t.type === "textarea" && ((h = c.value) === null || h === void 0 || h.handleMouseEnterWrapper());
    }
    function Wt() {
      var h;
      w.value = !1, t.type === "textarea" && ((h = c.value) === null || h === void 0 || h.handleMouseLeaveWrapper());
    }
    function jt() {
      O.value || S.value === "click" && (L.value = !L.value);
    }
    function pr(h) {
      if (O.value) return;
      h.preventDefault();
      const y = (oe) => {
        oe.preventDefault(), Ne("mouseup", document, y);
      };
      if (xt("mouseup", document, y), S.value !== "mousedown") return;
      L.value = !0;
      const V = () => {
        L.value = !1, Ne("mouseup", document, V);
      };
      xt("mouseup", document, V);
    }
    function Ue(h) {
      t.onKeyup && ge(t.onKeyup, h);
    }
    function On(h) {
      switch (t.onKeydown && ge(t.onKeydown, h), h.key) {
        case "Escape":
          H();
          break;
        case "Enter":
          E(h);
          break;
      }
    }
    function E(h) {
      var y, V;
      if (t.passivelyActivated) {
        const {
          value: oe
        } = W;
        if (oe) {
          t.internalDeactivateOnEnter && H();
          return;
        }
        h.preventDefault(), t.type === "textarea" ? (y = s.value) === null || y === void 0 || y.focus() : (V = x.value) === null || V === void 0 || V.focus();
      }
    }
    function H() {
      t.passivelyActivated && (W.value = !1, tn(() => {
        var h;
        (h = l.value) === null || h === void 0 || h.focus();
      }));
    }
    function Y() {
      var h, y, V;
      O.value || (t.passivelyActivated ? (h = l.value) === null || h === void 0 || h.focus() : ((y = s.value) === null || y === void 0 || y.focus(), (V = x.value) === null || V === void 0 || V.focus()));
    }
    function re() {
      var h;
      !((h = l.value) === null || h === void 0) && h.contains(document.activeElement) && document.activeElement.blur();
    }
    function ce() {
      var h, y;
      (h = s.value) === null || h === void 0 || h.select(), (y = x.value) === null || y === void 0 || y.select();
    }
    function ye() {
      O.value || (s.value ? s.value.focus() : x.value && x.value.focus());
    }
    function Re() {
      const {
        value: h
      } = l;
      h != null && h.contains(document.activeElement) && h !== document.activeElement && H();
    }
    function ue(h) {
      if (t.type === "textarea") {
        const {
          value: y
        } = s;
        y == null || y.scrollTo(h);
      } else {
        const {
          value: y
        } = x;
        y == null || y.scrollTo(h);
      }
    }
    function Be(h) {
      const {
        type: y,
        pair: V,
        autosize: oe
      } = t;
      if (!V && oe)
        if (y === "textarea") {
          const {
            value: de
          } = u;
          de && (de.textContent = `${h ?? ""}\r
`);
        } else {
          const {
            value: de
          } = f;
          de && (h ? de.textContent = h : de.innerHTML = "&nbsp;");
        }
    }
    function Me() {
      he();
    }
    const vr = q({
      top: "0"
    });
    function ja(h) {
      var y;
      const {
        scrollTop: V
      } = h.target;
      vr.value.top = `${-V}px`, (y = c.value) === null || y === void 0 || y.syncUnifiedContainer();
    }
    let mr = null;
    dt(() => {
      const {
        autosize: h,
        type: y
      } = t;
      h && y === "textarea" ? mr = Ke(P, (V) => {
        !Array.isArray(V) && V !== G && Be(V);
      }) : mr == null || mr();
    });
    let gr = null;
    dt(() => {
      t.type === "textarea" ? gr = Ke(P, (h) => {
        var y;
        !Array.isArray(h) && h !== G && ((y = c.value) === null || y === void 0 || y.syncUnifiedContainer());
      }) : gr == null || gr();
    }), Dt(Ta, {
      mergedValueRef: P,
      maxlengthRef: ie,
      mergedClsPrefixRef: r,
      countGraphemesRef: We(t, "countGraphemes")
    });
    const La = {
      wrapperElRef: l,
      inputElRef: x,
      textareaElRef: s,
      isCompositing: $,
      clear: Ht,
      focus: Y,
      blur: re,
      select: ce,
      deactivate: Re,
      activate: ye,
      scrollTo: ue
    }, Na = Tn("Input", a, r), kn = z(() => {
      const {
        value: h
      } = B, {
        common: {
          cubicBezierEaseInOut: y
        },
        self: {
          color: V,
          borderRadius: oe,
          textColor: de,
          caretColor: ne,
          caretColorError: tt,
          caretColorWarning: rt,
          textDecorationColor: nt,
          border: Lt,
          borderDisabled: Nt,
          borderHover: Ur,
          borderFocus: Va,
          placeholderColor: qa,
          placeholderColorDisabled: Ga,
          lineHeightTextarea: Ua,
          colorDisabled: Ya,
          colorFocus: Xa,
          textColorDisabled: Ka,
          boxShadowFocus: Za,
          iconSize: Ja,
          colorFocusWarning: Qa,
          boxShadowFocusWarning: eo,
          borderWarning: to,
          borderFocusWarning: ro,
          borderHoverWarning: no,
          colorFocusError: io,
          boxShadowFocusError: ao,
          borderError: oo,
          borderFocusError: lo,
          borderHoverError: so,
          clearSize: uo,
          clearColor: fo,
          clearColorHover: xo,
          clearColorPressed: ho,
          iconColor: co,
          iconColorDisabled: po,
          suffixTextColor: vo,
          countTextColor: mo,
          countTextColorDisabled: go,
          iconColorHover: bo,
          iconColorPressed: Co,
          loadingColor: yo,
          loadingColorError: Bo,
          loadingColorWarning: wo,
          [U("padding", h)]: Do,
          [U("fontSize", h)]: Ao,
          [U("height", h)]: Fo
        }
      } = o.value, {
        left: Eo,
        right: So
      } = _i(Do);
      return {
        "--n-bezier": y,
        "--n-count-text-color": mo,
        "--n-count-text-color-disabled": go,
        "--n-color": V,
        "--n-font-size": Ao,
        "--n-border-radius": oe,
        "--n-height": Fo,
        "--n-padding-left": Eo,
        "--n-padding-right": So,
        "--n-text-color": de,
        "--n-caret-color": ne,
        "--n-text-decoration-color": nt,
        "--n-border": Lt,
        "--n-border-disabled": Nt,
        "--n-border-hover": Ur,
        "--n-border-focus": Va,
        "--n-placeholder-color": qa,
        "--n-placeholder-color-disabled": Ga,
        "--n-icon-size": Ja,
        "--n-line-height-textarea": Ua,
        "--n-color-disabled": Ya,
        "--n-color-focus": Xa,
        "--n-text-color-disabled": Ka,
        "--n-box-shadow-focus": Za,
        "--n-loading-color": yo,
        // form warning
        "--n-caret-color-warning": rt,
        "--n-color-focus-warning": Qa,
        "--n-box-shadow-focus-warning": eo,
        "--n-border-warning": to,
        "--n-border-focus-warning": ro,
        "--n-border-hover-warning": no,
        "--n-loading-color-warning": wo,
        // form error
        "--n-caret-color-error": tt,
        "--n-color-focus-error": io,
        "--n-box-shadow-focus-error": ao,
        "--n-border-error": oo,
        "--n-border-focus-error": lo,
        "--n-border-hover-error": so,
        "--n-loading-color-error": Bo,
        // clear-button
        "--n-clear-color": fo,
        "--n-clear-size": uo,
        "--n-clear-color-hover": xo,
        "--n-clear-color-pressed": ho,
        "--n-icon-color": co,
        "--n-icon-color-hover": bo,
        "--n-icon-color-pressed": Co,
        "--n-icon-color-disabled": po,
        "--n-suffix-text-color": vo
      };
    }), Ct = i ? Mt("input", z(() => {
      const {
        value: h
      } = B;
      return h[0];
    }), kn, t) : void 0;
    return Object.assign(Object.assign({}, La), {
      // DOM ref
      wrapperElRef: l,
      inputElRef: x,
      inputMirrorElRef: f,
      inputEl2Ref: d,
      textareaElRef: s,
      textareaMirrorElRef: u,
      textareaScrollbarInstRef: c,
      // value
      rtlEnabled: Na,
      uncontrolledValue: C,
      mergedValue: P,
      passwordVisible: L,
      mergedPlaceholder: I,
      showPlaceholder1: e,
      showPlaceholder2: F,
      mergedFocus: M,
      isComposing: $,
      activated: W,
      showClearButton: R,
      mergedSize: B,
      mergedDisabled: O,
      textDecorationStyle: le,
      mergedClsPrefix: r,
      mergedBordered: n,
      mergedShowPasswordOn: S,
      placeholderStyle: vr,
      mergedStatus: _,
      textAreaScrollContainerWidth: te,
      // methods
      handleTextAreaScroll: ja,
      handleCompositionStart: Qe,
      handleCompositionEnd: _t,
      handleInput: Ge,
      handleInputBlur: se,
      handleInputFocus: pe,
      handleWrapperBlur: je,
      handleWrapperFocus: Vr,
      handleMouseEnter: Gr,
      handleMouseLeave: Wt,
      handleMouseDown: cr,
      handleChange: Le,
      handleClick: dr,
      handleClear: qr,
      handlePasswordToggleClick: jt,
      handlePasswordToggleMousedown: pr,
      handleWrapperKeydown: On,
      handleWrapperKeyup: Ue,
      handleTextAreaMirrorResize: Me,
      getTextareaScrollContainer: () => s.value,
      mergedTheme: o,
      cssVars: i ? void 0 : kn,
      themeClass: Ct == null ? void 0 : Ct.themeClass,
      onRender: Ct == null ? void 0 : Ct.onRender
    });
  },
  render() {
    var t, r;
    const {
      mergedClsPrefix: n,
      mergedStatus: i,
      themeClass: a,
      type: o,
      countGraphemes: l,
      onRender: s
    } = this, u = this.$slots;
    return s == null || s(), g("div", {
      ref: "wrapperElRef",
      class: [`${n}-input`, a, i && `${n}-input--${i}-status`, {
        [`${n}-input--rtl`]: this.rtlEnabled,
        [`${n}-input--disabled`]: this.mergedDisabled,
        [`${n}-input--textarea`]: o === "textarea",
        [`${n}-input--resizable`]: this.resizable && !this.autosize,
        [`${n}-input--autosize`]: this.autosize,
        [`${n}-input--round`]: this.round && o !== "textarea",
        [`${n}-input--pair`]: this.pair,
        [`${n}-input--focus`]: this.mergedFocus,
        [`${n}-input--stateful`]: this.stateful
      }],
      style: this.cssVars,
      tabindex: !this.mergedDisabled && this.passivelyActivated && !this.activated ? 0 : void 0,
      onFocus: this.handleWrapperFocus,
      onBlur: this.handleWrapperBlur,
      onClick: this.handleClick,
      onMousedown: this.handleMouseDown,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onCompositionstart: this.handleCompositionStart,
      onCompositionend: this.handleCompositionEnd,
      onKeyup: this.handleWrapperKeyup,
      onKeydown: this.handleWrapperKeydown
    }, g("div", {
      class: `${n}-input-wrapper`
    }, ft(u.prefix, (f) => f && g("div", {
      class: `${n}-input__prefix`
    }, f)), o === "textarea" ? g(dh, {
      ref: "textareaScrollbarInstRef",
      class: `${n}-input__textarea`,
      container: this.getTextareaScrollContainer,
      triggerDisplayManually: !0,
      useUnifiedContainer: !0,
      internalHoistYRail: !0
    }, {
      default: () => {
        var f, x;
        const {
          textAreaScrollContainerWidth: d
        } = this, b = {
          width: this.autosize && d && `${d}px`
        };
        return g(_r, null, g("textarea", Object.assign({}, this.inputProps, {
          ref: "textareaElRef",
          class: [`${n}-input__textarea-el`, (f = this.inputProps) === null || f === void 0 ? void 0 : f.class],
          autofocus: this.autofocus,
          rows: Number(this.rows),
          placeholder: this.placeholder,
          value: this.mergedValue,
          disabled: this.mergedDisabled,
          maxlength: l ? void 0 : this.maxlength,
          minlength: l ? void 0 : this.minlength,
          readonly: this.readonly,
          tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
          style: [this.textDecorationStyle[0], (x = this.inputProps) === null || x === void 0 ? void 0 : x.style, b],
          onBlur: this.handleInputBlur,
          onFocus: (D) => {
            this.handleInputFocus(D, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? g("div", {
          class: `${n}-input__placeholder`,
          style: [this.placeholderStyle, b],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? g(on, {
          onResize: this.handleTextAreaMirrorResize
        }, {
          default: () => g("div", {
            ref: "textareaMirrorElRef",
            class: `${n}-input__textarea-mirror`,
            key: "mirror"
          })
        }) : null);
      }
    }) : g("div", {
      class: `${n}-input__input`
    }, g("input", Object.assign({
      type: o === "password" && this.mergedShowPasswordOn && this.passwordVisible ? "text" : o
    }, this.inputProps, {
      ref: "inputElRef",
      class: [`${n}-input__input-el`, (t = this.inputProps) === null || t === void 0 ? void 0 : t.class],
      style: [this.textDecorationStyle[0], (r = this.inputProps) === null || r === void 0 ? void 0 : r.style],
      tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
      placeholder: this.mergedPlaceholder[0],
      disabled: this.mergedDisabled,
      maxlength: l ? void 0 : this.maxlength,
      minlength: l ? void 0 : this.minlength,
      value: Array.isArray(this.mergedValue) ? this.mergedValue[0] : this.mergedValue,
      readonly: this.readonly,
      autofocus: this.autofocus,
      size: this.attrSize,
      onBlur: this.handleInputBlur,
      onFocus: (f) => {
        this.handleInputFocus(f, 0);
      },
      onInput: (f) => {
        this.handleInput(f, 0);
      },
      onChange: (f) => {
        this.handleChange(f, 0);
      }
    })), this.showPlaceholder1 ? g("div", {
      class: `${n}-input__placeholder`
    }, g("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? g("div", {
      class: `${n}-input__input-mirror`,
      key: "mirror",
      ref: "inputMirrorElRef"
    }, " ") : null), !this.pair && ft(u.suffix, (f) => f || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? g("div", {
      class: `${n}-input__suffix`
    }, [ft(u["clear-icon-placeholder"], (x) => (this.clearable || x) && g(cn, {
      clsPrefix: n,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => x,
      icon: () => {
        var d, b;
        return (b = (d = this.$slots)["clear-icon"]) === null || b === void 0 ? void 0 : b.call(d);
      }
    })), this.internalLoadingBeforeSuffix ? null : f, this.loading !== void 0 ? g(mh, {
      clsPrefix: n,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? f : null, this.showCount && this.type !== "textarea" ? g(Fi, null, {
      default: (x) => {
        var d;
        return (d = u.count) === null || d === void 0 ? void 0 : d.call(u, x);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? g("div", {
      class: `${n}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? Xt(u["password-visible-icon"], () => [g(kr, {
      clsPrefix: n
    }, {
      default: () => g(Kx, null)
    })]) : Xt(u["password-invisible-icon"], () => [g(kr, {
      clsPrefix: n
    }, {
      default: () => g(Zx, null)
    })])) : null]) : null)), this.pair ? g("span", {
      class: `${n}-input__separator`
    }, Xt(u.separator, () => [this.separator])) : null, this.pair ? g("div", {
      class: `${n}-input-wrapper`
    }, g("div", {
      class: `${n}-input__input`
    }, g("input", {
      ref: "inputEl2Ref",
      type: this.type,
      class: `${n}-input__input-el`,
      tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
      placeholder: this.mergedPlaceholder[1],
      disabled: this.mergedDisabled,
      maxlength: l ? void 0 : this.maxlength,
      minlength: l ? void 0 : this.minlength,
      value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : void 0,
      readonly: this.readonly,
      style: this.textDecorationStyle[1],
      onBlur: this.handleInputBlur,
      onFocus: (f) => {
        this.handleInputFocus(f, 1);
      },
      onInput: (f) => {
        this.handleInput(f, 1);
      },
      onChange: (f) => {
        this.handleChange(f, 1);
      }
    }), this.showPlaceholder2 ? g("div", {
      class: `${n}-input__placeholder`
    }, g("span", null, this.mergedPlaceholder[1])) : null), ft(u.suffix, (f) => (this.clearable || f) && g("div", {
      class: `${n}-input__suffix`
    }, [this.clearable && g(cn, {
      clsPrefix: n,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      icon: () => {
        var x;
        return (x = u["clear-icon"]) === null || x === void 0 ? void 0 : x.call(u);
      },
      placeholder: () => {
        var x;
        return (x = u["clear-icon-placeholder"]) === null || x === void 0 ? void 0 : x.call(u);
      }
    }), f]))) : null, this.mergedBordered ? g("div", {
      class: `${n}-input__border`
    }) : null, this.mergedBordered ? g("div", {
      class: `${n}-input__state-border`
    }) : null, this.showCount && o === "textarea" ? g(Fi, null, {
      default: (f) => {
        var x;
        const {
          renderCount: d
        } = this;
        return d ? d(f) : (x = u.count) === null || x === void 0 ? void 0 : x.call(u, f);
      }
    }) : null);
  }
}), Sh = j("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [k(">", [j("input", [k("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), k("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), j("button", [k("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [T("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), k("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [T("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), k("*", [k("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [k(">", [j("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), j("base-selection", [j("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), j("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), T("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), k("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [k(">", [j("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), j("base-selection", [j("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), j("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), T("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), Ph = {}, $h = xe({
  name: "InputGroup",
  props: Ph,
  setup(t) {
    const {
      mergedClsPrefixRef: r
    } = Je(t);
    return kt("-input-group", Sh, r), {
      mergedClsPrefix: r
    };
  },
  render() {
    const {
      mergedClsPrefix: t
    } = this;
    return g("div", {
      class: `${t}-input-group`
    }, this.$slots);
  }
}), Rh = j("input-group-label", `
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 box-sizing: border-box;
 padding: 0 12px;
 display: inline-block;
 border-radius: var(--n-border-radius);
 background-color: var(--n-group-label-color);
 color: var(--n-group-label-text-color);
 font-size: var(--n-font-size);
 line-height: var(--n-height);
 height: var(--n-height);
 flex-shrink: 0;
 white-space: nowrap;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [T("border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]), Th = Object.assign(Object.assign({}, Ee.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
}), zh = xe({
  name: "InputGroupLabel",
  props: Th,
  setup(t) {
    const {
      mergedBorderedRef: r,
      mergedClsPrefixRef: n,
      inlineThemeDisabled: i
    } = Je(t), a = Ee("Input", "-input-group-label", Rh, Ra, t, n), o = z(() => {
      const {
        size: s
      } = t, {
        common: {
          cubicBezierEaseInOut: u
        },
        self: {
          groupLabelColor: f,
          borderRadius: x,
          groupLabelTextColor: d,
          lineHeight: b,
          groupLabelBorder: D,
          [U("fontSize", s)]: c,
          [U("height", s)]: v
        }
      } = a.value;
      return {
        "--n-bezier": u,
        "--n-group-label-color": f,
        "--n-group-label-border": D,
        "--n-border-radius": x,
        "--n-group-label-text-color": d,
        "--n-font-size": c,
        "--n-line-height": b,
        "--n-height": v
      };
    }), l = i ? Mt("input-group-label", z(() => t.size[0]), o, t) : void 0;
    return {
      mergedClsPrefix: n,
      mergedBordered: r,
      cssVars: i ? void 0 : o,
      themeClass: l == null ? void 0 : l.themeClass,
      onRender: l == null ? void 0 : l.onRender
    };
  },
  render() {
    var t, r, n;
    const {
      mergedClsPrefix: i
    } = this;
    return (t = this.onRender) === null || t === void 0 || t.call(this), g("div", {
      class: [`${i}-input-group-label`, this.themeClass],
      style: this.cssVars
    }, (n = (r = this.$slots).default) === null || n === void 0 ? void 0 : n.call(r), this.mergedBordered ? g("div", {
      class: `${i}-input-group-label__border`
    }) : null);
  }
});
function it(t) {
  return Dn(t, [255, 255, 255, 0.16]);
}
function Fr(t) {
  return Dn(t, [0, 0, 0, 0.12]);
}
const Oh = "n-button-group", kh = {
  paddingTiny: "0 6px",
  paddingSmall: "0 10px",
  paddingMedium: "0 14px",
  paddingLarge: "0 18px",
  paddingRoundTiny: "0 10px",
  paddingRoundSmall: "0 14px",
  paddingRoundMedium: "0 18px",
  paddingRoundLarge: "0 22px",
  iconMarginTiny: "6px",
  iconMarginSmall: "6px",
  iconMarginMedium: "6px",
  iconMarginLarge: "6px",
  iconSizeTiny: "14px",
  iconSizeSmall: "18px",
  iconSizeMedium: "18px",
  iconSizeLarge: "20px",
  rippleDuration: ".6s"
};
function Mh(t) {
  const {
    heightTiny: r,
    heightSmall: n,
    heightMedium: i,
    heightLarge: a,
    borderRadius: o,
    fontSizeTiny: l,
    fontSizeSmall: s,
    fontSizeMedium: u,
    fontSizeLarge: f,
    opacityDisabled: x,
    textColor2: d,
    textColor3: b,
    primaryColorHover: D,
    primaryColorPressed: c,
    borderColor: v,
    primaryColor: C,
    baseColor: m,
    infoColor: P,
    infoColorHover: A,
    infoColorPressed: B,
    successColor: O,
    successColorHover: _,
    successColorPressed: p,
    warningColor: w,
    warningColorHover: $,
    warningColorPressed: W,
    errorColor: G,
    errorColorHover: I,
    errorColorPressed: e,
    fontWeight: F,
    buttonColor2: M,
    buttonColor2Hover: R,
    buttonColor2Pressed: S,
    fontWeightStrong: L
  } = t;
  return Object.assign(Object.assign({}, kh), {
    heightTiny: r,
    heightSmall: n,
    heightMedium: i,
    heightLarge: a,
    borderRadiusTiny: o,
    borderRadiusSmall: o,
    borderRadiusMedium: o,
    borderRadiusLarge: o,
    fontSizeTiny: l,
    fontSizeSmall: s,
    fontSizeMedium: u,
    fontSizeLarge: f,
    opacityDisabled: x,
    // secondary
    colorOpacitySecondary: "0.16",
    colorOpacitySecondaryHover: "0.22",
    colorOpacitySecondaryPressed: "0.28",
    colorSecondary: M,
    colorSecondaryHover: R,
    colorSecondaryPressed: S,
    // tertiary
    colorTertiary: M,
    colorTertiaryHover: R,
    colorTertiaryPressed: S,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: R,
    colorQuaternaryPressed: S,
    // default type
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: d,
    textColorTertiary: b,
    textColorHover: D,
    textColorPressed: c,
    textColorFocus: D,
    textColorDisabled: d,
    textColorText: d,
    textColorTextHover: D,
    textColorTextPressed: c,
    textColorTextFocus: D,
    textColorTextDisabled: d,
    textColorGhost: d,
    textColorGhostHover: D,
    textColorGhostPressed: c,
    textColorGhostFocus: D,
    textColorGhostDisabled: d,
    border: `1px solid ${v}`,
    borderHover: `1px solid ${D}`,
    borderPressed: `1px solid ${c}`,
    borderFocus: `1px solid ${D}`,
    borderDisabled: `1px solid ${v}`,
    rippleColor: C,
    // primary
    colorPrimary: C,
    colorHoverPrimary: D,
    colorPressedPrimary: c,
    colorFocusPrimary: D,
    colorDisabledPrimary: C,
    textColorPrimary: m,
    textColorHoverPrimary: m,
    textColorPressedPrimary: m,
    textColorFocusPrimary: m,
    textColorDisabledPrimary: m,
    textColorTextPrimary: C,
    textColorTextHoverPrimary: D,
    textColorTextPressedPrimary: c,
    textColorTextFocusPrimary: D,
    textColorTextDisabledPrimary: d,
    textColorGhostPrimary: C,
    textColorGhostHoverPrimary: D,
    textColorGhostPressedPrimary: c,
    textColorGhostFocusPrimary: D,
    textColorGhostDisabledPrimary: C,
    borderPrimary: `1px solid ${C}`,
    borderHoverPrimary: `1px solid ${D}`,
    borderPressedPrimary: `1px solid ${c}`,
    borderFocusPrimary: `1px solid ${D}`,
    borderDisabledPrimary: `1px solid ${C}`,
    rippleColorPrimary: C,
    // info
    colorInfo: P,
    colorHoverInfo: A,
    colorPressedInfo: B,
    colorFocusInfo: A,
    colorDisabledInfo: P,
    textColorInfo: m,
    textColorHoverInfo: m,
    textColorPressedInfo: m,
    textColorFocusInfo: m,
    textColorDisabledInfo: m,
    textColorTextInfo: P,
    textColorTextHoverInfo: A,
    textColorTextPressedInfo: B,
    textColorTextFocusInfo: A,
    textColorTextDisabledInfo: d,
    textColorGhostInfo: P,
    textColorGhostHoverInfo: A,
    textColorGhostPressedInfo: B,
    textColorGhostFocusInfo: A,
    textColorGhostDisabledInfo: P,
    borderInfo: `1px solid ${P}`,
    borderHoverInfo: `1px solid ${A}`,
    borderPressedInfo: `1px solid ${B}`,
    borderFocusInfo: `1px solid ${A}`,
    borderDisabledInfo: `1px solid ${P}`,
    rippleColorInfo: P,
    // success
    colorSuccess: O,
    colorHoverSuccess: _,
    colorPressedSuccess: p,
    colorFocusSuccess: _,
    colorDisabledSuccess: O,
    textColorSuccess: m,
    textColorHoverSuccess: m,
    textColorPressedSuccess: m,
    textColorFocusSuccess: m,
    textColorDisabledSuccess: m,
    textColorTextSuccess: O,
    textColorTextHoverSuccess: _,
    textColorTextPressedSuccess: p,
    textColorTextFocusSuccess: _,
    textColorTextDisabledSuccess: d,
    textColorGhostSuccess: O,
    textColorGhostHoverSuccess: _,
    textColorGhostPressedSuccess: p,
    textColorGhostFocusSuccess: _,
    textColorGhostDisabledSuccess: O,
    borderSuccess: `1px solid ${O}`,
    borderHoverSuccess: `1px solid ${_}`,
    borderPressedSuccess: `1px solid ${p}`,
    borderFocusSuccess: `1px solid ${_}`,
    borderDisabledSuccess: `1px solid ${O}`,
    rippleColorSuccess: O,
    // warning
    colorWarning: w,
    colorHoverWarning: $,
    colorPressedWarning: W,
    colorFocusWarning: $,
    colorDisabledWarning: w,
    textColorWarning: m,
    textColorHoverWarning: m,
    textColorPressedWarning: m,
    textColorFocusWarning: m,
    textColorDisabledWarning: m,
    textColorTextWarning: w,
    textColorTextHoverWarning: $,
    textColorTextPressedWarning: W,
    textColorTextFocusWarning: $,
    textColorTextDisabledWarning: d,
    textColorGhostWarning: w,
    textColorGhostHoverWarning: $,
    textColorGhostPressedWarning: W,
    textColorGhostFocusWarning: $,
    textColorGhostDisabledWarning: w,
    borderWarning: `1px solid ${w}`,
    borderHoverWarning: `1px solid ${$}`,
    borderPressedWarning: `1px solid ${W}`,
    borderFocusWarning: `1px solid ${$}`,
    borderDisabledWarning: `1px solid ${w}`,
    rippleColorWarning: w,
    // error
    colorError: G,
    colorHoverError: I,
    colorPressedError: e,
    colorFocusError: I,
    colorDisabledError: G,
    textColorError: m,
    textColorHoverError: m,
    textColorPressedError: m,
    textColorFocusError: m,
    textColorDisabledError: m,
    textColorTextError: G,
    textColorTextHoverError: I,
    textColorTextPressedError: e,
    textColorTextFocusError: I,
    textColorTextDisabledError: d,
    textColorGhostError: G,
    textColorGhostHoverError: I,
    textColorGhostPressedError: e,
    textColorGhostFocusError: I,
    textColorGhostDisabledError: G,
    borderError: `1px solid ${G}`,
    borderHoverError: `1px solid ${I}`,
    borderPressedError: `1px solid ${e}`,
    borderFocusError: `1px solid ${I}`,
    borderDisabledError: `1px solid ${G}`,
    rippleColorError: G,
    waveOpacity: "0.6",
    fontWeight: F,
    fontWeightStrong: L
  });
}
const _h = {
  name: "Button",
  common: xr,
  self: Mh
}, Ih = k([j("button", `
 margin: 0;
 font-weight: var(--n-font-weight);
 line-height: 1;
 font-family: inherit;
 padding: var(--n-padding);
 height: var(--n-height);
 font-size: var(--n-font-size);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 width: var(--n-width);
 white-space: nowrap;
 outline: none;
 position: relative;
 z-index: auto;
 border: none;
 display: inline-flex;
 flex-wrap: nowrap;
 flex-shrink: 0;
 align-items: center;
 justify-content: center;
 user-select: none;
 -webkit-user-select: none;
 text-align: center;
 cursor: pointer;
 text-decoration: none;
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [K("color", [T("border", {
  borderColor: "var(--n-border-color)"
}), K("disabled", [T("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), at("disabled", [k("&:focus", [T("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), k("&:hover", [T("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), k("&:active", [T("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), K("pressed", [T("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), K("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [T("border", {
  border: "var(--n-border-disabled)"
})]), at("disabled", [k("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [T("state-border", {
  border: "var(--n-border-focus)"
})]), k("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [T("state-border", {
  border: "var(--n-border-hover)"
})]), k("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [T("state-border", {
  border: "var(--n-border-pressed)"
})]), K("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [T("state-border", {
  border: "var(--n-border-pressed)"
})])]), K("loading", "cursor: wait;"), j("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [K("active", {
  zIndex: 1,
  animationName: "button-wave-spread, button-wave-opacity"
})]), Hr && "MozBoxSizing" in document.createElement("div").style ? k("&::moz-focus-inner", {
  border: 0
}) : null, T("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), T("border", {
  border: "var(--n-border)"
}), T("state-border", {
  border: "var(--n-border)",
  borderColor: "#0000",
  zIndex: 1
}), T("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [j("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [Mr({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), gh()]), T("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [k("~", [T("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), K("block", `
 display: flex;
 width: 100%;
 `), K("dashed", [T("border, state-border", {
  borderStyle: "dashed !important"
})]), K("disabled", {
  cursor: "not-allowed",
  opacity: "var(--n-opacity-disabled)"
})]), k("@keyframes button-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
  }
}), k("@keyframes button-wave-opacity", {
  from: {
    opacity: "var(--n-wave-opacity)"
  },
  to: {
    opacity: 0
  }
})]), Hh = Object.assign(Object.assign({}, Ee.props), {
  color: String,
  textColor: String,
  text: Boolean,
  block: Boolean,
  loading: Boolean,
  disabled: Boolean,
  circle: Boolean,
  size: String,
  ghost: Boolean,
  round: Boolean,
  secondary: Boolean,
  tertiary: Boolean,
  quaternary: Boolean,
  strong: Boolean,
  focusable: {
    type: Boolean,
    default: !0
  },
  keyboard: {
    type: Boolean,
    default: !0
  },
  tag: {
    type: String,
    default: "button"
  },
  type: {
    type: String,
    default: "default"
  },
  dashed: Boolean,
  renderIcon: Function,
  iconPlacement: {
    type: String,
    default: "left"
  },
  attrType: {
    type: String,
    default: "button"
  },
  bordered: {
    type: Boolean,
    default: !0
  },
  onClick: [Function, Array],
  nativeFocusBehavior: {
    type: Boolean,
    default: !$a
  }
}), Wh = xe({
  name: "Button",
  props: Hh,
  setup(t) {
    process.env.NODE_ENV !== "production" && dt(() => {
      const {
        dashed: B,
        ghost: O,
        text: _,
        secondary: p,
        tertiary: w,
        quaternary: $
      } = t;
      (B || O || _) && (p || w || $) && Ii("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const r = q(null), n = q(null), i = q(!1), a = rr(() => !t.quaternary && !t.tertiary && !t.secondary && !t.text && (!t.color || t.ghost || t.dashed) && t.bordered), o = Ce(Oh, {}), {
      mergedSizeRef: l
    } = Ji({}, {
      defaultSize: "medium",
      mergedSize: (B) => {
        const {
          size: O
        } = t;
        if (O) return O;
        const {
          size: _
        } = o;
        if (_) return _;
        const {
          mergedSize: p
        } = B || {};
        return p ? p.value : "medium";
      }
    }), s = z(() => t.focusable && !t.disabled), u = (B) => {
      var O;
      s.value || B.preventDefault(), !t.nativeFocusBehavior && (B.preventDefault(), !t.disabled && s.value && ((O = r.value) === null || O === void 0 || O.focus({
        preventScroll: !0
      })));
    }, f = (B) => {
      var O;
      if (!t.disabled && !t.loading) {
        const {
          onClick: _
        } = t;
        _ && ge(_, B), t.text || (O = n.value) === null || O === void 0 || O.play();
      }
    }, x = (B) => {
      switch (B.key) {
        case "Enter":
          if (!t.keyboard)
            return;
          i.value = !1;
      }
    }, d = (B) => {
      switch (B.key) {
        case "Enter":
          if (!t.keyboard || t.loading) {
            B.preventDefault();
            return;
          }
          i.value = !0;
      }
    }, b = () => {
      i.value = !1;
    }, {
      inlineThemeDisabled: D,
      mergedClsPrefixRef: c,
      mergedRtlRef: v
    } = Je(t), C = Ee("Button", "-button", Ih, _h, t, c), m = Tn("Button", v, c), P = z(() => {
      const B = C.value, {
        common: {
          cubicBezierEaseInOut: O,
          cubicBezierEaseOut: _
        },
        self: p
      } = B, {
        rippleDuration: w,
        opacityDisabled: $,
        fontWeight: W,
        fontWeightStrong: G
      } = p, I = l.value, {
        dashed: e,
        type: F,
        ghost: M,
        text: R,
        color: S,
        round: L,
        circle: le,
        textColor: te,
        secondary: he,
        tertiary: ie,
        quaternary: Ae,
        strong: be
      } = t, Pe = {
        "--n-font-weight": be ? G : W
      };
      let X = {
        "--n-color": "initial",
        "--n-color-hover": "initial",
        "--n-color-pressed": "initial",
        "--n-color-focus": "initial",
        "--n-color-disabled": "initial",
        "--n-ripple-color": "initial",
        "--n-text-color": "initial",
        "--n-text-color-hover": "initial",
        "--n-text-color-pressed": "initial",
        "--n-text-color-focus": "initial",
        "--n-text-color-disabled": "initial"
      };
      const Fe = F === "tertiary", ze = F === "default", Z = Fe ? "default" : F;
      if (R) {
        const se = te || S;
        X = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": se || p[U("textColorText", Z)],
          "--n-text-color-hover": se ? it(se) : p[U("textColorTextHover", Z)],
          "--n-text-color-pressed": se ? Fr(se) : p[U("textColorTextPressed", Z)],
          "--n-text-color-focus": se ? it(se) : p[U("textColorTextHover", Z)],
          "--n-text-color-disabled": se || p[U("textColorTextDisabled", Z)]
        };
      } else if (M || e) {
        const se = te || S;
        X = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": S || p[U("rippleColor", Z)],
          "--n-text-color": se || p[U("textColorGhost", Z)],
          "--n-text-color-hover": se ? it(se) : p[U("textColorGhostHover", Z)],
          "--n-text-color-pressed": se ? Fr(se) : p[U("textColorGhostPressed", Z)],
          "--n-text-color-focus": se ? it(se) : p[U("textColorGhostHover", Z)],
          "--n-text-color-disabled": se || p[U("textColorGhostDisabled", Z)]
        };
      } else if (he) {
        const se = ze ? p.textColor : Fe ? p.textColorTertiary : p[U("color", Z)], pe = S || se, je = F !== "default" && F !== "tertiary";
        X = {
          "--n-color": je ? ut(pe, {
            alpha: Number(p.colorOpacitySecondary)
          }) : p.colorSecondary,
          "--n-color-hover": je ? ut(pe, {
            alpha: Number(p.colorOpacitySecondaryHover)
          }) : p.colorSecondaryHover,
          "--n-color-pressed": je ? ut(pe, {
            alpha: Number(p.colorOpacitySecondaryPressed)
          }) : p.colorSecondaryPressed,
          "--n-color-focus": je ? ut(pe, {
            alpha: Number(p.colorOpacitySecondaryHover)
          }) : p.colorSecondaryHover,
          "--n-color-disabled": p.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": pe,
          "--n-text-color-hover": pe,
          "--n-text-color-pressed": pe,
          "--n-text-color-focus": pe,
          "--n-text-color-disabled": pe
        };
      } else if (ie || Ae) {
        const se = ze ? p.textColor : Fe ? p.textColorTertiary : p[U("color", Z)], pe = S || se;
        ie ? (X["--n-color"] = p.colorTertiary, X["--n-color-hover"] = p.colorTertiaryHover, X["--n-color-pressed"] = p.colorTertiaryPressed, X["--n-color-focus"] = p.colorSecondaryHover, X["--n-color-disabled"] = p.colorTertiary) : (X["--n-color"] = p.colorQuaternary, X["--n-color-hover"] = p.colorQuaternaryHover, X["--n-color-pressed"] = p.colorQuaternaryPressed, X["--n-color-focus"] = p.colorQuaternaryHover, X["--n-color-disabled"] = p.colorQuaternary), X["--n-ripple-color"] = "#0000", X["--n-text-color"] = pe, X["--n-text-color-hover"] = pe, X["--n-text-color-pressed"] = pe, X["--n-text-color-focus"] = pe, X["--n-text-color-disabled"] = pe;
      } else
        X = {
          "--n-color": S || p[U("color", Z)],
          "--n-color-hover": S ? it(S) : p[U("colorHover", Z)],
          "--n-color-pressed": S ? Fr(S) : p[U("colorPressed", Z)],
          "--n-color-focus": S ? it(S) : p[U("colorFocus", Z)],
          "--n-color-disabled": S || p[U("colorDisabled", Z)],
          "--n-ripple-color": S || p[U("rippleColor", Z)],
          "--n-text-color": te || (S ? p.textColorPrimary : Fe ? p.textColorTertiary : p[U("textColor", Z)]),
          "--n-text-color-hover": te || (S ? p.textColorHoverPrimary : p[U("textColorHover", Z)]),
          "--n-text-color-pressed": te || (S ? p.textColorPressedPrimary : p[U("textColorPressed", Z)]),
          "--n-text-color-focus": te || (S ? p.textColorFocusPrimary : p[U("textColorFocus", Z)]),
          "--n-text-color-disabled": te || (S ? p.textColorDisabledPrimary : p[U("textColorDisabled", Z)])
        };
      let $e = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      R ? $e = {
        "--n-border": "none",
        "--n-border-hover": "none",
        "--n-border-pressed": "none",
        "--n-border-focus": "none",
        "--n-border-disabled": "none"
      } : $e = {
        "--n-border": p[U("border", Z)],
        "--n-border-hover": p[U("borderHover", Z)],
        "--n-border-pressed": p[U("borderPressed", Z)],
        "--n-border-focus": p[U("borderFocus", Z)],
        "--n-border-disabled": p[U("borderDisabled", Z)]
      };
      const {
        [U("height", I)]: Oe,
        [U("fontSize", I)]: Q,
        [U("padding", I)]: ae,
        [U("paddingRound", I)]: ee,
        [U("iconSize", I)]: ke,
        [U("borderRadius", I)]: Qe,
        [U("iconMargin", I)]: _t,
        waveOpacity: Ge
      } = p, It = {
        "--n-width": le && !R ? Oe : "initial",
        "--n-height": R ? "initial" : Oe,
        "--n-font-size": Q,
        "--n-padding": le || R ? "initial" : L ? ee : ae,
        "--n-icon-size": ke,
        "--n-icon-margin": _t,
        "--n-border-radius": R ? "initial" : le || L ? Oe : Qe
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": O,
        "--n-bezier-ease-out": _,
        "--n-ripple-duration": w,
        "--n-opacity-disabled": $,
        "--n-wave-opacity": Ge
      }, Pe), X), $e), It);
    }), A = D ? Mt("button", z(() => {
      let B = "";
      const {
        dashed: O,
        type: _,
        ghost: p,
        text: w,
        color: $,
        round: W,
        circle: G,
        textColor: I,
        secondary: e,
        tertiary: F,
        quaternary: M,
        strong: R
      } = t;
      O && (B += "a"), p && (B += "b"), w && (B += "c"), W && (B += "d"), G && (B += "e"), e && (B += "f"), F && (B += "g"), M && (B += "h"), R && (B += "i"), $ && (B += `j${Gn($)}`), I && (B += `k${Gn(I)}`);
      const {
        value: S
      } = l;
      return B += `l${S[0]}`, B += `m${_[0]}`, B;
    }), P, t) : void 0;
    return {
      selfElRef: r,
      waveElRef: n,
      mergedClsPrefix: c,
      mergedFocusable: s,
      mergedSize: l,
      showBorder: a,
      enterPressed: i,
      rtlEnabled: m,
      handleMousedown: u,
      handleKeydown: d,
      handleBlur: b,
      handleKeyup: x,
      handleClick: f,
      customColorCssVars: z(() => {
        const {
          color: B
        } = t;
        if (!B) return null;
        const O = it(B);
        return {
          "--n-border-color": B,
          "--n-border-color-hover": O,
          "--n-border-color-pressed": Fr(B),
          "--n-border-color-focus": O,
          "--n-border-color-disabled": B
        };
      }),
      cssVars: D ? void 0 : P,
      themeClass: A == null ? void 0 : A.themeClass,
      onRender: A == null ? void 0 : A.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: t,
      tag: r,
      onRender: n
    } = this;
    n == null || n();
    const i = ft(this.$slots.default, (a) => a && g("span", {
      class: `${t}-button__content`
    }, a));
    return g(r, {
      ref: "selfElRef",
      class: [
        this.themeClass,
        `${t}-button`,
        `${t}-button--${this.type}-type`,
        `${t}-button--${this.mergedSize}-type`,
        this.rtlEnabled && `${t}-button--rtl`,
        this.disabled && `${t}-button--disabled`,
        this.block && `${t}-button--block`,
        this.enterPressed && `${t}-button--pressed`,
        !this.text && this.dashed && `${t}-button--dashed`,
        this.color && `${t}-button--color`,
        this.secondary && `${t}-button--secondary`,
        this.loading && `${t}-button--loading`,
        this.ghost && `${t}-button--ghost`
        // required for button group border collapse
      ],
      tabindex: this.mergedFocusable ? 0 : -1,
      type: this.attrType,
      style: this.cssVars,
      disabled: this.disabled,
      onClick: this.handleClick,
      onBlur: this.handleBlur,
      onMousedown: this.handleMousedown,
      onKeyup: this.handleKeyup,
      onKeydown: this.handleKeydown
    }, this.iconPlacement === "right" && i, g(eh, {
      width: !0
    }, {
      default: () => ft(this.$slots.icon, (a) => (this.loading || this.renderIcon || a) && g("span", {
        class: `${t}-button__icon`,
        style: {
          margin: al(this.$slots.default) ? "0" : ""
        }
      }, g(zn, null, {
        default: () => this.loading ? g(Sa, {
          clsPrefix: t,
          key: "loading",
          class: `${t}-icon-slot`,
          strokeWidth: 20
        }) : g("div", {
          key: "icon",
          class: `${t}-icon-slot`,
          role: "none"
        }, this.renderIcon ? this.renderIcon() : a)
      })))
    }), this.iconPlacement === "left" && i, this.text ? null : g(ph, {
      ref: "waveElRef",
      clsPrefix: t
    }), this.showBorder ? g("div", {
      "aria-hidden": !0,
      class: `${t}-button__border`,
      style: this.customColorCssVars
    }) : null, this.showBorder ? g("div", {
      "aria-hidden": !0,
      class: `${t}-button__state-border`,
      style: this.customColorCssVars
    }) : null);
  }
}), jh = {
  abstract: Boolean,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clsPrefix: String,
  locale: Object,
  dateLocale: Object,
  namespace: String,
  rtl: Array,
  tag: {
    type: String,
    default: "div"
  },
  hljs: Object,
  katex: Object,
  theme: Object,
  themeOverrides: Object,
  componentOptions: Object,
  icons: Object,
  breakpoints: Object,
  preflightStyleDisabled: Boolean,
  styleMountTarget: Object,
  inlineThemeDisabled: {
    type: Boolean,
    default: void 0
  },
  // deprecated
  as: {
    type: String,
    validator: () => (zr("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, Lh = xe({
  name: "ConfigProvider",
  alias: ["App"],
  props: jh,
  setup(t) {
    const r = Ce(Ve, null), n = z(() => {
      const {
        theme: v
      } = t;
      if (v === null) return;
      const C = r == null ? void 0 : r.mergedThemeRef.value;
      return v === void 0 ? C : C === void 0 ? v : Object.assign({}, C, v);
    }), i = z(() => {
      const {
        themeOverrides: v
      } = t;
      if (v !== null) {
        if (v === void 0)
          return r == null ? void 0 : r.mergedThemeOverridesRef.value;
        {
          const C = r == null ? void 0 : r.mergedThemeOverridesRef.value;
          return C === void 0 ? v : qt({}, C, v);
        }
      }
    }), a = rr(() => {
      const {
        namespace: v
      } = t;
      return v === void 0 ? r == null ? void 0 : r.mergedNamespaceRef.value : v;
    }), o = rr(() => {
      const {
        bordered: v
      } = t;
      return v === void 0 ? r == null ? void 0 : r.mergedBorderedRef.value : v;
    }), l = z(() => {
      const {
        icons: v
      } = t;
      return v === void 0 ? r == null ? void 0 : r.mergedIconsRef.value : v;
    }), s = z(() => {
      const {
        componentOptions: v
      } = t;
      return v !== void 0 ? v : r == null ? void 0 : r.mergedComponentPropsRef.value;
    }), u = z(() => {
      const {
        clsPrefix: v
      } = t;
      return v !== void 0 ? v : r ? r.mergedClsPrefixRef.value : dn;
    }), f = z(() => {
      var v;
      const {
        rtl: C
      } = t;
      if (C === void 0)
        return r == null ? void 0 : r.mergedRtlRef.value;
      const m = {};
      for (const P of C)
        m[P.name] = Mn(P), (v = P.peers) === null || v === void 0 || v.forEach((A) => {
          A.name in m || (m[A.name] = Mn(A));
        });
      return m;
    }), x = z(() => t.breakpoints || (r == null ? void 0 : r.mergedBreakpointsRef.value)), d = t.inlineThemeDisabled || (r == null ? void 0 : r.inlineThemeDisabled), b = t.preflightStyleDisabled || (r == null ? void 0 : r.preflightStyleDisabled), D = t.styleMountTarget || (r == null ? void 0 : r.styleMountTarget), c = z(() => {
      const {
        value: v
      } = n, {
        value: C
      } = i, m = C && Object.keys(C).length !== 0, P = v == null ? void 0 : v.name;
      return P ? m ? `${P}-${tr(JSON.stringify(i.value))}` : P : m ? tr(JSON.stringify(i.value)) : "";
    });
    return Dt(Ve, {
      mergedThemeHashRef: c,
      mergedBreakpointsRef: x,
      mergedRtlRef: f,
      mergedIconsRef: l,
      mergedComponentPropsRef: s,
      mergedBorderedRef: o,
      mergedNamespaceRef: a,
      mergedClsPrefixRef: u,
      mergedLocaleRef: z(() => {
        const {
          locale: v
        } = t;
        if (v !== null)
          return v === void 0 ? r == null ? void 0 : r.mergedLocaleRef.value : v;
      }),
      mergedDateLocaleRef: z(() => {
        const {
          dateLocale: v
        } = t;
        if (v !== null)
          return v === void 0 ? r == null ? void 0 : r.mergedDateLocaleRef.value : v;
      }),
      mergedHljsRef: z(() => {
        const {
          hljs: v
        } = t;
        return v === void 0 ? r == null ? void 0 : r.mergedHljsRef.value : v;
      }),
      mergedKatexRef: z(() => {
        const {
          katex: v
        } = t;
        return v === void 0 ? r == null ? void 0 : r.mergedKatexRef.value : v;
      }),
      mergedThemeRef: n,
      mergedThemeOverridesRef: i,
      inlineThemeDisabled: d || !1,
      preflightStyleDisabled: b || !1,
      styleMountTarget: D
    }), {
      mergedClsPrefix: u,
      mergedBordered: o,
      mergedNamespace: a,
      mergedTheme: n,
      mergedThemeOverrides: i
    };
  },
  render() {
    var t, r, n, i;
    return this.abstract ? (i = (n = this.$slots).default) === null || i === void 0 ? void 0 : i.call(n) : g(this.as || this.tag, {
      class: `${this.mergedClsPrefix || dn}-config-provider`
    }, (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t));
  }
});
function Nh(t) {
  const {
    textColorBase: r,
    opacity1: n,
    opacity2: i,
    opacity3: a,
    opacity4: o,
    opacity5: l
  } = t;
  return {
    color: r,
    opacity1Depth: n,
    opacity2Depth: i,
    opacity3Depth: a,
    opacity4Depth: o,
    opacity5Depth: l
  };
}
const Vh = {
  name: "Icon",
  common: xr,
  self: Nh
}, qh = j("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [K("color-transition", {
  transition: "color .3s var(--n-bezier)"
}), K("depth", {
  color: "var(--n-color)"
}, [k("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), k("svg", {
  height: "1em",
  width: "1em"
})]), Gh = Object.assign(Object.assign({}, Ee.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), za = xe({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: Gh,
  setup(t) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n
    } = Je(t), i = Ee("Icon", "-icon", qh, Vh, t, r), a = z(() => {
      const {
        depth: l
      } = t, {
        common: {
          cubicBezierEaseInOut: s
        },
        self: u
      } = i.value;
      if (l !== void 0) {
        const {
          color: f,
          [`opacity${l}Depth`]: x
        } = u;
        return {
          "--n-bezier": s,
          "--n-color": f,
          "--n-opacity": x
        };
      }
      return {
        "--n-bezier": s,
        "--n-color": "",
        "--n-opacity": ""
      };
    }), o = n ? Mt("icon", z(() => `${t.depth || "d"}`), a, t) : void 0;
    return {
      mergedClsPrefix: r,
      mergedStyle: z(() => {
        const {
          size: l,
          color: s
        } = t;
        return {
          fontSize: Sr(l),
          color: s
        };
      }),
      cssVars: n ? void 0 : a,
      themeClass: o == null ? void 0 : o.themeClass,
      onRender: o == null ? void 0 : o.onRender
    };
  },
  render() {
    var t;
    const {
      $parent: r,
      depth: n,
      mergedClsPrefix: i,
      component: a,
      onRender: o,
      themeClass: l
    } = this;
    return !((t = r == null ? void 0 : r.$options) === null || t === void 0) && t._n_icon__ && zr("icon", "don't wrap `n-icon` inside `n-icon`"), o == null || o(), g("i", wn(this.$attrs, {
      role: "img",
      class: [`${i}-icon`, l, {
        [`${i}-icon--depth`]: n,
        [`${i}-icon--color-transition`]: n !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), a ? g(a) : this.$slots);
  }
}), Uh = {
  feedbackPadding: "4px 0 0 2px",
  feedbackHeightSmall: "24px",
  feedbackHeightMedium: "24px",
  feedbackHeightLarge: "26px",
  feedbackFontSizeSmall: "13px",
  feedbackFontSizeMedium: "14px",
  feedbackFontSizeLarge: "14px",
  labelFontSizeLeftSmall: "14px",
  labelFontSizeLeftMedium: "14px",
  labelFontSizeLeftLarge: "15px",
  labelFontSizeTopSmall: "13px",
  labelFontSizeTopMedium: "14px",
  labelFontSizeTopLarge: "14px",
  labelHeightSmall: "24px",
  labelHeightMedium: "26px",
  labelHeightLarge: "28px",
  labelPaddingVertical: "0 0 6px 2px",
  labelPaddingHorizontal: "0 12px 0 0",
  labelTextAlignVertical: "left",
  labelTextAlignHorizontal: "right",
  labelFontWeight: "400"
};
function Yh(t) {
  const {
    heightSmall: r,
    heightMedium: n,
    heightLarge: i,
    textColor1: a,
    errorColor: o,
    warningColor: l,
    lineHeight: s,
    textColor3: u
  } = t;
  return Object.assign(Object.assign({}, Uh), {
    blankHeightSmall: r,
    blankHeightMedium: n,
    blankHeightLarge: i,
    lineHeight: s,
    labelTextColor: a,
    asteriskColor: o,
    feedbackTextColorError: o,
    feedbackTextColorWarning: l,
    feedbackTextColor: u
  });
}
const Oa = {
  name: "Form",
  common: xr,
  self: Yh
}, Xh = j("form", [K("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [j("form-item", {
  width: "auto",
  marginRight: "18px"
}, [k("&:last-child", {
  marginRight: 0
})])])]), hr = "n-form", ka = "n-form-item-insts";
var Kh = function(t, r, n, i) {
  function a(o) {
    return o instanceof n ? o : new n(function(l) {
      l(o);
    });
  }
  return new (n || (n = Promise))(function(o, l) {
    function s(x) {
      try {
        f(i.next(x));
      } catch (d) {
        l(d);
      }
    }
    function u(x) {
      try {
        f(i.throw(x));
      } catch (d) {
        l(d);
      }
    }
    function f(x) {
      x.done ? o(x.value) : a(x.value).then(s, u);
    }
    f((i = i.apply(t, r || [])).next());
  });
};
const Zh = Object.assign(Object.assign({}, Ee.props), {
  inline: Boolean,
  labelWidth: [Number, String],
  labelAlign: String,
  labelPlacement: {
    type: String,
    default: "top"
  },
  model: {
    type: Object,
    default: () => {
    }
  },
  rules: Object,
  disabled: Boolean,
  size: String,
  showRequireMark: {
    type: Boolean,
    default: void 0
  },
  requireMarkPlacement: String,
  showFeedback: {
    type: Boolean,
    default: !0
  },
  onSubmit: {
    type: Function,
    default: (t) => {
      t.preventDefault();
    }
  },
  showLabel: {
    type: Boolean,
    default: void 0
  },
  validateMessages: Object
}), Jh = xe({
  name: "Form",
  props: Zh,
  setup(t) {
    const {
      mergedClsPrefixRef: r
    } = Je(t);
    Ee("Form", "-form", Xh, Oa, t, r);
    const n = {}, i = q(void 0), a = (u) => {
      const f = i.value;
      (f === void 0 || u >= f) && (i.value = u);
    };
    function o(u) {
      return Kh(this, arguments, void 0, function* (f, x = () => !0) {
        return yield new Promise((d, b) => {
          const D = [];
          for (const c of Ln(n)) {
            const v = n[c];
            for (const C of v)
              C.path && D.push(C.internalValidate(null, x));
          }
          Promise.all(D).then((c) => {
            const v = c.some((P) => !P.valid), C = [], m = [];
            c.forEach((P) => {
              var A, B;
              !((A = P.errors) === null || A === void 0) && A.length && C.push(P.errors), !((B = P.warnings) === null || B === void 0) && B.length && m.push(P.warnings);
            }), f && f(C.length ? C : void 0, {
              warnings: m.length ? m : void 0
            }), v ? b(C.length ? C : void 0) : d({
              warnings: m.length ? m : void 0
            });
          });
        });
      });
    }
    function l() {
      for (const u of Ln(n)) {
        const f = n[u];
        for (const x of f)
          x.restoreValidation();
      }
    }
    return Dt(hr, {
      props: t,
      maxChildLabelWidthRef: i,
      deriveMaxChildLabelWidth: a
    }), Dt(ka, {
      formItems: n
    }), Object.assign({
      validate: o,
      restoreValidation: l
    }, {
      mergedClsPrefix: r
    });
  },
  render() {
    const {
      mergedClsPrefix: t
    } = this;
    return g("form", {
      class: [`${t}-form`, this.inline && `${t}-form--inline`],
      onSubmit: this.onSubmit
    }, this.$slots);
  }
});
function ht() {
  return ht = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, ht.apply(this, arguments);
}
function Qh(t, r) {
  t.prototype = Object.create(r.prototype), t.prototype.constructor = t, or(t, r);
}
function pn(t) {
  return pn = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, pn(t);
}
function or(t, r) {
  return or = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, a) {
    return i.__proto__ = a, i;
  }, or(t, r);
}
function ed() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Rr(t, r, n) {
  return ed() ? Rr = Reflect.construct.bind() : Rr = function(a, o, l) {
    var s = [null];
    s.push.apply(s, o);
    var u = Function.bind.apply(a, s), f = new u();
    return l && or(f, l.prototype), f;
  }, Rr.apply(null, arguments);
}
function td(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function vn(t) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return vn = function(i) {
    if (i === null || !td(i)) return i;
    if (typeof i != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(i)) return r.get(i);
      r.set(i, a);
    }
    function a() {
      return Rr(i, arguments, pn(this).constructor);
    }
    return a.prototype = Object.create(i.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), or(a, i);
  }, vn(t);
}
var rd = /%[sdj%]/g, Ma = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Ma = function(r, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(i) {
    return typeof i == "string";
  }) && console.warn(r, n);
});
function mn(t) {
  if (!t || !t.length) return null;
  var r = {};
  return t.forEach(function(n) {
    var i = n.field;
    r[i] = r[i] || [], r[i].push(n);
  }), r;
}
function Te(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  var a = 0, o = n.length;
  if (typeof t == "function")
    return t.apply(null, n);
  if (typeof t == "string") {
    var l = t.replace(rd, function(s) {
      if (s === "%%")
        return "%";
      if (a >= o)
        return s;
      switch (s) {
        case "%s":
          return String(n[a++]);
        case "%d":
          return Number(n[a++]);
        case "%j":
          try {
            return JSON.stringify(n[a++]);
          } catch {
            return "[Circular]";
          }
          break;
        default:
          return s;
      }
    });
    return l;
  }
  return t;
}
function nd(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function me(t, r) {
  return !!(t == null || r === "array" && Array.isArray(t) && !t.length || nd(r) && typeof t == "string" && !t);
}
function id(t, r, n) {
  var i = [], a = 0, o = t.length;
  function l(s) {
    i.push.apply(i, s || []), a++, a === o && n(i);
  }
  t.forEach(function(s) {
    r(s, l);
  });
}
function Ei(t, r, n) {
  var i = 0, a = t.length;
  function o(l) {
    if (l && l.length) {
      n(l);
      return;
    }
    var s = i;
    i = i + 1, s < a ? r(t[s], o) : n([]);
  }
  o([]);
}
function ad(t) {
  var r = [];
  return Object.keys(t).forEach(function(n) {
    r.push.apply(r, t[n] || []);
  }), r;
}
var Si = /* @__PURE__ */ function(t) {
  Qh(r, t);
  function r(n, i) {
    var a;
    return a = t.call(this, "Async Validation Error") || this, a.errors = n, a.fields = i, a;
  }
  return r;
}(/* @__PURE__ */ vn(Error));
function od(t, r, n, i, a) {
  if (r.first) {
    var o = new Promise(function(b, D) {
      var c = function(m) {
        return i(m), m.length ? D(new Si(m, mn(m))) : b(a);
      }, v = ad(t);
      Ei(v, n, c);
    });
    return o.catch(function(b) {
      return b;
    }), o;
  }
  var l = r.firstFields === !0 ? Object.keys(t) : r.firstFields || [], s = Object.keys(t), u = s.length, f = 0, x = [], d = new Promise(function(b, D) {
    var c = function(C) {
      if (x.push.apply(x, C), f++, f === u)
        return i(x), x.length ? D(new Si(x, mn(x))) : b(a);
    };
    s.length || (i(x), b(a)), s.forEach(function(v) {
      var C = t[v];
      l.indexOf(v) !== -1 ? Ei(C, n, c) : id(C, n, c);
    });
  });
  return d.catch(function(b) {
    return b;
  }), d;
}
function ld(t) {
  return !!(t && t.message !== void 0);
}
function sd(t, r) {
  for (var n = t, i = 0; i < r.length; i++) {
    if (n == null)
      return n;
    n = n[r[i]];
  }
  return n;
}
function Pi(t, r) {
  return function(n) {
    var i;
    return t.fullFields ? i = sd(r, t.fullFields) : i = r[n.field || t.fullField], ld(n) ? (n.field = n.field || t.fullField, n.fieldValue = i, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: i,
      field: n.field || t.fullField
    };
  };
}
function $i(t, r) {
  if (r) {
    for (var n in r)
      if (r.hasOwnProperty(n)) {
        var i = r[n];
        typeof i == "object" && typeof t[n] == "object" ? t[n] = ht({}, t[n], i) : t[n] = i;
      }
  }
  return t;
}
var _a = function(r, n, i, a, o, l) {
  r.required && (!i.hasOwnProperty(r.field) || me(n, l || r.type)) && a.push(Te(o.messages.required, r.fullField));
}, ud = function(r, n, i, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(Te(o.messages.whitespace, r.fullField));
}, Er, fd = function() {
  if (Er)
    return Er;
  var t = "[a-fA-F\\d:]", r = function(B) {
    return B && B.includeBoundaries ? "(?:(?<=\\s|^)(?=" + t + ")|(?<=" + t + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", i = "[a-fA-F\\d]{1,4}", a = (`
(?:
(?:` + i + ":){7}(?:" + i + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + i + ":){6}(?:" + n + "|:" + i + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + i + ":){5}(?::" + n + "|(?::" + i + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + i + ":){4}(?:(?::" + i + "){0,1}:" + n + "|(?::" + i + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + i + ":){3}(?:(?::" + i + "){0,2}:" + n + "|(?::" + i + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + i + ":){2}(?:(?::" + i + "){0,3}:" + n + "|(?::" + i + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + i + ":){1}(?:(?::" + i + "){0,4}:" + n + "|(?::" + i + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + i + "){0,5}:" + n + "|(?::" + i + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + a + "$)"), l = new RegExp("^" + n + "$"), s = new RegExp("^" + a + "$"), u = function(B) {
    return B && B.exact ? o : new RegExp("(?:" + r(B) + n + r(B) + ")|(?:" + r(B) + a + r(B) + ")", "g");
  };
  u.v4 = function(A) {
    return A && A.exact ? l : new RegExp("" + r(A) + n + r(A), "g");
  }, u.v6 = function(A) {
    return A && A.exact ? s : new RegExp("" + r(A) + a + r(A), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", x = "(?:\\S+(?::\\S*)?@)?", d = u.v4().source, b = u.v6().source, D = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", c = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", v = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", C = "(?::\\d{2,5})?", m = '(?:[/?#][^\\s"]*)?', P = "(?:" + f + "|www\\.)" + x + "(?:localhost|" + d + "|" + b + "|" + D + c + v + ")" + C + m;
  return Er = new RegExp("(?:^" + P + "$)", "i"), Er;
}, Ri = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Gt = {
  integer: function(r) {
    return Gt.number(r) && parseInt(r, 10) === r;
  },
  float: function(r) {
    return Gt.number(r) && !Gt.integer(r);
  },
  array: function(r) {
    return Array.isArray(r);
  },
  regexp: function(r) {
    if (r instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(r);
    } catch {
      return !1;
    }
  },
  date: function(r) {
    return typeof r.getTime == "function" && typeof r.getMonth == "function" && typeof r.getYear == "function" && !isNaN(r.getTime());
  },
  number: function(r) {
    return isNaN(r) ? !1 : typeof r == "number";
  },
  object: function(r) {
    return typeof r == "object" && !Gt.array(r);
  },
  method: function(r) {
    return typeof r == "function";
  },
  email: function(r) {
    return typeof r == "string" && r.length <= 320 && !!r.match(Ri.email);
  },
  url: function(r) {
    return typeof r == "string" && r.length <= 2048 && !!r.match(fd());
  },
  hex: function(r) {
    return typeof r == "string" && !!r.match(Ri.hex);
  }
}, xd = function(r, n, i, a, o) {
  if (r.required && n === void 0) {
    _a(r, n, i, a, o);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = r.type;
  l.indexOf(s) > -1 ? Gt[s](n) || a.push(Te(o.messages.types[s], r.fullField, r.type)) : s && typeof n !== r.type && a.push(Te(o.messages.types[s], r.fullField, r.type));
}, hd = function(r, n, i, a, o) {
  var l = typeof r.len == "number", s = typeof r.min == "number", u = typeof r.max == "number", f = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, x = n, d = null, b = typeof n == "number", D = typeof n == "string", c = Array.isArray(n);
  if (b ? d = "number" : D ? d = "string" : c && (d = "array"), !d)
    return !1;
  c && (x = n.length), D && (x = n.replace(f, "_").length), l ? x !== r.len && a.push(Te(o.messages[d].len, r.fullField, r.len)) : s && !u && x < r.min ? a.push(Te(o.messages[d].min, r.fullField, r.min)) : u && !s && x > r.max ? a.push(Te(o.messages[d].max, r.fullField, r.max)) : s && u && (x < r.min || x > r.max) && a.push(Te(o.messages[d].range, r.fullField, r.min, r.max));
}, yt = "enum", dd = function(r, n, i, a, o) {
  r[yt] = Array.isArray(r[yt]) ? r[yt] : [], r[yt].indexOf(n) === -1 && a.push(Te(o.messages[yt], r.fullField, r[yt].join(", ")));
}, cd = function(r, n, i, a, o) {
  if (r.pattern) {
    if (r.pattern instanceof RegExp)
      r.pattern.lastIndex = 0, r.pattern.test(n) || a.push(Te(o.messages.pattern.mismatch, r.fullField, n, r.pattern));
    else if (typeof r.pattern == "string") {
      var l = new RegExp(r.pattern);
      l.test(n) || a.push(Te(o.messages.pattern.mismatch, r.fullField, n, r.pattern));
    }
  }
}, J = {
  required: _a,
  whitespace: ud,
  type: xd,
  range: hd,
  enum: dd,
  pattern: cd
}, pd = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (me(n, "string") && !r.required)
      return i();
    J.required(r, n, a, l, o, "string"), me(n, "string") || (J.type(r, n, a, l, o), J.range(r, n, a, l, o), J.pattern(r, n, a, l, o), r.whitespace === !0 && J.whitespace(r, n, a, l, o));
  }
  i(l);
}, vd = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (me(n) && !r.required)
      return i();
    J.required(r, n, a, l, o), n !== void 0 && J.type(r, n, a, l, o);
  }
  i(l);
}, md = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (n === "" && (n = void 0), me(n) && !r.required)
      return i();
    J.required(r, n, a, l, o), n !== void 0 && (J.type(r, n, a, l, o), J.range(r, n, a, l, o));
  }
  i(l);
}, gd = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (me(n) && !r.required)
      return i();
    J.required(r, n, a, l, o), n !== void 0 && J.type(r, n, a, l, o);
  }
  i(l);
}, bd = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (me(n) && !r.required)
      return i();
    J.required(r, n, a, l, o), me(n) || J.type(r, n, a, l, o);
  }
  i(l);
}, Cd = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (me(n) && !r.required)
      return i();
    J.required(r, n, a, l, o), n !== void 0 && (J.type(r, n, a, l, o), J.range(r, n, a, l, o));
  }
  i(l);
}, yd = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (me(n) && !r.required)
      return i();
    J.required(r, n, a, l, o), n !== void 0 && (J.type(r, n, a, l, o), J.range(r, n, a, l, o));
  }
  i(l);
}, Bd = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (n == null && !r.required)
      return i();
    J.required(r, n, a, l, o, "array"), n != null && (J.type(r, n, a, l, o), J.range(r, n, a, l, o));
  }
  i(l);
}, wd = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (me(n) && !r.required)
      return i();
    J.required(r, n, a, l, o), n !== void 0 && J.type(r, n, a, l, o);
  }
  i(l);
}, Dd = "enum", Ad = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (me(n) && !r.required)
      return i();
    J.required(r, n, a, l, o), n !== void 0 && J[Dd](r, n, a, l, o);
  }
  i(l);
}, Fd = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (me(n, "string") && !r.required)
      return i();
    J.required(r, n, a, l, o), me(n, "string") || J.pattern(r, n, a, l, o);
  }
  i(l);
}, Ed = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (me(n, "date") && !r.required)
      return i();
    if (J.required(r, n, a, l, o), !me(n, "date")) {
      var u;
      n instanceof Date ? u = n : u = new Date(n), J.type(r, u, a, l, o), u && J.range(r, u.getTime(), a, l, o);
    }
  }
  i(l);
}, Sd = function(r, n, i, a, o) {
  var l = [], s = Array.isArray(n) ? "array" : typeof n;
  J.required(r, n, a, l, o, s), i(l);
}, en = function(r, n, i, a, o) {
  var l = r.type, s = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (me(n, l) && !r.required)
      return i();
    J.required(r, n, a, s, o, l), me(n, l) || J.type(r, n, a, s, o);
  }
  i(s);
}, Pd = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (me(n) && !r.required)
      return i();
    J.required(r, n, a, l, o);
  }
  i(l);
}, Jt = {
  string: pd,
  method: vd,
  number: md,
  boolean: gd,
  regexp: bd,
  integer: Cd,
  float: yd,
  array: Bd,
  object: wd,
  enum: Ad,
  pattern: Fd,
  date: Ed,
  url: en,
  hex: en,
  email: en,
  required: Sd,
  any: Pd
};
function gn() {
  return {
    default: "Validation error on field %s",
    required: "%s is required",
    enum: "%s must be one of %s",
    whitespace: "%s cannot be empty",
    date: {
      format: "%s date %s is invalid for format %s",
      parse: "%s date could not be parsed, %s is invalid ",
      invalid: "%s date %s is invalid"
    },
    types: {
      string: "%s is not a %s",
      method: "%s is not a %s (function)",
      array: "%s is not an %s",
      object: "%s is not an %s",
      number: "%s is not a %s",
      date: "%s is not a %s",
      boolean: "%s is not a %s",
      integer: "%s is not an %s",
      float: "%s is not a %s",
      regexp: "%s is not a valid %s",
      email: "%s is not a valid %s",
      url: "%s is not a valid %s",
      hex: "%s is not a valid %s"
    },
    string: {
      len: "%s must be exactly %s characters",
      min: "%s must be at least %s characters",
      max: "%s cannot be longer than %s characters",
      range: "%s must be between %s and %s characters"
    },
    number: {
      len: "%s must equal %s",
      min: "%s cannot be less than %s",
      max: "%s cannot be greater than %s",
      range: "%s must be between %s and %s"
    },
    array: {
      len: "%s must be exactly %s in length",
      min: "%s cannot be less than %s in length",
      max: "%s cannot be greater than %s in length",
      range: "%s must be between %s and %s in length"
    },
    pattern: {
      mismatch: "%s value %s does not match pattern %s"
    },
    clone: function() {
      var r = JSON.parse(JSON.stringify(this));
      return r.clone = this.clone, r;
    }
  };
}
var bn = gn(), St = /* @__PURE__ */ function() {
  function t(n) {
    this.rules = null, this._messages = bn, this.define(n);
  }
  var r = t.prototype;
  return r.define = function(i) {
    var a = this;
    if (!i)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof i != "object" || Array.isArray(i))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(i).forEach(function(o) {
      var l = i[o];
      a.rules[o] = Array.isArray(l) ? l : [l];
    });
  }, r.messages = function(i) {
    return i && (this._messages = $i(gn(), i)), this._messages;
  }, r.validate = function(i, a, o) {
    var l = this;
    a === void 0 && (a = {}), o === void 0 && (o = function() {
    });
    var s = i, u = a, f = o;
    if (typeof u == "function" && (f = u, u = {}), !this.rules || Object.keys(this.rules).length === 0)
      return f && f(null, s), Promise.resolve(s);
    function x(v) {
      var C = [], m = {};
      function P(B) {
        if (Array.isArray(B)) {
          var O;
          C = (O = C).concat.apply(O, B);
        } else
          C.push(B);
      }
      for (var A = 0; A < v.length; A++)
        P(v[A]);
      C.length ? (m = mn(C), f(C, m)) : f(null, s);
    }
    if (u.messages) {
      var d = this.messages();
      d === bn && (d = gn()), $i(d, u.messages), u.messages = d;
    } else
      u.messages = this.messages();
    var b = {}, D = u.keys || Object.keys(this.rules);
    D.forEach(function(v) {
      var C = l.rules[v], m = s[v];
      C.forEach(function(P) {
        var A = P;
        typeof A.transform == "function" && (s === i && (s = ht({}, s)), m = s[v] = A.transform(m)), typeof A == "function" ? A = {
          validator: A
        } : A = ht({}, A), A.validator = l.getValidationMethod(A), A.validator && (A.field = v, A.fullField = A.fullField || v, A.type = l.getType(A), b[v] = b[v] || [], b[v].push({
          rule: A,
          value: m,
          source: s,
          field: v
        }));
      });
    });
    var c = {};
    return od(b, u, function(v, C) {
      var m = v.rule, P = (m.type === "object" || m.type === "array") && (typeof m.fields == "object" || typeof m.defaultField == "object");
      P = P && (m.required || !m.required && v.value), m.field = v.field;
      function A(_, p) {
        return ht({}, p, {
          fullField: m.fullField + "." + _,
          fullFields: m.fullFields ? [].concat(m.fullFields, [_]) : [_]
        });
      }
      function B(_) {
        _ === void 0 && (_ = []);
        var p = Array.isArray(_) ? _ : [_];
        !u.suppressWarning && p.length && t.warning("async-validator:", p), p.length && m.message !== void 0 && (p = [].concat(m.message));
        var w = p.map(Pi(m, s));
        if (u.first && w.length)
          return c[m.field] = 1, C(w);
        if (!P)
          C(w);
        else {
          if (m.required && !v.value)
            return m.message !== void 0 ? w = [].concat(m.message).map(Pi(m, s)) : u.error && (w = [u.error(m, Te(u.messages.required, m.field))]), C(w);
          var $ = {};
          m.defaultField && Object.keys(v.value).map(function(I) {
            $[I] = m.defaultField;
          }), $ = ht({}, $, v.rule.fields);
          var W = {};
          Object.keys($).forEach(function(I) {
            var e = $[I], F = Array.isArray(e) ? e : [e];
            W[I] = F.map(A.bind(null, I));
          });
          var G = new t(W);
          G.messages(u.messages), v.rule.options && (v.rule.options.messages = u.messages, v.rule.options.error = u.error), G.validate(v.value, v.rule.options || u, function(I) {
            var e = [];
            w && w.length && e.push.apply(e, w), I && I.length && e.push.apply(e, I), C(e.length ? e : null);
          });
        }
      }
      var O;
      if (m.asyncValidator)
        O = m.asyncValidator(m, v.value, B, v.source, u);
      else if (m.validator) {
        try {
          O = m.validator(m, v.value, B, v.source, u);
        } catch (_) {
          console.error == null || console.error(_), u.suppressValidatorError || setTimeout(function() {
            throw _;
          }, 0), B(_.message);
        }
        O === !0 ? B() : O === !1 ? B(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || (m.fullField || m.field) + " fails") : O instanceof Array ? B(O) : O instanceof Error && B(O.message);
      }
      O && O.then && O.then(function() {
        return B();
      }, function(_) {
        return B(_);
      });
    }, function(v) {
      x(v);
    }, s);
  }, r.getType = function(i) {
    if (i.type === void 0 && i.pattern instanceof RegExp && (i.type = "pattern"), typeof i.validator != "function" && i.type && !Jt.hasOwnProperty(i.type))
      throw new Error(Te("Unknown rule type %s", i.type));
    return i.type || "string";
  }, r.getValidationMethod = function(i) {
    if (typeof i.validator == "function")
      return i.validator;
    var a = Object.keys(i), o = a.indexOf("message");
    return o !== -1 && a.splice(o, 1), a.length === 1 && a[0] === "required" ? Jt.required : Jt[this.getType(i)] || void 0;
  }, t;
}();
St.register = function(r, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Jt[r] = n;
};
St.warning = Ma;
St.messages = bn;
St.validators = Jt;
function $d(t) {
  const r = Ce(hr, null);
  return {
    mergedSize: z(() => t.size !== void 0 ? t.size : (r == null ? void 0 : r.props.size) !== void 0 ? r.props.size : "medium")
  };
}
function Rd(t) {
  const r = Ce(hr, null), n = z(() => {
    const {
      labelPlacement: c
    } = t;
    return c !== void 0 ? c : r != null && r.props.labelPlacement ? r.props.labelPlacement : "top";
  }), i = z(() => n.value === "left" && (t.labelWidth === "auto" || (r == null ? void 0 : r.props.labelWidth) === "auto")), a = z(() => {
    if (n.value === "top") return;
    const {
      labelWidth: c
    } = t;
    if (c !== void 0 && c !== "auto")
      return Sr(c);
    if (i.value) {
      const v = r == null ? void 0 : r.maxChildLabelWidthRef.value;
      return v !== void 0 ? Sr(v) : void 0;
    }
    if ((r == null ? void 0 : r.props.labelWidth) !== void 0)
      return Sr(r.props.labelWidth);
  }), o = z(() => {
    const {
      labelAlign: c
    } = t;
    if (c) return c;
    if (r != null && r.props.labelAlign) return r.props.labelAlign;
  }), l = z(() => {
    var c;
    return [(c = t.labelProps) === null || c === void 0 ? void 0 : c.style, t.labelStyle, {
      width: a.value
    }];
  }), s = z(() => {
    const {
      showRequireMark: c
    } = t;
    return c !== void 0 ? c : r == null ? void 0 : r.props.showRequireMark;
  }), u = z(() => {
    const {
      requireMarkPlacement: c
    } = t;
    return c !== void 0 ? c : (r == null ? void 0 : r.props.requireMarkPlacement) || "right";
  }), f = q(!1), x = q(!1), d = z(() => {
    const {
      validationStatus: c
    } = t;
    if (c !== void 0) return c;
    if (f.value) return "error";
    if (x.value) return "warning";
  }), b = z(() => {
    const {
      showFeedback: c
    } = t;
    return c !== void 0 ? c : (r == null ? void 0 : r.props.showFeedback) !== void 0 ? r.props.showFeedback : !0;
  }), D = z(() => {
    const {
      showLabel: c
    } = t;
    return c !== void 0 ? c : (r == null ? void 0 : r.props.showLabel) !== void 0 ? r.props.showLabel : !0;
  });
  return {
    validationErrored: f,
    validationWarned: x,
    mergedLabelStyle: l,
    mergedLabelPlacement: n,
    mergedLabelAlign: o,
    mergedShowRequireMark: s,
    mergedRequireMarkPlacement: u,
    mergedValidationStatus: d,
    mergedShowFeedback: b,
    mergedShowLabel: D,
    isAutoLabelWidth: i
  };
}
function Td(t) {
  const r = Ce(hr, null), n = z(() => {
    const {
      rulePath: l
    } = t;
    if (l !== void 0) return l;
    const {
      path: s
    } = t;
    if (s !== void 0) return s;
  }), i = z(() => {
    const l = [], {
      rule: s
    } = t;
    if (s !== void 0 && (Array.isArray(s) ? l.push(...s) : l.push(s)), r) {
      const {
        rules: u
      } = r.props, {
        value: f
      } = n;
      if (u !== void 0 && f !== void 0) {
        const x = ca(u, f);
        x !== void 0 && (Array.isArray(x) ? l.push(...x) : l.push(x));
      }
    }
    return l;
  }), a = z(() => i.value.some((l) => l.required)), o = z(() => a.value || t.required);
  return {
    mergedRules: i,
    mergedRequired: o
  };
}
const {
  cubicBezierEaseInOut: Ti
} = Ot;
function zd({
  name: t = "fade-down",
  fromOffset: r = "-4px",
  enterDuration: n = ".3s",
  leaveDuration: i = ".3s",
  enterCubicBezier: a = Ti,
  leaveCubicBezier: o = Ti
} = {}) {
  return [k(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`, {
    opacity: 0,
    transform: `translateY(${r})`
  }), k(`&.${t}-transition-enter-to, &.${t}-transition-leave-from`, {
    opacity: 1,
    transform: "translateY(0)"
  }), k(`&.${t}-transition-leave-active`, {
    transition: `opacity ${i} ${o}, transform ${i} ${o}`
  }), k(`&.${t}-transition-enter-active`, {
    transition: `opacity ${n} ${a}, transform ${n} ${a}`
  })];
}
const Od = j("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [j("form-item-label", `
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `, [T("asterisk", `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `), T("asterisk-placeholder", `
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]), j("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), K("auto-label-width", [j("form-item-label", "white-space: nowrap;")]), K("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [j("form-item-label", `
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `, [K("reverse-columns-space", `
 grid-template-columns: auto 1fr;
 `), K("left-mark", `
 grid-template-areas:
 "mark text"
 ". text";
 `), K("right-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), K("right-hanging-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), T("text", `
 grid-area: text; 
 `), T("asterisk", `
 grid-area: mark; 
 align-self: end;
 `)])]), K("top-labelled", `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [K("no-label", `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), j("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), j("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), j("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [k("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), j("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [K("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), K("error", {
  color: "var(--n-feedback-text-color-error)"
}), zd({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
var zi = function(t, r, n, i) {
  function a(o) {
    return o instanceof n ? o : new n(function(l) {
      l(o);
    });
  }
  return new (n || (n = Promise))(function(o, l) {
    function s(x) {
      try {
        f(i.next(x));
      } catch (d) {
        l(d);
      }
    }
    function u(x) {
      try {
        f(i.throw(x));
      } catch (d) {
        l(d);
      }
    }
    function f(x) {
      x.done ? o(x.value) : a(x.value).then(s, u);
    }
    f((i = i.apply(t, r || [])).next());
  });
};
const kd = Object.assign(Object.assign({}, Ee.props), {
  label: String,
  labelWidth: [Number, String],
  labelStyle: [String, Object],
  labelAlign: String,
  labelPlacement: String,
  path: String,
  first: Boolean,
  rulePath: String,
  required: Boolean,
  showRequireMark: {
    type: Boolean,
    default: void 0
  },
  requireMarkPlacement: String,
  showFeedback: {
    type: Boolean,
    default: void 0
  },
  rule: [Object, Array],
  size: String,
  ignorePathChange: Boolean,
  validationStatus: String,
  feedback: String,
  feedbackClass: String,
  feedbackStyle: [String, Object],
  showLabel: {
    type: Boolean,
    default: void 0
  },
  labelProps: Object
});
function Oi(t, r) {
  return (...n) => {
    try {
      const i = t(...n);
      return !r && (typeof i == "boolean" || i instanceof Error || Array.isArray(i)) || i != null && i.then ? i : (i === void 0 || zr("form-item/validate", `You return a ${typeof i} typed value in the validator method, which is not recommended. Please use ${r ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`), !0);
    } catch (i) {
      zr("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(i);
      return;
    }
  };
}
const Md = xe({
  name: "FormItem",
  props: kd,
  setup(t) {
    $l(ka, "formItems", We(t, "path"));
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n
    } = Je(t), i = Ce(hr, null), a = $d(t), o = Rd(t), {
      validationErrored: l,
      validationWarned: s
    } = o, {
      mergedRequired: u,
      mergedRules: f
    } = Td(t), {
      mergedSize: x
    } = a, {
      mergedLabelPlacement: d,
      mergedLabelAlign: b,
      mergedRequireMarkPlacement: D
    } = o, c = q([]), v = q(jn()), C = i ? We(i.props, "disabled") : q(!1), m = Ee("Form", "-form-item", Od, Oa, t, r);
    Ke(We(t, "path"), () => {
      t.ignorePathChange || P();
    });
    function P() {
      c.value = [], l.value = !1, s.value = !1, t.feedback && (v.value = jn());
    }
    const A = (...F) => zi(this, [...F], void 0, function* (M = null, R = () => !0, S = {
      suppressWarning: !0
    }) {
      const {
        path: L
      } = t;
      S ? S.first || (S.first = t.first) : S = {};
      const {
        value: le
      } = f, te = i ? ca(i.props.model, L || "") : void 0, he = {}, ie = {}, Ae = (M ? le.filter((Q) => Array.isArray(Q.trigger) ? Q.trigger.includes(M) : Q.trigger === M) : le).filter(R).map((Q, ae) => {
        const ee = Object.assign({}, Q);
        if (ee.validator && (ee.validator = Oi(ee.validator, !1)), ee.asyncValidator && (ee.asyncValidator = Oi(ee.asyncValidator, !0)), ee.renderMessage) {
          const ke = `__renderMessage__${ae}`;
          ie[ke] = ee.message, ee.message = ke, he[ke] = ee.renderMessage;
        }
        return ee;
      }), be = Ae.filter((Q) => Q.level !== "warning"), Pe = Ae.filter((Q) => Q.level === "warning"), X = {
        valid: !0,
        errors: void 0,
        warnings: void 0
      };
      if (!Ae.length) return X;
      const Fe = L ?? "__n_no_path__", ze = new St({
        [Fe]: be
      }), Z = new St({
        [Fe]: Pe
      }), {
        validateMessages: $e
      } = (i == null ? void 0 : i.props) || {};
      $e && (ze.messages($e), Z.messages($e));
      const Oe = (Q) => {
        c.value = Q.map((ae) => {
          const ee = (ae == null ? void 0 : ae.message) || "";
          return {
            key: ee,
            render: () => ee.startsWith("__renderMessage__") ? he[ee]() : ee
          };
        }), Q.forEach((ae) => {
          var ee;
          !((ee = ae.message) === null || ee === void 0) && ee.startsWith("__renderMessage__") && (ae.message = ie[ae.message]);
        });
      };
      if (be.length) {
        const Q = yield new Promise((ae) => {
          ze.validate({
            [Fe]: te
          }, S, ae);
        });
        Q != null && Q.length && (X.valid = !1, X.errors = Q, Oe(Q));
      }
      if (Pe.length && !X.errors) {
        const Q = yield new Promise((ae) => {
          Z.validate({
            [Fe]: te
          }, S, ae);
        });
        Q != null && Q.length && (Oe(Q), X.warnings = Q);
      }
      return !X.errors && !X.warnings ? P() : (l.value = !!X.errors, s.value = !!X.warnings), X;
    });
    function B() {
      A("blur");
    }
    function O() {
      A("change");
    }
    function _() {
      A("focus");
    }
    function p() {
      A("input");
    }
    function w(F, M) {
      return zi(this, void 0, void 0, function* () {
        let R, S, L, le;
        return typeof F == "string" ? (R = F, S = M) : F !== null && typeof F == "object" && (R = F.trigger, S = F.callback, L = F.shouldRuleBeApplied, le = F.options), yield new Promise((te, he) => {
          A(R, L, le).then(({
            valid: ie,
            errors: Ae,
            warnings: be
          }) => {
            ie ? (S && S(void 0, {
              warnings: be
            }), te({
              warnings: be
            })) : (S && S(Ae, {
              warnings: be
            }), he(Ae));
          });
        });
      });
    }
    Dt(ln, {
      path: We(t, "path"),
      disabled: C,
      mergedSize: a.mergedSize,
      mergedValidationStatus: o.mergedValidationStatus,
      restoreValidation: P,
      handleContentBlur: B,
      handleContentChange: O,
      handleContentFocus: _,
      handleContentInput: p
    });
    const $ = {
      validate: w,
      restoreValidation: P,
      internalValidate: A
    }, W = q(null);
    sr(() => {
      if (!o.isAutoLabelWidth.value) return;
      const F = W.value;
      if (F !== null) {
        const M = F.style.whiteSpace;
        F.style.whiteSpace = "nowrap", F.style.width = "", i == null || i.deriveMaxChildLabelWidth(Number(getComputedStyle(F).width.slice(0, -2))), F.style.whiteSpace = M;
      }
    });
    const G = z(() => {
      var F;
      const {
        value: M
      } = x, {
        value: R
      } = d, S = R === "top" ? "vertical" : "horizontal", {
        common: {
          cubicBezierEaseInOut: L
        },
        self: {
          labelTextColor: le,
          asteriskColor: te,
          lineHeight: he,
          feedbackTextColor: ie,
          feedbackTextColorWarning: Ae,
          feedbackTextColorError: be,
          feedbackPadding: Pe,
          labelFontWeight: X,
          [U("labelHeight", M)]: Fe,
          [U("blankHeight", M)]: ze,
          [U("feedbackFontSize", M)]: Z,
          [U("feedbackHeight", M)]: $e,
          [U("labelPadding", S)]: Oe,
          [U("labelTextAlign", S)]: Q,
          [U(U("labelFontSize", R), M)]: ae
        }
      } = m.value;
      let ee = (F = b.value) !== null && F !== void 0 ? F : Q;
      return R === "top" && (ee = ee === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": L,
        "--n-line-height": he,
        "--n-blank-height": ze,
        "--n-label-font-size": ae,
        "--n-label-text-align": ee,
        "--n-label-height": Fe,
        "--n-label-padding": Oe,
        "--n-label-font-weight": X,
        "--n-asterisk-color": te,
        "--n-label-text-color": le,
        "--n-feedback-padding": Pe,
        "--n-feedback-font-size": Z,
        "--n-feedback-height": $e,
        "--n-feedback-text-color": ie,
        "--n-feedback-text-color-warning": Ae,
        "--n-feedback-text-color-error": be
      };
    }), I = n ? Mt("form-item", z(() => {
      var F;
      return `${x.value[0]}${d.value[0]}${((F = b.value) === null || F === void 0 ? void 0 : F[0]) || ""}`;
    }), G, t) : void 0, e = z(() => d.value === "left" && D.value === "left" && b.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: W,
      mergedClsPrefix: r,
      mergedRequired: u,
      feedbackId: v,
      renderExplains: c,
      reverseColSpace: e
    }, o), a), $), {
      cssVars: n ? void 0 : G,
      themeClass: I == null ? void 0 : I.themeClass,
      onRender: I == null ? void 0 : I.onRender
    });
  },
  render() {
    const {
      $slots: t,
      mergedClsPrefix: r,
      mergedShowLabel: n,
      mergedShowRequireMark: i,
      mergedRequireMarkPlacement: a,
      onRender: o
    } = this, l = i !== void 0 ? i : this.mergedRequired;
    o == null || o();
    const s = () => {
      const u = this.$slots.label ? this.$slots.label() : this.label;
      if (!u) return null;
      const f = g("span", {
        class: `${r}-form-item-label__text`
      }, u), x = l ? g("span", {
        class: `${r}-form-item-label__asterisk`
      }, a !== "left" ? " *" : "* ") : a === "right-hanging" && g("span", {
        class: `${r}-form-item-label__asterisk-placeholder`
      }, " *"), {
        labelProps: d
      } = this;
      return g("label", Object.assign({}, d, {
        class: [d == null ? void 0 : d.class, `${r}-form-item-label`, `${r}-form-item-label--${a}-mark`, this.reverseColSpace && `${r}-form-item-label--reverse-columns-space`],
        style: this.mergedLabelStyle,
        ref: "labelElementRef"
      }), a === "left" ? [x, f] : [f, x]);
    };
    return g("div", {
      class: [`${r}-form-item`, this.themeClass, `${r}-form-item--${this.mergedSize}-size`, `${r}-form-item--${this.mergedLabelPlacement}-labelled`, this.isAutoLabelWidth && `${r}-form-item--auto-label-width`, !n && `${r}-form-item--no-label`],
      style: this.cssVars
    }, n && s(), g("div", {
      class: [`${r}-form-item-blank`, this.mergedValidationStatus && `${r}-form-item-blank--${this.mergedValidationStatus}`]
    }, t), this.mergedShowFeedback ? g("div", {
      key: this.feedbackId,
      style: this.feedbackStyle,
      class: [`${r}-form-item-feedback-wrapper`, this.feedbackClass]
    }, g(er, {
      name: "fade-down-transition",
      mode: "out-in"
    }, {
      default: () => {
        const {
          mergedValidationStatus: u
        } = this;
        return ft(t.feedback, (f) => {
          var x;
          const {
            feedback: d
          } = this, b = f || d ? g("div", {
            key: "__feedback__",
            class: `${r}-form-item-feedback__line`
          }, f || d) : this.renderExplains.length ? (x = this.renderExplains) === null || x === void 0 ? void 0 : x.map(({
            key: D,
            render: c
          }) => g("div", {
            key: D,
            class: `${r}-form-item-feedback__line`
          }, c())) : null;
          return b ? u === "warning" ? g("div", {
            key: "controlled-warning",
            class: `${r}-form-item-feedback ${r}-form-item-feedback--warning`
          }, b) : u === "error" ? g("div", {
            key: "controlled-error",
            class: `${r}-form-item-feedback ${r}-form-item-feedback--error`
          }, b) : u === "success" ? g("div", {
            key: "controlled-success",
            class: `${r}-form-item-feedback ${r}-form-item-feedback--success`
          }, b) : g("div", {
            key: "controlled-default",
            class: `${r}-form-item-feedback`
          }, b) : null;
        });
      }
    })) : null);
  }
}), _d = /* @__PURE__ */ Object.assign({
  name: "PConfigProvider",
  inheritAttrs: !1
}, {
  __name: "config-provider",
  setup(t) {
    const r = {
      common: {
        fontWeightStrong: "600",
        primaryColor: "#2080F0FF",
        primaryColorHover: "#4098FCFF",
        primaryColorPressed: "#1060C9FF",
        primaryColorSuppl: "#4098FCFF"
      }
    };
    return (n, i) => (Xe(), ct(ve(Lh), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: ve(Tf),
      "date-locale": ve(Gx),
      "theme-overrides": r
    }, {
      default: At(() => [
        Tr(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale", "date-locale"]));
  }
});
var Ut = void 0, Qt = {}, Cn;
Qt.throttle = Cn = function(t, r, n, i) {
  var a, o = 0;
  typeof r != "boolean" && (i = n, n = r, r = Ut);
  function l() {
    var s = this, u = +/* @__PURE__ */ new Date() - o, f = arguments;
    function x() {
      o = +/* @__PURE__ */ new Date(), n.apply(s, f);
    }
    function d() {
      a = Ut;
    }
    i && !a && x(), a && clearTimeout(a), i === Ut && u > t ? x() : r !== !0 && (a = setTimeout(i ? d : x, i === Ut ? t - u : t));
  }
  return Qt.guid && (l.guid = n.guid = n.guid || Qt.guid++), l;
};
Qt.debounce = function(t, r, n) {
  return n === Ut ? Cn(t, r, !1) : Cn(t, n, r !== !1);
};
const Ia = function(t, r, n) {
  return Qt.debounce(r || 300, !0, t);
}, Id = /* @__PURE__ */ Object.assign({
  name: "PButton",
  inheritAttrs: !1
}, {
  __name: "button",
  props: {
    type: { type: String, default: "primary" },
    size: { type: String, default: "medium" },
    attrType: { type: String, default: "button" },
    block: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    waiting: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const n = Mo(), i = _o(), a = r, o = Ia(function() {
      a("click");
    }, 300);
    return (l, s) => (Xe(), ct(ve(Wh), {
      class: Io(`${ve(n).class ? ve(n).class : ""}`),
      "attr-type": t.attrType,
      focusable: !1,
      bordered: !0,
      keyboard: !1,
      block: t.block,
      size: t.size,
      type: t.type,
      loading: t.loading,
      disabled: t.disabled || t.waiting,
      "icon-placement": "left",
      onClick: ve(o)
    }, ki({
      default: At(() => [
        t.loading ? Ho("", !0) : (Xe(), ct(ve(i).default, { key: 0 }))
      ]),
      _: 2
    }, [
      l.$slots.icon ? {
        name: "icon",
        fn: At(() => [
          Mi(ve(i).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "attr-type", "block", "size", "type", "loading", "disabled", "onClick"]));
  }
});
function Hd(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Ha = { exports: {} };
(function(t) {
  function r() {
    var n = 0, i = 1, a = 2, o = 3, l = 4, s = 5, u = 6, f = 7, x = 8, d = 9, b = 10, D = 11, c = 12, v = 13, C = 14, m = 15, P = 16, A = 17, B = 0, O = 1, _ = 2, p = 3, w = 4;
    function $(e, F) {
      return 55296 <= e.charCodeAt(F) && e.charCodeAt(F) <= 56319 && 56320 <= e.charCodeAt(F + 1) && e.charCodeAt(F + 1) <= 57343;
    }
    function W(e, F) {
      F === void 0 && (F = 0);
      var M = e.charCodeAt(F);
      if (55296 <= M && M <= 56319 && F < e.length - 1) {
        var R = M, S = e.charCodeAt(F + 1);
        return 56320 <= S && S <= 57343 ? (R - 55296) * 1024 + (S - 56320) + 65536 : R;
      }
      if (56320 <= M && M <= 57343 && F >= 1) {
        var R = e.charCodeAt(F - 1), S = M;
        return 55296 <= R && R <= 56319 ? (R - 55296) * 1024 + (S - 56320) + 65536 : S;
      }
      return M;
    }
    function G(e, F, M) {
      var R = [e].concat(F).concat([M]), S = R[R.length - 2], L = M, le = R.lastIndexOf(C);
      if (le > 1 && R.slice(1, le).every(function(ie) {
        return ie == o;
      }) && [o, v, A].indexOf(e) == -1)
        return _;
      var te = R.lastIndexOf(l);
      if (te > 0 && R.slice(1, te).every(function(ie) {
        return ie == l;
      }) && [c, l].indexOf(S) == -1)
        return R.filter(function(ie) {
          return ie == l;
        }).length % 2 == 1 ? p : w;
      if (S == n && L == i)
        return B;
      if (S == a || S == n || S == i)
        return L == C && F.every(function(ie) {
          return ie == o;
        }) ? _ : O;
      if (L == a || L == n || L == i)
        return O;
      if (S == u && (L == u || L == f || L == d || L == b))
        return B;
      if ((S == d || S == f) && (L == f || L == x))
        return B;
      if ((S == b || S == x) && L == x)
        return B;
      if (L == o || L == m)
        return B;
      if (L == s)
        return B;
      if (S == c)
        return B;
      var he = R.indexOf(o) != -1 ? R.lastIndexOf(o) - 1 : R.length - 2;
      return [v, A].indexOf(R[he]) != -1 && R.slice(he + 1, -1).every(function(ie) {
        return ie == o;
      }) && L == C || S == m && [P, A].indexOf(L) != -1 ? B : F.indexOf(l) != -1 ? _ : S == l && L == l ? B : O;
    }
    this.nextBreak = function(e, F) {
      if (F === void 0 && (F = 0), F < 0)
        return 0;
      if (F >= e.length - 1)
        return e.length;
      for (var M = I(W(e, F)), R = [], S = F + 1; S < e.length; S++)
        if (!$(e, S - 1)) {
          var L = I(W(e, S));
          if (G(M, R, L))
            return S;
          R.push(L);
        }
      return e.length;
    }, this.splitGraphemes = function(e) {
      for (var F = [], M = 0, R; (R = this.nextBreak(e, M)) < e.length; )
        F.push(e.slice(M, R)), M = R;
      return M < e.length && F.push(e.slice(M)), F;
    }, this.iterateGraphemes = function(e) {
      var F = 0, M = {
        next: (function() {
          var R, S;
          return (S = this.nextBreak(e, F)) < e.length ? (R = e.slice(F, S), F = S, { value: R, done: !1 }) : F < e.length ? (R = e.slice(F), F = e.length, { value: R, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && (M[Symbol.iterator] = function() {
        return M;
      }), M;
    }, this.countGraphemes = function(e) {
      for (var F = 0, M = 0, R; (R = this.nextBreak(e, M)) < e.length; )
        M = R, F++;
      return M < e.length && F++, F;
    };
    function I(e) {
      return 1536 <= e && e <= 1541 || // Cf   [6] ARABIC NUMBER SIGN..ARABIC NUMBER MARK ABOVE
      e == 1757 || // Cf       ARABIC END OF AYAH
      e == 1807 || // Cf       SYRIAC ABBREVIATION MARK
      e == 2274 || // Cf       ARABIC DISPUTED END OF AYAH
      e == 3406 || // Lo       MALAYALAM LETTER DOT REPH
      e == 69821 || // Cf       KAITHI NUMBER SIGN
      70082 <= e && e <= 70083 || // Lo   [2] SHARADA SIGN JIHVAMULIYA..SHARADA SIGN UPADHMANIYA
      e == 72250 || // Lo       ZANABAZAR SQUARE CLUSTER-INITIAL LETTER RA
      72326 <= e && e <= 72329 || // Lo   [4] SOYOMBO CLUSTER-INITIAL LETTER RA..SOYOMBO CLUSTER-INITIAL LETTER SA
      e == 73030 ? c : e == 13 ? n : e == 10 ? i : 0 <= e && e <= 9 || // Cc  [10] <control-0000>..<control-0009>
      11 <= e && e <= 12 || // Cc   [2] <control-000B>..<control-000C>
      14 <= e && e <= 31 || // Cc  [18] <control-000E>..<control-001F>
      127 <= e && e <= 159 || // Cc  [33] <control-007F>..<control-009F>
      e == 173 || // Cf       SOFT HYPHEN
      e == 1564 || // Cf       ARABIC LETTER MARK
      e == 6158 || // Cf       MONGOLIAN VOWEL SEPARATOR
      e == 8203 || // Cf       ZERO WIDTH SPACE
      8206 <= e && e <= 8207 || // Cf   [2] LEFT-TO-RIGHT MARK..RIGHT-TO-LEFT MARK
      e == 8232 || // Zl       LINE SEPARATOR
      e == 8233 || // Zp       PARAGRAPH SEPARATOR
      8234 <= e && e <= 8238 || // Cf   [5] LEFT-TO-RIGHT EMBEDDING..RIGHT-TO-LEFT OVERRIDE
      8288 <= e && e <= 8292 || // Cf   [5] WORD JOINER..INVISIBLE PLUS
      e == 8293 || // Cn       <reserved-2065>
      8294 <= e && e <= 8303 || // Cf  [10] LEFT-TO-RIGHT ISOLATE..NOMINAL DIGIT SHAPES
      55296 <= e && e <= 57343 || // Cs [2048] <surrogate-D800>..<surrogate-DFFF>
      e == 65279 || // Cf       ZERO WIDTH NO-BREAK SPACE
      65520 <= e && e <= 65528 || // Cn   [9] <reserved-FFF0>..<reserved-FFF8>
      65529 <= e && e <= 65531 || // Cf   [3] INTERLINEAR ANNOTATION ANCHOR..INTERLINEAR ANNOTATION TERMINATOR
      113824 <= e && e <= 113827 || // Cf   [4] SHORTHAND FORMAT LETTER OVERLAP..SHORTHAND FORMAT UP STEP
      119155 <= e && e <= 119162 || // Cf   [8] MUSICAL SYMBOL BEGIN BEAM..MUSICAL SYMBOL END PHRASE
      e == 917504 || // Cn       <reserved-E0000>
      e == 917505 || // Cf       LANGUAGE TAG
      917506 <= e && e <= 917535 || // Cn  [30] <reserved-E0002>..<reserved-E001F>
      917632 <= e && e <= 917759 || // Cn [128] <reserved-E0080>..<reserved-E00FF>
      918e3 <= e && e <= 921599 ? a : 768 <= e && e <= 879 || // Mn [112] COMBINING GRAVE ACCENT..COMBINING LATIN SMALL LETTER X
      1155 <= e && e <= 1159 || // Mn   [5] COMBINING CYRILLIC TITLO..COMBINING CYRILLIC POKRYTIE
      1160 <= e && e <= 1161 || // Me   [2] COMBINING CYRILLIC HUNDRED THOUSANDS SIGN..COMBINING CYRILLIC MILLIONS SIGN
      1425 <= e && e <= 1469 || // Mn  [45] HEBREW ACCENT ETNAHTA..HEBREW POINT METEG
      e == 1471 || // Mn       HEBREW POINT RAFE
      1473 <= e && e <= 1474 || // Mn   [2] HEBREW POINT SHIN DOT..HEBREW POINT SIN DOT
      1476 <= e && e <= 1477 || // Mn   [2] HEBREW MARK UPPER DOT..HEBREW MARK LOWER DOT
      e == 1479 || // Mn       HEBREW POINT QAMATS QATAN
      1552 <= e && e <= 1562 || // Mn  [11] ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM..ARABIC SMALL KASRA
      1611 <= e && e <= 1631 || // Mn  [21] ARABIC FATHATAN..ARABIC WAVY HAMZA BELOW
      e == 1648 || // Mn       ARABIC LETTER SUPERSCRIPT ALEF
      1750 <= e && e <= 1756 || // Mn   [7] ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA..ARABIC SMALL HIGH SEEN
      1759 <= e && e <= 1764 || // Mn   [6] ARABIC SMALL HIGH ROUNDED ZERO..ARABIC SMALL HIGH MADDA
      1767 <= e && e <= 1768 || // Mn   [2] ARABIC SMALL HIGH YEH..ARABIC SMALL HIGH NOON
      1770 <= e && e <= 1773 || // Mn   [4] ARABIC EMPTY CENTRE LOW STOP..ARABIC SMALL LOW MEEM
      e == 1809 || // Mn       SYRIAC LETTER SUPERSCRIPT ALAPH
      1840 <= e && e <= 1866 || // Mn  [27] SYRIAC PTHAHA ABOVE..SYRIAC BARREKH
      1958 <= e && e <= 1968 || // Mn  [11] THAANA ABAFILI..THAANA SUKUN
      2027 <= e && e <= 2035 || // Mn   [9] NKO COMBINING SHORT HIGH TONE..NKO COMBINING DOUBLE DOT ABOVE
      2070 <= e && e <= 2073 || // Mn   [4] SAMARITAN MARK IN..SAMARITAN MARK DAGESH
      2075 <= e && e <= 2083 || // Mn   [9] SAMARITAN MARK EPENTHETIC YUT..SAMARITAN VOWEL SIGN A
      2085 <= e && e <= 2087 || // Mn   [3] SAMARITAN VOWEL SIGN SHORT A..SAMARITAN VOWEL SIGN U
      2089 <= e && e <= 2093 || // Mn   [5] SAMARITAN VOWEL SIGN LONG I..SAMARITAN MARK NEQUDAA
      2137 <= e && e <= 2139 || // Mn   [3] MANDAIC AFFRICATION MARK..MANDAIC GEMINATION MARK
      2260 <= e && e <= 2273 || // Mn  [14] ARABIC SMALL HIGH WORD AR-RUB..ARABIC SMALL HIGH SIGN SAFHA
      2275 <= e && e <= 2306 || // Mn  [32] ARABIC TURNED DAMMA BELOW..DEVANAGARI SIGN ANUSVARA
      e == 2362 || // Mn       DEVANAGARI VOWEL SIGN OE
      e == 2364 || // Mn       DEVANAGARI SIGN NUKTA
      2369 <= e && e <= 2376 || // Mn   [8] DEVANAGARI VOWEL SIGN U..DEVANAGARI VOWEL SIGN AI
      e == 2381 || // Mn       DEVANAGARI SIGN VIRAMA
      2385 <= e && e <= 2391 || // Mn   [7] DEVANAGARI STRESS SIGN UDATTA..DEVANAGARI VOWEL SIGN UUE
      2402 <= e && e <= 2403 || // Mn   [2] DEVANAGARI VOWEL SIGN VOCALIC L..DEVANAGARI VOWEL SIGN VOCALIC LL
      e == 2433 || // Mn       BENGALI SIGN CANDRABINDU
      e == 2492 || // Mn       BENGALI SIGN NUKTA
      e == 2494 || // Mc       BENGALI VOWEL SIGN AA
      2497 <= e && e <= 2500 || // Mn   [4] BENGALI VOWEL SIGN U..BENGALI VOWEL SIGN VOCALIC RR
      e == 2509 || // Mn       BENGALI SIGN VIRAMA
      e == 2519 || // Mc       BENGALI AU LENGTH MARK
      2530 <= e && e <= 2531 || // Mn   [2] BENGALI VOWEL SIGN VOCALIC L..BENGALI VOWEL SIGN VOCALIC LL
      2561 <= e && e <= 2562 || // Mn   [2] GURMUKHI SIGN ADAK BINDI..GURMUKHI SIGN BINDI
      e == 2620 || // Mn       GURMUKHI SIGN NUKTA
      2625 <= e && e <= 2626 || // Mn   [2] GURMUKHI VOWEL SIGN U..GURMUKHI VOWEL SIGN UU
      2631 <= e && e <= 2632 || // Mn   [2] GURMUKHI VOWEL SIGN EE..GURMUKHI VOWEL SIGN AI
      2635 <= e && e <= 2637 || // Mn   [3] GURMUKHI VOWEL SIGN OO..GURMUKHI SIGN VIRAMA
      e == 2641 || // Mn       GURMUKHI SIGN UDAAT
      2672 <= e && e <= 2673 || // Mn   [2] GURMUKHI TIPPI..GURMUKHI ADDAK
      e == 2677 || // Mn       GURMUKHI SIGN YAKASH
      2689 <= e && e <= 2690 || // Mn   [2] GUJARATI SIGN CANDRABINDU..GUJARATI SIGN ANUSVARA
      e == 2748 || // Mn       GUJARATI SIGN NUKTA
      2753 <= e && e <= 2757 || // Mn   [5] GUJARATI VOWEL SIGN U..GUJARATI VOWEL SIGN CANDRA E
      2759 <= e && e <= 2760 || // Mn   [2] GUJARATI VOWEL SIGN E..GUJARATI VOWEL SIGN AI
      e == 2765 || // Mn       GUJARATI SIGN VIRAMA
      2786 <= e && e <= 2787 || // Mn   [2] GUJARATI VOWEL SIGN VOCALIC L..GUJARATI VOWEL SIGN VOCALIC LL
      2810 <= e && e <= 2815 || // Mn   [6] GUJARATI SIGN SUKUN..GUJARATI SIGN TWO-CIRCLE NUKTA ABOVE
      e == 2817 || // Mn       ORIYA SIGN CANDRABINDU
      e == 2876 || // Mn       ORIYA SIGN NUKTA
      e == 2878 || // Mc       ORIYA VOWEL SIGN AA
      e == 2879 || // Mn       ORIYA VOWEL SIGN I
      2881 <= e && e <= 2884 || // Mn   [4] ORIYA VOWEL SIGN U..ORIYA VOWEL SIGN VOCALIC RR
      e == 2893 || // Mn       ORIYA SIGN VIRAMA
      e == 2902 || // Mn       ORIYA AI LENGTH MARK
      e == 2903 || // Mc       ORIYA AU LENGTH MARK
      2914 <= e && e <= 2915 || // Mn   [2] ORIYA VOWEL SIGN VOCALIC L..ORIYA VOWEL SIGN VOCALIC LL
      e == 2946 || // Mn       TAMIL SIGN ANUSVARA
      e == 3006 || // Mc       TAMIL VOWEL SIGN AA
      e == 3008 || // Mn       TAMIL VOWEL SIGN II
      e == 3021 || // Mn       TAMIL SIGN VIRAMA
      e == 3031 || // Mc       TAMIL AU LENGTH MARK
      e == 3072 || // Mn       TELUGU SIGN COMBINING CANDRABINDU ABOVE
      3134 <= e && e <= 3136 || // Mn   [3] TELUGU VOWEL SIGN AA..TELUGU VOWEL SIGN II
      3142 <= e && e <= 3144 || // Mn   [3] TELUGU VOWEL SIGN E..TELUGU VOWEL SIGN AI
      3146 <= e && e <= 3149 || // Mn   [4] TELUGU VOWEL SIGN O..TELUGU SIGN VIRAMA
      3157 <= e && e <= 3158 || // Mn   [2] TELUGU LENGTH MARK..TELUGU AI LENGTH MARK
      3170 <= e && e <= 3171 || // Mn   [2] TELUGU VOWEL SIGN VOCALIC L..TELUGU VOWEL SIGN VOCALIC LL
      e == 3201 || // Mn       KANNADA SIGN CANDRABINDU
      e == 3260 || // Mn       KANNADA SIGN NUKTA
      e == 3263 || // Mn       KANNADA VOWEL SIGN I
      e == 3266 || // Mc       KANNADA VOWEL SIGN UU
      e == 3270 || // Mn       KANNADA VOWEL SIGN E
      3276 <= e && e <= 3277 || // Mn   [2] KANNADA VOWEL SIGN AU..KANNADA SIGN VIRAMA
      3285 <= e && e <= 3286 || // Mc   [2] KANNADA LENGTH MARK..KANNADA AI LENGTH MARK
      3298 <= e && e <= 3299 || // Mn   [2] KANNADA VOWEL SIGN VOCALIC L..KANNADA VOWEL SIGN VOCALIC LL
      3328 <= e && e <= 3329 || // Mn   [2] MALAYALAM SIGN COMBINING ANUSVARA ABOVE..MALAYALAM SIGN CANDRABINDU
      3387 <= e && e <= 3388 || // Mn   [2] MALAYALAM SIGN VERTICAL BAR VIRAMA..MALAYALAM SIGN CIRCULAR VIRAMA
      e == 3390 || // Mc       MALAYALAM VOWEL SIGN AA
      3393 <= e && e <= 3396 || // Mn   [4] MALAYALAM VOWEL SIGN U..MALAYALAM VOWEL SIGN VOCALIC RR
      e == 3405 || // Mn       MALAYALAM SIGN VIRAMA
      e == 3415 || // Mc       MALAYALAM AU LENGTH MARK
      3426 <= e && e <= 3427 || // Mn   [2] MALAYALAM VOWEL SIGN VOCALIC L..MALAYALAM VOWEL SIGN VOCALIC LL
      e == 3530 || // Mn       SINHALA SIGN AL-LAKUNA
      e == 3535 || // Mc       SINHALA VOWEL SIGN AELA-PILLA
      3538 <= e && e <= 3540 || // Mn   [3] SINHALA VOWEL SIGN KETTI IS-PILLA..SINHALA VOWEL SIGN KETTI PAA-PILLA
      e == 3542 || // Mn       SINHALA VOWEL SIGN DIGA PAA-PILLA
      e == 3551 || // Mc       SINHALA VOWEL SIGN GAYANUKITTA
      e == 3633 || // Mn       THAI CHARACTER MAI HAN-AKAT
      3636 <= e && e <= 3642 || // Mn   [7] THAI CHARACTER SARA I..THAI CHARACTER PHINTHU
      3655 <= e && e <= 3662 || // Mn   [8] THAI CHARACTER MAITAIKHU..THAI CHARACTER YAMAKKAN
      e == 3761 || // Mn       LAO VOWEL SIGN MAI KAN
      3764 <= e && e <= 3769 || // Mn   [6] LAO VOWEL SIGN I..LAO VOWEL SIGN UU
      3771 <= e && e <= 3772 || // Mn   [2] LAO VOWEL SIGN MAI KON..LAO SEMIVOWEL SIGN LO
      3784 <= e && e <= 3789 || // Mn   [6] LAO TONE MAI EK..LAO NIGGAHITA
      3864 <= e && e <= 3865 || // Mn   [2] TIBETAN ASTROLOGICAL SIGN -KHYUD PA..TIBETAN ASTROLOGICAL SIGN SDONG TSHUGS
      e == 3893 || // Mn       TIBETAN MARK NGAS BZUNG NYI ZLA
      e == 3895 || // Mn       TIBETAN MARK NGAS BZUNG SGOR RTAGS
      e == 3897 || // Mn       TIBETAN MARK TSA -PHRU
      3953 <= e && e <= 3966 || // Mn  [14] TIBETAN VOWEL SIGN AA..TIBETAN SIGN RJES SU NGA RO
      3968 <= e && e <= 3972 || // Mn   [5] TIBETAN VOWEL SIGN REVERSED I..TIBETAN MARK HALANTA
      3974 <= e && e <= 3975 || // Mn   [2] TIBETAN SIGN LCI RTAGS..TIBETAN SIGN YANG RTAGS
      3981 <= e && e <= 3991 || // Mn  [11] TIBETAN SUBJOINED SIGN LCE TSA CAN..TIBETAN SUBJOINED LETTER JA
      3993 <= e && e <= 4028 || // Mn  [36] TIBETAN SUBJOINED LETTER NYA..TIBETAN SUBJOINED LETTER FIXED-FORM RA
      e == 4038 || // Mn       TIBETAN SYMBOL PADMA GDAN
      4141 <= e && e <= 4144 || // Mn   [4] MYANMAR VOWEL SIGN I..MYANMAR VOWEL SIGN UU
      4146 <= e && e <= 4151 || // Mn   [6] MYANMAR VOWEL SIGN AI..MYANMAR SIGN DOT BELOW
      4153 <= e && e <= 4154 || // Mn   [2] MYANMAR SIGN VIRAMA..MYANMAR SIGN ASAT
      4157 <= e && e <= 4158 || // Mn   [2] MYANMAR CONSONANT SIGN MEDIAL WA..MYANMAR CONSONANT SIGN MEDIAL HA
      4184 <= e && e <= 4185 || // Mn   [2] MYANMAR VOWEL SIGN VOCALIC L..MYANMAR VOWEL SIGN VOCALIC LL
      4190 <= e && e <= 4192 || // Mn   [3] MYANMAR CONSONANT SIGN MON MEDIAL NA..MYANMAR CONSONANT SIGN MON MEDIAL LA
      4209 <= e && e <= 4212 || // Mn   [4] MYANMAR VOWEL SIGN GEBA KAREN I..MYANMAR VOWEL SIGN KAYAH EE
      e == 4226 || // Mn       MYANMAR CONSONANT SIGN SHAN MEDIAL WA
      4229 <= e && e <= 4230 || // Mn   [2] MYANMAR VOWEL SIGN SHAN E ABOVE..MYANMAR VOWEL SIGN SHAN FINAL Y
      e == 4237 || // Mn       MYANMAR SIGN SHAN COUNCIL EMPHATIC TONE
      e == 4253 || // Mn       MYANMAR VOWEL SIGN AITON AI
      4957 <= e && e <= 4959 || // Mn   [3] ETHIOPIC COMBINING GEMINATION AND VOWEL LENGTH MARK..ETHIOPIC COMBINING GEMINATION MARK
      5906 <= e && e <= 5908 || // Mn   [3] TAGALOG VOWEL SIGN I..TAGALOG SIGN VIRAMA
      5938 <= e && e <= 5940 || // Mn   [3] HANUNOO VOWEL SIGN I..HANUNOO SIGN PAMUDPOD
      5970 <= e && e <= 5971 || // Mn   [2] BUHID VOWEL SIGN I..BUHID VOWEL SIGN U
      6002 <= e && e <= 6003 || // Mn   [2] TAGBANWA VOWEL SIGN I..TAGBANWA VOWEL SIGN U
      6068 <= e && e <= 6069 || // Mn   [2] KHMER VOWEL INHERENT AQ..KHMER VOWEL INHERENT AA
      6071 <= e && e <= 6077 || // Mn   [7] KHMER VOWEL SIGN I..KHMER VOWEL SIGN UA
      e == 6086 || // Mn       KHMER SIGN NIKAHIT
      6089 <= e && e <= 6099 || // Mn  [11] KHMER SIGN MUUSIKATOAN..KHMER SIGN BATHAMASAT
      e == 6109 || // Mn       KHMER SIGN ATTHACAN
      6155 <= e && e <= 6157 || // Mn   [3] MONGOLIAN FREE VARIATION SELECTOR ONE..MONGOLIAN FREE VARIATION SELECTOR THREE
      6277 <= e && e <= 6278 || // Mn   [2] MONGOLIAN LETTER ALI GALI BALUDA..MONGOLIAN LETTER ALI GALI THREE BALUDA
      e == 6313 || // Mn       MONGOLIAN LETTER ALI GALI DAGALGA
      6432 <= e && e <= 6434 || // Mn   [3] LIMBU VOWEL SIGN A..LIMBU VOWEL SIGN U
      6439 <= e && e <= 6440 || // Mn   [2] LIMBU VOWEL SIGN E..LIMBU VOWEL SIGN O
      e == 6450 || // Mn       LIMBU SMALL LETTER ANUSVARA
      6457 <= e && e <= 6459 || // Mn   [3] LIMBU SIGN MUKPHRENG..LIMBU SIGN SA-I
      6679 <= e && e <= 6680 || // Mn   [2] BUGINESE VOWEL SIGN I..BUGINESE VOWEL SIGN U
      e == 6683 || // Mn       BUGINESE VOWEL SIGN AE
      e == 6742 || // Mn       TAI THAM CONSONANT SIGN MEDIAL LA
      6744 <= e && e <= 6750 || // Mn   [7] TAI THAM SIGN MAI KANG LAI..TAI THAM CONSONANT SIGN SA
      e == 6752 || // Mn       TAI THAM SIGN SAKOT
      e == 6754 || // Mn       TAI THAM VOWEL SIGN MAI SAT
      6757 <= e && e <= 6764 || // Mn   [8] TAI THAM VOWEL SIGN I..TAI THAM VOWEL SIGN OA BELOW
      6771 <= e && e <= 6780 || // Mn  [10] TAI THAM VOWEL SIGN OA ABOVE..TAI THAM SIGN KHUEN-LUE KARAN
      e == 6783 || // Mn       TAI THAM COMBINING CRYPTOGRAMMIC DOT
      6832 <= e && e <= 6845 || // Mn  [14] COMBINING DOUBLED CIRCUMFLEX ACCENT..COMBINING PARENTHESES BELOW
      e == 6846 || // Me       COMBINING PARENTHESES OVERLAY
      6912 <= e && e <= 6915 || // Mn   [4] BALINESE SIGN ULU RICEM..BALINESE SIGN SURANG
      e == 6964 || // Mn       BALINESE SIGN REREKAN
      6966 <= e && e <= 6970 || // Mn   [5] BALINESE VOWEL SIGN ULU..BALINESE VOWEL SIGN RA REPA
      e == 6972 || // Mn       BALINESE VOWEL SIGN LA LENGA
      e == 6978 || // Mn       BALINESE VOWEL SIGN PEPET
      7019 <= e && e <= 7027 || // Mn   [9] BALINESE MUSICAL SYMBOL COMBINING TEGEH..BALINESE MUSICAL SYMBOL COMBINING GONG
      7040 <= e && e <= 7041 || // Mn   [2] SUNDANESE SIGN PANYECEK..SUNDANESE SIGN PANGLAYAR
      7074 <= e && e <= 7077 || // Mn   [4] SUNDANESE CONSONANT SIGN PANYAKRA..SUNDANESE VOWEL SIGN PANYUKU
      7080 <= e && e <= 7081 || // Mn   [2] SUNDANESE VOWEL SIGN PAMEPET..SUNDANESE VOWEL SIGN PANEULEUNG
      7083 <= e && e <= 7085 || // Mn   [3] SUNDANESE SIGN VIRAMA..SUNDANESE CONSONANT SIGN PASANGAN WA
      e == 7142 || // Mn       BATAK SIGN TOMPI
      7144 <= e && e <= 7145 || // Mn   [2] BATAK VOWEL SIGN PAKPAK E..BATAK VOWEL SIGN EE
      e == 7149 || // Mn       BATAK VOWEL SIGN KARO O
      7151 <= e && e <= 7153 || // Mn   [3] BATAK VOWEL SIGN U FOR SIMALUNGUN SA..BATAK CONSONANT SIGN H
      7212 <= e && e <= 7219 || // Mn   [8] LEPCHA VOWEL SIGN E..LEPCHA CONSONANT SIGN T
      7222 <= e && e <= 7223 || // Mn   [2] LEPCHA SIGN RAN..LEPCHA SIGN NUKTA
      7376 <= e && e <= 7378 || // Mn   [3] VEDIC TONE KARSHANA..VEDIC TONE PRENKHA
      7380 <= e && e <= 7392 || // Mn  [13] VEDIC SIGN YAJURVEDIC MIDLINE SVARITA..VEDIC TONE RIGVEDIC KASHMIRI INDEPENDENT SVARITA
      7394 <= e && e <= 7400 || // Mn   [7] VEDIC SIGN VISARGA SVARITA..VEDIC SIGN VISARGA ANUDATTA WITH TAIL
      e == 7405 || // Mn       VEDIC SIGN TIRYAK
      e == 7412 || // Mn       VEDIC TONE CANDRA ABOVE
      7416 <= e && e <= 7417 || // Mn   [2] VEDIC TONE RING ABOVE..VEDIC TONE DOUBLE RING ABOVE
      7616 <= e && e <= 7673 || // Mn  [58] COMBINING DOTTED GRAVE ACCENT..COMBINING WIDE INVERTED BRIDGE BELOW
      7675 <= e && e <= 7679 || // Mn   [5] COMBINING DELETION MARK..COMBINING RIGHT ARROWHEAD AND DOWN ARROWHEAD BELOW
      e == 8204 || // Cf       ZERO WIDTH NON-JOINER
      8400 <= e && e <= 8412 || // Mn  [13] COMBINING LEFT HARPOON ABOVE..COMBINING FOUR DOTS ABOVE
      8413 <= e && e <= 8416 || // Me   [4] COMBINING ENCLOSING CIRCLE..COMBINING ENCLOSING CIRCLE BACKSLASH
      e == 8417 || // Mn       COMBINING LEFT RIGHT ARROW ABOVE
      8418 <= e && e <= 8420 || // Me   [3] COMBINING ENCLOSING SCREEN..COMBINING ENCLOSING UPWARD POINTING TRIANGLE
      8421 <= e && e <= 8432 || // Mn  [12] COMBINING REVERSE SOLIDUS OVERLAY..COMBINING ASTERISK ABOVE
      11503 <= e && e <= 11505 || // Mn   [3] COPTIC COMBINING NI ABOVE..COPTIC COMBINING SPIRITUS LENIS
      e == 11647 || // Mn       TIFINAGH CONSONANT JOINER
      11744 <= e && e <= 11775 || // Mn  [32] COMBINING CYRILLIC LETTER BE..COMBINING CYRILLIC LETTER IOTIFIED BIG YUS
      12330 <= e && e <= 12333 || // Mn   [4] IDEOGRAPHIC LEVEL TONE MARK..IDEOGRAPHIC ENTERING TONE MARK
      12334 <= e && e <= 12335 || // Mc   [2] HANGUL SINGLE DOT TONE MARK..HANGUL DOUBLE DOT TONE MARK
      12441 <= e && e <= 12442 || // Mn   [2] COMBINING KATAKANA-HIRAGANA VOICED SOUND MARK..COMBINING KATAKANA-HIRAGANA SEMI-VOICED SOUND MARK
      e == 42607 || // Mn       COMBINING CYRILLIC VZMET
      42608 <= e && e <= 42610 || // Me   [3] COMBINING CYRILLIC TEN MILLIONS SIGN..COMBINING CYRILLIC THOUSAND MILLIONS SIGN
      42612 <= e && e <= 42621 || // Mn  [10] COMBINING CYRILLIC LETTER UKRAINIAN IE..COMBINING CYRILLIC PAYEROK
      42654 <= e && e <= 42655 || // Mn   [2] COMBINING CYRILLIC LETTER EF..COMBINING CYRILLIC LETTER IOTIFIED E
      42736 <= e && e <= 42737 || // Mn   [2] BAMUM COMBINING MARK KOQNDON..BAMUM COMBINING MARK TUKWENTIS
      e == 43010 || // Mn       SYLOTI NAGRI SIGN DVISVARA
      e == 43014 || // Mn       SYLOTI NAGRI SIGN HASANTA
      e == 43019 || // Mn       SYLOTI NAGRI SIGN ANUSVARA
      43045 <= e && e <= 43046 || // Mn   [2] SYLOTI NAGRI VOWEL SIGN U..SYLOTI NAGRI VOWEL SIGN E
      43204 <= e && e <= 43205 || // Mn   [2] SAURASHTRA SIGN VIRAMA..SAURASHTRA SIGN CANDRABINDU
      43232 <= e && e <= 43249 || // Mn  [18] COMBINING DEVANAGARI DIGIT ZERO..COMBINING DEVANAGARI SIGN AVAGRAHA
      43302 <= e && e <= 43309 || // Mn   [8] KAYAH LI VOWEL UE..KAYAH LI TONE CALYA PLOPHU
      43335 <= e && e <= 43345 || // Mn  [11] REJANG VOWEL SIGN I..REJANG CONSONANT SIGN R
      43392 <= e && e <= 43394 || // Mn   [3] JAVANESE SIGN PANYANGGA..JAVANESE SIGN LAYAR
      e == 43443 || // Mn       JAVANESE SIGN CECAK TELU
      43446 <= e && e <= 43449 || // Mn   [4] JAVANESE VOWEL SIGN WULU..JAVANESE VOWEL SIGN SUKU MENDUT
      e == 43452 || // Mn       JAVANESE VOWEL SIGN PEPET
      e == 43493 || // Mn       MYANMAR SIGN SHAN SAW
      43561 <= e && e <= 43566 || // Mn   [6] CHAM VOWEL SIGN AA..CHAM VOWEL SIGN OE
      43569 <= e && e <= 43570 || // Mn   [2] CHAM VOWEL SIGN AU..CHAM VOWEL SIGN UE
      43573 <= e && e <= 43574 || // Mn   [2] CHAM CONSONANT SIGN LA..CHAM CONSONANT SIGN WA
      e == 43587 || // Mn       CHAM CONSONANT SIGN FINAL NG
      e == 43596 || // Mn       CHAM CONSONANT SIGN FINAL M
      e == 43644 || // Mn       MYANMAR SIGN TAI LAING TONE-2
      e == 43696 || // Mn       TAI VIET MAI KANG
      43698 <= e && e <= 43700 || // Mn   [3] TAI VIET VOWEL I..TAI VIET VOWEL U
      43703 <= e && e <= 43704 || // Mn   [2] TAI VIET MAI KHIT..TAI VIET VOWEL IA
      43710 <= e && e <= 43711 || // Mn   [2] TAI VIET VOWEL AM..TAI VIET TONE MAI EK
      e == 43713 || // Mn       TAI VIET TONE MAI THO
      43756 <= e && e <= 43757 || // Mn   [2] MEETEI MAYEK VOWEL SIGN UU..MEETEI MAYEK VOWEL SIGN AAI
      e == 43766 || // Mn       MEETEI MAYEK VIRAMA
      e == 44005 || // Mn       MEETEI MAYEK VOWEL SIGN ANAP
      e == 44008 || // Mn       MEETEI MAYEK VOWEL SIGN UNAP
      e == 44013 || // Mn       MEETEI MAYEK APUN IYEK
      e == 64286 || // Mn       HEBREW POINT JUDEO-SPANISH VARIKA
      65024 <= e && e <= 65039 || // Mn  [16] VARIATION SELECTOR-1..VARIATION SELECTOR-16
      65056 <= e && e <= 65071 || // Mn  [16] COMBINING LIGATURE LEFT HALF..COMBINING CYRILLIC TITLO RIGHT HALF
      65438 <= e && e <= 65439 || // Lm   [2] HALFWIDTH KATAKANA VOICED SOUND MARK..HALFWIDTH KATAKANA SEMI-VOICED SOUND MARK
      e == 66045 || // Mn       PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE
      e == 66272 || // Mn       COPTIC EPACT THOUSANDS MARK
      66422 <= e && e <= 66426 || // Mn   [5] COMBINING OLD PERMIC LETTER AN..COMBINING OLD PERMIC LETTER SII
      68097 <= e && e <= 68099 || // Mn   [3] KHAROSHTHI VOWEL SIGN I..KHAROSHTHI VOWEL SIGN VOCALIC R
      68101 <= e && e <= 68102 || // Mn   [2] KHAROSHTHI VOWEL SIGN E..KHAROSHTHI VOWEL SIGN O
      68108 <= e && e <= 68111 || // Mn   [4] KHAROSHTHI VOWEL LENGTH MARK..KHAROSHTHI SIGN VISARGA
      68152 <= e && e <= 68154 || // Mn   [3] KHAROSHTHI SIGN BAR ABOVE..KHAROSHTHI SIGN DOT BELOW
      e == 68159 || // Mn       KHAROSHTHI VIRAMA
      68325 <= e && e <= 68326 || // Mn   [2] MANICHAEAN ABBREVIATION MARK ABOVE..MANICHAEAN ABBREVIATION MARK BELOW
      e == 69633 || // Mn       BRAHMI SIGN ANUSVARA
      69688 <= e && e <= 69702 || // Mn  [15] BRAHMI VOWEL SIGN AA..BRAHMI VIRAMA
      69759 <= e && e <= 69761 || // Mn   [3] BRAHMI NUMBER JOINER..KAITHI SIGN ANUSVARA
      69811 <= e && e <= 69814 || // Mn   [4] KAITHI VOWEL SIGN U..KAITHI VOWEL SIGN AI
      69817 <= e && e <= 69818 || // Mn   [2] KAITHI SIGN VIRAMA..KAITHI SIGN NUKTA
      69888 <= e && e <= 69890 || // Mn   [3] CHAKMA SIGN CANDRABINDU..CHAKMA SIGN VISARGA
      69927 <= e && e <= 69931 || // Mn   [5] CHAKMA VOWEL SIGN A..CHAKMA VOWEL SIGN UU
      69933 <= e && e <= 69940 || // Mn   [8] CHAKMA VOWEL SIGN AI..CHAKMA MAAYYAA
      e == 70003 || // Mn       MAHAJANI SIGN NUKTA
      70016 <= e && e <= 70017 || // Mn   [2] SHARADA SIGN CANDRABINDU..SHARADA SIGN ANUSVARA
      70070 <= e && e <= 70078 || // Mn   [9] SHARADA VOWEL SIGN U..SHARADA VOWEL SIGN O
      70090 <= e && e <= 70092 || // Mn   [3] SHARADA SIGN NUKTA..SHARADA EXTRA SHORT VOWEL MARK
      70191 <= e && e <= 70193 || // Mn   [3] KHOJKI VOWEL SIGN U..KHOJKI VOWEL SIGN AI
      e == 70196 || // Mn       KHOJKI SIGN ANUSVARA
      70198 <= e && e <= 70199 || // Mn   [2] KHOJKI SIGN NUKTA..KHOJKI SIGN SHADDA
      e == 70206 || // Mn       KHOJKI SIGN SUKUN
      e == 70367 || // Mn       KHUDAWADI SIGN ANUSVARA
      70371 <= e && e <= 70378 || // Mn   [8] KHUDAWADI VOWEL SIGN U..KHUDAWADI SIGN VIRAMA
      70400 <= e && e <= 70401 || // Mn   [2] GRANTHA SIGN COMBINING ANUSVARA ABOVE..GRANTHA SIGN CANDRABINDU
      e == 70460 || // Mn       GRANTHA SIGN NUKTA
      e == 70462 || // Mc       GRANTHA VOWEL SIGN AA
      e == 70464 || // Mn       GRANTHA VOWEL SIGN II
      e == 70487 || // Mc       GRANTHA AU LENGTH MARK
      70502 <= e && e <= 70508 || // Mn   [7] COMBINING GRANTHA DIGIT ZERO..COMBINING GRANTHA DIGIT SIX
      70512 <= e && e <= 70516 || // Mn   [5] COMBINING GRANTHA LETTER A..COMBINING GRANTHA LETTER PA
      70712 <= e && e <= 70719 || // Mn   [8] NEWA VOWEL SIGN U..NEWA VOWEL SIGN AI
      70722 <= e && e <= 70724 || // Mn   [3] NEWA SIGN VIRAMA..NEWA SIGN ANUSVARA
      e == 70726 || // Mn       NEWA SIGN NUKTA
      e == 70832 || // Mc       TIRHUTA VOWEL SIGN AA
      70835 <= e && e <= 70840 || // Mn   [6] TIRHUTA VOWEL SIGN U..TIRHUTA VOWEL SIGN VOCALIC LL
      e == 70842 || // Mn       TIRHUTA VOWEL SIGN SHORT E
      e == 70845 || // Mc       TIRHUTA VOWEL SIGN SHORT O
      70847 <= e && e <= 70848 || // Mn   [2] TIRHUTA SIGN CANDRABINDU..TIRHUTA SIGN ANUSVARA
      70850 <= e && e <= 70851 || // Mn   [2] TIRHUTA SIGN VIRAMA..TIRHUTA SIGN NUKTA
      e == 71087 || // Mc       SIDDHAM VOWEL SIGN AA
      71090 <= e && e <= 71093 || // Mn   [4] SIDDHAM VOWEL SIGN U..SIDDHAM VOWEL SIGN VOCALIC RR
      71100 <= e && e <= 71101 || // Mn   [2] SIDDHAM SIGN CANDRABINDU..SIDDHAM SIGN ANUSVARA
      71103 <= e && e <= 71104 || // Mn   [2] SIDDHAM SIGN VIRAMA..SIDDHAM SIGN NUKTA
      71132 <= e && e <= 71133 || // Mn   [2] SIDDHAM VOWEL SIGN ALTERNATE U..SIDDHAM VOWEL SIGN ALTERNATE UU
      71219 <= e && e <= 71226 || // Mn   [8] MODI VOWEL SIGN U..MODI VOWEL SIGN AI
      e == 71229 || // Mn       MODI SIGN ANUSVARA
      71231 <= e && e <= 71232 || // Mn   [2] MODI SIGN VIRAMA..MODI SIGN ARDHACANDRA
      e == 71339 || // Mn       TAKRI SIGN ANUSVARA
      e == 71341 || // Mn       TAKRI VOWEL SIGN AA
      71344 <= e && e <= 71349 || // Mn   [6] TAKRI VOWEL SIGN U..TAKRI VOWEL SIGN AU
      e == 71351 || // Mn       TAKRI SIGN NUKTA
      71453 <= e && e <= 71455 || // Mn   [3] AHOM CONSONANT SIGN MEDIAL LA..AHOM CONSONANT SIGN MEDIAL LIGATING RA
      71458 <= e && e <= 71461 || // Mn   [4] AHOM VOWEL SIGN I..AHOM VOWEL SIGN UU
      71463 <= e && e <= 71467 || // Mn   [5] AHOM VOWEL SIGN AW..AHOM SIGN KILLER
      72193 <= e && e <= 72198 || // Mn   [6] ZANABAZAR SQUARE VOWEL SIGN I..ZANABAZAR SQUARE VOWEL SIGN O
      72201 <= e && e <= 72202 || // Mn   [2] ZANABAZAR SQUARE VOWEL SIGN REVERSED I..ZANABAZAR SQUARE VOWEL LENGTH MARK
      72243 <= e && e <= 72248 || // Mn   [6] ZANABAZAR SQUARE FINAL CONSONANT MARK..ZANABAZAR SQUARE SIGN ANUSVARA
      72251 <= e && e <= 72254 || // Mn   [4] ZANABAZAR SQUARE CLUSTER-FINAL LETTER YA..ZANABAZAR SQUARE CLUSTER-FINAL LETTER VA
      e == 72263 || // Mn       ZANABAZAR SQUARE SUBJOINER
      72273 <= e && e <= 72278 || // Mn   [6] SOYOMBO VOWEL SIGN I..SOYOMBO VOWEL SIGN OE
      72281 <= e && e <= 72283 || // Mn   [3] SOYOMBO VOWEL SIGN VOCALIC R..SOYOMBO VOWEL LENGTH MARK
      72330 <= e && e <= 72342 || // Mn  [13] SOYOMBO FINAL CONSONANT SIGN G..SOYOMBO SIGN ANUSVARA
      72344 <= e && e <= 72345 || // Mn   [2] SOYOMBO GEMINATION MARK..SOYOMBO SUBJOINER
      72752 <= e && e <= 72758 || // Mn   [7] BHAIKSUKI VOWEL SIGN I..BHAIKSUKI VOWEL SIGN VOCALIC L
      72760 <= e && e <= 72765 || // Mn   [6] BHAIKSUKI VOWEL SIGN E..BHAIKSUKI SIGN ANUSVARA
      e == 72767 || // Mn       BHAIKSUKI SIGN VIRAMA
      72850 <= e && e <= 72871 || // Mn  [22] MARCHEN SUBJOINED LETTER KA..MARCHEN SUBJOINED LETTER ZA
      72874 <= e && e <= 72880 || // Mn   [7] MARCHEN SUBJOINED LETTER RA..MARCHEN VOWEL SIGN AA
      72882 <= e && e <= 72883 || // Mn   [2] MARCHEN VOWEL SIGN U..MARCHEN VOWEL SIGN E
      72885 <= e && e <= 72886 || // Mn   [2] MARCHEN SIGN ANUSVARA..MARCHEN SIGN CANDRABINDU
      73009 <= e && e <= 73014 || // Mn   [6] MASARAM GONDI VOWEL SIGN AA..MASARAM GONDI VOWEL SIGN VOCALIC R
      e == 73018 || // Mn       MASARAM GONDI VOWEL SIGN E
      73020 <= e && e <= 73021 || // Mn   [2] MASARAM GONDI VOWEL SIGN AI..MASARAM GONDI VOWEL SIGN O
      73023 <= e && e <= 73029 || // Mn   [7] MASARAM GONDI VOWEL SIGN AU..MASARAM GONDI VIRAMA
      e == 73031 || // Mn       MASARAM GONDI RA-KARA
      92912 <= e && e <= 92916 || // Mn   [5] BASSA VAH COMBINING HIGH TONE..BASSA VAH COMBINING HIGH-LOW TONE
      92976 <= e && e <= 92982 || // Mn   [7] PAHAWH HMONG MARK CIM TUB..PAHAWH HMONG MARK CIM TAUM
      94095 <= e && e <= 94098 || // Mn   [4] MIAO TONE RIGHT..MIAO TONE BELOW
      113821 <= e && e <= 113822 || // Mn   [2] DUPLOYAN THICK LETTER SELECTOR..DUPLOYAN DOUBLE MARK
      e == 119141 || // Mc       MUSICAL SYMBOL COMBINING STEM
      119143 <= e && e <= 119145 || // Mn   [3] MUSICAL SYMBOL COMBINING TREMOLO-1..MUSICAL SYMBOL COMBINING TREMOLO-3
      119150 <= e && e <= 119154 || // Mc   [5] MUSICAL SYMBOL COMBINING FLAG-1..MUSICAL SYMBOL COMBINING FLAG-5
      119163 <= e && e <= 119170 || // Mn   [8] MUSICAL SYMBOL COMBINING ACCENT..MUSICAL SYMBOL COMBINING LOURE
      119173 <= e && e <= 119179 || // Mn   [7] MUSICAL SYMBOL COMBINING DOIT..MUSICAL SYMBOL COMBINING TRIPLE TONGUE
      119210 <= e && e <= 119213 || // Mn   [4] MUSICAL SYMBOL COMBINING DOWN BOW..MUSICAL SYMBOL COMBINING SNAP PIZZICATO
      119362 <= e && e <= 119364 || // Mn   [3] COMBINING GREEK MUSICAL TRISEME..COMBINING GREEK MUSICAL PENTASEME
      121344 <= e && e <= 121398 || // Mn  [55] SIGNWRITING HEAD RIM..SIGNWRITING AIR SUCKING IN
      121403 <= e && e <= 121452 || // Mn  [50] SIGNWRITING MOUTH CLOSED NEUTRAL..SIGNWRITING EXCITEMENT
      e == 121461 || // Mn       SIGNWRITING UPPER BODY TILTING FROM HIP JOINTS
      e == 121476 || // Mn       SIGNWRITING LOCATION HEAD NECK
      121499 <= e && e <= 121503 || // Mn   [5] SIGNWRITING FILL MODIFIER-2..SIGNWRITING FILL MODIFIER-6
      121505 <= e && e <= 121519 || // Mn  [15] SIGNWRITING ROTATION MODIFIER-2..SIGNWRITING ROTATION MODIFIER-16
      122880 <= e && e <= 122886 || // Mn   [7] COMBINING GLAGOLITIC LETTER AZU..COMBINING GLAGOLITIC LETTER ZHIVETE
      122888 <= e && e <= 122904 || // Mn  [17] COMBINING GLAGOLITIC LETTER ZEMLJA..COMBINING GLAGOLITIC LETTER HERU
      122907 <= e && e <= 122913 || // Mn   [7] COMBINING GLAGOLITIC LETTER SHTA..COMBINING GLAGOLITIC LETTER YATI
      122915 <= e && e <= 122916 || // Mn   [2] COMBINING GLAGOLITIC LETTER YU..COMBINING GLAGOLITIC LETTER SMALL YUS
      122918 <= e && e <= 122922 || // Mn   [5] COMBINING GLAGOLITIC LETTER YO..COMBINING GLAGOLITIC LETTER FITA
      125136 <= e && e <= 125142 || // Mn   [7] MENDE KIKAKUI COMBINING NUMBER TEENS..MENDE KIKAKUI COMBINING NUMBER MILLIONS
      125252 <= e && e <= 125258 || // Mn   [7] ADLAM ALIF LENGTHENER..ADLAM NUKTA
      917536 <= e && e <= 917631 || // Cf  [96] TAG SPACE..CANCEL TAG
      917760 <= e && e <= 917999 ? o : 127462 <= e && e <= 127487 ? l : e == 2307 || // Mc       DEVANAGARI SIGN VISARGA
      e == 2363 || // Mc       DEVANAGARI VOWEL SIGN OOE
      2366 <= e && e <= 2368 || // Mc   [3] DEVANAGARI VOWEL SIGN AA..DEVANAGARI VOWEL SIGN II
      2377 <= e && e <= 2380 || // Mc   [4] DEVANAGARI VOWEL SIGN CANDRA O..DEVANAGARI VOWEL SIGN AU
      2382 <= e && e <= 2383 || // Mc   [2] DEVANAGARI VOWEL SIGN PRISHTHAMATRA E..DEVANAGARI VOWEL SIGN AW
      2434 <= e && e <= 2435 || // Mc   [2] BENGALI SIGN ANUSVARA..BENGALI SIGN VISARGA
      2495 <= e && e <= 2496 || // Mc   [2] BENGALI VOWEL SIGN I..BENGALI VOWEL SIGN II
      2503 <= e && e <= 2504 || // Mc   [2] BENGALI VOWEL SIGN E..BENGALI VOWEL SIGN AI
      2507 <= e && e <= 2508 || // Mc   [2] BENGALI VOWEL SIGN O..BENGALI VOWEL SIGN AU
      e == 2563 || // Mc       GURMUKHI SIGN VISARGA
      2622 <= e && e <= 2624 || // Mc   [3] GURMUKHI VOWEL SIGN AA..GURMUKHI VOWEL SIGN II
      e == 2691 || // Mc       GUJARATI SIGN VISARGA
      2750 <= e && e <= 2752 || // Mc   [3] GUJARATI VOWEL SIGN AA..GUJARATI VOWEL SIGN II
      e == 2761 || // Mc       GUJARATI VOWEL SIGN CANDRA O
      2763 <= e && e <= 2764 || // Mc   [2] GUJARATI VOWEL SIGN O..GUJARATI VOWEL SIGN AU
      2818 <= e && e <= 2819 || // Mc   [2] ORIYA SIGN ANUSVARA..ORIYA SIGN VISARGA
      e == 2880 || // Mc       ORIYA VOWEL SIGN II
      2887 <= e && e <= 2888 || // Mc   [2] ORIYA VOWEL SIGN E..ORIYA VOWEL SIGN AI
      2891 <= e && e <= 2892 || // Mc   [2] ORIYA VOWEL SIGN O..ORIYA VOWEL SIGN AU
      e == 3007 || // Mc       TAMIL VOWEL SIGN I
      3009 <= e && e <= 3010 || // Mc   [2] TAMIL VOWEL SIGN U..TAMIL VOWEL SIGN UU
      3014 <= e && e <= 3016 || // Mc   [3] TAMIL VOWEL SIGN E..TAMIL VOWEL SIGN AI
      3018 <= e && e <= 3020 || // Mc   [3] TAMIL VOWEL SIGN O..TAMIL VOWEL SIGN AU
      3073 <= e && e <= 3075 || // Mc   [3] TELUGU SIGN CANDRABINDU..TELUGU SIGN VISARGA
      3137 <= e && e <= 3140 || // Mc   [4] TELUGU VOWEL SIGN U..TELUGU VOWEL SIGN VOCALIC RR
      3202 <= e && e <= 3203 || // Mc   [2] KANNADA SIGN ANUSVARA..KANNADA SIGN VISARGA
      e == 3262 || // Mc       KANNADA VOWEL SIGN AA
      3264 <= e && e <= 3265 || // Mc   [2] KANNADA VOWEL SIGN II..KANNADA VOWEL SIGN U
      3267 <= e && e <= 3268 || // Mc   [2] KANNADA VOWEL SIGN VOCALIC R..KANNADA VOWEL SIGN VOCALIC RR
      3271 <= e && e <= 3272 || // Mc   [2] KANNADA VOWEL SIGN EE..KANNADA VOWEL SIGN AI
      3274 <= e && e <= 3275 || // Mc   [2] KANNADA VOWEL SIGN O..KANNADA VOWEL SIGN OO
      3330 <= e && e <= 3331 || // Mc   [2] MALAYALAM SIGN ANUSVARA..MALAYALAM SIGN VISARGA
      3391 <= e && e <= 3392 || // Mc   [2] MALAYALAM VOWEL SIGN I..MALAYALAM VOWEL SIGN II
      3398 <= e && e <= 3400 || // Mc   [3] MALAYALAM VOWEL SIGN E..MALAYALAM VOWEL SIGN AI
      3402 <= e && e <= 3404 || // Mc   [3] MALAYALAM VOWEL SIGN O..MALAYALAM VOWEL SIGN AU
      3458 <= e && e <= 3459 || // Mc   [2] SINHALA SIGN ANUSVARAYA..SINHALA SIGN VISARGAYA
      3536 <= e && e <= 3537 || // Mc   [2] SINHALA VOWEL SIGN KETTI AEDA-PILLA..SINHALA VOWEL SIGN DIGA AEDA-PILLA
      3544 <= e && e <= 3550 || // Mc   [7] SINHALA VOWEL SIGN GAETTA-PILLA..SINHALA VOWEL SIGN KOMBUVA HAA GAYANUKITTA
      3570 <= e && e <= 3571 || // Mc   [2] SINHALA VOWEL SIGN DIGA GAETTA-PILLA..SINHALA VOWEL SIGN DIGA GAYANUKITTA
      e == 3635 || // Lo       THAI CHARACTER SARA AM
      e == 3763 || // Lo       LAO VOWEL SIGN AM
      3902 <= e && e <= 3903 || // Mc   [2] TIBETAN SIGN YAR TSHES..TIBETAN SIGN MAR TSHES
      e == 3967 || // Mc       TIBETAN SIGN RNAM BCAD
      e == 4145 || // Mc       MYANMAR VOWEL SIGN E
      4155 <= e && e <= 4156 || // Mc   [2] MYANMAR CONSONANT SIGN MEDIAL YA..MYANMAR CONSONANT SIGN MEDIAL RA
      4182 <= e && e <= 4183 || // Mc   [2] MYANMAR VOWEL SIGN VOCALIC R..MYANMAR VOWEL SIGN VOCALIC RR
      e == 4228 || // Mc       MYANMAR VOWEL SIGN SHAN E
      e == 6070 || // Mc       KHMER VOWEL SIGN AA
      6078 <= e && e <= 6085 || // Mc   [8] KHMER VOWEL SIGN OE..KHMER VOWEL SIGN AU
      6087 <= e && e <= 6088 || // Mc   [2] KHMER SIGN REAHMUK..KHMER SIGN YUUKALEAPINTU
      6435 <= e && e <= 6438 || // Mc   [4] LIMBU VOWEL SIGN EE..LIMBU VOWEL SIGN AU
      6441 <= e && e <= 6443 || // Mc   [3] LIMBU SUBJOINED LETTER YA..LIMBU SUBJOINED LETTER WA
      6448 <= e && e <= 6449 || // Mc   [2] LIMBU SMALL LETTER KA..LIMBU SMALL LETTER NGA
      6451 <= e && e <= 6456 || // Mc   [6] LIMBU SMALL LETTER TA..LIMBU SMALL LETTER LA
      6681 <= e && e <= 6682 || // Mc   [2] BUGINESE VOWEL SIGN E..BUGINESE VOWEL SIGN O
      e == 6741 || // Mc       TAI THAM CONSONANT SIGN MEDIAL RA
      e == 6743 || // Mc       TAI THAM CONSONANT SIGN LA TANG LAI
      6765 <= e && e <= 6770 || // Mc   [6] TAI THAM VOWEL SIGN OY..TAI THAM VOWEL SIGN THAM AI
      e == 6916 || // Mc       BALINESE SIGN BISAH
      e == 6965 || // Mc       BALINESE VOWEL SIGN TEDUNG
      e == 6971 || // Mc       BALINESE VOWEL SIGN RA REPA TEDUNG
      6973 <= e && e <= 6977 || // Mc   [5] BALINESE VOWEL SIGN LA LENGA TEDUNG..BALINESE VOWEL SIGN TALING REPA TEDUNG
      6979 <= e && e <= 6980 || // Mc   [2] BALINESE VOWEL SIGN PEPET TEDUNG..BALINESE ADEG ADEG
      e == 7042 || // Mc       SUNDANESE SIGN PANGWISAD
      e == 7073 || // Mc       SUNDANESE CONSONANT SIGN PAMINGKAL
      7078 <= e && e <= 7079 || // Mc   [2] SUNDANESE VOWEL SIGN PANAELAENG..SUNDANESE VOWEL SIGN PANOLONG
      e == 7082 || // Mc       SUNDANESE SIGN PAMAAEH
      e == 7143 || // Mc       BATAK VOWEL SIGN E
      7146 <= e && e <= 7148 || // Mc   [3] BATAK VOWEL SIGN I..BATAK VOWEL SIGN O
      e == 7150 || // Mc       BATAK VOWEL SIGN U
      7154 <= e && e <= 7155 || // Mc   [2] BATAK PANGOLAT..BATAK PANONGONAN
      7204 <= e && e <= 7211 || // Mc   [8] LEPCHA SUBJOINED LETTER YA..LEPCHA VOWEL SIGN UU
      7220 <= e && e <= 7221 || // Mc   [2] LEPCHA CONSONANT SIGN NYIN-DO..LEPCHA CONSONANT SIGN KANG
      e == 7393 || // Mc       VEDIC TONE ATHARVAVEDIC INDEPENDENT SVARITA
      7410 <= e && e <= 7411 || // Mc   [2] VEDIC SIGN ARDHAVISARGA..VEDIC SIGN ROTATED ARDHAVISARGA
      e == 7415 || // Mc       VEDIC SIGN ATIKRAMA
      43043 <= e && e <= 43044 || // Mc   [2] SYLOTI NAGRI VOWEL SIGN A..SYLOTI NAGRI VOWEL SIGN I
      e == 43047 || // Mc       SYLOTI NAGRI VOWEL SIGN OO
      43136 <= e && e <= 43137 || // Mc   [2] SAURASHTRA SIGN ANUSVARA..SAURASHTRA SIGN VISARGA
      43188 <= e && e <= 43203 || // Mc  [16] SAURASHTRA CONSONANT SIGN HAARU..SAURASHTRA VOWEL SIGN AU
      43346 <= e && e <= 43347 || // Mc   [2] REJANG CONSONANT SIGN H..REJANG VIRAMA
      e == 43395 || // Mc       JAVANESE SIGN WIGNYAN
      43444 <= e && e <= 43445 || // Mc   [2] JAVANESE VOWEL SIGN TARUNG..JAVANESE VOWEL SIGN TOLONG
      43450 <= e && e <= 43451 || // Mc   [2] JAVANESE VOWEL SIGN TALING..JAVANESE VOWEL SIGN DIRGA MURE
      43453 <= e && e <= 43456 || // Mc   [4] JAVANESE CONSONANT SIGN KERET..JAVANESE PANGKON
      43567 <= e && e <= 43568 || // Mc   [2] CHAM VOWEL SIGN O..CHAM VOWEL SIGN AI
      43571 <= e && e <= 43572 || // Mc   [2] CHAM CONSONANT SIGN YA..CHAM CONSONANT SIGN RA
      e == 43597 || // Mc       CHAM CONSONANT SIGN FINAL H
      e == 43755 || // Mc       MEETEI MAYEK VOWEL SIGN II
      43758 <= e && e <= 43759 || // Mc   [2] MEETEI MAYEK VOWEL SIGN AU..MEETEI MAYEK VOWEL SIGN AAU
      e == 43765 || // Mc       MEETEI MAYEK VOWEL SIGN VISARGA
      44003 <= e && e <= 44004 || // Mc   [2] MEETEI MAYEK VOWEL SIGN ONAP..MEETEI MAYEK VOWEL SIGN INAP
      44006 <= e && e <= 44007 || // Mc   [2] MEETEI MAYEK VOWEL SIGN YENAP..MEETEI MAYEK VOWEL SIGN SOUNAP
      44009 <= e && e <= 44010 || // Mc   [2] MEETEI MAYEK VOWEL SIGN CHEINAP..MEETEI MAYEK VOWEL SIGN NUNG
      e == 44012 || // Mc       MEETEI MAYEK LUM IYEK
      e == 69632 || // Mc       BRAHMI SIGN CANDRABINDU
      e == 69634 || // Mc       BRAHMI SIGN VISARGA
      e == 69762 || // Mc       KAITHI SIGN VISARGA
      69808 <= e && e <= 69810 || // Mc   [3] KAITHI VOWEL SIGN AA..KAITHI VOWEL SIGN II
      69815 <= e && e <= 69816 || // Mc   [2] KAITHI VOWEL SIGN O..KAITHI VOWEL SIGN AU
      e == 69932 || // Mc       CHAKMA VOWEL SIGN E
      e == 70018 || // Mc       SHARADA SIGN VISARGA
      70067 <= e && e <= 70069 || // Mc   [3] SHARADA VOWEL SIGN AA..SHARADA VOWEL SIGN II
      70079 <= e && e <= 70080 || // Mc   [2] SHARADA VOWEL SIGN AU..SHARADA SIGN VIRAMA
      70188 <= e && e <= 70190 || // Mc   [3] KHOJKI VOWEL SIGN AA..KHOJKI VOWEL SIGN II
      70194 <= e && e <= 70195 || // Mc   [2] KHOJKI VOWEL SIGN O..KHOJKI VOWEL SIGN AU
      e == 70197 || // Mc       KHOJKI SIGN VIRAMA
      70368 <= e && e <= 70370 || // Mc   [3] KHUDAWADI VOWEL SIGN AA..KHUDAWADI VOWEL SIGN II
      70402 <= e && e <= 70403 || // Mc   [2] GRANTHA SIGN ANUSVARA..GRANTHA SIGN VISARGA
      e == 70463 || // Mc       GRANTHA VOWEL SIGN I
      70465 <= e && e <= 70468 || // Mc   [4] GRANTHA VOWEL SIGN U..GRANTHA VOWEL SIGN VOCALIC RR
      70471 <= e && e <= 70472 || // Mc   [2] GRANTHA VOWEL SIGN EE..GRANTHA VOWEL SIGN AI
      70475 <= e && e <= 70477 || // Mc   [3] GRANTHA VOWEL SIGN OO..GRANTHA SIGN VIRAMA
      70498 <= e && e <= 70499 || // Mc   [2] GRANTHA VOWEL SIGN VOCALIC L..GRANTHA VOWEL SIGN VOCALIC LL
      70709 <= e && e <= 70711 || // Mc   [3] NEWA VOWEL SIGN AA..NEWA VOWEL SIGN II
      70720 <= e && e <= 70721 || // Mc   [2] NEWA VOWEL SIGN O..NEWA VOWEL SIGN AU
      e == 70725 || // Mc       NEWA SIGN VISARGA
      70833 <= e && e <= 70834 || // Mc   [2] TIRHUTA VOWEL SIGN I..TIRHUTA VOWEL SIGN II
      e == 70841 || // Mc       TIRHUTA VOWEL SIGN E
      70843 <= e && e <= 70844 || // Mc   [2] TIRHUTA VOWEL SIGN AI..TIRHUTA VOWEL SIGN O
      e == 70846 || // Mc       TIRHUTA VOWEL SIGN AU
      e == 70849 || // Mc       TIRHUTA SIGN VISARGA
      71088 <= e && e <= 71089 || // Mc   [2] SIDDHAM VOWEL SIGN I..SIDDHAM VOWEL SIGN II
      71096 <= e && e <= 71099 || // Mc   [4] SIDDHAM VOWEL SIGN E..SIDDHAM VOWEL SIGN AU
      e == 71102 || // Mc       SIDDHAM SIGN VISARGA
      71216 <= e && e <= 71218 || // Mc   [3] MODI VOWEL SIGN AA..MODI VOWEL SIGN II
      71227 <= e && e <= 71228 || // Mc   [2] MODI VOWEL SIGN O..MODI VOWEL SIGN AU
      e == 71230 || // Mc       MODI SIGN VISARGA
      e == 71340 || // Mc       TAKRI SIGN VISARGA
      71342 <= e && e <= 71343 || // Mc   [2] TAKRI VOWEL SIGN I..TAKRI VOWEL SIGN II
      e == 71350 || // Mc       TAKRI SIGN VIRAMA
      71456 <= e && e <= 71457 || // Mc   [2] AHOM VOWEL SIGN A..AHOM VOWEL SIGN AA
      e == 71462 || // Mc       AHOM VOWEL SIGN E
      72199 <= e && e <= 72200 || // Mc   [2] ZANABAZAR SQUARE VOWEL SIGN AI..ZANABAZAR SQUARE VOWEL SIGN AU
      e == 72249 || // Mc       ZANABAZAR SQUARE SIGN VISARGA
      72279 <= e && e <= 72280 || // Mc   [2] SOYOMBO VOWEL SIGN AI..SOYOMBO VOWEL SIGN AU
      e == 72343 || // Mc       SOYOMBO SIGN VISARGA
      e == 72751 || // Mc       BHAIKSUKI VOWEL SIGN AA
      e == 72766 || // Mc       BHAIKSUKI SIGN VISARGA
      e == 72873 || // Mc       MARCHEN SUBJOINED LETTER YA
      e == 72881 || // Mc       MARCHEN VOWEL SIGN I
      e == 72884 || // Mc       MARCHEN VOWEL SIGN O
      94033 <= e && e <= 94078 || // Mc  [46] MIAO SIGN ASPIRATION..MIAO VOWEL SIGN NG
      e == 119142 || // Mc       MUSICAL SYMBOL COMBINING SPRECHGESANG STEM
      e == 119149 ? s : 4352 <= e && e <= 4447 || // Lo  [96] HANGUL CHOSEONG KIYEOK..HANGUL CHOSEONG FILLER
      43360 <= e && e <= 43388 ? u : 4448 <= e && e <= 4519 || // Lo  [72] HANGUL JUNGSEONG FILLER..HANGUL JUNGSEONG O-YAE
      55216 <= e && e <= 55238 ? f : 4520 <= e && e <= 4607 || // Lo  [88] HANGUL JONGSEONG KIYEOK..HANGUL JONGSEONG SSANGNIEUN
      55243 <= e && e <= 55291 ? x : e == 44032 || // Lo       HANGUL SYLLABLE GA
      e == 44060 || // Lo       HANGUL SYLLABLE GAE
      e == 44088 || // Lo       HANGUL SYLLABLE GYA
      e == 44116 || // Lo       HANGUL SYLLABLE GYAE
      e == 44144 || // Lo       HANGUL SYLLABLE GEO
      e == 44172 || // Lo       HANGUL SYLLABLE GE
      e == 44200 || // Lo       HANGUL SYLLABLE GYEO
      e == 44228 || // Lo       HANGUL SYLLABLE GYE
      e == 44256 || // Lo       HANGUL SYLLABLE GO
      e == 44284 || // Lo       HANGUL SYLLABLE GWA
      e == 44312 || // Lo       HANGUL SYLLABLE GWAE
      e == 44340 || // Lo       HANGUL SYLLABLE GOE
      e == 44368 || // Lo       HANGUL SYLLABLE GYO
      e == 44396 || // Lo       HANGUL SYLLABLE GU
      e == 44424 || // Lo       HANGUL SYLLABLE GWEO
      e == 44452 || // Lo       HANGUL SYLLABLE GWE
      e == 44480 || // Lo       HANGUL SYLLABLE GWI
      e == 44508 || // Lo       HANGUL SYLLABLE GYU
      e == 44536 || // Lo       HANGUL SYLLABLE GEU
      e == 44564 || // Lo       HANGUL SYLLABLE GYI
      e == 44592 || // Lo       HANGUL SYLLABLE GI
      e == 44620 || // Lo       HANGUL SYLLABLE GGA
      e == 44648 || // Lo       HANGUL SYLLABLE GGAE
      e == 44676 || // Lo       HANGUL SYLLABLE GGYA
      e == 44704 || // Lo       HANGUL SYLLABLE GGYAE
      e == 44732 || // Lo       HANGUL SYLLABLE GGEO
      e == 44760 || // Lo       HANGUL SYLLABLE GGE
      e == 44788 || // Lo       HANGUL SYLLABLE GGYEO
      e == 44816 || // Lo       HANGUL SYLLABLE GGYE
      e == 44844 || // Lo       HANGUL SYLLABLE GGO
      e == 44872 || // Lo       HANGUL SYLLABLE GGWA
      e == 44900 || // Lo       HANGUL SYLLABLE GGWAE
      e == 44928 || // Lo       HANGUL SYLLABLE GGOE
      e == 44956 || // Lo       HANGUL SYLLABLE GGYO
      e == 44984 || // Lo       HANGUL SYLLABLE GGU
      e == 45012 || // Lo       HANGUL SYLLABLE GGWEO
      e == 45040 || // Lo       HANGUL SYLLABLE GGWE
      e == 45068 || // Lo       HANGUL SYLLABLE GGWI
      e == 45096 || // Lo       HANGUL SYLLABLE GGYU
      e == 45124 || // Lo       HANGUL SYLLABLE GGEU
      e == 45152 || // Lo       HANGUL SYLLABLE GGYI
      e == 45180 || // Lo       HANGUL SYLLABLE GGI
      e == 45208 || // Lo       HANGUL SYLLABLE NA
      e == 45236 || // Lo       HANGUL SYLLABLE NAE
      e == 45264 || // Lo       HANGUL SYLLABLE NYA
      e == 45292 || // Lo       HANGUL SYLLABLE NYAE
      e == 45320 || // Lo       HANGUL SYLLABLE NEO
      e == 45348 || // Lo       HANGUL SYLLABLE NE
      e == 45376 || // Lo       HANGUL SYLLABLE NYEO
      e == 45404 || // Lo       HANGUL SYLLABLE NYE
      e == 45432 || // Lo       HANGUL SYLLABLE NO
      e == 45460 || // Lo       HANGUL SYLLABLE NWA
      e == 45488 || // Lo       HANGUL SYLLABLE NWAE
      e == 45516 || // Lo       HANGUL SYLLABLE NOE
      e == 45544 || // Lo       HANGUL SYLLABLE NYO
      e == 45572 || // Lo       HANGUL SYLLABLE NU
      e == 45600 || // Lo       HANGUL SYLLABLE NWEO
      e == 45628 || // Lo       HANGUL SYLLABLE NWE
      e == 45656 || // Lo       HANGUL SYLLABLE NWI
      e == 45684 || // Lo       HANGUL SYLLABLE NYU
      e == 45712 || // Lo       HANGUL SYLLABLE NEU
      e == 45740 || // Lo       HANGUL SYLLABLE NYI
      e == 45768 || // Lo       HANGUL SYLLABLE NI
      e == 45796 || // Lo       HANGUL SYLLABLE DA
      e == 45824 || // Lo       HANGUL SYLLABLE DAE
      e == 45852 || // Lo       HANGUL SYLLABLE DYA
      e == 45880 || // Lo       HANGUL SYLLABLE DYAE
      e == 45908 || // Lo       HANGUL SYLLABLE DEO
      e == 45936 || // Lo       HANGUL SYLLABLE DE
      e == 45964 || // Lo       HANGUL SYLLABLE DYEO
      e == 45992 || // Lo       HANGUL SYLLABLE DYE
      e == 46020 || // Lo       HANGUL SYLLABLE DO
      e == 46048 || // Lo       HANGUL SYLLABLE DWA
      e == 46076 || // Lo       HANGUL SYLLABLE DWAE
      e == 46104 || // Lo       HANGUL SYLLABLE DOE
      e == 46132 || // Lo       HANGUL SYLLABLE DYO
      e == 46160 || // Lo       HANGUL SYLLABLE DU
      e == 46188 || // Lo       HANGUL SYLLABLE DWEO
      e == 46216 || // Lo       HANGUL SYLLABLE DWE
      e == 46244 || // Lo       HANGUL SYLLABLE DWI
      e == 46272 || // Lo       HANGUL SYLLABLE DYU
      e == 46300 || // Lo       HANGUL SYLLABLE DEU
      e == 46328 || // Lo       HANGUL SYLLABLE DYI
      e == 46356 || // Lo       HANGUL SYLLABLE DI
      e == 46384 || // Lo       HANGUL SYLLABLE DDA
      e == 46412 || // Lo       HANGUL SYLLABLE DDAE
      e == 46440 || // Lo       HANGUL SYLLABLE DDYA
      e == 46468 || // Lo       HANGUL SYLLABLE DDYAE
      e == 46496 || // Lo       HANGUL SYLLABLE DDEO
      e == 46524 || // Lo       HANGUL SYLLABLE DDE
      e == 46552 || // Lo       HANGUL SYLLABLE DDYEO
      e == 46580 || // Lo       HANGUL SYLLABLE DDYE
      e == 46608 || // Lo       HANGUL SYLLABLE DDO
      e == 46636 || // Lo       HANGUL SYLLABLE DDWA
      e == 46664 || // Lo       HANGUL SYLLABLE DDWAE
      e == 46692 || // Lo       HANGUL SYLLABLE DDOE
      e == 46720 || // Lo       HANGUL SYLLABLE DDYO
      e == 46748 || // Lo       HANGUL SYLLABLE DDU
      e == 46776 || // Lo       HANGUL SYLLABLE DDWEO
      e == 46804 || // Lo       HANGUL SYLLABLE DDWE
      e == 46832 || // Lo       HANGUL SYLLABLE DDWI
      e == 46860 || // Lo       HANGUL SYLLABLE DDYU
      e == 46888 || // Lo       HANGUL SYLLABLE DDEU
      e == 46916 || // Lo       HANGUL SYLLABLE DDYI
      e == 46944 || // Lo       HANGUL SYLLABLE DDI
      e == 46972 || // Lo       HANGUL SYLLABLE RA
      e == 47e3 || // Lo       HANGUL SYLLABLE RAE
      e == 47028 || // Lo       HANGUL SYLLABLE RYA
      e == 47056 || // Lo       HANGUL SYLLABLE RYAE
      e == 47084 || // Lo       HANGUL SYLLABLE REO
      e == 47112 || // Lo       HANGUL SYLLABLE RE
      e == 47140 || // Lo       HANGUL SYLLABLE RYEO
      e == 47168 || // Lo       HANGUL SYLLABLE RYE
      e == 47196 || // Lo       HANGUL SYLLABLE RO
      e == 47224 || // Lo       HANGUL SYLLABLE RWA
      e == 47252 || // Lo       HANGUL SYLLABLE RWAE
      e == 47280 || // Lo       HANGUL SYLLABLE ROE
      e == 47308 || // Lo       HANGUL SYLLABLE RYO
      e == 47336 || // Lo       HANGUL SYLLABLE RU
      e == 47364 || // Lo       HANGUL SYLLABLE RWEO
      e == 47392 || // Lo       HANGUL SYLLABLE RWE
      e == 47420 || // Lo       HANGUL SYLLABLE RWI
      e == 47448 || // Lo       HANGUL SYLLABLE RYU
      e == 47476 || // Lo       HANGUL SYLLABLE REU
      e == 47504 || // Lo       HANGUL SYLLABLE RYI
      e == 47532 || // Lo       HANGUL SYLLABLE RI
      e == 47560 || // Lo       HANGUL SYLLABLE MA
      e == 47588 || // Lo       HANGUL SYLLABLE MAE
      e == 47616 || // Lo       HANGUL SYLLABLE MYA
      e == 47644 || // Lo       HANGUL SYLLABLE MYAE
      e == 47672 || // Lo       HANGUL SYLLABLE MEO
      e == 47700 || // Lo       HANGUL SYLLABLE ME
      e == 47728 || // Lo       HANGUL SYLLABLE MYEO
      e == 47756 || // Lo       HANGUL SYLLABLE MYE
      e == 47784 || // Lo       HANGUL SYLLABLE MO
      e == 47812 || // Lo       HANGUL SYLLABLE MWA
      e == 47840 || // Lo       HANGUL SYLLABLE MWAE
      e == 47868 || // Lo       HANGUL SYLLABLE MOE
      e == 47896 || // Lo       HANGUL SYLLABLE MYO
      e == 47924 || // Lo       HANGUL SYLLABLE MU
      e == 47952 || // Lo       HANGUL SYLLABLE MWEO
      e == 47980 || // Lo       HANGUL SYLLABLE MWE
      e == 48008 || // Lo       HANGUL SYLLABLE MWI
      e == 48036 || // Lo       HANGUL SYLLABLE MYU
      e == 48064 || // Lo       HANGUL SYLLABLE MEU
      e == 48092 || // Lo       HANGUL SYLLABLE MYI
      e == 48120 || // Lo       HANGUL SYLLABLE MI
      e == 48148 || // Lo       HANGUL SYLLABLE BA
      e == 48176 || // Lo       HANGUL SYLLABLE BAE
      e == 48204 || // Lo       HANGUL SYLLABLE BYA
      e == 48232 || // Lo       HANGUL SYLLABLE BYAE
      e == 48260 || // Lo       HANGUL SYLLABLE BEO
      e == 48288 || // Lo       HANGUL SYLLABLE BE
      e == 48316 || // Lo       HANGUL SYLLABLE BYEO
      e == 48344 || // Lo       HANGUL SYLLABLE BYE
      e == 48372 || // Lo       HANGUL SYLLABLE BO
      e == 48400 || // Lo       HANGUL SYLLABLE BWA
      e == 48428 || // Lo       HANGUL SYLLABLE BWAE
      e == 48456 || // Lo       HANGUL SYLLABLE BOE
      e == 48484 || // Lo       HANGUL SYLLABLE BYO
      e == 48512 || // Lo       HANGUL SYLLABLE BU
      e == 48540 || // Lo       HANGUL SYLLABLE BWEO
      e == 48568 || // Lo       HANGUL SYLLABLE BWE
      e == 48596 || // Lo       HANGUL SYLLABLE BWI
      e == 48624 || // Lo       HANGUL SYLLABLE BYU
      e == 48652 || // Lo       HANGUL SYLLABLE BEU
      e == 48680 || // Lo       HANGUL SYLLABLE BYI
      e == 48708 || // Lo       HANGUL SYLLABLE BI
      e == 48736 || // Lo       HANGUL SYLLABLE BBA
      e == 48764 || // Lo       HANGUL SYLLABLE BBAE
      e == 48792 || // Lo       HANGUL SYLLABLE BBYA
      e == 48820 || // Lo       HANGUL SYLLABLE BBYAE
      e == 48848 || // Lo       HANGUL SYLLABLE BBEO
      e == 48876 || // Lo       HANGUL SYLLABLE BBE
      e == 48904 || // Lo       HANGUL SYLLABLE BBYEO
      e == 48932 || // Lo       HANGUL SYLLABLE BBYE
      e == 48960 || // Lo       HANGUL SYLLABLE BBO
      e == 48988 || // Lo       HANGUL SYLLABLE BBWA
      e == 49016 || // Lo       HANGUL SYLLABLE BBWAE
      e == 49044 || // Lo       HANGUL SYLLABLE BBOE
      e == 49072 || // Lo       HANGUL SYLLABLE BBYO
      e == 49100 || // Lo       HANGUL SYLLABLE BBU
      e == 49128 || // Lo       HANGUL SYLLABLE BBWEO
      e == 49156 || // Lo       HANGUL SYLLABLE BBWE
      e == 49184 || // Lo       HANGUL SYLLABLE BBWI
      e == 49212 || // Lo       HANGUL SYLLABLE BBYU
      e == 49240 || // Lo       HANGUL SYLLABLE BBEU
      e == 49268 || // Lo       HANGUL SYLLABLE BBYI
      e == 49296 || // Lo       HANGUL SYLLABLE BBI
      e == 49324 || // Lo       HANGUL SYLLABLE SA
      e == 49352 || // Lo       HANGUL SYLLABLE SAE
      e == 49380 || // Lo       HANGUL SYLLABLE SYA
      e == 49408 || // Lo       HANGUL SYLLABLE SYAE
      e == 49436 || // Lo       HANGUL SYLLABLE SEO
      e == 49464 || // Lo       HANGUL SYLLABLE SE
      e == 49492 || // Lo       HANGUL SYLLABLE SYEO
      e == 49520 || // Lo       HANGUL SYLLABLE SYE
      e == 49548 || // Lo       HANGUL SYLLABLE SO
      e == 49576 || // Lo       HANGUL SYLLABLE SWA
      e == 49604 || // Lo       HANGUL SYLLABLE SWAE
      e == 49632 || // Lo       HANGUL SYLLABLE SOE
      e == 49660 || // Lo       HANGUL SYLLABLE SYO
      e == 49688 || // Lo       HANGUL SYLLABLE SU
      e == 49716 || // Lo       HANGUL SYLLABLE SWEO
      e == 49744 || // Lo       HANGUL SYLLABLE SWE
      e == 49772 || // Lo       HANGUL SYLLABLE SWI
      e == 49800 || // Lo       HANGUL SYLLABLE SYU
      e == 49828 || // Lo       HANGUL SYLLABLE SEU
      e == 49856 || // Lo       HANGUL SYLLABLE SYI
      e == 49884 || // Lo       HANGUL SYLLABLE SI
      e == 49912 || // Lo       HANGUL SYLLABLE SSA
      e == 49940 || // Lo       HANGUL SYLLABLE SSAE
      e == 49968 || // Lo       HANGUL SYLLABLE SSYA
      e == 49996 || // Lo       HANGUL SYLLABLE SSYAE
      e == 50024 || // Lo       HANGUL SYLLABLE SSEO
      e == 50052 || // Lo       HANGUL SYLLABLE SSE
      e == 50080 || // Lo       HANGUL SYLLABLE SSYEO
      e == 50108 || // Lo       HANGUL SYLLABLE SSYE
      e == 50136 || // Lo       HANGUL SYLLABLE SSO
      e == 50164 || // Lo       HANGUL SYLLABLE SSWA
      e == 50192 || // Lo       HANGUL SYLLABLE SSWAE
      e == 50220 || // Lo       HANGUL SYLLABLE SSOE
      e == 50248 || // Lo       HANGUL SYLLABLE SSYO
      e == 50276 || // Lo       HANGUL SYLLABLE SSU
      e == 50304 || // Lo       HANGUL SYLLABLE SSWEO
      e == 50332 || // Lo       HANGUL SYLLABLE SSWE
      e == 50360 || // Lo       HANGUL SYLLABLE SSWI
      e == 50388 || // Lo       HANGUL SYLLABLE SSYU
      e == 50416 || // Lo       HANGUL SYLLABLE SSEU
      e == 50444 || // Lo       HANGUL SYLLABLE SSYI
      e == 50472 || // Lo       HANGUL SYLLABLE SSI
      e == 50500 || // Lo       HANGUL SYLLABLE A
      e == 50528 || // Lo       HANGUL SYLLABLE AE
      e == 50556 || // Lo       HANGUL SYLLABLE YA
      e == 50584 || // Lo       HANGUL SYLLABLE YAE
      e == 50612 || // Lo       HANGUL SYLLABLE EO
      e == 50640 || // Lo       HANGUL SYLLABLE E
      e == 50668 || // Lo       HANGUL SYLLABLE YEO
      e == 50696 || // Lo       HANGUL SYLLABLE YE
      e == 50724 || // Lo       HANGUL SYLLABLE O
      e == 50752 || // Lo       HANGUL SYLLABLE WA
      e == 50780 || // Lo       HANGUL SYLLABLE WAE
      e == 50808 || // Lo       HANGUL SYLLABLE OE
      e == 50836 || // Lo       HANGUL SYLLABLE YO
      e == 50864 || // Lo       HANGUL SYLLABLE U
      e == 50892 || // Lo       HANGUL SYLLABLE WEO
      e == 50920 || // Lo       HANGUL SYLLABLE WE
      e == 50948 || // Lo       HANGUL SYLLABLE WI
      e == 50976 || // Lo       HANGUL SYLLABLE YU
      e == 51004 || // Lo       HANGUL SYLLABLE EU
      e == 51032 || // Lo       HANGUL SYLLABLE YI
      e == 51060 || // Lo       HANGUL SYLLABLE I
      e == 51088 || // Lo       HANGUL SYLLABLE JA
      e == 51116 || // Lo       HANGUL SYLLABLE JAE
      e == 51144 || // Lo       HANGUL SYLLABLE JYA
      e == 51172 || // Lo       HANGUL SYLLABLE JYAE
      e == 51200 || // Lo       HANGUL SYLLABLE JEO
      e == 51228 || // Lo       HANGUL SYLLABLE JE
      e == 51256 || // Lo       HANGUL SYLLABLE JYEO
      e == 51284 || // Lo       HANGUL SYLLABLE JYE
      e == 51312 || // Lo       HANGUL SYLLABLE JO
      e == 51340 || // Lo       HANGUL SYLLABLE JWA
      e == 51368 || // Lo       HANGUL SYLLABLE JWAE
      e == 51396 || // Lo       HANGUL SYLLABLE JOE
      e == 51424 || // Lo       HANGUL SYLLABLE JYO
      e == 51452 || // Lo       HANGUL SYLLABLE JU
      e == 51480 || // Lo       HANGUL SYLLABLE JWEO
      e == 51508 || // Lo       HANGUL SYLLABLE JWE
      e == 51536 || // Lo       HANGUL SYLLABLE JWI
      e == 51564 || // Lo       HANGUL SYLLABLE JYU
      e == 51592 || // Lo       HANGUL SYLLABLE JEU
      e == 51620 || // Lo       HANGUL SYLLABLE JYI
      e == 51648 || // Lo       HANGUL SYLLABLE JI
      e == 51676 || // Lo       HANGUL SYLLABLE JJA
      e == 51704 || // Lo       HANGUL SYLLABLE JJAE
      e == 51732 || // Lo       HANGUL SYLLABLE JJYA
      e == 51760 || // Lo       HANGUL SYLLABLE JJYAE
      e == 51788 || // Lo       HANGUL SYLLABLE JJEO
      e == 51816 || // Lo       HANGUL SYLLABLE JJE
      e == 51844 || // Lo       HANGUL SYLLABLE JJYEO
      e == 51872 || // Lo       HANGUL SYLLABLE JJYE
      e == 51900 || // Lo       HANGUL SYLLABLE JJO
      e == 51928 || // Lo       HANGUL SYLLABLE JJWA
      e == 51956 || // Lo       HANGUL SYLLABLE JJWAE
      e == 51984 || // Lo       HANGUL SYLLABLE JJOE
      e == 52012 || // Lo       HANGUL SYLLABLE JJYO
      e == 52040 || // Lo       HANGUL SYLLABLE JJU
      e == 52068 || // Lo       HANGUL SYLLABLE JJWEO
      e == 52096 || // Lo       HANGUL SYLLABLE JJWE
      e == 52124 || // Lo       HANGUL SYLLABLE JJWI
      e == 52152 || // Lo       HANGUL SYLLABLE JJYU
      e == 52180 || // Lo       HANGUL SYLLABLE JJEU
      e == 52208 || // Lo       HANGUL SYLLABLE JJYI
      e == 52236 || // Lo       HANGUL SYLLABLE JJI
      e == 52264 || // Lo       HANGUL SYLLABLE CA
      e == 52292 || // Lo       HANGUL SYLLABLE CAE
      e == 52320 || // Lo       HANGUL SYLLABLE CYA
      e == 52348 || // Lo       HANGUL SYLLABLE CYAE
      e == 52376 || // Lo       HANGUL SYLLABLE CEO
      e == 52404 || // Lo       HANGUL SYLLABLE CE
      e == 52432 || // Lo       HANGUL SYLLABLE CYEO
      e == 52460 || // Lo       HANGUL SYLLABLE CYE
      e == 52488 || // Lo       HANGUL SYLLABLE CO
      e == 52516 || // Lo       HANGUL SYLLABLE CWA
      e == 52544 || // Lo       HANGUL SYLLABLE CWAE
      e == 52572 || // Lo       HANGUL SYLLABLE COE
      e == 52600 || // Lo       HANGUL SYLLABLE CYO
      e == 52628 || // Lo       HANGUL SYLLABLE CU
      e == 52656 || // Lo       HANGUL SYLLABLE CWEO
      e == 52684 || // Lo       HANGUL SYLLABLE CWE
      e == 52712 || // Lo       HANGUL SYLLABLE CWI
      e == 52740 || // Lo       HANGUL SYLLABLE CYU
      e == 52768 || // Lo       HANGUL SYLLABLE CEU
      e == 52796 || // Lo       HANGUL SYLLABLE CYI
      e == 52824 || // Lo       HANGUL SYLLABLE CI
      e == 52852 || // Lo       HANGUL SYLLABLE KA
      e == 52880 || // Lo       HANGUL SYLLABLE KAE
      e == 52908 || // Lo       HANGUL SYLLABLE KYA
      e == 52936 || // Lo       HANGUL SYLLABLE KYAE
      e == 52964 || // Lo       HANGUL SYLLABLE KEO
      e == 52992 || // Lo       HANGUL SYLLABLE KE
      e == 53020 || // Lo       HANGUL SYLLABLE KYEO
      e == 53048 || // Lo       HANGUL SYLLABLE KYE
      e == 53076 || // Lo       HANGUL SYLLABLE KO
      e == 53104 || // Lo       HANGUL SYLLABLE KWA
      e == 53132 || // Lo       HANGUL SYLLABLE KWAE
      e == 53160 || // Lo       HANGUL SYLLABLE KOE
      e == 53188 || // Lo       HANGUL SYLLABLE KYO
      e == 53216 || // Lo       HANGUL SYLLABLE KU
      e == 53244 || // Lo       HANGUL SYLLABLE KWEO
      e == 53272 || // Lo       HANGUL SYLLABLE KWE
      e == 53300 || // Lo       HANGUL SYLLABLE KWI
      e == 53328 || // Lo       HANGUL SYLLABLE KYU
      e == 53356 || // Lo       HANGUL SYLLABLE KEU
      e == 53384 || // Lo       HANGUL SYLLABLE KYI
      e == 53412 || // Lo       HANGUL SYLLABLE KI
      e == 53440 || // Lo       HANGUL SYLLABLE TA
      e == 53468 || // Lo       HANGUL SYLLABLE TAE
      e == 53496 || // Lo       HANGUL SYLLABLE TYA
      e == 53524 || // Lo       HANGUL SYLLABLE TYAE
      e == 53552 || // Lo       HANGUL SYLLABLE TEO
      e == 53580 || // Lo       HANGUL SYLLABLE TE
      e == 53608 || // Lo       HANGUL SYLLABLE TYEO
      e == 53636 || // Lo       HANGUL SYLLABLE TYE
      e == 53664 || // Lo       HANGUL SYLLABLE TO
      e == 53692 || // Lo       HANGUL SYLLABLE TWA
      e == 53720 || // Lo       HANGUL SYLLABLE TWAE
      e == 53748 || // Lo       HANGUL SYLLABLE TOE
      e == 53776 || // Lo       HANGUL SYLLABLE TYO
      e == 53804 || // Lo       HANGUL SYLLABLE TU
      e == 53832 || // Lo       HANGUL SYLLABLE TWEO
      e == 53860 || // Lo       HANGUL SYLLABLE TWE
      e == 53888 || // Lo       HANGUL SYLLABLE TWI
      e == 53916 || // Lo       HANGUL SYLLABLE TYU
      e == 53944 || // Lo       HANGUL SYLLABLE TEU
      e == 53972 || // Lo       HANGUL SYLLABLE TYI
      e == 54e3 || // Lo       HANGUL SYLLABLE TI
      e == 54028 || // Lo       HANGUL SYLLABLE PA
      e == 54056 || // Lo       HANGUL SYLLABLE PAE
      e == 54084 || // Lo       HANGUL SYLLABLE PYA
      e == 54112 || // Lo       HANGUL SYLLABLE PYAE
      e == 54140 || // Lo       HANGUL SYLLABLE PEO
      e == 54168 || // Lo       HANGUL SYLLABLE PE
      e == 54196 || // Lo       HANGUL SYLLABLE PYEO
      e == 54224 || // Lo       HANGUL SYLLABLE PYE
      e == 54252 || // Lo       HANGUL SYLLABLE PO
      e == 54280 || // Lo       HANGUL SYLLABLE PWA
      e == 54308 || // Lo       HANGUL SYLLABLE PWAE
      e == 54336 || // Lo       HANGUL SYLLABLE POE
      e == 54364 || // Lo       HANGUL SYLLABLE PYO
      e == 54392 || // Lo       HANGUL SYLLABLE PU
      e == 54420 || // Lo       HANGUL SYLLABLE PWEO
      e == 54448 || // Lo       HANGUL SYLLABLE PWE
      e == 54476 || // Lo       HANGUL SYLLABLE PWI
      e == 54504 || // Lo       HANGUL SYLLABLE PYU
      e == 54532 || // Lo       HANGUL SYLLABLE PEU
      e == 54560 || // Lo       HANGUL SYLLABLE PYI
      e == 54588 || // Lo       HANGUL SYLLABLE PI
      e == 54616 || // Lo       HANGUL SYLLABLE HA
      e == 54644 || // Lo       HANGUL SYLLABLE HAE
      e == 54672 || // Lo       HANGUL SYLLABLE HYA
      e == 54700 || // Lo       HANGUL SYLLABLE HYAE
      e == 54728 || // Lo       HANGUL SYLLABLE HEO
      e == 54756 || // Lo       HANGUL SYLLABLE HE
      e == 54784 || // Lo       HANGUL SYLLABLE HYEO
      e == 54812 || // Lo       HANGUL SYLLABLE HYE
      e == 54840 || // Lo       HANGUL SYLLABLE HO
      e == 54868 || // Lo       HANGUL SYLLABLE HWA
      e == 54896 || // Lo       HANGUL SYLLABLE HWAE
      e == 54924 || // Lo       HANGUL SYLLABLE HOE
      e == 54952 || // Lo       HANGUL SYLLABLE HYO
      e == 54980 || // Lo       HANGUL SYLLABLE HU
      e == 55008 || // Lo       HANGUL SYLLABLE HWEO
      e == 55036 || // Lo       HANGUL SYLLABLE HWE
      e == 55064 || // Lo       HANGUL SYLLABLE HWI
      e == 55092 || // Lo       HANGUL SYLLABLE HYU
      e == 55120 || // Lo       HANGUL SYLLABLE HEU
      e == 55148 || // Lo       HANGUL SYLLABLE HYI
      e == 55176 ? d : 44033 <= e && e <= 44059 || // Lo  [27] HANGUL SYLLABLE GAG..HANGUL SYLLABLE GAH
      44061 <= e && e <= 44087 || // Lo  [27] HANGUL SYLLABLE GAEG..HANGUL SYLLABLE GAEH
      44089 <= e && e <= 44115 || // Lo  [27] HANGUL SYLLABLE GYAG..HANGUL SYLLABLE GYAH
      44117 <= e && e <= 44143 || // Lo  [27] HANGUL SYLLABLE GYAEG..HANGUL SYLLABLE GYAEH
      44145 <= e && e <= 44171 || // Lo  [27] HANGUL SYLLABLE GEOG..HANGUL SYLLABLE GEOH
      44173 <= e && e <= 44199 || // Lo  [27] HANGUL SYLLABLE GEG..HANGUL SYLLABLE GEH
      44201 <= e && e <= 44227 || // Lo  [27] HANGUL SYLLABLE GYEOG..HANGUL SYLLABLE GYEOH
      44229 <= e && e <= 44255 || // Lo  [27] HANGUL SYLLABLE GYEG..HANGUL SYLLABLE GYEH
      44257 <= e && e <= 44283 || // Lo  [27] HANGUL SYLLABLE GOG..HANGUL SYLLABLE GOH
      44285 <= e && e <= 44311 || // Lo  [27] HANGUL SYLLABLE GWAG..HANGUL SYLLABLE GWAH
      44313 <= e && e <= 44339 || // Lo  [27] HANGUL SYLLABLE GWAEG..HANGUL SYLLABLE GWAEH
      44341 <= e && e <= 44367 || // Lo  [27] HANGUL SYLLABLE GOEG..HANGUL SYLLABLE GOEH
      44369 <= e && e <= 44395 || // Lo  [27] HANGUL SYLLABLE GYOG..HANGUL SYLLABLE GYOH
      44397 <= e && e <= 44423 || // Lo  [27] HANGUL SYLLABLE GUG..HANGUL SYLLABLE GUH
      44425 <= e && e <= 44451 || // Lo  [27] HANGUL SYLLABLE GWEOG..HANGUL SYLLABLE GWEOH
      44453 <= e && e <= 44479 || // Lo  [27] HANGUL SYLLABLE GWEG..HANGUL SYLLABLE GWEH
      44481 <= e && e <= 44507 || // Lo  [27] HANGUL SYLLABLE GWIG..HANGUL SYLLABLE GWIH
      44509 <= e && e <= 44535 || // Lo  [27] HANGUL SYLLABLE GYUG..HANGUL SYLLABLE GYUH
      44537 <= e && e <= 44563 || // Lo  [27] HANGUL SYLLABLE GEUG..HANGUL SYLLABLE GEUH
      44565 <= e && e <= 44591 || // Lo  [27] HANGUL SYLLABLE GYIG..HANGUL SYLLABLE GYIH
      44593 <= e && e <= 44619 || // Lo  [27] HANGUL SYLLABLE GIG..HANGUL SYLLABLE GIH
      44621 <= e && e <= 44647 || // Lo  [27] HANGUL SYLLABLE GGAG..HANGUL SYLLABLE GGAH
      44649 <= e && e <= 44675 || // Lo  [27] HANGUL SYLLABLE GGAEG..HANGUL SYLLABLE GGAEH
      44677 <= e && e <= 44703 || // Lo  [27] HANGUL SYLLABLE GGYAG..HANGUL SYLLABLE GGYAH
      44705 <= e && e <= 44731 || // Lo  [27] HANGUL SYLLABLE GGYAEG..HANGUL SYLLABLE GGYAEH
      44733 <= e && e <= 44759 || // Lo  [27] HANGUL SYLLABLE GGEOG..HANGUL SYLLABLE GGEOH
      44761 <= e && e <= 44787 || // Lo  [27] HANGUL SYLLABLE GGEG..HANGUL SYLLABLE GGEH
      44789 <= e && e <= 44815 || // Lo  [27] HANGUL SYLLABLE GGYEOG..HANGUL SYLLABLE GGYEOH
      44817 <= e && e <= 44843 || // Lo  [27] HANGUL SYLLABLE GGYEG..HANGUL SYLLABLE GGYEH
      44845 <= e && e <= 44871 || // Lo  [27] HANGUL SYLLABLE GGOG..HANGUL SYLLABLE GGOH
      44873 <= e && e <= 44899 || // Lo  [27] HANGUL SYLLABLE GGWAG..HANGUL SYLLABLE GGWAH
      44901 <= e && e <= 44927 || // Lo  [27] HANGUL SYLLABLE GGWAEG..HANGUL SYLLABLE GGWAEH
      44929 <= e && e <= 44955 || // Lo  [27] HANGUL SYLLABLE GGOEG..HANGUL SYLLABLE GGOEH
      44957 <= e && e <= 44983 || // Lo  [27] HANGUL SYLLABLE GGYOG..HANGUL SYLLABLE GGYOH
      44985 <= e && e <= 45011 || // Lo  [27] HANGUL SYLLABLE GGUG..HANGUL SYLLABLE GGUH
      45013 <= e && e <= 45039 || // Lo  [27] HANGUL SYLLABLE GGWEOG..HANGUL SYLLABLE GGWEOH
      45041 <= e && e <= 45067 || // Lo  [27] HANGUL SYLLABLE GGWEG..HANGUL SYLLABLE GGWEH
      45069 <= e && e <= 45095 || // Lo  [27] HANGUL SYLLABLE GGWIG..HANGUL SYLLABLE GGWIH
      45097 <= e && e <= 45123 || // Lo  [27] HANGUL SYLLABLE GGYUG..HANGUL SYLLABLE GGYUH
      45125 <= e && e <= 45151 || // Lo  [27] HANGUL SYLLABLE GGEUG..HANGUL SYLLABLE GGEUH
      45153 <= e && e <= 45179 || // Lo  [27] HANGUL SYLLABLE GGYIG..HANGUL SYLLABLE GGYIH
      45181 <= e && e <= 45207 || // Lo  [27] HANGUL SYLLABLE GGIG..HANGUL SYLLABLE GGIH
      45209 <= e && e <= 45235 || // Lo  [27] HANGUL SYLLABLE NAG..HANGUL SYLLABLE NAH
      45237 <= e && e <= 45263 || // Lo  [27] HANGUL SYLLABLE NAEG..HANGUL SYLLABLE NAEH
      45265 <= e && e <= 45291 || // Lo  [27] HANGUL SYLLABLE NYAG..HANGUL SYLLABLE NYAH
      45293 <= e && e <= 45319 || // Lo  [27] HANGUL SYLLABLE NYAEG..HANGUL SYLLABLE NYAEH
      45321 <= e && e <= 45347 || // Lo  [27] HANGUL SYLLABLE NEOG..HANGUL SYLLABLE NEOH
      45349 <= e && e <= 45375 || // Lo  [27] HANGUL SYLLABLE NEG..HANGUL SYLLABLE NEH
      45377 <= e && e <= 45403 || // Lo  [27] HANGUL SYLLABLE NYEOG..HANGUL SYLLABLE NYEOH
      45405 <= e && e <= 45431 || // Lo  [27] HANGUL SYLLABLE NYEG..HANGUL SYLLABLE NYEH
      45433 <= e && e <= 45459 || // Lo  [27] HANGUL SYLLABLE NOG..HANGUL SYLLABLE NOH
      45461 <= e && e <= 45487 || // Lo  [27] HANGUL SYLLABLE NWAG..HANGUL SYLLABLE NWAH
      45489 <= e && e <= 45515 || // Lo  [27] HANGUL SYLLABLE NWAEG..HANGUL SYLLABLE NWAEH
      45517 <= e && e <= 45543 || // Lo  [27] HANGUL SYLLABLE NOEG..HANGUL SYLLABLE NOEH
      45545 <= e && e <= 45571 || // Lo  [27] HANGUL SYLLABLE NYOG..HANGUL SYLLABLE NYOH
      45573 <= e && e <= 45599 || // Lo  [27] HANGUL SYLLABLE NUG..HANGUL SYLLABLE NUH
      45601 <= e && e <= 45627 || // Lo  [27] HANGUL SYLLABLE NWEOG..HANGUL SYLLABLE NWEOH
      45629 <= e && e <= 45655 || // Lo  [27] HANGUL SYLLABLE NWEG..HANGUL SYLLABLE NWEH
      45657 <= e && e <= 45683 || // Lo  [27] HANGUL SYLLABLE NWIG..HANGUL SYLLABLE NWIH
      45685 <= e && e <= 45711 || // Lo  [27] HANGUL SYLLABLE NYUG..HANGUL SYLLABLE NYUH
      45713 <= e && e <= 45739 || // Lo  [27] HANGUL SYLLABLE NEUG..HANGUL SYLLABLE NEUH
      45741 <= e && e <= 45767 || // Lo  [27] HANGUL SYLLABLE NYIG..HANGUL SYLLABLE NYIH
      45769 <= e && e <= 45795 || // Lo  [27] HANGUL SYLLABLE NIG..HANGUL SYLLABLE NIH
      45797 <= e && e <= 45823 || // Lo  [27] HANGUL SYLLABLE DAG..HANGUL SYLLABLE DAH
      45825 <= e && e <= 45851 || // Lo  [27] HANGUL SYLLABLE DAEG..HANGUL SYLLABLE DAEH
      45853 <= e && e <= 45879 || // Lo  [27] HANGUL SYLLABLE DYAG..HANGUL SYLLABLE DYAH
      45881 <= e && e <= 45907 || // Lo  [27] HANGUL SYLLABLE DYAEG..HANGUL SYLLABLE DYAEH
      45909 <= e && e <= 45935 || // Lo  [27] HANGUL SYLLABLE DEOG..HANGUL SYLLABLE DEOH
      45937 <= e && e <= 45963 || // Lo  [27] HANGUL SYLLABLE DEG..HANGUL SYLLABLE DEH
      45965 <= e && e <= 45991 || // Lo  [27] HANGUL SYLLABLE DYEOG..HANGUL SYLLABLE DYEOH
      45993 <= e && e <= 46019 || // Lo  [27] HANGUL SYLLABLE DYEG..HANGUL SYLLABLE DYEH
      46021 <= e && e <= 46047 || // Lo  [27] HANGUL SYLLABLE DOG..HANGUL SYLLABLE DOH
      46049 <= e && e <= 46075 || // Lo  [27] HANGUL SYLLABLE DWAG..HANGUL SYLLABLE DWAH
      46077 <= e && e <= 46103 || // Lo  [27] HANGUL SYLLABLE DWAEG..HANGUL SYLLABLE DWAEH
      46105 <= e && e <= 46131 || // Lo  [27] HANGUL SYLLABLE DOEG..HANGUL SYLLABLE DOEH
      46133 <= e && e <= 46159 || // Lo  [27] HANGUL SYLLABLE DYOG..HANGUL SYLLABLE DYOH
      46161 <= e && e <= 46187 || // Lo  [27] HANGUL SYLLABLE DUG..HANGUL SYLLABLE DUH
      46189 <= e && e <= 46215 || // Lo  [27] HANGUL SYLLABLE DWEOG..HANGUL SYLLABLE DWEOH
      46217 <= e && e <= 46243 || // Lo  [27] HANGUL SYLLABLE DWEG..HANGUL SYLLABLE DWEH
      46245 <= e && e <= 46271 || // Lo  [27] HANGUL SYLLABLE DWIG..HANGUL SYLLABLE DWIH
      46273 <= e && e <= 46299 || // Lo  [27] HANGUL SYLLABLE DYUG..HANGUL SYLLABLE DYUH
      46301 <= e && e <= 46327 || // Lo  [27] HANGUL SYLLABLE DEUG..HANGUL SYLLABLE DEUH
      46329 <= e && e <= 46355 || // Lo  [27] HANGUL SYLLABLE DYIG..HANGUL SYLLABLE DYIH
      46357 <= e && e <= 46383 || // Lo  [27] HANGUL SYLLABLE DIG..HANGUL SYLLABLE DIH
      46385 <= e && e <= 46411 || // Lo  [27] HANGUL SYLLABLE DDAG..HANGUL SYLLABLE DDAH
      46413 <= e && e <= 46439 || // Lo  [27] HANGUL SYLLABLE DDAEG..HANGUL SYLLABLE DDAEH
      46441 <= e && e <= 46467 || // Lo  [27] HANGUL SYLLABLE DDYAG..HANGUL SYLLABLE DDYAH
      46469 <= e && e <= 46495 || // Lo  [27] HANGUL SYLLABLE DDYAEG..HANGUL SYLLABLE DDYAEH
      46497 <= e && e <= 46523 || // Lo  [27] HANGUL SYLLABLE DDEOG..HANGUL SYLLABLE DDEOH
      46525 <= e && e <= 46551 || // Lo  [27] HANGUL SYLLABLE DDEG..HANGUL SYLLABLE DDEH
      46553 <= e && e <= 46579 || // Lo  [27] HANGUL SYLLABLE DDYEOG..HANGUL SYLLABLE DDYEOH
      46581 <= e && e <= 46607 || // Lo  [27] HANGUL SYLLABLE DDYEG..HANGUL SYLLABLE DDYEH
      46609 <= e && e <= 46635 || // Lo  [27] HANGUL SYLLABLE DDOG..HANGUL SYLLABLE DDOH
      46637 <= e && e <= 46663 || // Lo  [27] HANGUL SYLLABLE DDWAG..HANGUL SYLLABLE DDWAH
      46665 <= e && e <= 46691 || // Lo  [27] HANGUL SYLLABLE DDWAEG..HANGUL SYLLABLE DDWAEH
      46693 <= e && e <= 46719 || // Lo  [27] HANGUL SYLLABLE DDOEG..HANGUL SYLLABLE DDOEH
      46721 <= e && e <= 46747 || // Lo  [27] HANGUL SYLLABLE DDYOG..HANGUL SYLLABLE DDYOH
      46749 <= e && e <= 46775 || // Lo  [27] HANGUL SYLLABLE DDUG..HANGUL SYLLABLE DDUH
      46777 <= e && e <= 46803 || // Lo  [27] HANGUL SYLLABLE DDWEOG..HANGUL SYLLABLE DDWEOH
      46805 <= e && e <= 46831 || // Lo  [27] HANGUL SYLLABLE DDWEG..HANGUL SYLLABLE DDWEH
      46833 <= e && e <= 46859 || // Lo  [27] HANGUL SYLLABLE DDWIG..HANGUL SYLLABLE DDWIH
      46861 <= e && e <= 46887 || // Lo  [27] HANGUL SYLLABLE DDYUG..HANGUL SYLLABLE DDYUH
      46889 <= e && e <= 46915 || // Lo  [27] HANGUL SYLLABLE DDEUG..HANGUL SYLLABLE DDEUH
      46917 <= e && e <= 46943 || // Lo  [27] HANGUL SYLLABLE DDYIG..HANGUL SYLLABLE DDYIH
      46945 <= e && e <= 46971 || // Lo  [27] HANGUL SYLLABLE DDIG..HANGUL SYLLABLE DDIH
      46973 <= e && e <= 46999 || // Lo  [27] HANGUL SYLLABLE RAG..HANGUL SYLLABLE RAH
      47001 <= e && e <= 47027 || // Lo  [27] HANGUL SYLLABLE RAEG..HANGUL SYLLABLE RAEH
      47029 <= e && e <= 47055 || // Lo  [27] HANGUL SYLLABLE RYAG..HANGUL SYLLABLE RYAH
      47057 <= e && e <= 47083 || // Lo  [27] HANGUL SYLLABLE RYAEG..HANGUL SYLLABLE RYAEH
      47085 <= e && e <= 47111 || // Lo  [27] HANGUL SYLLABLE REOG..HANGUL SYLLABLE REOH
      47113 <= e && e <= 47139 || // Lo  [27] HANGUL SYLLABLE REG..HANGUL SYLLABLE REH
      47141 <= e && e <= 47167 || // Lo  [27] HANGUL SYLLABLE RYEOG..HANGUL SYLLABLE RYEOH
      47169 <= e && e <= 47195 || // Lo  [27] HANGUL SYLLABLE RYEG..HANGUL SYLLABLE RYEH
      47197 <= e && e <= 47223 || // Lo  [27] HANGUL SYLLABLE ROG..HANGUL SYLLABLE ROH
      47225 <= e && e <= 47251 || // Lo  [27] HANGUL SYLLABLE RWAG..HANGUL SYLLABLE RWAH
      47253 <= e && e <= 47279 || // Lo  [27] HANGUL SYLLABLE RWAEG..HANGUL SYLLABLE RWAEH
      47281 <= e && e <= 47307 || // Lo  [27] HANGUL SYLLABLE ROEG..HANGUL SYLLABLE ROEH
      47309 <= e && e <= 47335 || // Lo  [27] HANGUL SYLLABLE RYOG..HANGUL SYLLABLE RYOH
      47337 <= e && e <= 47363 || // Lo  [27] HANGUL SYLLABLE RUG..HANGUL SYLLABLE RUH
      47365 <= e && e <= 47391 || // Lo  [27] HANGUL SYLLABLE RWEOG..HANGUL SYLLABLE RWEOH
      47393 <= e && e <= 47419 || // Lo  [27] HANGUL SYLLABLE RWEG..HANGUL SYLLABLE RWEH
      47421 <= e && e <= 47447 || // Lo  [27] HANGUL SYLLABLE RWIG..HANGUL SYLLABLE RWIH
      47449 <= e && e <= 47475 || // Lo  [27] HANGUL SYLLABLE RYUG..HANGUL SYLLABLE RYUH
      47477 <= e && e <= 47503 || // Lo  [27] HANGUL SYLLABLE REUG..HANGUL SYLLABLE REUH
      47505 <= e && e <= 47531 || // Lo  [27] HANGUL SYLLABLE RYIG..HANGUL SYLLABLE RYIH
      47533 <= e && e <= 47559 || // Lo  [27] HANGUL SYLLABLE RIG..HANGUL SYLLABLE RIH
      47561 <= e && e <= 47587 || // Lo  [27] HANGUL SYLLABLE MAG..HANGUL SYLLABLE MAH
      47589 <= e && e <= 47615 || // Lo  [27] HANGUL SYLLABLE MAEG..HANGUL SYLLABLE MAEH
      47617 <= e && e <= 47643 || // Lo  [27] HANGUL SYLLABLE MYAG..HANGUL SYLLABLE MYAH
      47645 <= e && e <= 47671 || // Lo  [27] HANGUL SYLLABLE MYAEG..HANGUL SYLLABLE MYAEH
      47673 <= e && e <= 47699 || // Lo  [27] HANGUL SYLLABLE MEOG..HANGUL SYLLABLE MEOH
      47701 <= e && e <= 47727 || // Lo  [27] HANGUL SYLLABLE MEG..HANGUL SYLLABLE MEH
      47729 <= e && e <= 47755 || // Lo  [27] HANGUL SYLLABLE MYEOG..HANGUL SYLLABLE MYEOH
      47757 <= e && e <= 47783 || // Lo  [27] HANGUL SYLLABLE MYEG..HANGUL SYLLABLE MYEH
      47785 <= e && e <= 47811 || // Lo  [27] HANGUL SYLLABLE MOG..HANGUL SYLLABLE MOH
      47813 <= e && e <= 47839 || // Lo  [27] HANGUL SYLLABLE MWAG..HANGUL SYLLABLE MWAH
      47841 <= e && e <= 47867 || // Lo  [27] HANGUL SYLLABLE MWAEG..HANGUL SYLLABLE MWAEH
      47869 <= e && e <= 47895 || // Lo  [27] HANGUL SYLLABLE MOEG..HANGUL SYLLABLE MOEH
      47897 <= e && e <= 47923 || // Lo  [27] HANGUL SYLLABLE MYOG..HANGUL SYLLABLE MYOH
      47925 <= e && e <= 47951 || // Lo  [27] HANGUL SYLLABLE MUG..HANGUL SYLLABLE MUH
      47953 <= e && e <= 47979 || // Lo  [27] HANGUL SYLLABLE MWEOG..HANGUL SYLLABLE MWEOH
      47981 <= e && e <= 48007 || // Lo  [27] HANGUL SYLLABLE MWEG..HANGUL SYLLABLE MWEH
      48009 <= e && e <= 48035 || // Lo  [27] HANGUL SYLLABLE MWIG..HANGUL SYLLABLE MWIH
      48037 <= e && e <= 48063 || // Lo  [27] HANGUL SYLLABLE MYUG..HANGUL SYLLABLE MYUH
      48065 <= e && e <= 48091 || // Lo  [27] HANGUL SYLLABLE MEUG..HANGUL SYLLABLE MEUH
      48093 <= e && e <= 48119 || // Lo  [27] HANGUL SYLLABLE MYIG..HANGUL SYLLABLE MYIH
      48121 <= e && e <= 48147 || // Lo  [27] HANGUL SYLLABLE MIG..HANGUL SYLLABLE MIH
      48149 <= e && e <= 48175 || // Lo  [27] HANGUL SYLLABLE BAG..HANGUL SYLLABLE BAH
      48177 <= e && e <= 48203 || // Lo  [27] HANGUL SYLLABLE BAEG..HANGUL SYLLABLE BAEH
      48205 <= e && e <= 48231 || // Lo  [27] HANGUL SYLLABLE BYAG..HANGUL SYLLABLE BYAH
      48233 <= e && e <= 48259 || // Lo  [27] HANGUL SYLLABLE BYAEG..HANGUL SYLLABLE BYAEH
      48261 <= e && e <= 48287 || // Lo  [27] HANGUL SYLLABLE BEOG..HANGUL SYLLABLE BEOH
      48289 <= e && e <= 48315 || // Lo  [27] HANGUL SYLLABLE BEG..HANGUL SYLLABLE BEH
      48317 <= e && e <= 48343 || // Lo  [27] HANGUL SYLLABLE BYEOG..HANGUL SYLLABLE BYEOH
      48345 <= e && e <= 48371 || // Lo  [27] HANGUL SYLLABLE BYEG..HANGUL SYLLABLE BYEH
      48373 <= e && e <= 48399 || // Lo  [27] HANGUL SYLLABLE BOG..HANGUL SYLLABLE BOH
      48401 <= e && e <= 48427 || // Lo  [27] HANGUL SYLLABLE BWAG..HANGUL SYLLABLE BWAH
      48429 <= e && e <= 48455 || // Lo  [27] HANGUL SYLLABLE BWAEG..HANGUL SYLLABLE BWAEH
      48457 <= e && e <= 48483 || // Lo  [27] HANGUL SYLLABLE BOEG..HANGUL SYLLABLE BOEH
      48485 <= e && e <= 48511 || // Lo  [27] HANGUL SYLLABLE BYOG..HANGUL SYLLABLE BYOH
      48513 <= e && e <= 48539 || // Lo  [27] HANGUL SYLLABLE BUG..HANGUL SYLLABLE BUH
      48541 <= e && e <= 48567 || // Lo  [27] HANGUL SYLLABLE BWEOG..HANGUL SYLLABLE BWEOH
      48569 <= e && e <= 48595 || // Lo  [27] HANGUL SYLLABLE BWEG..HANGUL SYLLABLE BWEH
      48597 <= e && e <= 48623 || // Lo  [27] HANGUL SYLLABLE BWIG..HANGUL SYLLABLE BWIH
      48625 <= e && e <= 48651 || // Lo  [27] HANGUL SYLLABLE BYUG..HANGUL SYLLABLE BYUH
      48653 <= e && e <= 48679 || // Lo  [27] HANGUL SYLLABLE BEUG..HANGUL SYLLABLE BEUH
      48681 <= e && e <= 48707 || // Lo  [27] HANGUL SYLLABLE BYIG..HANGUL SYLLABLE BYIH
      48709 <= e && e <= 48735 || // Lo  [27] HANGUL SYLLABLE BIG..HANGUL SYLLABLE BIH
      48737 <= e && e <= 48763 || // Lo  [27] HANGUL SYLLABLE BBAG..HANGUL SYLLABLE BBAH
      48765 <= e && e <= 48791 || // Lo  [27] HANGUL SYLLABLE BBAEG..HANGUL SYLLABLE BBAEH
      48793 <= e && e <= 48819 || // Lo  [27] HANGUL SYLLABLE BBYAG..HANGUL SYLLABLE BBYAH
      48821 <= e && e <= 48847 || // Lo  [27] HANGUL SYLLABLE BBYAEG..HANGUL SYLLABLE BBYAEH
      48849 <= e && e <= 48875 || // Lo  [27] HANGUL SYLLABLE BBEOG..HANGUL SYLLABLE BBEOH
      48877 <= e && e <= 48903 || // Lo  [27] HANGUL SYLLABLE BBEG..HANGUL SYLLABLE BBEH
      48905 <= e && e <= 48931 || // Lo  [27] HANGUL SYLLABLE BBYEOG..HANGUL SYLLABLE BBYEOH
      48933 <= e && e <= 48959 || // Lo  [27] HANGUL SYLLABLE BBYEG..HANGUL SYLLABLE BBYEH
      48961 <= e && e <= 48987 || // Lo  [27] HANGUL SYLLABLE BBOG..HANGUL SYLLABLE BBOH
      48989 <= e && e <= 49015 || // Lo  [27] HANGUL SYLLABLE BBWAG..HANGUL SYLLABLE BBWAH
      49017 <= e && e <= 49043 || // Lo  [27] HANGUL SYLLABLE BBWAEG..HANGUL SYLLABLE BBWAEH
      49045 <= e && e <= 49071 || // Lo  [27] HANGUL SYLLABLE BBOEG..HANGUL SYLLABLE BBOEH
      49073 <= e && e <= 49099 || // Lo  [27] HANGUL SYLLABLE BBYOG..HANGUL SYLLABLE BBYOH
      49101 <= e && e <= 49127 || // Lo  [27] HANGUL SYLLABLE BBUG..HANGUL SYLLABLE BBUH
      49129 <= e && e <= 49155 || // Lo  [27] HANGUL SYLLABLE BBWEOG..HANGUL SYLLABLE BBWEOH
      49157 <= e && e <= 49183 || // Lo  [27] HANGUL SYLLABLE BBWEG..HANGUL SYLLABLE BBWEH
      49185 <= e && e <= 49211 || // Lo  [27] HANGUL SYLLABLE BBWIG..HANGUL SYLLABLE BBWIH
      49213 <= e && e <= 49239 || // Lo  [27] HANGUL SYLLABLE BBYUG..HANGUL SYLLABLE BBYUH
      49241 <= e && e <= 49267 || // Lo  [27] HANGUL SYLLABLE BBEUG..HANGUL SYLLABLE BBEUH
      49269 <= e && e <= 49295 || // Lo  [27] HANGUL SYLLABLE BBYIG..HANGUL SYLLABLE BBYIH
      49297 <= e && e <= 49323 || // Lo  [27] HANGUL SYLLABLE BBIG..HANGUL SYLLABLE BBIH
      49325 <= e && e <= 49351 || // Lo  [27] HANGUL SYLLABLE SAG..HANGUL SYLLABLE SAH
      49353 <= e && e <= 49379 || // Lo  [27] HANGUL SYLLABLE SAEG..HANGUL SYLLABLE SAEH
      49381 <= e && e <= 49407 || // Lo  [27] HANGUL SYLLABLE SYAG..HANGUL SYLLABLE SYAH
      49409 <= e && e <= 49435 || // Lo  [27] HANGUL SYLLABLE SYAEG..HANGUL SYLLABLE SYAEH
      49437 <= e && e <= 49463 || // Lo  [27] HANGUL SYLLABLE SEOG..HANGUL SYLLABLE SEOH
      49465 <= e && e <= 49491 || // Lo  [27] HANGUL SYLLABLE SEG..HANGUL SYLLABLE SEH
      49493 <= e && e <= 49519 || // Lo  [27] HANGUL SYLLABLE SYEOG..HANGUL SYLLABLE SYEOH
      49521 <= e && e <= 49547 || // Lo  [27] HANGUL SYLLABLE SYEG..HANGUL SYLLABLE SYEH
      49549 <= e && e <= 49575 || // Lo  [27] HANGUL SYLLABLE SOG..HANGUL SYLLABLE SOH
      49577 <= e && e <= 49603 || // Lo  [27] HANGUL SYLLABLE SWAG..HANGUL SYLLABLE SWAH
      49605 <= e && e <= 49631 || // Lo  [27] HANGUL SYLLABLE SWAEG..HANGUL SYLLABLE SWAEH
      49633 <= e && e <= 49659 || // Lo  [27] HANGUL SYLLABLE SOEG..HANGUL SYLLABLE SOEH
      49661 <= e && e <= 49687 || // Lo  [27] HANGUL SYLLABLE SYOG..HANGUL SYLLABLE SYOH
      49689 <= e && e <= 49715 || // Lo  [27] HANGUL SYLLABLE SUG..HANGUL SYLLABLE SUH
      49717 <= e && e <= 49743 || // Lo  [27] HANGUL SYLLABLE SWEOG..HANGUL SYLLABLE SWEOH
      49745 <= e && e <= 49771 || // Lo  [27] HANGUL SYLLABLE SWEG..HANGUL SYLLABLE SWEH
      49773 <= e && e <= 49799 || // Lo  [27] HANGUL SYLLABLE SWIG..HANGUL SYLLABLE SWIH
      49801 <= e && e <= 49827 || // Lo  [27] HANGUL SYLLABLE SYUG..HANGUL SYLLABLE SYUH
      49829 <= e && e <= 49855 || // Lo  [27] HANGUL SYLLABLE SEUG..HANGUL SYLLABLE SEUH
      49857 <= e && e <= 49883 || // Lo  [27] HANGUL SYLLABLE SYIG..HANGUL SYLLABLE SYIH
      49885 <= e && e <= 49911 || // Lo  [27] HANGUL SYLLABLE SIG..HANGUL SYLLABLE SIH
      49913 <= e && e <= 49939 || // Lo  [27] HANGUL SYLLABLE SSAG..HANGUL SYLLABLE SSAH
      49941 <= e && e <= 49967 || // Lo  [27] HANGUL SYLLABLE SSAEG..HANGUL SYLLABLE SSAEH
      49969 <= e && e <= 49995 || // Lo  [27] HANGUL SYLLABLE SSYAG..HANGUL SYLLABLE SSYAH
      49997 <= e && e <= 50023 || // Lo  [27] HANGUL SYLLABLE SSYAEG..HANGUL SYLLABLE SSYAEH
      50025 <= e && e <= 50051 || // Lo  [27] HANGUL SYLLABLE SSEOG..HANGUL SYLLABLE SSEOH
      50053 <= e && e <= 50079 || // Lo  [27] HANGUL SYLLABLE SSEG..HANGUL SYLLABLE SSEH
      50081 <= e && e <= 50107 || // Lo  [27] HANGUL SYLLABLE SSYEOG..HANGUL SYLLABLE SSYEOH
      50109 <= e && e <= 50135 || // Lo  [27] HANGUL SYLLABLE SSYEG..HANGUL SYLLABLE SSYEH
      50137 <= e && e <= 50163 || // Lo  [27] HANGUL SYLLABLE SSOG..HANGUL SYLLABLE SSOH
      50165 <= e && e <= 50191 || // Lo  [27] HANGUL SYLLABLE SSWAG..HANGUL SYLLABLE SSWAH
      50193 <= e && e <= 50219 || // Lo  [27] HANGUL SYLLABLE SSWAEG..HANGUL SYLLABLE SSWAEH
      50221 <= e && e <= 50247 || // Lo  [27] HANGUL SYLLABLE SSOEG..HANGUL SYLLABLE SSOEH
      50249 <= e && e <= 50275 || // Lo  [27] HANGUL SYLLABLE SSYOG..HANGUL SYLLABLE SSYOH
      50277 <= e && e <= 50303 || // Lo  [27] HANGUL SYLLABLE SSUG..HANGUL SYLLABLE SSUH
      50305 <= e && e <= 50331 || // Lo  [27] HANGUL SYLLABLE SSWEOG..HANGUL SYLLABLE SSWEOH
      50333 <= e && e <= 50359 || // Lo  [27] HANGUL SYLLABLE SSWEG..HANGUL SYLLABLE SSWEH
      50361 <= e && e <= 50387 || // Lo  [27] HANGUL SYLLABLE SSWIG..HANGUL SYLLABLE SSWIH
      50389 <= e && e <= 50415 || // Lo  [27] HANGUL SYLLABLE SSYUG..HANGUL SYLLABLE SSYUH
      50417 <= e && e <= 50443 || // Lo  [27] HANGUL SYLLABLE SSEUG..HANGUL SYLLABLE SSEUH
      50445 <= e && e <= 50471 || // Lo  [27] HANGUL SYLLABLE SSYIG..HANGUL SYLLABLE SSYIH
      50473 <= e && e <= 50499 || // Lo  [27] HANGUL SYLLABLE SSIG..HANGUL SYLLABLE SSIH
      50501 <= e && e <= 50527 || // Lo  [27] HANGUL SYLLABLE AG..HANGUL SYLLABLE AH
      50529 <= e && e <= 50555 || // Lo  [27] HANGUL SYLLABLE AEG..HANGUL SYLLABLE AEH
      50557 <= e && e <= 50583 || // Lo  [27] HANGUL SYLLABLE YAG..HANGUL SYLLABLE YAH
      50585 <= e && e <= 50611 || // Lo  [27] HANGUL SYLLABLE YAEG..HANGUL SYLLABLE YAEH
      50613 <= e && e <= 50639 || // Lo  [27] HANGUL SYLLABLE EOG..HANGUL SYLLABLE EOH
      50641 <= e && e <= 50667 || // Lo  [27] HANGUL SYLLABLE EG..HANGUL SYLLABLE EH
      50669 <= e && e <= 50695 || // Lo  [27] HANGUL SYLLABLE YEOG..HANGUL SYLLABLE YEOH
      50697 <= e && e <= 50723 || // Lo  [27] HANGUL SYLLABLE YEG..HANGUL SYLLABLE YEH
      50725 <= e && e <= 50751 || // Lo  [27] HANGUL SYLLABLE OG..HANGUL SYLLABLE OH
      50753 <= e && e <= 50779 || // Lo  [27] HANGUL SYLLABLE WAG..HANGUL SYLLABLE WAH
      50781 <= e && e <= 50807 || // Lo  [27] HANGUL SYLLABLE WAEG..HANGUL SYLLABLE WAEH
      50809 <= e && e <= 50835 || // Lo  [27] HANGUL SYLLABLE OEG..HANGUL SYLLABLE OEH
      50837 <= e && e <= 50863 || // Lo  [27] HANGUL SYLLABLE YOG..HANGUL SYLLABLE YOH
      50865 <= e && e <= 50891 || // Lo  [27] HANGUL SYLLABLE UG..HANGUL SYLLABLE UH
      50893 <= e && e <= 50919 || // Lo  [27] HANGUL SYLLABLE WEOG..HANGUL SYLLABLE WEOH
      50921 <= e && e <= 50947 || // Lo  [27] HANGUL SYLLABLE WEG..HANGUL SYLLABLE WEH
      50949 <= e && e <= 50975 || // Lo  [27] HANGUL SYLLABLE WIG..HANGUL SYLLABLE WIH
      50977 <= e && e <= 51003 || // Lo  [27] HANGUL SYLLABLE YUG..HANGUL SYLLABLE YUH
      51005 <= e && e <= 51031 || // Lo  [27] HANGUL SYLLABLE EUG..HANGUL SYLLABLE EUH
      51033 <= e && e <= 51059 || // Lo  [27] HANGUL SYLLABLE YIG..HANGUL SYLLABLE YIH
      51061 <= e && e <= 51087 || // Lo  [27] HANGUL SYLLABLE IG..HANGUL SYLLABLE IH
      51089 <= e && e <= 51115 || // Lo  [27] HANGUL SYLLABLE JAG..HANGUL SYLLABLE JAH
      51117 <= e && e <= 51143 || // Lo  [27] HANGUL SYLLABLE JAEG..HANGUL SYLLABLE JAEH
      51145 <= e && e <= 51171 || // Lo  [27] HANGUL SYLLABLE JYAG..HANGUL SYLLABLE JYAH
      51173 <= e && e <= 51199 || // Lo  [27] HANGUL SYLLABLE JYAEG..HANGUL SYLLABLE JYAEH
      51201 <= e && e <= 51227 || // Lo  [27] HANGUL SYLLABLE JEOG..HANGUL SYLLABLE JEOH
      51229 <= e && e <= 51255 || // Lo  [27] HANGUL SYLLABLE JEG..HANGUL SYLLABLE JEH
      51257 <= e && e <= 51283 || // Lo  [27] HANGUL SYLLABLE JYEOG..HANGUL SYLLABLE JYEOH
      51285 <= e && e <= 51311 || // Lo  [27] HANGUL SYLLABLE JYEG..HANGUL SYLLABLE JYEH
      51313 <= e && e <= 51339 || // Lo  [27] HANGUL SYLLABLE JOG..HANGUL SYLLABLE JOH
      51341 <= e && e <= 51367 || // Lo  [27] HANGUL SYLLABLE JWAG..HANGUL SYLLABLE JWAH
      51369 <= e && e <= 51395 || // Lo  [27] HANGUL SYLLABLE JWAEG..HANGUL SYLLABLE JWAEH
      51397 <= e && e <= 51423 || // Lo  [27] HANGUL SYLLABLE JOEG..HANGUL SYLLABLE JOEH
      51425 <= e && e <= 51451 || // Lo  [27] HANGUL SYLLABLE JYOG..HANGUL SYLLABLE JYOH
      51453 <= e && e <= 51479 || // Lo  [27] HANGUL SYLLABLE JUG..HANGUL SYLLABLE JUH
      51481 <= e && e <= 51507 || // Lo  [27] HANGUL SYLLABLE JWEOG..HANGUL SYLLABLE JWEOH
      51509 <= e && e <= 51535 || // Lo  [27] HANGUL SYLLABLE JWEG..HANGUL SYLLABLE JWEH
      51537 <= e && e <= 51563 || // Lo  [27] HANGUL SYLLABLE JWIG..HANGUL SYLLABLE JWIH
      51565 <= e && e <= 51591 || // Lo  [27] HANGUL SYLLABLE JYUG..HANGUL SYLLABLE JYUH
      51593 <= e && e <= 51619 || // Lo  [27] HANGUL SYLLABLE JEUG..HANGUL SYLLABLE JEUH
      51621 <= e && e <= 51647 || // Lo  [27] HANGUL SYLLABLE JYIG..HANGUL SYLLABLE JYIH
      51649 <= e && e <= 51675 || // Lo  [27] HANGUL SYLLABLE JIG..HANGUL SYLLABLE JIH
      51677 <= e && e <= 51703 || // Lo  [27] HANGUL SYLLABLE JJAG..HANGUL SYLLABLE JJAH
      51705 <= e && e <= 51731 || // Lo  [27] HANGUL SYLLABLE JJAEG..HANGUL SYLLABLE JJAEH
      51733 <= e && e <= 51759 || // Lo  [27] HANGUL SYLLABLE JJYAG..HANGUL SYLLABLE JJYAH
      51761 <= e && e <= 51787 || // Lo  [27] HANGUL SYLLABLE JJYAEG..HANGUL SYLLABLE JJYAEH
      51789 <= e && e <= 51815 || // Lo  [27] HANGUL SYLLABLE JJEOG..HANGUL SYLLABLE JJEOH
      51817 <= e && e <= 51843 || // Lo  [27] HANGUL SYLLABLE JJEG..HANGUL SYLLABLE JJEH
      51845 <= e && e <= 51871 || // Lo  [27] HANGUL SYLLABLE JJYEOG..HANGUL SYLLABLE JJYEOH
      51873 <= e && e <= 51899 || // Lo  [27] HANGUL SYLLABLE JJYEG..HANGUL SYLLABLE JJYEH
      51901 <= e && e <= 51927 || // Lo  [27] HANGUL SYLLABLE JJOG..HANGUL SYLLABLE JJOH
      51929 <= e && e <= 51955 || // Lo  [27] HANGUL SYLLABLE JJWAG..HANGUL SYLLABLE JJWAH
      51957 <= e && e <= 51983 || // Lo  [27] HANGUL SYLLABLE JJWAEG..HANGUL SYLLABLE JJWAEH
      51985 <= e && e <= 52011 || // Lo  [27] HANGUL SYLLABLE JJOEG..HANGUL SYLLABLE JJOEH
      52013 <= e && e <= 52039 || // Lo  [27] HANGUL SYLLABLE JJYOG..HANGUL SYLLABLE JJYOH
      52041 <= e && e <= 52067 || // Lo  [27] HANGUL SYLLABLE JJUG..HANGUL SYLLABLE JJUH
      52069 <= e && e <= 52095 || // Lo  [27] HANGUL SYLLABLE JJWEOG..HANGUL SYLLABLE JJWEOH
      52097 <= e && e <= 52123 || // Lo  [27] HANGUL SYLLABLE JJWEG..HANGUL SYLLABLE JJWEH
      52125 <= e && e <= 52151 || // Lo  [27] HANGUL SYLLABLE JJWIG..HANGUL SYLLABLE JJWIH
      52153 <= e && e <= 52179 || // Lo  [27] HANGUL SYLLABLE JJYUG..HANGUL SYLLABLE JJYUH
      52181 <= e && e <= 52207 || // Lo  [27] HANGUL SYLLABLE JJEUG..HANGUL SYLLABLE JJEUH
      52209 <= e && e <= 52235 || // Lo  [27] HANGUL SYLLABLE JJYIG..HANGUL SYLLABLE JJYIH
      52237 <= e && e <= 52263 || // Lo  [27] HANGUL SYLLABLE JJIG..HANGUL SYLLABLE JJIH
      52265 <= e && e <= 52291 || // Lo  [27] HANGUL SYLLABLE CAG..HANGUL SYLLABLE CAH
      52293 <= e && e <= 52319 || // Lo  [27] HANGUL SYLLABLE CAEG..HANGUL SYLLABLE CAEH
      52321 <= e && e <= 52347 || // Lo  [27] HANGUL SYLLABLE CYAG..HANGUL SYLLABLE CYAH
      52349 <= e && e <= 52375 || // Lo  [27] HANGUL SYLLABLE CYAEG..HANGUL SYLLABLE CYAEH
      52377 <= e && e <= 52403 || // Lo  [27] HANGUL SYLLABLE CEOG..HANGUL SYLLABLE CEOH
      52405 <= e && e <= 52431 || // Lo  [27] HANGUL SYLLABLE CEG..HANGUL SYLLABLE CEH
      52433 <= e && e <= 52459 || // Lo  [27] HANGUL SYLLABLE CYEOG..HANGUL SYLLABLE CYEOH
      52461 <= e && e <= 52487 || // Lo  [27] HANGUL SYLLABLE CYEG..HANGUL SYLLABLE CYEH
      52489 <= e && e <= 52515 || // Lo  [27] HANGUL SYLLABLE COG..HANGUL SYLLABLE COH
      52517 <= e && e <= 52543 || // Lo  [27] HANGUL SYLLABLE CWAG..HANGUL SYLLABLE CWAH
      52545 <= e && e <= 52571 || // Lo  [27] HANGUL SYLLABLE CWAEG..HANGUL SYLLABLE CWAEH
      52573 <= e && e <= 52599 || // Lo  [27] HANGUL SYLLABLE COEG..HANGUL SYLLABLE COEH
      52601 <= e && e <= 52627 || // Lo  [27] HANGUL SYLLABLE CYOG..HANGUL SYLLABLE CYOH
      52629 <= e && e <= 52655 || // Lo  [27] HANGUL SYLLABLE CUG..HANGUL SYLLABLE CUH
      52657 <= e && e <= 52683 || // Lo  [27] HANGUL SYLLABLE CWEOG..HANGUL SYLLABLE CWEOH
      52685 <= e && e <= 52711 || // Lo  [27] HANGUL SYLLABLE CWEG..HANGUL SYLLABLE CWEH
      52713 <= e && e <= 52739 || // Lo  [27] HANGUL SYLLABLE CWIG..HANGUL SYLLABLE CWIH
      52741 <= e && e <= 52767 || // Lo  [27] HANGUL SYLLABLE CYUG..HANGUL SYLLABLE CYUH
      52769 <= e && e <= 52795 || // Lo  [27] HANGUL SYLLABLE CEUG..HANGUL SYLLABLE CEUH
      52797 <= e && e <= 52823 || // Lo  [27] HANGUL SYLLABLE CYIG..HANGUL SYLLABLE CYIH
      52825 <= e && e <= 52851 || // Lo  [27] HANGUL SYLLABLE CIG..HANGUL SYLLABLE CIH
      52853 <= e && e <= 52879 || // Lo  [27] HANGUL SYLLABLE KAG..HANGUL SYLLABLE KAH
      52881 <= e && e <= 52907 || // Lo  [27] HANGUL SYLLABLE KAEG..HANGUL SYLLABLE KAEH
      52909 <= e && e <= 52935 || // Lo  [27] HANGUL SYLLABLE KYAG..HANGUL SYLLABLE KYAH
      52937 <= e && e <= 52963 || // Lo  [27] HANGUL SYLLABLE KYAEG..HANGUL SYLLABLE KYAEH
      52965 <= e && e <= 52991 || // Lo  [27] HANGUL SYLLABLE KEOG..HANGUL SYLLABLE KEOH
      52993 <= e && e <= 53019 || // Lo  [27] HANGUL SYLLABLE KEG..HANGUL SYLLABLE KEH
      53021 <= e && e <= 53047 || // Lo  [27] HANGUL SYLLABLE KYEOG..HANGUL SYLLABLE KYEOH
      53049 <= e && e <= 53075 || // Lo  [27] HANGUL SYLLABLE KYEG..HANGUL SYLLABLE KYEH
      53077 <= e && e <= 53103 || // Lo  [27] HANGUL SYLLABLE KOG..HANGUL SYLLABLE KOH
      53105 <= e && e <= 53131 || // Lo  [27] HANGUL SYLLABLE KWAG..HANGUL SYLLABLE KWAH
      53133 <= e && e <= 53159 || // Lo  [27] HANGUL SYLLABLE KWAEG..HANGUL SYLLABLE KWAEH
      53161 <= e && e <= 53187 || // Lo  [27] HANGUL SYLLABLE KOEG..HANGUL SYLLABLE KOEH
      53189 <= e && e <= 53215 || // Lo  [27] HANGUL SYLLABLE KYOG..HANGUL SYLLABLE KYOH
      53217 <= e && e <= 53243 || // Lo  [27] HANGUL SYLLABLE KUG..HANGUL SYLLABLE KUH
      53245 <= e && e <= 53271 || // Lo  [27] HANGUL SYLLABLE KWEOG..HANGUL SYLLABLE KWEOH
      53273 <= e && e <= 53299 || // Lo  [27] HANGUL SYLLABLE KWEG..HANGUL SYLLABLE KWEH
      53301 <= e && e <= 53327 || // Lo  [27] HANGUL SYLLABLE KWIG..HANGUL SYLLABLE KWIH
      53329 <= e && e <= 53355 || // Lo  [27] HANGUL SYLLABLE KYUG..HANGUL SYLLABLE KYUH
      53357 <= e && e <= 53383 || // Lo  [27] HANGUL SYLLABLE KEUG..HANGUL SYLLABLE KEUH
      53385 <= e && e <= 53411 || // Lo  [27] HANGUL SYLLABLE KYIG..HANGUL SYLLABLE KYIH
      53413 <= e && e <= 53439 || // Lo  [27] HANGUL SYLLABLE KIG..HANGUL SYLLABLE KIH
      53441 <= e && e <= 53467 || // Lo  [27] HANGUL SYLLABLE TAG..HANGUL SYLLABLE TAH
      53469 <= e && e <= 53495 || // Lo  [27] HANGUL SYLLABLE TAEG..HANGUL SYLLABLE TAEH
      53497 <= e && e <= 53523 || // Lo  [27] HANGUL SYLLABLE TYAG..HANGUL SYLLABLE TYAH
      53525 <= e && e <= 53551 || // Lo  [27] HANGUL SYLLABLE TYAEG..HANGUL SYLLABLE TYAEH
      53553 <= e && e <= 53579 || // Lo  [27] HANGUL SYLLABLE TEOG..HANGUL SYLLABLE TEOH
      53581 <= e && e <= 53607 || // Lo  [27] HANGUL SYLLABLE TEG..HANGUL SYLLABLE TEH
      53609 <= e && e <= 53635 || // Lo  [27] HANGUL SYLLABLE TYEOG..HANGUL SYLLABLE TYEOH
      53637 <= e && e <= 53663 || // Lo  [27] HANGUL SYLLABLE TYEG..HANGUL SYLLABLE TYEH
      53665 <= e && e <= 53691 || // Lo  [27] HANGUL SYLLABLE TOG..HANGUL SYLLABLE TOH
      53693 <= e && e <= 53719 || // Lo  [27] HANGUL SYLLABLE TWAG..HANGUL SYLLABLE TWAH
      53721 <= e && e <= 53747 || // Lo  [27] HANGUL SYLLABLE TWAEG..HANGUL SYLLABLE TWAEH
      53749 <= e && e <= 53775 || // Lo  [27] HANGUL SYLLABLE TOEG..HANGUL SYLLABLE TOEH
      53777 <= e && e <= 53803 || // Lo  [27] HANGUL SYLLABLE TYOG..HANGUL SYLLABLE TYOH
      53805 <= e && e <= 53831 || // Lo  [27] HANGUL SYLLABLE TUG..HANGUL SYLLABLE TUH
      53833 <= e && e <= 53859 || // Lo  [27] HANGUL SYLLABLE TWEOG..HANGUL SYLLABLE TWEOH
      53861 <= e && e <= 53887 || // Lo  [27] HANGUL SYLLABLE TWEG..HANGUL SYLLABLE TWEH
      53889 <= e && e <= 53915 || // Lo  [27] HANGUL SYLLABLE TWIG..HANGUL SYLLABLE TWIH
      53917 <= e && e <= 53943 || // Lo  [27] HANGUL SYLLABLE TYUG..HANGUL SYLLABLE TYUH
      53945 <= e && e <= 53971 || // Lo  [27] HANGUL SYLLABLE TEUG..HANGUL SYLLABLE TEUH
      53973 <= e && e <= 53999 || // Lo  [27] HANGUL SYLLABLE TYIG..HANGUL SYLLABLE TYIH
      54001 <= e && e <= 54027 || // Lo  [27] HANGUL SYLLABLE TIG..HANGUL SYLLABLE TIH
      54029 <= e && e <= 54055 || // Lo  [27] HANGUL SYLLABLE PAG..HANGUL SYLLABLE PAH
      54057 <= e && e <= 54083 || // Lo  [27] HANGUL SYLLABLE PAEG..HANGUL SYLLABLE PAEH
      54085 <= e && e <= 54111 || // Lo  [27] HANGUL SYLLABLE PYAG..HANGUL SYLLABLE PYAH
      54113 <= e && e <= 54139 || // Lo  [27] HANGUL SYLLABLE PYAEG..HANGUL SYLLABLE PYAEH
      54141 <= e && e <= 54167 || // Lo  [27] HANGUL SYLLABLE PEOG..HANGUL SYLLABLE PEOH
      54169 <= e && e <= 54195 || // Lo  [27] HANGUL SYLLABLE PEG..HANGUL SYLLABLE PEH
      54197 <= e && e <= 54223 || // Lo  [27] HANGUL SYLLABLE PYEOG..HANGUL SYLLABLE PYEOH
      54225 <= e && e <= 54251 || // Lo  [27] HANGUL SYLLABLE PYEG..HANGUL SYLLABLE PYEH
      54253 <= e && e <= 54279 || // Lo  [27] HANGUL SYLLABLE POG..HANGUL SYLLABLE POH
      54281 <= e && e <= 54307 || // Lo  [27] HANGUL SYLLABLE PWAG..HANGUL SYLLABLE PWAH
      54309 <= e && e <= 54335 || // Lo  [27] HANGUL SYLLABLE PWAEG..HANGUL SYLLABLE PWAEH
      54337 <= e && e <= 54363 || // Lo  [27] HANGUL SYLLABLE POEG..HANGUL SYLLABLE POEH
      54365 <= e && e <= 54391 || // Lo  [27] HANGUL SYLLABLE PYOG..HANGUL SYLLABLE PYOH
      54393 <= e && e <= 54419 || // Lo  [27] HANGUL SYLLABLE PUG..HANGUL SYLLABLE PUH
      54421 <= e && e <= 54447 || // Lo  [27] HANGUL SYLLABLE PWEOG..HANGUL SYLLABLE PWEOH
      54449 <= e && e <= 54475 || // Lo  [27] HANGUL SYLLABLE PWEG..HANGUL SYLLABLE PWEH
      54477 <= e && e <= 54503 || // Lo  [27] HANGUL SYLLABLE PWIG..HANGUL SYLLABLE PWIH
      54505 <= e && e <= 54531 || // Lo  [27] HANGUL SYLLABLE PYUG..HANGUL SYLLABLE PYUH
      54533 <= e && e <= 54559 || // Lo  [27] HANGUL SYLLABLE PEUG..HANGUL SYLLABLE PEUH
      54561 <= e && e <= 54587 || // Lo  [27] HANGUL SYLLABLE PYIG..HANGUL SYLLABLE PYIH
      54589 <= e && e <= 54615 || // Lo  [27] HANGUL SYLLABLE PIG..HANGUL SYLLABLE PIH
      54617 <= e && e <= 54643 || // Lo  [27] HANGUL SYLLABLE HAG..HANGUL SYLLABLE HAH
      54645 <= e && e <= 54671 || // Lo  [27] HANGUL SYLLABLE HAEG..HANGUL SYLLABLE HAEH
      54673 <= e && e <= 54699 || // Lo  [27] HANGUL SYLLABLE HYAG..HANGUL SYLLABLE HYAH
      54701 <= e && e <= 54727 || // Lo  [27] HANGUL SYLLABLE HYAEG..HANGUL SYLLABLE HYAEH
      54729 <= e && e <= 54755 || // Lo  [27] HANGUL SYLLABLE HEOG..HANGUL SYLLABLE HEOH
      54757 <= e && e <= 54783 || // Lo  [27] HANGUL SYLLABLE HEG..HANGUL SYLLABLE HEH
      54785 <= e && e <= 54811 || // Lo  [27] HANGUL SYLLABLE HYEOG..HANGUL SYLLABLE HYEOH
      54813 <= e && e <= 54839 || // Lo  [27] HANGUL SYLLABLE HYEG..HANGUL SYLLABLE HYEH
      54841 <= e && e <= 54867 || // Lo  [27] HANGUL SYLLABLE HOG..HANGUL SYLLABLE HOH
      54869 <= e && e <= 54895 || // Lo  [27] HANGUL SYLLABLE HWAG..HANGUL SYLLABLE HWAH
      54897 <= e && e <= 54923 || // Lo  [27] HANGUL SYLLABLE HWAEG..HANGUL SYLLABLE HWAEH
      54925 <= e && e <= 54951 || // Lo  [27] HANGUL SYLLABLE HOEG..HANGUL SYLLABLE HOEH
      54953 <= e && e <= 54979 || // Lo  [27] HANGUL SYLLABLE HYOG..HANGUL SYLLABLE HYOH
      54981 <= e && e <= 55007 || // Lo  [27] HANGUL SYLLABLE HUG..HANGUL SYLLABLE HUH
      55009 <= e && e <= 55035 || // Lo  [27] HANGUL SYLLABLE HWEOG..HANGUL SYLLABLE HWEOH
      55037 <= e && e <= 55063 || // Lo  [27] HANGUL SYLLABLE HWEG..HANGUL SYLLABLE HWEH
      55065 <= e && e <= 55091 || // Lo  [27] HANGUL SYLLABLE HWIG..HANGUL SYLLABLE HWIH
      55093 <= e && e <= 55119 || // Lo  [27] HANGUL SYLLABLE HYUG..HANGUL SYLLABLE HYUH
      55121 <= e && e <= 55147 || // Lo  [27] HANGUL SYLLABLE HEUG..HANGUL SYLLABLE HEUH
      55149 <= e && e <= 55175 || // Lo  [27] HANGUL SYLLABLE HYIG..HANGUL SYLLABLE HYIH
      55177 <= e && e <= 55203 ? b : e == 9757 || // So       WHITE UP POINTING INDEX
      e == 9977 || // So       PERSON WITH BALL
      9994 <= e && e <= 9997 || // So   [4] RAISED FIST..WRITING HAND
      e == 127877 || // So       FATHER CHRISTMAS
      127938 <= e && e <= 127940 || // So   [3] SNOWBOARDER..SURFER
      e == 127943 || // So       HORSE RACING
      127946 <= e && e <= 127948 || // So   [3] SWIMMER..GOLFER
      128066 <= e && e <= 128067 || // So   [2] EAR..NOSE
      128070 <= e && e <= 128080 || // So  [11] WHITE UP POINTING BACKHAND INDEX..OPEN HANDS SIGN
      e == 128110 || // So       POLICE OFFICER
      128112 <= e && e <= 128120 || // So   [9] BRIDE WITH VEIL..PRINCESS
      e == 128124 || // So       BABY ANGEL
      128129 <= e && e <= 128131 || // So   [3] INFORMATION DESK PERSON..DANCER
      128133 <= e && e <= 128135 || // So   [3] NAIL POLISH..HAIRCUT
      e == 128170 || // So       FLEXED BICEPS
      128372 <= e && e <= 128373 || // So   [2] MAN IN BUSINESS SUIT LEVITATING..SLEUTH OR SPY
      e == 128378 || // So       MAN DANCING
      e == 128400 || // So       RAISED HAND WITH FINGERS SPLAYED
      128405 <= e && e <= 128406 || // So   [2] REVERSED HAND WITH MIDDLE FINGER EXTENDED..RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS
      128581 <= e && e <= 128583 || // So   [3] FACE WITH NO GOOD GESTURE..PERSON BOWING DEEPLY
      128587 <= e && e <= 128591 || // So   [5] HAPPY PERSON RAISING ONE HAND..PERSON WITH FOLDED HANDS
      e == 128675 || // So       ROWBOAT
      128692 <= e && e <= 128694 || // So   [3] BICYCLIST..PEDESTRIAN
      e == 128704 || // So       BATH
      e == 128716 || // So       SLEEPING ACCOMMODATION
      129304 <= e && e <= 129308 || // So   [5] SIGN OF THE HORNS..RIGHT-FACING FIST
      129310 <= e && e <= 129311 || // So   [2] HAND WITH INDEX AND MIDDLE FINGERS CROSSED..I LOVE YOU HAND SIGN
      e == 129318 || // So       FACE PALM
      129328 <= e && e <= 129337 || // So  [10] PREGNANT WOMAN..JUGGLING
      129341 <= e && e <= 129342 || // So   [2] WATER POLO..HANDBALL
      129489 <= e && e <= 129501 ? v : 127995 <= e && e <= 127999 ? C : e == 8205 ? m : e == 9792 || // So       FEMALE SIGN
      e == 9794 || // So       MALE SIGN
      9877 <= e && e <= 9878 || // So   [2] STAFF OF AESCULAPIUS..SCALES
      e == 9992 || // So       AIRPLANE
      e == 10084 || // So       HEAVY BLACK HEART
      e == 127752 || // So       RAINBOW
      e == 127806 || // So       EAR OF RICE
      e == 127859 || // So       COOKING
      e == 127891 || // So       GRADUATION CAP
      e == 127908 || // So       MICROPHONE
      e == 127912 || // So       ARTIST PALETTE
      e == 127979 || // So       SCHOOL
      e == 127981 || // So       FACTORY
      e == 128139 || // So       KISS MARK
      128187 <= e && e <= 128188 || // So   [2] PERSONAL COMPUTER..BRIEFCASE
      e == 128295 || // So       WRENCH
      e == 128300 || // So       MICROSCOPE
      e == 128488 || // So       LEFT SPEECH BUBBLE
      e == 128640 || // So       ROCKET
      e == 128658 ? P : 128102 <= e && e <= 128105 ? A : D;
    }
    return this;
  }
  t.exports && (t.exports = r);
})(Ha);
var Wd = Ha.exports;
const jd = /* @__PURE__ */ Hd(Wd), Ld = new jd(), Nd = (t = "") => Ld.countGraphemes(t), Wa = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ _n({
    type: { type: String, default: "text" },
    size: { type: String, default: "medium" },
    placeholder: { type: String, default: "" },
    maxlength: { type: Number },
    showCount: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    trim: { type: Boolean, default: !0 },
    // 默认去除首尾空格
    showPassword: { type: Boolean, default: !1 },
    // 是否显示密码
    prefixIcon: { type: Object }
    // 前缀图标 Icon Props
  }, {
    modelValue: { type: String, default: "" },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ _n(["blur", "input"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const n = Wo(t, "modelValue"), i = r;
    function a() {
      let s = n.value;
      if (t.trim) {
        const u = s.trim();
        n.value = u, s = u;
      }
      return s;
    }
    function o() {
      const s = a();
      i("blur", { value: s });
    }
    function l(s) {
      n.value = s;
      let u = s;
      t.trim && (u = u.trim()), i("input", { value: u });
    }
    return (s, u) => (Xe(), ct(ve(Eh), {
      "input-props": { autocomplete: "off" },
      type: t.type,
      size: t.size,
      "show-password-on": t.showPassword ? "click" : void 0,
      value: n.value,
      maxlength: t.maxlength,
      "show-count": t.showCount,
      "count-graphemes": t.maxlength != null && t.maxlength > 0 || t.showCount ? ve(Nd) : void 0,
      placeholder: t.placeholder,
      autofocus: t.autofocus,
      disabled: t.disabled,
      readonly: t.readonly,
      onInput: l,
      onBlur: o
    }, ki({ _: 2 }, [
      t.prefixIcon ? {
        name: "prefix",
        fn: At(() => [
          Mi(ve(za), jo(Lo(t.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly"]));
  }
}), Vd = /* @__PURE__ */ Object.assign({
  name: "PForm",
  inheritAttrs: !1
}, {
  __name: "form",
  props: {
    model: { type: Array, default: () => [] },
    rules: { type: Object, default: () => {
    } },
    showLabel: { type: Boolean, default: !0 },
    labelPlacement: { type: String, default: "left" },
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    feedbackSizeClass: { type: String }
  },
  emits: ["submit"],
  setup(t, { expose: r, emit: n }) {
    const i = function() {
      const d = {};
      return t.model.forEach((b) => {
        b.slot || (d[b.field] = b.value);
      }), q(d);
    }();
    function a() {
      const d = {};
      return t.model.forEach((b) => {
        b.slot && (d[b.field] = Uo(b.value));
      }), { ...i.value, ...d };
    }
    const o = n, l = In("form"), s = Ia(function() {
      document.activeElement && document.activeElement.blur(), l.value.validate((d) => {
        o("submit", { formData: a(), valid: !d || d.length === 0, errors: d });
      }).catch(() => null);
    }), u = In("formItem");
    function f(d = "") {
      if (!d) {
        l.value.restoreValidation();
        return;
      }
      const b = u.value.find((D) => D.path === d);
      b && b.restoreValidation();
    }
    function x(d) {
      d && t.rules && t.rules[d] && (t.rules[d].trigger && t.rules[d].trigger.includes("input") || f(d));
    }
    return r({ restoreValidation: f }), (d, b) => (Xe(), ct(ve(Jh), {
      ref_key: "form",
      ref: l,
      "show-label": t.showLabel,
      "label-placement": t.labelPlacement,
      "label-width": "auto",
      "label-align": t.labelPlacement === "left" ? "right" : "left",
      model: ve(i),
      rules: t.rules,
      onSubmit: No(ve(s), ["prevent"])
    }, {
      default: At(() => [
        (Xe(!0), Vo(_r, null, qo(t.model, (D) => (Xe(), ct(ve(Md), {
          ref_for: !0,
          ref_key: "formItem",
          ref: u,
          key: D.field,
          label: D.label,
          path: D.field,
          "feedback-class": t.feedbackSizeClass ? `p-form-item-feedback-${t.feedbackSizeClass}` : "",
          first: !0
        }, {
          default: At(() => [
            !D.slot && D.type === "input" ? (Xe(), ct(Go(ve(Wa)), wn({
              key: 0,
              modelValue: ve(i)[D.field],
              "onUpdate:modelValue": (c) => ve(i)[D.field] = c,
              ref_for: !0
            }, { disabled: t.disabled, readonly: t.readonly, ...D.props }, {
              onInput: (c) => x(D.field)
            }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : Tr(d.$slots, D.field, { key: 1 })
          ]),
          _: 2
        }, 1032, ["label", "path", "feedback-class"]))), 128)),
        Tr(d.$slots, "default")
      ]),
      _: 3
    }, 8, ["show-label", "label-placement", "label-align", "model", "rules", "onSubmit"]));
  }
}), Ud = ({ delay: t = 300, minPendingTime: r = 500, loadingValue: n = !1 } = {}) => {
  let i = 0, a = null;
  const o = () => {
    a && (clearTimeout(a), a = null);
  }, l = q(!!n), s = q(!!n);
  let u = null;
  const f = () => (l.value = !1, new Promise((x) => {
    u = x;
  }));
  return Ke(
    l,
    (x) => {
      if (i === 0)
        i = (/* @__PURE__ */ new Date()).getTime(), o(), a = setTimeout(() => {
          s.value = x;
        }, t);
      else {
        if (o(), s.value !== x) {
          const b = (/* @__PURE__ */ new Date()).getTime() - i - t, D = b >= r ? 0 : r - b;
          a = setTimeout(() => {
            s.value = x, u && u();
          }, D);
        } else
          u && u();
        i = 0;
      }
    },
    { immediate: !!n, deep: !1 }
  ), Yo(() => {
    u = null, o();
  }), { loading: s, waiting: l, doneLoading: f };
}, Yd = {
  install: (t, r = {}) => {
    const { prefix: n = "p" } = r;
    t.component(`${n}-config-provider`, _d), t.component(`${n}-button`, Id), t.component(`${n}-input`, Wa), t.component(`${n}-form`, Vd), t.component(`${n}-icon`, za), t.component(`${n}-input-group`, $h), t.component(`${n}-input-group-label`, zh);
  }
};
export {
  Yd as default,
  Ud as useDelayLoading
};
