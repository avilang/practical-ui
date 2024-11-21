import { createTextVNode as jn, Fragment as xt, Comment as Pi, isVNode as Ed, defineComponent as Q, inject as xe, getCurrentInstance as Ar, watch as ze, onBeforeUnmount as Ge, ref as N, readonly as nn, computed as R, onMounted as rt, onBeforeMount as wn, reactive as Kl, provide as Fe, withDirectives as jt, toRef as le, h, Teleport as zd, nextTick as Et, renderSlot as Vn, onActivated as Ul, onDeactivated as Gl, mergeProps as an, shallowRef as kd, watchEffect as nt, Transition as pt, TransitionGroup as Td, vShow as fr, cloneVNode as Xl, Text as Rd, markRaw as ha, openBlock as ut, createBlock as bt, unref as Se, withCtx as Ct, createVNode as fo, mergeModels as Qr, useModel as Yl, createSlots as Zl, normalizeProps as Od, guardReactiveProps as Md, useTemplateRef as pa, withModifiers as Id, createElementBlock as Jl, renderList as _d, resolveDynamicComponent as Ld, toValue as Nd, useAttrs as Ql, normalizeClass as es, normalizeStyle as Hd, useSlots as Wd, createCommentVNode as Jo, onScopeDispose as ts, toDisplayString as va } from "vue";
let eo = [];
const ns = /* @__PURE__ */ new WeakMap();
function jd() {
  eo.forEach((e) => e(...ns.get(e))), eo = [];
}
function rs(e, ...n) {
  ns.set(e, n), !eo.includes(e) && eo.push(e) === 1 && requestAnimationFrame(jd);
}
function Ht(e, n) {
  let { target: r } = e;
  for (; r; ) {
    if (r.dataset && r.dataset[n] !== void 0)
      return !0;
    r = r.parentElement;
  }
  return !1;
}
function qn(e) {
  return e.composedPath()[0] || null;
}
function hr(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function _n(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function $t(e, n) {
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
const xa = {
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
}, Xn = "^\\s*", Yn = "\\s*$", hn = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", pn = "([0-9A-Fa-f])", vn = "([0-9A-Fa-f]{2})", Vd = new RegExp(`${Xn}rgb\\s*\\(${hn},${hn},${hn}\\)${Yn}`), qd = new RegExp(`${Xn}rgba\\s*\\(${hn},${hn},${hn},${hn}\\)${Yn}`), Kd = new RegExp(`${Xn}#${pn}${pn}${pn}${Yn}`), Ud = new RegExp(`${Xn}#${vn}${vn}${vn}${Yn}`), Gd = new RegExp(`${Xn}#${pn}${pn}${pn}${pn}${Yn}`), Xd = new RegExp(`${Xn}#${vn}${vn}${vn}${vn}${Yn}`);
function it(e) {
  return parseInt(e, 16);
}
function bn(e) {
  try {
    let n;
    if (n = Ud.exec(e))
      return [it(n[1]), it(n[2]), it(n[3]), 1];
    if (n = Vd.exec(e))
      return [Je(n[1]), Je(n[5]), Je(n[9]), 1];
    if (n = qd.exec(e))
      return [
        Je(n[1]),
        Je(n[5]),
        Je(n[9]),
        lr(n[13])
      ];
    if (n = Kd.exec(e))
      return [
        it(n[1] + n[1]),
        it(n[2] + n[2]),
        it(n[3] + n[3]),
        1
      ];
    if (n = Xd.exec(e))
      return [
        it(n[1]),
        it(n[2]),
        it(n[3]),
        lr(it(n[4]) / 255)
      ];
    if (n = Gd.exec(e))
      return [
        it(n[1] + n[1]),
        it(n[2] + n[2]),
        it(n[3] + n[3]),
        lr(it(n[4] + n[4]) / 255)
      ];
    if (e in xa)
      return bn(xa[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (n) {
    throw n;
  }
}
function Yd(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function Qo(e, n, r, o) {
  return `rgba(${Je(e)}, ${Je(n)}, ${Je(r)}, ${Yd(o)})`;
}
function ko(e, n, r, o, i) {
  return Je((e * n * (1 - o) + r * o) / i);
}
function st(e, n) {
  Array.isArray(e) || (e = bn(e)), Array.isArray(n) || (n = bn(n));
  const r = e[3], o = n[3], i = lr(r + o - r * o);
  return Qo(ko(e[0], r, n[0], o, i), ko(e[1], r, n[1], o, i), ko(e[2], r, n[2], o, i), i);
}
function ge(e, n) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : bn(e);
  return n.alpha ? Qo(r, o, i, n.alpha) : Qo(r, o, i, a);
}
function Mr(e, n) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : bn(e), { lightness: l = 1, alpha: s = 1 } = n;
  return Zd([r * l, o * l, i * l, a * s]);
}
function lr(e) {
  const n = Math.round(Number(e) * 100) / 100;
  return n > 1 ? 1 : n < 0 ? 0 : n;
}
function Je(e) {
  const n = Math.round(Number(e));
  return n > 255 ? 255 : n < 0 ? 0 : n;
}
function Zd(e) {
  const [n, r, o] = e;
  return 3 in e ? `rgba(${Je(n)}, ${Je(r)}, ${Je(o)}, ${lr(e[3])})` : `rgba(${Je(n)}, ${Je(r)}, ${Je(o)}, 1)`;
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
function os(e, n = [], r) {
  const o = {};
  return Object.getOwnPropertyNames(e).forEach((a) => {
    n.includes(a) || (o[a] = e[a]);
  }), Object.assign(o, r);
}
function ei(e, n = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(jn(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        ei(o, n, r);
        return;
      }
      if (o.type === xt) {
        if (o.children === null) return;
        Array.isArray(o.children) && ei(o.children, n, r);
      } else {
        if (o.type === Pi && n) return;
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
function Kn(e) {
  return Object.keys(e);
}
function Qe(e, ...n) {
  return typeof e == "function" ? e(...n) : typeof e == "string" ? jn(e) : typeof e == "number" ? jn(String(e)) : null;
}
const ga = /* @__PURE__ */ new Set();
function tt(e, n) {
  const r = `[naive/${e}]: ${n}`;
  ga.has(r) || (ga.add(r), console.error(r));
}
function Vt(e, n) {
  console.error(`[naive/${e}]: ${n}`);
}
function ho(e, n) {
  throw new Error(`[naive/${e}]: ${n}`);
}
function ma(e) {
  switch (typeof e) {
    case "string":
      return e || void 0;
    case "number":
      return String(e);
    default:
      return;
  }
}
function ti(e, n = "default", r = void 0) {
  const o = e[n];
  if (!o)
    return Vt("getFirstSlotVNode", `slot[${n}] is empty`), null;
  const i = ei(o(r));
  return i.length === 1 ? i[0] : (Vt("getFirstSlotVNode", `slot[${n}] should have exactly one child`), null);
}
function Jd(e) {
  return (n) => {
    n ? e.value = n.$el : e.value = null;
  };
}
function ht(e) {
  return e.some((n) => Ed(n) ? !(n.type === Pi || n.type === xt && !ht(n.children)) : !0) ? e : null;
}
function Dt(e, n) {
  return e && ht(e()) || n();
}
function ni(e, n, r) {
  return e && ht(e(n)) || r(n);
}
function _e(e, n) {
  const r = e && ht(e());
  return n(r || null);
}
function Qd(e, n, r) {
  const o = e && ht(e(n));
  return r(o || null);
}
function ri(e) {
  return !(e && ht(e()));
}
function To(e) {
  const n = e.filter((r) => r !== void 0);
  if (n.length !== 0)
    return n.length === 1 ? n[0] : (r) => {
      e.forEach((o) => {
        o && o(r);
      });
    };
}
const oi = Q({
  render() {
    var e, n;
    return (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e);
  }
}), ec = /^(\d|\.)+$/, ba = /(\d|\.)+/;
function Wt(e, {
  c: n = 1,
  offset: r = 0,
  attachPx: o = !0
} = {}) {
  if (typeof e == "number") {
    const i = (e + r) * n;
    return i === 0 ? "0" : `${i}px`;
  } else if (typeof e == "string")
    if (ec.test(e)) {
      const i = (Number(e) + r) * n;
      return o ? i === 0 ? "0" : `${i}px` : `${i}`;
    } else {
      const i = ba.exec(e);
      return i ? e.replace(ba, String((Number(i[0]) + r) * n)) : e;
    }
  return e;
}
function to(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
function Ca(e) {
  const {
    left: n,
    right: r,
    top: o,
    bottom: i
  } = $t(e);
  return `${o} ${r} ${i} ${n}`;
}
function tc(e) {
  let n = 0;
  for (let r = 0; r < e.length; ++r)
    e[r] === "&" && ++n;
  return n;
}
const is = /\s*,(?![^(]*\))\s*/g, nc = /\s+/g;
function rc(e, n) {
  const r = [];
  return n.split(is).forEach((o) => {
    let i = tc(o);
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
function oc(e, n) {
  const r = [];
  return n.split(is).forEach((o) => {
    e.forEach((i) => {
      r.push((i && i + " ") + o);
    });
  }), r;
}
function ic(e) {
  let n = [""];
  return e.forEach((r) => {
    r = r && r.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    r && (r.includes("&") ? n = rc(n, r) : n = oc(n, r));
  }), n.join(", ").replace(nc, " ");
}
function ya(e) {
  if (!e)
    return;
  const n = e.parentElement;
  n && n.removeChild(e);
}
function po(e, n) {
  return (n ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function ac(e) {
  const n = document.createElement("style");
  return n.setAttribute("cssr-id", e), n;
}
function Ir(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const lc = /[A-Z]/g;
function as(e) {
  return e.replace(lc, (n) => "-" + n.toLowerCase());
}
function sc(e, n = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((r) => n + `  ${as(r[0])}: ${r[1]};`).join(`
`) + `
` + n + "}" : `: ${e};`;
}
function uc(e, n, r) {
  return typeof e == "function" ? e({
    context: n.context,
    props: r
  }) : e;
}
function wa(e, n, r, o) {
  if (!n)
    return "";
  const i = uc(n, r, o);
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
    s = as(s), u != null && l.push(`  ${s}${sc(u)}`);
  }), e && l.push("}"), l.join(`
`);
}
function ii(e, n, r) {
  e && e.forEach((o) => {
    if (Array.isArray(o))
      ii(o, n, r);
    else if (typeof o == "function") {
      const i = o(n);
      Array.isArray(i) ? ii(i, n, r) : i && r(i);
    } else o && r(o);
  });
}
function ls(e, n, r, o, i) {
  const a = e.$;
  let l = "";
  if (!a || typeof a == "string")
    Ir(a) ? l = a : n.push(a);
  else if (typeof a == "function") {
    const d = a({
      context: o.context,
      props: i
    });
    Ir(d) ? l = d : n.push(d);
  } else if (a.before && a.before(o.context), !a.$ || typeof a.$ == "string")
    Ir(a.$) ? l = a.$ : n.push(a.$);
  else if (a.$) {
    const d = a.$({
      context: o.context,
      props: i
    });
    Ir(d) ? l = d : n.push(d);
  }
  const s = ic(n), u = wa(s, e.props, o, i);
  l ? r.push(`${l} {`) : u.length && r.push(u), e.children && ii(e.children, {
    context: o.context,
    props: i
  }, (d) => {
    if (typeof d == "string") {
      const c = wa(s, { raw: d }, o, i);
      r.push(c);
    } else
      ls(d, n, r, o, i);
  }), n.pop(), l && r.push("}"), a && a.after && a.after(o.context);
}
function dc(e, n, r) {
  const o = [];
  return ls(e, [], o, n, r), o.join(`

`);
}
function vr(e) {
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
function cc(e, n, r, o) {
  const { els: i } = n;
  if (r === void 0)
    i.forEach(ya), n.els = [];
  else {
    const a = po(r, o);
    a && i.includes(a) && (ya(a), n.els = i.filter((l) => l !== a));
  }
}
function Ba(e, n) {
  e.push(n);
}
function fc(e, n, r, o, i, a, l, s, u) {
  let d;
  if (r === void 0 && (d = n.render(o), r = vr(d)), u) {
    u.adapter(r, d ?? n.render(o));
    return;
  }
  s === void 0 && (s = document.head);
  const c = po(r, s);
  if (c !== null && !a)
    return c;
  const f = c ?? ac(r);
  if (d === void 0 && (d = n.render(o)), f.textContent = d, c !== null)
    return c;
  if (l) {
    const v = s.querySelector(`meta[name="${l}"]`);
    if (v)
      return s.insertBefore(f, v), Ba(n.els, f), f;
  }
  return i ? s.insertBefore(f, s.querySelector("style, link")) : s.appendChild(f), Ba(n.els, f), f;
}
function hc(e) {
  return dc(this, this.instance, e);
}
function pc(e = {}) {
  const { id: n, ssr: r, props: o, head: i = !1, force: a = !1, anchorMetaName: l, parent: s } = e;
  return fc(this.instance, this, n, o, i, a, l, s, r);
}
function vc(e = {}) {
  const { id: n, parent: r } = e;
  cc(this.instance, this, n, r);
}
const _r = function(e, n, r, o) {
  return {
    instance: e,
    $: n,
    props: r,
    children: o,
    els: [],
    render: hc,
    mount: pc,
    unmount: vc
  };
}, xc = function(e, n, r, o) {
  return Array.isArray(n) ? _r(e, { $: null }, null, n) : Array.isArray(r) ? _r(e, n, null, r) : Array.isArray(o) ? _r(e, n, r, o) : _r(e, n, r, null);
};
function ss(e = {}) {
  const n = {
    c: (...r) => xc(n, ...r),
    use: (r, ...o) => r.install(n, ...o),
    find: po,
    context: {},
    config: e
  };
  return n;
}
function gc(e, n) {
  if (e === void 0)
    return !1;
  if (n) {
    const { context: { ids: r } } = n;
    return r.has(e);
  }
  return po(e) !== null;
}
function mc(e) {
  let n = ".", r = "__", o = "--", i;
  if (e) {
    let p = e.blockPrefix;
    p && (n = p), p = e.elementPrefix, p && (r = p), p = e.modifierPrefix, p && (o = p);
  }
  const a = {
    install(p) {
      i = p.c;
      const g = p.context;
      g.bem = {}, g.bem.b = null, g.bem.els = null;
    }
  };
  function l(p) {
    let g, b;
    return {
      before(x) {
        g = x.bem.b, b = x.bem.els, x.bem.els = null;
      },
      after(x) {
        x.bem.b = g, x.bem.els = b;
      },
      $({ context: x, props: B }) {
        return p = typeof p == "string" ? p : p({ context: x, props: B }), x.bem.b = p, `${(B == null ? void 0 : B.bPrefix) || n}${x.bem.b}`;
      }
    };
  }
  function s(p) {
    let g;
    return {
      before(b) {
        g = b.bem.els;
      },
      after(b) {
        b.bem.els = g;
      },
      $({ context: b, props: x }) {
        return p = typeof p == "string" ? p : p({ context: b, props: x }), b.bem.els = p.split(",").map((B) => B.trim()), b.bem.els.map((B) => `${(x == null ? void 0 : x.bPrefix) || n}${b.bem.b}${r}${B}`).join(", ");
      }
    };
  }
  function u(p) {
    return {
      $({ context: g, props: b }) {
        p = typeof p == "string" ? p : p({ context: g, props: b });
        const x = p.split(",").map((y) => y.trim());
        function B(y) {
          return x.map((A) => `&${(b == null ? void 0 : b.bPrefix) || n}${g.bem.b}${y !== void 0 ? `${r}${y}` : ""}${o}${A}`).join(", ");
        }
        const F = g.bem.els;
        if (F !== null) {
          if (process.env.NODE_ENV !== "production" && F.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${p}) is invalid, using modifier inside multiple elements is not allowed`);
          return B(F[0]);
        } else
          return B();
      }
    };
  }
  function d(p) {
    return {
      $({ context: g, props: b }) {
        p = typeof p == "string" ? p : p({ context: g, props: b });
        const x = g.bem.els;
        if (process.env.NODE_ENV !== "production" && x !== null && x.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${p}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(b == null ? void 0 : b.bPrefix) || n}${g.bem.b}${x !== null && x.length > 0 ? `${r}${x[0]}` : ""}${o}${p})`;
      }
    };
  }
  return Object.assign(a, {
    cB: (...p) => i(l(p[0]), p[1], p[2]),
    cE: (...p) => i(s(p[0]), p[1], p[2]),
    cM: (...p) => i(u(p[0]), p[1], p[2]),
    cNotM: (...p) => i(d(p[0]), p[1], p[2])
  }), a;
}
const bc = "n", xr = `.${bc}-`, Cc = "__", yc = "--", us = ss(), ds = mc({
  blockPrefix: xr,
  elementPrefix: Cc,
  modifierPrefix: yc
});
us.use(ds);
const {
  c: z,
  find: ZC
} = us, {
  cB: M,
  cE: E,
  cM: q,
  cNotM: He
} = ds;
function Ei(e) {
  return z(({
    props: {
      bPrefix: n
    }
  }) => `${n || xr}modal, ${n || xr}drawer`, [e]);
}
function cs(e) {
  return z(({
    props: {
      bPrefix: n
    }
  }) => `${n || xr}popover`, [e]);
}
function fs(e) {
  return z(({
    props: {
      bPrefix: n
    }
  }) => `&${n || xr}modal`, e);
}
const wc = (...e) => z(">", [M(...e)]);
function Y(e, n) {
  return e + (n === "default" ? "" : n.replace(/^[a-z]/, (r) => r.toUpperCase()));
}
let Ro;
function Bc() {
  return Ro === void 0 && (Ro = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Ro;
}
const $r = typeof document < "u" && typeof window < "u", hs = /* @__PURE__ */ new WeakSet();
function Sc(e) {
  hs.add(e);
}
function Fc(e) {
  return !hs.has(e);
}
function Ac(e, n, r) {
  var o;
  const i = xe(e, null);
  if (i === null) return;
  const a = (o = Ar()) === null || o === void 0 ? void 0 : o.proxy;
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
function $c(e, n, r) {
  const o = N(e.value);
  let i = null;
  return ze(e, (a) => {
    i !== null && window.clearTimeout(i), a === !0 ? r && !r.value ? o.value = !0 : i = window.setTimeout(() => {
      o.value = !0;
    }, n) : o.value = !1;
  }), o;
}
function ps(e) {
  const n = N(!!e.value);
  if (n.value)
    return nn(n);
  const r = ze(e, (o) => {
    o && (n.value = !0, r());
  });
  return nn(n);
}
function We(e) {
  const n = R(e), r = N(n.value);
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
function zi() {
  return Ar() !== null;
}
const ki = typeof window < "u";
let Ln, sr;
const Dc = () => {
  var e, n;
  Ln = ki ? (n = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || n === void 0 ? void 0 : n.ready : void 0, sr = !1, Ln !== void 0 ? Ln.then(() => {
    sr = !0;
  }) : sr = !0;
};
Dc();
function Pc(e) {
  if (sr)
    return;
  let n = !1;
  rt(() => {
    sr || Ln == null || Ln.then(() => {
      n || e();
    });
  }), Ge(() => {
    n = !0;
  });
}
function Yr(e) {
  return e.composedPath()[0];
}
const Ec = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function zc(e, n, r) {
  if (e === "mousemoveoutside") {
    const o = (i) => {
      n.contains(Yr(i)) || r(i);
    };
    return {
      mousemove: o,
      touchstart: o
    };
  } else if (e === "clickoutside") {
    let o = !1;
    const i = (l) => {
      o = !n.contains(Yr(l));
    }, a = (l) => {
      o && (n.contains(Yr(l)) || r(l));
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
function vs(e, n, r) {
  const o = Ec[e];
  let i = o.get(n);
  i === void 0 && o.set(n, i = /* @__PURE__ */ new WeakMap());
  let a = i.get(r);
  return a === void 0 && i.set(r, a = zc(e, n, r)), a;
}
function kc(e, n, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = vs(e, n, r);
    return Object.keys(i).forEach((a) => {
      Le(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function Tc(e, n, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = vs(e, n, r);
    return Object.keys(i).forEach((a) => {
      De(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function Rc() {
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
  function i(C, P, O) {
    const I = C[P];
    return C[P] = function() {
      return O.apply(C, arguments), I.apply(C, arguments);
    }, C;
  }
  function a(C, P) {
    C[P] = Event.prototype[P];
  }
  const l = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function u() {
    var C;
    return (C = l.get(this)) !== null && C !== void 0 ? C : null;
  }
  function d(C, P) {
    s !== void 0 && Object.defineProperty(C, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: P ?? s.get
    });
  }
  const c = {
    bubble: {},
    capture: {}
  }, f = {};
  function v() {
    const C = function(P) {
      const { type: O, eventPhase: I, bubbles: K } = P, H = Yr(P);
      if (I === 2)
        return;
      const t = I === 1 ? "capture" : "bubble";
      let S = H;
      const $ = [];
      for (; S === null && (S = window), $.push(S), S !== window; )
        S = S.parentNode || null;
      const _ = c.capture[O], k = c.bubble[O];
      if (i(P, "stopPropagation", r), i(P, "stopImmediatePropagation", o), d(P, u), t === "capture") {
        if (_ === void 0)
          return;
        for (let j = $.length - 1; j >= 0 && !e.has(P); --j) {
          const J = $[j], Z = _.get(J);
          if (Z !== void 0) {
            l.set(P, J);
            for (const ae of Z) {
              if (n.has(P))
                break;
              ae(P);
            }
          }
          if (j === 0 && !K && k !== void 0) {
            const ae = k.get(J);
            if (ae !== void 0)
              for (const W of ae) {
                if (n.has(P))
                  break;
                W(P);
              }
          }
        }
      } else if (t === "bubble") {
        if (k === void 0)
          return;
        for (let j = 0; j < $.length && !e.has(P); ++j) {
          const J = $[j], Z = k.get(J);
          if (Z !== void 0) {
            l.set(P, J);
            for (const ae of Z) {
              if (n.has(P))
                break;
              ae(P);
            }
          }
        }
      }
      a(P, "stopPropagation"), a(P, "stopImmediatePropagation"), d(P);
    };
    return C.displayName = "evtdUnifiedHandler", C;
  }
  function m() {
    const C = function(P) {
      const { type: O, eventPhase: I } = P;
      if (I !== 2)
        return;
      const K = f[O];
      K !== void 0 && K.forEach((H) => H(P));
    };
    return C.displayName = "evtdUnifiedWindowEventHandler", C;
  }
  const p = v(), g = m();
  function b(C, P) {
    const O = c[C];
    return O[P] === void 0 && (O[P] = /* @__PURE__ */ new Map(), window.addEventListener(P, p, C === "capture")), O[P];
  }
  function x(C) {
    return f[C] === void 0 && (f[C] = /* @__PURE__ */ new Set(), window.addEventListener(C, g)), f[C];
  }
  function B(C, P) {
    let O = C.get(P);
    return O === void 0 && C.set(P, O = /* @__PURE__ */ new Set()), O;
  }
  function F(C, P, O, I) {
    const K = c[P][O];
    if (K !== void 0) {
      const H = K.get(C);
      if (H !== void 0 && H.has(I))
        return !0;
    }
    return !1;
  }
  function y(C, P) {
    const O = f[C];
    return !!(O !== void 0 && O.has(P));
  }
  function A(C, P, O, I) {
    let K;
    if (typeof I == "object" && I.once === !0 ? K = (_) => {
      T(C, P, K, I), O(_);
    } : K = O, kc(C, P, K, I))
      return;
    const t = I === !0 || typeof I == "object" && I.capture === !0 ? "capture" : "bubble", S = b(t, C), $ = B(S, P);
    if ($.has(K) || $.add(K), P === window) {
      const _ = x(C);
      _.has(K) || _.add(K);
    }
  }
  function T(C, P, O, I) {
    if (Tc(C, P, O, I))
      return;
    const H = I === !0 || typeof I == "object" && I.capture === !0, t = H ? "capture" : "bubble", S = b(t, C), $ = B(S, P);
    if (P === window && !F(P, H ? "bubble" : "capture", C, O) && y(C, O)) {
      const k = f[C];
      k.delete(O), k.size === 0 && (window.removeEventListener(C, g), f[C] = void 0);
    }
    $.has(O) && $.delete(O), $.size === 0 && S.delete(P), S.size === 0 && (window.removeEventListener(C, p, t === "capture"), c[t][C] = void 0);
  }
  return {
    on: A,
    off: T
  };
}
const { on: Le, off: De } = Rc(), rr = N(null);
function Sa(e) {
  if (e.clientX > 0 || e.clientY > 0)
    rr.value = {
      x: e.clientX,
      y: e.clientY
    };
  else {
    const { target: n } = e;
    if (n instanceof Element) {
      const { left: r, top: o, width: i, height: a } = n.getBoundingClientRect();
      r > 0 || o > 0 ? rr.value = {
        x: r + i / 2,
        y: o + a / 2
      } : rr.value = { x: 0, y: 0 };
    } else
      rr.value = null;
  }
}
let Lr = 0, Fa = !0;
function xs() {
  if (!ki)
    return nn(N(null));
  Lr === 0 && Le("click", document, Sa, !0);
  const e = () => {
    Lr += 1;
  };
  return Fa && (Fa = zi()) ? (wn(e), Ge(() => {
    Lr -= 1, Lr === 0 && De("click", document, Sa, !0);
  })) : e(), nn(rr);
}
const Oc = N(void 0);
let Nr = 0;
function Aa() {
  Oc.value = Date.now();
}
let $a = !0;
function gs(e) {
  if (!ki)
    return nn(N(!1));
  const n = N(!1);
  let r = null;
  function o() {
    r !== null && window.clearTimeout(r);
  }
  function i() {
    o(), n.value = !0, r = window.setTimeout(() => {
      n.value = !1;
    }, e);
  }
  Nr === 0 && Le("click", window, Aa, !0);
  const a = () => {
    Nr += 1, Le("click", window, i, !0);
  };
  return $a && ($a = zi()) ? (wn(a), Ge(() => {
    Nr -= 1, Nr === 0 && De("click", window, Aa, !0), De("click", window, i, !0), o();
  })) : a(), nn(n);
}
function Un(e, n) {
  return ze(e, (r) => {
    r !== void 0 && (n.value = r);
  }), R(() => e.value === void 0 ? n.value : e.value);
}
function Dr() {
  const e = N(!1);
  return rt(() => {
    e.value = !0;
  }), nn(e);
}
function Ti(e, n) {
  return R(() => {
    for (const r of n)
      if (e[r] !== void 0)
        return e[r];
    return e[n[n.length - 1]];
  });
}
const Mc = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Ic() {
  return Mc;
}
function _c(e = {}, n) {
  const r = Kl({
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
        const { stop: f = !1, prevent: v = !1 } = c;
        f && u.stopPropagation(), v && u.preventDefault(), c.handler(u);
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
        const { stop: f = !1, prevent: v = !1 } = c;
        f && u.stopPropagation(), v && u.preventDefault(), c.handler(u);
      }
    });
  }, s = () => {
    (n === void 0 || n.value) && (Le("keydown", document, a), Le("keyup", document, l)), n !== void 0 && ze(n, (u) => {
      u ? (Le("keydown", document, a), Le("keyup", document, l)) : (De("keydown", document, a), De("keyup", document, l));
    });
  };
  return zi() ? (wn(s), Ge(() => {
    (n === void 0 || n.value) && (De("keydown", document, a), De("keyup", document, l));
  })) : s(), nn(r);
}
const Ri = "n-internal-select-menu", ms = "n-internal-select-menu-body", vo = "n-modal-body", Lc = "n-modal-provider", bs = "n-modal", xo = "n-drawer-body", Pr = "n-popover-body", Cs = "__disabled__";
function qt(e) {
  const n = xe(vo, null), r = xe(xo, null), o = xe(Pr, null), i = xe(ms, null), a = N();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const l = () => {
      a.value = document.fullscreenElement;
    };
    rt(() => {
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
    return s !== void 0 ? s === !1 ? Cs : s === !0 ? a.value || "body" : s : n != null && n.value ? (l = n.value.$el) !== null && l !== void 0 ? l : n.value : r != null && r.value ? r.value : o != null && o.value ? o.value : i != null && i.value ? i.value : s ?? (a.value || "body");
  });
}
qt.tdkey = Cs;
qt.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function ai(e, n, r = "default") {
  const o = n[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  return o();
}
function li(e, n = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(jn(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        li(o, n, r);
        return;
      }
      if (o.type === xt) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && li(o.children, n, r);
      } else o.type !== Pi && r.push(o);
    }
  }), r;
}
function Da(e, n, r = "default") {
  const o = n[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  const i = li(o());
  if (i.length === 1)
    return i[0];
  throw new Error(`[vueuc/${e}]: slot[${r}] should have exactly one child.`);
}
let Jt = null;
function ys() {
  if (Jt === null && (Jt = document.getElementById("v-binder-view-measurer"), Jt === null)) {
    Jt = document.createElement("div"), Jt.id = "v-binder-view-measurer";
    const { style: e } = Jt;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(Jt);
  }
  return Jt.getBoundingClientRect();
}
function Nc(e, n) {
  const r = ys();
  return {
    top: n,
    left: e,
    height: 0,
    width: 0,
    right: r.width - e,
    bottom: r.height - n
  };
}
function Oo(e) {
  const n = e.getBoundingClientRect(), r = ys();
  return {
    left: n.left - r.left,
    top: n.top - r.top,
    bottom: r.height + r.top - n.bottom,
    right: r.width + r.left - n.right,
    width: n.width,
    height: n.height
  };
}
function Hc(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function ws(e) {
  if (e === null)
    return null;
  const n = Hc(e);
  if (n === null)
    return null;
  if (n.nodeType === 9)
    return document;
  if (n.nodeType === 1) {
    const { overflow: r, overflowX: o, overflowY: i } = getComputedStyle(n);
    if (/(auto|scroll|overlay)/.test(r + i + o))
      return n;
  }
  return ws(n);
}
const Oi = Q({
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
    Fe("VBinder", (n = Ar()) === null || n === void 0 ? void 0 : n.proxy);
    const r = xe("VBinder", null), o = N(null), i = (x) => {
      o.value = x, r && e.syncTargetWithParent && r.setTargetRef(x);
    };
    let a = [];
    const l = () => {
      let x = o.value;
      for (; x = ws(x), x !== null; )
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
      rs(v);
    }, v = () => {
      u.forEach((x) => x());
    }, m = /* @__PURE__ */ new Set(), p = (x) => {
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
      addResizeListener: p,
      removeResizeListener: g
    };
  },
  render() {
    return ai("binder", this.$slots);
  }
}), Mi = Q({
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
    return e ? jt(Da("follower", this.$slots), [
      [n]
    ]) : Da("follower", this.$slots);
  }
}), Tn = "@@mmoContext", Wc = {
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
}, Rn = "@@coContext", gr = {
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
function jc(e, n) {
  console.error(`[vdirs/${e}]: ${n}`);
}
class Vc {
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
    o.has(n) ? o.delete(n) : r === void 0 && jc("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const Mo = new Vc(), On = "@@ziContext", Ii = {
  mounted(e, n) {
    const { value: r = {} } = n, { zIndex: o, enabled: i } = r;
    e[On] = {
      enabled: !!i,
      initialized: !1
    }, i && (Mo.ensureZIndex(e, o), e[On].initialized = !0);
  },
  updated(e, n) {
    const { value: r = {} } = n, { zIndex: o, enabled: i } = r, a = e[On].enabled;
    i && !a && (Mo.ensureZIndex(e, o), e[On].initialized = !0), e[On].enabled = !!i;
  },
  unmounted(e, n) {
    if (!e[On].initialized)
      return;
    const { value: r = {} } = n, { zIndex: o } = r;
    Mo.unregister(e, o);
  }
}, qc = "@css-render/vue3-ssr";
function Kc(e, n) {
  return `<style cssr-id="${e}">
${n}
</style>`;
}
function Uc(e, n, r) {
  const { styles: o, ids: i } = r;
  i.has(e) || o !== null && (i.add(e), o.push(Kc(e, n)));
}
const Gc = typeof document < "u";
function Bn() {
  if (Gc)
    return;
  const e = xe(qc, null);
  if (e !== null)
    return {
      adapter: (n, r) => Uc(n, r, e),
      context: e
    };
}
function Pa(e, n) {
  console.error(`[vueuc/${e}]: ${n}`);
}
const { c: tn } = ss(), _i = "vueuc-style";
function Ea(e) {
  return e & -e;
}
class Bs {
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
      i[n] += r, n += Ea(n);
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
      a += r[n], n -= Ea(n);
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
function za(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const Ss = Q({
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
      showTeleport: ps(le(e, "show")),
      mergedTo: R(() => {
        const { to: n } = e;
        return n ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? ai("lazy-teleport", this.$slots) : h(zd, {
      disabled: this.disabled,
      to: this.mergedTo
    }, ai("lazy-teleport", this.$slots)) : null;
  }
}), Hr = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, ka = {
  start: "end",
  center: "center",
  end: "start"
}, Io = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, Xc = {
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
}, Yc = {
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
}, Zc = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, Ta = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, Ra = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Jc(e, n, r, o, i, a) {
  if (!i || a)
    return { placement: e, top: 0, left: 0 };
  const [l, s] = e.split("-");
  let u = s ?? "center", d = {
    top: 0,
    left: 0
  };
  const c = (m, p, g) => {
    let b = 0, x = 0;
    const B = r[m] - n[p] - n[m];
    return B > 0 && o && (g ? x = Ta[p] ? B : -B : b = Ta[p] ? B : -B), {
      left: b,
      top: x
    };
  }, f = l === "left" || l === "right";
  if (u !== "center") {
    const m = Zc[e], p = Hr[m], g = Io[m];
    if (r[g] > n[g]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        n[m] + n[g] < r[g]
      ) {
        const b = (r[g] - n[g]) / 2;
        n[m] < b || n[p] < b ? n[m] < n[p] ? (u = ka[s], d = c(g, p, f)) : d = c(g, m, f) : u = "center";
      }
    } else r[g] < n[g] && n[p] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    n[m] > n[p] && (u = ka[s]);
  } else {
    const m = l === "bottom" || l === "top" ? "left" : "top", p = Hr[m], g = Io[m], b = (r[g] - n[g]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (n[m] < b || n[p] < b) && (n[m] > n[p] ? (u = Ra[m], d = c(g, m, f)) : (u = Ra[p], d = c(g, p, f)));
  }
  let v = l;
  return (
    // space is not enough
    n[l] < r[Io[l]] && // opposite position's space is larger
    n[l] < n[Hr[l]] && (v = Hr[l]), {
      placement: u !== "center" ? `${v}-${u}` : v,
      left: d.left,
      top: d.top
    }
  );
}
function Qc(e, n) {
  return n ? Yc[e] : Xc[e];
}
function ef(e, n, r, o, i, a) {
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
const tf = tn([
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
]), Li = Q({
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
    const n = xe("VBinder"), r = We(() => e.enabled !== void 0 ? e.enabled : e.show), o = N(null), i = N(null), a = () => {
      const { syncTrigger: v } = e;
      v.includes("scroll") && n.addScrollListener(u), v.includes("resize") && n.addResizeListener(u);
    }, l = () => {
      n.removeScrollListener(u), n.removeResizeListener(u);
    };
    rt(() => {
      r.value && (u(), a());
    });
    const s = Bn();
    tf.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: _i,
      ssr: s
    }), Ge(() => {
      l();
    }), Pc(() => {
      r.value && u();
    });
    const u = () => {
      if (!r.value)
        return;
      const v = o.value;
      if (v === null)
        return;
      const m = n.targetRef, { x: p, y: g, overlap: b } = e, x = p !== void 0 && g !== void 0 ? Nc(p, g) : Oo(m);
      v.style.setProperty("--v-target-width", `${Math.round(x.width)}px`), v.style.setProperty("--v-target-height", `${Math.round(x.height)}px`);
      const { width: B, minWidth: F, placement: y, internalShift: A, flip: T } = e;
      v.setAttribute("v-placement", y), b ? v.setAttribute("v-overlap", "") : v.removeAttribute("v-overlap");
      const { style: C } = v;
      B === "target" ? C.width = `${x.width}px` : B !== void 0 ? C.width = B : C.width = "", F === "target" ? C.minWidth = `${x.width}px` : F !== void 0 ? C.minWidth = F : C.minWidth = "";
      const P = Oo(v), O = Oo(i.value), { left: I, top: K, placement: H } = Jc(y, x, P, A, T, b), t = Qc(H, b), { left: S, top: $, transform: _ } = ef(H, O, x, K, I, b);
      v.setAttribute("v-placement", H), v.style.setProperty("--v-offset-left", `${Math.round(I)}px`), v.style.setProperty("--v-offset-top", `${Math.round(K)}px`), v.style.transform = `translateX(${S}) translateY(${$}) ${_}`, v.style.setProperty("--v-transform-origin", t), v.style.transformOrigin = t;
    };
    ze(r, (v) => {
      v ? (a(), d()) : l();
    });
    const d = () => {
      Et().then(u).catch((v) => console.error(v));
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
      ze(le(e, v), u);
    }), ["teleportDisabled"].forEach((v) => {
      ze(le(e, v), d);
    }), ze(le(e, "syncTrigger"), (v) => {
      v.includes("resize") ? n.addResizeListener(u) : n.removeResizeListener(u), v.includes("scroll") ? n.addScrollListener(u) : n.removeScrollListener(u);
    });
    const c = Dr(), f = We(() => {
      const { to: v } = e;
      if (v !== void 0)
        return v;
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
    return h(Ss, {
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
        return this.zindexable ? jt(r, [
          [
            Ii,
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
var gn = [], nf = function() {
  return gn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, rf = function() {
  return gn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Oa = "ResizeObserver loop completed with undelivered notifications.", of = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Oa
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Oa), window.dispatchEvent(e);
}, mr;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(mr || (mr = {}));
var mn = function(e) {
  return Object.freeze(e);
}, af = /* @__PURE__ */ function() {
  function e(n, r) {
    this.inlineSize = n, this.blockSize = r, mn(this);
  }
  return e;
}(), Fs = function() {
  function e(n, r, o, i) {
    return this.x = n, this.y = r, this.width = o, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, mn(this);
  }
  return e.prototype.toJSON = function() {
    var n = this, r = n.x, o = n.y, i = n.top, a = n.right, l = n.bottom, s = n.left, u = n.width, d = n.height;
    return { x: r, y: o, top: i, right: a, bottom: l, left: s, width: u, height: d };
  }, e.fromRect = function(n) {
    return new e(n.x, n.y, n.width, n.height);
  }, e;
}(), Ni = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, As = function(e) {
  if (Ni(e)) {
    var n = e.getBBox(), r = n.width, o = n.height;
    return !r && !o;
  }
  var i = e, a = i.offsetWidth, l = i.offsetHeight;
  return !(a || l || e.getClientRects().length);
}, Ma = function(e) {
  var n;
  if (e instanceof Element)
    return !0;
  var r = (n = e == null ? void 0 : e.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
  return !!(r && e instanceof r.Element);
}, lf = function(e) {
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
}, ur = typeof window < "u" ? window : {}, Wr = /* @__PURE__ */ new WeakMap(), Ia = /auto|scroll/, sf = /^tb|vertical/, uf = /msie|trident/i.test(ur.navigator && ur.navigator.userAgent), Bt = function(e) {
  return parseFloat(e || "0");
}, Nn = function(e, n, r) {
  return e === void 0 && (e = 0), n === void 0 && (n = 0), r === void 0 && (r = !1), new af((r ? n : e) || 0, (r ? e : n) || 0);
}, _a = mn({
  devicePixelContentBoxSize: Nn(),
  borderBoxSize: Nn(),
  contentBoxSize: Nn(),
  contentRect: new Fs(0, 0, 0, 0)
}), $s = function(e, n) {
  if (n === void 0 && (n = !1), Wr.has(e) && !n)
    return Wr.get(e);
  if (As(e))
    return Wr.set(e, _a), _a;
  var r = getComputedStyle(e), o = Ni(e) && e.ownerSVGElement && e.getBBox(), i = !uf && r.boxSizing === "border-box", a = sf.test(r.writingMode || ""), l = !o && Ia.test(r.overflowY || ""), s = !o && Ia.test(r.overflowX || ""), u = o ? 0 : Bt(r.paddingTop), d = o ? 0 : Bt(r.paddingRight), c = o ? 0 : Bt(r.paddingBottom), f = o ? 0 : Bt(r.paddingLeft), v = o ? 0 : Bt(r.borderTopWidth), m = o ? 0 : Bt(r.borderRightWidth), p = o ? 0 : Bt(r.borderBottomWidth), g = o ? 0 : Bt(r.borderLeftWidth), b = f + d, x = u + c, B = g + m, F = v + p, y = s ? e.offsetHeight - F - e.clientHeight : 0, A = l ? e.offsetWidth - B - e.clientWidth : 0, T = i ? b + B : 0, C = i ? x + F : 0, P = o ? o.width : Bt(r.width) - T - A, O = o ? o.height : Bt(r.height) - C - y, I = P + b + A + B, K = O + x + y + F, H = mn({
    devicePixelContentBoxSize: Nn(Math.round(P * devicePixelRatio), Math.round(O * devicePixelRatio), a),
    borderBoxSize: Nn(I, K, a),
    contentBoxSize: Nn(P, O, a),
    contentRect: new Fs(f, u, P, O)
  });
  return Wr.set(e, H), H;
}, Ds = function(e, n, r) {
  var o = $s(e, r), i = o.borderBoxSize, a = o.contentBoxSize, l = o.devicePixelContentBoxSize;
  switch (n) {
    case mr.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case mr.BORDER_BOX:
      return i;
    default:
      return a;
  }
}, df = /* @__PURE__ */ function() {
  function e(n) {
    var r = $s(n);
    this.target = n, this.contentRect = r.contentRect, this.borderBoxSize = mn([r.borderBoxSize]), this.contentBoxSize = mn([r.contentBoxSize]), this.devicePixelContentBoxSize = mn([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Ps = function(e) {
  if (As(e))
    return 1 / 0;
  for (var n = 0, r = e.parentNode; r; )
    n += 1, r = r.parentNode;
  return n;
}, cf = function() {
  var e = 1 / 0, n = [];
  gn.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(d) {
        var c = new df(d.target), f = Ps(d.target);
        s.push(c), d.lastReportedSize = Ds(d.target, d.observedBox), f < e && (e = f);
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
}, La = function(e) {
  gn.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(i) {
      i.isActive() && (Ps(i.target) > e ? r.activeTargets.push(i) : r.skippedTargets.push(i));
    });
  });
}, ff = function() {
  var e = 0;
  for (La(e); nf(); )
    e = cf(), La(e);
  return rf() && of(), e > 0;
}, _o, Es = [], hf = function() {
  return Es.splice(0).forEach(function(e) {
    return e();
  });
}, pf = function(e) {
  if (!_o) {
    var n = 0, r = document.createTextNode(""), o = { characterData: !0 };
    new MutationObserver(function() {
      return hf();
    }).observe(r, o), _o = function() {
      r.textContent = "".concat(n ? n-- : n++);
    };
  }
  Es.push(e), _o();
}, vf = function(e) {
  pf(function() {
    requestAnimationFrame(e);
  });
}, Zr = 0, xf = function() {
  return !!Zr;
}, gf = 250, mf = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Na = [
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
], Ha = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Lo = !1, bf = function() {
  function e() {
    var n = this;
    this.stopped = !0, this.listener = function() {
      return n.schedule();
    };
  }
  return e.prototype.run = function(n) {
    var r = this;
    if (n === void 0 && (n = gf), !Lo) {
      Lo = !0;
      var o = Ha(n);
      vf(function() {
        var i = !1;
        try {
          i = ff();
        } finally {
          if (Lo = !1, n = o - Ha(), !xf())
            return;
          i ? r.run(1e3) : n > 0 ? r.run(n) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var n = this, r = function() {
      return n.observer && n.observer.observe(document.body, mf);
    };
    document.body ? r() : ur.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var n = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Na.forEach(function(r) {
      return ur.addEventListener(r, n.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var n = this;
    this.stopped || (this.observer && this.observer.disconnect(), Na.forEach(function(r) {
      return ur.removeEventListener(r, n.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), si = new bf(), Wa = function(e) {
  !Zr && e > 0 && si.start(), Zr += e, !Zr && si.stop();
}, Cf = function(e) {
  return !Ni(e) && !lf(e) && getComputedStyle(e).display === "inline";
}, yf = function() {
  function e(n, r) {
    this.target = n, this.observedBox = r || mr.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var n = Ds(this.target, this.observedBox, !0);
    return Cf(this.target) && (this.lastReportedSize = n), this.lastReportedSize.inlineSize !== n.inlineSize || this.lastReportedSize.blockSize !== n.blockSize;
  }, e;
}(), wf = /* @__PURE__ */ function() {
  function e(n, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = n, this.callback = r;
  }
  return e;
}(), jr = /* @__PURE__ */ new WeakMap(), ja = function(e, n) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === n)
      return r;
  return -1;
}, Vr = function() {
  function e() {
  }
  return e.connect = function(n, r) {
    var o = new wf(n, r);
    jr.set(n, o);
  }, e.observe = function(n, r, o) {
    var i = jr.get(n), a = i.observationTargets.length === 0;
    ja(i.observationTargets, r) < 0 && (a && gn.push(i), i.observationTargets.push(new yf(r, o && o.box)), Wa(1), si.schedule());
  }, e.unobserve = function(n, r) {
    var o = jr.get(n), i = ja(o.observationTargets, r), a = o.observationTargets.length === 1;
    i >= 0 && (a && gn.splice(gn.indexOf(o), 1), o.observationTargets.splice(i, 1), Wa(-1));
  }, e.disconnect = function(n) {
    var r = this, o = jr.get(n);
    o.observationTargets.slice().forEach(function(i) {
      return r.unobserve(n, i.target);
    }), o.activeTargets.splice(0, o.activeTargets.length);
  }, e;
}(), Bf = function() {
  function e(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof n != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Vr.connect(this, n);
  }
  return e.prototype.observe = function(n, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ma(n))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Vr.observe(this, n, r);
  }, e.prototype.unobserve = function(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ma(n))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Vr.unobserve(this, n);
  }, e.prototype.disconnect = function() {
    Vr.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class Sf {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Bf)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const no = new Sf(), br = Q({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let n = !1;
    const r = Ar().proxy;
    function o(i) {
      const { onResize: a } = e;
      a !== void 0 && a(i);
    }
    rt(() => {
      const i = r.$el;
      if (i === void 0) {
        Pa("resize-observer", "$el does not exist.");
        return;
      }
      if (i.nextElementSibling !== i.nextSibling && i.nodeType === 3 && i.nodeValue !== "") {
        Pa("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      i.nextElementSibling !== null && (no.registerHandler(i.nextElementSibling, o), n = !0);
    }), Ge(() => {
      n && no.unregisterHandler(r.$el.nextElementSibling);
    });
  },
  render() {
    return Vn(this.$slots, "default");
  }
});
let qr;
function Ff() {
  return typeof document > "u" ? !1 : (qr === void 0 && ("matchMedia" in window ? qr = window.matchMedia("(pointer:coarse)").matches : qr = !1), qr);
}
let No;
function Va() {
  return typeof document > "u" ? 1 : (No === void 0 && (No = "chrome" in window ? window.devicePixelRatio : 1), No);
}
const zs = "VVirtualListXScroll";
function Af({ columnsRef: e, renderColRef: n, renderItemWithColsRef: r }) {
  const o = N(0), i = N(0), a = R(() => {
    const d = e.value;
    if (d.length === 0)
      return null;
    const c = new Bs(d.length, 0);
    return d.forEach((f, v) => {
      c.add(v, f.width);
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
  return Fe(zs, {
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
const qa = Q({
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
      xe(zs)
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
}), $f = tn(".v-vl", {
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
]), Df = Q({
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
    $f.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: _i,
      ssr: n
    }), rt(() => {
      const { defaultScrollIndex: t, defaultScrollKey: S } = e;
      t != null ? b({ index: t }) : S != null && b({ key: S });
    });
    let r = !1, o = !1;
    Ul(() => {
      if (r = !1, !o) {
        o = !0;
        return;
      }
      b({ top: m.value, left: l.value });
    }), Gl(() => {
      r = !0, o || (o = !0);
    });
    const i = We(() => {
      if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0)
        return;
      let t = 0;
      return e.columns.forEach((S) => {
        t += S.width;
      }), t;
    }), a = R(() => {
      const t = /* @__PURE__ */ new Map(), { keyField: S } = e;
      return e.items.forEach(($, _) => {
        t.set($[S], _);
      }), t;
    }), { scrollLeftRef: l, listWidthRef: s } = Af({
      columnsRef: le(e, "columns"),
      renderColRef: le(e, "renderCol"),
      renderItemWithColsRef: le(e, "renderItemWithCols")
    }), u = N(null), d = N(void 0), c = /* @__PURE__ */ new Map(), f = R(() => {
      const { items: t, itemSize: S, keyField: $ } = e, _ = new Bs(t.length, S);
      return t.forEach((k, j) => {
        const J = k[$], Z = c.get(J);
        Z !== void 0 && _.add(j, Z);
      }), _;
    }), v = N(0), m = N(0), p = We(() => Math.max(f.value.getBound(m.value - hr(e.paddingTop)) - 1, 0)), g = R(() => {
      const { value: t } = d;
      if (t === void 0)
        return [];
      const { items: S, itemSize: $ } = e, _ = p.value, k = Math.min(_ + Math.ceil(t / $ + 1), S.length - 1), j = [];
      for (let J = _; J <= k; ++J)
        j.push(S[J]);
      return j;
    }), b = (t, S) => {
      if (typeof t == "number") {
        y(t, S, "auto");
        return;
      }
      const { left: $, top: _, index: k, key: j, position: J, behavior: Z, debounce: ae = !0 } = t;
      if ($ !== void 0 || _ !== void 0)
        y($, _, Z);
      else if (k !== void 0)
        F(k, Z, ae);
      else if (j !== void 0) {
        const W = a.value.get(j);
        W !== void 0 && F(W, Z, ae);
      } else J === "bottom" ? y(0, Number.MAX_SAFE_INTEGER, Z) : J === "top" && y(0, 0, Z);
    };
    let x, B = null;
    function F(t, S, $) {
      const { value: _ } = f, k = _.sum(t) + hr(e.paddingTop);
      if (!$)
        u.value.scrollTo({
          left: 0,
          top: k,
          behavior: S
        });
      else {
        x = t, B !== null && window.clearTimeout(B), B = window.setTimeout(() => {
          x = void 0, B = null;
        }, 16);
        const { scrollTop: j, offsetHeight: J } = u.value;
        if (k > j) {
          const Z = _.get(t);
          k + Z <= j + J || u.value.scrollTo({
            left: 0,
            top: k + Z - J,
            behavior: S
          });
        } else
          u.value.scrollTo({
            left: 0,
            top: k,
            behavior: S
          });
      }
    }
    function y(t, S, $) {
      u.value.scrollTo({
        left: t,
        top: S,
        behavior: $
      });
    }
    function A(t, S) {
      var $, _, k;
      if (r || e.ignoreItemResize || H(S.target))
        return;
      const { value: j } = f, J = a.value.get(t), Z = j.get(J), ae = (k = (_ = ($ = S.borderBoxSize) === null || $ === void 0 ? void 0 : $[0]) === null || _ === void 0 ? void 0 : _.blockSize) !== null && k !== void 0 ? k : S.contentRect.height;
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
          const we = j.sum(J);
          ne.scrollTop > we && ne.scrollBy(0, X);
        } else if (J < x)
          ne.scrollBy(0, X);
        else if (J === x) {
          const we = j.sum(J);
          ae + we > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          ne.scrollTop + ne.offsetHeight && ne.scrollBy(0, X);
        }
        K();
      }
      v.value++;
    }
    const T = !Ff();
    let C = !1;
    function P(t) {
      var S;
      (S = e.onScroll) === null || S === void 0 || S.call(e, t), (!T || !C) && K();
    }
    function O(t) {
      var S;
      if ((S = e.onWheel) === null || S === void 0 || S.call(e, t), T) {
        const $ = u.value;
        if ($ != null) {
          if (t.deltaX === 0 && ($.scrollTop === 0 && t.deltaY <= 0 || $.scrollTop + $.offsetHeight >= $.scrollHeight && t.deltaY >= 0))
            return;
          t.preventDefault(), $.scrollTop += t.deltaY / Va(), $.scrollLeft += t.deltaX / Va(), K(), C = !0, rs(() => {
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
      const { onResize: S } = e;
      S !== void 0 && S(t);
    }
    function K() {
      const { value: t } = u;
      t != null && (m.value = t.scrollTop, l.value = t.scrollLeft);
    }
    function H(t) {
      let S = t;
      for (; S !== null; ) {
        if (S.style.display === "none")
          return !0;
        S = S.parentElement;
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
        const { itemResizable: t } = e, S = _n(f.value.sum());
        return v.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: _n(i.value),
            height: t ? "" : S,
            minHeight: t ? S : "",
            paddingTop: _n(e.paddingTop),
            paddingBottom: _n(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: R(() => (v.value, {
        transform: `translateY(${_n(f.value.sum(p.value))})`
      })),
      viewportItems: g,
      listElRef: u,
      itemsElRef: N(null),
      scrollTo: b,
      handleListResize: I,
      handleListScroll: P,
      handleListWheel: O,
      handleItemResize: A
    };
  },
  render() {
    const { itemResizable: e, keyField: n, keyToIndex: r, visibleItemsTag: o } = this;
    return h(br, {
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
                  const d = u[n], c = r.get(d), f = l != null ? h(qa, {
                    index: c,
                    item: u
                  }) : void 0, v = s != null ? h(qa, {
                    index: c,
                    item: u
                  }) : void 0, m = this.$slots.default({
                    item: u,
                    renderedCols: f,
                    renderedItemWithCols: v,
                    index: c
                  })[0];
                  return e ? h(br, {
                    key: d,
                    onResize: (p) => this.handleItemResize(d, p)
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
}), Lt = "v-hidden", Pf = tn("[v-hidden]", {
  display: "none!important"
}), Ka = Q({
  name: "Overflow",
  props: {
    getCounter: Function,
    getTail: Function,
    updateCounter: Function,
    onUpdateCount: Function,
    onUpdateOverflow: Function
  },
  setup(e, { slots: n }) {
    const r = N(null), o = N(null);
    function i(l) {
      const { value: s } = r, { getCounter: u, getTail: d } = e;
      let c;
      if (u !== void 0 ? c = u() : c = o.value, !s || !c)
        return;
      c.hasAttribute(Lt) && c.removeAttribute(Lt);
      const { children: f } = s;
      if (l.showAllItemsBeforeCalculate)
        for (const F of f)
          F.hasAttribute(Lt) && F.removeAttribute(Lt);
      const v = s.offsetWidth, m = [], p = n.tail ? d == null ? void 0 : d() : null;
      let g = p ? p.offsetWidth : 0, b = !1;
      const x = s.children.length - (n.tail ? 1 : 0);
      for (let F = 0; F < x - 1; ++F) {
        if (F < 0)
          continue;
        const y = f[F];
        if (b) {
          y.hasAttribute(Lt) || y.setAttribute(Lt, "");
          continue;
        } else y.hasAttribute(Lt) && y.removeAttribute(Lt);
        const A = y.offsetWidth;
        if (g += A, m[F] = A, g > v) {
          const { updateCounter: T } = e;
          for (let C = F; C >= 0; --C) {
            const P = x - 1 - C;
            T !== void 0 ? T(P) : c.textContent = `${P}`;
            const O = c.offsetWidth;
            if (g -= m[C], g + O <= v || C === 0) {
              b = !0, F = C - 1, p && (F === -1 ? (p.style.maxWidth = `${v - O}px`, p.style.boxSizing = "border-box") : p.style.maxWidth = "");
              const { onUpdateCount: I } = e;
              I && I(P);
              break;
            }
          }
        }
      }
      const { onUpdateOverflow: B } = e;
      b ? B !== void 0 && B(!0) : (B !== void 0 && B(!1), c.setAttribute(Lt, ""));
    }
    const a = Bn();
    return Pf.mount({
      id: "vueuc/overflow",
      head: !0,
      anchorMetaName: _i,
      ssr: a
    }), rt(() => i({
      showAllItemsBeforeCalculate: !1
    })), {
      selfRef: r,
      counterRef: o,
      sync: i
    };
  },
  render() {
    const { $slots: e } = this;
    return Et(() => this.sync({
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
function ks(e) {
  return e instanceof HTMLElement;
}
function Ts(e) {
  for (let n = 0; n < e.childNodes.length; n++) {
    const r = e.childNodes[n];
    if (ks(r) && (Os(r) || Ts(r)))
      return !0;
  }
  return !1;
}
function Rs(e) {
  for (let n = e.childNodes.length - 1; n >= 0; n--) {
    const r = e.childNodes[n];
    if (ks(r) && (Os(r) || Rs(r)))
      return !0;
  }
  return !1;
}
function Os(e) {
  if (!Ef(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function Ef(e) {
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
let er = [];
const Ms = Q({
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
    const n = pr(), r = N(null), o = N(null);
    let i = !1, a = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function s() {
      return er[er.length - 1] === n;
    }
    function u(b) {
      var x;
      b.code === "Escape" && s() && ((x = e.onEsc) === null || x === void 0 || x.call(e, b));
    }
    rt(() => {
      ze(() => e.active, (b) => {
        b ? (f(), Le("keydown", document, u)) : (De("keydown", document, u), i && v());
      }, {
        immediate: !0
      });
    }), Ge(() => {
      De("keydown", document, u), i && v();
    });
    function d(b) {
      if (!a && s()) {
        const x = c();
        if (x === null || x.contains(qn(b)))
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
        if (er.push(n), e.autoFocus) {
          const { initialFocusTo: x } = e;
          x === void 0 ? m("first") : (b = za(x)) === null || b === void 0 || b.focus({ preventScroll: !0 });
        }
        i = !0, document.addEventListener("focus", d, !0);
      }
    }
    function v() {
      var b;
      if (e.disabled || (document.removeEventListener("focus", d, !0), er = er.filter((B) => B !== n), s()))
        return;
      const { finalFocusTo: x } = e;
      x !== void 0 ? (b = za(x)) === null || b === void 0 || b.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (a = !0, l.focus({ preventScroll: !0 }), a = !1);
    }
    function m(b) {
      if (s() && e.active) {
        const x = r.value, B = o.value;
        if (x !== null && B !== null) {
          const F = c();
          if (F == null || F === B) {
            a = !0, x.focus({ preventScroll: !0 }), a = !1;
            return;
          }
          a = !0;
          const y = b === "first" ? Ts(F) : Rs(F);
          a = !1, y || (a = !0, x.focus({ preventScroll: !0 }), a = !1);
        }
      }
    }
    function p(b) {
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
      handleStartFocus: p,
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
    return h(xt, null, [
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
function Is(e, n) {
  n && (rt(() => {
    const {
      value: r
    } = e;
    r && no.registerHandler(r, n);
  }), Ge(() => {
    const {
      value: r
    } = e;
    r && no.unregisterHandler(r);
  }));
}
let Mn = 0, Ua = "", Ga = "", Xa = "", Ya = "";
const Za = N("0px");
function zf(e) {
  if (typeof document > "u") return;
  const n = document.documentElement;
  let r, o = !1;
  const i = () => {
    n.style.marginRight = Ua, n.style.overflow = Ga, n.style.overflowX = Xa, n.style.overflowY = Ya, Za.value = "0px";
  };
  rt(() => {
    r = ze(e, (a) => {
      if (a) {
        if (!Mn) {
          const l = window.innerWidth - n.offsetWidth;
          l > 0 && (Ua = n.style.marginRight, n.style.marginRight = `${l}px`, Za.value = `${l}px`), Ga = n.style.overflow, Xa = n.style.overflowX, Ya = n.style.overflowY, n.style.overflow = "hidden", n.style.overflowX = "hidden", n.style.overflowY = "hidden";
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
const Hi = N(!1);
function Ja() {
  Hi.value = !0;
}
function Qa() {
  Hi.value = !1;
}
let tr = 0;
function kf() {
  return $r && (wn(() => {
    tr || (window.addEventListener("compositionstart", Ja), window.addEventListener("compositionend", Qa)), tr++;
  }), Ge(() => {
    tr <= 1 ? (window.removeEventListener("compositionstart", Ja), window.removeEventListener("compositionend", Qa), tr = 0) : tr--;
  })), Hi;
}
function Tf(e) {
  const n = {
    isDeactivated: !1
  };
  let r = !1;
  return Ul(() => {
    if (n.isDeactivated = !1, !r) {
      r = !0;
      return;
    }
    e();
  }), Gl(() => {
    n.isDeactivated = !0, r || (r = !0);
  }), n;
}
const ui = "n-form-item";
function Wi(e, {
  defaultSize: n = "medium",
  mergedSize: r,
  mergedDisabled: o
} = {}) {
  const i = xe(ui, null);
  Fe(ui, null);
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
var _s = typeof global == "object" && global && global.Object === Object && global, Rf = typeof self == "object" && self && self.Object === Object && self, kt = _s || Rf || Function("return this")(), rn = kt.Symbol, Ls = Object.prototype, Of = Ls.hasOwnProperty, Mf = Ls.toString, nr = rn ? rn.toStringTag : void 0;
function If(e) {
  var n = Of.call(e, nr), r = e[nr];
  try {
    e[nr] = void 0;
    var o = !0;
  } catch {
  }
  var i = Mf.call(e);
  return o && (n ? e[nr] = r : delete e[nr]), i;
}
var _f = Object.prototype, Lf = _f.toString;
function Nf(e) {
  return Lf.call(e);
}
var Hf = "[object Null]", Wf = "[object Undefined]", el = rn ? rn.toStringTag : void 0;
function Sn(e) {
  return e == null ? e === void 0 ? Wf : Hf : el && el in Object(e) ? If(e) : Nf(e);
}
function on(e) {
  return e != null && typeof e == "object";
}
var jf = "[object Symbol]";
function ji(e) {
  return typeof e == "symbol" || on(e) && Sn(e) == jf;
}
function Ns(e, n) {
  for (var r = -1, o = e == null ? 0 : e.length, i = Array(o); ++r < o; )
    i[r] = n(e[r], r, e);
  return i;
}
var vt = Array.isArray, Vf = 1 / 0, tl = rn ? rn.prototype : void 0, nl = tl ? tl.toString : void 0;
function Hs(e) {
  if (typeof e == "string")
    return e;
  if (vt(e))
    return Ns(e, Hs) + "";
  if (ji(e))
    return nl ? nl.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -Vf ? "-0" : n;
}
function ln(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
function Vi(e) {
  return e;
}
var qf = "[object AsyncFunction]", Kf = "[object Function]", Uf = "[object GeneratorFunction]", Gf = "[object Proxy]";
function qi(e) {
  if (!ln(e))
    return !1;
  var n = Sn(e);
  return n == Kf || n == Uf || n == qf || n == Gf;
}
var Ho = kt["__core-js_shared__"], rl = function() {
  var e = /[^.]+$/.exec(Ho && Ho.keys && Ho.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Xf(e) {
  return !!rl && rl in e;
}
var Yf = Function.prototype, Zf = Yf.toString;
function Fn(e) {
  if (e != null) {
    try {
      return Zf.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Jf = /[\\^$.*+?()[\]{}|]/g, Qf = /^\[object .+?Constructor\]$/, e0 = Function.prototype, t0 = Object.prototype, n0 = e0.toString, r0 = t0.hasOwnProperty, o0 = RegExp(
  "^" + n0.call(r0).replace(Jf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function i0(e) {
  if (!ln(e) || Xf(e))
    return !1;
  var n = qi(e) ? o0 : Qf;
  return n.test(Fn(e));
}
function a0(e, n) {
  return e == null ? void 0 : e[n];
}
function An(e, n) {
  var r = a0(e, n);
  return i0(r) ? r : void 0;
}
var di = An(kt, "WeakMap"), ol = Object.create, l0 = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!ln(n))
      return {};
    if (ol)
      return ol(n);
    e.prototype = n;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function s0(e, n, r) {
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
function u0(e, n) {
  var r = -1, o = e.length;
  for (n || (n = Array(o)); ++r < o; )
    n[r] = e[r];
  return n;
}
var d0 = 800, c0 = 16, f0 = Date.now;
function h0(e) {
  var n = 0, r = 0;
  return function() {
    var o = f0(), i = c0 - (o - r);
    if (r = o, i > 0) {
      if (++n >= d0)
        return arguments[0];
    } else
      n = 0;
    return e.apply(void 0, arguments);
  };
}
function p0(e) {
  return function() {
    return e;
  };
}
var ro = function() {
  try {
    var e = An(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), v0 = ro ? function(e, n) {
  return ro(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: p0(n),
    writable: !0
  });
} : Vi, x0 = h0(v0), g0 = 9007199254740991, m0 = /^(?:0|[1-9]\d*)$/;
function Ki(e, n) {
  var r = typeof e;
  return n = n ?? g0, !!n && (r == "number" || r != "symbol" && m0.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function Ui(e, n, r) {
  n == "__proto__" && ro ? ro(e, n, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[n] = r;
}
function Er(e, n) {
  return e === n || e !== e && n !== n;
}
var b0 = Object.prototype, C0 = b0.hasOwnProperty;
function y0(e, n, r) {
  var o = e[n];
  (!(C0.call(e, n) && Er(o, r)) || r === void 0 && !(n in e)) && Ui(e, n, r);
}
function w0(e, n, r, o) {
  var i = !r;
  r || (r = {});
  for (var a = -1, l = n.length; ++a < l; ) {
    var s = n[a], u = void 0;
    u === void 0 && (u = e[s]), i ? Ui(r, s, u) : y0(r, s, u);
  }
  return r;
}
var il = Math.max;
function B0(e, n, r) {
  return n = il(n === void 0 ? e.length - 1 : n, 0), function() {
    for (var o = arguments, i = -1, a = il(o.length - n, 0), l = Array(a); ++i < a; )
      l[i] = o[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = o[i];
    return s[n] = r(l), s0(e, this, s);
  };
}
function S0(e, n) {
  return x0(B0(e, n, Vi), e + "");
}
var F0 = 9007199254740991;
function Gi(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= F0;
}
function Zn(e) {
  return e != null && Gi(e.length) && !qi(e);
}
function A0(e, n, r) {
  if (!ln(r))
    return !1;
  var o = typeof n;
  return (o == "number" ? Zn(r) && Ki(n, r.length) : o == "string" && n in r) ? Er(r[n], e) : !1;
}
function $0(e) {
  return S0(function(n, r) {
    var o = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, l = i > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, l && A0(r[0], r[1], l) && (a = i < 3 ? void 0 : a, i = 1), n = Object(n); ++o < i; ) {
      var s = r[o];
      s && e(n, s, o, a);
    }
    return n;
  });
}
var D0 = Object.prototype;
function Xi(e) {
  var n = e && e.constructor, r = typeof n == "function" && n.prototype || D0;
  return e === r;
}
function P0(e, n) {
  for (var r = -1, o = Array(e); ++r < e; )
    o[r] = n(r);
  return o;
}
var E0 = "[object Arguments]";
function al(e) {
  return on(e) && Sn(e) == E0;
}
var Ws = Object.prototype, z0 = Ws.hasOwnProperty, k0 = Ws.propertyIsEnumerable, oo = al(/* @__PURE__ */ function() {
  return arguments;
}()) ? al : function(e) {
  return on(e) && z0.call(e, "callee") && !k0.call(e, "callee");
};
function T0() {
  return !1;
}
var js = typeof exports == "object" && exports && !exports.nodeType && exports, ll = js && typeof module == "object" && module && !module.nodeType && module, R0 = ll && ll.exports === js, sl = R0 ? kt.Buffer : void 0, O0 = sl ? sl.isBuffer : void 0, io = O0 || T0, M0 = "[object Arguments]", I0 = "[object Array]", _0 = "[object Boolean]", L0 = "[object Date]", N0 = "[object Error]", H0 = "[object Function]", W0 = "[object Map]", j0 = "[object Number]", V0 = "[object Object]", q0 = "[object RegExp]", K0 = "[object Set]", U0 = "[object String]", G0 = "[object WeakMap]", X0 = "[object ArrayBuffer]", Y0 = "[object DataView]", Z0 = "[object Float32Array]", J0 = "[object Float64Array]", Q0 = "[object Int8Array]", eh = "[object Int16Array]", th = "[object Int32Array]", nh = "[object Uint8Array]", rh = "[object Uint8ClampedArray]", oh = "[object Uint16Array]", ih = "[object Uint32Array]", Oe = {};
Oe[Z0] = Oe[J0] = Oe[Q0] = Oe[eh] = Oe[th] = Oe[nh] = Oe[rh] = Oe[oh] = Oe[ih] = !0;
Oe[M0] = Oe[I0] = Oe[X0] = Oe[_0] = Oe[Y0] = Oe[L0] = Oe[N0] = Oe[H0] = Oe[W0] = Oe[j0] = Oe[V0] = Oe[q0] = Oe[K0] = Oe[U0] = Oe[G0] = !1;
function ah(e) {
  return on(e) && Gi(e.length) && !!Oe[Sn(e)];
}
function lh(e) {
  return function(n) {
    return e(n);
  };
}
var Vs = typeof exports == "object" && exports && !exports.nodeType && exports, dr = Vs && typeof module == "object" && module && !module.nodeType && module, sh = dr && dr.exports === Vs, Wo = sh && _s.process, ul = function() {
  try {
    var e = dr && dr.require && dr.require("util").types;
    return e || Wo && Wo.binding && Wo.binding("util");
  } catch {
  }
}(), dl = ul && ul.isTypedArray, Yi = dl ? lh(dl) : ah, uh = Object.prototype, dh = uh.hasOwnProperty;
function qs(e, n) {
  var r = vt(e), o = !r && oo(e), i = !r && !o && io(e), a = !r && !o && !i && Yi(e), l = r || o || i || a, s = l ? P0(e.length, String) : [], u = s.length;
  for (var d in e)
    (n || dh.call(e, d)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    Ki(d, u))) && s.push(d);
  return s;
}
function Ks(e, n) {
  return function(r) {
    return e(n(r));
  };
}
var ch = Ks(Object.keys, Object), fh = Object.prototype, hh = fh.hasOwnProperty;
function ph(e) {
  if (!Xi(e))
    return ch(e);
  var n = [];
  for (var r in Object(e))
    hh.call(e, r) && r != "constructor" && n.push(r);
  return n;
}
function Zi(e) {
  return Zn(e) ? qs(e) : ph(e);
}
function vh(e) {
  var n = [];
  if (e != null)
    for (var r in Object(e))
      n.push(r);
  return n;
}
var xh = Object.prototype, gh = xh.hasOwnProperty;
function mh(e) {
  if (!ln(e))
    return vh(e);
  var n = Xi(e), r = [];
  for (var o in e)
    o == "constructor" && (n || !gh.call(e, o)) || r.push(o);
  return r;
}
function Us(e) {
  return Zn(e) ? qs(e, !0) : mh(e);
}
var bh = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ch = /^\w*$/;
function Ji(e, n) {
  if (vt(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || ji(e) ? !0 : Ch.test(e) || !bh.test(e) || n != null && e in Object(n);
}
var Cr = An(Object, "create");
function yh() {
  this.__data__ = Cr ? Cr(null) : {}, this.size = 0;
}
function wh(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var Bh = "__lodash_hash_undefined__", Sh = Object.prototype, Fh = Sh.hasOwnProperty;
function Ah(e) {
  var n = this.__data__;
  if (Cr) {
    var r = n[e];
    return r === Bh ? void 0 : r;
  }
  return Fh.call(n, e) ? n[e] : void 0;
}
var $h = Object.prototype, Dh = $h.hasOwnProperty;
function Ph(e) {
  var n = this.__data__;
  return Cr ? n[e] !== void 0 : Dh.call(n, e);
}
var Eh = "__lodash_hash_undefined__";
function zh(e, n) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Cr && n === void 0 ? Eh : n, this;
}
function yn(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var o = e[n];
    this.set(o[0], o[1]);
  }
}
yn.prototype.clear = yh;
yn.prototype.delete = wh;
yn.prototype.get = Ah;
yn.prototype.has = Ph;
yn.prototype.set = zh;
function kh() {
  this.__data__ = [], this.size = 0;
}
function go(e, n) {
  for (var r = e.length; r--; )
    if (Er(e[r][0], n))
      return r;
  return -1;
}
var Th = Array.prototype, Rh = Th.splice;
function Oh(e) {
  var n = this.__data__, r = go(n, e);
  if (r < 0)
    return !1;
  var o = n.length - 1;
  return r == o ? n.pop() : Rh.call(n, r, 1), --this.size, !0;
}
function Mh(e) {
  var n = this.__data__, r = go(n, e);
  return r < 0 ? void 0 : n[r][1];
}
function Ih(e) {
  return go(this.__data__, e) > -1;
}
function _h(e, n) {
  var r = this.__data__, o = go(r, e);
  return o < 0 ? (++this.size, r.push([e, n])) : r[o][1] = n, this;
}
function Ut(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var o = e[n];
    this.set(o[0], o[1]);
  }
}
Ut.prototype.clear = kh;
Ut.prototype.delete = Oh;
Ut.prototype.get = Mh;
Ut.prototype.has = Ih;
Ut.prototype.set = _h;
var yr = An(kt, "Map");
function Lh() {
  this.size = 0, this.__data__ = {
    hash: new yn(),
    map: new (yr || Ut)(),
    string: new yn()
  };
}
function Nh(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function mo(e, n) {
  var r = e.__data__;
  return Nh(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
}
function Hh(e) {
  var n = mo(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function Wh(e) {
  return mo(this, e).get(e);
}
function jh(e) {
  return mo(this, e).has(e);
}
function Vh(e, n) {
  var r = mo(this, e), o = r.size;
  return r.set(e, n), this.size += r.size == o ? 0 : 1, this;
}
function Gt(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var o = e[n];
    this.set(o[0], o[1]);
  }
}
Gt.prototype.clear = Lh;
Gt.prototype.delete = Hh;
Gt.prototype.get = Wh;
Gt.prototype.has = jh;
Gt.prototype.set = Vh;
var qh = "Expected a function";
function Qi(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(qh);
  var r = function() {
    var o = arguments, i = n ? n.apply(this, o) : o[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var l = e.apply(this, o);
    return r.cache = a.set(i, l) || a, l;
  };
  return r.cache = new (Qi.Cache || Gt)(), r;
}
Qi.Cache = Gt;
var Kh = 500;
function Uh(e) {
  var n = Qi(e, function(o) {
    return r.size === Kh && r.clear(), o;
  }), r = n.cache;
  return n;
}
var Gh = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Xh = /\\(\\)?/g, Yh = Uh(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(Gh, function(r, o, i, a) {
    n.push(i ? a.replace(Xh, "$1") : o || r);
  }), n;
});
function Gs(e) {
  return e == null ? "" : Hs(e);
}
function Xs(e, n) {
  return vt(e) ? e : Ji(e, n) ? [e] : Yh(Gs(e));
}
var Zh = 1 / 0;
function bo(e) {
  if (typeof e == "string" || ji(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -Zh ? "-0" : n;
}
function Ys(e, n) {
  n = Xs(n, e);
  for (var r = 0, o = n.length; e != null && r < o; )
    e = e[bo(n[r++])];
  return r && r == o ? e : void 0;
}
function ea(e, n, r) {
  var o = e == null ? void 0 : Ys(e, n);
  return o === void 0 ? r : o;
}
function Jh(e, n) {
  for (var r = -1, o = n.length, i = e.length; ++r < o; )
    e[i + r] = n[r];
  return e;
}
var Zs = Ks(Object.getPrototypeOf, Object), Qh = "[object Object]", ep = Function.prototype, tp = Object.prototype, Js = ep.toString, np = tp.hasOwnProperty, rp = Js.call(Object);
function op(e) {
  if (!on(e) || Sn(e) != Qh)
    return !1;
  var n = Zs(e);
  if (n === null)
    return !0;
  var r = np.call(n, "constructor") && n.constructor;
  return typeof r == "function" && r instanceof r && Js.call(r) == rp;
}
function ip(e, n, r) {
  var o = -1, i = e.length;
  n < 0 && (n = -n > i ? 0 : i + n), r = r > i ? i : r, r < 0 && (r += i), i = n > r ? 0 : r - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++o < i; )
    a[o] = e[o + n];
  return a;
}
function ap(e, n, r) {
  var o = e.length;
  return r = r === void 0 ? o : r, !n && r >= o ? e : ip(e, n, r);
}
var lp = "\\ud800-\\udfff", sp = "\\u0300-\\u036f", up = "\\ufe20-\\ufe2f", dp = "\\u20d0-\\u20ff", cp = sp + up + dp, fp = "\\ufe0e\\ufe0f", hp = "\\u200d", pp = RegExp("[" + hp + lp + cp + fp + "]");
function Qs(e) {
  return pp.test(e);
}
function vp(e) {
  return e.split("");
}
var eu = "\\ud800-\\udfff", xp = "\\u0300-\\u036f", gp = "\\ufe20-\\ufe2f", mp = "\\u20d0-\\u20ff", bp = xp + gp + mp, Cp = "\\ufe0e\\ufe0f", yp = "[" + eu + "]", ci = "[" + bp + "]", fi = "\\ud83c[\\udffb-\\udfff]", wp = "(?:" + ci + "|" + fi + ")", tu = "[^" + eu + "]", nu = "(?:\\ud83c[\\udde6-\\uddff]){2}", ru = "[\\ud800-\\udbff][\\udc00-\\udfff]", Bp = "\\u200d", ou = wp + "?", iu = "[" + Cp + "]?", Sp = "(?:" + Bp + "(?:" + [tu, nu, ru].join("|") + ")" + iu + ou + ")*", Fp = iu + ou + Sp, Ap = "(?:" + [tu + ci + "?", ci, nu, ru, yp].join("|") + ")", $p = RegExp(fi + "(?=" + fi + ")|" + Ap + Fp, "g");
function Dp(e) {
  return e.match($p) || [];
}
function Pp(e) {
  return Qs(e) ? Dp(e) : vp(e);
}
function Ep(e) {
  return function(n) {
    n = Gs(n);
    var r = Qs(n) ? Pp(n) : void 0, o = r ? r[0] : n.charAt(0), i = r ? ap(r, 1).join("") : n.slice(1);
    return o[e]() + i;
  };
}
var zp = Ep("toUpperCase");
function kp() {
  this.__data__ = new Ut(), this.size = 0;
}
function Tp(e) {
  var n = this.__data__, r = n.delete(e);
  return this.size = n.size, r;
}
function Rp(e) {
  return this.__data__.get(e);
}
function Op(e) {
  return this.__data__.has(e);
}
var Mp = 200;
function Ip(e, n) {
  var r = this.__data__;
  if (r instanceof Ut) {
    var o = r.__data__;
    if (!yr || o.length < Mp - 1)
      return o.push([e, n]), this.size = ++r.size, this;
    r = this.__data__ = new Gt(o);
  }
  return r.set(e, n), this.size = r.size, this;
}
function Pt(e) {
  var n = this.__data__ = new Ut(e);
  this.size = n.size;
}
Pt.prototype.clear = kp;
Pt.prototype.delete = Tp;
Pt.prototype.get = Rp;
Pt.prototype.has = Op;
Pt.prototype.set = Ip;
var au = typeof exports == "object" && exports && !exports.nodeType && exports, cl = au && typeof module == "object" && module && !module.nodeType && module, _p = cl && cl.exports === au, fl = _p ? kt.Buffer : void 0;
fl && fl.allocUnsafe;
function Lp(e, n) {
  return e.slice();
}
function Np(e, n) {
  for (var r = -1, o = e == null ? 0 : e.length, i = 0, a = []; ++r < o; ) {
    var l = e[r];
    n(l, r, e) && (a[i++] = l);
  }
  return a;
}
function Hp() {
  return [];
}
var Wp = Object.prototype, jp = Wp.propertyIsEnumerable, hl = Object.getOwnPropertySymbols, Vp = hl ? function(e) {
  return e == null ? [] : (e = Object(e), Np(hl(e), function(n) {
    return jp.call(e, n);
  }));
} : Hp;
function qp(e, n, r) {
  var o = n(e);
  return vt(e) ? o : Jh(o, r(e));
}
function pl(e) {
  return qp(e, Zi, Vp);
}
var hi = An(kt, "DataView"), pi = An(kt, "Promise"), vi = An(kt, "Set"), vl = "[object Map]", Kp = "[object Object]", xl = "[object Promise]", gl = "[object Set]", ml = "[object WeakMap]", bl = "[object DataView]", Up = Fn(hi), Gp = Fn(yr), Xp = Fn(pi), Yp = Fn(vi), Zp = Fn(di), en = Sn;
(hi && en(new hi(new ArrayBuffer(1))) != bl || yr && en(new yr()) != vl || pi && en(pi.resolve()) != xl || vi && en(new vi()) != gl || di && en(new di()) != ml) && (en = function(e) {
  var n = Sn(e), r = n == Kp ? e.constructor : void 0, o = r ? Fn(r) : "";
  if (o)
    switch (o) {
      case Up:
        return bl;
      case Gp:
        return vl;
      case Xp:
        return xl;
      case Yp:
        return gl;
      case Zp:
        return ml;
    }
  return n;
});
var ao = kt.Uint8Array;
function Jp(e) {
  var n = new e.constructor(e.byteLength);
  return new ao(n).set(new ao(e)), n;
}
function Qp(e, n) {
  var r = Jp(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function ev(e) {
  return typeof e.constructor == "function" && !Xi(e) ? l0(Zs(e)) : {};
}
var tv = "__lodash_hash_undefined__";
function nv(e) {
  return this.__data__.set(e, tv), this;
}
function rv(e) {
  return this.__data__.has(e);
}
function lo(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Gt(); ++n < r; )
    this.add(e[n]);
}
lo.prototype.add = lo.prototype.push = nv;
lo.prototype.has = rv;
function ov(e, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(e[r], r, e))
      return !0;
  return !1;
}
function iv(e, n) {
  return e.has(n);
}
var av = 1, lv = 2;
function lu(e, n, r, o, i, a) {
  var l = r & av, s = e.length, u = n.length;
  if (s != u && !(l && u > s))
    return !1;
  var d = a.get(e), c = a.get(n);
  if (d && c)
    return d == n && c == e;
  var f = -1, v = !0, m = r & lv ? new lo() : void 0;
  for (a.set(e, n), a.set(n, e); ++f < s; ) {
    var p = e[f], g = n[f];
    if (o)
      var b = l ? o(g, p, f, n, e, a) : o(p, g, f, e, n, a);
    if (b !== void 0) {
      if (b)
        continue;
      v = !1;
      break;
    }
    if (m) {
      if (!ov(n, function(x, B) {
        if (!iv(m, B) && (p === x || i(p, x, r, o, a)))
          return m.push(B);
      })) {
        v = !1;
        break;
      }
    } else if (!(p === g || i(p, g, r, o, a))) {
      v = !1;
      break;
    }
  }
  return a.delete(e), a.delete(n), v;
}
function sv(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(o, i) {
    r[++n] = [i, o];
  }), r;
}
function uv(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(o) {
    r[++n] = o;
  }), r;
}
var dv = 1, cv = 2, fv = "[object Boolean]", hv = "[object Date]", pv = "[object Error]", vv = "[object Map]", xv = "[object Number]", gv = "[object RegExp]", mv = "[object Set]", bv = "[object String]", Cv = "[object Symbol]", yv = "[object ArrayBuffer]", wv = "[object DataView]", Cl = rn ? rn.prototype : void 0, jo = Cl ? Cl.valueOf : void 0;
function Bv(e, n, r, o, i, a, l) {
  switch (r) {
    case wv:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case yv:
      return !(e.byteLength != n.byteLength || !a(new ao(e), new ao(n)));
    case fv:
    case hv:
    case xv:
      return Er(+e, +n);
    case pv:
      return e.name == n.name && e.message == n.message;
    case gv:
    case bv:
      return e == n + "";
    case vv:
      var s = sv;
    case mv:
      var u = o & dv;
      if (s || (s = uv), e.size != n.size && !u)
        return !1;
      var d = l.get(e);
      if (d)
        return d == n;
      o |= cv, l.set(e, n);
      var c = lu(s(e), s(n), o, i, a, l);
      return l.delete(e), c;
    case Cv:
      if (jo)
        return jo.call(e) == jo.call(n);
  }
  return !1;
}
var Sv = 1, Fv = Object.prototype, Av = Fv.hasOwnProperty;
function $v(e, n, r, o, i, a) {
  var l = r & Sv, s = pl(e), u = s.length, d = pl(n), c = d.length;
  if (u != c && !l)
    return !1;
  for (var f = u; f--; ) {
    var v = s[f];
    if (!(l ? v in n : Av.call(n, v)))
      return !1;
  }
  var m = a.get(e), p = a.get(n);
  if (m && p)
    return m == n && p == e;
  var g = !0;
  a.set(e, n), a.set(n, e);
  for (var b = l; ++f < u; ) {
    v = s[f];
    var x = e[v], B = n[v];
    if (o)
      var F = l ? o(B, x, v, n, e, a) : o(x, B, v, e, n, a);
    if (!(F === void 0 ? x === B || i(x, B, r, o, a) : F)) {
      g = !1;
      break;
    }
    b || (b = v == "constructor");
  }
  if (g && !b) {
    var y = e.constructor, A = n.constructor;
    y != A && "constructor" in e && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof A == "function" && A instanceof A) && (g = !1);
  }
  return a.delete(e), a.delete(n), g;
}
var Dv = 1, yl = "[object Arguments]", wl = "[object Array]", Kr = "[object Object]", Pv = Object.prototype, Bl = Pv.hasOwnProperty;
function Ev(e, n, r, o, i, a) {
  var l = vt(e), s = vt(n), u = l ? wl : en(e), d = s ? wl : en(n);
  u = u == yl ? Kr : u, d = d == yl ? Kr : d;
  var c = u == Kr, f = d == Kr, v = u == d;
  if (v && io(e)) {
    if (!io(n))
      return !1;
    l = !0, c = !1;
  }
  if (v && !c)
    return a || (a = new Pt()), l || Yi(e) ? lu(e, n, r, o, i, a) : Bv(e, n, u, r, o, i, a);
  if (!(r & Dv)) {
    var m = c && Bl.call(e, "__wrapped__"), p = f && Bl.call(n, "__wrapped__");
    if (m || p) {
      var g = m ? e.value() : e, b = p ? n.value() : n;
      return a || (a = new Pt()), i(g, b, r, o, a);
    }
  }
  return v ? (a || (a = new Pt()), $v(e, n, r, o, i, a)) : !1;
}
function ta(e, n, r, o, i) {
  return e === n ? !0 : e == null || n == null || !on(e) && !on(n) ? e !== e && n !== n : Ev(e, n, r, o, ta, i);
}
var zv = 1, kv = 2;
function Tv(e, n, r, o) {
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
      var c = new Pt(), f;
      if (!(f === void 0 ? ta(d, u, zv | kv, o, c) : f))
        return !1;
    }
  }
  return !0;
}
function su(e) {
  return e === e && !ln(e);
}
function Rv(e) {
  for (var n = Zi(e), r = n.length; r--; ) {
    var o = n[r], i = e[o];
    n[r] = [o, i, su(i)];
  }
  return n;
}
function uu(e, n) {
  return function(r) {
    return r == null ? !1 : r[e] === n && (n !== void 0 || e in Object(r));
  };
}
function Ov(e) {
  var n = Rv(e);
  return n.length == 1 && n[0][2] ? uu(n[0][0], n[0][1]) : function(r) {
    return r === e || Tv(r, e, n);
  };
}
function Mv(e, n) {
  return e != null && n in Object(e);
}
function Iv(e, n, r) {
  n = Xs(n, e);
  for (var o = -1, i = n.length, a = !1; ++o < i; ) {
    var l = bo(n[o]);
    if (!(a = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return a || ++o != i ? a : (i = e == null ? 0 : e.length, !!i && Gi(i) && Ki(l, i) && (vt(e) || oo(e)));
}
function _v(e, n) {
  return e != null && Iv(e, n, Mv);
}
var Lv = 1, Nv = 2;
function Hv(e, n) {
  return Ji(e) && su(n) ? uu(bo(e), n) : function(r) {
    var o = ea(r, e);
    return o === void 0 && o === n ? _v(r, e) : ta(n, o, Lv | Nv);
  };
}
function Wv(e) {
  return function(n) {
    return n == null ? void 0 : n[e];
  };
}
function jv(e) {
  return function(n) {
    return Ys(n, e);
  };
}
function Vv(e) {
  return Ji(e) ? Wv(bo(e)) : jv(e);
}
function qv(e) {
  return typeof e == "function" ? e : e == null ? Vi : typeof e == "object" ? vt(e) ? Hv(e[0], e[1]) : Ov(e) : Vv(e);
}
function Kv(e) {
  return function(n, r, o) {
    for (var i = -1, a = Object(n), l = o(n), s = l.length; s--; ) {
      var u = l[++i];
      if (r(a[u], u, a) === !1)
        break;
    }
    return n;
  };
}
var du = Kv();
function Uv(e, n) {
  return e && du(e, n, Zi);
}
function Gv(e, n) {
  return function(r, o) {
    if (r == null)
      return r;
    if (!Zn(r))
      return e(r, o);
    for (var i = r.length, a = -1, l = Object(r); ++a < i && o(l[a], a, l) !== !1; )
      ;
    return r;
  };
}
var Xv = Gv(Uv);
function xi(e, n, r) {
  (r !== void 0 && !Er(e[n], r) || r === void 0 && !(n in e)) && Ui(e, n, r);
}
function Yv(e) {
  return on(e) && Zn(e);
}
function gi(e, n) {
  if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
    return e[n];
}
function Zv(e) {
  return w0(e, Us(e));
}
function Jv(e, n, r, o, i, a, l) {
  var s = gi(e, r), u = gi(n, r), d = l.get(u);
  if (d) {
    xi(e, r, d);
    return;
  }
  var c = a ? a(s, u, r + "", e, n, l) : void 0, f = c === void 0;
  if (f) {
    var v = vt(u), m = !v && io(u), p = !v && !m && Yi(u);
    c = u, v || m || p ? vt(s) ? c = s : Yv(s) ? c = u0(s) : m ? (f = !1, c = Lp(u)) : p ? (f = !1, c = Qp(u)) : c = [] : op(u) || oo(u) ? (c = s, oo(s) ? c = Zv(s) : (!ln(s) || qi(s)) && (c = ev(u))) : f = !1;
  }
  f && (l.set(u, c), i(c, u, o, a, l), l.delete(u)), xi(e, r, c);
}
function cu(e, n, r, o, i) {
  e !== n && du(n, function(a, l) {
    if (i || (i = new Pt()), ln(a))
      Jv(e, n, l, r, cu, o, i);
    else {
      var s = o ? o(gi(e, l), a, l + "", e, n, i) : void 0;
      s === void 0 && (s = a), xi(e, l, s);
    }
  }, Us);
}
function Qv(e, n) {
  var r = -1, o = Zn(e) ? Array(e.length) : [];
  return Xv(e, function(i, a, l) {
    o[++r] = n(i, a, l);
  }), o;
}
function ex(e, n) {
  var r = vt(e) ? Ns : Qv;
  return r(e, qv(n));
}
var or = $0(function(e, n, r) {
  cu(e, n, r);
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
  fontSize: tx,
  fontFamily: nx,
  lineHeight: rx
} = sn, fu = z("body", `
 margin: 0;
 font-size: ${tx};
 font-family: ${nx};
 line-height: ${rx};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [z("input", `
 font-family: inherit;
 font-size: inherit;
 `)]), Kt = "n-config-provider", wr = "naive-ui-style";
function fe(e, n, r, o, i, a) {
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
        anchorMetaName: wr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || fu.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: wr,
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
        peers: v = {}
      } = {},
      themeOverrides: m = {},
      builtinThemeOverrides: p = {}
    } = i, {
      common: g,
      peers: b
    } = m, {
      common: x = void 0,
      [e]: {
        common: B = void 0,
        self: F = void 0,
        peers: y = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: A = void 0,
      [e]: T = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: C,
      peers: P = {}
    } = T, O = or({}, c || B || x || o.common, A, C, g), I = or(
      // {}, executed every time, no need for empty obj
      (d = f || F || o.self) === null || d === void 0 ? void 0 : d(O),
      p,
      T,
      m
    );
    return {
      common: O,
      self: I,
      peers: or({}, o.peers, y, v),
      peerOverrides: or({}, p.peers, P, b)
    };
  });
}
fe.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const mi = "n";
function Te(e = {}, n = {
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
    mergedClsPrefixRef: r ? r.mergedClsPrefixRef : kd(mi),
    namespaceRef: R(() => r == null ? void 0 : r.mergedNamespaceRef.value)
  };
}
const ox = {
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
}, ix = {
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
function Ft(e) {
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
function At(e) {
  return (n, r = {}) => {
    const o = r.width, i = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], a = n.match(i);
    if (!a)
      return null;
    const l = a[0], s = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? lx(s, (f) => f.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      ax(s, (f) => f.test(l))
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
function ax(e, n) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && n(e[r]))
      return r;
}
function lx(e, n) {
  for (let r = 0; r < e.length; r++)
    if (n(e[r]))
      return r;
}
function hu(e) {
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
function sx(e) {
  const n = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && n === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || n === "[object Number]" || typeof e == "string" || n === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
let ux = {};
function dx() {
  return ux;
}
function Sl(e, n) {
  var s, u, d, c;
  const r = dx(), o = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((c = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = sx(e), a = i.getDay(), l = (a < o ? 7 : 0) + a - o;
  return i.setDate(i.getDate() - l), i.setHours(0, 0, 0, 0), i;
}
function cx(e, n, r) {
  const o = Sl(e, r), i = Sl(n, r);
  return +o == +i;
}
const fx = {
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
}, hx = (e, n, r) => {
  let o;
  const i = fx[e];
  return typeof i == "string" ? o = i : n === 1 ? o = i.one : o = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
}, px = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, vx = (e, n, r, o) => px[e], xx = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, gx = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, mx = {
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
}, bx = {
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
}, Cx = {
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
}, yx = {
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
}, wx = (e, n) => {
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
}, Bx = {
  ordinalNumber: wx,
  era: Ft({
    values: xx,
    defaultWidth: "wide"
  }),
  quarter: Ft({
    values: gx,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ft({
    values: mx,
    defaultWidth: "wide"
  }),
  day: Ft({
    values: bx,
    defaultWidth: "wide"
  }),
  dayPeriod: Ft({
    values: Cx,
    defaultWidth: "wide",
    formattingValues: yx,
    defaultFormattingWidth: "wide"
  })
}, Sx = /^(\d+)(th|st|nd|rd)?/i, Fx = /\d+/i, Ax = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, $x = {
  any: [/^b/i, /^(a|c)/i]
}, Dx = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Px = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Ex = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, zx = {
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
}, kx = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Tx = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Rx = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Ox = {
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
}, Mx = {
  ordinalNumber: hu({
    matchPattern: Sx,
    parsePattern: Fx,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: At({
    matchPatterns: Ax,
    defaultMatchWidth: "wide",
    parsePatterns: $x,
    defaultParseWidth: "any"
  }),
  quarter: At({
    matchPatterns: Dx,
    defaultMatchWidth: "wide",
    parsePatterns: Px,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: At({
    matchPatterns: Ex,
    defaultMatchWidth: "wide",
    parsePatterns: zx,
    defaultParseWidth: "any"
  }),
  day: At({
    matchPatterns: kx,
    defaultMatchWidth: "wide",
    parsePatterns: Tx,
    defaultParseWidth: "any"
  }),
  dayPeriod: At({
    matchPatterns: Rx,
    defaultMatchWidth: "any",
    parsePatterns: Ox,
    defaultParseWidth: "any"
  })
}, Ix = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, _x = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Lx = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Nx = {
  date: Hn({
    formats: Ix,
    defaultWidth: "full"
  }),
  time: Hn({
    formats: _x,
    defaultWidth: "full"
  }),
  dateTime: Hn({
    formats: Lx,
    defaultWidth: "full"
  })
}, Hx = {
  code: "en-US",
  formatDistance: hx,
  formatLong: Nx,
  formatRelative: vx,
  localize: Bx,
  match: Mx,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Wx = {
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
}, jx = (e, n, r) => {
  let o;
  const i = Wx[e];
  return typeof i == "string" ? o = i : n === 1 ? o = i.one : o = i.other.replace("{{count}}", String(n)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? o + "内" : o + "前" : o;
}, Vx = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, qx = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, Kx = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Ux = {
  date: Hn({
    formats: Vx,
    defaultWidth: "full"
  }),
  time: Hn({
    formats: qx,
    defaultWidth: "full"
  }),
  dateTime: Hn({
    formats: Kx,
    defaultWidth: "full"
  })
};
function Fl(e, n, r) {
  const o = "eeee p";
  return cx(e, n, r) ? o : e.getTime() > n.getTime() ? "'下个'" + o : "'上个'" + o;
}
const Gx = {
  lastWeek: Fl,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: Fl,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, Xx = (e, n, r, o) => {
  const i = Gx[e];
  return typeof i == "function" ? i(n, r, o) : i;
}, Yx = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, Zx = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, Jx = {
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
}, Qx = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, eg = {
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
}, tg = {
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
}, ng = (e, n) => {
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
}, rg = {
  ordinalNumber: ng,
  era: Ft({
    values: Yx,
    defaultWidth: "wide"
  }),
  quarter: Ft({
    values: Zx,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: Ft({
    values: Jx,
    defaultWidth: "wide"
  }),
  day: Ft({
    values: Qx,
    defaultWidth: "wide"
  }),
  dayPeriod: Ft({
    values: eg,
    defaultWidth: "wide",
    formattingValues: tg,
    defaultFormattingWidth: "wide"
  })
}, og = /^(第\s*)?\d+(日|时|分|秒)?/i, ig = /\d+/i, ag = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, lg = {
  any: [/^(前)/i, /^(公元)/i]
}, sg = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, ug = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, dg = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, cg = {
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
}, fg = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, hg = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, pg = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, vg = {
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
}, xg = {
  ordinalNumber: hu({
    matchPattern: og,
    parsePattern: ig,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: At({
    matchPatterns: ag,
    defaultMatchWidth: "wide",
    parsePatterns: lg,
    defaultParseWidth: "any"
  }),
  quarter: At({
    matchPatterns: sg,
    defaultMatchWidth: "wide",
    parsePatterns: ug,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: At({
    matchPatterns: dg,
    defaultMatchWidth: "wide",
    parsePatterns: cg,
    defaultParseWidth: "any"
  }),
  day: At({
    matchPatterns: fg,
    defaultMatchWidth: "wide",
    parsePatterns: hg,
    defaultParseWidth: "any"
  }),
  dayPeriod: At({
    matchPatterns: pg,
    defaultMatchWidth: "any",
    parsePatterns: vg,
    defaultParseWidth: "any"
  })
}, gg = {
  code: "zh-CN",
  formatDistance: jx,
  formatLong: Ux,
  formatRelative: Xx,
  localize: rg,
  match: xg,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, mg = {
  name: "zh-CN",
  locale: gg
}, bg = {
  name: "en-US",
  locale: Hx
};
function Br(e) {
  const {
    mergedLocaleRef: n,
    mergedDateLocaleRef: r
  } = xe(Kt, null) || {}, o = R(() => {
    var a, l;
    return (l = (a = n == null ? void 0 : n.value) === null || a === void 0 ? void 0 : a[e]) !== null && l !== void 0 ? l : ix[e];
  });
  return {
    dateLocaleRef: R(() => {
      var a;
      return (a = r == null ? void 0 : r.value) !== null && a !== void 0 ? a : bg;
    }),
    localeRef: o
  };
}
function $n(e, n, r) {
  if (!n) {
    process.env.NODE_ENV !== "production" && ho("use-style", "No style is specified.");
    return;
  }
  const o = Bn(), i = xe(Kt, null), a = () => {
    const l = r.value;
    n.mount({
      id: l === void 0 ? e : l + e,
      head: !0,
      anchorMetaName: wr,
      props: {
        bPrefix: l ? `.${l}-` : void 0
      },
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    }), i != null && i.preflightStyleDisabled || fu.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: wr,
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    });
  };
  o ? a() : wn(a);
}
function je(e, n, r, o) {
  r || ho("useThemeClass", "cssVarsRef is not passed");
  const i = xe(Kt, null), a = i == null ? void 0 : i.mergedThemeHashRef, l = i == null ? void 0 : i.styleMountTarget, s = N(""), u = Bn();
  let d;
  const c = `__${e}`, f = () => {
    let v = c;
    const m = n ? n.value : void 0, p = a == null ? void 0 : a.value;
    p && (v += `-${p}`), m && (v += `-${m}`);
    const {
      themeOverrides: g,
      builtinThemeOverrides: b
    } = o;
    g && (v += `-${vr(JSON.stringify(g))}`), b && (v += `-${vr(JSON.stringify(b))}`), s.value = v, d = () => {
      const x = r.value;
      let B = "";
      for (const F in x)
        B += `${F}: ${x[F]};`;
      z(`.${v}`, B).mount({
        id: v,
        ssr: u,
        parent: l
      }), d = void 0;
    };
  };
  return nt(() => {
    f();
  }), {
    themeClass: s,
    onRender: () => {
      d == null || d();
    }
  };
}
function yt(e, n, r) {
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
    nt(() => {
      const {
        value: s
      } = r, u = `${s}${e}Rtl`;
      if (gc(u, o)) return;
      const {
        value: d
      } = i;
      d && d.style.mount({
        id: u,
        head: !0,
        anchorMetaName: wr,
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
function Jn(e, n) {
  return Q({
    name: zp(e),
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
const Cg = Q({
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
}), yg = Q({
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
}), pu = Q({
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
}), wg = Jn("close", h("svg", {
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
}))))), Bg = Q({
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
}), Sg = Q({
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
}), Fg = Q({
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
}), Ag = Jn("error", h("svg", {
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
}))))), Al = Jn("info", h("svg", {
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
}))))), $g = Jn("success", h("svg", {
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
}))))), vu = Jn("warning", h("svg", {
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
}))))), Dg = Q({
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
}), Pg = Jn("clear", h("svg", {
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
}))))), na = Q({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: n
  }) {
    const r = Dr();
    return () => h(pt, {
      name: "icon-switch-transition",
      appear: r.value
    }, n);
  }
}), xu = Q({
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
      } = e, f = s ? Td : pt, v = {
        name: u ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: d,
        onEnter: a,
        onAfterEnter: l,
        onBeforeLeave: r,
        onLeave: o,
        onAfterLeave: i
      };
      return s || (v.mode = c), h(f, v, n);
    };
  }
}), Eg = M("base-icon", `
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
    $n("-base-icon", Eg, le(e, "clsPrefix"));
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
}), zg = M("base-close", `
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
`, [q("absolute", `
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
 `)]), q("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), q("round", [z("&::before", `
 border-radius: 50%;
 `)])]), ra = Q({
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
    return $n("-base-close", zg, le(e, "clsPrefix")), () => {
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
        default: () => h(wg, null)
      }));
    };
  }
}), kg = Q({
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
  cubicBezierEaseInOut: Tg
} = sn;
function so({
  originalTransform: e = "",
  left: n = 0,
  top: r = 0,
  transition: o = `all .3s ${Tg} !important`
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
const Rg = z([z("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), M("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [E("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [so()]), E("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [so({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), E("container", `
 animation: rotator 3s linear infinite both;
 `, [E("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Vo = "1.6s", Og = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Co = Q({
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
  }, Og),
  setup(e) {
    $n("-base-loading", Rg, le(e, "clsPrefix"));
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
    }, h(na, null, {
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
        dur: Vo,
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
        dur: Vo,
        fill: "freeze",
        repeatCount: "indefinite"
      }), h("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * n};${1.42 * n};${5.67 * n}`,
        begin: "0s",
        dur: Vo,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : h("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
});
function $l(e) {
  return Array.isArray(e) ? e : [e];
}
const bi = {
  STOP: "STOP"
};
function gu(e, n) {
  const r = n(e);
  e.children !== void 0 && r !== bi.STOP && e.children.forEach((o) => gu(o, n));
}
function Mg(e, n = {}) {
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
function Ig(e, n) {
  const { isLeaf: r } = e;
  return r !== void 0 ? r : !n(e);
}
function _g(e) {
  return e.children;
}
function Lg(e) {
  return e.key;
}
function Ng() {
  return !1;
}
function Hg(e, n) {
  const { isLeaf: r } = e;
  return !(r === !1 && !Array.isArray(n(e)));
}
function Wg(e) {
  return e.disabled === !0;
}
function jg(e, n) {
  return e.isLeaf === !1 && !Array.isArray(n(e));
}
function Vg(e, n) {
  if (e.isLeaf === !0) {
    const r = n(e);
    if (Array.isArray(r) && r.length > 0)
      return !0;
  }
  return !1;
}
function qo(e) {
  var n;
  return e == null ? [] : Array.isArray(e) ? e : (n = e.checkedKeys) !== null && n !== void 0 ? n : [];
}
function Ko(e) {
  var n;
  return e == null || Array.isArray(e) ? [] : (n = e.indeterminateKeys) !== null && n !== void 0 ? n : [];
}
function qg(e, n) {
  const r = new Set(e);
  return n.forEach((o) => {
    r.has(o) || r.add(o);
  }), Array.from(r);
}
function Kg(e, n) {
  const r = new Set(e);
  return n.forEach((o) => {
    r.has(o) && r.delete(o);
  }), Array.from(r);
}
function Ug(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function Gg(e) {
  const n = /* @__PURE__ */ new Map();
  return e.forEach((r, o) => {
    n.set(r.key, o);
  }), (r) => {
    var o;
    return (o = n.get(r)) !== null && o !== void 0 ? o : null;
  };
}
class Xg extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function Yg(e, n, r, o) {
  return uo(n.concat(e), r, o, !1);
}
function Zg(e, n) {
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
function Jg(e, n, r, o) {
  const i = uo(n, r, o, !1), a = uo(e, r, o, !0), l = Zg(e, r), s = [];
  return i.forEach((u) => {
    (a.has(u) || l.has(u)) && s.push(u);
  }), s.forEach((u) => i.delete(u)), i;
}
function Uo(e, n) {
  const { checkedKeys: r, keysToCheck: o, keysToUncheck: i, indeterminateKeys: a, cascade: l, leafOnly: s, checkStrategy: u, allowNotLoaded: d } = e;
  if (!l)
    return o !== void 0 ? {
      checkedKeys: qg(r, o),
      indeterminateKeys: Array.from(a)
    } : i !== void 0 ? {
      checkedKeys: Kg(r, i),
      indeterminateKeys: Array.from(a)
    } : {
      checkedKeys: Array.from(r),
      indeterminateKeys: Array.from(a)
    };
  const { levelTreeNodeMap: c } = n;
  let f;
  i !== void 0 ? f = Jg(i, r, n, d) : o !== void 0 ? f = Yg(o, r, n, d) : f = uo(r, n, d, !1);
  const v = u === "parent", m = u === "child" || s, p = f, g = /* @__PURE__ */ new Set(), b = Math.max.apply(null, Array.from(c.keys()));
  for (let x = b; x >= 0; x -= 1) {
    const B = x === 0, F = c.get(x);
    for (const y of F) {
      if (y.isLeaf)
        continue;
      const { key: A, shallowLoaded: T } = y;
      if (m && T && y.children.forEach((I) => {
        !I.disabled && !I.isLeaf && I.shallowLoaded && p.has(I.key) && p.delete(I.key);
      }), y.disabled || !T)
        continue;
      let C = !0, P = !1, O = !0;
      for (const I of y.children) {
        const K = I.key;
        if (!I.disabled) {
          if (O && (O = !1), p.has(K))
            P = !0;
          else if (g.has(K)) {
            P = !0, C = !1;
            break;
          } else if (C = !1, P)
            break;
        }
      }
      C && !O ? (v && y.children.forEach((I) => {
        !I.disabled && p.has(I.key) && p.delete(I.key);
      }), p.add(A)) : P && g.add(A), B && m && p.has(A) && p.delete(A);
    }
  }
  return {
    checkedKeys: Array.from(p),
    indeterminateKeys: Array.from(g)
  };
}
function uo(e, n, r, o) {
  const { treeNodeMap: i, getChildren: a } = n, l = /* @__PURE__ */ new Set(), s = new Set(e);
  return e.forEach((u) => {
    const d = i.get(u);
    d !== void 0 && gu(d, (c) => {
      if (c.disabled)
        return bi.STOP;
      const { key: f } = c;
      if (!l.has(f) && (l.add(f), s.add(f), jg(c.rawNode, a))) {
        if (o)
          return bi.STOP;
        if (!r)
          throw new Xg();
      }
    });
  }), s;
}
function Qg(e, { includeGroup: n = !1, includeSelf: r = !0 }, o) {
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
function em(e) {
  if (e.length === 0)
    return null;
  const n = e[0];
  return n.isGroup || n.ignored || n.disabled ? n.getNext() : n;
}
function tm(e, n) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return n ? r[(i + 1) % o] : i === r.length - 1 ? null : r[i + 1];
}
function Dl(e, n, { loop: r = !1, includeDisabled: o = !1 } = {}) {
  const i = n === "prev" ? nm : tm, a = {
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
        const c = oa(d, a);
        c !== null ? s = c : u(i(d, r));
      } else {
        const c = i(d, !1);
        if (c !== null)
          u(c);
        else {
          const f = rm(d);
          f != null && f.isGroup ? u(i(f, r)) : r && u(i(d, !0));
        }
      }
    }
  }
  return u(e), s;
}
function nm(e, n) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return n ? r[(i - 1 + o) % o] : i === 0 ? null : r[i - 1];
}
function rm(e) {
  return e.parent;
}
function oa(e, n = {}) {
  const { reverse: r = !1 } = n, { children: o } = e;
  if (o) {
    const { length: i } = o, a = r ? i - 1 : 0, l = r ? -1 : i, s = r ? -1 : 1;
    for (let u = a; u !== l; u += s) {
      const d = o[u];
      if (!d.disabled && !d.ignored)
        if (d.isGroup) {
          const c = oa(d, n);
          if (c !== null)
            return c;
        } else
          return d;
    }
  }
  return null;
}
const om = {
  getChild() {
    return this.ignored ? null : oa(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return Dl(this, "next", e);
  },
  getPrev(e = {}) {
    return Dl(this, "prev", e);
  }
};
function im(e, n) {
  const r = n ? new Set(n) : void 0, o = [];
  function i(a) {
    a.forEach((l) => {
      o.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || // normal non-leaf node
      r === void 0 || r.has(l.key)) && i(l.children);
    });
  }
  return i(e), o;
}
function am(e, n) {
  const r = e.key;
  for (; n; ) {
    if (n.key === r)
      return !0;
    n = n.parent;
  }
  return !1;
}
function mu(e, n, r, o, i, a = null, l = 0) {
  const s = [];
  return e.forEach((u, d) => {
    var c;
    process.env.NODE_ENV !== "production" && Vg(u, i) && console.error("[treemate]: node", u, "is invalid");
    const f = Object.create(o);
    if (f.rawNode = u, f.siblings = s, f.level = l, f.index = d, f.isFirstChild = d === 0, f.isLastChild = d + 1 === e.length, f.parent = a, !f.ignored) {
      const v = i(u);
      Array.isArray(v) && (f.children = mu(v, n, r, o, i, f, l + 1));
    }
    s.push(f), n.set(f.key, f), r.has(l) || r.set(l, []), (c = r.get(l)) === null || c === void 0 || c.push(f);
  }), s;
}
function bu(e, n = {}) {
  var r;
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), { getDisabled: a = Wg, getIgnored: l = Ng, getIsGroup: s = Ug, getKey: u = Lg } = n, d = (r = n.getChildren) !== null && r !== void 0 ? r : _g, c = n.ignoreEmptyChildren ? (y) => {
    const A = d(y);
    return Array.isArray(A) ? A.length ? A : null : A;
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
      return Ig(this.rawNode, c);
    },
    get shallowLoaded() {
      return Hg(this.rawNode, c);
    },
    get ignored() {
      return l(this.rawNode);
    },
    contains(y) {
      return am(this, y);
    }
  }, om), v = mu(e, o, i, f, c);
  function m(y) {
    if (y == null)
      return null;
    const A = o.get(y);
    return A && !A.isGroup && !A.ignored ? A : null;
  }
  function p(y) {
    if (y == null)
      return null;
    const A = o.get(y);
    return A && !A.ignored ? A : null;
  }
  function g(y, A) {
    const T = p(y);
    return T ? T.getPrev(A) : null;
  }
  function b(y, A) {
    const T = p(y);
    return T ? T.getNext(A) : null;
  }
  function x(y) {
    const A = p(y);
    return A ? A.getParent() : null;
  }
  function B(y) {
    const A = p(y);
    return A ? A.getChild() : null;
  }
  const F = {
    treeNodes: v,
    treeNodeMap: o,
    levelTreeNodeMap: i,
    maxLevel: Math.max(...i.keys()),
    getChildren: c,
    getFlattenedNodes(y) {
      return im(v, y);
    },
    getNode: m,
    getPrev: g,
    getNext: b,
    getParent: x,
    getChild: B,
    getFirstAvailableNode() {
      return em(v);
    },
    getPath(y, A = {}) {
      return Qg(y, A, F);
    },
    getCheckedKeys(y, A = {}) {
      const { cascade: T = !0, leafOnly: C = !1, checkStrategy: P = "all", allowNotLoaded: O = !1 } = A;
      return Uo({
        checkedKeys: qo(y),
        indeterminateKeys: Ko(y),
        cascade: T,
        leafOnly: C,
        checkStrategy: P,
        allowNotLoaded: O
      }, F);
    },
    check(y, A, T = {}) {
      const { cascade: C = !0, leafOnly: P = !1, checkStrategy: O = "all", allowNotLoaded: I = !1 } = T;
      return Uo({
        checkedKeys: qo(A),
        indeterminateKeys: Ko(A),
        keysToCheck: y == null ? [] : $l(y),
        cascade: C,
        leafOnly: P,
        checkStrategy: O,
        allowNotLoaded: I
      }, F);
    },
    uncheck(y, A, T = {}) {
      const { cascade: C = !0, leafOnly: P = !1, checkStrategy: O = "all", allowNotLoaded: I = !1 } = T;
      return Uo({
        checkedKeys: qo(A),
        indeterminateKeys: Ko(A),
        keysToUncheck: y == null ? [] : $l(y),
        cascade: C,
        leafOnly: P,
        checkStrategy: O,
        allowNotLoaded: I
      }, F);
    },
    getNonLeafKeys(y = {}) {
      return Mg(v, y);
    }
  };
  return F;
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
}, lm = bn(ue.neutralBase), Cu = bn(ue.neutralInvertBase), sm = `rgba(${Cu.slice(0, 3).join(", ")}, `;
function Pl(e) {
  return `${sm + String(e)})`;
}
function Ze(e) {
  const n = Array.from(Cu);
  return n[3] = Number(e), st(lm, n);
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
  iconColorHover: Mr(Ze(ue.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: Mr(Ze(ue.alpha4), {
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
  clearColorHover: Mr(Ze(ue.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: Mr(Ze(ue.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Pl(ue.alphaScrollbar),
  scrollbarColorHover: Pl(ue.alphaScrollbarHover),
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
}), um = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function dm(e) {
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
  return Object.assign(Object.assign({}, um), {
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
const yu = {
  name: "Empty",
  common: Ve,
  self: dm
}, cm = M("empty", `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [E("icon", `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [z("+", [E("description", `
 margin-top: 8px;
 `)])]), E("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), E("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]), fm = Object.assign(Object.assign({}, fe.props), {
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
}), wu = Q({
  name: "Empty",
  props: fm,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r,
      mergedComponentPropsRef: o
    } = Te(e), i = fe("Empty", "-empty", cm, yu, e, n), {
      localeRef: a
    } = Br("Empty"), l = R(() => {
      var c, f, v;
      return (c = e.description) !== null && c !== void 0 ? c : (v = (f = o == null ? void 0 : o.value) === null || f === void 0 ? void 0 : f.Empty) === null || v === void 0 ? void 0 : v.description;
    }), s = R(() => {
      var c, f;
      return ((f = (c = o == null ? void 0 : o.value) === null || c === void 0 ? void 0 : c.Empty) === null || f === void 0 ? void 0 : f.renderIcon) || (() => h(Fg, null));
    }), u = R(() => {
      const {
        size: c
      } = e, {
        common: {
          cubicBezierEaseInOut: f
        },
        self: {
          [Y("iconSize", c)]: v,
          [Y("fontSize", c)]: m,
          textColor: p,
          iconColor: g,
          extraTextColor: b
        }
      } = i.value;
      return {
        "--n-icon-size": v,
        "--n-font-size": m,
        "--n-bezier": f,
        "--n-text-color": p,
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
}), hm = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function pm(e) {
  const {
    scrollbarColor: n,
    scrollbarColorHover: r,
    scrollbarHeight: o,
    scrollbarWidth: i,
    scrollbarBorderRadius: a
  } = e;
  return Object.assign(Object.assign({}, hm), {
    height: o,
    width: i,
    borderRadius: a,
    color: n,
    colorHover: r
  });
}
const ia = {
  name: "Scrollbar",
  common: Ve,
  self: pm
}, {
  cubicBezierEaseInOut: El
} = sn;
function aa({
  name: e = "fade-in",
  enterDuration: n = "0.2s",
  leaveDuration: r = "0.2s",
  enterCubicBezier: o = El,
  leaveCubicBezier: i = El
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
const vm = M("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [z(">", [M("scrollbar-container", `
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
  M("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), z(">, +", [M("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [q("horizontal", `
 height: var(--n-scrollbar-height);
 `, [z(">", [E("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), q("horizontal--top", `
 inset: var(--n-scrollbar-rail-inset-horizontal-top); 
 `), q("horizontal--bottom", `
 inset: var(--n-scrollbar-rail-inset-horizontal-bottom); 
 `), q("vertical", `
 width: var(--n-scrollbar-width);
 `, [z(">", [E("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), q("vertical--left", `
 inset: var(--n-scrollbar-rail-inset-vertical-left); 
 `), q("vertical--right", `
 inset: var(--n-scrollbar-rail-inset-vertical-right); 
 `), q("disabled", [z(">", [E("scrollbar", "pointer-events: none;")])]), z(">", [E("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [aa(), z("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), xm = Object.assign(Object.assign({}, fe.props), {
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
}), yo = Q({
  name: "Scrollbar",
  props: xm,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Te(e), i = yt("Scrollbar", o, n), a = N(null), l = N(null), s = N(null), u = N(null), d = N(null), c = N(null), f = N(null), v = N(null), m = N(null), p = N(null), g = N(null), b = N(0), x = N(0), B = N(!1), F = N(!1);
    let y = !1, A = !1, T, C, P = 0, O = 0, I = 0, K = 0;
    const H = Ic(), t = fe("Scrollbar", "-scrollbar", vm, ia, e, n), S = R(() => {
      const {
        value: w
      } = v, {
        value: L
      } = c, {
        value: U
      } = p;
      return w === null || L === null || U === null ? 0 : Math.min(w, U * w / L + hr(t.value.self.width) * 1.5);
    }), $ = R(() => `${S.value}px`), _ = R(() => {
      const {
        value: w
      } = m, {
        value: L
      } = f, {
        value: U
      } = g;
      return w === null || L === null || U === null ? 0 : U * w / L + hr(t.value.self.height) * 1.5;
    }), k = R(() => `${_.value}px`), j = R(() => {
      const {
        value: w
      } = v, {
        value: L
      } = b, {
        value: U
      } = c, {
        value: te
      } = p;
      if (w === null || U === null || te === null)
        return 0;
      {
        const oe = U - w;
        return oe ? L / oe * (te - S.value) : 0;
      }
    }), J = R(() => `${j.value}px`), Z = R(() => {
      const {
        value: w
      } = m, {
        value: L
      } = x, {
        value: U
      } = f, {
        value: te
      } = g;
      if (w === null || U === null || te === null)
        return 0;
      {
        const oe = U - w;
        return oe ? L / oe * (te - _.value) : 0;
      }
    }), ae = R(() => `${Z.value}px`), W = R(() => {
      const {
        value: w
      } = v, {
        value: L
      } = c;
      return w !== null && L !== null && L > w;
    }), X = R(() => {
      const {
        value: w
      } = m, {
        value: L
      } = f;
      return w !== null && L !== null && L > w;
    }), ne = R(() => {
      const {
        trigger: w
      } = e;
      return w === "none" || B.value;
    }), we = R(() => {
      const {
        trigger: w
      } = e;
      return w === "none" || F.value;
    }), re = R(() => {
      const {
        container: w
      } = e;
      return w ? w() : l.value;
    }), pe = R(() => {
      const {
        content: w
      } = e;
      return w ? w() : s.value;
    }), Me = (w, L) => {
      if (!e.scrollable) return;
      if (typeof w == "number") {
        ye(w, L ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: U,
        top: te,
        index: oe,
        elSize: de,
        position: ce,
        behavior: ve,
        el: Ee,
        debounce: ct = !0
      } = w;
      (U !== void 0 || te !== void 0) && ye(U ?? 0, te ?? 0, 0, !1, ve), Ee !== void 0 ? ye(0, Ee.offsetTop, Ee.offsetHeight, ct, ve) : oe !== void 0 && de !== void 0 ? ye(0, oe * de, de, ct, ve) : ce === "bottom" ? ye(0, Number.MAX_SAFE_INTEGER, 0, !1, ve) : ce === "top" && ye(0, 0, 0, !1, ve);
    }, ie = Tf(() => {
      e.container || Me({
        top: b.value,
        left: x.value
      });
    }), Ne = () => {
      ie.isDeactivated || ee();
    }, ke = (w) => {
      if (ie.isDeactivated) return;
      const {
        onResize: L
      } = e;
      L && L(w), ee();
    }, me = (w, L) => {
      if (!e.scrollable) return;
      const {
        value: U
      } = re;
      U && (typeof w == "object" ? U.scrollBy(w) : U.scrollBy(w, L || 0));
    };
    function ye(w, L, U, te, oe) {
      const {
        value: de
      } = re;
      if (de) {
        if (te) {
          const {
            scrollTop: ce,
            offsetHeight: ve
          } = de;
          if (L > ce) {
            L + U <= ce + ve || de.scrollTo({
              left: w,
              top: L + U - ve,
              behavior: oe
            });
            return;
          }
        }
        de.scrollTo({
          left: w,
          top: L,
          behavior: oe
        });
      }
    }
    function be() {
      gt(), Be(), ee();
    }
    function Ye() {
      et();
    }
    function et() {
      at(), ot();
    }
    function at() {
      C !== void 0 && window.clearTimeout(C), C = window.setTimeout(() => {
        F.value = !1;
      }, e.duration);
    }
    function ot() {
      T !== void 0 && window.clearTimeout(T), T = window.setTimeout(() => {
        B.value = !1;
      }, e.duration);
    }
    function gt() {
      T !== void 0 && window.clearTimeout(T), B.value = !0;
    }
    function Be() {
      C !== void 0 && window.clearTimeout(C), F.value = !0;
    }
    function Pe(w) {
      const {
        onScroll: L
      } = e;
      L && L(w), Xe();
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
      } = pe;
      w && (c.value = w.offsetHeight, f.value = w.offsetWidth);
      const {
        value: L
      } = re;
      L && (v.value = L.offsetHeight, m.value = L.offsetWidth);
      const {
        value: U
      } = d, {
        value: te
      } = u;
      U && (g.value = U.offsetWidth), te && (p.value = te.offsetHeight);
    }
    function G() {
      const {
        value: w
      } = re;
      w && (b.value = w.scrollTop, x.value = w.scrollLeft * (i != null && i.value ? -1 : 1), v.value = w.offsetHeight, m.value = w.offsetWidth, c.value = w.scrollHeight, f.value = w.scrollWidth);
      const {
        value: L
      } = d, {
        value: U
      } = u;
      L && (g.value = L.offsetWidth), U && (p.value = U.offsetHeight);
    }
    function ee() {
      e.scrollable && (e.useUnifiedContainer ? G() : (qe(), Xe()));
    }
    function Re(w) {
      var L;
      return !(!((L = a.value) === null || L === void 0) && L.contains(qn(w)));
    }
    function un(w) {
      w.preventDefault(), w.stopPropagation(), A = !0, Le("mousemove", window, Tt, !0), Le("mouseup", window, Rt, !0), O = x.value, I = i != null && i.value ? window.innerWidth - w.clientX : w.clientX;
    }
    function Tt(w) {
      if (!A) return;
      T !== void 0 && window.clearTimeout(T), C !== void 0 && window.clearTimeout(C);
      const {
        value: L
      } = m, {
        value: U
      } = f, {
        value: te
      } = _;
      if (L === null || U === null) return;
      const de = (i != null && i.value ? window.innerWidth - w.clientX - I : w.clientX - I) * (U - L) / (L - te), ce = U - L;
      let ve = O + de;
      ve = Math.min(ce, ve), ve = Math.max(ve, 0);
      const {
        value: Ee
      } = re;
      if (Ee) {
        Ee.scrollLeft = ve * (i != null && i.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: ct
        } = e;
        ct && ct(ve);
      }
    }
    function Rt(w) {
      w.preventDefault(), w.stopPropagation(), De("mousemove", window, Tt, !0), De("mouseup", window, Rt, !0), A = !1, ee(), Re(w) && et();
    }
    function Xt(w) {
      w.preventDefault(), w.stopPropagation(), y = !0, Le("mousemove", window, wt, !0), Le("mouseup", window, Ot, !0), P = b.value, K = w.clientY;
    }
    function wt(w) {
      if (!y) return;
      T !== void 0 && window.clearTimeout(T), C !== void 0 && window.clearTimeout(C);
      const {
        value: L
      } = v, {
        value: U
      } = c, {
        value: te
      } = S;
      if (L === null || U === null) return;
      const de = (w.clientY - K) * (U - L) / (L - te), ce = U - L;
      let ve = P + de;
      ve = Math.min(ce, ve), ve = Math.max(ve, 0);
      const {
        value: Ee
      } = re;
      Ee && (Ee.scrollTop = ve);
    }
    function Ot(w) {
      w.preventDefault(), w.stopPropagation(), De("mousemove", window, wt, !0), De("mouseup", window, Ot, !0), y = !1, ee(), Re(w) && et();
    }
    nt(() => {
      const {
        value: w
      } = X, {
        value: L
      } = W, {
        value: U
      } = n, {
        value: te
      } = d, {
        value: oe
      } = u;
      te && (w ? te.classList.remove(`${U}-scrollbar-rail--disabled`) : te.classList.add(`${U}-scrollbar-rail--disabled`)), oe && (L ? oe.classList.remove(`${U}-scrollbar-rail--disabled`) : oe.classList.add(`${U}-scrollbar-rail--disabled`));
    }), rt(() => {
      e.container || ee();
    }), Ge(() => {
      T !== void 0 && window.clearTimeout(T), C !== void 0 && window.clearTimeout(C), De("mousemove", window, wt, !0), De("mouseup", window, Ot, !0);
    });
    const Yt = R(() => {
      const {
        common: {
          cubicBezierEaseInOut: w
        },
        self: {
          color: L,
          colorHover: U,
          height: te,
          width: oe,
          borderRadius: de,
          railInsetHorizontalTop: ce,
          railInsetHorizontalBottom: ve,
          railInsetVerticalRight: Ee,
          railInsetVerticalLeft: ct,
          railColor: Dn
        }
      } = t.value;
      return {
        "--n-scrollbar-bezier": w,
        "--n-scrollbar-color": L,
        "--n-scrollbar-color-hover": U,
        "--n-scrollbar-border-radius": de,
        "--n-scrollbar-width": oe,
        "--n-scrollbar-height": te,
        "--n-scrollbar-rail-inset-horizontal-top": ce,
        "--n-scrollbar-rail-inset-horizontal-bottom": ve,
        "--n-scrollbar-rail-inset-vertical-right": i != null && i.value ? Ca(Ee) : Ee,
        "--n-scrollbar-rail-inset-vertical-left": i != null && i.value ? Ca(ct) : ct,
        "--n-scrollbar-rail-color": Dn
      };
    }), lt = r ? je("scrollbar", void 0, Yt, e) : void 0;
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
      yBarSizePx: $,
      xBarSizePx: k,
      yBarTopPx: J,
      xBarLeftPx: ae,
      isShowXBar: ne,
      isShowYBar: we,
      isIos: H,
      handleScroll: Pe,
      handleContentResize: Ne,
      handleContainerResize: ke,
      handleYScrollMouseDown: Xt,
      handleXScrollMouseDown: un,
      cssVars: r ? void 0 : Yt,
      themeClass: lt == null ? void 0 : lt.themeClass,
      onRender: lt == null ? void 0 : lt.onRender
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
    const d = this.trigger === "none", c = (m, p) => h("div", {
      ref: "yRailRef",
      class: [`${r}-scrollbar-rail`, `${r}-scrollbar-rail--vertical`, `${r}-scrollbar-rail--vertical--${l}`, m],
      "data-scrollbar-rail": !0,
      style: [p || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, h(d ? oi : pt, d ? null : {
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
      var m, p;
      return (m = this.onRender) === null || m === void 0 || m.call(this), h("div", an(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${r}-scrollbar`, this.themeClass, i && `${r}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: o ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: o ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (p = n.default) === null || p === void 0 ? void 0 : p.call(n) : h("div", {
        role: "none",
        ref: "containerRef",
        class: [`${r}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, h(br, {
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
      }, h(d ? oi : pt, d ? null : {
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
    }, v = this.container ? f() : h(br, {
      onResize: this.handleContainerResize
    }, {
      default: f
    });
    return a ? h(xt, null, v, c(this.themeClass, this.cssVars)) : v;
  }
}), Bu = yo, gm = {
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
function mm(e) {
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
    fontSizeSmall: v,
    fontSizeMedium: m,
    fontSizeLarge: p,
    fontSizeHuge: g,
    heightTiny: b,
    heightSmall: x,
    heightMedium: B,
    heightLarge: F,
    heightHuge: y
  } = e;
  return Object.assign(Object.assign({}, gm), {
    optionFontSizeTiny: f,
    optionFontSizeSmall: v,
    optionFontSizeMedium: m,
    optionFontSizeLarge: p,
    optionFontSizeHuge: g,
    optionHeightTiny: b,
    optionHeightSmall: x,
    optionHeightMedium: B,
    optionHeightLarge: F,
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
const Su = {
  name: "InternalSelectMenu",
  common: Ve,
  peers: {
    Scrollbar: ia,
    Empty: yu
  },
  self: mm
};
function bm(e, n) {
  return h(pt, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => e ? h(zt, {
      clsPrefix: n,
      class: `${n}-base-select-option__check`
    }, {
      default: () => h(Cg)
    }) : null
  });
}
const zl = Q({
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
      handleOptionMouseEnter: v
    } = xe(Ri), m = We(() => {
      const {
        value: x
      } = r;
      return x ? e.tmNode.key === x.key : !1;
    });
    function p(x) {
      const {
        tmNode: B
      } = e;
      B.disabled || f(x, B);
    }
    function g(x) {
      const {
        tmNode: B
      } = e;
      B.disabled || v(x, B);
    }
    function b(x) {
      const {
        tmNode: B
      } = e, {
        value: F
      } = m;
      B.disabled || F || v(x, B);
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
        const F = e.tmNode.rawNode[u.value];
        if (B) {
          const {
            value: y
          } = i;
          return y.has(F);
        } else
          return x === F;
      }),
      labelField: s,
      renderLabel: a,
      renderOption: l,
      handleMouseMove: b,
      handleMouseEnter: g,
      handleClick: p
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
    } = this, v = bm(r, e), m = u ? [u(n, r), a && v] : [Qe(n[this.labelField], n, r), a && v], p = l == null ? void 0 : l(n), g = h("div", Object.assign({}, p, {
      class: [`${e}-base-select-option`, n.class, p == null ? void 0 : p.class, {
        [`${e}-base-select-option--disabled`]: n.disabled,
        [`${e}-base-select-option--selected`]: r,
        [`${e}-base-select-option--grouped`]: i,
        [`${e}-base-select-option--pending`]: o,
        [`${e}-base-select-option--show-checkmark`]: a
      }],
      style: [(p == null ? void 0 : p.style) || "", n.style || ""],
      onClick: To([d, p == null ? void 0 : p.onClick]),
      onMouseenter: To([c, p == null ? void 0 : p.onMouseenter]),
      onMousemove: To([f, p == null ? void 0 : p.onMousemove])
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
}), kl = Q({
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
    } = xe(Ri);
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
  cubicBezierEaseIn: Tl,
  cubicBezierEaseOut: Rl
} = sn;
function wo({
  transformOrigin: e = "inherit",
  duration: n = ".2s",
  enterScale: r = ".9",
  originalTransform: o = "",
  originalTransition: i = ""
} = {}) {
  return [z("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${Tl}, transform ${n} ${Tl} ${i && `,${i}`}`
  }), z("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${Rl}, transform ${n} ${Rl} ${i && `,${i}`}`
  }), z("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${o} scale(${r})`
  }), z("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${o} scale(1)`
  })];
}
const Cm = M("base-select-menu", `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [M("scrollbar", `
 max-height: var(--n-height);
 `), M("virtual-list", `
 max-height: var(--n-height);
 `), M("base-select-option", `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [E("content", `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), M("base-select-group-header", `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), M("base-select-menu-option-wrapper", `
 position: relative;
 width: 100%;
 `), E("loading, empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), E("loading", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), E("header", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), E("action", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), M("base-select-group-header", `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), M("base-select-option", `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [q("show-checkmark", `
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
 `), q("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), q("pending", [z("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), q("selected", `
 color: var(--n-option-text-color-active);
 `, [z("&::before", `
 background-color: var(--n-option-color-active);
 `), q("pending", [z("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), q("disabled", `
 cursor: not-allowed;
 `, [He("selected", `
 color: var(--n-option-text-color-disabled);
 `), q("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), E("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [wo({
  enterScale: "0.5"
})])])]), ym = Q({
  name: "InternalSelectMenu",
  props: Object.assign(Object.assign({}, fe.props), {
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
    } = Te(e), o = yt("InternalSelectMenu", r, n), i = fe("InternalSelectMenu", "-internal-select-menu", Cm, Su, e, le(e, "clsPrefix")), a = N(null), l = N(null), s = N(null), u = R(() => e.treeMate.getFlattenedNodes()), d = R(() => Gg(u.value)), c = N(null);
    function f() {
      const {
        treeMate: W
      } = e;
      let X = null;
      const {
        value: ne
      } = e;
      ne === null ? X = W.getFirstAvailableNode() : (e.multiple ? X = W.getNode((ne || [])[(ne || []).length - 1]) : X = W.getNode(ne), (!X || X.disabled) && (X = W.getFirstAvailableNode())), S(X || null);
    }
    function v() {
      const {
        value: W
      } = c;
      W && !e.treeMate.getNode(W.key) && (c.value = null);
    }
    let m;
    ze(() => e.show, (W) => {
      W ? m = ze(() => e.treeMate, () => {
        e.resetMenuOnOptionsChange ? (e.autoPending ? f() : v(), Et($)) : v();
      }, {
        immediate: !0
      }) : m == null || m();
    }, {
      immediate: !0
    }), Ge(() => {
      m == null || m();
    });
    const p = R(() => hr(i.value.self[Y("optionHeight", e.size)])), g = R(() => $t(i.value.self[Y("padding", e.size)])), b = R(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), x = R(() => {
      const W = u.value;
      return W && W.length === 0;
    });
    function B(W) {
      const {
        onToggle: X
      } = e;
      X && X(W);
    }
    function F(W) {
      const {
        onScroll: X
      } = e;
      X && X(W);
    }
    function y(W) {
      var X;
      (X = s.value) === null || X === void 0 || X.sync(), F(W);
    }
    function A() {
      var W;
      (W = s.value) === null || W === void 0 || W.sync();
    }
    function T() {
      const {
        value: W
      } = c;
      return W || null;
    }
    function C(W, X) {
      X.disabled || S(X, !1);
    }
    function P(W, X) {
      X.disabled || B(X);
    }
    function O(W) {
      var X;
      Ht(W, "action") || (X = e.onKeyup) === null || X === void 0 || X.call(e, W);
    }
    function I(W) {
      var X;
      Ht(W, "action") || (X = e.onKeydown) === null || X === void 0 || X.call(e, W);
    }
    function K(W) {
      var X;
      (X = e.onMousedown) === null || X === void 0 || X.call(e, W), !e.focusable && W.preventDefault();
    }
    function H() {
      const {
        value: W
      } = c;
      W && S(W.getNext({
        loop: !0
      }), !0);
    }
    function t() {
      const {
        value: W
      } = c;
      W && S(W.getPrev({
        loop: !0
      }), !0);
    }
    function S(W, X = !1) {
      c.value = W, X && $();
    }
    function $() {
      var W, X;
      const ne = c.value;
      if (!ne) return;
      const we = d.value(ne.key);
      we !== null && (e.virtualScroll ? (W = l.value) === null || W === void 0 || W.scrollTo({
        index: we
      }) : (X = s.value) === null || X === void 0 || X.scrollTo({
        index: we,
        elSize: p.value
      }));
    }
    function _(W) {
      var X, ne;
      !((X = a.value) === null || X === void 0) && X.contains(W.target) && ((ne = e.onFocus) === null || ne === void 0 || ne.call(e, W));
    }
    function k(W) {
      var X, ne;
      !((X = a.value) === null || X === void 0) && X.contains(W.relatedTarget) || (ne = e.onBlur) === null || ne === void 0 || ne.call(e, W);
    }
    Fe(Ri, {
      handleOptionMouseEnter: C,
      handleOptionClick: P,
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
    }), Fe(ms, a), rt(() => {
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
          borderRadius: we,
          color: re,
          groupHeaderTextColor: pe,
          actionDividerColor: Me,
          optionTextColorPressed: ie,
          optionTextColor: Ne,
          optionTextColorDisabled: ke,
          optionTextColorActive: me,
          optionOpacityDisabled: ye,
          optionCheckColor: be,
          actionTextColor: Ye,
          optionColorPending: et,
          optionColorActive: at,
          loadingColor: ot,
          loadingSize: gt,
          optionColorActivePending: Be,
          [Y("optionFontSize", W)]: Pe,
          [Y("optionHeight", W)]: Xe,
          [Y("optionPadding", W)]: qe
        }
      } = i.value;
      return {
        "--n-height": ne,
        "--n-action-divider-color": Me,
        "--n-action-text-color": Ye,
        "--n-bezier": X,
        "--n-border-radius": we,
        "--n-color": re,
        "--n-option-font-size": Pe,
        "--n-group-header-text-color": pe,
        "--n-option-check-color": be,
        "--n-option-color-pending": et,
        "--n-option-color-active": at,
        "--n-option-color-active-pending": Be,
        "--n-option-height": Xe,
        "--n-option-opacity-disabled": ye,
        "--n-option-text-color": Ne,
        "--n-option-text-color-active": me,
        "--n-option-text-color-disabled": ke,
        "--n-option-text-color-pressed": ie,
        "--n-option-padding": qe,
        "--n-option-padding-left": $t(qe, "left"),
        "--n-option-padding-right": $t(qe, "right"),
        "--n-loading-color": ot,
        "--n-loading-size": gt
      };
    }), {
      inlineThemeDisabled: J
    } = e, Z = J ? je("internal-select-menu", R(() => e.size[0]), j, e) : void 0, ae = {
      selfRef: a,
      next: H,
      prev: t,
      getPendingTmNode: T
    };
    return Is(a, e.onResize), Object.assign({
      mergedTheme: i,
      mergedClsPrefix: n,
      rtlEnabled: o,
      virtualListRef: l,
      scrollbarRef: s,
      itemSize: p,
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
      doScroll: F,
      handleFocusin: _,
      handleFocusout: k,
      handleKeyUp: O,
      handleKeyDown: I,
      handleMouseDown: K,
      handleVirtualListResize: A,
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
    }, h(Co, {
      clsPrefix: r,
      strokeWidth: 20
    })) : this.empty ? h("div", {
      class: `${r}-base-select-menu__empty`,
      "data-empty": !0
    }, Dt(e.empty, () => [h(wu, {
      theme: o.peers.Empty,
      themeOverrides: o.peerOverrides.Empty,
      size: this.size
    })])) : h(yo, {
      ref: "scrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: n ? this.virtualListContainer : void 0,
      content: n ? this.virtualListContent : void 0,
      onScroll: n ? void 0 : this.doScroll
    }, {
      default: () => n ? h(Df, {
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
        }) => l.isGroup ? h(kl, {
          key: l.key,
          clsPrefix: r,
          tmNode: l
        }) : l.ignored ? null : h(zl, {
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
      }, this.flattenedNodes.map((l) => l.isGroup ? h(kl, {
        key: l.key,
        clsPrefix: r,
        tmNode: l
      }) : h(zl, {
        clsPrefix: r,
        key: l.key,
        tmNode: l
      })))
    }), _e(e.action, (l) => l && [h("div", {
      class: `${r}-base-select-menu__action`,
      "data-action": !0,
      key: "action"
    }, l), h(kg, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
}), wm = M("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), Bm = Q({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    $n("-base-wave", wm, le(e, "clsPrefix"));
    const n = N(null), r = N(!1);
    let o = null;
    return Ge(() => {
      o !== null && window.clearTimeout(o);
    }), {
      active: r,
      selfRef: n,
      play() {
        o !== null && (window.clearTimeout(o), r.value = !1, o = null), Et(() => {
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
}), Sm = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function Fm(e) {
  const {
    boxShadow2: n,
    popoverColor: r,
    textColor2: o,
    borderRadius: i,
    fontSize: a,
    dividerColor: l
  } = e;
  return Object.assign(Object.assign({}, Sm), {
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
  self: Fm
}, Go = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ke = "var(--n-arrow-height) * 1.414", Am = z([M("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [z(">", [M("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), He("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [He("scrollable", [He("show-header-or-footer", "padding: var(--n-padding);")])]), E("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), E("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), q("scrollable, show-header-or-footer", [E("content", `
 padding: var(--n-padding);
 `)])]), M("popover-shared", `
 transform-origin: inherit;
 `, [
  M("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [M("popover-arrow", `
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
]), ft("top-start", `
 top: calc(${Ke} / -2);
 left: calc(${Nt("top-start")} - var(--v-offset-left));
 `), ft("top", `
 top: calc(${Ke} / -2);
 transform: translateX(calc(${Ke} / -2)) rotate(45deg);
 left: 50%;
 `), ft("top-end", `
 top: calc(${Ke} / -2);
 right: calc(${Nt("top-end")} + var(--v-offset-left));
 `), ft("bottom-start", `
 bottom: calc(${Ke} / -2);
 left: calc(${Nt("bottom-start")} - var(--v-offset-left));
 `), ft("bottom", `
 bottom: calc(${Ke} / -2);
 transform: translateX(calc(${Ke} / -2)) rotate(45deg);
 left: 50%;
 `), ft("bottom-end", `
 bottom: calc(${Ke} / -2);
 right: calc(${Nt("bottom-end")} + var(--v-offset-left));
 `), ft("left-start", `
 left: calc(${Ke} / -2);
 top: calc(${Nt("left-start")} - var(--v-offset-top));
 `), ft("left", `
 left: calc(${Ke} / -2);
 transform: translateY(calc(${Ke} / -2)) rotate(45deg);
 top: 50%;
 `), ft("left-end", `
 left: calc(${Ke} / -2);
 bottom: calc(${Nt("left-end")} + var(--v-offset-top));
 `), ft("right-start", `
 right: calc(${Ke} / -2);
 top: calc(${Nt("right-start")} - var(--v-offset-top));
 `), ft("right", `
 right: calc(${Ke} / -2);
 transform: translateY(calc(${Ke} / -2)) rotate(45deg);
 top: 50%;
 `), ft("right-end", `
 right: calc(${Ke} / -2);
 bottom: calc(${Nt("right-end")} + var(--v-offset-top));
 `), ...ex({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, n) => {
  const r = ["right", "left"].includes(n), o = r ? "width" : "height";
  return e.map((i) => {
    const a = i.split("-")[1] === "end", s = `calc((${`var(--v-target-${o}, 0px)`} - ${Ke}) / 2)`, u = Nt(i);
    return z(`[v-placement="${i}"] >`, [M("popover-shared", [q("center-arrow", [M("popover-arrow", `${n}: calc(max(${s}, ${u}) ${a ? "+" : "-"} var(--v-offset-${r ? "left" : "top"}));`)])])]);
  });
})]);
function Nt(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function ft(e, n) {
  const r = e.split("-")[0], o = ["top", "bottom"].includes(r) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return z(`[v-placement="${e}"] >`, [M("popover-shared", `
 margin-${Go[r]}: var(--n-space);
 `, [q("show-arrow", `
 margin-${Go[r]}: var(--n-space-arrow);
 `), q("overlap", `
 margin: 0;
 `), wc("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${Go[r]}: auto;
 ${o}
 `, [M("popover-arrow", n)])])]);
}
const Fu = Object.assign(Object.assign({}, fe.props), {
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
function Au({
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
const $m = Q({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: Fu,
  setup(e, {
    slots: n,
    attrs: r
  }) {
    const {
      namespaceRef: o,
      mergedClsPrefixRef: i,
      inlineThemeDisabled: a
    } = Te(e), l = fe("Popover", "-popover", Am, zr, e, i), s = N(null), u = xe("NPopover"), d = N(null), c = N(e.show), f = N(!1);
    nt(() => {
      const {
        show: C
      } = e;
      C && !Bc() && !e.internalDeactivateImmediately && (f.value = !0);
    });
    const v = R(() => {
      const {
        trigger: C,
        onClickoutside: P
      } = e, O = [], {
        positionManuallyRef: {
          value: I
        }
      } = u;
      return I || (C === "click" && !P && O.push([gr, y, void 0, {
        capture: !0
      }]), C === "hover" && O.push([Wc, F])), P && O.push([gr, y, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && f.value) && O.push([fr, e.show]), O;
    }), m = R(() => {
      const {
        common: {
          cubicBezierEaseInOut: C,
          cubicBezierEaseIn: P,
          cubicBezierEaseOut: O
        },
        self: {
          space: I,
          spaceArrow: K,
          padding: H,
          fontSize: t,
          textColor: S,
          dividerColor: $,
          color: _,
          boxShadow: k,
          borderRadius: j,
          arrowHeight: J,
          arrowOffset: Z,
          arrowOffsetVertical: ae
        }
      } = l.value;
      return {
        "--n-box-shadow": k,
        "--n-bezier": C,
        "--n-bezier-ease-in": P,
        "--n-bezier-ease-out": O,
        "--n-font-size": t,
        "--n-text-color": S,
        "--n-color": _,
        "--n-divider-color": $,
        "--n-border-radius": j,
        "--n-arrow-height": J,
        "--n-arrow-offset": Z,
        "--n-arrow-offset-vertical": ae,
        "--n-padding": H,
        "--n-space": I,
        "--n-space-arrow": K
      };
    }), p = R(() => {
      const C = e.width === "trigger" ? void 0 : Wt(e.width), P = [];
      C && P.push({
        width: C
      });
      const {
        maxWidth: O,
        minWidth: I
      } = e;
      return O && P.push({
        maxWidth: Wt(O)
      }), I && P.push({
        maxWidth: Wt(I)
      }), a || P.push(m.value), P;
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
    function F(C) {
      e.trigger === "hover" && !A().contains(qn(C)) && u.handleMouseMoveOutside(C);
    }
    function y(C) {
      (e.trigger === "click" && !A().contains(qn(C)) || e.onClickoutside) && u.handleClickOutside(C);
    }
    function A() {
      return u.getTriggerElement();
    }
    Fe(Pr, d), Fe(xo, null), Fe(vo, null);
    function T() {
      if (g == null || g.onRender(), !(e.displayDirective === "show" || e.show || e.animated && f.value))
        return null;
      let P;
      const O = u.internalRenderBodyRef.value, {
        value: I
      } = i;
      if (O)
        P = O(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${I}-popover-shared`, g == null ? void 0 : g.themeClass.value, e.overlap && `${I}-popover-shared--overlap`, e.showArrow && `${I}-popover-shared--show-arrow`, e.arrowPointToCenter && `${I}-popover-shared--center-arrow`],
          d,
          p.value,
          x,
          B
        );
      else {
        const {
          value: K
        } = u.extraClassRef, {
          internalTrapFocus: H
        } = e, t = !ri(n.header) || !ri(n.footer), S = () => {
          var $, _;
          const k = t ? h(xt, null, _e(n.header, (Z) => Z ? h("div", {
            class: [`${I}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, Z) : null), _e(n.default, (Z) => Z ? h("div", {
            class: [`${I}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, n) : null), _e(n.footer, (Z) => Z ? h("div", {
            class: [`${I}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, Z) : null)) : e.scrollable ? ($ = n.default) === null || $ === void 0 ? void 0 : $.call(n) : h("div", {
            class: [`${I}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, n), j = e.scrollable ? h(Bu, {
            contentClass: t ? void 0 : `${I}-popover__content ${(_ = e.contentClass) !== null && _ !== void 0 ? _ : ""}`,
            contentStyle: t ? void 0 : e.contentStyle
          }, {
            default: () => k
          }) : k, J = e.showArrow ? Au({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: I
          }) : null;
          return [j, J];
        };
        P = h("div", an({
          class: [`${I}-popover`, `${I}-popover-shared`, g == null ? void 0 : g.themeClass.value, K.map(($) => `${I}-${$}`), {
            [`${I}-popover--scrollable`]: e.scrollable,
            [`${I}-popover--show-header-or-footer`]: t,
            [`${I}-popover--raw`]: e.raw,
            [`${I}-popover-shared--overlap`]: e.overlap,
            [`${I}-popover-shared--show-arrow`]: e.showArrow,
            [`${I}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: d,
          style: p.value,
          onKeydown: u.handleKeydown,
          onMouseenter: x,
          onMouseleave: B
        }, r), H ? h(Ms, {
          active: e.show,
          autoFocus: !0
        }, {
          default: S
        }) : S());
      }
      return jt(P, v.value);
    }
    return {
      displayed: f,
      namespace: o,
      isMounted: u.isMountedRef,
      zIndex: u.zIndexRef,
      followerRef: s,
      adjustedTo: qt(e),
      followerEnabled: c,
      renderContentNode: T
    };
  },
  render() {
    return h(Li, {
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
      default: () => this.animated ? h(pt, {
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
}), Dm = Object.keys(Fu), Pm = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function Em(e, n, r) {
  Pm[n].forEach((o) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const i = e.props[o], a = r[o];
    i ? e.props[o] = (...l) => {
      i(...l), a(...l);
    } : e.props[o] = a;
  });
}
const kr = {
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
}, zm = Object.assign(Object.assign(Object.assign({}, fe.props), kr), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), Tr = Q({
  name: "Popover",
  inheritAttrs: !1,
  props: zm,
  __popover__: !0,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.maxWidth !== void 0 && tt("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && tt("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && tt("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && tt("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && tt("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const n = Dr(), r = N(null), o = R(() => e.show), i = N(e.defaultShow), a = Un(o, i), l = We(() => e.disabled ? !1 : a.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: $
      } = e;
      return !!($ != null && $());
    }, u = () => s() ? !1 : a.value, d = Ti(e, ["arrow", "showArrow"]), c = R(() => e.overlap ? !1 : d.value);
    let f = null;
    const v = N(null), m = N(null), p = We(() => e.x !== void 0 && e.y !== void 0);
    function g($) {
      const {
        "onUpdate:show": _,
        onUpdateShow: k,
        onShow: j,
        onHide: J
      } = e;
      i.value = $, _ && he(_, $), k && he(k, $), $ && j && he(j, !0), $ && J && he(J, !1);
    }
    function b() {
      f && f.syncPosition();
    }
    function x() {
      const {
        value: $
      } = v;
      $ && (window.clearTimeout($), v.value = null);
    }
    function B() {
      const {
        value: $
      } = m;
      $ && (window.clearTimeout($), m.value = null);
    }
    function F() {
      const $ = s();
      if (e.trigger === "focus" && !$) {
        if (u()) return;
        g(!0);
      }
    }
    function y() {
      const $ = s();
      if (e.trigger === "focus" && !$) {
        if (!u()) return;
        g(!1);
      }
    }
    function A() {
      const $ = s();
      if (e.trigger === "hover" && !$) {
        if (B(), v.value !== null || u()) return;
        const _ = () => {
          g(!0), v.value = null;
        }, {
          delay: k
        } = e;
        k === 0 ? _() : v.value = window.setTimeout(_, k);
      }
    }
    function T() {
      const $ = s();
      if (e.trigger === "hover" && !$) {
        if (x(), m.value !== null || !u()) return;
        const _ = () => {
          g(!1), m.value = null;
        }, {
          duration: k
        } = e;
        k === 0 ? _() : m.value = window.setTimeout(_, k);
      }
    }
    function C() {
      T();
    }
    function P($) {
      var _;
      u() && (e.trigger === "click" && (x(), B(), g(!1)), (_ = e.onClickoutside) === null || _ === void 0 || _.call(e, $));
    }
    function O() {
      if (e.trigger === "click" && !s()) {
        x(), B();
        const $ = !u();
        g($);
      }
    }
    function I($) {
      e.internalTrapFocus && $.key === "Escape" && (x(), B(), g(!1));
    }
    function K($) {
      i.value = $;
    }
    function H() {
      var $;
      return ($ = r.value) === null || $ === void 0 ? void 0 : $.targetRef;
    }
    function t($) {
      f = $;
    }
    return Fe("NPopover", {
      getTriggerElement: H,
      handleKeydown: I,
      handleMouseEnter: A,
      handleMouseLeave: T,
      handleClickOutside: P,
      handleMouseMoveOutside: C,
      setBodyInstance: t,
      positionManuallyRef: p,
      isMountedRef: n,
      zIndexRef: le(e, "zIndex"),
      extraClassRef: le(e, "internalExtraClass"),
      internalRenderBodyRef: le(e, "internalRenderBody")
    }), nt(() => {
      a.value && s() && g(!1);
    }), {
      binderInstRef: r,
      positionManually: p,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: i,
      mergedShowArrow: c,
      getMergedShow: u,
      setShow: K,
      handleClick: O,
      handleMouseEnter: A,
      handleMouseLeave: T,
      handleFocus: F,
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
    if (!n && (r.activator ? o = ti(r, "activator") : o = ti(r, "trigger"), o)) {
      o = Xl(o), o = o.type === Rd ? h("span", [o]) : o;
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
        Em(o, l ? "nested" : n ? "manual" : this.trigger, u);
      }
    }
    return h(Oi, {
      ref: "binderInstRef",
      syncTarget: !i,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const a = this.getMergedShow();
        return [this.internalTrapFocus && a ? jt(h("div", {
          style: {
            position: "fixed",
            inset: 0
          }
        }), [[Ii, {
          enabled: a,
          zIndex: this.zIndex
        }]]) : null, n ? null : h(Mi, null, {
          default: () => o
        }), h($m, Cn(this.$props, Dm, Object.assign(Object.assign({}, this.$attrs), {
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
}), km = {
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
function Tm(e) {
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
    tagColor: v,
    closeIconColor: m,
    closeIconColorHover: p,
    closeIconColorPressed: g,
    borderRadiusSmall: b,
    fontSizeMini: x,
    fontSizeTiny: B,
    fontSizeSmall: F,
    fontSizeMedium: y,
    heightMini: A,
    heightTiny: T,
    heightSmall: C,
    heightMedium: P,
    closeColorHover: O,
    closeColorPressed: I,
    buttonColor2Hover: K,
    buttonColor2Pressed: H,
    fontWeightStrong: t
  } = e;
  return Object.assign(Object.assign({}, km), {
    closeBorderRadius: b,
    heightTiny: A,
    heightSmall: T,
    heightMedium: C,
    heightLarge: P,
    borderRadius: b,
    opacityDisabled: f,
    fontSizeTiny: x,
    fontSizeSmall: B,
    fontSizeMedium: F,
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
    color: v,
    colorBordered: "rgb(250, 250, 252)",
    closeIconColor: m,
    closeIconColorHover: p,
    closeIconColorPressed: g,
    closeColorHover: O,
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
const Rm = {
  name: "Tag",
  common: Ve,
  self: Tm
}, Om = {
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
}, Mm = M("tag", `
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
`, [q("strong", `
 font-weight: var(--n-font-weight-strong);
 `), E("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), E("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), E("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), E("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), q("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [E("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), E("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), q("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), q("icon, avatar", [q("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), q("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), q("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [He("disabled", [z("&:hover", "background-color: var(--n-color-hover-checkable);", [He("checked", "color: var(--n-text-color-hover-checkable);")]), z("&:active", "background-color: var(--n-color-pressed-checkable);", [He("checked", "color: var(--n-text-color-pressed-checkable);")])]), q("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [He("disabled", [z("&:hover", "background-color: var(--n-color-checked-hover);"), z("&:active", "background-color: var(--n-color-checked-pressed);")])])])]), Im = Object.assign(Object.assign(Object.assign({}, fe.props), Om), {
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
}), _m = "n-tag", Xo = Q({
  name: "Tag",
  props: Im,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.onCheckedChange !== void 0 && tt("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
    });
    const n = N(null), {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Te(e), l = fe("Tag", "-tag", Mm, Rm, e, o);
    Fe(_m, {
      roundRef: le(e, "round")
    });
    function s() {
      if (!e.disabled && e.checkable) {
        const {
          checked: m,
          onCheckedChange: p,
          onUpdateChecked: g,
          "onUpdate:checked": b
        } = e;
        g && g(!m), b && b(!m), p && p(!m);
      }
    }
    function u(m) {
      if (e.triggerClickOnClose || m.stopPropagation(), !e.disabled) {
        const {
          onClose: p
        } = e;
        p && he(p, m);
      }
    }
    const d = {
      setTextContent(m) {
        const {
          value: p
        } = n;
        p && (p.textContent = m);
      }
    }, c = yt("Tag", a, o), f = R(() => {
      const {
        type: m,
        size: p,
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
          closeMargin: F,
          borderRadius: y,
          opacityDisabled: A,
          textColorCheckable: T,
          textColorHoverCheckable: C,
          textColorPressedCheckable: P,
          textColorChecked: O,
          colorCheckable: I,
          colorHoverCheckable: K,
          colorPressedCheckable: H,
          colorChecked: t,
          colorCheckedHover: S,
          colorCheckedPressed: $,
          closeBorderRadius: _,
          fontWeightStrong: k,
          [Y("colorBordered", m)]: j,
          [Y("closeSize", p)]: J,
          [Y("closeIconSize", p)]: Z,
          [Y("fontSize", p)]: ae,
          [Y("height", p)]: W,
          [Y("color", m)]: X,
          [Y("textColor", m)]: ne,
          [Y("border", m)]: we,
          [Y("closeIconColor", m)]: re,
          [Y("closeIconColorHover", m)]: pe,
          [Y("closeIconColorPressed", m)]: Me,
          [Y("closeColorHover", m)]: ie,
          [Y("closeColorPressed", m)]: Ne
        }
      } = l.value, ke = $t(F);
      return {
        "--n-font-weight-strong": k,
        "--n-avatar-size-override": `calc(${W} - 8px)`,
        "--n-bezier": x,
        "--n-border-radius": y,
        "--n-border": we,
        "--n-close-icon-size": Z,
        "--n-close-color-pressed": Ne,
        "--n-close-color-hover": ie,
        "--n-close-border-radius": _,
        "--n-close-icon-color": re,
        "--n-close-icon-color-hover": pe,
        "--n-close-icon-color-pressed": Me,
        "--n-close-icon-color-disabled": re,
        "--n-close-margin-top": ke.top,
        "--n-close-margin-right": ke.right,
        "--n-close-margin-bottom": ke.bottom,
        "--n-close-margin-left": ke.left,
        "--n-close-size": J,
        "--n-color": g || (r.value ? j : X),
        "--n-color-checkable": I,
        "--n-color-checked": t,
        "--n-color-checked-hover": S,
        "--n-color-checked-pressed": $,
        "--n-color-hover-checkable": K,
        "--n-color-pressed-checkable": H,
        "--n-font-size": ae,
        "--n-height": W,
        "--n-opacity-disabled": A,
        "--n-padding": B,
        "--n-text-color": b || ne,
        "--n-text-color-checkable": T,
        "--n-text-color-checked": O,
        "--n-text-color-hover-checkable": C,
        "--n-text-color-pressed-checkable": P
      };
    }), v = i ? je("tag", R(() => {
      let m = "";
      const {
        type: p,
        size: g,
        color: {
          color: b,
          textColor: x
        } = {}
      } = e;
      return m += p[0], m += g[0], b && (m += `a${to(b)}`), x && (m += `b${to(x)}`), r.value && (m += "c"), m;
    }), f, e) : void 0;
    return Object.assign(Object.assign({}, d), {
      rtlEnabled: c,
      mergedClsPrefix: o,
      contentRef: n,
      mergedBordered: r,
      handleClick: s,
      handleCloseClick: u,
      cssVars: i ? void 0 : f,
      themeClass: v == null ? void 0 : v.themeClass,
      onRender: v == null ? void 0 : v.onRender
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
    }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e)), !this.checkable && i ? h(ra, {
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
}), Lm = M("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [z(">", [E("clear", `
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
 `)]), E("placeholder", `
 display: flex;
 `), E("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [so({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), Ci = Q({
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
    return $n("-base-clear", Lm, le(e, "clsPrefix")), {
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
    }, h(na, null, {
      default: () => {
        var n, r;
        return this.show ? h("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, Dt(this.$slots.icon, () => [h(zt, {
          clsPrefix: e
        }, {
          default: () => h(Pg, null)
        })])) : h("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (r = (n = this.$slots).placeholder) === null || r === void 0 ? void 0 : r.call(n));
      }
    }));
  }
}), $u = Q({
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
      return h(Co, {
        clsPrefix: r,
        class: `${r}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? h(Ci, {
          clsPrefix: r,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => h(zt, {
            clsPrefix: r,
            class: `${r}-base-suffix__arrow`
          }, {
            default: () => Dt(n.default, () => [h(Dg, null)])
          })
        }) : null
      });
    };
  }
}), Nm = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
function Hm(e) {
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
    borderColor: v,
    iconColor: m,
    iconColorDisabled: p,
    clearColor: g,
    clearColorHover: b,
    clearColorPressed: x,
    placeholderColor: B,
    placeholderColorDisabled: F,
    fontSizeTiny: y,
    fontSizeSmall: A,
    fontSizeMedium: T,
    fontSizeLarge: C,
    heightTiny: P,
    heightSmall: O,
    heightMedium: I,
    heightLarge: K
  } = e;
  return Object.assign(Object.assign({}, Nm), {
    fontSizeTiny: y,
    fontSizeSmall: A,
    fontSizeMedium: T,
    fontSizeLarge: C,
    heightTiny: P,
    heightSmall: O,
    heightMedium: I,
    heightLarge: K,
    borderRadius: n,
    // default
    textColor: r,
    textColorDisabled: o,
    placeholderColor: B,
    placeholderColorDisabled: F,
    color: i,
    colorDisabled: a,
    colorActive: i,
    border: `1px solid ${v}`,
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
    arrowColorDisabled: p,
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
const Du = {
  name: "InternalSelection",
  common: Ve,
  peers: {
    Popover: zr
  },
  self: Hm
}, Wm = z([M("base-selection", `
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
 `, [M("base-loading", `
 color: var(--n-loading-color);
 `), M("base-selection-tags", "min-height: var(--n-height);"), E("border, state-border", `
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
 `), E("state-border", `
 z-index: 1;
 border-color: #0000;
 `), M("base-suffix", `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [E("arrow", `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), M("base-selection-overlay", `
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
 `, [E("wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), M("base-selection-placeholder", `
 color: var(--n-placeholder-color);
 `, [E("inner", `
 max-width: 100%;
 overflow: hidden;
 `)]), M("base-selection-tags", `
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
 `), M("base-selection-label", `
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
 `, [M("base-selection-input", `
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
 `, [E("content", `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), E("render-label", `
 color: var(--n-text-color);
 `)]), He("disabled", [z("&:hover", [E("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), q("focus", [E("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), q("active", [E("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), M("base-selection-label", "background-color: var(--n-color-active);"), M("base-selection-tags", "background-color: var(--n-color-active);")])]), q("disabled", "cursor: not-allowed;", [E("arrow", `
 color: var(--n-arrow-color-disabled);
 `), M("base-selection-label", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [M("base-selection-input", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), E("render-label", `
 color: var(--n-text-color-disabled);
 `)]), M("base-selection-tags", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), M("base-selection-placeholder", `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), M("base-selection-input-tag", `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [E("input", `
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
 `), E("mirror", `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), ["warning", "error"].map((e) => q(`${e}-status`, [E("state-border", `border: var(--n-border-${e});`), He("disabled", [z("&:hover", [E("state-border", `
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]), q("active", [E("state-border", `
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `), M("base-selection-label", `background-color: var(--n-color-active-${e});`), M("base-selection-tags", `background-color: var(--n-color-active-${e});`)]), q("focus", [E("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]), M("base-selection-popover", `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), M("base-selection-tag-wrapper", `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [z("&:last-child", "padding-right: 0;"), M("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [E("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]), jm = Q({
  name: "InternalSelection",
  props: Object.assign(Object.assign({}, fe.props), {
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
    } = Te(e), o = yt("InternalSelection", r, n), i = N(null), a = N(null), l = N(null), s = N(null), u = N(null), d = N(null), c = N(null), f = N(null), v = N(null), m = N(null), p = N(!1), g = N(!1), b = N(!1), x = fe("InternalSelection", "-internal-selection", Wm, Du, e, le(e, "clsPrefix")), B = R(() => e.clearable && !e.disabled && (b.value || e.active)), F = R(() => e.selectedOption ? e.renderTag ? e.renderTag({
      option: e.selectedOption,
      handleClose: () => {
      }
    }) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : Qe(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder), y = R(() => {
      const G = e.selectedOption;
      if (G)
        return G[e.labelField];
    }), A = R(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length) : e.selectedOption !== null);
    function T() {
      var G;
      const {
        value: ee
      } = i;
      if (ee) {
        const {
          value: Re
        } = a;
        Re && (Re.style.width = `${ee.offsetWidth}px`, e.maxTagCount !== "responsive" && ((G = v.value) === null || G === void 0 || G.sync({
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
    function P() {
      const {
        value: G
      } = m;
      G && (G.style.display = "inline-block");
    }
    ze(le(e, "active"), (G) => {
      G || C();
    }), ze(le(e, "pattern"), () => {
      e.multiple && Et(T);
    });
    function O(G) {
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
    function S(G) {
      var ee;
      (!G.relatedTarget || !(!((ee = l.value) === null || ee === void 0) && ee.contains(G.relatedTarget))) && O(G);
    }
    function $(G) {
      var ee;
      !((ee = l.value) === null || ee === void 0) && ee.contains(G.relatedTarget) || I(G);
    }
    function _(G) {
      H(G);
    }
    function k() {
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
    const ae = N(!1);
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
        ee.textContent = Re, T();
      }
      e.ignoreComposition && ae.value ? X = G : t(G);
    }
    function we() {
      ae.value = !0;
    }
    function re() {
      ae.value = !1, e.ignoreComposition && t(X), X = null;
    }
    function pe(G) {
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
    function ke() {
      const {
        value: G
      } = a;
      G && (P(), G.focus());
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
    let et = null;
    function at() {
      et !== null && window.clearTimeout(et);
    }
    function ot() {
      e.active || (at(), et = window.setTimeout(() => {
        A.value && (p.value = !0);
      }, 100));
    }
    function gt() {
      at();
    }
    function Be(G) {
      G || (at(), p.value = !1);
    }
    ze(A, (G) => {
      G || (p.value = !1);
    }), rt(() => {
      nt(() => {
        const G = d.value;
        G && (e.disabled ? G.removeAttribute("tabindex") : G.tabIndex = g.value ? -1 : 0);
      });
    }), Is(l, e.onResize);
    const {
      inlineThemeDisabled: Pe
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
          placeholderColor: Tt,
          textColor: Rt,
          paddingSingle: Xt,
          paddingMultiple: wt,
          caretColor: Ot,
          colorDisabled: Yt,
          textColorDisabled: lt,
          placeholderColorDisabled: mt,
          colorActive: w,
          boxShadowFocus: L,
          boxShadowActive: U,
          boxShadowHover: te,
          border: oe,
          borderFocus: de,
          borderHover: ce,
          borderActive: ve,
          arrowColor: Ee,
          arrowColorDisabled: ct,
          loadingColor: Dn,
          // form warning
          colorActiveWarning: Fo,
          boxShadowFocusWarning: Pn,
          boxShadowActiveWarning: En,
          boxShadowHoverWarning: Ao,
          borderWarning: $o,
          borderFocusWarning: Or,
          borderHoverWarning: Zt,
          borderActiveWarning: D,
          // form error
          colorActiveError: V,
          boxShadowFocusError: se,
          boxShadowActiveError: $e,
          boxShadowHoverError: Ie,
          borderError: Ae,
          borderFocusError: Mt,
          borderHoverError: It,
          borderActiveError: _t,
          // clear
          clearColor: dn,
          clearColorHover: cn,
          clearColorPressed: Qn,
          clearSize: Do,
          // arrow
          arrowSize: Po,
          [Y("height", G)]: Eo,
          [Y("fontSize", G)]: zo
        }
      } = x.value, zn = $t(Xt), kn = $t(wt);
      return {
        "--n-bezier": ee,
        "--n-border": oe,
        "--n-border-active": ve,
        "--n-border-focus": de,
        "--n-border-hover": ce,
        "--n-border-radius": Re,
        "--n-box-shadow-active": U,
        "--n-box-shadow-focus": L,
        "--n-box-shadow-hover": te,
        "--n-caret-color": Ot,
        "--n-color": un,
        "--n-color-active": w,
        "--n-color-disabled": Yt,
        "--n-font-size": zo,
        "--n-height": Eo,
        "--n-padding-single-top": zn.top,
        "--n-padding-multiple-top": kn.top,
        "--n-padding-single-right": zn.right,
        "--n-padding-multiple-right": kn.right,
        "--n-padding-single-left": zn.left,
        "--n-padding-multiple-left": kn.left,
        "--n-padding-single-bottom": zn.bottom,
        "--n-padding-multiple-bottom": kn.bottom,
        "--n-placeholder-color": Tt,
        "--n-placeholder-color-disabled": mt,
        "--n-text-color": Rt,
        "--n-text-color-disabled": lt,
        "--n-arrow-color": Ee,
        "--n-arrow-color-disabled": ct,
        "--n-loading-color": Dn,
        // form warning
        "--n-color-active-warning": Fo,
        "--n-box-shadow-focus-warning": Pn,
        "--n-box-shadow-active-warning": En,
        "--n-box-shadow-hover-warning": Ao,
        "--n-border-warning": $o,
        "--n-border-focus-warning": Or,
        "--n-border-hover-warning": Zt,
        "--n-border-active-warning": D,
        // form error
        "--n-color-active-error": V,
        "--n-box-shadow-focus-error": se,
        "--n-box-shadow-active-error": $e,
        "--n-box-shadow-hover-error": Ie,
        "--n-border-error": Ae,
        "--n-border-focus-error": Mt,
        "--n-border-hover-error": It,
        "--n-border-active-error": _t,
        // clear
        "--n-clear-size": Do,
        "--n-clear-color": dn,
        "--n-clear-color-hover": cn,
        "--n-clear-color-pressed": Qn,
        // arrow-size
        "--n-arrow-size": Po
      };
    }), qe = Pe ? je("internal-selection", R(() => e.size[0]), Xe, e) : void 0;
    return {
      mergedTheme: x,
      mergedClearable: B,
      mergedClsPrefix: n,
      rtlEnabled: o,
      patternInputFocused: g,
      filterablePlaceholder: F,
      label: y,
      selected: A,
      showTagsPanel: p,
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
      overflowRef: v,
      inputTagElRef: m,
      handleMouseDown: J,
      handleFocusin: S,
      handleClear: _,
      handleMouseEnter: k,
      handleMouseLeave: j,
      handleDeleteOption: Z,
      handlePatternKeyDown: W,
      handlePatternInputInput: ne,
      handlePatternInputBlur: Me,
      handlePatternInputFocus: pe,
      handleMouseEnterCounter: ot,
      handleMouseLeaveCounter: gt,
      handleFocusout: $,
      handleCompositionEnd: re,
      handleCompositionStart: we,
      onPopoverUpdateShow: Be,
      focus: Ne,
      focusInput: ke,
      blur: ie,
      blurInput: me,
      updateCounter: ye,
      getCounter: be,
      getTail: Ye,
      renderLabel: e.renderLabel,
      cssVars: Pe ? void 0 : Xe,
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
    const v = a === "responsive", m = typeof a == "number", p = v || m, g = h(oi, null, {
      default: () => h($u, {
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
      }) : h(Xo, {
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
      })), F = () => (m ? this.selectedOptions.slice(0, a) : this.selectedOptions).map(B), y = i ? h("div", {
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
      }, this.pattern)) : null, A = v ? () => h("div", {
        class: `${s}-base-selection-tag-wrapper`,
        ref: "counterWrapperRef"
      }, h(Xo, {
        size: r,
        ref: "counterRef",
        onMouseenter: this.handleMouseEnterCounter,
        onMouseleave: this.handleMouseLeaveCounter,
        disabled: o
      })) : void 0;
      let T;
      if (m) {
        const t = this.selectedOptions.length - a;
        t > 0 && (T = h("div", {
          class: `${s}-base-selection-tag-wrapper`,
          key: "__counter__"
        }, h(Xo, {
          size: r,
          ref: "counterRef",
          onMouseenter: this.handleMouseEnterCounter,
          disabled: o
        }, {
          default: () => `+${t}`
        })));
      }
      const C = v ? i ? h(Ka, {
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
        default: F,
        counter: A,
        tail: () => y
      }) : h(Ka, {
        ref: "overflowRef",
        updateCounter: this.updateCounter,
        getCounter: this.getCounter,
        style: {
          width: "100%",
          display: "flex",
          overflow: "hidden"
        }
      }, {
        default: F,
        counter: A
      }) : m && T ? F().concat(T) : F(), P = p ? () => h("div", {
        class: `${s}-base-selection-popover`
      }, v ? F() : this.selectedOptions.map(B)) : void 0, O = p ? Object.assign({
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
      }, C, v ? null : y, g) : h("div", {
        ref: "multipleElRef",
        class: `${s}-base-selection-tags`,
        tabindex: o ? void 0 : 0
      }, C, g);
      b = h(xt, null, p ? h(Tr, Object.assign({}, O, {
        scrollable: !0,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => H,
        default: P
      }) : H, K);
    } else if (i) {
      const x = this.pattern || this.isComposing, B = this.active ? !x : !this.selected, F = this.active ? !1 : this.selected;
      b = h("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-label`,
        title: this.patternInputFocused ? void 0 : ma(this.label)
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
      })), F ? h("div", {
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
        title: ma(this.label),
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
function Vm({
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
  cubicBezierEaseInOut: St,
  cubicBezierEaseOut: qm,
  cubicBezierEaseIn: Km
} = sn;
function Um({
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
 max-height ${n} ${St} ${o},
 opacity ${n} ${qm} ${o},
 margin-top ${n} ${St} ${o},
 margin-bottom ${n} ${St} ${o},
 padding-top ${n} ${St} ${o},
 padding-bottom ${n} ${St} ${o}
 ${r ? `,${r}` : ""}
 `), z(`&.fade-in-height-expand-transition-${u}-active`, `
 overflow: ${e};
 transition:
 max-height ${n} ${St},
 opacity ${n} ${Km},
 margin-top ${n} ${St},
 margin-bottom ${n} ${St},
 padding-top ${n} ${St},
 padding-bottom ${n} ${St}
 ${r ? `,${r}` : ""}
 `)];
}
function co(e) {
  return e.type === "group";
}
function Pu(e) {
  return e.type === "ignored";
}
function Yo(e, n) {
  try {
    return !!(1 + n.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
function Gm(e, n) {
  return {
    getIsGroup: co,
    getIgnored: Pu,
    getKey(o) {
      return co(o) ? o.name || o.key || "key-required" : o[e];
    },
    getChildren(o) {
      return o[n];
    }
  };
}
function Xm(e, n, r, o) {
  if (!n) return e;
  function i(a) {
    if (!Array.isArray(a)) return [];
    const l = [];
    for (const s of a)
      if (co(s)) {
        const u = i(s[o]);
        u.length && l.push(Object.assign({}, s, {
          [o]: u
        }));
      } else {
        if (Pu(s))
          continue;
        n(r, s) && l.push(s);
      }
    return l;
  }
  return i(e);
}
function Ym(e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return e.forEach((i) => {
    co(i) ? i[r].forEach((a) => {
      o.set(a[n], a);
    }) : o.set(i[n], i);
  }), o;
}
const Zm = $r && "chrome" in window;
$r && navigator.userAgent.includes("Firefox");
const Eu = $r && navigator.userAgent.includes("Safari") && !Zm, Jm = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function Qm(e) {
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
    errorColorHover: v,
    borderRadius: m,
    lineHeight: p,
    fontSizeTiny: g,
    fontSizeSmall: b,
    fontSizeMedium: x,
    fontSizeLarge: B,
    heightTiny: F,
    heightSmall: y,
    heightMedium: A,
    heightLarge: T,
    actionColor: C,
    clearColor: P,
    clearColorHover: O,
    clearColorPressed: I,
    placeholderColor: K,
    placeholderColorDisabled: H,
    iconColor: t,
    iconColorDisabled: S,
    iconColorHover: $,
    iconColorPressed: _
  } = e;
  return Object.assign(Object.assign({}, Jm), {
    countTextColorDisabled: o,
    countTextColor: r,
    heightTiny: F,
    heightSmall: y,
    heightMedium: A,
    heightLarge: T,
    fontSizeTiny: g,
    fontSizeSmall: b,
    fontSizeMedium: x,
    fontSizeLarge: B,
    lineHeight: p,
    lineHeightTextarea: p,
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
    borderHoverError: `1px solid ${v}`,
    colorFocusError: l,
    borderFocusError: `1px solid ${v}`,
    boxShadowFocusError: `0 0 0 2px ${ge(f, {
      alpha: 0.2
    })}`,
    caretColorError: f,
    clearColor: P,
    clearColorHover: O,
    clearColorPressed: I,
    iconColor: t,
    iconColorDisabled: S,
    iconColorHover: $,
    iconColorPressed: _,
    suffixTextColor: n
  });
}
const zu = {
  name: "Input",
  common: Ve,
  self: Qm
}, ku = "n-input";
function eb(e) {
  let n = 0;
  for (const r of e)
    n++;
  return n;
}
function Ur(e) {
  return e === "" || e == null;
}
function tb(e) {
  const n = N(null);
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
    let v = u.length;
    if (u.endsWith(f))
      v = u.length - f.length;
    else if (u.startsWith(c))
      v = c.length;
    else {
      const m = c[d - 1], p = u.indexOf(m, d - 1);
      p !== -1 && (v = p + 1);
    }
    (a = s.setSelectionRange) === null || a === void 0 || a.call(s, v, v);
  }
  function i() {
    n.value = null;
  }
  return ze(e, i), {
    recordCursor: r,
    restoreCursor: o
  };
}
const Ol = Q({
  name: "InputWordCount",
  setup(e, {
    slots: n
  }) {
    const {
      mergedValueRef: r,
      maxlengthRef: o,
      mergedClsPrefixRef: i,
      countGraphemesRef: a
    } = xe(ku), l = R(() => {
      const {
        value: s
      } = r;
      return s === null || Array.isArray(s) ? 0 : (a.value || eb)(s);
    });
    return () => {
      const {
        value: s
      } = o, {
        value: u
      } = r;
      return h("span", {
        class: `${i.value}-input-word-count`
      }, ni(n.default, {
        value: u === null || Array.isArray(u) ? "" : u
      }, () => [s === void 0 ? l.value : `${l.value} / ${s}`]));
    };
  }
}), nb = M("input", `
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
  E("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),
  E("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
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
  E("input-el, textarea-el", `
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
 `), z("&:-webkit-autofill ~", [E("placeholder", "display: none;")])]),
  q("round", [He("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  E("placeholder", `
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
  q("textarea", [E("placeholder", "overflow: visible;")]),
  He("autosize", "width: 100%;"),
  q("autosize", [E("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  M("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),
  E("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),
  E("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [z("&[type=password]::-ms-reveal", "display: none;"), z("+", [E("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  He("textarea", [E("placeholder", "white-space: nowrap;")]),
  E("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  q("textarea", "width: 100%;", [M("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), q("resizable", [M("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), E("textarea-el, textarea-mirror, placeholder", `
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
 `), E("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
  // pair
  q("pair", [E("input-el, placeholder", "text-align: center;"), E("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [M("icon", `
 color: var(--n-icon-color);
 `), M("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  q("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [E("border", "border: var(--n-border-disabled);"), E("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), E("placeholder", "color: var(--n-placeholder-color-disabled);"), E("separator", "color: var(--n-text-color-disabled);", [M("icon", `
 color: var(--n-icon-color-disabled);
 `), M("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), M("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), E("suffix, prefix", "color: var(--n-text-color-disabled);", [M("icon", `
 color: var(--n-icon-color-disabled);
 `), M("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  He("disabled", [E("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [z("&:hover", `
 color: var(--n-icon-color-hover);
 `), z("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), z("&:hover", [E("state-border", "border: var(--n-border-hover);")]), q("focus", "background-color: var(--n-color-focus);", [E("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),
  E("border, state-border", `
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
  E("state-border", `
 border-color: #0000;
 z-index: 1;
 `),
  E("prefix", "margin-right: 4px;"),
  E("suffix", `
 margin-left: 4px;
 `),
  E("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [M("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), M("base-clear", `
 font-size: var(--n-icon-size);
 `, [E("placeholder", [M("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), z(">", [M("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), M("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  M("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((e) => q(`${e}-status`, [He("disabled", [M("base-loading", `
 color: var(--n-loading-color-${e})
 `), E("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), E("state-border", `
 border: var(--n-border-${e});
 `), z("&:hover", [E("state-border", `
 border: var(--n-border-hover-${e});
 `)]), z("&:focus", `
 background-color: var(--n-color-focus-${e});
 `, [E("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]), q("focus", `
 background-color: var(--n-color-focus-${e});
 `, [E("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))
]), rb = M("input", [q("disabled", [E("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]), ob = Object.assign(Object.assign({}, fe.props), {
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
}), ib = Q({
  name: "Input",
  props: ob,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.showPasswordToggle && tt("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: n,
      mergedBorderedRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Te(e), a = fe("Input", "-input", nb, zu, e, n);
    Eu && $n("-input-safari", rb, n);
    const l = N(null), s = N(null), u = N(null), d = N(null), c = N(null), f = N(null), v = N(null), m = tb(v), p = N(null), {
      localeRef: g
    } = Br("Input"), b = N(e.defaultValue), x = le(e, "value"), B = Un(x, b), F = Wi(e), {
      mergedSizeRef: y,
      mergedDisabledRef: A,
      mergedStatusRef: T
    } = F, C = N(!1), P = N(!1), O = N(!1), I = N(!1);
    let K = null;
    const H = R(() => {
      const {
        placeholder: D,
        pair: V
      } = e;
      return V ? Array.isArray(D) ? D : D === void 0 ? ["", ""] : [D, D] : D === void 0 ? [g.value.placeholder] : [D];
    }), t = R(() => {
      const {
        value: D
      } = O, {
        value: V
      } = B, {
        value: se
      } = H;
      return !D && (Ur(V) || Array.isArray(V) && Ur(V[0])) && se[0];
    }), S = R(() => {
      const {
        value: D
      } = O, {
        value: V
      } = B, {
        value: se
      } = H;
      return !D && se[1] && (Ur(V) || Array.isArray(V) && Ur(V[1]));
    }), $ = We(() => e.internalForceFocus || C.value), _ = We(() => {
      if (A.value || e.readonly || !e.clearable || !$.value && !P.value)
        return !1;
      const {
        value: D
      } = B, {
        value: V
      } = $;
      return e.pair ? !!(Array.isArray(D) && (D[0] || D[1])) && (P.value || V) : !!D && (P.value || V);
    }), k = R(() => {
      const {
        showPasswordOn: D
      } = e;
      if (D)
        return D;
      if (e.showPasswordToggle) return "click";
    }), j = N(!1), J = R(() => {
      const {
        textDecoration: D
      } = e;
      return D ? Array.isArray(D) ? D.map((V) => ({
        textDecoration: V
      })) : [{
        textDecoration: D
      }] : ["", ""];
    }), Z = N(void 0), ae = () => {
      var D, V;
      if (e.type === "textarea") {
        const {
          autosize: se
        } = e;
        if (se && (Z.value = (V = (D = p.value) === null || D === void 0 ? void 0 : D.$el) === null || V === void 0 ? void 0 : V.offsetWidth), !s.value || typeof se == "boolean") return;
        const {
          paddingTop: $e,
          paddingBottom: Ie,
          lineHeight: Ae
        } = window.getComputedStyle(s.value), Mt = Number($e.slice(0, -2)), It = Number(Ie.slice(0, -2)), _t = Number(Ae.slice(0, -2)), {
          value: dn
        } = u;
        if (!dn) return;
        if (se.minRows) {
          const cn = Math.max(se.minRows, 1), Qn = `${Mt + It + _t * cn}px`;
          dn.style.minHeight = Qn;
        }
        if (se.maxRows) {
          const cn = `${Mt + It + _t * se.maxRows}px`;
          dn.style.maxHeight = cn;
        }
      }
    }, W = R(() => {
      const {
        maxlength: D
      } = e;
      return D === void 0 ? void 0 : Number(D);
    });
    rt(() => {
      const {
        value: D
      } = B;
      Array.isArray(D) || Ee(D);
    });
    const X = Ar().proxy;
    function ne(D, V) {
      const {
        onUpdateValue: se,
        "onUpdate:value": $e,
        onInput: Ie
      } = e, {
        nTriggerFormInput: Ae
      } = F;
      se && he(se, D, V), $e && he($e, D, V), Ie && he(Ie, D, V), b.value = D, Ae();
    }
    function we(D, V) {
      const {
        onChange: se
      } = e, {
        nTriggerFormChange: $e
      } = F;
      se && he(se, D, V), b.value = D, $e();
    }
    function re(D) {
      const {
        onBlur: V
      } = e, {
        nTriggerFormBlur: se
      } = F;
      V && he(V, D), se();
    }
    function pe(D) {
      const {
        onFocus: V
      } = e, {
        nTriggerFormFocus: se
      } = F;
      V && he(V, D), se();
    }
    function Me(D) {
      const {
        onClear: V
      } = e;
      V && he(V, D);
    }
    function ie(D) {
      const {
        onInputBlur: V
      } = e;
      V && he(V, D);
    }
    function Ne(D) {
      const {
        onInputFocus: V
      } = e;
      V && he(V, D);
    }
    function ke() {
      const {
        onDeactivate: D
      } = e;
      D && he(D);
    }
    function me() {
      const {
        onActivate: D
      } = e;
      D && he(D);
    }
    function ye(D) {
      const {
        onClick: V
      } = e;
      V && he(V, D);
    }
    function be(D) {
      const {
        onWrapperFocus: V
      } = e;
      V && he(V, D);
    }
    function Ye(D) {
      const {
        onWrapperBlur: V
      } = e;
      V && he(V, D);
    }
    function et() {
      O.value = !0;
    }
    function at(D) {
      O.value = !1, D.target === f.value ? ot(D, 1) : ot(D, 0);
    }
    function ot(D, V = 0, se = "input") {
      const $e = D.target.value;
      if (Ee($e), D instanceof InputEvent && !D.isComposing && (O.value = !1), e.type === "textarea") {
        const {
          value: Ae
        } = p;
        Ae && Ae.syncUnifiedContainer();
      }
      if (K = $e, O.value) return;
      m.recordCursor();
      const Ie = gt($e);
      if (Ie)
        if (!e.pair)
          se === "input" ? ne($e, {
            source: V
          }) : we($e, {
            source: V
          });
        else {
          let {
            value: Ae
          } = B;
          Array.isArray(Ae) ? Ae = [Ae[0], Ae[1]] : Ae = ["", ""], Ae[V] = $e, se === "input" ? ne(Ae, {
            source: V
          }) : we(Ae, {
            source: V
          });
        }
      X.$forceUpdate(), Ie || Et(m.restoreCursor);
    }
    function gt(D) {
      const {
        countGraphemes: V,
        maxlength: se,
        minlength: $e
      } = e;
      if (V) {
        let Ae;
        if (se !== void 0 && (Ae === void 0 && (Ae = V(D)), Ae > Number(se)) || $e !== void 0 && (Ae === void 0 && (Ae = V(D)), Ae < Number(se)))
          return !1;
      }
      const {
        allowInput: Ie
      } = e;
      return typeof Ie == "function" ? Ie(D) : !0;
    }
    function Be(D) {
      ie(D), D.relatedTarget === l.value && ke(), D.relatedTarget !== null && (D.relatedTarget === c.value || D.relatedTarget === f.value || D.relatedTarget === s.value) || (I.value = !1), G(D, "blur"), v.value = null;
    }
    function Pe(D, V) {
      Ne(D), C.value = !0, I.value = !0, me(), G(D, "focus"), V === 0 ? v.value = c.value : V === 1 ? v.value = f.value : V === 2 && (v.value = s.value);
    }
    function Xe(D) {
      e.passivelyActivated && (Ye(D), G(D, "blur"));
    }
    function qe(D) {
      e.passivelyActivated && (C.value = !0, be(D), G(D, "focus"));
    }
    function G(D, V) {
      D.relatedTarget !== null && (D.relatedTarget === c.value || D.relatedTarget === f.value || D.relatedTarget === s.value || D.relatedTarget === l.value) || (V === "focus" ? (pe(D), C.value = !0) : V === "blur" && (re(D), C.value = !1));
    }
    function ee(D, V) {
      ot(D, V, "change");
    }
    function Re(D) {
      ye(D);
    }
    function un(D) {
      Me(D), Tt();
    }
    function Tt() {
      e.pair ? (ne(["", ""], {
        source: "clear"
      }), we(["", ""], {
        source: "clear"
      })) : (ne("", {
        source: "clear"
      }), we("", {
        source: "clear"
      }));
    }
    function Rt(D) {
      const {
        onMousedown: V
      } = e;
      V && V(D);
      const {
        tagName: se
      } = D.target;
      if (se !== "INPUT" && se !== "TEXTAREA") {
        if (e.resizable) {
          const {
            value: $e
          } = l;
          if ($e) {
            const {
              left: Ie,
              top: Ae,
              width: Mt,
              height: It
            } = $e.getBoundingClientRect(), _t = 14;
            if (Ie + Mt - _t < D.clientX && D.clientX < Ie + Mt && Ae + It - _t < D.clientY && D.clientY < Ae + It)
              return;
          }
        }
        D.preventDefault(), C.value || U();
      }
    }
    function Xt() {
      var D;
      P.value = !0, e.type === "textarea" && ((D = p.value) === null || D === void 0 || D.handleMouseEnterWrapper());
    }
    function wt() {
      var D;
      P.value = !1, e.type === "textarea" && ((D = p.value) === null || D === void 0 || D.handleMouseLeaveWrapper());
    }
    function Ot() {
      A.value || k.value === "click" && (j.value = !j.value);
    }
    function Yt(D) {
      if (A.value) return;
      D.preventDefault();
      const V = ($e) => {
        $e.preventDefault(), De("mouseup", document, V);
      };
      if (Le("mouseup", document, V), k.value !== "mousedown") return;
      j.value = !0;
      const se = () => {
        j.value = !1, De("mouseup", document, se);
      };
      Le("mouseup", document, se);
    }
    function lt(D) {
      e.onKeyup && he(e.onKeyup, D);
    }
    function mt(D) {
      switch (e.onKeydown && he(e.onKeydown, D), D.key) {
        case "Escape":
          L();
          break;
        case "Enter":
          w(D);
          break;
      }
    }
    function w(D) {
      var V, se;
      if (e.passivelyActivated) {
        const {
          value: $e
        } = I;
        if ($e) {
          e.internalDeactivateOnEnter && L();
          return;
        }
        D.preventDefault(), e.type === "textarea" ? (V = s.value) === null || V === void 0 || V.focus() : (se = c.value) === null || se === void 0 || se.focus();
      }
    }
    function L() {
      e.passivelyActivated && (I.value = !1, Et(() => {
        var D;
        (D = l.value) === null || D === void 0 || D.focus();
      }));
    }
    function U() {
      var D, V, se;
      A.value || (e.passivelyActivated ? (D = l.value) === null || D === void 0 || D.focus() : ((V = s.value) === null || V === void 0 || V.focus(), (se = c.value) === null || se === void 0 || se.focus()));
    }
    function te() {
      var D;
      !((D = l.value) === null || D === void 0) && D.contains(document.activeElement) && document.activeElement.blur();
    }
    function oe() {
      var D, V;
      (D = s.value) === null || D === void 0 || D.select(), (V = c.value) === null || V === void 0 || V.select();
    }
    function de() {
      A.value || (s.value ? s.value.focus() : c.value && c.value.focus());
    }
    function ce() {
      const {
        value: D
      } = l;
      D != null && D.contains(document.activeElement) && D !== document.activeElement && L();
    }
    function ve(D) {
      if (e.type === "textarea") {
        const {
          value: V
        } = s;
        V == null || V.scrollTo(D);
      } else {
        const {
          value: V
        } = c;
        V == null || V.scrollTo(D);
      }
    }
    function Ee(D) {
      const {
        type: V,
        pair: se,
        autosize: $e
      } = e;
      if (!se && $e)
        if (V === "textarea") {
          const {
            value: Ie
          } = u;
          Ie && (Ie.textContent = `${D ?? ""}\r
`);
        } else {
          const {
            value: Ie
          } = d;
          Ie && (D ? Ie.textContent = D : Ie.innerHTML = "&nbsp;");
        }
    }
    function ct() {
      ae();
    }
    const Dn = N({
      top: "0"
    });
    function Fo(D) {
      var V;
      const {
        scrollTop: se
      } = D.target;
      Dn.value.top = `${-se}px`, (V = p.value) === null || V === void 0 || V.syncUnifiedContainer();
    }
    let Pn = null;
    nt(() => {
      const {
        autosize: D,
        type: V
      } = e;
      D && V === "textarea" ? Pn = ze(B, (se) => {
        !Array.isArray(se) && se !== K && Ee(se);
      }) : Pn == null || Pn();
    });
    let En = null;
    nt(() => {
      e.type === "textarea" ? En = ze(B, (D) => {
        var V;
        !Array.isArray(D) && D !== K && ((V = p.value) === null || V === void 0 || V.syncUnifiedContainer());
      }) : En == null || En();
    }), Fe(ku, {
      mergedValueRef: B,
      maxlengthRef: W,
      mergedClsPrefixRef: n,
      countGraphemesRef: le(e, "countGraphemes")
    });
    const Ao = {
      wrapperElRef: l,
      inputElRef: c,
      textareaElRef: s,
      isCompositing: O,
      clear: Tt,
      focus: U,
      blur: te,
      select: oe,
      deactivate: ce,
      activate: de,
      scrollTo: ve
    }, $o = yt("Input", i, n), Or = R(() => {
      const {
        value: D
      } = y, {
        common: {
          cubicBezierEaseInOut: V
        },
        self: {
          color: se,
          borderRadius: $e,
          textColor: Ie,
          caretColor: Ae,
          caretColorError: Mt,
          caretColorWarning: It,
          textDecorationColor: _t,
          border: dn,
          borderDisabled: cn,
          borderHover: Qn,
          borderFocus: Do,
          placeholderColor: Po,
          placeholderColorDisabled: Eo,
          lineHeightTextarea: zo,
          colorDisabled: zn,
          colorFocus: kn,
          textColorDisabled: Ju,
          boxShadowFocus: Qu,
          iconSize: ed,
          colorFocusWarning: td,
          boxShadowFocusWarning: nd,
          borderWarning: rd,
          borderFocusWarning: od,
          borderHoverWarning: id,
          colorFocusError: ad,
          boxShadowFocusError: ld,
          borderError: sd,
          borderFocusError: ud,
          borderHoverError: dd,
          clearSize: cd,
          clearColor: fd,
          clearColorHover: hd,
          clearColorPressed: pd,
          iconColor: vd,
          iconColorDisabled: xd,
          suffixTextColor: gd,
          countTextColor: md,
          countTextColorDisabled: bd,
          iconColorHover: Cd,
          iconColorPressed: yd,
          loadingColor: wd,
          loadingColorError: Bd,
          loadingColorWarning: Sd,
          [Y("padding", D)]: Fd,
          [Y("fontSize", D)]: Ad,
          [Y("height", D)]: $d
        }
      } = a.value, {
        left: Dd,
        right: Pd
      } = $t(Fd);
      return {
        "--n-bezier": V,
        "--n-count-text-color": md,
        "--n-count-text-color-disabled": bd,
        "--n-color": se,
        "--n-font-size": Ad,
        "--n-border-radius": $e,
        "--n-height": $d,
        "--n-padding-left": Dd,
        "--n-padding-right": Pd,
        "--n-text-color": Ie,
        "--n-caret-color": Ae,
        "--n-text-decoration-color": _t,
        "--n-border": dn,
        "--n-border-disabled": cn,
        "--n-border-hover": Qn,
        "--n-border-focus": Do,
        "--n-placeholder-color": Po,
        "--n-placeholder-color-disabled": Eo,
        "--n-icon-size": ed,
        "--n-line-height-textarea": zo,
        "--n-color-disabled": zn,
        "--n-color-focus": kn,
        "--n-text-color-disabled": Ju,
        "--n-box-shadow-focus": Qu,
        "--n-loading-color": wd,
        // form warning
        "--n-caret-color-warning": It,
        "--n-color-focus-warning": td,
        "--n-box-shadow-focus-warning": nd,
        "--n-border-warning": rd,
        "--n-border-focus-warning": od,
        "--n-border-hover-warning": id,
        "--n-loading-color-warning": Sd,
        // form error
        "--n-caret-color-error": Mt,
        "--n-color-focus-error": ad,
        "--n-box-shadow-focus-error": ld,
        "--n-border-error": sd,
        "--n-border-focus-error": ud,
        "--n-border-hover-error": dd,
        "--n-loading-color-error": Bd,
        // clear-button
        "--n-clear-color": fd,
        "--n-clear-size": cd,
        "--n-clear-color-hover": hd,
        "--n-clear-color-pressed": pd,
        "--n-icon-color": vd,
        "--n-icon-color-hover": Cd,
        "--n-icon-color-pressed": yd,
        "--n-icon-color-disabled": xd,
        "--n-suffix-text-color": gd
      };
    }), Zt = o ? je("input", R(() => {
      const {
        value: D
      } = y;
      return D[0];
    }), Or, e) : void 0;
    return Object.assign(Object.assign({}, Ao), {
      // DOM ref
      wrapperElRef: l,
      inputElRef: c,
      inputMirrorElRef: d,
      inputEl2Ref: f,
      textareaElRef: s,
      textareaMirrorElRef: u,
      textareaScrollbarInstRef: p,
      // value
      rtlEnabled: $o,
      uncontrolledValue: b,
      mergedValue: B,
      passwordVisible: j,
      mergedPlaceholder: H,
      showPlaceholder1: t,
      showPlaceholder2: S,
      mergedFocus: $,
      isComposing: O,
      activated: I,
      showClearButton: _,
      mergedSize: y,
      mergedDisabled: A,
      textDecorationStyle: J,
      mergedClsPrefix: n,
      mergedBordered: r,
      mergedShowPasswordOn: k,
      placeholderStyle: Dn,
      mergedStatus: T,
      textAreaScrollContainerWidth: Z,
      // methods
      handleTextAreaScroll: Fo,
      handleCompositionStart: et,
      handleCompositionEnd: at,
      handleInput: ot,
      handleInputBlur: Be,
      handleInputFocus: Pe,
      handleWrapperBlur: Xe,
      handleWrapperFocus: qe,
      handleMouseEnter: Xt,
      handleMouseLeave: wt,
      handleMouseDown: Rt,
      handleChange: ee,
      handleClick: Re,
      handleClear: un,
      handlePasswordToggleClick: Ot,
      handlePasswordToggleMousedown: Yt,
      handleWrapperKeydown: mt,
      handleWrapperKeyup: lt,
      handleTextAreaMirrorResize: ct,
      getTextareaScrollContainer: () => s.value,
      mergedTheme: a,
      cssVars: o ? void 0 : Or,
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
    }, d)), a === "textarea" ? h(yo, {
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
        } = this, v = {
          width: this.autosize && f && `${f}px`
        };
        return h(xt, null, h("textarea", Object.assign({}, this.inputProps, {
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
          style: [this.textDecorationStyle[0], (c = this.inputProps) === null || c === void 0 ? void 0 : c.style, v],
          onBlur: this.handleInputBlur,
          onFocus: (m) => {
            this.handleInputFocus(m, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? h("div", {
          class: `${r}-input__placeholder`,
          style: [this.placeholderStyle, v],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? h(br, {
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
    }, [_e(u["clear-icon-placeholder"], (c) => (this.clearable || c) && h(Ci, {
      clsPrefix: r,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => c,
      icon: () => {
        var f, v;
        return (v = (f = this.$slots)["clear-icon"]) === null || v === void 0 ? void 0 : v.call(f);
      }
    })), this.internalLoadingBeforeSuffix ? null : d, this.loading !== void 0 ? h($u, {
      clsPrefix: r,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? d : null, this.showCount && this.type !== "textarea" ? h(Ol, null, {
      default: (c) => {
        var f;
        return (f = u.count) === null || f === void 0 ? void 0 : f.call(u, c);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? h("div", {
      class: `${r}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? Dt(u["password-visible-icon"], () => [h(zt, {
      clsPrefix: r
    }, {
      default: () => h(Bg, null)
    })]) : Dt(u["password-invisible-icon"], () => [h(zt, {
      clsPrefix: r
    }, {
      default: () => h(Sg, null)
    })])) : null]) : null)), this.pair ? h("span", {
      class: `${r}-input__separator`
    }, Dt(u.separator, () => [this.separator])) : null, this.pair ? h("div", {
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
    }, [this.clearable && h(Ci, {
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
    }) : null, this.showCount && a === "textarea" ? h(Ol, null, {
      default: (d) => {
        var c;
        const {
          renderCount: f
        } = this;
        return f ? f(d) : (c = u.count) === null || c === void 0 ? void 0 : c.call(u, d);
      }
    }) : null);
  }
}), ab = M("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [z(">", [M("input", [z("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), z("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), M("button", [z("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [E("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), z("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [E("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), z("*", [z("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [z(">", [M("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), M("base-selection", [M("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), M("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), E("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), z("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [z(">", [M("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), M("base-selection", [M("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), M("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), E("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), lb = {}, sb = Q({
  name: "InputGroup",
  props: lb,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Te(e);
    return $n("-input-group", ab, n), {
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
}), ub = M("input-group-label", `
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
`, [E("border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]), db = Object.assign(Object.assign({}, fe.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
}), cb = Q({
  name: "InputGroupLabel",
  props: db,
  setup(e) {
    const {
      mergedBorderedRef: n,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Te(e), i = fe("Input", "-input-group-label", ub, zu, e, r), a = R(() => {
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
          lineHeight: v,
          groupLabelBorder: m,
          [Y("fontSize", s)]: p,
          [Y("height", s)]: g
        }
      } = i.value;
      return {
        "--n-bezier": u,
        "--n-group-label-color": d,
        "--n-group-label-border": m,
        "--n-border-radius": c,
        "--n-group-label-text-color": f,
        "--n-font-size": p,
        "--n-line-height": v,
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
  return st(e, [255, 255, 255, 0.16]);
}
function Gr(e) {
  return st(e, [0, 0, 0, 0.12]);
}
const fb = "n-button-group", hb = {
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
function pb(e) {
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
    textColor3: v,
    primaryColorHover: m,
    primaryColorPressed: p,
    borderColor: g,
    primaryColor: b,
    baseColor: x,
    infoColor: B,
    infoColorHover: F,
    infoColorPressed: y,
    successColor: A,
    successColorHover: T,
    successColorPressed: C,
    warningColor: P,
    warningColorHover: O,
    warningColorPressed: I,
    errorColor: K,
    errorColorHover: H,
    errorColorPressed: t,
    fontWeight: S,
    buttonColor2: $,
    buttonColor2Hover: _,
    buttonColor2Pressed: k,
    fontWeightStrong: j
  } = e;
  return Object.assign(Object.assign({}, hb), {
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
    colorSecondary: $,
    colorSecondaryHover: _,
    colorSecondaryPressed: k,
    // tertiary
    colorTertiary: $,
    colorTertiaryHover: _,
    colorTertiaryPressed: k,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: _,
    colorQuaternaryPressed: k,
    // default type
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: f,
    textColorTertiary: v,
    textColorHover: m,
    textColorPressed: p,
    textColorFocus: m,
    textColorDisabled: f,
    textColorText: f,
    textColorTextHover: m,
    textColorTextPressed: p,
    textColorTextFocus: m,
    textColorTextDisabled: f,
    textColorGhost: f,
    textColorGhostHover: m,
    textColorGhostPressed: p,
    textColorGhostFocus: m,
    textColorGhostDisabled: f,
    border: `1px solid ${g}`,
    borderHover: `1px solid ${m}`,
    borderPressed: `1px solid ${p}`,
    borderFocus: `1px solid ${m}`,
    borderDisabled: `1px solid ${g}`,
    rippleColor: b,
    // primary
    colorPrimary: b,
    colorHoverPrimary: m,
    colorPressedPrimary: p,
    colorFocusPrimary: m,
    colorDisabledPrimary: b,
    textColorPrimary: x,
    textColorHoverPrimary: x,
    textColorPressedPrimary: x,
    textColorFocusPrimary: x,
    textColorDisabledPrimary: x,
    textColorTextPrimary: b,
    textColorTextHoverPrimary: m,
    textColorTextPressedPrimary: p,
    textColorTextFocusPrimary: m,
    textColorTextDisabledPrimary: f,
    textColorGhostPrimary: b,
    textColorGhostHoverPrimary: m,
    textColorGhostPressedPrimary: p,
    textColorGhostFocusPrimary: m,
    textColorGhostDisabledPrimary: b,
    borderPrimary: `1px solid ${b}`,
    borderHoverPrimary: `1px solid ${m}`,
    borderPressedPrimary: `1px solid ${p}`,
    borderFocusPrimary: `1px solid ${m}`,
    borderDisabledPrimary: `1px solid ${b}`,
    rippleColorPrimary: b,
    // info
    colorInfo: B,
    colorHoverInfo: F,
    colorPressedInfo: y,
    colorFocusInfo: F,
    colorDisabledInfo: B,
    textColorInfo: x,
    textColorHoverInfo: x,
    textColorPressedInfo: x,
    textColorFocusInfo: x,
    textColorDisabledInfo: x,
    textColorTextInfo: B,
    textColorTextHoverInfo: F,
    textColorTextPressedInfo: y,
    textColorTextFocusInfo: F,
    textColorTextDisabledInfo: f,
    textColorGhostInfo: B,
    textColorGhostHoverInfo: F,
    textColorGhostPressedInfo: y,
    textColorGhostFocusInfo: F,
    textColorGhostDisabledInfo: B,
    borderInfo: `1px solid ${B}`,
    borderHoverInfo: `1px solid ${F}`,
    borderPressedInfo: `1px solid ${y}`,
    borderFocusInfo: `1px solid ${F}`,
    borderDisabledInfo: `1px solid ${B}`,
    rippleColorInfo: B,
    // success
    colorSuccess: A,
    colorHoverSuccess: T,
    colorPressedSuccess: C,
    colorFocusSuccess: T,
    colorDisabledSuccess: A,
    textColorSuccess: x,
    textColorHoverSuccess: x,
    textColorPressedSuccess: x,
    textColorFocusSuccess: x,
    textColorDisabledSuccess: x,
    textColorTextSuccess: A,
    textColorTextHoverSuccess: T,
    textColorTextPressedSuccess: C,
    textColorTextFocusSuccess: T,
    textColorTextDisabledSuccess: f,
    textColorGhostSuccess: A,
    textColorGhostHoverSuccess: T,
    textColorGhostPressedSuccess: C,
    textColorGhostFocusSuccess: T,
    textColorGhostDisabledSuccess: A,
    borderSuccess: `1px solid ${A}`,
    borderHoverSuccess: `1px solid ${T}`,
    borderPressedSuccess: `1px solid ${C}`,
    borderFocusSuccess: `1px solid ${T}`,
    borderDisabledSuccess: `1px solid ${A}`,
    rippleColorSuccess: A,
    // warning
    colorWarning: P,
    colorHoverWarning: O,
    colorPressedWarning: I,
    colorFocusWarning: O,
    colorDisabledWarning: P,
    textColorWarning: x,
    textColorHoverWarning: x,
    textColorPressedWarning: x,
    textColorFocusWarning: x,
    textColorDisabledWarning: x,
    textColorTextWarning: P,
    textColorTextHoverWarning: O,
    textColorTextPressedWarning: I,
    textColorTextFocusWarning: O,
    textColorTextDisabledWarning: f,
    textColorGhostWarning: P,
    textColorGhostHoverWarning: O,
    textColorGhostPressedWarning: I,
    textColorGhostFocusWarning: O,
    textColorGhostDisabledWarning: P,
    borderWarning: `1px solid ${P}`,
    borderHoverWarning: `1px solid ${O}`,
    borderPressedWarning: `1px solid ${I}`,
    borderFocusWarning: `1px solid ${O}`,
    borderDisabledWarning: `1px solid ${P}`,
    rippleColorWarning: P,
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
    fontWeight: S,
    fontWeightStrong: j
  });
}
const la = {
  name: "Button",
  common: Ve,
  self: pb
}, vb = z([M("button", `
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
 `, [q("color", [E("border", {
  borderColor: "var(--n-border-color)"
}), q("disabled", [E("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), He("disabled", [z("&:focus", [E("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), z("&:hover", [E("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), z("&:active", [E("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), q("pressed", [E("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), q("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [E("border", {
  border: "var(--n-border-disabled)"
})]), He("disabled", [z("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [E("state-border", {
  border: "var(--n-border-focus)"
})]), z("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [E("state-border", {
  border: "var(--n-border-hover)"
})]), z("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [E("state-border", {
  border: "var(--n-border-pressed)"
})]), q("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [E("state-border", {
  border: "var(--n-border-pressed)"
})])]), q("loading", "cursor: wait;"), M("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [q("active", {
  zIndex: 1,
  animationName: "button-wave-spread, button-wave-opacity"
})]), $r && "MozBoxSizing" in document.createElement("div").style ? z("&::moz-focus-inner", {
  border: 0
}) : null, E("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), E("border", {
  border: "var(--n-border)"
}), E("state-border", {
  border: "var(--n-border)",
  borderColor: "#0000",
  zIndex: 1
}), E("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [M("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [so({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), Vm()]), E("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [z("~", [E("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), q("block", `
 display: flex;
 width: 100%;
 `), q("dashed", [E("border, state-border", {
  borderStyle: "dashed !important"
})]), q("disabled", {
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
})]), xb = Object.assign(Object.assign({}, fe.props), {
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
    default: !Eu
  }
}), Sr = Q({
  name: "Button",
  props: xb,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      const {
        dashed: y,
        ghost: A,
        text: T,
        secondary: C,
        tertiary: P,
        quaternary: O
      } = e;
      (y || A || T) && (C || P || O) && tt("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const n = N(null), r = N(null), o = N(!1), i = We(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = xe(fb, {}), {
      mergedSizeRef: l
    } = Wi({}, {
      defaultSize: "medium",
      mergedSize: (y) => {
        const {
          size: A
        } = e;
        if (A) return A;
        const {
          size: T
        } = a;
        if (T) return T;
        const {
          mergedSize: C
        } = y || {};
        return C ? C.value : "medium";
      }
    }), s = R(() => e.focusable && !e.disabled), u = (y) => {
      var A;
      s.value || y.preventDefault(), !e.nativeFocusBehavior && (y.preventDefault(), !e.disabled && s.value && ((A = n.value) === null || A === void 0 || A.focus({
        preventScroll: !0
      })));
    }, d = (y) => {
      var A;
      if (!e.disabled && !e.loading) {
        const {
          onClick: T
        } = e;
        T && he(T, y), e.text || (A = r.value) === null || A === void 0 || A.play();
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
    }, v = () => {
      o.value = !1;
    }, {
      inlineThemeDisabled: m,
      mergedClsPrefixRef: p,
      mergedRtlRef: g
    } = Te(e), b = fe("Button", "-button", vb, la, e, p), x = yt("Button", g, p), B = R(() => {
      const y = b.value, {
        common: {
          cubicBezierEaseInOut: A,
          cubicBezierEaseOut: T
        },
        self: C
      } = y, {
        rippleDuration: P,
        opacityDisabled: O,
        fontWeight: I,
        fontWeightStrong: K
      } = C, H = l.value, {
        dashed: t,
        type: S,
        ghost: $,
        text: _,
        color: k,
        round: j,
        circle: J,
        textColor: Z,
        secondary: ae,
        tertiary: W,
        quaternary: X,
        strong: ne
      } = e, we = {
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
      const pe = S === "tertiary", Me = S === "default", ie = pe ? "default" : S;
      if (_) {
        const Be = Z || k;
        re = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": Be || C[Y("textColorText", ie)],
          "--n-text-color-hover": Be ? fn(Be) : C[Y("textColorTextHover", ie)],
          "--n-text-color-pressed": Be ? Gr(Be) : C[Y("textColorTextPressed", ie)],
          "--n-text-color-focus": Be ? fn(Be) : C[Y("textColorTextHover", ie)],
          "--n-text-color-disabled": Be || C[Y("textColorTextDisabled", ie)]
        };
      } else if ($ || t) {
        const Be = Z || k;
        re = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": k || C[Y("rippleColor", ie)],
          "--n-text-color": Be || C[Y("textColorGhost", ie)],
          "--n-text-color-hover": Be ? fn(Be) : C[Y("textColorGhostHover", ie)],
          "--n-text-color-pressed": Be ? Gr(Be) : C[Y("textColorGhostPressed", ie)],
          "--n-text-color-focus": Be ? fn(Be) : C[Y("textColorGhostHover", ie)],
          "--n-text-color-disabled": Be || C[Y("textColorGhostDisabled", ie)]
        };
      } else if (ae) {
        const Be = Me ? C.textColor : pe ? C.textColorTertiary : C[Y("color", ie)], Pe = k || Be, Xe = S !== "default" && S !== "tertiary";
        re = {
          "--n-color": Xe ? ge(Pe, {
            alpha: Number(C.colorOpacitySecondary)
          }) : C.colorSecondary,
          "--n-color-hover": Xe ? ge(Pe, {
            alpha: Number(C.colorOpacitySecondaryHover)
          }) : C.colorSecondaryHover,
          "--n-color-pressed": Xe ? ge(Pe, {
            alpha: Number(C.colorOpacitySecondaryPressed)
          }) : C.colorSecondaryPressed,
          "--n-color-focus": Xe ? ge(Pe, {
            alpha: Number(C.colorOpacitySecondaryHover)
          }) : C.colorSecondaryHover,
          "--n-color-disabled": C.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": Pe,
          "--n-text-color-hover": Pe,
          "--n-text-color-pressed": Pe,
          "--n-text-color-focus": Pe,
          "--n-text-color-disabled": Pe
        };
      } else if (W || X) {
        const Be = Me ? C.textColor : pe ? C.textColorTertiary : C[Y("color", ie)], Pe = k || Be;
        W ? (re["--n-color"] = C.colorTertiary, re["--n-color-hover"] = C.colorTertiaryHover, re["--n-color-pressed"] = C.colorTertiaryPressed, re["--n-color-focus"] = C.colorSecondaryHover, re["--n-color-disabled"] = C.colorTertiary) : (re["--n-color"] = C.colorQuaternary, re["--n-color-hover"] = C.colorQuaternaryHover, re["--n-color-pressed"] = C.colorQuaternaryPressed, re["--n-color-focus"] = C.colorQuaternaryHover, re["--n-color-disabled"] = C.colorQuaternary), re["--n-ripple-color"] = "#0000", re["--n-text-color"] = Pe, re["--n-text-color-hover"] = Pe, re["--n-text-color-pressed"] = Pe, re["--n-text-color-focus"] = Pe, re["--n-text-color-disabled"] = Pe;
      } else
        re = {
          "--n-color": k || C[Y("color", ie)],
          "--n-color-hover": k ? fn(k) : C[Y("colorHover", ie)],
          "--n-color-pressed": k ? Gr(k) : C[Y("colorPressed", ie)],
          "--n-color-focus": k ? fn(k) : C[Y("colorFocus", ie)],
          "--n-color-disabled": k || C[Y("colorDisabled", ie)],
          "--n-ripple-color": k || C[Y("rippleColor", ie)],
          "--n-text-color": Z || (k ? C.textColorPrimary : pe ? C.textColorTertiary : C[Y("textColor", ie)]),
          "--n-text-color-hover": Z || (k ? C.textColorHoverPrimary : C[Y("textColorHover", ie)]),
          "--n-text-color-pressed": Z || (k ? C.textColorPressedPrimary : C[Y("textColorPressed", ie)]),
          "--n-text-color-focus": Z || (k ? C.textColorFocusPrimary : C[Y("textColorFocus", ie)]),
          "--n-text-color-disabled": Z || (k ? C.textColorDisabledPrimary : C[Y("textColorDisabled", ie)])
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
        [Y("height", H)]: ke,
        [Y("fontSize", H)]: me,
        [Y("padding", H)]: ye,
        [Y("paddingRound", H)]: be,
        [Y("iconSize", H)]: Ye,
        [Y("borderRadius", H)]: et,
        [Y("iconMargin", H)]: at,
        waveOpacity: ot
      } = C, gt = {
        "--n-width": J && !_ ? ke : "initial",
        "--n-height": _ ? "initial" : ke,
        "--n-font-size": me,
        "--n-padding": J || _ ? "initial" : j ? be : ye,
        "--n-icon-size": Ye,
        "--n-icon-margin": at,
        "--n-border-radius": _ ? "initial" : J || j ? ke : et
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": A,
        "--n-bezier-ease-out": T,
        "--n-ripple-duration": P,
        "--n-opacity-disabled": O,
        "--n-wave-opacity": ot
      }, we), re), Ne), gt);
    }), F = m ? je("button", R(() => {
      let y = "";
      const {
        dashed: A,
        type: T,
        ghost: C,
        text: P,
        color: O,
        round: I,
        circle: K,
        textColor: H,
        secondary: t,
        tertiary: S,
        quaternary: $,
        strong: _
      } = e;
      A && (y += "a"), C && (y += "b"), P && (y += "c"), I && (y += "d"), K && (y += "e"), t && (y += "f"), S && (y += "g"), $ && (y += "h"), _ && (y += "i"), O && (y += `j${to(O)}`), H && (y += `k${to(H)}`);
      const {
        value: k
      } = l;
      return y += `l${k[0]}`, y += `m${T[0]}`, y;
    }), B, e) : void 0;
    return {
      selfElRef: n,
      waveElRef: r,
      mergedClsPrefix: p,
      mergedFocusable: s,
      mergedSize: l,
      showBorder: i,
      enterPressed: o,
      rtlEnabled: x,
      handleMousedown: u,
      handleKeydown: f,
      handleBlur: v,
      handleKeyup: c,
      handleClick: d,
      customColorCssVars: R(() => {
        const {
          color: y
        } = e;
        if (!y) return null;
        const A = fn(y);
        return {
          "--n-border-color": y,
          "--n-border-color-hover": A,
          "--n-border-color-pressed": Gr(y),
          "--n-border-color-focus": A,
          "--n-border-color-disabled": y
        };
      }),
      cssVars: m ? void 0 : B,
      themeClass: F == null ? void 0 : F.themeClass,
      onRender: F == null ? void 0 : F.onRender
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
    }, this.iconPlacement === "right" && o, h(xu, {
      width: !0
    }, {
      default: () => _e(this.$slots.icon, (i) => (this.loading || this.renderIcon || i) && h("span", {
        class: `${e}-button__icon`,
        style: {
          margin: ri(this.$slots.default) ? "0" : ""
        }
      }, h(na, null, {
        default: () => this.loading ? h(Co, {
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
    }), this.iconPlacement === "left" && o, this.text ? null : h(Bm, {
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
}), gb = {
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
function mb(e) {
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
    closeIconColorPressed: v,
    closeColorHover: m,
    closeColorPressed: p,
    modalColor: g,
    boxShadow1: b,
    popoverColor: x,
    actionColor: B
  } = e;
  return Object.assign(Object.assign({}, gb), {
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
    closeColorPressed: p,
    closeBorderRadius: r,
    closeIconColor: c,
    closeIconColorHover: f,
    closeIconColorPressed: v,
    fontSizeSmall: i,
    fontSizeMedium: i,
    fontSizeLarge: i,
    fontSizeHuge: i,
    boxShadow: b,
    borderRadius: r
  });
}
const Tu = {
  name: "Card",
  common: Ve,
  self: mb
}, bb = z([M("card", `
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
 `, [fs({
  background: "var(--n-color-modal)"
}), q("hoverable", [z("&:hover", "box-shadow: var(--n-box-shadow);")]), q("content-segmented", [z(">", [E("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), q("content-soft-segmented", [z(">", [E("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), q("footer-segmented", [z(">", [E("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), q("footer-soft-segmented", [z(">", [E("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), z(">", [M("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [E("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), E("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), E("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), E("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), E("content", "flex: 1; min-width: 0;"), E("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [z("&:first-child", {
  paddingTop: "var(--n-padding-bottom)"
})]), E("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), M("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [z("img", `
 display: block;
 width: 100%;
 `)]), q("bordered", `
 border: 1px solid var(--n-border-color);
 `, [z("&:target", "border-color: var(--n-color-target);")]), q("action-segmented", [z(">", [E("action", [z("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), q("content-segmented, content-soft-segmented", [z(">", [E("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [z("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), q("footer-segmented, footer-soft-segmented", [z(">", [E("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [z("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), q("embedded", `
 background-color: var(--n-color-embedded);
 `)]), Ei(M("card", `
 background: var(--n-color-modal);
 `, [q("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), cs(M("card", `
 background: var(--n-color-popover);
 `, [q("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), sa = {
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
}, Cb = Kn(sa), yb = Object.assign(Object.assign({}, fe.props), sa), wb = Q({
  name: "Card",
  props: yb,
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
    } = Te(e), a = fe("Card", "-card", bb, Tu, e, o), l = yt("Card", i, o), s = R(() => {
      const {
        size: d
      } = e, {
        self: {
          color: c,
          colorModal: f,
          colorTarget: v,
          textColor: m,
          titleTextColor: p,
          titleFontWeight: g,
          borderColor: b,
          actionColor: x,
          borderRadius: B,
          lineHeight: F,
          closeIconColor: y,
          closeIconColorHover: A,
          closeIconColorPressed: T,
          closeColorHover: C,
          closeColorPressed: P,
          closeBorderRadius: O,
          closeIconSize: I,
          closeSize: K,
          boxShadow: H,
          colorPopover: t,
          colorEmbedded: S,
          colorEmbeddedModal: $,
          colorEmbeddedPopover: _,
          [Y("padding", d)]: k,
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
      } = $t(k);
      return {
        "--n-bezier": Z,
        "--n-border-radius": B,
        "--n-color": c,
        "--n-color-modal": f,
        "--n-color-popover": t,
        "--n-color-embedded": S,
        "--n-color-embedded-modal": $,
        "--n-color-embedded-popover": _,
        "--n-color-target": v,
        "--n-text-color": m,
        "--n-line-height": F,
        "--n-action-color": x,
        "--n-title-text-color": p,
        "--n-title-font-weight": g,
        "--n-close-icon-color": y,
        "--n-close-icon-color-hover": A,
        "--n-close-icon-color-pressed": T,
        "--n-close-color-hover": C,
        "--n-close-color-pressed": P,
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
        "--n-close-border-radius": O
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
      const c = this.cover ? ht([this.cover()]) : d;
      return c && h("div", {
        class: `${o}-card-cover`,
        role: "none"
      }, c);
    }), _e(u.header, (d) => {
      const {
        title: c
      } = this, f = c ? ht(typeof c == "function" ? [c()] : [c]) : d;
      return f || this.closable ? h("div", {
        class: [`${o}-card-header`, this.headerClass],
        style: this.headerStyle,
        role: "heading"
      }, h("div", {
        class: `${o}-card-header__main`,
        role: "heading"
      }, f), _e(u["header-extra"], (v) => {
        const m = this.headerExtra ? ht([this.headerExtra()]) : v;
        return m && h("div", {
          class: [`${o}-card-header__extra`, this.headerExtraClass],
          style: this.headerExtraStyle
        }, m);
      }), this.closable && h(ra, {
        clsPrefix: o,
        class: `${o}-card-header__close`,
        onClick: this.handleCloseClick,
        absolute: !0
      })) : null;
    }), _e(u.default, (d) => {
      const {
        content: c
      } = this, f = c ? ht(typeof c == "function" ? [c()] : [c]) : d;
      return f && h("div", {
        class: [`${o}-card__content`, this.contentClass],
        style: this.contentStyle,
        role: "none"
      }, f);
    }), _e(u.footer, (d) => {
      const c = this.footer ? ht([this.footer()]) : d;
      return c && h("div", {
        class: [`${o}-card__footer`, this.footerClass],
        style: this.footerStyle,
        role: "none"
      }, c);
    }), _e(u.action, (d) => {
      const c = this.action ? ht([this.action()]) : d;
      return c && h("div", {
        class: `${o}-card__action`,
        role: "none"
      }, c);
    }));
  }
});
function Bb(e) {
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
const Sb = {
  name: "Collapse",
  common: Ve,
  self: Bb
}, Fb = M("collapse", "width: 100%;", [M("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [q("disabled", [E("header", "cursor: not-allowed;", [E("header-main", `
 color: var(--n-title-text-color-disabled);
 `), M("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), M("collapse-item", "margin-left: 32px;"), z("&:first-child", "margin-top: 0;"), z("&:first-child >", [E("header", "padding-top: 0;")]), q("left-arrow-placement", [E("header", [M("collapse-item-arrow", "margin-right: 4px;")])]), q("right-arrow-placement", [E("header", [M("collapse-item-arrow", "margin-left: 4px;")])]), E("content-wrapper", [E("content-inner", "padding-top: 16px;"), Um({
  duration: "0.15s"
})]), q("active", [E("header", [q("active", [M("collapse-item-arrow", "transform: rotate(90deg);")])])]), z("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), He("disabled", [q("trigger-area-main", [E("header", [E("header-main", "cursor: pointer;"), M("collapse-item-arrow", "cursor: default;")])]), q("trigger-area-arrow", [E("header", [M("collapse-item-arrow", "cursor: pointer;")])]), q("trigger-area-extra", [E("header", [E("header-extra", "cursor: pointer;")])])]), E("header", `
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `, [E("header-main", `
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), E("header-extra", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), M("collapse-item-arrow", `
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]), Ab = Object.assign(Object.assign({}, fe.props), {
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
}), Ru = "n-collapse", $b = Q({
  name: "Collapse",
  props: Ab,
  setup(e, {
    slots: n
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Te(e), a = N(e.defaultExpandedNames), l = R(() => e.expandedNames), s = Un(l, a), u = fe("Collapse", "-collapse", Fb, Sb, e, r);
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
        value: F
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
      else if (!Array.isArray(F))
        d([b]), c({
          name: b,
          expanded: !0,
          event: x
        });
      else {
        const y = F.slice(), A = y.findIndex((T) => b === T);
        ~A ? (y.splice(A, 1), d(y), c({
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
    Fe(Ru, {
      props: e,
      mergedClsPrefixRef: r,
      expandedNamesRef: s,
      slots: n,
      toggleItem: f
    });
    const v = yt("Collapse", i, r), m = R(() => {
      const {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          titleFontWeight: b,
          dividerColor: x,
          titlePadding: B,
          titleTextColor: F,
          titleTextColorDisabled: y,
          textColor: A,
          arrowColor: T,
          fontSize: C,
          titleFontSize: P,
          arrowColorDisabled: O,
          itemMargin: I
        }
      } = u.value;
      return {
        "--n-font-size": C,
        "--n-bezier": g,
        "--n-text-color": A,
        "--n-divider-color": x,
        "--n-title-padding": B,
        "--n-title-font-size": P,
        "--n-title-text-color": F,
        "--n-title-text-color-disabled": y,
        "--n-title-font-weight": b,
        "--n-arrow-color": T,
        "--n-arrow-color-disabled": O,
        "--n-item-margin": I
      };
    }), p = o ? je("collapse", void 0, m, e) : void 0;
    return {
      rtlEnabled: v,
      mergedTheme: u,
      mergedClsPrefix: r,
      cssVars: o ? void 0 : m,
      themeClass: p == null ? void 0 : p.themeClass,
      onRender: p == null ? void 0 : p.onRender
    };
  },
  render() {
    var e;
    return (e = this.onRender) === null || e === void 0 || e.call(this), h("div", {
      class: [`${this.mergedClsPrefix}-collapse`, this.rtlEnabled && `${this.mergedClsPrefix}-collapse--rtl`, this.themeClass],
      style: this.cssVars
    }, this.$slots);
  }
}), Db = Q({
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
      onceTrue: ps(le(e, "show"))
    };
  },
  render() {
    return h(xu, null, {
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
        return i ? jt(a, [[fr, e]]) : e ? a : null;
      }
    });
  }
}), Pb = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
}, Eb = Q({
  name: "CollapseItem",
  props: Pb,
  setup(e) {
    const {
      mergedRtlRef: n
    } = Te(e), r = pr(), o = We(() => {
      var f;
      return (f = e.name) !== null && f !== void 0 ? f : r;
    }), i = xe(Ru);
    i || ho("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
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
          value: v
        } = o;
        return !~f.findIndex((m) => m === v);
      } else if (f) {
        const {
          value: v
        } = o;
        return v !== f;
      }
      return !0;
    });
    return {
      rtlEnabled: yt("Collapse", n, s),
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
        let v = "main";
        Ht(f, "arrow") && (v = "arrow"), Ht(f, "extra") && (v = "extra"), l.triggerAreas.includes(v) && i && !e.disabled && i.toggleItem(d.value, o.value, f);
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
    } = this, u = ni(n.header, {
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
    }, ni(c, {
      collapsed: o
    }, () => {
      var f;
      return [h(zt, {
        clsPrefix: a
      }, {
        default: (f = e.expandIcon) !== null && f !== void 0 ? f : () => this.rtlEnabled ? h(yg, null) : h(pu, null)
      })];
    })), r === "left" && u), Qd(d, {
      collapsed: o
    }, (f) => h("div", {
      class: `${a}-collapse-item__header-extra`,
      onClick: this.handleClick,
      "data-extra": !0
    }, f))), h(Db, {
      clsPrefix: a,
      displayDirective: i,
      show: !o
    }, n));
  }
}), zb = {
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
}, kb = Q({
  name: "ConfigProvider",
  alias: ["App"],
  props: zb,
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
          return b === void 0 ? g : or({}, b, g);
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
      return g !== void 0 ? g : n ? n.mergedClsPrefixRef.value : mi;
    }), d = R(() => {
      var g;
      const {
        rtl: b
      } = e;
      if (b === void 0)
        return n == null ? void 0 : n.mergedRtlRef.value;
      const x = {};
      for (const B of b)
        x[B.name] = ha(B), (g = B.peers) === null || g === void 0 || g.forEach((F) => {
          F.name in x || (x[F.name] = ha(F));
        });
      return x;
    }), c = R(() => e.breakpoints || (n == null ? void 0 : n.mergedBreakpointsRef.value)), f = e.inlineThemeDisabled || (n == null ? void 0 : n.inlineThemeDisabled), v = e.preflightStyleDisabled || (n == null ? void 0 : n.preflightStyleDisabled), m = e.styleMountTarget || (n == null ? void 0 : n.styleMountTarget), p = R(() => {
      const {
        value: g
      } = r, {
        value: b
      } = o, x = b && Object.keys(b).length !== 0, B = g == null ? void 0 : g.name;
      return B ? x ? `${B}-${vr(JSON.stringify(o.value))}` : B : x ? vr(JSON.stringify(o.value)) : "";
    });
    return Fe(Kt, {
      mergedThemeHashRef: p,
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
      preflightStyleDisabled: v || !1,
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
      class: `${this.mergedClsPrefix || mi}-config-provider`
    }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e));
  }
});
function Tb(e) {
  const {
    boxShadow2: n
  } = e;
  return {
    menuBoxShadow: n
  };
}
const Rb = {
  name: "Select",
  common: Ve,
  peers: {
    InternalSelection: Du,
    InternalSelectMenu: Su
  },
  self: Tb
}, Ob = z([M("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `), M("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [wo({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]), Mb = Object.assign(Object.assign({}, fe.props), {
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
}), Ib = Q({
  name: "Select",
  props: Mb,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.items !== void 0 && tt("select", "`items` is deprecated, please use `options` instead."), e.onChange !== void 0 && tt("select", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: n,
      mergedBorderedRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Te(e), a = fe("Select", "-select", Ob, Rb, e, n), l = N(e.defaultValue), s = le(e, "value"), u = Un(s, l), d = N(!1), c = N(""), f = Ti(e, ["items", "options"]), v = N([]), m = N([]), p = R(() => m.value.concat(v.value).concat(f.value)), g = R(() => {
      const {
        filter: w
      } = e;
      if (w) return w;
      const {
        labelField: L,
        valueField: U
      } = e;
      return (te, oe) => {
        if (!oe) return !1;
        const de = oe[L];
        if (typeof de == "string")
          return Yo(te, de);
        const ce = oe[U];
        return typeof ce == "string" ? Yo(te, ce) : typeof ce == "number" ? Yo(te, String(ce)) : !1;
      };
    }), b = R(() => {
      if (e.remote)
        return f.value;
      {
        const {
          value: w
        } = p, {
          value: L
        } = c;
        return !L.length || !e.filterable ? w : Xm(w, g.value, L, e.childrenField);
      }
    }), x = R(() => {
      const {
        valueField: w,
        childrenField: L
      } = e, U = Gm(w, L);
      return bu(b.value, U);
    }), B = R(() => Ym(p.value, e.valueField, e.childrenField)), F = N(!1), y = Un(le(e, "show"), F), A = N(null), T = N(null), C = N(null), {
      localeRef: P
    } = Br("Select"), O = R(() => {
      var w;
      return (w = e.placeholder) !== null && w !== void 0 ? w : P.value.placeholder;
    }), I = [], K = N(/* @__PURE__ */ new Map()), H = R(() => {
      const {
        fallbackOption: w
      } = e;
      if (w === void 0) {
        const {
          labelField: L,
          valueField: U
        } = e;
        return (te) => ({
          [L]: String(te),
          [U]: te
        });
      }
      return w === !1 ? !1 : (L) => Object.assign(w(L), {
        value: L
      });
    });
    function t(w) {
      const L = e.remote, {
        value: U
      } = K, {
        value: te
      } = B, {
        value: oe
      } = H, de = [];
      return w.forEach((ce) => {
        if (te.has(ce))
          de.push(te.get(ce));
        else if (L && U.has(ce))
          de.push(U.get(ce));
        else if (oe) {
          const ve = oe(ce);
          ve && de.push(ve);
        }
      }), de;
    }
    const S = R(() => {
      if (e.multiple) {
        const {
          value: w
        } = u;
        return Array.isArray(w) ? t(w) : [];
      }
      return null;
    }), $ = R(() => {
      const {
        value: w
      } = u;
      return !e.multiple && !Array.isArray(w) ? w === null ? null : t([w])[0] || null : null;
    }), _ = Wi(e), {
      mergedSizeRef: k,
      mergedDisabledRef: j,
      mergedStatusRef: J
    } = _;
    function Z(w, L) {
      const {
        onChange: U,
        "onUpdate:value": te,
        onUpdateValue: oe
      } = e, {
        nTriggerFormChange: de,
        nTriggerFormInput: ce
      } = _;
      U && he(U, w, L), oe && he(oe, w, L), te && he(te, w, L), l.value = w, de(), ce();
    }
    function ae(w) {
      const {
        onBlur: L
      } = e, {
        nTriggerFormBlur: U
      } = _;
      L && he(L, w), U();
    }
    function W() {
      const {
        onClear: w
      } = e;
      w && he(w);
    }
    function X(w) {
      const {
        onFocus: L,
        showOnFocus: U
      } = e, {
        nTriggerFormFocus: te
      } = _;
      L && he(L, w), te(), U && Me();
    }
    function ne(w) {
      const {
        onSearch: L
      } = e;
      L && he(L, w);
    }
    function we(w) {
      const {
        onScroll: L
      } = e;
      L && he(L, w);
    }
    function re() {
      var w;
      const {
        remote: L,
        multiple: U
      } = e;
      if (L) {
        const {
          value: te
        } = K;
        if (U) {
          const {
            valueField: oe
          } = e;
          (w = S.value) === null || w === void 0 || w.forEach((de) => {
            te.set(de[oe], de);
          });
        } else {
          const oe = $.value;
          oe && te.set(oe[e.valueField], oe);
        }
      }
    }
    function pe(w) {
      const {
        onUpdateShow: L,
        "onUpdate:show": U
      } = e;
      L && he(L, w), U && he(U, w), F.value = w;
    }
    function Me() {
      j.value || (pe(!0), F.value = !0, e.filterable && wt());
    }
    function ie() {
      pe(!1);
    }
    function Ne() {
      c.value = "", m.value = I;
    }
    const ke = N(!1);
    function me() {
      e.filterable && (ke.value = !0);
    }
    function ye() {
      e.filterable && (ke.value = !1, y.value || Ne());
    }
    function be() {
      j.value || (y.value ? e.filterable ? wt() : ie() : Me());
    }
    function Ye(w) {
      var L, U;
      !((U = (L = C.value) === null || L === void 0 ? void 0 : L.selfRef) === null || U === void 0) && U.contains(w.relatedTarget) || (d.value = !1, ae(w), ie());
    }
    function et(w) {
      X(w), d.value = !0;
    }
    function at() {
      d.value = !0;
    }
    function ot(w) {
      var L;
      !((L = A.value) === null || L === void 0) && L.$el.contains(w.relatedTarget) || (d.value = !1, ae(w), ie());
    }
    function gt() {
      var w;
      (w = A.value) === null || w === void 0 || w.focus(), ie();
    }
    function Be(w) {
      var L;
      y.value && (!((L = A.value) === null || L === void 0) && L.$el.contains(qn(w)) || ie());
    }
    function Pe(w) {
      if (!Array.isArray(w)) return [];
      if (H.value)
        return Array.from(w);
      {
        const {
          remote: L
        } = e, {
          value: U
        } = B;
        if (L) {
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
        tag: L,
        remote: U,
        clearFilterAfterSelect: te,
        valueField: oe
      } = e;
      if (L && !U) {
        const {
          value: de
        } = m, ce = de[0] || null;
        if (ce) {
          const ve = v.value;
          ve.length ? ve.push(ce) : v.value = [ce], m.value = I;
        }
      }
      if (U && K.value.set(w[oe], w), e.multiple) {
        const de = Pe(u.value), ce = de.findIndex((ve) => ve === w[oe]);
        if (~ce) {
          if (de.splice(ce, 1), L && !U) {
            const ve = G(w[oe]);
            ~ve && (v.value.splice(ve, 1), te && (c.value = ""));
          }
        } else
          de.push(w[oe]), te && (c.value = "");
        Z(de, t(de));
      } else {
        if (L && !U) {
          const de = G(w[oe]);
          ~de ? v.value = [v.value[de]] : v.value = I;
        }
        Xt(), ie(), Z(w[oe], w);
      }
    }
    function G(w) {
      return v.value.findIndex((U) => U[e.valueField] === w);
    }
    function ee(w) {
      y.value || Me();
      const {
        value: L
      } = w.target;
      c.value = L;
      const {
        tag: U,
        remote: te
      } = e;
      if (ne(L), U && !te) {
        if (!L) {
          m.value = I;
          return;
        }
        const {
          onCreate: oe
        } = e, de = oe ? oe(L) : {
          [e.labelField]: L,
          [e.valueField]: L
        }, {
          valueField: ce,
          labelField: ve
        } = e;
        f.value.some((Ee) => Ee[ce] === de[ce] || Ee[ve] === de[ve]) || v.value.some((Ee) => Ee[ce] === de[ce] || Ee[ve] === de[ve]) ? m.value = I : m.value = [de];
      }
    }
    function Re(w) {
      w.stopPropagation();
      const {
        multiple: L
      } = e;
      !L && e.filterable && ie(), W(), L ? Z([], []) : Z(null, null);
    }
    function un(w) {
      !Ht(w, "action") && !Ht(w, "empty") && !Ht(w, "header") && w.preventDefault();
    }
    function Tt(w) {
      we(w);
    }
    function Rt(w) {
      var L, U, te, oe, de;
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
          if (!(!((L = A.value) === null || L === void 0) && L.isComposing)) {
            if (y.value) {
              const ce = (U = C.value) === null || U === void 0 ? void 0 : U.getPendingTmNode();
              ce ? Xe(ce) : e.filterable || (ie(), Xt());
            } else if (Me(), e.tag && ke.value) {
              const ce = m.value[0];
              if (ce) {
                const ve = ce[e.valueField], {
                  value: Ee
                } = u;
                e.multiple && Array.isArray(Ee) && Ee.includes(ve) || qe(ce);
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
          y.value && (Sc(w), ie()), (de = A.value) === null || de === void 0 || de.focus();
          break;
      }
    }
    function Xt() {
      var w;
      (w = A.value) === null || w === void 0 || w.focus();
    }
    function wt() {
      var w;
      (w = A.value) === null || w === void 0 || w.focusInput();
    }
    function Ot() {
      var w;
      y.value && ((w = T.value) === null || w === void 0 || w.syncPosition());
    }
    re(), ze(le(e, "options"), re);
    const Yt = {
      focus: () => {
        var w;
        (w = A.value) === null || w === void 0 || w.focus();
      },
      focusInput: () => {
        var w;
        (w = A.value) === null || w === void 0 || w.focusInput();
      },
      blur: () => {
        var w;
        (w = A.value) === null || w === void 0 || w.blur();
      },
      blurInput: () => {
        var w;
        (w = A.value) === null || w === void 0 || w.blurInput();
      }
    }, lt = R(() => {
      const {
        self: {
          menuBoxShadow: w
        }
      } = a.value;
      return {
        "--n-menu-box-shadow": w
      };
    }), mt = i ? je("select", void 0, lt, e) : void 0;
    return Object.assign(Object.assign({}, Yt), {
      mergedStatus: J,
      mergedClsPrefix: n,
      mergedBordered: r,
      namespace: o,
      treeMate: x,
      isMounted: Dr(),
      triggerRef: A,
      menuRef: C,
      pattern: c,
      uncontrolledShow: F,
      mergedShow: y,
      adjustedTo: qt(e),
      uncontrolledValue: l,
      mergedValue: u,
      followerRef: T,
      localizedPlaceholder: O,
      selectedOption: $,
      selectedOptions: S,
      mergedSize: k,
      mergedDisabled: j,
      focused: d,
      activeWithoutMenuOpen: ke,
      inlineThemeDisabled: i,
      onTriggerInputFocus: me,
      onTriggerInputBlur: ye,
      handleTriggerOrMenuResize: Ot,
      handleMenuFocus: at,
      handleMenuBlur: ot,
      handleMenuTabOut: gt,
      handleTriggerClick: be,
      handleToggle: Xe,
      handleDeleteOption: qe,
      handlePatternInput: ee,
      handleClear: Re,
      handleTriggerBlur: Ye,
      handleTriggerFocus: et,
      handleKeydown: Rt,
      handleMenuAfterLeave: Ne,
      handleMenuClickOutside: Be,
      handleMenuScroll: Tt,
      handleMenuKeydown: Rt,
      handleMenuMousedown: un,
      mergedTheme: a,
      cssVars: i ? void 0 : lt,
      themeClass: mt == null ? void 0 : mt.themeClass,
      onRender: mt == null ? void 0 : mt.onRender
    });
  },
  render() {
    return h("div", {
      class: `${this.mergedClsPrefix}-select`
    }, h(Oi, null, {
      default: () => [h(Mi, null, {
        default: () => h(jm, {
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
      }), h(Li, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === qt.tdkey,
        containerClass: this.namespace,
        width: this.consistentMenuWidth ? "target" : void 0,
        minWidth: "target",
        placement: this.placement
      }, {
        default: () => h(pt, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted,
          onAfterLeave: this.handleMenuAfterLeave
        }, {
          default: () => {
            var e, n, r;
            return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) === null || e === void 0 || e.call(this), jt(h(ym, Object.assign({}, this.menuProps, {
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
            }), this.displayDirective === "show" ? [[fr, this.mergedShow], [gr, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]] : [[gr, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), _b = {
  padding: "8px 14px"
};
function Lb(e) {
  const {
    borderRadius: n,
    boxShadow2: r,
    baseColor: o
  } = e;
  return Object.assign(Object.assign({}, _b), {
    borderRadius: n,
    boxShadow: r,
    color: st(o, "rgba(0, 0, 0, .85)"),
    textColor: o
  });
}
const Nb = {
  name: "Tooltip",
  common: Ve,
  peers: {
    Popover: zr
  },
  self: Lb
}, Hb = {
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
function Wb(e) {
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
    heightSmall: v,
    heightMedium: m,
    heightLarge: p,
    heightHuge: g,
    textColor3: b,
    opacityDisabled: x
  } = e;
  return Object.assign(Object.assign({}, Hb), {
    optionHeightSmall: v,
    optionHeightMedium: m,
    optionHeightLarge: p,
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
const jb = {
  name: "Dropdown",
  common: Ve,
  peers: {
    Popover: zr
  },
  self: Wb
}, Vb = Object.assign(Object.assign({}, kr), fe.props), qb = Q({
  name: "Tooltip",
  props: Vb,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Te(e), r = fe("Tooltip", "-tooltip", void 0, Nb, e, n), o = N(null);
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
    return h(Tr, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: n.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), Ou = Q({
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
function Kb(e) {
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
const Ub = {
  name: "Icon",
  common: Ve,
  self: Kb
}, Gb = M("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [q("color-transition", {
  transition: "color .3s var(--n-bezier)"
}), q("depth", {
  color: "var(--n-color)"
}, [z("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), z("svg", {
  height: "1em",
  width: "1em"
})]), Xb = Object.assign(Object.assign({}, fe.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), ua = Q({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: Xb,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r
    } = Te(e), o = fe("Icon", "-icon", Gb, Ub, e, n), i = R(() => {
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
          fontSize: Wt(l),
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
}), da = "n-dropdown-menu", Bo = "n-dropdown", Ml = "n-dropdown-option";
function yi(e, n) {
  return e.type === "submenu" || e.type === void 0 && e[n] !== void 0;
}
function Yb(e) {
  return e.type === "group";
}
function Mu(e) {
  return e.type === "divider";
}
function Zb(e) {
  return e.type === "render";
}
const Iu = Q({
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
    const n = xe(Bo), {
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
      childrenFieldRef: v,
      renderOptionRef: m,
      nodePropsRef: p,
      menuPropsRef: g
    } = n, b = xe(Ml, null), x = xe(da), B = xe(Pr), F = R(() => e.tmNode.rawNode), y = R(() => {
      const {
        value: k
      } = v;
      return yi(e.tmNode.rawNode, k);
    }), A = R(() => {
      const {
        disabled: k
      } = e.tmNode;
      return k;
    }), T = R(() => {
      if (!y.value) return !1;
      const {
        key: k,
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
      return J !== null ? W.includes(k) : Z !== null ? W.includes(k) && W[W.length - 1] !== k : ae !== null ? W.includes(k) : !1;
    }), C = R(() => o.value === null && !s.value), P = $c(T, 300, C), O = R(() => !!(b != null && b.enteringSubmenuRef.value)), I = N(!1);
    Fe(Ml, {
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
        parentKey: k,
        tmNode: j
      } = e;
      j.disabled || u.value && (i.value = k, o.value = null, r.value = j.key);
    }
    function S() {
      const {
        tmNode: k
      } = e;
      k.disabled || u.value && r.value !== k.key && t();
    }
    function $(k) {
      if (e.tmNode.disabled || !u.value) return;
      const {
        relatedTarget: j
      } = k;
      j && !Ht({
        target: j
      }, "dropdownOption") && !Ht({
        target: j
      }, "scrollbarRail") && (r.value = null);
    }
    function _() {
      const {
        value: k
      } = y, {
        tmNode: j
      } = e;
      u.value && !k && !j.disabled && (n.doSelect(j.key, j.rawNode), n.doUpdateShow(!1));
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
      mergedShowSubmenu: R(() => P.value && !O.value),
      rawNode: F,
      hasSubmenu: y,
      pending: We(() => {
        const {
          value: k
        } = a, {
          key: j
        } = e.tmNode;
        return k.includes(j);
      }),
      childActive: We(() => {
        const {
          value: k
        } = l, {
          key: j
        } = e.tmNode, J = k.findIndex((Z) => j === Z);
        return J === -1 ? !1 : J < k.length - 1;
      }),
      active: We(() => {
        const {
          value: k
        } = l, {
          key: j
        } = e.tmNode, J = k.findIndex((Z) => j === Z);
        return J === -1 ? !1 : J === k.length - 1;
      }),
      mergedDisabled: A,
      renderOption: m,
      nodeProps: p,
      handleClick: _,
      handleMouseMove: S,
      handleMouseEnter: t,
      handleMouseLeave: $,
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
      props: v,
      scrollable: m
    } = this;
    let p = null;
    if (i) {
      const B = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, o, o.children);
      p = h(_u, Object.assign({}, B, {
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
    }, b), h("div", an(g, v), [h("div", {
      class: [`${a}-dropdown-option-body__prefix`, l && `${a}-dropdown-option-body__prefix--show-icon`]
    }, [d ? d(o) : Qe(o.icon)]), h("div", {
      "data-dropdown-option": !0,
      class: `${a}-dropdown-option-body__label`
    }, u ? u(o) : Qe((n = o[this.labelField]) !== null && n !== void 0 ? n : o.title)), h("div", {
      "data-dropdown-option": !0,
      class: [`${a}-dropdown-option-body__suffix`, s && `${a}-dropdown-option-body__suffix--has-submenu`]
    }, this.hasSubmenu ? h(ua, null, {
      default: () => h(pu, null)
    }) : null)]), this.hasSubmenu ? h(Oi, null, {
      default: () => [h(Mi, null, {
        default: () => h("div", {
          class: `${a}-dropdown-offset-container`
        }, h(Li, {
          show: this.mergedShowSubmenu,
          placement: this.placement,
          to: m && this.popoverBody || void 0,
          teleportDisabled: !m
        }, {
          default: () => h("div", {
            class: `${a}-dropdown-menu-wrapper`
          }, r ? h(pt, {
            onBeforeEnter: this.handleSubmenuBeforeEnter,
            onAfterEnter: this.handleSubmenuAfterEnter,
            name: "fade-in-scale-up-transition",
            appear: !0
          }, {
            default: () => p
          }) : p)
        }))
      })]
    }) : null);
    return c ? c({
      node: x,
      option: o
    }) : x;
  }
}), Jb = Q({
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
    } = xe(da), {
      renderLabelRef: r,
      labelFieldRef: o,
      nodePropsRef: i,
      renderOptionRef: a
    } = xe(Bo);
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
}), Qb = Q({
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
    return h(xt, null, h(Jb, {
      clsPrefix: r,
      tmNode: e,
      key: e.key
    }), o == null ? void 0 : o.map((i) => {
      const {
        rawNode: a
      } = i;
      return a.show === !1 ? null : Mu(a) ? h(Ou, {
        clsPrefix: r,
        key: i.key
      }) : i.isGroup ? (Vt("dropdown", "`group` node is not allowed to be put in `group` node."), null) : h(Iu, {
        clsPrefix: r,
        tmNode: i,
        parentKey: n,
        key: i.key
      });
    }));
  }
}), e1 = Q({
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
}), _u = Q({
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
    } = xe(Bo);
    Fe(da, {
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
            }) => yi(u, i));
          const {
            rawNode: s
          } = a;
          return yi(s, i);
        });
      })
    });
    const o = N(null);
    return Fe(vo, null), Fe(xo, null), Fe(Pr, o), {
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
      return a.show === !1 ? null : Zb(a) ? h(e1, {
        tmNode: i,
        key: i.key
      }) : Mu(a) ? h(Ou, {
        clsPrefix: n,
        key: i.key
      }) : Yb(a) ? h(Qb, {
        clsPrefix: n,
        tmNode: i,
        parentKey: e,
        key: i.key
      }) : h(Iu, {
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
    }, r ? h(Bu, {
      contentClass: `${n}-dropdown-menu__content`
    }, {
      default: () => o
    }) : o, this.showArrow ? Au({
      clsPrefix: n,
      arrowStyle: this.arrowStyle,
      arrowClass: void 0,
      arrowWrapperClass: void 0,
      arrowWrapperStyle: void 0
    }) : null);
  }
}), t1 = M("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [wo(), M("dropdown-option", `
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
 `)]), M("dropdown-option-body", `
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
 `), He("disabled", [q("pending", `
 color: var(--n-option-text-color-hover);
 `, [E("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), z("&::before", "background-color: var(--n-option-color-hover);")]), q("active", `
 color: var(--n-option-text-color-active);
 `, [E("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), z("&::before", "background-color: var(--n-option-color-active);")]), q("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [E("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), q("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), q("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [E("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [q("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), E("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [q("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), M("icon", `
 font-size: var(--n-option-icon-size);
 `)]), E("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), E("suffix", `
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
 `, [q("has-submenu", `
 width: var(--n-option-icon-suffix-width);
 `), M("icon", `
 font-size: var(--n-option-icon-size);
 `)]), M("dropdown-menu", "pointer-events: all;")]), M("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), M("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), M("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), z(">", [M("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), He("scrollable", `
 padding: var(--n-padding);
 `), q("scrollable", [E("content", `
 padding: var(--n-padding);
 `)])]), n1 = {
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
}, r1 = Object.keys(kr), o1 = Object.assign(Object.assign(Object.assign({}, kr), n1), fe.props), i1 = Q({
  name: "Dropdown",
  inheritAttrs: !1,
  props: o1,
  setup(e) {
    const n = N(!1), r = Un(le(e, "show"), n), o = R(() => {
      const {
        keyField: H,
        childrenField: t
      } = e;
      return bu(e.options, {
        getKey(S) {
          return S[H];
        },
        getDisabled(S) {
          return S.disabled === !0;
        },
        getIgnored(S) {
          return S.type === "divider" || S.type === "render";
        },
        getChildren(S) {
          return S[t];
        }
      });
    }), i = R(() => o.value.treeNodes), a = N(null), l = N(null), s = N(null), u = R(() => {
      var H, t, S;
      return (S = (t = (H = a.value) !== null && H !== void 0 ? H : l.value) !== null && t !== void 0 ? t : s.value) !== null && S !== void 0 ? S : null;
    }), d = R(() => o.value.getPath(u.value).keyPath), c = R(() => o.value.getPath(e.value).keyPath), f = We(() => e.keyboard && r.value);
    _c({
      keydown: {
        ArrowUp: {
          prevent: !0,
          handler: A
        },
        ArrowRight: {
          prevent: !0,
          handler: y
        },
        ArrowDown: {
          prevent: !0,
          handler: T
        },
        ArrowLeft: {
          prevent: !0,
          handler: F
        },
        Enter: {
          prevent: !0,
          handler: C
        },
        Escape: B
      }
    }, f);
    const {
      mergedClsPrefixRef: v,
      inlineThemeDisabled: m
    } = Te(e), p = fe("Dropdown", "-dropdown", t1, jb, e, v);
    Fe(Bo, {
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
        onSelect: S
      } = e;
      S && he(S, H, t);
    }
    function b(H) {
      const {
        "onUpdate:show": t,
        onUpdateShow: S
      } = e;
      t && he(t, H), S && he(S, H), n.value = H;
    }
    function x() {
      a.value = null, l.value = null, s.value = null;
    }
    function B() {
      b(!1);
    }
    function F() {
      O("left");
    }
    function y() {
      O("right");
    }
    function A() {
      O("up");
    }
    function T() {
      O("down");
    }
    function C() {
      const H = P();
      H != null && H.isLeaf && r.value && (g(H.key, H.rawNode), b(!1));
    }
    function P() {
      var H;
      const {
        value: t
      } = o, {
        value: S
      } = u;
      return !t || S === null ? null : (H = t.getNode(S)) !== null && H !== void 0 ? H : null;
    }
    function O(H) {
      const {
        value: t
      } = u, {
        value: {
          getFirstAvailableNode: S
        }
      } = o;
      let $ = null;
      if (t === null) {
        const _ = S();
        _ !== null && ($ = _.key);
      } else {
        const _ = P();
        if (_) {
          let k;
          switch (H) {
            case "down":
              k = _.getNext();
              break;
            case "up":
              k = _.getPrev();
              break;
            case "right":
              k = _.getChild();
              break;
            case "left":
              k = _.getParent();
              break;
          }
          k && ($ = k.key);
        }
      }
      $ !== null && (a.value = null, l.value = $);
    }
    const I = R(() => {
      const {
        size: H,
        inverted: t
      } = e, {
        common: {
          cubicBezierEaseInOut: S
        },
        self: $
      } = p.value, {
        padding: _,
        dividerColor: k,
        borderRadius: j,
        optionOpacityDisabled: J,
        [Y("optionIconSuffixWidth", H)]: Z,
        [Y("optionSuffixWidth", H)]: ae,
        [Y("optionIconPrefixWidth", H)]: W,
        [Y("optionPrefixWidth", H)]: X,
        [Y("fontSize", H)]: ne,
        [Y("optionHeight", H)]: we,
        [Y("optionIconSize", H)]: re
      } = $, pe = {
        "--n-bezier": S,
        "--n-font-size": ne,
        "--n-padding": _,
        "--n-border-radius": j,
        "--n-option-height": we,
        "--n-option-prefix-width": X,
        "--n-option-icon-prefix-width": W,
        "--n-option-suffix-width": ae,
        "--n-option-icon-suffix-width": Z,
        "--n-option-icon-size": re,
        "--n-divider-color": k,
        "--n-option-opacity-disabled": J
      };
      return t ? (pe["--n-color"] = $.colorInverted, pe["--n-option-color-hover"] = $.optionColorHoverInverted, pe["--n-option-color-active"] = $.optionColorActiveInverted, pe["--n-option-text-color"] = $.optionTextColorInverted, pe["--n-option-text-color-hover"] = $.optionTextColorHoverInverted, pe["--n-option-text-color-active"] = $.optionTextColorActiveInverted, pe["--n-option-text-color-child-active"] = $.optionTextColorChildActiveInverted, pe["--n-prefix-color"] = $.prefixColorInverted, pe["--n-suffix-color"] = $.suffixColorInverted, pe["--n-group-header-text-color"] = $.groupHeaderTextColorInverted) : (pe["--n-color"] = $.color, pe["--n-option-color-hover"] = $.optionColorHover, pe["--n-option-color-active"] = $.optionColorActive, pe["--n-option-text-color"] = $.optionTextColor, pe["--n-option-text-color-hover"] = $.optionTextColorHover, pe["--n-option-text-color-active"] = $.optionTextColorActive, pe["--n-option-text-color-child-active"] = $.optionTextColorChildActive, pe["--n-prefix-color"] = $.prefixColor, pe["--n-suffix-color"] = $.suffixColor, pe["--n-group-header-text-color"] = $.groupHeaderTextColor), pe;
    }), K = m ? je("dropdown", R(() => `${e.size[0]}${e.inverted ? "i" : ""}`), I, e) : void 0;
    return {
      mergedClsPrefix: v,
      mergedTheme: p,
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
      const f = (c == null ? void 0 : c(void 0, this.tmNodes.map((m) => m.rawNode))) || {}, v = {
        ref: Jd(i),
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
      return h(_u, an(this.$attrs, v, f));
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
    return h(Tr, Object.assign({}, Cn(this.$props, r1), r), {
      trigger: () => {
        var o, i;
        return (i = (o = this.$slots).default) === null || i === void 0 ? void 0 : i.call(o);
      }
    });
  }
}), a1 = {
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
function l1(e) {
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
    errorColor: v,
    primaryColor: m,
    dividerColor: p,
    borderRadius: g,
    fontWeightStrong: b,
    lineHeight: x,
    fontSize: B
  } = e;
  return Object.assign(Object.assign({}, a1), {
    fontSize: B,
    lineHeight: x,
    border: `1px solid ${p}`,
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
    iconColorError: v,
    borderRadius: g,
    titleFontWeight: b
  });
}
const Lu = {
  name: "Dialog",
  common: Ve,
  peers: {
    Button: la
  },
  self: l1
}, So = {
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
}, Nu = Kn(So), s1 = z([M("dialog", `
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
 `, [E("icon", {
  color: "var(--n-icon-color)"
}), q("bordered", {
  border: "var(--n-border)"
}), q("icon-top", [E("close", {
  margin: "var(--n-close-margin)"
}), E("icon", {
  margin: "var(--n-icon-margin)"
}), E("content", {
  textAlign: "center"
}), E("title", {
  justifyContent: "center"
}), E("action", {
  justifyContent: "center"
})]), q("icon-left", [E("icon", {
  margin: "var(--n-icon-margin)"
}), q("closable", [E("title", `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), E("close", `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), E("content", `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [q("last", "margin-bottom: 0;")]), E("action", `
 display: flex;
 justify-content: flex-end;
 `, [z("> *:not(:last-child)", `
 margin-right: var(--n-action-space);
 `)]), E("icon", `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), E("title", `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), M("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), Ei(M("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), M("dialog", [fs(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), u1 = {
  default: () => h(Al, null),
  info: () => h(Al, null),
  success: () => h($g, null),
  warning: () => h(vu, null),
  error: () => h(Ag, null)
}, Hu = Q({
  name: "Dialog",
  alias: [
    "NimbusConfirmCard",
    // deprecated
    "Confirm"
    // deprecated
  ],
  props: Object.assign(Object.assign({}, fe.props), So),
  setup(e) {
    const {
      mergedComponentPropsRef: n,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Te(e), a = yt("Dialog", i, r), l = R(() => {
      var m, p;
      const {
        iconPlacement: g
      } = e;
      return g || ((p = (m = n == null ? void 0 : n.value) === null || m === void 0 ? void 0 : m.Dialog) === null || p === void 0 ? void 0 : p.iconPlacement) || "left";
    });
    function s(m) {
      const {
        onPositiveClick: p
      } = e;
      p && p(m);
    }
    function u(m) {
      const {
        onNegativeClick: p
      } = e;
      p && p(m);
    }
    function d() {
      const {
        onClose: m
      } = e;
      m && m();
    }
    const c = fe("Dialog", "-dialog", s1, Lu, e, r), f = R(() => {
      const {
        type: m
      } = e, p = l.value, {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          fontSize: b,
          lineHeight: x,
          border: B,
          titleTextColor: F,
          textColor: y,
          color: A,
          closeBorderRadius: T,
          closeColorHover: C,
          closeColorPressed: P,
          closeIconColor: O,
          closeIconColorHover: I,
          closeIconColorPressed: K,
          closeIconSize: H,
          borderRadius: t,
          titleFontWeight: S,
          titleFontSize: $,
          padding: _,
          iconSize: k,
          actionSpace: j,
          contentMargin: J,
          closeSize: Z,
          [p === "top" ? "iconMarginIconTop" : "iconMargin"]: ae,
          [p === "top" ? "closeMarginIconTop" : "closeMargin"]: W,
          [Y("iconColor", m)]: X
        }
      } = c.value, ne = $t(ae);
      return {
        "--n-font-size": b,
        "--n-icon-color": X,
        "--n-bezier": g,
        "--n-close-margin": W,
        "--n-icon-margin-top": ne.top,
        "--n-icon-margin-right": ne.right,
        "--n-icon-margin-bottom": ne.bottom,
        "--n-icon-margin-left": ne.left,
        "--n-icon-size": k,
        "--n-close-size": Z,
        "--n-close-icon-size": H,
        "--n-close-border-radius": T,
        "--n-close-color-hover": C,
        "--n-close-color-pressed": P,
        "--n-close-icon-color": O,
        "--n-close-icon-color-hover": I,
        "--n-close-icon-color-pressed": K,
        "--n-color": A,
        "--n-text-color": y,
        "--n-border-radius": t,
        "--n-padding": _,
        "--n-line-height": x,
        "--n-border": B,
        "--n-content-margin": J,
        "--n-title-font-size": $,
        "--n-title-font-weight": S,
        "--n-title-text-color": F,
        "--n-action-space": j
      };
    }), v = o ? je("dialog", R(() => `${e.type[0]}${l.value[0]}`), f, e) : void 0;
    return {
      mergedClsPrefix: r,
      rtlEnabled: a,
      mergedIconPlacement: l,
      mergedTheme: c,
      handlePositiveClick: s,
      handleNegativeClick: u,
      handleCloseClick: d,
      cssVars: o ? void 0 : f,
      themeClass: v == null ? void 0 : v.themeClass,
      onRender: v == null ? void 0 : v.onRender
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
      negativeButtonProps: v,
      handlePositiveClick: m,
      handleNegativeClick: p,
      mergedTheme: g,
      loading: b,
      type: x,
      mergedClsPrefix: B
    } = this;
    (e = this.onRender) === null || e === void 0 || e.call(this);
    const F = a ? h(zt, {
      clsPrefix: B,
      class: `${B}-dialog__icon`
    }, {
      default: () => _e(this.$slots.icon, (A) => A || (this.icon ? Qe(this.icon) : u1[this.type]()))
    }) : null, y = _e(this.$slots.action, (A) => A || c || d || u ? h("div", {
      class: [`${B}-dialog__action`, this.actionClass],
      style: this.actionStyle
    }, A || (u ? [Qe(u)] : [this.negativeText && h(Sr, Object.assign({
      theme: g.peers.Button,
      themeOverrides: g.peerOverrides.Button,
      ghost: !0,
      size: "small",
      onClick: p
    }, v), {
      default: () => Qe(this.negativeText)
    }), this.positiveText && h(Sr, Object.assign({
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
    }, i ? _e(this.$slots.close, (A) => {
      const T = [`${B}-dialog__close`, this.rtlEnabled && `${B}-dialog--rtl`];
      return A ? h("div", {
        class: T
      }, A) : h(ra, {
        clsPrefix: B,
        class: T,
        onClick: this.handleCloseClick
      });
    }) : null, a && r === "top" ? h("div", {
      class: `${B}-dialog-icon-container`
    }, F) : null, h("div", {
      class: [`${B}-dialog__title`, this.titleClass],
      style: this.titleStyle
    }, a && r === "left" ? F : null, Dt(this.$slots.header, () => [Qe(l)])), h("div", {
      class: [`${B}-dialog__content`, y ? "" : `${B}-dialog__content--last`, this.contentClass],
      style: this.contentStyle
    }, Dt(this.$slots.default, () => [Qe(s)])), y);
  }
}), Wu = "n-dialog-provider", ju = "n-dialog-api", d1 = "n-dialog-reactive-list";
function c1(e) {
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
const f1 = {
  name: "Modal",
  common: Ve,
  peers: {
    Scrollbar: ia,
    Dialog: Lu,
    Card: Tu
  },
  self: c1
}, ca = Object.assign(Object.assign({}, sa), So), h1 = Kn(ca), p1 = Q({
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
  }, ca), {
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
    const n = N(null), r = N(null), o = N(e.show), i = N(null), a = N(null);
    ze(le(e, "show"), (b) => {
      b && (o.value = !0);
    }), zf(R(() => e.blockScroll && o.value));
    const l = xe(bs);
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
        offsetLeft: F,
        offsetTop: y
      } = b;
      if (x) {
        const A = x.y, T = x.x;
        i.value = -(F - T), a.value = -(y - A - B);
      }
      b.style.transformOrigin = s();
    }
    function d(b) {
      Et(() => {
        u(b);
      });
    }
    function c(b) {
      b.style.transformOrigin = s(), e.onBeforeLeave();
    }
    function f() {
      o.value = !1, i.value = null, a.value = null, e.onAfterLeave();
    }
    function v() {
      const {
        onClose: b
      } = e;
      b && b();
    }
    function m() {
      e.onNegativeClick();
    }
    function p() {
      e.onPositiveClick();
    }
    const g = N(null);
    return ze(g, (b) => {
      b && Et(() => {
        const x = b.el;
        x && n.value !== x && (n.value = x);
      });
    }), Fe(vo, n), Fe(xo, null), Fe(Pr, null), {
      mergedTheme: l.mergedThemeRef,
      appear: l.appearRef,
      isMounted: l.isMountedRef,
      mergedClsPrefix: l.mergedClsPrefixRef,
      bodyRef: n,
      scrollbarRef: r,
      displayed: o,
      childNodeRef: g,
      handlePositiveClick: p,
      handleNegativeClick: m,
      handleCloseClick: v,
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
      if (s = ti(e), !s) {
        Vt("modal", "default slot is empty");
        return;
      }
      s = Xl(s), s.props = an({
        class: `${l}-modal`
      }, n, s.props || {});
    }
    return this.displayDirective === "show" || this.displayed || this.show ? jt(h("div", {
      role: "none",
      class: `${l}-modal-body-wrapper`
    }, h(yo, {
      ref: "scrollbarRef",
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      contentClass: `${l}-modal-scroll-content`
    }, {
      default: () => {
        var u;
        return [(u = this.renderMask) === null || u === void 0 ? void 0 : u.call(this), h(Ms, {
          disabled: !this.trapFocus,
          active: this.show,
          onEsc: this.onEsc,
          autoFocus: this.autoFocus
        }, {
          default: () => {
            var d;
            return h(pt, {
              name: "fade-in-scale-up-transition",
              appear: (d = this.appear) !== null && d !== void 0 ? d : this.isMounted,
              onEnter: r,
              onAfterEnter: this.onAfterEnter,
              onAfterLeave: o,
              onBeforeLeave: i
            }, {
              default: () => {
                const c = [[fr, this.show]], {
                  onClickoutside: f
                } = this;
                return f && c.push([gr, this.onClickoutside, void 0, {
                  capture: !0
                }]), jt(this.preset === "confirm" || this.preset === "dialog" ? h(Hu, Object.assign({}, this.$attrs, {
                  class: [`${l}-modal`, this.$attrs.class],
                  ref: "bodyRef",
                  theme: this.mergedTheme.peers.Dialog,
                  themeOverrides: this.mergedTheme.peerOverrides.Dialog
                }, Cn(this.$props, Nu), {
                  "aria-modal": "true"
                }), e) : this.preset === "card" ? h(wb, Object.assign({}, this.$attrs, {
                  ref: "bodyRef",
                  class: [`${l}-modal`, this.$attrs.class],
                  theme: this.mergedTheme.peers.Card,
                  themeOverrides: this.mergedTheme.peerOverrides.Card
                }, Cn(this.$props, Cb), {
                  "aria-modal": "true",
                  role: "dialog"
                }), e) : this.childNodeRef = s, c);
              }
            });
          }
        })];
      }
    })), [[fr, this.displayDirective === "if" || this.displayed || this.show]]) : null;
  }
}), v1 = z([M("modal-container", `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), M("modal-mask", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [aa({
  enterDuration: ".25s",
  leaveDuration: ".25s",
  enterCubicBezier: "var(--n-bezier-ease-out)",
  leaveCubicBezier: "var(--n-bezier-ease-out)"
})]), M("modal-body-wrapper", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [M("modal-scroll-content", `
 min-height: 100%;
 display: flex;
 position: relative;
 `)]), M("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [wo({
  duration: ".25s",
  enterScale: ".5"
})])]), x1 = Object.assign(Object.assign(Object.assign(Object.assign({}, fe.props), {
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
}), ca), {
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
}), g1 = Q({
  name: "Modal",
  inheritAttrs: !1,
  props: x1,
  setup(e) {
    process.env.NODE_ENV !== "production" && (e.onHide && tt("modal", "`on-hide` is deprecated."), e.onAfterHide && tt("modal", "`on-after-hide` is deprecated, please use `on-after-leave` instead."), e.onBeforeHide && tt("modal", "`on-before-hide` is deprecated, please use `on-before-leave` instead."), e.overlayStyle && tt("modal", "`overlay-style` is deprecated, please use `style` instead."));
    const n = N(null), {
      mergedClsPrefixRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Te(e), a = fe("Modal", "-modal", v1, f1, e, r), l = gs(64), s = xs(), u = Dr(), d = e.internalDialog ? xe(Wu, null) : null, c = e.internalModal ? xe(Lc, null) : null, f = kf();
    function v(T) {
      const {
        onUpdateShow: C,
        "onUpdate:show": P,
        onHide: O
      } = e;
      C && he(C, T), P && he(P, T), O && !T && O(T);
    }
    function m() {
      const {
        onClose: T
      } = e;
      T ? Promise.resolve(T()).then((C) => {
        C !== !1 && v(!1);
      }) : v(!1);
    }
    function p() {
      const {
        onPositiveClick: T
      } = e;
      T ? Promise.resolve(T()).then((C) => {
        C !== !1 && v(!1);
      }) : v(!1);
    }
    function g() {
      const {
        onNegativeClick: T
      } = e;
      T ? Promise.resolve(T()).then((C) => {
        C !== !1 && v(!1);
      }) : v(!1);
    }
    function b() {
      const {
        onBeforeLeave: T,
        onBeforeHide: C
      } = e;
      T && he(T), C && C();
    }
    function x() {
      const {
        onAfterLeave: T,
        onAfterHide: C
      } = e;
      T && he(T), C && C();
    }
    function B(T) {
      var C;
      const {
        onMaskClick: P
      } = e;
      P && P(T), e.maskClosable && !((C = n.value) === null || C === void 0) && C.contains(qn(T)) && v(!1);
    }
    function F(T) {
      var C;
      (C = e.onEsc) === null || C === void 0 || C.call(e), e.show && e.closeOnEsc && Fc(T) && (f.value || v(!1));
    }
    Fe(bs, {
      getMousePosition: () => {
        const T = d || c;
        if (T) {
          const {
            clickedRef: C,
            clickedPositionRef: P
          } = T;
          if (C.value && P.value)
            return P.value;
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
          cubicBezierEaseOut: T
        },
        self: {
          boxShadow: C,
          color: P,
          textColor: O
        }
      } = a.value;
      return {
        "--n-bezier-ease-out": T,
        "--n-box-shadow": C,
        "--n-color": P,
        "--n-text-color": O
      };
    }), A = i ? je("theme-class", void 0, y, e) : void 0;
    return {
      mergedClsPrefix: r,
      namespace: o,
      isMounted: u,
      containerRef: n,
      presetProps: R(() => Cn(e, h1)),
      handleEsc: F,
      handleAfterLeave: x,
      handleClickoutside: B,
      handleBeforeLeave: b,
      doUpdateShow: v,
      handleNegativeClick: g,
      handlePositiveClick: p,
      handleCloseClick: m,
      cssVars: i ? void 0 : y,
      themeClass: A == null ? void 0 : A.themeClass,
      onRender: A == null ? void 0 : A.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return h(Ss, {
      to: this.to,
      show: this.show
    }, {
      default: () => {
        var n;
        (n = this.onRender) === null || n === void 0 || n.call(this);
        const {
          unstableShowMask: r
        } = this;
        return jt(h("div", {
          role: "none",
          ref: "containerRef",
          class: [`${e}-modal-container`, this.themeClass, this.namespace],
          style: this.cssVars
        }, h(p1, Object.assign({
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
            return h(pt, {
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
        }), this.$slots)), [[Ii, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
}), m1 = Object.assign(Object.assign({}, So), {
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
}), b1 = Q({
  name: "DialogEnvironment",
  props: Object.assign(Object.assign({}, m1), {
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
    const n = N(!0);
    function r() {
      const {
        onInternalAfterLeave: c,
        internalKey: f,
        onAfterLeave: v
      } = e;
      c && c(f), v && v();
    }
    function o(c) {
      const {
        onPositiveClick: f
      } = e;
      f ? Promise.resolve(f(c)).then((v) => {
        v !== !1 && u();
      }) : u();
    }
    function i(c) {
      const {
        onNegativeClick: f
      } = e;
      f ? Promise.resolve(f(c)).then((v) => {
        v !== !1 && u();
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
        maskClosable: v
      } = e;
      f && (f(c), v && u());
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
    return h(g1, {
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
      default: () => h(Hu, Object.assign({}, Cn(this.$props, Nu), {
        style: this.internalStyle,
        onClose: o,
        onNegativeClick: r,
        onPositiveClick: e
      }))
    });
  }
}), C1 = {
  injectionKey: String,
  to: [String, Object]
}, y1 = Q({
  name: "DialogProvider",
  props: C1,
  setup() {
    const e = N([]), n = {};
    function r(s = {}) {
      const u = pr(), d = Kl(Object.assign(Object.assign({}, s), {
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
    return Fe(ju, l), Fe(Wu, {
      clickedRef: gs(64),
      clickedPositionRef: xs()
    }), Fe(d1, e), Object.assign(Object.assign({}, l), {
      dialogList: e,
      dialogInstRefs: n,
      handleAfterLeave: i
    });
  },
  render() {
    var e, n;
    return h(xt, null, [this.dialogList.map((r) => h(b1, os(r, ["destroy", "style"], {
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
function w1() {
  const e = xe(ju, null);
  return e === null && ho("use-dialog", "No outer <n-dialog-provider /> founded."), e;
}
const B1 = {
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
function S1(e) {
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
  return Object.assign(Object.assign({}, B1), {
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
const Vu = {
  name: "Form",
  common: Ve,
  self: S1
}, F1 = M("form", [q("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [M("form-item", {
  width: "auto",
  marginRight: "18px"
}, [z("&:last-child", {
  marginRight: 0
})])])]), Rr = "n-form", qu = "n-form-item-insts";
var A1 = function(e, n, r, o) {
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
const $1 = Object.assign(Object.assign({}, fe.props), {
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
}), D1 = Q({
  name: "Form",
  props: $1,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Te(e);
    fe("Form", "-form", F1, Vu, e, n);
    const r = {}, o = N(void 0), i = (u) => {
      const d = o.value;
      (d === void 0 || u >= d) && (o.value = u);
    };
    function a(u) {
      return A1(this, arguments, void 0, function* (d, c = () => !0) {
        return yield new Promise((f, v) => {
          const m = [];
          for (const p of Kn(r)) {
            const g = r[p];
            for (const b of g)
              b.path && m.push(b.internalValidate(null, c));
          }
          Promise.all(m).then((p) => {
            const g = p.some((B) => !B.valid), b = [], x = [];
            p.forEach((B) => {
              var F, y;
              !((F = B.errors) === null || F === void 0) && F.length && b.push(B.errors), !((y = B.warnings) === null || y === void 0) && y.length && x.push(B.warnings);
            }), d && d(b.length ? b : void 0, {
              warnings: x.length ? x : void 0
            }), g ? v(b.length ? b : void 0) : f({
              warnings: x.length ? x : void 0
            });
          });
        });
      });
    }
    function l() {
      for (const u of Kn(r)) {
        const d = r[u];
        for (const c of d)
          c.restoreValidation();
      }
    }
    return Fe(Rr, {
      props: e,
      maxChildLabelWidthRef: o,
      deriveMaxChildLabelWidth: i
    }), Fe(qu, {
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
function P1(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, Fr(e, n);
}
function wi(e) {
  return wi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, wi(e);
}
function Fr(e, n) {
  return Fr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, Fr(e, n);
}
function E1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Jr(e, n, r) {
  return E1() ? Jr = Reflect.construct.bind() : Jr = function(i, a, l) {
    var s = [null];
    s.push.apply(s, a);
    var u = Function.bind.apply(i, s), d = new u();
    return l && Fr(d, l.prototype), d;
  }, Jr.apply(null, arguments);
}
function z1(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Bi(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Bi = function(o) {
    if (o === null || !z1(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof n < "u") {
      if (n.has(o)) return n.get(o);
      n.set(o, i);
    }
    function i() {
      return Jr(o, arguments, wi(this).constructor);
    }
    return i.prototype = Object.create(o.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Fr(i, o);
  }, Bi(e);
}
var k1 = /%[sdj%]/g, Ku = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Ku = function(n, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(o) {
    return typeof o == "string";
  }) && console.warn(n, r);
});
function Si(e) {
  if (!e || !e.length) return null;
  var n = {};
  return e.forEach(function(r) {
    var o = r.field;
    n[o] = n[o] || [], n[o].push(r);
  }), n;
}
function dt(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  var i = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var l = e.replace(k1, function(s) {
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
function T1(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Ue(e, n) {
  return !!(e == null || n === "array" && Array.isArray(e) && !e.length || T1(n) && typeof e == "string" && !e);
}
function R1(e, n, r) {
  var o = [], i = 0, a = e.length;
  function l(s) {
    o.push.apply(o, s || []), i++, i === a && r(o);
  }
  e.forEach(function(s) {
    n(s, l);
  });
}
function Il(e, n, r) {
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
function O1(e) {
  var n = [];
  return Object.keys(e).forEach(function(r) {
    n.push.apply(n, e[r] || []);
  }), n;
}
var _l = /* @__PURE__ */ function(e) {
  P1(n, e);
  function n(r, o) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = r, i.fields = o, i;
  }
  return n;
}(/* @__PURE__ */ Bi(Error));
function M1(e, n, r, o, i) {
  if (n.first) {
    var a = new Promise(function(v, m) {
      var p = function(x) {
        return o(x), x.length ? m(new _l(x, Si(x))) : v(i);
      }, g = O1(e);
      Il(g, r, p);
    });
    return a.catch(function(v) {
      return v;
    }), a;
  }
  var l = n.firstFields === !0 ? Object.keys(e) : n.firstFields || [], s = Object.keys(e), u = s.length, d = 0, c = [], f = new Promise(function(v, m) {
    var p = function(b) {
      if (c.push.apply(c, b), d++, d === u)
        return o(c), c.length ? m(new _l(c, Si(c))) : v(i);
    };
    s.length || (o(c), v(i)), s.forEach(function(g) {
      var b = e[g];
      l.indexOf(g) !== -1 ? Il(b, r, p) : R1(b, r, p);
    });
  });
  return f.catch(function(v) {
    return v;
  }), f;
}
function I1(e) {
  return !!(e && e.message !== void 0);
}
function _1(e, n) {
  for (var r = e, o = 0; o < n.length; o++) {
    if (r == null)
      return r;
    r = r[n[o]];
  }
  return r;
}
function Ll(e, n) {
  return function(r) {
    var o;
    return e.fullFields ? o = _1(n, e.fullFields) : o = n[r.field || e.fullField], I1(r) ? (r.field = r.field || e.fullField, r.fieldValue = o, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: o,
      field: r.field || e.fullField
    };
  };
}
function Nl(e, n) {
  if (n) {
    for (var r in n)
      if (n.hasOwnProperty(r)) {
        var o = n[r];
        typeof o == "object" && typeof e[r] == "object" ? e[r] = xn({}, e[r], o) : e[r] = o;
      }
  }
  return e;
}
var Uu = function(n, r, o, i, a, l) {
  n.required && (!o.hasOwnProperty(n.field) || Ue(r, l || n.type)) && i.push(dt(a.messages.required, n.fullField));
}, L1 = function(n, r, o, i, a) {
  (/^\s+$/.test(r) || r === "") && i.push(dt(a.messages.whitespace, n.fullField));
}, Xr, N1 = function() {
  if (Xr)
    return Xr;
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
  u.v4 = function(F) {
    return F && F.exact ? l : new RegExp("" + n(F) + r + n(F), "g");
  }, u.v6 = function(F) {
    return F && F.exact ? s : new RegExp("" + n(F) + i + n(F), "g");
  };
  var d = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", f = u.v4().source, v = u.v6().source, m = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", p = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", x = '(?:[/?#][^\\s"]*)?', B = "(?:" + d + "|www\\.)" + c + "(?:localhost|" + f + "|" + v + "|" + m + p + g + ")" + b + x;
  return Xr = new RegExp("(?:^" + B + "$)", "i"), Xr;
}, Hl = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, ir = {
  integer: function(n) {
    return ir.number(n) && parseInt(n, 10) === n;
  },
  float: function(n) {
    return ir.number(n) && !ir.integer(n);
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
    return typeof n == "object" && !ir.array(n);
  },
  method: function(n) {
    return typeof n == "function";
  },
  email: function(n) {
    return typeof n == "string" && n.length <= 320 && !!n.match(Hl.email);
  },
  url: function(n) {
    return typeof n == "string" && n.length <= 2048 && !!n.match(N1());
  },
  hex: function(n) {
    return typeof n == "string" && !!n.match(Hl.hex);
  }
}, H1 = function(n, r, o, i, a) {
  if (n.required && r === void 0) {
    Uu(n, r, o, i, a);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = n.type;
  l.indexOf(s) > -1 ? ir[s](r) || i.push(dt(a.messages.types[s], n.fullField, n.type)) : s && typeof r !== n.type && i.push(dt(a.messages.types[s], n.fullField, n.type));
}, W1 = function(n, r, o, i, a) {
  var l = typeof n.len == "number", s = typeof n.min == "number", u = typeof n.max == "number", d = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, f = null, v = typeof r == "number", m = typeof r == "string", p = Array.isArray(r);
  if (v ? f = "number" : m ? f = "string" : p && (f = "array"), !f)
    return !1;
  p && (c = r.length), m && (c = r.replace(d, "_").length), l ? c !== n.len && i.push(dt(a.messages[f].len, n.fullField, n.len)) : s && !u && c < n.min ? i.push(dt(a.messages[f].min, n.fullField, n.min)) : u && !s && c > n.max ? i.push(dt(a.messages[f].max, n.fullField, n.max)) : s && u && (c < n.min || c > n.max) && i.push(dt(a.messages[f].range, n.fullField, n.min, n.max));
}, In = "enum", j1 = function(n, r, o, i, a) {
  n[In] = Array.isArray(n[In]) ? n[In] : [], n[In].indexOf(r) === -1 && i.push(dt(a.messages[In], n.fullField, n[In].join(", ")));
}, V1 = function(n, r, o, i, a) {
  if (n.pattern) {
    if (n.pattern instanceof RegExp)
      n.pattern.lastIndex = 0, n.pattern.test(r) || i.push(dt(a.messages.pattern.mismatch, n.fullField, r, n.pattern));
    else if (typeof n.pattern == "string") {
      var l = new RegExp(n.pattern);
      l.test(r) || i.push(dt(a.messages.pattern.mismatch, n.fullField, r, n.pattern));
    }
  }
}, Ce = {
  required: Uu,
  whitespace: L1,
  type: H1,
  range: W1,
  enum: j1,
  pattern: V1
}, q1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r, "string") && !n.required)
      return o();
    Ce.required(n, r, i, l, a, "string"), Ue(r, "string") || (Ce.type(n, r, i, l, a), Ce.range(n, r, i, l, a), Ce.pattern(n, r, i, l, a), n.whitespace === !0 && Ce.whitespace(n, r, i, l, a));
  }
  o(l);
}, K1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && Ce.type(n, r, i, l, a);
  }
  o(l);
}, U1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (r === "" && (r = void 0), Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && (Ce.type(n, r, i, l, a), Ce.range(n, r, i, l, a));
  }
  o(l);
}, G1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && Ce.type(n, r, i, l, a);
  }
  o(l);
}, X1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), Ue(r) || Ce.type(n, r, i, l, a);
  }
  o(l);
}, Y1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && (Ce.type(n, r, i, l, a), Ce.range(n, r, i, l, a));
  }
  o(l);
}, Z1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && (Ce.type(n, r, i, l, a), Ce.range(n, r, i, l, a));
  }
  o(l);
}, J1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (r == null && !n.required)
      return o();
    Ce.required(n, r, i, l, a, "array"), r != null && (Ce.type(n, r, i, l, a), Ce.range(n, r, i, l, a));
  }
  o(l);
}, Q1 = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && Ce.type(n, r, i, l, a);
  }
  o(l);
}, eC = "enum", tC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a), r !== void 0 && Ce[eC](n, r, i, l, a);
  }
  o(l);
}, nC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r, "string") && !n.required)
      return o();
    Ce.required(n, r, i, l, a), Ue(r, "string") || Ce.pattern(n, r, i, l, a);
  }
  o(l);
}, rC = function(n, r, o, i, a) {
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
}, oC = function(n, r, o, i, a) {
  var l = [], s = Array.isArray(r) ? "array" : typeof r;
  Ce.required(n, r, i, l, a, s), o(l);
}, Zo = function(n, r, o, i, a) {
  var l = n.type, s = [], u = n.required || !n.required && i.hasOwnProperty(n.field);
  if (u) {
    if (Ue(r, l) && !n.required)
      return o();
    Ce.required(n, r, i, s, a, l), Ue(r, l) || Ce.type(n, r, i, s, a);
  }
  o(s);
}, iC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ue(r) && !n.required)
      return o();
    Ce.required(n, r, i, l, a);
  }
  o(l);
}, cr = {
  string: q1,
  method: K1,
  number: U1,
  boolean: G1,
  regexp: X1,
  integer: Y1,
  float: Z1,
  array: J1,
  object: Q1,
  enum: tC,
  pattern: nC,
  date: rC,
  url: Zo,
  hex: Zo,
  email: Zo,
  required: oC,
  any: iC
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
      var n = JSON.parse(JSON.stringify(this));
      return n.clone = this.clone, n;
    }
  };
}
var Ai = Fi(), Gn = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = Ai, this.define(r);
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
    return o && (this._messages = Nl(Fi(), o)), this._messages;
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
          var A;
          b = (A = b).concat.apply(A, y);
        } else
          b.push(y);
      }
      for (var F = 0; F < g.length; F++)
        B(g[F]);
      b.length ? (x = Si(b), d(b, x)) : d(null, s);
    }
    if (u.messages) {
      var f = this.messages();
      f === Ai && (f = Fi()), Nl(f, u.messages), u.messages = f;
    } else
      u.messages = this.messages();
    var v = {}, m = u.keys || Object.keys(this.rules);
    m.forEach(function(g) {
      var b = l.rules[g], x = s[g];
      b.forEach(function(B) {
        var F = B;
        typeof F.transform == "function" && (s === o && (s = xn({}, s)), x = s[g] = F.transform(x)), typeof F == "function" ? F = {
          validator: F
        } : F = xn({}, F), F.validator = l.getValidationMethod(F), F.validator && (F.field = g, F.fullField = F.fullField || g, F.type = l.getType(F), v[g] = v[g] || [], v[g].push({
          rule: F,
          value: x,
          source: s,
          field: g
        }));
      });
    });
    var p = {};
    return M1(v, u, function(g, b) {
      var x = g.rule, B = (x.type === "object" || x.type === "array") && (typeof x.fields == "object" || typeof x.defaultField == "object");
      B = B && (x.required || !x.required && g.value), x.field = g.field;
      function F(T, C) {
        return xn({}, C, {
          fullField: x.fullField + "." + T,
          fullFields: x.fullFields ? [].concat(x.fullFields, [T]) : [T]
        });
      }
      function y(T) {
        T === void 0 && (T = []);
        var C = Array.isArray(T) ? T : [T];
        !u.suppressWarning && C.length && e.warning("async-validator:", C), C.length && x.message !== void 0 && (C = [].concat(x.message));
        var P = C.map(Ll(x, s));
        if (u.first && P.length)
          return p[x.field] = 1, b(P);
        if (!B)
          b(P);
        else {
          if (x.required && !g.value)
            return x.message !== void 0 ? P = [].concat(x.message).map(Ll(x, s)) : u.error && (P = [u.error(x, dt(u.messages.required, x.field))]), b(P);
          var O = {};
          x.defaultField && Object.keys(g.value).map(function(H) {
            O[H] = x.defaultField;
          }), O = xn({}, O, g.rule.fields);
          var I = {};
          Object.keys(O).forEach(function(H) {
            var t = O[H], S = Array.isArray(t) ? t : [t];
            I[H] = S.map(F.bind(null, H));
          });
          var K = new e(I);
          K.messages(u.messages), g.rule.options && (g.rule.options.messages = u.messages, g.rule.options.error = u.error), K.validate(g.value, g.rule.options || u, function(H) {
            var t = [];
            P && P.length && t.push.apply(t, P), H && H.length && t.push.apply(t, H), b(t.length ? t : null);
          });
        }
      }
      var A;
      if (x.asyncValidator)
        A = x.asyncValidator(x, g.value, y, g.source, u);
      else if (x.validator) {
        try {
          A = x.validator(x, g.value, y, g.source, u);
        } catch (T) {
          console.error == null || console.error(T), u.suppressValidatorError || setTimeout(function() {
            throw T;
          }, 0), y(T.message);
        }
        A === !0 ? y() : A === !1 ? y(typeof x.message == "function" ? x.message(x.fullField || x.field) : x.message || (x.fullField || x.field) + " fails") : A instanceof Array ? y(A) : A instanceof Error && y(A.message);
      }
      A && A.then && A.then(function() {
        return y();
      }, function(T) {
        return y(T);
      });
    }, function(g) {
      c(g);
    }, s);
  }, n.getType = function(o) {
    if (o.type === void 0 && o.pattern instanceof RegExp && (o.type = "pattern"), typeof o.validator != "function" && o.type && !cr.hasOwnProperty(o.type))
      throw new Error(dt("Unknown rule type %s", o.type));
    return o.type || "string";
  }, n.getValidationMethod = function(o) {
    if (typeof o.validator == "function")
      return o.validator;
    var i = Object.keys(o), a = i.indexOf("message");
    return a !== -1 && i.splice(a, 1), i.length === 1 && i[0] === "required" ? cr.required : cr[this.getType(o)] || void 0;
  }, e;
}();
Gn.register = function(n, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  cr[n] = r;
};
Gn.warning = Ku;
Gn.messages = Ai;
Gn.validators = cr;
function aC(e) {
  const n = xe(Rr, null);
  return {
    mergedSize: R(() => e.size !== void 0 ? e.size : (n == null ? void 0 : n.props.size) !== void 0 ? n.props.size : "medium")
  };
}
function lC(e) {
  const n = xe(Rr, null), r = R(() => {
    const {
      labelPlacement: p
    } = e;
    return p !== void 0 ? p : n != null && n.props.labelPlacement ? n.props.labelPlacement : "top";
  }), o = R(() => r.value === "left" && (e.labelWidth === "auto" || (n == null ? void 0 : n.props.labelWidth) === "auto")), i = R(() => {
    if (r.value === "top") return;
    const {
      labelWidth: p
    } = e;
    if (p !== void 0 && p !== "auto")
      return Wt(p);
    if (o.value) {
      const g = n == null ? void 0 : n.maxChildLabelWidthRef.value;
      return g !== void 0 ? Wt(g) : void 0;
    }
    if ((n == null ? void 0 : n.props.labelWidth) !== void 0)
      return Wt(n.props.labelWidth);
  }), a = R(() => {
    const {
      labelAlign: p
    } = e;
    if (p) return p;
    if (n != null && n.props.labelAlign) return n.props.labelAlign;
  }), l = R(() => {
    var p;
    return [(p = e.labelProps) === null || p === void 0 ? void 0 : p.style, e.labelStyle, {
      width: i.value
    }];
  }), s = R(() => {
    const {
      showRequireMark: p
    } = e;
    return p !== void 0 ? p : n == null ? void 0 : n.props.showRequireMark;
  }), u = R(() => {
    const {
      requireMarkPlacement: p
    } = e;
    return p !== void 0 ? p : (n == null ? void 0 : n.props.requireMarkPlacement) || "right";
  }), d = N(!1), c = N(!1), f = R(() => {
    const {
      validationStatus: p
    } = e;
    if (p !== void 0) return p;
    if (d.value) return "error";
    if (c.value) return "warning";
  }), v = R(() => {
    const {
      showFeedback: p
    } = e;
    return p !== void 0 ? p : (n == null ? void 0 : n.props.showFeedback) !== void 0 ? n.props.showFeedback : !0;
  }), m = R(() => {
    const {
      showLabel: p
    } = e;
    return p !== void 0 ? p : (n == null ? void 0 : n.props.showLabel) !== void 0 ? n.props.showLabel : !0;
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
    mergedShowFeedback: v,
    mergedShowLabel: m,
    isAutoLabelWidth: o
  };
}
function sC(e) {
  const n = xe(Rr, null), r = R(() => {
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
        const c = ea(u, d);
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
  cubicBezierEaseInOut: Wl
} = sn;
function uC({
  name: e = "fade-down",
  fromOffset: n = "-4px",
  enterDuration: r = ".3s",
  leaveDuration: o = ".3s",
  enterCubicBezier: i = Wl,
  leaveCubicBezier: a = Wl
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
const dC = M("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [M("form-item-label", `
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
 `, [E("asterisk", `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `), E("asterisk-placeholder", `
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]), M("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), q("auto-label-width", [M("form-item-label", "white-space: nowrap;")]), q("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [M("form-item-label", `
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `, [q("reverse-columns-space", `
 grid-template-columns: auto 1fr;
 `), q("left-mark", `
 grid-template-areas:
 "mark text"
 ". text";
 `), q("right-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), q("right-hanging-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), E("text", `
 grid-area: text; 
 `), E("asterisk", `
 grid-area: mark; 
 align-self: end;
 `)])]), q("top-labelled", `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [q("no-label", `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), M("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), M("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), M("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [z("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), M("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [q("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), q("error", {
  color: "var(--n-feedback-text-color-error)"
}), uC({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
var jl = function(e, n, r, o) {
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
const cC = Object.assign(Object.assign({}, fe.props), {
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
function Vl(e, n) {
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
const fC = Q({
  name: "FormItem",
  props: cC,
  setup(e) {
    Ac(qu, "formItems", le(e, "path"));
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r
    } = Te(e), o = xe(Rr, null), i = aC(e), a = lC(e), {
      validationErrored: l,
      validationWarned: s
    } = a, {
      mergedRequired: u,
      mergedRules: d
    } = sC(e), {
      mergedSize: c
    } = i, {
      mergedLabelPlacement: f,
      mergedLabelAlign: v,
      mergedRequireMarkPlacement: m
    } = a, p = N([]), g = N(pr()), b = o ? le(o.props, "disabled") : N(!1), x = fe("Form", "-form-item", dC, Vu, e, n);
    ze(le(e, "path"), () => {
      e.ignorePathChange || B();
    });
    function B() {
      p.value = [], l.value = !1, s.value = !1, e.feedback && (g.value = pr());
    }
    const F = (...S) => jl(this, [...S], void 0, function* ($ = null, _ = () => !0, k = {
      suppressWarning: !0
    }) {
      const {
        path: j
      } = e;
      k ? k.first || (k.first = e.first) : k = {};
      const {
        value: J
      } = d, Z = o ? ea(o.props.model, j || "") : void 0, ae = {}, W = {}, X = ($ ? J.filter((me) => Array.isArray(me.trigger) ? me.trigger.includes($) : me.trigger === $) : J).filter(_).map((me, ye) => {
        const be = Object.assign({}, me);
        if (be.validator && (be.validator = Vl(be.validator, !1)), be.asyncValidator && (be.asyncValidator = Vl(be.asyncValidator, !0)), be.renderMessage) {
          const Ye = `__renderMessage__${ye}`;
          W[Ye] = be.message, be.message = Ye, ae[Ye] = be.renderMessage;
        }
        return be;
      }), ne = X.filter((me) => me.level !== "warning"), we = X.filter((me) => me.level === "warning"), re = {
        valid: !0,
        errors: void 0,
        warnings: void 0
      };
      if (!X.length) return re;
      const pe = j ?? "__n_no_path__", Me = new Gn({
        [pe]: ne
      }), ie = new Gn({
        [pe]: we
      }), {
        validateMessages: Ne
      } = (o == null ? void 0 : o.props) || {};
      Ne && (Me.messages(Ne), ie.messages(Ne));
      const ke = (me) => {
        p.value = me.map((ye) => {
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
            [pe]: Z
          }, k, ye);
        });
        me != null && me.length && (re.valid = !1, re.errors = me, ke(me));
      }
      if (we.length && !re.errors) {
        const me = yield new Promise((ye) => {
          ie.validate({
            [pe]: Z
          }, k, ye);
        });
        me != null && me.length && (ke(me), re.warnings = me);
      }
      return !re.errors && !re.warnings ? B() : (l.value = !!re.errors, s.value = !!re.warnings), re;
    });
    function y() {
      F("blur");
    }
    function A() {
      F("change");
    }
    function T() {
      F("focus");
    }
    function C() {
      F("input");
    }
    function P(S, $) {
      return jl(this, void 0, void 0, function* () {
        let _, k, j, J;
        return typeof S == "string" ? (_ = S, k = $) : S !== null && typeof S == "object" && (_ = S.trigger, k = S.callback, j = S.shouldRuleBeApplied, J = S.options), yield new Promise((Z, ae) => {
          F(_, j, J).then(({
            valid: W,
            errors: X,
            warnings: ne
          }) => {
            W ? (k && k(void 0, {
              warnings: ne
            }), Z({
              warnings: ne
            })) : (k && k(X, {
              warnings: ne
            }), ae(X));
          });
        });
      });
    }
    Fe(ui, {
      path: le(e, "path"),
      disabled: b,
      mergedSize: i.mergedSize,
      mergedValidationStatus: a.mergedValidationStatus,
      restoreValidation: B,
      handleContentBlur: y,
      handleContentChange: A,
      handleContentFocus: T,
      handleContentInput: C
    });
    const O = {
      validate: P,
      restoreValidation: B,
      internalValidate: F
    }, I = N(null);
    rt(() => {
      if (!a.isAutoLabelWidth.value) return;
      const S = I.value;
      if (S !== null) {
        const $ = S.style.whiteSpace;
        S.style.whiteSpace = "nowrap", S.style.width = "", o == null || o.deriveMaxChildLabelWidth(Number(getComputedStyle(S).width.slice(0, -2))), S.style.whiteSpace = $;
      }
    });
    const K = R(() => {
      var S;
      const {
        value: $
      } = c, {
        value: _
      } = f, k = _ === "top" ? "vertical" : "horizontal", {
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
          feedbackPadding: we,
          labelFontWeight: re,
          [Y("labelHeight", $)]: pe,
          [Y("blankHeight", $)]: Me,
          [Y("feedbackFontSize", $)]: ie,
          [Y("feedbackHeight", $)]: Ne,
          [Y("labelPadding", k)]: ke,
          [Y("labelTextAlign", k)]: me,
          [Y(Y("labelFontSize", _), $)]: ye
        }
      } = x.value;
      let be = (S = v.value) !== null && S !== void 0 ? S : me;
      return _ === "top" && (be = be === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": j,
        "--n-line-height": ae,
        "--n-blank-height": Me,
        "--n-label-font-size": ye,
        "--n-label-text-align": be,
        "--n-label-height": pe,
        "--n-label-padding": ke,
        "--n-label-font-weight": re,
        "--n-asterisk-color": Z,
        "--n-label-text-color": J,
        "--n-feedback-padding": we,
        "--n-feedback-font-size": ie,
        "--n-feedback-height": Ne,
        "--n-feedback-text-color": W,
        "--n-feedback-text-color-warning": X,
        "--n-feedback-text-color-error": ne
      };
    }), H = r ? je("form-item", R(() => {
      var S;
      return `${c.value[0]}${f.value[0]}${((S = v.value) === null || S === void 0 ? void 0 : S[0]) || ""}`;
    }), K, e) : void 0, t = R(() => f.value === "left" && m.value === "left" && v.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: I,
      mergedClsPrefix: n,
      mergedRequired: u,
      feedbackId: g,
      renderExplains: p,
      reverseColSpace: t
    }, a), i), O), {
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
    }, h(pt, {
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
          } = this, v = d || f ? h("div", {
            key: "__feedback__",
            class: `${n}-form-item-feedback__line`
          }, d || f) : this.renderExplains.length ? (c = this.renderExplains) === null || c === void 0 ? void 0 : c.map(({
            key: m,
            render: p
          }) => h("div", {
            key: m,
            class: `${n}-form-item-feedback__line`
          }, p())) : null;
          return v ? u === "warning" ? h("div", {
            key: "controlled-warning",
            class: `${n}-form-item-feedback ${n}-form-item-feedback--warning`
          }, v) : u === "error" ? h("div", {
            key: "controlled-error",
            class: `${n}-form-item-feedback ${n}-form-item-feedback--error`
          }, v) : u === "success" ? h("div", {
            key: "controlled-success",
            class: `${n}-form-item-feedback ${n}-form-item-feedback--success`
          }, v) : h("div", {
            key: "controlled-default",
            class: `${n}-form-item-feedback`
          }, v) : null;
        });
      }
    })) : null);
  }
}), hC = {
  iconSize: "22px"
};
function pC(e) {
  const {
    fontSize: n,
    warningColor: r
  } = e;
  return Object.assign(Object.assign({}, hC), {
    fontSize: n,
    iconColor: r
  });
}
const vC = {
  name: "Popconfirm",
  common: Ve,
  peers: {
    Button: la,
    Popover: zr
  },
  self: pC
};
function xC(e) {
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
const gC = {
  name: "Spin",
  common: Ve,
  self: xC
}, mC = {
  thPaddingSmall: "6px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "6px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px"
};
function bC(e) {
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
    fontSizeSmall: v,
    fontSizeMedium: m,
    fontSizeLarge: p
  } = e;
  return Object.assign(Object.assign({}, mC), {
    fontSizeSmall: v,
    fontSizeMedium: m,
    fontSizeLarge: p,
    lineHeight: f,
    borderRadius: d,
    borderColor: st(r, n),
    borderColorModal: st(o, n),
    borderColorPopover: st(i, n),
    tdColor: r,
    tdColorModal: o,
    tdColorPopover: i,
    tdColorStriped: st(r, l),
    tdColorStripedModal: st(o, l),
    tdColorStripedPopover: st(i, l),
    thColor: st(r, a),
    thColorModal: st(o, a),
    thColorPopover: st(i, a),
    thTextColor: s,
    tdTextColor: u,
    thFontWeight: c
  });
}
const CC = {
  name: "Table",
  common: Ve,
  self: bC
};
function yC(e) {
  const {
    primaryColor: n,
    baseColor: r
  } = e;
  return {
    color: n,
    iconColor: r
  };
}
const wC = {
  name: "IconWrapper",
  common: Ve,
  self: yC
}, BC = M("icon-wrapper", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`), SC = Object.assign(Object.assign({}, fe.props), {
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
}), FC = Q({
  name: "IconWrapper",
  props: SC,
  setup(e, {
    slots: n
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Te(e), i = fe("IconWrapper", "-icon-wrapper", BC, wC, e, r), a = R(() => {
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
      const s = Wt(e.size);
      return l == null || l.onRender(), h("div", {
        class: [`${r.value}-icon-wrapper`, l == null ? void 0 : l.themeClass.value],
        style: [a == null ? void 0 : a.value, {
          height: s,
          width: s,
          borderRadius: Wt(e.borderRadius),
          backgroundColor: e.color,
          color: e.iconColor
        }]
      }, n);
    };
  }
}), Gu = "n-popconfirm", Xu = {
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
}, ql = Kn(Xu), AC = Q({
  name: "NPopconfirmPanel",
  props: Xu,
  setup(e) {
    const {
      localeRef: n
    } = Br("Popconfirm"), {
      inlineThemeDisabled: r
    } = Te(), {
      mergedClsPrefixRef: o,
      mergedThemeRef: i,
      props: a
    } = xe(Gu), l = R(() => {
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
    return Object.assign(Object.assign({}, Br("Popconfirm")), {
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
    } = this, i = Dt(o.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && h(Sr, Object.assign({
      size: "small",
      onClick: this.handleNegativeClick
    }, this.negativeButtonProps), {
      default: () => this.localizedNegativeText
    }), this.positiveText !== null && h(Sr, Object.assign({
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
    }, Dt(o.icon, () => [h(zt, {
      clsPrefix: n
    }, {
      default: () => h(vu, null)
    })])) : null, a) : null), i ? h("div", {
      class: [`${n}-popconfirm__action`]
    }, i) : null);
  }
}), $C = M("popconfirm", [E("body", `
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `, [E("icon", `
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]), E("action", `
 display: flex;
 justify-content: flex-end;
 `, [z("&:not(:first-child)", "margin-top: 8px"), M("button", [z("&:not(:last-child)", "margin-right: 8px;")])])]), DC = Object.assign(Object.assign(Object.assign({}, fe.props), kr), {
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
}), PC = Q({
  name: "Popconfirm",
  props: DC,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Te(), r = fe("Popconfirm", "-popconfirm", $C, vC, e, n), o = N(null);
    function i(s) {
      var u;
      if (!(!((u = o.value) === null || u === void 0) && u.getMergedShow())) return;
      const {
        onPositiveClick: d,
        "onUpdate:show": c
      } = e;
      Promise.resolve(d ? d(s) : !0).then((f) => {
        var v;
        f !== !1 && ((v = o.value) === null || v === void 0 || v.setShow(!1), c && he(c, !1));
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
        var v;
        f !== !1 && ((v = o.value) === null || v === void 0 || v.setShow(!1), c && he(c, !1));
      });
    }
    return Fe(Gu, {
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
    return h(Tr, os(n, ql, {
      theme: r.peers.Popover,
      themeOverrides: r.peerOverrides.Popover,
      internalExtraClass: ["popconfirm"],
      ref: "popoverInstRef"
    }), {
      trigger: e.activator || e.trigger,
      default: () => {
        const o = Cn(n, ql);
        return h(AC, Object.assign(Object.assign({}, o), {
          onPositiveClick: this.handlePositiveClick,
          onNegativeClick: this.handleNegativeClick
        }), e);
      }
    });
  }
}), EC = z([z("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), M("spin-container", `
 position: relative;
 `, [M("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [aa()])]), M("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), M("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [q("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]), M("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), M("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [q("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]), zC = {
  small: 20,
  medium: 18,
  large: 16
}, kC = Object.assign(Object.assign({}, fe.props), {
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
}), TC = Q({
  name: "Spin",
  props: kC,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.spinning !== void 0 && tt("spin", "`spinning` is deprecated, please use `show` instead.");
    });
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r
    } = Te(e), o = fe("Spin", "-spin", EC, gC, e, n), i = R(() => {
      const {
        size: u
      } = e, {
        common: {
          cubicBezierEaseInOut: d
        },
        self: c
      } = o.value, {
        opacitySpinning: f,
        color: v,
        textColor: m
      } = c, p = typeof u == "number" ? _n(u) : c[Y("size", u)];
      return {
        "--n-bezier": d,
        "--n-opacity-spinning": f,
        "--n-size": p,
        "--n-color": v,
        "--n-text-color": m
      };
    }), a = r ? je("spin", R(() => {
      const {
        size: u
      } = e;
      return typeof u == "number" ? String(u) : u[0];
    }), i, e) : void 0, l = Ti(e, ["spinning", "show"]), s = N(!1);
    return nt((u) => {
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
        return zC[typeof d == "number" ? "medium" : d];
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
    }, h(Co, {
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
    }, r), h(pt, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? s : null
    })) : s;
  }
}), RC = z([M("table", `
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
 `)]), q("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `, [z("tr", [z("&:last-child", [z("td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]), q("single-line", [z("th", `
 border-right: 0px solid var(--n-merged-border-color);
 `), z("td", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), q("single-column", [z("tr", [z("&:not(:last-child)", [z("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]), q("striped", [z("tr:nth-of-type(even)", [z("td", "background-color: var(--n-td-color-striped)")])]), He("bottom-bordered", [z("tr", [z("&:last-child", [z("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]), Ei(M("table", `
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `, [z("th", `
 background-color: var(--n-th-color-modal);
 `), z("td", `
 background-color: var(--n-td-color-modal);
 `)])), cs(M("table", `
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `, [z("th", `
 background-color: var(--n-th-color-popover);
 `), z("td", `
 background-color: var(--n-td-color-popover);
 `)]))]), OC = Object.assign(Object.assign({}, fe.props), {
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
}), MC = Q({
  name: "Table",
  props: OC,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Te(e), i = fe("Table", "-table", RC, CC, e, n), a = yt("Table", o, n), l = R(() => {
      const {
        size: u
      } = e, {
        self: {
          borderColor: d,
          tdColor: c,
          tdColorModal: f,
          tdColorPopover: v,
          thColor: m,
          thColorModal: p,
          thColorPopover: g,
          thTextColor: b,
          tdTextColor: x,
          borderRadius: B,
          thFontWeight: F,
          lineHeight: y,
          borderColorModal: A,
          borderColorPopover: T,
          tdColorStriped: C,
          tdColorStripedModal: P,
          tdColorStripedPopover: O,
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
        "--n-td-color-popover": v,
        "--n-td-text-color": x,
        "--n-border-color": d,
        "--n-border-color-modal": A,
        "--n-border-color-popover": T,
        "--n-border-radius": B,
        "--n-font-size": I,
        "--n-th-color": m,
        "--n-th-color-modal": p,
        "--n-th-color-popover": g,
        "--n-th-font-weight": F,
        "--n-th-text-color": b,
        "--n-line-height": y,
        "--n-td-padding": K,
        "--n-th-padding": H,
        "--n-td-color-striped": C,
        "--n-td-color-striped-modal": P,
        "--n-td-color-striped-popover": O
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
}), IC = /* @__PURE__ */ Object.assign({
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
    return (r, o) => (ut(), bt(Se(kb), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: Se(ox),
      "date-locale": Se(mg),
      "theme-overrides": n
    }, {
      default: Ct(() => [
        fo(Se(y1), null, {
          default: Ct(() => [
            Vn(r.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["locale", "date-locale"]));
  }
});
function _C(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yu = { exports: {} };
(function(e) {
  function n() {
    var r = 0, o = 1, i = 2, a = 3, l = 4, s = 5, u = 6, d = 7, c = 8, f = 9, v = 10, m = 11, p = 12, g = 13, b = 14, x = 15, B = 16, F = 17, y = 0, A = 1, T = 2, C = 3, P = 4;
    function O(t, S) {
      return 55296 <= t.charCodeAt(S) && t.charCodeAt(S) <= 56319 && 56320 <= t.charCodeAt(S + 1) && t.charCodeAt(S + 1) <= 57343;
    }
    function I(t, S) {
      S === void 0 && (S = 0);
      var $ = t.charCodeAt(S);
      if (55296 <= $ && $ <= 56319 && S < t.length - 1) {
        var _ = $, k = t.charCodeAt(S + 1);
        return 56320 <= k && k <= 57343 ? (_ - 55296) * 1024 + (k - 56320) + 65536 : _;
      }
      if (56320 <= $ && $ <= 57343 && S >= 1) {
        var _ = t.charCodeAt(S - 1), k = $;
        return 55296 <= _ && _ <= 56319 ? (_ - 55296) * 1024 + (k - 56320) + 65536 : k;
      }
      return $;
    }
    function K(t, S, $) {
      var _ = [t].concat(S).concat([$]), k = _[_.length - 2], j = $, J = _.lastIndexOf(b);
      if (J > 1 && _.slice(1, J).every(function(W) {
        return W == a;
      }) && [a, g, F].indexOf(t) == -1)
        return T;
      var Z = _.lastIndexOf(l);
      if (Z > 0 && _.slice(1, Z).every(function(W) {
        return W == l;
      }) && [p, l].indexOf(k) == -1)
        return _.filter(function(W) {
          return W == l;
        }).length % 2 == 1 ? C : P;
      if (k == r && j == o)
        return y;
      if (k == i || k == r || k == o)
        return j == b && S.every(function(W) {
          return W == a;
        }) ? T : A;
      if (j == i || j == r || j == o)
        return A;
      if (k == u && (j == u || j == d || j == f || j == v))
        return y;
      if ((k == f || k == d) && (j == d || j == c))
        return y;
      if ((k == v || k == c) && j == c)
        return y;
      if (j == a || j == x)
        return y;
      if (j == s)
        return y;
      if (k == p)
        return y;
      var ae = _.indexOf(a) != -1 ? _.lastIndexOf(a) - 1 : _.length - 2;
      return [g, F].indexOf(_[ae]) != -1 && _.slice(ae + 1, -1).every(function(W) {
        return W == a;
      }) && j == b || k == x && [B, F].indexOf(j) != -1 ? y : S.indexOf(l) != -1 ? T : k == l && j == l ? y : A;
    }
    this.nextBreak = function(t, S) {
      if (S === void 0 && (S = 0), S < 0)
        return 0;
      if (S >= t.length - 1)
        return t.length;
      for (var $ = H(I(t, S)), _ = [], k = S + 1; k < t.length; k++)
        if (!O(t, k - 1)) {
          var j = H(I(t, k));
          if (K($, _, j))
            return k;
          _.push(j);
        }
      return t.length;
    }, this.splitGraphemes = function(t) {
      for (var S = [], $ = 0, _; (_ = this.nextBreak(t, $)) < t.length; )
        S.push(t.slice($, _)), $ = _;
      return $ < t.length && S.push(t.slice($)), S;
    }, this.iterateGraphemes = function(t) {
      var S = 0, $ = {
        next: (function() {
          var _, k;
          return (k = this.nextBreak(t, S)) < t.length ? (_ = t.slice(S, k), S = k, { value: _, done: !1 }) : S < t.length ? (_ = t.slice(S), S = t.length, { value: _, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && ($[Symbol.iterator] = function() {
        return $;
      }), $;
    }, this.countGraphemes = function(t) {
      for (var S = 0, $ = 0, _; (_ = this.nextBreak(t, $)) < t.length; )
        $ = _, S++;
      return $ < t.length && S++, S;
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
      t == 73030 ? p : t == 13 ? r : t == 10 ? o : 0 <= t && t <= 9 || // Cc  [10] <control-0000>..<control-0009>
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
      55177 <= t && t <= 55203 ? v : t == 9757 || // So       WHITE UP POINTING INDEX
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
      t == 128658 ? B : 128102 <= t && t <= 128105 ? F : m;
    }
    return this;
  }
  e.exports && (e.exports = n);
})(Yu);
var LC = Yu.exports;
const NC = /* @__PURE__ */ _C(LC), HC = new NC(), WC = (e = "") => HC.countGraphemes(e);
function jC(e) {
  return e && typeof e == "object" && typeof e.then == "function";
}
const Zu = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ Qr({
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
  emits: /* @__PURE__ */ Qr(["blur", "input"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = Yl(e, "modelValue"), o = n;
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
    return (s, u) => (ut(), bt(Se(ib), {
      "input-props": { autocomplete: "off" },
      type: e.type,
      size: e.size,
      "show-password-on": e.showPassword ? "click" : void 0,
      value: r.value,
      maxlength: e.maxlength,
      "show-count": e.showCount,
      "count-graphemes": e.maxlength != null && e.maxlength > 0 || e.showCount ? Se(WC) : void 0,
      placeholder: e.placeholder,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      onInput: l,
      onBlur: a
    }, Zl({ _: 2 }, [
      e.prefixIcon ? {
        name: "prefix",
        fn: Ct(() => [
          fo(Se(ua), Od(Md(e.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly"]));
  }
});
var ar = void 0, Wn = {}, $i;
Wn.throttle = $i = function(e, n, r, o) {
  var i, a = 0;
  typeof n != "boolean" && (o = r, r = n, n = ar);
  function l() {
    var s = this, u = +/* @__PURE__ */ new Date() - a, d = arguments;
    function c() {
      a = +/* @__PURE__ */ new Date(), r.apply(s, d);
    }
    function f() {
      i = ar;
    }
    o && !i && c(), i && clearTimeout(i), o === ar && u > e ? c() : n !== !0 && (i = setTimeout(o ? f : c, o === ar ? e - u : e));
  }
  return Wn.guid && (l.guid = r.guid = r.guid || Wn.guid++), l;
};
Wn.debounce = function(e, n, r) {
  return r === ar ? $i(e, n, !1) : $i(e, r, n !== !1);
};
const fa = function(e, n, r) {
  return Wn.debounce(n || 300, r ?? !0, e);
}, JC = function(e, n, r) {
  return Wn.throttle(n || 300, r ?? !1, e);
}, VC = /* @__PURE__ */ Object.assign({
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
      return e.model.forEach((v) => {
        v.slot || (f[v.field] = v.value);
      }), N(f);
    }();
    function i() {
      const f = {};
      return e.model.forEach((v) => {
        v.slot && (f[v.field] = Nd(v.value));
      }), { ...o.value, ...f };
    }
    const a = r, l = pa("form"), s = fa(function() {
      document.activeElement && document.activeElement.blur(), l.value.validate((f) => {
        a("submit", { formData: i(), valid: !f || f.length === 0, errors: f });
      }).catch(() => null);
    }), u = pa("formItem");
    function d(f = "") {
      if (!f) {
        l.value.restoreValidation();
        return;
      }
      const v = u.value.find((m) => m.path === f);
      v && v.restoreValidation();
    }
    function c(f) {
      f && e.rules && e.rules[f] && (e.rules[f].trigger && e.rules[f].trigger.includes("input") || d(f));
    }
    return n({ restoreValidation: d }), (f, v) => (ut(), bt(Se(D1), {
      ref: "form",
      "show-label": e.showLabel,
      "label-placement": e.labelPlacement,
      "label-width": "auto",
      "label-align": e.labelPlacement === "left" ? "right" : "left",
      model: Se(o),
      rules: e.rules,
      onSubmit: Id(Se(s), ["prevent"])
    }, {
      default: Ct(() => [
        (ut(!0), Jl(xt, null, _d(e.model, (m) => (ut(), bt(Se(fC), {
          ref_for: !0,
          ref: "formItem",
          key: m.field,
          label: m.label,
          path: m.field,
          "feedback-class": e.feedbackSizeClass ? `p-form-item-feedback-${e.feedbackSizeClass}` : "",
          first: !0
        }, {
          default: Ct(() => [
            !m.slot && m.type === "input" ? (ut(), bt(Ld(Se(Zu)), an({
              key: 0,
              modelValue: Se(o)[m.field],
              "onUpdate:modelValue": (p) => Se(o)[m.field] = p,
              ref_for: !0
            }, { disabled: e.disabled, readonly: e.readonly, ...m.props }, {
              onInput: (p) => c(m.field)
            }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : Vn(f.$slots, m.field, { key: 1 })
          ]),
          _: 2
        }, 1032, ["label", "path", "feedback-class"]))), 128)),
        Vn(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["show-label", "label-placement", "label-align", "model", "rules", "onSubmit"]));
  }
}), qC = /* @__PURE__ */ Object.assign({
  name: "PSelect",
  inheritAttrs: !1
}, {
  __name: "select",
  props: /* @__PURE__ */ Qr({
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
  emits: /* @__PURE__ */ Qr(["update", "change"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = Ql(), o = n, i = Yl(e, "modelValue"), a = fa(function(l) {
      l !== i.value && Et(() => {
        o("change", l);
      }), i.value = l, o("update", l);
    }, 300);
    return (l, s) => (ut(), bt(Se(Ib), {
      class: es(`${Se(r).class ? Se(r).class : ""}`),
      style: Hd(e.width ? `width:${e.width}` : ""),
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
      "onUpdate:value": Se(a)
    }, {
      empty: Ct(() => [
        fo(Se(wu), {
          size: "small",
          description: e.emptyDescription
        }, null, 8, ["description"])
      ]),
      _: 1
    }, 8, ["class", "style", "options", "value", "size", "placeholder", "disabled", "value-field", "label-field", "clearable", "show-checkmark", "onUpdate:value"]));
  }
}), Di = /* @__PURE__ */ Object.assign({
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
    const r = Ql(), o = Wd(), i = n, a = fa(function() {
      i("click");
    }, 300);
    return (l, s) => (ut(), bt(Se(Sr), {
      class: es(`${Se(r).class ? Se(r).class : ""}`),
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
      onClick: Se(a)
    }, Zl({
      default: Ct(() => [
        !e.loading || e.loading && !e.loadingWithoutText ? (ut(), bt(Se(o).default, { key: 0 })) : Jo("", !0)
      ]),
      _: 2
    }, [
      l.$slots.icon ? {
        name: "icon",
        fn: Ct(() => [
          fo(Se(o).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "attr-type", "block", "size", "type", "loading", "ghost", "secondary", "text", "disabled", "onClick"]));
  }
}), KC = /* @__PURE__ */ Object.assign({
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
    return (n, r) => (ut(), bt(Se(MC), {
      "bottom-bordered": e.bottomBordered,
      bordered: e.bordered,
      "single-column": e.singleColumn,
      "single-line": e.singleLine,
      size: e.size,
      striped: e.striped
    }, {
      default: Ct(() => [
        Vn(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["bottom-bordered", "bordered", "single-column", "single-line", "size", "striped"]));
  }
}), UC = ({ delay: e = 300, minPendingTime: n = 500, loadingValue: r = !1 } = {}) => {
  let o = 0, i = null;
  const a = () => {
    i && (clearTimeout(i), i = null);
  }, l = N(!!r), s = N(!!r);
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
          const v = (/* @__PURE__ */ new Date()).getTime() - o - e, m = v >= n ? 0 : n - v;
          i = setTimeout(() => {
            s.value = c, u && (u(), u = null);
          }, m);
        } else
          u && (u(), u = null);
        o = 0;
      }
    },
    { immediate: !!r, deep: !1 }
  ), ts(() => {
    u = null, a();
  }), { loading: s, waiting: l, doneLoading: d };
}, GC = {
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
    const { loading: n, waiting: r, doneLoading: o } = UC();
    function i(s, u) {
      const d = s({
        done: function() {
          return o().then(() => {
            e.onLoading(!1);
          });
        }
      });
      if (d !== !1)
        if (jC(d)) {
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
    return (s, u) => (ut(), Jl(xt, null, [
      e.negativeText ? (ut(), bt(Se(Di), {
        key: 0,
        size: "small",
        type: "default",
        disabled: Se(n),
        onClick: a
      }, {
        default: Ct(() => [
          jn(va(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["disabled"])) : Jo("", !0),
      e.positiveText ? (ut(), bt(Se(Di), {
        key: 1,
        size: "small",
        type: e.type,
        loading: Se(n),
        loadingWithoutText: !1,
        onClick: l
      }, {
        default: Ct(() => [
          jn(va(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type", "loading"])) : Jo("", !0)
    ], 64));
  }
};
function XC(e) {
  return typeof e == "string" ? function() {
    return h("p", { innerHTML: e });
  } : Array.isArray(e) ? function() {
    return h(
      "div",
      e.map((n) => h("p", { innerHTML: n }))
    );
  } : e;
}
const QC = () => {
  let e = null, n = null, r = null, o = null;
  const i = w1(), a = (d = {}, c = { width: 430 }, f) => {
    const v = {
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
    return v.closeOnEsc = !1, v.maskClosable = !1, v.showIcon = !0, v.iconPlacement = "left", v.style = "width: " + c.width + "px", f && (v.type = f), (v.positiveText || v.negativeText) && (v.action = function() {
      return h(GC, {
        positiveText: v.positiveText,
        negativeText: v.negativeText,
        type: f,
        onPositiveClick: v.onPositiveClick,
        onNegativeClick: v.onNegativeClick,
        onClose: function() {
          f === "success" && n ? (n.destroy(), n = null) : f === "warning" && r ? (r.destroy(), r = null) : f === "error" && o ? (o.destroy(), o = null) : e && (e.destroy(), e = null);
        },
        onLoading: (m) => {
          let p = null;
          f === "success" && n ? p = n : f === "warning" && r ? p = r : f === "error" && o ? p = o : e && (p = e), p.closable !== !1 && (p.class = m === !0 ? "p-dialog p-dialog-loading" : "p-dialog");
        }
      });
    }), v.content = XC(d.content), i.create(v);
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
  return ts(() => {
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
}, ey = {
  install: (e, n = {}) => {
    const { prefix: r = "p" } = n;
    e.component(`${r}-practical`, IC), e.component(`${r}-form`, VC), e.component(`${r}-input`, Zu), e.component(`${r}-select`, qC), e.component(`${r}-button`, Di), e.component(`${r}-table`, KC), e.component(`${r}-icon-wrapper`, FC), e.component(`${r}-icon`, ua), e.component(`${r}-input-group`, sb), e.component(`${r}-input-group-label`, cb), e.component(`${r}-popover`, Tr), e.component(`${r}-spin`, TC), e.component(`${r}-collapse`, $b), e.component(`${r}-collapse-item`, Eb), e.component(`${r}-dropdown`, i1), e.component(`${r}-popconfirm`, PC), e.component(`${r}-tooltip`, qb);
  }
};
export {
  fa as debounce,
  ey as default,
  JC as throttle,
  UC as useDelayLoading,
  QC as useDialog
};
