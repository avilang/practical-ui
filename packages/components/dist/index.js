import { createTextVNode as Za, Fragment as Bt, Comment as pi, isVNode as us, defineComponent as ee, inject as ce, getCurrentInstance as vn, watch as ze, onBeforeUnmount as Ue, ref as L, readonly as jn, computed as R, onMounted as ut, provide as Ge, withDirectives as mn, toRef as we, h as y, Teleport as fs, nextTick as nn, renderSlot as an, onActivated as ds, onDeactivated as cs, onBeforeMount as vi, shallowRef as xs, watchEffect as je, Transition as It, TransitionGroup as hs, mergeProps as gn, vShow as ps, cloneVNode as vs, Text as ms, markRaw as _i, openBlock as bt, createBlock as Rt, unref as ye, withCtx as Qt, useAttrs as gs, useSlots as bs, normalizeClass as Cs, createSlots as Ja, createCommentVNode as ys, createVNode as Qa, mergeModels as ki, useModel as Bs, normalizeProps as ws, guardReactiveProps as Ds, useTemplateRef as Ii, withModifiers as As, createElementBlock as Fs, renderList as Ss, resolveDynamicComponent as Es, toValue as $s, onScopeDispose as Ps } from "vue";
let on = [];
const eo = /* @__PURE__ */ new WeakMap();
function Ts() {
  on.forEach((t) => t(...eo.get(t))), on = [];
}
function zs(t, ...r) {
  eo.set(t, r), !on.includes(t) && on.push(t) === 1 && requestAnimationFrame(Ts);
}
function ln(t) {
  return t.composedPath()[0] || null;
}
function Hi(t) {
  return typeof t == "string" ? t.endsWith("px") ? Number(t.slice(0, t.length - 2)) : Number(t) : t;
}
function Os(t) {
  if (t != null)
    return typeof t == "number" ? `${t}px` : t.endsWith("px") ? t : `${t}px`;
}
function to(t, r) {
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
const Wi = {
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
}, nr = "^\\s*", ir = "\\s*$", Pt = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Tt = "([0-9A-Fa-f])", zt = "([0-9A-Fa-f]{2})", Ms = new RegExp(`${nr}rgb\\s*\\(${Pt},${Pt},${Pt}\\)${ir}`), Rs = new RegExp(`${nr}rgba\\s*\\(${Pt},${Pt},${Pt},${Pt}\\)${ir}`), _s = new RegExp(`${nr}#${Tt}${Tt}${Tt}${ir}`), ks = new RegExp(`${nr}#${zt}${zt}${zt}${ir}`), Is = new RegExp(`${nr}#${Tt}${Tt}${Tt}${Tt}${ir}`), Hs = new RegExp(`${nr}#${zt}${zt}${zt}${zt}${ir}`);
function Oe(t) {
  return parseInt(t, 16);
}
function Ht(t) {
  try {
    let r;
    if (r = ks.exec(t))
      return [Oe(r[1]), Oe(r[2]), Oe(r[3]), 1];
    if (r = Ms.exec(t))
      return [$e(r[1]), $e(r[5]), $e(r[9]), 1];
    if (r = Rs.exec(t))
      return [
        $e(r[1]),
        $e(r[5]),
        $e(r[9]),
        Cr(r[13])
      ];
    if (r = _s.exec(t))
      return [
        Oe(r[1] + r[1]),
        Oe(r[2] + r[2]),
        Oe(r[3] + r[3]),
        1
      ];
    if (r = Hs.exec(t))
      return [
        Oe(r[1]),
        Oe(r[2]),
        Oe(r[3]),
        Cr(Oe(r[4]) / 255)
      ];
    if (r = Is.exec(t))
      return [
        Oe(r[1] + r[1]),
        Oe(r[2] + r[2]),
        Oe(r[3] + r[3]),
        Cr(Oe(r[4] + r[4]) / 255)
      ];
    if (t in Wi)
      return Ht(Wi[t]);
    throw new Error(`[seemly/rgba]: Invalid color value ${t}.`);
  } catch (r) {
    throw r;
  }
}
function Ws(t) {
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Nn(t, r, n, i) {
  return `rgba(${$e(t)}, ${$e(r)}, ${$e(n)}, ${Ws(i)})`;
}
function $n(t, r, n, i, a) {
  return $e((t * r * (1 - i) + n * i) / a);
}
function Le(t, r) {
  Array.isArray(t) || (t = Ht(t)), Array.isArray(r) || (r = Ht(r));
  const n = t[3], i = r[3], a = Cr(n + i - n * i);
  return Nn($n(t[0], n, r[0], i, a), $n(t[1], n, r[1], i, a), $n(t[2], n, r[2], i, a), a);
}
function Ot(t, r) {
  const [n, i, a, o = 1] = Array.isArray(t) ? t : Ht(t);
  return r.alpha ? Nn(n, i, a, r.alpha) : Nn(n, i, a, o);
}
function jr(t, r) {
  const [n, i, a, o = 1] = Array.isArray(t) ? t : Ht(t), { lightness: l = 1, alpha: s = 1 } = r;
  return Ls([n * l, i * l, a * l, o * s]);
}
function Cr(t) {
  const r = Math.round(Number(t) * 100) / 100;
  return r > 1 ? 1 : r < 0 ? 0 : r;
}
function $e(t) {
  const r = Math.round(Number(t));
  return r > 255 ? 255 : r < 0 ? 0 : r;
}
function Ls(t) {
  const [r, n, i] = t;
  return 3 in t ? `rgba(${$e(r)}, ${$e(n)}, ${$e(i)}, ${Cr(t[3])})` : `rgba(${$e(r)}, ${$e(n)}, ${$e(i)}, 1)`;
}
function Vn(t = 8) {
  return Math.random().toString(16).slice(2, 2 + t);
}
function js(t, r = [], n) {
  const i = {};
  return r.forEach((a) => {
    i[a] = t[a];
  }), Object.assign(i, n);
}
function qn(t, r = !0, n = []) {
  return t.forEach((i) => {
    if (i !== null) {
      if (typeof i != "object") {
        (typeof i == "string" || typeof i == "number") && n.push(Za(String(i)));
        return;
      }
      if (Array.isArray(i)) {
        qn(i, r, n);
        return;
      }
      if (i.type === Bt) {
        if (i.children === null) return;
        Array.isArray(i.children) && qn(i.children, r, n);
      } else {
        if (i.type === pi && r) return;
        n.push(i);
      }
    }
  }), n;
}
function ve(t, ...r) {
  if (Array.isArray(t))
    t.forEach((n) => ve(n, ...r));
  else
    return t(...r);
}
function Li(t) {
  return Object.keys(t);
}
const ji = /* @__PURE__ */ new Set();
function gt(t, r) {
  const n = `[naive/${t}]: ${r}`;
  ji.has(n) || (ji.add(n), console.error(n));
}
function er(t, r) {
  console.error(`[naive/${t}]: ${r}`);
}
function ro(t, r) {
  throw new Error(`[naive/${t}]: ${r}`);
}
function Ni(t, r = "default", n = void 0) {
  const i = t[r];
  if (!i)
    return er("getFirstSlotVNode", `slot[${r}] is empty`), null;
  const a = qn(i(n));
  return a.length === 1 ? a[0] : (er("getFirstSlotVNode", `slot[${r}] should have exactly one child`), null);
}
function zr(t) {
  return t.some((r) => us(r) ? !(r.type === pi || r.type === Bt && !zr(r.children)) : !0) ? t : null;
}
function yr(t, r) {
  return t && zr(t()) || r();
}
function Ns(t, r, n) {
  return t && zr(t(r)) || n(r);
}
function Qe(t, r) {
  const n = t && zr(t());
  return r(n || null);
}
function Gn(t) {
  return !(t && zr(t()));
}
const Vi = ee({
  render() {
    var t, r;
    return (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t);
  }
}), Vs = /^(\d|\.)+$/, qi = /(\d|\.)+/;
function lt(t, {
  c: r = 1,
  offset: n = 0,
  attachPx: i = !0
} = {}) {
  if (typeof t == "number") {
    const a = (t + n) * r;
    return a === 0 ? "0" : `${a}px`;
  } else if (typeof t == "string")
    if (Vs.test(t)) {
      const a = (Number(t) + n) * r;
      return i ? a === 0 ? "0" : `${a}px` : `${a}`;
    } else {
      const a = qi.exec(t);
      return a ? t.replace(qi, String((Number(a[0]) + n) * r)) : t;
    }
  return t;
}
function Gi(t) {
  return t.replace(/#|\(|\)|,|\s|\./g, "_");
}
function Ui(t) {
  const {
    left: r,
    right: n,
    top: i,
    bottom: a
  } = to(t);
  return `${i} ${n} ${a} ${r}`;
}
function qs(t) {
  let r = 0;
  for (let n = 0; n < t.length; ++n)
    t[n] === "&" && ++r;
  return r;
}
const no = /\s*,(?![^(]*\))\s*/g, Gs = /\s+/g;
function Us(t, r) {
  const n = [];
  return r.split(no).forEach((i) => {
    let a = qs(i);
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
function Xs(t, r) {
  const n = [];
  return r.split(no).forEach((i) => {
    t.forEach((a) => {
      n.push((a && a + " ") + i);
    });
  }), n;
}
function Ys(t) {
  let r = [""];
  return t.forEach((n) => {
    n = n && n.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    n && (n.includes("&") ? r = Us(r, n) : r = Xs(r, n));
  }), r.join(", ").replace(Gs, " ");
}
function Xi(t) {
  if (!t)
    return;
  const r = t.parentElement;
  r && r.removeChild(t);
}
function bn(t, r) {
  return (r ?? document.head).querySelector(`style[cssr-id="${t}"]`);
}
function Ks(t) {
  const r = document.createElement("style");
  return r.setAttribute("cssr-id", t), r;
}
function Nr(t) {
  return t ? /^\s*@(s|m)/.test(t) : !1;
}
const Zs = /[A-Z]/g;
function io(t) {
  return t.replace(Zs, (r) => "-" + r.toLowerCase());
}
function Js(t, r = "  ") {
  return typeof t == "object" && t !== null ? ` {
` + Object.entries(t).map((n) => r + `  ${io(n[0])}: ${n[1]};`).join(`
`) + `
` + r + "}" : `: ${t};`;
}
function Qs(t, r, n) {
  return typeof t == "function" ? t({
    context: r.context,
    props: n
  }) : t;
}
function Yi(t, r, n, i) {
  if (!r)
    return "";
  const a = Qs(r, n, i);
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
    s = io(s), u != null && l.push(`  ${s}${Js(u)}`);
  }), t && l.push("}"), l.join(`
`);
}
function Un(t, r, n) {
  t && t.forEach((i) => {
    if (Array.isArray(i))
      Un(i, r, n);
    else if (typeof i == "function") {
      const a = i(r);
      Array.isArray(a) ? Un(a, r, n) : a && n(a);
    } else i && n(i);
  });
}
function ao(t, r, n, i, a) {
  const o = t.$;
  let l = "";
  if (!o || typeof o == "string")
    Nr(o) ? l = o : r.push(o);
  else if (typeof o == "function") {
    const f = o({
      context: i.context,
      props: a
    });
    Nr(f) ? l = f : r.push(f);
  } else if (o.before && o.before(i.context), !o.$ || typeof o.$ == "string")
    Nr(o.$) ? l = o.$ : r.push(o.$);
  else if (o.$) {
    const f = o.$({
      context: i.context,
      props: a
    });
    Nr(f) ? l = f : r.push(f);
  }
  const s = Ys(r), u = Yi(s, t.props, i, a);
  l ? n.push(`${l} {`) : u.length && n.push(u), t.children && Un(t.children, {
    context: i.context,
    props: a
  }, (f) => {
    if (typeof f == "string") {
      const d = Yi(s, { raw: f }, i, a);
      n.push(d);
    } else
      ao(f, r, n, i, a);
  }), r.pop(), l && n.push("}"), o && o.after && o.after(i.context);
}
function eu(t, r, n) {
  const i = [];
  return ao(t, [], i, r, n), i.join(`

`);
}
function Fr(t) {
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
function tu(t, r, n, i) {
  const { els: a } = r;
  if (n === void 0)
    a.forEach(Xi), r.els = [];
  else {
    const o = bn(n, i);
    o && a.includes(o) && (Xi(o), r.els = a.filter((l) => l !== o));
  }
}
function Ki(t, r) {
  t.push(r);
}
function ru(t, r, n, i, a, o, l, s, u) {
  let f;
  if (n === void 0 && (f = r.render(i), n = Fr(f)), u) {
    u.adapter(n, f ?? r.render(i));
    return;
  }
  s === void 0 && (s = document.head);
  const d = bn(n, s);
  if (d !== null && !o)
    return d;
  const x = d ?? Ks(n);
  if (f === void 0 && (f = r.render(i)), x.textContent = f, d !== null)
    return d;
  if (l) {
    const m = s.querySelector(`meta[name="${l}"]`);
    if (m)
      return s.insertBefore(x, m), Ki(r.els, x), x;
  }
  return a ? s.insertBefore(x, s.querySelector("style, link")) : s.appendChild(x), Ki(r.els, x), x;
}
function nu(t) {
  return eu(this, this.instance, t);
}
function iu(t = {}) {
  const { id: r, ssr: n, props: i, head: a = !1, force: o = !1, anchorMetaName: l, parent: s } = t;
  return ru(this.instance, this, r, i, a, o, l, s, n);
}
function au(t = {}) {
  const { id: r, parent: n } = t;
  tu(this.instance, this, r, n);
}
const Vr = function(t, r, n, i) {
  return {
    instance: t,
    $: r,
    props: n,
    children: i,
    els: [],
    render: nu,
    mount: iu,
    unmount: au
  };
}, ou = function(t, r, n, i) {
  return Array.isArray(r) ? Vr(t, { $: null }, null, r) : Array.isArray(n) ? Vr(t, r, null, n) : Array.isArray(i) ? Vr(t, r, n, i) : Vr(t, r, n, null);
};
function oo(t = {}) {
  const r = {
    c: (...n) => ou(r, ...n),
    use: (n, ...i) => n.install(r, ...i),
    find: bn,
    context: {},
    config: t
  };
  return r;
}
function lu(t, r) {
  if (t === void 0)
    return !1;
  if (r) {
    const { context: { ids: n } } = r;
    return n.has(t);
  }
  return bn(t) !== null;
}
function su(t) {
  let r = ".", n = "__", i = "--", a;
  if (t) {
    let h = t.blockPrefix;
    h && (r = h), h = t.elementPrefix, h && (n = h), h = t.modifierPrefix, h && (i = h);
  }
  const o = {
    install(h) {
      a = h.c;
      const p = h.context;
      p.bem = {}, p.bem.b = null, p.bem.els = null;
    }
  };
  function l(h) {
    let p, b;
    return {
      before(c) {
        p = c.bem.b, b = c.bem.els, c.bem.els = null;
      },
      after(c) {
        c.bem.b = p, c.bem.els = b;
      },
      $({ context: c, props: D }) {
        return h = typeof h == "string" ? h : h({ context: c, props: D }), c.bem.b = h, `${(D == null ? void 0 : D.bPrefix) || r}${c.bem.b}`;
      }
    };
  }
  function s(h) {
    let p;
    return {
      before(b) {
        p = b.bem.els;
      },
      after(b) {
        b.bem.els = p;
      },
      $({ context: b, props: c }) {
        return h = typeof h == "string" ? h : h({ context: b, props: c }), b.bem.els = h.split(",").map((D) => D.trim()), b.bem.els.map((D) => `${(c == null ? void 0 : c.bPrefix) || r}${b.bem.b}${n}${D}`).join(", ");
      }
    };
  }
  function u(h) {
    return {
      $({ context: p, props: b }) {
        h = typeof h == "string" ? h : h({ context: p, props: b });
        const c = h.split(",").map((w) => w.trim());
        function D(w) {
          return c.map((_) => `&${(b == null ? void 0 : b.bPrefix) || r}${p.bem.b}${w !== void 0 ? `${n}${w}` : ""}${i}${_}`).join(", ");
        }
        const F = p.bem.els;
        if (F !== null) {
          if (process.env.NODE_ENV !== "production" && F.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${h}) is invalid, using modifier inside multiple elements is not allowed`);
          return D(F[0]);
        } else
          return D();
      }
    };
  }
  function f(h) {
    return {
      $({ context: p, props: b }) {
        h = typeof h == "string" ? h : h({ context: p, props: b });
        const c = p.bem.els;
        if (process.env.NODE_ENV !== "production" && c !== null && c.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${h}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(b == null ? void 0 : b.bPrefix) || r}${p.bem.b}${c !== null && c.length > 0 ? `${n}${c[0]}` : ""}${i}${h})`;
      }
    };
  }
  return Object.assign(o, {
    cB: (...h) => a(l(h[0]), h[1], h[2]),
    cE: (...h) => a(s(h[0]), h[1], h[2]),
    cM: (...h) => a(u(h[0]), h[1], h[2]),
    cNotM: (...h) => a(f(h[0]), h[1], h[2])
  }), o;
}
const uu = "n", sn = `.${uu}-`, fu = "__", du = "--", lo = oo(), so = su({
  blockPrefix: sn,
  elementPrefix: fu,
  modifierPrefix: du
});
lo.use(so);
const {
  c: $,
  find: Mm
} = lo, {
  cB: H,
  cE: k,
  cM: X,
  cNotM: qe
} = so;
function cu(t) {
  return $(({
    props: {
      bPrefix: r
    }
  }) => `${r || sn}modal, ${r || sn}drawer`, [t]);
}
function xu(t) {
  return $(({
    props: {
      bPrefix: r
    }
  }) => `${r || sn}popover`, [t]);
}
const hu = (...t) => $(">", [H(...t)]);
function G(t, r) {
  return t + (r === "default" ? "" : r.replace(/^[a-z]/, (n) => n.toUpperCase()));
}
let Pn;
function pu() {
  return Pn === void 0 && (Pn = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Pn;
}
const Cn = typeof document < "u" && typeof window < "u";
function vu(t, r, n) {
  var i;
  const a = ce(t, null);
  if (a === null) return;
  const o = (i = vn()) === null || i === void 0 ? void 0 : i.proxy;
  ze(n, l), l(n.value), Ue(() => {
    l(void 0, n.value);
  });
  function l(f, d) {
    if (!a) return;
    const x = a[r];
    d !== void 0 && s(x, d), f !== void 0 && u(x, f);
  }
  function s(f, d) {
    f[d] || (f[d] = []), f[d].splice(f[d].findIndex((x) => x === o), 1);
  }
  function u(f, d) {
    f[d] || (f[d] = []), ~f[d].findIndex((x) => x === o) || f[d].push(o);
  }
}
function mu(t) {
  const r = L(!!t.value);
  if (r.value)
    return jn(r);
  const n = ze(t, (i) => {
    i && (r.value = !0, n());
  });
  return jn(r);
}
function tt(t) {
  const r = R(t), n = L(r.value);
  return ze(r, (i) => {
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
const gu = typeof window < "u";
let Yt, Br;
const bu = () => {
  var t, r;
  Yt = gu ? (r = (t = document) === null || t === void 0 ? void 0 : t.fonts) === null || r === void 0 ? void 0 : r.ready : void 0, Br = !1, Yt !== void 0 ? Yt.then(() => {
    Br = !0;
  }) : Br = !0;
};
bu();
function Cu(t) {
  if (Br)
    return;
  let r = !1;
  ut(() => {
    Br || Yt == null || Yt.then(() => {
      r || t();
    });
  }), Ue(() => {
    r = !0;
  });
}
function en(t) {
  return t.composedPath()[0];
}
const yu = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Bu(t, r, n) {
  if (t === "mousemoveoutside") {
    const i = (a) => {
      r.contains(en(a)) || n(a);
    };
    return {
      mousemove: i,
      touchstart: i
    };
  } else if (t === "clickoutside") {
    let i = !1;
    const a = (l) => {
      i = !r.contains(en(l));
    }, o = (l) => {
      i && (r.contains(en(l)) || n(l));
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
function uo(t, r, n) {
  const i = yu[t];
  let a = i.get(r);
  a === void 0 && i.set(r, a = /* @__PURE__ */ new WeakMap());
  let o = a.get(n);
  return o === void 0 && a.set(n, o = Bu(t, r, n)), o;
}
function wu(t, r, n, i) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const a = uo(t, r, n);
    return Object.keys(a).forEach((o) => {
      Ae(o, document, a[o], i);
    }), !0;
  }
  return !1;
}
function Du(t, r, n, i) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const a = uo(t, r, n);
    return Object.keys(a).forEach((o) => {
      ge(o, document, a[o], i);
    }), !0;
  }
  return !1;
}
function Au() {
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
  function a(v, B, T) {
    const O = v[B];
    return v[B] = function() {
      return T.apply(v, arguments), O.apply(v, arguments);
    }, v;
  }
  function o(v, B) {
    v[B] = Event.prototype[B];
  }
  const l = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function u() {
    var v;
    return (v = l.get(this)) !== null && v !== void 0 ? v : null;
  }
  function f(v, B) {
    s !== void 0 && Object.defineProperty(v, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: B ?? s.get
    });
  }
  const d = {
    bubble: {},
    capture: {}
  }, x = {};
  function m() {
    const v = function(B) {
      const { type: T, eventPhase: O, bubbles: N } = B, W = en(B);
      if (O === 2)
        return;
      const e = O === 1 ? "capture" : "bubble";
      let E = W;
      const A = [];
      for (; E === null && (E = window), A.push(E), E !== window; )
        E = E.parentNode || null;
      const z = d.capture[T], P = d.bubble[T];
      if (a(B, "stopPropagation", n), a(B, "stopImmediatePropagation", i), f(B, u), e === "capture") {
        if (z === void 0)
          return;
        for (let V = A.length - 1; V >= 0 && !t.has(B); --V) {
          const te = A[V], J = z.get(te);
          if (J !== void 0) {
            l.set(B, te);
            for (const xe of J) {
              if (r.has(B))
                break;
              xe(B);
            }
          }
          if (V === 0 && !N && P !== void 0) {
            const xe = P.get(te);
            if (xe !== void 0)
              for (const oe of xe) {
                if (r.has(B))
                  break;
                oe(B);
              }
          }
        }
      } else if (e === "bubble") {
        if (P === void 0)
          return;
        for (let V = 0; V < A.length && !t.has(B); ++V) {
          const te = A[V], J = P.get(te);
          if (J !== void 0) {
            l.set(B, te);
            for (const xe of J) {
              if (r.has(B))
                break;
              xe(B);
            }
          }
        }
      }
      o(B, "stopPropagation"), o(B, "stopImmediatePropagation"), f(B);
    };
    return v.displayName = "evtdUnifiedHandler", v;
  }
  function C() {
    const v = function(B) {
      const { type: T, eventPhase: O } = B;
      if (O !== 2)
        return;
      const N = x[T];
      N !== void 0 && N.forEach((W) => W(B));
    };
    return v.displayName = "evtdUnifiedWindowEventHandler", v;
  }
  const h = m(), p = C();
  function b(v, B) {
    const T = d[v];
    return T[B] === void 0 && (T[B] = /* @__PURE__ */ new Map(), window.addEventListener(B, h, v === "capture")), T[B];
  }
  function c(v) {
    return x[v] === void 0 && (x[v] = /* @__PURE__ */ new Set(), window.addEventListener(v, p)), x[v];
  }
  function D(v, B) {
    let T = v.get(B);
    return T === void 0 && v.set(B, T = /* @__PURE__ */ new Set()), T;
  }
  function F(v, B, T, O) {
    const N = d[B][T];
    if (N !== void 0) {
      const W = N.get(v);
      if (W !== void 0 && W.has(O))
        return !0;
    }
    return !1;
  }
  function w(v, B) {
    const T = x[v];
    return !!(T !== void 0 && T.has(B));
  }
  function _(v, B, T, O) {
    let N;
    if (typeof O == "object" && O.once === !0 ? N = (z) => {
      I(v, B, N, O), T(z);
    } : N = T, wu(v, B, N, O))
      return;
    const e = O === !0 || typeof O == "object" && O.capture === !0 ? "capture" : "bubble", E = b(e, v), A = D(E, B);
    if (A.has(N) || A.add(N), B === window) {
      const z = c(v);
      z.has(N) || z.add(N);
    }
  }
  function I(v, B, T, O) {
    if (Du(v, B, T, O))
      return;
    const W = O === !0 || typeof O == "object" && O.capture === !0, e = W ? "capture" : "bubble", E = b(e, v), A = D(E, B);
    if (B === window && !F(B, W ? "bubble" : "capture", v, T) && w(v, T)) {
      const P = x[v];
      P.delete(T), P.size === 0 && (window.removeEventListener(v, p), x[v] = void 0);
    }
    A.has(T) && A.delete(T), A.size === 0 && E.delete(B), E.size === 0 && (window.removeEventListener(v, h, e === "capture"), d[e][v] = void 0);
  }
  return {
    on: _,
    off: I
  };
}
const { on: Ae, off: ge } = Au();
function fo(t, r) {
  return ze(t, (n) => {
    n !== void 0 && (r.value = n);
  }), R(() => t.value === void 0 ? r.value : t.value);
}
function mi() {
  const t = L(!1);
  return ut(() => {
    t.value = !0;
  }), jn(t);
}
function co(t, r) {
  return R(() => {
    for (const n of r)
      if (t[n] !== void 0)
        return t[n];
    return t[r[r.length - 1]];
  });
}
const Fu = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Su() {
  return Fu;
}
const Eu = "n-internal-select-menu-body", xo = "n-modal-body", ho = "n-drawer-body", po = "n-popover-body", vo = "__disabled__";
function tr(t) {
  const r = ce(xo, null), n = ce(ho, null), i = ce(po, null), a = ce(Eu, null), o = L();
  if (typeof document < "u") {
    o.value = document.fullscreenElement;
    const l = () => {
      o.value = document.fullscreenElement;
    };
    ut(() => {
      Ae("fullscreenchange", document, l);
    }), Ue(() => {
      ge("fullscreenchange", document, l);
    });
  }
  return tt(() => {
    var l;
    const {
      to: s
    } = t;
    return s !== void 0 ? s === !1 ? vo : s === !0 ? o.value || "body" : s : r != null && r.value ? (l = r.value.$el) !== null && l !== void 0 ? l : r.value : n != null && n.value ? n.value : i != null && i.value ? i.value : a != null && a.value ? a.value : s ?? (o.value || "body");
  });
}
tr.tdkey = vo;
tr.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function Xn(t, r, n = "default") {
  const i = r[n];
  if (i === void 0)
    throw new Error(`[vueuc/${t}]: slot[${n}] is empty.`);
  return i();
}
function Yn(t, r = !0, n = []) {
  return t.forEach((i) => {
    if (i !== null) {
      if (typeof i != "object") {
        (typeof i == "string" || typeof i == "number") && n.push(Za(String(i)));
        return;
      }
      if (Array.isArray(i)) {
        Yn(i, r, n);
        return;
      }
      if (i.type === Bt) {
        if (i.children === null)
          return;
        Array.isArray(i.children) && Yn(i.children, r, n);
      } else i.type !== pi && n.push(i);
    }
  }), n;
}
function Zi(t, r, n = "default") {
  const i = r[n];
  if (i === void 0)
    throw new Error(`[vueuc/${t}]: slot[${n}] is empty.`);
  const a = Yn(i());
  if (a.length === 1)
    return a[0];
  throw new Error(`[vueuc/${t}]: slot[${n}] should have exactly one child.`);
}
let pt = null;
function mo() {
  if (pt === null && (pt = document.getElementById("v-binder-view-measurer"), pt === null)) {
    pt = document.createElement("div"), pt.id = "v-binder-view-measurer";
    const { style: t } = pt;
    t.position = "fixed", t.left = "0", t.right = "0", t.top = "0", t.bottom = "0", t.pointerEvents = "none", t.visibility = "hidden", document.body.appendChild(pt);
  }
  return pt.getBoundingClientRect();
}
function $u(t, r) {
  const n = mo();
  return {
    top: r,
    left: t,
    height: 0,
    width: 0,
    right: n.width - t,
    bottom: n.height - r
  };
}
function Tn(t) {
  const r = t.getBoundingClientRect(), n = mo();
  return {
    left: r.left - n.left,
    top: r.top - n.top,
    bottom: n.height + n.top - r.bottom,
    right: n.width + n.left - r.right,
    width: r.width,
    height: r.height
  };
}
function Pu(t) {
  return t.nodeType === 9 ? null : t.parentNode;
}
function go(t) {
  if (t === null)
    return null;
  const r = Pu(t);
  if (r === null)
    return null;
  if (r.nodeType === 9)
    return document;
  if (r.nodeType === 1) {
    const { overflow: n, overflowX: i, overflowY: a } = getComputedStyle(r);
    if (/(auto|scroll|overlay)/.test(n + a + i))
      return r;
  }
  return go(r);
}
const Tu = ee({
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
    Ge("VBinder", (r = vn()) === null || r === void 0 ? void 0 : r.proxy);
    const n = ce("VBinder", null), i = L(null), a = (c) => {
      i.value = c, n && t.syncTargetWithParent && n.setTargetRef(c);
    };
    let o = [];
    const l = () => {
      let c = i.value;
      for (; c = go(c), c !== null; )
        o.push(c);
      for (const D of o)
        Ae("scroll", D, x, !0);
    }, s = () => {
      for (const c of o)
        ge("scroll", c, x, !0);
      o = [];
    }, u = /* @__PURE__ */ new Set(), f = (c) => {
      u.size === 0 && l(), u.has(c) || u.add(c);
    }, d = (c) => {
      u.has(c) && u.delete(c), u.size === 0 && s();
    }, x = () => {
      zs(m);
    }, m = () => {
      u.forEach((c) => c());
    }, C = /* @__PURE__ */ new Set(), h = (c) => {
      C.size === 0 && Ae("resize", window, b), C.has(c) || C.add(c);
    }, p = (c) => {
      C.has(c) && C.delete(c), C.size === 0 && ge("resize", window, b);
    }, b = () => {
      C.forEach((c) => c());
    };
    return Ue(() => {
      ge("resize", window, b), s();
    }), {
      targetRef: i,
      setTargetRef: a,
      addScrollListener: f,
      removeScrollListener: d,
      addResizeListener: h,
      removeResizeListener: p
    };
  },
  render() {
    return Xn("binder", this.$slots);
  }
}), zu = ee({
  name: "Target",
  setup() {
    const { setTargetRef: t, syncTarget: r } = ce("VBinder");
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
    return t ? mn(Zi("follower", this.$slots), [
      [r]
    ]) : Zi("follower", this.$slots);
  }
}), qt = "@@mmoContext", Ou = {
  mounted(t, { value: r }) {
    t[qt] = {
      handler: void 0
    }, typeof r == "function" && (t[qt].handler = r, Ae("mousemoveoutside", t, r));
  },
  updated(t, { value: r }) {
    const n = t[qt];
    typeof r == "function" ? n.handler ? n.handler !== r && (ge("mousemoveoutside", t, n.handler), n.handler = r, Ae("mousemoveoutside", t, r)) : (t[qt].handler = r, Ae("mousemoveoutside", t, r)) : n.handler && (ge("mousemoveoutside", t, n.handler), n.handler = void 0);
  },
  unmounted(t) {
    const { handler: r } = t[qt];
    r && ge("mousemoveoutside", t, r), t[qt].handler = void 0;
  }
}, Gt = "@@coContext", Ji = {
  mounted(t, { value: r, modifiers: n }) {
    t[Gt] = {
      handler: void 0
    }, typeof r == "function" && (t[Gt].handler = r, Ae("clickoutside", t, r, {
      capture: n.capture
    }));
  },
  updated(t, { value: r, modifiers: n }) {
    const i = t[Gt];
    typeof r == "function" ? i.handler ? i.handler !== r && (ge("clickoutside", t, i.handler, {
      capture: n.capture
    }), i.handler = r, Ae("clickoutside", t, r, {
      capture: n.capture
    })) : (t[Gt].handler = r, Ae("clickoutside", t, r, {
      capture: n.capture
    })) : i.handler && (ge("clickoutside", t, i.handler, {
      capture: n.capture
    }), i.handler = void 0);
  },
  unmounted(t, { modifiers: r }) {
    const { handler: n } = t[Gt];
    n && ge("clickoutside", t, n, {
      capture: r.capture
    }), t[Gt].handler = void 0;
  }
};
function Mu(t, r) {
  console.error(`[vdirs/${t}]: ${r}`);
}
class Ru {
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
    const { nextZIndex: a } = this;
    i.has(r) && i.get(r) + 1 === this.nextZIndex || (r.style.zIndex = `${a}`, i.set(r, a), this.nextZIndex = a + 1, this.squashState());
  }
  unregister(r, n) {
    const { elementZIndex: i } = this;
    i.has(r) ? i.delete(r) : n === void 0 && Mu("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: r } = this;
    r || (this.nextZIndex = 2e3), this.nextZIndex - r > 2500 && this.rearrange();
  }
  rearrange() {
    const r = Array.from(this.elementZIndex.entries());
    r.sort((n, i) => n[1] - i[1]), this.nextZIndex = 2e3, r.forEach((n) => {
      const i = n[0], a = this.nextZIndex++;
      `${a}` !== i.style.zIndex && (i.style.zIndex = `${a}`);
    });
  }
}
const zn = new Ru(), Ut = "@@ziContext", bo = {
  mounted(t, r) {
    const { value: n = {} } = r, { zIndex: i, enabled: a } = n;
    t[Ut] = {
      enabled: !!a,
      initialized: !1
    }, a && (zn.ensureZIndex(t, i), t[Ut].initialized = !0);
  },
  updated(t, r) {
    const { value: n = {} } = r, { zIndex: i, enabled: a } = n, o = t[Ut].enabled;
    a && !o && (zn.ensureZIndex(t, i), t[Ut].initialized = !0), t[Ut].enabled = !!a;
  },
  unmounted(t, r) {
    if (!t[Ut].initialized)
      return;
    const { value: n = {} } = r, { zIndex: i } = n;
    zn.unregister(t, i);
  }
}, _u = "@css-render/vue3-ssr";
function ku(t, r) {
  return `<style cssr-id="${t}">
${r}
</style>`;
}
function Iu(t, r, n) {
  const { styles: i, ids: a } = n;
  a.has(t) || i !== null && (a.add(t), i.push(ku(t, r)));
}
const Hu = typeof document < "u";
function Or() {
  if (Hu)
    return;
  const t = ce(_u, null);
  if (t !== null)
    return {
      adapter: (r, n) => Iu(r, n, t),
      context: t
    };
}
function Qi(t, r) {
  console.error(`[vueuc/${t}]: ${r}`);
}
const { c: qr } = oo(), Wu = "vueuc-style";
function ea(t) {
  return typeof t == "string" ? document.querySelector(t) : t();
}
const Lu = ee({
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
      showTeleport: mu(we(t, "show")),
      mergedTo: R(() => {
        const { to: r } = t;
        return r ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? Xn("lazy-teleport", this.$slots) : y(fs, {
      disabled: this.disabled,
      to: this.mergedTo
    }, Xn("lazy-teleport", this.$slots)) : null;
  }
}), Gr = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, ta = {
  start: "end",
  center: "center",
  end: "start"
}, On = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, ju = {
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
}, Nu = {
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
}, Vu = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, ra = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, na = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function qu(t, r, n, i, a, o) {
  if (!a || o)
    return { placement: t, top: 0, left: 0 };
  const [l, s] = t.split("-");
  let u = s ?? "center", f = {
    top: 0,
    left: 0
  };
  const d = (C, h, p) => {
    let b = 0, c = 0;
    const D = n[C] - r[h] - r[C];
    return D > 0 && i && (p ? c = ra[h] ? D : -D : b = ra[h] ? D : -D), {
      left: b,
      top: c
    };
  }, x = l === "left" || l === "right";
  if (u !== "center") {
    const C = Vu[t], h = Gr[C], p = On[C];
    if (n[p] > r[p]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        r[C] + r[p] < n[p]
      ) {
        const b = (n[p] - r[p]) / 2;
        r[C] < b || r[h] < b ? r[C] < r[h] ? (u = ta[s], f = d(p, h, x)) : f = d(p, C, x) : u = "center";
      }
    } else n[p] < r[p] && r[h] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    r[C] > r[h] && (u = ta[s]);
  } else {
    const C = l === "bottom" || l === "top" ? "left" : "top", h = Gr[C], p = On[C], b = (n[p] - r[p]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (r[C] < b || r[h] < b) && (r[C] > r[h] ? (u = na[C], f = d(p, C, x)) : (u = na[h], f = d(p, h, x)));
  }
  let m = l;
  return (
    // space is not enough
    r[l] < n[On[l]] && // opposite position's space is larger
    r[l] < r[Gr[l]] && (m = Gr[l]), {
      placement: u !== "center" ? `${m}-${u}` : m,
      left: f.left,
      top: f.top
    }
  );
}
function Gu(t, r) {
  return r ? Nu[t] : ju[t];
}
function Uu(t, r, n, i, a, o) {
  if (o)
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
        left: `${Math.round(n.left - r.left + a)}px`,
        transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(n.top - r.top + n.height + i)}px`,
        left: `${Math.round(n.left - r.left + n.width + a)}px`,
        transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(n.top - r.top + i)}px`,
        left: `${Math.round(n.left - r.left + a)}px`,
        transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(n.top - r.top + i)}px`,
        left: `${Math.round(n.left - r.left + n.width + a)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(n.top - r.top + i)}px`,
        left: `${Math.round(n.left - r.left + n.width + a)}px`,
        transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(n.top - r.top + n.height + i)}px`,
        left: `${Math.round(n.left - r.left + n.width + a)}px`,
        transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(n.top - r.top + i)}px`,
        left: `${Math.round(n.left - r.left + a)}px`,
        transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(n.top - r.top + n.height + i)}px`,
        left: `${Math.round(n.left - r.left + a)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(n.top - r.top + i)}px`,
        left: `${Math.round(n.left - r.left + n.width / 2 + a)}px`,
        transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(n.top - r.top + n.height / 2 + i)}px`,
        left: `${Math.round(n.left - r.left + n.width + a)}px`,
        transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(n.top - r.top + n.height / 2 + i)}px`,
        left: `${Math.round(n.left - r.left + a)}px`,
        transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(n.top - r.top + n.height + i)}px`,
        left: `${Math.round(n.left - r.left + n.width / 2 + a)}px`,
        transform: "translateX(-50%)"
      };
  }
}
const Xu = qr([
  qr(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  qr(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    qr("> *", {
      pointerEvents: "all"
    })
  ])
]), Yu = ee({
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
    const r = ce("VBinder"), n = tt(() => t.enabled !== void 0 ? t.enabled : t.show), i = L(null), a = L(null), o = () => {
      const { syncTrigger: m } = t;
      m.includes("scroll") && r.addScrollListener(u), m.includes("resize") && r.addResizeListener(u);
    }, l = () => {
      r.removeScrollListener(u), r.removeResizeListener(u);
    };
    ut(() => {
      n.value && (u(), o());
    });
    const s = Or();
    Xu.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: Wu,
      ssr: s
    }), Ue(() => {
      l();
    }), Cu(() => {
      n.value && u();
    });
    const u = () => {
      if (!n.value)
        return;
      const m = i.value;
      if (m === null)
        return;
      const C = r.targetRef, { x: h, y: p, overlap: b } = t, c = h !== void 0 && p !== void 0 ? $u(h, p) : Tn(C);
      m.style.setProperty("--v-target-width", `${Math.round(c.width)}px`), m.style.setProperty("--v-target-height", `${Math.round(c.height)}px`);
      const { width: D, minWidth: F, placement: w, internalShift: _, flip: I } = t;
      m.setAttribute("v-placement", w), b ? m.setAttribute("v-overlap", "") : m.removeAttribute("v-overlap");
      const { style: v } = m;
      D === "target" ? v.width = `${c.width}px` : D !== void 0 ? v.width = D : v.width = "", F === "target" ? v.minWidth = `${c.width}px` : F !== void 0 ? v.minWidth = F : v.minWidth = "";
      const B = Tn(m), T = Tn(a.value), { left: O, top: N, placement: W } = qu(w, c, B, _, I, b), e = Gu(W, b), { left: E, top: A, transform: z } = Uu(W, T, c, N, O, b);
      m.setAttribute("v-placement", W), m.style.setProperty("--v-offset-left", `${Math.round(O)}px`), m.style.setProperty("--v-offset-top", `${Math.round(N)}px`), m.style.transform = `translateX(${E}) translateY(${A}) ${z}`, m.style.setProperty("--v-transform-origin", e), m.style.transformOrigin = e;
    };
    ze(n, (m) => {
      m ? (o(), f()) : l();
    });
    const f = () => {
      nn().then(u).catch((m) => console.error(m));
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
    ].forEach((m) => {
      ze(we(t, m), u);
    }), ["teleportDisabled"].forEach((m) => {
      ze(we(t, m), f);
    }), ze(we(t, "syncTrigger"), (m) => {
      m.includes("resize") ? r.addResizeListener(u) : r.removeResizeListener(u), m.includes("scroll") ? r.addScrollListener(u) : r.removeScrollListener(u);
    });
    const d = mi(), x = tt(() => {
      const { to: m } = t;
      if (m !== void 0)
        return m;
      d.value;
    });
    return {
      VBinder: r,
      mergedEnabled: n,
      offsetContainerRef: a,
      followerRef: i,
      mergedTo: x,
      syncPosition: u
    };
  },
  render() {
    return y(Lu, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var t, r;
        const n = y("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          y("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t))
        ]);
        return this.zindexable ? mn(n, [
          [
            bo,
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
var _t = [], Ku = function() {
  return _t.some(function(t) {
    return t.activeTargets.length > 0;
  });
}, Zu = function() {
  return _t.some(function(t) {
    return t.skippedTargets.length > 0;
  });
}, ia = "ResizeObserver loop completed with undelivered notifications.", Ju = function() {
  var t;
  typeof ErrorEvent == "function" ? t = new ErrorEvent("error", {
    message: ia
  }) : (t = document.createEvent("Event"), t.initEvent("error", !1, !1), t.message = ia), window.dispatchEvent(t);
}, Sr;
(function(t) {
  t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Sr || (Sr = {}));
var kt = function(t) {
  return Object.freeze(t);
}, Qu = /* @__PURE__ */ function() {
  function t(r, n) {
    this.inlineSize = r, this.blockSize = n, kt(this);
  }
  return t;
}(), Co = function() {
  function t(r, n, i, a) {
    return this.x = r, this.y = n, this.width = i, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, kt(this);
  }
  return t.prototype.toJSON = function() {
    var r = this, n = r.x, i = r.y, a = r.top, o = r.right, l = r.bottom, s = r.left, u = r.width, f = r.height;
    return { x: n, y: i, top: a, right: o, bottom: l, left: s, width: u, height: f };
  }, t.fromRect = function(r) {
    return new t(r.x, r.y, r.width, r.height);
  }, t;
}(), gi = function(t) {
  return t instanceof SVGElement && "getBBox" in t;
}, yo = function(t) {
  if (gi(t)) {
    var r = t.getBBox(), n = r.width, i = r.height;
    return !n && !i;
  }
  var a = t, o = a.offsetWidth, l = a.offsetHeight;
  return !(o || l || t.getClientRects().length);
}, aa = function(t) {
  var r;
  if (t instanceof Element)
    return !0;
  var n = (r = t == null ? void 0 : t.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView;
  return !!(n && t instanceof n.Element);
}, ef = function(t) {
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
}, wr = typeof window < "u" ? window : {}, Ur = /* @__PURE__ */ new WeakMap(), oa = /auto|scroll/, tf = /^tb|vertical/, rf = /msie|trident/i.test(wr.navigator && wr.navigator.userAgent), Ke = function(t) {
  return parseFloat(t || "0");
}, Kt = function(t, r, n) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0), n === void 0 && (n = !1), new Qu((n ? r : t) || 0, (n ? t : r) || 0);
}, la = kt({
  devicePixelContentBoxSize: Kt(),
  borderBoxSize: Kt(),
  contentBoxSize: Kt(),
  contentRect: new Co(0, 0, 0, 0)
}), Bo = function(t, r) {
  if (r === void 0 && (r = !1), Ur.has(t) && !r)
    return Ur.get(t);
  if (yo(t))
    return Ur.set(t, la), la;
  var n = getComputedStyle(t), i = gi(t) && t.ownerSVGElement && t.getBBox(), a = !rf && n.boxSizing === "border-box", o = tf.test(n.writingMode || ""), l = !i && oa.test(n.overflowY || ""), s = !i && oa.test(n.overflowX || ""), u = i ? 0 : Ke(n.paddingTop), f = i ? 0 : Ke(n.paddingRight), d = i ? 0 : Ke(n.paddingBottom), x = i ? 0 : Ke(n.paddingLeft), m = i ? 0 : Ke(n.borderTopWidth), C = i ? 0 : Ke(n.borderRightWidth), h = i ? 0 : Ke(n.borderBottomWidth), p = i ? 0 : Ke(n.borderLeftWidth), b = x + f, c = u + d, D = p + C, F = m + h, w = s ? t.offsetHeight - F - t.clientHeight : 0, _ = l ? t.offsetWidth - D - t.clientWidth : 0, I = a ? b + D : 0, v = a ? c + F : 0, B = i ? i.width : Ke(n.width) - I - _, T = i ? i.height : Ke(n.height) - v - w, O = B + b + _ + D, N = T + c + w + F, W = kt({
    devicePixelContentBoxSize: Kt(Math.round(B * devicePixelRatio), Math.round(T * devicePixelRatio), o),
    borderBoxSize: Kt(O, N, o),
    contentBoxSize: Kt(B, T, o),
    contentRect: new Co(x, u, B, T)
  });
  return Ur.set(t, W), W;
}, wo = function(t, r, n) {
  var i = Bo(t, n), a = i.borderBoxSize, o = i.contentBoxSize, l = i.devicePixelContentBoxSize;
  switch (r) {
    case Sr.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case Sr.BORDER_BOX:
      return a;
    default:
      return o;
  }
}, nf = /* @__PURE__ */ function() {
  function t(r) {
    var n = Bo(r);
    this.target = r, this.contentRect = n.contentRect, this.borderBoxSize = kt([n.borderBoxSize]), this.contentBoxSize = kt([n.contentBoxSize]), this.devicePixelContentBoxSize = kt([n.devicePixelContentBoxSize]);
  }
  return t;
}(), Do = function(t) {
  if (yo(t))
    return 1 / 0;
  for (var r = 0, n = t.parentNode; n; )
    r += 1, n = n.parentNode;
  return r;
}, af = function() {
  var t = 1 / 0, r = [];
  _t.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(f) {
        var d = new nf(f.target), x = Do(f.target);
        s.push(d), f.lastReportedSize = wo(f.target, f.observedBox), x < t && (t = x);
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
}, sa = function(t) {
  _t.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(a) {
      a.isActive() && (Do(a.target) > t ? n.activeTargets.push(a) : n.skippedTargets.push(a));
    });
  });
}, of = function() {
  var t = 0;
  for (sa(t); Ku(); )
    t = af(), sa(t);
  return Zu() && Ju(), t > 0;
}, Mn, Ao = [], lf = function() {
  return Ao.splice(0).forEach(function(t) {
    return t();
  });
}, sf = function(t) {
  if (!Mn) {
    var r = 0, n = document.createTextNode(""), i = { characterData: !0 };
    new MutationObserver(function() {
      return lf();
    }).observe(n, i), Mn = function() {
      n.textContent = "".concat(r ? r-- : r++);
    };
  }
  Ao.push(t), Mn();
}, uf = function(t) {
  sf(function() {
    requestAnimationFrame(t);
  });
}, tn = 0, ff = function() {
  return !!tn;
}, df = 250, cf = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, ua = [
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
], fa = function(t) {
  return t === void 0 && (t = 0), Date.now() + t;
}, Rn = !1, xf = function() {
  function t() {
    var r = this;
    this.stopped = !0, this.listener = function() {
      return r.schedule();
    };
  }
  return t.prototype.run = function(r) {
    var n = this;
    if (r === void 0 && (r = df), !Rn) {
      Rn = !0;
      var i = fa(r);
      uf(function() {
        var a = !1;
        try {
          a = of();
        } finally {
          if (Rn = !1, r = i - fa(), !ff())
            return;
          a ? n.run(1e3) : r > 0 ? n.run(r) : n.start();
        }
      });
    }
  }, t.prototype.schedule = function() {
    this.stop(), this.run();
  }, t.prototype.observe = function() {
    var r = this, n = function() {
      return r.observer && r.observer.observe(document.body, cf);
    };
    document.body ? n() : wr.addEventListener("DOMContentLoaded", n);
  }, t.prototype.start = function() {
    var r = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), ua.forEach(function(n) {
      return wr.addEventListener(n, r.listener, !0);
    }));
  }, t.prototype.stop = function() {
    var r = this;
    this.stopped || (this.observer && this.observer.disconnect(), ua.forEach(function(n) {
      return wr.removeEventListener(n, r.listener, !0);
    }), this.stopped = !0);
  }, t;
}(), Kn = new xf(), da = function(t) {
  !tn && t > 0 && Kn.start(), tn += t, !tn && Kn.stop();
}, hf = function(t) {
  return !gi(t) && !ef(t) && getComputedStyle(t).display === "inline";
}, pf = function() {
  function t(r, n) {
    this.target = r, this.observedBox = n || Sr.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return t.prototype.isActive = function() {
    var r = wo(this.target, this.observedBox, !0);
    return hf(this.target) && (this.lastReportedSize = r), this.lastReportedSize.inlineSize !== r.inlineSize || this.lastReportedSize.blockSize !== r.blockSize;
  }, t;
}(), vf = /* @__PURE__ */ function() {
  function t(r, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = r, this.callback = n;
  }
  return t;
}(), Xr = /* @__PURE__ */ new WeakMap(), ca = function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n].target === r)
      return n;
  return -1;
}, Yr = function() {
  function t() {
  }
  return t.connect = function(r, n) {
    var i = new vf(r, n);
    Xr.set(r, i);
  }, t.observe = function(r, n, i) {
    var a = Xr.get(r), o = a.observationTargets.length === 0;
    ca(a.observationTargets, n) < 0 && (o && _t.push(a), a.observationTargets.push(new pf(n, i && i.box)), da(1), Kn.schedule());
  }, t.unobserve = function(r, n) {
    var i = Xr.get(r), a = ca(i.observationTargets, n), o = i.observationTargets.length === 1;
    a >= 0 && (o && _t.splice(_t.indexOf(i), 1), i.observationTargets.splice(a, 1), da(-1));
  }, t.disconnect = function(r) {
    var n = this, i = Xr.get(r);
    i.observationTargets.slice().forEach(function(a) {
      return n.unobserve(r, a.target);
    }), i.activeTargets.splice(0, i.activeTargets.length);
  }, t;
}(), mf = function() {
  function t(r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof r != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Yr.connect(this, r);
  }
  return t.prototype.observe = function(r, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!aa(r))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Yr.observe(this, r, n);
  }, t.prototype.unobserve = function(r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!aa(r))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Yr.unobserve(this, r);
  }, t.prototype.disconnect = function() {
    Yr.disconnect(this);
  }, t.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, t;
}();
class gf {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || mf)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const xa = new gf(), Zn = ee({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(t) {
    let r = !1;
    const n = vn().proxy;
    function i(a) {
      const { onResize: o } = t;
      o !== void 0 && o(a);
    }
    ut(() => {
      const a = n.$el;
      if (a === void 0) {
        Qi("resize-observer", "$el does not exist.");
        return;
      }
      if (a.nextElementSibling !== a.nextSibling && a.nodeType === 3 && a.nodeValue !== "") {
        Qi("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      a.nextElementSibling !== null && (xa.registerHandler(a.nextElementSibling, i), r = !0);
    }), Ue(() => {
      r && xa.unregisterHandler(n.$el.nextElementSibling);
    });
  },
  render() {
    return an(this.$slots, "default");
  }
});
function Fo(t) {
  return t instanceof HTMLElement;
}
function So(t) {
  for (let r = 0; r < t.childNodes.length; r++) {
    const n = t.childNodes[r];
    if (Fo(n) && ($o(n) || So(n)))
      return !0;
  }
  return !1;
}
function Eo(t) {
  for (let r = t.childNodes.length - 1; r >= 0; r--) {
    const n = t.childNodes[r];
    if (Fo(n) && ($o(n) || Eo(n)))
      return !0;
  }
  return !1;
}
function $o(t) {
  if (!bf(t))
    return !1;
  try {
    t.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === t;
}
function bf(t) {
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
let pr = [];
const Cf = ee({
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
    const r = Vn(), n = L(null), i = L(null);
    let a = !1, o = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function s() {
      return pr[pr.length - 1] === r;
    }
    function u(b) {
      var c;
      b.code === "Escape" && s() && ((c = t.onEsc) === null || c === void 0 || c.call(t, b));
    }
    ut(() => {
      ze(() => t.active, (b) => {
        b ? (x(), Ae("keydown", document, u)) : (ge("keydown", document, u), a && m());
      }, {
        immediate: !0
      });
    }), Ue(() => {
      ge("keydown", document, u), a && m();
    });
    function f(b) {
      if (!o && s()) {
        const c = d();
        if (c === null || c.contains(ln(b)))
          return;
        C("first");
      }
    }
    function d() {
      const b = n.value;
      if (b === null)
        return null;
      let c = b;
      for (; c = c.nextSibling, !(c === null || c instanceof Element && c.tagName === "DIV"); )
        ;
      return c;
    }
    function x() {
      var b;
      if (!t.disabled) {
        if (pr.push(r), t.autoFocus) {
          const { initialFocusTo: c } = t;
          c === void 0 ? C("first") : (b = ea(c)) === null || b === void 0 || b.focus({ preventScroll: !0 });
        }
        a = !0, document.addEventListener("focus", f, !0);
      }
    }
    function m() {
      var b;
      if (t.disabled || (document.removeEventListener("focus", f, !0), pr = pr.filter((D) => D !== r), s()))
        return;
      const { finalFocusTo: c } = t;
      c !== void 0 ? (b = ea(c)) === null || b === void 0 || b.focus({ preventScroll: !0 }) : t.returnFocusOnDeactivated && l instanceof HTMLElement && (o = !0, l.focus({ preventScroll: !0 }), o = !1);
    }
    function C(b) {
      if (s() && t.active) {
        const c = n.value, D = i.value;
        if (c !== null && D !== null) {
          const F = d();
          if (F == null || F === D) {
            o = !0, c.focus({ preventScroll: !0 }), o = !1;
            return;
          }
          o = !0;
          const w = b === "first" ? So(F) : Eo(F);
          o = !1, w || (o = !0, c.focus({ preventScroll: !0 }), o = !1);
        }
      }
    }
    function h(b) {
      if (o)
        return;
      const c = d();
      c !== null && (b.relatedTarget !== null && c.contains(b.relatedTarget) ? C("last") : C("first"));
    }
    function p(b) {
      o || (b.relatedTarget !== null && b.relatedTarget === n.value ? C("last") : C("first"));
    }
    return {
      focusableStartRef: n,
      focusableEndRef: i,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: h,
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
    return y(Bt, null, [
      y("div", {
        "aria-hidden": "true",
        tabindex: r ? "0" : "-1",
        ref: "focusableStartRef",
        style: n,
        onFocus: this.handleStartFocus
      }),
      t(),
      y("div", {
        "aria-hidden": "true",
        style: n,
        ref: "focusableEndRef",
        tabindex: r ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
});
function yf(t) {
  const r = {
    isDeactivated: !1
  };
  let n = !1;
  return ds(() => {
    if (r.isDeactivated = !1, !n) {
      n = !0;
      return;
    }
    t();
  }), cs(() => {
    r.isDeactivated = !0, n || (n = !0);
  }), r;
}
const Jn = "n-form-item";
function Po(t, {
  defaultSize: r = "medium",
  mergedSize: n,
  mergedDisabled: i
} = {}) {
  const a = ce(Jn, null);
  Ge(Jn, null);
  const o = R(n ? () => n(a) : () => {
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
  }), l = R(i ? () => i(a) : () => {
    const {
      disabled: u
    } = t;
    return u !== void 0 ? u : a ? a.disabled.value : !1;
  }), s = R(() => {
    const {
      status: u
    } = t;
    return u || (a == null ? void 0 : a.mergedValidationStatus.value);
  });
  return Ue(() => {
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
var To = typeof global == "object" && global && global.Object === Object && global, Bf = typeof self == "object" && self && self.Object === Object && self, rt = To || Bf || Function("return this")(), Ct = rt.Symbol, zo = Object.prototype, wf = zo.hasOwnProperty, Df = zo.toString, vr = Ct ? Ct.toStringTag : void 0;
function Af(t) {
  var r = wf.call(t, vr), n = t[vr];
  try {
    t[vr] = void 0;
    var i = !0;
  } catch {
  }
  var a = Df.call(t);
  return i && (r ? t[vr] = n : delete t[vr]), a;
}
var Ff = Object.prototype, Sf = Ff.toString;
function Ef(t) {
  return Sf.call(t);
}
var $f = "[object Null]", Pf = "[object Undefined]", ha = Ct ? Ct.toStringTag : void 0;
function Lt(t) {
  return t == null ? t === void 0 ? Pf : $f : ha && ha in Object(t) ? Af(t) : Ef(t);
}
function yt(t) {
  return t != null && typeof t == "object";
}
var Tf = "[object Symbol]";
function bi(t) {
  return typeof t == "symbol" || yt(t) && Lt(t) == Tf;
}
function Oo(t, r) {
  for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
    a[n] = r(t[n], n, t);
  return a;
}
var Ne = Array.isArray, zf = 1 / 0, pa = Ct ? Ct.prototype : void 0, va = pa ? pa.toString : void 0;
function Mo(t) {
  if (typeof t == "string")
    return t;
  if (Ne(t))
    return Oo(t, Mo) + "";
  if (bi(t))
    return va ? va.call(t) : "";
  var r = t + "";
  return r == "0" && 1 / t == -zf ? "-0" : r;
}
function wt(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
function Ci(t) {
  return t;
}
var Of = "[object AsyncFunction]", Mf = "[object Function]", Rf = "[object GeneratorFunction]", _f = "[object Proxy]";
function yi(t) {
  if (!wt(t))
    return !1;
  var r = Lt(t);
  return r == Mf || r == Rf || r == Of || r == _f;
}
var _n = rt["__core-js_shared__"], ma = function() {
  var t = /[^.]+$/.exec(_n && _n.keys && _n.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function kf(t) {
  return !!ma && ma in t;
}
var If = Function.prototype, Hf = If.toString;
function jt(t) {
  if (t != null) {
    try {
      return Hf.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Wf = /[\\^$.*+?()[\]{}|]/g, Lf = /^\[object .+?Constructor\]$/, jf = Function.prototype, Nf = Object.prototype, Vf = jf.toString, qf = Nf.hasOwnProperty, Gf = RegExp(
  "^" + Vf.call(qf).replace(Wf, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Uf(t) {
  if (!wt(t) || kf(t))
    return !1;
  var r = yi(t) ? Gf : Lf;
  return r.test(jt(t));
}
function Xf(t, r) {
  return t == null ? void 0 : t[r];
}
function Nt(t, r) {
  var n = Xf(t, r);
  return Uf(n) ? n : void 0;
}
var Qn = Nt(rt, "WeakMap"), ga = Object.create, Yf = /* @__PURE__ */ function() {
  function t() {
  }
  return function(r) {
    if (!wt(r))
      return {};
    if (ga)
      return ga(r);
    t.prototype = r;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
function Kf(t, r, n) {
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
function Zf(t, r) {
  var n = -1, i = t.length;
  for (r || (r = Array(i)); ++n < i; )
    r[n] = t[n];
  return r;
}
var Jf = 800, Qf = 16, e0 = Date.now;
function t0(t) {
  var r = 0, n = 0;
  return function() {
    var i = e0(), a = Qf - (i - n);
    if (n = i, a > 0) {
      if (++r >= Jf)
        return arguments[0];
    } else
      r = 0;
    return t.apply(void 0, arguments);
  };
}
function r0(t) {
  return function() {
    return t;
  };
}
var un = function() {
  try {
    var t = Nt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), n0 = un ? function(t, r) {
  return un(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: r0(r),
    writable: !0
  });
} : Ci, i0 = t0(n0), a0 = 9007199254740991, o0 = /^(?:0|[1-9]\d*)$/;
function Bi(t, r) {
  var n = typeof t;
  return r = r ?? a0, !!r && (n == "number" || n != "symbol" && o0.test(t)) && t > -1 && t % 1 == 0 && t < r;
}
function wi(t, r, n) {
  r == "__proto__" && un ? un(t, r, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[r] = n;
}
function Mr(t, r) {
  return t === r || t !== t && r !== r;
}
var l0 = Object.prototype, s0 = l0.hasOwnProperty;
function u0(t, r, n) {
  var i = t[r];
  (!(s0.call(t, r) && Mr(i, n)) || n === void 0 && !(r in t)) && wi(t, r, n);
}
function f0(t, r, n, i) {
  var a = !n;
  n || (n = {});
  for (var o = -1, l = r.length; ++o < l; ) {
    var s = r[o], u = void 0;
    u === void 0 && (u = t[s]), a ? wi(n, s, u) : u0(n, s, u);
  }
  return n;
}
var ba = Math.max;
function d0(t, r, n) {
  return r = ba(r === void 0 ? t.length - 1 : r, 0), function() {
    for (var i = arguments, a = -1, o = ba(i.length - r, 0), l = Array(o); ++a < o; )
      l[a] = i[r + a];
    a = -1;
    for (var s = Array(r + 1); ++a < r; )
      s[a] = i[a];
    return s[r] = n(l), Kf(t, this, s);
  };
}
function c0(t, r) {
  return i0(d0(t, r, Ci), t + "");
}
var x0 = 9007199254740991;
function Di(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= x0;
}
function ar(t) {
  return t != null && Di(t.length) && !yi(t);
}
function h0(t, r, n) {
  if (!wt(n))
    return !1;
  var i = typeof r;
  return (i == "number" ? ar(n) && Bi(r, n.length) : i == "string" && r in n) ? Mr(n[r], t) : !1;
}
function p0(t) {
  return c0(function(r, n) {
    var i = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, l = a > 2 ? n[2] : void 0;
    for (o = t.length > 3 && typeof o == "function" ? (a--, o) : void 0, l && h0(n[0], n[1], l) && (o = a < 3 ? void 0 : o, a = 1), r = Object(r); ++i < a; ) {
      var s = n[i];
      s && t(r, s, i, o);
    }
    return r;
  });
}
var v0 = Object.prototype;
function Ai(t) {
  var r = t && t.constructor, n = typeof r == "function" && r.prototype || v0;
  return t === n;
}
function m0(t, r) {
  for (var n = -1, i = Array(t); ++n < t; )
    i[n] = r(n);
  return i;
}
var g0 = "[object Arguments]";
function Ca(t) {
  return yt(t) && Lt(t) == g0;
}
var Ro = Object.prototype, b0 = Ro.hasOwnProperty, C0 = Ro.propertyIsEnumerable, fn = Ca(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ca : function(t) {
  return yt(t) && b0.call(t, "callee") && !C0.call(t, "callee");
};
function y0() {
  return !1;
}
var _o = typeof exports == "object" && exports && !exports.nodeType && exports, ya = _o && typeof module == "object" && module && !module.nodeType && module, B0 = ya && ya.exports === _o, Ba = B0 ? rt.Buffer : void 0, w0 = Ba ? Ba.isBuffer : void 0, dn = w0 || y0, D0 = "[object Arguments]", A0 = "[object Array]", F0 = "[object Boolean]", S0 = "[object Date]", E0 = "[object Error]", $0 = "[object Function]", P0 = "[object Map]", T0 = "[object Number]", z0 = "[object Object]", O0 = "[object RegExp]", M0 = "[object Set]", R0 = "[object String]", _0 = "[object WeakMap]", k0 = "[object ArrayBuffer]", I0 = "[object DataView]", H0 = "[object Float32Array]", W0 = "[object Float64Array]", L0 = "[object Int8Array]", j0 = "[object Int16Array]", N0 = "[object Int32Array]", V0 = "[object Uint8Array]", q0 = "[object Uint8ClampedArray]", G0 = "[object Uint16Array]", U0 = "[object Uint32Array]", de = {};
de[H0] = de[W0] = de[L0] = de[j0] = de[N0] = de[V0] = de[q0] = de[G0] = de[U0] = !0;
de[D0] = de[A0] = de[k0] = de[F0] = de[I0] = de[S0] = de[E0] = de[$0] = de[P0] = de[T0] = de[z0] = de[O0] = de[M0] = de[R0] = de[_0] = !1;
function X0(t) {
  return yt(t) && Di(t.length) && !!de[Lt(t)];
}
function Y0(t) {
  return function(r) {
    return t(r);
  };
}
var ko = typeof exports == "object" && exports && !exports.nodeType && exports, Dr = ko && typeof module == "object" && module && !module.nodeType && module, K0 = Dr && Dr.exports === ko, kn = K0 && To.process, wa = function() {
  try {
    var t = Dr && Dr.require && Dr.require("util").types;
    return t || kn && kn.binding && kn.binding("util");
  } catch {
  }
}(), Da = wa && wa.isTypedArray, Fi = Da ? Y0(Da) : X0, Z0 = Object.prototype, J0 = Z0.hasOwnProperty;
function Io(t, r) {
  var n = Ne(t), i = !n && fn(t), a = !n && !i && dn(t), o = !n && !i && !a && Fi(t), l = n || i || a || o, s = l ? m0(t.length, String) : [], u = s.length;
  for (var f in t)
    (r || J0.call(t, f)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Bi(f, u))) && s.push(f);
  return s;
}
function Ho(t, r) {
  return function(n) {
    return t(r(n));
  };
}
var Q0 = Ho(Object.keys, Object), ed = Object.prototype, td = ed.hasOwnProperty;
function rd(t) {
  if (!Ai(t))
    return Q0(t);
  var r = [];
  for (var n in Object(t))
    td.call(t, n) && n != "constructor" && r.push(n);
  return r;
}
function Si(t) {
  return ar(t) ? Io(t) : rd(t);
}
function nd(t) {
  var r = [];
  if (t != null)
    for (var n in Object(t))
      r.push(n);
  return r;
}
var id = Object.prototype, ad = id.hasOwnProperty;
function od(t) {
  if (!wt(t))
    return nd(t);
  var r = Ai(t), n = [];
  for (var i in t)
    i == "constructor" && (r || !ad.call(t, i)) || n.push(i);
  return n;
}
function Wo(t) {
  return ar(t) ? Io(t, !0) : od(t);
}
var ld = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, sd = /^\w*$/;
function Ei(t, r) {
  if (Ne(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || bi(t) ? !0 : sd.test(t) || !ld.test(t) || r != null && t in Object(r);
}
var Er = Nt(Object, "create");
function ud() {
  this.__data__ = Er ? Er(null) : {}, this.size = 0;
}
function fd(t) {
  var r = this.has(t) && delete this.__data__[t];
  return this.size -= r ? 1 : 0, r;
}
var dd = "__lodash_hash_undefined__", cd = Object.prototype, xd = cd.hasOwnProperty;
function hd(t) {
  var r = this.__data__;
  if (Er) {
    var n = r[t];
    return n === dd ? void 0 : n;
  }
  return xd.call(r, t) ? r[t] : void 0;
}
var pd = Object.prototype, vd = pd.hasOwnProperty;
function md(t) {
  var r = this.__data__;
  return Er ? r[t] !== void 0 : vd.call(r, t);
}
var gd = "__lodash_hash_undefined__";
function bd(t, r) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Er && r === void 0 ? gd : r, this;
}
function Wt(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
Wt.prototype.clear = ud;
Wt.prototype.delete = fd;
Wt.prototype.get = hd;
Wt.prototype.has = md;
Wt.prototype.set = bd;
function Cd() {
  this.__data__ = [], this.size = 0;
}
function yn(t, r) {
  for (var n = t.length; n--; )
    if (Mr(t[n][0], r))
      return n;
  return -1;
}
var yd = Array.prototype, Bd = yd.splice;
function wd(t) {
  var r = this.__data__, n = yn(r, t);
  if (n < 0)
    return !1;
  var i = r.length - 1;
  return n == i ? r.pop() : Bd.call(r, n, 1), --this.size, !0;
}
function Dd(t) {
  var r = this.__data__, n = yn(r, t);
  return n < 0 ? void 0 : r[n][1];
}
function Ad(t) {
  return yn(this.__data__, t) > -1;
}
function Fd(t, r) {
  var n = this.__data__, i = yn(n, t);
  return i < 0 ? (++this.size, n.push([t, r])) : n[i][1] = r, this;
}
function ft(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
ft.prototype.clear = Cd;
ft.prototype.delete = wd;
ft.prototype.get = Dd;
ft.prototype.has = Ad;
ft.prototype.set = Fd;
var $r = Nt(rt, "Map");
function Sd() {
  this.size = 0, this.__data__ = {
    hash: new Wt(),
    map: new ($r || ft)(),
    string: new Wt()
  };
}
function Ed(t) {
  var r = typeof t;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
}
function Bn(t, r) {
  var n = t.__data__;
  return Ed(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
}
function $d(t) {
  var r = Bn(this, t).delete(t);
  return this.size -= r ? 1 : 0, r;
}
function Pd(t) {
  return Bn(this, t).get(t);
}
function Td(t) {
  return Bn(this, t).has(t);
}
function zd(t, r) {
  var n = Bn(this, t), i = n.size;
  return n.set(t, r), this.size += n.size == i ? 0 : 1, this;
}
function dt(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
dt.prototype.clear = Sd;
dt.prototype.delete = $d;
dt.prototype.get = Pd;
dt.prototype.has = Td;
dt.prototype.set = zd;
var Od = "Expected a function";
function $i(t, r) {
  if (typeof t != "function" || r != null && typeof r != "function")
    throw new TypeError(Od);
  var n = function() {
    var i = arguments, a = r ? r.apply(this, i) : i[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var l = t.apply(this, i);
    return n.cache = o.set(a, l) || o, l;
  };
  return n.cache = new ($i.Cache || dt)(), n;
}
$i.Cache = dt;
var Md = 500;
function Rd(t) {
  var r = $i(t, function(i) {
    return n.size === Md && n.clear(), i;
  }), n = r.cache;
  return r;
}
var _d = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, kd = /\\(\\)?/g, Id = Rd(function(t) {
  var r = [];
  return t.charCodeAt(0) === 46 && r.push(""), t.replace(_d, function(n, i, a, o) {
    r.push(a ? o.replace(kd, "$1") : i || n);
  }), r;
});
function Lo(t) {
  return t == null ? "" : Mo(t);
}
function jo(t, r) {
  return Ne(t) ? t : Ei(t, r) ? [t] : Id(Lo(t));
}
var Hd = 1 / 0;
function wn(t) {
  if (typeof t == "string" || bi(t))
    return t;
  var r = t + "";
  return r == "0" && 1 / t == -Hd ? "-0" : r;
}
function No(t, r) {
  r = jo(r, t);
  for (var n = 0, i = r.length; t != null && n < i; )
    t = t[wn(r[n++])];
  return n && n == i ? t : void 0;
}
function Pi(t, r, n) {
  var i = t == null ? void 0 : No(t, r);
  return i === void 0 ? n : i;
}
function Wd(t, r) {
  for (var n = -1, i = r.length, a = t.length; ++n < i; )
    t[a + n] = r[n];
  return t;
}
var Vo = Ho(Object.getPrototypeOf, Object), Ld = "[object Object]", jd = Function.prototype, Nd = Object.prototype, qo = jd.toString, Vd = Nd.hasOwnProperty, qd = qo.call(Object);
function Gd(t) {
  if (!yt(t) || Lt(t) != Ld)
    return !1;
  var r = Vo(t);
  if (r === null)
    return !0;
  var n = Vd.call(r, "constructor") && r.constructor;
  return typeof n == "function" && n instanceof n && qo.call(n) == qd;
}
function Ud(t, r, n) {
  var i = -1, a = t.length;
  r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
  for (var o = Array(a); ++i < a; )
    o[i] = t[i + r];
  return o;
}
function Xd(t, r, n) {
  var i = t.length;
  return n = n === void 0 ? i : n, !r && n >= i ? t : Ud(t, r, n);
}
var Yd = "\\ud800-\\udfff", Kd = "\\u0300-\\u036f", Zd = "\\ufe20-\\ufe2f", Jd = "\\u20d0-\\u20ff", Qd = Kd + Zd + Jd, ec = "\\ufe0e\\ufe0f", tc = "\\u200d", rc = RegExp("[" + tc + Yd + Qd + ec + "]");
function Go(t) {
  return rc.test(t);
}
function nc(t) {
  return t.split("");
}
var Uo = "\\ud800-\\udfff", ic = "\\u0300-\\u036f", ac = "\\ufe20-\\ufe2f", oc = "\\u20d0-\\u20ff", lc = ic + ac + oc, sc = "\\ufe0e\\ufe0f", uc = "[" + Uo + "]", ei = "[" + lc + "]", ti = "\\ud83c[\\udffb-\\udfff]", fc = "(?:" + ei + "|" + ti + ")", Xo = "[^" + Uo + "]", Yo = "(?:\\ud83c[\\udde6-\\uddff]){2}", Ko = "[\\ud800-\\udbff][\\udc00-\\udfff]", dc = "\\u200d", Zo = fc + "?", Jo = "[" + sc + "]?", cc = "(?:" + dc + "(?:" + [Xo, Yo, Ko].join("|") + ")" + Jo + Zo + ")*", xc = Jo + Zo + cc, hc = "(?:" + [Xo + ei + "?", ei, Yo, Ko, uc].join("|") + ")", pc = RegExp(ti + "(?=" + ti + ")|" + hc + xc, "g");
function vc(t) {
  return t.match(pc) || [];
}
function mc(t) {
  return Go(t) ? vc(t) : nc(t);
}
function gc(t) {
  return function(r) {
    r = Lo(r);
    var n = Go(r) ? mc(r) : void 0, i = n ? n[0] : r.charAt(0), a = n ? Xd(n, 1).join("") : r.slice(1);
    return i[t]() + a;
  };
}
var bc = gc("toUpperCase");
function Cc() {
  this.__data__ = new ft(), this.size = 0;
}
function yc(t) {
  var r = this.__data__, n = r.delete(t);
  return this.size = r.size, n;
}
function Bc(t) {
  return this.__data__.get(t);
}
function wc(t) {
  return this.__data__.has(t);
}
var Dc = 200;
function Ac(t, r) {
  var n = this.__data__;
  if (n instanceof ft) {
    var i = n.__data__;
    if (!$r || i.length < Dc - 1)
      return i.push([t, r]), this.size = ++n.size, this;
    n = this.__data__ = new dt(i);
  }
  return n.set(t, r), this.size = n.size, this;
}
function et(t) {
  var r = this.__data__ = new ft(t);
  this.size = r.size;
}
et.prototype.clear = Cc;
et.prototype.delete = yc;
et.prototype.get = Bc;
et.prototype.has = wc;
et.prototype.set = Ac;
var Qo = typeof exports == "object" && exports && !exports.nodeType && exports, Aa = Qo && typeof module == "object" && module && !module.nodeType && module, Fc = Aa && Aa.exports === Qo, Fa = Fc ? rt.Buffer : void 0;
Fa && Fa.allocUnsafe;
function Sc(t, r) {
  return t.slice();
}
function Ec(t, r) {
  for (var n = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++n < i; ) {
    var l = t[n];
    r(l, n, t) && (o[a++] = l);
  }
  return o;
}
function $c() {
  return [];
}
var Pc = Object.prototype, Tc = Pc.propertyIsEnumerable, Sa = Object.getOwnPropertySymbols, zc = Sa ? function(t) {
  return t == null ? [] : (t = Object(t), Ec(Sa(t), function(r) {
    return Tc.call(t, r);
  }));
} : $c;
function Oc(t, r, n) {
  var i = r(t);
  return Ne(t) ? i : Wd(i, n(t));
}
function Ea(t) {
  return Oc(t, Si, zc);
}
var ri = Nt(rt, "DataView"), ni = Nt(rt, "Promise"), ii = Nt(rt, "Set"), $a = "[object Map]", Mc = "[object Object]", Pa = "[object Promise]", Ta = "[object Set]", za = "[object WeakMap]", Oa = "[object DataView]", Rc = jt(ri), _c = jt($r), kc = jt(ni), Ic = jt(ii), Hc = jt(Qn), mt = Lt;
(ri && mt(new ri(new ArrayBuffer(1))) != Oa || $r && mt(new $r()) != $a || ni && mt(ni.resolve()) != Pa || ii && mt(new ii()) != Ta || Qn && mt(new Qn()) != za) && (mt = function(t) {
  var r = Lt(t), n = r == Mc ? t.constructor : void 0, i = n ? jt(n) : "";
  if (i)
    switch (i) {
      case Rc:
        return Oa;
      case _c:
        return $a;
      case kc:
        return Pa;
      case Ic:
        return Ta;
      case Hc:
        return za;
    }
  return r;
});
var cn = rt.Uint8Array;
function Wc(t) {
  var r = new t.constructor(t.byteLength);
  return new cn(r).set(new cn(t)), r;
}
function Lc(t, r) {
  var n = Wc(t.buffer);
  return new t.constructor(n, t.byteOffset, t.length);
}
function jc(t) {
  return typeof t.constructor == "function" && !Ai(t) ? Yf(Vo(t)) : {};
}
var Nc = "__lodash_hash_undefined__";
function Vc(t) {
  return this.__data__.set(t, Nc), this;
}
function qc(t) {
  return this.__data__.has(t);
}
function xn(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new dt(); ++r < n; )
    this.add(t[r]);
}
xn.prototype.add = xn.prototype.push = Vc;
xn.prototype.has = qc;
function Gc(t, r) {
  for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
    if (r(t[n], n, t))
      return !0;
  return !1;
}
function Uc(t, r) {
  return t.has(r);
}
var Xc = 1, Yc = 2;
function el(t, r, n, i, a, o) {
  var l = n & Xc, s = t.length, u = r.length;
  if (s != u && !(l && u > s))
    return !1;
  var f = o.get(t), d = o.get(r);
  if (f && d)
    return f == r && d == t;
  var x = -1, m = !0, C = n & Yc ? new xn() : void 0;
  for (o.set(t, r), o.set(r, t); ++x < s; ) {
    var h = t[x], p = r[x];
    if (i)
      var b = l ? i(p, h, x, r, t, o) : i(h, p, x, t, r, o);
    if (b !== void 0) {
      if (b)
        continue;
      m = !1;
      break;
    }
    if (C) {
      if (!Gc(r, function(c, D) {
        if (!Uc(C, D) && (h === c || a(h, c, n, i, o)))
          return C.push(D);
      })) {
        m = !1;
        break;
      }
    } else if (!(h === p || a(h, p, n, i, o))) {
      m = !1;
      break;
    }
  }
  return o.delete(t), o.delete(r), m;
}
function Kc(t) {
  var r = -1, n = Array(t.size);
  return t.forEach(function(i, a) {
    n[++r] = [a, i];
  }), n;
}
function Zc(t) {
  var r = -1, n = Array(t.size);
  return t.forEach(function(i) {
    n[++r] = i;
  }), n;
}
var Jc = 1, Qc = 2, ex = "[object Boolean]", tx = "[object Date]", rx = "[object Error]", nx = "[object Map]", ix = "[object Number]", ax = "[object RegExp]", ox = "[object Set]", lx = "[object String]", sx = "[object Symbol]", ux = "[object ArrayBuffer]", fx = "[object DataView]", Ma = Ct ? Ct.prototype : void 0, In = Ma ? Ma.valueOf : void 0;
function dx(t, r, n, i, a, o, l) {
  switch (n) {
    case fx:
      if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset)
        return !1;
      t = t.buffer, r = r.buffer;
    case ux:
      return !(t.byteLength != r.byteLength || !o(new cn(t), new cn(r)));
    case ex:
    case tx:
    case ix:
      return Mr(+t, +r);
    case rx:
      return t.name == r.name && t.message == r.message;
    case ax:
    case lx:
      return t == r + "";
    case nx:
      var s = Kc;
    case ox:
      var u = i & Jc;
      if (s || (s = Zc), t.size != r.size && !u)
        return !1;
      var f = l.get(t);
      if (f)
        return f == r;
      i |= Qc, l.set(t, r);
      var d = el(s(t), s(r), i, a, o, l);
      return l.delete(t), d;
    case sx:
      if (In)
        return In.call(t) == In.call(r);
  }
  return !1;
}
var cx = 1, xx = Object.prototype, hx = xx.hasOwnProperty;
function px(t, r, n, i, a, o) {
  var l = n & cx, s = Ea(t), u = s.length, f = Ea(r), d = f.length;
  if (u != d && !l)
    return !1;
  for (var x = u; x--; ) {
    var m = s[x];
    if (!(l ? m in r : hx.call(r, m)))
      return !1;
  }
  var C = o.get(t), h = o.get(r);
  if (C && h)
    return C == r && h == t;
  var p = !0;
  o.set(t, r), o.set(r, t);
  for (var b = l; ++x < u; ) {
    m = s[x];
    var c = t[m], D = r[m];
    if (i)
      var F = l ? i(D, c, m, r, t, o) : i(c, D, m, t, r, o);
    if (!(F === void 0 ? c === D || a(c, D, n, i, o) : F)) {
      p = !1;
      break;
    }
    b || (b = m == "constructor");
  }
  if (p && !b) {
    var w = t.constructor, _ = r.constructor;
    w != _ && "constructor" in t && "constructor" in r && !(typeof w == "function" && w instanceof w && typeof _ == "function" && _ instanceof _) && (p = !1);
  }
  return o.delete(t), o.delete(r), p;
}
var vx = 1, Ra = "[object Arguments]", _a = "[object Array]", Kr = "[object Object]", mx = Object.prototype, ka = mx.hasOwnProperty;
function gx(t, r, n, i, a, o) {
  var l = Ne(t), s = Ne(r), u = l ? _a : mt(t), f = s ? _a : mt(r);
  u = u == Ra ? Kr : u, f = f == Ra ? Kr : f;
  var d = u == Kr, x = f == Kr, m = u == f;
  if (m && dn(t)) {
    if (!dn(r))
      return !1;
    l = !0, d = !1;
  }
  if (m && !d)
    return o || (o = new et()), l || Fi(t) ? el(t, r, n, i, a, o) : dx(t, r, u, n, i, a, o);
  if (!(n & vx)) {
    var C = d && ka.call(t, "__wrapped__"), h = x && ka.call(r, "__wrapped__");
    if (C || h) {
      var p = C ? t.value() : t, b = h ? r.value() : r;
      return o || (o = new et()), a(p, b, n, i, o);
    }
  }
  return m ? (o || (o = new et()), px(t, r, n, i, a, o)) : !1;
}
function Ti(t, r, n, i, a) {
  return t === r ? !0 : t == null || r == null || !yt(t) && !yt(r) ? t !== t && r !== r : gx(t, r, n, i, Ti, a);
}
var bx = 1, Cx = 2;
function yx(t, r, n, i) {
  var a = n.length, o = a;
  if (t == null)
    return !o;
  for (t = Object(t); a--; ) {
    var l = n[a];
    if (l[2] ? l[1] !== t[l[0]] : !(l[0] in t))
      return !1;
  }
  for (; ++a < o; ) {
    l = n[a];
    var s = l[0], u = t[s], f = l[1];
    if (l[2]) {
      if (u === void 0 && !(s in t))
        return !1;
    } else {
      var d = new et(), x;
      if (!(x === void 0 ? Ti(f, u, bx | Cx, i, d) : x))
        return !1;
    }
  }
  return !0;
}
function tl(t) {
  return t === t && !wt(t);
}
function Bx(t) {
  for (var r = Si(t), n = r.length; n--; ) {
    var i = r[n], a = t[i];
    r[n] = [i, a, tl(a)];
  }
  return r;
}
function rl(t, r) {
  return function(n) {
    return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
  };
}
function wx(t) {
  var r = Bx(t);
  return r.length == 1 && r[0][2] ? rl(r[0][0], r[0][1]) : function(n) {
    return n === t || yx(n, t, r);
  };
}
function Dx(t, r) {
  return t != null && r in Object(t);
}
function Ax(t, r, n) {
  r = jo(r, t);
  for (var i = -1, a = r.length, o = !1; ++i < a; ) {
    var l = wn(r[i]);
    if (!(o = t != null && n(t, l)))
      break;
    t = t[l];
  }
  return o || ++i != a ? o : (a = t == null ? 0 : t.length, !!a && Di(a) && Bi(l, a) && (Ne(t) || fn(t)));
}
function Fx(t, r) {
  return t != null && Ax(t, r, Dx);
}
var Sx = 1, Ex = 2;
function $x(t, r) {
  return Ei(t) && tl(r) ? rl(wn(t), r) : function(n) {
    var i = Pi(n, t);
    return i === void 0 && i === r ? Fx(n, t) : Ti(r, i, Sx | Ex);
  };
}
function Px(t) {
  return function(r) {
    return r == null ? void 0 : r[t];
  };
}
function Tx(t) {
  return function(r) {
    return No(r, t);
  };
}
function zx(t) {
  return Ei(t) ? Px(wn(t)) : Tx(t);
}
function Ox(t) {
  return typeof t == "function" ? t : t == null ? Ci : typeof t == "object" ? Ne(t) ? $x(t[0], t[1]) : wx(t) : zx(t);
}
function Mx(t) {
  return function(r, n, i) {
    for (var a = -1, o = Object(r), l = i(r), s = l.length; s--; ) {
      var u = l[++a];
      if (n(o[u], u, o) === !1)
        break;
    }
    return r;
  };
}
var nl = Mx();
function Rx(t, r) {
  return t && nl(t, r, Si);
}
function _x(t, r) {
  return function(n, i) {
    if (n == null)
      return n;
    if (!ar(n))
      return t(n, i);
    for (var a = n.length, o = -1, l = Object(n); ++o < a && i(l[o], o, l) !== !1; )
      ;
    return n;
  };
}
var kx = _x(Rx);
function ai(t, r, n) {
  (n !== void 0 && !Mr(t[r], n) || n === void 0 && !(r in t)) && wi(t, r, n);
}
function Ix(t) {
  return yt(t) && ar(t);
}
function oi(t, r) {
  if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
    return t[r];
}
function Hx(t) {
  return f0(t, Wo(t));
}
function Wx(t, r, n, i, a, o, l) {
  var s = oi(t, n), u = oi(r, n), f = l.get(u);
  if (f) {
    ai(t, n, f);
    return;
  }
  var d = o ? o(s, u, n + "", t, r, l) : void 0, x = d === void 0;
  if (x) {
    var m = Ne(u), C = !m && dn(u), h = !m && !C && Fi(u);
    d = u, m || C || h ? Ne(s) ? d = s : Ix(s) ? d = Zf(s) : C ? (x = !1, d = Sc(u)) : h ? (x = !1, d = Lc(u)) : d = [] : Gd(u) || fn(u) ? (d = s, fn(s) ? d = Hx(s) : (!wt(s) || yi(s)) && (d = jc(u))) : x = !1;
  }
  x && (l.set(u, d), a(d, u, i, o, l), l.delete(u)), ai(t, n, d);
}
function il(t, r, n, i, a) {
  t !== r && nl(r, function(o, l) {
    if (a || (a = new et()), wt(o))
      Wx(t, r, l, n, il, i, a);
    else {
      var s = i ? i(oi(t, l), o, l + "", t, r, a) : void 0;
      s === void 0 && (s = o), ai(t, l, s);
    }
  }, Wo);
}
function Lx(t, r) {
  var n = -1, i = ar(t) ? Array(t.length) : [];
  return kx(t, function(a, o, l) {
    i[++n] = r(a, o, l);
  }), i;
}
function jx(t, r) {
  var n = Ne(t) ? Oo : Lx;
  return n(t, Ox(r));
}
var mr = p0(function(t, r, n) {
  il(t, r, n);
});
const or = {
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
  fontSize: Nx,
  fontFamily: Vx,
  lineHeight: qx
} = or, al = $("body", `
 margin: 0;
 font-size: ${Nx};
 font-family: ${Vx};
 line-height: ${qx};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [$("input", `
 font-family: inherit;
 font-size: inherit;
 `)]), st = "n-config-provider", Pr = "naive-ui-style";
function he(t, r, n, i, a, o) {
  const l = Or(), s = ce(st, null);
  if (n) {
    const f = () => {
      const d = o == null ? void 0 : o.value;
      n.mount({
        id: d === void 0 ? r : d + r,
        head: !0,
        props: {
          bPrefix: d ? `.${d}-` : void 0
        },
        anchorMetaName: Pr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || al.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Pr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    l ? f() : vi(f);
  }
  return R(() => {
    var f;
    const {
      theme: {
        common: d,
        self: x,
        peers: m = {}
      } = {},
      themeOverrides: C = {},
      builtinThemeOverrides: h = {}
    } = a, {
      common: p,
      peers: b
    } = C, {
      common: c = void 0,
      [t]: {
        common: D = void 0,
        self: F = void 0,
        peers: w = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: _ = void 0,
      [t]: I = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: v,
      peers: B = {}
    } = I, T = mr({}, d || D || c || i.common, _, v, p), O = mr(
      // {}, executed every time, no need for empty obj
      (f = x || F || i.self) === null || f === void 0 ? void 0 : f(T),
      h,
      I,
      C
    );
    return {
      common: T,
      self: O,
      peers: mr({}, i.peers, w, m),
      peerOverrides: mr({}, h.peers, B, b)
    };
  });
}
he.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const li = "n";
function Ve(t = {}, r = {
  defaultBordered: !0
}) {
  const n = ce(st, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: n == null ? void 0 : n.inlineThemeDisabled,
    mergedRtlRef: n == null ? void 0 : n.mergedRtlRef,
    mergedComponentPropsRef: n == null ? void 0 : n.mergedComponentPropsRef,
    mergedBreakpointsRef: n == null ? void 0 : n.mergedBreakpointsRef,
    mergedBorderedRef: R(() => {
      var i, a;
      const {
        bordered: o
      } = t;
      return o !== void 0 ? o : (a = (i = n == null ? void 0 : n.mergedBorderedRef.value) !== null && i !== void 0 ? i : r.defaultBordered) !== null && a !== void 0 ? a : !0;
    }),
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : xs(li),
    namespaceRef: R(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
const Gx = {
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
}, Ux = {
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
function Zt(t) {
  return (r = {}) => {
    const n = r.width ? String(r.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
function Ze(t) {
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
function Je(t) {
  return (r, n = {}) => {
    const i = n.width, a = i && t.matchPatterns[i] || t.matchPatterns[t.defaultMatchWidth], o = r.match(a);
    if (!o)
      return null;
    const l = o[0], s = i && t.parsePatterns[i] || t.parsePatterns[t.defaultParseWidth], u = Array.isArray(s) ? Yx(s, (x) => x.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Xx(s, (x) => x.test(l))
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
function Xx(t, r) {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && r(t[n]))
      return n;
}
function Yx(t, r) {
  for (let n = 0; n < t.length; n++)
    if (r(t[n]))
      return n;
}
function ol(t) {
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
function Kx(t) {
  const r = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && r === "[object Date]" ? new t.constructor(+t) : typeof t == "number" || r === "[object Number]" || typeof t == "string" || r === "[object String]" ? new Date(t) : /* @__PURE__ */ new Date(NaN);
}
let Zx = {};
function Jx() {
  return Zx;
}
function Ia(t, r) {
  var s, u, f, d;
  const n = Jx(), i = (r == null ? void 0 : r.weekStartsOn) ?? ((u = (s = r == null ? void 0 : r.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? n.weekStartsOn ?? ((d = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = Kx(t), o = a.getDay(), l = (o < i ? 7 : 0) + o - i;
  return a.setDate(a.getDate() - l), a.setHours(0, 0, 0, 0), a;
}
function Qx(t, r, n) {
  const i = Ia(t, n), a = Ia(r, n);
  return +i == +a;
}
const eh = {
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
}, th = (t, r, n) => {
  let i;
  const a = eh[t];
  return typeof a == "string" ? i = a : r === 1 ? i = a.one : i = a.other.replace("{{count}}", r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + i : i + " ago" : i;
}, rh = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, nh = (t, r, n, i) => rh[t], ih = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, ah = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, oh = {
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
}, lh = {
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
}, sh = {
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
}, uh = {
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
}, fh = (t, r) => {
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
}, dh = {
  ordinalNumber: fh,
  era: Ze({
    values: ih,
    defaultWidth: "wide"
  }),
  quarter: Ze({
    values: ah,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: Ze({
    values: oh,
    defaultWidth: "wide"
  }),
  day: Ze({
    values: lh,
    defaultWidth: "wide"
  }),
  dayPeriod: Ze({
    values: sh,
    defaultWidth: "wide",
    formattingValues: uh,
    defaultFormattingWidth: "wide"
  })
}, ch = /^(\d+)(th|st|nd|rd)?/i, xh = /\d+/i, hh = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ph = {
  any: [/^b/i, /^(a|c)/i]
}, vh = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, mh = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, gh = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, bh = {
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
}, Ch = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, yh = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Bh = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, wh = {
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
}, Dh = {
  ordinalNumber: ol({
    matchPattern: ch,
    parsePattern: xh,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: Je({
    matchPatterns: hh,
    defaultMatchWidth: "wide",
    parsePatterns: ph,
    defaultParseWidth: "any"
  }),
  quarter: Je({
    matchPatterns: vh,
    defaultMatchWidth: "wide",
    parsePatterns: mh,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: Je({
    matchPatterns: gh,
    defaultMatchWidth: "wide",
    parsePatterns: bh,
    defaultParseWidth: "any"
  }),
  day: Je({
    matchPatterns: Ch,
    defaultMatchWidth: "wide",
    parsePatterns: yh,
    defaultParseWidth: "any"
  }),
  dayPeriod: Je({
    matchPatterns: Bh,
    defaultMatchWidth: "any",
    parsePatterns: wh,
    defaultParseWidth: "any"
  })
}, Ah = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Fh = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Sh = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Eh = {
  date: Zt({
    formats: Ah,
    defaultWidth: "full"
  }),
  time: Zt({
    formats: Fh,
    defaultWidth: "full"
  }),
  dateTime: Zt({
    formats: Sh,
    defaultWidth: "full"
  })
}, $h = {
  code: "en-US",
  formatDistance: th,
  formatLong: Eh,
  formatRelative: nh,
  localize: dh,
  match: Dh,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Ph = {
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
}, Th = (t, r, n) => {
  let i;
  const a = Ph[t];
  return typeof a == "string" ? i = a : r === 1 ? i = a.one : i = a.other.replace("{{count}}", String(r)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? i + "内" : i + "前" : i;
}, zh = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, Oh = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, Mh = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Rh = {
  date: Zt({
    formats: zh,
    defaultWidth: "full"
  }),
  time: Zt({
    formats: Oh,
    defaultWidth: "full"
  }),
  dateTime: Zt({
    formats: Mh,
    defaultWidth: "full"
  })
};
function Ha(t, r, n) {
  const i = "eeee p";
  return Qx(t, r, n) ? i : t.getTime() > r.getTime() ? "'下个'" + i : "'上个'" + i;
}
const _h = {
  lastWeek: Ha,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: Ha,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, kh = (t, r, n, i) => {
  const a = _h[t];
  return typeof a == "function" ? a(r, n, i) : a;
}, Ih = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, Hh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, Wh = {
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
}, Lh = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, jh = {
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
}, Nh = {
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
}, Vh = (t, r) => {
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
}, qh = {
  ordinalNumber: Vh,
  era: Ze({
    values: Ih,
    defaultWidth: "wide"
  }),
  quarter: Ze({
    values: Hh,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: Ze({
    values: Wh,
    defaultWidth: "wide"
  }),
  day: Ze({
    values: Lh,
    defaultWidth: "wide"
  }),
  dayPeriod: Ze({
    values: jh,
    defaultWidth: "wide",
    formattingValues: Nh,
    defaultFormattingWidth: "wide"
  })
}, Gh = /^(第\s*)?\d+(日|时|分|秒)?/i, Uh = /\d+/i, Xh = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, Yh = {
  any: [/^(前)/i, /^(公元)/i]
}, Kh = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, Zh = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, Jh = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, Qh = {
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
}, ep = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, tp = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, rp = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, np = {
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
}, ip = {
  ordinalNumber: ol({
    matchPattern: Gh,
    parsePattern: Uh,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: Je({
    matchPatterns: Xh,
    defaultMatchWidth: "wide",
    parsePatterns: Yh,
    defaultParseWidth: "any"
  }),
  quarter: Je({
    matchPatterns: Kh,
    defaultMatchWidth: "wide",
    parsePatterns: Zh,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: Je({
    matchPatterns: Jh,
    defaultMatchWidth: "wide",
    parsePatterns: Qh,
    defaultParseWidth: "any"
  }),
  day: Je({
    matchPatterns: ep,
    defaultMatchWidth: "wide",
    parsePatterns: tp,
    defaultParseWidth: "any"
  }),
  dayPeriod: Je({
    matchPatterns: rp,
    defaultMatchWidth: "any",
    parsePatterns: np,
    defaultParseWidth: "any"
  })
}, ap = {
  code: "zh-CN",
  formatDistance: Th,
  formatLong: Rh,
  formatRelative: kh,
  localize: qh,
  match: ip,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, op = {
  name: "zh-CN",
  locale: ap
}, lp = {
  name: "en-US",
  locale: $h
};
function sp(t) {
  const {
    mergedLocaleRef: r,
    mergedDateLocaleRef: n
  } = ce(st, null) || {}, i = R(() => {
    var o, l;
    return (l = (o = r == null ? void 0 : r.value) === null || o === void 0 ? void 0 : o[t]) !== null && l !== void 0 ? l : Ux[t];
  });
  return {
    dateLocaleRef: R(() => {
      var o;
      return (o = n == null ? void 0 : n.value) !== null && o !== void 0 ? o : lp;
    }),
    localeRef: i
  };
}
function lr(t, r, n) {
  if (!r) {
    process.env.NODE_ENV !== "production" && ro("use-style", "No style is specified.");
    return;
  }
  const i = Or(), a = ce(st, null), o = () => {
    const l = n.value;
    r.mount({
      id: l === void 0 ? t : l + t,
      head: !0,
      anchorMetaName: Pr,
      props: {
        bPrefix: l ? `.${l}-` : void 0
      },
      ssr: i,
      parent: a == null ? void 0 : a.styleMountTarget
    }), a != null && a.preflightStyleDisabled || al.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: Pr,
      ssr: i,
      parent: a == null ? void 0 : a.styleMountTarget
    });
  };
  i ? o() : vi(o);
}
function nt(t, r, n, i) {
  n || ro("useThemeClass", "cssVarsRef is not passed");
  const a = ce(st, null), o = a == null ? void 0 : a.mergedThemeHashRef, l = a == null ? void 0 : a.styleMountTarget, s = L(""), u = Or();
  let f;
  const d = `__${t}`, x = () => {
    let m = d;
    const C = r ? r.value : void 0, h = o == null ? void 0 : o.value;
    h && (m += `-${h}`), C && (m += `-${C}`);
    const {
      themeOverrides: p,
      builtinThemeOverrides: b
    } = i;
    p && (m += `-${Fr(JSON.stringify(p))}`), b && (m += `-${Fr(JSON.stringify(b))}`), s.value = m, f = () => {
      const c = n.value;
      let D = "";
      for (const F in c)
        D += `${F}: ${c[F]};`;
      $(`.${m}`, D).mount({
        id: m,
        ssr: u,
        parent: l
      }), f = void 0;
    };
  };
  return je(() => {
    x();
  }), {
    themeClass: s,
    onRender: () => {
      f == null || f();
    }
  };
}
function Dn(t, r, n) {
  if (!r) return;
  const i = Or(), a = R(() => {
    const {
      value: s
    } = r;
    if (!s)
      return;
    const u = s[t];
    if (u)
      return u;
  }), o = ce(st, null), l = () => {
    je(() => {
      const {
        value: s
      } = n, u = `${s}${t}Rtl`;
      if (lu(u, i)) return;
      const {
        value: f
      } = a;
      f && f.style.mount({
        id: u,
        head: !0,
        anchorMetaName: Pr,
        props: {
          bPrefix: s ? `.${s}-` : void 0
        },
        ssr: i,
        parent: o == null ? void 0 : o.styleMountTarget
      });
    });
  };
  return i ? l() : vi(l), a;
}
function up(t, r) {
  return ee({
    name: bc(t),
    setup() {
      var n;
      const i = (n = ce(st, null)) === null || n === void 0 ? void 0 : n.mergedIconsRef;
      return () => {
        var a;
        const o = (a = i == null ? void 0 : i.value) === null || a === void 0 ? void 0 : a[t];
        return o ? o() : r;
      };
    }
  });
}
const fp = ee({
  name: "Eye",
  render() {
    return y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, y("path", {
      d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }), y("circle", {
      cx: "256",
      cy: "256",
      r: "80",
      fill: "none",
      stroke: "currentColor",
      "stroke-miterlimit": "10",
      "stroke-width": "32"
    }));
  }
}), dp = ee({
  name: "EyeOff",
  render() {
    return y("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, y("path", {
      d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
      fill: "currentColor"
    }), y("path", {
      d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
      fill: "currentColor"
    }), y("path", {
      d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
      fill: "currentColor"
    }), y("path", {
      d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
      fill: "currentColor"
    }), y("path", {
      d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
      fill: "currentColor"
    }));
  }
}), cp = ee({
  name: "ChevronDown",
  render() {
    return y("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, y("path", {
      d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
      fill: "currentColor"
    }));
  }
}), xp = up("clear", y("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, y("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, y("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, y("path", {
  d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
}))))), zi = ee({
  name: "BaseIconSwitchTransition",
  setup(t, {
    slots: r
  }) {
    const n = mi();
    return () => y(It, {
      name: "icon-switch-transition",
      appear: n.value
    }, r);
  }
}), hp = ee({
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
        mode: d
      } = t, x = s ? hs : It, m = {
        name: u ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: f,
        onEnter: o,
        onAfterEnter: l,
        onBeforeLeave: n,
        onLeave: i,
        onAfterLeave: a
      };
      return s || (m.mode = d), y(x, m, r);
    };
  }
}), pp = H("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [$("svg", `
 height: 1em;
 width: 1em;
 `)]), hn = ee({
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
    lr("-base-icon", pp, we(t, "clsPrefix"));
  },
  render() {
    return y("i", {
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
  cubicBezierEaseInOut: vp
} = or;
function pn({
  originalTransform: t = "",
  left: r = 0,
  top: n = 0,
  transition: i = `all .3s ${vp} !important`
} = {}) {
  return [$("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${t} scale(0.75)`,
    left: r,
    top: n,
    opacity: 0
  }), $("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${t}`,
    left: r,
    top: n,
    opacity: 1
  }), $("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: r,
    top: n,
    transition: i
  })];
}
const mp = $([$("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), H("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [k("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [pn()]), k("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [pn({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), k("container", `
 animation: rotator 3s linear infinite both;
 `, [k("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Hn = "1.6s", gp = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Oi = ee({
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
  }, gp),
  setup(t) {
    lr("-base-loading", mp, we(t, "clsPrefix"));
  },
  render() {
    const {
      clsPrefix: t,
      radius: r,
      strokeWidth: n,
      stroke: i,
      scale: a
    } = this, o = r / a;
    return y("div", {
      class: `${t}-base-loading`,
      role: "img",
      "aria-label": "loading"
    }, y(zi, null, {
      default: () => this.show ? y("div", {
        key: "icon",
        class: `${t}-base-loading__transition-wrapper`
      }, y("div", {
        class: `${t}-base-loading__container`
      }, y("svg", {
        class: `${t}-base-loading__icon`,
        viewBox: `0 0 ${2 * o} ${2 * o}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          color: i
        }
      }, y("g", null, y("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${o} ${o};270 ${o} ${o}`,
        begin: "0s",
        dur: Hn,
        fill: "freeze",
        repeatCount: "indefinite"
      }), y("circle", {
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
      }, y("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${o} ${o};135 ${o} ${o};450 ${o} ${o}`,
        begin: "0s",
        dur: Hn,
        fill: "freeze",
        repeatCount: "indefinite"
      }), y("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * r};${1.42 * r};${5.67 * r}`,
        begin: "0s",
        dur: Hn,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : y("div", {
        key: "placeholder",
        class: `${t}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), q = {
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
}, bp = Ht(q.neutralBase), ll = Ht(q.neutralInvertBase), Cp = `rgba(${ll.slice(0, 3).join(", ")}, `;
function Wa(t) {
  return `${Cp + String(t)})`;
}
function Ee(t) {
  const r = Array.from(ll);
  return r[3] = Number(t), Le(bp, r);
}
const ct = Object.assign(Object.assign({
  name: "common"
}, or), {
  baseColor: q.neutralBase,
  // primary color
  primaryColor: q.primaryDefault,
  primaryColorHover: q.primaryHover,
  primaryColorPressed: q.primaryActive,
  primaryColorSuppl: q.primarySuppl,
  // info color
  infoColor: q.infoDefault,
  infoColorHover: q.infoHover,
  infoColorPressed: q.infoActive,
  infoColorSuppl: q.infoSuppl,
  // success color
  successColor: q.successDefault,
  successColorHover: q.successHover,
  successColorPressed: q.successActive,
  successColorSuppl: q.successSuppl,
  // warning color
  warningColor: q.warningDefault,
  warningColorHover: q.warningHover,
  warningColorPressed: q.warningActive,
  warningColorSuppl: q.warningSuppl,
  // error color
  errorColor: q.errorDefault,
  errorColorHover: q.errorHover,
  errorColorPressed: q.errorActive,
  errorColorSuppl: q.errorSuppl,
  // text color
  textColorBase: q.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: Ee(q.alpha4),
  placeholderColor: Ee(q.alpha4),
  placeholderColorDisabled: Ee(q.alpha5),
  iconColor: Ee(q.alpha4),
  iconColorHover: jr(Ee(q.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: jr(Ee(q.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: Ee(q.alpha5),
  opacity1: q.alpha1,
  opacity2: q.alpha2,
  opacity3: q.alpha3,
  opacity4: q.alpha4,
  opacity5: q.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: Ee(Number(q.alphaClose)),
  closeIconColorHover: Ee(Number(q.alphaClose)),
  closeIconColorPressed: Ee(Number(q.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: Ee(q.alpha4),
  clearColorHover: jr(Ee(q.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: jr(Ee(q.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Wa(q.alphaScrollbar),
  scrollbarColorHover: Wa(q.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: Ee(q.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: q.neutralPopover,
  tableColor: q.neutralCard,
  cardColor: q.neutralCard,
  modalColor: q.neutralModal,
  bodyColor: q.neutralBody,
  tagColor: "#eee",
  avatarColor: Ee(q.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: Ee(q.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: q.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), yp = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Bp(t) {
  const {
    scrollbarColor: r,
    scrollbarColorHover: n,
    scrollbarHeight: i,
    scrollbarWidth: a,
    scrollbarBorderRadius: o
  } = t;
  return Object.assign(Object.assign({}, yp), {
    height: i,
    width: a,
    borderRadius: o,
    color: r,
    colorHover: n
  });
}
const wp = {
  name: "Scrollbar",
  common: ct,
  self: Bp
}, {
  cubicBezierEaseInOut: La
} = or;
function sl({
  name: t = "fade-in",
  enterDuration: r = "0.2s",
  leaveDuration: n = "0.2s",
  enterCubicBezier: i = La,
  leaveCubicBezier: a = La
} = {}) {
  return [$(`&.${t}-transition-enter-active`, {
    transition: `all ${r} ${i}!important`
  }), $(`&.${t}-transition-leave-active`, {
    transition: `all ${n} ${a}!important`
  }), $(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`, {
    opacity: 0
  }), $(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`, {
    opacity: 1
  })];
}
const Dp = H("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [$(">", [H("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [$("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), $(">", [
  // We can't set overflow hidden since it affects positioning.
  H("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), $(">, +", [H("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [X("horizontal", `
 height: var(--n-scrollbar-height);
 `, [$(">", [k("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), X("horizontal--top", `
 inset: var(--n-scrollbar-rail-inset-horizontal-top); 
 `), X("horizontal--bottom", `
 inset: var(--n-scrollbar-rail-inset-horizontal-bottom); 
 `), X("vertical", `
 width: var(--n-scrollbar-width);
 `, [$(">", [k("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), X("vertical--left", `
 inset: var(--n-scrollbar-rail-inset-vertical-left); 
 `), X("vertical--right", `
 inset: var(--n-scrollbar-rail-inset-vertical-right); 
 `), X("disabled", [$(">", [k("scrollbar", "pointer-events: none;")])]), $(">", [k("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [sl(), $("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Ap = Object.assign(Object.assign({}, he.props), {
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
}), ul = ee({
  name: "Scrollbar",
  props: Ap,
  inheritAttrs: !1,
  setup(t) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n,
      mergedRtlRef: i
    } = Ve(t), a = Dn("Scrollbar", i, r), o = L(null), l = L(null), s = L(null), u = L(null), f = L(null), d = L(null), x = L(null), m = L(null), C = L(null), h = L(null), p = L(null), b = L(0), c = L(0), D = L(!1), F = L(!1);
    let w = !1, _ = !1, I, v, B = 0, T = 0, O = 0, N = 0;
    const W = Su(), e = he("Scrollbar", "-scrollbar", Dp, wp, t, r), E = R(() => {
      const {
        value: M
      } = m, {
        value: j
      } = d, {
        value: Y
      } = h;
      return M === null || j === null || Y === null ? 0 : Math.min(M, Y * M / j + Hi(e.value.self.width) * 1.5);
    }), A = R(() => `${E.value}px`), z = R(() => {
      const {
        value: M
      } = C, {
        value: j
      } = x, {
        value: Y
      } = p;
      return M === null || j === null || Y === null ? 0 : Y * M / j + Hi(e.value.self.height) * 1.5;
    }), P = R(() => `${z.value}px`), V = R(() => {
      const {
        value: M
      } = m, {
        value: j
      } = b, {
        value: Y
      } = d, {
        value: ie
      } = h;
      if (M === null || Y === null || ie === null)
        return 0;
      {
        const me = Y - M;
        return me ? j / me * (ie - E.value) : 0;
      }
    }), te = R(() => `${V.value}px`), J = R(() => {
      const {
        value: M
      } = C, {
        value: j
      } = c, {
        value: Y
      } = x, {
        value: ie
      } = p;
      if (M === null || Y === null || ie === null)
        return 0;
      {
        const me = Y - M;
        return me ? j / me * (ie - z.value) : 0;
      }
    }), xe = R(() => `${J.value}px`), oe = R(() => {
      const {
        value: M
      } = m, {
        value: j
      } = d;
      return M !== null && j !== null && j > M;
    }), Pe = R(() => {
      const {
        value: M
      } = C, {
        value: j
      } = x;
      return M !== null && j !== null && j > M;
    }), De = R(() => {
      const {
        trigger: M
      } = t;
      return M === "none" || D.value;
    }), Me = R(() => {
      const {
        trigger: M
      } = t;
      return M === "none" || F.value;
    }), K = R(() => {
      const {
        container: M
      } = t;
      return M ? M() : l.value;
    }), Te = R(() => {
      const {
        content: M
      } = t;
      return M ? M() : s.value;
    }), Ie = (M, j) => {
      if (!t.scrollable) return;
      if (typeof M == "number") {
        le(M, j ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: Y,
        top: ie,
        index: me,
        elSize: Fe,
        position: _e,
        behavior: fe,
        el: Se,
        debounce: Ye = !0
      } = M;
      (Y !== void 0 || ie !== void 0) && le(Y ?? 0, ie ?? 0, 0, !1, fe), Se !== void 0 ? le(0, Se.offsetTop, Se.offsetHeight, Ye, fe) : me !== void 0 && Fe !== void 0 ? le(0, me * Fe, Fe, Ye, fe) : _e === "bottom" ? le(0, Number.MAX_SAFE_INTEGER, 0, !1, fe) : _e === "top" && le(0, 0, 0, !1, fe);
    }, Z = yf(() => {
      t.container || Ie({
        top: b.value,
        left: c.value
      });
    }), Re = () => {
      Z.isDeactivated || at();
    }, He = (M) => {
      if (Z.isDeactivated) return;
      const {
        onResize: j
      } = t;
      j && j(M), at();
    }, re = (M, j) => {
      if (!t.scrollable) return;
      const {
        value: Y
      } = K;
      Y && (typeof M == "object" ? Y.scrollBy(M) : Y.scrollBy(M, j || 0));
    };
    function le(M, j, Y, ie, me) {
      const {
        value: Fe
      } = K;
      if (Fe) {
        if (ie) {
          const {
            scrollTop: _e,
            offsetHeight: fe
          } = Fe;
          if (j > _e) {
            j + Y <= _e + fe || Fe.scrollTo({
              left: M,
              top: j + Y - fe,
              behavior: me
            });
            return;
          }
        }
        Fe.scrollTo({
          left: M,
          top: j,
          behavior: me
        });
      }
    }
    function ne() {
      ur(), ue(), at();
    }
    function Xe() {
      Dt();
    }
    function Dt() {
      sr(), xt();
    }
    function sr() {
      v !== void 0 && window.clearTimeout(v), v = window.setTimeout(() => {
        F.value = !1;
      }, t.duration);
    }
    function xt() {
      I !== void 0 && window.clearTimeout(I), I = window.setTimeout(() => {
        D.value = !1;
      }, t.duration);
    }
    function ur() {
      I !== void 0 && window.clearTimeout(I), D.value = !0;
    }
    function ue() {
      v !== void 0 && window.clearTimeout(v), F.value = !0;
    }
    function be(M) {
      const {
        onScroll: j
      } = t;
      j && j(M), it();
    }
    function it() {
      const {
        value: M
      } = K;
      M && (b.value = M.scrollTop, c.value = M.scrollLeft * (a != null && a.value ? -1 : 1));
    }
    function An() {
      const {
        value: M
      } = Te;
      M && (d.value = M.offsetHeight, x.value = M.offsetWidth);
      const {
        value: j
      } = K;
      j && (m.value = j.offsetHeight, C.value = j.offsetWidth);
      const {
        value: Y
      } = f, {
        value: ie
      } = u;
      Y && (p.value = Y.offsetWidth), ie && (h.value = ie.offsetHeight);
    }
    function At() {
      const {
        value: M
      } = K;
      M && (b.value = M.scrollTop, c.value = M.scrollLeft * (a != null && a.value ? -1 : 1), m.value = M.offsetHeight, C.value = M.offsetWidth, d.value = M.scrollHeight, x.value = M.scrollWidth);
      const {
        value: j
      } = f, {
        value: Y
      } = u;
      j && (p.value = j.offsetWidth), Y && (h.value = Y.offsetHeight);
    }
    function at() {
      t.scrollable && (t.useUnifiedContainer ? At() : (An(), it()));
    }
    function _r(M) {
      var j;
      return !(!((j = o.value) === null || j === void 0) && j.contains(ln(M)));
    }
    function Fn(M) {
      M.preventDefault(), M.stopPropagation(), _ = !0, Ae("mousemove", window, fr, !0), Ae("mouseup", window, kr, !0), T = c.value, O = a != null && a.value ? window.innerWidth - M.clientX : M.clientX;
    }
    function fr(M) {
      if (!_) return;
      I !== void 0 && window.clearTimeout(I), v !== void 0 && window.clearTimeout(v);
      const {
        value: j
      } = C, {
        value: Y
      } = x, {
        value: ie
      } = z;
      if (j === null || Y === null) return;
      const Fe = (a != null && a.value ? window.innerWidth - M.clientX - O : M.clientX - O) * (Y - j) / (j - ie), _e = Y - j;
      let fe = T + Fe;
      fe = Math.min(_e, fe), fe = Math.max(fe, 0);
      const {
        value: Se
      } = K;
      if (Se) {
        Se.scrollLeft = fe * (a != null && a.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: Ye
        } = t;
        Ye && Ye(fe);
      }
    }
    function kr(M) {
      M.preventDefault(), M.stopPropagation(), ge("mousemove", window, fr, !0), ge("mouseup", window, kr, !0), _ = !1, at(), _r(M) && Dt();
    }
    function Sn(M) {
      M.preventDefault(), M.stopPropagation(), w = !0, Ae("mousemove", window, dr, !0), Ae("mouseup", window, cr, !0), B = b.value, N = M.clientY;
    }
    function dr(M) {
      if (!w) return;
      I !== void 0 && window.clearTimeout(I), v !== void 0 && window.clearTimeout(v);
      const {
        value: j
      } = m, {
        value: Y
      } = d, {
        value: ie
      } = E;
      if (j === null || Y === null) return;
      const Fe = (M.clientY - N) * (Y - j) / (j - ie), _e = Y - j;
      let fe = B + Fe;
      fe = Math.min(_e, fe), fe = Math.max(fe, 0);
      const {
        value: Se
      } = K;
      Se && (Se.scrollTop = fe);
    }
    function cr(M) {
      M.preventDefault(), M.stopPropagation(), ge("mousemove", window, dr, !0), ge("mouseup", window, cr, !0), w = !1, at(), _r(M) && Dt();
    }
    je(() => {
      const {
        value: M
      } = Pe, {
        value: j
      } = oe, {
        value: Y
      } = r, {
        value: ie
      } = f, {
        value: me
      } = u;
      ie && (M ? ie.classList.remove(`${Y}-scrollbar-rail--disabled`) : ie.classList.add(`${Y}-scrollbar-rail--disabled`)), me && (j ? me.classList.remove(`${Y}-scrollbar-rail--disabled`) : me.classList.add(`${Y}-scrollbar-rail--disabled`));
    }), ut(() => {
      t.container || at();
    }), Ue(() => {
      I !== void 0 && window.clearTimeout(I), v !== void 0 && window.clearTimeout(v), ge("mousemove", window, dr, !0), ge("mouseup", window, cr, !0);
    });
    const Ir = R(() => {
      const {
        common: {
          cubicBezierEaseInOut: M
        },
        self: {
          color: j,
          colorHover: Y,
          height: ie,
          width: me,
          borderRadius: Fe,
          railInsetHorizontalTop: _e,
          railInsetHorizontalBottom: fe,
          railInsetVerticalRight: Se,
          railInsetVerticalLeft: Ye,
          railColor: Hr
        }
      } = e.value;
      return {
        "--n-scrollbar-bezier": M,
        "--n-scrollbar-color": j,
        "--n-scrollbar-color-hover": Y,
        "--n-scrollbar-border-radius": Fe,
        "--n-scrollbar-width": me,
        "--n-scrollbar-height": ie,
        "--n-scrollbar-rail-inset-horizontal-top": _e,
        "--n-scrollbar-rail-inset-horizontal-bottom": fe,
        "--n-scrollbar-rail-inset-vertical-right": a != null && a.value ? Ui(Se) : Se,
        "--n-scrollbar-rail-inset-vertical-left": a != null && a.value ? Ui(Ye) : Ye,
        "--n-scrollbar-rail-color": Hr
      };
    }), ht = n ? nt("scrollbar", void 0, Ir, t) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Ie,
      scrollBy: re,
      sync: at,
      syncUnifiedContainer: At,
      handleMouseEnterWrapper: ne,
      handleMouseLeaveWrapper: Xe
    }), {
      mergedClsPrefix: r,
      rtlEnabled: a,
      containerScrollTop: b,
      wrapperRef: o,
      containerRef: l,
      contentRef: s,
      yRailRef: u,
      xRailRef: f,
      needYBar: oe,
      needXBar: Pe,
      yBarSizePx: A,
      xBarSizePx: P,
      yBarTopPx: te,
      xBarLeftPx: xe,
      isShowXBar: De,
      isShowYBar: Me,
      isIos: W,
      handleScroll: be,
      handleContentResize: Re,
      handleContainerResize: He,
      handleYScrollMouseDown: Sn,
      handleXScrollMouseDown: Fn,
      cssVars: n ? void 0 : Ir,
      themeClass: ht == null ? void 0 : ht.themeClass,
      onRender: ht == null ? void 0 : ht.onRender
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
    const f = this.trigger === "none", d = (C, h) => y("div", {
      ref: "yRailRef",
      class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`, `${n}-scrollbar-rail--vertical--${l}`, C],
      "data-scrollbar-rail": !0,
      style: [h || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, y(f ? Vi : It, f ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? y("div", {
        class: `${n}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), x = () => {
      var C, h;
      return (C = this.onRender) === null || C === void 0 || C.call(this), y("div", gn(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${n}-scrollbar`, this.themeClass, a && `${n}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: i ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: i ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (h = r.default) === null || h === void 0 ? void 0 : h.call(r) : y("div", {
        role: "none",
        ref: "containerRef",
        class: [`${n}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, y(Zn, {
        onResize: this.handleContentResize
      }, {
        default: () => y("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${n}-scrollbar-content`, this.contentClass]
        }, r)
      })), o ? null : d(void 0, void 0), u && y("div", {
        ref: "xRailRef",
        class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--horizontal`, `${n}-scrollbar-rail--horizontal--${s}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, y(f ? Vi : It, f ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? y("div", {
          class: `${n}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: a ? this.xBarLeftPx : void 0,
            left: a ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, m = this.container ? x() : y(Zn, {
      onResize: this.handleContainerResize
    }, {
      default: x
    });
    return o ? y(Bt, null, m, d(this.themeClass, this.cssVars)) : m;
  }
}), Fp = ul, Sp = H("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), Ep = ee({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    lr("-base-wave", Sp, we(t, "clsPrefix"));
    const r = L(null), n = L(!1);
    let i = null;
    return Ue(() => {
      i !== null && window.clearTimeout(i);
    }), {
      active: n,
      selfRef: r,
      play() {
        i !== null && (window.clearTimeout(i), n.value = !1, i = null), nn(() => {
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
    return y("div", {
      ref: "selfRef",
      "aria-hidden": !0,
      class: [`${t}-base-wave`, this.active && `${t}-base-wave--active`]
    });
  }
}), $p = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function Pp(t) {
  const {
    boxShadow2: r,
    popoverColor: n,
    textColor2: i,
    borderRadius: a,
    fontSize: o,
    dividerColor: l
  } = t;
  return Object.assign(Object.assign({}, $p), {
    fontSize: o,
    borderRadius: a,
    color: n,
    dividerColor: l,
    textColor: i,
    boxShadow: r
  });
}
const Tp = {
  name: "Popover",
  common: ct,
  self: Pp
}, Wn = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ce = "var(--n-arrow-height) * 1.414", zp = $([H("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [$(">", [H("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), qe("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [qe("scrollable", [qe("show-header-or-footer", "padding: var(--n-padding);")])]), k("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), k("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), X("scrollable, show-header-or-footer", [k("content", `
 padding: var(--n-padding);
 `)])]), H("popover-shared", `
 transform-origin: inherit;
 `, [
  H("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [H("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Ce});
 height: calc(${Ce});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
  // body transition
  $("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  $("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  $("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  $("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), We("top-start", `
 top: calc(${Ce} / -2);
 left: calc(${ot("top-start")} - var(--v-offset-left));
 `), We("top", `
 top: calc(${Ce} / -2);
 transform: translateX(calc(${Ce} / -2)) rotate(45deg);
 left: 50%;
 `), We("top-end", `
 top: calc(${Ce} / -2);
 right: calc(${ot("top-end")} + var(--v-offset-left));
 `), We("bottom-start", `
 bottom: calc(${Ce} / -2);
 left: calc(${ot("bottom-start")} - var(--v-offset-left));
 `), We("bottom", `
 bottom: calc(${Ce} / -2);
 transform: translateX(calc(${Ce} / -2)) rotate(45deg);
 left: 50%;
 `), We("bottom-end", `
 bottom: calc(${Ce} / -2);
 right: calc(${ot("bottom-end")} + var(--v-offset-left));
 `), We("left-start", `
 left: calc(${Ce} / -2);
 top: calc(${ot("left-start")} - var(--v-offset-top));
 `), We("left", `
 left: calc(${Ce} / -2);
 transform: translateY(calc(${Ce} / -2)) rotate(45deg);
 top: 50%;
 `), We("left-end", `
 left: calc(${Ce} / -2);
 bottom: calc(${ot("left-end")} + var(--v-offset-top));
 `), We("right-start", `
 right: calc(${Ce} / -2);
 top: calc(${ot("right-start")} - var(--v-offset-top));
 `), We("right", `
 right: calc(${Ce} / -2);
 transform: translateY(calc(${Ce} / -2)) rotate(45deg);
 top: 50%;
 `), We("right-end", `
 right: calc(${Ce} / -2);
 bottom: calc(${ot("right-end")} + var(--v-offset-top));
 `), ...jx({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (t, r) => {
  const n = ["right", "left"].includes(r), i = n ? "width" : "height";
  return t.map((a) => {
    const o = a.split("-")[1] === "end", s = `calc((${`var(--v-target-${i}, 0px)`} - ${Ce}) / 2)`, u = ot(a);
    return $(`[v-placement="${a}"] >`, [H("popover-shared", [X("center-arrow", [H("popover-arrow", `${r}: calc(max(${s}, ${u}) ${o ? "+" : "-"} var(--v-offset-${n ? "left" : "top"}));`)])])]);
  });
})]);
function ot(t) {
  return ["top", "bottom"].includes(t.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function We(t, r) {
  const n = t.split("-")[0], i = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return $(`[v-placement="${t}"] >`, [H("popover-shared", `
 margin-${Wn[n]}: var(--n-space);
 `, [X("show-arrow", `
 margin-${Wn[n]}: var(--n-space-arrow);
 `), X("overlap", `
 margin: 0;
 `), hu("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Wn[n]}: auto;
 ${i}
 `, [H("popover-arrow", r)])])]);
}
const fl = Object.assign(Object.assign({}, he.props), {
  to: tr.propTo,
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
function Op({
  arrowClass: t,
  arrowStyle: r,
  arrowWrapperClass: n,
  arrowWrapperStyle: i,
  clsPrefix: a
}) {
  return y("div", {
    key: "__popover-arrow__",
    style: i,
    class: [`${a}-popover-arrow-wrapper`, n]
  }, y("div", {
    class: [`${a}-popover-arrow`, t],
    style: r
  }));
}
const Mp = ee({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: fl,
  setup(t, {
    slots: r,
    attrs: n
  }) {
    const {
      namespaceRef: i,
      mergedClsPrefixRef: a,
      inlineThemeDisabled: o
    } = Ve(t), l = he("Popover", "-popover", zp, Tp, t, a), s = L(null), u = ce("NPopover"), f = L(null), d = L(t.show), x = L(!1);
    je(() => {
      const {
        show: v
      } = t;
      v && !pu() && !t.internalDeactivateImmediately && (x.value = !0);
    });
    const m = R(() => {
      const {
        trigger: v,
        onClickoutside: B
      } = t, T = [], {
        positionManuallyRef: {
          value: O
        }
      } = u;
      return O || (v === "click" && !B && T.push([Ji, w, void 0, {
        capture: !0
      }]), v === "hover" && T.push([Ou, F])), B && T.push([Ji, w, void 0, {
        capture: !0
      }]), (t.displayDirective === "show" || t.animated && x.value) && T.push([ps, t.show]), T;
    }), C = R(() => {
      const {
        common: {
          cubicBezierEaseInOut: v,
          cubicBezierEaseIn: B,
          cubicBezierEaseOut: T
        },
        self: {
          space: O,
          spaceArrow: N,
          padding: W,
          fontSize: e,
          textColor: E,
          dividerColor: A,
          color: z,
          boxShadow: P,
          borderRadius: V,
          arrowHeight: te,
          arrowOffset: J,
          arrowOffsetVertical: xe
        }
      } = l.value;
      return {
        "--n-box-shadow": P,
        "--n-bezier": v,
        "--n-bezier-ease-in": B,
        "--n-bezier-ease-out": T,
        "--n-font-size": e,
        "--n-text-color": E,
        "--n-color": z,
        "--n-divider-color": A,
        "--n-border-radius": V,
        "--n-arrow-height": te,
        "--n-arrow-offset": J,
        "--n-arrow-offset-vertical": xe,
        "--n-padding": W,
        "--n-space": O,
        "--n-space-arrow": N
      };
    }), h = R(() => {
      const v = t.width === "trigger" ? void 0 : lt(t.width), B = [];
      v && B.push({
        width: v
      });
      const {
        maxWidth: T,
        minWidth: O
      } = t;
      return T && B.push({
        maxWidth: lt(T)
      }), O && B.push({
        maxWidth: lt(O)
      }), o || B.push(C.value), B;
    }), p = o ? nt("popover", void 0, C, t) : void 0;
    u.setBodyInstance({
      syncPosition: b
    }), Ue(() => {
      u.setBodyInstance(null);
    }), ze(we(t, "show"), (v) => {
      t.animated || (v ? d.value = !0 : d.value = !1);
    });
    function b() {
      var v;
      (v = s.value) === null || v === void 0 || v.syncPosition();
    }
    function c(v) {
      t.trigger === "hover" && t.keepAliveOnHover && t.show && u.handleMouseEnter(v);
    }
    function D(v) {
      t.trigger === "hover" && t.keepAliveOnHover && u.handleMouseLeave(v);
    }
    function F(v) {
      t.trigger === "hover" && !_().contains(ln(v)) && u.handleMouseMoveOutside(v);
    }
    function w(v) {
      (t.trigger === "click" && !_().contains(ln(v)) || t.onClickoutside) && u.handleClickOutside(v);
    }
    function _() {
      return u.getTriggerElement();
    }
    Ge(po, f), Ge(ho, null), Ge(xo, null);
    function I() {
      if (p == null || p.onRender(), !(t.displayDirective === "show" || t.show || t.animated && x.value))
        return null;
      let B;
      const T = u.internalRenderBodyRef.value, {
        value: O
      } = a;
      if (T)
        B = T(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${O}-popover-shared`, p == null ? void 0 : p.themeClass.value, t.overlap && `${O}-popover-shared--overlap`, t.showArrow && `${O}-popover-shared--show-arrow`, t.arrowPointToCenter && `${O}-popover-shared--center-arrow`],
          f,
          h.value,
          c,
          D
        );
      else {
        const {
          value: N
        } = u.extraClassRef, {
          internalTrapFocus: W
        } = t, e = !Gn(r.header) || !Gn(r.footer), E = () => {
          var A, z;
          const P = e ? y(Bt, null, Qe(r.header, (J) => J ? y("div", {
            class: [`${O}-popover__header`, t.headerClass],
            style: t.headerStyle
          }, J) : null), Qe(r.default, (J) => J ? y("div", {
            class: [`${O}-popover__content`, t.contentClass],
            style: t.contentStyle
          }, r) : null), Qe(r.footer, (J) => J ? y("div", {
            class: [`${O}-popover__footer`, t.footerClass],
            style: t.footerStyle
          }, J) : null)) : t.scrollable ? (A = r.default) === null || A === void 0 ? void 0 : A.call(r) : y("div", {
            class: [`${O}-popover__content`, t.contentClass],
            style: t.contentStyle
          }, r), V = t.scrollable ? y(Fp, {
            contentClass: e ? void 0 : `${O}-popover__content ${(z = t.contentClass) !== null && z !== void 0 ? z : ""}`,
            contentStyle: e ? void 0 : t.contentStyle
          }, {
            default: () => P
          }) : P, te = t.showArrow ? Op({
            arrowClass: t.arrowClass,
            arrowStyle: t.arrowStyle,
            arrowWrapperClass: t.arrowWrapperClass,
            arrowWrapperStyle: t.arrowWrapperStyle,
            clsPrefix: O
          }) : null;
          return [V, te];
        };
        B = y("div", gn({
          class: [`${O}-popover`, `${O}-popover-shared`, p == null ? void 0 : p.themeClass.value, N.map((A) => `${O}-${A}`), {
            [`${O}-popover--scrollable`]: t.scrollable,
            [`${O}-popover--show-header-or-footer`]: e,
            [`${O}-popover--raw`]: t.raw,
            [`${O}-popover-shared--overlap`]: t.overlap,
            [`${O}-popover-shared--show-arrow`]: t.showArrow,
            [`${O}-popover-shared--center-arrow`]: t.arrowPointToCenter
          }],
          ref: f,
          style: h.value,
          onKeydown: u.handleKeydown,
          onMouseenter: c,
          onMouseleave: D
        }, n), W ? y(Cf, {
          active: t.show,
          autoFocus: !0
        }, {
          default: E
        }) : E());
      }
      return mn(B, m.value);
    }
    return {
      displayed: x,
      namespace: i,
      isMounted: u.isMountedRef,
      zIndex: u.zIndexRef,
      followerRef: s,
      adjustedTo: tr(t),
      followerEnabled: d,
      renderContentNode: I
    };
  },
  render() {
    return y(Yu, {
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
      teleportDisabled: this.adjustedTo === tr.tdkey
    }, {
      default: () => this.animated ? y(It, {
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
}), Rp = Object.keys(fl), _p = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function kp(t, r, n) {
  _p[r].forEach((i) => {
    t.props ? t.props = Object.assign({}, t.props) : t.props = {};
    const a = t.props[i], o = n[i];
    a ? t.props[i] = (...l) => {
      a(...l), o(...l);
    } : t.props[i] = o;
  });
}
const Ip = {
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
  to: tr.propTo,
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
}, Hp = Object.assign(Object.assign(Object.assign({}, he.props), Ip), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), Wp = ee({
  name: "Popover",
  inheritAttrs: !1,
  props: Hp,
  __popover__: !0,
  setup(t) {
    process.env.NODE_ENV !== "production" && je(() => {
      t.maxWidth !== void 0 && gt("popover", "`max-width` is deprecated, please use `style` instead."), t.minWidth !== void 0 && gt("popover", "`min-width` is deprecated, please use `style` instead."), t.arrow !== void 0 && gt("popover", "`arrow` is deprecated, please use `showArrow` instead."), t.onHide !== void 0 && gt("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), t.onShow !== void 0 && gt("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const r = mi(), n = L(null), i = R(() => t.show), a = L(t.defaultShow), o = fo(i, a), l = tt(() => t.disabled ? !1 : o.value), s = () => {
      if (t.disabled) return !0;
      const {
        getDisabled: A
      } = t;
      return !!(A != null && A());
    }, u = () => s() ? !1 : o.value, f = co(t, ["arrow", "showArrow"]), d = R(() => t.overlap ? !1 : f.value);
    let x = null;
    const m = L(null), C = L(null), h = tt(() => t.x !== void 0 && t.y !== void 0);
    function p(A) {
      const {
        "onUpdate:show": z,
        onUpdateShow: P,
        onShow: V,
        onHide: te
      } = t;
      a.value = A, z && ve(z, A), P && ve(P, A), A && V && ve(V, !0), A && te && ve(te, !1);
    }
    function b() {
      x && x.syncPosition();
    }
    function c() {
      const {
        value: A
      } = m;
      A && (window.clearTimeout(A), m.value = null);
    }
    function D() {
      const {
        value: A
      } = C;
      A && (window.clearTimeout(A), C.value = null);
    }
    function F() {
      const A = s();
      if (t.trigger === "focus" && !A) {
        if (u()) return;
        p(!0);
      }
    }
    function w() {
      const A = s();
      if (t.trigger === "focus" && !A) {
        if (!u()) return;
        p(!1);
      }
    }
    function _() {
      const A = s();
      if (t.trigger === "hover" && !A) {
        if (D(), m.value !== null || u()) return;
        const z = () => {
          p(!0), m.value = null;
        }, {
          delay: P
        } = t;
        P === 0 ? z() : m.value = window.setTimeout(z, P);
      }
    }
    function I() {
      const A = s();
      if (t.trigger === "hover" && !A) {
        if (c(), C.value !== null || !u()) return;
        const z = () => {
          p(!1), C.value = null;
        }, {
          duration: P
        } = t;
        P === 0 ? z() : C.value = window.setTimeout(z, P);
      }
    }
    function v() {
      I();
    }
    function B(A) {
      var z;
      u() && (t.trigger === "click" && (c(), D(), p(!1)), (z = t.onClickoutside) === null || z === void 0 || z.call(t, A));
    }
    function T() {
      if (t.trigger === "click" && !s()) {
        c(), D();
        const A = !u();
        p(A);
      }
    }
    function O(A) {
      t.internalTrapFocus && A.key === "Escape" && (c(), D(), p(!1));
    }
    function N(A) {
      a.value = A;
    }
    function W() {
      var A;
      return (A = n.value) === null || A === void 0 ? void 0 : A.targetRef;
    }
    function e(A) {
      x = A;
    }
    return Ge("NPopover", {
      getTriggerElement: W,
      handleKeydown: O,
      handleMouseEnter: _,
      handleMouseLeave: I,
      handleClickOutside: B,
      handleMouseMoveOutside: v,
      setBodyInstance: e,
      positionManuallyRef: h,
      isMountedRef: r,
      zIndexRef: we(t, "zIndex"),
      extraClassRef: we(t, "internalExtraClass"),
      internalRenderBodyRef: we(t, "internalRenderBody")
    }), je(() => {
      o.value && s() && p(!1);
    }), {
      binderInstRef: n,
      positionManually: h,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: a,
      mergedShowArrow: d,
      getMergedShow: u,
      setShow: N,
      handleClick: T,
      handleMouseEnter: _,
      handleMouseLeave: I,
      handleFocus: F,
      handleBlur: w,
      syncPosition: b
    };
  },
  render() {
    var t;
    const {
      positionManually: r,
      $slots: n
    } = this;
    let i, a = !1;
    if (!r && (n.activator ? i = Ni(n, "activator") : i = Ni(n, "trigger"), i)) {
      i = vs(i), i = i.type === ms ? y("span", [i]) : i;
      const o = {
        onClick: this.handleClick,
        onMouseenter: this.handleMouseEnter,
        onMouseleave: this.handleMouseLeave,
        onFocus: this.handleFocus,
        onBlur: this.handleBlur
      };
      if (!((t = i.type) === null || t === void 0) && t.__popover__)
        a = !0, i.props || (i.props = {
          internalSyncTargetWithParent: !0,
          internalInheritedEventHandlers: []
        }), i.props.internalSyncTargetWithParent = !0, i.props.internalInheritedEventHandlers ? i.props.internalInheritedEventHandlers = [o, ...i.props.internalInheritedEventHandlers] : i.props.internalInheritedEventHandlers = [o];
      else {
        const {
          internalInheritedEventHandlers: l
        } = this, s = [o, ...l], u = {
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
        kp(i, l ? "nested" : r ? "manual" : this.trigger, u);
      }
    }
    return y(Tu, {
      ref: "binderInstRef",
      syncTarget: !a,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const o = this.getMergedShow();
        return [this.internalTrapFocus && o ? mn(y("div", {
          style: {
            position: "fixed",
            inset: 0
          }
        }), [[bo, {
          enabled: o,
          zIndex: this.zIndex
        }]]) : null, r ? null : y(zu, null, {
          default: () => i
        }), y(Mp, js(this.$props, Rp, Object.assign(Object.assign({}, this.$attrs), {
          showArrow: this.mergedShowArrow,
          show: o
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
}), Lp = H("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [$(">", [k("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [$("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), $("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), k("placeholder", `
 display: flex;
 `), k("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [pn({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), si = ee({
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
    return lr("-base-clear", Lp, we(t, "clsPrefix")), {
      handleMouseDown(r) {
        r.preventDefault();
      }
    };
  },
  render() {
    const {
      clsPrefix: t
    } = this;
    return y("div", {
      class: `${t}-base-clear`
    }, y(zi, null, {
      default: () => {
        var r, n;
        return this.show ? y("div", {
          key: "dismiss",
          class: `${t}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, yr(this.$slots.icon, () => [y(hn, {
          clsPrefix: t
        }, {
          default: () => y(xp, null)
        })])) : y("div", {
          key: "icon",
          class: `${t}-base-clear__placeholder`
        }, (n = (r = this.$slots).placeholder) === null || n === void 0 ? void 0 : n.call(r));
      }
    }));
  }
}), jp = ee({
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
      return y(Oi, {
        clsPrefix: n,
        class: `${n}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: t.loading
      }, {
        default: () => t.showArrow ? y(si, {
          clsPrefix: n,
          show: t.showClear,
          onClear: t.onClear
        }, {
          placeholder: () => y(hn, {
            clsPrefix: n,
            class: `${n}-base-suffix__arrow`
          }, {
            default: () => yr(r.default, () => [y(cp, null)])
          })
        }) : null
      });
    };
  }
}), {
  cubicBezierEaseInOut: vt
} = or;
function Np({
  duration: t = ".2s",
  delay: r = ".1s"
} = {}) {
  return [$("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", {
    opacity: 1
  }), $("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), $("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${t} ${vt},
 max-width ${t} ${vt} ${r},
 margin-left ${t} ${vt} ${r},
 margin-right ${t} ${vt} ${r};
 `), $("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${t} ${vt} ${r},
 max-width ${t} ${vt},
 margin-left ${t} ${vt},
 margin-right ${t} ${vt};
 `)];
}
const Vp = Cn && "chrome" in window;
Cn && navigator.userAgent.includes("Firefox");
const dl = Cn && navigator.userAgent.includes("Safari") && !Vp, qp = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function Gp(t) {
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
    warningColorHover: d,
    errorColor: x,
    errorColorHover: m,
    borderRadius: C,
    lineHeight: h,
    fontSizeTiny: p,
    fontSizeSmall: b,
    fontSizeMedium: c,
    fontSizeLarge: D,
    heightTiny: F,
    heightSmall: w,
    heightMedium: _,
    heightLarge: I,
    actionColor: v,
    clearColor: B,
    clearColorHover: T,
    clearColorPressed: O,
    placeholderColor: N,
    placeholderColorDisabled: W,
    iconColor: e,
    iconColorDisabled: E,
    iconColorHover: A,
    iconColorPressed: z
  } = t;
  return Object.assign(Object.assign({}, qp), {
    countTextColorDisabled: i,
    countTextColor: n,
    heightTiny: F,
    heightSmall: w,
    heightMedium: _,
    heightLarge: I,
    fontSizeTiny: p,
    fontSizeSmall: b,
    fontSizeMedium: c,
    fontSizeLarge: D,
    lineHeight: h,
    lineHeightTextarea: h,
    borderRadius: C,
    iconSize: "16px",
    groupLabelColor: v,
    groupLabelTextColor: r,
    textColor: r,
    textColorDisabled: i,
    textDecorationColor: r,
    caretColor: a,
    placeholderColor: N,
    placeholderColorDisabled: W,
    color: l,
    colorDisabled: s,
    colorFocus: l,
    groupLabelBorder: `1px solid ${u}`,
    border: `1px solid ${u}`,
    borderHover: `1px solid ${o}`,
    borderDisabled: `1px solid ${u}`,
    borderFocus: `1px solid ${o}`,
    boxShadowFocus: `0 0 0 2px ${Ot(a, {
      alpha: 0.2
    })}`,
    loadingColor: a,
    // warning
    loadingColorWarning: f,
    borderWarning: `1px solid ${f}`,
    borderHoverWarning: `1px solid ${d}`,
    colorFocusWarning: l,
    borderFocusWarning: `1px solid ${d}`,
    boxShadowFocusWarning: `0 0 0 2px ${Ot(f, {
      alpha: 0.2
    })}`,
    caretColorWarning: f,
    // error
    loadingColorError: x,
    borderError: `1px solid ${x}`,
    borderHoverError: `1px solid ${m}`,
    colorFocusError: l,
    borderFocusError: `1px solid ${m}`,
    boxShadowFocusError: `0 0 0 2px ${Ot(x, {
      alpha: 0.2
    })}`,
    caretColorError: x,
    clearColor: B,
    clearColorHover: T,
    clearColorPressed: O,
    iconColor: e,
    iconColorDisabled: E,
    iconColorHover: A,
    iconColorPressed: z,
    suffixTextColor: r
  });
}
const cl = {
  name: "Input",
  common: ct,
  self: Gp
}, xl = "n-input";
function Up(t) {
  let r = 0;
  for (const n of t)
    r++;
  return r;
}
function Zr(t) {
  return t === "" || t == null;
}
function Xp(t) {
  const r = L(null);
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
      beforeText: d,
      afterText: x
    } = l;
    let m = u.length;
    if (u.endsWith(x))
      m = u.length - x.length;
    else if (u.startsWith(d))
      m = d.length;
    else {
      const C = d[f - 1], h = u.indexOf(C, f - 1);
      h !== -1 && (m = h + 1);
    }
    (o = s.setSelectionRange) === null || o === void 0 || o.call(s, m, m);
  }
  function a() {
    r.value = null;
  }
  return ze(t, a), {
    recordCursor: n,
    restoreCursor: i
  };
}
const ja = ee({
  name: "InputWordCount",
  setup(t, {
    slots: r
  }) {
    const {
      mergedValueRef: n,
      maxlengthRef: i,
      mergedClsPrefixRef: a,
      countGraphemesRef: o
    } = ce(xl), l = R(() => {
      const {
        value: s
      } = n;
      return s === null || Array.isArray(s) ? 0 : (o.value || Up)(s);
    });
    return () => {
      const {
        value: s
      } = i, {
        value: u
      } = n;
      return y("span", {
        class: `${a.value}-input-word-count`
      }, Ns(r.default, {
        value: u === null || Array.isArray(u) ? "" : u
      }, () => [s === void 0 ? l.value : `${l.value} / ${s}`]));
    };
  }
}), Yp = H("input", `
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
 `, [$("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), $("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), $("&:-webkit-autofill ~", [k("placeholder", "display: none;")])]),
  X("round", [qe("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  k("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [$("span", `
 width: 100%;
 display: inline-block;
 `)]),
  X("textarea", [k("placeholder", "overflow: visible;")]),
  qe("autosize", "width: 100%;"),
  X("autosize", [k("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  H("input-wrapper", `
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
 `, [$("&[type=password]::-ms-reveal", "display: none;"), $("+", [k("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  qe("textarea", [k("placeholder", "white-space: nowrap;")]),
  k("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  X("textarea", "width: 100%;", [H("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), X("resizable", [H("input-wrapper", `
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
  X("pair", [k("input-el, placeholder", "text-align: center;"), k("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [H("icon", `
 color: var(--n-icon-color);
 `), H("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  X("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [k("border", "border: var(--n-border-disabled);"), k("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), k("placeholder", "color: var(--n-placeholder-color-disabled);"), k("separator", "color: var(--n-text-color-disabled);", [H("icon", `
 color: var(--n-icon-color-disabled);
 `), H("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), H("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), k("suffix, prefix", "color: var(--n-text-color-disabled);", [H("icon", `
 color: var(--n-icon-color-disabled);
 `), H("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  qe("disabled", [k("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [$("&:hover", `
 color: var(--n-icon-color-hover);
 `), $("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), $("&:hover", [k("state-border", "border: var(--n-border-hover);")]), X("focus", "background-color: var(--n-color-focus);", [k("state-border", `
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
 `, [H("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), H("base-clear", `
 font-size: var(--n-icon-size);
 `, [k("placeholder", [H("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), $(">", [H("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), H("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  H("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((t) => X(`${t}-status`, [qe("disabled", [H("base-loading", `
 color: var(--n-loading-color-${t})
 `), k("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${t});
 `), k("state-border", `
 border: var(--n-border-${t});
 `), $("&:hover", [k("state-border", `
 border: var(--n-border-hover-${t});
 `)]), $("&:focus", `
 background-color: var(--n-color-focus-${t});
 `, [k("state-border", `
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]), X("focus", `
 background-color: var(--n-color-focus-${t});
 `, [k("state-border", `
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))
]), Kp = H("input", [X("disabled", [k("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]), Zp = Object.assign(Object.assign({}, he.props), {
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
}), Jp = ee({
  name: "Input",
  props: Zp,
  setup(t) {
    process.env.NODE_ENV !== "production" && je(() => {
      t.showPasswordToggle && gt("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: r,
      mergedBorderedRef: n,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ve(t), o = he("Input", "-input", Yp, cl, t, r);
    dl && lr("-input-safari", Kp, r);
    const l = L(null), s = L(null), u = L(null), f = L(null), d = L(null), x = L(null), m = L(null), C = Xp(m), h = L(null), {
      localeRef: p
    } = sp("Input"), b = L(t.defaultValue), c = we(t, "value"), D = fo(c, b), F = Po(t), {
      mergedSizeRef: w,
      mergedDisabledRef: _,
      mergedStatusRef: I
    } = F, v = L(!1), B = L(!1), T = L(!1), O = L(!1);
    let N = null;
    const W = R(() => {
      const {
        placeholder: g,
        pair: S
      } = t;
      return S ? Array.isArray(g) ? g : g === void 0 ? ["", ""] : [g, g] : g === void 0 ? [p.value.placeholder] : [g];
    }), e = R(() => {
      const {
        value: g
      } = T, {
        value: S
      } = D, {
        value: U
      } = W;
      return !g && (Zr(S) || Array.isArray(S) && Zr(S[0])) && U[0];
    }), E = R(() => {
      const {
        value: g
      } = T, {
        value: S
      } = D, {
        value: U
      } = W;
      return !g && U[1] && (Zr(S) || Array.isArray(S) && Zr(S[1]));
    }), A = tt(() => t.internalForceFocus || v.value), z = tt(() => {
      if (_.value || t.readonly || !t.clearable || !A.value && !B.value)
        return !1;
      const {
        value: g
      } = D, {
        value: S
      } = A;
      return t.pair ? !!(Array.isArray(g) && (g[0] || g[1])) && (B.value || S) : !!g && (B.value || S);
    }), P = R(() => {
      const {
        showPasswordOn: g
      } = t;
      if (g)
        return g;
      if (t.showPasswordToggle) return "click";
    }), V = L(!1), te = R(() => {
      const {
        textDecoration: g
      } = t;
      return g ? Array.isArray(g) ? g.map((S) => ({
        textDecoration: S
      })) : [{
        textDecoration: g
      }] : ["", ""];
    }), J = L(void 0), xe = () => {
      var g, S;
      if (t.type === "textarea") {
        const {
          autosize: U
        } = t;
        if (U && (J.value = (S = (g = h.value) === null || g === void 0 ? void 0 : g.$el) === null || S === void 0 ? void 0 : S.offsetWidth), !s.value || typeof U == "boolean") return;
        const {
          paddingTop: se,
          paddingBottom: pe,
          lineHeight: ae
        } = window.getComputedStyle(s.value), Ft = Number(se.slice(0, -2)), St = Number(pe.slice(0, -2)), Et = Number(ae.slice(0, -2)), {
          value: xr
        } = u;
        if (!xr) return;
        if (U.minRows) {
          const hr = Math.max(U.minRows, 1), En = `${Ft + St + Et * hr}px`;
          xr.style.minHeight = En;
        }
        if (U.maxRows) {
          const hr = `${Ft + St + Et * U.maxRows}px`;
          xr.style.maxHeight = hr;
        }
      }
    }, oe = R(() => {
      const {
        maxlength: g
      } = t;
      return g === void 0 ? void 0 : Number(g);
    });
    ut(() => {
      const {
        value: g
      } = D;
      Array.isArray(g) || Se(g);
    });
    const Pe = vn().proxy;
    function De(g, S) {
      const {
        onUpdateValue: U,
        "onUpdate:value": se,
        onInput: pe
      } = t, {
        nTriggerFormInput: ae
      } = F;
      U && ve(U, g, S), se && ve(se, g, S), pe && ve(pe, g, S), b.value = g, ae();
    }
    function Me(g, S) {
      const {
        onChange: U
      } = t, {
        nTriggerFormChange: se
      } = F;
      U && ve(U, g, S), b.value = g, se();
    }
    function K(g) {
      const {
        onBlur: S
      } = t, {
        nTriggerFormBlur: U
      } = F;
      S && ve(S, g), U();
    }
    function Te(g) {
      const {
        onFocus: S
      } = t, {
        nTriggerFormFocus: U
      } = F;
      S && ve(S, g), U();
    }
    function Ie(g) {
      const {
        onClear: S
      } = t;
      S && ve(S, g);
    }
    function Z(g) {
      const {
        onInputBlur: S
      } = t;
      S && ve(S, g);
    }
    function Re(g) {
      const {
        onInputFocus: S
      } = t;
      S && ve(S, g);
    }
    function He() {
      const {
        onDeactivate: g
      } = t;
      g && ve(g);
    }
    function re() {
      const {
        onActivate: g
      } = t;
      g && ve(g);
    }
    function le(g) {
      const {
        onClick: S
      } = t;
      S && ve(S, g);
    }
    function ne(g) {
      const {
        onWrapperFocus: S
      } = t;
      S && ve(S, g);
    }
    function Xe(g) {
      const {
        onWrapperBlur: S
      } = t;
      S && ve(S, g);
    }
    function Dt() {
      T.value = !0;
    }
    function sr(g) {
      T.value = !1, g.target === x.value ? xt(g, 1) : xt(g, 0);
    }
    function xt(g, S = 0, U = "input") {
      const se = g.target.value;
      if (Se(se), g instanceof InputEvent && !g.isComposing && (T.value = !1), t.type === "textarea") {
        const {
          value: ae
        } = h;
        ae && ae.syncUnifiedContainer();
      }
      if (N = se, T.value) return;
      C.recordCursor();
      const pe = ur(se);
      if (pe)
        if (!t.pair)
          U === "input" ? De(se, {
            source: S
          }) : Me(se, {
            source: S
          });
        else {
          let {
            value: ae
          } = D;
          Array.isArray(ae) ? ae = [ae[0], ae[1]] : ae = ["", ""], ae[S] = se, U === "input" ? De(ae, {
            source: S
          }) : Me(ae, {
            source: S
          });
        }
      Pe.$forceUpdate(), pe || nn(C.restoreCursor);
    }
    function ur(g) {
      const {
        countGraphemes: S,
        maxlength: U,
        minlength: se
      } = t;
      if (S) {
        let ae;
        if (U !== void 0 && (ae === void 0 && (ae = S(g)), ae > Number(U)) || se !== void 0 && (ae === void 0 && (ae = S(g)), ae < Number(U)))
          return !1;
      }
      const {
        allowInput: pe
      } = t;
      return typeof pe == "function" ? pe(g) : !0;
    }
    function ue(g) {
      Z(g), g.relatedTarget === l.value && He(), g.relatedTarget !== null && (g.relatedTarget === d.value || g.relatedTarget === x.value || g.relatedTarget === s.value) || (O.value = !1), At(g, "blur"), m.value = null;
    }
    function be(g, S) {
      Re(g), v.value = !0, O.value = !0, re(), At(g, "focus"), S === 0 ? m.value = d.value : S === 1 ? m.value = x.value : S === 2 && (m.value = s.value);
    }
    function it(g) {
      t.passivelyActivated && (Xe(g), At(g, "blur"));
    }
    function An(g) {
      t.passivelyActivated && (v.value = !0, ne(g), At(g, "focus"));
    }
    function At(g, S) {
      g.relatedTarget !== null && (g.relatedTarget === d.value || g.relatedTarget === x.value || g.relatedTarget === s.value || g.relatedTarget === l.value) || (S === "focus" ? (Te(g), v.value = !0) : S === "blur" && (K(g), v.value = !1));
    }
    function at(g, S) {
      xt(g, S, "change");
    }
    function _r(g) {
      le(g);
    }
    function Fn(g) {
      Ie(g), fr();
    }
    function fr() {
      t.pair ? (De(["", ""], {
        source: "clear"
      }), Me(["", ""], {
        source: "clear"
      })) : (De("", {
        source: "clear"
      }), Me("", {
        source: "clear"
      }));
    }
    function kr(g) {
      const {
        onMousedown: S
      } = t;
      S && S(g);
      const {
        tagName: U
      } = g.target;
      if (U !== "INPUT" && U !== "TEXTAREA") {
        if (t.resizable) {
          const {
            value: se
          } = l;
          if (se) {
            const {
              left: pe,
              top: ae,
              width: Ft,
              height: St
            } = se.getBoundingClientRect(), Et = 14;
            if (pe + Ft - Et < g.clientX && g.clientX < pe + Ft && ae + St - Et < g.clientY && g.clientY < ae + St)
              return;
          }
        }
        g.preventDefault(), v.value || Y();
      }
    }
    function Sn() {
      var g;
      B.value = !0, t.type === "textarea" && ((g = h.value) === null || g === void 0 || g.handleMouseEnterWrapper());
    }
    function dr() {
      var g;
      B.value = !1, t.type === "textarea" && ((g = h.value) === null || g === void 0 || g.handleMouseLeaveWrapper());
    }
    function cr() {
      _.value || P.value === "click" && (V.value = !V.value);
    }
    function Ir(g) {
      if (_.value) return;
      g.preventDefault();
      const S = (se) => {
        se.preventDefault(), ge("mouseup", document, S);
      };
      if (Ae("mouseup", document, S), P.value !== "mousedown") return;
      V.value = !0;
      const U = () => {
        V.value = !1, ge("mouseup", document, U);
      };
      Ae("mouseup", document, U);
    }
    function ht(g) {
      t.onKeyup && ve(t.onKeyup, g);
    }
    function Mi(g) {
      switch (t.onKeydown && ve(t.onKeydown, g), g.key) {
        case "Escape":
          j();
          break;
        case "Enter":
          M(g);
          break;
      }
    }
    function M(g) {
      var S, U;
      if (t.passivelyActivated) {
        const {
          value: se
        } = O;
        if (se) {
          t.internalDeactivateOnEnter && j();
          return;
        }
        g.preventDefault(), t.type === "textarea" ? (S = s.value) === null || S === void 0 || S.focus() : (U = d.value) === null || U === void 0 || U.focus();
      }
    }
    function j() {
      t.passivelyActivated && (O.value = !1, nn(() => {
        var g;
        (g = l.value) === null || g === void 0 || g.focus();
      }));
    }
    function Y() {
      var g, S, U;
      _.value || (t.passivelyActivated ? (g = l.value) === null || g === void 0 || g.focus() : ((S = s.value) === null || S === void 0 || S.focus(), (U = d.value) === null || U === void 0 || U.focus()));
    }
    function ie() {
      var g;
      !((g = l.value) === null || g === void 0) && g.contains(document.activeElement) && document.activeElement.blur();
    }
    function me() {
      var g, S;
      (g = s.value) === null || g === void 0 || g.select(), (S = d.value) === null || S === void 0 || S.select();
    }
    function Fe() {
      _.value || (s.value ? s.value.focus() : d.value && d.value.focus());
    }
    function _e() {
      const {
        value: g
      } = l;
      g != null && g.contains(document.activeElement) && g !== document.activeElement && j();
    }
    function fe(g) {
      if (t.type === "textarea") {
        const {
          value: S
        } = s;
        S == null || S.scrollTo(g);
      } else {
        const {
          value: S
        } = d;
        S == null || S.scrollTo(g);
      }
    }
    function Se(g) {
      const {
        type: S,
        pair: U,
        autosize: se
      } = t;
      if (!U && se)
        if (S === "textarea") {
          const {
            value: pe
          } = u;
          pe && (pe.textContent = `${g ?? ""}\r
`);
        } else {
          const {
            value: pe
          } = f;
          pe && (g ? pe.textContent = g : pe.innerHTML = "&nbsp;");
        }
    }
    function Ye() {
      xe();
    }
    const Hr = L({
      top: "0"
    });
    function Bl(g) {
      var S;
      const {
        scrollTop: U
      } = g.target;
      Hr.value.top = `${-U}px`, (S = h.value) === null || S === void 0 || S.syncUnifiedContainer();
    }
    let Wr = null;
    je(() => {
      const {
        autosize: g,
        type: S
      } = t;
      g && S === "textarea" ? Wr = ze(D, (U) => {
        !Array.isArray(U) && U !== N && Se(U);
      }) : Wr == null || Wr();
    });
    let Lr = null;
    je(() => {
      t.type === "textarea" ? Lr = ze(D, (g) => {
        var S;
        !Array.isArray(g) && g !== N && ((S = h.value) === null || S === void 0 || S.syncUnifiedContainer());
      }) : Lr == null || Lr();
    }), Ge(xl, {
      mergedValueRef: D,
      maxlengthRef: oe,
      mergedClsPrefixRef: r,
      countGraphemesRef: we(t, "countGraphemes")
    });
    const wl = {
      wrapperElRef: l,
      inputElRef: d,
      textareaElRef: s,
      isCompositing: T,
      clear: fr,
      focus: Y,
      blur: ie,
      select: me,
      deactivate: _e,
      activate: Fe,
      scrollTo: fe
    }, Dl = Dn("Input", a, r), Ri = R(() => {
      const {
        value: g
      } = w, {
        common: {
          cubicBezierEaseInOut: S
        },
        self: {
          color: U,
          borderRadius: se,
          textColor: pe,
          caretColor: ae,
          caretColorError: Ft,
          caretColorWarning: St,
          textDecorationColor: Et,
          border: xr,
          borderDisabled: hr,
          borderHover: En,
          borderFocus: Al,
          placeholderColor: Fl,
          placeholderColorDisabled: Sl,
          lineHeightTextarea: El,
          colorDisabled: $l,
          colorFocus: Pl,
          textColorDisabled: Tl,
          boxShadowFocus: zl,
          iconSize: Ol,
          colorFocusWarning: Ml,
          boxShadowFocusWarning: Rl,
          borderWarning: _l,
          borderFocusWarning: kl,
          borderHoverWarning: Il,
          colorFocusError: Hl,
          boxShadowFocusError: Wl,
          borderError: Ll,
          borderFocusError: jl,
          borderHoverError: Nl,
          clearSize: Vl,
          clearColor: ql,
          clearColorHover: Gl,
          clearColorPressed: Ul,
          iconColor: Xl,
          iconColorDisabled: Yl,
          suffixTextColor: Kl,
          countTextColor: Zl,
          countTextColorDisabled: Jl,
          iconColorHover: Ql,
          iconColorPressed: es,
          loadingColor: ts,
          loadingColorError: rs,
          loadingColorWarning: ns,
          [G("padding", g)]: is,
          [G("fontSize", g)]: as,
          [G("height", g)]: os
        }
      } = o.value, {
        left: ls,
        right: ss
      } = to(is);
      return {
        "--n-bezier": S,
        "--n-count-text-color": Zl,
        "--n-count-text-color-disabled": Jl,
        "--n-color": U,
        "--n-font-size": as,
        "--n-border-radius": se,
        "--n-height": os,
        "--n-padding-left": ls,
        "--n-padding-right": ss,
        "--n-text-color": pe,
        "--n-caret-color": ae,
        "--n-text-decoration-color": Et,
        "--n-border": xr,
        "--n-border-disabled": hr,
        "--n-border-hover": En,
        "--n-border-focus": Al,
        "--n-placeholder-color": Fl,
        "--n-placeholder-color-disabled": Sl,
        "--n-icon-size": Ol,
        "--n-line-height-textarea": El,
        "--n-color-disabled": $l,
        "--n-color-focus": Pl,
        "--n-text-color-disabled": Tl,
        "--n-box-shadow-focus": zl,
        "--n-loading-color": ts,
        // form warning
        "--n-caret-color-warning": St,
        "--n-color-focus-warning": Ml,
        "--n-box-shadow-focus-warning": Rl,
        "--n-border-warning": _l,
        "--n-border-focus-warning": kl,
        "--n-border-hover-warning": Il,
        "--n-loading-color-warning": ns,
        // form error
        "--n-caret-color-error": Ft,
        "--n-color-focus-error": Hl,
        "--n-box-shadow-focus-error": Wl,
        "--n-border-error": Ll,
        "--n-border-focus-error": jl,
        "--n-border-hover-error": Nl,
        "--n-loading-color-error": rs,
        // clear-button
        "--n-clear-color": ql,
        "--n-clear-size": Vl,
        "--n-clear-color-hover": Gl,
        "--n-clear-color-pressed": Ul,
        "--n-icon-color": Xl,
        "--n-icon-color-hover": Ql,
        "--n-icon-color-pressed": es,
        "--n-icon-color-disabled": Yl,
        "--n-suffix-text-color": Kl
      };
    }), Vt = i ? nt("input", R(() => {
      const {
        value: g
      } = w;
      return g[0];
    }), Ri, t) : void 0;
    return Object.assign(Object.assign({}, wl), {
      // DOM ref
      wrapperElRef: l,
      inputElRef: d,
      inputMirrorElRef: f,
      inputEl2Ref: x,
      textareaElRef: s,
      textareaMirrorElRef: u,
      textareaScrollbarInstRef: h,
      // value
      rtlEnabled: Dl,
      uncontrolledValue: b,
      mergedValue: D,
      passwordVisible: V,
      mergedPlaceholder: W,
      showPlaceholder1: e,
      showPlaceholder2: E,
      mergedFocus: A,
      isComposing: T,
      activated: O,
      showClearButton: z,
      mergedSize: w,
      mergedDisabled: _,
      textDecorationStyle: te,
      mergedClsPrefix: r,
      mergedBordered: n,
      mergedShowPasswordOn: P,
      placeholderStyle: Hr,
      mergedStatus: I,
      textAreaScrollContainerWidth: J,
      // methods
      handleTextAreaScroll: Bl,
      handleCompositionStart: Dt,
      handleCompositionEnd: sr,
      handleInput: xt,
      handleInputBlur: ue,
      handleInputFocus: be,
      handleWrapperBlur: it,
      handleWrapperFocus: An,
      handleMouseEnter: Sn,
      handleMouseLeave: dr,
      handleMouseDown: kr,
      handleChange: at,
      handleClick: _r,
      handleClear: Fn,
      handlePasswordToggleClick: cr,
      handlePasswordToggleMousedown: Ir,
      handleWrapperKeydown: Mi,
      handleWrapperKeyup: ht,
      handleTextAreaMirrorResize: Ye,
      getTextareaScrollContainer: () => s.value,
      mergedTheme: o,
      cssVars: i ? void 0 : Ri,
      themeClass: Vt == null ? void 0 : Vt.themeClass,
      onRender: Vt == null ? void 0 : Vt.onRender
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
    return s == null || s(), y("div", {
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
    }, y("div", {
      class: `${n}-input-wrapper`
    }, Qe(u.prefix, (f) => f && y("div", {
      class: `${n}-input__prefix`
    }, f)), o === "textarea" ? y(ul, {
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
          textAreaScrollContainerWidth: x
        } = this, m = {
          width: this.autosize && x && `${x}px`
        };
        return y(Bt, null, y("textarea", Object.assign({}, this.inputProps, {
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
          style: [this.textDecorationStyle[0], (d = this.inputProps) === null || d === void 0 ? void 0 : d.style, m],
          onBlur: this.handleInputBlur,
          onFocus: (C) => {
            this.handleInputFocus(C, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? y("div", {
          class: `${n}-input__placeholder`,
          style: [this.placeholderStyle, m],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? y(Zn, {
          onResize: this.handleTextAreaMirrorResize
        }, {
          default: () => y("div", {
            ref: "textareaMirrorElRef",
            class: `${n}-input__textarea-mirror`,
            key: "mirror"
          })
        }) : null);
      }
    }) : y("div", {
      class: `${n}-input__input`
    }, y("input", Object.assign({
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
    })), this.showPlaceholder1 ? y("div", {
      class: `${n}-input__placeholder`
    }, y("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? y("div", {
      class: `${n}-input__input-mirror`,
      key: "mirror",
      ref: "inputMirrorElRef"
    }, " ") : null), !this.pair && Qe(u.suffix, (f) => f || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? y("div", {
      class: `${n}-input__suffix`
    }, [Qe(u["clear-icon-placeholder"], (d) => (this.clearable || d) && y(si, {
      clsPrefix: n,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => d,
      icon: () => {
        var x, m;
        return (m = (x = this.$slots)["clear-icon"]) === null || m === void 0 ? void 0 : m.call(x);
      }
    })), this.internalLoadingBeforeSuffix ? null : f, this.loading !== void 0 ? y(jp, {
      clsPrefix: n,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? f : null, this.showCount && this.type !== "textarea" ? y(ja, null, {
      default: (d) => {
        var x;
        return (x = u.count) === null || x === void 0 ? void 0 : x.call(u, d);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? y("div", {
      class: `${n}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? yr(u["password-visible-icon"], () => [y(hn, {
      clsPrefix: n
    }, {
      default: () => y(fp, null)
    })]) : yr(u["password-invisible-icon"], () => [y(hn, {
      clsPrefix: n
    }, {
      default: () => y(dp, null)
    })])) : null]) : null)), this.pair ? y("span", {
      class: `${n}-input__separator`
    }, yr(u.separator, () => [this.separator])) : null, this.pair ? y("div", {
      class: `${n}-input-wrapper`
    }, y("div", {
      class: `${n}-input__input`
    }, y("input", {
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
    }), this.showPlaceholder2 ? y("div", {
      class: `${n}-input__placeholder`
    }, y("span", null, this.mergedPlaceholder[1])) : null), Qe(u.suffix, (f) => (this.clearable || f) && y("div", {
      class: `${n}-input__suffix`
    }, [this.clearable && y(si, {
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
    }), f]))) : null, this.mergedBordered ? y("div", {
      class: `${n}-input__border`
    }) : null, this.mergedBordered ? y("div", {
      class: `${n}-input__state-border`
    }) : null, this.showCount && o === "textarea" ? y(ja, null, {
      default: (f) => {
        var d;
        const {
          renderCount: x
        } = this;
        return x ? x(f) : (d = u.count) === null || d === void 0 ? void 0 : d.call(u, f);
      }
    }) : null);
  }
}), Qp = H("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [$(">", [H("input", [$("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), $("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), H("button", [$("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [k("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), $("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [k("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), $("*", [$("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [$(">", [H("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), H("base-selection", [H("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), H("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), k("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), $("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [$(">", [H("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), H("base-selection", [H("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), H("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), k("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), ev = {}, tv = ee({
  name: "InputGroup",
  props: ev,
  setup(t) {
    const {
      mergedClsPrefixRef: r
    } = Ve(t);
    return lr("-input-group", Qp, r), {
      mergedClsPrefix: r
    };
  },
  render() {
    const {
      mergedClsPrefix: t
    } = this;
    return y("div", {
      class: `${t}-input-group`
    }, this.$slots);
  }
}), rv = H("input-group-label", `
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
 `)]), nv = Object.assign(Object.assign({}, he.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
}), iv = ee({
  name: "InputGroupLabel",
  props: nv,
  setup(t) {
    const {
      mergedBorderedRef: r,
      mergedClsPrefixRef: n,
      inlineThemeDisabled: i
    } = Ve(t), a = he("Input", "-input-group-label", rv, cl, t, n), o = R(() => {
      const {
        size: s
      } = t, {
        common: {
          cubicBezierEaseInOut: u
        },
        self: {
          groupLabelColor: f,
          borderRadius: d,
          groupLabelTextColor: x,
          lineHeight: m,
          groupLabelBorder: C,
          [G("fontSize", s)]: h,
          [G("height", s)]: p
        }
      } = a.value;
      return {
        "--n-bezier": u,
        "--n-group-label-color": f,
        "--n-group-label-border": C,
        "--n-border-radius": d,
        "--n-group-label-text-color": x,
        "--n-font-size": h,
        "--n-line-height": m,
        "--n-height": p
      };
    }), l = i ? nt("input-group-label", R(() => t.size[0]), o, t) : void 0;
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
    return (t = this.onRender) === null || t === void 0 || t.call(this), y("div", {
      class: [`${i}-input-group-label`, this.themeClass],
      style: this.cssVars
    }, (n = (r = this.$slots).default) === null || n === void 0 ? void 0 : n.call(r), this.mergedBordered ? y("div", {
      class: `${i}-input-group-label__border`
    }) : null);
  }
});
function $t(t) {
  return Le(t, [255, 255, 255, 0.16]);
}
function Jr(t) {
  return Le(t, [0, 0, 0, 0.12]);
}
const av = "n-button-group", ov = {
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
function lv(t) {
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
    opacityDisabled: d,
    textColor2: x,
    textColor3: m,
    primaryColorHover: C,
    primaryColorPressed: h,
    borderColor: p,
    primaryColor: b,
    baseColor: c,
    infoColor: D,
    infoColorHover: F,
    infoColorPressed: w,
    successColor: _,
    successColorHover: I,
    successColorPressed: v,
    warningColor: B,
    warningColorHover: T,
    warningColorPressed: O,
    errorColor: N,
    errorColorHover: W,
    errorColorPressed: e,
    fontWeight: E,
    buttonColor2: A,
    buttonColor2Hover: z,
    buttonColor2Pressed: P,
    fontWeightStrong: V
  } = t;
  return Object.assign(Object.assign({}, ov), {
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
    opacityDisabled: d,
    // secondary
    colorOpacitySecondary: "0.16",
    colorOpacitySecondaryHover: "0.22",
    colorOpacitySecondaryPressed: "0.28",
    colorSecondary: A,
    colorSecondaryHover: z,
    colorSecondaryPressed: P,
    // tertiary
    colorTertiary: A,
    colorTertiaryHover: z,
    colorTertiaryPressed: P,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: z,
    colorQuaternaryPressed: P,
    // default type
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: x,
    textColorTertiary: m,
    textColorHover: C,
    textColorPressed: h,
    textColorFocus: C,
    textColorDisabled: x,
    textColorText: x,
    textColorTextHover: C,
    textColorTextPressed: h,
    textColorTextFocus: C,
    textColorTextDisabled: x,
    textColorGhost: x,
    textColorGhostHover: C,
    textColorGhostPressed: h,
    textColorGhostFocus: C,
    textColorGhostDisabled: x,
    border: `1px solid ${p}`,
    borderHover: `1px solid ${C}`,
    borderPressed: `1px solid ${h}`,
    borderFocus: `1px solid ${C}`,
    borderDisabled: `1px solid ${p}`,
    rippleColor: b,
    // primary
    colorPrimary: b,
    colorHoverPrimary: C,
    colorPressedPrimary: h,
    colorFocusPrimary: C,
    colorDisabledPrimary: b,
    textColorPrimary: c,
    textColorHoverPrimary: c,
    textColorPressedPrimary: c,
    textColorFocusPrimary: c,
    textColorDisabledPrimary: c,
    textColorTextPrimary: b,
    textColorTextHoverPrimary: C,
    textColorTextPressedPrimary: h,
    textColorTextFocusPrimary: C,
    textColorTextDisabledPrimary: x,
    textColorGhostPrimary: b,
    textColorGhostHoverPrimary: C,
    textColorGhostPressedPrimary: h,
    textColorGhostFocusPrimary: C,
    textColorGhostDisabledPrimary: b,
    borderPrimary: `1px solid ${b}`,
    borderHoverPrimary: `1px solid ${C}`,
    borderPressedPrimary: `1px solid ${h}`,
    borderFocusPrimary: `1px solid ${C}`,
    borderDisabledPrimary: `1px solid ${b}`,
    rippleColorPrimary: b,
    // info
    colorInfo: D,
    colorHoverInfo: F,
    colorPressedInfo: w,
    colorFocusInfo: F,
    colorDisabledInfo: D,
    textColorInfo: c,
    textColorHoverInfo: c,
    textColorPressedInfo: c,
    textColorFocusInfo: c,
    textColorDisabledInfo: c,
    textColorTextInfo: D,
    textColorTextHoverInfo: F,
    textColorTextPressedInfo: w,
    textColorTextFocusInfo: F,
    textColorTextDisabledInfo: x,
    textColorGhostInfo: D,
    textColorGhostHoverInfo: F,
    textColorGhostPressedInfo: w,
    textColorGhostFocusInfo: F,
    textColorGhostDisabledInfo: D,
    borderInfo: `1px solid ${D}`,
    borderHoverInfo: `1px solid ${F}`,
    borderPressedInfo: `1px solid ${w}`,
    borderFocusInfo: `1px solid ${F}`,
    borderDisabledInfo: `1px solid ${D}`,
    rippleColorInfo: D,
    // success
    colorSuccess: _,
    colorHoverSuccess: I,
    colorPressedSuccess: v,
    colorFocusSuccess: I,
    colorDisabledSuccess: _,
    textColorSuccess: c,
    textColorHoverSuccess: c,
    textColorPressedSuccess: c,
    textColorFocusSuccess: c,
    textColorDisabledSuccess: c,
    textColorTextSuccess: _,
    textColorTextHoverSuccess: I,
    textColorTextPressedSuccess: v,
    textColorTextFocusSuccess: I,
    textColorTextDisabledSuccess: x,
    textColorGhostSuccess: _,
    textColorGhostHoverSuccess: I,
    textColorGhostPressedSuccess: v,
    textColorGhostFocusSuccess: I,
    textColorGhostDisabledSuccess: _,
    borderSuccess: `1px solid ${_}`,
    borderHoverSuccess: `1px solid ${I}`,
    borderPressedSuccess: `1px solid ${v}`,
    borderFocusSuccess: `1px solid ${I}`,
    borderDisabledSuccess: `1px solid ${_}`,
    rippleColorSuccess: _,
    // warning
    colorWarning: B,
    colorHoverWarning: T,
    colorPressedWarning: O,
    colorFocusWarning: T,
    colorDisabledWarning: B,
    textColorWarning: c,
    textColorHoverWarning: c,
    textColorPressedWarning: c,
    textColorFocusWarning: c,
    textColorDisabledWarning: c,
    textColorTextWarning: B,
    textColorTextHoverWarning: T,
    textColorTextPressedWarning: O,
    textColorTextFocusWarning: T,
    textColorTextDisabledWarning: x,
    textColorGhostWarning: B,
    textColorGhostHoverWarning: T,
    textColorGhostPressedWarning: O,
    textColorGhostFocusWarning: T,
    textColorGhostDisabledWarning: B,
    borderWarning: `1px solid ${B}`,
    borderHoverWarning: `1px solid ${T}`,
    borderPressedWarning: `1px solid ${O}`,
    borderFocusWarning: `1px solid ${T}`,
    borderDisabledWarning: `1px solid ${B}`,
    rippleColorWarning: B,
    // error
    colorError: N,
    colorHoverError: W,
    colorPressedError: e,
    colorFocusError: W,
    colorDisabledError: N,
    textColorError: c,
    textColorHoverError: c,
    textColorPressedError: c,
    textColorFocusError: c,
    textColorDisabledError: c,
    textColorTextError: N,
    textColorTextHoverError: W,
    textColorTextPressedError: e,
    textColorTextFocusError: W,
    textColorTextDisabledError: x,
    textColorGhostError: N,
    textColorGhostHoverError: W,
    textColorGhostPressedError: e,
    textColorGhostFocusError: W,
    textColorGhostDisabledError: N,
    borderError: `1px solid ${N}`,
    borderHoverError: `1px solid ${W}`,
    borderPressedError: `1px solid ${e}`,
    borderFocusError: `1px solid ${W}`,
    borderDisabledError: `1px solid ${N}`,
    rippleColorError: N,
    waveOpacity: "0.6",
    fontWeight: E,
    fontWeightStrong: V
  });
}
const sv = {
  name: "Button",
  common: ct,
  self: lv
}, uv = $([H("button", `
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
 `, [X("color", [k("border", {
  borderColor: "var(--n-border-color)"
}), X("disabled", [k("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), qe("disabled", [$("&:focus", [k("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), $("&:hover", [k("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), $("&:active", [k("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), X("pressed", [k("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), X("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [k("border", {
  border: "var(--n-border-disabled)"
})]), qe("disabled", [$("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [k("state-border", {
  border: "var(--n-border-focus)"
})]), $("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [k("state-border", {
  border: "var(--n-border-hover)"
})]), $("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [k("state-border", {
  border: "var(--n-border-pressed)"
})]), X("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [k("state-border", {
  border: "var(--n-border-pressed)"
})])]), X("loading", "cursor: wait;"), H("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [X("active", {
  zIndex: 1,
  animationName: "button-wave-spread, button-wave-opacity"
})]), Cn && "MozBoxSizing" in document.createElement("div").style ? $("&::moz-focus-inner", {
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
 `, [H("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [pn({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), Np()]), k("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [$("~", [k("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), X("block", `
 display: flex;
 width: 100%;
 `), X("dashed", [k("border, state-border", {
  borderStyle: "dashed !important"
})]), X("disabled", {
  cursor: "not-allowed",
  opacity: "var(--n-opacity-disabled)"
})]), $("@keyframes button-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
  }
}), $("@keyframes button-wave-opacity", {
  from: {
    opacity: "var(--n-wave-opacity)"
  },
  to: {
    opacity: 0
  }
})]), fv = Object.assign(Object.assign({}, he.props), {
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
    default: !dl
  }
}), dv = ee({
  name: "Button",
  props: fv,
  setup(t) {
    process.env.NODE_ENV !== "production" && je(() => {
      const {
        dashed: w,
        ghost: _,
        text: I,
        secondary: v,
        tertiary: B,
        quaternary: T
      } = t;
      (w || _ || I) && (v || B || T) && gt("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const r = L(null), n = L(null), i = L(!1), a = tt(() => !t.quaternary && !t.tertiary && !t.secondary && !t.text && (!t.color || t.ghost || t.dashed) && t.bordered), o = ce(av, {}), {
      mergedSizeRef: l
    } = Po({}, {
      defaultSize: "medium",
      mergedSize: (w) => {
        const {
          size: _
        } = t;
        if (_) return _;
        const {
          size: I
        } = o;
        if (I) return I;
        const {
          mergedSize: v
        } = w || {};
        return v ? v.value : "medium";
      }
    }), s = R(() => t.focusable && !t.disabled), u = (w) => {
      var _;
      s.value || w.preventDefault(), !t.nativeFocusBehavior && (w.preventDefault(), !t.disabled && s.value && ((_ = r.value) === null || _ === void 0 || _.focus({
        preventScroll: !0
      })));
    }, f = (w) => {
      var _;
      if (!t.disabled && !t.loading) {
        const {
          onClick: I
        } = t;
        I && ve(I, w), t.text || (_ = n.value) === null || _ === void 0 || _.play();
      }
    }, d = (w) => {
      switch (w.key) {
        case "Enter":
          if (!t.keyboard)
            return;
          i.value = !1;
      }
    }, x = (w) => {
      switch (w.key) {
        case "Enter":
          if (!t.keyboard || t.loading) {
            w.preventDefault();
            return;
          }
          i.value = !0;
      }
    }, m = () => {
      i.value = !1;
    }, {
      inlineThemeDisabled: C,
      mergedClsPrefixRef: h,
      mergedRtlRef: p
    } = Ve(t), b = he("Button", "-button", uv, sv, t, h), c = Dn("Button", p, h), D = R(() => {
      const w = b.value, {
        common: {
          cubicBezierEaseInOut: _,
          cubicBezierEaseOut: I
        },
        self: v
      } = w, {
        rippleDuration: B,
        opacityDisabled: T,
        fontWeight: O,
        fontWeightStrong: N
      } = v, W = l.value, {
        dashed: e,
        type: E,
        ghost: A,
        text: z,
        color: P,
        round: V,
        circle: te,
        textColor: J,
        secondary: xe,
        tertiary: oe,
        quaternary: Pe,
        strong: De
      } = t, Me = {
        "--n-font-weight": De ? N : O
      };
      let K = {
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
      const Te = E === "tertiary", Ie = E === "default", Z = Te ? "default" : E;
      if (z) {
        const ue = J || P;
        K = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": ue || v[G("textColorText", Z)],
          "--n-text-color-hover": ue ? $t(ue) : v[G("textColorTextHover", Z)],
          "--n-text-color-pressed": ue ? Jr(ue) : v[G("textColorTextPressed", Z)],
          "--n-text-color-focus": ue ? $t(ue) : v[G("textColorTextHover", Z)],
          "--n-text-color-disabled": ue || v[G("textColorTextDisabled", Z)]
        };
      } else if (A || e) {
        const ue = J || P;
        K = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": P || v[G("rippleColor", Z)],
          "--n-text-color": ue || v[G("textColorGhost", Z)],
          "--n-text-color-hover": ue ? $t(ue) : v[G("textColorGhostHover", Z)],
          "--n-text-color-pressed": ue ? Jr(ue) : v[G("textColorGhostPressed", Z)],
          "--n-text-color-focus": ue ? $t(ue) : v[G("textColorGhostHover", Z)],
          "--n-text-color-disabled": ue || v[G("textColorGhostDisabled", Z)]
        };
      } else if (xe) {
        const ue = Ie ? v.textColor : Te ? v.textColorTertiary : v[G("color", Z)], be = P || ue, it = E !== "default" && E !== "tertiary";
        K = {
          "--n-color": it ? Ot(be, {
            alpha: Number(v.colorOpacitySecondary)
          }) : v.colorSecondary,
          "--n-color-hover": it ? Ot(be, {
            alpha: Number(v.colorOpacitySecondaryHover)
          }) : v.colorSecondaryHover,
          "--n-color-pressed": it ? Ot(be, {
            alpha: Number(v.colorOpacitySecondaryPressed)
          }) : v.colorSecondaryPressed,
          "--n-color-focus": it ? Ot(be, {
            alpha: Number(v.colorOpacitySecondaryHover)
          }) : v.colorSecondaryHover,
          "--n-color-disabled": v.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": be,
          "--n-text-color-hover": be,
          "--n-text-color-pressed": be,
          "--n-text-color-focus": be,
          "--n-text-color-disabled": be
        };
      } else if (oe || Pe) {
        const ue = Ie ? v.textColor : Te ? v.textColorTertiary : v[G("color", Z)], be = P || ue;
        oe ? (K["--n-color"] = v.colorTertiary, K["--n-color-hover"] = v.colorTertiaryHover, K["--n-color-pressed"] = v.colorTertiaryPressed, K["--n-color-focus"] = v.colorSecondaryHover, K["--n-color-disabled"] = v.colorTertiary) : (K["--n-color"] = v.colorQuaternary, K["--n-color-hover"] = v.colorQuaternaryHover, K["--n-color-pressed"] = v.colorQuaternaryPressed, K["--n-color-focus"] = v.colorQuaternaryHover, K["--n-color-disabled"] = v.colorQuaternary), K["--n-ripple-color"] = "#0000", K["--n-text-color"] = be, K["--n-text-color-hover"] = be, K["--n-text-color-pressed"] = be, K["--n-text-color-focus"] = be, K["--n-text-color-disabled"] = be;
      } else
        K = {
          "--n-color": P || v[G("color", Z)],
          "--n-color-hover": P ? $t(P) : v[G("colorHover", Z)],
          "--n-color-pressed": P ? Jr(P) : v[G("colorPressed", Z)],
          "--n-color-focus": P ? $t(P) : v[G("colorFocus", Z)],
          "--n-color-disabled": P || v[G("colorDisabled", Z)],
          "--n-ripple-color": P || v[G("rippleColor", Z)],
          "--n-text-color": J || (P ? v.textColorPrimary : Te ? v.textColorTertiary : v[G("textColor", Z)]),
          "--n-text-color-hover": J || (P ? v.textColorHoverPrimary : v[G("textColorHover", Z)]),
          "--n-text-color-pressed": J || (P ? v.textColorPressedPrimary : v[G("textColorPressed", Z)]),
          "--n-text-color-focus": J || (P ? v.textColorFocusPrimary : v[G("textColorFocus", Z)]),
          "--n-text-color-disabled": J || (P ? v.textColorDisabledPrimary : v[G("textColorDisabled", Z)])
        };
      let Re = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      z ? Re = {
        "--n-border": "none",
        "--n-border-hover": "none",
        "--n-border-pressed": "none",
        "--n-border-focus": "none",
        "--n-border-disabled": "none"
      } : Re = {
        "--n-border": v[G("border", Z)],
        "--n-border-hover": v[G("borderHover", Z)],
        "--n-border-pressed": v[G("borderPressed", Z)],
        "--n-border-focus": v[G("borderFocus", Z)],
        "--n-border-disabled": v[G("borderDisabled", Z)]
      };
      const {
        [G("height", W)]: He,
        [G("fontSize", W)]: re,
        [G("padding", W)]: le,
        [G("paddingRound", W)]: ne,
        [G("iconSize", W)]: Xe,
        [G("borderRadius", W)]: Dt,
        [G("iconMargin", W)]: sr,
        waveOpacity: xt
      } = v, ur = {
        "--n-width": te && !z ? He : "initial",
        "--n-height": z ? "initial" : He,
        "--n-font-size": re,
        "--n-padding": te || z ? "initial" : V ? ne : le,
        "--n-icon-size": Xe,
        "--n-icon-margin": sr,
        "--n-border-radius": z ? "initial" : te || V ? He : Dt
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": _,
        "--n-bezier-ease-out": I,
        "--n-ripple-duration": B,
        "--n-opacity-disabled": T,
        "--n-wave-opacity": xt
      }, Me), K), Re), ur);
    }), F = C ? nt("button", R(() => {
      let w = "";
      const {
        dashed: _,
        type: I,
        ghost: v,
        text: B,
        color: T,
        round: O,
        circle: N,
        textColor: W,
        secondary: e,
        tertiary: E,
        quaternary: A,
        strong: z
      } = t;
      _ && (w += "a"), v && (w += "b"), B && (w += "c"), O && (w += "d"), N && (w += "e"), e && (w += "f"), E && (w += "g"), A && (w += "h"), z && (w += "i"), T && (w += `j${Gi(T)}`), W && (w += `k${Gi(W)}`);
      const {
        value: P
      } = l;
      return w += `l${P[0]}`, w += `m${I[0]}`, w;
    }), D, t) : void 0;
    return {
      selfElRef: r,
      waveElRef: n,
      mergedClsPrefix: h,
      mergedFocusable: s,
      mergedSize: l,
      showBorder: a,
      enterPressed: i,
      rtlEnabled: c,
      handleMousedown: u,
      handleKeydown: x,
      handleBlur: m,
      handleKeyup: d,
      handleClick: f,
      customColorCssVars: R(() => {
        const {
          color: w
        } = t;
        if (!w) return null;
        const _ = $t(w);
        return {
          "--n-border-color": w,
          "--n-border-color-hover": _,
          "--n-border-color-pressed": Jr(w),
          "--n-border-color-focus": _,
          "--n-border-color-disabled": w
        };
      }),
      cssVars: C ? void 0 : D,
      themeClass: F == null ? void 0 : F.themeClass,
      onRender: F == null ? void 0 : F.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: t,
      tag: r,
      onRender: n
    } = this;
    n == null || n();
    const i = Qe(this.$slots.default, (a) => a && y("span", {
      class: `${t}-button__content`
    }, a));
    return y(r, {
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
    }, this.iconPlacement === "right" && i, y(hp, {
      width: !0
    }, {
      default: () => Qe(this.$slots.icon, (a) => (this.loading || this.renderIcon || a) && y("span", {
        class: `${t}-button__icon`,
        style: {
          margin: Gn(this.$slots.default) ? "0" : ""
        }
      }, y(zi, null, {
        default: () => this.loading ? y(Oi, {
          clsPrefix: t,
          key: "loading",
          class: `${t}-icon-slot`,
          strokeWidth: 20
        }) : y("div", {
          key: "icon",
          class: `${t}-icon-slot`,
          role: "none"
        }, this.renderIcon ? this.renderIcon() : a)
      })))
    }), this.iconPlacement === "left" && i, this.text ? null : y(Ep, {
      ref: "waveElRef",
      clsPrefix: t
    }), this.showBorder ? y("div", {
      "aria-hidden": !0,
      class: `${t}-button__border`,
      style: this.customColorCssVars
    }) : null, this.showBorder ? y("div", {
      "aria-hidden": !0,
      class: `${t}-button__state-border`,
      style: this.customColorCssVars
    }) : null);
  }
}), cv = {
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
    validator: () => (er("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, xv = ee({
  name: "ConfigProvider",
  alias: ["App"],
  props: cv,
  setup(t) {
    const r = ce(st, null), n = R(() => {
      const {
        theme: p
      } = t;
      if (p === null) return;
      const b = r == null ? void 0 : r.mergedThemeRef.value;
      return p === void 0 ? b : b === void 0 ? p : Object.assign({}, b, p);
    }), i = R(() => {
      const {
        themeOverrides: p
      } = t;
      if (p !== null) {
        if (p === void 0)
          return r == null ? void 0 : r.mergedThemeOverridesRef.value;
        {
          const b = r == null ? void 0 : r.mergedThemeOverridesRef.value;
          return b === void 0 ? p : mr({}, b, p);
        }
      }
    }), a = tt(() => {
      const {
        namespace: p
      } = t;
      return p === void 0 ? r == null ? void 0 : r.mergedNamespaceRef.value : p;
    }), o = tt(() => {
      const {
        bordered: p
      } = t;
      return p === void 0 ? r == null ? void 0 : r.mergedBorderedRef.value : p;
    }), l = R(() => {
      const {
        icons: p
      } = t;
      return p === void 0 ? r == null ? void 0 : r.mergedIconsRef.value : p;
    }), s = R(() => {
      const {
        componentOptions: p
      } = t;
      return p !== void 0 ? p : r == null ? void 0 : r.mergedComponentPropsRef.value;
    }), u = R(() => {
      const {
        clsPrefix: p
      } = t;
      return p !== void 0 ? p : r ? r.mergedClsPrefixRef.value : li;
    }), f = R(() => {
      var p;
      const {
        rtl: b
      } = t;
      if (b === void 0)
        return r == null ? void 0 : r.mergedRtlRef.value;
      const c = {};
      for (const D of b)
        c[D.name] = _i(D), (p = D.peers) === null || p === void 0 || p.forEach((F) => {
          F.name in c || (c[F.name] = _i(F));
        });
      return c;
    }), d = R(() => t.breakpoints || (r == null ? void 0 : r.mergedBreakpointsRef.value)), x = t.inlineThemeDisabled || (r == null ? void 0 : r.inlineThemeDisabled), m = t.preflightStyleDisabled || (r == null ? void 0 : r.preflightStyleDisabled), C = t.styleMountTarget || (r == null ? void 0 : r.styleMountTarget), h = R(() => {
      const {
        value: p
      } = n, {
        value: b
      } = i, c = b && Object.keys(b).length !== 0, D = p == null ? void 0 : p.name;
      return D ? c ? `${D}-${Fr(JSON.stringify(i.value))}` : D : c ? Fr(JSON.stringify(i.value)) : "";
    });
    return Ge(st, {
      mergedThemeHashRef: h,
      mergedBreakpointsRef: d,
      mergedRtlRef: f,
      mergedIconsRef: l,
      mergedComponentPropsRef: s,
      mergedBorderedRef: o,
      mergedNamespaceRef: a,
      mergedClsPrefixRef: u,
      mergedLocaleRef: R(() => {
        const {
          locale: p
        } = t;
        if (p !== null)
          return p === void 0 ? r == null ? void 0 : r.mergedLocaleRef.value : p;
      }),
      mergedDateLocaleRef: R(() => {
        const {
          dateLocale: p
        } = t;
        if (p !== null)
          return p === void 0 ? r == null ? void 0 : r.mergedDateLocaleRef.value : p;
      }),
      mergedHljsRef: R(() => {
        const {
          hljs: p
        } = t;
        return p === void 0 ? r == null ? void 0 : r.mergedHljsRef.value : p;
      }),
      mergedKatexRef: R(() => {
        const {
          katex: p
        } = t;
        return p === void 0 ? r == null ? void 0 : r.mergedKatexRef.value : p;
      }),
      mergedThemeRef: n,
      mergedThemeOverridesRef: i,
      inlineThemeDisabled: x || !1,
      preflightStyleDisabled: m || !1,
      styleMountTarget: C
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
    return this.abstract ? (i = (n = this.$slots).default) === null || i === void 0 ? void 0 : i.call(n) : y(this.as || this.tag, {
      class: `${this.mergedClsPrefix || li}-config-provider`
    }, (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t));
  }
});
function hv(t) {
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
const pv = {
  name: "Icon",
  common: ct,
  self: hv
}, vv = H("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [X("color-transition", {
  transition: "color .3s var(--n-bezier)"
}), X("depth", {
  color: "var(--n-color)"
}, [$("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), $("svg", {
  height: "1em",
  width: "1em"
})]), mv = Object.assign(Object.assign({}, he.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), hl = ee({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: mv,
  setup(t) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n
    } = Ve(t), i = he("Icon", "-icon", vv, pv, t, r), a = R(() => {
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
    }), o = n ? nt("icon", R(() => `${t.depth || "d"}`), a, t) : void 0;
    return {
      mergedClsPrefix: r,
      mergedStyle: R(() => {
        const {
          size: l,
          color: s
        } = t;
        return {
          fontSize: lt(l),
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
    return !((t = r == null ? void 0 : r.$options) === null || t === void 0) && t._n_icon__ && er("icon", "don't wrap `n-icon` inside `n-icon`"), o == null || o(), y("i", gn(this.$attrs, {
      role: "img",
      class: [`${i}-icon`, l, {
        [`${i}-icon--depth`]: n,
        [`${i}-icon--color-transition`]: n !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), a ? y(a) : this.$slots);
  }
}), gv = {
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
function bv(t) {
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
  return Object.assign(Object.assign({}, gv), {
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
const pl = {
  name: "Form",
  common: ct,
  self: bv
}, Cv = H("form", [X("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [H("form-item", {
  width: "auto",
  marginRight: "18px"
}, [$("&:last-child", {
  marginRight: 0
})])])]), Rr = "n-form", vl = "n-form-item-insts";
var yv = function(t, r, n, i) {
  function a(o) {
    return o instanceof n ? o : new n(function(l) {
      l(o);
    });
  }
  return new (n || (n = Promise))(function(o, l) {
    function s(d) {
      try {
        f(i.next(d));
      } catch (x) {
        l(x);
      }
    }
    function u(d) {
      try {
        f(i.throw(d));
      } catch (x) {
        l(x);
      }
    }
    function f(d) {
      d.done ? o(d.value) : a(d.value).then(s, u);
    }
    f((i = i.apply(t, r || [])).next());
  });
};
const Bv = Object.assign(Object.assign({}, he.props), {
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
}), wv = ee({
  name: "Form",
  props: Bv,
  setup(t) {
    const {
      mergedClsPrefixRef: r
    } = Ve(t);
    he("Form", "-form", Cv, pl, t, r);
    const n = {}, i = L(void 0), a = (u) => {
      const f = i.value;
      (f === void 0 || u >= f) && (i.value = u);
    };
    function o(u) {
      return yv(this, arguments, void 0, function* (f, d = () => !0) {
        return yield new Promise((x, m) => {
          const C = [];
          for (const h of Li(n)) {
            const p = n[h];
            for (const b of p)
              b.path && C.push(b.internalValidate(null, d));
          }
          Promise.all(C).then((h) => {
            const p = h.some((D) => !D.valid), b = [], c = [];
            h.forEach((D) => {
              var F, w;
              !((F = D.errors) === null || F === void 0) && F.length && b.push(D.errors), !((w = D.warnings) === null || w === void 0) && w.length && c.push(D.warnings);
            }), f && f(b.length ? b : void 0, {
              warnings: c.length ? c : void 0
            }), p ? m(b.length ? b : void 0) : x({
              warnings: c.length ? c : void 0
            });
          });
        });
      });
    }
    function l() {
      for (const u of Li(n)) {
        const f = n[u];
        for (const d of f)
          d.restoreValidation();
      }
    }
    return Ge(Rr, {
      props: t,
      maxChildLabelWidthRef: i,
      deriveMaxChildLabelWidth: a
    }), Ge(vl, {
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
    return y("form", {
      class: [`${t}-form`, this.inline && `${t}-form--inline`],
      onSubmit: this.onSubmit
    }, this.$slots);
  }
});
function Mt() {
  return Mt = Object.assign ? Object.assign.bind() : function(t) {
    for (var r = 1; r < arguments.length; r++) {
      var n = arguments[r];
      for (var i in n)
        Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
    }
    return t;
  }, Mt.apply(this, arguments);
}
function Dv(t, r) {
  t.prototype = Object.create(r.prototype), t.prototype.constructor = t, Tr(t, r);
}
function ui(t) {
  return ui = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
    return n.__proto__ || Object.getPrototypeOf(n);
  }, ui(t);
}
function Tr(t, r) {
  return Tr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(i, a) {
    return i.__proto__ = a, i;
  }, Tr(t, r);
}
function Av() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function rn(t, r, n) {
  return Av() ? rn = Reflect.construct.bind() : rn = function(a, o, l) {
    var s = [null];
    s.push.apply(s, o);
    var u = Function.bind.apply(a, s), f = new u();
    return l && Tr(f, l.prototype), f;
  }, rn.apply(null, arguments);
}
function Fv(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function fi(t) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return fi = function(i) {
    if (i === null || !Fv(i)) return i;
    if (typeof i != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof r < "u") {
      if (r.has(i)) return r.get(i);
      r.set(i, a);
    }
    function a() {
      return rn(i, arguments, ui(this).constructor);
    }
    return a.prototype = Object.create(i.prototype, {
      constructor: {
        value: a,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Tr(a, i);
  }, fi(t);
}
var Sv = /%[sdj%]/g, ml = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (ml = function(r, n) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && n.every(function(i) {
    return typeof i == "string";
  }) && console.warn(r, n);
});
function di(t) {
  if (!t || !t.length) return null;
  var r = {};
  return t.forEach(function(n) {
    var i = n.field;
    r[i] = r[i] || [], r[i].push(n);
  }), r;
}
function ke(t) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  var a = 0, o = n.length;
  if (typeof t == "function")
    return t.apply(null, n);
  if (typeof t == "string") {
    var l = t.replace(Sv, function(s) {
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
function Ev(t) {
  return t === "string" || t === "url" || t === "hex" || t === "email" || t === "date" || t === "pattern";
}
function Be(t, r) {
  return !!(t == null || r === "array" && Array.isArray(t) && !t.length || Ev(r) && typeof t == "string" && !t);
}
function $v(t, r, n) {
  var i = [], a = 0, o = t.length;
  function l(s) {
    i.push.apply(i, s || []), a++, a === o && n(i);
  }
  t.forEach(function(s) {
    r(s, l);
  });
}
function Na(t, r, n) {
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
function Pv(t) {
  var r = [];
  return Object.keys(t).forEach(function(n) {
    r.push.apply(r, t[n] || []);
  }), r;
}
var Va = /* @__PURE__ */ function(t) {
  Dv(r, t);
  function r(n, i) {
    var a;
    return a = t.call(this, "Async Validation Error") || this, a.errors = n, a.fields = i, a;
  }
  return r;
}(/* @__PURE__ */ fi(Error));
function Tv(t, r, n, i, a) {
  if (r.first) {
    var o = new Promise(function(m, C) {
      var h = function(c) {
        return i(c), c.length ? C(new Va(c, di(c))) : m(a);
      }, p = Pv(t);
      Na(p, n, h);
    });
    return o.catch(function(m) {
      return m;
    }), o;
  }
  var l = r.firstFields === !0 ? Object.keys(t) : r.firstFields || [], s = Object.keys(t), u = s.length, f = 0, d = [], x = new Promise(function(m, C) {
    var h = function(b) {
      if (d.push.apply(d, b), f++, f === u)
        return i(d), d.length ? C(new Va(d, di(d))) : m(a);
    };
    s.length || (i(d), m(a)), s.forEach(function(p) {
      var b = t[p];
      l.indexOf(p) !== -1 ? Na(b, n, h) : $v(b, n, h);
    });
  });
  return x.catch(function(m) {
    return m;
  }), x;
}
function zv(t) {
  return !!(t && t.message !== void 0);
}
function Ov(t, r) {
  for (var n = t, i = 0; i < r.length; i++) {
    if (n == null)
      return n;
    n = n[r[i]];
  }
  return n;
}
function qa(t, r) {
  return function(n) {
    var i;
    return t.fullFields ? i = Ov(r, t.fullFields) : i = r[n.field || t.fullField], zv(n) ? (n.field = n.field || t.fullField, n.fieldValue = i, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: i,
      field: n.field || t.fullField
    };
  };
}
function Ga(t, r) {
  if (r) {
    for (var n in r)
      if (r.hasOwnProperty(n)) {
        var i = r[n];
        typeof i == "object" && typeof t[n] == "object" ? t[n] = Mt({}, t[n], i) : t[n] = i;
      }
  }
  return t;
}
var gl = function(r, n, i, a, o, l) {
  r.required && (!i.hasOwnProperty(r.field) || Be(n, l || r.type)) && a.push(ke(o.messages.required, r.fullField));
}, Mv = function(r, n, i, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(ke(o.messages.whitespace, r.fullField));
}, Qr, Rv = function() {
  if (Qr)
    return Qr;
  var t = "[a-fA-F\\d:]", r = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + t + ")|(?<=" + t + ")(?=\\s|$))" : "";
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), o = new RegExp("(?:^" + n + "$)|(?:^" + a + "$)"), l = new RegExp("^" + n + "$"), s = new RegExp("^" + a + "$"), u = function(w) {
    return w && w.exact ? o : new RegExp("(?:" + r(w) + n + r(w) + ")|(?:" + r(w) + a + r(w) + ")", "g");
  };
  u.v4 = function(F) {
    return F && F.exact ? l : new RegExp("" + r(F) + n + r(F), "g");
  }, u.v6 = function(F) {
    return F && F.exact ? s : new RegExp("" + r(F) + a + r(F), "g");
  };
  var f = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", x = u.v4().source, m = u.v6().source, C = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", c = '(?:[/?#][^\\s"]*)?', D = "(?:" + f + "|www\\.)" + d + "(?:localhost|" + x + "|" + m + "|" + C + h + p + ")" + b + c;
  return Qr = new RegExp("(?:^" + D + "$)", "i"), Qr;
}, Ua = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, gr = {
  integer: function(r) {
    return gr.number(r) && parseInt(r, 10) === r;
  },
  float: function(r) {
    return gr.number(r) && !gr.integer(r);
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
    return typeof r == "object" && !gr.array(r);
  },
  method: function(r) {
    return typeof r == "function";
  },
  email: function(r) {
    return typeof r == "string" && r.length <= 320 && !!r.match(Ua.email);
  },
  url: function(r) {
    return typeof r == "string" && r.length <= 2048 && !!r.match(Rv());
  },
  hex: function(r) {
    return typeof r == "string" && !!r.match(Ua.hex);
  }
}, _v = function(r, n, i, a, o) {
  if (r.required && n === void 0) {
    gl(r, n, i, a, o);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = r.type;
  l.indexOf(s) > -1 ? gr[s](n) || a.push(ke(o.messages.types[s], r.fullField, r.type)) : s && typeof n !== r.type && a.push(ke(o.messages.types[s], r.fullField, r.type));
}, kv = function(r, n, i, a, o) {
  var l = typeof r.len == "number", s = typeof r.min == "number", u = typeof r.max == "number", f = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, x = null, m = typeof n == "number", C = typeof n == "string", h = Array.isArray(n);
  if (m ? x = "number" : C ? x = "string" : h && (x = "array"), !x)
    return !1;
  h && (d = n.length), C && (d = n.replace(f, "_").length), l ? d !== r.len && a.push(ke(o.messages[x].len, r.fullField, r.len)) : s && !u && d < r.min ? a.push(ke(o.messages[x].min, r.fullField, r.min)) : u && !s && d > r.max ? a.push(ke(o.messages[x].max, r.fullField, r.max)) : s && u && (d < r.min || d > r.max) && a.push(ke(o.messages[x].range, r.fullField, r.min, r.max));
}, Xt = "enum", Iv = function(r, n, i, a, o) {
  r[Xt] = Array.isArray(r[Xt]) ? r[Xt] : [], r[Xt].indexOf(n) === -1 && a.push(ke(o.messages[Xt], r.fullField, r[Xt].join(", ")));
}, Hv = function(r, n, i, a, o) {
  if (r.pattern) {
    if (r.pattern instanceof RegExp)
      r.pattern.lastIndex = 0, r.pattern.test(n) || a.push(ke(o.messages.pattern.mismatch, r.fullField, n, r.pattern));
    else if (typeof r.pattern == "string") {
      var l = new RegExp(r.pattern);
      l.test(n) || a.push(ke(o.messages.pattern.mismatch, r.fullField, n, r.pattern));
    }
  }
}, Q = {
  required: gl,
  whitespace: Mv,
  type: _v,
  range: kv,
  enum: Iv,
  pattern: Hv
}, Wv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n, "string") && !r.required)
      return i();
    Q.required(r, n, a, l, o, "string"), Be(n, "string") || (Q.type(r, n, a, l, o), Q.range(r, n, a, l, o), Q.pattern(r, n, a, l, o), r.whitespace === !0 && Q.whitespace(r, n, a, l, o));
  }
  i(l);
}, Lv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), n !== void 0 && Q.type(r, n, a, l, o);
  }
  i(l);
}, jv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (n === "" && (n = void 0), Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), n !== void 0 && (Q.type(r, n, a, l, o), Q.range(r, n, a, l, o));
  }
  i(l);
}, Nv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), n !== void 0 && Q.type(r, n, a, l, o);
  }
  i(l);
}, Vv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), Be(n) || Q.type(r, n, a, l, o);
  }
  i(l);
}, qv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), n !== void 0 && (Q.type(r, n, a, l, o), Q.range(r, n, a, l, o));
  }
  i(l);
}, Gv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), n !== void 0 && (Q.type(r, n, a, l, o), Q.range(r, n, a, l, o));
  }
  i(l);
}, Uv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (n == null && !r.required)
      return i();
    Q.required(r, n, a, l, o, "array"), n != null && (Q.type(r, n, a, l, o), Q.range(r, n, a, l, o));
  }
  i(l);
}, Xv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), n !== void 0 && Q.type(r, n, a, l, o);
  }
  i(l);
}, Yv = "enum", Kv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), n !== void 0 && Q[Yv](r, n, a, l, o);
  }
  i(l);
}, Zv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n, "string") && !r.required)
      return i();
    Q.required(r, n, a, l, o), Be(n, "string") || Q.pattern(r, n, a, l, o);
  }
  i(l);
}, Jv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n, "date") && !r.required)
      return i();
    if (Q.required(r, n, a, l, o), !Be(n, "date")) {
      var u;
      n instanceof Date ? u = n : u = new Date(n), Q.type(r, u, a, l, o), u && Q.range(r, u.getTime(), a, l, o);
    }
  }
  i(l);
}, Qv = function(r, n, i, a, o) {
  var l = [], s = Array.isArray(n) ? "array" : typeof n;
  Q.required(r, n, a, l, o, s), i(l);
}, Ln = function(r, n, i, a, o) {
  var l = r.type, s = [], u = r.required || !r.required && a.hasOwnProperty(r.field);
  if (u) {
    if (Be(n, l) && !r.required)
      return i();
    Q.required(r, n, a, s, o, l), Be(n, l) || Q.type(r, n, a, s, o);
  }
  i(s);
}, em = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o);
  }
  i(l);
}, Ar = {
  string: Wv,
  method: Lv,
  number: jv,
  boolean: Nv,
  regexp: Vv,
  integer: qv,
  float: Gv,
  array: Uv,
  object: Xv,
  enum: Kv,
  pattern: Zv,
  date: Jv,
  url: Ln,
  hex: Ln,
  email: Ln,
  required: Qv,
  any: em
};
function ci() {
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
var xi = ci(), rr = /* @__PURE__ */ function() {
  function t(n) {
    this.rules = null, this._messages = xi, this.define(n);
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
    return i && (this._messages = Ga(ci(), i)), this._messages;
  }, r.validate = function(i, a, o) {
    var l = this;
    a === void 0 && (a = {}), o === void 0 && (o = function() {
    });
    var s = i, u = a, f = o;
    if (typeof u == "function" && (f = u, u = {}), !this.rules || Object.keys(this.rules).length === 0)
      return f && f(null, s), Promise.resolve(s);
    function d(p) {
      var b = [], c = {};
      function D(w) {
        if (Array.isArray(w)) {
          var _;
          b = (_ = b).concat.apply(_, w);
        } else
          b.push(w);
      }
      for (var F = 0; F < p.length; F++)
        D(p[F]);
      b.length ? (c = di(b), f(b, c)) : f(null, s);
    }
    if (u.messages) {
      var x = this.messages();
      x === xi && (x = ci()), Ga(x, u.messages), u.messages = x;
    } else
      u.messages = this.messages();
    var m = {}, C = u.keys || Object.keys(this.rules);
    C.forEach(function(p) {
      var b = l.rules[p], c = s[p];
      b.forEach(function(D) {
        var F = D;
        typeof F.transform == "function" && (s === i && (s = Mt({}, s)), c = s[p] = F.transform(c)), typeof F == "function" ? F = {
          validator: F
        } : F = Mt({}, F), F.validator = l.getValidationMethod(F), F.validator && (F.field = p, F.fullField = F.fullField || p, F.type = l.getType(F), m[p] = m[p] || [], m[p].push({
          rule: F,
          value: c,
          source: s,
          field: p
        }));
      });
    });
    var h = {};
    return Tv(m, u, function(p, b) {
      var c = p.rule, D = (c.type === "object" || c.type === "array") && (typeof c.fields == "object" || typeof c.defaultField == "object");
      D = D && (c.required || !c.required && p.value), c.field = p.field;
      function F(I, v) {
        return Mt({}, v, {
          fullField: c.fullField + "." + I,
          fullFields: c.fullFields ? [].concat(c.fullFields, [I]) : [I]
        });
      }
      function w(I) {
        I === void 0 && (I = []);
        var v = Array.isArray(I) ? I : [I];
        !u.suppressWarning && v.length && t.warning("async-validator:", v), v.length && c.message !== void 0 && (v = [].concat(c.message));
        var B = v.map(qa(c, s));
        if (u.first && B.length)
          return h[c.field] = 1, b(B);
        if (!D)
          b(B);
        else {
          if (c.required && !p.value)
            return c.message !== void 0 ? B = [].concat(c.message).map(qa(c, s)) : u.error && (B = [u.error(c, ke(u.messages.required, c.field))]), b(B);
          var T = {};
          c.defaultField && Object.keys(p.value).map(function(W) {
            T[W] = c.defaultField;
          }), T = Mt({}, T, p.rule.fields);
          var O = {};
          Object.keys(T).forEach(function(W) {
            var e = T[W], E = Array.isArray(e) ? e : [e];
            O[W] = E.map(F.bind(null, W));
          });
          var N = new t(O);
          N.messages(u.messages), p.rule.options && (p.rule.options.messages = u.messages, p.rule.options.error = u.error), N.validate(p.value, p.rule.options || u, function(W) {
            var e = [];
            B && B.length && e.push.apply(e, B), W && W.length && e.push.apply(e, W), b(e.length ? e : null);
          });
        }
      }
      var _;
      if (c.asyncValidator)
        _ = c.asyncValidator(c, p.value, w, p.source, u);
      else if (c.validator) {
        try {
          _ = c.validator(c, p.value, w, p.source, u);
        } catch (I) {
          console.error == null || console.error(I), u.suppressValidatorError || setTimeout(function() {
            throw I;
          }, 0), w(I.message);
        }
        _ === !0 ? w() : _ === !1 ? w(typeof c.message == "function" ? c.message(c.fullField || c.field) : c.message || (c.fullField || c.field) + " fails") : _ instanceof Array ? w(_) : _ instanceof Error && w(_.message);
      }
      _ && _.then && _.then(function() {
        return w();
      }, function(I) {
        return w(I);
      });
    }, function(p) {
      d(p);
    }, s);
  }, r.getType = function(i) {
    if (i.type === void 0 && i.pattern instanceof RegExp && (i.type = "pattern"), typeof i.validator != "function" && i.type && !Ar.hasOwnProperty(i.type))
      throw new Error(ke("Unknown rule type %s", i.type));
    return i.type || "string";
  }, r.getValidationMethod = function(i) {
    if (typeof i.validator == "function")
      return i.validator;
    var a = Object.keys(i), o = a.indexOf("message");
    return o !== -1 && a.splice(o, 1), a.length === 1 && a[0] === "required" ? Ar.required : Ar[this.getType(i)] || void 0;
  }, t;
}();
rr.register = function(r, n) {
  if (typeof n != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Ar[r] = n;
};
rr.warning = ml;
rr.messages = xi;
rr.validators = Ar;
function tm(t) {
  const r = ce(Rr, null);
  return {
    mergedSize: R(() => t.size !== void 0 ? t.size : (r == null ? void 0 : r.props.size) !== void 0 ? r.props.size : "medium")
  };
}
function rm(t) {
  const r = ce(Rr, null), n = R(() => {
    const {
      labelPlacement: h
    } = t;
    return h !== void 0 ? h : r != null && r.props.labelPlacement ? r.props.labelPlacement : "top";
  }), i = R(() => n.value === "left" && (t.labelWidth === "auto" || (r == null ? void 0 : r.props.labelWidth) === "auto")), a = R(() => {
    if (n.value === "top") return;
    const {
      labelWidth: h
    } = t;
    if (h !== void 0 && h !== "auto")
      return lt(h);
    if (i.value) {
      const p = r == null ? void 0 : r.maxChildLabelWidthRef.value;
      return p !== void 0 ? lt(p) : void 0;
    }
    if ((r == null ? void 0 : r.props.labelWidth) !== void 0)
      return lt(r.props.labelWidth);
  }), o = R(() => {
    const {
      labelAlign: h
    } = t;
    if (h) return h;
    if (r != null && r.props.labelAlign) return r.props.labelAlign;
  }), l = R(() => {
    var h;
    return [(h = t.labelProps) === null || h === void 0 ? void 0 : h.style, t.labelStyle, {
      width: a.value
    }];
  }), s = R(() => {
    const {
      showRequireMark: h
    } = t;
    return h !== void 0 ? h : r == null ? void 0 : r.props.showRequireMark;
  }), u = R(() => {
    const {
      requireMarkPlacement: h
    } = t;
    return h !== void 0 ? h : (r == null ? void 0 : r.props.requireMarkPlacement) || "right";
  }), f = L(!1), d = L(!1), x = R(() => {
    const {
      validationStatus: h
    } = t;
    if (h !== void 0) return h;
    if (f.value) return "error";
    if (d.value) return "warning";
  }), m = R(() => {
    const {
      showFeedback: h
    } = t;
    return h !== void 0 ? h : (r == null ? void 0 : r.props.showFeedback) !== void 0 ? r.props.showFeedback : !0;
  }), C = R(() => {
    const {
      showLabel: h
    } = t;
    return h !== void 0 ? h : (r == null ? void 0 : r.props.showLabel) !== void 0 ? r.props.showLabel : !0;
  });
  return {
    validationErrored: f,
    validationWarned: d,
    mergedLabelStyle: l,
    mergedLabelPlacement: n,
    mergedLabelAlign: o,
    mergedShowRequireMark: s,
    mergedRequireMarkPlacement: u,
    mergedValidationStatus: x,
    mergedShowFeedback: m,
    mergedShowLabel: C,
    isAutoLabelWidth: i
  };
}
function nm(t) {
  const r = ce(Rr, null), n = R(() => {
    const {
      rulePath: l
    } = t;
    if (l !== void 0) return l;
    const {
      path: s
    } = t;
    if (s !== void 0) return s;
  }), i = R(() => {
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
        const d = Pi(u, f);
        d !== void 0 && (Array.isArray(d) ? l.push(...d) : l.push(d));
      }
    }
    return l;
  }), a = R(() => i.value.some((l) => l.required)), o = R(() => a.value || t.required);
  return {
    mergedRules: i,
    mergedRequired: o
  };
}
const {
  cubicBezierEaseInOut: Xa
} = or;
function im({
  name: t = "fade-down",
  fromOffset: r = "-4px",
  enterDuration: n = ".3s",
  leaveDuration: i = ".3s",
  enterCubicBezier: a = Xa,
  leaveCubicBezier: o = Xa
} = {}) {
  return [$(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`, {
    opacity: 0,
    transform: `translateY(${r})`
  }), $(`&.${t}-transition-enter-to, &.${t}-transition-leave-from`, {
    opacity: 1,
    transform: "translateY(0)"
  }), $(`&.${t}-transition-leave-active`, {
    transition: `opacity ${i} ${o}, transform ${i} ${o}`
  }), $(`&.${t}-transition-enter-active`, {
    transition: `opacity ${n} ${a}, transform ${n} ${a}`
  })];
}
const am = H("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [H("form-item-label", `
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
 `)]), H("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), X("auto-label-width", [H("form-item-label", "white-space: nowrap;")]), X("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [H("form-item-label", `
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `, [X("reverse-columns-space", `
 grid-template-columns: auto 1fr;
 `), X("left-mark", `
 grid-template-areas:
 "mark text"
 ". text";
 `), X("right-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), X("right-hanging-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), k("text", `
 grid-area: text; 
 `), k("asterisk", `
 grid-area: mark; 
 align-self: end;
 `)])]), X("top-labelled", `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [X("no-label", `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), H("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), H("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), H("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [$("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), H("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [X("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), X("error", {
  color: "var(--n-feedback-text-color-error)"
}), im({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
var Ya = function(t, r, n, i) {
  function a(o) {
    return o instanceof n ? o : new n(function(l) {
      l(o);
    });
  }
  return new (n || (n = Promise))(function(o, l) {
    function s(d) {
      try {
        f(i.next(d));
      } catch (x) {
        l(x);
      }
    }
    function u(d) {
      try {
        f(i.throw(d));
      } catch (x) {
        l(x);
      }
    }
    function f(d) {
      d.done ? o(d.value) : a(d.value).then(s, u);
    }
    f((i = i.apply(t, r || [])).next());
  });
};
const om = Object.assign(Object.assign({}, he.props), {
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
function Ka(t, r) {
  return (...n) => {
    try {
      const i = t(...n);
      return !r && (typeof i == "boolean" || i instanceof Error || Array.isArray(i)) || i != null && i.then ? i : (i === void 0 || er("form-item/validate", `You return a ${typeof i} typed value in the validator method, which is not recommended. Please use ${r ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`), !0);
    } catch (i) {
      er("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(i);
      return;
    }
  };
}
const lm = ee({
  name: "FormItem",
  props: om,
  setup(t) {
    vu(vl, "formItems", we(t, "path"));
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n
    } = Ve(t), i = ce(Rr, null), a = tm(t), o = rm(t), {
      validationErrored: l,
      validationWarned: s
    } = o, {
      mergedRequired: u,
      mergedRules: f
    } = nm(t), {
      mergedSize: d
    } = a, {
      mergedLabelPlacement: x,
      mergedLabelAlign: m,
      mergedRequireMarkPlacement: C
    } = o, h = L([]), p = L(Vn()), b = i ? we(i.props, "disabled") : L(!1), c = he("Form", "-form-item", am, pl, t, r);
    ze(we(t, "path"), () => {
      t.ignorePathChange || D();
    });
    function D() {
      h.value = [], l.value = !1, s.value = !1, t.feedback && (p.value = Vn());
    }
    const F = (...E) => Ya(this, [...E], void 0, function* (A = null, z = () => !0, P = {
      suppressWarning: !0
    }) {
      const {
        path: V
      } = t;
      P ? P.first || (P.first = t.first) : P = {};
      const {
        value: te
      } = f, J = i ? Pi(i.props.model, V || "") : void 0, xe = {}, oe = {}, Pe = (A ? te.filter((re) => Array.isArray(re.trigger) ? re.trigger.includes(A) : re.trigger === A) : te).filter(z).map((re, le) => {
        const ne = Object.assign({}, re);
        if (ne.validator && (ne.validator = Ka(ne.validator, !1)), ne.asyncValidator && (ne.asyncValidator = Ka(ne.asyncValidator, !0)), ne.renderMessage) {
          const Xe = `__renderMessage__${le}`;
          oe[Xe] = ne.message, ne.message = Xe, xe[Xe] = ne.renderMessage;
        }
        return ne;
      }), De = Pe.filter((re) => re.level !== "warning"), Me = Pe.filter((re) => re.level === "warning"), K = {
        valid: !0,
        errors: void 0,
        warnings: void 0
      };
      if (!Pe.length) return K;
      const Te = V ?? "__n_no_path__", Ie = new rr({
        [Te]: De
      }), Z = new rr({
        [Te]: Me
      }), {
        validateMessages: Re
      } = (i == null ? void 0 : i.props) || {};
      Re && (Ie.messages(Re), Z.messages(Re));
      const He = (re) => {
        h.value = re.map((le) => {
          const ne = (le == null ? void 0 : le.message) || "";
          return {
            key: ne,
            render: () => ne.startsWith("__renderMessage__") ? xe[ne]() : ne
          };
        }), re.forEach((le) => {
          var ne;
          !((ne = le.message) === null || ne === void 0) && ne.startsWith("__renderMessage__") && (le.message = oe[le.message]);
        });
      };
      if (De.length) {
        const re = yield new Promise((le) => {
          Ie.validate({
            [Te]: J
          }, P, le);
        });
        re != null && re.length && (K.valid = !1, K.errors = re, He(re));
      }
      if (Me.length && !K.errors) {
        const re = yield new Promise((le) => {
          Z.validate({
            [Te]: J
          }, P, le);
        });
        re != null && re.length && (He(re), K.warnings = re);
      }
      return !K.errors && !K.warnings ? D() : (l.value = !!K.errors, s.value = !!K.warnings), K;
    });
    function w() {
      F("blur");
    }
    function _() {
      F("change");
    }
    function I() {
      F("focus");
    }
    function v() {
      F("input");
    }
    function B(E, A) {
      return Ya(this, void 0, void 0, function* () {
        let z, P, V, te;
        return typeof E == "string" ? (z = E, P = A) : E !== null && typeof E == "object" && (z = E.trigger, P = E.callback, V = E.shouldRuleBeApplied, te = E.options), yield new Promise((J, xe) => {
          F(z, V, te).then(({
            valid: oe,
            errors: Pe,
            warnings: De
          }) => {
            oe ? (P && P(void 0, {
              warnings: De
            }), J({
              warnings: De
            })) : (P && P(Pe, {
              warnings: De
            }), xe(Pe));
          });
        });
      });
    }
    Ge(Jn, {
      path: we(t, "path"),
      disabled: b,
      mergedSize: a.mergedSize,
      mergedValidationStatus: o.mergedValidationStatus,
      restoreValidation: D,
      handleContentBlur: w,
      handleContentChange: _,
      handleContentFocus: I,
      handleContentInput: v
    });
    const T = {
      validate: B,
      restoreValidation: D,
      internalValidate: F
    }, O = L(null);
    ut(() => {
      if (!o.isAutoLabelWidth.value) return;
      const E = O.value;
      if (E !== null) {
        const A = E.style.whiteSpace;
        E.style.whiteSpace = "nowrap", E.style.width = "", i == null || i.deriveMaxChildLabelWidth(Number(getComputedStyle(E).width.slice(0, -2))), E.style.whiteSpace = A;
      }
    });
    const N = R(() => {
      var E;
      const {
        value: A
      } = d, {
        value: z
      } = x, P = z === "top" ? "vertical" : "horizontal", {
        common: {
          cubicBezierEaseInOut: V
        },
        self: {
          labelTextColor: te,
          asteriskColor: J,
          lineHeight: xe,
          feedbackTextColor: oe,
          feedbackTextColorWarning: Pe,
          feedbackTextColorError: De,
          feedbackPadding: Me,
          labelFontWeight: K,
          [G("labelHeight", A)]: Te,
          [G("blankHeight", A)]: Ie,
          [G("feedbackFontSize", A)]: Z,
          [G("feedbackHeight", A)]: Re,
          [G("labelPadding", P)]: He,
          [G("labelTextAlign", P)]: re,
          [G(G("labelFontSize", z), A)]: le
        }
      } = c.value;
      let ne = (E = m.value) !== null && E !== void 0 ? E : re;
      return z === "top" && (ne = ne === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": V,
        "--n-line-height": xe,
        "--n-blank-height": Ie,
        "--n-label-font-size": le,
        "--n-label-text-align": ne,
        "--n-label-height": Te,
        "--n-label-padding": He,
        "--n-label-font-weight": K,
        "--n-asterisk-color": J,
        "--n-label-text-color": te,
        "--n-feedback-padding": Me,
        "--n-feedback-font-size": Z,
        "--n-feedback-height": Re,
        "--n-feedback-text-color": oe,
        "--n-feedback-text-color-warning": Pe,
        "--n-feedback-text-color-error": De
      };
    }), W = n ? nt("form-item", R(() => {
      var E;
      return `${d.value[0]}${x.value[0]}${((E = m.value) === null || E === void 0 ? void 0 : E[0]) || ""}`;
    }), N, t) : void 0, e = R(() => x.value === "left" && C.value === "left" && m.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: O,
      mergedClsPrefix: r,
      mergedRequired: u,
      feedbackId: p,
      renderExplains: h,
      reverseColSpace: e
    }, o), a), T), {
      cssVars: n ? void 0 : N,
      themeClass: W == null ? void 0 : W.themeClass,
      onRender: W == null ? void 0 : W.onRender
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
      const f = y("span", {
        class: `${r}-form-item-label__text`
      }, u), d = l ? y("span", {
        class: `${r}-form-item-label__asterisk`
      }, a !== "left" ? " *" : "* ") : a === "right-hanging" && y("span", {
        class: `${r}-form-item-label__asterisk-placeholder`
      }, " *"), {
        labelProps: x
      } = this;
      return y("label", Object.assign({}, x, {
        class: [x == null ? void 0 : x.class, `${r}-form-item-label`, `${r}-form-item-label--${a}-mark`, this.reverseColSpace && `${r}-form-item-label--reverse-columns-space`],
        style: this.mergedLabelStyle,
        ref: "labelElementRef"
      }), a === "left" ? [d, f] : [f, d]);
    };
    return y("div", {
      class: [`${r}-form-item`, this.themeClass, `${r}-form-item--${this.mergedSize}-size`, `${r}-form-item--${this.mergedLabelPlacement}-labelled`, this.isAutoLabelWidth && `${r}-form-item--auto-label-width`, !n && `${r}-form-item--no-label`],
      style: this.cssVars
    }, n && s(), y("div", {
      class: [`${r}-form-item-blank`, this.mergedValidationStatus && `${r}-form-item-blank--${this.mergedValidationStatus}`]
    }, t), this.mergedShowFeedback ? y("div", {
      key: this.feedbackId,
      style: this.feedbackStyle,
      class: [`${r}-form-item-feedback-wrapper`, this.feedbackClass]
    }, y(It, {
      name: "fade-down-transition",
      mode: "out-in"
    }, {
      default: () => {
        const {
          mergedValidationStatus: u
        } = this;
        return Qe(t.feedback, (f) => {
          var d;
          const {
            feedback: x
          } = this, m = f || x ? y("div", {
            key: "__feedback__",
            class: `${r}-form-item-feedback__line`
          }, f || x) : this.renderExplains.length ? (d = this.renderExplains) === null || d === void 0 ? void 0 : d.map(({
            key: C,
            render: h
          }) => y("div", {
            key: C,
            class: `${r}-form-item-feedback__line`
          }, h())) : null;
          return m ? u === "warning" ? y("div", {
            key: "controlled-warning",
            class: `${r}-form-item-feedback ${r}-form-item-feedback--warning`
          }, m) : u === "error" ? y("div", {
            key: "controlled-error",
            class: `${r}-form-item-feedback ${r}-form-item-feedback--error`
          }, m) : u === "success" ? y("div", {
            key: "controlled-success",
            class: `${r}-form-item-feedback ${r}-form-item-feedback--success`
          }, m) : y("div", {
            key: "controlled-default",
            class: `${r}-form-item-feedback`
          }, m) : null;
        });
      }
    })) : null);
  }
});
function sm(t) {
  const {
    opacityDisabled: r,
    heightTiny: n,
    heightSmall: i,
    heightMedium: a,
    heightLarge: o,
    heightHuge: l,
    primaryColor: s,
    fontSize: u
  } = t;
  return {
    fontSize: u,
    textColor: s,
    sizeTiny: n,
    sizeSmall: i,
    sizeMedium: a,
    sizeLarge: o,
    sizeHuge: l,
    color: s,
    opacitySpinning: r
  };
}
const um = {
  name: "Spin",
  common: ct,
  self: sm
}, fm = {
  thPaddingSmall: "6px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "6px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px"
};
function dm(t) {
  const {
    dividerColor: r,
    cardColor: n,
    modalColor: i,
    popoverColor: a,
    tableHeaderColor: o,
    tableColorStriped: l,
    textColor1: s,
    textColor2: u,
    borderRadius: f,
    fontWeightStrong: d,
    lineHeight: x,
    fontSizeSmall: m,
    fontSizeMedium: C,
    fontSizeLarge: h
  } = t;
  return Object.assign(Object.assign({}, fm), {
    fontSizeSmall: m,
    fontSizeMedium: C,
    fontSizeLarge: h,
    lineHeight: x,
    borderRadius: f,
    borderColor: Le(n, r),
    borderColorModal: Le(i, r),
    borderColorPopover: Le(a, r),
    tdColor: n,
    tdColorModal: i,
    tdColorPopover: a,
    tdColorStriped: Le(n, l),
    tdColorStripedModal: Le(i, l),
    tdColorStripedPopover: Le(a, l),
    thColor: Le(n, o),
    thColorModal: Le(i, o),
    thColorPopover: Le(a, o),
    thTextColor: s,
    tdTextColor: u,
    thFontWeight: d
  });
}
const cm = {
  name: "Table",
  common: ct,
  self: dm
};
function xm(t) {
  const {
    primaryColor: r,
    baseColor: n
  } = t;
  return {
    color: r,
    iconColor: n
  };
}
const hm = {
  name: "IconWrapper",
  common: ct,
  self: xm
}, pm = H("icon-wrapper", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`), vm = Object.assign(Object.assign({}, he.props), {
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
}), mm = ee({
  name: "IconWrapper",
  props: vm,
  setup(t, {
    slots: r
  }) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: i
    } = Ve(t), a = he("IconWrapper", "-icon-wrapper", pm, hm, t, n), o = R(() => {
      const {
        common: {
          cubicBezierEaseInOut: s
        },
        self: {
          color: u,
          iconColor: f
        }
      } = a.value;
      return {
        "--n-bezier": s,
        "--n-color": u,
        "--n-icon-color": f
      };
    }), l = i ? nt("icon-wrapper", void 0, o, t) : void 0;
    return () => {
      const s = lt(t.size);
      return l == null || l.onRender(), y("div", {
        class: [`${n.value}-icon-wrapper`, l == null ? void 0 : l.themeClass.value],
        style: [o == null ? void 0 : o.value, {
          height: s,
          width: s,
          borderRadius: lt(t.borderRadius),
          backgroundColor: t.color,
          color: t.iconColor
        }]
      }, r);
    };
  }
}), gm = $([$("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), H("spin-container", `
 position: relative;
 `, [H("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [sl()])]), H("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), H("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [X("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]), H("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), H("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [X("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]), bm = {
  small: 20,
  medium: 18,
  large: 16
}, Cm = Object.assign(Object.assign({}, he.props), {
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
}), ym = ee({
  name: "Spin",
  props: Cm,
  setup(t) {
    process.env.NODE_ENV !== "production" && je(() => {
      t.spinning !== void 0 && gt("spin", "`spinning` is deprecated, please use `show` instead.");
    });
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n
    } = Ve(t), i = he("Spin", "-spin", gm, um, t, r), a = R(() => {
      const {
        size: u
      } = t, {
        common: {
          cubicBezierEaseInOut: f
        },
        self: d
      } = i.value, {
        opacitySpinning: x,
        color: m,
        textColor: C
      } = d, h = typeof u == "number" ? Os(u) : d[G("size", u)];
      return {
        "--n-bezier": f,
        "--n-opacity-spinning": x,
        "--n-size": h,
        "--n-color": m,
        "--n-text-color": C
      };
    }), o = n ? nt("spin", R(() => {
      const {
        size: u
      } = t;
      return typeof u == "number" ? String(u) : u[0];
    }), a, t) : void 0, l = co(t, ["spinning", "show"]), s = L(!1);
    return je((u) => {
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
      mergedStrokeWidth: R(() => {
        const {
          strokeWidth: u
        } = t;
        if (u !== void 0) return u;
        const {
          size: f
        } = t;
        return bm[typeof f == "number" ? "medium" : f];
      }),
      cssVars: n ? void 0 : a,
      themeClass: o == null ? void 0 : o.themeClass,
      onRender: o == null ? void 0 : o.onRender
    };
  },
  render() {
    var t, r;
    const {
      $slots: n,
      mergedClsPrefix: i,
      description: a
    } = this, o = n.icon && this.rotate, l = (a || n.description) && y("div", {
      class: `${i}-spin-description`
    }, a || ((t = n.description) === null || t === void 0 ? void 0 : t.call(n))), s = n.icon ? y("div", {
      class: [`${i}-spin-body`, this.themeClass]
    }, y("div", {
      class: [`${i}-spin`, o && `${i}-spin--rotate`],
      style: n.default ? "" : this.cssVars
    }, n.icon()), l) : y("div", {
      class: [`${i}-spin-body`, this.themeClass]
    }, y(Oi, {
      clsPrefix: i,
      style: n.default ? "" : this.cssVars,
      stroke: this.stroke,
      "stroke-width": this.mergedStrokeWidth,
      class: `${i}-spin`
    }), l);
    return (r = this.onRender) === null || r === void 0 || r.call(this), n.default ? y("div", {
      class: [`${i}-spin-container`, this.themeClass],
      style: this.cssVars
    }, y("div", {
      class: [`${i}-spin-content`, this.active && `${i}-spin-content--spinning`, this.contentClass],
      style: this.contentStyle
    }, n), y(It, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? s : null
    })) : s;
  }
}), Bm = $([H("table", `
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
 `, [$("th", `
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
 `, [$("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), $("td", `
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
 `, [$("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), X("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `, [$("tr", [$("&:last-child", [$("td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]), X("single-line", [$("th", `
 border-right: 0px solid var(--n-merged-border-color);
 `), $("td", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), X("single-column", [$("tr", [$("&:not(:last-child)", [$("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]), X("striped", [$("tr:nth-of-type(even)", [$("td", "background-color: var(--n-td-color-striped)")])]), qe("bottom-bordered", [$("tr", [$("&:last-child", [$("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]), cu(H("table", `
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `, [$("th", `
 background-color: var(--n-th-color-modal);
 `), $("td", `
 background-color: var(--n-td-color-modal);
 `)])), xu(H("table", `
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `, [$("th", `
 background-color: var(--n-th-color-popover);
 `), $("td", `
 background-color: var(--n-td-color-popover);
 `)]))]), wm = Object.assign(Object.assign({}, he.props), {
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
}), Dm = ee({
  name: "Table",
  props: wm,
  setup(t) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n,
      mergedRtlRef: i
    } = Ve(t), a = he("Table", "-table", Bm, cm, t, r), o = Dn("Table", i, r), l = R(() => {
      const {
        size: u
      } = t, {
        self: {
          borderColor: f,
          tdColor: d,
          tdColorModal: x,
          tdColorPopover: m,
          thColor: C,
          thColorModal: h,
          thColorPopover: p,
          thTextColor: b,
          tdTextColor: c,
          borderRadius: D,
          thFontWeight: F,
          lineHeight: w,
          borderColorModal: _,
          borderColorPopover: I,
          tdColorStriped: v,
          tdColorStripedModal: B,
          tdColorStripedPopover: T,
          [G("fontSize", u)]: O,
          [G("tdPadding", u)]: N,
          [G("thPadding", u)]: W
        },
        common: {
          cubicBezierEaseInOut: e
        }
      } = a.value;
      return {
        "--n-bezier": e,
        "--n-td-color": d,
        "--n-td-color-modal": x,
        "--n-td-color-popover": m,
        "--n-td-text-color": c,
        "--n-border-color": f,
        "--n-border-color-modal": _,
        "--n-border-color-popover": I,
        "--n-border-radius": D,
        "--n-font-size": O,
        "--n-th-color": C,
        "--n-th-color-modal": h,
        "--n-th-color-popover": p,
        "--n-th-font-weight": F,
        "--n-th-text-color": b,
        "--n-line-height": w,
        "--n-td-padding": N,
        "--n-th-padding": W,
        "--n-td-color-striped": v,
        "--n-td-color-striped-modal": B,
        "--n-td-color-striped-popover": T
      };
    }), s = n ? nt("table", R(() => t.size[0]), l, t) : void 0;
    return {
      rtlEnabled: o,
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
    return (t = this.onRender) === null || t === void 0 || t.call(this), y("table", {
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
}), Am = /* @__PURE__ */ Object.assign({
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
    return (n, i) => (bt(), Rt(ye(xv), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: ye(Gx),
      "date-locale": ye(op),
      "theme-overrides": r
    }, {
      default: Qt(() => [
        an(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale", "date-locale"]));
  }
});
var br = void 0, Jt = {}, hi;
Jt.throttle = hi = function(t, r, n, i) {
  var a, o = 0;
  typeof r != "boolean" && (i = n, n = r, r = br);
  function l() {
    var s = this, u = +/* @__PURE__ */ new Date() - o, f = arguments;
    function d() {
      o = +/* @__PURE__ */ new Date(), n.apply(s, f);
    }
    function x() {
      a = br;
    }
    i && !a && d(), a && clearTimeout(a), i === br && u > t ? d() : r !== !0 && (a = setTimeout(i ? x : d, i === br ? t - u : t));
  }
  return Jt.guid && (l.guid = n.guid = n.guid || Jt.guid++), l;
};
Jt.debounce = function(t, r, n) {
  return n === br ? hi(t, r, !1) : hi(t, n, r !== !1);
};
const bl = function(t, r, n) {
  return Jt.debounce(r || 300, n ?? !0, t);
}, Rm = function(t, r, n) {
  return Jt.throttle(r || 300, n ?? !1, t);
}, Fm = /* @__PURE__ */ Object.assign({
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
    const n = gs(), i = bs(), a = r, o = bl(function() {
      a("click");
    }, 300);
    return (l, s) => (bt(), Rt(ye(dv), {
      class: Cs(`${ye(n).class ? ye(n).class : ""}`),
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
      onClick: ye(o)
    }, Ja({
      default: Qt(() => [
        t.loading ? ys("", !0) : (bt(), Rt(ye(i).default, { key: 0 }))
      ]),
      _: 2
    }, [
      l.$slots.icon ? {
        name: "icon",
        fn: Qt(() => [
          Qa(ye(i).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "attr-type", "block", "size", "type", "loading", "disabled", "onClick"]));
  }
});
function Sm(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Cl = { exports: {} };
(function(t) {
  function r() {
    var n = 0, i = 1, a = 2, o = 3, l = 4, s = 5, u = 6, f = 7, d = 8, x = 9, m = 10, C = 11, h = 12, p = 13, b = 14, c = 15, D = 16, F = 17, w = 0, _ = 1, I = 2, v = 3, B = 4;
    function T(e, E) {
      return 55296 <= e.charCodeAt(E) && e.charCodeAt(E) <= 56319 && 56320 <= e.charCodeAt(E + 1) && e.charCodeAt(E + 1) <= 57343;
    }
    function O(e, E) {
      E === void 0 && (E = 0);
      var A = e.charCodeAt(E);
      if (55296 <= A && A <= 56319 && E < e.length - 1) {
        var z = A, P = e.charCodeAt(E + 1);
        return 56320 <= P && P <= 57343 ? (z - 55296) * 1024 + (P - 56320) + 65536 : z;
      }
      if (56320 <= A && A <= 57343 && E >= 1) {
        var z = e.charCodeAt(E - 1), P = A;
        return 55296 <= z && z <= 56319 ? (z - 55296) * 1024 + (P - 56320) + 65536 : P;
      }
      return A;
    }
    function N(e, E, A) {
      var z = [e].concat(E).concat([A]), P = z[z.length - 2], V = A, te = z.lastIndexOf(b);
      if (te > 1 && z.slice(1, te).every(function(oe) {
        return oe == o;
      }) && [o, p, F].indexOf(e) == -1)
        return I;
      var J = z.lastIndexOf(l);
      if (J > 0 && z.slice(1, J).every(function(oe) {
        return oe == l;
      }) && [h, l].indexOf(P) == -1)
        return z.filter(function(oe) {
          return oe == l;
        }).length % 2 == 1 ? v : B;
      if (P == n && V == i)
        return w;
      if (P == a || P == n || P == i)
        return V == b && E.every(function(oe) {
          return oe == o;
        }) ? I : _;
      if (V == a || V == n || V == i)
        return _;
      if (P == u && (V == u || V == f || V == x || V == m))
        return w;
      if ((P == x || P == f) && (V == f || V == d))
        return w;
      if ((P == m || P == d) && V == d)
        return w;
      if (V == o || V == c)
        return w;
      if (V == s)
        return w;
      if (P == h)
        return w;
      var xe = z.indexOf(o) != -1 ? z.lastIndexOf(o) - 1 : z.length - 2;
      return [p, F].indexOf(z[xe]) != -1 && z.slice(xe + 1, -1).every(function(oe) {
        return oe == o;
      }) && V == b || P == c && [D, F].indexOf(V) != -1 ? w : E.indexOf(l) != -1 ? I : P == l && V == l ? w : _;
    }
    this.nextBreak = function(e, E) {
      if (E === void 0 && (E = 0), E < 0)
        return 0;
      if (E >= e.length - 1)
        return e.length;
      for (var A = W(O(e, E)), z = [], P = E + 1; P < e.length; P++)
        if (!T(e, P - 1)) {
          var V = W(O(e, P));
          if (N(A, z, V))
            return P;
          z.push(V);
        }
      return e.length;
    }, this.splitGraphemes = function(e) {
      for (var E = [], A = 0, z; (z = this.nextBreak(e, A)) < e.length; )
        E.push(e.slice(A, z)), A = z;
      return A < e.length && E.push(e.slice(A)), E;
    }, this.iterateGraphemes = function(e) {
      var E = 0, A = {
        next: (function() {
          var z, P;
          return (P = this.nextBreak(e, E)) < e.length ? (z = e.slice(E, P), E = P, { value: z, done: !1 }) : E < e.length ? (z = e.slice(E), E = e.length, { value: z, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && (A[Symbol.iterator] = function() {
        return A;
      }), A;
    }, this.countGraphemes = function(e) {
      for (var E = 0, A = 0, z; (z = this.nextBreak(e, A)) < e.length; )
        A = z, E++;
      return A < e.length && E++, E;
    };
    function W(e) {
      return 1536 <= e && e <= 1541 || // Cf   [6] ARABIC NUMBER SIGN..ARABIC NUMBER MARK ABOVE
      e == 1757 || // Cf       ARABIC END OF AYAH
      e == 1807 || // Cf       SYRIAC ABBREVIATION MARK
      e == 2274 || // Cf       ARABIC DISPUTED END OF AYAH
      e == 3406 || // Lo       MALAYALAM LETTER DOT REPH
      e == 69821 || // Cf       KAITHI NUMBER SIGN
      70082 <= e && e <= 70083 || // Lo   [2] SHARADA SIGN JIHVAMULIYA..SHARADA SIGN UPADHMANIYA
      e == 72250 || // Lo       ZANABAZAR SQUARE CLUSTER-INITIAL LETTER RA
      72326 <= e && e <= 72329 || // Lo   [4] SOYOMBO CLUSTER-INITIAL LETTER RA..SOYOMBO CLUSTER-INITIAL LETTER SA
      e == 73030 ? h : e == 13 ? n : e == 10 ? i : 0 <= e && e <= 9 || // Cc  [10] <control-0000>..<control-0009>
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
      e == 55176 ? x : 44033 <= e && e <= 44059 || // Lo  [27] HANGUL SYLLABLE GAG..HANGUL SYLLABLE GAH
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
      55177 <= e && e <= 55203 ? m : e == 9757 || // So       WHITE UP POINTING INDEX
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
      129489 <= e && e <= 129501 ? p : 127995 <= e && e <= 127999 ? b : e == 8205 ? c : e == 9792 || // So       FEMALE SIGN
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
      e == 128658 ? D : 128102 <= e && e <= 128105 ? F : C;
    }
    return this;
  }
  t.exports && (t.exports = r);
})(Cl);
var Em = Cl.exports;
const $m = /* @__PURE__ */ Sm(Em), Pm = new $m(), Tm = (t = "") => Pm.countGraphemes(t), yl = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ ki({
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
  emits: /* @__PURE__ */ ki(["blur", "input"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const n = Bs(t, "modelValue"), i = r;
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
    return (s, u) => (bt(), Rt(ye(Jp), {
      "input-props": { autocomplete: "off" },
      type: t.type,
      size: t.size,
      "show-password-on": t.showPassword ? "click" : void 0,
      value: n.value,
      maxlength: t.maxlength,
      "show-count": t.showCount,
      "count-graphemes": t.maxlength != null && t.maxlength > 0 || t.showCount ? ye(Tm) : void 0,
      placeholder: t.placeholder,
      autofocus: t.autofocus,
      disabled: t.disabled,
      readonly: t.readonly,
      onInput: l,
      onBlur: o
    }, Ja({ _: 2 }, [
      t.prefixIcon ? {
        name: "prefix",
        fn: Qt(() => [
          Qa(ye(hl), ws(Ds(t.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly"]));
  }
}), zm = /* @__PURE__ */ Object.assign({
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
      const x = {};
      return t.model.forEach((m) => {
        m.slot || (x[m.field] = m.value);
      }), L(x);
    }();
    function a() {
      const x = {};
      return t.model.forEach((m) => {
        m.slot && (x[m.field] = $s(m.value));
      }), { ...i.value, ...x };
    }
    const o = n, l = Ii("form"), s = bl(function() {
      document.activeElement && document.activeElement.blur(), l.value.validate((x) => {
        o("submit", { formData: a(), valid: !x || x.length === 0, errors: x });
      }).catch(() => null);
    }), u = Ii("formItem");
    function f(x = "") {
      if (!x) {
        l.value.restoreValidation();
        return;
      }
      const m = u.value.find((C) => C.path === x);
      m && m.restoreValidation();
    }
    function d(x) {
      x && t.rules && t.rules[x] && (t.rules[x].trigger && t.rules[x].trigger.includes("input") || f(x));
    }
    return r({ restoreValidation: f }), (x, m) => (bt(), Rt(ye(wv), {
      ref: "form",
      "show-label": t.showLabel,
      "label-placement": t.labelPlacement,
      "label-width": "auto",
      "label-align": t.labelPlacement === "left" ? "right" : "left",
      model: ye(i),
      rules: t.rules,
      onSubmit: As(ye(s), ["prevent"])
    }, {
      default: Qt(() => [
        (bt(!0), Fs(Bt, null, Ss(t.model, (C) => (bt(), Rt(ye(lm), {
          ref_for: !0,
          ref: "formItem",
          key: C.field,
          label: C.label,
          path: C.field,
          "feedback-class": t.feedbackSizeClass ? `p-form-item-feedback-${t.feedbackSizeClass}` : "",
          first: !0
        }, {
          default: Qt(() => [
            !C.slot && C.type === "input" ? (bt(), Rt(Es(ye(yl)), gn({
              key: 0,
              modelValue: ye(i)[C.field],
              "onUpdate:modelValue": (h) => ye(i)[C.field] = h,
              ref_for: !0
            }, { disabled: t.disabled, readonly: t.readonly, ...C.props }, {
              onInput: (h) => d(C.field)
            }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : an(x.$slots, C.field, { key: 1 })
          ]),
          _: 2
        }, 1032, ["label", "path", "feedback-class"]))), 128)),
        an(x.$slots, "default")
      ]),
      _: 3
    }, 8, ["show-label", "label-placement", "label-align", "model", "rules", "onSubmit"]));
  }
}), _m = ({ delay: t = 300, minPendingTime: r = 500, loadingValue: n = !1 } = {}) => {
  let i = 0, a = null;
  const o = () => {
    a && (clearTimeout(a), a = null);
  }, l = L(!!n), s = L(!!n);
  let u = null;
  const f = () => (l.value = !1, new Promise((d) => {
    u = d;
  }));
  return ze(
    l,
    (d) => {
      if (i === 0)
        i = (/* @__PURE__ */ new Date()).getTime(), o(), a = setTimeout(() => {
          s.value = d;
        }, t);
      else {
        if (o(), s.value !== d) {
          const m = (/* @__PURE__ */ new Date()).getTime() - i - t, C = m >= r ? 0 : r - m;
          a = setTimeout(() => {
            s.value = d, u && (u(), u = null);
          }, C);
        } else
          u && (u(), u = null);
        i = 0;
      }
    },
    { immediate: !!n, deep: !1 }
  ), Ps(() => {
    u = null, o();
  }), { loading: s, waiting: l, doneLoading: f };
}, km = {
  install: (t, r = {}) => {
    const { prefix: n = "p" } = r;
    t.component(`${n}-config-provider`, Am), t.component(`${n}-button`, Fm), t.component(`${n}-input`, yl), t.component(`${n}-form`, zm), t.component(`${n}-icon-wrapper`, mm), t.component(`${n}-icon`, hl), t.component(`${n}-input-group`, tv), t.component(`${n}-input-group-label`, iv), t.component(`${n}-table`, Dm), t.component(`${n}-popover`, Wp), t.component(`${n}-spin`, ym);
  }
};
export {
  bl as debounce,
  km as default,
  Rm as throttle,
  _m as useDelayLoading
};
