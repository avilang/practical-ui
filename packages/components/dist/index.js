import { createTextVNode as dn, Fragment as ct, Comment as Pi, isVNode as Gs, defineComponent as J, inject as ie, getCurrentInstance as _r, watch as Fe, onBeforeUnmount as Ue, ref as L, readonly as cn, computed as k, onMounted as ht, reactive as Us, onBeforeMount as Fn, provide as $e, withDirectives as Nr, toRef as se, h as b, Teleport as Xs, nextTick as hn, renderSlot as Pr, onActivated as Ys, onDeactivated as Zs, shallowRef as Js, watchEffect as Ke, Transition as At, TransitionGroup as Qs, mergeProps as or, vShow as Aa, cloneVNode as eu, Text as tu, markRaw as no, openBlock as ut, createBlock as Bt, unref as Be, withCtx as Lt, useAttrs as ru, useSlots as nu, normalizeClass as iu, createSlots as Da, createCommentVNode as ou, createVNode as Sa, mergeModels as io, useModel as au, normalizeProps as lu, guardReactiveProps as su, useTemplateRef as oo, withModifiers as uu, createElementBlock as fu, renderList as du, resolveDynamicComponent as cu, toValue as hu, onScopeDispose as xu } from "vue";
let xn = [];
const Fa = /* @__PURE__ */ new WeakMap();
function pu() {
  xn.forEach((t) => t(...Fa.get(t))), xn = [];
}
function vu(t, ...r) {
  Fa.set(t, r), !xn.includes(t) && xn.push(t) === 1 && requestAnimationFrame(pu);
}
function pn(t, r) {
  let { target: n } = t;
  for (; n; ) {
    if (n.dataset && n.dataset[r] !== void 0)
      return !0;
    n = n.parentElement;
  }
  return !1;
}
function vn(t) {
  return t.composedPath()[0] || null;
}
function ao(t) {
  return typeof t == "string" ? t.endsWith("px") ? Number(t.slice(0, t.length - 2)) : Number(t) : t;
}
function mu(t) {
  if (t != null)
    return typeof t == "number" ? `${t}px` : t.endsWith("px") ? t : `${t}px`;
}
function $a(t, r) {
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
const lo = {
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
}, ar = "^\\s*", lr = "\\s*$", Mt = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", It = "([0-9A-Fa-f])", _t = "([0-9A-Fa-f]{2})", gu = new RegExp(`${ar}rgb\\s*\\(${Mt},${Mt},${Mt}\\)${lr}`), bu = new RegExp(`${ar}rgba\\s*\\(${Mt},${Mt},${Mt},${Mt}\\)${lr}`), yu = new RegExp(`${ar}#${It}${It}${It}${lr}`), Cu = new RegExp(`${ar}#${_t}${_t}${_t}${lr}`), wu = new RegExp(`${ar}#${It}${It}${It}${It}${lr}`), Bu = new RegExp(`${ar}#${_t}${_t}${_t}${_t}${lr}`);
function Ie(t) {
  return parseInt(t, 16);
}
function jt(t) {
  try {
    let r;
    if (r = Cu.exec(t))
      return [Ie(r[1]), Ie(r[2]), Ie(r[3]), 1];
    if (r = gu.exec(t))
      return [Re(r[1]), Re(r[5]), Re(r[9]), 1];
    if (r = bu.exec(t))
      return [
        Re(r[1]),
        Re(r[5]),
        Re(r[9]),
        Ar(r[13])
      ];
    if (r = yu.exec(t))
      return [
        Ie(r[1] + r[1]),
        Ie(r[2] + r[2]),
        Ie(r[3] + r[3]),
        1
      ];
    if (r = Bu.exec(t))
      return [
        Ie(r[1]),
        Ie(r[2]),
        Ie(r[3]),
        Ar(Ie(r[4]) / 255)
      ];
    if (r = wu.exec(t))
      return [
        Ie(r[1] + r[1]),
        Ie(r[2] + r[2]),
        Ie(r[3] + r[3]),
        Ar(Ie(r[4] + r[4]) / 255)
      ];
    if (t in lo)
      return jt(lo[t]);
    throw new Error(`[seemly/rgba]: Invalid color value ${t}.`);
  } catch (r) {
    throw r;
  }
}
function Au(t) {
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function ri(t, r, n, i) {
  return `rgba(${Re(t)}, ${Re(r)}, ${Re(n)}, ${Au(i)})`;
}
function Hn(t, r, n, i, o) {
  return Re((t * r * (1 - i) + n * i) / o);
}
function qe(t, r) {
  Array.isArray(t) || (t = jt(t)), Array.isArray(r) || (r = jt(r));
  const n = t[3], i = r[3], o = Ar(n + i - n * i);
  return ri(Hn(t[0], n, r[0], i, o), Hn(t[1], n, r[1], i, o), Hn(t[2], n, r[2], i, o), o);
}
function wt(t, r) {
  const [n, i, o, a = 1] = Array.isArray(t) ? t : jt(t);
  return r.alpha ? ri(n, i, o, r.alpha) : ri(n, i, o, a);
}
function Xr(t, r) {
  const [n, i, o, a = 1] = Array.isArray(t) ? t : jt(t), { lightness: l = 1, alpha: s = 1 } = r;
  return Du([n * l, i * l, o * l, a * s]);
}
function Ar(t) {
  const r = Math.round(Number(t) * 100) / 100;
  return r > 1 ? 1 : r < 0 ? 0 : r;
}
function Re(t) {
  const r = Math.round(Number(t));
  return r > 255 ? 255 : r < 0 ? 0 : r;
}
function Du(t) {
  const [r, n, i] = t;
  return 3 in t ? `rgba(${Re(r)}, ${Re(n)}, ${Re(i)}, ${Ar(t[3])})` : `rgba(${Re(r)}, ${Re(n)}, ${Re(i)}, 1)`;
}
function mn(t = 8) {
  return Math.random().toString(16).slice(2, 2 + t);
}
function Ea(t, r = [], n) {
  const i = {};
  return r.forEach((o) => {
    i[o] = t[o];
  }), Object.assign(i, n);
}
function ni(t, r = !0, n = []) {
  return t.forEach((i) => {
    if (i !== null) {
      if (typeof i != "object") {
        (typeof i == "string" || typeof i == "number") && n.push(dn(String(i)));
        return;
      }
      if (Array.isArray(i)) {
        ni(i, r, n);
        return;
      }
      if (i.type === ct) {
        if (i.children === null) return;
        Array.isArray(i.children) && ni(i.children, r, n);
      } else {
        if (i.type === Pi && r) return;
        n.push(i);
      }
    }
  }), n;
}
function le(t, ...r) {
  if (Array.isArray(t))
    t.forEach((n) => le(n, ...r));
  else
    return t(...r);
}
function so(t) {
  return Object.keys(t);
}
function gn(t, ...r) {
  return typeof t == "function" ? t(...r) : typeof t == "string" ? dn(t) : typeof t == "number" ? dn(String(t)) : null;
}
const uo = /* @__PURE__ */ new Set();
function Ct(t, r) {
  const n = `[naive/${t}]: ${r}`;
  uo.has(n) || (uo.add(n), console.error(n));
}
function Dt(t, r) {
  console.error(`[naive/${t}]: ${r}`);
}
function Ti(t, r) {
  throw new Error(`[naive/${t}]: ${r}`);
}
function fo(t, r = "default", n = void 0) {
  const i = t[r];
  if (!i)
    return Dt("getFirstSlotVNode", `slot[${r}] is empty`), null;
  const o = ni(i(n));
  return o.length === 1 ? o[0] : (Dt("getFirstSlotVNode", `slot[${r}] should have exactly one child`), null);
}
function Su(t) {
  return (r) => {
    r ? t.value = r.$el : t.value = null;
  };
}
function sr(t) {
  return t.some((r) => Gs(r) ? !(r.type === Pi || r.type === ct && !sr(r.children)) : !0) ? t : null;
}
function Dr(t, r) {
  return t && sr(t()) || r();
}
function ii(t, r, n) {
  return t && sr(t(r)) || n(r);
}
function nt(t, r) {
  const n = t && sr(t());
  return r(n || null);
}
function Fu(t, r, n) {
  const i = t && sr(t(r));
  return n(i || null);
}
function oi(t) {
  return !(t && sr(t()));
}
const co = J({
  render() {
    var t, r;
    return (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t);
  }
}), $u = /^(\d|\.)+$/, ho = /(\d|\.)+/;
function ft(t, {
  c: r = 1,
  offset: n = 0,
  attachPx: i = !0
} = {}) {
  if (typeof t == "number") {
    const o = (t + n) * r;
    return o === 0 ? "0" : `${o}px`;
  } else if (typeof t == "string")
    if ($u.test(t)) {
      const o = (Number(t) + n) * r;
      return i ? o === 0 ? "0" : `${o}px` : `${o}`;
    } else {
      const o = ho.exec(t);
      return o ? t.replace(ho, String((Number(o[0]) + n) * r)) : t;
    }
  return t;
}
function xo(t) {
  return t.replace(/#|\(|\)|,|\s|\./g, "_");
}
function po(t) {
  const {
    left: r,
    right: n,
    top: i,
    bottom: o
  } = $a(t);
  return `${i} ${n} ${o} ${r}`;
}
function Eu(t) {
  let r = 0;
  for (let n = 0; n < t.length; ++n)
    t[n] === "&" && ++r;
  return r;
}
const Pa = /\s*,(?![^(]*\))\s*/g, Pu = /\s+/g;
function Tu(t, r) {
  const n = [];
  return r.split(Pa).forEach((i) => {
    let o = Eu(i);
    if (o) {
      if (o === 1) {
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
    let a = [
      i
    ];
    for (; o--; ) {
      const l = [];
      a.forEach((s) => {
        t.forEach((u) => {
          l.push(s.replace("&", u));
        });
      }), a = l;
    }
    a.forEach((l) => n.push(l));
  }), n;
}
function zu(t, r) {
  const n = [];
  return r.split(Pa).forEach((i) => {
    t.forEach((o) => {
      n.push((o && o + " ") + i);
    });
  }), n;
}
function Ru(t) {
  let r = [""];
  return t.forEach((n) => {
    n = n && n.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    n && (n.includes("&") ? r = Tu(r, n) : r = zu(r, n));
  }), r.join(", ").replace(Pu, " ");
}
function vo(t) {
  if (!t)
    return;
  const r = t.parentElement;
  r && r.removeChild(t);
}
function $n(t, r) {
  return (r ?? document.head).querySelector(`style[cssr-id="${t}"]`);
}
function Ou(t) {
  const r = document.createElement("style");
  return r.setAttribute("cssr-id", t), r;
}
function Yr(t) {
  return t ? /^\s*@(s|m)/.test(t) : !1;
}
const ku = /[A-Z]/g;
function Ta(t) {
  return t.replace(ku, (r) => "-" + r.toLowerCase());
}
function Mu(t, r = "  ") {
  return typeof t == "object" && t !== null ? ` {
` + Object.entries(t).map((n) => r + `  ${Ta(n[0])}: ${n[1]};`).join(`
`) + `
` + r + "}" : `: ${t};`;
}
function Iu(t, r, n) {
  return typeof t == "function" ? t({
    context: r.context,
    props: n
  }) : t;
}
function mo(t, r, n, i) {
  if (!r)
    return "";
  const o = Iu(r, n, i);
  if (!o)
    return "";
  if (typeof o == "string")
    return `${t} {
${o}
}`;
  const a = Object.keys(o);
  if (a.length === 0)
    return n.config.keepEmptyBlock ? t + ` {
}` : "";
  const l = t ? [
    t + " {"
  ] : [];
  return a.forEach((s) => {
    const u = o[s];
    if (s === "raw") {
      l.push(`
` + u + `
`);
      return;
    }
    s = Ta(s), u != null && l.push(`  ${s}${Mu(u)}`);
  }), t && l.push("}"), l.join(`
`);
}
function ai(t, r, n) {
  t && t.forEach((i) => {
    if (Array.isArray(i))
      ai(i, r, n);
    else if (typeof i == "function") {
      const o = i(r);
      Array.isArray(o) ? ai(o, r, n) : o && n(o);
    } else i && n(i);
  });
}
function za(t, r, n, i, o) {
  const a = t.$;
  let l = "";
  if (!a || typeof a == "string")
    Yr(a) ? l = a : r.push(a);
  else if (typeof a == "function") {
    const f = a({
      context: i.context,
      props: o
    });
    Yr(f) ? l = f : r.push(f);
  } else if (a.before && a.before(i.context), !a.$ || typeof a.$ == "string")
    Yr(a.$) ? l = a.$ : r.push(a.$);
  else if (a.$) {
    const f = a.$({
      context: i.context,
      props: o
    });
    Yr(f) ? l = f : r.push(f);
  }
  const s = Ru(r), u = mo(s, t.props, i, o);
  l ? n.push(`${l} {`) : u.length && n.push(u), t.children && ai(t.children, {
    context: i.context,
    props: o
  }, (f) => {
    if (typeof f == "string") {
      const d = mo(s, { raw: f }, i, o);
      n.push(d);
    } else
      za(f, r, n, i, o);
  }), r.pop(), l && n.push("}"), a && a.after && a.after(i.context);
}
function _u(t, r, n) {
  const i = [];
  return za(t, [], i, r, n), i.join(`

`);
}
function Tr(t) {
  for (var r = 0, n, i = 0, o = t.length; o >= 4; ++i, o -= 4)
    n = t.charCodeAt(i) & 255 | (t.charCodeAt(++i) & 255) << 8 | (t.charCodeAt(++i) & 255) << 16 | (t.charCodeAt(++i) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, r = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
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
function Nu(t, r, n, i) {
  const { els: o } = r;
  if (n === void 0)
    o.forEach(vo), r.els = [];
  else {
    const a = $n(n, i);
    a && o.includes(a) && (vo(a), r.els = o.filter((l) => l !== a));
  }
}
function go(t, r) {
  t.push(r);
}
function Hu(t, r, n, i, o, a, l, s, u) {
  let f;
  if (n === void 0 && (f = r.render(i), n = Tr(f)), u) {
    u.adapter(n, f ?? r.render(i));
    return;
  }
  s === void 0 && (s = document.head);
  const d = $n(n, s);
  if (d !== null && !a)
    return d;
  const c = d ?? Ou(n);
  if (f === void 0 && (f = r.render(i)), c.textContent = f, d !== null)
    return d;
  if (l) {
    const v = s.querySelector(`meta[name="${l}"]`);
    if (v)
      return s.insertBefore(c, v), go(r.els, c), c;
  }
  return o ? s.insertBefore(c, s.querySelector("style, link")) : s.appendChild(c), go(r.els, c), c;
}
function Wu(t) {
  return _u(this, this.instance, t);
}
function Lu(t = {}) {
  const { id: r, ssr: n, props: i, head: o = !1, force: a = !1, anchorMetaName: l, parent: s } = t;
  return Hu(this.instance, this, r, i, o, a, l, s, n);
}
function ju(t = {}) {
  const { id: r, parent: n } = t;
  Nu(this.instance, this, r, n);
}
const Zr = function(t, r, n, i) {
  return {
    instance: t,
    $: r,
    props: n,
    children: i,
    els: [],
    render: Wu,
    mount: Lu,
    unmount: ju
  };
}, Vu = function(t, r, n, i) {
  return Array.isArray(r) ? Zr(t, { $: null }, null, r) : Array.isArray(n) ? Zr(t, r, null, n) : Array.isArray(i) ? Zr(t, r, n, i) : Zr(t, r, n, null);
};
function Ra(t = {}) {
  const r = {
    c: (...n) => Vu(r, ...n),
    use: (n, ...i) => n.install(r, ...i),
    find: $n,
    context: {},
    config: t
  };
  return r;
}
function qu(t, r) {
  if (t === void 0)
    return !1;
  if (r) {
    const { context: { ids: n } } = r;
    return n.has(t);
  }
  return $n(t) !== null;
}
function Ku(t) {
  let r = ".", n = "__", i = "--", o;
  if (t) {
    let x = t.blockPrefix;
    x && (r = x), x = t.elementPrefix, x && (n = x), x = t.modifierPrefix, x && (i = x);
  }
  const a = {
    install(x) {
      o = x.c;
      const p = x.context;
      p.bem = {}, p.bem.b = null, p.bem.els = null;
    }
  };
  function l(x) {
    let p, g;
    return {
      before(h) {
        p = h.bem.b, g = h.bem.els, h.bem.els = null;
      },
      after(h) {
        h.bem.b = p, h.bem.els = g;
      },
      $({ context: h, props: D }) {
        return x = typeof x == "string" ? x : x({ context: h, props: D }), h.bem.b = x, `${(D == null ? void 0 : D.bPrefix) || r}${h.bem.b}`;
      }
    };
  }
  function s(x) {
    let p;
    return {
      before(g) {
        p = g.bem.els;
      },
      after(g) {
        g.bem.els = p;
      },
      $({ context: g, props: h }) {
        return x = typeof x == "string" ? x : x({ context: g, props: h }), g.bem.els = x.split(",").map((D) => D.trim()), g.bem.els.map((D) => `${(h == null ? void 0 : h.bPrefix) || r}${g.bem.b}${n}${D}`).join(", ");
      }
    };
  }
  function u(x) {
    return {
      $({ context: p, props: g }) {
        x = typeof x == "string" ? x : x({ context: p, props: g });
        const h = x.split(",").map((C) => C.trim());
        function D(C) {
          return h.map((F) => `&${(g == null ? void 0 : g.bPrefix) || r}${p.bem.b}${C !== void 0 ? `${n}${C}` : ""}${i}${F}`).join(", ");
        }
        const E = p.bem.els;
        if (E !== null) {
          if (process.env.NODE_ENV !== "production" && E.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${x}) is invalid, using modifier inside multiple elements is not allowed`);
          return D(E[0]);
        } else
          return D();
      }
    };
  }
  function f(x) {
    return {
      $({ context: p, props: g }) {
        x = typeof x == "string" ? x : x({ context: p, props: g });
        const h = p.bem.els;
        if (process.env.NODE_ENV !== "production" && h !== null && h.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${x}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(g == null ? void 0 : g.bPrefix) || r}${p.bem.b}${h !== null && h.length > 0 ? `${n}${h[0]}` : ""}${i}${x})`;
      }
    };
  }
  return Object.assign(a, {
    cB: (...x) => o(l(x[0]), x[1], x[2]),
    cE: (...x) => o(s(x[0]), x[1], x[2]),
    cM: (...x) => o(u(x[0]), x[1], x[2]),
    cNotM: (...x) => o(f(x[0]), x[1], x[2])
  }), a;
}
const Gu = "n", bn = `.${Gu}-`, Uu = "__", Xu = "--", Oa = Ra(), ka = Ku({
  blockPrefix: bn,
  elementPrefix: Uu,
  modifierPrefix: Xu
});
Oa.use(ka);
const {
  c: P,
  find: ub
} = Oa, {
  cB: N,
  cE: I,
  cM: V,
  cNotM: _e
} = ka;
function Yu(t) {
  return P(({
    props: {
      bPrefix: r
    }
  }) => `${r || bn}modal, ${r || bn}drawer`, [t]);
}
function Zu(t) {
  return P(({
    props: {
      bPrefix: r
    }
  }) => `${r || bn}popover`, [t]);
}
const Ju = (...t) => P(">", [N(...t)]);
function K(t, r) {
  return t + (r === "default" ? "" : r.replace(/^[a-z]/, (n) => n.toUpperCase()));
}
let Wn;
function Qu() {
  return Wn === void 0 && (Wn = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Wn;
}
const En = typeof document < "u" && typeof window < "u";
function ef(t, r, n) {
  var i;
  const o = ie(t, null);
  if (o === null) return;
  const a = (i = _r()) === null || i === void 0 ? void 0 : i.proxy;
  Fe(n, l), l(n.value), Ue(() => {
    l(void 0, n.value);
  });
  function l(f, d) {
    if (!o) return;
    const c = o[r];
    d !== void 0 && s(c, d), f !== void 0 && u(c, f);
  }
  function s(f, d) {
    f[d] || (f[d] = []), f[d].splice(f[d].findIndex((c) => c === a), 1);
  }
  function u(f, d) {
    f[d] || (f[d] = []), ~f[d].findIndex((c) => c === a) || f[d].push(a);
  }
}
function tf(t, r, n) {
  const i = L(t.value);
  let o = null;
  return Fe(t, (a) => {
    o !== null && window.clearTimeout(o), a === !0 ? n && !n.value ? i.value = !0 : o = window.setTimeout(() => {
      i.value = !0;
    }, r) : i.value = !1;
  }), i;
}
function Ma(t) {
  const r = L(!!t.value);
  if (r.value)
    return cn(r);
  const n = Fe(t, (i) => {
    i && (r.value = !0, n());
  });
  return cn(r);
}
function ke(t) {
  const r = k(t), n = L(r.value);
  return Fe(r, (i) => {
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
function rf() {
  return _r() !== null;
}
const nf = typeof window < "u";
let Qt, Sr;
const of = () => {
  var t, r;
  Qt = nf ? (r = (t = document) === null || t === void 0 ? void 0 : t.fonts) === null || r === void 0 ? void 0 : r.ready : void 0, Sr = !1, Qt !== void 0 ? Qt.then(() => {
    Sr = !0;
  }) : Sr = !0;
};
of();
function af(t) {
  if (Sr)
    return;
  let r = !1;
  ht(() => {
    Sr || Qt == null || Qt.then(() => {
      r || t();
    });
  }), Ue(() => {
    r = !0;
  });
}
function sn(t) {
  return t.composedPath()[0];
}
const lf = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function sf(t, r, n) {
  if (t === "mousemoveoutside") {
    const i = (o) => {
      r.contains(sn(o)) || n(o);
    };
    return {
      mousemove: i,
      touchstart: i
    };
  } else if (t === "clickoutside") {
    let i = !1;
    const o = (l) => {
      i = !r.contains(sn(l));
    }, a = (l) => {
      i && (r.contains(sn(l)) || n(l));
    };
    return {
      mousedown: o,
      mouseup: a,
      touchstart: o,
      touchend: a
    };
  }
  return console.error(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `[evtd/create-trap-handler]: name \`${t}\` is invalid. This could be a bug of evtd.`
  ), {};
}
function Ia(t, r, n) {
  const i = lf[t];
  let o = i.get(r);
  o === void 0 && i.set(r, o = /* @__PURE__ */ new WeakMap());
  let a = o.get(n);
  return a === void 0 && o.set(n, a = sf(t, r, n)), a;
}
function uf(t, r, n, i) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const o = Ia(t, r, n);
    return Object.keys(o).forEach((a) => {
      Ce(a, document, o[a], i);
    }), !0;
  }
  return !1;
}
function ff(t, r, n, i) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const o = Ia(t, r, n);
    return Object.keys(o).forEach((a) => {
      ge(a, document, o[a], i);
    }), !0;
  }
  return !1;
}
function df() {
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
  function o(m, A, T) {
    const z = m[A];
    return m[A] = function() {
      return T.apply(m, arguments), z.apply(m, arguments);
    }, m;
  }
  function a(m, A) {
    m[A] = Event.prototype[A];
  }
  const l = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function u() {
    var m;
    return (m = l.get(this)) !== null && m !== void 0 ? m : null;
  }
  function f(m, A) {
    s !== void 0 && Object.defineProperty(m, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: A ?? s.get
    });
  }
  const d = {
    bubble: {},
    capture: {}
  }, c = {};
  function v() {
    const m = function(A) {
      const { type: T, eventPhase: z, bubbles: j } = A, R = sn(A);
      if (z === 2)
        return;
      const e = z === 1 ? "capture" : "bubble";
      let $ = R;
      const B = [];
      for (; $ === null && ($ = window), B.push($), $ !== window; )
        $ = $.parentNode || null;
      const O = d.capture[T], S = d.bubble[T];
      if (o(A, "stopPropagation", n), o(A, "stopImmediatePropagation", i), f(A, u), e === "capture") {
        if (O === void 0)
          return;
        for (let W = B.length - 1; W >= 0 && !t.has(A); --W) {
          const Q = B[W], Y = O.get(Q);
          if (Y !== void 0) {
            l.set(A, Q);
            for (const ue of Y) {
              if (r.has(A))
                break;
              ue(A);
            }
          }
          if (W === 0 && !j && S !== void 0) {
            const ue = S.get(Q);
            if (ue !== void 0)
              for (const ne of ue) {
                if (r.has(A))
                  break;
                ne(A);
              }
          }
        }
      } else if (e === "bubble") {
        if (S === void 0)
          return;
        for (let W = 0; W < B.length && !t.has(A); ++W) {
          const Q = B[W], Y = S.get(Q);
          if (Y !== void 0) {
            l.set(A, Q);
            for (const ue of Y) {
              if (r.has(A))
                break;
              ue(A);
            }
          }
        }
      }
      a(A, "stopPropagation"), a(A, "stopImmediatePropagation"), f(A);
    };
    return m.displayName = "evtdUnifiedHandler", m;
  }
  function y() {
    const m = function(A) {
      const { type: T, eventPhase: z } = A;
      if (z !== 2)
        return;
      const j = c[T];
      j !== void 0 && j.forEach((R) => R(A));
    };
    return m.displayName = "evtdUnifiedWindowEventHandler", m;
  }
  const x = v(), p = y();
  function g(m, A) {
    const T = d[m];
    return T[A] === void 0 && (T[A] = /* @__PURE__ */ new Map(), window.addEventListener(A, x, m === "capture")), T[A];
  }
  function h(m) {
    return c[m] === void 0 && (c[m] = /* @__PURE__ */ new Set(), window.addEventListener(m, p)), c[m];
  }
  function D(m, A) {
    let T = m.get(A);
    return T === void 0 && m.set(A, T = /* @__PURE__ */ new Set()), T;
  }
  function E(m, A, T, z) {
    const j = d[A][T];
    if (j !== void 0) {
      const R = j.get(m);
      if (R !== void 0 && R.has(z))
        return !0;
    }
    return !1;
  }
  function C(m, A) {
    const T = c[m];
    return !!(T !== void 0 && T.has(A));
  }
  function F(m, A, T, z) {
    let j;
    if (typeof z == "object" && z.once === !0 ? j = (O) => {
      _(m, A, j, z), T(O);
    } : j = T, uf(m, A, j, z))
      return;
    const e = z === !0 || typeof z == "object" && z.capture === !0 ? "capture" : "bubble", $ = g(e, m), B = D($, A);
    if (B.has(j) || B.add(j), A === window) {
      const O = h(m);
      O.has(j) || O.add(j);
    }
  }
  function _(m, A, T, z) {
    if (ff(m, A, T, z))
      return;
    const R = z === !0 || typeof z == "object" && z.capture === !0, e = R ? "capture" : "bubble", $ = g(e, m), B = D($, A);
    if (A === window && !E(A, R ? "bubble" : "capture", m, T) && C(m, T)) {
      const S = c[m];
      S.delete(T), S.size === 0 && (window.removeEventListener(m, p), c[m] = void 0);
    }
    B.has(T) && B.delete(T), B.size === 0 && $.delete(A), $.size === 0 && (window.removeEventListener(m, x, e === "capture"), d[e][m] = void 0);
  }
  return {
    on: F,
    off: _
  };
}
const { on: Ce, off: ge } = df();
function Pn(t, r) {
  return Fe(t, (n) => {
    n !== void 0 && (r.value = n);
  }), k(() => t.value === void 0 ? r.value : t.value);
}
function zi() {
  const t = L(!1);
  return ht(() => {
    t.value = !0;
  }), cn(t);
}
function _a(t, r) {
  return k(() => {
    for (const n of r)
      if (t[n] !== void 0)
        return t[n];
    return t[r[r.length - 1]];
  });
}
const cf = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function hf() {
  return cf;
}
function xf(t = {}, r) {
  const n = Us({
    ctrl: !1,
    command: !1,
    win: !1,
    shift: !1,
    tab: !1
  }), { keydown: i, keyup: o } = t, a = (u) => {
    switch (u.key) {
      case "Control":
        n.ctrl = !0;
        break;
      case "Meta":
        n.command = !0, n.win = !0;
        break;
      case "Shift":
        n.shift = !0;
        break;
      case "Tab":
        n.tab = !0;
        break;
    }
    i !== void 0 && Object.keys(i).forEach((f) => {
      if (f !== u.key)
        return;
      const d = i[f];
      if (typeof d == "function")
        d(u);
      else {
        const { stop: c = !1, prevent: v = !1 } = d;
        c && u.stopPropagation(), v && u.preventDefault(), d.handler(u);
      }
    });
  }, l = (u) => {
    switch (u.key) {
      case "Control":
        n.ctrl = !1;
        break;
      case "Meta":
        n.command = !1, n.win = !1;
        break;
      case "Shift":
        n.shift = !1;
        break;
      case "Tab":
        n.tab = !1;
        break;
    }
    o !== void 0 && Object.keys(o).forEach((f) => {
      if (f !== u.key)
        return;
      const d = o[f];
      if (typeof d == "function")
        d(u);
      else {
        const { stop: c = !1, prevent: v = !1 } = d;
        c && u.stopPropagation(), v && u.preventDefault(), d.handler(u);
      }
    });
  }, s = () => {
    (r === void 0 || r.value) && (Ce("keydown", document, a), Ce("keyup", document, l)), r !== void 0 && Fe(r, (u) => {
      u ? (Ce("keydown", document, a), Ce("keyup", document, l)) : (ge("keydown", document, a), ge("keyup", document, l));
    });
  };
  return rf() ? (Fn(s), Ue(() => {
    (r === void 0 || r.value) && (ge("keydown", document, a), ge("keyup", document, l));
  })) : s(), cn(n);
}
const pf = "n-internal-select-menu-body", Ri = "n-modal-body", Oi = "n-drawer-body", Tn = "n-popover-body", Na = "__disabled__";
function nr(t) {
  const r = ie(Ri, null), n = ie(Oi, null), i = ie(Tn, null), o = ie(pf, null), a = L();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const l = () => {
      a.value = document.fullscreenElement;
    };
    ht(() => {
      Ce("fullscreenchange", document, l);
    }), Ue(() => {
      ge("fullscreenchange", document, l);
    });
  }
  return ke(() => {
    var l;
    const {
      to: s
    } = t;
    return s !== void 0 ? s === !1 ? Na : s === !0 ? a.value || "body" : s : r != null && r.value ? (l = r.value.$el) !== null && l !== void 0 ? l : r.value : n != null && n.value ? n.value : i != null && i.value ? i.value : o != null && o.value ? o.value : s ?? (a.value || "body");
  });
}
nr.tdkey = Na;
nr.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function li(t, r, n = "default") {
  const i = r[n];
  if (i === void 0)
    throw new Error(`[vueuc/${t}]: slot[${n}] is empty.`);
  return i();
}
function si(t, r = !0, n = []) {
  return t.forEach((i) => {
    if (i !== null) {
      if (typeof i != "object") {
        (typeof i == "string" || typeof i == "number") && n.push(dn(String(i)));
        return;
      }
      if (Array.isArray(i)) {
        si(i, r, n);
        return;
      }
      if (i.type === ct) {
        if (i.children === null)
          return;
        Array.isArray(i.children) && si(i.children, r, n);
      } else i.type !== Pi && n.push(i);
    }
  }), n;
}
function bo(t, r, n = "default") {
  const i = r[n];
  if (i === void 0)
    throw new Error(`[vueuc/${t}]: slot[${n}] is empty.`);
  const o = si(i());
  if (o.length === 1)
    return o[0];
  throw new Error(`[vueuc/${t}]: slot[${n}] should have exactly one child.`);
}
let gt = null;
function Ha() {
  if (gt === null && (gt = document.getElementById("v-binder-view-measurer"), gt === null)) {
    gt = document.createElement("div"), gt.id = "v-binder-view-measurer";
    const { style: t } = gt;
    t.position = "fixed", t.left = "0", t.right = "0", t.top = "0", t.bottom = "0", t.pointerEvents = "none", t.visibility = "hidden", document.body.appendChild(gt);
  }
  return gt.getBoundingClientRect();
}
function vf(t, r) {
  const n = Ha();
  return {
    top: r,
    left: t,
    height: 0,
    width: 0,
    right: n.width - t,
    bottom: n.height - r
  };
}
function Ln(t) {
  const r = t.getBoundingClientRect(), n = Ha();
  return {
    left: r.left - n.left,
    top: r.top - n.top,
    bottom: n.height + n.top - r.bottom,
    right: n.width + n.left - r.right,
    width: r.width,
    height: r.height
  };
}
function mf(t) {
  return t.nodeType === 9 ? null : t.parentNode;
}
function Wa(t) {
  if (t === null)
    return null;
  const r = mf(t);
  if (r === null)
    return null;
  if (r.nodeType === 9)
    return document;
  if (r.nodeType === 1) {
    const { overflow: n, overflowX: i, overflowY: o } = getComputedStyle(r);
    if (/(auto|scroll|overlay)/.test(n + o + i))
      return r;
  }
  return Wa(r);
}
const La = J({
  name: "Binder",
  props: {
    syncTargetWithParent: Boolean,
    syncTarget: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    var r;
    $e("VBinder", (r = _r()) === null || r === void 0 ? void 0 : r.proxy);
    const n = ie("VBinder", null), i = L(null), o = (h) => {
      i.value = h, n && t.syncTargetWithParent && n.setTargetRef(h);
    };
    let a = [];
    const l = () => {
      let h = i.value;
      for (; h = Wa(h), h !== null; )
        a.push(h);
      for (const D of a)
        Ce("scroll", D, c, !0);
    }, s = () => {
      for (const h of a)
        ge("scroll", h, c, !0);
      a = [];
    }, u = /* @__PURE__ */ new Set(), f = (h) => {
      u.size === 0 && l(), u.has(h) || u.add(h);
    }, d = (h) => {
      u.has(h) && u.delete(h), u.size === 0 && s();
    }, c = () => {
      vu(v);
    }, v = () => {
      u.forEach((h) => h());
    }, y = /* @__PURE__ */ new Set(), x = (h) => {
      y.size === 0 && Ce("resize", window, g), y.has(h) || y.add(h);
    }, p = (h) => {
      y.has(h) && y.delete(h), y.size === 0 && ge("resize", window, g);
    }, g = () => {
      y.forEach((h) => h());
    };
    return Ue(() => {
      ge("resize", window, g), s();
    }), {
      targetRef: i,
      setTargetRef: o,
      addScrollListener: f,
      removeScrollListener: d,
      addResizeListener: x,
      removeResizeListener: p
    };
  },
  render() {
    return li("binder", this.$slots);
  }
}), ja = J({
  name: "Target",
  setup() {
    const { setTargetRef: t, syncTarget: r } = ie("VBinder");
    return {
      syncTarget: r,
      setTargetDirective: {
        mounted: t,
        updated: t
      }
    };
  },
  render() {
    const { syncTarget: t, setTargetDirective: r } = this;
    return t ? Nr(bo("follower", this.$slots), [
      [r]
    ]) : bo("follower", this.$slots);
  }
}), Xt = "@@mmoContext", gf = {
  mounted(t, { value: r }) {
    t[Xt] = {
      handler: void 0
    }, typeof r == "function" && (t[Xt].handler = r, Ce("mousemoveoutside", t, r));
  },
  updated(t, { value: r }) {
    const n = t[Xt];
    typeof r == "function" ? n.handler ? n.handler !== r && (ge("mousemoveoutside", t, n.handler), n.handler = r, Ce("mousemoveoutside", t, r)) : (t[Xt].handler = r, Ce("mousemoveoutside", t, r)) : n.handler && (ge("mousemoveoutside", t, n.handler), n.handler = void 0);
  },
  unmounted(t) {
    const { handler: r } = t[Xt];
    r && ge("mousemoveoutside", t, r), t[Xt].handler = void 0;
  }
}, Yt = "@@coContext", yo = {
  mounted(t, { value: r, modifiers: n }) {
    t[Yt] = {
      handler: void 0
    }, typeof r == "function" && (t[Yt].handler = r, Ce("clickoutside", t, r, {
      capture: n.capture
    }));
  },
  updated(t, { value: r, modifiers: n }) {
    const i = t[Yt];
    typeof r == "function" ? i.handler ? i.handler !== r && (ge("clickoutside", t, i.handler, {
      capture: n.capture
    }), i.handler = r, Ce("clickoutside", t, r, {
      capture: n.capture
    })) : (t[Yt].handler = r, Ce("clickoutside", t, r, {
      capture: n.capture
    })) : i.handler && (ge("clickoutside", t, i.handler, {
      capture: n.capture
    }), i.handler = void 0);
  },
  unmounted(t, { modifiers: r }) {
    const { handler: n } = t[Yt];
    n && ge("clickoutside", t, n, {
      capture: r.capture
    }), t[Yt].handler = void 0;
  }
};
function bf(t, r) {
  console.error(`[vdirs/${t}]: ${r}`);
}
class yf {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(r, n) {
    const { elementZIndex: i } = this;
    if (n !== void 0) {
      r.style.zIndex = `${n}`, i.delete(r);
      return;
    }
    const { nextZIndex: o } = this;
    i.has(r) && i.get(r) + 1 === this.nextZIndex || (r.style.zIndex = `${o}`, i.set(r, o), this.nextZIndex = o + 1, this.squashState());
  }
  unregister(r, n) {
    const { elementZIndex: i } = this;
    i.has(r) ? i.delete(r) : n === void 0 && bf("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: r } = this;
    r || (this.nextZIndex = 2e3), this.nextZIndex - r > 2500 && this.rearrange();
  }
  rearrange() {
    const r = Array.from(this.elementZIndex.entries());
    r.sort((n, i) => n[1] - i[1]), this.nextZIndex = 2e3, r.forEach((n) => {
      const i = n[0], o = this.nextZIndex++;
      `${o}` !== i.style.zIndex && (i.style.zIndex = `${o}`);
    });
  }
}
const jn = new yf(), Zt = "@@ziContext", Va = {
  mounted(t, r) {
    const { value: n = {} } = r, { zIndex: i, enabled: o } = n;
    t[Zt] = {
      enabled: !!o,
      initialized: !1
    }, o && (jn.ensureZIndex(t, i), t[Zt].initialized = !0);
  },
  updated(t, r) {
    const { value: n = {} } = r, { zIndex: i, enabled: o } = n, a = t[Zt].enabled;
    o && !a && (jn.ensureZIndex(t, i), t[Zt].initialized = !0), t[Zt].enabled = !!o;
  },
  unmounted(t, r) {
    if (!t[Zt].initialized)
      return;
    const { value: n = {} } = r, { zIndex: i } = n;
    jn.unregister(t, i);
  }
}, Cf = "@css-render/vue3-ssr";
function wf(t, r) {
  return `<style cssr-id="${t}">
${r}
</style>`;
}
function Bf(t, r, n) {
  const { styles: i, ids: o } = n;
  o.has(t) || i !== null && (o.add(t), i.push(wf(t, r)));
}
const Af = typeof document < "u";
function Hr() {
  if (Af)
    return;
  const t = ie(Cf, null);
  if (t !== null)
    return {
      adapter: (r, n) => Bf(r, n, t),
      context: t
    };
}
function Co(t, r) {
  console.error(`[vueuc/${t}]: ${r}`);
}
const { c: Jr } = Ra(), Df = "vueuc-style";
function wo(t) {
  return typeof t == "string" ? document.querySelector(t) : t();
}
const Sf = J({
  name: "LazyTeleport",
  props: {
    to: {
      type: [String, Object],
      default: void 0
    },
    disabled: Boolean,
    show: {
      type: Boolean,
      required: !0
    }
  },
  setup(t) {
    return {
      showTeleport: Ma(se(t, "show")),
      mergedTo: k(() => {
        const { to: r } = t;
        return r ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? li("lazy-teleport", this.$slots) : b(Xs, {
      disabled: this.disabled,
      to: this.mergedTo
    }, li("lazy-teleport", this.$slots)) : null;
  }
}), Qr = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Bo = {
  start: "end",
  center: "center",
  end: "start"
}, Vn = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, Ff = {
  "bottom-start": "top left",
  bottom: "top center",
  "bottom-end": "top right",
  "top-start": "bottom left",
  top: "bottom center",
  "top-end": "bottom right",
  "right-start": "top left",
  right: "center left",
  "right-end": "bottom left",
  "left-start": "top right",
  left: "center right",
  "left-end": "bottom right"
}, $f = {
  "bottom-start": "bottom left",
  bottom: "bottom center",
  "bottom-end": "bottom right",
  "top-start": "top left",
  top: "top center",
  "top-end": "top right",
  "right-start": "top right",
  right: "center right",
  "right-end": "bottom right",
  "left-start": "top left",
  left: "center left",
  "left-end": "bottom left"
}, Ef = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, Ao = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, Do = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Pf(t, r, n, i, o, a) {
  if (!o || a)
    return { placement: t, top: 0, left: 0 };
  const [l, s] = t.split("-");
  let u = s ?? "center", f = {
    top: 0,
    left: 0
  };
  const d = (y, x, p) => {
    let g = 0, h = 0;
    const D = n[y] - r[x] - r[y];
    return D > 0 && i && (p ? h = Ao[x] ? D : -D : g = Ao[x] ? D : -D), {
      left: g,
      top: h
    };
  }, c = l === "left" || l === "right";
  if (u !== "center") {
    const y = Ef[t], x = Qr[y], p = Vn[y];
    if (n[p] > r[p]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        r[y] + r[p] < n[p]
      ) {
        const g = (n[p] - r[p]) / 2;
        r[y] < g || r[x] < g ? r[y] < r[x] ? (u = Bo[s], f = d(p, x, c)) : f = d(p, y, c) : u = "center";
      }
    } else n[p] < r[p] && r[x] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    r[y] > r[x] && (u = Bo[s]);
  } else {
    const y = l === "bottom" || l === "top" ? "left" : "top", x = Qr[y], p = Vn[y], g = (n[p] - r[p]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (r[y] < g || r[x] < g) && (r[y] > r[x] ? (u = Do[y], f = d(p, y, c)) : (u = Do[x], f = d(p, x, c)));
  }
  let v = l;
  return (
    // space is not enough
    r[l] < n[Vn[l]] && // opposite position's space is larger
    r[l] < r[Qr[l]] && (v = Qr[l]), {
      placement: u !== "center" ? `${v}-${u}` : v,
      left: f.left,
      top: f.top
    }
  );
}
function Tf(t, r) {
  return r ? $f[t] : Ff[t];
}
function zf(t, r, n, i, o, a) {
  if (a)
    switch (t) {
      case "bottom-start":
        return {
          top: `${Math.round(n.top - r.top + n.height)}px`,
          left: `${Math.round(n.left - r.left)}px`,
          transform: "translateY(-100%)"
        };
      case "bottom-end":
        return {
          top: `${Math.round(n.top - r.top + n.height)}px`,
          left: `${Math.round(n.left - r.left + n.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "top-start":
        return {
          top: `${Math.round(n.top - r.top)}px`,
          left: `${Math.round(n.left - r.left)}px`,
          transform: ""
        };
      case "top-end":
        return {
          top: `${Math.round(n.top - r.top)}px`,
          left: `${Math.round(n.left - r.left + n.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-start":
        return {
          top: `${Math.round(n.top - r.top)}px`,
          left: `${Math.round(n.left - r.left + n.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-end":
        return {
          top: `${Math.round(n.top - r.top + n.height)}px`,
          left: `${Math.round(n.left - r.left + n.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "left-start":
        return {
          top: `${Math.round(n.top - r.top)}px`,
          left: `${Math.round(n.left - r.left)}px`,
          transform: ""
        };
      case "left-end":
        return {
          top: `${Math.round(n.top - r.top + n.height)}px`,
          left: `${Math.round(n.left - r.left)}px`,
          transform: "translateY(-100%)"
        };
      case "top":
        return {
          top: `${Math.round(n.top - r.top)}px`,
          left: `${Math.round(n.left - r.left + n.width / 2)}px`,
          transform: "translateX(-50%)"
        };
      case "right":
        return {
          top: `${Math.round(n.top - r.top + n.height / 2)}px`,
          left: `${Math.round(n.left - r.left + n.width)}px`,
          transform: "translateX(-100%) translateY(-50%)"
        };
      case "left":
        return {
          top: `${Math.round(n.top - r.top + n.height / 2)}px`,
          left: `${Math.round(n.left - r.left)}px`,
          transform: "translateY(-50%)"
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(n.top - r.top + n.height)}px`,
          left: `${Math.round(n.left - r.left + n.width / 2)}px`,
          transform: "translateX(-50%) translateY(-100%)"
        };
    }
  switch (t) {
    case "bottom-start":
      return {
        top: `${Math.round(n.top - r.top + n.height + i)}px`,
        left: `${Math.round(n.left - r.left + o)}px`,
        transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(n.top - r.top + n.height + i)}px`,
        left: `${Math.round(n.left - r.left + n.width + o)}px`,
        transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(n.top - r.top + i)}px`,
        left: `${Math.round(n.left - r.left + o)}px`,
        transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(n.top - r.top + i)}px`,
        left: `${Math.round(n.left - r.left + n.width + o)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(n.top - r.top + i)}px`,
        left: `${Math.round(n.left - r.left + n.width + o)}px`,
        transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(n.top - r.top + n.height + i)}px`,
        left: `${Math.round(n.left - r.left + n.width + o)}px`,
        transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(n.top - r.top + i)}px`,
        left: `${Math.round(n.left - r.left + o)}px`,
        transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(n.top - r.top + n.height + i)}px`,
        left: `${Math.round(n.left - r.left + o)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(n.top - r.top + i)}px`,
        left: `${Math.round(n.left - r.left + n.width / 2 + o)}px`,
        transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(n.top - r.top + n.height / 2 + i)}px`,
        left: `${Math.round(n.left - r.left + n.width + o)}px`,
        transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(n.top - r.top + n.height / 2 + i)}px`,
        left: `${Math.round(n.left - r.left + o)}px`,
        transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(n.top - r.top + n.height + i)}px`,
        left: `${Math.round(n.left - r.left + n.width / 2 + o)}px`,
        transform: "translateX(-50%)"
      };
  }
}
const Rf = Jr([
  Jr(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  Jr(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    Jr("> *", {
      pointerEvents: "all"
    })
  ])
]), qa = J({
  name: "Follower",
  inheritAttrs: !1,
  props: {
    show: Boolean,
    enabled: {
      type: Boolean,
      default: void 0
    },
    placement: {
      type: String,
      default: "bottom"
    },
    syncTrigger: {
      type: Array,
      default: ["resize", "scroll"]
    },
    to: [String, Object],
    flip: {
      type: Boolean,
      default: !0
    },
    internalShift: Boolean,
    x: Number,
    y: Number,
    width: String,
    minWidth: String,
    containerClass: String,
    teleportDisabled: Boolean,
    zindexable: {
      type: Boolean,
      default: !0
    },
    zIndex: Number,
    overlap: Boolean
  },
  setup(t) {
    const r = ie("VBinder"), n = ke(() => t.enabled !== void 0 ? t.enabled : t.show), i = L(null), o = L(null), a = () => {
      const { syncTrigger: v } = t;
      v.includes("scroll") && r.addScrollListener(u), v.includes("resize") && r.addResizeListener(u);
    }, l = () => {
      r.removeScrollListener(u), r.removeResizeListener(u);
    };
    ht(() => {
      n.value && (u(), a());
    });
    const s = Hr();
    Rf.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: Df,
      ssr: s
    }), Ue(() => {
      l();
    }), af(() => {
      n.value && u();
    });
    const u = () => {
      if (!n.value)
        return;
      const v = i.value;
      if (v === null)
        return;
      const y = r.targetRef, { x, y: p, overlap: g } = t, h = x !== void 0 && p !== void 0 ? vf(x, p) : Ln(y);
      v.style.setProperty("--v-target-width", `${Math.round(h.width)}px`), v.style.setProperty("--v-target-height", `${Math.round(h.height)}px`);
      const { width: D, minWidth: E, placement: C, internalShift: F, flip: _ } = t;
      v.setAttribute("v-placement", C), g ? v.setAttribute("v-overlap", "") : v.removeAttribute("v-overlap");
      const { style: m } = v;
      D === "target" ? m.width = `${h.width}px` : D !== void 0 ? m.width = D : m.width = "", E === "target" ? m.minWidth = `${h.width}px` : E !== void 0 ? m.minWidth = E : m.minWidth = "";
      const A = Ln(v), T = Ln(o.value), { left: z, top: j, placement: R } = Pf(C, h, A, F, _, g), e = Tf(R, g), { left: $, top: B, transform: O } = zf(R, T, h, j, z, g);
      v.setAttribute("v-placement", R), v.style.setProperty("--v-offset-left", `${Math.round(z)}px`), v.style.setProperty("--v-offset-top", `${Math.round(j)}px`), v.style.transform = `translateX(${$}) translateY(${B}) ${O}`, v.style.setProperty("--v-transform-origin", e), v.style.transformOrigin = e;
    };
    Fe(n, (v) => {
      v ? (a(), f()) : l();
    });
    const f = () => {
      hn().then(u).catch((v) => console.error(v));
    };
    [
      "placement",
      "x",
      "y",
      "internalShift",
      "flip",
      "width",
      "overlap",
      "minWidth"
    ].forEach((v) => {
      Fe(se(t, v), u);
    }), ["teleportDisabled"].forEach((v) => {
      Fe(se(t, v), f);
    }), Fe(se(t, "syncTrigger"), (v) => {
      v.includes("resize") ? r.addResizeListener(u) : r.removeResizeListener(u), v.includes("scroll") ? r.addScrollListener(u) : r.removeScrollListener(u);
    });
    const d = zi(), c = ke(() => {
      const { to: v } = t;
      if (v !== void 0)
        return v;
      d.value;
    });
    return {
      VBinder: r,
      mergedEnabled: n,
      offsetContainerRef: o,
      followerRef: i,
      mergedTo: c,
      syncPosition: u
    };
  },
  render() {
    return b(Sf, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var t, r;
        const n = b("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          b("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t))
        ]);
        return this.zindexable ? Nr(n, [
          [
            Va,
            {
              enabled: this.mergedEnabled,
              zIndex: this.zIndex
            }
          ]
        ]) : n;
      }
    });
  }
});
var Ht = [], Of = function() {
  return Ht.some(function(t) {
    return t.activeTargets.length > 0;
  });
}, kf = function() {
  return Ht.some(function(t) {
    return t.skippedTargets.length > 0;
  });
}, So = "ResizeObserver loop completed with undelivered notifications.", Mf = function() {
  var t;
  typeof ErrorEvent == "function" ? t = new ErrorEvent("error", {
    message: So
  }) : (t = document.createEvent("Event"), t.initEvent("error", !1, !1), t.message = So), window.dispatchEvent(t);
}, zr;
(function(t) {
  t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(zr || (zr = {}));
var Wt = function(t) {
  return Object.freeze(t);
}, If = /* @__PURE__ */ function() {
  function t(r, n) {
    this.inlineSize = r, this.blockSize = n, Wt(this);
  }
  return t;
}(), Ka = function() {
  function t(r, n, i, o) {
    return this.x = r, this.y = n, this.width = i, this.height = o, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Wt(this);
  }
  return t.prototype.toJSON = function() {
    var r = this, n = r.x, i = r.y, o = r.top, a = r.right, l = r.bottom, s = r.left, u = r.width, f = r.height;
    return { x: n, y: i, top: o, right: a, bottom: l, left: s, width: u, height: f };
  }, t.fromRect = function(r) {
    return new t(r.x, r.y, r.width, r.height);
  }, t;
}(), ki = function(t) {
  return t instanceof SVGElement && "getBBox" in t;
}, Ga = function(t) {
  if (ki(t)) {
    var r = t.getBBox(), n = r.width, i = r.height;
    return !n && !i;
  }
  var o = t, a = o.offsetWidth, l = o.offsetHeight;
  return !(a || l || t.getClientRects().length);
}, Fo = function(t) {
  var r;
  if (t instanceof Element)
    return !0;
  var n = (r = t == null ? void 0 : t.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView;
  return !!(n && t instanceof n.Element);
}, _f = function(t) {
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
}, Fr = typeof window < "u" ? window : {}, en = /* @__PURE__ */ new WeakMap(), $o = /auto|scroll/, Nf = /^tb|vertical/, Hf = /msie|trident/i.test(Fr.navigator && Fr.navigator.userAgent), Qe = function(t) {
  return parseFloat(t || "0");
}, er = function(t, r, n) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0), n === void 0 && (n = !1), new If((n ? r : t) || 0, (n ? t : r) || 0);
}, Eo = Wt({
  devicePixelContentBoxSize: er(),
  borderBoxSize: er(),
  contentBoxSize: er(),
  contentRect: new Ka(0, 0, 0, 0)
}), Ua = function(t, r) {
  if (r === void 0 && (r = !1), en.has(t) && !r)
    return en.get(t);
  if (Ga(t))
    return en.set(t, Eo), Eo;
  var n = getComputedStyle(t), i = ki(t) && t.ownerSVGElement && t.getBBox(), o = !Hf && n.boxSizing === "border-box", a = Nf.test(n.writingMode || ""), l = !i && $o.test(n.overflowY || ""), s = !i && $o.test(n.overflowX || ""), u = i ? 0 : Qe(n.paddingTop), f = i ? 0 : Qe(n.paddingRight), d = i ? 0 : Qe(n.paddingBottom), c = i ? 0 : Qe(n.paddingLeft), v = i ? 0 : Qe(n.borderTopWidth), y = i ? 0 : Qe(n.borderRightWidth), x = i ? 0 : Qe(n.borderBottomWidth), p = i ? 0 : Qe(n.borderLeftWidth), g = c + f, h = u + d, D = p + y, E = v + x, C = s ? t.offsetHeight - E - t.clientHeight : 0, F = l ? t.offsetWidth - D - t.clientWidth : 0, _ = o ? g + D : 0, m = o ? h + E : 0, A = i ? i.width : Qe(n.width) - _ - F, T = i ? i.height : Qe(n.height) - m - C, z = A + g + F + D, j = T + h + C + E, R = Wt({
    devicePixelContentBoxSize: er(Math.round(A * devicePixelRatio), Math.round(T * devicePixelRatio), a),
    borderBoxSize: er(z, j, a),
    contentBoxSize: er(A, T, a),
    contentRect: new Ka(c, u, A, T)
  });
  return en.set(t, R), R;
}, Xa = function(t, r, n) {
  var i = Ua(t, n), o = i.borderBoxSize, a = i.contentBoxSize, l = i.devicePixelContentBoxSize;
  switch (r) {
    case zr.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case zr.BORDER_BOX:
      return o;
    default:
      return a;
  }
}, Wf = /* @__PURE__ */ function() {
  function t(r) {
    var n = Ua(r);
    this.target = r, this.contentRect = n.contentRect, this.borderBoxSize = Wt([n.borderBoxSize]), this.contentBoxSize = Wt([n.contentBoxSize]), this.devicePixelContentBoxSize = Wt([n.devicePixelContentBoxSize]);
  }
  return t;
}(), Ya = function(t) {
  if (Ga(t))
    return 1 / 0;
  for (var r = 0, n = t.parentNode; n; )
    r += 1, n = n.parentNode;
  return r;
}, Lf = function() {
  var t = 1 / 0, r = [];
  Ht.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(f) {
        var d = new Wf(f.target), c = Ya(f.target);
        s.push(d), f.lastReportedSize = Xa(f.target, f.observedBox), c < t && (t = c);
      }), r.push(function() {
        l.callback.call(l.observer, s, l.observer);
      }), l.activeTargets.splice(0, l.activeTargets.length);
    }
  });
  for (var n = 0, i = r; n < i.length; n++) {
    var o = i[n];
    o();
  }
  return t;
}, Po = function(t) {
  Ht.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(o) {
      o.isActive() && (Ya(o.target) > t ? n.activeTargets.push(o) : n.skippedTargets.push(o));
    });
  });
}, jf = function() {
  var t = 0;
  for (Po(t); Of(); )
    t = Lf(), Po(t);
  return kf() && Mf(), t > 0;
}, qn, Za = [], Vf = function() {
  return Za.splice(0).forEach(function(t) {
    return t();
  });
}, qf = function(t) {
  if (!qn) {
    var r = 0, n = document.createTextNode(""), i = { characterData: !0 };
    new MutationObserver(function() {
      return Vf();
    }).observe(n, i), qn = function() {
      n.textContent = "".concat(r ? r-- : r++);
    };
  }
  Za.push(t), qn();
}, Kf = function(t) {
  qf(function() {
    requestAnimationFrame(t);
  });
}, un = 0, Gf = function() {
  return !!un;
}, Uf = 250, Xf = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, To = [
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
], zo = function(t) {
  return t === void 0 && (t = 0), Date.now() + t;
}, Kn = !1, Yf = function() {
  function t() {
    var r = this;
    this.stopped = !0, this.listener = function() {
      return r.schedule();
    };
  }
  return t.prototype.run = function(r) {
    var n = this;
    if (r === void 0 && (r = Uf), !Kn) {
      Kn = !0;
      var i = zo(r);
      Kf(function() {
        var o = !1;
        try {
          o = jf();
        } finally {
          if (Kn = !1, r = i - zo(), !Gf())
            return;
          o ? n.run(1e3) : r > 0 ? n.run(r) : n.start();
        }
      });
    }
  }, t.prototype.schedule = function() {
    this.stop(), this.run();
  }, t.prototype.observe = function() {
    var r = this, n = function() {
      return r.observer && r.observer.observe(document.body, Xf);
    };
    document.body ? n() : Fr.addEventListener("DOMContentLoaded", n);
  }, t.prototype.start = function() {
    var r = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), To.forEach(function(n) {
      return Fr.addEventListener(n, r.listener, !0);
    }));
  }, t.prototype.stop = function() {
    var r = this;
    this.stopped || (this.observer && this.observer.disconnect(), To.forEach(function(n) {
      return Fr.removeEventListener(n, r.listener, !0);
    }), this.stopped = !0);
  }, t;
}(), ui = new Yf(), Ro = function(t) {
  !un && t > 0 && ui.start(), un += t, !un && ui.stop();
}, Zf = function(t) {
  return !ki(t) && !_f(t) && getComputedStyle(t).display === "inline";
}, Jf = function() {
  function t(r, n) {
    this.target = r, this.observedBox = n || zr.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return t.prototype.isActive = function() {
    var r = Xa(this.target, this.observedBox, !0);
    return Zf(this.target) && (this.lastReportedSize = r), this.lastReportedSize.inlineSize !== r.inlineSize || this.lastReportedSize.blockSize !== r.blockSize;
  }, t;
}(), Qf = /* @__PURE__ */ function() {
  function t(r, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = r, this.callback = n;
  }
  return t;
}(), tn = /* @__PURE__ */ new WeakMap(), Oo = function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n].target === r)
      return n;
  return -1;
}, rn = function() {
  function t() {
  }
  return t.connect = function(r, n) {
    var i = new Qf(r, n);
    tn.set(r, i);
  }, t.observe = function(r, n, i) {
    var o = tn.get(r), a = o.observationTargets.length === 0;
    Oo(o.observationTargets, n) < 0 && (a && Ht.push(o), o.observationTargets.push(new Jf(n, i && i.box)), Ro(1), ui.schedule());
  }, t.unobserve = function(r, n) {
    var i = tn.get(r), o = Oo(i.observationTargets, n), a = i.observationTargets.length === 1;
    o >= 0 && (a && Ht.splice(Ht.indexOf(i), 1), i.observationTargets.splice(o, 1), Ro(-1));
  }, t.disconnect = function(r) {
    var n = this, i = tn.get(r);
    i.observationTargets.slice().forEach(function(o) {
      return n.unobserve(r, o.target);
    }), i.activeTargets.splice(0, i.activeTargets.length);
  }, t;
}(), ed = function() {
  function t(r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof r != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    rn.connect(this, r);
  }
  return t.prototype.observe = function(r, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Fo(r))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    rn.observe(this, r, n);
  }, t.prototype.unobserve = function(r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Fo(r))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    rn.unobserve(this, r);
  }, t.prototype.disconnect = function() {
    rn.disconnect(this);
  }, t.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, t;
}();
class td {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || ed)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const ko = new td(), fi = J({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(t) {
    let r = !1;
    const n = _r().proxy;
    function i(o) {
      const { onResize: a } = t;
      a !== void 0 && a(o);
    }
    ht(() => {
      const o = n.$el;
      if (o === void 0) {
        Co("resize-observer", "$el does not exist.");
        return;
      }
      if (o.nextElementSibling !== o.nextSibling && o.nodeType === 3 && o.nodeValue !== "") {
        Co("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      o.nextElementSibling !== null && (ko.registerHandler(o.nextElementSibling, i), r = !0);
    }), Ue(() => {
      r && ko.unregisterHandler(n.$el.nextElementSibling);
    });
  },
  render() {
    return Pr(this.$slots, "default");
  }
});
function Ja(t) {
  return t instanceof HTMLElement;
}
function Qa(t) {
  for (let r = 0; r < t.childNodes.length; r++) {
    const n = t.childNodes[r];
    if (Ja(n) && (tl(n) || Qa(n)))
      return !0;
  }
  return !1;
}
function el(t) {
  for (let r = t.childNodes.length - 1; r >= 0; r--) {
    const n = t.childNodes[r];
    if (Ja(n) && (tl(n) || el(n)))
      return !0;
  }
  return !1;
}
function tl(t) {
  if (!rd(t))
    return !1;
  try {
    t.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === t;
}
function rd(t) {
  if (t.tabIndex > 0 || t.tabIndex === 0 && t.getAttribute("tabIndex") !== null)
    return !0;
  if (t.getAttribute("disabled"))
    return !1;
  switch (t.nodeName) {
    case "A":
      return !!t.href && t.rel !== "ignore";
    case "INPUT":
      return t.type !== "hidden" && t.type !== "file";
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}
let br = [];
const nd = J({
  name: "FocusTrap",
  props: {
    disabled: Boolean,
    active: Boolean,
    autoFocus: {
      type: Boolean,
      default: !0
    },
    onEsc: Function,
    initialFocusTo: String,
    finalFocusTo: String,
    returnFocusOnDeactivated: {
      type: Boolean,
      default: !0
    }
  },
  setup(t) {
    const r = mn(), n = L(null), i = L(null);
    let o = !1, a = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function s() {
      return br[br.length - 1] === r;
    }
    function u(g) {
      var h;
      g.code === "Escape" && s() && ((h = t.onEsc) === null || h === void 0 || h.call(t, g));
    }
    ht(() => {
      Fe(() => t.active, (g) => {
        g ? (c(), Ce("keydown", document, u)) : (ge("keydown", document, u), o && v());
      }, {
        immediate: !0
      });
    }), Ue(() => {
      ge("keydown", document, u), o && v();
    });
    function f(g) {
      if (!a && s()) {
        const h = d();
        if (h === null || h.contains(vn(g)))
          return;
        y("first");
      }
    }
    function d() {
      const g = n.value;
      if (g === null)
        return null;
      let h = g;
      for (; h = h.nextSibling, !(h === null || h instanceof Element && h.tagName === "DIV"); )
        ;
      return h;
    }
    function c() {
      var g;
      if (!t.disabled) {
        if (br.push(r), t.autoFocus) {
          const { initialFocusTo: h } = t;
          h === void 0 ? y("first") : (g = wo(h)) === null || g === void 0 || g.focus({ preventScroll: !0 });
        }
        o = !0, document.addEventListener("focus", f, !0);
      }
    }
    function v() {
      var g;
      if (t.disabled || (document.removeEventListener("focus", f, !0), br = br.filter((D) => D !== r), s()))
        return;
      const { finalFocusTo: h } = t;
      h !== void 0 ? (g = wo(h)) === null || g === void 0 || g.focus({ preventScroll: !0 }) : t.returnFocusOnDeactivated && l instanceof HTMLElement && (a = !0, l.focus({ preventScroll: !0 }), a = !1);
    }
    function y(g) {
      if (s() && t.active) {
        const h = n.value, D = i.value;
        if (h !== null && D !== null) {
          const E = d();
          if (E == null || E === D) {
            a = !0, h.focus({ preventScroll: !0 }), a = !1;
            return;
          }
          a = !0;
          const C = g === "first" ? Qa(E) : el(E);
          a = !1, C || (a = !0, h.focus({ preventScroll: !0 }), a = !1);
        }
      }
    }
    function x(g) {
      if (a)
        return;
      const h = d();
      h !== null && (g.relatedTarget !== null && h.contains(g.relatedTarget) ? y("last") : y("first"));
    }
    function p(g) {
      a || (g.relatedTarget !== null && g.relatedTarget === n.value ? y("last") : y("first"));
    }
    return {
      focusableStartRef: n,
      focusableEndRef: i,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: x,
      handleEndFocus: p
    };
  },
  render() {
    const { default: t } = this.$slots;
    if (t === void 0)
      return null;
    if (this.disabled)
      return t();
    const { active: r, focusableStyle: n } = this;
    return b(ct, null, [
      b("div", {
        "aria-hidden": "true",
        tabindex: r ? "0" : "-1",
        ref: "focusableStartRef",
        style: n,
        onFocus: this.handleStartFocus
      }),
      t(),
      b("div", {
        "aria-hidden": "true",
        style: n,
        ref: "focusableEndRef",
        tabindex: r ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
});
function id(t) {
  const r = {
    isDeactivated: !1
  };
  let n = !1;
  return Ys(() => {
    if (r.isDeactivated = !1, !n) {
      n = !0;
      return;
    }
    t();
  }), Zs(() => {
    r.isDeactivated = !0, n || (n = !0);
  }), r;
}
const di = "n-form-item";
function rl(t, {
  defaultSize: r = "medium",
  mergedSize: n,
  mergedDisabled: i
} = {}) {
  const o = ie(di, null);
  $e(di, null);
  const a = k(n ? () => n(o) : () => {
    const {
      size: u
    } = t;
    if (u) return u;
    if (o) {
      const {
        mergedSize: f
      } = o;
      if (f.value !== void 0)
        return f.value;
    }
    return r;
  }), l = k(i ? () => i(o) : () => {
    const {
      disabled: u
    } = t;
    return u !== void 0 ? u : o ? o.disabled.value : !1;
  }), s = k(() => {
    const {
      status: u
    } = t;
    return u || (o == null ? void 0 : o.mergedValidationStatus.value);
  });
  return Ue(() => {
    o && o.restoreValidation();
  }), {
    mergedSizeRef: a,
    mergedDisabledRef: l,
    mergedStatusRef: s,
    nTriggerFormBlur() {
      o && o.handleContentBlur();
    },
    nTriggerFormChange() {
      o && o.handleContentChange();
    },
    nTriggerFormFocus() {
      o && o.handleContentFocus();
    },
    nTriggerFormInput() {
      o && o.handleContentInput();
    }
  };
}
var nl = typeof global == "object" && global && global.Object === Object && global, od = typeof self == "object" && self && self.Object === Object && self, ot = nl || od || Function("return this")(), St = ot.Symbol, il = Object.prototype, ad = il.hasOwnProperty, ld = il.toString, yr = St ? St.toStringTag : void 0;
function sd(t) {
  var r = ad.call(t, yr), n = t[yr];
  try {
    t[yr] = void 0;
    var i = !0;
  } catch {
  }
  var o = ld.call(t);
  return i && (r ? t[yr] = n : delete t[yr]), o;
}
var ud = Object.prototype, fd = ud.toString;
function dd(t) {
  return fd.call(t);
}
var cd = "[object Null]", hd = "[object Undefined]", Mo = St ? St.toStringTag : void 0;
function qt(t) {
  return t == null ? t === void 0 ? hd : cd : Mo && Mo in Object(t) ? sd(t) : dd(t);
}
function Ft(t) {
  return t != null && typeof t == "object";
}
var xd = "[object Symbol]";
function Mi(t) {
  return typeof t == "symbol" || Ft(t) && qt(t) == xd;
}
function ol(t, r) {
  for (var n = -1, i = t == null ? 0 : t.length, o = Array(i); ++n < i; )
    o[n] = r(t[n], n, t);
  return o;
}
var Ge = Array.isArray, pd = 1 / 0, Io = St ? St.prototype : void 0, _o = Io ? Io.toString : void 0;
function al(t) {
  if (typeof t == "string")
    return t;
  if (Ge(t))
    return ol(t, al) + "";
  if (Mi(t))
    return _o ? _o.call(t) : "";
  var r = t + "";
  return r == "0" && 1 / t == -pd ? "-0" : r;
}
function $t(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
function Ii(t) {
  return t;
}
var vd = "[object AsyncFunction]", md = "[object Function]", gd = "[object GeneratorFunction]", bd = "[object Proxy]";
function _i(t) {
  if (!$t(t))
    return !1;
  var r = qt(t);
  return r == md || r == gd || r == vd || r == bd;
}
var Gn = ot["__core-js_shared__"], No = function() {
  var t = /[^.]+$/.exec(Gn && Gn.keys && Gn.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function yd(t) {
  return !!No && No in t;
}
var Cd = Function.prototype, wd = Cd.toString;
function Kt(t) {
  if (t != null) {
    try {
      return wd.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Bd = /[\\^$.*+?()[\]{}|]/g, Ad = /^\[object .+?Constructor\]$/, Dd = Function.prototype, Sd = Object.prototype, Fd = Dd.toString, $d = Sd.hasOwnProperty, Ed = RegExp(
  "^" + Fd.call($d).replace(Bd, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Pd(t) {
  if (!$t(t) || yd(t))
    return !1;
  var r = _i(t) ? Ed : Ad;
  return r.test(Kt(t));
}
function Td(t, r) {
  return t == null ? void 0 : t[r];
}
function Gt(t, r) {
  var n = Td(t, r);
  return Pd(n) ? n : void 0;
}
var ci = Gt(ot, "WeakMap"), Ho = Object.create, zd = /* @__PURE__ */ function() {
  function t() {
  }
  return function(r) {
    if (!$t(r))
      return {};
    if (Ho)
      return Ho(r);
    t.prototype = r;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
function Rd(t, r, n) {
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
function Od(t, r) {
  var n = -1, i = t.length;
  for (r || (r = Array(i)); ++n < i; )
    r[n] = t[n];
  return r;
}
var kd = 800, Md = 16, Id = Date.now;
function _d(t) {
  var r = 0, n = 0;
  return function() {
    var i = Id(), o = Md - (i - n);
    if (n = i, o > 0) {
      if (++r >= kd)
        return arguments[0];
    } else
      r = 0;
    return t.apply(void 0, arguments);
  };
}
function Nd(t) {
  return function() {
    return t;
  };
}
var yn = function() {
  try {
    var t = Gt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Hd = yn ? function(t, r) {
  return yn(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Nd(r),
    writable: !0
  });
} : Ii, Wd = _d(Hd), Ld = 9007199254740991, jd = /^(?:0|[1-9]\d*)$/;
function Ni(t, r) {
  var n = typeof t;
  return r = r ?? Ld, !!r && (n == "number" || n != "symbol" && jd.test(t)) && t > -1 && t % 1 == 0 && t < r;
}
function Hi(t, r, n) {
  r == "__proto__" && yn ? yn(t, r, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[r] = n;
}
function Wr(t, r) {
  return t === r || t !== t && r !== r;
}
var Vd = Object.prototype, qd = Vd.hasOwnProperty;
function Kd(t, r, n) {
  var i = t[r];
  (!(qd.call(t, r) && Wr(i, n)) || n === void 0 && !(r in t)) && Hi(t, r, n);
}
function Gd(t, r, n, i) {
  var o = !n;
  n || (n = {});
  for (var a = -1, l = r.length; ++a < l; ) {
    var s = r[a], u = void 0;
    u === void 0 && (u = t[s]), o ? Hi(n, s, u) : Kd(n, s, u);
  }
  return n;
}
var Wo = Math.max;
function Ud(t, r, n) {
  return r = Wo(r === void 0 ? t.length - 1 : r, 0), function() {
    for (var i = arguments, o = -1, a = Wo(i.length - r, 0), l = Array(a); ++o < a; )
      l[o] = i[r + o];
    o = -1;
    for (var s = Array(r + 1); ++o < r; )
      s[o] = i[o];
    return s[r] = n(l), Rd(t, this, s);
  };
}
function Xd(t, r) {
  return Wd(Ud(t, r, Ii), t + "");
}
var Yd = 9007199254740991;
function Wi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= Yd;
}
function ur(t) {
  return t != null && Wi(t.length) && !_i(t);
}
function Zd(t, r, n) {
  if (!$t(n))
    return !1;
  var i = typeof r;
  return (i == "number" ? ur(n) && Ni(r, n.length) : i == "string" && r in n) ? Wr(n[r], t) : !1;
}
function Jd(t) {
  return Xd(function(r, n) {
    var i = -1, o = n.length, a = o > 1 ? n[o - 1] : void 0, l = o > 2 ? n[2] : void 0;
    for (a = t.length > 3 && typeof a == "function" ? (o--, a) : void 0, l && Zd(n[0], n[1], l) && (a = o < 3 ? void 0 : a, o = 1), r = Object(r); ++i < o; ) {
      var s = n[i];
      s && t(r, s, i, a);
    }
    return r;
  });
}
var Qd = Object.prototype;
function Li(t) {
  var r = t && t.constructor, n = typeof r == "function" && r.prototype || Qd;
  return t === n;
}
function e0(t, r) {
  for (var n = -1, i = Array(t); ++n < t; )
    i[n] = r(n);
  return i;
}
var t0 = "[object Arguments]";
function Lo(t) {
  return Ft(t) && qt(t) == t0;
}
var ll = Object.prototype, r0 = ll.hasOwnProperty, n0 = ll.propertyIsEnumerable, Cn = Lo(/* @__PURE__ */ function() {
  return arguments;
}()) ? Lo : function(t) {
  return Ft(t) && r0.call(t, "callee") && !n0.call(t, "callee");
};
function i0() {
  return !1;
}
var sl = typeof exports == "object" && exports && !exports.nodeType && exports, jo = sl && typeof module == "object" && module && !module.nodeType && module, o0 = jo && jo.exports === sl, Vo = o0 ? ot.Buffer : void 0, a0 = Vo ? Vo.isBuffer : void 0, wn = a0 || i0, l0 = "[object Arguments]", s0 = "[object Array]", u0 = "[object Boolean]", f0 = "[object Date]", d0 = "[object Error]", c0 = "[object Function]", h0 = "[object Map]", x0 = "[object Number]", p0 = "[object Object]", v0 = "[object RegExp]", m0 = "[object Set]", g0 = "[object String]", b0 = "[object WeakMap]", y0 = "[object ArrayBuffer]", C0 = "[object DataView]", w0 = "[object Float32Array]", B0 = "[object Float64Array]", A0 = "[object Int8Array]", D0 = "[object Int16Array]", S0 = "[object Int32Array]", F0 = "[object Uint8Array]", $0 = "[object Uint8ClampedArray]", E0 = "[object Uint16Array]", P0 = "[object Uint32Array]", me = {};
me[w0] = me[B0] = me[A0] = me[D0] = me[S0] = me[F0] = me[$0] = me[E0] = me[P0] = !0;
me[l0] = me[s0] = me[y0] = me[u0] = me[C0] = me[f0] = me[d0] = me[c0] = me[h0] = me[x0] = me[p0] = me[v0] = me[m0] = me[g0] = me[b0] = !1;
function T0(t) {
  return Ft(t) && Wi(t.length) && !!me[qt(t)];
}
function z0(t) {
  return function(r) {
    return t(r);
  };
}
var ul = typeof exports == "object" && exports && !exports.nodeType && exports, $r = ul && typeof module == "object" && module && !module.nodeType && module, R0 = $r && $r.exports === ul, Un = R0 && nl.process, qo = function() {
  try {
    var t = $r && $r.require && $r.require("util").types;
    return t || Un && Un.binding && Un.binding("util");
  } catch {
  }
}(), Ko = qo && qo.isTypedArray, ji = Ko ? z0(Ko) : T0, O0 = Object.prototype, k0 = O0.hasOwnProperty;
function fl(t, r) {
  var n = Ge(t), i = !n && Cn(t), o = !n && !i && wn(t), a = !n && !i && !o && ji(t), l = n || i || o || a, s = l ? e0(t.length, String) : [], u = s.length;
  for (var f in t)
    (r || k0.call(t, f)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    o && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Ni(f, u))) && s.push(f);
  return s;
}
function dl(t, r) {
  return function(n) {
    return t(r(n));
  };
}
var M0 = dl(Object.keys, Object), I0 = Object.prototype, _0 = I0.hasOwnProperty;
function N0(t) {
  if (!Li(t))
    return M0(t);
  var r = [];
  for (var n in Object(t))
    _0.call(t, n) && n != "constructor" && r.push(n);
  return r;
}
function Vi(t) {
  return ur(t) ? fl(t) : N0(t);
}
function H0(t) {
  var r = [];
  if (t != null)
    for (var n in Object(t))
      r.push(n);
  return r;
}
var W0 = Object.prototype, L0 = W0.hasOwnProperty;
function j0(t) {
  if (!$t(t))
    return H0(t);
  var r = Li(t), n = [];
  for (var i in t)
    i == "constructor" && (r || !L0.call(t, i)) || n.push(i);
  return n;
}
function cl(t) {
  return ur(t) ? fl(t, !0) : j0(t);
}
var V0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, q0 = /^\w*$/;
function qi(t, r) {
  if (Ge(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || Mi(t) ? !0 : q0.test(t) || !V0.test(t) || r != null && t in Object(r);
}
var Rr = Gt(Object, "create");
function K0() {
  this.__data__ = Rr ? Rr(null) : {}, this.size = 0;
}
function G0(t) {
  var r = this.has(t) && delete this.__data__[t];
  return this.size -= r ? 1 : 0, r;
}
var U0 = "__lodash_hash_undefined__", X0 = Object.prototype, Y0 = X0.hasOwnProperty;
function Z0(t) {
  var r = this.__data__;
  if (Rr) {
    var n = r[t];
    return n === U0 ? void 0 : n;
  }
  return Y0.call(r, t) ? r[t] : void 0;
}
var J0 = Object.prototype, Q0 = J0.hasOwnProperty;
function ec(t) {
  var r = this.__data__;
  return Rr ? r[t] !== void 0 : Q0.call(r, t);
}
var tc = "__lodash_hash_undefined__";
function rc(t, r) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Rr && r === void 0 ? tc : r, this;
}
function Vt(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
Vt.prototype.clear = K0;
Vt.prototype.delete = G0;
Vt.prototype.get = Z0;
Vt.prototype.has = ec;
Vt.prototype.set = rc;
function nc() {
  this.__data__ = [], this.size = 0;
}
function zn(t, r) {
  for (var n = t.length; n--; )
    if (Wr(t[n][0], r))
      return n;
  return -1;
}
var ic = Array.prototype, oc = ic.splice;
function ac(t) {
  var r = this.__data__, n = zn(r, t);
  if (n < 0)
    return !1;
  var i = r.length - 1;
  return n == i ? r.pop() : oc.call(r, n, 1), --this.size, !0;
}
function lc(t) {
  var r = this.__data__, n = zn(r, t);
  return n < 0 ? void 0 : r[n][1];
}
function sc(t) {
  return zn(this.__data__, t) > -1;
}
function uc(t, r) {
  var n = this.__data__, i = zn(n, t);
  return i < 0 ? (++this.size, n.push([t, r])) : n[i][1] = r, this;
}
function xt(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
xt.prototype.clear = nc;
xt.prototype.delete = ac;
xt.prototype.get = lc;
xt.prototype.has = sc;
xt.prototype.set = uc;
var Or = Gt(ot, "Map");
function fc() {
  this.size = 0, this.__data__ = {
    hash: new Vt(),
    map: new (Or || xt)(),
    string: new Vt()
  };
}
function dc(t) {
  var r = typeof t;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
}
function Rn(t, r) {
  var n = t.__data__;
  return dc(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
}
function cc(t) {
  var r = Rn(this, t).delete(t);
  return this.size -= r ? 1 : 0, r;
}
function hc(t) {
  return Rn(this, t).get(t);
}
function xc(t) {
  return Rn(this, t).has(t);
}
function pc(t, r) {
  var n = Rn(this, t), i = n.size;
  return n.set(t, r), this.size += n.size == i ? 0 : 1, this;
}
function pt(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
pt.prototype.clear = fc;
pt.prototype.delete = cc;
pt.prototype.get = hc;
pt.prototype.has = xc;
pt.prototype.set = pc;
var vc = "Expected a function";
function Ki(t, r) {
  if (typeof t != "function" || r != null && typeof r != "function")
    throw new TypeError(vc);
  var n = function() {
    var i = arguments, o = r ? r.apply(this, i) : i[0], a = n.cache;
    if (a.has(o))
      return a.get(o);
    var l = t.apply(this, i);
    return n.cache = a.set(o, l) || a, l;
  };
  return n.cache = new (Ki.Cache || pt)(), n;
}
Ki.Cache = pt;
var mc = 500;
function gc(t) {
  var r = Ki(t, function(i) {
    return n.size === mc && n.clear(), i;
  }), n = r.cache;
  return r;
}
var bc = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, yc = /\\(\\)?/g, Cc = gc(function(t) {
  var r = [];
  return t.charCodeAt(0) === 46 && r.push(""), t.replace(bc, function(n, i, o, a) {
    r.push(o ? a.replace(yc, "$1") : i || n);
  }), r;
});
function hl(t) {
  return t == null ? "" : al(t);
}
function xl(t, r) {
  return Ge(t) ? t : qi(t, r) ? [t] : Cc(hl(t));
}
var wc = 1 / 0;
function On(t) {
  if (typeof t == "string" || Mi(t))
    return t;
  var r = t + "";
  return r == "0" && 1 / t == -wc ? "-0" : r;
}
function pl(t, r) {
  r = xl(r, t);
  for (var n = 0, i = r.length; t != null && n < i; )
    t = t[On(r[n++])];
  return n && n == i ? t : void 0;
}
function Gi(t, r, n) {
  var i = t == null ? void 0 : pl(t, r);
  return i === void 0 ? n : i;
}
function Bc(t, r) {
  for (var n = -1, i = r.length, o = t.length; ++n < i; )
    t[o + n] = r[n];
  return t;
}
var vl = dl(Object.getPrototypeOf, Object), Ac = "[object Object]", Dc = Function.prototype, Sc = Object.prototype, ml = Dc.toString, Fc = Sc.hasOwnProperty, $c = ml.call(Object);
function Ec(t) {
  if (!Ft(t) || qt(t) != Ac)
    return !1;
  var r = vl(t);
  if (r === null)
    return !0;
  var n = Fc.call(r, "constructor") && r.constructor;
  return typeof n == "function" && n instanceof n && ml.call(n) == $c;
}
function Pc(t, r, n) {
  var i = -1, o = t.length;
  r < 0 && (r = -r > o ? 0 : o + r), n = n > o ? o : n, n < 0 && (n += o), o = r > n ? 0 : n - r >>> 0, r >>>= 0;
  for (var a = Array(o); ++i < o; )
    a[i] = t[i + r];
  return a;
}
function Tc(t, r, n) {
  var i = t.length;
  return n = n === void 0 ? i : n, !r && n >= i ? t : Pc(t, r, n);
}
var zc = "\\ud800-\\udfff", Rc = "\\u0300-\\u036f", Oc = "\\ufe20-\\ufe2f", kc = "\\u20d0-\\u20ff", Mc = Rc + Oc + kc, Ic = "\\ufe0e\\ufe0f", _c = "\\u200d", Nc = RegExp("[" + _c + zc + Mc + Ic + "]");
function gl(t) {
  return Nc.test(t);
}
function Hc(t) {
  return t.split("");
}
var bl = "\\ud800-\\udfff", Wc = "\\u0300-\\u036f", Lc = "\\ufe20-\\ufe2f", jc = "\\u20d0-\\u20ff", Vc = Wc + Lc + jc, qc = "\\ufe0e\\ufe0f", Kc = "[" + bl + "]", hi = "[" + Vc + "]", xi = "\\ud83c[\\udffb-\\udfff]", Gc = "(?:" + hi + "|" + xi + ")", yl = "[^" + bl + "]", Cl = "(?:\\ud83c[\\udde6-\\uddff]){2}", wl = "[\\ud800-\\udbff][\\udc00-\\udfff]", Uc = "\\u200d", Bl = Gc + "?", Al = "[" + qc + "]?", Xc = "(?:" + Uc + "(?:" + [yl, Cl, wl].join("|") + ")" + Al + Bl + ")*", Yc = Al + Bl + Xc, Zc = "(?:" + [yl + hi + "?", hi, Cl, wl, Kc].join("|") + ")", Jc = RegExp(xi + "(?=" + xi + ")|" + Zc + Yc, "g");
function Qc(t) {
  return t.match(Jc) || [];
}
function eh(t) {
  return gl(t) ? Qc(t) : Hc(t);
}
function th(t) {
  return function(r) {
    r = hl(r);
    var n = gl(r) ? eh(r) : void 0, i = n ? n[0] : r.charAt(0), o = n ? Tc(n, 1).join("") : r.slice(1);
    return i[t]() + o;
  };
}
var rh = th("toUpperCase");
function nh() {
  this.__data__ = new xt(), this.size = 0;
}
function ih(t) {
  var r = this.__data__, n = r.delete(t);
  return this.size = r.size, n;
}
function oh(t) {
  return this.__data__.get(t);
}
function ah(t) {
  return this.__data__.has(t);
}
var lh = 200;
function sh(t, r) {
  var n = this.__data__;
  if (n instanceof xt) {
    var i = n.__data__;
    if (!Or || i.length < lh - 1)
      return i.push([t, r]), this.size = ++n.size, this;
    n = this.__data__ = new pt(i);
  }
  return n.set(t, r), this.size = n.size, this;
}
function it(t) {
  var r = this.__data__ = new xt(t);
  this.size = r.size;
}
it.prototype.clear = nh;
it.prototype.delete = ih;
it.prototype.get = oh;
it.prototype.has = ah;
it.prototype.set = sh;
var Dl = typeof exports == "object" && exports && !exports.nodeType && exports, Go = Dl && typeof module == "object" && module && !module.nodeType && module, uh = Go && Go.exports === Dl, Uo = uh ? ot.Buffer : void 0;
Uo && Uo.allocUnsafe;
function fh(t, r) {
  return t.slice();
}
function dh(t, r) {
  for (var n = -1, i = t == null ? 0 : t.length, o = 0, a = []; ++n < i; ) {
    var l = t[n];
    r(l, n, t) && (a[o++] = l);
  }
  return a;
}
function ch() {
  return [];
}
var hh = Object.prototype, xh = hh.propertyIsEnumerable, Xo = Object.getOwnPropertySymbols, ph = Xo ? function(t) {
  return t == null ? [] : (t = Object(t), dh(Xo(t), function(r) {
    return xh.call(t, r);
  }));
} : ch;
function vh(t, r, n) {
  var i = r(t);
  return Ge(t) ? i : Bc(i, n(t));
}
function Yo(t) {
  return vh(t, Vi, ph);
}
var pi = Gt(ot, "DataView"), vi = Gt(ot, "Promise"), mi = Gt(ot, "Set"), Zo = "[object Map]", mh = "[object Object]", Jo = "[object Promise]", Qo = "[object Set]", ea = "[object WeakMap]", ta = "[object DataView]", gh = Kt(pi), bh = Kt(Or), yh = Kt(vi), Ch = Kt(mi), wh = Kt(ci), yt = qt;
(pi && yt(new pi(new ArrayBuffer(1))) != ta || Or && yt(new Or()) != Zo || vi && yt(vi.resolve()) != Jo || mi && yt(new mi()) != Qo || ci && yt(new ci()) != ea) && (yt = function(t) {
  var r = qt(t), n = r == mh ? t.constructor : void 0, i = n ? Kt(n) : "";
  if (i)
    switch (i) {
      case gh:
        return ta;
      case bh:
        return Zo;
      case yh:
        return Jo;
      case Ch:
        return Qo;
      case wh:
        return ea;
    }
  return r;
});
var Bn = ot.Uint8Array;
function Bh(t) {
  var r = new t.constructor(t.byteLength);
  return new Bn(r).set(new Bn(t)), r;
}
function Ah(t, r) {
  var n = Bh(t.buffer);
  return new t.constructor(n, t.byteOffset, t.length);
}
function Dh(t) {
  return typeof t.constructor == "function" && !Li(t) ? zd(vl(t)) : {};
}
var Sh = "__lodash_hash_undefined__";
function Fh(t) {
  return this.__data__.set(t, Sh), this;
}
function $h(t) {
  return this.__data__.has(t);
}
function An(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new pt(); ++r < n; )
    this.add(t[r]);
}
An.prototype.add = An.prototype.push = Fh;
An.prototype.has = $h;
function Eh(t, r) {
  for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
    if (r(t[n], n, t))
      return !0;
  return !1;
}
function Ph(t, r) {
  return t.has(r);
}
var Th = 1, zh = 2;
function Sl(t, r, n, i, o, a) {
  var l = n & Th, s = t.length, u = r.length;
  if (s != u && !(l && u > s))
    return !1;
  var f = a.get(t), d = a.get(r);
  if (f && d)
    return f == r && d == t;
  var c = -1, v = !0, y = n & zh ? new An() : void 0;
  for (a.set(t, r), a.set(r, t); ++c < s; ) {
    var x = t[c], p = r[c];
    if (i)
      var g = l ? i(p, x, c, r, t, a) : i(x, p, c, t, r, a);
    if (g !== void 0) {
      if (g)
        continue;
      v = !1;
      break;
    }
    if (y) {
      if (!Eh(r, function(h, D) {
        if (!Ph(y, D) && (x === h || o(x, h, n, i, a)))
          return y.push(D);
      })) {
        v = !1;
        break;
      }
    } else if (!(x === p || o(x, p, n, i, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(t), a.delete(r), v;
}
function Rh(t) {
  var r = -1, n = Array(t.size);
  return t.forEach(function(i, o) {
    n[++r] = [o, i];
  }), n;
}
function Oh(t) {
  var r = -1, n = Array(t.size);
  return t.forEach(function(i) {
    n[++r] = i;
  }), n;
}
var kh = 1, Mh = 2, Ih = "[object Boolean]", _h = "[object Date]", Nh = "[object Error]", Hh = "[object Map]", Wh = "[object Number]", Lh = "[object RegExp]", jh = "[object Set]", Vh = "[object String]", qh = "[object Symbol]", Kh = "[object ArrayBuffer]", Gh = "[object DataView]", ra = St ? St.prototype : void 0, Xn = ra ? ra.valueOf : void 0;
function Uh(t, r, n, i, o, a, l) {
  switch (n) {
    case Gh:
      if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset)
        return !1;
      t = t.buffer, r = r.buffer;
    case Kh:
      return !(t.byteLength != r.byteLength || !a(new Bn(t), new Bn(r)));
    case Ih:
    case _h:
    case Wh:
      return Wr(+t, +r);
    case Nh:
      return t.name == r.name && t.message == r.message;
    case Lh:
    case Vh:
      return t == r + "";
    case Hh:
      var s = Rh;
    case jh:
      var u = i & kh;
      if (s || (s = Oh), t.size != r.size && !u)
        return !1;
      var f = l.get(t);
      if (f)
        return f == r;
      i |= Mh, l.set(t, r);
      var d = Sl(s(t), s(r), i, o, a, l);
      return l.delete(t), d;
    case qh:
      if (Xn)
        return Xn.call(t) == Xn.call(r);
  }
  return !1;
}
var Xh = 1, Yh = Object.prototype, Zh = Yh.hasOwnProperty;
function Jh(t, r, n, i, o, a) {
  var l = n & Xh, s = Yo(t), u = s.length, f = Yo(r), d = f.length;
  if (u != d && !l)
    return !1;
  for (var c = u; c--; ) {
    var v = s[c];
    if (!(l ? v in r : Zh.call(r, v)))
      return !1;
  }
  var y = a.get(t), x = a.get(r);
  if (y && x)
    return y == r && x == t;
  var p = !0;
  a.set(t, r), a.set(r, t);
  for (var g = l; ++c < u; ) {
    v = s[c];
    var h = t[v], D = r[v];
    if (i)
      var E = l ? i(D, h, v, r, t, a) : i(h, D, v, t, r, a);
    if (!(E === void 0 ? h === D || o(h, D, n, i, a) : E)) {
      p = !1;
      break;
    }
    g || (g = v == "constructor");
  }
  if (p && !g) {
    var C = t.constructor, F = r.constructor;
    C != F && "constructor" in t && "constructor" in r && !(typeof C == "function" && C instanceof C && typeof F == "function" && F instanceof F) && (p = !1);
  }
  return a.delete(t), a.delete(r), p;
}
var Qh = 1, na = "[object Arguments]", ia = "[object Array]", nn = "[object Object]", ex = Object.prototype, oa = ex.hasOwnProperty;
function tx(t, r, n, i, o, a) {
  var l = Ge(t), s = Ge(r), u = l ? ia : yt(t), f = s ? ia : yt(r);
  u = u == na ? nn : u, f = f == na ? nn : f;
  var d = u == nn, c = f == nn, v = u == f;
  if (v && wn(t)) {
    if (!wn(r))
      return !1;
    l = !0, d = !1;
  }
  if (v && !d)
    return a || (a = new it()), l || ji(t) ? Sl(t, r, n, i, o, a) : Uh(t, r, u, n, i, o, a);
  if (!(n & Qh)) {
    var y = d && oa.call(t, "__wrapped__"), x = c && oa.call(r, "__wrapped__");
    if (y || x) {
      var p = y ? t.value() : t, g = x ? r.value() : r;
      return a || (a = new it()), o(p, g, n, i, a);
    }
  }
  return v ? (a || (a = new it()), Jh(t, r, n, i, o, a)) : !1;
}
function Ui(t, r, n, i, o) {
  return t === r ? !0 : t == null || r == null || !Ft(t) && !Ft(r) ? t !== t && r !== r : tx(t, r, n, i, Ui, o);
}
var rx = 1, nx = 2;
function ix(t, r, n, i) {
  var o = n.length, a = o;
  if (t == null)
    return !a;
  for (t = Object(t); o--; ) {
    var l = n[o];
    if (l[2] ? l[1] !== t[l[0]] : !(l[0] in t))
      return !1;
  }
  for (; ++o < a; ) {
    l = n[o];
    var s = l[0], u = t[s], f = l[1];
    if (l[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var d = new it(), c;
      if (!(c === void 0 ? Ui(f, u, rx | nx, i, d) : c))
        return !1;
    }
  }
  return !0;
}
function Fl(t) {
  return t === t && !$t(t);
}
function ox(t) {
  for (var r = Vi(t), n = r.length; n--; ) {
    var i = r[n], o = t[i];
    r[n] = [i, o, Fl(o)];
  }
  return r;
}
function $l(t, r) {
  return function(n) {
    return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
  };
}
function ax(t) {
  var r = ox(t);
  return r.length == 1 && r[0][2] ? $l(r[0][0], r[0][1]) : function(n) {
    return n === t || ix(n, t, r);
  };
}
function lx(t, r) {
  return t != null && r in Object(t);
}
function sx(t, r, n) {
  r = xl(r, t);
  for (var i = -1, o = r.length, a = !1; ++i < o; ) {
    var l = On(r[i]);
    if (!(a = t != null && n(t, l)))
      break;
    t = t[l];
  }
  return a || ++i != o ? a : (o = t == null ? 0 : t.length, !!o && Wi(o) && Ni(l, o) && (Ge(t) || Cn(t)));
}
function ux(t, r) {
  return t != null && sx(t, r, lx);
}
var fx = 1, dx = 2;
function cx(t, r) {
  return qi(t) && Fl(r) ? $l(On(t), r) : function(n) {
    var i = Gi(n, t);
    return i === void 0 && i === r ? ux(n, t) : Ui(r, i, fx | dx);
  };
}
function hx(t) {
  return function(r) {
    return r == null ? void 0 : r[t];
  };
}
function xx(t) {
  return function(r) {
    return pl(r, t);
  };
}
function px(t) {
  return qi(t) ? hx(On(t)) : xx(t);
}
function vx(t) {
  return typeof t == "function" ? t : t == null ? Ii : typeof t == "object" ? Ge(t) ? cx(t[0], t[1]) : ax(t) : px(t);
}
function mx(t) {
  return function(r, n, i) {
    for (var o = -1, a = Object(r), l = i(r), s = l.length; s--; ) {
      var u = l[++o];
      if (n(a[u], u, a) === !1)
        break;
    }
    return r;
  };
}
var El = mx();
function gx(t, r) {
  return t && El(t, r, Vi);
}
function bx(t, r) {
  return function(n, i) {
    if (n == null)
      return n;
    if (!ur(n))
      return t(n, i);
    for (var o = n.length, a = -1, l = Object(n); ++a < o && i(l[a], a, l) !== !1; )
      ;
    return n;
  };
}
var yx = bx(gx);
function gi(t, r, n) {
  (n !== void 0 && !Wr(t[r], n) || n === void 0 && !(r in t)) && Hi(t, r, n);
}
function Cx(t) {
  return Ft(t) && ur(t);
}
function bi(t, r) {
  if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
    return t[r];
}
function wx(t) {
  return Gd(t, cl(t));
}
function Bx(t, r, n, i, o, a, l) {
  var s = bi(t, n), u = bi(r, n), f = l.get(u);
  if (f) {
    gi(t, n, f);
    return;
  }
  var d = a ? a(s, u, n + "", t, r, l) : void 0, c = d === void 0;
  if (c) {
    var v = Ge(u), y = !v && wn(u), x = !v && !y && ji(u);
    d = u, v || y || x ? Ge(s) ? d = s : Cx(s) ? d = Od(s) : y ? (c = !1, d = fh(u)) : x ? (c = !1, d = Ah(u)) : d = [] : Ec(u) || Cn(u) ? (d = s, Cn(s) ? d = wx(s) : (!$t(s) || _i(s)) && (d = Dh(u))) : c = !1;
  }
  c && (l.set(u, d), o(d, u, i, a, l), l.delete(u)), gi(t, n, d);
}
function Pl(t, r, n, i, o) {
  t !== r && El(r, function(a, l) {
    if (o || (o = new it()), $t(a))
      Bx(t, r, l, n, Pl, i, o);
    else {
      var s = i ? i(bi(t, l), a, l + "", t, r, o) : void 0;
      s === void 0 && (s = a), gi(t, l, s);
    }
  }, cl);
}
function Ax(t, r) {
  var n = -1, i = ur(t) ? Array(t.length) : [];
  return yx(t, function(o, a, l) {
    i[++n] = r(o, a, l);
  }), i;
}
function Dx(t, r) {
  var n = Ge(t) ? ol : Ax;
  return n(t, vx(r));
}
var Cr = Jd(function(t, r, n) {
  Pl(t, r, n);
});
const Et = {
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
  fontSize: Sx,
  fontFamily: Fx,
  lineHeight: $x
} = Et, Tl = P("body", `
 margin: 0;
 font-size: ${Sx};
 font-family: ${Fx};
 line-height: ${$x};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [P("input", `
 font-family: inherit;
 font-size: inherit;
 `)]), dt = "n-config-provider", kr = "naive-ui-style";
function fe(t, r, n, i, o, a) {
  const l = Hr(), s = ie(dt, null);
  if (n) {
    const f = () => {
      const d = a == null ? void 0 : a.value;
      n.mount({
        id: d === void 0 ? r : d + r,
        head: !0,
        props: {
          bPrefix: d ? `.${d}-` : void 0
        },
        anchorMetaName: kr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || Tl.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: kr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    l ? f() : Fn(f);
  }
  return k(() => {
    var f;
    const {
      theme: {
        common: d,
        self: c,
        peers: v = {}
      } = {},
      themeOverrides: y = {},
      builtinThemeOverrides: x = {}
    } = o, {
      common: p,
      peers: g
    } = y, {
      common: h = void 0,
      [t]: {
        common: D = void 0,
        self: E = void 0,
        peers: C = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: F = void 0,
      [t]: _ = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: m,
      peers: A = {}
    } = _, T = Cr({}, d || D || h || i.common, F, m, p), z = Cr(
      // {}, executed every time, no need for empty obj
      (f = c || E || i.self) === null || f === void 0 ? void 0 : f(T),
      x,
      _,
      y
    );
    return {
      common: T,
      self: z,
      peers: Cr({}, i.peers, C, v),
      peerOverrides: Cr({}, x.peers, A, g)
    };
  });
}
fe.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const yi = "n";
function Me(t = {}, r = {
  defaultBordered: !0
}) {
  const n = ie(dt, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: n == null ? void 0 : n.inlineThemeDisabled,
    mergedRtlRef: n == null ? void 0 : n.mergedRtlRef,
    mergedComponentPropsRef: n == null ? void 0 : n.mergedComponentPropsRef,
    mergedBreakpointsRef: n == null ? void 0 : n.mergedBreakpointsRef,
    mergedBorderedRef: k(() => {
      var i, o;
      const {
        bordered: a
      } = t;
      return a !== void 0 ? a : (o = (i = n == null ? void 0 : n.mergedBorderedRef.value) !== null && i !== void 0 ? i : r.defaultBordered) !== null && o !== void 0 ? o : !0;
    }),
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : Js(yi),
    namespaceRef: k(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
const Ex = {
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
}, Px = {
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
function tr(t) {
  return (r = {}) => {
    const n = r.width ? String(r.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
function tt(t) {
  return (r, n) => {
    const i = n != null && n.context ? String(n.context) : "standalone";
    let o;
    if (i === "formatting" && t.formattingValues) {
      const l = t.defaultFormattingWidth || t.defaultWidth, s = n != null && n.width ? String(n.width) : l;
      o = t.formattingValues[s] || t.formattingValues[l];
    } else {
      const l = t.defaultWidth, s = n != null && n.width ? String(n.width) : t.defaultWidth;
      o = t.values[s] || t.values[l];
    }
    const a = t.argumentCallback ? t.argumentCallback(r) : r;
    return o[a];
  };
}
function rt(t) {
  return (r, n = {}) => {
    const i = n.width, o = i && t.matchPatterns[i] || t.matchPatterns[t.defaultMatchWidth], a = r.match(o);
    if (!a)
      return null;
    const l = a[0], s = i && t.parsePatterns[i] || t.parsePatterns[t.defaultParseWidth], u = Array.isArray(s) ? zx(s, (c) => c.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Tx(s, (c) => c.test(l))
    );
    let f;
    f = t.valueCallback ? t.valueCallback(u) : u, f = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(f)
    ) : f;
    const d = r.slice(l.length);
    return { value: f, rest: d };
  };
}
function Tx(t, r) {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && r(t[n]))
      return n;
}
function zx(t, r) {
  for (let n = 0; n < t.length; n++)
    if (r(t[n]))
      return n;
}
function zl(t) {
  return (r, n = {}) => {
    const i = r.match(t.matchPattern);
    if (!i) return null;
    const o = i[0], a = r.match(t.parsePattern);
    if (!a) return null;
    let l = t.valueCallback ? t.valueCallback(a[0]) : a[0];
    l = n.valueCallback ? n.valueCallback(l) : l;
    const s = r.slice(o.length);
    return { value: l, rest: s };
  };
}
function Rx(t) {
  const r = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && r === "[object Date]" ? new t.constructor(+t) : typeof t == "number" || r === "[object Number]" || typeof t == "string" || r === "[object String]" ? new Date(t) : /* @__PURE__ */ new Date(NaN);
}
let Ox = {};
function kx() {
  return Ox;
}
function aa(t, r) {
  var s, u, f, d;
  const n = kx(), i = (r == null ? void 0 : r.weekStartsOn) ?? ((u = (s = r == null ? void 0 : r.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? n.weekStartsOn ?? ((d = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : d.weekStartsOn) ?? 0, o = Rx(t), a = o.getDay(), l = (a < i ? 7 : 0) + a - i;
  return o.setDate(o.getDate() - l), o.setHours(0, 0, 0, 0), o;
}
function Mx(t, r, n) {
  const i = aa(t, n), o = aa(r, n);
  return +i == +o;
}
const Ix = {
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
}, _x = (t, r, n) => {
  let i;
  const o = Ix[t];
  return typeof o == "string" ? i = o : r === 1 ? i = o.one : i = o.other.replace("{{count}}", r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + i : i + " ago" : i;
}, Nx = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Hx = (t, r, n, i) => Nx[t], Wx = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Lx = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, jx = {
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
}, Vx = {
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
}, qx = {
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
}, Kx = {
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
}, Gx = (t, r) => {
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
}, Ux = {
  ordinalNumber: Gx,
  era: tt({
    values: Wx,
    defaultWidth: "wide"
  }),
  quarter: tt({
    values: Lx,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: tt({
    values: jx,
    defaultWidth: "wide"
  }),
  day: tt({
    values: Vx,
    defaultWidth: "wide"
  }),
  dayPeriod: tt({
    values: qx,
    defaultWidth: "wide",
    formattingValues: Kx,
    defaultFormattingWidth: "wide"
  })
}, Xx = /^(\d+)(th|st|nd|rd)?/i, Yx = /\d+/i, Zx = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Jx = {
  any: [/^b/i, /^(a|c)/i]
}, Qx = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ep = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, tp = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, rp = {
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
}, np = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ip = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, op = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, ap = {
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
}, lp = {
  ordinalNumber: zl({
    matchPattern: Xx,
    parsePattern: Yx,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: rt({
    matchPatterns: Zx,
    defaultMatchWidth: "wide",
    parsePatterns: Jx,
    defaultParseWidth: "any"
  }),
  quarter: rt({
    matchPatterns: Qx,
    defaultMatchWidth: "wide",
    parsePatterns: ep,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: rt({
    matchPatterns: tp,
    defaultMatchWidth: "wide",
    parsePatterns: rp,
    defaultParseWidth: "any"
  }),
  day: rt({
    matchPatterns: np,
    defaultMatchWidth: "wide",
    parsePatterns: ip,
    defaultParseWidth: "any"
  }),
  dayPeriod: rt({
    matchPatterns: op,
    defaultMatchWidth: "any",
    parsePatterns: ap,
    defaultParseWidth: "any"
  })
}, sp = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, up = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, fp = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, dp = {
  date: tr({
    formats: sp,
    defaultWidth: "full"
  }),
  time: tr({
    formats: up,
    defaultWidth: "full"
  }),
  dateTime: tr({
    formats: fp,
    defaultWidth: "full"
  })
}, cp = {
  code: "en-US",
  formatDistance: _x,
  formatLong: dp,
  formatRelative: Hx,
  localize: Ux,
  match: lp,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, hp = {
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
}, xp = (t, r, n) => {
  let i;
  const o = hp[t];
  return typeof o == "string" ? i = o : r === 1 ? i = o.one : i = o.other.replace("{{count}}", String(r)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? i + "内" : i + "前" : i;
}, pp = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, vp = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, mp = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, gp = {
  date: tr({
    formats: pp,
    defaultWidth: "full"
  }),
  time: tr({
    formats: vp,
    defaultWidth: "full"
  }),
  dateTime: tr({
    formats: mp,
    defaultWidth: "full"
  })
};
function la(t, r, n) {
  const i = "eeee p";
  return Mx(t, r, n) ? i : t.getTime() > r.getTime() ? "'下个'" + i : "'上个'" + i;
}
const bp = {
  lastWeek: la,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: la,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, yp = (t, r, n, i) => {
  const o = bp[t];
  return typeof o == "function" ? o(r, n, i) : o;
}, Cp = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, wp = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, Bp = {
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
}, Ap = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, Dp = {
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
}, Sp = {
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
}, Fp = (t, r) => {
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
}, $p = {
  ordinalNumber: Fp,
  era: tt({
    values: Cp,
    defaultWidth: "wide"
  }),
  quarter: tt({
    values: wp,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: tt({
    values: Bp,
    defaultWidth: "wide"
  }),
  day: tt({
    values: Ap,
    defaultWidth: "wide"
  }),
  dayPeriod: tt({
    values: Dp,
    defaultWidth: "wide",
    formattingValues: Sp,
    defaultFormattingWidth: "wide"
  })
}, Ep = /^(第\s*)?\d+(日|时|分|秒)?/i, Pp = /\d+/i, Tp = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, zp = {
  any: [/^(前)/i, /^(公元)/i]
}, Rp = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, Op = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, kp = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, Mp = {
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
}, Ip = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, _p = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, Np = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, Hp = {
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
}, Wp = {
  ordinalNumber: zl({
    matchPattern: Ep,
    parsePattern: Pp,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: rt({
    matchPatterns: Tp,
    defaultMatchWidth: "wide",
    parsePatterns: zp,
    defaultParseWidth: "any"
  }),
  quarter: rt({
    matchPatterns: Rp,
    defaultMatchWidth: "wide",
    parsePatterns: Op,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: rt({
    matchPatterns: kp,
    defaultMatchWidth: "wide",
    parsePatterns: Mp,
    defaultParseWidth: "any"
  }),
  day: rt({
    matchPatterns: Ip,
    defaultMatchWidth: "wide",
    parsePatterns: _p,
    defaultParseWidth: "any"
  }),
  dayPeriod: rt({
    matchPatterns: Np,
    defaultMatchWidth: "any",
    parsePatterns: Hp,
    defaultParseWidth: "any"
  })
}, Lp = {
  code: "zh-CN",
  formatDistance: xp,
  formatLong: gp,
  formatRelative: yp,
  localize: $p,
  match: Wp,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, jp = {
  name: "zh-CN",
  locale: Lp
}, Vp = {
  name: "en-US",
  locale: cp
};
function qp(t) {
  const {
    mergedLocaleRef: r,
    mergedDateLocaleRef: n
  } = ie(dt, null) || {}, i = k(() => {
    var a, l;
    return (l = (a = r == null ? void 0 : r.value) === null || a === void 0 ? void 0 : a[t]) !== null && l !== void 0 ? l : Px[t];
  });
  return {
    dateLocaleRef: k(() => {
      var a;
      return (a = n == null ? void 0 : n.value) !== null && a !== void 0 ? a : Vp;
    }),
    localeRef: i
  };
}
function fr(t, r, n) {
  if (!r) {
    process.env.NODE_ENV !== "production" && Ti("use-style", "No style is specified.");
    return;
  }
  const i = Hr(), o = ie(dt, null), a = () => {
    const l = n.value;
    r.mount({
      id: l === void 0 ? t : l + t,
      head: !0,
      anchorMetaName: kr,
      props: {
        bPrefix: l ? `.${l}-` : void 0
      },
      ssr: i,
      parent: o == null ? void 0 : o.styleMountTarget
    }), o != null && o.preflightStyleDisabled || Tl.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: kr,
      ssr: i,
      parent: o == null ? void 0 : o.styleMountTarget
    });
  };
  i ? a() : Fn(a);
}
function Xe(t, r, n, i) {
  n || Ti("useThemeClass", "cssVarsRef is not passed");
  const o = ie(dt, null), a = o == null ? void 0 : o.mergedThemeHashRef, l = o == null ? void 0 : o.styleMountTarget, s = L(""), u = Hr();
  let f;
  const d = `__${t}`, c = () => {
    let v = d;
    const y = r ? r.value : void 0, x = a == null ? void 0 : a.value;
    x && (v += `-${x}`), y && (v += `-${y}`);
    const {
      themeOverrides: p,
      builtinThemeOverrides: g
    } = i;
    p && (v += `-${Tr(JSON.stringify(p))}`), g && (v += `-${Tr(JSON.stringify(g))}`), s.value = v, f = () => {
      const h = n.value;
      let D = "";
      for (const E in h)
        D += `${E}: ${h[E]};`;
      P(`.${v}`, D).mount({
        id: v,
        ssr: u,
        parent: l
      }), f = void 0;
    };
  };
  return Ke(() => {
    c();
  }), {
    themeClass: s,
    onRender: () => {
      f == null || f();
    }
  };
}
function dr(t, r, n) {
  if (!r) return;
  const i = Hr(), o = k(() => {
    const {
      value: s
    } = r;
    if (!s)
      return;
    const u = s[t];
    if (u)
      return u;
  }), a = ie(dt, null), l = () => {
    Ke(() => {
      const {
        value: s
      } = n, u = `${s}${t}Rtl`;
      if (qu(u, i)) return;
      const {
        value: f
      } = o;
      f && f.style.mount({
        id: u,
        head: !0,
        anchorMetaName: kr,
        props: {
          bPrefix: s ? `.${s}-` : void 0
        },
        ssr: i,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    });
  };
  return i ? l() : Fn(l), o;
}
function Kp(t, r) {
  return J({
    name: rh(t),
    setup() {
      var n;
      const i = (n = ie(dt, null)) === null || n === void 0 ? void 0 : n.mergedIconsRef;
      return () => {
        var o;
        const a = (o = i == null ? void 0 : i.value) === null || o === void 0 ? void 0 : o[t];
        return a ? a() : r;
      };
    }
  });
}
const Gp = J({
  name: "ChevronLeft",
  render() {
    return b("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, b("path", {
      d: "M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",
      fill: "currentColor"
    }));
  }
}), Rl = J({
  name: "ChevronRight",
  render() {
    return b("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, b("path", {
      d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
      fill: "currentColor"
    }));
  }
}), Up = J({
  name: "Eye",
  render() {
    return b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, b("path", {
      d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }), b("circle", {
      cx: "256",
      cy: "256",
      r: "80",
      fill: "none",
      stroke: "currentColor",
      "stroke-miterlimit": "10",
      "stroke-width": "32"
    }));
  }
}), Xp = J({
  name: "EyeOff",
  render() {
    return b("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, b("path", {
      d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
      fill: "currentColor"
    }), b("path", {
      d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
      fill: "currentColor"
    }), b("path", {
      d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
      fill: "currentColor"
    }), b("path", {
      d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
      fill: "currentColor"
    }), b("path", {
      d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
      fill: "currentColor"
    }));
  }
}), Yp = J({
  name: "ChevronDown",
  render() {
    return b("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, b("path", {
      d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
      fill: "currentColor"
    }));
  }
}), Zp = Kp("clear", b("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, b("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, b("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, b("path", {
  d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
}))))), Xi = J({
  name: "BaseIconSwitchTransition",
  setup(t, {
    slots: r
  }) {
    const n = zi();
    return () => b(At, {
      name: "icon-switch-transition",
      appear: n.value
    }, r);
  }
}), Ol = J({
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
    function o(s) {
      t.width ? s.style.maxWidth = "" : s.style.maxHeight = "";
      const {
        onAfterLeave: u
      } = t;
      u && u();
    }
    function a(s) {
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
        mode: d
      } = t, c = s ? Qs : At, v = {
        name: u ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: f,
        onEnter: a,
        onAfterEnter: l,
        onBeforeLeave: n,
        onLeave: i,
        onAfterLeave: o
      };
      return s || (v.mode = d), b(c, v, r);
    };
  }
}), Jp = N("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [P("svg", `
 height: 1em;
 width: 1em;
 `)]), Mr = J({
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
    fr("-base-icon", Jp, se(t, "clsPrefix"));
  },
  render() {
    return b("i", {
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
  cubicBezierEaseInOut: Qp
} = Et;
function Dn({
  originalTransform: t = "",
  left: r = 0,
  top: n = 0,
  transition: i = `all .3s ${Qp} !important`
} = {}) {
  return [P("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${t} scale(0.75)`,
    left: r,
    top: n,
    opacity: 0
  }), P("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${t}`,
    left: r,
    top: n,
    opacity: 1
  }), P("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: r,
    top: n,
    transition: i
  })];
}
const ev = P([P("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), N("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [I("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [Dn()]), I("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Dn({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), I("container", `
 animation: rotator 3s linear infinite both;
 `, [I("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Yn = "1.6s", tv = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Yi = J({
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
  }, tv),
  setup(t) {
    fr("-base-loading", ev, se(t, "clsPrefix"));
  },
  render() {
    const {
      clsPrefix: t,
      radius: r,
      strokeWidth: n,
      stroke: i,
      scale: o
    } = this, a = r / o;
    return b("div", {
      class: `${t}-base-loading`,
      role: "img",
      "aria-label": "loading"
    }, b(Xi, null, {
      default: () => this.show ? b("div", {
        key: "icon",
        class: `${t}-base-loading__transition-wrapper`
      }, b("div", {
        class: `${t}-base-loading__container`
      }, b("svg", {
        class: `${t}-base-loading__icon`,
        viewBox: `0 0 ${2 * a} ${2 * a}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          color: i
        }
      }, b("g", null, b("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${a} ${a};270 ${a} ${a}`,
        begin: "0s",
        dur: Yn,
        fill: "freeze",
        repeatCount: "indefinite"
      }), b("circle", {
        class: `${t}-base-loading__icon`,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": n,
        "stroke-linecap": "round",
        cx: a,
        cy: a,
        r: r - n / 2,
        "stroke-dasharray": 5.67 * r,
        "stroke-dashoffset": 18.48 * r
      }, b("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${a} ${a};135 ${a} ${a};450 ${a} ${a}`,
        begin: "0s",
        dur: Yn,
        fill: "freeze",
        repeatCount: "indefinite"
      }), b("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * r};${1.42 * r};${5.67 * r}`,
        begin: "0s",
        dur: Yn,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : b("div", {
        key: "placeholder",
        class: `${t}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
});
function sa(t) {
  return Array.isArray(t) ? t : [t];
}
const Ci = {
  STOP: "STOP"
};
function kl(t, r) {
  const n = r(t);
  t.children !== void 0 && n !== Ci.STOP && t.children.forEach((i) => kl(i, r));
}
function rv(t, r = {}) {
  const { preserveGroup: n = !1 } = r, i = [], o = n ? (l) => {
    l.isLeaf || (i.push(l.key), a(l.children));
  } : (l) => {
    l.isLeaf || (l.isGroup || i.push(l.key), a(l.children));
  };
  function a(l) {
    l.forEach(o);
  }
  return a(t), i;
}
function nv(t, r) {
  const { isLeaf: n } = t;
  return n !== void 0 ? n : !r(t);
}
function iv(t) {
  return t.children;
}
function ov(t) {
  return t.key;
}
function av() {
  return !1;
}
function lv(t, r) {
  const { isLeaf: n } = t;
  return !(n === !1 && !Array.isArray(r(t)));
}
function sv(t) {
  return t.disabled === !0;
}
function uv(t, r) {
  return t.isLeaf === !1 && !Array.isArray(r(t));
}
function fv(t, r) {
  if (t.isLeaf === !0) {
    const n = r(t);
    if (Array.isArray(n) && n.length > 0)
      return !0;
  }
  return !1;
}
function Zn(t) {
  var r;
  return t == null ? [] : Array.isArray(t) ? t : (r = t.checkedKeys) !== null && r !== void 0 ? r : [];
}
function Jn(t) {
  var r;
  return t == null || Array.isArray(t) ? [] : (r = t.indeterminateKeys) !== null && r !== void 0 ? r : [];
}
function dv(t, r) {
  const n = new Set(t);
  return r.forEach((i) => {
    n.has(i) || n.add(i);
  }), Array.from(n);
}
function cv(t, r) {
  const n = new Set(t);
  return r.forEach((i) => {
    n.has(i) && n.delete(i);
  }), Array.from(n);
}
function hv(t) {
  return (t == null ? void 0 : t.type) === "group";
}
class xv extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function pv(t, r, n, i) {
  return Sn(r.concat(t), n, i, !1);
}
function vv(t, r) {
  const n = /* @__PURE__ */ new Set();
  return t.forEach((i) => {
    const o = r.treeNodeMap.get(i);
    if (o !== void 0) {
      let a = o.parent;
      for (; a !== null && !(a.disabled || n.has(a.key)); )
        n.add(a.key), a = a.parent;
    }
  }), n;
}
function mv(t, r, n, i) {
  const o = Sn(r, n, i, !1), a = Sn(t, n, i, !0), l = vv(t, n), s = [];
  return o.forEach((u) => {
    (a.has(u) || l.has(u)) && s.push(u);
  }), s.forEach((u) => o.delete(u)), o;
}
function Qn(t, r) {
  const { checkedKeys: n, keysToCheck: i, keysToUncheck: o, indeterminateKeys: a, cascade: l, leafOnly: s, checkStrategy: u, allowNotLoaded: f } = t;
  if (!l)
    return i !== void 0 ? {
      checkedKeys: dv(n, i),
      indeterminateKeys: Array.from(a)
    } : o !== void 0 ? {
      checkedKeys: cv(n, o),
      indeterminateKeys: Array.from(a)
    } : {
      checkedKeys: Array.from(n),
      indeterminateKeys: Array.from(a)
    };
  const { levelTreeNodeMap: d } = r;
  let c;
  o !== void 0 ? c = mv(o, n, r, f) : i !== void 0 ? c = pv(i, n, r, f) : c = Sn(n, r, f, !1);
  const v = u === "parent", y = u === "child" || s, x = c, p = /* @__PURE__ */ new Set(), g = Math.max.apply(null, Array.from(d.keys()));
  for (let h = g; h >= 0; h -= 1) {
    const D = h === 0, E = d.get(h);
    for (const C of E) {
      if (C.isLeaf)
        continue;
      const { key: F, shallowLoaded: _ } = C;
      if (y && _ && C.children.forEach((z) => {
        !z.disabled && !z.isLeaf && z.shallowLoaded && x.has(z.key) && x.delete(z.key);
      }), C.disabled || !_)
        continue;
      let m = !0, A = !1, T = !0;
      for (const z of C.children) {
        const j = z.key;
        if (!z.disabled) {
          if (T && (T = !1), x.has(j))
            A = !0;
          else if (p.has(j)) {
            A = !0, m = !1;
            break;
          } else if (m = !1, A)
            break;
        }
      }
      m && !T ? (v && C.children.forEach((z) => {
        !z.disabled && x.has(z.key) && x.delete(z.key);
      }), x.add(F)) : A && p.add(F), D && y && x.has(F) && x.delete(F);
    }
  }
  return {
    checkedKeys: Array.from(x),
    indeterminateKeys: Array.from(p)
  };
}
function Sn(t, r, n, i) {
  const { treeNodeMap: o, getChildren: a } = r, l = /* @__PURE__ */ new Set(), s = new Set(t);
  return t.forEach((u) => {
    const f = o.get(u);
    f !== void 0 && kl(f, (d) => {
      if (d.disabled)
        return Ci.STOP;
      const { key: c } = d;
      if (!l.has(c) && (l.add(c), s.add(c), uv(d.rawNode, a))) {
        if (i)
          return Ci.STOP;
        if (!n)
          throw new xv();
      }
    });
  }), s;
}
function gv(t, { includeGroup: r = !1, includeSelf: n = !0 }, i) {
  var o;
  const a = i.treeNodeMap;
  let l = t == null ? null : (o = a.get(t)) !== null && o !== void 0 ? o : null;
  const s = {
    keyPath: [],
    treeNodePath: [],
    treeNode: l
  };
  if (l != null && l.ignored)
    return s.treeNode = null, s;
  for (; l; )
    !l.ignored && (r || !l.isGroup) && s.treeNodePath.push(l), l = l.parent;
  return s.treeNodePath.reverse(), n || s.treeNodePath.pop(), s.keyPath = s.treeNodePath.map((u) => u.key), s;
}
function bv(t) {
  if (t.length === 0)
    return null;
  const r = t[0];
  return r.isGroup || r.ignored || r.disabled ? r.getNext() : r;
}
function yv(t, r) {
  const n = t.siblings, i = n.length, { index: o } = t;
  return r ? n[(o + 1) % i] : o === n.length - 1 ? null : n[o + 1];
}
function ua(t, r, { loop: n = !1, includeDisabled: i = !1 } = {}) {
  const o = r === "prev" ? Cv : yv, a = {
    reverse: r === "prev"
  };
  let l = !1, s = null;
  function u(f) {
    if (f !== null) {
      if (f === t) {
        if (!l)
          l = !0;
        else if (!t.disabled && !t.isGroup) {
          s = t;
          return;
        }
      } else if ((!f.disabled || i) && !f.ignored && !f.isGroup) {
        s = f;
        return;
      }
      if (f.isGroup) {
        const d = Zi(f, a);
        d !== null ? s = d : u(o(f, n));
      } else {
        const d = o(f, !1);
        if (d !== null)
          u(d);
        else {
          const c = wv(f);
          c != null && c.isGroup ? u(o(c, n)) : n && u(o(f, !0));
        }
      }
    }
  }
  return u(t), s;
}
function Cv(t, r) {
  const n = t.siblings, i = n.length, { index: o } = t;
  return r ? n[(o - 1 + i) % i] : o === 0 ? null : n[o - 1];
}
function wv(t) {
  return t.parent;
}
function Zi(t, r = {}) {
  const { reverse: n = !1 } = r, { children: i } = t;
  if (i) {
    const { length: o } = i, a = n ? o - 1 : 0, l = n ? -1 : o, s = n ? -1 : 1;
    for (let u = a; u !== l; u += s) {
      const f = i[u];
      if (!f.disabled && !f.ignored)
        if (f.isGroup) {
          const d = Zi(f, r);
          if (d !== null)
            return d;
        } else
          return f;
    }
  }
  return null;
}
const Bv = {
  getChild() {
    return this.ignored ? null : Zi(this);
  },
  getParent() {
    const { parent: t } = this;
    return t != null && t.isGroup ? t.getParent() : t;
  },
  getNext(t = {}) {
    return ua(this, "next", t);
  },
  getPrev(t = {}) {
    return ua(this, "prev", t);
  }
};
function Av(t, r) {
  const n = r ? new Set(r) : void 0, i = [];
  function o(a) {
    a.forEach((l) => {
      i.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || // normal non-leaf node
      n === void 0 || n.has(l.key)) && o(l.children);
    });
  }
  return o(t), i;
}
function Dv(t, r) {
  const n = t.key;
  for (; r; ) {
    if (r.key === n)
      return !0;
    r = r.parent;
  }
  return !1;
}
function Ml(t, r, n, i, o, a = null, l = 0) {
  const s = [];
  return t.forEach((u, f) => {
    var d;
    process.env.NODE_ENV !== "production" && fv(u, o) && console.error("[treemate]: node", u, "is invalid");
    const c = Object.create(i);
    if (c.rawNode = u, c.siblings = s, c.level = l, c.index = f, c.isFirstChild = f === 0, c.isLastChild = f + 1 === t.length, c.parent = a, !c.ignored) {
      const v = o(u);
      Array.isArray(v) && (c.children = Ml(v, r, n, i, o, c, l + 1));
    }
    s.push(c), r.set(c.key, c), n.has(l) || n.set(l, []), (d = n.get(l)) === null || d === void 0 || d.push(c);
  }), s;
}
function Sv(t, r = {}) {
  var n;
  const i = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Map(), { getDisabled: a = sv, getIgnored: l = av, getIsGroup: s = hv, getKey: u = ov } = r, f = (n = r.getChildren) !== null && n !== void 0 ? n : iv, d = r.ignoreEmptyChildren ? (C) => {
    const F = f(C);
    return Array.isArray(F) ? F.length ? F : null : F;
  } : f, c = Object.assign({
    get key() {
      return u(this.rawNode);
    },
    get disabled() {
      return a(this.rawNode);
    },
    get isGroup() {
      return s(this.rawNode);
    },
    get isLeaf() {
      return nv(this.rawNode, d);
    },
    get shallowLoaded() {
      return lv(this.rawNode, d);
    },
    get ignored() {
      return l(this.rawNode);
    },
    contains(C) {
      return Dv(this, C);
    }
  }, Bv), v = Ml(t, i, o, c, d);
  function y(C) {
    if (C == null)
      return null;
    const F = i.get(C);
    return F && !F.isGroup && !F.ignored ? F : null;
  }
  function x(C) {
    if (C == null)
      return null;
    const F = i.get(C);
    return F && !F.ignored ? F : null;
  }
  function p(C, F) {
    const _ = x(C);
    return _ ? _.getPrev(F) : null;
  }
  function g(C, F) {
    const _ = x(C);
    return _ ? _.getNext(F) : null;
  }
  function h(C) {
    const F = x(C);
    return F ? F.getParent() : null;
  }
  function D(C) {
    const F = x(C);
    return F ? F.getChild() : null;
  }
  const E = {
    treeNodes: v,
    treeNodeMap: i,
    levelTreeNodeMap: o,
    maxLevel: Math.max(...o.keys()),
    getChildren: d,
    getFlattenedNodes(C) {
      return Av(v, C);
    },
    getNode: y,
    getPrev: p,
    getNext: g,
    getParent: h,
    getChild: D,
    getFirstAvailableNode() {
      return bv(v);
    },
    getPath(C, F = {}) {
      return gv(C, F, E);
    },
    getCheckedKeys(C, F = {}) {
      const { cascade: _ = !0, leafOnly: m = !1, checkStrategy: A = "all", allowNotLoaded: T = !1 } = F;
      return Qn({
        checkedKeys: Zn(C),
        indeterminateKeys: Jn(C),
        cascade: _,
        leafOnly: m,
        checkStrategy: A,
        allowNotLoaded: T
      }, E);
    },
    check(C, F, _ = {}) {
      const { cascade: m = !0, leafOnly: A = !1, checkStrategy: T = "all", allowNotLoaded: z = !1 } = _;
      return Qn({
        checkedKeys: Zn(F),
        indeterminateKeys: Jn(F),
        keysToCheck: C == null ? [] : sa(C),
        cascade: m,
        leafOnly: A,
        checkStrategy: T,
        allowNotLoaded: z
      }, E);
    },
    uncheck(C, F, _ = {}) {
      const { cascade: m = !0, leafOnly: A = !1, checkStrategy: T = "all", allowNotLoaded: z = !1 } = _;
      return Qn({
        checkedKeys: Zn(F),
        indeterminateKeys: Jn(F),
        keysToUncheck: C == null ? [] : sa(C),
        cascade: m,
        leafOnly: A,
        checkStrategy: T,
        allowNotLoaded: z
      }, E);
    },
    getNonLeafKeys(C = {}) {
      return rv(v, C);
    }
  };
  return E;
}
const G = {
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
}, Fv = jt(G.neutralBase), Il = jt(G.neutralInvertBase), $v = `rgba(${Il.slice(0, 3).join(", ")}, `;
function fa(t) {
  return `${$v + String(t)})`;
}
function ze(t) {
  const r = Array.from(Il);
  return r[3] = Number(t), qe(Fv, r);
}
const Ye = Object.assign(Object.assign({
  name: "common"
}, Et), {
  baseColor: G.neutralBase,
  // primary color
  primaryColor: G.primaryDefault,
  primaryColorHover: G.primaryHover,
  primaryColorPressed: G.primaryActive,
  primaryColorSuppl: G.primarySuppl,
  // info color
  infoColor: G.infoDefault,
  infoColorHover: G.infoHover,
  infoColorPressed: G.infoActive,
  infoColorSuppl: G.infoSuppl,
  // success color
  successColor: G.successDefault,
  successColorHover: G.successHover,
  successColorPressed: G.successActive,
  successColorSuppl: G.successSuppl,
  // warning color
  warningColor: G.warningDefault,
  warningColorHover: G.warningHover,
  warningColorPressed: G.warningActive,
  warningColorSuppl: G.warningSuppl,
  // error color
  errorColor: G.errorDefault,
  errorColorHover: G.errorHover,
  errorColorPressed: G.errorActive,
  errorColorSuppl: G.errorSuppl,
  // text color
  textColorBase: G.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: ze(G.alpha4),
  placeholderColor: ze(G.alpha4),
  placeholderColorDisabled: ze(G.alpha5),
  iconColor: ze(G.alpha4),
  iconColorHover: Xr(ze(G.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: Xr(ze(G.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: ze(G.alpha5),
  opacity1: G.alpha1,
  opacity2: G.alpha2,
  opacity3: G.alpha3,
  opacity4: G.alpha4,
  opacity5: G.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: ze(Number(G.alphaClose)),
  closeIconColorHover: ze(Number(G.alphaClose)),
  closeIconColorPressed: ze(Number(G.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: ze(G.alpha4),
  clearColorHover: Xr(ze(G.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: Xr(ze(G.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: fa(G.alphaScrollbar),
  scrollbarColorHover: fa(G.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: ze(G.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: G.neutralPopover,
  tableColor: G.neutralCard,
  cardColor: G.neutralCard,
  modalColor: G.neutralModal,
  bodyColor: G.neutralBody,
  tagColor: "#eee",
  avatarColor: ze(G.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: ze(G.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: G.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), Ev = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Pv(t) {
  const {
    scrollbarColor: r,
    scrollbarColorHover: n,
    scrollbarHeight: i,
    scrollbarWidth: o,
    scrollbarBorderRadius: a
  } = t;
  return Object.assign(Object.assign({}, Ev), {
    height: i,
    width: o,
    borderRadius: a,
    color: r,
    colorHover: n
  });
}
const Tv = {
  name: "Scrollbar",
  common: Ye,
  self: Pv
}, {
  cubicBezierEaseInOut: da
} = Et;
function _l({
  name: t = "fade-in",
  enterDuration: r = "0.2s",
  leaveDuration: n = "0.2s",
  enterCubicBezier: i = da,
  leaveCubicBezier: o = da
} = {}) {
  return [P(`&.${t}-transition-enter-active`, {
    transition: `all ${r} ${i}!important`
  }), P(`&.${t}-transition-leave-active`, {
    transition: `all ${n} ${o}!important`
  }), P(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`, {
    opacity: 0
  }), P(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`, {
    opacity: 1
  })];
}
const zv = N("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [P(">", [N("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [P("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), P(">", [
  // We can't set overflow hidden since it affects positioning.
  N("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), P(">, +", [N("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [V("horizontal", `
 height: var(--n-scrollbar-height);
 `, [P(">", [I("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), V("horizontal--top", `
 inset: var(--n-scrollbar-rail-inset-horizontal-top); 
 `), V("horizontal--bottom", `
 inset: var(--n-scrollbar-rail-inset-horizontal-bottom); 
 `), V("vertical", `
 width: var(--n-scrollbar-width);
 `, [P(">", [I("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), V("vertical--left", `
 inset: var(--n-scrollbar-rail-inset-vertical-left); 
 `), V("vertical--right", `
 inset: var(--n-scrollbar-rail-inset-vertical-right); 
 `), V("disabled", [P(">", [I("scrollbar", "pointer-events: none;")])]), P(">", [I("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [_l(), P("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Rv = Object.assign(Object.assign({}, fe.props), {
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
}), Nl = J({
  name: "Scrollbar",
  props: Rv,
  inheritAttrs: !1,
  setup(t) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n,
      mergedRtlRef: i
    } = Me(t), o = dr("Scrollbar", i, r), a = L(null), l = L(null), s = L(null), u = L(null), f = L(null), d = L(null), c = L(null), v = L(null), y = L(null), x = L(null), p = L(null), g = L(0), h = L(0), D = L(!1), E = L(!1);
    let C = !1, F = !1, _, m, A = 0, T = 0, z = 0, j = 0;
    const R = hf(), e = fe("Scrollbar", "-scrollbar", zv, Tv, t, r), $ = k(() => {
      const {
        value: H
      } = v, {
        value: q
      } = d, {
        value: X
      } = x;
      return H === null || q === null || X === null ? 0 : Math.min(H, X * H / q + ao(e.value.self.width) * 1.5);
    }), B = k(() => `${$.value}px`), O = k(() => {
      const {
        value: H
      } = y, {
        value: q
      } = c, {
        value: X
      } = p;
      return H === null || q === null || X === null ? 0 : X * H / q + ao(e.value.self.height) * 1.5;
    }), S = k(() => `${O.value}px`), W = k(() => {
      const {
        value: H
      } = v, {
        value: q
      } = g, {
        value: X
      } = d, {
        value: de
      } = x;
      if (H === null || X === null || de === null)
        return 0;
      {
        const ye = X - H;
        return ye ? q / ye * (de - $.value) : 0;
      }
    }), Q = k(() => `${W.value}px`), Y = k(() => {
      const {
        value: H
      } = y, {
        value: q
      } = h, {
        value: X
      } = c, {
        value: de
      } = p;
      if (H === null || X === null || de === null)
        return 0;
      {
        const ye = X - H;
        return ye ? q / ye * (de - O.value) : 0;
      }
    }), ue = k(() => `${Y.value}px`), ne = k(() => {
      const {
        value: H
      } = v, {
        value: q
      } = d;
      return H !== null && q !== null && q > H;
    }), Ee = k(() => {
      const {
        value: H
      } = y, {
        value: q
      } = c;
      return H !== null && q !== null && q > H;
    }), Ae = k(() => {
      const {
        trigger: H
      } = t;
      return H === "none" || D.value;
    }), Oe = k(() => {
      const {
        trigger: H
      } = t;
      return H === "none" || E.value;
    }), Z = k(() => {
      const {
        container: H
      } = t;
      return H ? H() : l.value;
    }), te = k(() => {
      const {
        content: H
      } = t;
      return H ? H() : s.value;
    }), Le = (H, q) => {
      if (!t.scrollable) return;
      if (typeof H == "number") {
        he(H, q ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: X,
        top: de,
        index: ye,
        elSize: Pe,
        position: He,
        behavior: ve,
        el: Te,
        debounce: Je = !0
      } = H;
      (X !== void 0 || de !== void 0) && he(X ?? 0, de ?? 0, 0, !1, ve), Te !== void 0 ? he(0, Te.offsetTop, Te.offsetHeight, Je, ve) : ye !== void 0 && Pe !== void 0 ? he(0, ye * Pe, Pe, Je, ve) : He === "bottom" ? he(0, Number.MAX_SAFE_INTEGER, 0, !1, ve) : He === "top" && he(0, 0, 0, !1, ve);
    }, ee = id(() => {
      t.container || Le({
        top: g.value,
        left: h.value
      });
    }), Ne = () => {
      ee.isDeactivated || lt();
    }, je = (H) => {
      if (ee.isDeactivated) return;
      const {
        onResize: q
      } = t;
      q && q(H), lt();
    }, oe = (H, q) => {
      if (!t.scrollable) return;
      const {
        value: X
      } = Z;
      X && (typeof H == "object" ? X.scrollBy(H) : X.scrollBy(H, q || 0));
    };
    function he(H, q, X, de, ye) {
      const {
        value: Pe
      } = Z;
      if (Pe) {
        if (de) {
          const {
            scrollTop: He,
            offsetHeight: ve
          } = Pe;
          if (q > He) {
            q + X <= He + ve || Pe.scrollTo({
              left: H,
              top: q + X - ve,
              behavior: ye
            });
            return;
          }
        }
        Pe.scrollTo({
          left: H,
          top: q,
          behavior: ye
        });
      }
    }
    function ae() {
      hr(), pe(), lt();
    }
    function Ze() {
      Pt();
    }
    function Pt() {
      cr(), vt();
    }
    function cr() {
      m !== void 0 && window.clearTimeout(m), m = window.setTimeout(() => {
        E.value = !1;
      }, t.duration);
    }
    function vt() {
      _ !== void 0 && window.clearTimeout(_), _ = window.setTimeout(() => {
        D.value = !1;
      }, t.duration);
    }
    function hr() {
      _ !== void 0 && window.clearTimeout(_), D.value = !0;
    }
    function pe() {
      m !== void 0 && window.clearTimeout(m), E.value = !0;
    }
    function we(H) {
      const {
        onScroll: q
      } = t;
      q && q(H), at();
    }
    function at() {
      const {
        value: H
      } = Z;
      H && (g.value = H.scrollTop, h.value = H.scrollLeft * (o != null && o.value ? -1 : 1));
    }
    function Mn() {
      const {
        value: H
      } = te;
      H && (d.value = H.offsetHeight, c.value = H.offsetWidth);
      const {
        value: q
      } = Z;
      q && (v.value = q.offsetHeight, y.value = q.offsetWidth);
      const {
        value: X
      } = f, {
        value: de
      } = u;
      X && (p.value = X.offsetWidth), de && (x.value = de.offsetHeight);
    }
    function Tt() {
      const {
        value: H
      } = Z;
      H && (g.value = H.scrollTop, h.value = H.scrollLeft * (o != null && o.value ? -1 : 1), v.value = H.offsetHeight, y.value = H.offsetWidth, d.value = H.scrollHeight, c.value = H.scrollWidth);
      const {
        value: q
      } = f, {
        value: X
      } = u;
      q && (p.value = q.offsetWidth), X && (x.value = X.offsetHeight);
    }
    function lt() {
      t.scrollable && (t.useUnifiedContainer ? Tt() : (Mn(), at()));
    }
    function jr(H) {
      var q;
      return !(!((q = a.value) === null || q === void 0) && q.contains(vn(H)));
    }
    function In(H) {
      H.preventDefault(), H.stopPropagation(), F = !0, Ce("mousemove", window, xr, !0), Ce("mouseup", window, Vr, !0), T = h.value, z = o != null && o.value ? window.innerWidth - H.clientX : H.clientX;
    }
    function xr(H) {
      if (!F) return;
      _ !== void 0 && window.clearTimeout(_), m !== void 0 && window.clearTimeout(m);
      const {
        value: q
      } = y, {
        value: X
      } = c, {
        value: de
      } = O;
      if (q === null || X === null) return;
      const Pe = (o != null && o.value ? window.innerWidth - H.clientX - z : H.clientX - z) * (X - q) / (q - de), He = X - q;
      let ve = T + Pe;
      ve = Math.min(He, ve), ve = Math.max(ve, 0);
      const {
        value: Te
      } = Z;
      if (Te) {
        Te.scrollLeft = ve * (o != null && o.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: Je
        } = t;
        Je && Je(ve);
      }
    }
    function Vr(H) {
      H.preventDefault(), H.stopPropagation(), ge("mousemove", window, xr, !0), ge("mouseup", window, Vr, !0), F = !1, lt(), jr(H) && Pt();
    }
    function _n(H) {
      H.preventDefault(), H.stopPropagation(), C = !0, Ce("mousemove", window, pr, !0), Ce("mouseup", window, vr, !0), A = g.value, j = H.clientY;
    }
    function pr(H) {
      if (!C) return;
      _ !== void 0 && window.clearTimeout(_), m !== void 0 && window.clearTimeout(m);
      const {
        value: q
      } = v, {
        value: X
      } = d, {
        value: de
      } = $;
      if (q === null || X === null) return;
      const Pe = (H.clientY - j) * (X - q) / (q - de), He = X - q;
      let ve = A + Pe;
      ve = Math.min(He, ve), ve = Math.max(ve, 0);
      const {
        value: Te
      } = Z;
      Te && (Te.scrollTop = ve);
    }
    function vr(H) {
      H.preventDefault(), H.stopPropagation(), ge("mousemove", window, pr, !0), ge("mouseup", window, vr, !0), C = !1, lt(), jr(H) && Pt();
    }
    Ke(() => {
      const {
        value: H
      } = Ee, {
        value: q
      } = ne, {
        value: X
      } = r, {
        value: de
      } = f, {
        value: ye
      } = u;
      de && (H ? de.classList.remove(`${X}-scrollbar-rail--disabled`) : de.classList.add(`${X}-scrollbar-rail--disabled`)), ye && (q ? ye.classList.remove(`${X}-scrollbar-rail--disabled`) : ye.classList.add(`${X}-scrollbar-rail--disabled`));
    }), ht(() => {
      t.container || lt();
    }), Ue(() => {
      _ !== void 0 && window.clearTimeout(_), m !== void 0 && window.clearTimeout(m), ge("mousemove", window, pr, !0), ge("mouseup", window, vr, !0);
    });
    const qr = k(() => {
      const {
        common: {
          cubicBezierEaseInOut: H
        },
        self: {
          color: q,
          colorHover: X,
          height: de,
          width: ye,
          borderRadius: Pe,
          railInsetHorizontalTop: He,
          railInsetHorizontalBottom: ve,
          railInsetVerticalRight: Te,
          railInsetVerticalLeft: Je,
          railColor: Kr
        }
      } = e.value;
      return {
        "--n-scrollbar-bezier": H,
        "--n-scrollbar-color": q,
        "--n-scrollbar-color-hover": X,
        "--n-scrollbar-border-radius": Pe,
        "--n-scrollbar-width": ye,
        "--n-scrollbar-height": de,
        "--n-scrollbar-rail-inset-horizontal-top": He,
        "--n-scrollbar-rail-inset-horizontal-bottom": ve,
        "--n-scrollbar-rail-inset-vertical-right": o != null && o.value ? po(Te) : Te,
        "--n-scrollbar-rail-inset-vertical-left": o != null && o.value ? po(Je) : Je,
        "--n-scrollbar-rail-color": Kr
      };
    }), mt = n ? Xe("scrollbar", void 0, qr, t) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Le,
      scrollBy: oe,
      sync: lt,
      syncUnifiedContainer: Tt,
      handleMouseEnterWrapper: ae,
      handleMouseLeaveWrapper: Ze
    }), {
      mergedClsPrefix: r,
      rtlEnabled: o,
      containerScrollTop: g,
      wrapperRef: a,
      containerRef: l,
      contentRef: s,
      yRailRef: u,
      xRailRef: f,
      needYBar: ne,
      needXBar: Ee,
      yBarSizePx: B,
      xBarSizePx: S,
      yBarTopPx: Q,
      xBarLeftPx: ue,
      isShowXBar: Ae,
      isShowYBar: Oe,
      isIos: R,
      handleScroll: we,
      handleContentResize: Ne,
      handleContainerResize: je,
      handleYScrollMouseDown: _n,
      handleXScrollMouseDown: In,
      cssVars: n ? void 0 : qr,
      themeClass: mt == null ? void 0 : mt.themeClass,
      onRender: mt == null ? void 0 : mt.onRender
    });
  },
  render() {
    var t;
    const {
      $slots: r,
      mergedClsPrefix: n,
      triggerDisplayManually: i,
      rtlEnabled: o,
      internalHoistYRail: a,
      yPlacement: l,
      xPlacement: s,
      xScrollable: u
    } = this;
    if (!this.scrollable) return (t = r.default) === null || t === void 0 ? void 0 : t.call(r);
    const f = this.trigger === "none", d = (y, x) => b("div", {
      ref: "yRailRef",
      class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`, `${n}-scrollbar-rail--vertical--${l}`, y],
      "data-scrollbar-rail": !0,
      style: [x || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, b(f ? co : At, f ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? b("div", {
        class: `${n}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), c = () => {
      var y, x;
      return (y = this.onRender) === null || y === void 0 || y.call(this), b("div", or(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${n}-scrollbar`, this.themeClass, o && `${n}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: i ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: i ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (x = r.default) === null || x === void 0 ? void 0 : x.call(r) : b("div", {
        role: "none",
        ref: "containerRef",
        class: [`${n}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, b(fi, {
        onResize: this.handleContentResize
      }, {
        default: () => b("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${n}-scrollbar-content`, this.contentClass]
        }, r)
      })), a ? null : d(void 0, void 0), u && b("div", {
        ref: "xRailRef",
        class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--horizontal`, `${n}-scrollbar-rail--horizontal--${s}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, b(f ? co : At, f ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? b("div", {
          class: `${n}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: o ? this.xBarLeftPx : void 0,
            left: o ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, v = this.container ? c() : b(fi, {
      onResize: this.handleContainerResize
    }, {
      default: c
    });
    return a ? b(ct, null, v, d(this.themeClass, this.cssVars)) : v;
  }
}), Hl = Nl, {
  cubicBezierEaseIn: ca,
  cubicBezierEaseOut: ha
} = Et;
function Ov({
  transformOrigin: t = "inherit",
  duration: r = ".2s",
  enterScale: n = ".9",
  originalTransform: i = "",
  originalTransition: o = ""
} = {}) {
  return [P("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: t,
    transition: `opacity ${r} ${ca}, transform ${r} ${ca} ${o && `,${o}`}`
  }), P("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: t,
    transition: `opacity ${r} ${ha}, transform ${r} ${ha} ${o && `,${o}`}`
  }), P("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${i} scale(${n})`
  }), P("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${i} scale(1)`
  })];
}
const kv = N("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), Mv = J({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    fr("-base-wave", kv, se(t, "clsPrefix"));
    const r = L(null), n = L(!1);
    let i = null;
    return Ue(() => {
      i !== null && window.clearTimeout(i);
    }), {
      active: n,
      selfRef: r,
      play() {
        i !== null && (window.clearTimeout(i), n.value = !1, i = null), hn(() => {
          var o;
          (o = r.value) === null || o === void 0 || o.offsetHeight, n.value = !0, i = window.setTimeout(() => {
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
    return b("div", {
      ref: "selfRef",
      "aria-hidden": !0,
      class: [`${t}-base-wave`, this.active && `${t}-base-wave--active`]
    });
  }
}), Iv = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function _v(t) {
  const {
    boxShadow2: r,
    popoverColor: n,
    textColor2: i,
    borderRadius: o,
    fontSize: a,
    dividerColor: l
  } = t;
  return Object.assign(Object.assign({}, Iv), {
    fontSize: a,
    borderRadius: o,
    color: n,
    dividerColor: l,
    textColor: i,
    boxShadow: r
  });
}
const Wl = {
  name: "Popover",
  common: Ye,
  self: _v
}, ei = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, De = "var(--n-arrow-height) * 1.414", Nv = P([N("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [P(">", [N("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), _e("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [_e("scrollable", [_e("show-header-or-footer", "padding: var(--n-padding);")])]), I("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), I("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), V("scrollable, show-header-or-footer", [I("content", `
 padding: var(--n-padding);
 `)])]), N("popover-shared", `
 transform-origin: inherit;
 `, [
  N("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [N("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${De});
 height: calc(${De});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
  // body transition
  P("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  P("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  P("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  P("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), Ve("top-start", `
 top: calc(${De} / -2);
 left: calc(${st("top-start")} - var(--v-offset-left));
 `), Ve("top", `
 top: calc(${De} / -2);
 transform: translateX(calc(${De} / -2)) rotate(45deg);
 left: 50%;
 `), Ve("top-end", `
 top: calc(${De} / -2);
 right: calc(${st("top-end")} + var(--v-offset-left));
 `), Ve("bottom-start", `
 bottom: calc(${De} / -2);
 left: calc(${st("bottom-start")} - var(--v-offset-left));
 `), Ve("bottom", `
 bottom: calc(${De} / -2);
 transform: translateX(calc(${De} / -2)) rotate(45deg);
 left: 50%;
 `), Ve("bottom-end", `
 bottom: calc(${De} / -2);
 right: calc(${st("bottom-end")} + var(--v-offset-left));
 `), Ve("left-start", `
 left: calc(${De} / -2);
 top: calc(${st("left-start")} - var(--v-offset-top));
 `), Ve("left", `
 left: calc(${De} / -2);
 transform: translateY(calc(${De} / -2)) rotate(45deg);
 top: 50%;
 `), Ve("left-end", `
 left: calc(${De} / -2);
 bottom: calc(${st("left-end")} + var(--v-offset-top));
 `), Ve("right-start", `
 right: calc(${De} / -2);
 top: calc(${st("right-start")} - var(--v-offset-top));
 `), Ve("right", `
 right: calc(${De} / -2);
 transform: translateY(calc(${De} / -2)) rotate(45deg);
 top: 50%;
 `), Ve("right-end", `
 right: calc(${De} / -2);
 bottom: calc(${st("right-end")} + var(--v-offset-top));
 `), ...Dx({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (t, r) => {
  const n = ["right", "left"].includes(r), i = n ? "width" : "height";
  return t.map((o) => {
    const a = o.split("-")[1] === "end", s = `calc((${`var(--v-target-${i}, 0px)`} - ${De}) / 2)`, u = st(o);
    return P(`[v-placement="${o}"] >`, [N("popover-shared", [V("center-arrow", [N("popover-arrow", `${r}: calc(max(${s}, ${u}) ${a ? "+" : "-"} var(--v-offset-${n ? "left" : "top"}));`)])])]);
  });
})]);
function st(t) {
  return ["top", "bottom"].includes(t.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function Ve(t, r) {
  const n = t.split("-")[0], i = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return P(`[v-placement="${t}"] >`, [N("popover-shared", `
 margin-${ei[n]}: var(--n-space);
 `, [V("show-arrow", `
 margin-${ei[n]}: var(--n-space-arrow);
 `), V("overlap", `
 margin: 0;
 `), Ju("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${ei[n]}: auto;
 ${i}
 `, [N("popover-arrow", r)])])]);
}
const Ll = Object.assign(Object.assign({}, fe.props), {
  to: nr.propTo,
  show: Boolean,
  trigger: String,
  showArrow: Boolean,
  delay: Number,
  duration: Number,
  raw: Boolean,
  arrowPointToCenter: Boolean,
  arrowClass: String,
  arrowStyle: [String, Object],
  arrowWrapperClass: String,
  arrowWrapperStyle: [String, Object],
  displayDirective: String,
  x: Number,
  y: Number,
  flip: Boolean,
  overlap: Boolean,
  placement: String,
  width: [Number, String],
  keepAliveOnHover: Boolean,
  scrollable: Boolean,
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  // private
  internalDeactivateImmediately: Boolean,
  animated: Boolean,
  onClickoutside: Function,
  internalTrapFocus: Boolean,
  internalOnAfterLeave: Function,
  // deprecated
  minWidth: Number,
  maxWidth: Number
});
function jl({
  arrowClass: t,
  arrowStyle: r,
  arrowWrapperClass: n,
  arrowWrapperStyle: i,
  clsPrefix: o
}) {
  return b("div", {
    key: "__popover-arrow__",
    style: i,
    class: [`${o}-popover-arrow-wrapper`, n]
  }, b("div", {
    class: [`${o}-popover-arrow`, t],
    style: r
  }));
}
const Hv = J({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: Ll,
  setup(t, {
    slots: r,
    attrs: n
  }) {
    const {
      namespaceRef: i,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: a
    } = Me(t), l = fe("Popover", "-popover", Nv, Wl, t, o), s = L(null), u = ie("NPopover"), f = L(null), d = L(t.show), c = L(!1);
    Ke(() => {
      const {
        show: m
      } = t;
      m && !Qu() && !t.internalDeactivateImmediately && (c.value = !0);
    });
    const v = k(() => {
      const {
        trigger: m,
        onClickoutside: A
      } = t, T = [], {
        positionManuallyRef: {
          value: z
        }
      } = u;
      return z || (m === "click" && !A && T.push([yo, C, void 0, {
        capture: !0
      }]), m === "hover" && T.push([gf, E])), A && T.push([yo, C, void 0, {
        capture: !0
      }]), (t.displayDirective === "show" || t.animated && c.value) && T.push([Aa, t.show]), T;
    }), y = k(() => {
      const {
        common: {
          cubicBezierEaseInOut: m,
          cubicBezierEaseIn: A,
          cubicBezierEaseOut: T
        },
        self: {
          space: z,
          spaceArrow: j,
          padding: R,
          fontSize: e,
          textColor: $,
          dividerColor: B,
          color: O,
          boxShadow: S,
          borderRadius: W,
          arrowHeight: Q,
          arrowOffset: Y,
          arrowOffsetVertical: ue
        }
      } = l.value;
      return {
        "--n-box-shadow": S,
        "--n-bezier": m,
        "--n-bezier-ease-in": A,
        "--n-bezier-ease-out": T,
        "--n-font-size": e,
        "--n-text-color": $,
        "--n-color": O,
        "--n-divider-color": B,
        "--n-border-radius": W,
        "--n-arrow-height": Q,
        "--n-arrow-offset": Y,
        "--n-arrow-offset-vertical": ue,
        "--n-padding": R,
        "--n-space": z,
        "--n-space-arrow": j
      };
    }), x = k(() => {
      const m = t.width === "trigger" ? void 0 : ft(t.width), A = [];
      m && A.push({
        width: m
      });
      const {
        maxWidth: T,
        minWidth: z
      } = t;
      return T && A.push({
        maxWidth: ft(T)
      }), z && A.push({
        maxWidth: ft(z)
      }), a || A.push(y.value), A;
    }), p = a ? Xe("popover", void 0, y, t) : void 0;
    u.setBodyInstance({
      syncPosition: g
    }), Ue(() => {
      u.setBodyInstance(null);
    }), Fe(se(t, "show"), (m) => {
      t.animated || (m ? d.value = !0 : d.value = !1);
    });
    function g() {
      var m;
      (m = s.value) === null || m === void 0 || m.syncPosition();
    }
    function h(m) {
      t.trigger === "hover" && t.keepAliveOnHover && t.show && u.handleMouseEnter(m);
    }
    function D(m) {
      t.trigger === "hover" && t.keepAliveOnHover && u.handleMouseLeave(m);
    }
    function E(m) {
      t.trigger === "hover" && !F().contains(vn(m)) && u.handleMouseMoveOutside(m);
    }
    function C(m) {
      (t.trigger === "click" && !F().contains(vn(m)) || t.onClickoutside) && u.handleClickOutside(m);
    }
    function F() {
      return u.getTriggerElement();
    }
    $e(Tn, f), $e(Oi, null), $e(Ri, null);
    function _() {
      if (p == null || p.onRender(), !(t.displayDirective === "show" || t.show || t.animated && c.value))
        return null;
      let A;
      const T = u.internalRenderBodyRef.value, {
        value: z
      } = o;
      if (T)
        A = T(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${z}-popover-shared`, p == null ? void 0 : p.themeClass.value, t.overlap && `${z}-popover-shared--overlap`, t.showArrow && `${z}-popover-shared--show-arrow`, t.arrowPointToCenter && `${z}-popover-shared--center-arrow`],
          f,
          x.value,
          h,
          D
        );
      else {
        const {
          value: j
        } = u.extraClassRef, {
          internalTrapFocus: R
        } = t, e = !oi(r.header) || !oi(r.footer), $ = () => {
          var B, O;
          const S = e ? b(ct, null, nt(r.header, (Y) => Y ? b("div", {
            class: [`${z}-popover__header`, t.headerClass],
            style: t.headerStyle
          }, Y) : null), nt(r.default, (Y) => Y ? b("div", {
            class: [`${z}-popover__content`, t.contentClass],
            style: t.contentStyle
          }, r) : null), nt(r.footer, (Y) => Y ? b("div", {
            class: [`${z}-popover__footer`, t.footerClass],
            style: t.footerStyle
          }, Y) : null)) : t.scrollable ? (B = r.default) === null || B === void 0 ? void 0 : B.call(r) : b("div", {
            class: [`${z}-popover__content`, t.contentClass],
            style: t.contentStyle
          }, r), W = t.scrollable ? b(Hl, {
            contentClass: e ? void 0 : `${z}-popover__content ${(O = t.contentClass) !== null && O !== void 0 ? O : ""}`,
            contentStyle: e ? void 0 : t.contentStyle
          }, {
            default: () => S
          }) : S, Q = t.showArrow ? jl({
            arrowClass: t.arrowClass,
            arrowStyle: t.arrowStyle,
            arrowWrapperClass: t.arrowWrapperClass,
            arrowWrapperStyle: t.arrowWrapperStyle,
            clsPrefix: z
          }) : null;
          return [W, Q];
        };
        A = b("div", or({
          class: [`${z}-popover`, `${z}-popover-shared`, p == null ? void 0 : p.themeClass.value, j.map((B) => `${z}-${B}`), {
            [`${z}-popover--scrollable`]: t.scrollable,
            [`${z}-popover--show-header-or-footer`]: e,
            [`${z}-popover--raw`]: t.raw,
            [`${z}-popover-shared--overlap`]: t.overlap,
            [`${z}-popover-shared--show-arrow`]: t.showArrow,
            [`${z}-popover-shared--center-arrow`]: t.arrowPointToCenter
          }],
          ref: f,
          style: x.value,
          onKeydown: u.handleKeydown,
          onMouseenter: h,
          onMouseleave: D
        }, n), R ? b(nd, {
          active: t.show,
          autoFocus: !0
        }, {
          default: $
        }) : $());
      }
      return Nr(A, v.value);
    }
    return {
      displayed: c,
      namespace: i,
      isMounted: u.isMountedRef,
      zIndex: u.zIndexRef,
      followerRef: s,
      adjustedTo: nr(t),
      followerEnabled: d,
      renderContentNode: _
    };
  },
  render() {
    return b(qa, {
      ref: "followerRef",
      zIndex: this.zIndex,
      show: this.show,
      enabled: this.followerEnabled,
      to: this.adjustedTo,
      x: this.x,
      y: this.y,
      flip: this.flip,
      placement: this.placement,
      containerClass: this.namespace,
      overlap: this.overlap,
      width: this.width === "trigger" ? "target" : void 0,
      teleportDisabled: this.adjustedTo === nr.tdkey
    }, {
      default: () => this.animated ? b(At, {
        name: "popover-transition",
        appear: this.isMounted,
        // Don't use watch to enable follower, since the transition may
        // make position sync timing very subtle and buggy.
        onEnter: () => {
          this.followerEnabled = !0;
        },
        onAfterLeave: () => {
          var t;
          (t = this.internalOnAfterLeave) === null || t === void 0 || t.call(this), this.followerEnabled = !1, this.displayed = !1;
        }
      }, {
        default: this.renderContentNode
      }) : this.renderContentNode()
    });
  }
}), Wv = Object.keys(Ll), Lv = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function jv(t, r, n) {
  Lv[r].forEach((i) => {
    t.props ? t.props = Object.assign({}, t.props) : t.props = {};
    const o = t.props[i], a = n[i];
    o ? t.props[i] = (...l) => {
      o(...l), a(...l);
    } : t.props[i] = a;
  });
}
const Ji = {
  show: {
    type: Boolean,
    default: void 0
  },
  defaultShow: Boolean,
  showArrow: {
    type: Boolean,
    default: !0
  },
  trigger: {
    type: String,
    default: "hover"
  },
  delay: {
    type: Number,
    default: 100
  },
  duration: {
    type: Number,
    default: 100
  },
  raw: Boolean,
  placement: {
    type: String,
    default: "top"
  },
  x: Number,
  y: Number,
  arrowPointToCenter: Boolean,
  disabled: Boolean,
  getDisabled: Function,
  displayDirective: {
    type: String,
    default: "if"
  },
  arrowClass: String,
  arrowStyle: [String, Object],
  arrowWrapperClass: String,
  arrowWrapperStyle: [String, Object],
  flip: {
    type: Boolean,
    default: !0
  },
  animated: {
    type: Boolean,
    default: !0
  },
  width: {
    type: [Number, String],
    default: void 0
  },
  overlap: Boolean,
  keepAliveOnHover: {
    type: Boolean,
    default: !0
  },
  zIndex: Number,
  to: nr.propTo,
  scrollable: Boolean,
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  // events
  onClickoutside: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  // internal
  internalDeactivateImmediately: Boolean,
  internalSyncTargetWithParent: Boolean,
  internalInheritedEventHandlers: {
    type: Array,
    default: () => []
  },
  internalTrapFocus: Boolean,
  internalExtraClass: {
    type: Array,
    default: () => []
  },
  // deprecated
  onShow: [Function, Array],
  onHide: [Function, Array],
  arrow: {
    type: Boolean,
    default: void 0
  },
  minWidth: Number,
  maxWidth: Number
}, Vv = Object.assign(Object.assign(Object.assign({}, fe.props), Ji), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), Vl = J({
  name: "Popover",
  inheritAttrs: !1,
  props: Vv,
  __popover__: !0,
  setup(t) {
    process.env.NODE_ENV !== "production" && Ke(() => {
      t.maxWidth !== void 0 && Ct("popover", "`max-width` is deprecated, please use `style` instead."), t.minWidth !== void 0 && Ct("popover", "`min-width` is deprecated, please use `style` instead."), t.arrow !== void 0 && Ct("popover", "`arrow` is deprecated, please use `showArrow` instead."), t.onHide !== void 0 && Ct("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), t.onShow !== void 0 && Ct("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const r = zi(), n = L(null), i = k(() => t.show), o = L(t.defaultShow), a = Pn(i, o), l = ke(() => t.disabled ? !1 : a.value), s = () => {
      if (t.disabled) return !0;
      const {
        getDisabled: B
      } = t;
      return !!(B != null && B());
    }, u = () => s() ? !1 : a.value, f = _a(t, ["arrow", "showArrow"]), d = k(() => t.overlap ? !1 : f.value);
    let c = null;
    const v = L(null), y = L(null), x = ke(() => t.x !== void 0 && t.y !== void 0);
    function p(B) {
      const {
        "onUpdate:show": O,
        onUpdateShow: S,
        onShow: W,
        onHide: Q
      } = t;
      o.value = B, O && le(O, B), S && le(S, B), B && W && le(W, !0), B && Q && le(Q, !1);
    }
    function g() {
      c && c.syncPosition();
    }
    function h() {
      const {
        value: B
      } = v;
      B && (window.clearTimeout(B), v.value = null);
    }
    function D() {
      const {
        value: B
      } = y;
      B && (window.clearTimeout(B), y.value = null);
    }
    function E() {
      const B = s();
      if (t.trigger === "focus" && !B) {
        if (u()) return;
        p(!0);
      }
    }
    function C() {
      const B = s();
      if (t.trigger === "focus" && !B) {
        if (!u()) return;
        p(!1);
      }
    }
    function F() {
      const B = s();
      if (t.trigger === "hover" && !B) {
        if (D(), v.value !== null || u()) return;
        const O = () => {
          p(!0), v.value = null;
        }, {
          delay: S
        } = t;
        S === 0 ? O() : v.value = window.setTimeout(O, S);
      }
    }
    function _() {
      const B = s();
      if (t.trigger === "hover" && !B) {
        if (h(), y.value !== null || !u()) return;
        const O = () => {
          p(!1), y.value = null;
        }, {
          duration: S
        } = t;
        S === 0 ? O() : y.value = window.setTimeout(O, S);
      }
    }
    function m() {
      _();
    }
    function A(B) {
      var O;
      u() && (t.trigger === "click" && (h(), D(), p(!1)), (O = t.onClickoutside) === null || O === void 0 || O.call(t, B));
    }
    function T() {
      if (t.trigger === "click" && !s()) {
        h(), D();
        const B = !u();
        p(B);
      }
    }
    function z(B) {
      t.internalTrapFocus && B.key === "Escape" && (h(), D(), p(!1));
    }
    function j(B) {
      o.value = B;
    }
    function R() {
      var B;
      return (B = n.value) === null || B === void 0 ? void 0 : B.targetRef;
    }
    function e(B) {
      c = B;
    }
    return $e("NPopover", {
      getTriggerElement: R,
      handleKeydown: z,
      handleMouseEnter: F,
      handleMouseLeave: _,
      handleClickOutside: A,
      handleMouseMoveOutside: m,
      setBodyInstance: e,
      positionManuallyRef: x,
      isMountedRef: r,
      zIndexRef: se(t, "zIndex"),
      extraClassRef: se(t, "internalExtraClass"),
      internalRenderBodyRef: se(t, "internalRenderBody")
    }), Ke(() => {
      a.value && s() && p(!1);
    }), {
      binderInstRef: n,
      positionManually: x,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: o,
      mergedShowArrow: d,
      getMergedShow: u,
      setShow: j,
      handleClick: T,
      handleMouseEnter: F,
      handleMouseLeave: _,
      handleFocus: E,
      handleBlur: C,
      syncPosition: g
    };
  },
  render() {
    var t;
    const {
      positionManually: r,
      $slots: n
    } = this;
    let i, o = !1;
    if (!r && (n.activator ? i = fo(n, "activator") : i = fo(n, "trigger"), i)) {
      i = eu(i), i = i.type === tu ? b("span", [i]) : i;
      const a = {
        onClick: this.handleClick,
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      };
      if (!((t = i.type) === null || t === void 0) && t.__popover__)
        o = !0, i.props || (i.props = {
          internalSyncTargetWithParent: !0,
          internalInheritedEventHandlers: []
        }), i.props.internalSyncTargetWithParent = !0, i.props.internalInheritedEventHandlers ? i.props.internalInheritedEventHandlers = [a, ...i.props.internalInheritedEventHandlers] : i.props.internalInheritedEventHandlers = [a];
      else {
        const {
          internalInheritedEventHandlers: l
        } = this, s = [a, ...l], u = {
          onBlur: (f) => {
            s.forEach((d) => {
              d.onBlur(f);
            });
          },
          onFocus: (f) => {
            s.forEach((d) => {
              d.onFocus(f);
            });
          },
          onClick: (f) => {
            s.forEach((d) => {
              d.onClick(f);
            });
          },
          onMouseenter: (f) => {
            s.forEach((d) => {
              d.onMouseenter(f);
            });
          },
          onMouseleave: (f) => {
            s.forEach((d) => {
              d.onMouseleave(f);
            });
          }
        };
        jv(i, l ? "nested" : r ? "manual" : this.trigger, u);
      }
    }
    return b(La, {
      ref: "binderInstRef",
      syncTarget: !o,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const a = this.getMergedShow();
        return [this.internalTrapFocus && a ? Nr(b("div", {
          style: {
            position: "fixed",
            inset: 0
          }
        }), [[Va, {
          enabled: a,
          zIndex: this.zIndex
        }]]) : null, r ? null : b(ja, null, {
          default: () => i
        }), b(Hv, Ea(this.$props, Wv, Object.assign(Object.assign({}, this.$attrs), {
          showArrow: this.mergedShowArrow,
          show: a
        })), {
          default: () => {
            var l, s;
            return (s = (l = this.$slots).default) === null || s === void 0 ? void 0 : s.call(l);
          },
          header: () => {
            var l, s;
            return (s = (l = this.$slots).header) === null || s === void 0 ? void 0 : s.call(l);
          },
          footer: () => {
            var l, s;
            return (s = (l = this.$slots).footer) === null || s === void 0 ? void 0 : s.call(l);
          }
        })];
      }
    });
  }
}), qv = N("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [P(">", [I("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [P("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), P("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), I("placeholder", `
 display: flex;
 `), I("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Dn({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), wi = J({
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
    return fr("-base-clear", qv, se(t, "clsPrefix")), {
      handleMouseDown(r) {
        r.preventDefault();
      }
    };
  },
  render() {
    const {
      clsPrefix: t
    } = this;
    return b("div", {
      class: `${t}-base-clear`
    }, b(Xi, null, {
      default: () => {
        var r, n;
        return this.show ? b("div", {
          key: "dismiss",
          class: `${t}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, Dr(this.$slots.icon, () => [b(Mr, {
          clsPrefix: t
        }, {
          default: () => b(Zp, null)
        })])) : b("div", {
          key: "icon",
          class: `${t}-base-clear__placeholder`
        }, (n = (r = this.$slots).placeholder) === null || n === void 0 ? void 0 : n.call(r));
      }
    }));
  }
}), Kv = J({
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
      return b(Yi, {
        clsPrefix: n,
        class: `${n}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: t.loading
      }, {
        default: () => t.showArrow ? b(wi, {
          clsPrefix: n,
          show: t.showClear,
          onClear: t.onClear
        }, {
          placeholder: () => b(Mr, {
            clsPrefix: n,
            class: `${n}-base-suffix__arrow`
          }, {
            default: () => Dr(r.default, () => [b(Yp, null)])
          })
        }) : null
      });
    };
  }
}), {
  cubicBezierEaseInOut: bt
} = Et;
function Gv({
  duration: t = ".2s",
  delay: r = ".1s"
} = {}) {
  return [P("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", {
    opacity: 1
  }), P("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), P("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${t} ${bt},
 max-width ${t} ${bt} ${r},
 margin-left ${t} ${bt} ${r},
 margin-right ${t} ${bt} ${r};
 `), P("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${t} ${bt} ${r},
 max-width ${t} ${bt},
 margin-left ${t} ${bt},
 margin-right ${t} ${bt};
 `)];
}
const {
  cubicBezierEaseInOut: et,
  cubicBezierEaseOut: Uv,
  cubicBezierEaseIn: Xv
} = Et;
function Yv({
  overflow: t = "hidden",
  duration: r = ".3s",
  originalTransition: n = "",
  leavingDelay: i = "0s",
  foldPadding: o = !1,
  enterToProps: a = void 0,
  leaveToProps: l = void 0,
  reverse: s = !1
} = {}) {
  const u = s ? "leave" : "enter", f = s ? "enter" : "leave";
  return [P(`&.fade-in-height-expand-transition-${f}-from,
 &.fade-in-height-expand-transition-${u}-to`, Object.assign(Object.assign({}, a), {
    opacity: 1
  })), P(`&.fade-in-height-expand-transition-${f}-to,
 &.fade-in-height-expand-transition-${u}-from`, Object.assign(Object.assign({}, l), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: o ? "0 !important" : void 0,
    paddingBottom: o ? "0 !important" : void 0
  })), P(`&.fade-in-height-expand-transition-${f}-active`, `
 overflow: ${t};
 transition:
 max-height ${r} ${et} ${i},
 opacity ${r} ${Uv} ${i},
 margin-top ${r} ${et} ${i},
 margin-bottom ${r} ${et} ${i},
 padding-top ${r} ${et} ${i},
 padding-bottom ${r} ${et} ${i}
 ${n ? `,${n}` : ""}
 `), P(`&.fade-in-height-expand-transition-${u}-active`, `
 overflow: ${t};
 transition:
 max-height ${r} ${et},
 opacity ${r} ${Xv},
 margin-top ${r} ${et},
 margin-bottom ${r} ${et},
 padding-top ${r} ${et},
 padding-bottom ${r} ${et}
 ${n ? `,${n}` : ""}
 `)];
}
const Zv = En && "chrome" in window;
En && navigator.userAgent.includes("Firefox");
const ql = En && navigator.userAgent.includes("Safari") && !Zv, Jv = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function Qv(t) {
  const {
    textColor2: r,
    textColor3: n,
    textColorDisabled: i,
    primaryColor: o,
    primaryColorHover: a,
    inputColor: l,
    inputColorDisabled: s,
    borderColor: u,
    warningColor: f,
    warningColorHover: d,
    errorColor: c,
    errorColorHover: v,
    borderRadius: y,
    lineHeight: x,
    fontSizeTiny: p,
    fontSizeSmall: g,
    fontSizeMedium: h,
    fontSizeLarge: D,
    heightTiny: E,
    heightSmall: C,
    heightMedium: F,
    heightLarge: _,
    actionColor: m,
    clearColor: A,
    clearColorHover: T,
    clearColorPressed: z,
    placeholderColor: j,
    placeholderColorDisabled: R,
    iconColor: e,
    iconColorDisabled: $,
    iconColorHover: B,
    iconColorPressed: O
  } = t;
  return Object.assign(Object.assign({}, Jv), {
    countTextColorDisabled: i,
    countTextColor: n,
    heightTiny: E,
    heightSmall: C,
    heightMedium: F,
    heightLarge: _,
    fontSizeTiny: p,
    fontSizeSmall: g,
    fontSizeMedium: h,
    fontSizeLarge: D,
    lineHeight: x,
    lineHeightTextarea: x,
    borderRadius: y,
    iconSize: "16px",
    groupLabelColor: m,
    groupLabelTextColor: r,
    textColor: r,
    textColorDisabled: i,
    textDecorationColor: r,
    caretColor: o,
    placeholderColor: j,
    placeholderColorDisabled: R,
    color: l,
    colorDisabled: s,
    colorFocus: l,
    groupLabelBorder: `1px solid ${u}`,
    border: `1px solid ${u}`,
    borderHover: `1px solid ${a}`,
    borderDisabled: `1px solid ${u}`,
    borderFocus: `1px solid ${a}`,
    boxShadowFocus: `0 0 0 2px ${wt(o, {
      alpha: 0.2
    })}`,
    loadingColor: o,
    // warning
    loadingColorWarning: f,
    borderWarning: `1px solid ${f}`,
    borderHoverWarning: `1px solid ${d}`,
    colorFocusWarning: l,
    borderFocusWarning: `1px solid ${d}`,
    boxShadowFocusWarning: `0 0 0 2px ${wt(f, {
      alpha: 0.2
    })}`,
    caretColorWarning: f,
    // error
    loadingColorError: c,
    borderError: `1px solid ${c}`,
    borderHoverError: `1px solid ${v}`,
    colorFocusError: l,
    borderFocusError: `1px solid ${v}`,
    boxShadowFocusError: `0 0 0 2px ${wt(c, {
      alpha: 0.2
    })}`,
    caretColorError: c,
    clearColor: A,
    clearColorHover: T,
    clearColorPressed: z,
    iconColor: e,
    iconColorDisabled: $,
    iconColorHover: B,
    iconColorPressed: O,
    suffixTextColor: r
  });
}
const Kl = {
  name: "Input",
  common: Ye,
  self: Qv
}, Gl = "n-input";
function em(t) {
  let r = 0;
  for (const n of t)
    r++;
  return r;
}
function on(t) {
  return t === "" || t == null;
}
function tm(t) {
  const r = L(null);
  function n() {
    const {
      value: a
    } = t;
    if (!(a != null && a.focus)) {
      o();
      return;
    }
    const {
      selectionStart: l,
      selectionEnd: s,
      value: u
    } = a;
    if (l == null || s == null) {
      o();
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
    var a;
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
      beforeText: d,
      afterText: c
    } = l;
    let v = u.length;
    if (u.endsWith(c))
      v = u.length - c.length;
    else if (u.startsWith(d))
      v = d.length;
    else {
      const y = d[f - 1], x = u.indexOf(y, f - 1);
      x !== -1 && (v = x + 1);
    }
    (a = s.setSelectionRange) === null || a === void 0 || a.call(s, v, v);
  }
  function o() {
    r.value = null;
  }
  return Fe(t, o), {
    recordCursor: n,
    restoreCursor: i
  };
}
const xa = J({
  name: "InputWordCount",
  setup(t, {
    slots: r
  }) {
    const {
      mergedValueRef: n,
      maxlengthRef: i,
      mergedClsPrefixRef: o,
      countGraphemesRef: a
    } = ie(Gl), l = k(() => {
      const {
        value: s
      } = n;
      return s === null || Array.isArray(s) ? 0 : (a.value || em)(s);
    });
    return () => {
      const {
        value: s
      } = i, {
        value: u
      } = n;
      return b("span", {
        class: `${o.value}-input-word-count`
      }, ii(r.default, {
        value: u === null || Array.isArray(u) ? "" : u
      }, () => [s === void 0 ? l.value : `${l.value} / ${s}`]));
    };
  }
}), rm = N("input", `
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
  I("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),
  I("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
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
  I("input-el, textarea-el", `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [P("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), P("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), P("&:-webkit-autofill ~", [I("placeholder", "display: none;")])]),
  V("round", [_e("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  I("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [P("span", `
 width: 100%;
 display: inline-block;
 `)]),
  V("textarea", [I("placeholder", "overflow: visible;")]),
  _e("autosize", "width: 100%;"),
  V("autosize", [I("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  N("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),
  I("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),
  I("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [P("&[type=password]::-ms-reveal", "display: none;"), P("+", [I("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  _e("textarea", [I("placeholder", "white-space: nowrap;")]),
  I("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  V("textarea", "width: 100%;", [N("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), V("resizable", [N("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), I("textarea-el, textarea-mirror, placeholder", `
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
 `), I("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
  // pair
  V("pair", [I("input-el, placeholder", "text-align: center;"), I("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [N("icon", `
 color: var(--n-icon-color);
 `), N("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  V("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [I("border", "border: var(--n-border-disabled);"), I("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), I("placeholder", "color: var(--n-placeholder-color-disabled);"), I("separator", "color: var(--n-text-color-disabled);", [N("icon", `
 color: var(--n-icon-color-disabled);
 `), N("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), N("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), I("suffix, prefix", "color: var(--n-text-color-disabled);", [N("icon", `
 color: var(--n-icon-color-disabled);
 `), N("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  _e("disabled", [I("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [P("&:hover", `
 color: var(--n-icon-color-hover);
 `), P("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), P("&:hover", [I("state-border", "border: var(--n-border-hover);")]), V("focus", "background-color: var(--n-color-focus);", [I("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),
  I("border, state-border", `
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
  I("state-border", `
 border-color: #0000;
 z-index: 1;
 `),
  I("prefix", "margin-right: 4px;"),
  I("suffix", `
 margin-left: 4px;
 `),
  I("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [N("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), N("base-clear", `
 font-size: var(--n-icon-size);
 `, [I("placeholder", [N("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), P(">", [N("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), N("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  N("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((t) => V(`${t}-status`, [_e("disabled", [N("base-loading", `
 color: var(--n-loading-color-${t})
 `), I("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${t});
 `), I("state-border", `
 border: var(--n-border-${t});
 `), P("&:hover", [I("state-border", `
 border: var(--n-border-hover-${t});
 `)]), P("&:focus", `
 background-color: var(--n-color-focus-${t});
 `, [I("state-border", `
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]), V("focus", `
 background-color: var(--n-color-focus-${t});
 `, [I("state-border", `
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))
]), nm = N("input", [V("disabled", [I("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]), im = Object.assign(Object.assign({}, fe.props), {
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
}), om = J({
  name: "Input",
  props: im,
  setup(t) {
    process.env.NODE_ENV !== "production" && Ke(() => {
      t.showPasswordToggle && Ct("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: r,
      mergedBorderedRef: n,
      inlineThemeDisabled: i,
      mergedRtlRef: o
    } = Me(t), a = fe("Input", "-input", rm, Kl, t, r);
    ql && fr("-input-safari", nm, r);
    const l = L(null), s = L(null), u = L(null), f = L(null), d = L(null), c = L(null), v = L(null), y = tm(v), x = L(null), {
      localeRef: p
    } = qp("Input"), g = L(t.defaultValue), h = se(t, "value"), D = Pn(h, g), E = rl(t), {
      mergedSizeRef: C,
      mergedDisabledRef: F,
      mergedStatusRef: _
    } = E, m = L(!1), A = L(!1), T = L(!1), z = L(!1);
    let j = null;
    const R = k(() => {
      const {
        placeholder: w,
        pair: M
      } = t;
      return M ? Array.isArray(w) ? w : w === void 0 ? ["", ""] : [w, w] : w === void 0 ? [p.value.placeholder] : [w];
    }), e = k(() => {
      const {
        value: w
      } = T, {
        value: M
      } = D, {
        value: U
      } = R;
      return !w && (on(M) || Array.isArray(M) && on(M[0])) && U[0];
    }), $ = k(() => {
      const {
        value: w
      } = T, {
        value: M
      } = D, {
        value: U
      } = R;
      return !w && U[1] && (on(M) || Array.isArray(M) && on(M[1]));
    }), B = ke(() => t.internalForceFocus || m.value), O = ke(() => {
      if (F.value || t.readonly || !t.clearable || !B.value && !A.value)
        return !1;
      const {
        value: w
      } = D, {
        value: M
      } = B;
      return t.pair ? !!(Array.isArray(w) && (w[0] || w[1])) && (A.value || M) : !!w && (A.value || M);
    }), S = k(() => {
      const {
        showPasswordOn: w
      } = t;
      if (w)
        return w;
      if (t.showPasswordToggle) return "click";
    }), W = L(!1), Q = k(() => {
      const {
        textDecoration: w
      } = t;
      return w ? Array.isArray(w) ? w.map((M) => ({
        textDecoration: M
      })) : [{
        textDecoration: w
      }] : ["", ""];
    }), Y = L(void 0), ue = () => {
      var w, M;
      if (t.type === "textarea") {
        const {
          autosize: U
        } = t;
        if (U && (Y.value = (M = (w = x.value) === null || w === void 0 ? void 0 : w.$el) === null || M === void 0 ? void 0 : M.offsetWidth), !s.value || typeof U == "boolean") return;
        const {
          paddingTop: xe,
          paddingBottom: be,
          lineHeight: ce
        } = window.getComputedStyle(s.value), zt = Number(xe.slice(0, -2)), Rt = Number(be.slice(0, -2)), Ot = Number(ce.slice(0, -2)), {
          value: mr
        } = u;
        if (!mr) return;
        if (U.minRows) {
          const gr = Math.max(U.minRows, 1), Nn = `${zt + Rt + Ot * gr}px`;
          mr.style.minHeight = Nn;
        }
        if (U.maxRows) {
          const gr = `${zt + Rt + Ot * U.maxRows}px`;
          mr.style.maxHeight = gr;
        }
      }
    }, ne = k(() => {
      const {
        maxlength: w
      } = t;
      return w === void 0 ? void 0 : Number(w);
    });
    ht(() => {
      const {
        value: w
      } = D;
      Array.isArray(w) || Te(w);
    });
    const Ee = _r().proxy;
    function Ae(w, M) {
      const {
        onUpdateValue: U,
        "onUpdate:value": xe,
        onInput: be
      } = t, {
        nTriggerFormInput: ce
      } = E;
      U && le(U, w, M), xe && le(xe, w, M), be && le(be, w, M), g.value = w, ce();
    }
    function Oe(w, M) {
      const {
        onChange: U
      } = t, {
        nTriggerFormChange: xe
      } = E;
      U && le(U, w, M), g.value = w, xe();
    }
    function Z(w) {
      const {
        onBlur: M
      } = t, {
        nTriggerFormBlur: U
      } = E;
      M && le(M, w), U();
    }
    function te(w) {
      const {
        onFocus: M
      } = t, {
        nTriggerFormFocus: U
      } = E;
      M && le(M, w), U();
    }
    function Le(w) {
      const {
        onClear: M
      } = t;
      M && le(M, w);
    }
    function ee(w) {
      const {
        onInputBlur: M
      } = t;
      M && le(M, w);
    }
    function Ne(w) {
      const {
        onInputFocus: M
      } = t;
      M && le(M, w);
    }
    function je() {
      const {
        onDeactivate: w
      } = t;
      w && le(w);
    }
    function oe() {
      const {
        onActivate: w
      } = t;
      w && le(w);
    }
    function he(w) {
      const {
        onClick: M
      } = t;
      M && le(M, w);
    }
    function ae(w) {
      const {
        onWrapperFocus: M
      } = t;
      M && le(M, w);
    }
    function Ze(w) {
      const {
        onWrapperBlur: M
      } = t;
      M && le(M, w);
    }
    function Pt() {
      T.value = !0;
    }
    function cr(w) {
      T.value = !1, w.target === c.value ? vt(w, 1) : vt(w, 0);
    }
    function vt(w, M = 0, U = "input") {
      const xe = w.target.value;
      if (Te(xe), w instanceof InputEvent && !w.isComposing && (T.value = !1), t.type === "textarea") {
        const {
          value: ce
        } = x;
        ce && ce.syncUnifiedContainer();
      }
      if (j = xe, T.value) return;
      y.recordCursor();
      const be = hr(xe);
      if (be)
        if (!t.pair)
          U === "input" ? Ae(xe, {
            source: M
          }) : Oe(xe, {
            source: M
          });
        else {
          let {
            value: ce
          } = D;
          Array.isArray(ce) ? ce = [ce[0], ce[1]] : ce = ["", ""], ce[M] = xe, U === "input" ? Ae(ce, {
            source: M
          }) : Oe(ce, {
            source: M
          });
        }
      Ee.$forceUpdate(), be || hn(y.restoreCursor);
    }
    function hr(w) {
      const {
        countGraphemes: M,
        maxlength: U,
        minlength: xe
      } = t;
      if (M) {
        let ce;
        if (U !== void 0 && (ce === void 0 && (ce = M(w)), ce > Number(U)) || xe !== void 0 && (ce === void 0 && (ce = M(w)), ce < Number(U)))
          return !1;
      }
      const {
        allowInput: be
      } = t;
      return typeof be == "function" ? be(w) : !0;
    }
    function pe(w) {
      ee(w), w.relatedTarget === l.value && je(), w.relatedTarget !== null && (w.relatedTarget === d.value || w.relatedTarget === c.value || w.relatedTarget === s.value) || (z.value = !1), Tt(w, "blur"), v.value = null;
    }
    function we(w, M) {
      Ne(w), m.value = !0, z.value = !0, oe(), Tt(w, "focus"), M === 0 ? v.value = d.value : M === 1 ? v.value = c.value : M === 2 && (v.value = s.value);
    }
    function at(w) {
      t.passivelyActivated && (Ze(w), Tt(w, "blur"));
    }
    function Mn(w) {
      t.passivelyActivated && (m.value = !0, ae(w), Tt(w, "focus"));
    }
    function Tt(w, M) {
      w.relatedTarget !== null && (w.relatedTarget === d.value || w.relatedTarget === c.value || w.relatedTarget === s.value || w.relatedTarget === l.value) || (M === "focus" ? (te(w), m.value = !0) : M === "blur" && (Z(w), m.value = !1));
    }
    function lt(w, M) {
      vt(w, M, "change");
    }
    function jr(w) {
      he(w);
    }
    function In(w) {
      Le(w), xr();
    }
    function xr() {
      t.pair ? (Ae(["", ""], {
        source: "clear"
      }), Oe(["", ""], {
        source: "clear"
      })) : (Ae("", {
        source: "clear"
      }), Oe("", {
        source: "clear"
      }));
    }
    function Vr(w) {
      const {
        onMousedown: M
      } = t;
      M && M(w);
      const {
        tagName: U
      } = w.target;
      if (U !== "INPUT" && U !== "TEXTAREA") {
        if (t.resizable) {
          const {
            value: xe
          } = l;
          if (xe) {
            const {
              left: be,
              top: ce,
              width: zt,
              height: Rt
            } = xe.getBoundingClientRect(), Ot = 14;
            if (be + zt - Ot < w.clientX && w.clientX < be + zt && ce + Rt - Ot < w.clientY && w.clientY < ce + Rt)
              return;
          }
        }
        w.preventDefault(), m.value || X();
      }
    }
    function _n() {
      var w;
      A.value = !0, t.type === "textarea" && ((w = x.value) === null || w === void 0 || w.handleMouseEnterWrapper());
    }
    function pr() {
      var w;
      A.value = !1, t.type === "textarea" && ((w = x.value) === null || w === void 0 || w.handleMouseLeaveWrapper());
    }
    function vr() {
      F.value || S.value === "click" && (W.value = !W.value);
    }
    function qr(w) {
      if (F.value) return;
      w.preventDefault();
      const M = (xe) => {
        xe.preventDefault(), ge("mouseup", document, M);
      };
      if (Ce("mouseup", document, M), S.value !== "mousedown") return;
      W.value = !0;
      const U = () => {
        W.value = !1, ge("mouseup", document, U);
      };
      Ce("mouseup", document, U);
    }
    function mt(w) {
      t.onKeyup && le(t.onKeyup, w);
    }
    function to(w) {
      switch (t.onKeydown && le(t.onKeydown, w), w.key) {
        case "Escape":
          q();
          break;
        case "Enter":
          H(w);
          break;
      }
    }
    function H(w) {
      var M, U;
      if (t.passivelyActivated) {
        const {
          value: xe
        } = z;
        if (xe) {
          t.internalDeactivateOnEnter && q();
          return;
        }
        w.preventDefault(), t.type === "textarea" ? (M = s.value) === null || M === void 0 || M.focus() : (U = d.value) === null || U === void 0 || U.focus();
      }
    }
    function q() {
      t.passivelyActivated && (z.value = !1, hn(() => {
        var w;
        (w = l.value) === null || w === void 0 || w.focus();
      }));
    }
    function X() {
      var w, M, U;
      F.value || (t.passivelyActivated ? (w = l.value) === null || w === void 0 || w.focus() : ((M = s.value) === null || M === void 0 || M.focus(), (U = d.value) === null || U === void 0 || U.focus()));
    }
    function de() {
      var w;
      !((w = l.value) === null || w === void 0) && w.contains(document.activeElement) && document.activeElement.blur();
    }
    function ye() {
      var w, M;
      (w = s.value) === null || w === void 0 || w.select(), (M = d.value) === null || M === void 0 || M.select();
    }
    function Pe() {
      F.value || (s.value ? s.value.focus() : d.value && d.value.focus());
    }
    function He() {
      const {
        value: w
      } = l;
      w != null && w.contains(document.activeElement) && w !== document.activeElement && q();
    }
    function ve(w) {
      if (t.type === "textarea") {
        const {
          value: M
        } = s;
        M == null || M.scrollTo(w);
      } else {
        const {
          value: M
        } = d;
        M == null || M.scrollTo(w);
      }
    }
    function Te(w) {
      const {
        type: M,
        pair: U,
        autosize: xe
      } = t;
      if (!U && xe)
        if (M === "textarea") {
          const {
            value: be
          } = u;
          be && (be.textContent = `${w ?? ""}\r
`);
        } else {
          const {
            value: be
          } = f;
          be && (w ? be.textContent = w : be.innerHTML = "&nbsp;");
        }
    }
    function Je() {
      ue();
    }
    const Kr = L({
      top: "0"
    });
    function as(w) {
      var M;
      const {
        scrollTop: U
      } = w.target;
      Kr.value.top = `${-U}px`, (M = x.value) === null || M === void 0 || M.syncUnifiedContainer();
    }
    let Gr = null;
    Ke(() => {
      const {
        autosize: w,
        type: M
      } = t;
      w && M === "textarea" ? Gr = Fe(D, (U) => {
        !Array.isArray(U) && U !== j && Te(U);
      }) : Gr == null || Gr();
    });
    let Ur = null;
    Ke(() => {
      t.type === "textarea" ? Ur = Fe(D, (w) => {
        var M;
        !Array.isArray(w) && w !== j && ((M = x.value) === null || M === void 0 || M.syncUnifiedContainer());
      }) : Ur == null || Ur();
    }), $e(Gl, {
      mergedValueRef: D,
      maxlengthRef: ne,
      mergedClsPrefixRef: r,
      countGraphemesRef: se(t, "countGraphemes")
    });
    const ls = {
      wrapperElRef: l,
      inputElRef: d,
      textareaElRef: s,
      isCompositing: T,
      clear: xr,
      focus: X,
      blur: de,
      select: ye,
      deactivate: He,
      activate: Pe,
      scrollTo: ve
    }, ss = dr("Input", o, r), ro = k(() => {
      const {
        value: w
      } = C, {
        common: {
          cubicBezierEaseInOut: M
        },
        self: {
          color: U,
          borderRadius: xe,
          textColor: be,
          caretColor: ce,
          caretColorError: zt,
          caretColorWarning: Rt,
          textDecorationColor: Ot,
          border: mr,
          borderDisabled: gr,
          borderHover: Nn,
          borderFocus: us,
          placeholderColor: fs,
          placeholderColorDisabled: ds,
          lineHeightTextarea: cs,
          colorDisabled: hs,
          colorFocus: xs,
          textColorDisabled: ps,
          boxShadowFocus: vs,
          iconSize: ms,
          colorFocusWarning: gs,
          boxShadowFocusWarning: bs,
          borderWarning: ys,
          borderFocusWarning: Cs,
          borderHoverWarning: ws,
          colorFocusError: Bs,
          boxShadowFocusError: As,
          borderError: Ds,
          borderFocusError: Ss,
          borderHoverError: Fs,
          clearSize: $s,
          clearColor: Es,
          clearColorHover: Ps,
          clearColorPressed: Ts,
          iconColor: zs,
          iconColorDisabled: Rs,
          suffixTextColor: Os,
          countTextColor: ks,
          countTextColorDisabled: Ms,
          iconColorHover: Is,
          iconColorPressed: _s,
          loadingColor: Ns,
          loadingColorError: Hs,
          loadingColorWarning: Ws,
          [K("padding", w)]: Ls,
          [K("fontSize", w)]: js,
          [K("height", w)]: Vs
        }
      } = a.value, {
        left: qs,
        right: Ks
      } = $a(Ls);
      return {
        "--n-bezier": M,
        "--n-count-text-color": ks,
        "--n-count-text-color-disabled": Ms,
        "--n-color": U,
        "--n-font-size": js,
        "--n-border-radius": xe,
        "--n-height": Vs,
        "--n-padding-left": qs,
        "--n-padding-right": Ks,
        "--n-text-color": be,
        "--n-caret-color": ce,
        "--n-text-decoration-color": Ot,
        "--n-border": mr,
        "--n-border-disabled": gr,
        "--n-border-hover": Nn,
        "--n-border-focus": us,
        "--n-placeholder-color": fs,
        "--n-placeholder-color-disabled": ds,
        "--n-icon-size": ms,
        "--n-line-height-textarea": cs,
        "--n-color-disabled": hs,
        "--n-color-focus": xs,
        "--n-text-color-disabled": ps,
        "--n-box-shadow-focus": vs,
        "--n-loading-color": Ns,
        // form warning
        "--n-caret-color-warning": Rt,
        "--n-color-focus-warning": gs,
        "--n-box-shadow-focus-warning": bs,
        "--n-border-warning": ys,
        "--n-border-focus-warning": Cs,
        "--n-border-hover-warning": ws,
        "--n-loading-color-warning": Ws,
        // form error
        "--n-caret-color-error": zt,
        "--n-color-focus-error": Bs,
        "--n-box-shadow-focus-error": As,
        "--n-border-error": Ds,
        "--n-border-focus-error": Ss,
        "--n-border-hover-error": Fs,
        "--n-loading-color-error": Hs,
        // clear-button
        "--n-clear-color": Es,
        "--n-clear-size": $s,
        "--n-clear-color-hover": Ps,
        "--n-clear-color-pressed": Ts,
        "--n-icon-color": zs,
        "--n-icon-color-hover": Is,
        "--n-icon-color-pressed": _s,
        "--n-icon-color-disabled": Rs,
        "--n-suffix-text-color": Os
      };
    }), Ut = i ? Xe("input", k(() => {
      const {
        value: w
      } = C;
      return w[0];
    }), ro, t) : void 0;
    return Object.assign(Object.assign({}, ls), {
      // DOM ref
      wrapperElRef: l,
      inputElRef: d,
      inputMirrorElRef: f,
      inputEl2Ref: c,
      textareaElRef: s,
      textareaMirrorElRef: u,
      textareaScrollbarInstRef: x,
      // value
      rtlEnabled: ss,
      uncontrolledValue: g,
      mergedValue: D,
      passwordVisible: W,
      mergedPlaceholder: R,
      showPlaceholder1: e,
      showPlaceholder2: $,
      mergedFocus: B,
      isComposing: T,
      activated: z,
      showClearButton: O,
      mergedSize: C,
      mergedDisabled: F,
      textDecorationStyle: Q,
      mergedClsPrefix: r,
      mergedBordered: n,
      mergedShowPasswordOn: S,
      placeholderStyle: Kr,
      mergedStatus: _,
      textAreaScrollContainerWidth: Y,
      // methods
      handleTextAreaScroll: as,
      handleCompositionStart: Pt,
      handleCompositionEnd: cr,
      handleInput: vt,
      handleInputBlur: pe,
      handleInputFocus: we,
      handleWrapperBlur: at,
      handleWrapperFocus: Mn,
      handleMouseEnter: _n,
      handleMouseLeave: pr,
      handleMouseDown: Vr,
      handleChange: lt,
      handleClick: jr,
      handleClear: In,
      handlePasswordToggleClick: vr,
      handlePasswordToggleMousedown: qr,
      handleWrapperKeydown: to,
      handleWrapperKeyup: mt,
      handleTextAreaMirrorResize: Je,
      getTextareaScrollContainer: () => s.value,
      mergedTheme: a,
      cssVars: i ? void 0 : ro,
      themeClass: Ut == null ? void 0 : Ut.themeClass,
      onRender: Ut == null ? void 0 : Ut.onRender
    });
  },
  render() {
    var t, r;
    const {
      mergedClsPrefix: n,
      mergedStatus: i,
      themeClass: o,
      type: a,
      countGraphemes: l,
      onRender: s
    } = this, u = this.$slots;
    return s == null || s(), b("div", {
      ref: "wrapperElRef",
      class: [`${n}-input`, o, i && `${n}-input--${i}-status`, {
        [`${n}-input--rtl`]: this.rtlEnabled,
        [`${n}-input--disabled`]: this.mergedDisabled,
        [`${n}-input--textarea`]: a === "textarea",
        [`${n}-input--resizable`]: this.resizable && !this.autosize,
        [`${n}-input--autosize`]: this.autosize,
        [`${n}-input--round`]: this.round && a !== "textarea",
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
    }, b("div", {
      class: `${n}-input-wrapper`
    }, nt(u.prefix, (f) => f && b("div", {
      class: `${n}-input__prefix`
    }, f)), a === "textarea" ? b(Nl, {
      ref: "textareaScrollbarInstRef",
      class: `${n}-input__textarea`,
      container: this.getTextareaScrollContainer,
      triggerDisplayManually: !0,
      useUnifiedContainer: !0,
      internalHoistYRail: !0
    }, {
      default: () => {
        var f, d;
        const {
          textAreaScrollContainerWidth: c
        } = this, v = {
          width: this.autosize && c && `${c}px`
        };
        return b(ct, null, b("textarea", Object.assign({}, this.inputProps, {
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
          style: [this.textDecorationStyle[0], (d = this.inputProps) === null || d === void 0 ? void 0 : d.style, v],
          onBlur: this.handleInputBlur,
          onFocus: (y) => {
            this.handleInputFocus(y, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? b("div", {
          class: `${n}-input__placeholder`,
          style: [this.placeholderStyle, v],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? b(fi, {
          onResize: this.handleTextAreaMirrorResize
        }, {
          default: () => b("div", {
            ref: "textareaMirrorElRef",
            class: `${n}-input__textarea-mirror`,
            key: "mirror"
          })
        }) : null);
      }
    }) : b("div", {
      class: `${n}-input__input`
    }, b("input", Object.assign({
      type: a === "password" && this.mergedShowPasswordOn && this.passwordVisible ? "text" : a
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
    })), this.showPlaceholder1 ? b("div", {
      class: `${n}-input__placeholder`
    }, b("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? b("div", {
      class: `${n}-input__input-mirror`,
      key: "mirror",
      ref: "inputMirrorElRef"
    }, " ") : null), !this.pair && nt(u.suffix, (f) => f || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? b("div", {
      class: `${n}-input__suffix`
    }, [nt(u["clear-icon-placeholder"], (d) => (this.clearable || d) && b(wi, {
      clsPrefix: n,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => d,
      icon: () => {
        var c, v;
        return (v = (c = this.$slots)["clear-icon"]) === null || v === void 0 ? void 0 : v.call(c);
      }
    })), this.internalLoadingBeforeSuffix ? null : f, this.loading !== void 0 ? b(Kv, {
      clsPrefix: n,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? f : null, this.showCount && this.type !== "textarea" ? b(xa, null, {
      default: (d) => {
        var c;
        return (c = u.count) === null || c === void 0 ? void 0 : c.call(u, d);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? b("div", {
      class: `${n}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? Dr(u["password-visible-icon"], () => [b(Mr, {
      clsPrefix: n
    }, {
      default: () => b(Up, null)
    })]) : Dr(u["password-invisible-icon"], () => [b(Mr, {
      clsPrefix: n
    }, {
      default: () => b(Xp, null)
    })])) : null]) : null)), this.pair ? b("span", {
      class: `${n}-input__separator`
    }, Dr(u.separator, () => [this.separator])) : null, this.pair ? b("div", {
      class: `${n}-input-wrapper`
    }, b("div", {
      class: `${n}-input__input`
    }, b("input", {
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
    }), this.showPlaceholder2 ? b("div", {
      class: `${n}-input__placeholder`
    }, b("span", null, this.mergedPlaceholder[1])) : null), nt(u.suffix, (f) => (this.clearable || f) && b("div", {
      class: `${n}-input__suffix`
    }, [this.clearable && b(wi, {
      clsPrefix: n,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      icon: () => {
        var d;
        return (d = u["clear-icon"]) === null || d === void 0 ? void 0 : d.call(u);
      },
      placeholder: () => {
        var d;
        return (d = u["clear-icon-placeholder"]) === null || d === void 0 ? void 0 : d.call(u);
      }
    }), f]))) : null, this.mergedBordered ? b("div", {
      class: `${n}-input__border`
    }) : null, this.mergedBordered ? b("div", {
      class: `${n}-input__state-border`
    }) : null, this.showCount && a === "textarea" ? b(xa, null, {
      default: (f) => {
        var d;
        const {
          renderCount: c
        } = this;
        return c ? c(f) : (d = u.count) === null || d === void 0 ? void 0 : d.call(u, f);
      }
    }) : null);
  }
}), am = N("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [P(">", [N("input", [P("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), P("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), N("button", [P("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [I("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), P("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [I("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), P("*", [P("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [P(">", [N("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), N("base-selection", [N("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), N("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), I("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), P("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [P(">", [N("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), N("base-selection", [N("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), N("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), I("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), lm = {}, sm = J({
  name: "InputGroup",
  props: lm,
  setup(t) {
    const {
      mergedClsPrefixRef: r
    } = Me(t);
    return fr("-input-group", am, r), {
      mergedClsPrefix: r
    };
  },
  render() {
    const {
      mergedClsPrefix: t
    } = this;
    return b("div", {
      class: `${t}-input-group`
    }, this.$slots);
  }
}), um = N("input-group-label", `
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
`, [I("border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]), fm = Object.assign(Object.assign({}, fe.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
}), dm = J({
  name: "InputGroupLabel",
  props: fm,
  setup(t) {
    const {
      mergedBorderedRef: r,
      mergedClsPrefixRef: n,
      inlineThemeDisabled: i
    } = Me(t), o = fe("Input", "-input-group-label", um, Kl, t, n), a = k(() => {
      const {
        size: s
      } = t, {
        common: {
          cubicBezierEaseInOut: u
        },
        self: {
          groupLabelColor: f,
          borderRadius: d,
          groupLabelTextColor: c,
          lineHeight: v,
          groupLabelBorder: y,
          [K("fontSize", s)]: x,
          [K("height", s)]: p
        }
      } = o.value;
      return {
        "--n-bezier": u,
        "--n-group-label-color": f,
        "--n-group-label-border": y,
        "--n-border-radius": d,
        "--n-group-label-text-color": c,
        "--n-font-size": x,
        "--n-line-height": v,
        "--n-height": p
      };
    }), l = i ? Xe("input-group-label", k(() => t.size[0]), a, t) : void 0;
    return {
      mergedClsPrefix: n,
      mergedBordered: r,
      cssVars: i ? void 0 : a,
      themeClass: l == null ? void 0 : l.themeClass,
      onRender: l == null ? void 0 : l.onRender
    };
  },
  render() {
    var t, r, n;
    const {
      mergedClsPrefix: i
    } = this;
    return (t = this.onRender) === null || t === void 0 || t.call(this), b("div", {
      class: [`${i}-input-group-label`, this.themeClass],
      style: this.cssVars
    }, (n = (r = this.$slots).default) === null || n === void 0 ? void 0 : n.call(r), this.mergedBordered ? b("div", {
      class: `${i}-input-group-label__border`
    }) : null);
  }
});
function kt(t) {
  return qe(t, [255, 255, 255, 0.16]);
}
function an(t) {
  return qe(t, [0, 0, 0, 0.12]);
}
const cm = "n-button-group", hm = {
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
function xm(t) {
  const {
    heightTiny: r,
    heightSmall: n,
    heightMedium: i,
    heightLarge: o,
    borderRadius: a,
    fontSizeTiny: l,
    fontSizeSmall: s,
    fontSizeMedium: u,
    fontSizeLarge: f,
    opacityDisabled: d,
    textColor2: c,
    textColor3: v,
    primaryColorHover: y,
    primaryColorPressed: x,
    borderColor: p,
    primaryColor: g,
    baseColor: h,
    infoColor: D,
    infoColorHover: E,
    infoColorPressed: C,
    successColor: F,
    successColorHover: _,
    successColorPressed: m,
    warningColor: A,
    warningColorHover: T,
    warningColorPressed: z,
    errorColor: j,
    errorColorHover: R,
    errorColorPressed: e,
    fontWeight: $,
    buttonColor2: B,
    buttonColor2Hover: O,
    buttonColor2Pressed: S,
    fontWeightStrong: W
  } = t;
  return Object.assign(Object.assign({}, hm), {
    heightTiny: r,
    heightSmall: n,
    heightMedium: i,
    heightLarge: o,
    borderRadiusTiny: a,
    borderRadiusSmall: a,
    borderRadiusMedium: a,
    borderRadiusLarge: a,
    fontSizeTiny: l,
    fontSizeSmall: s,
    fontSizeMedium: u,
    fontSizeLarge: f,
    opacityDisabled: d,
    // secondary
    colorOpacitySecondary: "0.16",
    colorOpacitySecondaryHover: "0.22",
    colorOpacitySecondaryPressed: "0.28",
    colorSecondary: B,
    colorSecondaryHover: O,
    colorSecondaryPressed: S,
    // tertiary
    colorTertiary: B,
    colorTertiaryHover: O,
    colorTertiaryPressed: S,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: O,
    colorQuaternaryPressed: S,
    // default type
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: c,
    textColorTertiary: v,
    textColorHover: y,
    textColorPressed: x,
    textColorFocus: y,
    textColorDisabled: c,
    textColorText: c,
    textColorTextHover: y,
    textColorTextPressed: x,
    textColorTextFocus: y,
    textColorTextDisabled: c,
    textColorGhost: c,
    textColorGhostHover: y,
    textColorGhostPressed: x,
    textColorGhostFocus: y,
    textColorGhostDisabled: c,
    border: `1px solid ${p}`,
    borderHover: `1px solid ${y}`,
    borderPressed: `1px solid ${x}`,
    borderFocus: `1px solid ${y}`,
    borderDisabled: `1px solid ${p}`,
    rippleColor: g,
    // primary
    colorPrimary: g,
    colorHoverPrimary: y,
    colorPressedPrimary: x,
    colorFocusPrimary: y,
    colorDisabledPrimary: g,
    textColorPrimary: h,
    textColorHoverPrimary: h,
    textColorPressedPrimary: h,
    textColorFocusPrimary: h,
    textColorDisabledPrimary: h,
    textColorTextPrimary: g,
    textColorTextHoverPrimary: y,
    textColorTextPressedPrimary: x,
    textColorTextFocusPrimary: y,
    textColorTextDisabledPrimary: c,
    textColorGhostPrimary: g,
    textColorGhostHoverPrimary: y,
    textColorGhostPressedPrimary: x,
    textColorGhostFocusPrimary: y,
    textColorGhostDisabledPrimary: g,
    borderPrimary: `1px solid ${g}`,
    borderHoverPrimary: `1px solid ${y}`,
    borderPressedPrimary: `1px solid ${x}`,
    borderFocusPrimary: `1px solid ${y}`,
    borderDisabledPrimary: `1px solid ${g}`,
    rippleColorPrimary: g,
    // info
    colorInfo: D,
    colorHoverInfo: E,
    colorPressedInfo: C,
    colorFocusInfo: E,
    colorDisabledInfo: D,
    textColorInfo: h,
    textColorHoverInfo: h,
    textColorPressedInfo: h,
    textColorFocusInfo: h,
    textColorDisabledInfo: h,
    textColorTextInfo: D,
    textColorTextHoverInfo: E,
    textColorTextPressedInfo: C,
    textColorTextFocusInfo: E,
    textColorTextDisabledInfo: c,
    textColorGhostInfo: D,
    textColorGhostHoverInfo: E,
    textColorGhostPressedInfo: C,
    textColorGhostFocusInfo: E,
    textColorGhostDisabledInfo: D,
    borderInfo: `1px solid ${D}`,
    borderHoverInfo: `1px solid ${E}`,
    borderPressedInfo: `1px solid ${C}`,
    borderFocusInfo: `1px solid ${E}`,
    borderDisabledInfo: `1px solid ${D}`,
    rippleColorInfo: D,
    // success
    colorSuccess: F,
    colorHoverSuccess: _,
    colorPressedSuccess: m,
    colorFocusSuccess: _,
    colorDisabledSuccess: F,
    textColorSuccess: h,
    textColorHoverSuccess: h,
    textColorPressedSuccess: h,
    textColorFocusSuccess: h,
    textColorDisabledSuccess: h,
    textColorTextSuccess: F,
    textColorTextHoverSuccess: _,
    textColorTextPressedSuccess: m,
    textColorTextFocusSuccess: _,
    textColorTextDisabledSuccess: c,
    textColorGhostSuccess: F,
    textColorGhostHoverSuccess: _,
    textColorGhostPressedSuccess: m,
    textColorGhostFocusSuccess: _,
    textColorGhostDisabledSuccess: F,
    borderSuccess: `1px solid ${F}`,
    borderHoverSuccess: `1px solid ${_}`,
    borderPressedSuccess: `1px solid ${m}`,
    borderFocusSuccess: `1px solid ${_}`,
    borderDisabledSuccess: `1px solid ${F}`,
    rippleColorSuccess: F,
    // warning
    colorWarning: A,
    colorHoverWarning: T,
    colorPressedWarning: z,
    colorFocusWarning: T,
    colorDisabledWarning: A,
    textColorWarning: h,
    textColorHoverWarning: h,
    textColorPressedWarning: h,
    textColorFocusWarning: h,
    textColorDisabledWarning: h,
    textColorTextWarning: A,
    textColorTextHoverWarning: T,
    textColorTextPressedWarning: z,
    textColorTextFocusWarning: T,
    textColorTextDisabledWarning: c,
    textColorGhostWarning: A,
    textColorGhostHoverWarning: T,
    textColorGhostPressedWarning: z,
    textColorGhostFocusWarning: T,
    textColorGhostDisabledWarning: A,
    borderWarning: `1px solid ${A}`,
    borderHoverWarning: `1px solid ${T}`,
    borderPressedWarning: `1px solid ${z}`,
    borderFocusWarning: `1px solid ${T}`,
    borderDisabledWarning: `1px solid ${A}`,
    rippleColorWarning: A,
    // error
    colorError: j,
    colorHoverError: R,
    colorPressedError: e,
    colorFocusError: R,
    colorDisabledError: j,
    textColorError: h,
    textColorHoverError: h,
    textColorPressedError: h,
    textColorFocusError: h,
    textColorDisabledError: h,
    textColorTextError: j,
    textColorTextHoverError: R,
    textColorTextPressedError: e,
    textColorTextFocusError: R,
    textColorTextDisabledError: c,
    textColorGhostError: j,
    textColorGhostHoverError: R,
    textColorGhostPressedError: e,
    textColorGhostFocusError: R,
    textColorGhostDisabledError: j,
    borderError: `1px solid ${j}`,
    borderHoverError: `1px solid ${R}`,
    borderPressedError: `1px solid ${e}`,
    borderFocusError: `1px solid ${R}`,
    borderDisabledError: `1px solid ${j}`,
    rippleColorError: j,
    waveOpacity: "0.6",
    fontWeight: $,
    fontWeightStrong: W
  });
}
const pm = {
  name: "Button",
  common: Ye,
  self: xm
}, vm = P([N("button", `
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
 `, [V("color", [I("border", {
  borderColor: "var(--n-border-color)"
}), V("disabled", [I("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), _e("disabled", [P("&:focus", [I("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), P("&:hover", [I("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), P("&:active", [I("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), V("pressed", [I("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), V("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [I("border", {
  border: "var(--n-border-disabled)"
})]), _e("disabled", [P("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [I("state-border", {
  border: "var(--n-border-focus)"
})]), P("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [I("state-border", {
  border: "var(--n-border-hover)"
})]), P("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [I("state-border", {
  border: "var(--n-border-pressed)"
})]), V("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [I("state-border", {
  border: "var(--n-border-pressed)"
})])]), V("loading", "cursor: wait;"), N("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [V("active", {
  zIndex: 1,
  animationName: "button-wave-spread, button-wave-opacity"
})]), En && "MozBoxSizing" in document.createElement("div").style ? P("&::moz-focus-inner", {
  border: 0
}) : null, I("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), I("border", {
  border: "var(--n-border)"
}), I("state-border", {
  border: "var(--n-border)",
  borderColor: "#0000",
  zIndex: 1
}), I("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [N("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [Dn({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), Gv()]), I("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [P("~", [I("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), V("block", `
 display: flex;
 width: 100%;
 `), V("dashed", [I("border, state-border", {
  borderStyle: "dashed !important"
})]), V("disabled", {
  cursor: "not-allowed",
  opacity: "var(--n-opacity-disabled)"
})]), P("@keyframes button-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
  }
}), P("@keyframes button-wave-opacity", {
  from: {
    opacity: "var(--n-wave-opacity)"
  },
  to: {
    opacity: 0
  }
})]), mm = Object.assign(Object.assign({}, fe.props), {
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
    default: !ql
  }
}), gm = J({
  name: "Button",
  props: mm,
  setup(t) {
    process.env.NODE_ENV !== "production" && Ke(() => {
      const {
        dashed: C,
        ghost: F,
        text: _,
        secondary: m,
        tertiary: A,
        quaternary: T
      } = t;
      (C || F || _) && (m || A || T) && Ct("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const r = L(null), n = L(null), i = L(!1), o = ke(() => !t.quaternary && !t.tertiary && !t.secondary && !t.text && (!t.color || t.ghost || t.dashed) && t.bordered), a = ie(cm, {}), {
      mergedSizeRef: l
    } = rl({}, {
      defaultSize: "medium",
      mergedSize: (C) => {
        const {
          size: F
        } = t;
        if (F) return F;
        const {
          size: _
        } = a;
        if (_) return _;
        const {
          mergedSize: m
        } = C || {};
        return m ? m.value : "medium";
      }
    }), s = k(() => t.focusable && !t.disabled), u = (C) => {
      var F;
      s.value || C.preventDefault(), !t.nativeFocusBehavior && (C.preventDefault(), !t.disabled && s.value && ((F = r.value) === null || F === void 0 || F.focus({
        preventScroll: !0
      })));
    }, f = (C) => {
      var F;
      if (!t.disabled && !t.loading) {
        const {
          onClick: _
        } = t;
        _ && le(_, C), t.text || (F = n.value) === null || F === void 0 || F.play();
      }
    }, d = (C) => {
      switch (C.key) {
        case "Enter":
          if (!t.keyboard)
            return;
          i.value = !1;
      }
    }, c = (C) => {
      switch (C.key) {
        case "Enter":
          if (!t.keyboard || t.loading) {
            C.preventDefault();
            return;
          }
          i.value = !0;
      }
    }, v = () => {
      i.value = !1;
    }, {
      inlineThemeDisabled: y,
      mergedClsPrefixRef: x,
      mergedRtlRef: p
    } = Me(t), g = fe("Button", "-button", vm, pm, t, x), h = dr("Button", p, x), D = k(() => {
      const C = g.value, {
        common: {
          cubicBezierEaseInOut: F,
          cubicBezierEaseOut: _
        },
        self: m
      } = C, {
        rippleDuration: A,
        opacityDisabled: T,
        fontWeight: z,
        fontWeightStrong: j
      } = m, R = l.value, {
        dashed: e,
        type: $,
        ghost: B,
        text: O,
        color: S,
        round: W,
        circle: Q,
        textColor: Y,
        secondary: ue,
        tertiary: ne,
        quaternary: Ee,
        strong: Ae
      } = t, Oe = {
        "--n-font-weight": Ae ? j : z
      };
      let Z = {
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
      const te = $ === "tertiary", Le = $ === "default", ee = te ? "default" : $;
      if (O) {
        const pe = Y || S;
        Z = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": pe || m[K("textColorText", ee)],
          "--n-text-color-hover": pe ? kt(pe) : m[K("textColorTextHover", ee)],
          "--n-text-color-pressed": pe ? an(pe) : m[K("textColorTextPressed", ee)],
          "--n-text-color-focus": pe ? kt(pe) : m[K("textColorTextHover", ee)],
          "--n-text-color-disabled": pe || m[K("textColorTextDisabled", ee)]
        };
      } else if (B || e) {
        const pe = Y || S;
        Z = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": S || m[K("rippleColor", ee)],
          "--n-text-color": pe || m[K("textColorGhost", ee)],
          "--n-text-color-hover": pe ? kt(pe) : m[K("textColorGhostHover", ee)],
          "--n-text-color-pressed": pe ? an(pe) : m[K("textColorGhostPressed", ee)],
          "--n-text-color-focus": pe ? kt(pe) : m[K("textColorGhostHover", ee)],
          "--n-text-color-disabled": pe || m[K("textColorGhostDisabled", ee)]
        };
      } else if (ue) {
        const pe = Le ? m.textColor : te ? m.textColorTertiary : m[K("color", ee)], we = S || pe, at = $ !== "default" && $ !== "tertiary";
        Z = {
          "--n-color": at ? wt(we, {
            alpha: Number(m.colorOpacitySecondary)
          }) : m.colorSecondary,
          "--n-color-hover": at ? wt(we, {
            alpha: Number(m.colorOpacitySecondaryHover)
          }) : m.colorSecondaryHover,
          "--n-color-pressed": at ? wt(we, {
            alpha: Number(m.colorOpacitySecondaryPressed)
          }) : m.colorSecondaryPressed,
          "--n-color-focus": at ? wt(we, {
            alpha: Number(m.colorOpacitySecondaryHover)
          }) : m.colorSecondaryHover,
          "--n-color-disabled": m.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": we,
          "--n-text-color-hover": we,
          "--n-text-color-pressed": we,
          "--n-text-color-focus": we,
          "--n-text-color-disabled": we
        };
      } else if (ne || Ee) {
        const pe = Le ? m.textColor : te ? m.textColorTertiary : m[K("color", ee)], we = S || pe;
        ne ? (Z["--n-color"] = m.colorTertiary, Z["--n-color-hover"] = m.colorTertiaryHover, Z["--n-color-pressed"] = m.colorTertiaryPressed, Z["--n-color-focus"] = m.colorSecondaryHover, Z["--n-color-disabled"] = m.colorTertiary) : (Z["--n-color"] = m.colorQuaternary, Z["--n-color-hover"] = m.colorQuaternaryHover, Z["--n-color-pressed"] = m.colorQuaternaryPressed, Z["--n-color-focus"] = m.colorQuaternaryHover, Z["--n-color-disabled"] = m.colorQuaternary), Z["--n-ripple-color"] = "#0000", Z["--n-text-color"] = we, Z["--n-text-color-hover"] = we, Z["--n-text-color-pressed"] = we, Z["--n-text-color-focus"] = we, Z["--n-text-color-disabled"] = we;
      } else
        Z = {
          "--n-color": S || m[K("color", ee)],
          "--n-color-hover": S ? kt(S) : m[K("colorHover", ee)],
          "--n-color-pressed": S ? an(S) : m[K("colorPressed", ee)],
          "--n-color-focus": S ? kt(S) : m[K("colorFocus", ee)],
          "--n-color-disabled": S || m[K("colorDisabled", ee)],
          "--n-ripple-color": S || m[K("rippleColor", ee)],
          "--n-text-color": Y || (S ? m.textColorPrimary : te ? m.textColorTertiary : m[K("textColor", ee)]),
          "--n-text-color-hover": Y || (S ? m.textColorHoverPrimary : m[K("textColorHover", ee)]),
          "--n-text-color-pressed": Y || (S ? m.textColorPressedPrimary : m[K("textColorPressed", ee)]),
          "--n-text-color-focus": Y || (S ? m.textColorFocusPrimary : m[K("textColorFocus", ee)]),
          "--n-text-color-disabled": Y || (S ? m.textColorDisabledPrimary : m[K("textColorDisabled", ee)])
        };
      let Ne = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      O ? Ne = {
        "--n-border": "none",
        "--n-border-hover": "none",
        "--n-border-pressed": "none",
        "--n-border-focus": "none",
        "--n-border-disabled": "none"
      } : Ne = {
        "--n-border": m[K("border", ee)],
        "--n-border-hover": m[K("borderHover", ee)],
        "--n-border-pressed": m[K("borderPressed", ee)],
        "--n-border-focus": m[K("borderFocus", ee)],
        "--n-border-disabled": m[K("borderDisabled", ee)]
      };
      const {
        [K("height", R)]: je,
        [K("fontSize", R)]: oe,
        [K("padding", R)]: he,
        [K("paddingRound", R)]: ae,
        [K("iconSize", R)]: Ze,
        [K("borderRadius", R)]: Pt,
        [K("iconMargin", R)]: cr,
        waveOpacity: vt
      } = m, hr = {
        "--n-width": Q && !O ? je : "initial",
        "--n-height": O ? "initial" : je,
        "--n-font-size": oe,
        "--n-padding": Q || O ? "initial" : W ? ae : he,
        "--n-icon-size": Ze,
        "--n-icon-margin": cr,
        "--n-border-radius": O ? "initial" : Q || W ? je : Pt
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": F,
        "--n-bezier-ease-out": _,
        "--n-ripple-duration": A,
        "--n-opacity-disabled": T,
        "--n-wave-opacity": vt
      }, Oe), Z), Ne), hr);
    }), E = y ? Xe("button", k(() => {
      let C = "";
      const {
        dashed: F,
        type: _,
        ghost: m,
        text: A,
        color: T,
        round: z,
        circle: j,
        textColor: R,
        secondary: e,
        tertiary: $,
        quaternary: B,
        strong: O
      } = t;
      F && (C += "a"), m && (C += "b"), A && (C += "c"), z && (C += "d"), j && (C += "e"), e && (C += "f"), $ && (C += "g"), B && (C += "h"), O && (C += "i"), T && (C += `j${xo(T)}`), R && (C += `k${xo(R)}`);
      const {
        value: S
      } = l;
      return C += `l${S[0]}`, C += `m${_[0]}`, C;
    }), D, t) : void 0;
    return {
      selfElRef: r,
      waveElRef: n,
      mergedClsPrefix: x,
      mergedFocusable: s,
      mergedSize: l,
      showBorder: o,
      enterPressed: i,
      rtlEnabled: h,
      handleMousedown: u,
      handleKeydown: c,
      handleBlur: v,
      handleKeyup: d,
      handleClick: f,
      customColorCssVars: k(() => {
        const {
          color: C
        } = t;
        if (!C) return null;
        const F = kt(C);
        return {
          "--n-border-color": C,
          "--n-border-color-hover": F,
          "--n-border-color-pressed": an(C),
          "--n-border-color-focus": F,
          "--n-border-color-disabled": C
        };
      }),
      cssVars: y ? void 0 : D,
      themeClass: E == null ? void 0 : E.themeClass,
      onRender: E == null ? void 0 : E.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: t,
      tag: r,
      onRender: n
    } = this;
    n == null || n();
    const i = nt(this.$slots.default, (o) => o && b("span", {
      class: `${t}-button__content`
    }, o));
    return b(r, {
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
    }, this.iconPlacement === "right" && i, b(Ol, {
      width: !0
    }, {
      default: () => nt(this.$slots.icon, (o) => (this.loading || this.renderIcon || o) && b("span", {
        class: `${t}-button__icon`,
        style: {
          margin: oi(this.$slots.default) ? "0" : ""
        }
      }, b(Xi, null, {
        default: () => this.loading ? b(Yi, {
          clsPrefix: t,
          key: "loading",
          class: `${t}-icon-slot`,
          strokeWidth: 20
        }) : b("div", {
          key: "icon",
          class: `${t}-icon-slot`,
          role: "none"
        }, this.renderIcon ? this.renderIcon() : o)
      })))
    }), this.iconPlacement === "left" && i, this.text ? null : b(Mv, {
      ref: "waveElRef",
      clsPrefix: t
    }), this.showBorder ? b("div", {
      "aria-hidden": !0,
      class: `${t}-button__border`,
      style: this.customColorCssVars
    }) : null, this.showBorder ? b("div", {
      "aria-hidden": !0,
      class: `${t}-button__state-border`,
      style: this.customColorCssVars
    }) : null);
  }
});
function bm(t) {
  const {
    fontWeight: r,
    textColor1: n,
    textColor2: i,
    textColorDisabled: o,
    dividerColor: a,
    fontSize: l
  } = t;
  return {
    titleFontSize: l,
    titleFontWeight: r,
    dividerColor: a,
    titleTextColor: n,
    titleTextColorDisabled: o,
    fontSize: l,
    textColor: i,
    arrowColor: i,
    arrowColorDisabled: o,
    itemMargin: "16px 0 0 0",
    titlePadding: "16px 0 0 0"
  };
}
const ym = {
  name: "Collapse",
  common: Ye,
  self: bm
}, Cm = N("collapse", "width: 100%;", [N("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [V("disabled", [I("header", "cursor: not-allowed;", [I("header-main", `
 color: var(--n-title-text-color-disabled);
 `), N("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), N("collapse-item", "margin-left: 32px;"), P("&:first-child", "margin-top: 0;"), P("&:first-child >", [I("header", "padding-top: 0;")]), V("left-arrow-placement", [I("header", [N("collapse-item-arrow", "margin-right: 4px;")])]), V("right-arrow-placement", [I("header", [N("collapse-item-arrow", "margin-left: 4px;")])]), I("content-wrapper", [I("content-inner", "padding-top: 16px;"), Yv({
  duration: "0.15s"
})]), V("active", [I("header", [V("active", [N("collapse-item-arrow", "transform: rotate(90deg);")])])]), P("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), _e("disabled", [V("trigger-area-main", [I("header", [I("header-main", "cursor: pointer;"), N("collapse-item-arrow", "cursor: default;")])]), V("trigger-area-arrow", [I("header", [N("collapse-item-arrow", "cursor: pointer;")])]), V("trigger-area-extra", [I("header", [I("header-extra", "cursor: pointer;")])])]), I("header", `
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `, [I("header-main", `
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), I("header-extra", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), N("collapse-item-arrow", `
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]), wm = Object.assign(Object.assign({}, fe.props), {
  defaultExpandedNames: {
    type: [Array, String],
    default: null
  },
  expandedNames: [Array, String],
  arrowPlacement: {
    type: String,
    default: "left"
  },
  accordion: {
    type: Boolean,
    default: !1
  },
  displayDirective: {
    type: String,
    default: "if"
  },
  triggerAreas: {
    type: Array,
    default: () => ["main", "extra", "arrow"]
  },
  onItemHeaderClick: [Function, Array],
  "onUpdate:expandedNames": [Function, Array],
  onUpdateExpandedNames: [Function, Array],
  // deprecated
  onExpandedNamesChange: {
    type: [Function, Array],
    validator: () => (process.env.NODE_ENV !== "production" && Dt("collapse", "`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead."), !0),
    default: void 0
  }
}), Ul = "n-collapse", Bm = J({
  name: "Collapse",
  props: wm,
  setup(t, {
    slots: r
  }) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: i,
      mergedRtlRef: o
    } = Me(t), a = L(t.defaultExpandedNames), l = k(() => t.expandedNames), s = Pn(l, a), u = fe("Collapse", "-collapse", Cm, ym, t, n);
    function f(p) {
      const {
        "onUpdate:expandedNames": g,
        onUpdateExpandedNames: h,
        onExpandedNamesChange: D
      } = t;
      h && le(h, p), g && le(g, p), D && le(D, p), a.value = p;
    }
    function d(p) {
      const {
        onItemHeaderClick: g
      } = t;
      g && le(g, p);
    }
    function c(p, g, h) {
      const {
        accordion: D
      } = t, {
        value: E
      } = s;
      if (D)
        p ? (f([g]), d({
          name: g,
          expanded: !0,
          event: h
        })) : (f([]), d({
          name: g,
          expanded: !1,
          event: h
        }));
      else if (!Array.isArray(E))
        f([g]), d({
          name: g,
          expanded: !0,
          event: h
        });
      else {
        const C = E.slice(), F = C.findIndex((_) => g === _);
        ~F ? (C.splice(F, 1), f(C), d({
          name: g,
          expanded: !1,
          event: h
        })) : (C.push(g), f(C), d({
          name: g,
          expanded: !0,
          event: h
        }));
      }
    }
    $e(Ul, {
      props: t,
      mergedClsPrefixRef: n,
      expandedNamesRef: s,
      slots: r,
      toggleItem: c
    });
    const v = dr("Collapse", o, n), y = k(() => {
      const {
        common: {
          cubicBezierEaseInOut: p
        },
        self: {
          titleFontWeight: g,
          dividerColor: h,
          titlePadding: D,
          titleTextColor: E,
          titleTextColorDisabled: C,
          textColor: F,
          arrowColor: _,
          fontSize: m,
          titleFontSize: A,
          arrowColorDisabled: T,
          itemMargin: z
        }
      } = u.value;
      return {
        "--n-font-size": m,
        "--n-bezier": p,
        "--n-text-color": F,
        "--n-divider-color": h,
        "--n-title-padding": D,
        "--n-title-font-size": A,
        "--n-title-text-color": E,
        "--n-title-text-color-disabled": C,
        "--n-title-font-weight": g,
        "--n-arrow-color": _,
        "--n-arrow-color-disabled": T,
        "--n-item-margin": z
      };
    }), x = i ? Xe("collapse", void 0, y, t) : void 0;
    return {
      rtlEnabled: v,
      mergedTheme: u,
      mergedClsPrefix: n,
      cssVars: i ? void 0 : y,
      themeClass: x == null ? void 0 : x.themeClass,
      onRender: x == null ? void 0 : x.onRender
    };
  },
  render() {
    var t;
    return (t = this.onRender) === null || t === void 0 || t.call(this), b("div", {
      class: [`${this.mergedClsPrefix}-collapse`, this.rtlEnabled && `${this.mergedClsPrefix}-collapse--rtl`, this.themeClass],
      style: this.cssVars
    }, this.$slots);
  }
}), Am = J({
  name: "CollapseItemContent",
  props: {
    displayDirective: {
      type: String,
      required: !0
    },
    show: Boolean,
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    return {
      onceTrue: Ma(se(t, "show"))
    };
  },
  render() {
    return b(Ol, null, {
      default: () => {
        const {
          show: t,
          displayDirective: r,
          onceTrue: n,
          clsPrefix: i
        } = this, o = r === "show" && n, a = b("div", {
          class: `${i}-collapse-item__content-wrapper`
        }, b("div", {
          class: `${i}-collapse-item__content-inner`
        }, this.$slots));
        return o ? Nr(a, [[Aa, t]]) : t ? a : null;
      }
    });
  }
}), Dm = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
}, Sm = J({
  name: "CollapseItem",
  props: Dm,
  setup(t) {
    const {
      mergedRtlRef: r
    } = Me(t), n = mn(), i = ke(() => {
      var c;
      return (c = t.name) !== null && c !== void 0 ? c : n;
    }), o = ie(Ul);
    o || Ti("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
    const {
      expandedNamesRef: a,
      props: l,
      mergedClsPrefixRef: s,
      slots: u
    } = o, f = k(() => {
      const {
        value: c
      } = a;
      if (Array.isArray(c)) {
        const {
          value: v
        } = i;
        return !~c.findIndex((y) => y === v);
      } else if (c) {
        const {
          value: v
        } = i;
        return v !== c;
      }
      return !0;
    });
    return {
      rtlEnabled: dr("Collapse", r, s),
      collapseSlots: u,
      randomName: n,
      mergedClsPrefix: s,
      collapsed: f,
      triggerAreas: se(l, "triggerAreas"),
      mergedDisplayDirective: k(() => {
        const {
          displayDirective: c
        } = t;
        return c || l.displayDirective;
      }),
      arrowPlacement: k(() => l.arrowPlacement),
      handleClick(c) {
        let v = "main";
        pn(c, "arrow") && (v = "arrow"), pn(c, "extra") && (v = "extra"), l.triggerAreas.includes(v) && o && !t.disabled && o.toggleItem(f.value, i.value, c);
      }
    };
  },
  render() {
    const {
      collapseSlots: t,
      $slots: r,
      arrowPlacement: n,
      collapsed: i,
      mergedDisplayDirective: o,
      mergedClsPrefix: a,
      disabled: l,
      triggerAreas: s
    } = this, u = ii(r.header, {
      collapsed: i
    }, () => [this.title]), f = r["header-extra"] || t["header-extra"], d = r.arrow || t.arrow;
    return b("div", {
      class: [`${a}-collapse-item`, `${a}-collapse-item--${n}-arrow-placement`, l && `${a}-collapse-item--disabled`, !i && `${a}-collapse-item--active`, s.map((c) => `${a}-collapse-item--trigger-area-${c}`)]
    }, b("div", {
      class: [`${a}-collapse-item__header`, !i && `${a}-collapse-item__header--active`]
    }, b("div", {
      class: `${a}-collapse-item__header-main`,
      onClick: this.handleClick
    }, n === "right" && u, b("div", {
      class: `${a}-collapse-item-arrow`,
      key: this.rtlEnabled ? 0 : 1,
      "data-arrow": !0
    }, ii(d, {
      collapsed: i
    }, () => {
      var c;
      return [b(Mr, {
        clsPrefix: a
      }, {
        default: (c = t.expandIcon) !== null && c !== void 0 ? c : () => this.rtlEnabled ? b(Gp, null) : b(Rl, null)
      })];
    })), n === "left" && u), Fu(f, {
      collapsed: i
    }, (c) => b("div", {
      class: `${a}-collapse-item__header-extra`,
      onClick: this.handleClick,
      "data-extra": !0
    }, c))), b(Am, {
      clsPrefix: a,
      displayDirective: o,
      show: !i
    }, r));
  }
}), Fm = {
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
    validator: () => (Dt("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, $m = J({
  name: "ConfigProvider",
  alias: ["App"],
  props: Fm,
  setup(t) {
    const r = ie(dt, null), n = k(() => {
      const {
        theme: p
      } = t;
      if (p === null) return;
      const g = r == null ? void 0 : r.mergedThemeRef.value;
      return p === void 0 ? g : g === void 0 ? p : Object.assign({}, g, p);
    }), i = k(() => {
      const {
        themeOverrides: p
      } = t;
      if (p !== null) {
        if (p === void 0)
          return r == null ? void 0 : r.mergedThemeOverridesRef.value;
        {
          const g = r == null ? void 0 : r.mergedThemeOverridesRef.value;
          return g === void 0 ? p : Cr({}, g, p);
        }
      }
    }), o = ke(() => {
      const {
        namespace: p
      } = t;
      return p === void 0 ? r == null ? void 0 : r.mergedNamespaceRef.value : p;
    }), a = ke(() => {
      const {
        bordered: p
      } = t;
      return p === void 0 ? r == null ? void 0 : r.mergedBorderedRef.value : p;
    }), l = k(() => {
      const {
        icons: p
      } = t;
      return p === void 0 ? r == null ? void 0 : r.mergedIconsRef.value : p;
    }), s = k(() => {
      const {
        componentOptions: p
      } = t;
      return p !== void 0 ? p : r == null ? void 0 : r.mergedComponentPropsRef.value;
    }), u = k(() => {
      const {
        clsPrefix: p
      } = t;
      return p !== void 0 ? p : r ? r.mergedClsPrefixRef.value : yi;
    }), f = k(() => {
      var p;
      const {
        rtl: g
      } = t;
      if (g === void 0)
        return r == null ? void 0 : r.mergedRtlRef.value;
      const h = {};
      for (const D of g)
        h[D.name] = no(D), (p = D.peers) === null || p === void 0 || p.forEach((E) => {
          E.name in h || (h[E.name] = no(E));
        });
      return h;
    }), d = k(() => t.breakpoints || (r == null ? void 0 : r.mergedBreakpointsRef.value)), c = t.inlineThemeDisabled || (r == null ? void 0 : r.inlineThemeDisabled), v = t.preflightStyleDisabled || (r == null ? void 0 : r.preflightStyleDisabled), y = t.styleMountTarget || (r == null ? void 0 : r.styleMountTarget), x = k(() => {
      const {
        value: p
      } = n, {
        value: g
      } = i, h = g && Object.keys(g).length !== 0, D = p == null ? void 0 : p.name;
      return D ? h ? `${D}-${Tr(JSON.stringify(i.value))}` : D : h ? Tr(JSON.stringify(i.value)) : "";
    });
    return $e(dt, {
      mergedThemeHashRef: x,
      mergedBreakpointsRef: d,
      mergedRtlRef: f,
      mergedIconsRef: l,
      mergedComponentPropsRef: s,
      mergedBorderedRef: a,
      mergedNamespaceRef: o,
      mergedClsPrefixRef: u,
      mergedLocaleRef: k(() => {
        const {
          locale: p
        } = t;
        if (p !== null)
          return p === void 0 ? r == null ? void 0 : r.mergedLocaleRef.value : p;
      }),
      mergedDateLocaleRef: k(() => {
        const {
          dateLocale: p
        } = t;
        if (p !== null)
          return p === void 0 ? r == null ? void 0 : r.mergedDateLocaleRef.value : p;
      }),
      mergedHljsRef: k(() => {
        const {
          hljs: p
        } = t;
        return p === void 0 ? r == null ? void 0 : r.mergedHljsRef.value : p;
      }),
      mergedKatexRef: k(() => {
        const {
          katex: p
        } = t;
        return p === void 0 ? r == null ? void 0 : r.mergedKatexRef.value : p;
      }),
      mergedThemeRef: n,
      mergedThemeOverridesRef: i,
      inlineThemeDisabled: c || !1,
      preflightStyleDisabled: v || !1,
      styleMountTarget: y
    }), {
      mergedClsPrefix: u,
      mergedBordered: a,
      mergedNamespace: o,
      mergedTheme: n,
      mergedThemeOverrides: i
    };
  },
  render() {
    var t, r, n, i;
    return this.abstract ? (i = (n = this.$slots).default) === null || i === void 0 ? void 0 : i.call(n) : b(this.as || this.tag, {
      class: `${this.mergedClsPrefix || yi}-config-provider`
    }, (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t));
  }
}), Em = {
  padding: "4px 0",
  optionIconSizeSmall: "14px",
  optionIconSizeMedium: "16px",
  optionIconSizeLarge: "16px",
  optionIconSizeHuge: "18px",
  optionSuffixWidthSmall: "14px",
  optionSuffixWidthMedium: "14px",
  optionSuffixWidthLarge: "16px",
  optionSuffixWidthHuge: "16px",
  optionIconSuffixWidthSmall: "32px",
  optionIconSuffixWidthMedium: "32px",
  optionIconSuffixWidthLarge: "36px",
  optionIconSuffixWidthHuge: "36px",
  optionPrefixWidthSmall: "14px",
  optionPrefixWidthMedium: "14px",
  optionPrefixWidthLarge: "16px",
  optionPrefixWidthHuge: "16px",
  optionIconPrefixWidthSmall: "36px",
  optionIconPrefixWidthMedium: "36px",
  optionIconPrefixWidthLarge: "40px",
  optionIconPrefixWidthHuge: "40px"
};
function Pm(t) {
  const {
    primaryColor: r,
    textColor2: n,
    dividerColor: i,
    hoverColor: o,
    popoverColor: a,
    invertedColor: l,
    borderRadius: s,
    fontSizeSmall: u,
    fontSizeMedium: f,
    fontSizeLarge: d,
    fontSizeHuge: c,
    heightSmall: v,
    heightMedium: y,
    heightLarge: x,
    heightHuge: p,
    textColor3: g,
    opacityDisabled: h
  } = t;
  return Object.assign(Object.assign({}, Em), {
    optionHeightSmall: v,
    optionHeightMedium: y,
    optionHeightLarge: x,
    optionHeightHuge: p,
    borderRadius: s,
    fontSizeSmall: u,
    fontSizeMedium: f,
    fontSizeLarge: d,
    fontSizeHuge: c,
    // non-inverted
    optionTextColor: n,
    optionTextColorHover: n,
    optionTextColorActive: r,
    optionTextColorChildActive: r,
    color: a,
    dividerColor: i,
    suffixColor: n,
    prefixColor: n,
    optionColorHover: o,
    optionColorActive: wt(r, {
      alpha: 0.1
    }),
    groupHeaderTextColor: g,
    // inverted
    optionTextColorInverted: "#BBB",
    optionTextColorHoverInverted: "#FFF",
    optionTextColorActiveInverted: "#FFF",
    optionTextColorChildActiveInverted: "#FFF",
    colorInverted: l,
    dividerColorInverted: "#BBB",
    suffixColorInverted: "#BBB",
    prefixColorInverted: "#BBB",
    optionColorHoverInverted: r,
    optionColorActiveInverted: r,
    groupHeaderTextColorInverted: "#AAA",
    optionOpacityDisabled: h
  });
}
const Tm = {
  name: "Dropdown",
  common: Ye,
  peers: {
    Popover: Wl
  },
  self: Pm
}, Xl = J({
  name: "DropdownDivider",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  render() {
    return b("div", {
      class: `${this.clsPrefix}-dropdown-divider`
    });
  }
});
function zm(t) {
  const {
    textColorBase: r,
    opacity1: n,
    opacity2: i,
    opacity3: o,
    opacity4: a,
    opacity5: l
  } = t;
  return {
    color: r,
    opacity1Depth: n,
    opacity2Depth: i,
    opacity3Depth: o,
    opacity4Depth: a,
    opacity5Depth: l
  };
}
const Rm = {
  name: "Icon",
  common: Ye,
  self: zm
}, Om = N("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [V("color-transition", {
  transition: "color .3s var(--n-bezier)"
}), V("depth", {
  color: "var(--n-color)"
}, [P("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), P("svg", {
  height: "1em",
  width: "1em"
})]), km = Object.assign(Object.assign({}, fe.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), Qi = J({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: km,
  setup(t) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n
    } = Me(t), i = fe("Icon", "-icon", Om, Rm, t, r), o = k(() => {
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
          [`opacity${l}Depth`]: d
        } = u;
        return {
          "--n-bezier": s,
          "--n-color": f,
          "--n-opacity": d
        };
      }
      return {
        "--n-bezier": s,
        "--n-color": "",
        "--n-opacity": ""
      };
    }), a = n ? Xe("icon", k(() => `${t.depth || "d"}`), o, t) : void 0;
    return {
      mergedClsPrefix: r,
      mergedStyle: k(() => {
        const {
          size: l,
          color: s
        } = t;
        return {
          fontSize: ft(l),
          color: s
        };
      }),
      cssVars: n ? void 0 : o,
      themeClass: a == null ? void 0 : a.themeClass,
      onRender: a == null ? void 0 : a.onRender
    };
  },
  render() {
    var t;
    const {
      $parent: r,
      depth: n,
      mergedClsPrefix: i,
      component: o,
      onRender: a,
      themeClass: l
    } = this;
    return !((t = r == null ? void 0 : r.$options) === null || t === void 0) && t._n_icon__ && Dt("icon", "don't wrap `n-icon` inside `n-icon`"), a == null || a(), b("i", or(this.$attrs, {
      role: "img",
      class: [`${i}-icon`, l, {
        [`${i}-icon--depth`]: n,
        [`${i}-icon--color-transition`]: n !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), o ? b(o) : this.$slots);
  }
}), eo = "n-dropdown-menu", kn = "n-dropdown", pa = "n-dropdown-option";
function Bi(t, r) {
  return t.type === "submenu" || t.type === void 0 && t[r] !== void 0;
}
function Mm(t) {
  return t.type === "group";
}
function Yl(t) {
  return t.type === "divider";
}
function Im(t) {
  return t.type === "render";
}
const Zl = J({
  name: "DropdownOption",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    tmNode: {
      type: Object,
      required: !0
    },
    parentKey: {
      type: [String, Number],
      default: null
    },
    placement: {
      type: String,
      default: "right-start"
    },
    props: Object,
    scrollable: Boolean
  },
  setup(t) {
    const r = ie(kn), {
      hoverKeyRef: n,
      keyboardKeyRef: i,
      lastToggledSubmenuKeyRef: o,
      pendingKeyPathRef: a,
      activeKeyPathRef: l,
      animatedRef: s,
      mergedShowRef: u,
      renderLabelRef: f,
      renderIconRef: d,
      labelFieldRef: c,
      childrenFieldRef: v,
      renderOptionRef: y,
      nodePropsRef: x,
      menuPropsRef: p
    } = r, g = ie(pa, null), h = ie(eo), D = ie(Tn), E = k(() => t.tmNode.rawNode), C = k(() => {
      const {
        value: S
      } = v;
      return Bi(t.tmNode.rawNode, S);
    }), F = k(() => {
      const {
        disabled: S
      } = t.tmNode;
      return S;
    }), _ = k(() => {
      if (!C.value) return !1;
      const {
        key: S,
        disabled: W
      } = t.tmNode;
      if (W) return !1;
      const {
        value: Q
      } = n, {
        value: Y
      } = i, {
        value: ue
      } = o, {
        value: ne
      } = a;
      return Q !== null ? ne.includes(S) : Y !== null ? ne.includes(S) && ne[ne.length - 1] !== S : ue !== null ? ne.includes(S) : !1;
    }), m = k(() => i.value === null && !s.value), A = tf(_, 300, m), T = k(() => !!(g != null && g.enteringSubmenuRef.value)), z = L(!1);
    $e(pa, {
      enteringSubmenuRef: z
    });
    function j() {
      z.value = !0;
    }
    function R() {
      z.value = !1;
    }
    function e() {
      const {
        parentKey: S,
        tmNode: W
      } = t;
      W.disabled || u.value && (o.value = S, i.value = null, n.value = W.key);
    }
    function $() {
      const {
        tmNode: S
      } = t;
      S.disabled || u.value && n.value !== S.key && e();
    }
    function B(S) {
      if (t.tmNode.disabled || !u.value) return;
      const {
        relatedTarget: W
      } = S;
      W && !pn({
        target: W
      }, "dropdownOption") && !pn({
        target: W
      }, "scrollbarRail") && (n.value = null);
    }
    function O() {
      const {
        value: S
      } = C, {
        tmNode: W
      } = t;
      u.value && !S && !W.disabled && (r.doSelect(W.key, W.rawNode), r.doUpdateShow(!1));
    }
    return {
      labelField: c,
      renderLabel: f,
      renderIcon: d,
      siblingHasIcon: h.showIconRef,
      siblingHasSubmenu: h.hasSubmenuRef,
      menuProps: p,
      popoverBody: D,
      animated: s,
      mergedShowSubmenu: k(() => A.value && !T.value),
      rawNode: E,
      hasSubmenu: C,
      pending: ke(() => {
        const {
          value: S
        } = a, {
          key: W
        } = t.tmNode;
        return S.includes(W);
      }),
      childActive: ke(() => {
        const {
          value: S
        } = l, {
          key: W
        } = t.tmNode, Q = S.findIndex((Y) => W === Y);
        return Q === -1 ? !1 : Q < S.length - 1;
      }),
      active: ke(() => {
        const {
          value: S
        } = l, {
          key: W
        } = t.tmNode, Q = S.findIndex((Y) => W === Y);
        return Q === -1 ? !1 : Q === S.length - 1;
      }),
      mergedDisabled: F,
      renderOption: y,
      nodeProps: x,
      handleClick: O,
      handleMouseMove: $,
      handleMouseEnter: e,
      handleMouseLeave: B,
      handleSubmenuBeforeEnter: j,
      handleSubmenuAfterEnter: R
    };
  },
  render() {
    var t, r;
    const {
      animated: n,
      rawNode: i,
      mergedShowSubmenu: o,
      clsPrefix: a,
      siblingHasIcon: l,
      siblingHasSubmenu: s,
      renderLabel: u,
      renderIcon: f,
      renderOption: d,
      nodeProps: c,
      props: v,
      scrollable: y
    } = this;
    let x = null;
    if (o) {
      const D = (t = this.menuProps) === null || t === void 0 ? void 0 : t.call(this, i, i.children);
      x = b(Jl, Object.assign({}, D, {
        clsPrefix: a,
        scrollable: this.scrollable,
        tmNodes: this.tmNode.children,
        parentKey: this.tmNode.key
      }));
    }
    const p = {
      class: [`${a}-dropdown-option-body`, this.pending && `${a}-dropdown-option-body--pending`, this.active && `${a}-dropdown-option-body--active`, this.childActive && `${a}-dropdown-option-body--child-active`, this.mergedDisabled && `${a}-dropdown-option-body--disabled`],
      onMousemove: this.handleMouseMove,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onClick: this.handleClick
    }, g = c == null ? void 0 : c(i), h = b("div", Object.assign({
      class: [`${a}-dropdown-option`, g == null ? void 0 : g.class],
      "data-dropdown-option": !0
    }, g), b("div", or(p, v), [b("div", {
      class: [`${a}-dropdown-option-body__prefix`, l && `${a}-dropdown-option-body__prefix--show-icon`]
    }, [f ? f(i) : gn(i.icon)]), b("div", {
      "data-dropdown-option": !0,
      class: `${a}-dropdown-option-body__label`
    }, u ? u(i) : gn((r = i[this.labelField]) !== null && r !== void 0 ? r : i.title)), b("div", {
      "data-dropdown-option": !0,
      class: [`${a}-dropdown-option-body__suffix`, s && `${a}-dropdown-option-body__suffix--has-submenu`]
    }, this.hasSubmenu ? b(Qi, null, {
      default: () => b(Rl, null)
    }) : null)]), this.hasSubmenu ? b(La, null, {
      default: () => [b(ja, null, {
        default: () => b("div", {
          class: `${a}-dropdown-offset-container`
        }, b(qa, {
          show: this.mergedShowSubmenu,
          placement: this.placement,
          to: y && this.popoverBody || void 0,
          teleportDisabled: !y
        }, {
          default: () => b("div", {
            class: `${a}-dropdown-menu-wrapper`
          }, n ? b(At, {
            onBeforeEnter: this.handleSubmenuBeforeEnter,
            onAfterEnter: this.handleSubmenuAfterEnter,
            name: "fade-in-scale-up-transition",
            appear: !0
          }, {
            default: () => x
          }) : x)
        }))
      })]
    }) : null);
    return d ? d({
      node: h,
      option: i
    }) : h;
  }
}), _m = J({
  name: "DropdownGroupHeader",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    tmNode: {
      type: Object,
      required: !0
    }
  },
  setup() {
    const {
      showIconRef: t,
      hasSubmenuRef: r
    } = ie(eo), {
      renderLabelRef: n,
      labelFieldRef: i,
      nodePropsRef: o,
      renderOptionRef: a
    } = ie(kn);
    return {
      labelField: i,
      showIcon: t,
      hasSubmenu: r,
      renderLabel: n,
      nodeProps: o,
      renderOption: a
    };
  },
  render() {
    var t;
    const {
      clsPrefix: r,
      hasSubmenu: n,
      showIcon: i,
      nodeProps: o,
      renderLabel: a,
      renderOption: l
    } = this, {
      rawNode: s
    } = this.tmNode, u = b("div", Object.assign({
      class: `${r}-dropdown-option`
    }, o == null ? void 0 : o(s)), b("div", {
      class: `${r}-dropdown-option-body ${r}-dropdown-option-body--group`
    }, b("div", {
      "data-dropdown-option": !0,
      class: [`${r}-dropdown-option-body__prefix`, i && `${r}-dropdown-option-body__prefix--show-icon`]
    }, gn(s.icon)), b("div", {
      class: `${r}-dropdown-option-body__label`,
      "data-dropdown-option": !0
    }, a ? a(s) : gn((t = s.title) !== null && t !== void 0 ? t : s[this.labelField])), b("div", {
      class: [`${r}-dropdown-option-body__suffix`, n && `${r}-dropdown-option-body__suffix--has-submenu`],
      "data-dropdown-option": !0
    })));
    return l ? l({
      node: u,
      option: s
    }) : u;
  }
}), Nm = J({
  name: "NDropdownGroup",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    tmNode: {
      type: Object,
      required: !0
    },
    parentKey: {
      type: [String, Number],
      default: null
    }
  },
  render() {
    const {
      tmNode: t,
      parentKey: r,
      clsPrefix: n
    } = this, {
      children: i
    } = t;
    return b(ct, null, b(_m, {
      clsPrefix: n,
      tmNode: t,
      key: t.key
    }), i == null ? void 0 : i.map((o) => {
      const {
        rawNode: a
      } = o;
      return a.show === !1 ? null : Yl(a) ? b(Xl, {
        clsPrefix: n,
        key: o.key
      }) : o.isGroup ? (Dt("dropdown", "`group` node is not allowed to be put in `group` node."), null) : b(Zl, {
        clsPrefix: n,
        tmNode: o,
        parentKey: r,
        key: o.key
      });
    }));
  }
}), Hm = J({
  name: "DropdownRenderOption",
  props: {
    tmNode: {
      type: Object,
      required: !0
    }
  },
  render() {
    const {
      rawNode: {
        render: t,
        props: r
      }
    } = this.tmNode;
    return b("div", r, [t == null ? void 0 : t()]);
  }
}), Jl = J({
  name: "DropdownMenu",
  props: {
    scrollable: Boolean,
    showArrow: Boolean,
    arrowStyle: [String, Object],
    clsPrefix: {
      type: String,
      required: !0
    },
    tmNodes: {
      type: Array,
      default: () => []
    },
    parentKey: {
      type: [String, Number],
      default: null
    }
  },
  setup(t) {
    const {
      renderIconRef: r,
      childrenFieldRef: n
    } = ie(kn);
    $e(eo, {
      showIconRef: k(() => {
        const o = r.value;
        return t.tmNodes.some((a) => {
          var l;
          if (a.isGroup)
            return (l = a.children) === null || l === void 0 ? void 0 : l.some(({
              rawNode: u
            }) => o ? o(u) : u.icon);
          const {
            rawNode: s
          } = a;
          return o ? o(s) : s.icon;
        });
      }),
      hasSubmenuRef: k(() => {
        const {
          value: o
        } = n;
        return t.tmNodes.some((a) => {
          var l;
          if (a.isGroup)
            return (l = a.children) === null || l === void 0 ? void 0 : l.some(({
              rawNode: u
            }) => Bi(u, o));
          const {
            rawNode: s
          } = a;
          return Bi(s, o);
        });
      })
    });
    const i = L(null);
    return $e(Ri, null), $e(Oi, null), $e(Tn, i), {
      bodyRef: i
    };
  },
  render() {
    const {
      parentKey: t,
      clsPrefix: r,
      scrollable: n
    } = this, i = this.tmNodes.map((o) => {
      const {
        rawNode: a
      } = o;
      return a.show === !1 ? null : Im(a) ? b(Hm, {
        tmNode: o,
        key: o.key
      }) : Yl(a) ? b(Xl, {
        clsPrefix: r,
        key: o.key
      }) : Mm(a) ? b(Nm, {
        clsPrefix: r,
        tmNode: o,
        parentKey: t,
        key: o.key
      }) : b(Zl, {
        clsPrefix: r,
        tmNode: o,
        parentKey: t,
        key: o.key,
        props: a.props,
        scrollable: n
      });
    });
    return b("div", {
      class: [`${r}-dropdown-menu`, n && `${r}-dropdown-menu--scrollable`],
      ref: "bodyRef"
    }, n ? b(Hl, {
      contentClass: `${r}-dropdown-menu__content`
    }, {
      default: () => i
    }) : i, this.showArrow ? jl({
      clsPrefix: r,
      arrowStyle: this.arrowStyle,
      arrowClass: void 0,
      arrowWrapperClass: void 0,
      arrowWrapperStyle: void 0
    }) : null);
  }
}), Wm = N("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [Ov(), N("dropdown-option", `
 position: relative;
 `, [P("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [P("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), N("dropdown-option-body", `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [P("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), _e("disabled", [V("pending", `
 color: var(--n-option-text-color-hover);
 `, [I("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), P("&::before", "background-color: var(--n-option-color-hover);")]), V("active", `
 color: var(--n-option-text-color-active);
 `, [I("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), P("&::before", "background-color: var(--n-option-color-active);")]), V("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [I("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), V("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), V("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [I("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [V("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), I("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [V("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), N("icon", `
 font-size: var(--n-option-icon-size);
 `)]), I("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), I("suffix", `
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `, [V("has-submenu", `
 width: var(--n-option-icon-suffix-width);
 `), N("icon", `
 font-size: var(--n-option-icon-size);
 `)]), N("dropdown-menu", "pointer-events: all;")]), N("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), N("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), N("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), P(">", [N("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), _e("scrollable", `
 padding: var(--n-padding);
 `), V("scrollable", [I("content", `
 padding: var(--n-padding);
 `)])]), Lm = {
  animated: {
    type: Boolean,
    default: !0
  },
  keyboard: {
    type: Boolean,
    default: !0
  },
  size: {
    type: String,
    default: "medium"
  },
  inverted: Boolean,
  placement: {
    type: String,
    default: "bottom"
  },
  onSelect: [Function, Array],
  options: {
    type: Array,
    default: () => []
  },
  menuProps: Function,
  showArrow: Boolean,
  renderLabel: Function,
  renderIcon: Function,
  renderOption: Function,
  nodeProps: Function,
  labelField: {
    type: String,
    default: "label"
  },
  keyField: {
    type: String,
    default: "key"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  // for menu, not documented
  value: [String, Number]
}, jm = Object.keys(Ji), Vm = Object.assign(Object.assign(Object.assign({}, Ji), Lm), fe.props), qm = J({
  name: "Dropdown",
  inheritAttrs: !1,
  props: Vm,
  setup(t) {
    const r = L(!1), n = Pn(se(t, "show"), r), i = k(() => {
      const {
        keyField: R,
        childrenField: e
      } = t;
      return Sv(t.options, {
        getKey($) {
          return $[R];
        },
        getDisabled($) {
          return $.disabled === !0;
        },
        getIgnored($) {
          return $.type === "divider" || $.type === "render";
        },
        getChildren($) {
          return $[e];
        }
      });
    }), o = k(() => i.value.treeNodes), a = L(null), l = L(null), s = L(null), u = k(() => {
      var R, e, $;
      return ($ = (e = (R = a.value) !== null && R !== void 0 ? R : l.value) !== null && e !== void 0 ? e : s.value) !== null && $ !== void 0 ? $ : null;
    }), f = k(() => i.value.getPath(u.value).keyPath), d = k(() => i.value.getPath(t.value).keyPath), c = ke(() => t.keyboard && n.value);
    xf({
      keydown: {
        ArrowUp: {
          prevent: !0,
          handler: F
        },
        ArrowRight: {
          prevent: !0,
          handler: C
        },
        ArrowDown: {
          prevent: !0,
          handler: _
        },
        ArrowLeft: {
          prevent: !0,
          handler: E
        },
        Enter: {
          prevent: !0,
          handler: m
        },
        Escape: D
      }
    }, c);
    const {
      mergedClsPrefixRef: v,
      inlineThemeDisabled: y
    } = Me(t), x = fe("Dropdown", "-dropdown", Wm, Tm, t, v);
    $e(kn, {
      labelFieldRef: se(t, "labelField"),
      childrenFieldRef: se(t, "childrenField"),
      renderLabelRef: se(t, "renderLabel"),
      renderIconRef: se(t, "renderIcon"),
      hoverKeyRef: a,
      keyboardKeyRef: l,
      lastToggledSubmenuKeyRef: s,
      pendingKeyPathRef: f,
      activeKeyPathRef: d,
      animatedRef: se(t, "animated"),
      mergedShowRef: n,
      nodePropsRef: se(t, "nodeProps"),
      renderOptionRef: se(t, "renderOption"),
      menuPropsRef: se(t, "menuProps"),
      doSelect: p,
      doUpdateShow: g
    }), Fe(n, (R) => {
      !t.animated && !R && h();
    });
    function p(R, e) {
      const {
        onSelect: $
      } = t;
      $ && le($, R, e);
    }
    function g(R) {
      const {
        "onUpdate:show": e,
        onUpdateShow: $
      } = t;
      e && le(e, R), $ && le($, R), r.value = R;
    }
    function h() {
      a.value = null, l.value = null, s.value = null;
    }
    function D() {
      g(!1);
    }
    function E() {
      T("left");
    }
    function C() {
      T("right");
    }
    function F() {
      T("up");
    }
    function _() {
      T("down");
    }
    function m() {
      const R = A();
      R != null && R.isLeaf && n.value && (p(R.key, R.rawNode), g(!1));
    }
    function A() {
      var R;
      const {
        value: e
      } = i, {
        value: $
      } = u;
      return !e || $ === null ? null : (R = e.getNode($)) !== null && R !== void 0 ? R : null;
    }
    function T(R) {
      const {
        value: e
      } = u, {
        value: {
          getFirstAvailableNode: $
        }
      } = i;
      let B = null;
      if (e === null) {
        const O = $();
        O !== null && (B = O.key);
      } else {
        const O = A();
        if (O) {
          let S;
          switch (R) {
            case "down":
              S = O.getNext();
              break;
            case "up":
              S = O.getPrev();
              break;
            case "right":
              S = O.getChild();
              break;
            case "left":
              S = O.getParent();
              break;
          }
          S && (B = S.key);
        }
      }
      B !== null && (a.value = null, l.value = B);
    }
    const z = k(() => {
      const {
        size: R,
        inverted: e
      } = t, {
        common: {
          cubicBezierEaseInOut: $
        },
        self: B
      } = x.value, {
        padding: O,
        dividerColor: S,
        borderRadius: W,
        optionOpacityDisabled: Q,
        [K("optionIconSuffixWidth", R)]: Y,
        [K("optionSuffixWidth", R)]: ue,
        [K("optionIconPrefixWidth", R)]: ne,
        [K("optionPrefixWidth", R)]: Ee,
        [K("fontSize", R)]: Ae,
        [K("optionHeight", R)]: Oe,
        [K("optionIconSize", R)]: Z
      } = B, te = {
        "--n-bezier": $,
        "--n-font-size": Ae,
        "--n-padding": O,
        "--n-border-radius": W,
        "--n-option-height": Oe,
        "--n-option-prefix-width": Ee,
        "--n-option-icon-prefix-width": ne,
        "--n-option-suffix-width": ue,
        "--n-option-icon-suffix-width": Y,
        "--n-option-icon-size": Z,
        "--n-divider-color": S,
        "--n-option-opacity-disabled": Q
      };
      return e ? (te["--n-color"] = B.colorInverted, te["--n-option-color-hover"] = B.optionColorHoverInverted, te["--n-option-color-active"] = B.optionColorActiveInverted, te["--n-option-text-color"] = B.optionTextColorInverted, te["--n-option-text-color-hover"] = B.optionTextColorHoverInverted, te["--n-option-text-color-active"] = B.optionTextColorActiveInverted, te["--n-option-text-color-child-active"] = B.optionTextColorChildActiveInverted, te["--n-prefix-color"] = B.prefixColorInverted, te["--n-suffix-color"] = B.suffixColorInverted, te["--n-group-header-text-color"] = B.groupHeaderTextColorInverted) : (te["--n-color"] = B.color, te["--n-option-color-hover"] = B.optionColorHover, te["--n-option-color-active"] = B.optionColorActive, te["--n-option-text-color"] = B.optionTextColor, te["--n-option-text-color-hover"] = B.optionTextColorHover, te["--n-option-text-color-active"] = B.optionTextColorActive, te["--n-option-text-color-child-active"] = B.optionTextColorChildActive, te["--n-prefix-color"] = B.prefixColor, te["--n-suffix-color"] = B.suffixColor, te["--n-group-header-text-color"] = B.groupHeaderTextColor), te;
    }), j = y ? Xe("dropdown", k(() => `${t.size[0]}${t.inverted ? "i" : ""}`), z, t) : void 0;
    return {
      mergedClsPrefix: v,
      mergedTheme: x,
      // data
      tmNodes: o,
      // show
      mergedShow: n,
      // methods
      handleAfterLeave: () => {
        t.animated && h();
      },
      doUpdateShow: g,
      cssVars: y ? void 0 : z,
      themeClass: j == null ? void 0 : j.themeClass,
      onRender: j == null ? void 0 : j.onRender
    };
  },
  render() {
    const t = (i, o, a, l, s) => {
      var u;
      const {
        mergedClsPrefix: f,
        menuProps: d
      } = this;
      (u = this.onRender) === null || u === void 0 || u.call(this);
      const c = (d == null ? void 0 : d(void 0, this.tmNodes.map((y) => y.rawNode))) || {}, v = {
        ref: Su(o),
        class: [i, `${f}-dropdown`, this.themeClass],
        clsPrefix: f,
        tmNodes: this.tmNodes,
        style: [...a, this.cssVars],
        showArrow: this.showArrow,
        arrowStyle: this.arrowStyle,
        scrollable: this.scrollable,
        onMouseenter: l,
        onMouseleave: s
      };
      return b(Jl, or(this.$attrs, v, c));
    }, {
      mergedTheme: r
    } = this, n = {
      show: this.mergedShow,
      theme: r.peers.Popover,
      themeOverrides: r.peerOverrides.Popover,
      internalOnAfterLeave: this.handleAfterLeave,
      internalRenderBody: t,
      onUpdateShow: this.doUpdateShow,
      "onUpdate:show": void 0
    };
    return b(Vl, Object.assign({}, Ea(this.$props, jm), n), {
      trigger: () => {
        var i, o;
        return (o = (i = this.$slots).default) === null || o === void 0 ? void 0 : o.call(i);
      }
    });
  }
}), Km = {
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
function Gm(t) {
  const {
    heightSmall: r,
    heightMedium: n,
    heightLarge: i,
    textColor1: o,
    errorColor: a,
    warningColor: l,
    lineHeight: s,
    textColor3: u
  } = t;
  return Object.assign(Object.assign({}, Km), {
    blankHeightSmall: r,
    blankHeightMedium: n,
    blankHeightLarge: i,
    lineHeight: s,
    labelTextColor: o,
    asteriskColor: a,
    feedbackTextColorError: a,
    feedbackTextColorWarning: l,
    feedbackTextColor: u
  });
}
const Ql = {
  name: "Form",
  common: Ye,
  self: Gm
}, Um = N("form", [V("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [N("form-item", {
  width: "auto",
  marginRight: "18px"
}, [P("&:last-child", {
  marginRight: 0
})])])]), Lr = "n-form", es = "n-form-item-insts";
var Xm = function(t, r, n, i) {
  function o(a) {
    return a instanceof n ? a : new n(function(l) {
      l(a);
    });
  }
  return new (n || (n = Promise))(function(a, l) {
    function s(d) {
      try {
        f(i.next(d));
      } catch (c) {
        l(c);
      }
    }
    function u(d) {
      try {
        f(i.throw(d));
      } catch (c) {
        l(c);
      }
    }
    function f(d) {
      d.done ? a(d.value) : o(d.value).then(s, u);
    }
    f((i = i.apply(t, r || [])).next());
  });
};
const Ym = Object.assign(Object.assign({}, fe.props), {
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
}), Zm = J({
  name: "Form",
  props: Ym,
  setup(t) {
    const {
      mergedClsPrefixRef: r
    } = Me(t);
    fe("Form", "-form", Um, Ql, t, r);
    const n = {}, i = L(void 0), o = (u) => {
      const f = i.value;
      (f === void 0 || u >= f) && (i.value = u);
    };
    function a(u) {
      return Xm(this, arguments, void 0, function* (f, d = () => !0) {
        return yield new Promise((c, v) => {
          const y = [];
          for (const x of so(n)) {
            const p = n[x];
            for (const g of p)
              g.path && y.push(g.internalValidate(null, d));
          }
          Promise.all(y).then((x) => {
            const p = x.some((D) => !D.valid), g = [], h = [];
            x.forEach((D) => {
              var E, C;
              !((E = D.errors) === null || E === void 0) && E.length && g.push(D.errors), !((C = D.warnings) === null || C === void 0) && C.length && h.push(D.warnings);
            }), f && f(g.length ? g : void 0, {
              warnings: h.length ? h : void 0
            }), p ? v(g.length ? g : void 0) : c({
              warnings: h.length ? h : void 0
            });
          });
        });
      });
    }
    function l() {
      for (const u of so(n)) {
        const f = n[u];
        for (const d of f)
          d.restoreValidation();
      }
    }
    return $e(Lr, {
      props: t,
      maxChildLabelWidthRef: i,
      deriveMaxChildLabelWidth: o
    }), $e(es, {
      formItems: n
    }), Object.assign({
      validate: a,
      restoreValidation: l
    }, {
      mergedClsPrefix: r
    });
  },
  render() {
    const {
      mergedClsPrefix: t
    } = this;
    return b("form", {
      class: [`${t}-form`, this.inline && `${t}-form--inline`],
      onSubmit: this.onSubmit
    }, this.$slots);
  }
});
function Nt() {
  return Nt = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Nt.apply(this, arguments);
}
function Jm(t, r) {
  t.prototype = Object.create(r.prototype), t.prototype.constructor = t, Ir(t, r);
}
function Ai(t) {
  return Ai = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, Ai(t);
}
function Ir(t, r) {
  return Ir = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, o) {
    return i.__proto__ = o, i;
  }, Ir(t, r);
}
function Qm() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function fn(t, r, n) {
  return Qm() ? fn = Reflect.construct.bind() : fn = function(o, a, l) {
    var s = [null];
    s.push.apply(s, a);
    var u = Function.bind.apply(o, s), f = new u();
    return l && Ir(f, l.prototype), f;
  }, fn.apply(null, arguments);
}
function eg(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function Di(t) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Di = function(i) {
    if (i === null || !eg(i)) return i;
    if (typeof i != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(i)) return r.get(i);
      r.set(i, o);
    }
    function o() {
      return fn(i, arguments, Ai(this).constructor);
    }
    return o.prototype = Object.create(i.prototype, {
      constructor: {
        value: o,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Ir(o, i);
  }, Di(t);
}
var tg = /%[sdj%]/g, ts = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (ts = function(r, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(i) {
    return typeof i == "string";
  }) && console.warn(r, n);
});
function Si(t) {
  if (!t || !t.length) return null;
  var r = {};
  return t.forEach(function(n) {
    var i = n.field;
    r[i] = r[i] || [], r[i].push(n);
  }), r;
}
function We(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  var o = 0, a = n.length;
  if (typeof t == "function")
    return t.apply(null, n);
  if (typeof t == "string") {
    var l = t.replace(tg, function(s) {
      if (s === "%%")
        return "%";
      if (o >= a)
        return s;
      switch (s) {
        case "%s":
          return String(n[o++]);
        case "%d":
          return Number(n[o++]);
        case "%j":
          try {
            return JSON.stringify(n[o++]);
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
function rg(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function Se(t, r) {
  return !!(t == null || r === "array" && Array.isArray(t) && !t.length || rg(r) && typeof t == "string" && !t);
}
function ng(t, r, n) {
  var i = [], o = 0, a = t.length;
  function l(s) {
    i.push.apply(i, s || []), o++, o === a && n(i);
  }
  t.forEach(function(s) {
    r(s, l);
  });
}
function va(t, r, n) {
  var i = 0, o = t.length;
  function a(l) {
    if (l && l.length) {
      n(l);
      return;
    }
    var s = i;
    i = i + 1, s < o ? r(t[s], a) : n([]);
  }
  a([]);
}
function ig(t) {
  var r = [];
  return Object.keys(t).forEach(function(n) {
    r.push.apply(r, t[n] || []);
  }), r;
}
var ma = /* @__PURE__ */ function(t) {
  Jm(r, t);
  function r(n, i) {
    var o;
    return o = t.call(this, "Async Validation Error") || this, o.errors = n, o.fields = i, o;
  }
  return r;
}(/* @__PURE__ */ Di(Error));
function og(t, r, n, i, o) {
  if (r.first) {
    var a = new Promise(function(v, y) {
      var x = function(h) {
        return i(h), h.length ? y(new ma(h, Si(h))) : v(o);
      }, p = ig(t);
      va(p, n, x);
    });
    return a.catch(function(v) {
      return v;
    }), a;
  }
  var l = r.firstFields === !0 ? Object.keys(t) : r.firstFields || [], s = Object.keys(t), u = s.length, f = 0, d = [], c = new Promise(function(v, y) {
    var x = function(g) {
      if (d.push.apply(d, g), f++, f === u)
        return i(d), d.length ? y(new ma(d, Si(d))) : v(o);
    };
    s.length || (i(d), v(o)), s.forEach(function(p) {
      var g = t[p];
      l.indexOf(p) !== -1 ? va(g, n, x) : ng(g, n, x);
    });
  });
  return c.catch(function(v) {
    return v;
  }), c;
}
function ag(t) {
  return !!(t && t.message !== void 0);
}
function lg(t, r) {
  for (var n = t, i = 0; i < r.length; i++) {
    if (n == null)
      return n;
    n = n[r[i]];
  }
  return n;
}
function ga(t, r) {
  return function(n) {
    var i;
    return t.fullFields ? i = lg(r, t.fullFields) : i = r[n.field || t.fullField], ag(n) ? (n.field = n.field || t.fullField, n.fieldValue = i, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: i,
      field: n.field || t.fullField
    };
  };
}
function ba(t, r) {
  if (r) {
    for (var n in r)
      if (r.hasOwnProperty(n)) {
        var i = r[n];
        typeof i == "object" && typeof t[n] == "object" ? t[n] = Nt({}, t[n], i) : t[n] = i;
      }
  }
  return t;
}
var rs = function(r, n, i, o, a, l) {
  r.required && (!i.hasOwnProperty(r.field) || Se(n, l || r.type)) && o.push(We(a.messages.required, r.fullField));
}, sg = function(r, n, i, o, a) {
  (/^\s+$/.test(n) || n === "") && o.push(We(a.messages.whitespace, r.fullField));
}, ln, ug = function() {
  if (ln)
    return ln;
  var t = "[a-fA-F\\d:]", r = function(C) {
    return C && C.includeBoundaries ? "(?:(?<=\\s|^)(?=" + t + ")|(?<=" + t + ")(?=\\s|$))" : "";
  }, n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", i = "[a-fA-F\\d]{1,4}", o = (`
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + n + "$)|(?:^" + o + "$)"), l = new RegExp("^" + n + "$"), s = new RegExp("^" + o + "$"), u = function(C) {
    return C && C.exact ? a : new RegExp("(?:" + r(C) + n + r(C) + ")|(?:" + r(C) + o + r(C) + ")", "g");
  };
  u.v4 = function(E) {
    return E && E.exact ? l : new RegExp("" + r(E) + n + r(E), "g");
  }, u.v6 = function(E) {
    return E && E.exact ? s : new RegExp("" + r(E) + o + r(E), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", c = u.v4().source, v = u.v6().source, y = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", x = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", g = "(?::\\d{2,5})?", h = '(?:[/?#][^\\s"]*)?', D = "(?:" + f + "|www\\.)" + d + "(?:localhost|" + c + "|" + v + "|" + y + x + p + ")" + g + h;
  return ln = new RegExp("(?:^" + D + "$)", "i"), ln;
}, ya = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, wr = {
  integer: function(r) {
    return wr.number(r) && parseInt(r, 10) === r;
  },
  float: function(r) {
    return wr.number(r) && !wr.integer(r);
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
    return typeof r == "object" && !wr.array(r);
  },
  method: function(r) {
    return typeof r == "function";
  },
  email: function(r) {
    return typeof r == "string" && r.length <= 320 && !!r.match(ya.email);
  },
  url: function(r) {
    return typeof r == "string" && r.length <= 2048 && !!r.match(ug());
  },
  hex: function(r) {
    return typeof r == "string" && !!r.match(ya.hex);
  }
}, fg = function(r, n, i, o, a) {
  if (r.required && n === void 0) {
    rs(r, n, i, o, a);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = r.type;
  l.indexOf(s) > -1 ? wr[s](n) || o.push(We(a.messages.types[s], r.fullField, r.type)) : s && typeof n !== r.type && o.push(We(a.messages.types[s], r.fullField, r.type));
}, dg = function(r, n, i, o, a) {
  var l = typeof r.len == "number", s = typeof r.min == "number", u = typeof r.max == "number", f = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, c = null, v = typeof n == "number", y = typeof n == "string", x = Array.isArray(n);
  if (v ? c = "number" : y ? c = "string" : x && (c = "array"), !c)
    return !1;
  x && (d = n.length), y && (d = n.replace(f, "_").length), l ? d !== r.len && o.push(We(a.messages[c].len, r.fullField, r.len)) : s && !u && d < r.min ? o.push(We(a.messages[c].min, r.fullField, r.min)) : u && !s && d > r.max ? o.push(We(a.messages[c].max, r.fullField, r.max)) : s && u && (d < r.min || d > r.max) && o.push(We(a.messages[c].range, r.fullField, r.min, r.max));
}, Jt = "enum", cg = function(r, n, i, o, a) {
  r[Jt] = Array.isArray(r[Jt]) ? r[Jt] : [], r[Jt].indexOf(n) === -1 && o.push(We(a.messages[Jt], r.fullField, r[Jt].join(", ")));
}, hg = function(r, n, i, o, a) {
  if (r.pattern) {
    if (r.pattern instanceof RegExp)
      r.pattern.lastIndex = 0, r.pattern.test(n) || o.push(We(a.messages.pattern.mismatch, r.fullField, n, r.pattern));
    else if (typeof r.pattern == "string") {
      var l = new RegExp(r.pattern);
      l.test(n) || o.push(We(a.messages.pattern.mismatch, r.fullField, n, r.pattern));
    }
  }
}, re = {
  required: rs,
  whitespace: sg,
  type: fg,
  range: dg,
  enum: cg,
  pattern: hg
}, xg = function(r, n, i, o, a) {
  var l = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Se(n, "string") && !r.required)
      return i();
    re.required(r, n, o, l, a, "string"), Se(n, "string") || (re.type(r, n, o, l, a), re.range(r, n, o, l, a), re.pattern(r, n, o, l, a), r.whitespace === !0 && re.whitespace(r, n, o, l, a));
  }
  i(l);
}, pg = function(r, n, i, o, a) {
  var l = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Se(n) && !r.required)
      return i();
    re.required(r, n, o, l, a), n !== void 0 && re.type(r, n, o, l, a);
  }
  i(l);
}, vg = function(r, n, i, o, a) {
  var l = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (n === "" && (n = void 0), Se(n) && !r.required)
      return i();
    re.required(r, n, o, l, a), n !== void 0 && (re.type(r, n, o, l, a), re.range(r, n, o, l, a));
  }
  i(l);
}, mg = function(r, n, i, o, a) {
  var l = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Se(n) && !r.required)
      return i();
    re.required(r, n, o, l, a), n !== void 0 && re.type(r, n, o, l, a);
  }
  i(l);
}, gg = function(r, n, i, o, a) {
  var l = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Se(n) && !r.required)
      return i();
    re.required(r, n, o, l, a), Se(n) || re.type(r, n, o, l, a);
  }
  i(l);
}, bg = function(r, n, i, o, a) {
  var l = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Se(n) && !r.required)
      return i();
    re.required(r, n, o, l, a), n !== void 0 && (re.type(r, n, o, l, a), re.range(r, n, o, l, a));
  }
  i(l);
}, yg = function(r, n, i, o, a) {
  var l = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Se(n) && !r.required)
      return i();
    re.required(r, n, o, l, a), n !== void 0 && (re.type(r, n, o, l, a), re.range(r, n, o, l, a));
  }
  i(l);
}, Cg = function(r, n, i, o, a) {
  var l = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (n == null && !r.required)
      return i();
    re.required(r, n, o, l, a, "array"), n != null && (re.type(r, n, o, l, a), re.range(r, n, o, l, a));
  }
  i(l);
}, wg = function(r, n, i, o, a) {
  var l = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Se(n) && !r.required)
      return i();
    re.required(r, n, o, l, a), n !== void 0 && re.type(r, n, o, l, a);
  }
  i(l);
}, Bg = "enum", Ag = function(r, n, i, o, a) {
  var l = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Se(n) && !r.required)
      return i();
    re.required(r, n, o, l, a), n !== void 0 && re[Bg](r, n, o, l, a);
  }
  i(l);
}, Dg = function(r, n, i, o, a) {
  var l = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Se(n, "string") && !r.required)
      return i();
    re.required(r, n, o, l, a), Se(n, "string") || re.pattern(r, n, o, l, a);
  }
  i(l);
}, Sg = function(r, n, i, o, a) {
  var l = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Se(n, "date") && !r.required)
      return i();
    if (re.required(r, n, o, l, a), !Se(n, "date")) {
      var u;
      n instanceof Date ? u = n : u = new Date(n), re.type(r, u, o, l, a), u && re.range(r, u.getTime(), o, l, a);
    }
  }
  i(l);
}, Fg = function(r, n, i, o, a) {
  var l = [], s = Array.isArray(n) ? "array" : typeof n;
  re.required(r, n, o, l, a, s), i(l);
}, ti = function(r, n, i, o, a) {
  var l = r.type, s = [], u = r.required || !r.required && o.hasOwnProperty(r.field);
  if (u) {
    if (Se(n, l) && !r.required)
      return i();
    re.required(r, n, o, s, a, l), Se(n, l) || re.type(r, n, o, s, a);
  }
  i(s);
}, $g = function(r, n, i, o, a) {
  var l = [], s = r.required || !r.required && o.hasOwnProperty(r.field);
  if (s) {
    if (Se(n) && !r.required)
      return i();
    re.required(r, n, o, l, a);
  }
  i(l);
}, Er = {
  string: xg,
  method: pg,
  number: vg,
  boolean: mg,
  regexp: gg,
  integer: bg,
  float: yg,
  array: Cg,
  object: wg,
  enum: Ag,
  pattern: Dg,
  date: Sg,
  url: ti,
  hex: ti,
  email: ti,
  required: Fg,
  any: $g
};
function Fi() {
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
var $i = Fi(), ir = /* @__PURE__ */ function() {
  function t(n) {
    this.rules = null, this._messages = $i, this.define(n);
  }
  var r = t.prototype;
  return r.define = function(i) {
    var o = this;
    if (!i)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof i != "object" || Array.isArray(i))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(i).forEach(function(a) {
      var l = i[a];
      o.rules[a] = Array.isArray(l) ? l : [l];
    });
  }, r.messages = function(i) {
    return i && (this._messages = ba(Fi(), i)), this._messages;
  }, r.validate = function(i, o, a) {
    var l = this;
    o === void 0 && (o = {}), a === void 0 && (a = function() {
    });
    var s = i, u = o, f = a;
    if (typeof u == "function" && (f = u, u = {}), !this.rules || Object.keys(this.rules).length === 0)
      return f && f(null, s), Promise.resolve(s);
    function d(p) {
      var g = [], h = {};
      function D(C) {
        if (Array.isArray(C)) {
          var F;
          g = (F = g).concat.apply(F, C);
        } else
          g.push(C);
      }
      for (var E = 0; E < p.length; E++)
        D(p[E]);
      g.length ? (h = Si(g), f(g, h)) : f(null, s);
    }
    if (u.messages) {
      var c = this.messages();
      c === $i && (c = Fi()), ba(c, u.messages), u.messages = c;
    } else
      u.messages = this.messages();
    var v = {}, y = u.keys || Object.keys(this.rules);
    y.forEach(function(p) {
      var g = l.rules[p], h = s[p];
      g.forEach(function(D) {
        var E = D;
        typeof E.transform == "function" && (s === i && (s = Nt({}, s)), h = s[p] = E.transform(h)), typeof E == "function" ? E = {
          validator: E
        } : E = Nt({}, E), E.validator = l.getValidationMethod(E), E.validator && (E.field = p, E.fullField = E.fullField || p, E.type = l.getType(E), v[p] = v[p] || [], v[p].push({
          rule: E,
          value: h,
          source: s,
          field: p
        }));
      });
    });
    var x = {};
    return og(v, u, function(p, g) {
      var h = p.rule, D = (h.type === "object" || h.type === "array") && (typeof h.fields == "object" || typeof h.defaultField == "object");
      D = D && (h.required || !h.required && p.value), h.field = p.field;
      function E(_, m) {
        return Nt({}, m, {
          fullField: h.fullField + "." + _,
          fullFields: h.fullFields ? [].concat(h.fullFields, [_]) : [_]
        });
      }
      function C(_) {
        _ === void 0 && (_ = []);
        var m = Array.isArray(_) ? _ : [_];
        !u.suppressWarning && m.length && t.warning("async-validator:", m), m.length && h.message !== void 0 && (m = [].concat(h.message));
        var A = m.map(ga(h, s));
        if (u.first && A.length)
          return x[h.field] = 1, g(A);
        if (!D)
          g(A);
        else {
          if (h.required && !p.value)
            return h.message !== void 0 ? A = [].concat(h.message).map(ga(h, s)) : u.error && (A = [u.error(h, We(u.messages.required, h.field))]), g(A);
          var T = {};
          h.defaultField && Object.keys(p.value).map(function(R) {
            T[R] = h.defaultField;
          }), T = Nt({}, T, p.rule.fields);
          var z = {};
          Object.keys(T).forEach(function(R) {
            var e = T[R], $ = Array.isArray(e) ? e : [e];
            z[R] = $.map(E.bind(null, R));
          });
          var j = new t(z);
          j.messages(u.messages), p.rule.options && (p.rule.options.messages = u.messages, p.rule.options.error = u.error), j.validate(p.value, p.rule.options || u, function(R) {
            var e = [];
            A && A.length && e.push.apply(e, A), R && R.length && e.push.apply(e, R), g(e.length ? e : null);
          });
        }
      }
      var F;
      if (h.asyncValidator)
        F = h.asyncValidator(h, p.value, C, p.source, u);
      else if (h.validator) {
        try {
          F = h.validator(h, p.value, C, p.source, u);
        } catch (_) {
          console.error == null || console.error(_), u.suppressValidatorError || setTimeout(function() {
            throw _;
          }, 0), C(_.message);
        }
        F === !0 ? C() : F === !1 ? C(typeof h.message == "function" ? h.message(h.fullField || h.field) : h.message || (h.fullField || h.field) + " fails") : F instanceof Array ? C(F) : F instanceof Error && C(F.message);
      }
      F && F.then && F.then(function() {
        return C();
      }, function(_) {
        return C(_);
      });
    }, function(p) {
      d(p);
    }, s);
  }, r.getType = function(i) {
    if (i.type === void 0 && i.pattern instanceof RegExp && (i.type = "pattern"), typeof i.validator != "function" && i.type && !Er.hasOwnProperty(i.type))
      throw new Error(We("Unknown rule type %s", i.type));
    return i.type || "string";
  }, r.getValidationMethod = function(i) {
    if (typeof i.validator == "function")
      return i.validator;
    var o = Object.keys(i), a = o.indexOf("message");
    return a !== -1 && o.splice(a, 1), o.length === 1 && o[0] === "required" ? Er.required : Er[this.getType(i)] || void 0;
  }, t;
}();
ir.register = function(r, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Er[r] = n;
};
ir.warning = ts;
ir.messages = $i;
ir.validators = Er;
function Eg(t) {
  const r = ie(Lr, null);
  return {
    mergedSize: k(() => t.size !== void 0 ? t.size : (r == null ? void 0 : r.props.size) !== void 0 ? r.props.size : "medium")
  };
}
function Pg(t) {
  const r = ie(Lr, null), n = k(() => {
    const {
      labelPlacement: x
    } = t;
    return x !== void 0 ? x : r != null && r.props.labelPlacement ? r.props.labelPlacement : "top";
  }), i = k(() => n.value === "left" && (t.labelWidth === "auto" || (r == null ? void 0 : r.props.labelWidth) === "auto")), o = k(() => {
    if (n.value === "top") return;
    const {
      labelWidth: x
    } = t;
    if (x !== void 0 && x !== "auto")
      return ft(x);
    if (i.value) {
      const p = r == null ? void 0 : r.maxChildLabelWidthRef.value;
      return p !== void 0 ? ft(p) : void 0;
    }
    if ((r == null ? void 0 : r.props.labelWidth) !== void 0)
      return ft(r.props.labelWidth);
  }), a = k(() => {
    const {
      labelAlign: x
    } = t;
    if (x) return x;
    if (r != null && r.props.labelAlign) return r.props.labelAlign;
  }), l = k(() => {
    var x;
    return [(x = t.labelProps) === null || x === void 0 ? void 0 : x.style, t.labelStyle, {
      width: o.value
    }];
  }), s = k(() => {
    const {
      showRequireMark: x
    } = t;
    return x !== void 0 ? x : r == null ? void 0 : r.props.showRequireMark;
  }), u = k(() => {
    const {
      requireMarkPlacement: x
    } = t;
    return x !== void 0 ? x : (r == null ? void 0 : r.props.requireMarkPlacement) || "right";
  }), f = L(!1), d = L(!1), c = k(() => {
    const {
      validationStatus: x
    } = t;
    if (x !== void 0) return x;
    if (f.value) return "error";
    if (d.value) return "warning";
  }), v = k(() => {
    const {
      showFeedback: x
    } = t;
    return x !== void 0 ? x : (r == null ? void 0 : r.props.showFeedback) !== void 0 ? r.props.showFeedback : !0;
  }), y = k(() => {
    const {
      showLabel: x
    } = t;
    return x !== void 0 ? x : (r == null ? void 0 : r.props.showLabel) !== void 0 ? r.props.showLabel : !0;
  });
  return {
    validationErrored: f,
    validationWarned: d,
    mergedLabelStyle: l,
    mergedLabelPlacement: n,
    mergedLabelAlign: a,
    mergedShowRequireMark: s,
    mergedRequireMarkPlacement: u,
    mergedValidationStatus: c,
    mergedShowFeedback: v,
    mergedShowLabel: y,
    isAutoLabelWidth: i
  };
}
function Tg(t) {
  const r = ie(Lr, null), n = k(() => {
    const {
      rulePath: l
    } = t;
    if (l !== void 0) return l;
    const {
      path: s
    } = t;
    if (s !== void 0) return s;
  }), i = k(() => {
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
        const d = Gi(u, f);
        d !== void 0 && (Array.isArray(d) ? l.push(...d) : l.push(d));
      }
    }
    return l;
  }), o = k(() => i.value.some((l) => l.required)), a = k(() => o.value || t.required);
  return {
    mergedRules: i,
    mergedRequired: a
  };
}
const {
  cubicBezierEaseInOut: Ca
} = Et;
function zg({
  name: t = "fade-down",
  fromOffset: r = "-4px",
  enterDuration: n = ".3s",
  leaveDuration: i = ".3s",
  enterCubicBezier: o = Ca,
  leaveCubicBezier: a = Ca
} = {}) {
  return [P(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`, {
    opacity: 0,
    transform: `translateY(${r})`
  }), P(`&.${t}-transition-enter-to, &.${t}-transition-leave-from`, {
    opacity: 1,
    transform: "translateY(0)"
  }), P(`&.${t}-transition-leave-active`, {
    transition: `opacity ${i} ${a}, transform ${i} ${a}`
  }), P(`&.${t}-transition-enter-active`, {
    transition: `opacity ${n} ${o}, transform ${n} ${o}`
  })];
}
const Rg = N("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [N("form-item-label", `
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
 `, [I("asterisk", `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `), I("asterisk-placeholder", `
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]), N("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), V("auto-label-width", [N("form-item-label", "white-space: nowrap;")]), V("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [N("form-item-label", `
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `, [V("reverse-columns-space", `
 grid-template-columns: auto 1fr;
 `), V("left-mark", `
 grid-template-areas:
 "mark text"
 ". text";
 `), V("right-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), V("right-hanging-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), I("text", `
 grid-area: text; 
 `), I("asterisk", `
 grid-area: mark; 
 align-self: end;
 `)])]), V("top-labelled", `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [V("no-label", `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), N("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), N("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), N("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [P("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), N("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [V("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), V("error", {
  color: "var(--n-feedback-text-color-error)"
}), zg({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
var wa = function(t, r, n, i) {
  function o(a) {
    return a instanceof n ? a : new n(function(l) {
      l(a);
    });
  }
  return new (n || (n = Promise))(function(a, l) {
    function s(d) {
      try {
        f(i.next(d));
      } catch (c) {
        l(c);
      }
    }
    function u(d) {
      try {
        f(i.throw(d));
      } catch (c) {
        l(c);
      }
    }
    function f(d) {
      d.done ? a(d.value) : o(d.value).then(s, u);
    }
    f((i = i.apply(t, r || [])).next());
  });
};
const Og = Object.assign(Object.assign({}, fe.props), {
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
function Ba(t, r) {
  return (...n) => {
    try {
      const i = t(...n);
      return !r && (typeof i == "boolean" || i instanceof Error || Array.isArray(i)) || i != null && i.then ? i : (i === void 0 || Dt("form-item/validate", `You return a ${typeof i} typed value in the validator method, which is not recommended. Please use ${r ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`), !0);
    } catch (i) {
      Dt("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(i);
      return;
    }
  };
}
const kg = J({
  name: "FormItem",
  props: Og,
  setup(t) {
    ef(es, "formItems", se(t, "path"));
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n
    } = Me(t), i = ie(Lr, null), o = Eg(t), a = Pg(t), {
      validationErrored: l,
      validationWarned: s
    } = a, {
      mergedRequired: u,
      mergedRules: f
    } = Tg(t), {
      mergedSize: d
    } = o, {
      mergedLabelPlacement: c,
      mergedLabelAlign: v,
      mergedRequireMarkPlacement: y
    } = a, x = L([]), p = L(mn()), g = i ? se(i.props, "disabled") : L(!1), h = fe("Form", "-form-item", Rg, Ql, t, r);
    Fe(se(t, "path"), () => {
      t.ignorePathChange || D();
    });
    function D() {
      x.value = [], l.value = !1, s.value = !1, t.feedback && (p.value = mn());
    }
    const E = (...$) => wa(this, [...$], void 0, function* (B = null, O = () => !0, S = {
      suppressWarning: !0
    }) {
      const {
        path: W
      } = t;
      S ? S.first || (S.first = t.first) : S = {};
      const {
        value: Q
      } = f, Y = i ? Gi(i.props.model, W || "") : void 0, ue = {}, ne = {}, Ee = (B ? Q.filter((oe) => Array.isArray(oe.trigger) ? oe.trigger.includes(B) : oe.trigger === B) : Q).filter(O).map((oe, he) => {
        const ae = Object.assign({}, oe);
        if (ae.validator && (ae.validator = Ba(ae.validator, !1)), ae.asyncValidator && (ae.asyncValidator = Ba(ae.asyncValidator, !0)), ae.renderMessage) {
          const Ze = `__renderMessage__${he}`;
          ne[Ze] = ae.message, ae.message = Ze, ue[Ze] = ae.renderMessage;
        }
        return ae;
      }), Ae = Ee.filter((oe) => oe.level !== "warning"), Oe = Ee.filter((oe) => oe.level === "warning"), Z = {
        valid: !0,
        errors: void 0,
        warnings: void 0
      };
      if (!Ee.length) return Z;
      const te = W ?? "__n_no_path__", Le = new ir({
        [te]: Ae
      }), ee = new ir({
        [te]: Oe
      }), {
        validateMessages: Ne
      } = (i == null ? void 0 : i.props) || {};
      Ne && (Le.messages(Ne), ee.messages(Ne));
      const je = (oe) => {
        x.value = oe.map((he) => {
          const ae = (he == null ? void 0 : he.message) || "";
          return {
            key: ae,
            render: () => ae.startsWith("__renderMessage__") ? ue[ae]() : ae
          };
        }), oe.forEach((he) => {
          var ae;
          !((ae = he.message) === null || ae === void 0) && ae.startsWith("__renderMessage__") && (he.message = ne[he.message]);
        });
      };
      if (Ae.length) {
        const oe = yield new Promise((he) => {
          Le.validate({
            [te]: Y
          }, S, he);
        });
        oe != null && oe.length && (Z.valid = !1, Z.errors = oe, je(oe));
      }
      if (Oe.length && !Z.errors) {
        const oe = yield new Promise((he) => {
          ee.validate({
            [te]: Y
          }, S, he);
        });
        oe != null && oe.length && (je(oe), Z.warnings = oe);
      }
      return !Z.errors && !Z.warnings ? D() : (l.value = !!Z.errors, s.value = !!Z.warnings), Z;
    });
    function C() {
      E("blur");
    }
    function F() {
      E("change");
    }
    function _() {
      E("focus");
    }
    function m() {
      E("input");
    }
    function A($, B) {
      return wa(this, void 0, void 0, function* () {
        let O, S, W, Q;
        return typeof $ == "string" ? (O = $, S = B) : $ !== null && typeof $ == "object" && (O = $.trigger, S = $.callback, W = $.shouldRuleBeApplied, Q = $.options), yield new Promise((Y, ue) => {
          E(O, W, Q).then(({
            valid: ne,
            errors: Ee,
            warnings: Ae
          }) => {
            ne ? (S && S(void 0, {
              warnings: Ae
            }), Y({
              warnings: Ae
            })) : (S && S(Ee, {
              warnings: Ae
            }), ue(Ee));
          });
        });
      });
    }
    $e(di, {
      path: se(t, "path"),
      disabled: g,
      mergedSize: o.mergedSize,
      mergedValidationStatus: a.mergedValidationStatus,
      restoreValidation: D,
      handleContentBlur: C,
      handleContentChange: F,
      handleContentFocus: _,
      handleContentInput: m
    });
    const T = {
      validate: A,
      restoreValidation: D,
      internalValidate: E
    }, z = L(null);
    ht(() => {
      if (!a.isAutoLabelWidth.value) return;
      const $ = z.value;
      if ($ !== null) {
        const B = $.style.whiteSpace;
        $.style.whiteSpace = "nowrap", $.style.width = "", i == null || i.deriveMaxChildLabelWidth(Number(getComputedStyle($).width.slice(0, -2))), $.style.whiteSpace = B;
      }
    });
    const j = k(() => {
      var $;
      const {
        value: B
      } = d, {
        value: O
      } = c, S = O === "top" ? "vertical" : "horizontal", {
        common: {
          cubicBezierEaseInOut: W
        },
        self: {
          labelTextColor: Q,
          asteriskColor: Y,
          lineHeight: ue,
          feedbackTextColor: ne,
          feedbackTextColorWarning: Ee,
          feedbackTextColorError: Ae,
          feedbackPadding: Oe,
          labelFontWeight: Z,
          [K("labelHeight", B)]: te,
          [K("blankHeight", B)]: Le,
          [K("feedbackFontSize", B)]: ee,
          [K("feedbackHeight", B)]: Ne,
          [K("labelPadding", S)]: je,
          [K("labelTextAlign", S)]: oe,
          [K(K("labelFontSize", O), B)]: he
        }
      } = h.value;
      let ae = ($ = v.value) !== null && $ !== void 0 ? $ : oe;
      return O === "top" && (ae = ae === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": W,
        "--n-line-height": ue,
        "--n-blank-height": Le,
        "--n-label-font-size": he,
        "--n-label-text-align": ae,
        "--n-label-height": te,
        "--n-label-padding": je,
        "--n-label-font-weight": Z,
        "--n-asterisk-color": Y,
        "--n-label-text-color": Q,
        "--n-feedback-padding": Oe,
        "--n-feedback-font-size": ee,
        "--n-feedback-height": Ne,
        "--n-feedback-text-color": ne,
        "--n-feedback-text-color-warning": Ee,
        "--n-feedback-text-color-error": Ae
      };
    }), R = n ? Xe("form-item", k(() => {
      var $;
      return `${d.value[0]}${c.value[0]}${(($ = v.value) === null || $ === void 0 ? void 0 : $[0]) || ""}`;
    }), j, t) : void 0, e = k(() => c.value === "left" && y.value === "left" && v.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: z,
      mergedClsPrefix: r,
      mergedRequired: u,
      feedbackId: p,
      renderExplains: x,
      reverseColSpace: e
    }, a), o), T), {
      cssVars: n ? void 0 : j,
      themeClass: R == null ? void 0 : R.themeClass,
      onRender: R == null ? void 0 : R.onRender
    });
  },
  render() {
    const {
      $slots: t,
      mergedClsPrefix: r,
      mergedShowLabel: n,
      mergedShowRequireMark: i,
      mergedRequireMarkPlacement: o,
      onRender: a
    } = this, l = i !== void 0 ? i : this.mergedRequired;
    a == null || a();
    const s = () => {
      const u = this.$slots.label ? this.$slots.label() : this.label;
      if (!u) return null;
      const f = b("span", {
        class: `${r}-form-item-label__text`
      }, u), d = l ? b("span", {
        class: `${r}-form-item-label__asterisk`
      }, o !== "left" ? " *" : "* ") : o === "right-hanging" && b("span", {
        class: `${r}-form-item-label__asterisk-placeholder`
      }, " *"), {
        labelProps: c
      } = this;
      return b("label", Object.assign({}, c, {
        class: [c == null ? void 0 : c.class, `${r}-form-item-label`, `${r}-form-item-label--${o}-mark`, this.reverseColSpace && `${r}-form-item-label--reverse-columns-space`],
        style: this.mergedLabelStyle,
        ref: "labelElementRef"
      }), o === "left" ? [d, f] : [f, d]);
    };
    return b("div", {
      class: [`${r}-form-item`, this.themeClass, `${r}-form-item--${this.mergedSize}-size`, `${r}-form-item--${this.mergedLabelPlacement}-labelled`, this.isAutoLabelWidth && `${r}-form-item--auto-label-width`, !n && `${r}-form-item--no-label`],
      style: this.cssVars
    }, n && s(), b("div", {
      class: [`${r}-form-item-blank`, this.mergedValidationStatus && `${r}-form-item-blank--${this.mergedValidationStatus}`]
    }, t), this.mergedShowFeedback ? b("div", {
      key: this.feedbackId,
      style: this.feedbackStyle,
      class: [`${r}-form-item-feedback-wrapper`, this.feedbackClass]
    }, b(At, {
      name: "fade-down-transition",
      mode: "out-in"
    }, {
      default: () => {
        const {
          mergedValidationStatus: u
        } = this;
        return nt(t.feedback, (f) => {
          var d;
          const {
            feedback: c
          } = this, v = f || c ? b("div", {
            key: "__feedback__",
            class: `${r}-form-item-feedback__line`
          }, f || c) : this.renderExplains.length ? (d = this.renderExplains) === null || d === void 0 ? void 0 : d.map(({
            key: y,
            render: x
          }) => b("div", {
            key: y,
            class: `${r}-form-item-feedback__line`
          }, x())) : null;
          return v ? u === "warning" ? b("div", {
            key: "controlled-warning",
            class: `${r}-form-item-feedback ${r}-form-item-feedback--warning`
          }, v) : u === "error" ? b("div", {
            key: "controlled-error",
            class: `${r}-form-item-feedback ${r}-form-item-feedback--error`
          }, v) : u === "success" ? b("div", {
            key: "controlled-success",
            class: `${r}-form-item-feedback ${r}-form-item-feedback--success`
          }, v) : b("div", {
            key: "controlled-default",
            class: `${r}-form-item-feedback`
          }, v) : null;
        });
      }
    })) : null);
  }
});
function Mg(t) {
  const {
    opacityDisabled: r,
    heightTiny: n,
    heightSmall: i,
    heightMedium: o,
    heightLarge: a,
    heightHuge: l,
    primaryColor: s,
    fontSize: u
  } = t;
  return {
    fontSize: u,
    textColor: s,
    sizeTiny: n,
    sizeSmall: i,
    sizeMedium: o,
    sizeLarge: a,
    sizeHuge: l,
    color: s,
    opacitySpinning: r
  };
}
const Ig = {
  name: "Spin",
  common: Ye,
  self: Mg
}, _g = {
  thPaddingSmall: "6px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "6px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px"
};
function Ng(t) {
  const {
    dividerColor: r,
    cardColor: n,
    modalColor: i,
    popoverColor: o,
    tableHeaderColor: a,
    tableColorStriped: l,
    textColor1: s,
    textColor2: u,
    borderRadius: f,
    fontWeightStrong: d,
    lineHeight: c,
    fontSizeSmall: v,
    fontSizeMedium: y,
    fontSizeLarge: x
  } = t;
  return Object.assign(Object.assign({}, _g), {
    fontSizeSmall: v,
    fontSizeMedium: y,
    fontSizeLarge: x,
    lineHeight: c,
    borderRadius: f,
    borderColor: qe(n, r),
    borderColorModal: qe(i, r),
    borderColorPopover: qe(o, r),
    tdColor: n,
    tdColorModal: i,
    tdColorPopover: o,
    tdColorStriped: qe(n, l),
    tdColorStripedModal: qe(i, l),
    tdColorStripedPopover: qe(o, l),
    thColor: qe(n, a),
    thColorModal: qe(i, a),
    thColorPopover: qe(o, a),
    thTextColor: s,
    tdTextColor: u,
    thFontWeight: d
  });
}
const Hg = {
  name: "Table",
  common: Ye,
  self: Ng
};
function Wg(t) {
  const {
    primaryColor: r,
    baseColor: n
  } = t;
  return {
    color: r,
    iconColor: n
  };
}
const Lg = {
  name: "IconWrapper",
  common: Ye,
  self: Wg
}, jg = N("icon-wrapper", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`), Vg = Object.assign(Object.assign({}, fe.props), {
  size: {
    type: Number,
    default: 24
  },
  borderRadius: {
    type: Number,
    default: 6
  },
  color: String,
  iconColor: String
}), qg = J({
  name: "IconWrapper",
  props: Vg,
  setup(t, {
    slots: r
  }) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: i
    } = Me(t), o = fe("IconWrapper", "-icon-wrapper", jg, Lg, t, n), a = k(() => {
      const {
        common: {
          cubicBezierEaseInOut: s
        },
        self: {
          color: u,
          iconColor: f
        }
      } = o.value;
      return {
        "--n-bezier": s,
        "--n-color": u,
        "--n-icon-color": f
      };
    }), l = i ? Xe("icon-wrapper", void 0, a, t) : void 0;
    return () => {
      const s = ft(t.size);
      return l == null || l.onRender(), b("div", {
        class: [`${n.value}-icon-wrapper`, l == null ? void 0 : l.themeClass.value],
        style: [a == null ? void 0 : a.value, {
          height: s,
          width: s,
          borderRadius: ft(t.borderRadius),
          backgroundColor: t.color,
          color: t.iconColor
        }]
      }, r);
    };
  }
}), Kg = P([P("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), N("spin-container", `
 position: relative;
 `, [N("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [_l()])]), N("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), N("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [V("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]), N("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), N("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [V("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]), Gg = {
  small: 20,
  medium: 18,
  large: 16
}, Ug = Object.assign(Object.assign({}, fe.props), {
  contentClass: String,
  contentStyle: [Object, String],
  description: String,
  stroke: String,
  size: {
    type: [String, Number],
    default: "medium"
  },
  show: {
    type: Boolean,
    default: !0
  },
  strokeWidth: Number,
  rotate: {
    type: Boolean,
    default: !0
  },
  spinning: {
    type: Boolean,
    validator: () => !0,
    default: void 0
  },
  delay: Number
}), Xg = J({
  name: "Spin",
  props: Ug,
  setup(t) {
    process.env.NODE_ENV !== "production" && Ke(() => {
      t.spinning !== void 0 && Ct("spin", "`spinning` is deprecated, please use `show` instead.");
    });
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n
    } = Me(t), i = fe("Spin", "-spin", Kg, Ig, t, r), o = k(() => {
      const {
        size: u
      } = t, {
        common: {
          cubicBezierEaseInOut: f
        },
        self: d
      } = i.value, {
        opacitySpinning: c,
        color: v,
        textColor: y
      } = d, x = typeof u == "number" ? mu(u) : d[K("size", u)];
      return {
        "--n-bezier": f,
        "--n-opacity-spinning": c,
        "--n-size": x,
        "--n-color": v,
        "--n-text-color": y
      };
    }), a = n ? Xe("spin", k(() => {
      const {
        size: u
      } = t;
      return typeof u == "number" ? String(u) : u[0];
    }), o, t) : void 0, l = _a(t, ["spinning", "show"]), s = L(!1);
    return Ke((u) => {
      let f;
      if (l.value) {
        const {
          delay: d
        } = t;
        if (d) {
          f = window.setTimeout(() => {
            s.value = !0;
          }, d), u(() => {
            clearTimeout(f);
          });
          return;
        }
      }
      s.value = l.value;
    }), {
      mergedClsPrefix: r,
      active: s,
      mergedStrokeWidth: k(() => {
        const {
          strokeWidth: u
        } = t;
        if (u !== void 0) return u;
        const {
          size: f
        } = t;
        return Gg[typeof f == "number" ? "medium" : f];
      }),
      cssVars: n ? void 0 : o,
      themeClass: a == null ? void 0 : a.themeClass,
      onRender: a == null ? void 0 : a.onRender
    };
  },
  render() {
    var t, r;
    const {
      $slots: n,
      mergedClsPrefix: i,
      description: o
    } = this, a = n.icon && this.rotate, l = (o || n.description) && b("div", {
      class: `${i}-spin-description`
    }, o || ((t = n.description) === null || t === void 0 ? void 0 : t.call(n))), s = n.icon ? b("div", {
      class: [`${i}-spin-body`, this.themeClass]
    }, b("div", {
      class: [`${i}-spin`, a && `${i}-spin--rotate`],
      style: n.default ? "" : this.cssVars
    }, n.icon()), l) : b("div", {
      class: [`${i}-spin-body`, this.themeClass]
    }, b(Yi, {
      clsPrefix: i,
      style: n.default ? "" : this.cssVars,
      stroke: this.stroke,
      "stroke-width": this.mergedStrokeWidth,
      class: `${i}-spin`
    }), l);
    return (r = this.onRender) === null || r === void 0 || r.call(this), n.default ? b("div", {
      class: [`${i}-spin-container`, this.themeClass],
      style: this.cssVars
    }, b("div", {
      class: [`${i}-spin-content`, this.active && `${i}-spin-content--spinning`, this.contentClass],
      style: this.contentStyle
    }, n), b(At, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? s : null
    })) : s;
  }
}), Yg = P([N("table", `
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `, [P("th", `
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `, [P("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), P("td", `
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `, [P("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), V("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `, [P("tr", [P("&:last-child", [P("td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]), V("single-line", [P("th", `
 border-right: 0px solid var(--n-merged-border-color);
 `), P("td", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), V("single-column", [P("tr", [P("&:not(:last-child)", [P("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]), V("striped", [P("tr:nth-of-type(even)", [P("td", "background-color: var(--n-td-color-striped)")])]), _e("bottom-bordered", [P("tr", [P("&:last-child", [P("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]), Yu(N("table", `
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `, [P("th", `
 background-color: var(--n-th-color-modal);
 `), P("td", `
 background-color: var(--n-td-color-modal);
 `)])), Zu(N("table", `
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `, [P("th", `
 background-color: var(--n-th-color-popover);
 `), P("td", `
 background-color: var(--n-td-color-popover);
 `)]))]), Zg = Object.assign(Object.assign({}, fe.props), {
  bordered: {
    type: Boolean,
    default: !0
  },
  bottomBordered: {
    type: Boolean,
    default: !0
  },
  singleLine: {
    type: Boolean,
    default: !0
  },
  striped: Boolean,
  singleColumn: Boolean,
  size: {
    type: String,
    default: "medium"
  }
}), Jg = J({
  name: "Table",
  props: Zg,
  setup(t) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n,
      mergedRtlRef: i
    } = Me(t), o = fe("Table", "-table", Yg, Hg, t, r), a = dr("Table", i, r), l = k(() => {
      const {
        size: u
      } = t, {
        self: {
          borderColor: f,
          tdColor: d,
          tdColorModal: c,
          tdColorPopover: v,
          thColor: y,
          thColorModal: x,
          thColorPopover: p,
          thTextColor: g,
          tdTextColor: h,
          borderRadius: D,
          thFontWeight: E,
          lineHeight: C,
          borderColorModal: F,
          borderColorPopover: _,
          tdColorStriped: m,
          tdColorStripedModal: A,
          tdColorStripedPopover: T,
          [K("fontSize", u)]: z,
          [K("tdPadding", u)]: j,
          [K("thPadding", u)]: R
        },
        common: {
          cubicBezierEaseInOut: e
        }
      } = o.value;
      return {
        "--n-bezier": e,
        "--n-td-color": d,
        "--n-td-color-modal": c,
        "--n-td-color-popover": v,
        "--n-td-text-color": h,
        "--n-border-color": f,
        "--n-border-color-modal": F,
        "--n-border-color-popover": _,
        "--n-border-radius": D,
        "--n-font-size": z,
        "--n-th-color": y,
        "--n-th-color-modal": x,
        "--n-th-color-popover": p,
        "--n-th-font-weight": E,
        "--n-th-text-color": g,
        "--n-line-height": C,
        "--n-td-padding": j,
        "--n-th-padding": R,
        "--n-td-color-striped": m,
        "--n-td-color-striped-modal": A,
        "--n-td-color-striped-popover": T
      };
    }), s = n ? Xe("table", k(() => t.size[0]), l, t) : void 0;
    return {
      rtlEnabled: a,
      mergedClsPrefix: r,
      cssVars: n ? void 0 : l,
      themeClass: s == null ? void 0 : s.themeClass,
      onRender: s == null ? void 0 : s.onRender
    };
  },
  render() {
    var t;
    const {
      mergedClsPrefix: r
    } = this;
    return (t = this.onRender) === null || t === void 0 || t.call(this), b("table", {
      class: [`${r}-table`, this.themeClass, {
        [`${r}-table--rtl`]: this.rtlEnabled,
        [`${r}-table--bottom-bordered`]: this.bottomBordered,
        [`${r}-table--bordered`]: this.bordered,
        [`${r}-table--single-line`]: this.singleLine,
        [`${r}-table--single-column`]: this.singleColumn,
        [`${r}-table--striped`]: this.striped
      }],
      style: this.cssVars
    }, this.$slots);
  }
}), Qg = /* @__PURE__ */ Object.assign({
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
      },
      Table: {
        thColor: "rgba(243, 243, 252, 1)"
      }
    };
    return (n, i) => (ut(), Bt(Be($m), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: Be(Ex),
      "date-locale": Be(jp),
      "theme-overrides": r
    }, {
      default: Lt(() => [
        Pr(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale", "date-locale"]));
  }
});
var Br = void 0, rr = {}, Ei;
rr.throttle = Ei = function(t, r, n, i) {
  var o, a = 0;
  typeof r != "boolean" && (i = n, n = r, r = Br);
  function l() {
    var s = this, u = +/* @__PURE__ */ new Date() - a, f = arguments;
    function d() {
      a = +/* @__PURE__ */ new Date(), n.apply(s, f);
    }
    function c() {
      o = Br;
    }
    i && !o && d(), o && clearTimeout(o), i === Br && u > t ? d() : r !== !0 && (o = setTimeout(i ? c : d, i === Br ? t - u : t));
  }
  return rr.guid && (l.guid = n.guid = n.guid || rr.guid++), l;
};
rr.debounce = function(t, r, n) {
  return n === Br ? Ei(t, r, !1) : Ei(t, n, r !== !1);
};
const ns = function(t, r, n) {
  return rr.debounce(r || 300, n ?? !0, t);
}, fb = function(t, r, n) {
  return rr.throttle(r || 300, n ?? !1, t);
}, eb = /* @__PURE__ */ Object.assign({
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
    ghost: { type: Boolean, default: !1 },
    secondary: { type: Boolean, default: !1 },
    text: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    waiting: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const n = ru(), i = nu(), o = r, a = ns(function() {
      o("click");
    }, 300);
    return (l, s) => (ut(), Bt(Be(gm), {
      class: iu(`${Be(n).class ? Be(n).class : ""}`),
      "attr-type": t.attrType,
      focusable: !1,
      bordered: !0,
      keyboard: !1,
      block: t.block,
      size: t.size,
      type: t.type,
      loading: t.loading,
      ghost: t.ghost,
      secondary: t.secondary,
      text: t.text,
      disabled: t.disabled || t.waiting,
      "icon-placement": "left",
      onClick: Be(a)
    }, Da({
      default: Lt(() => [
        t.loading ? ou("", !0) : (ut(), Bt(Be(i).default, { key: 0 }))
      ]),
      _: 2
    }, [
      l.$slots.icon ? {
        name: "icon",
        fn: Lt(() => [
          Sa(Be(i).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "attr-type", "block", "size", "type", "loading", "ghost", "secondary", "text", "disabled", "onClick"]));
  }
});
function tb(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var is = { exports: {} };
(function(t) {
  function r() {
    var n = 0, i = 1, o = 2, a = 3, l = 4, s = 5, u = 6, f = 7, d = 8, c = 9, v = 10, y = 11, x = 12, p = 13, g = 14, h = 15, D = 16, E = 17, C = 0, F = 1, _ = 2, m = 3, A = 4;
    function T(e, $) {
      return 55296 <= e.charCodeAt($) && e.charCodeAt($) <= 56319 && 56320 <= e.charCodeAt($ + 1) && e.charCodeAt($ + 1) <= 57343;
    }
    function z(e, $) {
      $ === void 0 && ($ = 0);
      var B = e.charCodeAt($);
      if (55296 <= B && B <= 56319 && $ < e.length - 1) {
        var O = B, S = e.charCodeAt($ + 1);
        return 56320 <= S && S <= 57343 ? (O - 55296) * 1024 + (S - 56320) + 65536 : O;
      }
      if (56320 <= B && B <= 57343 && $ >= 1) {
        var O = e.charCodeAt($ - 1), S = B;
        return 55296 <= O && O <= 56319 ? (O - 55296) * 1024 + (S - 56320) + 65536 : S;
      }
      return B;
    }
    function j(e, $, B) {
      var O = [e].concat($).concat([B]), S = O[O.length - 2], W = B, Q = O.lastIndexOf(g);
      if (Q > 1 && O.slice(1, Q).every(function(ne) {
        return ne == a;
      }) && [a, p, E].indexOf(e) == -1)
        return _;
      var Y = O.lastIndexOf(l);
      if (Y > 0 && O.slice(1, Y).every(function(ne) {
        return ne == l;
      }) && [x, l].indexOf(S) == -1)
        return O.filter(function(ne) {
          return ne == l;
        }).length % 2 == 1 ? m : A;
      if (S == n && W == i)
        return C;
      if (S == o || S == n || S == i)
        return W == g && $.every(function(ne) {
          return ne == a;
        }) ? _ : F;
      if (W == o || W == n || W == i)
        return F;
      if (S == u && (W == u || W == f || W == c || W == v))
        return C;
      if ((S == c || S == f) && (W == f || W == d))
        return C;
      if ((S == v || S == d) && W == d)
        return C;
      if (W == a || W == h)
        return C;
      if (W == s)
        return C;
      if (S == x)
        return C;
      var ue = O.indexOf(a) != -1 ? O.lastIndexOf(a) - 1 : O.length - 2;
      return [p, E].indexOf(O[ue]) != -1 && O.slice(ue + 1, -1).every(function(ne) {
        return ne == a;
      }) && W == g || S == h && [D, E].indexOf(W) != -1 ? C : $.indexOf(l) != -1 ? _ : S == l && W == l ? C : F;
    }
    this.nextBreak = function(e, $) {
      if ($ === void 0 && ($ = 0), $ < 0)
        return 0;
      if ($ >= e.length - 1)
        return e.length;
      for (var B = R(z(e, $)), O = [], S = $ + 1; S < e.length; S++)
        if (!T(e, S - 1)) {
          var W = R(z(e, S));
          if (j(B, O, W))
            return S;
          O.push(W);
        }
      return e.length;
    }, this.splitGraphemes = function(e) {
      for (var $ = [], B = 0, O; (O = this.nextBreak(e, B)) < e.length; )
        $.push(e.slice(B, O)), B = O;
      return B < e.length && $.push(e.slice(B)), $;
    }, this.iterateGraphemes = function(e) {
      var $ = 0, B = {
        next: (function() {
          var O, S;
          return (S = this.nextBreak(e, $)) < e.length ? (O = e.slice($, S), $ = S, { value: O, done: !1 }) : $ < e.length ? (O = e.slice($), $ = e.length, { value: O, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && (B[Symbol.iterator] = function() {
        return B;
      }), B;
    }, this.countGraphemes = function(e) {
      for (var $ = 0, B = 0, O; (O = this.nextBreak(e, B)) < e.length; )
        B = O, $++;
      return B < e.length && $++, $;
    };
    function R(e) {
      return 1536 <= e && e <= 1541 || // Cf   [6] ARABIC NUMBER SIGN..ARABIC NUMBER MARK ABOVE
      e == 1757 || // Cf       ARABIC END OF AYAH
      e == 1807 || // Cf       SYRIAC ABBREVIATION MARK
      e == 2274 || // Cf       ARABIC DISPUTED END OF AYAH
      e == 3406 || // Lo       MALAYALAM LETTER DOT REPH
      e == 69821 || // Cf       KAITHI NUMBER SIGN
      70082 <= e && e <= 70083 || // Lo   [2] SHARADA SIGN JIHVAMULIYA..SHARADA SIGN UPADHMANIYA
      e == 72250 || // Lo       ZANABAZAR SQUARE CLUSTER-INITIAL LETTER RA
      72326 <= e && e <= 72329 || // Lo   [4] SOYOMBO CLUSTER-INITIAL LETTER RA..SOYOMBO CLUSTER-INITIAL LETTER SA
      e == 73030 ? x : e == 13 ? n : e == 10 ? i : 0 <= e && e <= 9 || // Cc  [10] <control-0000>..<control-0009>
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
      918e3 <= e && e <= 921599 ? o : 768 <= e && e <= 879 || // Mn [112] COMBINING GRAVE ACCENT..COMBINING LATIN SMALL LETTER X
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
      917760 <= e && e <= 917999 ? a : 127462 <= e && e <= 127487 ? l : e == 2307 || // Mc       DEVANAGARI SIGN VISARGA
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
      55243 <= e && e <= 55291 ? d : e == 44032 || // Lo       HANGUL SYLLABLE GA
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
      e == 55176 ? c : 44033 <= e && e <= 44059 || // Lo  [27] HANGUL SYLLABLE GAG..HANGUL SYLLABLE GAH
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
      55177 <= e && e <= 55203 ? v : e == 9757 || // So       WHITE UP POINTING INDEX
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
      129489 <= e && e <= 129501 ? p : 127995 <= e && e <= 127999 ? g : e == 8205 ? h : e == 9792 || // So       FEMALE SIGN
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
      e == 128658 ? D : 128102 <= e && e <= 128105 ? E : y;
    }
    return this;
  }
  t.exports && (t.exports = r);
})(is);
var rb = is.exports;
const nb = /* @__PURE__ */ tb(rb), ib = new nb(), ob = (t = "") => ib.countGraphemes(t), os = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ io({
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
  emits: /* @__PURE__ */ io(["blur", "input"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const n = au(t, "modelValue"), i = r;
    function o() {
      let s = n.value;
      if (t.trim) {
        const u = s.trim();
        n.value = u, s = u;
      }
      return s;
    }
    function a() {
      const s = o();
      i("blur", { value: s });
    }
    function l(s) {
      n.value = s;
      let u = s;
      t.trim && (u = u.trim()), i("input", { value: u });
    }
    return (s, u) => (ut(), Bt(Be(om), {
      "input-props": { autocomplete: "off" },
      type: t.type,
      size: t.size,
      "show-password-on": t.showPassword ? "click" : void 0,
      value: n.value,
      maxlength: t.maxlength,
      "show-count": t.showCount,
      "count-graphemes": t.maxlength != null && t.maxlength > 0 || t.showCount ? Be(ob) : void 0,
      placeholder: t.placeholder,
      autofocus: t.autofocus,
      disabled: t.disabled,
      readonly: t.readonly,
      onInput: l,
      onBlur: a
    }, Da({ _: 2 }, [
      t.prefixIcon ? {
        name: "prefix",
        fn: Lt(() => [
          Sa(Be(Qi), lu(su(t.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly"]));
  }
}), ab = /* @__PURE__ */ Object.assign({
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
      const c = {};
      return t.model.forEach((v) => {
        v.slot || (c[v.field] = v.value);
      }), L(c);
    }();
    function o() {
      const c = {};
      return t.model.forEach((v) => {
        v.slot && (c[v.field] = hu(v.value));
      }), { ...i.value, ...c };
    }
    const a = n, l = oo("form"), s = ns(function() {
      document.activeElement && document.activeElement.blur(), l.value.validate((c) => {
        a("submit", { formData: o(), valid: !c || c.length === 0, errors: c });
      }).catch(() => null);
    }), u = oo("formItem");
    function f(c = "") {
      if (!c) {
        l.value.restoreValidation();
        return;
      }
      const v = u.value.find((y) => y.path === c);
      v && v.restoreValidation();
    }
    function d(c) {
      c && t.rules && t.rules[c] && (t.rules[c].trigger && t.rules[c].trigger.includes("input") || f(c));
    }
    return r({ restoreValidation: f }), (c, v) => (ut(), Bt(Be(Zm), {
      ref: "form",
      "show-label": t.showLabel,
      "label-placement": t.labelPlacement,
      "label-width": "auto",
      "label-align": t.labelPlacement === "left" ? "right" : "left",
      model: Be(i),
      rules: t.rules,
      onSubmit: uu(Be(s), ["prevent"])
    }, {
      default: Lt(() => [
        (ut(!0), fu(ct, null, du(t.model, (y) => (ut(), Bt(Be(kg), {
          ref_for: !0,
          ref: "formItem",
          key: y.field,
          label: y.label,
          path: y.field,
          "feedback-class": t.feedbackSizeClass ? `p-form-item-feedback-${t.feedbackSizeClass}` : "",
          first: !0
        }, {
          default: Lt(() => [
            !y.slot && y.type === "input" ? (ut(), Bt(cu(Be(os)), or({
              key: 0,
              modelValue: Be(i)[y.field],
              "onUpdate:modelValue": (x) => Be(i)[y.field] = x,
              ref_for: !0
            }, { disabled: t.disabled, readonly: t.readonly, ...y.props }, {
              onInput: (x) => d(y.field)
            }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : Pr(c.$slots, y.field, { key: 1 })
          ]),
          _: 2
        }, 1032, ["label", "path", "feedback-class"]))), 128)),
        Pr(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["show-label", "label-placement", "label-align", "model", "rules", "onSubmit"]));
  }
}), lb = /* @__PURE__ */ Object.assign({
  name: "PTable",
  inheritAttrs: !1
}, {
  __name: "table",
  props: {
    bottomBordered: { type: Boolean, default: !0 },
    bordered: { type: Boolean, default: !1 },
    singleColumn: { type: Boolean, default: !1 },
    singleLine: { type: Boolean, default: !0 },
    size: { type: String, default: "small" },
    striped: { type: Boolean, default: !1 }
  },
  setup(t) {
    return (r, n) => (ut(), Bt(Be(Jg), {
      "bottom-bordered": t.bottomBordered,
      bordered: t.bordered,
      "single-column": t.singleColumn,
      "single-line": t.singleLine,
      size: t.size,
      striped: t.striped
    }, {
      default: Lt(() => [
        Pr(r.$slots, "default")
      ]),
      _: 3
    }, 8, ["bottom-bordered", "bordered", "single-column", "single-line", "size", "striped"]));
  }
}), db = ({ delay: t = 300, minPendingTime: r = 500, loadingValue: n = !1 } = {}) => {
  let i = 0, o = null;
  const a = () => {
    o && (clearTimeout(o), o = null);
  }, l = L(!!n), s = L(!!n);
  let u = null;
  const f = () => (l.value = !1, new Promise((d) => {
    u = d;
  }));
  return Fe(
    l,
    (d) => {
      if (i === 0)
        i = (/* @__PURE__ */ new Date()).getTime(), a(), o = setTimeout(() => {
          s.value = d;
        }, t);
      else {
        if (a(), s.value !== d) {
          const v = (/* @__PURE__ */ new Date()).getTime() - i - t, y = v >= r ? 0 : r - v;
          o = setTimeout(() => {
            s.value = d, u && (u(), u = null);
          }, y);
        } else
          u && (u(), u = null);
        i = 0;
      }
    },
    { immediate: !!n, deep: !1 }
  ), xu(() => {
    u = null, a();
  }), { loading: s, waiting: l, doneLoading: f };
}, cb = {
  install: (t, r = {}) => {
    const { prefix: n = "p" } = r;
    t.component(`${n}-config-provider`, Qg), t.component(`${n}-button`, eb), t.component(`${n}-input`, os), t.component(`${n}-form`, ab), t.component(`${n}-table`, lb), t.component(`${n}-icon-wrapper`, qg), t.component(`${n}-icon`, Qi), t.component(`${n}-input-group`, sm), t.component(`${n}-input-group-label`, dm), t.component(`${n}-popover`, Vl), t.component(`${n}-spin`, Xg), t.component(`${n}-collapse`, Bm), t.component(`${n}-collapse-item`, Sm), t.component(`${n}-dropdown`, qm);
  }
};
export {
  ns as debounce,
  cb as default,
  fb as throttle,
  db as useDelayLoading
};
