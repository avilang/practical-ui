import { createTextVNode as Ka, Fragment as Ct, Comment as pi, isVNode as ls, defineComponent as re, inject as xe, getCurrentInstance as vn, watch as ze, onBeforeUnmount as qe, ref as L, readonly as jn, computed as _, onMounted as st, provide as Ve, withDirectives as mn, toRef as we, h as y, Teleport as ss, nextTick as nn, renderSlot as an, onActivated as us, onDeactivated as fs, onBeforeMount as vi, shallowRef as ds, watchEffect as Qe, Transition as Jt, TransitionGroup as xs, mergeProps as gn, vShow as cs, cloneVNode as hs, Text as ps, markRaw as Ri, openBlock as mt, createBlock as Rt, unref as ye, withCtx as Qt, useAttrs as vs, useSlots as ms, normalizeClass as gs, createSlots as Za, createCommentVNode as bs, createVNode as Ja, mergeModels as _i, useModel as Cs, normalizeProps as ys, guardReactiveProps as Bs, useTemplateRef as ki, withModifiers as ws, createElementBlock as Ds, renderList as As, resolveDynamicComponent as Fs, toValue as Es, onScopeDispose as Ss } from "vue";
let on = [];
const Qa = /* @__PURE__ */ new WeakMap();
function $s() {
  on.forEach((t) => t(...Qa.get(t))), on = [];
}
function Ps(t, ...r) {
  Qa.set(t, r), !on.includes(t) && on.push(t) === 1 && requestAnimationFrame($s);
}
function ln(t) {
  return t.composedPath()[0] || null;
}
function Ii(t) {
  return typeof t == "string" ? t.endsWith("px") ? Number(t.slice(0, t.length - 2)) : Number(t) : t;
}
function eo(t, r) {
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
const Hi = {
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
}, nr = "^\\s*", ir = "\\s*$", Pt = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Tt = "([0-9A-Fa-f])", zt = "([0-9A-Fa-f]{2})", Ts = new RegExp(`${nr}rgb\\s*\\(${Pt},${Pt},${Pt}\\)${ir}`), zs = new RegExp(`${nr}rgba\\s*\\(${Pt},${Pt},${Pt},${Pt}\\)${ir}`), Os = new RegExp(`${nr}#${Tt}${Tt}${Tt}${ir}`), Ms = new RegExp(`${nr}#${zt}${zt}${zt}${ir}`), Rs = new RegExp(`${nr}#${Tt}${Tt}${Tt}${Tt}${ir}`), _s = new RegExp(`${nr}#${zt}${zt}${zt}${zt}${ir}`);
function Oe(t) {
  return parseInt(t, 16);
}
function It(t) {
  try {
    let r;
    if (r = Ms.exec(t))
      return [Oe(r[1]), Oe(r[2]), Oe(r[3]), 1];
    if (r = Ts.exec(t))
      return [$e(r[1]), $e(r[5]), $e(r[9]), 1];
    if (r = zs.exec(t))
      return [
        $e(r[1]),
        $e(r[5]),
        $e(r[9]),
        Cr(r[13])
      ];
    if (r = Os.exec(t))
      return [
        Oe(r[1] + r[1]),
        Oe(r[2] + r[2]),
        Oe(r[3] + r[3]),
        1
      ];
    if (r = _s.exec(t))
      return [
        Oe(r[1]),
        Oe(r[2]),
        Oe(r[3]),
        Cr(Oe(r[4]) / 255)
      ];
    if (r = Rs.exec(t))
      return [
        Oe(r[1] + r[1]),
        Oe(r[2] + r[2]),
        Oe(r[3] + r[3]),
        Cr(Oe(r[4] + r[4]) / 255)
      ];
    if (t in Hi)
      return It(Hi[t]);
    throw new Error(`[seemly/rgba]: Invalid color value ${t}.`);
  } catch (r) {
    throw r;
  }
}
function ks(t) {
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Nn(t, r, n, i) {
  return `rgba(${$e(t)}, ${$e(r)}, ${$e(n)}, ${ks(i)})`;
}
function $n(t, r, n, i, a) {
  return $e((t * r * (1 - i) + n * i) / a);
}
function Le(t, r) {
  Array.isArray(t) || (t = It(t)), Array.isArray(r) || (r = It(r));
  const n = t[3], i = r[3], a = Cr(n + i - n * i);
  return Nn($n(t[0], n, r[0], i, a), $n(t[1], n, r[1], i, a), $n(t[2], n, r[2], i, a), a);
}
function Ot(t, r) {
  const [n, i, a, o = 1] = Array.isArray(t) ? t : It(t);
  return r.alpha ? Nn(n, i, a, r.alpha) : Nn(n, i, a, o);
}
function jr(t, r) {
  const [n, i, a, o = 1] = Array.isArray(t) ? t : It(t), { lightness: l = 1, alpha: s = 1 } = r;
  return Is([n * l, i * l, a * l, o * s]);
}
function Cr(t) {
  const r = Math.round(Number(t) * 100) / 100;
  return r > 1 ? 1 : r < 0 ? 0 : r;
}
function $e(t) {
  const r = Math.round(Number(t));
  return r > 255 ? 255 : r < 0 ? 0 : r;
}
function Is(t) {
  const [r, n, i] = t;
  return 3 in t ? `rgba(${$e(r)}, ${$e(n)}, ${$e(i)}, ${Cr(t[3])})` : `rgba(${$e(r)}, ${$e(n)}, ${$e(i)}, 1)`;
}
function Vn(t = 8) {
  return Math.random().toString(16).slice(2, 2 + t);
}
function Hs(t, r = [], n) {
  const i = {};
  return r.forEach((a) => {
    i[a] = t[a];
  }), Object.assign(i, n);
}
function qn(t, r = !0, n = []) {
  return t.forEach((i) => {
    if (i !== null) {
      if (typeof i != "object") {
        (typeof i == "string" || typeof i == "number") && n.push(Ka(String(i)));
        return;
      }
      if (Array.isArray(i)) {
        qn(i, r, n);
        return;
      }
      if (i.type === Ct) {
        if (i.children === null) return;
        Array.isArray(i.children) && qn(i.children, r, n);
      } else {
        if (i.type === pi && r) return;
        n.push(i);
      }
    }
  }), n;
}
function pe(t, ...r) {
  if (Array.isArray(t))
    t.forEach((n) => pe(n, ...r));
  else
    return t(...r);
}
function Wi(t) {
  return Object.keys(t);
}
const Li = /* @__PURE__ */ new Set();
function $t(t, r) {
  const n = `[naive/${t}]: ${r}`;
  Li.has(n) || (Li.add(n), console.error(n));
}
function er(t, r) {
  console.error(`[naive/${t}]: ${r}`);
}
function to(t, r) {
  throw new Error(`[naive/${t}]: ${r}`);
}
function ji(t, r = "default", n = void 0) {
  const i = t[r];
  if (!i)
    return er("getFirstSlotVNode", `slot[${r}] is empty`), null;
  const a = qn(i(n));
  return a.length === 1 ? a[0] : (er("getFirstSlotVNode", `slot[${r}] should have exactly one child`), null);
}
function zr(t) {
  return t.some((r) => ls(r) ? !(r.type === pi || r.type === Ct && !zr(r.children)) : !0) ? t : null;
}
function yr(t, r) {
  return t && zr(t()) || r();
}
function Ws(t, r, n) {
  return t && zr(t(r)) || n(r);
}
function Je(t, r) {
  const n = t && zr(t());
  return r(n || null);
}
function Gn(t) {
  return !(t && zr(t()));
}
const Ni = re({
  render() {
    var t, r;
    return (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t);
  }
}), Ls = /^(\d|\.)+$/, Vi = /(\d|\.)+/;
function ot(t, {
  c: r = 1,
  offset: n = 0,
  attachPx: i = !0
} = {}) {
  if (typeof t == "number") {
    const a = (t + n) * r;
    return a === 0 ? "0" : `${a}px`;
  } else if (typeof t == "string")
    if (Ls.test(t)) {
      const a = (Number(t) + n) * r;
      return i ? a === 0 ? "0" : `${a}px` : `${a}`;
    } else {
      const a = Vi.exec(t);
      return a ? t.replace(Vi, String((Number(a[0]) + n) * r)) : t;
    }
  return t;
}
function qi(t) {
  return t.replace(/#|\(|\)|,|\s|\./g, "_");
}
function Gi(t) {
  const {
    left: r,
    right: n,
    top: i,
    bottom: a
  } = eo(t);
  return `${i} ${n} ${a} ${r}`;
}
function js(t) {
  let r = 0;
  for (let n = 0; n < t.length; ++n)
    t[n] === "&" && ++r;
  return r;
}
const ro = /\s*,(?![^(]*\))\s*/g, Ns = /\s+/g;
function Vs(t, r) {
  const n = [];
  return r.split(ro).forEach((i) => {
    let a = js(i);
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
function qs(t, r) {
  const n = [];
  return r.split(ro).forEach((i) => {
    t.forEach((a) => {
      n.push((a && a + " ") + i);
    });
  }), n;
}
function Gs(t) {
  let r = [""];
  return t.forEach((n) => {
    n = n && n.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    n && (n.includes("&") ? r = Vs(r, n) : r = qs(r, n));
  }), r.join(", ").replace(Ns, " ");
}
function Ui(t) {
  if (!t)
    return;
  const r = t.parentElement;
  r && r.removeChild(t);
}
function bn(t, r) {
  return (r ?? document.head).querySelector(`style[cssr-id="${t}"]`);
}
function Us(t) {
  const r = document.createElement("style");
  return r.setAttribute("cssr-id", t), r;
}
function Nr(t) {
  return t ? /^\s*@(s|m)/.test(t) : !1;
}
const Xs = /[A-Z]/g;
function no(t) {
  return t.replace(Xs, (r) => "-" + r.toLowerCase());
}
function Ys(t, r = "  ") {
  return typeof t == "object" && t !== null ? ` {
` + Object.entries(t).map((n) => r + `  ${no(n[0])}: ${n[1]};`).join(`
`) + `
` + r + "}" : `: ${t};`;
}
function Ks(t, r, n) {
  return typeof t == "function" ? t({
    context: r.context,
    props: n
  }) : t;
}
function Xi(t, r, n, i) {
  if (!r)
    return "";
  const a = Ks(r, n, i);
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
    s = no(s), u != null && l.push(`  ${s}${Ys(u)}`);
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
function io(t, r, n, i, a) {
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
  const s = Gs(r), u = Xi(s, t.props, i, a);
  l ? n.push(`${l} {`) : u.length && n.push(u), t.children && Un(t.children, {
    context: i.context,
    props: a
  }, (f) => {
    if (typeof f == "string") {
      const d = Xi(s, { raw: f }, i, a);
      n.push(d);
    } else
      io(f, r, n, i, a);
  }), r.pop(), l && n.push("}"), o && o.after && o.after(i.context);
}
function Zs(t, r, n) {
  const i = [];
  return io(t, [], i, r, n), i.join(`

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
function Js(t, r, n, i) {
  const { els: a } = r;
  if (n === void 0)
    a.forEach(Ui), r.els = [];
  else {
    const o = bn(n, i);
    o && a.includes(o) && (Ui(o), r.els = a.filter((l) => l !== o));
  }
}
function Yi(t, r) {
  t.push(r);
}
function Qs(t, r, n, i, a, o, l, s, u) {
  let f;
  if (n === void 0 && (f = r.render(i), n = Fr(f)), u) {
    u.adapter(n, f ?? r.render(i));
    return;
  }
  s === void 0 && (s = document.head);
  const d = bn(n, s);
  if (d !== null && !o)
    return d;
  const c = d ?? Us(n);
  if (f === void 0 && (f = r.render(i)), c.textContent = f, d !== null)
    return d;
  if (l) {
    const m = s.querySelector(`meta[name="${l}"]`);
    if (m)
      return s.insertBefore(c, m), Yi(r.els, c), c;
  }
  return a ? s.insertBefore(c, s.querySelector("style, link")) : s.appendChild(c), Yi(r.els, c), c;
}
function eu(t) {
  return Zs(this, this.instance, t);
}
function tu(t = {}) {
  const { id: r, ssr: n, props: i, head: a = !1, force: o = !1, anchorMetaName: l, parent: s } = t;
  return Qs(this.instance, this, r, i, a, o, l, s, n);
}
function ru(t = {}) {
  const { id: r, parent: n } = t;
  Js(this.instance, this, r, n);
}
const Vr = function(t, r, n, i) {
  return {
    instance: t,
    $: r,
    props: n,
    children: i,
    els: [],
    render: eu,
    mount: tu,
    unmount: ru
  };
}, nu = function(t, r, n, i) {
  return Array.isArray(r) ? Vr(t, { $: null }, null, r) : Array.isArray(n) ? Vr(t, r, null, n) : Array.isArray(i) ? Vr(t, r, n, i) : Vr(t, r, n, null);
};
function ao(t = {}) {
  const r = {
    c: (...n) => nu(r, ...n),
    use: (n, ...i) => n.install(r, ...i),
    find: bn,
    context: {},
    config: t
  };
  return r;
}
function iu(t, r) {
  if (t === void 0)
    return !1;
  if (r) {
    const { context: { ids: n } } = r;
    return n.has(t);
  }
  return bn(t) !== null;
}
function au(t) {
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
      before(x) {
        p = x.bem.b, b = x.bem.els, x.bem.els = null;
      },
      after(x) {
        x.bem.b = p, x.bem.els = b;
      },
      $({ context: x, props: D }) {
        return h = typeof h == "string" ? h : h({ context: x, props: D }), x.bem.b = h, `${(D == null ? void 0 : D.bPrefix) || r}${x.bem.b}`;
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
      $({ context: b, props: x }) {
        return h = typeof h == "string" ? h : h({ context: b, props: x }), b.bem.els = h.split(",").map((D) => D.trim()), b.bem.els.map((D) => `${(x == null ? void 0 : x.bPrefix) || r}${b.bem.b}${n}${D}`).join(", ");
      }
    };
  }
  function u(h) {
    return {
      $({ context: p, props: b }) {
        h = typeof h == "string" ? h : h({ context: p, props: b });
        const x = h.split(",").map((w) => w.trim());
        function D(w) {
          return x.map((R) => `&${(b == null ? void 0 : b.bPrefix) || r}${p.bem.b}${w !== void 0 ? `${n}${w}` : ""}${i}${R}`).join(", ");
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
        const x = p.bem.els;
        if (process.env.NODE_ENV !== "production" && x !== null && x.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${h}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(b == null ? void 0 : b.bPrefix) || r}${p.bem.b}${x !== null && x.length > 0 ? `${n}${x[0]}` : ""}${i}${h})`;
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
const ou = "n", sn = `.${ou}-`, lu = "__", su = "--", oo = ao(), lo = au({
  blockPrefix: sn,
  elementPrefix: lu,
  modifierPrefix: su
});
oo.use(lo);
const {
  c: $,
  find: Em
} = oo, {
  cB: W,
  cE: k,
  cM: X,
  cNotM: Ne
} = lo;
function uu(t) {
  return $(({
    props: {
      bPrefix: r
    }
  }) => `${r || sn}modal, ${r || sn}drawer`, [t]);
}
function fu(t) {
  return $(({
    props: {
      bPrefix: r
    }
  }) => `${r || sn}popover`, [t]);
}
const du = (...t) => $(">", [W(...t)]);
function G(t, r) {
  return t + (r === "default" ? "" : r.replace(/^[a-z]/, (n) => n.toUpperCase()));
}
let Pn;
function xu() {
  return Pn === void 0 && (Pn = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Pn;
}
const Cn = typeof document < "u" && typeof window < "u";
function cu(t, r, n) {
  var i;
  const a = xe(t, null);
  if (a === null) return;
  const o = (i = vn()) === null || i === void 0 ? void 0 : i.proxy;
  ze(n, l), l(n.value), qe(() => {
    l(void 0, n.value);
  });
  function l(f, d) {
    if (!a) return;
    const c = a[r];
    d !== void 0 && s(c, d), f !== void 0 && u(c, f);
  }
  function s(f, d) {
    f[d] || (f[d] = []), f[d].splice(f[d].findIndex((c) => c === o), 1);
  }
  function u(f, d) {
    f[d] || (f[d] = []), ~f[d].findIndex((c) => c === o) || f[d].push(o);
  }
}
function hu(t) {
  const r = L(!!t.value);
  if (r.value)
    return jn(r);
  const n = ze(t, (i) => {
    i && (r.value = !0, n());
  });
  return jn(r);
}
function tt(t) {
  const r = _(t), n = L(r.value);
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
const pu = typeof window < "u";
let Xt, Br;
const vu = () => {
  var t, r;
  Xt = pu ? (r = (t = document) === null || t === void 0 ? void 0 : t.fonts) === null || r === void 0 ? void 0 : r.ready : void 0, Br = !1, Xt !== void 0 ? Xt.then(() => {
    Br = !0;
  }) : Br = !0;
};
vu();
function mu(t) {
  if (Br)
    return;
  let r = !1;
  st(() => {
    Br || Xt == null || Xt.then(() => {
      r || t();
    });
  }), qe(() => {
    r = !0;
  });
}
function en(t) {
  return t.composedPath()[0];
}
const gu = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function bu(t, r, n) {
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
function so(t, r, n) {
  const i = gu[t];
  let a = i.get(r);
  a === void 0 && i.set(r, a = /* @__PURE__ */ new WeakMap());
  let o = a.get(n);
  return o === void 0 && a.set(n, o = bu(t, r, n)), o;
}
function Cu(t, r, n, i) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const a = so(t, r, n);
    return Object.keys(a).forEach((o) => {
      Ae(o, document, a[o], i);
    }), !0;
  }
  return !1;
}
function yu(t, r, n, i) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const a = so(t, r, n);
    return Object.keys(a).forEach((o) => {
      ge(o, document, a[o], i);
    }), !0;
  }
  return !1;
}
function Bu() {
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
  }, c = {};
  function m() {
    const v = function(B) {
      const { type: T, eventPhase: O, bubbles: N } = B, H = en(B);
      if (O === 2)
        return;
      const e = O === 1 ? "capture" : "bubble";
      let S = H;
      const A = [];
      for (; S === null && (S = window), A.push(S), S !== window; )
        S = S.parentNode || null;
      const z = d.capture[T], P = d.bubble[T];
      if (a(B, "stopPropagation", n), a(B, "stopImmediatePropagation", i), f(B, u), e === "capture") {
        if (z === void 0)
          return;
        for (let V = A.length - 1; V >= 0 && !t.has(B); --V) {
          const ee = A[V], J = z.get(ee);
          if (J !== void 0) {
            l.set(B, ee);
            for (const ce of J) {
              if (r.has(B))
                break;
              ce(B);
            }
          }
          if (V === 0 && !N && P !== void 0) {
            const ce = P.get(ee);
            if (ce !== void 0)
              for (const oe of ce) {
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
          const ee = A[V], J = P.get(ee);
          if (J !== void 0) {
            l.set(B, ee);
            for (const ce of J) {
              if (r.has(B))
                break;
              ce(B);
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
      const N = c[T];
      N !== void 0 && N.forEach((H) => H(B));
    };
    return v.displayName = "evtdUnifiedWindowEventHandler", v;
  }
  const h = m(), p = C();
  function b(v, B) {
    const T = d[v];
    return T[B] === void 0 && (T[B] = /* @__PURE__ */ new Map(), window.addEventListener(B, h, v === "capture")), T[B];
  }
  function x(v) {
    return c[v] === void 0 && (c[v] = /* @__PURE__ */ new Set(), window.addEventListener(v, p)), c[v];
  }
  function D(v, B) {
    let T = v.get(B);
    return T === void 0 && v.set(B, T = /* @__PURE__ */ new Set()), T;
  }
  function F(v, B, T, O) {
    const N = d[B][T];
    if (N !== void 0) {
      const H = N.get(v);
      if (H !== void 0 && H.has(O))
        return !0;
    }
    return !1;
  }
  function w(v, B) {
    const T = c[v];
    return !!(T !== void 0 && T.has(B));
  }
  function R(v, B, T, O) {
    let N;
    if (typeof O == "object" && O.once === !0 ? N = (z) => {
      I(v, B, N, O), T(z);
    } : N = T, Cu(v, B, N, O))
      return;
    const e = O === !0 || typeof O == "object" && O.capture === !0 ? "capture" : "bubble", S = b(e, v), A = D(S, B);
    if (A.has(N) || A.add(N), B === window) {
      const z = x(v);
      z.has(N) || z.add(N);
    }
  }
  function I(v, B, T, O) {
    if (yu(v, B, T, O))
      return;
    const H = O === !0 || typeof O == "object" && O.capture === !0, e = H ? "capture" : "bubble", S = b(e, v), A = D(S, B);
    if (B === window && !F(B, H ? "bubble" : "capture", v, T) && w(v, T)) {
      const P = c[v];
      P.delete(T), P.size === 0 && (window.removeEventListener(v, p), c[v] = void 0);
    }
    A.has(T) && A.delete(T), A.size === 0 && S.delete(B), S.size === 0 && (window.removeEventListener(v, h, e === "capture"), d[e][v] = void 0);
  }
  return {
    on: R,
    off: I
  };
}
const { on: Ae, off: ge } = Bu();
function uo(t, r) {
  return ze(t, (n) => {
    n !== void 0 && (r.value = n);
  }), _(() => t.value === void 0 ? r.value : t.value);
}
function mi() {
  const t = L(!1);
  return st(() => {
    t.value = !0;
  }), jn(t);
}
function wu(t, r) {
  return _(() => {
    for (const n of r)
      if (t[n] !== void 0)
        return t[n];
    return t[r[r.length - 1]];
  });
}
const Du = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Au() {
  return Du;
}
const Fu = "n-internal-select-menu-body", fo = "n-modal-body", xo = "n-drawer-body", co = "n-popover-body", ho = "__disabled__";
function tr(t) {
  const r = xe(fo, null), n = xe(xo, null), i = xe(co, null), a = xe(Fu, null), o = L();
  if (typeof document < "u") {
    o.value = document.fullscreenElement;
    const l = () => {
      o.value = document.fullscreenElement;
    };
    st(() => {
      Ae("fullscreenchange", document, l);
    }), qe(() => {
      ge("fullscreenchange", document, l);
    });
  }
  return tt(() => {
    var l;
    const {
      to: s
    } = t;
    return s !== void 0 ? s === !1 ? ho : s === !0 ? o.value || "body" : s : r != null && r.value ? (l = r.value.$el) !== null && l !== void 0 ? l : r.value : n != null && n.value ? n.value : i != null && i.value ? i.value : a != null && a.value ? a.value : s ?? (o.value || "body");
  });
}
tr.tdkey = ho;
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
        (typeof i == "string" || typeof i == "number") && n.push(Ka(String(i)));
        return;
      }
      if (Array.isArray(i)) {
        Yn(i, r, n);
        return;
      }
      if (i.type === Ct) {
        if (i.children === null)
          return;
        Array.isArray(i.children) && Yn(i.children, r, n);
      } else i.type !== pi && n.push(i);
    }
  }), n;
}
function Ki(t, r, n = "default") {
  const i = r[n];
  if (i === void 0)
    throw new Error(`[vueuc/${t}]: slot[${n}] is empty.`);
  const a = Yn(i());
  if (a.length === 1)
    return a[0];
  throw new Error(`[vueuc/${t}]: slot[${n}] should have exactly one child.`);
}
let ht = null;
function po() {
  if (ht === null && (ht = document.getElementById("v-binder-view-measurer"), ht === null)) {
    ht = document.createElement("div"), ht.id = "v-binder-view-measurer";
    const { style: t } = ht;
    t.position = "fixed", t.left = "0", t.right = "0", t.top = "0", t.bottom = "0", t.pointerEvents = "none", t.visibility = "hidden", document.body.appendChild(ht);
  }
  return ht.getBoundingClientRect();
}
function Eu(t, r) {
  const n = po();
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
  const r = t.getBoundingClientRect(), n = po();
  return {
    left: r.left - n.left,
    top: r.top - n.top,
    bottom: n.height + n.top - r.bottom,
    right: n.width + n.left - r.right,
    width: r.width,
    height: r.height
  };
}
function Su(t) {
  return t.nodeType === 9 ? null : t.parentNode;
}
function vo(t) {
  if (t === null)
    return null;
  const r = Su(t);
  if (r === null)
    return null;
  if (r.nodeType === 9)
    return document;
  if (r.nodeType === 1) {
    const { overflow: n, overflowX: i, overflowY: a } = getComputedStyle(r);
    if (/(auto|scroll|overlay)/.test(n + a + i))
      return r;
  }
  return vo(r);
}
const $u = re({
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
    Ve("VBinder", (r = vn()) === null || r === void 0 ? void 0 : r.proxy);
    const n = xe("VBinder", null), i = L(null), a = (x) => {
      i.value = x, n && t.syncTargetWithParent && n.setTargetRef(x);
    };
    let o = [];
    const l = () => {
      let x = i.value;
      for (; x = vo(x), x !== null; )
        o.push(x);
      for (const D of o)
        Ae("scroll", D, c, !0);
    }, s = () => {
      for (const x of o)
        ge("scroll", x, c, !0);
      o = [];
    }, u = /* @__PURE__ */ new Set(), f = (x) => {
      u.size === 0 && l(), u.has(x) || u.add(x);
    }, d = (x) => {
      u.has(x) && u.delete(x), u.size === 0 && s();
    }, c = () => {
      Ps(m);
    }, m = () => {
      u.forEach((x) => x());
    }, C = /* @__PURE__ */ new Set(), h = (x) => {
      C.size === 0 && Ae("resize", window, b), C.has(x) || C.add(x);
    }, p = (x) => {
      C.has(x) && C.delete(x), C.size === 0 && ge("resize", window, b);
    }, b = () => {
      C.forEach((x) => x());
    };
    return qe(() => {
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
}), Pu = re({
  name: "Target",
  setup() {
    const { setTargetRef: t, syncTarget: r } = xe("VBinder");
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
    return t ? mn(Ki("follower", this.$slots), [
      [r]
    ]) : Ki("follower", this.$slots);
  }
}), Vt = "@@mmoContext", Tu = {
  mounted(t, { value: r }) {
    t[Vt] = {
      handler: void 0
    }, typeof r == "function" && (t[Vt].handler = r, Ae("mousemoveoutside", t, r));
  },
  updated(t, { value: r }) {
    const n = t[Vt];
    typeof r == "function" ? n.handler ? n.handler !== r && (ge("mousemoveoutside", t, n.handler), n.handler = r, Ae("mousemoveoutside", t, r)) : (t[Vt].handler = r, Ae("mousemoveoutside", t, r)) : n.handler && (ge("mousemoveoutside", t, n.handler), n.handler = void 0);
  },
  unmounted(t) {
    const { handler: r } = t[Vt];
    r && ge("mousemoveoutside", t, r), t[Vt].handler = void 0;
  }
}, qt = "@@coContext", Zi = {
  mounted(t, { value: r, modifiers: n }) {
    t[qt] = {
      handler: void 0
    }, typeof r == "function" && (t[qt].handler = r, Ae("clickoutside", t, r, {
      capture: n.capture
    }));
  },
  updated(t, { value: r, modifiers: n }) {
    const i = t[qt];
    typeof r == "function" ? i.handler ? i.handler !== r && (ge("clickoutside", t, i.handler, {
      capture: n.capture
    }), i.handler = r, Ae("clickoutside", t, r, {
      capture: n.capture
    })) : (t[qt].handler = r, Ae("clickoutside", t, r, {
      capture: n.capture
    })) : i.handler && (ge("clickoutside", t, i.handler, {
      capture: n.capture
    }), i.handler = void 0);
  },
  unmounted(t, { modifiers: r }) {
    const { handler: n } = t[qt];
    n && ge("clickoutside", t, n, {
      capture: r.capture
    }), t[qt].handler = void 0;
  }
};
function zu(t, r) {
  console.error(`[vdirs/${t}]: ${r}`);
}
class Ou {
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
    i.has(r) ? i.delete(r) : n === void 0 && zu("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const zn = new Ou(), Gt = "@@ziContext", mo = {
  mounted(t, r) {
    const { value: n = {} } = r, { zIndex: i, enabled: a } = n;
    t[Gt] = {
      enabled: !!a,
      initialized: !1
    }, a && (zn.ensureZIndex(t, i), t[Gt].initialized = !0);
  },
  updated(t, r) {
    const { value: n = {} } = r, { zIndex: i, enabled: a } = n, o = t[Gt].enabled;
    a && !o && (zn.ensureZIndex(t, i), t[Gt].initialized = !0), t[Gt].enabled = !!a;
  },
  unmounted(t, r) {
    if (!t[Gt].initialized)
      return;
    const { value: n = {} } = r, { zIndex: i } = n;
    zn.unregister(t, i);
  }
}, Mu = "@css-render/vue3-ssr";
function Ru(t, r) {
  return `<style cssr-id="${t}">
${r}
</style>`;
}
function _u(t, r, n) {
  const { styles: i, ids: a } = n;
  a.has(t) || i !== null && (a.add(t), i.push(Ru(t, r)));
}
const ku = typeof document < "u";
function Or() {
  if (ku)
    return;
  const t = xe(Mu, null);
  if (t !== null)
    return {
      adapter: (r, n) => _u(r, n, t),
      context: t
    };
}
function Ji(t, r) {
  console.error(`[vueuc/${t}]: ${r}`);
}
const { c: qr } = ao(), Iu = "vueuc-style";
function Qi(t) {
  return typeof t == "string" ? document.querySelector(t) : t();
}
const Hu = re({
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
      showTeleport: hu(we(t, "show")),
      mergedTo: _(() => {
        const { to: r } = t;
        return r ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? Xn("lazy-teleport", this.$slots) : y(ss, {
      disabled: this.disabled,
      to: this.mergedTo
    }, Xn("lazy-teleport", this.$slots)) : null;
  }
}), Gr = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, ea = {
  start: "end",
  center: "center",
  end: "start"
}, On = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, Wu = {
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
}, Lu = {
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
}, ju = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, ta = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, ra = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Nu(t, r, n, i, a, o) {
  if (!a || o)
    return { placement: t, top: 0, left: 0 };
  const [l, s] = t.split("-");
  let u = s ?? "center", f = {
    top: 0,
    left: 0
  };
  const d = (C, h, p) => {
    let b = 0, x = 0;
    const D = n[C] - r[h] - r[C];
    return D > 0 && i && (p ? x = ta[h] ? D : -D : b = ta[h] ? D : -D), {
      left: b,
      top: x
    };
  }, c = l === "left" || l === "right";
  if (u !== "center") {
    const C = ju[t], h = Gr[C], p = On[C];
    if (n[p] > r[p]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        r[C] + r[p] < n[p]
      ) {
        const b = (n[p] - r[p]) / 2;
        r[C] < b || r[h] < b ? r[C] < r[h] ? (u = ea[s], f = d(p, h, c)) : f = d(p, C, c) : u = "center";
      }
    } else n[p] < r[p] && r[h] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    r[C] > r[h] && (u = ea[s]);
  } else {
    const C = l === "bottom" || l === "top" ? "left" : "top", h = Gr[C], p = On[C], b = (n[p] - r[p]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (r[C] < b || r[h] < b) && (r[C] > r[h] ? (u = ra[C], f = d(p, C, c)) : (u = ra[h], f = d(p, h, c)));
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
function Vu(t, r) {
  return r ? Lu[t] : Wu[t];
}
function qu(t, r, n, i, a, o) {
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
const Gu = qr([
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
]), Uu = re({
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
    const r = xe("VBinder"), n = tt(() => t.enabled !== void 0 ? t.enabled : t.show), i = L(null), a = L(null), o = () => {
      const { syncTrigger: m } = t;
      m.includes("scroll") && r.addScrollListener(u), m.includes("resize") && r.addResizeListener(u);
    }, l = () => {
      r.removeScrollListener(u), r.removeResizeListener(u);
    };
    st(() => {
      n.value && (u(), o());
    });
    const s = Or();
    Gu.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: Iu,
      ssr: s
    }), qe(() => {
      l();
    }), mu(() => {
      n.value && u();
    });
    const u = () => {
      if (!n.value)
        return;
      const m = i.value;
      if (m === null)
        return;
      const C = r.targetRef, { x: h, y: p, overlap: b } = t, x = h !== void 0 && p !== void 0 ? Eu(h, p) : Tn(C);
      m.style.setProperty("--v-target-width", `${Math.round(x.width)}px`), m.style.setProperty("--v-target-height", `${Math.round(x.height)}px`);
      const { width: D, minWidth: F, placement: w, internalShift: R, flip: I } = t;
      m.setAttribute("v-placement", w), b ? m.setAttribute("v-overlap", "") : m.removeAttribute("v-overlap");
      const { style: v } = m;
      D === "target" ? v.width = `${x.width}px` : D !== void 0 ? v.width = D : v.width = "", F === "target" ? v.minWidth = `${x.width}px` : F !== void 0 ? v.minWidth = F : v.minWidth = "";
      const B = Tn(m), T = Tn(a.value), { left: O, top: N, placement: H } = Nu(w, x, B, R, I, b), e = Vu(H, b), { left: S, top: A, transform: z } = qu(H, T, x, N, O, b);
      m.setAttribute("v-placement", H), m.style.setProperty("--v-offset-left", `${Math.round(O)}px`), m.style.setProperty("--v-offset-top", `${Math.round(N)}px`), m.style.transform = `translateX(${S}) translateY(${A}) ${z}`, m.style.setProperty("--v-transform-origin", e), m.style.transformOrigin = e;
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
    const d = mi(), c = tt(() => {
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
      mergedTo: c,
      syncPosition: u
    };
  },
  render() {
    return y(Hu, {
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
            mo,
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
var _t = [], Xu = function() {
  return _t.some(function(t) {
    return t.activeTargets.length > 0;
  });
}, Yu = function() {
  return _t.some(function(t) {
    return t.skippedTargets.length > 0;
  });
}, na = "ResizeObserver loop completed with undelivered notifications.", Ku = function() {
  var t;
  typeof ErrorEvent == "function" ? t = new ErrorEvent("error", {
    message: na
  }) : (t = document.createEvent("Event"), t.initEvent("error", !1, !1), t.message = na), window.dispatchEvent(t);
}, Er;
(function(t) {
  t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Er || (Er = {}));
var kt = function(t) {
  return Object.freeze(t);
}, Zu = /* @__PURE__ */ function() {
  function t(r, n) {
    this.inlineSize = r, this.blockSize = n, kt(this);
  }
  return t;
}(), go = function() {
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
}, bo = function(t) {
  if (gi(t)) {
    var r = t.getBBox(), n = r.width, i = r.height;
    return !n && !i;
  }
  var a = t, o = a.offsetWidth, l = a.offsetHeight;
  return !(o || l || t.getClientRects().length);
}, ia = function(t) {
  var r;
  if (t instanceof Element)
    return !0;
  var n = (r = t == null ? void 0 : t.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView;
  return !!(n && t instanceof n.Element);
}, Ju = function(t) {
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
}, wr = typeof window < "u" ? window : {}, Ur = /* @__PURE__ */ new WeakMap(), aa = /auto|scroll/, Qu = /^tb|vertical/, ef = /msie|trident/i.test(wr.navigator && wr.navigator.userAgent), Ye = function(t) {
  return parseFloat(t || "0");
}, Yt = function(t, r, n) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0), n === void 0 && (n = !1), new Zu((n ? r : t) || 0, (n ? t : r) || 0);
}, oa = kt({
  devicePixelContentBoxSize: Yt(),
  borderBoxSize: Yt(),
  contentBoxSize: Yt(),
  contentRect: new go(0, 0, 0, 0)
}), Co = function(t, r) {
  if (r === void 0 && (r = !1), Ur.has(t) && !r)
    return Ur.get(t);
  if (bo(t))
    return Ur.set(t, oa), oa;
  var n = getComputedStyle(t), i = gi(t) && t.ownerSVGElement && t.getBBox(), a = !ef && n.boxSizing === "border-box", o = Qu.test(n.writingMode || ""), l = !i && aa.test(n.overflowY || ""), s = !i && aa.test(n.overflowX || ""), u = i ? 0 : Ye(n.paddingTop), f = i ? 0 : Ye(n.paddingRight), d = i ? 0 : Ye(n.paddingBottom), c = i ? 0 : Ye(n.paddingLeft), m = i ? 0 : Ye(n.borderTopWidth), C = i ? 0 : Ye(n.borderRightWidth), h = i ? 0 : Ye(n.borderBottomWidth), p = i ? 0 : Ye(n.borderLeftWidth), b = c + f, x = u + d, D = p + C, F = m + h, w = s ? t.offsetHeight - F - t.clientHeight : 0, R = l ? t.offsetWidth - D - t.clientWidth : 0, I = a ? b + D : 0, v = a ? x + F : 0, B = i ? i.width : Ye(n.width) - I - R, T = i ? i.height : Ye(n.height) - v - w, O = B + b + R + D, N = T + x + w + F, H = kt({
    devicePixelContentBoxSize: Yt(Math.round(B * devicePixelRatio), Math.round(T * devicePixelRatio), o),
    borderBoxSize: Yt(O, N, o),
    contentBoxSize: Yt(B, T, o),
    contentRect: new go(c, u, B, T)
  });
  return Ur.set(t, H), H;
}, yo = function(t, r, n) {
  var i = Co(t, n), a = i.borderBoxSize, o = i.contentBoxSize, l = i.devicePixelContentBoxSize;
  switch (r) {
    case Er.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case Er.BORDER_BOX:
      return a;
    default:
      return o;
  }
}, tf = /* @__PURE__ */ function() {
  function t(r) {
    var n = Co(r);
    this.target = r, this.contentRect = n.contentRect, this.borderBoxSize = kt([n.borderBoxSize]), this.contentBoxSize = kt([n.contentBoxSize]), this.devicePixelContentBoxSize = kt([n.devicePixelContentBoxSize]);
  }
  return t;
}(), Bo = function(t) {
  if (bo(t))
    return 1 / 0;
  for (var r = 0, n = t.parentNode; n; )
    r += 1, n = n.parentNode;
  return r;
}, rf = function() {
  var t = 1 / 0, r = [];
  _t.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(f) {
        var d = new tf(f.target), c = Bo(f.target);
        s.push(d), f.lastReportedSize = yo(f.target, f.observedBox), c < t && (t = c);
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
}, la = function(t) {
  _t.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(a) {
      a.isActive() && (Bo(a.target) > t ? n.activeTargets.push(a) : n.skippedTargets.push(a));
    });
  });
}, nf = function() {
  var t = 0;
  for (la(t); Xu(); )
    t = rf(), la(t);
  return Yu() && Ku(), t > 0;
}, Mn, wo = [], af = function() {
  return wo.splice(0).forEach(function(t) {
    return t();
  });
}, of = function(t) {
  if (!Mn) {
    var r = 0, n = document.createTextNode(""), i = { characterData: !0 };
    new MutationObserver(function() {
      return af();
    }).observe(n, i), Mn = function() {
      n.textContent = "".concat(r ? r-- : r++);
    };
  }
  wo.push(t), Mn();
}, lf = function(t) {
  of(function() {
    requestAnimationFrame(t);
  });
}, tn = 0, sf = function() {
  return !!tn;
}, uf = 250, ff = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, sa = [
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
], ua = function(t) {
  return t === void 0 && (t = 0), Date.now() + t;
}, Rn = !1, df = function() {
  function t() {
    var r = this;
    this.stopped = !0, this.listener = function() {
      return r.schedule();
    };
  }
  return t.prototype.run = function(r) {
    var n = this;
    if (r === void 0 && (r = uf), !Rn) {
      Rn = !0;
      var i = ua(r);
      lf(function() {
        var a = !1;
        try {
          a = nf();
        } finally {
          if (Rn = !1, r = i - ua(), !sf())
            return;
          a ? n.run(1e3) : r > 0 ? n.run(r) : n.start();
        }
      });
    }
  }, t.prototype.schedule = function() {
    this.stop(), this.run();
  }, t.prototype.observe = function() {
    var r = this, n = function() {
      return r.observer && r.observer.observe(document.body, ff);
    };
    document.body ? n() : wr.addEventListener("DOMContentLoaded", n);
  }, t.prototype.start = function() {
    var r = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), sa.forEach(function(n) {
      return wr.addEventListener(n, r.listener, !0);
    }));
  }, t.prototype.stop = function() {
    var r = this;
    this.stopped || (this.observer && this.observer.disconnect(), sa.forEach(function(n) {
      return wr.removeEventListener(n, r.listener, !0);
    }), this.stopped = !0);
  }, t;
}(), Kn = new df(), fa = function(t) {
  !tn && t > 0 && Kn.start(), tn += t, !tn && Kn.stop();
}, xf = function(t) {
  return !gi(t) && !Ju(t) && getComputedStyle(t).display === "inline";
}, cf = function() {
  function t(r, n) {
    this.target = r, this.observedBox = n || Er.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return t.prototype.isActive = function() {
    var r = yo(this.target, this.observedBox, !0);
    return xf(this.target) && (this.lastReportedSize = r), this.lastReportedSize.inlineSize !== r.inlineSize || this.lastReportedSize.blockSize !== r.blockSize;
  }, t;
}(), hf = /* @__PURE__ */ function() {
  function t(r, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = r, this.callback = n;
  }
  return t;
}(), Xr = /* @__PURE__ */ new WeakMap(), da = function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n].target === r)
      return n;
  return -1;
}, Yr = function() {
  function t() {
  }
  return t.connect = function(r, n) {
    var i = new hf(r, n);
    Xr.set(r, i);
  }, t.observe = function(r, n, i) {
    var a = Xr.get(r), o = a.observationTargets.length === 0;
    da(a.observationTargets, n) < 0 && (o && _t.push(a), a.observationTargets.push(new cf(n, i && i.box)), fa(1), Kn.schedule());
  }, t.unobserve = function(r, n) {
    var i = Xr.get(r), a = da(i.observationTargets, n), o = i.observationTargets.length === 1;
    a >= 0 && (o && _t.splice(_t.indexOf(i), 1), i.observationTargets.splice(a, 1), fa(-1));
  }, t.disconnect = function(r) {
    var n = this, i = Xr.get(r);
    i.observationTargets.slice().forEach(function(a) {
      return n.unobserve(r, a.target);
    }), i.activeTargets.splice(0, i.activeTargets.length);
  }, t;
}(), pf = function() {
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
    if (!ia(r))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Yr.observe(this, r, n);
  }, t.prototype.unobserve = function(r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!ia(r))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Yr.unobserve(this, r);
  }, t.prototype.disconnect = function() {
    Yr.disconnect(this);
  }, t.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, t;
}();
class vf {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || pf)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const xa = new vf(), Zn = re({
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
    st(() => {
      const a = n.$el;
      if (a === void 0) {
        Ji("resize-observer", "$el does not exist.");
        return;
      }
      if (a.nextElementSibling !== a.nextSibling && a.nodeType === 3 && a.nodeValue !== "") {
        Ji("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      a.nextElementSibling !== null && (xa.registerHandler(a.nextElementSibling, i), r = !0);
    }), qe(() => {
      r && xa.unregisterHandler(n.$el.nextElementSibling);
    });
  },
  render() {
    return an(this.$slots, "default");
  }
});
function Do(t) {
  return t instanceof HTMLElement;
}
function Ao(t) {
  for (let r = 0; r < t.childNodes.length; r++) {
    const n = t.childNodes[r];
    if (Do(n) && (Eo(n) || Ao(n)))
      return !0;
  }
  return !1;
}
function Fo(t) {
  for (let r = t.childNodes.length - 1; r >= 0; r--) {
    const n = t.childNodes[r];
    if (Do(n) && (Eo(n) || Fo(n)))
      return !0;
  }
  return !1;
}
function Eo(t) {
  if (!mf(t))
    return !1;
  try {
    t.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === t;
}
function mf(t) {
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
const gf = re({
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
      var x;
      b.code === "Escape" && s() && ((x = t.onEsc) === null || x === void 0 || x.call(t, b));
    }
    st(() => {
      ze(() => t.active, (b) => {
        b ? (c(), Ae("keydown", document, u)) : (ge("keydown", document, u), a && m());
      }, {
        immediate: !0
      });
    }), qe(() => {
      ge("keydown", document, u), a && m();
    });
    function f(b) {
      if (!o && s()) {
        const x = d();
        if (x === null || x.contains(ln(b)))
          return;
        C("first");
      }
    }
    function d() {
      const b = n.value;
      if (b === null)
        return null;
      let x = b;
      for (; x = x.nextSibling, !(x === null || x instanceof Element && x.tagName === "DIV"); )
        ;
      return x;
    }
    function c() {
      var b;
      if (!t.disabled) {
        if (pr.push(r), t.autoFocus) {
          const { initialFocusTo: x } = t;
          x === void 0 ? C("first") : (b = Qi(x)) === null || b === void 0 || b.focus({ preventScroll: !0 });
        }
        a = !0, document.addEventListener("focus", f, !0);
      }
    }
    function m() {
      var b;
      if (t.disabled || (document.removeEventListener("focus", f, !0), pr = pr.filter((D) => D !== r), s()))
        return;
      const { finalFocusTo: x } = t;
      x !== void 0 ? (b = Qi(x)) === null || b === void 0 || b.focus({ preventScroll: !0 }) : t.returnFocusOnDeactivated && l instanceof HTMLElement && (o = !0, l.focus({ preventScroll: !0 }), o = !1);
    }
    function C(b) {
      if (s() && t.active) {
        const x = n.value, D = i.value;
        if (x !== null && D !== null) {
          const F = d();
          if (F == null || F === D) {
            o = !0, x.focus({ preventScroll: !0 }), o = !1;
            return;
          }
          o = !0;
          const w = b === "first" ? Ao(F) : Fo(F);
          o = !1, w || (o = !0, x.focus({ preventScroll: !0 }), o = !1);
        }
      }
    }
    function h(b) {
      if (o)
        return;
      const x = d();
      x !== null && (b.relatedTarget !== null && x.contains(b.relatedTarget) ? C("last") : C("first"));
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
    return y(Ct, null, [
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
function bf(t) {
  const r = {
    isDeactivated: !1
  };
  let n = !1;
  return us(() => {
    if (r.isDeactivated = !1, !n) {
      n = !0;
      return;
    }
    t();
  }), fs(() => {
    r.isDeactivated = !0, n || (n = !0);
  }), r;
}
const Jn = "n-form-item";
function So(t, {
  defaultSize: r = "medium",
  mergedSize: n,
  mergedDisabled: i
} = {}) {
  const a = xe(Jn, null);
  Ve(Jn, null);
  const o = _(n ? () => n(a) : () => {
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
  }), l = _(i ? () => i(a) : () => {
    const {
      disabled: u
    } = t;
    return u !== void 0 ? u : a ? a.disabled.value : !1;
  }), s = _(() => {
    const {
      status: u
    } = t;
    return u || (a == null ? void 0 : a.mergedValidationStatus.value);
  });
  return qe(() => {
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
var $o = typeof global == "object" && global && global.Object === Object && global, Cf = typeof self == "object" && self && self.Object === Object && self, rt = $o || Cf || Function("return this")(), gt = rt.Symbol, Po = Object.prototype, yf = Po.hasOwnProperty, Bf = Po.toString, vr = gt ? gt.toStringTag : void 0;
function wf(t) {
  var r = yf.call(t, vr), n = t[vr];
  try {
    t[vr] = void 0;
    var i = !0;
  } catch {
  }
  var a = Bf.call(t);
  return i && (r ? t[vr] = n : delete t[vr]), a;
}
var Df = Object.prototype, Af = Df.toString;
function Ff(t) {
  return Af.call(t);
}
var Ef = "[object Null]", Sf = "[object Undefined]", ca = gt ? gt.toStringTag : void 0;
function Wt(t) {
  return t == null ? t === void 0 ? Sf : Ef : ca && ca in Object(t) ? wf(t) : Ff(t);
}
function bt(t) {
  return t != null && typeof t == "object";
}
var $f = "[object Symbol]";
function bi(t) {
  return typeof t == "symbol" || bt(t) && Wt(t) == $f;
}
function To(t, r) {
  for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
    a[n] = r(t[n], n, t);
  return a;
}
var je = Array.isArray, Pf = 1 / 0, ha = gt ? gt.prototype : void 0, pa = ha ? ha.toString : void 0;
function zo(t) {
  if (typeof t == "string")
    return t;
  if (je(t))
    return To(t, zo) + "";
  if (bi(t))
    return pa ? pa.call(t) : "";
  var r = t + "";
  return r == "0" && 1 / t == -Pf ? "-0" : r;
}
function yt(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
function Ci(t) {
  return t;
}
var Tf = "[object AsyncFunction]", zf = "[object Function]", Of = "[object GeneratorFunction]", Mf = "[object Proxy]";
function yi(t) {
  if (!yt(t))
    return !1;
  var r = Wt(t);
  return r == zf || r == Of || r == Tf || r == Mf;
}
var _n = rt["__core-js_shared__"], va = function() {
  var t = /[^.]+$/.exec(_n && _n.keys && _n.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function Rf(t) {
  return !!va && va in t;
}
var _f = Function.prototype, kf = _f.toString;
function Lt(t) {
  if (t != null) {
    try {
      return kf.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var If = /[\\^$.*+?()[\]{}|]/g, Hf = /^\[object .+?Constructor\]$/, Wf = Function.prototype, Lf = Object.prototype, jf = Wf.toString, Nf = Lf.hasOwnProperty, Vf = RegExp(
  "^" + jf.call(Nf).replace(If, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function qf(t) {
  if (!yt(t) || Rf(t))
    return !1;
  var r = yi(t) ? Vf : Hf;
  return r.test(Lt(t));
}
function Gf(t, r) {
  return t == null ? void 0 : t[r];
}
function jt(t, r) {
  var n = Gf(t, r);
  return qf(n) ? n : void 0;
}
var Qn = jt(rt, "WeakMap"), ma = Object.create, Uf = /* @__PURE__ */ function() {
  function t() {
  }
  return function(r) {
    if (!yt(r))
      return {};
    if (ma)
      return ma(r);
    t.prototype = r;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
function Xf(t, r, n) {
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
function Yf(t, r) {
  var n = -1, i = t.length;
  for (r || (r = Array(i)); ++n < i; )
    r[n] = t[n];
  return r;
}
var Kf = 800, Zf = 16, Jf = Date.now;
function Qf(t) {
  var r = 0, n = 0;
  return function() {
    var i = Jf(), a = Zf - (i - n);
    if (n = i, a > 0) {
      if (++r >= Kf)
        return arguments[0];
    } else
      r = 0;
    return t.apply(void 0, arguments);
  };
}
function e0(t) {
  return function() {
    return t;
  };
}
var un = function() {
  try {
    var t = jt(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), t0 = un ? function(t, r) {
  return un(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: e0(r),
    writable: !0
  });
} : Ci, r0 = Qf(t0), n0 = 9007199254740991, i0 = /^(?:0|[1-9]\d*)$/;
function Bi(t, r) {
  var n = typeof t;
  return r = r ?? n0, !!r && (n == "number" || n != "symbol" && i0.test(t)) && t > -1 && t % 1 == 0 && t < r;
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
var a0 = Object.prototype, o0 = a0.hasOwnProperty;
function l0(t, r, n) {
  var i = t[r];
  (!(o0.call(t, r) && Mr(i, n)) || n === void 0 && !(r in t)) && wi(t, r, n);
}
function s0(t, r, n, i) {
  var a = !n;
  n || (n = {});
  for (var o = -1, l = r.length; ++o < l; ) {
    var s = r[o], u = void 0;
    u === void 0 && (u = t[s]), a ? wi(n, s, u) : l0(n, s, u);
  }
  return n;
}
var ga = Math.max;
function u0(t, r, n) {
  return r = ga(r === void 0 ? t.length - 1 : r, 0), function() {
    for (var i = arguments, a = -1, o = ga(i.length - r, 0), l = Array(o); ++a < o; )
      l[a] = i[r + a];
    a = -1;
    for (var s = Array(r + 1); ++a < r; )
      s[a] = i[a];
    return s[r] = n(l), Xf(t, this, s);
  };
}
function f0(t, r) {
  return r0(u0(t, r, Ci), t + "");
}
var d0 = 9007199254740991;
function Di(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= d0;
}
function ar(t) {
  return t != null && Di(t.length) && !yi(t);
}
function x0(t, r, n) {
  if (!yt(n))
    return !1;
  var i = typeof r;
  return (i == "number" ? ar(n) && Bi(r, n.length) : i == "string" && r in n) ? Mr(n[r], t) : !1;
}
function c0(t) {
  return f0(function(r, n) {
    var i = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, l = a > 2 ? n[2] : void 0;
    for (o = t.length > 3 && typeof o == "function" ? (a--, o) : void 0, l && x0(n[0], n[1], l) && (o = a < 3 ? void 0 : o, a = 1), r = Object(r); ++i < a; ) {
      var s = n[i];
      s && t(r, s, i, o);
    }
    return r;
  });
}
var h0 = Object.prototype;
function Ai(t) {
  var r = t && t.constructor, n = typeof r == "function" && r.prototype || h0;
  return t === n;
}
function p0(t, r) {
  for (var n = -1, i = Array(t); ++n < t; )
    i[n] = r(n);
  return i;
}
var v0 = "[object Arguments]";
function ba(t) {
  return bt(t) && Wt(t) == v0;
}
var Oo = Object.prototype, m0 = Oo.hasOwnProperty, g0 = Oo.propertyIsEnumerable, fn = ba(/* @__PURE__ */ function() {
  return arguments;
}()) ? ba : function(t) {
  return bt(t) && m0.call(t, "callee") && !g0.call(t, "callee");
};
function b0() {
  return !1;
}
var Mo = typeof exports == "object" && exports && !exports.nodeType && exports, Ca = Mo && typeof module == "object" && module && !module.nodeType && module, C0 = Ca && Ca.exports === Mo, ya = C0 ? rt.Buffer : void 0, y0 = ya ? ya.isBuffer : void 0, dn = y0 || b0, B0 = "[object Arguments]", w0 = "[object Array]", D0 = "[object Boolean]", A0 = "[object Date]", F0 = "[object Error]", E0 = "[object Function]", S0 = "[object Map]", $0 = "[object Number]", P0 = "[object Object]", T0 = "[object RegExp]", z0 = "[object Set]", O0 = "[object String]", M0 = "[object WeakMap]", R0 = "[object ArrayBuffer]", _0 = "[object DataView]", k0 = "[object Float32Array]", I0 = "[object Float64Array]", H0 = "[object Int8Array]", W0 = "[object Int16Array]", L0 = "[object Int32Array]", j0 = "[object Uint8Array]", N0 = "[object Uint8ClampedArray]", V0 = "[object Uint16Array]", q0 = "[object Uint32Array]", de = {};
de[k0] = de[I0] = de[H0] = de[W0] = de[L0] = de[j0] = de[N0] = de[V0] = de[q0] = !0;
de[B0] = de[w0] = de[R0] = de[D0] = de[_0] = de[A0] = de[F0] = de[E0] = de[S0] = de[$0] = de[P0] = de[T0] = de[z0] = de[O0] = de[M0] = !1;
function G0(t) {
  return bt(t) && Di(t.length) && !!de[Wt(t)];
}
function U0(t) {
  return function(r) {
    return t(r);
  };
}
var Ro = typeof exports == "object" && exports && !exports.nodeType && exports, Dr = Ro && typeof module == "object" && module && !module.nodeType && module, X0 = Dr && Dr.exports === Ro, kn = X0 && $o.process, Ba = function() {
  try {
    var t = Dr && Dr.require && Dr.require("util").types;
    return t || kn && kn.binding && kn.binding("util");
  } catch {
  }
}(), wa = Ba && Ba.isTypedArray, Fi = wa ? U0(wa) : G0, Y0 = Object.prototype, K0 = Y0.hasOwnProperty;
function _o(t, r) {
  var n = je(t), i = !n && fn(t), a = !n && !i && dn(t), o = !n && !i && !a && Fi(t), l = n || i || a || o, s = l ? p0(t.length, String) : [], u = s.length;
  for (var f in t)
    (r || K0.call(t, f)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (f == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (f == "offset" || f == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || // Skip index properties.
    Bi(f, u))) && s.push(f);
  return s;
}
function ko(t, r) {
  return function(n) {
    return t(r(n));
  };
}
var Z0 = ko(Object.keys, Object), J0 = Object.prototype, Q0 = J0.hasOwnProperty;
function ed(t) {
  if (!Ai(t))
    return Z0(t);
  var r = [];
  for (var n in Object(t))
    Q0.call(t, n) && n != "constructor" && r.push(n);
  return r;
}
function Ei(t) {
  return ar(t) ? _o(t) : ed(t);
}
function td(t) {
  var r = [];
  if (t != null)
    for (var n in Object(t))
      r.push(n);
  return r;
}
var rd = Object.prototype, nd = rd.hasOwnProperty;
function id(t) {
  if (!yt(t))
    return td(t);
  var r = Ai(t), n = [];
  for (var i in t)
    i == "constructor" && (r || !nd.call(t, i)) || n.push(i);
  return n;
}
function Io(t) {
  return ar(t) ? _o(t, !0) : id(t);
}
var ad = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, od = /^\w*$/;
function Si(t, r) {
  if (je(t))
    return !1;
  var n = typeof t;
  return n == "number" || n == "symbol" || n == "boolean" || t == null || bi(t) ? !0 : od.test(t) || !ad.test(t) || r != null && t in Object(r);
}
var Sr = jt(Object, "create");
function ld() {
  this.__data__ = Sr ? Sr(null) : {}, this.size = 0;
}
function sd(t) {
  var r = this.has(t) && delete this.__data__[t];
  return this.size -= r ? 1 : 0, r;
}
var ud = "__lodash_hash_undefined__", fd = Object.prototype, dd = fd.hasOwnProperty;
function xd(t) {
  var r = this.__data__;
  if (Sr) {
    var n = r[t];
    return n === ud ? void 0 : n;
  }
  return dd.call(r, t) ? r[t] : void 0;
}
var cd = Object.prototype, hd = cd.hasOwnProperty;
function pd(t) {
  var r = this.__data__;
  return Sr ? r[t] !== void 0 : hd.call(r, t);
}
var vd = "__lodash_hash_undefined__";
function md(t, r) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = Sr && r === void 0 ? vd : r, this;
}
function Ht(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
Ht.prototype.clear = ld;
Ht.prototype.delete = sd;
Ht.prototype.get = xd;
Ht.prototype.has = pd;
Ht.prototype.set = md;
function gd() {
  this.__data__ = [], this.size = 0;
}
function yn(t, r) {
  for (var n = t.length; n--; )
    if (Mr(t[n][0], r))
      return n;
  return -1;
}
var bd = Array.prototype, Cd = bd.splice;
function yd(t) {
  var r = this.__data__, n = yn(r, t);
  if (n < 0)
    return !1;
  var i = r.length - 1;
  return n == i ? r.pop() : Cd.call(r, n, 1), --this.size, !0;
}
function Bd(t) {
  var r = this.__data__, n = yn(r, t);
  return n < 0 ? void 0 : r[n][1];
}
function wd(t) {
  return yn(this.__data__, t) > -1;
}
function Dd(t, r) {
  var n = this.__data__, i = yn(n, t);
  return i < 0 ? (++this.size, n.push([t, r])) : n[i][1] = r, this;
}
function ut(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
ut.prototype.clear = gd;
ut.prototype.delete = yd;
ut.prototype.get = Bd;
ut.prototype.has = wd;
ut.prototype.set = Dd;
var $r = jt(rt, "Map");
function Ad() {
  this.size = 0, this.__data__ = {
    hash: new Ht(),
    map: new ($r || ut)(),
    string: new Ht()
  };
}
function Fd(t) {
  var r = typeof t;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
}
function Bn(t, r) {
  var n = t.__data__;
  return Fd(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
}
function Ed(t) {
  var r = Bn(this, t).delete(t);
  return this.size -= r ? 1 : 0, r;
}
function Sd(t) {
  return Bn(this, t).get(t);
}
function $d(t) {
  return Bn(this, t).has(t);
}
function Pd(t, r) {
  var n = Bn(this, t), i = n.size;
  return n.set(t, r), this.size += n.size == i ? 0 : 1, this;
}
function ft(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
ft.prototype.clear = Ad;
ft.prototype.delete = Ed;
ft.prototype.get = Sd;
ft.prototype.has = $d;
ft.prototype.set = Pd;
var Td = "Expected a function";
function $i(t, r) {
  if (typeof t != "function" || r != null && typeof r != "function")
    throw new TypeError(Td);
  var n = function() {
    var i = arguments, a = r ? r.apply(this, i) : i[0], o = n.cache;
    if (o.has(a))
      return o.get(a);
    var l = t.apply(this, i);
    return n.cache = o.set(a, l) || o, l;
  };
  return n.cache = new ($i.Cache || ft)(), n;
}
$i.Cache = ft;
var zd = 500;
function Od(t) {
  var r = $i(t, function(i) {
    return n.size === zd && n.clear(), i;
  }), n = r.cache;
  return r;
}
var Md = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Rd = /\\(\\)?/g, _d = Od(function(t) {
  var r = [];
  return t.charCodeAt(0) === 46 && r.push(""), t.replace(Md, function(n, i, a, o) {
    r.push(a ? o.replace(Rd, "$1") : i || n);
  }), r;
});
function Ho(t) {
  return t == null ? "" : zo(t);
}
function Wo(t, r) {
  return je(t) ? t : Si(t, r) ? [t] : _d(Ho(t));
}
var kd = 1 / 0;
function wn(t) {
  if (typeof t == "string" || bi(t))
    return t;
  var r = t + "";
  return r == "0" && 1 / t == -kd ? "-0" : r;
}
function Lo(t, r) {
  r = Wo(r, t);
  for (var n = 0, i = r.length; t != null && n < i; )
    t = t[wn(r[n++])];
  return n && n == i ? t : void 0;
}
function Pi(t, r, n) {
  var i = t == null ? void 0 : Lo(t, r);
  return i === void 0 ? n : i;
}
function Id(t, r) {
  for (var n = -1, i = r.length, a = t.length; ++n < i; )
    t[a + n] = r[n];
  return t;
}
var jo = ko(Object.getPrototypeOf, Object), Hd = "[object Object]", Wd = Function.prototype, Ld = Object.prototype, No = Wd.toString, jd = Ld.hasOwnProperty, Nd = No.call(Object);
function Vd(t) {
  if (!bt(t) || Wt(t) != Hd)
    return !1;
  var r = jo(t);
  if (r === null)
    return !0;
  var n = jd.call(r, "constructor") && r.constructor;
  return typeof n == "function" && n instanceof n && No.call(n) == Nd;
}
function qd(t, r, n) {
  var i = -1, a = t.length;
  r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
  for (var o = Array(a); ++i < a; )
    o[i] = t[i + r];
  return o;
}
function Gd(t, r, n) {
  var i = t.length;
  return n = n === void 0 ? i : n, !r && n >= i ? t : qd(t, r, n);
}
var Ud = "\\ud800-\\udfff", Xd = "\\u0300-\\u036f", Yd = "\\ufe20-\\ufe2f", Kd = "\\u20d0-\\u20ff", Zd = Xd + Yd + Kd, Jd = "\\ufe0e\\ufe0f", Qd = "\\u200d", ex = RegExp("[" + Qd + Ud + Zd + Jd + "]");
function Vo(t) {
  return ex.test(t);
}
function tx(t) {
  return t.split("");
}
var qo = "\\ud800-\\udfff", rx = "\\u0300-\\u036f", nx = "\\ufe20-\\ufe2f", ix = "\\u20d0-\\u20ff", ax = rx + nx + ix, ox = "\\ufe0e\\ufe0f", lx = "[" + qo + "]", ei = "[" + ax + "]", ti = "\\ud83c[\\udffb-\\udfff]", sx = "(?:" + ei + "|" + ti + ")", Go = "[^" + qo + "]", Uo = "(?:\\ud83c[\\udde6-\\uddff]){2}", Xo = "[\\ud800-\\udbff][\\udc00-\\udfff]", ux = "\\u200d", Yo = sx + "?", Ko = "[" + ox + "]?", fx = "(?:" + ux + "(?:" + [Go, Uo, Xo].join("|") + ")" + Ko + Yo + ")*", dx = Ko + Yo + fx, xx = "(?:" + [Go + ei + "?", ei, Uo, Xo, lx].join("|") + ")", cx = RegExp(ti + "(?=" + ti + ")|" + xx + dx, "g");
function hx(t) {
  return t.match(cx) || [];
}
function px(t) {
  return Vo(t) ? hx(t) : tx(t);
}
function vx(t) {
  return function(r) {
    r = Ho(r);
    var n = Vo(r) ? px(r) : void 0, i = n ? n[0] : r.charAt(0), a = n ? Gd(n, 1).join("") : r.slice(1);
    return i[t]() + a;
  };
}
var mx = vx("toUpperCase");
function gx() {
  this.__data__ = new ut(), this.size = 0;
}
function bx(t) {
  var r = this.__data__, n = r.delete(t);
  return this.size = r.size, n;
}
function Cx(t) {
  return this.__data__.get(t);
}
function yx(t) {
  return this.__data__.has(t);
}
var Bx = 200;
function wx(t, r) {
  var n = this.__data__;
  if (n instanceof ut) {
    var i = n.__data__;
    if (!$r || i.length < Bx - 1)
      return i.push([t, r]), this.size = ++n.size, this;
    n = this.__data__ = new ft(i);
  }
  return n.set(t, r), this.size = n.size, this;
}
function et(t) {
  var r = this.__data__ = new ut(t);
  this.size = r.size;
}
et.prototype.clear = gx;
et.prototype.delete = bx;
et.prototype.get = Cx;
et.prototype.has = yx;
et.prototype.set = wx;
var Zo = typeof exports == "object" && exports && !exports.nodeType && exports, Da = Zo && typeof module == "object" && module && !module.nodeType && module, Dx = Da && Da.exports === Zo, Aa = Dx ? rt.Buffer : void 0;
Aa && Aa.allocUnsafe;
function Ax(t, r) {
  return t.slice();
}
function Fx(t, r) {
  for (var n = -1, i = t == null ? 0 : t.length, a = 0, o = []; ++n < i; ) {
    var l = t[n];
    r(l, n, t) && (o[a++] = l);
  }
  return o;
}
function Ex() {
  return [];
}
var Sx = Object.prototype, $x = Sx.propertyIsEnumerable, Fa = Object.getOwnPropertySymbols, Px = Fa ? function(t) {
  return t == null ? [] : (t = Object(t), Fx(Fa(t), function(r) {
    return $x.call(t, r);
  }));
} : Ex;
function Tx(t, r, n) {
  var i = r(t);
  return je(t) ? i : Id(i, n(t));
}
function Ea(t) {
  return Tx(t, Ei, Px);
}
var ri = jt(rt, "DataView"), ni = jt(rt, "Promise"), ii = jt(rt, "Set"), Sa = "[object Map]", zx = "[object Object]", $a = "[object Promise]", Pa = "[object Set]", Ta = "[object WeakMap]", za = "[object DataView]", Ox = Lt(ri), Mx = Lt($r), Rx = Lt(ni), _x = Lt(ii), kx = Lt(Qn), vt = Wt;
(ri && vt(new ri(new ArrayBuffer(1))) != za || $r && vt(new $r()) != Sa || ni && vt(ni.resolve()) != $a || ii && vt(new ii()) != Pa || Qn && vt(new Qn()) != Ta) && (vt = function(t) {
  var r = Wt(t), n = r == zx ? t.constructor : void 0, i = n ? Lt(n) : "";
  if (i)
    switch (i) {
      case Ox:
        return za;
      case Mx:
        return Sa;
      case Rx:
        return $a;
      case _x:
        return Pa;
      case kx:
        return Ta;
    }
  return r;
});
var xn = rt.Uint8Array;
function Ix(t) {
  var r = new t.constructor(t.byteLength);
  return new xn(r).set(new xn(t)), r;
}
function Hx(t, r) {
  var n = Ix(t.buffer);
  return new t.constructor(n, t.byteOffset, t.length);
}
function Wx(t) {
  return typeof t.constructor == "function" && !Ai(t) ? Uf(jo(t)) : {};
}
var Lx = "__lodash_hash_undefined__";
function jx(t) {
  return this.__data__.set(t, Lx), this;
}
function Nx(t) {
  return this.__data__.has(t);
}
function cn(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.__data__ = new ft(); ++r < n; )
    this.add(t[r]);
}
cn.prototype.add = cn.prototype.push = jx;
cn.prototype.has = Nx;
function Vx(t, r) {
  for (var n = -1, i = t == null ? 0 : t.length; ++n < i; )
    if (r(t[n], n, t))
      return !0;
  return !1;
}
function qx(t, r) {
  return t.has(r);
}
var Gx = 1, Ux = 2;
function Jo(t, r, n, i, a, o) {
  var l = n & Gx, s = t.length, u = r.length;
  if (s != u && !(l && u > s))
    return !1;
  var f = o.get(t), d = o.get(r);
  if (f && d)
    return f == r && d == t;
  var c = -1, m = !0, C = n & Ux ? new cn() : void 0;
  for (o.set(t, r), o.set(r, t); ++c < s; ) {
    var h = t[c], p = r[c];
    if (i)
      var b = l ? i(p, h, c, r, t, o) : i(h, p, c, t, r, o);
    if (b !== void 0) {
      if (b)
        continue;
      m = !1;
      break;
    }
    if (C) {
      if (!Vx(r, function(x, D) {
        if (!qx(C, D) && (h === x || a(h, x, n, i, o)))
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
function Xx(t) {
  var r = -1, n = Array(t.size);
  return t.forEach(function(i, a) {
    n[++r] = [a, i];
  }), n;
}
function Yx(t) {
  var r = -1, n = Array(t.size);
  return t.forEach(function(i) {
    n[++r] = i;
  }), n;
}
var Kx = 1, Zx = 2, Jx = "[object Boolean]", Qx = "[object Date]", ec = "[object Error]", tc = "[object Map]", rc = "[object Number]", nc = "[object RegExp]", ic = "[object Set]", ac = "[object String]", oc = "[object Symbol]", lc = "[object ArrayBuffer]", sc = "[object DataView]", Oa = gt ? gt.prototype : void 0, In = Oa ? Oa.valueOf : void 0;
function uc(t, r, n, i, a, o, l) {
  switch (n) {
    case sc:
      if (t.byteLength != r.byteLength || t.byteOffset != r.byteOffset)
        return !1;
      t = t.buffer, r = r.buffer;
    case lc:
      return !(t.byteLength != r.byteLength || !o(new xn(t), new xn(r)));
    case Jx:
    case Qx:
    case rc:
      return Mr(+t, +r);
    case ec:
      return t.name == r.name && t.message == r.message;
    case nc:
    case ac:
      return t == r + "";
    case tc:
      var s = Xx;
    case ic:
      var u = i & Kx;
      if (s || (s = Yx), t.size != r.size && !u)
        return !1;
      var f = l.get(t);
      if (f)
        return f == r;
      i |= Zx, l.set(t, r);
      var d = Jo(s(t), s(r), i, a, o, l);
      return l.delete(t), d;
    case oc:
      if (In)
        return In.call(t) == In.call(r);
  }
  return !1;
}
var fc = 1, dc = Object.prototype, xc = dc.hasOwnProperty;
function cc(t, r, n, i, a, o) {
  var l = n & fc, s = Ea(t), u = s.length, f = Ea(r), d = f.length;
  if (u != d && !l)
    return !1;
  for (var c = u; c--; ) {
    var m = s[c];
    if (!(l ? m in r : xc.call(r, m)))
      return !1;
  }
  var C = o.get(t), h = o.get(r);
  if (C && h)
    return C == r && h == t;
  var p = !0;
  o.set(t, r), o.set(r, t);
  for (var b = l; ++c < u; ) {
    m = s[c];
    var x = t[m], D = r[m];
    if (i)
      var F = l ? i(D, x, m, r, t, o) : i(x, D, m, t, r, o);
    if (!(F === void 0 ? x === D || a(x, D, n, i, o) : F)) {
      p = !1;
      break;
    }
    b || (b = m == "constructor");
  }
  if (p && !b) {
    var w = t.constructor, R = r.constructor;
    w != R && "constructor" in t && "constructor" in r && !(typeof w == "function" && w instanceof w && typeof R == "function" && R instanceof R) && (p = !1);
  }
  return o.delete(t), o.delete(r), p;
}
var hc = 1, Ma = "[object Arguments]", Ra = "[object Array]", Kr = "[object Object]", pc = Object.prototype, _a = pc.hasOwnProperty;
function vc(t, r, n, i, a, o) {
  var l = je(t), s = je(r), u = l ? Ra : vt(t), f = s ? Ra : vt(r);
  u = u == Ma ? Kr : u, f = f == Ma ? Kr : f;
  var d = u == Kr, c = f == Kr, m = u == f;
  if (m && dn(t)) {
    if (!dn(r))
      return !1;
    l = !0, d = !1;
  }
  if (m && !d)
    return o || (o = new et()), l || Fi(t) ? Jo(t, r, n, i, a, o) : uc(t, r, u, n, i, a, o);
  if (!(n & hc)) {
    var C = d && _a.call(t, "__wrapped__"), h = c && _a.call(r, "__wrapped__");
    if (C || h) {
      var p = C ? t.value() : t, b = h ? r.value() : r;
      return o || (o = new et()), a(p, b, n, i, o);
    }
  }
  return m ? (o || (o = new et()), cc(t, r, n, i, a, o)) : !1;
}
function Ti(t, r, n, i, a) {
  return t === r ? !0 : t == null || r == null || !bt(t) && !bt(r) ? t !== t && r !== r : vc(t, r, n, i, Ti, a);
}
var mc = 1, gc = 2;
function bc(t, r, n, i) {
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
      var d = new et(), c;
      if (!(c === void 0 ? Ti(f, u, mc | gc, i, d) : c))
        return !1;
    }
  }
  return !0;
}
function Qo(t) {
  return t === t && !yt(t);
}
function Cc(t) {
  for (var r = Ei(t), n = r.length; n--; ) {
    var i = r[n], a = t[i];
    r[n] = [i, a, Qo(a)];
  }
  return r;
}
function el(t, r) {
  return function(n) {
    return n == null ? !1 : n[t] === r && (r !== void 0 || t in Object(n));
  };
}
function yc(t) {
  var r = Cc(t);
  return r.length == 1 && r[0][2] ? el(r[0][0], r[0][1]) : function(n) {
    return n === t || bc(n, t, r);
  };
}
function Bc(t, r) {
  return t != null && r in Object(t);
}
function wc(t, r, n) {
  r = Wo(r, t);
  for (var i = -1, a = r.length, o = !1; ++i < a; ) {
    var l = wn(r[i]);
    if (!(o = t != null && n(t, l)))
      break;
    t = t[l];
  }
  return o || ++i != a ? o : (a = t == null ? 0 : t.length, !!a && Di(a) && Bi(l, a) && (je(t) || fn(t)));
}
function Dc(t, r) {
  return t != null && wc(t, r, Bc);
}
var Ac = 1, Fc = 2;
function Ec(t, r) {
  return Si(t) && Qo(r) ? el(wn(t), r) : function(n) {
    var i = Pi(n, t);
    return i === void 0 && i === r ? Dc(n, t) : Ti(r, i, Ac | Fc);
  };
}
function Sc(t) {
  return function(r) {
    return r == null ? void 0 : r[t];
  };
}
function $c(t) {
  return function(r) {
    return Lo(r, t);
  };
}
function Pc(t) {
  return Si(t) ? Sc(wn(t)) : $c(t);
}
function Tc(t) {
  return typeof t == "function" ? t : t == null ? Ci : typeof t == "object" ? je(t) ? Ec(t[0], t[1]) : yc(t) : Pc(t);
}
function zc(t) {
  return function(r, n, i) {
    for (var a = -1, o = Object(r), l = i(r), s = l.length; s--; ) {
      var u = l[++a];
      if (n(o[u], u, o) === !1)
        break;
    }
    return r;
  };
}
var tl = zc();
function Oc(t, r) {
  return t && tl(t, r, Ei);
}
function Mc(t, r) {
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
var Rc = Mc(Oc);
function ai(t, r, n) {
  (n !== void 0 && !Mr(t[r], n) || n === void 0 && !(r in t)) && wi(t, r, n);
}
function _c(t) {
  return bt(t) && ar(t);
}
function oi(t, r) {
  if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
    return t[r];
}
function kc(t) {
  return s0(t, Io(t));
}
function Ic(t, r, n, i, a, o, l) {
  var s = oi(t, n), u = oi(r, n), f = l.get(u);
  if (f) {
    ai(t, n, f);
    return;
  }
  var d = o ? o(s, u, n + "", t, r, l) : void 0, c = d === void 0;
  if (c) {
    var m = je(u), C = !m && dn(u), h = !m && !C && Fi(u);
    d = u, m || C || h ? je(s) ? d = s : _c(s) ? d = Yf(s) : C ? (c = !1, d = Ax(u)) : h ? (c = !1, d = Hx(u)) : d = [] : Vd(u) || fn(u) ? (d = s, fn(s) ? d = kc(s) : (!yt(s) || yi(s)) && (d = Wx(u))) : c = !1;
  }
  c && (l.set(u, d), a(d, u, i, o, l), l.delete(u)), ai(t, n, d);
}
function rl(t, r, n, i, a) {
  t !== r && tl(r, function(o, l) {
    if (a || (a = new et()), yt(o))
      Ic(t, r, l, n, rl, i, a);
    else {
      var s = i ? i(oi(t, l), o, l + "", t, r, a) : void 0;
      s === void 0 && (s = o), ai(t, l, s);
    }
  }, Io);
}
function Hc(t, r) {
  var n = -1, i = ar(t) ? Array(t.length) : [];
  return Rc(t, function(a, o, l) {
    i[++n] = r(a, o, l);
  }), i;
}
function Wc(t, r) {
  var n = je(t) ? To : Hc;
  return n(t, Tc(r));
}
var mr = c0(function(t, r, n) {
  rl(t, r, n);
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
  fontSize: Lc,
  fontFamily: jc,
  lineHeight: Nc
} = or, nl = $("body", `
 margin: 0;
 font-size: ${Lc};
 font-family: ${jc};
 line-height: ${Nc};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [$("input", `
 font-family: inherit;
 font-size: inherit;
 `)]), lt = "n-config-provider", Pr = "naive-ui-style";
function ve(t, r, n, i, a, o) {
  const l = Or(), s = xe(lt, null);
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
      }), s != null && s.preflightStyleDisabled || nl.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Pr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    l ? f() : vi(f);
  }
  return _(() => {
    var f;
    const {
      theme: {
        common: d,
        self: c,
        peers: m = {}
      } = {},
      themeOverrides: C = {},
      builtinThemeOverrides: h = {}
    } = a, {
      common: p,
      peers: b
    } = C, {
      common: x = void 0,
      [t]: {
        common: D = void 0,
        self: F = void 0,
        peers: w = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: R = void 0,
      [t]: I = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: v,
      peers: B = {}
    } = I, T = mr({}, d || D || x || i.common, R, v, p), O = mr(
      // {}, executed every time, no need for empty obj
      (f = c || F || i.self) === null || f === void 0 ? void 0 : f(T),
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
ve.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const li = "n";
function Ge(t = {}, r = {
  defaultBordered: !0
}) {
  const n = xe(lt, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: n == null ? void 0 : n.inlineThemeDisabled,
    mergedRtlRef: n == null ? void 0 : n.mergedRtlRef,
    mergedComponentPropsRef: n == null ? void 0 : n.mergedComponentPropsRef,
    mergedBreakpointsRef: n == null ? void 0 : n.mergedBreakpointsRef,
    mergedBorderedRef: _(() => {
      var i, a;
      const {
        bordered: o
      } = t;
      return o !== void 0 ? o : (a = (i = n == null ? void 0 : n.mergedBorderedRef.value) !== null && i !== void 0 ? i : r.defaultBordered) !== null && a !== void 0 ? a : !0;
    }),
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : ds(li),
    namespaceRef: _(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
const Vc = {
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
}, qc = {
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
function Kt(t) {
  return (r = {}) => {
    const n = r.width ? String(r.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
function Ke(t) {
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
function Ze(t) {
  return (r, n = {}) => {
    const i = n.width, a = i && t.matchPatterns[i] || t.matchPatterns[t.defaultMatchWidth], o = r.match(a);
    if (!o)
      return null;
    const l = o[0], s = i && t.parsePatterns[i] || t.parsePatterns[t.defaultParseWidth], u = Array.isArray(s) ? Uc(s, (c) => c.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      Gc(s, (c) => c.test(l))
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
function Gc(t, r) {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && r(t[n]))
      return n;
}
function Uc(t, r) {
  for (let n = 0; n < t.length; n++)
    if (r(t[n]))
      return n;
}
function il(t) {
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
function Xc(t) {
  const r = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && r === "[object Date]" ? new t.constructor(+t) : typeof t == "number" || r === "[object Number]" || typeof t == "string" || r === "[object String]" ? new Date(t) : /* @__PURE__ */ new Date(NaN);
}
let Yc = {};
function Kc() {
  return Yc;
}
function ka(t, r) {
  var s, u, f, d;
  const n = Kc(), i = (r == null ? void 0 : r.weekStartsOn) ?? ((u = (s = r == null ? void 0 : r.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? n.weekStartsOn ?? ((d = (f = n.locale) == null ? void 0 : f.options) == null ? void 0 : d.weekStartsOn) ?? 0, a = Xc(t), o = a.getDay(), l = (o < i ? 7 : 0) + o - i;
  return a.setDate(a.getDate() - l), a.setHours(0, 0, 0, 0), a;
}
function Zc(t, r, n) {
  const i = ka(t, n), a = ka(r, n);
  return +i == +a;
}
const Jc = {
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
}, Qc = (t, r, n) => {
  let i;
  const a = Jc[t];
  return typeof a == "string" ? i = a : r === 1 ? i = a.one : i = a.other.replace("{{count}}", r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + i : i + " ago" : i;
}, eh = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, th = (t, r, n, i) => eh[t], rh = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, nh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, ih = {
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
}, ah = {
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
}, oh = {
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
}, lh = {
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
}, sh = (t, r) => {
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
}, uh = {
  ordinalNumber: sh,
  era: Ke({
    values: rh,
    defaultWidth: "wide"
  }),
  quarter: Ke({
    values: nh,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: Ke({
    values: ih,
    defaultWidth: "wide"
  }),
  day: Ke({
    values: ah,
    defaultWidth: "wide"
  }),
  dayPeriod: Ke({
    values: oh,
    defaultWidth: "wide",
    formattingValues: lh,
    defaultFormattingWidth: "wide"
  })
}, fh = /^(\d+)(th|st|nd|rd)?/i, dh = /\d+/i, xh = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, ch = {
  any: [/^b/i, /^(a|c)/i]
}, hh = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ph = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, vh = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, mh = {
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
}, gh = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, bh = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Ch = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, yh = {
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
}, Bh = {
  ordinalNumber: il({
    matchPattern: fh,
    parsePattern: dh,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: Ze({
    matchPatterns: xh,
    defaultMatchWidth: "wide",
    parsePatterns: ch,
    defaultParseWidth: "any"
  }),
  quarter: Ze({
    matchPatterns: hh,
    defaultMatchWidth: "wide",
    parsePatterns: ph,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: Ze({
    matchPatterns: vh,
    defaultMatchWidth: "wide",
    parsePatterns: mh,
    defaultParseWidth: "any"
  }),
  day: Ze({
    matchPatterns: gh,
    defaultMatchWidth: "wide",
    parsePatterns: bh,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ze({
    matchPatterns: Ch,
    defaultMatchWidth: "any",
    parsePatterns: yh,
    defaultParseWidth: "any"
  })
}, wh = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Dh = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Ah = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Fh = {
  date: Kt({
    formats: wh,
    defaultWidth: "full"
  }),
  time: Kt({
    formats: Dh,
    defaultWidth: "full"
  }),
  dateTime: Kt({
    formats: Ah,
    defaultWidth: "full"
  })
}, Eh = {
  code: "en-US",
  formatDistance: Qc,
  formatLong: Fh,
  formatRelative: th,
  localize: uh,
  match: Bh,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Sh = {
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
}, $h = (t, r, n) => {
  let i;
  const a = Sh[t];
  return typeof a == "string" ? i = a : r === 1 ? i = a.one : i = a.other.replace("{{count}}", String(r)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? i + "内" : i + "前" : i;
}, Ph = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, Th = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, zh = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Oh = {
  date: Kt({
    formats: Ph,
    defaultWidth: "full"
  }),
  time: Kt({
    formats: Th,
    defaultWidth: "full"
  }),
  dateTime: Kt({
    formats: zh,
    defaultWidth: "full"
  })
};
function Ia(t, r, n) {
  const i = "eeee p";
  return Zc(t, r, n) ? i : t.getTime() > r.getTime() ? "'下个'" + i : "'上个'" + i;
}
const Mh = {
  lastWeek: Ia,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: Ia,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, Rh = (t, r, n, i) => {
  const a = Mh[t];
  return typeof a == "function" ? a(r, n, i) : a;
}, _h = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, kh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, Ih = {
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
}, Hh = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, Wh = {
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
}, Lh = {
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
}, jh = (t, r) => {
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
}, Nh = {
  ordinalNumber: jh,
  era: Ke({
    values: _h,
    defaultWidth: "wide"
  }),
  quarter: Ke({
    values: kh,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: Ke({
    values: Ih,
    defaultWidth: "wide"
  }),
  day: Ke({
    values: Hh,
    defaultWidth: "wide"
  }),
  dayPeriod: Ke({
    values: Wh,
    defaultWidth: "wide",
    formattingValues: Lh,
    defaultFormattingWidth: "wide"
  })
}, Vh = /^(第\s*)?\d+(日|时|分|秒)?/i, qh = /\d+/i, Gh = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, Uh = {
  any: [/^(前)/i, /^(公元)/i]
}, Xh = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, Yh = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, Kh = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, Zh = {
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
}, Jh = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, Qh = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, ep = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, tp = {
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
}, rp = {
  ordinalNumber: il({
    matchPattern: Vh,
    parsePattern: qh,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: Ze({
    matchPatterns: Gh,
    defaultMatchWidth: "wide",
    parsePatterns: Uh,
    defaultParseWidth: "any"
  }),
  quarter: Ze({
    matchPatterns: Xh,
    defaultMatchWidth: "wide",
    parsePatterns: Yh,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: Ze({
    matchPatterns: Kh,
    defaultMatchWidth: "wide",
    parsePatterns: Zh,
    defaultParseWidth: "any"
  }),
  day: Ze({
    matchPatterns: Jh,
    defaultMatchWidth: "wide",
    parsePatterns: Qh,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ze({
    matchPatterns: ep,
    defaultMatchWidth: "any",
    parsePatterns: tp,
    defaultParseWidth: "any"
  })
}, np = {
  code: "zh-CN",
  formatDistance: $h,
  formatLong: Oh,
  formatRelative: Rh,
  localize: Nh,
  match: rp,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, ip = {
  name: "zh-CN",
  locale: np
}, ap = {
  name: "en-US",
  locale: Eh
};
function op(t) {
  const {
    mergedLocaleRef: r,
    mergedDateLocaleRef: n
  } = xe(lt, null) || {}, i = _(() => {
    var o, l;
    return (l = (o = r == null ? void 0 : r.value) === null || o === void 0 ? void 0 : o[t]) !== null && l !== void 0 ? l : qc[t];
  });
  return {
    dateLocaleRef: _(() => {
      var o;
      return (o = n == null ? void 0 : n.value) !== null && o !== void 0 ? o : ap;
    }),
    localeRef: i
  };
}
function lr(t, r, n) {
  if (!r) {
    process.env.NODE_ENV !== "production" && to("use-style", "No style is specified.");
    return;
  }
  const i = Or(), a = xe(lt, null), o = () => {
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
    }), a != null && a.preflightStyleDisabled || nl.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: Pr,
      ssr: i,
      parent: a == null ? void 0 : a.styleMountTarget
    });
  };
  i ? o() : vi(o);
}
function dt(t, r, n, i) {
  n || to("useThemeClass", "cssVarsRef is not passed");
  const a = xe(lt, null), o = a == null ? void 0 : a.mergedThemeHashRef, l = a == null ? void 0 : a.styleMountTarget, s = L(""), u = Or();
  let f;
  const d = `__${t}`, c = () => {
    let m = d;
    const C = r ? r.value : void 0, h = o == null ? void 0 : o.value;
    h && (m += `-${h}`), C && (m += `-${C}`);
    const {
      themeOverrides: p,
      builtinThemeOverrides: b
    } = i;
    p && (m += `-${Fr(JSON.stringify(p))}`), b && (m += `-${Fr(JSON.stringify(b))}`), s.value = m, f = () => {
      const x = n.value;
      let D = "";
      for (const F in x)
        D += `${F}: ${x[F]};`;
      $(`.${m}`, D).mount({
        id: m,
        ssr: u,
        parent: l
      }), f = void 0;
    };
  };
  return Qe(() => {
    c();
  }), {
    themeClass: s,
    onRender: () => {
      f == null || f();
    }
  };
}
function Dn(t, r, n) {
  if (!r) return;
  const i = Or(), a = _(() => {
    const {
      value: s
    } = r;
    if (!s)
      return;
    const u = s[t];
    if (u)
      return u;
  }), o = xe(lt, null), l = () => {
    Qe(() => {
      const {
        value: s
      } = n, u = `${s}${t}Rtl`;
      if (iu(u, i)) return;
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
function lp(t, r) {
  return re({
    name: mx(t),
    setup() {
      var n;
      const i = (n = xe(lt, null)) === null || n === void 0 ? void 0 : n.mergedIconsRef;
      return () => {
        var a;
        const o = (a = i == null ? void 0 : i.value) === null || a === void 0 ? void 0 : a[t];
        return o ? o() : r;
      };
    }
  });
}
const sp = re({
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
}), up = re({
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
}), fp = re({
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
}), dp = lp("clear", y("svg", {
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
}))))), zi = re({
  name: "BaseIconSwitchTransition",
  setup(t, {
    slots: r
  }) {
    const n = mi();
    return () => y(Jt, {
      name: "icon-switch-transition",
      appear: n.value
    }, r);
  }
}), xp = re({
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
      } = t, c = s ? xs : Jt, m = {
        name: u ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: f,
        onEnter: o,
        onAfterEnter: l,
        onBeforeLeave: n,
        onLeave: i,
        onAfterLeave: a
      };
      return s || (m.mode = d), y(c, m, r);
    };
  }
}), cp = W("base-icon", `
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
 `)]), hn = re({
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
    lr("-base-icon", cp, we(t, "clsPrefix"));
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
  cubicBezierEaseInOut: hp
} = or;
function pn({
  originalTransform: t = "",
  left: r = 0,
  top: n = 0,
  transition: i = `all .3s ${hp} !important`
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
const pp = $([$("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), W("base-loading", `
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
 `)])])]), Hn = "1.6s", vp = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, al = re({
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
  }, vp),
  setup(t) {
    lr("-base-loading", pp, we(t, "clsPrefix"));
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
}, mp = It(q.neutralBase), ol = It(q.neutralInvertBase), gp = `rgba(${ol.slice(0, 3).join(", ")}, `;
function Ha(t) {
  return `${gp + String(t)})`;
}
function Se(t) {
  const r = Array.from(ol);
  return r[3] = Number(t), Le(mp, r);
}
const Bt = Object.assign(Object.assign({
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
  textColorDisabled: Se(q.alpha4),
  placeholderColor: Se(q.alpha4),
  placeholderColorDisabled: Se(q.alpha5),
  iconColor: Se(q.alpha4),
  iconColorHover: jr(Se(q.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: jr(Se(q.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: Se(q.alpha5),
  opacity1: q.alpha1,
  opacity2: q.alpha2,
  opacity3: q.alpha3,
  opacity4: q.alpha4,
  opacity5: q.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: Se(Number(q.alphaClose)),
  closeIconColorHover: Se(Number(q.alphaClose)),
  closeIconColorPressed: Se(Number(q.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: Se(q.alpha4),
  clearColorHover: jr(Se(q.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: jr(Se(q.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Ha(q.alphaScrollbar),
  scrollbarColorHover: Ha(q.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: Se(q.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: q.neutralPopover,
  tableColor: q.neutralCard,
  cardColor: q.neutralCard,
  modalColor: q.neutralModal,
  bodyColor: q.neutralBody,
  tagColor: "#eee",
  avatarColor: Se(q.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: Se(q.alphaInput),
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
}), bp = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Cp(t) {
  const {
    scrollbarColor: r,
    scrollbarColorHover: n,
    scrollbarHeight: i,
    scrollbarWidth: a,
    scrollbarBorderRadius: o
  } = t;
  return Object.assign(Object.assign({}, bp), {
    height: i,
    width: a,
    borderRadius: o,
    color: r,
    colorHover: n
  });
}
const yp = {
  name: "Scrollbar",
  common: Bt,
  self: Cp
}, {
  cubicBezierEaseInOut: Wa
} = or;
function Bp({
  name: t = "fade-in",
  enterDuration: r = "0.2s",
  leaveDuration: n = "0.2s",
  enterCubicBezier: i = Wa,
  leaveCubicBezier: a = Wa
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
const wp = W("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [$(">", [W("scrollbar-container", `
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
  W("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), $(">, +", [W("scrollbar-rail", `
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
 `, [Bp(), $("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Dp = Object.assign(Object.assign({}, ve.props), {
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
}), ll = re({
  name: "Scrollbar",
  props: Dp,
  inheritAttrs: !1,
  setup(t) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n,
      mergedRtlRef: i
    } = Ge(t), a = Dn("Scrollbar", i, r), o = L(null), l = L(null), s = L(null), u = L(null), f = L(null), d = L(null), c = L(null), m = L(null), C = L(null), h = L(null), p = L(null), b = L(0), x = L(0), D = L(!1), F = L(!1);
    let w = !1, R = !1, I, v, B = 0, T = 0, O = 0, N = 0;
    const H = Au(), e = ve("Scrollbar", "-scrollbar", wp, yp, t, r), S = _(() => {
      const {
        value: M
      } = m, {
        value: j
      } = d, {
        value: Y
      } = h;
      return M === null || j === null || Y === null ? 0 : Math.min(M, Y * M / j + Ii(e.value.self.width) * 1.5);
    }), A = _(() => `${S.value}px`), z = _(() => {
      const {
        value: M
      } = C, {
        value: j
      } = c, {
        value: Y
      } = p;
      return M === null || j === null || Y === null ? 0 : Y * M / j + Ii(e.value.self.height) * 1.5;
    }), P = _(() => `${z.value}px`), V = _(() => {
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
        return me ? j / me * (ie - S.value) : 0;
      }
    }), ee = _(() => `${V.value}px`), J = _(() => {
      const {
        value: M
      } = C, {
        value: j
      } = x, {
        value: Y
      } = c, {
        value: ie
      } = p;
      if (M === null || Y === null || ie === null)
        return 0;
      {
        const me = Y - M;
        return me ? j / me * (ie - z.value) : 0;
      }
    }), ce = _(() => `${J.value}px`), oe = _(() => {
      const {
        value: M
      } = m, {
        value: j
      } = d;
      return M !== null && j !== null && j > M;
    }), Pe = _(() => {
      const {
        value: M
      } = C, {
        value: j
      } = c;
      return M !== null && j !== null && j > M;
    }), De = _(() => {
      const {
        trigger: M
      } = t;
      return M === "none" || D.value;
    }), Me = _(() => {
      const {
        trigger: M
      } = t;
      return M === "none" || F.value;
    }), K = _(() => {
      const {
        container: M
      } = t;
      return M ? M() : l.value;
    }), Te = _(() => {
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
        el: Ee,
        debounce: Xe = !0
      } = M;
      (Y !== void 0 || ie !== void 0) && le(Y ?? 0, ie ?? 0, 0, !1, fe), Ee !== void 0 ? le(0, Ee.offsetTop, Ee.offsetHeight, Xe, fe) : me !== void 0 && Fe !== void 0 ? le(0, me * Fe, Fe, Xe, fe) : _e === "bottom" ? le(0, Number.MAX_SAFE_INTEGER, 0, !1, fe) : _e === "top" && le(0, 0, 0, !1, fe);
    }, Z = bf(() => {
      t.container || Ie({
        top: b.value,
        left: x.value
      });
    }), Re = () => {
      Z.isDeactivated || it();
    }, He = (M) => {
      if (Z.isDeactivated) return;
      const {
        onResize: j
      } = t;
      j && j(M), it();
    }, te = (M, j) => {
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
      ur(), ue(), it();
    }
    function Ue() {
      wt();
    }
    function wt() {
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
      j && j(M), nt();
    }
    function nt() {
      const {
        value: M
      } = K;
      M && (b.value = M.scrollTop, x.value = M.scrollLeft * (a != null && a.value ? -1 : 1));
    }
    function An() {
      const {
        value: M
      } = Te;
      M && (d.value = M.offsetHeight, c.value = M.offsetWidth);
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
    function Dt() {
      const {
        value: M
      } = K;
      M && (b.value = M.scrollTop, x.value = M.scrollLeft * (a != null && a.value ? -1 : 1), m.value = M.offsetHeight, C.value = M.offsetWidth, d.value = M.scrollHeight, c.value = M.scrollWidth);
      const {
        value: j
      } = f, {
        value: Y
      } = u;
      j && (p.value = j.offsetWidth), Y && (h.value = Y.offsetHeight);
    }
    function it() {
      t.scrollable && (t.useUnifiedContainer ? Dt() : (An(), nt()));
    }
    function _r(M) {
      var j;
      return !(!((j = o.value) === null || j === void 0) && j.contains(ln(M)));
    }
    function Fn(M) {
      M.preventDefault(), M.stopPropagation(), R = !0, Ae("mousemove", window, fr, !0), Ae("mouseup", window, kr, !0), T = x.value, O = a != null && a.value ? window.innerWidth - M.clientX : M.clientX;
    }
    function fr(M) {
      if (!R) return;
      I !== void 0 && window.clearTimeout(I), v !== void 0 && window.clearTimeout(v);
      const {
        value: j
      } = C, {
        value: Y
      } = c, {
        value: ie
      } = z;
      if (j === null || Y === null) return;
      const Fe = (a != null && a.value ? window.innerWidth - M.clientX - O : M.clientX - O) * (Y - j) / (j - ie), _e = Y - j;
      let fe = T + Fe;
      fe = Math.min(_e, fe), fe = Math.max(fe, 0);
      const {
        value: Ee
      } = K;
      if (Ee) {
        Ee.scrollLeft = fe * (a != null && a.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: Xe
        } = t;
        Xe && Xe(fe);
      }
    }
    function kr(M) {
      M.preventDefault(), M.stopPropagation(), ge("mousemove", window, fr, !0), ge("mouseup", window, kr, !0), R = !1, it(), _r(M) && wt();
    }
    function En(M) {
      M.preventDefault(), M.stopPropagation(), w = !0, Ae("mousemove", window, dr, !0), Ae("mouseup", window, xr, !0), B = b.value, N = M.clientY;
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
      } = S;
      if (j === null || Y === null) return;
      const Fe = (M.clientY - N) * (Y - j) / (j - ie), _e = Y - j;
      let fe = B + Fe;
      fe = Math.min(_e, fe), fe = Math.max(fe, 0);
      const {
        value: Ee
      } = K;
      Ee && (Ee.scrollTop = fe);
    }
    function xr(M) {
      M.preventDefault(), M.stopPropagation(), ge("mousemove", window, dr, !0), ge("mouseup", window, xr, !0), w = !1, it(), _r(M) && wt();
    }
    Qe(() => {
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
    }), st(() => {
      t.container || it();
    }), qe(() => {
      I !== void 0 && window.clearTimeout(I), v !== void 0 && window.clearTimeout(v), ge("mousemove", window, dr, !0), ge("mouseup", window, xr, !0);
    });
    const Ir = _(() => {
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
          railInsetVerticalRight: Ee,
          railInsetVerticalLeft: Xe,
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
        "--n-scrollbar-rail-inset-vertical-right": a != null && a.value ? Gi(Ee) : Ee,
        "--n-scrollbar-rail-inset-vertical-left": a != null && a.value ? Gi(Xe) : Xe,
        "--n-scrollbar-rail-color": Hr
      };
    }), ct = n ? dt("scrollbar", void 0, Ir, t) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Ie,
      scrollBy: te,
      sync: it,
      syncUnifiedContainer: Dt,
      handleMouseEnterWrapper: ne,
      handleMouseLeaveWrapper: Ue
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
      yBarTopPx: ee,
      xBarLeftPx: ce,
      isShowXBar: De,
      isShowYBar: Me,
      isIos: H,
      handleScroll: be,
      handleContentResize: Re,
      handleContainerResize: He,
      handleYScrollMouseDown: En,
      handleXScrollMouseDown: Fn,
      cssVars: n ? void 0 : Ir,
      themeClass: ct == null ? void 0 : ct.themeClass,
      onRender: ct == null ? void 0 : ct.onRender
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
    }, y(f ? Ni : Jt, f ? null : {
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
    })), c = () => {
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
      }, y(f ? Ni : Jt, f ? null : {
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
    }, m = this.container ? c() : y(Zn, {
      onResize: this.handleContainerResize
    }, {
      default: c
    });
    return o ? y(Ct, null, m, d(this.themeClass, this.cssVars)) : m;
  }
}), Ap = ll, Fp = W("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), Ep = re({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    lr("-base-wave", Fp, we(t, "clsPrefix"));
    const r = L(null), n = L(!1);
    let i = null;
    return qe(() => {
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
}), Sp = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function $p(t) {
  const {
    boxShadow2: r,
    popoverColor: n,
    textColor2: i,
    borderRadius: a,
    fontSize: o,
    dividerColor: l
  } = t;
  return Object.assign(Object.assign({}, Sp), {
    fontSize: o,
    borderRadius: a,
    color: n,
    dividerColor: l,
    textColor: i,
    boxShadow: r
  });
}
const Pp = {
  name: "Popover",
  common: Bt,
  self: $p
}, Wn = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ce = "var(--n-arrow-height) * 1.414", Tp = $([W("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [$(">", [W("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Ne("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [Ne("scrollable", [Ne("show-header-or-footer", "padding: var(--n-padding);")])]), k("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), k("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), X("scrollable, show-header-or-footer", [k("content", `
 padding: var(--n-padding);
 `)])]), W("popover-shared", `
 transform-origin: inherit;
 `, [
  W("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [W("popover-arrow", `
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
 left: calc(${at("top-start")} - var(--v-offset-left));
 `), We("top", `
 top: calc(${Ce} / -2);
 transform: translateX(calc(${Ce} / -2)) rotate(45deg);
 left: 50%;
 `), We("top-end", `
 top: calc(${Ce} / -2);
 right: calc(${at("top-end")} + var(--v-offset-left));
 `), We("bottom-start", `
 bottom: calc(${Ce} / -2);
 left: calc(${at("bottom-start")} - var(--v-offset-left));
 `), We("bottom", `
 bottom: calc(${Ce} / -2);
 transform: translateX(calc(${Ce} / -2)) rotate(45deg);
 left: 50%;
 `), We("bottom-end", `
 bottom: calc(${Ce} / -2);
 right: calc(${at("bottom-end")} + var(--v-offset-left));
 `), We("left-start", `
 left: calc(${Ce} / -2);
 top: calc(${at("left-start")} - var(--v-offset-top));
 `), We("left", `
 left: calc(${Ce} / -2);
 transform: translateY(calc(${Ce} / -2)) rotate(45deg);
 top: 50%;
 `), We("left-end", `
 left: calc(${Ce} / -2);
 bottom: calc(${at("left-end")} + var(--v-offset-top));
 `), We("right-start", `
 right: calc(${Ce} / -2);
 top: calc(${at("right-start")} - var(--v-offset-top));
 `), We("right", `
 right: calc(${Ce} / -2);
 transform: translateY(calc(${Ce} / -2)) rotate(45deg);
 top: 50%;
 `), We("right-end", `
 right: calc(${Ce} / -2);
 bottom: calc(${at("right-end")} + var(--v-offset-top));
 `), ...Wc({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (t, r) => {
  const n = ["right", "left"].includes(r), i = n ? "width" : "height";
  return t.map((a) => {
    const o = a.split("-")[1] === "end", s = `calc((${`var(--v-target-${i}, 0px)`} - ${Ce}) / 2)`, u = at(a);
    return $(`[v-placement="${a}"] >`, [W("popover-shared", [X("center-arrow", [W("popover-arrow", `${r}: calc(max(${s}, ${u}) ${o ? "+" : "-"} var(--v-offset-${n ? "left" : "top"}));`)])])]);
  });
})]);
function at(t) {
  return ["top", "bottom"].includes(t.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function We(t, r) {
  const n = t.split("-")[0], i = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return $(`[v-placement="${t}"] >`, [W("popover-shared", `
 margin-${Wn[n]}: var(--n-space);
 `, [X("show-arrow", `
 margin-${Wn[n]}: var(--n-space-arrow);
 `), X("overlap", `
 margin: 0;
 `), du("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${Wn[n]}: auto;
 ${i}
 `, [W("popover-arrow", r)])])]);
}
const sl = Object.assign(Object.assign({}, ve.props), {
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
function zp({
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
const Op = re({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: sl,
  setup(t, {
    slots: r,
    attrs: n
  }) {
    const {
      namespaceRef: i,
      mergedClsPrefixRef: a,
      inlineThemeDisabled: o
    } = Ge(t), l = ve("Popover", "-popover", Tp, Pp, t, a), s = L(null), u = xe("NPopover"), f = L(null), d = L(t.show), c = L(!1);
    Qe(() => {
      const {
        show: v
      } = t;
      v && !xu() && !t.internalDeactivateImmediately && (c.value = !0);
    });
    const m = _(() => {
      const {
        trigger: v,
        onClickoutside: B
      } = t, T = [], {
        positionManuallyRef: {
          value: O
        }
      } = u;
      return O || (v === "click" && !B && T.push([Zi, w, void 0, {
        capture: !0
      }]), v === "hover" && T.push([Tu, F])), B && T.push([Zi, w, void 0, {
        capture: !0
      }]), (t.displayDirective === "show" || t.animated && c.value) && T.push([cs, t.show]), T;
    }), C = _(() => {
      const {
        common: {
          cubicBezierEaseInOut: v,
          cubicBezierEaseIn: B,
          cubicBezierEaseOut: T
        },
        self: {
          space: O,
          spaceArrow: N,
          padding: H,
          fontSize: e,
          textColor: S,
          dividerColor: A,
          color: z,
          boxShadow: P,
          borderRadius: V,
          arrowHeight: ee,
          arrowOffset: J,
          arrowOffsetVertical: ce
        }
      } = l.value;
      return {
        "--n-box-shadow": P,
        "--n-bezier": v,
        "--n-bezier-ease-in": B,
        "--n-bezier-ease-out": T,
        "--n-font-size": e,
        "--n-text-color": S,
        "--n-color": z,
        "--n-divider-color": A,
        "--n-border-radius": V,
        "--n-arrow-height": ee,
        "--n-arrow-offset": J,
        "--n-arrow-offset-vertical": ce,
        "--n-padding": H,
        "--n-space": O,
        "--n-space-arrow": N
      };
    }), h = _(() => {
      const v = t.width === "trigger" ? void 0 : ot(t.width), B = [];
      v && B.push({
        width: v
      });
      const {
        maxWidth: T,
        minWidth: O
      } = t;
      return T && B.push({
        maxWidth: ot(T)
      }), O && B.push({
        maxWidth: ot(O)
      }), o || B.push(C.value), B;
    }), p = o ? dt("popover", void 0, C, t) : void 0;
    u.setBodyInstance({
      syncPosition: b
    }), qe(() => {
      u.setBodyInstance(null);
    }), ze(we(t, "show"), (v) => {
      t.animated || (v ? d.value = !0 : d.value = !1);
    });
    function b() {
      var v;
      (v = s.value) === null || v === void 0 || v.syncPosition();
    }
    function x(v) {
      t.trigger === "hover" && t.keepAliveOnHover && t.show && u.handleMouseEnter(v);
    }
    function D(v) {
      t.trigger === "hover" && t.keepAliveOnHover && u.handleMouseLeave(v);
    }
    function F(v) {
      t.trigger === "hover" && !R().contains(ln(v)) && u.handleMouseMoveOutside(v);
    }
    function w(v) {
      (t.trigger === "click" && !R().contains(ln(v)) || t.onClickoutside) && u.handleClickOutside(v);
    }
    function R() {
      return u.getTriggerElement();
    }
    Ve(co, f), Ve(xo, null), Ve(fo, null);
    function I() {
      if (p == null || p.onRender(), !(t.displayDirective === "show" || t.show || t.animated && c.value))
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
          x,
          D
        );
      else {
        const {
          value: N
        } = u.extraClassRef, {
          internalTrapFocus: H
        } = t, e = !Gn(r.header) || !Gn(r.footer), S = () => {
          var A, z;
          const P = e ? y(Ct, null, Je(r.header, (J) => J ? y("div", {
            class: [`${O}-popover__header`, t.headerClass],
            style: t.headerStyle
          }, J) : null), Je(r.default, (J) => J ? y("div", {
            class: [`${O}-popover__content`, t.contentClass],
            style: t.contentStyle
          }, r) : null), Je(r.footer, (J) => J ? y("div", {
            class: [`${O}-popover__footer`, t.footerClass],
            style: t.footerStyle
          }, J) : null)) : t.scrollable ? (A = r.default) === null || A === void 0 ? void 0 : A.call(r) : y("div", {
            class: [`${O}-popover__content`, t.contentClass],
            style: t.contentStyle
          }, r), V = t.scrollable ? y(Ap, {
            contentClass: e ? void 0 : `${O}-popover__content ${(z = t.contentClass) !== null && z !== void 0 ? z : ""}`,
            contentStyle: e ? void 0 : t.contentStyle
          }, {
            default: () => P
          }) : P, ee = t.showArrow ? zp({
            arrowClass: t.arrowClass,
            arrowStyle: t.arrowStyle,
            arrowWrapperClass: t.arrowWrapperClass,
            arrowWrapperStyle: t.arrowWrapperStyle,
            clsPrefix: O
          }) : null;
          return [V, ee];
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
          onMouseenter: x,
          onMouseleave: D
        }, n), H ? y(gf, {
          active: t.show,
          autoFocus: !0
        }, {
          default: S
        }) : S());
      }
      return mn(B, m.value);
    }
    return {
      displayed: c,
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
    return y(Uu, {
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
      default: () => this.animated ? y(Jt, {
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
}), Mp = Object.keys(sl), Rp = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function _p(t, r, n) {
  Rp[r].forEach((i) => {
    t.props ? t.props = Object.assign({}, t.props) : t.props = {};
    const a = t.props[i], o = n[i];
    a ? t.props[i] = (...l) => {
      a(...l), o(...l);
    } : t.props[i] = o;
  });
}
const kp = {
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
}, Ip = Object.assign(Object.assign(Object.assign({}, ve.props), kp), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), Hp = re({
  name: "Popover",
  inheritAttrs: !1,
  props: Ip,
  __popover__: !0,
  setup(t) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      t.maxWidth !== void 0 && $t("popover", "`max-width` is deprecated, please use `style` instead."), t.minWidth !== void 0 && $t("popover", "`min-width` is deprecated, please use `style` instead."), t.arrow !== void 0 && $t("popover", "`arrow` is deprecated, please use `showArrow` instead."), t.onHide !== void 0 && $t("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), t.onShow !== void 0 && $t("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const r = mi(), n = L(null), i = _(() => t.show), a = L(t.defaultShow), o = uo(i, a), l = tt(() => t.disabled ? !1 : o.value), s = () => {
      if (t.disabled) return !0;
      const {
        getDisabled: A
      } = t;
      return !!(A != null && A());
    }, u = () => s() ? !1 : o.value, f = wu(t, ["arrow", "showArrow"]), d = _(() => t.overlap ? !1 : f.value);
    let c = null;
    const m = L(null), C = L(null), h = tt(() => t.x !== void 0 && t.y !== void 0);
    function p(A) {
      const {
        "onUpdate:show": z,
        onUpdateShow: P,
        onShow: V,
        onHide: ee
      } = t;
      a.value = A, z && pe(z, A), P && pe(P, A), A && V && pe(V, !0), A && ee && pe(ee, !1);
    }
    function b() {
      c && c.syncPosition();
    }
    function x() {
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
    function R() {
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
        if (x(), C.value !== null || !u()) return;
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
      u() && (t.trigger === "click" && (x(), D(), p(!1)), (z = t.onClickoutside) === null || z === void 0 || z.call(t, A));
    }
    function T() {
      if (t.trigger === "click" && !s()) {
        x(), D();
        const A = !u();
        p(A);
      }
    }
    function O(A) {
      t.internalTrapFocus && A.key === "Escape" && (x(), D(), p(!1));
    }
    function N(A) {
      a.value = A;
    }
    function H() {
      var A;
      return (A = n.value) === null || A === void 0 ? void 0 : A.targetRef;
    }
    function e(A) {
      c = A;
    }
    return Ve("NPopover", {
      getTriggerElement: H,
      handleKeydown: O,
      handleMouseEnter: R,
      handleMouseLeave: I,
      handleClickOutside: B,
      handleMouseMoveOutside: v,
      setBodyInstance: e,
      positionManuallyRef: h,
      isMountedRef: r,
      zIndexRef: we(t, "zIndex"),
      extraClassRef: we(t, "internalExtraClass"),
      internalRenderBodyRef: we(t, "internalRenderBody")
    }), Qe(() => {
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
      handleMouseEnter: R,
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
    if (!r && (n.activator ? i = ji(n, "activator") : i = ji(n, "trigger"), i)) {
      i = hs(i), i = i.type === ps ? y("span", [i]) : i;
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
        _p(i, l ? "nested" : r ? "manual" : this.trigger, u);
      }
    }
    return y($u, {
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
        }), [[mo, {
          enabled: o,
          zIndex: this.zIndex
        }]]) : null, r ? null : y(Pu, null, {
          default: () => i
        }), y(Op, Hs(this.$props, Mp, Object.assign(Object.assign({}, this.$attrs), {
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
}), Wp = W("base-clear", `
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
})])])]), si = re({
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
    return lr("-base-clear", Wp, we(t, "clsPrefix")), {
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
          default: () => y(dp, null)
        })])) : y("div", {
          key: "icon",
          class: `${t}-base-clear__placeholder`
        }, (n = (r = this.$slots).placeholder) === null || n === void 0 ? void 0 : n.call(r));
      }
    }));
  }
}), Lp = re({
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
      return y(al, {
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
            default: () => yr(r.default, () => [y(fp, null)])
          })
        }) : null
      });
    };
  }
}), {
  cubicBezierEaseInOut: pt
} = or;
function jp({
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
 opacity ${t} ${pt},
 max-width ${t} ${pt} ${r},
 margin-left ${t} ${pt} ${r},
 margin-right ${t} ${pt} ${r};
 `), $("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${t} ${pt} ${r},
 max-width ${t} ${pt},
 margin-left ${t} ${pt},
 margin-right ${t} ${pt};
 `)];
}
const Np = Cn && "chrome" in window;
Cn && navigator.userAgent.includes("Firefox");
const ul = Cn && navigator.userAgent.includes("Safari") && !Np, Vp = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function qp(t) {
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
    errorColor: c,
    errorColorHover: m,
    borderRadius: C,
    lineHeight: h,
    fontSizeTiny: p,
    fontSizeSmall: b,
    fontSizeMedium: x,
    fontSizeLarge: D,
    heightTiny: F,
    heightSmall: w,
    heightMedium: R,
    heightLarge: I,
    actionColor: v,
    clearColor: B,
    clearColorHover: T,
    clearColorPressed: O,
    placeholderColor: N,
    placeholderColorDisabled: H,
    iconColor: e,
    iconColorDisabled: S,
    iconColorHover: A,
    iconColorPressed: z
  } = t;
  return Object.assign(Object.assign({}, Vp), {
    countTextColorDisabled: i,
    countTextColor: n,
    heightTiny: F,
    heightSmall: w,
    heightMedium: R,
    heightLarge: I,
    fontSizeTiny: p,
    fontSizeSmall: b,
    fontSizeMedium: x,
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
    placeholderColorDisabled: H,
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
    loadingColorError: c,
    borderError: `1px solid ${c}`,
    borderHoverError: `1px solid ${m}`,
    colorFocusError: l,
    borderFocusError: `1px solid ${m}`,
    boxShadowFocusError: `0 0 0 2px ${Ot(c, {
      alpha: 0.2
    })}`,
    caretColorError: c,
    clearColor: B,
    clearColorHover: T,
    clearColorPressed: O,
    iconColor: e,
    iconColorDisabled: S,
    iconColorHover: A,
    iconColorPressed: z,
    suffixTextColor: r
  });
}
const fl = {
  name: "Input",
  common: Bt,
  self: qp
}, dl = "n-input";
function Gp(t) {
  let r = 0;
  for (const n of t)
    r++;
  return r;
}
function Zr(t) {
  return t === "" || t == null;
}
function Up(t) {
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
      afterText: c
    } = l;
    let m = u.length;
    if (u.endsWith(c))
      m = u.length - c.length;
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
const La = re({
  name: "InputWordCount",
  setup(t, {
    slots: r
  }) {
    const {
      mergedValueRef: n,
      maxlengthRef: i,
      mergedClsPrefixRef: a,
      countGraphemesRef: o
    } = xe(dl), l = _(() => {
      const {
        value: s
      } = n;
      return s === null || Array.isArray(s) ? 0 : (o.value || Gp)(s);
    });
    return () => {
      const {
        value: s
      } = i, {
        value: u
      } = n;
      return y("span", {
        class: `${a.value}-input-word-count`
      }, Ws(r.default, {
        value: u === null || Array.isArray(u) ? "" : u
      }, () => [s === void 0 ? l.value : `${l.value} / ${s}`]));
    };
  }
}), Xp = W("input", `
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
  X("round", [Ne("textarea", "border-radius: calc(var(--n-height) / 2);")]),
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
  Ne("autosize", "width: 100%;"),
  X("autosize", [k("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  W("input-wrapper", `
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
  Ne("textarea", [k("placeholder", "white-space: nowrap;")]),
  k("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  X("textarea", "width: 100%;", [W("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), X("resizable", [W("input-wrapper", `
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
 `, [W("icon", `
 color: var(--n-icon-color);
 `), W("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  X("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [k("border", "border: var(--n-border-disabled);"), k("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), k("placeholder", "color: var(--n-placeholder-color-disabled);"), k("separator", "color: var(--n-text-color-disabled);", [W("icon", `
 color: var(--n-icon-color-disabled);
 `), W("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), W("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), k("suffix, prefix", "color: var(--n-text-color-disabled);", [W("icon", `
 color: var(--n-icon-color-disabled);
 `), W("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  Ne("disabled", [k("eye", `
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
 `, [W("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), W("base-clear", `
 font-size: var(--n-icon-size);
 `, [k("placeholder", [W("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), $(">", [W("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), W("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  W("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((t) => X(`${t}-status`, [Ne("disabled", [W("base-loading", `
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
]), Yp = W("input", [X("disabled", [k("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]), Kp = Object.assign(Object.assign({}, ve.props), {
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
}), Zp = re({
  name: "Input",
  props: Kp,
  setup(t) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      t.showPasswordToggle && $t("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: r,
      mergedBorderedRef: n,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ge(t), o = ve("Input", "-input", Xp, fl, t, r);
    ul && lr("-input-safari", Yp, r);
    const l = L(null), s = L(null), u = L(null), f = L(null), d = L(null), c = L(null), m = L(null), C = Up(m), h = L(null), {
      localeRef: p
    } = op("Input"), b = L(t.defaultValue), x = we(t, "value"), D = uo(x, b), F = So(t), {
      mergedSizeRef: w,
      mergedDisabledRef: R,
      mergedStatusRef: I
    } = F, v = L(!1), B = L(!1), T = L(!1), O = L(!1);
    let N = null;
    const H = _(() => {
      const {
        placeholder: g,
        pair: E
      } = t;
      return E ? Array.isArray(g) ? g : g === void 0 ? ["", ""] : [g, g] : g === void 0 ? [p.value.placeholder] : [g];
    }), e = _(() => {
      const {
        value: g
      } = T, {
        value: E
      } = D, {
        value: U
      } = H;
      return !g && (Zr(E) || Array.isArray(E) && Zr(E[0])) && U[0];
    }), S = _(() => {
      const {
        value: g
      } = T, {
        value: E
      } = D, {
        value: U
      } = H;
      return !g && U[1] && (Zr(E) || Array.isArray(E) && Zr(E[1]));
    }), A = tt(() => t.internalForceFocus || v.value), z = tt(() => {
      if (R.value || t.readonly || !t.clearable || !A.value && !B.value)
        return !1;
      const {
        value: g
      } = D, {
        value: E
      } = A;
      return t.pair ? !!(Array.isArray(g) && (g[0] || g[1])) && (B.value || E) : !!g && (B.value || E);
    }), P = _(() => {
      const {
        showPasswordOn: g
      } = t;
      if (g)
        return g;
      if (t.showPasswordToggle) return "click";
    }), V = L(!1), ee = _(() => {
      const {
        textDecoration: g
      } = t;
      return g ? Array.isArray(g) ? g.map((E) => ({
        textDecoration: E
      })) : [{
        textDecoration: g
      }] : ["", ""];
    }), J = L(void 0), ce = () => {
      var g, E;
      if (t.type === "textarea") {
        const {
          autosize: U
        } = t;
        if (U && (J.value = (E = (g = h.value) === null || g === void 0 ? void 0 : g.$el) === null || E === void 0 ? void 0 : E.offsetWidth), !s.value || typeof U == "boolean") return;
        const {
          paddingTop: se,
          paddingBottom: he,
          lineHeight: ae
        } = window.getComputedStyle(s.value), At = Number(se.slice(0, -2)), Ft = Number(he.slice(0, -2)), Et = Number(ae.slice(0, -2)), {
          value: cr
        } = u;
        if (!cr) return;
        if (U.minRows) {
          const hr = Math.max(U.minRows, 1), Sn = `${At + Ft + Et * hr}px`;
          cr.style.minHeight = Sn;
        }
        if (U.maxRows) {
          const hr = `${At + Ft + Et * U.maxRows}px`;
          cr.style.maxHeight = hr;
        }
      }
    }, oe = _(() => {
      const {
        maxlength: g
      } = t;
      return g === void 0 ? void 0 : Number(g);
    });
    st(() => {
      const {
        value: g
      } = D;
      Array.isArray(g) || Ee(g);
    });
    const Pe = vn().proxy;
    function De(g, E) {
      const {
        onUpdateValue: U,
        "onUpdate:value": se,
        onInput: he
      } = t, {
        nTriggerFormInput: ae
      } = F;
      U && pe(U, g, E), se && pe(se, g, E), he && pe(he, g, E), b.value = g, ae();
    }
    function Me(g, E) {
      const {
        onChange: U
      } = t, {
        nTriggerFormChange: se
      } = F;
      U && pe(U, g, E), b.value = g, se();
    }
    function K(g) {
      const {
        onBlur: E
      } = t, {
        nTriggerFormBlur: U
      } = F;
      E && pe(E, g), U();
    }
    function Te(g) {
      const {
        onFocus: E
      } = t, {
        nTriggerFormFocus: U
      } = F;
      E && pe(E, g), U();
    }
    function Ie(g) {
      const {
        onClear: E
      } = t;
      E && pe(E, g);
    }
    function Z(g) {
      const {
        onInputBlur: E
      } = t;
      E && pe(E, g);
    }
    function Re(g) {
      const {
        onInputFocus: E
      } = t;
      E && pe(E, g);
    }
    function He() {
      const {
        onDeactivate: g
      } = t;
      g && pe(g);
    }
    function te() {
      const {
        onActivate: g
      } = t;
      g && pe(g);
    }
    function le(g) {
      const {
        onClick: E
      } = t;
      E && pe(E, g);
    }
    function ne(g) {
      const {
        onWrapperFocus: E
      } = t;
      E && pe(E, g);
    }
    function Ue(g) {
      const {
        onWrapperBlur: E
      } = t;
      E && pe(E, g);
    }
    function wt() {
      T.value = !0;
    }
    function sr(g) {
      T.value = !1, g.target === c.value ? xt(g, 1) : xt(g, 0);
    }
    function xt(g, E = 0, U = "input") {
      const se = g.target.value;
      if (Ee(se), g instanceof InputEvent && !g.isComposing && (T.value = !1), t.type === "textarea") {
        const {
          value: ae
        } = h;
        ae && ae.syncUnifiedContainer();
      }
      if (N = se, T.value) return;
      C.recordCursor();
      const he = ur(se);
      if (he)
        if (!t.pair)
          U === "input" ? De(se, {
            source: E
          }) : Me(se, {
            source: E
          });
        else {
          let {
            value: ae
          } = D;
          Array.isArray(ae) ? ae = [ae[0], ae[1]] : ae = ["", ""], ae[E] = se, U === "input" ? De(ae, {
            source: E
          }) : Me(ae, {
            source: E
          });
        }
      Pe.$forceUpdate(), he || nn(C.restoreCursor);
    }
    function ur(g) {
      const {
        countGraphemes: E,
        maxlength: U,
        minlength: se
      } = t;
      if (E) {
        let ae;
        if (U !== void 0 && (ae === void 0 && (ae = E(g)), ae > Number(U)) || se !== void 0 && (ae === void 0 && (ae = E(g)), ae < Number(U)))
          return !1;
      }
      const {
        allowInput: he
      } = t;
      return typeof he == "function" ? he(g) : !0;
    }
    function ue(g) {
      Z(g), g.relatedTarget === l.value && He(), g.relatedTarget !== null && (g.relatedTarget === d.value || g.relatedTarget === c.value || g.relatedTarget === s.value) || (O.value = !1), Dt(g, "blur"), m.value = null;
    }
    function be(g, E) {
      Re(g), v.value = !0, O.value = !0, te(), Dt(g, "focus"), E === 0 ? m.value = d.value : E === 1 ? m.value = c.value : E === 2 && (m.value = s.value);
    }
    function nt(g) {
      t.passivelyActivated && (Ue(g), Dt(g, "blur"));
    }
    function An(g) {
      t.passivelyActivated && (v.value = !0, ne(g), Dt(g, "focus"));
    }
    function Dt(g, E) {
      g.relatedTarget !== null && (g.relatedTarget === d.value || g.relatedTarget === c.value || g.relatedTarget === s.value || g.relatedTarget === l.value) || (E === "focus" ? (Te(g), v.value = !0) : E === "blur" && (K(g), v.value = !1));
    }
    function it(g, E) {
      xt(g, E, "change");
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
        onMousedown: E
      } = t;
      E && E(g);
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
              left: he,
              top: ae,
              width: At,
              height: Ft
            } = se.getBoundingClientRect(), Et = 14;
            if (he + At - Et < g.clientX && g.clientX < he + At && ae + Ft - Et < g.clientY && g.clientY < ae + Ft)
              return;
          }
        }
        g.preventDefault(), v.value || Y();
      }
    }
    function En() {
      var g;
      B.value = !0, t.type === "textarea" && ((g = h.value) === null || g === void 0 || g.handleMouseEnterWrapper());
    }
    function dr() {
      var g;
      B.value = !1, t.type === "textarea" && ((g = h.value) === null || g === void 0 || g.handleMouseLeaveWrapper());
    }
    function xr() {
      R.value || P.value === "click" && (V.value = !V.value);
    }
    function Ir(g) {
      if (R.value) return;
      g.preventDefault();
      const E = (se) => {
        se.preventDefault(), ge("mouseup", document, E);
      };
      if (Ae("mouseup", document, E), P.value !== "mousedown") return;
      V.value = !0;
      const U = () => {
        V.value = !1, ge("mouseup", document, U);
      };
      Ae("mouseup", document, U);
    }
    function ct(g) {
      t.onKeyup && pe(t.onKeyup, g);
    }
    function Oi(g) {
      switch (t.onKeydown && pe(t.onKeydown, g), g.key) {
        case "Escape":
          j();
          break;
        case "Enter":
          M(g);
          break;
      }
    }
    function M(g) {
      var E, U;
      if (t.passivelyActivated) {
        const {
          value: se
        } = O;
        if (se) {
          t.internalDeactivateOnEnter && j();
          return;
        }
        g.preventDefault(), t.type === "textarea" ? (E = s.value) === null || E === void 0 || E.focus() : (U = d.value) === null || U === void 0 || U.focus();
      }
    }
    function j() {
      t.passivelyActivated && (O.value = !1, nn(() => {
        var g;
        (g = l.value) === null || g === void 0 || g.focus();
      }));
    }
    function Y() {
      var g, E, U;
      R.value || (t.passivelyActivated ? (g = l.value) === null || g === void 0 || g.focus() : ((E = s.value) === null || E === void 0 || E.focus(), (U = d.value) === null || U === void 0 || U.focus()));
    }
    function ie() {
      var g;
      !((g = l.value) === null || g === void 0) && g.contains(document.activeElement) && document.activeElement.blur();
    }
    function me() {
      var g, E;
      (g = s.value) === null || g === void 0 || g.select(), (E = d.value) === null || E === void 0 || E.select();
    }
    function Fe() {
      R.value || (s.value ? s.value.focus() : d.value && d.value.focus());
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
          value: E
        } = s;
        E == null || E.scrollTo(g);
      } else {
        const {
          value: E
        } = d;
        E == null || E.scrollTo(g);
      }
    }
    function Ee(g) {
      const {
        type: E,
        pair: U,
        autosize: se
      } = t;
      if (!U && se)
        if (E === "textarea") {
          const {
            value: he
          } = u;
          he && (he.textContent = `${g ?? ""}\r
`);
        } else {
          const {
            value: he
          } = f;
          he && (g ? he.textContent = g : he.innerHTML = "&nbsp;");
        }
    }
    function Xe() {
      ce();
    }
    const Hr = L({
      top: "0"
    });
    function Cl(g) {
      var E;
      const {
        scrollTop: U
      } = g.target;
      Hr.value.top = `${-U}px`, (E = h.value) === null || E === void 0 || E.syncUnifiedContainer();
    }
    let Wr = null;
    Qe(() => {
      const {
        autosize: g,
        type: E
      } = t;
      g && E === "textarea" ? Wr = ze(D, (U) => {
        !Array.isArray(U) && U !== N && Ee(U);
      }) : Wr == null || Wr();
    });
    let Lr = null;
    Qe(() => {
      t.type === "textarea" ? Lr = ze(D, (g) => {
        var E;
        !Array.isArray(g) && g !== N && ((E = h.value) === null || E === void 0 || E.syncUnifiedContainer());
      }) : Lr == null || Lr();
    }), Ve(dl, {
      mergedValueRef: D,
      maxlengthRef: oe,
      mergedClsPrefixRef: r,
      countGraphemesRef: we(t, "countGraphemes")
    });
    const yl = {
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
    }, Bl = Dn("Input", a, r), Mi = _(() => {
      const {
        value: g
      } = w, {
        common: {
          cubicBezierEaseInOut: E
        },
        self: {
          color: U,
          borderRadius: se,
          textColor: he,
          caretColor: ae,
          caretColorError: At,
          caretColorWarning: Ft,
          textDecorationColor: Et,
          border: cr,
          borderDisabled: hr,
          borderHover: Sn,
          borderFocus: wl,
          placeholderColor: Dl,
          placeholderColorDisabled: Al,
          lineHeightTextarea: Fl,
          colorDisabled: El,
          colorFocus: Sl,
          textColorDisabled: $l,
          boxShadowFocus: Pl,
          iconSize: Tl,
          colorFocusWarning: zl,
          boxShadowFocusWarning: Ol,
          borderWarning: Ml,
          borderFocusWarning: Rl,
          borderHoverWarning: _l,
          colorFocusError: kl,
          boxShadowFocusError: Il,
          borderError: Hl,
          borderFocusError: Wl,
          borderHoverError: Ll,
          clearSize: jl,
          clearColor: Nl,
          clearColorHover: Vl,
          clearColorPressed: ql,
          iconColor: Gl,
          iconColorDisabled: Ul,
          suffixTextColor: Xl,
          countTextColor: Yl,
          countTextColorDisabled: Kl,
          iconColorHover: Zl,
          iconColorPressed: Jl,
          loadingColor: Ql,
          loadingColorError: es,
          loadingColorWarning: ts,
          [G("padding", g)]: rs,
          [G("fontSize", g)]: ns,
          [G("height", g)]: is
        }
      } = o.value, {
        left: as,
        right: os
      } = eo(rs);
      return {
        "--n-bezier": E,
        "--n-count-text-color": Yl,
        "--n-count-text-color-disabled": Kl,
        "--n-color": U,
        "--n-font-size": ns,
        "--n-border-radius": se,
        "--n-height": is,
        "--n-padding-left": as,
        "--n-padding-right": os,
        "--n-text-color": he,
        "--n-caret-color": ae,
        "--n-text-decoration-color": Et,
        "--n-border": cr,
        "--n-border-disabled": hr,
        "--n-border-hover": Sn,
        "--n-border-focus": wl,
        "--n-placeholder-color": Dl,
        "--n-placeholder-color-disabled": Al,
        "--n-icon-size": Tl,
        "--n-line-height-textarea": Fl,
        "--n-color-disabled": El,
        "--n-color-focus": Sl,
        "--n-text-color-disabled": $l,
        "--n-box-shadow-focus": Pl,
        "--n-loading-color": Ql,
        // form warning
        "--n-caret-color-warning": Ft,
        "--n-color-focus-warning": zl,
        "--n-box-shadow-focus-warning": Ol,
        "--n-border-warning": Ml,
        "--n-border-focus-warning": Rl,
        "--n-border-hover-warning": _l,
        "--n-loading-color-warning": ts,
        // form error
        "--n-caret-color-error": At,
        "--n-color-focus-error": kl,
        "--n-box-shadow-focus-error": Il,
        "--n-border-error": Hl,
        "--n-border-focus-error": Wl,
        "--n-border-hover-error": Ll,
        "--n-loading-color-error": es,
        // clear-button
        "--n-clear-color": Nl,
        "--n-clear-size": jl,
        "--n-clear-color-hover": Vl,
        "--n-clear-color-pressed": ql,
        "--n-icon-color": Gl,
        "--n-icon-color-hover": Zl,
        "--n-icon-color-pressed": Jl,
        "--n-icon-color-disabled": Ul,
        "--n-suffix-text-color": Xl
      };
    }), Nt = i ? dt("input", _(() => {
      const {
        value: g
      } = w;
      return g[0];
    }), Mi, t) : void 0;
    return Object.assign(Object.assign({}, yl), {
      // DOM ref
      wrapperElRef: l,
      inputElRef: d,
      inputMirrorElRef: f,
      inputEl2Ref: c,
      textareaElRef: s,
      textareaMirrorElRef: u,
      textareaScrollbarInstRef: h,
      // value
      rtlEnabled: Bl,
      uncontrolledValue: b,
      mergedValue: D,
      passwordVisible: V,
      mergedPlaceholder: H,
      showPlaceholder1: e,
      showPlaceholder2: S,
      mergedFocus: A,
      isComposing: T,
      activated: O,
      showClearButton: z,
      mergedSize: w,
      mergedDisabled: R,
      textDecorationStyle: ee,
      mergedClsPrefix: r,
      mergedBordered: n,
      mergedShowPasswordOn: P,
      placeholderStyle: Hr,
      mergedStatus: I,
      textAreaScrollContainerWidth: J,
      // methods
      handleTextAreaScroll: Cl,
      handleCompositionStart: wt,
      handleCompositionEnd: sr,
      handleInput: xt,
      handleInputBlur: ue,
      handleInputFocus: be,
      handleWrapperBlur: nt,
      handleWrapperFocus: An,
      handleMouseEnter: En,
      handleMouseLeave: dr,
      handleMouseDown: kr,
      handleChange: it,
      handleClick: _r,
      handleClear: Fn,
      handlePasswordToggleClick: xr,
      handlePasswordToggleMousedown: Ir,
      handleWrapperKeydown: Oi,
      handleWrapperKeyup: ct,
      handleTextAreaMirrorResize: Xe,
      getTextareaScrollContainer: () => s.value,
      mergedTheme: o,
      cssVars: i ? void 0 : Mi,
      themeClass: Nt == null ? void 0 : Nt.themeClass,
      onRender: Nt == null ? void 0 : Nt.onRender
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
    }, Je(u.prefix, (f) => f && y("div", {
      class: `${n}-input__prefix`
    }, f)), o === "textarea" ? y(ll, {
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
        } = this, m = {
          width: this.autosize && c && `${c}px`
        };
        return y(Ct, null, y("textarea", Object.assign({}, this.inputProps, {
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
    }, " ") : null), !this.pair && Je(u.suffix, (f) => f || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? y("div", {
      class: `${n}-input__suffix`
    }, [Je(u["clear-icon-placeholder"], (d) => (this.clearable || d) && y(si, {
      clsPrefix: n,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => d,
      icon: () => {
        var c, m;
        return (m = (c = this.$slots)["clear-icon"]) === null || m === void 0 ? void 0 : m.call(c);
      }
    })), this.internalLoadingBeforeSuffix ? null : f, this.loading !== void 0 ? y(Lp, {
      clsPrefix: n,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? f : null, this.showCount && this.type !== "textarea" ? y(La, null, {
      default: (d) => {
        var c;
        return (c = u.count) === null || c === void 0 ? void 0 : c.call(u, d);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? y("div", {
      class: `${n}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? yr(u["password-visible-icon"], () => [y(hn, {
      clsPrefix: n
    }, {
      default: () => y(sp, null)
    })]) : yr(u["password-invisible-icon"], () => [y(hn, {
      clsPrefix: n
    }, {
      default: () => y(up, null)
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
    }, y("span", null, this.mergedPlaceholder[1])) : null), Je(u.suffix, (f) => (this.clearable || f) && y("div", {
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
    }) : null, this.showCount && o === "textarea" ? y(La, null, {
      default: (f) => {
        var d;
        const {
          renderCount: c
        } = this;
        return c ? c(f) : (d = u.count) === null || d === void 0 ? void 0 : d.call(u, f);
      }
    }) : null);
  }
}), Jp = W("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [$(">", [W("input", [$("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), $("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), W("button", [$("&:not(:last-child)", `
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
 `, [$(">", [W("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), W("base-selection", [W("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), W("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), k("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), $("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [$(">", [W("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), W("base-selection", [W("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), W("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), k("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), Qp = {}, ev = re({
  name: "InputGroup",
  props: Qp,
  setup(t) {
    const {
      mergedClsPrefixRef: r
    } = Ge(t);
    return lr("-input-group", Jp, r), {
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
}), tv = W("input-group-label", `
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
 `)]), rv = Object.assign(Object.assign({}, ve.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
}), nv = re({
  name: "InputGroupLabel",
  props: rv,
  setup(t) {
    const {
      mergedBorderedRef: r,
      mergedClsPrefixRef: n,
      inlineThemeDisabled: i
    } = Ge(t), a = ve("Input", "-input-group-label", tv, fl, t, n), o = _(() => {
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
        "--n-group-label-text-color": c,
        "--n-font-size": h,
        "--n-line-height": m,
        "--n-height": p
      };
    }), l = i ? dt("input-group-label", _(() => t.size[0]), o, t) : void 0;
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
function St(t) {
  return Le(t, [255, 255, 255, 0.16]);
}
function Jr(t) {
  return Le(t, [0, 0, 0, 0.12]);
}
const iv = "n-button-group", av = {
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
function ov(t) {
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
    textColor2: c,
    textColor3: m,
    primaryColorHover: C,
    primaryColorPressed: h,
    borderColor: p,
    primaryColor: b,
    baseColor: x,
    infoColor: D,
    infoColorHover: F,
    infoColorPressed: w,
    successColor: R,
    successColorHover: I,
    successColorPressed: v,
    warningColor: B,
    warningColorHover: T,
    warningColorPressed: O,
    errorColor: N,
    errorColorHover: H,
    errorColorPressed: e,
    fontWeight: S,
    buttonColor2: A,
    buttonColor2Hover: z,
    buttonColor2Pressed: P,
    fontWeightStrong: V
  } = t;
  return Object.assign(Object.assign({}, av), {
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
    textColor: c,
    textColorTertiary: m,
    textColorHover: C,
    textColorPressed: h,
    textColorFocus: C,
    textColorDisabled: c,
    textColorText: c,
    textColorTextHover: C,
    textColorTextPressed: h,
    textColorTextFocus: C,
    textColorTextDisabled: c,
    textColorGhost: c,
    textColorGhostHover: C,
    textColorGhostPressed: h,
    textColorGhostFocus: C,
    textColorGhostDisabled: c,
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
    textColorPrimary: x,
    textColorHoverPrimary: x,
    textColorPressedPrimary: x,
    textColorFocusPrimary: x,
    textColorDisabledPrimary: x,
    textColorTextPrimary: b,
    textColorTextHoverPrimary: C,
    textColorTextPressedPrimary: h,
    textColorTextFocusPrimary: C,
    textColorTextDisabledPrimary: c,
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
    textColorInfo: x,
    textColorHoverInfo: x,
    textColorPressedInfo: x,
    textColorFocusInfo: x,
    textColorDisabledInfo: x,
    textColorTextInfo: D,
    textColorTextHoverInfo: F,
    textColorTextPressedInfo: w,
    textColorTextFocusInfo: F,
    textColorTextDisabledInfo: c,
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
    colorSuccess: R,
    colorHoverSuccess: I,
    colorPressedSuccess: v,
    colorFocusSuccess: I,
    colorDisabledSuccess: R,
    textColorSuccess: x,
    textColorHoverSuccess: x,
    textColorPressedSuccess: x,
    textColorFocusSuccess: x,
    textColorDisabledSuccess: x,
    textColorTextSuccess: R,
    textColorTextHoverSuccess: I,
    textColorTextPressedSuccess: v,
    textColorTextFocusSuccess: I,
    textColorTextDisabledSuccess: c,
    textColorGhostSuccess: R,
    textColorGhostHoverSuccess: I,
    textColorGhostPressedSuccess: v,
    textColorGhostFocusSuccess: I,
    textColorGhostDisabledSuccess: R,
    borderSuccess: `1px solid ${R}`,
    borderHoverSuccess: `1px solid ${I}`,
    borderPressedSuccess: `1px solid ${v}`,
    borderFocusSuccess: `1px solid ${I}`,
    borderDisabledSuccess: `1px solid ${R}`,
    rippleColorSuccess: R,
    // warning
    colorWarning: B,
    colorHoverWarning: T,
    colorPressedWarning: O,
    colorFocusWarning: T,
    colorDisabledWarning: B,
    textColorWarning: x,
    textColorHoverWarning: x,
    textColorPressedWarning: x,
    textColorFocusWarning: x,
    textColorDisabledWarning: x,
    textColorTextWarning: B,
    textColorTextHoverWarning: T,
    textColorTextPressedWarning: O,
    textColorTextFocusWarning: T,
    textColorTextDisabledWarning: c,
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
    colorHoverError: H,
    colorPressedError: e,
    colorFocusError: H,
    colorDisabledError: N,
    textColorError: x,
    textColorHoverError: x,
    textColorPressedError: x,
    textColorFocusError: x,
    textColorDisabledError: x,
    textColorTextError: N,
    textColorTextHoverError: H,
    textColorTextPressedError: e,
    textColorTextFocusError: H,
    textColorTextDisabledError: c,
    textColorGhostError: N,
    textColorGhostHoverError: H,
    textColorGhostPressedError: e,
    textColorGhostFocusError: H,
    textColorGhostDisabledError: N,
    borderError: `1px solid ${N}`,
    borderHoverError: `1px solid ${H}`,
    borderPressedError: `1px solid ${e}`,
    borderFocusError: `1px solid ${H}`,
    borderDisabledError: `1px solid ${N}`,
    rippleColorError: N,
    waveOpacity: "0.6",
    fontWeight: S,
    fontWeightStrong: V
  });
}
const lv = {
  name: "Button",
  common: Bt,
  self: ov
}, sv = $([W("button", `
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
})]), Ne("disabled", [$("&:focus", [k("state-border", {
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
})]), Ne("disabled", [$("&:focus", {
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
})])]), X("loading", "cursor: wait;"), W("base-wave", `
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
 `, [W("icon-slot", `
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
})]), jp()]), k("content", `
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
})]), uv = Object.assign(Object.assign({}, ve.props), {
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
    default: !ul
  }
}), fv = re({
  name: "Button",
  props: uv,
  setup(t) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      const {
        dashed: w,
        ghost: R,
        text: I,
        secondary: v,
        tertiary: B,
        quaternary: T
      } = t;
      (w || R || I) && (v || B || T) && $t("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const r = L(null), n = L(null), i = L(!1), a = tt(() => !t.quaternary && !t.tertiary && !t.secondary && !t.text && (!t.color || t.ghost || t.dashed) && t.bordered), o = xe(iv, {}), {
      mergedSizeRef: l
    } = So({}, {
      defaultSize: "medium",
      mergedSize: (w) => {
        const {
          size: R
        } = t;
        if (R) return R;
        const {
          size: I
        } = o;
        if (I) return I;
        const {
          mergedSize: v
        } = w || {};
        return v ? v.value : "medium";
      }
    }), s = _(() => t.focusable && !t.disabled), u = (w) => {
      var R;
      s.value || w.preventDefault(), !t.nativeFocusBehavior && (w.preventDefault(), !t.disabled && s.value && ((R = r.value) === null || R === void 0 || R.focus({
        preventScroll: !0
      })));
    }, f = (w) => {
      var R;
      if (!t.disabled && !t.loading) {
        const {
          onClick: I
        } = t;
        I && pe(I, w), t.text || (R = n.value) === null || R === void 0 || R.play();
      }
    }, d = (w) => {
      switch (w.key) {
        case "Enter":
          if (!t.keyboard)
            return;
          i.value = !1;
      }
    }, c = (w) => {
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
    } = Ge(t), b = ve("Button", "-button", sv, lv, t, h), x = Dn("Button", p, h), D = _(() => {
      const w = b.value, {
        common: {
          cubicBezierEaseInOut: R,
          cubicBezierEaseOut: I
        },
        self: v
      } = w, {
        rippleDuration: B,
        opacityDisabled: T,
        fontWeight: O,
        fontWeightStrong: N
      } = v, H = l.value, {
        dashed: e,
        type: S,
        ghost: A,
        text: z,
        color: P,
        round: V,
        circle: ee,
        textColor: J,
        secondary: ce,
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
      const Te = S === "tertiary", Ie = S === "default", Z = Te ? "default" : S;
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
          "--n-text-color-hover": ue ? St(ue) : v[G("textColorTextHover", Z)],
          "--n-text-color-pressed": ue ? Jr(ue) : v[G("textColorTextPressed", Z)],
          "--n-text-color-focus": ue ? St(ue) : v[G("textColorTextHover", Z)],
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
          "--n-text-color-hover": ue ? St(ue) : v[G("textColorGhostHover", Z)],
          "--n-text-color-pressed": ue ? Jr(ue) : v[G("textColorGhostPressed", Z)],
          "--n-text-color-focus": ue ? St(ue) : v[G("textColorGhostHover", Z)],
          "--n-text-color-disabled": ue || v[G("textColorGhostDisabled", Z)]
        };
      } else if (ce) {
        const ue = Ie ? v.textColor : Te ? v.textColorTertiary : v[G("color", Z)], be = P || ue, nt = S !== "default" && S !== "tertiary";
        K = {
          "--n-color": nt ? Ot(be, {
            alpha: Number(v.colorOpacitySecondary)
          }) : v.colorSecondary,
          "--n-color-hover": nt ? Ot(be, {
            alpha: Number(v.colorOpacitySecondaryHover)
          }) : v.colorSecondaryHover,
          "--n-color-pressed": nt ? Ot(be, {
            alpha: Number(v.colorOpacitySecondaryPressed)
          }) : v.colorSecondaryPressed,
          "--n-color-focus": nt ? Ot(be, {
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
          "--n-color-hover": P ? St(P) : v[G("colorHover", Z)],
          "--n-color-pressed": P ? Jr(P) : v[G("colorPressed", Z)],
          "--n-color-focus": P ? St(P) : v[G("colorFocus", Z)],
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
        [G("height", H)]: He,
        [G("fontSize", H)]: te,
        [G("padding", H)]: le,
        [G("paddingRound", H)]: ne,
        [G("iconSize", H)]: Ue,
        [G("borderRadius", H)]: wt,
        [G("iconMargin", H)]: sr,
        waveOpacity: xt
      } = v, ur = {
        "--n-width": ee && !z ? He : "initial",
        "--n-height": z ? "initial" : He,
        "--n-font-size": te,
        "--n-padding": ee || z ? "initial" : V ? ne : le,
        "--n-icon-size": Ue,
        "--n-icon-margin": sr,
        "--n-border-radius": z ? "initial" : ee || V ? He : wt
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": R,
        "--n-bezier-ease-out": I,
        "--n-ripple-duration": B,
        "--n-opacity-disabled": T,
        "--n-wave-opacity": xt
      }, Me), K), Re), ur);
    }), F = C ? dt("button", _(() => {
      let w = "";
      const {
        dashed: R,
        type: I,
        ghost: v,
        text: B,
        color: T,
        round: O,
        circle: N,
        textColor: H,
        secondary: e,
        tertiary: S,
        quaternary: A,
        strong: z
      } = t;
      R && (w += "a"), v && (w += "b"), B && (w += "c"), O && (w += "d"), N && (w += "e"), e && (w += "f"), S && (w += "g"), A && (w += "h"), z && (w += "i"), T && (w += `j${qi(T)}`), H && (w += `k${qi(H)}`);
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
      rtlEnabled: x,
      handleMousedown: u,
      handleKeydown: c,
      handleBlur: m,
      handleKeyup: d,
      handleClick: f,
      customColorCssVars: _(() => {
        const {
          color: w
        } = t;
        if (!w) return null;
        const R = St(w);
        return {
          "--n-border-color": w,
          "--n-border-color-hover": R,
          "--n-border-color-pressed": Jr(w),
          "--n-border-color-focus": R,
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
    const i = Je(this.$slots.default, (a) => a && y("span", {
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
    }, this.iconPlacement === "right" && i, y(xp, {
      width: !0
    }, {
      default: () => Je(this.$slots.icon, (a) => (this.loading || this.renderIcon || a) && y("span", {
        class: `${t}-button__icon`,
        style: {
          margin: Gn(this.$slots.default) ? "0" : ""
        }
      }, y(zi, null, {
        default: () => this.loading ? y(al, {
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
}), dv = {
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
}, xv = re({
  name: "ConfigProvider",
  alias: ["App"],
  props: dv,
  setup(t) {
    const r = xe(lt, null), n = _(() => {
      const {
        theme: p
      } = t;
      if (p === null) return;
      const b = r == null ? void 0 : r.mergedThemeRef.value;
      return p === void 0 ? b : b === void 0 ? p : Object.assign({}, b, p);
    }), i = _(() => {
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
    }), l = _(() => {
      const {
        icons: p
      } = t;
      return p === void 0 ? r == null ? void 0 : r.mergedIconsRef.value : p;
    }), s = _(() => {
      const {
        componentOptions: p
      } = t;
      return p !== void 0 ? p : r == null ? void 0 : r.mergedComponentPropsRef.value;
    }), u = _(() => {
      const {
        clsPrefix: p
      } = t;
      return p !== void 0 ? p : r ? r.mergedClsPrefixRef.value : li;
    }), f = _(() => {
      var p;
      const {
        rtl: b
      } = t;
      if (b === void 0)
        return r == null ? void 0 : r.mergedRtlRef.value;
      const x = {};
      for (const D of b)
        x[D.name] = Ri(D), (p = D.peers) === null || p === void 0 || p.forEach((F) => {
          F.name in x || (x[F.name] = Ri(F));
        });
      return x;
    }), d = _(() => t.breakpoints || (r == null ? void 0 : r.mergedBreakpointsRef.value)), c = t.inlineThemeDisabled || (r == null ? void 0 : r.inlineThemeDisabled), m = t.preflightStyleDisabled || (r == null ? void 0 : r.preflightStyleDisabled), C = t.styleMountTarget || (r == null ? void 0 : r.styleMountTarget), h = _(() => {
      const {
        value: p
      } = n, {
        value: b
      } = i, x = b && Object.keys(b).length !== 0, D = p == null ? void 0 : p.name;
      return D ? x ? `${D}-${Fr(JSON.stringify(i.value))}` : D : x ? Fr(JSON.stringify(i.value)) : "";
    });
    return Ve(lt, {
      mergedThemeHashRef: h,
      mergedBreakpointsRef: d,
      mergedRtlRef: f,
      mergedIconsRef: l,
      mergedComponentPropsRef: s,
      mergedBorderedRef: o,
      mergedNamespaceRef: a,
      mergedClsPrefixRef: u,
      mergedLocaleRef: _(() => {
        const {
          locale: p
        } = t;
        if (p !== null)
          return p === void 0 ? r == null ? void 0 : r.mergedLocaleRef.value : p;
      }),
      mergedDateLocaleRef: _(() => {
        const {
          dateLocale: p
        } = t;
        if (p !== null)
          return p === void 0 ? r == null ? void 0 : r.mergedDateLocaleRef.value : p;
      }),
      mergedHljsRef: _(() => {
        const {
          hljs: p
        } = t;
        return p === void 0 ? r == null ? void 0 : r.mergedHljsRef.value : p;
      }),
      mergedKatexRef: _(() => {
        const {
          katex: p
        } = t;
        return p === void 0 ? r == null ? void 0 : r.mergedKatexRef.value : p;
      }),
      mergedThemeRef: n,
      mergedThemeOverridesRef: i,
      inlineThemeDisabled: c || !1,
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
function cv(t) {
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
const hv = {
  name: "Icon",
  common: Bt,
  self: cv
}, pv = W("icon", `
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
})]), vv = Object.assign(Object.assign({}, ve.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), xl = re({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: vv,
  setup(t) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n
    } = Ge(t), i = ve("Icon", "-icon", pv, hv, t, r), a = _(() => {
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
    }), o = n ? dt("icon", _(() => `${t.depth || "d"}`), a, t) : void 0;
    return {
      mergedClsPrefix: r,
      mergedStyle: _(() => {
        const {
          size: l,
          color: s
        } = t;
        return {
          fontSize: ot(l),
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
}), mv = {
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
function gv(t) {
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
  return Object.assign(Object.assign({}, mv), {
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
const cl = {
  name: "Form",
  common: Bt,
  self: gv
}, bv = W("form", [X("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [W("form-item", {
  width: "auto",
  marginRight: "18px"
}, [$("&:last-child", {
  marginRight: 0
})])])]), Rr = "n-form", hl = "n-form-item-insts";
var Cv = function(t, r, n, i) {
  function a(o) {
    return o instanceof n ? o : new n(function(l) {
      l(o);
    });
  }
  return new (n || (n = Promise))(function(o, l) {
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
      d.done ? o(d.value) : a(d.value).then(s, u);
    }
    f((i = i.apply(t, r || [])).next());
  });
};
const yv = Object.assign(Object.assign({}, ve.props), {
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
}), Bv = re({
  name: "Form",
  props: yv,
  setup(t) {
    const {
      mergedClsPrefixRef: r
    } = Ge(t);
    ve("Form", "-form", bv, cl, t, r);
    const n = {}, i = L(void 0), a = (u) => {
      const f = i.value;
      (f === void 0 || u >= f) && (i.value = u);
    };
    function o(u) {
      return Cv(this, arguments, void 0, function* (f, d = () => !0) {
        return yield new Promise((c, m) => {
          const C = [];
          for (const h of Wi(n)) {
            const p = n[h];
            for (const b of p)
              b.path && C.push(b.internalValidate(null, d));
          }
          Promise.all(C).then((h) => {
            const p = h.some((D) => !D.valid), b = [], x = [];
            h.forEach((D) => {
              var F, w;
              !((F = D.errors) === null || F === void 0) && F.length && b.push(D.errors), !((w = D.warnings) === null || w === void 0) && w.length && x.push(D.warnings);
            }), f && f(b.length ? b : void 0, {
              warnings: x.length ? x : void 0
            }), p ? m(b.length ? b : void 0) : c({
              warnings: x.length ? x : void 0
            });
          });
        });
      });
    }
    function l() {
      for (const u of Wi(n)) {
        const f = n[u];
        for (const d of f)
          d.restoreValidation();
      }
    }
    return Ve(Rr, {
      props: t,
      maxChildLabelWidthRef: i,
      deriveMaxChildLabelWidth: a
    }), Ve(hl, {
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
function wv(t, r) {
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
function Dv() {
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
  return Dv() ? rn = Reflect.construct.bind() : rn = function(a, o, l) {
    var s = [null];
    s.push.apply(s, o);
    var u = Function.bind.apply(a, s), f = new u();
    return l && Tr(f, l.prototype), f;
  }, rn.apply(null, arguments);
}
function Av(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function fi(t) {
  var r = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return fi = function(i) {
    if (i === null || !Av(i)) return i;
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
var Fv = /%[sdj%]/g, pl = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (pl = function(r, n) {
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
    var l = t.replace(Fv, function(s) {
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
function Sv(t, r, n) {
  var i = [], a = 0, o = t.length;
  function l(s) {
    i.push.apply(i, s || []), a++, a === o && n(i);
  }
  t.forEach(function(s) {
    r(s, l);
  });
}
function ja(t, r, n) {
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
function $v(t) {
  var r = [];
  return Object.keys(t).forEach(function(n) {
    r.push.apply(r, t[n] || []);
  }), r;
}
var Na = /* @__PURE__ */ function(t) {
  wv(r, t);
  function r(n, i) {
    var a;
    return a = t.call(this, "Async Validation Error") || this, a.errors = n, a.fields = i, a;
  }
  return r;
}(/* @__PURE__ */ fi(Error));
function Pv(t, r, n, i, a) {
  if (r.first) {
    var o = new Promise(function(m, C) {
      var h = function(x) {
        return i(x), x.length ? C(new Na(x, di(x))) : m(a);
      }, p = $v(t);
      ja(p, n, h);
    });
    return o.catch(function(m) {
      return m;
    }), o;
  }
  var l = r.firstFields === !0 ? Object.keys(t) : r.firstFields || [], s = Object.keys(t), u = s.length, f = 0, d = [], c = new Promise(function(m, C) {
    var h = function(b) {
      if (d.push.apply(d, b), f++, f === u)
        return i(d), d.length ? C(new Na(d, di(d))) : m(a);
    };
    s.length || (i(d), m(a)), s.forEach(function(p) {
      var b = t[p];
      l.indexOf(p) !== -1 ? ja(b, n, h) : Sv(b, n, h);
    });
  });
  return c.catch(function(m) {
    return m;
  }), c;
}
function Tv(t) {
  return !!(t && t.message !== void 0);
}
function zv(t, r) {
  for (var n = t, i = 0; i < r.length; i++) {
    if (n == null)
      return n;
    n = n[r[i]];
  }
  return n;
}
function Va(t, r) {
  return function(n) {
    var i;
    return t.fullFields ? i = zv(r, t.fullFields) : i = r[n.field || t.fullField], Tv(n) ? (n.field = n.field || t.fullField, n.fieldValue = i, n) : {
      message: typeof n == "function" ? n() : n,
      fieldValue: i,
      field: n.field || t.fullField
    };
  };
}
function qa(t, r) {
  if (r) {
    for (var n in r)
      if (r.hasOwnProperty(n)) {
        var i = r[n];
        typeof i == "object" && typeof t[n] == "object" ? t[n] = Mt({}, t[n], i) : t[n] = i;
      }
  }
  return t;
}
var vl = function(r, n, i, a, o, l) {
  r.required && (!i.hasOwnProperty(r.field) || Be(n, l || r.type)) && a.push(ke(o.messages.required, r.fullField));
}, Ov = function(r, n, i, a, o) {
  (/^\s+$/.test(n) || n === "") && a.push(ke(o.messages.whitespace, r.fullField));
}, Qr, Mv = function() {
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
  var f = "(?:(?:[a-z]+:)?//)", d = "(?:\\S+(?::\\S*)?@)?", c = u.v4().source, m = u.v6().source, C = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", x = '(?:[/?#][^\\s"]*)?', D = "(?:" + f + "|www\\.)" + d + "(?:localhost|" + c + "|" + m + "|" + C + h + p + ")" + b + x;
  return Qr = new RegExp("(?:^" + D + "$)", "i"), Qr;
}, Ga = {
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
    return typeof r == "string" && r.length <= 320 && !!r.match(Ga.email);
  },
  url: function(r) {
    return typeof r == "string" && r.length <= 2048 && !!r.match(Mv());
  },
  hex: function(r) {
    return typeof r == "string" && !!r.match(Ga.hex);
  }
}, Rv = function(r, n, i, a, o) {
  if (r.required && n === void 0) {
    vl(r, n, i, a, o);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = r.type;
  l.indexOf(s) > -1 ? gr[s](n) || a.push(ke(o.messages.types[s], r.fullField, r.type)) : s && typeof n !== r.type && a.push(ke(o.messages.types[s], r.fullField, r.type));
}, _v = function(r, n, i, a, o) {
  var l = typeof r.len == "number", s = typeof r.min == "number", u = typeof r.max == "number", f = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, d = n, c = null, m = typeof n == "number", C = typeof n == "string", h = Array.isArray(n);
  if (m ? c = "number" : C ? c = "string" : h && (c = "array"), !c)
    return !1;
  h && (d = n.length), C && (d = n.replace(f, "_").length), l ? d !== r.len && a.push(ke(o.messages[c].len, r.fullField, r.len)) : s && !u && d < r.min ? a.push(ke(o.messages[c].min, r.fullField, r.min)) : u && !s && d > r.max ? a.push(ke(o.messages[c].max, r.fullField, r.max)) : s && u && (d < r.min || d > r.max) && a.push(ke(o.messages[c].range, r.fullField, r.min, r.max));
}, Ut = "enum", kv = function(r, n, i, a, o) {
  r[Ut] = Array.isArray(r[Ut]) ? r[Ut] : [], r[Ut].indexOf(n) === -1 && a.push(ke(o.messages[Ut], r.fullField, r[Ut].join(", ")));
}, Iv = function(r, n, i, a, o) {
  if (r.pattern) {
    if (r.pattern instanceof RegExp)
      r.pattern.lastIndex = 0, r.pattern.test(n) || a.push(ke(o.messages.pattern.mismatch, r.fullField, n, r.pattern));
    else if (typeof r.pattern == "string") {
      var l = new RegExp(r.pattern);
      l.test(n) || a.push(ke(o.messages.pattern.mismatch, r.fullField, n, r.pattern));
    }
  }
}, Q = {
  required: vl,
  whitespace: Ov,
  type: Rv,
  range: _v,
  enum: kv,
  pattern: Iv
}, Hv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n, "string") && !r.required)
      return i();
    Q.required(r, n, a, l, o, "string"), Be(n, "string") || (Q.type(r, n, a, l, o), Q.range(r, n, a, l, o), Q.pattern(r, n, a, l, o), r.whitespace === !0 && Q.whitespace(r, n, a, l, o));
  }
  i(l);
}, Wv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), n !== void 0 && Q.type(r, n, a, l, o);
  }
  i(l);
}, Lv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (n === "" && (n = void 0), Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), n !== void 0 && (Q.type(r, n, a, l, o), Q.range(r, n, a, l, o));
  }
  i(l);
}, jv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), n !== void 0 && Q.type(r, n, a, l, o);
  }
  i(l);
}, Nv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), Be(n) || Q.type(r, n, a, l, o);
  }
  i(l);
}, Vv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), n !== void 0 && (Q.type(r, n, a, l, o), Q.range(r, n, a, l, o));
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
    if (n == null && !r.required)
      return i();
    Q.required(r, n, a, l, o, "array"), n != null && (Q.type(r, n, a, l, o), Q.range(r, n, a, l, o));
  }
  i(l);
}, Uv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), n !== void 0 && Q.type(r, n, a, l, o);
  }
  i(l);
}, Xv = "enum", Yv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o), n !== void 0 && Q[Xv](r, n, a, l, o);
  }
  i(l);
}, Kv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n, "string") && !r.required)
      return i();
    Q.required(r, n, a, l, o), Be(n, "string") || Q.pattern(r, n, a, l, o);
  }
  i(l);
}, Zv = function(r, n, i, a, o) {
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
}, Jv = function(r, n, i, a, o) {
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
}, Qv = function(r, n, i, a, o) {
  var l = [], s = r.required || !r.required && a.hasOwnProperty(r.field);
  if (s) {
    if (Be(n) && !r.required)
      return i();
    Q.required(r, n, a, l, o);
  }
  i(l);
}, Ar = {
  string: Hv,
  method: Wv,
  number: Lv,
  boolean: jv,
  regexp: Nv,
  integer: Vv,
  float: qv,
  array: Gv,
  object: Uv,
  enum: Yv,
  pattern: Kv,
  date: Zv,
  url: Ln,
  hex: Ln,
  email: Ln,
  required: Jv,
  any: Qv
};
function xi() {
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
var ci = xi(), rr = /* @__PURE__ */ function() {
  function t(n) {
    this.rules = null, this._messages = ci, this.define(n);
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
    return i && (this._messages = qa(xi(), i)), this._messages;
  }, r.validate = function(i, a, o) {
    var l = this;
    a === void 0 && (a = {}), o === void 0 && (o = function() {
    });
    var s = i, u = a, f = o;
    if (typeof u == "function" && (f = u, u = {}), !this.rules || Object.keys(this.rules).length === 0)
      return f && f(null, s), Promise.resolve(s);
    function d(p) {
      var b = [], x = {};
      function D(w) {
        if (Array.isArray(w)) {
          var R;
          b = (R = b).concat.apply(R, w);
        } else
          b.push(w);
      }
      for (var F = 0; F < p.length; F++)
        D(p[F]);
      b.length ? (x = di(b), f(b, x)) : f(null, s);
    }
    if (u.messages) {
      var c = this.messages();
      c === ci && (c = xi()), qa(c, u.messages), u.messages = c;
    } else
      u.messages = this.messages();
    var m = {}, C = u.keys || Object.keys(this.rules);
    C.forEach(function(p) {
      var b = l.rules[p], x = s[p];
      b.forEach(function(D) {
        var F = D;
        typeof F.transform == "function" && (s === i && (s = Mt({}, s)), x = s[p] = F.transform(x)), typeof F == "function" ? F = {
          validator: F
        } : F = Mt({}, F), F.validator = l.getValidationMethod(F), F.validator && (F.field = p, F.fullField = F.fullField || p, F.type = l.getType(F), m[p] = m[p] || [], m[p].push({
          rule: F,
          value: x,
          source: s,
          field: p
        }));
      });
    });
    var h = {};
    return Pv(m, u, function(p, b) {
      var x = p.rule, D = (x.type === "object" || x.type === "array") && (typeof x.fields == "object" || typeof x.defaultField == "object");
      D = D && (x.required || !x.required && p.value), x.field = p.field;
      function F(I, v) {
        return Mt({}, v, {
          fullField: x.fullField + "." + I,
          fullFields: x.fullFields ? [].concat(x.fullFields, [I]) : [I]
        });
      }
      function w(I) {
        I === void 0 && (I = []);
        var v = Array.isArray(I) ? I : [I];
        !u.suppressWarning && v.length && t.warning("async-validator:", v), v.length && x.message !== void 0 && (v = [].concat(x.message));
        var B = v.map(Va(x, s));
        if (u.first && B.length)
          return h[x.field] = 1, b(B);
        if (!D)
          b(B);
        else {
          if (x.required && !p.value)
            return x.message !== void 0 ? B = [].concat(x.message).map(Va(x, s)) : u.error && (B = [u.error(x, ke(u.messages.required, x.field))]), b(B);
          var T = {};
          x.defaultField && Object.keys(p.value).map(function(H) {
            T[H] = x.defaultField;
          }), T = Mt({}, T, p.rule.fields);
          var O = {};
          Object.keys(T).forEach(function(H) {
            var e = T[H], S = Array.isArray(e) ? e : [e];
            O[H] = S.map(F.bind(null, H));
          });
          var N = new t(O);
          N.messages(u.messages), p.rule.options && (p.rule.options.messages = u.messages, p.rule.options.error = u.error), N.validate(p.value, p.rule.options || u, function(H) {
            var e = [];
            B && B.length && e.push.apply(e, B), H && H.length && e.push.apply(e, H), b(e.length ? e : null);
          });
        }
      }
      var R;
      if (x.asyncValidator)
        R = x.asyncValidator(x, p.value, w, p.source, u);
      else if (x.validator) {
        try {
          R = x.validator(x, p.value, w, p.source, u);
        } catch (I) {
          console.error == null || console.error(I), u.suppressValidatorError || setTimeout(function() {
            throw I;
          }, 0), w(I.message);
        }
        R === !0 ? w() : R === !1 ? w(typeof x.message == "function" ? x.message(x.fullField || x.field) : x.message || (x.fullField || x.field) + " fails") : R instanceof Array ? w(R) : R instanceof Error && w(R.message);
      }
      R && R.then && R.then(function() {
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
rr.warning = pl;
rr.messages = ci;
rr.validators = Ar;
function em(t) {
  const r = xe(Rr, null);
  return {
    mergedSize: _(() => t.size !== void 0 ? t.size : (r == null ? void 0 : r.props.size) !== void 0 ? r.props.size : "medium")
  };
}
function tm(t) {
  const r = xe(Rr, null), n = _(() => {
    const {
      labelPlacement: h
    } = t;
    return h !== void 0 ? h : r != null && r.props.labelPlacement ? r.props.labelPlacement : "top";
  }), i = _(() => n.value === "left" && (t.labelWidth === "auto" || (r == null ? void 0 : r.props.labelWidth) === "auto")), a = _(() => {
    if (n.value === "top") return;
    const {
      labelWidth: h
    } = t;
    if (h !== void 0 && h !== "auto")
      return ot(h);
    if (i.value) {
      const p = r == null ? void 0 : r.maxChildLabelWidthRef.value;
      return p !== void 0 ? ot(p) : void 0;
    }
    if ((r == null ? void 0 : r.props.labelWidth) !== void 0)
      return ot(r.props.labelWidth);
  }), o = _(() => {
    const {
      labelAlign: h
    } = t;
    if (h) return h;
    if (r != null && r.props.labelAlign) return r.props.labelAlign;
  }), l = _(() => {
    var h;
    return [(h = t.labelProps) === null || h === void 0 ? void 0 : h.style, t.labelStyle, {
      width: a.value
    }];
  }), s = _(() => {
    const {
      showRequireMark: h
    } = t;
    return h !== void 0 ? h : r == null ? void 0 : r.props.showRequireMark;
  }), u = _(() => {
    const {
      requireMarkPlacement: h
    } = t;
    return h !== void 0 ? h : (r == null ? void 0 : r.props.requireMarkPlacement) || "right";
  }), f = L(!1), d = L(!1), c = _(() => {
    const {
      validationStatus: h
    } = t;
    if (h !== void 0) return h;
    if (f.value) return "error";
    if (d.value) return "warning";
  }), m = _(() => {
    const {
      showFeedback: h
    } = t;
    return h !== void 0 ? h : (r == null ? void 0 : r.props.showFeedback) !== void 0 ? r.props.showFeedback : !0;
  }), C = _(() => {
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
    mergedValidationStatus: c,
    mergedShowFeedback: m,
    mergedShowLabel: C,
    isAutoLabelWidth: i
  };
}
function rm(t) {
  const r = xe(Rr, null), n = _(() => {
    const {
      rulePath: l
    } = t;
    if (l !== void 0) return l;
    const {
      path: s
    } = t;
    if (s !== void 0) return s;
  }), i = _(() => {
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
  }), a = _(() => i.value.some((l) => l.required)), o = _(() => a.value || t.required);
  return {
    mergedRules: i,
    mergedRequired: o
  };
}
const {
  cubicBezierEaseInOut: Ua
} = or;
function nm({
  name: t = "fade-down",
  fromOffset: r = "-4px",
  enterDuration: n = ".3s",
  leaveDuration: i = ".3s",
  enterCubicBezier: a = Ua,
  leaveCubicBezier: o = Ua
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
const im = W("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [W("form-item-label", `
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
 `)]), W("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), X("auto-label-width", [W("form-item-label", "white-space: nowrap;")]), X("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [W("form-item-label", `
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
 `), W("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), W("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), W("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [$("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), W("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [X("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), X("error", {
  color: "var(--n-feedback-text-color-error)"
}), nm({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
var Xa = function(t, r, n, i) {
  function a(o) {
    return o instanceof n ? o : new n(function(l) {
      l(o);
    });
  }
  return new (n || (n = Promise))(function(o, l) {
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
      d.done ? o(d.value) : a(d.value).then(s, u);
    }
    f((i = i.apply(t, r || [])).next());
  });
};
const am = Object.assign(Object.assign({}, ve.props), {
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
function Ya(t, r) {
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
const om = re({
  name: "FormItem",
  props: am,
  setup(t) {
    cu(hl, "formItems", we(t, "path"));
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n
    } = Ge(t), i = xe(Rr, null), a = em(t), o = tm(t), {
      validationErrored: l,
      validationWarned: s
    } = o, {
      mergedRequired: u,
      mergedRules: f
    } = rm(t), {
      mergedSize: d
    } = a, {
      mergedLabelPlacement: c,
      mergedLabelAlign: m,
      mergedRequireMarkPlacement: C
    } = o, h = L([]), p = L(Vn()), b = i ? we(i.props, "disabled") : L(!1), x = ve("Form", "-form-item", im, cl, t, r);
    ze(we(t, "path"), () => {
      t.ignorePathChange || D();
    });
    function D() {
      h.value = [], l.value = !1, s.value = !1, t.feedback && (p.value = Vn());
    }
    const F = (...S) => Xa(this, [...S], void 0, function* (A = null, z = () => !0, P = {
      suppressWarning: !0
    }) {
      const {
        path: V
      } = t;
      P ? P.first || (P.first = t.first) : P = {};
      const {
        value: ee
      } = f, J = i ? Pi(i.props.model, V || "") : void 0, ce = {}, oe = {}, Pe = (A ? ee.filter((te) => Array.isArray(te.trigger) ? te.trigger.includes(A) : te.trigger === A) : ee).filter(z).map((te, le) => {
        const ne = Object.assign({}, te);
        if (ne.validator && (ne.validator = Ya(ne.validator, !1)), ne.asyncValidator && (ne.asyncValidator = Ya(ne.asyncValidator, !0)), ne.renderMessage) {
          const Ue = `__renderMessage__${le}`;
          oe[Ue] = ne.message, ne.message = Ue, ce[Ue] = ne.renderMessage;
        }
        return ne;
      }), De = Pe.filter((te) => te.level !== "warning"), Me = Pe.filter((te) => te.level === "warning"), K = {
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
      const He = (te) => {
        h.value = te.map((le) => {
          const ne = (le == null ? void 0 : le.message) || "";
          return {
            key: ne,
            render: () => ne.startsWith("__renderMessage__") ? ce[ne]() : ne
          };
        }), te.forEach((le) => {
          var ne;
          !((ne = le.message) === null || ne === void 0) && ne.startsWith("__renderMessage__") && (le.message = oe[le.message]);
        });
      };
      if (De.length) {
        const te = yield new Promise((le) => {
          Ie.validate({
            [Te]: J
          }, P, le);
        });
        te != null && te.length && (K.valid = !1, K.errors = te, He(te));
      }
      if (Me.length && !K.errors) {
        const te = yield new Promise((le) => {
          Z.validate({
            [Te]: J
          }, P, le);
        });
        te != null && te.length && (He(te), K.warnings = te);
      }
      return !K.errors && !K.warnings ? D() : (l.value = !!K.errors, s.value = !!K.warnings), K;
    });
    function w() {
      F("blur");
    }
    function R() {
      F("change");
    }
    function I() {
      F("focus");
    }
    function v() {
      F("input");
    }
    function B(S, A) {
      return Xa(this, void 0, void 0, function* () {
        let z, P, V, ee;
        return typeof S == "string" ? (z = S, P = A) : S !== null && typeof S == "object" && (z = S.trigger, P = S.callback, V = S.shouldRuleBeApplied, ee = S.options), yield new Promise((J, ce) => {
          F(z, V, ee).then(({
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
            }), ce(Pe));
          });
        });
      });
    }
    Ve(Jn, {
      path: we(t, "path"),
      disabled: b,
      mergedSize: a.mergedSize,
      mergedValidationStatus: o.mergedValidationStatus,
      restoreValidation: D,
      handleContentBlur: w,
      handleContentChange: R,
      handleContentFocus: I,
      handleContentInput: v
    });
    const T = {
      validate: B,
      restoreValidation: D,
      internalValidate: F
    }, O = L(null);
    st(() => {
      if (!o.isAutoLabelWidth.value) return;
      const S = O.value;
      if (S !== null) {
        const A = S.style.whiteSpace;
        S.style.whiteSpace = "nowrap", S.style.width = "", i == null || i.deriveMaxChildLabelWidth(Number(getComputedStyle(S).width.slice(0, -2))), S.style.whiteSpace = A;
      }
    });
    const N = _(() => {
      var S;
      const {
        value: A
      } = d, {
        value: z
      } = c, P = z === "top" ? "vertical" : "horizontal", {
        common: {
          cubicBezierEaseInOut: V
        },
        self: {
          labelTextColor: ee,
          asteriskColor: J,
          lineHeight: ce,
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
          [G("labelTextAlign", P)]: te,
          [G(G("labelFontSize", z), A)]: le
        }
      } = x.value;
      let ne = (S = m.value) !== null && S !== void 0 ? S : te;
      return z === "top" && (ne = ne === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": V,
        "--n-line-height": ce,
        "--n-blank-height": Ie,
        "--n-label-font-size": le,
        "--n-label-text-align": ne,
        "--n-label-height": Te,
        "--n-label-padding": He,
        "--n-label-font-weight": K,
        "--n-asterisk-color": J,
        "--n-label-text-color": ee,
        "--n-feedback-padding": Me,
        "--n-feedback-font-size": Z,
        "--n-feedback-height": Re,
        "--n-feedback-text-color": oe,
        "--n-feedback-text-color-warning": Pe,
        "--n-feedback-text-color-error": De
      };
    }), H = n ? dt("form-item", _(() => {
      var S;
      return `${d.value[0]}${c.value[0]}${((S = m.value) === null || S === void 0 ? void 0 : S[0]) || ""}`;
    }), N, t) : void 0, e = _(() => c.value === "left" && C.value === "left" && m.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: O,
      mergedClsPrefix: r,
      mergedRequired: u,
      feedbackId: p,
      renderExplains: h,
      reverseColSpace: e
    }, o), a), T), {
      cssVars: n ? void 0 : N,
      themeClass: H == null ? void 0 : H.themeClass,
      onRender: H == null ? void 0 : H.onRender
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
        labelProps: c
      } = this;
      return y("label", Object.assign({}, c, {
        class: [c == null ? void 0 : c.class, `${r}-form-item-label`, `${r}-form-item-label--${a}-mark`, this.reverseColSpace && `${r}-form-item-label--reverse-columns-space`],
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
    }, y(Jt, {
      name: "fade-down-transition",
      mode: "out-in"
    }, {
      default: () => {
        const {
          mergedValidationStatus: u
        } = this;
        return Je(t.feedback, (f) => {
          var d;
          const {
            feedback: c
          } = this, m = f || c ? y("div", {
            key: "__feedback__",
            class: `${r}-form-item-feedback__line`
          }, f || c) : this.renderExplains.length ? (d = this.renderExplains) === null || d === void 0 ? void 0 : d.map(({
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
}), lm = {
  thPaddingSmall: "6px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "6px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px"
};
function sm(t) {
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
    lineHeight: c,
    fontSizeSmall: m,
    fontSizeMedium: C,
    fontSizeLarge: h
  } = t;
  return Object.assign(Object.assign({}, lm), {
    fontSizeSmall: m,
    fontSizeMedium: C,
    fontSizeLarge: h,
    lineHeight: c,
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
const um = {
  name: "Table",
  common: Bt,
  self: sm
};
function fm(t) {
  const {
    primaryColor: r,
    baseColor: n
  } = t;
  return {
    color: r,
    iconColor: n
  };
}
const dm = {
  name: "IconWrapper",
  common: Bt,
  self: fm
}, xm = W("icon-wrapper", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`), cm = Object.assign(Object.assign({}, ve.props), {
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
}), hm = re({
  name: "IconWrapper",
  props: cm,
  setup(t, {
    slots: r
  }) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: i
    } = Ge(t), a = ve("IconWrapper", "-icon-wrapper", xm, dm, t, n), o = _(() => {
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
    }), l = i ? dt("icon-wrapper", void 0, o, t) : void 0;
    return () => {
      const s = ot(t.size);
      return l == null || l.onRender(), y("div", {
        class: [`${n.value}-icon-wrapper`, l == null ? void 0 : l.themeClass.value],
        style: [o == null ? void 0 : o.value, {
          height: s,
          width: s,
          borderRadius: ot(t.borderRadius),
          backgroundColor: t.color,
          color: t.iconColor
        }]
      }, r);
    };
  }
}), pm = $([W("table", `
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
 `)])])]), X("striped", [$("tr:nth-of-type(even)", [$("td", "background-color: var(--n-td-color-striped)")])]), Ne("bottom-bordered", [$("tr", [$("&:last-child", [$("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]), uu(W("table", `
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `, [$("th", `
 background-color: var(--n-th-color-modal);
 `), $("td", `
 background-color: var(--n-td-color-modal);
 `)])), fu(W("table", `
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `, [$("th", `
 background-color: var(--n-th-color-popover);
 `), $("td", `
 background-color: var(--n-td-color-popover);
 `)]))]), vm = Object.assign(Object.assign({}, ve.props), {
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
}), mm = re({
  name: "Table",
  props: vm,
  setup(t) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n,
      mergedRtlRef: i
    } = Ge(t), a = ve("Table", "-table", pm, um, t, r), o = Dn("Table", i, r), l = _(() => {
      const {
        size: u
      } = t, {
        self: {
          borderColor: f,
          tdColor: d,
          tdColorModal: c,
          tdColorPopover: m,
          thColor: C,
          thColorModal: h,
          thColorPopover: p,
          thTextColor: b,
          tdTextColor: x,
          borderRadius: D,
          thFontWeight: F,
          lineHeight: w,
          borderColorModal: R,
          borderColorPopover: I,
          tdColorStriped: v,
          tdColorStripedModal: B,
          tdColorStripedPopover: T,
          [G("fontSize", u)]: O,
          [G("tdPadding", u)]: N,
          [G("thPadding", u)]: H
        },
        common: {
          cubicBezierEaseInOut: e
        }
      } = a.value;
      return {
        "--n-bezier": e,
        "--n-td-color": d,
        "--n-td-color-modal": c,
        "--n-td-color-popover": m,
        "--n-td-text-color": x,
        "--n-border-color": f,
        "--n-border-color-modal": R,
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
        "--n-th-padding": H,
        "--n-td-color-striped": v,
        "--n-td-color-striped-modal": B,
        "--n-td-color-striped-popover": T
      };
    }), s = n ? dt("table", _(() => t.size[0]), l, t) : void 0;
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
}), gm = /* @__PURE__ */ Object.assign({
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
    return (n, i) => (mt(), Rt(ye(xv), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: ye(Vc),
      "date-locale": ye(ip),
      "theme-overrides": r
    }, {
      default: Qt(() => [
        an(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale", "date-locale"]));
  }
});
var br = void 0, Zt = {}, hi;
Zt.throttle = hi = function(t, r, n, i) {
  var a, o = 0;
  typeof r != "boolean" && (i = n, n = r, r = br);
  function l() {
    var s = this, u = +/* @__PURE__ */ new Date() - o, f = arguments;
    function d() {
      o = +/* @__PURE__ */ new Date(), n.apply(s, f);
    }
    function c() {
      a = br;
    }
    i && !a && d(), a && clearTimeout(a), i === br && u > t ? d() : r !== !0 && (a = setTimeout(i ? c : d, i === br ? t - u : t));
  }
  return Zt.guid && (l.guid = n.guid = n.guid || Zt.guid++), l;
};
Zt.debounce = function(t, r, n) {
  return n === br ? hi(t, r, !1) : hi(t, n, r !== !1);
};
const ml = function(t, r, n) {
  return Zt.debounce(r || 300, n ?? !0, t);
}, Sm = function(t, r, n) {
  return Zt.throttle(r || 300, n ?? !1, t);
}, bm = /* @__PURE__ */ Object.assign({
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
    const n = vs(), i = ms(), a = r, o = ml(function() {
      a("click");
    }, 300);
    return (l, s) => (mt(), Rt(ye(fv), {
      class: gs(`${ye(n).class ? ye(n).class : ""}`),
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
    }, Za({
      default: Qt(() => [
        t.loading ? bs("", !0) : (mt(), Rt(ye(i).default, { key: 0 }))
      ]),
      _: 2
    }, [
      l.$slots.icon ? {
        name: "icon",
        fn: Qt(() => [
          Ja(ye(i).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "attr-type", "block", "size", "type", "loading", "disabled", "onClick"]));
  }
});
function Cm(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var gl = { exports: {} };
(function(t) {
  function r() {
    var n = 0, i = 1, a = 2, o = 3, l = 4, s = 5, u = 6, f = 7, d = 8, c = 9, m = 10, C = 11, h = 12, p = 13, b = 14, x = 15, D = 16, F = 17, w = 0, R = 1, I = 2, v = 3, B = 4;
    function T(e, S) {
      return 55296 <= e.charCodeAt(S) && e.charCodeAt(S) <= 56319 && 56320 <= e.charCodeAt(S + 1) && e.charCodeAt(S + 1) <= 57343;
    }
    function O(e, S) {
      S === void 0 && (S = 0);
      var A = e.charCodeAt(S);
      if (55296 <= A && A <= 56319 && S < e.length - 1) {
        var z = A, P = e.charCodeAt(S + 1);
        return 56320 <= P && P <= 57343 ? (z - 55296) * 1024 + (P - 56320) + 65536 : z;
      }
      if (56320 <= A && A <= 57343 && S >= 1) {
        var z = e.charCodeAt(S - 1), P = A;
        return 55296 <= z && z <= 56319 ? (z - 55296) * 1024 + (P - 56320) + 65536 : P;
      }
      return A;
    }
    function N(e, S, A) {
      var z = [e].concat(S).concat([A]), P = z[z.length - 2], V = A, ee = z.lastIndexOf(b);
      if (ee > 1 && z.slice(1, ee).every(function(oe) {
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
        return V == b && S.every(function(oe) {
          return oe == o;
        }) ? I : R;
      if (V == a || V == n || V == i)
        return R;
      if (P == u && (V == u || V == f || V == c || V == m))
        return w;
      if ((P == c || P == f) && (V == f || V == d))
        return w;
      if ((P == m || P == d) && V == d)
        return w;
      if (V == o || V == x)
        return w;
      if (V == s)
        return w;
      if (P == h)
        return w;
      var ce = z.indexOf(o) != -1 ? z.lastIndexOf(o) - 1 : z.length - 2;
      return [p, F].indexOf(z[ce]) != -1 && z.slice(ce + 1, -1).every(function(oe) {
        return oe == o;
      }) && V == b || P == x && [D, F].indexOf(V) != -1 ? w : S.indexOf(l) != -1 ? I : P == l && V == l ? w : R;
    }
    this.nextBreak = function(e, S) {
      if (S === void 0 && (S = 0), S < 0)
        return 0;
      if (S >= e.length - 1)
        return e.length;
      for (var A = H(O(e, S)), z = [], P = S + 1; P < e.length; P++)
        if (!T(e, P - 1)) {
          var V = H(O(e, P));
          if (N(A, z, V))
            return P;
          z.push(V);
        }
      return e.length;
    }, this.splitGraphemes = function(e) {
      for (var S = [], A = 0, z; (z = this.nextBreak(e, A)) < e.length; )
        S.push(e.slice(A, z)), A = z;
      return A < e.length && S.push(e.slice(A)), S;
    }, this.iterateGraphemes = function(e) {
      var S = 0, A = {
        next: (function() {
          var z, P;
          return (P = this.nextBreak(e, S)) < e.length ? (z = e.slice(S, P), S = P, { value: z, done: !1 }) : S < e.length ? (z = e.slice(S), S = e.length, { value: z, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && (A[Symbol.iterator] = function() {
        return A;
      }), A;
    }, this.countGraphemes = function(e) {
      for (var S = 0, A = 0, z; (z = this.nextBreak(e, A)) < e.length; )
        A = z, S++;
      return A < e.length && S++, S;
    };
    function H(e) {
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
      129489 <= e && e <= 129501 ? p : 127995 <= e && e <= 127999 ? b : e == 8205 ? x : e == 9792 || // So       FEMALE SIGN
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
})(gl);
var ym = gl.exports;
const Bm = /* @__PURE__ */ Cm(ym), wm = new Bm(), Dm = (t = "") => wm.countGraphemes(t), bl = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ _i({
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
  emits: /* @__PURE__ */ _i(["blur", "input"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const n = Cs(t, "modelValue"), i = r;
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
    return (s, u) => (mt(), Rt(ye(Zp), {
      "input-props": { autocomplete: "off" },
      type: t.type,
      size: t.size,
      "show-password-on": t.showPassword ? "click" : void 0,
      value: n.value,
      maxlength: t.maxlength,
      "show-count": t.showCount,
      "count-graphemes": t.maxlength != null && t.maxlength > 0 || t.showCount ? ye(Dm) : void 0,
      placeholder: t.placeholder,
      autofocus: t.autofocus,
      disabled: t.disabled,
      readonly: t.readonly,
      onInput: l,
      onBlur: o
    }, Za({ _: 2 }, [
      t.prefixIcon ? {
        name: "prefix",
        fn: Qt(() => [
          Ja(ye(xl), ys(Bs(t.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly"]));
  }
}), Am = /* @__PURE__ */ Object.assign({
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
      return t.model.forEach((m) => {
        m.slot || (c[m.field] = m.value);
      }), L(c);
    }();
    function a() {
      const c = {};
      return t.model.forEach((m) => {
        m.slot && (c[m.field] = Es(m.value));
      }), { ...i.value, ...c };
    }
    const o = n, l = ki("form"), s = ml(function() {
      document.activeElement && document.activeElement.blur(), l.value.validate((c) => {
        o("submit", { formData: a(), valid: !c || c.length === 0, errors: c });
      }).catch(() => null);
    }), u = ki("formItem");
    function f(c = "") {
      if (!c) {
        l.value.restoreValidation();
        return;
      }
      const m = u.value.find((C) => C.path === c);
      m && m.restoreValidation();
    }
    function d(c) {
      c && t.rules && t.rules[c] && (t.rules[c].trigger && t.rules[c].trigger.includes("input") || f(c));
    }
    return r({ restoreValidation: f }), (c, m) => (mt(), Rt(ye(Bv), {
      ref: "form",
      "show-label": t.showLabel,
      "label-placement": t.labelPlacement,
      "label-width": "auto",
      "label-align": t.labelPlacement === "left" ? "right" : "left",
      model: ye(i),
      rules: t.rules,
      onSubmit: ws(ye(s), ["prevent"])
    }, {
      default: Qt(() => [
        (mt(!0), Ds(Ct, null, As(t.model, (C) => (mt(), Rt(ye(om), {
          ref_for: !0,
          ref: "formItem",
          key: C.field,
          label: C.label,
          path: C.field,
          "feedback-class": t.feedbackSizeClass ? `p-form-item-feedback-${t.feedbackSizeClass}` : "",
          first: !0
        }, {
          default: Qt(() => [
            !C.slot && C.type === "input" ? (mt(), Rt(Fs(ye(bl)), gn({
              key: 0,
              modelValue: ye(i)[C.field],
              "onUpdate:modelValue": (h) => ye(i)[C.field] = h,
              ref_for: !0
            }, { disabled: t.disabled, readonly: t.readonly, ...C.props }, {
              onInput: (h) => d(C.field)
            }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : an(c.$slots, C.field, { key: 1 })
          ]),
          _: 2
        }, 1032, ["label", "path", "feedback-class"]))), 128)),
        an(c.$slots, "default")
      ]),
      _: 3
    }, 8, ["show-label", "label-placement", "label-align", "model", "rules", "onSubmit"]));
  }
}), $m = ({ delay: t = 300, minPendingTime: r = 500, loadingValue: n = !1 } = {}) => {
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
  ), Ss(() => {
    u = null, o();
  }), { loading: s, waiting: l, doneLoading: f };
}, Pm = {
  install: (t, r = {}) => {
    const { prefix: n = "p" } = r;
    t.component(`${n}-config-provider`, gm), t.component(`${n}-button`, bm), t.component(`${n}-input`, bl), t.component(`${n}-form`, Am), t.component(`${n}-icon-wrapper`, hm), t.component(`${n}-icon`, xl), t.component(`${n}-input-group`, ev), t.component(`${n}-input-group-label`, nv), t.component(`${n}-table`, mm), t.component(`${n}-popover`, Hp);
  }
};
export {
  ml as debounce,
  Pm as default,
  Sm as throttle,
  $m as useDelayLoading
};
