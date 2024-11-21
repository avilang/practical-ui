import { createTextVNode as jn, Fragment as ht, Comment as zi, isVNode as Od, defineComponent as Q, inject as xe, getCurrentInstance as $r, watch as ze, onBeforeUnmount as Ge, ref as L, readonly as nn, computed as R, onMounted as ot, onBeforeMount as wn, reactive as Gl, provide as we, withDirectives as kt, toRef as le, h, Teleport as Xl, nextTick as et, renderSlot as Vn, onActivated as Yl, onDeactivated as Zl, mergeProps as an, shallowRef as Md, watchEffect as rt, Transition as ft, TransitionGroup as Id, vShow as qn, cloneVNode as Jl, Text as _d, markRaw as pa, openBlock as dt, createBlock as Ct, unref as Fe, withCtx as yt, createVNode as po, mergeModels as no, useModel as Ql, createSlots as es, normalizeProps as Ld, guardReactiveProps as Nd, useTemplateRef as xa, withModifiers as Hd, createElementBlock as ts, renderList as Wd, resolveDynamicComponent as jd, toValue as Vd, useAttrs as ns, normalizeClass as rs, normalizeStyle as qd, useSlots as Kd, createCommentVNode as ti, onScopeDispose as os, toDisplayString as ga } from "vue";
let ro = [];
const is = /* @__PURE__ */ new WeakMap();
function Ud() {
  ro.forEach((e) => e(...is.get(e))), ro = [];
}
function as(e, ...n) {
  is.set(e, n), !ro.includes(e) && ro.push(e) === 1 && requestAnimationFrame(Ud);
}
function Wt(e, n) {
  let { target: r } = e;
  for (; r; ) {
    if (r.dataset && r.dataset[n] !== void 0)
      return !0;
    r = r.parentElement;
  }
  return !1;
}
function Kn(e) {
  return e.composedPath()[0] || null;
}
function vr(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function _n(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Dt(e, n) {
  const r = e.trim().split(/\s+/g), o = {
    top: r[0]
  };
  switch (r.length) {
    case 1:
      o.right = r[0], o.bottom = r[0], o.left = r[0];
      break;
    case 2:
      o.right = r[1], o.left = r[1], o.bottom = r[0];
      break;
    case 3:
      o.right = r[1], o.bottom = r[2], o.left = r[1];
      break;
    case 4:
      o.right = r[1], o.bottom = r[2], o.left = r[3];
      break;
    default:
      throw new Error("[seemly/getMargin]:" + e + " is not a valid value.");
  }
  return n === void 0 ? o : o[n];
}
const ma = {
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
}, Yn = "^\\s*", Zn = "\\s*$", hn = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", vn = "([0-9A-Fa-f])", pn = "([0-9A-Fa-f]{2})", Gd = new RegExp(`${Yn}rgb\\s*\\(${hn},${hn},${hn}\\)${Zn}`), Xd = new RegExp(`${Yn}rgba\\s*\\(${hn},${hn},${hn},${hn}\\)${Zn}`), Yd = new RegExp(`${Yn}#${vn}${vn}${vn}${Zn}`), Zd = new RegExp(`${Yn}#${pn}${pn}${pn}${Zn}`), Jd = new RegExp(`${Yn}#${vn}${vn}${vn}${vn}${Zn}`), Qd = new RegExp(`${Yn}#${pn}${pn}${pn}${pn}${Zn}`);
function at(e) {
  return parseInt(e, 16);
}
function bn(e) {
  try {
    let n;
    if (n = Zd.exec(e))
      return [at(n[1]), at(n[2]), at(n[3]), 1];
    if (n = Gd.exec(e))
      return [Je(n[1]), Je(n[5]), Je(n[9]), 1];
    if (n = Xd.exec(e))
      return [
        Je(n[1]),
        Je(n[5]),
        Je(n[9]),
        ur(n[13])
      ];
    if (n = Yd.exec(e))
      return [
        at(n[1] + n[1]),
        at(n[2] + n[2]),
        at(n[3] + n[3]),
        1
      ];
    if (n = Qd.exec(e))
      return [
        at(n[1]),
        at(n[2]),
        at(n[3]),
        ur(at(n[4]) / 255)
      ];
    if (n = Jd.exec(e))
      return [
        at(n[1] + n[1]),
        at(n[2] + n[2]),
        at(n[3] + n[3]),
        ur(at(n[4] + n[4]) / 255)
      ];
    if (e in ma)
      return bn(ma[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (n) {
    throw n;
  }
}
function ec(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function ni(e, n, r, o) {
  return `rgba(${Je(e)}, ${Je(n)}, ${Je(r)}, ${ec(o)})`;
}
function Oo(e, n, r, o, i) {
  return Je((e * n * (1 - o) + r * o) / i);
}
function ut(e, n) {
  Array.isArray(e) || (e = bn(e)), Array.isArray(n) || (n = bn(n));
  const r = e[3], o = n[3], i = ur(r + o - r * o);
  return ni(Oo(e[0], r, n[0], o, i), Oo(e[1], r, n[1], o, i), Oo(e[2], r, n[2], o, i), i);
}
function ge(e, n) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : bn(e);
  return n.alpha ? ni(r, o, i, n.alpha) : ni(r, o, i, a);
}
function Ir(e, n) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : bn(e), { lightness: l = 1, alpha: s = 1 } = n;
  return tc([r * l, o * l, i * l, a * s]);
}
function ur(e) {
  const n = Math.round(Number(e) * 100) / 100;
  return n > 1 ? 1 : n < 0 ? 0 : n;
}
function Je(e) {
  const n = Math.round(Number(e));
  return n > 255 ? 255 : n < 0 ? 0 : n;
}
function tc(e) {
  const [n, r, o] = e;
  return 3 in e ? `rgba(${Je(n)}, ${Je(r)}, ${Je(o)}, ${ur(e[3])})` : `rgba(${Je(n)}, ${Je(r)}, ${Je(o)}, 1)`;
}
function pr(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function Cn(e, n = [], r) {
  const o = {};
  return n.forEach((i) => {
    o[i] = e[i];
  }), Object.assign(o, r);
}
function ls(e, n = [], r) {
  const o = {};
  return Object.getOwnPropertyNames(e).forEach((a) => {
    n.includes(a) || (o[a] = e[a]);
  }), Object.assign(o, r);
}
function ri(e, n = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(jn(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        ri(o, n, r);
        return;
      }
      if (o.type === ht) {
        if (o.children === null) return;
        Array.isArray(o.children) && ri(o.children, n, r);
      } else {
        if (o.type === zi && n) return;
        r.push(o);
      }
    }
  }), r;
}
function he(e, ...n) {
  if (Array.isArray(e))
    e.forEach((r) => he(r, ...n));
  else
    return e(...n);
}
function Un(e) {
  return Object.keys(e);
}
function Qe(e, ...n) {
  return typeof e == "function" ? e(...n) : typeof e == "string" ? jn(e) : typeof e == "number" ? jn(String(e)) : null;
}
const ba = /* @__PURE__ */ new Set();
function nt(e, n) {
  const r = `[naive/${e}]: ${n}`;
  ba.has(r) || (ba.add(r), console.error(r));
}
function Vt(e, n) {
  console.error(`[naive/${e}]: ${n}`);
}
function Dr(e, n) {
  throw new Error(`[naive/${e}]: ${n}`);
}
function Ca(e) {
  switch (typeof e) {
    case "string":
      return e || void 0;
    case "number":
      return String(e);
    default:
      return;
  }
}
function oi(e, n = "default", r = void 0) {
  const o = e[n];
  if (!o)
    return Vt("getFirstSlotVNode", `slot[${n}] is empty`), null;
  const i = ri(o(r));
  return i.length === 1 ? i[0] : (Vt("getFirstSlotVNode", `slot[${n}] should have exactly one child`), null);
}
function nc(e) {
  return (n) => {
    n ? e.value = n.$el : e.value = null;
  };
}
function xt(e) {
  return e.some((n) => Od(n) ? !(n.type === zi || n.type === ht && !xt(n.children)) : !0) ? e : null;
}
function Pt(e, n) {
  return e && xt(e()) || n();
}
function ii(e, n, r) {
  return e && xt(e(n)) || r(n);
}
function _e(e, n) {
  const r = e && xt(e());
  return n(r || null);
}
function rc(e, n, r) {
  const o = e && xt(e(n));
  return r(o || null);
}
function ai(e) {
  return !(e && xt(e()));
}
function Mo(e) {
  const n = e.filter((r) => r !== void 0);
  if (n.length !== 0)
    return n.length === 1 ? n[0] : (r) => {
      e.forEach((o) => {
        o && o(r);
      });
    };
}
const li = Q({
  render() {
    var e, n;
    return (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e);
  }
}), oc = /^(\d|\.)+$/, ya = /(\d|\.)+/;
function jt(e, {
  c: n = 1,
  offset: r = 0,
  attachPx: o = !0
} = {}) {
  if (typeof e == "number") {
    const i = (e + r) * n;
    return i === 0 ? "0" : `${i}px`;
  } else if (typeof e == "string")
    if (oc.test(e)) {
      const i = (Number(e) + r) * n;
      return o ? i === 0 ? "0" : `${i}px` : `${i}`;
    } else {
      const i = ya.exec(e);
      return i ? e.replace(ya, String((Number(i[0]) + r) * n)) : e;
    }
  return e;
}
function oo(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
function wa(e) {
  const {
    left: n,
    right: r,
    top: o,
    bottom: i
  } = Dt(e);
  return `${o} ${r} ${i} ${n}`;
}
function ic(e) {
  let n = 0;
  for (let r = 0; r < e.length; ++r)
    e[r] === "&" && ++n;
  return n;
}
const ss = /\s*,(?![^(]*\))\s*/g, ac = /\s+/g;
function lc(e, n) {
  const r = [];
  return n.split(ss).forEach((o) => {
    let i = ic(o);
    if (i) {
      if (i === 1) {
        e.forEach((l) => {
          r.push(o.replace("&", l));
        });
        return;
      }
    } else {
      e.forEach((l) => {
        r.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (l && l + " ") + o
        );
      });
      return;
    }
    let a = [
      o
    ];
    for (; i--; ) {
      const l = [];
      a.forEach((s) => {
        e.forEach((u) => {
          l.push(s.replace("&", u));
        });
      }), a = l;
    }
    a.forEach((l) => r.push(l));
  }), r;
}
function sc(e, n) {
  const r = [];
  return n.split(ss).forEach((o) => {
    e.forEach((i) => {
      r.push((i && i + " ") + o);
    });
  }), r;
}
function uc(e) {
  let n = [""];
  return e.forEach((r) => {
    r = r && r.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    r && (r.includes("&") ? n = lc(n, r) : n = sc(n, r));
  }), n.join(", ").replace(ac, " ");
}
function Ba(e) {
  if (!e)
    return;
  const n = e.parentElement;
  n && n.removeChild(e);
}
function xo(e, n) {
  return (n ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function dc(e) {
  const n = document.createElement("style");
  return n.setAttribute("cssr-id", e), n;
}
function _r(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const cc = /[A-Z]/g;
function us(e) {
  return e.replace(cc, (n) => "-" + n.toLowerCase());
}
function fc(e, n = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((r) => n + `  ${us(r[0])}: ${r[1]};`).join(`
`) + `
` + n + "}" : `: ${e};`;
}
function hc(e, n, r) {
  return typeof e == "function" ? e({
    context: n.context,
    props: r
  }) : e;
}
function Sa(e, n, r, o) {
  if (!n)
    return "";
  const i = hc(n, r, o);
  if (!i)
    return "";
  if (typeof i == "string")
    return `${e} {
${i}
}`;
  const a = Object.keys(i);
  if (a.length === 0)
    return r.config.keepEmptyBlock ? e + ` {
}` : "";
  const l = e ? [
    e + " {"
  ] : [];
  return a.forEach((s) => {
    const u = i[s];
    if (s === "raw") {
      l.push(`
` + u + `
`);
      return;
    }
    s = us(s), u != null && l.push(`  ${s}${fc(u)}`);
  }), e && l.push("}"), l.join(`
`);
}
function si(e, n, r) {
  e && e.forEach((o) => {
    if (Array.isArray(o))
      si(o, n, r);
    else if (typeof o == "function") {
      const i = o(n);
      Array.isArray(i) ? si(i, n, r) : i && r(i);
    } else o && r(o);
  });
}
function ds(e, n, r, o, i) {
  const a = e.$;
  let l = "";
  if (!a || typeof a == "string")
    _r(a) ? l = a : n.push(a);
  else if (typeof a == "function") {
    const d = a({
      context: o.context,
      props: i
    });
    _r(d) ? l = d : n.push(d);
  } else if (a.before && a.before(o.context), !a.$ || typeof a.$ == "string")
    _r(a.$) ? l = a.$ : n.push(a.$);
  else if (a.$) {
    const d = a.$({
      context: o.context,
      props: i
    });
    _r(d) ? l = d : n.push(d);
  }
  const s = uc(n), u = Sa(s, e.props, o, i);
  l ? r.push(`${l} {`) : u.length && r.push(u), e.children && si(e.children, {
    context: o.context,
    props: i
  }, (d) => {
    if (typeof d == "string") {
      const c = Sa(s, { raw: d }, o, i);
      r.push(c);
    } else
      ds(d, n, r, o, i);
  }), n.pop(), l && r.push("}"), a && a.after && a.after(o.context);
}
function vc(e, n, r) {
  const o = [];
  return ds(e, [], o, n, r), o.join(`

`);
}
function xr(e) {
  for (var n = 0, r, o = 0, i = e.length; i >= 4; ++o, i -= 4)
    r = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, n = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      n ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      n ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      n ^= e.charCodeAt(o) & 255, n = /* Math.imul(h, m): */
      (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16);
  }
  return n ^= n >>> 13, n = /* Math.imul(h, m): */
  (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), ((n ^ n >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function pc(e, n, r, o) {
  const { els: i } = n;
  if (r === void 0)
    i.forEach(Ba), n.els = [];
  else {
    const a = xo(r, o);
    a && i.includes(a) && (Ba(a), n.els = i.filter((l) => l !== a));
  }
}
function Fa(e, n) {
  e.push(n);
}
function xc(e, n, r, o, i, a, l, s, u) {
  let d;
  if (r === void 0 && (d = n.render(o), r = xr(d)), u) {
    u.adapter(r, d ?? n.render(o));
    return;
  }
  s === void 0 && (s = document.head);
  const c = xo(r, s);
  if (c !== null && !a)
    return c;
  const f = c ?? dc(r);
  if (d === void 0 && (d = n.render(o)), f.textContent = d, c !== null)
    return c;
  if (l) {
    const p = s.querySelector(`meta[name="${l}"]`);
    if (p)
      return s.insertBefore(f, p), Fa(n.els, f), f;
  }
  return i ? s.insertBefore(f, s.querySelector("style, link")) : s.appendChild(f), Fa(n.els, f), f;
}
function gc(e) {
  return vc(this, this.instance, e);
}
function mc(e = {}) {
  const { id: n, ssr: r, props: o, head: i = !1, force: a = !1, anchorMetaName: l, parent: s } = e;
  return xc(this.instance, this, n, o, i, a, l, s, r);
}
function bc(e = {}) {
  const { id: n, parent: r } = e;
  pc(this.instance, this, n, r);
}
const Lr = function(e, n, r, o) {
  return {
    instance: e,
    $: n,
    props: r,
    children: o,
    els: [],
    render: gc,
    mount: mc,
    unmount: bc
  };
}, Cc = function(e, n, r, o) {
  return Array.isArray(n) ? Lr(e, { $: null }, null, n) : Array.isArray(r) ? Lr(e, n, null, r) : Array.isArray(o) ? Lr(e, n, r, o) : Lr(e, n, r, null);
};
function cs(e = {}) {
  const n = {
    c: (...r) => Cc(n, ...r),
    use: (r, ...o) => r.install(n, ...o),
    find: xo,
    context: {},
    config: e
  };
  return n;
}
function yc(e, n) {
  if (e === void 0)
    return !1;
  if (n) {
    const { context: { ids: r } } = n;
    return r.has(e);
  }
  return xo(e) !== null;
}
function wc(e) {
  let n = ".", r = "__", o = "--", i;
  if (e) {
    let v = e.blockPrefix;
    v && (n = v), v = e.elementPrefix, v && (r = v), v = e.modifierPrefix, v && (o = v);
  }
  const a = {
    install(v) {
      i = v.c;
      const g = v.context;
      g.bem = {}, g.bem.b = null, g.bem.els = null;
    }
  };
  function l(v) {
    let g, b;
    return {
      before(x) {
        g = x.bem.b, b = x.bem.els, x.bem.els = null;
      },
      after(x) {
        x.bem.b = g, x.bem.els = b;
      },
      $({ context: x, props: B }) {
        return v = typeof v == "string" ? v : v({ context: x, props: B }), x.bem.b = v, `${(B == null ? void 0 : B.bPrefix) || n}${x.bem.b}`;
      }
    };
  }
  function s(v) {
    let g;
    return {
      before(b) {
        g = b.bem.els;
      },
      after(b) {
        b.bem.els = g;
      },
      $({ context: b, props: x }) {
        return v = typeof v == "string" ? v : v({ context: b, props: x }), b.bem.els = v.split(",").map((B) => B.trim()), b.bem.els.map((B) => `${(x == null ? void 0 : x.bPrefix) || n}${b.bem.b}${r}${B}`).join(", ");
      }
    };
  }
  function u(v) {
    return {
      $({ context: g, props: b }) {
        v = typeof v == "string" ? v : v({ context: g, props: b });
        const x = v.split(",").map((y) => y.trim());
        function B(y) {
          return x.map((S) => `&${(b == null ? void 0 : b.bPrefix) || n}${g.bem.b}${y !== void 0 ? `${r}${y}` : ""}${o}${S}`).join(", ");
        }
        const A = g.bem.els;
        if (A !== null) {
          if (process.env.NODE_ENV !== "production" && A.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${v}) is invalid, using modifier inside multiple elements is not allowed`);
          return B(A[0]);
        } else
          return B();
      }
    };
  }
  function d(v) {
    return {
      $({ context: g, props: b }) {
        v = typeof v == "string" ? v : v({ context: g, props: b });
        const x = g.bem.els;
        if (process.env.NODE_ENV !== "production" && x !== null && x.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${v}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(b == null ? void 0 : b.bPrefix) || n}${g.bem.b}${x !== null && x.length > 0 ? `${r}${x[0]}` : ""}${o}${v})`;
      }
    };
  }
  return Object.assign(a, {
    cB: (...v) => i(l(v[0]), v[1], v[2]),
    cE: (...v) => i(s(v[0]), v[1], v[2]),
    cM: (...v) => i(u(v[0]), v[1], v[2]),
    cNotM: (...v) => i(d(v[0]), v[1], v[2])
  }), a;
}
const Bc = "n", gr = `.${Bc}-`, Sc = "__", Fc = "--", fs = cs(), hs = wc({
  blockPrefix: gr,
  elementPrefix: Sc,
  modifierPrefix: Fc
});
fs.use(hs);
const {
  c: z,
  find: ly
} = fs, {
  cB: O,
  cE: k,
  cM: V,
  cNotM: He
} = hs;
function Ti(e) {
  return z(({
    props: {
      bPrefix: n
    }
  }) => `${n || gr}modal, ${n || gr}drawer`, [e]);
}
function vs(e) {
  return z(({
    props: {
      bPrefix: n
    }
  }) => `${n || gr}popover`, [e]);
}
function ps(e) {
  return z(({
    props: {
      bPrefix: n
    }
  }) => `&${n || gr}modal`, e);
}
const Ac = (...e) => z(">", [O(...e)]);
function Y(e, n) {
  return e + (n === "default" ? "" : n.replace(/^[a-z]/, (r) => r.toUpperCase()));
}
let Io;
function $c() {
  return Io === void 0 && (Io = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Io;
}
const Pr = typeof document < "u" && typeof window < "u", xs = /* @__PURE__ */ new WeakSet();
function Dc(e) {
  xs.add(e);
}
function Pc(e) {
  return !xs.has(e);
}
function Ec(e, n, r) {
  var o;
  const i = xe(e, null);
  if (i === null) return;
  const a = (o = $r()) === null || o === void 0 ? void 0 : o.proxy;
  ze(r, l), l(r.value), Ge(() => {
    l(void 0, r.value);
  });
  function l(d, c) {
    if (!i) return;
    const f = i[n];
    c !== void 0 && s(f, c), d !== void 0 && u(f, d);
  }
  function s(d, c) {
    d[c] || (d[c] = []), d[c].splice(d[c].findIndex((f) => f === a), 1);
  }
  function u(d, c) {
    d[c] || (d[c] = []), ~d[c].findIndex((f) => f === a) || d[c].push(a);
  }
}
function kc(e, n, r) {
  const o = L(e.value);
  let i = null;
  return ze(e, (a) => {
    i !== null && window.clearTimeout(i), a === !0 ? r && !r.value ? o.value = !0 : i = window.setTimeout(() => {
      o.value = !0;
    }, n) : o.value = !1;
  }), o;
}
function gs(e) {
  const n = L(!!e.value);
  if (n.value)
    return nn(n);
  const r = ze(e, (o) => {
    o && (n.value = !0, r());
  });
  return nn(n);
}
function We(e) {
  const n = R(e), r = L(n.value);
  return ze(n, (o) => {
    r.value = o;
  }), typeof e == "function" ? r : {
    __v_isRef: !0,
    get value() {
      return r.value;
    },
    set value(o) {
      e.set(o);
    }
  };
}
function Ri() {
  return $r() !== null;
}
const Oi = typeof window < "u";
let Ln, dr;
const zc = () => {
  var e, n;
  Ln = Oi ? (n = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || n === void 0 ? void 0 : n.ready : void 0, dr = !1, Ln !== void 0 ? Ln.then(() => {
    dr = !0;
  }) : dr = !0;
};
zc();
function Tc(e) {
  if (dr)
    return;
  let n = !1;
  ot(() => {
    dr || Ln == null || Ln.then(() => {
      n || e();
    });
  }), Ge(() => {
    n = !0;
  });
}
function Qr(e) {
  return e.composedPath()[0];
}
const Rc = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Oc(e, n, r) {
  if (e === "mousemoveoutside") {
    const o = (i) => {
      n.contains(Qr(i)) || r(i);
    };
    return {
      mousemove: o,
      touchstart: o
    };
  } else if (e === "clickoutside") {
    let o = !1;
    const i = (l) => {
      o = !n.contains(Qr(l));
    }, a = (l) => {
      o && (n.contains(Qr(l)) || r(l));
    };
    return {
      mousedown: i,
      mouseup: a,
      touchstart: i,
      touchend: a
    };
  }
  return console.error(
    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
    `[evtd/create-trap-handler]: name \`${e}\` is invalid. This could be a bug of evtd.`
  ), {};
}
function ms(e, n, r) {
  const o = Rc[e];
  let i = o.get(n);
  i === void 0 && o.set(n, i = /* @__PURE__ */ new WeakMap());
  let a = i.get(r);
  return a === void 0 && i.set(r, a = Oc(e, n, r)), a;
}
function Mc(e, n, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = ms(e, n, r);
    return Object.keys(i).forEach((a) => {
      Le(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function Ic(e, n, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = ms(e, n, r);
    return Object.keys(i).forEach((a) => {
      De(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function _c() {
  if (typeof window > "u")
    return {
      on: () => {
      },
      off: () => {
      }
    };
  const e = /* @__PURE__ */ new WeakMap(), n = /* @__PURE__ */ new WeakMap();
  function r() {
    e.set(this, !0);
  }
  function o() {
    e.set(this, !0), n.set(this, !0);
  }
  function i(C, $, M) {
    const I = C[$];
    return C[$] = function() {
      return M.apply(C, arguments), I.apply(C, arguments);
    }, C;
  }
  function a(C, $) {
    C[$] = Event.prototype[$];
  }
  const l = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function u() {
    var C;
    return (C = l.get(this)) !== null && C !== void 0 ? C : null;
  }
  function d(C, $) {
    s !== void 0 && Object.defineProperty(C, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: $ ?? s.get
    });
  }
  const c = {
    bubble: {},
    capture: {}
  }, f = {};
  function p() {
    const C = function($) {
      const { type: M, eventPhase: I, bubbles: K } = $, H = Qr($);
      if (I === 2)
        return;
      const t = I === 1 ? "capture" : "bubble";
      let F = H;
      const D = [];
      for (; F === null && (F = window), D.push(F), F !== window; )
        F = F.parentNode || null;
      const _ = c.capture[M], T = c.bubble[M];
      if (i($, "stopPropagation", r), i($, "stopImmediatePropagation", o), d($, u), t === "capture") {
        if (_ === void 0)
          return;
        for (let j = D.length - 1; j >= 0 && !e.has($); --j) {
          const J = D[j], Z = _.get(J);
          if (Z !== void 0) {
            l.set($, J);
            for (const ae of Z) {
              if (n.has($))
                break;
              ae($);
            }
          }
          if (j === 0 && !K && T !== void 0) {
            const ae = T.get(J);
            if (ae !== void 0)
              for (const W of ae) {
                if (n.has($))
                  break;
                W($);
              }
          }
        }
      } else if (t === "bubble") {
        if (T === void 0)
          return;
        for (let j = 0; j < D.length && !e.has($); ++j) {
          const J = D[j], Z = T.get(J);
          if (Z !== void 0) {
            l.set($, J);
            for (const ae of Z) {
              if (n.has($))
                break;
              ae($);
            }
          }
        }
      }
      a($, "stopPropagation"), a($, "stopImmediatePropagation"), d($);
    };
    return C.displayName = "evtdUnifiedHandler", C;
  }
  function m() {
    const C = function($) {
      const { type: M, eventPhase: I } = $;
      if (I !== 2)
        return;
      const K = f[M];
      K !== void 0 && K.forEach((H) => H($));
    };
    return C.displayName = "evtdUnifiedWindowEventHandler", C;
  }
  const v = p(), g = m();
  function b(C, $) {
    const M = c[C];
    return M[$] === void 0 && (M[$] = /* @__PURE__ */ new Map(), window.addEventListener($, v, C === "capture")), M[$];
  }
  function x(C) {
    return f[C] === void 0 && (f[C] = /* @__PURE__ */ new Set(), window.addEventListener(C, g)), f[C];
  }
  function B(C, $) {
    let M = C.get($);
    return M === void 0 && C.set($, M = /* @__PURE__ */ new Set()), M;
  }
  function A(C, $, M, I) {
    const K = c[$][M];
    if (K !== void 0) {
      const H = K.get(C);
      if (H !== void 0 && H.has(I))
        return !0;
    }
    return !1;
  }
  function y(C, $) {
    const M = f[C];
    return !!(M !== void 0 && M.has($));
  }
  function S(C, $, M, I) {
    let K;
    if (typeof I == "object" && I.once === !0 ? K = (_) => {
      E(C, $, K, I), M(_);
    } : K = M, Mc(C, $, K, I))
      return;
    const t = I === !0 || typeof I == "object" && I.capture === !0 ? "capture" : "bubble", F = b(t, C), D = B(F, $);
    if (D.has(K) || D.add(K), $ === window) {
      const _ = x(C);
      _.has(K) || _.add(K);
    }
  }
  function E(C, $, M, I) {
    if (Ic(C, $, M, I))
      return;
    const H = I === !0 || typeof I == "object" && I.capture === !0, t = H ? "capture" : "bubble", F = b(t, C), D = B(F, $);
    if ($ === window && !A($, H ? "bubble" : "capture", C, M) && y(C, M)) {
      const T = f[C];
      T.delete(M), T.size === 0 && (window.removeEventListener(C, g), f[C] = void 0);
    }
    D.has(M) && D.delete(M), D.size === 0 && F.delete($), F.size === 0 && (window.removeEventListener(C, v, t === "capture"), c[t][C] = void 0);
  }
  return {
    on: S,
    off: E
  };
}
const { on: Le, off: De } = _c(), ir = L(null);
function Aa(e) {
  if (e.clientX > 0 || e.clientY > 0)
    ir.value = {
      x: e.clientX,
      y: e.clientY
    };
  else {
    const { target: n } = e;
    if (n instanceof Element) {
      const { left: r, top: o, width: i, height: a } = n.getBoundingClientRect();
      r > 0 || o > 0 ? ir.value = {
        x: r + i / 2,
        y: o + a / 2
      } : ir.value = { x: 0, y: 0 };
    } else
      ir.value = null;
  }
}
let Nr = 0, $a = !0;
function bs() {
  if (!Oi)
    return nn(L(null));
  Nr === 0 && Le("click", document, Aa, !0);
  const e = () => {
    Nr += 1;
  };
  return $a && ($a = Ri()) ? (wn(e), Ge(() => {
    Nr -= 1, Nr === 0 && De("click", document, Aa, !0);
  })) : e(), nn(ir);
}
const Lc = L(void 0);
let Hr = 0;
function Da() {
  Lc.value = Date.now();
}
let Pa = !0;
function Cs(e) {
  if (!Oi)
    return nn(L(!1));
  const n = L(!1);
  let r = null;
  function o() {
    r !== null && window.clearTimeout(r);
  }
  function i() {
    o(), n.value = !0, r = window.setTimeout(() => {
      n.value = !1;
    }, e);
  }
  Hr === 0 && Le("click", window, Da, !0);
  const a = () => {
    Hr += 1, Le("click", window, i, !0);
  };
  return Pa && (Pa = Ri()) ? (wn(a), Ge(() => {
    Hr -= 1, Hr === 0 && De("click", window, Da, !0), De("click", window, i, !0), o();
  })) : a(), nn(n);
}
function Gn(e, n) {
  return ze(e, (r) => {
    r !== void 0 && (n.value = r);
  }), R(() => e.value === void 0 ? n.value : e.value);
}
function Jn() {
  const e = L(!1);
  return ot(() => {
    e.value = !0;
  }), nn(e);
}
function Mi(e, n) {
  return R(() => {
    for (const r of n)
      if (e[r] !== void 0)
        return e[r];
    return e[n[n.length - 1]];
  });
}
const Nc = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Hc() {
  return Nc;
}
function Wc(e = {}, n) {
  const r = Gl({
    ctrl: !1,
    command: !1,
    win: !1,
    shift: !1,
    tab: !1
  }), { keydown: o, keyup: i } = e, a = (u) => {
    switch (u.key) {
      case "Control":
        r.ctrl = !0;
        break;
      case "Meta":
        r.command = !0, r.win = !0;
        break;
      case "Shift":
        r.shift = !0;
        break;
      case "Tab":
        r.tab = !0;
        break;
    }
    o !== void 0 && Object.keys(o).forEach((d) => {
      if (d !== u.key)
        return;
      const c = o[d];
      if (typeof c == "function")
        c(u);
      else {
        const { stop: f = !1, prevent: p = !1 } = c;
        f && u.stopPropagation(), p && u.preventDefault(), c.handler(u);
      }
    });
  }, l = (u) => {
    switch (u.key) {
      case "Control":
        r.ctrl = !1;
        break;
      case "Meta":
        r.command = !1, r.win = !1;
        break;
      case "Shift":
        r.shift = !1;
        break;
      case "Tab":
        r.tab = !1;
        break;
    }
    i !== void 0 && Object.keys(i).forEach((d) => {
      if (d !== u.key)
        return;
      const c = i[d];
      if (typeof c == "function")
        c(u);
      else {
        const { stop: f = !1, prevent: p = !1 } = c;
        f && u.stopPropagation(), p && u.preventDefault(), c.handler(u);
      }
    });
  }, s = () => {
    (n === void 0 || n.value) && (Le("keydown", document, a), Le("keyup", document, l)), n !== void 0 && ze(n, (u) => {
      u ? (Le("keydown", document, a), Le("keyup", document, l)) : (De("keydown", document, a), De("keyup", document, l));
    });
  };
  return Ri() ? (wn(s), Ge(() => {
    (n === void 0 || n.value) && (De("keydown", document, a), De("keyup", document, l));
  })) : s(), nn(r);
}
const Ii = "n-internal-select-menu", ys = "n-internal-select-menu-body", go = "n-modal-body", jc = "n-modal-provider", ws = "n-modal", mo = "n-drawer-body", Er = "n-popover-body", Bs = "__disabled__";
function qt(e) {
  const n = xe(go, null), r = xe(mo, null), o = xe(Er, null), i = xe(ys, null), a = L();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const l = () => {
      a.value = document.fullscreenElement;
    };
    ot(() => {
      Le("fullscreenchange", document, l);
    }), Ge(() => {
      De("fullscreenchange", document, l);
    });
  }
  return We(() => {
    var l;
    const {
      to: s
    } = e;
    return s !== void 0 ? s === !1 ? Bs : s === !0 ? a.value || "body" : s : n != null && n.value ? (l = n.value.$el) !== null && l !== void 0 ? l : n.value : r != null && r.value ? r.value : o != null && o.value ? o.value : i != null && i.value ? i.value : s ?? (a.value || "body");
  });
}
qt.tdkey = Bs;
qt.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function ui(e, n, r = "default") {
  const o = n[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  return o();
}
function di(e, n = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(jn(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        di(o, n, r);
        return;
      }
      if (o.type === ht) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && di(o.children, n, r);
      } else o.type !== zi && r.push(o);
    }
  }), r;
}
function Ea(e, n, r = "default") {
  const o = n[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  const i = di(o());
  if (i.length === 1)
    return i[0];
  throw new Error(`[vueuc/${e}]: slot[${r}] should have exactly one child.`);
}
let Jt = null;
function Ss() {
  if (Jt === null && (Jt = document.getElementById("v-binder-view-measurer"), Jt === null)) {
    Jt = document.createElement("div"), Jt.id = "v-binder-view-measurer";
    const { style: e } = Jt;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(Jt);
  }
  return Jt.getBoundingClientRect();
}
function Vc(e, n) {
  const r = Ss();
  return {
    top: n,
    left: e,
    height: 0,
    width: 0,
    right: r.width - e,
    bottom: r.height - n
  };
}
function _o(e) {
  const n = e.getBoundingClientRect(), r = Ss();
  return {
    left: n.left - r.left,
    top: n.top - r.top,
    bottom: r.height + r.top - n.bottom,
    right: r.width + r.left - n.right,
    width: n.width,
    height: n.height
  };
}
function qc(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Fs(e) {
  if (e === null)
    return null;
  const n = qc(e);
  if (n === null)
    return null;
  if (n.nodeType === 9)
    return document;
  if (n.nodeType === 1) {
    const { overflow: r, overflowX: o, overflowY: i } = getComputedStyle(n);
    if (/(auto|scroll|overlay)/.test(r + i + o))
      return n;
  }
  return Fs(n);
}
const _i = Q({
  name: "Binder",
  props: {
    syncTargetWithParent: Boolean,
    syncTarget: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    var n;
    we("VBinder", (n = $r()) === null || n === void 0 ? void 0 : n.proxy);
    const r = xe("VBinder", null), o = L(null), i = (x) => {
      o.value = x, r && e.syncTargetWithParent && r.setTargetRef(x);
    };
    let a = [];
    const l = () => {
      let x = o.value;
      for (; x = Fs(x), x !== null; )
        a.push(x);
      for (const B of a)
        Le("scroll", B, f, !0);
    }, s = () => {
      for (const x of a)
        De("scroll", x, f, !0);
      a = [];
    }, u = /* @__PURE__ */ new Set(), d = (x) => {
      u.size === 0 && l(), u.has(x) || u.add(x);
    }, c = (x) => {
      u.has(x) && u.delete(x), u.size === 0 && s();
    }, f = () => {
      as(p);
    }, p = () => {
      u.forEach((x) => x());
    }, m = /* @__PURE__ */ new Set(), v = (x) => {
      m.size === 0 && Le("resize", window, b), m.has(x) || m.add(x);
    }, g = (x) => {
      m.has(x) && m.delete(x), m.size === 0 && De("resize", window, b);
    }, b = () => {
      m.forEach((x) => x());
    };
    return Ge(() => {
      De("resize", window, b), s();
    }), {
      targetRef: o,
      setTargetRef: i,
      addScrollListener: d,
      removeScrollListener: c,
      addResizeListener: v,
      removeResizeListener: g
    };
  },
  render() {
    return ui("binder", this.$slots);
  }
}), Li = Q({
  name: "Target",
  setup() {
    const { setTargetRef: e, syncTarget: n } = xe("VBinder");
    return {
      syncTarget: n,
      setTargetDirective: {
        mounted: e,
        updated: e
      }
    };
  },
  render() {
    const { syncTarget: e, setTargetDirective: n } = this;
    return e ? kt(Ea("follower", this.$slots), [
      [n]
    ]) : Ea("follower", this.$slots);
  }
}), Tn = "@@mmoContext", Kc = {
  mounted(e, { value: n }) {
    e[Tn] = {
      handler: void 0
    }, typeof n == "function" && (e[Tn].handler = n, Le("mousemoveoutside", e, n));
  },
  updated(e, { value: n }) {
    const r = e[Tn];
    typeof n == "function" ? r.handler ? r.handler !== n && (De("mousemoveoutside", e, r.handler), r.handler = n, Le("mousemoveoutside", e, n)) : (e[Tn].handler = n, Le("mousemoveoutside", e, n)) : r.handler && (De("mousemoveoutside", e, r.handler), r.handler = void 0);
  },
  unmounted(e) {
    const { handler: n } = e[Tn];
    n && De("mousemoveoutside", e, n), e[Tn].handler = void 0;
  }
}, Rn = "@@coContext", mr = {
  mounted(e, { value: n, modifiers: r }) {
    e[Rn] = {
      handler: void 0
    }, typeof n == "function" && (e[Rn].handler = n, Le("clickoutside", e, n, {
      capture: r.capture
    }));
  },
  updated(e, { value: n, modifiers: r }) {
    const o = e[Rn];
    typeof n == "function" ? o.handler ? o.handler !== n && (De("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = n, Le("clickoutside", e, n, {
      capture: r.capture
    })) : (e[Rn].handler = n, Le("clickoutside", e, n, {
      capture: r.capture
    })) : o.handler && (De("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = void 0);
  },
  unmounted(e, { modifiers: n }) {
    const { handler: r } = e[Rn];
    r && De("clickoutside", e, r, {
      capture: n.capture
    }), e[Rn].handler = void 0;
  }
};
function Uc(e, n) {
  console.error(`[vdirs/${e}]: ${n}`);
}
class Gc {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(n, r) {
    const { elementZIndex: o } = this;
    if (r !== void 0) {
      n.style.zIndex = `${r}`, o.delete(n);
      return;
    }
    const { nextZIndex: i } = this;
    o.has(n) && o.get(n) + 1 === this.nextZIndex || (n.style.zIndex = `${i}`, o.set(n, i), this.nextZIndex = i + 1, this.squashState());
  }
  unregister(n, r) {
    const { elementZIndex: o } = this;
    o.has(n) ? o.delete(n) : r === void 0 && Uc("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: n } = this;
    n || (this.nextZIndex = 2e3), this.nextZIndex - n > 2500 && this.rearrange();
  }
  rearrange() {
    const n = Array.from(this.elementZIndex.entries());
    n.sort((r, o) => r[1] - o[1]), this.nextZIndex = 2e3, n.forEach((r) => {
      const o = r[0], i = this.nextZIndex++;
      `${i}` !== o.style.zIndex && (o.style.zIndex = `${i}`);
    });
  }
}
const Lo = new Gc(), On = "@@ziContext", Ni = {
  mounted(e, n) {
    const { value: r = {} } = n, { zIndex: o, enabled: i } = r;
    e[On] = {
      enabled: !!i,
      initialized: !1
    }, i && (Lo.ensureZIndex(e, o), e[On].initialized = !0);
  },
  updated(e, n) {
    const { value: r = {} } = n, { zIndex: o, enabled: i } = r, a = e[On].enabled;
    i && !a && (Lo.ensureZIndex(e, o), e[On].initialized = !0), e[On].enabled = !!i;
  },
  unmounted(e, n) {
    if (!e[On].initialized)
      return;
    const { value: r = {} } = n, { zIndex: o } = r;
    Lo.unregister(e, o);
  }
}, Xc = "@css-render/vue3-ssr";
function Yc(e, n) {
  return `<style cssr-id="${e}">
${n}
</style>`;
}
function Zc(e, n, r) {
  const { styles: o, ids: i } = r;
  i.has(e) || o !== null && (i.add(e), o.push(Yc(e, n)));
}
const Jc = typeof document < "u";
function Bn() {
  if (Jc)
    return;
  const e = xe(Xc, null);
  if (e !== null)
    return {
      adapter: (n, r) => Zc(n, r, e),
      context: e
    };
}
function ka(e, n) {
  console.error(`[vueuc/${e}]: ${n}`);
}
const { c: tn } = cs(), Hi = "vueuc-style";
function za(e) {
  return e & -e;
}
class As {
  /**
   * @param l length of the array
   * @param min min value of the array
   */
  constructor(n, r) {
    this.l = n, this.min = r;
    const o = new Array(n + 1);
    for (let i = 0; i < n + 1; ++i)
      o[i] = 0;
    this.ft = o;
  }
  /**
   * Add arr[i] by n, start from 0
   * @param i the index of the element to be added
   * @param n the value to be added
   */
  add(n, r) {
    if (r === 0)
      return;
    const { l: o, ft: i } = this;
    for (n += 1; n <= o; )
      i[n] += r, n += za(n);
  }
  /**
   * Get the value of index i
   * @param i index
   * @returns value of the index
   */
  get(n) {
    return this.sum(n + 1) - this.sum(n);
  }
  /**
   * Get the sum of first i elements
   * @param i count of head elements to be added
   * @returns the sum of first i elements
   */
  sum(n) {
    if (n === void 0 && (n = this.l), n <= 0)
      return 0;
    const { ft: r, min: o, l: i } = this;
    if (n > i)
      throw new Error("[FinweckTree.sum]: `i` is larger than length.");
    let a = n * o;
    for (; n > 0; )
      a += r[n], n -= za(n);
    return a;
  }
  /**
   * Get the largest count of head elements whose sum are <= threshold
   * @param threshold
   * @returns the largest count of head elements whose sum are <= threshold
   */
  getBound(n) {
    let r = 0, o = this.l;
    for (; o > r; ) {
      const i = Math.floor((r + o) / 2), a = this.sum(i);
      if (a > n) {
        o = i;
        continue;
      } else if (a < n) {
        if (r === i)
          return this.sum(r + 1) <= n ? r + 1 : i;
        r = i;
      } else
        return i;
    }
    return r;
  }
}
function Ta(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const $s = Q({
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
  setup(e) {
    return {
      showTeleport: gs(le(e, "show")),
      mergedTo: R(() => {
        const { to: n } = e;
        return n ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? ui("lazy-teleport", this.$slots) : h(Xl, {
      disabled: this.disabled,
      to: this.mergedTo
    }, ui("lazy-teleport", this.$slots)) : null;
  }
}), Wr = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ra = {
  start: "end",
  center: "center",
  end: "start"
}, No = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, Qc = {
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
}, ef = {
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
}, tf = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, Oa = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, Ma = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function nf(e, n, r, o, i, a) {
  if (!i || a)
    return { placement: e, top: 0, left: 0 };
  const [l, s] = e.split("-");
  let u = s ?? "center", d = {
    top: 0,
    left: 0
  };
  const c = (m, v, g) => {
    let b = 0, x = 0;
    const B = r[m] - n[v] - n[m];
    return B > 0 && o && (g ? x = Oa[v] ? B : -B : b = Oa[v] ? B : -B), {
      left: b,
      top: x
    };
  }, f = l === "left" || l === "right";
  if (u !== "center") {
    const m = tf[e], v = Wr[m], g = No[m];
    if (r[g] > n[g]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        n[m] + n[g] < r[g]
      ) {
        const b = (r[g] - n[g]) / 2;
        n[m] < b || n[v] < b ? n[m] < n[v] ? (u = Ra[s], d = c(g, v, f)) : d = c(g, m, f) : u = "center";
      }
    } else r[g] < n[g] && n[v] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    n[m] > n[v] && (u = Ra[s]);
  } else {
    const m = l === "bottom" || l === "top" ? "left" : "top", v = Wr[m], g = No[m], b = (r[g] - n[g]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (n[m] < b || n[v] < b) && (n[m] > n[v] ? (u = Ma[m], d = c(g, m, f)) : (u = Ma[v], d = c(g, v, f)));
  }
  let p = l;
  return (
    // space is not enough
    n[l] < r[No[l]] && // opposite position's space is larger
    n[l] < n[Wr[l]] && (p = Wr[l]), {
      placement: u !== "center" ? `${p}-${u}` : p,
      left: d.left,
      top: d.top
    }
  );
}
function rf(e, n) {
  return n ? ef[e] : Qc[e];
}
function of(e, n, r, o, i, a) {
  if (a)
    switch (e) {
      case "bottom-start":
        return {
          top: `${Math.round(r.top - n.top + r.height)}px`,
          left: `${Math.round(r.left - n.left)}px`,
          transform: "translateY(-100%)"
        };
      case "bottom-end":
        return {
          top: `${Math.round(r.top - n.top + r.height)}px`,
          left: `${Math.round(r.left - n.left + r.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "top-start":
        return {
          top: `${Math.round(r.top - n.top)}px`,
          left: `${Math.round(r.left - n.left)}px`,
          transform: ""
        };
      case "top-end":
        return {
          top: `${Math.round(r.top - n.top)}px`,
          left: `${Math.round(r.left - n.left + r.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-start":
        return {
          top: `${Math.round(r.top - n.top)}px`,
          left: `${Math.round(r.left - n.left + r.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-end":
        return {
          top: `${Math.round(r.top - n.top + r.height)}px`,
          left: `${Math.round(r.left - n.left + r.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "left-start":
        return {
          top: `${Math.round(r.top - n.top)}px`,
          left: `${Math.round(r.left - n.left)}px`,
          transform: ""
        };
      case "left-end":
        return {
          top: `${Math.round(r.top - n.top + r.height)}px`,
          left: `${Math.round(r.left - n.left)}px`,
          transform: "translateY(-100%)"
        };
      case "top":
        return {
          top: `${Math.round(r.top - n.top)}px`,
          left: `${Math.round(r.left - n.left + r.width / 2)}px`,
          transform: "translateX(-50%)"
        };
      case "right":
        return {
          top: `${Math.round(r.top - n.top + r.height / 2)}px`,
          left: `${Math.round(r.left - n.left + r.width)}px`,
          transform: "translateX(-100%) translateY(-50%)"
        };
      case "left":
        return {
          top: `${Math.round(r.top - n.top + r.height / 2)}px`,
          left: `${Math.round(r.left - n.left)}px`,
          transform: "translateY(-50%)"
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(r.top - n.top + r.height)}px`,
          left: `${Math.round(r.left - n.left + r.width / 2)}px`,
          transform: "translateX(-50%) translateY(-100%)"
        };
    }
  switch (e) {
    case "bottom-start":
      return {
        top: `${Math.round(r.top - n.top + r.height + o)}px`,
        left: `${Math.round(r.left - n.left + i)}px`,
        transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(r.top - n.top + r.height + o)}px`,
        left: `${Math.round(r.left - n.left + r.width + i)}px`,
        transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(r.top - n.top + o)}px`,
        left: `${Math.round(r.left - n.left + i)}px`,
        transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(r.top - n.top + o)}px`,
        left: `${Math.round(r.left - n.left + r.width + i)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(r.top - n.top + o)}px`,
        left: `${Math.round(r.left - n.left + r.width + i)}px`,
        transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(r.top - n.top + r.height + o)}px`,
        left: `${Math.round(r.left - n.left + r.width + i)}px`,
        transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(r.top - n.top + o)}px`,
        left: `${Math.round(r.left - n.left + i)}px`,
        transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(r.top - n.top + r.height + o)}px`,
        left: `${Math.round(r.left - n.left + i)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(r.top - n.top + o)}px`,
        left: `${Math.round(r.left - n.left + r.width / 2 + i)}px`,
        transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(r.top - n.top + r.height / 2 + o)}px`,
        left: `${Math.round(r.left - n.left + r.width + i)}px`,
        transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(r.top - n.top + r.height / 2 + o)}px`,
        left: `${Math.round(r.left - n.left + i)}px`,
        transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(r.top - n.top + r.height + o)}px`,
        left: `${Math.round(r.left - n.left + r.width / 2 + i)}px`,
        transform: "translateX(-50%)"
      };
  }
}
const af = tn([
  tn(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  tn(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    tn("> *", {
      pointerEvents: "all"
    })
  ])
]), Wi = Q({
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
  setup(e) {
    const n = xe("VBinder"), r = We(() => e.enabled !== void 0 ? e.enabled : e.show), o = L(null), i = L(null), a = () => {
      const { syncTrigger: p } = e;
      p.includes("scroll") && n.addScrollListener(u), p.includes("resize") && n.addResizeListener(u);
    }, l = () => {
      n.removeScrollListener(u), n.removeResizeListener(u);
    };
    ot(() => {
      r.value && (u(), a());
    });
    const s = Bn();
    af.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: Hi,
      ssr: s
    }), Ge(() => {
      l();
    }), Tc(() => {
      r.value && u();
    });
    const u = () => {
      if (!r.value)
        return;
      const p = o.value;
      if (p === null)
        return;
      const m = n.targetRef, { x: v, y: g, overlap: b } = e, x = v !== void 0 && g !== void 0 ? Vc(v, g) : _o(m);
      p.style.setProperty("--v-target-width", `${Math.round(x.width)}px`), p.style.setProperty("--v-target-height", `${Math.round(x.height)}px`);
      const { width: B, minWidth: A, placement: y, internalShift: S, flip: E } = e;
      p.setAttribute("v-placement", y), b ? p.setAttribute("v-overlap", "") : p.removeAttribute("v-overlap");
      const { style: C } = p;
      B === "target" ? C.width = `${x.width}px` : B !== void 0 ? C.width = B : C.width = "", A === "target" ? C.minWidth = `${x.width}px` : A !== void 0 ? C.minWidth = A : C.minWidth = "";
      const $ = _o(p), M = _o(i.value), { left: I, top: K, placement: H } = nf(y, x, $, S, E, b), t = rf(H, b), { left: F, top: D, transform: _ } = of(H, M, x, K, I, b);
      p.setAttribute("v-placement", H), p.style.setProperty("--v-offset-left", `${Math.round(I)}px`), p.style.setProperty("--v-offset-top", `${Math.round(K)}px`), p.style.transform = `translateX(${F}) translateY(${D}) ${_}`, p.style.setProperty("--v-transform-origin", t), p.style.transformOrigin = t;
    };
    ze(r, (p) => {
      p ? (a(), d()) : l();
    });
    const d = () => {
      et().then(u).catch((p) => console.error(p));
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
    ].forEach((p) => {
      ze(le(e, p), u);
    }), ["teleportDisabled"].forEach((p) => {
      ze(le(e, p), d);
    }), ze(le(e, "syncTrigger"), (p) => {
      p.includes("resize") ? n.addResizeListener(u) : n.removeResizeListener(u), p.includes("scroll") ? n.addScrollListener(u) : n.removeScrollListener(u);
    });
    const c = Jn(), f = We(() => {
      const { to: p } = e;
      if (p !== void 0)
        return p;
      c.value;
    });
    return {
      VBinder: n,
      mergedEnabled: r,
      offsetContainerRef: i,
      followerRef: o,
      mergedTo: f,
      syncPosition: u
    };
  },
  render() {
    return h($s, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var e, n;
        const r = h("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          h("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e))
        ]);
        return this.zindexable ? kt(r, [
          [
            Ni,
            {
              enabled: this.mergedEnabled,
              zIndex: this.zIndex
            }
          ]
        ]) : r;
      }
    });
  }
});
var gn = [], lf = function() {
  return gn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, sf = function() {
  return gn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Ia = "ResizeObserver loop completed with undelivered notifications.", uf = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Ia
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Ia), window.dispatchEvent(e);
}, br;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(br || (br = {}));
var mn = function(e) {
  return Object.freeze(e);
}, df = /* @__PURE__ */ function() {
  function e(n, r) {
    this.inlineSize = n, this.blockSize = r, mn(this);
  }
  return e;
}(), Ds = function() {
  function e(n, r, o, i) {
    return this.x = n, this.y = r, this.width = o, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, mn(this);
  }
  return e.prototype.toJSON = function() {
    var n = this, r = n.x, o = n.y, i = n.top, a = n.right, l = n.bottom, s = n.left, u = n.width, d = n.height;
    return { x: r, y: o, top: i, right: a, bottom: l, left: s, width: u, height: d };
  }, e.fromRect = function(n) {
    return new e(n.x, n.y, n.width, n.height);
  }, e;
}(), ji = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Ps = function(e) {
  if (ji(e)) {
    var n = e.getBBox(), r = n.width, o = n.height;
    return !r && !o;
  }
  var i = e, a = i.offsetWidth, l = i.offsetHeight;
  return !(a || l || e.getClientRects().length);
}, _a = function(e) {
  var n;
  if (e instanceof Element)
    return !0;
  var r = (n = e == null ? void 0 : e.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
  return !!(r && e instanceof r.Element);
}, cf = function(e) {
  switch (e.tagName) {
    case "INPUT":
      if (e.type !== "image")
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
}, cr = typeof window < "u" ? window : {}, jr = /* @__PURE__ */ new WeakMap(), La = /auto|scroll/, ff = /^tb|vertical/, hf = /msie|trident/i.test(cr.navigator && cr.navigator.userAgent), St = function(e) {
  return parseFloat(e || "0");
}, Nn = function(e, n, r) {
  return e === void 0 && (e = 0), n === void 0 && (n = 0), r === void 0 && (r = !1), new df((r ? n : e) || 0, (r ? e : n) || 0);
}, Na = mn({
  devicePixelContentBoxSize: Nn(),
  borderBoxSize: Nn(),
  contentBoxSize: Nn(),
  contentRect: new Ds(0, 0, 0, 0)
}), Es = function(e, n) {
  if (n === void 0 && (n = !1), jr.has(e) && !n)
    return jr.get(e);
  if (Ps(e))
    return jr.set(e, Na), Na;
  var r = getComputedStyle(e), o = ji(e) && e.ownerSVGElement && e.getBBox(), i = !hf && r.boxSizing === "border-box", a = ff.test(r.writingMode || ""), l = !o && La.test(r.overflowY || ""), s = !o && La.test(r.overflowX || ""), u = o ? 0 : St(r.paddingTop), d = o ? 0 : St(r.paddingRight), c = o ? 0 : St(r.paddingBottom), f = o ? 0 : St(r.paddingLeft), p = o ? 0 : St(r.borderTopWidth), m = o ? 0 : St(r.borderRightWidth), v = o ? 0 : St(r.borderBottomWidth), g = o ? 0 : St(r.borderLeftWidth), b = f + d, x = u + c, B = g + m, A = p + v, y = s ? e.offsetHeight - A - e.clientHeight : 0, S = l ? e.offsetWidth - B - e.clientWidth : 0, E = i ? b + B : 0, C = i ? x + A : 0, $ = o ? o.width : St(r.width) - E - S, M = o ? o.height : St(r.height) - C - y, I = $ + b + S + B, K = M + x + y + A, H = mn({
    devicePixelContentBoxSize: Nn(Math.round($ * devicePixelRatio), Math.round(M * devicePixelRatio), a),
    borderBoxSize: Nn(I, K, a),
    contentBoxSize: Nn($, M, a),
    contentRect: new Ds(f, u, $, M)
  });
  return jr.set(e, H), H;
}, ks = function(e, n, r) {
  var o = Es(e, r), i = o.borderBoxSize, a = o.contentBoxSize, l = o.devicePixelContentBoxSize;
  switch (n) {
    case br.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case br.BORDER_BOX:
      return i;
    default:
      return a;
  }
}, vf = /* @__PURE__ */ function() {
  function e(n) {
    var r = Es(n);
    this.target = n, this.contentRect = r.contentRect, this.borderBoxSize = mn([r.borderBoxSize]), this.contentBoxSize = mn([r.contentBoxSize]), this.devicePixelContentBoxSize = mn([r.devicePixelContentBoxSize]);
  }
  return e;
}(), zs = function(e) {
  if (Ps(e))
    return 1 / 0;
  for (var n = 0, r = e.parentNode; r; )
    n += 1, r = r.parentNode;
  return n;
}, pf = function() {
  var e = 1 / 0, n = [];
  gn.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(d) {
        var c = new vf(d.target), f = zs(d.target);
        s.push(c), d.lastReportedSize = ks(d.target, d.observedBox), f < e && (e = f);
      }), n.push(function() {
        l.callback.call(l.observer, s, l.observer);
      }), l.activeTargets.splice(0, l.activeTargets.length);
    }
  });
  for (var r = 0, o = n; r < o.length; r++) {
    var i = o[r];
    i();
  }
  return e;
}, Ha = function(e) {
  gn.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(i) {
      i.isActive() && (zs(i.target) > e ? r.activeTargets.push(i) : r.skippedTargets.push(i));
    });
  });
}, xf = function() {
  var e = 0;
  for (Ha(e); lf(); )
    e = pf(), Ha(e);
  return sf() && uf(), e > 0;
}, Ho, Ts = [], gf = function() {
  return Ts.splice(0).forEach(function(e) {
    return e();
  });
}, mf = function(e) {
  if (!Ho) {
    var n = 0, r = document.createTextNode(""), o = { characterData: !0 };
    new MutationObserver(function() {
      return gf();
    }).observe(r, o), Ho = function() {
      r.textContent = "".concat(n ? n-- : n++);
    };
  }
  Ts.push(e), Ho();
}, bf = function(e) {
  mf(function() {
    requestAnimationFrame(e);
  });
}, eo = 0, Cf = function() {
  return !!eo;
}, yf = 250, wf = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Wa = [
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
], ja = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Wo = !1, Bf = function() {
  function e() {
    var n = this;
    this.stopped = !0, this.listener = function() {
      return n.schedule();
    };
  }
  return e.prototype.run = function(n) {
    var r = this;
    if (n === void 0 && (n = yf), !Wo) {
      Wo = !0;
      var o = ja(n);
      bf(function() {
        var i = !1;
        try {
          i = xf();
        } finally {
          if (Wo = !1, n = o - ja(), !Cf())
            return;
          i ? r.run(1e3) : n > 0 ? r.run(n) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var n = this, r = function() {
      return n.observer && n.observer.observe(document.body, wf);
    };
    document.body ? r() : cr.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var n = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Wa.forEach(function(r) {
      return cr.addEventListener(r, n.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var n = this;
    this.stopped || (this.observer && this.observer.disconnect(), Wa.forEach(function(r) {
      return cr.removeEventListener(r, n.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), ci = new Bf(), Va = function(e) {
  !eo && e > 0 && ci.start(), eo += e, !eo && ci.stop();
}, Sf = function(e) {
  return !ji(e) && !cf(e) && getComputedStyle(e).display === "inline";
}, Ff = function() {
  function e(n, r) {
    this.target = n, this.observedBox = r || br.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var n = ks(this.target, this.observedBox, !0);
    return Sf(this.target) && (this.lastReportedSize = n), this.lastReportedSize.inlineSize !== n.inlineSize || this.lastReportedSize.blockSize !== n.blockSize;
  }, e;
}(), Af = /* @__PURE__ */ function() {
  function e(n, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = n, this.callback = r;
  }
  return e;
}(), Vr = /* @__PURE__ */ new WeakMap(), qa = function(e, n) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === n)
      return r;
  return -1;
}, qr = function() {
  function e() {
  }
  return e.connect = function(n, r) {
    var o = new Af(n, r);
    Vr.set(n, o);
  }, e.observe = function(n, r, o) {
    var i = Vr.get(n), a = i.observationTargets.length === 0;
    qa(i.observationTargets, r) < 0 && (a && gn.push(i), i.observationTargets.push(new Ff(r, o && o.box)), Va(1), ci.schedule());
  }, e.unobserve = function(n, r) {
    var o = Vr.get(n), i = qa(o.observationTargets, r), a = o.observationTargets.length === 1;
    i >= 0 && (a && gn.splice(gn.indexOf(o), 1), o.observationTargets.splice(i, 1), Va(-1));
  }, e.disconnect = function(n) {
    var r = this, o = Vr.get(n);
    o.observationTargets.slice().forEach(function(i) {
      return r.unobserve(n, i.target);
    }), o.activeTargets.splice(0, o.activeTargets.length);
  }, e;
}(), $f = function() {
  function e(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof n != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    qr.connect(this, n);
  }
  return e.prototype.observe = function(n, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!_a(n))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    qr.observe(this, n, r);
  }, e.prototype.unobserve = function(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!_a(n))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    qr.unobserve(this, n);
  }, e.prototype.disconnect = function() {
    qr.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class Df {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || $f)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(n) {
    for (const r of n) {
      const o = this.elHandlersMap.get(r.target);
      o !== void 0 && o(r);
    }
  }
  registerHandler(n, r) {
    this.elHandlersMap.set(n, r), this.observer.observe(n);
  }
  unregisterHandler(n) {
    this.elHandlersMap.has(n) && (this.elHandlersMap.delete(n), this.observer.unobserve(n));
  }
}
const io = new Df(), Cr = Q({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let n = !1;
    const r = $r().proxy;
    function o(i) {
      const { onResize: a } = e;
      a !== void 0 && a(i);
    }
    ot(() => {
      const i = r.$el;
      if (i === void 0) {
        ka("resize-observer", "$el does not exist.");
        return;
      }
      if (i.nextElementSibling !== i.nextSibling && i.nodeType === 3 && i.nodeValue !== "") {
        ka("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      i.nextElementSibling !== null && (io.registerHandler(i.nextElementSibling, o), n = !0);
    }), Ge(() => {
      n && io.unregisterHandler(r.$el.nextElementSibling);
    });
  },
  render() {
    return Vn(this.$slots, "default");
  }
});
let Kr;
function Pf() {
  return typeof document > "u" ? !1 : (Kr === void 0 && ("matchMedia" in window ? Kr = window.matchMedia("(pointer:coarse)").matches : Kr = !1), Kr);
}
let jo;
function Ka() {
  return typeof document > "u" ? 1 : (jo === void 0 && (jo = "chrome" in window ? window.devicePixelRatio : 1), jo);
}
const Rs = "VVirtualListXScroll";
function Ef({ columnsRef: e, renderColRef: n, renderItemWithColsRef: r }) {
  const o = L(0), i = L(0), a = R(() => {
    const d = e.value;
    if (d.length === 0)
      return null;
    const c = new As(d.length, 0);
    return d.forEach((f, p) => {
      c.add(p, f.width);
    }), c;
  }), l = We(() => {
    const d = a.value;
    return d !== null ? Math.max(d.getBound(i.value) - 1, 0) : 0;
  }), s = (d) => {
    const c = a.value;
    return c !== null ? c.sum(d) : 0;
  }, u = We(() => {
    const d = a.value;
    return d !== null ? Math.min(d.getBound(i.value + o.value) + 1, e.value.length - 1) : 0;
  });
  return we(Rs, {
    startIndexRef: l,
    endIndexRef: u,
    columnsRef: e,
    renderColRef: n,
    renderItemWithColsRef: r,
    getLeft: s
  }), {
    listWidthRef: o,
    scrollLeftRef: i
  };
}
const Ua = Q({
  name: "VirtualListRow",
  props: {
    index: { type: Number, required: !0 },
    item: {
      type: Object,
      required: !0
    }
  },
  setup() {
    const { startIndexRef: e, endIndexRef: n, columnsRef: r, getLeft: o, renderColRef: i, renderItemWithColsRef: a } = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      xe(Rs)
    );
    return {
      startIndex: e,
      endIndex: n,
      columns: r,
      renderCol: i,
      renderItemWithCols: a,
      getLeft: o
    };
  },
  render() {
    const { startIndex: e, endIndex: n, columns: r, renderCol: o, renderItemWithCols: i, getLeft: a, item: l } = this;
    if (i != null)
      return i({
        itemIndex: this.index,
        startColIndex: e,
        endColIndex: n,
        allColumns: r,
        item: l,
        getLeft: a
      });
    if (o != null) {
      const s = [];
      for (let u = e; u <= n; ++u) {
        const d = r[u];
        s.push(o({ column: d, left: a(u), item: l }));
      }
      return s;
    }
    return null;
  }
}), kf = tn(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  tn("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    tn("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), zf = Q({
  name: "VirtualList",
  inheritAttrs: !1,
  props: {
    showScrollbar: {
      type: Boolean,
      default: !0
    },
    columns: {
      type: Array,
      default: () => []
    },
    renderCol: Function,
    renderItemWithCols: Function,
    items: {
      type: Array,
      default: () => []
    },
    // it is suppose to be the min height
    itemSize: {
      type: Number,
      required: !0
    },
    itemResizable: Boolean,
    itemsStyle: [String, Object],
    visibleItemsTag: {
      type: [String, Object],
      default: "div"
    },
    visibleItemsProps: Object,
    ignoreItemResize: Boolean,
    onScroll: Function,
    onWheel: Function,
    onResize: Function,
    defaultScrollKey: [Number, String],
    defaultScrollIndex: Number,
    keyField: {
      type: String,
      default: "key"
    },
    // Whether it is a good API?
    // ResizeObserver + footer & header is not enough.
    // Too complex for simple case
    paddingTop: {
      type: [Number, String],
      default: 0
    },
    paddingBottom: {
      type: [Number, String],
      default: 0
    }
  },
  setup(e) {
    const n = Bn();
    kf.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: Hi,
      ssr: n
    }), ot(() => {
      const { defaultScrollIndex: t, defaultScrollKey: F } = e;
      t != null ? b({ index: t }) : F != null && b({ key: F });
    });
    let r = !1, o = !1;
    Yl(() => {
      if (r = !1, !o) {
        o = !0;
        return;
      }
      b({ top: m.value, left: l.value });
    }), Zl(() => {
      r = !0, o || (o = !0);
    });
    const i = We(() => {
      if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0)
        return;
      let t = 0;
      return e.columns.forEach((F) => {
        t += F.width;
      }), t;
    }), a = R(() => {
      const t = /* @__PURE__ */ new Map(), { keyField: F } = e;
      return e.items.forEach((D, _) => {
        t.set(D[F], _);
      }), t;
    }), { scrollLeftRef: l, listWidthRef: s } = Ef({
      columnsRef: le(e, "columns"),
      renderColRef: le(e, "renderCol"),
      renderItemWithColsRef: le(e, "renderItemWithCols")
    }), u = L(null), d = L(void 0), c = /* @__PURE__ */ new Map(), f = R(() => {
      const { items: t, itemSize: F, keyField: D } = e, _ = new As(t.length, F);
      return t.forEach((T, j) => {
        const J = T[D], Z = c.get(J);
        Z !== void 0 && _.add(j, Z);
      }), _;
    }), p = L(0), m = L(0), v = We(() => Math.max(f.value.getBound(m.value - vr(e.paddingTop)) - 1, 0)), g = R(() => {
      const { value: t } = d;
      if (t === void 0)
        return [];
      const { items: F, itemSize: D } = e, _ = v.value, T = Math.min(_ + Math.ceil(t / D + 1), F.length - 1), j = [];
      for (let J = _; J <= T; ++J)
        j.push(F[J]);
      return j;
    }), b = (t, F) => {
      if (typeof t == "number") {
        y(t, F, "auto");
        return;
      }
      const { left: D, top: _, index: T, key: j, position: J, behavior: Z, debounce: ae = !0 } = t;
      if (D !== void 0 || _ !== void 0)
        y(D, _, Z);
      else if (T !== void 0)
        A(T, Z, ae);
      else if (j !== void 0) {
        const W = a.value.get(j);
        W !== void 0 && A(W, Z, ae);
      } else J === "bottom" ? y(0, Number.MAX_SAFE_INTEGER, Z) : J === "top" && y(0, 0, Z);
    };
    let x, B = null;
    function A(t, F, D) {
      const { value: _ } = f, T = _.sum(t) + vr(e.paddingTop);
      if (!D)
        u.value.scrollTo({
          left: 0,
          top: T,
          behavior: F
        });
      else {
        x = t, B !== null && window.clearTimeout(B), B = window.setTimeout(() => {
          x = void 0, B = null;
        }, 16);
        const { scrollTop: j, offsetHeight: J } = u.value;
        if (T > j) {
          const Z = _.get(t);
          T + Z <= j + J || u.value.scrollTo({
            left: 0,
            top: T + Z - J,
            behavior: F
          });
        } else
          u.value.scrollTo({
            left: 0,
            top: T,
            behavior: F
          });
      }
    }
    function y(t, F, D) {
      u.value.scrollTo({
        left: t,
        top: F,
        behavior: D
      });
    }
    function S(t, F) {
      var D, _, T;
      if (r || e.ignoreItemResize || H(F.target))
        return;
      const { value: j } = f, J = a.value.get(t), Z = j.get(J), ae = (T = (_ = (D = F.borderBoxSize) === null || D === void 0 ? void 0 : D[0]) === null || _ === void 0 ? void 0 : _.blockSize) !== null && T !== void 0 ? T : F.contentRect.height;
      if (ae === Z)
        return;
      ae - e.itemSize === 0 ? c.delete(t) : c.set(t, ae - e.itemSize);
      const X = ae - Z;
      if (X === 0)
        return;
      j.add(J, X);
      const ne = u.value;
      if (ne != null) {
        if (x === void 0) {
          const Be = j.sum(J);
          ne.scrollTop > Be && ne.scrollBy(0, X);
        } else if (J < x)
          ne.scrollBy(0, X);
        else if (J === x) {
          const Be = j.sum(J);
          ae + Be > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          ne.scrollTop + ne.offsetHeight && ne.scrollBy(0, X);
        }
        K();
      }
      p.value++;
    }
    const E = !Pf();
    let C = !1;
    function $(t) {
      var F;
      (F = e.onScroll) === null || F === void 0 || F.call(e, t), (!E || !C) && K();
    }
    function M(t) {
      var F;
      if ((F = e.onWheel) === null || F === void 0 || F.call(e, t), E) {
        const D = u.value;
        if (D != null) {
          if (t.deltaX === 0 && (D.scrollTop === 0 && t.deltaY <= 0 || D.scrollTop + D.offsetHeight >= D.scrollHeight && t.deltaY >= 0))
            return;
          t.preventDefault(), D.scrollTop += t.deltaY / Ka(), D.scrollLeft += t.deltaX / Ka(), K(), C = !0, as(() => {
            C = !1;
          });
        }
      }
    }
    function I(t) {
      if (r || H(t.target))
        return;
      if (e.renderCol == null && e.renderItemWithCols == null) {
        if (t.contentRect.height === d.value)
          return;
      } else if (t.contentRect.height === d.value && t.contentRect.width === s.value)
        return;
      d.value = t.contentRect.height, s.value = t.contentRect.width;
      const { onResize: F } = e;
      F !== void 0 && F(t);
    }
    function K() {
      const { value: t } = u;
      t != null && (m.value = t.scrollTop, l.value = t.scrollLeft);
    }
    function H(t) {
      let F = t;
      for (; F !== null; ) {
        if (F.style.display === "none")
          return !0;
        F = F.parentElement;
      }
      return !1;
    }
    return {
      listHeight: d,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: a,
      itemsStyle: R(() => {
        const { itemResizable: t } = e, F = _n(f.value.sum());
        return p.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: _n(i.value),
            height: t ? "" : F,
            minHeight: t ? F : "",
            paddingTop: _n(e.paddingTop),
            paddingBottom: _n(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: R(() => (p.value, {
        transform: `translateY(${_n(f.value.sum(v.value))})`
      })),
      viewportItems: g,
      listElRef: u,
      itemsElRef: L(null),
      scrollTo: b,
      handleListResize: I,
      handleListScroll: $,
      handleListWheel: M,
      handleItemResize: S
    };
  },
  render() {
    const { itemResizable: e, keyField: n, keyToIndex: r, visibleItemsTag: o } = this;
    return h(Cr, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var i, a;
        return h("div", an(this.$attrs, {
          class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
          onScroll: this.handleListScroll,
          onWheel: this.handleListWheel,
          ref: "listElRef"
        }), [
          this.items.length !== 0 ? h("div", {
            ref: "itemsElRef",
            class: "v-vl-items",
            style: this.itemsStyle
          }, [
            h(o, Object.assign({
              class: "v-vl-visible-items",
              style: this.visibleItemsStyle
            }, this.visibleItemsProps), {
              default: () => {
                const { renderCol: l, renderItemWithCols: s } = this;
                return this.viewportItems.map((u) => {
                  const d = u[n], c = r.get(d), f = l != null ? h(Ua, {
                    index: c,
                    item: u
                  }) : void 0, p = s != null ? h(Ua, {
                    index: c,
                    item: u
                  }) : void 0, m = this.$slots.default({
                    item: u,
                    renderedCols: f,
                    renderedItemWithCols: p,
                    index: c
                  })[0];
                  return e ? h(Cr, {
                    key: d,
                    onResize: (v) => this.handleItemResize(d, v)
                  }, {
                    default: () => m
                  }) : (m.key = d, m);
                });
              }
            })
          ]) : (a = (i = this.$slots).empty) === null || a === void 0 ? void 0 : a.call(i)
        ]);
      }
    });
  }
}), Nt = "v-hidden", Tf = tn("[v-hidden]", {
  display: "none!important"
}), Ga = Q({
  name: "Overflow",
  props: {
    getCounter: Function,
    getTail: Function,
    updateCounter: Function,
    onUpdateCount: Function,
    onUpdateOverflow: Function
  },
  setup(e, { slots: n }) {
    const r = L(null), o = L(null);
    function i(l) {
      const { value: s } = r, { getCounter: u, getTail: d } = e;
      let c;
      if (u !== void 0 ? c = u() : c = o.value, !s || !c)
        return;
      c.hasAttribute(Nt) && c.removeAttribute(Nt);
      const { children: f } = s;
      if (l.showAllItemsBeforeCalculate)
        for (const A of f)
          A.hasAttribute(Nt) && A.removeAttribute(Nt);
      const p = s.offsetWidth, m = [], v = n.tail ? d == null ? void 0 : d() : null;
      let g = v ? v.offsetWidth : 0, b = !1;
      const x = s.children.length - (n.tail ? 1 : 0);
      for (let A = 0; A < x - 1; ++A) {
        if (A < 0)
          continue;
        const y = f[A];
        if (b) {
          y.hasAttribute(Nt) || y.setAttribute(Nt, "");
          continue;
        } else y.hasAttribute(Nt) && y.removeAttribute(Nt);
        const S = y.offsetWidth;
        if (g += S, m[A] = S, g > p) {
          const { updateCounter: E } = e;
          for (let C = A; C >= 0; --C) {
            const $ = x - 1 - C;
            E !== void 0 ? E($) : c.textContent = `${$}`;
            const M = c.offsetWidth;
            if (g -= m[C], g + M <= p || C === 0) {
              b = !0, A = C - 1, v && (A === -1 ? (v.style.maxWidth = `${p - M}px`, v.style.boxSizing = "border-box") : v.style.maxWidth = "");
              const { onUpdateCount: I } = e;
              I && I($);
              break;
            }
          }
        }
      }
      const { onUpdateOverflow: B } = e;
      b ? B !== void 0 && B(!0) : (B !== void 0 && B(!1), c.setAttribute(Nt, ""));
    }
    const a = Bn();
    return Tf.mount({
      id: "vueuc/overflow",
      head: !0,
      anchorMetaName: Hi,
      ssr: a
    }), ot(() => i({
      showAllItemsBeforeCalculate: !1
    })), {
      selfRef: r,
      counterRef: o,
      sync: i
    };
  },
  render() {
    const { $slots: e } = this;
    return et(() => this.sync({
      showAllItemsBeforeCalculate: !1
    })), h("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      Vn(e, "default"),
      // $slots.counter should only has 1 element
      e.counter ? e.counter() : h("span", {
        style: {
          display: "inline-block"
        },
        ref: "counterRef"
      }),
      // $slots.tail should only has 1 element
      e.tail ? e.tail() : null
    ]);
  }
});
function Os(e) {
  return e instanceof HTMLElement;
}
function Ms(e) {
  for (let n = 0; n < e.childNodes.length; n++) {
    const r = e.childNodes[n];
    if (Os(r) && (_s(r) || Ms(r)))
      return !0;
  }
  return !1;
}
function Is(e) {
  for (let n = e.childNodes.length - 1; n >= 0; n--) {
    const r = e.childNodes[n];
    if (Os(r) && (_s(r) || Is(r)))
      return !0;
  }
  return !1;
}
function _s(e) {
  if (!Rf(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function Rf(e) {
  if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null)
    return !0;
  if (e.getAttribute("disabled"))
    return !1;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return e.type !== "hidden" && e.type !== "file";
    case "BUTTON":
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}
let nr = [];
const Ls = Q({
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
  setup(e) {
    const n = pr(), r = L(null), o = L(null);
    let i = !1, a = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function s() {
      return nr[nr.length - 1] === n;
    }
    function u(b) {
      var x;
      b.code === "Escape" && s() && ((x = e.onEsc) === null || x === void 0 || x.call(e, b));
    }
    ot(() => {
      ze(() => e.active, (b) => {
        b ? (f(), Le("keydown", document, u)) : (De("keydown", document, u), i && p());
      }, {
        immediate: !0
      });
    }), Ge(() => {
      De("keydown", document, u), i && p();
    });
    function d(b) {
      if (!a && s()) {
        const x = c();
        if (x === null || x.contains(Kn(b)))
          return;
        m("first");
      }
    }
    function c() {
      const b = r.value;
      if (b === null)
        return null;
      let x = b;
      for (; x = x.nextSibling, !(x === null || x instanceof Element && x.tagName === "DIV"); )
        ;
      return x;
    }
    function f() {
      var b;
      if (!e.disabled) {
        if (nr.push(n), e.autoFocus) {
          const { initialFocusTo: x } = e;
          x === void 0 ? m("first") : (b = Ta(x)) === null || b === void 0 || b.focus({ preventScroll: !0 });
        }
        i = !0, document.addEventListener("focus", d, !0);
      }
    }
    function p() {
      var b;
      if (e.disabled || (document.removeEventListener("focus", d, !0), nr = nr.filter((B) => B !== n), s()))
        return;
      const { finalFocusTo: x } = e;
      x !== void 0 ? (b = Ta(x)) === null || b === void 0 || b.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (a = !0, l.focus({ preventScroll: !0 }), a = !1);
    }
    function m(b) {
      if (s() && e.active) {
        const x = r.value, B = o.value;
        if (x !== null && B !== null) {
          const A = c();
          if (A == null || A === B) {
            a = !0, x.focus({ preventScroll: !0 }), a = !1;
            return;
          }
          a = !0;
          const y = b === "first" ? Ms(A) : Is(A);
          a = !1, y || (a = !0, x.focus({ preventScroll: !0 }), a = !1);
        }
      }
    }
    function v(b) {
      if (a)
        return;
      const x = c();
      x !== null && (b.relatedTarget !== null && x.contains(b.relatedTarget) ? m("last") : m("first"));
    }
    function g(b) {
      a || (b.relatedTarget !== null && b.relatedTarget === r.value ? m("last") : m("first"));
    }
    return {
      focusableStartRef: r,
      focusableEndRef: o,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: v,
      handleEndFocus: g
    };
  },
  render() {
    const { default: e } = this.$slots;
    if (e === void 0)
      return null;
    if (this.disabled)
      return e();
    const { active: n, focusableStyle: r } = this;
    return h(ht, null, [
      h("div", {
        "aria-hidden": "true",
        tabindex: n ? "0" : "-1",
        ref: "focusableStartRef",
        style: r,
        onFocus: this.handleStartFocus
      }),
      e(),
      h("div", {
        "aria-hidden": "true",
        style: r,
        ref: "focusableEndRef",
        tabindex: n ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
});
function Ns(e, n) {
  n && (ot(() => {
    const {
      value: r
    } = e;
    r && io.registerHandler(r, n);
  }), Ge(() => {
    const {
      value: r
    } = e;
    r && io.unregisterHandler(r);
  }));
}
let Mn = 0, Xa = "", Ya = "", Za = "", Ja = "";
const Qa = L("0px");
function Of(e) {
  if (typeof document > "u") return;
  const n = document.documentElement;
  let r, o = !1;
  const i = () => {
    n.style.marginRight = Xa, n.style.overflow = Ya, n.style.overflowX = Za, n.style.overflowY = Ja, Qa.value = "0px";
  };
  ot(() => {
    r = ze(e, (a) => {
      if (a) {
        if (!Mn) {
          const l = window.innerWidth - n.offsetWidth;
          l > 0 && (Xa = n.style.marginRight, n.style.marginRight = `${l}px`, Qa.value = `${l}px`), Ya = n.style.overflow, Za = n.style.overflowX, Ja = n.style.overflowY, n.style.overflow = "hidden", n.style.overflowX = "hidden", n.style.overflowY = "hidden";
        }
        o = !0, Mn++;
      } else
        Mn--, Mn || i(), o = !1;
    }, {
      immediate: !0
    });
  }), Ge(() => {
    r == null || r(), o && (Mn--, Mn || i(), o = !1);
  });
}
const Vi = L(!1);
function el() {
  Vi.value = !0;
}
function tl() {
  Vi.value = !1;
}
let rr = 0;
function Mf() {
  return Pr && (wn(() => {
    rr || (window.addEventListener("compositionstart", el), window.addEventListener("compositionend", tl)), rr++;
  }), Ge(() => {
    rr <= 1 ? (window.removeEventListener("compositionstart", el), window.removeEventListener("compositionend", tl), rr = 0) : rr--;
  })), Vi;
}
function If(e) {
  const n = {
    isDeactivated: !1
  };
  let r = !1;
  return Yl(() => {
    if (n.isDeactivated = !1, !r) {
      r = !0;
      return;
    }
    e();
  }), Zl(() => {
    n.isDeactivated = !0, r || (r = !0);
  }), n;
}
const fi = "n-form-item";
function qi(e, {
  defaultSize: n = "medium",
  mergedSize: r,
  mergedDisabled: o
} = {}) {
  const i = xe(fi, null);
  we(fi, null);
  const a = R(r ? () => r(i) : () => {
    const {
      size: u
    } = e;
    if (u) return u;
    if (i) {
      const {
        mergedSize: d
      } = i;
      if (d.value !== void 0)
        return d.value;
    }
    return n;
  }), l = R(o ? () => o(i) : () => {
    const {
      disabled: u
    } = e;
    return u !== void 0 ? u : i ? i.disabled.value : !1;
  }), s = R(() => {
    const {
      status: u
    } = e;
    return u || (i == null ? void 0 : i.mergedValidationStatus.value);
  });
  return Ge(() => {
    i && i.restoreValidation();
  }), {
    mergedSizeRef: a,
    mergedDisabledRef: l,
    mergedStatusRef: s,
    nTriggerFormBlur() {
      i && i.handleContentBlur();
    },
    nTriggerFormChange() {
      i && i.handleContentChange();
    },
    nTriggerFormFocus() {
      i && i.handleContentFocus();
    },
    nTriggerFormInput() {
      i && i.handleContentInput();
    }
  };
}
var Hs = typeof global == "object" && global && global.Object === Object && global, _f = typeof self == "object" && self && self.Object === Object && self, Tt = Hs || _f || Function("return this")(), rn = Tt.Symbol, Ws = Object.prototype, Lf = Ws.hasOwnProperty, Nf = Ws.toString, or = rn ? rn.toStringTag : void 0;
function Hf(e) {
  var n = Lf.call(e, or), r = e[or];
  try {
    e[or] = void 0;
    var o = !0;
  } catch {
  }
  var i = Nf.call(e);
  return o && (n ? e[or] = r : delete e[or]), i;
}
var Wf = Object.prototype, jf = Wf.toString;
function Vf(e) {
  return jf.call(e);
}
var qf = "[object Null]", Kf = "[object Undefined]", nl = rn ? rn.toStringTag : void 0;
function Sn(e) {
  return e == null ? e === void 0 ? Kf : qf : nl && nl in Object(e) ? Hf(e) : Vf(e);
}
function on(e) {
  return e != null && typeof e == "object";
}
var Uf = "[object Symbol]";
function Ki(e) {
  return typeof e == "symbol" || on(e) && Sn(e) == Uf;
}
function js(e, n) {
  for (var r = -1, o = e == null ? 0 : e.length, i = Array(o); ++r < o; )
    i[r] = n(e[r], r, e);
  return i;
}
var gt = Array.isArray, Gf = 1 / 0, rl = rn ? rn.prototype : void 0, ol = rl ? rl.toString : void 0;
function Vs(e) {
  if (typeof e == "string")
    return e;
  if (gt(e))
    return js(e, Vs) + "";
  if (Ki(e))
    return ol ? ol.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -Gf ? "-0" : n;
}
function ln(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
function Ui(e) {
  return e;
}
var Xf = "[object AsyncFunction]", Yf = "[object Function]", Zf = "[object GeneratorFunction]", Jf = "[object Proxy]";
function Gi(e) {
  if (!ln(e))
    return !1;
  var n = Sn(e);
  return n == Yf || n == Zf || n == Xf || n == Jf;
}
var Vo = Tt["__core-js_shared__"], il = function() {
  var e = /[^.]+$/.exec(Vo && Vo.keys && Vo.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Qf(e) {
  return !!il && il in e;
}
var e0 = Function.prototype, t0 = e0.toString;
function Fn(e) {
  if (e != null) {
    try {
      return t0.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var n0 = /[\\^$.*+?()[\]{}|]/g, r0 = /^\[object .+?Constructor\]$/, o0 = Function.prototype, i0 = Object.prototype, a0 = o0.toString, l0 = i0.hasOwnProperty, s0 = RegExp(
  "^" + a0.call(l0).replace(n0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function u0(e) {
  if (!ln(e) || Qf(e))
    return !1;
  var n = Gi(e) ? s0 : r0;
  return n.test(Fn(e));
}
function d0(e, n) {
  return e == null ? void 0 : e[n];
}
function An(e, n) {
  var r = d0(e, n);
  return u0(r) ? r : void 0;
}
var hi = An(Tt, "WeakMap"), al = Object.create, c0 = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!ln(n))
      return {};
    if (al)
      return al(n);
    e.prototype = n;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function f0(e, n, r) {
  switch (r.length) {
    case 0:
      return e.call(n);
    case 1:
      return e.call(n, r[0]);
    case 2:
      return e.call(n, r[0], r[1]);
    case 3:
      return e.call(n, r[0], r[1], r[2]);
  }
  return e.apply(n, r);
}
function h0(e, n) {
  var r = -1, o = e.length;
  for (n || (n = Array(o)); ++r < o; )
    n[r] = e[r];
  return n;
}
var v0 = 800, p0 = 16, x0 = Date.now;
function g0(e) {
  var n = 0, r = 0;
  return function() {
    var o = x0(), i = p0 - (o - r);
    if (r = o, i > 0) {
      if (++n >= v0)
        return arguments[0];
    } else
      n = 0;
    return e.apply(void 0, arguments);
  };
}
function m0(e) {
  return function() {
    return e;
  };
}
var ao = function() {
  try {
    var e = An(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), b0 = ao ? function(e, n) {
  return ao(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: m0(n),
    writable: !0
  });
} : Ui, C0 = g0(b0), y0 = 9007199254740991, w0 = /^(?:0|[1-9]\d*)$/;
function Xi(e, n) {
  var r = typeof e;
  return n = n ?? y0, !!n && (r == "number" || r != "symbol" && w0.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function Yi(e, n, r) {
  n == "__proto__" && ao ? ao(e, n, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[n] = r;
}
function kr(e, n) {
  return e === n || e !== e && n !== n;
}
var B0 = Object.prototype, S0 = B0.hasOwnProperty;
function F0(e, n, r) {
  var o = e[n];
  (!(S0.call(e, n) && kr(o, r)) || r === void 0 && !(n in e)) && Yi(e, n, r);
}
function A0(e, n, r, o) {
  var i = !r;
  r || (r = {});
  for (var a = -1, l = n.length; ++a < l; ) {
    var s = n[a], u = void 0;
    u === void 0 && (u = e[s]), i ? Yi(r, s, u) : F0(r, s, u);
  }
  return r;
}
var ll = Math.max;
function $0(e, n, r) {
  return n = ll(n === void 0 ? e.length - 1 : n, 0), function() {
    for (var o = arguments, i = -1, a = ll(o.length - n, 0), l = Array(a); ++i < a; )
      l[i] = o[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = o[i];
    return s[n] = r(l), f0(e, this, s);
  };
}
function D0(e, n) {
  return C0($0(e, n, Ui), e + "");
}
var P0 = 9007199254740991;
function Zi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= P0;
}
function Qn(e) {
  return e != null && Zi(e.length) && !Gi(e);
}
function E0(e, n, r) {
  if (!ln(r))
    return !1;
  var o = typeof n;
  return (o == "number" ? Qn(r) && Xi(n, r.length) : o == "string" && n in r) ? kr(r[n], e) : !1;
}
function k0(e) {
  return D0(function(n, r) {
    var o = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, l = i > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, l && E0(r[0], r[1], l) && (a = i < 3 ? void 0 : a, i = 1), n = Object(n); ++o < i; ) {
      var s = r[o];
      s && e(n, s, o, a);
    }
    return n;
  });
}
var z0 = Object.prototype;
function Ji(e) {
  var n = e && e.constructor, r = typeof n == "function" && n.prototype || z0;
  return e === r;
}
function T0(e, n) {
  for (var r = -1, o = Array(e); ++r < e; )
    o[r] = n(r);
  return o;
}
var R0 = "[object Arguments]";
function sl(e) {
  return on(e) && Sn(e) == R0;
}
var qs = Object.prototype, O0 = qs.hasOwnProperty, M0 = qs.propertyIsEnumerable, lo = sl(/* @__PURE__ */ function() {
  return arguments;
}()) ? sl : function(e) {
  return on(e) && O0.call(e, "callee") && !M0.call(e, "callee");
};
function I0() {
  return !1;
}
var Ks = typeof exports == "object" && exports && !exports.nodeType && exports, ul = Ks && typeof module == "object" && module && !module.nodeType && module, _0 = ul && ul.exports === Ks, dl = _0 ? Tt.Buffer : void 0, L0 = dl ? dl.isBuffer : void 0, so = L0 || I0, N0 = "[object Arguments]", H0 = "[object Array]", W0 = "[object Boolean]", j0 = "[object Date]", V0 = "[object Error]", q0 = "[object Function]", K0 = "[object Map]", U0 = "[object Number]", G0 = "[object Object]", X0 = "[object RegExp]", Y0 = "[object Set]", Z0 = "[object String]", J0 = "[object WeakMap]", Q0 = "[object ArrayBuffer]", eh = "[object DataView]", th = "[object Float32Array]", nh = "[object Float64Array]", rh = "[object Int8Array]", oh = "[object Int16Array]", ih = "[object Int32Array]", ah = "[object Uint8Array]", lh = "[object Uint8ClampedArray]", sh = "[object Uint16Array]", uh = "[object Uint32Array]", Oe = {};
Oe[th] = Oe[nh] = Oe[rh] = Oe[oh] = Oe[ih] = Oe[ah] = Oe[lh] = Oe[sh] = Oe[uh] = !0;
Oe[N0] = Oe[H0] = Oe[Q0] = Oe[W0] = Oe[eh] = Oe[j0] = Oe[V0] = Oe[q0] = Oe[K0] = Oe[U0] = Oe[G0] = Oe[X0] = Oe[Y0] = Oe[Z0] = Oe[J0] = !1;
function dh(e) {
  return on(e) && Zi(e.length) && !!Oe[Sn(e)];
}
function ch(e) {
  return function(n) {
    return e(n);
  };
}
var Us = typeof exports == "object" && exports && !exports.nodeType && exports, fr = Us && typeof module == "object" && module && !module.nodeType && module, fh = fr && fr.exports === Us, qo = fh && Hs.process, cl = function() {
  try {
    var e = fr && fr.require && fr.require("util").types;
    return e || qo && qo.binding && qo.binding("util");
  } catch {
  }
}(), fl = cl && cl.isTypedArray, Qi = fl ? ch(fl) : dh, hh = Object.prototype, vh = hh.hasOwnProperty;
function Gs(e, n) {
  var r = gt(e), o = !r && lo(e), i = !r && !o && so(e), a = !r && !o && !i && Qi(e), l = r || o || i || a, s = l ? T0(e.length, String) : [], u = s.length;
  for (var d in e)
    (n || vh.call(e, d)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Xi(d, u))) && s.push(d);
  return s;
}
function Xs(e, n) {
  return function(r) {
    return e(n(r));
  };
}
var ph = Xs(Object.keys, Object), xh = Object.prototype, gh = xh.hasOwnProperty;
function mh(e) {
  if (!Ji(e))
    return ph(e);
  var n = [];
  for (var r in Object(e))
    gh.call(e, r) && r != "constructor" && n.push(r);
  return n;
}
function ea(e) {
  return Qn(e) ? Gs(e) : mh(e);
}
function bh(e) {
  var n = [];
  if (e != null)
    for (var r in Object(e))
      n.push(r);
  return n;
}
var Ch = Object.prototype, yh = Ch.hasOwnProperty;
function wh(e) {
  if (!ln(e))
    return bh(e);
  var n = Ji(e), r = [];
  for (var o in e)
    o == "constructor" && (n || !yh.call(e, o)) || r.push(o);
  return r;
}
function Ys(e) {
  return Qn(e) ? Gs(e, !0) : wh(e);
}
var Bh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Sh = /^\w*$/;
function ta(e, n) {
  if (gt(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ki(e) ? !0 : Sh.test(e) || !Bh.test(e) || n != null && e in Object(n);
}
var yr = An(Object, "create");
function Fh() {
  this.__data__ = yr ? yr(null) : {}, this.size = 0;
}
function Ah(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var $h = "__lodash_hash_undefined__", Dh = Object.prototype, Ph = Dh.hasOwnProperty;
function Eh(e) {
  var n = this.__data__;
  if (yr) {
    var r = n[e];
    return r === $h ? void 0 : r;
  }
  return Ph.call(n, e) ? n[e] : void 0;
}
var kh = Object.prototype, zh = kh.hasOwnProperty;
function Th(e) {
  var n = this.__data__;
  return yr ? n[e] !== void 0 : zh.call(n, e);
}
var Rh = "__lodash_hash_undefined__";
function Oh(e, n) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = yr && n === void 0 ? Rh : n, this;
}
function yn(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var o = e[n];
    this.set(o[0], o[1]);
  }
}
yn.prototype.clear = Fh;
yn.prototype.delete = Ah;
yn.prototype.get = Eh;
yn.prototype.has = Th;
yn.prototype.set = Oh;
function Mh() {
  this.__data__ = [], this.size = 0;
}
function bo(e, n) {
  for (var r = e.length; r--; )
    if (kr(e[r][0], n))
      return r;
  return -1;
}
var Ih = Array.prototype, _h = Ih.splice;
function Lh(e) {
  var n = this.__data__, r = bo(n, e);
  if (r < 0)
    return !1;
  var o = n.length - 1;
  return r == o ? n.pop() : _h.call(n, r, 1), --this.size, !0;
}
function Nh(e) {
  var n = this.__data__, r = bo(n, e);
  return r < 0 ? void 0 : n[r][1];
}
function Hh(e) {
  return bo(this.__data__, e) > -1;
}
function Wh(e, n) {
  var r = this.__data__, o = bo(r, e);
  return o < 0 ? (++this.size, r.push([e, n])) : r[o][1] = n, this;
}
function Ut(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var o = e[n];
    this.set(o[0], o[1]);
  }
}
Ut.prototype.clear = Mh;
Ut.prototype.delete = Lh;
Ut.prototype.get = Nh;
Ut.prototype.has = Hh;
Ut.prototype.set = Wh;
var wr = An(Tt, "Map");
function jh() {
  this.size = 0, this.__data__ = {
    hash: new yn(),
    map: new (wr || Ut)(),
    string: new yn()
  };
}
function Vh(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Co(e, n) {
  var r = e.__data__;
  return Vh(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
}
function qh(e) {
  var n = Co(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Kh(e) {
  return Co(this, e).get(e);
}
function Uh(e) {
  return Co(this, e).has(e);
}
function Gh(e, n) {
  var r = Co(this, e), o = r.size;
  return r.set(e, n), this.size += r.size == o ? 0 : 1, this;
}
function Gt(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var o = e[n];
    this.set(o[0], o[1]);
  }
}
Gt.prototype.clear = jh;
Gt.prototype.delete = qh;
Gt.prototype.get = Kh;
Gt.prototype.has = Uh;
Gt.prototype.set = Gh;
var Xh = "Expected a function";
function na(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(Xh);
  var r = function() {
    var o = arguments, i = n ? n.apply(this, o) : o[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var l = e.apply(this, o);
    return r.cache = a.set(i, l) || a, l;
  };
  return r.cache = new (na.Cache || Gt)(), r;
}
na.Cache = Gt;
var Yh = 500;
function Zh(e) {
  var n = na(e, function(o) {
    return r.size === Yh && r.clear(), o;
  }), r = n.cache;
  return n;
}
var Jh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Qh = /\\(\\)?/g, ev = Zh(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(Jh, function(r, o, i, a) {
    n.push(i ? a.replace(Qh, "$1") : o || r);
  }), n;
});
function Zs(e) {
  return e == null ? "" : Vs(e);
}
function Js(e, n) {
  return gt(e) ? e : ta(e, n) ? [e] : ev(Zs(e));
}
var tv = 1 / 0;
function yo(e) {
  if (typeof e == "string" || Ki(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -tv ? "-0" : n;
}
function Qs(e, n) {
  n = Js(n, e);
  for (var r = 0, o = n.length; e != null && r < o; )
    e = e[yo(n[r++])];
  return r && r == o ? e : void 0;
}
function ra(e, n, r) {
  var o = e == null ? void 0 : Qs(e, n);
  return o === void 0 ? r : o;
}
function nv(e, n) {
  for (var r = -1, o = n.length, i = e.length; ++r < o; )
    e[i + r] = n[r];
  return e;
}
var eu = Xs(Object.getPrototypeOf, Object), rv = "[object Object]", ov = Function.prototype, iv = Object.prototype, tu = ov.toString, av = iv.hasOwnProperty, lv = tu.call(Object);
function sv(e) {
  if (!on(e) || Sn(e) != rv)
    return !1;
  var n = eu(e);
  if (n === null)
    return !0;
  var r = av.call(n, "constructor") && n.constructor;
  return typeof r == "function" && r instanceof r && tu.call(r) == lv;
}
function uv(e, n, r) {
  var o = -1, i = e.length;
  n < 0 && (n = -n > i ? 0 : i + n), r = r > i ? i : r, r < 0 && (r += i), i = n > r ? 0 : r - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++o < i; )
    a[o] = e[o + n];
  return a;
}
function dv(e, n, r) {
  var o = e.length;
  return r = r === void 0 ? o : r, !n && r >= o ? e : uv(e, n, r);
}
var cv = "\\ud800-\\udfff", fv = "\\u0300-\\u036f", hv = "\\ufe20-\\ufe2f", vv = "\\u20d0-\\u20ff", pv = fv + hv + vv, xv = "\\ufe0e\\ufe0f", gv = "\\u200d", mv = RegExp("[" + gv + cv + pv + xv + "]");
function nu(e) {
  return mv.test(e);
}
function bv(e) {
  return e.split("");
}
var ru = "\\ud800-\\udfff", Cv = "\\u0300-\\u036f", yv = "\\ufe20-\\ufe2f", wv = "\\u20d0-\\u20ff", Bv = Cv + yv + wv, Sv = "\\ufe0e\\ufe0f", Fv = "[" + ru + "]", vi = "[" + Bv + "]", pi = "\\ud83c[\\udffb-\\udfff]", Av = "(?:" + vi + "|" + pi + ")", ou = "[^" + ru + "]", iu = "(?:\\ud83c[\\udde6-\\uddff]){2}", au = "[\\ud800-\\udbff][\\udc00-\\udfff]", $v = "\\u200d", lu = Av + "?", su = "[" + Sv + "]?", Dv = "(?:" + $v + "(?:" + [ou, iu, au].join("|") + ")" + su + lu + ")*", Pv = su + lu + Dv, Ev = "(?:" + [ou + vi + "?", vi, iu, au, Fv].join("|") + ")", kv = RegExp(pi + "(?=" + pi + ")|" + Ev + Pv, "g");
function zv(e) {
  return e.match(kv) || [];
}
function Tv(e) {
  return nu(e) ? zv(e) : bv(e);
}
function Rv(e) {
  return function(n) {
    n = Zs(n);
    var r = nu(n) ? Tv(n) : void 0, o = r ? r[0] : n.charAt(0), i = r ? dv(r, 1).join("") : n.slice(1);
    return o[e]() + i;
  };
}
var Ov = Rv("toUpperCase");
function Mv() {
  this.__data__ = new Ut(), this.size = 0;
}
function Iv(e) {
  var n = this.__data__, r = n.delete(e);
  return this.size = n.size, r;
}
function _v(e) {
  return this.__data__.get(e);
}
function Lv(e) {
  return this.__data__.has(e);
}
var Nv = 200;
function Hv(e, n) {
  var r = this.__data__;
  if (r instanceof Ut) {
    var o = r.__data__;
    if (!wr || o.length < Nv - 1)
      return o.push([e, n]), this.size = ++r.size, this;
    r = this.__data__ = new Gt(o);
  }
  return r.set(e, n), this.size = r.size, this;
}
function Et(e) {
  var n = this.__data__ = new Ut(e);
  this.size = n.size;
}
Et.prototype.clear = Mv;
Et.prototype.delete = Iv;
Et.prototype.get = _v;
Et.prototype.has = Lv;
Et.prototype.set = Hv;
var uu = typeof exports == "object" && exports && !exports.nodeType && exports, hl = uu && typeof module == "object" && module && !module.nodeType && module, Wv = hl && hl.exports === uu, vl = Wv ? Tt.Buffer : void 0;
vl && vl.allocUnsafe;
function jv(e, n) {
  return e.slice();
}
function Vv(e, n) {
  for (var r = -1, o = e == null ? 0 : e.length, i = 0, a = []; ++r < o; ) {
    var l = e[r];
    n(l, r, e) && (a[i++] = l);
  }
  return a;
}
function qv() {
  return [];
}
var Kv = Object.prototype, Uv = Kv.propertyIsEnumerable, pl = Object.getOwnPropertySymbols, Gv = pl ? function(e) {
  return e == null ? [] : (e = Object(e), Vv(pl(e), function(n) {
    return Uv.call(e, n);
  }));
} : qv;
function Xv(e, n, r) {
  var o = n(e);
  return gt(e) ? o : nv(o, r(e));
}
function xl(e) {
  return Xv(e, ea, Gv);
}
var xi = An(Tt, "DataView"), gi = An(Tt, "Promise"), mi = An(Tt, "Set"), gl = "[object Map]", Yv = "[object Object]", ml = "[object Promise]", bl = "[object Set]", Cl = "[object WeakMap]", yl = "[object DataView]", Zv = Fn(xi), Jv = Fn(wr), Qv = Fn(gi), ep = Fn(mi), tp = Fn(hi), en = Sn;
(xi && en(new xi(new ArrayBuffer(1))) != yl || wr && en(new wr()) != gl || gi && en(gi.resolve()) != ml || mi && en(new mi()) != bl || hi && en(new hi()) != Cl) && (en = function(e) {
  var n = Sn(e), r = n == Yv ? e.constructor : void 0, o = r ? Fn(r) : "";
  if (o)
    switch (o) {
      case Zv:
        return yl;
      case Jv:
        return gl;
      case Qv:
        return ml;
      case ep:
        return bl;
      case tp:
        return Cl;
    }
  return n;
});
var uo = Tt.Uint8Array;
function np(e) {
  var n = new e.constructor(e.byteLength);
  return new uo(n).set(new uo(e)), n;
}
function rp(e, n) {
  var r = np(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function op(e) {
  return typeof e.constructor == "function" && !Ji(e) ? c0(eu(e)) : {};
}
var ip = "__lodash_hash_undefined__";
function ap(e) {
  return this.__data__.set(e, ip), this;
}
function lp(e) {
  return this.__data__.has(e);
}
function co(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Gt(); ++n < r; )
    this.add(e[n]);
}
co.prototype.add = co.prototype.push = ap;
co.prototype.has = lp;
function sp(e, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(e[r], r, e))
      return !0;
  return !1;
}
function up(e, n) {
  return e.has(n);
}
var dp = 1, cp = 2;
function du(e, n, r, o, i, a) {
  var l = r & dp, s = e.length, u = n.length;
  if (s != u && !(l && u > s))
    return !1;
  var d = a.get(e), c = a.get(n);
  if (d && c)
    return d == n && c == e;
  var f = -1, p = !0, m = r & cp ? new co() : void 0;
  for (a.set(e, n), a.set(n, e); ++f < s; ) {
    var v = e[f], g = n[f];
    if (o)
      var b = l ? o(g, v, f, n, e, a) : o(v, g, f, e, n, a);
    if (b !== void 0) {
      if (b)
        continue;
      p = !1;
      break;
    }
    if (m) {
      if (!sp(n, function(x, B) {
        if (!up(m, B) && (v === x || i(v, x, r, o, a)))
          return m.push(B);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === g || i(v, g, r, o, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(n), p;
}
function fp(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(o, i) {
    r[++n] = [i, o];
  }), r;
}
function hp(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(o) {
    r[++n] = o;
  }), r;
}
var vp = 1, pp = 2, xp = "[object Boolean]", gp = "[object Date]", mp = "[object Error]", bp = "[object Map]", Cp = "[object Number]", yp = "[object RegExp]", wp = "[object Set]", Bp = "[object String]", Sp = "[object Symbol]", Fp = "[object ArrayBuffer]", Ap = "[object DataView]", wl = rn ? rn.prototype : void 0, Ko = wl ? wl.valueOf : void 0;
function $p(e, n, r, o, i, a, l) {
  switch (r) {
    case Ap:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case Fp:
      return !(e.byteLength != n.byteLength || !a(new uo(e), new uo(n)));
    case xp:
    case gp:
    case Cp:
      return kr(+e, +n);
    case mp:
      return e.name == n.name && e.message == n.message;
    case yp:
    case Bp:
      return e == n + "";
    case bp:
      var s = fp;
    case wp:
      var u = o & vp;
      if (s || (s = hp), e.size != n.size && !u)
        return !1;
      var d = l.get(e);
      if (d)
        return d == n;
      o |= pp, l.set(e, n);
      var c = du(s(e), s(n), o, i, a, l);
      return l.delete(e), c;
    case Sp:
      if (Ko)
        return Ko.call(e) == Ko.call(n);
  }
  return !1;
}
var Dp = 1, Pp = Object.prototype, Ep = Pp.hasOwnProperty;
function kp(e, n, r, o, i, a) {
  var l = r & Dp, s = xl(e), u = s.length, d = xl(n), c = d.length;
  if (u != c && !l)
    return !1;
  for (var f = u; f--; ) {
    var p = s[f];
    if (!(l ? p in n : Ep.call(n, p)))
      return !1;
  }
  var m = a.get(e), v = a.get(n);
  if (m && v)
    return m == n && v == e;
  var g = !0;
  a.set(e, n), a.set(n, e);
  for (var b = l; ++f < u; ) {
    p = s[f];
    var x = e[p], B = n[p];
    if (o)
      var A = l ? o(B, x, p, n, e, a) : o(x, B, p, e, n, a);
    if (!(A === void 0 ? x === B || i(x, B, r, o, a) : A)) {
      g = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (g && !b) {
    var y = e.constructor, S = n.constructor;
    y != S && "constructor" in e && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof S == "function" && S instanceof S) && (g = !1);
  }
  return a.delete(e), a.delete(n), g;
}
var zp = 1, Bl = "[object Arguments]", Sl = "[object Array]", Ur = "[object Object]", Tp = Object.prototype, Fl = Tp.hasOwnProperty;
function Rp(e, n, r, o, i, a) {
  var l = gt(e), s = gt(n), u = l ? Sl : en(e), d = s ? Sl : en(n);
  u = u == Bl ? Ur : u, d = d == Bl ? Ur : d;
  var c = u == Ur, f = d == Ur, p = u == d;
  if (p && so(e)) {
    if (!so(n))
      return !1;
    l = !0, c = !1;
  }
  if (p && !c)
    return a || (a = new Et()), l || Qi(e) ? du(e, n, r, o, i, a) : $p(e, n, u, r, o, i, a);
  if (!(r & zp)) {
    var m = c && Fl.call(e, "__wrapped__"), v = f && Fl.call(n, "__wrapped__");
    if (m || v) {
      var g = m ? e.value() : e, b = v ? n.value() : n;
      return a || (a = new Et()), i(g, b, r, o, a);
    }
  }
  return p ? (a || (a = new Et()), kp(e, n, r, o, i, a)) : !1;
}
function oa(e, n, r, o, i) {
  return e === n ? !0 : e == null || n == null || !on(e) && !on(n) ? e !== e && n !== n : Rp(e, n, r, o, oa, i);
}
var Op = 1, Mp = 2;
function Ip(e, n, r, o) {
  var i = r.length, a = i;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var l = r[i];
    if (l[2] ? l[1] !== e[l[0]] : !(l[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    l = r[i];
    var s = l[0], u = e[s], d = l[1];
    if (l[2]) {
      if (u === void 0 && !(s in e))
        return !1;
    } else {
      var c = new Et(), f;
      if (!(f === void 0 ? oa(d, u, Op | Mp, o, c) : f))
        return !1;
    }
  }
  return !0;
}
function cu(e) {
  return e === e && !ln(e);
}
function _p(e) {
  for (var n = ea(e), r = n.length; r--; ) {
    var o = n[r], i = e[o];
    n[r] = [o, i, cu(i)];
  }
  return n;
}
function fu(e, n) {
  return function(r) {
    return r == null ? !1 : r[e] === n && (n !== void 0 || e in Object(r));
  };
}
function Lp(e) {
  var n = _p(e);
  return n.length == 1 && n[0][2] ? fu(n[0][0], n[0][1]) : function(r) {
    return r === e || Ip(r, e, n);
  };
}
function Np(e, n) {
  return e != null && n in Object(e);
}
function Hp(e, n, r) {
  n = Js(n, e);
  for (var o = -1, i = n.length, a = !1; ++o < i; ) {
    var l = yo(n[o]);
    if (!(a = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return a || ++o != i ? a : (i = e == null ? 0 : e.length, !!i && Zi(i) && Xi(l, i) && (gt(e) || lo(e)));
}
function Wp(e, n) {
  return e != null && Hp(e, n, Np);
}
var jp = 1, Vp = 2;
function qp(e, n) {
  return ta(e) && cu(n) ? fu(yo(e), n) : function(r) {
    var o = ra(r, e);
    return o === void 0 && o === n ? Wp(r, e) : oa(n, o, jp | Vp);
  };
}
function Kp(e) {
  return function(n) {
    return n == null ? void 0 : n[e];
  };
}
function Up(e) {
  return function(n) {
    return Qs(n, e);
  };
}
function Gp(e) {
  return ta(e) ? Kp(yo(e)) : Up(e);
}
function Xp(e) {
  return typeof e == "function" ? e : e == null ? Ui : typeof e == "object" ? gt(e) ? qp(e[0], e[1]) : Lp(e) : Gp(e);
}
function Yp(e) {
  return function(n, r, o) {
    for (var i = -1, a = Object(n), l = o(n), s = l.length; s--; ) {
      var u = l[++i];
      if (r(a[u], u, a) === !1)
        break;
    }
    return n;
  };
}
var hu = Yp();
function Zp(e, n) {
  return e && hu(e, n, ea);
}
function Jp(e, n) {
  return function(r, o) {
    if (r == null)
      return r;
    if (!Qn(r))
      return e(r, o);
    for (var i = r.length, a = -1, l = Object(r); ++a < i && o(l[a], a, l) !== !1; )
      ;
    return r;
  };
}
var Qp = Jp(Zp);
function bi(e, n, r) {
  (r !== void 0 && !kr(e[n], r) || r === void 0 && !(n in e)) && Yi(e, n, r);
}
function ex(e) {
  return on(e) && Qn(e);
}
function Ci(e, n) {
  if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
    return e[n];
}
function tx(e) {
  return A0(e, Ys(e));
}
function nx(e, n, r, o, i, a, l) {
  var s = Ci(e, r), u = Ci(n, r), d = l.get(u);
  if (d) {
    bi(e, r, d);
    return;
  }
  var c = a ? a(s, u, r + "", e, n, l) : void 0, f = c === void 0;
  if (f) {
    var p = gt(u), m = !p && so(u), v = !p && !m && Qi(u);
    c = u, p || m || v ? gt(s) ? c = s : ex(s) ? c = h0(s) : m ? (f = !1, c = jv(u)) : v ? (f = !1, c = rp(u)) : c = [] : sv(u) || lo(u) ? (c = s, lo(s) ? c = tx(s) : (!ln(s) || Gi(s)) && (c = op(u))) : f = !1;
  }
  f && (l.set(u, c), i(c, u, o, a, l), l.delete(u)), bi(e, r, c);
}
function vu(e, n, r, o, i) {
  e !== n && hu(n, function(a, l) {
    if (i || (i = new Et()), ln(a))
      nx(e, n, l, r, vu, o, i);
    else {
      var s = o ? o(Ci(e, l), a, l + "", e, n, i) : void 0;
      s === void 0 && (s = a), bi(e, l, s);
    }
  }, Ys);
}
function rx(e, n) {
  var r = -1, o = Qn(e) ? Array(e.length) : [];
  return Qp(e, function(i, a, l) {
    o[++r] = n(i, a, l);
  }), o;
}
function ox(e, n) {
  var r = gt(e) ? js : rx;
  return r(e, Xp(n));
}
var ar = k0(function(e, n, r) {
  vu(e, n, r);
});
const sn = {
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
  fontSize: ix,
  fontFamily: ax,
  lineHeight: lx
} = sn, pu = z("body", `
 margin: 0;
 font-size: ${ix};
 font-family: ${ax};
 line-height: ${lx};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [z("input", `
 font-family: inherit;
 font-size: inherit;
 `)]), Kt = "n-config-provider", Br = "naive-ui-style";
function ce(e, n, r, o, i, a) {
  const l = Bn(), s = xe(Kt, null);
  if (r) {
    const d = () => {
      const c = a == null ? void 0 : a.value;
      r.mount({
        id: c === void 0 ? n : c + n,
        head: !0,
        props: {
          bPrefix: c ? `.${c}-` : void 0
        },
        anchorMetaName: Br,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || pu.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Br,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    l ? d() : wn(d);
  }
  return R(() => {
    var d;
    const {
      theme: {
        common: c,
        self: f,
        peers: p = {}
      } = {},
      themeOverrides: m = {},
      builtinThemeOverrides: v = {}
    } = i, {
      common: g,
      peers: b
    } = m, {
      common: x = void 0,
      [e]: {
        common: B = void 0,
        self: A = void 0,
        peers: y = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: S = void 0,
      [e]: E = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: C,
      peers: $ = {}
    } = E, M = ar({}, c || B || x || o.common, S, C, g), I = ar(
      // {}, executed every time, no need for empty obj
      (d = f || A || o.self) === null || d === void 0 ? void 0 : d(M),
      v,
      E,
      m
    );
    return {
      common: M,
      self: I,
      peers: ar({}, o.peers, y, p),
      peerOverrides: ar({}, v.peers, $, b)
    };
  });
}
ce.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const yi = "n";
function Pe(e = {}, n = {
  defaultBordered: !0
}) {
  const r = xe(Kt, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: r == null ? void 0 : r.inlineThemeDisabled,
    mergedRtlRef: r == null ? void 0 : r.mergedRtlRef,
    mergedComponentPropsRef: r == null ? void 0 : r.mergedComponentPropsRef,
    mergedBreakpointsRef: r == null ? void 0 : r.mergedBreakpointsRef,
    mergedBorderedRef: R(() => {
      var o, i;
      const {
        bordered: a
      } = e;
      return a !== void 0 ? a : (i = (o = r == null ? void 0 : r.mergedBorderedRef.value) !== null && o !== void 0 ? o : n.defaultBordered) !== null && i !== void 0 ? i : !0;
    }),
    mergedClsPrefixRef: r ? r.mergedClsPrefixRef : Md(yi),
    namespaceRef: R(() => r == null ? void 0 : r.mergedNamespaceRef.value)
  };
}
const sx = {
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
    loadingRequiredMessage: (e) => `加载全部 ${e} 的子节点后才可选中`
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
    total: (e) => `共 ${e} 项`,
    selected: (e) => `已选 ${e} 项`
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
}, ux = {
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
    loadingRequiredMessage: (e) => `Please load all ${e}'s descendants before checking it.`
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
    total: (e) => `Total ${e} items`,
    selected: (e) => `${e} items selected`
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
function Hn(e) {
  return (n = {}) => {
    const r = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
function At(e) {
  return (n, r) => {
    const o = r != null && r.context ? String(r.context) : "standalone";
    let i;
    if (o === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : l;
      i = e.formattingValues[s] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, s = r != null && r.width ? String(r.width) : e.defaultWidth;
      i = e.values[s] || e.values[l];
    }
    const a = e.argumentCallback ? e.argumentCallback(n) : n;
    return i[a];
  };
}
function $t(e) {
  return (n, r = {}) => {
    const o = r.width, i = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], a = n.match(i);
    if (!a)
      return null;
    const l = a[0], s = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? cx(s, (f) => f.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      dx(s, (f) => f.test(l))
    );
    let d;
    d = e.valueCallback ? e.valueCallback(u) : u, d = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(d)
    ) : d;
    const c = n.slice(l.length);
    return { value: d, rest: c };
  };
}
function dx(e, n) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && n(e[r]))
      return r;
}
function cx(e, n) {
  for (let r = 0; r < e.length; r++)
    if (n(e[r]))
      return r;
}
function xu(e) {
  return (n, r = {}) => {
    const o = n.match(e.matchPattern);
    if (!o) return null;
    const i = o[0], a = n.match(e.parsePattern);
    if (!a) return null;
    let l = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    l = r.valueCallback ? r.valueCallback(l) : l;
    const s = n.slice(i.length);
    return { value: l, rest: s };
  };
}
function fx(e) {
  const n = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && n === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || n === "[object Number]" || typeof e == "string" || n === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
let hx = {};
function vx() {
  return hx;
}
function Al(e, n) {
  var s, u, d, c;
  const r = vx(), o = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((c = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = fx(e), a = i.getDay(), l = (a < o ? 7 : 0) + a - o;
  return i.setDate(i.getDate() - l), i.setHours(0, 0, 0, 0), i;
}
function px(e, n, r) {
  const o = Al(e, r), i = Al(n, r);
  return +o == +i;
}
const xx = {
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
}, gx = (e, n, r) => {
  let o;
  const i = xx[e];
  return typeof i == "string" ? o = i : n === 1 ? o = i.one : o = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
}, mx = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, bx = (e, n, r, o) => mx[e], Cx = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, yx = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, wx = {
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
}, Bx = {
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
}, Sx = {
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
}, Fx = {
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
}, Ax = (e, n) => {
  const r = Number(e), o = r % 100;
  if (o > 20 || o < 10)
    switch (o % 10) {
      case 1:
        return r + "st";
      case 2:
        return r + "nd";
      case 3:
        return r + "rd";
    }
  return r + "th";
}, $x = {
  ordinalNumber: Ax,
  era: At({
    values: Cx,
    defaultWidth: "wide"
  }),
  quarter: At({
    values: yx,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: At({
    values: wx,
    defaultWidth: "wide"
  }),
  day: At({
    values: Bx,
    defaultWidth: "wide"
  }),
  dayPeriod: At({
    values: Sx,
    defaultWidth: "wide",
    formattingValues: Fx,
    defaultFormattingWidth: "wide"
  })
}, Dx = /^(\d+)(th|st|nd|rd)?/i, Px = /\d+/i, Ex = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, kx = {
  any: [/^b/i, /^(a|c)/i]
}, zx = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Tx = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Rx = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Ox = {
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
}, Mx = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ix = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, _x = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Lx = {
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
}, Nx = {
  ordinalNumber: xu({
    matchPattern: Dx,
    parsePattern: Px,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: $t({
    matchPatterns: Ex,
    defaultMatchWidth: "wide",
    parsePatterns: kx,
    defaultParseWidth: "any"
  }),
  quarter: $t({
    matchPatterns: zx,
    defaultMatchWidth: "wide",
    parsePatterns: Tx,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: $t({
    matchPatterns: Rx,
    defaultMatchWidth: "wide",
    parsePatterns: Ox,
    defaultParseWidth: "any"
  }),
  day: $t({
    matchPatterns: Mx,
    defaultMatchWidth: "wide",
    parsePatterns: Ix,
    defaultParseWidth: "any"
  }),
  dayPeriod: $t({
    matchPatterns: _x,
    defaultMatchWidth: "any",
    parsePatterns: Lx,
    defaultParseWidth: "any"
  })
}, Hx = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Wx = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, jx = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Vx = {
  date: Hn({
    formats: Hx,
    defaultWidth: "full"
  }),
  time: Hn({
    formats: Wx,
    defaultWidth: "full"
  }),
  dateTime: Hn({
    formats: jx,
    defaultWidth: "full"
  })
}, qx = {
  code: "en-US",
  formatDistance: gx,
  formatLong: Vx,
  formatRelative: bx,
  localize: $x,
  match: Nx,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Kx = {
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
}, Ux = (e, n, r) => {
  let o;
  const i = Kx[e];
  return typeof i == "string" ? o = i : n === 1 ? o = i.one : o = i.other.replace("{{count}}", String(n)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? o + "内" : o + "前" : o;
}, Gx = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, Xx = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, Yx = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Zx = {
  date: Hn({
    formats: Gx,
    defaultWidth: "full"
  }),
  time: Hn({
    formats: Xx,
    defaultWidth: "full"
  }),
  dateTime: Hn({
    formats: Yx,
    defaultWidth: "full"
  })
};
function $l(e, n, r) {
  const o = "eeee p";
  return px(e, n, r) ? o : e.getTime() > n.getTime() ? "'下个'" + o : "'上个'" + o;
}
const Jx = {
  lastWeek: $l,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: $l,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, Qx = (e, n, r, o) => {
  const i = Jx[e];
  return typeof i == "function" ? i(n, r, o) : i;
}, eg = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, tg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, ng = {
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
}, rg = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, og = {
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
}, ig = {
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
}, ag = (e, n) => {
  const r = Number(e);
  switch (n == null ? void 0 : n.unit) {
    case "date":
      return r.toString() + "日";
    case "hour":
      return r.toString() + "时";
    case "minute":
      return r.toString() + "分";
    case "second":
      return r.toString() + "秒";
    default:
      return "第 " + r.toString();
  }
}, lg = {
  ordinalNumber: ag,
  era: At({
    values: eg,
    defaultWidth: "wide"
  }),
  quarter: At({
    values: tg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: At({
    values: ng,
    defaultWidth: "wide"
  }),
  day: At({
    values: rg,
    defaultWidth: "wide"
  }),
  dayPeriod: At({
    values: og,
    defaultWidth: "wide",
    formattingValues: ig,
    defaultFormattingWidth: "wide"
  })
}, sg = /^(第\s*)?\d+(日|时|分|秒)?/i, ug = /\d+/i, dg = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, cg = {
  any: [/^(前)/i, /^(公元)/i]
}, fg = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, hg = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, vg = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, pg = {
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
}, xg = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, gg = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, mg = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, bg = {
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
}, Cg = {
  ordinalNumber: xu({
    matchPattern: sg,
    parsePattern: ug,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: $t({
    matchPatterns: dg,
    defaultMatchWidth: "wide",
    parsePatterns: cg,
    defaultParseWidth: "any"
  }),
  quarter: $t({
    matchPatterns: fg,
    defaultMatchWidth: "wide",
    parsePatterns: hg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: $t({
    matchPatterns: vg,
    defaultMatchWidth: "wide",
    parsePatterns: pg,
    defaultParseWidth: "any"
  }),
  day: $t({
    matchPatterns: xg,
    defaultMatchWidth: "wide",
    parsePatterns: gg,
    defaultParseWidth: "any"
  }),
  dayPeriod: $t({
    matchPatterns: mg,
    defaultMatchWidth: "any",
    parsePatterns: bg,
    defaultParseWidth: "any"
  })
}, yg = {
  code: "zh-CN",
  formatDistance: Ux,
  formatLong: Zx,
  formatRelative: Qx,
  localize: lg,
  match: Cg,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, wg = {
  name: "zh-CN",
  locale: yg
}, Bg = {
  name: "en-US",
  locale: qx
};
function Sr(e) {
  const {
    mergedLocaleRef: n,
    mergedDateLocaleRef: r
  } = xe(Kt, null) || {}, o = R(() => {
    var a, l;
    return (l = (a = n == null ? void 0 : n.value) === null || a === void 0 ? void 0 : a[e]) !== null && l !== void 0 ? l : ux[e];
  });
  return {
    dateLocaleRef: R(() => {
      var a;
      return (a = r == null ? void 0 : r.value) !== null && a !== void 0 ? a : Bg;
    }),
    localeRef: o
  };
}
function $n(e, n, r) {
  if (!n) {
    process.env.NODE_ENV !== "production" && Dr("use-style", "No style is specified.");
    return;
  }
  const o = Bn(), i = xe(Kt, null), a = () => {
    const l = r.value;
    n.mount({
      id: l === void 0 ? e : l + e,
      head: !0,
      anchorMetaName: Br,
      props: {
        bPrefix: l ? `.${l}-` : void 0
      },
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    }), i != null && i.preflightStyleDisabled || pu.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: Br,
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    });
  };
  o ? a() : wn(a);
}
function je(e, n, r, o) {
  r || Dr("useThemeClass", "cssVarsRef is not passed");
  const i = xe(Kt, null), a = i == null ? void 0 : i.mergedThemeHashRef, l = i == null ? void 0 : i.styleMountTarget, s = L(""), u = Bn();
  let d;
  const c = `__${e}`, f = () => {
    let p = c;
    const m = n ? n.value : void 0, v = a == null ? void 0 : a.value;
    v && (p += `-${v}`), m && (p += `-${m}`);
    const {
      themeOverrides: g,
      builtinThemeOverrides: b
    } = o;
    g && (p += `-${xr(JSON.stringify(g))}`), b && (p += `-${xr(JSON.stringify(b))}`), s.value = p, d = () => {
      const x = r.value;
      let B = "";
      for (const A in x)
        B += `${A}: ${x[A]};`;
      z(`.${p}`, B).mount({
        id: p,
        ssr: u,
        parent: l
      }), d = void 0;
    };
  };
  return rt(() => {
    f();
  }), {
    themeClass: s,
    onRender: () => {
      d == null || d();
    }
  };
}
function wt(e, n, r) {
  if (!n) return;
  const o = Bn(), i = R(() => {
    const {
      value: s
    } = n;
    if (!s)
      return;
    const u = s[e];
    if (u)
      return u;
  }), a = xe(Kt, null), l = () => {
    rt(() => {
      const {
        value: s
      } = r, u = `${s}${e}Rtl`;
      if (yc(u, o)) return;
      const {
        value: d
      } = i;
      d && d.style.mount({
        id: u,
        head: !0,
        anchorMetaName: Br,
        props: {
          bPrefix: s ? `.${s}-` : void 0
        },
        ssr: o,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    });
  };
  return o ? l() : wn(l), i;
}
function er(e, n) {
  return Q({
    name: Ov(e),
    setup() {
      var r;
      const o = (r = xe(Kt, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
      return () => {
        var i;
        const a = (i = o == null ? void 0 : o.value) === null || i === void 0 ? void 0 : i[e];
        return a ? a() : n;
      };
    }
  });
}
const Sg = Q({
  name: "Checkmark",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, h("g", {
      fill: "none"
    }, h("path", {
      d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",
      fill: "currentColor"
    })));
  }
}), Fg = Q({
  name: "ChevronLeft",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",
      fill: "currentColor"
    }));
  }
}), gu = Q({
  name: "ChevronRight",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
      fill: "currentColor"
    }));
  }
}), Ag = er("close", h("svg", {
  viewBox: "0 0 12 12",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": !0
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h("path", {
  d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"
}))))), $g = Q({
  name: "Eye",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, h("path", {
      d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }), h("circle", {
      cx: "256",
      cy: "256",
      r: "80",
      fill: "none",
      stroke: "currentColor",
      "stroke-miterlimit": "10",
      "stroke-width": "32"
    }));
  }
}), Dg = Q({
  name: "EyeOff",
  render() {
    return h("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, h("path", {
      d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
      fill: "currentColor"
    }), h("path", {
      d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
      fill: "currentColor"
    }), h("path", {
      d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
      fill: "currentColor"
    }), h("path", {
      d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
      fill: "currentColor"
    }), h("path", {
      d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
      fill: "currentColor"
    }));
  }
}), Pg = Q({
  name: "Empty",
  render() {
    return h("svg", {
      viewBox: "0 0 28 28",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
      fill: "currentColor"
    }), h("path", {
      d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
      fill: "currentColor"
    }));
  }
}), Eg = er("error", h("svg", {
  viewBox: "0 0 48 48",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, h("g", {
  "fill-rule": "nonzero"
}, h("path", {
  d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"
}))))), Dl = er("info", h("svg", {
  viewBox: "0 0 28 28",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, h("g", {
  "fill-rule": "nonzero"
}, h("path", {
  d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"
}))))), kg = er("success", h("svg", {
  viewBox: "0 0 48 48",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, h("g", {
  "fill-rule": "nonzero"
}, h("path", {
  d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"
}))))), mu = er("warning", h("svg", {
  viewBox: "0 0 24 24",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, h("g", {
  "fill-rule": "nonzero"
}, h("path", {
  d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"
}))))), zg = Q({
  name: "ChevronDown",
  render() {
    return h("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, h("path", {
      d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
      fill: "currentColor"
    }));
  }
}), Tg = er("clear", h("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, h("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, h("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, h("path", {
  d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
}))))), ia = Q({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: n
  }) {
    const r = Jn();
    return () => h(ft, {
      name: "icon-switch-transition",
      appear: r.value
    }, n);
  }
}), bu = Q({
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
  setup(e, {
    slots: n
  }) {
    function r(s) {
      e.width ? s.style.maxWidth = `${s.offsetWidth}px` : s.style.maxHeight = `${s.offsetHeight}px`, s.offsetWidth;
    }
    function o(s) {
      e.width ? s.style.maxWidth = "0" : s.style.maxHeight = "0", s.offsetWidth;
      const {
        onLeave: u
      } = e;
      u && u();
    }
    function i(s) {
      e.width ? s.style.maxWidth = "" : s.style.maxHeight = "";
      const {
        onAfterLeave: u
      } = e;
      u && u();
    }
    function a(s) {
      if (s.style.transition = "none", e.width) {
        const u = s.offsetWidth;
        s.style.maxWidth = "0", s.offsetWidth, s.style.transition = "", s.style.maxWidth = `${u}px`;
      } else if (e.reverse)
        s.style.maxHeight = `${s.offsetHeight}px`, s.offsetHeight, s.style.transition = "", s.style.maxHeight = "0";
      else {
        const u = s.offsetHeight;
        s.style.maxHeight = "0", s.offsetWidth, s.style.transition = "", s.style.maxHeight = `${u}px`;
      }
      s.offsetWidth;
    }
    function l(s) {
      var u;
      e.width ? s.style.maxWidth = "" : e.reverse || (s.style.maxHeight = ""), (u = e.onAfterEnter) === null || u === void 0 || u.call(e);
    }
    return () => {
      const {
        group: s,
        width: u,
        appear: d,
        mode: c
      } = e, f = s ? Id : ft, p = {
        name: u ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: d,
        onEnter: a,
        onAfterEnter: l,
        onBeforeLeave: r,
        onLeave: o,
        onAfterLeave: i
      };
      return s || (p.mode = c), h(f, p, n);
    };
  }
}), Rg = O("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [z("svg", `
 height: 1em;
 width: 1em;
 `)]), zt = Q({
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
  setup(e) {
    $n("-base-icon", Rg, le(e, "clsPrefix"));
  },
  render() {
    return h("i", {
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
}), Og = O("base-close", `
 display: flex;
 align-items: center;
 justify-content: center;
 cursor: pointer;
 background-color: transparent;
 color: var(--n-close-icon-color);
 border-radius: var(--n-close-border-radius);
 height: var(--n-close-size);
 width: var(--n-close-size);
 font-size: var(--n-close-icon-size);
 outline: none;
 border: none;
 position: relative;
 padding: 0;
`, [V("absolute", `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `), z("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), He("disabled", [z("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), z("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), z("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), z("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), z("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), V("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), V("round", [z("&::before", `
 border-radius: 50%;
 `)])]), aa = Q({
  name: "BaseClose",
  props: {
    isButtonTag: {
      type: Boolean,
      default: !0
    },
    clsPrefix: {
      type: String,
      required: !0
    },
    disabled: {
      type: Boolean,
      default: void 0
    },
    focusable: {
      type: Boolean,
      default: !0
    },
    round: Boolean,
    onClick: Function,
    absolute: Boolean
  },
  setup(e) {
    return $n("-base-close", Og, le(e, "clsPrefix")), () => {
      const {
        clsPrefix: n,
        disabled: r,
        absolute: o,
        round: i,
        isButtonTag: a
      } = e;
      return h(a ? "button" : "div", {
        type: a ? "button" : void 0,
        tabindex: r || !e.focusable ? -1 : 0,
        "aria-disabled": r,
        "aria-label": "close",
        role: a ? void 0 : "button",
        disabled: r,
        class: [`${n}-base-close`, o && `${n}-base-close--absolute`, r && `${n}-base-close--disabled`, i && `${n}-base-close--round`],
        onMousedown: (s) => {
          e.focusable || s.preventDefault();
        },
        onClick: e.onClick
      }, h(zt, {
        clsPrefix: n
      }, {
        default: () => h(Ag, null)
      }));
    };
  }
}), Mg = Q({
  props: {
    onFocus: Function,
    onBlur: Function
  },
  setup(e) {
    return () => h("div", {
      style: "width: 0; height: 0",
      tabindex: 0,
      onFocus: e.onFocus,
      onBlur: e.onBlur
    });
  }
}), {
  cubicBezierEaseInOut: Ig
} = sn;
function fo({
  originalTransform: e = "",
  left: n = 0,
  top: r = 0,
  transition: o = `all .3s ${Ig} !important`
} = {}) {
  return [z("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${e} scale(0.75)`,
    left: n,
    top: r,
    opacity: 0
  }), z("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${e}`,
    left: n,
    top: r,
    opacity: 1
  }), z("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: n,
    top: r,
    transition: o
  })];
}
const _g = z([z("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), O("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [k("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [fo()]), k("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [fo({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), k("container", `
 animation: rotator 3s linear infinite both;
 `, [k("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Uo = "1.6s", Lg = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, wo = Q({
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
  }, Lg),
  setup(e) {
    $n("-base-loading", _g, le(e, "clsPrefix"));
  },
  render() {
    const {
      clsPrefix: e,
      radius: n,
      strokeWidth: r,
      stroke: o,
      scale: i
    } = this, a = n / i;
    return h("div", {
      class: `${e}-base-loading`,
      role: "img",
      "aria-label": "loading"
    }, h(ia, null, {
      default: () => this.show ? h("div", {
        key: "icon",
        class: `${e}-base-loading__transition-wrapper`
      }, h("div", {
        class: `${e}-base-loading__container`
      }, h("svg", {
        class: `${e}-base-loading__icon`,
        viewBox: `0 0 ${2 * a} ${2 * a}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          color: o
        }
      }, h("g", null, h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${a} ${a};270 ${a} ${a}`,
        begin: "0s",
        dur: Uo,
        fill: "freeze",
        repeatCount: "indefinite"
      }), h("circle", {
        class: `${e}-base-loading__icon`,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": r,
        "stroke-linecap": "round",
        cx: a,
        cy: a,
        r: n - r / 2,
        "stroke-dasharray": 5.67 * n,
        "stroke-dashoffset": 18.48 * n
      }, h("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${a} ${a};135 ${a} ${a};450 ${a} ${a}`,
        begin: "0s",
        dur: Uo,
        fill: "freeze",
        repeatCount: "indefinite"
      }), h("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * n};${1.42 * n};${5.67 * n}`,
        begin: "0s",
        dur: Uo,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : h("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
});
function Pl(e) {
  return Array.isArray(e) ? e : [e];
}
const wi = {
  STOP: "STOP"
};
function Cu(e, n) {
  const r = n(e);
  e.children !== void 0 && r !== wi.STOP && e.children.forEach((o) => Cu(o, n));
}
function Ng(e, n = {}) {
  const { preserveGroup: r = !1 } = n, o = [], i = r ? (l) => {
    l.isLeaf || (o.push(l.key), a(l.children));
  } : (l) => {
    l.isLeaf || (l.isGroup || o.push(l.key), a(l.children));
  };
  function a(l) {
    l.forEach(i);
  }
  return a(e), o;
}
function Hg(e, n) {
  const { isLeaf: r } = e;
  return r !== void 0 ? r : !n(e);
}
function Wg(e) {
  return e.children;
}
function jg(e) {
  return e.key;
}
function Vg() {
  return !1;
}
function qg(e, n) {
  const { isLeaf: r } = e;
  return !(r === !1 && !Array.isArray(n(e)));
}
function Kg(e) {
  return e.disabled === !0;
}
function Ug(e, n) {
  return e.isLeaf === !1 && !Array.isArray(n(e));
}
function Gg(e, n) {
  if (e.isLeaf === !0) {
    const r = n(e);
    if (Array.isArray(r) && r.length > 0)
      return !0;
  }
  return !1;
}
function Go(e) {
  var n;
  return e == null ? [] : Array.isArray(e) ? e : (n = e.checkedKeys) !== null && n !== void 0 ? n : [];
}
function Xo(e) {
  var n;
  return e == null || Array.isArray(e) ? [] : (n = e.indeterminateKeys) !== null && n !== void 0 ? n : [];
}
function Xg(e, n) {
  const r = new Set(e);
  return n.forEach((o) => {
    r.has(o) || r.add(o);
  }), Array.from(r);
}
function Yg(e, n) {
  const r = new Set(e);
  return n.forEach((o) => {
    r.has(o) && r.delete(o);
  }), Array.from(r);
}
function Zg(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function Jg(e) {
  const n = /* @__PURE__ */ new Map();
  return e.forEach((r, o) => {
    n.set(r.key, o);
  }), (r) => {
    var o;
    return (o = n.get(r)) !== null && o !== void 0 ? o : null;
  };
}
class Qg extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function em(e, n, r, o) {
  return ho(n.concat(e), r, o, !1);
}
function tm(e, n) {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    const i = n.treeNodeMap.get(o);
    if (i !== void 0) {
      let a = i.parent;
      for (; a !== null && !(a.disabled || r.has(a.key)); )
        r.add(a.key), a = a.parent;
    }
  }), r;
}
function nm(e, n, r, o) {
  const i = ho(n, r, o, !1), a = ho(e, r, o, !0), l = tm(e, r), s = [];
  return i.forEach((u) => {
    (a.has(u) || l.has(u)) && s.push(u);
  }), s.forEach((u) => i.delete(u)), i;
}
function Yo(e, n) {
  const { checkedKeys: r, keysToCheck: o, keysToUncheck: i, indeterminateKeys: a, cascade: l, leafOnly: s, checkStrategy: u, allowNotLoaded: d } = e;
  if (!l)
    return o !== void 0 ? {
      checkedKeys: Xg(r, o),
      indeterminateKeys: Array.from(a)
    } : i !== void 0 ? {
      checkedKeys: Yg(r, i),
      indeterminateKeys: Array.from(a)
    } : {
      checkedKeys: Array.from(r),
      indeterminateKeys: Array.from(a)
    };
  const { levelTreeNodeMap: c } = n;
  let f;
  i !== void 0 ? f = nm(i, r, n, d) : o !== void 0 ? f = em(o, r, n, d) : f = ho(r, n, d, !1);
  const p = u === "parent", m = u === "child" || s, v = f, g = /* @__PURE__ */ new Set(), b = Math.max.apply(null, Array.from(c.keys()));
  for (let x = b; x >= 0; x -= 1) {
    const B = x === 0, A = c.get(x);
    for (const y of A) {
      if (y.isLeaf)
        continue;
      const { key: S, shallowLoaded: E } = y;
      if (m && E && y.children.forEach((I) => {
        !I.disabled && !I.isLeaf && I.shallowLoaded && v.has(I.key) && v.delete(I.key);
      }), y.disabled || !E)
        continue;
      let C = !0, $ = !1, M = !0;
      for (const I of y.children) {
        const K = I.key;
        if (!I.disabled) {
          if (M && (M = !1), v.has(K))
            $ = !0;
          else if (g.has(K)) {
            $ = !0, C = !1;
            break;
          } else if (C = !1, $)
            break;
        }
      }
      C && !M ? (p && y.children.forEach((I) => {
        !I.disabled && v.has(I.key) && v.delete(I.key);
      }), v.add(S)) : $ && g.add(S), B && m && v.has(S) && v.delete(S);
    }
  }
  return {
    checkedKeys: Array.from(v),
    indeterminateKeys: Array.from(g)
  };
}
function ho(e, n, r, o) {
  const { treeNodeMap: i, getChildren: a } = n, l = /* @__PURE__ */ new Set(), s = new Set(e);
  return e.forEach((u) => {
    const d = i.get(u);
    d !== void 0 && Cu(d, (c) => {
      if (c.disabled)
        return wi.STOP;
      const { key: f } = c;
      if (!l.has(f) && (l.add(f), s.add(f), Ug(c.rawNode, a))) {
        if (o)
          return wi.STOP;
        if (!r)
          throw new Qg();
      }
    });
  }), s;
}
function rm(e, { includeGroup: n = !1, includeSelf: r = !0 }, o) {
  var i;
  const a = o.treeNodeMap;
  let l = e == null ? null : (i = a.get(e)) !== null && i !== void 0 ? i : null;
  const s = {
    keyPath: [],
    treeNodePath: [],
    treeNode: l
  };
  if (l != null && l.ignored)
    return s.treeNode = null, s;
  for (; l; )
    !l.ignored && (n || !l.isGroup) && s.treeNodePath.push(l), l = l.parent;
  return s.treeNodePath.reverse(), r || s.treeNodePath.pop(), s.keyPath = s.treeNodePath.map((u) => u.key), s;
}
function om(e) {
  if (e.length === 0)
    return null;
  const n = e[0];
  return n.isGroup || n.ignored || n.disabled ? n.getNext() : n;
}
function im(e, n) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return n ? r[(i + 1) % o] : i === r.length - 1 ? null : r[i + 1];
}
function El(e, n, { loop: r = !1, includeDisabled: o = !1 } = {}) {
  const i = n === "prev" ? am : im, a = {
    reverse: n === "prev"
  };
  let l = !1, s = null;
  function u(d) {
    if (d !== null) {
      if (d === e) {
        if (!l)
          l = !0;
        else if (!e.disabled && !e.isGroup) {
          s = e;
          return;
        }
      } else if ((!d.disabled || o) && !d.ignored && !d.isGroup) {
        s = d;
        return;
      }
      if (d.isGroup) {
        const c = la(d, a);
        c !== null ? s = c : u(i(d, r));
      } else {
        const c = i(d, !1);
        if (c !== null)
          u(c);
        else {
          const f = lm(d);
          f != null && f.isGroup ? u(i(f, r)) : r && u(i(d, !0));
        }
      }
    }
  }
  return u(e), s;
}
function am(e, n) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return n ? r[(i - 1 + o) % o] : i === 0 ? null : r[i - 1];
}
function lm(e) {
  return e.parent;
}
function la(e, n = {}) {
  const { reverse: r = !1 } = n, { children: o } = e;
  if (o) {
    const { length: i } = o, a = r ? i - 1 : 0, l = r ? -1 : i, s = r ? -1 : 1;
    for (let u = a; u !== l; u += s) {
      const d = o[u];
      if (!d.disabled && !d.ignored)
        if (d.isGroup) {
          const c = la(d, n);
          if (c !== null)
            return c;
        } else
          return d;
    }
  }
  return null;
}
const sm = {
  getChild() {
    return this.ignored ? null : la(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return El(this, "next", e);
  },
  getPrev(e = {}) {
    return El(this, "prev", e);
  }
};
function um(e, n) {
  const r = n ? new Set(n) : void 0, o = [];
  function i(a) {
    a.forEach((l) => {
      o.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || // normal non-leaf node
      r === void 0 || r.has(l.key)) && i(l.children);
    });
  }
  return i(e), o;
}
function dm(e, n) {
  const r = e.key;
  for (; n; ) {
    if (n.key === r)
      return !0;
    n = n.parent;
  }
  return !1;
}
function yu(e, n, r, o, i, a = null, l = 0) {
  const s = [];
  return e.forEach((u, d) => {
    var c;
    process.env.NODE_ENV !== "production" && Gg(u, i) && console.error("[treemate]: node", u, "is invalid");
    const f = Object.create(o);
    if (f.rawNode = u, f.siblings = s, f.level = l, f.index = d, f.isFirstChild = d === 0, f.isLastChild = d + 1 === e.length, f.parent = a, !f.ignored) {
      const p = i(u);
      Array.isArray(p) && (f.children = yu(p, n, r, o, i, f, l + 1));
    }
    s.push(f), n.set(f.key, f), r.has(l) || r.set(l, []), (c = r.get(l)) === null || c === void 0 || c.push(f);
  }), s;
}
function wu(e, n = {}) {
  var r;
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), { getDisabled: a = Kg, getIgnored: l = Vg, getIsGroup: s = Zg, getKey: u = jg } = n, d = (r = n.getChildren) !== null && r !== void 0 ? r : Wg, c = n.ignoreEmptyChildren ? (y) => {
    const S = d(y);
    return Array.isArray(S) ? S.length ? S : null : S;
  } : d, f = Object.assign({
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
      return Hg(this.rawNode, c);
    },
    get shallowLoaded() {
      return qg(this.rawNode, c);
    },
    get ignored() {
      return l(this.rawNode);
    },
    contains(y) {
      return dm(this, y);
    }
  }, sm), p = yu(e, o, i, f, c);
  function m(y) {
    if (y == null)
      return null;
    const S = o.get(y);
    return S && !S.isGroup && !S.ignored ? S : null;
  }
  function v(y) {
    if (y == null)
      return null;
    const S = o.get(y);
    return S && !S.ignored ? S : null;
  }
  function g(y, S) {
    const E = v(y);
    return E ? E.getPrev(S) : null;
  }
  function b(y, S) {
    const E = v(y);
    return E ? E.getNext(S) : null;
  }
  function x(y) {
    const S = v(y);
    return S ? S.getParent() : null;
  }
  function B(y) {
    const S = v(y);
    return S ? S.getChild() : null;
  }
  const A = {
    treeNodes: p,
    treeNodeMap: o,
    levelTreeNodeMap: i,
    maxLevel: Math.max(...i.keys()),
    getChildren: c,
    getFlattenedNodes(y) {
      return um(p, y);
    },
    getNode: m,
    getPrev: g,
    getNext: b,
    getParent: x,
    getChild: B,
    getFirstAvailableNode() {
      return om(p);
    },
    getPath(y, S = {}) {
      return rm(y, S, A);
    },
    getCheckedKeys(y, S = {}) {
      const { cascade: E = !0, leafOnly: C = !1, checkStrategy: $ = "all", allowNotLoaded: M = !1 } = S;
      return Yo({
        checkedKeys: Go(y),
        indeterminateKeys: Xo(y),
        cascade: E,
        leafOnly: C,
        checkStrategy: $,
        allowNotLoaded: M
      }, A);
    },
    check(y, S, E = {}) {
      const { cascade: C = !0, leafOnly: $ = !1, checkStrategy: M = "all", allowNotLoaded: I = !1 } = E;
      return Yo({
        checkedKeys: Go(S),
        indeterminateKeys: Xo(S),
        keysToCheck: y == null ? [] : Pl(y),
        cascade: C,
        leafOnly: $,
        checkStrategy: M,
        allowNotLoaded: I
      }, A);
    },
    uncheck(y, S, E = {}) {
      const { cascade: C = !0, leafOnly: $ = !1, checkStrategy: M = "all", allowNotLoaded: I = !1 } = E;
      return Yo({
        checkedKeys: Go(S),
        indeterminateKeys: Xo(S),
        keysToUncheck: y == null ? [] : Pl(y),
        cascade: C,
        leafOnly: $,
        checkStrategy: M,
        allowNotLoaded: I
      }, A);
    },
    getNonLeafKeys(y = {}) {
      return Ng(p, y);
    }
  };
  return A;
}
const ue = {
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
}, cm = bn(ue.neutralBase), Bu = bn(ue.neutralInvertBase), fm = `rgba(${Bu.slice(0, 3).join(", ")}, `;
function kl(e) {
  return `${fm + String(e)})`;
}
function Ze(e) {
  const n = Array.from(Bu);
  return n[3] = Number(e), ut(cm, n);
}
const Ve = Object.assign(Object.assign({
  name: "common"
}, sn), {
  baseColor: ue.neutralBase,
  // primary color
  primaryColor: ue.primaryDefault,
  primaryColorHover: ue.primaryHover,
  primaryColorPressed: ue.primaryActive,
  primaryColorSuppl: ue.primarySuppl,
  // info color
  infoColor: ue.infoDefault,
  infoColorHover: ue.infoHover,
  infoColorPressed: ue.infoActive,
  infoColorSuppl: ue.infoSuppl,
  // success color
  successColor: ue.successDefault,
  successColorHover: ue.successHover,
  successColorPressed: ue.successActive,
  successColorSuppl: ue.successSuppl,
  // warning color
  warningColor: ue.warningDefault,
  warningColorHover: ue.warningHover,
  warningColorPressed: ue.warningActive,
  warningColorSuppl: ue.warningSuppl,
  // error color
  errorColor: ue.errorDefault,
  errorColorHover: ue.errorHover,
  errorColorPressed: ue.errorActive,
  errorColorSuppl: ue.errorSuppl,
  // text color
  textColorBase: ue.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: Ze(ue.alpha4),
  placeholderColor: Ze(ue.alpha4),
  placeholderColorDisabled: Ze(ue.alpha5),
  iconColor: Ze(ue.alpha4),
  iconColorHover: Ir(Ze(ue.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: Ir(Ze(ue.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: Ze(ue.alpha5),
  opacity1: ue.alpha1,
  opacity2: ue.alpha2,
  opacity3: ue.alpha3,
  opacity4: ue.alpha4,
  opacity5: ue.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: Ze(Number(ue.alphaClose)),
  closeIconColorHover: Ze(Number(ue.alphaClose)),
  closeIconColorPressed: Ze(Number(ue.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: Ze(ue.alpha4),
  clearColorHover: Ir(Ze(ue.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: Ir(Ze(ue.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: kl(ue.alphaScrollbar),
  scrollbarColorHover: kl(ue.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: Ze(ue.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: ue.neutralPopover,
  tableColor: ue.neutralCard,
  cardColor: ue.neutralCard,
  modalColor: ue.neutralModal,
  bodyColor: ue.neutralBody,
  tagColor: "#eee",
  avatarColor: Ze(ue.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: Ze(ue.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: ue.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), hm = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function vm(e) {
  const {
    textColorDisabled: n,
    iconColor: r,
    textColor2: o,
    fontSizeTiny: i,
    fontSizeSmall: a,
    fontSizeMedium: l,
    fontSizeLarge: s,
    fontSizeHuge: u
  } = e;
  return Object.assign(Object.assign({}, hm), {
    fontSizeTiny: i,
    fontSizeSmall: a,
    fontSizeMedium: l,
    fontSizeLarge: s,
    fontSizeHuge: u,
    textColor: n,
    iconColor: r,
    extraTextColor: o
  });
}
const Su = {
  name: "Empty",
  common: Ve,
  self: vm
}, pm = O("empty", `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [k("icon", `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [z("+", [k("description", `
 margin-top: 8px;
 `)])]), k("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), k("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]), xm = Object.assign(Object.assign({}, ce.props), {
  description: String,
  showDescription: {
    type: Boolean,
    default: !0
  },
  showIcon: {
    type: Boolean,
    default: !0
  },
  size: {
    type: String,
    default: "medium"
  },
  renderIcon: Function
}), Fu = Q({
  name: "Empty",
  props: xm,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r,
      mergedComponentPropsRef: o
    } = Pe(e), i = ce("Empty", "-empty", pm, Su, e, n), {
      localeRef: a
    } = Sr("Empty"), l = R(() => {
      var c, f, p;
      return (c = e.description) !== null && c !== void 0 ? c : (p = (f = o == null ? void 0 : o.value) === null || f === void 0 ? void 0 : f.Empty) === null || p === void 0 ? void 0 : p.description;
    }), s = R(() => {
      var c, f;
      return ((f = (c = o == null ? void 0 : o.value) === null || c === void 0 ? void 0 : c.Empty) === null || f === void 0 ? void 0 : f.renderIcon) || (() => h(Pg, null));
    }), u = R(() => {
      const {
        size: c
      } = e, {
        common: {
          cubicBezierEaseInOut: f
        },
        self: {
          [Y("iconSize", c)]: p,
          [Y("fontSize", c)]: m,
          textColor: v,
          iconColor: g,
          extraTextColor: b
        }
      } = i.value;
      return {
        "--n-icon-size": p,
        "--n-font-size": m,
        "--n-bezier": f,
        "--n-text-color": v,
        "--n-icon-color": g,
        "--n-extra-text-color": b
      };
    }), d = r ? je("empty", R(() => {
      let c = "";
      const {
        size: f
      } = e;
      return c += f[0], c;
    }), u, e) : void 0;
    return {
      mergedClsPrefix: n,
      mergedRenderIcon: s,
      localizedDescription: R(() => l.value || a.value.description),
      cssVars: r ? void 0 : u,
      themeClass: d == null ? void 0 : d.themeClass,
      onRender: d == null ? void 0 : d.onRender
    };
  },
  render() {
    const {
      $slots: e,
      mergedClsPrefix: n,
      onRender: r
    } = this;
    return r == null || r(), h("div", {
      class: [`${n}-empty`, this.themeClass],
      style: this.cssVars
    }, this.showIcon ? h("div", {
      class: `${n}-empty__icon`
    }, e.icon ? e.icon() : h(zt, {
      clsPrefix: n
    }, {
      default: this.mergedRenderIcon
    })) : null, this.showDescription ? h("div", {
      class: `${n}-empty__description`
    }, e.default ? e.default() : this.localizedDescription) : null, e.extra ? h("div", {
      class: `${n}-empty__extra`
    }, e.extra()) : null);
  }
}), gm = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function mm(e) {
  const {
    scrollbarColor: n,
    scrollbarColorHover: r,
    scrollbarHeight: o,
    scrollbarWidth: i,
    scrollbarBorderRadius: a
  } = e;
  return Object.assign(Object.assign({}, gm), {
    height: o,
    width: i,
    borderRadius: a,
    color: n,
    colorHover: r
  });
}
const sa = {
  name: "Scrollbar",
  common: Ve,
  self: mm
}, {
  cubicBezierEaseInOut: zl
} = sn;
function Bo({
  name: e = "fade-in",
  enterDuration: n = "0.2s",
  leaveDuration: r = "0.2s",
  enterCubicBezier: o = zl,
  leaveCubicBezier: i = zl
} = {}) {
  return [z(`&.${e}-transition-enter-active`, {
    transition: `all ${n} ${o}!important`
  }), z(`&.${e}-transition-leave-active`, {
    transition: `all ${r} ${i}!important`
  }), z(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), z(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
    opacity: 1
  })];
}
const bm = O("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [z(">", [O("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [z("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), z(">", [
  // We can't set overflow hidden since it affects positioning.
  O("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), z(">, +", [O("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [V("horizontal", `
 height: var(--n-scrollbar-height);
 `, [z(">", [k("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), V("horizontal--top", `
 inset: var(--n-scrollbar-rail-inset-horizontal-top); 
 `), V("horizontal--bottom", `
 inset: var(--n-scrollbar-rail-inset-horizontal-bottom); 
 `), V("vertical", `
 width: var(--n-scrollbar-width);
 `, [z(">", [k("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), V("vertical--left", `
 inset: var(--n-scrollbar-rail-inset-vertical-left); 
 `), V("vertical--right", `
 inset: var(--n-scrollbar-rail-inset-vertical-right); 
 `), V("disabled", [z(">", [k("scrollbar", "pointer-events: none;")])]), z(">", [k("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [Bo(), z("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Cm = Object.assign(Object.assign({}, ce.props), {
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
}), So = Q({
  name: "Scrollbar",
  props: Cm,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Pe(e), i = wt("Scrollbar", o, n), a = L(null), l = L(null), s = L(null), u = L(null), d = L(null), c = L(null), f = L(null), p = L(null), m = L(null), v = L(null), g = L(null), b = L(0), x = L(0), B = L(!1), A = L(!1);
    let y = !1, S = !1, E, C, $ = 0, M = 0, I = 0, K = 0;
    const H = Hc(), t = ce("Scrollbar", "-scrollbar", bm, sa, e, n), F = R(() => {
      const {
        value: w
      } = p, {
        value: N
      } = c, {
        value: U
      } = v;
      return w === null || N === null || U === null ? 0 : Math.min(w, U * w / N + vr(t.value.self.width) * 1.5);
    }), D = R(() => `${F.value}px`), _ = R(() => {
      const {
        value: w
      } = m, {
        value: N
      } = f, {
        value: U
      } = g;
      return w === null || N === null || U === null ? 0 : U * w / N + vr(t.value.self.height) * 1.5;
    }), T = R(() => `${_.value}px`), j = R(() => {
      const {
        value: w
      } = p, {
        value: N
      } = b, {
        value: U
      } = c, {
        value: te
      } = v;
      if (w === null || U === null || te === null)
        return 0;
      {
        const oe = U - w;
        return oe ? N / oe * (te - F.value) : 0;
      }
    }), J = R(() => `${j.value}px`), Z = R(() => {
      const {
        value: w
      } = m, {
        value: N
      } = x, {
        value: U
      } = f, {
        value: te
      } = g;
      if (w === null || U === null || te === null)
        return 0;
      {
        const oe = U - w;
        return oe ? N / oe * (te - _.value) : 0;
      }
    }), ae = R(() => `${Z.value}px`), W = R(() => {
      const {
        value: w
      } = p, {
        value: N
      } = c;
      return w !== null && N !== null && N > w;
    }), X = R(() => {
      const {
        value: w
      } = m, {
        value: N
      } = f;
      return w !== null && N !== null && N > w;
    }), ne = R(() => {
      const {
        trigger: w
      } = e;
      return w === "none" || B.value;
    }), Be = R(() => {
      const {
        trigger: w
      } = e;
      return w === "none" || A.value;
    }), re = R(() => {
      const {
        container: w
      } = e;
      return w ? w() : l.value;
    }), ve = R(() => {
      const {
        content: w
      } = e;
      return w ? w() : s.value;
    }), Me = (w, N) => {
      if (!e.scrollable) return;
      if (typeof w == "number") {
        ye(w, N ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: U,
        top: te,
        index: oe,
        elSize: de,
        position: fe,
        behavior: pe,
        el: ke,
        debounce: vt = !0
      } = w;
      (U !== void 0 || te !== void 0) && ye(U ?? 0, te ?? 0, 0, !1, pe), ke !== void 0 ? ye(0, ke.offsetTop, ke.offsetHeight, vt, pe) : oe !== void 0 && de !== void 0 ? ye(0, oe * de, de, vt, pe) : fe === "bottom" ? ye(0, Number.MAX_SAFE_INTEGER, 0, !1, pe) : fe === "top" && ye(0, 0, 0, !1, pe);
    }, ie = If(() => {
      e.container || Me({
        top: b.value,
        left: x.value
      });
    }), Ne = () => {
      ie.isDeactivated || ee();
    }, Te = (w) => {
      if (ie.isDeactivated) return;
      const {
        onResize: N
      } = e;
      N && N(w), ee();
    }, me = (w, N) => {
      if (!e.scrollable) return;
      const {
        value: U
      } = re;
      U && (typeof w == "object" ? U.scrollBy(w) : U.scrollBy(w, N || 0));
    };
    function ye(w, N, U, te, oe) {
      const {
        value: de
      } = re;
      if (de) {
        if (te) {
          const {
            scrollTop: fe,
            offsetHeight: pe
          } = de;
          if (N > fe) {
            N + U <= fe + pe || de.scrollTo({
              left: w,
              top: N + U - pe,
              behavior: oe
            });
            return;
          }
        }
        de.scrollTo({
          left: w,
          top: N,
          behavior: oe
        });
      }
    }
    function be() {
      mt(), Se(), ee();
    }
    function Ye() {
      tt();
    }
    function tt() {
      lt(), it();
    }
    function lt() {
      C !== void 0 && window.clearTimeout(C), C = window.setTimeout(() => {
        A.value = !1;
      }, e.duration);
    }
    function it() {
      E !== void 0 && window.clearTimeout(E), E = window.setTimeout(() => {
        B.value = !1;
      }, e.duration);
    }
    function mt() {
      E !== void 0 && window.clearTimeout(E), B.value = !0;
    }
    function Se() {
      C !== void 0 && window.clearTimeout(C), A.value = !0;
    }
    function Ee(w) {
      const {
        onScroll: N
      } = e;
      N && N(w), Xe();
    }
    function Xe() {
      const {
        value: w
      } = re;
      w && (b.value = w.scrollTop, x.value = w.scrollLeft * (i != null && i.value ? -1 : 1));
    }
    function qe() {
      const {
        value: w
      } = ve;
      w && (c.value = w.offsetHeight, f.value = w.offsetWidth);
      const {
        value: N
      } = re;
      N && (p.value = N.offsetHeight, m.value = N.offsetWidth);
      const {
        value: U
      } = d, {
        value: te
      } = u;
      U && (g.value = U.offsetWidth), te && (v.value = te.offsetHeight);
    }
    function G() {
      const {
        value: w
      } = re;
      w && (b.value = w.scrollTop, x.value = w.scrollLeft * (i != null && i.value ? -1 : 1), p.value = w.offsetHeight, m.value = w.offsetWidth, c.value = w.scrollHeight, f.value = w.scrollWidth);
      const {
        value: N
      } = d, {
        value: U
      } = u;
      N && (g.value = N.offsetWidth), U && (v.value = U.offsetHeight);
    }
    function ee() {
      e.scrollable && (e.useUnifiedContainer ? G() : (qe(), Xe()));
    }
    function Re(w) {
      var N;
      return !(!((N = a.value) === null || N === void 0) && N.contains(Kn(w)));
    }
    function un(w) {
      w.preventDefault(), w.stopPropagation(), S = !0, Le("mousemove", window, Rt, !0), Le("mouseup", window, Ot, !0), M = x.value, I = i != null && i.value ? window.innerWidth - w.clientX : w.clientX;
    }
    function Rt(w) {
      if (!S) return;
      E !== void 0 && window.clearTimeout(E), C !== void 0 && window.clearTimeout(C);
      const {
        value: N
      } = m, {
        value: U
      } = f, {
        value: te
      } = _;
      if (N === null || U === null) return;
      const de = (i != null && i.value ? window.innerWidth - w.clientX - I : w.clientX - I) * (U - N) / (N - te), fe = U - N;
      let pe = M + de;
      pe = Math.min(fe, pe), pe = Math.max(pe, 0);
      const {
        value: ke
      } = re;
      if (ke) {
        ke.scrollLeft = pe * (i != null && i.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: vt
        } = e;
        vt && vt(pe);
      }
    }
    function Ot(w) {
      w.preventDefault(), w.stopPropagation(), De("mousemove", window, Rt, !0), De("mouseup", window, Ot, !0), S = !1, ee(), Re(w) && tt();
    }
    function Xt(w) {
      w.preventDefault(), w.stopPropagation(), y = !0, Le("mousemove", window, Bt, !0), Le("mouseup", window, Mt, !0), $ = b.value, K = w.clientY;
    }
    function Bt(w) {
      if (!y) return;
      E !== void 0 && window.clearTimeout(E), C !== void 0 && window.clearTimeout(C);
      const {
        value: N
      } = p, {
        value: U
      } = c, {
        value: te
      } = F;
      if (N === null || U === null) return;
      const de = (w.clientY - K) * (U - N) / (N - te), fe = U - N;
      let pe = $ + de;
      pe = Math.min(fe, pe), pe = Math.max(pe, 0);
      const {
        value: ke
      } = re;
      ke && (ke.scrollTop = pe);
    }
    function Mt(w) {
      w.preventDefault(), w.stopPropagation(), De("mousemove", window, Bt, !0), De("mouseup", window, Mt, !0), y = !1, ee(), Re(w) && tt();
    }
    rt(() => {
      const {
        value: w
      } = X, {
        value: N
      } = W, {
        value: U
      } = n, {
        value: te
      } = d, {
        value: oe
      } = u;
      te && (w ? te.classList.remove(`${U}-scrollbar-rail--disabled`) : te.classList.add(`${U}-scrollbar-rail--disabled`)), oe && (N ? oe.classList.remove(`${U}-scrollbar-rail--disabled`) : oe.classList.add(`${U}-scrollbar-rail--disabled`));
    }), ot(() => {
      e.container || ee();
    }), Ge(() => {
      E !== void 0 && window.clearTimeout(E), C !== void 0 && window.clearTimeout(C), De("mousemove", window, Bt, !0), De("mouseup", window, Mt, !0);
    });
    const Yt = R(() => {
      const {
        common: {
          cubicBezierEaseInOut: w
        },
        self: {
          color: N,
          colorHover: U,
          height: te,
          width: oe,
          borderRadius: de,
          railInsetHorizontalTop: fe,
          railInsetHorizontalBottom: pe,
          railInsetVerticalRight: ke,
          railInsetVerticalLeft: vt,
          railColor: Dn
        }
      } = t.value;
      return {
        "--n-scrollbar-bezier": w,
        "--n-scrollbar-color": N,
        "--n-scrollbar-color-hover": U,
        "--n-scrollbar-border-radius": de,
        "--n-scrollbar-width": oe,
        "--n-scrollbar-height": te,
        "--n-scrollbar-rail-inset-horizontal-top": fe,
        "--n-scrollbar-rail-inset-horizontal-bottom": pe,
        "--n-scrollbar-rail-inset-vertical-right": i != null && i.value ? wa(ke) : ke,
        "--n-scrollbar-rail-inset-vertical-left": i != null && i.value ? wa(vt) : vt,
        "--n-scrollbar-rail-color": Dn
      };
    }), st = r ? je("scrollbar", void 0, Yt, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Me,
      scrollBy: me,
      sync: ee,
      syncUnifiedContainer: G,
      handleMouseEnterWrapper: be,
      handleMouseLeaveWrapper: Ye
    }), {
      mergedClsPrefix: n,
      rtlEnabled: i,
      containerScrollTop: b,
      wrapperRef: a,
      containerRef: l,
      contentRef: s,
      yRailRef: u,
      xRailRef: d,
      needYBar: W,
      needXBar: X,
      yBarSizePx: D,
      xBarSizePx: T,
      yBarTopPx: J,
      xBarLeftPx: ae,
      isShowXBar: ne,
      isShowYBar: Be,
      isIos: H,
      handleScroll: Ee,
      handleContentResize: Ne,
      handleContainerResize: Te,
      handleYScrollMouseDown: Xt,
      handleXScrollMouseDown: un,
      cssVars: r ? void 0 : Yt,
      themeClass: st == null ? void 0 : st.themeClass,
      onRender: st == null ? void 0 : st.onRender
    });
  },
  render() {
    var e;
    const {
      $slots: n,
      mergedClsPrefix: r,
      triggerDisplayManually: o,
      rtlEnabled: i,
      internalHoistYRail: a,
      yPlacement: l,
      xPlacement: s,
      xScrollable: u
    } = this;
    if (!this.scrollable) return (e = n.default) === null || e === void 0 ? void 0 : e.call(n);
    const d = this.trigger === "none", c = (m, v) => h("div", {
      ref: "yRailRef",
      class: [`${r}-scrollbar-rail`, `${r}-scrollbar-rail--vertical`, `${r}-scrollbar-rail--vertical--${l}`, m],
      "data-scrollbar-rail": !0,
      style: [v || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, h(d ? li : ft, d ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? h("div", {
        class: `${r}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), f = () => {
      var m, v;
      return (m = this.onRender) === null || m === void 0 || m.call(this), h("div", an(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${r}-scrollbar`, this.themeClass, i && `${r}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: o ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: o ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (v = n.default) === null || v === void 0 ? void 0 : v.call(n) : h("div", {
        role: "none",
        ref: "containerRef",
        class: [`${r}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, h(Cr, {
        onResize: this.handleContentResize
      }, {
        default: () => h("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${r}-scrollbar-content`, this.contentClass]
        }, n)
      })), a ? null : c(void 0, void 0), u && h("div", {
        ref: "xRailRef",
        class: [`${r}-scrollbar-rail`, `${r}-scrollbar-rail--horizontal`, `${r}-scrollbar-rail--horizontal--${s}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, h(d ? li : ft, d ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? h("div", {
          class: `${r}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: i ? this.xBarLeftPx : void 0,
            left: i ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, p = this.container ? f() : h(Cr, {
      onResize: this.handleContainerResize
    }, {
      default: f
    });
    return a ? h(ht, null, p, c(this.themeClass, this.cssVars)) : p;
  }
}), Au = So, ym = {
  height: "calc(var(--n-option-height) * 7.6)",
  paddingTiny: "4px 0",
  paddingSmall: "4px 0",
  paddingMedium: "4px 0",
  paddingLarge: "4px 0",
  paddingHuge: "4px 0",
  optionPaddingTiny: "0 12px",
  optionPaddingSmall: "0 12px",
  optionPaddingMedium: "0 12px",
  optionPaddingLarge: "0 12px",
  optionPaddingHuge: "0 12px",
  loadingSize: "18px"
};
function wm(e) {
  const {
    borderRadius: n,
    popoverColor: r,
    textColor3: o,
    dividerColor: i,
    textColor2: a,
    primaryColorPressed: l,
    textColorDisabled: s,
    primaryColor: u,
    opacityDisabled: d,
    hoverColor: c,
    fontSizeTiny: f,
    fontSizeSmall: p,
    fontSizeMedium: m,
    fontSizeLarge: v,
    fontSizeHuge: g,
    heightTiny: b,
    heightSmall: x,
    heightMedium: B,
    heightLarge: A,
    heightHuge: y
  } = e;
  return Object.assign(Object.assign({}, ym), {
    optionFontSizeTiny: f,
    optionFontSizeSmall: p,
    optionFontSizeMedium: m,
    optionFontSizeLarge: v,
    optionFontSizeHuge: g,
    optionHeightTiny: b,
    optionHeightSmall: x,
    optionHeightMedium: B,
    optionHeightLarge: A,
    optionHeightHuge: y,
    borderRadius: n,
    color: r,
    groupHeaderTextColor: o,
    actionDividerColor: i,
    optionTextColor: a,
    optionTextColorPressed: l,
    optionTextColorDisabled: s,
    optionTextColorActive: u,
    optionOpacityDisabled: d,
    optionCheckColor: u,
    optionColorPending: c,
    optionColorActive: "rgba(0, 0, 0, 0)",
    optionColorActivePending: c,
    actionTextColor: a,
    loadingColor: u
  });
}
const $u = {
  name: "InternalSelectMenu",
  common: Ve,
  peers: {
    Scrollbar: sa,
    Empty: Su
  },
  self: wm
};
function Bm(e, n) {
  return h(ft, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => e ? h(zt, {
      clsPrefix: n,
      class: `${n}-base-select-option__check`
    }, {
      default: () => h(Sg)
    }) : null
  });
}
const Tl = Q({
  name: "NBaseSelectOption",
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
  setup(e) {
    const {
      valueRef: n,
      pendingTmNodeRef: r,
      multipleRef: o,
      valueSetRef: i,
      renderLabelRef: a,
      renderOptionRef: l,
      labelFieldRef: s,
      valueFieldRef: u,
      showCheckmarkRef: d,
      nodePropsRef: c,
      handleOptionClick: f,
      handleOptionMouseEnter: p
    } = xe(Ii), m = We(() => {
      const {
        value: x
      } = r;
      return x ? e.tmNode.key === x.key : !1;
    });
    function v(x) {
      const {
        tmNode: B
      } = e;
      B.disabled || f(x, B);
    }
    function g(x) {
      const {
        tmNode: B
      } = e;
      B.disabled || p(x, B);
    }
    function b(x) {
      const {
        tmNode: B
      } = e, {
        value: A
      } = m;
      B.disabled || A || p(x, B);
    }
    return {
      multiple: o,
      isGrouped: We(() => {
        const {
          tmNode: x
        } = e, {
          parent: B
        } = x;
        return B && B.rawNode.type === "group";
      }),
      showCheckmark: d,
      nodeProps: c,
      isPending: m,
      isSelected: We(() => {
        const {
          value: x
        } = n, {
          value: B
        } = o;
        if (x === null) return !1;
        const A = e.tmNode.rawNode[u.value];
        if (B) {
          const {
            value: y
          } = i;
          return y.has(A);
        } else
          return x === A;
      }),
      labelField: s,
      renderLabel: a,
      renderOption: l,
      handleMouseMove: b,
      handleMouseEnter: g,
      handleClick: v
    };
  },
  render() {
    const {
      clsPrefix: e,
      tmNode: {
        rawNode: n
      },
      isSelected: r,
      isPending: o,
      isGrouped: i,
      showCheckmark: a,
      nodeProps: l,
      renderOption: s,
      renderLabel: u,
      handleClick: d,
      handleMouseEnter: c,
      handleMouseMove: f
    } = this, p = Bm(r, e), m = u ? [u(n, r), a && p] : [Qe(n[this.labelField], n, r), a && p], v = l == null ? void 0 : l(n), g = h("div", Object.assign({}, v, {
      class: [`${e}-base-select-option`, n.class, v == null ? void 0 : v.class, {
        [`${e}-base-select-option--disabled`]: n.disabled,
        [`${e}-base-select-option--selected`]: r,
        [`${e}-base-select-option--grouped`]: i,
        [`${e}-base-select-option--pending`]: o,
        [`${e}-base-select-option--show-checkmark`]: a
      }],
      style: [(v == null ? void 0 : v.style) || "", n.style || ""],
      onClick: Mo([d, v == null ? void 0 : v.onClick]),
      onMouseenter: Mo([c, v == null ? void 0 : v.onMouseenter]),
      onMousemove: Mo([f, v == null ? void 0 : v.onMousemove])
    }), h("div", {
      class: `${e}-base-select-option__content`
    }, m));
    return n.render ? n.render({
      node: g,
      option: n,
      selected: r
    }) : s ? s({
      node: g,
      option: n,
      selected: r
    }) : g;
  }
}), Rl = Q({
  name: "NBaseSelectGroupHeader",
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
      renderLabelRef: e,
      renderOptionRef: n,
      labelFieldRef: r,
      nodePropsRef: o
    } = xe(Ii);
    return {
      labelField: r,
      nodeProps: o,
      renderLabel: e,
      renderOption: n
    };
  },
  render() {
    const {
      clsPrefix: e,
      renderLabel: n,
      renderOption: r,
      nodeProps: o,
      tmNode: {
        rawNode: i
      }
    } = this, a = o == null ? void 0 : o(i), l = n ? n(i, !1) : Qe(i[this.labelField], i, !1), s = h("div", Object.assign({}, a, {
      class: [`${e}-base-select-group-header`, a == null ? void 0 : a.class]
    }), l);
    return i.render ? i.render({
      node: s,
      option: i
    }) : r ? r({
      node: s,
      option: i,
      selected: !1
    }) : s;
  }
}), {
  cubicBezierEaseIn: Ol,
  cubicBezierEaseOut: Ml
} = sn;
function Fo({
  transformOrigin: e = "inherit",
  duration: n = ".2s",
  enterScale: r = ".9",
  originalTransform: o = "",
  originalTransition: i = ""
} = {}) {
  return [z("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${Ol}, transform ${n} ${Ol} ${i && `,${i}`}`
  }), z("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${Ml}, transform ${n} ${Ml} ${i && `,${i}`}`
  }), z("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${o} scale(${r})`
  }), z("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${o} scale(1)`
  })];
}
const Sm = O("base-select-menu", `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [O("scrollbar", `
 max-height: var(--n-height);
 `), O("virtual-list", `
 max-height: var(--n-height);
 `), O("base-select-option", `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [k("content", `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), O("base-select-group-header", `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), O("base-select-menu-option-wrapper", `
 position: relative;
 width: 100%;
 `), k("loading, empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), k("loading", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), k("header", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), k("action", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), O("base-select-group-header", `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), O("base-select-option", `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [V("show-checkmark", `
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `), z("&::before", `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), z("&:active", `
 color: var(--n-option-text-color-pressed);
 `), V("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), V("pending", [z("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), V("selected", `
 color: var(--n-option-text-color-active);
 `, [z("&::before", `
 background-color: var(--n-option-color-active);
 `), V("pending", [z("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), V("disabled", `
 cursor: not-allowed;
 `, [He("selected", `
 color: var(--n-option-text-color-disabled);
 `), V("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), k("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [Fo({
  enterScale: "0.5"
})])])]), Fm = Q({
  name: "InternalSelectMenu",
  props: Object.assign(Object.assign({}, ce.props), {
    clsPrefix: {
      type: String,
      required: !0
    },
    scrollable: {
      type: Boolean,
      default: !0
    },
    treeMate: {
      type: Object,
      required: !0
    },
    multiple: Boolean,
    size: {
      type: String,
      default: "medium"
    },
    value: {
      type: [String, Number, Array],
      default: null
    },
    autoPending: Boolean,
    virtualScroll: {
      type: Boolean,
      default: !0
    },
    // show is used to toggle pending state initialization
    show: {
      type: Boolean,
      default: !0
    },
    labelField: {
      type: String,
      default: "label"
    },
    valueField: {
      type: String,
      default: "value"
    },
    loading: Boolean,
    focusable: Boolean,
    renderLabel: Function,
    renderOption: Function,
    nodeProps: Function,
    showCheckmark: {
      type: Boolean,
      default: !0
    },
    onMousedown: Function,
    onScroll: Function,
    onFocus: Function,
    onBlur: Function,
    onKeyup: Function,
    onKeydown: Function,
    onTabOut: Function,
    onMouseenter: Function,
    onMouseleave: Function,
    onResize: Function,
    resetMenuOnOptionsChange: {
      type: Boolean,
      default: !0
    },
    inlineThemeDisabled: Boolean,
    // deprecated
    onToggle: Function
  }),
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      mergedRtlRef: r
    } = Pe(e), o = wt("InternalSelectMenu", r, n), i = ce("InternalSelectMenu", "-internal-select-menu", Sm, $u, e, le(e, "clsPrefix")), a = L(null), l = L(null), s = L(null), u = R(() => e.treeMate.getFlattenedNodes()), d = R(() => Jg(u.value)), c = L(null);
    function f() {
      const {
        treeMate: W
      } = e;
      let X = null;
      const {
        value: ne
      } = e;
      ne === null ? X = W.getFirstAvailableNode() : (e.multiple ? X = W.getNode((ne || [])[(ne || []).length - 1]) : X = W.getNode(ne), (!X || X.disabled) && (X = W.getFirstAvailableNode())), F(X || null);
    }
    function p() {
      const {
        value: W
      } = c;
      W && !e.treeMate.getNode(W.key) && (c.value = null);
    }
    let m;
    ze(() => e.show, (W) => {
      W ? m = ze(() => e.treeMate, () => {
        e.resetMenuOnOptionsChange ? (e.autoPending ? f() : p(), et(D)) : p();
      }, {
        immediate: !0
      }) : m == null || m();
    }, {
      immediate: !0
    }), Ge(() => {
      m == null || m();
    });
    const v = R(() => vr(i.value.self[Y("optionHeight", e.size)])), g = R(() => Dt(i.value.self[Y("padding", e.size)])), b = R(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), x = R(() => {
      const W = u.value;
      return W && W.length === 0;
    });
    function B(W) {
      const {
        onToggle: X
      } = e;
      X && X(W);
    }
    function A(W) {
      const {
        onScroll: X
      } = e;
      X && X(W);
    }
    function y(W) {
      var X;
      (X = s.value) === null || X === void 0 || X.sync(), A(W);
    }
    function S() {
      var W;
      (W = s.value) === null || W === void 0 || W.sync();
    }
    function E() {
      const {
        value: W
      } = c;
      return W || null;
    }
    function C(W, X) {
      X.disabled || F(X, !1);
    }
    function $(W, X) {
      X.disabled || B(X);
    }
    function M(W) {
      var X;
      Wt(W, "action") || (X = e.onKeyup) === null || X === void 0 || X.call(e, W);
    }
    function I(W) {
      var X;
      Wt(W, "action") || (X = e.onKeydown) === null || X === void 0 || X.call(e, W);
    }
    function K(W) {
      var X;
      (X = e.onMousedown) === null || X === void 0 || X.call(e, W), !e.focusable && W.preventDefault();
    }
    function H() {
      const {
        value: W
      } = c;
      W && F(W.getNext({
        loop: !0
      }), !0);
    }
    function t() {
      const {
        value: W
      } = c;
      W && F(W.getPrev({
        loop: !0
      }), !0);
    }
    function F(W, X = !1) {
      c.value = W, X && D();
    }
    function D() {
      var W, X;
      const ne = c.value;
      if (!ne) return;
      const Be = d.value(ne.key);
      Be !== null && (e.virtualScroll ? (W = l.value) === null || W === void 0 || W.scrollTo({
        index: Be
      }) : (X = s.value) === null || X === void 0 || X.scrollTo({
        index: Be,
        elSize: v.value
      }));
    }
    function _(W) {
      var X, ne;
      !((X = a.value) === null || X === void 0) && X.contains(W.target) && ((ne = e.onFocus) === null || ne === void 0 || ne.call(e, W));
    }
    function T(W) {
      var X, ne;
      !((X = a.value) === null || X === void 0) && X.contains(W.relatedTarget) || (ne = e.onBlur) === null || ne === void 0 || ne.call(e, W);
    }
    we(Ii, {
      handleOptionMouseEnter: C,
      handleOptionClick: $,
      valueSetRef: b,
      pendingTmNodeRef: c,
      nodePropsRef: le(e, "nodeProps"),
      showCheckmarkRef: le(e, "showCheckmark"),
      multipleRef: le(e, "multiple"),
      valueRef: le(e, "value"),
      renderLabelRef: le(e, "renderLabel"),
      renderOptionRef: le(e, "renderOption"),
      labelFieldRef: le(e, "labelField"),
      valueFieldRef: le(e, "valueField")
    }), we(ys, a), ot(() => {
      const {
        value: W
      } = s;
      W && W.sync();
    });
    const j = R(() => {
      const {
        size: W
      } = e, {
        common: {
          cubicBezierEaseInOut: X
        },
        self: {
          height: ne,
          borderRadius: Be,
          color: re,
          groupHeaderTextColor: ve,
          actionDividerColor: Me,
          optionTextColorPressed: ie,
          optionTextColor: Ne,
          optionTextColorDisabled: Te,
          optionTextColorActive: me,
          optionOpacityDisabled: ye,
          optionCheckColor: be,
          actionTextColor: Ye,
          optionColorPending: tt,
          optionColorActive: lt,
          loadingColor: it,
          loadingSize: mt,
          optionColorActivePending: Se,
          [Y("optionFontSize", W)]: Ee,
          [Y("optionHeight", W)]: Xe,
          [Y("optionPadding", W)]: qe
        }
      } = i.value;
      return {
        "--n-height": ne,
        "--n-action-divider-color": Me,
        "--n-action-text-color": Ye,
        "--n-bezier": X,
        "--n-border-radius": Be,
        "--n-color": re,
        "--n-option-font-size": Ee,
        "--n-group-header-text-color": ve,
        "--n-option-check-color": be,
        "--n-option-color-pending": tt,
        "--n-option-color-active": lt,
        "--n-option-color-active-pending": Se,
        "--n-option-height": Xe,
        "--n-option-opacity-disabled": ye,
        "--n-option-text-color": Ne,
        "--n-option-text-color-active": me,
        "--n-option-text-color-disabled": Te,
        "--n-option-text-color-pressed": ie,
        "--n-option-padding": qe,
        "--n-option-padding-left": Dt(qe, "left"),
        "--n-option-padding-right": Dt(qe, "right"),
        "--n-loading-color": it,
        "--n-loading-size": mt
      };
    }), {
      inlineThemeDisabled: J
    } = e, Z = J ? je("internal-select-menu", R(() => e.size[0]), j, e) : void 0, ae = {
      selfRef: a,
      next: H,
      prev: t,
      getPendingTmNode: E
    };
    return Ns(a, e.onResize), Object.assign({
      mergedTheme: i,
      mergedClsPrefix: n,
      rtlEnabled: o,
      virtualListRef: l,
      scrollbarRef: s,
      itemSize: v,
      padding: g,
      flattenedNodes: u,
      empty: x,
      virtualListContainer() {
        const {
          value: W
        } = l;
        return W == null ? void 0 : W.listElRef;
      },
      virtualListContent() {
        const {
          value: W
        } = l;
        return W == null ? void 0 : W.itemsElRef;
      },
      doScroll: A,
      handleFocusin: _,
      handleFocusout: T,
      handleKeyUp: M,
      handleKeyDown: I,
      handleMouseDown: K,
      handleVirtualListResize: S,
      handleVirtualListScroll: y,
      cssVars: J ? void 0 : j,
      themeClass: Z == null ? void 0 : Z.themeClass,
      onRender: Z == null ? void 0 : Z.onRender
    }, ae);
  },
  render() {
    const {
      $slots: e,
      virtualScroll: n,
      clsPrefix: r,
      mergedTheme: o,
      themeClass: i,
      onRender: a
    } = this;
    return a == null || a(), h("div", {
      ref: "selfRef",
      tabindex: this.focusable ? 0 : -1,
      class: [`${r}-base-select-menu`, this.rtlEnabled && `${r}-base-select-menu--rtl`, i, this.multiple && `${r}-base-select-menu--multiple`],
      style: this.cssVars,
      onFocusin: this.handleFocusin,
      onFocusout: this.handleFocusout,
      onKeyup: this.handleKeyUp,
      onKeydown: this.handleKeyDown,
      onMousedown: this.handleMouseDown,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave
    }, _e(e.header, (l) => l && h("div", {
      class: `${r}-base-select-menu__header`,
      "data-header": !0,
      key: "header"
    }, l)), this.loading ? h("div", {
      class: `${r}-base-select-menu__loading`
    }, h(wo, {
      clsPrefix: r,
      strokeWidth: 20
    })) : this.empty ? h("div", {
      class: `${r}-base-select-menu__empty`,
      "data-empty": !0
    }, Pt(e.empty, () => [h(Fu, {
      theme: o.peers.Empty,
      themeOverrides: o.peerOverrides.Empty,
      size: this.size
    })])) : h(So, {
      ref: "scrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: n ? this.virtualListContainer : void 0,
      content: n ? this.virtualListContent : void 0,
      onScroll: n ? void 0 : this.doScroll
    }, {
      default: () => n ? h(zf, {
        ref: "virtualListRef",
        class: `${r}-virtual-list`,
        items: this.flattenedNodes,
        itemSize: this.itemSize,
        showScrollbar: !1,
        paddingTop: this.padding.top,
        paddingBottom: this.padding.bottom,
        onResize: this.handleVirtualListResize,
        onScroll: this.handleVirtualListScroll,
        itemResizable: !0
      }, {
        default: ({
          item: l
        }) => l.isGroup ? h(Rl, {
          key: l.key,
          clsPrefix: r,
          tmNode: l
        }) : l.ignored ? null : h(Tl, {
          clsPrefix: r,
          key: l.key,
          tmNode: l
        })
      }) : h("div", {
        class: `${r}-base-select-menu-option-wrapper`,
        style: {
          paddingTop: this.padding.top,
          paddingBottom: this.padding.bottom
        }
      }, this.flattenedNodes.map((l) => l.isGroup ? h(Rl, {
        key: l.key,
        clsPrefix: r,
        tmNode: l
      }) : h(Tl, {
        clsPrefix: r,
        key: l.key,
        tmNode: l
      })))
    }), _e(e.action, (l) => l && [h("div", {
      class: `${r}-base-select-menu__action`,
      "data-action": !0,
      key: "action"
    }, l), h(Mg, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
}), Am = O("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), $m = Q({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    $n("-base-wave", Am, le(e, "clsPrefix"));
    const n = L(null), r = L(!1);
    let o = null;
    return Ge(() => {
      o !== null && window.clearTimeout(o);
    }), {
      active: r,
      selfRef: n,
      play() {
        o !== null && (window.clearTimeout(o), r.value = !1, o = null), et(() => {
          var i;
          (i = n.value) === null || i === void 0 || i.offsetHeight, r.value = !0, o = window.setTimeout(() => {
            r.value = !1, o = null;
          }, 1e3);
        });
      }
    };
  },
  render() {
    const {
      clsPrefix: e
    } = this;
    return h("div", {
      ref: "selfRef",
      "aria-hidden": !0,
      class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`]
    });
  }
}), Dm = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function Pm(e) {
  const {
    boxShadow2: n,
    popoverColor: r,
    textColor2: o,
    borderRadius: i,
    fontSize: a,
    dividerColor: l
  } = e;
  return Object.assign(Object.assign({}, Dm), {
    fontSize: a,
    borderRadius: i,
    color: r,
    dividerColor: l,
    textColor: o,
    boxShadow: n
  });
}
const zr = {
  name: "Popover",
  common: Ve,
  self: Pm
}, Zo = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ke = "var(--n-arrow-height) * 1.414", Em = z([O("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [z(">", [O("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), He("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [He("scrollable", [He("show-header-or-footer", "padding: var(--n-padding);")])]), k("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), k("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), V("scrollable, show-header-or-footer", [k("content", `
 padding: var(--n-padding);
 `)])]), O("popover-shared", `
 transform-origin: inherit;
 `, [
  O("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [O("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Ke});
 height: calc(${Ke});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
  // body transition
  z("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  z("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  z("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  z("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), pt("top-start", `
 top: calc(${Ke} / -2);
 left: calc(${Ht("top-start")} - var(--v-offset-left));
 `), pt("top", `
 top: calc(${Ke} / -2);
 transform: translateX(calc(${Ke} / -2)) rotate(45deg);
 left: 50%;
 `), pt("top-end", `
 top: calc(${Ke} / -2);
 right: calc(${Ht("top-end")} + var(--v-offset-left));
 `), pt("bottom-start", `
 bottom: calc(${Ke} / -2);
 left: calc(${Ht("bottom-start")} - var(--v-offset-left));
 `), pt("bottom", `
 bottom: calc(${Ke} / -2);
 transform: translateX(calc(${Ke} / -2)) rotate(45deg);
 left: 50%;
 `), pt("bottom-end", `
 bottom: calc(${Ke} / -2);
 right: calc(${Ht("bottom-end")} + var(--v-offset-left));
 `), pt("left-start", `
 left: calc(${Ke} / -2);
 top: calc(${Ht("left-start")} - var(--v-offset-top));
 `), pt("left", `
 left: calc(${Ke} / -2);
 transform: translateY(calc(${Ke} / -2)) rotate(45deg);
 top: 50%;
 `), pt("left-end", `
 left: calc(${Ke} / -2);
 bottom: calc(${Ht("left-end")} + var(--v-offset-top));
 `), pt("right-start", `
 right: calc(${Ke} / -2);
 top: calc(${Ht("right-start")} - var(--v-offset-top));
 `), pt("right", `
 right: calc(${Ke} / -2);
 transform: translateY(calc(${Ke} / -2)) rotate(45deg);
 top: 50%;
 `), pt("right-end", `
 right: calc(${Ke} / -2);
 bottom: calc(${Ht("right-end")} + var(--v-offset-top));
 `), ...ox({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, n) => {
  const r = ["right", "left"].includes(n), o = r ? "width" : "height";
  return e.map((i) => {
    const a = i.split("-")[1] === "end", s = `calc((${`var(--v-target-${o}, 0px)`} - ${Ke}) / 2)`, u = Ht(i);
    return z(`[v-placement="${i}"] >`, [O("popover-shared", [V("center-arrow", [O("popover-arrow", `${n}: calc(max(${s}, ${u}) ${a ? "+" : "-"} var(--v-offset-${r ? "left" : "top"}));`)])])]);
  });
})]);
function Ht(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function pt(e, n) {
  const r = e.split("-")[0], o = ["top", "bottom"].includes(r) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return z(`[v-placement="${e}"] >`, [O("popover-shared", `
 margin-${Zo[r]}: var(--n-space);
 `, [V("show-arrow", `
 margin-${Zo[r]}: var(--n-space-arrow);
 `), V("overlap", `
 margin: 0;
 `), Ac("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${Zo[r]}: auto;
 ${o}
 `, [O("popover-arrow", n)])])]);
}
const Du = Object.assign(Object.assign({}, ce.props), {
  to: qt.propTo,
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
function Pu({
  arrowClass: e,
  arrowStyle: n,
  arrowWrapperClass: r,
  arrowWrapperStyle: o,
  clsPrefix: i
}) {
  return h("div", {
    key: "__popover-arrow__",
    style: o,
    class: [`${i}-popover-arrow-wrapper`, r]
  }, h("div", {
    class: [`${i}-popover-arrow`, e],
    style: n
  }));
}
const km = Q({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: Du,
  setup(e, {
    slots: n,
    attrs: r
  }) {
    const {
      namespaceRef: o,
      mergedClsPrefixRef: i,
      inlineThemeDisabled: a
    } = Pe(e), l = ce("Popover", "-popover", Em, zr, e, i), s = L(null), u = xe("NPopover"), d = L(null), c = L(e.show), f = L(!1);
    rt(() => {
      const {
        show: C
      } = e;
      C && !$c() && !e.internalDeactivateImmediately && (f.value = !0);
    });
    const p = R(() => {
      const {
        trigger: C,
        onClickoutside: $
      } = e, M = [], {
        positionManuallyRef: {
          value: I
        }
      } = u;
      return I || (C === "click" && !$ && M.push([mr, y, void 0, {
        capture: !0
      }]), C === "hover" && M.push([Kc, A])), $ && M.push([mr, y, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && f.value) && M.push([qn, e.show]), M;
    }), m = R(() => {
      const {
        common: {
          cubicBezierEaseInOut: C,
          cubicBezierEaseIn: $,
          cubicBezierEaseOut: M
        },
        self: {
          space: I,
          spaceArrow: K,
          padding: H,
          fontSize: t,
          textColor: F,
          dividerColor: D,
          color: _,
          boxShadow: T,
          borderRadius: j,
          arrowHeight: J,
          arrowOffset: Z,
          arrowOffsetVertical: ae
        }
      } = l.value;
      return {
        "--n-box-shadow": T,
        "--n-bezier": C,
        "--n-bezier-ease-in": $,
        "--n-bezier-ease-out": M,
        "--n-font-size": t,
        "--n-text-color": F,
        "--n-color": _,
        "--n-divider-color": D,
        "--n-border-radius": j,
        "--n-arrow-height": J,
        "--n-arrow-offset": Z,
        "--n-arrow-offset-vertical": ae,
        "--n-padding": H,
        "--n-space": I,
        "--n-space-arrow": K
      };
    }), v = R(() => {
      const C = e.width === "trigger" ? void 0 : jt(e.width), $ = [];
      C && $.push({
        width: C
      });
      const {
        maxWidth: M,
        minWidth: I
      } = e;
      return M && $.push({
        maxWidth: jt(M)
      }), I && $.push({
        maxWidth: jt(I)
      }), a || $.push(m.value), $;
    }), g = a ? je("popover", void 0, m, e) : void 0;
    u.setBodyInstance({
      syncPosition: b
    }), Ge(() => {
      u.setBodyInstance(null);
    }), ze(le(e, "show"), (C) => {
      e.animated || (C ? c.value = !0 : c.value = !1);
    });
    function b() {
      var C;
      (C = s.value) === null || C === void 0 || C.syncPosition();
    }
    function x(C) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && u.handleMouseEnter(C);
    }
    function B(C) {
      e.trigger === "hover" && e.keepAliveOnHover && u.handleMouseLeave(C);
    }
    function A(C) {
      e.trigger === "hover" && !S().contains(Kn(C)) && u.handleMouseMoveOutside(C);
    }
    function y(C) {
      (e.trigger === "click" && !S().contains(Kn(C)) || e.onClickoutside) && u.handleClickOutside(C);
    }
    function S() {
      return u.getTriggerElement();
    }
    we(Er, d), we(mo, null), we(go, null);
    function E() {
      if (g == null || g.onRender(), !(e.displayDirective === "show" || e.show || e.animated && f.value))
        return null;
      let $;
      const M = u.internalRenderBodyRef.value, {
        value: I
      } = i;
      if (M)
        $ = M(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${I}-popover-shared`, g == null ? void 0 : g.themeClass.value, e.overlap && `${I}-popover-shared--overlap`, e.showArrow && `${I}-popover-shared--show-arrow`, e.arrowPointToCenter && `${I}-popover-shared--center-arrow`],
          d,
          v.value,
          x,
          B
        );
      else {
        const {
          value: K
        } = u.extraClassRef, {
          internalTrapFocus: H
        } = e, t = !ai(n.header) || !ai(n.footer), F = () => {
          var D, _;
          const T = t ? h(ht, null, _e(n.header, (Z) => Z ? h("div", {
            class: [`${I}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, Z) : null), _e(n.default, (Z) => Z ? h("div", {
            class: [`${I}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, n) : null), _e(n.footer, (Z) => Z ? h("div", {
            class: [`${I}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, Z) : null)) : e.scrollable ? (D = n.default) === null || D === void 0 ? void 0 : D.call(n) : h("div", {
            class: [`${I}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, n), j = e.scrollable ? h(Au, {
            contentClass: t ? void 0 : `${I}-popover__content ${(_ = e.contentClass) !== null && _ !== void 0 ? _ : ""}`,
            contentStyle: t ? void 0 : e.contentStyle
          }, {
            default: () => T
          }) : T, J = e.showArrow ? Pu({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: I
          }) : null;
          return [j, J];
        };
        $ = h("div", an({
          class: [`${I}-popover`, `${I}-popover-shared`, g == null ? void 0 : g.themeClass.value, K.map((D) => `${I}-${D}`), {
            [`${I}-popover--scrollable`]: e.scrollable,
            [`${I}-popover--show-header-or-footer`]: t,
            [`${I}-popover--raw`]: e.raw,
            [`${I}-popover-shared--overlap`]: e.overlap,
            [`${I}-popover-shared--show-arrow`]: e.showArrow,
            [`${I}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: d,
          style: v.value,
          onKeydown: u.handleKeydown,
          onMouseenter: x,
          onMouseleave: B
        }, r), H ? h(Ls, {
          active: e.show,
          autoFocus: !0
        }, {
          default: F
        }) : F());
      }
      return kt($, p.value);
    }
    return {
      displayed: f,
      namespace: o,
      isMounted: u.isMountedRef,
      zIndex: u.zIndexRef,
      followerRef: s,
      adjustedTo: qt(e),
      followerEnabled: c,
      renderContentNode: E
    };
  },
  render() {
    return h(Wi, {
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
      teleportDisabled: this.adjustedTo === qt.tdkey
    }, {
      default: () => this.animated ? h(ft, {
        name: "popover-transition",
        appear: this.isMounted,
        // Don't use watch to enable follower, since the transition may
        // make position sync timing very subtle and buggy.
        onEnter: () => {
          this.followerEnabled = !0;
        },
        onAfterLeave: () => {
          var e;
          (e = this.internalOnAfterLeave) === null || e === void 0 || e.call(this), this.followerEnabled = !1, this.displayed = !1;
        }
      }, {
        default: this.renderContentNode
      }) : this.renderContentNode()
    });
  }
}), zm = Object.keys(Du), Tm = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function Rm(e, n, r) {
  Tm[n].forEach((o) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const i = e.props[o], a = r[o];
    i ? e.props[o] = (...l) => {
      i(...l), a(...l);
    } : e.props[o] = a;
  });
}
const Tr = {
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
  to: qt.propTo,
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
}, Om = Object.assign(Object.assign(Object.assign({}, ce.props), Tr), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), Rr = Q({
  name: "Popover",
  inheritAttrs: !1,
  props: Om,
  __popover__: !0,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.maxWidth !== void 0 && nt("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && nt("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && nt("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && nt("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && nt("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const n = Jn(), r = L(null), o = R(() => e.show), i = L(e.defaultShow), a = Gn(o, i), l = We(() => e.disabled ? !1 : a.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: D
      } = e;
      return !!(D != null && D());
    }, u = () => s() ? !1 : a.value, d = Mi(e, ["arrow", "showArrow"]), c = R(() => e.overlap ? !1 : d.value);
    let f = null;
    const p = L(null), m = L(null), v = We(() => e.x !== void 0 && e.y !== void 0);
    function g(D) {
      const {
        "onUpdate:show": _,
        onUpdateShow: T,
        onShow: j,
        onHide: J
      } = e;
      i.value = D, _ && he(_, D), T && he(T, D), D && j && he(j, !0), D && J && he(J, !1);
    }
    function b() {
      f && f.syncPosition();
    }
    function x() {
      const {
        value: D
      } = p;
      D && (window.clearTimeout(D), p.value = null);
    }
    function B() {
      const {
        value: D
      } = m;
      D && (window.clearTimeout(D), m.value = null);
    }
    function A() {
      const D = s();
      if (e.trigger === "focus" && !D) {
        if (u()) return;
        g(!0);
      }
    }
    function y() {
      const D = s();
      if (e.trigger === "focus" && !D) {
        if (!u()) return;
        g(!1);
      }
    }
    function S() {
      const D = s();
      if (e.trigger === "hover" && !D) {
        if (B(), p.value !== null || u()) return;
        const _ = () => {
          g(!0), p.value = null;
        }, {
          delay: T
        } = e;
        T === 0 ? _() : p.value = window.setTimeout(_, T);
      }
    }
    function E() {
      const D = s();
      if (e.trigger === "hover" && !D) {
        if (x(), m.value !== null || !u()) return;
        const _ = () => {
          g(!1), m.value = null;
        }, {
          duration: T
        } = e;
        T === 0 ? _() : m.value = window.setTimeout(_, T);
      }
    }
    function C() {
      E();
    }
    function $(D) {
      var _;
      u() && (e.trigger === "click" && (x(), B(), g(!1)), (_ = e.onClickoutside) === null || _ === void 0 || _.call(e, D));
    }
    function M() {
      if (e.trigger === "click" && !s()) {
        x(), B();
        const D = !u();
        g(D);
      }
    }
    function I(D) {
      e.internalTrapFocus && D.key === "Escape" && (x(), B(), g(!1));
    }
    function K(D) {
      i.value = D;
    }
    function H() {
      var D;
      return (D = r.value) === null || D === void 0 ? void 0 : D.targetRef;
    }
    function t(D) {
      f = D;
    }
    return we("NPopover", {
      getTriggerElement: H,
      handleKeydown: I,
      handleMouseEnter: S,
      handleMouseLeave: E,
      handleClickOutside: $,
      handleMouseMoveOutside: C,
      setBodyInstance: t,
      positionManuallyRef: v,
      isMountedRef: n,
      zIndexRef: le(e, "zIndex"),
      extraClassRef: le(e, "internalExtraClass"),
      internalRenderBodyRef: le(e, "internalRenderBody")
    }), rt(() => {
      a.value && s() && g(!1);
    }), {
      binderInstRef: r,
      positionManually: v,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: i,
      mergedShowArrow: c,
      getMergedShow: u,
      setShow: K,
      handleClick: M,
      handleMouseEnter: S,
      handleMouseLeave: E,
      handleFocus: A,
      handleBlur: y,
      syncPosition: b
    };
  },
  render() {
    var e;
    const {
      positionManually: n,
      $slots: r
    } = this;
    let o, i = !1;
    if (!n && (r.activator ? o = oi(r, "activator") : o = oi(r, "trigger"), o)) {
      o = Jl(o), o = o.type === _d ? h("span", [o]) : o;
      const a = {
        onClick: this.handleClick,
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      };
      if (!((e = o.type) === null || e === void 0) && e.__popover__)
        i = !0, o.props || (o.props = {
          internalSyncTargetWithParent: !0,
          internalInheritedEventHandlers: []
        }), o.props.internalSyncTargetWithParent = !0, o.props.internalInheritedEventHandlers ? o.props.internalInheritedEventHandlers = [a, ...o.props.internalInheritedEventHandlers] : o.props.internalInheritedEventHandlers = [a];
      else {
        const {
          internalInheritedEventHandlers: l
        } = this, s = [a, ...l], u = {
          onBlur: (d) => {
            s.forEach((c) => {
              c.onBlur(d);
            });
          },
          onFocus: (d) => {
            s.forEach((c) => {
              c.onFocus(d);
            });
          },
          onClick: (d) => {
            s.forEach((c) => {
              c.onClick(d);
            });
          },
          onMouseenter: (d) => {
            s.forEach((c) => {
              c.onMouseenter(d);
            });
          },
          onMouseleave: (d) => {
            s.forEach((c) => {
              c.onMouseleave(d);
            });
          }
        };
        Rm(o, l ? "nested" : n ? "manual" : this.trigger, u);
      }
    }
    return h(_i, {
      ref: "binderInstRef",
      syncTarget: !i,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const a = this.getMergedShow();
        return [this.internalTrapFocus && a ? kt(h("div", {
          style: {
            position: "fixed",
            inset: 0
          }
        }), [[Ni, {
          enabled: a,
          zIndex: this.zIndex
        }]]) : null, n ? null : h(Li, null, {
          default: () => o
        }), h(km, Cn(this.$props, zm, Object.assign(Object.assign({}, this.$attrs), {
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
}), Mm = {
  closeIconSizeTiny: "12px",
  closeIconSizeSmall: "12px",
  closeIconSizeMedium: "14px",
  closeIconSizeLarge: "14px",
  closeSizeTiny: "16px",
  closeSizeSmall: "16px",
  closeSizeMedium: "18px",
  closeSizeLarge: "18px",
  padding: "0 7px",
  closeMargin: "0 0 0 4px"
};
function Im(e) {
  const {
    textColor2: n,
    primaryColorHover: r,
    primaryColorPressed: o,
    primaryColor: i,
    infoColor: a,
    successColor: l,
    warningColor: s,
    errorColor: u,
    baseColor: d,
    borderColor: c,
    opacityDisabled: f,
    tagColor: p,
    closeIconColor: m,
    closeIconColorHover: v,
    closeIconColorPressed: g,
    borderRadiusSmall: b,
    fontSizeMini: x,
    fontSizeTiny: B,
    fontSizeSmall: A,
    fontSizeMedium: y,
    heightMini: S,
    heightTiny: E,
    heightSmall: C,
    heightMedium: $,
    closeColorHover: M,
    closeColorPressed: I,
    buttonColor2Hover: K,
    buttonColor2Pressed: H,
    fontWeightStrong: t
  } = e;
  return Object.assign(Object.assign({}, Mm), {
    closeBorderRadius: b,
    heightTiny: S,
    heightSmall: E,
    heightMedium: C,
    heightLarge: $,
    borderRadius: b,
    opacityDisabled: f,
    fontSizeTiny: x,
    fontSizeSmall: B,
    fontSizeMedium: A,
    fontSizeLarge: y,
    fontWeightStrong: t,
    // checked
    textColorCheckable: n,
    textColorHoverCheckable: n,
    textColorPressedCheckable: n,
    textColorChecked: d,
    colorCheckable: "#0000",
    colorHoverCheckable: K,
    colorPressedCheckable: H,
    colorChecked: i,
    colorCheckedHover: r,
    colorCheckedPressed: o,
    // default
    border: `1px solid ${c}`,
    textColor: n,
    color: p,
    colorBordered: "rgb(250, 250, 252)",
    closeIconColor: m,
    closeIconColorHover: v,
    closeIconColorPressed: g,
    closeColorHover: M,
    closeColorPressed: I,
    borderPrimary: `1px solid ${ge(i, {
      alpha: 0.3
    })}`,
    textColorPrimary: i,
    colorPrimary: ge(i, {
      alpha: 0.12
    }),
    colorBorderedPrimary: ge(i, {
      alpha: 0.1
    }),
    closeIconColorPrimary: i,
    closeIconColorHoverPrimary: i,
    closeIconColorPressedPrimary: i,
    closeColorHoverPrimary: ge(i, {
      alpha: 0.12
    }),
    closeColorPressedPrimary: ge(i, {
      alpha: 0.18
    }),
    borderInfo: `1px solid ${ge(a, {
      alpha: 0.3
    })}`,
    textColorInfo: a,
    colorInfo: ge(a, {
      alpha: 0.12
    }),
    colorBorderedInfo: ge(a, {
      alpha: 0.1
    }),
    closeIconColorInfo: a,
    closeIconColorHoverInfo: a,
    closeIconColorPressedInfo: a,
    closeColorHoverInfo: ge(a, {
      alpha: 0.12
    }),
    closeColorPressedInfo: ge(a, {
      alpha: 0.18
    }),
    borderSuccess: `1px solid ${ge(l, {
      alpha: 0.3
    })}`,
    textColorSuccess: l,
    colorSuccess: ge(l, {
      alpha: 0.12
    }),
    colorBorderedSuccess: ge(l, {
      alpha: 0.1
    }),
    closeIconColorSuccess: l,
    closeIconColorHoverSuccess: l,
    closeIconColorPressedSuccess: l,
    closeColorHoverSuccess: ge(l, {
      alpha: 0.12
    }),
    closeColorPressedSuccess: ge(l, {
      alpha: 0.18
    }),
    borderWarning: `1px solid ${ge(s, {
      alpha: 0.35
    })}`,
    textColorWarning: s,
    colorWarning: ge(s, {
      alpha: 0.15
    }),
    colorBorderedWarning: ge(s, {
      alpha: 0.12
    }),
    closeIconColorWarning: s,
    closeIconColorHoverWarning: s,
    closeIconColorPressedWarning: s,
    closeColorHoverWarning: ge(s, {
      alpha: 0.12
    }),
    closeColorPressedWarning: ge(s, {
      alpha: 0.18
    }),
    borderError: `1px solid ${ge(u, {
      alpha: 0.23
    })}`,
    textColorError: u,
    colorError: ge(u, {
      alpha: 0.1
    }),
    colorBorderedError: ge(u, {
      alpha: 0.08
    }),
    closeIconColorError: u,
    closeIconColorHoverError: u,
    closeIconColorPressedError: u,
    closeColorHoverError: ge(u, {
      alpha: 0.12
    }),
    closeColorPressedError: ge(u, {
      alpha: 0.18
    })
  });
}
const _m = {
  name: "Tag",
  common: Ve,
  self: Im
}, Lm = {
  color: Object,
  type: {
    type: String,
    default: "default"
  },
  round: Boolean,
  size: {
    type: String,
    default: "medium"
  },
  closable: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  }
}, Nm = O("tag", `
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`, [V("strong", `
 font-weight: var(--n-font-weight-strong);
 `), k("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), k("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), k("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), k("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), V("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [k("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), k("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), V("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), V("icon, avatar", [V("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), V("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), V("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [He("disabled", [z("&:hover", "background-color: var(--n-color-hover-checkable);", [He("checked", "color: var(--n-text-color-hover-checkable);")]), z("&:active", "background-color: var(--n-color-pressed-checkable);", [He("checked", "color: var(--n-text-color-pressed-checkable);")])]), V("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [He("disabled", [z("&:hover", "background-color: var(--n-color-checked-hover);"), z("&:active", "background-color: var(--n-color-checked-pressed);")])])])]), Hm = Object.assign(Object.assign(Object.assign({}, ce.props), Lm), {
  bordered: {
    type: Boolean,
    default: void 0
  },
  checked: Boolean,
  checkable: Boolean,
  strong: Boolean,
  triggerClickOnClose: Boolean,
  onClose: [Array, Function],
  onMouseenter: Function,
  onMouseleave: Function,
  "onUpdate:checked": Function,
  onUpdateChecked: Function,
  // private
  internalCloseFocusable: {
    type: Boolean,
    default: !0
  },
  internalCloseIsButtonTag: {
    type: Boolean,
    default: !0
  },
  // deprecated
  onCheckedChange: Function
}), Wm = "n-tag", Jo = Q({
  name: "Tag",
  props: Hm,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.onCheckedChange !== void 0 && nt("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
    });
    const n = L(null), {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Pe(e), l = ce("Tag", "-tag", Nm, _m, e, o);
    we(Wm, {
      roundRef: le(e, "round")
    });
    function s() {
      if (!e.disabled && e.checkable) {
        const {
          checked: m,
          onCheckedChange: v,
          onUpdateChecked: g,
          "onUpdate:checked": b
        } = e;
        g && g(!m), b && b(!m), v && v(!m);
      }
    }
    function u(m) {
      if (e.triggerClickOnClose || m.stopPropagation(), !e.disabled) {
        const {
          onClose: v
        } = e;
        v && he(v, m);
      }
    }
    const d = {
      setTextContent(m) {
        const {
          value: v
        } = n;
        v && (v.textContent = m);
      }
    }, c = wt("Tag", a, o), f = R(() => {
      const {
        type: m,
        size: v,
        color: {
          color: g,
          textColor: b
        } = {}
      } = e, {
        common: {
          cubicBezierEaseInOut: x
        },
        self: {
          padding: B,
          closeMargin: A,
          borderRadius: y,
          opacityDisabled: S,
          textColorCheckable: E,
          textColorHoverCheckable: C,
          textColorPressedCheckable: $,
          textColorChecked: M,
          colorCheckable: I,
          colorHoverCheckable: K,
          colorPressedCheckable: H,
          colorChecked: t,
          colorCheckedHover: F,
          colorCheckedPressed: D,
          closeBorderRadius: _,
          fontWeightStrong: T,
          [Y("colorBordered", m)]: j,
          [Y("closeSize", v)]: J,
          [Y("closeIconSize", v)]: Z,
          [Y("fontSize", v)]: ae,
          [Y("height", v)]: W,
          [Y("color", m)]: X,
          [Y("textColor", m)]: ne,
          [Y("border", m)]: Be,
          [Y("closeIconColor", m)]: re,
          [Y("closeIconColorHover", m)]: ve,
          [Y("closeIconColorPressed", m)]: Me,
          [Y("closeColorHover", m)]: ie,
          [Y("closeColorPressed", m)]: Ne
        }
      } = l.value, Te = Dt(A);
      return {
        "--n-font-weight-strong": T,
        "--n-avatar-size-override": `calc(${W} - 8px)`,
        "--n-bezier": x,
        "--n-border-radius": y,
        "--n-border": Be,
        "--n-close-icon-size": Z,
        "--n-close-color-pressed": Ne,
        "--n-close-color-hover": ie,
        "--n-close-border-radius": _,
        "--n-close-icon-color": re,
        "--n-close-icon-color-hover": ve,
        "--n-close-icon-color-pressed": Me,
        "--n-close-icon-color-disabled": re,
        "--n-close-margin-top": Te.top,
        "--n-close-margin-right": Te.right,
        "--n-close-margin-bottom": Te.bottom,
        "--n-close-margin-left": Te.left,
        "--n-close-size": J,
        "--n-color": g || (r.value ? j : X),
        "--n-color-checkable": I,
        "--n-color-checked": t,
        "--n-color-checked-hover": F,
        "--n-color-checked-pressed": D,
        "--n-color-hover-checkable": K,
        "--n-color-pressed-checkable": H,
        "--n-font-size": ae,
        "--n-height": W,
        "--n-opacity-disabled": S,
        "--n-padding": B,
        "--n-text-color": b || ne,
        "--n-text-color-checkable": E,
        "--n-text-color-checked": M,
        "--n-text-color-hover-checkable": C,
        "--n-text-color-pressed-checkable": $
      };
    }), p = i ? je("tag", R(() => {
      let m = "";
      const {
        type: v,
        size: g,
        color: {
          color: b,
          textColor: x
        } = {}
      } = e;
      return m += v[0], m += g[0], b && (m += `a${oo(b)}`), x && (m += `b${oo(x)}`), r.value && (m += "c"), m;
    }), f, e) : void 0;
    return Object.assign(Object.assign({}, d), {
      rtlEnabled: c,
      mergedClsPrefix: o,
      contentRef: n,
      mergedBordered: r,
      handleClick: s,
      handleCloseClick: u,
      cssVars: i ? void 0 : f,
      themeClass: p == null ? void 0 : p.themeClass,
      onRender: p == null ? void 0 : p.onRender
    });
  },
  render() {
    var e, n;
    const {
      mergedClsPrefix: r,
      rtlEnabled: o,
      closable: i,
      color: {
        borderColor: a
      } = {},
      round: l,
      onRender: s,
      $slots: u
    } = this;
    s == null || s();
    const d = _e(u.avatar, (f) => f && h("div", {
      class: `${r}-tag__avatar`
    }, f)), c = _e(u.icon, (f) => f && h("div", {
      class: `${r}-tag__icon`
    }, f));
    return h("div", {
      class: [`${r}-tag`, this.themeClass, {
        [`${r}-tag--rtl`]: o,
        [`${r}-tag--strong`]: this.strong,
        [`${r}-tag--disabled`]: this.disabled,
        [`${r}-tag--checkable`]: this.checkable,
        [`${r}-tag--checked`]: this.checkable && this.checked,
        [`${r}-tag--round`]: l,
        [`${r}-tag--avatar`]: d,
        [`${r}-tag--icon`]: c,
        [`${r}-tag--closable`]: i
      }],
      style: this.cssVars,
      onClick: this.handleClick,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave
    }, c || d, h("span", {
      class: `${r}-tag__content`,
      ref: "contentRef"
    }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e)), !this.checkable && i ? h(aa, {
      clsPrefix: r,
      class: `${r}-tag__close`,
      disabled: this.disabled,
      onClick: this.handleCloseClick,
      focusable: this.internalCloseFocusable,
      round: l,
      isButtonTag: this.internalCloseIsButtonTag,
      absolute: !0
    }) : null, !this.checkable && this.mergedBordered ? h("div", {
      class: `${r}-tag__border`,
      style: {
        borderColor: a
      }
    }) : null);
  }
}), jm = O("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [z(">", [k("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [z("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), z("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), k("placeholder", `
 display: flex;
 `), k("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [fo({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), Bi = Q({
  name: "BaseClear",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    show: Boolean,
    onClear: Function
  },
  setup(e) {
    return $n("-base-clear", jm, le(e, "clsPrefix")), {
      handleMouseDown(n) {
        n.preventDefault();
      }
    };
  },
  render() {
    const {
      clsPrefix: e
    } = this;
    return h("div", {
      class: `${e}-base-clear`
    }, h(ia, null, {
      default: () => {
        var n, r;
        return this.show ? h("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, Pt(this.$slots.icon, () => [h(zt, {
          clsPrefix: e
        }, {
          default: () => h(Tg, null)
        })])) : h("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (r = (n = this.$slots).placeholder) === null || r === void 0 ? void 0 : r.call(n));
      }
    }));
  }
}), Eu = Q({
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
  setup(e, {
    slots: n
  }) {
    return () => {
      const {
        clsPrefix: r
      } = e;
      return h(wo, {
        clsPrefix: r,
        class: `${r}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? h(Bi, {
          clsPrefix: r,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => h(zt, {
            clsPrefix: r,
            class: `${r}-base-suffix__arrow`
          }, {
            default: () => Pt(n.default, () => [h(zg, null)])
          })
        }) : null
      });
    };
  }
}), Vm = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
function qm(e) {
  const {
    borderRadius: n,
    textColor2: r,
    textColorDisabled: o,
    inputColor: i,
    inputColorDisabled: a,
    primaryColor: l,
    primaryColorHover: s,
    warningColor: u,
    warningColorHover: d,
    errorColor: c,
    errorColorHover: f,
    borderColor: p,
    iconColor: m,
    iconColorDisabled: v,
    clearColor: g,
    clearColorHover: b,
    clearColorPressed: x,
    placeholderColor: B,
    placeholderColorDisabled: A,
    fontSizeTiny: y,
    fontSizeSmall: S,
    fontSizeMedium: E,
    fontSizeLarge: C,
    heightTiny: $,
    heightSmall: M,
    heightMedium: I,
    heightLarge: K
  } = e;
  return Object.assign(Object.assign({}, Vm), {
    fontSizeTiny: y,
    fontSizeSmall: S,
    fontSizeMedium: E,
    fontSizeLarge: C,
    heightTiny: $,
    heightSmall: M,
    heightMedium: I,
    heightLarge: K,
    borderRadius: n,
    // default
    textColor: r,
    textColorDisabled: o,
    placeholderColor: B,
    placeholderColorDisabled: A,
    color: i,
    colorDisabled: a,
    colorActive: i,
    border: `1px solid ${p}`,
    borderHover: `1px solid ${s}`,
    borderActive: `1px solid ${l}`,
    borderFocus: `1px solid ${s}`,
    boxShadowHover: "none",
    boxShadowActive: `0 0 0 2px ${ge(l, {
      alpha: 0.2
    })}`,
    boxShadowFocus: `0 0 0 2px ${ge(l, {
      alpha: 0.2
    })}`,
    caretColor: l,
    arrowColor: m,
    arrowColorDisabled: v,
    loadingColor: l,
    // warning
    borderWarning: `1px solid ${u}`,
    borderHoverWarning: `1px solid ${d}`,
    borderActiveWarning: `1px solid ${u}`,
    borderFocusWarning: `1px solid ${d}`,
    boxShadowHoverWarning: "none",
    boxShadowActiveWarning: `0 0 0 2px ${ge(u, {
      alpha: 0.2
    })}`,
    boxShadowFocusWarning: `0 0 0 2px ${ge(u, {
      alpha: 0.2
    })}`,
    colorActiveWarning: i,
    caretColorWarning: u,
    // error
    borderError: `1px solid ${c}`,
    borderHoverError: `1px solid ${f}`,
    borderActiveError: `1px solid ${c}`,
    borderFocusError: `1px solid ${f}`,
    boxShadowHoverError: "none",
    boxShadowActiveError: `0 0 0 2px ${ge(c, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${ge(c, {
      alpha: 0.2
    })}`,
    colorActiveError: i,
    caretColorError: c,
    clearColor: g,
    clearColorHover: b,
    clearColorPressed: x
  });
}
const ku = {
  name: "InternalSelection",
  common: Ve,
  peers: {
    Popover: zr
  },
  self: qm
}, Km = z([O("base-selection", `
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `, [O("base-loading", `
 color: var(--n-loading-color);
 `), O("base-selection-tags", "min-height: var(--n-height);"), k("border, state-border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), k("state-border", `
 z-index: 1;
 border-color: #0000;
 `), O("base-suffix", `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [k("arrow", `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), O("base-selection-overlay", `
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `, [k("wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), O("base-selection-placeholder", `
 color: var(--n-placeholder-color);
 `, [k("inner", `
 max-width: 100%;
 overflow: hidden;
 `)]), O("base-selection-tags", `
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), O("base-selection-label", `
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `, [O("base-selection-input", `
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `, [k("content", `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), k("render-label", `
 color: var(--n-text-color);
 `)]), He("disabled", [z("&:hover", [k("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), V("focus", [k("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), V("active", [k("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), O("base-selection-label", "background-color: var(--n-color-active);"), O("base-selection-tags", "background-color: var(--n-color-active);")])]), V("disabled", "cursor: not-allowed;", [k("arrow", `
 color: var(--n-arrow-color-disabled);
 `), O("base-selection-label", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [O("base-selection-input", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), k("render-label", `
 color: var(--n-text-color-disabled);
 `)]), O("base-selection-tags", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), O("base-selection-placeholder", `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), O("base-selection-input-tag", `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [k("input", `
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `), k("mirror", `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), ["warning", "error"].map((e) => V(`${e}-status`, [k("state-border", `border: var(--n-border-${e});`), He("disabled", [z("&:hover", [k("state-border", `
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]), V("active", [k("state-border", `
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `), O("base-selection-label", `background-color: var(--n-color-active-${e});`), O("base-selection-tags", `background-color: var(--n-color-active-${e});`)]), V("focus", [k("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]), O("base-selection-popover", `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), O("base-selection-tag-wrapper", `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [z("&:last-child", "padding-right: 0;"), O("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [k("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]), Um = Q({
  name: "InternalSelection",
  props: Object.assign(Object.assign({}, ce.props), {
    clsPrefix: {
      type: String,
      required: !0
    },
    bordered: {
      type: Boolean,
      default: void 0
    },
    active: Boolean,
    pattern: {
      type: String,
      default: ""
    },
    placeholder: String,
    selectedOption: {
      type: Object,
      default: null
    },
    selectedOptions: {
      type: Array,
      default: null
    },
    labelField: {
      type: String,
      default: "label"
    },
    valueField: {
      type: String,
      default: "value"
    },
    multiple: Boolean,
    filterable: Boolean,
    clearable: Boolean,
    disabled: Boolean,
    size: {
      type: String,
      default: "medium"
    },
    loading: Boolean,
    autofocus: Boolean,
    showArrow: {
      type: Boolean,
      default: !0
    },
    inputProps: Object,
    focused: Boolean,
    renderTag: Function,
    onKeydown: Function,
    onClick: Function,
    onBlur: Function,
    onFocus: Function,
    onDeleteOption: Function,
    maxTagCount: [String, Number],
    ellipsisTagPopoverProps: Object,
    onClear: Function,
    onPatternInput: Function,
    onPatternFocus: Function,
    onPatternBlur: Function,
    renderLabel: Function,
    status: String,
    inlineThemeDisabled: Boolean,
    ignoreComposition: {
      type: Boolean,
      default: !0
    },
    onResize: Function
  }),
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      mergedRtlRef: r
    } = Pe(e), o = wt("InternalSelection", r, n), i = L(null), a = L(null), l = L(null), s = L(null), u = L(null), d = L(null), c = L(null), f = L(null), p = L(null), m = L(null), v = L(!1), g = L(!1), b = L(!1), x = ce("InternalSelection", "-internal-selection", Km, ku, e, le(e, "clsPrefix")), B = R(() => e.clearable && !e.disabled && (b.value || e.active)), A = R(() => e.selectedOption ? e.renderTag ? e.renderTag({
      option: e.selectedOption,
      handleClose: () => {
      }
    }) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : Qe(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder), y = R(() => {
      const G = e.selectedOption;
      if (G)
        return G[e.labelField];
    }), S = R(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length) : e.selectedOption !== null);
    function E() {
      var G;
      const {
        value: ee
      } = i;
      if (ee) {
        const {
          value: Re
        } = a;
        Re && (Re.style.width = `${ee.offsetWidth}px`, e.maxTagCount !== "responsive" && ((G = p.value) === null || G === void 0 || G.sync({
          showAllItemsBeforeCalculate: !1
        })));
      }
    }
    function C() {
      const {
        value: G
      } = m;
      G && (G.style.display = "none");
    }
    function $() {
      const {
        value: G
      } = m;
      G && (G.style.display = "inline-block");
    }
    ze(le(e, "active"), (G) => {
      G || C();
    }), ze(le(e, "pattern"), () => {
      e.multiple && et(E);
    });
    function M(G) {
      const {
        onFocus: ee
      } = e;
      ee && ee(G);
    }
    function I(G) {
      const {
        onBlur: ee
      } = e;
      ee && ee(G);
    }
    function K(G) {
      const {
        onDeleteOption: ee
      } = e;
      ee && ee(G);
    }
    function H(G) {
      const {
        onClear: ee
      } = e;
      ee && ee(G);
    }
    function t(G) {
      const {
        onPatternInput: ee
      } = e;
      ee && ee(G);
    }
    function F(G) {
      var ee;
      (!G.relatedTarget || !(!((ee = l.value) === null || ee === void 0) && ee.contains(G.relatedTarget))) && M(G);
    }
    function D(G) {
      var ee;
      !((ee = l.value) === null || ee === void 0) && ee.contains(G.relatedTarget) || I(G);
    }
    function _(G) {
      H(G);
    }
    function T() {
      b.value = !0;
    }
    function j() {
      b.value = !1;
    }
    function J(G) {
      !e.active || !e.filterable || G.target !== a.value && G.preventDefault();
    }
    function Z(G) {
      K(G);
    }
    const ae = L(!1);
    function W(G) {
      if (G.key === "Backspace" && !ae.value && !e.pattern.length) {
        const {
          selectedOptions: ee
        } = e;
        ee != null && ee.length && Z(ee[ee.length - 1]);
      }
    }
    let X = null;
    function ne(G) {
      const {
        value: ee
      } = i;
      if (ee) {
        const Re = G.target.value;
        ee.textContent = Re, E();
      }
      e.ignoreComposition && ae.value ? X = G : t(G);
    }
    function Be() {
      ae.value = !0;
    }
    function re() {
      ae.value = !1, e.ignoreComposition && t(X), X = null;
    }
    function ve(G) {
      var ee;
      g.value = !0, (ee = e.onPatternFocus) === null || ee === void 0 || ee.call(e, G);
    }
    function Me(G) {
      var ee;
      g.value = !1, (ee = e.onPatternBlur) === null || ee === void 0 || ee.call(e, G);
    }
    function ie() {
      var G, ee;
      if (e.filterable)
        g.value = !1, (G = d.value) === null || G === void 0 || G.blur(), (ee = a.value) === null || ee === void 0 || ee.blur();
      else if (e.multiple) {
        const {
          value: Re
        } = s;
        Re == null || Re.blur();
      } else {
        const {
          value: Re
        } = u;
        Re == null || Re.blur();
      }
    }
    function Ne() {
      var G, ee, Re;
      e.filterable ? (g.value = !1, (G = d.value) === null || G === void 0 || G.focus()) : e.multiple ? (ee = s.value) === null || ee === void 0 || ee.focus() : (Re = u.value) === null || Re === void 0 || Re.focus();
    }
    function Te() {
      const {
        value: G
      } = a;
      G && ($(), G.focus());
    }
    function me() {
      const {
        value: G
      } = a;
      G && G.blur();
    }
    function ye(G) {
      const {
        value: ee
      } = c;
      ee && ee.setTextContent(`+${G}`);
    }
    function be() {
      const {
        value: G
      } = f;
      return G;
    }
    function Ye() {
      return a.value;
    }
    let tt = null;
    function lt() {
      tt !== null && window.clearTimeout(tt);
    }
    function it() {
      e.active || (lt(), tt = window.setTimeout(() => {
        S.value && (v.value = !0);
      }, 100));
    }
    function mt() {
      lt();
    }
    function Se(G) {
      G || (lt(), v.value = !1);
    }
    ze(S, (G) => {
      G || (v.value = !1);
    }), ot(() => {
      rt(() => {
        const G = d.value;
        G && (e.disabled ? G.removeAttribute("tabindex") : G.tabIndex = g.value ? -1 : 0);
      });
    }), Ns(l, e.onResize);
    const {
      inlineThemeDisabled: Ee
    } = e, Xe = R(() => {
      const {
        size: G
      } = e, {
        common: {
          cubicBezierEaseInOut: ee
        },
        self: {
          borderRadius: Re,
          color: un,
          placeholderColor: Rt,
          textColor: Ot,
          paddingSingle: Xt,
          paddingMultiple: Bt,
          caretColor: Mt,
          colorDisabled: Yt,
          textColorDisabled: st,
          placeholderColorDisabled: bt,
          colorActive: w,
          boxShadowFocus: N,
          boxShadowActive: U,
          boxShadowHover: te,
          border: oe,
          borderFocus: de,
          borderHover: fe,
          borderActive: pe,
          arrowColor: ke,
          arrowColorDisabled: vt,
          loadingColor: Dn,
          // form warning
          colorActiveWarning: Do,
          boxShadowFocusWarning: Pn,
          boxShadowActiveWarning: En,
          boxShadowHoverWarning: Po,
          borderWarning: Eo,
          borderFocusWarning: Mr,
          borderHoverWarning: Zt,
          borderActiveWarning: P,
          // form error
          colorActiveError: q,
          boxShadowFocusError: se,
          boxShadowActiveError: $e,
          boxShadowHoverError: Ie,
          borderError: Ae,
          borderFocusError: It,
          borderHoverError: _t,
          borderActiveError: Lt,
          // clear
          clearColor: dn,
          clearColorHover: cn,
          clearColorPressed: tr,
          clearSize: ko,
          // arrow
          arrowSize: zo,
          [Y("height", G)]: To,
          [Y("fontSize", G)]: Ro
        }
      } = x.value, kn = Dt(Xt), zn = Dt(Bt);
      return {
        "--n-bezier": ee,
        "--n-border": oe,
        "--n-border-active": pe,
        "--n-border-focus": de,
        "--n-border-hover": fe,
        "--n-border-radius": Re,
        "--n-box-shadow-active": U,
        "--n-box-shadow-focus": N,
        "--n-box-shadow-hover": te,
        "--n-caret-color": Mt,
        "--n-color": un,
        "--n-color-active": w,
        "--n-color-disabled": Yt,
        "--n-font-size": Ro,
        "--n-height": To,
        "--n-padding-single-top": kn.top,
        "--n-padding-multiple-top": zn.top,
        "--n-padding-single-right": kn.right,
        "--n-padding-multiple-right": zn.right,
        "--n-padding-single-left": kn.left,
        "--n-padding-multiple-left": zn.left,
        "--n-padding-single-bottom": kn.bottom,
        "--n-padding-multiple-bottom": zn.bottom,
        "--n-placeholder-color": Rt,
        "--n-placeholder-color-disabled": bt,
        "--n-text-color": Ot,
        "--n-text-color-disabled": st,
        "--n-arrow-color": ke,
        "--n-arrow-color-disabled": vt,
        "--n-loading-color": Dn,
        // form warning
        "--n-color-active-warning": Do,
        "--n-box-shadow-focus-warning": Pn,
        "--n-box-shadow-active-warning": En,
        "--n-box-shadow-hover-warning": Po,
        "--n-border-warning": Eo,
        "--n-border-focus-warning": Mr,
        "--n-border-hover-warning": Zt,
        "--n-border-active-warning": P,
        // form error
        "--n-color-active-error": q,
        "--n-box-shadow-focus-error": se,
        "--n-box-shadow-active-error": $e,
        "--n-box-shadow-hover-error": Ie,
        "--n-border-error": Ae,
        "--n-border-focus-error": It,
        "--n-border-hover-error": _t,
        "--n-border-active-error": Lt,
        // clear
        "--n-clear-size": ko,
        "--n-clear-color": dn,
        "--n-clear-color-hover": cn,
        "--n-clear-color-pressed": tr,
        // arrow-size
        "--n-arrow-size": zo
      };
    }), qe = Ee ? je("internal-selection", R(() => e.size[0]), Xe, e) : void 0;
    return {
      mergedTheme: x,
      mergedClearable: B,
      mergedClsPrefix: n,
      rtlEnabled: o,
      patternInputFocused: g,
      filterablePlaceholder: A,
      label: y,
      selected: S,
      showTagsPanel: v,
      isComposing: ae,
      // dom ref
      counterRef: c,
      counterWrapperRef: f,
      patternInputMirrorRef: i,
      patternInputRef: a,
      selfRef: l,
      multipleElRef: s,
      singleElRef: u,
      patternInputWrapperRef: d,
      overflowRef: p,
      inputTagElRef: m,
      handleMouseDown: J,
      handleFocusin: F,
      handleClear: _,
      handleMouseEnter: T,
      handleMouseLeave: j,
      handleDeleteOption: Z,
      handlePatternKeyDown: W,
      handlePatternInputInput: ne,
      handlePatternInputBlur: Me,
      handlePatternInputFocus: ve,
      handleMouseEnterCounter: it,
      handleMouseLeaveCounter: mt,
      handleFocusout: D,
      handleCompositionEnd: re,
      handleCompositionStart: Be,
      onPopoverUpdateShow: Se,
      focus: Ne,
      focusInput: Te,
      blur: ie,
      blurInput: me,
      updateCounter: ye,
      getCounter: be,
      getTail: Ye,
      renderLabel: e.renderLabel,
      cssVars: Ee ? void 0 : Xe,
      themeClass: qe == null ? void 0 : qe.themeClass,
      onRender: qe == null ? void 0 : qe.onRender
    };
  },
  render() {
    const {
      status: e,
      multiple: n,
      size: r,
      disabled: o,
      filterable: i,
      maxTagCount: a,
      bordered: l,
      clsPrefix: s,
      ellipsisTagPopoverProps: u,
      onRender: d,
      renderTag: c,
      renderLabel: f
    } = this;
    d == null || d();
    const p = a === "responsive", m = typeof a == "number", v = p || m, g = h(li, null, {
      default: () => h(Eu, {
        clsPrefix: s,
        loading: this.loading,
        showArrow: this.showArrow,
        showClear: this.mergedClearable && this.selected,
        onClear: this.handleClear
      }, {
        default: () => {
          var x, B;
          return (B = (x = this.$slots).arrow) === null || B === void 0 ? void 0 : B.call(x);
        }
      })
    });
    let b;
    if (n) {
      const {
        labelField: x
      } = this, B = (t) => h("div", {
        class: `${s}-base-selection-tag-wrapper`,
        key: t.value
      }, c ? c({
        option: t,
        handleClose: () => {
          this.handleDeleteOption(t);
        }
      }) : h(Jo, {
        size: r,
        closable: !t.disabled,
        disabled: o,
        onClose: () => {
          this.handleDeleteOption(t);
        },
        internalCloseIsButtonTag: !1,
        internalCloseFocusable: !1
      }, {
        default: () => f ? f(t, !0) : Qe(t[x], t, !0)
      })), A = () => (m ? this.selectedOptions.slice(0, a) : this.selectedOptions).map(B), y = i ? h("div", {
        class: `${s}-base-selection-input-tag`,
        ref: "inputTagElRef",
        key: "__input-tag__"
      }, h("input", Object.assign({}, this.inputProps, {
        ref: "patternInputRef",
        tabindex: -1,
        disabled: o,
        value: this.pattern,
        autofocus: this.autofocus,
        class: `${s}-base-selection-input-tag__input`,
        onBlur: this.handlePatternInputBlur,
        onFocus: this.handlePatternInputFocus,
        onKeydown: this.handlePatternKeyDown,
        onInput: this.handlePatternInputInput,
        onCompositionstart: this.handleCompositionStart,
        onCompositionend: this.handleCompositionEnd
      })), h("span", {
        ref: "patternInputMirrorRef",
        class: `${s}-base-selection-input-tag__mirror`
      }, this.pattern)) : null, S = p ? () => h("div", {
        class: `${s}-base-selection-tag-wrapper`,
        ref: "counterWrapperRef"
      }, h(Jo, {
        size: r,
        ref: "counterRef",
        onMouseenter: this.handleMouseEnterCounter,
        onMouseleave: this.handleMouseLeaveCounter,
        disabled: o
      })) : void 0;
      let E;
      if (m) {
        const t = this.selectedOptions.length - a;
        t > 0 && (E = h("div", {
          class: `${s}-base-selection-tag-wrapper`,
          key: "__counter__"
        }, h(Jo, {
          size: r,
          ref: "counterRef",
          onMouseenter: this.handleMouseEnterCounter,
          disabled: o
        }, {
          default: () => `+${t}`
        })));
      }
      const C = p ? i ? h(Ga, {
        ref: "overflowRef",
        updateCounter: this.updateCounter,
        getCounter: this.getCounter,
        getTail: this.getTail,
        style: {
          width: "100%",
          display: "flex",
          overflow: "hidden"
        }
      }, {
        default: A,
        counter: S,
        tail: () => y
      }) : h(Ga, {
        ref: "overflowRef",
        updateCounter: this.updateCounter,
        getCounter: this.getCounter,
        style: {
          width: "100%",
          display: "flex",
          overflow: "hidden"
        }
      }, {
        default: A,
        counter: S
      }) : m && E ? A().concat(E) : A(), $ = v ? () => h("div", {
        class: `${s}-base-selection-popover`
      }, p ? A() : this.selectedOptions.map(B)) : void 0, M = v ? Object.assign({
        show: this.showTagsPanel,
        trigger: "hover",
        overlap: !0,
        placement: "top",
        width: "trigger",
        onUpdateShow: this.onPopoverUpdateShow,
        theme: this.mergedTheme.peers.Popover,
        themeOverrides: this.mergedTheme.peerOverrides.Popover
      }, u) : null, K = (this.selected ? !1 : this.active ? !this.pattern && !this.isComposing : !0) ? h("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`
      }, h("div", {
        class: `${s}-base-selection-placeholder__inner`
      }, this.placeholder)) : null, H = i ? h("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-tags`
      }, C, p ? null : y, g) : h("div", {
        ref: "multipleElRef",
        class: `${s}-base-selection-tags`,
        tabindex: o ? void 0 : 0
      }, C, g);
      b = h(ht, null, v ? h(Rr, Object.assign({}, M, {
        scrollable: !0,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => H,
        default: $
      }) : H, K);
    } else if (i) {
      const x = this.pattern || this.isComposing, B = this.active ? !x : !this.selected, A = this.active ? !1 : this.selected;
      b = h("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-label`,
        title: this.patternInputFocused ? void 0 : Ca(this.label)
      }, h("input", Object.assign({}, this.inputProps, {
        ref: "patternInputRef",
        class: `${s}-base-selection-input`,
        value: this.active ? this.pattern : "",
        placeholder: "",
        readonly: o,
        disabled: o,
        tabindex: -1,
        autofocus: this.autofocus,
        onFocus: this.handlePatternInputFocus,
        onBlur: this.handlePatternInputBlur,
        onInput: this.handlePatternInputInput,
        onCompositionstart: this.handleCompositionStart,
        onCompositionend: this.handleCompositionEnd
      })), A ? h("div", {
        class: `${s}-base-selection-label__render-label ${s}-base-selection-overlay`,
        key: "input"
      }, h("div", {
        class: `${s}-base-selection-overlay__wrapper`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : f ? f(this.selectedOption, !0) : Qe(this.label, this.selectedOption, !0))) : null, B ? h("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`,
        key: "placeholder"
      }, h("div", {
        class: `${s}-base-selection-overlay__wrapper`
      }, this.filterablePlaceholder)) : null, g);
    } else
      b = h("div", {
        ref: "singleElRef",
        class: `${s}-base-selection-label`,
        tabindex: this.disabled ? void 0 : 0
      }, this.label !== void 0 ? h("div", {
        class: `${s}-base-selection-input`,
        title: Ca(this.label),
        key: "input"
      }, h("div", {
        class: `${s}-base-selection-input__content`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : f ? f(this.selectedOption, !0) : Qe(this.label, this.selectedOption, !0))) : h("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`,
        key: "placeholder"
      }, h("div", {
        class: `${s}-base-selection-placeholder__inner`
      }, this.placeholder)), g);
    return h("div", {
      ref: "selfRef",
      class: [`${s}-base-selection`, this.rtlEnabled && `${s}-base-selection--rtl`, this.themeClass, e && `${s}-base-selection--${e}-status`, {
        [`${s}-base-selection--active`]: this.active,
        [`${s}-base-selection--selected`]: this.selected || this.active && this.pattern,
        [`${s}-base-selection--disabled`]: this.disabled,
        [`${s}-base-selection--multiple`]: this.multiple,
        // focus is not controlled by selection itself since it always need
        // to be managed together with menu. provide :focus style will cause
        // many redundant codes.
        [`${s}-base-selection--focus`]: this.focused
      }],
      style: this.cssVars,
      onClick: this.onClick,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onKeydown: this.onKeydown,
      onFocusin: this.handleFocusin,
      onFocusout: this.handleFocusout,
      onMousedown: this.handleMouseDown
    }, b, l ? h("div", {
      class: `${s}-base-selection__border`
    }) : null, l ? h("div", {
      class: `${s}-base-selection__state-border`
    }) : null);
  }
}), {
  cubicBezierEaseInOut: Qt
} = sn;
function Gm({
  duration: e = ".2s",
  delay: n = ".1s"
} = {}) {
  return [z("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", {
    opacity: 1
  }), z("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), z("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${Qt},
 max-width ${e} ${Qt} ${n},
 margin-left ${e} ${Qt} ${n},
 margin-right ${e} ${Qt} ${n};
 `), z("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${Qt} ${n},
 max-width ${e} ${Qt},
 margin-left ${e} ${Qt},
 margin-right ${e} ${Qt};
 `)];
}
const {
  cubicBezierEaseInOut: Ft,
  cubicBezierEaseOut: Xm,
  cubicBezierEaseIn: Ym
} = sn;
function Zm({
  overflow: e = "hidden",
  duration: n = ".3s",
  originalTransition: r = "",
  leavingDelay: o = "0s",
  foldPadding: i = !1,
  enterToProps: a = void 0,
  leaveToProps: l = void 0,
  reverse: s = !1
} = {}) {
  const u = s ? "leave" : "enter", d = s ? "enter" : "leave";
  return [z(`&.fade-in-height-expand-transition-${d}-from,
 &.fade-in-height-expand-transition-${u}-to`, Object.assign(Object.assign({}, a), {
    opacity: 1
  })), z(`&.fade-in-height-expand-transition-${d}-to,
 &.fade-in-height-expand-transition-${u}-from`, Object.assign(Object.assign({}, l), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: i ? "0 !important" : void 0,
    paddingBottom: i ? "0 !important" : void 0
  })), z(`&.fade-in-height-expand-transition-${d}-active`, `
 overflow: ${e};
 transition:
 max-height ${n} ${Ft} ${o},
 opacity ${n} ${Xm} ${o},
 margin-top ${n} ${Ft} ${o},
 margin-bottom ${n} ${Ft} ${o},
 padding-top ${n} ${Ft} ${o},
 padding-bottom ${n} ${Ft} ${o}
 ${r ? `,${r}` : ""}
 `), z(`&.fade-in-height-expand-transition-${u}-active`, `
 overflow: ${e};
 transition:
 max-height ${n} ${Ft},
 opacity ${n} ${Ym},
 margin-top ${n} ${Ft},
 margin-bottom ${n} ${Ft},
 padding-top ${n} ${Ft},
 padding-bottom ${n} ${Ft}
 ${r ? `,${r}` : ""}
 `)];
}
function vo(e) {
  return e.type === "group";
}
function zu(e) {
  return e.type === "ignored";
}
function Qo(e, n) {
  try {
    return !!(1 + n.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
function Jm(e, n) {
  return {
    getIsGroup: vo,
    getIgnored: zu,
    getKey(o) {
      return vo(o) ? o.name || o.key || "key-required" : o[e];
    },
    getChildren(o) {
      return o[n];
    }
  };
}
function Qm(e, n, r, o) {
  if (!n) return e;
  function i(a) {
    if (!Array.isArray(a)) return [];
    const l = [];
    for (const s of a)
      if (vo(s)) {
        const u = i(s[o]);
        u.length && l.push(Object.assign({}, s, {
          [o]: u
        }));
      } else {
        if (zu(s))
          continue;
        n(r, s) && l.push(s);
      }
    return l;
  }
  return i(e);
}
function eb(e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return e.forEach((i) => {
    vo(i) ? i[r].forEach((a) => {
      o.set(a[n], a);
    }) : o.set(i[n], i);
  }), o;
}
const tb = Pr && "chrome" in window;
Pr && navigator.userAgent.includes("Firefox");
const Tu = Pr && navigator.userAgent.includes("Safari") && !tb, nb = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function rb(e) {
  const {
    textColor2: n,
    textColor3: r,
    textColorDisabled: o,
    primaryColor: i,
    primaryColorHover: a,
    inputColor: l,
    inputColorDisabled: s,
    borderColor: u,
    warningColor: d,
    warningColorHover: c,
    errorColor: f,
    errorColorHover: p,
    borderRadius: m,
    lineHeight: v,
    fontSizeTiny: g,
    fontSizeSmall: b,
    fontSizeMedium: x,
    fontSizeLarge: B,
    heightTiny: A,
    heightSmall: y,
    heightMedium: S,
    heightLarge: E,
    actionColor: C,
    clearColor: $,
    clearColorHover: M,
    clearColorPressed: I,
    placeholderColor: K,
    placeholderColorDisabled: H,
    iconColor: t,
    iconColorDisabled: F,
    iconColorHover: D,
    iconColorPressed: _
  } = e;
  return Object.assign(Object.assign({}, nb), {
    countTextColorDisabled: o,
    countTextColor: r,
    heightTiny: A,
    heightSmall: y,
    heightMedium: S,
    heightLarge: E,
    fontSizeTiny: g,
    fontSizeSmall: b,
    fontSizeMedium: x,
    fontSizeLarge: B,
    lineHeight: v,
    lineHeightTextarea: v,
    borderRadius: m,
    iconSize: "16px",
    groupLabelColor: C,
    groupLabelTextColor: n,
    textColor: n,
    textColorDisabled: o,
    textDecorationColor: n,
    caretColor: i,
    placeholderColor: K,
    placeholderColorDisabled: H,
    color: l,
    colorDisabled: s,
    colorFocus: l,
    groupLabelBorder: `1px solid ${u}`,
    border: `1px solid ${u}`,
    borderHover: `1px solid ${a}`,
    borderDisabled: `1px solid ${u}`,
    borderFocus: `1px solid ${a}`,
    boxShadowFocus: `0 0 0 2px ${ge(i, {
      alpha: 0.2
    })}`,
    loadingColor: i,
    // warning
    loadingColorWarning: d,
    borderWarning: `1px solid ${d}`,
    borderHoverWarning: `1px solid ${c}`,
    colorFocusWarning: l,
    borderFocusWarning: `1px solid ${c}`,
    boxShadowFocusWarning: `0 0 0 2px ${ge(d, {
      alpha: 0.2
    })}`,
    caretColorWarning: d,
    // error
    loadingColorError: f,
    borderError: `1px solid ${f}`,
    borderHoverError: `1px solid ${p}`,
    colorFocusError: l,
    borderFocusError: `1px solid ${p}`,
    boxShadowFocusError: `0 0 0 2px ${ge(f, {
      alpha: 0.2
    })}`,
    caretColorError: f,
    clearColor: $,
    clearColorHover: M,
    clearColorPressed: I,
    iconColor: t,
    iconColorDisabled: F,
    iconColorHover: D,
    iconColorPressed: _,
    suffixTextColor: n
  });
}
const Ru = {
  name: "Input",
  common: Ve,
  self: rb
}, Ou = "n-input";
function ob(e) {
  let n = 0;
  for (const r of e)
    n++;
  return n;
}
function Gr(e) {
  return e === "" || e == null;
}
function ib(e) {
  const n = L(null);
  function r() {
    const {
      value: a
    } = e;
    if (!(a != null && a.focus)) {
      i();
      return;
    }
    const {
      selectionStart: l,
      selectionEnd: s,
      value: u
    } = a;
    if (l == null || s == null) {
      i();
      return;
    }
    n.value = {
      start: l,
      end: s,
      beforeText: u.slice(0, l),
      afterText: u.slice(s)
    };
  }
  function o() {
    var a;
    const {
      value: l
    } = n, {
      value: s
    } = e;
    if (!l || !s)
      return;
    const {
      value: u
    } = s, {
      start: d,
      beforeText: c,
      afterText: f
    } = l;
    let p = u.length;
    if (u.endsWith(f))
      p = u.length - f.length;
    else if (u.startsWith(c))
      p = c.length;
    else {
      const m = c[d - 1], v = u.indexOf(m, d - 1);
      v !== -1 && (p = v + 1);
    }
    (a = s.setSelectionRange) === null || a === void 0 || a.call(s, p, p);
  }
  function i() {
    n.value = null;
  }
  return ze(e, i), {
    recordCursor: r,
    restoreCursor: o
  };
}
const Il = Q({
  name: "InputWordCount",
  setup(e, {
    slots: n
  }) {
    const {
      mergedValueRef: r,
      maxlengthRef: o,
      mergedClsPrefixRef: i,
      countGraphemesRef: a
    } = xe(Ou), l = R(() => {
      const {
        value: s
      } = r;
      return s === null || Array.isArray(s) ? 0 : (a.value || ob)(s);
    });
    return () => {
      const {
        value: s
      } = o, {
        value: u
      } = r;
      return h("span", {
        class: `${i.value}-input-word-count`
      }, ii(n.default, {
        value: u === null || Array.isArray(u) ? "" : u
      }, () => [s === void 0 ? l.value : `${l.value} / ${s}`]));
    };
  }
}), ab = O("input", `
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
  k("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),
  k("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
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
  k("input-el, textarea-el", `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [z("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), z("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), z("&:-webkit-autofill ~", [k("placeholder", "display: none;")])]),
  V("round", [He("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  k("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [z("span", `
 width: 100%;
 display: inline-block;
 `)]),
  V("textarea", [k("placeholder", "overflow: visible;")]),
  He("autosize", "width: 100%;"),
  V("autosize", [k("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  O("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),
  k("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),
  k("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [z("&[type=password]::-ms-reveal", "display: none;"), z("+", [k("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  He("textarea", [k("placeholder", "white-space: nowrap;")]),
  k("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  V("textarea", "width: 100%;", [O("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), V("resizable", [O("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), k("textarea-el, textarea-mirror, placeholder", `
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
 `), k("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
  // pair
  V("pair", [k("input-el, placeholder", "text-align: center;"), k("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [O("icon", `
 color: var(--n-icon-color);
 `), O("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  V("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [k("border", "border: var(--n-border-disabled);"), k("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), k("placeholder", "color: var(--n-placeholder-color-disabled);"), k("separator", "color: var(--n-text-color-disabled);", [O("icon", `
 color: var(--n-icon-color-disabled);
 `), O("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), O("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), k("suffix, prefix", "color: var(--n-text-color-disabled);", [O("icon", `
 color: var(--n-icon-color-disabled);
 `), O("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  He("disabled", [k("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [z("&:hover", `
 color: var(--n-icon-color-hover);
 `), z("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), z("&:hover", [k("state-border", "border: var(--n-border-hover);")]), V("focus", "background-color: var(--n-color-focus);", [k("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),
  k("border, state-border", `
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
  k("state-border", `
 border-color: #0000;
 z-index: 1;
 `),
  k("prefix", "margin-right: 4px;"),
  k("suffix", `
 margin-left: 4px;
 `),
  k("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [O("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), O("base-clear", `
 font-size: var(--n-icon-size);
 `, [k("placeholder", [O("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), z(">", [O("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), O("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  O("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((e) => V(`${e}-status`, [He("disabled", [O("base-loading", `
 color: var(--n-loading-color-${e})
 `), k("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), k("state-border", `
 border: var(--n-border-${e});
 `), z("&:hover", [k("state-border", `
 border: var(--n-border-hover-${e});
 `)]), z("&:focus", `
 background-color: var(--n-color-focus-${e});
 `, [k("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]), V("focus", `
 background-color: var(--n-color-focus-${e});
 `, [k("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))
]), lb = O("input", [V("disabled", [k("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]), sb = Object.assign(Object.assign({}, ce.props), {
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
}), ub = Q({
  name: "Input",
  props: sb,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.showPasswordToggle && nt("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: n,
      mergedBorderedRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Pe(e), a = ce("Input", "-input", ab, Ru, e, n);
    Tu && $n("-input-safari", lb, n);
    const l = L(null), s = L(null), u = L(null), d = L(null), c = L(null), f = L(null), p = L(null), m = ib(p), v = L(null), {
      localeRef: g
    } = Sr("Input"), b = L(e.defaultValue), x = le(e, "value"), B = Gn(x, b), A = qi(e), {
      mergedSizeRef: y,
      mergedDisabledRef: S,
      mergedStatusRef: E
    } = A, C = L(!1), $ = L(!1), M = L(!1), I = L(!1);
    let K = null;
    const H = R(() => {
      const {
        placeholder: P,
        pair: q
      } = e;
      return q ? Array.isArray(P) ? P : P === void 0 ? ["", ""] : [P, P] : P === void 0 ? [g.value.placeholder] : [P];
    }), t = R(() => {
      const {
        value: P
      } = M, {
        value: q
      } = B, {
        value: se
      } = H;
      return !P && (Gr(q) || Array.isArray(q) && Gr(q[0])) && se[0];
    }), F = R(() => {
      const {
        value: P
      } = M, {
        value: q
      } = B, {
        value: se
      } = H;
      return !P && se[1] && (Gr(q) || Array.isArray(q) && Gr(q[1]));
    }), D = We(() => e.internalForceFocus || C.value), _ = We(() => {
      if (S.value || e.readonly || !e.clearable || !D.value && !$.value)
        return !1;
      const {
        value: P
      } = B, {
        value: q
      } = D;
      return e.pair ? !!(Array.isArray(P) && (P[0] || P[1])) && ($.value || q) : !!P && ($.value || q);
    }), T = R(() => {
      const {
        showPasswordOn: P
      } = e;
      if (P)
        return P;
      if (e.showPasswordToggle) return "click";
    }), j = L(!1), J = R(() => {
      const {
        textDecoration: P
      } = e;
      return P ? Array.isArray(P) ? P.map((q) => ({
        textDecoration: q
      })) : [{
        textDecoration: P
      }] : ["", ""];
    }), Z = L(void 0), ae = () => {
      var P, q;
      if (e.type === "textarea") {
        const {
          autosize: se
        } = e;
        if (se && (Z.value = (q = (P = v.value) === null || P === void 0 ? void 0 : P.$el) === null || q === void 0 ? void 0 : q.offsetWidth), !s.value || typeof se == "boolean") return;
        const {
          paddingTop: $e,
          paddingBottom: Ie,
          lineHeight: Ae
        } = window.getComputedStyle(s.value), It = Number($e.slice(0, -2)), _t = Number(Ie.slice(0, -2)), Lt = Number(Ae.slice(0, -2)), {
          value: dn
        } = u;
        if (!dn) return;
        if (se.minRows) {
          const cn = Math.max(se.minRows, 1), tr = `${It + _t + Lt * cn}px`;
          dn.style.minHeight = tr;
        }
        if (se.maxRows) {
          const cn = `${It + _t + Lt * se.maxRows}px`;
          dn.style.maxHeight = cn;
        }
      }
    }, W = R(() => {
      const {
        maxlength: P
      } = e;
      return P === void 0 ? void 0 : Number(P);
    });
    ot(() => {
      const {
        value: P
      } = B;
      Array.isArray(P) || ke(P);
    });
    const X = $r().proxy;
    function ne(P, q) {
      const {
        onUpdateValue: se,
        "onUpdate:value": $e,
        onInput: Ie
      } = e, {
        nTriggerFormInput: Ae
      } = A;
      se && he(se, P, q), $e && he($e, P, q), Ie && he(Ie, P, q), b.value = P, Ae();
    }
    function Be(P, q) {
      const {
        onChange: se
      } = e, {
        nTriggerFormChange: $e
      } = A;
      se && he(se, P, q), b.value = P, $e();
    }
    function re(P) {
      const {
        onBlur: q
      } = e, {
        nTriggerFormBlur: se
      } = A;
      q && he(q, P), se();
    }
    function ve(P) {
      const {
        onFocus: q
      } = e, {
        nTriggerFormFocus: se
      } = A;
      q && he(q, P), se();
    }
    function Me(P) {
      const {
        onClear: q
      } = e;
      q && he(q, P);
    }
    function ie(P) {
      const {
        onInputBlur: q
      } = e;
      q && he(q, P);
    }
    function Ne(P) {
      const {
        onInputFocus: q
      } = e;
      q && he(q, P);
    }
    function Te() {
      const {
        onDeactivate: P
      } = e;
      P && he(P);
    }
    function me() {
      const {
        onActivate: P
      } = e;
      P && he(P);
    }
    function ye(P) {
      const {
        onClick: q
      } = e;
      q && he(q, P);
    }
    function be(P) {
      const {
        onWrapperFocus: q
      } = e;
      q && he(q, P);
    }
    function Ye(P) {
      const {
        onWrapperBlur: q
      } = e;
      q && he(q, P);
    }
    function tt() {
      M.value = !0;
    }
    function lt(P) {
      M.value = !1, P.target === f.value ? it(P, 1) : it(P, 0);
    }
    function it(P, q = 0, se = "input") {
      const $e = P.target.value;
      if (ke($e), P instanceof InputEvent && !P.isComposing && (M.value = !1), e.type === "textarea") {
        const {
          value: Ae
        } = v;
        Ae && Ae.syncUnifiedContainer();
      }
      if (K = $e, M.value) return;
      m.recordCursor();
      const Ie = mt($e);
      if (Ie)
        if (!e.pair)
          se === "input" ? ne($e, {
            source: q
          }) : Be($e, {
            source: q
          });
        else {
          let {
            value: Ae
          } = B;
          Array.isArray(Ae) ? Ae = [Ae[0], Ae[1]] : Ae = ["", ""], Ae[q] = $e, se === "input" ? ne(Ae, {
            source: q
          }) : Be(Ae, {
            source: q
          });
        }
      X.$forceUpdate(), Ie || et(m.restoreCursor);
    }
    function mt(P) {
      const {
        countGraphemes: q,
        maxlength: se,
        minlength: $e
      } = e;
      if (q) {
        let Ae;
        if (se !== void 0 && (Ae === void 0 && (Ae = q(P)), Ae > Number(se)) || $e !== void 0 && (Ae === void 0 && (Ae = q(P)), Ae < Number(se)))
          return !1;
      }
      const {
        allowInput: Ie
      } = e;
      return typeof Ie == "function" ? Ie(P) : !0;
    }
    function Se(P) {
      ie(P), P.relatedTarget === l.value && Te(), P.relatedTarget !== null && (P.relatedTarget === c.value || P.relatedTarget === f.value || P.relatedTarget === s.value) || (I.value = !1), G(P, "blur"), p.value = null;
    }
    function Ee(P, q) {
      Ne(P), C.value = !0, I.value = !0, me(), G(P, "focus"), q === 0 ? p.value = c.value : q === 1 ? p.value = f.value : q === 2 && (p.value = s.value);
    }
    function Xe(P) {
      e.passivelyActivated && (Ye(P), G(P, "blur"));
    }
    function qe(P) {
      e.passivelyActivated && (C.value = !0, be(P), G(P, "focus"));
    }
    function G(P, q) {
      P.relatedTarget !== null && (P.relatedTarget === c.value || P.relatedTarget === f.value || P.relatedTarget === s.value || P.relatedTarget === l.value) || (q === "focus" ? (ve(P), C.value = !0) : q === "blur" && (re(P), C.value = !1));
    }
    function ee(P, q) {
      it(P, q, "change");
    }
    function Re(P) {
      ye(P);
    }
    function un(P) {
      Me(P), Rt();
    }
    function Rt() {
      e.pair ? (ne(["", ""], {
        source: "clear"
      }), Be(["", ""], {
        source: "clear"
      })) : (ne("", {
        source: "clear"
      }), Be("", {
        source: "clear"
      }));
    }
    function Ot(P) {
      const {
        onMousedown: q
      } = e;
      q && q(P);
      const {
        tagName: se
      } = P.target;
      if (se !== "INPUT" && se !== "TEXTAREA") {
        if (e.resizable) {
          const {
            value: $e
          } = l;
          if ($e) {
            const {
              left: Ie,
              top: Ae,
              width: It,
              height: _t
            } = $e.getBoundingClientRect(), Lt = 14;
            if (Ie + It - Lt < P.clientX && P.clientX < Ie + It && Ae + _t - Lt < P.clientY && P.clientY < Ae + _t)
              return;
          }
        }
        P.preventDefault(), C.value || U();
      }
    }
    function Xt() {
      var P;
      $.value = !0, e.type === "textarea" && ((P = v.value) === null || P === void 0 || P.handleMouseEnterWrapper());
    }
    function Bt() {
      var P;
      $.value = !1, e.type === "textarea" && ((P = v.value) === null || P === void 0 || P.handleMouseLeaveWrapper());
    }
    function Mt() {
      S.value || T.value === "click" && (j.value = !j.value);
    }
    function Yt(P) {
      if (S.value) return;
      P.preventDefault();
      const q = ($e) => {
        $e.preventDefault(), De("mouseup", document, q);
      };
      if (Le("mouseup", document, q), T.value !== "mousedown") return;
      j.value = !0;
      const se = () => {
        j.value = !1, De("mouseup", document, se);
      };
      Le("mouseup", document, se);
    }
    function st(P) {
      e.onKeyup && he(e.onKeyup, P);
    }
    function bt(P) {
      switch (e.onKeydown && he(e.onKeydown, P), P.key) {
        case "Escape":
          N();
          break;
        case "Enter":
          w(P);
          break;
      }
    }
    function w(P) {
      var q, se;
      if (e.passivelyActivated) {
        const {
          value: $e
        } = I;
        if ($e) {
          e.internalDeactivateOnEnter && N();
          return;
        }
        P.preventDefault(), e.type === "textarea" ? (q = s.value) === null || q === void 0 || q.focus() : (se = c.value) === null || se === void 0 || se.focus();
      }
    }
    function N() {
      e.passivelyActivated && (I.value = !1, et(() => {
        var P;
        (P = l.value) === null || P === void 0 || P.focus();
      }));
    }
    function U() {
      var P, q, se;
      S.value || (e.passivelyActivated ? (P = l.value) === null || P === void 0 || P.focus() : ((q = s.value) === null || q === void 0 || q.focus(), (se = c.value) === null || se === void 0 || se.focus()));
    }
    function te() {
      var P;
      !((P = l.value) === null || P === void 0) && P.contains(document.activeElement) && document.activeElement.blur();
    }
    function oe() {
      var P, q;
      (P = s.value) === null || P === void 0 || P.select(), (q = c.value) === null || q === void 0 || q.select();
    }
    function de() {
      S.value || (s.value ? s.value.focus() : c.value && c.value.focus());
    }
    function fe() {
      const {
        value: P
      } = l;
      P != null && P.contains(document.activeElement) && P !== document.activeElement && N();
    }
    function pe(P) {
      if (e.type === "textarea") {
        const {
          value: q
        } = s;
        q == null || q.scrollTo(P);
      } else {
        const {
          value: q
        } = c;
        q == null || q.scrollTo(P);
      }
    }
    function ke(P) {
      const {
        type: q,
        pair: se,
        autosize: $e
      } = e;
      if (!se && $e)
        if (q === "textarea") {
          const {
            value: Ie
          } = u;
          Ie && (Ie.textContent = `${P ?? ""}\r
`);
        } else {
          const {
            value: Ie
          } = d;
          Ie && (P ? Ie.textContent = P : Ie.innerHTML = "&nbsp;");
        }
    }
    function vt() {
      ae();
    }
    const Dn = L({
      top: "0"
    });
    function Do(P) {
      var q;
      const {
        scrollTop: se
      } = P.target;
      Dn.value.top = `${-se}px`, (q = v.value) === null || q === void 0 || q.syncUnifiedContainer();
    }
    let Pn = null;
    rt(() => {
      const {
        autosize: P,
        type: q
      } = e;
      P && q === "textarea" ? Pn = ze(B, (se) => {
        !Array.isArray(se) && se !== K && ke(se);
      }) : Pn == null || Pn();
    });
    let En = null;
    rt(() => {
      e.type === "textarea" ? En = ze(B, (P) => {
        var q;
        !Array.isArray(P) && P !== K && ((q = v.value) === null || q === void 0 || q.syncUnifiedContainer());
      }) : En == null || En();
    }), we(Ou, {
      mergedValueRef: B,
      maxlengthRef: W,
      mergedClsPrefixRef: n,
      countGraphemesRef: le(e, "countGraphemes")
    });
    const Po = {
      wrapperElRef: l,
      inputElRef: c,
      textareaElRef: s,
      isCompositing: M,
      clear: Rt,
      focus: U,
      blur: te,
      select: oe,
      deactivate: fe,
      activate: de,
      scrollTo: pe
    }, Eo = wt("Input", i, n), Mr = R(() => {
      const {
        value: P
      } = y, {
        common: {
          cubicBezierEaseInOut: q
        },
        self: {
          color: se,
          borderRadius: $e,
          textColor: Ie,
          caretColor: Ae,
          caretColorError: It,
          caretColorWarning: _t,
          textDecorationColor: Lt,
          border: dn,
          borderDisabled: cn,
          borderHover: tr,
          borderFocus: ko,
          placeholderColor: zo,
          placeholderColorDisabled: To,
          lineHeightTextarea: Ro,
          colorDisabled: kn,
          colorFocus: zn,
          textColorDisabled: rd,
          boxShadowFocus: od,
          iconSize: id,
          colorFocusWarning: ad,
          boxShadowFocusWarning: ld,
          borderWarning: sd,
          borderFocusWarning: ud,
          borderHoverWarning: dd,
          colorFocusError: cd,
          boxShadowFocusError: fd,
          borderError: hd,
          borderFocusError: vd,
          borderHoverError: pd,
          clearSize: xd,
          clearColor: gd,
          clearColorHover: md,
          clearColorPressed: bd,
          iconColor: Cd,
          iconColorDisabled: yd,
          suffixTextColor: wd,
          countTextColor: Bd,
          countTextColorDisabled: Sd,
          iconColorHover: Fd,
          iconColorPressed: Ad,
          loadingColor: $d,
          loadingColorError: Dd,
          loadingColorWarning: Pd,
          [Y("padding", P)]: Ed,
          [Y("fontSize", P)]: kd,
          [Y("height", P)]: zd
        }
      } = a.value, {
        left: Td,
        right: Rd
      } = Dt(Ed);
      return {
        "--n-bezier": q,
        "--n-count-text-color": Bd,
        "--n-count-text-color-disabled": Sd,
        "--n-color": se,
        "--n-font-size": kd,
        "--n-border-radius": $e,
        "--n-height": zd,
        "--n-padding-left": Td,
        "--n-padding-right": Rd,
        "--n-text-color": Ie,
        "--n-caret-color": Ae,
        "--n-text-decoration-color": Lt,
        "--n-border": dn,
        "--n-border-disabled": cn,
        "--n-border-hover": tr,
        "--n-border-focus": ko,
        "--n-placeholder-color": zo,
        "--n-placeholder-color-disabled": To,
        "--n-icon-size": id,
        "--n-line-height-textarea": Ro,
        "--n-color-disabled": kn,
        "--n-color-focus": zn,
        "--n-text-color-disabled": rd,
        "--n-box-shadow-focus": od,
        "--n-loading-color": $d,
        // form warning
        "--n-caret-color-warning": _t,
        "--n-color-focus-warning": ad,
        "--n-box-shadow-focus-warning": ld,
        "--n-border-warning": sd,
        "--n-border-focus-warning": ud,
        "--n-border-hover-warning": dd,
        "--n-loading-color-warning": Pd,
        // form error
        "--n-caret-color-error": It,
        "--n-color-focus-error": cd,
        "--n-box-shadow-focus-error": fd,
        "--n-border-error": hd,
        "--n-border-focus-error": vd,
        "--n-border-hover-error": pd,
        "--n-loading-color-error": Dd,
        // clear-button
        "--n-clear-color": gd,
        "--n-clear-size": xd,
        "--n-clear-color-hover": md,
        "--n-clear-color-pressed": bd,
        "--n-icon-color": Cd,
        "--n-icon-color-hover": Fd,
        "--n-icon-color-pressed": Ad,
        "--n-icon-color-disabled": yd,
        "--n-suffix-text-color": wd
      };
    }), Zt = o ? je("input", R(() => {
      const {
        value: P
      } = y;
      return P[0];
    }), Mr, e) : void 0;
    return Object.assign(Object.assign({}, Po), {
      // DOM ref
      wrapperElRef: l,
      inputElRef: c,
      inputMirrorElRef: d,
      inputEl2Ref: f,
      textareaElRef: s,
      textareaMirrorElRef: u,
      textareaScrollbarInstRef: v,
      // value
      rtlEnabled: Eo,
      uncontrolledValue: b,
      mergedValue: B,
      passwordVisible: j,
      mergedPlaceholder: H,
      showPlaceholder1: t,
      showPlaceholder2: F,
      mergedFocus: D,
      isComposing: M,
      activated: I,
      showClearButton: _,
      mergedSize: y,
      mergedDisabled: S,
      textDecorationStyle: J,
      mergedClsPrefix: n,
      mergedBordered: r,
      mergedShowPasswordOn: T,
      placeholderStyle: Dn,
      mergedStatus: E,
      textAreaScrollContainerWidth: Z,
      // methods
      handleTextAreaScroll: Do,
      handleCompositionStart: tt,
      handleCompositionEnd: lt,
      handleInput: it,
      handleInputBlur: Se,
      handleInputFocus: Ee,
      handleWrapperBlur: Xe,
      handleWrapperFocus: qe,
      handleMouseEnter: Xt,
      handleMouseLeave: Bt,
      handleMouseDown: Ot,
      handleChange: ee,
      handleClick: Re,
      handleClear: un,
      handlePasswordToggleClick: Mt,
      handlePasswordToggleMousedown: Yt,
      handleWrapperKeydown: bt,
      handleWrapperKeyup: st,
      handleTextAreaMirrorResize: vt,
      getTextareaScrollContainer: () => s.value,
      mergedTheme: a,
      cssVars: o ? void 0 : Mr,
      themeClass: Zt == null ? void 0 : Zt.themeClass,
      onRender: Zt == null ? void 0 : Zt.onRender
    });
  },
  render() {
    var e, n;
    const {
      mergedClsPrefix: r,
      mergedStatus: o,
      themeClass: i,
      type: a,
      countGraphemes: l,
      onRender: s
    } = this, u = this.$slots;
    return s == null || s(), h("div", {
      ref: "wrapperElRef",
      class: [`${r}-input`, i, o && `${r}-input--${o}-status`, {
        [`${r}-input--rtl`]: this.rtlEnabled,
        [`${r}-input--disabled`]: this.mergedDisabled,
        [`${r}-input--textarea`]: a === "textarea",
        [`${r}-input--resizable`]: this.resizable && !this.autosize,
        [`${r}-input--autosize`]: this.autosize,
        [`${r}-input--round`]: this.round && a !== "textarea",
        [`${r}-input--pair`]: this.pair,
        [`${r}-input--focus`]: this.mergedFocus,
        [`${r}-input--stateful`]: this.stateful
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
    }, h("div", {
      class: `${r}-input-wrapper`
    }, _e(u.prefix, (d) => d && h("div", {
      class: `${r}-input__prefix`
    }, d)), a === "textarea" ? h(So, {
      ref: "textareaScrollbarInstRef",
      class: `${r}-input__textarea`,
      container: this.getTextareaScrollContainer,
      triggerDisplayManually: !0,
      useUnifiedContainer: !0,
      internalHoistYRail: !0
    }, {
      default: () => {
        var d, c;
        const {
          textAreaScrollContainerWidth: f
        } = this, p = {
          width: this.autosize && f && `${f}px`
        };
        return h(ht, null, h("textarea", Object.assign({}, this.inputProps, {
          ref: "textareaElRef",
          class: [`${r}-input__textarea-el`, (d = this.inputProps) === null || d === void 0 ? void 0 : d.class],
          autofocus: this.autofocus,
          rows: Number(this.rows),
          placeholder: this.placeholder,
          value: this.mergedValue,
          disabled: this.mergedDisabled,
          maxlength: l ? void 0 : this.maxlength,
          minlength: l ? void 0 : this.minlength,
          readonly: this.readonly,
          tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
          style: [this.textDecorationStyle[0], (c = this.inputProps) === null || c === void 0 ? void 0 : c.style, p],
          onBlur: this.handleInputBlur,
          onFocus: (m) => {
            this.handleInputFocus(m, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? h("div", {
          class: `${r}-input__placeholder`,
          style: [this.placeholderStyle, p],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? h(Cr, {
          onResize: this.handleTextAreaMirrorResize
        }, {
          default: () => h("div", {
            ref: "textareaMirrorElRef",
            class: `${r}-input__textarea-mirror`,
            key: "mirror"
          })
        }) : null);
      }
    }) : h("div", {
      class: `${r}-input__input`
    }, h("input", Object.assign({
      type: a === "password" && this.mergedShowPasswordOn && this.passwordVisible ? "text" : a
    }, this.inputProps, {
      ref: "inputElRef",
      class: [`${r}-input__input-el`, (e = this.inputProps) === null || e === void 0 ? void 0 : e.class],
      style: [this.textDecorationStyle[0], (n = this.inputProps) === null || n === void 0 ? void 0 : n.style],
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
      onFocus: (d) => {
        this.handleInputFocus(d, 0);
      },
      onInput: (d) => {
        this.handleInput(d, 0);
      },
      onChange: (d) => {
        this.handleChange(d, 0);
      }
    })), this.showPlaceholder1 ? h("div", {
      class: `${r}-input__placeholder`
    }, h("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? h("div", {
      class: `${r}-input__input-mirror`,
      key: "mirror",
      ref: "inputMirrorElRef"
    }, " ") : null), !this.pair && _e(u.suffix, (d) => d || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? h("div", {
      class: `${r}-input__suffix`
    }, [_e(u["clear-icon-placeholder"], (c) => (this.clearable || c) && h(Bi, {
      clsPrefix: r,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => c,
      icon: () => {
        var f, p;
        return (p = (f = this.$slots)["clear-icon"]) === null || p === void 0 ? void 0 : p.call(f);
      }
    })), this.internalLoadingBeforeSuffix ? null : d, this.loading !== void 0 ? h(Eu, {
      clsPrefix: r,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? d : null, this.showCount && this.type !== "textarea" ? h(Il, null, {
      default: (c) => {
        var f;
        return (f = u.count) === null || f === void 0 ? void 0 : f.call(u, c);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? h("div", {
      class: `${r}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? Pt(u["password-visible-icon"], () => [h(zt, {
      clsPrefix: r
    }, {
      default: () => h($g, null)
    })]) : Pt(u["password-invisible-icon"], () => [h(zt, {
      clsPrefix: r
    }, {
      default: () => h(Dg, null)
    })])) : null]) : null)), this.pair ? h("span", {
      class: `${r}-input__separator`
    }, Pt(u.separator, () => [this.separator])) : null, this.pair ? h("div", {
      class: `${r}-input-wrapper`
    }, h("div", {
      class: `${r}-input__input`
    }, h("input", {
      ref: "inputEl2Ref",
      type: this.type,
      class: `${r}-input__input-el`,
      tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
      placeholder: this.mergedPlaceholder[1],
      disabled: this.mergedDisabled,
      maxlength: l ? void 0 : this.maxlength,
      minlength: l ? void 0 : this.minlength,
      value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : void 0,
      readonly: this.readonly,
      style: this.textDecorationStyle[1],
      onBlur: this.handleInputBlur,
      onFocus: (d) => {
        this.handleInputFocus(d, 1);
      },
      onInput: (d) => {
        this.handleInput(d, 1);
      },
      onChange: (d) => {
        this.handleChange(d, 1);
      }
    }), this.showPlaceholder2 ? h("div", {
      class: `${r}-input__placeholder`
    }, h("span", null, this.mergedPlaceholder[1])) : null), _e(u.suffix, (d) => (this.clearable || d) && h("div", {
      class: `${r}-input__suffix`
    }, [this.clearable && h(Bi, {
      clsPrefix: r,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      icon: () => {
        var c;
        return (c = u["clear-icon"]) === null || c === void 0 ? void 0 : c.call(u);
      },
      placeholder: () => {
        var c;
        return (c = u["clear-icon-placeholder"]) === null || c === void 0 ? void 0 : c.call(u);
      }
    }), d]))) : null, this.mergedBordered ? h("div", {
      class: `${r}-input__border`
    }) : null, this.mergedBordered ? h("div", {
      class: `${r}-input__state-border`
    }) : null, this.showCount && a === "textarea" ? h(Il, null, {
      default: (d) => {
        var c;
        const {
          renderCount: f
        } = this;
        return f ? f(d) : (c = u.count) === null || c === void 0 ? void 0 : c.call(u, d);
      }
    }) : null);
  }
}), db = O("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [z(">", [O("input", [z("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), z("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), O("button", [z("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [k("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), z("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [k("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), z("*", [z("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [z(">", [O("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), O("base-selection", [O("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), O("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), k("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), z("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [z(">", [O("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), O("base-selection", [O("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), O("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), k("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), cb = {}, fb = Q({
  name: "InputGroup",
  props: cb,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Pe(e);
    return $n("-input-group", db, n), {
      mergedClsPrefix: n
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return h("div", {
      class: `${e}-input-group`
    }, this.$slots);
  }
}), hb = O("input-group-label", `
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
`, [k("border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]), vb = Object.assign(Object.assign({}, ce.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
}), pb = Q({
  name: "InputGroupLabel",
  props: vb,
  setup(e) {
    const {
      mergedBorderedRef: n,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Pe(e), i = ce("Input", "-input-group-label", hb, Ru, e, r), a = R(() => {
      const {
        size: s
      } = e, {
        common: {
          cubicBezierEaseInOut: u
        },
        self: {
          groupLabelColor: d,
          borderRadius: c,
          groupLabelTextColor: f,
          lineHeight: p,
          groupLabelBorder: m,
          [Y("fontSize", s)]: v,
          [Y("height", s)]: g
        }
      } = i.value;
      return {
        "--n-bezier": u,
        "--n-group-label-color": d,
        "--n-group-label-border": m,
        "--n-border-radius": c,
        "--n-group-label-text-color": f,
        "--n-font-size": v,
        "--n-line-height": p,
        "--n-height": g
      };
    }), l = o ? je("input-group-label", R(() => e.size[0]), a, e) : void 0;
    return {
      mergedClsPrefix: r,
      mergedBordered: n,
      cssVars: o ? void 0 : a,
      themeClass: l == null ? void 0 : l.themeClass,
      onRender: l == null ? void 0 : l.onRender
    };
  },
  render() {
    var e, n, r;
    const {
      mergedClsPrefix: o
    } = this;
    return (e = this.onRender) === null || e === void 0 || e.call(this), h("div", {
      class: [`${o}-input-group-label`, this.themeClass],
      style: this.cssVars
    }, (r = (n = this.$slots).default) === null || r === void 0 ? void 0 : r.call(n), this.mergedBordered ? h("div", {
      class: `${o}-input-group-label__border`
    }) : null);
  }
});
function fn(e) {
  return ut(e, [255, 255, 255, 0.16]);
}
function Xr(e) {
  return ut(e, [0, 0, 0, 0.12]);
}
const xb = "n-button-group", gb = {
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
function mb(e) {
  const {
    heightTiny: n,
    heightSmall: r,
    heightMedium: o,
    heightLarge: i,
    borderRadius: a,
    fontSizeTiny: l,
    fontSizeSmall: s,
    fontSizeMedium: u,
    fontSizeLarge: d,
    opacityDisabled: c,
    textColor2: f,
    textColor3: p,
    primaryColorHover: m,
    primaryColorPressed: v,
    borderColor: g,
    primaryColor: b,
    baseColor: x,
    infoColor: B,
    infoColorHover: A,
    infoColorPressed: y,
    successColor: S,
    successColorHover: E,
    successColorPressed: C,
    warningColor: $,
    warningColorHover: M,
    warningColorPressed: I,
    errorColor: K,
    errorColorHover: H,
    errorColorPressed: t,
    fontWeight: F,
    buttonColor2: D,
    buttonColor2Hover: _,
    buttonColor2Pressed: T,
    fontWeightStrong: j
  } = e;
  return Object.assign(Object.assign({}, gb), {
    heightTiny: n,
    heightSmall: r,
    heightMedium: o,
    heightLarge: i,
    borderRadiusTiny: a,
    borderRadiusSmall: a,
    borderRadiusMedium: a,
    borderRadiusLarge: a,
    fontSizeTiny: l,
    fontSizeSmall: s,
    fontSizeMedium: u,
    fontSizeLarge: d,
    opacityDisabled: c,
    // secondary
    colorOpacitySecondary: "0.16",
    colorOpacitySecondaryHover: "0.22",
    colorOpacitySecondaryPressed: "0.28",
    colorSecondary: D,
    colorSecondaryHover: _,
    colorSecondaryPressed: T,
    // tertiary
    colorTertiary: D,
    colorTertiaryHover: _,
    colorTertiaryPressed: T,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: _,
    colorQuaternaryPressed: T,
    // default type
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: f,
    textColorTertiary: p,
    textColorHover: m,
    textColorPressed: v,
    textColorFocus: m,
    textColorDisabled: f,
    textColorText: f,
    textColorTextHover: m,
    textColorTextPressed: v,
    textColorTextFocus: m,
    textColorTextDisabled: f,
    textColorGhost: f,
    textColorGhostHover: m,
    textColorGhostPressed: v,
    textColorGhostFocus: m,
    textColorGhostDisabled: f,
    border: `1px solid ${g}`,
    borderHover: `1px solid ${m}`,
    borderPressed: `1px solid ${v}`,
    borderFocus: `1px solid ${m}`,
    borderDisabled: `1px solid ${g}`,
    rippleColor: b,
    // primary
    colorPrimary: b,
    colorHoverPrimary: m,
    colorPressedPrimary: v,
    colorFocusPrimary: m,
    colorDisabledPrimary: b,
    textColorPrimary: x,
    textColorHoverPrimary: x,
    textColorPressedPrimary: x,
    textColorFocusPrimary: x,
    textColorDisabledPrimary: x,
    textColorTextPrimary: b,
    textColorTextHoverPrimary: m,
    textColorTextPressedPrimary: v,
    textColorTextFocusPrimary: m,
    textColorTextDisabledPrimary: f,
    textColorGhostPrimary: b,
    textColorGhostHoverPrimary: m,
    textColorGhostPressedPrimary: v,
    textColorGhostFocusPrimary: m,
    textColorGhostDisabledPrimary: b,
    borderPrimary: `1px solid ${b}`,
    borderHoverPrimary: `1px solid ${m}`,
    borderPressedPrimary: `1px solid ${v}`,
    borderFocusPrimary: `1px solid ${m}`,
    borderDisabledPrimary: `1px solid ${b}`,
    rippleColorPrimary: b,
    // info
    colorInfo: B,
    colorHoverInfo: A,
    colorPressedInfo: y,
    colorFocusInfo: A,
    colorDisabledInfo: B,
    textColorInfo: x,
    textColorHoverInfo: x,
    textColorPressedInfo: x,
    textColorFocusInfo: x,
    textColorDisabledInfo: x,
    textColorTextInfo: B,
    textColorTextHoverInfo: A,
    textColorTextPressedInfo: y,
    textColorTextFocusInfo: A,
    textColorTextDisabledInfo: f,
    textColorGhostInfo: B,
    textColorGhostHoverInfo: A,
    textColorGhostPressedInfo: y,
    textColorGhostFocusInfo: A,
    textColorGhostDisabledInfo: B,
    borderInfo: `1px solid ${B}`,
    borderHoverInfo: `1px solid ${A}`,
    borderPressedInfo: `1px solid ${y}`,
    borderFocusInfo: `1px solid ${A}`,
    borderDisabledInfo: `1px solid ${B}`,
    rippleColorInfo: B,
    // success
    colorSuccess: S,
    colorHoverSuccess: E,
    colorPressedSuccess: C,
    colorFocusSuccess: E,
    colorDisabledSuccess: S,
    textColorSuccess: x,
    textColorHoverSuccess: x,
    textColorPressedSuccess: x,
    textColorFocusSuccess: x,
    textColorDisabledSuccess: x,
    textColorTextSuccess: S,
    textColorTextHoverSuccess: E,
    textColorTextPressedSuccess: C,
    textColorTextFocusSuccess: E,
    textColorTextDisabledSuccess: f,
    textColorGhostSuccess: S,
    textColorGhostHoverSuccess: E,
    textColorGhostPressedSuccess: C,
    textColorGhostFocusSuccess: E,
    textColorGhostDisabledSuccess: S,
    borderSuccess: `1px solid ${S}`,
    borderHoverSuccess: `1px solid ${E}`,
    borderPressedSuccess: `1px solid ${C}`,
    borderFocusSuccess: `1px solid ${E}`,
    borderDisabledSuccess: `1px solid ${S}`,
    rippleColorSuccess: S,
    // warning
    colorWarning: $,
    colorHoverWarning: M,
    colorPressedWarning: I,
    colorFocusWarning: M,
    colorDisabledWarning: $,
    textColorWarning: x,
    textColorHoverWarning: x,
    textColorPressedWarning: x,
    textColorFocusWarning: x,
    textColorDisabledWarning: x,
    textColorTextWarning: $,
    textColorTextHoverWarning: M,
    textColorTextPressedWarning: I,
    textColorTextFocusWarning: M,
    textColorTextDisabledWarning: f,
    textColorGhostWarning: $,
    textColorGhostHoverWarning: M,
    textColorGhostPressedWarning: I,
    textColorGhostFocusWarning: M,
    textColorGhostDisabledWarning: $,
    borderWarning: `1px solid ${$}`,
    borderHoverWarning: `1px solid ${M}`,
    borderPressedWarning: `1px solid ${I}`,
    borderFocusWarning: `1px solid ${M}`,
    borderDisabledWarning: `1px solid ${$}`,
    rippleColorWarning: $,
    // error
    colorError: K,
    colorHoverError: H,
    colorPressedError: t,
    colorFocusError: H,
    colorDisabledError: K,
    textColorError: x,
    textColorHoverError: x,
    textColorPressedError: x,
    textColorFocusError: x,
    textColorDisabledError: x,
    textColorTextError: K,
    textColorTextHoverError: H,
    textColorTextPressedError: t,
    textColorTextFocusError: H,
    textColorTextDisabledError: f,
    textColorGhostError: K,
    textColorGhostHoverError: H,
    textColorGhostPressedError: t,
    textColorGhostFocusError: H,
    textColorGhostDisabledError: K,
    borderError: `1px solid ${K}`,
    borderHoverError: `1px solid ${H}`,
    borderPressedError: `1px solid ${t}`,
    borderFocusError: `1px solid ${H}`,
    borderDisabledError: `1px solid ${K}`,
    rippleColorError: K,
    waveOpacity: "0.6",
    fontWeight: F,
    fontWeightStrong: j
  });
}
const ua = {
  name: "Button",
  common: Ve,
  self: mb
}, bb = z([O("button", `
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
 `, [V("color", [k("border", {
  borderColor: "var(--n-border-color)"
}), V("disabled", [k("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), He("disabled", [z("&:focus", [k("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), z("&:hover", [k("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), z("&:active", [k("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), V("pressed", [k("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), V("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [k("border", {
  border: "var(--n-border-disabled)"
})]), He("disabled", [z("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [k("state-border", {
  border: "var(--n-border-focus)"
})]), z("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [k("state-border", {
  border: "var(--n-border-hover)"
})]), z("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [k("state-border", {
  border: "var(--n-border-pressed)"
})]), V("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [k("state-border", {
  border: "var(--n-border-pressed)"
})])]), V("loading", "cursor: wait;"), O("base-wave", `
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
})]), Pr && "MozBoxSizing" in document.createElement("div").style ? z("&::moz-focus-inner", {
  border: 0
}) : null, k("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), k("border", {
  border: "var(--n-border)"
}), k("state-border", {
  border: "var(--n-border)",
  borderColor: "#0000",
  zIndex: 1
}), k("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [O("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [fo({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), Gm()]), k("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [z("~", [k("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), V("block", `
 display: flex;
 width: 100%;
 `), V("dashed", [k("border, state-border", {
  borderStyle: "dashed !important"
})]), V("disabled", {
  cursor: "not-allowed",
  opacity: "var(--n-opacity-disabled)"
})]), z("@keyframes button-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
  }
}), z("@keyframes button-wave-opacity", {
  from: {
    opacity: "var(--n-wave-opacity)"
  },
  to: {
    opacity: 0
  }
})]), Cb = Object.assign(Object.assign({}, ce.props), {
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
    default: !Tu
  }
}), Fr = Q({
  name: "Button",
  props: Cb,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      const {
        dashed: y,
        ghost: S,
        text: E,
        secondary: C,
        tertiary: $,
        quaternary: M
      } = e;
      (y || S || E) && (C || $ || M) && nt("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const n = L(null), r = L(null), o = L(!1), i = We(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = xe(xb, {}), {
      mergedSizeRef: l
    } = qi({}, {
      defaultSize: "medium",
      mergedSize: (y) => {
        const {
          size: S
        } = e;
        if (S) return S;
        const {
          size: E
        } = a;
        if (E) return E;
        const {
          mergedSize: C
        } = y || {};
        return C ? C.value : "medium";
      }
    }), s = R(() => e.focusable && !e.disabled), u = (y) => {
      var S;
      s.value || y.preventDefault(), !e.nativeFocusBehavior && (y.preventDefault(), !e.disabled && s.value && ((S = n.value) === null || S === void 0 || S.focus({
        preventScroll: !0
      })));
    }, d = (y) => {
      var S;
      if (!e.disabled && !e.loading) {
        const {
          onClick: E
        } = e;
        E && he(E, y), e.text || (S = r.value) === null || S === void 0 || S.play();
      }
    }, c = (y) => {
      switch (y.key) {
        case "Enter":
          if (!e.keyboard)
            return;
          o.value = !1;
      }
    }, f = (y) => {
      switch (y.key) {
        case "Enter":
          if (!e.keyboard || e.loading) {
            y.preventDefault();
            return;
          }
          o.value = !0;
      }
    }, p = () => {
      o.value = !1;
    }, {
      inlineThemeDisabled: m,
      mergedClsPrefixRef: v,
      mergedRtlRef: g
    } = Pe(e), b = ce("Button", "-button", bb, ua, e, v), x = wt("Button", g, v), B = R(() => {
      const y = b.value, {
        common: {
          cubicBezierEaseInOut: S,
          cubicBezierEaseOut: E
        },
        self: C
      } = y, {
        rippleDuration: $,
        opacityDisabled: M,
        fontWeight: I,
        fontWeightStrong: K
      } = C, H = l.value, {
        dashed: t,
        type: F,
        ghost: D,
        text: _,
        color: T,
        round: j,
        circle: J,
        textColor: Z,
        secondary: ae,
        tertiary: W,
        quaternary: X,
        strong: ne
      } = e, Be = {
        "--n-font-weight": ne ? K : I
      };
      let re = {
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
      const ve = F === "tertiary", Me = F === "default", ie = ve ? "default" : F;
      if (_) {
        const Se = Z || T;
        re = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": Se || C[Y("textColorText", ie)],
          "--n-text-color-hover": Se ? fn(Se) : C[Y("textColorTextHover", ie)],
          "--n-text-color-pressed": Se ? Xr(Se) : C[Y("textColorTextPressed", ie)],
          "--n-text-color-focus": Se ? fn(Se) : C[Y("textColorTextHover", ie)],
          "--n-text-color-disabled": Se || C[Y("textColorTextDisabled", ie)]
        };
      } else if (D || t) {
        const Se = Z || T;
        re = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": T || C[Y("rippleColor", ie)],
          "--n-text-color": Se || C[Y("textColorGhost", ie)],
          "--n-text-color-hover": Se ? fn(Se) : C[Y("textColorGhostHover", ie)],
          "--n-text-color-pressed": Se ? Xr(Se) : C[Y("textColorGhostPressed", ie)],
          "--n-text-color-focus": Se ? fn(Se) : C[Y("textColorGhostHover", ie)],
          "--n-text-color-disabled": Se || C[Y("textColorGhostDisabled", ie)]
        };
      } else if (ae) {
        const Se = Me ? C.textColor : ve ? C.textColorTertiary : C[Y("color", ie)], Ee = T || Se, Xe = F !== "default" && F !== "tertiary";
        re = {
          "--n-color": Xe ? ge(Ee, {
            alpha: Number(C.colorOpacitySecondary)
          }) : C.colorSecondary,
          "--n-color-hover": Xe ? ge(Ee, {
            alpha: Number(C.colorOpacitySecondaryHover)
          }) : C.colorSecondaryHover,
          "--n-color-pressed": Xe ? ge(Ee, {
            alpha: Number(C.colorOpacitySecondaryPressed)
          }) : C.colorSecondaryPressed,
          "--n-color-focus": Xe ? ge(Ee, {
            alpha: Number(C.colorOpacitySecondaryHover)
          }) : C.colorSecondaryHover,
          "--n-color-disabled": C.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": Ee,
          "--n-text-color-hover": Ee,
          "--n-text-color-pressed": Ee,
          "--n-text-color-focus": Ee,
          "--n-text-color-disabled": Ee
        };
      } else if (W || X) {
        const Se = Me ? C.textColor : ve ? C.textColorTertiary : C[Y("color", ie)], Ee = T || Se;
        W ? (re["--n-color"] = C.colorTertiary, re["--n-color-hover"] = C.colorTertiaryHover, re["--n-color-pressed"] = C.colorTertiaryPressed, re["--n-color-focus"] = C.colorSecondaryHover, re["--n-color-disabled"] = C.colorTertiary) : (re["--n-color"] = C.colorQuaternary, re["--n-color-hover"] = C.colorQuaternaryHover, re["--n-color-pressed"] = C.colorQuaternaryPressed, re["--n-color-focus"] = C.colorQuaternaryHover, re["--n-color-disabled"] = C.colorQuaternary), re["--n-ripple-color"] = "#0000", re["--n-text-color"] = Ee, re["--n-text-color-hover"] = Ee, re["--n-text-color-pressed"] = Ee, re["--n-text-color-focus"] = Ee, re["--n-text-color-disabled"] = Ee;
      } else
        re = {
          "--n-color": T || C[Y("color", ie)],
          "--n-color-hover": T ? fn(T) : C[Y("colorHover", ie)],
          "--n-color-pressed": T ? Xr(T) : C[Y("colorPressed", ie)],
          "--n-color-focus": T ? fn(T) : C[Y("colorFocus", ie)],
          "--n-color-disabled": T || C[Y("colorDisabled", ie)],
          "--n-ripple-color": T || C[Y("rippleColor", ie)],
          "--n-text-color": Z || (T ? C.textColorPrimary : ve ? C.textColorTertiary : C[Y("textColor", ie)]),
          "--n-text-color-hover": Z || (T ? C.textColorHoverPrimary : C[Y("textColorHover", ie)]),
          "--n-text-color-pressed": Z || (T ? C.textColorPressedPrimary : C[Y("textColorPressed", ie)]),
          "--n-text-color-focus": Z || (T ? C.textColorFocusPrimary : C[Y("textColorFocus", ie)]),
          "--n-text-color-disabled": Z || (T ? C.textColorDisabledPrimary : C[Y("textColorDisabled", ie)])
        };
      let Ne = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      _ ? Ne = {
        "--n-border": "none",
        "--n-border-hover": "none",
        "--n-border-pressed": "none",
        "--n-border-focus": "none",
        "--n-border-disabled": "none"
      } : Ne = {
        "--n-border": C[Y("border", ie)],
        "--n-border-hover": C[Y("borderHover", ie)],
        "--n-border-pressed": C[Y("borderPressed", ie)],
        "--n-border-focus": C[Y("borderFocus", ie)],
        "--n-border-disabled": C[Y("borderDisabled", ie)]
      };
      const {
        [Y("height", H)]: Te,
        [Y("fontSize", H)]: me,
        [Y("padding", H)]: ye,
        [Y("paddingRound", H)]: be,
        [Y("iconSize", H)]: Ye,
        [Y("borderRadius", H)]: tt,
        [Y("iconMargin", H)]: lt,
        waveOpacity: it
      } = C, mt = {
        "--n-width": J && !_ ? Te : "initial",
        "--n-height": _ ? "initial" : Te,
        "--n-font-size": me,
        "--n-padding": J || _ ? "initial" : j ? be : ye,
        "--n-icon-size": Ye,
        "--n-icon-margin": lt,
        "--n-border-radius": _ ? "initial" : J || j ? Te : tt
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": S,
        "--n-bezier-ease-out": E,
        "--n-ripple-duration": $,
        "--n-opacity-disabled": M,
        "--n-wave-opacity": it
      }, Be), re), Ne), mt);
    }), A = m ? je("button", R(() => {
      let y = "";
      const {
        dashed: S,
        type: E,
        ghost: C,
        text: $,
        color: M,
        round: I,
        circle: K,
        textColor: H,
        secondary: t,
        tertiary: F,
        quaternary: D,
        strong: _
      } = e;
      S && (y += "a"), C && (y += "b"), $ && (y += "c"), I && (y += "d"), K && (y += "e"), t && (y += "f"), F && (y += "g"), D && (y += "h"), _ && (y += "i"), M && (y += `j${oo(M)}`), H && (y += `k${oo(H)}`);
      const {
        value: T
      } = l;
      return y += `l${T[0]}`, y += `m${E[0]}`, y;
    }), B, e) : void 0;
    return {
      selfElRef: n,
      waveElRef: r,
      mergedClsPrefix: v,
      mergedFocusable: s,
      mergedSize: l,
      showBorder: i,
      enterPressed: o,
      rtlEnabled: x,
      handleMousedown: u,
      handleKeydown: f,
      handleBlur: p,
      handleKeyup: c,
      handleClick: d,
      customColorCssVars: R(() => {
        const {
          color: y
        } = e;
        if (!y) return null;
        const S = fn(y);
        return {
          "--n-border-color": y,
          "--n-border-color-hover": S,
          "--n-border-color-pressed": Xr(y),
          "--n-border-color-focus": S,
          "--n-border-color-disabled": y
        };
      }),
      cssVars: m ? void 0 : B,
      themeClass: A == null ? void 0 : A.themeClass,
      onRender: A == null ? void 0 : A.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e,
      tag: n,
      onRender: r
    } = this;
    r == null || r();
    const o = _e(this.$slots.default, (i) => i && h("span", {
      class: `${e}-button__content`
    }, i));
    return h(n, {
      ref: "selfElRef",
      class: [
        this.themeClass,
        `${e}-button`,
        `${e}-button--${this.type}-type`,
        `${e}-button--${this.mergedSize}-type`,
        this.rtlEnabled && `${e}-button--rtl`,
        this.disabled && `${e}-button--disabled`,
        this.block && `${e}-button--block`,
        this.enterPressed && `${e}-button--pressed`,
        !this.text && this.dashed && `${e}-button--dashed`,
        this.color && `${e}-button--color`,
        this.secondary && `${e}-button--secondary`,
        this.loading && `${e}-button--loading`,
        this.ghost && `${e}-button--ghost`
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
    }, this.iconPlacement === "right" && o, h(bu, {
      width: !0
    }, {
      default: () => _e(this.$slots.icon, (i) => (this.loading || this.renderIcon || i) && h("span", {
        class: `${e}-button__icon`,
        style: {
          margin: ai(this.$slots.default) ? "0" : ""
        }
      }, h(ia, null, {
        default: () => this.loading ? h(wo, {
          clsPrefix: e,
          key: "loading",
          class: `${e}-icon-slot`,
          strokeWidth: 20
        }) : h("div", {
          key: "icon",
          class: `${e}-icon-slot`,
          role: "none"
        }, this.renderIcon ? this.renderIcon() : i)
      })))
    }), this.iconPlacement === "left" && o, this.text ? null : h($m, {
      ref: "waveElRef",
      clsPrefix: e
    }), this.showBorder ? h("div", {
      "aria-hidden": !0,
      class: `${e}-button__border`,
      style: this.customColorCssVars
    }) : null, this.showBorder ? h("div", {
      "aria-hidden": !0,
      class: `${e}-button__state-border`,
      style: this.customColorCssVars
    }) : null);
  }
}), yb = {
  paddingSmall: "12px 16px 12px",
  paddingMedium: "19px 24px 20px",
  paddingLarge: "23px 32px 24px",
  paddingHuge: "27px 40px 28px",
  titleFontSizeSmall: "16px",
  titleFontSizeMedium: "18px",
  titleFontSizeLarge: "18px",
  titleFontSizeHuge: "18px",
  closeIconSize: "18px",
  closeSize: "22px"
};
function wb(e) {
  const {
    primaryColor: n,
    borderRadius: r,
    lineHeight: o,
    fontSize: i,
    cardColor: a,
    textColor2: l,
    textColor1: s,
    dividerColor: u,
    fontWeightStrong: d,
    closeIconColor: c,
    closeIconColorHover: f,
    closeIconColorPressed: p,
    closeColorHover: m,
    closeColorPressed: v,
    modalColor: g,
    boxShadow1: b,
    popoverColor: x,
    actionColor: B
  } = e;
  return Object.assign(Object.assign({}, yb), {
    lineHeight: o,
    color: a,
    colorModal: g,
    colorPopover: x,
    colorTarget: n,
    colorEmbedded: B,
    colorEmbeddedModal: B,
    colorEmbeddedPopover: B,
    textColor: l,
    titleTextColor: s,
    borderColor: u,
    actionColor: B,
    titleFontWeight: d,
    closeColorHover: m,
    closeColorPressed: v,
    closeBorderRadius: r,
    closeIconColor: c,
    closeIconColorHover: f,
    closeIconColorPressed: p,
    fontSizeSmall: i,
    fontSizeMedium: i,
    fontSizeLarge: i,
    fontSizeHuge: i,
    boxShadow: b,
    borderRadius: r
  });
}
const Mu = {
  name: "Card",
  common: Ve,
  self: wb
}, Bb = z([O("card", `
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 display: flex;
 flex-direction: column;
 width: 100%;
 box-sizing: border-box;
 position: relative;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 color: var(--n-text-color);
 word-break: break-word;
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [ps({
  background: "var(--n-color-modal)"
}), V("hoverable", [z("&:hover", "box-shadow: var(--n-box-shadow);")]), V("content-segmented", [z(">", [k("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), V("content-soft-segmented", [z(">", [k("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), V("footer-segmented", [z(">", [k("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), V("footer-soft-segmented", [z(">", [k("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), z(">", [O("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [k("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), k("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), k("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), k("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), k("content", "flex: 1; min-width: 0;"), k("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [z("&:first-child", {
  paddingTop: "var(--n-padding-bottom)"
})]), k("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), O("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [z("img", `
 display: block;
 width: 100%;
 `)]), V("bordered", `
 border: 1px solid var(--n-border-color);
 `, [z("&:target", "border-color: var(--n-color-target);")]), V("action-segmented", [z(">", [k("action", [z("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), V("content-segmented, content-soft-segmented", [z(">", [k("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [z("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), V("footer-segmented, footer-soft-segmented", [z(">", [k("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [z("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), V("embedded", `
 background-color: var(--n-color-embedded);
 `)]), Ti(O("card", `
 background: var(--n-color-modal);
 `, [V("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), vs(O("card", `
 background: var(--n-color-popover);
 `, [V("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), da = {
  title: [String, Function],
  contentClass: String,
  contentStyle: [Object, String],
  headerClass: String,
  headerStyle: [Object, String],
  headerExtraClass: String,
  headerExtraStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  embedded: Boolean,
  segmented: {
    type: [Boolean, Object],
    default: !1
  },
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: !0
  },
  closable: Boolean,
  hoverable: Boolean,
  role: String,
  onClose: [Function, Array],
  tag: {
    type: String,
    default: "div"
  },
  cover: Function,
  content: [String, Function],
  footer: Function,
  action: Function,
  headerExtra: Function
}, Sb = Un(da), Fb = Object.assign(Object.assign({}, ce.props), da), Ab = Q({
  name: "Card",
  props: Fb,
  setup(e) {
    const n = () => {
      const {
        onClose: d
      } = e;
      d && he(d);
    }, {
      inlineThemeDisabled: r,
      mergedClsPrefixRef: o,
      mergedRtlRef: i
    } = Pe(e), a = ce("Card", "-card", Bb, Mu, e, o), l = wt("Card", i, o), s = R(() => {
      const {
        size: d
      } = e, {
        self: {
          color: c,
          colorModal: f,
          colorTarget: p,
          textColor: m,
          titleTextColor: v,
          titleFontWeight: g,
          borderColor: b,
          actionColor: x,
          borderRadius: B,
          lineHeight: A,
          closeIconColor: y,
          closeIconColorHover: S,
          closeIconColorPressed: E,
          closeColorHover: C,
          closeColorPressed: $,
          closeBorderRadius: M,
          closeIconSize: I,
          closeSize: K,
          boxShadow: H,
          colorPopover: t,
          colorEmbedded: F,
          colorEmbeddedModal: D,
          colorEmbeddedPopover: _,
          [Y("padding", d)]: T,
          [Y("fontSize", d)]: j,
          [Y("titleFontSize", d)]: J
        },
        common: {
          cubicBezierEaseInOut: Z
        }
      } = a.value, {
        top: ae,
        left: W,
        bottom: X
      } = Dt(T);
      return {
        "--n-bezier": Z,
        "--n-border-radius": B,
        "--n-color": c,
        "--n-color-modal": f,
        "--n-color-popover": t,
        "--n-color-embedded": F,
        "--n-color-embedded-modal": D,
        "--n-color-embedded-popover": _,
        "--n-color-target": p,
        "--n-text-color": m,
        "--n-line-height": A,
        "--n-action-color": x,
        "--n-title-text-color": v,
        "--n-title-font-weight": g,
        "--n-close-icon-color": y,
        "--n-close-icon-color-hover": S,
        "--n-close-icon-color-pressed": E,
        "--n-close-color-hover": C,
        "--n-close-color-pressed": $,
        "--n-border-color": b,
        "--n-box-shadow": H,
        // size
        "--n-padding-top": ae,
        "--n-padding-bottom": X,
        "--n-padding-left": W,
        "--n-font-size": j,
        "--n-title-font-size": J,
        "--n-close-size": K,
        "--n-close-icon-size": I,
        "--n-close-border-radius": M
      };
    }), u = r ? je("card", R(() => e.size[0]), s, e) : void 0;
    return {
      rtlEnabled: l,
      mergedClsPrefix: o,
      mergedTheme: a,
      handleCloseClick: n,
      cssVars: r ? void 0 : s,
      themeClass: u == null ? void 0 : u.themeClass,
      onRender: u == null ? void 0 : u.onRender
    };
  },
  render() {
    const {
      segmented: e,
      bordered: n,
      hoverable: r,
      mergedClsPrefix: o,
      rtlEnabled: i,
      onRender: a,
      embedded: l,
      tag: s,
      $slots: u
    } = this;
    return a == null || a(), h(s, {
      class: [`${o}-card`, this.themeClass, l && `${o}-card--embedded`, {
        [`${o}-card--rtl`]: i,
        [`${o}-card--content${typeof e != "boolean" && e.content === "soft" ? "-soft" : ""}-segmented`]: e === !0 || e !== !1 && e.content,
        [`${o}-card--footer${typeof e != "boolean" && e.footer === "soft" ? "-soft" : ""}-segmented`]: e === !0 || e !== !1 && e.footer,
        [`${o}-card--action-segmented`]: e === !0 || e !== !1 && e.action,
        [`${o}-card--bordered`]: n,
        [`${o}-card--hoverable`]: r
      }],
      style: this.cssVars,
      role: this.role
    }, _e(u.cover, (d) => {
      const c = this.cover ? xt([this.cover()]) : d;
      return c && h("div", {
        class: `${o}-card-cover`,
        role: "none"
      }, c);
    }), _e(u.header, (d) => {
      const {
        title: c
      } = this, f = c ? xt(typeof c == "function" ? [c()] : [c]) : d;
      return f || this.closable ? h("div", {
        class: [`${o}-card-header`, this.headerClass],
        style: this.headerStyle,
        role: "heading"
      }, h("div", {
        class: `${o}-card-header__main`,
        role: "heading"
      }, f), _e(u["header-extra"], (p) => {
        const m = this.headerExtra ? xt([this.headerExtra()]) : p;
        return m && h("div", {
          class: [`${o}-card-header__extra`, this.headerExtraClass],
          style: this.headerExtraStyle
        }, m);
      }), this.closable && h(aa, {
        clsPrefix: o,
        class: `${o}-card-header__close`,
        onClick: this.handleCloseClick,
        absolute: !0
      })) : null;
    }), _e(u.default, (d) => {
      const {
        content: c
      } = this, f = c ? xt(typeof c == "function" ? [c()] : [c]) : d;
      return f && h("div", {
        class: [`${o}-card__content`, this.contentClass],
        style: this.contentStyle,
        role: "none"
      }, f);
    }), _e(u.footer, (d) => {
      const c = this.footer ? xt([this.footer()]) : d;
      return c && h("div", {
        class: [`${o}-card__footer`, this.footerClass],
        style: this.footerStyle,
        role: "none"
      }, c);
    }), _e(u.action, (d) => {
      const c = this.action ? xt([this.action()]) : d;
      return c && h("div", {
        class: `${o}-card__action`,
        role: "none"
      }, c);
    }));
  }
});
function $b(e) {
  const {
    fontWeight: n,
    textColor1: r,
    textColor2: o,
    textColorDisabled: i,
    dividerColor: a,
    fontSize: l
  } = e;
  return {
    titleFontSize: l,
    titleFontWeight: n,
    dividerColor: a,
    titleTextColor: r,
    titleTextColorDisabled: i,
    fontSize: l,
    textColor: o,
    arrowColor: o,
    arrowColorDisabled: i,
    itemMargin: "16px 0 0 0",
    titlePadding: "16px 0 0 0"
  };
}
const Db = {
  name: "Collapse",
  common: Ve,
  self: $b
}, Pb = O("collapse", "width: 100%;", [O("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [V("disabled", [k("header", "cursor: not-allowed;", [k("header-main", `
 color: var(--n-title-text-color-disabled);
 `), O("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), O("collapse-item", "margin-left: 32px;"), z("&:first-child", "margin-top: 0;"), z("&:first-child >", [k("header", "padding-top: 0;")]), V("left-arrow-placement", [k("header", [O("collapse-item-arrow", "margin-right: 4px;")])]), V("right-arrow-placement", [k("header", [O("collapse-item-arrow", "margin-left: 4px;")])]), k("content-wrapper", [k("content-inner", "padding-top: 16px;"), Zm({
  duration: "0.15s"
})]), V("active", [k("header", [V("active", [O("collapse-item-arrow", "transform: rotate(90deg);")])])]), z("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), He("disabled", [V("trigger-area-main", [k("header", [k("header-main", "cursor: pointer;"), O("collapse-item-arrow", "cursor: default;")])]), V("trigger-area-arrow", [k("header", [O("collapse-item-arrow", "cursor: pointer;")])]), V("trigger-area-extra", [k("header", [k("header-extra", "cursor: pointer;")])])]), k("header", `
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `, [k("header-main", `
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), k("header-extra", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), O("collapse-item-arrow", `
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]), Eb = Object.assign(Object.assign({}, ce.props), {
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
    validator: () => (process.env.NODE_ENV !== "production" && Vt("collapse", "`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead."), !0),
    default: void 0
  }
}), Iu = "n-collapse", kb = Q({
  name: "Collapse",
  props: Eb,
  setup(e, {
    slots: n
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Pe(e), a = L(e.defaultExpandedNames), l = R(() => e.expandedNames), s = Gn(l, a), u = ce("Collapse", "-collapse", Pb, Db, e, r);
    function d(g) {
      const {
        "onUpdate:expandedNames": b,
        onUpdateExpandedNames: x,
        onExpandedNamesChange: B
      } = e;
      x && he(x, g), b && he(b, g), B && he(B, g), a.value = g;
    }
    function c(g) {
      const {
        onItemHeaderClick: b
      } = e;
      b && he(b, g);
    }
    function f(g, b, x) {
      const {
        accordion: B
      } = e, {
        value: A
      } = s;
      if (B)
        g ? (d([b]), c({
          name: b,
          expanded: !0,
          event: x
        })) : (d([]), c({
          name: b,
          expanded: !1,
          event: x
        }));
      else if (!Array.isArray(A))
        d([b]), c({
          name: b,
          expanded: !0,
          event: x
        });
      else {
        const y = A.slice(), S = y.findIndex((E) => b === E);
        ~S ? (y.splice(S, 1), d(y), c({
          name: b,
          expanded: !1,
          event: x
        })) : (y.push(b), d(y), c({
          name: b,
          expanded: !0,
          event: x
        }));
      }
    }
    we(Iu, {
      props: e,
      mergedClsPrefixRef: r,
      expandedNamesRef: s,
      slots: n,
      toggleItem: f
    });
    const p = wt("Collapse", i, r), m = R(() => {
      const {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          titleFontWeight: b,
          dividerColor: x,
          titlePadding: B,
          titleTextColor: A,
          titleTextColorDisabled: y,
          textColor: S,
          arrowColor: E,
          fontSize: C,
          titleFontSize: $,
          arrowColorDisabled: M,
          itemMargin: I
        }
      } = u.value;
      return {
        "--n-font-size": C,
        "--n-bezier": g,
        "--n-text-color": S,
        "--n-divider-color": x,
        "--n-title-padding": B,
        "--n-title-font-size": $,
        "--n-title-text-color": A,
        "--n-title-text-color-disabled": y,
        "--n-title-font-weight": b,
        "--n-arrow-color": E,
        "--n-arrow-color-disabled": M,
        "--n-item-margin": I
      };
    }), v = o ? je("collapse", void 0, m, e) : void 0;
    return {
      rtlEnabled: p,
      mergedTheme: u,
      mergedClsPrefix: r,
      cssVars: o ? void 0 : m,
      themeClass: v == null ? void 0 : v.themeClass,
      onRender: v == null ? void 0 : v.onRender
    };
  },
  render() {
    var e;
    return (e = this.onRender) === null || e === void 0 || e.call(this), h("div", {
      class: [`${this.mergedClsPrefix}-collapse`, this.rtlEnabled && `${this.mergedClsPrefix}-collapse--rtl`, this.themeClass],
      style: this.cssVars
    }, this.$slots);
  }
}), zb = Q({
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
  setup(e) {
    return {
      onceTrue: gs(le(e, "show"))
    };
  },
  render() {
    return h(bu, null, {
      default: () => {
        const {
          show: e,
          displayDirective: n,
          onceTrue: r,
          clsPrefix: o
        } = this, i = n === "show" && r, a = h("div", {
          class: `${o}-collapse-item__content-wrapper`
        }, h("div", {
          class: `${o}-collapse-item__content-inner`
        }, this.$slots));
        return i ? kt(a, [[qn, e]]) : e ? a : null;
      }
    });
  }
}), Tb = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
}, Rb = Q({
  name: "CollapseItem",
  props: Tb,
  setup(e) {
    const {
      mergedRtlRef: n
    } = Pe(e), r = pr(), o = We(() => {
      var f;
      return (f = e.name) !== null && f !== void 0 ? f : r;
    }), i = xe(Iu);
    i || Dr("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
    const {
      expandedNamesRef: a,
      props: l,
      mergedClsPrefixRef: s,
      slots: u
    } = i, d = R(() => {
      const {
        value: f
      } = a;
      if (Array.isArray(f)) {
        const {
          value: p
        } = o;
        return !~f.findIndex((m) => m === p);
      } else if (f) {
        const {
          value: p
        } = o;
        return p !== f;
      }
      return !0;
    });
    return {
      rtlEnabled: wt("Collapse", n, s),
      collapseSlots: u,
      randomName: r,
      mergedClsPrefix: s,
      collapsed: d,
      triggerAreas: le(l, "triggerAreas"),
      mergedDisplayDirective: R(() => {
        const {
          displayDirective: f
        } = e;
        return f || l.displayDirective;
      }),
      arrowPlacement: R(() => l.arrowPlacement),
      handleClick(f) {
        let p = "main";
        Wt(f, "arrow") && (p = "arrow"), Wt(f, "extra") && (p = "extra"), l.triggerAreas.includes(p) && i && !e.disabled && i.toggleItem(d.value, o.value, f);
      }
    };
  },
  render() {
    const {
      collapseSlots: e,
      $slots: n,
      arrowPlacement: r,
      collapsed: o,
      mergedDisplayDirective: i,
      mergedClsPrefix: a,
      disabled: l,
      triggerAreas: s
    } = this, u = ii(n.header, {
      collapsed: o
    }, () => [this.title]), d = n["header-extra"] || e["header-extra"], c = n.arrow || e.arrow;
    return h("div", {
      class: [`${a}-collapse-item`, `${a}-collapse-item--${r}-arrow-placement`, l && `${a}-collapse-item--disabled`, !o && `${a}-collapse-item--active`, s.map((f) => `${a}-collapse-item--trigger-area-${f}`)]
    }, h("div", {
      class: [`${a}-collapse-item__header`, !o && `${a}-collapse-item__header--active`]
    }, h("div", {
      class: `${a}-collapse-item__header-main`,
      onClick: this.handleClick
    }, r === "right" && u, h("div", {
      class: `${a}-collapse-item-arrow`,
      key: this.rtlEnabled ? 0 : 1,
      "data-arrow": !0
    }, ii(c, {
      collapsed: o
    }, () => {
      var f;
      return [h(zt, {
        clsPrefix: a
      }, {
        default: (f = e.expandIcon) !== null && f !== void 0 ? f : () => this.rtlEnabled ? h(Fg, null) : h(gu, null)
      })];
    })), r === "left" && u), rc(d, {
      collapsed: o
    }, (f) => h("div", {
      class: `${a}-collapse-item__header-extra`,
      onClick: this.handleClick,
      "data-extra": !0
    }, f))), h(zb, {
      clsPrefix: a,
      displayDirective: i,
      show: !o
    }, n));
  }
}), Ob = {
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
    validator: () => (Vt("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, Mb = Q({
  name: "ConfigProvider",
  alias: ["App"],
  props: Ob,
  setup(e) {
    const n = xe(Kt, null), r = R(() => {
      const {
        theme: g
      } = e;
      if (g === null) return;
      const b = n == null ? void 0 : n.mergedThemeRef.value;
      return g === void 0 ? b : b === void 0 ? g : Object.assign({}, b, g);
    }), o = R(() => {
      const {
        themeOverrides: g
      } = e;
      if (g !== null) {
        if (g === void 0)
          return n == null ? void 0 : n.mergedThemeOverridesRef.value;
        {
          const b = n == null ? void 0 : n.mergedThemeOverridesRef.value;
          return b === void 0 ? g : ar({}, b, g);
        }
      }
    }), i = We(() => {
      const {
        namespace: g
      } = e;
      return g === void 0 ? n == null ? void 0 : n.mergedNamespaceRef.value : g;
    }), a = We(() => {
      const {
        bordered: g
      } = e;
      return g === void 0 ? n == null ? void 0 : n.mergedBorderedRef.value : g;
    }), l = R(() => {
      const {
        icons: g
      } = e;
      return g === void 0 ? n == null ? void 0 : n.mergedIconsRef.value : g;
    }), s = R(() => {
      const {
        componentOptions: g
      } = e;
      return g !== void 0 ? g : n == null ? void 0 : n.mergedComponentPropsRef.value;
    }), u = R(() => {
      const {
        clsPrefix: g
      } = e;
      return g !== void 0 ? g : n ? n.mergedClsPrefixRef.value : yi;
    }), d = R(() => {
      var g;
      const {
        rtl: b
      } = e;
      if (b === void 0)
        return n == null ? void 0 : n.mergedRtlRef.value;
      const x = {};
      for (const B of b)
        x[B.name] = pa(B), (g = B.peers) === null || g === void 0 || g.forEach((A) => {
          A.name in x || (x[A.name] = pa(A));
        });
      return x;
    }), c = R(() => e.breakpoints || (n == null ? void 0 : n.mergedBreakpointsRef.value)), f = e.inlineThemeDisabled || (n == null ? void 0 : n.inlineThemeDisabled), p = e.preflightStyleDisabled || (n == null ? void 0 : n.preflightStyleDisabled), m = e.styleMountTarget || (n == null ? void 0 : n.styleMountTarget), v = R(() => {
      const {
        value: g
      } = r, {
        value: b
      } = o, x = b && Object.keys(b).length !== 0, B = g == null ? void 0 : g.name;
      return B ? x ? `${B}-${xr(JSON.stringify(o.value))}` : B : x ? xr(JSON.stringify(o.value)) : "";
    });
    return we(Kt, {
      mergedThemeHashRef: v,
      mergedBreakpointsRef: c,
      mergedRtlRef: d,
      mergedIconsRef: l,
      mergedComponentPropsRef: s,
      mergedBorderedRef: a,
      mergedNamespaceRef: i,
      mergedClsPrefixRef: u,
      mergedLocaleRef: R(() => {
        const {
          locale: g
        } = e;
        if (g !== null)
          return g === void 0 ? n == null ? void 0 : n.mergedLocaleRef.value : g;
      }),
      mergedDateLocaleRef: R(() => {
        const {
          dateLocale: g
        } = e;
        if (g !== null)
          return g === void 0 ? n == null ? void 0 : n.mergedDateLocaleRef.value : g;
      }),
      mergedHljsRef: R(() => {
        const {
          hljs: g
        } = e;
        return g === void 0 ? n == null ? void 0 : n.mergedHljsRef.value : g;
      }),
      mergedKatexRef: R(() => {
        const {
          katex: g
        } = e;
        return g === void 0 ? n == null ? void 0 : n.mergedKatexRef.value : g;
      }),
      mergedThemeRef: r,
      mergedThemeOverridesRef: o,
      inlineThemeDisabled: f || !1,
      preflightStyleDisabled: p || !1,
      styleMountTarget: m
    }), {
      mergedClsPrefix: u,
      mergedBordered: a,
      mergedNamespace: i,
      mergedTheme: r,
      mergedThemeOverrides: o
    };
  },
  render() {
    var e, n, r, o;
    return this.abstract ? (o = (r = this.$slots).default) === null || o === void 0 ? void 0 : o.call(r) : h(this.as || this.tag, {
      class: `${this.mergedClsPrefix || yi}-config-provider`
    }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e));
  }
});
function Ib(e) {
  const {
    boxShadow2: n
  } = e;
  return {
    menuBoxShadow: n
  };
}
const _b = {
  name: "Select",
  common: Ve,
  peers: {
    InternalSelection: ku,
    InternalSelectMenu: $u
  },
  self: Ib
}, Lb = z([O("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `), O("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [Fo({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]), Nb = Object.assign(Object.assign({}, ce.props), {
  to: qt.propTo,
  bordered: {
    type: Boolean,
    default: void 0
  },
  clearable: Boolean,
  clearFilterAfterSelect: {
    type: Boolean,
    default: !0
  },
  options: {
    type: Array,
    default: () => []
  },
  defaultValue: {
    type: [String, Number, Array],
    default: null
  },
  keyboard: {
    type: Boolean,
    default: !0
  },
  value: [String, Number, Array],
  placeholder: String,
  menuProps: Object,
  multiple: Boolean,
  size: String,
  menuSize: {
    type: String
  },
  filterable: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  },
  remote: Boolean,
  loading: Boolean,
  filter: Function,
  placement: {
    type: String,
    default: "bottom-start"
  },
  widthMode: {
    type: String,
    default: "trigger"
  },
  tag: Boolean,
  onCreate: Function,
  fallbackOption: {
    type: [Function, Boolean],
    default: void 0
  },
  show: {
    type: Boolean,
    default: void 0
  },
  showArrow: {
    type: Boolean,
    default: !0
  },
  maxTagCount: [Number, String],
  ellipsisTagPopoverProps: Object,
  consistentMenuWidth: {
    type: Boolean,
    default: !0
  },
  virtualScroll: {
    type: Boolean,
    default: !0
  },
  labelField: {
    type: String,
    default: "label"
  },
  valueField: {
    type: String,
    default: "value"
  },
  childrenField: {
    type: String,
    default: "children"
  },
  renderLabel: Function,
  renderOption: Function,
  renderTag: Function,
  "onUpdate:value": [Function, Array],
  inputProps: Object,
  nodeProps: Function,
  ignoreComposition: {
    type: Boolean,
    default: !0
  },
  showOnFocus: Boolean,
  // for jsx
  onUpdateValue: [Function, Array],
  onBlur: [Function, Array],
  onClear: [Function, Array],
  onFocus: [Function, Array],
  onScroll: [Function, Array],
  onSearch: [Function, Array],
  onUpdateShow: [Function, Array],
  "onUpdate:show": [Function, Array],
  displayDirective: {
    type: String,
    default: "show"
  },
  resetMenuOnOptionsChange: {
    type: Boolean,
    default: !0
  },
  status: String,
  showCheckmark: {
    type: Boolean,
    default: !0
  },
  /** deprecated */
  onChange: [Function, Array],
  items: Array
}), Hb = Q({
  name: "Select",
  props: Nb,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.items !== void 0 && nt("select", "`items` is deprecated, please use `options` instead."), e.onChange !== void 0 && nt("select", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: n,
      mergedBorderedRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Pe(e), a = ce("Select", "-select", Lb, _b, e, n), l = L(e.defaultValue), s = le(e, "value"), u = Gn(s, l), d = L(!1), c = L(""), f = Mi(e, ["items", "options"]), p = L([]), m = L([]), v = R(() => m.value.concat(p.value).concat(f.value)), g = R(() => {
      const {
        filter: w
      } = e;
      if (w) return w;
      const {
        labelField: N,
        valueField: U
      } = e;
      return (te, oe) => {
        if (!oe) return !1;
        const de = oe[N];
        if (typeof de == "string")
          return Qo(te, de);
        const fe = oe[U];
        return typeof fe == "string" ? Qo(te, fe) : typeof fe == "number" ? Qo(te, String(fe)) : !1;
      };
    }), b = R(() => {
      if (e.remote)
        return f.value;
      {
        const {
          value: w
        } = v, {
          value: N
        } = c;
        return !N.length || !e.filterable ? w : Qm(w, g.value, N, e.childrenField);
      }
    }), x = R(() => {
      const {
        valueField: w,
        childrenField: N
      } = e, U = Jm(w, N);
      return wu(b.value, U);
    }), B = R(() => eb(v.value, e.valueField, e.childrenField)), A = L(!1), y = Gn(le(e, "show"), A), S = L(null), E = L(null), C = L(null), {
      localeRef: $
    } = Sr("Select"), M = R(() => {
      var w;
      return (w = e.placeholder) !== null && w !== void 0 ? w : $.value.placeholder;
    }), I = [], K = L(/* @__PURE__ */ new Map()), H = R(() => {
      const {
        fallbackOption: w
      } = e;
      if (w === void 0) {
        const {
          labelField: N,
          valueField: U
        } = e;
        return (te) => ({
          [N]: String(te),
          [U]: te
        });
      }
      return w === !1 ? !1 : (N) => Object.assign(w(N), {
        value: N
      });
    });
    function t(w) {
      const N = e.remote, {
        value: U
      } = K, {
        value: te
      } = B, {
        value: oe
      } = H, de = [];
      return w.forEach((fe) => {
        if (te.has(fe))
          de.push(te.get(fe));
        else if (N && U.has(fe))
          de.push(U.get(fe));
        else if (oe) {
          const pe = oe(fe);
          pe && de.push(pe);
        }
      }), de;
    }
    const F = R(() => {
      if (e.multiple) {
        const {
          value: w
        } = u;
        return Array.isArray(w) ? t(w) : [];
      }
      return null;
    }), D = R(() => {
      const {
        value: w
      } = u;
      return !e.multiple && !Array.isArray(w) ? w === null ? null : t([w])[0] || null : null;
    }), _ = qi(e), {
      mergedSizeRef: T,
      mergedDisabledRef: j,
      mergedStatusRef: J
    } = _;
    function Z(w, N) {
      const {
        onChange: U,
        "onUpdate:value": te,
        onUpdateValue: oe
      } = e, {
        nTriggerFormChange: de,
        nTriggerFormInput: fe
      } = _;
      U && he(U, w, N), oe && he(oe, w, N), te && he(te, w, N), l.value = w, de(), fe();
    }
    function ae(w) {
      const {
        onBlur: N
      } = e, {
        nTriggerFormBlur: U
      } = _;
      N && he(N, w), U();
    }
    function W() {
      const {
        onClear: w
      } = e;
      w && he(w);
    }
    function X(w) {
      const {
        onFocus: N,
        showOnFocus: U
      } = e, {
        nTriggerFormFocus: te
      } = _;
      N && he(N, w), te(), U && Me();
    }
    function ne(w) {
      const {
        onSearch: N
      } = e;
      N && he(N, w);
    }
    function Be(w) {
      const {
        onScroll: N
      } = e;
      N && he(N, w);
    }
    function re() {
      var w;
      const {
        remote: N,
        multiple: U
      } = e;
      if (N) {
        const {
          value: te
        } = K;
        if (U) {
          const {
            valueField: oe
          } = e;
          (w = F.value) === null || w === void 0 || w.forEach((de) => {
            te.set(de[oe], de);
          });
        } else {
          const oe = D.value;
          oe && te.set(oe[e.valueField], oe);
        }
      }
    }
    function ve(w) {
      const {
        onUpdateShow: N,
        "onUpdate:show": U
      } = e;
      N && he(N, w), U && he(U, w), A.value = w;
    }
    function Me() {
      j.value || (ve(!0), A.value = !0, e.filterable && Bt());
    }
    function ie() {
      ve(!1);
    }
    function Ne() {
      c.value = "", m.value = I;
    }
    const Te = L(!1);
    function me() {
      e.filterable && (Te.value = !0);
    }
    function ye() {
      e.filterable && (Te.value = !1, y.value || Ne());
    }
    function be() {
      j.value || (y.value ? e.filterable ? Bt() : ie() : Me());
    }
    function Ye(w) {
      var N, U;
      !((U = (N = C.value) === null || N === void 0 ? void 0 : N.selfRef) === null || U === void 0) && U.contains(w.relatedTarget) || (d.value = !1, ae(w), ie());
    }
    function tt(w) {
      X(w), d.value = !0;
    }
    function lt() {
      d.value = !0;
    }
    function it(w) {
      var N;
      !((N = S.value) === null || N === void 0) && N.$el.contains(w.relatedTarget) || (d.value = !1, ae(w), ie());
    }
    function mt() {
      var w;
      (w = S.value) === null || w === void 0 || w.focus(), ie();
    }
    function Se(w) {
      var N;
      y.value && (!((N = S.value) === null || N === void 0) && N.$el.contains(Kn(w)) || ie());
    }
    function Ee(w) {
      if (!Array.isArray(w)) return [];
      if (H.value)
        return Array.from(w);
      {
        const {
          remote: N
        } = e, {
          value: U
        } = B;
        if (N) {
          const {
            value: te
          } = K;
          return w.filter((oe) => U.has(oe) || te.has(oe));
        } else
          return w.filter((te) => U.has(te));
      }
    }
    function Xe(w) {
      qe(w.rawNode);
    }
    function qe(w) {
      if (j.value) return;
      const {
        tag: N,
        remote: U,
        clearFilterAfterSelect: te,
        valueField: oe
      } = e;
      if (N && !U) {
        const {
          value: de
        } = m, fe = de[0] || null;
        if (fe) {
          const pe = p.value;
          pe.length ? pe.push(fe) : p.value = [fe], m.value = I;
        }
      }
      if (U && K.value.set(w[oe], w), e.multiple) {
        const de = Ee(u.value), fe = de.findIndex((pe) => pe === w[oe]);
        if (~fe) {
          if (de.splice(fe, 1), N && !U) {
            const pe = G(w[oe]);
            ~pe && (p.value.splice(pe, 1), te && (c.value = ""));
          }
        } else
          de.push(w[oe]), te && (c.value = "");
        Z(de, t(de));
      } else {
        if (N && !U) {
          const de = G(w[oe]);
          ~de ? p.value = [p.value[de]] : p.value = I;
        }
        Xt(), ie(), Z(w[oe], w);
      }
    }
    function G(w) {
      return p.value.findIndex((U) => U[e.valueField] === w);
    }
    function ee(w) {
      y.value || Me();
      const {
        value: N
      } = w.target;
      c.value = N;
      const {
        tag: U,
        remote: te
      } = e;
      if (ne(N), U && !te) {
        if (!N) {
          m.value = I;
          return;
        }
        const {
          onCreate: oe
        } = e, de = oe ? oe(N) : {
          [e.labelField]: N,
          [e.valueField]: N
        }, {
          valueField: fe,
          labelField: pe
        } = e;
        f.value.some((ke) => ke[fe] === de[fe] || ke[pe] === de[pe]) || p.value.some((ke) => ke[fe] === de[fe] || ke[pe] === de[pe]) ? m.value = I : m.value = [de];
      }
    }
    function Re(w) {
      w.stopPropagation();
      const {
        multiple: N
      } = e;
      !N && e.filterable && ie(), W(), N ? Z([], []) : Z(null, null);
    }
    function un(w) {
      !Wt(w, "action") && !Wt(w, "empty") && !Wt(w, "header") && w.preventDefault();
    }
    function Rt(w) {
      Be(w);
    }
    function Ot(w) {
      var N, U, te, oe, de;
      if (!e.keyboard) {
        w.preventDefault();
        return;
      }
      switch (w.key) {
        case " ":
          if (e.filterable)
            break;
          w.preventDefault();
        case "Enter":
          if (!(!((N = S.value) === null || N === void 0) && N.isComposing)) {
            if (y.value) {
              const fe = (U = C.value) === null || U === void 0 ? void 0 : U.getPendingTmNode();
              fe ? Xe(fe) : e.filterable || (ie(), Xt());
            } else if (Me(), e.tag && Te.value) {
              const fe = m.value[0];
              if (fe) {
                const pe = fe[e.valueField], {
                  value: ke
                } = u;
                e.multiple && Array.isArray(ke) && ke.includes(pe) || qe(fe);
              }
            }
          }
          w.preventDefault();
          break;
        case "ArrowUp":
          if (w.preventDefault(), e.loading) return;
          y.value && ((te = C.value) === null || te === void 0 || te.prev());
          break;
        case "ArrowDown":
          if (w.preventDefault(), e.loading) return;
          y.value ? (oe = C.value) === null || oe === void 0 || oe.next() : Me();
          break;
        case "Escape":
          y.value && (Dc(w), ie()), (de = S.value) === null || de === void 0 || de.focus();
          break;
      }
    }
    function Xt() {
      var w;
      (w = S.value) === null || w === void 0 || w.focus();
    }
    function Bt() {
      var w;
      (w = S.value) === null || w === void 0 || w.focusInput();
    }
    function Mt() {
      var w;
      y.value && ((w = E.value) === null || w === void 0 || w.syncPosition());
    }
    re(), ze(le(e, "options"), re);
    const Yt = {
      focus: () => {
        var w;
        (w = S.value) === null || w === void 0 || w.focus();
      },
      focusInput: () => {
        var w;
        (w = S.value) === null || w === void 0 || w.focusInput();
      },
      blur: () => {
        var w;
        (w = S.value) === null || w === void 0 || w.blur();
      },
      blurInput: () => {
        var w;
        (w = S.value) === null || w === void 0 || w.blurInput();
      }
    }, st = R(() => {
      const {
        self: {
          menuBoxShadow: w
        }
      } = a.value;
      return {
        "--n-menu-box-shadow": w
      };
    }), bt = i ? je("select", void 0, st, e) : void 0;
    return Object.assign(Object.assign({}, Yt), {
      mergedStatus: J,
      mergedClsPrefix: n,
      mergedBordered: r,
      namespace: o,
      treeMate: x,
      isMounted: Jn(),
      triggerRef: S,
      menuRef: C,
      pattern: c,
      uncontrolledShow: A,
      mergedShow: y,
      adjustedTo: qt(e),
      uncontrolledValue: l,
      mergedValue: u,
      followerRef: E,
      localizedPlaceholder: M,
      selectedOption: D,
      selectedOptions: F,
      mergedSize: T,
      mergedDisabled: j,
      focused: d,
      activeWithoutMenuOpen: Te,
      inlineThemeDisabled: i,
      onTriggerInputFocus: me,
      onTriggerInputBlur: ye,
      handleTriggerOrMenuResize: Mt,
      handleMenuFocus: lt,
      handleMenuBlur: it,
      handleMenuTabOut: mt,
      handleTriggerClick: be,
      handleToggle: Xe,
      handleDeleteOption: qe,
      handlePatternInput: ee,
      handleClear: Re,
      handleTriggerBlur: Ye,
      handleTriggerFocus: tt,
      handleKeydown: Ot,
      handleMenuAfterLeave: Ne,
      handleMenuClickOutside: Se,
      handleMenuScroll: Rt,
      handleMenuKeydown: Ot,
      handleMenuMousedown: un,
      mergedTheme: a,
      cssVars: i ? void 0 : st,
      themeClass: bt == null ? void 0 : bt.themeClass,
      onRender: bt == null ? void 0 : bt.onRender
    });
  },
  render() {
    return h("div", {
      class: `${this.mergedClsPrefix}-select`
    }, h(_i, null, {
      default: () => [h(Li, null, {
        default: () => h(Um, {
          ref: "triggerRef",
          inlineThemeDisabled: this.inlineThemeDisabled,
          status: this.mergedStatus,
          inputProps: this.inputProps,
          clsPrefix: this.mergedClsPrefix,
          showArrow: this.showArrow,
          maxTagCount: this.maxTagCount,
          ellipsisTagPopoverProps: this.ellipsisTagPopoverProps,
          bordered: this.mergedBordered,
          active: this.activeWithoutMenuOpen || this.mergedShow,
          pattern: this.pattern,
          placeholder: this.localizedPlaceholder,
          selectedOption: this.selectedOption,
          selectedOptions: this.selectedOptions,
          multiple: this.multiple,
          renderTag: this.renderTag,
          renderLabel: this.renderLabel,
          filterable: this.filterable,
          clearable: this.clearable,
          disabled: this.mergedDisabled,
          size: this.mergedSize,
          theme: this.mergedTheme.peers.InternalSelection,
          labelField: this.labelField,
          valueField: this.valueField,
          themeOverrides: this.mergedTheme.peerOverrides.InternalSelection,
          loading: this.loading,
          focused: this.focused,
          onClick: this.handleTriggerClick,
          onDeleteOption: this.handleDeleteOption,
          onPatternInput: this.handlePatternInput,
          onClear: this.handleClear,
          onBlur: this.handleTriggerBlur,
          onFocus: this.handleTriggerFocus,
          onKeydown: this.handleKeydown,
          onPatternBlur: this.onTriggerInputBlur,
          onPatternFocus: this.onTriggerInputFocus,
          onResize: this.handleTriggerOrMenuResize,
          ignoreComposition: this.ignoreComposition
        }, {
          arrow: () => {
            var e, n;
            return [(n = (e = this.$slots).arrow) === null || n === void 0 ? void 0 : n.call(e)];
          }
        })
      }), h(Wi, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === qt.tdkey,
        containerClass: this.namespace,
        width: this.consistentMenuWidth ? "target" : void 0,
        minWidth: "target",
        placement: this.placement
      }, {
        default: () => h(ft, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted,
          onAfterLeave: this.handleMenuAfterLeave
        }, {
          default: () => {
            var e, n, r;
            return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) === null || e === void 0 || e.call(this), kt(h(Fm, Object.assign({}, this.menuProps, {
              ref: "menuRef",
              onResize: this.handleTriggerOrMenuResize,
              inlineThemeDisabled: this.inlineThemeDisabled,
              virtualScroll: this.consistentMenuWidth && this.virtualScroll,
              class: [`${this.mergedClsPrefix}-select-menu`, this.themeClass, (n = this.menuProps) === null || n === void 0 ? void 0 : n.class],
              clsPrefix: this.mergedClsPrefix,
              focusable: !0,
              labelField: this.labelField,
              valueField: this.valueField,
              autoPending: !0,
              nodeProps: this.nodeProps,
              theme: this.mergedTheme.peers.InternalSelectMenu,
              themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu,
              treeMate: this.treeMate,
              multiple: this.multiple,
              size: this.menuSize,
              renderOption: this.renderOption,
              renderLabel: this.renderLabel,
              value: this.mergedValue,
              style: [(r = this.menuProps) === null || r === void 0 ? void 0 : r.style, this.cssVars],
              onToggle: this.handleToggle,
              onScroll: this.handleMenuScroll,
              onFocus: this.handleMenuFocus,
              onBlur: this.handleMenuBlur,
              onKeydown: this.handleMenuKeydown,
              onTabOut: this.handleMenuTabOut,
              onMousedown: this.handleMenuMousedown,
              show: this.mergedShow,
              showCheckmark: this.showCheckmark,
              resetMenuOnOptionsChange: this.resetMenuOnOptionsChange
            }), {
              empty: () => {
                var o, i;
                return [(i = (o = this.$slots).empty) === null || i === void 0 ? void 0 : i.call(o)];
              },
              header: () => {
                var o, i;
                return [(i = (o = this.$slots).header) === null || i === void 0 ? void 0 : i.call(o)];
              },
              action: () => {
                var o, i;
                return [(i = (o = this.$slots).action) === null || i === void 0 ? void 0 : i.call(o)];
              }
            }), this.displayDirective === "show" ? [[qn, this.mergedShow], [mr, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]] : [[mr, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), Wb = {
  padding: "8px 14px"
};
function jb(e) {
  const {
    borderRadius: n,
    boxShadow2: r,
    baseColor: o
  } = e;
  return Object.assign(Object.assign({}, Wb), {
    borderRadius: n,
    boxShadow: r,
    color: ut(o, "rgba(0, 0, 0, .85)"),
    textColor: o
  });
}
const Vb = {
  name: "Tooltip",
  common: Ve,
  peers: {
    Popover: zr
  },
  self: jb
}, qb = {
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
function Kb(e) {
  const {
    primaryColor: n,
    textColor2: r,
    dividerColor: o,
    hoverColor: i,
    popoverColor: a,
    invertedColor: l,
    borderRadius: s,
    fontSizeSmall: u,
    fontSizeMedium: d,
    fontSizeLarge: c,
    fontSizeHuge: f,
    heightSmall: p,
    heightMedium: m,
    heightLarge: v,
    heightHuge: g,
    textColor3: b,
    opacityDisabled: x
  } = e;
  return Object.assign(Object.assign({}, qb), {
    optionHeightSmall: p,
    optionHeightMedium: m,
    optionHeightLarge: v,
    optionHeightHuge: g,
    borderRadius: s,
    fontSizeSmall: u,
    fontSizeMedium: d,
    fontSizeLarge: c,
    fontSizeHuge: f,
    // non-inverted
    optionTextColor: r,
    optionTextColorHover: r,
    optionTextColorActive: n,
    optionTextColorChildActive: n,
    color: a,
    dividerColor: o,
    suffixColor: r,
    prefixColor: r,
    optionColorHover: i,
    optionColorActive: ge(n, {
      alpha: 0.1
    }),
    groupHeaderTextColor: b,
    // inverted
    optionTextColorInverted: "#BBB",
    optionTextColorHoverInverted: "#FFF",
    optionTextColorActiveInverted: "#FFF",
    optionTextColorChildActiveInverted: "#FFF",
    colorInverted: l,
    dividerColorInverted: "#BBB",
    suffixColorInverted: "#BBB",
    prefixColorInverted: "#BBB",
    optionColorHoverInverted: n,
    optionColorActiveInverted: n,
    groupHeaderTextColorInverted: "#AAA",
    optionOpacityDisabled: x
  });
}
const Ub = {
  name: "Dropdown",
  common: Ve,
  peers: {
    Popover: zr
  },
  self: Kb
}, Gb = Object.assign(Object.assign({}, Tr), ce.props), Xb = Q({
  name: "Tooltip",
  props: Gb,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Pe(e), r = ce("Tooltip", "-tooltip", void 0, Vb, e, n), o = L(null);
    return Object.assign(Object.assign({}, {
      syncPosition() {
        o.value.syncPosition();
      },
      setShow(a) {
        o.value.setShow(a);
      }
    }), {
      popoverRef: o,
      mergedTheme: r,
      popoverThemeOverrides: R(() => r.value.self)
    });
  },
  render() {
    const {
      mergedTheme: e,
      internalExtraClass: n
    } = this;
    return h(Rr, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: n.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), _u = Q({
  name: "DropdownDivider",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  render() {
    return h("div", {
      class: `${this.clsPrefix}-dropdown-divider`
    });
  }
});
function Yb(e) {
  const {
    textColorBase: n,
    opacity1: r,
    opacity2: o,
    opacity3: i,
    opacity4: a,
    opacity5: l
  } = e;
  return {
    color: n,
    opacity1Depth: r,
    opacity2Depth: o,
    opacity3Depth: i,
    opacity4Depth: a,
    opacity5Depth: l
  };
}
const Zb = {
  name: "Icon",
  common: Ve,
  self: Yb
}, Jb = O("icon", `
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
}, [z("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), z("svg", {
  height: "1em",
  width: "1em"
})]), Qb = Object.assign(Object.assign({}, ce.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), ca = Q({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: Qb,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r
    } = Pe(e), o = ce("Icon", "-icon", Jb, Zb, e, n), i = R(() => {
      const {
        depth: l
      } = e, {
        common: {
          cubicBezierEaseInOut: s
        },
        self: u
      } = o.value;
      if (l !== void 0) {
        const {
          color: d,
          [`opacity${l}Depth`]: c
        } = u;
        return {
          "--n-bezier": s,
          "--n-color": d,
          "--n-opacity": c
        };
      }
      return {
        "--n-bezier": s,
        "--n-color": "",
        "--n-opacity": ""
      };
    }), a = r ? je("icon", R(() => `${e.depth || "d"}`), i, e) : void 0;
    return {
      mergedClsPrefix: n,
      mergedStyle: R(() => {
        const {
          size: l,
          color: s
        } = e;
        return {
          fontSize: jt(l),
          color: s
        };
      }),
      cssVars: r ? void 0 : i,
      themeClass: a == null ? void 0 : a.themeClass,
      onRender: a == null ? void 0 : a.onRender
    };
  },
  render() {
    var e;
    const {
      $parent: n,
      depth: r,
      mergedClsPrefix: o,
      component: i,
      onRender: a,
      themeClass: l
    } = this;
    return !((e = n == null ? void 0 : n.$options) === null || e === void 0) && e._n_icon__ && Vt("icon", "don't wrap `n-icon` inside `n-icon`"), a == null || a(), h("i", an(this.$attrs, {
      role: "img",
      class: [`${o}-icon`, l, {
        [`${o}-icon--depth`]: r,
        [`${o}-icon--color-transition`]: r !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), i ? h(i) : this.$slots);
  }
}), fa = "n-dropdown-menu", Ao = "n-dropdown", _l = "n-dropdown-option";
function Si(e, n) {
  return e.type === "submenu" || e.type === void 0 && e[n] !== void 0;
}
function e1(e) {
  return e.type === "group";
}
function Lu(e) {
  return e.type === "divider";
}
function t1(e) {
  return e.type === "render";
}
const Nu = Q({
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
  setup(e) {
    const n = xe(Ao), {
      hoverKeyRef: r,
      keyboardKeyRef: o,
      lastToggledSubmenuKeyRef: i,
      pendingKeyPathRef: a,
      activeKeyPathRef: l,
      animatedRef: s,
      mergedShowRef: u,
      renderLabelRef: d,
      renderIconRef: c,
      labelFieldRef: f,
      childrenFieldRef: p,
      renderOptionRef: m,
      nodePropsRef: v,
      menuPropsRef: g
    } = n, b = xe(_l, null), x = xe(fa), B = xe(Er), A = R(() => e.tmNode.rawNode), y = R(() => {
      const {
        value: T
      } = p;
      return Si(e.tmNode.rawNode, T);
    }), S = R(() => {
      const {
        disabled: T
      } = e.tmNode;
      return T;
    }), E = R(() => {
      if (!y.value) return !1;
      const {
        key: T,
        disabled: j
      } = e.tmNode;
      if (j) return !1;
      const {
        value: J
      } = r, {
        value: Z
      } = o, {
        value: ae
      } = i, {
        value: W
      } = a;
      return J !== null ? W.includes(T) : Z !== null ? W.includes(T) && W[W.length - 1] !== T : ae !== null ? W.includes(T) : !1;
    }), C = R(() => o.value === null && !s.value), $ = kc(E, 300, C), M = R(() => !!(b != null && b.enteringSubmenuRef.value)), I = L(!1);
    we(_l, {
      enteringSubmenuRef: I
    });
    function K() {
      I.value = !0;
    }
    function H() {
      I.value = !1;
    }
    function t() {
      const {
        parentKey: T,
        tmNode: j
      } = e;
      j.disabled || u.value && (i.value = T, o.value = null, r.value = j.key);
    }
    function F() {
      const {
        tmNode: T
      } = e;
      T.disabled || u.value && r.value !== T.key && t();
    }
    function D(T) {
      if (e.tmNode.disabled || !u.value) return;
      const {
        relatedTarget: j
      } = T;
      j && !Wt({
        target: j
      }, "dropdownOption") && !Wt({
        target: j
      }, "scrollbarRail") && (r.value = null);
    }
    function _() {
      const {
        value: T
      } = y, {
        tmNode: j
      } = e;
      u.value && !T && !j.disabled && (n.doSelect(j.key, j.rawNode), n.doUpdateShow(!1));
    }
    return {
      labelField: f,
      renderLabel: d,
      renderIcon: c,
      siblingHasIcon: x.showIconRef,
      siblingHasSubmenu: x.hasSubmenuRef,
      menuProps: g,
      popoverBody: B,
      animated: s,
      mergedShowSubmenu: R(() => $.value && !M.value),
      rawNode: A,
      hasSubmenu: y,
      pending: We(() => {
        const {
          value: T
        } = a, {
          key: j
        } = e.tmNode;
        return T.includes(j);
      }),
      childActive: We(() => {
        const {
          value: T
        } = l, {
          key: j
        } = e.tmNode, J = T.findIndex((Z) => j === Z);
        return J === -1 ? !1 : J < T.length - 1;
      }),
      active: We(() => {
        const {
          value: T
        } = l, {
          key: j
        } = e.tmNode, J = T.findIndex((Z) => j === Z);
        return J === -1 ? !1 : J === T.length - 1;
      }),
      mergedDisabled: S,
      renderOption: m,
      nodeProps: v,
      handleClick: _,
      handleMouseMove: F,
      handleMouseEnter: t,
      handleMouseLeave: D,
      handleSubmenuBeforeEnter: K,
      handleSubmenuAfterEnter: H
    };
  },
  render() {
    var e, n;
    const {
      animated: r,
      rawNode: o,
      mergedShowSubmenu: i,
      clsPrefix: a,
      siblingHasIcon: l,
      siblingHasSubmenu: s,
      renderLabel: u,
      renderIcon: d,
      renderOption: c,
      nodeProps: f,
      props: p,
      scrollable: m
    } = this;
    let v = null;
    if (i) {
      const B = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, o, o.children);
      v = h(Hu, Object.assign({}, B, {
        clsPrefix: a,
        scrollable: this.scrollable,
        tmNodes: this.tmNode.children,
        parentKey: this.tmNode.key
      }));
    }
    const g = {
      class: [`${a}-dropdown-option-body`, this.pending && `${a}-dropdown-option-body--pending`, this.active && `${a}-dropdown-option-body--active`, this.childActive && `${a}-dropdown-option-body--child-active`, this.mergedDisabled && `${a}-dropdown-option-body--disabled`],
      onMousemove: this.handleMouseMove,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onClick: this.handleClick
    }, b = f == null ? void 0 : f(o), x = h("div", Object.assign({
      class: [`${a}-dropdown-option`, b == null ? void 0 : b.class],
      "data-dropdown-option": !0
    }, b), h("div", an(g, p), [h("div", {
      class: [`${a}-dropdown-option-body__prefix`, l && `${a}-dropdown-option-body__prefix--show-icon`]
    }, [d ? d(o) : Qe(o.icon)]), h("div", {
      "data-dropdown-option": !0,
      class: `${a}-dropdown-option-body__label`
    }, u ? u(o) : Qe((n = o[this.labelField]) !== null && n !== void 0 ? n : o.title)), h("div", {
      "data-dropdown-option": !0,
      class: [`${a}-dropdown-option-body__suffix`, s && `${a}-dropdown-option-body__suffix--has-submenu`]
    }, this.hasSubmenu ? h(ca, null, {
      default: () => h(gu, null)
    }) : null)]), this.hasSubmenu ? h(_i, null, {
      default: () => [h(Li, null, {
        default: () => h("div", {
          class: `${a}-dropdown-offset-container`
        }, h(Wi, {
          show: this.mergedShowSubmenu,
          placement: this.placement,
          to: m && this.popoverBody || void 0,
          teleportDisabled: !m
        }, {
          default: () => h("div", {
            class: `${a}-dropdown-menu-wrapper`
          }, r ? h(ft, {
            onBeforeEnter: this.handleSubmenuBeforeEnter,
            onAfterEnter: this.handleSubmenuAfterEnter,
            name: "fade-in-scale-up-transition",
            appear: !0
          }, {
            default: () => v
          }) : v)
        }))
      })]
    }) : null);
    return c ? c({
      node: x,
      option: o
    }) : x;
  }
}), n1 = Q({
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
      showIconRef: e,
      hasSubmenuRef: n
    } = xe(fa), {
      renderLabelRef: r,
      labelFieldRef: o,
      nodePropsRef: i,
      renderOptionRef: a
    } = xe(Ao);
    return {
      labelField: o,
      showIcon: e,
      hasSubmenu: n,
      renderLabel: r,
      nodeProps: i,
      renderOption: a
    };
  },
  render() {
    var e;
    const {
      clsPrefix: n,
      hasSubmenu: r,
      showIcon: o,
      nodeProps: i,
      renderLabel: a,
      renderOption: l
    } = this, {
      rawNode: s
    } = this.tmNode, u = h("div", Object.assign({
      class: `${n}-dropdown-option`
    }, i == null ? void 0 : i(s)), h("div", {
      class: `${n}-dropdown-option-body ${n}-dropdown-option-body--group`
    }, h("div", {
      "data-dropdown-option": !0,
      class: [`${n}-dropdown-option-body__prefix`, o && `${n}-dropdown-option-body__prefix--show-icon`]
    }, Qe(s.icon)), h("div", {
      class: `${n}-dropdown-option-body__label`,
      "data-dropdown-option": !0
    }, a ? a(s) : Qe((e = s.title) !== null && e !== void 0 ? e : s[this.labelField])), h("div", {
      class: [`${n}-dropdown-option-body__suffix`, r && `${n}-dropdown-option-body__suffix--has-submenu`],
      "data-dropdown-option": !0
    })));
    return l ? l({
      node: u,
      option: s
    }) : u;
  }
}), r1 = Q({
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
      tmNode: e,
      parentKey: n,
      clsPrefix: r
    } = this, {
      children: o
    } = e;
    return h(ht, null, h(n1, {
      clsPrefix: r,
      tmNode: e,
      key: e.key
    }), o == null ? void 0 : o.map((i) => {
      const {
        rawNode: a
      } = i;
      return a.show === !1 ? null : Lu(a) ? h(_u, {
        clsPrefix: r,
        key: i.key
      }) : i.isGroup ? (Vt("dropdown", "`group` node is not allowed to be put in `group` node."), null) : h(Nu, {
        clsPrefix: r,
        tmNode: i,
        parentKey: n,
        key: i.key
      });
    }));
  }
}), o1 = Q({
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
        render: e,
        props: n
      }
    } = this.tmNode;
    return h("div", n, [e == null ? void 0 : e()]);
  }
}), Hu = Q({
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
  setup(e) {
    const {
      renderIconRef: n,
      childrenFieldRef: r
    } = xe(Ao);
    we(fa, {
      showIconRef: R(() => {
        const i = n.value;
        return e.tmNodes.some((a) => {
          var l;
          if (a.isGroup)
            return (l = a.children) === null || l === void 0 ? void 0 : l.some(({
              rawNode: u
            }) => i ? i(u) : u.icon);
          const {
            rawNode: s
          } = a;
          return i ? i(s) : s.icon;
        });
      }),
      hasSubmenuRef: R(() => {
        const {
          value: i
        } = r;
        return e.tmNodes.some((a) => {
          var l;
          if (a.isGroup)
            return (l = a.children) === null || l === void 0 ? void 0 : l.some(({
              rawNode: u
            }) => Si(u, i));
          const {
            rawNode: s
          } = a;
          return Si(s, i);
        });
      })
    });
    const o = L(null);
    return we(go, null), we(mo, null), we(Er, o), {
      bodyRef: o
    };
  },
  render() {
    const {
      parentKey: e,
      clsPrefix: n,
      scrollable: r
    } = this, o = this.tmNodes.map((i) => {
      const {
        rawNode: a
      } = i;
      return a.show === !1 ? null : t1(a) ? h(o1, {
        tmNode: i,
        key: i.key
      }) : Lu(a) ? h(_u, {
        clsPrefix: n,
        key: i.key
      }) : e1(a) ? h(r1, {
        clsPrefix: n,
        tmNode: i,
        parentKey: e,
        key: i.key
      }) : h(Nu, {
        clsPrefix: n,
        tmNode: i,
        parentKey: e,
        key: i.key,
        props: a.props,
        scrollable: r
      });
    });
    return h("div", {
      class: [`${n}-dropdown-menu`, r && `${n}-dropdown-menu--scrollable`],
      ref: "bodyRef"
    }, r ? h(Au, {
      contentClass: `${n}-dropdown-menu__content`
    }, {
      default: () => o
    }) : o, this.showArrow ? Pu({
      clsPrefix: n,
      arrowStyle: this.arrowStyle,
      arrowClass: void 0,
      arrowWrapperClass: void 0,
      arrowWrapperStyle: void 0
    }) : null);
  }
}), i1 = O("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [Fo(), O("dropdown-option", `
 position: relative;
 `, [z("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [z("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), O("dropdown-option-body", `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [z("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), He("disabled", [V("pending", `
 color: var(--n-option-text-color-hover);
 `, [k("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), z("&::before", "background-color: var(--n-option-color-hover);")]), V("active", `
 color: var(--n-option-text-color-active);
 `, [k("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), z("&::before", "background-color: var(--n-option-color-active);")]), V("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [k("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), V("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), V("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [k("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [V("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), k("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [V("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), O("icon", `
 font-size: var(--n-option-icon-size);
 `)]), k("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), k("suffix", `
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
 `), O("icon", `
 font-size: var(--n-option-icon-size);
 `)]), O("dropdown-menu", "pointer-events: all;")]), O("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), O("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), O("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), z(">", [O("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), He("scrollable", `
 padding: var(--n-padding);
 `), V("scrollable", [k("content", `
 padding: var(--n-padding);
 `)])]), a1 = {
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
}, l1 = Object.keys(Tr), s1 = Object.assign(Object.assign(Object.assign({}, Tr), a1), ce.props), u1 = Q({
  name: "Dropdown",
  inheritAttrs: !1,
  props: s1,
  setup(e) {
    const n = L(!1), r = Gn(le(e, "show"), n), o = R(() => {
      const {
        keyField: H,
        childrenField: t
      } = e;
      return wu(e.options, {
        getKey(F) {
          return F[H];
        },
        getDisabled(F) {
          return F.disabled === !0;
        },
        getIgnored(F) {
          return F.type === "divider" || F.type === "render";
        },
        getChildren(F) {
          return F[t];
        }
      });
    }), i = R(() => o.value.treeNodes), a = L(null), l = L(null), s = L(null), u = R(() => {
      var H, t, F;
      return (F = (t = (H = a.value) !== null && H !== void 0 ? H : l.value) !== null && t !== void 0 ? t : s.value) !== null && F !== void 0 ? F : null;
    }), d = R(() => o.value.getPath(u.value).keyPath), c = R(() => o.value.getPath(e.value).keyPath), f = We(() => e.keyboard && r.value);
    Wc({
      keydown: {
        ArrowUp: {
          prevent: !0,
          handler: S
        },
        ArrowRight: {
          prevent: !0,
          handler: y
        },
        ArrowDown: {
          prevent: !0,
          handler: E
        },
        ArrowLeft: {
          prevent: !0,
          handler: A
        },
        Enter: {
          prevent: !0,
          handler: C
        },
        Escape: B
      }
    }, f);
    const {
      mergedClsPrefixRef: p,
      inlineThemeDisabled: m
    } = Pe(e), v = ce("Dropdown", "-dropdown", i1, Ub, e, p);
    we(Ao, {
      labelFieldRef: le(e, "labelField"),
      childrenFieldRef: le(e, "childrenField"),
      renderLabelRef: le(e, "renderLabel"),
      renderIconRef: le(e, "renderIcon"),
      hoverKeyRef: a,
      keyboardKeyRef: l,
      lastToggledSubmenuKeyRef: s,
      pendingKeyPathRef: d,
      activeKeyPathRef: c,
      animatedRef: le(e, "animated"),
      mergedShowRef: r,
      nodePropsRef: le(e, "nodeProps"),
      renderOptionRef: le(e, "renderOption"),
      menuPropsRef: le(e, "menuProps"),
      doSelect: g,
      doUpdateShow: b
    }), ze(r, (H) => {
      !e.animated && !H && x();
    });
    function g(H, t) {
      const {
        onSelect: F
      } = e;
      F && he(F, H, t);
    }
    function b(H) {
      const {
        "onUpdate:show": t,
        onUpdateShow: F
      } = e;
      t && he(t, H), F && he(F, H), n.value = H;
    }
    function x() {
      a.value = null, l.value = null, s.value = null;
    }
    function B() {
      b(!1);
    }
    function A() {
      M("left");
    }
    function y() {
      M("right");
    }
    function S() {
      M("up");
    }
    function E() {
      M("down");
    }
    function C() {
      const H = $();
      H != null && H.isLeaf && r.value && (g(H.key, H.rawNode), b(!1));
    }
    function $() {
      var H;
      const {
        value: t
      } = o, {
        value: F
      } = u;
      return !t || F === null ? null : (H = t.getNode(F)) !== null && H !== void 0 ? H : null;
    }
    function M(H) {
      const {
        value: t
      } = u, {
        value: {
          getFirstAvailableNode: F
        }
      } = o;
      let D = null;
      if (t === null) {
        const _ = F();
        _ !== null && (D = _.key);
      } else {
        const _ = $();
        if (_) {
          let T;
          switch (H) {
            case "down":
              T = _.getNext();
              break;
            case "up":
              T = _.getPrev();
              break;
            case "right":
              T = _.getChild();
              break;
            case "left":
              T = _.getParent();
              break;
          }
          T && (D = T.key);
        }
      }
      D !== null && (a.value = null, l.value = D);
    }
    const I = R(() => {
      const {
        size: H,
        inverted: t
      } = e, {
        common: {
          cubicBezierEaseInOut: F
        },
        self: D
      } = v.value, {
        padding: _,
        dividerColor: T,
        borderRadius: j,
        optionOpacityDisabled: J,
        [Y("optionIconSuffixWidth", H)]: Z,
        [Y("optionSuffixWidth", H)]: ae,
        [Y("optionIconPrefixWidth", H)]: W,
        [Y("optionPrefixWidth", H)]: X,
        [Y("fontSize", H)]: ne,
        [Y("optionHeight", H)]: Be,
        [Y("optionIconSize", H)]: re
      } = D, ve = {
        "--n-bezier": F,
        "--n-font-size": ne,
        "--n-padding": _,
        "--n-border-radius": j,
        "--n-option-height": Be,
        "--n-option-prefix-width": X,
        "--n-option-icon-prefix-width": W,
        "--n-option-suffix-width": ae,
        "--n-option-icon-suffix-width": Z,
        "--n-option-icon-size": re,
        "--n-divider-color": T,
        "--n-option-opacity-disabled": J
      };
      return t ? (ve["--n-color"] = D.colorInverted, ve["--n-option-color-hover"] = D.optionColorHoverInverted, ve["--n-option-color-active"] = D.optionColorActiveInverted, ve["--n-option-text-color"] = D.optionTextColorInverted, ve["--n-option-text-color-hover"] = D.optionTextColorHoverInverted, ve["--n-option-text-color-active"] = D.optionTextColorActiveInverted, ve["--n-option-text-color-child-active"] = D.optionTextColorChildActiveInverted, ve["--n-prefix-color"] = D.prefixColorInverted, ve["--n-suffix-color"] = D.suffixColorInverted, ve["--n-group-header-text-color"] = D.groupHeaderTextColorInverted) : (ve["--n-color"] = D.color, ve["--n-option-color-hover"] = D.optionColorHover, ve["--n-option-color-active"] = D.optionColorActive, ve["--n-option-text-color"] = D.optionTextColor, ve["--n-option-text-color-hover"] = D.optionTextColorHover, ve["--n-option-text-color-active"] = D.optionTextColorActive, ve["--n-option-text-color-child-active"] = D.optionTextColorChildActive, ve["--n-prefix-color"] = D.prefixColor, ve["--n-suffix-color"] = D.suffixColor, ve["--n-group-header-text-color"] = D.groupHeaderTextColor), ve;
    }), K = m ? je("dropdown", R(() => `${e.size[0]}${e.inverted ? "i" : ""}`), I, e) : void 0;
    return {
      mergedClsPrefix: p,
      mergedTheme: v,
      // data
      tmNodes: i,
      // show
      mergedShow: r,
      // methods
      handleAfterLeave: () => {
        e.animated && x();
      },
      doUpdateShow: b,
      cssVars: m ? void 0 : I,
      themeClass: K == null ? void 0 : K.themeClass,
      onRender: K == null ? void 0 : K.onRender
    };
  },
  render() {
    const e = (o, i, a, l, s) => {
      var u;
      const {
        mergedClsPrefix: d,
        menuProps: c
      } = this;
      (u = this.onRender) === null || u === void 0 || u.call(this);
      const f = (c == null ? void 0 : c(void 0, this.tmNodes.map((m) => m.rawNode))) || {}, p = {
        ref: nc(i),
        class: [o, `${d}-dropdown`, this.themeClass],
        clsPrefix: d,
        tmNodes: this.tmNodes,
        style: [...a, this.cssVars],
        showArrow: this.showArrow,
        arrowStyle: this.arrowStyle,
        scrollable: this.scrollable,
        onMouseenter: l,
        onMouseleave: s
      };
      return h(Hu, an(this.$attrs, p, f));
    }, {
      mergedTheme: n
    } = this, r = {
      show: this.mergedShow,
      theme: n.peers.Popover,
      themeOverrides: n.peerOverrides.Popover,
      internalOnAfterLeave: this.handleAfterLeave,
      internalRenderBody: e,
      onUpdateShow: this.doUpdateShow,
      "onUpdate:show": void 0
    };
    return h(Rr, Object.assign({}, Cn(this.$props, l1), r), {
      trigger: () => {
        var o, i;
        return (i = (o = this.$slots).default) === null || i === void 0 ? void 0 : i.call(o);
      }
    });
  }
}), d1 = {
  titleFontSize: "18px",
  padding: "16px 28px 20px 28px",
  iconSize: "28px",
  actionSpace: "12px",
  contentMargin: "8px 0 16px 0",
  iconMargin: "0 4px 0 0",
  iconMarginIconTop: "4px 0 8px 0",
  closeSize: "22px",
  closeIconSize: "18px",
  closeMargin: "20px 26px 0 0",
  closeMarginIconTop: "10px 16px 0 0"
};
function c1(e) {
  const {
    textColor1: n,
    textColor2: r,
    modalColor: o,
    closeIconColor: i,
    closeIconColorHover: a,
    closeIconColorPressed: l,
    closeColorHover: s,
    closeColorPressed: u,
    infoColor: d,
    successColor: c,
    warningColor: f,
    errorColor: p,
    primaryColor: m,
    dividerColor: v,
    borderRadius: g,
    fontWeightStrong: b,
    lineHeight: x,
    fontSize: B
  } = e;
  return Object.assign(Object.assign({}, d1), {
    fontSize: B,
    lineHeight: x,
    border: `1px solid ${v}`,
    titleTextColor: n,
    textColor: r,
    color: o,
    closeColorHover: s,
    closeColorPressed: u,
    closeIconColor: i,
    closeIconColorHover: a,
    closeIconColorPressed: l,
    closeBorderRadius: g,
    iconColor: m,
    iconColorInfo: d,
    iconColorSuccess: c,
    iconColorWarning: f,
    iconColorError: p,
    borderRadius: g,
    titleFontWeight: b
  });
}
const Wu = {
  name: "Dialog",
  common: Ve,
  peers: {
    Button: ua
  },
  self: c1
}, $o = {
  icon: Function,
  type: {
    type: String,
    default: "default"
  },
  title: [String, Function],
  closable: {
    type: Boolean,
    default: !0
  },
  negativeText: String,
  positiveText: String,
  positiveButtonProps: Object,
  negativeButtonProps: Object,
  content: [String, Function],
  action: Function,
  showIcon: {
    type: Boolean,
    default: !0
  },
  loading: Boolean,
  bordered: Boolean,
  iconPlacement: String,
  titleClass: [String, Array],
  titleStyle: [String, Object],
  contentClass: [String, Array],
  contentStyle: [String, Object],
  actionClass: [String, Array],
  actionStyle: [String, Object],
  onPositiveClick: Function,
  onNegativeClick: Function,
  onClose: Function
}, ju = Un($o), f1 = z([O("dialog", `
 --n-icon-margin: var(--n-icon-margin-top) var(--n-icon-margin-right) var(--n-icon-margin-bottom) var(--n-icon-margin-left);
 word-break: break-word;
 line-height: var(--n-line-height);
 position: relative;
 background: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 margin: auto;
 border-radius: var(--n-border-radius);
 padding: var(--n-padding);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `, [k("icon", {
  color: "var(--n-icon-color)"
}), V("bordered", {
  border: "var(--n-border)"
}), V("icon-top", [k("close", {
  margin: "var(--n-close-margin)"
}), k("icon", {
  margin: "var(--n-icon-margin)"
}), k("content", {
  textAlign: "center"
}), k("title", {
  justifyContent: "center"
}), k("action", {
  justifyContent: "center"
})]), V("icon-left", [k("icon", {
  margin: "var(--n-icon-margin)"
}), V("closable", [k("title", `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), k("close", `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), k("content", `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [V("last", "margin-bottom: 0;")]), k("action", `
 display: flex;
 justify-content: flex-end;
 `, [z("> *:not(:last-child)", `
 margin-right: var(--n-action-space);
 `)]), k("icon", `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), k("title", `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), O("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), Ti(O("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), O("dialog", [ps(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), h1 = {
  default: () => h(Dl, null),
  info: () => h(Dl, null),
  success: () => h(kg, null),
  warning: () => h(mu, null),
  error: () => h(Eg, null)
}, Vu = Q({
  name: "Dialog",
  alias: [
    "NimbusConfirmCard",
    // deprecated
    "Confirm"
    // deprecated
  ],
  props: Object.assign(Object.assign({}, ce.props), $o),
  setup(e) {
    const {
      mergedComponentPropsRef: n,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Pe(e), a = wt("Dialog", i, r), l = R(() => {
      var m, v;
      const {
        iconPlacement: g
      } = e;
      return g || ((v = (m = n == null ? void 0 : n.value) === null || m === void 0 ? void 0 : m.Dialog) === null || v === void 0 ? void 0 : v.iconPlacement) || "left";
    });
    function s(m) {
      const {
        onPositiveClick: v
      } = e;
      v && v(m);
    }
    function u(m) {
      const {
        onNegativeClick: v
      } = e;
      v && v(m);
    }
    function d() {
      const {
        onClose: m
      } = e;
      m && m();
    }
    const c = ce("Dialog", "-dialog", f1, Wu, e, r), f = R(() => {
      const {
        type: m
      } = e, v = l.value, {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          fontSize: b,
          lineHeight: x,
          border: B,
          titleTextColor: A,
          textColor: y,
          color: S,
          closeBorderRadius: E,
          closeColorHover: C,
          closeColorPressed: $,
          closeIconColor: M,
          closeIconColorHover: I,
          closeIconColorPressed: K,
          closeIconSize: H,
          borderRadius: t,
          titleFontWeight: F,
          titleFontSize: D,
          padding: _,
          iconSize: T,
          actionSpace: j,
          contentMargin: J,
          closeSize: Z,
          [v === "top" ? "iconMarginIconTop" : "iconMargin"]: ae,
          [v === "top" ? "closeMarginIconTop" : "closeMargin"]: W,
          [Y("iconColor", m)]: X
        }
      } = c.value, ne = Dt(ae);
      return {
        "--n-font-size": b,
        "--n-icon-color": X,
        "--n-bezier": g,
        "--n-close-margin": W,
        "--n-icon-margin-top": ne.top,
        "--n-icon-margin-right": ne.right,
        "--n-icon-margin-bottom": ne.bottom,
        "--n-icon-margin-left": ne.left,
        "--n-icon-size": T,
        "--n-close-size": Z,
        "--n-close-icon-size": H,
        "--n-close-border-radius": E,
        "--n-close-color-hover": C,
        "--n-close-color-pressed": $,
        "--n-close-icon-color": M,
        "--n-close-icon-color-hover": I,
        "--n-close-icon-color-pressed": K,
        "--n-color": S,
        "--n-text-color": y,
        "--n-border-radius": t,
        "--n-padding": _,
        "--n-line-height": x,
        "--n-border": B,
        "--n-content-margin": J,
        "--n-title-font-size": D,
        "--n-title-font-weight": F,
        "--n-title-text-color": A,
        "--n-action-space": j
      };
    }), p = o ? je("dialog", R(() => `${e.type[0]}${l.value[0]}`), f, e) : void 0;
    return {
      mergedClsPrefix: r,
      rtlEnabled: a,
      mergedIconPlacement: l,
      mergedTheme: c,
      handlePositiveClick: s,
      handleNegativeClick: u,
      handleCloseClick: d,
      cssVars: o ? void 0 : f,
      themeClass: p == null ? void 0 : p.themeClass,
      onRender: p == null ? void 0 : p.onRender
    };
  },
  render() {
    var e;
    const {
      bordered: n,
      mergedIconPlacement: r,
      cssVars: o,
      closable: i,
      showIcon: a,
      title: l,
      content: s,
      action: u,
      negativeText: d,
      positiveText: c,
      positiveButtonProps: f,
      negativeButtonProps: p,
      handlePositiveClick: m,
      handleNegativeClick: v,
      mergedTheme: g,
      loading: b,
      type: x,
      mergedClsPrefix: B
    } = this;
    (e = this.onRender) === null || e === void 0 || e.call(this);
    const A = a ? h(zt, {
      clsPrefix: B,
      class: `${B}-dialog__icon`
    }, {
      default: () => _e(this.$slots.icon, (S) => S || (this.icon ? Qe(this.icon) : h1[this.type]()))
    }) : null, y = _e(this.$slots.action, (S) => S || c || d || u ? h("div", {
      class: [`${B}-dialog__action`, this.actionClass],
      style: this.actionStyle
    }, S || (u ? [Qe(u)] : [this.negativeText && h(Fr, Object.assign({
      theme: g.peers.Button,
      themeOverrides: g.peerOverrides.Button,
      ghost: !0,
      size: "small",
      onClick: v
    }, p), {
      default: () => Qe(this.negativeText)
    }), this.positiveText && h(Fr, Object.assign({
      theme: g.peers.Button,
      themeOverrides: g.peerOverrides.Button,
      size: "small",
      type: x === "default" ? "primary" : x,
      disabled: b,
      loading: b,
      onClick: m
    }, f), {
      default: () => Qe(this.positiveText)
    })])) : null);
    return h("div", {
      class: [`${B}-dialog`, this.themeClass, this.closable && `${B}-dialog--closable`, `${B}-dialog--icon-${r}`, n && `${B}-dialog--bordered`, this.rtlEnabled && `${B}-dialog--rtl`],
      style: o,
      role: "dialog"
    }, i ? _e(this.$slots.close, (S) => {
      const E = [`${B}-dialog__close`, this.rtlEnabled && `${B}-dialog--rtl`];
      return S ? h("div", {
        class: E
      }, S) : h(aa, {
        clsPrefix: B,
        class: E,
        onClick: this.handleCloseClick
      });
    }) : null, a && r === "top" ? h("div", {
      class: `${B}-dialog-icon-container`
    }, A) : null, h("div", {
      class: [`${B}-dialog__title`, this.titleClass],
      style: this.titleStyle
    }, a && r === "left" ? A : null, Pt(this.$slots.header, () => [Qe(l)])), h("div", {
      class: [`${B}-dialog__content`, y ? "" : `${B}-dialog__content--last`, this.contentClass],
      style: this.contentStyle
    }, Pt(this.$slots.default, () => [Qe(s)])), y);
  }
}), qu = "n-dialog-provider", Ku = "n-dialog-api", v1 = "n-dialog-reactive-list";
function p1(e) {
  const {
    modalColor: n,
    textColor2: r,
    boxShadow3: o
  } = e;
  return {
    color: n,
    textColor: r,
    boxShadow: o
  };
}
const x1 = {
  name: "Modal",
  common: Ve,
  peers: {
    Scrollbar: sa,
    Dialog: Wu,
    Card: Mu
  },
  self: p1
}, ha = Object.assign(Object.assign({}, da), $o), g1 = Un(ha), m1 = Q({
  name: "ModalBody",
  inheritAttrs: !1,
  props: Object.assign(Object.assign({
    show: {
      type: Boolean,
      required: !0
    },
    preset: String,
    displayDirective: {
      type: String,
      required: !0
    },
    trapFocus: {
      type: Boolean,
      default: !0
    },
    autoFocus: {
      type: Boolean,
      default: !0
    },
    blockScroll: Boolean
  }, ha), {
    renderMask: Function,
    // events
    onClickoutside: Function,
    onBeforeLeave: {
      type: Function,
      required: !0
    },
    onAfterLeave: {
      type: Function,
      required: !0
    },
    onPositiveClick: {
      type: Function,
      required: !0
    },
    onNegativeClick: {
      type: Function,
      required: !0
    },
    onClose: {
      type: Function,
      required: !0
    },
    onAfterEnter: Function,
    onEsc: Function
  }),
  setup(e) {
    const n = L(null), r = L(null), o = L(e.show), i = L(null), a = L(null);
    ze(le(e, "show"), (b) => {
      b && (o.value = !0);
    }), Of(R(() => e.blockScroll && o.value));
    const l = xe(ws);
    function s() {
      if (l.transformOriginRef.value === "center")
        return "";
      const {
        value: b
      } = i, {
        value: x
      } = a;
      if (b === null || x === null)
        return "";
      if (r.value) {
        const B = r.value.containerScrollTop;
        return `${b}px ${x + B}px`;
      }
      return "";
    }
    function u(b) {
      if (l.transformOriginRef.value === "center")
        return;
      const x = l.getMousePosition();
      if (!x || !r.value) return;
      const B = r.value.containerScrollTop, {
        offsetLeft: A,
        offsetTop: y
      } = b;
      if (x) {
        const S = x.y, E = x.x;
        i.value = -(A - E), a.value = -(y - S - B);
      }
      b.style.transformOrigin = s();
    }
    function d(b) {
      et(() => {
        u(b);
      });
    }
    function c(b) {
      b.style.transformOrigin = s(), e.onBeforeLeave();
    }
    function f() {
      o.value = !1, i.value = null, a.value = null, e.onAfterLeave();
    }
    function p() {
      const {
        onClose: b
      } = e;
      b && b();
    }
    function m() {
      e.onNegativeClick();
    }
    function v() {
      e.onPositiveClick();
    }
    const g = L(null);
    return ze(g, (b) => {
      b && et(() => {
        const x = b.el;
        x && n.value !== x && (n.value = x);
      });
    }), we(go, n), we(mo, null), we(Er, null), {
      mergedTheme: l.mergedThemeRef,
      appear: l.appearRef,
      isMounted: l.isMountedRef,
      mergedClsPrefix: l.mergedClsPrefixRef,
      bodyRef: n,
      scrollbarRef: r,
      displayed: o,
      childNodeRef: g,
      handlePositiveClick: v,
      handleNegativeClick: m,
      handleCloseClick: p,
      handleAfterLeave: f,
      handleBeforeLeave: c,
      handleEnter: d
    };
  },
  render() {
    const {
      $slots: e,
      $attrs: n,
      handleEnter: r,
      handleAfterLeave: o,
      handleBeforeLeave: i,
      preset: a,
      mergedClsPrefix: l
    } = this;
    let s = null;
    if (!a) {
      if (s = oi(e), !s) {
        Vt("modal", "default slot is empty");
        return;
      }
      s = Jl(s), s.props = an({
        class: `${l}-modal`
      }, n, s.props || {});
    }
    return this.displayDirective === "show" || this.displayed || this.show ? kt(h("div", {
      role: "none",
      class: `${l}-modal-body-wrapper`
    }, h(So, {
      ref: "scrollbarRef",
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      contentClass: `${l}-modal-scroll-content`
    }, {
      default: () => {
        var u;
        return [(u = this.renderMask) === null || u === void 0 ? void 0 : u.call(this), h(Ls, {
          disabled: !this.trapFocus,
          active: this.show,
          onEsc: this.onEsc,
          autoFocus: this.autoFocus
        }, {
          default: () => {
            var d;
            return h(ft, {
              name: "fade-in-scale-up-transition",
              appear: (d = this.appear) !== null && d !== void 0 ? d : this.isMounted,
              onEnter: r,
              onAfterEnter: this.onAfterEnter,
              onAfterLeave: o,
              onBeforeLeave: i
            }, {
              default: () => {
                const c = [[qn, this.show]], {
                  onClickoutside: f
                } = this;
                return f && c.push([mr, this.onClickoutside, void 0, {
                  capture: !0
                }]), kt(this.preset === "confirm" || this.preset === "dialog" ? h(Vu, Object.assign({}, this.$attrs, {
                  class: [`${l}-modal`, this.$attrs.class],
                  ref: "bodyRef",
                  theme: this.mergedTheme.peers.Dialog,
                  themeOverrides: this.mergedTheme.peerOverrides.Dialog
                }, Cn(this.$props, ju), {
                  "aria-modal": "true"
                }), e) : this.preset === "card" ? h(Ab, Object.assign({}, this.$attrs, {
                  ref: "bodyRef",
                  class: [`${l}-modal`, this.$attrs.class],
                  theme: this.mergedTheme.peers.Card,
                  themeOverrides: this.mergedTheme.peerOverrides.Card
                }, Cn(this.$props, Sb), {
                  "aria-modal": "true",
                  role: "dialog"
                }), e) : this.childNodeRef = s, c);
              }
            });
          }
        })];
      }
    })), [[qn, this.displayDirective === "if" || this.displayed || this.show]]) : null;
  }
}), b1 = z([O("modal-container", `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), O("modal-mask", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [Bo({
  enterDuration: ".25s",
  leaveDuration: ".25s",
  enterCubicBezier: "var(--n-bezier-ease-out)",
  leaveCubicBezier: "var(--n-bezier-ease-out)"
})]), O("modal-body-wrapper", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [O("modal-scroll-content", `
 min-height: 100%;
 display: flex;
 position: relative;
 `)]), O("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [Fo({
  duration: ".25s",
  enterScale: ".5"
})])]), C1 = Object.assign(Object.assign(Object.assign(Object.assign({}, ce.props), {
  show: Boolean,
  unstableShowMask: {
    type: Boolean,
    default: !0
  },
  maskClosable: {
    type: Boolean,
    default: !0
  },
  preset: String,
  to: [String, Object],
  displayDirective: {
    type: String,
    default: "if"
  },
  transformOrigin: {
    type: String,
    default: "mouse"
  },
  zIndex: Number,
  autoFocus: {
    type: Boolean,
    default: !0
  },
  trapFocus: {
    type: Boolean,
    default: !0
  },
  closeOnEsc: {
    type: Boolean,
    default: !0
  },
  blockScroll: {
    type: Boolean,
    default: !0
  }
}), ha), {
  // events
  onEsc: Function,
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  onAfterEnter: Function,
  onBeforeLeave: Function,
  onAfterLeave: Function,
  onClose: Function,
  onPositiveClick: Function,
  onNegativeClick: Function,
  onMaskClick: Function,
  // private
  internalDialog: Boolean,
  internalModal: Boolean,
  internalAppear: {
    type: Boolean,
    default: void 0
  },
  // deprecated
  overlayStyle: [String, Object],
  onBeforeHide: Function,
  onAfterHide: Function,
  onHide: Function
}), y1 = Q({
  name: "Modal",
  inheritAttrs: !1,
  props: C1,
  setup(e) {
    process.env.NODE_ENV !== "production" && (e.onHide && nt("modal", "`on-hide` is deprecated."), e.onAfterHide && nt("modal", "`on-after-hide` is deprecated, please use `on-after-leave` instead."), e.onBeforeHide && nt("modal", "`on-before-hide` is deprecated, please use `on-before-leave` instead."), e.overlayStyle && nt("modal", "`overlay-style` is deprecated, please use `style` instead."));
    const n = L(null), {
      mergedClsPrefixRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Pe(e), a = ce("Modal", "-modal", b1, x1, e, r), l = Cs(64), s = bs(), u = Jn(), d = e.internalDialog ? xe(qu, null) : null, c = e.internalModal ? xe(jc, null) : null, f = Mf();
    function p(E) {
      const {
        onUpdateShow: C,
        "onUpdate:show": $,
        onHide: M
      } = e;
      C && he(C, E), $ && he($, E), M && !E && M(E);
    }
    function m() {
      const {
        onClose: E
      } = e;
      E ? Promise.resolve(E()).then((C) => {
        C !== !1 && p(!1);
      }) : p(!1);
    }
    function v() {
      const {
        onPositiveClick: E
      } = e;
      E ? Promise.resolve(E()).then((C) => {
        C !== !1 && p(!1);
      }) : p(!1);
    }
    function g() {
      const {
        onNegativeClick: E
      } = e;
      E ? Promise.resolve(E()).then((C) => {
        C !== !1 && p(!1);
      }) : p(!1);
    }
    function b() {
      const {
        onBeforeLeave: E,
        onBeforeHide: C
      } = e;
      E && he(E), C && C();
    }
    function x() {
      const {
        onAfterLeave: E,
        onAfterHide: C
      } = e;
      E && he(E), C && C();
    }
    function B(E) {
      var C;
      const {
        onMaskClick: $
      } = e;
      $ && $(E), e.maskClosable && !((C = n.value) === null || C === void 0) && C.contains(Kn(E)) && p(!1);
    }
    function A(E) {
      var C;
      (C = e.onEsc) === null || C === void 0 || C.call(e), e.show && e.closeOnEsc && Pc(E) && (f.value || p(!1));
    }
    we(ws, {
      getMousePosition: () => {
        const E = d || c;
        if (E) {
          const {
            clickedRef: C,
            clickedPositionRef: $
          } = E;
          if (C.value && $.value)
            return $.value;
        }
        return l.value ? s.value : null;
      },
      mergedClsPrefixRef: r,
      mergedThemeRef: a,
      isMountedRef: u,
      appearRef: le(e, "internalAppear"),
      transformOriginRef: le(e, "transformOrigin")
    });
    const y = R(() => {
      const {
        common: {
          cubicBezierEaseOut: E
        },
        self: {
          boxShadow: C,
          color: $,
          textColor: M
        }
      } = a.value;
      return {
        "--n-bezier-ease-out": E,
        "--n-box-shadow": C,
        "--n-color": $,
        "--n-text-color": M
      };
    }), S = i ? je("theme-class", void 0, y, e) : void 0;
    return {
      mergedClsPrefix: r,
      namespace: o,
      isMounted: u,
      containerRef: n,
      presetProps: R(() => Cn(e, g1)),
      handleEsc: A,
      handleAfterLeave: x,
      handleClickoutside: B,
      handleBeforeLeave: b,
      doUpdateShow: p,
      handleNegativeClick: g,
      handlePositiveClick: v,
      handleCloseClick: m,
      cssVars: i ? void 0 : y,
      themeClass: S == null ? void 0 : S.themeClass,
      onRender: S == null ? void 0 : S.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return h($s, {
      to: this.to,
      show: this.show
    }, {
      default: () => {
        var n;
        (n = this.onRender) === null || n === void 0 || n.call(this);
        const {
          unstableShowMask: r
        } = this;
        return kt(h("div", {
          role: "none",
          ref: "containerRef",
          class: [`${e}-modal-container`, this.themeClass, this.namespace],
          style: this.cssVars
        }, h(m1, Object.assign({
          style: this.overlayStyle
        }, this.$attrs, {
          ref: "bodyWrapper",
          displayDirective: this.displayDirective,
          show: this.show,
          preset: this.preset,
          autoFocus: this.autoFocus,
          trapFocus: this.trapFocus,
          blockScroll: this.blockScroll
        }, this.presetProps, {
          onEsc: this.handleEsc,
          onClose: this.handleCloseClick,
          onNegativeClick: this.handleNegativeClick,
          onPositiveClick: this.handlePositiveClick,
          onBeforeLeave: this.handleBeforeLeave,
          onAfterEnter: this.onAfterEnter,
          onAfterLeave: this.handleAfterLeave,
          onClickoutside: r ? void 0 : this.handleClickoutside,
          renderMask: r ? () => {
            var o;
            return h(ft, {
              name: "fade-in-transition",
              key: "mask",
              appear: (o = this.internalAppear) !== null && o !== void 0 ? o : this.isMounted
            }, {
              default: () => this.show ? h("div", {
                "aria-hidden": !0,
                ref: "containerRef",
                class: `${e}-modal-mask`,
                onClick: this.handleClickoutside
              }) : null
            });
          } : void 0
        }), this.$slots)), [[Ni, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
}), w1 = Object.assign(Object.assign({}, $o), {
  onAfterEnter: Function,
  onAfterLeave: Function,
  transformOrigin: String,
  blockScroll: {
    type: Boolean,
    default: !0
  },
  closeOnEsc: {
    type: Boolean,
    default: !0
  },
  onEsc: Function,
  autoFocus: {
    type: Boolean,
    default: !0
  },
  internalStyle: [String, Object],
  maskClosable: {
    type: Boolean,
    default: !0
  },
  onPositiveClick: Function,
  onNegativeClick: Function,
  onClose: Function,
  onMaskClick: Function
}), B1 = Q({
  name: "DialogEnvironment",
  props: Object.assign(Object.assign({}, w1), {
    internalKey: {
      type: String,
      required: !0
    },
    to: [String, Object],
    // private
    onInternalAfterLeave: {
      type: Function,
      required: !0
    }
  }),
  setup(e) {
    const n = L(!0);
    function r() {
      const {
        onInternalAfterLeave: c,
        internalKey: f,
        onAfterLeave: p
      } = e;
      c && c(f), p && p();
    }
    function o(c) {
      const {
        onPositiveClick: f
      } = e;
      f ? Promise.resolve(f(c)).then((p) => {
        p !== !1 && u();
      }) : u();
    }
    function i(c) {
      const {
        onNegativeClick: f
      } = e;
      f ? Promise.resolve(f(c)).then((p) => {
        p !== !1 && u();
      }) : u();
    }
    function a() {
      const {
        onClose: c
      } = e;
      c ? Promise.resolve(c()).then((f) => {
        f !== !1 && u();
      }) : u();
    }
    function l(c) {
      const {
        onMaskClick: f,
        maskClosable: p
      } = e;
      f && (f(c), p && u());
    }
    function s() {
      const {
        onEsc: c
      } = e;
      c && c();
    }
    function u() {
      n.value = !1;
    }
    function d(c) {
      n.value = c;
    }
    return {
      show: n,
      hide: u,
      handleUpdateShow: d,
      handleAfterLeave: r,
      handleCloseClick: a,
      handleNegativeClick: i,
      handlePositiveClick: o,
      handleMaskClick: l,
      handleEsc: s
    };
  },
  render() {
    const {
      handlePositiveClick: e,
      handleUpdateShow: n,
      handleNegativeClick: r,
      handleCloseClick: o,
      handleAfterLeave: i,
      handleMaskClick: a,
      handleEsc: l,
      to: s,
      maskClosable: u,
      show: d
    } = this;
    return h(y1, {
      show: d,
      onUpdateShow: n,
      onMaskClick: a,
      onEsc: l,
      to: s,
      maskClosable: u,
      onAfterEnter: this.onAfterEnter,
      onAfterLeave: i,
      closeOnEsc: this.closeOnEsc,
      blockScroll: this.blockScroll,
      autoFocus: this.autoFocus,
      transformOrigin: this.transformOrigin,
      internalAppear: !0,
      internalDialog: !0
    }, {
      default: () => h(Vu, Object.assign({}, Cn(this.$props, ju), {
        style: this.internalStyle,
        onClose: o,
        onNegativeClick: r,
        onPositiveClick: e
      }))
    });
  }
}), S1 = {
  injectionKey: String,
  to: [String, Object]
}, F1 = Q({
  name: "DialogProvider",
  props: S1,
  setup() {
    const e = L([]), n = {};
    function r(s = {}) {
      const u = pr(), d = Gl(Object.assign(Object.assign({}, s), {
        key: u,
        destroy: () => {
          var c;
          (c = n[`n-dialog-${u}`]) === null || c === void 0 || c.hide();
        }
      }));
      return e.value.push(d), d;
    }
    const o = ["info", "success", "warning", "error"].map((s) => (u) => r(Object.assign(Object.assign({}, u), {
      type: s
    })));
    function i(s) {
      const {
        value: u
      } = e;
      u.splice(u.findIndex((d) => d.key === s), 1);
    }
    function a() {
      Object.values(n).forEach((s) => {
        s == null || s.hide();
      });
    }
    const l = {
      create: r,
      destroyAll: a,
      info: o[0],
      success: o[1],
      warning: o[2],
      error: o[3]
    };
    return we(Ku, l), we(qu, {
      clickedRef: Cs(64),
      clickedPositionRef: bs()
    }), we(v1, e), Object.assign(Object.assign({}, l), {
      dialogList: e,
      dialogInstRefs: n,
      handleAfterLeave: i
    });
  },
  render() {
    var e, n;
    return h(ht, null, [this.dialogList.map((r) => h(B1, ls(r, ["destroy", "style"], {
      internalStyle: r.style,
      to: this.to,
      ref: (o) => {
        o === null ? delete this.dialogInstRefs[`n-dialog-${r.key}`] : this.dialogInstRefs[`n-dialog-${r.key}`] = o;
      },
      internalKey: r.key,
      onInternalAfterLeave: this.handleAfterLeave
    }))), (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e)]);
  }
});
function A1() {
  const e = xe(Ku, null);
  return e === null && Dr("use-dialog", "No outer <n-dialog-provider /> founded."), e;
}
const $1 = {
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
function D1(e) {
  const {
    heightSmall: n,
    heightMedium: r,
    heightLarge: o,
    textColor1: i,
    errorColor: a,
    warningColor: l,
    lineHeight: s,
    textColor3: u
  } = e;
  return Object.assign(Object.assign({}, $1), {
    blankHeightSmall: n,
    blankHeightMedium: r,
    blankHeightLarge: o,
    lineHeight: s,
    labelTextColor: i,
    asteriskColor: a,
    feedbackTextColorError: a,
    feedbackTextColorWarning: l,
    feedbackTextColor: u
  });
}
const Uu = {
  name: "Form",
  common: Ve,
  self: D1
}, P1 = O("form", [V("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [O("form-item", {
  width: "auto",
  marginRight: "18px"
}, [z("&:last-child", {
  marginRight: 0
})])])]), Or = "n-form", Gu = "n-form-item-insts";
var E1 = function(e, n, r, o) {
  function i(a) {
    return a instanceof r ? a : new r(function(l) {
      l(a);
    });
  }
  return new (r || (r = Promise))(function(a, l) {
    function s(c) {
      try {
        d(o.next(c));
      } catch (f) {
        l(f);
      }
    }
    function u(c) {
      try {
        d(o.throw(c));
      } catch (f) {
        l(f);
      }
    }
    function d(c) {
      c.done ? a(c.value) : i(c.value).then(s, u);
    }
    d((o = o.apply(e, n || [])).next());
  });
};
const k1 = Object.assign(Object.assign({}, ce.props), {
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
    default: (e) => {
      e.preventDefault();
    }
  },
  showLabel: {
    type: Boolean,
    default: void 0
  },
  validateMessages: Object
}), z1 = Q({
  name: "Form",
  props: k1,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Pe(e);
    ce("Form", "-form", P1, Uu, e, n);
    const r = {}, o = L(void 0), i = (u) => {
      const d = o.value;
      (d === void 0 || u >= d) && (o.value = u);
    };
    function a(u) {
      return E1(this, arguments, void 0, function* (d, c = () => !0) {
        return yield new Promise((f, p) => {
          const m = [];
          for (const v of Un(r)) {
            const g = r[v];
            for (const b of g)
              b.path && m.push(b.internalValidate(null, c));
          }
          Promise.all(m).then((v) => {
            const g = v.some((B) => !B.valid), b = [], x = [];
            v.forEach((B) => {
              var A, y;
              !((A = B.errors) === null || A === void 0) && A.length && b.push(B.errors), !((y = B.warnings) === null || y === void 0) && y.length && x.push(B.warnings);
            }), d && d(b.length ? b : void 0, {
              warnings: x.length ? x : void 0
            }), g ? p(b.length ? b : void 0) : f({
              warnings: x.length ? x : void 0
            });
          });
        });
      });
    }
    function l() {
      for (const u of Un(r)) {
        const d = r[u];
        for (const c of d)
          c.restoreValidation();
      }
    }
    return we(Or, {
      props: e,
      maxChildLabelWidthRef: o,
      deriveMaxChildLabelWidth: i
    }), we(Gu, {
      formItems: r
    }), Object.assign({
      validate: a,
      restoreValidation: l
    }, {
      mergedClsPrefix: n
    });
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return h("form", {
      class: [`${e}-form`, this.inline && `${e}-form--inline`],
      onSubmit: this.onSubmit
    }, this.$slots);
  }
});
function xn() {
  return xn = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, xn.apply(this, arguments);
}
function T1(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, Ar(e, n);
}
function Fi(e) {
  return Fi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fi(e);
}
function Ar(e, n) {
  return Ar = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, Ar(e, n);
}
function R1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function to(e, n, r) {
  return R1() ? to = Reflect.construct.bind() : to = function(i, a, l) {
    var s = [null];
    s.push.apply(s, a);
    var u = Function.bind.apply(i, s), d = new u();
    return l && Ar(d, l.prototype), d;
  }, to.apply(null, arguments);
}
function O1(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ai(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ai = function(o) {
    if (o === null || !O1(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof n < "u") {
      if (n.has(o)) return n.get(o);
      n.set(o, i);
    }
    function i() {
      return to(o, arguments, Fi(this).constructor);
    }
    return i.prototype = Object.create(o.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Ar(i, o);
  }, Ai(e);
}
var M1 = /%[sdj%]/g, Xu = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Xu = function(n, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(o) {
    return typeof o == "string";
  }) && console.warn(n, r);
});
function $i(e) {
  if (!e || !e.length) return null;
  var n = {};
  return e.forEach(function(r) {
    var o = r.field;
    n[o] = n[o] || [], n[o].push(r);
  }), n;
}
function ct(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  var i = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var l = e.replace(M1, function(s) {
      if (s === "%%")
        return "%";
      if (i >= a)
        return s;
      switch (s) {
        case "%s":
          return String(r[i++]);
        case "%d":
          return Number(r[i++]);
        case "%j":
          try {
            return JSON.stringify(r[i++]);
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
  return e;
}
function I1(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Ue(e, n) {
  return !!(e == null || n === "array" && Array.isArray(e) && !e.length || I1(n) && typeof e == "string" && !e);
}
function _1(e, n, r) {
  var o = [], i = 0, a = e.length;
  function l(s) {
    o.push.apply(o, s || []), i++, i === a && r(o);
  }
  e.forEach(function(s) {
    n(s, l);
  });
}
function Ll(e, n, r) {
  var o = 0, i = e.length;
  function a(l) {
    if (l && l.length) {
      r(l);
      return;
    }
    var s = o;
    o = o + 1, s < i ? n(e[s], a) : r([]);
  }
  a([]);
}
function L1(e) {
  var n = [];
  return Object.keys(e).forEach(function(r) {
    n.push.apply(n, e[r] || []);
  }), n;
}
var Nl = /* @__PURE__ */ function(e) {
  T1(n, e);
  function n(r, o) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = r, i.fields = o, i;
  }
  return n;
}(/* @__PURE__ */ Ai(Error));
function N1(e, n, r, o, i) {
  if (n.first) {
    var a = new Promise(function(p, m) {
      var v = function(x) {
        return o(x), x.length ? m(new Nl(x, $i(x))) : p(i);
      }, g = L1(e);
      Ll(g, r, v);
    });
    return a.catch(function(p) {
      return p;
    }), a;
  }
  var l = n.firstFields === !0 ? Object.keys(e) : n.firstFields || [], s = Object.keys(e), u = s.length, d = 0, c = [], f = new Promise(function(p, m) {
    var v = function(b) {
      if (c.push.apply(c, b), d++, d === u)
        return o(c), c.length ? m(new Nl(c, $i(c))) : p(i);
    };
    s.length || (o(c), p(i)), s.forEach(function(g) {
      var b = e[g];
      l.indexOf(g) !== -1 ? Ll(b, r, v) : _1(b, r, v);
    });
  });
  return f.catch(function(p) {
    return p;
  }), f;
}
function H1(e) {
  return !!(e && e.message !== void 0);
}
function W1(e, n) {
  for (var r = e, o = 0; o < n.length; o++) {
    if (r == null)
      return r;
    r = r[n[o]];
  }
  return r;
}
function Hl(e, n) {
  return function(r) {
    var o;
    return e.fullFields ? o = W1(n, e.fullFields) : o = n[r.field || e.fullField], H1(r) ? (r.field = r.field || e.fullField, r.fieldValue = o, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: o,
      field: r.field || e.fullField
    };
  };
}
function Wl(e, n) {
  if (n) {
    for (var r in n)
      if (n.hasOwnProperty(r)) {
        var o = n[r];
        typeof o == "object" && typeof e[r] == "object" ? e[r] = xn({}, e[r], o) : e[r] = o;
      }
  }
  return e;
}
var Yu = function(n, r, o, i, a, l) {
  n.required && (!o.hasOwnProperty(n.field) || Ue(r, l || n.type)) && i.push(ct(a.messages.required, n.fullField));
}, j1 = function(n, r, o, i, a) {
  (/^\s+$/.test(r) || r === "") && i.push(ct(a.messages.whitespace, n.fullField));
}, Yr, V1 = function() {
  if (Yr)
    return Yr;
  var e = "[a-fA-F\\d:]", n = function(y) {
    return y && y.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
  }, r = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}", o = "[a-fA-F\\d]{1,4}", i = (`
(?:
(?:` + o + ":){7}(?:" + o + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + o + ":){6}(?:" + r + "|:" + o + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + o + ":){5}(?::" + r + "|(?::" + o + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + o + ":){4}(?:(?::" + o + "){0,1}:" + r + "|(?::" + o + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + o + ":){3}(?:(?::" + o + "){0,2}:" + r + "|(?::" + o + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + o + ":){2}(?:(?::" + o + "){0,3}:" + r + "|(?::" + o + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + o + ":){1}(?:(?::" + o + "){0,4}:" + r + "|(?::" + o + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + o + "){0,5}:" + r + "|(?::" + o + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + r + "$)|(?:^" + i + "$)"), l = new RegExp("^" + r + "$"), s = new RegExp("^" + i + "$"), u = function(y) {
    return y && y.exact ? a : new RegExp("(?:" + n(y) + r + n(y) + ")|(?:" + n(y) + i + n(y) + ")", "g");
  };
  u.v4 = function(A) {
    return A && A.exact ? l : new RegExp("" + n(A) + r + n(A), "g");
  }, u.v6 = function(A) {
    return A && A.exact ? s : new RegExp("" + n(A) + i + n(A), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", f = u.v4().source, p = u.v6().source, m = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", v = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", x = '(?:[/?#][^\\s"]*)?', B = "(?:" + d + "|www\\.)" + c + "(?:localhost|" + f + "|" + p + "|" + m + v + g + ")" + b + x;
  return Yr = new RegExp("(?:^" + B + "$)", "i"), Yr;
}, jl = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, lr = {
  integer: function(n) {
    return lr.number(n) && parseInt(n, 10) === n;
  },
  float: function(n) {
    return lr.number(n) && !lr.integer(n);
  },
  array: function(n) {
    return Array.isArray(n);
  },
  regexp: function(n) {
    if (n instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(n);
    } catch {
      return !1;
    }
  },
  date: function(n) {
    return typeof n.getTime == "function" && typeof n.getMonth == "function" && typeof n.getYear == "function" && !isNaN(n.getTime());
  },
  number: function(n) {
    return isNaN(n) ? !1 : typeof n == "number";
  },
  object: function(n) {
    return typeof n == "object" && !lr.array(n);
  },
  method: function(n) {
    return typeof n == "function";
  },
  email: function(n) {
    return typeof n == "string" && n.length <= 320 && !!n.match(jl.email);
  },
  url: function(n) {
    return typeof n == "string" && n.length <= 2048 && !!n.match(V1());
  },
  hex: function(n) {
    return typeof n == "string" && !!n.match(jl.hex);
  }
}, q1 = function(n, r, o, i, a) {
  if (n.required && r === void 0) {
    Yu(n, r, o, i, a);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = n.type;
  l.indexOf(s) > -1 ? lr[s](r) || i.push(ct(a.messages.types[s], n.fullField, n.type)) : s && typeof r !== n.type && i.push(ct(a.messages.types[s], n.fullField, n.type));
}, K1 = function(n, r, o, i, a) {
  var l = typeof n.len == "number", s = typeof n.min == "number", u = typeof n.max == "number", d = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, f = null, p = typeof r == "number", m = typeof r == "string", v = Array.isArray(r);
  if (p ? f = "number" : m ? f = "string" : v && (f = "array"), !f)
    return !1;
  v && (c = r.length), m && (c = r.replace(d, "_").length), l ? c !== n.len && i.push(ct(a.messages[f].len, n.fullField, n.len)) : s && !u && c < n.min ? i.push(ct(a.messages[f].min, n.fullField, n.min)) : u && !s && c > n.max ? i.push(ct(a.messages[f].max, n.fullField, n.max)) : s && u && (c < n.min || c > n.max) && i.push(ct(a.messages[f].range, n.fullField, n.min, n.max));
}, In = "enum", U1 = function(n, r, o, i, a) {
  n[In] = Array.isArray(n[In]) ? n[In] : [], n[In].indexOf(r) === -1 && i.push(ct(a.messages[In], n.fullField, n[In].join(", ")));
}, G1 = function(n, r, o, i, a) {
  if (n.pattern) {
    if (n.pattern instanceof RegExp)
      n.pattern.lastIndex = 0, n.pattern.test(r) || i.push(ct(a.messages.pattern.mismatch, n.fullField, r, n.pattern));
    else if (typeof n.pattern == "string") {
      var l = new RegExp(n.pattern);
      l.test(r) || i.push(ct(a.messages.pattern.mismatch, n.fullField, r, n.pattern));
    }
  }
}, Ce = {
  required: Yu,
  whitespace: j1,
  type: q1,
  range: K1,
  enum: U1,
  pattern: G1
}, X1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r, "string") && !n.required)
      return o();
    Ce.required(n, r, i, l, a, "string"), Ue(r, "string") || (Ce.type(n, r, i, l, a), Ce.range(n, r, i, l, a), Ce.pattern(n, r, i, l, a), n.whitespace === !0 && Ce.whitespace(n, r, i, l, a));
  }
  o(l);
}, Y1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && Ce.type(n, r, i, l, a);
  }
  o(l);
}, Z1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (r === "" && (r = void 0), Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && (Ce.type(n, r, i, l, a), Ce.range(n, r, i, l, a));
  }
  o(l);
}, J1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && Ce.type(n, r, i, l, a);
  }
  o(l);
}, Q1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), Ue(r) || Ce.type(n, r, i, l, a);
  }
  o(l);
}, eC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && (Ce.type(n, r, i, l, a), Ce.range(n, r, i, l, a));
  }
  o(l);
}, tC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && (Ce.type(n, r, i, l, a), Ce.range(n, r, i, l, a));
  }
  o(l);
}, nC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (r == null && !n.required)
      return o();
    Ce.required(n, r, i, l, a, "array"), r != null && (Ce.type(n, r, i, l, a), Ce.range(n, r, i, l, a));
  }
  o(l);
}, rC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && Ce.type(n, r, i, l, a);
  }
  o(l);
}, oC = "enum", iC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && Ce[oC](n, r, i, l, a);
  }
  o(l);
}, aC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r, "string") && !n.required)
      return o();
    Ce.required(n, r, i, l, a), Ue(r, "string") || Ce.pattern(n, r, i, l, a);
  }
  o(l);
}, lC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r, "date") && !n.required)
      return o();
    if (Ce.required(n, r, i, l, a), !Ue(r, "date")) {
      var u;
      r instanceof Date ? u = r : u = new Date(r), Ce.type(n, u, i, l, a), u && Ce.range(n, u.getTime(), i, l, a);
    }
  }
  o(l);
}, sC = function(n, r, o, i, a) {
  var l = [], s = Array.isArray(r) ? "array" : typeof r;
  Ce.required(n, r, i, l, a, s), o(l);
}, ei = function(n, r, o, i, a) {
  var l = n.type, s = [], u = n.required || !n.required && i.hasOwnProperty(n.field);
  if (u) {
    if (Ue(r, l) && !n.required)
      return o();
    Ce.required(n, r, i, s, a, l), Ue(r, l) || Ce.type(n, r, i, s, a);
  }
  o(s);
}, uC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a);
  }
  o(l);
}, hr = {
  string: X1,
  method: Y1,
  number: Z1,
  boolean: J1,
  regexp: Q1,
  integer: eC,
  float: tC,
  array: nC,
  object: rC,
  enum: iC,
  pattern: aC,
  date: lC,
  url: ei,
  hex: ei,
  email: ei,
  required: sC,
  any: uC
};
function Di() {
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
      var n = JSON.parse(JSON.stringify(this));
      return n.clone = this.clone, n;
    }
  };
}
var Pi = Di(), Xn = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = Pi, this.define(r);
  }
  var n = e.prototype;
  return n.define = function(o) {
    var i = this;
    if (!o)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof o != "object" || Array.isArray(o))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(o).forEach(function(a) {
      var l = o[a];
      i.rules[a] = Array.isArray(l) ? l : [l];
    });
  }, n.messages = function(o) {
    return o && (this._messages = Wl(Di(), o)), this._messages;
  }, n.validate = function(o, i, a) {
    var l = this;
    i === void 0 && (i = {}), a === void 0 && (a = function() {
    });
    var s = o, u = i, d = a;
    if (typeof u == "function" && (d = u, u = {}), !this.rules || Object.keys(this.rules).length === 0)
      return d && d(null, s), Promise.resolve(s);
    function c(g) {
      var b = [], x = {};
      function B(y) {
        if (Array.isArray(y)) {
          var S;
          b = (S = b).concat.apply(S, y);
        } else
          b.push(y);
      }
      for (var A = 0; A < g.length; A++)
        B(g[A]);
      b.length ? (x = $i(b), d(b, x)) : d(null, s);
    }
    if (u.messages) {
      var f = this.messages();
      f === Pi && (f = Di()), Wl(f, u.messages), u.messages = f;
    } else
      u.messages = this.messages();
    var p = {}, m = u.keys || Object.keys(this.rules);
    m.forEach(function(g) {
      var b = l.rules[g], x = s[g];
      b.forEach(function(B) {
        var A = B;
        typeof A.transform == "function" && (s === o && (s = xn({}, s)), x = s[g] = A.transform(x)), typeof A == "function" ? A = {
          validator: A
        } : A = xn({}, A), A.validator = l.getValidationMethod(A), A.validator && (A.field = g, A.fullField = A.fullField || g, A.type = l.getType(A), p[g] = p[g] || [], p[g].push({
          rule: A,
          value: x,
          source: s,
          field: g
        }));
      });
    });
    var v = {};
    return N1(p, u, function(g, b) {
      var x = g.rule, B = (x.type === "object" || x.type === "array") && (typeof x.fields == "object" || typeof x.defaultField == "object");
      B = B && (x.required || !x.required && g.value), x.field = g.field;
      function A(E, C) {
        return xn({}, C, {
          fullField: x.fullField + "." + E,
          fullFields: x.fullFields ? [].concat(x.fullFields, [E]) : [E]
        });
      }
      function y(E) {
        E === void 0 && (E = []);
        var C = Array.isArray(E) ? E : [E];
        !u.suppressWarning && C.length && e.warning("async-validator:", C), C.length && x.message !== void 0 && (C = [].concat(x.message));
        var $ = C.map(Hl(x, s));
        if (u.first && $.length)
          return v[x.field] = 1, b($);
        if (!B)
          b($);
        else {
          if (x.required && !g.value)
            return x.message !== void 0 ? $ = [].concat(x.message).map(Hl(x, s)) : u.error && ($ = [u.error(x, ct(u.messages.required, x.field))]), b($);
          var M = {};
          x.defaultField && Object.keys(g.value).map(function(H) {
            M[H] = x.defaultField;
          }), M = xn({}, M, g.rule.fields);
          var I = {};
          Object.keys(M).forEach(function(H) {
            var t = M[H], F = Array.isArray(t) ? t : [t];
            I[H] = F.map(A.bind(null, H));
          });
          var K = new e(I);
          K.messages(u.messages), g.rule.options && (g.rule.options.messages = u.messages, g.rule.options.error = u.error), K.validate(g.value, g.rule.options || u, function(H) {
            var t = [];
            $ && $.length && t.push.apply(t, $), H && H.length && t.push.apply(t, H), b(t.length ? t : null);
          });
        }
      }
      var S;
      if (x.asyncValidator)
        S = x.asyncValidator(x, g.value, y, g.source, u);
      else if (x.validator) {
        try {
          S = x.validator(x, g.value, y, g.source, u);
        } catch (E) {
          console.error == null || console.error(E), u.suppressValidatorError || setTimeout(function() {
            throw E;
          }, 0), y(E.message);
        }
        S === !0 ? y() : S === !1 ? y(typeof x.message == "function" ? x.message(x.fullField || x.field) : x.message || (x.fullField || x.field) + " fails") : S instanceof Array ? y(S) : S instanceof Error && y(S.message);
      }
      S && S.then && S.then(function() {
        return y();
      }, function(E) {
        return y(E);
      });
    }, function(g) {
      c(g);
    }, s);
  }, n.getType = function(o) {
    if (o.type === void 0 && o.pattern instanceof RegExp && (o.type = "pattern"), typeof o.validator != "function" && o.type && !hr.hasOwnProperty(o.type))
      throw new Error(ct("Unknown rule type %s", o.type));
    return o.type || "string";
  }, n.getValidationMethod = function(o) {
    if (typeof o.validator == "function")
      return o.validator;
    var i = Object.keys(o), a = i.indexOf("message");
    return a !== -1 && i.splice(a, 1), i.length === 1 && i[0] === "required" ? hr.required : hr[this.getType(o)] || void 0;
  }, e;
}();
Xn.register = function(n, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  hr[n] = r;
};
Xn.warning = Xu;
Xn.messages = Pi;
Xn.validators = hr;
function dC(e) {
  const n = xe(Or, null);
  return {
    mergedSize: R(() => e.size !== void 0 ? e.size : (n == null ? void 0 : n.props.size) !== void 0 ? n.props.size : "medium")
  };
}
function cC(e) {
  const n = xe(Or, null), r = R(() => {
    const {
      labelPlacement: v
    } = e;
    return v !== void 0 ? v : n != null && n.props.labelPlacement ? n.props.labelPlacement : "top";
  }), o = R(() => r.value === "left" && (e.labelWidth === "auto" || (n == null ? void 0 : n.props.labelWidth) === "auto")), i = R(() => {
    if (r.value === "top") return;
    const {
      labelWidth: v
    } = e;
    if (v !== void 0 && v !== "auto")
      return jt(v);
    if (o.value) {
      const g = n == null ? void 0 : n.maxChildLabelWidthRef.value;
      return g !== void 0 ? jt(g) : void 0;
    }
    if ((n == null ? void 0 : n.props.labelWidth) !== void 0)
      return jt(n.props.labelWidth);
  }), a = R(() => {
    const {
      labelAlign: v
    } = e;
    if (v) return v;
    if (n != null && n.props.labelAlign) return n.props.labelAlign;
  }), l = R(() => {
    var v;
    return [(v = e.labelProps) === null || v === void 0 ? void 0 : v.style, e.labelStyle, {
      width: i.value
    }];
  }), s = R(() => {
    const {
      showRequireMark: v
    } = e;
    return v !== void 0 ? v : n == null ? void 0 : n.props.showRequireMark;
  }), u = R(() => {
    const {
      requireMarkPlacement: v
    } = e;
    return v !== void 0 ? v : (n == null ? void 0 : n.props.requireMarkPlacement) || "right";
  }), d = L(!1), c = L(!1), f = R(() => {
    const {
      validationStatus: v
    } = e;
    if (v !== void 0) return v;
    if (d.value) return "error";
    if (c.value) return "warning";
  }), p = R(() => {
    const {
      showFeedback: v
    } = e;
    return v !== void 0 ? v : (n == null ? void 0 : n.props.showFeedback) !== void 0 ? n.props.showFeedback : !0;
  }), m = R(() => {
    const {
      showLabel: v
    } = e;
    return v !== void 0 ? v : (n == null ? void 0 : n.props.showLabel) !== void 0 ? n.props.showLabel : !0;
  });
  return {
    validationErrored: d,
    validationWarned: c,
    mergedLabelStyle: l,
    mergedLabelPlacement: r,
    mergedLabelAlign: a,
    mergedShowRequireMark: s,
    mergedRequireMarkPlacement: u,
    mergedValidationStatus: f,
    mergedShowFeedback: p,
    mergedShowLabel: m,
    isAutoLabelWidth: o
  };
}
function fC(e) {
  const n = xe(Or, null), r = R(() => {
    const {
      rulePath: l
    } = e;
    if (l !== void 0) return l;
    const {
      path: s
    } = e;
    if (s !== void 0) return s;
  }), o = R(() => {
    const l = [], {
      rule: s
    } = e;
    if (s !== void 0 && (Array.isArray(s) ? l.push(...s) : l.push(s)), n) {
      const {
        rules: u
      } = n.props, {
        value: d
      } = r;
      if (u !== void 0 && d !== void 0) {
        const c = ra(u, d);
        c !== void 0 && (Array.isArray(c) ? l.push(...c) : l.push(c));
      }
    }
    return l;
  }), i = R(() => o.value.some((l) => l.required)), a = R(() => i.value || e.required);
  return {
    mergedRules: o,
    mergedRequired: a
  };
}
const {
  cubicBezierEaseInOut: Vl
} = sn;
function hC({
  name: e = "fade-down",
  fromOffset: n = "-4px",
  enterDuration: r = ".3s",
  leaveDuration: o = ".3s",
  enterCubicBezier: i = Vl,
  leaveCubicBezier: a = Vl
} = {}) {
  return [z(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0,
    transform: `translateY(${n})`
  }), z(`&.${e}-transition-enter-to, &.${e}-transition-leave-from`, {
    opacity: 1,
    transform: "translateY(0)"
  }), z(`&.${e}-transition-leave-active`, {
    transition: `opacity ${o} ${a}, transform ${o} ${a}`
  }), z(`&.${e}-transition-enter-active`, {
    transition: `opacity ${r} ${i}, transform ${r} ${i}`
  })];
}
const vC = O("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [O("form-item-label", `
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
 `, [k("asterisk", `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `), k("asterisk-placeholder", `
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]), O("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), V("auto-label-width", [O("form-item-label", "white-space: nowrap;")]), V("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [O("form-item-label", `
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
 `), k("text", `
 grid-area: text; 
 `), k("asterisk", `
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
 `), O("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), O("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), O("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [z("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), O("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [V("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), V("error", {
  color: "var(--n-feedback-text-color-error)"
}), hC({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
var ql = function(e, n, r, o) {
  function i(a) {
    return a instanceof r ? a : new r(function(l) {
      l(a);
    });
  }
  return new (r || (r = Promise))(function(a, l) {
    function s(c) {
      try {
        d(o.next(c));
      } catch (f) {
        l(f);
      }
    }
    function u(c) {
      try {
        d(o.throw(c));
      } catch (f) {
        l(f);
      }
    }
    function d(c) {
      c.done ? a(c.value) : i(c.value).then(s, u);
    }
    d((o = o.apply(e, n || [])).next());
  });
};
const pC = Object.assign(Object.assign({}, ce.props), {
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
function Kl(e, n) {
  return (...r) => {
    try {
      const o = e(...r);
      return !n && (typeof o == "boolean" || o instanceof Error || Array.isArray(o)) || o != null && o.then ? o : (o === void 0 || Vt("form-item/validate", `You return a ${typeof o} typed value in the validator method, which is not recommended. Please use ${n ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`), !0);
    } catch (o) {
      Vt("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(o);
      return;
    }
  };
}
const xC = Q({
  name: "FormItem",
  props: pC,
  setup(e) {
    Ec(Gu, "formItems", le(e, "path"));
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r
    } = Pe(e), o = xe(Or, null), i = dC(e), a = cC(e), {
      validationErrored: l,
      validationWarned: s
    } = a, {
      mergedRequired: u,
      mergedRules: d
    } = fC(e), {
      mergedSize: c
    } = i, {
      mergedLabelPlacement: f,
      mergedLabelAlign: p,
      mergedRequireMarkPlacement: m
    } = a, v = L([]), g = L(pr()), b = o ? le(o.props, "disabled") : L(!1), x = ce("Form", "-form-item", vC, Uu, e, n);
    ze(le(e, "path"), () => {
      e.ignorePathChange || B();
    });
    function B() {
      v.value = [], l.value = !1, s.value = !1, e.feedback && (g.value = pr());
    }
    const A = (...F) => ql(this, [...F], void 0, function* (D = null, _ = () => !0, T = {
      suppressWarning: !0
    }) {
      const {
        path: j
      } = e;
      T ? T.first || (T.first = e.first) : T = {};
      const {
        value: J
      } = d, Z = o ? ra(o.props.model, j || "") : void 0, ae = {}, W = {}, X = (D ? J.filter((me) => Array.isArray(me.trigger) ? me.trigger.includes(D) : me.trigger === D) : J).filter(_).map((me, ye) => {
        const be = Object.assign({}, me);
        if (be.validator && (be.validator = Kl(be.validator, !1)), be.asyncValidator && (be.asyncValidator = Kl(be.asyncValidator, !0)), be.renderMessage) {
          const Ye = `__renderMessage__${ye}`;
          W[Ye] = be.message, be.message = Ye, ae[Ye] = be.renderMessage;
        }
        return be;
      }), ne = X.filter((me) => me.level !== "warning"), Be = X.filter((me) => me.level === "warning"), re = {
        valid: !0,
        errors: void 0,
        warnings: void 0
      };
      if (!X.length) return re;
      const ve = j ?? "__n_no_path__", Me = new Xn({
        [ve]: ne
      }), ie = new Xn({
        [ve]: Be
      }), {
        validateMessages: Ne
      } = (o == null ? void 0 : o.props) || {};
      Ne && (Me.messages(Ne), ie.messages(Ne));
      const Te = (me) => {
        v.value = me.map((ye) => {
          const be = (ye == null ? void 0 : ye.message) || "";
          return {
            key: be,
            render: () => be.startsWith("__renderMessage__") ? ae[be]() : be
          };
        }), me.forEach((ye) => {
          var be;
          !((be = ye.message) === null || be === void 0) && be.startsWith("__renderMessage__") && (ye.message = W[ye.message]);
        });
      };
      if (ne.length) {
        const me = yield new Promise((ye) => {
          Me.validate({
            [ve]: Z
          }, T, ye);
        });
        me != null && me.length && (re.valid = !1, re.errors = me, Te(me));
      }
      if (Be.length && !re.errors) {
        const me = yield new Promise((ye) => {
          ie.validate({
            [ve]: Z
          }, T, ye);
        });
        me != null && me.length && (Te(me), re.warnings = me);
      }
      return !re.errors && !re.warnings ? B() : (l.value = !!re.errors, s.value = !!re.warnings), re;
    });
    function y() {
      A("blur");
    }
    function S() {
      A("change");
    }
    function E() {
      A("focus");
    }
    function C() {
      A("input");
    }
    function $(F, D) {
      return ql(this, void 0, void 0, function* () {
        let _, T, j, J;
        return typeof F == "string" ? (_ = F, T = D) : F !== null && typeof F == "object" && (_ = F.trigger, T = F.callback, j = F.shouldRuleBeApplied, J = F.options), yield new Promise((Z, ae) => {
          A(_, j, J).then(({
            valid: W,
            errors: X,
            warnings: ne
          }) => {
            W ? (T && T(void 0, {
              warnings: ne
            }), Z({
              warnings: ne
            })) : (T && T(X, {
              warnings: ne
            }), ae(X));
          });
        });
      });
    }
    we(fi, {
      path: le(e, "path"),
      disabled: b,
      mergedSize: i.mergedSize,
      mergedValidationStatus: a.mergedValidationStatus,
      restoreValidation: B,
      handleContentBlur: y,
      handleContentChange: S,
      handleContentFocus: E,
      handleContentInput: C
    });
    const M = {
      validate: $,
      restoreValidation: B,
      internalValidate: A
    }, I = L(null);
    ot(() => {
      if (!a.isAutoLabelWidth.value) return;
      const F = I.value;
      if (F !== null) {
        const D = F.style.whiteSpace;
        F.style.whiteSpace = "nowrap", F.style.width = "", o == null || o.deriveMaxChildLabelWidth(Number(getComputedStyle(F).width.slice(0, -2))), F.style.whiteSpace = D;
      }
    });
    const K = R(() => {
      var F;
      const {
        value: D
      } = c, {
        value: _
      } = f, T = _ === "top" ? "vertical" : "horizontal", {
        common: {
          cubicBezierEaseInOut: j
        },
        self: {
          labelTextColor: J,
          asteriskColor: Z,
          lineHeight: ae,
          feedbackTextColor: W,
          feedbackTextColorWarning: X,
          feedbackTextColorError: ne,
          feedbackPadding: Be,
          labelFontWeight: re,
          [Y("labelHeight", D)]: ve,
          [Y("blankHeight", D)]: Me,
          [Y("feedbackFontSize", D)]: ie,
          [Y("feedbackHeight", D)]: Ne,
          [Y("labelPadding", T)]: Te,
          [Y("labelTextAlign", T)]: me,
          [Y(Y("labelFontSize", _), D)]: ye
        }
      } = x.value;
      let be = (F = p.value) !== null && F !== void 0 ? F : me;
      return _ === "top" && (be = be === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": j,
        "--n-line-height": ae,
        "--n-blank-height": Me,
        "--n-label-font-size": ye,
        "--n-label-text-align": be,
        "--n-label-height": ve,
        "--n-label-padding": Te,
        "--n-label-font-weight": re,
        "--n-asterisk-color": Z,
        "--n-label-text-color": J,
        "--n-feedback-padding": Be,
        "--n-feedback-font-size": ie,
        "--n-feedback-height": Ne,
        "--n-feedback-text-color": W,
        "--n-feedback-text-color-warning": X,
        "--n-feedback-text-color-error": ne
      };
    }), H = r ? je("form-item", R(() => {
      var F;
      return `${c.value[0]}${f.value[0]}${((F = p.value) === null || F === void 0 ? void 0 : F[0]) || ""}`;
    }), K, e) : void 0, t = R(() => f.value === "left" && m.value === "left" && p.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: I,
      mergedClsPrefix: n,
      mergedRequired: u,
      feedbackId: g,
      renderExplains: v,
      reverseColSpace: t
    }, a), i), M), {
      cssVars: r ? void 0 : K,
      themeClass: H == null ? void 0 : H.themeClass,
      onRender: H == null ? void 0 : H.onRender
    });
  },
  render() {
    const {
      $slots: e,
      mergedClsPrefix: n,
      mergedShowLabel: r,
      mergedShowRequireMark: o,
      mergedRequireMarkPlacement: i,
      onRender: a
    } = this, l = o !== void 0 ? o : this.mergedRequired;
    a == null || a();
    const s = () => {
      const u = this.$slots.label ? this.$slots.label() : this.label;
      if (!u) return null;
      const d = h("span", {
        class: `${n}-form-item-label__text`
      }, u), c = l ? h("span", {
        class: `${n}-form-item-label__asterisk`
      }, i !== "left" ? " *" : "* ") : i === "right-hanging" && h("span", {
        class: `${n}-form-item-label__asterisk-placeholder`
      }, " *"), {
        labelProps: f
      } = this;
      return h("label", Object.assign({}, f, {
        class: [f == null ? void 0 : f.class, `${n}-form-item-label`, `${n}-form-item-label--${i}-mark`, this.reverseColSpace && `${n}-form-item-label--reverse-columns-space`],
        style: this.mergedLabelStyle,
        ref: "labelElementRef"
      }), i === "left" ? [c, d] : [d, c]);
    };
    return h("div", {
      class: [`${n}-form-item`, this.themeClass, `${n}-form-item--${this.mergedSize}-size`, `${n}-form-item--${this.mergedLabelPlacement}-labelled`, this.isAutoLabelWidth && `${n}-form-item--auto-label-width`, !r && `${n}-form-item--no-label`],
      style: this.cssVars
    }, r && s(), h("div", {
      class: [`${n}-form-item-blank`, this.mergedValidationStatus && `${n}-form-item-blank--${this.mergedValidationStatus}`]
    }, e), this.mergedShowFeedback ? h("div", {
      key: this.feedbackId,
      style: this.feedbackStyle,
      class: [`${n}-form-item-feedback-wrapper`, this.feedbackClass]
    }, h(ft, {
      name: "fade-down-transition",
      mode: "out-in"
    }, {
      default: () => {
        const {
          mergedValidationStatus: u
        } = this;
        return _e(e.feedback, (d) => {
          var c;
          const {
            feedback: f
          } = this, p = d || f ? h("div", {
            key: "__feedback__",
            class: `${n}-form-item-feedback__line`
          }, d || f) : this.renderExplains.length ? (c = this.renderExplains) === null || c === void 0 ? void 0 : c.map(({
            key: m,
            render: v
          }) => h("div", {
            key: m,
            class: `${n}-form-item-feedback__line`
          }, v())) : null;
          return p ? u === "warning" ? h("div", {
            key: "controlled-warning",
            class: `${n}-form-item-feedback ${n}-form-item-feedback--warning`
          }, p) : u === "error" ? h("div", {
            key: "controlled-error",
            class: `${n}-form-item-feedback ${n}-form-item-feedback--error`
          }, p) : u === "success" ? h("div", {
            key: "controlled-success",
            class: `${n}-form-item-feedback ${n}-form-item-feedback--success`
          }, p) : h("div", {
            key: "controlled-default",
            class: `${n}-form-item-feedback`
          }, p) : null;
        });
      }
    })) : null);
  }
});
function gC(e) {
  const {
    primaryColor: n,
    errorColor: r
  } = e;
  return {
    colorError: r,
    colorLoading: n,
    height: "2px"
  };
}
const mC = {
  name: "LoadingBar",
  common: Ve,
  self: gC
}, bC = {
  iconSize: "22px"
};
function CC(e) {
  const {
    fontSize: n,
    warningColor: r
  } = e;
  return Object.assign(Object.assign({}, bC), {
    fontSize: n,
    iconColor: r
  });
}
const yC = {
  name: "Popconfirm",
  common: Ve,
  peers: {
    Button: ua,
    Popover: zr
  },
  self: CC
};
function wC(e) {
  const {
    opacityDisabled: n,
    heightTiny: r,
    heightSmall: o,
    heightMedium: i,
    heightLarge: a,
    heightHuge: l,
    primaryColor: s,
    fontSize: u
  } = e;
  return {
    fontSize: u,
    textColor: s,
    sizeTiny: r,
    sizeSmall: o,
    sizeMedium: i,
    sizeLarge: a,
    sizeHuge: l,
    color: s,
    opacitySpinning: n
  };
}
const BC = {
  name: "Spin",
  common: Ve,
  self: wC
}, SC = {
  thPaddingSmall: "6px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "6px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px"
};
function FC(e) {
  const {
    dividerColor: n,
    cardColor: r,
    modalColor: o,
    popoverColor: i,
    tableHeaderColor: a,
    tableColorStriped: l,
    textColor1: s,
    textColor2: u,
    borderRadius: d,
    fontWeightStrong: c,
    lineHeight: f,
    fontSizeSmall: p,
    fontSizeMedium: m,
    fontSizeLarge: v
  } = e;
  return Object.assign(Object.assign({}, SC), {
    fontSizeSmall: p,
    fontSizeMedium: m,
    fontSizeLarge: v,
    lineHeight: f,
    borderRadius: d,
    borderColor: ut(r, n),
    borderColorModal: ut(o, n),
    borderColorPopover: ut(i, n),
    tdColor: r,
    tdColorModal: o,
    tdColorPopover: i,
    tdColorStriped: ut(r, l),
    tdColorStripedModal: ut(o, l),
    tdColorStripedPopover: ut(i, l),
    thColor: ut(r, a),
    thColorModal: ut(o, a),
    thColorPopover: ut(i, a),
    thTextColor: s,
    tdTextColor: u,
    thFontWeight: c
  });
}
const AC = {
  name: "Table",
  common: Ve,
  self: FC
};
function $C(e) {
  const {
    primaryColor: n,
    baseColor: r
  } = e;
  return {
    color: n,
    iconColor: r
  };
}
const DC = {
  name: "IconWrapper",
  common: Ve,
  self: $C
}, PC = O("icon-wrapper", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`), EC = Object.assign(Object.assign({}, ce.props), {
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
}), kC = Q({
  name: "IconWrapper",
  props: EC,
  setup(e, {
    slots: n
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Pe(e), i = ce("IconWrapper", "-icon-wrapper", PC, DC, e, r), a = R(() => {
      const {
        common: {
          cubicBezierEaseInOut: s
        },
        self: {
          color: u,
          iconColor: d
        }
      } = i.value;
      return {
        "--n-bezier": s,
        "--n-color": u,
        "--n-icon-color": d
      };
    }), l = o ? je("icon-wrapper", void 0, a, e) : void 0;
    return () => {
      const s = jt(e.size);
      return l == null || l.onRender(), h("div", {
        class: [`${r.value}-icon-wrapper`, l == null ? void 0 : l.themeClass.value],
        style: [a == null ? void 0 : a.value, {
          height: s,
          width: s,
          borderRadius: jt(e.borderRadius),
          backgroundColor: e.color,
          color: e.iconColor
        }]
      }, n);
    };
  }
}), Zu = "n-loading-bar", Ju = "n-loading-bar-api", zC = O("loading-bar-container", `
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`, [Bo({
  enterDuration: "0.3s",
  leaveDuration: "0.8s"
}), O("loading-bar", `
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `, [V("starting", `
 background: var(--n-color-loading);
 `), V("finishing", `
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `), V("error", `
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]);
var Zr = function(e, n, r, o) {
  function i(a) {
    return a instanceof r ? a : new r(function(l) {
      l(a);
    });
  }
  return new (r || (r = Promise))(function(a, l) {
    function s(c) {
      try {
        d(o.next(c));
      } catch (f) {
        l(f);
      }
    }
    function u(c) {
      try {
        d(o.throw(c));
      } catch (f) {
        l(f);
      }
    }
    function d(c) {
      c.done ? a(c.value) : i(c.value).then(s, u);
    }
    d((o = o.apply(e, n || [])).next());
  });
};
function Jr(e, n) {
  return `${n}-loading-bar ${n}-loading-bar--${e}`;
}
const TC = Q({
  name: "LoadingBar",
  props: {
    containerClass: String,
    containerStyle: [String, Object]
  },
  setup() {
    const {
      inlineThemeDisabled: e
    } = Pe(), {
      props: n,
      mergedClsPrefixRef: r
    } = xe(Zu), o = L(null), i = L(!1), a = L(!1), l = L(!1), s = L(!1);
    let u = !1;
    const d = L(!1), c = R(() => {
      const {
        loadingBarStyle: S
      } = n;
      return S ? S[d.value ? "error" : "loading"] : "";
    });
    function f() {
      return Zr(this, void 0, void 0, function* () {
        i.value = !1, l.value = !1, u = !1, d.value = !1, s.value = !0, yield et(), s.value = !1;
      });
    }
    function p() {
      return Zr(this, arguments, void 0, function* (S = 0, E = 80, C = "starting") {
        if (a.value = !0, yield f(), u) return;
        l.value = !0, yield et();
        const $ = o.value;
        $ && ($.style.maxWidth = `${S}%`, $.style.transition = "none", $.offsetWidth, $.className = Jr(C, r.value), $.style.transition = "", $.style.maxWidth = `${E}%`);
      });
    }
    function m() {
      return Zr(this, void 0, void 0, function* () {
        if (u || d.value) return;
        a.value && (yield et()), u = !0;
        const S = o.value;
        S && (S.className = Jr("finishing", r.value), S.style.maxWidth = "100%", S.offsetWidth, l.value = !1);
      });
    }
    function v() {
      if (!(u || d.value))
        if (!l.value)
          p(100, 100, "error").then(() => {
            d.value = !0;
            const S = o.value;
            S && (S.className = Jr("error", r.value), S.offsetWidth, l.value = !1);
          });
        else {
          d.value = !0;
          const S = o.value;
          if (!S) return;
          S.className = Jr("error", r.value), S.style.maxWidth = "100%", S.offsetWidth, l.value = !1;
        }
    }
    function g() {
      i.value = !0;
    }
    function b() {
      i.value = !1;
    }
    function x() {
      return Zr(this, void 0, void 0, function* () {
        yield f();
      });
    }
    const B = ce("LoadingBar", "-loading-bar", zC, mC, n, r), A = R(() => {
      const {
        self: {
          height: S,
          colorError: E,
          colorLoading: C
        }
      } = B.value;
      return {
        "--n-height": S,
        "--n-color-loading": C,
        "--n-color-error": E
      };
    }), y = e ? je("loading-bar", void 0, A, n) : void 0;
    return {
      mergedClsPrefix: r,
      loadingBarRef: o,
      started: a,
      loading: l,
      entering: i,
      transitionDisabled: s,
      start: p,
      error: v,
      finish: m,
      handleEnter: g,
      handleAfterEnter: b,
      handleAfterLeave: x,
      mergedLoadingBarStyle: c,
      cssVars: e ? void 0 : A,
      themeClass: y == null ? void 0 : y.themeClass,
      onRender: y == null ? void 0 : y.onRender
    };
  },
  render() {
    if (!this.started) return null;
    const {
      mergedClsPrefix: e
    } = this;
    return h(ft, {
      name: "fade-in-transition",
      appear: !0,
      onEnter: this.handleEnter,
      onAfterEnter: this.handleAfterEnter,
      onAfterLeave: this.handleAfterLeave,
      css: !this.transitionDisabled
    }, {
      default: () => {
        var n;
        return (n = this.onRender) === null || n === void 0 || n.call(this), kt(h("div", {
          class: [`${e}-loading-bar-container`, this.themeClass, this.containerClass],
          style: this.containerStyle
        }, h("div", {
          ref: "loadingBarRef",
          class: [`${e}-loading-bar`],
          style: [this.cssVars, this.mergedLoadingBarStyle]
        })), [[qn, this.loading || !this.loading && this.entering]]);
      }
    });
  }
}), RC = Object.assign(Object.assign({}, ce.props), {
  to: {
    type: [String, Object, Boolean],
    default: void 0
  },
  containerClass: String,
  containerStyle: [String, Object],
  loadingBarStyle: {
    type: Object
  }
}), OC = Q({
  name: "LoadingBarProvider",
  props: RC,
  setup(e) {
    const n = Jn(), r = L(null), o = {
      start() {
        var a;
        n.value ? (a = r.value) === null || a === void 0 || a.start() : et(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.start();
        });
      },
      error() {
        var a;
        n.value ? (a = r.value) === null || a === void 0 || a.error() : et(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.error();
        });
      },
      finish() {
        var a;
        n.value ? (a = r.value) === null || a === void 0 || a.finish() : et(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.finish();
        });
      }
    }, {
      mergedClsPrefixRef: i
    } = Pe(e);
    return we(Ju, o), we(Zu, {
      props: e,
      mergedClsPrefixRef: i
    }), Object.assign(o, {
      loadingBarRef: r
    });
  },
  render() {
    var e, n;
    return h(ht, null, h(Xl, {
      disabled: this.to === !1,
      to: this.to || "body"
    }, h(TC, {
      ref: "loadingBarRef",
      containerStyle: this.containerStyle,
      containerClass: this.containerClass
    })), (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e));
  }
});
function sy() {
  const e = xe(Ju, null);
  return e === null && Dr("use-loading-bar", "No outer <n-loading-bar-provider /> founded."), e;
}
const Qu = "n-popconfirm", ed = {
  positiveText: String,
  negativeText: String,
  showIcon: {
    type: Boolean,
    default: !0
  },
  onPositiveClick: {
    type: Function,
    required: !0
  },
  onNegativeClick: {
    type: Function,
    required: !0
  }
}, Ul = Un(ed), MC = Q({
  name: "NPopconfirmPanel",
  props: ed,
  setup(e) {
    const {
      localeRef: n
    } = Sr("Popconfirm"), {
      inlineThemeDisabled: r
    } = Pe(), {
      mergedClsPrefixRef: o,
      mergedThemeRef: i,
      props: a
    } = xe(Qu), l = R(() => {
      const {
        common: {
          cubicBezierEaseInOut: u
        },
        self: {
          fontSize: d,
          iconSize: c,
          iconColor: f
        }
      } = i.value;
      return {
        "--n-bezier": u,
        "--n-font-size": d,
        "--n-icon-size": c,
        "--n-icon-color": f
      };
    }), s = r ? je("popconfirm-panel", void 0, l, a) : void 0;
    return Object.assign(Object.assign({}, Sr("Popconfirm")), {
      mergedClsPrefix: o,
      cssVars: r ? void 0 : l,
      localizedPositiveText: R(() => e.positiveText || n.value.positiveText),
      localizedNegativeText: R(() => e.negativeText || n.value.negativeText),
      positiveButtonProps: le(a, "positiveButtonProps"),
      negativeButtonProps: le(a, "negativeButtonProps"),
      handlePositiveClick(u) {
        e.onPositiveClick(u);
      },
      handleNegativeClick(u) {
        e.onNegativeClick(u);
      },
      themeClass: s == null ? void 0 : s.themeClass,
      onRender: s == null ? void 0 : s.onRender
    });
  },
  render() {
    var e;
    const {
      mergedClsPrefix: n,
      showIcon: r,
      $slots: o
    } = this, i = Pt(o.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && h(Fr, Object.assign({
      size: "small",
      onClick: this.handleNegativeClick
    }, this.negativeButtonProps), {
      default: () => this.localizedNegativeText
    }), this.positiveText !== null && h(Fr, Object.assign({
      size: "small",
      type: "primary",
      onClick: this.handlePositiveClick
    }, this.positiveButtonProps), {
      default: () => this.localizedPositiveText
    })]);
    return (e = this.onRender) === null || e === void 0 || e.call(this), h("div", {
      class: [`${n}-popconfirm__panel`, this.themeClass],
      style: this.cssVars
    }, _e(o.default, (a) => r || a ? h("div", {
      class: `${n}-popconfirm__body`
    }, r ? h("div", {
      class: `${n}-popconfirm__icon`
    }, Pt(o.icon, () => [h(zt, {
      clsPrefix: n
    }, {
      default: () => h(mu, null)
    })])) : null, a) : null), i ? h("div", {
      class: [`${n}-popconfirm__action`]
    }, i) : null);
  }
}), IC = O("popconfirm", [k("body", `
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `, [k("icon", `
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]), k("action", `
 display: flex;
 justify-content: flex-end;
 `, [z("&:not(:first-child)", "margin-top: 8px"), O("button", [z("&:not(:last-child)", "margin-right: 8px;")])])]), _C = Object.assign(Object.assign(Object.assign({}, ce.props), Tr), {
  positiveText: String,
  negativeText: String,
  showIcon: {
    type: Boolean,
    default: !0
  },
  trigger: {
    type: String,
    default: "click"
  },
  positiveButtonProps: Object,
  negativeButtonProps: Object,
  onPositiveClick: Function,
  onNegativeClick: Function
}), LC = Q({
  name: "Popconfirm",
  props: _C,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Pe(), r = ce("Popconfirm", "-popconfirm", IC, yC, e, n), o = L(null);
    function i(s) {
      var u;
      if (!(!((u = o.value) === null || u === void 0) && u.getMergedShow())) return;
      const {
        onPositiveClick: d,
        "onUpdate:show": c
      } = e;
      Promise.resolve(d ? d(s) : !0).then((f) => {
        var p;
        f !== !1 && ((p = o.value) === null || p === void 0 || p.setShow(!1), c && he(c, !1));
      });
    }
    function a(s) {
      var u;
      if (!(!((u = o.value) === null || u === void 0) && u.getMergedShow())) return;
      const {
        onNegativeClick: d,
        "onUpdate:show": c
      } = e;
      Promise.resolve(d ? d(s) : !0).then((f) => {
        var p;
        f !== !1 && ((p = o.value) === null || p === void 0 || p.setShow(!1), c && he(c, !1));
      });
    }
    return we(Qu, {
      mergedThemeRef: r,
      mergedClsPrefixRef: n,
      props: e
    }), {
      setShow(s) {
        var u;
        (u = o.value) === null || u === void 0 || u.setShow(s);
      },
      syncPosition() {
        var s;
        (s = o.value) === null || s === void 0 || s.syncPosition();
      },
      mergedTheme: r,
      popoverInstRef: o,
      handlePositiveClick: i,
      handleNegativeClick: a
    };
  },
  render() {
    const {
      $slots: e,
      $props: n,
      mergedTheme: r
    } = this;
    return h(Rr, ls(n, Ul, {
      theme: r.peers.Popover,
      themeOverrides: r.peerOverrides.Popover,
      internalExtraClass: ["popconfirm"],
      ref: "popoverInstRef"
    }), {
      trigger: e.activator || e.trigger,
      default: () => {
        const o = Cn(n, Ul);
        return h(MC, Object.assign(Object.assign({}, o), {
          onPositiveClick: this.handlePositiveClick,
          onNegativeClick: this.handleNegativeClick
        }), e);
      }
    });
  }
}), NC = z([z("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), O("spin-container", `
 position: relative;
 `, [O("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Bo()])]), O("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), O("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [V("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]), O("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), O("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [V("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]), HC = {
  small: 20,
  medium: 18,
  large: 16
}, WC = Object.assign(Object.assign({}, ce.props), {
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
}), jC = Q({
  name: "Spin",
  props: WC,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.spinning !== void 0 && nt("spin", "`spinning` is deprecated, please use `show` instead.");
    });
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r
    } = Pe(e), o = ce("Spin", "-spin", NC, BC, e, n), i = R(() => {
      const {
        size: u
      } = e, {
        common: {
          cubicBezierEaseInOut: d
        },
        self: c
      } = o.value, {
        opacitySpinning: f,
        color: p,
        textColor: m
      } = c, v = typeof u == "number" ? _n(u) : c[Y("size", u)];
      return {
        "--n-bezier": d,
        "--n-opacity-spinning": f,
        "--n-size": v,
        "--n-color": p,
        "--n-text-color": m
      };
    }), a = r ? je("spin", R(() => {
      const {
        size: u
      } = e;
      return typeof u == "number" ? String(u) : u[0];
    }), i, e) : void 0, l = Mi(e, ["spinning", "show"]), s = L(!1);
    return rt((u) => {
      let d;
      if (l.value) {
        const {
          delay: c
        } = e;
        if (c) {
          d = window.setTimeout(() => {
            s.value = !0;
          }, c), u(() => {
            clearTimeout(d);
          });
          return;
        }
      }
      s.value = l.value;
    }), {
      mergedClsPrefix: n,
      active: s,
      mergedStrokeWidth: R(() => {
        const {
          strokeWidth: u
        } = e;
        if (u !== void 0) return u;
        const {
          size: d
        } = e;
        return HC[typeof d == "number" ? "medium" : d];
      }),
      cssVars: r ? void 0 : i,
      themeClass: a == null ? void 0 : a.themeClass,
      onRender: a == null ? void 0 : a.onRender
    };
  },
  render() {
    var e, n;
    const {
      $slots: r,
      mergedClsPrefix: o,
      description: i
    } = this, a = r.icon && this.rotate, l = (i || r.description) && h("div", {
      class: `${o}-spin-description`
    }, i || ((e = r.description) === null || e === void 0 ? void 0 : e.call(r))), s = r.icon ? h("div", {
      class: [`${o}-spin-body`, this.themeClass]
    }, h("div", {
      class: [`${o}-spin`, a && `${o}-spin--rotate`],
      style: r.default ? "" : this.cssVars
    }, r.icon()), l) : h("div", {
      class: [`${o}-spin-body`, this.themeClass]
    }, h(wo, {
      clsPrefix: o,
      style: r.default ? "" : this.cssVars,
      stroke: this.stroke,
      "stroke-width": this.mergedStrokeWidth,
      class: `${o}-spin`
    }), l);
    return (n = this.onRender) === null || n === void 0 || n.call(this), r.default ? h("div", {
      class: [`${o}-spin-container`, this.themeClass],
      style: this.cssVars
    }, h("div", {
      class: [`${o}-spin-content`, this.active && `${o}-spin-content--spinning`, this.contentClass],
      style: this.contentStyle
    }, r), h(ft, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? s : null
    })) : s;
  }
}), VC = z([O("table", `
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
 `, [z("th", `
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
 `, [z("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), z("td", `
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
 `, [z("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), V("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `, [z("tr", [z("&:last-child", [z("td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]), V("single-line", [z("th", `
 border-right: 0px solid var(--n-merged-border-color);
 `), z("td", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), V("single-column", [z("tr", [z("&:not(:last-child)", [z("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]), V("striped", [z("tr:nth-of-type(even)", [z("td", "background-color: var(--n-td-color-striped)")])]), He("bottom-bordered", [z("tr", [z("&:last-child", [z("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]), Ti(O("table", `
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `, [z("th", `
 background-color: var(--n-th-color-modal);
 `), z("td", `
 background-color: var(--n-td-color-modal);
 `)])), vs(O("table", `
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `, [z("th", `
 background-color: var(--n-th-color-popover);
 `), z("td", `
 background-color: var(--n-td-color-popover);
 `)]))]), qC = Object.assign(Object.assign({}, ce.props), {
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
}), KC = Q({
  name: "Table",
  props: qC,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Pe(e), i = ce("Table", "-table", VC, AC, e, n), a = wt("Table", o, n), l = R(() => {
      const {
        size: u
      } = e, {
        self: {
          borderColor: d,
          tdColor: c,
          tdColorModal: f,
          tdColorPopover: p,
          thColor: m,
          thColorModal: v,
          thColorPopover: g,
          thTextColor: b,
          tdTextColor: x,
          borderRadius: B,
          thFontWeight: A,
          lineHeight: y,
          borderColorModal: S,
          borderColorPopover: E,
          tdColorStriped: C,
          tdColorStripedModal: $,
          tdColorStripedPopover: M,
          [Y("fontSize", u)]: I,
          [Y("tdPadding", u)]: K,
          [Y("thPadding", u)]: H
        },
        common: {
          cubicBezierEaseInOut: t
        }
      } = i.value;
      return {
        "--n-bezier": t,
        "--n-td-color": c,
        "--n-td-color-modal": f,
        "--n-td-color-popover": p,
        "--n-td-text-color": x,
        "--n-border-color": d,
        "--n-border-color-modal": S,
        "--n-border-color-popover": E,
        "--n-border-radius": B,
        "--n-font-size": I,
        "--n-th-color": m,
        "--n-th-color-modal": v,
        "--n-th-color-popover": g,
        "--n-th-font-weight": A,
        "--n-th-text-color": b,
        "--n-line-height": y,
        "--n-td-padding": K,
        "--n-th-padding": H,
        "--n-td-color-striped": C,
        "--n-td-color-striped-modal": $,
        "--n-td-color-striped-popover": M
      };
    }), s = r ? je("table", R(() => e.size[0]), l, e) : void 0;
    return {
      rtlEnabled: a,
      mergedClsPrefix: n,
      cssVars: r ? void 0 : l,
      themeClass: s == null ? void 0 : s.themeClass,
      onRender: s == null ? void 0 : s.onRender
    };
  },
  render() {
    var e;
    const {
      mergedClsPrefix: n
    } = this;
    return (e = this.onRender) === null || e === void 0 || e.call(this), h("table", {
      class: [`${n}-table`, this.themeClass, {
        [`${n}-table--rtl`]: this.rtlEnabled,
        [`${n}-table--bottom-bordered`]: this.bottomBordered,
        [`${n}-table--bordered`]: this.bordered,
        [`${n}-table--single-line`]: this.singleLine,
        [`${n}-table--single-column`]: this.singleColumn,
        [`${n}-table--striped`]: this.striped
      }],
      style: this.cssVars
    }, this.$slots);
  }
}), UC = /* @__PURE__ */ Object.assign({
  name: "PPractical",
  inheritAttrs: !1
}, {
  __name: "practical",
  setup(e) {
    const n = {
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
    return (r, o) => (dt(), Ct(Fe(Mb), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: Fe(sx),
      "date-locale": Fe(wg),
      "theme-overrides": n
    }, {
      default: yt(() => [
        po(Fe(F1), null, {
          default: yt(() => [
            Vn(r.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["locale", "date-locale"]));
  }
});
function GC(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var td = { exports: {} };
(function(e) {
  function n() {
    var r = 0, o = 1, i = 2, a = 3, l = 4, s = 5, u = 6, d = 7, c = 8, f = 9, p = 10, m = 11, v = 12, g = 13, b = 14, x = 15, B = 16, A = 17, y = 0, S = 1, E = 2, C = 3, $ = 4;
    function M(t, F) {
      return 55296 <= t.charCodeAt(F) && t.charCodeAt(F) <= 56319 && 56320 <= t.charCodeAt(F + 1) && t.charCodeAt(F + 1) <= 57343;
    }
    function I(t, F) {
      F === void 0 && (F = 0);
      var D = t.charCodeAt(F);
      if (55296 <= D && D <= 56319 && F < t.length - 1) {
        var _ = D, T = t.charCodeAt(F + 1);
        return 56320 <= T && T <= 57343 ? (_ - 55296) * 1024 + (T - 56320) + 65536 : _;
      }
      if (56320 <= D && D <= 57343 && F >= 1) {
        var _ = t.charCodeAt(F - 1), T = D;
        return 55296 <= _ && _ <= 56319 ? (_ - 55296) * 1024 + (T - 56320) + 65536 : T;
      }
      return D;
    }
    function K(t, F, D) {
      var _ = [t].concat(F).concat([D]), T = _[_.length - 2], j = D, J = _.lastIndexOf(b);
      if (J > 1 && _.slice(1, J).every(function(W) {
        return W == a;
      }) && [a, g, A].indexOf(t) == -1)
        return E;
      var Z = _.lastIndexOf(l);
      if (Z > 0 && _.slice(1, Z).every(function(W) {
        return W == l;
      }) && [v, l].indexOf(T) == -1)
        return _.filter(function(W) {
          return W == l;
        }).length % 2 == 1 ? C : $;
      if (T == r && j == o)
        return y;
      if (T == i || T == r || T == o)
        return j == b && F.every(function(W) {
          return W == a;
        }) ? E : S;
      if (j == i || j == r || j == o)
        return S;
      if (T == u && (j == u || j == d || j == f || j == p))
        return y;
      if ((T == f || T == d) && (j == d || j == c))
        return y;
      if ((T == p || T == c) && j == c)
        return y;
      if (j == a || j == x)
        return y;
      if (j == s)
        return y;
      if (T == v)
        return y;
      var ae = _.indexOf(a) != -1 ? _.lastIndexOf(a) - 1 : _.length - 2;
      return [g, A].indexOf(_[ae]) != -1 && _.slice(ae + 1, -1).every(function(W) {
        return W == a;
      }) && j == b || T == x && [B, A].indexOf(j) != -1 ? y : F.indexOf(l) != -1 ? E : T == l && j == l ? y : S;
    }
    this.nextBreak = function(t, F) {
      if (F === void 0 && (F = 0), F < 0)
        return 0;
      if (F >= t.length - 1)
        return t.length;
      for (var D = H(I(t, F)), _ = [], T = F + 1; T < t.length; T++)
        if (!M(t, T - 1)) {
          var j = H(I(t, T));
          if (K(D, _, j))
            return T;
          _.push(j);
        }
      return t.length;
    }, this.splitGraphemes = function(t) {
      for (var F = [], D = 0, _; (_ = this.nextBreak(t, D)) < t.length; )
        F.push(t.slice(D, _)), D = _;
      return D < t.length && F.push(t.slice(D)), F;
    }, this.iterateGraphemes = function(t) {
      var F = 0, D = {
        next: (function() {
          var _, T;
          return (T = this.nextBreak(t, F)) < t.length ? (_ = t.slice(F, T), F = T, { value: _, done: !1 }) : F < t.length ? (_ = t.slice(F), F = t.length, { value: _, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && (D[Symbol.iterator] = function() {
        return D;
      }), D;
    }, this.countGraphemes = function(t) {
      for (var F = 0, D = 0, _; (_ = this.nextBreak(t, D)) < t.length; )
        D = _, F++;
      return D < t.length && F++, F;
    };
    function H(t) {
      return 1536 <= t && t <= 1541 || // Cf   [6] ARABIC NUMBER SIGN..ARABIC NUMBER MARK ABOVE
      t == 1757 || // Cf       ARABIC END OF AYAH
      t == 1807 || // Cf       SYRIAC ABBREVIATION MARK
      t == 2274 || // Cf       ARABIC DISPUTED END OF AYAH
      t == 3406 || // Lo       MALAYALAM LETTER DOT REPH
      t == 69821 || // Cf       KAITHI NUMBER SIGN
      70082 <= t && t <= 70083 || // Lo   [2] SHARADA SIGN JIHVAMULIYA..SHARADA SIGN UPADHMANIYA
      t == 72250 || // Lo       ZANABAZAR SQUARE CLUSTER-INITIAL LETTER RA
      72326 <= t && t <= 72329 || // Lo   [4] SOYOMBO CLUSTER-INITIAL LETTER RA..SOYOMBO CLUSTER-INITIAL LETTER SA
      t == 73030 ? v : t == 13 ? r : t == 10 ? o : 0 <= t && t <= 9 || // Cc  [10] <control-0000>..<control-0009>
      11 <= t && t <= 12 || // Cc   [2] <control-000B>..<control-000C>
      14 <= t && t <= 31 || // Cc  [18] <control-000E>..<control-001F>
      127 <= t && t <= 159 || // Cc  [33] <control-007F>..<control-009F>
      t == 173 || // Cf       SOFT HYPHEN
      t == 1564 || // Cf       ARABIC LETTER MARK
      t == 6158 || // Cf       MONGOLIAN VOWEL SEPARATOR
      t == 8203 || // Cf       ZERO WIDTH SPACE
      8206 <= t && t <= 8207 || // Cf   [2] LEFT-TO-RIGHT MARK..RIGHT-TO-LEFT MARK
      t == 8232 || // Zl       LINE SEPARATOR
      t == 8233 || // Zp       PARAGRAPH SEPARATOR
      8234 <= t && t <= 8238 || // Cf   [5] LEFT-TO-RIGHT EMBEDDING..RIGHT-TO-LEFT OVERRIDE
      8288 <= t && t <= 8292 || // Cf   [5] WORD JOINER..INVISIBLE PLUS
      t == 8293 || // Cn       <reserved-2065>
      8294 <= t && t <= 8303 || // Cf  [10] LEFT-TO-RIGHT ISOLATE..NOMINAL DIGIT SHAPES
      55296 <= t && t <= 57343 || // Cs [2048] <surrogate-D800>..<surrogate-DFFF>
      t == 65279 || // Cf       ZERO WIDTH NO-BREAK SPACE
      65520 <= t && t <= 65528 || // Cn   [9] <reserved-FFF0>..<reserved-FFF8>
      65529 <= t && t <= 65531 || // Cf   [3] INTERLINEAR ANNOTATION ANCHOR..INTERLINEAR ANNOTATION TERMINATOR
      113824 <= t && t <= 113827 || // Cf   [4] SHORTHAND FORMAT LETTER OVERLAP..SHORTHAND FORMAT UP STEP
      119155 <= t && t <= 119162 || // Cf   [8] MUSICAL SYMBOL BEGIN BEAM..MUSICAL SYMBOL END PHRASE
      t == 917504 || // Cn       <reserved-E0000>
      t == 917505 || // Cf       LANGUAGE TAG
      917506 <= t && t <= 917535 || // Cn  [30] <reserved-E0002>..<reserved-E001F>
      917632 <= t && t <= 917759 || // Cn [128] <reserved-E0080>..<reserved-E00FF>
      918e3 <= t && t <= 921599 ? i : 768 <= t && t <= 879 || // Mn [112] COMBINING GRAVE ACCENT..COMBINING LATIN SMALL LETTER X
      1155 <= t && t <= 1159 || // Mn   [5] COMBINING CYRILLIC TITLO..COMBINING CYRILLIC POKRYTIE
      1160 <= t && t <= 1161 || // Me   [2] COMBINING CYRILLIC HUNDRED THOUSANDS SIGN..COMBINING CYRILLIC MILLIONS SIGN
      1425 <= t && t <= 1469 || // Mn  [45] HEBREW ACCENT ETNAHTA..HEBREW POINT METEG
      t == 1471 || // Mn       HEBREW POINT RAFE
      1473 <= t && t <= 1474 || // Mn   [2] HEBREW POINT SHIN DOT..HEBREW POINT SIN DOT
      1476 <= t && t <= 1477 || // Mn   [2] HEBREW MARK UPPER DOT..HEBREW MARK LOWER DOT
      t == 1479 || // Mn       HEBREW POINT QAMATS QATAN
      1552 <= t && t <= 1562 || // Mn  [11] ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM..ARABIC SMALL KASRA
      1611 <= t && t <= 1631 || // Mn  [21] ARABIC FATHATAN..ARABIC WAVY HAMZA BELOW
      t == 1648 || // Mn       ARABIC LETTER SUPERSCRIPT ALEF
      1750 <= t && t <= 1756 || // Mn   [7] ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA..ARABIC SMALL HIGH SEEN
      1759 <= t && t <= 1764 || // Mn   [6] ARABIC SMALL HIGH ROUNDED ZERO..ARABIC SMALL HIGH MADDA
      1767 <= t && t <= 1768 || // Mn   [2] ARABIC SMALL HIGH YEH..ARABIC SMALL HIGH NOON
      1770 <= t && t <= 1773 || // Mn   [4] ARABIC EMPTY CENTRE LOW STOP..ARABIC SMALL LOW MEEM
      t == 1809 || // Mn       SYRIAC LETTER SUPERSCRIPT ALAPH
      1840 <= t && t <= 1866 || // Mn  [27] SYRIAC PTHAHA ABOVE..SYRIAC BARREKH
      1958 <= t && t <= 1968 || // Mn  [11] THAANA ABAFILI..THAANA SUKUN
      2027 <= t && t <= 2035 || // Mn   [9] NKO COMBINING SHORT HIGH TONE..NKO COMBINING DOUBLE DOT ABOVE
      2070 <= t && t <= 2073 || // Mn   [4] SAMARITAN MARK IN..SAMARITAN MARK DAGESH
      2075 <= t && t <= 2083 || // Mn   [9] SAMARITAN MARK EPENTHETIC YUT..SAMARITAN VOWEL SIGN A
      2085 <= t && t <= 2087 || // Mn   [3] SAMARITAN VOWEL SIGN SHORT A..SAMARITAN VOWEL SIGN U
      2089 <= t && t <= 2093 || // Mn   [5] SAMARITAN VOWEL SIGN LONG I..SAMARITAN MARK NEQUDAA
      2137 <= t && t <= 2139 || // Mn   [3] MANDAIC AFFRICATION MARK..MANDAIC GEMINATION MARK
      2260 <= t && t <= 2273 || // Mn  [14] ARABIC SMALL HIGH WORD AR-RUB..ARABIC SMALL HIGH SIGN SAFHA
      2275 <= t && t <= 2306 || // Mn  [32] ARABIC TURNED DAMMA BELOW..DEVANAGARI SIGN ANUSVARA
      t == 2362 || // Mn       DEVANAGARI VOWEL SIGN OE
      t == 2364 || // Mn       DEVANAGARI SIGN NUKTA
      2369 <= t && t <= 2376 || // Mn   [8] DEVANAGARI VOWEL SIGN U..DEVANAGARI VOWEL SIGN AI
      t == 2381 || // Mn       DEVANAGARI SIGN VIRAMA
      2385 <= t && t <= 2391 || // Mn   [7] DEVANAGARI STRESS SIGN UDATTA..DEVANAGARI VOWEL SIGN UUE
      2402 <= t && t <= 2403 || // Mn   [2] DEVANAGARI VOWEL SIGN VOCALIC L..DEVANAGARI VOWEL SIGN VOCALIC LL
      t == 2433 || // Mn       BENGALI SIGN CANDRABINDU
      t == 2492 || // Mn       BENGALI SIGN NUKTA
      t == 2494 || // Mc       BENGALI VOWEL SIGN AA
      2497 <= t && t <= 2500 || // Mn   [4] BENGALI VOWEL SIGN U..BENGALI VOWEL SIGN VOCALIC RR
      t == 2509 || // Mn       BENGALI SIGN VIRAMA
      t == 2519 || // Mc       BENGALI AU LENGTH MARK
      2530 <= t && t <= 2531 || // Mn   [2] BENGALI VOWEL SIGN VOCALIC L..BENGALI VOWEL SIGN VOCALIC LL
      2561 <= t && t <= 2562 || // Mn   [2] GURMUKHI SIGN ADAK BINDI..GURMUKHI SIGN BINDI
      t == 2620 || // Mn       GURMUKHI SIGN NUKTA
      2625 <= t && t <= 2626 || // Mn   [2] GURMUKHI VOWEL SIGN U..GURMUKHI VOWEL SIGN UU
      2631 <= t && t <= 2632 || // Mn   [2] GURMUKHI VOWEL SIGN EE..GURMUKHI VOWEL SIGN AI
      2635 <= t && t <= 2637 || // Mn   [3] GURMUKHI VOWEL SIGN OO..GURMUKHI SIGN VIRAMA
      t == 2641 || // Mn       GURMUKHI SIGN UDAAT
      2672 <= t && t <= 2673 || // Mn   [2] GURMUKHI TIPPI..GURMUKHI ADDAK
      t == 2677 || // Mn       GURMUKHI SIGN YAKASH
      2689 <= t && t <= 2690 || // Mn   [2] GUJARATI SIGN CANDRABINDU..GUJARATI SIGN ANUSVARA
      t == 2748 || // Mn       GUJARATI SIGN NUKTA
      2753 <= t && t <= 2757 || // Mn   [5] GUJARATI VOWEL SIGN U..GUJARATI VOWEL SIGN CANDRA E
      2759 <= t && t <= 2760 || // Mn   [2] GUJARATI VOWEL SIGN E..GUJARATI VOWEL SIGN AI
      t == 2765 || // Mn       GUJARATI SIGN VIRAMA
      2786 <= t && t <= 2787 || // Mn   [2] GUJARATI VOWEL SIGN VOCALIC L..GUJARATI VOWEL SIGN VOCALIC LL
      2810 <= t && t <= 2815 || // Mn   [6] GUJARATI SIGN SUKUN..GUJARATI SIGN TWO-CIRCLE NUKTA ABOVE
      t == 2817 || // Mn       ORIYA SIGN CANDRABINDU
      t == 2876 || // Mn       ORIYA SIGN NUKTA
      t == 2878 || // Mc       ORIYA VOWEL SIGN AA
      t == 2879 || // Mn       ORIYA VOWEL SIGN I
      2881 <= t && t <= 2884 || // Mn   [4] ORIYA VOWEL SIGN U..ORIYA VOWEL SIGN VOCALIC RR
      t == 2893 || // Mn       ORIYA SIGN VIRAMA
      t == 2902 || // Mn       ORIYA AI LENGTH MARK
      t == 2903 || // Mc       ORIYA AU LENGTH MARK
      2914 <= t && t <= 2915 || // Mn   [2] ORIYA VOWEL SIGN VOCALIC L..ORIYA VOWEL SIGN VOCALIC LL
      t == 2946 || // Mn       TAMIL SIGN ANUSVARA
      t == 3006 || // Mc       TAMIL VOWEL SIGN AA
      t == 3008 || // Mn       TAMIL VOWEL SIGN II
      t == 3021 || // Mn       TAMIL SIGN VIRAMA
      t == 3031 || // Mc       TAMIL AU LENGTH MARK
      t == 3072 || // Mn       TELUGU SIGN COMBINING CANDRABINDU ABOVE
      3134 <= t && t <= 3136 || // Mn   [3] TELUGU VOWEL SIGN AA..TELUGU VOWEL SIGN II
      3142 <= t && t <= 3144 || // Mn   [3] TELUGU VOWEL SIGN E..TELUGU VOWEL SIGN AI
      3146 <= t && t <= 3149 || // Mn   [4] TELUGU VOWEL SIGN O..TELUGU SIGN VIRAMA
      3157 <= t && t <= 3158 || // Mn   [2] TELUGU LENGTH MARK..TELUGU AI LENGTH MARK
      3170 <= t && t <= 3171 || // Mn   [2] TELUGU VOWEL SIGN VOCALIC L..TELUGU VOWEL SIGN VOCALIC LL
      t == 3201 || // Mn       KANNADA SIGN CANDRABINDU
      t == 3260 || // Mn       KANNADA SIGN NUKTA
      t == 3263 || // Mn       KANNADA VOWEL SIGN I
      t == 3266 || // Mc       KANNADA VOWEL SIGN UU
      t == 3270 || // Mn       KANNADA VOWEL SIGN E
      3276 <= t && t <= 3277 || // Mn   [2] KANNADA VOWEL SIGN AU..KANNADA SIGN VIRAMA
      3285 <= t && t <= 3286 || // Mc   [2] KANNADA LENGTH MARK..KANNADA AI LENGTH MARK
      3298 <= t && t <= 3299 || // Mn   [2] KANNADA VOWEL SIGN VOCALIC L..KANNADA VOWEL SIGN VOCALIC LL
      3328 <= t && t <= 3329 || // Mn   [2] MALAYALAM SIGN COMBINING ANUSVARA ABOVE..MALAYALAM SIGN CANDRABINDU
      3387 <= t && t <= 3388 || // Mn   [2] MALAYALAM SIGN VERTICAL BAR VIRAMA..MALAYALAM SIGN CIRCULAR VIRAMA
      t == 3390 || // Mc       MALAYALAM VOWEL SIGN AA
      3393 <= t && t <= 3396 || // Mn   [4] MALAYALAM VOWEL SIGN U..MALAYALAM VOWEL SIGN VOCALIC RR
      t == 3405 || // Mn       MALAYALAM SIGN VIRAMA
      t == 3415 || // Mc       MALAYALAM AU LENGTH MARK
      3426 <= t && t <= 3427 || // Mn   [2] MALAYALAM VOWEL SIGN VOCALIC L..MALAYALAM VOWEL SIGN VOCALIC LL
      t == 3530 || // Mn       SINHALA SIGN AL-LAKUNA
      t == 3535 || // Mc       SINHALA VOWEL SIGN AELA-PILLA
      3538 <= t && t <= 3540 || // Mn   [3] SINHALA VOWEL SIGN KETTI IS-PILLA..SINHALA VOWEL SIGN KETTI PAA-PILLA
      t == 3542 || // Mn       SINHALA VOWEL SIGN DIGA PAA-PILLA
      t == 3551 || // Mc       SINHALA VOWEL SIGN GAYANUKITTA
      t == 3633 || // Mn       THAI CHARACTER MAI HAN-AKAT
      3636 <= t && t <= 3642 || // Mn   [7] THAI CHARACTER SARA I..THAI CHARACTER PHINTHU
      3655 <= t && t <= 3662 || // Mn   [8] THAI CHARACTER MAITAIKHU..THAI CHARACTER YAMAKKAN
      t == 3761 || // Mn       LAO VOWEL SIGN MAI KAN
      3764 <= t && t <= 3769 || // Mn   [6] LAO VOWEL SIGN I..LAO VOWEL SIGN UU
      3771 <= t && t <= 3772 || // Mn   [2] LAO VOWEL SIGN MAI KON..LAO SEMIVOWEL SIGN LO
      3784 <= t && t <= 3789 || // Mn   [6] LAO TONE MAI EK..LAO NIGGAHITA
      3864 <= t && t <= 3865 || // Mn   [2] TIBETAN ASTROLOGICAL SIGN -KHYUD PA..TIBETAN ASTROLOGICAL SIGN SDONG TSHUGS
      t == 3893 || // Mn       TIBETAN MARK NGAS BZUNG NYI ZLA
      t == 3895 || // Mn       TIBETAN MARK NGAS BZUNG SGOR RTAGS
      t == 3897 || // Mn       TIBETAN MARK TSA -PHRU
      3953 <= t && t <= 3966 || // Mn  [14] TIBETAN VOWEL SIGN AA..TIBETAN SIGN RJES SU NGA RO
      3968 <= t && t <= 3972 || // Mn   [5] TIBETAN VOWEL SIGN REVERSED I..TIBETAN MARK HALANTA
      3974 <= t && t <= 3975 || // Mn   [2] TIBETAN SIGN LCI RTAGS..TIBETAN SIGN YANG RTAGS
      3981 <= t && t <= 3991 || // Mn  [11] TIBETAN SUBJOINED SIGN LCE TSA CAN..TIBETAN SUBJOINED LETTER JA
      3993 <= t && t <= 4028 || // Mn  [36] TIBETAN SUBJOINED LETTER NYA..TIBETAN SUBJOINED LETTER FIXED-FORM RA
      t == 4038 || // Mn       TIBETAN SYMBOL PADMA GDAN
      4141 <= t && t <= 4144 || // Mn   [4] MYANMAR VOWEL SIGN I..MYANMAR VOWEL SIGN UU
      4146 <= t && t <= 4151 || // Mn   [6] MYANMAR VOWEL SIGN AI..MYANMAR SIGN DOT BELOW
      4153 <= t && t <= 4154 || // Mn   [2] MYANMAR SIGN VIRAMA..MYANMAR SIGN ASAT
      4157 <= t && t <= 4158 || // Mn   [2] MYANMAR CONSONANT SIGN MEDIAL WA..MYANMAR CONSONANT SIGN MEDIAL HA
      4184 <= t && t <= 4185 || // Mn   [2] MYANMAR VOWEL SIGN VOCALIC L..MYANMAR VOWEL SIGN VOCALIC LL
      4190 <= t && t <= 4192 || // Mn   [3] MYANMAR CONSONANT SIGN MON MEDIAL NA..MYANMAR CONSONANT SIGN MON MEDIAL LA
      4209 <= t && t <= 4212 || // Mn   [4] MYANMAR VOWEL SIGN GEBA KAREN I..MYANMAR VOWEL SIGN KAYAH EE
      t == 4226 || // Mn       MYANMAR CONSONANT SIGN SHAN MEDIAL WA
      4229 <= t && t <= 4230 || // Mn   [2] MYANMAR VOWEL SIGN SHAN E ABOVE..MYANMAR VOWEL SIGN SHAN FINAL Y
      t == 4237 || // Mn       MYANMAR SIGN SHAN COUNCIL EMPHATIC TONE
      t == 4253 || // Mn       MYANMAR VOWEL SIGN AITON AI
      4957 <= t && t <= 4959 || // Mn   [3] ETHIOPIC COMBINING GEMINATION AND VOWEL LENGTH MARK..ETHIOPIC COMBINING GEMINATION MARK
      5906 <= t && t <= 5908 || // Mn   [3] TAGALOG VOWEL SIGN I..TAGALOG SIGN VIRAMA
      5938 <= t && t <= 5940 || // Mn   [3] HANUNOO VOWEL SIGN I..HANUNOO SIGN PAMUDPOD
      5970 <= t && t <= 5971 || // Mn   [2] BUHID VOWEL SIGN I..BUHID VOWEL SIGN U
      6002 <= t && t <= 6003 || // Mn   [2] TAGBANWA VOWEL SIGN I..TAGBANWA VOWEL SIGN U
      6068 <= t && t <= 6069 || // Mn   [2] KHMER VOWEL INHERENT AQ..KHMER VOWEL INHERENT AA
      6071 <= t && t <= 6077 || // Mn   [7] KHMER VOWEL SIGN I..KHMER VOWEL SIGN UA
      t == 6086 || // Mn       KHMER SIGN NIKAHIT
      6089 <= t && t <= 6099 || // Mn  [11] KHMER SIGN MUUSIKATOAN..KHMER SIGN BATHAMASAT
      t == 6109 || // Mn       KHMER SIGN ATTHACAN
      6155 <= t && t <= 6157 || // Mn   [3] MONGOLIAN FREE VARIATION SELECTOR ONE..MONGOLIAN FREE VARIATION SELECTOR THREE
      6277 <= t && t <= 6278 || // Mn   [2] MONGOLIAN LETTER ALI GALI BALUDA..MONGOLIAN LETTER ALI GALI THREE BALUDA
      t == 6313 || // Mn       MONGOLIAN LETTER ALI GALI DAGALGA
      6432 <= t && t <= 6434 || // Mn   [3] LIMBU VOWEL SIGN A..LIMBU VOWEL SIGN U
      6439 <= t && t <= 6440 || // Mn   [2] LIMBU VOWEL SIGN E..LIMBU VOWEL SIGN O
      t == 6450 || // Mn       LIMBU SMALL LETTER ANUSVARA
      6457 <= t && t <= 6459 || // Mn   [3] LIMBU SIGN MUKPHRENG..LIMBU SIGN SA-I
      6679 <= t && t <= 6680 || // Mn   [2] BUGINESE VOWEL SIGN I..BUGINESE VOWEL SIGN U
      t == 6683 || // Mn       BUGINESE VOWEL SIGN AE
      t == 6742 || // Mn       TAI THAM CONSONANT SIGN MEDIAL LA
      6744 <= t && t <= 6750 || // Mn   [7] TAI THAM SIGN MAI KANG LAI..TAI THAM CONSONANT SIGN SA
      t == 6752 || // Mn       TAI THAM SIGN SAKOT
      t == 6754 || // Mn       TAI THAM VOWEL SIGN MAI SAT
      6757 <= t && t <= 6764 || // Mn   [8] TAI THAM VOWEL SIGN I..TAI THAM VOWEL SIGN OA BELOW
      6771 <= t && t <= 6780 || // Mn  [10] TAI THAM VOWEL SIGN OA ABOVE..TAI THAM SIGN KHUEN-LUE KARAN
      t == 6783 || // Mn       TAI THAM COMBINING CRYPTOGRAMMIC DOT
      6832 <= t && t <= 6845 || // Mn  [14] COMBINING DOUBLED CIRCUMFLEX ACCENT..COMBINING PARENTHESES BELOW
      t == 6846 || // Me       COMBINING PARENTHESES OVERLAY
      6912 <= t && t <= 6915 || // Mn   [4] BALINESE SIGN ULU RICEM..BALINESE SIGN SURANG
      t == 6964 || // Mn       BALINESE SIGN REREKAN
      6966 <= t && t <= 6970 || // Mn   [5] BALINESE VOWEL SIGN ULU..BALINESE VOWEL SIGN RA REPA
      t == 6972 || // Mn       BALINESE VOWEL SIGN LA LENGA
      t == 6978 || // Mn       BALINESE VOWEL SIGN PEPET
      7019 <= t && t <= 7027 || // Mn   [9] BALINESE MUSICAL SYMBOL COMBINING TEGEH..BALINESE MUSICAL SYMBOL COMBINING GONG
      7040 <= t && t <= 7041 || // Mn   [2] SUNDANESE SIGN PANYECEK..SUNDANESE SIGN PANGLAYAR
      7074 <= t && t <= 7077 || // Mn   [4] SUNDANESE CONSONANT SIGN PANYAKRA..SUNDANESE VOWEL SIGN PANYUKU
      7080 <= t && t <= 7081 || // Mn   [2] SUNDANESE VOWEL SIGN PAMEPET..SUNDANESE VOWEL SIGN PANEULEUNG
      7083 <= t && t <= 7085 || // Mn   [3] SUNDANESE SIGN VIRAMA..SUNDANESE CONSONANT SIGN PASANGAN WA
      t == 7142 || // Mn       BATAK SIGN TOMPI
      7144 <= t && t <= 7145 || // Mn   [2] BATAK VOWEL SIGN PAKPAK E..BATAK VOWEL SIGN EE
      t == 7149 || // Mn       BATAK VOWEL SIGN KARO O
      7151 <= t && t <= 7153 || // Mn   [3] BATAK VOWEL SIGN U FOR SIMALUNGUN SA..BATAK CONSONANT SIGN H
      7212 <= t && t <= 7219 || // Mn   [8] LEPCHA VOWEL SIGN E..LEPCHA CONSONANT SIGN T
      7222 <= t && t <= 7223 || // Mn   [2] LEPCHA SIGN RAN..LEPCHA SIGN NUKTA
      7376 <= t && t <= 7378 || // Mn   [3] VEDIC TONE KARSHANA..VEDIC TONE PRENKHA
      7380 <= t && t <= 7392 || // Mn  [13] VEDIC SIGN YAJURVEDIC MIDLINE SVARITA..VEDIC TONE RIGVEDIC KASHMIRI INDEPENDENT SVARITA
      7394 <= t && t <= 7400 || // Mn   [7] VEDIC SIGN VISARGA SVARITA..VEDIC SIGN VISARGA ANUDATTA WITH TAIL
      t == 7405 || // Mn       VEDIC SIGN TIRYAK
      t == 7412 || // Mn       VEDIC TONE CANDRA ABOVE
      7416 <= t && t <= 7417 || // Mn   [2] VEDIC TONE RING ABOVE..VEDIC TONE DOUBLE RING ABOVE
      7616 <= t && t <= 7673 || // Mn  [58] COMBINING DOTTED GRAVE ACCENT..COMBINING WIDE INVERTED BRIDGE BELOW
      7675 <= t && t <= 7679 || // Mn   [5] COMBINING DELETION MARK..COMBINING RIGHT ARROWHEAD AND DOWN ARROWHEAD BELOW
      t == 8204 || // Cf       ZERO WIDTH NON-JOINER
      8400 <= t && t <= 8412 || // Mn  [13] COMBINING LEFT HARPOON ABOVE..COMBINING FOUR DOTS ABOVE
      8413 <= t && t <= 8416 || // Me   [4] COMBINING ENCLOSING CIRCLE..COMBINING ENCLOSING CIRCLE BACKSLASH
      t == 8417 || // Mn       COMBINING LEFT RIGHT ARROW ABOVE
      8418 <= t && t <= 8420 || // Me   [3] COMBINING ENCLOSING SCREEN..COMBINING ENCLOSING UPWARD POINTING TRIANGLE
      8421 <= t && t <= 8432 || // Mn  [12] COMBINING REVERSE SOLIDUS OVERLAY..COMBINING ASTERISK ABOVE
      11503 <= t && t <= 11505 || // Mn   [3] COPTIC COMBINING NI ABOVE..COPTIC COMBINING SPIRITUS LENIS
      t == 11647 || // Mn       TIFINAGH CONSONANT JOINER
      11744 <= t && t <= 11775 || // Mn  [32] COMBINING CYRILLIC LETTER BE..COMBINING CYRILLIC LETTER IOTIFIED BIG YUS
      12330 <= t && t <= 12333 || // Mn   [4] IDEOGRAPHIC LEVEL TONE MARK..IDEOGRAPHIC ENTERING TONE MARK
      12334 <= t && t <= 12335 || // Mc   [2] HANGUL SINGLE DOT TONE MARK..HANGUL DOUBLE DOT TONE MARK
      12441 <= t && t <= 12442 || // Mn   [2] COMBINING KATAKANA-HIRAGANA VOICED SOUND MARK..COMBINING KATAKANA-HIRAGANA SEMI-VOICED SOUND MARK
      t == 42607 || // Mn       COMBINING CYRILLIC VZMET
      42608 <= t && t <= 42610 || // Me   [3] COMBINING CYRILLIC TEN MILLIONS SIGN..COMBINING CYRILLIC THOUSAND MILLIONS SIGN
      42612 <= t && t <= 42621 || // Mn  [10] COMBINING CYRILLIC LETTER UKRAINIAN IE..COMBINING CYRILLIC PAYEROK
      42654 <= t && t <= 42655 || // Mn   [2] COMBINING CYRILLIC LETTER EF..COMBINING CYRILLIC LETTER IOTIFIED E
      42736 <= t && t <= 42737 || // Mn   [2] BAMUM COMBINING MARK KOQNDON..BAMUM COMBINING MARK TUKWENTIS
      t == 43010 || // Mn       SYLOTI NAGRI SIGN DVISVARA
      t == 43014 || // Mn       SYLOTI NAGRI SIGN HASANTA
      t == 43019 || // Mn       SYLOTI NAGRI SIGN ANUSVARA
      43045 <= t && t <= 43046 || // Mn   [2] SYLOTI NAGRI VOWEL SIGN U..SYLOTI NAGRI VOWEL SIGN E
      43204 <= t && t <= 43205 || // Mn   [2] SAURASHTRA SIGN VIRAMA..SAURASHTRA SIGN CANDRABINDU
      43232 <= t && t <= 43249 || // Mn  [18] COMBINING DEVANAGARI DIGIT ZERO..COMBINING DEVANAGARI SIGN AVAGRAHA
      43302 <= t && t <= 43309 || // Mn   [8] KAYAH LI VOWEL UE..KAYAH LI TONE CALYA PLOPHU
      43335 <= t && t <= 43345 || // Mn  [11] REJANG VOWEL SIGN I..REJANG CONSONANT SIGN R
      43392 <= t && t <= 43394 || // Mn   [3] JAVANESE SIGN PANYANGGA..JAVANESE SIGN LAYAR
      t == 43443 || // Mn       JAVANESE SIGN CECAK TELU
      43446 <= t && t <= 43449 || // Mn   [4] JAVANESE VOWEL SIGN WULU..JAVANESE VOWEL SIGN SUKU MENDUT
      t == 43452 || // Mn       JAVANESE VOWEL SIGN PEPET
      t == 43493 || // Mn       MYANMAR SIGN SHAN SAW
      43561 <= t && t <= 43566 || // Mn   [6] CHAM VOWEL SIGN AA..CHAM VOWEL SIGN OE
      43569 <= t && t <= 43570 || // Mn   [2] CHAM VOWEL SIGN AU..CHAM VOWEL SIGN UE
      43573 <= t && t <= 43574 || // Mn   [2] CHAM CONSONANT SIGN LA..CHAM CONSONANT SIGN WA
      t == 43587 || // Mn       CHAM CONSONANT SIGN FINAL NG
      t == 43596 || // Mn       CHAM CONSONANT SIGN FINAL M
      t == 43644 || // Mn       MYANMAR SIGN TAI LAING TONE-2
      t == 43696 || // Mn       TAI VIET MAI KANG
      43698 <= t && t <= 43700 || // Mn   [3] TAI VIET VOWEL I..TAI VIET VOWEL U
      43703 <= t && t <= 43704 || // Mn   [2] TAI VIET MAI KHIT..TAI VIET VOWEL IA
      43710 <= t && t <= 43711 || // Mn   [2] TAI VIET VOWEL AM..TAI VIET TONE MAI EK
      t == 43713 || // Mn       TAI VIET TONE MAI THO
      43756 <= t && t <= 43757 || // Mn   [2] MEETEI MAYEK VOWEL SIGN UU..MEETEI MAYEK VOWEL SIGN AAI
      t == 43766 || // Mn       MEETEI MAYEK VIRAMA
      t == 44005 || // Mn       MEETEI MAYEK VOWEL SIGN ANAP
      t == 44008 || // Mn       MEETEI MAYEK VOWEL SIGN UNAP
      t == 44013 || // Mn       MEETEI MAYEK APUN IYEK
      t == 64286 || // Mn       HEBREW POINT JUDEO-SPANISH VARIKA
      65024 <= t && t <= 65039 || // Mn  [16] VARIATION SELECTOR-1..VARIATION SELECTOR-16
      65056 <= t && t <= 65071 || // Mn  [16] COMBINING LIGATURE LEFT HALF..COMBINING CYRILLIC TITLO RIGHT HALF
      65438 <= t && t <= 65439 || // Lm   [2] HALFWIDTH KATAKANA VOICED SOUND MARK..HALFWIDTH KATAKANA SEMI-VOICED SOUND MARK
      t == 66045 || // Mn       PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE
      t == 66272 || // Mn       COPTIC EPACT THOUSANDS MARK
      66422 <= t && t <= 66426 || // Mn   [5] COMBINING OLD PERMIC LETTER AN..COMBINING OLD PERMIC LETTER SII
      68097 <= t && t <= 68099 || // Mn   [3] KHAROSHTHI VOWEL SIGN I..KHAROSHTHI VOWEL SIGN VOCALIC R
      68101 <= t && t <= 68102 || // Mn   [2] KHAROSHTHI VOWEL SIGN E..KHAROSHTHI VOWEL SIGN O
      68108 <= t && t <= 68111 || // Mn   [4] KHAROSHTHI VOWEL LENGTH MARK..KHAROSHTHI SIGN VISARGA
      68152 <= t && t <= 68154 || // Mn   [3] KHAROSHTHI SIGN BAR ABOVE..KHAROSHTHI SIGN DOT BELOW
      t == 68159 || // Mn       KHAROSHTHI VIRAMA
      68325 <= t && t <= 68326 || // Mn   [2] MANICHAEAN ABBREVIATION MARK ABOVE..MANICHAEAN ABBREVIATION MARK BELOW
      t == 69633 || // Mn       BRAHMI SIGN ANUSVARA
      69688 <= t && t <= 69702 || // Mn  [15] BRAHMI VOWEL SIGN AA..BRAHMI VIRAMA
      69759 <= t && t <= 69761 || // Mn   [3] BRAHMI NUMBER JOINER..KAITHI SIGN ANUSVARA
      69811 <= t && t <= 69814 || // Mn   [4] KAITHI VOWEL SIGN U..KAITHI VOWEL SIGN AI
      69817 <= t && t <= 69818 || // Mn   [2] KAITHI SIGN VIRAMA..KAITHI SIGN NUKTA
      69888 <= t && t <= 69890 || // Mn   [3] CHAKMA SIGN CANDRABINDU..CHAKMA SIGN VISARGA
      69927 <= t && t <= 69931 || // Mn   [5] CHAKMA VOWEL SIGN A..CHAKMA VOWEL SIGN UU
      69933 <= t && t <= 69940 || // Mn   [8] CHAKMA VOWEL SIGN AI..CHAKMA MAAYYAA
      t == 70003 || // Mn       MAHAJANI SIGN NUKTA
      70016 <= t && t <= 70017 || // Mn   [2] SHARADA SIGN CANDRABINDU..SHARADA SIGN ANUSVARA
      70070 <= t && t <= 70078 || // Mn   [9] SHARADA VOWEL SIGN U..SHARADA VOWEL SIGN O
      70090 <= t && t <= 70092 || // Mn   [3] SHARADA SIGN NUKTA..SHARADA EXTRA SHORT VOWEL MARK
      70191 <= t && t <= 70193 || // Mn   [3] KHOJKI VOWEL SIGN U..KHOJKI VOWEL SIGN AI
      t == 70196 || // Mn       KHOJKI SIGN ANUSVARA
      70198 <= t && t <= 70199 || // Mn   [2] KHOJKI SIGN NUKTA..KHOJKI SIGN SHADDA
      t == 70206 || // Mn       KHOJKI SIGN SUKUN
      t == 70367 || // Mn       KHUDAWADI SIGN ANUSVARA
      70371 <= t && t <= 70378 || // Mn   [8] KHUDAWADI VOWEL SIGN U..KHUDAWADI SIGN VIRAMA
      70400 <= t && t <= 70401 || // Mn   [2] GRANTHA SIGN COMBINING ANUSVARA ABOVE..GRANTHA SIGN CANDRABINDU
      t == 70460 || // Mn       GRANTHA SIGN NUKTA
      t == 70462 || // Mc       GRANTHA VOWEL SIGN AA
      t == 70464 || // Mn       GRANTHA VOWEL SIGN II
      t == 70487 || // Mc       GRANTHA AU LENGTH MARK
      70502 <= t && t <= 70508 || // Mn   [7] COMBINING GRANTHA DIGIT ZERO..COMBINING GRANTHA DIGIT SIX
      70512 <= t && t <= 70516 || // Mn   [5] COMBINING GRANTHA LETTER A..COMBINING GRANTHA LETTER PA
      70712 <= t && t <= 70719 || // Mn   [8] NEWA VOWEL SIGN U..NEWA VOWEL SIGN AI
      70722 <= t && t <= 70724 || // Mn   [3] NEWA SIGN VIRAMA..NEWA SIGN ANUSVARA
      t == 70726 || // Mn       NEWA SIGN NUKTA
      t == 70832 || // Mc       TIRHUTA VOWEL SIGN AA
      70835 <= t && t <= 70840 || // Mn   [6] TIRHUTA VOWEL SIGN U..TIRHUTA VOWEL SIGN VOCALIC LL
      t == 70842 || // Mn       TIRHUTA VOWEL SIGN SHORT E
      t == 70845 || // Mc       TIRHUTA VOWEL SIGN SHORT O
      70847 <= t && t <= 70848 || // Mn   [2] TIRHUTA SIGN CANDRABINDU..TIRHUTA SIGN ANUSVARA
      70850 <= t && t <= 70851 || // Mn   [2] TIRHUTA SIGN VIRAMA..TIRHUTA SIGN NUKTA
      t == 71087 || // Mc       SIDDHAM VOWEL SIGN AA
      71090 <= t && t <= 71093 || // Mn   [4] SIDDHAM VOWEL SIGN U..SIDDHAM VOWEL SIGN VOCALIC RR
      71100 <= t && t <= 71101 || // Mn   [2] SIDDHAM SIGN CANDRABINDU..SIDDHAM SIGN ANUSVARA
      71103 <= t && t <= 71104 || // Mn   [2] SIDDHAM SIGN VIRAMA..SIDDHAM SIGN NUKTA
      71132 <= t && t <= 71133 || // Mn   [2] SIDDHAM VOWEL SIGN ALTERNATE U..SIDDHAM VOWEL SIGN ALTERNATE UU
      71219 <= t && t <= 71226 || // Mn   [8] MODI VOWEL SIGN U..MODI VOWEL SIGN AI
      t == 71229 || // Mn       MODI SIGN ANUSVARA
      71231 <= t && t <= 71232 || // Mn   [2] MODI SIGN VIRAMA..MODI SIGN ARDHACANDRA
      t == 71339 || // Mn       TAKRI SIGN ANUSVARA
      t == 71341 || // Mn       TAKRI VOWEL SIGN AA
      71344 <= t && t <= 71349 || // Mn   [6] TAKRI VOWEL SIGN U..TAKRI VOWEL SIGN AU
      t == 71351 || // Mn       TAKRI SIGN NUKTA
      71453 <= t && t <= 71455 || // Mn   [3] AHOM CONSONANT SIGN MEDIAL LA..AHOM CONSONANT SIGN MEDIAL LIGATING RA
      71458 <= t && t <= 71461 || // Mn   [4] AHOM VOWEL SIGN I..AHOM VOWEL SIGN UU
      71463 <= t && t <= 71467 || // Mn   [5] AHOM VOWEL SIGN AW..AHOM SIGN KILLER
      72193 <= t && t <= 72198 || // Mn   [6] ZANABAZAR SQUARE VOWEL SIGN I..ZANABAZAR SQUARE VOWEL SIGN O
      72201 <= t && t <= 72202 || // Mn   [2] ZANABAZAR SQUARE VOWEL SIGN REVERSED I..ZANABAZAR SQUARE VOWEL LENGTH MARK
      72243 <= t && t <= 72248 || // Mn   [6] ZANABAZAR SQUARE FINAL CONSONANT MARK..ZANABAZAR SQUARE SIGN ANUSVARA
      72251 <= t && t <= 72254 || // Mn   [4] ZANABAZAR SQUARE CLUSTER-FINAL LETTER YA..ZANABAZAR SQUARE CLUSTER-FINAL LETTER VA
      t == 72263 || // Mn       ZANABAZAR SQUARE SUBJOINER
      72273 <= t && t <= 72278 || // Mn   [6] SOYOMBO VOWEL SIGN I..SOYOMBO VOWEL SIGN OE
      72281 <= t && t <= 72283 || // Mn   [3] SOYOMBO VOWEL SIGN VOCALIC R..SOYOMBO VOWEL LENGTH MARK
      72330 <= t && t <= 72342 || // Mn  [13] SOYOMBO FINAL CONSONANT SIGN G..SOYOMBO SIGN ANUSVARA
      72344 <= t && t <= 72345 || // Mn   [2] SOYOMBO GEMINATION MARK..SOYOMBO SUBJOINER
      72752 <= t && t <= 72758 || // Mn   [7] BHAIKSUKI VOWEL SIGN I..BHAIKSUKI VOWEL SIGN VOCALIC L
      72760 <= t && t <= 72765 || // Mn   [6] BHAIKSUKI VOWEL SIGN E..BHAIKSUKI SIGN ANUSVARA
      t == 72767 || // Mn       BHAIKSUKI SIGN VIRAMA
      72850 <= t && t <= 72871 || // Mn  [22] MARCHEN SUBJOINED LETTER KA..MARCHEN SUBJOINED LETTER ZA
      72874 <= t && t <= 72880 || // Mn   [7] MARCHEN SUBJOINED LETTER RA..MARCHEN VOWEL SIGN AA
      72882 <= t && t <= 72883 || // Mn   [2] MARCHEN VOWEL SIGN U..MARCHEN VOWEL SIGN E
      72885 <= t && t <= 72886 || // Mn   [2] MARCHEN SIGN ANUSVARA..MARCHEN SIGN CANDRABINDU
      73009 <= t && t <= 73014 || // Mn   [6] MASARAM GONDI VOWEL SIGN AA..MASARAM GONDI VOWEL SIGN VOCALIC R
      t == 73018 || // Mn       MASARAM GONDI VOWEL SIGN E
      73020 <= t && t <= 73021 || // Mn   [2] MASARAM GONDI VOWEL SIGN AI..MASARAM GONDI VOWEL SIGN O
      73023 <= t && t <= 73029 || // Mn   [7] MASARAM GONDI VOWEL SIGN AU..MASARAM GONDI VIRAMA
      t == 73031 || // Mn       MASARAM GONDI RA-KARA
      92912 <= t && t <= 92916 || // Mn   [5] BASSA VAH COMBINING HIGH TONE..BASSA VAH COMBINING HIGH-LOW TONE
      92976 <= t && t <= 92982 || // Mn   [7] PAHAWH HMONG MARK CIM TUB..PAHAWH HMONG MARK CIM TAUM
      94095 <= t && t <= 94098 || // Mn   [4] MIAO TONE RIGHT..MIAO TONE BELOW
      113821 <= t && t <= 113822 || // Mn   [2] DUPLOYAN THICK LETTER SELECTOR..DUPLOYAN DOUBLE MARK
      t == 119141 || // Mc       MUSICAL SYMBOL COMBINING STEM
      119143 <= t && t <= 119145 || // Mn   [3] MUSICAL SYMBOL COMBINING TREMOLO-1..MUSICAL SYMBOL COMBINING TREMOLO-3
      119150 <= t && t <= 119154 || // Mc   [5] MUSICAL SYMBOL COMBINING FLAG-1..MUSICAL SYMBOL COMBINING FLAG-5
      119163 <= t && t <= 119170 || // Mn   [8] MUSICAL SYMBOL COMBINING ACCENT..MUSICAL SYMBOL COMBINING LOURE
      119173 <= t && t <= 119179 || // Mn   [7] MUSICAL SYMBOL COMBINING DOIT..MUSICAL SYMBOL COMBINING TRIPLE TONGUE
      119210 <= t && t <= 119213 || // Mn   [4] MUSICAL SYMBOL COMBINING DOWN BOW..MUSICAL SYMBOL COMBINING SNAP PIZZICATO
      119362 <= t && t <= 119364 || // Mn   [3] COMBINING GREEK MUSICAL TRISEME..COMBINING GREEK MUSICAL PENTASEME
      121344 <= t && t <= 121398 || // Mn  [55] SIGNWRITING HEAD RIM..SIGNWRITING AIR SUCKING IN
      121403 <= t && t <= 121452 || // Mn  [50] SIGNWRITING MOUTH CLOSED NEUTRAL..SIGNWRITING EXCITEMENT
      t == 121461 || // Mn       SIGNWRITING UPPER BODY TILTING FROM HIP JOINTS
      t == 121476 || // Mn       SIGNWRITING LOCATION HEAD NECK
      121499 <= t && t <= 121503 || // Mn   [5] SIGNWRITING FILL MODIFIER-2..SIGNWRITING FILL MODIFIER-6
      121505 <= t && t <= 121519 || // Mn  [15] SIGNWRITING ROTATION MODIFIER-2..SIGNWRITING ROTATION MODIFIER-16
      122880 <= t && t <= 122886 || // Mn   [7] COMBINING GLAGOLITIC LETTER AZU..COMBINING GLAGOLITIC LETTER ZHIVETE
      122888 <= t && t <= 122904 || // Mn  [17] COMBINING GLAGOLITIC LETTER ZEMLJA..COMBINING GLAGOLITIC LETTER HERU
      122907 <= t && t <= 122913 || // Mn   [7] COMBINING GLAGOLITIC LETTER SHTA..COMBINING GLAGOLITIC LETTER YATI
      122915 <= t && t <= 122916 || // Mn   [2] COMBINING GLAGOLITIC LETTER YU..COMBINING GLAGOLITIC LETTER SMALL YUS
      122918 <= t && t <= 122922 || // Mn   [5] COMBINING GLAGOLITIC LETTER YO..COMBINING GLAGOLITIC LETTER FITA
      125136 <= t && t <= 125142 || // Mn   [7] MENDE KIKAKUI COMBINING NUMBER TEENS..MENDE KIKAKUI COMBINING NUMBER MILLIONS
      125252 <= t && t <= 125258 || // Mn   [7] ADLAM ALIF LENGTHENER..ADLAM NUKTA
      917536 <= t && t <= 917631 || // Cf  [96] TAG SPACE..CANCEL TAG
      917760 <= t && t <= 917999 ? a : 127462 <= t && t <= 127487 ? l : t == 2307 || // Mc       DEVANAGARI SIGN VISARGA
      t == 2363 || // Mc       DEVANAGARI VOWEL SIGN OOE
      2366 <= t && t <= 2368 || // Mc   [3] DEVANAGARI VOWEL SIGN AA..DEVANAGARI VOWEL SIGN II
      2377 <= t && t <= 2380 || // Mc   [4] DEVANAGARI VOWEL SIGN CANDRA O..DEVANAGARI VOWEL SIGN AU
      2382 <= t && t <= 2383 || // Mc   [2] DEVANAGARI VOWEL SIGN PRISHTHAMATRA E..DEVANAGARI VOWEL SIGN AW
      2434 <= t && t <= 2435 || // Mc   [2] BENGALI SIGN ANUSVARA..BENGALI SIGN VISARGA
      2495 <= t && t <= 2496 || // Mc   [2] BENGALI VOWEL SIGN I..BENGALI VOWEL SIGN II
      2503 <= t && t <= 2504 || // Mc   [2] BENGALI VOWEL SIGN E..BENGALI VOWEL SIGN AI
      2507 <= t && t <= 2508 || // Mc   [2] BENGALI VOWEL SIGN O..BENGALI VOWEL SIGN AU
      t == 2563 || // Mc       GURMUKHI SIGN VISARGA
      2622 <= t && t <= 2624 || // Mc   [3] GURMUKHI VOWEL SIGN AA..GURMUKHI VOWEL SIGN II
      t == 2691 || // Mc       GUJARATI SIGN VISARGA
      2750 <= t && t <= 2752 || // Mc   [3] GUJARATI VOWEL SIGN AA..GUJARATI VOWEL SIGN II
      t == 2761 || // Mc       GUJARATI VOWEL SIGN CANDRA O
      2763 <= t && t <= 2764 || // Mc   [2] GUJARATI VOWEL SIGN O..GUJARATI VOWEL SIGN AU
      2818 <= t && t <= 2819 || // Mc   [2] ORIYA SIGN ANUSVARA..ORIYA SIGN VISARGA
      t == 2880 || // Mc       ORIYA VOWEL SIGN II
      2887 <= t && t <= 2888 || // Mc   [2] ORIYA VOWEL SIGN E..ORIYA VOWEL SIGN AI
      2891 <= t && t <= 2892 || // Mc   [2] ORIYA VOWEL SIGN O..ORIYA VOWEL SIGN AU
      t == 3007 || // Mc       TAMIL VOWEL SIGN I
      3009 <= t && t <= 3010 || // Mc   [2] TAMIL VOWEL SIGN U..TAMIL VOWEL SIGN UU
      3014 <= t && t <= 3016 || // Mc   [3] TAMIL VOWEL SIGN E..TAMIL VOWEL SIGN AI
      3018 <= t && t <= 3020 || // Mc   [3] TAMIL VOWEL SIGN O..TAMIL VOWEL SIGN AU
      3073 <= t && t <= 3075 || // Mc   [3] TELUGU SIGN CANDRABINDU..TELUGU SIGN VISARGA
      3137 <= t && t <= 3140 || // Mc   [4] TELUGU VOWEL SIGN U..TELUGU VOWEL SIGN VOCALIC RR
      3202 <= t && t <= 3203 || // Mc   [2] KANNADA SIGN ANUSVARA..KANNADA SIGN VISARGA
      t == 3262 || // Mc       KANNADA VOWEL SIGN AA
      3264 <= t && t <= 3265 || // Mc   [2] KANNADA VOWEL SIGN II..KANNADA VOWEL SIGN U
      3267 <= t && t <= 3268 || // Mc   [2] KANNADA VOWEL SIGN VOCALIC R..KANNADA VOWEL SIGN VOCALIC RR
      3271 <= t && t <= 3272 || // Mc   [2] KANNADA VOWEL SIGN EE..KANNADA VOWEL SIGN AI
      3274 <= t && t <= 3275 || // Mc   [2] KANNADA VOWEL SIGN O..KANNADA VOWEL SIGN OO
      3330 <= t && t <= 3331 || // Mc   [2] MALAYALAM SIGN ANUSVARA..MALAYALAM SIGN VISARGA
      3391 <= t && t <= 3392 || // Mc   [2] MALAYALAM VOWEL SIGN I..MALAYALAM VOWEL SIGN II
      3398 <= t && t <= 3400 || // Mc   [3] MALAYALAM VOWEL SIGN E..MALAYALAM VOWEL SIGN AI
      3402 <= t && t <= 3404 || // Mc   [3] MALAYALAM VOWEL SIGN O..MALAYALAM VOWEL SIGN AU
      3458 <= t && t <= 3459 || // Mc   [2] SINHALA SIGN ANUSVARAYA..SINHALA SIGN VISARGAYA
      3536 <= t && t <= 3537 || // Mc   [2] SINHALA VOWEL SIGN KETTI AEDA-PILLA..SINHALA VOWEL SIGN DIGA AEDA-PILLA
      3544 <= t && t <= 3550 || // Mc   [7] SINHALA VOWEL SIGN GAETTA-PILLA..SINHALA VOWEL SIGN KOMBUVA HAA GAYANUKITTA
      3570 <= t && t <= 3571 || // Mc   [2] SINHALA VOWEL SIGN DIGA GAETTA-PILLA..SINHALA VOWEL SIGN DIGA GAYANUKITTA
      t == 3635 || // Lo       THAI CHARACTER SARA AM
      t == 3763 || // Lo       LAO VOWEL SIGN AM
      3902 <= t && t <= 3903 || // Mc   [2] TIBETAN SIGN YAR TSHES..TIBETAN SIGN MAR TSHES
      t == 3967 || // Mc       TIBETAN SIGN RNAM BCAD
      t == 4145 || // Mc       MYANMAR VOWEL SIGN E
      4155 <= t && t <= 4156 || // Mc   [2] MYANMAR CONSONANT SIGN MEDIAL YA..MYANMAR CONSONANT SIGN MEDIAL RA
      4182 <= t && t <= 4183 || // Mc   [2] MYANMAR VOWEL SIGN VOCALIC R..MYANMAR VOWEL SIGN VOCALIC RR
      t == 4228 || // Mc       MYANMAR VOWEL SIGN SHAN E
      t == 6070 || // Mc       KHMER VOWEL SIGN AA
      6078 <= t && t <= 6085 || // Mc   [8] KHMER VOWEL SIGN OE..KHMER VOWEL SIGN AU
      6087 <= t && t <= 6088 || // Mc   [2] KHMER SIGN REAHMUK..KHMER SIGN YUUKALEAPINTU
      6435 <= t && t <= 6438 || // Mc   [4] LIMBU VOWEL SIGN EE..LIMBU VOWEL SIGN AU
      6441 <= t && t <= 6443 || // Mc   [3] LIMBU SUBJOINED LETTER YA..LIMBU SUBJOINED LETTER WA
      6448 <= t && t <= 6449 || // Mc   [2] LIMBU SMALL LETTER KA..LIMBU SMALL LETTER NGA
      6451 <= t && t <= 6456 || // Mc   [6] LIMBU SMALL LETTER TA..LIMBU SMALL LETTER LA
      6681 <= t && t <= 6682 || // Mc   [2] BUGINESE VOWEL SIGN E..BUGINESE VOWEL SIGN O
      t == 6741 || // Mc       TAI THAM CONSONANT SIGN MEDIAL RA
      t == 6743 || // Mc       TAI THAM CONSONANT SIGN LA TANG LAI
      6765 <= t && t <= 6770 || // Mc   [6] TAI THAM VOWEL SIGN OY..TAI THAM VOWEL SIGN THAM AI
      t == 6916 || // Mc       BALINESE SIGN BISAH
      t == 6965 || // Mc       BALINESE VOWEL SIGN TEDUNG
      t == 6971 || // Mc       BALINESE VOWEL SIGN RA REPA TEDUNG
      6973 <= t && t <= 6977 || // Mc   [5] BALINESE VOWEL SIGN LA LENGA TEDUNG..BALINESE VOWEL SIGN TALING REPA TEDUNG
      6979 <= t && t <= 6980 || // Mc   [2] BALINESE VOWEL SIGN PEPET TEDUNG..BALINESE ADEG ADEG
      t == 7042 || // Mc       SUNDANESE SIGN PANGWISAD
      t == 7073 || // Mc       SUNDANESE CONSONANT SIGN PAMINGKAL
      7078 <= t && t <= 7079 || // Mc   [2] SUNDANESE VOWEL SIGN PANAELAENG..SUNDANESE VOWEL SIGN PANOLONG
      t == 7082 || // Mc       SUNDANESE SIGN PAMAAEH
      t == 7143 || // Mc       BATAK VOWEL SIGN E
      7146 <= t && t <= 7148 || // Mc   [3] BATAK VOWEL SIGN I..BATAK VOWEL SIGN O
      t == 7150 || // Mc       BATAK VOWEL SIGN U
      7154 <= t && t <= 7155 || // Mc   [2] BATAK PANGOLAT..BATAK PANONGONAN
      7204 <= t && t <= 7211 || // Mc   [8] LEPCHA SUBJOINED LETTER YA..LEPCHA VOWEL SIGN UU
      7220 <= t && t <= 7221 || // Mc   [2] LEPCHA CONSONANT SIGN NYIN-DO..LEPCHA CONSONANT SIGN KANG
      t == 7393 || // Mc       VEDIC TONE ATHARVAVEDIC INDEPENDENT SVARITA
      7410 <= t && t <= 7411 || // Mc   [2] VEDIC SIGN ARDHAVISARGA..VEDIC SIGN ROTATED ARDHAVISARGA
      t == 7415 || // Mc       VEDIC SIGN ATIKRAMA
      43043 <= t && t <= 43044 || // Mc   [2] SYLOTI NAGRI VOWEL SIGN A..SYLOTI NAGRI VOWEL SIGN I
      t == 43047 || // Mc       SYLOTI NAGRI VOWEL SIGN OO
      43136 <= t && t <= 43137 || // Mc   [2] SAURASHTRA SIGN ANUSVARA..SAURASHTRA SIGN VISARGA
      43188 <= t && t <= 43203 || // Mc  [16] SAURASHTRA CONSONANT SIGN HAARU..SAURASHTRA VOWEL SIGN AU
      43346 <= t && t <= 43347 || // Mc   [2] REJANG CONSONANT SIGN H..REJANG VIRAMA
      t == 43395 || // Mc       JAVANESE SIGN WIGNYAN
      43444 <= t && t <= 43445 || // Mc   [2] JAVANESE VOWEL SIGN TARUNG..JAVANESE VOWEL SIGN TOLONG
      43450 <= t && t <= 43451 || // Mc   [2] JAVANESE VOWEL SIGN TALING..JAVANESE VOWEL SIGN DIRGA MURE
      43453 <= t && t <= 43456 || // Mc   [4] JAVANESE CONSONANT SIGN KERET..JAVANESE PANGKON
      43567 <= t && t <= 43568 || // Mc   [2] CHAM VOWEL SIGN O..CHAM VOWEL SIGN AI
      43571 <= t && t <= 43572 || // Mc   [2] CHAM CONSONANT SIGN YA..CHAM CONSONANT SIGN RA
      t == 43597 || // Mc       CHAM CONSONANT SIGN FINAL H
      t == 43755 || // Mc       MEETEI MAYEK VOWEL SIGN II
      43758 <= t && t <= 43759 || // Mc   [2] MEETEI MAYEK VOWEL SIGN AU..MEETEI MAYEK VOWEL SIGN AAU
      t == 43765 || // Mc       MEETEI MAYEK VOWEL SIGN VISARGA
      44003 <= t && t <= 44004 || // Mc   [2] MEETEI MAYEK VOWEL SIGN ONAP..MEETEI MAYEK VOWEL SIGN INAP
      44006 <= t && t <= 44007 || // Mc   [2] MEETEI MAYEK VOWEL SIGN YENAP..MEETEI MAYEK VOWEL SIGN SOUNAP
      44009 <= t && t <= 44010 || // Mc   [2] MEETEI MAYEK VOWEL SIGN CHEINAP..MEETEI MAYEK VOWEL SIGN NUNG
      t == 44012 || // Mc       MEETEI MAYEK LUM IYEK
      t == 69632 || // Mc       BRAHMI SIGN CANDRABINDU
      t == 69634 || // Mc       BRAHMI SIGN VISARGA
      t == 69762 || // Mc       KAITHI SIGN VISARGA
      69808 <= t && t <= 69810 || // Mc   [3] KAITHI VOWEL SIGN AA..KAITHI VOWEL SIGN II
      69815 <= t && t <= 69816 || // Mc   [2] KAITHI VOWEL SIGN O..KAITHI VOWEL SIGN AU
      t == 69932 || // Mc       CHAKMA VOWEL SIGN E
      t == 70018 || // Mc       SHARADA SIGN VISARGA
      70067 <= t && t <= 70069 || // Mc   [3] SHARADA VOWEL SIGN AA..SHARADA VOWEL SIGN II
      70079 <= t && t <= 70080 || // Mc   [2] SHARADA VOWEL SIGN AU..SHARADA SIGN VIRAMA
      70188 <= t && t <= 70190 || // Mc   [3] KHOJKI VOWEL SIGN AA..KHOJKI VOWEL SIGN II
      70194 <= t && t <= 70195 || // Mc   [2] KHOJKI VOWEL SIGN O..KHOJKI VOWEL SIGN AU
      t == 70197 || // Mc       KHOJKI SIGN VIRAMA
      70368 <= t && t <= 70370 || // Mc   [3] KHUDAWADI VOWEL SIGN AA..KHUDAWADI VOWEL SIGN II
      70402 <= t && t <= 70403 || // Mc   [2] GRANTHA SIGN ANUSVARA..GRANTHA SIGN VISARGA
      t == 70463 || // Mc       GRANTHA VOWEL SIGN I
      70465 <= t && t <= 70468 || // Mc   [4] GRANTHA VOWEL SIGN U..GRANTHA VOWEL SIGN VOCALIC RR
      70471 <= t && t <= 70472 || // Mc   [2] GRANTHA VOWEL SIGN EE..GRANTHA VOWEL SIGN AI
      70475 <= t && t <= 70477 || // Mc   [3] GRANTHA VOWEL SIGN OO..GRANTHA SIGN VIRAMA
      70498 <= t && t <= 70499 || // Mc   [2] GRANTHA VOWEL SIGN VOCALIC L..GRANTHA VOWEL SIGN VOCALIC LL
      70709 <= t && t <= 70711 || // Mc   [3] NEWA VOWEL SIGN AA..NEWA VOWEL SIGN II
      70720 <= t && t <= 70721 || // Mc   [2] NEWA VOWEL SIGN O..NEWA VOWEL SIGN AU
      t == 70725 || // Mc       NEWA SIGN VISARGA
      70833 <= t && t <= 70834 || // Mc   [2] TIRHUTA VOWEL SIGN I..TIRHUTA VOWEL SIGN II
      t == 70841 || // Mc       TIRHUTA VOWEL SIGN E
      70843 <= t && t <= 70844 || // Mc   [2] TIRHUTA VOWEL SIGN AI..TIRHUTA VOWEL SIGN O
      t == 70846 || // Mc       TIRHUTA VOWEL SIGN AU
      t == 70849 || // Mc       TIRHUTA SIGN VISARGA
      71088 <= t && t <= 71089 || // Mc   [2] SIDDHAM VOWEL SIGN I..SIDDHAM VOWEL SIGN II
      71096 <= t && t <= 71099 || // Mc   [4] SIDDHAM VOWEL SIGN E..SIDDHAM VOWEL SIGN AU
      t == 71102 || // Mc       SIDDHAM SIGN VISARGA
      71216 <= t && t <= 71218 || // Mc   [3] MODI VOWEL SIGN AA..MODI VOWEL SIGN II
      71227 <= t && t <= 71228 || // Mc   [2] MODI VOWEL SIGN O..MODI VOWEL SIGN AU
      t == 71230 || // Mc       MODI SIGN VISARGA
      t == 71340 || // Mc       TAKRI SIGN VISARGA
      71342 <= t && t <= 71343 || // Mc   [2] TAKRI VOWEL SIGN I..TAKRI VOWEL SIGN II
      t == 71350 || // Mc       TAKRI SIGN VIRAMA
      71456 <= t && t <= 71457 || // Mc   [2] AHOM VOWEL SIGN A..AHOM VOWEL SIGN AA
      t == 71462 || // Mc       AHOM VOWEL SIGN E
      72199 <= t && t <= 72200 || // Mc   [2] ZANABAZAR SQUARE VOWEL SIGN AI..ZANABAZAR SQUARE VOWEL SIGN AU
      t == 72249 || // Mc       ZANABAZAR SQUARE SIGN VISARGA
      72279 <= t && t <= 72280 || // Mc   [2] SOYOMBO VOWEL SIGN AI..SOYOMBO VOWEL SIGN AU
      t == 72343 || // Mc       SOYOMBO SIGN VISARGA
      t == 72751 || // Mc       BHAIKSUKI VOWEL SIGN AA
      t == 72766 || // Mc       BHAIKSUKI SIGN VISARGA
      t == 72873 || // Mc       MARCHEN SUBJOINED LETTER YA
      t == 72881 || // Mc       MARCHEN VOWEL SIGN I
      t == 72884 || // Mc       MARCHEN VOWEL SIGN O
      94033 <= t && t <= 94078 || // Mc  [46] MIAO SIGN ASPIRATION..MIAO VOWEL SIGN NG
      t == 119142 || // Mc       MUSICAL SYMBOL COMBINING SPRECHGESANG STEM
      t == 119149 ? s : 4352 <= t && t <= 4447 || // Lo  [96] HANGUL CHOSEONG KIYEOK..HANGUL CHOSEONG FILLER
      43360 <= t && t <= 43388 ? u : 4448 <= t && t <= 4519 || // Lo  [72] HANGUL JUNGSEONG FILLER..HANGUL JUNGSEONG O-YAE
      55216 <= t && t <= 55238 ? d : 4520 <= t && t <= 4607 || // Lo  [88] HANGUL JONGSEONG KIYEOK..HANGUL JONGSEONG SSANGNIEUN
      55243 <= t && t <= 55291 ? c : t == 44032 || // Lo       HANGUL SYLLABLE GA
      t == 44060 || // Lo       HANGUL SYLLABLE GAE
      t == 44088 || // Lo       HANGUL SYLLABLE GYA
      t == 44116 || // Lo       HANGUL SYLLABLE GYAE
      t == 44144 || // Lo       HANGUL SYLLABLE GEO
      t == 44172 || // Lo       HANGUL SYLLABLE GE
      t == 44200 || // Lo       HANGUL SYLLABLE GYEO
      t == 44228 || // Lo       HANGUL SYLLABLE GYE
      t == 44256 || // Lo       HANGUL SYLLABLE GO
      t == 44284 || // Lo       HANGUL SYLLABLE GWA
      t == 44312 || // Lo       HANGUL SYLLABLE GWAE
      t == 44340 || // Lo       HANGUL SYLLABLE GOE
      t == 44368 || // Lo       HANGUL SYLLABLE GYO
      t == 44396 || // Lo       HANGUL SYLLABLE GU
      t == 44424 || // Lo       HANGUL SYLLABLE GWEO
      t == 44452 || // Lo       HANGUL SYLLABLE GWE
      t == 44480 || // Lo       HANGUL SYLLABLE GWI
      t == 44508 || // Lo       HANGUL SYLLABLE GYU
      t == 44536 || // Lo       HANGUL SYLLABLE GEU
      t == 44564 || // Lo       HANGUL SYLLABLE GYI
      t == 44592 || // Lo       HANGUL SYLLABLE GI
      t == 44620 || // Lo       HANGUL SYLLABLE GGA
      t == 44648 || // Lo       HANGUL SYLLABLE GGAE
      t == 44676 || // Lo       HANGUL SYLLABLE GGYA
      t == 44704 || // Lo       HANGUL SYLLABLE GGYAE
      t == 44732 || // Lo       HANGUL SYLLABLE GGEO
      t == 44760 || // Lo       HANGUL SYLLABLE GGE
      t == 44788 || // Lo       HANGUL SYLLABLE GGYEO
      t == 44816 || // Lo       HANGUL SYLLABLE GGYE
      t == 44844 || // Lo       HANGUL SYLLABLE GGO
      t == 44872 || // Lo       HANGUL SYLLABLE GGWA
      t == 44900 || // Lo       HANGUL SYLLABLE GGWAE
      t == 44928 || // Lo       HANGUL SYLLABLE GGOE
      t == 44956 || // Lo       HANGUL SYLLABLE GGYO
      t == 44984 || // Lo       HANGUL SYLLABLE GGU
      t == 45012 || // Lo       HANGUL SYLLABLE GGWEO
      t == 45040 || // Lo       HANGUL SYLLABLE GGWE
      t == 45068 || // Lo       HANGUL SYLLABLE GGWI
      t == 45096 || // Lo       HANGUL SYLLABLE GGYU
      t == 45124 || // Lo       HANGUL SYLLABLE GGEU
      t == 45152 || // Lo       HANGUL SYLLABLE GGYI
      t == 45180 || // Lo       HANGUL SYLLABLE GGI
      t == 45208 || // Lo       HANGUL SYLLABLE NA
      t == 45236 || // Lo       HANGUL SYLLABLE NAE
      t == 45264 || // Lo       HANGUL SYLLABLE NYA
      t == 45292 || // Lo       HANGUL SYLLABLE NYAE
      t == 45320 || // Lo       HANGUL SYLLABLE NEO
      t == 45348 || // Lo       HANGUL SYLLABLE NE
      t == 45376 || // Lo       HANGUL SYLLABLE NYEO
      t == 45404 || // Lo       HANGUL SYLLABLE NYE
      t == 45432 || // Lo       HANGUL SYLLABLE NO
      t == 45460 || // Lo       HANGUL SYLLABLE NWA
      t == 45488 || // Lo       HANGUL SYLLABLE NWAE
      t == 45516 || // Lo       HANGUL SYLLABLE NOE
      t == 45544 || // Lo       HANGUL SYLLABLE NYO
      t == 45572 || // Lo       HANGUL SYLLABLE NU
      t == 45600 || // Lo       HANGUL SYLLABLE NWEO
      t == 45628 || // Lo       HANGUL SYLLABLE NWE
      t == 45656 || // Lo       HANGUL SYLLABLE NWI
      t == 45684 || // Lo       HANGUL SYLLABLE NYU
      t == 45712 || // Lo       HANGUL SYLLABLE NEU
      t == 45740 || // Lo       HANGUL SYLLABLE NYI
      t == 45768 || // Lo       HANGUL SYLLABLE NI
      t == 45796 || // Lo       HANGUL SYLLABLE DA
      t == 45824 || // Lo       HANGUL SYLLABLE DAE
      t == 45852 || // Lo       HANGUL SYLLABLE DYA
      t == 45880 || // Lo       HANGUL SYLLABLE DYAE
      t == 45908 || // Lo       HANGUL SYLLABLE DEO
      t == 45936 || // Lo       HANGUL SYLLABLE DE
      t == 45964 || // Lo       HANGUL SYLLABLE DYEO
      t == 45992 || // Lo       HANGUL SYLLABLE DYE
      t == 46020 || // Lo       HANGUL SYLLABLE DO
      t == 46048 || // Lo       HANGUL SYLLABLE DWA
      t == 46076 || // Lo       HANGUL SYLLABLE DWAE
      t == 46104 || // Lo       HANGUL SYLLABLE DOE
      t == 46132 || // Lo       HANGUL SYLLABLE DYO
      t == 46160 || // Lo       HANGUL SYLLABLE DU
      t == 46188 || // Lo       HANGUL SYLLABLE DWEO
      t == 46216 || // Lo       HANGUL SYLLABLE DWE
      t == 46244 || // Lo       HANGUL SYLLABLE DWI
      t == 46272 || // Lo       HANGUL SYLLABLE DYU
      t == 46300 || // Lo       HANGUL SYLLABLE DEU
      t == 46328 || // Lo       HANGUL SYLLABLE DYI
      t == 46356 || // Lo       HANGUL SYLLABLE DI
      t == 46384 || // Lo       HANGUL SYLLABLE DDA
      t == 46412 || // Lo       HANGUL SYLLABLE DDAE
      t == 46440 || // Lo       HANGUL SYLLABLE DDYA
      t == 46468 || // Lo       HANGUL SYLLABLE DDYAE
      t == 46496 || // Lo       HANGUL SYLLABLE DDEO
      t == 46524 || // Lo       HANGUL SYLLABLE DDE
      t == 46552 || // Lo       HANGUL SYLLABLE DDYEO
      t == 46580 || // Lo       HANGUL SYLLABLE DDYE
      t == 46608 || // Lo       HANGUL SYLLABLE DDO
      t == 46636 || // Lo       HANGUL SYLLABLE DDWA
      t == 46664 || // Lo       HANGUL SYLLABLE DDWAE
      t == 46692 || // Lo       HANGUL SYLLABLE DDOE
      t == 46720 || // Lo       HANGUL SYLLABLE DDYO
      t == 46748 || // Lo       HANGUL SYLLABLE DDU
      t == 46776 || // Lo       HANGUL SYLLABLE DDWEO
      t == 46804 || // Lo       HANGUL SYLLABLE DDWE
      t == 46832 || // Lo       HANGUL SYLLABLE DDWI
      t == 46860 || // Lo       HANGUL SYLLABLE DDYU
      t == 46888 || // Lo       HANGUL SYLLABLE DDEU
      t == 46916 || // Lo       HANGUL SYLLABLE DDYI
      t == 46944 || // Lo       HANGUL SYLLABLE DDI
      t == 46972 || // Lo       HANGUL SYLLABLE RA
      t == 47e3 || // Lo       HANGUL SYLLABLE RAE
      t == 47028 || // Lo       HANGUL SYLLABLE RYA
      t == 47056 || // Lo       HANGUL SYLLABLE RYAE
      t == 47084 || // Lo       HANGUL SYLLABLE REO
      t == 47112 || // Lo       HANGUL SYLLABLE RE
      t == 47140 || // Lo       HANGUL SYLLABLE RYEO
      t == 47168 || // Lo       HANGUL SYLLABLE RYE
      t == 47196 || // Lo       HANGUL SYLLABLE RO
      t == 47224 || // Lo       HANGUL SYLLABLE RWA
      t == 47252 || // Lo       HANGUL SYLLABLE RWAE
      t == 47280 || // Lo       HANGUL SYLLABLE ROE
      t == 47308 || // Lo       HANGUL SYLLABLE RYO
      t == 47336 || // Lo       HANGUL SYLLABLE RU
      t == 47364 || // Lo       HANGUL SYLLABLE RWEO
      t == 47392 || // Lo       HANGUL SYLLABLE RWE
      t == 47420 || // Lo       HANGUL SYLLABLE RWI
      t == 47448 || // Lo       HANGUL SYLLABLE RYU
      t == 47476 || // Lo       HANGUL SYLLABLE REU
      t == 47504 || // Lo       HANGUL SYLLABLE RYI
      t == 47532 || // Lo       HANGUL SYLLABLE RI
      t == 47560 || // Lo       HANGUL SYLLABLE MA
      t == 47588 || // Lo       HANGUL SYLLABLE MAE
      t == 47616 || // Lo       HANGUL SYLLABLE MYA
      t == 47644 || // Lo       HANGUL SYLLABLE MYAE
      t == 47672 || // Lo       HANGUL SYLLABLE MEO
      t == 47700 || // Lo       HANGUL SYLLABLE ME
      t == 47728 || // Lo       HANGUL SYLLABLE MYEO
      t == 47756 || // Lo       HANGUL SYLLABLE MYE
      t == 47784 || // Lo       HANGUL SYLLABLE MO
      t == 47812 || // Lo       HANGUL SYLLABLE MWA
      t == 47840 || // Lo       HANGUL SYLLABLE MWAE
      t == 47868 || // Lo       HANGUL SYLLABLE MOE
      t == 47896 || // Lo       HANGUL SYLLABLE MYO
      t == 47924 || // Lo       HANGUL SYLLABLE MU
      t == 47952 || // Lo       HANGUL SYLLABLE MWEO
      t == 47980 || // Lo       HANGUL SYLLABLE MWE
      t == 48008 || // Lo       HANGUL SYLLABLE MWI
      t == 48036 || // Lo       HANGUL SYLLABLE MYU
      t == 48064 || // Lo       HANGUL SYLLABLE MEU
      t == 48092 || // Lo       HANGUL SYLLABLE MYI
      t == 48120 || // Lo       HANGUL SYLLABLE MI
      t == 48148 || // Lo       HANGUL SYLLABLE BA
      t == 48176 || // Lo       HANGUL SYLLABLE BAE
      t == 48204 || // Lo       HANGUL SYLLABLE BYA
      t == 48232 || // Lo       HANGUL SYLLABLE BYAE
      t == 48260 || // Lo       HANGUL SYLLABLE BEO
      t == 48288 || // Lo       HANGUL SYLLABLE BE
      t == 48316 || // Lo       HANGUL SYLLABLE BYEO
      t == 48344 || // Lo       HANGUL SYLLABLE BYE
      t == 48372 || // Lo       HANGUL SYLLABLE BO
      t == 48400 || // Lo       HANGUL SYLLABLE BWA
      t == 48428 || // Lo       HANGUL SYLLABLE BWAE
      t == 48456 || // Lo       HANGUL SYLLABLE BOE
      t == 48484 || // Lo       HANGUL SYLLABLE BYO
      t == 48512 || // Lo       HANGUL SYLLABLE BU
      t == 48540 || // Lo       HANGUL SYLLABLE BWEO
      t == 48568 || // Lo       HANGUL SYLLABLE BWE
      t == 48596 || // Lo       HANGUL SYLLABLE BWI
      t == 48624 || // Lo       HANGUL SYLLABLE BYU
      t == 48652 || // Lo       HANGUL SYLLABLE BEU
      t == 48680 || // Lo       HANGUL SYLLABLE BYI
      t == 48708 || // Lo       HANGUL SYLLABLE BI
      t == 48736 || // Lo       HANGUL SYLLABLE BBA
      t == 48764 || // Lo       HANGUL SYLLABLE BBAE
      t == 48792 || // Lo       HANGUL SYLLABLE BBYA
      t == 48820 || // Lo       HANGUL SYLLABLE BBYAE
      t == 48848 || // Lo       HANGUL SYLLABLE BBEO
      t == 48876 || // Lo       HANGUL SYLLABLE BBE
      t == 48904 || // Lo       HANGUL SYLLABLE BBYEO
      t == 48932 || // Lo       HANGUL SYLLABLE BBYE
      t == 48960 || // Lo       HANGUL SYLLABLE BBO
      t == 48988 || // Lo       HANGUL SYLLABLE BBWA
      t == 49016 || // Lo       HANGUL SYLLABLE BBWAE
      t == 49044 || // Lo       HANGUL SYLLABLE BBOE
      t == 49072 || // Lo       HANGUL SYLLABLE BBYO
      t == 49100 || // Lo       HANGUL SYLLABLE BBU
      t == 49128 || // Lo       HANGUL SYLLABLE BBWEO
      t == 49156 || // Lo       HANGUL SYLLABLE BBWE
      t == 49184 || // Lo       HANGUL SYLLABLE BBWI
      t == 49212 || // Lo       HANGUL SYLLABLE BBYU
      t == 49240 || // Lo       HANGUL SYLLABLE BBEU
      t == 49268 || // Lo       HANGUL SYLLABLE BBYI
      t == 49296 || // Lo       HANGUL SYLLABLE BBI
      t == 49324 || // Lo       HANGUL SYLLABLE SA
      t == 49352 || // Lo       HANGUL SYLLABLE SAE
      t == 49380 || // Lo       HANGUL SYLLABLE SYA
      t == 49408 || // Lo       HANGUL SYLLABLE SYAE
      t == 49436 || // Lo       HANGUL SYLLABLE SEO
      t == 49464 || // Lo       HANGUL SYLLABLE SE
      t == 49492 || // Lo       HANGUL SYLLABLE SYEO
      t == 49520 || // Lo       HANGUL SYLLABLE SYE
      t == 49548 || // Lo       HANGUL SYLLABLE SO
      t == 49576 || // Lo       HANGUL SYLLABLE SWA
      t == 49604 || // Lo       HANGUL SYLLABLE SWAE
      t == 49632 || // Lo       HANGUL SYLLABLE SOE
      t == 49660 || // Lo       HANGUL SYLLABLE SYO
      t == 49688 || // Lo       HANGUL SYLLABLE SU
      t == 49716 || // Lo       HANGUL SYLLABLE SWEO
      t == 49744 || // Lo       HANGUL SYLLABLE SWE
      t == 49772 || // Lo       HANGUL SYLLABLE SWI
      t == 49800 || // Lo       HANGUL SYLLABLE SYU
      t == 49828 || // Lo       HANGUL SYLLABLE SEU
      t == 49856 || // Lo       HANGUL SYLLABLE SYI
      t == 49884 || // Lo       HANGUL SYLLABLE SI
      t == 49912 || // Lo       HANGUL SYLLABLE SSA
      t == 49940 || // Lo       HANGUL SYLLABLE SSAE
      t == 49968 || // Lo       HANGUL SYLLABLE SSYA
      t == 49996 || // Lo       HANGUL SYLLABLE SSYAE
      t == 50024 || // Lo       HANGUL SYLLABLE SSEO
      t == 50052 || // Lo       HANGUL SYLLABLE SSE
      t == 50080 || // Lo       HANGUL SYLLABLE SSYEO
      t == 50108 || // Lo       HANGUL SYLLABLE SSYE
      t == 50136 || // Lo       HANGUL SYLLABLE SSO
      t == 50164 || // Lo       HANGUL SYLLABLE SSWA
      t == 50192 || // Lo       HANGUL SYLLABLE SSWAE
      t == 50220 || // Lo       HANGUL SYLLABLE SSOE
      t == 50248 || // Lo       HANGUL SYLLABLE SSYO
      t == 50276 || // Lo       HANGUL SYLLABLE SSU
      t == 50304 || // Lo       HANGUL SYLLABLE SSWEO
      t == 50332 || // Lo       HANGUL SYLLABLE SSWE
      t == 50360 || // Lo       HANGUL SYLLABLE SSWI
      t == 50388 || // Lo       HANGUL SYLLABLE SSYU
      t == 50416 || // Lo       HANGUL SYLLABLE SSEU
      t == 50444 || // Lo       HANGUL SYLLABLE SSYI
      t == 50472 || // Lo       HANGUL SYLLABLE SSI
      t == 50500 || // Lo       HANGUL SYLLABLE A
      t == 50528 || // Lo       HANGUL SYLLABLE AE
      t == 50556 || // Lo       HANGUL SYLLABLE YA
      t == 50584 || // Lo       HANGUL SYLLABLE YAE
      t == 50612 || // Lo       HANGUL SYLLABLE EO
      t == 50640 || // Lo       HANGUL SYLLABLE E
      t == 50668 || // Lo       HANGUL SYLLABLE YEO
      t == 50696 || // Lo       HANGUL SYLLABLE YE
      t == 50724 || // Lo       HANGUL SYLLABLE O
      t == 50752 || // Lo       HANGUL SYLLABLE WA
      t == 50780 || // Lo       HANGUL SYLLABLE WAE
      t == 50808 || // Lo       HANGUL SYLLABLE OE
      t == 50836 || // Lo       HANGUL SYLLABLE YO
      t == 50864 || // Lo       HANGUL SYLLABLE U
      t == 50892 || // Lo       HANGUL SYLLABLE WEO
      t == 50920 || // Lo       HANGUL SYLLABLE WE
      t == 50948 || // Lo       HANGUL SYLLABLE WI
      t == 50976 || // Lo       HANGUL SYLLABLE YU
      t == 51004 || // Lo       HANGUL SYLLABLE EU
      t == 51032 || // Lo       HANGUL SYLLABLE YI
      t == 51060 || // Lo       HANGUL SYLLABLE I
      t == 51088 || // Lo       HANGUL SYLLABLE JA
      t == 51116 || // Lo       HANGUL SYLLABLE JAE
      t == 51144 || // Lo       HANGUL SYLLABLE JYA
      t == 51172 || // Lo       HANGUL SYLLABLE JYAE
      t == 51200 || // Lo       HANGUL SYLLABLE JEO
      t == 51228 || // Lo       HANGUL SYLLABLE JE
      t == 51256 || // Lo       HANGUL SYLLABLE JYEO
      t == 51284 || // Lo       HANGUL SYLLABLE JYE
      t == 51312 || // Lo       HANGUL SYLLABLE JO
      t == 51340 || // Lo       HANGUL SYLLABLE JWA
      t == 51368 || // Lo       HANGUL SYLLABLE JWAE
      t == 51396 || // Lo       HANGUL SYLLABLE JOE
      t == 51424 || // Lo       HANGUL SYLLABLE JYO
      t == 51452 || // Lo       HANGUL SYLLABLE JU
      t == 51480 || // Lo       HANGUL SYLLABLE JWEO
      t == 51508 || // Lo       HANGUL SYLLABLE JWE
      t == 51536 || // Lo       HANGUL SYLLABLE JWI
      t == 51564 || // Lo       HANGUL SYLLABLE JYU
      t == 51592 || // Lo       HANGUL SYLLABLE JEU
      t == 51620 || // Lo       HANGUL SYLLABLE JYI
      t == 51648 || // Lo       HANGUL SYLLABLE JI
      t == 51676 || // Lo       HANGUL SYLLABLE JJA
      t == 51704 || // Lo       HANGUL SYLLABLE JJAE
      t == 51732 || // Lo       HANGUL SYLLABLE JJYA
      t == 51760 || // Lo       HANGUL SYLLABLE JJYAE
      t == 51788 || // Lo       HANGUL SYLLABLE JJEO
      t == 51816 || // Lo       HANGUL SYLLABLE JJE
      t == 51844 || // Lo       HANGUL SYLLABLE JJYEO
      t == 51872 || // Lo       HANGUL SYLLABLE JJYE
      t == 51900 || // Lo       HANGUL SYLLABLE JJO
      t == 51928 || // Lo       HANGUL SYLLABLE JJWA
      t == 51956 || // Lo       HANGUL SYLLABLE JJWAE
      t == 51984 || // Lo       HANGUL SYLLABLE JJOE
      t == 52012 || // Lo       HANGUL SYLLABLE JJYO
      t == 52040 || // Lo       HANGUL SYLLABLE JJU
      t == 52068 || // Lo       HANGUL SYLLABLE JJWEO
      t == 52096 || // Lo       HANGUL SYLLABLE JJWE
      t == 52124 || // Lo       HANGUL SYLLABLE JJWI
      t == 52152 || // Lo       HANGUL SYLLABLE JJYU
      t == 52180 || // Lo       HANGUL SYLLABLE JJEU
      t == 52208 || // Lo       HANGUL SYLLABLE JJYI
      t == 52236 || // Lo       HANGUL SYLLABLE JJI
      t == 52264 || // Lo       HANGUL SYLLABLE CA
      t == 52292 || // Lo       HANGUL SYLLABLE CAE
      t == 52320 || // Lo       HANGUL SYLLABLE CYA
      t == 52348 || // Lo       HANGUL SYLLABLE CYAE
      t == 52376 || // Lo       HANGUL SYLLABLE CEO
      t == 52404 || // Lo       HANGUL SYLLABLE CE
      t == 52432 || // Lo       HANGUL SYLLABLE CYEO
      t == 52460 || // Lo       HANGUL SYLLABLE CYE
      t == 52488 || // Lo       HANGUL SYLLABLE CO
      t == 52516 || // Lo       HANGUL SYLLABLE CWA
      t == 52544 || // Lo       HANGUL SYLLABLE CWAE
      t == 52572 || // Lo       HANGUL SYLLABLE COE
      t == 52600 || // Lo       HANGUL SYLLABLE CYO
      t == 52628 || // Lo       HANGUL SYLLABLE CU
      t == 52656 || // Lo       HANGUL SYLLABLE CWEO
      t == 52684 || // Lo       HANGUL SYLLABLE CWE
      t == 52712 || // Lo       HANGUL SYLLABLE CWI
      t == 52740 || // Lo       HANGUL SYLLABLE CYU
      t == 52768 || // Lo       HANGUL SYLLABLE CEU
      t == 52796 || // Lo       HANGUL SYLLABLE CYI
      t == 52824 || // Lo       HANGUL SYLLABLE CI
      t == 52852 || // Lo       HANGUL SYLLABLE KA
      t == 52880 || // Lo       HANGUL SYLLABLE KAE
      t == 52908 || // Lo       HANGUL SYLLABLE KYA
      t == 52936 || // Lo       HANGUL SYLLABLE KYAE
      t == 52964 || // Lo       HANGUL SYLLABLE KEO
      t == 52992 || // Lo       HANGUL SYLLABLE KE
      t == 53020 || // Lo       HANGUL SYLLABLE KYEO
      t == 53048 || // Lo       HANGUL SYLLABLE KYE
      t == 53076 || // Lo       HANGUL SYLLABLE KO
      t == 53104 || // Lo       HANGUL SYLLABLE KWA
      t == 53132 || // Lo       HANGUL SYLLABLE KWAE
      t == 53160 || // Lo       HANGUL SYLLABLE KOE
      t == 53188 || // Lo       HANGUL SYLLABLE KYO
      t == 53216 || // Lo       HANGUL SYLLABLE KU
      t == 53244 || // Lo       HANGUL SYLLABLE KWEO
      t == 53272 || // Lo       HANGUL SYLLABLE KWE
      t == 53300 || // Lo       HANGUL SYLLABLE KWI
      t == 53328 || // Lo       HANGUL SYLLABLE KYU
      t == 53356 || // Lo       HANGUL SYLLABLE KEU
      t == 53384 || // Lo       HANGUL SYLLABLE KYI
      t == 53412 || // Lo       HANGUL SYLLABLE KI
      t == 53440 || // Lo       HANGUL SYLLABLE TA
      t == 53468 || // Lo       HANGUL SYLLABLE TAE
      t == 53496 || // Lo       HANGUL SYLLABLE TYA
      t == 53524 || // Lo       HANGUL SYLLABLE TYAE
      t == 53552 || // Lo       HANGUL SYLLABLE TEO
      t == 53580 || // Lo       HANGUL SYLLABLE TE
      t == 53608 || // Lo       HANGUL SYLLABLE TYEO
      t == 53636 || // Lo       HANGUL SYLLABLE TYE
      t == 53664 || // Lo       HANGUL SYLLABLE TO
      t == 53692 || // Lo       HANGUL SYLLABLE TWA
      t == 53720 || // Lo       HANGUL SYLLABLE TWAE
      t == 53748 || // Lo       HANGUL SYLLABLE TOE
      t == 53776 || // Lo       HANGUL SYLLABLE TYO
      t == 53804 || // Lo       HANGUL SYLLABLE TU
      t == 53832 || // Lo       HANGUL SYLLABLE TWEO
      t == 53860 || // Lo       HANGUL SYLLABLE TWE
      t == 53888 || // Lo       HANGUL SYLLABLE TWI
      t == 53916 || // Lo       HANGUL SYLLABLE TYU
      t == 53944 || // Lo       HANGUL SYLLABLE TEU
      t == 53972 || // Lo       HANGUL SYLLABLE TYI
      t == 54e3 || // Lo       HANGUL SYLLABLE TI
      t == 54028 || // Lo       HANGUL SYLLABLE PA
      t == 54056 || // Lo       HANGUL SYLLABLE PAE
      t == 54084 || // Lo       HANGUL SYLLABLE PYA
      t == 54112 || // Lo       HANGUL SYLLABLE PYAE
      t == 54140 || // Lo       HANGUL SYLLABLE PEO
      t == 54168 || // Lo       HANGUL SYLLABLE PE
      t == 54196 || // Lo       HANGUL SYLLABLE PYEO
      t == 54224 || // Lo       HANGUL SYLLABLE PYE
      t == 54252 || // Lo       HANGUL SYLLABLE PO
      t == 54280 || // Lo       HANGUL SYLLABLE PWA
      t == 54308 || // Lo       HANGUL SYLLABLE PWAE
      t == 54336 || // Lo       HANGUL SYLLABLE POE
      t == 54364 || // Lo       HANGUL SYLLABLE PYO
      t == 54392 || // Lo       HANGUL SYLLABLE PU
      t == 54420 || // Lo       HANGUL SYLLABLE PWEO
      t == 54448 || // Lo       HANGUL SYLLABLE PWE
      t == 54476 || // Lo       HANGUL SYLLABLE PWI
      t == 54504 || // Lo       HANGUL SYLLABLE PYU
      t == 54532 || // Lo       HANGUL SYLLABLE PEU
      t == 54560 || // Lo       HANGUL SYLLABLE PYI
      t == 54588 || // Lo       HANGUL SYLLABLE PI
      t == 54616 || // Lo       HANGUL SYLLABLE HA
      t == 54644 || // Lo       HANGUL SYLLABLE HAE
      t == 54672 || // Lo       HANGUL SYLLABLE HYA
      t == 54700 || // Lo       HANGUL SYLLABLE HYAE
      t == 54728 || // Lo       HANGUL SYLLABLE HEO
      t == 54756 || // Lo       HANGUL SYLLABLE HE
      t == 54784 || // Lo       HANGUL SYLLABLE HYEO
      t == 54812 || // Lo       HANGUL SYLLABLE HYE
      t == 54840 || // Lo       HANGUL SYLLABLE HO
      t == 54868 || // Lo       HANGUL SYLLABLE HWA
      t == 54896 || // Lo       HANGUL SYLLABLE HWAE
      t == 54924 || // Lo       HANGUL SYLLABLE HOE
      t == 54952 || // Lo       HANGUL SYLLABLE HYO
      t == 54980 || // Lo       HANGUL SYLLABLE HU
      t == 55008 || // Lo       HANGUL SYLLABLE HWEO
      t == 55036 || // Lo       HANGUL SYLLABLE HWE
      t == 55064 || // Lo       HANGUL SYLLABLE HWI
      t == 55092 || // Lo       HANGUL SYLLABLE HYU
      t == 55120 || // Lo       HANGUL SYLLABLE HEU
      t == 55148 || // Lo       HANGUL SYLLABLE HYI
      t == 55176 ? f : 44033 <= t && t <= 44059 || // Lo  [27] HANGUL SYLLABLE GAG..HANGUL SYLLABLE GAH
      44061 <= t && t <= 44087 || // Lo  [27] HANGUL SYLLABLE GAEG..HANGUL SYLLABLE GAEH
      44089 <= t && t <= 44115 || // Lo  [27] HANGUL SYLLABLE GYAG..HANGUL SYLLABLE GYAH
      44117 <= t && t <= 44143 || // Lo  [27] HANGUL SYLLABLE GYAEG..HANGUL SYLLABLE GYAEH
      44145 <= t && t <= 44171 || // Lo  [27] HANGUL SYLLABLE GEOG..HANGUL SYLLABLE GEOH
      44173 <= t && t <= 44199 || // Lo  [27] HANGUL SYLLABLE GEG..HANGUL SYLLABLE GEH
      44201 <= t && t <= 44227 || // Lo  [27] HANGUL SYLLABLE GYEOG..HANGUL SYLLABLE GYEOH
      44229 <= t && t <= 44255 || // Lo  [27] HANGUL SYLLABLE GYEG..HANGUL SYLLABLE GYEH
      44257 <= t && t <= 44283 || // Lo  [27] HANGUL SYLLABLE GOG..HANGUL SYLLABLE GOH
      44285 <= t && t <= 44311 || // Lo  [27] HANGUL SYLLABLE GWAG..HANGUL SYLLABLE GWAH
      44313 <= t && t <= 44339 || // Lo  [27] HANGUL SYLLABLE GWAEG..HANGUL SYLLABLE GWAEH
      44341 <= t && t <= 44367 || // Lo  [27] HANGUL SYLLABLE GOEG..HANGUL SYLLABLE GOEH
      44369 <= t && t <= 44395 || // Lo  [27] HANGUL SYLLABLE GYOG..HANGUL SYLLABLE GYOH
      44397 <= t && t <= 44423 || // Lo  [27] HANGUL SYLLABLE GUG..HANGUL SYLLABLE GUH
      44425 <= t && t <= 44451 || // Lo  [27] HANGUL SYLLABLE GWEOG..HANGUL SYLLABLE GWEOH
      44453 <= t && t <= 44479 || // Lo  [27] HANGUL SYLLABLE GWEG..HANGUL SYLLABLE GWEH
      44481 <= t && t <= 44507 || // Lo  [27] HANGUL SYLLABLE GWIG..HANGUL SYLLABLE GWIH
      44509 <= t && t <= 44535 || // Lo  [27] HANGUL SYLLABLE GYUG..HANGUL SYLLABLE GYUH
      44537 <= t && t <= 44563 || // Lo  [27] HANGUL SYLLABLE GEUG..HANGUL SYLLABLE GEUH
      44565 <= t && t <= 44591 || // Lo  [27] HANGUL SYLLABLE GYIG..HANGUL SYLLABLE GYIH
      44593 <= t && t <= 44619 || // Lo  [27] HANGUL SYLLABLE GIG..HANGUL SYLLABLE GIH
      44621 <= t && t <= 44647 || // Lo  [27] HANGUL SYLLABLE GGAG..HANGUL SYLLABLE GGAH
      44649 <= t && t <= 44675 || // Lo  [27] HANGUL SYLLABLE GGAEG..HANGUL SYLLABLE GGAEH
      44677 <= t && t <= 44703 || // Lo  [27] HANGUL SYLLABLE GGYAG..HANGUL SYLLABLE GGYAH
      44705 <= t && t <= 44731 || // Lo  [27] HANGUL SYLLABLE GGYAEG..HANGUL SYLLABLE GGYAEH
      44733 <= t && t <= 44759 || // Lo  [27] HANGUL SYLLABLE GGEOG..HANGUL SYLLABLE GGEOH
      44761 <= t && t <= 44787 || // Lo  [27] HANGUL SYLLABLE GGEG..HANGUL SYLLABLE GGEH
      44789 <= t && t <= 44815 || // Lo  [27] HANGUL SYLLABLE GGYEOG..HANGUL SYLLABLE GGYEOH
      44817 <= t && t <= 44843 || // Lo  [27] HANGUL SYLLABLE GGYEG..HANGUL SYLLABLE GGYEH
      44845 <= t && t <= 44871 || // Lo  [27] HANGUL SYLLABLE GGOG..HANGUL SYLLABLE GGOH
      44873 <= t && t <= 44899 || // Lo  [27] HANGUL SYLLABLE GGWAG..HANGUL SYLLABLE GGWAH
      44901 <= t && t <= 44927 || // Lo  [27] HANGUL SYLLABLE GGWAEG..HANGUL SYLLABLE GGWAEH
      44929 <= t && t <= 44955 || // Lo  [27] HANGUL SYLLABLE GGOEG..HANGUL SYLLABLE GGOEH
      44957 <= t && t <= 44983 || // Lo  [27] HANGUL SYLLABLE GGYOG..HANGUL SYLLABLE GGYOH
      44985 <= t && t <= 45011 || // Lo  [27] HANGUL SYLLABLE GGUG..HANGUL SYLLABLE GGUH
      45013 <= t && t <= 45039 || // Lo  [27] HANGUL SYLLABLE GGWEOG..HANGUL SYLLABLE GGWEOH
      45041 <= t && t <= 45067 || // Lo  [27] HANGUL SYLLABLE GGWEG..HANGUL SYLLABLE GGWEH
      45069 <= t && t <= 45095 || // Lo  [27] HANGUL SYLLABLE GGWIG..HANGUL SYLLABLE GGWIH
      45097 <= t && t <= 45123 || // Lo  [27] HANGUL SYLLABLE GGYUG..HANGUL SYLLABLE GGYUH
      45125 <= t && t <= 45151 || // Lo  [27] HANGUL SYLLABLE GGEUG..HANGUL SYLLABLE GGEUH
      45153 <= t && t <= 45179 || // Lo  [27] HANGUL SYLLABLE GGYIG..HANGUL SYLLABLE GGYIH
      45181 <= t && t <= 45207 || // Lo  [27] HANGUL SYLLABLE GGIG..HANGUL SYLLABLE GGIH
      45209 <= t && t <= 45235 || // Lo  [27] HANGUL SYLLABLE NAG..HANGUL SYLLABLE NAH
      45237 <= t && t <= 45263 || // Lo  [27] HANGUL SYLLABLE NAEG..HANGUL SYLLABLE NAEH
      45265 <= t && t <= 45291 || // Lo  [27] HANGUL SYLLABLE NYAG..HANGUL SYLLABLE NYAH
      45293 <= t && t <= 45319 || // Lo  [27] HANGUL SYLLABLE NYAEG..HANGUL SYLLABLE NYAEH
      45321 <= t && t <= 45347 || // Lo  [27] HANGUL SYLLABLE NEOG..HANGUL SYLLABLE NEOH
      45349 <= t && t <= 45375 || // Lo  [27] HANGUL SYLLABLE NEG..HANGUL SYLLABLE NEH
      45377 <= t && t <= 45403 || // Lo  [27] HANGUL SYLLABLE NYEOG..HANGUL SYLLABLE NYEOH
      45405 <= t && t <= 45431 || // Lo  [27] HANGUL SYLLABLE NYEG..HANGUL SYLLABLE NYEH
      45433 <= t && t <= 45459 || // Lo  [27] HANGUL SYLLABLE NOG..HANGUL SYLLABLE NOH
      45461 <= t && t <= 45487 || // Lo  [27] HANGUL SYLLABLE NWAG..HANGUL SYLLABLE NWAH
      45489 <= t && t <= 45515 || // Lo  [27] HANGUL SYLLABLE NWAEG..HANGUL SYLLABLE NWAEH
      45517 <= t && t <= 45543 || // Lo  [27] HANGUL SYLLABLE NOEG..HANGUL SYLLABLE NOEH
      45545 <= t && t <= 45571 || // Lo  [27] HANGUL SYLLABLE NYOG..HANGUL SYLLABLE NYOH
      45573 <= t && t <= 45599 || // Lo  [27] HANGUL SYLLABLE NUG..HANGUL SYLLABLE NUH
      45601 <= t && t <= 45627 || // Lo  [27] HANGUL SYLLABLE NWEOG..HANGUL SYLLABLE NWEOH
      45629 <= t && t <= 45655 || // Lo  [27] HANGUL SYLLABLE NWEG..HANGUL SYLLABLE NWEH
      45657 <= t && t <= 45683 || // Lo  [27] HANGUL SYLLABLE NWIG..HANGUL SYLLABLE NWIH
      45685 <= t && t <= 45711 || // Lo  [27] HANGUL SYLLABLE NYUG..HANGUL SYLLABLE NYUH
      45713 <= t && t <= 45739 || // Lo  [27] HANGUL SYLLABLE NEUG..HANGUL SYLLABLE NEUH
      45741 <= t && t <= 45767 || // Lo  [27] HANGUL SYLLABLE NYIG..HANGUL SYLLABLE NYIH
      45769 <= t && t <= 45795 || // Lo  [27] HANGUL SYLLABLE NIG..HANGUL SYLLABLE NIH
      45797 <= t && t <= 45823 || // Lo  [27] HANGUL SYLLABLE DAG..HANGUL SYLLABLE DAH
      45825 <= t && t <= 45851 || // Lo  [27] HANGUL SYLLABLE DAEG..HANGUL SYLLABLE DAEH
      45853 <= t && t <= 45879 || // Lo  [27] HANGUL SYLLABLE DYAG..HANGUL SYLLABLE DYAH
      45881 <= t && t <= 45907 || // Lo  [27] HANGUL SYLLABLE DYAEG..HANGUL SYLLABLE DYAEH
      45909 <= t && t <= 45935 || // Lo  [27] HANGUL SYLLABLE DEOG..HANGUL SYLLABLE DEOH
      45937 <= t && t <= 45963 || // Lo  [27] HANGUL SYLLABLE DEG..HANGUL SYLLABLE DEH
      45965 <= t && t <= 45991 || // Lo  [27] HANGUL SYLLABLE DYEOG..HANGUL SYLLABLE DYEOH
      45993 <= t && t <= 46019 || // Lo  [27] HANGUL SYLLABLE DYEG..HANGUL SYLLABLE DYEH
      46021 <= t && t <= 46047 || // Lo  [27] HANGUL SYLLABLE DOG..HANGUL SYLLABLE DOH
      46049 <= t && t <= 46075 || // Lo  [27] HANGUL SYLLABLE DWAG..HANGUL SYLLABLE DWAH
      46077 <= t && t <= 46103 || // Lo  [27] HANGUL SYLLABLE DWAEG..HANGUL SYLLABLE DWAEH
      46105 <= t && t <= 46131 || // Lo  [27] HANGUL SYLLABLE DOEG..HANGUL SYLLABLE DOEH
      46133 <= t && t <= 46159 || // Lo  [27] HANGUL SYLLABLE DYOG..HANGUL SYLLABLE DYOH
      46161 <= t && t <= 46187 || // Lo  [27] HANGUL SYLLABLE DUG..HANGUL SYLLABLE DUH
      46189 <= t && t <= 46215 || // Lo  [27] HANGUL SYLLABLE DWEOG..HANGUL SYLLABLE DWEOH
      46217 <= t && t <= 46243 || // Lo  [27] HANGUL SYLLABLE DWEG..HANGUL SYLLABLE DWEH
      46245 <= t && t <= 46271 || // Lo  [27] HANGUL SYLLABLE DWIG..HANGUL SYLLABLE DWIH
      46273 <= t && t <= 46299 || // Lo  [27] HANGUL SYLLABLE DYUG..HANGUL SYLLABLE DYUH
      46301 <= t && t <= 46327 || // Lo  [27] HANGUL SYLLABLE DEUG..HANGUL SYLLABLE DEUH
      46329 <= t && t <= 46355 || // Lo  [27] HANGUL SYLLABLE DYIG..HANGUL SYLLABLE DYIH
      46357 <= t && t <= 46383 || // Lo  [27] HANGUL SYLLABLE DIG..HANGUL SYLLABLE DIH
      46385 <= t && t <= 46411 || // Lo  [27] HANGUL SYLLABLE DDAG..HANGUL SYLLABLE DDAH
      46413 <= t && t <= 46439 || // Lo  [27] HANGUL SYLLABLE DDAEG..HANGUL SYLLABLE DDAEH
      46441 <= t && t <= 46467 || // Lo  [27] HANGUL SYLLABLE DDYAG..HANGUL SYLLABLE DDYAH
      46469 <= t && t <= 46495 || // Lo  [27] HANGUL SYLLABLE DDYAEG..HANGUL SYLLABLE DDYAEH
      46497 <= t && t <= 46523 || // Lo  [27] HANGUL SYLLABLE DDEOG..HANGUL SYLLABLE DDEOH
      46525 <= t && t <= 46551 || // Lo  [27] HANGUL SYLLABLE DDEG..HANGUL SYLLABLE DDEH
      46553 <= t && t <= 46579 || // Lo  [27] HANGUL SYLLABLE DDYEOG..HANGUL SYLLABLE DDYEOH
      46581 <= t && t <= 46607 || // Lo  [27] HANGUL SYLLABLE DDYEG..HANGUL SYLLABLE DDYEH
      46609 <= t && t <= 46635 || // Lo  [27] HANGUL SYLLABLE DDOG..HANGUL SYLLABLE DDOH
      46637 <= t && t <= 46663 || // Lo  [27] HANGUL SYLLABLE DDWAG..HANGUL SYLLABLE DDWAH
      46665 <= t && t <= 46691 || // Lo  [27] HANGUL SYLLABLE DDWAEG..HANGUL SYLLABLE DDWAEH
      46693 <= t && t <= 46719 || // Lo  [27] HANGUL SYLLABLE DDOEG..HANGUL SYLLABLE DDOEH
      46721 <= t && t <= 46747 || // Lo  [27] HANGUL SYLLABLE DDYOG..HANGUL SYLLABLE DDYOH
      46749 <= t && t <= 46775 || // Lo  [27] HANGUL SYLLABLE DDUG..HANGUL SYLLABLE DDUH
      46777 <= t && t <= 46803 || // Lo  [27] HANGUL SYLLABLE DDWEOG..HANGUL SYLLABLE DDWEOH
      46805 <= t && t <= 46831 || // Lo  [27] HANGUL SYLLABLE DDWEG..HANGUL SYLLABLE DDWEH
      46833 <= t && t <= 46859 || // Lo  [27] HANGUL SYLLABLE DDWIG..HANGUL SYLLABLE DDWIH
      46861 <= t && t <= 46887 || // Lo  [27] HANGUL SYLLABLE DDYUG..HANGUL SYLLABLE DDYUH
      46889 <= t && t <= 46915 || // Lo  [27] HANGUL SYLLABLE DDEUG..HANGUL SYLLABLE DDEUH
      46917 <= t && t <= 46943 || // Lo  [27] HANGUL SYLLABLE DDYIG..HANGUL SYLLABLE DDYIH
      46945 <= t && t <= 46971 || // Lo  [27] HANGUL SYLLABLE DDIG..HANGUL SYLLABLE DDIH
      46973 <= t && t <= 46999 || // Lo  [27] HANGUL SYLLABLE RAG..HANGUL SYLLABLE RAH
      47001 <= t && t <= 47027 || // Lo  [27] HANGUL SYLLABLE RAEG..HANGUL SYLLABLE RAEH
      47029 <= t && t <= 47055 || // Lo  [27] HANGUL SYLLABLE RYAG..HANGUL SYLLABLE RYAH
      47057 <= t && t <= 47083 || // Lo  [27] HANGUL SYLLABLE RYAEG..HANGUL SYLLABLE RYAEH
      47085 <= t && t <= 47111 || // Lo  [27] HANGUL SYLLABLE REOG..HANGUL SYLLABLE REOH
      47113 <= t && t <= 47139 || // Lo  [27] HANGUL SYLLABLE REG..HANGUL SYLLABLE REH
      47141 <= t && t <= 47167 || // Lo  [27] HANGUL SYLLABLE RYEOG..HANGUL SYLLABLE RYEOH
      47169 <= t && t <= 47195 || // Lo  [27] HANGUL SYLLABLE RYEG..HANGUL SYLLABLE RYEH
      47197 <= t && t <= 47223 || // Lo  [27] HANGUL SYLLABLE ROG..HANGUL SYLLABLE ROH
      47225 <= t && t <= 47251 || // Lo  [27] HANGUL SYLLABLE RWAG..HANGUL SYLLABLE RWAH
      47253 <= t && t <= 47279 || // Lo  [27] HANGUL SYLLABLE RWAEG..HANGUL SYLLABLE RWAEH
      47281 <= t && t <= 47307 || // Lo  [27] HANGUL SYLLABLE ROEG..HANGUL SYLLABLE ROEH
      47309 <= t && t <= 47335 || // Lo  [27] HANGUL SYLLABLE RYOG..HANGUL SYLLABLE RYOH
      47337 <= t && t <= 47363 || // Lo  [27] HANGUL SYLLABLE RUG..HANGUL SYLLABLE RUH
      47365 <= t && t <= 47391 || // Lo  [27] HANGUL SYLLABLE RWEOG..HANGUL SYLLABLE RWEOH
      47393 <= t && t <= 47419 || // Lo  [27] HANGUL SYLLABLE RWEG..HANGUL SYLLABLE RWEH
      47421 <= t && t <= 47447 || // Lo  [27] HANGUL SYLLABLE RWIG..HANGUL SYLLABLE RWIH
      47449 <= t && t <= 47475 || // Lo  [27] HANGUL SYLLABLE RYUG..HANGUL SYLLABLE RYUH
      47477 <= t && t <= 47503 || // Lo  [27] HANGUL SYLLABLE REUG..HANGUL SYLLABLE REUH
      47505 <= t && t <= 47531 || // Lo  [27] HANGUL SYLLABLE RYIG..HANGUL SYLLABLE RYIH
      47533 <= t && t <= 47559 || // Lo  [27] HANGUL SYLLABLE RIG..HANGUL SYLLABLE RIH
      47561 <= t && t <= 47587 || // Lo  [27] HANGUL SYLLABLE MAG..HANGUL SYLLABLE MAH
      47589 <= t && t <= 47615 || // Lo  [27] HANGUL SYLLABLE MAEG..HANGUL SYLLABLE MAEH
      47617 <= t && t <= 47643 || // Lo  [27] HANGUL SYLLABLE MYAG..HANGUL SYLLABLE MYAH
      47645 <= t && t <= 47671 || // Lo  [27] HANGUL SYLLABLE MYAEG..HANGUL SYLLABLE MYAEH
      47673 <= t && t <= 47699 || // Lo  [27] HANGUL SYLLABLE MEOG..HANGUL SYLLABLE MEOH
      47701 <= t && t <= 47727 || // Lo  [27] HANGUL SYLLABLE MEG..HANGUL SYLLABLE MEH
      47729 <= t && t <= 47755 || // Lo  [27] HANGUL SYLLABLE MYEOG..HANGUL SYLLABLE MYEOH
      47757 <= t && t <= 47783 || // Lo  [27] HANGUL SYLLABLE MYEG..HANGUL SYLLABLE MYEH
      47785 <= t && t <= 47811 || // Lo  [27] HANGUL SYLLABLE MOG..HANGUL SYLLABLE MOH
      47813 <= t && t <= 47839 || // Lo  [27] HANGUL SYLLABLE MWAG..HANGUL SYLLABLE MWAH
      47841 <= t && t <= 47867 || // Lo  [27] HANGUL SYLLABLE MWAEG..HANGUL SYLLABLE MWAEH
      47869 <= t && t <= 47895 || // Lo  [27] HANGUL SYLLABLE MOEG..HANGUL SYLLABLE MOEH
      47897 <= t && t <= 47923 || // Lo  [27] HANGUL SYLLABLE MYOG..HANGUL SYLLABLE MYOH
      47925 <= t && t <= 47951 || // Lo  [27] HANGUL SYLLABLE MUG..HANGUL SYLLABLE MUH
      47953 <= t && t <= 47979 || // Lo  [27] HANGUL SYLLABLE MWEOG..HANGUL SYLLABLE MWEOH
      47981 <= t && t <= 48007 || // Lo  [27] HANGUL SYLLABLE MWEG..HANGUL SYLLABLE MWEH
      48009 <= t && t <= 48035 || // Lo  [27] HANGUL SYLLABLE MWIG..HANGUL SYLLABLE MWIH
      48037 <= t && t <= 48063 || // Lo  [27] HANGUL SYLLABLE MYUG..HANGUL SYLLABLE MYUH
      48065 <= t && t <= 48091 || // Lo  [27] HANGUL SYLLABLE MEUG..HANGUL SYLLABLE MEUH
      48093 <= t && t <= 48119 || // Lo  [27] HANGUL SYLLABLE MYIG..HANGUL SYLLABLE MYIH
      48121 <= t && t <= 48147 || // Lo  [27] HANGUL SYLLABLE MIG..HANGUL SYLLABLE MIH
      48149 <= t && t <= 48175 || // Lo  [27] HANGUL SYLLABLE BAG..HANGUL SYLLABLE BAH
      48177 <= t && t <= 48203 || // Lo  [27] HANGUL SYLLABLE BAEG..HANGUL SYLLABLE BAEH
      48205 <= t && t <= 48231 || // Lo  [27] HANGUL SYLLABLE BYAG..HANGUL SYLLABLE BYAH
      48233 <= t && t <= 48259 || // Lo  [27] HANGUL SYLLABLE BYAEG..HANGUL SYLLABLE BYAEH
      48261 <= t && t <= 48287 || // Lo  [27] HANGUL SYLLABLE BEOG..HANGUL SYLLABLE BEOH
      48289 <= t && t <= 48315 || // Lo  [27] HANGUL SYLLABLE BEG..HANGUL SYLLABLE BEH
      48317 <= t && t <= 48343 || // Lo  [27] HANGUL SYLLABLE BYEOG..HANGUL SYLLABLE BYEOH
      48345 <= t && t <= 48371 || // Lo  [27] HANGUL SYLLABLE BYEG..HANGUL SYLLABLE BYEH
      48373 <= t && t <= 48399 || // Lo  [27] HANGUL SYLLABLE BOG..HANGUL SYLLABLE BOH
      48401 <= t && t <= 48427 || // Lo  [27] HANGUL SYLLABLE BWAG..HANGUL SYLLABLE BWAH
      48429 <= t && t <= 48455 || // Lo  [27] HANGUL SYLLABLE BWAEG..HANGUL SYLLABLE BWAEH
      48457 <= t && t <= 48483 || // Lo  [27] HANGUL SYLLABLE BOEG..HANGUL SYLLABLE BOEH
      48485 <= t && t <= 48511 || // Lo  [27] HANGUL SYLLABLE BYOG..HANGUL SYLLABLE BYOH
      48513 <= t && t <= 48539 || // Lo  [27] HANGUL SYLLABLE BUG..HANGUL SYLLABLE BUH
      48541 <= t && t <= 48567 || // Lo  [27] HANGUL SYLLABLE BWEOG..HANGUL SYLLABLE BWEOH
      48569 <= t && t <= 48595 || // Lo  [27] HANGUL SYLLABLE BWEG..HANGUL SYLLABLE BWEH
      48597 <= t && t <= 48623 || // Lo  [27] HANGUL SYLLABLE BWIG..HANGUL SYLLABLE BWIH
      48625 <= t && t <= 48651 || // Lo  [27] HANGUL SYLLABLE BYUG..HANGUL SYLLABLE BYUH
      48653 <= t && t <= 48679 || // Lo  [27] HANGUL SYLLABLE BEUG..HANGUL SYLLABLE BEUH
      48681 <= t && t <= 48707 || // Lo  [27] HANGUL SYLLABLE BYIG..HANGUL SYLLABLE BYIH
      48709 <= t && t <= 48735 || // Lo  [27] HANGUL SYLLABLE BIG..HANGUL SYLLABLE BIH
      48737 <= t && t <= 48763 || // Lo  [27] HANGUL SYLLABLE BBAG..HANGUL SYLLABLE BBAH
      48765 <= t && t <= 48791 || // Lo  [27] HANGUL SYLLABLE BBAEG..HANGUL SYLLABLE BBAEH
      48793 <= t && t <= 48819 || // Lo  [27] HANGUL SYLLABLE BBYAG..HANGUL SYLLABLE BBYAH
      48821 <= t && t <= 48847 || // Lo  [27] HANGUL SYLLABLE BBYAEG..HANGUL SYLLABLE BBYAEH
      48849 <= t && t <= 48875 || // Lo  [27] HANGUL SYLLABLE BBEOG..HANGUL SYLLABLE BBEOH
      48877 <= t && t <= 48903 || // Lo  [27] HANGUL SYLLABLE BBEG..HANGUL SYLLABLE BBEH
      48905 <= t && t <= 48931 || // Lo  [27] HANGUL SYLLABLE BBYEOG..HANGUL SYLLABLE BBYEOH
      48933 <= t && t <= 48959 || // Lo  [27] HANGUL SYLLABLE BBYEG..HANGUL SYLLABLE BBYEH
      48961 <= t && t <= 48987 || // Lo  [27] HANGUL SYLLABLE BBOG..HANGUL SYLLABLE BBOH
      48989 <= t && t <= 49015 || // Lo  [27] HANGUL SYLLABLE BBWAG..HANGUL SYLLABLE BBWAH
      49017 <= t && t <= 49043 || // Lo  [27] HANGUL SYLLABLE BBWAEG..HANGUL SYLLABLE BBWAEH
      49045 <= t && t <= 49071 || // Lo  [27] HANGUL SYLLABLE BBOEG..HANGUL SYLLABLE BBOEH
      49073 <= t && t <= 49099 || // Lo  [27] HANGUL SYLLABLE BBYOG..HANGUL SYLLABLE BBYOH
      49101 <= t && t <= 49127 || // Lo  [27] HANGUL SYLLABLE BBUG..HANGUL SYLLABLE BBUH
      49129 <= t && t <= 49155 || // Lo  [27] HANGUL SYLLABLE BBWEOG..HANGUL SYLLABLE BBWEOH
      49157 <= t && t <= 49183 || // Lo  [27] HANGUL SYLLABLE BBWEG..HANGUL SYLLABLE BBWEH
      49185 <= t && t <= 49211 || // Lo  [27] HANGUL SYLLABLE BBWIG..HANGUL SYLLABLE BBWIH
      49213 <= t && t <= 49239 || // Lo  [27] HANGUL SYLLABLE BBYUG..HANGUL SYLLABLE BBYUH
      49241 <= t && t <= 49267 || // Lo  [27] HANGUL SYLLABLE BBEUG..HANGUL SYLLABLE BBEUH
      49269 <= t && t <= 49295 || // Lo  [27] HANGUL SYLLABLE BBYIG..HANGUL SYLLABLE BBYIH
      49297 <= t && t <= 49323 || // Lo  [27] HANGUL SYLLABLE BBIG..HANGUL SYLLABLE BBIH
      49325 <= t && t <= 49351 || // Lo  [27] HANGUL SYLLABLE SAG..HANGUL SYLLABLE SAH
      49353 <= t && t <= 49379 || // Lo  [27] HANGUL SYLLABLE SAEG..HANGUL SYLLABLE SAEH
      49381 <= t && t <= 49407 || // Lo  [27] HANGUL SYLLABLE SYAG..HANGUL SYLLABLE SYAH
      49409 <= t && t <= 49435 || // Lo  [27] HANGUL SYLLABLE SYAEG..HANGUL SYLLABLE SYAEH
      49437 <= t && t <= 49463 || // Lo  [27] HANGUL SYLLABLE SEOG..HANGUL SYLLABLE SEOH
      49465 <= t && t <= 49491 || // Lo  [27] HANGUL SYLLABLE SEG..HANGUL SYLLABLE SEH
      49493 <= t && t <= 49519 || // Lo  [27] HANGUL SYLLABLE SYEOG..HANGUL SYLLABLE SYEOH
      49521 <= t && t <= 49547 || // Lo  [27] HANGUL SYLLABLE SYEG..HANGUL SYLLABLE SYEH
      49549 <= t && t <= 49575 || // Lo  [27] HANGUL SYLLABLE SOG..HANGUL SYLLABLE SOH
      49577 <= t && t <= 49603 || // Lo  [27] HANGUL SYLLABLE SWAG..HANGUL SYLLABLE SWAH
      49605 <= t && t <= 49631 || // Lo  [27] HANGUL SYLLABLE SWAEG..HANGUL SYLLABLE SWAEH
      49633 <= t && t <= 49659 || // Lo  [27] HANGUL SYLLABLE SOEG..HANGUL SYLLABLE SOEH
      49661 <= t && t <= 49687 || // Lo  [27] HANGUL SYLLABLE SYOG..HANGUL SYLLABLE SYOH
      49689 <= t && t <= 49715 || // Lo  [27] HANGUL SYLLABLE SUG..HANGUL SYLLABLE SUH
      49717 <= t && t <= 49743 || // Lo  [27] HANGUL SYLLABLE SWEOG..HANGUL SYLLABLE SWEOH
      49745 <= t && t <= 49771 || // Lo  [27] HANGUL SYLLABLE SWEG..HANGUL SYLLABLE SWEH
      49773 <= t && t <= 49799 || // Lo  [27] HANGUL SYLLABLE SWIG..HANGUL SYLLABLE SWIH
      49801 <= t && t <= 49827 || // Lo  [27] HANGUL SYLLABLE SYUG..HANGUL SYLLABLE SYUH
      49829 <= t && t <= 49855 || // Lo  [27] HANGUL SYLLABLE SEUG..HANGUL SYLLABLE SEUH
      49857 <= t && t <= 49883 || // Lo  [27] HANGUL SYLLABLE SYIG..HANGUL SYLLABLE SYIH
      49885 <= t && t <= 49911 || // Lo  [27] HANGUL SYLLABLE SIG..HANGUL SYLLABLE SIH
      49913 <= t && t <= 49939 || // Lo  [27] HANGUL SYLLABLE SSAG..HANGUL SYLLABLE SSAH
      49941 <= t && t <= 49967 || // Lo  [27] HANGUL SYLLABLE SSAEG..HANGUL SYLLABLE SSAEH
      49969 <= t && t <= 49995 || // Lo  [27] HANGUL SYLLABLE SSYAG..HANGUL SYLLABLE SSYAH
      49997 <= t && t <= 50023 || // Lo  [27] HANGUL SYLLABLE SSYAEG..HANGUL SYLLABLE SSYAEH
      50025 <= t && t <= 50051 || // Lo  [27] HANGUL SYLLABLE SSEOG..HANGUL SYLLABLE SSEOH
      50053 <= t && t <= 50079 || // Lo  [27] HANGUL SYLLABLE SSEG..HANGUL SYLLABLE SSEH
      50081 <= t && t <= 50107 || // Lo  [27] HANGUL SYLLABLE SSYEOG..HANGUL SYLLABLE SSYEOH
      50109 <= t && t <= 50135 || // Lo  [27] HANGUL SYLLABLE SSYEG..HANGUL SYLLABLE SSYEH
      50137 <= t && t <= 50163 || // Lo  [27] HANGUL SYLLABLE SSOG..HANGUL SYLLABLE SSOH
      50165 <= t && t <= 50191 || // Lo  [27] HANGUL SYLLABLE SSWAG..HANGUL SYLLABLE SSWAH
      50193 <= t && t <= 50219 || // Lo  [27] HANGUL SYLLABLE SSWAEG..HANGUL SYLLABLE SSWAEH
      50221 <= t && t <= 50247 || // Lo  [27] HANGUL SYLLABLE SSOEG..HANGUL SYLLABLE SSOEH
      50249 <= t && t <= 50275 || // Lo  [27] HANGUL SYLLABLE SSYOG..HANGUL SYLLABLE SSYOH
      50277 <= t && t <= 50303 || // Lo  [27] HANGUL SYLLABLE SSUG..HANGUL SYLLABLE SSUH
      50305 <= t && t <= 50331 || // Lo  [27] HANGUL SYLLABLE SSWEOG..HANGUL SYLLABLE SSWEOH
      50333 <= t && t <= 50359 || // Lo  [27] HANGUL SYLLABLE SSWEG..HANGUL SYLLABLE SSWEH
      50361 <= t && t <= 50387 || // Lo  [27] HANGUL SYLLABLE SSWIG..HANGUL SYLLABLE SSWIH
      50389 <= t && t <= 50415 || // Lo  [27] HANGUL SYLLABLE SSYUG..HANGUL SYLLABLE SSYUH
      50417 <= t && t <= 50443 || // Lo  [27] HANGUL SYLLABLE SSEUG..HANGUL SYLLABLE SSEUH
      50445 <= t && t <= 50471 || // Lo  [27] HANGUL SYLLABLE SSYIG..HANGUL SYLLABLE SSYIH
      50473 <= t && t <= 50499 || // Lo  [27] HANGUL SYLLABLE SSIG..HANGUL SYLLABLE SSIH
      50501 <= t && t <= 50527 || // Lo  [27] HANGUL SYLLABLE AG..HANGUL SYLLABLE AH
      50529 <= t && t <= 50555 || // Lo  [27] HANGUL SYLLABLE AEG..HANGUL SYLLABLE AEH
      50557 <= t && t <= 50583 || // Lo  [27] HANGUL SYLLABLE YAG..HANGUL SYLLABLE YAH
      50585 <= t && t <= 50611 || // Lo  [27] HANGUL SYLLABLE YAEG..HANGUL SYLLABLE YAEH
      50613 <= t && t <= 50639 || // Lo  [27] HANGUL SYLLABLE EOG..HANGUL SYLLABLE EOH
      50641 <= t && t <= 50667 || // Lo  [27] HANGUL SYLLABLE EG..HANGUL SYLLABLE EH
      50669 <= t && t <= 50695 || // Lo  [27] HANGUL SYLLABLE YEOG..HANGUL SYLLABLE YEOH
      50697 <= t && t <= 50723 || // Lo  [27] HANGUL SYLLABLE YEG..HANGUL SYLLABLE YEH
      50725 <= t && t <= 50751 || // Lo  [27] HANGUL SYLLABLE OG..HANGUL SYLLABLE OH
      50753 <= t && t <= 50779 || // Lo  [27] HANGUL SYLLABLE WAG..HANGUL SYLLABLE WAH
      50781 <= t && t <= 50807 || // Lo  [27] HANGUL SYLLABLE WAEG..HANGUL SYLLABLE WAEH
      50809 <= t && t <= 50835 || // Lo  [27] HANGUL SYLLABLE OEG..HANGUL SYLLABLE OEH
      50837 <= t && t <= 50863 || // Lo  [27] HANGUL SYLLABLE YOG..HANGUL SYLLABLE YOH
      50865 <= t && t <= 50891 || // Lo  [27] HANGUL SYLLABLE UG..HANGUL SYLLABLE UH
      50893 <= t && t <= 50919 || // Lo  [27] HANGUL SYLLABLE WEOG..HANGUL SYLLABLE WEOH
      50921 <= t && t <= 50947 || // Lo  [27] HANGUL SYLLABLE WEG..HANGUL SYLLABLE WEH
      50949 <= t && t <= 50975 || // Lo  [27] HANGUL SYLLABLE WIG..HANGUL SYLLABLE WIH
      50977 <= t && t <= 51003 || // Lo  [27] HANGUL SYLLABLE YUG..HANGUL SYLLABLE YUH
      51005 <= t && t <= 51031 || // Lo  [27] HANGUL SYLLABLE EUG..HANGUL SYLLABLE EUH
      51033 <= t && t <= 51059 || // Lo  [27] HANGUL SYLLABLE YIG..HANGUL SYLLABLE YIH
      51061 <= t && t <= 51087 || // Lo  [27] HANGUL SYLLABLE IG..HANGUL SYLLABLE IH
      51089 <= t && t <= 51115 || // Lo  [27] HANGUL SYLLABLE JAG..HANGUL SYLLABLE JAH
      51117 <= t && t <= 51143 || // Lo  [27] HANGUL SYLLABLE JAEG..HANGUL SYLLABLE JAEH
      51145 <= t && t <= 51171 || // Lo  [27] HANGUL SYLLABLE JYAG..HANGUL SYLLABLE JYAH
      51173 <= t && t <= 51199 || // Lo  [27] HANGUL SYLLABLE JYAEG..HANGUL SYLLABLE JYAEH
      51201 <= t && t <= 51227 || // Lo  [27] HANGUL SYLLABLE JEOG..HANGUL SYLLABLE JEOH
      51229 <= t && t <= 51255 || // Lo  [27] HANGUL SYLLABLE JEG..HANGUL SYLLABLE JEH
      51257 <= t && t <= 51283 || // Lo  [27] HANGUL SYLLABLE JYEOG..HANGUL SYLLABLE JYEOH
      51285 <= t && t <= 51311 || // Lo  [27] HANGUL SYLLABLE JYEG..HANGUL SYLLABLE JYEH
      51313 <= t && t <= 51339 || // Lo  [27] HANGUL SYLLABLE JOG..HANGUL SYLLABLE JOH
      51341 <= t && t <= 51367 || // Lo  [27] HANGUL SYLLABLE JWAG..HANGUL SYLLABLE JWAH
      51369 <= t && t <= 51395 || // Lo  [27] HANGUL SYLLABLE JWAEG..HANGUL SYLLABLE JWAEH
      51397 <= t && t <= 51423 || // Lo  [27] HANGUL SYLLABLE JOEG..HANGUL SYLLABLE JOEH
      51425 <= t && t <= 51451 || // Lo  [27] HANGUL SYLLABLE JYOG..HANGUL SYLLABLE JYOH
      51453 <= t && t <= 51479 || // Lo  [27] HANGUL SYLLABLE JUG..HANGUL SYLLABLE JUH
      51481 <= t && t <= 51507 || // Lo  [27] HANGUL SYLLABLE JWEOG..HANGUL SYLLABLE JWEOH
      51509 <= t && t <= 51535 || // Lo  [27] HANGUL SYLLABLE JWEG..HANGUL SYLLABLE JWEH
      51537 <= t && t <= 51563 || // Lo  [27] HANGUL SYLLABLE JWIG..HANGUL SYLLABLE JWIH
      51565 <= t && t <= 51591 || // Lo  [27] HANGUL SYLLABLE JYUG..HANGUL SYLLABLE JYUH
      51593 <= t && t <= 51619 || // Lo  [27] HANGUL SYLLABLE JEUG..HANGUL SYLLABLE JEUH
      51621 <= t && t <= 51647 || // Lo  [27] HANGUL SYLLABLE JYIG..HANGUL SYLLABLE JYIH
      51649 <= t && t <= 51675 || // Lo  [27] HANGUL SYLLABLE JIG..HANGUL SYLLABLE JIH
      51677 <= t && t <= 51703 || // Lo  [27] HANGUL SYLLABLE JJAG..HANGUL SYLLABLE JJAH
      51705 <= t && t <= 51731 || // Lo  [27] HANGUL SYLLABLE JJAEG..HANGUL SYLLABLE JJAEH
      51733 <= t && t <= 51759 || // Lo  [27] HANGUL SYLLABLE JJYAG..HANGUL SYLLABLE JJYAH
      51761 <= t && t <= 51787 || // Lo  [27] HANGUL SYLLABLE JJYAEG..HANGUL SYLLABLE JJYAEH
      51789 <= t && t <= 51815 || // Lo  [27] HANGUL SYLLABLE JJEOG..HANGUL SYLLABLE JJEOH
      51817 <= t && t <= 51843 || // Lo  [27] HANGUL SYLLABLE JJEG..HANGUL SYLLABLE JJEH
      51845 <= t && t <= 51871 || // Lo  [27] HANGUL SYLLABLE JJYEOG..HANGUL SYLLABLE JJYEOH
      51873 <= t && t <= 51899 || // Lo  [27] HANGUL SYLLABLE JJYEG..HANGUL SYLLABLE JJYEH
      51901 <= t && t <= 51927 || // Lo  [27] HANGUL SYLLABLE JJOG..HANGUL SYLLABLE JJOH
      51929 <= t && t <= 51955 || // Lo  [27] HANGUL SYLLABLE JJWAG..HANGUL SYLLABLE JJWAH
      51957 <= t && t <= 51983 || // Lo  [27] HANGUL SYLLABLE JJWAEG..HANGUL SYLLABLE JJWAEH
      51985 <= t && t <= 52011 || // Lo  [27] HANGUL SYLLABLE JJOEG..HANGUL SYLLABLE JJOEH
      52013 <= t && t <= 52039 || // Lo  [27] HANGUL SYLLABLE JJYOG..HANGUL SYLLABLE JJYOH
      52041 <= t && t <= 52067 || // Lo  [27] HANGUL SYLLABLE JJUG..HANGUL SYLLABLE JJUH
      52069 <= t && t <= 52095 || // Lo  [27] HANGUL SYLLABLE JJWEOG..HANGUL SYLLABLE JJWEOH
      52097 <= t && t <= 52123 || // Lo  [27] HANGUL SYLLABLE JJWEG..HANGUL SYLLABLE JJWEH
      52125 <= t && t <= 52151 || // Lo  [27] HANGUL SYLLABLE JJWIG..HANGUL SYLLABLE JJWIH
      52153 <= t && t <= 52179 || // Lo  [27] HANGUL SYLLABLE JJYUG..HANGUL SYLLABLE JJYUH
      52181 <= t && t <= 52207 || // Lo  [27] HANGUL SYLLABLE JJEUG..HANGUL SYLLABLE JJEUH
      52209 <= t && t <= 52235 || // Lo  [27] HANGUL SYLLABLE JJYIG..HANGUL SYLLABLE JJYIH
      52237 <= t && t <= 52263 || // Lo  [27] HANGUL SYLLABLE JJIG..HANGUL SYLLABLE JJIH
      52265 <= t && t <= 52291 || // Lo  [27] HANGUL SYLLABLE CAG..HANGUL SYLLABLE CAH
      52293 <= t && t <= 52319 || // Lo  [27] HANGUL SYLLABLE CAEG..HANGUL SYLLABLE CAEH
      52321 <= t && t <= 52347 || // Lo  [27] HANGUL SYLLABLE CYAG..HANGUL SYLLABLE CYAH
      52349 <= t && t <= 52375 || // Lo  [27] HANGUL SYLLABLE CYAEG..HANGUL SYLLABLE CYAEH
      52377 <= t && t <= 52403 || // Lo  [27] HANGUL SYLLABLE CEOG..HANGUL SYLLABLE CEOH
      52405 <= t && t <= 52431 || // Lo  [27] HANGUL SYLLABLE CEG..HANGUL SYLLABLE CEH
      52433 <= t && t <= 52459 || // Lo  [27] HANGUL SYLLABLE CYEOG..HANGUL SYLLABLE CYEOH
      52461 <= t && t <= 52487 || // Lo  [27] HANGUL SYLLABLE CYEG..HANGUL SYLLABLE CYEH
      52489 <= t && t <= 52515 || // Lo  [27] HANGUL SYLLABLE COG..HANGUL SYLLABLE COH
      52517 <= t && t <= 52543 || // Lo  [27] HANGUL SYLLABLE CWAG..HANGUL SYLLABLE CWAH
      52545 <= t && t <= 52571 || // Lo  [27] HANGUL SYLLABLE CWAEG..HANGUL SYLLABLE CWAEH
      52573 <= t && t <= 52599 || // Lo  [27] HANGUL SYLLABLE COEG..HANGUL SYLLABLE COEH
      52601 <= t && t <= 52627 || // Lo  [27] HANGUL SYLLABLE CYOG..HANGUL SYLLABLE CYOH
      52629 <= t && t <= 52655 || // Lo  [27] HANGUL SYLLABLE CUG..HANGUL SYLLABLE CUH
      52657 <= t && t <= 52683 || // Lo  [27] HANGUL SYLLABLE CWEOG..HANGUL SYLLABLE CWEOH
      52685 <= t && t <= 52711 || // Lo  [27] HANGUL SYLLABLE CWEG..HANGUL SYLLABLE CWEH
      52713 <= t && t <= 52739 || // Lo  [27] HANGUL SYLLABLE CWIG..HANGUL SYLLABLE CWIH
      52741 <= t && t <= 52767 || // Lo  [27] HANGUL SYLLABLE CYUG..HANGUL SYLLABLE CYUH
      52769 <= t && t <= 52795 || // Lo  [27] HANGUL SYLLABLE CEUG..HANGUL SYLLABLE CEUH
      52797 <= t && t <= 52823 || // Lo  [27] HANGUL SYLLABLE CYIG..HANGUL SYLLABLE CYIH
      52825 <= t && t <= 52851 || // Lo  [27] HANGUL SYLLABLE CIG..HANGUL SYLLABLE CIH
      52853 <= t && t <= 52879 || // Lo  [27] HANGUL SYLLABLE KAG..HANGUL SYLLABLE KAH
      52881 <= t && t <= 52907 || // Lo  [27] HANGUL SYLLABLE KAEG..HANGUL SYLLABLE KAEH
      52909 <= t && t <= 52935 || // Lo  [27] HANGUL SYLLABLE KYAG..HANGUL SYLLABLE KYAH
      52937 <= t && t <= 52963 || // Lo  [27] HANGUL SYLLABLE KYAEG..HANGUL SYLLABLE KYAEH
      52965 <= t && t <= 52991 || // Lo  [27] HANGUL SYLLABLE KEOG..HANGUL SYLLABLE KEOH
      52993 <= t && t <= 53019 || // Lo  [27] HANGUL SYLLABLE KEG..HANGUL SYLLABLE KEH
      53021 <= t && t <= 53047 || // Lo  [27] HANGUL SYLLABLE KYEOG..HANGUL SYLLABLE KYEOH
      53049 <= t && t <= 53075 || // Lo  [27] HANGUL SYLLABLE KYEG..HANGUL SYLLABLE KYEH
      53077 <= t && t <= 53103 || // Lo  [27] HANGUL SYLLABLE KOG..HANGUL SYLLABLE KOH
      53105 <= t && t <= 53131 || // Lo  [27] HANGUL SYLLABLE KWAG..HANGUL SYLLABLE KWAH
      53133 <= t && t <= 53159 || // Lo  [27] HANGUL SYLLABLE KWAEG..HANGUL SYLLABLE KWAEH
      53161 <= t && t <= 53187 || // Lo  [27] HANGUL SYLLABLE KOEG..HANGUL SYLLABLE KOEH
      53189 <= t && t <= 53215 || // Lo  [27] HANGUL SYLLABLE KYOG..HANGUL SYLLABLE KYOH
      53217 <= t && t <= 53243 || // Lo  [27] HANGUL SYLLABLE KUG..HANGUL SYLLABLE KUH
      53245 <= t && t <= 53271 || // Lo  [27] HANGUL SYLLABLE KWEOG..HANGUL SYLLABLE KWEOH
      53273 <= t && t <= 53299 || // Lo  [27] HANGUL SYLLABLE KWEG..HANGUL SYLLABLE KWEH
      53301 <= t && t <= 53327 || // Lo  [27] HANGUL SYLLABLE KWIG..HANGUL SYLLABLE KWIH
      53329 <= t && t <= 53355 || // Lo  [27] HANGUL SYLLABLE KYUG..HANGUL SYLLABLE KYUH
      53357 <= t && t <= 53383 || // Lo  [27] HANGUL SYLLABLE KEUG..HANGUL SYLLABLE KEUH
      53385 <= t && t <= 53411 || // Lo  [27] HANGUL SYLLABLE KYIG..HANGUL SYLLABLE KYIH
      53413 <= t && t <= 53439 || // Lo  [27] HANGUL SYLLABLE KIG..HANGUL SYLLABLE KIH
      53441 <= t && t <= 53467 || // Lo  [27] HANGUL SYLLABLE TAG..HANGUL SYLLABLE TAH
      53469 <= t && t <= 53495 || // Lo  [27] HANGUL SYLLABLE TAEG..HANGUL SYLLABLE TAEH
      53497 <= t && t <= 53523 || // Lo  [27] HANGUL SYLLABLE TYAG..HANGUL SYLLABLE TYAH
      53525 <= t && t <= 53551 || // Lo  [27] HANGUL SYLLABLE TYAEG..HANGUL SYLLABLE TYAEH
      53553 <= t && t <= 53579 || // Lo  [27] HANGUL SYLLABLE TEOG..HANGUL SYLLABLE TEOH
      53581 <= t && t <= 53607 || // Lo  [27] HANGUL SYLLABLE TEG..HANGUL SYLLABLE TEH
      53609 <= t && t <= 53635 || // Lo  [27] HANGUL SYLLABLE TYEOG..HANGUL SYLLABLE TYEOH
      53637 <= t && t <= 53663 || // Lo  [27] HANGUL SYLLABLE TYEG..HANGUL SYLLABLE TYEH
      53665 <= t && t <= 53691 || // Lo  [27] HANGUL SYLLABLE TOG..HANGUL SYLLABLE TOH
      53693 <= t && t <= 53719 || // Lo  [27] HANGUL SYLLABLE TWAG..HANGUL SYLLABLE TWAH
      53721 <= t && t <= 53747 || // Lo  [27] HANGUL SYLLABLE TWAEG..HANGUL SYLLABLE TWAEH
      53749 <= t && t <= 53775 || // Lo  [27] HANGUL SYLLABLE TOEG..HANGUL SYLLABLE TOEH
      53777 <= t && t <= 53803 || // Lo  [27] HANGUL SYLLABLE TYOG..HANGUL SYLLABLE TYOH
      53805 <= t && t <= 53831 || // Lo  [27] HANGUL SYLLABLE TUG..HANGUL SYLLABLE TUH
      53833 <= t && t <= 53859 || // Lo  [27] HANGUL SYLLABLE TWEOG..HANGUL SYLLABLE TWEOH
      53861 <= t && t <= 53887 || // Lo  [27] HANGUL SYLLABLE TWEG..HANGUL SYLLABLE TWEH
      53889 <= t && t <= 53915 || // Lo  [27] HANGUL SYLLABLE TWIG..HANGUL SYLLABLE TWIH
      53917 <= t && t <= 53943 || // Lo  [27] HANGUL SYLLABLE TYUG..HANGUL SYLLABLE TYUH
      53945 <= t && t <= 53971 || // Lo  [27] HANGUL SYLLABLE TEUG..HANGUL SYLLABLE TEUH
      53973 <= t && t <= 53999 || // Lo  [27] HANGUL SYLLABLE TYIG..HANGUL SYLLABLE TYIH
      54001 <= t && t <= 54027 || // Lo  [27] HANGUL SYLLABLE TIG..HANGUL SYLLABLE TIH
      54029 <= t && t <= 54055 || // Lo  [27] HANGUL SYLLABLE PAG..HANGUL SYLLABLE PAH
      54057 <= t && t <= 54083 || // Lo  [27] HANGUL SYLLABLE PAEG..HANGUL SYLLABLE PAEH
      54085 <= t && t <= 54111 || // Lo  [27] HANGUL SYLLABLE PYAG..HANGUL SYLLABLE PYAH
      54113 <= t && t <= 54139 || // Lo  [27] HANGUL SYLLABLE PYAEG..HANGUL SYLLABLE PYAEH
      54141 <= t && t <= 54167 || // Lo  [27] HANGUL SYLLABLE PEOG..HANGUL SYLLABLE PEOH
      54169 <= t && t <= 54195 || // Lo  [27] HANGUL SYLLABLE PEG..HANGUL SYLLABLE PEH
      54197 <= t && t <= 54223 || // Lo  [27] HANGUL SYLLABLE PYEOG..HANGUL SYLLABLE PYEOH
      54225 <= t && t <= 54251 || // Lo  [27] HANGUL SYLLABLE PYEG..HANGUL SYLLABLE PYEH
      54253 <= t && t <= 54279 || // Lo  [27] HANGUL SYLLABLE POG..HANGUL SYLLABLE POH
      54281 <= t && t <= 54307 || // Lo  [27] HANGUL SYLLABLE PWAG..HANGUL SYLLABLE PWAH
      54309 <= t && t <= 54335 || // Lo  [27] HANGUL SYLLABLE PWAEG..HANGUL SYLLABLE PWAEH
      54337 <= t && t <= 54363 || // Lo  [27] HANGUL SYLLABLE POEG..HANGUL SYLLABLE POEH
      54365 <= t && t <= 54391 || // Lo  [27] HANGUL SYLLABLE PYOG..HANGUL SYLLABLE PYOH
      54393 <= t && t <= 54419 || // Lo  [27] HANGUL SYLLABLE PUG..HANGUL SYLLABLE PUH
      54421 <= t && t <= 54447 || // Lo  [27] HANGUL SYLLABLE PWEOG..HANGUL SYLLABLE PWEOH
      54449 <= t && t <= 54475 || // Lo  [27] HANGUL SYLLABLE PWEG..HANGUL SYLLABLE PWEH
      54477 <= t && t <= 54503 || // Lo  [27] HANGUL SYLLABLE PWIG..HANGUL SYLLABLE PWIH
      54505 <= t && t <= 54531 || // Lo  [27] HANGUL SYLLABLE PYUG..HANGUL SYLLABLE PYUH
      54533 <= t && t <= 54559 || // Lo  [27] HANGUL SYLLABLE PEUG..HANGUL SYLLABLE PEUH
      54561 <= t && t <= 54587 || // Lo  [27] HANGUL SYLLABLE PYIG..HANGUL SYLLABLE PYIH
      54589 <= t && t <= 54615 || // Lo  [27] HANGUL SYLLABLE PIG..HANGUL SYLLABLE PIH
      54617 <= t && t <= 54643 || // Lo  [27] HANGUL SYLLABLE HAG..HANGUL SYLLABLE HAH
      54645 <= t && t <= 54671 || // Lo  [27] HANGUL SYLLABLE HAEG..HANGUL SYLLABLE HAEH
      54673 <= t && t <= 54699 || // Lo  [27] HANGUL SYLLABLE HYAG..HANGUL SYLLABLE HYAH
      54701 <= t && t <= 54727 || // Lo  [27] HANGUL SYLLABLE HYAEG..HANGUL SYLLABLE HYAEH
      54729 <= t && t <= 54755 || // Lo  [27] HANGUL SYLLABLE HEOG..HANGUL SYLLABLE HEOH
      54757 <= t && t <= 54783 || // Lo  [27] HANGUL SYLLABLE HEG..HANGUL SYLLABLE HEH
      54785 <= t && t <= 54811 || // Lo  [27] HANGUL SYLLABLE HYEOG..HANGUL SYLLABLE HYEOH
      54813 <= t && t <= 54839 || // Lo  [27] HANGUL SYLLABLE HYEG..HANGUL SYLLABLE HYEH
      54841 <= t && t <= 54867 || // Lo  [27] HANGUL SYLLABLE HOG..HANGUL SYLLABLE HOH
      54869 <= t && t <= 54895 || // Lo  [27] HANGUL SYLLABLE HWAG..HANGUL SYLLABLE HWAH
      54897 <= t && t <= 54923 || // Lo  [27] HANGUL SYLLABLE HWAEG..HANGUL SYLLABLE HWAEH
      54925 <= t && t <= 54951 || // Lo  [27] HANGUL SYLLABLE HOEG..HANGUL SYLLABLE HOEH
      54953 <= t && t <= 54979 || // Lo  [27] HANGUL SYLLABLE HYOG..HANGUL SYLLABLE HYOH
      54981 <= t && t <= 55007 || // Lo  [27] HANGUL SYLLABLE HUG..HANGUL SYLLABLE HUH
      55009 <= t && t <= 55035 || // Lo  [27] HANGUL SYLLABLE HWEOG..HANGUL SYLLABLE HWEOH
      55037 <= t && t <= 55063 || // Lo  [27] HANGUL SYLLABLE HWEG..HANGUL SYLLABLE HWEH
      55065 <= t && t <= 55091 || // Lo  [27] HANGUL SYLLABLE HWIG..HANGUL SYLLABLE HWIH
      55093 <= t && t <= 55119 || // Lo  [27] HANGUL SYLLABLE HYUG..HANGUL SYLLABLE HYUH
      55121 <= t && t <= 55147 || // Lo  [27] HANGUL SYLLABLE HEUG..HANGUL SYLLABLE HEUH
      55149 <= t && t <= 55175 || // Lo  [27] HANGUL SYLLABLE HYIG..HANGUL SYLLABLE HYIH
      55177 <= t && t <= 55203 ? p : t == 9757 || // So       WHITE UP POINTING INDEX
      t == 9977 || // So       PERSON WITH BALL
      9994 <= t && t <= 9997 || // So   [4] RAISED FIST..WRITING HAND
      t == 127877 || // So       FATHER CHRISTMAS
      127938 <= t && t <= 127940 || // So   [3] SNOWBOARDER..SURFER
      t == 127943 || // So       HORSE RACING
      127946 <= t && t <= 127948 || // So   [3] SWIMMER..GOLFER
      128066 <= t && t <= 128067 || // So   [2] EAR..NOSE
      128070 <= t && t <= 128080 || // So  [11] WHITE UP POINTING BACKHAND INDEX..OPEN HANDS SIGN
      t == 128110 || // So       POLICE OFFICER
      128112 <= t && t <= 128120 || // So   [9] BRIDE WITH VEIL..PRINCESS
      t == 128124 || // So       BABY ANGEL
      128129 <= t && t <= 128131 || // So   [3] INFORMATION DESK PERSON..DANCER
      128133 <= t && t <= 128135 || // So   [3] NAIL POLISH..HAIRCUT
      t == 128170 || // So       FLEXED BICEPS
      128372 <= t && t <= 128373 || // So   [2] MAN IN BUSINESS SUIT LEVITATING..SLEUTH OR SPY
      t == 128378 || // So       MAN DANCING
      t == 128400 || // So       RAISED HAND WITH FINGERS SPLAYED
      128405 <= t && t <= 128406 || // So   [2] REVERSED HAND WITH MIDDLE FINGER EXTENDED..RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS
      128581 <= t && t <= 128583 || // So   [3] FACE WITH NO GOOD GESTURE..PERSON BOWING DEEPLY
      128587 <= t && t <= 128591 || // So   [5] HAPPY PERSON RAISING ONE HAND..PERSON WITH FOLDED HANDS
      t == 128675 || // So       ROWBOAT
      128692 <= t && t <= 128694 || // So   [3] BICYCLIST..PEDESTRIAN
      t == 128704 || // So       BATH
      t == 128716 || // So       SLEEPING ACCOMMODATION
      129304 <= t && t <= 129308 || // So   [5] SIGN OF THE HORNS..RIGHT-FACING FIST
      129310 <= t && t <= 129311 || // So   [2] HAND WITH INDEX AND MIDDLE FINGERS CROSSED..I LOVE YOU HAND SIGN
      t == 129318 || // So       FACE PALM
      129328 <= t && t <= 129337 || // So  [10] PREGNANT WOMAN..JUGGLING
      129341 <= t && t <= 129342 || // So   [2] WATER POLO..HANDBALL
      129489 <= t && t <= 129501 ? g : 127995 <= t && t <= 127999 ? b : t == 8205 ? x : t == 9792 || // So       FEMALE SIGN
      t == 9794 || // So       MALE SIGN
      9877 <= t && t <= 9878 || // So   [2] STAFF OF AESCULAPIUS..SCALES
      t == 9992 || // So       AIRPLANE
      t == 10084 || // So       HEAVY BLACK HEART
      t == 127752 || // So       RAINBOW
      t == 127806 || // So       EAR OF RICE
      t == 127859 || // So       COOKING
      t == 127891 || // So       GRADUATION CAP
      t == 127908 || // So       MICROPHONE
      t == 127912 || // So       ARTIST PALETTE
      t == 127979 || // So       SCHOOL
      t == 127981 || // So       FACTORY
      t == 128139 || // So       KISS MARK
      128187 <= t && t <= 128188 || // So   [2] PERSONAL COMPUTER..BRIEFCASE
      t == 128295 || // So       WRENCH
      t == 128300 || // So       MICROSCOPE
      t == 128488 || // So       LEFT SPEECH BUBBLE
      t == 128640 || // So       ROCKET
      t == 128658 ? B : 128102 <= t && t <= 128105 ? A : m;
    }
    return this;
  }
  e.exports && (e.exports = n);
})(td);
var XC = td.exports;
const YC = /* @__PURE__ */ GC(XC), ZC = new YC(), JC = (e = "") => ZC.countGraphemes(e);
function QC(e) {
  return e && typeof e == "object" && typeof e.then == "function";
}
const nd = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ no({
    type: { type: String, default: "text" },
    size: { type: String, default: "medium" },
    placeholder: { type: String, default: "请输入" },
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
  emits: /* @__PURE__ */ no(["blur", "input"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = Ql(e, "modelValue"), o = n;
    function i() {
      let s = r.value;
      if (e.trim) {
        const u = s.trim();
        r.value = u, s = u;
      }
      return s;
    }
    function a() {
      const s = i();
      o("blur", { value: s });
    }
    function l(s) {
      r.value = s;
      let u = s;
      e.trim && (u = u.trim()), o("input", { value: u });
    }
    return (s, u) => (dt(), Ct(Fe(ub), {
      "input-props": { autocomplete: "off" },
      type: e.type,
      size: e.size,
      "show-password-on": e.showPassword ? "click" : void 0,
      value: r.value,
      maxlength: e.maxlength,
      "show-count": e.showCount,
      "count-graphemes": e.maxlength != null && e.maxlength > 0 || e.showCount ? Fe(JC) : void 0,
      placeholder: e.placeholder,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      onInput: l,
      onBlur: a
    }, es({ _: 2 }, [
      e.prefixIcon ? {
        name: "prefix",
        fn: yt(() => [
          po(Fe(ca), Ld(Nd(e.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly"]));
  }
});
var sr = void 0, Wn = {}, Ei;
Wn.throttle = Ei = function(e, n, r, o) {
  var i, a = 0;
  typeof n != "boolean" && (o = r, r = n, n = sr);
  function l() {
    var s = this, u = +/* @__PURE__ */ new Date() - a, d = arguments;
    function c() {
      a = +/* @__PURE__ */ new Date(), r.apply(s, d);
    }
    function f() {
      i = sr;
    }
    o && !i && c(), i && clearTimeout(i), o === sr && u > e ? c() : n !== !0 && (i = setTimeout(o ? f : c, o === sr ? e - u : e));
  }
  return Wn.guid && (l.guid = r.guid = r.guid || Wn.guid++), l;
};
Wn.debounce = function(e, n, r) {
  return r === sr ? Ei(e, n, !1) : Ei(e, r, n !== !1);
};
const va = function(e, n, r) {
  return Wn.debounce(n || 300, r ?? !0, e);
}, uy = function(e, n, r) {
  return Wn.throttle(n || 300, r ?? !1, e);
}, ey = /* @__PURE__ */ Object.assign({
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
  setup(e, { expose: n, emit: r }) {
    const o = function() {
      const f = {};
      return e.model.forEach((p) => {
        p.slot || (f[p.field] = p.value);
      }), L(f);
    }();
    function i() {
      const f = {};
      return e.model.forEach((p) => {
        p.slot && (f[p.field] = Vd(p.value));
      }), { ...o.value, ...f };
    }
    const a = r, l = xa("form"), s = va(function() {
      document.activeElement && document.activeElement.blur(), l.value.validate((f) => {
        a("submit", { formData: i(), valid: !f || f.length === 0, errors: f });
      }).catch(() => null);
    }), u = xa("formItem");
    function d(f = "") {
      if (!f) {
        l.value.restoreValidation();
        return;
      }
      const p = u.value.find((m) => m.path === f);
      p && p.restoreValidation();
    }
    function c(f) {
      f && e.rules && e.rules[f] && (e.rules[f].trigger && e.rules[f].trigger.includes("input") || d(f));
    }
    return n({ restoreValidation: d }), (f, p) => (dt(), Ct(Fe(z1), {
      ref: "form",
      "show-label": e.showLabel,
      "label-placement": e.labelPlacement,
      "label-width": "auto",
      "label-align": e.labelPlacement === "left" ? "right" : "left",
      model: Fe(o),
      rules: e.rules,
      onSubmit: Hd(Fe(s), ["prevent"])
    }, {
      default: yt(() => [
        (dt(!0), ts(ht, null, Wd(e.model, (m) => (dt(), Ct(Fe(xC), {
          ref_for: !0,
          ref: "formItem",
          key: m.field,
          label: m.label,
          path: m.field,
          "feedback-class": e.feedbackSizeClass ? `p-form-item-feedback-${e.feedbackSizeClass}` : "",
          first: !0
        }, {
          default: yt(() => [
            !m.slot && m.type === "input" ? (dt(), Ct(jd(Fe(nd)), an({
              key: 0,
              modelValue: Fe(o)[m.field],
              "onUpdate:modelValue": (v) => Fe(o)[m.field] = v,
              ref_for: !0
            }, { disabled: e.disabled, readonly: e.readonly, ...m.props }, {
              onInput: (v) => c(m.field)
            }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : Vn(f.$slots, m.field, { key: 1 })
          ]),
          _: 2
        }, 1032, ["label", "path", "feedback-class"]))), 128)),
        Vn(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["show-label", "label-placement", "label-align", "model", "rules", "onSubmit"]));
  }
}), ty = /* @__PURE__ */ Object.assign({
  name: "PSelect",
  inheritAttrs: !1
}, {
  __name: "select",
  props: /* @__PURE__ */ no({
    size: { type: String, default: "medium" },
    placeholder: { type: String, default: "请选择" },
    disabled: { type: Boolean, default: !1 },
    options: { type: Array, default: () => [] },
    clearable: { type: Boolean, default: !0 },
    showCheckmark: { type: Boolean, default: !0 },
    valueField: { type: String, default: "value" },
    labelField: { type: String, default: "label" },
    width: { type: String, default: "" },
    emptyDescription: { type: String, default: "暂无数据" }
  }, {
    modelValue: { default: null },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ no(["update", "change"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = ns(), o = n, i = Ql(e, "modelValue"), a = va(function(l) {
      l !== i.value && et(() => {
        o("change", l);
      }), i.value = l, o("update", l);
    }, 300);
    return (l, s) => (dt(), Ct(Fe(Hb), {
      class: rs(`${Fe(r).class ? Fe(r).class : ""}`),
      style: qd(e.width ? `width:${e.width}` : ""),
      options: e.options,
      value: i.value,
      size: e.size,
      placeholder: e.placeholder,
      disabled: e.disabled,
      "value-field": e.valueField,
      "label-field": e.labelField,
      clearable: e.clearable,
      "show-checkmark": e.showCheckmark,
      "fallback-option": !1,
      "consistent-menu-width": !0,
      "virtual-scroll": !0,
      "onUpdate:value": Fe(a)
    }, {
      empty: yt(() => [
        po(Fe(Fu), {
          size: "small",
          description: e.emptyDescription
        }, null, 8, ["description"])
      ]),
      _: 1
    }, 8, ["class", "style", "options", "value", "size", "placeholder", "disabled", "value-field", "label-field", "clearable", "show-checkmark", "onUpdate:value"]));
  }
}), ki = /* @__PURE__ */ Object.assign({
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
    waiting: { type: Boolean, default: !1 },
    loadingWithoutText: { type: Boolean, default: !0 }
  },
  emits: ["click"],
  setup(e, { emit: n }) {
    const r = ns(), o = Kd(), i = n, a = va(function() {
      i("click");
    }, 300);
    return (l, s) => (dt(), Ct(Fe(Fr), {
      class: rs(`${Fe(r).class ? Fe(r).class : ""}`),
      "attr-type": e.attrType,
      focusable: !1,
      bordered: !0,
      keyboard: !1,
      block: e.block,
      size: e.size,
      type: e.type,
      loading: e.loading,
      ghost: e.ghost,
      secondary: e.secondary,
      text: e.text,
      disabled: e.disabled || e.waiting,
      "icon-placement": "left",
      onClick: Fe(a)
    }, es({
      default: yt(() => [
        !e.loading || e.loading && !e.loadingWithoutText ? (dt(), Ct(Fe(o).default, { key: 0 })) : ti("", !0)
      ]),
      _: 2
    }, [
      l.$slots.icon ? {
        name: "icon",
        fn: yt(() => [
          po(Fe(o).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "attr-type", "block", "size", "type", "loading", "ghost", "secondary", "text", "disabled", "onClick"]));
  }
}), ny = /* @__PURE__ */ Object.assign({
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
  setup(e) {
    return (n, r) => (dt(), Ct(Fe(KC), {
      "bottom-bordered": e.bottomBordered,
      bordered: e.bordered,
      "single-column": e.singleColumn,
      "single-line": e.singleLine,
      size: e.size,
      striped: e.striped
    }, {
      default: yt(() => [
        Vn(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["bottom-bordered", "bordered", "single-column", "single-line", "size", "striped"]));
  }
}), ry = ({ delay: e = 300, minPendingTime: n = 500, loadingValue: r = !1 } = {}) => {
  let o = 0, i = null;
  const a = () => {
    i && (clearTimeout(i), i = null);
  }, l = L(!!r), s = L(!!r);
  let u = null;
  const d = () => (l.value = !1, new Promise((c) => {
    u = c;
  }));
  return ze(
    l,
    (c) => {
      if (o === 0)
        o = (/* @__PURE__ */ new Date()).getTime(), a(), i = setTimeout(() => {
          s.value = c;
        }, e);
      else {
        if (a(), s.value !== c) {
          const p = (/* @__PURE__ */ new Date()).getTime() - o - e, m = p >= n ? 0 : n - p;
          i = setTimeout(() => {
            s.value = c, u && (u(), u = null);
          }, m);
        } else
          u && (u(), u = null);
        o = 0;
      }
    },
    { immediate: !!r, deep: !1 }
  ), os(() => {
    u = null, a();
  }), { loading: s, waiting: l, doneLoading: d };
}, oy = {
  __name: "dialog-action",
  props: {
    positiveText: { type: String, default: "" },
    negativeText: { type: String, default: "" },
    type: { type: String, default: "primary" },
    onClose: { type: Function, default: () => {
    } },
    onPositiveClick: { type: Function },
    onNegativeClick: { type: Function },
    onLoading: { type: Function }
  },
  setup(e) {
    const { loading: n, waiting: r, doneLoading: o } = ry();
    function i(s, u) {
      const d = s({
        done: function() {
          return o().then(() => {
            e.onLoading(!1);
          });
        }
      });
      if (d !== !1)
        if (QC(d)) {
          u === "positiveClick" && (r.value = !0, e.onLoading(!0));
          return;
        } else
          e.onClose();
    }
    function a() {
      r.value || (e.onNegativeClick ? i(e.onNegativeClick, "negativeClick") : e.onClose());
    }
    function l() {
      r.value || (e.onPositiveClick ? i(e.onPositiveClick, "positiveClick") : e.onClose());
    }
    return (s, u) => (dt(), ts(ht, null, [
      e.negativeText ? (dt(), Ct(Fe(ki), {
        key: 0,
        size: "small",
        type: "default",
        disabled: Fe(n),
        onClick: a
      }, {
        default: yt(() => [
          jn(ga(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["disabled"])) : ti("", !0),
      e.positiveText ? (dt(), Ct(Fe(ki), {
        key: 1,
        size: "small",
        type: e.type,
        loading: Fe(n),
        loadingWithoutText: !1,
        onClick: l
      }, {
        default: yt(() => [
          jn(ga(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type", "loading"])) : ti("", !0)
    ], 64));
  }
};
function iy(e) {
  return typeof e == "string" ? function() {
    return h("p", { innerHTML: e });
  } : Array.isArray(e) ? function() {
    return h(
      "div",
      e.map((n) => h("p", { innerHTML: n }))
    );
  } : e;
}
const dy = () => {
  let e = null, n = null, r = null, o = null;
  const i = A1(), a = (d = {}, c = { width: 430 }, f) => {
    const p = {
      autoFocus: !1,
      blockScroll: !0,
      bordered: !1,
      closable: !0,
      transformOrigin: "center",
      title: "提示",
      positiveText: "确定",
      negativeText: "取消",
      ...d,
      class: "p-dialog",
      titleClass: "p-dialog-title",
      "content-class": "p-dialog-content",
      actionClass: "p-dialog-action"
    };
    return p.closeOnEsc = !1, p.maskClosable = !1, p.showIcon = !0, p.iconPlacement = "left", p.style = "width: " + c.width + "px", f && (p.type = f), (p.positiveText || p.negativeText) && (p.action = function() {
      return h(oy, {
        positiveText: p.positiveText,
        negativeText: p.negativeText,
        type: f,
        onPositiveClick: p.onPositiveClick,
        onNegativeClick: p.onNegativeClick,
        onClose: function() {
          f === "success" && n ? (n.destroy(), n = null) : f === "warning" && r ? (r.destroy(), r = null) : f === "error" && o ? (o.destroy(), o = null) : e && (e.destroy(), e = null);
        },
        onLoading: (m) => {
          let v = null;
          f === "success" && n ? v = n : f === "warning" && r ? v = r : f === "error" && o ? v = o : e && (v = e), v.closable !== !1 && (v.class = m === !0 ? "p-dialog p-dialog-loading" : "p-dialog");
        }
      });
    }), p.content = iy(d.content), i.create(p);
  }, l = (d, c) => {
    d.negativeText == null && (d.negativeText = ""), d.positiveText == null && (d.positiveText = "我知道了"), d.closable == null && (d.closable = !1);
    const f = a(d, c, "success");
    return n = f, f;
  }, s = (d, c) => {
    d.negativeText == null && (d.negativeText = ""), d.positiveText == null && (d.positiveText = "我知道了"), d.closable == null && (d.closable = !1);
    const f = a(d, c, "warning");
    return r = f, f;
  }, u = (d, c) => {
    d.negativeText == null && (d.negativeText = ""), d.positiveText == null && (d.positiveText = "我知道了"), d.closable == null && (d.closable = !1);
    const f = a(d, c, "error");
    return o = f, f;
  };
  return os(() => {
    e && e.destroy(), n && n.destroy(), r && r.destroy(), o && o.destroy(), e = null, n = null, r = null, o = null;
  }), {
    open: function(d, c) {
      const f = a(d, c);
      return e = f, f;
    },
    success: l,
    warning: s,
    error: u
  };
}, cy = {
  install: (e, n = {}) => {
    const { prefix: r = "p" } = n;
    e.component(`${r}-practical`, UC), e.component(`${r}-form`, ey), e.component(`${r}-input`, nd), e.component(`${r}-select`, ty), e.component(`${r}-button`, ki), e.component(`${r}-table`, ny), e.component(`${r}-icon-wrapper`, kC), e.component(`${r}-icon`, ca), e.component(`${r}-input-group`, fb), e.component(`${r}-input-group-label`, pb), e.component(`${r}-popover`, Rr), e.component(`${r}-spin`, jC), e.component(`${r}-collapse`, kb), e.component(`${r}-collapse-item`, Rb), e.component(`${r}-dropdown`, u1), e.component(`${r}-popconfirm`, LC), e.component(`${r}-tooltip`, Xb), e.component(`${r}-loading-bar-provider`, OC);
  }
};
export {
  va as debounce,
  cy as default,
  uy as throttle,
  ry as useDelayLoading,
  dy as useDialog,
  sy as useLoadingBar
};
