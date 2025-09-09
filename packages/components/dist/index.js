import { ref as I, readonly as Hn, watch as Ie, computed as A, getCurrentInstance as So, onMounted as $t, onBeforeUnmount as St, onBeforeMount as cr, reactive as Bo, inject as pe, onActivated as Bd, onDeactivated as Ia, createTextVNode as Lt, Fragment as je, Comment as La, defineComponent as J, provide as $e, withDirectives as nn, toRef as ie, h as f, Teleport as fi, nextTick as pt, renderSlot as Yt, mergeProps as kt, isVNode as $f, shallowRef as kd, watchEffect as nt, Transition as Tt, TransitionGroup as Af, vShow as jn, cloneVNode as Rd, Text as Df, markRaw as Al, onUnmounted as Fd, normalizeClass as Nt, createApp as Ef, unref as re, openBlock as ke, createBlock as tt, withCtx as _e, createVNode as Xt, onScopeDispose as hi, mergeModels as Ht, useModel as bn, useTemplateRef as nr, withKeys as Tf, createSlots as fr, normalizeProps as Of, guardReactiveProps as Mf, useAttrs as Fn, normalizeStyle as Vt, useSlots as Na, createCommentVNode as xt, createElementBlock as st, createElementVNode as Mn, toDisplayString as un, resolveDynamicComponent as In, renderList as io, withModifiers as If, toValue as Lf } from "vue";
function Nf(e) {
  let t = ".", r = "__", o = "--", i;
  if (e) {
    let h = e.blockPrefix;
    h && (t = h), h = e.elementPrefix, h && (r = h), h = e.modifierPrefix, h && (o = h);
  }
  const a = {
    install(h) {
      i = h.c;
      const p = h.context;
      p.bem = {}, p.bem.b = null, p.bem.els = null;
    }
  };
  function l(h) {
    let p, x;
    return {
      before(b) {
        p = b.bem.b, x = b.bem.els, b.bem.els = null;
      },
      after(b) {
        b.bem.b = p, b.bem.els = x;
      },
      $({ context: b, props: y }) {
        return h = typeof h == "string" ? h : h({ context: b, props: y }), b.bem.b = h, `${(y == null ? void 0 : y.bPrefix) || t}${b.bem.b}`;
      }
    };
  }
  function s(h) {
    let p;
    return {
      before(x) {
        p = x.bem.els;
      },
      after(x) {
        x.bem.els = p;
      },
      $({ context: x, props: b }) {
        return h = typeof h == "string" ? h : h({ context: x, props: b }), x.bem.els = h.split(",").map((y) => y.trim()), x.bem.els.map((y) => `${(b == null ? void 0 : b.bPrefix) || t}${x.bem.b}${r}${y}`).join(", ");
      }
    };
  }
  function d(h) {
    return {
      $({ context: p, props: x }) {
        h = typeof h == "string" ? h : h({ context: p, props: x });
        const b = h.split(",").map((w) => w.trim());
        function y(w) {
          return b.map((R) => `&${(x == null ? void 0 : x.bPrefix) || t}${p.bem.b}${w !== void 0 ? `${r}${w}` : ""}${o}${R}`).join(", ");
        }
        const k = p.bem.els;
        if (k !== null) {
          if (process.env.NODE_ENV !== "production" && k.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${h}) is invalid, using modifier inside multiple elements is not allowed`);
          return y(k[0]);
        } else
          return y();
      }
    };
  }
  function u(h) {
    return {
      $({ context: p, props: x }) {
        h = typeof h == "string" ? h : h({ context: p, props: x });
        const b = p.bem.els;
        if (process.env.NODE_ENV !== "production" && b !== null && b.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${h}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(x == null ? void 0 : x.bPrefix) || t}${p.bem.b}${b !== null && b.length > 0 ? `${r}${b[0]}` : ""}${o}${h})`;
      }
    };
  }
  return Object.assign(a, {
    cB: (...h) => i(l(h[0]), h[1], h[2]),
    cE: (...h) => i(s(h[0]), h[1], h[2]),
    cM: (...h) => i(d(h[0]), h[1], h[2]),
    cNotM: (...h) => i(u(h[0]), h[1], h[2])
  }), a;
}
function Hf(e) {
  let t = 0;
  for (let r = 0; r < e.length; ++r)
    e[r] === "&" && ++t;
  return t;
}
const Pd = /\s*,(?![^(]*\))\s*/g, jf = /\s+/g;
function _f(e, t) {
  const r = [];
  return t.split(Pd).forEach((o) => {
    let i = Hf(o);
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
        e.forEach((d) => {
          l.push(s.replace("&", d));
        });
      }), a = l;
    }
    a.forEach((l) => r.push(l));
  }), r;
}
function Wf(e, t) {
  const r = [];
  return t.split(Pd).forEach((o) => {
    e.forEach((i) => {
      r.push((i && i + " ") + o);
    });
  }), r;
}
function Vf(e) {
  let t = [""];
  return e.forEach((r) => {
    r = r && r.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    r && (r.includes("&") ? t = _f(t, r) : t = Wf(t, r));
  }), t.join(", ").replace(jf, " ");
}
function Dl(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function vi(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Uf(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function Ao(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Kf = /[A-Z]/g;
function zd(e) {
  return e.replace(Kf, (t) => "-" + t.toLowerCase());
}
function qf(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((r) => t + `  ${zd(r[0])}: ${r[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function Gf(e, t, r) {
  return typeof e == "function" ? e({
    context: t.context,
    props: r
  }) : e;
}
function El(e, t, r, o) {
  if (!t)
    return "";
  const i = Gf(t, r, o);
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
    const d = i[s];
    if (s === "raw") {
      l.push(`
` + d + `
`);
      return;
    }
    s = zd(s), d != null && l.push(`  ${s}${qf(d)}`);
  }), e && l.push("}"), l.join(`
`);
}
function la(e, t, r) {
  e && e.forEach((o) => {
    if (Array.isArray(o))
      la(o, t, r);
    else if (typeof o == "function") {
      const i = o(t);
      Array.isArray(i) ? la(i, t, r) : i && r(i);
    } else o && r(o);
  });
}
function $d(e, t, r, o, i) {
  const a = e.$;
  let l = "";
  if (!a || typeof a == "string")
    Ao(a) ? l = a : t.push(a);
  else if (typeof a == "function") {
    const u = a({
      context: o.context,
      props: i
    });
    Ao(u) ? l = u : t.push(u);
  } else if (a.before && a.before(o.context), !a.$ || typeof a.$ == "string")
    Ao(a.$) ? l = a.$ : t.push(a.$);
  else if (a.$) {
    const u = a.$({
      context: o.context,
      props: i
    });
    Ao(u) ? l = u : t.push(u);
  }
  const s = Vf(t), d = El(s, e.props, o, i);
  l ? r.push(`${l} {`) : d.length && r.push(d), e.children && la(e.children, {
    context: o.context,
    props: i
  }, (u) => {
    if (typeof u == "string") {
      const c = El(s, { raw: u }, o, i);
      r.push(c);
    } else
      $d(u, t, r, o, i);
  }), t.pop(), l && r.push("}"), a && a.after && a.after(o.context);
}
function Xf(e, t, r) {
  const o = [];
  return $d(e, [], o, t, r), o.join(`

`);
}
function vo(e) {
  for (var t = 0, r, o = 0, i = e.length; i >= 4; ++o, i -= 4)
    r = e.charCodeAt(o) & 255 | (e.charCodeAt(++o) & 255) << 8 | (e.charCodeAt(++o) & 255) << 16 | (e.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, t = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(o + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(o + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(o) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
typeof window < "u" && (window.__cssrContext = {});
function Yf(e, t, r, o) {
  const { els: i } = t;
  if (r === void 0)
    i.forEach(Dl), t.els = [];
  else {
    const a = vi(r, o);
    a && i.includes(a) && (Dl(a), t.els = i.filter((l) => l !== a));
  }
}
function Tl(e, t) {
  e.push(t);
}
function Zf(e, t, r, o, i, a, l, s, d) {
  let u;
  if (r === void 0 && (u = t.render(o), r = vo(u)), d) {
    d.adapter(r, u ?? t.render(o));
    return;
  }
  s === void 0 && (s = document.head);
  const c = vi(r, s);
  if (c !== null && !a)
    return c;
  const v = c ?? Uf(r);
  if (u === void 0 && (u = t.render(o)), v.textContent = u, c !== null)
    return c;
  if (l) {
    const g = s.querySelector(`meta[name="${l}"]`);
    if (g)
      return s.insertBefore(v, g), Tl(t.els, v), v;
  }
  return i ? s.insertBefore(v, s.querySelector("style, link")) : s.appendChild(v), Tl(t.els, v), v;
}
function Jf(e) {
  return Xf(this, this.instance, e);
}
function Qf(e = {}) {
  const { id: t, ssr: r, props: o, head: i = !1, force: a = !1, anchorMetaName: l, parent: s } = e;
  return Zf(this.instance, this, t, o, i, a, l, s, r);
}
function eh(e = {}) {
  const { id: t, parent: r } = e;
  Yf(this.instance, this, t, r);
}
const Do = function(e, t, r, o) {
  return {
    instance: e,
    $: t,
    props: r,
    children: o,
    els: [],
    render: Jf,
    mount: Qf,
    unmount: eh
  };
}, th = function(e, t, r, o) {
  return Array.isArray(t) ? Do(e, { $: null }, null, t) : Array.isArray(r) ? Do(e, t, null, r) : Array.isArray(o) ? Do(e, t, r, o) : Do(e, t, r, null);
};
function Ad(e = {}) {
  const t = {
    c: (...r) => th(t, ...r),
    use: (r, ...o) => r.install(t, ...o),
    find: vi,
    context: {},
    config: e
  };
  return t;
}
function nh(e, t) {
  if (e === void 0)
    return !1;
  if (t) {
    const { context: { ids: r } } = t;
    return r.has(e);
  }
  return vi(e) !== null;
}
const rh = "n", go = `.${rh}-`, oh = "__", ih = "--", Dd = Ad(), Ed = Nf({
  blockPrefix: go,
  elementPrefix: oh,
  modifierPrefix: ih
});
Dd.use(Ed);
const {
  c: D,
  find: fB
} = Dd, {
  cB: z,
  cE: M,
  cM: N,
  cNotM: Je
} = Ed;
function gi(e) {
  return D(({
    props: {
      bPrefix: t
    }
  }) => `${t || go}modal, ${t || go}drawer`, [e]);
}
function Ha(e) {
  return D(({
    props: {
      bPrefix: t
    }
  }) => `${t || go}popover`, [e]);
}
function Td(e) {
  return D(({
    props: {
      bPrefix: t
    }
  }) => `&${t || go}modal`, e);
}
const ah = (...e) => D(">", [z(...e)]);
function Z(e, t) {
  return e + (t === "default" ? "" : t.replace(/^[a-z]/, (r) => r.toUpperCase()));
}
let Jo = [];
const Od = /* @__PURE__ */ new WeakMap();
function lh() {
  Jo.forEach((e) => e(...Od.get(e))), Jo = [];
}
function Qo(e, ...t) {
  Od.set(e, t), !Jo.includes(e) && Jo.push(e) === 1 && requestAnimationFrame(lh);
}
function Zt(e, t) {
  let { target: r } = e;
  for (; r; ) {
    if (r.dataset && r.dataset[t] !== void 0)
      return !0;
    r = r.parentElement;
  }
  return !1;
}
function Dr(e) {
  return e.composedPath()[0] || null;
}
function Et(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function Ct(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Wt(e, t) {
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
  return t === void 0 ? o : o[t];
}
const Ol = {
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
}, Lr = "^\\s*", Nr = "\\s*$", Jn = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Qn = "([0-9A-Fa-f])", er = "([0-9A-Fa-f]{2})", sh = new RegExp(`${Lr}rgb\\s*\\(${Jn},${Jn},${Jn}\\)${Nr}`), dh = new RegExp(`${Lr}rgba\\s*\\(${Jn},${Jn},${Jn},${Jn}\\)${Nr}`), uh = new RegExp(`${Lr}#${Qn}${Qn}${Qn}${Nr}`), ch = new RegExp(`${Lr}#${er}${er}${er}${Nr}`), fh = new RegExp(`${Lr}#${Qn}${Qn}${Qn}${Qn}${Nr}`), hh = new RegExp(`${Lr}#${er}${er}${er}${er}${Nr}`);
function Gt(e) {
  return parseInt(e, 16);
}
function ir(e) {
  try {
    let t;
    if (t = ch.exec(e))
      return [Gt(t[1]), Gt(t[2]), Gt(t[3]), 1];
    if (t = sh.exec(e))
      return [It(t[1]), It(t[5]), It(t[9]), 1];
    if (t = dh.exec(e))
      return [
        It(t[1]),
        It(t[5]),
        It(t[9]),
        ao(t[13])
      ];
    if (t = uh.exec(e))
      return [
        Gt(t[1] + t[1]),
        Gt(t[2] + t[2]),
        Gt(t[3] + t[3]),
        1
      ];
    if (t = hh.exec(e))
      return [
        Gt(t[1]),
        Gt(t[2]),
        Gt(t[3]),
        ao(Gt(t[4]) / 255)
      ];
    if (t = fh.exec(e))
      return [
        Gt(t[1] + t[1]),
        Gt(t[2] + t[2]),
        Gt(t[3] + t[3]),
        ao(Gt(t[4] + t[4]) / 255)
      ];
    if (e in Ol)
      return ir(Ol[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function vh(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function sa(e, t, r, o) {
  return `rgba(${It(e)}, ${It(t)}, ${It(r)}, ${vh(o)})`;
}
function Ni(e, t, r, o, i) {
  return It((e * t * (1 - o) + r * o) / i);
}
function Xe(e, t) {
  Array.isArray(e) || (e = ir(e)), Array.isArray(t) || (t = ir(t));
  const r = e[3], o = t[3], i = ao(r + o - r * o);
  return sa(Ni(e[0], r, t[0], o, i), Ni(e[1], r, t[1], o, i), Ni(e[2], r, t[2], o, i), i);
}
function Ee(e, t) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : ir(e);
  return t.alpha ? sa(r, o, i, t.alpha) : sa(r, o, i, a);
}
function Eo(e, t) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : ir(e), { lightness: l = 1, alpha: s = 1 } = t;
  return gh([r * l, o * l, i * l, a * s]);
}
function ao(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function It(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function gh(e) {
  const [t, r, o] = e;
  return 3 in e ? `rgba(${It(t)}, ${It(r)}, ${It(o)}, ${ao(e[3])})` : `rgba(${It(t)}, ${It(r)}, ${It(o)}, 1)`;
}
function xn(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function ph(e, t) {
  const r = [];
  for (let o = 0; o < e; ++o)
    r.push(t);
  return r;
}
function Xo(e) {
  return e.composedPath()[0];
}
const mh = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function bh(e, t, r) {
  if (e === "mousemoveoutside") {
    const o = (i) => {
      t.contains(Xo(i)) || r(i);
    };
    return {
      mousemove: o,
      touchstart: o
    };
  } else if (e === "clickoutside") {
    let o = !1;
    const i = (l) => {
      o = !t.contains(Xo(l));
    }, a = (l) => {
      o && (t.contains(Xo(l)) || r(l));
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
function Md(e, t, r) {
  const o = mh[e];
  let i = o.get(t);
  i === void 0 && o.set(t, i = /* @__PURE__ */ new WeakMap());
  let a = i.get(r);
  return a === void 0 && i.set(r, a = bh(e, t, r)), a;
}
function xh(e, t, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Md(e, t, r);
    return Object.keys(i).forEach((a) => {
      Ke(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function yh(e, t, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Md(e, t, r);
    return Object.keys(i).forEach((a) => {
      Ve(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function Ch() {
  if (typeof window > "u")
    return {
      on: () => {
      },
      off: () => {
      }
    };
  const e = /* @__PURE__ */ new WeakMap(), t = /* @__PURE__ */ new WeakMap();
  function r() {
    e.set(this, !0);
  }
  function o() {
    e.set(this, !0), t.set(this, !0);
  }
  function i(C, S, F) {
    const P = C[S];
    return C[S] = function() {
      return F.apply(C, arguments), P.apply(C, arguments);
    }, C;
  }
  function a(C, S) {
    C[S] = Event.prototype[S];
  }
  const l = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function d() {
    var C;
    return (C = l.get(this)) !== null && C !== void 0 ? C : null;
  }
  function u(C, S) {
    s !== void 0 && Object.defineProperty(C, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: S ?? s.get
    });
  }
  const c = {
    bubble: {},
    capture: {}
  }, v = {};
  function g() {
    const C = function(S) {
      const { type: F, eventPhase: P, bubbles: _ } = S, O = Xo(S);
      if (P === 2)
        return;
      const n = P === 1 ? "capture" : "bubble";
      let E = O;
      const T = [];
      for (; E === null && (E = window), T.push(E), E !== window; )
        E = E.parentNode || null;
      const H = c.capture[F], L = c.bubble[F];
      if (i(S, "stopPropagation", r), i(S, "stopImmediatePropagation", o), u(S, d), n === "capture") {
        if (H === void 0)
          return;
        for (let U = T.length - 1; U >= 0 && !e.has(S); --U) {
          const te = T[U], X = H.get(te);
          if (X !== void 0) {
            l.set(S, te);
            for (const K of X) {
              if (t.has(S))
                break;
              K(S);
            }
          }
          if (U === 0 && !_ && L !== void 0) {
            const K = L.get(te);
            if (K !== void 0)
              for (const j of K) {
                if (t.has(S))
                  break;
                j(S);
              }
          }
        }
      } else if (n === "bubble") {
        if (L === void 0)
          return;
        for (let U = 0; U < T.length && !e.has(S); ++U) {
          const te = T[U], X = L.get(te);
          if (X !== void 0) {
            l.set(S, te);
            for (const K of X) {
              if (t.has(S))
                break;
              K(S);
            }
          }
        }
      }
      a(S, "stopPropagation"), a(S, "stopImmediatePropagation"), u(S);
    };
    return C.displayName = "evtdUnifiedHandler", C;
  }
  function m() {
    const C = function(S) {
      const { type: F, eventPhase: P } = S;
      if (P !== 2)
        return;
      const _ = v[F];
      _ !== void 0 && _.forEach((O) => O(S));
    };
    return C.displayName = "evtdUnifiedWindowEventHandler", C;
  }
  const h = g(), p = m();
  function x(C, S) {
    const F = c[C];
    return F[S] === void 0 && (F[S] = /* @__PURE__ */ new Map(), window.addEventListener(S, h, C === "capture")), F[S];
  }
  function b(C) {
    return v[C] === void 0 && (v[C] = /* @__PURE__ */ new Set(), window.addEventListener(C, p)), v[C];
  }
  function y(C, S) {
    let F = C.get(S);
    return F === void 0 && C.set(S, F = /* @__PURE__ */ new Set()), F;
  }
  function k(C, S, F, P) {
    const _ = c[S][F];
    if (_ !== void 0) {
      const O = _.get(C);
      if (O !== void 0 && O.has(P))
        return !0;
    }
    return !1;
  }
  function w(C, S) {
    const F = v[C];
    return !!(F !== void 0 && F.has(S));
  }
  function R(C, S, F, P) {
    let _;
    if (typeof P == "object" && P.once === !0 ? _ = (H) => {
      B(C, S, _, P), F(H);
    } : _ = F, xh(C, S, _, P))
      return;
    const n = P === !0 || typeof P == "object" && P.capture === !0 ? "capture" : "bubble", E = x(n, C), T = y(E, S);
    if (T.has(_) || T.add(_), S === window) {
      const H = b(C);
      H.has(_) || H.add(_);
    }
  }
  function B(C, S, F, P) {
    if (yh(C, S, F, P))
      return;
    const O = P === !0 || typeof P == "object" && P.capture === !0, n = O ? "capture" : "bubble", E = x(n, C), T = y(E, S);
    if (S === window && !k(S, O ? "bubble" : "capture", C, F) && w(C, F)) {
      const L = v[C];
      L.delete(F), L.size === 0 && (window.removeEventListener(C, p), v[C] = void 0);
    }
    T.has(F) && T.delete(F), T.size === 0 && E.delete(S), E.size === 0 && (window.removeEventListener(C, h, n === "capture"), c[n][C] = void 0);
  }
  return {
    on: R,
    off: B
  };
}
const { on: Ke, off: Ve } = Ch();
function Id(e) {
  const t = I(!!e.value);
  if (t.value)
    return Hn(t);
  const r = Ie(e, (o) => {
    o && (t.value = !0, r());
  });
  return Hn(t);
}
function qe(e) {
  const t = A(e), r = I(t.value);
  return Ie(t, (o) => {
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
function ja() {
  return So() !== null;
}
const _a = typeof window < "u";
let Fr, lo;
const wh = () => {
  var e, t;
  Fr = _a ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, lo = !1, Fr !== void 0 ? Fr.then(() => {
    lo = !0;
  }) : lo = !0;
};
wh();
function Sh(e) {
  if (lo)
    return;
  let t = !1;
  $t(() => {
    lo || Fr == null || Fr.then(() => {
      t || e();
    });
  }), St(() => {
    t = !0;
  });
}
const to = I(null);
function Ml(e) {
  if (e.clientX > 0 || e.clientY > 0)
    to.value = {
      x: e.clientX,
      y: e.clientY
    };
  else {
    const { target: t } = e;
    if (t instanceof Element) {
      const { left: r, top: o, width: i, height: a } = t.getBoundingClientRect();
      r > 0 || o > 0 ? to.value = {
        x: r + i / 2,
        y: o + a / 2
      } : to.value = { x: 0, y: 0 };
    } else
      to.value = null;
  }
}
let To = 0, Il = !0;
function Wa() {
  if (!_a)
    return Hn(I(null));
  To === 0 && Ke("click", document, Ml, !0);
  const e = () => {
    To += 1;
  };
  return Il && (Il = ja()) ? (cr(e), St(() => {
    To -= 1, To === 0 && Ve("click", document, Ml, !0);
  })) : e(), Hn(to);
}
const Bh = I(void 0);
let Oo = 0;
function Ll() {
  Bh.value = Date.now();
}
let Nl = !0;
function Va(e) {
  if (!_a)
    return Hn(I(!1));
  const t = I(!1);
  let r = null;
  function o() {
    r !== null && window.clearTimeout(r);
  }
  function i() {
    o(), t.value = !0, r = window.setTimeout(() => {
      t.value = !1;
    }, e);
  }
  Oo === 0 && Ke("click", window, Ll, !0);
  const a = () => {
    Oo += 1, Ke("click", window, i, !0);
  };
  return Nl && (Nl = ja()) ? (cr(a), St(() => {
    Oo -= 1, Oo === 0 && Ve("click", window, Ll, !0), Ve("click", window, i, !0), o();
  })) : a(), Hn(t);
}
function Pt(e, t) {
  return Ie(e, (r) => {
    r !== void 0 && (t.value = r);
  }), A(() => e.value === void 0 ? t.value : e.value);
}
function hr() {
  const e = I(!1);
  return $t(() => {
    e.value = !0;
  }), Hn(e);
}
function Ua(e, t) {
  return A(() => {
    for (const r of t)
      if (e[r] !== void 0)
        return e[r];
    return e[t[t.length - 1]];
  });
}
const kh = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Rh() {
  return kh;
}
function Fh(e = {}, t) {
  const r = Bo({
    ctrl: !1,
    command: !1,
    win: !1,
    shift: !1,
    tab: !1
  }), { keydown: o, keyup: i } = e, a = (d) => {
    switch (d.key) {
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
    o !== void 0 && Object.keys(o).forEach((u) => {
      if (u !== d.key)
        return;
      const c = o[u];
      if (typeof c == "function")
        c(d);
      else {
        const { stop: v = !1, prevent: g = !1 } = c;
        v && d.stopPropagation(), g && d.preventDefault(), c.handler(d);
      }
    });
  }, l = (d) => {
    switch (d.key) {
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
    i !== void 0 && Object.keys(i).forEach((u) => {
      if (u !== d.key)
        return;
      const c = i[u];
      if (typeof c == "function")
        c(d);
      else {
        const { stop: v = !1, prevent: g = !1 } = c;
        v && d.stopPropagation(), g && d.preventDefault(), c.handler(d);
      }
    });
  }, s = () => {
    (t === void 0 || t.value) && (Ke("keydown", document, a), Ke("keyup", document, l)), t !== void 0 && Ie(t, (d) => {
      d ? (Ke("keydown", document, a), Ke("keyup", document, l)) : (Ve("keydown", document, a), Ve("keyup", document, l));
    });
  };
  return ja() ? (cr(s), St(() => {
    (t === void 0 || t.value) && (Ve("keydown", document, a), Ve("keyup", document, l));
  })) : s(), Hn(r);
}
const Ka = "n-internal-select-menu", Ld = "n-internal-select-menu-body", ko = "n-drawer-body", qa = "n-drawer", Ro = "n-modal-body", Ph = "n-modal-provider", Nd = "n-modal", Hr = "n-popover-body", Hd = "__disabled__";
function yn(e) {
  const t = pe(Ro, null), r = pe(ko, null), o = pe(Hr, null), i = pe(Ld, null), a = I();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const l = () => {
      a.value = document.fullscreenElement;
    };
    $t(() => {
      Ke("fullscreenchange", document, l);
    }), St(() => {
      Ve("fullscreenchange", document, l);
    });
  }
  return qe(() => {
    var l;
    const {
      to: s
    } = e;
    return s !== void 0 ? s === !1 ? Hd : s === !0 ? a.value || "body" : s : t != null && t.value ? (l = t.value.$el) !== null && l !== void 0 ? l : t.value : r != null && r.value ? r.value : o != null && o.value ? o.value : i != null && i.value ? i.value : s ?? (a.value || "body");
  });
}
yn.tdkey = Hd;
yn.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function zh(e, t, r) {
  var o;
  const i = pe(e, null);
  if (i === null) return;
  const a = (o = So()) === null || o === void 0 ? void 0 : o.proxy;
  Ie(r, l), l(r.value), St(() => {
    l(void 0, r.value);
  });
  function l(u, c) {
    if (!i) return;
    const v = i[t];
    c !== void 0 && s(v, c), u !== void 0 && d(v, u);
  }
  function s(u, c) {
    u[c] || (u[c] = []), u[c].splice(u[c].findIndex((v) => v === a), 1);
  }
  function d(u, c) {
    u[c] || (u[c] = []), ~u[c].findIndex((v) => v === a) || u[c].push(a);
  }
}
function $h(e, t, r) {
  const o = I(e.value);
  let i = null;
  return Ie(e, (a) => {
    i !== null && window.clearTimeout(i), a === !0 ? r && !r.value ? o.value = !0 : i = window.setTimeout(() => {
      o.value = !0;
    }, t) : o.value = !1;
  }), o;
}
const jr = typeof document < "u" && typeof window < "u", Ga = I(!1);
function Hl() {
  Ga.value = !0;
}
function jl() {
  Ga.value = !1;
}
let Zr = 0;
function jd() {
  return jr && (cr(() => {
    Zr || (window.addEventListener("compositionstart", Hl), window.addEventListener("compositionend", jl)), Zr++;
  }), St(() => {
    Zr <= 1 ? (window.removeEventListener("compositionstart", Hl), window.removeEventListener("compositionend", jl), Zr = 0) : Zr--;
  })), Ga;
}
let wr = 0, _l = "", Wl = "", Vl = "", Ul = "";
const Kl = I("0px");
function _d(e) {
  if (typeof document > "u") return;
  const t = document.documentElement;
  let r, o = !1;
  const i = () => {
    t.style.marginRight = _l, t.style.overflow = Wl, t.style.overflowX = Vl, t.style.overflowY = Ul, Kl.value = "0px";
  };
  $t(() => {
    r = Ie(e, (a) => {
      if (a) {
        if (!wr) {
          const l = window.innerWidth - t.offsetWidth;
          l > 0 && (_l = t.style.marginRight, t.style.marginRight = `${l}px`, Kl.value = `${l}px`), Wl = t.style.overflow, Vl = t.style.overflowX, Ul = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden";
        }
        o = !0, wr++;
      } else
        wr--, wr || i(), o = !1;
    }, {
      immediate: !0
    });
  }), St(() => {
    r == null || r(), o && (wr--, wr || i(), o = !1);
  });
}
function Ah(e) {
  const t = {
    isDeactivated: !1
  };
  let r = !1;
  return Bd(() => {
    if (t.isDeactivated = !1, !r) {
      r = !0;
      return;
    }
    e();
  }), Ia(() => {
    t.isDeactivated = !0, r || (r = !0);
  }), t;
}
function da(e, t, r = "default") {
  const o = t[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  return o();
}
function ua(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(Lt(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        ua(o, t, r);
        return;
      }
      if (o.type === je) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && ua(o.children, t, r);
      } else o.type !== La && r.push(o);
    }
  }), r;
}
function ql(e, t, r = "default") {
  const o = t[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  const i = ua(o());
  if (i.length === 1)
    return i[0];
  throw new Error(`[vueuc/${e}]: slot[${r}] should have exactly one child.`);
}
let Tn = null;
function Wd() {
  if (Tn === null && (Tn = document.getElementById("v-binder-view-measurer"), Tn === null)) {
    Tn = document.createElement("div"), Tn.id = "v-binder-view-measurer";
    const { style: e } = Tn;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(Tn);
  }
  return Tn.getBoundingClientRect();
}
function Dh(e, t) {
  const r = Wd();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: r.width - e,
    bottom: r.height - t
  };
}
function Hi(e) {
  const t = e.getBoundingClientRect(), r = Wd();
  return {
    left: t.left - r.left,
    top: t.top - r.top,
    bottom: r.height + r.top - t.bottom,
    right: r.width + r.left - t.right,
    width: t.width,
    height: t.height
  };
}
function Eh(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Vd(e) {
  if (e === null)
    return null;
  const t = Eh(e);
  if (t === null)
    return null;
  if (t.nodeType === 9)
    return document;
  if (t.nodeType === 1) {
    const { overflow: r, overflowX: o, overflowY: i } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(r + i + o))
      return t;
  }
  return Vd(t);
}
const Xa = J({
  name: "Binder",
  props: {
    syncTargetWithParent: Boolean,
    syncTarget: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    var t;
    $e("VBinder", (t = So()) === null || t === void 0 ? void 0 : t.proxy);
    const r = pe("VBinder", null), o = I(null), i = (b) => {
      o.value = b, r && e.syncTargetWithParent && r.setTargetRef(b);
    };
    let a = [];
    const l = () => {
      let b = o.value;
      for (; b = Vd(b), b !== null; )
        a.push(b);
      for (const y of a)
        Ke("scroll", y, v, !0);
    }, s = () => {
      for (const b of a)
        Ve("scroll", b, v, !0);
      a = [];
    }, d = /* @__PURE__ */ new Set(), u = (b) => {
      d.size === 0 && l(), d.has(b) || d.add(b);
    }, c = (b) => {
      d.has(b) && d.delete(b), d.size === 0 && s();
    }, v = () => {
      Qo(g);
    }, g = () => {
      d.forEach((b) => b());
    }, m = /* @__PURE__ */ new Set(), h = (b) => {
      m.size === 0 && Ke("resize", window, x), m.has(b) || m.add(b);
    }, p = (b) => {
      m.has(b) && m.delete(b), m.size === 0 && Ve("resize", window, x);
    }, x = () => {
      m.forEach((b) => b());
    };
    return St(() => {
      Ve("resize", window, x), s();
    }), {
      targetRef: o,
      setTargetRef: i,
      addScrollListener: u,
      removeScrollListener: c,
      addResizeListener: h,
      removeResizeListener: p
    };
  },
  render() {
    return da("binder", this.$slots);
  }
}), Ya = J({
  name: "Target",
  setup() {
    const { setTargetRef: e, syncTarget: t } = pe("VBinder");
    return {
      syncTarget: t,
      setTargetDirective: {
        mounted: e,
        updated: e
      }
    };
  },
  render() {
    const { syncTarget: e, setTargetDirective: t } = this;
    return e ? nn(ql("follower", this.$slots), [
      [t]
    ]) : ql("follower", this.$slots);
  }
}), Sr = "@@mmoContext", Th = {
  mounted(e, { value: t }) {
    e[Sr] = {
      handler: void 0
    }, typeof t == "function" && (e[Sr].handler = t, Ke("mousemoveoutside", e, t));
  },
  updated(e, { value: t }) {
    const r = e[Sr];
    typeof t == "function" ? r.handler ? r.handler !== t && (Ve("mousemoveoutside", e, r.handler), r.handler = t, Ke("mousemoveoutside", e, t)) : (e[Sr].handler = t, Ke("mousemoveoutside", e, t)) : r.handler && (Ve("mousemoveoutside", e, r.handler), r.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[Sr];
    t && Ve("mousemoveoutside", e, t), e[Sr].handler = void 0;
  }
}, Br = "@@coContext", Er = {
  mounted(e, { value: t, modifiers: r }) {
    e[Br] = {
      handler: void 0
    }, typeof t == "function" && (e[Br].handler = t, Ke("clickoutside", e, t, {
      capture: r.capture
    }));
  },
  updated(e, { value: t, modifiers: r }) {
    const o = e[Br];
    typeof t == "function" ? o.handler ? o.handler !== t && (Ve("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = t, Ke("clickoutside", e, t, {
      capture: r.capture
    })) : (e[Br].handler = t, Ke("clickoutside", e, t, {
      capture: r.capture
    })) : o.handler && (Ve("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = void 0);
  },
  unmounted(e, { modifiers: t }) {
    const { handler: r } = e[Br];
    r && Ve("clickoutside", e, r, {
      capture: t.capture
    }), e[Br].handler = void 0;
  }
};
function Oh(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class Mh {
  constructor() {
    this.elementZIndex = /* @__PURE__ */ new Map(), this.nextZIndex = 2e3;
  }
  get elementCount() {
    return this.elementZIndex.size;
  }
  ensureZIndex(t, r) {
    const { elementZIndex: o } = this;
    if (r !== void 0) {
      t.style.zIndex = `${r}`, o.delete(t);
      return;
    }
    const { nextZIndex: i } = this;
    o.has(t) && o.get(t) + 1 === this.nextZIndex || (t.style.zIndex = `${i}`, o.set(t, i), this.nextZIndex = i + 1, this.squashState());
  }
  unregister(t, r) {
    const { elementZIndex: o } = this;
    o.has(t) ? o.delete(t) : r === void 0 && Oh("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
  }
  squashState() {
    const { elementCount: t } = this;
    t || (this.nextZIndex = 2e3), this.nextZIndex - t > 2500 && this.rearrange();
  }
  rearrange() {
    const t = Array.from(this.elementZIndex.entries());
    t.sort((r, o) => r[1] - o[1]), this.nextZIndex = 2e3, t.forEach((r) => {
      const o = r[0], i = this.nextZIndex++;
      `${i}` !== o.style.zIndex && (o.style.zIndex = `${i}`);
    });
  }
}
const ji = new Mh(), kr = "@@ziContext", pi = {
  mounted(e, t) {
    const { value: r = {} } = t, { zIndex: o, enabled: i } = r;
    e[kr] = {
      enabled: !!i,
      initialized: !1
    }, i && (ji.ensureZIndex(e, o), e[kr].initialized = !0);
  },
  updated(e, t) {
    const { value: r = {} } = t, { zIndex: o, enabled: i } = r, a = e[kr].enabled;
    i && !a && (ji.ensureZIndex(e, o), e[kr].initialized = !0), e[kr].enabled = !!i;
  },
  unmounted(e, t) {
    if (!e[kr].initialized)
      return;
    const { value: r = {} } = t, { zIndex: o } = r;
    ji.unregister(e, o);
  }
}, Ih = "@css-render/vue3-ssr";
function Lh(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function Nh(e, t, r) {
  const { styles: o, ids: i } = r;
  i.has(e) || o !== null && (i.add(e), o.push(Lh(e, t)));
}
const Hh = typeof document < "u";
function vr() {
  if (Hh)
    return;
  const e = pe(Ih, null);
  if (e !== null)
    return {
      adapter: (t, r) => Nh(t, r, e),
      context: e
    };
}
function Gl(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
const { c: Nn } = Ad(), Za = "vueuc-style";
function Xl(e) {
  return e & -e;
}
class Ud {
  /**
   * @param l length of the array
   * @param min min value of the array
   */
  constructor(t, r) {
    this.l = t, this.min = r;
    const o = new Array(t + 1);
    for (let i = 0; i < t + 1; ++i)
      o[i] = 0;
    this.ft = o;
  }
  /**
   * Add arr[i] by n, start from 0
   * @param i the index of the element to be added
   * @param n the value to be added
   */
  add(t, r) {
    if (r === 0)
      return;
    const { l: o, ft: i } = this;
    for (t += 1; t <= o; )
      i[t] += r, t += Xl(t);
  }
  /**
   * Get the value of index i
   * @param i index
   * @returns value of the index
   */
  get(t) {
    return this.sum(t + 1) - this.sum(t);
  }
  /**
   * Get the sum of first i elements
   * @param i count of head elements to be added
   * @returns the sum of first i elements
   */
  sum(t) {
    if (t === void 0 && (t = this.l), t <= 0)
      return 0;
    const { ft: r, min: o, l: i } = this;
    if (t > i)
      throw new Error("[FinweckTree.sum]: `i` is larger than length.");
    let a = t * o;
    for (; t > 0; )
      a += r[t], t -= Xl(t);
    return a;
  }
  /**
   * Get the largest count of head elements whose sum are <= threshold
   * @param threshold
   * @returns the largest count of head elements whose sum are <= threshold
   */
  getBound(t) {
    let r = 0, o = this.l;
    for (; o > r; ) {
      const i = Math.floor((r + o) / 2), a = this.sum(i);
      if (a > t) {
        o = i;
        continue;
      } else if (a < t) {
        if (r === i)
          return this.sum(r + 1) <= t ? r + 1 : i;
        r = i;
      } else
        return i;
    }
    return r;
  }
}
function Yl(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const Ja = J({
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
      showTeleport: Id(ie(e, "show")),
      mergedTo: A(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? da("lazy-teleport", this.$slots) : f(fi, {
      disabled: this.disabled,
      to: this.mergedTo
    }, da("lazy-teleport", this.$slots)) : null;
  }
}), Mo = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Zl = {
  start: "end",
  center: "center",
  end: "start"
}, _i = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, jh = {
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
}, _h = {
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
}, Wh = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, Jl = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, Ql = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Vh(e, t, r, o, i, a) {
  if (!i || a)
    return { placement: e, top: 0, left: 0 };
  const [l, s] = e.split("-");
  let d = s ?? "center", u = {
    top: 0,
    left: 0
  };
  const c = (m, h, p) => {
    let x = 0, b = 0;
    const y = r[m] - t[h] - t[m];
    return y > 0 && o && (p ? b = Jl[h] ? y : -y : x = Jl[h] ? y : -y), {
      left: x,
      top: b
    };
  }, v = l === "left" || l === "right";
  if (d !== "center") {
    const m = Wh[e], h = Mo[m], p = _i[m];
    if (r[p] > t[p]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[m] + t[p] < r[p]
      ) {
        const x = (r[p] - t[p]) / 2;
        t[m] < x || t[h] < x ? t[m] < t[h] ? (d = Zl[s], u = c(p, h, v)) : u = c(p, m, v) : d = "center";
      }
    } else r[p] < t[p] && t[h] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[m] > t[h] && (d = Zl[s]);
  } else {
    const m = l === "bottom" || l === "top" ? "left" : "top", h = Mo[m], p = _i[m], x = (r[p] - t[p]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[m] < x || t[h] < x) && (t[m] > t[h] ? (d = Ql[m], u = c(p, m, v)) : (d = Ql[h], u = c(p, h, v)));
  }
  let g = l;
  return (
    // space is not enough
    t[l] < r[_i[l]] && // opposite position's space is larger
    t[l] < t[Mo[l]] && (g = Mo[l]), {
      placement: d !== "center" ? `${g}-${d}` : g,
      left: u.left,
      top: u.top
    }
  );
}
function Uh(e, t) {
  return t ? _h[e] : jh[e];
}
function Kh(e, t, r, o, i, a) {
  if (a)
    switch (e) {
      case "bottom-start":
        return {
          top: `${Math.round(r.top - t.top + r.height)}px`,
          left: `${Math.round(r.left - t.left)}px`,
          transform: "translateY(-100%)"
        };
      case "bottom-end":
        return {
          top: `${Math.round(r.top - t.top + r.height)}px`,
          left: `${Math.round(r.left - t.left + r.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "top-start":
        return {
          top: `${Math.round(r.top - t.top)}px`,
          left: `${Math.round(r.left - t.left)}px`,
          transform: ""
        };
      case "top-end":
        return {
          top: `${Math.round(r.top - t.top)}px`,
          left: `${Math.round(r.left - t.left + r.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-start":
        return {
          top: `${Math.round(r.top - t.top)}px`,
          left: `${Math.round(r.left - t.left + r.width)}px`,
          transform: "translateX(-100%)"
        };
      case "right-end":
        return {
          top: `${Math.round(r.top - t.top + r.height)}px`,
          left: `${Math.round(r.left - t.left + r.width)}px`,
          transform: "translateX(-100%) translateY(-100%)"
        };
      case "left-start":
        return {
          top: `${Math.round(r.top - t.top)}px`,
          left: `${Math.round(r.left - t.left)}px`,
          transform: ""
        };
      case "left-end":
        return {
          top: `${Math.round(r.top - t.top + r.height)}px`,
          left: `${Math.round(r.left - t.left)}px`,
          transform: "translateY(-100%)"
        };
      case "top":
        return {
          top: `${Math.round(r.top - t.top)}px`,
          left: `${Math.round(r.left - t.left + r.width / 2)}px`,
          transform: "translateX(-50%)"
        };
      case "right":
        return {
          top: `${Math.round(r.top - t.top + r.height / 2)}px`,
          left: `${Math.round(r.left - t.left + r.width)}px`,
          transform: "translateX(-100%) translateY(-50%)"
        };
      case "left":
        return {
          top: `${Math.round(r.top - t.top + r.height / 2)}px`,
          left: `${Math.round(r.left - t.left)}px`,
          transform: "translateY(-50%)"
        };
      case "bottom":
      default:
        return {
          top: `${Math.round(r.top - t.top + r.height)}px`,
          left: `${Math.round(r.left - t.left + r.width / 2)}px`,
          transform: "translateX(-50%) translateY(-100%)"
        };
    }
  switch (e) {
    case "bottom-start":
      return {
        top: `${Math.round(r.top - t.top + r.height + o)}px`,
        left: `${Math.round(r.left - t.left + i)}px`,
        transform: ""
      };
    case "bottom-end":
      return {
        top: `${Math.round(r.top - t.top + r.height + o)}px`,
        left: `${Math.round(r.left - t.left + r.width + i)}px`,
        transform: "translateX(-100%)"
      };
    case "top-start":
      return {
        top: `${Math.round(r.top - t.top + o)}px`,
        left: `${Math.round(r.left - t.left + i)}px`,
        transform: "translateY(-100%)"
      };
    case "top-end":
      return {
        top: `${Math.round(r.top - t.top + o)}px`,
        left: `${Math.round(r.left - t.left + r.width + i)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "right-start":
      return {
        top: `${Math.round(r.top - t.top + o)}px`,
        left: `${Math.round(r.left - t.left + r.width + i)}px`,
        transform: ""
      };
    case "right-end":
      return {
        top: `${Math.round(r.top - t.top + r.height + o)}px`,
        left: `${Math.round(r.left - t.left + r.width + i)}px`,
        transform: "translateY(-100%)"
      };
    case "left-start":
      return {
        top: `${Math.round(r.top - t.top + o)}px`,
        left: `${Math.round(r.left - t.left + i)}px`,
        transform: "translateX(-100%)"
      };
    case "left-end":
      return {
        top: `${Math.round(r.top - t.top + r.height + o)}px`,
        left: `${Math.round(r.left - t.left + i)}px`,
        transform: "translateX(-100%) translateY(-100%)"
      };
    case "top":
      return {
        top: `${Math.round(r.top - t.top + o)}px`,
        left: `${Math.round(r.left - t.left + r.width / 2 + i)}px`,
        transform: "translateY(-100%) translateX(-50%)"
      };
    case "right":
      return {
        top: `${Math.round(r.top - t.top + r.height / 2 + o)}px`,
        left: `${Math.round(r.left - t.left + r.width + i)}px`,
        transform: "translateY(-50%)"
      };
    case "left":
      return {
        top: `${Math.round(r.top - t.top + r.height / 2 + o)}px`,
        left: `${Math.round(r.left - t.left + i)}px`,
        transform: "translateY(-50%) translateX(-100%)"
      };
    case "bottom":
    default:
      return {
        top: `${Math.round(r.top - t.top + r.height + o)}px`,
        left: `${Math.round(r.left - t.left + r.width / 2 + i)}px`,
        transform: "translateX(-50%)"
      };
  }
}
const qh = Nn([
  Nn(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  Nn(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    Nn("> *", {
      pointerEvents: "all"
    })
  ])
]), Qa = J({
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
    const t = pe("VBinder"), r = qe(() => e.enabled !== void 0 ? e.enabled : e.show), o = I(null), i = I(null), a = () => {
      const { syncTrigger: g } = e;
      g.includes("scroll") && t.addScrollListener(d), g.includes("resize") && t.addResizeListener(d);
    }, l = () => {
      t.removeScrollListener(d), t.removeResizeListener(d);
    };
    $t(() => {
      r.value && (d(), a());
    });
    const s = vr();
    qh.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: Za,
      ssr: s
    }), St(() => {
      l();
    }), Sh(() => {
      r.value && d();
    });
    const d = () => {
      if (!r.value)
        return;
      const g = o.value;
      if (g === null)
        return;
      const m = t.targetRef, { x: h, y: p, overlap: x } = e, b = h !== void 0 && p !== void 0 ? Dh(h, p) : Hi(m);
      g.style.setProperty("--v-target-width", `${Math.round(b.width)}px`), g.style.setProperty("--v-target-height", `${Math.round(b.height)}px`);
      const { width: y, minWidth: k, placement: w, internalShift: R, flip: B } = e;
      g.setAttribute("v-placement", w), x ? g.setAttribute("v-overlap", "") : g.removeAttribute("v-overlap");
      const { style: C } = g;
      y === "target" ? C.width = `${b.width}px` : y !== void 0 ? C.width = y : C.width = "", k === "target" ? C.minWidth = `${b.width}px` : k !== void 0 ? C.minWidth = k : C.minWidth = "";
      const S = Hi(g), F = Hi(i.value), { left: P, top: _, placement: O } = Vh(w, b, S, R, B, x), n = Uh(O, x), { left: E, top: T, transform: H } = Kh(O, F, b, _, P, x);
      g.setAttribute("v-placement", O), g.style.setProperty("--v-offset-left", `${Math.round(P)}px`), g.style.setProperty("--v-offset-top", `${Math.round(_)}px`), g.style.transform = `translateX(${E}) translateY(${T}) ${H}`, g.style.setProperty("--v-transform-origin", n), g.style.transformOrigin = n;
    };
    Ie(r, (g) => {
      g ? (a(), u()) : l();
    });
    const u = () => {
      pt().then(d).catch((g) => console.error(g));
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
    ].forEach((g) => {
      Ie(ie(e, g), d);
    }), ["teleportDisabled"].forEach((g) => {
      Ie(ie(e, g), u);
    }), Ie(ie(e, "syncTrigger"), (g) => {
      g.includes("resize") ? t.addResizeListener(d) : t.removeResizeListener(d), g.includes("scroll") ? t.addScrollListener(d) : t.removeScrollListener(d);
    });
    const c = hr(), v = qe(() => {
      const { to: g } = e;
      if (g !== void 0)
        return g;
      c.value;
    });
    return {
      VBinder: t,
      mergedEnabled: r,
      offsetContainerRef: i,
      followerRef: o,
      mergedTo: v,
      syncPosition: d
    };
  },
  render() {
    return f(Ja, {
      show: this.show,
      to: this.mergedTo,
      disabled: this.teleportDisabled
    }, {
      default: () => {
        var e, t;
        const r = f("div", {
          class: ["v-binder-follower-container", this.containerClass],
          ref: "offsetContainerRef"
        }, [
          f("div", {
            class: "v-binder-follower-content",
            ref: "followerRef"
          }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e))
        ]);
        return this.zindexable ? nn(r, [
          [
            pi,
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
var rr = [], Gh = function() {
  return rr.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Xh = function() {
  return rr.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, es = "ResizeObserver loop completed with undelivered notifications.", Yh = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: es
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = es), window.dispatchEvent(e);
}, po;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(po || (po = {}));
var or = function(e) {
  return Object.freeze(e);
}, Zh = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, or(this);
  }
  return e;
}(), Kd = function() {
  function e(t, r, o, i) {
    return this.x = t, this.y = r, this.width = o, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, or(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, o = t.y, i = t.top, a = t.right, l = t.bottom, s = t.left, d = t.width, u = t.height;
    return { x: r, y: o, top: i, right: a, bottom: l, left: s, width: d, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), el = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, qd = function(e) {
  if (el(e)) {
    var t = e.getBBox(), r = t.width, o = t.height;
    return !r && !o;
  }
  var i = e, a = i.offsetWidth, l = i.offsetHeight;
  return !(a || l || e.getClientRects().length);
}, ts = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, Jh = function(e) {
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
}, so = typeof window < "u" ? window : {}, Io = /* @__PURE__ */ new WeakMap(), ns = /auto|scroll/, Qh = /^tb|vertical/, e0 = /msie|trident/i.test(so.navigator && so.navigator.userAgent), hn = function(e) {
  return parseFloat(e || "0");
}, Pr = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new Zh((r ? t : e) || 0, (r ? e : t) || 0);
}, rs = or({
  devicePixelContentBoxSize: Pr(),
  borderBoxSize: Pr(),
  contentBoxSize: Pr(),
  contentRect: new Kd(0, 0, 0, 0)
}), Gd = function(e, t) {
  if (t === void 0 && (t = !1), Io.has(e) && !t)
    return Io.get(e);
  if (qd(e))
    return Io.set(e, rs), rs;
  var r = getComputedStyle(e), o = el(e) && e.ownerSVGElement && e.getBBox(), i = !e0 && r.boxSizing === "border-box", a = Qh.test(r.writingMode || ""), l = !o && ns.test(r.overflowY || ""), s = !o && ns.test(r.overflowX || ""), d = o ? 0 : hn(r.paddingTop), u = o ? 0 : hn(r.paddingRight), c = o ? 0 : hn(r.paddingBottom), v = o ? 0 : hn(r.paddingLeft), g = o ? 0 : hn(r.borderTopWidth), m = o ? 0 : hn(r.borderRightWidth), h = o ? 0 : hn(r.borderBottomWidth), p = o ? 0 : hn(r.borderLeftWidth), x = v + u, b = d + c, y = p + m, k = g + h, w = s ? e.offsetHeight - k - e.clientHeight : 0, R = l ? e.offsetWidth - y - e.clientWidth : 0, B = i ? x + y : 0, C = i ? b + k : 0, S = o ? o.width : hn(r.width) - B - R, F = o ? o.height : hn(r.height) - C - w, P = S + x + R + y, _ = F + b + w + k, O = or({
    devicePixelContentBoxSize: Pr(Math.round(S * devicePixelRatio), Math.round(F * devicePixelRatio), a),
    borderBoxSize: Pr(P, _, a),
    contentBoxSize: Pr(S, F, a),
    contentRect: new Kd(v, d, S, F)
  });
  return Io.set(e, O), O;
}, Xd = function(e, t, r) {
  var o = Gd(e, r), i = o.borderBoxSize, a = o.contentBoxSize, l = o.devicePixelContentBoxSize;
  switch (t) {
    case po.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case po.BORDER_BOX:
      return i;
    default:
      return a;
  }
}, t0 = /* @__PURE__ */ function() {
  function e(t) {
    var r = Gd(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = or([r.borderBoxSize]), this.contentBoxSize = or([r.contentBoxSize]), this.devicePixelContentBoxSize = or([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Yd = function(e) {
  if (qd(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, n0 = function() {
  var e = 1 / 0, t = [];
  rr.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(u) {
        var c = new t0(u.target), v = Yd(u.target);
        s.push(c), u.lastReportedSize = Xd(u.target, u.observedBox), v < e && (e = v);
      }), t.push(function() {
        l.callback.call(l.observer, s, l.observer);
      }), l.activeTargets.splice(0, l.activeTargets.length);
    }
  });
  for (var r = 0, o = t; r < o.length; r++) {
    var i = o[r];
    i();
  }
  return e;
}, os = function(e) {
  rr.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(i) {
      i.isActive() && (Yd(i.target) > e ? r.activeTargets.push(i) : r.skippedTargets.push(i));
    });
  });
}, r0 = function() {
  var e = 0;
  for (os(e); Gh(); )
    e = n0(), os(e);
  return Xh() && Yh(), e > 0;
}, Wi, Zd = [], o0 = function() {
  return Zd.splice(0).forEach(function(e) {
    return e();
  });
}, i0 = function(e) {
  if (!Wi) {
    var t = 0, r = document.createTextNode(""), o = { characterData: !0 };
    new MutationObserver(function() {
      return o0();
    }).observe(r, o), Wi = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  Zd.push(e), Wi();
}, a0 = function(e) {
  i0(function() {
    requestAnimationFrame(e);
  });
}, Yo = 0, l0 = function() {
  return !!Yo;
}, s0 = 250, d0 = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, is = [
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
], as = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Vi = !1, u0 = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = s0), !Vi) {
      Vi = !0;
      var o = as(t);
      a0(function() {
        var i = !1;
        try {
          i = r0();
        } finally {
          if (Vi = !1, t = o - as(), !l0())
            return;
          i ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, d0);
    };
    document.body ? r() : so.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), is.forEach(function(r) {
      return so.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), is.forEach(function(r) {
      return so.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), ca = new u0(), ls = function(e) {
  !Yo && e > 0 && ca.start(), Yo += e, !Yo && ca.stop();
}, c0 = function(e) {
  return !el(e) && !Jh(e) && getComputedStyle(e).display === "inline";
}, f0 = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || po.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Xd(this.target, this.observedBox, !0);
    return c0(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), h0 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), Lo = /* @__PURE__ */ new WeakMap(), ss = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, No = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var o = new h0(t, r);
    Lo.set(t, o);
  }, e.observe = function(t, r, o) {
    var i = Lo.get(t), a = i.observationTargets.length === 0;
    ss(i.observationTargets, r) < 0 && (a && rr.push(i), i.observationTargets.push(new f0(r, o && o.box)), ls(1), ca.schedule());
  }, e.unobserve = function(t, r) {
    var o = Lo.get(t), i = ss(o.observationTargets, r), a = o.observationTargets.length === 1;
    i >= 0 && (a && rr.splice(rr.indexOf(o), 1), o.observationTargets.splice(i, 1), ls(-1));
  }, e.disconnect = function(t) {
    var r = this, o = Lo.get(t);
    o.observationTargets.slice().forEach(function(i) {
      return r.unobserve(t, i.target);
    }), o.activeTargets.splice(0, o.activeTargets.length);
  }, e;
}(), v0 = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    No.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!ts(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    No.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!ts(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    No.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    No.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class g0 {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || v0)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
  }
  handleResize(t) {
    for (const r of t) {
      const o = this.elHandlersMap.get(r.target);
      o !== void 0 && o(r);
    }
  }
  registerHandler(t, r) {
    this.elHandlersMap.set(t, r), this.observer.observe(t);
  }
  unregisterHandler(t) {
    this.elHandlersMap.has(t) && (this.elHandlersMap.delete(t), this.observer.unobserve(t));
  }
}
const uo = new g0(), Tr = J({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let t = !1;
    const r = So().proxy;
    function o(i) {
      const { onResize: a } = e;
      a !== void 0 && a(i);
    }
    $t(() => {
      const i = r.$el;
      if (i === void 0) {
        Gl("resize-observer", "$el does not exist.");
        return;
      }
      if (i.nextElementSibling !== i.nextSibling && i.nodeType === 3 && i.nodeValue !== "") {
        Gl("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      i.nextElementSibling !== null && (uo.registerHandler(i.nextElementSibling, o), t = !0);
    }), St(() => {
      t && uo.unregisterHandler(r.$el.nextElementSibling);
    });
  },
  render() {
    return Yt(this.$slots, "default");
  }
});
let Ho;
function p0() {
  return typeof document > "u" ? !1 : (Ho === void 0 && ("matchMedia" in window ? Ho = window.matchMedia("(pointer:coarse)").matches : Ho = !1), Ho);
}
let Ui;
function ds() {
  return typeof document > "u" ? 1 : (Ui === void 0 && (Ui = "chrome" in window ? window.devicePixelRatio : 1), Ui);
}
const Jd = "VVirtualListXScroll";
function m0({ columnsRef: e, renderColRef: t, renderItemWithColsRef: r }) {
  const o = I(0), i = I(0), a = A(() => {
    const u = e.value;
    if (u.length === 0)
      return null;
    const c = new Ud(u.length, 0);
    return u.forEach((v, g) => {
      c.add(g, v.width);
    }), c;
  }), l = qe(() => {
    const u = a.value;
    return u !== null ? Math.max(u.getBound(i.value) - 1, 0) : 0;
  }), s = (u) => {
    const c = a.value;
    return c !== null ? c.sum(u) : 0;
  }, d = qe(() => {
    const u = a.value;
    return u !== null ? Math.min(u.getBound(i.value + o.value) + 1, e.value.length - 1) : 0;
  });
  return $e(Jd, {
    startIndexRef: l,
    endIndexRef: d,
    columnsRef: e,
    renderColRef: t,
    renderItemWithColsRef: r,
    getLeft: s
  }), {
    listWidthRef: o,
    scrollLeftRef: i
  };
}
const us = J({
  name: "VirtualListRow",
  props: {
    index: { type: Number, required: !0 },
    item: {
      type: Object,
      required: !0
    }
  },
  setup() {
    const { startIndexRef: e, endIndexRef: t, columnsRef: r, getLeft: o, renderColRef: i, renderItemWithColsRef: a } = (
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      pe(Jd)
    );
    return {
      startIndex: e,
      endIndex: t,
      columns: r,
      renderCol: i,
      renderItemWithCols: a,
      getLeft: o
    };
  },
  render() {
    const { startIndex: e, endIndex: t, columns: r, renderCol: o, renderItemWithCols: i, getLeft: a, item: l } = this;
    if (i != null)
      return i({
        itemIndex: this.index,
        startColIndex: e,
        endColIndex: t,
        allColumns: r,
        item: l,
        getLeft: a
      });
    if (o != null) {
      const s = [];
      for (let d = e; d <= t; ++d) {
        const u = r[d];
        s.push(o({ column: u, left: a(d), item: l }));
      }
      return s;
    }
    return null;
  }
}), b0 = Nn(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  Nn("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    Nn("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), tl = J({
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
    const t = vr();
    b0.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: Za,
      ssr: t
    }), $t(() => {
      const { defaultScrollIndex: n, defaultScrollKey: E } = e;
      n != null ? x({ index: n }) : E != null && x({ key: E });
    });
    let r = !1, o = !1;
    Bd(() => {
      if (r = !1, !o) {
        o = !0;
        return;
      }
      x({ top: m.value, left: l.value });
    }), Ia(() => {
      r = !0, o || (o = !0);
    });
    const i = qe(() => {
      if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0)
        return;
      let n = 0;
      return e.columns.forEach((E) => {
        n += E.width;
      }), n;
    }), a = A(() => {
      const n = /* @__PURE__ */ new Map(), { keyField: E } = e;
      return e.items.forEach((T, H) => {
        n.set(T[E], H);
      }), n;
    }), { scrollLeftRef: l, listWidthRef: s } = m0({
      columnsRef: ie(e, "columns"),
      renderColRef: ie(e, "renderCol"),
      renderItemWithColsRef: ie(e, "renderItemWithCols")
    }), d = I(null), u = I(void 0), c = /* @__PURE__ */ new Map(), v = A(() => {
      const { items: n, itemSize: E, keyField: T } = e, H = new Ud(n.length, E);
      return n.forEach((L, U) => {
        const te = L[T], X = c.get(te);
        X !== void 0 && H.add(U, X);
      }), H;
    }), g = I(0), m = I(0), h = qe(() => Math.max(v.value.getBound(m.value - Et(e.paddingTop)) - 1, 0)), p = A(() => {
      const { value: n } = u;
      if (n === void 0)
        return [];
      const { items: E, itemSize: T } = e, H = h.value, L = Math.min(H + Math.ceil(n / T + 1), E.length - 1), U = [];
      for (let te = H; te <= L; ++te)
        U.push(E[te]);
      return U;
    }), x = (n, E) => {
      if (typeof n == "number") {
        w(n, E, "auto");
        return;
      }
      const { left: T, top: H, index: L, key: U, position: te, behavior: X, debounce: K = !0 } = n;
      if (T !== void 0 || H !== void 0)
        w(T, H, X);
      else if (L !== void 0)
        k(L, X, K);
      else if (U !== void 0) {
        const j = a.value.get(U);
        j !== void 0 && k(j, X, K);
      } else te === "bottom" ? w(0, Number.MAX_SAFE_INTEGER, X) : te === "top" && w(0, 0, X);
    };
    let b, y = null;
    function k(n, E, T) {
      const { value: H } = v, L = H.sum(n) + Et(e.paddingTop);
      if (!T)
        d.value.scrollTo({
          left: 0,
          top: L,
          behavior: E
        });
      else {
        b = n, y !== null && window.clearTimeout(y), y = window.setTimeout(() => {
          b = void 0, y = null;
        }, 16);
        const { scrollTop: U, offsetHeight: te } = d.value;
        if (L > U) {
          const X = H.get(n);
          L + X <= U + te || d.value.scrollTo({
            left: 0,
            top: L + X - te,
            behavior: E
          });
        } else
          d.value.scrollTo({
            left: 0,
            top: L,
            behavior: E
          });
      }
    }
    function w(n, E, T) {
      d.value.scrollTo({
        left: n,
        top: E,
        behavior: T
      });
    }
    function R(n, E) {
      var T, H, L;
      if (r || e.ignoreItemResize || O(E.target))
        return;
      const { value: U } = v, te = a.value.get(n), X = U.get(te), K = (L = (H = (T = E.borderBoxSize) === null || T === void 0 ? void 0 : T[0]) === null || H === void 0 ? void 0 : H.blockSize) !== null && L !== void 0 ? L : E.contentRect.height;
      if (K === X)
        return;
      K - e.itemSize === 0 ? c.delete(n) : c.set(n, K - e.itemSize);
      const q = K - X;
      if (q === 0)
        return;
      U.add(te, q);
      const Y = d.value;
      if (Y != null) {
        if (b === void 0) {
          const ae = U.sum(te);
          Y.scrollTop > ae && Y.scrollBy(0, q);
        } else if (te < b)
          Y.scrollBy(0, q);
        else if (te === b) {
          const ae = U.sum(te);
          K + ae > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          Y.scrollTop + Y.offsetHeight && Y.scrollBy(0, q);
        }
        _();
      }
      g.value++;
    }
    const B = !p0();
    let C = !1;
    function S(n) {
      var E;
      (E = e.onScroll) === null || E === void 0 || E.call(e, n), (!B || !C) && _();
    }
    function F(n) {
      var E;
      if ((E = e.onWheel) === null || E === void 0 || E.call(e, n), B) {
        const T = d.value;
        if (T != null) {
          if (n.deltaX === 0 && (T.scrollTop === 0 && n.deltaY <= 0 || T.scrollTop + T.offsetHeight >= T.scrollHeight && n.deltaY >= 0))
            return;
          n.preventDefault(), T.scrollTop += n.deltaY / ds(), T.scrollLeft += n.deltaX / ds(), _(), C = !0, Qo(() => {
            C = !1;
          });
        }
      }
    }
    function P(n) {
      if (r || O(n.target))
        return;
      if (e.renderCol == null && e.renderItemWithCols == null) {
        if (n.contentRect.height === u.value)
          return;
      } else if (n.contentRect.height === u.value && n.contentRect.width === s.value)
        return;
      u.value = n.contentRect.height, s.value = n.contentRect.width;
      const { onResize: E } = e;
      E !== void 0 && E(n);
    }
    function _() {
      const { value: n } = d;
      n != null && (m.value = n.scrollTop, l.value = n.scrollLeft);
    }
    function O(n) {
      let E = n;
      for (; E !== null; ) {
        if (E.style.display === "none")
          return !0;
        E = E.parentElement;
      }
      return !1;
    }
    return {
      listHeight: u,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: a,
      itemsStyle: A(() => {
        const { itemResizable: n } = e, E = Ct(v.value.sum());
        return g.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: Ct(i.value),
            height: n ? "" : E,
            minHeight: n ? E : "",
            paddingTop: Ct(e.paddingTop),
            paddingBottom: Ct(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: A(() => (g.value, {
        transform: `translateY(${Ct(v.value.sum(h.value))})`
      })),
      viewportItems: p,
      listElRef: d,
      itemsElRef: I(null),
      scrollTo: x,
      handleListResize: P,
      handleListScroll: S,
      handleListWheel: F,
      handleItemResize: R
    };
  },
  render() {
    const { itemResizable: e, keyField: t, keyToIndex: r, visibleItemsTag: o } = this;
    return f(Tr, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var i, a;
        return f("div", kt(this.$attrs, {
          class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
          onScroll: this.handleListScroll,
          onWheel: this.handleListWheel,
          ref: "listElRef"
        }), [
          this.items.length !== 0 ? f("div", {
            ref: "itemsElRef",
            class: "v-vl-items",
            style: this.itemsStyle
          }, [
            f(o, Object.assign({
              class: "v-vl-visible-items",
              style: this.visibleItemsStyle
            }, this.visibleItemsProps), {
              default: () => {
                const { renderCol: l, renderItemWithCols: s } = this;
                return this.viewportItems.map((d) => {
                  const u = d[t], c = r.get(u), v = l != null ? f(us, {
                    index: c,
                    item: d
                  }) : void 0, g = s != null ? f(us, {
                    index: c,
                    item: d
                  }) : void 0, m = this.$slots.default({
                    item: d,
                    renderedCols: v,
                    renderedItemWithCols: g,
                    index: c
                  })[0];
                  return e ? f(Tr, {
                    key: u,
                    onResize: (h) => this.handleItemResize(u, h)
                  }, {
                    default: () => m
                  }) : (m.key = u, m);
                });
              }
            })
          ]) : (a = (i = this.$slots).empty) === null || a === void 0 ? void 0 : a.call(i)
        ]);
      }
    });
  }
}), Bn = "v-hidden", x0 = Nn("[v-hidden]", {
  display: "none!important"
}), cs = J({
  name: "Overflow",
  props: {
    getCounter: Function,
    getTail: Function,
    updateCounter: Function,
    onUpdateCount: Function,
    onUpdateOverflow: Function
  },
  setup(e, { slots: t }) {
    const r = I(null), o = I(null);
    function i(l) {
      const { value: s } = r, { getCounter: d, getTail: u } = e;
      let c;
      if (d !== void 0 ? c = d() : c = o.value, !s || !c)
        return;
      c.hasAttribute(Bn) && c.removeAttribute(Bn);
      const { children: v } = s;
      if (l.showAllItemsBeforeCalculate)
        for (const k of v)
          k.hasAttribute(Bn) && k.removeAttribute(Bn);
      const g = s.offsetWidth, m = [], h = t.tail ? u == null ? void 0 : u() : null;
      let p = h ? h.offsetWidth : 0, x = !1;
      const b = s.children.length - (t.tail ? 1 : 0);
      for (let k = 0; k < b - 1; ++k) {
        if (k < 0)
          continue;
        const w = v[k];
        if (x) {
          w.hasAttribute(Bn) || w.setAttribute(Bn, "");
          continue;
        } else w.hasAttribute(Bn) && w.removeAttribute(Bn);
        const R = w.offsetWidth;
        if (p += R, m[k] = R, p > g) {
          const { updateCounter: B } = e;
          for (let C = k; C >= 0; --C) {
            const S = b - 1 - C;
            B !== void 0 ? B(S) : c.textContent = `${S}`;
            const F = c.offsetWidth;
            if (p -= m[C], p + F <= g || C === 0) {
              x = !0, k = C - 1, h && (k === -1 ? (h.style.maxWidth = `${g - F}px`, h.style.boxSizing = "border-box") : h.style.maxWidth = "");
              const { onUpdateCount: P } = e;
              P && P(S);
              break;
            }
          }
        }
      }
      const { onUpdateOverflow: y } = e;
      x ? y !== void 0 && y(!0) : (y !== void 0 && y(!1), c.setAttribute(Bn, ""));
    }
    const a = vr();
    return x0.mount({
      id: "vueuc/overflow",
      head: !0,
      anchorMetaName: Za,
      ssr: a
    }), $t(() => i({
      showAllItemsBeforeCalculate: !1
    })), {
      selfRef: r,
      counterRef: o,
      sync: i
    };
  },
  render() {
    const { $slots: e } = this;
    return pt(() => this.sync({
      showAllItemsBeforeCalculate: !1
    })), f("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      Yt(e, "default"),
      // $slots.counter should only has 1 element
      e.counter ? e.counter() : f("span", {
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
function Qd(e) {
  return e instanceof HTMLElement;
}
function eu(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const r = e.childNodes[t];
    if (Qd(r) && (nu(r) || eu(r)))
      return !0;
  }
  return !1;
}
function tu(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const r = e.childNodes[t];
    if (Qd(r) && (nu(r) || tu(r)))
      return !0;
  }
  return !1;
}
function nu(e) {
  if (!y0(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function y0(e) {
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
let Jr = [];
const nl = J({
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
    const t = xn(), r = I(null), o = I(null);
    let i = !1, a = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function s() {
      return Jr[Jr.length - 1] === t;
    }
    function d(x) {
      var b;
      x.code === "Escape" && s() && ((b = e.onEsc) === null || b === void 0 || b.call(e, x));
    }
    $t(() => {
      Ie(() => e.active, (x) => {
        x ? (v(), Ke("keydown", document, d)) : (Ve("keydown", document, d), i && g());
      }, {
        immediate: !0
      });
    }), St(() => {
      Ve("keydown", document, d), i && g();
    });
    function u(x) {
      if (!a && s()) {
        const b = c();
        if (b === null || b.contains(Dr(x)))
          return;
        m("first");
      }
    }
    function c() {
      const x = r.value;
      if (x === null)
        return null;
      let b = x;
      for (; b = b.nextSibling, !(b === null || b instanceof Element && b.tagName === "DIV"); )
        ;
      return b;
    }
    function v() {
      var x;
      if (!e.disabled) {
        if (Jr.push(t), e.autoFocus) {
          const { initialFocusTo: b } = e;
          b === void 0 ? m("first") : (x = Yl(b)) === null || x === void 0 || x.focus({ preventScroll: !0 });
        }
        i = !0, document.addEventListener("focus", u, !0);
      }
    }
    function g() {
      var x;
      if (e.disabled || (document.removeEventListener("focus", u, !0), Jr = Jr.filter((y) => y !== t), s()))
        return;
      const { finalFocusTo: b } = e;
      b !== void 0 ? (x = Yl(b)) === null || x === void 0 || x.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (a = !0, l.focus({ preventScroll: !0 }), a = !1);
    }
    function m(x) {
      if (s() && e.active) {
        const b = r.value, y = o.value;
        if (b !== null && y !== null) {
          const k = c();
          if (k == null || k === y) {
            a = !0, b.focus({ preventScroll: !0 }), a = !1;
            return;
          }
          a = !0;
          const w = x === "first" ? eu(k) : tu(k);
          a = !1, w || (a = !0, b.focus({ preventScroll: !0 }), a = !1);
        }
      }
    }
    function h(x) {
      if (a)
        return;
      const b = c();
      b !== null && (x.relatedTarget !== null && b.contains(x.relatedTarget) ? m("last") : m("first"));
    }
    function p(x) {
      a || (x.relatedTarget !== null && x.relatedTarget === r.value ? m("last") : m("first"));
    }
    return {
      focusableStartRef: r,
      focusableEndRef: o,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: h,
      handleEndFocus: p
    };
  },
  render() {
    const { default: e } = this.$slots;
    if (e === void 0)
      return null;
    if (this.disabled)
      return e();
    const { active: t, focusableStyle: r } = this;
    return f(je, null, [
      f("div", {
        "aria-hidden": "true",
        tabindex: t ? "0" : "-1",
        ref: "focusableStartRef",
        style: r,
        onFocus: this.handleStartFocus
      }),
      e(),
      f("div", {
        "aria-hidden": "true",
        style: r,
        ref: "focusableEndRef",
        tabindex: t ? "0" : "-1",
        onFocus: this.handleEndFocus
      })
    ]);
  }
});
function ru(e, t) {
  t && ($t(() => {
    const {
      value: r
    } = e;
    r && uo.registerHandler(r, t);
  }), Ie(e, (r, o) => {
    o && uo.unregisterHandler(o);
  }, {
    deep: !1
  }), St(() => {
    const {
      value: r
    } = e;
    r && uo.unregisterHandler(r);
  }));
}
function ei(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const C0 = /^(\d|\.)+$/, fs = /(\d|\.)+/;
function mt(e, {
  c: t = 1,
  offset: r = 0,
  attachPx: o = !0
} = {}) {
  if (typeof e == "number") {
    const i = (e + r) * t;
    return i === 0 ? "0" : `${i}px`;
  } else if (typeof e == "string")
    if (C0.test(e)) {
      const i = (Number(e) + r) * t;
      return o ? i === 0 ? "0" : `${i}px` : `${i}`;
    } else {
      const i = fs.exec(e);
      return i ? e.replace(fs, String((Number(i[0]) + r) * t)) : e;
    }
  return e;
}
function hs(e) {
  const {
    left: t,
    right: r,
    top: o,
    bottom: i
  } = Wt(e);
  return `${o} ${t} ${i} ${r}`;
}
function w0(e, t) {
  if (!e) return;
  const r = document.createElement("a");
  r.href = e, t !== void 0 && (r.download = t), document.body.appendChild(r), r.click(), document.body.removeChild(r);
}
let Ki;
function S0() {
  return Ki === void 0 && (Ki = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Ki;
}
const ou = /* @__PURE__ */ new WeakSet();
function B0(e) {
  ou.add(e);
}
function iu(e) {
  return !ou.has(e);
}
function vs(e) {
  switch (typeof e) {
    case "string":
      return e || void 0;
    case "number":
      return String(e);
    default:
      return;
  }
}
function gs(e) {
  switch (e) {
    case "tiny":
      return "mini";
    case "small":
      return "tiny";
    case "medium":
      return "small";
    case "large":
      return "medium";
    case "huge":
      return "large";
  }
  throw new Error(`${e} has no smaller size.`);
}
const ps = /* @__PURE__ */ new Set();
function Qe(e, t) {
  const r = `[naive/${e}]: ${t}`;
  ps.has(r) || (ps.add(r), console.error(r));
}
function zt(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function Pn(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function ne(e, ...t) {
  if (Array.isArray(e))
    e.forEach((r) => ne(r, ...t));
  else
    return e(...t);
}
function au(e) {
  return (t) => {
    t ? e.value = t.$el : e.value = null;
  };
}
function mo(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(Lt(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        mo(o, t, r);
        return;
      }
      if (o.type === je) {
        if (o.children === null) return;
        Array.isArray(o.children) && mo(o.children, t, r);
      } else {
        if (o.type === La && t) return;
        r.push(o);
      }
    }
  }), r;
}
function k0(e, t = "default", r = void 0) {
  const o = e[t];
  if (!o)
    return zt("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const i = mo(o(r));
  return i.length === 1 ? i[0] : (zt("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function R0(e, t, r) {
  if (!t)
    return null;
  const o = mo(t(r));
  return o.length === 1 ? o[0] : (zt("getFirstSlotVNode", `slot[${e}] should have exactly one child`), null);
}
function F0(e, t = "default", r = []) {
  const i = e.$slots[t];
  return i === void 0 ? r : i();
}
function Rn(e, t = [], r) {
  const o = {};
  return t.forEach((i) => {
    o[i] = e[i];
  }), Object.assign(o, r);
}
function _n(e) {
  return Object.keys(e);
}
function co(e) {
  const t = e.filter((r) => r !== void 0);
  if (t.length !== 0)
    return t.length === 1 ? t[0] : (r) => {
      e.forEach((o) => {
        o && o(r);
      });
    };
}
function gr(e, t = [], r) {
  const o = {};
  return Object.getOwnPropertyNames(e).forEach((a) => {
    t.includes(a) || (o[a] = e[a]);
  }), Object.assign(o, r);
}
function gt(e, ...t) {
  return typeof e == "function" ? e(...t) : typeof e == "string" ? Lt(e) : typeof e == "number" ? Lt(String(e)) : null;
}
function an(e) {
  return e.some((t) => $f(t) ? !(t.type === La || t.type === je && !an(t.children)) : !0) ? e : null;
}
function tn(e, t) {
  return e && an(e()) || t();
}
function fa(e, t, r) {
  return e && an(e(t)) || r(t);
}
function We(e, t) {
  const r = e && an(e());
  return t(r || null);
}
function P0(e, t, r) {
  const o = e && an(e(t));
  return r(o || null);
}
function zr(e) {
  return !(e && an(e()));
}
const ha = J({
  render() {
    var e, t;
    return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
}), cn = "n-config-provider", ti = "n";
function Ae(e = {}, t = {
  defaultBordered: !0
}) {
  const r = pe(cn, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: r == null ? void 0 : r.inlineThemeDisabled,
    mergedRtlRef: r == null ? void 0 : r.mergedRtlRef,
    mergedComponentPropsRef: r == null ? void 0 : r.mergedComponentPropsRef,
    mergedBreakpointsRef: r == null ? void 0 : r.mergedBreakpointsRef,
    mergedBorderedRef: A(() => {
      var o, i;
      const {
        bordered: a
      } = e;
      return a !== void 0 ? a : (i = (o = r == null ? void 0 : r.mergedBorderedRef.value) !== null && o !== void 0 ? o : t.defaultBordered) !== null && i !== void 0 ? i : !0;
    }),
    mergedClsPrefixRef: r ? r.mergedClsPrefixRef : kd(ti),
    namespaceRef: A(() => r == null ? void 0 : r.mergedNamespaceRef.value)
  };
}
function lu() {
  const e = pe(cn, null);
  return e ? e.mergedClsPrefixRef : kd(ti);
}
function Ye(e, t, r, o) {
  r || Pn("useThemeClass", "cssVarsRef is not passed");
  const i = pe(cn, null), a = i == null ? void 0 : i.mergedThemeHashRef, l = i == null ? void 0 : i.styleMountTarget, s = I(""), d = vr();
  let u;
  const c = `__${e}`, v = () => {
    let g = c;
    const m = t ? t.value : void 0, h = a == null ? void 0 : a.value;
    h && (g += `-${h}`), m && (g += `-${m}`);
    const {
      themeOverrides: p,
      builtinThemeOverrides: x
    } = o;
    p && (g += `-${vo(JSON.stringify(p))}`), x && (g += `-${vo(JSON.stringify(x))}`), s.value = g, u = () => {
      const b = r.value;
      let y = "";
      for (const k in b)
        y += `${k}: ${b[k]};`;
      D(`.${g}`, y).mount({
        id: g,
        ssr: d,
        parent: l
      }), u = void 0;
    };
  };
  return nt(() => {
    v();
  }), {
    themeClass: s,
    onRender: () => {
      u == null || u();
    }
  };
}
const va = "n-form-item";
function Un(e, {
  defaultSize: t = "medium",
  mergedSize: r,
  mergedDisabled: o
} = {}) {
  const i = pe(va, null);
  $e(va, null);
  const a = A(r ? () => r(i) : () => {
    const {
      size: d
    } = e;
    if (d) return d;
    if (i) {
      const {
        mergedSize: u
      } = i;
      if (u.value !== void 0)
        return u.value;
    }
    return t;
  }), l = A(o ? () => o(i) : () => {
    const {
      disabled: d
    } = e;
    return d !== void 0 ? d : i ? i.disabled.value : !1;
  }), s = A(() => {
    const {
      status: d
    } = e;
    return d || (i == null ? void 0 : i.mergedValidationStatus.value);
  });
  return St(() => {
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
const z0 = {
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
}, $0 = {
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
};
function $r(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
function gn(e) {
  return (t, r) => {
    const o = r != null && r.context ? String(r.context) : "standalone";
    let i;
    if (o === "formatting" && e.formattingValues) {
      const l = e.defaultFormattingWidth || e.defaultWidth, s = r != null && r.width ? String(r.width) : l;
      i = e.formattingValues[s] || e.formattingValues[l];
    } else {
      const l = e.defaultWidth, s = r != null && r.width ? String(r.width) : e.defaultWidth;
      i = e.values[s] || e.values[l];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[a];
  };
}
function pn(e) {
  return (t, r = {}) => {
    const o = r.width, i = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const l = a[0], s = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(s) ? D0(s, (v) => v.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      A0(s, (v) => v.test(l))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(d) : d, u = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(u)
    ) : u;
    const c = t.slice(l.length);
    return { value: u, rest: c };
  };
}
function A0(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function D0(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function su(e) {
  return (t, r = {}) => {
    const o = t.match(e.matchPattern);
    if (!o) return null;
    const i = o[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let l = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    l = r.valueCallback ? r.valueCallback(l) : l;
    const s = t.slice(i.length);
    return { value: l, rest: s };
  };
}
function E0(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
let T0 = {};
function O0() {
  return T0;
}
function ms(e, t) {
  var s, d, u, c;
  const r = O0(), o = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : d.weekStartsOn) ?? r.weekStartsOn ?? ((c = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = E0(e), a = i.getDay(), l = (a < o ? 7 : 0) + a - o;
  return i.setDate(i.getDate() - l), i.setHours(0, 0, 0, 0), i;
}
function M0(e, t, r) {
  const o = ms(e, r), i = ms(t, r);
  return +o == +i;
}
const I0 = {
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
}, L0 = (e, t, r) => {
  let o;
  const i = I0[e];
  return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
}, N0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, H0 = (e, t, r, o) => N0[e], j0 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, _0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, W0 = {
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
}, V0 = {
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
}, U0 = {
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
}, K0 = {
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
}, q0 = (e, t) => {
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
}, G0 = {
  ordinalNumber: q0,
  era: gn({
    values: j0,
    defaultWidth: "wide"
  }),
  quarter: gn({
    values: _0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: gn({
    values: W0,
    defaultWidth: "wide"
  }),
  day: gn({
    values: V0,
    defaultWidth: "wide"
  }),
  dayPeriod: gn({
    values: U0,
    defaultWidth: "wide",
    formattingValues: K0,
    defaultFormattingWidth: "wide"
  })
}, X0 = /^(\d+)(th|st|nd|rd)?/i, Y0 = /\d+/i, Z0 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, J0 = {
  any: [/^b/i, /^(a|c)/i]
}, Q0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, ev = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, tv = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, nv = {
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
}, rv = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, ov = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, iv = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, av = {
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
}, lv = {
  ordinalNumber: su({
    matchPattern: X0,
    parsePattern: Y0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: pn({
    matchPatterns: Z0,
    defaultMatchWidth: "wide",
    parsePatterns: J0,
    defaultParseWidth: "any"
  }),
  quarter: pn({
    matchPatterns: Q0,
    defaultMatchWidth: "wide",
    parsePatterns: ev,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: pn({
    matchPatterns: tv,
    defaultMatchWidth: "wide",
    parsePatterns: nv,
    defaultParseWidth: "any"
  }),
  day: pn({
    matchPatterns: rv,
    defaultMatchWidth: "wide",
    parsePatterns: ov,
    defaultParseWidth: "any"
  }),
  dayPeriod: pn({
    matchPatterns: iv,
    defaultMatchWidth: "any",
    parsePatterns: av,
    defaultParseWidth: "any"
  })
}, sv = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, dv = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, uv = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, cv = {
  date: $r({
    formats: sv,
    defaultWidth: "full"
  }),
  time: $r({
    formats: dv,
    defaultWidth: "full"
  }),
  dateTime: $r({
    formats: uv,
    defaultWidth: "full"
  })
}, fv = {
  code: "en-US",
  formatDistance: L0,
  formatLong: cv,
  formatRelative: H0,
  localize: G0,
  match: lv,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, hv = {
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
}, vv = (e, t, r) => {
  let o;
  const i = hv[e];
  return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", String(t)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? o + "内" : o + "前" : o;
}, gv = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, pv = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, mv = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, bv = {
  date: $r({
    formats: gv,
    defaultWidth: "full"
  }),
  time: $r({
    formats: pv,
    defaultWidth: "full"
  }),
  dateTime: $r({
    formats: mv,
    defaultWidth: "full"
  })
};
function bs(e, t, r) {
  const o = "eeee p";
  return M0(e, t, r) ? o : e.getTime() > t.getTime() ? "'下个'" + o : "'上个'" + o;
}
const xv = {
  lastWeek: bs,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: bs,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, yv = (e, t, r, o) => {
  const i = xv[e];
  return typeof i == "function" ? i(t, r, o) : i;
}, Cv = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, wv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, Sv = {
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
}, Bv = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, kv = {
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
}, Rv = {
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
}, Fv = (e, t) => {
  const r = Number(e);
  switch (t == null ? void 0 : t.unit) {
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
}, Pv = {
  ordinalNumber: Fv,
  era: gn({
    values: Cv,
    defaultWidth: "wide"
  }),
  quarter: gn({
    values: wv,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: gn({
    values: Sv,
    defaultWidth: "wide"
  }),
  day: gn({
    values: Bv,
    defaultWidth: "wide"
  }),
  dayPeriod: gn({
    values: kv,
    defaultWidth: "wide",
    formattingValues: Rv,
    defaultFormattingWidth: "wide"
  })
}, zv = /^(第\s*)?\d+(日|时|分|秒)?/i, $v = /\d+/i, Av = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, Dv = {
  any: [/^(前)/i, /^(公元)/i]
}, Ev = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, Tv = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, Ov = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, Mv = {
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
}, Iv = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, Lv = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, Nv = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, Hv = {
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
}, jv = {
  ordinalNumber: su({
    matchPattern: zv,
    parsePattern: $v,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: pn({
    matchPatterns: Av,
    defaultMatchWidth: "wide",
    parsePatterns: Dv,
    defaultParseWidth: "any"
  }),
  quarter: pn({
    matchPatterns: Ev,
    defaultMatchWidth: "wide",
    parsePatterns: Tv,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: pn({
    matchPatterns: Ov,
    defaultMatchWidth: "wide",
    parsePatterns: Mv,
    defaultParseWidth: "any"
  }),
  day: pn({
    matchPatterns: Iv,
    defaultMatchWidth: "wide",
    parsePatterns: Lv,
    defaultParseWidth: "any"
  }),
  dayPeriod: pn({
    matchPatterns: Nv,
    defaultMatchWidth: "any",
    parsePatterns: Hv,
    defaultParseWidth: "any"
  })
}, _v = {
  code: "zh-CN",
  formatDistance: vv,
  formatLong: bv,
  formatRelative: yv,
  localize: Pv,
  match: jv,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Wv = {
  name: "en-US",
  locale: fv
}, Vv = {
  name: "zh-CN",
  locale: _v
};
var du = typeof global == "object" && global && global.Object === Object && global, Uv = typeof self == "object" && self && self.Object === Object && self, Cn = du || Uv || Function("return this")(), Wn = Cn.Symbol, uu = Object.prototype, Kv = uu.hasOwnProperty, qv = uu.toString, Qr = Wn ? Wn.toStringTag : void 0;
function Gv(e) {
  var t = Kv.call(e, Qr), r = e[Qr];
  try {
    e[Qr] = void 0;
    var o = !0;
  } catch {
  }
  var i = qv.call(e);
  return o && (t ? e[Qr] = r : delete e[Qr]), i;
}
var Xv = Object.prototype, Yv = Xv.toString;
function Zv(e) {
  return Yv.call(e);
}
var Jv = "[object Null]", Qv = "[object Undefined]", xs = Wn ? Wn.toStringTag : void 0;
function pr(e) {
  return e == null ? e === void 0 ? Qv : Jv : xs && xs in Object(e) ? Gv(e) : Zv(e);
}
function Vn(e) {
  return e != null && typeof e == "object";
}
var eg = "[object Symbol]";
function rl(e) {
  return typeof e == "symbol" || Vn(e) && pr(e) == eg;
}
function cu(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, i = Array(o); ++r < o; )
    i[r] = t(e[r], r, e);
  return i;
}
var ln = Array.isArray, tg = 1 / 0, ys = Wn ? Wn.prototype : void 0, Cs = ys ? ys.toString : void 0;
function fu(e) {
  if (typeof e == "string")
    return e;
  if (ln(e))
    return cu(e, fu) + "";
  if (rl(e))
    return Cs ? Cs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -tg ? "-0" : t;
}
function Kn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function ol(e) {
  return e;
}
var ng = "[object AsyncFunction]", rg = "[object Function]", og = "[object GeneratorFunction]", ig = "[object Proxy]";
function il(e) {
  if (!Kn(e))
    return !1;
  var t = pr(e);
  return t == rg || t == og || t == ng || t == ig;
}
var qi = Cn["__core-js_shared__"], ws = function() {
  var e = /[^.]+$/.exec(qi && qi.keys && qi.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ag(e) {
  return !!ws && ws in e;
}
var lg = Function.prototype, sg = lg.toString;
function mr(e) {
  if (e != null) {
    try {
      return sg.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var dg = /[\\^$.*+?()[\]{}|]/g, ug = /^\[object .+?Constructor\]$/, cg = Function.prototype, fg = Object.prototype, hg = cg.toString, vg = fg.hasOwnProperty, gg = RegExp(
  "^" + hg.call(vg).replace(dg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function pg(e) {
  if (!Kn(e) || ag(e))
    return !1;
  var t = il(e) ? gg : ug;
  return t.test(mr(e));
}
function mg(e, t) {
  return e == null ? void 0 : e[t];
}
function br(e, t) {
  var r = mg(e, t);
  return pg(r) ? r : void 0;
}
var ga = br(Cn, "WeakMap"), Ss = Object.create, bg = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Kn(t))
      return {};
    if (Ss)
      return Ss(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function xg(e, t, r) {
  switch (r.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, r[0]);
    case 2:
      return e.call(t, r[0], r[1]);
    case 3:
      return e.call(t, r[0], r[1], r[2]);
  }
  return e.apply(t, r);
}
function yg(e, t) {
  var r = -1, o = e.length;
  for (t || (t = Array(o)); ++r < o; )
    t[r] = e[r];
  return t;
}
var Cg = 800, wg = 16, Sg = Date.now;
function Bg(e) {
  var t = 0, r = 0;
  return function() {
    var o = Sg(), i = wg - (o - r);
    if (r = o, i > 0) {
      if (++t >= Cg)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function kg(e) {
  return function() {
    return e;
  };
}
var ni = function() {
  try {
    var e = br(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Rg = ni ? function(e, t) {
  return ni(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: kg(t),
    writable: !0
  });
} : ol, Fg = Bg(Rg), Pg = 9007199254740991, zg = /^(?:0|[1-9]\d*)$/;
function al(e, t) {
  var r = typeof e;
  return t = t ?? Pg, !!t && (r == "number" || r != "symbol" && zg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ll(e, t, r) {
  t == "__proto__" && ni ? ni(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Fo(e, t) {
  return e === t || e !== e && t !== t;
}
var $g = Object.prototype, Ag = $g.hasOwnProperty;
function Dg(e, t, r) {
  var o = e[t];
  (!(Ag.call(e, t) && Fo(o, r)) || r === void 0 && !(t in e)) && ll(e, t, r);
}
function Eg(e, t, r, o) {
  var i = !r;
  r || (r = {});
  for (var a = -1, l = t.length; ++a < l; ) {
    var s = t[a], d = void 0;
    d === void 0 && (d = e[s]), i ? ll(r, s, d) : Dg(r, s, d);
  }
  return r;
}
var Bs = Math.max;
function Tg(e, t, r) {
  return t = Bs(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, i = -1, a = Bs(o.length - t, 0), l = Array(a); ++i < a; )
      l[i] = o[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = o[i];
    return s[t] = r(l), xg(e, this, s);
  };
}
function Og(e, t) {
  return Fg(Tg(e, t, ol), e + "");
}
var Mg = 9007199254740991;
function sl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Mg;
}
function _r(e) {
  return e != null && sl(e.length) && !il(e);
}
function Ig(e, t, r) {
  if (!Kn(r))
    return !1;
  var o = typeof t;
  return (o == "number" ? _r(r) && al(t, r.length) : o == "string" && t in r) ? Fo(r[t], e) : !1;
}
function Lg(e) {
  return Og(function(t, r) {
    var o = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, l = i > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, l && Ig(r[0], r[1], l) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++o < i; ) {
      var s = r[o];
      s && e(t, s, o, a);
    }
    return t;
  });
}
var Ng = Object.prototype;
function dl(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Ng;
  return e === r;
}
function Hg(e, t) {
  for (var r = -1, o = Array(e); ++r < e; )
    o[r] = t(r);
  return o;
}
var jg = "[object Arguments]";
function ks(e) {
  return Vn(e) && pr(e) == jg;
}
var hu = Object.prototype, _g = hu.hasOwnProperty, Wg = hu.propertyIsEnumerable, ri = ks(/* @__PURE__ */ function() {
  return arguments;
}()) ? ks : function(e) {
  return Vn(e) && _g.call(e, "callee") && !Wg.call(e, "callee");
};
function Vg() {
  return !1;
}
var vu = typeof exports == "object" && exports && !exports.nodeType && exports, Rs = vu && typeof module == "object" && module && !module.nodeType && module, Ug = Rs && Rs.exports === vu, Fs = Ug ? Cn.Buffer : void 0, Kg = Fs ? Fs.isBuffer : void 0, oi = Kg || Vg, qg = "[object Arguments]", Gg = "[object Array]", Xg = "[object Boolean]", Yg = "[object Date]", Zg = "[object Error]", Jg = "[object Function]", Qg = "[object Map]", ep = "[object Number]", tp = "[object Object]", np = "[object RegExp]", rp = "[object Set]", op = "[object String]", ip = "[object WeakMap]", ap = "[object ArrayBuffer]", lp = "[object DataView]", sp = "[object Float32Array]", dp = "[object Float64Array]", up = "[object Int8Array]", cp = "[object Int16Array]", fp = "[object Int32Array]", hp = "[object Uint8Array]", vp = "[object Uint8ClampedArray]", gp = "[object Uint16Array]", pp = "[object Uint32Array]", ct = {};
ct[sp] = ct[dp] = ct[up] = ct[cp] = ct[fp] = ct[hp] = ct[vp] = ct[gp] = ct[pp] = !0;
ct[qg] = ct[Gg] = ct[ap] = ct[Xg] = ct[lp] = ct[Yg] = ct[Zg] = ct[Jg] = ct[Qg] = ct[ep] = ct[tp] = ct[np] = ct[rp] = ct[op] = ct[ip] = !1;
function mp(e) {
  return Vn(e) && sl(e.length) && !!ct[pr(e)];
}
function bp(e) {
  return function(t) {
    return e(t);
  };
}
var gu = typeof exports == "object" && exports && !exports.nodeType && exports, fo = gu && typeof module == "object" && module && !module.nodeType && module, xp = fo && fo.exports === gu, Gi = xp && du.process, Ps = function() {
  try {
    var e = fo && fo.require && fo.require("util").types;
    return e || Gi && Gi.binding && Gi.binding("util");
  } catch {
  }
}(), zs = Ps && Ps.isTypedArray, ul = zs ? bp(zs) : mp, yp = Object.prototype, Cp = yp.hasOwnProperty;
function pu(e, t) {
  var r = ln(e), o = !r && ri(e), i = !r && !o && oi(e), a = !r && !o && !i && ul(e), l = r || o || i || a, s = l ? Hg(e.length, String) : [], d = s.length;
  for (var u in e)
    (t || Cp.call(e, u)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    al(u, d))) && s.push(u);
  return s;
}
function mu(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var wp = mu(Object.keys, Object), Sp = Object.prototype, Bp = Sp.hasOwnProperty;
function kp(e) {
  if (!dl(e))
    return wp(e);
  var t = [];
  for (var r in Object(e))
    Bp.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function cl(e) {
  return _r(e) ? pu(e) : kp(e);
}
function Rp(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Fp = Object.prototype, Pp = Fp.hasOwnProperty;
function zp(e) {
  if (!Kn(e))
    return Rp(e);
  var t = dl(e), r = [];
  for (var o in e)
    o == "constructor" && (t || !Pp.call(e, o)) || r.push(o);
  return r;
}
function bu(e) {
  return _r(e) ? pu(e, !0) : zp(e);
}
var $p = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Ap = /^\w*$/;
function fl(e, t) {
  if (ln(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || rl(e) ? !0 : Ap.test(e) || !$p.test(e) || t != null && e in Object(t);
}
var bo = br(Object, "create");
function Dp() {
  this.__data__ = bo ? bo(null) : {}, this.size = 0;
}
function Ep(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Tp = "__lodash_hash_undefined__", Op = Object.prototype, Mp = Op.hasOwnProperty;
function Ip(e) {
  var t = this.__data__;
  if (bo) {
    var r = t[e];
    return r === Tp ? void 0 : r;
  }
  return Mp.call(t, e) ? t[e] : void 0;
}
var Lp = Object.prototype, Np = Lp.hasOwnProperty;
function Hp(e) {
  var t = this.__data__;
  return bo ? t[e] !== void 0 : Np.call(t, e);
}
var jp = "__lodash_hash_undefined__";
function _p(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = bo && t === void 0 ? jp : t, this;
}
function ar(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ar.prototype.clear = Dp;
ar.prototype.delete = Ep;
ar.prototype.get = Ip;
ar.prototype.has = Hp;
ar.prototype.set = _p;
function Wp() {
  this.__data__ = [], this.size = 0;
}
function mi(e, t) {
  for (var r = e.length; r--; )
    if (Fo(e[r][0], t))
      return r;
  return -1;
}
var Vp = Array.prototype, Up = Vp.splice;
function Kp(e) {
  var t = this.__data__, r = mi(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : Up.call(t, r, 1), --this.size, !0;
}
function qp(e) {
  var t = this.__data__, r = mi(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Gp(e) {
  return mi(this.__data__, e) > -1;
}
function Xp(e, t) {
  var r = this.__data__, o = mi(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function zn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
zn.prototype.clear = Wp;
zn.prototype.delete = Kp;
zn.prototype.get = qp;
zn.prototype.has = Gp;
zn.prototype.set = Xp;
var xo = br(Cn, "Map");
function Yp() {
  this.size = 0, this.__data__ = {
    hash: new ar(),
    map: new (xo || zn)(),
    string: new ar()
  };
}
function Zp(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function bi(e, t) {
  var r = e.__data__;
  return Zp(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Jp(e) {
  var t = bi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Qp(e) {
  return bi(this, e).get(e);
}
function em(e) {
  return bi(this, e).has(e);
}
function tm(e, t) {
  var r = bi(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function $n(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
$n.prototype.clear = Yp;
$n.prototype.delete = Jp;
$n.prototype.get = Qp;
$n.prototype.has = em;
$n.prototype.set = tm;
var nm = "Expected a function";
function hl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(nm);
  var r = function() {
    var o = arguments, i = t ? t.apply(this, o) : o[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var l = e.apply(this, o);
    return r.cache = a.set(i, l) || a, l;
  };
  return r.cache = new (hl.Cache || $n)(), r;
}
hl.Cache = $n;
var rm = 500;
function om(e) {
  var t = hl(e, function(o) {
    return r.size === rm && r.clear(), o;
  }), r = t.cache;
  return t;
}
var im = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, am = /\\(\\)?/g, lm = om(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(im, function(r, o, i, a) {
    t.push(i ? a.replace(am, "$1") : o || r);
  }), t;
});
function xu(e) {
  return e == null ? "" : fu(e);
}
function yu(e, t) {
  return ln(e) ? e : fl(e, t) ? [e] : lm(xu(e));
}
var sm = 1 / 0;
function xi(e) {
  if (typeof e == "string" || rl(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -sm ? "-0" : t;
}
function Cu(e, t) {
  t = yu(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[xi(t[r++])];
  return r && r == o ? e : void 0;
}
function yo(e, t, r) {
  var o = e == null ? void 0 : Cu(e, t);
  return o === void 0 ? r : o;
}
function dm(e, t) {
  for (var r = -1, o = t.length, i = e.length; ++r < o; )
    e[i + r] = t[r];
  return e;
}
var wu = mu(Object.getPrototypeOf, Object), um = "[object Object]", cm = Function.prototype, fm = Object.prototype, Su = cm.toString, hm = fm.hasOwnProperty, vm = Su.call(Object);
function gm(e) {
  if (!Vn(e) || pr(e) != um)
    return !1;
  var t = wu(e);
  if (t === null)
    return !0;
  var r = hm.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Su.call(r) == vm;
}
function pm(e, t, r) {
  var o = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++o < i; )
    a[o] = e[o + t];
  return a;
}
function mm(e, t, r) {
  var o = e.length;
  return r = r === void 0 ? o : r, !t && r >= o ? e : pm(e, t, r);
}
var bm = "\\ud800-\\udfff", xm = "\\u0300-\\u036f", ym = "\\ufe20-\\ufe2f", Cm = "\\u20d0-\\u20ff", wm = xm + ym + Cm, Sm = "\\ufe0e\\ufe0f", Bm = "\\u200d", km = RegExp("[" + Bm + bm + wm + Sm + "]");
function Bu(e) {
  return km.test(e);
}
function Rm(e) {
  return e.split("");
}
var ku = "\\ud800-\\udfff", Fm = "\\u0300-\\u036f", Pm = "\\ufe20-\\ufe2f", zm = "\\u20d0-\\u20ff", $m = Fm + Pm + zm, Am = "\\ufe0e\\ufe0f", Dm = "[" + ku + "]", pa = "[" + $m + "]", ma = "\\ud83c[\\udffb-\\udfff]", Em = "(?:" + pa + "|" + ma + ")", Ru = "[^" + ku + "]", Fu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Pu = "[\\ud800-\\udbff][\\udc00-\\udfff]", Tm = "\\u200d", zu = Em + "?", $u = "[" + Am + "]?", Om = "(?:" + Tm + "(?:" + [Ru, Fu, Pu].join("|") + ")" + $u + zu + ")*", Mm = $u + zu + Om, Im = "(?:" + [Ru + pa + "?", pa, Fu, Pu, Dm].join("|") + ")", Lm = RegExp(ma + "(?=" + ma + ")|" + Im + Mm, "g");
function Nm(e) {
  return e.match(Lm) || [];
}
function Hm(e) {
  return Bu(e) ? Nm(e) : Rm(e);
}
function jm(e) {
  return function(t) {
    t = xu(t);
    var r = Bu(t) ? Hm(t) : void 0, o = r ? r[0] : t.charAt(0), i = r ? mm(r, 1).join("") : t.slice(1);
    return o[e]() + i;
  };
}
var _m = jm("toUpperCase");
function Wm() {
  this.__data__ = new zn(), this.size = 0;
}
function Vm(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Um(e) {
  return this.__data__.get(e);
}
function Km(e) {
  return this.__data__.has(e);
}
var qm = 200;
function Gm(e, t) {
  var r = this.__data__;
  if (r instanceof zn) {
    var o = r.__data__;
    if (!xo || o.length < qm - 1)
      return o.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new $n(o);
  }
  return r.set(e, t), this.size = r.size, this;
}
function mn(e) {
  var t = this.__data__ = new zn(e);
  this.size = t.size;
}
mn.prototype.clear = Wm;
mn.prototype.delete = Vm;
mn.prototype.get = Um;
mn.prototype.has = Km;
mn.prototype.set = Gm;
var Au = typeof exports == "object" && exports && !exports.nodeType && exports, $s = Au && typeof module == "object" && module && !module.nodeType && module, Xm = $s && $s.exports === Au, As = Xm ? Cn.Buffer : void 0;
As && As.allocUnsafe;
function Ym(e, t) {
  return e.slice();
}
function Zm(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, i = 0, a = []; ++r < o; ) {
    var l = e[r];
    t(l, r, e) && (a[i++] = l);
  }
  return a;
}
function Jm() {
  return [];
}
var Qm = Object.prototype, eb = Qm.propertyIsEnumerable, Ds = Object.getOwnPropertySymbols, tb = Ds ? function(e) {
  return e == null ? [] : (e = Object(e), Zm(Ds(e), function(t) {
    return eb.call(e, t);
  }));
} : Jm;
function nb(e, t, r) {
  var o = t(e);
  return ln(e) ? o : dm(o, r(e));
}
function Es(e) {
  return nb(e, cl, tb);
}
var ba = br(Cn, "DataView"), xa = br(Cn, "Promise"), ya = br(Cn, "Set"), Ts = "[object Map]", rb = "[object Object]", Os = "[object Promise]", Ms = "[object Set]", Is = "[object WeakMap]", Ls = "[object DataView]", ob = mr(ba), ib = mr(xo), ab = mr(xa), lb = mr(ya), sb = mr(ga), Ln = pr;
(ba && Ln(new ba(new ArrayBuffer(1))) != Ls || xo && Ln(new xo()) != Ts || xa && Ln(xa.resolve()) != Os || ya && Ln(new ya()) != Ms || ga && Ln(new ga()) != Is) && (Ln = function(e) {
  var t = pr(e), r = t == rb ? e.constructor : void 0, o = r ? mr(r) : "";
  if (o)
    switch (o) {
      case ob:
        return Ls;
      case ib:
        return Ts;
      case ab:
        return Os;
      case lb:
        return Ms;
      case sb:
        return Is;
    }
  return t;
});
var ii = Cn.Uint8Array;
function db(e) {
  var t = new e.constructor(e.byteLength);
  return new ii(t).set(new ii(e)), t;
}
function ub(e, t) {
  var r = db(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function cb(e) {
  return typeof e.constructor == "function" && !dl(e) ? bg(wu(e)) : {};
}
var fb = "__lodash_hash_undefined__";
function hb(e) {
  return this.__data__.set(e, fb), this;
}
function vb(e) {
  return this.__data__.has(e);
}
function ai(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new $n(); ++t < r; )
    this.add(e[t]);
}
ai.prototype.add = ai.prototype.push = hb;
ai.prototype.has = vb;
function gb(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function pb(e, t) {
  return e.has(t);
}
var mb = 1, bb = 2;
function Du(e, t, r, o, i, a) {
  var l = r & mb, s = e.length, d = t.length;
  if (s != d && !(l && d > s))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var v = -1, g = !0, m = r & bb ? new ai() : void 0;
  for (a.set(e, t), a.set(t, e); ++v < s; ) {
    var h = e[v], p = t[v];
    if (o)
      var x = l ? o(p, h, v, t, e, a) : o(h, p, v, e, t, a);
    if (x !== void 0) {
      if (x)
        continue;
      g = !1;
      break;
    }
    if (m) {
      if (!gb(t, function(b, y) {
        if (!pb(m, y) && (h === b || i(h, b, r, o, a)))
          return m.push(y);
      })) {
        g = !1;
        break;
      }
    } else if (!(h === p || i(h, p, r, o, a))) {
      g = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), g;
}
function xb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o, i) {
    r[++t] = [i, o];
  }), r;
}
function yb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o) {
    r[++t] = o;
  }), r;
}
var Cb = 1, wb = 2, Sb = "[object Boolean]", Bb = "[object Date]", kb = "[object Error]", Rb = "[object Map]", Fb = "[object Number]", Pb = "[object RegExp]", zb = "[object Set]", $b = "[object String]", Ab = "[object Symbol]", Db = "[object ArrayBuffer]", Eb = "[object DataView]", Ns = Wn ? Wn.prototype : void 0, Xi = Ns ? Ns.valueOf : void 0;
function Tb(e, t, r, o, i, a, l) {
  switch (r) {
    case Eb:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Db:
      return !(e.byteLength != t.byteLength || !a(new ii(e), new ii(t)));
    case Sb:
    case Bb:
    case Fb:
      return Fo(+e, +t);
    case kb:
      return e.name == t.name && e.message == t.message;
    case Pb:
    case $b:
      return e == t + "";
    case Rb:
      var s = xb;
    case zb:
      var d = o & Cb;
      if (s || (s = yb), e.size != t.size && !d)
        return !1;
      var u = l.get(e);
      if (u)
        return u == t;
      o |= wb, l.set(e, t);
      var c = Du(s(e), s(t), o, i, a, l);
      return l.delete(e), c;
    case Ab:
      if (Xi)
        return Xi.call(e) == Xi.call(t);
  }
  return !1;
}
var Ob = 1, Mb = Object.prototype, Ib = Mb.hasOwnProperty;
function Lb(e, t, r, o, i, a) {
  var l = r & Ob, s = Es(e), d = s.length, u = Es(t), c = u.length;
  if (d != c && !l)
    return !1;
  for (var v = d; v--; ) {
    var g = s[v];
    if (!(l ? g in t : Ib.call(t, g)))
      return !1;
  }
  var m = a.get(e), h = a.get(t);
  if (m && h)
    return m == t && h == e;
  var p = !0;
  a.set(e, t), a.set(t, e);
  for (var x = l; ++v < d; ) {
    g = s[v];
    var b = e[g], y = t[g];
    if (o)
      var k = l ? o(y, b, g, t, e, a) : o(b, y, g, e, t, a);
    if (!(k === void 0 ? b === y || i(b, y, r, o, a) : k)) {
      p = !1;
      break;
    }
    x || (x = g == "constructor");
  }
  if (p && !x) {
    var w = e.constructor, R = t.constructor;
    w != R && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof R == "function" && R instanceof R) && (p = !1);
  }
  return a.delete(e), a.delete(t), p;
}
var Nb = 1, Hs = "[object Arguments]", js = "[object Array]", jo = "[object Object]", Hb = Object.prototype, _s = Hb.hasOwnProperty;
function jb(e, t, r, o, i, a) {
  var l = ln(e), s = ln(t), d = l ? js : Ln(e), u = s ? js : Ln(t);
  d = d == Hs ? jo : d, u = u == Hs ? jo : u;
  var c = d == jo, v = u == jo, g = d == u;
  if (g && oi(e)) {
    if (!oi(t))
      return !1;
    l = !0, c = !1;
  }
  if (g && !c)
    return a || (a = new mn()), l || ul(e) ? Du(e, t, r, o, i, a) : Tb(e, t, d, r, o, i, a);
  if (!(r & Nb)) {
    var m = c && _s.call(e, "__wrapped__"), h = v && _s.call(t, "__wrapped__");
    if (m || h) {
      var p = m ? e.value() : e, x = h ? t.value() : t;
      return a || (a = new mn()), i(p, x, r, o, a);
    }
  }
  return g ? (a || (a = new mn()), Lb(e, t, r, o, i, a)) : !1;
}
function vl(e, t, r, o, i) {
  return e === t ? !0 : e == null || t == null || !Vn(e) && !Vn(t) ? e !== e && t !== t : jb(e, t, r, o, vl, i);
}
var _b = 1, Wb = 2;
function Vb(e, t, r, o) {
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
    var s = l[0], d = e[s], u = l[1];
    if (l[2]) {
      if (d === void 0 && !(s in e))
        return !1;
    } else {
      var c = new mn(), v;
      if (!(v === void 0 ? vl(u, d, _b | Wb, o, c) : v))
        return !1;
    }
  }
  return !0;
}
function Eu(e) {
  return e === e && !Kn(e);
}
function Ub(e) {
  for (var t = cl(e), r = t.length; r--; ) {
    var o = t[r], i = e[o];
    t[r] = [o, i, Eu(i)];
  }
  return t;
}
function Tu(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Kb(e) {
  var t = Ub(e);
  return t.length == 1 && t[0][2] ? Tu(t[0][0], t[0][1]) : function(r) {
    return r === e || Vb(r, e, t);
  };
}
function qb(e, t) {
  return e != null && t in Object(e);
}
function Gb(e, t, r) {
  t = yu(t, e);
  for (var o = -1, i = t.length, a = !1; ++o < i; ) {
    var l = xi(t[o]);
    if (!(a = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return a || ++o != i ? a : (i = e == null ? 0 : e.length, !!i && sl(i) && al(l, i) && (ln(e) || ri(e)));
}
function Xb(e, t) {
  return e != null && Gb(e, t, qb);
}
var Yb = 1, Zb = 2;
function Jb(e, t) {
  return fl(e) && Eu(t) ? Tu(xi(e), t) : function(r) {
    var o = yo(r, e);
    return o === void 0 && o === t ? Xb(r, e) : vl(t, o, Yb | Zb);
  };
}
function Qb(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function ex(e) {
  return function(t) {
    return Cu(t, e);
  };
}
function tx(e) {
  return fl(e) ? Qb(xi(e)) : ex(e);
}
function nx(e) {
  return typeof e == "function" ? e : e == null ? ol : typeof e == "object" ? ln(e) ? Jb(e[0], e[1]) : Kb(e) : tx(e);
}
function rx(e) {
  return function(t, r, o) {
    for (var i = -1, a = Object(t), l = o(t), s = l.length; s--; ) {
      var d = l[++i];
      if (r(a[d], d, a) === !1)
        break;
    }
    return t;
  };
}
var Ou = rx();
function ox(e, t) {
  return e && Ou(e, t, cl);
}
function ix(e, t) {
  return function(r, o) {
    if (r == null)
      return r;
    if (!_r(r))
      return e(r, o);
    for (var i = r.length, a = -1, l = Object(r); ++a < i && o(l[a], a, l) !== !1; )
      ;
    return r;
  };
}
var ax = ix(ox);
function Ca(e, t, r) {
  (r !== void 0 && !Fo(e[t], r) || r === void 0 && !(t in e)) && ll(e, t, r);
}
function lx(e) {
  return Vn(e) && _r(e);
}
function wa(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function sx(e) {
  return Eg(e, bu(e));
}
function dx(e, t, r, o, i, a, l) {
  var s = wa(e, r), d = wa(t, r), u = l.get(d);
  if (u) {
    Ca(e, r, u);
    return;
  }
  var c = a ? a(s, d, r + "", e, t, l) : void 0, v = c === void 0;
  if (v) {
    var g = ln(d), m = !g && oi(d), h = !g && !m && ul(d);
    c = d, g || m || h ? ln(s) ? c = s : lx(s) ? c = yg(s) : m ? (v = !1, c = Ym(d)) : h ? (v = !1, c = ub(d)) : c = [] : gm(d) || ri(d) ? (c = s, ri(s) ? c = sx(s) : (!Kn(s) || il(s)) && (c = cb(d))) : v = !1;
  }
  v && (l.set(d, c), i(c, d, o, a, l), l.delete(d)), Ca(e, r, c);
}
function Mu(e, t, r, o, i) {
  e !== t && Ou(t, function(a, l) {
    if (i || (i = new mn()), Kn(a))
      dx(e, t, l, r, Mu, o, i);
    else {
      var s = o ? o(wa(e, l), a, l + "", e, t, i) : void 0;
      s === void 0 && (s = a), Ca(e, l, s);
    }
  }, bu);
}
function ux(e, t) {
  var r = -1, o = _r(e) ? Array(e.length) : [];
  return ax(e, function(i, a, l) {
    o[++r] = t(i, a, l);
  }), o;
}
function cx(e, t) {
  var r = ln(e) ? cu : ux;
  return r(e, nx(t));
}
var no = Lg(function(e, t, r) {
  Mu(e, t, r);
});
function lr(e) {
  const {
    mergedLocaleRef: t,
    mergedDateLocaleRef: r
  } = pe(cn, null) || {}, o = A(() => {
    var a, l;
    return (l = (a = t == null ? void 0 : t.value) === null || a === void 0 ? void 0 : a[e]) !== null && l !== void 0 ? l : z0[e];
  });
  return {
    dateLocaleRef: A(() => {
      var a;
      return (a = r == null ? void 0 : r.value) !== null && a !== void 0 ? a : Wv;
    }),
    localeRef: o
  };
}
const Or = "naive-ui-style";
function Ft(e, t, r) {
  if (!t) return;
  const o = vr(), i = A(() => {
    const {
      value: s
    } = t;
    if (!s)
      return;
    const d = s[e];
    if (d)
      return d;
  }), a = pe(cn, null), l = () => {
    nt(() => {
      const {
        value: s
      } = r, d = `${s}${e}Rtl`;
      if (nh(d, o)) return;
      const {
        value: u
      } = i;
      u && u.style.mount({
        id: d,
        head: !0,
        anchorMetaName: Or,
        props: {
          bPrefix: s ? `.${s}-` : void 0
        },
        ssr: o,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    });
  };
  return o ? l() : cr(l), i;
}
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
  fontSize: fx,
  fontFamily: hx,
  lineHeight: vx
} = sn, Iu = D("body", `
 margin: 0;
 font-size: ${fx};
 font-family: ${hx};
 line-height: ${vx};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [D("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function qn(e, t, r) {
  if (!t) {
    process.env.NODE_ENV !== "production" && Pn("use-style", "No style is specified.");
    return;
  }
  const o = vr(), i = pe(cn, null), a = () => {
    const l = r.value;
    t.mount({
      id: l === void 0 ? e : l + e,
      head: !0,
      anchorMetaName: Or,
      props: {
        bPrefix: l ? `.${l}-` : void 0
      },
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    }), i != null && i.preflightStyleDisabled || Iu.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: Or,
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    });
  };
  o ? a() : cr(a);
}
function ve(e, t, r, o, i, a) {
  const l = vr(), s = pe(cn, null);
  if (r) {
    const u = () => {
      const c = a == null ? void 0 : a.value;
      r.mount({
        id: c === void 0 ? t : c + t,
        head: !0,
        props: {
          bPrefix: c ? `.${c}-` : void 0
        },
        anchorMetaName: Or,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || Iu.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Or,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    l ? u() : cr(u);
  }
  return A(() => {
    var u;
    const {
      theme: {
        common: c,
        self: v,
        peers: g = {}
      } = {},
      themeOverrides: m = {},
      builtinThemeOverrides: h = {}
    } = i, {
      common: p,
      peers: x
    } = m, {
      common: b = void 0,
      [e]: {
        common: y = void 0,
        self: k = void 0,
        peers: w = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: R = void 0,
      [e]: B = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: C,
      peers: S = {}
    } = B, F = no({}, c || y || b || o.common, R, C, p), P = no(
      // {}, executed every time, no need for empty obj
      (u = v || k || o.self) === null || u === void 0 ? void 0 : u(F),
      h,
      B,
      m
    );
    return {
      common: F,
      self: P,
      peers: no({}, o.peers, w, g),
      peerOverrides: no({}, h.peers, S, x)
    };
  });
}
ve.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const gx = z("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [D("svg", `
 height: 1em;
 width: 1em;
 `)]), yt = J({
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
    qn("-base-icon", gx, ie(e, "clsPrefix"));
  },
  render() {
    return f("i", {
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
}), xr = J({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: t
  }) {
    const r = hr();
    return () => f(Tt, {
      name: "icon-switch-transition",
      appear: r.value
    }, t);
  }
}), px = J({
  name: "ArrowDown",
  render() {
    return f("svg", {
      viewBox: "0 0 28 28",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, f("g", {
      stroke: "none",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, f("g", {
      "fill-rule": "nonzero"
    }, f("path", {
      d: "M23.7916,15.2664 C24.0788,14.9679 24.0696,14.4931 23.7711,14.206 C23.4726,13.9188 22.9978,13.928 22.7106,14.2265 L14.7511,22.5007 L14.7511,3.74792 C14.7511,3.33371 14.4153,2.99792 14.0011,2.99792 C13.5869,2.99792 13.2511,3.33371 13.2511,3.74793 L13.2511,22.4998 L5.29259,14.2265 C5.00543,13.928 4.53064,13.9188 4.23213,14.206 C3.93361,14.4931 3.9244,14.9679 4.21157,15.2664 L13.2809,24.6944 C13.6743,25.1034 14.3289,25.1034 14.7223,24.6944 L23.7916,15.2664 Z"
    }))));
  }
});
function Wr(e, t) {
  const r = J({
    render() {
      return t();
    }
  });
  return J({
    name: _m(e),
    setup() {
      var o;
      const i = (o = pe(cn, null)) === null || o === void 0 ? void 0 : o.mergedIconsRef;
      return () => {
        var a;
        const l = (a = i == null ? void 0 : i.value) === null || a === void 0 ? void 0 : a[e];
        return l ? l() : f(r, null);
      };
    }
  });
}
const Ws = J({
  name: "Backward",
  render() {
    return f("svg", {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, f("path", {
      d: "M12.2674 15.793C11.9675 16.0787 11.4927 16.0672 11.2071 15.7673L6.20572 10.5168C5.9298 10.2271 5.9298 9.7719 6.20572 9.48223L11.2071 4.23177C11.4927 3.93184 11.9675 3.92031 12.2674 4.206C12.5673 4.49169 12.5789 4.96642 12.2932 5.26634L7.78458 9.99952L12.2932 14.7327C12.5789 15.0326 12.5673 15.5074 12.2674 15.793Z",
      fill: "currentColor"
    }));
  }
}), mx = J({
  name: "Checkmark",
  render() {
    return f("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 16 16"
    }, f("g", {
      fill: "none"
    }, f("path", {
      d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",
      fill: "currentColor"
    })));
  }
}), Lu = J({
  name: "ChevronDown",
  render() {
    return f("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, f("path", {
      d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
      fill: "currentColor"
    }));
  }
}), bx = J({
  name: "ChevronLeft",
  render() {
    return f("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, f("path", {
      d: "M10.3536 3.14645C10.5488 3.34171 10.5488 3.65829 10.3536 3.85355L6.20711 8L10.3536 12.1464C10.5488 12.3417 10.5488 12.6583 10.3536 12.8536C10.1583 13.0488 9.84171 13.0488 9.64645 12.8536L5.14645 8.35355C4.95118 8.15829 4.95118 7.84171 5.14645 7.64645L9.64645 3.14645C9.84171 2.95118 10.1583 2.95118 10.3536 3.14645Z",
      fill: "currentColor"
    }));
  }
}), gl = J({
  name: "ChevronRight",
  render() {
    return f("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, f("path", {
      d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
      fill: "currentColor"
    }));
  }
}), xx = Wr("clear", () => f("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, f("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, f("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, f("path", {
  d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
}))))), yx = Wr("close", () => f("svg", {
  viewBox: "0 0 12 12",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg",
  "aria-hidden": !0
}, f("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, f("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, f("path", {
  d: "M2.08859116,2.2156945 L2.14644661,2.14644661 C2.32001296,1.97288026 2.58943736,1.95359511 2.7843055,2.08859116 L2.85355339,2.14644661 L6,5.293 L9.14644661,2.14644661 C9.34170876,1.95118446 9.65829124,1.95118446 9.85355339,2.14644661 C10.0488155,2.34170876 10.0488155,2.65829124 9.85355339,2.85355339 L6.707,6 L9.85355339,9.14644661 C10.0271197,9.32001296 10.0464049,9.58943736 9.91140884,9.7843055 L9.85355339,9.85355339 C9.67998704,10.0271197 9.41056264,10.0464049 9.2156945,9.91140884 L9.14644661,9.85355339 L6,6.707 L2.85355339,9.85355339 C2.65829124,10.0488155 2.34170876,10.0488155 2.14644661,9.85355339 C1.95118446,9.65829124 1.95118446,9.34170876 2.14644661,9.14644661 L5.293,6 L2.14644661,2.85355339 C1.97288026,2.67998704 1.95359511,2.41056264 2.08859116,2.2156945 L2.14644661,2.14644661 L2.08859116,2.2156945 Z"
}))))), Cx = J({
  name: "Empty",
  render() {
    return f("svg", {
      viewBox: "0 0 28 28",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, f("path", {
      d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
      fill: "currentColor"
    }), f("path", {
      d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
      fill: "currentColor"
    }));
  }
}), pl = Wr("error", () => f("svg", {
  viewBox: "0 0 48 48",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, f("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, f("g", {
  "fill-rule": "nonzero"
}, f("path", {
  d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M17.8838835,16.1161165 L17.7823881,16.0249942 C17.3266086,15.6583353 16.6733914,15.6583353 16.2176119,16.0249942 L16.1161165,16.1161165 L16.0249942,16.2176119 C15.6583353,16.6733914 15.6583353,17.3266086 16.0249942,17.7823881 L16.1161165,17.8838835 L22.233,24 L16.1161165,30.1161165 L16.0249942,30.2176119 C15.6583353,30.6733914 15.6583353,31.3266086 16.0249942,31.7823881 L16.1161165,31.8838835 L16.2176119,31.9750058 C16.6733914,32.3416647 17.3266086,32.3416647 17.7823881,31.9750058 L17.8838835,31.8838835 L24,25.767 L30.1161165,31.8838835 L30.2176119,31.9750058 C30.6733914,32.3416647 31.3266086,32.3416647 31.7823881,31.9750058 L31.8838835,31.8838835 L31.9750058,31.7823881 C32.3416647,31.3266086 32.3416647,30.6733914 31.9750058,30.2176119 L31.8838835,30.1161165 L25.767,24 L31.8838835,17.8838835 L31.9750058,17.7823881 C32.3416647,17.3266086 32.3416647,16.6733914 31.9750058,16.2176119 L31.8838835,16.1161165 L31.7823881,16.0249942 C31.3266086,15.6583353 30.6733914,15.6583353 30.2176119,16.0249942 L30.1161165,16.1161165 L24,22.233 L17.8838835,16.1161165 L17.7823881,16.0249942 L17.8838835,16.1161165 Z"
}))))), wx = J({
  name: "Eye",
  render() {
    return f("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, f("path", {
      d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }), f("circle", {
      cx: "256",
      cy: "256",
      r: "80",
      fill: "none",
      stroke: "currentColor",
      "stroke-miterlimit": "10",
      "stroke-width": "32"
    }));
  }
}), Sx = J({
  name: "EyeOff",
  render() {
    return f("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, f("path", {
      d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
      fill: "currentColor"
    }), f("path", {
      d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
      fill: "currentColor"
    }), f("path", {
      d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
      fill: "currentColor"
    }), f("path", {
      d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
      fill: "currentColor"
    }), f("path", {
      d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
      fill: "currentColor"
    }));
  }
}), Vs = J({
  name: "FastBackward",
  render() {
    return f("svg", {
      viewBox: "0 0 20 20",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, f("g", {
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, f("g", {
      fill: "currentColor",
      "fill-rule": "nonzero"
    }, f("path", {
      d: "M8.73171,16.7949 C9.03264,17.0795 9.50733,17.0663 9.79196,16.7654 C10.0766,16.4644 10.0634,15.9897 9.76243,15.7051 L4.52339,10.75 L17.2471,10.75 C17.6613,10.75 17.9971,10.4142 17.9971,10 C17.9971,9.58579 17.6613,9.25 17.2471,9.25 L4.52112,9.25 L9.76243,4.29275 C10.0634,4.00812 10.0766,3.53343 9.79196,3.2325 C9.50733,2.93156 9.03264,2.91834 8.73171,3.20297 L2.31449,9.27241 C2.14819,9.4297 2.04819,9.62981 2.01448,9.8386 C2.00308,9.89058 1.99707,9.94459 1.99707,10 C1.99707,10.0576 2.00356,10.1137 2.01585,10.1675 C2.05084,10.3733 2.15039,10.5702 2.31449,10.7254 L8.73171,16.7949 Z"
    }))));
  }
}), Us = J({
  name: "FastForward",
  render() {
    return f("svg", {
      viewBox: "0 0 20 20",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, f("g", {
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, f("g", {
      fill: "currentColor",
      "fill-rule": "nonzero"
    }, f("path", {
      d: "M11.2654,3.20511 C10.9644,2.92049 10.4897,2.93371 10.2051,3.23464 C9.92049,3.53558 9.93371,4.01027 10.2346,4.29489 L15.4737,9.25 L2.75,9.25 C2.33579,9.25 2,9.58579 2,10.0000012 C2,10.4142 2.33579,10.75 2.75,10.75 L15.476,10.75 L10.2346,15.7073 C9.93371,15.9919 9.92049,16.4666 10.2051,16.7675 C10.4897,17.0684 10.9644,17.0817 11.2654,16.797 L17.6826,10.7276 C17.8489,10.5703 17.9489,10.3702 17.9826,10.1614 C17.994,10.1094 18,10.0554 18,10.0000012 C18,9.94241 17.9935,9.88633 17.9812,9.83246 C17.9462,9.62667 17.8467,9.42976 17.6826,9.27455 L11.2654,3.20511 Z"
    }))));
  }
}), Bx = J({
  name: "Filter",
  render() {
    return f("svg", {
      viewBox: "0 0 28 28",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, f("g", {
      stroke: "none",
      "stroke-width": "1",
      "fill-rule": "evenodd"
    }, f("g", {
      "fill-rule": "nonzero"
    }, f("path", {
      d: "M17,19 C17.5522847,19 18,19.4477153 18,20 C18,20.5522847 17.5522847,21 17,21 L11,21 C10.4477153,21 10,20.5522847 10,20 C10,19.4477153 10.4477153,19 11,19 L17,19 Z M21,13 C21.5522847,13 22,13.4477153 22,14 C22,14.5522847 21.5522847,15 21,15 L7,15 C6.44771525,15 6,14.5522847 6,14 C6,13.4477153 6.44771525,13 7,13 L21,13 Z M24,7 C24.5522847,7 25,7.44771525 25,8 C25,8.55228475 24.5522847,9 24,9 L4,9 C3.44771525,9 3,8.55228475 3,8 C3,7.44771525 3.44771525,7 4,7 L24,7 Z"
    }))));
  }
}), Ks = J({
  name: "Forward",
  render() {
    return f("svg", {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, f("path", {
      d: "M7.73271 4.20694C8.03263 3.92125 8.50737 3.93279 8.79306 4.23271L13.7944 9.48318C14.0703 9.77285 14.0703 10.2281 13.7944 10.5178L8.79306 15.7682C8.50737 16.0681 8.03263 16.0797 7.73271 15.794C7.43279 15.5083 7.42125 15.0336 7.70694 14.7336L12.2155 10.0005L7.70694 5.26729C7.42125 4.96737 7.43279 4.49264 7.73271 4.20694Z",
      fill: "currentColor"
    }));
  }
}), li = Wr("info", () => f("svg", {
  viewBox: "0 0 28 28",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, f("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, f("g", {
  "fill-rule": "nonzero"
}, f("path", {
  d: "M14,2 C20.6274,2 26,7.37258 26,14 C26,20.6274 20.6274,26 14,26 C7.37258,26 2,20.6274 2,14 C2,7.37258 7.37258,2 14,2 Z M14,11 C13.4477,11 13,11.4477 13,12 L13,12 L13,20 C13,20.5523 13.4477,21 14,21 C14.5523,21 15,20.5523 15,20 L15,20 L15,12 C15,11.4477 14.5523,11 14,11 Z M14,6.75 C13.3096,6.75 12.75,7.30964 12.75,8 C12.75,8.69036 13.3096,9.25 14,9.25 C14.6904,9.25 15.25,8.69036 15.25,8 C15.25,7.30964 14.6904,6.75 14,6.75 Z"
}))))), qs = J({
  name: "More",
  render() {
    return f("svg", {
      viewBox: "0 0 16 16",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg"
    }, f("g", {
      stroke: "none",
      "stroke-width": "1",
      fill: "none",
      "fill-rule": "evenodd"
    }, f("g", {
      fill: "currentColor",
      "fill-rule": "nonzero"
    }, f("path", {
      d: "M4,7 C4.55228,7 5,7.44772 5,8 C5,8.55229 4.55228,9 4,9 C3.44772,9 3,8.55229 3,8 C3,7.44772 3.44772,7 4,7 Z M8,7 C8.55229,7 9,7.44772 9,8 C9,8.55229 8.55229,9 8,9 C7.44772,9 7,8.55229 7,8 C7,7.44772 7.44772,7 8,7 Z M12,7 C12.5523,7 13,7.44772 13,8 C13,8.55229 12.5523,9 12,9 C11.4477,9 11,8.55229 11,8 C11,7.44772 11.4477,7 12,7 Z"
    }))));
  }
}), ml = Wr("success", () => f("svg", {
  viewBox: "0 0 48 48",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, f("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, f("g", {
  "fill-rule": "nonzero"
}, f("path", {
  d: "M24,4 C35.045695,4 44,12.954305 44,24 C44,35.045695 35.045695,44 24,44 C12.954305,44 4,35.045695 4,24 C4,12.954305 12.954305,4 24,4 Z M32.6338835,17.6161165 C32.1782718,17.1605048 31.4584514,17.1301307 30.9676119,17.5249942 L30.8661165,17.6161165 L20.75,27.732233 L17.1338835,24.1161165 C16.6457281,23.6279612 15.8542719,23.6279612 15.3661165,24.1161165 C14.9105048,24.5717282 14.8801307,25.2915486 15.2749942,25.7823881 L15.3661165,25.8838835 L19.8661165,30.3838835 C20.3217282,30.8394952 21.0415486,30.8698693 21.5323881,30.4750058 L21.6338835,30.3838835 L32.6338835,19.3838835 C33.1220388,18.8957281 33.1220388,18.1042719 32.6338835,17.6161165 Z"
}))))), yi = Wr("warning", () => f("svg", {
  viewBox: "0 0 24 24",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, f("g", {
  stroke: "none",
  "stroke-width": "1",
  "fill-rule": "evenodd"
}, f("g", {
  "fill-rule": "nonzero"
}, f("path", {
  d: "M12,2 C17.523,2 22,6.478 22,12 C22,17.522 17.523,22 12,22 C6.477,22 2,17.522 2,12 C2,6.478 6.477,2 12,2 Z M12.0018002,15.0037242 C11.450254,15.0037242 11.0031376,15.4508407 11.0031376,16.0023869 C11.0031376,16.553933 11.450254,17.0010495 12.0018002,17.0010495 C12.5533463,17.0010495 13.0004628,16.553933 13.0004628,16.0023869 C13.0004628,15.4508407 12.5533463,15.0037242 12.0018002,15.0037242 Z M11.99964,7 C11.4868042,7.00018474 11.0642719,7.38637706 11.0066858,7.8837365 L11,8.00036004 L11.0018003,13.0012393 L11.00857,13.117858 C11.0665141,13.6151758 11.4893244,14.0010638 12.0021602,14.0008793 C12.514996,14.0006946 12.9375283,13.6145023 12.9951144,13.1171428 L13.0018002,13.0005193 L13,7.99964009 L12.9932303,7.8830214 C12.9352861,7.38570354 12.5124758,6.99981552 11.99964,7 Z"
}))))), {
  cubicBezierEaseInOut: kx
} = sn;
function Qt({
  originalTransform: e = "",
  left: t = 0,
  top: r = 0,
  transition: o = `all .3s ${kx} !important`
} = {}) {
  return [D("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${e} scale(0.75)`,
    left: t,
    top: r,
    opacity: 0
  }), D("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${e}`,
    left: t,
    top: r,
    opacity: 1
  }), D("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: t,
    top: r,
    transition: o
  })];
}
const Rx = z("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [D(">", [M("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [D("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), D("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), M("placeholder", `
 display: flex;
 `), M("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Qt({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), Sa = J({
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
    return qn("-base-clear", Rx, ie(e, "clsPrefix")), {
      handleMouseDown(t) {
        t.preventDefault();
      }
    };
  },
  render() {
    const {
      clsPrefix: e
    } = this;
    return f("div", {
      class: `${e}-base-clear`
    }, f(xr, null, {
      default: () => {
        var t, r;
        return this.show ? f("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, tn(this.$slots.icon, () => [f(yt, {
          clsPrefix: e
        }, {
          default: () => f(xx, null)
        })])) : f("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (r = (t = this.$slots).placeholder) === null || r === void 0 ? void 0 : r.call(t));
      }
    }));
  }
}), Fx = z("base-close", `
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
`, [N("absolute", `
 height: var(--n-close-icon-size);
 width: var(--n-close-icon-size);
 `), D("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), Je("disabled", [D("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), D("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), D("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), D("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), D("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), N("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), N("round", [D("&::before", `
 border-radius: 50%;
 `)])]), Vr = J({
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
    return qn("-base-close", Fx, ie(e, "clsPrefix")), () => {
      const {
        clsPrefix: t,
        disabled: r,
        absolute: o,
        round: i,
        isButtonTag: a
      } = e;
      return f(a ? "button" : "div", {
        type: a ? "button" : void 0,
        tabindex: r || !e.focusable ? -1 : 0,
        "aria-disabled": r,
        "aria-label": "close",
        role: a ? void 0 : "button",
        disabled: r,
        class: [`${t}-base-close`, o && `${t}-base-close--absolute`, r && `${t}-base-close--disabled`, i && `${t}-base-close--round`],
        onMousedown: (s) => {
          e.focusable || s.preventDefault();
        },
        onClick: e.onClick
      }, f(yt, {
        clsPrefix: t
      }, {
        default: () => f(yx, null)
      }));
    };
  }
}), bl = J({
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
    slots: t
  }) {
    function r(s) {
      e.width ? s.style.maxWidth = `${s.offsetWidth}px` : s.style.maxHeight = `${s.offsetHeight}px`, s.offsetWidth;
    }
    function o(s) {
      e.width ? s.style.maxWidth = "0" : s.style.maxHeight = "0", s.offsetWidth;
      const {
        onLeave: d
      } = e;
      d && d();
    }
    function i(s) {
      e.width ? s.style.maxWidth = "" : s.style.maxHeight = "";
      const {
        onAfterLeave: d
      } = e;
      d && d();
    }
    function a(s) {
      if (s.style.transition = "none", e.width) {
        const d = s.offsetWidth;
        s.style.maxWidth = "0", s.offsetWidth, s.style.transition = "", s.style.maxWidth = `${d}px`;
      } else if (e.reverse)
        s.style.maxHeight = `${s.offsetHeight}px`, s.offsetHeight, s.style.transition = "", s.style.maxHeight = "0";
      else {
        const d = s.offsetHeight;
        s.style.maxHeight = "0", s.offsetWidth, s.style.transition = "", s.style.maxHeight = `${d}px`;
      }
      s.offsetWidth;
    }
    function l(s) {
      var d;
      e.width ? s.style.maxWidth = "" : e.reverse || (s.style.maxHeight = ""), (d = e.onAfterEnter) === null || d === void 0 || d.call(e);
    }
    return () => {
      const {
        group: s,
        width: d,
        appear: u,
        mode: c
      } = e, v = s ? Af : Tt, g = {
        name: d ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: u,
        onEnter: a,
        onAfterEnter: l,
        onBeforeLeave: r,
        onLeave: o,
        onAfterLeave: i
      };
      return s || (g.mode = c), f(v, g, t);
    };
  }
}), Px = J({
  props: {
    onFocus: Function,
    onBlur: Function
  },
  setup(e) {
    return () => f("div", {
      style: "width: 0; height: 0",
      tabindex: 0,
      onFocus: e.onFocus,
      onBlur: e.onBlur
    });
  }
}), zx = D([D("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), z("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [M("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [Qt()]), M("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Qt({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), M("container", `
 animation: rotator 3s linear infinite both;
 `, [M("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Yi = "1.6s", $x = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Gn = J({
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
  }, $x),
  setup(e) {
    qn("-base-loading", zx, ie(e, "clsPrefix"));
  },
  render() {
    const {
      clsPrefix: e,
      radius: t,
      strokeWidth: r,
      stroke: o,
      scale: i
    } = this, a = t / i;
    return f("div", {
      class: `${e}-base-loading`,
      role: "img",
      "aria-label": "loading"
    }, f(xr, null, {
      default: () => this.show ? f("div", {
        key: "icon",
        class: `${e}-base-loading__transition-wrapper`
      }, f("div", {
        class: `${e}-base-loading__container`
      }, f("svg", {
        class: `${e}-base-loading__icon`,
        viewBox: `0 0 ${2 * a} ${2 * a}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          color: o
        }
      }, f("g", null, f("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${a} ${a};270 ${a} ${a}`,
        begin: "0s",
        dur: Yi,
        fill: "freeze",
        repeatCount: "indefinite"
      }), f("circle", {
        class: `${e}-base-loading__icon`,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": r,
        "stroke-linecap": "round",
        cx: a,
        cy: a,
        r: t - r / 2,
        "stroke-dasharray": 5.67 * t,
        "stroke-dashoffset": 18.48 * t
      }, f("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${a} ${a};135 ${a} ${a};450 ${a} ${a}`,
        begin: "0s",
        dur: Yi,
        fill: "freeze",
        repeatCount: "indefinite"
      }), f("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * t};${1.42 * t};${5.67 * t}`,
        begin: "0s",
        dur: Yi,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : f("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), {
  cubicBezierEaseInOut: Gs
} = sn;
function Po({
  name: e = "fade-in",
  enterDuration: t = "0.2s",
  leaveDuration: r = "0.2s",
  enterCubicBezier: o = Gs,
  leaveCubicBezier: i = Gs
} = {}) {
  return [D(`&.${e}-transition-enter-active`, {
    transition: `all ${t} ${o}!important`
  }), D(`&.${e}-transition-leave-active`, {
    transition: `all ${r} ${i}!important`
  }), D(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), D(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
    opacity: 1
  })];
}
const Re = {
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
}, Ax = ir(Re.neutralBase), Nu = ir(Re.neutralInvertBase), Dx = `rgba(${Nu.slice(0, 3).join(", ")}, `;
function Xs(e) {
  return `${Dx + String(e)})`;
}
function Mt(e) {
  const t = Array.from(Nu);
  return t[3] = Number(e), Xe(Ax, t);
}
const Ze = Object.assign(Object.assign({
  name: "common"
}, sn), {
  baseColor: Re.neutralBase,
  // primary color
  primaryColor: Re.primaryDefault,
  primaryColorHover: Re.primaryHover,
  primaryColorPressed: Re.primaryActive,
  primaryColorSuppl: Re.primarySuppl,
  // info color
  infoColor: Re.infoDefault,
  infoColorHover: Re.infoHover,
  infoColorPressed: Re.infoActive,
  infoColorSuppl: Re.infoSuppl,
  // success color
  successColor: Re.successDefault,
  successColorHover: Re.successHover,
  successColorPressed: Re.successActive,
  successColorSuppl: Re.successSuppl,
  // warning color
  warningColor: Re.warningDefault,
  warningColorHover: Re.warningHover,
  warningColorPressed: Re.warningActive,
  warningColorSuppl: Re.warningSuppl,
  // error color
  errorColor: Re.errorDefault,
  errorColorHover: Re.errorHover,
  errorColorPressed: Re.errorActive,
  errorColorSuppl: Re.errorSuppl,
  // text color
  textColorBase: Re.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: Mt(Re.alpha4),
  placeholderColor: Mt(Re.alpha4),
  placeholderColorDisabled: Mt(Re.alpha5),
  iconColor: Mt(Re.alpha4),
  iconColorHover: Eo(Mt(Re.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: Eo(Mt(Re.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: Mt(Re.alpha5),
  opacity1: Re.alpha1,
  opacity2: Re.alpha2,
  opacity3: Re.alpha3,
  opacity4: Re.alpha4,
  opacity5: Re.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: Mt(Number(Re.alphaClose)),
  closeIconColorHover: Mt(Number(Re.alphaClose)),
  closeIconColorPressed: Mt(Number(Re.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: Mt(Re.alpha4),
  clearColorHover: Eo(Mt(Re.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: Eo(Mt(Re.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Xs(Re.alphaScrollbar),
  scrollbarColorHover: Xs(Re.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: Mt(Re.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: Re.neutralPopover,
  tableColor: Re.neutralCard,
  cardColor: Re.neutralCard,
  modalColor: Re.neutralModal,
  bodyColor: Re.neutralBody,
  tagColor: "#eee",
  avatarColor: Mt(Re.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: Mt(Re.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: Re.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), Ex = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Tx(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: r,
    scrollbarHeight: o,
    scrollbarWidth: i,
    scrollbarBorderRadius: a
  } = e;
  return Object.assign(Object.assign({}, Ex), {
    height: o,
    width: i,
    borderRadius: a,
    color: t,
    colorHover: r
  });
}
const Ur = {
  name: "Scrollbar",
  common: Ze,
  self: Tx
}, Ox = z("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [D(">", [z("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [D("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), D(">", [
  // We can't set overflow hidden since it affects positioning.
  z("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), D(">, +", [z("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [N("horizontal", `
 height: var(--n-scrollbar-height);
 `, [D(">", [M("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), N("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), N("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), N("vertical", `
 width: var(--n-scrollbar-width);
 `, [D(">", [M("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), N("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), N("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), N("disabled", [D(">", [M("scrollbar", "pointer-events: none;")])]), D(">", [M("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [Po(), D("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Mx = Object.assign(Object.assign({}, ve.props), {
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
}), An = J({
  name: "Scrollbar",
  props: Mx,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Ae(e), i = Ft("Scrollbar", o, t), a = I(null), l = I(null), s = I(null), d = I(null), u = I(null), c = I(null), v = I(null), g = I(null), m = I(null), h = I(null), p = I(null), x = I(0), b = I(0), y = I(!1), k = I(!1);
    let w = !1, R = !1, B, C, S = 0, F = 0, P = 0, _ = 0;
    const O = Rh(), n = ve("Scrollbar", "-scrollbar", Ox, Ur, e, t), E = A(() => {
      const {
        value: $
      } = g, {
        value: V
      } = c, {
        value: Q
      } = h;
      return $ === null || V === null || Q === null ? 0 : Math.min($, Q * $ / V + Et(n.value.self.width) * 1.5);
    }), T = A(() => `${E.value}px`), H = A(() => {
      const {
        value: $
      } = m, {
        value: V
      } = v, {
        value: Q
      } = p;
      return $ === null || V === null || Q === null ? 0 : Q * $ / V + Et(n.value.self.height) * 1.5;
    }), L = A(() => `${H.value}px`), U = A(() => {
      const {
        value: $
      } = g, {
        value: V
      } = x, {
        value: Q
      } = c, {
        value: se
      } = h;
      if ($ === null || Q === null || se === null)
        return 0;
      {
        const de = Q - $;
        return de ? V / de * (se - E.value) : 0;
      }
    }), te = A(() => `${U.value}px`), X = A(() => {
      const {
        value: $
      } = m, {
        value: V
      } = b, {
        value: Q
      } = v, {
        value: se
      } = p;
      if ($ === null || Q === null || se === null)
        return 0;
      {
        const de = Q - $;
        return de ? V / de * (se - H.value) : 0;
      }
    }), K = A(() => `${X.value}px`), j = A(() => {
      const {
        value: $
      } = g, {
        value: V
      } = c;
      return $ !== null && V !== null && V > $;
    }), q = A(() => {
      const {
        value: $
      } = m, {
        value: V
      } = v;
      return $ !== null && V !== null && V > $;
    }), Y = A(() => {
      const {
        trigger: $
      } = e;
      return $ === "none" || y.value;
    }), ae = A(() => {
      const {
        trigger: $
      } = e;
      return $ === "none" || k.value;
    }), le = A(() => {
      const {
        container: $
      } = e;
      return $ ? $() : l.value;
    }), ce = A(() => {
      const {
        content: $
      } = e;
      return $ ? $() : s.value;
    }), be = ($, V) => {
      if (!e.scrollable) return;
      if (typeof $ == "number") {
        Pe($, V ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: Q,
        top: se,
        index: de,
        elSize: ge,
        position: me,
        behavior: Se,
        el: Ne,
        debounce: at = !0
      } = $;
      (Q !== void 0 || se !== void 0) && Pe(Q ?? 0, se ?? 0, 0, !1, Se), Ne !== void 0 ? Pe(0, Ne.offsetTop, Ne.offsetHeight, at, Se) : de !== void 0 && ge !== void 0 ? Pe(0, de * ge, ge, at, Se) : me === "bottom" ? Pe(0, Number.MAX_SAFE_INTEGER, 0, !1, Se) : me === "top" && Pe(0, 0, 0, !1, Se);
    }, G = Ah(() => {
      e.container || be({
        top: x.value,
        left: b.value
      });
    }), ue = () => {
      G.isDeactivated || he();
    }, Fe = ($) => {
      if (G.isDeactivated) return;
      const {
        onResize: V
      } = e;
      V && V($), he();
    }, xe = ($, V) => {
      if (!e.scrollable) return;
      const {
        value: Q
      } = le;
      Q && (typeof $ == "object" ? Q.scrollBy($) : Q.scrollBy($, V || 0));
    };
    function Pe($, V, Q, se, de) {
      const {
        value: ge
      } = le;
      if (ge) {
        if (se) {
          const {
            scrollTop: me,
            offsetHeight: Se
          } = ge;
          if (V > me) {
            V + Q <= me + Se || ge.scrollTo({
              left: $,
              top: V + Q - Se,
              behavior: de
            });
            return;
          }
        }
        ge.scrollTo({
          left: $,
          top: V,
          behavior: de
        });
      }
    }
    function ze() {
      ye(), Ce(), he();
    }
    function dt() {
      rt();
    }
    function rt() {
      ft(), ht();
    }
    function ft() {
      C !== void 0 && window.clearTimeout(C), C = window.setTimeout(() => {
        k.value = !1;
      }, e.duration);
    }
    function ht() {
      B !== void 0 && window.clearTimeout(B), B = window.setTimeout(() => {
        y.value = !1;
      }, e.duration);
    }
    function ye() {
      B !== void 0 && window.clearTimeout(B), y.value = !0;
    }
    function Ce() {
      C !== void 0 && window.clearTimeout(C), k.value = !0;
    }
    function De($) {
      const {
        onScroll: V
      } = e;
      V && V($), Le();
    }
    function Le() {
      const {
        value: $
      } = le;
      $ && (x.value = $.scrollTop, b.value = $.scrollLeft * (i != null && i.value ? -1 : 1));
    }
    function et() {
      const {
        value: $
      } = ce;
      $ && (c.value = $.offsetHeight, v.value = $.offsetWidth);
      const {
        value: V
      } = le;
      V && (g.value = V.offsetHeight, m.value = V.offsetWidth);
      const {
        value: Q
      } = u, {
        value: se
      } = d;
      Q && (p.value = Q.offsetWidth), se && (h.value = se.offsetHeight);
    }
    function oe() {
      const {
        value: $
      } = le;
      $ && (x.value = $.scrollTop, b.value = $.scrollLeft * (i != null && i.value ? -1 : 1), g.value = $.offsetHeight, m.value = $.offsetWidth, c.value = $.scrollHeight, v.value = $.scrollWidth);
      const {
        value: V
      } = u, {
        value: Q
      } = d;
      V && (p.value = V.offsetWidth), Q && (h.value = Q.offsetHeight);
    }
    function he() {
      e.scrollable && (e.useUnifiedContainer ? oe() : (et(), Le()));
    }
    function Te($) {
      var V;
      return !(!((V = a.value) === null || V === void 0) && V.contains(Dr($)));
    }
    function ut($) {
      $.preventDefault(), $.stopPropagation(), R = !0, Ke("mousemove", window, At, !0), Ke("mouseup", window, Dt, !0), F = b.value, P = i != null && i.value ? window.innerWidth - $.clientX : $.clientX;
    }
    function At($) {
      if (!R) return;
      B !== void 0 && window.clearTimeout(B), C !== void 0 && window.clearTimeout(C);
      const {
        value: V
      } = m, {
        value: Q
      } = v, {
        value: se
      } = H;
      if (V === null || Q === null) return;
      const ge = (i != null && i.value ? window.innerWidth - $.clientX - P : $.clientX - P) * (Q - V) / (V - se), me = Q - V;
      let Se = F + ge;
      Se = Math.min(me, Se), Se = Math.max(Se, 0);
      const {
        value: Ne
      } = le;
      if (Ne) {
        Ne.scrollLeft = Se * (i != null && i.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: at
        } = e;
        at && at(Se);
      }
    }
    function Dt($) {
      $.preventDefault(), $.stopPropagation(), Ve("mousemove", window, At, !0), Ve("mouseup", window, Dt, !0), R = !1, he(), Te($) && rt();
    }
    function bt($) {
      $.preventDefault(), $.stopPropagation(), w = !0, Ke("mousemove", window, it, !0), Ke("mouseup", window, wt, !0), S = x.value, _ = $.clientY;
    }
    function it($) {
      if (!w) return;
      B !== void 0 && window.clearTimeout(B), C !== void 0 && window.clearTimeout(C);
      const {
        value: V
      } = g, {
        value: Q
      } = c, {
        value: se
      } = E;
      if (V === null || Q === null) return;
      const ge = ($.clientY - _) * (Q - V) / (V - se), me = Q - V;
      let Se = S + ge;
      Se = Math.min(me, Se), Se = Math.max(Se, 0);
      const {
        value: Ne
      } = le;
      Ne && (Ne.scrollTop = Se);
    }
    function wt($) {
      $.preventDefault(), $.stopPropagation(), Ve("mousemove", window, it, !0), Ve("mouseup", window, wt, !0), w = !1, he(), Te($) && rt();
    }
    nt(() => {
      const {
        value: $
      } = q, {
        value: V
      } = j, {
        value: Q
      } = t, {
        value: se
      } = u, {
        value: de
      } = d;
      se && ($ ? se.classList.remove(`${Q}-scrollbar-rail--disabled`) : se.classList.add(`${Q}-scrollbar-rail--disabled`)), de && (V ? de.classList.remove(`${Q}-scrollbar-rail--disabled`) : de.classList.add(`${Q}-scrollbar-rail--disabled`));
    }), $t(() => {
      e.container || he();
    }), St(() => {
      B !== void 0 && window.clearTimeout(B), C !== void 0 && window.clearTimeout(C), Ve("mousemove", window, it, !0), Ve("mouseup", window, wt, !0);
    });
    const ot = A(() => {
      const {
        common: {
          cubicBezierEaseInOut: $
        },
        self: {
          color: V,
          colorHover: Q,
          height: se,
          width: de,
          borderRadius: ge,
          railInsetHorizontalTop: me,
          railInsetHorizontalBottom: Se,
          railInsetVerticalRight: Ne,
          railInsetVerticalLeft: at,
          railColor: Ue
        }
      } = n.value, {
        top: Ot,
        right: jt,
        bottom: _t,
        left: Ut
      } = Wt(me), {
        top: Kt,
        right: rn,
        bottom: qt,
        left: W
      } = Wt(Se), {
        top: ee,
        right: we,
        bottom: Oe,
        left: Ge
      } = Wt(i != null && i.value ? hs(Ne) : Ne), {
        top: He,
        right: lt,
        bottom: vt,
        left: Jt
      } = Wt(i != null && i.value ? hs(at) : at);
      return {
        "--n-scrollbar-bezier": $,
        "--n-scrollbar-color": V,
        "--n-scrollbar-color-hover": Q,
        "--n-scrollbar-border-radius": ge,
        "--n-scrollbar-width": de,
        "--n-scrollbar-height": se,
        "--n-scrollbar-rail-top-horizontal-top": Ot,
        "--n-scrollbar-rail-right-horizontal-top": jt,
        "--n-scrollbar-rail-bottom-horizontal-top": _t,
        "--n-scrollbar-rail-left-horizontal-top": Ut,
        "--n-scrollbar-rail-top-horizontal-bottom": Kt,
        "--n-scrollbar-rail-right-horizontal-bottom": rn,
        "--n-scrollbar-rail-bottom-horizontal-bottom": qt,
        "--n-scrollbar-rail-left-horizontal-bottom": W,
        "--n-scrollbar-rail-top-vertical-right": ee,
        "--n-scrollbar-rail-right-vertical-right": we,
        "--n-scrollbar-rail-bottom-vertical-right": Oe,
        "--n-scrollbar-rail-left-vertical-right": Ge,
        "--n-scrollbar-rail-top-vertical-left": He,
        "--n-scrollbar-rail-right-vertical-left": lt,
        "--n-scrollbar-rail-bottom-vertical-left": vt,
        "--n-scrollbar-rail-left-vertical-left": Jt,
        "--n-scrollbar-rail-color": Ue
      };
    }), fe = r ? Ye("scrollbar", void 0, ot, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: be,
      scrollBy: xe,
      sync: he,
      syncUnifiedContainer: oe,
      handleMouseEnterWrapper: ze,
      handleMouseLeaveWrapper: dt
    }), {
      mergedClsPrefix: t,
      rtlEnabled: i,
      containerScrollTop: x,
      wrapperRef: a,
      containerRef: l,
      contentRef: s,
      yRailRef: d,
      xRailRef: u,
      needYBar: j,
      needXBar: q,
      yBarSizePx: T,
      xBarSizePx: L,
      yBarTopPx: te,
      xBarLeftPx: K,
      isShowXBar: Y,
      isShowYBar: ae,
      isIos: O,
      handleScroll: De,
      handleContentResize: ue,
      handleContainerResize: Fe,
      handleYScrollMouseDown: bt,
      handleXScrollMouseDown: ut,
      cssVars: r ? void 0 : ot,
      themeClass: fe == null ? void 0 : fe.themeClass,
      onRender: fe == null ? void 0 : fe.onRender
    });
  },
  render() {
    var e;
    const {
      $slots: t,
      mergedClsPrefix: r,
      triggerDisplayManually: o,
      rtlEnabled: i,
      internalHoistYRail: a,
      yPlacement: l,
      xPlacement: s,
      xScrollable: d
    } = this;
    if (!this.scrollable) return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
    const u = this.trigger === "none", c = (m, h) => f("div", {
      ref: "yRailRef",
      class: [`${r}-scrollbar-rail`, `${r}-scrollbar-rail--vertical`, `${r}-scrollbar-rail--vertical--${l}`, m],
      "data-scrollbar-rail": !0,
      style: [h || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, f(u ? ha : Tt, u ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? f("div", {
        class: `${r}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), v = () => {
      var m, h;
      return (m = this.onRender) === null || m === void 0 || m.call(this), f("div", kt(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${r}-scrollbar`, this.themeClass, i && `${r}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: o ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: o ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (h = t.default) === null || h === void 0 ? void 0 : h.call(t) : f("div", {
        role: "none",
        ref: "containerRef",
        class: [`${r}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, f(Tr, {
        onResize: this.handleContentResize
      }, {
        default: () => f("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${r}-scrollbar-content`, this.contentClass]
        }, t)
      })), a ? null : c(void 0, void 0), d && f("div", {
        ref: "xRailRef",
        class: [`${r}-scrollbar-rail`, `${r}-scrollbar-rail--horizontal`, `${r}-scrollbar-rail--horizontal--${s}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, f(u ? ha : Tt, u ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? f("div", {
          class: `${r}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: i ? this.xBarLeftPx : void 0,
            left: i ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, g = this.container ? v() : f(Tr, {
      onResize: this.handleContainerResize
    }, {
      default: v
    });
    return a ? f(je, null, g, c(this.themeClass, this.cssVars)) : g;
  }
}), Hu = An;
function Ys(e) {
  return Array.isArray(e) ? e : [e];
}
const Ba = {
  STOP: "STOP"
};
function ju(e, t) {
  const r = t(e);
  e.children !== void 0 && r !== Ba.STOP && e.children.forEach((o) => ju(o, t));
}
function Ix(e, t = {}) {
  const { preserveGroup: r = !1 } = t, o = [], i = r ? (l) => {
    l.isLeaf || (o.push(l.key), a(l.children));
  } : (l) => {
    l.isLeaf || (l.isGroup || o.push(l.key), a(l.children));
  };
  function a(l) {
    l.forEach(i);
  }
  return a(e), o;
}
function Lx(e, t) {
  const { isLeaf: r } = e;
  return r !== void 0 ? r : !t(e);
}
function Nx(e) {
  return e.children;
}
function Hx(e) {
  return e.key;
}
function jx() {
  return !1;
}
function _x(e, t) {
  const { isLeaf: r } = e;
  return !(r === !1 && !Array.isArray(t(e)));
}
function Wx(e) {
  return e.disabled === !0;
}
function Vx(e, t) {
  return e.isLeaf === !1 && !Array.isArray(t(e));
}
function Ux(e, t) {
  if (e.isLeaf === !0) {
    const r = t(e);
    if (Array.isArray(r) && r.length > 0)
      return !0;
  }
  return !1;
}
function Zi(e) {
  var t;
  return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : [];
}
function Ji(e) {
  var t;
  return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : [];
}
function Kx(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) || r.add(o);
  }), Array.from(r);
}
function qx(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) && r.delete(o);
  }), Array.from(r);
}
function Gx(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function Xx(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r, o) => {
    t.set(r.key, o);
  }), (r) => {
    var o;
    return (o = t.get(r)) !== null && o !== void 0 ? o : null;
  };
}
class Yx extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function Zx(e, t, r, o) {
  return si(t.concat(e), r, o, !1);
}
function Jx(e, t) {
  const r = /* @__PURE__ */ new Set();
  return e.forEach((o) => {
    const i = t.treeNodeMap.get(o);
    if (i !== void 0) {
      let a = i.parent;
      for (; a !== null && !(a.disabled || r.has(a.key)); )
        r.add(a.key), a = a.parent;
    }
  }), r;
}
function Qx(e, t, r, o) {
  const i = si(t, r, o, !1), a = si(e, r, o, !0), l = Jx(e, r), s = [];
  return i.forEach((d) => {
    (a.has(d) || l.has(d)) && s.push(d);
  }), s.forEach((d) => i.delete(d)), i;
}
function Qi(e, t) {
  const { checkedKeys: r, keysToCheck: o, keysToUncheck: i, indeterminateKeys: a, cascade: l, leafOnly: s, checkStrategy: d, allowNotLoaded: u } = e;
  if (!l)
    return o !== void 0 ? {
      checkedKeys: Kx(r, o),
      indeterminateKeys: Array.from(a)
    } : i !== void 0 ? {
      checkedKeys: qx(r, i),
      indeterminateKeys: Array.from(a)
    } : {
      checkedKeys: Array.from(r),
      indeterminateKeys: Array.from(a)
    };
  const { levelTreeNodeMap: c } = t;
  let v;
  i !== void 0 ? v = Qx(i, r, t, u) : o !== void 0 ? v = Zx(o, r, t, u) : v = si(r, t, u, !1);
  const g = d === "parent", m = d === "child" || s, h = v, p = /* @__PURE__ */ new Set(), x = Math.max.apply(null, Array.from(c.keys()));
  for (let b = x; b >= 0; b -= 1) {
    const y = b === 0, k = c.get(b);
    for (const w of k) {
      if (w.isLeaf)
        continue;
      const { key: R, shallowLoaded: B } = w;
      if (m && B && w.children.forEach((P) => {
        !P.disabled && !P.isLeaf && P.shallowLoaded && h.has(P.key) && h.delete(P.key);
      }), w.disabled || !B)
        continue;
      let C = !0, S = !1, F = !0;
      for (const P of w.children) {
        const _ = P.key;
        if (!P.disabled) {
          if (F && (F = !1), h.has(_))
            S = !0;
          else if (p.has(_)) {
            S = !0, C = !1;
            break;
          } else if (C = !1, S)
            break;
        }
      }
      C && !F ? (g && w.children.forEach((P) => {
        !P.disabled && h.has(P.key) && h.delete(P.key);
      }), h.add(R)) : S && p.add(R), y && m && h.has(R) && h.delete(R);
    }
  }
  return {
    checkedKeys: Array.from(h),
    indeterminateKeys: Array.from(p)
  };
}
function si(e, t, r, o) {
  const { treeNodeMap: i, getChildren: a } = t, l = /* @__PURE__ */ new Set(), s = new Set(e);
  return e.forEach((d) => {
    const u = i.get(d);
    u !== void 0 && ju(u, (c) => {
      if (c.disabled)
        return Ba.STOP;
      const { key: v } = c;
      if (!l.has(v) && (l.add(v), s.add(v), Vx(c.rawNode, a))) {
        if (o)
          return Ba.STOP;
        if (!r)
          throw new Yx();
      }
    });
  }), s;
}
function e1(e, { includeGroup: t = !1, includeSelf: r = !0 }, o) {
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
    !l.ignored && (t || !l.isGroup) && s.treeNodePath.push(l), l = l.parent;
  return s.treeNodePath.reverse(), r || s.treeNodePath.pop(), s.keyPath = s.treeNodePath.map((d) => d.key), s;
}
function t1(e) {
  if (e.length === 0)
    return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function n1(e, t) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return t ? r[(i + 1) % o] : i === r.length - 1 ? null : r[i + 1];
}
function Zs(e, t, { loop: r = !1, includeDisabled: o = !1 } = {}) {
  const i = t === "prev" ? r1 : n1, a = {
    reverse: t === "prev"
  };
  let l = !1, s = null;
  function d(u) {
    if (u !== null) {
      if (u === e) {
        if (!l)
          l = !0;
        else if (!e.disabled && !e.isGroup) {
          s = e;
          return;
        }
      } else if ((!u.disabled || o) && !u.ignored && !u.isGroup) {
        s = u;
        return;
      }
      if (u.isGroup) {
        const c = xl(u, a);
        c !== null ? s = c : d(i(u, r));
      } else {
        const c = i(u, !1);
        if (c !== null)
          d(c);
        else {
          const v = o1(u);
          v != null && v.isGroup ? d(i(v, r)) : r && d(i(u, !0));
        }
      }
    }
  }
  return d(e), s;
}
function r1(e, t) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return t ? r[(i - 1 + o) % o] : i === 0 ? null : r[i - 1];
}
function o1(e) {
  return e.parent;
}
function xl(e, t = {}) {
  const { reverse: r = !1 } = t, { children: o } = e;
  if (o) {
    const { length: i } = o, a = r ? i - 1 : 0, l = r ? -1 : i, s = r ? -1 : 1;
    for (let d = a; d !== l; d += s) {
      const u = o[d];
      if (!u.disabled && !u.ignored)
        if (u.isGroup) {
          const c = xl(u, t);
          if (c !== null)
            return c;
        } else
          return u;
    }
  }
  return null;
}
const i1 = {
  getChild() {
    return this.ignored ? null : xl(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return Zs(this, "next", e);
  },
  getPrev(e = {}) {
    return Zs(this, "prev", e);
  }
};
function a1(e, t) {
  const r = t ? new Set(t) : void 0, o = [];
  function i(a) {
    a.forEach((l) => {
      o.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || // normal non-leaf node
      r === void 0 || r.has(l.key)) && i(l.children);
    });
  }
  return i(e), o;
}
function l1(e, t) {
  const r = e.key;
  for (; t; ) {
    if (t.key === r)
      return !0;
    t = t.parent;
  }
  return !1;
}
function _u(e, t, r, o, i, a = null, l = 0) {
  const s = [];
  return e.forEach((d, u) => {
    var c;
    process.env.NODE_ENV !== "production" && Ux(d, i) && console.error("[treemate]: node", d, "is invalid");
    const v = Object.create(o);
    if (v.rawNode = d, v.siblings = s, v.level = l, v.index = u, v.isFirstChild = u === 0, v.isLastChild = u + 1 === e.length, v.parent = a, !v.ignored) {
      const g = i(d);
      Array.isArray(g) && (v.children = _u(g, t, r, o, i, v, l + 1));
    }
    s.push(v), t.set(v.key, v), r.has(l) || r.set(l, []), (c = r.get(l)) === null || c === void 0 || c.push(v);
  }), s;
}
function Ci(e, t = {}) {
  var r;
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), { getDisabled: a = Wx, getIgnored: l = jx, getIsGroup: s = Gx, getKey: d = Hx } = t, u = (r = t.getChildren) !== null && r !== void 0 ? r : Nx, c = t.ignoreEmptyChildren ? (w) => {
    const R = u(w);
    return Array.isArray(R) ? R.length ? R : null : R;
  } : u, v = Object.assign({
    get key() {
      return d(this.rawNode);
    },
    get disabled() {
      return a(this.rawNode);
    },
    get isGroup() {
      return s(this.rawNode);
    },
    get isLeaf() {
      return Lx(this.rawNode, c);
    },
    get shallowLoaded() {
      return _x(this.rawNode, c);
    },
    get ignored() {
      return l(this.rawNode);
    },
    contains(w) {
      return l1(this, w);
    }
  }, i1), g = _u(e, o, i, v, c);
  function m(w) {
    if (w == null)
      return null;
    const R = o.get(w);
    return R && !R.isGroup && !R.ignored ? R : null;
  }
  function h(w) {
    if (w == null)
      return null;
    const R = o.get(w);
    return R && !R.ignored ? R : null;
  }
  function p(w, R) {
    const B = h(w);
    return B ? B.getPrev(R) : null;
  }
  function x(w, R) {
    const B = h(w);
    return B ? B.getNext(R) : null;
  }
  function b(w) {
    const R = h(w);
    return R ? R.getParent() : null;
  }
  function y(w) {
    const R = h(w);
    return R ? R.getChild() : null;
  }
  const k = {
    treeNodes: g,
    treeNodeMap: o,
    levelTreeNodeMap: i,
    maxLevel: Math.max(...i.keys()),
    getChildren: c,
    getFlattenedNodes(w) {
      return a1(g, w);
    },
    getNode: m,
    getPrev: p,
    getNext: x,
    getParent: b,
    getChild: y,
    getFirstAvailableNode() {
      return t1(g);
    },
    getPath(w, R = {}) {
      return e1(w, R, k);
    },
    getCheckedKeys(w, R = {}) {
      const { cascade: B = !0, leafOnly: C = !1, checkStrategy: S = "all", allowNotLoaded: F = !1 } = R;
      return Qi({
        checkedKeys: Zi(w),
        indeterminateKeys: Ji(w),
        cascade: B,
        leafOnly: C,
        checkStrategy: S,
        allowNotLoaded: F
      }, k);
    },
    check(w, R, B = {}) {
      const { cascade: C = !0, leafOnly: S = !1, checkStrategy: F = "all", allowNotLoaded: P = !1 } = B;
      return Qi({
        checkedKeys: Zi(R),
        indeterminateKeys: Ji(R),
        keysToCheck: w == null ? [] : Ys(w),
        cascade: C,
        leafOnly: S,
        checkStrategy: F,
        allowNotLoaded: P
      }, k);
    },
    uncheck(w, R, B = {}) {
      const { cascade: C = !0, leafOnly: S = !1, checkStrategy: F = "all", allowNotLoaded: P = !1 } = B;
      return Qi({
        checkedKeys: Zi(R),
        indeterminateKeys: Ji(R),
        keysToUncheck: w == null ? [] : Ys(w),
        cascade: C,
        leafOnly: S,
        checkStrategy: F,
        allowNotLoaded: P
      }, k);
    },
    getNonLeafKeys(w = {}) {
      return Ix(g, w);
    }
  };
  return k;
}
const s1 = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function d1(e) {
  const {
    textColorDisabled: t,
    iconColor: r,
    textColor2: o,
    fontSizeTiny: i,
    fontSizeSmall: a,
    fontSizeMedium: l,
    fontSizeLarge: s,
    fontSizeHuge: d
  } = e;
  return Object.assign(Object.assign({}, s1), {
    fontSizeTiny: i,
    fontSizeSmall: a,
    fontSizeMedium: l,
    fontSizeLarge: s,
    fontSizeHuge: d,
    textColor: t,
    iconColor: r,
    extraTextColor: o
  });
}
const yl = {
  name: "Empty",
  common: Ze,
  self: d1
}, u1 = z("empty", `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [M("icon", `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [D("+", [M("description", `
 margin-top: 8px;
 `)])]), M("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), M("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]), c1 = Object.assign(Object.assign({}, ve.props), {
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
}), Mr = J({
  name: "Empty",
  props: c1,
  slots: Object,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r,
      mergedComponentPropsRef: o
    } = Ae(e), i = ve("Empty", "-empty", u1, yl, e, t), {
      localeRef: a
    } = lr("Empty"), l = A(() => {
      var c, v, g;
      return (c = e.description) !== null && c !== void 0 ? c : (g = (v = o == null ? void 0 : o.value) === null || v === void 0 ? void 0 : v.Empty) === null || g === void 0 ? void 0 : g.description;
    }), s = A(() => {
      var c, v;
      return ((v = (c = o == null ? void 0 : o.value) === null || c === void 0 ? void 0 : c.Empty) === null || v === void 0 ? void 0 : v.renderIcon) || (() => f(Cx, null));
    }), d = A(() => {
      const {
        size: c
      } = e, {
        common: {
          cubicBezierEaseInOut: v
        },
        self: {
          [Z("iconSize", c)]: g,
          [Z("fontSize", c)]: m,
          textColor: h,
          iconColor: p,
          extraTextColor: x
        }
      } = i.value;
      return {
        "--n-icon-size": g,
        "--n-font-size": m,
        "--n-bezier": v,
        "--n-text-color": h,
        "--n-icon-color": p,
        "--n-extra-text-color": x
      };
    }), u = r ? Ye("empty", A(() => {
      let c = "";
      const {
        size: v
      } = e;
      return c += v[0], c;
    }), d, e) : void 0;
    return {
      mergedClsPrefix: t,
      mergedRenderIcon: s,
      localizedDescription: A(() => l.value || a.value.description),
      cssVars: r ? void 0 : d,
      themeClass: u == null ? void 0 : u.themeClass,
      onRender: u == null ? void 0 : u.onRender
    };
  },
  render() {
    const {
      $slots: e,
      mergedClsPrefix: t,
      onRender: r
    } = this;
    return r == null || r(), f("div", {
      class: [`${t}-empty`, this.themeClass],
      style: this.cssVars
    }, this.showIcon ? f("div", {
      class: `${t}-empty__icon`
    }, e.icon ? e.icon() : f(yt, {
      clsPrefix: t
    }, {
      default: this.mergedRenderIcon
    })) : null, this.showDescription ? f("div", {
      class: `${t}-empty__description`
    }, e.default ? e.default() : this.localizedDescription) : null, e.extra ? f("div", {
      class: `${t}-empty__extra`
    }, e.extra()) : null);
  }
}), f1 = {
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
function h1(e) {
  const {
    borderRadius: t,
    popoverColor: r,
    textColor3: o,
    dividerColor: i,
    textColor2: a,
    primaryColorPressed: l,
    textColorDisabled: s,
    primaryColor: d,
    opacityDisabled: u,
    hoverColor: c,
    fontSizeTiny: v,
    fontSizeSmall: g,
    fontSizeMedium: m,
    fontSizeLarge: h,
    fontSizeHuge: p,
    heightTiny: x,
    heightSmall: b,
    heightMedium: y,
    heightLarge: k,
    heightHuge: w
  } = e;
  return Object.assign(Object.assign({}, f1), {
    optionFontSizeTiny: v,
    optionFontSizeSmall: g,
    optionFontSizeMedium: m,
    optionFontSizeLarge: h,
    optionFontSizeHuge: p,
    optionHeightTiny: x,
    optionHeightSmall: b,
    optionHeightMedium: y,
    optionHeightLarge: k,
    optionHeightHuge: w,
    borderRadius: t,
    color: r,
    groupHeaderTextColor: o,
    actionDividerColor: i,
    optionTextColor: a,
    optionTextColorPressed: l,
    optionTextColorDisabled: s,
    optionTextColorActive: d,
    optionOpacityDisabled: u,
    optionCheckColor: d,
    optionColorPending: c,
    optionColorActive: "rgba(0, 0, 0, 0)",
    optionColorActivePending: c,
    actionTextColor: a,
    loadingColor: d
  });
}
const Cl = {
  name: "InternalSelectMenu",
  common: Ze,
  peers: {
    Scrollbar: Ur,
    Empty: yl
  },
  self: h1
}, Js = J({
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
      renderOptionRef: t,
      labelFieldRef: r,
      nodePropsRef: o
    } = pe(Ka);
    return {
      labelField: r,
      nodeProps: o,
      renderLabel: e,
      renderOption: t
    };
  },
  render() {
    const {
      clsPrefix: e,
      renderLabel: t,
      renderOption: r,
      nodeProps: o,
      tmNode: {
        rawNode: i
      }
    } = this, a = o == null ? void 0 : o(i), l = t ? t(i, !1) : gt(i[this.labelField], i, !1), s = f("div", Object.assign({}, a, {
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
});
function v1(e, t) {
  return f(Tt, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => e ? f(yt, {
      clsPrefix: t,
      class: `${t}-base-select-option__check`
    }, {
      default: () => f(mx)
    }) : null
  });
}
const Qs = J({
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
      valueRef: t,
      pendingTmNodeRef: r,
      multipleRef: o,
      valueSetRef: i,
      renderLabelRef: a,
      renderOptionRef: l,
      labelFieldRef: s,
      valueFieldRef: d,
      showCheckmarkRef: u,
      nodePropsRef: c,
      handleOptionClick: v,
      handleOptionMouseEnter: g
    } = pe(Ka), m = qe(() => {
      const {
        value: b
      } = r;
      return b ? e.tmNode.key === b.key : !1;
    });
    function h(b) {
      const {
        tmNode: y
      } = e;
      y.disabled || v(b, y);
    }
    function p(b) {
      const {
        tmNode: y
      } = e;
      y.disabled || g(b, y);
    }
    function x(b) {
      const {
        tmNode: y
      } = e, {
        value: k
      } = m;
      y.disabled || k || g(b, y);
    }
    return {
      multiple: o,
      isGrouped: qe(() => {
        const {
          tmNode: b
        } = e, {
          parent: y
        } = b;
        return y && y.rawNode.type === "group";
      }),
      showCheckmark: u,
      nodeProps: c,
      isPending: m,
      isSelected: qe(() => {
        const {
          value: b
        } = t, {
          value: y
        } = o;
        if (b === null) return !1;
        const k = e.tmNode.rawNode[d.value];
        if (y) {
          const {
            value: w
          } = i;
          return w.has(k);
        } else
          return b === k;
      }),
      labelField: s,
      renderLabel: a,
      renderOption: l,
      handleMouseMove: x,
      handleMouseEnter: p,
      handleClick: h
    };
  },
  render() {
    const {
      clsPrefix: e,
      tmNode: {
        rawNode: t
      },
      isSelected: r,
      isPending: o,
      isGrouped: i,
      showCheckmark: a,
      nodeProps: l,
      renderOption: s,
      renderLabel: d,
      handleClick: u,
      handleMouseEnter: c,
      handleMouseMove: v
    } = this, g = v1(r, e), m = d ? [d(t, r), a && g] : [gt(t[this.labelField], t, r), a && g], h = l == null ? void 0 : l(t), p = f("div", Object.assign({}, h, {
      class: [`${e}-base-select-option`, t.class, h == null ? void 0 : h.class, {
        [`${e}-base-select-option--disabled`]: t.disabled,
        [`${e}-base-select-option--selected`]: r,
        [`${e}-base-select-option--grouped`]: i,
        [`${e}-base-select-option--pending`]: o,
        [`${e}-base-select-option--show-checkmark`]: a
      }],
      style: [(h == null ? void 0 : h.style) || "", t.style || ""],
      onClick: co([u, h == null ? void 0 : h.onClick]),
      onMouseenter: co([c, h == null ? void 0 : h.onMouseenter]),
      onMousemove: co([v, h == null ? void 0 : h.onMousemove])
    }), f("div", {
      class: `${e}-base-select-option__content`
    }, m));
    return t.render ? t.render({
      node: p,
      option: t,
      selected: r
    }) : s ? s({
      node: p,
      option: t,
      selected: r
    }) : p;
  }
}), {
  cubicBezierEaseIn: ed,
  cubicBezierEaseOut: td
} = sn;
function zo({
  transformOrigin: e = "inherit",
  duration: t = ".2s",
  enterScale: r = ".9",
  originalTransform: o = "",
  originalTransition: i = ""
} = {}) {
  return [D("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${t} ${ed}, transform ${t} ${ed} ${i && `,${i}`}`
  }), D("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${t} ${td}, transform ${t} ${td} ${i && `,${i}`}`
  }), D("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${o} scale(${r})`
  }), D("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${o} scale(1)`
  })];
}
const g1 = z("base-select-menu", `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [z("scrollbar", `
 max-height: var(--n-height);
 `), z("virtual-list", `
 max-height: var(--n-height);
 `), z("base-select-option", `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [M("content", `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), z("base-select-group-header", `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), z("base-select-menu-option-wrapper", `
 position: relative;
 width: 100%;
 `), M("loading, empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), M("loading", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), M("header", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), M("action", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), z("base-select-group-header", `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), z("base-select-option", `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [N("show-checkmark", `
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `), D("&::before", `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), D("&:active", `
 color: var(--n-option-text-color-pressed);
 `), N("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), N("pending", [D("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), N("selected", `
 color: var(--n-option-text-color-active);
 `, [D("&::before", `
 background-color: var(--n-option-color-active);
 `), N("pending", [D("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), N("disabled", `
 cursor: not-allowed;
 `, [Je("selected", `
 color: var(--n-option-text-color-disabled);
 `), N("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), M("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [zo({
  enterScale: "0.5"
})])])]), Wu = J({
  name: "InternalSelectMenu",
  props: Object.assign(Object.assign({}, ve.props), {
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
      mergedClsPrefixRef: t,
      mergedRtlRef: r
    } = Ae(e), o = Ft("InternalSelectMenu", r, t), i = ve("InternalSelectMenu", "-internal-select-menu", g1, Cl, e, ie(e, "clsPrefix")), a = I(null), l = I(null), s = I(null), d = A(() => e.treeMate.getFlattenedNodes()), u = A(() => Xx(d.value)), c = I(null);
    function v() {
      const {
        treeMate: j
      } = e;
      let q = null;
      const {
        value: Y
      } = e;
      Y === null ? q = j.getFirstAvailableNode() : (e.multiple ? q = j.getNode((Y || [])[(Y || []).length - 1]) : q = j.getNode(Y), (!q || q.disabled) && (q = j.getFirstAvailableNode())), E(q || null);
    }
    function g() {
      const {
        value: j
      } = c;
      j && !e.treeMate.getNode(j.key) && (c.value = null);
    }
    let m;
    Ie(() => e.show, (j) => {
      j ? m = Ie(() => e.treeMate, () => {
        e.resetMenuOnOptionsChange ? (e.autoPending ? v() : g(), pt(T)) : g();
      }, {
        immediate: !0
      }) : m == null || m();
    }, {
      immediate: !0
    }), St(() => {
      m == null || m();
    });
    const h = A(() => Et(i.value.self[Z("optionHeight", e.size)])), p = A(() => Wt(i.value.self[Z("padding", e.size)])), x = A(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), b = A(() => {
      const j = d.value;
      return j && j.length === 0;
    });
    function y(j) {
      const {
        onToggle: q
      } = e;
      q && q(j);
    }
    function k(j) {
      const {
        onScroll: q
      } = e;
      q && q(j);
    }
    function w(j) {
      var q;
      (q = s.value) === null || q === void 0 || q.sync(), k(j);
    }
    function R() {
      var j;
      (j = s.value) === null || j === void 0 || j.sync();
    }
    function B() {
      const {
        value: j
      } = c;
      return j || null;
    }
    function C(j, q) {
      q.disabled || E(q, !1);
    }
    function S(j, q) {
      q.disabled || y(q);
    }
    function F(j) {
      var q;
      Zt(j, "action") || (q = e.onKeyup) === null || q === void 0 || q.call(e, j);
    }
    function P(j) {
      var q;
      Zt(j, "action") || (q = e.onKeydown) === null || q === void 0 || q.call(e, j);
    }
    function _(j) {
      var q;
      (q = e.onMousedown) === null || q === void 0 || q.call(e, j), !e.focusable && j.preventDefault();
    }
    function O() {
      const {
        value: j
      } = c;
      j && E(j.getNext({
        loop: !0
      }), !0);
    }
    function n() {
      const {
        value: j
      } = c;
      j && E(j.getPrev({
        loop: !0
      }), !0);
    }
    function E(j, q = !1) {
      c.value = j, q && T();
    }
    function T() {
      var j, q;
      const Y = c.value;
      if (!Y) return;
      const ae = u.value(Y.key);
      ae !== null && (e.virtualScroll ? (j = l.value) === null || j === void 0 || j.scrollTo({
        index: ae
      }) : (q = s.value) === null || q === void 0 || q.scrollTo({
        index: ae,
        elSize: h.value
      }));
    }
    function H(j) {
      var q, Y;
      !((q = a.value) === null || q === void 0) && q.contains(j.target) && ((Y = e.onFocus) === null || Y === void 0 || Y.call(e, j));
    }
    function L(j) {
      var q, Y;
      !((q = a.value) === null || q === void 0) && q.contains(j.relatedTarget) || (Y = e.onBlur) === null || Y === void 0 || Y.call(e, j);
    }
    $e(Ka, {
      handleOptionMouseEnter: C,
      handleOptionClick: S,
      valueSetRef: x,
      pendingTmNodeRef: c,
      nodePropsRef: ie(e, "nodeProps"),
      showCheckmarkRef: ie(e, "showCheckmark"),
      multipleRef: ie(e, "multiple"),
      valueRef: ie(e, "value"),
      renderLabelRef: ie(e, "renderLabel"),
      renderOptionRef: ie(e, "renderOption"),
      labelFieldRef: ie(e, "labelField"),
      valueFieldRef: ie(e, "valueField")
    }), $e(Ld, a), $t(() => {
      const {
        value: j
      } = s;
      j && j.sync();
    });
    const U = A(() => {
      const {
        size: j
      } = e, {
        common: {
          cubicBezierEaseInOut: q
        },
        self: {
          height: Y,
          borderRadius: ae,
          color: le,
          groupHeaderTextColor: ce,
          actionDividerColor: be,
          optionTextColorPressed: G,
          optionTextColor: ue,
          optionTextColorDisabled: Fe,
          optionTextColorActive: xe,
          optionOpacityDisabled: Pe,
          optionCheckColor: ze,
          actionTextColor: dt,
          optionColorPending: rt,
          optionColorActive: ft,
          loadingColor: ht,
          loadingSize: ye,
          optionColorActivePending: Ce,
          [Z("optionFontSize", j)]: De,
          [Z("optionHeight", j)]: Le,
          [Z("optionPadding", j)]: et
        }
      } = i.value;
      return {
        "--n-height": Y,
        "--n-action-divider-color": be,
        "--n-action-text-color": dt,
        "--n-bezier": q,
        "--n-border-radius": ae,
        "--n-color": le,
        "--n-option-font-size": De,
        "--n-group-header-text-color": ce,
        "--n-option-check-color": ze,
        "--n-option-color-pending": rt,
        "--n-option-color-active": ft,
        "--n-option-color-active-pending": Ce,
        "--n-option-height": Le,
        "--n-option-opacity-disabled": Pe,
        "--n-option-text-color": ue,
        "--n-option-text-color-active": xe,
        "--n-option-text-color-disabled": Fe,
        "--n-option-text-color-pressed": G,
        "--n-option-padding": et,
        "--n-option-padding-left": Wt(et, "left"),
        "--n-option-padding-right": Wt(et, "right"),
        "--n-loading-color": ht,
        "--n-loading-size": ye
      };
    }), {
      inlineThemeDisabled: te
    } = e, X = te ? Ye("internal-select-menu", A(() => e.size[0]), U, e) : void 0, K = {
      selfRef: a,
      next: O,
      prev: n,
      getPendingTmNode: B
    };
    return ru(a, e.onResize), Object.assign({
      mergedTheme: i,
      mergedClsPrefix: t,
      rtlEnabled: o,
      virtualListRef: l,
      scrollbarRef: s,
      itemSize: h,
      padding: p,
      flattenedNodes: d,
      empty: b,
      virtualListContainer() {
        const {
          value: j
        } = l;
        return j == null ? void 0 : j.listElRef;
      },
      virtualListContent() {
        const {
          value: j
        } = l;
        return j == null ? void 0 : j.itemsElRef;
      },
      doScroll: k,
      handleFocusin: H,
      handleFocusout: L,
      handleKeyUp: F,
      handleKeyDown: P,
      handleMouseDown: _,
      handleVirtualListResize: R,
      handleVirtualListScroll: w,
      cssVars: te ? void 0 : U,
      themeClass: X == null ? void 0 : X.themeClass,
      onRender: X == null ? void 0 : X.onRender
    }, K);
  },
  render() {
    const {
      $slots: e,
      virtualScroll: t,
      clsPrefix: r,
      mergedTheme: o,
      themeClass: i,
      onRender: a
    } = this;
    return a == null || a(), f("div", {
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
    }, We(e.header, (l) => l && f("div", {
      class: `${r}-base-select-menu__header`,
      "data-header": !0,
      key: "header"
    }, l)), this.loading ? f("div", {
      class: `${r}-base-select-menu__loading`
    }, f(Gn, {
      clsPrefix: r,
      strokeWidth: 20
    })) : this.empty ? f("div", {
      class: `${r}-base-select-menu__empty`,
      "data-empty": !0
    }, tn(e.empty, () => [f(Mr, {
      theme: o.peers.Empty,
      themeOverrides: o.peerOverrides.Empty,
      size: this.size
    })])) : f(An, {
      ref: "scrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: t ? this.virtualListContainer : void 0,
      content: t ? this.virtualListContent : void 0,
      onScroll: t ? void 0 : this.doScroll
    }, {
      default: () => t ? f(tl, {
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
        }) => l.isGroup ? f(Js, {
          key: l.key,
          clsPrefix: r,
          tmNode: l
        }) : l.ignored ? null : f(Qs, {
          clsPrefix: r,
          key: l.key,
          tmNode: l
        })
      }) : f("div", {
        class: `${r}-base-select-menu-option-wrapper`,
        style: {
          paddingTop: this.padding.top,
          paddingBottom: this.padding.bottom
        }
      }, this.flattenedNodes.map((l) => l.isGroup ? f(Js, {
        key: l.key,
        clsPrefix: r,
        tmNode: l
      }) : f(Qs, {
        clsPrefix: r,
        key: l.key,
        tmNode: l
      })))
    }), We(e.action, (l) => l && [f("div", {
      class: `${r}-base-select-menu__action`,
      "data-action": !0,
      key: "action"
    }, l), f(Px, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
}), p1 = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function m1(e) {
  const {
    boxShadow2: t,
    popoverColor: r,
    textColor2: o,
    borderRadius: i,
    fontSize: a,
    dividerColor: l
  } = e;
  return Object.assign(Object.assign({}, p1), {
    fontSize: a,
    borderRadius: i,
    color: r,
    dividerColor: l,
    textColor: o,
    boxShadow: t
  });
}
const yr = {
  name: "Popover",
  common: Ze,
  self: m1
}, ea = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Bt = "var(--n-arrow-height) * 1.414", b1 = D([z("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [D(">", [z("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Je("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [Je("scrollable", [Je("show-header-or-footer", "padding: var(--n-padding);")])]), M("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), M("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), N("scrollable, show-header-or-footer", [M("content", `
 padding: var(--n-padding);
 `)])]), z("popover-shared", `
 transform-origin: inherit;
 `, [
  z("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [z("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Bt});
 height: calc(${Bt});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
  // body transition
  D("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  D("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  D("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  D("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), on("top-start", `
 top: calc(${Bt} / -2);
 left: calc(${kn("top-start")} - var(--v-offset-left));
 `), on("top", `
 top: calc(${Bt} / -2);
 transform: translateX(calc(${Bt} / -2)) rotate(45deg);
 left: 50%;
 `), on("top-end", `
 top: calc(${Bt} / -2);
 right: calc(${kn("top-end")} + var(--v-offset-left));
 `), on("bottom-start", `
 bottom: calc(${Bt} / -2);
 left: calc(${kn("bottom-start")} - var(--v-offset-left));
 `), on("bottom", `
 bottom: calc(${Bt} / -2);
 transform: translateX(calc(${Bt} / -2)) rotate(45deg);
 left: 50%;
 `), on("bottom-end", `
 bottom: calc(${Bt} / -2);
 right: calc(${kn("bottom-end")} + var(--v-offset-left));
 `), on("left-start", `
 left: calc(${Bt} / -2);
 top: calc(${kn("left-start")} - var(--v-offset-top));
 `), on("left", `
 left: calc(${Bt} / -2);
 transform: translateY(calc(${Bt} / -2)) rotate(45deg);
 top: 50%;
 `), on("left-end", `
 left: calc(${Bt} / -2);
 bottom: calc(${kn("left-end")} + var(--v-offset-top));
 `), on("right-start", `
 right: calc(${Bt} / -2);
 top: calc(${kn("right-start")} - var(--v-offset-top));
 `), on("right", `
 right: calc(${Bt} / -2);
 transform: translateY(calc(${Bt} / -2)) rotate(45deg);
 top: 50%;
 `), on("right-end", `
 right: calc(${Bt} / -2);
 bottom: calc(${kn("right-end")} + var(--v-offset-top));
 `), ...cx({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, t) => {
  const r = ["right", "left"].includes(t), o = r ? "width" : "height";
  return e.map((i) => {
    const a = i.split("-")[1] === "end", s = `calc((${`var(--v-target-${o}, 0px)`} - ${Bt}) / 2)`, d = kn(i);
    return D(`[v-placement="${i}"] >`, [z("popover-shared", [N("center-arrow", [z("popover-arrow", `${t}: calc(max(${s}, ${d}) ${a ? "+" : "-"} var(--v-offset-${r ? "left" : "top"}));`)])])]);
  });
})]);
function kn(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function on(e, t) {
  const r = e.split("-")[0], o = ["top", "bottom"].includes(r) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return D(`[v-placement="${e}"] >`, [z("popover-shared", `
 margin-${ea[r]}: var(--n-space);
 `, [N("show-arrow", `
 margin-${ea[r]}: var(--n-space-arrow);
 `), N("overlap", `
 margin: 0;
 `), ah("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${ea[r]}: auto;
 ${o}
 `, [z("popover-arrow", t)])])]);
}
const Vu = Object.assign(Object.assign({}, ve.props), {
  to: yn.propTo,
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
function Uu({
  arrowClass: e,
  arrowStyle: t,
  arrowWrapperClass: r,
  arrowWrapperStyle: o,
  clsPrefix: i
}) {
  return f("div", {
    key: "__popover-arrow__",
    style: o,
    class: [`${i}-popover-arrow-wrapper`, r]
  }, f("div", {
    class: [`${i}-popover-arrow`, e],
    style: t
  }));
}
const x1 = J({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: Vu,
  setup(e, {
    slots: t,
    attrs: r
  }) {
    const {
      namespaceRef: o,
      mergedClsPrefixRef: i,
      inlineThemeDisabled: a
    } = Ae(e), l = ve("Popover", "-popover", b1, yr, e, i), s = I(null), d = pe("NPopover"), u = I(null), c = I(e.show), v = I(!1);
    nt(() => {
      const {
        show: C
      } = e;
      C && !S0() && !e.internalDeactivateImmediately && (v.value = !0);
    });
    const g = A(() => {
      const {
        trigger: C,
        onClickoutside: S
      } = e, F = [], {
        positionManuallyRef: {
          value: P
        }
      } = d;
      return P || (C === "click" && !S && F.push([Er, w, void 0, {
        capture: !0
      }]), C === "hover" && F.push([Th, k])), S && F.push([Er, w, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && v.value) && F.push([jn, e.show]), F;
    }), m = A(() => {
      const {
        common: {
          cubicBezierEaseInOut: C,
          cubicBezierEaseIn: S,
          cubicBezierEaseOut: F
        },
        self: {
          space: P,
          spaceArrow: _,
          padding: O,
          fontSize: n,
          textColor: E,
          dividerColor: T,
          color: H,
          boxShadow: L,
          borderRadius: U,
          arrowHeight: te,
          arrowOffset: X,
          arrowOffsetVertical: K
        }
      } = l.value;
      return {
        "--n-box-shadow": L,
        "--n-bezier": C,
        "--n-bezier-ease-in": S,
        "--n-bezier-ease-out": F,
        "--n-font-size": n,
        "--n-text-color": E,
        "--n-color": H,
        "--n-divider-color": T,
        "--n-border-radius": U,
        "--n-arrow-height": te,
        "--n-arrow-offset": X,
        "--n-arrow-offset-vertical": K,
        "--n-padding": O,
        "--n-space": P,
        "--n-space-arrow": _
      };
    }), h = A(() => {
      const C = e.width === "trigger" ? void 0 : mt(e.width), S = [];
      C && S.push({
        width: C
      });
      const {
        maxWidth: F,
        minWidth: P
      } = e;
      return F && S.push({
        maxWidth: mt(F)
      }), P && S.push({
        maxWidth: mt(P)
      }), a || S.push(m.value), S;
    }), p = a ? Ye("popover", void 0, m, e) : void 0;
    d.setBodyInstance({
      syncPosition: x
    }), St(() => {
      d.setBodyInstance(null);
    }), Ie(ie(e, "show"), (C) => {
      e.animated || (C ? c.value = !0 : c.value = !1);
    });
    function x() {
      var C;
      (C = s.value) === null || C === void 0 || C.syncPosition();
    }
    function b(C) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && d.handleMouseEnter(C);
    }
    function y(C) {
      e.trigger === "hover" && e.keepAliveOnHover && d.handleMouseLeave(C);
    }
    function k(C) {
      e.trigger === "hover" && !R().contains(Dr(C)) && d.handleMouseMoveOutside(C);
    }
    function w(C) {
      (e.trigger === "click" && !R().contains(Dr(C)) || e.onClickoutside) && d.handleClickOutside(C);
    }
    function R() {
      return d.getTriggerElement();
    }
    $e(Hr, u), $e(ko, null), $e(Ro, null);
    function B() {
      if (p == null || p.onRender(), !(e.displayDirective === "show" || e.show || e.animated && v.value))
        return null;
      let S;
      const F = d.internalRenderBodyRef.value, {
        value: P
      } = i;
      if (F)
        S = F(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${P}-popover-shared`, p == null ? void 0 : p.themeClass.value, e.overlap && `${P}-popover-shared--overlap`, e.showArrow && `${P}-popover-shared--show-arrow`, e.arrowPointToCenter && `${P}-popover-shared--center-arrow`],
          u,
          h.value,
          b,
          y
        );
      else {
        const {
          value: _
        } = d.extraClassRef, {
          internalTrapFocus: O
        } = e, n = !zr(t.header) || !zr(t.footer), E = () => {
          var T, H;
          const L = n ? f(je, null, We(t.header, (X) => X ? f("div", {
            class: [`${P}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, X) : null), We(t.default, (X) => X ? f("div", {
            class: [`${P}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t) : null), We(t.footer, (X) => X ? f("div", {
            class: [`${P}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, X) : null)) : e.scrollable ? (T = t.default) === null || T === void 0 ? void 0 : T.call(t) : f("div", {
            class: [`${P}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t), U = e.scrollable ? f(Hu, {
            contentClass: n ? void 0 : `${P}-popover__content ${(H = e.contentClass) !== null && H !== void 0 ? H : ""}`,
            contentStyle: n ? void 0 : e.contentStyle
          }, {
            default: () => L
          }) : L, te = e.showArrow ? Uu({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: P
          }) : null;
          return [U, te];
        };
        S = f("div", kt({
          class: [`${P}-popover`, `${P}-popover-shared`, p == null ? void 0 : p.themeClass.value, _.map((T) => `${P}-${T}`), {
            [`${P}-popover--scrollable`]: e.scrollable,
            [`${P}-popover--show-header-or-footer`]: n,
            [`${P}-popover--raw`]: e.raw,
            [`${P}-popover-shared--overlap`]: e.overlap,
            [`${P}-popover-shared--show-arrow`]: e.showArrow,
            [`${P}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: u,
          style: h.value,
          onKeydown: d.handleKeydown,
          onMouseenter: b,
          onMouseleave: y
        }, r), O ? f(nl, {
          active: e.show,
          autoFocus: !0
        }, {
          default: E
        }) : E());
      }
      return nn(S, g.value);
    }
    return {
      displayed: v,
      namespace: o,
      isMounted: d.isMountedRef,
      zIndex: d.zIndexRef,
      followerRef: s,
      adjustedTo: yn(e),
      followerEnabled: c,
      renderContentNode: B
    };
  },
  render() {
    return f(Qa, {
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
      teleportDisabled: this.adjustedTo === yn.tdkey
    }, {
      default: () => this.animated ? f(Tt, {
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
}), y1 = Object.keys(Vu), C1 = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function w1(e, t, r) {
  C1[t].forEach((o) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const i = e.props[o], a = r[o];
    i ? e.props[o] = (...l) => {
      i(...l), a(...l);
    } : e.props[o] = a;
  });
}
const sr = {
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
  to: yn.propTo,
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
}, S1 = Object.assign(Object.assign(Object.assign({}, ve.props), sr), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), Cr = J({
  name: "Popover",
  inheritAttrs: !1,
  props: S1,
  slots: Object,
  __popover__: !0,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.maxWidth !== void 0 && Qe("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && Qe("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && Qe("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && Qe("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && Qe("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const t = hr(), r = I(null), o = A(() => e.show), i = I(e.defaultShow), a = Pt(o, i), l = qe(() => e.disabled ? !1 : a.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: T
      } = e;
      return !!(T != null && T());
    }, d = () => s() ? !1 : a.value, u = Ua(e, ["arrow", "showArrow"]), c = A(() => e.overlap ? !1 : u.value);
    let v = null;
    const g = I(null), m = I(null), h = qe(() => e.x !== void 0 && e.y !== void 0);
    function p(T) {
      const {
        "onUpdate:show": H,
        onUpdateShow: L,
        onShow: U,
        onHide: te
      } = e;
      i.value = T, H && ne(H, T), L && ne(L, T), T && U && ne(U, !0), T && te && ne(te, !1);
    }
    function x() {
      v && v.syncPosition();
    }
    function b() {
      const {
        value: T
      } = g;
      T && (window.clearTimeout(T), g.value = null);
    }
    function y() {
      const {
        value: T
      } = m;
      T && (window.clearTimeout(T), m.value = null);
    }
    function k() {
      const T = s();
      if (e.trigger === "focus" && !T) {
        if (d()) return;
        p(!0);
      }
    }
    function w() {
      const T = s();
      if (e.trigger === "focus" && !T) {
        if (!d()) return;
        p(!1);
      }
    }
    function R() {
      const T = s();
      if (e.trigger === "hover" && !T) {
        if (y(), g.value !== null || d()) return;
        const H = () => {
          p(!0), g.value = null;
        }, {
          delay: L
        } = e;
        L === 0 ? H() : g.value = window.setTimeout(H, L);
      }
    }
    function B() {
      const T = s();
      if (e.trigger === "hover" && !T) {
        if (b(), m.value !== null || !d()) return;
        const H = () => {
          p(!1), m.value = null;
        }, {
          duration: L
        } = e;
        L === 0 ? H() : m.value = window.setTimeout(H, L);
      }
    }
    function C() {
      B();
    }
    function S(T) {
      var H;
      d() && (e.trigger === "click" && (b(), y(), p(!1)), (H = e.onClickoutside) === null || H === void 0 || H.call(e, T));
    }
    function F() {
      if (e.trigger === "click" && !s()) {
        b(), y();
        const T = !d();
        p(T);
      }
    }
    function P(T) {
      e.internalTrapFocus && T.key === "Escape" && (b(), y(), p(!1));
    }
    function _(T) {
      i.value = T;
    }
    function O() {
      var T;
      return (T = r.value) === null || T === void 0 ? void 0 : T.targetRef;
    }
    function n(T) {
      v = T;
    }
    return $e("NPopover", {
      getTriggerElement: O,
      handleKeydown: P,
      handleMouseEnter: R,
      handleMouseLeave: B,
      handleClickOutside: S,
      handleMouseMoveOutside: C,
      setBodyInstance: n,
      positionManuallyRef: h,
      isMountedRef: t,
      zIndexRef: ie(e, "zIndex"),
      extraClassRef: ie(e, "internalExtraClass"),
      internalRenderBodyRef: ie(e, "internalRenderBody")
    }), nt(() => {
      a.value && s() && p(!1);
    }), {
      binderInstRef: r,
      positionManually: h,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: i,
      mergedShowArrow: c,
      getMergedShow: d,
      setShow: _,
      handleClick: F,
      handleMouseEnter: R,
      handleMouseLeave: B,
      handleFocus: k,
      handleBlur: w,
      syncPosition: x
    };
  },
  render() {
    var e;
    const {
      positionManually: t,
      $slots: r
    } = this;
    let o, i = !1;
    if (!t && (o = k0(r, "trigger"), o)) {
      o = Rd(o), o = o.type === Df ? f("span", [o]) : o;
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
        } = this, s = [a, ...l], d = {
          onBlur: (u) => {
            s.forEach((c) => {
              c.onBlur(u);
            });
          },
          onFocus: (u) => {
            s.forEach((c) => {
              c.onFocus(u);
            });
          },
          onClick: (u) => {
            s.forEach((c) => {
              c.onClick(u);
            });
          },
          onMouseenter: (u) => {
            s.forEach((c) => {
              c.onMouseenter(u);
            });
          },
          onMouseleave: (u) => {
            s.forEach((c) => {
              c.onMouseleave(u);
            });
          }
        };
        w1(o, l ? "nested" : t ? "manual" : this.trigger, d);
      }
    }
    return f(Xa, {
      ref: "binderInstRef",
      syncTarget: !i,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const a = this.getMergedShow();
        return [this.internalTrapFocus && a ? nn(f("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[pi, {
          enabled: a,
          zIndex: this.zIndex
        }]]) : null, t ? null : f(Ya, null, {
          default: () => o
        }), f(x1, Rn(this.$props, y1, Object.assign(Object.assign({}, this.$attrs), {
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
}), B1 = {
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
function k1(e) {
  const {
    textColor2: t,
    primaryColorHover: r,
    primaryColorPressed: o,
    primaryColor: i,
    infoColor: a,
    successColor: l,
    warningColor: s,
    errorColor: d,
    baseColor: u,
    borderColor: c,
    opacityDisabled: v,
    tagColor: g,
    closeIconColor: m,
    closeIconColorHover: h,
    closeIconColorPressed: p,
    borderRadiusSmall: x,
    fontSizeMini: b,
    fontSizeTiny: y,
    fontSizeSmall: k,
    fontSizeMedium: w,
    heightMini: R,
    heightTiny: B,
    heightSmall: C,
    heightMedium: S,
    closeColorHover: F,
    closeColorPressed: P,
    buttonColor2Hover: _,
    buttonColor2Pressed: O,
    fontWeightStrong: n
  } = e;
  return Object.assign(Object.assign({}, B1), {
    closeBorderRadius: x,
    heightTiny: R,
    heightSmall: B,
    heightMedium: C,
    heightLarge: S,
    borderRadius: x,
    opacityDisabled: v,
    fontSizeTiny: b,
    fontSizeSmall: y,
    fontSizeMedium: k,
    fontSizeLarge: w,
    fontWeightStrong: n,
    // checked
    textColorCheckable: t,
    textColorHoverCheckable: t,
    textColorPressedCheckable: t,
    textColorChecked: u,
    colorCheckable: "#0000",
    colorHoverCheckable: _,
    colorPressedCheckable: O,
    colorChecked: i,
    colorCheckedHover: r,
    colorCheckedPressed: o,
    // default
    border: `1px solid ${c}`,
    textColor: t,
    color: g,
    colorBordered: "rgb(250, 250, 252)",
    closeIconColor: m,
    closeIconColorHover: h,
    closeIconColorPressed: p,
    closeColorHover: F,
    closeColorPressed: P,
    borderPrimary: `1px solid ${Ee(i, {
      alpha: 0.3
    })}`,
    textColorPrimary: i,
    colorPrimary: Ee(i, {
      alpha: 0.12
    }),
    colorBorderedPrimary: Ee(i, {
      alpha: 0.1
    }),
    closeIconColorPrimary: i,
    closeIconColorHoverPrimary: i,
    closeIconColorPressedPrimary: i,
    closeColorHoverPrimary: Ee(i, {
      alpha: 0.12
    }),
    closeColorPressedPrimary: Ee(i, {
      alpha: 0.18
    }),
    borderInfo: `1px solid ${Ee(a, {
      alpha: 0.3
    })}`,
    textColorInfo: a,
    colorInfo: Ee(a, {
      alpha: 0.12
    }),
    colorBorderedInfo: Ee(a, {
      alpha: 0.1
    }),
    closeIconColorInfo: a,
    closeIconColorHoverInfo: a,
    closeIconColorPressedInfo: a,
    closeColorHoverInfo: Ee(a, {
      alpha: 0.12
    }),
    closeColorPressedInfo: Ee(a, {
      alpha: 0.18
    }),
    borderSuccess: `1px solid ${Ee(l, {
      alpha: 0.3
    })}`,
    textColorSuccess: l,
    colorSuccess: Ee(l, {
      alpha: 0.12
    }),
    colorBorderedSuccess: Ee(l, {
      alpha: 0.1
    }),
    closeIconColorSuccess: l,
    closeIconColorHoverSuccess: l,
    closeIconColorPressedSuccess: l,
    closeColorHoverSuccess: Ee(l, {
      alpha: 0.12
    }),
    closeColorPressedSuccess: Ee(l, {
      alpha: 0.18
    }),
    borderWarning: `1px solid ${Ee(s, {
      alpha: 0.35
    })}`,
    textColorWarning: s,
    colorWarning: Ee(s, {
      alpha: 0.15
    }),
    colorBorderedWarning: Ee(s, {
      alpha: 0.12
    }),
    closeIconColorWarning: s,
    closeIconColorHoverWarning: s,
    closeIconColorPressedWarning: s,
    closeColorHoverWarning: Ee(s, {
      alpha: 0.12
    }),
    closeColorPressedWarning: Ee(s, {
      alpha: 0.18
    }),
    borderError: `1px solid ${Ee(d, {
      alpha: 0.23
    })}`,
    textColorError: d,
    colorError: Ee(d, {
      alpha: 0.1
    }),
    colorBorderedError: Ee(d, {
      alpha: 0.08
    }),
    closeIconColorError: d,
    closeIconColorHoverError: d,
    closeIconColorPressedError: d,
    closeColorHoverError: Ee(d, {
      alpha: 0.12
    }),
    closeColorPressedError: Ee(d, {
      alpha: 0.18
    })
  });
}
const R1 = {
  name: "Tag",
  common: Ze,
  self: k1
}, F1 = {
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
}, P1 = z("tag", `
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
`, [N("strong", `
 font-weight: var(--n-font-weight-strong);
 `), M("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), M("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), M("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), M("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), N("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [M("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), M("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), N("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), N("icon, avatar", [N("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), N("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), N("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [Je("disabled", [D("&:hover", "background-color: var(--n-color-hover-checkable);", [Je("checked", "color: var(--n-text-color-hover-checkable);")]), D("&:active", "background-color: var(--n-color-pressed-checkable);", [Je("checked", "color: var(--n-text-color-pressed-checkable);")])]), N("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [Je("disabled", [D("&:hover", "background-color: var(--n-color-checked-hover);"), D("&:active", "background-color: var(--n-color-checked-pressed);")])])])]), z1 = Object.assign(Object.assign(Object.assign({}, ve.props), F1), {
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
}), $1 = "n-tag", ta = J({
  name: "Tag",
  props: z1,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.onCheckedChange !== void 0 && Qe("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
    });
    const t = I(null), {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = ve("Tag", "-tag", P1, R1, e, o);
    $e($1, {
      roundRef: ie(e, "round")
    });
    function s() {
      if (!e.disabled && e.checkable) {
        const {
          checked: m,
          onCheckedChange: h,
          onUpdateChecked: p,
          "onUpdate:checked": x
        } = e;
        p && p(!m), x && x(!m), h && h(!m);
      }
    }
    function d(m) {
      if (e.triggerClickOnClose || m.stopPropagation(), !e.disabled) {
        const {
          onClose: h
        } = e;
        h && ne(h, m);
      }
    }
    const u = {
      setTextContent(m) {
        const {
          value: h
        } = t;
        h && (h.textContent = m);
      }
    }, c = Ft("Tag", a, o), v = A(() => {
      const {
        type: m,
        size: h,
        color: {
          color: p,
          textColor: x
        } = {}
      } = e, {
        common: {
          cubicBezierEaseInOut: b
        },
        self: {
          padding: y,
          closeMargin: k,
          borderRadius: w,
          opacityDisabled: R,
          textColorCheckable: B,
          textColorHoverCheckable: C,
          textColorPressedCheckable: S,
          textColorChecked: F,
          colorCheckable: P,
          colorHoverCheckable: _,
          colorPressedCheckable: O,
          colorChecked: n,
          colorCheckedHover: E,
          colorCheckedPressed: T,
          closeBorderRadius: H,
          fontWeightStrong: L,
          [Z("colorBordered", m)]: U,
          [Z("closeSize", h)]: te,
          [Z("closeIconSize", h)]: X,
          [Z("fontSize", h)]: K,
          [Z("height", h)]: j,
          [Z("color", m)]: q,
          [Z("textColor", m)]: Y,
          [Z("border", m)]: ae,
          [Z("closeIconColor", m)]: le,
          [Z("closeIconColorHover", m)]: ce,
          [Z("closeIconColorPressed", m)]: be,
          [Z("closeColorHover", m)]: G,
          [Z("closeColorPressed", m)]: ue
        }
      } = l.value, Fe = Wt(k);
      return {
        "--n-font-weight-strong": L,
        "--n-avatar-size-override": `calc(${j} - 8px)`,
        "--n-bezier": b,
        "--n-border-radius": w,
        "--n-border": ae,
        "--n-close-icon-size": X,
        "--n-close-color-pressed": ue,
        "--n-close-color-hover": G,
        "--n-close-border-radius": H,
        "--n-close-icon-color": le,
        "--n-close-icon-color-hover": ce,
        "--n-close-icon-color-pressed": be,
        "--n-close-icon-color-disabled": le,
        "--n-close-margin-top": Fe.top,
        "--n-close-margin-right": Fe.right,
        "--n-close-margin-bottom": Fe.bottom,
        "--n-close-margin-left": Fe.left,
        "--n-close-size": te,
        "--n-color": p || (r.value ? U : q),
        "--n-color-checkable": P,
        "--n-color-checked": n,
        "--n-color-checked-hover": E,
        "--n-color-checked-pressed": T,
        "--n-color-hover-checkable": _,
        "--n-color-pressed-checkable": O,
        "--n-font-size": K,
        "--n-height": j,
        "--n-opacity-disabled": R,
        "--n-padding": y,
        "--n-text-color": x || Y,
        "--n-text-color-checkable": B,
        "--n-text-color-checked": F,
        "--n-text-color-hover-checkable": C,
        "--n-text-color-pressed-checkable": S
      };
    }), g = i ? Ye("tag", A(() => {
      let m = "";
      const {
        type: h,
        size: p,
        color: {
          color: x,
          textColor: b
        } = {}
      } = e;
      return m += h[0], m += p[0], x && (m += `a${ei(x)}`), b && (m += `b${ei(b)}`), r.value && (m += "c"), m;
    }), v, e) : void 0;
    return Object.assign(Object.assign({}, u), {
      rtlEnabled: c,
      mergedClsPrefix: o,
      contentRef: t,
      mergedBordered: r,
      handleClick: s,
      handleCloseClick: d,
      cssVars: i ? void 0 : v,
      themeClass: g == null ? void 0 : g.themeClass,
      onRender: g == null ? void 0 : g.onRender
    });
  },
  render() {
    var e, t;
    const {
      mergedClsPrefix: r,
      rtlEnabled: o,
      closable: i,
      color: {
        borderColor: a
      } = {},
      round: l,
      onRender: s,
      $slots: d
    } = this;
    s == null || s();
    const u = We(d.avatar, (v) => v && f("div", {
      class: `${r}-tag__avatar`
    }, v)), c = We(d.icon, (v) => v && f("div", {
      class: `${r}-tag__icon`
    }, v));
    return f("div", {
      class: [`${r}-tag`, this.themeClass, {
        [`${r}-tag--rtl`]: o,
        [`${r}-tag--strong`]: this.strong,
        [`${r}-tag--disabled`]: this.disabled,
        [`${r}-tag--checkable`]: this.checkable,
        [`${r}-tag--checked`]: this.checkable && this.checked,
        [`${r}-tag--round`]: l,
        [`${r}-tag--avatar`]: u,
        [`${r}-tag--icon`]: c,
        [`${r}-tag--closable`]: i
      }],
      style: this.cssVars,
      onClick: this.handleClick,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave
    }, c || u, f("span", {
      class: `${r}-tag__content`,
      ref: "contentRef"
    }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)), !this.checkable && i ? f(Vr, {
      clsPrefix: r,
      class: `${r}-tag__close`,
      disabled: this.disabled,
      onClick: this.handleCloseClick,
      focusable: this.internalCloseFocusable,
      round: l,
      isButtonTag: this.internalCloseIsButtonTag,
      absolute: !0
    }) : null, !this.checkable && this.mergedBordered ? f("div", {
      class: `${r}-tag__border`,
      style: {
        borderColor: a
      }
    }) : null);
  }
}), Ku = J({
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
    slots: t
  }) {
    return () => {
      const {
        clsPrefix: r
      } = e;
      return f(Gn, {
        clsPrefix: r,
        class: `${r}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? f(Sa, {
          clsPrefix: r,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => f(yt, {
            clsPrefix: r,
            class: `${r}-base-suffix__arrow`
          }, {
            default: () => tn(t.default, () => [f(Lu, null)])
          })
        }) : null
      });
    };
  }
}), A1 = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
function D1(e) {
  const {
    borderRadius: t,
    textColor2: r,
    textColorDisabled: o,
    inputColor: i,
    inputColorDisabled: a,
    primaryColor: l,
    primaryColorHover: s,
    warningColor: d,
    warningColorHover: u,
    errorColor: c,
    errorColorHover: v,
    borderColor: g,
    iconColor: m,
    iconColorDisabled: h,
    clearColor: p,
    clearColorHover: x,
    clearColorPressed: b,
    placeholderColor: y,
    placeholderColorDisabled: k,
    fontSizeTiny: w,
    fontSizeSmall: R,
    fontSizeMedium: B,
    fontSizeLarge: C,
    heightTiny: S,
    heightSmall: F,
    heightMedium: P,
    heightLarge: _,
    fontWeight: O
  } = e;
  return Object.assign(Object.assign({}, A1), {
    fontSizeTiny: w,
    fontSizeSmall: R,
    fontSizeMedium: B,
    fontSizeLarge: C,
    heightTiny: S,
    heightSmall: F,
    heightMedium: P,
    heightLarge: _,
    borderRadius: t,
    fontWeight: O,
    // default
    textColor: r,
    textColorDisabled: o,
    placeholderColor: y,
    placeholderColorDisabled: k,
    color: i,
    colorDisabled: a,
    colorActive: i,
    border: `1px solid ${g}`,
    borderHover: `1px solid ${s}`,
    borderActive: `1px solid ${l}`,
    borderFocus: `1px solid ${s}`,
    boxShadowHover: "none",
    boxShadowActive: `0 0 0 2px ${Ee(l, {
      alpha: 0.2
    })}`,
    boxShadowFocus: `0 0 0 2px ${Ee(l, {
      alpha: 0.2
    })}`,
    caretColor: l,
    arrowColor: m,
    arrowColorDisabled: h,
    loadingColor: l,
    // warning
    borderWarning: `1px solid ${d}`,
    borderHoverWarning: `1px solid ${u}`,
    borderActiveWarning: `1px solid ${d}`,
    borderFocusWarning: `1px solid ${u}`,
    boxShadowHoverWarning: "none",
    boxShadowActiveWarning: `0 0 0 2px ${Ee(d, {
      alpha: 0.2
    })}`,
    boxShadowFocusWarning: `0 0 0 2px ${Ee(d, {
      alpha: 0.2
    })}`,
    colorActiveWarning: i,
    caretColorWarning: d,
    // error
    borderError: `1px solid ${c}`,
    borderHoverError: `1px solid ${v}`,
    borderActiveError: `1px solid ${c}`,
    borderFocusError: `1px solid ${v}`,
    boxShadowHoverError: "none",
    boxShadowActiveError: `0 0 0 2px ${Ee(c, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${Ee(c, {
      alpha: 0.2
    })}`,
    colorActiveError: i,
    caretColorError: c,
    clearColor: p,
    clearColorHover: x,
    clearColorPressed: b
  });
}
const qu = {
  name: "InternalSelection",
  common: Ze,
  peers: {
    Popover: yr
  },
  self: D1
}, E1 = D([z("base-selection", `
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
 `, [z("base-loading", `
 color: var(--n-loading-color);
 `), z("base-selection-tags", "min-height: var(--n-height);"), M("border, state-border", `
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
 `), M("state-border", `
 z-index: 1;
 border-color: #0000;
 `), z("base-suffix", `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [M("arrow", `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), z("base-selection-overlay", `
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
 `, [M("wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), z("base-selection-placeholder", `
 color: var(--n-placeholder-color);
 `, [M("inner", `
 max-width: 100%;
 overflow: hidden;
 `)]), z("base-selection-tags", `
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
 `), z("base-selection-label", `
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
 `, [z("base-selection-input", `
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
 `, [M("content", `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), M("render-label", `
 color: var(--n-text-color);
 `)]), Je("disabled", [D("&:hover", [M("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), N("focus", [M("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), N("active", [M("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), z("base-selection-label", "background-color: var(--n-color-active);"), z("base-selection-tags", "background-color: var(--n-color-active);")])]), N("disabled", "cursor: not-allowed;", [M("arrow", `
 color: var(--n-arrow-color-disabled);
 `), z("base-selection-label", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [z("base-selection-input", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), M("render-label", `
 color: var(--n-text-color-disabled);
 `)]), z("base-selection-tags", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), z("base-selection-placeholder", `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), z("base-selection-input-tag", `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [M("input", `
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
 `), M("mirror", `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), ["warning", "error"].map((e) => N(`${e}-status`, [M("state-border", `border: var(--n-border-${e});`), Je("disabled", [D("&:hover", [M("state-border", `
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]), N("active", [M("state-border", `
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `), z("base-selection-label", `background-color: var(--n-color-active-${e});`), z("base-selection-tags", `background-color: var(--n-color-active-${e});`)]), N("focus", [M("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]), z("base-selection-popover", `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), z("base-selection-tag-wrapper", `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [D("&:last-child", "padding-right: 0;"), z("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [M("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]), T1 = J({
  name: "InternalSelection",
  props: Object.assign(Object.assign({}, ve.props), {
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
      mergedClsPrefixRef: t,
      mergedRtlRef: r
    } = Ae(e), o = Ft("InternalSelection", r, t), i = I(null), a = I(null), l = I(null), s = I(null), d = I(null), u = I(null), c = I(null), v = I(null), g = I(null), m = I(null), h = I(!1), p = I(!1), x = I(!1), b = ve("InternalSelection", "-internal-selection", E1, qu, e, ie(e, "clsPrefix")), y = A(() => e.clearable && !e.disabled && (x.value || e.active)), k = A(() => e.selectedOption ? e.renderTag ? e.renderTag({
      option: e.selectedOption,
      handleClose: () => {
      }
    }) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : gt(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder), w = A(() => {
      const oe = e.selectedOption;
      if (oe)
        return oe[e.labelField];
    }), R = A(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length) : e.selectedOption !== null);
    function B() {
      var oe;
      const {
        value: he
      } = i;
      if (he) {
        const {
          value: Te
        } = a;
        Te && (Te.style.width = `${he.offsetWidth}px`, e.maxTagCount !== "responsive" && ((oe = g.value) === null || oe === void 0 || oe.sync({
          showAllItemsBeforeCalculate: !1
        })));
      }
    }
    function C() {
      const {
        value: oe
      } = m;
      oe && (oe.style.display = "none");
    }
    function S() {
      const {
        value: oe
      } = m;
      oe && (oe.style.display = "inline-block");
    }
    Ie(ie(e, "active"), (oe) => {
      oe || C();
    }), Ie(ie(e, "pattern"), () => {
      e.multiple && pt(B);
    });
    function F(oe) {
      const {
        onFocus: he
      } = e;
      he && he(oe);
    }
    function P(oe) {
      const {
        onBlur: he
      } = e;
      he && he(oe);
    }
    function _(oe) {
      const {
        onDeleteOption: he
      } = e;
      he && he(oe);
    }
    function O(oe) {
      const {
        onClear: he
      } = e;
      he && he(oe);
    }
    function n(oe) {
      const {
        onPatternInput: he
      } = e;
      he && he(oe);
    }
    function E(oe) {
      var he;
      (!oe.relatedTarget || !(!((he = l.value) === null || he === void 0) && he.contains(oe.relatedTarget))) && F(oe);
    }
    function T(oe) {
      var he;
      !((he = l.value) === null || he === void 0) && he.contains(oe.relatedTarget) || P(oe);
    }
    function H(oe) {
      O(oe);
    }
    function L() {
      x.value = !0;
    }
    function U() {
      x.value = !1;
    }
    function te(oe) {
      !e.active || !e.filterable || oe.target !== a.value && oe.preventDefault();
    }
    function X(oe) {
      _(oe);
    }
    const K = I(!1);
    function j(oe) {
      if (oe.key === "Backspace" && !K.value && !e.pattern.length) {
        const {
          selectedOptions: he
        } = e;
        he != null && he.length && X(he[he.length - 1]);
      }
    }
    let q = null;
    function Y(oe) {
      const {
        value: he
      } = i;
      if (he) {
        const Te = oe.target.value;
        he.textContent = Te, B();
      }
      e.ignoreComposition && K.value ? q = oe : n(oe);
    }
    function ae() {
      K.value = !0;
    }
    function le() {
      K.value = !1, e.ignoreComposition && n(q), q = null;
    }
    function ce(oe) {
      var he;
      p.value = !0, (he = e.onPatternFocus) === null || he === void 0 || he.call(e, oe);
    }
    function be(oe) {
      var he;
      p.value = !1, (he = e.onPatternBlur) === null || he === void 0 || he.call(e, oe);
    }
    function G() {
      var oe, he;
      if (e.filterable)
        p.value = !1, (oe = u.value) === null || oe === void 0 || oe.blur(), (he = a.value) === null || he === void 0 || he.blur();
      else if (e.multiple) {
        const {
          value: Te
        } = s;
        Te == null || Te.blur();
      } else {
        const {
          value: Te
        } = d;
        Te == null || Te.blur();
      }
    }
    function ue() {
      var oe, he, Te;
      e.filterable ? (p.value = !1, (oe = u.value) === null || oe === void 0 || oe.focus()) : e.multiple ? (he = s.value) === null || he === void 0 || he.focus() : (Te = d.value) === null || Te === void 0 || Te.focus();
    }
    function Fe() {
      const {
        value: oe
      } = a;
      oe && (S(), oe.focus());
    }
    function xe() {
      const {
        value: oe
      } = a;
      oe && oe.blur();
    }
    function Pe(oe) {
      const {
        value: he
      } = c;
      he && he.setTextContent(`+${oe}`);
    }
    function ze() {
      const {
        value: oe
      } = v;
      return oe;
    }
    function dt() {
      return a.value;
    }
    let rt = null;
    function ft() {
      rt !== null && window.clearTimeout(rt);
    }
    function ht() {
      e.active || (ft(), rt = window.setTimeout(() => {
        R.value && (h.value = !0);
      }, 100));
    }
    function ye() {
      ft();
    }
    function Ce(oe) {
      oe || (ft(), h.value = !1);
    }
    Ie(R, (oe) => {
      oe || (h.value = !1);
    }), $t(() => {
      nt(() => {
        const oe = u.value;
        oe && (e.disabled ? oe.removeAttribute("tabindex") : oe.tabIndex = p.value ? -1 : 0);
      });
    }), ru(l, e.onResize);
    const {
      inlineThemeDisabled: De
    } = e, Le = A(() => {
      const {
        size: oe
      } = e, {
        common: {
          cubicBezierEaseInOut: he
        },
        self: {
          fontWeight: Te,
          borderRadius: ut,
          color: At,
          placeholderColor: Dt,
          textColor: bt,
          paddingSingle: it,
          paddingMultiple: wt,
          caretColor: ot,
          colorDisabled: fe,
          textColorDisabled: Be,
          placeholderColorDisabled: $,
          colorActive: V,
          boxShadowFocus: Q,
          boxShadowActive: se,
          boxShadowHover: de,
          border: ge,
          borderFocus: me,
          borderHover: Se,
          borderActive: Ne,
          arrowColor: at,
          arrowColorDisabled: Ue,
          loadingColor: Ot,
          // form warning
          colorActiveWarning: jt,
          boxShadowFocusWarning: _t,
          boxShadowActiveWarning: Ut,
          boxShadowHoverWarning: Kt,
          borderWarning: rn,
          borderFocusWarning: qt,
          borderHoverWarning: W,
          borderActiveWarning: ee,
          // form error
          colorActiveError: we,
          boxShadowFocusError: Oe,
          boxShadowActiveError: Ge,
          boxShadowHoverError: He,
          borderError: lt,
          borderFocusError: vt,
          borderHoverError: Jt,
          borderActiveError: wn,
          // clear
          clearColor: Sn,
          clearColorHover: Yn,
          clearColorPressed: Kr,
          clearSize: qr,
          // arrow
          arrowSize: Gr,
          [Z("height", oe)]: Xr,
          [Z("fontSize", oe)]: Yr
        }
      } = b.value, Dn = Wt(it), En = Wt(wt);
      return {
        "--n-bezier": he,
        "--n-border": ge,
        "--n-border-active": Ne,
        "--n-border-focus": me,
        "--n-border-hover": Se,
        "--n-border-radius": ut,
        "--n-box-shadow-active": se,
        "--n-box-shadow-focus": Q,
        "--n-box-shadow-hover": de,
        "--n-caret-color": ot,
        "--n-color": At,
        "--n-color-active": V,
        "--n-color-disabled": fe,
        "--n-font-size": Yr,
        "--n-height": Xr,
        "--n-padding-single-top": Dn.top,
        "--n-padding-multiple-top": En.top,
        "--n-padding-single-right": Dn.right,
        "--n-padding-multiple-right": En.right,
        "--n-padding-single-left": Dn.left,
        "--n-padding-multiple-left": En.left,
        "--n-padding-single-bottom": Dn.bottom,
        "--n-padding-multiple-bottom": En.bottom,
        "--n-placeholder-color": Dt,
        "--n-placeholder-color-disabled": $,
        "--n-text-color": bt,
        "--n-text-color-disabled": Be,
        "--n-arrow-color": at,
        "--n-arrow-color-disabled": Ue,
        "--n-loading-color": Ot,
        // form warning
        "--n-color-active-warning": jt,
        "--n-box-shadow-focus-warning": _t,
        "--n-box-shadow-active-warning": Ut,
        "--n-box-shadow-hover-warning": Kt,
        "--n-border-warning": rn,
        "--n-border-focus-warning": qt,
        "--n-border-hover-warning": W,
        "--n-border-active-warning": ee,
        // form error
        "--n-color-active-error": we,
        "--n-box-shadow-focus-error": Oe,
        "--n-box-shadow-active-error": Ge,
        "--n-box-shadow-hover-error": He,
        "--n-border-error": lt,
        "--n-border-focus-error": vt,
        "--n-border-hover-error": Jt,
        "--n-border-active-error": wn,
        // clear
        "--n-clear-size": qr,
        "--n-clear-color": Sn,
        "--n-clear-color-hover": Yn,
        "--n-clear-color-pressed": Kr,
        // arrow-size
        "--n-arrow-size": Gr,
        // font-weight
        "--n-font-weight": Te
      };
    }), et = De ? Ye("internal-selection", A(() => e.size[0]), Le, e) : void 0;
    return {
      mergedTheme: b,
      mergedClearable: y,
      mergedClsPrefix: t,
      rtlEnabled: o,
      patternInputFocused: p,
      filterablePlaceholder: k,
      label: w,
      selected: R,
      showTagsPanel: h,
      isComposing: K,
      // dom ref
      counterRef: c,
      counterWrapperRef: v,
      patternInputMirrorRef: i,
      patternInputRef: a,
      selfRef: l,
      multipleElRef: s,
      singleElRef: d,
      patternInputWrapperRef: u,
      overflowRef: g,
      inputTagElRef: m,
      handleMouseDown: te,
      handleFocusin: E,
      handleClear: H,
      handleMouseEnter: L,
      handleMouseLeave: U,
      handleDeleteOption: X,
      handlePatternKeyDown: j,
      handlePatternInputInput: Y,
      handlePatternInputBlur: be,
      handlePatternInputFocus: ce,
      handleMouseEnterCounter: ht,
      handleMouseLeaveCounter: ye,
      handleFocusout: T,
      handleCompositionEnd: le,
      handleCompositionStart: ae,
      onPopoverUpdateShow: Ce,
      focus: ue,
      focusInput: Fe,
      blur: G,
      blurInput: xe,
      updateCounter: Pe,
      getCounter: ze,
      getTail: dt,
      renderLabel: e.renderLabel,
      cssVars: De ? void 0 : Le,
      themeClass: et == null ? void 0 : et.themeClass,
      onRender: et == null ? void 0 : et.onRender
    };
  },
  render() {
    const {
      status: e,
      multiple: t,
      size: r,
      disabled: o,
      filterable: i,
      maxTagCount: a,
      bordered: l,
      clsPrefix: s,
      ellipsisTagPopoverProps: d,
      onRender: u,
      renderTag: c,
      renderLabel: v
    } = this;
    u == null || u();
    const g = a === "responsive", m = typeof a == "number", h = g || m, p = f(ha, null, {
      default: () => f(Ku, {
        clsPrefix: s,
        loading: this.loading,
        showArrow: this.showArrow,
        showClear: this.mergedClearable && this.selected,
        onClear: this.handleClear
      }, {
        default: () => {
          var b, y;
          return (y = (b = this.$slots).arrow) === null || y === void 0 ? void 0 : y.call(b);
        }
      })
    });
    let x;
    if (t) {
      const {
        labelField: b
      } = this, y = (n) => f("div", {
        class: `${s}-base-selection-tag-wrapper`,
        key: n.value
      }, c ? c({
        option: n,
        handleClose: () => {
          this.handleDeleteOption(n);
        }
      }) : f(ta, {
        size: r,
        closable: !n.disabled,
        disabled: o,
        onClose: () => {
          this.handleDeleteOption(n);
        },
        internalCloseIsButtonTag: !1,
        internalCloseFocusable: !1
      }, {
        default: () => v ? v(n, !0) : gt(n[b], n, !0)
      })), k = () => (m ? this.selectedOptions.slice(0, a) : this.selectedOptions).map(y), w = i ? f("div", {
        class: `${s}-base-selection-input-tag`,
        ref: "inputTagElRef",
        key: "__input-tag__"
      }, f("input", Object.assign({}, this.inputProps, {
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
      })), f("span", {
        ref: "patternInputMirrorRef",
        class: `${s}-base-selection-input-tag__mirror`
      }, this.pattern)) : null, R = g ? () => f("div", {
        class: `${s}-base-selection-tag-wrapper`,
        ref: "counterWrapperRef"
      }, f(ta, {
        size: r,
        ref: "counterRef",
        onMouseenter: this.handleMouseEnterCounter,
        onMouseleave: this.handleMouseLeaveCounter,
        disabled: o
      })) : void 0;
      let B;
      if (m) {
        const n = this.selectedOptions.length - a;
        n > 0 && (B = f("div", {
          class: `${s}-base-selection-tag-wrapper`,
          key: "__counter__"
        }, f(ta, {
          size: r,
          ref: "counterRef",
          onMouseenter: this.handleMouseEnterCounter,
          disabled: o
        }, {
          default: () => `+${n}`
        })));
      }
      const C = g ? i ? f(cs, {
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
        default: k,
        counter: R,
        tail: () => w
      }) : f(cs, {
        ref: "overflowRef",
        updateCounter: this.updateCounter,
        getCounter: this.getCounter,
        style: {
          width: "100%",
          display: "flex",
          overflow: "hidden"
        }
      }, {
        default: k,
        counter: R
      }) : m && B ? k().concat(B) : k(), S = h ? () => f("div", {
        class: `${s}-base-selection-popover`
      }, g ? k() : this.selectedOptions.map(y)) : void 0, F = h ? Object.assign({
        show: this.showTagsPanel,
        trigger: "hover",
        overlap: !0,
        placement: "top",
        width: "trigger",
        onUpdateShow: this.onPopoverUpdateShow,
        theme: this.mergedTheme.peers.Popover,
        themeOverrides: this.mergedTheme.peerOverrides.Popover
      }, d) : null, _ = (this.selected ? !1 : this.active ? !this.pattern && !this.isComposing : !0) ? f("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`
      }, f("div", {
        class: `${s}-base-selection-placeholder__inner`
      }, this.placeholder)) : null, O = i ? f("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-tags`
      }, C, g ? null : w, p) : f("div", {
        ref: "multipleElRef",
        class: `${s}-base-selection-tags`,
        tabindex: o ? void 0 : 0
      }, C, p);
      x = f(je, null, h ? f(Cr, Object.assign({}, F, {
        scrollable: !0,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => O,
        default: S
      }) : O, _);
    } else if (i) {
      const b = this.pattern || this.isComposing, y = this.active ? !b : !this.selected, k = this.active ? !1 : this.selected;
      x = f("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-label`,
        title: this.patternInputFocused ? void 0 : vs(this.label)
      }, f("input", Object.assign({}, this.inputProps, {
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
      })), k ? f("div", {
        class: `${s}-base-selection-label__render-label ${s}-base-selection-overlay`,
        key: "input"
      }, f("div", {
        class: `${s}-base-selection-overlay__wrapper`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : v ? v(this.selectedOption, !0) : gt(this.label, this.selectedOption, !0))) : null, y ? f("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`,
        key: "placeholder"
      }, f("div", {
        class: `${s}-base-selection-overlay__wrapper`
      }, this.filterablePlaceholder)) : null, p);
    } else
      x = f("div", {
        ref: "singleElRef",
        class: `${s}-base-selection-label`,
        tabindex: this.disabled ? void 0 : 0
      }, this.label !== void 0 ? f("div", {
        class: `${s}-base-selection-input`,
        title: vs(this.label),
        key: "input"
      }, f("div", {
        class: `${s}-base-selection-input__content`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : v ? v(this.selectedOption, !0) : gt(this.label, this.selectedOption, !0))) : f("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`,
        key: "placeholder"
      }, f("div", {
        class: `${s}-base-selection-placeholder__inner`
      }, this.placeholder)), p);
    return f("div", {
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
    }, x, l ? f("div", {
      class: `${s}-base-selection__border`
    }) : null, l ? f("div", {
      class: `${s}-base-selection__state-border`
    }) : null);
  }
}), {
  cubicBezierEaseInOut: On
} = sn;
function O1({
  duration: e = ".2s",
  delay: t = ".1s"
} = {}) {
  return [D("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", {
    opacity: 1
  }), D("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), D("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${On},
 max-width ${e} ${On} ${t},
 margin-left ${e} ${On} ${t},
 margin-right ${e} ${On} ${t};
 `), D("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${On} ${t},
 max-width ${e} ${On},
 margin-left ${e} ${On},
 margin-right ${e} ${On};
 `)];
}
const M1 = z("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), I1 = J({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    qn("-base-wave", M1, ie(e, "clsPrefix"));
    const t = I(null), r = I(!1);
    let o = null;
    return St(() => {
      o !== null && window.clearTimeout(o);
    }), {
      active: r,
      selfRef: t,
      play() {
        o !== null && (window.clearTimeout(o), r.value = !1, o = null), pt(() => {
          var i;
          (i = t.value) === null || i === void 0 || i.offsetHeight, r.value = !0, o = window.setTimeout(() => {
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
    return f("div", {
      ref: "selfRef",
      "aria-hidden": !0,
      class: [`${e}-base-wave`, this.active && `${e}-base-wave--active`]
    });
  }
}), {
  cubicBezierEaseInOut: vn,
  cubicBezierEaseOut: L1,
  cubicBezierEaseIn: N1
} = sn;
function Gu({
  overflow: e = "hidden",
  duration: t = ".3s",
  originalTransition: r = "",
  leavingDelay: o = "0s",
  foldPadding: i = !1,
  enterToProps: a = void 0,
  leaveToProps: l = void 0,
  reverse: s = !1
} = {}) {
  const d = s ? "leave" : "enter", u = s ? "enter" : "leave";
  return [D(`&.fade-in-height-expand-transition-${u}-from,
 &.fade-in-height-expand-transition-${d}-to`, Object.assign(Object.assign({}, a), {
    opacity: 1
  })), D(`&.fade-in-height-expand-transition-${u}-to,
 &.fade-in-height-expand-transition-${d}-from`, Object.assign(Object.assign({}, l), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: i ? "0 !important" : void 0,
    paddingBottom: i ? "0 !important" : void 0
  })), D(`&.fade-in-height-expand-transition-${u}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${vn} ${o},
 opacity ${t} ${L1} ${o},
 margin-top ${t} ${vn} ${o},
 margin-bottom ${t} ${vn} ${o},
 padding-top ${t} ${vn} ${o},
 padding-bottom ${t} ${vn} ${o}
 ${r ? `,${r}` : ""}
 `), D(`&.fade-in-height-expand-transition-${d}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${vn},
 opacity ${t} ${N1},
 margin-top ${t} ${vn},
 margin-bottom ${t} ${vn},
 padding-top ${t} ${vn},
 padding-bottom ${t} ${vn}
 ${r ? `,${r}` : ""}
 `)];
}
const H1 = jr && "chrome" in window;
jr && navigator.userAgent.includes("Firefox");
const Xu = jr && navigator.userAgent.includes("Safari") && !H1, j1 = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function _1(e) {
  const {
    textColor2: t,
    textColor3: r,
    textColorDisabled: o,
    primaryColor: i,
    primaryColorHover: a,
    inputColor: l,
    inputColorDisabled: s,
    borderColor: d,
    warningColor: u,
    warningColorHover: c,
    errorColor: v,
    errorColorHover: g,
    borderRadius: m,
    lineHeight: h,
    fontSizeTiny: p,
    fontSizeSmall: x,
    fontSizeMedium: b,
    fontSizeLarge: y,
    heightTiny: k,
    heightSmall: w,
    heightMedium: R,
    heightLarge: B,
    actionColor: C,
    clearColor: S,
    clearColorHover: F,
    clearColorPressed: P,
    placeholderColor: _,
    placeholderColorDisabled: O,
    iconColor: n,
    iconColorDisabled: E,
    iconColorHover: T,
    iconColorPressed: H,
    fontWeight: L
  } = e;
  return Object.assign(Object.assign({}, j1), {
    fontWeight: L,
    countTextColorDisabled: o,
    countTextColor: r,
    heightTiny: k,
    heightSmall: w,
    heightMedium: R,
    heightLarge: B,
    fontSizeTiny: p,
    fontSizeSmall: x,
    fontSizeMedium: b,
    fontSizeLarge: y,
    lineHeight: h,
    lineHeightTextarea: h,
    borderRadius: m,
    iconSize: "16px",
    groupLabelColor: C,
    groupLabelTextColor: t,
    textColor: t,
    textColorDisabled: o,
    textDecorationColor: t,
    caretColor: i,
    placeholderColor: _,
    placeholderColorDisabled: O,
    color: l,
    colorDisabled: s,
    colorFocus: l,
    groupLabelBorder: `1px solid ${d}`,
    border: `1px solid ${d}`,
    borderHover: `1px solid ${a}`,
    borderDisabled: `1px solid ${d}`,
    borderFocus: `1px solid ${a}`,
    boxShadowFocus: `0 0 0 2px ${Ee(i, {
      alpha: 0.2
    })}`,
    loadingColor: i,
    // warning
    loadingColorWarning: u,
    borderWarning: `1px solid ${u}`,
    borderHoverWarning: `1px solid ${c}`,
    colorFocusWarning: l,
    borderFocusWarning: `1px solid ${c}`,
    boxShadowFocusWarning: `0 0 0 2px ${Ee(u, {
      alpha: 0.2
    })}`,
    caretColorWarning: u,
    // error
    loadingColorError: v,
    borderError: `1px solid ${v}`,
    borderHoverError: `1px solid ${g}`,
    colorFocusError: l,
    borderFocusError: `1px solid ${g}`,
    boxShadowFocusError: `0 0 0 2px ${Ee(v, {
      alpha: 0.2
    })}`,
    caretColorError: v,
    clearColor: S,
    clearColorHover: F,
    clearColorPressed: P,
    iconColor: n,
    iconColorDisabled: E,
    iconColorHover: T,
    iconColorPressed: H,
    suffixTextColor: t
  });
}
const wl = {
  name: "Input",
  common: Ze,
  self: _1
}, Yu = "n-input", W1 = z("input", `
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
 font-weight: var(--n-font-weight);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`, [
  // common
  M("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),
  M("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
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
  M("input-el, textarea-el", `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [D("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), D("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), D("&:-webkit-autofill ~", [M("placeholder", "display: none;")])]),
  N("round", [Je("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  M("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [D("span", `
 width: 100%;
 display: inline-block;
 `)]),
  N("textarea", [M("placeholder", "overflow: visible;")]),
  Je("autosize", "width: 100%;"),
  N("autosize", [M("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  z("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),
  M("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),
  M("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [D("&[type=password]::-ms-reveal", "display: none;"), D("+", [M("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  Je("textarea", [M("placeholder", "white-space: nowrap;")]),
  M("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  N("textarea", "width: 100%;", [z("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), N("resizable", [z("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), M("textarea-el, textarea-mirror, placeholder", `
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
 `), M("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
  // pair
  N("pair", [M("input-el, placeholder", "text-align: center;"), M("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [z("icon", `
 color: var(--n-icon-color);
 `), z("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  N("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [M("border", "border: var(--n-border-disabled);"), M("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), M("placeholder", "color: var(--n-placeholder-color-disabled);"), M("separator", "color: var(--n-text-color-disabled);", [z("icon", `
 color: var(--n-icon-color-disabled);
 `), z("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), z("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), M("suffix, prefix", "color: var(--n-text-color-disabled);", [z("icon", `
 color: var(--n-icon-color-disabled);
 `), z("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  Je("disabled", [M("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [D("&:hover", `
 color: var(--n-icon-color-hover);
 `), D("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), D("&:hover", [M("state-border", "border: var(--n-border-hover);")]), N("focus", "background-color: var(--n-color-focus);", [M("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),
  M("border, state-border", `
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
  M("state-border", `
 border-color: #0000;
 z-index: 1;
 `),
  M("prefix", "margin-right: 4px;"),
  M("suffix", `
 margin-left: 4px;
 `),
  M("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [z("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), z("base-clear", `
 font-size: var(--n-icon-size);
 `, [M("placeholder", [z("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), D(">", [z("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), z("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  z("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((e) => N(`${e}-status`, [Je("disabled", [z("base-loading", `
 color: var(--n-loading-color-${e})
 `), M("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), M("state-border", `
 border: var(--n-border-${e});
 `), D("&:hover", [M("state-border", `
 border: var(--n-border-hover-${e});
 `)]), D("&:focus", `
 background-color: var(--n-color-focus-${e});
 `, [M("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]), N("focus", `
 background-color: var(--n-color-focus-${e});
 `, [M("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))
]), V1 = z("input", [N("disabled", [M("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
function U1(e) {
  let t = 0;
  for (const r of e)
    t++;
  return t;
}
function _o(e) {
  return e === "" || e == null;
}
function K1(e) {
  const t = I(null);
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
      value: d
    } = a;
    if (l == null || s == null) {
      i();
      return;
    }
    t.value = {
      start: l,
      end: s,
      beforeText: d.slice(0, l),
      afterText: d.slice(s)
    };
  }
  function o() {
    var a;
    const {
      value: l
    } = t, {
      value: s
    } = e;
    if (!l || !s)
      return;
    const {
      value: d
    } = s, {
      start: u,
      beforeText: c,
      afterText: v
    } = l;
    let g = d.length;
    if (d.endsWith(v))
      g = d.length - v.length;
    else if (d.startsWith(c))
      g = c.length;
    else {
      const m = c[u - 1], h = d.indexOf(m, u - 1);
      h !== -1 && (g = h + 1);
    }
    (a = s.setSelectionRange) === null || a === void 0 || a.call(s, g, g);
  }
  function i() {
    t.value = null;
  }
  return Ie(e, i), {
    recordCursor: r,
    restoreCursor: o
  };
}
const nd = J({
  name: "InputWordCount",
  setup(e, {
    slots: t
  }) {
    const {
      mergedValueRef: r,
      maxlengthRef: o,
      mergedClsPrefixRef: i,
      countGraphemesRef: a
    } = pe(Yu), l = A(() => {
      const {
        value: s
      } = r;
      return s === null || Array.isArray(s) ? 0 : (a.value || U1)(s);
    });
    return () => {
      const {
        value: s
      } = o, {
        value: d
      } = r;
      return f("span", {
        class: `${i.value}-input-word-count`
      }, fa(t.default, {
        value: d === null || Array.isArray(d) ? "" : d
      }, () => [s === void 0 ? l.value : `${l.value} / ${s}`]));
    };
  }
}), q1 = Object.assign(Object.assign({}, ve.props), {
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
}), ka = J({
  name: "Input",
  props: q1,
  slots: Object,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      mergedBorderedRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = ve("Input", "-input", W1, wl, e, t);
    Xu && qn("-input-safari", V1, t);
    const l = I(null), s = I(null), d = I(null), u = I(null), c = I(null), v = I(null), g = I(null), m = K1(g), h = I(null), {
      localeRef: p
    } = lr("Input"), x = I(e.defaultValue), b = ie(e, "value"), y = Pt(b, x), k = Un(e), {
      mergedSizeRef: w,
      mergedDisabledRef: R,
      mergedStatusRef: B
    } = k, C = I(!1), S = I(!1), F = I(!1), P = I(!1);
    let _ = null;
    const O = A(() => {
      const {
        placeholder: W,
        pair: ee
      } = e;
      return ee ? Array.isArray(W) ? W : W === void 0 ? ["", ""] : [W, W] : W === void 0 ? [p.value.placeholder] : [W];
    }), n = A(() => {
      const {
        value: W
      } = F, {
        value: ee
      } = y, {
        value: we
      } = O;
      return !W && (_o(ee) || Array.isArray(ee) && _o(ee[0])) && we[0];
    }), E = A(() => {
      const {
        value: W
      } = F, {
        value: ee
      } = y, {
        value: we
      } = O;
      return !W && we[1] && (_o(ee) || Array.isArray(ee) && _o(ee[1]));
    }), T = qe(() => e.internalForceFocus || C.value), H = qe(() => {
      if (R.value || e.readonly || !e.clearable || !T.value && !S.value)
        return !1;
      const {
        value: W
      } = y, {
        value: ee
      } = T;
      return e.pair ? !!(Array.isArray(W) && (W[0] || W[1])) && (S.value || ee) : !!W && (S.value || ee);
    }), L = A(() => {
      const {
        showPasswordOn: W
      } = e;
      if (W)
        return W;
      if (e.showPasswordToggle) return "click";
    }), U = I(!1), te = A(() => {
      const {
        textDecoration: W
      } = e;
      return W ? Array.isArray(W) ? W.map((ee) => ({
        textDecoration: ee
      })) : [{
        textDecoration: W
      }] : ["", ""];
    }), X = I(void 0), K = () => {
      var W, ee;
      if (e.type === "textarea") {
        const {
          autosize: we
        } = e;
        if (we && (X.value = (ee = (W = h.value) === null || W === void 0 ? void 0 : W.$el) === null || ee === void 0 ? void 0 : ee.offsetWidth), !s.value || typeof we == "boolean") return;
        const {
          paddingTop: Oe,
          paddingBottom: Ge,
          lineHeight: He
        } = window.getComputedStyle(s.value), lt = Number(Oe.slice(0, -2)), vt = Number(Ge.slice(0, -2)), Jt = Number(He.slice(0, -2)), {
          value: wn
        } = d;
        if (!wn) return;
        if (we.minRows) {
          const Sn = Math.max(we.minRows, 1), Yn = `${lt + vt + Jt * Sn}px`;
          wn.style.minHeight = Yn;
        }
        if (we.maxRows) {
          const Sn = `${lt + vt + Jt * we.maxRows}px`;
          wn.style.maxHeight = Sn;
        }
      }
    }, j = A(() => {
      const {
        maxlength: W
      } = e;
      return W === void 0 ? void 0 : Number(W);
    });
    $t(() => {
      const {
        value: W
      } = y;
      Array.isArray(W) || Ne(W);
    });
    const q = So().proxy;
    function Y(W, ee) {
      const {
        onUpdateValue: we,
        "onUpdate:value": Oe,
        onInput: Ge
      } = e, {
        nTriggerFormInput: He
      } = k;
      we && ne(we, W, ee), Oe && ne(Oe, W, ee), Ge && ne(Ge, W, ee), x.value = W, He();
    }
    function ae(W, ee) {
      const {
        onChange: we
      } = e, {
        nTriggerFormChange: Oe
      } = k;
      we && ne(we, W, ee), x.value = W, Oe();
    }
    function le(W) {
      const {
        onBlur: ee
      } = e, {
        nTriggerFormBlur: we
      } = k;
      ee && ne(ee, W), we();
    }
    function ce(W) {
      const {
        onFocus: ee
      } = e, {
        nTriggerFormFocus: we
      } = k;
      ee && ne(ee, W), we();
    }
    function be(W) {
      const {
        onClear: ee
      } = e;
      ee && ne(ee, W);
    }
    function G(W) {
      const {
        onInputBlur: ee
      } = e;
      ee && ne(ee, W);
    }
    function ue(W) {
      const {
        onInputFocus: ee
      } = e;
      ee && ne(ee, W);
    }
    function Fe() {
      const {
        onDeactivate: W
      } = e;
      W && ne(W);
    }
    function xe() {
      const {
        onActivate: W
      } = e;
      W && ne(W);
    }
    function Pe(W) {
      const {
        onClick: ee
      } = e;
      ee && ne(ee, W);
    }
    function ze(W) {
      const {
        onWrapperFocus: ee
      } = e;
      ee && ne(ee, W);
    }
    function dt(W) {
      const {
        onWrapperBlur: ee
      } = e;
      ee && ne(ee, W);
    }
    function rt() {
      F.value = !0;
    }
    function ft(W) {
      F.value = !1, W.target === v.value ? ht(W, 1) : ht(W, 0);
    }
    function ht(W, ee = 0, we = "input") {
      const Oe = W.target.value;
      if (Ne(Oe), W instanceof InputEvent && !W.isComposing && (F.value = !1), e.type === "textarea") {
        const {
          value: He
        } = h;
        He && He.syncUnifiedContainer();
      }
      if (_ = Oe, F.value) return;
      m.recordCursor();
      const Ge = ye(Oe);
      if (Ge)
        if (!e.pair)
          we === "input" ? Y(Oe, {
            source: ee
          }) : ae(Oe, {
            source: ee
          });
        else {
          let {
            value: He
          } = y;
          Array.isArray(He) ? He = [He[0], He[1]] : He = ["", ""], He[ee] = Oe, we === "input" ? Y(He, {
            source: ee
          }) : ae(He, {
            source: ee
          });
        }
      q.$forceUpdate(), Ge || pt(m.restoreCursor);
    }
    function ye(W) {
      const {
        countGraphemes: ee,
        maxlength: we,
        minlength: Oe
      } = e;
      if (ee) {
        let He;
        if (we !== void 0 && (He === void 0 && (He = ee(W)), He > Number(we)) || Oe !== void 0 && (He === void 0 && (He = ee(W)), He < Number(we)))
          return !1;
      }
      const {
        allowInput: Ge
      } = e;
      return typeof Ge == "function" ? Ge(W) : !0;
    }
    function Ce(W) {
      G(W), W.relatedTarget === l.value && Fe(), W.relatedTarget !== null && (W.relatedTarget === c.value || W.relatedTarget === v.value || W.relatedTarget === s.value) || (P.value = !1), oe(W, "blur"), g.value = null;
    }
    function De(W, ee) {
      ue(W), C.value = !0, P.value = !0, xe(), oe(W, "focus"), ee === 0 ? g.value = c.value : ee === 1 ? g.value = v.value : ee === 2 && (g.value = s.value);
    }
    function Le(W) {
      e.passivelyActivated && (dt(W), oe(W, "blur"));
    }
    function et(W) {
      e.passivelyActivated && (C.value = !0, ze(W), oe(W, "focus"));
    }
    function oe(W, ee) {
      W.relatedTarget !== null && (W.relatedTarget === c.value || W.relatedTarget === v.value || W.relatedTarget === s.value || W.relatedTarget === l.value) || (ee === "focus" ? (ce(W), C.value = !0) : ee === "blur" && (le(W), C.value = !1));
    }
    function he(W, ee) {
      ht(W, ee, "change");
    }
    function Te(W) {
      Pe(W);
    }
    function ut(W) {
      be(W), At();
    }
    function At() {
      e.pair ? (Y(["", ""], {
        source: "clear"
      }), ae(["", ""], {
        source: "clear"
      })) : (Y("", {
        source: "clear"
      }), ae("", {
        source: "clear"
      }));
    }
    function Dt(W) {
      const {
        onMousedown: ee
      } = e;
      ee && ee(W);
      const {
        tagName: we
      } = W.target;
      if (we !== "INPUT" && we !== "TEXTAREA") {
        if (e.resizable) {
          const {
            value: Oe
          } = l;
          if (Oe) {
            const {
              left: Ge,
              top: He,
              width: lt,
              height: vt
            } = Oe.getBoundingClientRect(), Jt = 14;
            if (Ge + lt - Jt < W.clientX && W.clientX < Ge + lt && He + vt - Jt < W.clientY && W.clientY < He + vt)
              return;
          }
        }
        W.preventDefault(), C.value || Q();
      }
    }
    function bt() {
      var W;
      S.value = !0, e.type === "textarea" && ((W = h.value) === null || W === void 0 || W.handleMouseEnterWrapper());
    }
    function it() {
      var W;
      S.value = !1, e.type === "textarea" && ((W = h.value) === null || W === void 0 || W.handleMouseLeaveWrapper());
    }
    function wt() {
      R.value || L.value === "click" && (U.value = !U.value);
    }
    function ot(W) {
      if (R.value) return;
      W.preventDefault();
      const ee = (Oe) => {
        Oe.preventDefault(), Ve("mouseup", document, ee);
      };
      if (Ke("mouseup", document, ee), L.value !== "mousedown") return;
      U.value = !0;
      const we = () => {
        U.value = !1, Ve("mouseup", document, we);
      };
      Ke("mouseup", document, we);
    }
    function fe(W) {
      e.onKeyup && ne(e.onKeyup, W);
    }
    function Be(W) {
      switch (e.onKeydown && ne(e.onKeydown, W), W.key) {
        case "Escape":
          V();
          break;
        case "Enter":
          $(W);
          break;
      }
    }
    function $(W) {
      var ee, we;
      if (e.passivelyActivated) {
        const {
          value: Oe
        } = P;
        if (Oe) {
          e.internalDeactivateOnEnter && V();
          return;
        }
        W.preventDefault(), e.type === "textarea" ? (ee = s.value) === null || ee === void 0 || ee.focus() : (we = c.value) === null || we === void 0 || we.focus();
      }
    }
    function V() {
      e.passivelyActivated && (P.value = !1, pt(() => {
        var W;
        (W = l.value) === null || W === void 0 || W.focus();
      }));
    }
    function Q() {
      var W, ee, we;
      R.value || (e.passivelyActivated ? (W = l.value) === null || W === void 0 || W.focus() : ((ee = s.value) === null || ee === void 0 || ee.focus(), (we = c.value) === null || we === void 0 || we.focus()));
    }
    function se() {
      var W;
      !((W = l.value) === null || W === void 0) && W.contains(document.activeElement) && document.activeElement.blur();
    }
    function de() {
      var W, ee;
      (W = s.value) === null || W === void 0 || W.select(), (ee = c.value) === null || ee === void 0 || ee.select();
    }
    function ge() {
      R.value || (s.value ? s.value.focus() : c.value && c.value.focus());
    }
    function me() {
      const {
        value: W
      } = l;
      W != null && W.contains(document.activeElement) && W !== document.activeElement && V();
    }
    function Se(W) {
      if (e.type === "textarea") {
        const {
          value: ee
        } = s;
        ee == null || ee.scrollTo(W);
      } else {
        const {
          value: ee
        } = c;
        ee == null || ee.scrollTo(W);
      }
    }
    function Ne(W) {
      const {
        type: ee,
        pair: we,
        autosize: Oe
      } = e;
      if (!we && Oe)
        if (ee === "textarea") {
          const {
            value: Ge
          } = d;
          Ge && (Ge.textContent = `${W ?? ""}\r
`);
        } else {
          const {
            value: Ge
          } = u;
          Ge && (W ? Ge.textContent = W : Ge.innerHTML = "&nbsp;");
        }
    }
    function at() {
      K();
    }
    const Ue = I({
      top: "0"
    });
    function Ot(W) {
      var ee;
      const {
        scrollTop: we
      } = W.target;
      Ue.value.top = `${-we}px`, (ee = h.value) === null || ee === void 0 || ee.syncUnifiedContainer();
    }
    let jt = null;
    nt(() => {
      const {
        autosize: W,
        type: ee
      } = e;
      W && ee === "textarea" ? jt = Ie(y, (we) => {
        !Array.isArray(we) && we !== _ && Ne(we);
      }) : jt == null || jt();
    });
    let _t = null;
    nt(() => {
      e.type === "textarea" ? _t = Ie(y, (W) => {
        var ee;
        !Array.isArray(W) && W !== _ && ((ee = h.value) === null || ee === void 0 || ee.syncUnifiedContainer());
      }) : _t == null || _t();
    }), $e(Yu, {
      mergedValueRef: y,
      maxlengthRef: j,
      mergedClsPrefixRef: t,
      countGraphemesRef: ie(e, "countGraphemes")
    });
    const Ut = {
      wrapperElRef: l,
      inputElRef: c,
      textareaElRef: s,
      isCompositing: F,
      clear: At,
      focus: Q,
      blur: se,
      select: de,
      deactivate: me,
      activate: ge,
      scrollTo: Se
    }, Kt = Ft("Input", i, t), rn = A(() => {
      const {
        value: W
      } = w, {
        common: {
          cubicBezierEaseInOut: ee
        },
        self: {
          color: we,
          borderRadius: Oe,
          textColor: Ge,
          caretColor: He,
          caretColorError: lt,
          caretColorWarning: vt,
          textDecorationColor: Jt,
          border: wn,
          borderDisabled: Sn,
          borderHover: Yn,
          borderFocus: Kr,
          placeholderColor: qr,
          placeholderColorDisabled: Gr,
          lineHeightTextarea: Xr,
          colorDisabled: Yr,
          colorFocus: Dn,
          textColorDisabled: En,
          boxShadowFocus: Pi,
          iconSize: zi,
          colorFocusWarning: $i,
          boxShadowFocusWarning: Ai,
          borderWarning: Di,
          borderFocusWarning: Ei,
          borderHoverWarning: Ti,
          colorFocusError: Oi,
          boxShadowFocusError: Mi,
          borderError: Ii,
          borderFocusError: Li,
          borderHoverError: df,
          clearSize: uf,
          clearColor: cf,
          clearColorHover: ff,
          clearColorPressed: hf,
          iconColor: vf,
          iconColorDisabled: gf,
          suffixTextColor: pf,
          countTextColor: mf,
          countTextColorDisabled: bf,
          iconColorHover: xf,
          iconColorPressed: yf,
          loadingColor: Cf,
          loadingColorError: wf,
          loadingColorWarning: Sf,
          fontWeight: Bf,
          [Z("padding", W)]: kf,
          [Z("fontSize", W)]: Rf,
          [Z("height", W)]: Ff
        }
      } = a.value, {
        left: Pf,
        right: zf
      } = Wt(kf);
      return {
        "--n-bezier": ee,
        "--n-count-text-color": mf,
        "--n-count-text-color-disabled": bf,
        "--n-color": we,
        "--n-font-size": Rf,
        "--n-font-weight": Bf,
        "--n-border-radius": Oe,
        "--n-height": Ff,
        "--n-padding-left": Pf,
        "--n-padding-right": zf,
        "--n-text-color": Ge,
        "--n-caret-color": He,
        "--n-text-decoration-color": Jt,
        "--n-border": wn,
        "--n-border-disabled": Sn,
        "--n-border-hover": Yn,
        "--n-border-focus": Kr,
        "--n-placeholder-color": qr,
        "--n-placeholder-color-disabled": Gr,
        "--n-icon-size": zi,
        "--n-line-height-textarea": Xr,
        "--n-color-disabled": Yr,
        "--n-color-focus": Dn,
        "--n-text-color-disabled": En,
        "--n-box-shadow-focus": Pi,
        "--n-loading-color": Cf,
        // form warning
        "--n-caret-color-warning": vt,
        "--n-color-focus-warning": $i,
        "--n-box-shadow-focus-warning": Ai,
        "--n-border-warning": Di,
        "--n-border-focus-warning": Ei,
        "--n-border-hover-warning": Ti,
        "--n-loading-color-warning": Sf,
        // form error
        "--n-caret-color-error": lt,
        "--n-color-focus-error": Oi,
        "--n-box-shadow-focus-error": Mi,
        "--n-border-error": Ii,
        "--n-border-focus-error": Li,
        "--n-border-hover-error": df,
        "--n-loading-color-error": wf,
        // clear-button
        "--n-clear-color": cf,
        "--n-clear-size": uf,
        "--n-clear-color-hover": ff,
        "--n-clear-color-pressed": hf,
        "--n-icon-color": vf,
        "--n-icon-color-hover": xf,
        "--n-icon-color-pressed": yf,
        "--n-icon-color-disabled": gf,
        "--n-suffix-text-color": pf
      };
    }), qt = o ? Ye("input", A(() => {
      const {
        value: W
      } = w;
      return W[0];
    }), rn, e) : void 0;
    return Object.assign(Object.assign({}, Ut), {
      // DOM ref
      wrapperElRef: l,
      inputElRef: c,
      inputMirrorElRef: u,
      inputEl2Ref: v,
      textareaElRef: s,
      textareaMirrorElRef: d,
      textareaScrollbarInstRef: h,
      // value
      rtlEnabled: Kt,
      uncontrolledValue: x,
      mergedValue: y,
      passwordVisible: U,
      mergedPlaceholder: O,
      showPlaceholder1: n,
      showPlaceholder2: E,
      mergedFocus: T,
      isComposing: F,
      activated: P,
      showClearButton: H,
      mergedSize: w,
      mergedDisabled: R,
      textDecorationStyle: te,
      mergedClsPrefix: t,
      mergedBordered: r,
      mergedShowPasswordOn: L,
      placeholderStyle: Ue,
      mergedStatus: B,
      textAreaScrollContainerWidth: X,
      // methods
      handleTextAreaScroll: Ot,
      handleCompositionStart: rt,
      handleCompositionEnd: ft,
      handleInput: ht,
      handleInputBlur: Ce,
      handleInputFocus: De,
      handleWrapperBlur: Le,
      handleWrapperFocus: et,
      handleMouseEnter: bt,
      handleMouseLeave: it,
      handleMouseDown: Dt,
      handleChange: he,
      handleClick: Te,
      handleClear: ut,
      handlePasswordToggleClick: wt,
      handlePasswordToggleMousedown: ot,
      handleWrapperKeydown: Be,
      handleWrapperKeyup: fe,
      handleTextAreaMirrorResize: at,
      getTextareaScrollContainer: () => s.value,
      mergedTheme: a,
      cssVars: o ? void 0 : rn,
      themeClass: qt == null ? void 0 : qt.themeClass,
      onRender: qt == null ? void 0 : qt.onRender
    });
  },
  render() {
    var e, t;
    const {
      mergedClsPrefix: r,
      mergedStatus: o,
      themeClass: i,
      type: a,
      countGraphemes: l,
      onRender: s
    } = this, d = this.$slots;
    return s == null || s(), f("div", {
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
    }, f("div", {
      class: `${r}-input-wrapper`
    }, We(d.prefix, (u) => u && f("div", {
      class: `${r}-input__prefix`
    }, u)), a === "textarea" ? f(An, {
      ref: "textareaScrollbarInstRef",
      class: `${r}-input__textarea`,
      container: this.getTextareaScrollContainer,
      triggerDisplayManually: !0,
      useUnifiedContainer: !0,
      internalHoistYRail: !0
    }, {
      default: () => {
        var u, c;
        const {
          textAreaScrollContainerWidth: v
        } = this, g = {
          width: this.autosize && v && `${v}px`
        };
        return f(je, null, f("textarea", Object.assign({}, this.inputProps, {
          ref: "textareaElRef",
          class: [`${r}-input__textarea-el`, (u = this.inputProps) === null || u === void 0 ? void 0 : u.class],
          autofocus: this.autofocus,
          rows: Number(this.rows),
          placeholder: this.placeholder,
          value: this.mergedValue,
          disabled: this.mergedDisabled,
          maxlength: l ? void 0 : this.maxlength,
          minlength: l ? void 0 : this.minlength,
          readonly: this.readonly,
          tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
          style: [this.textDecorationStyle[0], (c = this.inputProps) === null || c === void 0 ? void 0 : c.style, g],
          onBlur: this.handleInputBlur,
          onFocus: (m) => {
            this.handleInputFocus(m, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? f("div", {
          class: `${r}-input__placeholder`,
          style: [this.placeholderStyle, g],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? f(Tr, {
          onResize: this.handleTextAreaMirrorResize
        }, {
          default: () => f("div", {
            ref: "textareaMirrorElRef",
            class: `${r}-input__textarea-mirror`,
            key: "mirror"
          })
        }) : null);
      }
    }) : f("div", {
      class: `${r}-input__input`
    }, f("input", Object.assign({
      type: a === "password" && this.mergedShowPasswordOn && this.passwordVisible ? "text" : a
    }, this.inputProps, {
      ref: "inputElRef",
      class: [`${r}-input__input-el`, (e = this.inputProps) === null || e === void 0 ? void 0 : e.class],
      style: [this.textDecorationStyle[0], (t = this.inputProps) === null || t === void 0 ? void 0 : t.style],
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
      onFocus: (u) => {
        this.handleInputFocus(u, 0);
      },
      onInput: (u) => {
        this.handleInput(u, 0);
      },
      onChange: (u) => {
        this.handleChange(u, 0);
      }
    })), this.showPlaceholder1 ? f("div", {
      class: `${r}-input__placeholder`
    }, f("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? f("div", {
      class: `${r}-input__input-mirror`,
      key: "mirror",
      ref: "inputMirrorElRef"
    }, " ") : null), !this.pair && We(d.suffix, (u) => u || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? f("div", {
      class: `${r}-input__suffix`
    }, [We(d["clear-icon-placeholder"], (c) => (this.clearable || c) && f(Sa, {
      clsPrefix: r,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => c,
      icon: () => {
        var v, g;
        return (g = (v = this.$slots)["clear-icon"]) === null || g === void 0 ? void 0 : g.call(v);
      }
    })), this.internalLoadingBeforeSuffix ? null : u, this.loading !== void 0 ? f(Ku, {
      clsPrefix: r,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? u : null, this.showCount && this.type !== "textarea" ? f(nd, null, {
      default: (c) => {
        var v;
        const {
          renderCount: g
        } = this;
        return g ? g(c) : (v = d.count) === null || v === void 0 ? void 0 : v.call(d, c);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? f("div", {
      class: `${r}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? tn(d["password-visible-icon"], () => [f(yt, {
      clsPrefix: r
    }, {
      default: () => f(wx, null)
    })]) : tn(d["password-invisible-icon"], () => [f(yt, {
      clsPrefix: r
    }, {
      default: () => f(Sx, null)
    })])) : null]) : null)), this.pair ? f("span", {
      class: `${r}-input__separator`
    }, tn(d.separator, () => [this.separator])) : null, this.pair ? f("div", {
      class: `${r}-input-wrapper`
    }, f("div", {
      class: `${r}-input__input`
    }, f("input", {
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
      onFocus: (u) => {
        this.handleInputFocus(u, 1);
      },
      onInput: (u) => {
        this.handleInput(u, 1);
      },
      onChange: (u) => {
        this.handleChange(u, 1);
      }
    }), this.showPlaceholder2 ? f("div", {
      class: `${r}-input__placeholder`
    }, f("span", null, this.mergedPlaceholder[1])) : null), We(d.suffix, (u) => (this.clearable || u) && f("div", {
      class: `${r}-input__suffix`
    }, [this.clearable && f(Sa, {
      clsPrefix: r,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      icon: () => {
        var c;
        return (c = d["clear-icon"]) === null || c === void 0 ? void 0 : c.call(d);
      },
      placeholder: () => {
        var c;
        return (c = d["clear-icon-placeholder"]) === null || c === void 0 ? void 0 : c.call(d);
      }
    }), u]))) : null, this.mergedBordered ? f("div", {
      class: `${r}-input__border`
    }) : null, this.mergedBordered ? f("div", {
      class: `${r}-input__state-border`
    }) : null, this.showCount && a === "textarea" ? f(nd, null, {
      default: (u) => {
        var c;
        const {
          renderCount: v
        } = this;
        return v ? v(u) : (c = d.count) === null || c === void 0 ? void 0 : c.call(d, u);
      }
    }) : null);
  }
}), G1 = z("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [D(">", [z("input", [D("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), D("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), z("button", [D("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [M("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), D("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [M("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), D("*", [D("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [D(">", [z("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), z("base-selection", [z("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), z("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), M("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), D("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [D(">", [z("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), z("base-selection", [z("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), z("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), M("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), X1 = {}, Y1 = J({
  name: "InputGroup",
  props: X1,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e);
    return qn("-input-group", G1, t), {
      mergedClsPrefix: t
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return f("div", {
      class: `${e}-input-group`
    }, this.$slots);
  }
}), Z1 = z("input-group-label", `
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
`, [M("border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]), J1 = Object.assign(Object.assign({}, ve.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
}), Q1 = J({
  name: "InputGroupLabel",
  props: J1,
  setup(e) {
    const {
      mergedBorderedRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("Input", "-input-group-label", Z1, wl, e, r), a = A(() => {
      const {
        size: s
      } = e, {
        common: {
          cubicBezierEaseInOut: d
        },
        self: {
          groupLabelColor: u,
          borderRadius: c,
          groupLabelTextColor: v,
          lineHeight: g,
          groupLabelBorder: m,
          [Z("fontSize", s)]: h,
          [Z("height", s)]: p
        }
      } = i.value;
      return {
        "--n-bezier": d,
        "--n-group-label-color": u,
        "--n-group-label-border": m,
        "--n-border-radius": c,
        "--n-group-label-text-color": v,
        "--n-font-size": h,
        "--n-line-height": g,
        "--n-height": p
      };
    }), l = o ? Ye("input-group-label", A(() => e.size[0]), a, e) : void 0;
    return {
      mergedClsPrefix: r,
      mergedBordered: t,
      cssVars: o ? void 0 : a,
      themeClass: l == null ? void 0 : l.themeClass,
      onRender: l == null ? void 0 : l.onRender
    };
  },
  render() {
    var e, t, r;
    const {
      mergedClsPrefix: o
    } = this;
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      class: [`${o}-input-group-label`, this.themeClass],
      style: this.cssVars
    }, (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t), this.mergedBordered ? f("div", {
      class: `${o}-input-group-label__border`
    }) : null);
  }
});
function di(e) {
  return e.type === "group";
}
function Zu(e) {
  return e.type === "ignored";
}
function na(e, t) {
  try {
    return !!(1 + t.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
function Ju(e, t) {
  return {
    getIsGroup: di,
    getIgnored: Zu,
    getKey(o) {
      return di(o) ? o.name || o.key || "key-required" : o[e];
    },
    getChildren(o) {
      return o[t];
    }
  };
}
function ey(e, t, r, o) {
  if (!t) return e;
  function i(a) {
    if (!Array.isArray(a)) return [];
    const l = [];
    for (const s of a)
      if (di(s)) {
        const d = i(s[o]);
        d.length && l.push(Object.assign({}, s, {
          [o]: d
        }));
      } else {
        if (Zu(s))
          continue;
        t(r, s) && l.push(s);
      }
    return l;
  }
  return i(e);
}
function ty(e, t, r) {
  const o = /* @__PURE__ */ new Map();
  return e.forEach((i) => {
    di(i) ? i[r].forEach((a) => {
      o.set(a[t], a);
    }) : o.set(i[t], i);
  }), o;
}
function Zn(e) {
  return Xe(e, [255, 255, 255, 0.16]);
}
function Wo(e) {
  return Xe(e, [0, 0, 0, 0.12]);
}
const ny = "n-button-group", ry = {
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
function oy(e) {
  const {
    heightTiny: t,
    heightSmall: r,
    heightMedium: o,
    heightLarge: i,
    borderRadius: a,
    fontSizeTiny: l,
    fontSizeSmall: s,
    fontSizeMedium: d,
    fontSizeLarge: u,
    opacityDisabled: c,
    textColor2: v,
    textColor3: g,
    primaryColorHover: m,
    primaryColorPressed: h,
    borderColor: p,
    primaryColor: x,
    baseColor: b,
    infoColor: y,
    infoColorHover: k,
    infoColorPressed: w,
    successColor: R,
    successColorHover: B,
    successColorPressed: C,
    warningColor: S,
    warningColorHover: F,
    warningColorPressed: P,
    errorColor: _,
    errorColorHover: O,
    errorColorPressed: n,
    fontWeight: E,
    buttonColor2: T,
    buttonColor2Hover: H,
    buttonColor2Pressed: L,
    fontWeightStrong: U
  } = e;
  return Object.assign(Object.assign({}, ry), {
    heightTiny: t,
    heightSmall: r,
    heightMedium: o,
    heightLarge: i,
    borderRadiusTiny: a,
    borderRadiusSmall: a,
    borderRadiusMedium: a,
    borderRadiusLarge: a,
    fontSizeTiny: l,
    fontSizeSmall: s,
    fontSizeMedium: d,
    fontSizeLarge: u,
    opacityDisabled: c,
    // secondary
    colorOpacitySecondary: "0.16",
    colorOpacitySecondaryHover: "0.22",
    colorOpacitySecondaryPressed: "0.28",
    colorSecondary: T,
    colorSecondaryHover: H,
    colorSecondaryPressed: L,
    // tertiary
    colorTertiary: T,
    colorTertiaryHover: H,
    colorTertiaryPressed: L,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: H,
    colorQuaternaryPressed: L,
    // default type
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: v,
    textColorTertiary: g,
    textColorHover: m,
    textColorPressed: h,
    textColorFocus: m,
    textColorDisabled: v,
    textColorText: v,
    textColorTextHover: m,
    textColorTextPressed: h,
    textColorTextFocus: m,
    textColorTextDisabled: v,
    textColorGhost: v,
    textColorGhostHover: m,
    textColorGhostPressed: h,
    textColorGhostFocus: m,
    textColorGhostDisabled: v,
    border: `1px solid ${p}`,
    borderHover: `1px solid ${m}`,
    borderPressed: `1px solid ${h}`,
    borderFocus: `1px solid ${m}`,
    borderDisabled: `1px solid ${p}`,
    rippleColor: x,
    // primary
    colorPrimary: x,
    colorHoverPrimary: m,
    colorPressedPrimary: h,
    colorFocusPrimary: m,
    colorDisabledPrimary: x,
    textColorPrimary: b,
    textColorHoverPrimary: b,
    textColorPressedPrimary: b,
    textColorFocusPrimary: b,
    textColorDisabledPrimary: b,
    textColorTextPrimary: x,
    textColorTextHoverPrimary: m,
    textColorTextPressedPrimary: h,
    textColorTextFocusPrimary: m,
    textColorTextDisabledPrimary: v,
    textColorGhostPrimary: x,
    textColorGhostHoverPrimary: m,
    textColorGhostPressedPrimary: h,
    textColorGhostFocusPrimary: m,
    textColorGhostDisabledPrimary: x,
    borderPrimary: `1px solid ${x}`,
    borderHoverPrimary: `1px solid ${m}`,
    borderPressedPrimary: `1px solid ${h}`,
    borderFocusPrimary: `1px solid ${m}`,
    borderDisabledPrimary: `1px solid ${x}`,
    rippleColorPrimary: x,
    // info
    colorInfo: y,
    colorHoverInfo: k,
    colorPressedInfo: w,
    colorFocusInfo: k,
    colorDisabledInfo: y,
    textColorInfo: b,
    textColorHoverInfo: b,
    textColorPressedInfo: b,
    textColorFocusInfo: b,
    textColorDisabledInfo: b,
    textColorTextInfo: y,
    textColorTextHoverInfo: k,
    textColorTextPressedInfo: w,
    textColorTextFocusInfo: k,
    textColorTextDisabledInfo: v,
    textColorGhostInfo: y,
    textColorGhostHoverInfo: k,
    textColorGhostPressedInfo: w,
    textColorGhostFocusInfo: k,
    textColorGhostDisabledInfo: y,
    borderInfo: `1px solid ${y}`,
    borderHoverInfo: `1px solid ${k}`,
    borderPressedInfo: `1px solid ${w}`,
    borderFocusInfo: `1px solid ${k}`,
    borderDisabledInfo: `1px solid ${y}`,
    rippleColorInfo: y,
    // success
    colorSuccess: R,
    colorHoverSuccess: B,
    colorPressedSuccess: C,
    colorFocusSuccess: B,
    colorDisabledSuccess: R,
    textColorSuccess: b,
    textColorHoverSuccess: b,
    textColorPressedSuccess: b,
    textColorFocusSuccess: b,
    textColorDisabledSuccess: b,
    textColorTextSuccess: R,
    textColorTextHoverSuccess: B,
    textColorTextPressedSuccess: C,
    textColorTextFocusSuccess: B,
    textColorTextDisabledSuccess: v,
    textColorGhostSuccess: R,
    textColorGhostHoverSuccess: B,
    textColorGhostPressedSuccess: C,
    textColorGhostFocusSuccess: B,
    textColorGhostDisabledSuccess: R,
    borderSuccess: `1px solid ${R}`,
    borderHoverSuccess: `1px solid ${B}`,
    borderPressedSuccess: `1px solid ${C}`,
    borderFocusSuccess: `1px solid ${B}`,
    borderDisabledSuccess: `1px solid ${R}`,
    rippleColorSuccess: R,
    // warning
    colorWarning: S,
    colorHoverWarning: F,
    colorPressedWarning: P,
    colorFocusWarning: F,
    colorDisabledWarning: S,
    textColorWarning: b,
    textColorHoverWarning: b,
    textColorPressedWarning: b,
    textColorFocusWarning: b,
    textColorDisabledWarning: b,
    textColorTextWarning: S,
    textColorTextHoverWarning: F,
    textColorTextPressedWarning: P,
    textColorTextFocusWarning: F,
    textColorTextDisabledWarning: v,
    textColorGhostWarning: S,
    textColorGhostHoverWarning: F,
    textColorGhostPressedWarning: P,
    textColorGhostFocusWarning: F,
    textColorGhostDisabledWarning: S,
    borderWarning: `1px solid ${S}`,
    borderHoverWarning: `1px solid ${F}`,
    borderPressedWarning: `1px solid ${P}`,
    borderFocusWarning: `1px solid ${F}`,
    borderDisabledWarning: `1px solid ${S}`,
    rippleColorWarning: S,
    // error
    colorError: _,
    colorHoverError: O,
    colorPressedError: n,
    colorFocusError: O,
    colorDisabledError: _,
    textColorError: b,
    textColorHoverError: b,
    textColorPressedError: b,
    textColorFocusError: b,
    textColorDisabledError: b,
    textColorTextError: _,
    textColorTextHoverError: O,
    textColorTextPressedError: n,
    textColorTextFocusError: O,
    textColorTextDisabledError: v,
    textColorGhostError: _,
    textColorGhostHoverError: O,
    textColorGhostPressedError: n,
    textColorGhostFocusError: O,
    textColorGhostDisabledError: _,
    borderError: `1px solid ${_}`,
    borderHoverError: `1px solid ${O}`,
    borderPressedError: `1px solid ${n}`,
    borderFocusError: `1px solid ${O}`,
    borderDisabledError: `1px solid ${_}`,
    rippleColorError: _,
    waveOpacity: "0.6",
    fontWeight: E,
    fontWeightStrong: U
  });
}
const wi = {
  name: "Button",
  common: Ze,
  self: oy
}, iy = D([z("button", `
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
 `, [N("color", [M("border", {
  borderColor: "var(--n-border-color)"
}), N("disabled", [M("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), Je("disabled", [D("&:focus", [M("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), D("&:hover", [M("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), D("&:active", [M("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), N("pressed", [M("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), N("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [M("border", {
  border: "var(--n-border-disabled)"
})]), Je("disabled", [D("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [M("state-border", {
  border: "var(--n-border-focus)"
})]), D("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [M("state-border", {
  border: "var(--n-border-hover)"
})]), D("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [M("state-border", {
  border: "var(--n-border-pressed)"
})]), N("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [M("state-border", {
  border: "var(--n-border-pressed)"
})])]), N("loading", "cursor: wait;"), z("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [N("active", {
  zIndex: 1,
  animationName: "button-wave-spread, button-wave-opacity"
})]), jr && "MozBoxSizing" in document.createElement("div").style ? D("&::moz-focus-inner", {
  border: 0
}) : null, M("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), M("border", {
  border: "var(--n-border)"
}), M("state-border", {
  border: "var(--n-border)",
  borderColor: "#0000",
  zIndex: 1
}), M("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [z("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [Qt({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), O1()]), M("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [D("~", [M("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), N("block", `
 display: flex;
 width: 100%;
 `), N("dashed", [M("border, state-border", {
  borderStyle: "dashed !important"
})]), N("disabled", {
  cursor: "not-allowed",
  opacity: "var(--n-opacity-disabled)"
})]), D("@keyframes button-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
  }
}), D("@keyframes button-wave-opacity", {
  from: {
    opacity: "var(--n-wave-opacity)"
  },
  to: {
    opacity: 0
  }
})]), ay = Object.assign(Object.assign({}, ve.props), {
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
    default: !Xu
  }
}), dr = J({
  name: "Button",
  props: ay,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      const {
        dashed: w,
        ghost: R,
        text: B,
        secondary: C,
        tertiary: S,
        quaternary: F
      } = e;
      (w || R || B) && (C || S || F) && Qe("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const t = I(null), r = I(null), o = I(!1), i = qe(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = pe(ny, {}), {
      mergedSizeRef: l
    } = Un({}, {
      defaultSize: "medium",
      mergedSize: (w) => {
        const {
          size: R
        } = e;
        if (R) return R;
        const {
          size: B
        } = a;
        if (B) return B;
        const {
          mergedSize: C
        } = w || {};
        return C ? C.value : "medium";
      }
    }), s = A(() => e.focusable && !e.disabled), d = (w) => {
      var R;
      s.value || w.preventDefault(), !e.nativeFocusBehavior && (w.preventDefault(), !e.disabled && s.value && ((R = t.value) === null || R === void 0 || R.focus({
        preventScroll: !0
      })));
    }, u = (w) => {
      var R;
      if (!e.disabled && !e.loading) {
        const {
          onClick: B
        } = e;
        B && ne(B, w), e.text || (R = r.value) === null || R === void 0 || R.play();
      }
    }, c = (w) => {
      switch (w.key) {
        case "Enter":
          if (!e.keyboard)
            return;
          o.value = !1;
      }
    }, v = (w) => {
      switch (w.key) {
        case "Enter":
          if (!e.keyboard || e.loading) {
            w.preventDefault();
            return;
          }
          o.value = !0;
      }
    }, g = () => {
      o.value = !1;
    }, {
      inlineThemeDisabled: m,
      mergedClsPrefixRef: h,
      mergedRtlRef: p
    } = Ae(e), x = ve("Button", "-button", iy, wi, e, h), b = Ft("Button", p, h), y = A(() => {
      const w = x.value, {
        common: {
          cubicBezierEaseInOut: R,
          cubicBezierEaseOut: B
        },
        self: C
      } = w, {
        rippleDuration: S,
        opacityDisabled: F,
        fontWeight: P,
        fontWeightStrong: _
      } = C, O = l.value, {
        dashed: n,
        type: E,
        ghost: T,
        text: H,
        color: L,
        round: U,
        circle: te,
        textColor: X,
        secondary: K,
        tertiary: j,
        quaternary: q,
        strong: Y
      } = e, ae = {
        "--n-font-weight": Y ? _ : P
      };
      let le = {
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
      const ce = E === "tertiary", be = E === "default", G = ce ? "default" : E;
      if (H) {
        const Ce = X || L;
        le = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": Ce || C[Z("textColorText", G)],
          "--n-text-color-hover": Ce ? Zn(Ce) : C[Z("textColorTextHover", G)],
          "--n-text-color-pressed": Ce ? Wo(Ce) : C[Z("textColorTextPressed", G)],
          "--n-text-color-focus": Ce ? Zn(Ce) : C[Z("textColorTextHover", G)],
          "--n-text-color-disabled": Ce || C[Z("textColorTextDisabled", G)]
        };
      } else if (T || n) {
        const Ce = X || L;
        le = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": L || C[Z("rippleColor", G)],
          "--n-text-color": Ce || C[Z("textColorGhost", G)],
          "--n-text-color-hover": Ce ? Zn(Ce) : C[Z("textColorGhostHover", G)],
          "--n-text-color-pressed": Ce ? Wo(Ce) : C[Z("textColorGhostPressed", G)],
          "--n-text-color-focus": Ce ? Zn(Ce) : C[Z("textColorGhostHover", G)],
          "--n-text-color-disabled": Ce || C[Z("textColorGhostDisabled", G)]
        };
      } else if (K) {
        const Ce = be ? C.textColor : ce ? C.textColorTertiary : C[Z("color", G)], De = L || Ce, Le = E !== "default" && E !== "tertiary";
        le = {
          "--n-color": Le ? Ee(De, {
            alpha: Number(C.colorOpacitySecondary)
          }) : C.colorSecondary,
          "--n-color-hover": Le ? Ee(De, {
            alpha: Number(C.colorOpacitySecondaryHover)
          }) : C.colorSecondaryHover,
          "--n-color-pressed": Le ? Ee(De, {
            alpha: Number(C.colorOpacitySecondaryPressed)
          }) : C.colorSecondaryPressed,
          "--n-color-focus": Le ? Ee(De, {
            alpha: Number(C.colorOpacitySecondaryHover)
          }) : C.colorSecondaryHover,
          "--n-color-disabled": C.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": De,
          "--n-text-color-hover": De,
          "--n-text-color-pressed": De,
          "--n-text-color-focus": De,
          "--n-text-color-disabled": De
        };
      } else if (j || q) {
        const Ce = be ? C.textColor : ce ? C.textColorTertiary : C[Z("color", G)], De = L || Ce;
        j ? (le["--n-color"] = C.colorTertiary, le["--n-color-hover"] = C.colorTertiaryHover, le["--n-color-pressed"] = C.colorTertiaryPressed, le["--n-color-focus"] = C.colorSecondaryHover, le["--n-color-disabled"] = C.colorTertiary) : (le["--n-color"] = C.colorQuaternary, le["--n-color-hover"] = C.colorQuaternaryHover, le["--n-color-pressed"] = C.colorQuaternaryPressed, le["--n-color-focus"] = C.colorQuaternaryHover, le["--n-color-disabled"] = C.colorQuaternary), le["--n-ripple-color"] = "#0000", le["--n-text-color"] = De, le["--n-text-color-hover"] = De, le["--n-text-color-pressed"] = De, le["--n-text-color-focus"] = De, le["--n-text-color-disabled"] = De;
      } else
        le = {
          "--n-color": L || C[Z("color", G)],
          "--n-color-hover": L ? Zn(L) : C[Z("colorHover", G)],
          "--n-color-pressed": L ? Wo(L) : C[Z("colorPressed", G)],
          "--n-color-focus": L ? Zn(L) : C[Z("colorFocus", G)],
          "--n-color-disabled": L || C[Z("colorDisabled", G)],
          "--n-ripple-color": L || C[Z("rippleColor", G)],
          "--n-text-color": X || (L ? C.textColorPrimary : ce ? C.textColorTertiary : C[Z("textColor", G)]),
          "--n-text-color-hover": X || (L ? C.textColorHoverPrimary : C[Z("textColorHover", G)]),
          "--n-text-color-pressed": X || (L ? C.textColorPressedPrimary : C[Z("textColorPressed", G)]),
          "--n-text-color-focus": X || (L ? C.textColorFocusPrimary : C[Z("textColorFocus", G)]),
          "--n-text-color-disabled": X || (L ? C.textColorDisabledPrimary : C[Z("textColorDisabled", G)])
        };
      let ue = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      H ? ue = {
        "--n-border": "none",
        "--n-border-hover": "none",
        "--n-border-pressed": "none",
        "--n-border-focus": "none",
        "--n-border-disabled": "none"
      } : ue = {
        "--n-border": C[Z("border", G)],
        "--n-border-hover": C[Z("borderHover", G)],
        "--n-border-pressed": C[Z("borderPressed", G)],
        "--n-border-focus": C[Z("borderFocus", G)],
        "--n-border-disabled": C[Z("borderDisabled", G)]
      };
      const {
        [Z("height", O)]: Fe,
        [Z("fontSize", O)]: xe,
        [Z("padding", O)]: Pe,
        [Z("paddingRound", O)]: ze,
        [Z("iconSize", O)]: dt,
        [Z("borderRadius", O)]: rt,
        [Z("iconMargin", O)]: ft,
        waveOpacity: ht
      } = C, ye = {
        "--n-width": te && !H ? Fe : "initial",
        "--n-height": H ? "initial" : Fe,
        "--n-font-size": xe,
        "--n-padding": te || H ? "initial" : U ? ze : Pe,
        "--n-icon-size": dt,
        "--n-icon-margin": ft,
        "--n-border-radius": H ? "initial" : te || U ? Fe : rt
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": R,
        "--n-bezier-ease-out": B,
        "--n-ripple-duration": S,
        "--n-opacity-disabled": F,
        "--n-wave-opacity": ht
      }, ae), le), ue), ye);
    }), k = m ? Ye("button", A(() => {
      let w = "";
      const {
        dashed: R,
        type: B,
        ghost: C,
        text: S,
        color: F,
        round: P,
        circle: _,
        textColor: O,
        secondary: n,
        tertiary: E,
        quaternary: T,
        strong: H
      } = e;
      R && (w += "a"), C && (w += "b"), S && (w += "c"), P && (w += "d"), _ && (w += "e"), n && (w += "f"), E && (w += "g"), T && (w += "h"), H && (w += "i"), F && (w += `j${ei(F)}`), O && (w += `k${ei(O)}`);
      const {
        value: L
      } = l;
      return w += `l${L[0]}`, w += `m${B[0]}`, w;
    }), y, e) : void 0;
    return {
      selfElRef: t,
      waveElRef: r,
      mergedClsPrefix: h,
      mergedFocusable: s,
      mergedSize: l,
      showBorder: i,
      enterPressed: o,
      rtlEnabled: b,
      handleMousedown: d,
      handleKeydown: v,
      handleBlur: g,
      handleKeyup: c,
      handleClick: u,
      customColorCssVars: A(() => {
        const {
          color: w
        } = e;
        if (!w) return null;
        const R = Zn(w);
        return {
          "--n-border-color": w,
          "--n-border-color-hover": R,
          "--n-border-color-pressed": Wo(w),
          "--n-border-color-focus": R,
          "--n-border-color-disabled": w
        };
      }),
      cssVars: m ? void 0 : y,
      themeClass: k == null ? void 0 : k.themeClass,
      onRender: k == null ? void 0 : k.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e,
      tag: t,
      onRender: r
    } = this;
    r == null || r();
    const o = We(this.$slots.default, (i) => i && f("span", {
      class: `${e}-button__content`
    }, i));
    return f(t, {
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
    }, this.iconPlacement === "right" && o, f(bl, {
      width: !0
    }, {
      default: () => We(this.$slots.icon, (i) => (this.loading || this.renderIcon || i) && f("span", {
        class: `${e}-button__icon`,
        style: {
          margin: zr(this.$slots.default) ? "0" : ""
        }
      }, f(xr, null, {
        default: () => this.loading ? f(Gn, {
          clsPrefix: e,
          key: "loading",
          class: `${e}-icon-slot`,
          strokeWidth: 20
        }) : f("div", {
          key: "icon",
          class: `${e}-icon-slot`,
          role: "none"
        }, this.renderIcon ? this.renderIcon() : i)
      })))
    }), this.iconPlacement === "left" && o, this.text ? null : f(I1, {
      ref: "waveElRef",
      clsPrefix: e
    }), this.showBorder ? f("div", {
      "aria-hidden": !0,
      class: `${e}-button__border`,
      style: this.customColorCssVars
    }) : null, this.showBorder ? f("div", {
      "aria-hidden": !0,
      class: `${e}-button__state-border`,
      style: this.customColorCssVars
    }) : null);
  }
}), ly = {
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
function sy(e) {
  const {
    primaryColor: t,
    borderRadius: r,
    lineHeight: o,
    fontSize: i,
    cardColor: a,
    textColor2: l,
    textColor1: s,
    dividerColor: d,
    fontWeightStrong: u,
    closeIconColor: c,
    closeIconColorHover: v,
    closeIconColorPressed: g,
    closeColorHover: m,
    closeColorPressed: h,
    modalColor: p,
    boxShadow1: x,
    popoverColor: b,
    actionColor: y
  } = e;
  return Object.assign(Object.assign({}, ly), {
    lineHeight: o,
    color: a,
    colorModal: p,
    colorPopover: b,
    colorTarget: t,
    colorEmbedded: y,
    colorEmbeddedModal: y,
    colorEmbeddedPopover: y,
    textColor: l,
    titleTextColor: s,
    borderColor: d,
    actionColor: y,
    titleFontWeight: u,
    closeColorHover: m,
    closeColorPressed: h,
    closeBorderRadius: r,
    closeIconColor: c,
    closeIconColorHover: v,
    closeIconColorPressed: g,
    fontSizeSmall: i,
    fontSizeMedium: i,
    fontSizeLarge: i,
    fontSizeHuge: i,
    boxShadow: x,
    borderRadius: r
  });
}
const Qu = {
  name: "Card",
  common: Ze,
  self: sy
}, dy = D([z("card", `
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
 `, [Td({
  background: "var(--n-color-modal)"
}), N("hoverable", [D("&:hover", "box-shadow: var(--n-box-shadow);")]), N("content-segmented", [D(">", [M("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), N("content-soft-segmented", [D(">", [M("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), N("footer-segmented", [D(">", [M("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), N("footer-soft-segmented", [D(">", [M("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), D(">", [z("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [M("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), M("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), M("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), M("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), M("content", "flex: 1; min-width: 0;"), M("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [D("&:first-child", {
  paddingTop: "var(--n-padding-bottom)"
})]), M("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), z("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [D("img", `
 display: block;
 width: 100%;
 `)]), N("bordered", `
 border: 1px solid var(--n-border-color);
 `, [D("&:target", "border-color: var(--n-color-target);")]), N("action-segmented", [D(">", [M("action", [D("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("content-segmented, content-soft-segmented", [D(">", [M("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [D("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("footer-segmented, footer-soft-segmented", [D(">", [M("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [D("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("embedded", `
 background-color: var(--n-color-embedded);
 `)]), gi(z("card", `
 background: var(--n-color-modal);
 `, [N("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), Ha(z("card", `
 background: var(--n-color-popover);
 `, [N("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), Sl = {
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
}, uy = _n(Sl), cy = Object.assign(Object.assign({}, ve.props), Sl), fy = J({
  name: "Card",
  props: cy,
  slots: Object,
  setup(e) {
    const t = () => {
      const {
        onClose: u
      } = e;
      u && ne(u);
    }, {
      inlineThemeDisabled: r,
      mergedClsPrefixRef: o,
      mergedRtlRef: i
    } = Ae(e), a = ve("Card", "-card", dy, Qu, e, o), l = Ft("Card", i, o), s = A(() => {
      const {
        size: u
      } = e, {
        self: {
          color: c,
          colorModal: v,
          colorTarget: g,
          textColor: m,
          titleTextColor: h,
          titleFontWeight: p,
          borderColor: x,
          actionColor: b,
          borderRadius: y,
          lineHeight: k,
          closeIconColor: w,
          closeIconColorHover: R,
          closeIconColorPressed: B,
          closeColorHover: C,
          closeColorPressed: S,
          closeBorderRadius: F,
          closeIconSize: P,
          closeSize: _,
          boxShadow: O,
          colorPopover: n,
          colorEmbedded: E,
          colorEmbeddedModal: T,
          colorEmbeddedPopover: H,
          [Z("padding", u)]: L,
          [Z("fontSize", u)]: U,
          [Z("titleFontSize", u)]: te
        },
        common: {
          cubicBezierEaseInOut: X
        }
      } = a.value, {
        top: K,
        left: j,
        bottom: q
      } = Wt(L);
      return {
        "--n-bezier": X,
        "--n-border-radius": y,
        "--n-color": c,
        "--n-color-modal": v,
        "--n-color-popover": n,
        "--n-color-embedded": E,
        "--n-color-embedded-modal": T,
        "--n-color-embedded-popover": H,
        "--n-color-target": g,
        "--n-text-color": m,
        "--n-line-height": k,
        "--n-action-color": b,
        "--n-title-text-color": h,
        "--n-title-font-weight": p,
        "--n-close-icon-color": w,
        "--n-close-icon-color-hover": R,
        "--n-close-icon-color-pressed": B,
        "--n-close-color-hover": C,
        "--n-close-color-pressed": S,
        "--n-border-color": x,
        "--n-box-shadow": O,
        // size
        "--n-padding-top": K,
        "--n-padding-bottom": q,
        "--n-padding-left": j,
        "--n-font-size": U,
        "--n-title-font-size": te,
        "--n-close-size": _,
        "--n-close-icon-size": P,
        "--n-close-border-radius": F
      };
    }), d = r ? Ye("card", A(() => e.size[0]), s, e) : void 0;
    return {
      rtlEnabled: l,
      mergedClsPrefix: o,
      mergedTheme: a,
      handleCloseClick: t,
      cssVars: r ? void 0 : s,
      themeClass: d == null ? void 0 : d.themeClass,
      onRender: d == null ? void 0 : d.onRender
    };
  },
  render() {
    const {
      segmented: e,
      bordered: t,
      hoverable: r,
      mergedClsPrefix: o,
      rtlEnabled: i,
      onRender: a,
      embedded: l,
      tag: s,
      $slots: d
    } = this;
    return a == null || a(), f(s, {
      class: [`${o}-card`, this.themeClass, l && `${o}-card--embedded`, {
        [`${o}-card--rtl`]: i,
        [`${o}-card--content${typeof e != "boolean" && e.content === "soft" ? "-soft" : ""}-segmented`]: e === !0 || e !== !1 && e.content,
        [`${o}-card--footer${typeof e != "boolean" && e.footer === "soft" ? "-soft" : ""}-segmented`]: e === !0 || e !== !1 && e.footer,
        [`${o}-card--action-segmented`]: e === !0 || e !== !1 && e.action,
        [`${o}-card--bordered`]: t,
        [`${o}-card--hoverable`]: r
      }],
      style: this.cssVars,
      role: this.role
    }, We(d.cover, (u) => {
      const c = this.cover ? an([this.cover()]) : u;
      return c && f("div", {
        class: `${o}-card-cover`,
        role: "none"
      }, c);
    }), We(d.header, (u) => {
      const {
        title: c
      } = this, v = c ? an(typeof c == "function" ? [c()] : [c]) : u;
      return v || this.closable ? f("div", {
        class: [`${o}-card-header`, this.headerClass],
        style: this.headerStyle,
        role: "heading"
      }, f("div", {
        class: `${o}-card-header__main`,
        role: "heading"
      }, v), We(d["header-extra"], (g) => {
        const m = this.headerExtra ? an([this.headerExtra()]) : g;
        return m && f("div", {
          class: [`${o}-card-header__extra`, this.headerExtraClass],
          style: this.headerExtraStyle
        }, m);
      }), this.closable && f(Vr, {
        clsPrefix: o,
        class: `${o}-card-header__close`,
        onClick: this.handleCloseClick,
        absolute: !0
      })) : null;
    }), We(d.default, (u) => {
      const {
        content: c
      } = this, v = c ? an(typeof c == "function" ? [c()] : [c]) : u;
      return v && f("div", {
        class: [`${o}-card__content`, this.contentClass],
        style: this.contentStyle,
        role: "none"
      }, v);
    }), We(d.footer, (u) => {
      const c = this.footer ? an([this.footer()]) : u;
      return c && f("div", {
        class: [`${o}-card__footer`, this.footerClass],
        style: this.footerStyle,
        role: "none"
      }, c);
    }), We(d.action, (u) => {
      const c = this.action ? an([this.action()]) : u;
      return c && f("div", {
        class: `${o}-card__action`,
        role: "none"
      }, c);
    }));
  }
}), hy = {
  sizeSmall: "14px",
  sizeMedium: "16px",
  sizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function vy(e) {
  const {
    baseColor: t,
    inputColorDisabled: r,
    cardColor: o,
    modalColor: i,
    popoverColor: a,
    textColorDisabled: l,
    borderColor: s,
    primaryColor: d,
    textColor2: u,
    fontSizeSmall: c,
    fontSizeMedium: v,
    fontSizeLarge: g,
    borderRadiusSmall: m,
    lineHeight: h
  } = e;
  return Object.assign(Object.assign({}, hy), {
    labelLineHeight: h,
    fontSizeSmall: c,
    fontSizeMedium: v,
    fontSizeLarge: g,
    borderRadius: m,
    color: t,
    colorChecked: d,
    colorDisabled: r,
    colorDisabledChecked: r,
    colorTableHeader: o,
    colorTableHeaderModal: i,
    colorTableHeaderPopover: a,
    checkMarkColor: t,
    checkMarkColorDisabled: l,
    checkMarkColorDisabledChecked: l,
    border: `1px solid ${s}`,
    borderDisabled: `1px solid ${s}`,
    borderDisabledChecked: `1px solid ${s}`,
    borderChecked: `1px solid ${d}`,
    borderFocus: `1px solid ${d}`,
    boxShadowFocus: `0 0 0 2px ${Ee(d, {
      alpha: 0.3
    })}`,
    textColor: u,
    textColorDisabled: l
  });
}
const ec = {
  name: "Checkbox",
  common: Ze,
  self: vy
}, tc = "n-checkbox-group", gy = {
  min: Number,
  max: Number,
  size: String,
  value: Array,
  defaultValue: {
    type: Array,
    default: null
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  // deprecated
  onChange: [Function, Array]
}, nc = J({
  name: "CheckboxGroup",
  props: gy,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.onChange !== void 0 && Qe("checkbox-group", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = Un(e), {
      mergedSizeRef: o,
      mergedDisabledRef: i
    } = r, a = I(e.defaultValue), l = A(() => e.value), s = Pt(l, a), d = A(() => {
      var v;
      return ((v = s.value) === null || v === void 0 ? void 0 : v.length) || 0;
    }), u = A(() => Array.isArray(s.value) ? new Set(s.value) : /* @__PURE__ */ new Set());
    function c(v, g) {
      const {
        nTriggerFormInput: m,
        nTriggerFormChange: h
      } = r, {
        onChange: p,
        "onUpdate:value": x,
        onUpdateValue: b
      } = e;
      if (Array.isArray(s.value)) {
        const y = Array.from(s.value), k = y.findIndex((w) => w === g);
        v ? ~k || (y.push(g), b && ne(b, y, {
          actionType: "check",
          value: g
        }), x && ne(x, y, {
          actionType: "check",
          value: g
        }), m(), h(), a.value = y, p && ne(p, y)) : ~k && (y.splice(k, 1), b && ne(b, y, {
          actionType: "uncheck",
          value: g
        }), x && ne(x, y, {
          actionType: "uncheck",
          value: g
        }), p && ne(p, y), a.value = y, m(), h());
      } else
        v ? (b && ne(b, [g], {
          actionType: "check",
          value: g
        }), x && ne(x, [g], {
          actionType: "check",
          value: g
        }), p && ne(p, [g]), a.value = [g], m(), h()) : (b && ne(b, [], {
          actionType: "uncheck",
          value: g
        }), x && ne(x, [], {
          actionType: "uncheck",
          value: g
        }), p && ne(p, []), a.value = [], m(), h());
    }
    return $e(tc, {
      checkedCountRef: d,
      maxRef: ie(e, "max"),
      minRef: ie(e, "min"),
      valueSetRef: u,
      disabledRef: i,
      mergedSizeRef: o,
      toggleCheckbox: c
    }), {
      mergedClsPrefix: t
    };
  },
  render() {
    return f("div", {
      class: `${this.mergedClsPrefix}-checkbox-group`,
      role: "group"
    }, this.$slots);
  }
}), py = () => f("svg", {
  viewBox: "0 0 64 64",
  class: "check-icon"
}, f("path", {
  d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"
})), my = () => f("svg", {
  viewBox: "0 0 100 100",
  class: "line-icon"
}, f("path", {
  d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"
})), by = D([
  z("checkbox", `
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `, [N("show-label", "line-height: var(--n-label-line-height);"), D("&:hover", [z("checkbox-box", [M("border", "border: var(--n-border-checked);")])]), D("&:focus:not(:active)", [z("checkbox-box", [M("border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), N("inside-table", [z("checkbox-box", `
 background-color: var(--n-merged-color-table);
 `)]), N("checked", [z("checkbox-box", `
 background-color: var(--n-color-checked);
 `, [z("checkbox-icon", [
    // if not set width to 100%, safari & old chrome won't display the icon
    D(".check-icon", `
 opacity: 1;
 transform: scale(1);
 `)
  ])])]), N("indeterminate", [z("checkbox-box", [z("checkbox-icon", [D(".check-icon", `
 opacity: 0;
 transform: scale(.5);
 `), D(".line-icon", `
 opacity: 1;
 transform: scale(1);
 `)])])]), N("checked, indeterminate", [D("&:focus:not(:active)", [z("checkbox-box", [M("border", `
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), z("checkbox-box", `
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `, [M("border", {
    border: "var(--n-border-checked)"
  })])]), N("disabled", {
    cursor: "not-allowed"
  }, [N("checked", [z("checkbox-box", `
 background-color: var(--n-color-disabled-checked);
 `, [M("border", {
    border: "var(--n-border-disabled-checked)"
  }), z("checkbox-icon", [D(".check-icon, .line-icon", {
    fill: "var(--n-check-mark-color-disabled-checked)"
  })])])]), z("checkbox-box", `
 background-color: var(--n-color-disabled);
 `, [M("border", `
 border: var(--n-border-disabled);
 `), z("checkbox-icon", [D(".check-icon, .line-icon", `
 fill: var(--n-check-mark-color-disabled);
 `)])]), M("label", `
 color: var(--n-text-color-disabled);
 `)]), z("checkbox-box-wrapper", `
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `), z("checkbox-box", `
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 height: var(--n-size);
 width: var(--n-size);
 display: inline-block;
 box-sizing: border-box;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color 0.3s var(--n-bezier);
 `, [M("border", `
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border: var(--n-border);
 `), z("checkbox-icon", `
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `, [D(".check-icon, .line-icon", `
 width: 100%;
 fill: var(--n-check-mark-color);
 opacity: 0;
 transform: scale(0.5);
 transform-origin: center;
 transition:
 fill 0.3s var(--n-bezier),
 transform 0.3s var(--n-bezier),
 opacity 0.3s var(--n-bezier),
 border-color 0.3s var(--n-bezier);
 `), Qt({
    left: "1px",
    top: "1px"
  })])]), M("label", `
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `, [D("&:empty", {
    display: "none"
  })])]),
  // modal table header checkbox
  gi(z("checkbox", `
 --n-merged-color-table: var(--n-color-table-modal);
 `)),
  // popover table header checkbox
  Ha(z("checkbox", `
 --n-merged-color-table: var(--n-color-table-popover);
 `))
]), xy = Object.assign(Object.assign({}, ve.props), {
  size: String,
  checked: {
    type: [Boolean, String, Number],
    default: void 0
  },
  defaultChecked: {
    type: [Boolean, String, Number],
    default: !1
  },
  value: [String, Number],
  disabled: {
    type: Boolean,
    default: void 0
  },
  indeterminate: Boolean,
  label: String,
  focusable: {
    type: Boolean,
    default: !0
  },
  checkedValue: {
    type: [Boolean, String, Number],
    default: !0
  },
  uncheckedValue: {
    type: [Boolean, String, Number],
    default: !1
  },
  "onUpdate:checked": [Function, Array],
  onUpdateChecked: [Function, Array],
  // private
  privateInsideTable: Boolean,
  // deprecated
  onChange: [Function, Array]
}), Si = J({
  name: "Checkbox",
  props: xy,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.onChange && Qe("checkbox", "`on-change` is deprecated, please use `on-update:checked` instead.");
    });
    const t = pe(tc, null), r = I(null), {
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = I(e.defaultChecked), s = ie(e, "checked"), d = Pt(s, l), u = qe(() => {
      if (t) {
        const B = t.valueSetRef.value;
        return B && e.value !== void 0 ? B.has(e.value) : !1;
      } else
        return d.value === e.checkedValue;
    }), c = Un(e, {
      mergedSize(B) {
        const {
          size: C
        } = e;
        if (C !== void 0) return C;
        if (t) {
          const {
            value: S
          } = t.mergedSizeRef;
          if (S !== void 0)
            return S;
        }
        if (B) {
          const {
            mergedSize: S
          } = B;
          if (S !== void 0) return S.value;
        }
        return "medium";
      },
      mergedDisabled(B) {
        const {
          disabled: C
        } = e;
        if (C !== void 0) return C;
        if (t) {
          if (t.disabledRef.value) return !0;
          const {
            maxRef: {
              value: S
            },
            checkedCountRef: F
          } = t;
          if (S !== void 0 && F.value >= S && !u.value)
            return !0;
          const {
            minRef: {
              value: P
            }
          } = t;
          if (P !== void 0 && F.value <= P && u.value)
            return !0;
        }
        return B ? B.disabled.value : !1;
      }
    }), {
      mergedDisabledRef: v,
      mergedSizeRef: g
    } = c, m = ve("Checkbox", "-checkbox", by, ec, e, o);
    function h(B) {
      if (t && e.value !== void 0)
        t.toggleCheckbox(!u.value, e.value);
      else {
        const {
          onChange: C,
          "onUpdate:checked": S,
          onUpdateChecked: F
        } = e, {
          nTriggerFormInput: P,
          nTriggerFormChange: _
        } = c, O = u.value ? e.uncheckedValue : e.checkedValue;
        S && ne(S, O, B), F && ne(F, O, B), C && ne(C, O, B), P(), _(), l.value = O;
      }
    }
    function p(B) {
      v.value || h(B);
    }
    function x(B) {
      if (!v.value)
        switch (B.key) {
          case " ":
          case "Enter":
            h(B);
        }
    }
    function b(B) {
      switch (B.key) {
        case " ":
          B.preventDefault();
      }
    }
    const y = {
      focus: () => {
        var B;
        (B = r.value) === null || B === void 0 || B.focus();
      },
      blur: () => {
        var B;
        (B = r.value) === null || B === void 0 || B.blur();
      }
    }, k = Ft("Checkbox", a, o), w = A(() => {
      const {
        value: B
      } = g, {
        common: {
          cubicBezierEaseInOut: C
        },
        self: {
          borderRadius: S,
          color: F,
          colorChecked: P,
          colorDisabled: _,
          colorTableHeader: O,
          colorTableHeaderModal: n,
          colorTableHeaderPopover: E,
          checkMarkColor: T,
          checkMarkColorDisabled: H,
          border: L,
          borderFocus: U,
          borderDisabled: te,
          borderChecked: X,
          boxShadowFocus: K,
          textColor: j,
          textColorDisabled: q,
          checkMarkColorDisabledChecked: Y,
          colorDisabledChecked: ae,
          borderDisabledChecked: le,
          labelPadding: ce,
          labelLineHeight: be,
          labelFontWeight: G,
          [Z("fontSize", B)]: ue,
          [Z("size", B)]: Fe
        }
      } = m.value;
      return {
        "--n-label-line-height": be,
        "--n-label-font-weight": G,
        "--n-size": Fe,
        "--n-bezier": C,
        "--n-border-radius": S,
        "--n-border": L,
        "--n-border-checked": X,
        "--n-border-focus": U,
        "--n-border-disabled": te,
        "--n-border-disabled-checked": le,
        "--n-box-shadow-focus": K,
        "--n-color": F,
        "--n-color-checked": P,
        "--n-color-table": O,
        "--n-color-table-modal": n,
        "--n-color-table-popover": E,
        "--n-color-disabled": _,
        "--n-color-disabled-checked": ae,
        "--n-text-color": j,
        "--n-text-color-disabled": q,
        "--n-check-mark-color": T,
        "--n-check-mark-color-disabled": H,
        "--n-check-mark-color-disabled-checked": Y,
        "--n-font-size": ue,
        "--n-label-padding": ce
      };
    }), R = i ? Ye("checkbox", A(() => g.value[0]), w, e) : void 0;
    return Object.assign(c, y, {
      rtlEnabled: k,
      selfRef: r,
      mergedClsPrefix: o,
      mergedDisabled: v,
      renderedChecked: u,
      mergedTheme: m,
      labelId: xn(),
      handleClick: p,
      handleKeyUp: x,
      handleKeyDown: b,
      cssVars: i ? void 0 : w,
      themeClass: R == null ? void 0 : R.themeClass,
      onRender: R == null ? void 0 : R.onRender
    });
  },
  render() {
    var e;
    const {
      $slots: t,
      renderedChecked: r,
      mergedDisabled: o,
      indeterminate: i,
      privateInsideTable: a,
      cssVars: l,
      labelId: s,
      label: d,
      mergedClsPrefix: u,
      focusable: c,
      handleKeyUp: v,
      handleKeyDown: g,
      handleClick: m
    } = this;
    (e = this.onRender) === null || e === void 0 || e.call(this);
    const h = We(t.default, (p) => d || p ? f("span", {
      class: `${u}-checkbox__label`,
      id: s
    }, d || p) : null);
    return f("div", {
      ref: "selfRef",
      class: [`${u}-checkbox`, this.themeClass, this.rtlEnabled && `${u}-checkbox--rtl`, r && `${u}-checkbox--checked`, o && `${u}-checkbox--disabled`, i && `${u}-checkbox--indeterminate`, a && `${u}-checkbox--inside-table`, h && `${u}-checkbox--show-label`],
      tabindex: o || !c ? void 0 : 0,
      role: "checkbox",
      "aria-checked": i ? "mixed" : r,
      "aria-labelledby": s,
      style: l,
      onKeyup: v,
      onKeydown: g,
      onClick: m,
      onMousedown: () => {
        Ke("selectstart", window, (p) => {
          p.preventDefault();
        }, {
          once: !0
        });
      }
    }, f("div", {
      class: `${u}-checkbox-box-wrapper`
    }, " ", f("div", {
      class: `${u}-checkbox-box`
    }, f(xr, null, {
      default: () => this.indeterminate ? f("div", {
        key: "indeterminate",
        class: `${u}-checkbox-icon`
      }, my()) : f("div", {
        key: "check",
        class: `${u}-checkbox-icon`
      }, py())
    }), f("div", {
      class: `${u}-checkbox-box__border`
    }))), h);
  }
});
function yy(e) {
  const {
    fontWeight: t,
    textColor1: r,
    textColor2: o,
    textColorDisabled: i,
    dividerColor: a,
    fontSize: l
  } = e;
  return {
    titleFontSize: l,
    titleFontWeight: t,
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
const Cy = {
  name: "Collapse",
  common: Ze,
  self: yy
}, wy = z("collapse", "width: 100%;", [z("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [N("disabled", [M("header", "cursor: not-allowed;", [M("header-main", `
 color: var(--n-title-text-color-disabled);
 `), z("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), z("collapse-item", "margin-left: 32px;"), D("&:first-child", "margin-top: 0;"), D("&:first-child >", [M("header", "padding-top: 0;")]), N("left-arrow-placement", [M("header", [z("collapse-item-arrow", "margin-right: 4px;")])]), N("right-arrow-placement", [M("header", [z("collapse-item-arrow", "margin-left: 4px;")])]), M("content-wrapper", [M("content-inner", "padding-top: 16px;"), Gu({
  duration: "0.15s"
})]), N("active", [M("header", [N("active", [z("collapse-item-arrow", "transform: rotate(90deg);")])])]), D("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), Je("disabled", [N("trigger-area-main", [M("header", [M("header-main", "cursor: pointer;"), z("collapse-item-arrow", "cursor: default;")])]), N("trigger-area-arrow", [M("header", [z("collapse-item-arrow", "cursor: pointer;")])]), N("trigger-area-extra", [M("header", [M("header-extra", "cursor: pointer;")])])]), M("header", `
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `, [M("header-main", `
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), M("header-extra", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), z("collapse-item-arrow", `
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]), Sy = Object.assign(Object.assign({}, ve.props), {
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
    validator: () => (process.env.NODE_ENV !== "production" && zt("collapse", "`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead."), !0),
    default: void 0
  }
}), rc = "n-collapse", By = J({
  name: "Collapse",
  props: Sy,
  slots: Object,
  setup(e, {
    slots: t
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = I(e.defaultExpandedNames), l = A(() => e.expandedNames), s = Pt(l, a), d = ve("Collapse", "-collapse", wy, Cy, e, r);
    function u(p) {
      const {
        "onUpdate:expandedNames": x,
        onUpdateExpandedNames: b,
        onExpandedNamesChange: y
      } = e;
      b && ne(b, p), x && ne(x, p), y && ne(y, p), a.value = p;
    }
    function c(p) {
      const {
        onItemHeaderClick: x
      } = e;
      x && ne(x, p);
    }
    function v(p, x, b) {
      const {
        accordion: y
      } = e, {
        value: k
      } = s;
      if (y)
        p ? (u([x]), c({
          name: x,
          expanded: !0,
          event: b
        })) : (u([]), c({
          name: x,
          expanded: !1,
          event: b
        }));
      else if (!Array.isArray(k))
        u([x]), c({
          name: x,
          expanded: !0,
          event: b
        });
      else {
        const w = k.slice(), R = w.findIndex((B) => x === B);
        ~R ? (w.splice(R, 1), u(w), c({
          name: x,
          expanded: !1,
          event: b
        })) : (w.push(x), u(w), c({
          name: x,
          expanded: !0,
          event: b
        }));
      }
    }
    $e(rc, {
      props: e,
      mergedClsPrefixRef: r,
      expandedNamesRef: s,
      slots: t,
      toggleItem: v
    });
    const g = Ft("Collapse", i, r), m = A(() => {
      const {
        common: {
          cubicBezierEaseInOut: p
        },
        self: {
          titleFontWeight: x,
          dividerColor: b,
          titlePadding: y,
          titleTextColor: k,
          titleTextColorDisabled: w,
          textColor: R,
          arrowColor: B,
          fontSize: C,
          titleFontSize: S,
          arrowColorDisabled: F,
          itemMargin: P
        }
      } = d.value;
      return {
        "--n-font-size": C,
        "--n-bezier": p,
        "--n-text-color": R,
        "--n-divider-color": b,
        "--n-title-padding": y,
        "--n-title-font-size": S,
        "--n-title-text-color": k,
        "--n-title-text-color-disabled": w,
        "--n-title-font-weight": x,
        "--n-arrow-color": B,
        "--n-arrow-color-disabled": F,
        "--n-item-margin": P
      };
    }), h = o ? Ye("collapse", void 0, m, e) : void 0;
    return {
      rtlEnabled: g,
      mergedTheme: d,
      mergedClsPrefix: r,
      cssVars: o ? void 0 : m,
      themeClass: h == null ? void 0 : h.themeClass,
      onRender: h == null ? void 0 : h.onRender
    };
  },
  render() {
    var e;
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      class: [`${this.mergedClsPrefix}-collapse`, this.rtlEnabled && `${this.mergedClsPrefix}-collapse--rtl`, this.themeClass],
      style: this.cssVars
    }, this.$slots);
  }
}), ky = J({
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
      onceTrue: Id(ie(e, "show"))
    };
  },
  render() {
    return f(bl, null, {
      default: () => {
        const {
          show: e,
          displayDirective: t,
          onceTrue: r,
          clsPrefix: o
        } = this, i = t === "show" && r, a = f("div", {
          class: `${o}-collapse-item__content-wrapper`
        }, f("div", {
          class: `${o}-collapse-item__content-inner`
        }, this.$slots));
        return i ? nn(a, [[jn, e]]) : e ? a : null;
      }
    });
  }
}), Ry = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
}, Fy = J({
  name: "CollapseItem",
  props: Ry,
  setup(e) {
    const {
      mergedRtlRef: t
    } = Ae(e), r = xn(), o = qe(() => {
      var v;
      return (v = e.name) !== null && v !== void 0 ? v : r;
    }), i = pe(rc);
    i || Pn("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
    const {
      expandedNamesRef: a,
      props: l,
      mergedClsPrefixRef: s,
      slots: d
    } = i, u = A(() => {
      const {
        value: v
      } = a;
      if (Array.isArray(v)) {
        const {
          value: g
        } = o;
        return !~v.findIndex((m) => m === g);
      } else if (v) {
        const {
          value: g
        } = o;
        return g !== v;
      }
      return !0;
    });
    return {
      rtlEnabled: Ft("Collapse", t, s),
      collapseSlots: d,
      randomName: r,
      mergedClsPrefix: s,
      collapsed: u,
      triggerAreas: ie(l, "triggerAreas"),
      mergedDisplayDirective: A(() => {
        const {
          displayDirective: v
        } = e;
        return v || l.displayDirective;
      }),
      arrowPlacement: A(() => l.arrowPlacement),
      handleClick(v) {
        let g = "main";
        Zt(v, "arrow") && (g = "arrow"), Zt(v, "extra") && (g = "extra"), l.triggerAreas.includes(g) && i && !e.disabled && i.toggleItem(u.value, o.value, v);
      }
    };
  },
  render() {
    const {
      collapseSlots: e,
      $slots: t,
      arrowPlacement: r,
      collapsed: o,
      mergedDisplayDirective: i,
      mergedClsPrefix: a,
      disabled: l,
      triggerAreas: s
    } = this, d = fa(t.header, {
      collapsed: o
    }, () => [this.title]), u = t["header-extra"] || e["header-extra"], c = t.arrow || e.arrow;
    return f("div", {
      class: [`${a}-collapse-item`, `${a}-collapse-item--${r}-arrow-placement`, l && `${a}-collapse-item--disabled`, !o && `${a}-collapse-item--active`, s.map((v) => `${a}-collapse-item--trigger-area-${v}`)]
    }, f("div", {
      class: [`${a}-collapse-item__header`, !o && `${a}-collapse-item__header--active`]
    }, f("div", {
      class: `${a}-collapse-item__header-main`,
      onClick: this.handleClick
    }, r === "right" && d, f("div", {
      class: `${a}-collapse-item-arrow`,
      key: this.rtlEnabled ? 0 : 1,
      "data-arrow": !0
    }, fa(c, {
      collapsed: o
    }, () => [f(yt, {
      clsPrefix: a
    }, {
      default: () => this.rtlEnabled ? f(bx, null) : f(gl, null)
    })])), r === "left" && d), P0(u, {
      collapsed: o
    }, (v) => f("div", {
      class: `${a}-collapse-item__header-extra`,
      onClick: this.handleClick,
      "data-extra": !0
    }, v))), f(ky, {
      clsPrefix: a,
      displayDirective: i,
      show: !o
    }, t));
  }
}), Py = {
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
    validator: () => (zt("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, oc = J({
  name: "ConfigProvider",
  alias: ["App"],
  props: Py,
  setup(e) {
    const t = pe(cn, null), r = A(() => {
      const {
        theme: p
      } = e;
      if (p === null) return;
      const x = t == null ? void 0 : t.mergedThemeRef.value;
      return p === void 0 ? x : x === void 0 ? p : Object.assign({}, x, p);
    }), o = A(() => {
      const {
        themeOverrides: p
      } = e;
      if (p !== null) {
        if (p === void 0)
          return t == null ? void 0 : t.mergedThemeOverridesRef.value;
        {
          const x = t == null ? void 0 : t.mergedThemeOverridesRef.value;
          return x === void 0 ? p : no({}, x, p);
        }
      }
    }), i = qe(() => {
      const {
        namespace: p
      } = e;
      return p === void 0 ? t == null ? void 0 : t.mergedNamespaceRef.value : p;
    }), a = qe(() => {
      const {
        bordered: p
      } = e;
      return p === void 0 ? t == null ? void 0 : t.mergedBorderedRef.value : p;
    }), l = A(() => {
      const {
        icons: p
      } = e;
      return p === void 0 ? t == null ? void 0 : t.mergedIconsRef.value : p;
    }), s = A(() => {
      const {
        componentOptions: p
      } = e;
      return p !== void 0 ? p : t == null ? void 0 : t.mergedComponentPropsRef.value;
    }), d = A(() => {
      const {
        clsPrefix: p
      } = e;
      return p !== void 0 ? p : t ? t.mergedClsPrefixRef.value : ti;
    }), u = A(() => {
      var p;
      const {
        rtl: x
      } = e;
      if (x === void 0)
        return t == null ? void 0 : t.mergedRtlRef.value;
      const b = {};
      for (const y of x)
        b[y.name] = Al(y), (p = y.peers) === null || p === void 0 || p.forEach((k) => {
          k.name in b || (b[k.name] = Al(k));
        });
      return b;
    }), c = A(() => e.breakpoints || (t == null ? void 0 : t.mergedBreakpointsRef.value)), v = e.inlineThemeDisabled || (t == null ? void 0 : t.inlineThemeDisabled), g = e.preflightStyleDisabled || (t == null ? void 0 : t.preflightStyleDisabled), m = e.styleMountTarget || (t == null ? void 0 : t.styleMountTarget), h = A(() => {
      const {
        value: p
      } = r, {
        value: x
      } = o, b = x && Object.keys(x).length !== 0, y = p == null ? void 0 : p.name;
      return y ? b ? `${y}-${vo(JSON.stringify(o.value))}` : y : b ? vo(JSON.stringify(o.value)) : "";
    });
    return $e(cn, {
      mergedThemeHashRef: h,
      mergedBreakpointsRef: c,
      mergedRtlRef: u,
      mergedIconsRef: l,
      mergedComponentPropsRef: s,
      mergedBorderedRef: a,
      mergedNamespaceRef: i,
      mergedClsPrefixRef: d,
      mergedLocaleRef: A(() => {
        const {
          locale: p
        } = e;
        if (p !== null)
          return p === void 0 ? t == null ? void 0 : t.mergedLocaleRef.value : p;
      }),
      mergedDateLocaleRef: A(() => {
        const {
          dateLocale: p
        } = e;
        if (p !== null)
          return p === void 0 ? t == null ? void 0 : t.mergedDateLocaleRef.value : p;
      }),
      mergedHljsRef: A(() => {
        const {
          hljs: p
        } = e;
        return p === void 0 ? t == null ? void 0 : t.mergedHljsRef.value : p;
      }),
      mergedKatexRef: A(() => {
        const {
          katex: p
        } = e;
        return p === void 0 ? t == null ? void 0 : t.mergedKatexRef.value : p;
      }),
      mergedThemeRef: r,
      mergedThemeOverridesRef: o,
      inlineThemeDisabled: v || !1,
      preflightStyleDisabled: g || !1,
      styleMountTarget: m
    }), {
      mergedClsPrefix: d,
      mergedBordered: a,
      mergedNamespace: i,
      mergedTheme: r,
      mergedThemeOverrides: o
    };
  },
  render() {
    var e, t, r, o;
    return this.abstract ? (o = (r = this.$slots).default) === null || o === void 0 ? void 0 : o.call(r) : f(this.as || this.tag, {
      class: `${this.mergedClsPrefix || ti}-config-provider`
    }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
  }
});
function zy(e) {
  const {
    boxShadow2: t
  } = e;
  return {
    menuBoxShadow: t
  };
}
const Bl = {
  name: "Popselect",
  common: Ze,
  peers: {
    Popover: yr,
    InternalSelectMenu: Cl
  },
  self: zy
}, ic = "n-popselect", $y = z("popselect-menu", `
 box-shadow: var(--n-menu-box-shadow);
`), kl = {
  multiple: Boolean,
  value: {
    type: [String, Number, Array],
    default: null
  },
  cancelable: Boolean,
  options: {
    type: Array,
    default: () => []
  },
  size: {
    type: String,
    default: "medium"
  },
  scrollable: Boolean,
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  onMouseenter: Function,
  onMouseleave: Function,
  renderLabel: Function,
  showCheckmark: {
    type: Boolean,
    default: void 0
  },
  nodeProps: Function,
  virtualScroll: Boolean,
  // deprecated
  onChange: [Function, Array]
}, rd = _n(kl), Ay = J({
  name: "PopselectPanel",
  props: kl,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.onChange !== void 0 && zt("popselect", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const t = pe(ic), {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("Popselect", "-pop-select", $y, Bl, t.props, r), a = A(() => Ci(e.options, Ju("value", "children")));
    function l(g, m) {
      const {
        onUpdateValue: h,
        "onUpdate:value": p,
        onChange: x
      } = e;
      h && ne(h, g, m), p && ne(p, g, m), x && ne(x, g, m);
    }
    function s(g) {
      u(g.key);
    }
    function d(g) {
      !Zt(g, "action") && !Zt(g, "empty") && !Zt(g, "header") && g.preventDefault();
    }
    function u(g) {
      const {
        value: {
          getNode: m
        }
      } = a;
      if (e.multiple)
        if (Array.isArray(e.value)) {
          const h = [], p = [];
          let x = !0;
          e.value.forEach((b) => {
            if (b === g) {
              x = !1;
              return;
            }
            const y = m(b);
            y && (h.push(y.key), p.push(y.rawNode));
          }), x && (h.push(g), p.push(m(g).rawNode)), l(h, p);
        } else {
          const h = m(g);
          h && l([g], [h.rawNode]);
        }
      else if (e.value === g && e.cancelable)
        l(null, null);
      else {
        const h = m(g);
        h && l(g, h.rawNode);
        const {
          "onUpdate:show": p,
          onUpdateShow: x
        } = t.props;
        p && ne(p, !1), x && ne(x, !1), t.setShow(!1);
      }
      pt(() => {
        t.syncPosition();
      });
    }
    Ie(ie(e, "options"), () => {
      pt(() => {
        t.syncPosition();
      });
    });
    const c = A(() => {
      const {
        self: {
          menuBoxShadow: g
        }
      } = i.value;
      return {
        "--n-menu-box-shadow": g
      };
    }), v = o ? Ye("select", void 0, c, t.props) : void 0;
    return {
      mergedTheme: t.mergedThemeRef,
      mergedClsPrefix: r,
      treeMate: a,
      handleToggle: s,
      handleMenuMousedown: d,
      cssVars: o ? void 0 : c,
      themeClass: v == null ? void 0 : v.themeClass,
      onRender: v == null ? void 0 : v.onRender
    };
  },
  render() {
    var e;
    return (e = this.onRender) === null || e === void 0 || e.call(this), f(Wu, {
      clsPrefix: this.mergedClsPrefix,
      focusable: !0,
      nodeProps: this.nodeProps,
      class: [`${this.mergedClsPrefix}-popselect-menu`, this.themeClass],
      style: this.cssVars,
      theme: this.mergedTheme.peers.InternalSelectMenu,
      themeOverrides: this.mergedTheme.peerOverrides.InternalSelectMenu,
      multiple: this.multiple,
      treeMate: this.treeMate,
      size: this.size,
      value: this.value,
      virtualScroll: this.virtualScroll,
      scrollable: this.scrollable,
      renderLabel: this.renderLabel,
      onToggle: this.handleToggle,
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseenter,
      onMousedown: this.handleMenuMousedown,
      showCheckmark: this.showCheckmark
    }, {
      header: () => {
        var t, r;
        return ((r = (t = this.$slots).header) === null || r === void 0 ? void 0 : r.call(t)) || [];
      },
      action: () => {
        var t, r;
        return ((r = (t = this.$slots).action) === null || r === void 0 ? void 0 : r.call(t)) || [];
      },
      empty: () => {
        var t, r;
        return ((r = (t = this.$slots).empty) === null || r === void 0 ? void 0 : r.call(t)) || [];
      }
    });
  }
}), Dy = Object.assign(Object.assign(Object.assign(Object.assign({}, ve.props), gr(sr, ["showArrow", "arrow"])), {
  placement: Object.assign(Object.assign({}, sr.placement), {
    default: "bottom"
  }),
  trigger: {
    type: String,
    default: "hover"
  }
}), kl), Ey = J({
  name: "Popselect",
  props: Dy,
  slots: Object,
  inheritAttrs: !1,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = ve("Popselect", "-popselect", void 0, Bl, e, t), o = I(null);
    function i() {
      var s;
      (s = o.value) === null || s === void 0 || s.syncPosition();
    }
    function a(s) {
      var d;
      (d = o.value) === null || d === void 0 || d.setShow(s);
    }
    return $e(ic, {
      props: e,
      mergedThemeRef: r,
      syncPosition: i,
      setShow: a
    }), Object.assign(Object.assign({}, {
      syncPosition: i,
      setShow: a
    }), {
      popoverInstRef: o,
      mergedTheme: r
    });
  },
  render() {
    const {
      mergedTheme: e
    } = this, t = {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: {
        padding: "0"
      },
      ref: "popoverInstRef",
      internalRenderBody: (r, o, i, a, l) => {
        const {
          $attrs: s
        } = this;
        return f(Ay, Object.assign({}, s, {
          class: [s.class, r],
          style: [s.style, ...i]
        }, Rn(this.$props, rd), {
          ref: au(o),
          onMouseenter: co([a, s.onMouseenter]),
          onMouseleave: co([l, s.onMouseleave])
        }), {
          header: () => {
            var d, u;
            return (u = (d = this.$slots).header) === null || u === void 0 ? void 0 : u.call(d);
          },
          action: () => {
            var d, u;
            return (u = (d = this.$slots).action) === null || u === void 0 ? void 0 : u.call(d);
          },
          empty: () => {
            var d, u;
            return (u = (d = this.$slots).empty) === null || u === void 0 ? void 0 : u.call(d);
          }
        });
      }
    };
    return f(Cr, Object.assign({}, gr(this.$props, rd), t, {
      internalDeactivateImmediately: !0
    }), {
      trigger: () => {
        var r, o;
        return (o = (r = this.$slots).default) === null || o === void 0 ? void 0 : o.call(r);
      }
    });
  }
});
function Ty(e) {
  const {
    boxShadow2: t
  } = e;
  return {
    menuBoxShadow: t
  };
}
const ac = {
  name: "Select",
  common: Ze,
  peers: {
    InternalSelection: qu,
    InternalSelectMenu: Cl
  },
  self: Ty
}, Oy = D([z("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), z("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [zo({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]), My = Object.assign(Object.assign({}, ve.props), {
  to: yn.propTo,
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
}), lc = J({
  name: "Select",
  props: My,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.items !== void 0 && Qe("select", "`items` is deprecated, please use `options` instead."), e.onChange !== void 0 && Qe("select", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      mergedBorderedRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = ve("Select", "-select", Oy, ac, e, t), l = I(e.defaultValue), s = ie(e, "value"), d = Pt(s, l), u = I(!1), c = I(""), v = Ua(e, ["items", "options"]), g = I([]), m = I([]), h = A(() => m.value.concat(g.value).concat(v.value)), p = A(() => {
      const {
        filter: $
      } = e;
      if ($) return $;
      const {
        labelField: V,
        valueField: Q
      } = e;
      return (se, de) => {
        if (!de) return !1;
        const ge = de[V];
        if (typeof ge == "string")
          return na(se, ge);
        const me = de[Q];
        return typeof me == "string" ? na(se, me) : typeof me == "number" ? na(se, String(me)) : !1;
      };
    }), x = A(() => {
      if (e.remote)
        return v.value;
      {
        const {
          value: $
        } = h, {
          value: V
        } = c;
        return !V.length || !e.filterable ? $ : ey($, p.value, V, e.childrenField);
      }
    }), b = A(() => {
      const {
        valueField: $,
        childrenField: V
      } = e, Q = Ju($, V);
      return Ci(x.value, Q);
    }), y = A(() => ty(h.value, e.valueField, e.childrenField)), k = I(!1), w = Pt(ie(e, "show"), k), R = I(null), B = I(null), C = I(null), {
      localeRef: S
    } = lr("Select"), F = A(() => {
      var $;
      return ($ = e.placeholder) !== null && $ !== void 0 ? $ : S.value.placeholder;
    }), P = [], _ = I(/* @__PURE__ */ new Map()), O = A(() => {
      const {
        fallbackOption: $
      } = e;
      if ($ === void 0) {
        const {
          labelField: V,
          valueField: Q
        } = e;
        return (se) => ({
          [V]: String(se),
          [Q]: se
        });
      }
      return $ === !1 ? !1 : (V) => Object.assign($(V), {
        value: V
      });
    });
    function n($) {
      const V = e.remote, {
        value: Q
      } = _, {
        value: se
      } = y, {
        value: de
      } = O, ge = [];
      return $.forEach((me) => {
        if (se.has(me))
          ge.push(se.get(me));
        else if (V && Q.has(me))
          ge.push(Q.get(me));
        else if (de) {
          const Se = de(me);
          Se && ge.push(Se);
        }
      }), ge;
    }
    const E = A(() => {
      if (e.multiple) {
        const {
          value: $
        } = d;
        return Array.isArray($) ? n($) : [];
      }
      return null;
    }), T = A(() => {
      const {
        value: $
      } = d;
      return !e.multiple && !Array.isArray($) ? $ === null ? null : n([$])[0] || null : null;
    }), H = Un(e), {
      mergedSizeRef: L,
      mergedDisabledRef: U,
      mergedStatusRef: te
    } = H;
    function X($, V) {
      const {
        onChange: Q,
        "onUpdate:value": se,
        onUpdateValue: de
      } = e, {
        nTriggerFormChange: ge,
        nTriggerFormInput: me
      } = H;
      Q && ne(Q, $, V), de && ne(de, $, V), se && ne(se, $, V), l.value = $, ge(), me();
    }
    function K($) {
      const {
        onBlur: V
      } = e, {
        nTriggerFormBlur: Q
      } = H;
      V && ne(V, $), Q();
    }
    function j() {
      const {
        onClear: $
      } = e;
      $ && ne($);
    }
    function q($) {
      const {
        onFocus: V,
        showOnFocus: Q
      } = e, {
        nTriggerFormFocus: se
      } = H;
      V && ne(V, $), se(), Q && be();
    }
    function Y($) {
      const {
        onSearch: V
      } = e;
      V && ne(V, $);
    }
    function ae($) {
      const {
        onScroll: V
      } = e;
      V && ne(V, $);
    }
    function le() {
      var $;
      const {
        remote: V,
        multiple: Q
      } = e;
      if (V) {
        const {
          value: se
        } = _;
        if (Q) {
          const {
            valueField: de
          } = e;
          ($ = E.value) === null || $ === void 0 || $.forEach((ge) => {
            se.set(ge[de], ge);
          });
        } else {
          const de = T.value;
          de && se.set(de[e.valueField], de);
        }
      }
    }
    function ce($) {
      const {
        onUpdateShow: V,
        "onUpdate:show": Q
      } = e;
      V && ne(V, $), Q && ne(Q, $), k.value = $;
    }
    function be() {
      U.value || (ce(!0), k.value = !0, e.filterable && it());
    }
    function G() {
      ce(!1);
    }
    function ue() {
      c.value = "", m.value = P;
    }
    const Fe = I(!1);
    function xe() {
      e.filterable && (Fe.value = !0);
    }
    function Pe() {
      e.filterable && (Fe.value = !1, w.value || ue());
    }
    function ze() {
      U.value || (w.value ? e.filterable ? it() : G() : be());
    }
    function dt($) {
      var V, Q;
      !((Q = (V = C.value) === null || V === void 0 ? void 0 : V.selfRef) === null || Q === void 0) && Q.contains($.relatedTarget) || (u.value = !1, K($), G());
    }
    function rt($) {
      q($), u.value = !0;
    }
    function ft() {
      u.value = !0;
    }
    function ht($) {
      var V;
      !((V = R.value) === null || V === void 0) && V.$el.contains($.relatedTarget) || (u.value = !1, K($), G());
    }
    function ye() {
      var $;
      ($ = R.value) === null || $ === void 0 || $.focus(), G();
    }
    function Ce($) {
      var V;
      w.value && (!((V = R.value) === null || V === void 0) && V.$el.contains(Dr($)) || G());
    }
    function De($) {
      if (!Array.isArray($)) return [];
      if (O.value)
        return Array.from($);
      {
        const {
          remote: V
        } = e, {
          value: Q
        } = y;
        if (V) {
          const {
            value: se
          } = _;
          return $.filter((de) => Q.has(de) || se.has(de));
        } else
          return $.filter((se) => Q.has(se));
      }
    }
    function Le($) {
      et($.rawNode);
    }
    function et($) {
      if (U.value) return;
      const {
        tag: V,
        remote: Q,
        clearFilterAfterSelect: se,
        valueField: de
      } = e;
      if (V && !Q) {
        const {
          value: ge
        } = m, me = ge[0] || null;
        if (me) {
          const Se = g.value;
          Se.length ? Se.push(me) : g.value = [me], m.value = P;
        }
      }
      if (Q && _.value.set($[de], $), e.multiple) {
        const ge = De(d.value), me = ge.findIndex((Se) => Se === $[de]);
        if (~me) {
          if (ge.splice(me, 1), V && !Q) {
            const Se = oe($[de]);
            ~Se && (g.value.splice(Se, 1), se && (c.value = ""));
          }
        } else
          ge.push($[de]), se && (c.value = "");
        X(ge, n(ge));
      } else {
        if (V && !Q) {
          const ge = oe($[de]);
          ~ge ? g.value = [g.value[ge]] : g.value = P;
        }
        bt(), G(), X($[de], $);
      }
    }
    function oe($) {
      return g.value.findIndex((Q) => Q[e.valueField] === $);
    }
    function he($) {
      w.value || be();
      const {
        value: V
      } = $.target;
      c.value = V;
      const {
        tag: Q,
        remote: se
      } = e;
      if (Y(V), Q && !se) {
        if (!V) {
          m.value = P;
          return;
        }
        const {
          onCreate: de
        } = e, ge = de ? de(V) : {
          [e.labelField]: V,
          [e.valueField]: V
        }, {
          valueField: me,
          labelField: Se
        } = e;
        v.value.some((Ne) => Ne[me] === ge[me] || Ne[Se] === ge[Se]) || g.value.some((Ne) => Ne[me] === ge[me] || Ne[Se] === ge[Se]) ? m.value = P : m.value = [ge];
      }
    }
    function Te($) {
      $.stopPropagation();
      const {
        multiple: V
      } = e;
      !V && e.filterable && G(), j(), V ? X([], []) : X(null, null);
    }
    function ut($) {
      !Zt($, "action") && !Zt($, "empty") && !Zt($, "header") && $.preventDefault();
    }
    function At($) {
      ae($);
    }
    function Dt($) {
      var V, Q, se, de, ge;
      if (!e.keyboard) {
        $.preventDefault();
        return;
      }
      switch ($.key) {
        case " ":
          if (e.filterable)
            break;
          $.preventDefault();
        case "Enter":
          if (!(!((V = R.value) === null || V === void 0) && V.isComposing)) {
            if (w.value) {
              const me = (Q = C.value) === null || Q === void 0 ? void 0 : Q.getPendingTmNode();
              me ? Le(me) : e.filterable || (G(), bt());
            } else if (be(), e.tag && Fe.value) {
              const me = m.value[0];
              if (me) {
                const Se = me[e.valueField], {
                  value: Ne
                } = d;
                e.multiple && Array.isArray(Ne) && Ne.includes(Se) || et(me);
              }
            }
          }
          $.preventDefault();
          break;
        case "ArrowUp":
          if ($.preventDefault(), e.loading) return;
          w.value && ((se = C.value) === null || se === void 0 || se.prev());
          break;
        case "ArrowDown":
          if ($.preventDefault(), e.loading) return;
          w.value ? (de = C.value) === null || de === void 0 || de.next() : be();
          break;
        case "Escape":
          w.value && (B0($), G()), (ge = R.value) === null || ge === void 0 || ge.focus();
          break;
      }
    }
    function bt() {
      var $;
      ($ = R.value) === null || $ === void 0 || $.focus();
    }
    function it() {
      var $;
      ($ = R.value) === null || $ === void 0 || $.focusInput();
    }
    function wt() {
      var $;
      w.value && (($ = B.value) === null || $ === void 0 || $.syncPosition());
    }
    le(), Ie(ie(e, "options"), le);
    const ot = {
      focus: () => {
        var $;
        ($ = R.value) === null || $ === void 0 || $.focus();
      },
      focusInput: () => {
        var $;
        ($ = R.value) === null || $ === void 0 || $.focusInput();
      },
      blur: () => {
        var $;
        ($ = R.value) === null || $ === void 0 || $.blur();
      },
      blurInput: () => {
        var $;
        ($ = R.value) === null || $ === void 0 || $.blurInput();
      }
    }, fe = A(() => {
      const {
        self: {
          menuBoxShadow: $
        }
      } = a.value;
      return {
        "--n-menu-box-shadow": $
      };
    }), Be = i ? Ye("select", void 0, fe, e) : void 0;
    return Object.assign(Object.assign({}, ot), {
      mergedStatus: te,
      mergedClsPrefix: t,
      mergedBordered: r,
      namespace: o,
      treeMate: b,
      isMounted: hr(),
      triggerRef: R,
      menuRef: C,
      pattern: c,
      uncontrolledShow: k,
      mergedShow: w,
      adjustedTo: yn(e),
      uncontrolledValue: l,
      mergedValue: d,
      followerRef: B,
      localizedPlaceholder: F,
      selectedOption: T,
      selectedOptions: E,
      mergedSize: L,
      mergedDisabled: U,
      focused: u,
      activeWithoutMenuOpen: Fe,
      inlineThemeDisabled: i,
      onTriggerInputFocus: xe,
      onTriggerInputBlur: Pe,
      handleTriggerOrMenuResize: wt,
      handleMenuFocus: ft,
      handleMenuBlur: ht,
      handleMenuTabOut: ye,
      handleTriggerClick: ze,
      handleToggle: Le,
      handleDeleteOption: et,
      handlePatternInput: he,
      handleClear: Te,
      handleTriggerBlur: dt,
      handleTriggerFocus: rt,
      handleKeydown: Dt,
      handleMenuAfterLeave: ue,
      handleMenuClickOutside: Ce,
      handleMenuScroll: At,
      handleMenuKeydown: Dt,
      handleMenuMousedown: ut,
      mergedTheme: a,
      cssVars: i ? void 0 : fe,
      themeClass: Be == null ? void 0 : Be.themeClass,
      onRender: Be == null ? void 0 : Be.onRender
    });
  },
  render() {
    return f("div", {
      class: `${this.mergedClsPrefix}-select`
    }, f(Xa, null, {
      default: () => [f(Ya, null, {
        default: () => f(T1, {
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
            var e, t;
            return [(t = (e = this.$slots).arrow) === null || t === void 0 ? void 0 : t.call(e)];
          }
        })
      }), f(Qa, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === yn.tdkey,
        containerClass: this.namespace,
        width: this.consistentMenuWidth ? "target" : void 0,
        minWidth: "target",
        placement: this.placement
      }, {
        default: () => f(Tt, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted,
          onAfterLeave: this.handleMenuAfterLeave
        }, {
          default: () => {
            var e, t, r;
            return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) === null || e === void 0 || e.call(this), nn(f(Wu, Object.assign({}, this.menuProps, {
              ref: "menuRef",
              onResize: this.handleTriggerOrMenuResize,
              inlineThemeDisabled: this.inlineThemeDisabled,
              virtualScroll: this.consistentMenuWidth && this.virtualScroll,
              class: [`${this.mergedClsPrefix}-select-menu`, this.themeClass, (t = this.menuProps) === null || t === void 0 ? void 0 : t.class],
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
            }), this.displayDirective === "show" ? [[jn, this.mergedShow], [Er, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]] : [[Er, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), Iy = {
  itemPaddingSmall: "0 4px",
  itemMarginSmall: "0 0 0 8px",
  itemMarginSmallRtl: "0 8px 0 0",
  itemPaddingMedium: "0 4px",
  itemMarginMedium: "0 0 0 8px",
  itemMarginMediumRtl: "0 8px 0 0",
  itemPaddingLarge: "0 4px",
  itemMarginLarge: "0 0 0 8px",
  itemMarginLargeRtl: "0 8px 0 0",
  buttonIconSizeSmall: "14px",
  buttonIconSizeMedium: "16px",
  buttonIconSizeLarge: "18px",
  inputWidthSmall: "60px",
  selectWidthSmall: "unset",
  inputMarginSmall: "0 0 0 8px",
  inputMarginSmallRtl: "0 8px 0 0",
  selectMarginSmall: "0 0 0 8px",
  prefixMarginSmall: "0 8px 0 0",
  suffixMarginSmall: "0 0 0 8px",
  inputWidthMedium: "60px",
  selectWidthMedium: "unset",
  inputMarginMedium: "0 0 0 8px",
  inputMarginMediumRtl: "0 8px 0 0",
  selectMarginMedium: "0 0 0 8px",
  prefixMarginMedium: "0 8px 0 0",
  suffixMarginMedium: "0 0 0 8px",
  inputWidthLarge: "60px",
  selectWidthLarge: "unset",
  inputMarginLarge: "0 0 0 8px",
  inputMarginLargeRtl: "0 8px 0 0",
  selectMarginLarge: "0 0 0 8px",
  prefixMarginLarge: "0 8px 0 0",
  suffixMarginLarge: "0 0 0 8px"
};
function Ly(e) {
  const {
    textColor2: t,
    primaryColor: r,
    primaryColorHover: o,
    primaryColorPressed: i,
    inputColorDisabled: a,
    textColorDisabled: l,
    borderColor: s,
    borderRadius: d,
    // item font size
    fontSizeTiny: u,
    fontSizeSmall: c,
    fontSizeMedium: v,
    // item size
    heightTiny: g,
    heightSmall: m,
    heightMedium: h
  } = e;
  return Object.assign(Object.assign({}, Iy), {
    buttonColor: "#0000",
    buttonColorHover: "#0000",
    buttonColorPressed: "#0000",
    buttonBorder: `1px solid ${s}`,
    buttonBorderHover: `1px solid ${s}`,
    buttonBorderPressed: `1px solid ${s}`,
    buttonIconColor: t,
    buttonIconColorHover: t,
    buttonIconColorPressed: t,
    itemTextColor: t,
    itemTextColorHover: o,
    itemTextColorPressed: i,
    itemTextColorActive: r,
    itemTextColorDisabled: l,
    itemColor: "#0000",
    itemColorHover: "#0000",
    itemColorPressed: "#0000",
    itemColorActive: "#0000",
    itemColorActiveHover: "#0000",
    itemColorDisabled: a,
    itemBorder: "1px solid #0000",
    itemBorderHover: "1px solid #0000",
    itemBorderPressed: "1px solid #0000",
    itemBorderActive: `1px solid ${r}`,
    itemBorderDisabled: `1px solid ${s}`,
    itemBorderRadius: d,
    itemSizeSmall: g,
    itemSizeMedium: m,
    itemSizeLarge: h,
    itemFontSizeSmall: u,
    itemFontSizeMedium: c,
    itemFontSizeLarge: v,
    jumperFontSizeSmall: u,
    jumperFontSizeMedium: c,
    jumperFontSizeLarge: v,
    jumperTextColor: t,
    jumperTextColorDisabled: l
  });
}
const sc = {
  name: "Pagination",
  common: Ze,
  peers: {
    Select: ac,
    Input: wl,
    Popselect: Bl
  },
  self: Ly
}, od = `
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`, id = [N("button", `
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)], Ny = z("pagination", `
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`, [z("pagination-prefix", `
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `), z("pagination-suffix", `
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `), D("> *:not(:first-child)", `
 margin: var(--n-item-margin);
 `), z("select", `
 width: var(--n-select-width);
 `), D("&.transition-disabled", [z("pagination-item", "transition: none!important;")]), z("pagination-quick-jumper", `
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `, [z("input", `
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]), z("pagination-item", `
 position: relative;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 display: flex;
 align-items: center;
 justify-content: center;
 box-sizing: border-box;
 min-width: var(--n-item-size);
 height: var(--n-item-size);
 padding: var(--n-item-padding);
 background-color: var(--n-item-color);
 color: var(--n-item-text-color);
 border-radius: var(--n-item-border-radius);
 border: var(--n-item-border);
 fill: var(--n-button-icon-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 fill .3s var(--n-bezier);
 `, [N("button", `
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `, [z("base-icon", `
 font-size: var(--n-button-icon-size);
 `)]), Je("disabled", [N("hover", od, id), D("&:hover", od, id), D("&:active", `
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `, [N("button", `
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `)]), N("active", `
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `, [D("&:hover", `
 background: var(--n-item-color-active-hover);
 `)])]), N("disabled", `
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `, [N("active, button", `
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]), N("disabled", `
 cursor: not-allowed;
 `, [z("pagination-quick-jumper", `
 color: var(--n-jumper-text-color-disabled);
 `)]), N("simple", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `, [z("pagination-quick-jumper", [z("input", `
 margin: 0;
 `)])])]);
function dc(e) {
  var t;
  if (!e) return 10;
  const {
    defaultPageSize: r
  } = e;
  if (r !== void 0) return r;
  const o = (t = e.pageSizes) === null || t === void 0 ? void 0 : t[0];
  return typeof o == "number" ? o : (o == null ? void 0 : o.value) || 10;
}
function Hy(e, t, r, o) {
  let i = !1, a = !1, l = 1, s = t;
  if (t === 1)
    return {
      hasFastBackward: !1,
      hasFastForward: !1,
      fastForwardTo: s,
      fastBackwardTo: l,
      items: [{
        type: "page",
        label: 1,
        active: e === 1,
        mayBeFastBackward: !1,
        mayBeFastForward: !1
      }]
    };
  if (t === 2)
    return {
      hasFastBackward: !1,
      hasFastForward: !1,
      fastForwardTo: s,
      fastBackwardTo: l,
      items: [{
        type: "page",
        label: 1,
        active: e === 1,
        mayBeFastBackward: !1,
        mayBeFastForward: !1
      }, {
        type: "page",
        label: 2,
        active: e === 2,
        mayBeFastBackward: !0,
        mayBeFastForward: !1
      }]
    };
  const d = 1, u = t;
  let c = e, v = e;
  const g = (r - 5) / 2;
  v += Math.ceil(g), v = Math.min(Math.max(v, d + r - 3), u - 2), c -= Math.floor(g), c = Math.max(Math.min(c, u - r + 3), d + 2);
  let m = !1, h = !1;
  c > d + 2 && (m = !0), v < u - 2 && (h = !0);
  const p = [];
  p.push({
    type: "page",
    label: 1,
    active: e === 1,
    mayBeFastBackward: !1,
    mayBeFastForward: !1
  }), m ? (i = !0, l = c - 1, p.push({
    type: "fast-backward",
    active: !1,
    label: void 0,
    options: o ? ad(d + 1, c - 1) : null
  })) : u >= d + 1 && p.push({
    type: "page",
    label: d + 1,
    mayBeFastBackward: !0,
    mayBeFastForward: !1,
    active: e === d + 1
  });
  for (let x = c; x <= v; ++x)
    p.push({
      type: "page",
      label: x,
      mayBeFastBackward: !1,
      mayBeFastForward: !1,
      active: e === x
    });
  return h ? (a = !0, s = v + 1, p.push({
    type: "fast-forward",
    active: !1,
    label: void 0,
    options: o ? ad(v + 1, u - 1) : null
  })) : v === u - 2 && p[p.length - 1].label !== u - 1 && p.push({
    type: "page",
    mayBeFastForward: !0,
    mayBeFastBackward: !1,
    label: u - 1,
    active: e === u - 1
  }), p[p.length - 1].label !== u && p.push({
    type: "page",
    mayBeFastForward: !1,
    mayBeFastBackward: !1,
    label: u,
    active: e === u
  }), {
    hasFastBackward: i,
    hasFastForward: a,
    fastBackwardTo: l,
    fastForwardTo: s,
    items: p
  };
}
function ad(e, t) {
  const r = [];
  for (let o = e; o <= t; ++o)
    r.push({
      label: `${o}`,
      value: o
    });
  return r;
}
const jy = Object.assign(Object.assign({}, ve.props), {
  simple: Boolean,
  page: Number,
  defaultPage: {
    type: Number,
    default: 1
  },
  itemCount: Number,
  pageCount: Number,
  defaultPageCount: {
    type: Number,
    default: 1
  },
  showSizePicker: Boolean,
  pageSize: Number,
  defaultPageSize: Number,
  pageSizes: {
    type: Array,
    default() {
      return [10];
    }
  },
  showQuickJumper: Boolean,
  size: {
    type: String,
    default: "medium"
  },
  disabled: Boolean,
  pageSlot: {
    type: Number,
    default: 9
  },
  selectProps: Object,
  prev: Function,
  next: Function,
  goto: Function,
  prefix: Function,
  suffix: Function,
  label: Function,
  displayOrder: {
    type: Array,
    default: ["pages", "size-picker", "quick-jumper"]
  },
  to: yn.propTo,
  showQuickJumpDropdown: {
    type: Boolean,
    default: !0
  },
  "onUpdate:page": [Function, Array],
  onUpdatePage: [Function, Array],
  "onUpdate:pageSize": [Function, Array],
  onUpdatePageSize: [Function, Array],
  /** @deprecated */
  onPageSizeChange: [Function, Array],
  /** @deprecated */
  onChange: [Function, Array]
}), uc = J({
  name: "Pagination",
  props: jy,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.pageCount !== void 0 && e.itemCount !== void 0 && zt("pagination", "`page-count` and `item-count` should't be specified together. Only `item-count` will take effect."), e.onPageSizeChange && Qe("pagination", "`on-page-size-change` is deprecated, please use `on-update:page-size` instead."), e.onChange && Qe("pagination", "`on-change` is deprecated, please use `on-update:page` instead.");
    });
    const {
      mergedComponentPropsRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = ve("Pagination", "-pagination", Ny, sc, e, r), {
      localeRef: l
    } = lr("Pagination"), s = I(null), d = I(e.defaultPage), u = I(dc(e)), c = Pt(ie(e, "page"), d), v = Pt(ie(e, "pageSize"), u), g = A(() => {
      const {
        itemCount: G
      } = e;
      if (G !== void 0)
        return Math.max(1, Math.ceil(G / v.value));
      const {
        pageCount: ue
      } = e;
      return ue !== void 0 ? Math.max(ue, 1) : 1;
    }), m = I("");
    nt(() => {
      e.simple, m.value = String(c.value);
    });
    const h = I(!1), p = I(!1), x = I(!1), b = I(!1), y = () => {
      e.disabled || (h.value = !0, T());
    }, k = () => {
      e.disabled || (h.value = !1, T());
    }, w = () => {
      p.value = !0, T();
    }, R = () => {
      p.value = !1, T();
    }, B = (G) => {
      H(G);
    }, C = A(() => Hy(c.value, g.value, e.pageSlot, e.showQuickJumpDropdown));
    nt(() => {
      C.value.hasFastBackward ? C.value.hasFastForward || (h.value = !1, x.value = !1) : (p.value = !1, b.value = !1);
    });
    const S = A(() => {
      const G = l.value.selectionSuffix;
      return e.pageSizes.map((ue) => typeof ue == "number" ? {
        label: `${ue} / ${G}`,
        value: ue
      } : ue);
    }), F = A(() => {
      var G, ue;
      return ((ue = (G = t == null ? void 0 : t.value) === null || G === void 0 ? void 0 : G.Pagination) === null || ue === void 0 ? void 0 : ue.inputSize) || gs(e.size);
    }), P = A(() => {
      var G, ue;
      return ((ue = (G = t == null ? void 0 : t.value) === null || G === void 0 ? void 0 : G.Pagination) === null || ue === void 0 ? void 0 : ue.selectSize) || gs(e.size);
    }), _ = A(() => (c.value - 1) * v.value), O = A(() => {
      const G = c.value * v.value - 1, {
        itemCount: ue
      } = e;
      return ue !== void 0 && G > ue - 1 ? ue - 1 : G;
    }), n = A(() => {
      const {
        itemCount: G
      } = e;
      return G !== void 0 ? G : (e.pageCount || 1) * v.value;
    }), E = Ft("Pagination", i, r);
    function T() {
      pt(() => {
        var G;
        const {
          value: ue
        } = s;
        ue && (ue.classList.add("transition-disabled"), (G = s.value) === null || G === void 0 || G.offsetWidth, ue.classList.remove("transition-disabled"));
      });
    }
    function H(G) {
      if (G === c.value) return;
      const {
        "onUpdate:page": ue,
        onUpdatePage: Fe,
        onChange: xe,
        simple: Pe
      } = e;
      ue && ne(ue, G), Fe && ne(Fe, G), xe && ne(xe, G), d.value = G, Pe && (m.value = String(G));
    }
    function L(G) {
      if (G === v.value) return;
      const {
        "onUpdate:pageSize": ue,
        onUpdatePageSize: Fe,
        onPageSizeChange: xe
      } = e;
      ue && ne(ue, G), Fe && ne(Fe, G), xe && ne(xe, G), u.value = G, g.value < c.value && H(g.value);
    }
    function U() {
      if (e.disabled) return;
      const G = Math.min(c.value + 1, g.value);
      H(G);
    }
    function te() {
      if (e.disabled) return;
      const G = Math.max(c.value - 1, 1);
      H(G);
    }
    function X() {
      if (e.disabled) return;
      const G = Math.min(C.value.fastForwardTo, g.value);
      H(G);
    }
    function K() {
      if (e.disabled) return;
      const G = Math.max(C.value.fastBackwardTo, 1);
      H(G);
    }
    function j(G) {
      L(G);
    }
    function q() {
      const G = Number.parseInt(m.value);
      Number.isNaN(G) || (H(Math.max(1, Math.min(G, g.value))), e.simple || (m.value = ""));
    }
    function Y() {
      q();
    }
    function ae(G) {
      if (!e.disabled)
        switch (G.type) {
          case "page":
            H(G.label);
            break;
          case "fast-backward":
            K();
            break;
          case "fast-forward":
            X();
            break;
        }
    }
    function le(G) {
      m.value = G.replace(/\D+/g, "");
    }
    nt(() => {
      c.value, v.value, T();
    });
    const ce = A(() => {
      const {
        size: G
      } = e, {
        self: {
          buttonBorder: ue,
          buttonBorderHover: Fe,
          buttonBorderPressed: xe,
          buttonIconColor: Pe,
          buttonIconColorHover: ze,
          buttonIconColorPressed: dt,
          itemTextColor: rt,
          itemTextColorHover: ft,
          itemTextColorPressed: ht,
          itemTextColorActive: ye,
          itemTextColorDisabled: Ce,
          itemColor: De,
          itemColorHover: Le,
          itemColorPressed: et,
          itemColorActive: oe,
          itemColorActiveHover: he,
          itemColorDisabled: Te,
          itemBorder: ut,
          itemBorderHover: At,
          itemBorderPressed: Dt,
          itemBorderActive: bt,
          itemBorderDisabled: it,
          itemBorderRadius: wt,
          jumperTextColor: ot,
          jumperTextColorDisabled: fe,
          buttonColor: Be,
          buttonColorHover: $,
          buttonColorPressed: V,
          [Z("itemPadding", G)]: Q,
          [Z("itemMargin", G)]: se,
          [Z("inputWidth", G)]: de,
          [Z("selectWidth", G)]: ge,
          [Z("inputMargin", G)]: me,
          [Z("selectMargin", G)]: Se,
          [Z("jumperFontSize", G)]: Ne,
          [Z("prefixMargin", G)]: at,
          [Z("suffixMargin", G)]: Ue,
          [Z("itemSize", G)]: Ot,
          [Z("buttonIconSize", G)]: jt,
          [Z("itemFontSize", G)]: _t,
          [`${Z("itemMargin", G)}Rtl`]: Ut,
          [`${Z("inputMargin", G)}Rtl`]: Kt
        },
        common: {
          cubicBezierEaseInOut: rn
        }
      } = a.value;
      return {
        "--n-prefix-margin": at,
        "--n-suffix-margin": Ue,
        "--n-item-font-size": _t,
        "--n-select-width": ge,
        "--n-select-margin": Se,
        "--n-input-width": de,
        "--n-input-margin": me,
        "--n-input-margin-rtl": Kt,
        "--n-item-size": Ot,
        "--n-item-text-color": rt,
        "--n-item-text-color-disabled": Ce,
        "--n-item-text-color-hover": ft,
        "--n-item-text-color-active": ye,
        "--n-item-text-color-pressed": ht,
        "--n-item-color": De,
        "--n-item-color-hover": Le,
        "--n-item-color-disabled": Te,
        "--n-item-color-active": oe,
        "--n-item-color-active-hover": he,
        "--n-item-color-pressed": et,
        "--n-item-border": ut,
        "--n-item-border-hover": At,
        "--n-item-border-disabled": it,
        "--n-item-border-active": bt,
        "--n-item-border-pressed": Dt,
        "--n-item-padding": Q,
        "--n-item-border-radius": wt,
        "--n-bezier": rn,
        "--n-jumper-font-size": Ne,
        "--n-jumper-text-color": ot,
        "--n-jumper-text-color-disabled": fe,
        "--n-item-margin": se,
        "--n-item-margin-rtl": Ut,
        "--n-button-icon-size": jt,
        "--n-button-icon-color": Pe,
        "--n-button-icon-color-hover": ze,
        "--n-button-icon-color-pressed": dt,
        "--n-button-color-hover": $,
        "--n-button-color": Be,
        "--n-button-color-pressed": V,
        "--n-button-border": ue,
        "--n-button-border-hover": Fe,
        "--n-button-border-pressed": xe
      };
    }), be = o ? Ye("pagination", A(() => {
      let G = "";
      const {
        size: ue
      } = e;
      return G += ue[0], G;
    }), ce, e) : void 0;
    return {
      rtlEnabled: E,
      mergedClsPrefix: r,
      locale: l,
      selfRef: s,
      mergedPage: c,
      pageItems: A(() => C.value.items),
      mergedItemCount: n,
      jumperValue: m,
      pageSizeOptions: S,
      mergedPageSize: v,
      inputSize: F,
      selectSize: P,
      mergedTheme: a,
      mergedPageCount: g,
      startIndex: _,
      endIndex: O,
      showFastForwardMenu: x,
      showFastBackwardMenu: b,
      fastForwardActive: h,
      fastBackwardActive: p,
      handleMenuSelect: B,
      handleFastForwardMouseenter: y,
      handleFastForwardMouseleave: k,
      handleFastBackwardMouseenter: w,
      handleFastBackwardMouseleave: R,
      handleJumperInput: le,
      handleBackwardClick: te,
      handleForwardClick: U,
      handlePageItemClick: ae,
      handleSizePickerChange: j,
      handleQuickJumperChange: Y,
      cssVars: o ? void 0 : ce,
      themeClass: be == null ? void 0 : be.themeClass,
      onRender: be == null ? void 0 : be.onRender
    };
  },
  render() {
    const {
      $slots: e,
      mergedClsPrefix: t,
      disabled: r,
      cssVars: o,
      mergedPage: i,
      mergedPageCount: a,
      pageItems: l,
      showSizePicker: s,
      showQuickJumper: d,
      mergedTheme: u,
      locale: c,
      inputSize: v,
      selectSize: g,
      mergedPageSize: m,
      pageSizeOptions: h,
      jumperValue: p,
      simple: x,
      prev: b,
      next: y,
      prefix: k,
      suffix: w,
      label: R,
      goto: B,
      handleJumperInput: C,
      handleSizePickerChange: S,
      handleBackwardClick: F,
      handlePageItemClick: P,
      handleForwardClick: _,
      handleQuickJumperChange: O,
      onRender: n
    } = this;
    n == null || n();
    const E = k || e.prefix, T = w || e.suffix, H = b || e.prev, L = y || e.next, U = R || e.label;
    return f("div", {
      ref: "selfRef",
      class: [`${t}-pagination`, this.themeClass, this.rtlEnabled && `${t}-pagination--rtl`, r && `${t}-pagination--disabled`, x && `${t}-pagination--simple`],
      style: o
    }, E ? f("div", {
      class: `${t}-pagination-prefix`
    }, E({
      page: i,
      pageSize: m,
      pageCount: a,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      itemCount: this.mergedItemCount
    })) : null, this.displayOrder.map((te) => {
      switch (te) {
        case "pages":
          return f(je, null, f("div", {
            class: [`${t}-pagination-item`, !H && `${t}-pagination-item--button`, (i <= 1 || i > a || r) && `${t}-pagination-item--disabled`],
            onClick: F
          }, H ? H({
            page: i,
            pageSize: m,
            pageCount: a,
            startIndex: this.startIndex,
            endIndex: this.endIndex,
            itemCount: this.mergedItemCount
          }) : f(yt, {
            clsPrefix: t
          }, {
            default: () => this.rtlEnabled ? f(Ks, null) : f(Ws, null)
          })), x ? f(je, null, f("div", {
            class: `${t}-pagination-quick-jumper`
          }, f(ka, {
            value: p,
            onUpdateValue: C,
            size: v,
            placeholder: "",
            disabled: r,
            theme: u.peers.Input,
            themeOverrides: u.peerOverrides.Input,
            onChange: O
          })), " /", " ", a) : l.map((X, K) => {
            let j, q, Y;
            const {
              type: ae
            } = X;
            switch (ae) {
              case "page":
                const ce = X.label;
                U ? j = U({
                  type: "page",
                  node: ce,
                  active: X.active
                }) : j = ce;
                break;
              case "fast-forward":
                const be = this.fastForwardActive ? f(yt, {
                  clsPrefix: t
                }, {
                  default: () => this.rtlEnabled ? f(Vs, null) : f(Us, null)
                }) : f(yt, {
                  clsPrefix: t
                }, {
                  default: () => f(qs, null)
                });
                U ? j = U({
                  type: "fast-forward",
                  node: be,
                  active: this.fastForwardActive || this.showFastForwardMenu
                }) : j = be, q = this.handleFastForwardMouseenter, Y = this.handleFastForwardMouseleave;
                break;
              case "fast-backward":
                const G = this.fastBackwardActive ? f(yt, {
                  clsPrefix: t
                }, {
                  default: () => this.rtlEnabled ? f(Us, null) : f(Vs, null)
                }) : f(yt, {
                  clsPrefix: t
                }, {
                  default: () => f(qs, null)
                });
                U ? j = U({
                  type: "fast-backward",
                  node: G,
                  active: this.fastBackwardActive || this.showFastBackwardMenu
                }) : j = G, q = this.handleFastBackwardMouseenter, Y = this.handleFastBackwardMouseleave;
                break;
            }
            const le = f("div", {
              key: K,
              class: [`${t}-pagination-item`, X.active && `${t}-pagination-item--active`, ae !== "page" && (ae === "fast-backward" && this.showFastBackwardMenu || ae === "fast-forward" && this.showFastForwardMenu) && `${t}-pagination-item--hover`, r && `${t}-pagination-item--disabled`, ae === "page" && `${t}-pagination-item--clickable`],
              onClick: () => {
                P(X);
              },
              onMouseenter: q,
              onMouseleave: Y
            }, j);
            if (ae === "page" && !X.mayBeFastBackward && !X.mayBeFastForward)
              return le;
            {
              const ce = X.type === "page" ? X.mayBeFastBackward ? "fast-backward" : "fast-forward" : X.type;
              return X.type !== "page" && !X.options ? le : f(Ey, {
                to: this.to,
                key: ce,
                disabled: r,
                trigger: "hover",
                virtualScroll: !0,
                style: {
                  width: "60px"
                },
                theme: u.peers.Popselect,
                themeOverrides: u.peerOverrides.Popselect,
                builtinThemeOverrides: {
                  peers: {
                    InternalSelectMenu: {
                      height: "calc(var(--n-option-height) * 4.6)"
                    }
                  }
                },
                nodeProps: () => ({
                  style: {
                    justifyContent: "center"
                  }
                }),
                show: ae === "page" ? !1 : ae === "fast-backward" ? this.showFastBackwardMenu : this.showFastForwardMenu,
                onUpdateShow: (be) => {
                  ae !== "page" && (be ? ae === "fast-backward" ? this.showFastBackwardMenu = be : this.showFastForwardMenu = be : (this.showFastBackwardMenu = !1, this.showFastForwardMenu = !1));
                },
                options: X.type !== "page" && X.options ? X.options : [],
                onUpdateValue: this.handleMenuSelect,
                scrollable: !0,
                showCheckmark: !1
              }, {
                default: () => le
              });
            }
          }), f("div", {
            class: [`${t}-pagination-item`, !L && `${t}-pagination-item--button`, {
              [`${t}-pagination-item--disabled`]: i < 1 || i >= a || r
            }],
            onClick: _
          }, L ? L({
            page: i,
            pageSize: m,
            pageCount: a,
            itemCount: this.mergedItemCount,
            startIndex: this.startIndex,
            endIndex: this.endIndex
          }) : f(yt, {
            clsPrefix: t
          }, {
            default: () => this.rtlEnabled ? f(Ws, null) : f(Ks, null)
          })));
        case "size-picker":
          return !x && s ? f(lc, Object.assign({
            consistentMenuWidth: !1,
            placeholder: "",
            showCheckmark: !1,
            to: this.to
          }, this.selectProps, {
            size: g,
            options: h,
            value: m,
            disabled: r,
            theme: u.peers.Select,
            themeOverrides: u.peerOverrides.Select,
            onUpdateValue: S
          })) : null;
        case "quick-jumper":
          return !x && d ? f("div", {
            class: `${t}-pagination-quick-jumper`
          }, B ? B() : tn(this.$slots.goto, () => [c.goto]), f(ka, {
            value: p,
            onUpdateValue: C,
            size: v,
            placeholder: "",
            disabled: r,
            theme: u.peers.Input,
            themeOverrides: u.peerOverrides.Input,
            onChange: O
          })) : null;
        default:
          return null;
      }
    }), T ? f("div", {
      class: `${t}-pagination-suffix`
    }, T({
      page: i,
      pageSize: m,
      pageCount: a,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      itemCount: this.mergedItemCount
    })) : null);
  }
}), _y = {
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
function Wy(e) {
  const {
    primaryColor: t,
    textColor2: r,
    dividerColor: o,
    hoverColor: i,
    popoverColor: a,
    invertedColor: l,
    borderRadius: s,
    fontSizeSmall: d,
    fontSizeMedium: u,
    fontSizeLarge: c,
    fontSizeHuge: v,
    heightSmall: g,
    heightMedium: m,
    heightLarge: h,
    heightHuge: p,
    textColor3: x,
    opacityDisabled: b
  } = e;
  return Object.assign(Object.assign({}, _y), {
    optionHeightSmall: g,
    optionHeightMedium: m,
    optionHeightLarge: h,
    optionHeightHuge: p,
    borderRadius: s,
    fontSizeSmall: d,
    fontSizeMedium: u,
    fontSizeLarge: c,
    fontSizeHuge: v,
    // non-inverted
    optionTextColor: r,
    optionTextColorHover: r,
    optionTextColorActive: t,
    optionTextColorChildActive: t,
    color: a,
    dividerColor: o,
    suffixColor: r,
    prefixColor: r,
    optionColorHover: i,
    optionColorActive: Ee(t, {
      alpha: 0.1
    }),
    groupHeaderTextColor: x,
    // inverted
    optionTextColorInverted: "#BBB",
    optionTextColorHoverInverted: "#FFF",
    optionTextColorActiveInverted: "#FFF",
    optionTextColorChildActiveInverted: "#FFF",
    colorInverted: l,
    dividerColorInverted: "#BBB",
    suffixColorInverted: "#BBB",
    prefixColorInverted: "#BBB",
    optionColorHoverInverted: t,
    optionColorActiveInverted: t,
    groupHeaderTextColorInverted: "#AAA",
    optionOpacityDisabled: b
  });
}
const cc = {
  name: "Dropdown",
  common: Ze,
  peers: {
    Popover: yr
  },
  self: Wy
}, Vy = {
  padding: "8px 14px"
};
function Uy(e) {
  const {
    borderRadius: t,
    boxShadow2: r,
    baseColor: o
  } = e;
  return Object.assign(Object.assign({}, Vy), {
    borderRadius: t,
    boxShadow: r,
    color: Xe(o, "rgba(0, 0, 0, .85)"),
    textColor: o
  });
}
const fc = {
  name: "Tooltip",
  common: Ze,
  peers: {
    Popover: yr
  },
  self: Uy
}, hc = {
  name: "Ellipsis",
  common: Ze,
  peers: {
    Tooltip: fc
  }
}, Ky = {
  radioSizeSmall: "14px",
  radioSizeMedium: "16px",
  radioSizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function qy(e) {
  const {
    borderColor: t,
    primaryColor: r,
    baseColor: o,
    textColorDisabled: i,
    inputColorDisabled: a,
    textColor2: l,
    opacityDisabled: s,
    borderRadius: d,
    fontSizeSmall: u,
    fontSizeMedium: c,
    fontSizeLarge: v,
    heightSmall: g,
    heightMedium: m,
    heightLarge: h,
    lineHeight: p
  } = e;
  return Object.assign(Object.assign({}, Ky), {
    labelLineHeight: p,
    buttonHeightSmall: g,
    buttonHeightMedium: m,
    buttonHeightLarge: h,
    fontSizeSmall: u,
    fontSizeMedium: c,
    fontSizeLarge: v,
    boxShadow: `inset 0 0 0 1px ${t}`,
    boxShadowActive: `inset 0 0 0 1px ${r}`,
    boxShadowFocus: `inset 0 0 0 1px ${r}, 0 0 0 2px ${Ee(r, {
      alpha: 0.2
    })}`,
    boxShadowHover: `inset 0 0 0 1px ${r}`,
    boxShadowDisabled: `inset 0 0 0 1px ${t}`,
    color: o,
    colorDisabled: a,
    colorActive: "#0000",
    textColor: l,
    textColorDisabled: i,
    dotColorActive: r,
    dotColorDisabled: t,
    buttonBorderColor: t,
    buttonBorderColorActive: r,
    buttonBorderColorHover: t,
    buttonColor: o,
    buttonColorActive: o,
    buttonTextColor: l,
    buttonTextColorActive: r,
    buttonTextColorHover: r,
    opacityDisabled: s,
    buttonBoxShadowFocus: `inset 0 0 0 1px ${r}, 0 0 0 2px ${Ee(r, {
      alpha: 0.3
    })}`,
    buttonBoxShadowHover: "inset 0 0 0 1px #0000",
    buttonBoxShadow: "inset 0 0 0 1px #0000",
    buttonBorderRadius: d
  });
}
const Rl = {
  name: "Radio",
  common: Ze,
  self: qy
}, Gy = {
  thPaddingSmall: "8px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "8px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px",
  sorterSize: "15px",
  resizableContainerSize: "8px",
  resizableSize: "2px",
  filterSize: "15px",
  paginationMargin: "12px 0 0 0",
  emptyPadding: "48px 0",
  actionPadding: "8px 12px",
  actionButtonMargin: "0 8px 0 0"
};
function Xy(e) {
  const {
    cardColor: t,
    modalColor: r,
    popoverColor: o,
    textColor2: i,
    textColor1: a,
    tableHeaderColor: l,
    tableColorHover: s,
    iconColor: d,
    primaryColor: u,
    fontWeightStrong: c,
    borderRadius: v,
    lineHeight: g,
    fontSizeSmall: m,
    fontSizeMedium: h,
    fontSizeLarge: p,
    dividerColor: x,
    heightSmall: b,
    opacityDisabled: y,
    tableColorStriped: k
  } = e;
  return Object.assign(Object.assign({}, Gy), {
    actionDividerColor: x,
    lineHeight: g,
    borderRadius: v,
    fontSizeSmall: m,
    fontSizeMedium: h,
    fontSizeLarge: p,
    borderColor: Xe(t, x),
    tdColorHover: Xe(t, s),
    tdColorSorting: Xe(t, s),
    tdColorStriped: Xe(t, k),
    thColor: Xe(t, l),
    thColorHover: Xe(Xe(t, l), s),
    thColorSorting: Xe(Xe(t, l), s),
    tdColor: t,
    tdTextColor: i,
    thTextColor: a,
    thFontWeight: c,
    thButtonColorHover: s,
    thIconColor: d,
    thIconColorActive: u,
    // modal
    borderColorModal: Xe(r, x),
    tdColorHoverModal: Xe(r, s),
    tdColorSortingModal: Xe(r, s),
    tdColorStripedModal: Xe(r, k),
    thColorModal: Xe(r, l),
    thColorHoverModal: Xe(Xe(r, l), s),
    thColorSortingModal: Xe(Xe(r, l), s),
    tdColorModal: r,
    // popover
    borderColorPopover: Xe(o, x),
    tdColorHoverPopover: Xe(o, s),
    tdColorSortingPopover: Xe(o, s),
    tdColorStripedPopover: Xe(o, k),
    thColorPopover: Xe(o, l),
    thColorHoverPopover: Xe(Xe(o, l), s),
    thColorSortingPopover: Xe(Xe(o, l), s),
    tdColorPopover: o,
    boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)",
    boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)",
    // loading
    loadingColor: u,
    loadingSize: b,
    opacityLoading: y
  });
}
const Yy = {
  name: "DataTable",
  common: Ze,
  peers: {
    Button: wi,
    Checkbox: ec,
    Radio: Rl,
    Pagination: sc,
    Scrollbar: Ur,
    Empty: yl,
    Popover: yr,
    Ellipsis: hc,
    Dropdown: cc
  },
  self: Xy
}, Zy = Object.assign(Object.assign({}, ve.props), {
  onUnstableColumnResize: Function,
  pagination: {
    type: [Object, Boolean],
    default: !1
  },
  paginateSinglePage: {
    type: Boolean,
    default: !0
  },
  minHeight: [Number, String],
  maxHeight: [Number, String],
  // Use any type as row data to make prop data acceptable
  columns: {
    type: Array,
    default: () => []
  },
  rowClassName: [String, Function],
  rowProps: Function,
  rowKey: Function,
  summary: [Function],
  data: {
    type: Array,
    default: () => []
  },
  loading: Boolean,
  bordered: {
    type: Boolean,
    default: void 0
  },
  bottomBordered: {
    type: Boolean,
    default: void 0
  },
  striped: Boolean,
  scrollX: [Number, String],
  defaultCheckedRowKeys: {
    type: Array,
    default: () => []
  },
  checkedRowKeys: Array,
  singleLine: {
    type: Boolean,
    default: !0
  },
  singleColumn: Boolean,
  size: {
    type: String,
    default: "medium"
  },
  remote: Boolean,
  defaultExpandedRowKeys: {
    type: Array,
    default: []
  },
  defaultExpandAll: Boolean,
  expandedRowKeys: Array,
  stickyExpandedRows: Boolean,
  virtualScroll: Boolean,
  virtualScrollX: Boolean,
  virtualScrollHeader: Boolean,
  headerHeight: {
    type: Number,
    default: 28
  },
  heightForRow: Function,
  minRowHeight: {
    type: Number,
    default: 28
  },
  tableLayout: {
    type: String,
    default: "auto"
  },
  allowCheckingNotLoaded: Boolean,
  cascade: {
    type: Boolean,
    default: !0
  },
  childrenKey: {
    type: String,
    default: "children"
  },
  indent: {
    type: Number,
    default: 16
  },
  flexHeight: Boolean,
  summaryPlacement: {
    type: String,
    default: "bottom"
  },
  paginationBehaviorOnFilter: {
    type: String,
    default: "current"
  },
  filterIconPopoverProps: Object,
  scrollbarProps: Object,
  renderCell: Function,
  renderExpandIcon: Function,
  spinProps: {
    type: Object,
    default: {}
  },
  getCsvCell: Function,
  getCsvHeader: Function,
  onLoad: Function,
  "onUpdate:page": [Function, Array],
  onUpdatePage: [Function, Array],
  "onUpdate:pageSize": [Function, Array],
  onUpdatePageSize: [Function, Array],
  "onUpdate:sorter": [Function, Array],
  onUpdateSorter: [Function, Array],
  "onUpdate:filters": [Function, Array],
  onUpdateFilters: [Function, Array],
  "onUpdate:checkedRowKeys": [Function, Array],
  onUpdateCheckedRowKeys: [Function, Array],
  "onUpdate:expandedRowKeys": [Function, Array],
  onUpdateExpandedRowKeys: [Function, Array],
  onScroll: Function,
  // deprecated
  onPageChange: [Function, Array],
  onPageSizeChange: [Function, Array],
  onSorterChange: [Function, Array],
  onFiltersChange: [Function, Array],
  onCheckedRowKeysChange: [Function, Array]
}), fn = "n-data-table", vc = 40, gc = 40;
function ld(e) {
  if (e.type === "selection")
    return e.width === void 0 ? vc : Et(e.width);
  if (e.type === "expand")
    return e.width === void 0 ? gc : Et(e.width);
  if (!("children" in e))
    return typeof e.width == "string" ? Et(e.width) : e.width;
}
function Jy(e) {
  var t, r;
  if (e.type === "selection")
    return mt((t = e.width) !== null && t !== void 0 ? t : vc);
  if (e.type === "expand")
    return mt((r = e.width) !== null && r !== void 0 ? r : gc);
  if (!("children" in e))
    return mt(e.width);
}
function dn(e) {
  return e.type === "selection" ? "__n_selection__" : e.type === "expand" ? "__n_expand__" : e.key;
}
function sd(e) {
  return e && (typeof e == "object" ? Object.assign({}, e) : e);
}
function Qy(e) {
  return e === "ascend" ? 1 : e === "descend" ? -1 : 0;
}
function eC(e, t, r) {
  return r !== void 0 && (e = Math.min(e, typeof r == "number" ? r : Number.parseFloat(r))), t !== void 0 && (e = Math.max(e, typeof t == "number" ? t : Number.parseFloat(t))), e;
}
function tC(e, t) {
  if (t !== void 0)
    return {
      width: t,
      minWidth: t,
      maxWidth: t
    };
  const r = Jy(e), {
    minWidth: o,
    maxWidth: i
  } = e;
  return {
    width: r,
    minWidth: mt(o) || r,
    maxWidth: mt(i)
  };
}
function nC(e, t, r) {
  return typeof r == "function" ? r(e, t) : r || "";
}
function ra(e) {
  return e.filterOptionValues !== void 0 || e.filterOptionValue === void 0 && e.defaultFilterOptionValues !== void 0;
}
function oa(e) {
  return "children" in e ? !1 : !!e.sorter;
}
function pc(e) {
  return "children" in e && e.children.length ? !1 : !!e.resizable;
}
function dd(e) {
  return "children" in e ? !1 : !!e.filter && (!!e.filterOptions || !!e.renderFilterMenu);
}
function ud(e) {
  if (e) {
    if (e === "descend") return "ascend";
  } else return "descend";
  return !1;
}
function rC(e, t) {
  return e.sorter === void 0 ? null : t === null || t.columnKey !== e.key ? {
    columnKey: e.key,
    sorter: e.sorter,
    order: ud(!1)
  } : Object.assign(Object.assign({}, t), {
    order: ud(t.order)
  });
}
function mc(e, t) {
  return t.find((r) => r.columnKey === e.key && r.order) !== void 0;
}
function oC(e) {
  return typeof e == "string" ? e.replace(/,/g, "\\,") : e == null ? "" : `${e}`.replace(/,/g, "\\,");
}
function iC(e, t, r, o) {
  const i = e.filter((s) => s.type !== "expand" && s.type !== "selection" && s.allowExport !== !1), a = i.map((s) => o ? o(s) : s.title).join(","), l = t.map((s) => i.map((d) => r ? r(s[d.key], s, d) : oC(s[d.key])).join(","));
  return [a, ...l].join(`
`);
}
const aC = J({
  name: "DataTableBodyCheckbox",
  props: {
    rowKey: {
      type: [String, Number],
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !0
    },
    onUpdateChecked: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const {
      mergedCheckedRowKeySetRef: t,
      mergedInderminateRowKeySetRef: r
    } = pe(fn);
    return () => {
      const {
        rowKey: o
      } = e;
      return f(Si, {
        privateInsideTable: !0,
        disabled: e.disabled,
        indeterminate: r.value.has(o),
        checked: t.value.has(o),
        onUpdateChecked: e.onUpdateChecked
      });
    };
  }
}), lC = z("radio", `
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`, [N("checked", [M("dot", `
 background-color: var(--n-color-active);
 `)]), M("dot-wrapper", `
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `), z("radio-input", `
 position: absolute;
 border: 0;
 width: 0;
 height: 0;
 opacity: 0;
 margin: 0;
 `), M("dot", `
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `, [D("&::before", `
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `), N("checked", {
  boxShadow: "var(--n-box-shadow-active)"
}, [D("&::before", `
 opacity: 1;
 transform: scale(1);
 `)])]), M("label", `
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `), Je("disabled", `
 cursor: pointer;
 `, [D("&:hover", [M("dot", {
  boxShadow: "var(--n-box-shadow-hover)"
})]), N("focus", [D("&:not(:active)", [M("dot", {
  boxShadow: "var(--n-box-shadow-focus)"
})])])]), N("disabled", `
 cursor: not-allowed;
 `, [M("dot", {
  boxShadow: "var(--n-box-shadow-disabled)",
  backgroundColor: "var(--n-color-disabled)"
}, [D("&::before", {
  backgroundColor: "var(--n-dot-color-disabled)"
}), N("checked", `
 opacity: 1;
 `)]), M("label", {
  color: "var(--n-text-color-disabled)"
}), z("radio-input", `
 cursor: not-allowed;
 `)])]), sC = {
  name: String,
  value: {
    type: [String, Number, Boolean],
    default: "on"
  },
  checked: {
    type: Boolean,
    default: void 0
  },
  defaultChecked: Boolean,
  disabled: {
    type: Boolean,
    default: void 0
  },
  label: String,
  size: String,
  onUpdateChecked: [Function, Array],
  "onUpdate:checked": [Function, Array],
  // deprecated
  checkedValue: {
    type: Boolean,
    default: void 0
  }
}, bc = "n-radio-group";
function dC(e) {
  process.env.NODE_ENV !== "production" && nt(() => {
    e.checkedValue !== void 0 && Qe("radio", "`checked-value` is deprecated, please use `checked` instead.");
  });
  const t = pe(bc, null), r = Un(e, {
    mergedSize(y) {
      const {
        size: k
      } = e;
      if (k !== void 0) return k;
      if (t) {
        const {
          mergedSizeRef: {
            value: w
          }
        } = t;
        if (w !== void 0)
          return w;
      }
      return y ? y.mergedSize.value : "medium";
    },
    mergedDisabled(y) {
      return !!(e.disabled || t != null && t.disabledRef.value || y != null && y.disabled.value);
    }
  }), {
    mergedSizeRef: o,
    mergedDisabledRef: i
  } = r, a = I(null), l = I(null), s = I(e.defaultChecked), d = ie(e, "checked"), u = Pt(d, s), c = qe(() => t ? t.valueRef.value === e.value : u.value), v = qe(() => {
    const {
      name: y
    } = e;
    if (y !== void 0) return y;
    if (t) return t.nameRef.value;
  }), g = I(!1);
  function m() {
    if (t) {
      const {
        doUpdateValue: y
      } = t, {
        value: k
      } = e;
      ne(y, k);
    } else {
      const {
        onUpdateChecked: y,
        "onUpdate:checked": k
      } = e, {
        nTriggerFormInput: w,
        nTriggerFormChange: R
      } = r;
      y && ne(y, !0), k && ne(k, !0), w(), R(), s.value = !0;
    }
  }
  function h() {
    i.value || c.value || m();
  }
  function p() {
    h(), a.value && (a.value.checked = c.value);
  }
  function x() {
    g.value = !1;
  }
  function b() {
    g.value = !0;
  }
  return {
    mergedClsPrefix: t ? t.mergedClsPrefixRef : Ae(e).mergedClsPrefixRef,
    inputRef: a,
    labelRef: l,
    mergedName: v,
    mergedDisabled: i,
    renderSafeChecked: c,
    focus: g,
    mergedSize: o,
    handleRadioInputChange: p,
    handleRadioInputBlur: x,
    handleRadioInputFocus: b
  };
}
const uC = Object.assign(Object.assign({}, ve.props), sC), Fl = J({
  name: "Radio",
  props: uC,
  setup(e) {
    const t = dC(e), r = ve("Radio", "-radio", lC, Rl, e, t.mergedClsPrefix), o = A(() => {
      const {
        mergedSize: {
          value: u
        }
      } = t, {
        common: {
          cubicBezierEaseInOut: c
        },
        self: {
          boxShadow: v,
          boxShadowActive: g,
          boxShadowDisabled: m,
          boxShadowFocus: h,
          boxShadowHover: p,
          color: x,
          colorDisabled: b,
          colorActive: y,
          textColor: k,
          textColorDisabled: w,
          dotColorActive: R,
          dotColorDisabled: B,
          labelPadding: C,
          labelLineHeight: S,
          labelFontWeight: F,
          [Z("fontSize", u)]: P,
          [Z("radioSize", u)]: _
        }
      } = r.value;
      return {
        "--n-bezier": c,
        "--n-label-line-height": S,
        "--n-label-font-weight": F,
        "--n-box-shadow": v,
        "--n-box-shadow-active": g,
        "--n-box-shadow-disabled": m,
        "--n-box-shadow-focus": h,
        "--n-box-shadow-hover": p,
        "--n-color": x,
        "--n-color-active": y,
        "--n-color-disabled": b,
        "--n-dot-color-active": R,
        "--n-dot-color-disabled": B,
        "--n-font-size": P,
        "--n-radio-size": _,
        "--n-text-color": k,
        "--n-text-color-disabled": w,
        "--n-label-padding": C
      };
    }), {
      inlineThemeDisabled: i,
      mergedClsPrefixRef: a,
      mergedRtlRef: l
    } = Ae(e), s = Ft("Radio", l, a), d = i ? Ye("radio", A(() => t.mergedSize.value[0]), o, e) : void 0;
    return Object.assign(t, {
      rtlEnabled: s,
      cssVars: i ? void 0 : o,
      themeClass: d == null ? void 0 : d.themeClass,
      onRender: d == null ? void 0 : d.onRender
    });
  },
  render() {
    const {
      $slots: e,
      mergedClsPrefix: t,
      onRender: r,
      label: o
    } = this;
    return r == null || r(), f("label", {
      class: [`${t}-radio`, this.themeClass, this.rtlEnabled && `${t}-radio--rtl`, this.mergedDisabled && `${t}-radio--disabled`, this.renderSafeChecked && `${t}-radio--checked`, this.focus && `${t}-radio--focus`],
      style: this.cssVars
    }, f("div", {
      class: `${t}-radio__dot-wrapper`
    }, " ", f("div", {
      class: [`${t}-radio__dot`, this.renderSafeChecked && `${t}-radio__dot--checked`]
    }), f("input", {
      ref: "inputRef",
      type: "radio",
      class: `${t}-radio-input`,
      value: this.value,
      name: this.mergedName,
      checked: this.renderSafeChecked,
      disabled: this.mergedDisabled,
      onChange: this.handleRadioInputChange,
      onFocus: this.handleRadioInputFocus,
      onBlur: this.handleRadioInputBlur
    })), We(e.default, (i) => !i && !o ? null : f("div", {
      ref: "labelRef",
      class: `${t}-radio__label`
    }, i || o)));
  }
}), cC = z("radio-group", `
 display: inline-block;
 font-size: var(--n-font-size);
`, [M("splitor", `
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `, [N("checked", {
  backgroundColor: "var(--n-button-border-color-active)"
}), N("disabled", {
  opacity: "var(--n-opacity-disabled)"
})]), N("button-group", `
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [z("radio-button", {
  height: "var(--n-height)",
  lineHeight: "var(--n-height)"
}), M("splitor", {
  height: "var(--n-height)"
})]), z("radio-button", `
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `, [z("radio-input", `
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `), M("state-border", `
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `), D("&:first-child", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `, [M("state-border", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]), D("&:last-child", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `, [M("state-border", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]), Je("disabled", `
 cursor: pointer;
 `, [D("&:hover", [M("state-border", `
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `), Je("checked", {
  color: "var(--n-button-text-color-hover)"
})]), N("focus", [D("&:not(:active)", [M("state-border", {
  boxShadow: "var(--n-button-box-shadow-focus)"
})])])]), N("checked", `
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `), N("disabled", `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);
function fC(e, t, r) {
  var o;
  const i = [];
  let a = !1;
  for (let l = 0; l < e.length; ++l) {
    const s = e[l], d = (o = s.type) === null || o === void 0 ? void 0 : o.name;
    if (d === "RadioButton" && (a = !0), process.env.NODE_ENV !== "production" && a && d !== "RadioButton") {
      zt("radio-group", "`n-radio-group` in button mode only takes `n-radio-button` as children.");
      continue;
    }
    const u = s.props;
    if (d !== "RadioButton") {
      i.push(s);
      continue;
    }
    if (l === 0)
      i.push(s);
    else {
      const c = i[i.length - 1].props, v = t === c.value, g = c.disabled, m = t === u.value, h = u.disabled, p = (v ? 2 : 0) + (g ? 0 : 1), x = (m ? 2 : 0) + (h ? 0 : 1), b = {
        [`${r}-radio-group__splitor--disabled`]: g,
        [`${r}-radio-group__splitor--checked`]: v
      }, y = {
        [`${r}-radio-group__splitor--disabled`]: h,
        [`${r}-radio-group__splitor--checked`]: m
      }, k = p < x ? y : b;
      i.push(f("div", {
        class: [`${r}-radio-group__splitor`, k]
      }), s);
    }
  }
  return {
    children: i,
    isButtonGroup: a
  };
}
const hC = Object.assign(Object.assign({}, ve.props), {
  name: String,
  value: [String, Number, Boolean],
  defaultValue: {
    type: [String, Number, Boolean],
    default: null
  },
  size: String,
  disabled: {
    type: Boolean,
    default: void 0
  },
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array]
}), xc = J({
  name: "RadioGroup",
  props: hC,
  setup(e) {
    const t = I(null), {
      mergedSizeRef: r,
      mergedDisabledRef: o,
      nTriggerFormChange: i,
      nTriggerFormInput: a,
      nTriggerFormBlur: l,
      nTriggerFormFocus: s
    } = Un(e), {
      mergedClsPrefixRef: d,
      inlineThemeDisabled: u,
      mergedRtlRef: c
    } = Ae(e), v = ve("Radio", "-radio-group", cC, Rl, e, d), g = I(e.defaultValue), m = ie(e, "value"), h = Pt(m, g);
    function p(R) {
      const {
        onUpdateValue: B,
        "onUpdate:value": C
      } = e;
      B && ne(B, R), C && ne(C, R), g.value = R, i(), a();
    }
    function x(R) {
      const {
        value: B
      } = t;
      B && (B.contains(R.relatedTarget) || s());
    }
    function b(R) {
      const {
        value: B
      } = t;
      B && (B.contains(R.relatedTarget) || l());
    }
    $e(bc, {
      mergedClsPrefixRef: d,
      nameRef: ie(e, "name"),
      valueRef: h,
      disabledRef: o,
      mergedSizeRef: r,
      doUpdateValue: p
    });
    const y = Ft("Radio", c, d), k = A(() => {
      const {
        value: R
      } = r, {
        common: {
          cubicBezierEaseInOut: B
        },
        self: {
          buttonBorderColor: C,
          buttonBorderColorActive: S,
          buttonBorderRadius: F,
          buttonBoxShadow: P,
          buttonBoxShadowFocus: _,
          buttonBoxShadowHover: O,
          buttonColor: n,
          buttonColorActive: E,
          buttonTextColor: T,
          buttonTextColorActive: H,
          buttonTextColorHover: L,
          opacityDisabled: U,
          [Z("buttonHeight", R)]: te,
          [Z("fontSize", R)]: X
        }
      } = v.value;
      return {
        "--n-font-size": X,
        "--n-bezier": B,
        "--n-button-border-color": C,
        "--n-button-border-color-active": S,
        "--n-button-border-radius": F,
        "--n-button-box-shadow": P,
        "--n-button-box-shadow-focus": _,
        "--n-button-box-shadow-hover": O,
        "--n-button-color": n,
        "--n-button-color-active": E,
        "--n-button-text-color": T,
        "--n-button-text-color-hover": L,
        "--n-button-text-color-active": H,
        "--n-height": te,
        "--n-opacity-disabled": U
      };
    }), w = u ? Ye("radio-group", A(() => r.value[0]), k, e) : void 0;
    return {
      selfElRef: t,
      rtlEnabled: y,
      mergedClsPrefix: d,
      mergedValue: h,
      handleFocusout: b,
      handleFocusin: x,
      cssVars: u ? void 0 : k,
      themeClass: w == null ? void 0 : w.themeClass,
      onRender: w == null ? void 0 : w.onRender
    };
  },
  render() {
    var e;
    const {
      mergedValue: t,
      mergedClsPrefix: r,
      handleFocusin: o,
      handleFocusout: i
    } = this, {
      children: a,
      isButtonGroup: l
    } = fC(mo(F0(this)), t, r);
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      onFocusin: o,
      onFocusout: i,
      ref: "selfElRef",
      class: [`${r}-radio-group`, this.rtlEnabled && `${r}-radio-group--rtl`, this.themeClass, l && `${r}-radio-group--button-group`],
      style: this.cssVars
    }, a);
  }
}), vC = J({
  name: "DataTableBodyRadio",
  props: {
    rowKey: {
      type: [String, Number],
      required: !0
    },
    disabled: {
      type: Boolean,
      required: !0
    },
    onUpdateChecked: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const {
      mergedCheckedRowKeySetRef: t,
      componentId: r
    } = pe(fn);
    return () => {
      const {
        rowKey: o
      } = e;
      return f(Fl, {
        name: r,
        disabled: e.disabled,
        checked: t.value.has(o),
        onUpdateChecked: e.onUpdateChecked
      });
    };
  }
}), gC = Object.assign(Object.assign({}, sr), ve.props), yc = J({
  name: "Tooltip",
  props: gC,
  slots: Object,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = ve("Tooltip", "-tooltip", void 0, fc, e, t), o = I(null);
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
      popoverThemeOverrides: A(() => r.value.self)
    });
  },
  render() {
    const {
      mergedTheme: e,
      internalExtraClass: t
    } = this;
    return f(Cr, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: t.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), Cc = z("ellipsis", {
  overflow: "hidden"
}, [Je("line-clamp", `
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `), N("line-clamp", `
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `), N("cursor-pointer", `
 cursor: pointer;
 `)]);
function Ra(e) {
  return `${e}-ellipsis--line-clamp`;
}
function Fa(e, t) {
  return `${e}-ellipsis--cursor-${t}`;
}
const wc = Object.assign(Object.assign({}, ve.props), {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Boolean, Object],
    default: !0
  }
}), Bi = J({
  name: "Ellipsis",
  inheritAttrs: !1,
  props: wc,
  slots: Object,
  setup(e, {
    slots: t,
    attrs: r
  }) {
    const o = lu(), i = ve("Ellipsis", "-ellipsis", Cc, hc, e, o), a = I(null), l = I(null), s = I(null), d = I(!1), u = A(() => {
      const {
        lineClamp: x
      } = e, {
        value: b
      } = d;
      return x !== void 0 ? {
        textOverflow: "",
        "-webkit-line-clamp": b ? "" : x
      } : {
        textOverflow: b ? "" : "ellipsis",
        "-webkit-line-clamp": ""
      };
    });
    function c() {
      let x = !1;
      const {
        value: b
      } = d;
      if (b) return !0;
      const {
        value: y
      } = a;
      if (y) {
        const {
          lineClamp: k
        } = e;
        if (m(y), k !== void 0)
          x = y.scrollHeight <= y.offsetHeight;
        else {
          const {
            value: w
          } = l;
          w && (x = w.getBoundingClientRect().width <= y.getBoundingClientRect().width);
        }
        h(y, x);
      }
      return x;
    }
    const v = A(() => e.expandTrigger === "click" ? () => {
      var x;
      const {
        value: b
      } = d;
      b && ((x = s.value) === null || x === void 0 || x.setShow(!1)), d.value = !b;
    } : void 0);
    Ia(() => {
      var x;
      e.tooltip && ((x = s.value) === null || x === void 0 || x.setShow(!1));
    });
    const g = () => f("span", Object.assign({}, kt(r, {
      class: [`${o.value}-ellipsis`, e.lineClamp !== void 0 ? Ra(o.value) : void 0, e.expandTrigger === "click" ? Fa(o.value, "pointer") : void 0],
      style: u.value
    }), {
      ref: "triggerRef",
      onClick: v.value,
      onMouseenter: (
        // get tooltip disabled will derive cursor style
        e.expandTrigger === "click" ? c : void 0
      )
    }), e.lineClamp ? t : f("span", {
      ref: "triggerInnerRef"
    }, t));
    function m(x) {
      if (!x) return;
      const b = u.value, y = Ra(o.value);
      e.lineClamp !== void 0 ? p(x, y, "add") : p(x, y, "remove");
      for (const k in b)
        x.style[k] !== b[k] && (x.style[k] = b[k]);
    }
    function h(x, b) {
      const y = Fa(o.value, "pointer");
      e.expandTrigger === "click" && !b ? p(x, y, "add") : p(x, y, "remove");
    }
    function p(x, b, y) {
      y === "add" ? x.classList.contains(b) || x.classList.add(b) : x.classList.contains(b) && x.classList.remove(b);
    }
    return {
      mergedTheme: i,
      triggerRef: a,
      triggerInnerRef: l,
      tooltipRef: s,
      handleClick: v,
      renderTrigger: g,
      getTooltipDisabled: c
    };
  },
  render() {
    var e;
    const {
      tooltip: t,
      renderTrigger: r,
      $slots: o
    } = this;
    if (t) {
      const {
        mergedTheme: i
      } = this;
      return f(yc, Object.assign({
        ref: "tooltipRef",
        placement: "top"
      }, t, {
        getDisabled: this.getTooltipDisabled,
        theme: i.peers.Tooltip,
        themeOverrides: i.peerOverrides.Tooltip
      }), {
        trigger: r,
        default: (e = o.tooltip) !== null && e !== void 0 ? e : o.default
      });
    } else
      return r();
  }
}), pC = J({
  name: "PerformantEllipsis",
  props: wc,
  inheritAttrs: !1,
  setup(e, {
    attrs: t,
    slots: r
  }) {
    const o = I(!1), i = lu();
    return qn("-ellipsis", Cc, i), {
      mouseEntered: o,
      renderTrigger: () => {
        const {
          lineClamp: l
        } = e, s = i.value;
        return f("span", Object.assign({}, kt(t, {
          class: [`${s}-ellipsis`, l !== void 0 ? Ra(s) : void 0, e.expandTrigger === "click" ? Fa(s, "pointer") : void 0],
          style: l === void 0 ? {
            textOverflow: "ellipsis"
          } : {
            "-webkit-line-clamp": l
          }
        }), {
          onMouseenter: () => {
            o.value = !0;
          }
        }), l ? r : f("span", null, r));
      }
    };
  },
  render() {
    return this.mouseEntered ? f(Bi, kt({}, this.$attrs, this.$props), this.$slots) : this.renderTrigger();
  }
}), mC = J({
  name: "DataTableCell",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    row: {
      type: Object,
      required: !0
    },
    index: {
      type: Number,
      required: !0
    },
    column: {
      type: Object,
      required: !0
    },
    isSummary: Boolean,
    mergedTheme: {
      type: Object,
      required: !0
    },
    renderCell: Function
  },
  render() {
    var e;
    const {
      isSummary: t,
      column: r,
      row: o,
      renderCell: i
    } = this;
    let a;
    const {
      render: l,
      key: s,
      ellipsis: d
    } = r;
    if (l && !t ? a = l(o, this.index) : t ? a = (e = o[s]) === null || e === void 0 ? void 0 : e.value : a = i ? i(yo(o, s), o, r) : yo(o, s), d)
      if (typeof d == "object") {
        const {
          mergedTheme: u
        } = this;
        return r.ellipsisComponent === "performant-ellipsis" ? f(pC, Object.assign({}, d, {
          theme: u.peers.Ellipsis,
          themeOverrides: u.peerOverrides.Ellipsis
        }), {
          default: () => a
        }) : f(Bi, Object.assign({}, d, {
          theme: u.peers.Ellipsis,
          themeOverrides: u.peerOverrides.Ellipsis
        }), {
          default: () => a
        });
      } else
        return f("span", {
          class: `${this.clsPrefix}-data-table-td__ellipsis`
        }, a);
    return a;
  }
}), cd = J({
  name: "DataTableExpandTrigger",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    expanded: Boolean,
    loading: Boolean,
    onClick: {
      type: Function,
      required: !0
    },
    renderExpandIcon: {
      type: Function
    },
    rowData: {
      type: Object,
      required: !0
    }
  },
  render() {
    const {
      clsPrefix: e
    } = this;
    return f("div", {
      class: [`${e}-data-table-expand-trigger`, this.expanded && `${e}-data-table-expand-trigger--expanded`],
      onClick: this.onClick,
      onMousedown: (t) => {
        t.preventDefault();
      }
    }, f(xr, null, {
      default: () => this.loading ? f(Gn, {
        key: "loading",
        clsPrefix: this.clsPrefix,
        radius: 85,
        strokeWidth: 15,
        scale: 0.88
      }) : this.renderExpandIcon ? this.renderExpandIcon({
        expanded: this.expanded,
        rowData: this.rowData
      }) : f(yt, {
        clsPrefix: e,
        key: "base-icon"
      }, {
        default: () => f(gl, null)
      })
    }));
  }
}), bC = J({
  name: "DataTableFilterMenu",
  props: {
    column: {
      type: Object,
      required: !0
    },
    radioGroupName: {
      type: String,
      required: !0
    },
    multiple: {
      type: Boolean,
      required: !0
    },
    value: {
      type: [Array, String, Number],
      default: null
    },
    options: {
      type: Array,
      required: !0
    },
    onConfirm: {
      type: Function,
      required: !0
    },
    onClear: {
      type: Function,
      required: !0
    },
    onChange: {
      type: Function,
      required: !0
    }
  },
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      mergedRtlRef: r
    } = Ae(e), o = Ft("DataTable", r, t), {
      mergedClsPrefixRef: i,
      mergedThemeRef: a,
      localeRef: l
    } = pe(fn), s = I(e.value), d = A(() => {
      const {
        value: h
      } = s;
      return Array.isArray(h) ? h : null;
    }), u = A(() => {
      const {
        value: h
      } = s;
      return ra(e.column) ? Array.isArray(h) && h.length && h[0] || null : Array.isArray(h) ? null : h;
    });
    function c(h) {
      e.onChange(h);
    }
    function v(h) {
      e.multiple && Array.isArray(h) ? s.value = h : ra(e.column) && !Array.isArray(h) ? s.value = [h] : s.value = h;
    }
    function g() {
      c(s.value), e.onConfirm();
    }
    function m() {
      e.multiple || ra(e.column) ? c([]) : c(null), e.onClear();
    }
    return {
      mergedClsPrefix: i,
      rtlEnabled: o,
      mergedTheme: a,
      locale: l,
      checkboxGroupValue: d,
      radioGroupValue: u,
      handleChange: v,
      handleConfirmClick: g,
      handleClearClick: m
    };
  },
  render() {
    const {
      mergedTheme: e,
      locale: t,
      mergedClsPrefix: r
    } = this;
    return f("div", {
      class: [`${r}-data-table-filter-menu`, this.rtlEnabled && `${r}-data-table-filter-menu--rtl`]
    }, f(An, null, {
      default: () => {
        const {
          checkboxGroupValue: o,
          handleChange: i
        } = this;
        return this.multiple ? f(nc, {
          value: o,
          class: `${r}-data-table-filter-menu__group`,
          onUpdateValue: i
        }, {
          default: () => this.options.map((a) => f(Si, {
            key: a.value,
            theme: e.peers.Checkbox,
            themeOverrides: e.peerOverrides.Checkbox,
            value: a.value
          }, {
            default: () => a.label
          }))
        }) : f(xc, {
          name: this.radioGroupName,
          class: `${r}-data-table-filter-menu__group`,
          value: this.radioGroupValue,
          onUpdateValue: this.handleChange
        }, {
          default: () => this.options.map((a) => f(Fl, {
            key: a.value,
            value: a.value,
            theme: e.peers.Radio,
            themeOverrides: e.peerOverrides.Radio
          }, {
            default: () => a.label
          }))
        });
      }
    }), f("div", {
      class: `${r}-data-table-filter-menu__action`
    }, f(dr, {
      size: "tiny",
      theme: e.peers.Button,
      themeOverrides: e.peerOverrides.Button,
      onClick: this.handleClearClick
    }, {
      default: () => t.clear
    }), f(dr, {
      theme: e.peers.Button,
      themeOverrides: e.peerOverrides.Button,
      type: "primary",
      size: "tiny",
      onClick: this.handleConfirmClick
    }, {
      default: () => t.confirm
    })));
  }
}), xC = J({
  name: "DataTableRenderFilter",
  props: {
    render: {
      type: Function,
      required: !0
    },
    active: {
      type: Boolean,
      default: !1
    },
    show: {
      type: Boolean,
      default: !1
    }
  },
  render() {
    const {
      render: e,
      active: t,
      show: r
    } = this;
    return e({
      active: t,
      show: r
    });
  }
});
function yC(e, t, r) {
  const o = Object.assign({}, e);
  return o[t] = r, o;
}
const CC = J({
  name: "DataTableFilterButton",
  props: {
    column: {
      type: Object,
      required: !0
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  setup(e) {
    const {
      mergedComponentPropsRef: t
    } = Ae(), {
      mergedThemeRef: r,
      mergedClsPrefixRef: o,
      mergedFilterStateRef: i,
      filterMenuCssVarsRef: a,
      paginationBehaviorOnFilterRef: l,
      doUpdatePage: s,
      doUpdateFilters: d,
      filterIconPopoverPropsRef: u
    } = pe(fn), c = I(!1), v = i, g = A(() => e.column.filterMultiple !== !1), m = A(() => {
      const k = v.value[e.column.key];
      if (k === void 0) {
        const {
          value: w
        } = g;
        return w ? [] : null;
      }
      return k;
    }), h = A(() => {
      const {
        value: k
      } = m;
      return Array.isArray(k) ? k.length > 0 : k !== null;
    }), p = A(() => {
      var k, w;
      return ((w = (k = t == null ? void 0 : t.value) === null || k === void 0 ? void 0 : k.DataTable) === null || w === void 0 ? void 0 : w.renderFilter) || e.column.renderFilter;
    });
    function x(k) {
      const w = yC(v.value, e.column.key, k);
      d(w, e.column), l.value === "first" && s(1);
    }
    function b() {
      c.value = !1;
    }
    function y() {
      c.value = !1;
    }
    return {
      mergedTheme: r,
      mergedClsPrefix: o,
      active: h,
      showPopover: c,
      mergedRenderFilter: p,
      filterIconPopoverProps: u,
      filterMultiple: g,
      mergedFilterValue: m,
      filterMenuCssVars: a,
      handleFilterChange: x,
      handleFilterMenuConfirm: y,
      handleFilterMenuCancel: b
    };
  },
  render() {
    const {
      mergedTheme: e,
      mergedClsPrefix: t,
      handleFilterMenuCancel: r,
      filterIconPopoverProps: o
    } = this;
    return f(Cr, Object.assign({
      show: this.showPopover,
      onUpdateShow: (i) => this.showPopover = i,
      trigger: "click",
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      placement: "bottom"
    }, o, {
      style: {
        padding: 0
      }
    }), {
      trigger: () => {
        const {
          mergedRenderFilter: i
        } = this;
        if (i)
          return f(xC, {
            "data-data-table-filter": !0,
            render: i,
            active: this.active,
            show: this.showPopover
          });
        const {
          renderFilterIcon: a
        } = this.column;
        return f("div", {
          "data-data-table-filter": !0,
          class: [`${t}-data-table-filter`, {
            [`${t}-data-table-filter--active`]: this.active,
            [`${t}-data-table-filter--show`]: this.showPopover
          }]
        }, a ? a({
          active: this.active,
          show: this.showPopover
        }) : f(yt, {
          clsPrefix: t
        }, {
          default: () => f(Bx, null)
        }));
      },
      default: () => {
        const {
          renderFilterMenu: i
        } = this.column;
        return i ? i({
          hide: r
        }) : f(bC, {
          style: this.filterMenuCssVars,
          radioGroupName: String(this.column.key),
          multiple: this.filterMultiple,
          value: this.mergedFilterValue,
          options: this.options,
          column: this.column,
          onChange: this.handleFilterChange,
          onClear: this.handleFilterMenuCancel,
          onConfirm: this.handleFilterMenuConfirm
        });
      }
    });
  }
}), wC = J({
  name: "ColumnResizeButton",
  props: {
    onResizeStart: Function,
    onResize: Function,
    onResizeEnd: Function
  },
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = pe(fn), r = I(!1);
    let o = 0;
    function i(d) {
      return d.clientX;
    }
    function a(d) {
      var u;
      d.preventDefault();
      const c = r.value;
      o = i(d), r.value = !0, c || (Ke("mousemove", window, l), Ke("mouseup", window, s), (u = e.onResizeStart) === null || u === void 0 || u.call(e));
    }
    function l(d) {
      var u;
      (u = e.onResize) === null || u === void 0 || u.call(e, i(d) - o);
    }
    function s() {
      var d;
      r.value = !1, (d = e.onResizeEnd) === null || d === void 0 || d.call(e), Ve("mousemove", window, l), Ve("mouseup", window, s);
    }
    return St(() => {
      Ve("mousemove", window, l), Ve("mouseup", window, s);
    }), {
      mergedClsPrefix: t,
      active: r,
      handleMousedown: a
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return f("span", {
      "data-data-table-resizable": !0,
      class: [`${e}-data-table-resize-button`, this.active && `${e}-data-table-resize-button--active`],
      onMousedown: this.handleMousedown
    });
  }
}), SC = J({
  name: "DataTableRenderSorter",
  props: {
    render: {
      type: Function,
      required: !0
    },
    order: {
      // asc, desc
      type: [String, Boolean],
      default: !1
    }
  },
  render() {
    const {
      render: e,
      order: t
    } = this;
    return e({
      order: t
    });
  }
}), BC = J({
  name: "SortIcon",
  props: {
    column: {
      type: Object,
      required: !0
    }
  },
  setup(e) {
    const {
      mergedComponentPropsRef: t
    } = Ae(), {
      mergedSortStateRef: r,
      mergedClsPrefixRef: o
    } = pe(fn), i = A(() => r.value.find((d) => d.columnKey === e.column.key)), a = A(() => i.value !== void 0), l = A(() => {
      const {
        value: d
      } = i;
      return d && a.value ? d.order : !1;
    }), s = A(() => {
      var d, u;
      return ((u = (d = t == null ? void 0 : t.value) === null || d === void 0 ? void 0 : d.DataTable) === null || u === void 0 ? void 0 : u.renderSorter) || e.column.renderSorter;
    });
    return {
      mergedClsPrefix: o,
      active: a,
      mergedSortOrder: l,
      mergedRenderSorter: s
    };
  },
  render() {
    const {
      mergedRenderSorter: e,
      mergedSortOrder: t,
      mergedClsPrefix: r
    } = this, {
      renderSorterIcon: o
    } = this.column;
    return e ? f(SC, {
      render: e,
      order: t
    }) : f("span", {
      class: [`${r}-data-table-sorter`, t === "ascend" && `${r}-data-table-sorter--asc`, t === "descend" && `${r}-data-table-sorter--desc`]
    }, o ? o({
      order: t
    }) : f(yt, {
      clsPrefix: r
    }, {
      default: () => f(px, null)
    }));
  }
}), Pl = "n-dropdown-menu", ki = "n-dropdown", fd = "n-dropdown-option", Sc = J({
  name: "DropdownDivider",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  render() {
    return f("div", {
      class: `${this.clsPrefix}-dropdown-divider`
    });
  }
}), kC = J({
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
      hasSubmenuRef: t
    } = pe(Pl), {
      renderLabelRef: r,
      labelFieldRef: o,
      nodePropsRef: i,
      renderOptionRef: a
    } = pe(ki);
    return {
      labelField: o,
      showIcon: e,
      hasSubmenu: t,
      renderLabel: r,
      nodeProps: i,
      renderOption: a
    };
  },
  render() {
    var e;
    const {
      clsPrefix: t,
      hasSubmenu: r,
      showIcon: o,
      nodeProps: i,
      renderLabel: a,
      renderOption: l
    } = this, {
      rawNode: s
    } = this.tmNode, d = f("div", Object.assign({
      class: `${t}-dropdown-option`
    }, i == null ? void 0 : i(s)), f("div", {
      class: `${t}-dropdown-option-body ${t}-dropdown-option-body--group`
    }, f("div", {
      "data-dropdown-option": !0,
      class: [`${t}-dropdown-option-body__prefix`, o && `${t}-dropdown-option-body__prefix--show-icon`]
    }, gt(s.icon)), f("div", {
      class: `${t}-dropdown-option-body__label`,
      "data-dropdown-option": !0
    }, a ? a(s) : gt((e = s.title) !== null && e !== void 0 ? e : s[this.labelField])), f("div", {
      class: [`${t}-dropdown-option-body__suffix`, r && `${t}-dropdown-option-body__suffix--has-submenu`],
      "data-dropdown-option": !0
    })));
    return l ? l({
      node: d,
      option: s
    }) : d;
  }
});
function RC(e) {
  const {
    textColorBase: t,
    opacity1: r,
    opacity2: o,
    opacity3: i,
    opacity4: a,
    opacity5: l
  } = e;
  return {
    color: t,
    opacity1Depth: r,
    opacity2Depth: o,
    opacity3Depth: i,
    opacity4Depth: a,
    opacity5Depth: l
  };
}
const FC = {
  name: "Icon",
  common: Ze,
  self: RC
}, PC = z("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [N("color-transition", {
  transition: "color .3s var(--n-bezier)"
}), N("depth", {
  color: "var(--n-color)"
}, [D("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), D("svg", {
  height: "1em",
  width: "1em"
})]), zC = Object.assign(Object.assign({}, ve.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), Co = J({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: zC,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Icon", "-icon", PC, FC, e, t), i = A(() => {
      const {
        depth: l
      } = e, {
        common: {
          cubicBezierEaseInOut: s
        },
        self: d
      } = o.value;
      if (l !== void 0) {
        const {
          color: u,
          [`opacity${l}Depth`]: c
        } = d;
        return {
          "--n-bezier": s,
          "--n-color": u,
          "--n-opacity": c
        };
      }
      return {
        "--n-bezier": s,
        "--n-color": "",
        "--n-opacity": ""
      };
    }), a = r ? Ye("icon", A(() => `${e.depth || "d"}`), i, e) : void 0;
    return {
      mergedClsPrefix: t,
      mergedStyle: A(() => {
        const {
          size: l,
          color: s
        } = e;
        return {
          fontSize: mt(l),
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
      $parent: t,
      depth: r,
      mergedClsPrefix: o,
      component: i,
      onRender: a,
      themeClass: l
    } = this;
    return !((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && zt("icon", "don't wrap `n-icon` inside `n-icon`"), a == null || a(), f("i", kt(this.$attrs, {
      role: "img",
      class: [`${o}-icon`, l, {
        [`${o}-icon--depth`]: r,
        [`${o}-icon--color-transition`]: r !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), i ? f(i) : this.$slots);
  }
});
function Pa(e, t) {
  return e.type === "submenu" || e.type === void 0 && e[t] !== void 0;
}
function $C(e) {
  return e.type === "group";
}
function Bc(e) {
  return e.type === "divider";
}
function AC(e) {
  return e.type === "render";
}
const kc = J({
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
    const t = pe(ki), {
      hoverKeyRef: r,
      keyboardKeyRef: o,
      lastToggledSubmenuKeyRef: i,
      pendingKeyPathRef: a,
      activeKeyPathRef: l,
      animatedRef: s,
      mergedShowRef: d,
      renderLabelRef: u,
      renderIconRef: c,
      labelFieldRef: v,
      childrenFieldRef: g,
      renderOptionRef: m,
      nodePropsRef: h,
      menuPropsRef: p
    } = t, x = pe(fd, null), b = pe(Pl), y = pe(Hr), k = A(() => e.tmNode.rawNode), w = A(() => {
      const {
        value: L
      } = g;
      return Pa(e.tmNode.rawNode, L);
    }), R = A(() => {
      const {
        disabled: L
      } = e.tmNode;
      return L;
    }), B = A(() => {
      if (!w.value) return !1;
      const {
        key: L,
        disabled: U
      } = e.tmNode;
      if (U) return !1;
      const {
        value: te
      } = r, {
        value: X
      } = o, {
        value: K
      } = i, {
        value: j
      } = a;
      return te !== null ? j.includes(L) : X !== null ? j.includes(L) && j[j.length - 1] !== L : K !== null ? j.includes(L) : !1;
    }), C = A(() => o.value === null && !s.value), S = $h(B, 300, C), F = A(() => !!(x != null && x.enteringSubmenuRef.value)), P = I(!1);
    $e(fd, {
      enteringSubmenuRef: P
    });
    function _() {
      P.value = !0;
    }
    function O() {
      P.value = !1;
    }
    function n() {
      const {
        parentKey: L,
        tmNode: U
      } = e;
      U.disabled || d.value && (i.value = L, o.value = null, r.value = U.key);
    }
    function E() {
      const {
        tmNode: L
      } = e;
      L.disabled || d.value && r.value !== L.key && n();
    }
    function T(L) {
      if (e.tmNode.disabled || !d.value) return;
      const {
        relatedTarget: U
      } = L;
      U && !Zt({
        target: U
      }, "dropdownOption") && !Zt({
        target: U
      }, "scrollbarRail") && (r.value = null);
    }
    function H() {
      const {
        value: L
      } = w, {
        tmNode: U
      } = e;
      d.value && !L && !U.disabled && (t.doSelect(U.key, U.rawNode), t.doUpdateShow(!1));
    }
    return {
      labelField: v,
      renderLabel: u,
      renderIcon: c,
      siblingHasIcon: b.showIconRef,
      siblingHasSubmenu: b.hasSubmenuRef,
      menuProps: p,
      popoverBody: y,
      animated: s,
      mergedShowSubmenu: A(() => S.value && !F.value),
      rawNode: k,
      hasSubmenu: w,
      pending: qe(() => {
        const {
          value: L
        } = a, {
          key: U
        } = e.tmNode;
        return L.includes(U);
      }),
      childActive: qe(() => {
        const {
          value: L
        } = l, {
          key: U
        } = e.tmNode, te = L.findIndex((X) => U === X);
        return te === -1 ? !1 : te < L.length - 1;
      }),
      active: qe(() => {
        const {
          value: L
        } = l, {
          key: U
        } = e.tmNode, te = L.findIndex((X) => U === X);
        return te === -1 ? !1 : te === L.length - 1;
      }),
      mergedDisabled: R,
      renderOption: m,
      nodeProps: h,
      handleClick: H,
      handleMouseMove: E,
      handleMouseEnter: n,
      handleMouseLeave: T,
      handleSubmenuBeforeEnter: _,
      handleSubmenuAfterEnter: O
    };
  },
  render() {
    var e, t;
    const {
      animated: r,
      rawNode: o,
      mergedShowSubmenu: i,
      clsPrefix: a,
      siblingHasIcon: l,
      siblingHasSubmenu: s,
      renderLabel: d,
      renderIcon: u,
      renderOption: c,
      nodeProps: v,
      props: g,
      scrollable: m
    } = this;
    let h = null;
    if (i) {
      const y = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, o, o.children);
      h = f(Rc, Object.assign({}, y, {
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
    }, x = v == null ? void 0 : v(o), b = f("div", Object.assign({
      class: [`${a}-dropdown-option`, x == null ? void 0 : x.class],
      "data-dropdown-option": !0
    }, x), f("div", kt(p, g), [f("div", {
      class: [`${a}-dropdown-option-body__prefix`, l && `${a}-dropdown-option-body__prefix--show-icon`]
    }, [u ? u(o) : gt(o.icon)]), f("div", {
      "data-dropdown-option": !0,
      class: `${a}-dropdown-option-body__label`
    }, d ? d(o) : gt((t = o[this.labelField]) !== null && t !== void 0 ? t : o.title)), f("div", {
      "data-dropdown-option": !0,
      class: [`${a}-dropdown-option-body__suffix`, s && `${a}-dropdown-option-body__suffix--has-submenu`]
    }, this.hasSubmenu ? f(Co, null, {
      default: () => f(gl, null)
    }) : null)]), this.hasSubmenu ? f(Xa, null, {
      default: () => [f(Ya, null, {
        default: () => f("div", {
          class: `${a}-dropdown-offset-container`
        }, f(Qa, {
          show: this.mergedShowSubmenu,
          placement: this.placement,
          to: m && this.popoverBody || void 0,
          teleportDisabled: !m
        }, {
          default: () => f("div", {
            class: `${a}-dropdown-menu-wrapper`
          }, r ? f(Tt, {
            onBeforeEnter: this.handleSubmenuBeforeEnter,
            onAfterEnter: this.handleSubmenuAfterEnter,
            name: "fade-in-scale-up-transition",
            appear: !0
          }, {
            default: () => h
          }) : h)
        }))
      })]
    }) : null);
    return c ? c({
      node: b,
      option: o
    }) : b;
  }
}), DC = J({
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
      parentKey: t,
      clsPrefix: r
    } = this, {
      children: o
    } = e;
    return f(je, null, f(kC, {
      clsPrefix: r,
      tmNode: e,
      key: e.key
    }), o == null ? void 0 : o.map((i) => {
      const {
        rawNode: a
      } = i;
      return a.show === !1 ? null : Bc(a) ? f(Sc, {
        clsPrefix: r,
        key: i.key
      }) : i.isGroup ? (zt("dropdown", "`group` node is not allowed to be put in `group` node."), null) : f(kc, {
        clsPrefix: r,
        tmNode: i,
        parentKey: t,
        key: i.key
      });
    }));
  }
}), EC = J({
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
        props: t
      }
    } = this.tmNode;
    return f("div", t, [e == null ? void 0 : e()]);
  }
}), Rc = J({
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
      renderIconRef: t,
      childrenFieldRef: r
    } = pe(ki);
    $e(Pl, {
      showIconRef: A(() => {
        const i = t.value;
        return e.tmNodes.some((a) => {
          var l;
          if (a.isGroup)
            return (l = a.children) === null || l === void 0 ? void 0 : l.some(({
              rawNode: d
            }) => i ? i(d) : d.icon);
          const {
            rawNode: s
          } = a;
          return i ? i(s) : s.icon;
        });
      }),
      hasSubmenuRef: A(() => {
        const {
          value: i
        } = r;
        return e.tmNodes.some((a) => {
          var l;
          if (a.isGroup)
            return (l = a.children) === null || l === void 0 ? void 0 : l.some(({
              rawNode: d
            }) => Pa(d, i));
          const {
            rawNode: s
          } = a;
          return Pa(s, i);
        });
      })
    });
    const o = I(null);
    return $e(Ro, null), $e(ko, null), $e(Hr, o), {
      bodyRef: o
    };
  },
  render() {
    const {
      parentKey: e,
      clsPrefix: t,
      scrollable: r
    } = this, o = this.tmNodes.map((i) => {
      const {
        rawNode: a
      } = i;
      return a.show === !1 ? null : AC(a) ? f(EC, {
        tmNode: i,
        key: i.key
      }) : Bc(a) ? f(Sc, {
        clsPrefix: t,
        key: i.key
      }) : $C(a) ? f(DC, {
        clsPrefix: t,
        tmNode: i,
        parentKey: e,
        key: i.key
      }) : f(kc, {
        clsPrefix: t,
        tmNode: i,
        parentKey: e,
        key: i.key,
        props: a.props,
        scrollable: r
      });
    });
    return f("div", {
      class: [`${t}-dropdown-menu`, r && `${t}-dropdown-menu--scrollable`],
      ref: "bodyRef"
    }, r ? f(Hu, {
      contentClass: `${t}-dropdown-menu__content`
    }, {
      default: () => o
    }) : o, this.showArrow ? Uu({
      clsPrefix: t,
      arrowStyle: this.arrowStyle,
      arrowClass: void 0,
      arrowWrapperClass: void 0,
      arrowWrapperStyle: void 0
    }) : null);
  }
}), TC = z("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [zo(), z("dropdown-option", `
 position: relative;
 `, [D("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [D("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), z("dropdown-option-body", `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [D("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), Je("disabled", [N("pending", `
 color: var(--n-option-text-color-hover);
 `, [M("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), D("&::before", "background-color: var(--n-option-color-hover);")]), N("active", `
 color: var(--n-option-text-color-active);
 `, [M("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), D("&::before", "background-color: var(--n-option-color-active);")]), N("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [M("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), N("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), N("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [M("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [N("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), M("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [N("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), z("icon", `
 font-size: var(--n-option-icon-size);
 `)]), M("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), M("suffix", `
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
 `, [N("has-submenu", `
 width: var(--n-option-icon-suffix-width);
 `), z("icon", `
 font-size: var(--n-option-icon-size);
 `)]), z("dropdown-menu", "pointer-events: all;")]), z("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), z("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), z("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), D(">", [z("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Je("scrollable", `
 padding: var(--n-padding);
 `), N("scrollable", [M("content", `
 padding: var(--n-padding);
 `)])]), OC = {
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
}, MC = Object.keys(sr), IC = Object.assign(Object.assign(Object.assign({}, sr), OC), ve.props), Fc = J({
  name: "Dropdown",
  inheritAttrs: !1,
  props: IC,
  setup(e) {
    const t = I(!1), r = Pt(ie(e, "show"), t), o = A(() => {
      const {
        keyField: O,
        childrenField: n
      } = e;
      return Ci(e.options, {
        getKey(E) {
          return E[O];
        },
        getDisabled(E) {
          return E.disabled === !0;
        },
        getIgnored(E) {
          return E.type === "divider" || E.type === "render";
        },
        getChildren(E) {
          return E[n];
        }
      });
    }), i = A(() => o.value.treeNodes), a = I(null), l = I(null), s = I(null), d = A(() => {
      var O, n, E;
      return (E = (n = (O = a.value) !== null && O !== void 0 ? O : l.value) !== null && n !== void 0 ? n : s.value) !== null && E !== void 0 ? E : null;
    }), u = A(() => o.value.getPath(d.value).keyPath), c = A(() => o.value.getPath(e.value).keyPath), v = qe(() => e.keyboard && r.value);
    Fh({
      keydown: {
        ArrowUp: {
          prevent: !0,
          handler: R
        },
        ArrowRight: {
          prevent: !0,
          handler: w
        },
        ArrowDown: {
          prevent: !0,
          handler: B
        },
        ArrowLeft: {
          prevent: !0,
          handler: k
        },
        Enter: {
          prevent: !0,
          handler: C
        },
        Escape: y
      }
    }, v);
    const {
      mergedClsPrefixRef: g,
      inlineThemeDisabled: m
    } = Ae(e), h = ve("Dropdown", "-dropdown", TC, cc, e, g);
    $e(ki, {
      labelFieldRef: ie(e, "labelField"),
      childrenFieldRef: ie(e, "childrenField"),
      renderLabelRef: ie(e, "renderLabel"),
      renderIconRef: ie(e, "renderIcon"),
      hoverKeyRef: a,
      keyboardKeyRef: l,
      lastToggledSubmenuKeyRef: s,
      pendingKeyPathRef: u,
      activeKeyPathRef: c,
      animatedRef: ie(e, "animated"),
      mergedShowRef: r,
      nodePropsRef: ie(e, "nodeProps"),
      renderOptionRef: ie(e, "renderOption"),
      menuPropsRef: ie(e, "menuProps"),
      doSelect: p,
      doUpdateShow: x
    }), Ie(r, (O) => {
      !e.animated && !O && b();
    });
    function p(O, n) {
      const {
        onSelect: E
      } = e;
      E && ne(E, O, n);
    }
    function x(O) {
      const {
        "onUpdate:show": n,
        onUpdateShow: E
      } = e;
      n && ne(n, O), E && ne(E, O), t.value = O;
    }
    function b() {
      a.value = null, l.value = null, s.value = null;
    }
    function y() {
      x(!1);
    }
    function k() {
      F("left");
    }
    function w() {
      F("right");
    }
    function R() {
      F("up");
    }
    function B() {
      F("down");
    }
    function C() {
      const O = S();
      O != null && O.isLeaf && r.value && (p(O.key, O.rawNode), x(!1));
    }
    function S() {
      var O;
      const {
        value: n
      } = o, {
        value: E
      } = d;
      return !n || E === null ? null : (O = n.getNode(E)) !== null && O !== void 0 ? O : null;
    }
    function F(O) {
      const {
        value: n
      } = d, {
        value: {
          getFirstAvailableNode: E
        }
      } = o;
      let T = null;
      if (n === null) {
        const H = E();
        H !== null && (T = H.key);
      } else {
        const H = S();
        if (H) {
          let L;
          switch (O) {
            case "down":
              L = H.getNext();
              break;
            case "up":
              L = H.getPrev();
              break;
            case "right":
              L = H.getChild();
              break;
            case "left":
              L = H.getParent();
              break;
          }
          L && (T = L.key);
        }
      }
      T !== null && (a.value = null, l.value = T);
    }
    const P = A(() => {
      const {
        size: O,
        inverted: n
      } = e, {
        common: {
          cubicBezierEaseInOut: E
        },
        self: T
      } = h.value, {
        padding: H,
        dividerColor: L,
        borderRadius: U,
        optionOpacityDisabled: te,
        [Z("optionIconSuffixWidth", O)]: X,
        [Z("optionSuffixWidth", O)]: K,
        [Z("optionIconPrefixWidth", O)]: j,
        [Z("optionPrefixWidth", O)]: q,
        [Z("fontSize", O)]: Y,
        [Z("optionHeight", O)]: ae,
        [Z("optionIconSize", O)]: le
      } = T, ce = {
        "--n-bezier": E,
        "--n-font-size": Y,
        "--n-padding": H,
        "--n-border-radius": U,
        "--n-option-height": ae,
        "--n-option-prefix-width": q,
        "--n-option-icon-prefix-width": j,
        "--n-option-suffix-width": K,
        "--n-option-icon-suffix-width": X,
        "--n-option-icon-size": le,
        "--n-divider-color": L,
        "--n-option-opacity-disabled": te
      };
      return n ? (ce["--n-color"] = T.colorInverted, ce["--n-option-color-hover"] = T.optionColorHoverInverted, ce["--n-option-color-active"] = T.optionColorActiveInverted, ce["--n-option-text-color"] = T.optionTextColorInverted, ce["--n-option-text-color-hover"] = T.optionTextColorHoverInverted, ce["--n-option-text-color-active"] = T.optionTextColorActiveInverted, ce["--n-option-text-color-child-active"] = T.optionTextColorChildActiveInverted, ce["--n-prefix-color"] = T.prefixColorInverted, ce["--n-suffix-color"] = T.suffixColorInverted, ce["--n-group-header-text-color"] = T.groupHeaderTextColorInverted) : (ce["--n-color"] = T.color, ce["--n-option-color-hover"] = T.optionColorHover, ce["--n-option-color-active"] = T.optionColorActive, ce["--n-option-text-color"] = T.optionTextColor, ce["--n-option-text-color-hover"] = T.optionTextColorHover, ce["--n-option-text-color-active"] = T.optionTextColorActive, ce["--n-option-text-color-child-active"] = T.optionTextColorChildActive, ce["--n-prefix-color"] = T.prefixColor, ce["--n-suffix-color"] = T.suffixColor, ce["--n-group-header-text-color"] = T.groupHeaderTextColor), ce;
    }), _ = m ? Ye("dropdown", A(() => `${e.size[0]}${e.inverted ? "i" : ""}`), P, e) : void 0;
    return {
      mergedClsPrefix: g,
      mergedTheme: h,
      // data
      tmNodes: i,
      // show
      mergedShow: r,
      // methods
      handleAfterLeave: () => {
        e.animated && b();
      },
      doUpdateShow: x,
      cssVars: m ? void 0 : P,
      themeClass: _ == null ? void 0 : _.themeClass,
      onRender: _ == null ? void 0 : _.onRender
    };
  },
  render() {
    const e = (o, i, a, l, s) => {
      var d;
      const {
        mergedClsPrefix: u,
        menuProps: c
      } = this;
      (d = this.onRender) === null || d === void 0 || d.call(this);
      const v = (c == null ? void 0 : c(void 0, this.tmNodes.map((m) => m.rawNode))) || {}, g = {
        ref: au(i),
        class: [o, `${u}-dropdown`, this.themeClass],
        clsPrefix: u,
        tmNodes: this.tmNodes,
        style: [...a, this.cssVars],
        showArrow: this.showArrow,
        arrowStyle: this.arrowStyle,
        scrollable: this.scrollable,
        onMouseenter: l,
        onMouseleave: s
      };
      return f(Rc, kt(this.$attrs, g, v));
    }, {
      mergedTheme: t
    } = this, r = {
      show: this.mergedShow,
      theme: t.peers.Popover,
      themeOverrides: t.peerOverrides.Popover,
      internalOnAfterLeave: this.handleAfterLeave,
      internalRenderBody: e,
      onUpdateShow: this.doUpdateShow,
      "onUpdate:show": void 0
    };
    return f(Cr, Object.assign({}, Rn(this.$props, MC), r), {
      trigger: () => {
        var o, i;
        return (i = (o = this.$slots).default) === null || i === void 0 ? void 0 : i.call(o);
      }
    });
  }
}), Pc = "_n_all__", zc = "_n_none__";
function LC(e, t, r, o) {
  return e ? (i) => {
    for (const a of e)
      switch (i) {
        case Pc:
          r(!0);
          return;
        case zc:
          o(!0);
          return;
        default:
          if (typeof a == "object" && a.key === i) {
            a.onSelect(t.value);
            return;
          }
      }
  } : () => {
  };
}
function NC(e, t) {
  return e ? e.map((r) => {
    switch (r) {
      case "all":
        return {
          label: t.checkTableAll,
          key: Pc
        };
      case "none":
        return {
          label: t.uncheckTableAll,
          key: zc
        };
      default:
        return r;
    }
  }) : [];
}
const HC = J({
  name: "DataTableSelectionMenu",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    const {
      props: t,
      localeRef: r,
      checkOptionsRef: o,
      rawPaginatedDataRef: i,
      doCheckAll: a,
      doUncheckAll: l
    } = pe(fn), s = A(() => LC(o.value, i, a, l)), d = A(() => NC(o.value, r.value));
    return () => {
      var u, c, v, g;
      const {
        clsPrefix: m
      } = e;
      return f(Fc, {
        theme: (c = (u = t.theme) === null || u === void 0 ? void 0 : u.peers) === null || c === void 0 ? void 0 : c.Dropdown,
        themeOverrides: (g = (v = t.themeOverrides) === null || v === void 0 ? void 0 : v.peers) === null || g === void 0 ? void 0 : g.Dropdown,
        options: d.value,
        onSelect: s.value
      }, {
        default: () => f(yt, {
          clsPrefix: m,
          class: `${m}-data-table-check-extra`
        }, {
          default: () => f(Lu, null)
        })
      });
    };
  }
});
function ia(e) {
  return typeof e.title == "function" ? e.title(e) : e.title;
}
const jC = J({
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    id: {
      type: String,
      required: !0
    },
    cols: {
      type: Array,
      required: !0
    },
    width: String
  },
  render() {
    const {
      clsPrefix: e,
      id: t,
      cols: r,
      width: o
    } = this;
    return f("table", {
      style: {
        tableLayout: "fixed",
        width: o
      },
      class: `${e}-data-table-table`
    }, f("colgroup", null, r.map((i) => f("col", {
      key: i.key,
      style: i.style
    }))), f("thead", {
      "data-n-id": t,
      class: `${e}-data-table-thead`
    }, this.$slots));
  }
}), $c = J({
  name: "DataTableHeader",
  props: {
    discrete: {
      type: Boolean,
      default: !0
    }
  },
  setup() {
    const {
      mergedClsPrefixRef: e,
      scrollXRef: t,
      fixedColumnLeftMapRef: r,
      fixedColumnRightMapRef: o,
      mergedCurrentPageRef: i,
      allRowsCheckedRef: a,
      someRowsCheckedRef: l,
      rowsRef: s,
      colsRef: d,
      mergedThemeRef: u,
      checkOptionsRef: c,
      mergedSortStateRef: v,
      componentId: g,
      mergedTableLayoutRef: m,
      headerCheckboxDisabledRef: h,
      virtualScrollHeaderRef: p,
      headerHeightRef: x,
      onUnstableColumnResize: b,
      doUpdateResizableWidth: y,
      handleTableHeaderScroll: k,
      deriveNextSorter: w,
      doUncheckAll: R,
      doCheckAll: B
    } = pe(fn), C = I(), S = I({});
    function F(T) {
      const H = S.value[T];
      return H == null ? void 0 : H.getBoundingClientRect().width;
    }
    function P() {
      a.value ? R() : B();
    }
    function _(T, H) {
      if (Zt(T, "dataTableFilter") || Zt(T, "dataTableResizable") || !oa(H)) return;
      const L = v.value.find((te) => te.columnKey === H.key) || null, U = rC(H, L);
      w(U);
    }
    const O = /* @__PURE__ */ new Map();
    function n(T) {
      O.set(T.key, F(T.key));
    }
    function E(T, H) {
      const L = O.get(T.key);
      if (L === void 0)
        return;
      const U = L + H, te = eC(U, T.minWidth, T.maxWidth);
      b(U, te, T, F), y(T, te);
    }
    return {
      cellElsRef: S,
      componentId: g,
      mergedSortState: v,
      mergedClsPrefix: e,
      scrollX: t,
      fixedColumnLeftMap: r,
      fixedColumnRightMap: o,
      currentPage: i,
      allRowsChecked: a,
      someRowsChecked: l,
      rows: s,
      cols: d,
      mergedTheme: u,
      checkOptions: c,
      mergedTableLayout: m,
      headerCheckboxDisabled: h,
      headerHeight: x,
      virtualScrollHeader: p,
      virtualListRef: C,
      handleCheckboxUpdateChecked: P,
      handleColHeaderClick: _,
      handleTableHeaderScroll: k,
      handleColumnResizeStart: n,
      handleColumnResize: E
    };
  },
  render() {
    const {
      cellElsRef: e,
      mergedClsPrefix: t,
      fixedColumnLeftMap: r,
      fixedColumnRightMap: o,
      currentPage: i,
      allRowsChecked: a,
      someRowsChecked: l,
      rows: s,
      cols: d,
      mergedTheme: u,
      checkOptions: c,
      componentId: v,
      discrete: g,
      mergedTableLayout: m,
      headerCheckboxDisabled: h,
      mergedSortState: p,
      virtualScrollHeader: x,
      handleColHeaderClick: b,
      handleCheckboxUpdateChecked: y,
      handleColumnResizeStart: k,
      handleColumnResize: w
    } = this, R = (F, P, _) => F.map(({
      column: O,
      colIndex: n,
      colSpan: E,
      rowSpan: T,
      isLast: H
    }) => {
      var L, U;
      const te = dn(O), {
        ellipsis: X
      } = O, K = () => O.type === "selection" ? O.multiple !== !1 ? f(je, null, f(Si, {
        key: i,
        privateInsideTable: !0,
        checked: a,
        indeterminate: l,
        disabled: h,
        onUpdateChecked: y
      }), c ? f(HC, {
        clsPrefix: t
      }) : null) : null : f(je, null, f("div", {
        class: `${t}-data-table-th__title-wrapper`
      }, f("div", {
        class: `${t}-data-table-th__title`
      }, X === !0 || X && !X.tooltip ? f("div", {
        class: `${t}-data-table-th__ellipsis`
      }, ia(O)) : X && typeof X == "object" ? f(Bi, Object.assign({}, X, {
        theme: u.peers.Ellipsis,
        themeOverrides: u.peerOverrides.Ellipsis
      }), {
        default: () => ia(O)
      }) : ia(O)), oa(O) ? f(BC, {
        column: O
      }) : null), dd(O) ? f(CC, {
        column: O,
        options: O.filterOptions
      }) : null, pc(O) ? f(wC, {
        onResizeStart: () => {
          k(O);
        },
        onResize: (ae) => {
          w(O, ae);
        }
      }) : null), j = te in r, q = te in o, Y = P && !O.fixed ? "div" : "th";
      return f(Y, {
        ref: (ae) => e[te] = ae,
        key: te,
        style: [P && !O.fixed ? {
          position: "absolute",
          left: Ct(P(n)),
          top: 0,
          bottom: 0
        } : {
          left: Ct((L = r[te]) === null || L === void 0 ? void 0 : L.start),
          right: Ct((U = o[te]) === null || U === void 0 ? void 0 : U.start)
        }, {
          width: Ct(O.width),
          textAlign: O.titleAlign || O.align,
          height: _
        }],
        colspan: E,
        rowspan: T,
        "data-col-key": te,
        class: [`${t}-data-table-th`, (j || q) && `${t}-data-table-th--fixed-${j ? "left" : "right"}`, {
          [`${t}-data-table-th--sorting`]: mc(O, p),
          [`${t}-data-table-th--filterable`]: dd(O),
          [`${t}-data-table-th--sortable`]: oa(O),
          [`${t}-data-table-th--selection`]: O.type === "selection",
          [`${t}-data-table-th--last`]: H
        }, O.className],
        onClick: O.type !== "selection" && O.type !== "expand" && !("children" in O) ? (ae) => {
          b(ae, O);
        } : void 0
      }, K());
    });
    if (x) {
      const {
        headerHeight: F
      } = this;
      let P = 0, _ = 0;
      return d.forEach((O) => {
        O.column.fixed === "left" ? P++ : O.column.fixed === "right" && _++;
      }), f(tl, {
        ref: "virtualListRef",
        class: `${t}-data-table-base-table-header`,
        style: {
          height: Ct(F)
        },
        onScroll: this.handleTableHeaderScroll,
        columns: d,
        itemSize: F,
        showScrollbar: !1,
        items: [{}],
        itemResizable: !1,
        visibleItemsTag: jC,
        visibleItemsProps: {
          clsPrefix: t,
          id: v,
          cols: d,
          width: mt(this.scrollX)
        },
        renderItemWithCols: ({
          startColIndex: O,
          endColIndex: n,
          getLeft: E
        }) => {
          const T = d.map((L, U) => ({
            column: L.column,
            isLast: U === d.length - 1,
            colIndex: L.index,
            colSpan: 1,
            rowSpan: 1
          })).filter(({
            column: L
          }, U) => !!(O <= U && U <= n || L.fixed)), H = R(T, E, Ct(F));
          return H.splice(P, 0, f("th", {
            colspan: d.length - P - _,
            style: {
              pointerEvents: "none",
              visibility: "hidden",
              height: 0
            }
          })), f("tr", {
            style: {
              position: "relative"
            }
          }, H);
        }
      }, {
        default: ({
          renderedItemWithCols: O
        }) => O
      });
    }
    const B = f("thead", {
      class: `${t}-data-table-thead`,
      "data-n-id": v
    }, s.map((F) => f("tr", {
      class: `${t}-data-table-tr`
    }, R(F, null, void 0))));
    if (!g)
      return B;
    const {
      handleTableHeaderScroll: C,
      scrollX: S
    } = this;
    return f("div", {
      class: `${t}-data-table-base-table-header`,
      onScroll: C
    }, f("table", {
      class: `${t}-data-table-table`,
      style: {
        minWidth: mt(S),
        tableLayout: m
      }
    }, f("colgroup", null, d.map((F) => f("col", {
      key: F.key,
      style: F.style
    }))), B));
  }
});
function _C(e, t) {
  const r = [];
  function o(i, a) {
    i.forEach((l) => {
      l.children && t.has(l.key) ? (r.push({
        tmNode: l,
        striped: !1,
        key: l.key,
        index: a
      }), o(l.children, a)) : r.push({
        key: l.key,
        tmNode: l,
        striped: !1,
        index: a
      });
    });
  }
  return e.forEach((i) => {
    r.push(i);
    const {
      children: a
    } = i.tmNode;
    a && t.has(i.key) && o(a, i.index);
  }), r;
}
const WC = J({
  props: {
    clsPrefix: {
      type: String,
      required: !0
    },
    id: {
      type: String,
      required: !0
    },
    cols: {
      type: Array,
      required: !0
    },
    onMouseenter: Function,
    onMouseleave: Function
  },
  render() {
    const {
      clsPrefix: e,
      id: t,
      cols: r,
      onMouseenter: o,
      onMouseleave: i
    } = this;
    return f("table", {
      style: {
        tableLayout: "fixed"
      },
      class: `${e}-data-table-table`,
      onMouseenter: o,
      onMouseleave: i
    }, f("colgroup", null, r.map((a) => f("col", {
      key: a.key,
      style: a.style
    }))), f("tbody", {
      "data-n-id": t,
      class: `${e}-data-table-tbody`
    }, this.$slots));
  }
}), VC = J({
  name: "DataTableBody",
  props: {
    onResize: Function,
    showHeader: Boolean,
    flexHeight: Boolean,
    bodyStyle: Object
  },
  setup(e) {
    const {
      slots: t,
      bodyWidthRef: r,
      mergedExpandedRowKeysRef: o,
      mergedClsPrefixRef: i,
      mergedThemeRef: a,
      scrollXRef: l,
      colsRef: s,
      paginatedDataRef: d,
      rawPaginatedDataRef: u,
      fixedColumnLeftMapRef: c,
      fixedColumnRightMapRef: v,
      mergedCurrentPageRef: g,
      rowClassNameRef: m,
      leftActiveFixedColKeyRef: h,
      leftActiveFixedChildrenColKeysRef: p,
      rightActiveFixedColKeyRef: x,
      rightActiveFixedChildrenColKeysRef: b,
      renderExpandRef: y,
      hoverKeyRef: k,
      summaryRef: w,
      mergedSortStateRef: R,
      virtualScrollRef: B,
      virtualScrollXRef: C,
      heightForRowRef: S,
      minRowHeightRef: F,
      componentId: P,
      mergedTableLayoutRef: _,
      childTriggerColIndexRef: O,
      indentRef: n,
      rowPropsRef: E,
      maxHeightRef: T,
      stripedRef: H,
      loadingRef: L,
      onLoadRef: U,
      loadingKeySetRef: te,
      expandableRef: X,
      stickyExpandedRowsRef: K,
      renderExpandIconRef: j,
      summaryPlacementRef: q,
      treeMateRef: Y,
      scrollbarPropsRef: ae,
      setHeaderScrollLeft: le,
      doUpdateExpandedRowKeys: ce,
      handleTableBodyScroll: be,
      doCheck: G,
      doUncheck: ue,
      renderCell: Fe
    } = pe(fn), xe = pe(cn), Pe = I(null), ze = I(null), dt = I(null), rt = qe(() => d.value.length === 0), ft = qe(() => e.showHeader || !rt.value), ht = qe(() => e.showHeader || rt.value);
    let ye = "";
    const Ce = A(() => new Set(o.value));
    function De(fe) {
      var Be;
      return (Be = Y.value.getNode(fe)) === null || Be === void 0 ? void 0 : Be.rawNode;
    }
    function Le(fe, Be, $) {
      const V = De(fe.key);
      if (!V) {
        zt("data-table", `fail to get row data with key ${fe.key}`);
        return;
      }
      if ($) {
        const Q = d.value.findIndex((se) => se.key === ye);
        if (Q !== -1) {
          const se = d.value.findIndex((Se) => Se.key === fe.key), de = Math.min(Q, se), ge = Math.max(Q, se), me = [];
          d.value.slice(de, ge + 1).forEach((Se) => {
            Se.disabled || me.push(Se.key);
          }), Be ? G(me, !1, V) : ue(me, V), ye = fe.key;
          return;
        }
      }
      Be ? G(fe.key, !1, V) : ue(fe.key, V), ye = fe.key;
    }
    function et(fe) {
      const Be = De(fe.key);
      if (!Be) {
        zt("data-table", `fail to get row data with key ${fe.key}`);
        return;
      }
      G(fe.key, !0, Be);
    }
    function oe() {
      if (!ft.value) {
        const {
          value: Be
        } = dt;
        return Be || null;
      }
      if (B.value)
        return ut();
      const {
        value: fe
      } = Pe;
      return fe ? fe.containerRef : null;
    }
    function he(fe, Be) {
      var $;
      if (te.value.has(fe)) return;
      const {
        value: V
      } = o, Q = V.indexOf(fe), se = Array.from(V);
      ~Q ? (se.splice(Q, 1), ce(se)) : Be && !Be.isLeaf && !Be.shallowLoaded ? (te.value.add(fe), ($ = U.value) === null || $ === void 0 || $.call(U, Be.rawNode).then(() => {
        const {
          value: de
        } = o, ge = Array.from(de);
        ~ge.indexOf(fe) || ge.push(fe), ce(ge);
      }).finally(() => {
        te.value.delete(fe);
      })) : (se.push(fe), ce(se));
    }
    function Te() {
      k.value = null;
    }
    function ut() {
      const {
        value: fe
      } = ze;
      return (fe == null ? void 0 : fe.listElRef) || null;
    }
    function At() {
      const {
        value: fe
      } = ze;
      return (fe == null ? void 0 : fe.itemsElRef) || null;
    }
    function Dt(fe) {
      var Be;
      be(fe), (Be = Pe.value) === null || Be === void 0 || Be.sync();
    }
    function bt(fe) {
      var Be;
      const {
        onResize: $
      } = e;
      $ && $(fe), (Be = Pe.value) === null || Be === void 0 || Be.sync();
    }
    const it = {
      getScrollContainer: oe,
      scrollTo(fe, Be) {
        var $, V;
        B.value ? ($ = ze.value) === null || $ === void 0 || $.scrollTo(fe, Be) : (V = Pe.value) === null || V === void 0 || V.scrollTo(fe, Be);
      }
    }, wt = D([({
      props: fe
    }) => {
      const Be = (V) => V === null ? null : D(`[data-n-id="${fe.componentId}"] [data-col-key="${V}"]::after`, {
        boxShadow: "var(--n-box-shadow-after)"
      }), $ = (V) => V === null ? null : D(`[data-n-id="${fe.componentId}"] [data-col-key="${V}"]::before`, {
        boxShadow: "var(--n-box-shadow-before)"
      });
      return D([Be(fe.leftActiveFixedColKey), $(fe.rightActiveFixedColKey), fe.leftActiveFixedChildrenColKeys.map((V) => Be(V)), fe.rightActiveFixedChildrenColKeys.map((V) => $(V))]);
    }]);
    let ot = !1;
    return nt(() => {
      const {
        value: fe
      } = h, {
        value: Be
      } = p, {
        value: $
      } = x, {
        value: V
      } = b;
      if (!ot && fe === null && $ === null)
        return;
      const Q = {
        leftActiveFixedColKey: fe,
        leftActiveFixedChildrenColKeys: Be,
        rightActiveFixedColKey: $,
        rightActiveFixedChildrenColKeys: V,
        componentId: P
      };
      wt.mount({
        id: `n-${P}`,
        force: !0,
        props: Q,
        anchorMetaName: Or,
        parent: xe == null ? void 0 : xe.styleMountTarget
      }), ot = !0;
    }), Fd(() => {
      wt.unmount({
        id: `n-${P}`,
        parent: xe == null ? void 0 : xe.styleMountTarget
      });
    }), Object.assign({
      bodyWidth: r,
      summaryPlacement: q,
      dataTableSlots: t,
      componentId: P,
      scrollbarInstRef: Pe,
      virtualListRef: ze,
      emptyElRef: dt,
      summary: w,
      mergedClsPrefix: i,
      mergedTheme: a,
      scrollX: l,
      cols: s,
      loading: L,
      bodyShowHeaderOnly: ht,
      shouldDisplaySomeTablePart: ft,
      empty: rt,
      paginatedDataAndInfo: A(() => {
        const {
          value: fe
        } = H;
        let Be = !1;
        return {
          data: d.value.map(fe ? (V, Q) => (V.isLeaf || (Be = !0), {
            tmNode: V,
            key: V.key,
            striped: Q % 2 === 1,
            index: Q
          }) : (V, Q) => (V.isLeaf || (Be = !0), {
            tmNode: V,
            key: V.key,
            striped: !1,
            index: Q
          })),
          hasChildren: Be
        };
      }),
      rawPaginatedData: u,
      fixedColumnLeftMap: c,
      fixedColumnRightMap: v,
      currentPage: g,
      rowClassName: m,
      renderExpand: y,
      mergedExpandedRowKeySet: Ce,
      hoverKey: k,
      mergedSortState: R,
      virtualScroll: B,
      virtualScrollX: C,
      heightForRow: S,
      minRowHeight: F,
      mergedTableLayout: _,
      childTriggerColIndex: O,
      indent: n,
      rowProps: E,
      maxHeight: T,
      loadingKeySet: te,
      expandable: X,
      stickyExpandedRows: K,
      renderExpandIcon: j,
      scrollbarProps: ae,
      setHeaderScrollLeft: le,
      handleVirtualListScroll: Dt,
      handleVirtualListResize: bt,
      handleMouseleaveTable: Te,
      virtualListContainer: ut,
      virtualListContent: At,
      handleTableBodyScroll: be,
      handleCheckboxUpdateChecked: Le,
      handleRadioUpdateChecked: et,
      handleUpdateExpanded: he,
      renderCell: Fe
    }, it);
  },
  render() {
    const {
      mergedTheme: e,
      scrollX: t,
      mergedClsPrefix: r,
      virtualScroll: o,
      maxHeight: i,
      mergedTableLayout: a,
      flexHeight: l,
      loadingKeySet: s,
      onResize: d,
      setHeaderScrollLeft: u
    } = this, c = t !== void 0 || i !== void 0 || l, v = !c && a === "auto", g = t !== void 0 || v, m = {
      minWidth: mt(t) || "100%"
    };
    t && (m.width = "100%");
    const h = f(An, Object.assign({}, this.scrollbarProps, {
      ref: "scrollbarInstRef",
      scrollable: c || v,
      class: `${r}-data-table-base-table-body`,
      style: this.empty ? void 0 : this.bodyStyle,
      theme: e.peers.Scrollbar,
      themeOverrides: e.peerOverrides.Scrollbar,
      contentStyle: m,
      container: o ? this.virtualListContainer : void 0,
      content: o ? this.virtualListContent : void 0,
      horizontalRailStyle: {
        zIndex: 3
      },
      verticalRailStyle: {
        zIndex: 3
      },
      xScrollable: g,
      onScroll: o ? void 0 : this.handleTableBodyScroll,
      internalOnUpdateScrollLeft: u,
      onResize: d
    }), {
      default: () => {
        const p = {}, x = {}, {
          cols: b,
          paginatedDataAndInfo: y,
          mergedTheme: k,
          fixedColumnLeftMap: w,
          fixedColumnRightMap: R,
          currentPage: B,
          rowClassName: C,
          mergedSortState: S,
          mergedExpandedRowKeySet: F,
          stickyExpandedRows: P,
          componentId: _,
          childTriggerColIndex: O,
          expandable: n,
          rowProps: E,
          handleMouseleaveTable: T,
          renderExpand: H,
          summary: L,
          handleCheckboxUpdateChecked: U,
          handleRadioUpdateChecked: te,
          handleUpdateExpanded: X,
          heightForRow: K,
          minRowHeight: j,
          virtualScrollX: q
        } = this, {
          length: Y
        } = b;
        let ae;
        const {
          data: le,
          hasChildren: ce
        } = y, be = ce ? _C(le, F) : le;
        if (L) {
          const ye = L(this.rawPaginatedData);
          if (Array.isArray(ye)) {
            const Ce = ye.map((De, Le) => ({
              isSummaryRow: !0,
              key: `__n_summary__${Le}`,
              tmNode: {
                rawNode: De,
                disabled: !0
              },
              index: -1
            }));
            ae = this.summaryPlacement === "top" ? [...Ce, ...be] : [...be, ...Ce];
          } else {
            const Ce = {
              isSummaryRow: !0,
              key: "__n_summary__",
              tmNode: {
                rawNode: ye,
                disabled: !0
              },
              index: -1
            };
            ae = this.summaryPlacement === "top" ? [Ce, ...be] : [...be, Ce];
          }
        } else
          ae = be;
        const G = ce ? {
          width: Ct(this.indent)
        } : void 0, ue = [];
        ae.forEach((ye) => {
          H && F.has(ye.key) && (!n || n(ye.tmNode.rawNode)) ? ue.push(ye, {
            isExpandedRow: !0,
            key: `${ye.key}-expand`,
            // solve key repeat of the expanded row
            tmNode: ye.tmNode,
            index: ye.index
          }) : ue.push(ye);
        });
        const {
          length: Fe
        } = ue, xe = {};
        le.forEach(({
          tmNode: ye
        }, Ce) => {
          xe[Ce] = ye.key;
        });
        const Pe = P ? this.bodyWidth : null, ze = Pe === null ? void 0 : `${Pe}px`, dt = this.virtualScrollX ? "div" : "td";
        let rt = 0, ft = 0;
        q && b.forEach((ye) => {
          ye.column.fixed === "left" ? rt++ : ye.column.fixed === "right" && ft++;
        });
        const ht = ({
          // Normal
          rowInfo: ye,
          displayedRowIndex: Ce,
          isVirtual: De,
          // Virtual X
          isVirtualX: Le,
          startColIndex: et,
          endColIndex: oe,
          getLeft: he
        }) => {
          const {
            index: Te
          } = ye;
          if ("isExpandedRow" in ye) {
            const {
              tmNode: {
                key: se,
                rawNode: de
              }
            } = ye;
            return f("tr", {
              class: `${r}-data-table-tr ${r}-data-table-tr--expanded`,
              key: `${se}__expand`
            }, f("td", {
              class: [`${r}-data-table-td`, `${r}-data-table-td--last-col`, Ce + 1 === Fe && `${r}-data-table-td--last-row`],
              colspan: Y
            }, P ? f("div", {
              class: `${r}-data-table-expand`,
              style: {
                width: ze
              }
            }, H(de, Te)) : H(de, Te)));
          }
          const ut = "isSummaryRow" in ye, At = !ut && ye.striped, {
            tmNode: Dt,
            key: bt
          } = ye, {
            rawNode: it
          } = Dt, wt = F.has(bt), ot = E ? E(it, Te) : void 0, fe = typeof C == "string" ? C : nC(it, Te, C), Be = Le ? b.filter((se, de) => !!(et <= de && de <= oe || se.column.fixed)) : b, $ = Le ? Ct((K == null ? void 0 : K(it, Te)) || j) : void 0, V = Be.map((se) => {
            var de, ge, me, Se, Ne;
            const at = se.index;
            if (Ce in p) {
              const lt = p[Ce], vt = lt.indexOf(at);
              if (~vt)
                return lt.splice(vt, 1), null;
            }
            const {
              column: Ue
            } = se, Ot = dn(se), {
              rowSpan: jt,
              colSpan: _t
            } = Ue, Ut = ut ? ((de = ye.tmNode.rawNode[Ot]) === null || de === void 0 ? void 0 : de.colSpan) || 1 : _t ? _t(it, Te) : 1, Kt = ut ? ((ge = ye.tmNode.rawNode[Ot]) === null || ge === void 0 ? void 0 : ge.rowSpan) || 1 : jt ? jt(it, Te) : 1, rn = at + Ut === Y, qt = Ce + Kt === Fe, W = Kt > 1;
            if (W && (x[Ce] = {
              [at]: []
            }), Ut > 1 || W)
              for (let lt = Ce; lt < Ce + Kt; ++lt) {
                W && x[Ce][at].push(xe[lt]);
                for (let vt = at; vt < at + Ut; ++vt)
                  lt === Ce && vt === at || (lt in p ? p[lt].push(vt) : p[lt] = [vt]);
              }
            const ee = W ? this.hoverKey : null, {
              cellProps: we
            } = Ue, Oe = we == null ? void 0 : we(it, Te), Ge = {
              "--indent-offset": ""
            }, He = Ue.fixed ? "td" : dt;
            return f(He, Object.assign({}, Oe, {
              key: Ot,
              style: [{
                textAlign: Ue.align || void 0,
                width: Ct(Ue.width)
              }, Le && {
                height: $
              }, Le && !Ue.fixed ? {
                position: "absolute",
                left: Ct(he(at)),
                top: 0,
                bottom: 0
              } : {
                left: Ct((me = w[Ot]) === null || me === void 0 ? void 0 : me.start),
                right: Ct((Se = R[Ot]) === null || Se === void 0 ? void 0 : Se.start)
              }, Ge, (Oe == null ? void 0 : Oe.style) || ""],
              colspan: Ut,
              rowspan: De ? void 0 : Kt,
              "data-col-key": Ot,
              class: [`${r}-data-table-td`, Ue.className, Oe == null ? void 0 : Oe.class, ut && `${r}-data-table-td--summary`, ee !== null && x[Ce][at].includes(ee) && `${r}-data-table-td--hover`, mc(Ue, S) && `${r}-data-table-td--sorting`, Ue.fixed && `${r}-data-table-td--fixed-${Ue.fixed}`, Ue.align && `${r}-data-table-td--${Ue.align}-align`, Ue.type === "selection" && `${r}-data-table-td--selection`, Ue.type === "expand" && `${r}-data-table-td--expand`, rn && `${r}-data-table-td--last-col`, qt && `${r}-data-table-td--last-row`]
            }), ce && at === O ? [ph(Ge["--indent-offset"] = ut ? 0 : ye.tmNode.level, f("div", {
              class: `${r}-data-table-indent`,
              style: G
            })), ut || ye.tmNode.isLeaf ? f("div", {
              class: `${r}-data-table-expand-placeholder`
            }) : f(cd, {
              class: `${r}-data-table-expand-trigger`,
              clsPrefix: r,
              expanded: wt,
              rowData: it,
              renderExpandIcon: this.renderExpandIcon,
              loading: s.has(ye.key),
              onClick: () => {
                X(bt, ye.tmNode);
              }
            })] : null, Ue.type === "selection" ? ut ? null : Ue.multiple === !1 ? f(vC, {
              key: B,
              rowKey: bt,
              disabled: ye.tmNode.disabled,
              onUpdateChecked: () => {
                te(ye.tmNode);
              }
            }) : f(aC, {
              key: B,
              rowKey: bt,
              disabled: ye.tmNode.disabled,
              onUpdateChecked: (lt, vt) => {
                U(ye.tmNode, lt, vt.shiftKey);
              }
            }) : Ue.type === "expand" ? ut ? null : !Ue.expandable || !((Ne = Ue.expandable) === null || Ne === void 0) && Ne.call(Ue, it) ? f(cd, {
              clsPrefix: r,
              rowData: it,
              expanded: wt,
              renderExpandIcon: this.renderExpandIcon,
              onClick: () => {
                X(bt, null);
              }
            }) : null : f(mC, {
              clsPrefix: r,
              index: Te,
              row: it,
              column: Ue,
              isSummary: ut,
              mergedTheme: k,
              renderCell: this.renderCell
            }));
          });
          return Le && rt && ft && V.splice(rt, 0, f("td", {
            colspan: b.length - rt - ft,
            style: {
              pointerEvents: "none",
              visibility: "hidden",
              height: 0
            }
          })), f("tr", Object.assign({}, ot, {
            onMouseenter: (se) => {
              var de;
              this.hoverKey = bt, (de = ot == null ? void 0 : ot.onMouseenter) === null || de === void 0 || de.call(ot, se);
            },
            key: bt,
            class: [`${r}-data-table-tr`, ut && `${r}-data-table-tr--summary`, At && `${r}-data-table-tr--striped`, wt && `${r}-data-table-tr--expanded`, fe, ot == null ? void 0 : ot.class],
            style: [ot == null ? void 0 : ot.style, Le && {
              height: $
            }]
          }), V);
        };
        return o ? f(tl, {
          ref: "virtualListRef",
          items: ue,
          itemSize: this.minRowHeight,
          visibleItemsTag: WC,
          visibleItemsProps: {
            clsPrefix: r,
            id: _,
            cols: b,
            onMouseleave: T
          },
          showScrollbar: !1,
          onResize: this.handleVirtualListResize,
          onScroll: this.handleVirtualListScroll,
          itemsStyle: m,
          itemResizable: !q,
          columns: b,
          renderItemWithCols: q ? ({
            itemIndex: ye,
            item: Ce,
            startColIndex: De,
            endColIndex: Le,
            getLeft: et
          }) => ht({
            displayedRowIndex: ye,
            isVirtual: !0,
            isVirtualX: !0,
            rowInfo: Ce,
            startColIndex: De,
            endColIndex: Le,
            getLeft: et
          }) : void 0
        }, {
          default: ({
            item: ye,
            index: Ce,
            renderedItemWithCols: De
          }) => De || ht({
            rowInfo: ye,
            displayedRowIndex: Ce,
            isVirtual: !0,
            isVirtualX: !1,
            startColIndex: 0,
            endColIndex: 0,
            getLeft(Le) {
              return 0;
            }
          })
        }) : f("table", {
          class: `${r}-data-table-table`,
          onMouseleave: T,
          style: {
            tableLayout: this.mergedTableLayout
          }
        }, f("colgroup", null, b.map((ye) => f("col", {
          key: ye.key,
          style: ye.style
        }))), this.showHeader ? f($c, {
          discrete: !1
        }) : null, this.empty ? null : f("tbody", {
          "data-n-id": _,
          class: `${r}-data-table-tbody`
        }, ue.map((ye, Ce) => ht({
          rowInfo: ye,
          displayedRowIndex: Ce,
          isVirtual: !1,
          isVirtualX: !1,
          startColIndex: -1,
          endColIndex: -1,
          getLeft(De) {
            return -1;
          }
        }))));
      }
    });
    if (this.empty) {
      const p = () => f("div", {
        class: [`${r}-data-table-empty`, this.loading && `${r}-data-table-empty--hide`],
        style: this.bodyStyle,
        ref: "emptyElRef"
      }, tn(this.dataTableSlots.empty, () => [f(Mr, {
        theme: this.mergedTheme.peers.Empty,
        themeOverrides: this.mergedTheme.peerOverrides.Empty
      })]));
      return this.shouldDisplaySomeTablePart ? f(je, null, h, p()) : f(Tr, {
        onResize: this.onResize
      }, {
        default: p
      });
    }
    return h;
  }
}), UC = J({
  name: "MainTable",
  setup() {
    const {
      mergedClsPrefixRef: e,
      rightFixedColumnsRef: t,
      leftFixedColumnsRef: r,
      bodyWidthRef: o,
      maxHeightRef: i,
      minHeightRef: a,
      flexHeightRef: l,
      virtualScrollHeaderRef: s,
      syncScrollState: d
    } = pe(fn), u = I(null), c = I(null), v = I(null), g = I(!(r.value.length || t.value.length)), m = A(() => ({
      maxHeight: mt(i.value),
      minHeight: mt(a.value)
    }));
    function h(y) {
      o.value = y.contentRect.width, d(), g.value || (g.value = !0);
    }
    function p() {
      var y;
      const {
        value: k
      } = u;
      return k ? s.value ? ((y = k.virtualListRef) === null || y === void 0 ? void 0 : y.listElRef) || null : k.$el : null;
    }
    function x() {
      const {
        value: y
      } = c;
      return y ? y.getScrollContainer() : null;
    }
    const b = {
      getBodyElement: x,
      getHeaderElement: p,
      scrollTo(y, k) {
        var w;
        (w = c.value) === null || w === void 0 || w.scrollTo(y, k);
      }
    };
    return nt(() => {
      const {
        value: y
      } = v;
      if (!y) return;
      const k = `${e.value}-data-table-base-table--transition-disabled`;
      g.value ? setTimeout(() => {
        y.classList.remove(k);
      }, 0) : y.classList.add(k);
    }), Object.assign({
      maxHeight: i,
      mergedClsPrefix: e,
      selfElRef: v,
      headerInstRef: u,
      bodyInstRef: c,
      bodyStyle: m,
      flexHeight: l,
      handleBodyResize: h
    }, b);
  },
  render() {
    const {
      mergedClsPrefix: e,
      maxHeight: t,
      flexHeight: r
    } = this, o = t === void 0 && !r;
    return f("div", {
      class: `${e}-data-table-base-table`,
      ref: "selfElRef"
    }, o ? null : f($c, {
      ref: "headerInstRef"
    }), f(VC, {
      ref: "bodyInstRef",
      bodyStyle: this.bodyStyle,
      showHeader: o,
      flexHeight: r,
      onResize: this.handleBodyResize
    }));
  }
}), hd = qC(), KC = D([z("data-table", `
 width: 100%;
 font-size: var(--n-font-size);
 display: flex;
 flex-direction: column;
 position: relative;
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 --n-merged-th-color-hover: var(--n-th-color-hover);
 --n-merged-th-color-sorting: var(--n-th-color-sorting);
 --n-merged-td-color-hover: var(--n-td-color-hover);
 --n-merged-td-color-sorting: var(--n-td-color-sorting);
 --n-merged-td-color-striped: var(--n-td-color-striped);
 `, [z("data-table-wrapper", `
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 `), N("flex-height", [D(">", [z("data-table-wrapper", [D(">", [z("data-table-base-table", `
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 `, [D(">", [z("data-table-base-table-body", "flex-basis: 0;", [
  // last-child means there is no empty icon
  // body is a scrollbar, we need to override height 100%
  D("&:last-child", "flex-grow: 1;")
])])])])])])]), D(">", [z("data-table-loading-wrapper", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [zo({
  originalTransform: "translateX(-50%) translateY(-50%)"
})])]), z("data-table-expand-placeholder", `
 margin-right: 8px;
 display: inline-block;
 width: 16px;
 height: 1px;
 `), z("data-table-indent", `
 display: inline-block;
 height: 1px;
 `), z("data-table-expand-trigger", `
 display: inline-flex;
 margin-right: 8px;
 cursor: pointer;
 font-size: 16px;
 vertical-align: -0.2em;
 position: relative;
 width: 16px;
 height: 16px;
 color: var(--n-td-text-color);
 transition: color .3s var(--n-bezier);
 `, [N("expanded", [z("icon", "transform: rotate(90deg);", [Qt({
  originalTransform: "rotate(90deg)"
})]), z("base-icon", "transform: rotate(90deg);", [Qt({
  originalTransform: "rotate(90deg)"
})])]), z("base-loading", `
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [Qt()]), z("icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [Qt()]), z("base-icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [Qt()])]), z("data-table-thead", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-merged-th-color);
 `), z("data-table-tr", `
 position: relative;
 box-sizing: border-box;
 background-clip: padding-box;
 transition: background-color .3s var(--n-bezier);
 `, [z("data-table-expand", `
 position: sticky;
 left: 0;
 overflow: hidden;
 margin: calc(var(--n-th-padding) * -1);
 padding: var(--n-th-padding);
 box-sizing: border-box;
 `), N("striped", "background-color: var(--n-merged-td-color-striped);", [z("data-table-td", "background-color: var(--n-merged-td-color-striped);")]), Je("summary", [D("&:hover", "background-color: var(--n-merged-td-color-hover);", [D(">", [z("data-table-td", "background-color: var(--n-merged-td-color-hover);")])])])]), z("data-table-th", `
 padding: var(--n-th-padding);
 position: relative;
 text-align: start;
 box-sizing: border-box;
 background-color: var(--n-merged-th-color);
 border-color: var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 color: var(--n-th-text-color);
 transition:
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 font-weight: var(--n-th-font-weight);
 `, [N("filterable", `
 padding-right: 36px;
 `, [N("sortable", `
 padding-right: calc(var(--n-th-padding) + 36px);
 `)]), hd, N("selection", `
 padding: 0;
 text-align: center;
 line-height: 0;
 z-index: 3;
 `), M("title-wrapper", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 max-width: 100%;
 `, [M("title", `
 flex: 1;
 min-width: 0;
 `)]), M("ellipsis", `
 display: inline-block;
 vertical-align: bottom;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 `), N("hover", `
 background-color: var(--n-merged-th-color-hover);
 `), N("sorting", `
 background-color: var(--n-merged-th-color-sorting);
 `), N("sortable", `
 cursor: pointer;
 `, [M("ellipsis", `
 max-width: calc(100% - 18px);
 `), D("&:hover", `
 background-color: var(--n-merged-th-color-hover);
 `)]), z("data-table-sorter", `
 height: var(--n-sorter-size);
 width: var(--n-sorter-size);
 margin-left: 4px;
 position: relative;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 vertical-align: -0.2em;
 color: var(--n-th-icon-color);
 transition: color .3s var(--n-bezier);
 `, [z("base-icon", "transition: transform .3s var(--n-bezier)"), N("desc", [z("base-icon", `
 transform: rotate(0deg);
 `)]), N("asc", [z("base-icon", `
 transform: rotate(-180deg);
 `)]), N("asc, desc", `
 color: var(--n-th-icon-color-active);
 `)]), z("data-table-resize-button", `
 width: var(--n-resizable-container-size);
 position: absolute;
 top: 0;
 right: calc(var(--n-resizable-container-size) / 2);
 bottom: 0;
 cursor: col-resize;
 user-select: none;
 `, [D("&::after", `
 width: var(--n-resizable-size);
 height: 50%;
 position: absolute;
 top: 50%;
 left: calc(var(--n-resizable-container-size) / 2);
 bottom: 0;
 background-color: var(--n-merged-border-color);
 transform: translateY(-50%);
 transition: background-color .3s var(--n-bezier);
 z-index: 1;
 content: '';
 `), N("active", [D("&::after", ` 
 background-color: var(--n-th-icon-color-active);
 `)]), D("&:hover::after", `
 background-color: var(--n-th-icon-color-active);
 `)]), z("data-table-filter", `
 position: absolute;
 z-index: auto;
 right: 0;
 width: 36px;
 top: 0;
 bottom: 0;
 cursor: pointer;
 display: flex;
 justify-content: center;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: var(--n-filter-size);
 color: var(--n-th-icon-color);
 `, [D("&:hover", `
 background-color: var(--n-th-button-color-hover);
 `), N("show", `
 background-color: var(--n-th-button-color-hover);
 `), N("active", `
 background-color: var(--n-th-button-color-hover);
 color: var(--n-th-icon-color-active);
 `)])]), z("data-table-td", `
 padding: var(--n-td-padding);
 text-align: start;
 box-sizing: border-box;
 border: none;
 background-color: var(--n-merged-td-color);
 color: var(--n-td-text-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `, [N("expand", [z("data-table-expand-trigger", `
 margin-right: 0;
 `)]), N("last-row", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `, [
  // make sure there is no overlap between bottom border and
  // fixed column box shadow
  D("&::after", `
 bottom: 0 !important;
 `),
  D("&::before", `
 bottom: 0 !important;
 `)
]), N("summary", `
 background-color: var(--n-merged-th-color);
 `), N("hover", `
 background-color: var(--n-merged-td-color-hover);
 `), N("sorting", `
 background-color: var(--n-merged-td-color-sorting);
 `), M("ellipsis", `
 display: inline-block;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 vertical-align: bottom;
 max-width: calc(100% - var(--indent-offset, -1.5) * 16px - 24px);
 `), N("selection, expand", `
 text-align: center;
 padding: 0;
 line-height: 0;
 `), hd]), z("data-table-empty", `
 box-sizing: border-box;
 padding: var(--n-empty-padding);
 flex-grow: 1;
 flex-shrink: 0;
 opacity: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: opacity .3s var(--n-bezier);
 `, [N("hide", `
 opacity: 0;
 `)]), M("pagination", `
 margin: var(--n-pagination-margin);
 display: flex;
 justify-content: flex-end;
 `), z("data-table-wrapper", `
 position: relative;
 opacity: 1;
 transition: opacity .3s var(--n-bezier), border-color .3s var(--n-bezier);
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 line-height: var(--n-line-height);
 `), N("loading", [z("data-table-wrapper", `
 opacity: var(--n-opacity-loading);
 pointer-events: none;
 `)]), N("single-column", [z("data-table-td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `, [D("&::after, &::before", `
 bottom: 0 !important;
 `)])]), Je("single-line", [z("data-table-th", `
 border-right: 1px solid var(--n-merged-border-color);
 `, [N("last", `
 border-right: 0 solid var(--n-merged-border-color);
 `)]), z("data-table-td", `
 border-right: 1px solid var(--n-merged-border-color);
 `, [N("last-col", `
 border-right: 0 solid var(--n-merged-border-color);
 `)])]), N("bordered", [z("data-table-wrapper", `
 border: 1px solid var(--n-merged-border-color);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 overflow: hidden;
 `)]), z("data-table-base-table", [N("transition-disabled", [z("data-table-th", [D("&::after, &::before", "transition: none;")]), z("data-table-td", [D("&::after, &::before", "transition: none;")])])]), N("bottom-bordered", [z("data-table-td", [N("last-row", `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]), z("data-table-table", `
 font-variant-numeric: tabular-nums;
 width: 100%;
 word-break: break-word;
 transition: background-color .3s var(--n-bezier);
 border-collapse: separate;
 border-spacing: 0;
 background-color: var(--n-merged-td-color);
 `), z("data-table-base-table-header", `
 border-top-left-radius: calc(var(--n-border-radius) - 1px);
 border-top-right-radius: calc(var(--n-border-radius) - 1px);
 z-index: 3;
 overflow: scroll;
 flex-shrink: 0;
 transition: border-color .3s var(--n-bezier);
 scrollbar-width: none;
 `, [D("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 display: none;
 width: 0;
 height: 0;
 `)]), z("data-table-check-extra", `
 transition: color .3s var(--n-bezier);
 color: var(--n-th-icon-color);
 position: absolute;
 font-size: 14px;
 right: -4px;
 top: 50%;
 transform: translateY(-50%);
 z-index: 1;
 `)]), z("data-table-filter-menu", [z("scrollbar", `
 max-height: 240px;
 `), M("group", `
 display: flex;
 flex-direction: column;
 padding: 12px 12px 0 12px;
 `, [z("checkbox", `
 margin-bottom: 12px;
 margin-right: 0;
 `), z("radio", `
 margin-bottom: 12px;
 margin-right: 0;
 `)]), M("action", `
 padding: var(--n-action-padding);
 display: flex;
 flex-wrap: nowrap;
 justify-content: space-evenly;
 border-top: 1px solid var(--n-action-divider-color);
 `, [z("button", [D("&:not(:last-child)", `
 margin: var(--n-action-button-margin);
 `), D("&:last-child", `
 margin-right: 0;
 `)])]), z("divider", `
 margin: 0 !important;
 `)]), gi(z("data-table", `
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 --n-merged-th-color-hover: var(--n-th-color-hover-modal);
 --n-merged-td-color-hover: var(--n-td-color-hover-modal);
 --n-merged-th-color-sorting: var(--n-th-color-hover-modal);
 --n-merged-td-color-sorting: var(--n-td-color-hover-modal);
 --n-merged-td-color-striped: var(--n-td-color-striped-modal);
 `)), Ha(z("data-table", `
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 --n-merged-th-color-hover: var(--n-th-color-hover-popover);
 --n-merged-td-color-hover: var(--n-td-color-hover-popover);
 --n-merged-th-color-sorting: var(--n-th-color-hover-popover);
 --n-merged-td-color-sorting: var(--n-td-color-hover-popover);
 --n-merged-td-color-striped: var(--n-td-color-striped-popover);
 `))]);
function qC() {
  return [N("fixed-left", `
 left: 0;
 position: sticky;
 z-index: 2;
 `, [D("&::after", `
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--n-bezier);
 right: -36px;
 `)]), N("fixed-right", `
 right: 0;
 position: sticky;
 z-index: 1;
 `, [D("&::before", `
 pointer-events: none;
 content: "";
 width: 36px;
 display: inline-block;
 position: absolute;
 top: 0;
 bottom: -1px;
 transition: box-shadow .2s var(--n-bezier);
 left: -36px;
 `)])];
}
function GC(e, t) {
  const {
    paginatedDataRef: r,
    treeMateRef: o,
    selectionColumnRef: i
  } = t, a = I(e.defaultCheckedRowKeys), l = A(() => {
    var R;
    const {
      checkedRowKeys: B
    } = e, C = B === void 0 ? a.value : B;
    return ((R = i.value) === null || R === void 0 ? void 0 : R.multiple) === !1 ? {
      checkedKeys: C.slice(0, 1),
      indeterminateKeys: []
    } : o.value.getCheckedKeys(C, {
      cascade: e.cascade,
      allowNotLoaded: e.allowCheckingNotLoaded
    });
  }), s = A(() => l.value.checkedKeys), d = A(() => l.value.indeterminateKeys), u = A(() => new Set(s.value)), c = A(() => new Set(d.value)), v = A(() => {
    const {
      value: R
    } = u;
    return r.value.reduce((B, C) => {
      const {
        key: S,
        disabled: F
      } = C;
      return B + (!F && R.has(S) ? 1 : 0);
    }, 0);
  }), g = A(() => r.value.filter((R) => R.disabled).length), m = A(() => {
    const {
      length: R
    } = r.value, {
      value: B
    } = c;
    return v.value > 0 && v.value < R - g.value || r.value.some((C) => B.has(C.key));
  }), h = A(() => {
    const {
      length: R
    } = r.value;
    return v.value !== 0 && v.value === R - g.value;
  }), p = A(() => r.value.length === 0);
  function x(R, B, C) {
    const {
      "onUpdate:checkedRowKeys": S,
      onUpdateCheckedRowKeys: F,
      onCheckedRowKeysChange: P
    } = e, _ = [], {
      value: {
        getNode: O
      }
    } = o;
    R.forEach((n) => {
      var E;
      const T = (E = O(n)) === null || E === void 0 ? void 0 : E.rawNode;
      _.push(T);
    }), S && ne(S, R, _, {
      row: B,
      action: C
    }), F && ne(F, R, _, {
      row: B,
      action: C
    }), P && ne(P, R, _, {
      row: B,
      action: C
    }), a.value = R;
  }
  function b(R, B = !1, C) {
    if (!e.loading) {
      if (B) {
        x(Array.isArray(R) ? R.slice(0, 1) : [R], C, "check");
        return;
      }
      x(o.value.check(R, s.value, {
        cascade: e.cascade,
        allowNotLoaded: e.allowCheckingNotLoaded
      }).checkedKeys, C, "check");
    }
  }
  function y(R, B) {
    e.loading || x(o.value.uncheck(R, s.value, {
      cascade: e.cascade,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, B, "uncheck");
  }
  function k(R = !1) {
    const {
      value: B
    } = i;
    if (!B || e.loading) return;
    const C = [];
    (R ? o.value.treeNodes : r.value).forEach((S) => {
      S.disabled || C.push(S.key);
    }), x(o.value.check(C, s.value, {
      cascade: !0,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, void 0, "checkAll");
  }
  function w(R = !1) {
    const {
      value: B
    } = i;
    if (!B || e.loading) return;
    const C = [];
    (R ? o.value.treeNodes : r.value).forEach((S) => {
      S.disabled || C.push(S.key);
    }), x(o.value.uncheck(C, s.value, {
      cascade: !0,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, void 0, "uncheckAll");
  }
  return {
    mergedCheckedRowKeySetRef: u,
    mergedCheckedRowKeysRef: s,
    mergedInderminateRowKeySetRef: c,
    someRowsCheckedRef: m,
    allRowsCheckedRef: h,
    headerCheckboxDisabledRef: p,
    doUpdateCheckedRowKeys: x,
    doCheckAll: k,
    doUncheckAll: w,
    doCheck: b,
    doUncheck: y
  };
}
function XC(e, t) {
  const r = qe(() => {
    for (const u of e.columns)
      if (u.type === "expand")
        return process.env.NODE_ENV !== "production" && !u.renderExpand && zt("data-table", "column with type `expand` has no `renderExpand` prop."), u.renderExpand;
  }), o = qe(() => {
    let u;
    for (const c of e.columns)
      if (c.type === "expand") {
        u = c.expandable;
        break;
      }
    return u;
  }), i = I(e.defaultExpandAll ? r != null && r.value ? (() => {
    const u = [];
    return t.value.treeNodes.forEach((c) => {
      var v;
      !((v = o.value) === null || v === void 0) && v.call(o, c.rawNode) && u.push(c.key);
    }), u;
  })() : t.value.getNonLeafKeys() : e.defaultExpandedRowKeys), a = ie(e, "expandedRowKeys"), l = ie(e, "stickyExpandedRows"), s = Pt(a, i);
  function d(u) {
    const {
      onUpdateExpandedRowKeys: c,
      "onUpdate:expandedRowKeys": v
    } = e;
    c && ne(c, u), v && ne(v, u), i.value = u;
  }
  return {
    stickyExpandedRowsRef: l,
    mergedExpandedRowKeysRef: s,
    renderExpandRef: r,
    expandableRef: o,
    doUpdateExpandedRowKeys: d
  };
}
function YC(e, t) {
  const r = [], o = [], i = [], a = /* @__PURE__ */ new WeakMap();
  let l = -1, s = 0, d = !1, u = 0;
  function c(g, m) {
    m > l && (r[m] = [], l = m), g.forEach((h) => {
      if ("children" in h)
        c(h.children, m + 1);
      else {
        const p = "key" in h ? h.key : void 0;
        o.push({
          key: dn(h),
          style: tC(h, p !== void 0 ? mt(t(p)) : void 0),
          column: h,
          index: u++,
          // The width property is only applied to horizontally virtual scroll table
          width: h.width === void 0 ? 128 : Number(h.width)
        }), s += 1, d || (d = !!h.ellipsis), i.push(h);
      }
    });
  }
  c(e, 0), u = 0;
  function v(g, m) {
    let h = 0;
    g.forEach((p) => {
      var x;
      if ("children" in p) {
        const b = u, y = {
          column: p,
          colIndex: u,
          colSpan: 0,
          rowSpan: 1,
          isLast: !1
        };
        v(p.children, m + 1), p.children.forEach((k) => {
          var w, R;
          y.colSpan += (R = (w = a.get(k)) === null || w === void 0 ? void 0 : w.colSpan) !== null && R !== void 0 ? R : 0;
        }), b + y.colSpan === s && (y.isLast = !0), a.set(p, y), r[m].push(y);
      } else {
        if (u < h) {
          u += 1;
          return;
        }
        let b = 1;
        "titleColSpan" in p && (b = (x = p.titleColSpan) !== null && x !== void 0 ? x : 1), b > 1 && (h = u + b);
        const y = u + b === s, k = {
          column: p,
          colSpan: b,
          colIndex: u,
          rowSpan: l - m + 1,
          isLast: y
        };
        a.set(p, k), r[m].push(k), u += 1;
      }
    });
  }
  return v(e, 0), {
    hasEllipsis: d,
    rows: r,
    cols: o,
    dataRelatedCols: i
  };
}
function ZC(e, t) {
  const r = A(() => YC(e.columns, t));
  return {
    rowsRef: A(() => r.value.rows),
    colsRef: A(() => r.value.cols),
    hasEllipsisRef: A(() => r.value.hasEllipsis),
    dataRelatedColsRef: A(() => r.value.dataRelatedCols)
  };
}
function JC() {
  const e = I({});
  function t(i) {
    return e.value[i];
  }
  function r(i, a) {
    pc(i) && "key" in i && (e.value[i.key] = a);
  }
  function o() {
    e.value = {};
  }
  return {
    getResizableWidth: t,
    doUpdateResizableWidth: r,
    clearResizableWidth: o
  };
}
function QC(e, {
  mainTableInstRef: t,
  mergedCurrentPageRef: r,
  bodyWidthRef: o
}) {
  let i = 0;
  const a = I(), l = I(null), s = I([]), d = I(null), u = I([]), c = A(() => mt(e.scrollX)), v = A(() => e.columns.filter((F) => F.fixed === "left")), g = A(() => e.columns.filter((F) => F.fixed === "right")), m = A(() => {
    const F = {};
    let P = 0;
    function _(O) {
      O.forEach((n) => {
        const E = {
          start: P,
          end: 0
        };
        F[dn(n)] = E, "children" in n ? (_(n.children), E.end = P) : (P += ld(n) || 0, E.end = P);
      });
    }
    return _(v.value), F;
  }), h = A(() => {
    const F = {};
    let P = 0;
    function _(O) {
      for (let n = O.length - 1; n >= 0; --n) {
        const E = O[n], T = {
          start: P,
          end: 0
        };
        F[dn(E)] = T, "children" in E ? (_(E.children), T.end = P) : (P += ld(E) || 0, T.end = P);
      }
    }
    return _(g.value), F;
  });
  function p() {
    var F, P;
    const {
      value: _
    } = v;
    let O = 0;
    const {
      value: n
    } = m;
    let E = null;
    for (let T = 0; T < _.length; ++T) {
      const H = dn(_[T]);
      if (i > (((F = n[H]) === null || F === void 0 ? void 0 : F.start) || 0) - O)
        E = H, O = ((P = n[H]) === null || P === void 0 ? void 0 : P.end) || 0;
      else
        break;
    }
    l.value = E;
  }
  function x() {
    s.value = [];
    let F = e.columns.find((P) => dn(P) === l.value);
    for (; F && "children" in F; ) {
      const P = F.children.length;
      if (P === 0) break;
      const _ = F.children[P - 1];
      s.value.push(dn(_)), F = _;
    }
  }
  function b() {
    var F, P;
    const {
      value: _
    } = g, O = Number(e.scrollX), {
      value: n
    } = o;
    if (n === null) return;
    let E = 0, T = null;
    const {
      value: H
    } = h;
    for (let L = _.length - 1; L >= 0; --L) {
      const U = dn(_[L]);
      if (Math.round(i + (((F = H[U]) === null || F === void 0 ? void 0 : F.start) || 0) + n - E) < O)
        T = U, E = ((P = H[U]) === null || P === void 0 ? void 0 : P.end) || 0;
      else
        break;
    }
    d.value = T;
  }
  function y() {
    u.value = [];
    let F = e.columns.find((P) => dn(P) === d.value);
    for (; F && "children" in F && F.children.length; ) {
      const P = F.children[0];
      u.value.push(dn(P)), F = P;
    }
  }
  function k() {
    const F = t.value ? t.value.getHeaderElement() : null, P = t.value ? t.value.getBodyElement() : null;
    return {
      header: F,
      body: P
    };
  }
  function w() {
    const {
      body: F
    } = k();
    F && (F.scrollTop = 0);
  }
  function R() {
    a.value !== "body" ? Qo(C) : a.value = void 0;
  }
  function B(F) {
    var P;
    (P = e.onScroll) === null || P === void 0 || P.call(e, F), a.value !== "head" ? Qo(C) : a.value = void 0;
  }
  function C() {
    const {
      header: F,
      body: P
    } = k();
    if (!P) return;
    const {
      value: _
    } = o;
    if (_ !== null) {
      if (e.maxHeight || e.flexHeight) {
        if (!F) return;
        const O = i - F.scrollLeft;
        a.value = O !== 0 ? "head" : "body", a.value === "head" ? (i = F.scrollLeft, P.scrollLeft = i) : (i = P.scrollLeft, F.scrollLeft = i);
      } else
        i = P.scrollLeft;
      p(), x(), b(), y();
    }
  }
  function S(F) {
    const {
      header: P
    } = k();
    P && (P.scrollLeft = F, C());
  }
  return Ie(r, () => {
    w();
  }), {
    styleScrollXRef: c,
    fixedColumnLeftMapRef: m,
    fixedColumnRightMapRef: h,
    leftFixedColumnsRef: v,
    rightFixedColumnsRef: g,
    leftActiveFixedColKeyRef: l,
    leftActiveFixedChildrenColKeysRef: s,
    rightActiveFixedColKeyRef: d,
    rightActiveFixedChildrenColKeysRef: u,
    syncScrollState: C,
    handleTableBodyScroll: B,
    handleTableHeaderScroll: R,
    setHeaderScrollLeft: S
  };
}
function Vo(e) {
  return typeof e == "object" && typeof e.multiple == "number" ? e.multiple : !1;
}
function ew(e, t) {
  return t && (e === void 0 || e === "default" || typeof e == "object" && e.compare === "default") ? tw(t) : typeof e == "function" ? e : e && typeof e == "object" && e.compare && e.compare !== "default" ? e.compare : !1;
}
function tw(e) {
  return (t, r) => {
    const o = t[e], i = r[e];
    return o == null ? i == null ? 0 : -1 : i == null ? 1 : typeof o == "number" && typeof i == "number" ? o - i : typeof o == "string" && typeof i == "string" ? o.localeCompare(i) : 0;
  };
}
function nw(e, {
  dataRelatedColsRef: t,
  filteredDataRef: r
}) {
  const o = [];
  t.value.forEach((m) => {
    var h;
    m.sorter !== void 0 && g(o, {
      columnKey: m.key,
      sorter: m.sorter,
      order: (h = m.defaultSortOrder) !== null && h !== void 0 ? h : !1
    });
  });
  const i = I(o), a = A(() => {
    const m = t.value.filter((x) => x.type !== "selection" && x.sorter !== void 0 && (x.sortOrder === "ascend" || x.sortOrder === "descend" || x.sortOrder === !1)), h = m.filter((x) => x.sortOrder !== !1);
    if (h.length)
      return h.map((x) => ({
        columnKey: x.key,
        // column to sort has controlled sorter
        // sorter && sort order won't be undefined
        order: x.sortOrder,
        sorter: x.sorter
      }));
    if (m.length) return [];
    const {
      value: p
    } = i;
    return Array.isArray(p) ? p : p ? [p] : [];
  }), l = A(() => {
    const m = a.value.slice().sort((h, p) => {
      const x = Vo(h.sorter) || 0;
      return (Vo(p.sorter) || 0) - x;
    });
    return m.length ? r.value.slice().sort((p, x) => {
      let b = 0;
      return m.some((y) => {
        const {
          columnKey: k,
          sorter: w,
          order: R
        } = y, B = ew(w, k);
        return B && R && (b = B(p.rawNode, x.rawNode), b !== 0) ? (b = b * Qy(R), !0) : !1;
      }), b;
    }) : r.value;
  });
  function s(m) {
    let h = a.value.slice();
    return m && Vo(m.sorter) !== !1 ? (h = h.filter((p) => Vo(p.sorter) !== !1), g(h, m), h) : m || null;
  }
  function d(m) {
    const h = s(m);
    u(h);
  }
  function u(m) {
    const {
      "onUpdate:sorter": h,
      onUpdateSorter: p,
      onSorterChange: x
    } = e;
    h && ne(h, m), p && ne(p, m), x && ne(x, m), i.value = m;
  }
  function c(m, h = "ascend") {
    if (!m)
      v();
    else {
      const p = t.value.find((b) => b.type !== "selection" && b.type !== "expand" && b.key === m);
      if (!(p != null && p.sorter)) return;
      const x = p.sorter;
      d({
        columnKey: m,
        sorter: x,
        order: h
      });
    }
  }
  function v() {
    u(null);
  }
  function g(m, h) {
    const p = m.findIndex((x) => (h == null ? void 0 : h.columnKey) && x.columnKey === h.columnKey);
    p !== void 0 && p >= 0 ? m[p] = h : m.push(h);
  }
  return {
    clearSorter: v,
    sort: c,
    sortedDataRef: l,
    mergedSortStateRef: a,
    deriveNextSorter: d
  };
}
function rw(e, {
  dataRelatedColsRef: t
}) {
  const r = A(() => {
    const K = (j) => {
      for (let q = 0; q < j.length; ++q) {
        const Y = j[q];
        if ("children" in Y)
          return K(Y.children);
        if (Y.type === "selection")
          return Y;
      }
      return null;
    };
    return K(e.columns);
  }), o = A(() => {
    const {
      childrenKey: K
    } = e;
    return Ci(e.data, {
      ignoreEmptyChildren: !0,
      getKey: e.rowKey,
      getChildren: (j) => j[K],
      getDisabled: (j) => {
        var q, Y;
        return !!(!((Y = (q = r.value) === null || q === void 0 ? void 0 : q.disabled) === null || Y === void 0) && Y.call(q, j));
      }
    });
  }), i = qe(() => {
    const {
      columns: K
    } = e, {
      length: j
    } = K;
    let q = null;
    for (let Y = 0; Y < j; ++Y) {
      const ae = K[Y];
      if (!ae.type && q === null && (q = Y), "tree" in ae && ae.tree)
        return Y;
    }
    return q || 0;
  }), a = I({}), {
    pagination: l
  } = e, s = I(l && l.defaultPage || 1), d = I(dc(l)), u = A(() => {
    const K = t.value.filter((Y) => Y.filterOptionValues !== void 0 || Y.filterOptionValue !== void 0), j = {};
    return K.forEach((Y) => {
      var ae;
      Y.type === "selection" || Y.type === "expand" || (Y.filterOptionValues === void 0 ? j[Y.key] = (ae = Y.filterOptionValue) !== null && ae !== void 0 ? ae : null : j[Y.key] = Y.filterOptionValues);
    }), Object.assign(sd(a.value), j);
  }), c = A(() => {
    const K = u.value, {
      columns: j
    } = e;
    function q(le) {
      return (ce, be) => !!~String(be[le]).indexOf(String(ce));
    }
    const {
      value: {
        treeNodes: Y
      }
    } = o, ae = [];
    return j.forEach((le) => {
      le.type === "selection" || le.type === "expand" || "children" in le || ae.push([le.key, le]);
    }), Y ? Y.filter((le) => {
      const {
        rawNode: ce
      } = le;
      for (const [be, G] of ae) {
        let ue = K[be];
        if (ue == null || (Array.isArray(ue) || (ue = [ue]), !ue.length)) continue;
        const Fe = G.filter === "default" ? q(be) : G.filter;
        if (G && typeof Fe == "function")
          if (G.filterMode === "and") {
            if (ue.some((xe) => !Fe(xe, ce)))
              return !1;
          } else {
            if (ue.some((xe) => Fe(xe, ce)))
              continue;
            return !1;
          }
      }
      return !0;
    }) : [];
  }), {
    sortedDataRef: v,
    deriveNextSorter: g,
    mergedSortStateRef: m,
    sort: h,
    clearSorter: p
  } = nw(e, {
    dataRelatedColsRef: t,
    filteredDataRef: c
  });
  t.value.forEach((K) => {
    var j;
    if (K.filter) {
      const q = K.defaultFilterOptionValues;
      K.filterMultiple ? a.value[K.key] = q || [] : q !== void 0 ? a.value[K.key] = q === null ? [] : q : a.value[K.key] = (j = K.defaultFilterOptionValue) !== null && j !== void 0 ? j : null;
    }
  });
  const x = A(() => {
    const {
      pagination: K
    } = e;
    if (K !== !1)
      return K.page;
  }), b = A(() => {
    const {
      pagination: K
    } = e;
    if (K !== !1)
      return K.pageSize;
  }), y = Pt(x, s), k = Pt(b, d), w = qe(() => {
    const K = y.value;
    return e.remote ? K : Math.max(1, Math.min(Math.ceil(c.value.length / k.value), K));
  }), R = A(() => {
    const {
      pagination: K
    } = e;
    if (K) {
      const {
        pageCount: j
      } = K;
      if (j !== void 0) return j;
    }
  }), B = A(() => {
    if (e.remote) return o.value.treeNodes;
    if (!e.pagination) return v.value;
    const K = k.value, j = (w.value - 1) * K;
    return v.value.slice(j, j + K);
  }), C = A(() => B.value.map((K) => K.rawNode));
  function S(K) {
    const {
      pagination: j
    } = e;
    if (j) {
      const {
        onChange: q,
        "onUpdate:page": Y,
        onUpdatePage: ae
      } = j;
      q && ne(q, K), ae && ne(ae, K), Y && ne(Y, K), O(K);
    }
  }
  function F(K) {
    const {
      pagination: j
    } = e;
    if (j) {
      const {
        onPageSizeChange: q,
        "onUpdate:pageSize": Y,
        onUpdatePageSize: ae
      } = j;
      q && ne(q, K), ae && ne(ae, K), Y && ne(Y, K), n(K);
    }
  }
  const P = A(() => {
    if (e.remote) {
      const {
        pagination: K
      } = e;
      if (K) {
        const {
          itemCount: j
        } = K;
        if (j !== void 0) return j;
      }
      return;
    }
    return c.value.length;
  }), _ = A(() => Object.assign(Object.assign({}, e.pagination), {
    // reset deprecated methods
    onChange: void 0,
    onUpdatePage: void 0,
    onUpdatePageSize: void 0,
    onPageSizeChange: void 0,
    "onUpdate:page": S,
    "onUpdate:pageSize": F,
    // writing merged props after pagination to avoid
    // pagination[key] === undefined
    // key still exists but value is undefined
    page: w.value,
    pageSize: k.value,
    pageCount: P.value === void 0 ? R.value : void 0,
    itemCount: P.value
  }));
  function O(K) {
    const {
      "onUpdate:page": j,
      onPageChange: q,
      onUpdatePage: Y
    } = e;
    Y && ne(Y, K), j && ne(j, K), q && ne(q, K), s.value = K;
  }
  function n(K) {
    const {
      "onUpdate:pageSize": j,
      onPageSizeChange: q,
      onUpdatePageSize: Y
    } = e;
    q && ne(q, K), Y && ne(Y, K), j && ne(j, K), d.value = K;
  }
  function E(K, j) {
    const {
      onUpdateFilters: q,
      "onUpdate:filters": Y,
      onFiltersChange: ae
    } = e;
    q && ne(q, K, j), Y && ne(Y, K, j), ae && ne(ae, K, j), a.value = K;
  }
  function T(K, j, q, Y) {
    var ae;
    (ae = e.onUnstableColumnResize) === null || ae === void 0 || ae.call(e, K, j, q, Y);
  }
  function H(K) {
    O(K);
  }
  function L() {
    U();
  }
  function U() {
    te({});
  }
  function te(K) {
    X(K);
  }
  function X(K) {
    K ? K ? a.value = sd(K) : process.env.NODE_ENV !== "production" && zt("data-table", "`filters` is not an object") : a.value = {};
  }
  return {
    treeMateRef: o,
    mergedCurrentPageRef: w,
    mergedPaginationRef: _,
    paginatedDataRef: B,
    rawPaginatedDataRef: C,
    mergedFilterStateRef: u,
    mergedSortStateRef: m,
    hoverKeyRef: I(null),
    selectionColumnRef: r,
    childTriggerColIndexRef: i,
    doUpdateFilters: E,
    deriveNextSorter: g,
    doUpdatePageSize: n,
    doUpdatePage: O,
    onUnstableColumnResize: T,
    // exported methods
    filter: X,
    filters: te,
    clearFilter: L,
    clearFilters: U,
    clearSorter: p,
    page: H,
    sort: h
  };
}
const ow = J({
  name: "DataTable",
  alias: ["AdvancedTable"],
  props: Zy,
  slots: Object,
  setup(e, {
    slots: t
  }) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.onPageChange !== void 0 && Qe("data-table", "`on-page-change` is deprecated, please use `on-update:page` instead."), e.onPageSizeChange !== void 0 && Qe("data-table", "`on-page-size-change` is deprecated, please use `on-update:page-size` instead."), e.onSorterChange !== void 0 && Qe("data-table", "`on-sorter-change` is deprecated, please use `on-update:sorter` instead."), e.onFiltersChange !== void 0 && Qe("data-table", "`on-filters-change` is deprecated, please use `on-update:filters` instead."), e.onCheckedRowKeysChange !== void 0 && Qe("data-table", "`on-checked-row-keys-change` is deprecated, please use `on-update:checked-row-keys` instead.");
    });
    const {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = Ft("DataTable", a, o), s = A(() => {
      const {
        bottomBordered: $
      } = e;
      return r.value ? !1 : $ !== void 0 ? $ : !0;
    }), d = ve("DataTable", "-data-table", KC, Yy, e, o), u = I(null), c = I(null), {
      getResizableWidth: v,
      clearResizableWidth: g,
      doUpdateResizableWidth: m
    } = JC(), {
      rowsRef: h,
      colsRef: p,
      dataRelatedColsRef: x,
      hasEllipsisRef: b
    } = ZC(e, v), {
      treeMateRef: y,
      mergedCurrentPageRef: k,
      paginatedDataRef: w,
      rawPaginatedDataRef: R,
      selectionColumnRef: B,
      hoverKeyRef: C,
      mergedPaginationRef: S,
      mergedFilterStateRef: F,
      mergedSortStateRef: P,
      childTriggerColIndexRef: _,
      doUpdatePage: O,
      doUpdateFilters: n,
      onUnstableColumnResize: E,
      deriveNextSorter: T,
      filter: H,
      filters: L,
      clearFilter: U,
      clearFilters: te,
      clearSorter: X,
      page: K,
      sort: j
    } = rw(e, {
      dataRelatedColsRef: x
    }), q = ($) => {
      const {
        fileName: V = "data.csv",
        keepOriginalData: Q = !1
      } = $ || {}, se = Q ? e.data : R.value, de = iC(e.columns, se, e.getCsvCell, e.getCsvHeader), ge = new Blob([de], {
        type: "text/csv;charset=utf-8"
      }), me = URL.createObjectURL(ge);
      w0(me, V.endsWith(".csv") ? V : `${V}.csv`), URL.revokeObjectURL(me);
    }, {
      doCheckAll: Y,
      doUncheckAll: ae,
      doCheck: le,
      doUncheck: ce,
      headerCheckboxDisabledRef: be,
      someRowsCheckedRef: G,
      allRowsCheckedRef: ue,
      mergedCheckedRowKeySetRef: Fe,
      mergedInderminateRowKeySetRef: xe
    } = GC(e, {
      selectionColumnRef: B,
      treeMateRef: y,
      paginatedDataRef: w
    }), {
      stickyExpandedRowsRef: Pe,
      mergedExpandedRowKeysRef: ze,
      renderExpandRef: dt,
      expandableRef: rt,
      doUpdateExpandedRowKeys: ft
    } = XC(e, y), {
      handleTableBodyScroll: ht,
      handleTableHeaderScroll: ye,
      syncScrollState: Ce,
      setHeaderScrollLeft: De,
      leftActiveFixedColKeyRef: Le,
      leftActiveFixedChildrenColKeysRef: et,
      rightActiveFixedColKeyRef: oe,
      rightActiveFixedChildrenColKeysRef: he,
      leftFixedColumnsRef: Te,
      rightFixedColumnsRef: ut,
      fixedColumnLeftMapRef: At,
      fixedColumnRightMapRef: Dt
    } = QC(e, {
      bodyWidthRef: u,
      mainTableInstRef: c,
      mergedCurrentPageRef: k
    }), {
      localeRef: bt
    } = lr("DataTable"), it = A(() => e.virtualScroll || e.flexHeight || e.maxHeight !== void 0 || b.value ? "fixed" : e.tableLayout);
    $e(fn, {
      props: e,
      treeMateRef: y,
      renderExpandIconRef: ie(e, "renderExpandIcon"),
      loadingKeySetRef: I(/* @__PURE__ */ new Set()),
      slots: t,
      indentRef: ie(e, "indent"),
      childTriggerColIndexRef: _,
      bodyWidthRef: u,
      componentId: xn(),
      hoverKeyRef: C,
      mergedClsPrefixRef: o,
      mergedThemeRef: d,
      scrollXRef: A(() => e.scrollX),
      rowsRef: h,
      colsRef: p,
      paginatedDataRef: w,
      leftActiveFixedColKeyRef: Le,
      leftActiveFixedChildrenColKeysRef: et,
      rightActiveFixedColKeyRef: oe,
      rightActiveFixedChildrenColKeysRef: he,
      leftFixedColumnsRef: Te,
      rightFixedColumnsRef: ut,
      fixedColumnLeftMapRef: At,
      fixedColumnRightMapRef: Dt,
      mergedCurrentPageRef: k,
      someRowsCheckedRef: G,
      allRowsCheckedRef: ue,
      mergedSortStateRef: P,
      mergedFilterStateRef: F,
      loadingRef: ie(e, "loading"),
      rowClassNameRef: ie(e, "rowClassName"),
      mergedCheckedRowKeySetRef: Fe,
      mergedExpandedRowKeysRef: ze,
      mergedInderminateRowKeySetRef: xe,
      localeRef: bt,
      expandableRef: rt,
      stickyExpandedRowsRef: Pe,
      rowKeyRef: ie(e, "rowKey"),
      renderExpandRef: dt,
      summaryRef: ie(e, "summary"),
      virtualScrollRef: ie(e, "virtualScroll"),
      virtualScrollXRef: ie(e, "virtualScrollX"),
      heightForRowRef: ie(e, "heightForRow"),
      minRowHeightRef: ie(e, "minRowHeight"),
      virtualScrollHeaderRef: ie(e, "virtualScrollHeader"),
      headerHeightRef: ie(e, "headerHeight"),
      rowPropsRef: ie(e, "rowProps"),
      stripedRef: ie(e, "striped"),
      checkOptionsRef: A(() => {
        const {
          value: $
        } = B;
        return $ == null ? void 0 : $.options;
      }),
      rawPaginatedDataRef: R,
      filterMenuCssVarsRef: A(() => {
        const {
          self: {
            actionDividerColor: $,
            actionPadding: V,
            actionButtonMargin: Q
          }
        } = d.value;
        return {
          "--n-action-padding": V,
          "--n-action-button-margin": Q,
          "--n-action-divider-color": $
        };
      }),
      onLoadRef: ie(e, "onLoad"),
      mergedTableLayoutRef: it,
      maxHeightRef: ie(e, "maxHeight"),
      minHeightRef: ie(e, "minHeight"),
      flexHeightRef: ie(e, "flexHeight"),
      headerCheckboxDisabledRef: be,
      paginationBehaviorOnFilterRef: ie(e, "paginationBehaviorOnFilter"),
      summaryPlacementRef: ie(e, "summaryPlacement"),
      filterIconPopoverPropsRef: ie(e, "filterIconPopoverProps"),
      scrollbarPropsRef: ie(e, "scrollbarProps"),
      syncScrollState: Ce,
      doUpdatePage: O,
      doUpdateFilters: n,
      getResizableWidth: v,
      onUnstableColumnResize: E,
      clearResizableWidth: g,
      doUpdateResizableWidth: m,
      deriveNextSorter: T,
      doCheck: le,
      doUncheck: ce,
      doCheckAll: Y,
      doUncheckAll: ae,
      doUpdateExpandedRowKeys: ft,
      handleTableHeaderScroll: ye,
      handleTableBodyScroll: ht,
      setHeaderScrollLeft: De,
      renderCell: ie(e, "renderCell")
    });
    const wt = {
      filter: H,
      filters: L,
      clearFilters: te,
      clearSorter: X,
      page: K,
      sort: j,
      clearFilter: U,
      downloadCsv: q,
      scrollTo: ($, V) => {
        var Q;
        (Q = c.value) === null || Q === void 0 || Q.scrollTo($, V);
      }
    }, ot = A(() => {
      const {
        size: $
      } = e, {
        common: {
          cubicBezierEaseInOut: V
        },
        self: {
          borderColor: Q,
          tdColorHover: se,
          tdColorSorting: de,
          tdColorSortingModal: ge,
          tdColorSortingPopover: me,
          thColorSorting: Se,
          thColorSortingModal: Ne,
          thColorSortingPopover: at,
          thColor: Ue,
          thColorHover: Ot,
          tdColor: jt,
          tdTextColor: _t,
          thTextColor: Ut,
          thFontWeight: Kt,
          thButtonColorHover: rn,
          thIconColor: qt,
          thIconColorActive: W,
          filterSize: ee,
          borderRadius: we,
          lineHeight: Oe,
          tdColorModal: Ge,
          thColorModal: He,
          borderColorModal: lt,
          thColorHoverModal: vt,
          tdColorHoverModal: Jt,
          borderColorPopover: wn,
          thColorPopover: Sn,
          tdColorPopover: Yn,
          tdColorHoverPopover: Kr,
          thColorHoverPopover: qr,
          paginationMargin: Gr,
          emptyPadding: Xr,
          boxShadowAfter: Yr,
          boxShadowBefore: Dn,
          sorterSize: En,
          resizableContainerSize: Pi,
          resizableSize: zi,
          loadingColor: $i,
          loadingSize: Ai,
          opacityLoading: Di,
          tdColorStriped: Ei,
          tdColorStripedModal: Ti,
          tdColorStripedPopover: Oi,
          [Z("fontSize", $)]: Mi,
          [Z("thPadding", $)]: Ii,
          [Z("tdPadding", $)]: Li
        }
      } = d.value;
      return {
        "--n-font-size": Mi,
        "--n-th-padding": Ii,
        "--n-td-padding": Li,
        "--n-bezier": V,
        "--n-border-radius": we,
        "--n-line-height": Oe,
        "--n-border-color": Q,
        "--n-border-color-modal": lt,
        "--n-border-color-popover": wn,
        "--n-th-color": Ue,
        "--n-th-color-hover": Ot,
        "--n-th-color-modal": He,
        "--n-th-color-hover-modal": vt,
        "--n-th-color-popover": Sn,
        "--n-th-color-hover-popover": qr,
        "--n-td-color": jt,
        "--n-td-color-hover": se,
        "--n-td-color-modal": Ge,
        "--n-td-color-hover-modal": Jt,
        "--n-td-color-popover": Yn,
        "--n-td-color-hover-popover": Kr,
        "--n-th-text-color": Ut,
        "--n-td-text-color": _t,
        "--n-th-font-weight": Kt,
        "--n-th-button-color-hover": rn,
        "--n-th-icon-color": qt,
        "--n-th-icon-color-active": W,
        "--n-filter-size": ee,
        "--n-pagination-margin": Gr,
        "--n-empty-padding": Xr,
        "--n-box-shadow-before": Dn,
        "--n-box-shadow-after": Yr,
        "--n-sorter-size": En,
        "--n-resizable-container-size": Pi,
        "--n-resizable-size": zi,
        "--n-loading-size": Ai,
        "--n-loading-color": $i,
        "--n-opacity-loading": Di,
        "--n-td-color-striped": Ei,
        "--n-td-color-striped-modal": Ti,
        "--n-td-color-striped-popover": Oi,
        "--n-td-color-sorting": de,
        "--n-td-color-sorting-modal": ge,
        "--n-td-color-sorting-popover": me,
        "--n-th-color-sorting": Se,
        "--n-th-color-sorting-modal": Ne,
        "--n-th-color-sorting-popover": at
      };
    }), fe = i ? Ye("data-table", A(() => e.size[0]), ot, e) : void 0, Be = A(() => {
      if (!e.pagination) return !1;
      if (e.paginateSinglePage) return !0;
      const $ = S.value, {
        pageCount: V
      } = $;
      return V !== void 0 ? V > 1 : $.itemCount && $.pageSize && $.itemCount > $.pageSize;
    });
    return Object.assign({
      mainTableInstRef: c,
      mergedClsPrefix: o,
      rtlEnabled: l,
      mergedTheme: d,
      paginatedData: w,
      mergedBordered: r,
      mergedBottomBordered: s,
      mergedPagination: S,
      mergedShowPagination: Be,
      cssVars: i ? void 0 : ot,
      themeClass: fe == null ? void 0 : fe.themeClass,
      onRender: fe == null ? void 0 : fe.onRender
    }, wt);
  },
  render() {
    const {
      mergedClsPrefix: e,
      themeClass: t,
      onRender: r,
      $slots: o,
      spinProps: i
    } = this;
    return r == null || r(), f("div", {
      class: [`${e}-data-table`, this.rtlEnabled && `${e}-data-table--rtl`, t, {
        [`${e}-data-table--bordered`]: this.mergedBordered,
        [`${e}-data-table--bottom-bordered`]: this.mergedBottomBordered,
        [`${e}-data-table--single-line`]: this.singleLine,
        [`${e}-data-table--single-column`]: this.singleColumn,
        [`${e}-data-table--loading`]: this.loading,
        [`${e}-data-table--flex-height`]: this.flexHeight
      }],
      style: this.cssVars
    }, f("div", {
      class: `${e}-data-table-wrapper`
    }, f(UC, {
      ref: "mainTableInstRef"
    })), this.mergedShowPagination ? f("div", {
      class: `${e}-data-table__pagination`
    }, f(uc, Object.assign({
      theme: this.mergedTheme.peers.Pagination,
      themeOverrides: this.mergedTheme.peerOverrides.Pagination,
      disabled: this.loading
    }, this.mergedPagination))) : null, f(Tt, {
      name: "fade-in-scale-up-transition"
    }, {
      default: () => this.loading ? f("div", {
        class: `${e}-data-table-loading-wrapper`
      }, tn(o.loading, () => [f(Gn, Object.assign({
        clsPrefix: e,
        strokeWidth: 20
      }, i))])) : null
    }));
  }
}), Ac = "n-dialog-provider", Dc = "n-dialog-api", iw = "n-dialog-reactive-list";
function Ec() {
  const e = pe(Dc, null);
  return e === null && Pn("use-dialog", "No outer <n-dialog-provider /> founded."), e;
}
const aw = {
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
function lw(e) {
  const {
    textColor1: t,
    textColor2: r,
    modalColor: o,
    closeIconColor: i,
    closeIconColorHover: a,
    closeIconColorPressed: l,
    closeColorHover: s,
    closeColorPressed: d,
    infoColor: u,
    successColor: c,
    warningColor: v,
    errorColor: g,
    primaryColor: m,
    dividerColor: h,
    borderRadius: p,
    fontWeightStrong: x,
    lineHeight: b,
    fontSize: y
  } = e;
  return Object.assign(Object.assign({}, aw), {
    fontSize: y,
    lineHeight: b,
    border: `1px solid ${h}`,
    titleTextColor: t,
    textColor: r,
    color: o,
    closeColorHover: s,
    closeColorPressed: d,
    closeIconColor: i,
    closeIconColorHover: a,
    closeIconColorPressed: l,
    closeBorderRadius: p,
    iconColor: m,
    iconColorInfo: u,
    iconColorSuccess: c,
    iconColorWarning: v,
    iconColorError: g,
    borderRadius: p,
    titleFontWeight: x
  });
}
const Tc = {
  name: "Dialog",
  common: Ze,
  peers: {
    Button: wi
  },
  self: lw
}, Ri = {
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
}, Oc = _n(Ri), sw = D([z("dialog", `
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
 `, [M("icon", {
  color: "var(--n-icon-color)"
}), N("bordered", {
  border: "var(--n-border)"
}), N("icon-top", [M("close", {
  margin: "var(--n-close-margin)"
}), M("icon", {
  margin: "var(--n-icon-margin)"
}), M("content", {
  textAlign: "center"
}), M("title", {
  justifyContent: "center"
}), M("action", {
  justifyContent: "center"
})]), N("icon-left", [M("icon", {
  margin: "var(--n-icon-margin)"
}), N("closable", [M("title", `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), M("close", `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), M("content", `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [N("last", "margin-bottom: 0;")]), M("action", `
 display: flex;
 justify-content: flex-end;
 `, [D("> *:not(:last-child)", `
 margin-right: var(--n-action-space);
 `)]), M("icon", `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), M("title", `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), z("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), gi(z("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), z("dialog", [Td(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), dw = {
  default: () => f(li, null),
  info: () => f(li, null),
  success: () => f(ml, null),
  warning: () => f(yi, null),
  error: () => f(pl, null)
}, Mc = J({
  name: "Dialog",
  alias: [
    "NimbusConfirmCard",
    // deprecated
    "Confirm"
    // deprecated
  ],
  props: Object.assign(Object.assign({}, ve.props), Ri),
  slots: Object,
  setup(e) {
    const {
      mergedComponentPropsRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = Ft("Dialog", i, r), l = A(() => {
      var m, h;
      const {
        iconPlacement: p
      } = e;
      return p || ((h = (m = t == null ? void 0 : t.value) === null || m === void 0 ? void 0 : m.Dialog) === null || h === void 0 ? void 0 : h.iconPlacement) || "left";
    });
    function s(m) {
      const {
        onPositiveClick: h
      } = e;
      h && h(m);
    }
    function d(m) {
      const {
        onNegativeClick: h
      } = e;
      h && h(m);
    }
    function u() {
      const {
        onClose: m
      } = e;
      m && m();
    }
    const c = ve("Dialog", "-dialog", sw, Tc, e, r), v = A(() => {
      const {
        type: m
      } = e, h = l.value, {
        common: {
          cubicBezierEaseInOut: p
        },
        self: {
          fontSize: x,
          lineHeight: b,
          border: y,
          titleTextColor: k,
          textColor: w,
          color: R,
          closeBorderRadius: B,
          closeColorHover: C,
          closeColorPressed: S,
          closeIconColor: F,
          closeIconColorHover: P,
          closeIconColorPressed: _,
          closeIconSize: O,
          borderRadius: n,
          titleFontWeight: E,
          titleFontSize: T,
          padding: H,
          iconSize: L,
          actionSpace: U,
          contentMargin: te,
          closeSize: X,
          [h === "top" ? "iconMarginIconTop" : "iconMargin"]: K,
          [h === "top" ? "closeMarginIconTop" : "closeMargin"]: j,
          [Z("iconColor", m)]: q
        }
      } = c.value, Y = Wt(K);
      return {
        "--n-font-size": x,
        "--n-icon-color": q,
        "--n-bezier": p,
        "--n-close-margin": j,
        "--n-icon-margin-top": Y.top,
        "--n-icon-margin-right": Y.right,
        "--n-icon-margin-bottom": Y.bottom,
        "--n-icon-margin-left": Y.left,
        "--n-icon-size": L,
        "--n-close-size": X,
        "--n-close-icon-size": O,
        "--n-close-border-radius": B,
        "--n-close-color-hover": C,
        "--n-close-color-pressed": S,
        "--n-close-icon-color": F,
        "--n-close-icon-color-hover": P,
        "--n-close-icon-color-pressed": _,
        "--n-color": R,
        "--n-text-color": w,
        "--n-border-radius": n,
        "--n-padding": H,
        "--n-line-height": b,
        "--n-border": y,
        "--n-content-margin": te,
        "--n-title-font-size": T,
        "--n-title-font-weight": E,
        "--n-title-text-color": k,
        "--n-action-space": U
      };
    }), g = o ? Ye("dialog", A(() => `${e.type[0]}${l.value[0]}`), v, e) : void 0;
    return {
      mergedClsPrefix: r,
      rtlEnabled: a,
      mergedIconPlacement: l,
      mergedTheme: c,
      handlePositiveClick: s,
      handleNegativeClick: d,
      handleCloseClick: u,
      cssVars: o ? void 0 : v,
      themeClass: g == null ? void 0 : g.themeClass,
      onRender: g == null ? void 0 : g.onRender
    };
  },
  render() {
    var e;
    const {
      bordered: t,
      mergedIconPlacement: r,
      cssVars: o,
      closable: i,
      showIcon: a,
      title: l,
      content: s,
      action: d,
      negativeText: u,
      positiveText: c,
      positiveButtonProps: v,
      negativeButtonProps: g,
      handlePositiveClick: m,
      handleNegativeClick: h,
      mergedTheme: p,
      loading: x,
      type: b,
      mergedClsPrefix: y
    } = this;
    (e = this.onRender) === null || e === void 0 || e.call(this);
    const k = a ? f(yt, {
      clsPrefix: y,
      class: `${y}-dialog__icon`
    }, {
      default: () => We(this.$slots.icon, (R) => R || (this.icon ? gt(this.icon) : dw[this.type]()))
    }) : null, w = We(this.$slots.action, (R) => R || c || u || d ? f("div", {
      class: [`${y}-dialog__action`, this.actionClass],
      style: this.actionStyle
    }, R || (d ? [gt(d)] : [this.negativeText && f(dr, Object.assign({
      theme: p.peers.Button,
      themeOverrides: p.peerOverrides.Button,
      ghost: !0,
      size: "small",
      onClick: h
    }, g), {
      default: () => gt(this.negativeText)
    }), this.positiveText && f(dr, Object.assign({
      theme: p.peers.Button,
      themeOverrides: p.peerOverrides.Button,
      size: "small",
      type: b === "default" ? "primary" : b,
      disabled: x,
      loading: x,
      onClick: m
    }, v), {
      default: () => gt(this.positiveText)
    })])) : null);
    return f("div", {
      class: [`${y}-dialog`, this.themeClass, this.closable && `${y}-dialog--closable`, `${y}-dialog--icon-${r}`, t && `${y}-dialog--bordered`, this.rtlEnabled && `${y}-dialog--rtl`],
      style: o,
      role: "dialog"
    }, i ? We(this.$slots.close, (R) => {
      const B = [`${y}-dialog__close`, this.rtlEnabled && `${y}-dialog--rtl`];
      return R ? f("div", {
        class: B
      }, R) : f(Vr, {
        clsPrefix: y,
        class: B,
        onClick: this.handleCloseClick
      });
    }) : null, a && r === "top" ? f("div", {
      class: `${y}-dialog-icon-container`
    }, k) : null, f("div", {
      class: [`${y}-dialog__title`, this.titleClass],
      style: this.titleStyle
    }, a && r === "left" ? k : null, tn(this.$slots.header, () => [gt(l)])), f("div", {
      class: [`${y}-dialog__content`, w ? "" : `${y}-dialog__content--last`, this.contentClass],
      style: this.contentStyle
    }, tn(this.$slots.default, () => [gt(s)])), w);
  }
});
function uw(e) {
  const {
    modalColor: t,
    textColor2: r,
    boxShadow3: o
  } = e;
  return {
    color: t,
    textColor: r,
    boxShadow: o
  };
}
const cw = {
  name: "Modal",
  common: Ze,
  peers: {
    Scrollbar: Ur,
    Dialog: Tc,
    Card: Qu
  },
  self: uw
}, fw = "n-modal-provider", Ic = "n-modal-api", hw = "n-modal-reactive-list";
function Lc() {
  const e = pe(Ic, null);
  return e === null && Pn("use-modal", "No outer <n-modal-provider /> founded."), e;
}
const za = "n-draggable";
function vw(e, t) {
  let r;
  const o = A(() => e.value !== !1), i = A(() => o.value ? za : ""), a = A(() => {
    const d = e.value;
    return d === !0 || d === !1 ? !0 : d ? d.bounds !== "none" : !0;
  });
  function l(d) {
    const u = d.querySelector(`.${za}`);
    if (!u || !i.value)
      return;
    let c = 0, v = 0, g = 0, m = 0, h = 0, p = 0, x;
    function b(w) {
      w.preventDefault(), x = w;
      const {
        x: R,
        y: B,
        right: C,
        bottom: S
      } = d.getBoundingClientRect();
      v = R, m = B, c = window.innerWidth - C, g = window.innerHeight - S;
      const {
        left: F,
        top: P
      } = d.style;
      h = +P.slice(0, -2), p = +F.slice(0, -2);
    }
    function y(w) {
      if (!x) return;
      const {
        clientX: R,
        clientY: B
      } = x;
      let C = w.clientX - R, S = w.clientY - B;
      a.value && (C > c ? C = c : -C > v && (C = -v), S > g ? S = g : -S > m && (S = -m));
      const F = C + p, P = S + h;
      d.style.top = `${P}px`, d.style.left = `${F}px`;
    }
    function k() {
      x = void 0, t.onEnd(d);
    }
    Ke("mousedown", u, b), Ke("mousemove", window, y), Ke("mouseup", window, k), r = () => {
      Ve("mousedown", u, b), Ke("mousemove", window, y), Ke("mouseup", window, k);
    };
  }
  function s() {
    r && (r(), r = void 0);
  }
  return Fd(s), {
    stopDrag: s,
    startDrag: l,
    draggableRef: o,
    draggableClassRef: i
  };
}
const zl = Object.assign(Object.assign({}, Sl), Ri), gw = _n(zl), pw = J({
  name: "ModalBody",
  inheritAttrs: !1,
  slots: Object,
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
    blockScroll: Boolean,
    draggable: {
      type: [Boolean, Object],
      default: !1
    }
  }, zl), {
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
    const t = I(null), r = I(null), o = I(e.show), i = I(null), a = I(null), l = pe(Nd);
    let s = null;
    Ie(ie(e, "show"), (S) => {
      S && (s = l.getMousePosition());
    }, {
      immediate: !0
    });
    const {
      stopDrag: d,
      startDrag: u,
      draggableRef: c,
      draggableClassRef: v
    } = vw(ie(e, "draggable"), {
      onEnd: (S) => {
        p(S);
      }
    }), g = A(() => Nt([e.titleClass, v.value])), m = A(() => Nt([e.headerClass, v.value]));
    Ie(ie(e, "show"), (S) => {
      S && (o.value = !0);
    }), _d(A(() => e.blockScroll && o.value));
    function h() {
      if (l.transformOriginRef.value === "center")
        return "";
      const {
        value: S
      } = i, {
        value: F
      } = a;
      if (S === null || F === null)
        return "";
      if (r.value) {
        const P = r.value.containerScrollTop;
        return `${S}px ${F + P}px`;
      }
      return "";
    }
    function p(S) {
      if (l.transformOriginRef.value === "center" || !s || !r.value) return;
      const F = r.value.containerScrollTop, {
        offsetLeft: P,
        offsetTop: _
      } = S, O = s.y, n = s.x;
      i.value = -(P - n), a.value = -(_ - O - F), S.style.transformOrigin = h();
    }
    function x(S) {
      pt(() => {
        p(S);
      });
    }
    function b(S) {
      S.style.transformOrigin = h(), e.onBeforeLeave();
    }
    function y(S) {
      const F = S;
      c.value && u(F), e.onAfterEnter && e.onAfterEnter(F);
    }
    function k() {
      o.value = !1, i.value = null, a.value = null, d(), e.onAfterLeave();
    }
    function w() {
      const {
        onClose: S
      } = e;
      S && S();
    }
    function R() {
      e.onNegativeClick();
    }
    function B() {
      e.onPositiveClick();
    }
    const C = I(null);
    return Ie(C, (S) => {
      S && pt(() => {
        const F = S.el;
        F && t.value !== F && (t.value = F);
      });
    }), $e(Ro, t), $e(ko, null), $e(Hr, null), {
      mergedTheme: l.mergedThemeRef,
      appear: l.appearRef,
      isMounted: l.isMountedRef,
      mergedClsPrefix: l.mergedClsPrefixRef,
      bodyRef: t,
      scrollbarRef: r,
      draggableClass: v,
      displayed: o,
      childNodeRef: C,
      cardHeaderClass: m,
      dialogTitleClass: g,
      handlePositiveClick: B,
      handleNegativeClick: R,
      handleCloseClick: w,
      handleAfterEnter: y,
      handleAfterLeave: k,
      handleBeforeLeave: b,
      handleEnter: x
    };
  },
  render() {
    const {
      $slots: e,
      $attrs: t,
      handleEnter: r,
      handleAfterEnter: o,
      handleAfterLeave: i,
      handleBeforeLeave: a,
      preset: l,
      mergedClsPrefix: s
    } = this;
    let d = null;
    if (!l) {
      if (d = R0("default", e.default, {
        draggableClass: this.draggableClass
      }), !d) {
        zt("modal", "default slot is empty");
        return;
      }
      d = Rd(d), d.props = kt({
        class: `${s}-modal`
      }, t, d.props || {});
    }
    return this.displayDirective === "show" || this.displayed || this.show ? nn(f("div", {
      role: "none",
      class: `${s}-modal-body-wrapper`
    }, f(An, {
      ref: "scrollbarRef",
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      contentClass: `${s}-modal-scroll-content`
    }, {
      default: () => {
        var u;
        return [(u = this.renderMask) === null || u === void 0 ? void 0 : u.call(this), f(nl, {
          disabled: !this.trapFocus,
          active: this.show,
          onEsc: this.onEsc,
          autoFocus: this.autoFocus
        }, {
          default: () => {
            var c;
            return f(Tt, {
              name: "fade-in-scale-up-transition",
              appear: (c = this.appear) !== null && c !== void 0 ? c : this.isMounted,
              onEnter: r,
              onAfterEnter: o,
              onAfterLeave: i,
              onBeforeLeave: a
            }, {
              default: () => {
                const v = [[jn, this.show]], {
                  onClickoutside: g
                } = this;
                return g && v.push([Er, this.onClickoutside, void 0, {
                  capture: !0
                }]), nn(this.preset === "confirm" || this.preset === "dialog" ? f(Mc, Object.assign({}, this.$attrs, {
                  class: [`${s}-modal`, this.$attrs.class],
                  ref: "bodyRef",
                  theme: this.mergedTheme.peers.Dialog,
                  themeOverrides: this.mergedTheme.peerOverrides.Dialog
                }, Rn(this.$props, Oc), {
                  titleClass: this.dialogTitleClass,
                  "aria-modal": "true"
                }), e) : this.preset === "card" ? f(fy, Object.assign({}, this.$attrs, {
                  ref: "bodyRef",
                  class: [`${s}-modal`, this.$attrs.class],
                  theme: this.mergedTheme.peers.Card,
                  themeOverrides: this.mergedTheme.peerOverrides.Card
                }, Rn(this.$props, uy), {
                  headerClass: this.cardHeaderClass,
                  "aria-modal": "true",
                  role: "dialog"
                }), e) : this.childNodeRef = d, v);
              }
            });
          }
        })];
      }
    })), [[jn, this.displayDirective === "if" || this.displayed || this.show]]) : null;
  }
}), mw = D([z("modal-container", `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), z("modal-mask", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [Po({
  enterDuration: ".25s",
  leaveDuration: ".25s",
  enterCubicBezier: "var(--n-bezier-ease-out)",
  leaveCubicBezier: "var(--n-bezier-ease-out)"
})]), z("modal-body-wrapper", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [z("modal-scroll-content", `
 min-height: 100%;
 display: flex;
 position: relative;
 `)]), z("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [zo({
  duration: ".25s",
  enterScale: ".5"
}), D(`.${za}`, `
 cursor: move;
 user-select: none;
 `)])]), Nc = Object.assign(Object.assign(Object.assign(Object.assign({}, ve.props), {
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
}), zl), {
  draggable: [Boolean, Object],
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
}), Hc = J({
  name: "Modal",
  inheritAttrs: !1,
  props: Nc,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && (e.onHide && Qe("modal", "`on-hide` is deprecated."), e.onAfterHide && Qe("modal", "`on-after-hide` is deprecated, please use `on-after-leave` instead."), e.onBeforeHide && Qe("modal", "`on-before-hide` is deprecated, please use `on-before-leave` instead."), e.overlayStyle && Qe("modal", "`overlay-style` is deprecated, please use `style` instead."));
    const t = I(null), {
      mergedClsPrefixRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = ve("Modal", "-modal", mw, cw, e, r), l = Va(64), s = Wa(), d = hr(), u = e.internalDialog ? pe(Ac, null) : null, c = e.internalModal ? pe(Ph, null) : null, v = jd();
    function g(B) {
      const {
        onUpdateShow: C,
        "onUpdate:show": S,
        onHide: F
      } = e;
      C && ne(C, B), S && ne(S, B), F && !B && F(B);
    }
    function m() {
      const {
        onClose: B
      } = e;
      B ? Promise.resolve(B()).then((C) => {
        C !== !1 && g(!1);
      }) : g(!1);
    }
    function h() {
      const {
        onPositiveClick: B
      } = e;
      B ? Promise.resolve(B()).then((C) => {
        C !== !1 && g(!1);
      }) : g(!1);
    }
    function p() {
      const {
        onNegativeClick: B
      } = e;
      B ? Promise.resolve(B()).then((C) => {
        C !== !1 && g(!1);
      }) : g(!1);
    }
    function x() {
      const {
        onBeforeLeave: B,
        onBeforeHide: C
      } = e;
      B && ne(B), C && C();
    }
    function b() {
      const {
        onAfterLeave: B,
        onAfterHide: C
      } = e;
      B && ne(B), C && C();
    }
    function y(B) {
      var C;
      const {
        onMaskClick: S
      } = e;
      S && S(B), e.maskClosable && !((C = t.value) === null || C === void 0) && C.contains(Dr(B)) && g(!1);
    }
    function k(B) {
      var C;
      (C = e.onEsc) === null || C === void 0 || C.call(e), e.show && e.closeOnEsc && iu(B) && (v.value || g(!1));
    }
    $e(Nd, {
      getMousePosition: () => {
        const B = u || c;
        if (B) {
          const {
            clickedRef: C,
            clickedPositionRef: S
          } = B;
          if (C.value && S.value)
            return S.value;
        }
        return l.value ? s.value : null;
      },
      mergedClsPrefixRef: r,
      mergedThemeRef: a,
      isMountedRef: d,
      appearRef: ie(e, "internalAppear"),
      transformOriginRef: ie(e, "transformOrigin")
    });
    const w = A(() => {
      const {
        common: {
          cubicBezierEaseOut: B
        },
        self: {
          boxShadow: C,
          color: S,
          textColor: F
        }
      } = a.value;
      return {
        "--n-bezier-ease-out": B,
        "--n-box-shadow": C,
        "--n-color": S,
        "--n-text-color": F
      };
    }), R = i ? Ye("theme-class", void 0, w, e) : void 0;
    return {
      mergedClsPrefix: r,
      namespace: o,
      isMounted: d,
      containerRef: t,
      presetProps: A(() => Rn(e, gw)),
      handleEsc: k,
      handleAfterLeave: b,
      handleClickoutside: y,
      handleBeforeLeave: x,
      doUpdateShow: g,
      handleNegativeClick: p,
      handlePositiveClick: h,
      handleCloseClick: m,
      cssVars: i ? void 0 : w,
      themeClass: R == null ? void 0 : R.themeClass,
      onRender: R == null ? void 0 : R.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return f(Ja, {
      to: this.to,
      show: this.show
    }, {
      default: () => {
        var t;
        (t = this.onRender) === null || t === void 0 || t.call(this);
        const {
          unstableShowMask: r
        } = this;
        return nn(f("div", {
          role: "none",
          ref: "containerRef",
          class: [`${e}-modal-container`, this.themeClass, this.namespace],
          style: this.cssVars
        }, f(pw, Object.assign({
          style: this.overlayStyle
        }, this.$attrs, {
          ref: "bodyWrapper",
          displayDirective: this.displayDirective,
          show: this.show,
          preset: this.preset,
          autoFocus: this.autoFocus,
          trapFocus: this.trapFocus,
          draggable: this.draggable,
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
            return f(Tt, {
              name: "fade-in-transition",
              key: "mask",
              appear: (o = this.internalAppear) !== null && o !== void 0 ? o : this.isMounted
            }, {
              default: () => this.show ? f("div", {
                "aria-hidden": !0,
                ref: "containerRef",
                class: `${e}-modal-mask`,
                onClick: this.handleClickoutside
              }) : null
            });
          } : void 0
        }), this.$slots)), [[pi, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
}), bw = Object.assign(Object.assign({}, Ri), {
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
  onMaskClick: Function,
  draggable: [Boolean, Object]
}), xw = J({
  name: "DialogEnvironment",
  props: Object.assign(Object.assign({}, bw), {
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
    const t = I(!0);
    function r() {
      const {
        onInternalAfterLeave: c,
        internalKey: v,
        onAfterLeave: g
      } = e;
      c && c(v), g && g();
    }
    function o(c) {
      const {
        onPositiveClick: v
      } = e;
      v ? Promise.resolve(v(c)).then((g) => {
        g !== !1 && d();
      }) : d();
    }
    function i(c) {
      const {
        onNegativeClick: v
      } = e;
      v ? Promise.resolve(v(c)).then((g) => {
        g !== !1 && d();
      }) : d();
    }
    function a() {
      const {
        onClose: c
      } = e;
      c ? Promise.resolve(c()).then((v) => {
        v !== !1 && d();
      }) : d();
    }
    function l(c) {
      const {
        onMaskClick: v,
        maskClosable: g
      } = e;
      v && (v(c), g && d());
    }
    function s() {
      const {
        onEsc: c
      } = e;
      c && c();
    }
    function d() {
      t.value = !1;
    }
    function u(c) {
      t.value = c;
    }
    return {
      show: t,
      hide: d,
      handleUpdateShow: u,
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
      handleUpdateShow: t,
      handleNegativeClick: r,
      handleCloseClick: o,
      handleAfterLeave: i,
      handleMaskClick: a,
      handleEsc: l,
      to: s,
      maskClosable: d,
      show: u
    } = this;
    return f(Hc, {
      show: u,
      onUpdateShow: t,
      onMaskClick: a,
      onEsc: l,
      to: s,
      maskClosable: d,
      onAfterEnter: this.onAfterEnter,
      onAfterLeave: i,
      closeOnEsc: this.closeOnEsc,
      blockScroll: this.blockScroll,
      autoFocus: this.autoFocus,
      transformOrigin: this.transformOrigin,
      draggable: this.draggable,
      internalAppear: !0,
      internalDialog: !0
    }, {
      default: ({
        draggableClass: c
      }) => f(Mc, Object.assign({}, Rn(this.$props, Oc), {
        titleClass: Nt([this.titleClass, c]),
        style: this.internalStyle,
        onClose: o,
        onNegativeClick: r,
        onPositiveClick: e
      }))
    });
  }
}), yw = {
  injectionKey: String,
  to: [String, Object]
}, jc = J({
  name: "DialogProvider",
  props: yw,
  setup() {
    const e = I([]), t = {};
    function r(s = {}) {
      const d = xn(), u = Bo(Object.assign(Object.assign({}, s), {
        key: d,
        destroy: () => {
          var c;
          (c = t[`n-dialog-${d}`]) === null || c === void 0 || c.hide();
        }
      }));
      return e.value.push(u), u;
    }
    const o = ["info", "success", "warning", "error"].map((s) => (d) => r(Object.assign(Object.assign({}, d), {
      type: s
    })));
    function i(s) {
      const {
        value: d
      } = e;
      d.splice(d.findIndex((u) => u.key === s), 1);
    }
    function a() {
      Object.values(t).forEach((s) => {
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
    return $e(Dc, l), $e(Ac, {
      clickedRef: Va(64),
      clickedPositionRef: Wa()
    }), $e(iw, e), Object.assign(Object.assign({}, l), {
      dialogList: e,
      dialogInstRefs: t,
      handleAfterLeave: i
    });
  },
  render() {
    var e, t;
    return f(je, null, [this.dialogList.map((r) => f(xw, gr(r, ["destroy", "style"], {
      internalStyle: r.style,
      to: this.to,
      ref: (o) => {
        o === null ? delete this.dialogInstRefs[`n-dialog-${r.key}`] : this.dialogInstRefs[`n-dialog-${r.key}`] = o;
      },
      internalKey: r.key,
      onInternalAfterLeave: this.handleAfterLeave
    }))), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)]);
  }
}), _c = "n-loading-bar", Wc = "n-loading-bar-api";
function Cw(e) {
  const {
    primaryColor: t,
    errorColor: r
  } = e;
  return {
    colorError: r,
    colorLoading: t,
    height: "2px"
  };
}
const ww = {
  name: "LoadingBar",
  common: Ze,
  self: Cw
}, Sw = z("loading-bar-container", `
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`, [Po({
  enterDuration: "0.3s",
  leaveDuration: "0.8s"
}), z("loading-bar", `
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `, [N("starting", `
 background: var(--n-color-loading);
 `), N("finishing", `
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `), N("error", `
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]);
var Uo = function(e, t, r, o) {
  function i(a) {
    return a instanceof r ? a : new r(function(l) {
      l(a);
    });
  }
  return new (r || (r = Promise))(function(a, l) {
    function s(c) {
      try {
        u(o.next(c));
      } catch (v) {
        l(v);
      }
    }
    function d(c) {
      try {
        u(o.throw(c));
      } catch (v) {
        l(v);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, d);
    }
    u((o = o.apply(e, t || [])).next());
  });
};
function Ko(e, t) {
  return `${t}-loading-bar ${t}-loading-bar--${e}`;
}
const Bw = J({
  name: "LoadingBar",
  props: {
    containerClass: String,
    containerStyle: [String, Object]
  },
  setup() {
    const {
      inlineThemeDisabled: e
    } = Ae(), {
      props: t,
      mergedClsPrefixRef: r
    } = pe(_c), o = I(null), i = I(!1), a = I(!1), l = I(!1), s = I(!1);
    let d = !1;
    const u = I(!1), c = A(() => {
      const {
        loadingBarStyle: R
      } = t;
      return R ? R[u.value ? "error" : "loading"] : "";
    });
    function v() {
      return Uo(this, void 0, void 0, function* () {
        i.value = !1, l.value = !1, d = !1, u.value = !1, s.value = !0, yield pt(), s.value = !1;
      });
    }
    function g() {
      return Uo(this, arguments, void 0, function* (R = 0, B = 80, C = "starting") {
        if (a.value = !0, yield v(), d) return;
        l.value = !0, yield pt();
        const S = o.value;
        S && (S.style.maxWidth = `${R}%`, S.style.transition = "none", S.offsetWidth, S.className = Ko(C, r.value), S.style.transition = "", S.style.maxWidth = `${B}%`);
      });
    }
    function m() {
      return Uo(this, void 0, void 0, function* () {
        if (d || u.value) return;
        a.value && (yield pt()), d = !0;
        const R = o.value;
        R && (R.className = Ko("finishing", r.value), R.style.maxWidth = "100%", R.offsetWidth, l.value = !1);
      });
    }
    function h() {
      if (!(d || u.value))
        if (!l.value)
          g(100, 100, "error").then(() => {
            u.value = !0;
            const R = o.value;
            R && (R.className = Ko("error", r.value), R.offsetWidth, l.value = !1);
          });
        else {
          u.value = !0;
          const R = o.value;
          if (!R) return;
          R.className = Ko("error", r.value), R.style.maxWidth = "100%", R.offsetWidth, l.value = !1;
        }
    }
    function p() {
      i.value = !0;
    }
    function x() {
      i.value = !1;
    }
    function b() {
      return Uo(this, void 0, void 0, function* () {
        yield v();
      });
    }
    const y = ve("LoadingBar", "-loading-bar", Sw, ww, t, r), k = A(() => {
      const {
        self: {
          height: R,
          colorError: B,
          colorLoading: C
        }
      } = y.value;
      return {
        "--n-height": R,
        "--n-color-loading": C,
        "--n-color-error": B
      };
    }), w = e ? Ye("loading-bar", void 0, k, t) : void 0;
    return {
      mergedClsPrefix: r,
      loadingBarRef: o,
      started: a,
      loading: l,
      entering: i,
      transitionDisabled: s,
      start: g,
      error: h,
      finish: m,
      handleEnter: p,
      handleAfterEnter: x,
      handleAfterLeave: b,
      mergedLoadingBarStyle: c,
      cssVars: e ? void 0 : k,
      themeClass: w == null ? void 0 : w.themeClass,
      onRender: w == null ? void 0 : w.onRender
    };
  },
  render() {
    if (!this.started) return null;
    const {
      mergedClsPrefix: e
    } = this;
    return f(Tt, {
      name: "fade-in-transition",
      appear: !0,
      onEnter: this.handleEnter,
      onAfterEnter: this.handleAfterEnter,
      onAfterLeave: this.handleAfterLeave,
      css: !this.transitionDisabled
    }, {
      default: () => {
        var t;
        return (t = this.onRender) === null || t === void 0 || t.call(this), nn(f("div", {
          class: [`${e}-loading-bar-container`, this.themeClass, this.containerClass],
          style: this.containerStyle
        }, f("div", {
          ref: "loadingBarRef",
          class: [`${e}-loading-bar`],
          style: [this.cssVars, this.mergedLoadingBarStyle]
        })), [[jn, this.loading || !this.loading && this.entering]]);
      }
    });
  }
}), kw = Object.assign(Object.assign({}, ve.props), {
  to: {
    type: [String, Object, Boolean],
    default: void 0
  },
  containerClass: String,
  containerStyle: [String, Object],
  loadingBarStyle: {
    type: Object
  }
}), Rw = J({
  name: "LoadingBarProvider",
  props: kw,
  setup(e) {
    const t = hr(), r = I(null), o = {
      start() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.start() : pt(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.start();
        });
      },
      error() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.error() : pt(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.error();
        });
      },
      finish() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.finish() : pt(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.finish();
        });
      }
    }, {
      mergedClsPrefixRef: i
    } = Ae(e);
    return $e(Wc, o), $e(_c, {
      props: e,
      mergedClsPrefixRef: i
    }), Object.assign(o, {
      loadingBarRef: r
    });
  },
  render() {
    var e, t;
    return f(je, null, f(fi, {
      disabled: this.to === !1,
      to: this.to || "body"
    }, f(Bw, {
      ref: "loadingBarRef",
      containerStyle: this.containerStyle,
      containerClass: this.containerClass
    })), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
  }
});
function Fw() {
  const e = pe(Wc, null);
  return e === null && Pn("use-loading-bar", "No outer <n-loading-bar-provider /> founded."), e;
}
const Vc = "n-message-api", Uc = "n-message-provider", Pw = {
  margin: "0 0 8px 0",
  padding: "10px 20px",
  maxWidth: "720px",
  minWidth: "420px",
  iconMargin: "0 10px 0 0",
  closeMargin: "0 0 0 10px",
  closeSize: "20px",
  closeIconSize: "16px",
  iconSize: "20px",
  fontSize: "14px"
};
function zw(e) {
  const {
    textColor2: t,
    closeIconColor: r,
    closeIconColorHover: o,
    closeIconColorPressed: i,
    infoColor: a,
    successColor: l,
    errorColor: s,
    warningColor: d,
    popoverColor: u,
    boxShadow2: c,
    primaryColor: v,
    lineHeight: g,
    borderRadius: m,
    closeColorHover: h,
    closeColorPressed: p
  } = e;
  return Object.assign(Object.assign({}, Pw), {
    closeBorderRadius: m,
    textColor: t,
    textColorInfo: t,
    textColorSuccess: t,
    textColorError: t,
    textColorWarning: t,
    textColorLoading: t,
    color: u,
    colorInfo: u,
    colorSuccess: u,
    colorError: u,
    colorWarning: u,
    colorLoading: u,
    boxShadow: c,
    boxShadowInfo: c,
    boxShadowSuccess: c,
    boxShadowError: c,
    boxShadowWarning: c,
    boxShadowLoading: c,
    iconColor: t,
    iconColorInfo: a,
    iconColorSuccess: l,
    iconColorWarning: d,
    iconColorError: s,
    iconColorLoading: v,
    closeColorHover: h,
    closeColorPressed: p,
    closeIconColor: r,
    closeIconColorHover: o,
    closeIconColorPressed: i,
    closeColorHoverInfo: h,
    closeColorPressedInfo: p,
    closeIconColorInfo: r,
    closeIconColorHoverInfo: o,
    closeIconColorPressedInfo: i,
    closeColorHoverSuccess: h,
    closeColorPressedSuccess: p,
    closeIconColorSuccess: r,
    closeIconColorHoverSuccess: o,
    closeIconColorPressedSuccess: i,
    closeColorHoverError: h,
    closeColorPressedError: p,
    closeIconColorError: r,
    closeIconColorHoverError: o,
    closeIconColorPressedError: i,
    closeColorHoverWarning: h,
    closeColorPressedWarning: p,
    closeIconColorWarning: r,
    closeIconColorHoverWarning: o,
    closeIconColorPressedWarning: i,
    closeColorHoverLoading: h,
    closeColorPressedLoading: p,
    closeIconColorLoading: r,
    closeIconColorHoverLoading: o,
    closeIconColorPressedLoading: i,
    loadingColor: v,
    lineHeight: g,
    borderRadius: m
  });
}
const $w = {
  name: "Message",
  common: Ze,
  self: zw
}, Kc = {
  icon: Function,
  type: {
    type: String,
    default: "info"
  },
  content: [String, Number, Function],
  showIcon: {
    type: Boolean,
    default: !0
  },
  closable: Boolean,
  keepAliveOnHover: Boolean,
  onClose: Function,
  onMouseenter: Function,
  onMouseleave: Function
}, Aw = D([z("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [Gu({
  overflow: "visible",
  originalTransition: "transform .3s var(--n-bezier)",
  enterToProps: {
    transform: "scale(1)"
  },
  leaveToProps: {
    transform: "scale(0.85)"
  }
})]), z("message", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier),
 margin-bottom .3s var(--n-bezier);
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 flex-wrap: nowrap;
 overflow: hidden;
 max-width: var(--n-max-width);
 color: var(--n-text-color);
 background-color: var(--n-color);
 box-shadow: var(--n-box-shadow);
 `, [M("content", `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `), M("icon", `
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `, [["default", "info", "success", "warning", "error", "loading"].map((e) => N(`${e}-type`, [D("> *", `
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])), D("> *", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [Qt()])]), M("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [D("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), D("&:active", `
 color: var(--n-close-icon-color-pressed);
 `)])]), z("message-container", `
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `, [N("top", `
 top: 12px;
 left: 0;
 right: 0;
 `), N("top-left", `
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `), N("top-right", `
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `), N("bottom", `
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `), N("bottom-left", `
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `), N("bottom-right", `
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]), Dw = {
  info: () => f(li, null),
  success: () => f(ml, null),
  warning: () => f(yi, null),
  error: () => f(pl, null),
  default: () => null
}, Ew = J({
  name: "Message",
  props: Object.assign(Object.assign({}, Kc), {
    render: Function
  }),
  setup(e) {
    const {
      inlineThemeDisabled: t,
      mergedRtlRef: r
    } = Ae(e), {
      props: o,
      mergedClsPrefixRef: i
    } = pe(Uc), a = Ft("Message", r, i), l = ve("Message", "-message", Aw, $w, o, i), s = A(() => {
      const {
        type: u
      } = e, {
        common: {
          cubicBezierEaseInOut: c
        },
        self: {
          padding: v,
          margin: g,
          maxWidth: m,
          iconMargin: h,
          closeMargin: p,
          closeSize: x,
          iconSize: b,
          fontSize: y,
          lineHeight: k,
          borderRadius: w,
          iconColorInfo: R,
          iconColorSuccess: B,
          iconColorWarning: C,
          iconColorError: S,
          iconColorLoading: F,
          closeIconSize: P,
          closeBorderRadius: _,
          [Z("textColor", u)]: O,
          [Z("boxShadow", u)]: n,
          [Z("color", u)]: E,
          [Z("closeColorHover", u)]: T,
          [Z("closeColorPressed", u)]: H,
          [Z("closeIconColor", u)]: L,
          [Z("closeIconColorPressed", u)]: U,
          [Z("closeIconColorHover", u)]: te
        }
      } = l.value;
      return {
        "--n-bezier": c,
        "--n-margin": g,
        "--n-padding": v,
        "--n-max-width": m,
        "--n-font-size": y,
        "--n-icon-margin": h,
        "--n-icon-size": b,
        "--n-close-icon-size": P,
        "--n-close-border-radius": _,
        "--n-close-size": x,
        "--n-close-margin": p,
        "--n-text-color": O,
        "--n-color": E,
        "--n-box-shadow": n,
        "--n-icon-color-info": R,
        "--n-icon-color-success": B,
        "--n-icon-color-warning": C,
        "--n-icon-color-error": S,
        "--n-icon-color-loading": F,
        "--n-close-color-hover": T,
        "--n-close-color-pressed": H,
        "--n-close-icon-color": L,
        "--n-close-icon-color-pressed": U,
        "--n-close-icon-color-hover": te,
        "--n-line-height": k,
        "--n-border-radius": w
      };
    }), d = t ? Ye("message", A(() => e.type[0]), s, {}) : void 0;
    return {
      mergedClsPrefix: i,
      rtlEnabled: a,
      messageProviderProps: o,
      handleClose() {
        var u;
        (u = e.onClose) === null || u === void 0 || u.call(e);
      },
      cssVars: t ? void 0 : s,
      themeClass: d == null ? void 0 : d.themeClass,
      onRender: d == null ? void 0 : d.onRender,
      placement: o.placement
    };
  },
  render() {
    const {
      render: e,
      type: t,
      closable: r,
      content: o,
      mergedClsPrefix: i,
      cssVars: a,
      themeClass: l,
      onRender: s,
      icon: d,
      handleClose: u,
      showIcon: c
    } = this;
    s == null || s();
    let v;
    return f("div", {
      class: [`${i}-message-wrapper`, l],
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
      style: [{
        alignItems: this.placement.startsWith("top") ? "flex-start" : "flex-end"
      }, a]
    }, e ? e(this.$props) : f("div", {
      class: [`${i}-message ${i}-message--${t}-type`, this.rtlEnabled && `${i}-message--rtl`]
    }, (v = Tw(d, t, i)) && c ? f("div", {
      class: `${i}-message__icon ${i}-message__icon--${t}-type`
    }, f(xr, null, {
      default: () => v
    })) : null, f("div", {
      class: `${i}-message__content`
    }, gt(o)), r ? f(Vr, {
      clsPrefix: i,
      class: `${i}-message__close`,
      onClick: u,
      absolute: !0
    }) : null));
  }
});
function Tw(e, t, r) {
  if (typeof e == "function")
    return e();
  {
    const o = t === "loading" ? f(Gn, {
      clsPrefix: r,
      strokeWidth: 24,
      scale: 0.85
    }) : Dw[t]();
    return o ? f(yt, {
      clsPrefix: r,
      key: t
    }, {
      default: () => o
    }) : null;
  }
}
const Ow = J({
  name: "MessageEnvironment",
  props: Object.assign(Object.assign({}, Kc), {
    duration: {
      type: Number,
      default: 3e3
    },
    onAfterLeave: Function,
    onLeave: Function,
    internalKey: {
      type: String,
      required: !0
    },
    // private
    onInternalAfterLeave: Function,
    // deprecated
    onHide: Function,
    onAfterHide: Function
  }),
  setup(e) {
    let t = null;
    const r = I(!0);
    $t(() => {
      o();
    });
    function o() {
      const {
        duration: c
      } = e;
      c && (t = window.setTimeout(l, c));
    }
    function i(c) {
      c.currentTarget === c.target && t !== null && (window.clearTimeout(t), t = null);
    }
    function a(c) {
      c.currentTarget === c.target && o();
    }
    function l() {
      const {
        onHide: c
      } = e;
      r.value = !1, t && (window.clearTimeout(t), t = null), c && c();
    }
    function s() {
      const {
        onClose: c
      } = e;
      c && c(), l();
    }
    function d() {
      const {
        onAfterLeave: c,
        onInternalAfterLeave: v,
        onAfterHide: g,
        internalKey: m
      } = e;
      c && c(), v && v(m), g && g();
    }
    function u() {
      l();
    }
    return {
      show: r,
      hide: l,
      handleClose: s,
      handleAfterLeave: d,
      handleMouseleave: a,
      handleMouseenter: i,
      deactivate: u
    };
  },
  render() {
    return f(bl, {
      appear: !0,
      onAfterLeave: this.handleAfterLeave,
      onLeave: this.onLeave
    }, {
      default: () => [this.show ? f(Ew, {
        content: this.content,
        type: this.type,
        icon: this.icon,
        showIcon: this.showIcon,
        closable: this.closable,
        onClose: this.handleClose,
        onMouseenter: this.keepAliveOnHover ? this.handleMouseenter : void 0,
        onMouseleave: this.keepAliveOnHover ? this.handleMouseleave : void 0
      }) : null]
    });
  }
}), Mw = Object.assign(Object.assign({}, ve.props), {
  to: [String, Object],
  duration: {
    type: Number,
    default: 3e3
  },
  keepAliveOnHover: Boolean,
  max: Number,
  placement: {
    type: String,
    default: "top"
  },
  closable: Boolean,
  containerClass: String,
  containerStyle: [String, Object]
}), Iw = J({
  name: "MessageProvider",
  props: Mw,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = I([]), o = I({}), i = {
      create(d, u) {
        return a(d, Object.assign({
          type: "default"
        }, u));
      },
      info(d, u) {
        return a(d, Object.assign(Object.assign({}, u), {
          type: "info"
        }));
      },
      success(d, u) {
        return a(d, Object.assign(Object.assign({}, u), {
          type: "success"
        }));
      },
      warning(d, u) {
        return a(d, Object.assign(Object.assign({}, u), {
          type: "warning"
        }));
      },
      error(d, u) {
        return a(d, Object.assign(Object.assign({}, u), {
          type: "error"
        }));
      },
      loading(d, u) {
        return a(d, Object.assign(Object.assign({}, u), {
          type: "loading"
        }));
      },
      destroyAll: s
    };
    $e(Uc, {
      props: e,
      mergedClsPrefixRef: t
    }), $e(Vc, i);
    function a(d, u) {
      const c = xn(), v = Bo(Object.assign(Object.assign({}, u), {
        content: d,
        key: c,
        destroy: () => {
          var m;
          (m = o.value[c]) === null || m === void 0 || m.hide();
        }
      })), {
        max: g
      } = e;
      return g && r.value.length >= g && r.value.shift(), r.value.push(v), v;
    }
    function l(d) {
      r.value.splice(r.value.findIndex((u) => u.key === d), 1), delete o.value[d];
    }
    function s() {
      Object.values(o.value).forEach((d) => {
        d.hide();
      });
    }
    return Object.assign({
      mergedClsPrefix: t,
      messageRefs: o,
      messageList: r,
      handleAfterLeave: l
    }, i);
  },
  render() {
    var e, t, r;
    return f(je, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e), this.messageList.length ? f(fi, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, f("div", {
      class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass],
      key: "message-container",
      style: this.containerStyle
    }, this.messageList.map((o) => f(Ow, Object.assign({
      ref: (i) => {
        i && (this.messageRefs[o.key] = i);
      },
      internalKey: o.key,
      onInternalAfterLeave: this.handleAfterLeave
    }, gr(o, ["destroy"], void 0), {
      duration: o.duration === void 0 ? this.duration : o.duration,
      keepAliveOnHover: o.keepAliveOnHover === void 0 ? this.keepAliveOnHover : o.keepAliveOnHover,
      closable: o.closable === void 0 ? this.closable : o.closable
    }))))) : null);
  }
});
function Lw() {
  const e = pe(Vc, null);
  return e === null && Pn("use-message", "No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."), e;
}
const Nw = J({
  name: "ModalEnvironment",
  props: Object.assign(Object.assign({}, Nc), {
    internalKey: {
      type: String,
      required: !0
    },
    // private
    onInternalAfterLeave: {
      type: Function,
      required: !0
    }
  }),
  setup(e) {
    const t = I(!0);
    function r() {
      const {
        onInternalAfterLeave: c,
        internalKey: v,
        onAfterLeave: g
      } = e;
      c && c(v), g && g();
    }
    function o() {
      const {
        onPositiveClick: c
      } = e;
      c ? Promise.resolve(c()).then((v) => {
        v !== !1 && d();
      }) : d();
    }
    function i() {
      const {
        onNegativeClick: c
      } = e;
      c ? Promise.resolve(c()).then((v) => {
        v !== !1 && d();
      }) : d();
    }
    function a() {
      const {
        onClose: c
      } = e;
      c ? Promise.resolve(c()).then((v) => {
        v !== !1 && d();
      }) : d();
    }
    function l(c) {
      const {
        onMaskClick: v,
        maskClosable: g
      } = e;
      v && (v(c), g && d());
    }
    function s() {
      const {
        onEsc: c
      } = e;
      c && c();
    }
    function d() {
      t.value = !1;
    }
    function u(c) {
      t.value = c;
    }
    return {
      show: t,
      hide: d,
      handleUpdateShow: u,
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
      handleUpdateShow: e,
      handleAfterLeave: t,
      handleMaskClick: r,
      handleEsc: o,
      show: i
    } = this;
    return f(Hc, Object.assign({}, this.$props, {
      show: i,
      onUpdateShow: e,
      onMaskClick: r,
      onEsc: o,
      onAfterLeave: t,
      internalAppear: !0,
      internalModal: !0
    }));
  }
}), Hw = {
  to: [String, Object]
}, qc = J({
  name: "ModalProvider",
  props: Hw,
  setup() {
    const e = I([]), t = {};
    function r(l = {}) {
      const s = xn(), d = Bo(Object.assign(Object.assign({}, l), {
        key: s,
        destroy: () => {
          var u;
          (u = t[`n-modal-${s}`]) === null || u === void 0 || u.hide();
        }
      }));
      return e.value.push(d), d;
    }
    function o(l) {
      const {
        value: s
      } = e;
      s.splice(s.findIndex((d) => d.key === l), 1);
    }
    function i() {
      Object.values(t).forEach((l) => {
        l == null || l.hide();
      });
    }
    const a = {
      create: r,
      destroyAll: i
    };
    return $e(Ic, a), $e(fw, {
      clickedRef: Va(64),
      clickedPositionRef: Wa()
    }), $e(hw, e), Object.assign(Object.assign({}, a), {
      modalList: e,
      modalInstRefs: t,
      handleAfterLeave: o
    });
  },
  render() {
    var e, t;
    return f(je, null, [this.modalList.map((r) => {
      var o;
      return f(Nw, gr(r, ["destroy"], {
        to: (o = r.to) !== null && o !== void 0 ? o : this.to,
        ref: (i) => {
          i === null ? delete this.modalInstRefs[`n-modal-${r.key}`] : this.modalInstRefs[`n-modal-${r.key}`] = i;
        },
        internalKey: r.key,
        onInternalAfterLeave: this.handleAfterLeave
      }));
    }), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)]);
  }
}), jw = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px"
};
function _w(e) {
  const {
    textColor2: t,
    successColor: r,
    infoColor: o,
    warningColor: i,
    errorColor: a,
    popoverColor: l,
    closeIconColor: s,
    closeIconColorHover: d,
    closeIconColorPressed: u,
    closeColorHover: c,
    closeColorPressed: v,
    textColor1: g,
    textColor3: m,
    borderRadius: h,
    fontWeightStrong: p,
    boxShadow2: x,
    lineHeight: b,
    fontSize: y
  } = e;
  return Object.assign(Object.assign({}, jw), {
    borderRadius: h,
    lineHeight: b,
    fontSize: y,
    headerFontWeight: p,
    iconColor: t,
    iconColorSuccess: r,
    iconColorInfo: o,
    iconColorWarning: i,
    iconColorError: a,
    color: l,
    textColor: t,
    closeIconColor: s,
    closeIconColorHover: d,
    closeIconColorPressed: u,
    closeBorderRadius: h,
    closeColorHover: c,
    closeColorPressed: v,
    headerTextColor: g,
    descriptionTextColor: m,
    actionTextColor: t,
    boxShadow: x
  });
}
const Ww = {
  name: "Notification",
  common: Ze,
  peers: {
    Scrollbar: Ur
  },
  self: _w
}, Fi = "n-notification-provider", Vw = J({
  name: "NotificationContainer",
  props: {
    scrollable: {
      type: Boolean,
      required: !0
    },
    placement: {
      type: String,
      required: !0
    }
  },
  setup() {
    const {
      mergedThemeRef: e,
      mergedClsPrefixRef: t,
      wipTransitionCountRef: r
    } = pe(Fi), o = I(null);
    return nt(() => {
      var i, a;
      r.value > 0 ? (i = o == null ? void 0 : o.value) === null || i === void 0 || i.classList.add("transitioning") : (a = o == null ? void 0 : o.value) === null || a === void 0 || a.classList.remove("transitioning");
    }), {
      selfRef: o,
      mergedTheme: e,
      mergedClsPrefix: t,
      transitioning: r
    };
  },
  render() {
    const {
      $slots: e,
      scrollable: t,
      mergedClsPrefix: r,
      mergedTheme: o,
      placement: i
    } = this;
    return f("div", {
      ref: "selfRef",
      class: [`${r}-notification-container`, t && `${r}-notification-container--scrollable`, `${r}-notification-container--${i}`]
    }, t ? f(An, {
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      contentStyle: {
        overflow: "hidden"
      }
    }, e) : e);
  }
}), Uw = {
  info: () => f(li, null),
  success: () => f(ml, null),
  warning: () => f(yi, null),
  error: () => f(pl, null),
  default: () => null
}, $l = {
  closable: {
    type: Boolean,
    default: !0
  },
  type: {
    type: String,
    default: "default"
  },
  avatar: Function,
  title: [String, Function],
  description: [String, Function],
  content: [String, Function],
  meta: [String, Function],
  action: [String, Function],
  onClose: {
    type: Function,
    required: !0
  },
  keepAliveOnHover: Boolean,
  onMouseenter: Function,
  onMouseleave: Function
}, Kw = _n($l), qw = J({
  name: "Notification",
  props: $l,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      mergedThemeRef: r,
      props: o
    } = pe(Fi), {
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(), l = Ft("Notification", a, t), s = A(() => {
      const {
        type: u
      } = e, {
        self: {
          color: c,
          textColor: v,
          closeIconColor: g,
          closeIconColorHover: m,
          closeIconColorPressed: h,
          headerTextColor: p,
          descriptionTextColor: x,
          actionTextColor: b,
          borderRadius: y,
          headerFontWeight: k,
          boxShadow: w,
          lineHeight: R,
          fontSize: B,
          closeMargin: C,
          closeSize: S,
          width: F,
          padding: P,
          closeIconSize: _,
          closeBorderRadius: O,
          closeColorHover: n,
          closeColorPressed: E,
          titleFontSize: T,
          metaFontSize: H,
          descriptionFontSize: L,
          [Z("iconColor", u)]: U
        },
        common: {
          cubicBezierEaseOut: te,
          cubicBezierEaseIn: X,
          cubicBezierEaseInOut: K
        }
      } = r.value, {
        left: j,
        right: q,
        top: Y,
        bottom: ae
      } = Wt(P);
      return {
        "--n-color": c,
        "--n-font-size": B,
        "--n-text-color": v,
        "--n-description-text-color": x,
        "--n-action-text-color": b,
        "--n-title-text-color": p,
        "--n-title-font-weight": k,
        "--n-bezier": K,
        "--n-bezier-ease-out": te,
        "--n-bezier-ease-in": X,
        "--n-border-radius": y,
        "--n-box-shadow": w,
        "--n-close-border-radius": O,
        "--n-close-color-hover": n,
        "--n-close-color-pressed": E,
        "--n-close-icon-color": g,
        "--n-close-icon-color-hover": m,
        "--n-close-icon-color-pressed": h,
        "--n-line-height": R,
        "--n-icon-color": U,
        "--n-close-margin": C,
        "--n-close-size": S,
        "--n-close-icon-size": _,
        "--n-width": F,
        "--n-padding-left": j,
        "--n-padding-right": q,
        "--n-padding-top": Y,
        "--n-padding-bottom": ae,
        "--n-title-font-size": T,
        "--n-meta-font-size": H,
        "--n-description-font-size": L
      };
    }), d = i ? Ye("notification", A(() => e.type[0]), s, o) : void 0;
    return {
      mergedClsPrefix: t,
      showAvatar: A(() => e.avatar || e.type !== "default"),
      handleCloseClick() {
        e.onClose();
      },
      rtlEnabled: l,
      cssVars: i ? void 0 : s,
      themeClass: d == null ? void 0 : d.themeClass,
      onRender: d == null ? void 0 : d.onRender
    };
  },
  render() {
    var e;
    const {
      mergedClsPrefix: t
    } = this;
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      class: [`${t}-notification-wrapper`, this.themeClass],
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
      style: this.cssVars
    }, f("div", {
      class: [`${t}-notification`, this.rtlEnabled && `${t}-notification--rtl`, this.themeClass, {
        [`${t}-notification--closable`]: this.closable,
        [`${t}-notification--show-avatar`]: this.showAvatar
      }],
      style: this.cssVars
    }, this.showAvatar ? f("div", {
      class: `${t}-notification__avatar`
    }, this.avatar ? gt(this.avatar) : this.type !== "default" ? f(yt, {
      clsPrefix: t
    }, {
      default: () => Uw[this.type]()
    }) : null) : null, this.closable ? f(Vr, {
      clsPrefix: t,
      class: `${t}-notification__close`,
      onClick: this.handleCloseClick
    }) : null, f("div", {
      ref: "bodyRef",
      class: `${t}-notification-main`
    }, this.title ? f("div", {
      class: `${t}-notification-main__header`
    }, gt(this.title)) : null, this.description ? f("div", {
      class: `${t}-notification-main__description`
    }, gt(this.description)) : null, this.content ? f("pre", {
      class: `${t}-notification-main__content`
    }, gt(this.content)) : null, this.meta || this.action ? f("div", {
      class: `${t}-notification-main-footer`
    }, this.meta ? f("div", {
      class: `${t}-notification-main-footer__meta`
    }, gt(this.meta)) : null, this.action ? f("div", {
      class: `${t}-notification-main-footer__action`
    }, gt(this.action)) : null) : null)));
  }
}), Gw = Object.assign(Object.assign({}, $l), {
  duration: Number,
  onClose: Function,
  onLeave: Function,
  onAfterEnter: Function,
  onAfterLeave: Function,
  /** @deprecated */
  onHide: Function,
  /** @deprecated */
  onAfterShow: Function,
  /** @deprecated */
  onAfterHide: Function
}), Xw = J({
  name: "NotificationEnvironment",
  props: Object.assign(Object.assign({}, Gw), {
    // private
    internalKey: {
      type: String,
      required: !0
    },
    onInternalAfterLeave: {
      type: Function,
      required: !0
    }
  }),
  setup(e) {
    const {
      wipTransitionCountRef: t
    } = pe(Fi), r = I(!0);
    let o = null;
    function i() {
      r.value = !1, o && window.clearTimeout(o);
    }
    function a(h) {
      t.value++, pt(() => {
        h.style.height = `${h.offsetHeight}px`, h.style.maxHeight = "0", h.style.transition = "none", h.offsetHeight, h.style.transition = "", h.style.maxHeight = h.style.height;
      });
    }
    function l(h) {
      t.value--, h.style.height = "", h.style.maxHeight = "";
      const {
        onAfterEnter: p,
        onAfterShow: x
      } = e;
      p && p(), x && x();
    }
    function s(h) {
      t.value++, h.style.maxHeight = `${h.offsetHeight}px`, h.style.height = `${h.offsetHeight}px`, h.offsetHeight;
    }
    function d(h) {
      const {
        onHide: p
      } = e;
      p && p(), h.style.maxHeight = "0", h.offsetHeight;
    }
    function u() {
      t.value--;
      const {
        onAfterLeave: h,
        onInternalAfterLeave: p,
        onAfterHide: x,
        internalKey: b
      } = e;
      h && h(), p(b), x && x();
    }
    function c() {
      const {
        duration: h
      } = e;
      h && (o = window.setTimeout(i, h));
    }
    function v(h) {
      h.currentTarget === h.target && o !== null && (window.clearTimeout(o), o = null);
    }
    function g(h) {
      h.currentTarget === h.target && c();
    }
    function m() {
      const {
        onClose: h
      } = e;
      h ? Promise.resolve(h()).then((p) => {
        p !== !1 && i();
      }) : i();
    }
    return $t(() => {
      e.duration && (o = window.setTimeout(i, e.duration));
    }), {
      show: r,
      hide: i,
      handleClose: m,
      handleAfterLeave: u,
      handleLeave: d,
      handleBeforeLeave: s,
      handleAfterEnter: l,
      handleBeforeEnter: a,
      handleMouseenter: v,
      handleMouseleave: g
    };
  },
  render() {
    return f(Tt, {
      name: "notification-transition",
      appear: !0,
      // convert to any since Element is not compatible with HTMLElement
      onBeforeEnter: this.handleBeforeEnter,
      onAfterEnter: this.handleAfterEnter,
      onBeforeLeave: this.handleBeforeLeave,
      onLeave: this.handleLeave,
      onAfterLeave: this.handleAfterLeave
    }, {
      default: () => this.show ? f(qw, Object.assign({}, Rn(this.$props, Kw), {
        onClose: this.handleClose,
        onMouseenter: this.duration && this.keepAliveOnHover ? this.handleMouseenter : void 0,
        onMouseleave: this.duration && this.keepAliveOnHover ? this.handleMouseleave : void 0
      })) : null
    });
  }
}), Yw = D([z("notification-container", `
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `, [D(">", [z("scrollbar", `
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [D(">", [z("scrollbar-container", `
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [z("scrollbar-content", `
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]), N("top, top-right, top-left", `
 top: 12px;
 `, [D("&.transitioning >", [z("scrollbar", [D(">", [z("scrollbar-container", `
 min-height: 100vh !important;
 `)])])])]), N("bottom, bottom-right, bottom-left", `
 bottom: 12px;
 `, [D(">", [z("scrollbar", [D(">", [z("scrollbar-container", [z("scrollbar-content", `
 padding-bottom: 12px;
 `)])])])]), z("notification-wrapper", `
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]), N("top, bottom", `
 left: 50%;
 transform: translateX(-50%);
 `, [z("notification-wrapper", [D("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: scale(0.85);
 `), D("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: scale(1);
 `)])]), N("top", [z("notification-wrapper", `
 transform-origin: top center;
 `)]), N("bottom", [z("notification-wrapper", `
 transform-origin: bottom center;
 `)]), N("top-right, bottom-right", [z("notification", `
 margin-left: 28px;
 margin-right: 16px;
 `)]), N("top-left, bottom-left", [z("notification", `
 margin-left: 16px;
 margin-right: 28px;
 `)]), N("top-right", `
 right: 0;
 `, [qo("top-right")]), N("top-left", `
 left: 0;
 `, [qo("top-left")]), N("bottom-right", `
 right: 0;
 `, [qo("bottom-right")]), N("bottom-left", `
 left: 0;
 `, [qo("bottom-left")]), N("scrollable", [N("top-right", `
 top: 0;
 `), N("top-left", `
 top: 0;
 `), N("bottom-right", `
 bottom: 0;
 `), N("bottom-left", `
 bottom: 0;
 `)]), z("notification-wrapper", `
 margin-bottom: 12px;
 `, [D("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `), D("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 opacity: 1;
 `), D("&.notification-transition-leave-active", `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `), D("&.notification-transition-enter-active", `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]), z("notification", `
 background-color: var(--n-color);
 color: var(--n-text-color);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 font-family: inherit;
 font-size: var(--n-font-size);
 font-weight: 400;
 position: relative;
 display: flex;
 overflow: hidden;
 flex-shrink: 0;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 width: var(--n-width);
 max-width: calc(100vw - 16px - 16px);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 box-sizing: border-box;
 opacity: 1;
 `, [M("avatar", [z("icon", `
 color: var(--n-icon-color);
 `), z("base-icon", `
 color: var(--n-icon-color);
 `)]), N("show-avatar", [z("notification-main", `
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]), N("closable", [z("notification-main", [D("> *:first-child", `
 padding-right: 20px;
 `)]), M("close", `
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), M("avatar", `
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [z("icon", "transition: color .3s var(--n-bezier);")]), z("notification-main", `
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `, [z("notification-main-footer", `
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `, [M("meta", `
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `), M("action", `
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]), M("header", `
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `), M("description", `
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `), M("content", `
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `, [D("&:first-child", "margin: 0;")])])])])]);
function qo(e) {
  const r = e.split("-")[1] === "left" ? "calc(-100%)" : "calc(100%)";
  return z("notification-wrapper", [D("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: translate(${r}, 0);
 `), D("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: translate(0, 0);
 `)]);
}
const Gc = "n-notification-api", Zw = Object.assign(Object.assign({}, ve.props), {
  containerClass: String,
  containerStyle: [String, Object],
  to: [String, Object],
  scrollable: {
    type: Boolean,
    default: !0
  },
  max: Number,
  placement: {
    type: String,
    default: "top-right"
  },
  keepAliveOnHover: Boolean
}), Jw = J({
  name: "NotificationProvider",
  props: Zw,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = I([]), o = {}, i = /* @__PURE__ */ new Set();
    function a(m) {
      const h = xn(), p = () => {
        i.add(h), o[h] && o[h].hide();
      }, x = Bo(Object.assign(Object.assign({}, m), {
        key: h,
        destroy: p,
        hide: p,
        deactivate: p
      })), {
        max: b
      } = e;
      if (b && r.value.length - i.size >= b) {
        let y = !1, k = 0;
        for (const w of r.value) {
          if (!i.has(w.key)) {
            o[w.key] && (w.destroy(), y = !0);
            break;
          }
          k++;
        }
        y || r.value.splice(k, 1);
      }
      return r.value.push(x), x;
    }
    const l = ["info", "success", "warning", "error"].map((m) => (h) => a(Object.assign(Object.assign({}, h), {
      type: m
    })));
    function s(m) {
      i.delete(m), r.value.splice(r.value.findIndex((h) => h.key === m), 1);
    }
    const d = ve("Notification", "-notification", Yw, Ww, e, t), u = {
      create: a,
      info: l[0],
      success: l[1],
      warning: l[2],
      error: l[3],
      open: v,
      destroyAll: g
    }, c = I(0);
    $e(Gc, u), $e(Fi, {
      props: e,
      mergedClsPrefixRef: t,
      mergedThemeRef: d,
      wipTransitionCountRef: c
    });
    function v(m) {
      return a(m);
    }
    function g() {
      Object.values(r.value).forEach((m) => {
        m.hide();
      });
    }
    return Object.assign({
      mergedClsPrefix: t,
      notificationList: r,
      notificationRefs: o,
      handleAfterLeave: s
    }, u);
  },
  render() {
    var e, t, r;
    const {
      placement: o
    } = this;
    return f(je, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e), this.notificationList.length ? f(fi, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, f(Vw, {
      class: this.containerClass,
      style: this.containerStyle,
      scrollable: this.scrollable && o !== "top" && o !== "bottom",
      placement: o
    }, {
      default: () => this.notificationList.map((i) => f(Xw, Object.assign({
        ref: (a) => {
          const l = i.key;
          a === null ? delete this.notificationRefs[l] : this.notificationRefs[l] = a;
        }
      }, gr(i, ["destroy", "hide", "deactivate"]), {
        internalKey: i.key,
        onInternalAfterLeave: this.handleAfterLeave,
        keepAliveOnHover: i.keepAliveOnHover === void 0 ? this.keepAliveOnHover : i.keepAliveOnHover
      })))
    })) : null);
  }
});
function Qw() {
  const e = pe(Gc, null);
  return e === null && Pn("use-notification", "No outer `n-notification-provider` found."), e;
}
const eS = J({
  name: "InjectionExtractor",
  props: {
    onSetup: Function
  },
  setup(e, {
    slots: t
  }) {
    var r;
    return (r = e.onSetup) === null || r === void 0 || r.call(e), () => {
      var o;
      return (o = t.default) === null || o === void 0 ? void 0 : o.call(t);
    };
  }
}), tS = {
  message: Lw,
  notification: Qw,
  loadingBar: Fw,
  dialog: Ec,
  modal: Lc
};
function nS({
  providersAndProps: e,
  configProviderProps: t
}) {
  let r = Ef(i);
  const o = {
    app: r
  };
  function i() {
    return f(oc, re(t), {
      default: () => e.map(({
        type: s,
        Provider: d,
        props: u
      }) => f(d, re(u), {
        default: () => f(eS, {
          onSetup: () => o[s] = tS[s]()
        })
      }))
    });
  }
  let a;
  return jr && (a = document.createElement("div"), document.body.appendChild(a), r.mount(a)), Object.assign({
    unmount: () => {
      var s;
      if (r === null || a === null) {
        zt("discrete", "unmount call no need because discrete app has been unmounted");
        return;
      }
      r.unmount(), (s = a.parentNode) === null || s === void 0 || s.removeChild(a), a = null, r = null;
    }
  }, o);
}
function Xc(e, {
  configProviderProps: t,
  messageProviderProps: r,
  dialogProviderProps: o,
  notificationProviderProps: i,
  loadingBarProviderProps: a,
  modalProviderProps: l
} = {}) {
  const s = [];
  return e.forEach((u) => {
    switch (u) {
      case "message":
        s.push({
          type: u,
          Provider: Iw,
          props: r
        });
        break;
      case "notification":
        s.push({
          type: u,
          Provider: Jw,
          props: i
        });
        break;
      case "dialog":
        s.push({
          type: u,
          Provider: jc,
          props: o
        });
        break;
      case "loadingBar":
        s.push({
          type: u,
          Provider: Rw,
          props: a
        });
        break;
      case "modal":
        s.push({
          type: u,
          Provider: qc,
          props: l
        });
    }
  }), nS({
    providersAndProps: s,
    configProviderProps: t
  });
}
function rS(e) {
  const {
    modalColor: t,
    textColor1: r,
    textColor2: o,
    boxShadow3: i,
    lineHeight: a,
    fontWeightStrong: l,
    dividerColor: s,
    closeColorHover: d,
    closeColorPressed: u,
    closeIconColor: c,
    closeIconColorHover: v,
    closeIconColorPressed: g,
    borderRadius: m,
    primaryColorHover: h
  } = e;
  return {
    bodyPadding: "16px 24px",
    borderRadius: m,
    headerPadding: "16px 24px",
    footerPadding: "16px 24px",
    color: t,
    textColor: o,
    titleTextColor: r,
    titleFontSize: "18px",
    titleFontWeight: l,
    boxShadow: i,
    lineHeight: a,
    headerBorderBottom: `1px solid ${s}`,
    footerBorderTop: `1px solid ${s}`,
    closeIconColor: c,
    closeIconColorHover: v,
    closeIconColorPressed: g,
    closeSize: "22px",
    closeIconSize: "18px",
    closeColorHover: d,
    closeColorPressed: u,
    closeBorderRadius: m,
    resizableTriggerColorHover: h
  };
}
const oS = {
  name: "Drawer",
  common: Ze,
  peers: {
    Scrollbar: Ur
  },
  self: rS
}, iS = J({
  name: "NDrawerContent",
  inheritAttrs: !1,
  props: {
    blockScroll: Boolean,
    show: {
      type: Boolean,
      default: void 0
    },
    displayDirective: {
      type: String,
      required: !0
    },
    placement: {
      type: String,
      required: !0
    },
    contentClass: String,
    contentStyle: [Object, String],
    nativeScrollbar: {
      type: Boolean,
      required: !0
    },
    scrollbarProps: Object,
    trapFocus: {
      type: Boolean,
      default: !0
    },
    autoFocus: {
      type: Boolean,
      default: !0
    },
    showMask: {
      type: [Boolean, String],
      required: !0
    },
    maxWidth: Number,
    maxHeight: Number,
    minWidth: Number,
    minHeight: Number,
    resizable: Boolean,
    onClickoutside: Function,
    onAfterLeave: Function,
    onAfterEnter: Function,
    onEsc: Function
  },
  setup(e) {
    const t = I(!!e.show), r = I(null), o = pe(qa);
    let i = 0, a = "", l = null;
    const s = I(!1), d = I(!1), u = A(() => e.placement === "top" || e.placement === "bottom"), {
      mergedClsPrefixRef: c,
      mergedRtlRef: v
    } = Ae(e), g = Ft("Drawer", v, c), m = B, h = (F) => {
      d.value = !0, i = u.value ? F.clientY : F.clientX, a = document.body.style.cursor, document.body.style.cursor = u.value ? "ns-resize" : "ew-resize", document.body.addEventListener("mousemove", R), document.body.addEventListener("mouseleave", m), document.body.addEventListener("mouseup", B);
    }, p = () => {
      l !== null && (window.clearTimeout(l), l = null), d.value ? s.value = !0 : l = window.setTimeout(() => {
        s.value = !0;
      }, 300);
    }, x = () => {
      l !== null && (window.clearTimeout(l), l = null), s.value = !1;
    }, {
      doUpdateHeight: b,
      doUpdateWidth: y
    } = o, k = (F) => {
      const {
        maxWidth: P
      } = e;
      if (P && F > P) return P;
      const {
        minWidth: _
      } = e;
      return _ && F < _ ? _ : F;
    }, w = (F) => {
      const {
        maxHeight: P
      } = e;
      if (P && F > P) return P;
      const {
        minHeight: _
      } = e;
      return _ && F < _ ? _ : F;
    };
    function R(F) {
      var P, _;
      if (d.value)
        if (u.value) {
          let O = ((P = r.value) === null || P === void 0 ? void 0 : P.offsetHeight) || 0;
          const n = i - F.clientY;
          O += e.placement === "bottom" ? n : -n, O = w(O), b(O), i = F.clientY;
        } else {
          let O = ((_ = r.value) === null || _ === void 0 ? void 0 : _.offsetWidth) || 0;
          const n = i - F.clientX;
          O += e.placement === "right" ? n : -n, O = k(O), y(O), i = F.clientX;
        }
    }
    function B() {
      d.value && (i = 0, d.value = !1, document.body.style.cursor = a, document.body.removeEventListener("mousemove", R), document.body.removeEventListener("mouseup", B), document.body.removeEventListener("mouseleave", m));
    }
    nt(() => {
      e.show && (t.value = !0);
    }), Ie(() => e.show, (F) => {
      F || B();
    }), St(() => {
      B();
    });
    const C = A(() => {
      const {
        show: F
      } = e, P = [[jn, F]];
      return e.showMask || P.push([Er, e.onClickoutside, void 0, {
        capture: !0
      }]), P;
    });
    function S() {
      var F;
      t.value = !1, (F = e.onAfterLeave) === null || F === void 0 || F.call(e);
    }
    return _d(A(() => e.blockScroll && t.value)), $e(ko, r), $e(Hr, null), $e(Ro, null), {
      bodyRef: r,
      rtlEnabled: g,
      mergedClsPrefix: o.mergedClsPrefixRef,
      isMounted: o.isMountedRef,
      mergedTheme: o.mergedThemeRef,
      displayed: t,
      transitionName: A(() => ({
        right: "slide-in-from-right-transition",
        left: "slide-in-from-left-transition",
        top: "slide-in-from-top-transition",
        bottom: "slide-in-from-bottom-transition"
      })[e.placement]),
      handleAfterLeave: S,
      bodyDirectives: C,
      handleMousedownResizeTrigger: h,
      handleMouseenterResizeTrigger: p,
      handleMouseleaveResizeTrigger: x,
      isDragging: d,
      isHoverOnResizeTrigger: s
    };
  },
  render() {
    const {
      $slots: e,
      mergedClsPrefix: t
    } = this;
    return this.displayDirective === "show" || this.displayed || this.show ? nn(
      /* Keep the wrapper dom. Make sure the drawer has a host.
      Nor the detached content will disappear without transition */
      f("div", {
        role: "none"
      }, f(nl, {
        disabled: !this.showMask || !this.trapFocus,
        active: this.show,
        autoFocus: this.autoFocus,
        onEsc: this.onEsc
      }, {
        default: () => f(Tt, {
          name: this.transitionName,
          appear: this.isMounted,
          onAfterEnter: this.onAfterEnter,
          onAfterLeave: this.handleAfterLeave
        }, {
          default: () => nn(f("div", kt(this.$attrs, {
            role: "dialog",
            ref: "bodyRef",
            "aria-modal": "true",
            class: [
              `${t}-drawer`,
              this.rtlEnabled && `${t}-drawer--rtl`,
              `${t}-drawer--${this.placement}-placement`,
              /**
               * When the mouse is pressed to resize the drawer,
               * disable text selection
               */
              this.isDragging && `${t}-drawer--unselectable`,
              this.nativeScrollbar && `${t}-drawer--native-scrollbar`
            ]
          }), [this.resizable ? f("div", {
            class: [`${t}-drawer__resize-trigger`, (this.isDragging || this.isHoverOnResizeTrigger) && `${t}-drawer__resize-trigger--hover`],
            onMouseenter: this.handleMouseenterResizeTrigger,
            onMouseleave: this.handleMouseleaveResizeTrigger,
            onMousedown: this.handleMousedownResizeTrigger
          }) : null, this.nativeScrollbar ? f("div", {
            class: [`${t}-drawer-content-wrapper`, this.contentClass],
            style: this.contentStyle,
            role: "none"
          }, e) : f(An, Object.assign({}, this.scrollbarProps, {
            contentStyle: this.contentStyle,
            contentClass: [`${t}-drawer-content-wrapper`, this.contentClass],
            theme: this.mergedTheme.peers.Scrollbar,
            themeOverrides: this.mergedTheme.peerOverrides.Scrollbar
          }), e)]), this.bodyDirectives)
        })
      })),
      [[jn, this.displayDirective === "if" || this.displayed || this.show]]
    ) : null;
  }
}), {
  cubicBezierEaseIn: aS,
  cubicBezierEaseOut: lS
} = sn;
function sS({
  duration: e = "0.3s",
  leaveDuration: t = "0.2s",
  name: r = "slide-in-from-bottom"
} = {}) {
  return [D(`&.${r}-transition-leave-active`, {
    transition: `transform ${t} ${aS}`
  }), D(`&.${r}-transition-enter-active`, {
    transition: `transform ${e} ${lS}`
  }), D(`&.${r}-transition-enter-to`, {
    transform: "translateY(0)"
  }), D(`&.${r}-transition-enter-from`, {
    transform: "translateY(100%)"
  }), D(`&.${r}-transition-leave-from`, {
    transform: "translateY(0)"
  }), D(`&.${r}-transition-leave-to`, {
    transform: "translateY(100%)"
  })];
}
const {
  cubicBezierEaseIn: dS,
  cubicBezierEaseOut: uS
} = sn;
function cS({
  duration: e = "0.3s",
  leaveDuration: t = "0.2s",
  name: r = "slide-in-from-left"
} = {}) {
  return [D(`&.${r}-transition-leave-active`, {
    transition: `transform ${t} ${dS}`
  }), D(`&.${r}-transition-enter-active`, {
    transition: `transform ${e} ${uS}`
  }), D(`&.${r}-transition-enter-to`, {
    transform: "translateX(0)"
  }), D(`&.${r}-transition-enter-from`, {
    transform: "translateX(-100%)"
  }), D(`&.${r}-transition-leave-from`, {
    transform: "translateX(0)"
  }), D(`&.${r}-transition-leave-to`, {
    transform: "translateX(-100%)"
  })];
}
const {
  cubicBezierEaseIn: fS,
  cubicBezierEaseOut: hS
} = sn;
function vS({
  duration: e = "0.3s",
  leaveDuration: t = "0.2s",
  name: r = "slide-in-from-right"
} = {}) {
  return [D(`&.${r}-transition-leave-active`, {
    transition: `transform ${t} ${fS}`
  }), D(`&.${r}-transition-enter-active`, {
    transition: `transform ${e} ${hS}`
  }), D(`&.${r}-transition-enter-to`, {
    transform: "translateX(0)"
  }), D(`&.${r}-transition-enter-from`, {
    transform: "translateX(100%)"
  }), D(`&.${r}-transition-leave-from`, {
    transform: "translateX(0)"
  }), D(`&.${r}-transition-leave-to`, {
    transform: "translateX(100%)"
  })];
}
const {
  cubicBezierEaseIn: gS,
  cubicBezierEaseOut: pS
} = sn;
function mS({
  duration: e = "0.3s",
  leaveDuration: t = "0.2s",
  name: r = "slide-in-from-top"
} = {}) {
  return [D(`&.${r}-transition-leave-active`, {
    transition: `transform ${t} ${gS}`
  }), D(`&.${r}-transition-enter-active`, {
    transition: `transform ${e} ${pS}`
  }), D(`&.${r}-transition-enter-to`, {
    transform: "translateY(0)"
  }), D(`&.${r}-transition-enter-from`, {
    transform: "translateY(-100%)"
  }), D(`&.${r}-transition-leave-from`, {
    transform: "translateY(0)"
  }), D(`&.${r}-transition-leave-to`, {
    transform: "translateY(-100%)"
  })];
}
const bS = D([z("drawer", `
 word-break: break-word;
 line-height: var(--n-line-height);
 position: absolute;
 pointer-events: all;
 box-shadow: var(--n-box-shadow);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background-color: var(--n-color);
 color: var(--n-text-color);
 box-sizing: border-box;
 `, [vS(), cS(), mS(), sS(), N("unselectable", `
 user-select: none; 
 -webkit-user-select: none;
 `), N("native-scrollbar", [z("drawer-content-wrapper", `
 overflow: auto;
 height: 100%;
 `)]), M("resize-trigger", `
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `, [N("hover", `
 background-color: var(--n-resize-trigger-color-hover);
 `)]), z("drawer-content-wrapper", `
 box-sizing: border-box;
 `), z("drawer-content", `
 height: 100%;
 display: flex;
 flex-direction: column;
 `, [N("native-scrollbar", [z("drawer-body-content-wrapper", `
 height: 100%;
 overflow: auto;
 `)]), z("drawer-body", `
 flex: 1 0 0;
 overflow: hidden;
 `), z("drawer-body-content-wrapper", `
 box-sizing: border-box;
 padding: var(--n-body-padding);
 `), z("drawer-header", `
 font-weight: var(--n-title-font-weight);
 line-height: 1;
 font-size: var(--n-title-font-size);
 color: var(--n-title-text-color);
 padding: var(--n-header-padding);
 transition: border .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-divider-color);
 border-bottom: var(--n-header-border-bottom);
 display: flex;
 justify-content: space-between;
 align-items: center;
 `, [M("main", `
 flex: 1;
 `), M("close", `
 margin-left: 6px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), z("drawer-footer", `
 display: flex;
 justify-content: flex-end;
 border-top: var(--n-footer-border-top);
 transition: border .3s var(--n-bezier);
 padding: var(--n-footer-padding);
 `)]), N("right-placement", `
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `, [M("resize-trigger", `
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]), N("left-placement", `
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `, [M("resize-trigger", `
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]), N("top-placement", `
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `, [M("resize-trigger", `
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]), N("bottom-placement", `
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `, [M("resize-trigger", `
 width: 100%;
 height: 3px;
 top: 0;
 left: 0;
 transform: translateY(-1.5px);
 cursor: ns-resize;
 `)])]), D("body", [D(">", [z("drawer-container", `
 position: fixed;
 `)])]), z("drawer-container", `
 position: relative;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 `, [D("> *", `
 pointer-events: all;
 `)]), z("drawer-mask", `
 background-color: rgba(0, 0, 0, .3);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [N("invisible", `
 background-color: rgba(0, 0, 0, 0)
 `), Po({
  enterDuration: "0.2s",
  leaveDuration: "0.2s",
  enterCubicBezier: "var(--n-bezier-in)",
  leaveCubicBezier: "var(--n-bezier-out)"
})])]), xS = Object.assign(Object.assign({}, ve.props), {
  show: Boolean,
  width: [Number, String],
  height: [Number, String],
  placement: {
    type: String,
    default: "right"
  },
  maskClosable: {
    type: Boolean,
    default: !0
  },
  showMask: {
    type: [Boolean, String],
    default: !0
  },
  to: [String, Object],
  displayDirective: {
    type: String,
    default: "if"
  },
  nativeScrollbar: {
    type: Boolean,
    default: !0
  },
  zIndex: Number,
  onMaskClick: Function,
  scrollbarProps: Object,
  contentClass: String,
  contentStyle: [Object, String],
  trapFocus: {
    type: Boolean,
    default: !0
  },
  onEsc: Function,
  autoFocus: {
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
  },
  maxWidth: Number,
  maxHeight: Number,
  minWidth: Number,
  minHeight: Number,
  resizable: Boolean,
  defaultWidth: {
    type: [Number, String],
    default: 251
  },
  defaultHeight: {
    type: [Number, String],
    default: 251
  },
  onUpdateWidth: [Function, Array],
  onUpdateHeight: [Function, Array],
  "onUpdate:width": [Function, Array],
  "onUpdate:height": [Function, Array],
  "onUpdate:show": [Function, Array],
  onUpdateShow: [Function, Array],
  onAfterEnter: Function,
  onAfterLeave: Function,
  /** @deprecated */
  drawerStyle: [String, Object],
  drawerClass: String,
  target: null,
  onShow: Function,
  onHide: Function
}), yS = J({
  name: "Drawer",
  inheritAttrs: !1,
  props: xS,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.drawerStyle !== void 0 && Qe("drawer", "`drawer-style` is deprecated, please use `style` instead."), e.drawerClass !== void 0 && Qe("drawer", "`drawer-class` is deprecated, please use `class` instead."), e.target !== void 0 && Qe("drawer", "`target` is deprecated, please use `to` instead."), e.onShow !== void 0 && Qe("drawer", "`on-show` is deprecated, please use `on-update:show` instead."), e.onHide !== void 0 && Qe("drawer", "`on-hide` is deprecated, please use `on-update:show` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      namespaceRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = hr(), a = ve("Drawer", "-drawer", bS, oS, e, t), l = I(e.defaultWidth), s = I(e.defaultHeight), d = Pt(ie(e, "width"), l), u = Pt(ie(e, "height"), s), c = A(() => {
      const {
        placement: B
      } = e;
      return B === "top" || B === "bottom" ? "" : mt(d.value);
    }), v = A(() => {
      const {
        placement: B
      } = e;
      return B === "left" || B === "right" ? "" : mt(u.value);
    }), g = (B) => {
      const {
        onUpdateWidth: C,
        "onUpdate:width": S
      } = e;
      C && ne(C, B), S && ne(S, B), l.value = B;
    }, m = (B) => {
      const {
        onUpdateHeight: C,
        "onUpdate:width": S
      } = e;
      C && ne(C, B), S && ne(S, B), s.value = B;
    }, h = A(() => [{
      width: c.value,
      height: v.value
    }, e.drawerStyle || ""]);
    function p(B) {
      const {
        onMaskClick: C,
        maskClosable: S
      } = e;
      S && k(!1), C && C(B);
    }
    function x(B) {
      p(B);
    }
    const b = jd();
    function y(B) {
      var C;
      (C = e.onEsc) === null || C === void 0 || C.call(e), e.show && e.closeOnEsc && iu(B) && (b.value || k(!1));
    }
    function k(B) {
      const {
        onHide: C,
        onUpdateShow: S,
        "onUpdate:show": F
      } = e;
      S && ne(S, B), F && ne(F, B), C && !B && ne(C, B);
    }
    $e(qa, {
      isMountedRef: i,
      mergedThemeRef: a,
      mergedClsPrefixRef: t,
      doUpdateShow: k,
      doUpdateHeight: m,
      doUpdateWidth: g
    });
    const w = A(() => {
      const {
        common: {
          cubicBezierEaseInOut: B,
          cubicBezierEaseIn: C,
          cubicBezierEaseOut: S
        },
        self: {
          color: F,
          textColor: P,
          boxShadow: _,
          lineHeight: O,
          headerPadding: n,
          footerPadding: E,
          borderRadius: T,
          bodyPadding: H,
          titleFontSize: L,
          titleTextColor: U,
          titleFontWeight: te,
          headerBorderBottom: X,
          footerBorderTop: K,
          closeIconColor: j,
          closeIconColorHover: q,
          closeIconColorPressed: Y,
          closeColorHover: ae,
          closeColorPressed: le,
          closeIconSize: ce,
          closeSize: be,
          closeBorderRadius: G,
          resizableTriggerColorHover: ue
        }
      } = a.value;
      return {
        "--n-line-height": O,
        "--n-color": F,
        "--n-border-radius": T,
        "--n-text-color": P,
        "--n-box-shadow": _,
        "--n-bezier": B,
        "--n-bezier-out": S,
        "--n-bezier-in": C,
        "--n-header-padding": n,
        "--n-body-padding": H,
        "--n-footer-padding": E,
        "--n-title-text-color": U,
        "--n-title-font-size": L,
        "--n-title-font-weight": te,
        "--n-header-border-bottom": X,
        "--n-footer-border-top": K,
        "--n-close-icon-color": j,
        "--n-close-icon-color-hover": q,
        "--n-close-icon-color-pressed": Y,
        "--n-close-size": be,
        "--n-close-color-hover": ae,
        "--n-close-color-pressed": le,
        "--n-close-icon-size": ce,
        "--n-close-border-radius": G,
        "--n-resize-trigger-color-hover": ue
      };
    }), R = o ? Ye("drawer", void 0, w, e) : void 0;
    return {
      mergedClsPrefix: t,
      namespace: r,
      mergedBodyStyle: h,
      handleOutsideClick: x,
      handleMaskClick: p,
      handleEsc: y,
      mergedTheme: a,
      cssVars: o ? void 0 : w,
      themeClass: R == null ? void 0 : R.themeClass,
      onRender: R == null ? void 0 : R.onRender,
      isMounted: i
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return f(Ja, {
      to: this.to,
      show: this.show
    }, {
      default: () => {
        var t;
        return (t = this.onRender) === null || t === void 0 || t.call(this), nn(f("div", {
          class: [`${e}-drawer-container`, this.namespace, this.themeClass],
          style: this.cssVars,
          role: "none"
        }, this.showMask ? f(Tt, {
          name: "fade-in-transition",
          appear: this.isMounted
        }, {
          default: () => this.show ? f("div", {
            "aria-hidden": !0,
            class: [`${e}-drawer-mask`, this.showMask === "transparent" && `${e}-drawer-mask--invisible`],
            onClick: this.handleMaskClick
          }) : null
        }) : null, f(iS, Object.assign({}, this.$attrs, {
          class: [this.drawerClass, this.$attrs.class],
          style: [this.mergedBodyStyle, this.$attrs.style],
          blockScroll: this.blockScroll,
          contentStyle: this.contentStyle,
          contentClass: this.contentClass,
          placement: this.placement,
          scrollbarProps: this.scrollbarProps,
          show: this.show,
          displayDirective: this.displayDirective,
          nativeScrollbar: this.nativeScrollbar,
          onAfterEnter: this.onAfterEnter,
          onAfterLeave: this.onAfterLeave,
          trapFocus: this.trapFocus,
          autoFocus: this.autoFocus,
          resizable: this.resizable,
          maxHeight: this.maxHeight,
          minHeight: this.minHeight,
          maxWidth: this.maxWidth,
          minWidth: this.minWidth,
          showMask: this.showMask,
          onEsc: this.handleEsc,
          onClickoutside: this.handleOutsideClick
        }), this.$slots)), [[pi, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
}), CS = {
  title: String,
  headerClass: String,
  headerStyle: [Object, String],
  footerClass: String,
  footerStyle: [Object, String],
  bodyClass: String,
  bodyStyle: [Object, String],
  bodyContentClass: String,
  bodyContentStyle: [Object, String],
  nativeScrollbar: {
    type: Boolean,
    default: !0
  },
  scrollbarProps: Object,
  closable: Boolean
}, wS = J({
  name: "DrawerContent",
  props: CS,
  slots: Object,
  setup() {
    const e = pe(qa, null);
    e || Pn("drawer-content", "`n-drawer-content` must be placed inside `n-drawer`.");
    const {
      doUpdateShow: t
    } = e;
    function r() {
      t(!1);
    }
    return {
      handleCloseClick: r,
      mergedTheme: e.mergedThemeRef,
      mergedClsPrefix: e.mergedClsPrefixRef
    };
  },
  render() {
    const {
      title: e,
      mergedClsPrefix: t,
      nativeScrollbar: r,
      mergedTheme: o,
      bodyClass: i,
      bodyStyle: a,
      bodyContentClass: l,
      bodyContentStyle: s,
      headerClass: d,
      headerStyle: u,
      footerClass: c,
      footerStyle: v,
      scrollbarProps: g,
      closable: m,
      $slots: h
    } = this;
    return f("div", {
      role: "none",
      class: [`${t}-drawer-content`, r && `${t}-drawer-content--native-scrollbar`]
    }, h.header || e || m ? f("div", {
      class: [`${t}-drawer-header`, d],
      style: u,
      role: "none"
    }, f("div", {
      class: `${t}-drawer-header__main`,
      role: "heading",
      "aria-level": "1"
    }, h.header !== void 0 ? h.header() : e), m && f(Vr, {
      onClick: this.handleCloseClick,
      clsPrefix: t,
      class: `${t}-drawer-header__close`,
      absolute: !0
    })) : null, r ? f("div", {
      class: [`${t}-drawer-body`, i],
      style: a,
      role: "none"
    }, f("div", {
      class: [`${t}-drawer-body-content-wrapper`, l],
      style: s,
      role: "none"
    }, h)) : f(An, Object.assign({
      themeOverrides: o.peerOverrides.Scrollbar,
      theme: o.peers.Scrollbar
    }, g, {
      class: `${t}-drawer-body`,
      contentClass: [`${t}-drawer-body-content-wrapper`, l],
      contentStyle: s
    }), h), h.footer ? f("div", {
      class: [`${t}-drawer-footer`, c],
      style: v,
      role: "none"
    }, h.footer()) : null);
  }
}), SS = {
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
function BS(e) {
  const {
    heightSmall: t,
    heightMedium: r,
    heightLarge: o,
    textColor1: i,
    errorColor: a,
    warningColor: l,
    lineHeight: s,
    textColor3: d
  } = e;
  return Object.assign(Object.assign({}, SS), {
    blankHeightSmall: t,
    blankHeightMedium: r,
    blankHeightLarge: o,
    lineHeight: s,
    labelTextColor: i,
    asteriskColor: a,
    feedbackTextColorError: a,
    feedbackTextColorWarning: l,
    feedbackTextColor: d
  });
}
const Yc = {
  name: "Form",
  common: Ze,
  self: BS
}, kS = {
  iconSize: "22px"
};
function RS(e) {
  const {
    fontSize: t,
    warningColor: r
  } = e;
  return Object.assign(Object.assign({}, kS), {
    fontSize: t,
    iconColor: r
  });
}
const FS = {
  name: "Popconfirm",
  common: Ze,
  peers: {
    Button: wi,
    Popover: yr
  },
  self: RS
};
function PS(e) {
  const {
    opacityDisabled: t,
    heightTiny: r,
    heightSmall: o,
    heightMedium: i,
    heightLarge: a,
    heightHuge: l,
    primaryColor: s,
    fontSize: d
  } = e;
  return {
    fontSize: d,
    textColor: s,
    sizeTiny: r,
    sizeSmall: o,
    sizeMedium: i,
    sizeLarge: a,
    sizeHuge: l,
    color: s,
    opacitySpinning: t
  };
}
const zS = {
  name: "Spin",
  common: Ze,
  self: PS
}, $S = {
  buttonHeightSmall: "14px",
  buttonHeightMedium: "18px",
  buttonHeightLarge: "22px",
  buttonWidthSmall: "14px",
  buttonWidthMedium: "18px",
  buttonWidthLarge: "22px",
  buttonWidthPressedSmall: "20px",
  buttonWidthPressedMedium: "24px",
  buttonWidthPressedLarge: "28px",
  railHeightSmall: "18px",
  railHeightMedium: "22px",
  railHeightLarge: "26px",
  railWidthSmall: "32px",
  railWidthMedium: "40px",
  railWidthLarge: "48px"
};
function AS(e) {
  const {
    primaryColor: t,
    opacityDisabled: r,
    borderRadius: o,
    textColor3: i
  } = e;
  return Object.assign(Object.assign({}, $S), {
    iconColor: i,
    textColor: "white",
    loadingColor: t,
    opacityDisabled: r,
    railColor: "rgba(0, 0, 0, .14)",
    railColorActive: t,
    buttonBoxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.3), inset 0 0 1px 0 rgba(0, 0, 0, 0.05)",
    buttonColor: "#FFF",
    railBorderRadiusSmall: o,
    railBorderRadiusMedium: o,
    railBorderRadiusLarge: o,
    buttonBorderRadiusSmall: o,
    buttonBorderRadiusMedium: o,
    buttonBorderRadiusLarge: o,
    boxShadowFocus: `0 0 0 2px ${Ee(t, {
      alpha: 0.2
    })}`
  });
}
const DS = {
  name: "Switch",
  common: Ze,
  self: AS
}, $o = "n-form", Zc = "n-form-item-insts", ES = z("form", [N("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [z("form-item", {
  width: "auto",
  marginRight: "18px"
}, [D("&:last-child", {
  marginRight: 0
})])])]);
var TS = function(e, t, r, o) {
  function i(a) {
    return a instanceof r ? a : new r(function(l) {
      l(a);
    });
  }
  return new (r || (r = Promise))(function(a, l) {
    function s(c) {
      try {
        u(o.next(c));
      } catch (v) {
        l(v);
      }
    }
    function d(c) {
      try {
        u(o.throw(c));
      } catch (v) {
        l(v);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, d);
    }
    u((o = o.apply(e, t || [])).next());
  });
};
const OS = Object.assign(Object.assign({}, ve.props), {
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
}), MS = J({
  name: "Form",
  props: OS,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e);
    ve("Form", "-form", ES, Yc, e, t);
    const r = {}, o = I(void 0), i = (d) => {
      const u = o.value;
      (u === void 0 || d >= u) && (o.value = d);
    };
    function a(d) {
      return TS(this, arguments, void 0, function* (u, c = () => !0) {
        return yield new Promise((v, g) => {
          const m = [];
          for (const h of _n(r)) {
            const p = r[h];
            for (const x of p)
              x.path && m.push(x.internalValidate(null, c));
          }
          Promise.all(m).then((h) => {
            const p = h.some((y) => !y.valid), x = [], b = [];
            h.forEach((y) => {
              var k, w;
              !((k = y.errors) === null || k === void 0) && k.length && x.push(y.errors), !((w = y.warnings) === null || w === void 0) && w.length && b.push(y.warnings);
            }), u && u(x.length ? x : void 0, {
              warnings: b.length ? b : void 0
            }), p ? g(x.length ? x : void 0) : v({
              warnings: b.length ? b : void 0
            });
          });
        });
      });
    }
    function l() {
      for (const d of _n(r)) {
        const u = r[d];
        for (const c of u)
          c.restoreValidation();
      }
    }
    return $e($o, {
      props: e,
      maxChildLabelWidthRef: o,
      deriveMaxChildLabelWidth: i
    }), $e(Zc, {
      formItems: r
    }), Object.assign({
      validate: a,
      restoreValidation: l
    }, {
      mergedClsPrefix: t
    });
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return f("form", {
      class: [`${e}-form`, this.inline && `${e}-form--inline`],
      onSubmit: this.onSubmit
    }, this.$slots);
  }
});
function tr() {
  return tr = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, tr.apply(this, arguments);
}
function IS(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, wo(e, t);
}
function $a(e) {
  return $a = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, $a(e);
}
function wo(e, t) {
  return wo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, wo(e, t);
}
function LS() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Zo(e, t, r) {
  return LS() ? Zo = Reflect.construct.bind() : Zo = function(i, a, l) {
    var s = [null];
    s.push.apply(s, a);
    var d = Function.bind.apply(i, s), u = new d();
    return l && wo(u, l.prototype), u;
  }, Zo.apply(null, arguments);
}
function NS(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Aa(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Aa = function(o) {
    if (o === null || !NS(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(o)) return t.get(o);
      t.set(o, i);
    }
    function i() {
      return Zo(o, arguments, $a(this).constructor);
    }
    return i.prototype = Object.create(o.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), wo(i, o);
  }, Aa(e);
}
var HS = /%[sdj%]/g, Jc = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Jc = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(o) {
    return typeof o == "string";
  }) && console.warn(t, r);
});
function Da(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(r) {
    var o = r.field;
    t[o] = t[o] || [], t[o].push(r);
  }), t;
}
function en(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  var i = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var l = e.replace(HS, function(s) {
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
function jS(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Rt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || jS(t) && typeof e == "string" && !e);
}
function _S(e, t, r) {
  var o = [], i = 0, a = e.length;
  function l(s) {
    o.push.apply(o, s || []), i++, i === a && r(o);
  }
  e.forEach(function(s) {
    t(s, l);
  });
}
function vd(e, t, r) {
  var o = 0, i = e.length;
  function a(l) {
    if (l && l.length) {
      r(l);
      return;
    }
    var s = o;
    o = o + 1, s < i ? t(e[s], a) : r([]);
  }
  a([]);
}
function WS(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var gd = /* @__PURE__ */ function(e) {
  IS(t, e);
  function t(r, o) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = r, i.fields = o, i;
  }
  return t;
}(/* @__PURE__ */ Aa(Error));
function VS(e, t, r, o, i) {
  if (t.first) {
    var a = new Promise(function(g, m) {
      var h = function(b) {
        return o(b), b.length ? m(new gd(b, Da(b))) : g(i);
      }, p = WS(e);
      vd(p, r, h);
    });
    return a.catch(function(g) {
      return g;
    }), a;
  }
  var l = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), d = s.length, u = 0, c = [], v = new Promise(function(g, m) {
    var h = function(x) {
      if (c.push.apply(c, x), u++, u === d)
        return o(c), c.length ? m(new gd(c, Da(c))) : g(i);
    };
    s.length || (o(c), g(i)), s.forEach(function(p) {
      var x = e[p];
      l.indexOf(p) !== -1 ? vd(x, r, h) : _S(x, r, h);
    });
  });
  return v.catch(function(g) {
    return g;
  }), v;
}
function US(e) {
  return !!(e && e.message !== void 0);
}
function KS(e, t) {
  for (var r = e, o = 0; o < t.length; o++) {
    if (r == null)
      return r;
    r = r[t[o]];
  }
  return r;
}
function pd(e, t) {
  return function(r) {
    var o;
    return e.fullFields ? o = KS(t, e.fullFields) : o = t[r.field || e.fullField], US(r) ? (r.field = r.field || e.fullField, r.fieldValue = o, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: o,
      field: r.field || e.fullField
    };
  };
}
function md(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = t[r];
        typeof o == "object" && typeof e[r] == "object" ? e[r] = tr({}, e[r], o) : e[r] = o;
      }
  }
  return e;
}
var Qc = function(t, r, o, i, a, l) {
  t.required && (!o.hasOwnProperty(t.field) || Rt(r, l || t.type)) && i.push(en(a.messages.required, t.fullField));
}, qS = function(t, r, o, i, a) {
  (/^\s+$/.test(r) || r === "") && i.push(en(a.messages.whitespace, t.fullField));
}, Go, GS = function() {
  if (Go)
    return Go;
  var e = "[a-fA-F\\d:]", t = function(w) {
    return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + r + "$)|(?:^" + i + "$)"), l = new RegExp("^" + r + "$"), s = new RegExp("^" + i + "$"), d = function(w) {
    return w && w.exact ? a : new RegExp("(?:" + t(w) + r + t(w) + ")|(?:" + t(w) + i + t(w) + ")", "g");
  };
  d.v4 = function(k) {
    return k && k.exact ? l : new RegExp("" + t(k) + r + t(k), "g");
  }, d.v6 = function(k) {
    return k && k.exact ? s : new RegExp("" + t(k) + i + t(k), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", v = d.v4().source, g = d.v6().source, m = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", x = "(?::\\d{2,5})?", b = '(?:[/?#][^\\s"]*)?', y = "(?:" + u + "|www\\.)" + c + "(?:localhost|" + v + "|" + g + "|" + m + h + p + ")" + x + b;
  return Go = new RegExp("(?:^" + y + "$)", "i"), Go;
}, bd = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, ro = {
  integer: function(t) {
    return ro.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return ro.number(t) && !ro.integer(t);
  },
  array: function(t) {
    return Array.isArray(t);
  },
  regexp: function(t) {
    if (t instanceof RegExp)
      return !0;
    try {
      return !!new RegExp(t);
    } catch {
      return !1;
    }
  },
  date: function(t) {
    return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear == "function" && !isNaN(t.getTime());
  },
  number: function(t) {
    return isNaN(t) ? !1 : typeof t == "number";
  },
  object: function(t) {
    return typeof t == "object" && !ro.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(bd.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(GS());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(bd.hex);
  }
}, XS = function(t, r, o, i, a) {
  if (t.required && r === void 0) {
    Qc(t, r, o, i, a);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  l.indexOf(s) > -1 ? ro[s](r) || i.push(en(a.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && i.push(en(a.messages.types[s], t.fullField, t.type));
}, YS = function(t, r, o, i, a) {
  var l = typeof t.len == "number", s = typeof t.min == "number", d = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, v = null, g = typeof r == "number", m = typeof r == "string", h = Array.isArray(r);
  if (g ? v = "number" : m ? v = "string" : h && (v = "array"), !v)
    return !1;
  h && (c = r.length), m && (c = r.replace(u, "_").length), l ? c !== t.len && i.push(en(a.messages[v].len, t.fullField, t.len)) : s && !d && c < t.min ? i.push(en(a.messages[v].min, t.fullField, t.min)) : d && !s && c > t.max ? i.push(en(a.messages[v].max, t.fullField, t.max)) : s && d && (c < t.min || c > t.max) && i.push(en(a.messages[v].range, t.fullField, t.min, t.max));
}, Rr = "enum", ZS = function(t, r, o, i, a) {
  t[Rr] = Array.isArray(t[Rr]) ? t[Rr] : [], t[Rr].indexOf(r) === -1 && i.push(en(a.messages[Rr], t.fullField, t[Rr].join(", ")));
}, JS = function(t, r, o, i, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || i.push(en(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var l = new RegExp(t.pattern);
      l.test(r) || i.push(en(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, Me = {
  required: Qc,
  whitespace: qS,
  type: XS,
  range: YS,
  enum: ZS,
  pattern: JS
}, QS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Rt(r, "string") && !t.required)
      return o();
    Me.required(t, r, i, l, a, "string"), Rt(r, "string") || (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a), Me.pattern(t, r, i, l, a), t.whitespace === !0 && Me.whitespace(t, r, i, l, a));
  }
  o(l);
}, e2 = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Rt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && Me.type(t, r, i, l, a);
  }
  o(l);
}, t2 = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), Rt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a));
  }
  o(l);
}, n2 = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Rt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && Me.type(t, r, i, l, a);
  }
  o(l);
}, r2 = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Rt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), Rt(r) || Me.type(t, r, i, l, a);
  }
  o(l);
}, o2 = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Rt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a));
  }
  o(l);
}, i2 = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Rt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a));
  }
  o(l);
}, a2 = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return o();
    Me.required(t, r, i, l, a, "array"), r != null && (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a));
  }
  o(l);
}, l2 = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Rt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && Me.type(t, r, i, l, a);
  }
  o(l);
}, s2 = "enum", d2 = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Rt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && Me[s2](t, r, i, l, a);
  }
  o(l);
}, u2 = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Rt(r, "string") && !t.required)
      return o();
    Me.required(t, r, i, l, a), Rt(r, "string") || Me.pattern(t, r, i, l, a);
  }
  o(l);
}, c2 = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Rt(r, "date") && !t.required)
      return o();
    if (Me.required(t, r, i, l, a), !Rt(r, "date")) {
      var d;
      r instanceof Date ? d = r : d = new Date(r), Me.type(t, d, i, l, a), d && Me.range(t, d.getTime(), i, l, a);
    }
  }
  o(l);
}, f2 = function(t, r, o, i, a) {
  var l = [], s = Array.isArray(r) ? "array" : typeof r;
  Me.required(t, r, i, l, a, s), o(l);
}, aa = function(t, r, o, i, a) {
  var l = t.type, s = [], d = t.required || !t.required && i.hasOwnProperty(t.field);
  if (d) {
    if (Rt(r, l) && !t.required)
      return o();
    Me.required(t, r, i, s, a, l), Rt(r, l) || Me.type(t, r, i, s, a);
  }
  o(s);
}, h2 = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Rt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a);
  }
  o(l);
}, ho = {
  string: QS,
  method: e2,
  number: t2,
  boolean: n2,
  regexp: r2,
  integer: o2,
  float: i2,
  array: a2,
  object: l2,
  enum: d2,
  pattern: u2,
  date: c2,
  url: aa,
  hex: aa,
  email: aa,
  required: f2,
  any: h2
};
function Ea() {
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
      var t = JSON.parse(JSON.stringify(this));
      return t.clone = this.clone, t;
    }
  };
}
var Ta = Ea(), Ir = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = Ta, this.define(r);
  }
  var t = e.prototype;
  return t.define = function(o) {
    var i = this;
    if (!o)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof o != "object" || Array.isArray(o))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(o).forEach(function(a) {
      var l = o[a];
      i.rules[a] = Array.isArray(l) ? l : [l];
    });
  }, t.messages = function(o) {
    return o && (this._messages = md(Ea(), o)), this._messages;
  }, t.validate = function(o, i, a) {
    var l = this;
    i === void 0 && (i = {}), a === void 0 && (a = function() {
    });
    var s = o, d = i, u = a;
    if (typeof d == "function" && (u = d, d = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function c(p) {
      var x = [], b = {};
      function y(w) {
        if (Array.isArray(w)) {
          var R;
          x = (R = x).concat.apply(R, w);
        } else
          x.push(w);
      }
      for (var k = 0; k < p.length; k++)
        y(p[k]);
      x.length ? (b = Da(x), u(x, b)) : u(null, s);
    }
    if (d.messages) {
      var v = this.messages();
      v === Ta && (v = Ea()), md(v, d.messages), d.messages = v;
    } else
      d.messages = this.messages();
    var g = {}, m = d.keys || Object.keys(this.rules);
    m.forEach(function(p) {
      var x = l.rules[p], b = s[p];
      x.forEach(function(y) {
        var k = y;
        typeof k.transform == "function" && (s === o && (s = tr({}, s)), b = s[p] = k.transform(b)), typeof k == "function" ? k = {
          validator: k
        } : k = tr({}, k), k.validator = l.getValidationMethod(k), k.validator && (k.field = p, k.fullField = k.fullField || p, k.type = l.getType(k), g[p] = g[p] || [], g[p].push({
          rule: k,
          value: b,
          source: s,
          field: p
        }));
      });
    });
    var h = {};
    return VS(g, d, function(p, x) {
      var b = p.rule, y = (b.type === "object" || b.type === "array") && (typeof b.fields == "object" || typeof b.defaultField == "object");
      y = y && (b.required || !b.required && p.value), b.field = p.field;
      function k(B, C) {
        return tr({}, C, {
          fullField: b.fullField + "." + B,
          fullFields: b.fullFields ? [].concat(b.fullFields, [B]) : [B]
        });
      }
      function w(B) {
        B === void 0 && (B = []);
        var C = Array.isArray(B) ? B : [B];
        !d.suppressWarning && C.length && e.warning("async-validator:", C), C.length && b.message !== void 0 && (C = [].concat(b.message));
        var S = C.map(pd(b, s));
        if (d.first && S.length)
          return h[b.field] = 1, x(S);
        if (!y)
          x(S);
        else {
          if (b.required && !p.value)
            return b.message !== void 0 ? S = [].concat(b.message).map(pd(b, s)) : d.error && (S = [d.error(b, en(d.messages.required, b.field))]), x(S);
          var F = {};
          b.defaultField && Object.keys(p.value).map(function(O) {
            F[O] = b.defaultField;
          }), F = tr({}, F, p.rule.fields);
          var P = {};
          Object.keys(F).forEach(function(O) {
            var n = F[O], E = Array.isArray(n) ? n : [n];
            P[O] = E.map(k.bind(null, O));
          });
          var _ = new e(P);
          _.messages(d.messages), p.rule.options && (p.rule.options.messages = d.messages, p.rule.options.error = d.error), _.validate(p.value, p.rule.options || d, function(O) {
            var n = [];
            S && S.length && n.push.apply(n, S), O && O.length && n.push.apply(n, O), x(n.length ? n : null);
          });
        }
      }
      var R;
      if (b.asyncValidator)
        R = b.asyncValidator(b, p.value, w, p.source, d);
      else if (b.validator) {
        try {
          R = b.validator(b, p.value, w, p.source, d);
        } catch (B) {
          console.error == null || console.error(B), d.suppressValidatorError || setTimeout(function() {
            throw B;
          }, 0), w(B.message);
        }
        R === !0 ? w() : R === !1 ? w(typeof b.message == "function" ? b.message(b.fullField || b.field) : b.message || (b.fullField || b.field) + " fails") : R instanceof Array ? w(R) : R instanceof Error && w(R.message);
      }
      R && R.then && R.then(function() {
        return w();
      }, function(B) {
        return w(B);
      });
    }, function(p) {
      c(p);
    }, s);
  }, t.getType = function(o) {
    if (o.type === void 0 && o.pattern instanceof RegExp && (o.type = "pattern"), typeof o.validator != "function" && o.type && !ho.hasOwnProperty(o.type))
      throw new Error(en("Unknown rule type %s", o.type));
    return o.type || "string";
  }, t.getValidationMethod = function(o) {
    if (typeof o.validator == "function")
      return o.validator;
    var i = Object.keys(o), a = i.indexOf("message");
    return a !== -1 && i.splice(a, 1), i.length === 1 && i[0] === "required" ? ho.required : ho[this.getType(o)] || void 0;
  }, e;
}();
Ir.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  ho[t] = r;
};
Ir.warning = Jc;
Ir.messages = Ta;
Ir.validators = ho;
const {
  cubicBezierEaseInOut: xd
} = sn;
function v2({
  name: e = "fade-down",
  fromOffset: t = "-4px",
  enterDuration: r = ".3s",
  leaveDuration: o = ".3s",
  enterCubicBezier: i = xd,
  leaveCubicBezier: a = xd
} = {}) {
  return [D(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0,
    transform: `translateY(${t})`
  }), D(`&.${e}-transition-enter-to, &.${e}-transition-leave-from`, {
    opacity: 1,
    transform: "translateY(0)"
  }), D(`&.${e}-transition-leave-active`, {
    transition: `opacity ${o} ${a}, transform ${o} ${a}`
  }), D(`&.${e}-transition-enter-active`, {
    transition: `opacity ${r} ${i}, transform ${r} ${i}`
  })];
}
const g2 = z("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [z("form-item-label", `
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
 `, [M("asterisk", `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `), M("asterisk-placeholder", `
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]), z("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), N("auto-label-width", [z("form-item-label", "white-space: nowrap;")]), N("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [z("form-item-label", `
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `, [N("reverse-columns-space", `
 grid-template-columns: auto 1fr;
 `), N("left-mark", `
 grid-template-areas:
 "mark text"
 ". text";
 `), N("right-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), N("right-hanging-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), M("text", `
 grid-area: text; 
 `), M("asterisk", `
 grid-area: mark; 
 align-self: end;
 `)])]), N("top-labelled", `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [N("no-label", `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), z("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), z("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), z("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [D("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), z("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [N("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), N("error", {
  color: "var(--n-feedback-text-color-error)"
}), v2({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
function p2(e) {
  const t = pe($o, null);
  return {
    mergedSize: A(() => e.size !== void 0 ? e.size : (t == null ? void 0 : t.props.size) !== void 0 ? t.props.size : "medium")
  };
}
function m2(e) {
  const t = pe($o, null), r = A(() => {
    const {
      labelPlacement: h
    } = e;
    return h !== void 0 ? h : t != null && t.props.labelPlacement ? t.props.labelPlacement : "top";
  }), o = A(() => r.value === "left" && (e.labelWidth === "auto" || (t == null ? void 0 : t.props.labelWidth) === "auto")), i = A(() => {
    if (r.value === "top") return;
    const {
      labelWidth: h
    } = e;
    if (h !== void 0 && h !== "auto")
      return mt(h);
    if (o.value) {
      const p = t == null ? void 0 : t.maxChildLabelWidthRef.value;
      return p !== void 0 ? mt(p) : void 0;
    }
    if ((t == null ? void 0 : t.props.labelWidth) !== void 0)
      return mt(t.props.labelWidth);
  }), a = A(() => {
    const {
      labelAlign: h
    } = e;
    if (h) return h;
    if (t != null && t.props.labelAlign) return t.props.labelAlign;
  }), l = A(() => {
    var h;
    return [(h = e.labelProps) === null || h === void 0 ? void 0 : h.style, e.labelStyle, {
      width: i.value
    }];
  }), s = A(() => {
    const {
      showRequireMark: h
    } = e;
    return h !== void 0 ? h : t == null ? void 0 : t.props.showRequireMark;
  }), d = A(() => {
    const {
      requireMarkPlacement: h
    } = e;
    return h !== void 0 ? h : (t == null ? void 0 : t.props.requireMarkPlacement) || "right";
  }), u = I(!1), c = I(!1), v = A(() => {
    const {
      validationStatus: h
    } = e;
    if (h !== void 0) return h;
    if (u.value) return "error";
    if (c.value) return "warning";
  }), g = A(() => {
    const {
      showFeedback: h
    } = e;
    return h !== void 0 ? h : (t == null ? void 0 : t.props.showFeedback) !== void 0 ? t.props.showFeedback : !0;
  }), m = A(() => {
    const {
      showLabel: h
    } = e;
    return h !== void 0 ? h : (t == null ? void 0 : t.props.showLabel) !== void 0 ? t.props.showLabel : !0;
  });
  return {
    validationErrored: u,
    validationWarned: c,
    mergedLabelStyle: l,
    mergedLabelPlacement: r,
    mergedLabelAlign: a,
    mergedShowRequireMark: s,
    mergedRequireMarkPlacement: d,
    mergedValidationStatus: v,
    mergedShowFeedback: g,
    mergedShowLabel: m,
    isAutoLabelWidth: o
  };
}
function b2(e) {
  const t = pe($o, null), r = A(() => {
    const {
      rulePath: l
    } = e;
    if (l !== void 0) return l;
    const {
      path: s
    } = e;
    if (s !== void 0) return s;
  }), o = A(() => {
    const l = [], {
      rule: s
    } = e;
    if (s !== void 0 && (Array.isArray(s) ? l.push(...s) : l.push(s)), t) {
      const {
        rules: d
      } = t.props, {
        value: u
      } = r;
      if (d !== void 0 && u !== void 0) {
        const c = yo(d, u);
        c !== void 0 && (Array.isArray(c) ? l.push(...c) : l.push(c));
      }
    }
    return l;
  }), i = A(() => o.value.some((l) => l.required)), a = A(() => i.value || e.required);
  return {
    mergedRules: o,
    mergedRequired: a
  };
}
var yd = function(e, t, r, o) {
  function i(a) {
    return a instanceof r ? a : new r(function(l) {
      l(a);
    });
  }
  return new (r || (r = Promise))(function(a, l) {
    function s(c) {
      try {
        u(o.next(c));
      } catch (v) {
        l(v);
      }
    }
    function d(c) {
      try {
        u(o.throw(c));
      } catch (v) {
        l(v);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, d);
    }
    u((o = o.apply(e, t || [])).next());
  });
};
const x2 = Object.assign(Object.assign({}, ve.props), {
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
function Cd(e, t) {
  return (...r) => {
    try {
      const o = e(...r);
      return !t && (typeof o == "boolean" || o instanceof Error || Array.isArray(o)) || o != null && o.then ? o : (o === void 0 || zt("form-item/validate", `You return a ${typeof o} typed value in the validator method, which is not recommended. Please use ${t ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`), !0);
    } catch (o) {
      zt("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(o);
      return;
    }
  };
}
const wd = J({
  name: "FormItem",
  props: x2,
  setup(e) {
    zh(Zc, "formItems", ie(e, "path"));
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = pe($o, null), i = p2(e), a = m2(e), {
      validationErrored: l,
      validationWarned: s
    } = a, {
      mergedRequired: d,
      mergedRules: u
    } = b2(e), {
      mergedSize: c
    } = i, {
      mergedLabelPlacement: v,
      mergedLabelAlign: g,
      mergedRequireMarkPlacement: m
    } = a, h = I([]), p = I(xn()), x = o ? ie(o.props, "disabled") : I(!1), b = ve("Form", "-form-item", g2, Yc, e, t);
    Ie(ie(e, "path"), () => {
      e.ignorePathChange || y();
    });
    function y() {
      h.value = [], l.value = !1, s.value = !1, e.feedback && (p.value = xn());
    }
    const k = (...E) => yd(this, [...E], void 0, function* (T = null, H = () => !0, L = {
      suppressWarning: !0
    }) {
      const {
        path: U
      } = e;
      L ? L.first || (L.first = e.first) : L = {};
      const {
        value: te
      } = u, X = o ? yo(o.props.model, U || "") : void 0, K = {}, j = {}, q = (T ? te.filter((xe) => Array.isArray(xe.trigger) ? xe.trigger.includes(T) : xe.trigger === T) : te).filter(H).map((xe, Pe) => {
        const ze = Object.assign({}, xe);
        if (ze.validator && (ze.validator = Cd(ze.validator, !1)), ze.asyncValidator && (ze.asyncValidator = Cd(ze.asyncValidator, !0)), ze.renderMessage) {
          const dt = `__renderMessage__${Pe}`;
          j[dt] = ze.message, ze.message = dt, K[dt] = ze.renderMessage;
        }
        return ze;
      }), Y = q.filter((xe) => xe.level !== "warning"), ae = q.filter((xe) => xe.level === "warning"), le = {
        valid: !0,
        errors: void 0,
        warnings: void 0
      };
      if (!q.length) return le;
      const ce = U ?? "__n_no_path__", be = new Ir({
        [ce]: Y
      }), G = new Ir({
        [ce]: ae
      }), {
        validateMessages: ue
      } = (o == null ? void 0 : o.props) || {};
      ue && (be.messages(ue), G.messages(ue));
      const Fe = (xe) => {
        h.value = xe.map((Pe) => {
          const ze = (Pe == null ? void 0 : Pe.message) || "";
          return {
            key: ze,
            render: () => ze.startsWith("__renderMessage__") ? K[ze]() : ze
          };
        }), xe.forEach((Pe) => {
          var ze;
          !((ze = Pe.message) === null || ze === void 0) && ze.startsWith("__renderMessage__") && (Pe.message = j[Pe.message]);
        });
      };
      if (Y.length) {
        const xe = yield new Promise((Pe) => {
          be.validate({
            [ce]: X
          }, L, Pe);
        });
        xe != null && xe.length && (le.valid = !1, le.errors = xe, Fe(xe));
      }
      if (ae.length && !le.errors) {
        const xe = yield new Promise((Pe) => {
          G.validate({
            [ce]: X
          }, L, Pe);
        });
        xe != null && xe.length && (Fe(xe), le.warnings = xe);
      }
      return !le.errors && !le.warnings ? y() : (l.value = !!le.errors, s.value = !!le.warnings), le;
    });
    function w() {
      k("blur");
    }
    function R() {
      k("change");
    }
    function B() {
      k("focus");
    }
    function C() {
      k("input");
    }
    function S(E, T) {
      return yd(this, void 0, void 0, function* () {
        let H, L, U, te;
        return typeof E == "string" ? (H = E, L = T) : E !== null && typeof E == "object" && (H = E.trigger, L = E.callback, U = E.shouldRuleBeApplied, te = E.options), yield new Promise((X, K) => {
          k(H, U, te).then(({
            valid: j,
            errors: q,
            warnings: Y
          }) => {
            j ? (L && L(void 0, {
              warnings: Y
            }), X({
              warnings: Y
            })) : (L && L(q, {
              warnings: Y
            }), K(q));
          });
        });
      });
    }
    $e(va, {
      path: ie(e, "path"),
      disabled: x,
      mergedSize: i.mergedSize,
      mergedValidationStatus: a.mergedValidationStatus,
      restoreValidation: y,
      handleContentBlur: w,
      handleContentChange: R,
      handleContentFocus: B,
      handleContentInput: C
    });
    const F = {
      validate: S,
      restoreValidation: y,
      internalValidate: k
    }, P = I(null);
    $t(() => {
      if (!a.isAutoLabelWidth.value) return;
      const E = P.value;
      if (E !== null) {
        const T = E.style.whiteSpace;
        E.style.whiteSpace = "nowrap", E.style.width = "", o == null || o.deriveMaxChildLabelWidth(Number(getComputedStyle(E).width.slice(0, -2))), E.style.whiteSpace = T;
      }
    });
    const _ = A(() => {
      var E;
      const {
        value: T
      } = c, {
        value: H
      } = v, L = H === "top" ? "vertical" : "horizontal", {
        common: {
          cubicBezierEaseInOut: U
        },
        self: {
          labelTextColor: te,
          asteriskColor: X,
          lineHeight: K,
          feedbackTextColor: j,
          feedbackTextColorWarning: q,
          feedbackTextColorError: Y,
          feedbackPadding: ae,
          labelFontWeight: le,
          [Z("labelHeight", T)]: ce,
          [Z("blankHeight", T)]: be,
          [Z("feedbackFontSize", T)]: G,
          [Z("feedbackHeight", T)]: ue,
          [Z("labelPadding", L)]: Fe,
          [Z("labelTextAlign", L)]: xe,
          [Z(Z("labelFontSize", H), T)]: Pe
        }
      } = b.value;
      let ze = (E = g.value) !== null && E !== void 0 ? E : xe;
      return H === "top" && (ze = ze === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": U,
        "--n-line-height": K,
        "--n-blank-height": be,
        "--n-label-font-size": Pe,
        "--n-label-text-align": ze,
        "--n-label-height": ce,
        "--n-label-padding": Fe,
        "--n-label-font-weight": le,
        "--n-asterisk-color": X,
        "--n-label-text-color": te,
        "--n-feedback-padding": ae,
        "--n-feedback-font-size": G,
        "--n-feedback-height": ue,
        "--n-feedback-text-color": j,
        "--n-feedback-text-color-warning": q,
        "--n-feedback-text-color-error": Y
      };
    }), O = r ? Ye("form-item", A(() => {
      var E;
      return `${c.value[0]}${v.value[0]}${((E = g.value) === null || E === void 0 ? void 0 : E[0]) || ""}`;
    }), _, e) : void 0, n = A(() => v.value === "left" && m.value === "left" && g.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: P,
      mergedClsPrefix: t,
      mergedRequired: d,
      feedbackId: p,
      renderExplains: h,
      reverseColSpace: n
    }, a), i), F), {
      cssVars: r ? void 0 : _,
      themeClass: O == null ? void 0 : O.themeClass,
      onRender: O == null ? void 0 : O.onRender
    });
  },
  render() {
    const {
      $slots: e,
      mergedClsPrefix: t,
      mergedShowLabel: r,
      mergedShowRequireMark: o,
      mergedRequireMarkPlacement: i,
      onRender: a
    } = this, l = o !== void 0 ? o : this.mergedRequired;
    a == null || a();
    const s = () => {
      const d = this.$slots.label ? this.$slots.label() : this.label;
      if (!d) return null;
      const u = f("span", {
        class: `${t}-form-item-label__text`
      }, d), c = l ? f("span", {
        class: `${t}-form-item-label__asterisk`
      }, i !== "left" ? " *" : "* ") : i === "right-hanging" && f("span", {
        class: `${t}-form-item-label__asterisk-placeholder`
      }, " *"), {
        labelProps: v
      } = this;
      return f("label", Object.assign({}, v, {
        class: [v == null ? void 0 : v.class, `${t}-form-item-label`, `${t}-form-item-label--${i}-mark`, this.reverseColSpace && `${t}-form-item-label--reverse-columns-space`],
        style: this.mergedLabelStyle,
        ref: "labelElementRef"
      }), i === "left" ? [c, u] : [u, c]);
    };
    return f("div", {
      class: [`${t}-form-item`, this.themeClass, `${t}-form-item--${this.mergedSize}-size`, `${t}-form-item--${this.mergedLabelPlacement}-labelled`, this.isAutoLabelWidth && `${t}-form-item--auto-label-width`, !r && `${t}-form-item--no-label`],
      style: this.cssVars
    }, r && s(), f("div", {
      class: [`${t}-form-item-blank`, this.mergedValidationStatus && `${t}-form-item-blank--${this.mergedValidationStatus}`]
    }, e), this.mergedShowFeedback ? f("div", {
      key: this.feedbackId,
      style: this.feedbackStyle,
      class: [`${t}-form-item-feedback-wrapper`, this.feedbackClass]
    }, f(Tt, {
      name: "fade-down-transition",
      mode: "out-in"
    }, {
      default: () => {
        const {
          mergedValidationStatus: d
        } = this;
        return We(e.feedback, (u) => {
          var c;
          const {
            feedback: v
          } = this, g = u || v ? f("div", {
            key: "__feedback__",
            class: `${t}-form-item-feedback__line`
          }, u || v) : this.renderExplains.length ? (c = this.renderExplains) === null || c === void 0 ? void 0 : c.map(({
            key: m,
            render: h
          }) => f("div", {
            key: m,
            class: `${t}-form-item-feedback__line`
          }, h())) : null;
          return g ? d === "warning" ? f("div", {
            key: "controlled-warning",
            class: `${t}-form-item-feedback ${t}-form-item-feedback--warning`
          }, g) : d === "error" ? f("div", {
            key: "controlled-error",
            class: `${t}-form-item-feedback ${t}-form-item-feedback--error`
          }, g) : d === "success" ? f("div", {
            key: "controlled-success",
            class: `${t}-form-item-feedback ${t}-form-item-feedback--success`
          }, g) : f("div", {
            key: "controlled-default",
            class: `${t}-form-item-feedback`
          }, g) : null;
        });
      }
    })) : null);
  }
});
function y2(e) {
  const {
    primaryColor: t,
    baseColor: r
  } = e;
  return {
    color: t,
    iconColor: r
  };
}
const C2 = {
  name: "IconWrapper",
  common: Ze,
  self: y2
}, w2 = z("icon-wrapper", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`), S2 = Object.assign(Object.assign({}, ve.props), {
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
}), B2 = J({
  name: "IconWrapper",
  props: S2,
  setup(e, {
    slots: t
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("IconWrapper", "-icon-wrapper", w2, C2, e, r), a = A(() => {
      const {
        common: {
          cubicBezierEaseInOut: s
        },
        self: {
          color: d,
          iconColor: u
        }
      } = i.value;
      return {
        "--n-bezier": s,
        "--n-color": d,
        "--n-icon-color": u
      };
    }), l = o ? Ye("icon-wrapper", void 0, a, e) : void 0;
    return () => {
      const s = mt(e.size);
      return l == null || l.onRender(), f("div", {
        class: [`${r.value}-icon-wrapper`, l == null ? void 0 : l.themeClass.value],
        style: [a == null ? void 0 : a.value, {
          height: s,
          width: s,
          borderRadius: mt(e.borderRadius),
          backgroundColor: e.color,
          color: e.iconColor
        }]
      }, t);
    };
  }
}), ef = "n-popconfirm", tf = {
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
}, Sd = _n(tf), k2 = J({
  name: "NPopconfirmPanel",
  props: tf,
  setup(e) {
    const {
      localeRef: t
    } = lr("Popconfirm"), {
      inlineThemeDisabled: r
    } = Ae(), {
      mergedClsPrefixRef: o,
      mergedThemeRef: i,
      props: a
    } = pe(ef), l = A(() => {
      const {
        common: {
          cubicBezierEaseInOut: d
        },
        self: {
          fontSize: u,
          iconSize: c,
          iconColor: v
        }
      } = i.value;
      return {
        "--n-bezier": d,
        "--n-font-size": u,
        "--n-icon-size": c,
        "--n-icon-color": v
      };
    }), s = r ? Ye("popconfirm-panel", void 0, l, a) : void 0;
    return Object.assign(Object.assign({}, lr("Popconfirm")), {
      mergedClsPrefix: o,
      cssVars: r ? void 0 : l,
      localizedPositiveText: A(() => e.positiveText || t.value.positiveText),
      localizedNegativeText: A(() => e.negativeText || t.value.negativeText),
      positiveButtonProps: ie(a, "positiveButtonProps"),
      negativeButtonProps: ie(a, "negativeButtonProps"),
      handlePositiveClick(d) {
        e.onPositiveClick(d);
      },
      handleNegativeClick(d) {
        e.onNegativeClick(d);
      },
      themeClass: s == null ? void 0 : s.themeClass,
      onRender: s == null ? void 0 : s.onRender
    });
  },
  render() {
    var e;
    const {
      mergedClsPrefix: t,
      showIcon: r,
      $slots: o
    } = this, i = tn(o.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && f(dr, Object.assign({
      size: "small",
      onClick: this.handleNegativeClick
    }, this.negativeButtonProps), {
      default: () => this.localizedNegativeText
    }), this.positiveText !== null && f(dr, Object.assign({
      size: "small",
      type: "primary",
      onClick: this.handlePositiveClick
    }, this.positiveButtonProps), {
      default: () => this.localizedPositiveText
    })]);
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      class: [`${t}-popconfirm__panel`, this.themeClass],
      style: this.cssVars
    }, We(o.default, (a) => r || a ? f("div", {
      class: `${t}-popconfirm__body`
    }, r ? f("div", {
      class: `${t}-popconfirm__icon`
    }, tn(o.icon, () => [f(yt, {
      clsPrefix: t
    }, {
      default: () => f(yi, null)
    })])) : null, a) : null), i ? f("div", {
      class: [`${t}-popconfirm__action`]
    }, i) : null);
  }
}), R2 = z("popconfirm", [M("body", `
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `, [M("icon", `
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]), M("action", `
 display: flex;
 justify-content: flex-end;
 `, [D("&:not(:first-child)", "margin-top: 8px"), z("button", [D("&:not(:last-child)", "margin-right: 8px;")])])]), F2 = Object.assign(Object.assign(Object.assign({}, ve.props), sr), {
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
}), P2 = J({
  name: "Popconfirm",
  props: F2,
  slots: Object,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(), r = ve("Popconfirm", "-popconfirm", R2, FS, e, t), o = I(null);
    function i(s) {
      var d;
      if (!(!((d = o.value) === null || d === void 0) && d.getMergedShow())) return;
      const {
        onPositiveClick: u,
        "onUpdate:show": c
      } = e;
      Promise.resolve(u ? u(s) : !0).then((v) => {
        var g;
        v !== !1 && ((g = o.value) === null || g === void 0 || g.setShow(!1), c && ne(c, !1));
      });
    }
    function a(s) {
      var d;
      if (!(!((d = o.value) === null || d === void 0) && d.getMergedShow())) return;
      const {
        onNegativeClick: u,
        "onUpdate:show": c
      } = e;
      Promise.resolve(u ? u(s) : !0).then((v) => {
        var g;
        v !== !1 && ((g = o.value) === null || g === void 0 || g.setShow(!1), c && ne(c, !1));
      });
    }
    return $e(ef, {
      mergedThemeRef: r,
      mergedClsPrefixRef: t,
      props: e
    }), {
      setShow(s) {
        var d;
        (d = o.value) === null || d === void 0 || d.setShow(s);
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
      $props: t,
      mergedTheme: r
    } = this;
    return f(Cr, gr(t, Sd, {
      theme: r.peers.Popover,
      themeOverrides: r.peerOverrides.Popover,
      internalExtraClass: ["popconfirm"],
      ref: "popoverInstRef"
    }), {
      trigger: e.trigger,
      default: () => {
        const o = Rn(t, Sd);
        return f(k2, Object.assign(Object.assign({}, o), {
          onPositiveClick: this.handlePositiveClick,
          onNegativeClick: this.handleNegativeClick
        }), e);
      }
    });
  }
}), z2 = D([D("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), z("spin-container", `
 position: relative;
 `, [z("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Po()])]), z("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), z("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [N("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]), z("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), z("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [N("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]), $2 = {
  small: 20,
  medium: 18,
  large: 16
}, A2 = Object.assign(Object.assign({}, ve.props), {
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
}), nf = J({
  name: "Spin",
  props: A2,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.spinning !== void 0 && Qe("spin", "`spinning` is deprecated, please use `show` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Spin", "-spin", z2, zS, e, t), i = A(() => {
      const {
        size: d
      } = e, {
        common: {
          cubicBezierEaseInOut: u
        },
        self: c
      } = o.value, {
        opacitySpinning: v,
        color: g,
        textColor: m
      } = c, h = typeof d == "number" ? Ct(d) : c[Z("size", d)];
      return {
        "--n-bezier": u,
        "--n-opacity-spinning": v,
        "--n-size": h,
        "--n-color": g,
        "--n-text-color": m
      };
    }), a = r ? Ye("spin", A(() => {
      const {
        size: d
      } = e;
      return typeof d == "number" ? String(d) : d[0];
    }), i, e) : void 0, l = Ua(e, ["spinning", "show"]), s = I(!1);
    return nt((d) => {
      let u;
      if (l.value) {
        const {
          delay: c
        } = e;
        if (c) {
          u = window.setTimeout(() => {
            s.value = !0;
          }, c), d(() => {
            clearTimeout(u);
          });
          return;
        }
      }
      s.value = l.value;
    }), {
      mergedClsPrefix: t,
      active: s,
      mergedStrokeWidth: A(() => {
        const {
          strokeWidth: d
        } = e;
        if (d !== void 0) return d;
        const {
          size: u
        } = e;
        return $2[typeof u == "number" ? "medium" : u];
      }),
      cssVars: r ? void 0 : i,
      themeClass: a == null ? void 0 : a.themeClass,
      onRender: a == null ? void 0 : a.onRender
    };
  },
  render() {
    var e, t;
    const {
      $slots: r,
      mergedClsPrefix: o,
      description: i
    } = this, a = r.icon && this.rotate, l = (i || r.description) && f("div", {
      class: `${o}-spin-description`
    }, i || ((e = r.description) === null || e === void 0 ? void 0 : e.call(r))), s = r.icon ? f("div", {
      class: [`${o}-spin-body`, this.themeClass]
    }, f("div", {
      class: [`${o}-spin`, a && `${o}-spin--rotate`],
      style: r.default ? "" : this.cssVars
    }, r.icon()), l) : f("div", {
      class: [`${o}-spin-body`, this.themeClass]
    }, f(Gn, {
      clsPrefix: o,
      style: r.default ? "" : this.cssVars,
      stroke: this.stroke,
      "stroke-width": this.mergedStrokeWidth,
      class: `${o}-spin`
    }), l);
    return (t = this.onRender) === null || t === void 0 || t.call(this), r.default ? f("div", {
      class: [`${o}-spin-container`, this.themeClass],
      style: this.cssVars
    }, f("div", {
      class: [`${o}-spin-content`, this.active && `${o}-spin-content--spinning`, this.contentClass],
      style: this.contentStyle
    }, r), f(Tt, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? s : null
    })) : s;
  }
}), D2 = z("switch", `
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`, [M("children-placeholder", `
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `), M("rail-placeholder", `
 display: flex;
 flex-wrap: none;
 `), M("button-placeholder", `
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `), z("base-loading", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `, [Qt({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), M("checked, unchecked", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `), M("checked", `
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), M("unchecked", `
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), D("&:focus", [M("rail", `
 box-shadow: var(--n-box-shadow-focus);
 `)]), N("round", [M("rail", "border-radius: calc(var(--n-rail-height) / 2);", [M("button", "border-radius: calc(var(--n-button-height) / 2);")])]), Je("disabled", [Je("icon", [N("rubber-band", [N("pressed", [M("rail", [M("button", "max-width: var(--n-button-width-pressed);")])]), M("rail", [D("&:active", [M("button", "max-width: var(--n-button-width-pressed);")])]), N("active", [N("pressed", [M("rail", [M("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]), M("rail", [D("&:active", [M("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]), N("active", [M("rail", [M("button", "left: calc(100% - var(--n-button-width) - var(--n-offset))")])]), M("rail", `
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `, [M("button-icon", `
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `, [Qt()]), M("button", `
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]), N("active", [M("rail", "background-color: var(--n-rail-color-active);")]), N("loading", [M("rail", `
 cursor: wait;
 `)]), N("disabled", [M("rail", `
 cursor: not-allowed;
 opacity: .5;
 `)])]), E2 = Object.assign(Object.assign({}, ve.props), {
  size: {
    type: String,
    default: "medium"
  },
  value: {
    type: [String, Number, Boolean],
    default: void 0
  },
  loading: Boolean,
  defaultValue: {
    type: [String, Number, Boolean],
    default: !1
  },
  disabled: {
    type: Boolean,
    default: void 0
  },
  round: {
    type: Boolean,
    default: !0
  },
  "onUpdate:value": [Function, Array],
  onUpdateValue: [Function, Array],
  checkedValue: {
    type: [String, Number, Boolean],
    default: !0
  },
  uncheckedValue: {
    type: [String, Number, Boolean],
    default: !1
  },
  railStyle: Function,
  rubberBand: {
    type: Boolean,
    default: !0
  },
  /** @deprecated */
  onChange: [Function, Array]
});
let eo;
const T2 = J({
  name: "Switch",
  props: E2,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && nt(() => {
      e.onChange && Qe("switch", "`on-change` is deprecated, please use `on-update:value` instead.");
    }), eo === void 0 && (typeof CSS < "u" ? typeof CSS.supports < "u" ? eo = CSS.supports("width", "max(1px)") : eo = !1 : eo = !0);
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Switch", "-switch", D2, DS, e, t), i = Un(e), {
      mergedSizeRef: a,
      mergedDisabledRef: l
    } = i, s = I(e.defaultValue), d = ie(e, "value"), u = Pt(d, s), c = A(() => u.value === e.checkedValue), v = I(!1), g = I(!1), m = A(() => {
      const {
        railStyle: S
      } = e;
      if (S)
        return S({
          focused: g.value,
          checked: c.value
        });
    });
    function h(S) {
      const {
        "onUpdate:value": F,
        onChange: P,
        onUpdateValue: _
      } = e, {
        nTriggerFormInput: O,
        nTriggerFormChange: n
      } = i;
      F && ne(F, S), _ && ne(_, S), P && ne(P, S), s.value = S, O(), n();
    }
    function p() {
      const {
        nTriggerFormFocus: S
      } = i;
      S();
    }
    function x() {
      const {
        nTriggerFormBlur: S
      } = i;
      S();
    }
    function b() {
      e.loading || l.value || (u.value !== e.checkedValue ? h(e.checkedValue) : h(e.uncheckedValue));
    }
    function y() {
      g.value = !0, p();
    }
    function k() {
      g.value = !1, x(), v.value = !1;
    }
    function w(S) {
      e.loading || l.value || S.key === " " && (u.value !== e.checkedValue ? h(e.checkedValue) : h(e.uncheckedValue), v.value = !1);
    }
    function R(S) {
      e.loading || l.value || S.key === " " && (S.preventDefault(), v.value = !0);
    }
    const B = A(() => {
      const {
        value: S
      } = a, {
        self: {
          opacityDisabled: F,
          railColor: P,
          railColorActive: _,
          buttonBoxShadow: O,
          buttonColor: n,
          boxShadowFocus: E,
          loadingColor: T,
          textColor: H,
          iconColor: L,
          [Z("buttonHeight", S)]: U,
          [Z("buttonWidth", S)]: te,
          [Z("buttonWidthPressed", S)]: X,
          [Z("railHeight", S)]: K,
          [Z("railWidth", S)]: j,
          [Z("railBorderRadius", S)]: q,
          [Z("buttonBorderRadius", S)]: Y
        },
        common: {
          cubicBezierEaseInOut: ae
        }
      } = o.value;
      let le, ce, be;
      return eo ? (le = `calc((${K} - ${U}) / 2)`, ce = `max(${K}, ${U})`, be = `max(${j}, calc(${j} + ${U} - ${K}))`) : (le = Ct((Et(K) - Et(U)) / 2), ce = Ct(Math.max(Et(K), Et(U))), be = Et(K) > Et(U) ? j : Ct(Et(j) + Et(U) - Et(K))), {
        "--n-bezier": ae,
        "--n-button-border-radius": Y,
        "--n-button-box-shadow": O,
        "--n-button-color": n,
        "--n-button-width": te,
        "--n-button-width-pressed": X,
        "--n-button-height": U,
        "--n-height": ce,
        "--n-offset": le,
        "--n-opacity-disabled": F,
        "--n-rail-border-radius": q,
        "--n-rail-color": P,
        "--n-rail-color-active": _,
        "--n-rail-height": K,
        "--n-rail-width": j,
        "--n-width": be,
        "--n-box-shadow-focus": E,
        "--n-loading-color": T,
        "--n-text-color": H,
        "--n-icon-color": L
      };
    }), C = r ? Ye("switch", A(() => a.value[0]), B, e) : void 0;
    return {
      handleClick: b,
      handleBlur: k,
      handleFocus: y,
      handleKeyup: w,
      handleKeydown: R,
      mergedRailStyle: m,
      pressed: v,
      mergedClsPrefix: t,
      mergedValue: u,
      checked: c,
      mergedDisabled: l,
      cssVars: r ? void 0 : B,
      themeClass: C == null ? void 0 : C.themeClass,
      onRender: C == null ? void 0 : C.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e,
      mergedDisabled: t,
      checked: r,
      mergedRailStyle: o,
      onRender: i,
      $slots: a
    } = this;
    i == null || i();
    const {
      checked: l,
      unchecked: s,
      icon: d,
      "checked-icon": u,
      "unchecked-icon": c
    } = a, v = !(zr(d) && zr(u) && zr(c));
    return f("div", {
      role: "switch",
      "aria-checked": r,
      class: [`${e}-switch`, this.themeClass, v && `${e}-switch--icon`, r && `${e}-switch--active`, t && `${e}-switch--disabled`, this.round && `${e}-switch--round`, this.loading && `${e}-switch--loading`, this.pressed && `${e}-switch--pressed`, this.rubberBand && `${e}-switch--rubber-band`],
      tabindex: this.mergedDisabled ? void 0 : 0,
      style: this.cssVars,
      onClick: this.handleClick,
      onFocus: this.handleFocus,
      onBlur: this.handleBlur,
      onKeyup: this.handleKeyup,
      onKeydown: this.handleKeydown
    }, f("div", {
      class: `${e}-switch__rail`,
      "aria-hidden": "true",
      style: o
    }, We(l, (g) => We(s, (m) => g || m ? f("div", {
      "aria-hidden": !0,
      class: `${e}-switch__children-placeholder`
    }, f("div", {
      class: `${e}-switch__rail-placeholder`
    }, f("div", {
      class: `${e}-switch__button-placeholder`
    }), g), f("div", {
      class: `${e}-switch__rail-placeholder`
    }, f("div", {
      class: `${e}-switch__button-placeholder`
    }), m)) : null)), f("div", {
      class: `${e}-switch__button`
    }, We(d, (g) => We(u, (m) => We(c, (h) => f(xr, null, {
      default: () => this.loading ? f(Gn, {
        key: "loading",
        clsPrefix: e,
        strokeWidth: 20
      }) : this.checked && (m || g) ? f("div", {
        class: `${e}-switch__button-icon`,
        key: m ? "checked-icon" : "icon"
      }, m || g) : !this.checked && (h || g) ? f("div", {
        class: `${e}-switch__button-icon`,
        key: h ? "unchecked-icon" : "icon"
      }, h || g) : null
    })))), We(l, (g) => g && f("div", {
      key: "checked",
      class: `${e}-switch__checked`
    }, g)), We(s, (g) => g && f("div", {
      key: "unchecked",
      class: `${e}-switch__unchecked`
    }, g)))));
  }
}), O2 = /* @__PURE__ */ Object.assign({
  name: "PPractical",
  inheritAttrs: !1
}, {
  __name: "practical",
  setup(e) {
    const t = {
      common: {
        fontWeightStrong: "600",
        primaryColor: "#2080F0FF",
        primaryColorHover: "#4098FCFF",
        primaryColorPressed: "#1060C9FF",
        primaryColorSuppl: "#4098FCFF"
      },
      DataTable: {
        thColor: "rgba(243, 243, 252, 1)",
        tdColorStriped: "rgba(243, 243, 252, 1)",
        tdColorHover: "rgba(250, 250, 252, 1)"
      }
    };
    return (r, o) => (ke(), tt(re(oc), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: re($0),
      "date-locale": re(Vv),
      "theme-overrides": t
    }, {
      default: _e(() => [
        Xt(re(qc), null, {
          default: _e(() => [
            Xt(re(jc), null, {
              default: _e(() => [
                Yt(r.$slots, "default")
              ]),
              _: 3
            })
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["locale", "date-locale"]));
  }
});
function M2(e, t, r) {
  e.addEventListener(t, r), hi(() => {
    e.removeEventListener(t, r);
  });
}
var oo = void 0, Ar = {}, Oa;
Ar.throttle = Oa = function(e, t, r, o) {
  var i, a = 0;
  typeof t != "boolean" && (o = r, r = t, t = oo);
  function l() {
    var s = this, d = +/* @__PURE__ */ new Date() - a, u = arguments;
    function c() {
      a = +/* @__PURE__ */ new Date(), r.apply(s, u);
    }
    function v() {
      i = oo;
    }
    o && !i && c(), i && clearTimeout(i), o === oo && d > e ? c() : t !== !0 && (i = setTimeout(o ? v : c, o === oo ? e - d : e));
  }
  return Ar.guid && (l.guid = r.guid = r.guid || Ar.guid++), l;
};
Ar.debounce = function(e, t, r) {
  return r === oo ? Oa(e, t, !1) : Oa(e, r, t !== !1);
};
const Xn = function(e, t, r) {
  return Ar.debounce(t || 300, r ?? !0, e);
}, rf = function(e, t, r) {
  return Ar.throttle(t || 300, r ?? !1, e);
};
function I2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var of = { exports: {} };
(function(e) {
  function t() {
    var r = 0, o = 1, i = 2, a = 3, l = 4, s = 5, d = 6, u = 7, c = 8, v = 9, g = 10, m = 11, h = 12, p = 13, x = 14, b = 15, y = 16, k = 17, w = 0, R = 1, B = 2, C = 3, S = 4;
    function F(n, E) {
      return 55296 <= n.charCodeAt(E) && n.charCodeAt(E) <= 56319 && 56320 <= n.charCodeAt(E + 1) && n.charCodeAt(E + 1) <= 57343;
    }
    function P(n, E) {
      E === void 0 && (E = 0);
      var T = n.charCodeAt(E);
      if (55296 <= T && T <= 56319 && E < n.length - 1) {
        var H = T, L = n.charCodeAt(E + 1);
        return 56320 <= L && L <= 57343 ? (H - 55296) * 1024 + (L - 56320) + 65536 : H;
      }
      if (56320 <= T && T <= 57343 && E >= 1) {
        var H = n.charCodeAt(E - 1), L = T;
        return 55296 <= H && H <= 56319 ? (H - 55296) * 1024 + (L - 56320) + 65536 : L;
      }
      return T;
    }
    function _(n, E, T) {
      var H = [n].concat(E).concat([T]), L = H[H.length - 2], U = T, te = H.lastIndexOf(x);
      if (te > 1 && H.slice(1, te).every(function(j) {
        return j == a;
      }) && [a, p, k].indexOf(n) == -1)
        return B;
      var X = H.lastIndexOf(l);
      if (X > 0 && H.slice(1, X).every(function(j) {
        return j == l;
      }) && [h, l].indexOf(L) == -1)
        return H.filter(function(j) {
          return j == l;
        }).length % 2 == 1 ? C : S;
      if (L == r && U == o)
        return w;
      if (L == i || L == r || L == o)
        return U == x && E.every(function(j) {
          return j == a;
        }) ? B : R;
      if (U == i || U == r || U == o)
        return R;
      if (L == d && (U == d || U == u || U == v || U == g))
        return w;
      if ((L == v || L == u) && (U == u || U == c))
        return w;
      if ((L == g || L == c) && U == c)
        return w;
      if (U == a || U == b)
        return w;
      if (U == s)
        return w;
      if (L == h)
        return w;
      var K = H.indexOf(a) != -1 ? H.lastIndexOf(a) - 1 : H.length - 2;
      return [p, k].indexOf(H[K]) != -1 && H.slice(K + 1, -1).every(function(j) {
        return j == a;
      }) && U == x || L == b && [y, k].indexOf(U) != -1 ? w : E.indexOf(l) != -1 ? B : L == l && U == l ? w : R;
    }
    this.nextBreak = function(n, E) {
      if (E === void 0 && (E = 0), E < 0)
        return 0;
      if (E >= n.length - 1)
        return n.length;
      for (var T = O(P(n, E)), H = [], L = E + 1; L < n.length; L++)
        if (!F(n, L - 1)) {
          var U = O(P(n, L));
          if (_(T, H, U))
            return L;
          H.push(U);
        }
      return n.length;
    }, this.splitGraphemes = function(n) {
      for (var E = [], T = 0, H; (H = this.nextBreak(n, T)) < n.length; )
        E.push(n.slice(T, H)), T = H;
      return T < n.length && E.push(n.slice(T)), E;
    }, this.iterateGraphemes = function(n) {
      var E = 0, T = {
        next: (function() {
          var H, L;
          return (L = this.nextBreak(n, E)) < n.length ? (H = n.slice(E, L), E = L, { value: H, done: !1 }) : E < n.length ? (H = n.slice(E), E = n.length, { value: H, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && (T[Symbol.iterator] = function() {
        return T;
      }), T;
    }, this.countGraphemes = function(n) {
      for (var E = 0, T = 0, H; (H = this.nextBreak(n, T)) < n.length; )
        T = H, E++;
      return T < n.length && E++, E;
    };
    function O(n) {
      return 1536 <= n && n <= 1541 || // Cf   [6] ARABIC NUMBER SIGN..ARABIC NUMBER MARK ABOVE
      n == 1757 || // Cf       ARABIC END OF AYAH
      n == 1807 || // Cf       SYRIAC ABBREVIATION MARK
      n == 2274 || // Cf       ARABIC DISPUTED END OF AYAH
      n == 3406 || // Lo       MALAYALAM LETTER DOT REPH
      n == 69821 || // Cf       KAITHI NUMBER SIGN
      70082 <= n && n <= 70083 || // Lo   [2] SHARADA SIGN JIHVAMULIYA..SHARADA SIGN UPADHMANIYA
      n == 72250 || // Lo       ZANABAZAR SQUARE CLUSTER-INITIAL LETTER RA
      72326 <= n && n <= 72329 || // Lo   [4] SOYOMBO CLUSTER-INITIAL LETTER RA..SOYOMBO CLUSTER-INITIAL LETTER SA
      n == 73030 ? h : n == 13 ? r : n == 10 ? o : 0 <= n && n <= 9 || // Cc  [10] <control-0000>..<control-0009>
      11 <= n && n <= 12 || // Cc   [2] <control-000B>..<control-000C>
      14 <= n && n <= 31 || // Cc  [18] <control-000E>..<control-001F>
      127 <= n && n <= 159 || // Cc  [33] <control-007F>..<control-009F>
      n == 173 || // Cf       SOFT HYPHEN
      n == 1564 || // Cf       ARABIC LETTER MARK
      n == 6158 || // Cf       MONGOLIAN VOWEL SEPARATOR
      n == 8203 || // Cf       ZERO WIDTH SPACE
      8206 <= n && n <= 8207 || // Cf   [2] LEFT-TO-RIGHT MARK..RIGHT-TO-LEFT MARK
      n == 8232 || // Zl       LINE SEPARATOR
      n == 8233 || // Zp       PARAGRAPH SEPARATOR
      8234 <= n && n <= 8238 || // Cf   [5] LEFT-TO-RIGHT EMBEDDING..RIGHT-TO-LEFT OVERRIDE
      8288 <= n && n <= 8292 || // Cf   [5] WORD JOINER..INVISIBLE PLUS
      n == 8293 || // Cn       <reserved-2065>
      8294 <= n && n <= 8303 || // Cf  [10] LEFT-TO-RIGHT ISOLATE..NOMINAL DIGIT SHAPES
      55296 <= n && n <= 57343 || // Cs [2048] <surrogate-D800>..<surrogate-DFFF>
      n == 65279 || // Cf       ZERO WIDTH NO-BREAK SPACE
      65520 <= n && n <= 65528 || // Cn   [9] <reserved-FFF0>..<reserved-FFF8>
      65529 <= n && n <= 65531 || // Cf   [3] INTERLINEAR ANNOTATION ANCHOR..INTERLINEAR ANNOTATION TERMINATOR
      113824 <= n && n <= 113827 || // Cf   [4] SHORTHAND FORMAT LETTER OVERLAP..SHORTHAND FORMAT UP STEP
      119155 <= n && n <= 119162 || // Cf   [8] MUSICAL SYMBOL BEGIN BEAM..MUSICAL SYMBOL END PHRASE
      n == 917504 || // Cn       <reserved-E0000>
      n == 917505 || // Cf       LANGUAGE TAG
      917506 <= n && n <= 917535 || // Cn  [30] <reserved-E0002>..<reserved-E001F>
      917632 <= n && n <= 917759 || // Cn [128] <reserved-E0080>..<reserved-E00FF>
      918e3 <= n && n <= 921599 ? i : 768 <= n && n <= 879 || // Mn [112] COMBINING GRAVE ACCENT..COMBINING LATIN SMALL LETTER X
      1155 <= n && n <= 1159 || // Mn   [5] COMBINING CYRILLIC TITLO..COMBINING CYRILLIC POKRYTIE
      1160 <= n && n <= 1161 || // Me   [2] COMBINING CYRILLIC HUNDRED THOUSANDS SIGN..COMBINING CYRILLIC MILLIONS SIGN
      1425 <= n && n <= 1469 || // Mn  [45] HEBREW ACCENT ETNAHTA..HEBREW POINT METEG
      n == 1471 || // Mn       HEBREW POINT RAFE
      1473 <= n && n <= 1474 || // Mn   [2] HEBREW POINT SHIN DOT..HEBREW POINT SIN DOT
      1476 <= n && n <= 1477 || // Mn   [2] HEBREW MARK UPPER DOT..HEBREW MARK LOWER DOT
      n == 1479 || // Mn       HEBREW POINT QAMATS QATAN
      1552 <= n && n <= 1562 || // Mn  [11] ARABIC SIGN SALLALLAHOU ALAYHE WASSALLAM..ARABIC SMALL KASRA
      1611 <= n && n <= 1631 || // Mn  [21] ARABIC FATHATAN..ARABIC WAVY HAMZA BELOW
      n == 1648 || // Mn       ARABIC LETTER SUPERSCRIPT ALEF
      1750 <= n && n <= 1756 || // Mn   [7] ARABIC SMALL HIGH LIGATURE SAD WITH LAM WITH ALEF MAKSURA..ARABIC SMALL HIGH SEEN
      1759 <= n && n <= 1764 || // Mn   [6] ARABIC SMALL HIGH ROUNDED ZERO..ARABIC SMALL HIGH MADDA
      1767 <= n && n <= 1768 || // Mn   [2] ARABIC SMALL HIGH YEH..ARABIC SMALL HIGH NOON
      1770 <= n && n <= 1773 || // Mn   [4] ARABIC EMPTY CENTRE LOW STOP..ARABIC SMALL LOW MEEM
      n == 1809 || // Mn       SYRIAC LETTER SUPERSCRIPT ALAPH
      1840 <= n && n <= 1866 || // Mn  [27] SYRIAC PTHAHA ABOVE..SYRIAC BARREKH
      1958 <= n && n <= 1968 || // Mn  [11] THAANA ABAFILI..THAANA SUKUN
      2027 <= n && n <= 2035 || // Mn   [9] NKO COMBINING SHORT HIGH TONE..NKO COMBINING DOUBLE DOT ABOVE
      2070 <= n && n <= 2073 || // Mn   [4] SAMARITAN MARK IN..SAMARITAN MARK DAGESH
      2075 <= n && n <= 2083 || // Mn   [9] SAMARITAN MARK EPENTHETIC YUT..SAMARITAN VOWEL SIGN A
      2085 <= n && n <= 2087 || // Mn   [3] SAMARITAN VOWEL SIGN SHORT A..SAMARITAN VOWEL SIGN U
      2089 <= n && n <= 2093 || // Mn   [5] SAMARITAN VOWEL SIGN LONG I..SAMARITAN MARK NEQUDAA
      2137 <= n && n <= 2139 || // Mn   [3] MANDAIC AFFRICATION MARK..MANDAIC GEMINATION MARK
      2260 <= n && n <= 2273 || // Mn  [14] ARABIC SMALL HIGH WORD AR-RUB..ARABIC SMALL HIGH SIGN SAFHA
      2275 <= n && n <= 2306 || // Mn  [32] ARABIC TURNED DAMMA BELOW..DEVANAGARI SIGN ANUSVARA
      n == 2362 || // Mn       DEVANAGARI VOWEL SIGN OE
      n == 2364 || // Mn       DEVANAGARI SIGN NUKTA
      2369 <= n && n <= 2376 || // Mn   [8] DEVANAGARI VOWEL SIGN U..DEVANAGARI VOWEL SIGN AI
      n == 2381 || // Mn       DEVANAGARI SIGN VIRAMA
      2385 <= n && n <= 2391 || // Mn   [7] DEVANAGARI STRESS SIGN UDATTA..DEVANAGARI VOWEL SIGN UUE
      2402 <= n && n <= 2403 || // Mn   [2] DEVANAGARI VOWEL SIGN VOCALIC L..DEVANAGARI VOWEL SIGN VOCALIC LL
      n == 2433 || // Mn       BENGALI SIGN CANDRABINDU
      n == 2492 || // Mn       BENGALI SIGN NUKTA
      n == 2494 || // Mc       BENGALI VOWEL SIGN AA
      2497 <= n && n <= 2500 || // Mn   [4] BENGALI VOWEL SIGN U..BENGALI VOWEL SIGN VOCALIC RR
      n == 2509 || // Mn       BENGALI SIGN VIRAMA
      n == 2519 || // Mc       BENGALI AU LENGTH MARK
      2530 <= n && n <= 2531 || // Mn   [2] BENGALI VOWEL SIGN VOCALIC L..BENGALI VOWEL SIGN VOCALIC LL
      2561 <= n && n <= 2562 || // Mn   [2] GURMUKHI SIGN ADAK BINDI..GURMUKHI SIGN BINDI
      n == 2620 || // Mn       GURMUKHI SIGN NUKTA
      2625 <= n && n <= 2626 || // Mn   [2] GURMUKHI VOWEL SIGN U..GURMUKHI VOWEL SIGN UU
      2631 <= n && n <= 2632 || // Mn   [2] GURMUKHI VOWEL SIGN EE..GURMUKHI VOWEL SIGN AI
      2635 <= n && n <= 2637 || // Mn   [3] GURMUKHI VOWEL SIGN OO..GURMUKHI SIGN VIRAMA
      n == 2641 || // Mn       GURMUKHI SIGN UDAAT
      2672 <= n && n <= 2673 || // Mn   [2] GURMUKHI TIPPI..GURMUKHI ADDAK
      n == 2677 || // Mn       GURMUKHI SIGN YAKASH
      2689 <= n && n <= 2690 || // Mn   [2] GUJARATI SIGN CANDRABINDU..GUJARATI SIGN ANUSVARA
      n == 2748 || // Mn       GUJARATI SIGN NUKTA
      2753 <= n && n <= 2757 || // Mn   [5] GUJARATI VOWEL SIGN U..GUJARATI VOWEL SIGN CANDRA E
      2759 <= n && n <= 2760 || // Mn   [2] GUJARATI VOWEL SIGN E..GUJARATI VOWEL SIGN AI
      n == 2765 || // Mn       GUJARATI SIGN VIRAMA
      2786 <= n && n <= 2787 || // Mn   [2] GUJARATI VOWEL SIGN VOCALIC L..GUJARATI VOWEL SIGN VOCALIC LL
      2810 <= n && n <= 2815 || // Mn   [6] GUJARATI SIGN SUKUN..GUJARATI SIGN TWO-CIRCLE NUKTA ABOVE
      n == 2817 || // Mn       ORIYA SIGN CANDRABINDU
      n == 2876 || // Mn       ORIYA SIGN NUKTA
      n == 2878 || // Mc       ORIYA VOWEL SIGN AA
      n == 2879 || // Mn       ORIYA VOWEL SIGN I
      2881 <= n && n <= 2884 || // Mn   [4] ORIYA VOWEL SIGN U..ORIYA VOWEL SIGN VOCALIC RR
      n == 2893 || // Mn       ORIYA SIGN VIRAMA
      n == 2902 || // Mn       ORIYA AI LENGTH MARK
      n == 2903 || // Mc       ORIYA AU LENGTH MARK
      2914 <= n && n <= 2915 || // Mn   [2] ORIYA VOWEL SIGN VOCALIC L..ORIYA VOWEL SIGN VOCALIC LL
      n == 2946 || // Mn       TAMIL SIGN ANUSVARA
      n == 3006 || // Mc       TAMIL VOWEL SIGN AA
      n == 3008 || // Mn       TAMIL VOWEL SIGN II
      n == 3021 || // Mn       TAMIL SIGN VIRAMA
      n == 3031 || // Mc       TAMIL AU LENGTH MARK
      n == 3072 || // Mn       TELUGU SIGN COMBINING CANDRABINDU ABOVE
      3134 <= n && n <= 3136 || // Mn   [3] TELUGU VOWEL SIGN AA..TELUGU VOWEL SIGN II
      3142 <= n && n <= 3144 || // Mn   [3] TELUGU VOWEL SIGN E..TELUGU VOWEL SIGN AI
      3146 <= n && n <= 3149 || // Mn   [4] TELUGU VOWEL SIGN O..TELUGU SIGN VIRAMA
      3157 <= n && n <= 3158 || // Mn   [2] TELUGU LENGTH MARK..TELUGU AI LENGTH MARK
      3170 <= n && n <= 3171 || // Mn   [2] TELUGU VOWEL SIGN VOCALIC L..TELUGU VOWEL SIGN VOCALIC LL
      n == 3201 || // Mn       KANNADA SIGN CANDRABINDU
      n == 3260 || // Mn       KANNADA SIGN NUKTA
      n == 3263 || // Mn       KANNADA VOWEL SIGN I
      n == 3266 || // Mc       KANNADA VOWEL SIGN UU
      n == 3270 || // Mn       KANNADA VOWEL SIGN E
      3276 <= n && n <= 3277 || // Mn   [2] KANNADA VOWEL SIGN AU..KANNADA SIGN VIRAMA
      3285 <= n && n <= 3286 || // Mc   [2] KANNADA LENGTH MARK..KANNADA AI LENGTH MARK
      3298 <= n && n <= 3299 || // Mn   [2] KANNADA VOWEL SIGN VOCALIC L..KANNADA VOWEL SIGN VOCALIC LL
      3328 <= n && n <= 3329 || // Mn   [2] MALAYALAM SIGN COMBINING ANUSVARA ABOVE..MALAYALAM SIGN CANDRABINDU
      3387 <= n && n <= 3388 || // Mn   [2] MALAYALAM SIGN VERTICAL BAR VIRAMA..MALAYALAM SIGN CIRCULAR VIRAMA
      n == 3390 || // Mc       MALAYALAM VOWEL SIGN AA
      3393 <= n && n <= 3396 || // Mn   [4] MALAYALAM VOWEL SIGN U..MALAYALAM VOWEL SIGN VOCALIC RR
      n == 3405 || // Mn       MALAYALAM SIGN VIRAMA
      n == 3415 || // Mc       MALAYALAM AU LENGTH MARK
      3426 <= n && n <= 3427 || // Mn   [2] MALAYALAM VOWEL SIGN VOCALIC L..MALAYALAM VOWEL SIGN VOCALIC LL
      n == 3530 || // Mn       SINHALA SIGN AL-LAKUNA
      n == 3535 || // Mc       SINHALA VOWEL SIGN AELA-PILLA
      3538 <= n && n <= 3540 || // Mn   [3] SINHALA VOWEL SIGN KETTI IS-PILLA..SINHALA VOWEL SIGN KETTI PAA-PILLA
      n == 3542 || // Mn       SINHALA VOWEL SIGN DIGA PAA-PILLA
      n == 3551 || // Mc       SINHALA VOWEL SIGN GAYANUKITTA
      n == 3633 || // Mn       THAI CHARACTER MAI HAN-AKAT
      3636 <= n && n <= 3642 || // Mn   [7] THAI CHARACTER SARA I..THAI CHARACTER PHINTHU
      3655 <= n && n <= 3662 || // Mn   [8] THAI CHARACTER MAITAIKHU..THAI CHARACTER YAMAKKAN
      n == 3761 || // Mn       LAO VOWEL SIGN MAI KAN
      3764 <= n && n <= 3769 || // Mn   [6] LAO VOWEL SIGN I..LAO VOWEL SIGN UU
      3771 <= n && n <= 3772 || // Mn   [2] LAO VOWEL SIGN MAI KON..LAO SEMIVOWEL SIGN LO
      3784 <= n && n <= 3789 || // Mn   [6] LAO TONE MAI EK..LAO NIGGAHITA
      3864 <= n && n <= 3865 || // Mn   [2] TIBETAN ASTROLOGICAL SIGN -KHYUD PA..TIBETAN ASTROLOGICAL SIGN SDONG TSHUGS
      n == 3893 || // Mn       TIBETAN MARK NGAS BZUNG NYI ZLA
      n == 3895 || // Mn       TIBETAN MARK NGAS BZUNG SGOR RTAGS
      n == 3897 || // Mn       TIBETAN MARK TSA -PHRU
      3953 <= n && n <= 3966 || // Mn  [14] TIBETAN VOWEL SIGN AA..TIBETAN SIGN RJES SU NGA RO
      3968 <= n && n <= 3972 || // Mn   [5] TIBETAN VOWEL SIGN REVERSED I..TIBETAN MARK HALANTA
      3974 <= n && n <= 3975 || // Mn   [2] TIBETAN SIGN LCI RTAGS..TIBETAN SIGN YANG RTAGS
      3981 <= n && n <= 3991 || // Mn  [11] TIBETAN SUBJOINED SIGN LCE TSA CAN..TIBETAN SUBJOINED LETTER JA
      3993 <= n && n <= 4028 || // Mn  [36] TIBETAN SUBJOINED LETTER NYA..TIBETAN SUBJOINED LETTER FIXED-FORM RA
      n == 4038 || // Mn       TIBETAN SYMBOL PADMA GDAN
      4141 <= n && n <= 4144 || // Mn   [4] MYANMAR VOWEL SIGN I..MYANMAR VOWEL SIGN UU
      4146 <= n && n <= 4151 || // Mn   [6] MYANMAR VOWEL SIGN AI..MYANMAR SIGN DOT BELOW
      4153 <= n && n <= 4154 || // Mn   [2] MYANMAR SIGN VIRAMA..MYANMAR SIGN ASAT
      4157 <= n && n <= 4158 || // Mn   [2] MYANMAR CONSONANT SIGN MEDIAL WA..MYANMAR CONSONANT SIGN MEDIAL HA
      4184 <= n && n <= 4185 || // Mn   [2] MYANMAR VOWEL SIGN VOCALIC L..MYANMAR VOWEL SIGN VOCALIC LL
      4190 <= n && n <= 4192 || // Mn   [3] MYANMAR CONSONANT SIGN MON MEDIAL NA..MYANMAR CONSONANT SIGN MON MEDIAL LA
      4209 <= n && n <= 4212 || // Mn   [4] MYANMAR VOWEL SIGN GEBA KAREN I..MYANMAR VOWEL SIGN KAYAH EE
      n == 4226 || // Mn       MYANMAR CONSONANT SIGN SHAN MEDIAL WA
      4229 <= n && n <= 4230 || // Mn   [2] MYANMAR VOWEL SIGN SHAN E ABOVE..MYANMAR VOWEL SIGN SHAN FINAL Y
      n == 4237 || // Mn       MYANMAR SIGN SHAN COUNCIL EMPHATIC TONE
      n == 4253 || // Mn       MYANMAR VOWEL SIGN AITON AI
      4957 <= n && n <= 4959 || // Mn   [3] ETHIOPIC COMBINING GEMINATION AND VOWEL LENGTH MARK..ETHIOPIC COMBINING GEMINATION MARK
      5906 <= n && n <= 5908 || // Mn   [3] TAGALOG VOWEL SIGN I..TAGALOG SIGN VIRAMA
      5938 <= n && n <= 5940 || // Mn   [3] HANUNOO VOWEL SIGN I..HANUNOO SIGN PAMUDPOD
      5970 <= n && n <= 5971 || // Mn   [2] BUHID VOWEL SIGN I..BUHID VOWEL SIGN U
      6002 <= n && n <= 6003 || // Mn   [2] TAGBANWA VOWEL SIGN I..TAGBANWA VOWEL SIGN U
      6068 <= n && n <= 6069 || // Mn   [2] KHMER VOWEL INHERENT AQ..KHMER VOWEL INHERENT AA
      6071 <= n && n <= 6077 || // Mn   [7] KHMER VOWEL SIGN I..KHMER VOWEL SIGN UA
      n == 6086 || // Mn       KHMER SIGN NIKAHIT
      6089 <= n && n <= 6099 || // Mn  [11] KHMER SIGN MUUSIKATOAN..KHMER SIGN BATHAMASAT
      n == 6109 || // Mn       KHMER SIGN ATTHACAN
      6155 <= n && n <= 6157 || // Mn   [3] MONGOLIAN FREE VARIATION SELECTOR ONE..MONGOLIAN FREE VARIATION SELECTOR THREE
      6277 <= n && n <= 6278 || // Mn   [2] MONGOLIAN LETTER ALI GALI BALUDA..MONGOLIAN LETTER ALI GALI THREE BALUDA
      n == 6313 || // Mn       MONGOLIAN LETTER ALI GALI DAGALGA
      6432 <= n && n <= 6434 || // Mn   [3] LIMBU VOWEL SIGN A..LIMBU VOWEL SIGN U
      6439 <= n && n <= 6440 || // Mn   [2] LIMBU VOWEL SIGN E..LIMBU VOWEL SIGN O
      n == 6450 || // Mn       LIMBU SMALL LETTER ANUSVARA
      6457 <= n && n <= 6459 || // Mn   [3] LIMBU SIGN MUKPHRENG..LIMBU SIGN SA-I
      6679 <= n && n <= 6680 || // Mn   [2] BUGINESE VOWEL SIGN I..BUGINESE VOWEL SIGN U
      n == 6683 || // Mn       BUGINESE VOWEL SIGN AE
      n == 6742 || // Mn       TAI THAM CONSONANT SIGN MEDIAL LA
      6744 <= n && n <= 6750 || // Mn   [7] TAI THAM SIGN MAI KANG LAI..TAI THAM CONSONANT SIGN SA
      n == 6752 || // Mn       TAI THAM SIGN SAKOT
      n == 6754 || // Mn       TAI THAM VOWEL SIGN MAI SAT
      6757 <= n && n <= 6764 || // Mn   [8] TAI THAM VOWEL SIGN I..TAI THAM VOWEL SIGN OA BELOW
      6771 <= n && n <= 6780 || // Mn  [10] TAI THAM VOWEL SIGN OA ABOVE..TAI THAM SIGN KHUEN-LUE KARAN
      n == 6783 || // Mn       TAI THAM COMBINING CRYPTOGRAMMIC DOT
      6832 <= n && n <= 6845 || // Mn  [14] COMBINING DOUBLED CIRCUMFLEX ACCENT..COMBINING PARENTHESES BELOW
      n == 6846 || // Me       COMBINING PARENTHESES OVERLAY
      6912 <= n && n <= 6915 || // Mn   [4] BALINESE SIGN ULU RICEM..BALINESE SIGN SURANG
      n == 6964 || // Mn       BALINESE SIGN REREKAN
      6966 <= n && n <= 6970 || // Mn   [5] BALINESE VOWEL SIGN ULU..BALINESE VOWEL SIGN RA REPA
      n == 6972 || // Mn       BALINESE VOWEL SIGN LA LENGA
      n == 6978 || // Mn       BALINESE VOWEL SIGN PEPET
      7019 <= n && n <= 7027 || // Mn   [9] BALINESE MUSICAL SYMBOL COMBINING TEGEH..BALINESE MUSICAL SYMBOL COMBINING GONG
      7040 <= n && n <= 7041 || // Mn   [2] SUNDANESE SIGN PANYECEK..SUNDANESE SIGN PANGLAYAR
      7074 <= n && n <= 7077 || // Mn   [4] SUNDANESE CONSONANT SIGN PANYAKRA..SUNDANESE VOWEL SIGN PANYUKU
      7080 <= n && n <= 7081 || // Mn   [2] SUNDANESE VOWEL SIGN PAMEPET..SUNDANESE VOWEL SIGN PANEULEUNG
      7083 <= n && n <= 7085 || // Mn   [3] SUNDANESE SIGN VIRAMA..SUNDANESE CONSONANT SIGN PASANGAN WA
      n == 7142 || // Mn       BATAK SIGN TOMPI
      7144 <= n && n <= 7145 || // Mn   [2] BATAK VOWEL SIGN PAKPAK E..BATAK VOWEL SIGN EE
      n == 7149 || // Mn       BATAK VOWEL SIGN KARO O
      7151 <= n && n <= 7153 || // Mn   [3] BATAK VOWEL SIGN U FOR SIMALUNGUN SA..BATAK CONSONANT SIGN H
      7212 <= n && n <= 7219 || // Mn   [8] LEPCHA VOWEL SIGN E..LEPCHA CONSONANT SIGN T
      7222 <= n && n <= 7223 || // Mn   [2] LEPCHA SIGN RAN..LEPCHA SIGN NUKTA
      7376 <= n && n <= 7378 || // Mn   [3] VEDIC TONE KARSHANA..VEDIC TONE PRENKHA
      7380 <= n && n <= 7392 || // Mn  [13] VEDIC SIGN YAJURVEDIC MIDLINE SVARITA..VEDIC TONE RIGVEDIC KASHMIRI INDEPENDENT SVARITA
      7394 <= n && n <= 7400 || // Mn   [7] VEDIC SIGN VISARGA SVARITA..VEDIC SIGN VISARGA ANUDATTA WITH TAIL
      n == 7405 || // Mn       VEDIC SIGN TIRYAK
      n == 7412 || // Mn       VEDIC TONE CANDRA ABOVE
      7416 <= n && n <= 7417 || // Mn   [2] VEDIC TONE RING ABOVE..VEDIC TONE DOUBLE RING ABOVE
      7616 <= n && n <= 7673 || // Mn  [58] COMBINING DOTTED GRAVE ACCENT..COMBINING WIDE INVERTED BRIDGE BELOW
      7675 <= n && n <= 7679 || // Mn   [5] COMBINING DELETION MARK..COMBINING RIGHT ARROWHEAD AND DOWN ARROWHEAD BELOW
      n == 8204 || // Cf       ZERO WIDTH NON-JOINER
      8400 <= n && n <= 8412 || // Mn  [13] COMBINING LEFT HARPOON ABOVE..COMBINING FOUR DOTS ABOVE
      8413 <= n && n <= 8416 || // Me   [4] COMBINING ENCLOSING CIRCLE..COMBINING ENCLOSING CIRCLE BACKSLASH
      n == 8417 || // Mn       COMBINING LEFT RIGHT ARROW ABOVE
      8418 <= n && n <= 8420 || // Me   [3] COMBINING ENCLOSING SCREEN..COMBINING ENCLOSING UPWARD POINTING TRIANGLE
      8421 <= n && n <= 8432 || // Mn  [12] COMBINING REVERSE SOLIDUS OVERLAY..COMBINING ASTERISK ABOVE
      11503 <= n && n <= 11505 || // Mn   [3] COPTIC COMBINING NI ABOVE..COPTIC COMBINING SPIRITUS LENIS
      n == 11647 || // Mn       TIFINAGH CONSONANT JOINER
      11744 <= n && n <= 11775 || // Mn  [32] COMBINING CYRILLIC LETTER BE..COMBINING CYRILLIC LETTER IOTIFIED BIG YUS
      12330 <= n && n <= 12333 || // Mn   [4] IDEOGRAPHIC LEVEL TONE MARK..IDEOGRAPHIC ENTERING TONE MARK
      12334 <= n && n <= 12335 || // Mc   [2] HANGUL SINGLE DOT TONE MARK..HANGUL DOUBLE DOT TONE MARK
      12441 <= n && n <= 12442 || // Mn   [2] COMBINING KATAKANA-HIRAGANA VOICED SOUND MARK..COMBINING KATAKANA-HIRAGANA SEMI-VOICED SOUND MARK
      n == 42607 || // Mn       COMBINING CYRILLIC VZMET
      42608 <= n && n <= 42610 || // Me   [3] COMBINING CYRILLIC TEN MILLIONS SIGN..COMBINING CYRILLIC THOUSAND MILLIONS SIGN
      42612 <= n && n <= 42621 || // Mn  [10] COMBINING CYRILLIC LETTER UKRAINIAN IE..COMBINING CYRILLIC PAYEROK
      42654 <= n && n <= 42655 || // Mn   [2] COMBINING CYRILLIC LETTER EF..COMBINING CYRILLIC LETTER IOTIFIED E
      42736 <= n && n <= 42737 || // Mn   [2] BAMUM COMBINING MARK KOQNDON..BAMUM COMBINING MARK TUKWENTIS
      n == 43010 || // Mn       SYLOTI NAGRI SIGN DVISVARA
      n == 43014 || // Mn       SYLOTI NAGRI SIGN HASANTA
      n == 43019 || // Mn       SYLOTI NAGRI SIGN ANUSVARA
      43045 <= n && n <= 43046 || // Mn   [2] SYLOTI NAGRI VOWEL SIGN U..SYLOTI NAGRI VOWEL SIGN E
      43204 <= n && n <= 43205 || // Mn   [2] SAURASHTRA SIGN VIRAMA..SAURASHTRA SIGN CANDRABINDU
      43232 <= n && n <= 43249 || // Mn  [18] COMBINING DEVANAGARI DIGIT ZERO..COMBINING DEVANAGARI SIGN AVAGRAHA
      43302 <= n && n <= 43309 || // Mn   [8] KAYAH LI VOWEL UE..KAYAH LI TONE CALYA PLOPHU
      43335 <= n && n <= 43345 || // Mn  [11] REJANG VOWEL SIGN I..REJANG CONSONANT SIGN R
      43392 <= n && n <= 43394 || // Mn   [3] JAVANESE SIGN PANYANGGA..JAVANESE SIGN LAYAR
      n == 43443 || // Mn       JAVANESE SIGN CECAK TELU
      43446 <= n && n <= 43449 || // Mn   [4] JAVANESE VOWEL SIGN WULU..JAVANESE VOWEL SIGN SUKU MENDUT
      n == 43452 || // Mn       JAVANESE VOWEL SIGN PEPET
      n == 43493 || // Mn       MYANMAR SIGN SHAN SAW
      43561 <= n && n <= 43566 || // Mn   [6] CHAM VOWEL SIGN AA..CHAM VOWEL SIGN OE
      43569 <= n && n <= 43570 || // Mn   [2] CHAM VOWEL SIGN AU..CHAM VOWEL SIGN UE
      43573 <= n && n <= 43574 || // Mn   [2] CHAM CONSONANT SIGN LA..CHAM CONSONANT SIGN WA
      n == 43587 || // Mn       CHAM CONSONANT SIGN FINAL NG
      n == 43596 || // Mn       CHAM CONSONANT SIGN FINAL M
      n == 43644 || // Mn       MYANMAR SIGN TAI LAING TONE-2
      n == 43696 || // Mn       TAI VIET MAI KANG
      43698 <= n && n <= 43700 || // Mn   [3] TAI VIET VOWEL I..TAI VIET VOWEL U
      43703 <= n && n <= 43704 || // Mn   [2] TAI VIET MAI KHIT..TAI VIET VOWEL IA
      43710 <= n && n <= 43711 || // Mn   [2] TAI VIET VOWEL AM..TAI VIET TONE MAI EK
      n == 43713 || // Mn       TAI VIET TONE MAI THO
      43756 <= n && n <= 43757 || // Mn   [2] MEETEI MAYEK VOWEL SIGN UU..MEETEI MAYEK VOWEL SIGN AAI
      n == 43766 || // Mn       MEETEI MAYEK VIRAMA
      n == 44005 || // Mn       MEETEI MAYEK VOWEL SIGN ANAP
      n == 44008 || // Mn       MEETEI MAYEK VOWEL SIGN UNAP
      n == 44013 || // Mn       MEETEI MAYEK APUN IYEK
      n == 64286 || // Mn       HEBREW POINT JUDEO-SPANISH VARIKA
      65024 <= n && n <= 65039 || // Mn  [16] VARIATION SELECTOR-1..VARIATION SELECTOR-16
      65056 <= n && n <= 65071 || // Mn  [16] COMBINING LIGATURE LEFT HALF..COMBINING CYRILLIC TITLO RIGHT HALF
      65438 <= n && n <= 65439 || // Lm   [2] HALFWIDTH KATAKANA VOICED SOUND MARK..HALFWIDTH KATAKANA SEMI-VOICED SOUND MARK
      n == 66045 || // Mn       PHAISTOS DISC SIGN COMBINING OBLIQUE STROKE
      n == 66272 || // Mn       COPTIC EPACT THOUSANDS MARK
      66422 <= n && n <= 66426 || // Mn   [5] COMBINING OLD PERMIC LETTER AN..COMBINING OLD PERMIC LETTER SII
      68097 <= n && n <= 68099 || // Mn   [3] KHAROSHTHI VOWEL SIGN I..KHAROSHTHI VOWEL SIGN VOCALIC R
      68101 <= n && n <= 68102 || // Mn   [2] KHAROSHTHI VOWEL SIGN E..KHAROSHTHI VOWEL SIGN O
      68108 <= n && n <= 68111 || // Mn   [4] KHAROSHTHI VOWEL LENGTH MARK..KHAROSHTHI SIGN VISARGA
      68152 <= n && n <= 68154 || // Mn   [3] KHAROSHTHI SIGN BAR ABOVE..KHAROSHTHI SIGN DOT BELOW
      n == 68159 || // Mn       KHAROSHTHI VIRAMA
      68325 <= n && n <= 68326 || // Mn   [2] MANICHAEAN ABBREVIATION MARK ABOVE..MANICHAEAN ABBREVIATION MARK BELOW
      n == 69633 || // Mn       BRAHMI SIGN ANUSVARA
      69688 <= n && n <= 69702 || // Mn  [15] BRAHMI VOWEL SIGN AA..BRAHMI VIRAMA
      69759 <= n && n <= 69761 || // Mn   [3] BRAHMI NUMBER JOINER..KAITHI SIGN ANUSVARA
      69811 <= n && n <= 69814 || // Mn   [4] KAITHI VOWEL SIGN U..KAITHI VOWEL SIGN AI
      69817 <= n && n <= 69818 || // Mn   [2] KAITHI SIGN VIRAMA..KAITHI SIGN NUKTA
      69888 <= n && n <= 69890 || // Mn   [3] CHAKMA SIGN CANDRABINDU..CHAKMA SIGN VISARGA
      69927 <= n && n <= 69931 || // Mn   [5] CHAKMA VOWEL SIGN A..CHAKMA VOWEL SIGN UU
      69933 <= n && n <= 69940 || // Mn   [8] CHAKMA VOWEL SIGN AI..CHAKMA MAAYYAA
      n == 70003 || // Mn       MAHAJANI SIGN NUKTA
      70016 <= n && n <= 70017 || // Mn   [2] SHARADA SIGN CANDRABINDU..SHARADA SIGN ANUSVARA
      70070 <= n && n <= 70078 || // Mn   [9] SHARADA VOWEL SIGN U..SHARADA VOWEL SIGN O
      70090 <= n && n <= 70092 || // Mn   [3] SHARADA SIGN NUKTA..SHARADA EXTRA SHORT VOWEL MARK
      70191 <= n && n <= 70193 || // Mn   [3] KHOJKI VOWEL SIGN U..KHOJKI VOWEL SIGN AI
      n == 70196 || // Mn       KHOJKI SIGN ANUSVARA
      70198 <= n && n <= 70199 || // Mn   [2] KHOJKI SIGN NUKTA..KHOJKI SIGN SHADDA
      n == 70206 || // Mn       KHOJKI SIGN SUKUN
      n == 70367 || // Mn       KHUDAWADI SIGN ANUSVARA
      70371 <= n && n <= 70378 || // Mn   [8] KHUDAWADI VOWEL SIGN U..KHUDAWADI SIGN VIRAMA
      70400 <= n && n <= 70401 || // Mn   [2] GRANTHA SIGN COMBINING ANUSVARA ABOVE..GRANTHA SIGN CANDRABINDU
      n == 70460 || // Mn       GRANTHA SIGN NUKTA
      n == 70462 || // Mc       GRANTHA VOWEL SIGN AA
      n == 70464 || // Mn       GRANTHA VOWEL SIGN II
      n == 70487 || // Mc       GRANTHA AU LENGTH MARK
      70502 <= n && n <= 70508 || // Mn   [7] COMBINING GRANTHA DIGIT ZERO..COMBINING GRANTHA DIGIT SIX
      70512 <= n && n <= 70516 || // Mn   [5] COMBINING GRANTHA LETTER A..COMBINING GRANTHA LETTER PA
      70712 <= n && n <= 70719 || // Mn   [8] NEWA VOWEL SIGN U..NEWA VOWEL SIGN AI
      70722 <= n && n <= 70724 || // Mn   [3] NEWA SIGN VIRAMA..NEWA SIGN ANUSVARA
      n == 70726 || // Mn       NEWA SIGN NUKTA
      n == 70832 || // Mc       TIRHUTA VOWEL SIGN AA
      70835 <= n && n <= 70840 || // Mn   [6] TIRHUTA VOWEL SIGN U..TIRHUTA VOWEL SIGN VOCALIC LL
      n == 70842 || // Mn       TIRHUTA VOWEL SIGN SHORT E
      n == 70845 || // Mc       TIRHUTA VOWEL SIGN SHORT O
      70847 <= n && n <= 70848 || // Mn   [2] TIRHUTA SIGN CANDRABINDU..TIRHUTA SIGN ANUSVARA
      70850 <= n && n <= 70851 || // Mn   [2] TIRHUTA SIGN VIRAMA..TIRHUTA SIGN NUKTA
      n == 71087 || // Mc       SIDDHAM VOWEL SIGN AA
      71090 <= n && n <= 71093 || // Mn   [4] SIDDHAM VOWEL SIGN U..SIDDHAM VOWEL SIGN VOCALIC RR
      71100 <= n && n <= 71101 || // Mn   [2] SIDDHAM SIGN CANDRABINDU..SIDDHAM SIGN ANUSVARA
      71103 <= n && n <= 71104 || // Mn   [2] SIDDHAM SIGN VIRAMA..SIDDHAM SIGN NUKTA
      71132 <= n && n <= 71133 || // Mn   [2] SIDDHAM VOWEL SIGN ALTERNATE U..SIDDHAM VOWEL SIGN ALTERNATE UU
      71219 <= n && n <= 71226 || // Mn   [8] MODI VOWEL SIGN U..MODI VOWEL SIGN AI
      n == 71229 || // Mn       MODI SIGN ANUSVARA
      71231 <= n && n <= 71232 || // Mn   [2] MODI SIGN VIRAMA..MODI SIGN ARDHACANDRA
      n == 71339 || // Mn       TAKRI SIGN ANUSVARA
      n == 71341 || // Mn       TAKRI VOWEL SIGN AA
      71344 <= n && n <= 71349 || // Mn   [6] TAKRI VOWEL SIGN U..TAKRI VOWEL SIGN AU
      n == 71351 || // Mn       TAKRI SIGN NUKTA
      71453 <= n && n <= 71455 || // Mn   [3] AHOM CONSONANT SIGN MEDIAL LA..AHOM CONSONANT SIGN MEDIAL LIGATING RA
      71458 <= n && n <= 71461 || // Mn   [4] AHOM VOWEL SIGN I..AHOM VOWEL SIGN UU
      71463 <= n && n <= 71467 || // Mn   [5] AHOM VOWEL SIGN AW..AHOM SIGN KILLER
      72193 <= n && n <= 72198 || // Mn   [6] ZANABAZAR SQUARE VOWEL SIGN I..ZANABAZAR SQUARE VOWEL SIGN O
      72201 <= n && n <= 72202 || // Mn   [2] ZANABAZAR SQUARE VOWEL SIGN REVERSED I..ZANABAZAR SQUARE VOWEL LENGTH MARK
      72243 <= n && n <= 72248 || // Mn   [6] ZANABAZAR SQUARE FINAL CONSONANT MARK..ZANABAZAR SQUARE SIGN ANUSVARA
      72251 <= n && n <= 72254 || // Mn   [4] ZANABAZAR SQUARE CLUSTER-FINAL LETTER YA..ZANABAZAR SQUARE CLUSTER-FINAL LETTER VA
      n == 72263 || // Mn       ZANABAZAR SQUARE SUBJOINER
      72273 <= n && n <= 72278 || // Mn   [6] SOYOMBO VOWEL SIGN I..SOYOMBO VOWEL SIGN OE
      72281 <= n && n <= 72283 || // Mn   [3] SOYOMBO VOWEL SIGN VOCALIC R..SOYOMBO VOWEL LENGTH MARK
      72330 <= n && n <= 72342 || // Mn  [13] SOYOMBO FINAL CONSONANT SIGN G..SOYOMBO SIGN ANUSVARA
      72344 <= n && n <= 72345 || // Mn   [2] SOYOMBO GEMINATION MARK..SOYOMBO SUBJOINER
      72752 <= n && n <= 72758 || // Mn   [7] BHAIKSUKI VOWEL SIGN I..BHAIKSUKI VOWEL SIGN VOCALIC L
      72760 <= n && n <= 72765 || // Mn   [6] BHAIKSUKI VOWEL SIGN E..BHAIKSUKI SIGN ANUSVARA
      n == 72767 || // Mn       BHAIKSUKI SIGN VIRAMA
      72850 <= n && n <= 72871 || // Mn  [22] MARCHEN SUBJOINED LETTER KA..MARCHEN SUBJOINED LETTER ZA
      72874 <= n && n <= 72880 || // Mn   [7] MARCHEN SUBJOINED LETTER RA..MARCHEN VOWEL SIGN AA
      72882 <= n && n <= 72883 || // Mn   [2] MARCHEN VOWEL SIGN U..MARCHEN VOWEL SIGN E
      72885 <= n && n <= 72886 || // Mn   [2] MARCHEN SIGN ANUSVARA..MARCHEN SIGN CANDRABINDU
      73009 <= n && n <= 73014 || // Mn   [6] MASARAM GONDI VOWEL SIGN AA..MASARAM GONDI VOWEL SIGN VOCALIC R
      n == 73018 || // Mn       MASARAM GONDI VOWEL SIGN E
      73020 <= n && n <= 73021 || // Mn   [2] MASARAM GONDI VOWEL SIGN AI..MASARAM GONDI VOWEL SIGN O
      73023 <= n && n <= 73029 || // Mn   [7] MASARAM GONDI VOWEL SIGN AU..MASARAM GONDI VIRAMA
      n == 73031 || // Mn       MASARAM GONDI RA-KARA
      92912 <= n && n <= 92916 || // Mn   [5] BASSA VAH COMBINING HIGH TONE..BASSA VAH COMBINING HIGH-LOW TONE
      92976 <= n && n <= 92982 || // Mn   [7] PAHAWH HMONG MARK CIM TUB..PAHAWH HMONG MARK CIM TAUM
      94095 <= n && n <= 94098 || // Mn   [4] MIAO TONE RIGHT..MIAO TONE BELOW
      113821 <= n && n <= 113822 || // Mn   [2] DUPLOYAN THICK LETTER SELECTOR..DUPLOYAN DOUBLE MARK
      n == 119141 || // Mc       MUSICAL SYMBOL COMBINING STEM
      119143 <= n && n <= 119145 || // Mn   [3] MUSICAL SYMBOL COMBINING TREMOLO-1..MUSICAL SYMBOL COMBINING TREMOLO-3
      119150 <= n && n <= 119154 || // Mc   [5] MUSICAL SYMBOL COMBINING FLAG-1..MUSICAL SYMBOL COMBINING FLAG-5
      119163 <= n && n <= 119170 || // Mn   [8] MUSICAL SYMBOL COMBINING ACCENT..MUSICAL SYMBOL COMBINING LOURE
      119173 <= n && n <= 119179 || // Mn   [7] MUSICAL SYMBOL COMBINING DOIT..MUSICAL SYMBOL COMBINING TRIPLE TONGUE
      119210 <= n && n <= 119213 || // Mn   [4] MUSICAL SYMBOL COMBINING DOWN BOW..MUSICAL SYMBOL COMBINING SNAP PIZZICATO
      119362 <= n && n <= 119364 || // Mn   [3] COMBINING GREEK MUSICAL TRISEME..COMBINING GREEK MUSICAL PENTASEME
      121344 <= n && n <= 121398 || // Mn  [55] SIGNWRITING HEAD RIM..SIGNWRITING AIR SUCKING IN
      121403 <= n && n <= 121452 || // Mn  [50] SIGNWRITING MOUTH CLOSED NEUTRAL..SIGNWRITING EXCITEMENT
      n == 121461 || // Mn       SIGNWRITING UPPER BODY TILTING FROM HIP JOINTS
      n == 121476 || // Mn       SIGNWRITING LOCATION HEAD NECK
      121499 <= n && n <= 121503 || // Mn   [5] SIGNWRITING FILL MODIFIER-2..SIGNWRITING FILL MODIFIER-6
      121505 <= n && n <= 121519 || // Mn  [15] SIGNWRITING ROTATION MODIFIER-2..SIGNWRITING ROTATION MODIFIER-16
      122880 <= n && n <= 122886 || // Mn   [7] COMBINING GLAGOLITIC LETTER AZU..COMBINING GLAGOLITIC LETTER ZHIVETE
      122888 <= n && n <= 122904 || // Mn  [17] COMBINING GLAGOLITIC LETTER ZEMLJA..COMBINING GLAGOLITIC LETTER HERU
      122907 <= n && n <= 122913 || // Mn   [7] COMBINING GLAGOLITIC LETTER SHTA..COMBINING GLAGOLITIC LETTER YATI
      122915 <= n && n <= 122916 || // Mn   [2] COMBINING GLAGOLITIC LETTER YU..COMBINING GLAGOLITIC LETTER SMALL YUS
      122918 <= n && n <= 122922 || // Mn   [5] COMBINING GLAGOLITIC LETTER YO..COMBINING GLAGOLITIC LETTER FITA
      125136 <= n && n <= 125142 || // Mn   [7] MENDE KIKAKUI COMBINING NUMBER TEENS..MENDE KIKAKUI COMBINING NUMBER MILLIONS
      125252 <= n && n <= 125258 || // Mn   [7] ADLAM ALIF LENGTHENER..ADLAM NUKTA
      917536 <= n && n <= 917631 || // Cf  [96] TAG SPACE..CANCEL TAG
      917760 <= n && n <= 917999 ? a : 127462 <= n && n <= 127487 ? l : n == 2307 || // Mc       DEVANAGARI SIGN VISARGA
      n == 2363 || // Mc       DEVANAGARI VOWEL SIGN OOE
      2366 <= n && n <= 2368 || // Mc   [3] DEVANAGARI VOWEL SIGN AA..DEVANAGARI VOWEL SIGN II
      2377 <= n && n <= 2380 || // Mc   [4] DEVANAGARI VOWEL SIGN CANDRA O..DEVANAGARI VOWEL SIGN AU
      2382 <= n && n <= 2383 || // Mc   [2] DEVANAGARI VOWEL SIGN PRISHTHAMATRA E..DEVANAGARI VOWEL SIGN AW
      2434 <= n && n <= 2435 || // Mc   [2] BENGALI SIGN ANUSVARA..BENGALI SIGN VISARGA
      2495 <= n && n <= 2496 || // Mc   [2] BENGALI VOWEL SIGN I..BENGALI VOWEL SIGN II
      2503 <= n && n <= 2504 || // Mc   [2] BENGALI VOWEL SIGN E..BENGALI VOWEL SIGN AI
      2507 <= n && n <= 2508 || // Mc   [2] BENGALI VOWEL SIGN O..BENGALI VOWEL SIGN AU
      n == 2563 || // Mc       GURMUKHI SIGN VISARGA
      2622 <= n && n <= 2624 || // Mc   [3] GURMUKHI VOWEL SIGN AA..GURMUKHI VOWEL SIGN II
      n == 2691 || // Mc       GUJARATI SIGN VISARGA
      2750 <= n && n <= 2752 || // Mc   [3] GUJARATI VOWEL SIGN AA..GUJARATI VOWEL SIGN II
      n == 2761 || // Mc       GUJARATI VOWEL SIGN CANDRA O
      2763 <= n && n <= 2764 || // Mc   [2] GUJARATI VOWEL SIGN O..GUJARATI VOWEL SIGN AU
      2818 <= n && n <= 2819 || // Mc   [2] ORIYA SIGN ANUSVARA..ORIYA SIGN VISARGA
      n == 2880 || // Mc       ORIYA VOWEL SIGN II
      2887 <= n && n <= 2888 || // Mc   [2] ORIYA VOWEL SIGN E..ORIYA VOWEL SIGN AI
      2891 <= n && n <= 2892 || // Mc   [2] ORIYA VOWEL SIGN O..ORIYA VOWEL SIGN AU
      n == 3007 || // Mc       TAMIL VOWEL SIGN I
      3009 <= n && n <= 3010 || // Mc   [2] TAMIL VOWEL SIGN U..TAMIL VOWEL SIGN UU
      3014 <= n && n <= 3016 || // Mc   [3] TAMIL VOWEL SIGN E..TAMIL VOWEL SIGN AI
      3018 <= n && n <= 3020 || // Mc   [3] TAMIL VOWEL SIGN O..TAMIL VOWEL SIGN AU
      3073 <= n && n <= 3075 || // Mc   [3] TELUGU SIGN CANDRABINDU..TELUGU SIGN VISARGA
      3137 <= n && n <= 3140 || // Mc   [4] TELUGU VOWEL SIGN U..TELUGU VOWEL SIGN VOCALIC RR
      3202 <= n && n <= 3203 || // Mc   [2] KANNADA SIGN ANUSVARA..KANNADA SIGN VISARGA
      n == 3262 || // Mc       KANNADA VOWEL SIGN AA
      3264 <= n && n <= 3265 || // Mc   [2] KANNADA VOWEL SIGN II..KANNADA VOWEL SIGN U
      3267 <= n && n <= 3268 || // Mc   [2] KANNADA VOWEL SIGN VOCALIC R..KANNADA VOWEL SIGN VOCALIC RR
      3271 <= n && n <= 3272 || // Mc   [2] KANNADA VOWEL SIGN EE..KANNADA VOWEL SIGN AI
      3274 <= n && n <= 3275 || // Mc   [2] KANNADA VOWEL SIGN O..KANNADA VOWEL SIGN OO
      3330 <= n && n <= 3331 || // Mc   [2] MALAYALAM SIGN ANUSVARA..MALAYALAM SIGN VISARGA
      3391 <= n && n <= 3392 || // Mc   [2] MALAYALAM VOWEL SIGN I..MALAYALAM VOWEL SIGN II
      3398 <= n && n <= 3400 || // Mc   [3] MALAYALAM VOWEL SIGN E..MALAYALAM VOWEL SIGN AI
      3402 <= n && n <= 3404 || // Mc   [3] MALAYALAM VOWEL SIGN O..MALAYALAM VOWEL SIGN AU
      3458 <= n && n <= 3459 || // Mc   [2] SINHALA SIGN ANUSVARAYA..SINHALA SIGN VISARGAYA
      3536 <= n && n <= 3537 || // Mc   [2] SINHALA VOWEL SIGN KETTI AEDA-PILLA..SINHALA VOWEL SIGN DIGA AEDA-PILLA
      3544 <= n && n <= 3550 || // Mc   [7] SINHALA VOWEL SIGN GAETTA-PILLA..SINHALA VOWEL SIGN KOMBUVA HAA GAYANUKITTA
      3570 <= n && n <= 3571 || // Mc   [2] SINHALA VOWEL SIGN DIGA GAETTA-PILLA..SINHALA VOWEL SIGN DIGA GAYANUKITTA
      n == 3635 || // Lo       THAI CHARACTER SARA AM
      n == 3763 || // Lo       LAO VOWEL SIGN AM
      3902 <= n && n <= 3903 || // Mc   [2] TIBETAN SIGN YAR TSHES..TIBETAN SIGN MAR TSHES
      n == 3967 || // Mc       TIBETAN SIGN RNAM BCAD
      n == 4145 || // Mc       MYANMAR VOWEL SIGN E
      4155 <= n && n <= 4156 || // Mc   [2] MYANMAR CONSONANT SIGN MEDIAL YA..MYANMAR CONSONANT SIGN MEDIAL RA
      4182 <= n && n <= 4183 || // Mc   [2] MYANMAR VOWEL SIGN VOCALIC R..MYANMAR VOWEL SIGN VOCALIC RR
      n == 4228 || // Mc       MYANMAR VOWEL SIGN SHAN E
      n == 6070 || // Mc       KHMER VOWEL SIGN AA
      6078 <= n && n <= 6085 || // Mc   [8] KHMER VOWEL SIGN OE..KHMER VOWEL SIGN AU
      6087 <= n && n <= 6088 || // Mc   [2] KHMER SIGN REAHMUK..KHMER SIGN YUUKALEAPINTU
      6435 <= n && n <= 6438 || // Mc   [4] LIMBU VOWEL SIGN EE..LIMBU VOWEL SIGN AU
      6441 <= n && n <= 6443 || // Mc   [3] LIMBU SUBJOINED LETTER YA..LIMBU SUBJOINED LETTER WA
      6448 <= n && n <= 6449 || // Mc   [2] LIMBU SMALL LETTER KA..LIMBU SMALL LETTER NGA
      6451 <= n && n <= 6456 || // Mc   [6] LIMBU SMALL LETTER TA..LIMBU SMALL LETTER LA
      6681 <= n && n <= 6682 || // Mc   [2] BUGINESE VOWEL SIGN E..BUGINESE VOWEL SIGN O
      n == 6741 || // Mc       TAI THAM CONSONANT SIGN MEDIAL RA
      n == 6743 || // Mc       TAI THAM CONSONANT SIGN LA TANG LAI
      6765 <= n && n <= 6770 || // Mc   [6] TAI THAM VOWEL SIGN OY..TAI THAM VOWEL SIGN THAM AI
      n == 6916 || // Mc       BALINESE SIGN BISAH
      n == 6965 || // Mc       BALINESE VOWEL SIGN TEDUNG
      n == 6971 || // Mc       BALINESE VOWEL SIGN RA REPA TEDUNG
      6973 <= n && n <= 6977 || // Mc   [5] BALINESE VOWEL SIGN LA LENGA TEDUNG..BALINESE VOWEL SIGN TALING REPA TEDUNG
      6979 <= n && n <= 6980 || // Mc   [2] BALINESE VOWEL SIGN PEPET TEDUNG..BALINESE ADEG ADEG
      n == 7042 || // Mc       SUNDANESE SIGN PANGWISAD
      n == 7073 || // Mc       SUNDANESE CONSONANT SIGN PAMINGKAL
      7078 <= n && n <= 7079 || // Mc   [2] SUNDANESE VOWEL SIGN PANAELAENG..SUNDANESE VOWEL SIGN PANOLONG
      n == 7082 || // Mc       SUNDANESE SIGN PAMAAEH
      n == 7143 || // Mc       BATAK VOWEL SIGN E
      7146 <= n && n <= 7148 || // Mc   [3] BATAK VOWEL SIGN I..BATAK VOWEL SIGN O
      n == 7150 || // Mc       BATAK VOWEL SIGN U
      7154 <= n && n <= 7155 || // Mc   [2] BATAK PANGOLAT..BATAK PANONGONAN
      7204 <= n && n <= 7211 || // Mc   [8] LEPCHA SUBJOINED LETTER YA..LEPCHA VOWEL SIGN UU
      7220 <= n && n <= 7221 || // Mc   [2] LEPCHA CONSONANT SIGN NYIN-DO..LEPCHA CONSONANT SIGN KANG
      n == 7393 || // Mc       VEDIC TONE ATHARVAVEDIC INDEPENDENT SVARITA
      7410 <= n && n <= 7411 || // Mc   [2] VEDIC SIGN ARDHAVISARGA..VEDIC SIGN ROTATED ARDHAVISARGA
      n == 7415 || // Mc       VEDIC SIGN ATIKRAMA
      43043 <= n && n <= 43044 || // Mc   [2] SYLOTI NAGRI VOWEL SIGN A..SYLOTI NAGRI VOWEL SIGN I
      n == 43047 || // Mc       SYLOTI NAGRI VOWEL SIGN OO
      43136 <= n && n <= 43137 || // Mc   [2] SAURASHTRA SIGN ANUSVARA..SAURASHTRA SIGN VISARGA
      43188 <= n && n <= 43203 || // Mc  [16] SAURASHTRA CONSONANT SIGN HAARU..SAURASHTRA VOWEL SIGN AU
      43346 <= n && n <= 43347 || // Mc   [2] REJANG CONSONANT SIGN H..REJANG VIRAMA
      n == 43395 || // Mc       JAVANESE SIGN WIGNYAN
      43444 <= n && n <= 43445 || // Mc   [2] JAVANESE VOWEL SIGN TARUNG..JAVANESE VOWEL SIGN TOLONG
      43450 <= n && n <= 43451 || // Mc   [2] JAVANESE VOWEL SIGN TALING..JAVANESE VOWEL SIGN DIRGA MURE
      43453 <= n && n <= 43456 || // Mc   [4] JAVANESE CONSONANT SIGN KERET..JAVANESE PANGKON
      43567 <= n && n <= 43568 || // Mc   [2] CHAM VOWEL SIGN O..CHAM VOWEL SIGN AI
      43571 <= n && n <= 43572 || // Mc   [2] CHAM CONSONANT SIGN YA..CHAM CONSONANT SIGN RA
      n == 43597 || // Mc       CHAM CONSONANT SIGN FINAL H
      n == 43755 || // Mc       MEETEI MAYEK VOWEL SIGN II
      43758 <= n && n <= 43759 || // Mc   [2] MEETEI MAYEK VOWEL SIGN AU..MEETEI MAYEK VOWEL SIGN AAU
      n == 43765 || // Mc       MEETEI MAYEK VOWEL SIGN VISARGA
      44003 <= n && n <= 44004 || // Mc   [2] MEETEI MAYEK VOWEL SIGN ONAP..MEETEI MAYEK VOWEL SIGN INAP
      44006 <= n && n <= 44007 || // Mc   [2] MEETEI MAYEK VOWEL SIGN YENAP..MEETEI MAYEK VOWEL SIGN SOUNAP
      44009 <= n && n <= 44010 || // Mc   [2] MEETEI MAYEK VOWEL SIGN CHEINAP..MEETEI MAYEK VOWEL SIGN NUNG
      n == 44012 || // Mc       MEETEI MAYEK LUM IYEK
      n == 69632 || // Mc       BRAHMI SIGN CANDRABINDU
      n == 69634 || // Mc       BRAHMI SIGN VISARGA
      n == 69762 || // Mc       KAITHI SIGN VISARGA
      69808 <= n && n <= 69810 || // Mc   [3] KAITHI VOWEL SIGN AA..KAITHI VOWEL SIGN II
      69815 <= n && n <= 69816 || // Mc   [2] KAITHI VOWEL SIGN O..KAITHI VOWEL SIGN AU
      n == 69932 || // Mc       CHAKMA VOWEL SIGN E
      n == 70018 || // Mc       SHARADA SIGN VISARGA
      70067 <= n && n <= 70069 || // Mc   [3] SHARADA VOWEL SIGN AA..SHARADA VOWEL SIGN II
      70079 <= n && n <= 70080 || // Mc   [2] SHARADA VOWEL SIGN AU..SHARADA SIGN VIRAMA
      70188 <= n && n <= 70190 || // Mc   [3] KHOJKI VOWEL SIGN AA..KHOJKI VOWEL SIGN II
      70194 <= n && n <= 70195 || // Mc   [2] KHOJKI VOWEL SIGN O..KHOJKI VOWEL SIGN AU
      n == 70197 || // Mc       KHOJKI SIGN VIRAMA
      70368 <= n && n <= 70370 || // Mc   [3] KHUDAWADI VOWEL SIGN AA..KHUDAWADI VOWEL SIGN II
      70402 <= n && n <= 70403 || // Mc   [2] GRANTHA SIGN ANUSVARA..GRANTHA SIGN VISARGA
      n == 70463 || // Mc       GRANTHA VOWEL SIGN I
      70465 <= n && n <= 70468 || // Mc   [4] GRANTHA VOWEL SIGN U..GRANTHA VOWEL SIGN VOCALIC RR
      70471 <= n && n <= 70472 || // Mc   [2] GRANTHA VOWEL SIGN EE..GRANTHA VOWEL SIGN AI
      70475 <= n && n <= 70477 || // Mc   [3] GRANTHA VOWEL SIGN OO..GRANTHA SIGN VIRAMA
      70498 <= n && n <= 70499 || // Mc   [2] GRANTHA VOWEL SIGN VOCALIC L..GRANTHA VOWEL SIGN VOCALIC LL
      70709 <= n && n <= 70711 || // Mc   [3] NEWA VOWEL SIGN AA..NEWA VOWEL SIGN II
      70720 <= n && n <= 70721 || // Mc   [2] NEWA VOWEL SIGN O..NEWA VOWEL SIGN AU
      n == 70725 || // Mc       NEWA SIGN VISARGA
      70833 <= n && n <= 70834 || // Mc   [2] TIRHUTA VOWEL SIGN I..TIRHUTA VOWEL SIGN II
      n == 70841 || // Mc       TIRHUTA VOWEL SIGN E
      70843 <= n && n <= 70844 || // Mc   [2] TIRHUTA VOWEL SIGN AI..TIRHUTA VOWEL SIGN O
      n == 70846 || // Mc       TIRHUTA VOWEL SIGN AU
      n == 70849 || // Mc       TIRHUTA SIGN VISARGA
      71088 <= n && n <= 71089 || // Mc   [2] SIDDHAM VOWEL SIGN I..SIDDHAM VOWEL SIGN II
      71096 <= n && n <= 71099 || // Mc   [4] SIDDHAM VOWEL SIGN E..SIDDHAM VOWEL SIGN AU
      n == 71102 || // Mc       SIDDHAM SIGN VISARGA
      71216 <= n && n <= 71218 || // Mc   [3] MODI VOWEL SIGN AA..MODI VOWEL SIGN II
      71227 <= n && n <= 71228 || // Mc   [2] MODI VOWEL SIGN O..MODI VOWEL SIGN AU
      n == 71230 || // Mc       MODI SIGN VISARGA
      n == 71340 || // Mc       TAKRI SIGN VISARGA
      71342 <= n && n <= 71343 || // Mc   [2] TAKRI VOWEL SIGN I..TAKRI VOWEL SIGN II
      n == 71350 || // Mc       TAKRI SIGN VIRAMA
      71456 <= n && n <= 71457 || // Mc   [2] AHOM VOWEL SIGN A..AHOM VOWEL SIGN AA
      n == 71462 || // Mc       AHOM VOWEL SIGN E
      72199 <= n && n <= 72200 || // Mc   [2] ZANABAZAR SQUARE VOWEL SIGN AI..ZANABAZAR SQUARE VOWEL SIGN AU
      n == 72249 || // Mc       ZANABAZAR SQUARE SIGN VISARGA
      72279 <= n && n <= 72280 || // Mc   [2] SOYOMBO VOWEL SIGN AI..SOYOMBO VOWEL SIGN AU
      n == 72343 || // Mc       SOYOMBO SIGN VISARGA
      n == 72751 || // Mc       BHAIKSUKI VOWEL SIGN AA
      n == 72766 || // Mc       BHAIKSUKI SIGN VISARGA
      n == 72873 || // Mc       MARCHEN SUBJOINED LETTER YA
      n == 72881 || // Mc       MARCHEN VOWEL SIGN I
      n == 72884 || // Mc       MARCHEN VOWEL SIGN O
      94033 <= n && n <= 94078 || // Mc  [46] MIAO SIGN ASPIRATION..MIAO VOWEL SIGN NG
      n == 119142 || // Mc       MUSICAL SYMBOL COMBINING SPRECHGESANG STEM
      n == 119149 ? s : 4352 <= n && n <= 4447 || // Lo  [96] HANGUL CHOSEONG KIYEOK..HANGUL CHOSEONG FILLER
      43360 <= n && n <= 43388 ? d : 4448 <= n && n <= 4519 || // Lo  [72] HANGUL JUNGSEONG FILLER..HANGUL JUNGSEONG O-YAE
      55216 <= n && n <= 55238 ? u : 4520 <= n && n <= 4607 || // Lo  [88] HANGUL JONGSEONG KIYEOK..HANGUL JONGSEONG SSANGNIEUN
      55243 <= n && n <= 55291 ? c : n == 44032 || // Lo       HANGUL SYLLABLE GA
      n == 44060 || // Lo       HANGUL SYLLABLE GAE
      n == 44088 || // Lo       HANGUL SYLLABLE GYA
      n == 44116 || // Lo       HANGUL SYLLABLE GYAE
      n == 44144 || // Lo       HANGUL SYLLABLE GEO
      n == 44172 || // Lo       HANGUL SYLLABLE GE
      n == 44200 || // Lo       HANGUL SYLLABLE GYEO
      n == 44228 || // Lo       HANGUL SYLLABLE GYE
      n == 44256 || // Lo       HANGUL SYLLABLE GO
      n == 44284 || // Lo       HANGUL SYLLABLE GWA
      n == 44312 || // Lo       HANGUL SYLLABLE GWAE
      n == 44340 || // Lo       HANGUL SYLLABLE GOE
      n == 44368 || // Lo       HANGUL SYLLABLE GYO
      n == 44396 || // Lo       HANGUL SYLLABLE GU
      n == 44424 || // Lo       HANGUL SYLLABLE GWEO
      n == 44452 || // Lo       HANGUL SYLLABLE GWE
      n == 44480 || // Lo       HANGUL SYLLABLE GWI
      n == 44508 || // Lo       HANGUL SYLLABLE GYU
      n == 44536 || // Lo       HANGUL SYLLABLE GEU
      n == 44564 || // Lo       HANGUL SYLLABLE GYI
      n == 44592 || // Lo       HANGUL SYLLABLE GI
      n == 44620 || // Lo       HANGUL SYLLABLE GGA
      n == 44648 || // Lo       HANGUL SYLLABLE GGAE
      n == 44676 || // Lo       HANGUL SYLLABLE GGYA
      n == 44704 || // Lo       HANGUL SYLLABLE GGYAE
      n == 44732 || // Lo       HANGUL SYLLABLE GGEO
      n == 44760 || // Lo       HANGUL SYLLABLE GGE
      n == 44788 || // Lo       HANGUL SYLLABLE GGYEO
      n == 44816 || // Lo       HANGUL SYLLABLE GGYE
      n == 44844 || // Lo       HANGUL SYLLABLE GGO
      n == 44872 || // Lo       HANGUL SYLLABLE GGWA
      n == 44900 || // Lo       HANGUL SYLLABLE GGWAE
      n == 44928 || // Lo       HANGUL SYLLABLE GGOE
      n == 44956 || // Lo       HANGUL SYLLABLE GGYO
      n == 44984 || // Lo       HANGUL SYLLABLE GGU
      n == 45012 || // Lo       HANGUL SYLLABLE GGWEO
      n == 45040 || // Lo       HANGUL SYLLABLE GGWE
      n == 45068 || // Lo       HANGUL SYLLABLE GGWI
      n == 45096 || // Lo       HANGUL SYLLABLE GGYU
      n == 45124 || // Lo       HANGUL SYLLABLE GGEU
      n == 45152 || // Lo       HANGUL SYLLABLE GGYI
      n == 45180 || // Lo       HANGUL SYLLABLE GGI
      n == 45208 || // Lo       HANGUL SYLLABLE NA
      n == 45236 || // Lo       HANGUL SYLLABLE NAE
      n == 45264 || // Lo       HANGUL SYLLABLE NYA
      n == 45292 || // Lo       HANGUL SYLLABLE NYAE
      n == 45320 || // Lo       HANGUL SYLLABLE NEO
      n == 45348 || // Lo       HANGUL SYLLABLE NE
      n == 45376 || // Lo       HANGUL SYLLABLE NYEO
      n == 45404 || // Lo       HANGUL SYLLABLE NYE
      n == 45432 || // Lo       HANGUL SYLLABLE NO
      n == 45460 || // Lo       HANGUL SYLLABLE NWA
      n == 45488 || // Lo       HANGUL SYLLABLE NWAE
      n == 45516 || // Lo       HANGUL SYLLABLE NOE
      n == 45544 || // Lo       HANGUL SYLLABLE NYO
      n == 45572 || // Lo       HANGUL SYLLABLE NU
      n == 45600 || // Lo       HANGUL SYLLABLE NWEO
      n == 45628 || // Lo       HANGUL SYLLABLE NWE
      n == 45656 || // Lo       HANGUL SYLLABLE NWI
      n == 45684 || // Lo       HANGUL SYLLABLE NYU
      n == 45712 || // Lo       HANGUL SYLLABLE NEU
      n == 45740 || // Lo       HANGUL SYLLABLE NYI
      n == 45768 || // Lo       HANGUL SYLLABLE NI
      n == 45796 || // Lo       HANGUL SYLLABLE DA
      n == 45824 || // Lo       HANGUL SYLLABLE DAE
      n == 45852 || // Lo       HANGUL SYLLABLE DYA
      n == 45880 || // Lo       HANGUL SYLLABLE DYAE
      n == 45908 || // Lo       HANGUL SYLLABLE DEO
      n == 45936 || // Lo       HANGUL SYLLABLE DE
      n == 45964 || // Lo       HANGUL SYLLABLE DYEO
      n == 45992 || // Lo       HANGUL SYLLABLE DYE
      n == 46020 || // Lo       HANGUL SYLLABLE DO
      n == 46048 || // Lo       HANGUL SYLLABLE DWA
      n == 46076 || // Lo       HANGUL SYLLABLE DWAE
      n == 46104 || // Lo       HANGUL SYLLABLE DOE
      n == 46132 || // Lo       HANGUL SYLLABLE DYO
      n == 46160 || // Lo       HANGUL SYLLABLE DU
      n == 46188 || // Lo       HANGUL SYLLABLE DWEO
      n == 46216 || // Lo       HANGUL SYLLABLE DWE
      n == 46244 || // Lo       HANGUL SYLLABLE DWI
      n == 46272 || // Lo       HANGUL SYLLABLE DYU
      n == 46300 || // Lo       HANGUL SYLLABLE DEU
      n == 46328 || // Lo       HANGUL SYLLABLE DYI
      n == 46356 || // Lo       HANGUL SYLLABLE DI
      n == 46384 || // Lo       HANGUL SYLLABLE DDA
      n == 46412 || // Lo       HANGUL SYLLABLE DDAE
      n == 46440 || // Lo       HANGUL SYLLABLE DDYA
      n == 46468 || // Lo       HANGUL SYLLABLE DDYAE
      n == 46496 || // Lo       HANGUL SYLLABLE DDEO
      n == 46524 || // Lo       HANGUL SYLLABLE DDE
      n == 46552 || // Lo       HANGUL SYLLABLE DDYEO
      n == 46580 || // Lo       HANGUL SYLLABLE DDYE
      n == 46608 || // Lo       HANGUL SYLLABLE DDO
      n == 46636 || // Lo       HANGUL SYLLABLE DDWA
      n == 46664 || // Lo       HANGUL SYLLABLE DDWAE
      n == 46692 || // Lo       HANGUL SYLLABLE DDOE
      n == 46720 || // Lo       HANGUL SYLLABLE DDYO
      n == 46748 || // Lo       HANGUL SYLLABLE DDU
      n == 46776 || // Lo       HANGUL SYLLABLE DDWEO
      n == 46804 || // Lo       HANGUL SYLLABLE DDWE
      n == 46832 || // Lo       HANGUL SYLLABLE DDWI
      n == 46860 || // Lo       HANGUL SYLLABLE DDYU
      n == 46888 || // Lo       HANGUL SYLLABLE DDEU
      n == 46916 || // Lo       HANGUL SYLLABLE DDYI
      n == 46944 || // Lo       HANGUL SYLLABLE DDI
      n == 46972 || // Lo       HANGUL SYLLABLE RA
      n == 47e3 || // Lo       HANGUL SYLLABLE RAE
      n == 47028 || // Lo       HANGUL SYLLABLE RYA
      n == 47056 || // Lo       HANGUL SYLLABLE RYAE
      n == 47084 || // Lo       HANGUL SYLLABLE REO
      n == 47112 || // Lo       HANGUL SYLLABLE RE
      n == 47140 || // Lo       HANGUL SYLLABLE RYEO
      n == 47168 || // Lo       HANGUL SYLLABLE RYE
      n == 47196 || // Lo       HANGUL SYLLABLE RO
      n == 47224 || // Lo       HANGUL SYLLABLE RWA
      n == 47252 || // Lo       HANGUL SYLLABLE RWAE
      n == 47280 || // Lo       HANGUL SYLLABLE ROE
      n == 47308 || // Lo       HANGUL SYLLABLE RYO
      n == 47336 || // Lo       HANGUL SYLLABLE RU
      n == 47364 || // Lo       HANGUL SYLLABLE RWEO
      n == 47392 || // Lo       HANGUL SYLLABLE RWE
      n == 47420 || // Lo       HANGUL SYLLABLE RWI
      n == 47448 || // Lo       HANGUL SYLLABLE RYU
      n == 47476 || // Lo       HANGUL SYLLABLE REU
      n == 47504 || // Lo       HANGUL SYLLABLE RYI
      n == 47532 || // Lo       HANGUL SYLLABLE RI
      n == 47560 || // Lo       HANGUL SYLLABLE MA
      n == 47588 || // Lo       HANGUL SYLLABLE MAE
      n == 47616 || // Lo       HANGUL SYLLABLE MYA
      n == 47644 || // Lo       HANGUL SYLLABLE MYAE
      n == 47672 || // Lo       HANGUL SYLLABLE MEO
      n == 47700 || // Lo       HANGUL SYLLABLE ME
      n == 47728 || // Lo       HANGUL SYLLABLE MYEO
      n == 47756 || // Lo       HANGUL SYLLABLE MYE
      n == 47784 || // Lo       HANGUL SYLLABLE MO
      n == 47812 || // Lo       HANGUL SYLLABLE MWA
      n == 47840 || // Lo       HANGUL SYLLABLE MWAE
      n == 47868 || // Lo       HANGUL SYLLABLE MOE
      n == 47896 || // Lo       HANGUL SYLLABLE MYO
      n == 47924 || // Lo       HANGUL SYLLABLE MU
      n == 47952 || // Lo       HANGUL SYLLABLE MWEO
      n == 47980 || // Lo       HANGUL SYLLABLE MWE
      n == 48008 || // Lo       HANGUL SYLLABLE MWI
      n == 48036 || // Lo       HANGUL SYLLABLE MYU
      n == 48064 || // Lo       HANGUL SYLLABLE MEU
      n == 48092 || // Lo       HANGUL SYLLABLE MYI
      n == 48120 || // Lo       HANGUL SYLLABLE MI
      n == 48148 || // Lo       HANGUL SYLLABLE BA
      n == 48176 || // Lo       HANGUL SYLLABLE BAE
      n == 48204 || // Lo       HANGUL SYLLABLE BYA
      n == 48232 || // Lo       HANGUL SYLLABLE BYAE
      n == 48260 || // Lo       HANGUL SYLLABLE BEO
      n == 48288 || // Lo       HANGUL SYLLABLE BE
      n == 48316 || // Lo       HANGUL SYLLABLE BYEO
      n == 48344 || // Lo       HANGUL SYLLABLE BYE
      n == 48372 || // Lo       HANGUL SYLLABLE BO
      n == 48400 || // Lo       HANGUL SYLLABLE BWA
      n == 48428 || // Lo       HANGUL SYLLABLE BWAE
      n == 48456 || // Lo       HANGUL SYLLABLE BOE
      n == 48484 || // Lo       HANGUL SYLLABLE BYO
      n == 48512 || // Lo       HANGUL SYLLABLE BU
      n == 48540 || // Lo       HANGUL SYLLABLE BWEO
      n == 48568 || // Lo       HANGUL SYLLABLE BWE
      n == 48596 || // Lo       HANGUL SYLLABLE BWI
      n == 48624 || // Lo       HANGUL SYLLABLE BYU
      n == 48652 || // Lo       HANGUL SYLLABLE BEU
      n == 48680 || // Lo       HANGUL SYLLABLE BYI
      n == 48708 || // Lo       HANGUL SYLLABLE BI
      n == 48736 || // Lo       HANGUL SYLLABLE BBA
      n == 48764 || // Lo       HANGUL SYLLABLE BBAE
      n == 48792 || // Lo       HANGUL SYLLABLE BBYA
      n == 48820 || // Lo       HANGUL SYLLABLE BBYAE
      n == 48848 || // Lo       HANGUL SYLLABLE BBEO
      n == 48876 || // Lo       HANGUL SYLLABLE BBE
      n == 48904 || // Lo       HANGUL SYLLABLE BBYEO
      n == 48932 || // Lo       HANGUL SYLLABLE BBYE
      n == 48960 || // Lo       HANGUL SYLLABLE BBO
      n == 48988 || // Lo       HANGUL SYLLABLE BBWA
      n == 49016 || // Lo       HANGUL SYLLABLE BBWAE
      n == 49044 || // Lo       HANGUL SYLLABLE BBOE
      n == 49072 || // Lo       HANGUL SYLLABLE BBYO
      n == 49100 || // Lo       HANGUL SYLLABLE BBU
      n == 49128 || // Lo       HANGUL SYLLABLE BBWEO
      n == 49156 || // Lo       HANGUL SYLLABLE BBWE
      n == 49184 || // Lo       HANGUL SYLLABLE BBWI
      n == 49212 || // Lo       HANGUL SYLLABLE BBYU
      n == 49240 || // Lo       HANGUL SYLLABLE BBEU
      n == 49268 || // Lo       HANGUL SYLLABLE BBYI
      n == 49296 || // Lo       HANGUL SYLLABLE BBI
      n == 49324 || // Lo       HANGUL SYLLABLE SA
      n == 49352 || // Lo       HANGUL SYLLABLE SAE
      n == 49380 || // Lo       HANGUL SYLLABLE SYA
      n == 49408 || // Lo       HANGUL SYLLABLE SYAE
      n == 49436 || // Lo       HANGUL SYLLABLE SEO
      n == 49464 || // Lo       HANGUL SYLLABLE SE
      n == 49492 || // Lo       HANGUL SYLLABLE SYEO
      n == 49520 || // Lo       HANGUL SYLLABLE SYE
      n == 49548 || // Lo       HANGUL SYLLABLE SO
      n == 49576 || // Lo       HANGUL SYLLABLE SWA
      n == 49604 || // Lo       HANGUL SYLLABLE SWAE
      n == 49632 || // Lo       HANGUL SYLLABLE SOE
      n == 49660 || // Lo       HANGUL SYLLABLE SYO
      n == 49688 || // Lo       HANGUL SYLLABLE SU
      n == 49716 || // Lo       HANGUL SYLLABLE SWEO
      n == 49744 || // Lo       HANGUL SYLLABLE SWE
      n == 49772 || // Lo       HANGUL SYLLABLE SWI
      n == 49800 || // Lo       HANGUL SYLLABLE SYU
      n == 49828 || // Lo       HANGUL SYLLABLE SEU
      n == 49856 || // Lo       HANGUL SYLLABLE SYI
      n == 49884 || // Lo       HANGUL SYLLABLE SI
      n == 49912 || // Lo       HANGUL SYLLABLE SSA
      n == 49940 || // Lo       HANGUL SYLLABLE SSAE
      n == 49968 || // Lo       HANGUL SYLLABLE SSYA
      n == 49996 || // Lo       HANGUL SYLLABLE SSYAE
      n == 50024 || // Lo       HANGUL SYLLABLE SSEO
      n == 50052 || // Lo       HANGUL SYLLABLE SSE
      n == 50080 || // Lo       HANGUL SYLLABLE SSYEO
      n == 50108 || // Lo       HANGUL SYLLABLE SSYE
      n == 50136 || // Lo       HANGUL SYLLABLE SSO
      n == 50164 || // Lo       HANGUL SYLLABLE SSWA
      n == 50192 || // Lo       HANGUL SYLLABLE SSWAE
      n == 50220 || // Lo       HANGUL SYLLABLE SSOE
      n == 50248 || // Lo       HANGUL SYLLABLE SSYO
      n == 50276 || // Lo       HANGUL SYLLABLE SSU
      n == 50304 || // Lo       HANGUL SYLLABLE SSWEO
      n == 50332 || // Lo       HANGUL SYLLABLE SSWE
      n == 50360 || // Lo       HANGUL SYLLABLE SSWI
      n == 50388 || // Lo       HANGUL SYLLABLE SSYU
      n == 50416 || // Lo       HANGUL SYLLABLE SSEU
      n == 50444 || // Lo       HANGUL SYLLABLE SSYI
      n == 50472 || // Lo       HANGUL SYLLABLE SSI
      n == 50500 || // Lo       HANGUL SYLLABLE A
      n == 50528 || // Lo       HANGUL SYLLABLE AE
      n == 50556 || // Lo       HANGUL SYLLABLE YA
      n == 50584 || // Lo       HANGUL SYLLABLE YAE
      n == 50612 || // Lo       HANGUL SYLLABLE EO
      n == 50640 || // Lo       HANGUL SYLLABLE E
      n == 50668 || // Lo       HANGUL SYLLABLE YEO
      n == 50696 || // Lo       HANGUL SYLLABLE YE
      n == 50724 || // Lo       HANGUL SYLLABLE O
      n == 50752 || // Lo       HANGUL SYLLABLE WA
      n == 50780 || // Lo       HANGUL SYLLABLE WAE
      n == 50808 || // Lo       HANGUL SYLLABLE OE
      n == 50836 || // Lo       HANGUL SYLLABLE YO
      n == 50864 || // Lo       HANGUL SYLLABLE U
      n == 50892 || // Lo       HANGUL SYLLABLE WEO
      n == 50920 || // Lo       HANGUL SYLLABLE WE
      n == 50948 || // Lo       HANGUL SYLLABLE WI
      n == 50976 || // Lo       HANGUL SYLLABLE YU
      n == 51004 || // Lo       HANGUL SYLLABLE EU
      n == 51032 || // Lo       HANGUL SYLLABLE YI
      n == 51060 || // Lo       HANGUL SYLLABLE I
      n == 51088 || // Lo       HANGUL SYLLABLE JA
      n == 51116 || // Lo       HANGUL SYLLABLE JAE
      n == 51144 || // Lo       HANGUL SYLLABLE JYA
      n == 51172 || // Lo       HANGUL SYLLABLE JYAE
      n == 51200 || // Lo       HANGUL SYLLABLE JEO
      n == 51228 || // Lo       HANGUL SYLLABLE JE
      n == 51256 || // Lo       HANGUL SYLLABLE JYEO
      n == 51284 || // Lo       HANGUL SYLLABLE JYE
      n == 51312 || // Lo       HANGUL SYLLABLE JO
      n == 51340 || // Lo       HANGUL SYLLABLE JWA
      n == 51368 || // Lo       HANGUL SYLLABLE JWAE
      n == 51396 || // Lo       HANGUL SYLLABLE JOE
      n == 51424 || // Lo       HANGUL SYLLABLE JYO
      n == 51452 || // Lo       HANGUL SYLLABLE JU
      n == 51480 || // Lo       HANGUL SYLLABLE JWEO
      n == 51508 || // Lo       HANGUL SYLLABLE JWE
      n == 51536 || // Lo       HANGUL SYLLABLE JWI
      n == 51564 || // Lo       HANGUL SYLLABLE JYU
      n == 51592 || // Lo       HANGUL SYLLABLE JEU
      n == 51620 || // Lo       HANGUL SYLLABLE JYI
      n == 51648 || // Lo       HANGUL SYLLABLE JI
      n == 51676 || // Lo       HANGUL SYLLABLE JJA
      n == 51704 || // Lo       HANGUL SYLLABLE JJAE
      n == 51732 || // Lo       HANGUL SYLLABLE JJYA
      n == 51760 || // Lo       HANGUL SYLLABLE JJYAE
      n == 51788 || // Lo       HANGUL SYLLABLE JJEO
      n == 51816 || // Lo       HANGUL SYLLABLE JJE
      n == 51844 || // Lo       HANGUL SYLLABLE JJYEO
      n == 51872 || // Lo       HANGUL SYLLABLE JJYE
      n == 51900 || // Lo       HANGUL SYLLABLE JJO
      n == 51928 || // Lo       HANGUL SYLLABLE JJWA
      n == 51956 || // Lo       HANGUL SYLLABLE JJWAE
      n == 51984 || // Lo       HANGUL SYLLABLE JJOE
      n == 52012 || // Lo       HANGUL SYLLABLE JJYO
      n == 52040 || // Lo       HANGUL SYLLABLE JJU
      n == 52068 || // Lo       HANGUL SYLLABLE JJWEO
      n == 52096 || // Lo       HANGUL SYLLABLE JJWE
      n == 52124 || // Lo       HANGUL SYLLABLE JJWI
      n == 52152 || // Lo       HANGUL SYLLABLE JJYU
      n == 52180 || // Lo       HANGUL SYLLABLE JJEU
      n == 52208 || // Lo       HANGUL SYLLABLE JJYI
      n == 52236 || // Lo       HANGUL SYLLABLE JJI
      n == 52264 || // Lo       HANGUL SYLLABLE CA
      n == 52292 || // Lo       HANGUL SYLLABLE CAE
      n == 52320 || // Lo       HANGUL SYLLABLE CYA
      n == 52348 || // Lo       HANGUL SYLLABLE CYAE
      n == 52376 || // Lo       HANGUL SYLLABLE CEO
      n == 52404 || // Lo       HANGUL SYLLABLE CE
      n == 52432 || // Lo       HANGUL SYLLABLE CYEO
      n == 52460 || // Lo       HANGUL SYLLABLE CYE
      n == 52488 || // Lo       HANGUL SYLLABLE CO
      n == 52516 || // Lo       HANGUL SYLLABLE CWA
      n == 52544 || // Lo       HANGUL SYLLABLE CWAE
      n == 52572 || // Lo       HANGUL SYLLABLE COE
      n == 52600 || // Lo       HANGUL SYLLABLE CYO
      n == 52628 || // Lo       HANGUL SYLLABLE CU
      n == 52656 || // Lo       HANGUL SYLLABLE CWEO
      n == 52684 || // Lo       HANGUL SYLLABLE CWE
      n == 52712 || // Lo       HANGUL SYLLABLE CWI
      n == 52740 || // Lo       HANGUL SYLLABLE CYU
      n == 52768 || // Lo       HANGUL SYLLABLE CEU
      n == 52796 || // Lo       HANGUL SYLLABLE CYI
      n == 52824 || // Lo       HANGUL SYLLABLE CI
      n == 52852 || // Lo       HANGUL SYLLABLE KA
      n == 52880 || // Lo       HANGUL SYLLABLE KAE
      n == 52908 || // Lo       HANGUL SYLLABLE KYA
      n == 52936 || // Lo       HANGUL SYLLABLE KYAE
      n == 52964 || // Lo       HANGUL SYLLABLE KEO
      n == 52992 || // Lo       HANGUL SYLLABLE KE
      n == 53020 || // Lo       HANGUL SYLLABLE KYEO
      n == 53048 || // Lo       HANGUL SYLLABLE KYE
      n == 53076 || // Lo       HANGUL SYLLABLE KO
      n == 53104 || // Lo       HANGUL SYLLABLE KWA
      n == 53132 || // Lo       HANGUL SYLLABLE KWAE
      n == 53160 || // Lo       HANGUL SYLLABLE KOE
      n == 53188 || // Lo       HANGUL SYLLABLE KYO
      n == 53216 || // Lo       HANGUL SYLLABLE KU
      n == 53244 || // Lo       HANGUL SYLLABLE KWEO
      n == 53272 || // Lo       HANGUL SYLLABLE KWE
      n == 53300 || // Lo       HANGUL SYLLABLE KWI
      n == 53328 || // Lo       HANGUL SYLLABLE KYU
      n == 53356 || // Lo       HANGUL SYLLABLE KEU
      n == 53384 || // Lo       HANGUL SYLLABLE KYI
      n == 53412 || // Lo       HANGUL SYLLABLE KI
      n == 53440 || // Lo       HANGUL SYLLABLE TA
      n == 53468 || // Lo       HANGUL SYLLABLE TAE
      n == 53496 || // Lo       HANGUL SYLLABLE TYA
      n == 53524 || // Lo       HANGUL SYLLABLE TYAE
      n == 53552 || // Lo       HANGUL SYLLABLE TEO
      n == 53580 || // Lo       HANGUL SYLLABLE TE
      n == 53608 || // Lo       HANGUL SYLLABLE TYEO
      n == 53636 || // Lo       HANGUL SYLLABLE TYE
      n == 53664 || // Lo       HANGUL SYLLABLE TO
      n == 53692 || // Lo       HANGUL SYLLABLE TWA
      n == 53720 || // Lo       HANGUL SYLLABLE TWAE
      n == 53748 || // Lo       HANGUL SYLLABLE TOE
      n == 53776 || // Lo       HANGUL SYLLABLE TYO
      n == 53804 || // Lo       HANGUL SYLLABLE TU
      n == 53832 || // Lo       HANGUL SYLLABLE TWEO
      n == 53860 || // Lo       HANGUL SYLLABLE TWE
      n == 53888 || // Lo       HANGUL SYLLABLE TWI
      n == 53916 || // Lo       HANGUL SYLLABLE TYU
      n == 53944 || // Lo       HANGUL SYLLABLE TEU
      n == 53972 || // Lo       HANGUL SYLLABLE TYI
      n == 54e3 || // Lo       HANGUL SYLLABLE TI
      n == 54028 || // Lo       HANGUL SYLLABLE PA
      n == 54056 || // Lo       HANGUL SYLLABLE PAE
      n == 54084 || // Lo       HANGUL SYLLABLE PYA
      n == 54112 || // Lo       HANGUL SYLLABLE PYAE
      n == 54140 || // Lo       HANGUL SYLLABLE PEO
      n == 54168 || // Lo       HANGUL SYLLABLE PE
      n == 54196 || // Lo       HANGUL SYLLABLE PYEO
      n == 54224 || // Lo       HANGUL SYLLABLE PYE
      n == 54252 || // Lo       HANGUL SYLLABLE PO
      n == 54280 || // Lo       HANGUL SYLLABLE PWA
      n == 54308 || // Lo       HANGUL SYLLABLE PWAE
      n == 54336 || // Lo       HANGUL SYLLABLE POE
      n == 54364 || // Lo       HANGUL SYLLABLE PYO
      n == 54392 || // Lo       HANGUL SYLLABLE PU
      n == 54420 || // Lo       HANGUL SYLLABLE PWEO
      n == 54448 || // Lo       HANGUL SYLLABLE PWE
      n == 54476 || // Lo       HANGUL SYLLABLE PWI
      n == 54504 || // Lo       HANGUL SYLLABLE PYU
      n == 54532 || // Lo       HANGUL SYLLABLE PEU
      n == 54560 || // Lo       HANGUL SYLLABLE PYI
      n == 54588 || // Lo       HANGUL SYLLABLE PI
      n == 54616 || // Lo       HANGUL SYLLABLE HA
      n == 54644 || // Lo       HANGUL SYLLABLE HAE
      n == 54672 || // Lo       HANGUL SYLLABLE HYA
      n == 54700 || // Lo       HANGUL SYLLABLE HYAE
      n == 54728 || // Lo       HANGUL SYLLABLE HEO
      n == 54756 || // Lo       HANGUL SYLLABLE HE
      n == 54784 || // Lo       HANGUL SYLLABLE HYEO
      n == 54812 || // Lo       HANGUL SYLLABLE HYE
      n == 54840 || // Lo       HANGUL SYLLABLE HO
      n == 54868 || // Lo       HANGUL SYLLABLE HWA
      n == 54896 || // Lo       HANGUL SYLLABLE HWAE
      n == 54924 || // Lo       HANGUL SYLLABLE HOE
      n == 54952 || // Lo       HANGUL SYLLABLE HYO
      n == 54980 || // Lo       HANGUL SYLLABLE HU
      n == 55008 || // Lo       HANGUL SYLLABLE HWEO
      n == 55036 || // Lo       HANGUL SYLLABLE HWE
      n == 55064 || // Lo       HANGUL SYLLABLE HWI
      n == 55092 || // Lo       HANGUL SYLLABLE HYU
      n == 55120 || // Lo       HANGUL SYLLABLE HEU
      n == 55148 || // Lo       HANGUL SYLLABLE HYI
      n == 55176 ? v : 44033 <= n && n <= 44059 || // Lo  [27] HANGUL SYLLABLE GAG..HANGUL SYLLABLE GAH
      44061 <= n && n <= 44087 || // Lo  [27] HANGUL SYLLABLE GAEG..HANGUL SYLLABLE GAEH
      44089 <= n && n <= 44115 || // Lo  [27] HANGUL SYLLABLE GYAG..HANGUL SYLLABLE GYAH
      44117 <= n && n <= 44143 || // Lo  [27] HANGUL SYLLABLE GYAEG..HANGUL SYLLABLE GYAEH
      44145 <= n && n <= 44171 || // Lo  [27] HANGUL SYLLABLE GEOG..HANGUL SYLLABLE GEOH
      44173 <= n && n <= 44199 || // Lo  [27] HANGUL SYLLABLE GEG..HANGUL SYLLABLE GEH
      44201 <= n && n <= 44227 || // Lo  [27] HANGUL SYLLABLE GYEOG..HANGUL SYLLABLE GYEOH
      44229 <= n && n <= 44255 || // Lo  [27] HANGUL SYLLABLE GYEG..HANGUL SYLLABLE GYEH
      44257 <= n && n <= 44283 || // Lo  [27] HANGUL SYLLABLE GOG..HANGUL SYLLABLE GOH
      44285 <= n && n <= 44311 || // Lo  [27] HANGUL SYLLABLE GWAG..HANGUL SYLLABLE GWAH
      44313 <= n && n <= 44339 || // Lo  [27] HANGUL SYLLABLE GWAEG..HANGUL SYLLABLE GWAEH
      44341 <= n && n <= 44367 || // Lo  [27] HANGUL SYLLABLE GOEG..HANGUL SYLLABLE GOEH
      44369 <= n && n <= 44395 || // Lo  [27] HANGUL SYLLABLE GYOG..HANGUL SYLLABLE GYOH
      44397 <= n && n <= 44423 || // Lo  [27] HANGUL SYLLABLE GUG..HANGUL SYLLABLE GUH
      44425 <= n && n <= 44451 || // Lo  [27] HANGUL SYLLABLE GWEOG..HANGUL SYLLABLE GWEOH
      44453 <= n && n <= 44479 || // Lo  [27] HANGUL SYLLABLE GWEG..HANGUL SYLLABLE GWEH
      44481 <= n && n <= 44507 || // Lo  [27] HANGUL SYLLABLE GWIG..HANGUL SYLLABLE GWIH
      44509 <= n && n <= 44535 || // Lo  [27] HANGUL SYLLABLE GYUG..HANGUL SYLLABLE GYUH
      44537 <= n && n <= 44563 || // Lo  [27] HANGUL SYLLABLE GEUG..HANGUL SYLLABLE GEUH
      44565 <= n && n <= 44591 || // Lo  [27] HANGUL SYLLABLE GYIG..HANGUL SYLLABLE GYIH
      44593 <= n && n <= 44619 || // Lo  [27] HANGUL SYLLABLE GIG..HANGUL SYLLABLE GIH
      44621 <= n && n <= 44647 || // Lo  [27] HANGUL SYLLABLE GGAG..HANGUL SYLLABLE GGAH
      44649 <= n && n <= 44675 || // Lo  [27] HANGUL SYLLABLE GGAEG..HANGUL SYLLABLE GGAEH
      44677 <= n && n <= 44703 || // Lo  [27] HANGUL SYLLABLE GGYAG..HANGUL SYLLABLE GGYAH
      44705 <= n && n <= 44731 || // Lo  [27] HANGUL SYLLABLE GGYAEG..HANGUL SYLLABLE GGYAEH
      44733 <= n && n <= 44759 || // Lo  [27] HANGUL SYLLABLE GGEOG..HANGUL SYLLABLE GGEOH
      44761 <= n && n <= 44787 || // Lo  [27] HANGUL SYLLABLE GGEG..HANGUL SYLLABLE GGEH
      44789 <= n && n <= 44815 || // Lo  [27] HANGUL SYLLABLE GGYEOG..HANGUL SYLLABLE GGYEOH
      44817 <= n && n <= 44843 || // Lo  [27] HANGUL SYLLABLE GGYEG..HANGUL SYLLABLE GGYEH
      44845 <= n && n <= 44871 || // Lo  [27] HANGUL SYLLABLE GGOG..HANGUL SYLLABLE GGOH
      44873 <= n && n <= 44899 || // Lo  [27] HANGUL SYLLABLE GGWAG..HANGUL SYLLABLE GGWAH
      44901 <= n && n <= 44927 || // Lo  [27] HANGUL SYLLABLE GGWAEG..HANGUL SYLLABLE GGWAEH
      44929 <= n && n <= 44955 || // Lo  [27] HANGUL SYLLABLE GGOEG..HANGUL SYLLABLE GGOEH
      44957 <= n && n <= 44983 || // Lo  [27] HANGUL SYLLABLE GGYOG..HANGUL SYLLABLE GGYOH
      44985 <= n && n <= 45011 || // Lo  [27] HANGUL SYLLABLE GGUG..HANGUL SYLLABLE GGUH
      45013 <= n && n <= 45039 || // Lo  [27] HANGUL SYLLABLE GGWEOG..HANGUL SYLLABLE GGWEOH
      45041 <= n && n <= 45067 || // Lo  [27] HANGUL SYLLABLE GGWEG..HANGUL SYLLABLE GGWEH
      45069 <= n && n <= 45095 || // Lo  [27] HANGUL SYLLABLE GGWIG..HANGUL SYLLABLE GGWIH
      45097 <= n && n <= 45123 || // Lo  [27] HANGUL SYLLABLE GGYUG..HANGUL SYLLABLE GGYUH
      45125 <= n && n <= 45151 || // Lo  [27] HANGUL SYLLABLE GGEUG..HANGUL SYLLABLE GGEUH
      45153 <= n && n <= 45179 || // Lo  [27] HANGUL SYLLABLE GGYIG..HANGUL SYLLABLE GGYIH
      45181 <= n && n <= 45207 || // Lo  [27] HANGUL SYLLABLE GGIG..HANGUL SYLLABLE GGIH
      45209 <= n && n <= 45235 || // Lo  [27] HANGUL SYLLABLE NAG..HANGUL SYLLABLE NAH
      45237 <= n && n <= 45263 || // Lo  [27] HANGUL SYLLABLE NAEG..HANGUL SYLLABLE NAEH
      45265 <= n && n <= 45291 || // Lo  [27] HANGUL SYLLABLE NYAG..HANGUL SYLLABLE NYAH
      45293 <= n && n <= 45319 || // Lo  [27] HANGUL SYLLABLE NYAEG..HANGUL SYLLABLE NYAEH
      45321 <= n && n <= 45347 || // Lo  [27] HANGUL SYLLABLE NEOG..HANGUL SYLLABLE NEOH
      45349 <= n && n <= 45375 || // Lo  [27] HANGUL SYLLABLE NEG..HANGUL SYLLABLE NEH
      45377 <= n && n <= 45403 || // Lo  [27] HANGUL SYLLABLE NYEOG..HANGUL SYLLABLE NYEOH
      45405 <= n && n <= 45431 || // Lo  [27] HANGUL SYLLABLE NYEG..HANGUL SYLLABLE NYEH
      45433 <= n && n <= 45459 || // Lo  [27] HANGUL SYLLABLE NOG..HANGUL SYLLABLE NOH
      45461 <= n && n <= 45487 || // Lo  [27] HANGUL SYLLABLE NWAG..HANGUL SYLLABLE NWAH
      45489 <= n && n <= 45515 || // Lo  [27] HANGUL SYLLABLE NWAEG..HANGUL SYLLABLE NWAEH
      45517 <= n && n <= 45543 || // Lo  [27] HANGUL SYLLABLE NOEG..HANGUL SYLLABLE NOEH
      45545 <= n && n <= 45571 || // Lo  [27] HANGUL SYLLABLE NYOG..HANGUL SYLLABLE NYOH
      45573 <= n && n <= 45599 || // Lo  [27] HANGUL SYLLABLE NUG..HANGUL SYLLABLE NUH
      45601 <= n && n <= 45627 || // Lo  [27] HANGUL SYLLABLE NWEOG..HANGUL SYLLABLE NWEOH
      45629 <= n && n <= 45655 || // Lo  [27] HANGUL SYLLABLE NWEG..HANGUL SYLLABLE NWEH
      45657 <= n && n <= 45683 || // Lo  [27] HANGUL SYLLABLE NWIG..HANGUL SYLLABLE NWIH
      45685 <= n && n <= 45711 || // Lo  [27] HANGUL SYLLABLE NYUG..HANGUL SYLLABLE NYUH
      45713 <= n && n <= 45739 || // Lo  [27] HANGUL SYLLABLE NEUG..HANGUL SYLLABLE NEUH
      45741 <= n && n <= 45767 || // Lo  [27] HANGUL SYLLABLE NYIG..HANGUL SYLLABLE NYIH
      45769 <= n && n <= 45795 || // Lo  [27] HANGUL SYLLABLE NIG..HANGUL SYLLABLE NIH
      45797 <= n && n <= 45823 || // Lo  [27] HANGUL SYLLABLE DAG..HANGUL SYLLABLE DAH
      45825 <= n && n <= 45851 || // Lo  [27] HANGUL SYLLABLE DAEG..HANGUL SYLLABLE DAEH
      45853 <= n && n <= 45879 || // Lo  [27] HANGUL SYLLABLE DYAG..HANGUL SYLLABLE DYAH
      45881 <= n && n <= 45907 || // Lo  [27] HANGUL SYLLABLE DYAEG..HANGUL SYLLABLE DYAEH
      45909 <= n && n <= 45935 || // Lo  [27] HANGUL SYLLABLE DEOG..HANGUL SYLLABLE DEOH
      45937 <= n && n <= 45963 || // Lo  [27] HANGUL SYLLABLE DEG..HANGUL SYLLABLE DEH
      45965 <= n && n <= 45991 || // Lo  [27] HANGUL SYLLABLE DYEOG..HANGUL SYLLABLE DYEOH
      45993 <= n && n <= 46019 || // Lo  [27] HANGUL SYLLABLE DYEG..HANGUL SYLLABLE DYEH
      46021 <= n && n <= 46047 || // Lo  [27] HANGUL SYLLABLE DOG..HANGUL SYLLABLE DOH
      46049 <= n && n <= 46075 || // Lo  [27] HANGUL SYLLABLE DWAG..HANGUL SYLLABLE DWAH
      46077 <= n && n <= 46103 || // Lo  [27] HANGUL SYLLABLE DWAEG..HANGUL SYLLABLE DWAEH
      46105 <= n && n <= 46131 || // Lo  [27] HANGUL SYLLABLE DOEG..HANGUL SYLLABLE DOEH
      46133 <= n && n <= 46159 || // Lo  [27] HANGUL SYLLABLE DYOG..HANGUL SYLLABLE DYOH
      46161 <= n && n <= 46187 || // Lo  [27] HANGUL SYLLABLE DUG..HANGUL SYLLABLE DUH
      46189 <= n && n <= 46215 || // Lo  [27] HANGUL SYLLABLE DWEOG..HANGUL SYLLABLE DWEOH
      46217 <= n && n <= 46243 || // Lo  [27] HANGUL SYLLABLE DWEG..HANGUL SYLLABLE DWEH
      46245 <= n && n <= 46271 || // Lo  [27] HANGUL SYLLABLE DWIG..HANGUL SYLLABLE DWIH
      46273 <= n && n <= 46299 || // Lo  [27] HANGUL SYLLABLE DYUG..HANGUL SYLLABLE DYUH
      46301 <= n && n <= 46327 || // Lo  [27] HANGUL SYLLABLE DEUG..HANGUL SYLLABLE DEUH
      46329 <= n && n <= 46355 || // Lo  [27] HANGUL SYLLABLE DYIG..HANGUL SYLLABLE DYIH
      46357 <= n && n <= 46383 || // Lo  [27] HANGUL SYLLABLE DIG..HANGUL SYLLABLE DIH
      46385 <= n && n <= 46411 || // Lo  [27] HANGUL SYLLABLE DDAG..HANGUL SYLLABLE DDAH
      46413 <= n && n <= 46439 || // Lo  [27] HANGUL SYLLABLE DDAEG..HANGUL SYLLABLE DDAEH
      46441 <= n && n <= 46467 || // Lo  [27] HANGUL SYLLABLE DDYAG..HANGUL SYLLABLE DDYAH
      46469 <= n && n <= 46495 || // Lo  [27] HANGUL SYLLABLE DDYAEG..HANGUL SYLLABLE DDYAEH
      46497 <= n && n <= 46523 || // Lo  [27] HANGUL SYLLABLE DDEOG..HANGUL SYLLABLE DDEOH
      46525 <= n && n <= 46551 || // Lo  [27] HANGUL SYLLABLE DDEG..HANGUL SYLLABLE DDEH
      46553 <= n && n <= 46579 || // Lo  [27] HANGUL SYLLABLE DDYEOG..HANGUL SYLLABLE DDYEOH
      46581 <= n && n <= 46607 || // Lo  [27] HANGUL SYLLABLE DDYEG..HANGUL SYLLABLE DDYEH
      46609 <= n && n <= 46635 || // Lo  [27] HANGUL SYLLABLE DDOG..HANGUL SYLLABLE DDOH
      46637 <= n && n <= 46663 || // Lo  [27] HANGUL SYLLABLE DDWAG..HANGUL SYLLABLE DDWAH
      46665 <= n && n <= 46691 || // Lo  [27] HANGUL SYLLABLE DDWAEG..HANGUL SYLLABLE DDWAEH
      46693 <= n && n <= 46719 || // Lo  [27] HANGUL SYLLABLE DDOEG..HANGUL SYLLABLE DDOEH
      46721 <= n && n <= 46747 || // Lo  [27] HANGUL SYLLABLE DDYOG..HANGUL SYLLABLE DDYOH
      46749 <= n && n <= 46775 || // Lo  [27] HANGUL SYLLABLE DDUG..HANGUL SYLLABLE DDUH
      46777 <= n && n <= 46803 || // Lo  [27] HANGUL SYLLABLE DDWEOG..HANGUL SYLLABLE DDWEOH
      46805 <= n && n <= 46831 || // Lo  [27] HANGUL SYLLABLE DDWEG..HANGUL SYLLABLE DDWEH
      46833 <= n && n <= 46859 || // Lo  [27] HANGUL SYLLABLE DDWIG..HANGUL SYLLABLE DDWIH
      46861 <= n && n <= 46887 || // Lo  [27] HANGUL SYLLABLE DDYUG..HANGUL SYLLABLE DDYUH
      46889 <= n && n <= 46915 || // Lo  [27] HANGUL SYLLABLE DDEUG..HANGUL SYLLABLE DDEUH
      46917 <= n && n <= 46943 || // Lo  [27] HANGUL SYLLABLE DDYIG..HANGUL SYLLABLE DDYIH
      46945 <= n && n <= 46971 || // Lo  [27] HANGUL SYLLABLE DDIG..HANGUL SYLLABLE DDIH
      46973 <= n && n <= 46999 || // Lo  [27] HANGUL SYLLABLE RAG..HANGUL SYLLABLE RAH
      47001 <= n && n <= 47027 || // Lo  [27] HANGUL SYLLABLE RAEG..HANGUL SYLLABLE RAEH
      47029 <= n && n <= 47055 || // Lo  [27] HANGUL SYLLABLE RYAG..HANGUL SYLLABLE RYAH
      47057 <= n && n <= 47083 || // Lo  [27] HANGUL SYLLABLE RYAEG..HANGUL SYLLABLE RYAEH
      47085 <= n && n <= 47111 || // Lo  [27] HANGUL SYLLABLE REOG..HANGUL SYLLABLE REOH
      47113 <= n && n <= 47139 || // Lo  [27] HANGUL SYLLABLE REG..HANGUL SYLLABLE REH
      47141 <= n && n <= 47167 || // Lo  [27] HANGUL SYLLABLE RYEOG..HANGUL SYLLABLE RYEOH
      47169 <= n && n <= 47195 || // Lo  [27] HANGUL SYLLABLE RYEG..HANGUL SYLLABLE RYEH
      47197 <= n && n <= 47223 || // Lo  [27] HANGUL SYLLABLE ROG..HANGUL SYLLABLE ROH
      47225 <= n && n <= 47251 || // Lo  [27] HANGUL SYLLABLE RWAG..HANGUL SYLLABLE RWAH
      47253 <= n && n <= 47279 || // Lo  [27] HANGUL SYLLABLE RWAEG..HANGUL SYLLABLE RWAEH
      47281 <= n && n <= 47307 || // Lo  [27] HANGUL SYLLABLE ROEG..HANGUL SYLLABLE ROEH
      47309 <= n && n <= 47335 || // Lo  [27] HANGUL SYLLABLE RYOG..HANGUL SYLLABLE RYOH
      47337 <= n && n <= 47363 || // Lo  [27] HANGUL SYLLABLE RUG..HANGUL SYLLABLE RUH
      47365 <= n && n <= 47391 || // Lo  [27] HANGUL SYLLABLE RWEOG..HANGUL SYLLABLE RWEOH
      47393 <= n && n <= 47419 || // Lo  [27] HANGUL SYLLABLE RWEG..HANGUL SYLLABLE RWEH
      47421 <= n && n <= 47447 || // Lo  [27] HANGUL SYLLABLE RWIG..HANGUL SYLLABLE RWIH
      47449 <= n && n <= 47475 || // Lo  [27] HANGUL SYLLABLE RYUG..HANGUL SYLLABLE RYUH
      47477 <= n && n <= 47503 || // Lo  [27] HANGUL SYLLABLE REUG..HANGUL SYLLABLE REUH
      47505 <= n && n <= 47531 || // Lo  [27] HANGUL SYLLABLE RYIG..HANGUL SYLLABLE RYIH
      47533 <= n && n <= 47559 || // Lo  [27] HANGUL SYLLABLE RIG..HANGUL SYLLABLE RIH
      47561 <= n && n <= 47587 || // Lo  [27] HANGUL SYLLABLE MAG..HANGUL SYLLABLE MAH
      47589 <= n && n <= 47615 || // Lo  [27] HANGUL SYLLABLE MAEG..HANGUL SYLLABLE MAEH
      47617 <= n && n <= 47643 || // Lo  [27] HANGUL SYLLABLE MYAG..HANGUL SYLLABLE MYAH
      47645 <= n && n <= 47671 || // Lo  [27] HANGUL SYLLABLE MYAEG..HANGUL SYLLABLE MYAEH
      47673 <= n && n <= 47699 || // Lo  [27] HANGUL SYLLABLE MEOG..HANGUL SYLLABLE MEOH
      47701 <= n && n <= 47727 || // Lo  [27] HANGUL SYLLABLE MEG..HANGUL SYLLABLE MEH
      47729 <= n && n <= 47755 || // Lo  [27] HANGUL SYLLABLE MYEOG..HANGUL SYLLABLE MYEOH
      47757 <= n && n <= 47783 || // Lo  [27] HANGUL SYLLABLE MYEG..HANGUL SYLLABLE MYEH
      47785 <= n && n <= 47811 || // Lo  [27] HANGUL SYLLABLE MOG..HANGUL SYLLABLE MOH
      47813 <= n && n <= 47839 || // Lo  [27] HANGUL SYLLABLE MWAG..HANGUL SYLLABLE MWAH
      47841 <= n && n <= 47867 || // Lo  [27] HANGUL SYLLABLE MWAEG..HANGUL SYLLABLE MWAEH
      47869 <= n && n <= 47895 || // Lo  [27] HANGUL SYLLABLE MOEG..HANGUL SYLLABLE MOEH
      47897 <= n && n <= 47923 || // Lo  [27] HANGUL SYLLABLE MYOG..HANGUL SYLLABLE MYOH
      47925 <= n && n <= 47951 || // Lo  [27] HANGUL SYLLABLE MUG..HANGUL SYLLABLE MUH
      47953 <= n && n <= 47979 || // Lo  [27] HANGUL SYLLABLE MWEOG..HANGUL SYLLABLE MWEOH
      47981 <= n && n <= 48007 || // Lo  [27] HANGUL SYLLABLE MWEG..HANGUL SYLLABLE MWEH
      48009 <= n && n <= 48035 || // Lo  [27] HANGUL SYLLABLE MWIG..HANGUL SYLLABLE MWIH
      48037 <= n && n <= 48063 || // Lo  [27] HANGUL SYLLABLE MYUG..HANGUL SYLLABLE MYUH
      48065 <= n && n <= 48091 || // Lo  [27] HANGUL SYLLABLE MEUG..HANGUL SYLLABLE MEUH
      48093 <= n && n <= 48119 || // Lo  [27] HANGUL SYLLABLE MYIG..HANGUL SYLLABLE MYIH
      48121 <= n && n <= 48147 || // Lo  [27] HANGUL SYLLABLE MIG..HANGUL SYLLABLE MIH
      48149 <= n && n <= 48175 || // Lo  [27] HANGUL SYLLABLE BAG..HANGUL SYLLABLE BAH
      48177 <= n && n <= 48203 || // Lo  [27] HANGUL SYLLABLE BAEG..HANGUL SYLLABLE BAEH
      48205 <= n && n <= 48231 || // Lo  [27] HANGUL SYLLABLE BYAG..HANGUL SYLLABLE BYAH
      48233 <= n && n <= 48259 || // Lo  [27] HANGUL SYLLABLE BYAEG..HANGUL SYLLABLE BYAEH
      48261 <= n && n <= 48287 || // Lo  [27] HANGUL SYLLABLE BEOG..HANGUL SYLLABLE BEOH
      48289 <= n && n <= 48315 || // Lo  [27] HANGUL SYLLABLE BEG..HANGUL SYLLABLE BEH
      48317 <= n && n <= 48343 || // Lo  [27] HANGUL SYLLABLE BYEOG..HANGUL SYLLABLE BYEOH
      48345 <= n && n <= 48371 || // Lo  [27] HANGUL SYLLABLE BYEG..HANGUL SYLLABLE BYEH
      48373 <= n && n <= 48399 || // Lo  [27] HANGUL SYLLABLE BOG..HANGUL SYLLABLE BOH
      48401 <= n && n <= 48427 || // Lo  [27] HANGUL SYLLABLE BWAG..HANGUL SYLLABLE BWAH
      48429 <= n && n <= 48455 || // Lo  [27] HANGUL SYLLABLE BWAEG..HANGUL SYLLABLE BWAEH
      48457 <= n && n <= 48483 || // Lo  [27] HANGUL SYLLABLE BOEG..HANGUL SYLLABLE BOEH
      48485 <= n && n <= 48511 || // Lo  [27] HANGUL SYLLABLE BYOG..HANGUL SYLLABLE BYOH
      48513 <= n && n <= 48539 || // Lo  [27] HANGUL SYLLABLE BUG..HANGUL SYLLABLE BUH
      48541 <= n && n <= 48567 || // Lo  [27] HANGUL SYLLABLE BWEOG..HANGUL SYLLABLE BWEOH
      48569 <= n && n <= 48595 || // Lo  [27] HANGUL SYLLABLE BWEG..HANGUL SYLLABLE BWEH
      48597 <= n && n <= 48623 || // Lo  [27] HANGUL SYLLABLE BWIG..HANGUL SYLLABLE BWIH
      48625 <= n && n <= 48651 || // Lo  [27] HANGUL SYLLABLE BYUG..HANGUL SYLLABLE BYUH
      48653 <= n && n <= 48679 || // Lo  [27] HANGUL SYLLABLE BEUG..HANGUL SYLLABLE BEUH
      48681 <= n && n <= 48707 || // Lo  [27] HANGUL SYLLABLE BYIG..HANGUL SYLLABLE BYIH
      48709 <= n && n <= 48735 || // Lo  [27] HANGUL SYLLABLE BIG..HANGUL SYLLABLE BIH
      48737 <= n && n <= 48763 || // Lo  [27] HANGUL SYLLABLE BBAG..HANGUL SYLLABLE BBAH
      48765 <= n && n <= 48791 || // Lo  [27] HANGUL SYLLABLE BBAEG..HANGUL SYLLABLE BBAEH
      48793 <= n && n <= 48819 || // Lo  [27] HANGUL SYLLABLE BBYAG..HANGUL SYLLABLE BBYAH
      48821 <= n && n <= 48847 || // Lo  [27] HANGUL SYLLABLE BBYAEG..HANGUL SYLLABLE BBYAEH
      48849 <= n && n <= 48875 || // Lo  [27] HANGUL SYLLABLE BBEOG..HANGUL SYLLABLE BBEOH
      48877 <= n && n <= 48903 || // Lo  [27] HANGUL SYLLABLE BBEG..HANGUL SYLLABLE BBEH
      48905 <= n && n <= 48931 || // Lo  [27] HANGUL SYLLABLE BBYEOG..HANGUL SYLLABLE BBYEOH
      48933 <= n && n <= 48959 || // Lo  [27] HANGUL SYLLABLE BBYEG..HANGUL SYLLABLE BBYEH
      48961 <= n && n <= 48987 || // Lo  [27] HANGUL SYLLABLE BBOG..HANGUL SYLLABLE BBOH
      48989 <= n && n <= 49015 || // Lo  [27] HANGUL SYLLABLE BBWAG..HANGUL SYLLABLE BBWAH
      49017 <= n && n <= 49043 || // Lo  [27] HANGUL SYLLABLE BBWAEG..HANGUL SYLLABLE BBWAEH
      49045 <= n && n <= 49071 || // Lo  [27] HANGUL SYLLABLE BBOEG..HANGUL SYLLABLE BBOEH
      49073 <= n && n <= 49099 || // Lo  [27] HANGUL SYLLABLE BBYOG..HANGUL SYLLABLE BBYOH
      49101 <= n && n <= 49127 || // Lo  [27] HANGUL SYLLABLE BBUG..HANGUL SYLLABLE BBUH
      49129 <= n && n <= 49155 || // Lo  [27] HANGUL SYLLABLE BBWEOG..HANGUL SYLLABLE BBWEOH
      49157 <= n && n <= 49183 || // Lo  [27] HANGUL SYLLABLE BBWEG..HANGUL SYLLABLE BBWEH
      49185 <= n && n <= 49211 || // Lo  [27] HANGUL SYLLABLE BBWIG..HANGUL SYLLABLE BBWIH
      49213 <= n && n <= 49239 || // Lo  [27] HANGUL SYLLABLE BBYUG..HANGUL SYLLABLE BBYUH
      49241 <= n && n <= 49267 || // Lo  [27] HANGUL SYLLABLE BBEUG..HANGUL SYLLABLE BBEUH
      49269 <= n && n <= 49295 || // Lo  [27] HANGUL SYLLABLE BBYIG..HANGUL SYLLABLE BBYIH
      49297 <= n && n <= 49323 || // Lo  [27] HANGUL SYLLABLE BBIG..HANGUL SYLLABLE BBIH
      49325 <= n && n <= 49351 || // Lo  [27] HANGUL SYLLABLE SAG..HANGUL SYLLABLE SAH
      49353 <= n && n <= 49379 || // Lo  [27] HANGUL SYLLABLE SAEG..HANGUL SYLLABLE SAEH
      49381 <= n && n <= 49407 || // Lo  [27] HANGUL SYLLABLE SYAG..HANGUL SYLLABLE SYAH
      49409 <= n && n <= 49435 || // Lo  [27] HANGUL SYLLABLE SYAEG..HANGUL SYLLABLE SYAEH
      49437 <= n && n <= 49463 || // Lo  [27] HANGUL SYLLABLE SEOG..HANGUL SYLLABLE SEOH
      49465 <= n && n <= 49491 || // Lo  [27] HANGUL SYLLABLE SEG..HANGUL SYLLABLE SEH
      49493 <= n && n <= 49519 || // Lo  [27] HANGUL SYLLABLE SYEOG..HANGUL SYLLABLE SYEOH
      49521 <= n && n <= 49547 || // Lo  [27] HANGUL SYLLABLE SYEG..HANGUL SYLLABLE SYEH
      49549 <= n && n <= 49575 || // Lo  [27] HANGUL SYLLABLE SOG..HANGUL SYLLABLE SOH
      49577 <= n && n <= 49603 || // Lo  [27] HANGUL SYLLABLE SWAG..HANGUL SYLLABLE SWAH
      49605 <= n && n <= 49631 || // Lo  [27] HANGUL SYLLABLE SWAEG..HANGUL SYLLABLE SWAEH
      49633 <= n && n <= 49659 || // Lo  [27] HANGUL SYLLABLE SOEG..HANGUL SYLLABLE SOEH
      49661 <= n && n <= 49687 || // Lo  [27] HANGUL SYLLABLE SYOG..HANGUL SYLLABLE SYOH
      49689 <= n && n <= 49715 || // Lo  [27] HANGUL SYLLABLE SUG..HANGUL SYLLABLE SUH
      49717 <= n && n <= 49743 || // Lo  [27] HANGUL SYLLABLE SWEOG..HANGUL SYLLABLE SWEOH
      49745 <= n && n <= 49771 || // Lo  [27] HANGUL SYLLABLE SWEG..HANGUL SYLLABLE SWEH
      49773 <= n && n <= 49799 || // Lo  [27] HANGUL SYLLABLE SWIG..HANGUL SYLLABLE SWIH
      49801 <= n && n <= 49827 || // Lo  [27] HANGUL SYLLABLE SYUG..HANGUL SYLLABLE SYUH
      49829 <= n && n <= 49855 || // Lo  [27] HANGUL SYLLABLE SEUG..HANGUL SYLLABLE SEUH
      49857 <= n && n <= 49883 || // Lo  [27] HANGUL SYLLABLE SYIG..HANGUL SYLLABLE SYIH
      49885 <= n && n <= 49911 || // Lo  [27] HANGUL SYLLABLE SIG..HANGUL SYLLABLE SIH
      49913 <= n && n <= 49939 || // Lo  [27] HANGUL SYLLABLE SSAG..HANGUL SYLLABLE SSAH
      49941 <= n && n <= 49967 || // Lo  [27] HANGUL SYLLABLE SSAEG..HANGUL SYLLABLE SSAEH
      49969 <= n && n <= 49995 || // Lo  [27] HANGUL SYLLABLE SSYAG..HANGUL SYLLABLE SSYAH
      49997 <= n && n <= 50023 || // Lo  [27] HANGUL SYLLABLE SSYAEG..HANGUL SYLLABLE SSYAEH
      50025 <= n && n <= 50051 || // Lo  [27] HANGUL SYLLABLE SSEOG..HANGUL SYLLABLE SSEOH
      50053 <= n && n <= 50079 || // Lo  [27] HANGUL SYLLABLE SSEG..HANGUL SYLLABLE SSEH
      50081 <= n && n <= 50107 || // Lo  [27] HANGUL SYLLABLE SSYEOG..HANGUL SYLLABLE SSYEOH
      50109 <= n && n <= 50135 || // Lo  [27] HANGUL SYLLABLE SSYEG..HANGUL SYLLABLE SSYEH
      50137 <= n && n <= 50163 || // Lo  [27] HANGUL SYLLABLE SSOG..HANGUL SYLLABLE SSOH
      50165 <= n && n <= 50191 || // Lo  [27] HANGUL SYLLABLE SSWAG..HANGUL SYLLABLE SSWAH
      50193 <= n && n <= 50219 || // Lo  [27] HANGUL SYLLABLE SSWAEG..HANGUL SYLLABLE SSWAEH
      50221 <= n && n <= 50247 || // Lo  [27] HANGUL SYLLABLE SSOEG..HANGUL SYLLABLE SSOEH
      50249 <= n && n <= 50275 || // Lo  [27] HANGUL SYLLABLE SSYOG..HANGUL SYLLABLE SSYOH
      50277 <= n && n <= 50303 || // Lo  [27] HANGUL SYLLABLE SSUG..HANGUL SYLLABLE SSUH
      50305 <= n && n <= 50331 || // Lo  [27] HANGUL SYLLABLE SSWEOG..HANGUL SYLLABLE SSWEOH
      50333 <= n && n <= 50359 || // Lo  [27] HANGUL SYLLABLE SSWEG..HANGUL SYLLABLE SSWEH
      50361 <= n && n <= 50387 || // Lo  [27] HANGUL SYLLABLE SSWIG..HANGUL SYLLABLE SSWIH
      50389 <= n && n <= 50415 || // Lo  [27] HANGUL SYLLABLE SSYUG..HANGUL SYLLABLE SSYUH
      50417 <= n && n <= 50443 || // Lo  [27] HANGUL SYLLABLE SSEUG..HANGUL SYLLABLE SSEUH
      50445 <= n && n <= 50471 || // Lo  [27] HANGUL SYLLABLE SSYIG..HANGUL SYLLABLE SSYIH
      50473 <= n && n <= 50499 || // Lo  [27] HANGUL SYLLABLE SSIG..HANGUL SYLLABLE SSIH
      50501 <= n && n <= 50527 || // Lo  [27] HANGUL SYLLABLE AG..HANGUL SYLLABLE AH
      50529 <= n && n <= 50555 || // Lo  [27] HANGUL SYLLABLE AEG..HANGUL SYLLABLE AEH
      50557 <= n && n <= 50583 || // Lo  [27] HANGUL SYLLABLE YAG..HANGUL SYLLABLE YAH
      50585 <= n && n <= 50611 || // Lo  [27] HANGUL SYLLABLE YAEG..HANGUL SYLLABLE YAEH
      50613 <= n && n <= 50639 || // Lo  [27] HANGUL SYLLABLE EOG..HANGUL SYLLABLE EOH
      50641 <= n && n <= 50667 || // Lo  [27] HANGUL SYLLABLE EG..HANGUL SYLLABLE EH
      50669 <= n && n <= 50695 || // Lo  [27] HANGUL SYLLABLE YEOG..HANGUL SYLLABLE YEOH
      50697 <= n && n <= 50723 || // Lo  [27] HANGUL SYLLABLE YEG..HANGUL SYLLABLE YEH
      50725 <= n && n <= 50751 || // Lo  [27] HANGUL SYLLABLE OG..HANGUL SYLLABLE OH
      50753 <= n && n <= 50779 || // Lo  [27] HANGUL SYLLABLE WAG..HANGUL SYLLABLE WAH
      50781 <= n && n <= 50807 || // Lo  [27] HANGUL SYLLABLE WAEG..HANGUL SYLLABLE WAEH
      50809 <= n && n <= 50835 || // Lo  [27] HANGUL SYLLABLE OEG..HANGUL SYLLABLE OEH
      50837 <= n && n <= 50863 || // Lo  [27] HANGUL SYLLABLE YOG..HANGUL SYLLABLE YOH
      50865 <= n && n <= 50891 || // Lo  [27] HANGUL SYLLABLE UG..HANGUL SYLLABLE UH
      50893 <= n && n <= 50919 || // Lo  [27] HANGUL SYLLABLE WEOG..HANGUL SYLLABLE WEOH
      50921 <= n && n <= 50947 || // Lo  [27] HANGUL SYLLABLE WEG..HANGUL SYLLABLE WEH
      50949 <= n && n <= 50975 || // Lo  [27] HANGUL SYLLABLE WIG..HANGUL SYLLABLE WIH
      50977 <= n && n <= 51003 || // Lo  [27] HANGUL SYLLABLE YUG..HANGUL SYLLABLE YUH
      51005 <= n && n <= 51031 || // Lo  [27] HANGUL SYLLABLE EUG..HANGUL SYLLABLE EUH
      51033 <= n && n <= 51059 || // Lo  [27] HANGUL SYLLABLE YIG..HANGUL SYLLABLE YIH
      51061 <= n && n <= 51087 || // Lo  [27] HANGUL SYLLABLE IG..HANGUL SYLLABLE IH
      51089 <= n && n <= 51115 || // Lo  [27] HANGUL SYLLABLE JAG..HANGUL SYLLABLE JAH
      51117 <= n && n <= 51143 || // Lo  [27] HANGUL SYLLABLE JAEG..HANGUL SYLLABLE JAEH
      51145 <= n && n <= 51171 || // Lo  [27] HANGUL SYLLABLE JYAG..HANGUL SYLLABLE JYAH
      51173 <= n && n <= 51199 || // Lo  [27] HANGUL SYLLABLE JYAEG..HANGUL SYLLABLE JYAEH
      51201 <= n && n <= 51227 || // Lo  [27] HANGUL SYLLABLE JEOG..HANGUL SYLLABLE JEOH
      51229 <= n && n <= 51255 || // Lo  [27] HANGUL SYLLABLE JEG..HANGUL SYLLABLE JEH
      51257 <= n && n <= 51283 || // Lo  [27] HANGUL SYLLABLE JYEOG..HANGUL SYLLABLE JYEOH
      51285 <= n && n <= 51311 || // Lo  [27] HANGUL SYLLABLE JYEG..HANGUL SYLLABLE JYEH
      51313 <= n && n <= 51339 || // Lo  [27] HANGUL SYLLABLE JOG..HANGUL SYLLABLE JOH
      51341 <= n && n <= 51367 || // Lo  [27] HANGUL SYLLABLE JWAG..HANGUL SYLLABLE JWAH
      51369 <= n && n <= 51395 || // Lo  [27] HANGUL SYLLABLE JWAEG..HANGUL SYLLABLE JWAEH
      51397 <= n && n <= 51423 || // Lo  [27] HANGUL SYLLABLE JOEG..HANGUL SYLLABLE JOEH
      51425 <= n && n <= 51451 || // Lo  [27] HANGUL SYLLABLE JYOG..HANGUL SYLLABLE JYOH
      51453 <= n && n <= 51479 || // Lo  [27] HANGUL SYLLABLE JUG..HANGUL SYLLABLE JUH
      51481 <= n && n <= 51507 || // Lo  [27] HANGUL SYLLABLE JWEOG..HANGUL SYLLABLE JWEOH
      51509 <= n && n <= 51535 || // Lo  [27] HANGUL SYLLABLE JWEG..HANGUL SYLLABLE JWEH
      51537 <= n && n <= 51563 || // Lo  [27] HANGUL SYLLABLE JWIG..HANGUL SYLLABLE JWIH
      51565 <= n && n <= 51591 || // Lo  [27] HANGUL SYLLABLE JYUG..HANGUL SYLLABLE JYUH
      51593 <= n && n <= 51619 || // Lo  [27] HANGUL SYLLABLE JEUG..HANGUL SYLLABLE JEUH
      51621 <= n && n <= 51647 || // Lo  [27] HANGUL SYLLABLE JYIG..HANGUL SYLLABLE JYIH
      51649 <= n && n <= 51675 || // Lo  [27] HANGUL SYLLABLE JIG..HANGUL SYLLABLE JIH
      51677 <= n && n <= 51703 || // Lo  [27] HANGUL SYLLABLE JJAG..HANGUL SYLLABLE JJAH
      51705 <= n && n <= 51731 || // Lo  [27] HANGUL SYLLABLE JJAEG..HANGUL SYLLABLE JJAEH
      51733 <= n && n <= 51759 || // Lo  [27] HANGUL SYLLABLE JJYAG..HANGUL SYLLABLE JJYAH
      51761 <= n && n <= 51787 || // Lo  [27] HANGUL SYLLABLE JJYAEG..HANGUL SYLLABLE JJYAEH
      51789 <= n && n <= 51815 || // Lo  [27] HANGUL SYLLABLE JJEOG..HANGUL SYLLABLE JJEOH
      51817 <= n && n <= 51843 || // Lo  [27] HANGUL SYLLABLE JJEG..HANGUL SYLLABLE JJEH
      51845 <= n && n <= 51871 || // Lo  [27] HANGUL SYLLABLE JJYEOG..HANGUL SYLLABLE JJYEOH
      51873 <= n && n <= 51899 || // Lo  [27] HANGUL SYLLABLE JJYEG..HANGUL SYLLABLE JJYEH
      51901 <= n && n <= 51927 || // Lo  [27] HANGUL SYLLABLE JJOG..HANGUL SYLLABLE JJOH
      51929 <= n && n <= 51955 || // Lo  [27] HANGUL SYLLABLE JJWAG..HANGUL SYLLABLE JJWAH
      51957 <= n && n <= 51983 || // Lo  [27] HANGUL SYLLABLE JJWAEG..HANGUL SYLLABLE JJWAEH
      51985 <= n && n <= 52011 || // Lo  [27] HANGUL SYLLABLE JJOEG..HANGUL SYLLABLE JJOEH
      52013 <= n && n <= 52039 || // Lo  [27] HANGUL SYLLABLE JJYOG..HANGUL SYLLABLE JJYOH
      52041 <= n && n <= 52067 || // Lo  [27] HANGUL SYLLABLE JJUG..HANGUL SYLLABLE JJUH
      52069 <= n && n <= 52095 || // Lo  [27] HANGUL SYLLABLE JJWEOG..HANGUL SYLLABLE JJWEOH
      52097 <= n && n <= 52123 || // Lo  [27] HANGUL SYLLABLE JJWEG..HANGUL SYLLABLE JJWEH
      52125 <= n && n <= 52151 || // Lo  [27] HANGUL SYLLABLE JJWIG..HANGUL SYLLABLE JJWIH
      52153 <= n && n <= 52179 || // Lo  [27] HANGUL SYLLABLE JJYUG..HANGUL SYLLABLE JJYUH
      52181 <= n && n <= 52207 || // Lo  [27] HANGUL SYLLABLE JJEUG..HANGUL SYLLABLE JJEUH
      52209 <= n && n <= 52235 || // Lo  [27] HANGUL SYLLABLE JJYIG..HANGUL SYLLABLE JJYIH
      52237 <= n && n <= 52263 || // Lo  [27] HANGUL SYLLABLE JJIG..HANGUL SYLLABLE JJIH
      52265 <= n && n <= 52291 || // Lo  [27] HANGUL SYLLABLE CAG..HANGUL SYLLABLE CAH
      52293 <= n && n <= 52319 || // Lo  [27] HANGUL SYLLABLE CAEG..HANGUL SYLLABLE CAEH
      52321 <= n && n <= 52347 || // Lo  [27] HANGUL SYLLABLE CYAG..HANGUL SYLLABLE CYAH
      52349 <= n && n <= 52375 || // Lo  [27] HANGUL SYLLABLE CYAEG..HANGUL SYLLABLE CYAEH
      52377 <= n && n <= 52403 || // Lo  [27] HANGUL SYLLABLE CEOG..HANGUL SYLLABLE CEOH
      52405 <= n && n <= 52431 || // Lo  [27] HANGUL SYLLABLE CEG..HANGUL SYLLABLE CEH
      52433 <= n && n <= 52459 || // Lo  [27] HANGUL SYLLABLE CYEOG..HANGUL SYLLABLE CYEOH
      52461 <= n && n <= 52487 || // Lo  [27] HANGUL SYLLABLE CYEG..HANGUL SYLLABLE CYEH
      52489 <= n && n <= 52515 || // Lo  [27] HANGUL SYLLABLE COG..HANGUL SYLLABLE COH
      52517 <= n && n <= 52543 || // Lo  [27] HANGUL SYLLABLE CWAG..HANGUL SYLLABLE CWAH
      52545 <= n && n <= 52571 || // Lo  [27] HANGUL SYLLABLE CWAEG..HANGUL SYLLABLE CWAEH
      52573 <= n && n <= 52599 || // Lo  [27] HANGUL SYLLABLE COEG..HANGUL SYLLABLE COEH
      52601 <= n && n <= 52627 || // Lo  [27] HANGUL SYLLABLE CYOG..HANGUL SYLLABLE CYOH
      52629 <= n && n <= 52655 || // Lo  [27] HANGUL SYLLABLE CUG..HANGUL SYLLABLE CUH
      52657 <= n && n <= 52683 || // Lo  [27] HANGUL SYLLABLE CWEOG..HANGUL SYLLABLE CWEOH
      52685 <= n && n <= 52711 || // Lo  [27] HANGUL SYLLABLE CWEG..HANGUL SYLLABLE CWEH
      52713 <= n && n <= 52739 || // Lo  [27] HANGUL SYLLABLE CWIG..HANGUL SYLLABLE CWIH
      52741 <= n && n <= 52767 || // Lo  [27] HANGUL SYLLABLE CYUG..HANGUL SYLLABLE CYUH
      52769 <= n && n <= 52795 || // Lo  [27] HANGUL SYLLABLE CEUG..HANGUL SYLLABLE CEUH
      52797 <= n && n <= 52823 || // Lo  [27] HANGUL SYLLABLE CYIG..HANGUL SYLLABLE CYIH
      52825 <= n && n <= 52851 || // Lo  [27] HANGUL SYLLABLE CIG..HANGUL SYLLABLE CIH
      52853 <= n && n <= 52879 || // Lo  [27] HANGUL SYLLABLE KAG..HANGUL SYLLABLE KAH
      52881 <= n && n <= 52907 || // Lo  [27] HANGUL SYLLABLE KAEG..HANGUL SYLLABLE KAEH
      52909 <= n && n <= 52935 || // Lo  [27] HANGUL SYLLABLE KYAG..HANGUL SYLLABLE KYAH
      52937 <= n && n <= 52963 || // Lo  [27] HANGUL SYLLABLE KYAEG..HANGUL SYLLABLE KYAEH
      52965 <= n && n <= 52991 || // Lo  [27] HANGUL SYLLABLE KEOG..HANGUL SYLLABLE KEOH
      52993 <= n && n <= 53019 || // Lo  [27] HANGUL SYLLABLE KEG..HANGUL SYLLABLE KEH
      53021 <= n && n <= 53047 || // Lo  [27] HANGUL SYLLABLE KYEOG..HANGUL SYLLABLE KYEOH
      53049 <= n && n <= 53075 || // Lo  [27] HANGUL SYLLABLE KYEG..HANGUL SYLLABLE KYEH
      53077 <= n && n <= 53103 || // Lo  [27] HANGUL SYLLABLE KOG..HANGUL SYLLABLE KOH
      53105 <= n && n <= 53131 || // Lo  [27] HANGUL SYLLABLE KWAG..HANGUL SYLLABLE KWAH
      53133 <= n && n <= 53159 || // Lo  [27] HANGUL SYLLABLE KWAEG..HANGUL SYLLABLE KWAEH
      53161 <= n && n <= 53187 || // Lo  [27] HANGUL SYLLABLE KOEG..HANGUL SYLLABLE KOEH
      53189 <= n && n <= 53215 || // Lo  [27] HANGUL SYLLABLE KYOG..HANGUL SYLLABLE KYOH
      53217 <= n && n <= 53243 || // Lo  [27] HANGUL SYLLABLE KUG..HANGUL SYLLABLE KUH
      53245 <= n && n <= 53271 || // Lo  [27] HANGUL SYLLABLE KWEOG..HANGUL SYLLABLE KWEOH
      53273 <= n && n <= 53299 || // Lo  [27] HANGUL SYLLABLE KWEG..HANGUL SYLLABLE KWEH
      53301 <= n && n <= 53327 || // Lo  [27] HANGUL SYLLABLE KWIG..HANGUL SYLLABLE KWIH
      53329 <= n && n <= 53355 || // Lo  [27] HANGUL SYLLABLE KYUG..HANGUL SYLLABLE KYUH
      53357 <= n && n <= 53383 || // Lo  [27] HANGUL SYLLABLE KEUG..HANGUL SYLLABLE KEUH
      53385 <= n && n <= 53411 || // Lo  [27] HANGUL SYLLABLE KYIG..HANGUL SYLLABLE KYIH
      53413 <= n && n <= 53439 || // Lo  [27] HANGUL SYLLABLE KIG..HANGUL SYLLABLE KIH
      53441 <= n && n <= 53467 || // Lo  [27] HANGUL SYLLABLE TAG..HANGUL SYLLABLE TAH
      53469 <= n && n <= 53495 || // Lo  [27] HANGUL SYLLABLE TAEG..HANGUL SYLLABLE TAEH
      53497 <= n && n <= 53523 || // Lo  [27] HANGUL SYLLABLE TYAG..HANGUL SYLLABLE TYAH
      53525 <= n && n <= 53551 || // Lo  [27] HANGUL SYLLABLE TYAEG..HANGUL SYLLABLE TYAEH
      53553 <= n && n <= 53579 || // Lo  [27] HANGUL SYLLABLE TEOG..HANGUL SYLLABLE TEOH
      53581 <= n && n <= 53607 || // Lo  [27] HANGUL SYLLABLE TEG..HANGUL SYLLABLE TEH
      53609 <= n && n <= 53635 || // Lo  [27] HANGUL SYLLABLE TYEOG..HANGUL SYLLABLE TYEOH
      53637 <= n && n <= 53663 || // Lo  [27] HANGUL SYLLABLE TYEG..HANGUL SYLLABLE TYEH
      53665 <= n && n <= 53691 || // Lo  [27] HANGUL SYLLABLE TOG..HANGUL SYLLABLE TOH
      53693 <= n && n <= 53719 || // Lo  [27] HANGUL SYLLABLE TWAG..HANGUL SYLLABLE TWAH
      53721 <= n && n <= 53747 || // Lo  [27] HANGUL SYLLABLE TWAEG..HANGUL SYLLABLE TWAEH
      53749 <= n && n <= 53775 || // Lo  [27] HANGUL SYLLABLE TOEG..HANGUL SYLLABLE TOEH
      53777 <= n && n <= 53803 || // Lo  [27] HANGUL SYLLABLE TYOG..HANGUL SYLLABLE TYOH
      53805 <= n && n <= 53831 || // Lo  [27] HANGUL SYLLABLE TUG..HANGUL SYLLABLE TUH
      53833 <= n && n <= 53859 || // Lo  [27] HANGUL SYLLABLE TWEOG..HANGUL SYLLABLE TWEOH
      53861 <= n && n <= 53887 || // Lo  [27] HANGUL SYLLABLE TWEG..HANGUL SYLLABLE TWEH
      53889 <= n && n <= 53915 || // Lo  [27] HANGUL SYLLABLE TWIG..HANGUL SYLLABLE TWIH
      53917 <= n && n <= 53943 || // Lo  [27] HANGUL SYLLABLE TYUG..HANGUL SYLLABLE TYUH
      53945 <= n && n <= 53971 || // Lo  [27] HANGUL SYLLABLE TEUG..HANGUL SYLLABLE TEUH
      53973 <= n && n <= 53999 || // Lo  [27] HANGUL SYLLABLE TYIG..HANGUL SYLLABLE TYIH
      54001 <= n && n <= 54027 || // Lo  [27] HANGUL SYLLABLE TIG..HANGUL SYLLABLE TIH
      54029 <= n && n <= 54055 || // Lo  [27] HANGUL SYLLABLE PAG..HANGUL SYLLABLE PAH
      54057 <= n && n <= 54083 || // Lo  [27] HANGUL SYLLABLE PAEG..HANGUL SYLLABLE PAEH
      54085 <= n && n <= 54111 || // Lo  [27] HANGUL SYLLABLE PYAG..HANGUL SYLLABLE PYAH
      54113 <= n && n <= 54139 || // Lo  [27] HANGUL SYLLABLE PYAEG..HANGUL SYLLABLE PYAEH
      54141 <= n && n <= 54167 || // Lo  [27] HANGUL SYLLABLE PEOG..HANGUL SYLLABLE PEOH
      54169 <= n && n <= 54195 || // Lo  [27] HANGUL SYLLABLE PEG..HANGUL SYLLABLE PEH
      54197 <= n && n <= 54223 || // Lo  [27] HANGUL SYLLABLE PYEOG..HANGUL SYLLABLE PYEOH
      54225 <= n && n <= 54251 || // Lo  [27] HANGUL SYLLABLE PYEG..HANGUL SYLLABLE PYEH
      54253 <= n && n <= 54279 || // Lo  [27] HANGUL SYLLABLE POG..HANGUL SYLLABLE POH
      54281 <= n && n <= 54307 || // Lo  [27] HANGUL SYLLABLE PWAG..HANGUL SYLLABLE PWAH
      54309 <= n && n <= 54335 || // Lo  [27] HANGUL SYLLABLE PWAEG..HANGUL SYLLABLE PWAEH
      54337 <= n && n <= 54363 || // Lo  [27] HANGUL SYLLABLE POEG..HANGUL SYLLABLE POEH
      54365 <= n && n <= 54391 || // Lo  [27] HANGUL SYLLABLE PYOG..HANGUL SYLLABLE PYOH
      54393 <= n && n <= 54419 || // Lo  [27] HANGUL SYLLABLE PUG..HANGUL SYLLABLE PUH
      54421 <= n && n <= 54447 || // Lo  [27] HANGUL SYLLABLE PWEOG..HANGUL SYLLABLE PWEOH
      54449 <= n && n <= 54475 || // Lo  [27] HANGUL SYLLABLE PWEG..HANGUL SYLLABLE PWEH
      54477 <= n && n <= 54503 || // Lo  [27] HANGUL SYLLABLE PWIG..HANGUL SYLLABLE PWIH
      54505 <= n && n <= 54531 || // Lo  [27] HANGUL SYLLABLE PYUG..HANGUL SYLLABLE PYUH
      54533 <= n && n <= 54559 || // Lo  [27] HANGUL SYLLABLE PEUG..HANGUL SYLLABLE PEUH
      54561 <= n && n <= 54587 || // Lo  [27] HANGUL SYLLABLE PYIG..HANGUL SYLLABLE PYIH
      54589 <= n && n <= 54615 || // Lo  [27] HANGUL SYLLABLE PIG..HANGUL SYLLABLE PIH
      54617 <= n && n <= 54643 || // Lo  [27] HANGUL SYLLABLE HAG..HANGUL SYLLABLE HAH
      54645 <= n && n <= 54671 || // Lo  [27] HANGUL SYLLABLE HAEG..HANGUL SYLLABLE HAEH
      54673 <= n && n <= 54699 || // Lo  [27] HANGUL SYLLABLE HYAG..HANGUL SYLLABLE HYAH
      54701 <= n && n <= 54727 || // Lo  [27] HANGUL SYLLABLE HYAEG..HANGUL SYLLABLE HYAEH
      54729 <= n && n <= 54755 || // Lo  [27] HANGUL SYLLABLE HEOG..HANGUL SYLLABLE HEOH
      54757 <= n && n <= 54783 || // Lo  [27] HANGUL SYLLABLE HEG..HANGUL SYLLABLE HEH
      54785 <= n && n <= 54811 || // Lo  [27] HANGUL SYLLABLE HYEOG..HANGUL SYLLABLE HYEOH
      54813 <= n && n <= 54839 || // Lo  [27] HANGUL SYLLABLE HYEG..HANGUL SYLLABLE HYEH
      54841 <= n && n <= 54867 || // Lo  [27] HANGUL SYLLABLE HOG..HANGUL SYLLABLE HOH
      54869 <= n && n <= 54895 || // Lo  [27] HANGUL SYLLABLE HWAG..HANGUL SYLLABLE HWAH
      54897 <= n && n <= 54923 || // Lo  [27] HANGUL SYLLABLE HWAEG..HANGUL SYLLABLE HWAEH
      54925 <= n && n <= 54951 || // Lo  [27] HANGUL SYLLABLE HOEG..HANGUL SYLLABLE HOEH
      54953 <= n && n <= 54979 || // Lo  [27] HANGUL SYLLABLE HYOG..HANGUL SYLLABLE HYOH
      54981 <= n && n <= 55007 || // Lo  [27] HANGUL SYLLABLE HUG..HANGUL SYLLABLE HUH
      55009 <= n && n <= 55035 || // Lo  [27] HANGUL SYLLABLE HWEOG..HANGUL SYLLABLE HWEOH
      55037 <= n && n <= 55063 || // Lo  [27] HANGUL SYLLABLE HWEG..HANGUL SYLLABLE HWEH
      55065 <= n && n <= 55091 || // Lo  [27] HANGUL SYLLABLE HWIG..HANGUL SYLLABLE HWIH
      55093 <= n && n <= 55119 || // Lo  [27] HANGUL SYLLABLE HYUG..HANGUL SYLLABLE HYUH
      55121 <= n && n <= 55147 || // Lo  [27] HANGUL SYLLABLE HEUG..HANGUL SYLLABLE HEUH
      55149 <= n && n <= 55175 || // Lo  [27] HANGUL SYLLABLE HYIG..HANGUL SYLLABLE HYIH
      55177 <= n && n <= 55203 ? g : n == 9757 || // So       WHITE UP POINTING INDEX
      n == 9977 || // So       PERSON WITH BALL
      9994 <= n && n <= 9997 || // So   [4] RAISED FIST..WRITING HAND
      n == 127877 || // So       FATHER CHRISTMAS
      127938 <= n && n <= 127940 || // So   [3] SNOWBOARDER..SURFER
      n == 127943 || // So       HORSE RACING
      127946 <= n && n <= 127948 || // So   [3] SWIMMER..GOLFER
      128066 <= n && n <= 128067 || // So   [2] EAR..NOSE
      128070 <= n && n <= 128080 || // So  [11] WHITE UP POINTING BACKHAND INDEX..OPEN HANDS SIGN
      n == 128110 || // So       POLICE OFFICER
      128112 <= n && n <= 128120 || // So   [9] BRIDE WITH VEIL..PRINCESS
      n == 128124 || // So       BABY ANGEL
      128129 <= n && n <= 128131 || // So   [3] INFORMATION DESK PERSON..DANCER
      128133 <= n && n <= 128135 || // So   [3] NAIL POLISH..HAIRCUT
      n == 128170 || // So       FLEXED BICEPS
      128372 <= n && n <= 128373 || // So   [2] MAN IN BUSINESS SUIT LEVITATING..SLEUTH OR SPY
      n == 128378 || // So       MAN DANCING
      n == 128400 || // So       RAISED HAND WITH FINGERS SPLAYED
      128405 <= n && n <= 128406 || // So   [2] REVERSED HAND WITH MIDDLE FINGER EXTENDED..RAISED HAND WITH PART BETWEEN MIDDLE AND RING FINGERS
      128581 <= n && n <= 128583 || // So   [3] FACE WITH NO GOOD GESTURE..PERSON BOWING DEEPLY
      128587 <= n && n <= 128591 || // So   [5] HAPPY PERSON RAISING ONE HAND..PERSON WITH FOLDED HANDS
      n == 128675 || // So       ROWBOAT
      128692 <= n && n <= 128694 || // So   [3] BICYCLIST..PEDESTRIAN
      n == 128704 || // So       BATH
      n == 128716 || // So       SLEEPING ACCOMMODATION
      129304 <= n && n <= 129308 || // So   [5] SIGN OF THE HORNS..RIGHT-FACING FIST
      129310 <= n && n <= 129311 || // So   [2] HAND WITH INDEX AND MIDDLE FINGERS CROSSED..I LOVE YOU HAND SIGN
      n == 129318 || // So       FACE PALM
      129328 <= n && n <= 129337 || // So  [10] PREGNANT WOMAN..JUGGLING
      129341 <= n && n <= 129342 || // So   [2] WATER POLO..HANDBALL
      129489 <= n && n <= 129501 ? p : 127995 <= n && n <= 127999 ? x : n == 8205 ? b : n == 9792 || // So       FEMALE SIGN
      n == 9794 || // So       MALE SIGN
      9877 <= n && n <= 9878 || // So   [2] STAFF OF AESCULAPIUS..SCALES
      n == 9992 || // So       AIRPLANE
      n == 10084 || // So       HEAVY BLACK HEART
      n == 127752 || // So       RAINBOW
      n == 127806 || // So       EAR OF RICE
      n == 127859 || // So       COOKING
      n == 127891 || // So       GRADUATION CAP
      n == 127908 || // So       MICROPHONE
      n == 127912 || // So       ARTIST PALETTE
      n == 127979 || // So       SCHOOL
      n == 127981 || // So       FACTORY
      n == 128139 || // So       KISS MARK
      128187 <= n && n <= 128188 || // So   [2] PERSONAL COMPUTER..BRIEFCASE
      n == 128295 || // So       WRENCH
      n == 128300 || // So       MICROSCOPE
      n == 128488 || // So       LEFT SPEECH BUBBLE
      n == 128640 || // So       ROCKET
      n == 128658 ? y : 128102 <= n && n <= 128105 ? k : m;
    }
    return this;
  }
  e.exports && (e.exports = t);
})(of);
var L2 = of.exports;
const N2 = /* @__PURE__ */ I2(L2), H2 = new N2(), j2 = (e = "") => H2.countGraphemes(e);
function _2(e) {
  return e && typeof e == "object" && typeof e.then == "function";
}
const ui = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ Ht({
    type: { type: String, default: "text" },
    size: { type: String, default: "medium" },
    placeholder: { type: String, default: "请输入" },
    maxlength: { type: Number },
    showCount: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    autosize: { type: [Object, Boolean], default: !0 },
    readonly: { type: Boolean, default: !1 },
    trim: { type: Boolean, default: !0 },
    // 默认去除首尾空格
    showPassword: { type: Boolean, default: !1 },
    // 是否显示密码
    prefixIcon: { type: Object },
    // 前缀图标 Icon Props
    blurByEnter: { type: Boolean, default: !0 }
  }, {
    modelValue: { type: String, default: "" },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ht(["blur", "input", "enter"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const o = bn(e, "modelValue"), i = r;
    function a() {
      let g = o.value;
      if (e.trim) {
        const m = g.trim();
        o.value = m, g = m;
      }
      return g;
    }
    let l = 0;
    function s() {
      let g = !1;
      if (e.blurByEnter && l > 0) {
        const h = (/* @__PURE__ */ new Date()).getTime();
        l != 0 && h >= l && h - l < 200 && (g = !0);
      }
      const m = a();
      i("blur", { value: m, isTriggerByEnter: g });
    }
    function d(g) {
      o.value = g;
      let m = g;
      e.trim && (m = m.trim()), i("input", { value: m });
    }
    const u = nr("input"), c = () => {
      u.value && u.value.focus();
    };
    function v() {
      let g = o.value;
      e.trim && (g = g.trim()), i("enter", { value: g }), e.blurByEnter && (l = (/* @__PURE__ */ new Date()).getTime(), setTimeout(() => {
        u.value && u.value.blur();
      }, 0));
    }
    return t({ focus: c }), (g, m) => (ke(), tt(re(ka), {
      ref: "input",
      "input-props": { autocomplete: "off" },
      type: e.type,
      size: e.size,
      "show-password-on": e.showPassword ? "click" : void 0,
      value: o.value,
      maxlength: e.maxlength,
      "show-count": e.showCount,
      "count-graphemes": e.maxlength != null && e.maxlength > 0 || e.showCount ? re(j2) : void 0,
      placeholder: e.placeholder,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      clearable: e.clearable,
      autosize: e.type !== "textarea" ? !1 : e.autosize,
      onInput: d,
      onBlur: s,
      onKeyup: Tf(v, ["enter"])
    }, fr({ _: 2 }, [
      e.prefixIcon ? {
        name: "prefix",
        fn: _e(() => [
          Xt(re(Co), Of(Mf(e.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly", "clearable", "autosize"]));
  }
}), ci = /* @__PURE__ */ Object.assign({
  name: "PSelect",
  inheritAttrs: !1
}, {
  __name: "select",
  props: /* @__PURE__ */ Ht({
    size: { type: String, default: "medium" },
    placeholder: { type: String, default: "请选择" },
    disabled: { type: Boolean, default: !1 },
    options: { type: Array, default: () => [] },
    clearable: { type: Boolean, default: !0 },
    showCheckmark: { type: Boolean, default: !0 },
    valueField: { type: String, default: "value" },
    labelField: { type: String, default: "label" },
    filterable: { type: Boolean, default: !1 },
    remote: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    throttleSearch: { type: Boolean, default: !1 },
    width: { type: String, default: "" },
    emptyDescription: { type: String, default: "暂无数据" }
  }, {
    modelValue: { default: null },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ht(["update", "change", "search"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = Fn(), o = t, i = bn(e, "modelValue"), a = Xn(function(d) {
      d !== i.value && pt(() => {
        o("change", d);
      }), i.value = d, o("update", d);
    }, 300);
    function l(d) {
      o("search", d);
    }
    const s = e.throttleSearch ? rf(l) : l;
    return (d, u) => (ke(), tt(re(lc), {
      class: Nt(`${re(r).class ? re(r).class : ""}`),
      style: Vt(e.width ? `width:${e.width}` : ""),
      options: e.options,
      value: i.value,
      size: e.size,
      remote: e.remote,
      filterable: e.filterable,
      loading: e.loading,
      placeholder: e.placeholder,
      disabled: e.disabled,
      "value-field": e.valueField,
      "label-field": e.labelField,
      clearable: e.clearable,
      "show-checkmark": e.showCheckmark,
      "fallback-option": !1,
      "consistent-menu-width": !0,
      "virtual-scroll": !0,
      "onUpdate:value": re(a),
      onSearch: re(s)
    }, {
      empty: _e(() => [
        Xt(re(Mr), {
          size: "small",
          description: e.emptyDescription
        }, null, 8, ["description"])
      ]),
      _: 1
    }, 8, ["class", "style", "options", "value", "size", "remote", "filterable", "loading", "placeholder", "disabled", "value-field", "label-field", "clearable", "show-checkmark", "onUpdate:value", "onSearch"]));
  }
}), ur = /* @__PURE__ */ Object.assign({
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
    loadingWithoutText: { type: Boolean, default: !0 },
    defaultType: { type: String, default: "" }
  },
  emits: ["click"],
  setup(e, { emit: t }) {
    const r = Fn(), o = Na(), i = t, a = Xn(function() {
      e.waiting || i("click");
    }, 300);
    return (l, s) => (ke(), tt(re(dr), {
      class: Nt([
        re(r).class ? re(r).class : "",
        e.size === "xs" ? "p-button-xs" : "",
        e.type === "default" && e.defaultType ? `p-button-default-${e.defaultType}` : "",
        e.waiting ? "p-button-waiting" : ""
      ]),
      style: Vt(re(r).style || ""),
      "attr-type": e.attrType,
      focusable: !1,
      bordered: !0,
      keyboard: !1,
      block: e.block,
      size: e.size === "xs" ? "small" : e.size,
      type: e.type,
      loading: e.loading,
      ghost: e.ghost,
      secondary: e.secondary,
      text: e.text,
      disabled: e.disabled,
      "icon-placement": "left",
      onClick: re(a)
    }, fr({
      default: _e(() => [
        !e.loading || e.loading && !e.loadingWithoutText ? (ke(), tt(re(o).default, { key: 0 })) : xt("", !0)
      ]),
      _: 2
    }, [
      l.$slots.icon ? {
        name: "icon",
        fn: _e(() => [
          Xt(re(o).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "style", "attr-type", "block", "size", "type", "loading", "ghost", "secondary", "text", "disabled", "onClick"]));
  }
}), W2 = { key: 0 }, V2 = { class: "p-search-item-content" }, U2 = {
  __name: "search-item",
  props: {
    lastItemForMulti: { type: Boolean, default: !1 },
    // 多行且每行的最后一个搜索条件
    oneLineCondition: { type: Boolean, required: !0 },
    showColon: { type: Boolean, default: !0 },
    item: { type: Object, required: !0 },
    labelWidth: { type: Number, required: !0 },
    searchData: { type: Object, required: !0 },
    doSearch: { type: Function, required: !0 },
    doReset: { type: Function, required: !0 },
    doChange: { type: Function, required: !0 },
    updateSearchData: { type: Function, required: !0 }
  },
  setup(e, { expose: t }) {
    const r = I(e.item.field ? e.searchData[e.item.field] : void 0);
    function o({ value: d }) {
      const u = d !== e.searchData[e.item.field];
      e.updateSearchData(e.item.field, d), u && e.doChange();
    }
    function i(d) {
      e.updateSearchData(e.item.field, d), e.doChange();
    }
    function a() {
      document.activeElement && document.activeElement.blur(), pt(() => {
        e.doSearch();
      });
    }
    function l() {
      document.activeElement && document.activeElement.blur(), pt(() => {
        e.doReset();
      });
    }
    function s() {
      e.item._isActionItem || e.item.field && (r.value = e.item.defaultValue);
    }
    return t({ reset: s }), (d, u) => (ke(), st("div", {
      class: Nt([
        "p-search-item",
        e.item._isActionItem ? "p-search-item-action" : "",
        e.lastItemForMulti ? "p-search-item-last" : ""
      ])
    }, [
      !e.item._isActionItem && !e.item._isEmptyItem ? (ke(), st(je, { key: 0 }, [
        Mn("div", {
          class: Nt({ "p-search-item-label": !0, "p-search-item-colon-label": e.showColon })
        }, [
          Xt(re(Bi), {
            style: Vt(
              e.oneLineCondition ? `max-width: ${e.labelWidth - 1}px` : { boxSizing: "border-box", width: `${e.labelWidth - 1}px` }
            )
          }, {
            default: _e(() => [
              Lt(un(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["style"]),
          e.showColon ? (ke(), st("span", W2, "：")) : xt("", !0)
        ], 2),
        Mn("div", V2, [
          e.item.type === "input" ? (ke(), tt(In(re(ui)), kt({
            key: 0,
            modelValue: r.value,
            "onUpdate:modelValue": u[0] || (u[0] = (c) => r.value = c)
          }, e.item.props, { onBlur: o }), null, 16, ["modelValue"])) : xt("", !0),
          e.item.type === "select" ? (ke(), tt(In(re(ci)), kt({
            key: 1,
            modelValue: r.value,
            "onUpdate:modelValue": u[1] || (u[1] = (c) => r.value = c)
          }, e.item.props, { onChange: i }), null, 16, ["modelValue"])) : xt("", !0)
        ])
      ], 64)) : xt("", !0),
      e.item._isActionItem ? (ke(), st(je, { key: 1 }, [
        Xt(re(ur), {
          style: { width: "80px" },
          onClick: a
        }, {
          icon: _e(() => [
            Xt(re(Co), {
              size: "20",
              color: "#ffffff"
            }, {
              default: _e(() => u[2] || (u[2] = [
                Mn("svg", {
                  t: "1737784979409",
                  class: "icon",
                  viewBox: "0 0 1024 1024",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "p-id": "6537",
                  width: "200",
                  height: "200"
                }, [
                  Mn("path", {
                    d: "M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0",
                    "p-id": "6538"
                  })
                ], -1)
              ])),
              _: 1
            })
          ]),
          default: _e(() => [
            u[3] || (u[3] = Lt("搜索"))
          ]),
          _: 1
        }),
        Xt(re(ur), {
          style: { "margin-left": "10px", width: "80px" },
          type: "default",
          onClick: l
        }, fr({
          default: _e(() => [
            u[5] || (u[5] = Lt("重置"))
          ]),
          _: 2
        }, [
          e.item.showResetBtnIcon ? {
            name: "icon",
            fn: _e(() => [
              Xt(re(Co), { size: "18" }, {
                default: _e(() => u[4] || (u[4] = [
                  Mn("svg", {
                    t: "1737871878167",
                    class: "icon",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "6743",
                    width: "200",
                    height: "200"
                  }, [
                    Mn("path", {
                      d: "M885.58 554.65c-22.86 0-41.39-18.53-41.39-41.39V182.17c0-22.86 18.53-41.39 41.39-41.39s41.39 18.53 41.39 41.39v331.09c-0.01 22.86-18.54 41.39-41.39 41.39zM140.62 885.74c-22.86 0-41.39-18.53-41.39-41.39V513.26c0-22.86 18.53-41.39 41.39-41.39s41.39 18.53 41.39 41.39v331.09c0 22.86-18.53 41.39-41.39 41.39z",
                      "p-id": "6744"
                    }),
                    Mn("path", {
                      d: "M513.1 927.12c-228.21 0-413.86-185.65-413.86-413.86 0-22.86 18.53-41.39 41.39-41.39s41.39 18.53 41.39 41.39c0 182.56 148.53 331.09 331.09 331.09 86.23 0 167.89-32.98 229.93-92.86 16.45-15.82 42.66-15.42 58.52 1.05 15.86 16.45 15.4 42.64-1.05 58.52-77.57 74.84-179.64 116.06-287.41 116.06zM885.6 554.65c-22.86 0-41.39-18.53-41.39-41.39 0-182.56-148.53-331.09-331.09-331.09-90.65 0-175.27 35.93-238.25 101.16-15.82 16.51-42.07 16.95-58.5 1.03-16.45-15.86-16.91-42.07-1.03-58.5C294.04 144.3 399.81 99.4 513.12 99.4c228.21 0 413.86 185.65 413.86 413.86 0 22.86-18.53 41.39-41.38 41.39z",
                      "p-id": "6745"
                    })
                  ], -1)
                ])),
                _: 1
              })
            ]),
            key: "0"
          } : void 0
        ]), 1024)
      ], 64)) : xt("", !0)
    ], 2));
  }
}, K2 = {
  class: "p-search",
  ref: "search"
}, q2 = /* @__PURE__ */ Object.assign({
  name: "PSearch"
}, {
  __name: "search",
  props: {
    model: { type: Array, default: () => [] },
    itemWidth: { type: Number, default: 268 },
    labelWidth: { type: Number },
    maxLabelWidth: { type: Number, default: 87 },
    visibleLine: { type: Number, default: -1 },
    showColon: { type: Boolean, default: !0 },
    showResetBtnIcon: { type: Boolean, default: !1 }
  },
  emits: ["search", "reset", "change"],
  setup(e, { expose: t, emit: r }) {
    const o = Math.max(e.itemWidth, 200), i = I({}), a = () => {
      const S = {};
      e.model.forEach((F) => {
        F.slot || F.field && (Object.hasOwn(F, "defaultValue") ? S[F.field] = F.defaultValue : F.type === "input" && (S[F.field] = ""));
      }), i.value = S;
    };
    a();
    const l = I([]), s = I({}), d = { _isActionItem: !0, width: 170, showResetBtnIcon: e.showResetBtnIcon }, u = { _isEmptyItem: !0 }, c = nr("search"), v = A(() => s.value.singleLine || l.value.length === 2 && l.value[1].length === 1), g = A(() => {
      let S = e.labelWidth || 59;
      return S = Math.min(S, e.maxLabelWidth), v.value === !1 ? S : e.maxLabelWidth;
    });
    function m() {
      if (!c.value || !e.model || e.model.length === 0) return;
      const S = Math.floor(c.value.getBoundingClientRect().width);
      if (S >= o * e.model.length + d.width) {
        l.value = [[...e.model, d]], s.value = { singleLine: !0 };
        return;
      }
      const F = Math.floor(S / o);
      if (e.visibleLine <= 0) {
        const P = [];
        e.model.forEach((O, n) => {
          n % F === 0 && P.push([]), P[P.length - 1].push(O);
        });
        const _ = P[P.length - 1].length;
        if (_ === F)
          P.push([d]);
        else {
          let O = 0;
          const n = F - _;
          for (; O < n; )
            O === n - 1 ? P[P.length - 1].push(d) : P[P.length - 1].push(u), O += 1;
        }
        l.value = P, s.value = { multiLine: !0 };
        return;
      }
    }
    $t(() => {
      m(), M2(
        window,
        "resize",
        rf(function() {
          m();
        })
      );
    });
    function h(S, F) {
      S && (i.value[S] = F);
    }
    const p = r;
    function x(S, F = !1) {
      if (typeof S != "object" || S === null) return {};
      const P = (_) => F ? !_ && _ !== !1 && _ !== 0 : _ == null || _ === "";
      return Object.fromEntries(Object.entries(S).filter(([_, O]) => !P(O)));
    }
    function b() {
      return x(i.value);
    }
    const y = nr("searchItem");
    function k() {
      return y.value.forEach((S) => {
        S.reset();
      }), a(), b();
    }
    let w = 0;
    function R() {
      w = (/* @__PURE__ */ new Date()).getTime(), p("search", b(), { type: "search" });
    }
    function B() {
      const S = k();
      pt(() => {
        w = (/* @__PURE__ */ new Date()).getTime(), p("reset", S, { type: "reset" });
      });
    }
    function C() {
      setTimeout(() => {
        let S = !1;
        const F = (/* @__PURE__ */ new Date()).getTime();
        w != 0 && F >= w && F - w < 200 && (S = !0), p("change", b(), { type: "change", isActionTriggered: S });
      }, 0);
    }
    return t({ getSearchData: b, resetSearchData: k }), (S, F) => (ke(), st("div", K2, [
      (ke(!0), st(je, null, io(l.value, (P, _) => (ke(), st("div", {
        key: _,
        class: "p-search-lilne",
        style: Vt(_ > 0 ? "margin-top:12px" : "")
      }, [
        (ke(!0), st(je, null, io(P, (O, n) => (ke(), tt(U2, {
          ref_for: !0,
          ref: "searchItem",
          key: O.field || n,
          oneLineCondition: v.value,
          labelWidth: g.value,
          showColon: e.showColon,
          item: O,
          lastItemForMulti: s.value.multiLine && !O._isActionItem && n === P.length - 1,
          searchData: i.value,
          doSearch: R,
          doReset: B,
          doChange: C,
          updateSearchData: h,
          style: Vt(
            s.value.singleLine && !O._isActionItem ? `width: ${re(o)}px` : s.value.multiLine ? "flex:1" : ""
          )
        }, null, 8, ["oneLineCondition", "labelWidth", "showColon", "item", "lastItemForMulti", "searchData", "style"]))), 128))
      ], 4))), 128))
    ], 512));
  }
}), Ma = /* @__PURE__ */ Object.assign({
  name: "PSwitch",
  inheritAttrs: !1
}, {
  __name: "switch",
  props: /* @__PURE__ */ Ht({
    size: { type: String, default: "medium" },
    checkedValue: { type: [String, Number, Boolean], default: !0 },
    uncheckedValue: { type: [String, Number, Boolean], default: !1 },
    disabled: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 },
    checkedText: { type: String, default: "" },
    uncheckedText: { type: String, default: "" },
    outside: { type: Boolean, default: !0 },
    readonly: { type: Boolean, default: !1 }
  }, {
    modelValue: { type: [String, Number, Boolean] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ht(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = bn(e, "modelValue"), o = Fn(), i = t, a = Xn(function(l) {
      e.readonly || (r.value = l, i("change", l));
    }, 300);
    return (l, s) => (ke(), st(je, null, [
      Xt(re(T2), {
        class: Nt([re(o).class || "", e.readonly ? "p-switch-readonly" : ""]),
        style: Vt(re(o).style || ""),
        size: e.size,
        value: r.value,
        loading: e.loading,
        disabled: e.disabled,
        "checked-value": e.checkedValue,
        "unchecked-value": e.uncheckedValue,
        "on-update:value": re(a)
      }, fr({ _: 2 }, [
        !e.outside && e.checkedText != null && e.checkedText !== "" ? {
          name: "checked",
          fn: _e(() => [
            Lt(un(e.checkedText), 1)
          ]),
          key: "0"
        } : void 0,
        !e.outside && e.uncheckedText != null && e.uncheckedText !== "" ? {
          name: "unchecked",
          fn: _e(() => [
            Lt(un(e.uncheckedText), 1)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["class", "style", "size", "value", "loading", "disabled", "checked-value", "unchecked-value", "on-update:value"]),
      e.outside && e.checkedText != null && e.checkedText !== "" && r.value === e.checkedValue ? (ke(), st("span", {
        key: 0,
        class: Nt(["p-switch-outside-text", e.disabled ? "p-switch-outside-text-disabled" : ""])
      }, un(e.checkedText), 3)) : xt("", !0),
      e.outside && e.uncheckedText != null && e.uncheckedText !== "" && r.value === e.uncheckedValue ? (ke(), st("span", {
        key: 1,
        class: Nt(["p-switch-outside-text", e.disabled ? "p-switch-outside-text-disabled" : ""])
      }, un(e.uncheckedText), 3)) : xt("", !0)
    ], 64));
  }
}), G2 = {
  key: 1,
  style: { flex: "1" }
}, X2 = {
  key: 2,
  autocomplete: "off",
  type: "submit",
  style: { display: "none" }
}, Y2 = /* @__PURE__ */ Object.assign({
  name: "PForm",
  inheritAttrs: !1
}, {
  __name: "form",
  props: {
    model: { type: Array, default: () => [] },
    rules: { type: Object, default: () => {
    } },
    inline: { type: Boolean, default: !1 },
    showLabel: { type: Boolean, default: !0 },
    labelPlacement: { type: String, default: "left" },
    // 标签显示的位置
    showRequireMark: { type: Boolean, default: !1 },
    // 是否展示必填的星号
    readonly: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    feedbackSizeClass: { type: String },
    itemStyle: { type: String, default: "flex:1" },
    // form-item style
    inlineSize: { type: Array, default: () => [] },
    // 配合 inline 使用，每行显示 form-item 的数量，可传一个数组，如 [2, 3, 2]，表示第一行显示 2 个，第二行显示 3 个，第三行及以下显示 2 个
    inlineClass: { type: Array, default: () => [] },
    // 配合 inline 使用，每行的 className
    virtualSubmit: { type: Boolean, default: !1 }
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: r }) {
    const o = A(() => {
      if (!e.inline || e.inline && e.inlineSize.length <= 0 || e.model.length <= 0) return null;
      const y = [], k = [];
      if (e.inlineSize.length === 1) {
        if (e.model.forEach((w, R) => {
          R % e.inlineSize[0] === 0 && k.push([]), k[k.length - 1].push(w);
        }), k[k.length - 1].length < e.inlineSize[0]) {
          let w = e.inlineSize[0] - k[k.length - 1].length, R = 0;
          for (; R < w; )
            k[k.length - 1].push({ isInlinePlaceholder: !0 }), R++;
        }
      } else {
        let w = 0, R = 0;
        for (let C = 0; C < e.inlineSize.length - 1; C++) {
          const S = e.inlineSize[C];
          if (R += S, w < e.model.length) {
            const F = e.model.slice(w, w + S);
            if (F.length > 0) {
              if (F.length < S) {
                let P = S - F.length, _ = 0;
                for (; _ < P; )
                  F.push({ isInlinePlaceholder: !0 }), _++;
              }
              y.push(F);
            }
            w += S;
          }
        }
        const B = e.inlineSize[e.inlineSize.length - 1];
        if (e.model.filter((C, S) => S >= R).forEach((C, S) => {
          S % B === 0 && k.push([]), k[k.length - 1].push(C);
        }), k.length > 0 && k[k.length - 1].length < B) {
          let C = B - k[k.length - 1].length, S = 0;
          for (; S < C; )
            k[k.length - 1].push({ isInlinePlaceholder: !0 }), S++;
        }
      }
      return [...y, ...k];
    }), i = function() {
      const y = {};
      return e.model.forEach((k) => {
        k.slot || !k.field || k.placeholder || (y[k.field] = k.defaultValue);
      }), I(y);
    }(), a = function() {
      return e.feedbackSizeClass ? ["s"].includes(e.feedbackSizeClass) ? `p-form-item-feedback-${e.feedbackSizeClass}` : e.feedbackSizeClass : "";
    }();
    function l() {
      const y = {};
      return e.model.forEach((k) => {
        !k.field || k.placeholder || k.slot && (y[k.field] = Lf(k.value));
      }), { ...i.value, ...y };
    }
    const s = r, d = nr("form"), u = (y = !0) => (y && document.activeElement && document.activeElement.blur(), d.value.validate().then(() => ({ formData: l(), valid: !0 })).catch((k) => ({ formData: l(), valid: !1, errors: k }))), c = Xn(function() {
      u(!0).then((y) => {
        s("submit", y);
      });
    }), v = nr("formItem");
    function g(y = "") {
      if (!y) {
        d.value.restoreValidation();
        return;
      }
      const k = v.value.find((w) => w.path === y);
      k && k.restoreValidation();
    }
    function m(y) {
      y && e.rules && e.rules[y] && (e.rules[y].trigger && e.rules[y].trigger.includes("input") || g(y));
    }
    function h(y, k) {
      var R, B;
      const w = y.field;
      w && e.rules && e.rules[w] && ((R = y.props) != null && R.filterable) && g(w), (B = y.event) != null && B.search && y.event.search(k);
    }
    function p(y, k) {
      var R;
      const w = y.field;
      w && e.rules && e.rules[w] && (!e.rules[w].trigger || e.rules[w].trigger && e.rules[w].trigger.includes("change") === !1) && g(w), (R = y.event) != null && R.update && y.event.update(k);
    }
    let x = {};
    e.model.forEach((y) => {
      !y.slot && y.ref === !0 && (x[y.field] = nr(`form-item-${y.field}`));
    });
    function b(y = "") {
      return y && x[y] ? x[y].value[0] : null;
    }
    return hi(() => {
      x = null;
    }), t({ validate: u, restoreValidation: g, getFormValue: l, getChild: b }), (y, k) => (ke(), tt(re(MS), {
      ref: "form",
      class: Nt([e.inline ? "p-form-inline" : ""]),
      "show-label": e.showLabel,
      "label-placement": e.labelPlacement,
      "label-width": "auto",
      "require-mark-placement": "left",
      "show-require-mark": e.showRequireMark,
      "label-align": e.labelPlacement === "left" ? "right" : "left",
      model: re(i),
      rules: e.rules,
      inline: e.inline,
      onSubmit: If(re(c), ["prevent"])
    }, {
      default: _e(() => [
        !e.inline || e.inline && e.inlineSize.length <= 0 ? (ke(!0), st(je, { key: 0 }, io(e.model, (w, R) => (ke(), st(je, {
          key: w.field || R
        }, [
          w.placeholder ? xt("", !0) : (ke(), tt(re(wd), {
            key: 0,
            ref_for: !0,
            ref: "formItem",
            style: Vt(w.itemStyle == null ? e.itemStyle : w.itemStyle),
            label: w.label,
            path: w.field,
            "feedback-class": re(a),
            first: !0,
            "show-require-mark": w.showRequireMark == null ? e.showRequireMark : !!w.showRequireMark
          }, {
            default: _e(() => [
              w.slot === !0 ? Yt(y.$slots, w.field, { key: 0 }) : (ke(), st(je, { key: 1 }, [
                w.type === "input" ? (ke(), tt(In(re(ui)), kt({
                  key: 0,
                  ref_for: !0,
                  ref: `form-item-${w.field}`,
                  modelValue: re(i)[w.field],
                  "onUpdate:modelValue": (B) => re(i)[w.field] = B
                }, { disabled: e.disabled, readonly: e.readonly, ...w.props }, {
                  onInput: (B) => m(w.field)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : w.type === "switch" ? (ke(), tt(In(re(Ma)), kt({
                  key: 1,
                  ref_for: !0,
                  ref: `form-item-${w.field}`,
                  modelValue: re(i)[w.field],
                  "onUpdate:modelValue": (B) => re(i)[w.field] = B
                }, { disabled: e.disabled, readonly: e.readonly, ...w.props }), null, 16, ["modelValue", "onUpdate:modelValue"])) : w.type === "select" ? (ke(), tt(In(re(ci)), kt({
                  key: 2,
                  ref_for: !0,
                  ref: `form-item-${w.field}`,
                  modelValue: re(i)[w.field],
                  "onUpdate:modelValue": (B) => re(i)[w.field] = B
                }, { disabled: e.disabled, ...w.props }, {
                  onSearch: (B) => h(w, B),
                  onUpdate: (B) => p(w, B)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onSearch", "onUpdate"])) : xt("", !0)
              ], 64))
            ]),
            _: 2
          }, 1032, ["style", "label", "path", "feedback-class", "show-require-mark"]))
        ], 64))), 128)) : xt("", !0),
        e.inline && e.inlineSize.length > 0 && o.value ? (ke(!0), st(je, { key: 1 }, io(o.value, (w, R) => (ke(), st("div", {
          key: R,
          class: Nt(["p-form-inline-item", e.inlineClass[R] ? e.inlineClass[R] : ""])
        }, [
          (ke(!0), st(je, null, io(w, (B, C) => (ke(), st(je, {
            key: B.field || R + "-" + C
          }, [
            !B.isInlinePlaceholder && !B.placeholder ? (ke(), tt(re(wd), {
              key: 0,
              ref_for: !0,
              ref: "formItem",
              style: Vt(B.itemStyle == null ? e.itemStyle : B.itemStyle),
              label: B.label,
              path: B.field,
              "feedback-class": re(a),
              first: !0,
              "show-require-mark": B.showRequireMark == null ? e.showRequireMark : !!B.showRequireMark
            }, {
              default: _e(() => [
                B.slot === !0 ? Yt(y.$slots, B.field, { key: 0 }) : (ke(), st(je, { key: 1 }, [
                  B.type === "input" ? (ke(), tt(In(re(ui)), kt({
                    key: 0,
                    ref_for: !0,
                    ref: `form-item-${B.field}`,
                    modelValue: re(i)[B.field],
                    "onUpdate:modelValue": (S) => re(i)[B.field] = S
                  }, { disabled: e.disabled, readonly: e.readonly, ...B.props }, {
                    onInput: (S) => m(B.field)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : B.type === "switch" ? (ke(), tt(In(re(Ma)), kt({
                    key: 1,
                    ref_for: !0,
                    ref: `form-item-${B.field}`,
                    modelValue: re(i)[B.field],
                    "onUpdate:modelValue": (S) => re(i)[B.field] = S
                  }, { disabled: e.disabled, readonly: e.readonly, ...B.props }), null, 16, ["modelValue", "onUpdate:modelValue"])) : B.type === "select" ? (ke(), tt(In(re(ci)), kt({
                    key: 2,
                    ref_for: !0,
                    ref: `form-item-${B.field}`,
                    modelValue: re(i)[B.field],
                    "onUpdate:modelValue": (S) => re(i)[B.field] = S
                  }, { disabled: e.disabled, ...B.props }, {
                    onSearch: (S) => h(B, S),
                    onUpdate: (S) => p(B, S)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onSearch", "onUpdate"])) : xt("", !0)
                ], 64))
              ]),
              _: 2
            }, 1032, ["style", "label", "path", "feedback-class", "show-require-mark"])) : (ke(), st("div", G2))
          ], 64))), 128))
        ], 2))), 128)) : xt("", !0),
        e.virtualSubmit ? (ke(), st("button", X2, "virtual button")) : xt("", !0),
        Yt(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "show-label", "label-placement", "show-require-mark", "label-align", "model", "rules", "inline", "onSubmit"]));
  }
}), Z2 = /* @__PURE__ */ Object.assign({
  name: "PRadio",
  inheritAttrs: !1
}, {
  __name: "radio",
  props: /* @__PURE__ */ Ht({
    size: { type: String, default: "medium" },
    disabled: { type: Boolean, default: !1 },
    val: { type: [String, Number, Boolean], default: "" }
  }, {
    modelValue: { type: [String, Number, Boolean] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ht(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = bn(e, "modelValue"), o = Fn(), i = t, a = Xn(function(l) {
      l && (r.value = e.val, i("change", e.val));
    }, 300);
    return (l, s) => (ke(), tt(re(Fl), {
      style: Vt(re(o).style || ""),
      checked: r.value === e.val,
      size: e.size,
      disabled: e.disabled,
      value: e.val,
      "on-update:checked": re(a)
    }, {
      default: _e(() => [
        Yt(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "checked", "size", "disabled", "value", "on-update:checked"]));
  }
}), J2 = /* @__PURE__ */ Object.assign({
  name: "PCheckbox",
  inheritAttrs: !1
}, {
  __name: "checkbox",
  props: /* @__PURE__ */ Ht({
    size: { type: String, default: "medium" },
    disabled: { type: Boolean, default: !1 },
    checkedValue: { type: [String, Number, Boolean], default: !0 },
    uncheckedValue: { type: [String, Number, Boolean], default: !1 },
    val: { type: [String, Number] }
  }, {
    modelValue: { type: [String, Number, Boolean] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Ht(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = bn(e, "modelValue"), o = Fn(), i = t, a = Xn(function(l) {
      r.value = l ? e.checkedValue : e.uncheckedValue, setTimeout(() => {
        i("change", r.value);
      }, 0);
    }, 300);
    return (l, s) => (ke(), tt(re(Si), {
      style: Vt(re(o).style || ""),
      checked: r.value === e.checkedValue,
      size: e.size,
      disabled: e.disabled,
      "checked-value": !0,
      "unchecked-value": !1,
      value: e.val,
      "on-update:checked": re(a)
    }, {
      default: _e(() => [
        Yt(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "checked", "size", "disabled", "value", "on-update:checked"]));
  }
}), Q2 = /* @__PURE__ */ Object.assign({
  name: "PCheckboxGroup",
  inheritAttrs: !1
}, {
  __name: "checkbox-group",
  props: {
    modelValue: { type: Array, default: [] },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ Ht(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = bn(e, "modelValue"), o = Fn(), i = t, a = Xn(function(l, s) {
      r.value = l || [], setTimeout(() => {
        i("change", r.value, s);
      }, 0);
    }, 300);
    return (l, s) => (ke(), tt(re(nc), {
      class: "p-checkbox-group",
      style: Vt(re(o).style || ""),
      value: r.value,
      "on-update:value": re(a)
    }, {
      default: _e(() => [
        Yt(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "value", "on-update:value"]));
  }
}), eB = /* @__PURE__ */ Object.assign({
  name: "PRadioGroup",
  inheritAttrs: !1
}, {
  __name: "radio-group",
  props: {
    modelValue: { type: [String, Number, Boolean], default: null },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ Ht(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = bn(e, "modelValue"), o = Fn(), i = t, a = Xn(function(l) {
      r.value = l, setTimeout(() => {
        i("change", r.value);
      }, 0);
    }, 300);
    return (l, s) => (ke(), tt(re(xc), {
      class: "p-radio-group",
      style: Vt(re(o).style || ""),
      value: r.value,
      "on-update:value": re(a)
    }, {
      default: _e(() => [
        Yt(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "value", "on-update:value"]));
  }
}), tB = /* @__PURE__ */ J((e, {
  expose: t
}) => {
  const r = {
    bordered: !1,
    bottomBordered: !1,
    singleColumn: !1,
    singleLine: !0,
    striped: !1,
    pagination: !1,
    size: "small"
  }, o = nr("table");
  return t({
    scrollTo: (i = {}) => {
      o && o.value && o.value.scrollTo && o.value.scrollTo(i);
    }
  }), () => f(ow, {
    ...r,
    ...e,
    ref: "table"
  }, {
    empty: () => f(Mr, {
      size: "medium",
      description: "暂无数据"
    })
  });
}, {
  name: "PDataTable",
  inheritAttrs: !0
}), nB = {
  __name: "popconfirm-action",
  props: {
    positiveText: { type: String, default: "" },
    negativeText: { type: String, default: "" },
    type: { type: String, default: "primary" },
    onClose: { type: Function },
    onPositiveClick: { type: Function },
    onNegativeClick: { type: Function }
  },
  setup(e) {
    function t() {
      e.onClose && e.onClose(), e.onNegativeClick && e.onNegativeClick();
    }
    function r() {
      e.onClose && e.onClose(), e.onPositiveClick && e.onPositiveClick();
    }
    return (o, i) => (ke(), st(je, null, [
      e.negativeText ? (ke(), tt(re(ur), {
        key: 0,
        size: "xs",
        type: "default",
        "default-type": e.type,
        onClick: t
      }, {
        default: _e(() => [
          Lt(un(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type"])) : xt("", !0),
      e.positiveText ? (ke(), tt(re(ur), {
        key: 1,
        size: "xs",
        type: e.type,
        onClick: r
      }, {
        default: _e(() => [
          Lt(un(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type"])) : xt("", !0)
    ], 64));
  }
}, rB = /* @__PURE__ */ J((e, {
  emit: t
}) => {
  const r = Na(), o = I(), i = () => {
    o.value.setShow(!1);
  };
  return () => f(P2, {
    ref: o,
    class: {
      "p-popconfirm": !0,
      "p-popconfirm-none-action": e.positiveText == null && e.positiveText == null
    },
    style: e.style,
    placement: e.placement,
    showIcon: !1
  }, {
    default: r.default,
    trigger: r.trigger,
    action: () => f(nB, {
      positiveText: e.positiveText,
      negativeText: e.negativeText,
      type: e.type,
      onClose: i,
      onPositiveClick: function() {
        t("positive-click");
      },
      onNegativeClick: function() {
        t("negative-click");
      }
    })
  });
}, {
  name: "PPopconfirm",
  inheritAttrs: !1,
  props: {
    positiveText: {
      type: String,
      default: "确认"
    },
    negativeText: {
      type: String,
      default: "取消"
    },
    type: {
      type: String,
      default: "primary"
    },
    placement: {
      type: String,
      default: "top"
    },
    style: {
      type: String,
      default: "max-width:300px"
    }
  }
}), oB = /* @__PURE__ */ Object.assign({
  name: "PPagination",
  inheritAttrs: !1
}, {
  __name: "pagination",
  props: /* @__PURE__ */ Ht({
    total: { type: Number },
    pageSlot: { type: Number, default: 9 },
    showQuickJumper: { type: Boolean, default: !0 },
    showSizePicker: { type: Boolean, default: !0 },
    pageSizes: { type: Array, default: () => [20, 40, 60, 80] },
    simple: { type: Boolean, default: !1 }
  }, {
    page: { type: Number, default: 1 },
    pageModifiers: {},
    pageSize: { type: Number, default: 20 },
    pageSizeModifiers: {}
  }),
  emits: /* @__PURE__ */ Ht(["changePage", "changePageSize"], ["update:page", "update:pageSize"]),
  setup(e, { emit: t }) {
    const r = Fn(), o = bn(e, "page"), i = bn(e, "pageSize"), a = t;
    function l(d) {
      o.value = d, a("changePage", d);
    }
    function s(d) {
      i.value = d, a("changePageSize", d);
    }
    return (d, u) => (ke(), tt(re(uc), {
      class: "p-pagination",
      size: "medium",
      "display-order": ["pages", "size-picker", "quick-jumper"],
      simple: e.simple,
      "item-count": e.total,
      page: o.value,
      "page-size": i.value,
      "page-slot": e.pageSlot,
      "show-quick-jumper": e.showQuickJumper,
      "show-size-picker": e.showSizePicker,
      "page-sizes": e.pageSizes,
      "show-quick-jump-dropdown": !1,
      "on-update:page": l,
      "on-update:page-size": s,
      style: Vt(re(r).style)
    }, fr({ _: 2 }, [
      e.simple ? void 0 : {
        name: "prefix",
        fn: _e(({ itemCount: c }) => [
          Lt("共 " + un(c) + " 条记录", 1)
        ]),
        key: "0"
      },
      e.showQuickJumper && !e.simple ? {
        name: "suffix",
        fn: _e(() => [
          u[0] || (u[0] = Lt("页"))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["simple", "item-count", "page", "page-size", "page-slot", "show-quick-jumper", "show-size-picker", "page-sizes", "style"]));
  }
});
/*!
  * vue-promised v2.1.0
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
function iB(e, t = 200) {
  const r = I(!1), o = I(!1), i = A(() => !r.value && !o.value), a = I(!1), l = I(), s = I();
  let d;
  return Ie(() => re(e), (u) => {
    if (r.value = !1, o.value = !1, l.value = null, !u) {
      s.value = null, d && clearTimeout(d), d = null;
      return;
    }
    re(t) > 0 ? (a.value = !1, d && clearTimeout(d), d = setTimeout(() => {
      a.value = !0;
    }, Number(re(t)))) : a.value = !0, u.then((c) => {
      u === re(e) && (s.value = c, o.value = !0);
    }).catch((c) => {
      u === re(e) && (l.value = c, r.value = !0);
    });
  }, { immediate: !0 }), { isPending: i, isRejected: r, isResolved: o, isDelayElapsed: a, error: l, data: s };
}
const af = ({ delay: e = 300, minPendingTime: t = 500, loadingValue: r = !1 } = {}) => {
  let o = 0, i = null;
  const a = () => {
    i && (clearTimeout(i), i = null);
  }, l = I(!!r), s = I(!!r);
  let d = null;
  const u = (c) => (l.value = c, new Promise((v) => {
    c === !0 ? v() : d = v;
  }));
  return Ie(
    l,
    (c) => {
      if (o === 0)
        o = (/* @__PURE__ */ new Date()).getTime(), a(), i = setTimeout(() => {
          s.value = c;
        }, e);
      else {
        if (a(), s.value !== c) {
          const g = (/* @__PURE__ */ new Date()).getTime() - o - e, m = g >= t ? 0 : t - g;
          i = setTimeout(() => {
            s.value = c, d && (d(), d = null);
          }, m);
        } else
          d && (d(), d = null);
        o = 0;
      }
    },
    { immediate: !!r, deep: !1 }
  ), hi(() => {
    d = null, a();
  }), { loading: s, waiting: l, setLoadingStatus: u };
}, aB = {
  key: 1,
  class: "p-promised-loading"
}, lB = /* @__PURE__ */ Object.assign({
  name: "PPromised",
  inheritAttrs: !1
}, {
  __name: "promised",
  props: {
    promise: { default: null },
    dataField: { type: String },
    loadingSize: { type: String, default: "medium" },
    loadingTop: { type: Number },
    emptyDesc: { type: String, default: "暂无数据" },
    errorDefaultDesc: { type: String, default: "系统异常" },
    defaultSlotAsEmpty: { type: Boolean, default: !1 },
    nilType: { type: String },
    // 控制 empty 和 error 状态下的样式
    contentStyle: { type: String, default: "position:relative; min-height:72px;" }
    //  内容的最小高度，避免 loading/empty 状态下高度不确定导致抖动
  },
  setup(e) {
    const t = A(() => ["small", "medium", "large"].includes(e.loadingSize) ? e.loadingSize : "medium"), r = A(() => {
      const y = { position: "absolute", left: "50%", zIndex: 2 };
      return e.loadingTop == null ? y.top = "50%" : y.top = `${e.loadingTop}px`, t.value === "small" ? (y.marginLeft = "-14px", e.loadingTop == null && (y.marginTop = "-14px")) : t.value === "medium" ? (y.marginLeft = "-17px", e.loadingTop == null && (y.marginTop = "-17px")) : t.value === "large" && (y.marginLeft = "-20px", e.loadingTop == null && (y.marginTop = "-20px")), y;
    }), o = A(() => e.nilType === "border" ? "p-promised-empty-border" : e.nilType === "line" ? "p-promised-empty-line" : ""), i = Fn(), a = ie(() => e.promise), { data: l, error: s, isPending: d, isDelayElapsed: u, isResolved: c, isRejected: v } = iB(a, 0), { loading: g, waiting: m } = af(), h = A(() => !g.value && !d.value && !s.value && b(l.value));
    Ie(
      () => d.value && u.value,
      (y) => {
        m.value = y;
      },
      { immediate: !1 }
    );
    const p = I(!1);
    Ie(v, (y) => {
      y === !0 && p.value === !1 && (p.value = y);
    }), Ie(c, (y) => {
      y === !0 && p.value === !0 && (p.value = !1);
    });
    function x(y) {
      let k = !0;
      if (typeof y == "object") {
        for (const w in y)
          if (typeof y[w] == "object" ? k = x(y[w]) : k = y[w] === "" || y[w] === null || y[w] === void 0, k === !1)
            break;
        return k;
      } else
        return y === "" || y === null || y === void 0;
    }
    function b(y) {
      return y == null || y === "" ? !0 : x(e.dataField ? y[e.dataField] : y);
    }
    return (y, k) => (ke(), st("div", {
      class: Nt(re(i).class ? re(i).class : ""),
      style: Vt(e.contentStyle)
    }, [
      !re(g) && !re(d) && !re(s) && !b(re(l)) || re(d) && re(m) && !p.value && !re(s) && !b(re(l)) || h.value && e.defaultSlotAsEmpty ? Yt(y.$slots, "default", {
        key: 0,
        data: re(l),
        isEmpty: h.value
      }) : xt("", !0),
      re(g) ? (ke(), st("div", aB, [
        Xt(re(nf), {
          size: t.value,
          style: Vt(r.value)
        }, null, 8, ["size", "style"]),
        k[0] || (k[0] = Mn("div", { class: "p-promised-loading-mask" }, null, -1))
      ])) : xt("", !0),
      h.value && !e.defaultSlotAsEmpty ? (ke(), st(je, { key: 2 }, [
        y.$slots.emptyCustomize ? Yt(y.$slots, "emptyCustomize", { key: 1 }) : (ke(), tt(re(Mr), {
          key: 0,
          class: Nt(o.value),
          description: e.emptyDesc,
          size: "medium"
        }, fr({ _: 2 }, [
          y.$slots.emptyExtra ? {
            name: "extra",
            fn: _e(() => [
              Yt(y.$slots, "emptyExtra")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["class", "description"]))
      ], 64)) : xt("", !0),
      !re(g) && !re(d) && re(s) ? (ke(), tt(re(Mr), {
        key: 3,
        class: Nt(o.value),
        description: re(s).message || e.errorDefaultDesc,
        size: "medium"
      }, null, 8, ["class", "description"])) : xt("", !0)
    ], 6));
  }
}), sB = /* @__PURE__ */ Object.assign({
  name: "PDrawer",
  inheritAttrs: !1
}, {
  __name: "drawer",
  props: /* @__PURE__ */ Ht({
    width: { type: [String, Number], default: 700 },
    height: { type: [String, Number] },
    title: { type: String, default: "" },
    closable: { type: Boolean, default: !0 },
    maskClosable: { type: Boolean, default: !1 },
    placement: { type: String, default: "right" },
    bodyContentClass: { type: String },
    bodyContentStyle: { type: [String, Object] },
    footerStyle: { type: [String, Object] },
    lock: { type: Boolean, default: !1 }
  }, {
    show: { type: Boolean, default: !1 },
    showModifiers: {}
  }),
  emits: /* @__PURE__ */ Ht(["afterEnter", "afterLeave"], ["update:show"]),
  setup(e, { emit: t }) {
    const r = bn(e, "show"), o = Na(), i = t;
    function a(d) {
      e.lock || (r.value = d);
    }
    function l() {
      i("afterEnter");
    }
    function s() {
      i("afterLeave");
    }
    return (d, u) => (ke(), tt(re(yS), {
      class: Nt({ "p-drawer": !0, "p-drawer-lock": e.lock }),
      show: r.value,
      width: e.width,
      height: e.height,
      "auto-focus": !1,
      "block-scroll": "",
      "native-scrollbar": "",
      "show-mask": "",
      resizable: !1,
      "close-on-esc": !1,
      placement: e.placement,
      "mask-closable": e.maskClosable,
      "on-update:show": a,
      "on-after-enter": l,
      "on-after-leave": s
    }, {
      default: _e(() => [
        Xt(re(wS), {
          "body-content-class": e.bodyContentClass,
          "body-content-style": e.bodyContentStyle,
          "footer-style": e.footerStyle,
          closable: e.closable,
          "native-scrollbar": ""
        }, fr({
          default: _e(() => [
            Yt(d.$slots, "default")
          ]),
          _: 2
        }, [
          e.title || !e.title && e.closable ? {
            name: "header",
            fn: _e(() => [
              Lt(un(e.title || " "), 1)
            ]),
            key: "0"
          } : void 0,
          d.$slots.footer ? {
            name: "footer",
            fn: _e(() => [
              Xt(re(o).footer)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["body-content-class", "body-content-style", "footer-style", "closable"])
      ]),
      _: 3
    }, 8, ["class", "show", "width", "height", "placement", "mask-closable"]));
  }
});
function hB(e = ["loadingBar", "message"], t = {}) {
  var i;
  const { loadingBar: r, message: o } = Xc(e, {
    configProviderProps: { inlineThemeDisabled: !0 },
    loadingBarProviderProps: {
      "container-style": { height: "2px" },
      "loading-bar-style": { loading: { height: "2px", background: "#2080f0ff" } }
    },
    messageProviderProps: {
      closable: !1,
      duration: 3500,
      keepAliveOnHover: !1,
      containerClass: ((i = t.messageProviderProps) == null ? void 0 : i.containerClass) || "p-message-discrete"
    }
  });
  return { loadingBar: r, message: o };
}
const lf = {
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
    const { loading: t, waiting: r, setLoadingStatus: o } = af();
    function i(s, d) {
      const u = s({
        done: function() {
          return o(!1).then(() => {
            e.onLoading(!1), e.onClose();
          });
        },
        hideLoading: function() {
          return o(!1).then(() => {
            e.onLoading(!1);
          });
        }
      });
      if (u !== !1)
        if (_2(u)) {
          d === "positiveClick" && (o(!0), e.onLoading(!0));
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
    return (s, d) => (ke(), st(je, null, [
      e.negativeText ? (ke(), tt(re(ur), {
        key: 0,
        size: "small",
        type: "default",
        "default-type": e.type,
        disabled: re(t),
        onClick: a
      }, {
        default: _e(() => [
          Lt(un(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type", "disabled"])) : xt("", !0),
      e.positiveText ? (ke(), tt(re(ur), {
        key: 1,
        size: "small",
        type: e.type,
        loading: re(t),
        loadingWithoutText: !1,
        onClick: l
      }, {
        default: _e(() => [
          Lt(un(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type", "loading"])) : xt("", !0)
    ], 64));
  }
}, { dialog: dB } = Xc(["dialog"], {
  configProviderProps: { inlineThemeDisabled: !0 }
}), uB = dB;
function sf(e) {
  return typeof e == "string" ? function() {
    return f("p", { innerHTML: e });
  } : Array.isArray(e) ? function() {
    return f(
      "div",
      e.map((t) => f("p", { innerHTML: t }))
    );
  } : e;
}
const vB = () => {
  let e = null, t = null, r = null, o = null;
  const i = Ec(), a = (u = {}, c = { width: 430 }, v) => {
    const g = {
      autoFocus: !1,
      blockScroll: !0,
      bordered: !1,
      closable: !0,
      showIcon: !1,
      draggable: !0,
      title: "提示",
      positiveText: "确定",
      negativeText: "取消",
      ...u,
      transformOrigin: "center",
      class: "p-dialog",
      contentClass: "p-dialog-content",
      actionClass: "p-dialog-action"
    };
    return g.closeOnEsc = !1, g.maskClosable = !1, g.iconPlacement = "left", g.titleClass = g.showIcon ? "p-dialog-title" : "p-dialog-title p-dialog-title-without-icon", g.style = "width: " + c.width + "px", v && (g.type = v), (g.positiveText || g.negativeText) && (g.action = function() {
      return f(lf, {
        positiveText: g.positiveText,
        negativeText: g.negativeText,
        type: v,
        onPositiveClick: g.onPositiveClick,
        onNegativeClick: g.onNegativeClick,
        onClose: function() {
          v === "success" && t ? (t.destroy(), t = null) : v === "warning" && r ? (r.destroy(), r = null) : v === "error" && o ? (o.destroy(), o = null) : e && (e.destroy(), e = null);
        },
        onLoading: (m) => {
          let h = null;
          v === "success" && t ? h = t : v === "warning" && r ? h = r : v === "error" && o ? h = o : e && (h = e), h.closable !== !1 && (h.class = m === !0 ? "p-dialog p-dialog-loading" : "p-dialog");
        }
      });
    }), g.content = sf(u.content), i.create(g);
  }, l = (u = {}, c = {}) => {
    u.negativeText == null && !c.useDefaultConf && (u.negativeText = ""), u.positiveText == null && !c.useDefaultConf && (u.positiveText = "我知道了"), u.closable == null && !c.useDefaultConf && (u.closable = !1), u.showIcon == null && !c.useDefaultConf && (u.showIcon = !0);
    const v = a(u, { width: 430, ...c }, "success");
    return t = v, v;
  }, s = (u = {}, c = {}) => {
    u.negativeText == null && !c.useDefaultConf && (u.negativeText = ""), u.positiveText == null && !c.useDefaultConf && (u.positiveText = "我知道了"), u.closable == null && !c.useDefaultConf && (u.closable = !1), u.showIcon == null && !c.useDefaultConf && (u.showIcon = !0);
    const v = a(u, { width: 430, ...c }, "warning");
    return r = v, v;
  }, d = (u = {}, c = {}) => {
    u.negativeText == null && !c.useDefaultConf && (u.negativeText = ""), u.positiveText == null && !c.useDefaultConf && (u.positiveText = "我知道了"), u.closable == null && !c.useDefaultConf && (u.closable = !1), u.showIcon == null && !c.useDefaultConf && (u.showIcon = !0);
    const v = a(u, { width: 430, ...c }, "error");
    return o = v, v;
  };
  return hi(() => {
    e && e.destroy(), t && t.destroy(), r && r.destroy(), o && o.destroy(), e = null, t = null, r = null, o = null;
  }), {
    open: function(u, c) {
      const v = a(u, c);
      return e = v, v;
    },
    success: l,
    warning: s,
    error: d
  };
};
function gB() {
  let e = null, t = null, r = null, o = null;
  const i = (a = {}, l = { width: 430 }, s) => {
    const d = {
      autoFocus: !1,
      blockScroll: !0,
      bordered: !1,
      closable: !0,
      showIcon: !1,
      draggable: !0,
      title: "提示",
      positiveText: "确定",
      negativeText: "取消",
      ...a,
      transformOrigin: "center",
      class: "p-dialog",
      contentClass: "p-dialog-content",
      actionClass: "p-dialog-action"
    };
    return d.closeOnEsc = !1, d.maskClosable = !1, d.iconPlacement = "left", d.titleClass = d.showIcon ? "p-dialog-title" : "p-dialog-title p-dialog-title-without-icon", d.style = "width: " + l.width + "px", s && (d.type = s), (d.positiveText || d.negativeText) && (d.action = function() {
      return f(lf, {
        positiveText: d.positiveText,
        negativeText: d.negativeText,
        type: s,
        onPositiveClick: d.onPositiveClick,
        onNegativeClick: d.onNegativeClick,
        onClose: function() {
          s === "success" && t ? (t.destroy(), t = null) : s === "warning" && r ? (r.destroy(), r = null) : s === "error" && o ? (o.destroy(), o = null) : e && (e.destroy(), e = null);
        },
        onLoading: (u) => {
          let c = null;
          s === "success" && t ? c = t : s === "warning" && r ? c = r : s === "error" && o ? c = o : e && (c = e), c.closable !== !1 && (c.class = u === !0 ? "p-dialog p-dialog-loading" : "p-dialog");
        }
      });
    }), d.content = sf(a.content), d.onClose = function() {
      a.onClose && a.onClose(), e && e.destroy(), t && t.destroy(), r && r.destroy(), o && o.destroy(), e = null, t = null, r = null, o = null;
    }, uB.create(d);
  };
  return {
    open: function(a, l) {
      const s = i(a, l, "info");
      return e = s, s;
    },
    warning: function(a = {}, l = {}) {
      a.negativeText == null && !l.useDefaultConf && (a.negativeText = ""), a.positiveText == null && !l.useDefaultConf && (a.positiveText = "我知道了"), a.closable == null && !l.useDefaultConf && (a.closable = !1), a.showIcon == null && !l.useDefaultConf && (a.showIcon = !0);
      const s = i(a, { width: 430, ...l }, "warning");
      return r = s, s;
    },
    success: function(a = {}, l = {}) {
      a.negativeText == null && !l.useDefaultConf && (a.negativeText = ""), a.positiveText == null && !l.useDefaultConf && (a.positiveText = "我知道了"), a.closable == null && !l.useDefaultConf && (a.closable = !1), a.showIcon == null && !l.useDefaultConf && (a.showIcon = !0);
      const s = i(a, { width: 430, ...l }, "success");
      return t = s, s;
    },
    error: function(a = {}, l = {}) {
      a.negativeText == null && !l.useDefaultConf && (a.negativeText = ""), a.positiveText == null && !l.useDefaultConf && (a.positiveText = "我知道了"), a.closable == null && !l.useDefaultConf && (a.closable = !1), a.showIcon == null && !l.useDefaultConf && (a.showIcon = !0);
      const s = i(a, { width: 430, ...l }, "error");
      return o = s, s;
    }
  };
}
const pB = () => {
  const e = Lc();
  return { open: (r = {}, o = {}) => {
    const i = {
      title: "",
      closable: !0,
      draggable: !0,
      ...r,
      autoFocus: !1,
      blockScroll: !0,
      preset: "dialog",
      transformOrigin: "center",
      showIcon: !1,
      closeOnEsc: !1,
      maskClosable: !1,
      bordered: !1,
      class: "p-modal",
      contentClass: "p-modal-content"
    }, a = {
      width: "600px",
      maxHeight: "calc(100vh - 128px)",
      contentProps: null,
      footer: null,
      footerProps: null,
      ...o
    };
    !i.title && r.closable == null && (i.closable = !1), i.title && (i.titleClass = "p-modal-title"), !i.title && !i.closable && (i.titleClass = "p-modal-title-hidden", i.draggable = !1), !i.title && i.closable && (i.titleClass = "p-modal-title-closable"), r.contentStyle || (i.title ? i.contentStyle = "padding: 16px" : !i.title && i.closable ? i.contentStyle = "padding: 0 16px 16px" : !i.title && !i.closable && (i.contentStyle = "padding: 16px"));
    let l = [];
    a.width && l.push("width:" + a.width), a.maxHeight && l.push("max-height:" + a.maxHeight), l && (i.style = l.join(";")), i.content = function() {
      return r.content ? f(r.content, a.contentProps) : f("div", null);
    }, a.footer && (i.action = function() {
      return f(a.footer, a.footerProps);
    });
    const s = e.create(i);
    return {
      instance: s,
      lock: function() {
        s.class = "p-modal p-modal-lock";
      },
      unlock: function() {
        s.class = "p-modal";
      }
    };
  } };
}, mB = {
  install: (e, t = {}) => {
    const { prefix: r = "p" } = t;
    e.component(`${r}-practical`, O2), e.component(`${r}-search`, q2), e.component(`${r}-form`, Y2), e.component(`${r}-input`, ui), e.component(`${r}-select`, ci), e.component(`${r}-switch`, Ma), e.component(`${r}-radio`, Z2), e.component(`${r}-radio-group`, eB), e.component(`${r}-checkbox`, J2), e.component(`${r}-checkbox-group`, Q2), e.component(`${r}-button`, ur), e.component(`${r}-data-table`, tB), e.component(`${r}-popconfirm`, rB), e.component(`${r}-pagination`, oB), e.component(`${r}-promised`, lB), e.component(`${r}-icon-wrapper`, B2), e.component(`${r}-icon`, Co), e.component(`${r}-input-group`, Y1), e.component(`${r}-input-group-label`, Q1), e.component(`${r}-popover`, Cr), e.component(`${r}-spin`, nf), e.component(`${r}-collapse`, By), e.component(`${r}-collapse-item`, Fy), e.component(`${r}-dropdown`, Fc), e.component(`${r}-tooltip`, yc), e.component(`${r}-drawer`, sB);
  }
};
export {
  hB as createDiscreteFn,
  Xn as debounce,
  mB as default,
  gB as dialogDiscrete,
  rf as throttle,
  af as useDelayLoading,
  vB as useDialog,
  pB as useModal
};
