import { ref as I, readonly as In, watch as He, computed as $, getCurrentInstance as yo, onMounted as Pt, onBeforeUnmount as kt, onBeforeMount as dr, reactive as Co, inject as pe, onActivated as yd, onDeactivated as Ma, createTextVNode as Ht, Fragment as je, Comment as Ia, defineComponent as ee, provide as Ee, withDirectives as pn, toRef as ie, h as f, Teleport as di, nextTick as pt, renderSlot as Qt, mergeProps as Rt, isVNode as Rf, shallowRef as Cd, watchEffect as it, Transition as _t, TransitionGroup as Ff, vShow as zr, cloneVNode as wd, Text as Pf, markRaw as Fl, onUnmounted as Sd, normalizeClass as jt, createApp as zf, unref as ne, openBlock as ke, createBlock as nt, withCtx as Xe, createVNode as on, onScopeDispose as ui, mergeModels as Xt, useModel as Bn, useTemplateRef as er, withKeys as $f, createSlots as Or, normalizeProps as Af, guardReactiveProps as Df, useAttrs as Rn, normalizeStyle as Wt, useSlots as Bd, createCommentVNode as bt, createElementBlock as lt, createElementVNode as En, toDisplayString as vn, resolveDynamicComponent as Tn, renderList as to, withModifiers as Ef, toValue as Tf } from "vue";
function Of(e) {
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
        const b = h.split(",").map((C) => C.trim());
        function y(C) {
          return b.map((k) => `&${(x == null ? void 0 : x.bPrefix) || t}${p.bem.b}${C !== void 0 ? `${r}${C}` : ""}${o}${k}`).join(", ");
        }
        const S = p.bem.els;
        if (S !== null) {
          if (process.env.NODE_ENV !== "production" && S.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${h}) is invalid, using modifier inside multiple elements is not allowed`);
          return y(S[0]);
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
function Mf(e) {
  let t = 0;
  for (let r = 0; r < e.length; ++r)
    e[r] === "&" && ++t;
  return t;
}
const kd = /\s*,(?![^(]*\))\s*/g, If = /\s+/g;
function Lf(e, t) {
  const r = [];
  return t.split(kd).forEach((o) => {
    let i = Mf(o);
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
function Nf(e, t) {
  const r = [];
  return t.split(kd).forEach((o) => {
    e.forEach((i) => {
      r.push((i && i + " ") + o);
    });
  }), r;
}
function Hf(e) {
  let t = [""];
  return e.forEach((r) => {
    r = r && r.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    r && (r.includes("&") ? t = Lf(t, r) : t = Nf(t, r));
  }), t.join(", ").replace(If, " ");
}
function Pl(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function ci(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function jf(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function Po(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const _f = /[A-Z]/g;
function Rd(e) {
  return e.replace(_f, (t) => "-" + t.toLowerCase());
}
function Wf(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((r) => t + `  ${Rd(r[0])}: ${r[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function Vf(e, t, r) {
  return typeof e == "function" ? e({
    context: t.context,
    props: r
  }) : e;
}
function zl(e, t, r, o) {
  if (!t)
    return "";
  const i = Vf(t, r, o);
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
    s = Rd(s), d != null && l.push(`  ${s}${Wf(d)}`);
  }), e && l.push("}"), l.join(`
`);
}
function aa(e, t, r) {
  e && e.forEach((o) => {
    if (Array.isArray(o))
      aa(o, t, r);
    else if (typeof o == "function") {
      const i = o(t);
      Array.isArray(i) ? aa(i, t, r) : i && r(i);
    } else o && r(o);
  });
}
function Fd(e, t, r, o, i) {
  const a = e.$;
  let l = "";
  if (!a || typeof a == "string")
    Po(a) ? l = a : t.push(a);
  else if (typeof a == "function") {
    const u = a({
      context: o.context,
      props: i
    });
    Po(u) ? l = u : t.push(u);
  } else if (a.before && a.before(o.context), !a.$ || typeof a.$ == "string")
    Po(a.$) ? l = a.$ : t.push(a.$);
  else if (a.$) {
    const u = a.$({
      context: o.context,
      props: i
    });
    Po(u) ? l = u : t.push(u);
  }
  const s = Hf(t), d = zl(s, e.props, o, i);
  l ? r.push(`${l} {`) : d.length && r.push(d), e.children && aa(e.children, {
    context: o.context,
    props: i
  }, (u) => {
    if (typeof u == "string") {
      const c = zl(s, { raw: u }, o, i);
      r.push(c);
    } else
      Fd(u, t, r, o, i);
  }), t.pop(), l && r.push("}"), a && a.after && a.after(o.context);
}
function Kf(e, t, r) {
  const o = [];
  return Fd(e, [], o, t, r), o.join(`

`);
}
function uo(e) {
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
function Uf(e, t, r, o) {
  const { els: i } = t;
  if (r === void 0)
    i.forEach(Pl), t.els = [];
  else {
    const a = ci(r, o);
    a && i.includes(a) && (Pl(a), t.els = i.filter((l) => l !== a));
  }
}
function $l(e, t) {
  e.push(t);
}
function qf(e, t, r, o, i, a, l, s, d) {
  let u;
  if (r === void 0 && (u = t.render(o), r = uo(u)), d) {
    d.adapter(r, u ?? t.render(o));
    return;
  }
  s === void 0 && (s = document.head);
  const c = ci(r, s);
  if (c !== null && !a)
    return c;
  const v = c ?? jf(r);
  if (u === void 0 && (u = t.render(o)), v.textContent = u, c !== null)
    return c;
  if (l) {
    const g = s.querySelector(`meta[name="${l}"]`);
    if (g)
      return s.insertBefore(v, g), $l(t.els, v), v;
  }
  return i ? s.insertBefore(v, s.querySelector("style, link")) : s.appendChild(v), $l(t.els, v), v;
}
function Gf(e) {
  return Kf(this, this.instance, e);
}
function Xf(e = {}) {
  const { id: t, ssr: r, props: o, head: i = !1, force: a = !1, anchorMetaName: l, parent: s } = e;
  return qf(this.instance, this, t, o, i, a, l, s, r);
}
function Yf(e = {}) {
  const { id: t, parent: r } = e;
  Uf(this.instance, this, t, r);
}
const zo = function(e, t, r, o) {
  return {
    instance: e,
    $: t,
    props: r,
    children: o,
    els: [],
    render: Gf,
    mount: Xf,
    unmount: Yf
  };
}, Zf = function(e, t, r, o) {
  return Array.isArray(t) ? zo(e, { $: null }, null, t) : Array.isArray(r) ? zo(e, t, null, r) : Array.isArray(o) ? zo(e, t, r, o) : zo(e, t, r, null);
};
function Pd(e = {}) {
  const t = {
    c: (...r) => Zf(t, ...r),
    use: (r, ...o) => r.install(t, ...o),
    find: ci,
    context: {},
    config: e
  };
  return t;
}
function Jf(e, t) {
  if (e === void 0)
    return !1;
  if (t) {
    const { context: { ids: r } } = t;
    return r.has(e);
  }
  return ci(e) !== null;
}
const Qf = "n", co = `.${Qf}-`, eh = "__", th = "--", zd = Pd(), $d = Of({
  blockPrefix: co,
  elementPrefix: eh,
  modifierPrefix: th
});
zd.use($d);
const {
  c: M,
  find: V2
} = zd, {
  cB: z,
  cE: T,
  cM: N,
  cNotM: Ye
} = $d;
function fi(e) {
  return M(({
    props: {
      bPrefix: t
    }
  }) => `${t || co}modal, ${t || co}drawer`, [e]);
}
function La(e) {
  return M(({
    props: {
      bPrefix: t
    }
  }) => `${t || co}popover`, [e]);
}
function Ad(e) {
  return M(({
    props: {
      bPrefix: t
    }
  }) => `&${t || co}modal`, e);
}
const nh = (...e) => M(">", [z(...e)]);
function Z(e, t) {
  return e + (t === "default" ? "" : t.replace(/^[a-z]/, (r) => r.toUpperCase()));
}
let Xo = [];
const Dd = /* @__PURE__ */ new WeakMap();
function rh() {
  Xo.forEach((e) => e(...Dd.get(e))), Xo = [];
}
function Yo(e, ...t) {
  Dd.set(e, t), !Xo.includes(e) && Xo.push(e) === 1 && requestAnimationFrame(rh);
}
function Gt(e, t) {
  let { target: r } = e;
  for (; r; ) {
    if (r.dataset && r.dataset[t] !== void 0)
      return !0;
    r = r.parentElement;
  }
  return !1;
}
function $r(e) {
  return e.composedPath()[0] || null;
}
function Dt(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function yt(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Nt(e, t) {
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
const Al = {
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
}, Mr = "^\\s*", Ir = "\\s*$", Yn = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Zn = "([0-9A-Fa-f])", Jn = "([0-9A-Fa-f]{2})", oh = new RegExp(`${Mr}rgb\\s*\\(${Yn},${Yn},${Yn}\\)${Ir}`), ih = new RegExp(`${Mr}rgba\\s*\\(${Yn},${Yn},${Yn},${Yn}\\)${Ir}`), ah = new RegExp(`${Mr}#${Zn}${Zn}${Zn}${Ir}`), lh = new RegExp(`${Mr}#${Jn}${Jn}${Jn}${Ir}`), sh = new RegExp(`${Mr}#${Zn}${Zn}${Zn}${Zn}${Ir}`), dh = new RegExp(`${Mr}#${Jn}${Jn}${Jn}${Jn}${Ir}`);
function qt(e) {
  return parseInt(e, 16);
}
function rr(e) {
  try {
    let t;
    if (t = lh.exec(e))
      return [qt(t[1]), qt(t[2]), qt(t[3]), 1];
    if (t = oh.exec(e))
      return [Ot(t[1]), Ot(t[5]), Ot(t[9]), 1];
    if (t = ih.exec(e))
      return [
        Ot(t[1]),
        Ot(t[5]),
        Ot(t[9]),
        no(t[13])
      ];
    if (t = ah.exec(e))
      return [
        qt(t[1] + t[1]),
        qt(t[2] + t[2]),
        qt(t[3] + t[3]),
        1
      ];
    if (t = dh.exec(e))
      return [
        qt(t[1]),
        qt(t[2]),
        qt(t[3]),
        no(qt(t[4]) / 255)
      ];
    if (t = sh.exec(e))
      return [
        qt(t[1] + t[1]),
        qt(t[2] + t[2]),
        qt(t[3] + t[3]),
        no(qt(t[4] + t[4]) / 255)
      ];
    if (e in Al)
      return rr(Al[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function uh(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function la(e, t, r, o) {
  return `rgba(${Ot(e)}, ${Ot(t)}, ${Ot(r)}, ${uh(o)})`;
}
function Li(e, t, r, o, i) {
  return Ot((e * t * (1 - o) + r * o) / i);
}
function Ge(e, t) {
  Array.isArray(e) || (e = rr(e)), Array.isArray(t) || (t = rr(t));
  const r = e[3], o = t[3], i = no(r + o - r * o);
  return la(Li(e[0], r, t[0], o, i), Li(e[1], r, t[1], o, i), Li(e[2], r, t[2], o, i), i);
}
function De(e, t) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : rr(e);
  return t.alpha ? la(r, o, i, t.alpha) : la(r, o, i, a);
}
function $o(e, t) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : rr(e), { lightness: l = 1, alpha: s = 1 } = t;
  return ch([r * l, o * l, i * l, a * s]);
}
function no(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Ot(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function ch(e) {
  const [t, r, o] = e;
  return 3 in e ? `rgba(${Ot(t)}, ${Ot(r)}, ${Ot(o)}, ${no(e[3])})` : `rgba(${Ot(t)}, ${Ot(r)}, ${Ot(o)}, 1)`;
}
function mn(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function fh(e, t) {
  const r = [];
  for (let o = 0; o < e; ++o)
    r.push(t);
  return r;
}
function Uo(e) {
  return e.composedPath()[0];
}
const hh = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function vh(e, t, r) {
  if (e === "mousemoveoutside") {
    const o = (i) => {
      t.contains(Uo(i)) || r(i);
    };
    return {
      mousemove: o,
      touchstart: o
    };
  } else if (e === "clickoutside") {
    let o = !1;
    const i = (l) => {
      o = !t.contains(Uo(l));
    }, a = (l) => {
      o && (t.contains(Uo(l)) || r(l));
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
function Ed(e, t, r) {
  const o = hh[e];
  let i = o.get(t);
  i === void 0 && o.set(t, i = /* @__PURE__ */ new WeakMap());
  let a = i.get(r);
  return a === void 0 && i.set(r, a = vh(e, t, r)), a;
}
function gh(e, t, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Ed(e, t, r);
    return Object.keys(i).forEach((a) => {
      Ke(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function ph(e, t, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Ed(e, t, r);
    return Object.keys(i).forEach((a) => {
      We(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function mh() {
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
  function i(w, B, F) {
    const A = w[B];
    return w[B] = function() {
      return F.apply(w, arguments), A.apply(w, arguments);
    }, w;
  }
  function a(w, B) {
    w[B] = Event.prototype[B];
  }
  const l = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function d() {
    var w;
    return (w = l.get(this)) !== null && w !== void 0 ? w : null;
  }
  function u(w, B) {
    s !== void 0 && Object.defineProperty(w, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: B ?? s.get
    });
  }
  const c = {
    bubble: {},
    capture: {}
  }, v = {};
  function g() {
    const w = function(B) {
      const { type: F, eventPhase: A, bubbles: V } = B, O = Uo(B);
      if (A === 2)
        return;
      const n = A === 1 ? "capture" : "bubble";
      let D = O;
      const E = [];
      for (; D === null && (D = window), E.push(D), D !== window; )
        D = D.parentNode || null;
      const H = c.capture[F], L = c.bubble[F];
      if (i(B, "stopPropagation", r), i(B, "stopImmediatePropagation", o), u(B, d), n === "capture") {
        if (H === void 0)
          return;
        for (let K = E.length - 1; K >= 0 && !e.has(B); --K) {
          const te = E[K], X = H.get(te);
          if (X !== void 0) {
            l.set(B, te);
            for (const U of X) {
              if (t.has(B))
                break;
              U(B);
            }
          }
          if (K === 0 && !V && L !== void 0) {
            const U = L.get(te);
            if (U !== void 0)
              for (const j of U) {
                if (t.has(B))
                  break;
                j(B);
              }
          }
        }
      } else if (n === "bubble") {
        if (L === void 0)
          return;
        for (let K = 0; K < E.length && !e.has(B); ++K) {
          const te = E[K], X = L.get(te);
          if (X !== void 0) {
            l.set(B, te);
            for (const U of X) {
              if (t.has(B))
                break;
              U(B);
            }
          }
        }
      }
      a(B, "stopPropagation"), a(B, "stopImmediatePropagation"), u(B);
    };
    return w.displayName = "evtdUnifiedHandler", w;
  }
  function m() {
    const w = function(B) {
      const { type: F, eventPhase: A } = B;
      if (A !== 2)
        return;
      const V = v[F];
      V !== void 0 && V.forEach((O) => O(B));
    };
    return w.displayName = "evtdUnifiedWindowEventHandler", w;
  }
  const h = g(), p = m();
  function x(w, B) {
    const F = c[w];
    return F[B] === void 0 && (F[B] = /* @__PURE__ */ new Map(), window.addEventListener(B, h, w === "capture")), F[B];
  }
  function b(w) {
    return v[w] === void 0 && (v[w] = /* @__PURE__ */ new Set(), window.addEventListener(w, p)), v[w];
  }
  function y(w, B) {
    let F = w.get(B);
    return F === void 0 && w.set(B, F = /* @__PURE__ */ new Set()), F;
  }
  function S(w, B, F, A) {
    const V = c[B][F];
    if (V !== void 0) {
      const O = V.get(w);
      if (O !== void 0 && O.has(A))
        return !0;
    }
    return !1;
  }
  function C(w, B) {
    const F = v[w];
    return !!(F !== void 0 && F.has(B));
  }
  function k(w, B, F, A) {
    let V;
    if (typeof A == "object" && A.once === !0 ? V = (H) => {
      R(w, B, V, A), F(H);
    } : V = F, gh(w, B, V, A))
      return;
    const n = A === !0 || typeof A == "object" && A.capture === !0 ? "capture" : "bubble", D = x(n, w), E = y(D, B);
    if (E.has(V) || E.add(V), B === window) {
      const H = b(w);
      H.has(V) || H.add(V);
    }
  }
  function R(w, B, F, A) {
    if (ph(w, B, F, A))
      return;
    const O = A === !0 || typeof A == "object" && A.capture === !0, n = O ? "capture" : "bubble", D = x(n, w), E = y(D, B);
    if (B === window && !S(B, O ? "bubble" : "capture", w, F) && C(w, F)) {
      const L = v[w];
      L.delete(F), L.size === 0 && (window.removeEventListener(w, p), v[w] = void 0);
    }
    E.has(F) && E.delete(F), E.size === 0 && D.delete(B), D.size === 0 && (window.removeEventListener(w, h, n === "capture"), c[n][w] = void 0);
  }
  return {
    on: k,
    off: R
  };
}
const { on: Ke, off: We } = mh();
function Td(e) {
  const t = I(!!e.value);
  if (t.value)
    return In(t);
  const r = He(e, (o) => {
    o && (t.value = !0, r());
  });
  return In(t);
}
function Ue(e) {
  const t = $(e), r = I(t.value);
  return He(t, (o) => {
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
function Na() {
  return yo() !== null;
}
const Ha = typeof window < "u";
let Br, ro;
const bh = () => {
  var e, t;
  Br = Ha ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, ro = !1, Br !== void 0 ? Br.then(() => {
    ro = !0;
  }) : ro = !0;
};
bh();
function xh(e) {
  if (ro)
    return;
  let t = !1;
  Pt(() => {
    ro || Br == null || Br.then(() => {
      t || e();
    });
  }), kt(() => {
    t = !0;
  });
}
const Zr = I(null);
function Dl(e) {
  if (e.clientX > 0 || e.clientY > 0)
    Zr.value = {
      x: e.clientX,
      y: e.clientY
    };
  else {
    const { target: t } = e;
    if (t instanceof Element) {
      const { left: r, top: o, width: i, height: a } = t.getBoundingClientRect();
      r > 0 || o > 0 ? Zr.value = {
        x: r + i / 2,
        y: o + a / 2
      } : Zr.value = { x: 0, y: 0 };
    } else
      Zr.value = null;
  }
}
let Ao = 0, El = !0;
function ja() {
  if (!Ha)
    return In(I(null));
  Ao === 0 && Ke("click", document, Dl, !0);
  const e = () => {
    Ao += 1;
  };
  return El && (El = Na()) ? (dr(e), kt(() => {
    Ao -= 1, Ao === 0 && We("click", document, Dl, !0);
  })) : e(), In(Zr);
}
const yh = I(void 0);
let Do = 0;
function Tl() {
  yh.value = Date.now();
}
let Ol = !0;
function _a(e) {
  if (!Ha)
    return In(I(!1));
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
  Do === 0 && Ke("click", window, Tl, !0);
  const a = () => {
    Do += 1, Ke("click", window, i, !0);
  };
  return Ol && (Ol = Na()) ? (dr(a), kt(() => {
    Do -= 1, Do === 0 && We("click", window, Tl, !0), We("click", window, i, !0), o();
  })) : a(), In(t);
}
function Mt(e, t) {
  return He(e, (r) => {
    r !== void 0 && (t.value = r);
  }), $(() => e.value === void 0 ? t.value : e.value);
}
function Lr() {
  const e = I(!1);
  return Pt(() => {
    e.value = !0;
  }), In(e);
}
function Wa(e, t) {
  return $(() => {
    for (const r of t)
      if (e[r] !== void 0)
        return e[r];
    return e[t[t.length - 1]];
  });
}
const Ch = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function wh() {
  return Ch;
}
function Sh(e = {}, t) {
  const r = Co({
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
    (t === void 0 || t.value) && (Ke("keydown", document, a), Ke("keyup", document, l)), t !== void 0 && He(t, (d) => {
      d ? (Ke("keydown", document, a), Ke("keyup", document, l)) : (We("keydown", document, a), We("keyup", document, l));
    });
  };
  return Na() ? (dr(s), kt(() => {
    (t === void 0 || t.value) && (We("keydown", document, a), We("keyup", document, l));
  })) : s(), In(r);
}
const Va = "n-internal-select-menu", Od = "n-internal-select-menu-body", hi = "n-drawer-body", vi = "n-modal-body", Bh = "n-modal-provider", Md = "n-modal", wo = "n-popover-body", Id = "__disabled__";
function bn(e) {
  const t = pe(vi, null), r = pe(hi, null), o = pe(wo, null), i = pe(Od, null), a = I();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const l = () => {
      a.value = document.fullscreenElement;
    };
    Pt(() => {
      Ke("fullscreenchange", document, l);
    }), kt(() => {
      We("fullscreenchange", document, l);
    });
  }
  return Ue(() => {
    var l;
    const {
      to: s
    } = e;
    return s !== void 0 ? s === !1 ? Id : s === !0 ? a.value || "body" : s : t != null && t.value ? (l = t.value.$el) !== null && l !== void 0 ? l : t.value : r != null && r.value ? r.value : o != null && o.value ? o.value : i != null && i.value ? i.value : s ?? (a.value || "body");
  });
}
bn.tdkey = Id;
bn.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function kh(e, t, r) {
  var o;
  const i = pe(e, null);
  if (i === null) return;
  const a = (o = yo()) === null || o === void 0 ? void 0 : o.proxy;
  He(r, l), l(r.value), kt(() => {
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
function Rh(e, t, r) {
  const o = I(e.value);
  let i = null;
  return He(e, (a) => {
    i !== null && window.clearTimeout(i), a === !0 ? r && !r.value ? o.value = !0 : i = window.setTimeout(() => {
      o.value = !0;
    }, t) : o.value = !1;
  }), o;
}
const Nr = typeof document < "u" && typeof window < "u", Ka = I(!1);
function Ml() {
  Ka.value = !0;
}
function Il() {
  Ka.value = !1;
}
let qr = 0;
function Fh() {
  return Nr && (dr(() => {
    qr || (window.addEventListener("compositionstart", Ml), window.addEventListener("compositionend", Il)), qr++;
  }), kt(() => {
    qr <= 1 ? (window.removeEventListener("compositionstart", Ml), window.removeEventListener("compositionend", Il), qr = 0) : qr--;
  })), Ka;
}
let xr = 0, Ll = "", Nl = "", Hl = "", jl = "";
const _l = I("0px");
function Ph(e) {
  if (typeof document > "u") return;
  const t = document.documentElement;
  let r, o = !1;
  const i = () => {
    t.style.marginRight = Ll, t.style.overflow = Nl, t.style.overflowX = Hl, t.style.overflowY = jl, _l.value = "0px";
  };
  Pt(() => {
    r = He(e, (a) => {
      if (a) {
        if (!xr) {
          const l = window.innerWidth - t.offsetWidth;
          l > 0 && (Ll = t.style.marginRight, t.style.marginRight = `${l}px`, _l.value = `${l}px`), Nl = t.style.overflow, Hl = t.style.overflowX, jl = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden";
        }
        o = !0, xr++;
      } else
        xr--, xr || i(), o = !1;
    }, {
      immediate: !0
    });
  }), kt(() => {
    r == null || r(), o && (xr--, xr || i(), o = !1);
  });
}
function zh(e) {
  const t = {
    isDeactivated: !1
  };
  let r = !1;
  return yd(() => {
    if (t.isDeactivated = !1, !r) {
      r = !0;
      return;
    }
    e();
  }), Ma(() => {
    t.isDeactivated = !0, r || (r = !0);
  }), t;
}
function sa(e, t, r = "default") {
  const o = t[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  return o();
}
function da(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(Ht(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        da(o, t, r);
        return;
      }
      if (o.type === je) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && da(o.children, t, r);
      } else o.type !== Ia && r.push(o);
    }
  }), r;
}
function Wl(e, t, r = "default") {
  const o = t[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  const i = da(o());
  if (i.length === 1)
    return i[0];
  throw new Error(`[vueuc/${e}]: slot[${r}] should have exactly one child.`);
}
let An = null;
function Ld() {
  if (An === null && (An = document.getElementById("v-binder-view-measurer"), An === null)) {
    An = document.createElement("div"), An.id = "v-binder-view-measurer";
    const { style: e } = An;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(An);
  }
  return An.getBoundingClientRect();
}
function $h(e, t) {
  const r = Ld();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: r.width - e,
    bottom: r.height - t
  };
}
function Ni(e) {
  const t = e.getBoundingClientRect(), r = Ld();
  return {
    left: t.left - r.left,
    top: t.top - r.top,
    bottom: r.height + r.top - t.bottom,
    right: r.width + r.left - t.right,
    width: t.width,
    height: t.height
  };
}
function Ah(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Nd(e) {
  if (e === null)
    return null;
  const t = Ah(e);
  if (t === null)
    return null;
  if (t.nodeType === 9)
    return document;
  if (t.nodeType === 1) {
    const { overflow: r, overflowX: o, overflowY: i } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(r + i + o))
      return t;
  }
  return Nd(t);
}
const Ua = ee({
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
    Ee("VBinder", (t = yo()) === null || t === void 0 ? void 0 : t.proxy);
    const r = pe("VBinder", null), o = I(null), i = (b) => {
      o.value = b, r && e.syncTargetWithParent && r.setTargetRef(b);
    };
    let a = [];
    const l = () => {
      let b = o.value;
      for (; b = Nd(b), b !== null; )
        a.push(b);
      for (const y of a)
        Ke("scroll", y, v, !0);
    }, s = () => {
      for (const b of a)
        We("scroll", b, v, !0);
      a = [];
    }, d = /* @__PURE__ */ new Set(), u = (b) => {
      d.size === 0 && l(), d.has(b) || d.add(b);
    }, c = (b) => {
      d.has(b) && d.delete(b), d.size === 0 && s();
    }, v = () => {
      Yo(g);
    }, g = () => {
      d.forEach((b) => b());
    }, m = /* @__PURE__ */ new Set(), h = (b) => {
      m.size === 0 && Ke("resize", window, x), m.has(b) || m.add(b);
    }, p = (b) => {
      m.has(b) && m.delete(b), m.size === 0 && We("resize", window, x);
    }, x = () => {
      m.forEach((b) => b());
    };
    return kt(() => {
      We("resize", window, x), s();
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
    return sa("binder", this.$slots);
  }
}), qa = ee({
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
    return e ? pn(Wl("follower", this.$slots), [
      [t]
    ]) : Wl("follower", this.$slots);
  }
}), yr = "@@mmoContext", Dh = {
  mounted(e, { value: t }) {
    e[yr] = {
      handler: void 0
    }, typeof t == "function" && (e[yr].handler = t, Ke("mousemoveoutside", e, t));
  },
  updated(e, { value: t }) {
    const r = e[yr];
    typeof t == "function" ? r.handler ? r.handler !== t && (We("mousemoveoutside", e, r.handler), r.handler = t, Ke("mousemoveoutside", e, t)) : (e[yr].handler = t, Ke("mousemoveoutside", e, t)) : r.handler && (We("mousemoveoutside", e, r.handler), r.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[yr];
    t && We("mousemoveoutside", e, t), e[yr].handler = void 0;
  }
}, Cr = "@@coContext", fo = {
  mounted(e, { value: t, modifiers: r }) {
    e[Cr] = {
      handler: void 0
    }, typeof t == "function" && (e[Cr].handler = t, Ke("clickoutside", e, t, {
      capture: r.capture
    }));
  },
  updated(e, { value: t, modifiers: r }) {
    const o = e[Cr];
    typeof t == "function" ? o.handler ? o.handler !== t && (We("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = t, Ke("clickoutside", e, t, {
      capture: r.capture
    })) : (e[Cr].handler = t, Ke("clickoutside", e, t, {
      capture: r.capture
    })) : o.handler && (We("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = void 0);
  },
  unmounted(e, { modifiers: t }) {
    const { handler: r } = e[Cr];
    r && We("clickoutside", e, r, {
      capture: t.capture
    }), e[Cr].handler = void 0;
  }
};
function Eh(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class Th {
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
    o.has(t) ? o.delete(t) : r === void 0 && Eh("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const Hi = new Th(), wr = "@@ziContext", Ga = {
  mounted(e, t) {
    const { value: r = {} } = t, { zIndex: o, enabled: i } = r;
    e[wr] = {
      enabled: !!i,
      initialized: !1
    }, i && (Hi.ensureZIndex(e, o), e[wr].initialized = !0);
  },
  updated(e, t) {
    const { value: r = {} } = t, { zIndex: o, enabled: i } = r, a = e[wr].enabled;
    i && !a && (Hi.ensureZIndex(e, o), e[wr].initialized = !0), e[wr].enabled = !!i;
  },
  unmounted(e, t) {
    if (!e[wr].initialized)
      return;
    const { value: r = {} } = t, { zIndex: o } = r;
    Hi.unregister(e, o);
  }
}, Oh = "@css-render/vue3-ssr";
function Mh(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function Ih(e, t, r) {
  const { styles: o, ids: i } = r;
  i.has(e) || o !== null && (i.add(e), o.push(Mh(e, t)));
}
const Lh = typeof document < "u";
function ur() {
  if (Lh)
    return;
  const e = pe(Oh, null);
  if (e !== null)
    return {
      adapter: (t, r) => Ih(t, r, e),
      context: e
    };
}
function Vl(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
const { c: Mn } = Pd(), Xa = "vueuc-style";
function Kl(e) {
  return e & -e;
}
class Hd {
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
      i[t] += r, t += Kl(t);
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
      a += r[t], t -= Kl(t);
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
function Ul(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const jd = ee({
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
      showTeleport: Td(ie(e, "show")),
      mergedTo: $(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? sa("lazy-teleport", this.$slots) : f(di, {
      disabled: this.disabled,
      to: this.mergedTo
    }, sa("lazy-teleport", this.$slots)) : null;
  }
}), Eo = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, ql = {
  start: "end",
  center: "center",
  end: "start"
}, ji = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, Nh = {
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
}, Hh = {
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
}, jh = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, Gl = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, Xl = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function _h(e, t, r, o, i, a) {
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
    return y > 0 && o && (p ? b = Gl[h] ? y : -y : x = Gl[h] ? y : -y), {
      left: x,
      top: b
    };
  }, v = l === "left" || l === "right";
  if (d !== "center") {
    const m = jh[e], h = Eo[m], p = ji[m];
    if (r[p] > t[p]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[m] + t[p] < r[p]
      ) {
        const x = (r[p] - t[p]) / 2;
        t[m] < x || t[h] < x ? t[m] < t[h] ? (d = ql[s], u = c(p, h, v)) : u = c(p, m, v) : d = "center";
      }
    } else r[p] < t[p] && t[h] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[m] > t[h] && (d = ql[s]);
  } else {
    const m = l === "bottom" || l === "top" ? "left" : "top", h = Eo[m], p = ji[m], x = (r[p] - t[p]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[m] < x || t[h] < x) && (t[m] > t[h] ? (d = Xl[m], u = c(p, m, v)) : (d = Xl[h], u = c(p, h, v)));
  }
  let g = l;
  return (
    // space is not enough
    t[l] < r[ji[l]] && // opposite position's space is larger
    t[l] < t[Eo[l]] && (g = Eo[l]), {
      placement: d !== "center" ? `${g}-${d}` : g,
      left: u.left,
      top: u.top
    }
  );
}
function Wh(e, t) {
  return t ? Hh[e] : Nh[e];
}
function Vh(e, t, r, o, i, a) {
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
const Kh = Mn([
  Mn(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  Mn(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    Mn("> *", {
      pointerEvents: "all"
    })
  ])
]), Ya = ee({
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
    const t = pe("VBinder"), r = Ue(() => e.enabled !== void 0 ? e.enabled : e.show), o = I(null), i = I(null), a = () => {
      const { syncTrigger: g } = e;
      g.includes("scroll") && t.addScrollListener(d), g.includes("resize") && t.addResizeListener(d);
    }, l = () => {
      t.removeScrollListener(d), t.removeResizeListener(d);
    };
    Pt(() => {
      r.value && (d(), a());
    });
    const s = ur();
    Kh.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: Xa,
      ssr: s
    }), kt(() => {
      l();
    }), xh(() => {
      r.value && d();
    });
    const d = () => {
      if (!r.value)
        return;
      const g = o.value;
      if (g === null)
        return;
      const m = t.targetRef, { x: h, y: p, overlap: x } = e, b = h !== void 0 && p !== void 0 ? $h(h, p) : Ni(m);
      g.style.setProperty("--v-target-width", `${Math.round(b.width)}px`), g.style.setProperty("--v-target-height", `${Math.round(b.height)}px`);
      const { width: y, minWidth: S, placement: C, internalShift: k, flip: R } = e;
      g.setAttribute("v-placement", C), x ? g.setAttribute("v-overlap", "") : g.removeAttribute("v-overlap");
      const { style: w } = g;
      y === "target" ? w.width = `${b.width}px` : y !== void 0 ? w.width = y : w.width = "", S === "target" ? w.minWidth = `${b.width}px` : S !== void 0 ? w.minWidth = S : w.minWidth = "";
      const B = Ni(g), F = Ni(i.value), { left: A, top: V, placement: O } = _h(C, b, B, k, R, x), n = Wh(O, x), { left: D, top: E, transform: H } = Vh(O, F, b, V, A, x);
      g.setAttribute("v-placement", O), g.style.setProperty("--v-offset-left", `${Math.round(A)}px`), g.style.setProperty("--v-offset-top", `${Math.round(V)}px`), g.style.transform = `translateX(${D}) translateY(${E}) ${H}`, g.style.setProperty("--v-transform-origin", n), g.style.transformOrigin = n;
    };
    He(r, (g) => {
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
      He(ie(e, g), d);
    }), ["teleportDisabled"].forEach((g) => {
      He(ie(e, g), u);
    }), He(ie(e, "syncTrigger"), (g) => {
      g.includes("resize") ? t.addResizeListener(d) : t.removeResizeListener(d), g.includes("scroll") ? t.addScrollListener(d) : t.removeScrollListener(d);
    });
    const c = Lr(), v = Ue(() => {
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
    return f(jd, {
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
        return this.zindexable ? pn(r, [
          [
            Ga,
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
var tr = [], Uh = function() {
  return tr.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, qh = function() {
  return tr.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Yl = "ResizeObserver loop completed with undelivered notifications.", Gh = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Yl
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Yl), window.dispatchEvent(e);
}, ho;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(ho || (ho = {}));
var nr = function(e) {
  return Object.freeze(e);
}, Xh = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, nr(this);
  }
  return e;
}(), _d = function() {
  function e(t, r, o, i) {
    return this.x = t, this.y = r, this.width = o, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, nr(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, o = t.y, i = t.top, a = t.right, l = t.bottom, s = t.left, d = t.width, u = t.height;
    return { x: r, y: o, top: i, right: a, bottom: l, left: s, width: d, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Za = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Wd = function(e) {
  if (Za(e)) {
    var t = e.getBBox(), r = t.width, o = t.height;
    return !r && !o;
  }
  var i = e, a = i.offsetWidth, l = i.offsetHeight;
  return !(a || l || e.getClientRects().length);
}, Zl = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, Yh = function(e) {
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
}, oo = typeof window < "u" ? window : {}, To = /* @__PURE__ */ new WeakMap(), Jl = /auto|scroll/, Zh = /^tb|vertical/, Jh = /msie|trident/i.test(oo.navigator && oo.navigator.userAgent), un = function(e) {
  return parseFloat(e || "0");
}, kr = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new Xh((r ? t : e) || 0, (r ? e : t) || 0);
}, Ql = nr({
  devicePixelContentBoxSize: kr(),
  borderBoxSize: kr(),
  contentBoxSize: kr(),
  contentRect: new _d(0, 0, 0, 0)
}), Vd = function(e, t) {
  if (t === void 0 && (t = !1), To.has(e) && !t)
    return To.get(e);
  if (Wd(e))
    return To.set(e, Ql), Ql;
  var r = getComputedStyle(e), o = Za(e) && e.ownerSVGElement && e.getBBox(), i = !Jh && r.boxSizing === "border-box", a = Zh.test(r.writingMode || ""), l = !o && Jl.test(r.overflowY || ""), s = !o && Jl.test(r.overflowX || ""), d = o ? 0 : un(r.paddingTop), u = o ? 0 : un(r.paddingRight), c = o ? 0 : un(r.paddingBottom), v = o ? 0 : un(r.paddingLeft), g = o ? 0 : un(r.borderTopWidth), m = o ? 0 : un(r.borderRightWidth), h = o ? 0 : un(r.borderBottomWidth), p = o ? 0 : un(r.borderLeftWidth), x = v + u, b = d + c, y = p + m, S = g + h, C = s ? e.offsetHeight - S - e.clientHeight : 0, k = l ? e.offsetWidth - y - e.clientWidth : 0, R = i ? x + y : 0, w = i ? b + S : 0, B = o ? o.width : un(r.width) - R - k, F = o ? o.height : un(r.height) - w - C, A = B + x + k + y, V = F + b + C + S, O = nr({
    devicePixelContentBoxSize: kr(Math.round(B * devicePixelRatio), Math.round(F * devicePixelRatio), a),
    borderBoxSize: kr(A, V, a),
    contentBoxSize: kr(B, F, a),
    contentRect: new _d(v, d, B, F)
  });
  return To.set(e, O), O;
}, Kd = function(e, t, r) {
  var o = Vd(e, r), i = o.borderBoxSize, a = o.contentBoxSize, l = o.devicePixelContentBoxSize;
  switch (t) {
    case ho.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case ho.BORDER_BOX:
      return i;
    default:
      return a;
  }
}, Qh = /* @__PURE__ */ function() {
  function e(t) {
    var r = Vd(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = nr([r.borderBoxSize]), this.contentBoxSize = nr([r.contentBoxSize]), this.devicePixelContentBoxSize = nr([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Ud = function(e) {
  if (Wd(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, e0 = function() {
  var e = 1 / 0, t = [];
  tr.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(u) {
        var c = new Qh(u.target), v = Ud(u.target);
        s.push(c), u.lastReportedSize = Kd(u.target, u.observedBox), v < e && (e = v);
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
}, es = function(e) {
  tr.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(i) {
      i.isActive() && (Ud(i.target) > e ? r.activeTargets.push(i) : r.skippedTargets.push(i));
    });
  });
}, t0 = function() {
  var e = 0;
  for (es(e); Uh(); )
    e = e0(), es(e);
  return qh() && Gh(), e > 0;
}, _i, qd = [], n0 = function() {
  return qd.splice(0).forEach(function(e) {
    return e();
  });
}, r0 = function(e) {
  if (!_i) {
    var t = 0, r = document.createTextNode(""), o = { characterData: !0 };
    new MutationObserver(function() {
      return n0();
    }).observe(r, o), _i = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  qd.push(e), _i();
}, o0 = function(e) {
  r0(function() {
    requestAnimationFrame(e);
  });
}, qo = 0, i0 = function() {
  return !!qo;
}, a0 = 250, l0 = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, ts = [
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
], ns = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Wi = !1, s0 = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = a0), !Wi) {
      Wi = !0;
      var o = ns(t);
      o0(function() {
        var i = !1;
        try {
          i = t0();
        } finally {
          if (Wi = !1, t = o - ns(), !i0())
            return;
          i ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, l0);
    };
    document.body ? r() : oo.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), ts.forEach(function(r) {
      return oo.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), ts.forEach(function(r) {
      return oo.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), ua = new s0(), rs = function(e) {
  !qo && e > 0 && ua.start(), qo += e, !qo && ua.stop();
}, d0 = function(e) {
  return !Za(e) && !Yh(e) && getComputedStyle(e).display === "inline";
}, u0 = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || ho.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Kd(this.target, this.observedBox, !0);
    return d0(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), c0 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), Oo = /* @__PURE__ */ new WeakMap(), os = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, Mo = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var o = new c0(t, r);
    Oo.set(t, o);
  }, e.observe = function(t, r, o) {
    var i = Oo.get(t), a = i.observationTargets.length === 0;
    os(i.observationTargets, r) < 0 && (a && tr.push(i), i.observationTargets.push(new u0(r, o && o.box)), rs(1), ua.schedule());
  }, e.unobserve = function(t, r) {
    var o = Oo.get(t), i = os(o.observationTargets, r), a = o.observationTargets.length === 1;
    i >= 0 && (a && tr.splice(tr.indexOf(o), 1), o.observationTargets.splice(i, 1), rs(-1));
  }, e.disconnect = function(t) {
    var r = this, o = Oo.get(t);
    o.observationTargets.slice().forEach(function(i) {
      return r.unobserve(t, i.target);
    }), o.activeTargets.splice(0, o.activeTargets.length);
  }, e;
}(), f0 = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Mo.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Zl(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Mo.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Zl(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Mo.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Mo.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class h0 {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || f0)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const io = new h0(), Ar = ee({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let t = !1;
    const r = yo().proxy;
    function o(i) {
      const { onResize: a } = e;
      a !== void 0 && a(i);
    }
    Pt(() => {
      const i = r.$el;
      if (i === void 0) {
        Vl("resize-observer", "$el does not exist.");
        return;
      }
      if (i.nextElementSibling !== i.nextSibling && i.nodeType === 3 && i.nodeValue !== "") {
        Vl("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      i.nextElementSibling !== null && (io.registerHandler(i.nextElementSibling, o), t = !0);
    }), kt(() => {
      t && io.unregisterHandler(r.$el.nextElementSibling);
    });
  },
  render() {
    return Qt(this.$slots, "default");
  }
});
let Io;
function v0() {
  return typeof document > "u" ? !1 : (Io === void 0 && ("matchMedia" in window ? Io = window.matchMedia("(pointer:coarse)").matches : Io = !1), Io);
}
let Vi;
function is() {
  return typeof document > "u" ? 1 : (Vi === void 0 && (Vi = "chrome" in window ? window.devicePixelRatio : 1), Vi);
}
const Gd = "VVirtualListXScroll";
function g0({ columnsRef: e, renderColRef: t, renderItemWithColsRef: r }) {
  const o = I(0), i = I(0), a = $(() => {
    const u = e.value;
    if (u.length === 0)
      return null;
    const c = new Hd(u.length, 0);
    return u.forEach((v, g) => {
      c.add(g, v.width);
    }), c;
  }), l = Ue(() => {
    const u = a.value;
    return u !== null ? Math.max(u.getBound(i.value) - 1, 0) : 0;
  }), s = (u) => {
    const c = a.value;
    return c !== null ? c.sum(u) : 0;
  }, d = Ue(() => {
    const u = a.value;
    return u !== null ? Math.min(u.getBound(i.value + o.value) + 1, e.value.length - 1) : 0;
  });
  return Ee(Gd, {
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
const as = ee({
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
      pe(Gd)
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
}), p0 = Mn(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  Mn("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    Mn("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), Ja = ee({
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
    const t = ur();
    p0.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: Xa,
      ssr: t
    }), Pt(() => {
      const { defaultScrollIndex: n, defaultScrollKey: D } = e;
      n != null ? x({ index: n }) : D != null && x({ key: D });
    });
    let r = !1, o = !1;
    yd(() => {
      if (r = !1, !o) {
        o = !0;
        return;
      }
      x({ top: m.value, left: l.value });
    }), Ma(() => {
      r = !0, o || (o = !0);
    });
    const i = Ue(() => {
      if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0)
        return;
      let n = 0;
      return e.columns.forEach((D) => {
        n += D.width;
      }), n;
    }), a = $(() => {
      const n = /* @__PURE__ */ new Map(), { keyField: D } = e;
      return e.items.forEach((E, H) => {
        n.set(E[D], H);
      }), n;
    }), { scrollLeftRef: l, listWidthRef: s } = g0({
      columnsRef: ie(e, "columns"),
      renderColRef: ie(e, "renderCol"),
      renderItemWithColsRef: ie(e, "renderItemWithCols")
    }), d = I(null), u = I(void 0), c = /* @__PURE__ */ new Map(), v = $(() => {
      const { items: n, itemSize: D, keyField: E } = e, H = new Hd(n.length, D);
      return n.forEach((L, K) => {
        const te = L[E], X = c.get(te);
        X !== void 0 && H.add(K, X);
      }), H;
    }), g = I(0), m = I(0), h = Ue(() => Math.max(v.value.getBound(m.value - Dt(e.paddingTop)) - 1, 0)), p = $(() => {
      const { value: n } = u;
      if (n === void 0)
        return [];
      const { items: D, itemSize: E } = e, H = h.value, L = Math.min(H + Math.ceil(n / E + 1), D.length - 1), K = [];
      for (let te = H; te <= L; ++te)
        K.push(D[te]);
      return K;
    }), x = (n, D) => {
      if (typeof n == "number") {
        C(n, D, "auto");
        return;
      }
      const { left: E, top: H, index: L, key: K, position: te, behavior: X, debounce: U = !0 } = n;
      if (E !== void 0 || H !== void 0)
        C(E, H, X);
      else if (L !== void 0)
        S(L, X, U);
      else if (K !== void 0) {
        const j = a.value.get(K);
        j !== void 0 && S(j, X, U);
      } else te === "bottom" ? C(0, Number.MAX_SAFE_INTEGER, X) : te === "top" && C(0, 0, X);
    };
    let b, y = null;
    function S(n, D, E) {
      const { value: H } = v, L = H.sum(n) + Dt(e.paddingTop);
      if (!E)
        d.value.scrollTo({
          left: 0,
          top: L,
          behavior: D
        });
      else {
        b = n, y !== null && window.clearTimeout(y), y = window.setTimeout(() => {
          b = void 0, y = null;
        }, 16);
        const { scrollTop: K, offsetHeight: te } = d.value;
        if (L > K) {
          const X = H.get(n);
          L + X <= K + te || d.value.scrollTo({
            left: 0,
            top: L + X - te,
            behavior: D
          });
        } else
          d.value.scrollTo({
            left: 0,
            top: L,
            behavior: D
          });
      }
    }
    function C(n, D, E) {
      d.value.scrollTo({
        left: n,
        top: D,
        behavior: E
      });
    }
    function k(n, D) {
      var E, H, L;
      if (r || e.ignoreItemResize || O(D.target))
        return;
      const { value: K } = v, te = a.value.get(n), X = K.get(te), U = (L = (H = (E = D.borderBoxSize) === null || E === void 0 ? void 0 : E[0]) === null || H === void 0 ? void 0 : H.blockSize) !== null && L !== void 0 ? L : D.contentRect.height;
      if (U === X)
        return;
      U - e.itemSize === 0 ? c.delete(n) : c.set(n, U - e.itemSize);
      const q = U - X;
      if (q === 0)
        return;
      K.add(te, q);
      const Y = d.value;
      if (Y != null) {
        if (b === void 0) {
          const ae = K.sum(te);
          Y.scrollTop > ae && Y.scrollBy(0, q);
        } else if (te < b)
          Y.scrollBy(0, q);
        else if (te === b) {
          const ae = K.sum(te);
          U + ae > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          Y.scrollTop + Y.offsetHeight && Y.scrollBy(0, q);
        }
        V();
      }
      g.value++;
    }
    const R = !v0();
    let w = !1;
    function B(n) {
      var D;
      (D = e.onScroll) === null || D === void 0 || D.call(e, n), (!R || !w) && V();
    }
    function F(n) {
      var D;
      if ((D = e.onWheel) === null || D === void 0 || D.call(e, n), R) {
        const E = d.value;
        if (E != null) {
          if (n.deltaX === 0 && (E.scrollTop === 0 && n.deltaY <= 0 || E.scrollTop + E.offsetHeight >= E.scrollHeight && n.deltaY >= 0))
            return;
          n.preventDefault(), E.scrollTop += n.deltaY / is(), E.scrollLeft += n.deltaX / is(), V(), w = !0, Yo(() => {
            w = !1;
          });
        }
      }
    }
    function A(n) {
      if (r || O(n.target))
        return;
      if (e.renderCol == null && e.renderItemWithCols == null) {
        if (n.contentRect.height === u.value)
          return;
      } else if (n.contentRect.height === u.value && n.contentRect.width === s.value)
        return;
      u.value = n.contentRect.height, s.value = n.contentRect.width;
      const { onResize: D } = e;
      D !== void 0 && D(n);
    }
    function V() {
      const { value: n } = d;
      n != null && (m.value = n.scrollTop, l.value = n.scrollLeft);
    }
    function O(n) {
      let D = n;
      for (; D !== null; ) {
        if (D.style.display === "none")
          return !0;
        D = D.parentElement;
      }
      return !1;
    }
    return {
      listHeight: u,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: a,
      itemsStyle: $(() => {
        const { itemResizable: n } = e, D = yt(v.value.sum());
        return g.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: yt(i.value),
            height: n ? "" : D,
            minHeight: n ? D : "",
            paddingTop: yt(e.paddingTop),
            paddingBottom: yt(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: $(() => (g.value, {
        transform: `translateY(${yt(v.value.sum(h.value))})`
      })),
      viewportItems: p,
      listElRef: d,
      itemsElRef: I(null),
      scrollTo: x,
      handleListResize: A,
      handleListScroll: B,
      handleListWheel: F,
      handleItemResize: k
    };
  },
  render() {
    const { itemResizable: e, keyField: t, keyToIndex: r, visibleItemsTag: o } = this;
    return f(Ar, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var i, a;
        return f("div", Rt(this.$attrs, {
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
                  const u = d[t], c = r.get(u), v = l != null ? f(as, {
                    index: c,
                    item: d
                  }) : void 0, g = s != null ? f(as, {
                    index: c,
                    item: d
                  }) : void 0, m = this.$slots.default({
                    item: d,
                    renderedCols: v,
                    renderedItemWithCols: g,
                    index: c
                  })[0];
                  return e ? f(Ar, {
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
}), wn = "v-hidden", m0 = Mn("[v-hidden]", {
  display: "none!important"
}), ls = ee({
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
      c.hasAttribute(wn) && c.removeAttribute(wn);
      const { children: v } = s;
      if (l.showAllItemsBeforeCalculate)
        for (const S of v)
          S.hasAttribute(wn) && S.removeAttribute(wn);
      const g = s.offsetWidth, m = [], h = t.tail ? u == null ? void 0 : u() : null;
      let p = h ? h.offsetWidth : 0, x = !1;
      const b = s.children.length - (t.tail ? 1 : 0);
      for (let S = 0; S < b - 1; ++S) {
        if (S < 0)
          continue;
        const C = v[S];
        if (x) {
          C.hasAttribute(wn) || C.setAttribute(wn, "");
          continue;
        } else C.hasAttribute(wn) && C.removeAttribute(wn);
        const k = C.offsetWidth;
        if (p += k, m[S] = k, p > g) {
          const { updateCounter: R } = e;
          for (let w = S; w >= 0; --w) {
            const B = b - 1 - w;
            R !== void 0 ? R(B) : c.textContent = `${B}`;
            const F = c.offsetWidth;
            if (p -= m[w], p + F <= g || w === 0) {
              x = !0, S = w - 1, h && (S === -1 ? (h.style.maxWidth = `${g - F}px`, h.style.boxSizing = "border-box") : h.style.maxWidth = "");
              const { onUpdateCount: A } = e;
              A && A(B);
              break;
            }
          }
        }
      }
      const { onUpdateOverflow: y } = e;
      x ? y !== void 0 && y(!0) : (y !== void 0 && y(!1), c.setAttribute(wn, ""));
    }
    const a = ur();
    return m0.mount({
      id: "vueuc/overflow",
      head: !0,
      anchorMetaName: Xa,
      ssr: a
    }), Pt(() => i({
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
      Qt(e, "default"),
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
function Xd(e) {
  return e instanceof HTMLElement;
}
function Yd(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const r = e.childNodes[t];
    if (Xd(r) && (Jd(r) || Yd(r)))
      return !0;
  }
  return !1;
}
function Zd(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const r = e.childNodes[t];
    if (Xd(r) && (Jd(r) || Zd(r)))
      return !0;
  }
  return !1;
}
function Jd(e) {
  if (!b0(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function b0(e) {
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
let Gr = [];
const Qd = ee({
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
    const t = mn(), r = I(null), o = I(null);
    let i = !1, a = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function s() {
      return Gr[Gr.length - 1] === t;
    }
    function d(x) {
      var b;
      x.code === "Escape" && s() && ((b = e.onEsc) === null || b === void 0 || b.call(e, x));
    }
    Pt(() => {
      He(() => e.active, (x) => {
        x ? (v(), Ke("keydown", document, d)) : (We("keydown", document, d), i && g());
      }, {
        immediate: !0
      });
    }), kt(() => {
      We("keydown", document, d), i && g();
    });
    function u(x) {
      if (!a && s()) {
        const b = c();
        if (b === null || b.contains($r(x)))
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
        if (Gr.push(t), e.autoFocus) {
          const { initialFocusTo: b } = e;
          b === void 0 ? m("first") : (x = Ul(b)) === null || x === void 0 || x.focus({ preventScroll: !0 });
        }
        i = !0, document.addEventListener("focus", u, !0);
      }
    }
    function g() {
      var x;
      if (e.disabled || (document.removeEventListener("focus", u, !0), Gr = Gr.filter((y) => y !== t), s()))
        return;
      const { finalFocusTo: b } = e;
      b !== void 0 ? (x = Ul(b)) === null || x === void 0 || x.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (a = !0, l.focus({ preventScroll: !0 }), a = !1);
    }
    function m(x) {
      if (s() && e.active) {
        const b = r.value, y = o.value;
        if (b !== null && y !== null) {
          const S = c();
          if (S == null || S === y) {
            a = !0, b.focus({ preventScroll: !0 }), a = !1;
            return;
          }
          a = !0;
          const C = x === "first" ? Yd(S) : Zd(S);
          a = !1, C || (a = !0, b.focus({ preventScroll: !0 }), a = !1);
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
function eu(e, t) {
  t && (Pt(() => {
    const {
      value: r
    } = e;
    r && io.registerHandler(r, t);
  }), He(e, (r, o) => {
    o && io.unregisterHandler(o);
  }, {
    deep: !1
  }), kt(() => {
    const {
      value: r
    } = e;
    r && io.unregisterHandler(r);
  }));
}
function Zo(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const x0 = /^(\d|\.)+$/, ss = /(\d|\.)+/;
function Ct(e, {
  c: t = 1,
  offset: r = 0,
  attachPx: o = !0
} = {}) {
  if (typeof e == "number") {
    const i = (e + r) * t;
    return i === 0 ? "0" : `${i}px`;
  } else if (typeof e == "string")
    if (x0.test(e)) {
      const i = (Number(e) + r) * t;
      return o ? i === 0 ? "0" : `${i}px` : `${i}`;
    } else {
      const i = ss.exec(e);
      return i ? e.replace(ss, String((Number(i[0]) + r) * t)) : e;
    }
  return e;
}
function ds(e) {
  const {
    left: t,
    right: r,
    top: o,
    bottom: i
  } = Nt(e);
  return `${o} ${t} ${i} ${r}`;
}
function y0(e, t) {
  if (!e) return;
  const r = document.createElement("a");
  r.href = e, t !== void 0 && (r.download = t), document.body.appendChild(r), r.click(), document.body.removeChild(r);
}
let Ki;
function C0() {
  return Ki === void 0 && (Ki = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Ki;
}
const tu = /* @__PURE__ */ new WeakSet();
function w0(e) {
  tu.add(e);
}
function S0(e) {
  return !tu.has(e);
}
function us(e) {
  switch (typeof e) {
    case "string":
      return e || void 0;
    case "number":
      return String(e);
    default:
      return;
  }
}
function cs(e) {
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
const fs = /* @__PURE__ */ new Set();
function ct(e, t) {
  const r = `[naive/${e}]: ${t}`;
  fs.has(r) || (fs.add(r), console.error(r));
}
function Ft(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function jn(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function re(e, ...t) {
  if (Array.isArray(e))
    e.forEach((r) => re(r, ...t));
  else
    return e(...t);
}
function nu(e) {
  return (t) => {
    t ? e.value = t.$el : e.value = null;
  };
}
function vo(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(Ht(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        vo(o, t, r);
        return;
      }
      if (o.type === je) {
        if (o.children === null) return;
        Array.isArray(o.children) && vo(o.children, t, r);
      } else {
        if (o.type === Ia && t) return;
        r.push(o);
      }
    }
  }), r;
}
function B0(e, t = "default", r = void 0) {
  const o = e[t];
  if (!o)
    return Ft("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const i = vo(o(r));
  return i.length === 1 ? i[0] : (Ft("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function k0(e, t, r) {
  if (!t)
    return null;
  const o = vo(t(r));
  return o.length === 1 ? o[0] : (Ft("getFirstSlotVNode", `slot[${e}] should have exactly one child`), null);
}
function R0(e, t = "default", r = []) {
  const i = e.$slots[t];
  return i === void 0 ? r : i();
}
function kn(e, t = [], r) {
  const o = {};
  return t.forEach((i) => {
    o[i] = e[i];
  }), Object.assign(o, r);
}
function Ln(e) {
  return Object.keys(e);
}
function ao(e) {
  const t = e.filter((r) => r !== void 0);
  if (t.length !== 0)
    return t.length === 1 ? t[0] : (r) => {
      e.forEach((o) => {
        o && o(r);
      });
    };
}
function cr(e, t = [], r) {
  const o = {};
  return Object.getOwnPropertyNames(e).forEach((a) => {
    t.includes(a) || (o[a] = e[a]);
  }), Object.assign(o, r);
}
function gt(e, ...t) {
  return typeof e == "function" ? e(...t) : typeof e == "string" ? Ht(e) : typeof e == "number" ? Ht(String(e)) : null;
}
function rn(e) {
  return e.some((t) => Rf(t) ? !(t.type === Ia || t.type === je && !rn(t.children)) : !0) ? e : null;
}
function en(e, t) {
  return e && rn(e()) || t();
}
function ca(e, t, r) {
  return e && rn(e(t)) || r(t);
}
function _e(e, t) {
  const r = e && rn(e());
  return t(r || null);
}
function F0(e, t, r) {
  const o = e && rn(e(t));
  return r(o || null);
}
function Rr(e) {
  return !(e && rn(e()));
}
const fa = ee({
  render() {
    var e, t;
    return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
}), sn = "n-config-provider", Jo = "n";
function Ae(e = {}, t = {
  defaultBordered: !0
}) {
  const r = pe(sn, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: r == null ? void 0 : r.inlineThemeDisabled,
    mergedRtlRef: r == null ? void 0 : r.mergedRtlRef,
    mergedComponentPropsRef: r == null ? void 0 : r.mergedComponentPropsRef,
    mergedBreakpointsRef: r == null ? void 0 : r.mergedBreakpointsRef,
    mergedBorderedRef: $(() => {
      var o, i;
      const {
        bordered: a
      } = e;
      return a !== void 0 ? a : (i = (o = r == null ? void 0 : r.mergedBorderedRef.value) !== null && o !== void 0 ? o : t.defaultBordered) !== null && i !== void 0 ? i : !0;
    }),
    mergedClsPrefixRef: r ? r.mergedClsPrefixRef : Cd(Jo),
    namespaceRef: $(() => r == null ? void 0 : r.mergedNamespaceRef.value)
  };
}
function ru() {
  const e = pe(sn, null);
  return e ? e.mergedClsPrefixRef : Cd(Jo);
}
function Ze(e, t, r, o) {
  r || jn("useThemeClass", "cssVarsRef is not passed");
  const i = pe(sn, null), a = i == null ? void 0 : i.mergedThemeHashRef, l = i == null ? void 0 : i.styleMountTarget, s = I(""), d = ur();
  let u;
  const c = `__${e}`, v = () => {
    let g = c;
    const m = t ? t.value : void 0, h = a == null ? void 0 : a.value;
    h && (g += `-${h}`), m && (g += `-${m}`);
    const {
      themeOverrides: p,
      builtinThemeOverrides: x
    } = o;
    p && (g += `-${uo(JSON.stringify(p))}`), x && (g += `-${uo(JSON.stringify(x))}`), s.value = g, u = () => {
      const b = r.value;
      let y = "";
      for (const S in b)
        y += `${S}: ${b[S]};`;
      M(`.${g}`, y).mount({
        id: g,
        ssr: d,
        parent: l
      }), u = void 0;
    };
  };
  return it(() => {
    v();
  }), {
    themeClass: s,
    onRender: () => {
      u == null || u();
    }
  };
}
const ha = "n-form-item";
function _n(e, {
  defaultSize: t = "medium",
  mergedSize: r,
  mergedDisabled: o
} = {}) {
  const i = pe(ha, null);
  Ee(ha, null);
  const a = $(r ? () => r(i) : () => {
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
  }), l = $(o ? () => o(i) : () => {
    const {
      disabled: d
    } = e;
    return d !== void 0 ? d : i ? i.disabled.value : !1;
  }), s = $(() => {
    const {
      status: d
    } = e;
    return d || (i == null ? void 0 : i.mergedValidationStatus.value);
  });
  return kt(() => {
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
const P0 = {
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
}, z0 = {
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
function Fr(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
function fn(e) {
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
function hn(e) {
  return (t, r = {}) => {
    const o = r.width, i = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const l = a[0], s = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(s) ? A0(s, (v) => v.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      $0(s, (v) => v.test(l))
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
function $0(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function A0(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function ou(e) {
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
function D0(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
let E0 = {};
function T0() {
  return E0;
}
function hs(e, t) {
  var s, d, u, c;
  const r = T0(), o = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : d.weekStartsOn) ?? r.weekStartsOn ?? ((c = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = D0(e), a = i.getDay(), l = (a < o ? 7 : 0) + a - o;
  return i.setDate(i.getDate() - l), i.setHours(0, 0, 0, 0), i;
}
function O0(e, t, r) {
  const o = hs(e, r), i = hs(t, r);
  return +o == +i;
}
const M0 = {
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
}, I0 = (e, t, r) => {
  let o;
  const i = M0[e];
  return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
}, L0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, N0 = (e, t, r, o) => L0[e], H0 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, j0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, _0 = {
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
}, W0 = {
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
}, V0 = {
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
}, U0 = (e, t) => {
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
}, q0 = {
  ordinalNumber: U0,
  era: fn({
    values: H0,
    defaultWidth: "wide"
  }),
  quarter: fn({
    values: j0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: fn({
    values: _0,
    defaultWidth: "wide"
  }),
  day: fn({
    values: W0,
    defaultWidth: "wide"
  }),
  dayPeriod: fn({
    values: V0,
    defaultWidth: "wide",
    formattingValues: K0,
    defaultFormattingWidth: "wide"
  })
}, G0 = /^(\d+)(th|st|nd|rd)?/i, X0 = /\d+/i, Y0 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Z0 = {
  any: [/^b/i, /^(a|c)/i]
}, J0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Q0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, ev = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, tv = {
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
}, nv = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, rv = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ov = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, iv = {
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
}, av = {
  ordinalNumber: ou({
    matchPattern: G0,
    parsePattern: X0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: hn({
    matchPatterns: Y0,
    defaultMatchWidth: "wide",
    parsePatterns: Z0,
    defaultParseWidth: "any"
  }),
  quarter: hn({
    matchPatterns: J0,
    defaultMatchWidth: "wide",
    parsePatterns: Q0,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: hn({
    matchPatterns: ev,
    defaultMatchWidth: "wide",
    parsePatterns: tv,
    defaultParseWidth: "any"
  }),
  day: hn({
    matchPatterns: nv,
    defaultMatchWidth: "wide",
    parsePatterns: rv,
    defaultParseWidth: "any"
  }),
  dayPeriod: hn({
    matchPatterns: ov,
    defaultMatchWidth: "any",
    parsePatterns: iv,
    defaultParseWidth: "any"
  })
}, lv = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, sv = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, dv = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, uv = {
  date: Fr({
    formats: lv,
    defaultWidth: "full"
  }),
  time: Fr({
    formats: sv,
    defaultWidth: "full"
  }),
  dateTime: Fr({
    formats: dv,
    defaultWidth: "full"
  })
}, cv = {
  code: "en-US",
  formatDistance: I0,
  formatLong: uv,
  formatRelative: N0,
  localize: q0,
  match: av,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, fv = {
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
}, hv = (e, t, r) => {
  let o;
  const i = fv[e];
  return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", String(t)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? o + "内" : o + "前" : o;
}, vv = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, gv = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, pv = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, mv = {
  date: Fr({
    formats: vv,
    defaultWidth: "full"
  }),
  time: Fr({
    formats: gv,
    defaultWidth: "full"
  }),
  dateTime: Fr({
    formats: pv,
    defaultWidth: "full"
  })
};
function vs(e, t, r) {
  const o = "eeee p";
  return O0(e, t, r) ? o : e.getTime() > t.getTime() ? "'下个'" + o : "'上个'" + o;
}
const bv = {
  lastWeek: vs,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: vs,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, xv = (e, t, r, o) => {
  const i = bv[e];
  return typeof i == "function" ? i(t, r, o) : i;
}, yv = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, Cv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, wv = {
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
}, Sv = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, Bv = {
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
}, Rv = (e, t) => {
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
}, Fv = {
  ordinalNumber: Rv,
  era: fn({
    values: yv,
    defaultWidth: "wide"
  }),
  quarter: fn({
    values: Cv,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: fn({
    values: wv,
    defaultWidth: "wide"
  }),
  day: fn({
    values: Sv,
    defaultWidth: "wide"
  }),
  dayPeriod: fn({
    values: Bv,
    defaultWidth: "wide",
    formattingValues: kv,
    defaultFormattingWidth: "wide"
  })
}, Pv = /^(第\s*)?\d+(日|时|分|秒)?/i, zv = /\d+/i, $v = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, Av = {
  any: [/^(前)/i, /^(公元)/i]
}, Dv = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, Ev = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, Tv = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, Ov = {
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
}, Mv = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, Iv = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, Lv = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, Nv = {
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
}, Hv = {
  ordinalNumber: ou({
    matchPattern: Pv,
    parsePattern: zv,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: hn({
    matchPatterns: $v,
    defaultMatchWidth: "wide",
    parsePatterns: Av,
    defaultParseWidth: "any"
  }),
  quarter: hn({
    matchPatterns: Dv,
    defaultMatchWidth: "wide",
    parsePatterns: Ev,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: hn({
    matchPatterns: Tv,
    defaultMatchWidth: "wide",
    parsePatterns: Ov,
    defaultParseWidth: "any"
  }),
  day: hn({
    matchPatterns: Mv,
    defaultMatchWidth: "wide",
    parsePatterns: Iv,
    defaultParseWidth: "any"
  }),
  dayPeriod: hn({
    matchPatterns: Lv,
    defaultMatchWidth: "any",
    parsePatterns: Nv,
    defaultParseWidth: "any"
  })
}, jv = {
  code: "zh-CN",
  formatDistance: hv,
  formatLong: mv,
  formatRelative: xv,
  localize: Fv,
  match: Hv,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, _v = {
  name: "en-US",
  locale: cv
}, Wv = {
  name: "zh-CN",
  locale: jv
};
var iu = typeof global == "object" && global && global.Object === Object && global, Vv = typeof self == "object" && self && self.Object === Object && self, xn = iu || Vv || Function("return this")(), Nn = xn.Symbol, au = Object.prototype, Kv = au.hasOwnProperty, Uv = au.toString, Xr = Nn ? Nn.toStringTag : void 0;
function qv(e) {
  var t = Kv.call(e, Xr), r = e[Xr];
  try {
    e[Xr] = void 0;
    var o = !0;
  } catch {
  }
  var i = Uv.call(e);
  return o && (t ? e[Xr] = r : delete e[Xr]), i;
}
var Gv = Object.prototype, Xv = Gv.toString;
function Yv(e) {
  return Xv.call(e);
}
var Zv = "[object Null]", Jv = "[object Undefined]", gs = Nn ? Nn.toStringTag : void 0;
function fr(e) {
  return e == null ? e === void 0 ? Jv : Zv : gs && gs in Object(e) ? qv(e) : Yv(e);
}
function Hn(e) {
  return e != null && typeof e == "object";
}
var Qv = "[object Symbol]";
function Qa(e) {
  return typeof e == "symbol" || Hn(e) && fr(e) == Qv;
}
function lu(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, i = Array(o); ++r < o; )
    i[r] = t(e[r], r, e);
  return i;
}
var an = Array.isArray, eg = 1 / 0, ps = Nn ? Nn.prototype : void 0, ms = ps ? ps.toString : void 0;
function su(e) {
  if (typeof e == "string")
    return e;
  if (an(e))
    return lu(e, su) + "";
  if (Qa(e))
    return ms ? ms.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -eg ? "-0" : t;
}
function Wn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function el(e) {
  return e;
}
var tg = "[object AsyncFunction]", ng = "[object Function]", rg = "[object GeneratorFunction]", og = "[object Proxy]";
function tl(e) {
  if (!Wn(e))
    return !1;
  var t = fr(e);
  return t == ng || t == rg || t == tg || t == og;
}
var Ui = xn["__core-js_shared__"], bs = function() {
  var e = /[^.]+$/.exec(Ui && Ui.keys && Ui.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function ig(e) {
  return !!bs && bs in e;
}
var ag = Function.prototype, lg = ag.toString;
function hr(e) {
  if (e != null) {
    try {
      return lg.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var sg = /[\\^$.*+?()[\]{}|]/g, dg = /^\[object .+?Constructor\]$/, ug = Function.prototype, cg = Object.prototype, fg = ug.toString, hg = cg.hasOwnProperty, vg = RegExp(
  "^" + fg.call(hg).replace(sg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function gg(e) {
  if (!Wn(e) || ig(e))
    return !1;
  var t = tl(e) ? vg : dg;
  return t.test(hr(e));
}
function pg(e, t) {
  return e == null ? void 0 : e[t];
}
function vr(e, t) {
  var r = pg(e, t);
  return gg(r) ? r : void 0;
}
var va = vr(xn, "WeakMap"), xs = Object.create, mg = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Wn(t))
      return {};
    if (xs)
      return xs(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function bg(e, t, r) {
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
function xg(e, t) {
  var r = -1, o = e.length;
  for (t || (t = Array(o)); ++r < o; )
    t[r] = e[r];
  return t;
}
var yg = 800, Cg = 16, wg = Date.now;
function Sg(e) {
  var t = 0, r = 0;
  return function() {
    var o = wg(), i = Cg - (o - r);
    if (r = o, i > 0) {
      if (++t >= yg)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Bg(e) {
  return function() {
    return e;
  };
}
var Qo = function() {
  try {
    var e = vr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), kg = Qo ? function(e, t) {
  return Qo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Bg(t),
    writable: !0
  });
} : el, Rg = Sg(kg), Fg = 9007199254740991, Pg = /^(?:0|[1-9]\d*)$/;
function nl(e, t) {
  var r = typeof e;
  return t = t ?? Fg, !!t && (r == "number" || r != "symbol" && Pg.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function rl(e, t, r) {
  t == "__proto__" && Qo ? Qo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function So(e, t) {
  return e === t || e !== e && t !== t;
}
var zg = Object.prototype, $g = zg.hasOwnProperty;
function Ag(e, t, r) {
  var o = e[t];
  (!($g.call(e, t) && So(o, r)) || r === void 0 && !(t in e)) && rl(e, t, r);
}
function Dg(e, t, r, o) {
  var i = !r;
  r || (r = {});
  for (var a = -1, l = t.length; ++a < l; ) {
    var s = t[a], d = void 0;
    d === void 0 && (d = e[s]), i ? rl(r, s, d) : Ag(r, s, d);
  }
  return r;
}
var ys = Math.max;
function Eg(e, t, r) {
  return t = ys(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, i = -1, a = ys(o.length - t, 0), l = Array(a); ++i < a; )
      l[i] = o[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = o[i];
    return s[t] = r(l), bg(e, this, s);
  };
}
function Tg(e, t) {
  return Rg(Eg(e, t, el), e + "");
}
var Og = 9007199254740991;
function ol(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Og;
}
function Hr(e) {
  return e != null && ol(e.length) && !tl(e);
}
function Mg(e, t, r) {
  if (!Wn(r))
    return !1;
  var o = typeof t;
  return (o == "number" ? Hr(r) && nl(t, r.length) : o == "string" && t in r) ? So(r[t], e) : !1;
}
function Ig(e) {
  return Tg(function(t, r) {
    var o = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, l = i > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, l && Mg(r[0], r[1], l) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++o < i; ) {
      var s = r[o];
      s && e(t, s, o, a);
    }
    return t;
  });
}
var Lg = Object.prototype;
function il(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Lg;
  return e === r;
}
function Ng(e, t) {
  for (var r = -1, o = Array(e); ++r < e; )
    o[r] = t(r);
  return o;
}
var Hg = "[object Arguments]";
function Cs(e) {
  return Hn(e) && fr(e) == Hg;
}
var du = Object.prototype, jg = du.hasOwnProperty, _g = du.propertyIsEnumerable, ei = Cs(/* @__PURE__ */ function() {
  return arguments;
}()) ? Cs : function(e) {
  return Hn(e) && jg.call(e, "callee") && !_g.call(e, "callee");
};
function Wg() {
  return !1;
}
var uu = typeof exports == "object" && exports && !exports.nodeType && exports, ws = uu && typeof module == "object" && module && !module.nodeType && module, Vg = ws && ws.exports === uu, Ss = Vg ? xn.Buffer : void 0, Kg = Ss ? Ss.isBuffer : void 0, ti = Kg || Wg, Ug = "[object Arguments]", qg = "[object Array]", Gg = "[object Boolean]", Xg = "[object Date]", Yg = "[object Error]", Zg = "[object Function]", Jg = "[object Map]", Qg = "[object Number]", ep = "[object Object]", tp = "[object RegExp]", np = "[object Set]", rp = "[object String]", op = "[object WeakMap]", ip = "[object ArrayBuffer]", ap = "[object DataView]", lp = "[object Float32Array]", sp = "[object Float64Array]", dp = "[object Int8Array]", up = "[object Int16Array]", cp = "[object Int32Array]", fp = "[object Uint8Array]", hp = "[object Uint8ClampedArray]", vp = "[object Uint16Array]", gp = "[object Uint32Array]", ut = {};
ut[lp] = ut[sp] = ut[dp] = ut[up] = ut[cp] = ut[fp] = ut[hp] = ut[vp] = ut[gp] = !0;
ut[Ug] = ut[qg] = ut[ip] = ut[Gg] = ut[ap] = ut[Xg] = ut[Yg] = ut[Zg] = ut[Jg] = ut[Qg] = ut[ep] = ut[tp] = ut[np] = ut[rp] = ut[op] = !1;
function pp(e) {
  return Hn(e) && ol(e.length) && !!ut[fr(e)];
}
function mp(e) {
  return function(t) {
    return e(t);
  };
}
var cu = typeof exports == "object" && exports && !exports.nodeType && exports, lo = cu && typeof module == "object" && module && !module.nodeType && module, bp = lo && lo.exports === cu, qi = bp && iu.process, Bs = function() {
  try {
    var e = lo && lo.require && lo.require("util").types;
    return e || qi && qi.binding && qi.binding("util");
  } catch {
  }
}(), ks = Bs && Bs.isTypedArray, al = ks ? mp(ks) : pp, xp = Object.prototype, yp = xp.hasOwnProperty;
function fu(e, t) {
  var r = an(e), o = !r && ei(e), i = !r && !o && ti(e), a = !r && !o && !i && al(e), l = r || o || i || a, s = l ? Ng(e.length, String) : [], d = s.length;
  for (var u in e)
    (t || yp.call(e, u)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    nl(u, d))) && s.push(u);
  return s;
}
function hu(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Cp = hu(Object.keys, Object), wp = Object.prototype, Sp = wp.hasOwnProperty;
function Bp(e) {
  if (!il(e))
    return Cp(e);
  var t = [];
  for (var r in Object(e))
    Sp.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function ll(e) {
  return Hr(e) ? fu(e) : Bp(e);
}
function kp(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var Rp = Object.prototype, Fp = Rp.hasOwnProperty;
function Pp(e) {
  if (!Wn(e))
    return kp(e);
  var t = il(e), r = [];
  for (var o in e)
    o == "constructor" && (t || !Fp.call(e, o)) || r.push(o);
  return r;
}
function vu(e) {
  return Hr(e) ? fu(e, !0) : Pp(e);
}
var zp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, $p = /^\w*$/;
function sl(e, t) {
  if (an(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Qa(e) ? !0 : $p.test(e) || !zp.test(e) || t != null && e in Object(t);
}
var go = vr(Object, "create");
function Ap() {
  this.__data__ = go ? go(null) : {}, this.size = 0;
}
function Dp(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Ep = "__lodash_hash_undefined__", Tp = Object.prototype, Op = Tp.hasOwnProperty;
function Mp(e) {
  var t = this.__data__;
  if (go) {
    var r = t[e];
    return r === Ep ? void 0 : r;
  }
  return Op.call(t, e) ? t[e] : void 0;
}
var Ip = Object.prototype, Lp = Ip.hasOwnProperty;
function Np(e) {
  var t = this.__data__;
  return go ? t[e] !== void 0 : Lp.call(t, e);
}
var Hp = "__lodash_hash_undefined__";
function jp(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = go && t === void 0 ? Hp : t, this;
}
function or(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
or.prototype.clear = Ap;
or.prototype.delete = Dp;
or.prototype.get = Mp;
or.prototype.has = Np;
or.prototype.set = jp;
function _p() {
  this.__data__ = [], this.size = 0;
}
function gi(e, t) {
  for (var r = e.length; r--; )
    if (So(e[r][0], t))
      return r;
  return -1;
}
var Wp = Array.prototype, Vp = Wp.splice;
function Kp(e) {
  var t = this.__data__, r = gi(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : Vp.call(t, r, 1), --this.size, !0;
}
function Up(e) {
  var t = this.__data__, r = gi(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function qp(e) {
  return gi(this.__data__, e) > -1;
}
function Gp(e, t) {
  var r = this.__data__, o = gi(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function Fn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Fn.prototype.clear = _p;
Fn.prototype.delete = Kp;
Fn.prototype.get = Up;
Fn.prototype.has = qp;
Fn.prototype.set = Gp;
var po = vr(xn, "Map");
function Xp() {
  this.size = 0, this.__data__ = {
    hash: new or(),
    map: new (po || Fn)(),
    string: new or()
  };
}
function Yp(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function pi(e, t) {
  var r = e.__data__;
  return Yp(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Zp(e) {
  var t = pi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Jp(e) {
  return pi(this, e).get(e);
}
function Qp(e) {
  return pi(this, e).has(e);
}
function em(e, t) {
  var r = pi(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function Pn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Pn.prototype.clear = Xp;
Pn.prototype.delete = Zp;
Pn.prototype.get = Jp;
Pn.prototype.has = Qp;
Pn.prototype.set = em;
var tm = "Expected a function";
function dl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(tm);
  var r = function() {
    var o = arguments, i = t ? t.apply(this, o) : o[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var l = e.apply(this, o);
    return r.cache = a.set(i, l) || a, l;
  };
  return r.cache = new (dl.Cache || Pn)(), r;
}
dl.Cache = Pn;
var nm = 500;
function rm(e) {
  var t = dl(e, function(o) {
    return r.size === nm && r.clear(), o;
  }), r = t.cache;
  return t;
}
var om = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, im = /\\(\\)?/g, am = rm(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(om, function(r, o, i, a) {
    t.push(i ? a.replace(im, "$1") : o || r);
  }), t;
});
function gu(e) {
  return e == null ? "" : su(e);
}
function pu(e, t) {
  return an(e) ? e : sl(e, t) ? [e] : am(gu(e));
}
var lm = 1 / 0;
function mi(e) {
  if (typeof e == "string" || Qa(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -lm ? "-0" : t;
}
function mu(e, t) {
  t = pu(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[mi(t[r++])];
  return r && r == o ? e : void 0;
}
function mo(e, t, r) {
  var o = e == null ? void 0 : mu(e, t);
  return o === void 0 ? r : o;
}
function sm(e, t) {
  for (var r = -1, o = t.length, i = e.length; ++r < o; )
    e[i + r] = t[r];
  return e;
}
var bu = hu(Object.getPrototypeOf, Object), dm = "[object Object]", um = Function.prototype, cm = Object.prototype, xu = um.toString, fm = cm.hasOwnProperty, hm = xu.call(Object);
function vm(e) {
  if (!Hn(e) || fr(e) != dm)
    return !1;
  var t = bu(e);
  if (t === null)
    return !0;
  var r = fm.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && xu.call(r) == hm;
}
function gm(e, t, r) {
  var o = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++o < i; )
    a[o] = e[o + t];
  return a;
}
function pm(e, t, r) {
  var o = e.length;
  return r = r === void 0 ? o : r, !t && r >= o ? e : gm(e, t, r);
}
var mm = "\\ud800-\\udfff", bm = "\\u0300-\\u036f", xm = "\\ufe20-\\ufe2f", ym = "\\u20d0-\\u20ff", Cm = bm + xm + ym, wm = "\\ufe0e\\ufe0f", Sm = "\\u200d", Bm = RegExp("[" + Sm + mm + Cm + wm + "]");
function yu(e) {
  return Bm.test(e);
}
function km(e) {
  return e.split("");
}
var Cu = "\\ud800-\\udfff", Rm = "\\u0300-\\u036f", Fm = "\\ufe20-\\ufe2f", Pm = "\\u20d0-\\u20ff", zm = Rm + Fm + Pm, $m = "\\ufe0e\\ufe0f", Am = "[" + Cu + "]", ga = "[" + zm + "]", pa = "\\ud83c[\\udffb-\\udfff]", Dm = "(?:" + ga + "|" + pa + ")", wu = "[^" + Cu + "]", Su = "(?:\\ud83c[\\udde6-\\uddff]){2}", Bu = "[\\ud800-\\udbff][\\udc00-\\udfff]", Em = "\\u200d", ku = Dm + "?", Ru = "[" + $m + "]?", Tm = "(?:" + Em + "(?:" + [wu, Su, Bu].join("|") + ")" + Ru + ku + ")*", Om = Ru + ku + Tm, Mm = "(?:" + [wu + ga + "?", ga, Su, Bu, Am].join("|") + ")", Im = RegExp(pa + "(?=" + pa + ")|" + Mm + Om, "g");
function Lm(e) {
  return e.match(Im) || [];
}
function Nm(e) {
  return yu(e) ? Lm(e) : km(e);
}
function Hm(e) {
  return function(t) {
    t = gu(t);
    var r = yu(t) ? Nm(t) : void 0, o = r ? r[0] : t.charAt(0), i = r ? pm(r, 1).join("") : t.slice(1);
    return o[e]() + i;
  };
}
var jm = Hm("toUpperCase");
function _m() {
  this.__data__ = new Fn(), this.size = 0;
}
function Wm(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Vm(e) {
  return this.__data__.get(e);
}
function Km(e) {
  return this.__data__.has(e);
}
var Um = 200;
function qm(e, t) {
  var r = this.__data__;
  if (r instanceof Fn) {
    var o = r.__data__;
    if (!po || o.length < Um - 1)
      return o.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Pn(o);
  }
  return r.set(e, t), this.size = r.size, this;
}
function gn(e) {
  var t = this.__data__ = new Fn(e);
  this.size = t.size;
}
gn.prototype.clear = _m;
gn.prototype.delete = Wm;
gn.prototype.get = Vm;
gn.prototype.has = Km;
gn.prototype.set = qm;
var Fu = typeof exports == "object" && exports && !exports.nodeType && exports, Rs = Fu && typeof module == "object" && module && !module.nodeType && module, Gm = Rs && Rs.exports === Fu, Fs = Gm ? xn.Buffer : void 0;
Fs && Fs.allocUnsafe;
function Xm(e, t) {
  return e.slice();
}
function Ym(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, i = 0, a = []; ++r < o; ) {
    var l = e[r];
    t(l, r, e) && (a[i++] = l);
  }
  return a;
}
function Zm() {
  return [];
}
var Jm = Object.prototype, Qm = Jm.propertyIsEnumerable, Ps = Object.getOwnPropertySymbols, eb = Ps ? function(e) {
  return e == null ? [] : (e = Object(e), Ym(Ps(e), function(t) {
    return Qm.call(e, t);
  }));
} : Zm;
function tb(e, t, r) {
  var o = t(e);
  return an(e) ? o : sm(o, r(e));
}
function zs(e) {
  return tb(e, ll, eb);
}
var ma = vr(xn, "DataView"), ba = vr(xn, "Promise"), xa = vr(xn, "Set"), $s = "[object Map]", nb = "[object Object]", As = "[object Promise]", Ds = "[object Set]", Es = "[object WeakMap]", Ts = "[object DataView]", rb = hr(ma), ob = hr(po), ib = hr(ba), ab = hr(xa), lb = hr(va), On = fr;
(ma && On(new ma(new ArrayBuffer(1))) != Ts || po && On(new po()) != $s || ba && On(ba.resolve()) != As || xa && On(new xa()) != Ds || va && On(new va()) != Es) && (On = function(e) {
  var t = fr(e), r = t == nb ? e.constructor : void 0, o = r ? hr(r) : "";
  if (o)
    switch (o) {
      case rb:
        return Ts;
      case ob:
        return $s;
      case ib:
        return As;
      case ab:
        return Ds;
      case lb:
        return Es;
    }
  return t;
});
var ni = xn.Uint8Array;
function sb(e) {
  var t = new e.constructor(e.byteLength);
  return new ni(t).set(new ni(e)), t;
}
function db(e, t) {
  var r = sb(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function ub(e) {
  return typeof e.constructor == "function" && !il(e) ? mg(bu(e)) : {};
}
var cb = "__lodash_hash_undefined__";
function fb(e) {
  return this.__data__.set(e, cb), this;
}
function hb(e) {
  return this.__data__.has(e);
}
function ri(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Pn(); ++t < r; )
    this.add(e[t]);
}
ri.prototype.add = ri.prototype.push = fb;
ri.prototype.has = hb;
function vb(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function gb(e, t) {
  return e.has(t);
}
var pb = 1, mb = 2;
function Pu(e, t, r, o, i, a) {
  var l = r & pb, s = e.length, d = t.length;
  if (s != d && !(l && d > s))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var v = -1, g = !0, m = r & mb ? new ri() : void 0;
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
      if (!vb(t, function(b, y) {
        if (!gb(m, y) && (h === b || i(h, b, r, o, a)))
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
function bb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o, i) {
    r[++t] = [i, o];
  }), r;
}
function xb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o) {
    r[++t] = o;
  }), r;
}
var yb = 1, Cb = 2, wb = "[object Boolean]", Sb = "[object Date]", Bb = "[object Error]", kb = "[object Map]", Rb = "[object Number]", Fb = "[object RegExp]", Pb = "[object Set]", zb = "[object String]", $b = "[object Symbol]", Ab = "[object ArrayBuffer]", Db = "[object DataView]", Os = Nn ? Nn.prototype : void 0, Gi = Os ? Os.valueOf : void 0;
function Eb(e, t, r, o, i, a, l) {
  switch (r) {
    case Db:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Ab:
      return !(e.byteLength != t.byteLength || !a(new ni(e), new ni(t)));
    case wb:
    case Sb:
    case Rb:
      return So(+e, +t);
    case Bb:
      return e.name == t.name && e.message == t.message;
    case Fb:
    case zb:
      return e == t + "";
    case kb:
      var s = bb;
    case Pb:
      var d = o & yb;
      if (s || (s = xb), e.size != t.size && !d)
        return !1;
      var u = l.get(e);
      if (u)
        return u == t;
      o |= Cb, l.set(e, t);
      var c = Pu(s(e), s(t), o, i, a, l);
      return l.delete(e), c;
    case $b:
      if (Gi)
        return Gi.call(e) == Gi.call(t);
  }
  return !1;
}
var Tb = 1, Ob = Object.prototype, Mb = Ob.hasOwnProperty;
function Ib(e, t, r, o, i, a) {
  var l = r & Tb, s = zs(e), d = s.length, u = zs(t), c = u.length;
  if (d != c && !l)
    return !1;
  for (var v = d; v--; ) {
    var g = s[v];
    if (!(l ? g in t : Mb.call(t, g)))
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
      var S = l ? o(y, b, g, t, e, a) : o(b, y, g, e, t, a);
    if (!(S === void 0 ? b === y || i(b, y, r, o, a) : S)) {
      p = !1;
      break;
    }
    x || (x = g == "constructor");
  }
  if (p && !x) {
    var C = e.constructor, k = t.constructor;
    C != k && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof k == "function" && k instanceof k) && (p = !1);
  }
  return a.delete(e), a.delete(t), p;
}
var Lb = 1, Ms = "[object Arguments]", Is = "[object Array]", Lo = "[object Object]", Nb = Object.prototype, Ls = Nb.hasOwnProperty;
function Hb(e, t, r, o, i, a) {
  var l = an(e), s = an(t), d = l ? Is : On(e), u = s ? Is : On(t);
  d = d == Ms ? Lo : d, u = u == Ms ? Lo : u;
  var c = d == Lo, v = u == Lo, g = d == u;
  if (g && ti(e)) {
    if (!ti(t))
      return !1;
    l = !0, c = !1;
  }
  if (g && !c)
    return a || (a = new gn()), l || al(e) ? Pu(e, t, r, o, i, a) : Eb(e, t, d, r, o, i, a);
  if (!(r & Lb)) {
    var m = c && Ls.call(e, "__wrapped__"), h = v && Ls.call(t, "__wrapped__");
    if (m || h) {
      var p = m ? e.value() : e, x = h ? t.value() : t;
      return a || (a = new gn()), i(p, x, r, o, a);
    }
  }
  return g ? (a || (a = new gn()), Ib(e, t, r, o, i, a)) : !1;
}
function ul(e, t, r, o, i) {
  return e === t ? !0 : e == null || t == null || !Hn(e) && !Hn(t) ? e !== e && t !== t : Hb(e, t, r, o, ul, i);
}
var jb = 1, _b = 2;
function Wb(e, t, r, o) {
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
      var c = new gn(), v;
      if (!(v === void 0 ? ul(u, d, jb | _b, o, c) : v))
        return !1;
    }
  }
  return !0;
}
function zu(e) {
  return e === e && !Wn(e);
}
function Vb(e) {
  for (var t = ll(e), r = t.length; r--; ) {
    var o = t[r], i = e[o];
    t[r] = [o, i, zu(i)];
  }
  return t;
}
function $u(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Kb(e) {
  var t = Vb(e);
  return t.length == 1 && t[0][2] ? $u(t[0][0], t[0][1]) : function(r) {
    return r === e || Wb(r, e, t);
  };
}
function Ub(e, t) {
  return e != null && t in Object(e);
}
function qb(e, t, r) {
  t = pu(t, e);
  for (var o = -1, i = t.length, a = !1; ++o < i; ) {
    var l = mi(t[o]);
    if (!(a = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return a || ++o != i ? a : (i = e == null ? 0 : e.length, !!i && ol(i) && nl(l, i) && (an(e) || ei(e)));
}
function Gb(e, t) {
  return e != null && qb(e, t, Ub);
}
var Xb = 1, Yb = 2;
function Zb(e, t) {
  return sl(e) && zu(t) ? $u(mi(e), t) : function(r) {
    var o = mo(r, e);
    return o === void 0 && o === t ? Gb(r, e) : ul(t, o, Xb | Yb);
  };
}
function Jb(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Qb(e) {
  return function(t) {
    return mu(t, e);
  };
}
function ex(e) {
  return sl(e) ? Jb(mi(e)) : Qb(e);
}
function tx(e) {
  return typeof e == "function" ? e : e == null ? el : typeof e == "object" ? an(e) ? Zb(e[0], e[1]) : Kb(e) : ex(e);
}
function nx(e) {
  return function(t, r, o) {
    for (var i = -1, a = Object(t), l = o(t), s = l.length; s--; ) {
      var d = l[++i];
      if (r(a[d], d, a) === !1)
        break;
    }
    return t;
  };
}
var Au = nx();
function rx(e, t) {
  return e && Au(e, t, ll);
}
function ox(e, t) {
  return function(r, o) {
    if (r == null)
      return r;
    if (!Hr(r))
      return e(r, o);
    for (var i = r.length, a = -1, l = Object(r); ++a < i && o(l[a], a, l) !== !1; )
      ;
    return r;
  };
}
var ix = ox(rx);
function ya(e, t, r) {
  (r !== void 0 && !So(e[t], r) || r === void 0 && !(t in e)) && rl(e, t, r);
}
function ax(e) {
  return Hn(e) && Hr(e);
}
function Ca(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function lx(e) {
  return Dg(e, vu(e));
}
function sx(e, t, r, o, i, a, l) {
  var s = Ca(e, r), d = Ca(t, r), u = l.get(d);
  if (u) {
    ya(e, r, u);
    return;
  }
  var c = a ? a(s, d, r + "", e, t, l) : void 0, v = c === void 0;
  if (v) {
    var g = an(d), m = !g && ti(d), h = !g && !m && al(d);
    c = d, g || m || h ? an(s) ? c = s : ax(s) ? c = xg(s) : m ? (v = !1, c = Xm(d)) : h ? (v = !1, c = db(d)) : c = [] : vm(d) || ei(d) ? (c = s, ei(s) ? c = lx(s) : (!Wn(s) || tl(s)) && (c = ub(d))) : v = !1;
  }
  v && (l.set(d, c), i(c, d, o, a, l), l.delete(d)), ya(e, r, c);
}
function Du(e, t, r, o, i) {
  e !== t && Au(t, function(a, l) {
    if (i || (i = new gn()), Wn(a))
      sx(e, t, l, r, Du, o, i);
    else {
      var s = o ? o(Ca(e, l), a, l + "", e, t, i) : void 0;
      s === void 0 && (s = a), ya(e, l, s);
    }
  }, vu);
}
function dx(e, t) {
  var r = -1, o = Hr(e) ? Array(e.length) : [];
  return ix(e, function(i, a, l) {
    o[++r] = t(i, a, l);
  }), o;
}
function ux(e, t) {
  var r = an(e) ? lu : dx;
  return r(e, tx(t));
}
var Jr = Ig(function(e, t, r) {
  Du(e, t, r);
});
function ir(e) {
  const {
    mergedLocaleRef: t,
    mergedDateLocaleRef: r
  } = pe(sn, null) || {}, o = $(() => {
    var a, l;
    return (l = (a = t == null ? void 0 : t.value) === null || a === void 0 ? void 0 : a[e]) !== null && l !== void 0 ? l : P0[e];
  });
  return {
    dateLocaleRef: $(() => {
      var a;
      return (a = r == null ? void 0 : r.value) !== null && a !== void 0 ? a : _v;
    }),
    localeRef: o
  };
}
const Dr = "naive-ui-style";
function zt(e, t, r) {
  if (!t) return;
  const o = ur(), i = $(() => {
    const {
      value: s
    } = t;
    if (!s)
      return;
    const d = s[e];
    if (d)
      return d;
  }), a = pe(sn, null), l = () => {
    it(() => {
      const {
        value: s
      } = r, d = `${s}${e}Rtl`;
      if (Jf(d, o)) return;
      const {
        value: u
      } = i;
      u && u.style.mount({
        id: d,
        head: !0,
        anchorMetaName: Dr,
        props: {
          bPrefix: s ? `.${s}-` : void 0
        },
        ssr: o,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    });
  };
  return o ? l() : dr(l), i;
}
const Vn = {
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
  fontSize: cx,
  fontFamily: fx,
  lineHeight: hx
} = Vn, Eu = M("body", `
 margin: 0;
 font-size: ${cx};
 font-family: ${fx};
 line-height: ${hx};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [M("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function Kn(e, t, r) {
  if (!t) {
    process.env.NODE_ENV !== "production" && jn("use-style", "No style is specified.");
    return;
  }
  const o = ur(), i = pe(sn, null), a = () => {
    const l = r.value;
    t.mount({
      id: l === void 0 ? e : l + e,
      head: !0,
      anchorMetaName: Dr,
      props: {
        bPrefix: l ? `.${l}-` : void 0
      },
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    }), i != null && i.preflightStyleDisabled || Eu.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: Dr,
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    });
  };
  o ? a() : dr(a);
}
function ve(e, t, r, o, i, a) {
  const l = ur(), s = pe(sn, null);
  if (r) {
    const u = () => {
      const c = a == null ? void 0 : a.value;
      r.mount({
        id: c === void 0 ? t : c + t,
        head: !0,
        props: {
          bPrefix: c ? `.${c}-` : void 0
        },
        anchorMetaName: Dr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || Eu.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Dr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    l ? u() : dr(u);
  }
  return $(() => {
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
        self: S = void 0,
        peers: C = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: k = void 0,
      [e]: R = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: w,
      peers: B = {}
    } = R, F = Jr({}, c || y || b || o.common, k, w, p), A = Jr(
      // {}, executed every time, no need for empty obj
      (u = v || S || o.self) === null || u === void 0 ? void 0 : u(F),
      h,
      R,
      m
    );
    return {
      common: F,
      self: A,
      peers: Jr({}, o.peers, C, g),
      peerOverrides: Jr({}, h.peers, B, x)
    };
  });
}
ve.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const vx = z("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [M("svg", `
 height: 1em;
 width: 1em;
 `)]), xt = ee({
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
    Kn("-base-icon", vx, ie(e, "clsPrefix"));
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
}), gr = ee({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: t
  }) {
    const r = Lr();
    return () => f(_t, {
      name: "icon-switch-transition",
      appear: r.value
    }, t);
  }
}), gx = ee({
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
function jr(e, t) {
  const r = ee({
    render() {
      return t();
    }
  });
  return ee({
    name: jm(e),
    setup() {
      var o;
      const i = (o = pe(sn, null)) === null || o === void 0 ? void 0 : o.mergedIconsRef;
      return () => {
        var a;
        const l = (a = i == null ? void 0 : i.value) === null || a === void 0 ? void 0 : a[e];
        return l ? l() : f(r, null);
      };
    }
  });
}
const Ns = ee({
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
}), px = ee({
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
}), Tu = ee({
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
}), mx = ee({
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
}), cl = ee({
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
}), bx = jr("clear", () => f("svg", {
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
}))))), xx = jr("close", () => f("svg", {
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
}))))), yx = ee({
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
}), fl = jr("error", () => f("svg", {
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
}))))), Cx = ee({
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
}), wx = ee({
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
}), Hs = ee({
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
}), js = ee({
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
}), Sx = ee({
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
}), _s = ee({
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
}), oi = jr("info", () => f("svg", {
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
}))))), Ws = ee({
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
}), hl = jr("success", () => f("svg", {
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
}))))), bi = jr("warning", () => f("svg", {
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
  cubicBezierEaseInOut: Bx
} = Vn;
function Zt({
  originalTransform: e = "",
  left: t = 0,
  top: r = 0,
  transition: o = `all .3s ${Bx} !important`
} = {}) {
  return [M("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${e} scale(0.75)`,
    left: t,
    top: r,
    opacity: 0
  }), M("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${e}`,
    left: t,
    top: r,
    opacity: 1
  }), M("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: t,
    top: r,
    transition: o
  })];
}
const kx = z("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [M(">", [T("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [M("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), M("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), T("placeholder", `
 display: flex;
 `), T("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Zt({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), wa = ee({
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
    return Kn("-base-clear", kx, ie(e, "clsPrefix")), {
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
    }, f(gr, null, {
      default: () => {
        var t, r;
        return this.show ? f("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, en(this.$slots.icon, () => [f(xt, {
          clsPrefix: e
        }, {
          default: () => f(bx, null)
        })])) : f("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (r = (t = this.$slots).placeholder) === null || r === void 0 ? void 0 : r.call(t));
      }
    }));
  }
}), Rx = z("base-close", `
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
 `), M("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), Ye("disabled", [M("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), M("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), M("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), M("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), M("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), N("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), N("round", [M("&::before", `
 border-radius: 50%;
 `)])]), Bo = ee({
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
    return Kn("-base-close", Rx, ie(e, "clsPrefix")), () => {
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
      }, f(xt, {
        clsPrefix: t
      }, {
        default: () => f(xx, null)
      }));
    };
  }
}), vl = ee({
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
      } = e, v = s ? Ff : _t, g = {
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
}), Fx = ee({
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
}), Px = M([M("@keyframes rotator", `
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
 `, [T("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [Zt()]), T("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Zt({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), T("container", `
 animation: rotator 3s linear infinite both;
 `, [T("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Xi = "1.6s", zx = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Un = ee({
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
  }, zx),
  setup(e) {
    Kn("-base-loading", Px, ie(e, "clsPrefix"));
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
    }, f(gr, null, {
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
        dur: Xi,
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
        dur: Xi,
        fill: "freeze",
        repeatCount: "indefinite"
      }), f("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * t};${1.42 * t};${5.67 * t}`,
        begin: "0s",
        dur: Xi,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : f("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), {
  cubicBezierEaseInOut: Vs
} = Vn;
function xi({
  name: e = "fade-in",
  enterDuration: t = "0.2s",
  leaveDuration: r = "0.2s",
  enterCubicBezier: o = Vs,
  leaveCubicBezier: i = Vs
} = {}) {
  return [M(`&.${e}-transition-enter-active`, {
    transition: `all ${t} ${o}!important`
  }), M(`&.${e}-transition-leave-active`, {
    transition: `all ${r} ${i}!important`
  }), M(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), M(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
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
}, $x = rr(Re.neutralBase), Ou = rr(Re.neutralInvertBase), Ax = `rgba(${Ou.slice(0, 3).join(", ")}, `;
function Ks(e) {
  return `${Ax + String(e)})`;
}
function Tt(e) {
  const t = Array.from(Ou);
  return t[3] = Number(e), Ge($x, t);
}
const Je = Object.assign(Object.assign({
  name: "common"
}, Vn), {
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
  textColorDisabled: Tt(Re.alpha4),
  placeholderColor: Tt(Re.alpha4),
  placeholderColorDisabled: Tt(Re.alpha5),
  iconColor: Tt(Re.alpha4),
  iconColorHover: $o(Tt(Re.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: $o(Tt(Re.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: Tt(Re.alpha5),
  opacity1: Re.alpha1,
  opacity2: Re.alpha2,
  opacity3: Re.alpha3,
  opacity4: Re.alpha4,
  opacity5: Re.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: Tt(Number(Re.alphaClose)),
  closeIconColorHover: Tt(Number(Re.alphaClose)),
  closeIconColorPressed: Tt(Number(Re.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: Tt(Re.alpha4),
  clearColorHover: $o(Tt(Re.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: $o(Tt(Re.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Ks(Re.alphaScrollbar),
  scrollbarColorHover: Ks(Re.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: Tt(Re.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: Re.neutralPopover,
  tableColor: Re.neutralCard,
  cardColor: Re.neutralCard,
  modalColor: Re.neutralModal,
  bodyColor: Re.neutralBody,
  tagColor: "#eee",
  avatarColor: Tt(Re.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: Tt(Re.alphaInput),
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
}), Dx = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Ex(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: r,
    scrollbarHeight: o,
    scrollbarWidth: i,
    scrollbarBorderRadius: a
  } = e;
  return Object.assign(Object.assign({}, Dx), {
    height: o,
    width: i,
    borderRadius: a,
    color: t,
    colorHover: r
  });
}
const ko = {
  name: "Scrollbar",
  common: Je,
  self: Ex
}, Tx = z("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [M(">", [z("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [M("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), M(">", [
  // We can't set overflow hidden since it affects positioning.
  z("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), M(">, +", [z("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [N("horizontal", `
 height: var(--n-scrollbar-height);
 `, [M(">", [T("scrollbar", `
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
 `, [M(">", [T("scrollbar", `
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
 `), N("disabled", [M(">", [T("scrollbar", "pointer-events: none;")])]), M(">", [T("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [xi(), M("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Ox = Object.assign(Object.assign({}, ve.props), {
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
}), pr = ee({
  name: "Scrollbar",
  props: Ox,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Ae(e), i = zt("Scrollbar", o, t), a = I(null), l = I(null), s = I(null), d = I(null), u = I(null), c = I(null), v = I(null), g = I(null), m = I(null), h = I(null), p = I(null), x = I(0), b = I(0), y = I(!1), S = I(!1);
    let C = !1, k = !1, R, w, B = 0, F = 0, A = 0, V = 0;
    const O = wh(), n = ve("Scrollbar", "-scrollbar", Tx, ko, e, t), D = $(() => {
      const {
        value: P
      } = g, {
        value: W
      } = c, {
        value: J
      } = h;
      return P === null || W === null || J === null ? 0 : Math.min(P, J * P / W + Dt(n.value.self.width) * 1.5);
    }), E = $(() => `${D.value}px`), H = $(() => {
      const {
        value: P
      } = m, {
        value: W
      } = v, {
        value: J
      } = p;
      return P === null || W === null || J === null ? 0 : J * P / W + Dt(n.value.self.height) * 1.5;
    }), L = $(() => `${H.value}px`), K = $(() => {
      const {
        value: P
      } = g, {
        value: W
      } = x, {
        value: J
      } = c, {
        value: se
      } = h;
      if (P === null || J === null || se === null)
        return 0;
      {
        const de = J - P;
        return de ? W / de * (se - D.value) : 0;
      }
    }), te = $(() => `${K.value}px`), X = $(() => {
      const {
        value: P
      } = m, {
        value: W
      } = b, {
        value: J
      } = v, {
        value: se
      } = p;
      if (P === null || J === null || se === null)
        return 0;
      {
        const de = J - P;
        return de ? W / de * (se - H.value) : 0;
      }
    }), U = $(() => `${X.value}px`), j = $(() => {
      const {
        value: P
      } = g, {
        value: W
      } = c;
      return P !== null && W !== null && W > P;
    }), q = $(() => {
      const {
        value: P
      } = m, {
        value: W
      } = v;
      return P !== null && W !== null && W > P;
    }), Y = $(() => {
      const {
        trigger: P
      } = e;
      return P === "none" || y.value;
    }), ae = $(() => {
      const {
        trigger: P
      } = e;
      return P === "none" || S.value;
    }), le = $(() => {
      const {
        container: P
      } = e;
      return P ? P() : l.value;
    }), fe = $(() => {
      const {
        content: P
      } = e;
      return P ? P() : s.value;
    }), we = (P, W) => {
      if (!e.scrollable) return;
      if (typeof P == "number") {
        Pe(P, W ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: J,
        top: se,
        index: de,
        elSize: ge,
        position: me,
        behavior: Se,
        el: Le,
        debounce: ot = !0
      } = P;
      (J !== void 0 || se !== void 0) && Pe(J ?? 0, se ?? 0, 0, !1, Se), Le !== void 0 ? Pe(0, Le.offsetTop, Le.offsetHeight, ot, Se) : de !== void 0 && ge !== void 0 ? Pe(0, de * ge, ge, ot, Se) : me === "bottom" ? Pe(0, Number.MAX_SAFE_INTEGER, 0, !1, Se) : me === "top" && Pe(0, 0, 0, !1, Se);
    }, G = zh(() => {
      e.container || we({
        top: x.value,
        left: b.value
      });
    }), ue = () => {
      G.isDeactivated || he();
    }, Fe = (P) => {
      if (G.isDeactivated) return;
      const {
        onResize: W
      } = e;
      W && W(P), he();
    }, be = (P, W) => {
      if (!e.scrollable) return;
      const {
        value: J
      } = le;
      J && (typeof P == "object" ? J.scrollBy(P) : J.scrollBy(P, W || 0));
    };
    function Pe(P, W, J, se, de) {
      const {
        value: ge
      } = le;
      if (ge) {
        if (se) {
          const {
            scrollTop: me,
            offsetHeight: Se
          } = ge;
          if (W > me) {
            W + J <= me + Se || ge.scrollTo({
              left: P,
              top: W + J - Se,
              behavior: de
            });
            return;
          }
        }
        ge.scrollTo({
          left: P,
          top: W,
          behavior: de
        });
      }
    }
    function ze() {
      xe(), ye(), he();
    }
    function st() {
      et();
    }
    function et() {
      ft(), ht();
    }
    function ft() {
      w !== void 0 && window.clearTimeout(w), w = window.setTimeout(() => {
        S.value = !1;
      }, e.duration);
    }
    function ht() {
      R !== void 0 && window.clearTimeout(R), R = window.setTimeout(() => {
        y.value = !1;
      }, e.duration);
    }
    function xe() {
      R !== void 0 && window.clearTimeout(R), y.value = !0;
    }
    function ye() {
      w !== void 0 && window.clearTimeout(w), S.value = !0;
    }
    function $e(P) {
      const {
        onScroll: W
      } = e;
      W && W(P), Ie();
    }
    function Ie() {
      const {
        value: P
      } = le;
      P && (x.value = P.scrollTop, b.value = P.scrollLeft * (i != null && i.value ? -1 : 1));
    }
    function Qe() {
      const {
        value: P
      } = fe;
      P && (c.value = P.offsetHeight, v.value = P.offsetWidth);
      const {
        value: W
      } = le;
      W && (g.value = W.offsetHeight, m.value = W.offsetWidth);
      const {
        value: J
      } = u, {
        value: se
      } = d;
      J && (p.value = J.offsetWidth), se && (h.value = se.offsetHeight);
    }
    function oe() {
      const {
        value: P
      } = le;
      P && (x.value = P.scrollTop, b.value = P.scrollLeft * (i != null && i.value ? -1 : 1), g.value = P.offsetHeight, m.value = P.offsetWidth, c.value = P.scrollHeight, v.value = P.scrollWidth);
      const {
        value: W
      } = u, {
        value: J
      } = d;
      W && (p.value = W.offsetWidth), J && (h.value = J.offsetHeight);
    }
    function he() {
      e.scrollable && (e.useUnifiedContainer ? oe() : (Qe(), Ie()));
    }
    function Te(P) {
      var W;
      return !(!((W = a.value) === null || W === void 0) && W.contains($r(P)));
    }
    function dt(P) {
      P.preventDefault(), P.stopPropagation(), k = !0, Ke("mousemove", window, $t, !0), Ke("mouseup", window, At, !0), F = b.value, A = i != null && i.value ? window.innerWidth - P.clientX : P.clientX;
    }
    function $t(P) {
      if (!k) return;
      R !== void 0 && window.clearTimeout(R), w !== void 0 && window.clearTimeout(w);
      const {
        value: W
      } = m, {
        value: J
      } = v, {
        value: se
      } = H;
      if (W === null || J === null) return;
      const ge = (i != null && i.value ? window.innerWidth - P.clientX - A : P.clientX - A) * (J - W) / (W - se), me = J - W;
      let Se = F + ge;
      Se = Math.min(me, Se), Se = Math.max(Se, 0);
      const {
        value: Le
      } = le;
      if (Le) {
        Le.scrollLeft = Se * (i != null && i.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: ot
        } = e;
        ot && ot(Se);
      }
    }
    function At(P) {
      P.preventDefault(), P.stopPropagation(), We("mousemove", window, $t, !0), We("mouseup", window, At, !0), k = !1, he(), Te(P) && et();
    }
    function mt(P) {
      P.preventDefault(), P.stopPropagation(), C = !0, Ke("mousemove", window, rt, !0), Ke("mouseup", window, wt, !0), B = x.value, V = P.clientY;
    }
    function rt(P) {
      if (!C) return;
      R !== void 0 && window.clearTimeout(R), w !== void 0 && window.clearTimeout(w);
      const {
        value: W
      } = g, {
        value: J
      } = c, {
        value: se
      } = D;
      if (W === null || J === null) return;
      const ge = (P.clientY - V) * (J - W) / (W - se), me = J - W;
      let Se = B + ge;
      Se = Math.min(me, Se), Se = Math.max(Se, 0);
      const {
        value: Le
      } = le;
      Le && (Le.scrollTop = Se);
    }
    function wt(P) {
      P.preventDefault(), P.stopPropagation(), We("mousemove", window, rt, !0), We("mouseup", window, wt, !0), C = !1, he(), Te(P) && et();
    }
    it(() => {
      const {
        value: P
      } = q, {
        value: W
      } = j, {
        value: J
      } = t, {
        value: se
      } = u, {
        value: de
      } = d;
      se && (P ? se.classList.remove(`${J}-scrollbar-rail--disabled`) : se.classList.add(`${J}-scrollbar-rail--disabled`)), de && (W ? de.classList.remove(`${J}-scrollbar-rail--disabled`) : de.classList.add(`${J}-scrollbar-rail--disabled`));
    }), Pt(() => {
      e.container || he();
    }), kt(() => {
      R !== void 0 && window.clearTimeout(R), w !== void 0 && window.clearTimeout(w), We("mousemove", window, rt, !0), We("mouseup", window, wt, !0);
    });
    const tt = $(() => {
      const {
        common: {
          cubicBezierEaseInOut: P
        },
        self: {
          color: W,
          colorHover: J,
          height: se,
          width: de,
          borderRadius: ge,
          railInsetHorizontalTop: me,
          railInsetHorizontalBottom: Se,
          railInsetVerticalRight: Le,
          railInsetVerticalLeft: ot,
          railColor: Ve
        }
      } = n.value, {
        top: Et,
        right: It,
        bottom: Lt,
        left: Vt
      } = Nt(me), {
        top: Kt,
        right: tn,
        bottom: Ut,
        left: _
      } = Nt(Se), {
        top: Q,
        right: Ce,
        bottom: Oe,
        left: qe
      } = Nt(i != null && i.value ? ds(Le) : Le), {
        top: Ne,
        right: at,
        bottom: vt,
        left: Yt
      } = Nt(i != null && i.value ? ds(ot) : ot);
      return {
        "--n-scrollbar-bezier": P,
        "--n-scrollbar-color": W,
        "--n-scrollbar-color-hover": J,
        "--n-scrollbar-border-radius": ge,
        "--n-scrollbar-width": de,
        "--n-scrollbar-height": se,
        "--n-scrollbar-rail-top-horizontal-top": Et,
        "--n-scrollbar-rail-right-horizontal-top": It,
        "--n-scrollbar-rail-bottom-horizontal-top": Lt,
        "--n-scrollbar-rail-left-horizontal-top": Vt,
        "--n-scrollbar-rail-top-horizontal-bottom": Kt,
        "--n-scrollbar-rail-right-horizontal-bottom": tn,
        "--n-scrollbar-rail-bottom-horizontal-bottom": Ut,
        "--n-scrollbar-rail-left-horizontal-bottom": _,
        "--n-scrollbar-rail-top-vertical-right": Q,
        "--n-scrollbar-rail-right-vertical-right": Ce,
        "--n-scrollbar-rail-bottom-vertical-right": Oe,
        "--n-scrollbar-rail-left-vertical-right": qe,
        "--n-scrollbar-rail-top-vertical-left": Ne,
        "--n-scrollbar-rail-right-vertical-left": at,
        "--n-scrollbar-rail-bottom-vertical-left": vt,
        "--n-scrollbar-rail-left-vertical-left": Yt,
        "--n-scrollbar-rail-color": Ve
      };
    }), ce = r ? Ze("scrollbar", void 0, tt, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: we,
      scrollBy: be,
      sync: he,
      syncUnifiedContainer: oe,
      handleMouseEnterWrapper: ze,
      handleMouseLeaveWrapper: st
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
      yBarSizePx: E,
      xBarSizePx: L,
      yBarTopPx: te,
      xBarLeftPx: U,
      isShowXBar: Y,
      isShowYBar: ae,
      isIos: O,
      handleScroll: $e,
      handleContentResize: ue,
      handleContainerResize: Fe,
      handleYScrollMouseDown: mt,
      handleXScrollMouseDown: dt,
      cssVars: r ? void 0 : tt,
      themeClass: ce == null ? void 0 : ce.themeClass,
      onRender: ce == null ? void 0 : ce.onRender
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
    }, f(u ? fa : _t, u ? null : {
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
      return (m = this.onRender) === null || m === void 0 || m.call(this), f("div", Rt(this.$attrs, {
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
      }, f(Ar, {
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
      }, f(u ? fa : _t, u ? null : {
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
    }, g = this.container ? v() : f(Ar, {
      onResize: this.handleContainerResize
    }, {
      default: v
    });
    return a ? f(je, null, g, c(this.themeClass, this.cssVars)) : g;
  }
}), Mu = pr;
function Us(e) {
  return Array.isArray(e) ? e : [e];
}
const Sa = {
  STOP: "STOP"
};
function Iu(e, t) {
  const r = t(e);
  e.children !== void 0 && r !== Sa.STOP && e.children.forEach((o) => Iu(o, t));
}
function Mx(e, t = {}) {
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
function Ix(e, t) {
  const { isLeaf: r } = e;
  return r !== void 0 ? r : !t(e);
}
function Lx(e) {
  return e.children;
}
function Nx(e) {
  return e.key;
}
function Hx() {
  return !1;
}
function jx(e, t) {
  const { isLeaf: r } = e;
  return !(r === !1 && !Array.isArray(t(e)));
}
function _x(e) {
  return e.disabled === !0;
}
function Wx(e, t) {
  return e.isLeaf === !1 && !Array.isArray(t(e));
}
function Vx(e, t) {
  if (e.isLeaf === !0) {
    const r = t(e);
    if (Array.isArray(r) && r.length > 0)
      return !0;
  }
  return !1;
}
function Yi(e) {
  var t;
  return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : [];
}
function Zi(e) {
  var t;
  return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : [];
}
function Kx(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) || r.add(o);
  }), Array.from(r);
}
function Ux(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) && r.delete(o);
  }), Array.from(r);
}
function qx(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function Gx(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r, o) => {
    t.set(r.key, o);
  }), (r) => {
    var o;
    return (o = t.get(r)) !== null && o !== void 0 ? o : null;
  };
}
class Xx extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function Yx(e, t, r, o) {
  return ii(t.concat(e), r, o, !1);
}
function Zx(e, t) {
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
function Jx(e, t, r, o) {
  const i = ii(t, r, o, !1), a = ii(e, r, o, !0), l = Zx(e, r), s = [];
  return i.forEach((d) => {
    (a.has(d) || l.has(d)) && s.push(d);
  }), s.forEach((d) => i.delete(d)), i;
}
function Ji(e, t) {
  const { checkedKeys: r, keysToCheck: o, keysToUncheck: i, indeterminateKeys: a, cascade: l, leafOnly: s, checkStrategy: d, allowNotLoaded: u } = e;
  if (!l)
    return o !== void 0 ? {
      checkedKeys: Kx(r, o),
      indeterminateKeys: Array.from(a)
    } : i !== void 0 ? {
      checkedKeys: Ux(r, i),
      indeterminateKeys: Array.from(a)
    } : {
      checkedKeys: Array.from(r),
      indeterminateKeys: Array.from(a)
    };
  const { levelTreeNodeMap: c } = t;
  let v;
  i !== void 0 ? v = Jx(i, r, t, u) : o !== void 0 ? v = Yx(o, r, t, u) : v = ii(r, t, u, !1);
  const g = d === "parent", m = d === "child" || s, h = v, p = /* @__PURE__ */ new Set(), x = Math.max.apply(null, Array.from(c.keys()));
  for (let b = x; b >= 0; b -= 1) {
    const y = b === 0, S = c.get(b);
    for (const C of S) {
      if (C.isLeaf)
        continue;
      const { key: k, shallowLoaded: R } = C;
      if (m && R && C.children.forEach((A) => {
        !A.disabled && !A.isLeaf && A.shallowLoaded && h.has(A.key) && h.delete(A.key);
      }), C.disabled || !R)
        continue;
      let w = !0, B = !1, F = !0;
      for (const A of C.children) {
        const V = A.key;
        if (!A.disabled) {
          if (F && (F = !1), h.has(V))
            B = !0;
          else if (p.has(V)) {
            B = !0, w = !1;
            break;
          } else if (w = !1, B)
            break;
        }
      }
      w && !F ? (g && C.children.forEach((A) => {
        !A.disabled && h.has(A.key) && h.delete(A.key);
      }), h.add(k)) : B && p.add(k), y && m && h.has(k) && h.delete(k);
    }
  }
  return {
    checkedKeys: Array.from(h),
    indeterminateKeys: Array.from(p)
  };
}
function ii(e, t, r, o) {
  const { treeNodeMap: i, getChildren: a } = t, l = /* @__PURE__ */ new Set(), s = new Set(e);
  return e.forEach((d) => {
    const u = i.get(d);
    u !== void 0 && Iu(u, (c) => {
      if (c.disabled)
        return Sa.STOP;
      const { key: v } = c;
      if (!l.has(v) && (l.add(v), s.add(v), Wx(c.rawNode, a))) {
        if (o)
          return Sa.STOP;
        if (!r)
          throw new Xx();
      }
    });
  }), s;
}
function Qx(e, { includeGroup: t = !1, includeSelf: r = !0 }, o) {
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
function e1(e) {
  if (e.length === 0)
    return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function t1(e, t) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return t ? r[(i + 1) % o] : i === r.length - 1 ? null : r[i + 1];
}
function qs(e, t, { loop: r = !1, includeDisabled: o = !1 } = {}) {
  const i = t === "prev" ? n1 : t1, a = {
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
        const c = gl(u, a);
        c !== null ? s = c : d(i(u, r));
      } else {
        const c = i(u, !1);
        if (c !== null)
          d(c);
        else {
          const v = r1(u);
          v != null && v.isGroup ? d(i(v, r)) : r && d(i(u, !0));
        }
      }
    }
  }
  return d(e), s;
}
function n1(e, t) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return t ? r[(i - 1 + o) % o] : i === 0 ? null : r[i - 1];
}
function r1(e) {
  return e.parent;
}
function gl(e, t = {}) {
  const { reverse: r = !1 } = t, { children: o } = e;
  if (o) {
    const { length: i } = o, a = r ? i - 1 : 0, l = r ? -1 : i, s = r ? -1 : 1;
    for (let d = a; d !== l; d += s) {
      const u = o[d];
      if (!u.disabled && !u.ignored)
        if (u.isGroup) {
          const c = gl(u, t);
          if (c !== null)
            return c;
        } else
          return u;
    }
  }
  return null;
}
const o1 = {
  getChild() {
    return this.ignored ? null : gl(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return qs(this, "next", e);
  },
  getPrev(e = {}) {
    return qs(this, "prev", e);
  }
};
function i1(e, t) {
  const r = t ? new Set(t) : void 0, o = [];
  function i(a) {
    a.forEach((l) => {
      o.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || // normal non-leaf node
      r === void 0 || r.has(l.key)) && i(l.children);
    });
  }
  return i(e), o;
}
function a1(e, t) {
  const r = e.key;
  for (; t; ) {
    if (t.key === r)
      return !0;
    t = t.parent;
  }
  return !1;
}
function Lu(e, t, r, o, i, a = null, l = 0) {
  const s = [];
  return e.forEach((d, u) => {
    var c;
    process.env.NODE_ENV !== "production" && Vx(d, i) && console.error("[treemate]: node", d, "is invalid");
    const v = Object.create(o);
    if (v.rawNode = d, v.siblings = s, v.level = l, v.index = u, v.isFirstChild = u === 0, v.isLastChild = u + 1 === e.length, v.parent = a, !v.ignored) {
      const g = i(d);
      Array.isArray(g) && (v.children = Lu(g, t, r, o, i, v, l + 1));
    }
    s.push(v), t.set(v.key, v), r.has(l) || r.set(l, []), (c = r.get(l)) === null || c === void 0 || c.push(v);
  }), s;
}
function yi(e, t = {}) {
  var r;
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), { getDisabled: a = _x, getIgnored: l = Hx, getIsGroup: s = qx, getKey: d = Nx } = t, u = (r = t.getChildren) !== null && r !== void 0 ? r : Lx, c = t.ignoreEmptyChildren ? (C) => {
    const k = u(C);
    return Array.isArray(k) ? k.length ? k : null : k;
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
      return Ix(this.rawNode, c);
    },
    get shallowLoaded() {
      return jx(this.rawNode, c);
    },
    get ignored() {
      return l(this.rawNode);
    },
    contains(C) {
      return a1(this, C);
    }
  }, o1), g = Lu(e, o, i, v, c);
  function m(C) {
    if (C == null)
      return null;
    const k = o.get(C);
    return k && !k.isGroup && !k.ignored ? k : null;
  }
  function h(C) {
    if (C == null)
      return null;
    const k = o.get(C);
    return k && !k.ignored ? k : null;
  }
  function p(C, k) {
    const R = h(C);
    return R ? R.getPrev(k) : null;
  }
  function x(C, k) {
    const R = h(C);
    return R ? R.getNext(k) : null;
  }
  function b(C) {
    const k = h(C);
    return k ? k.getParent() : null;
  }
  function y(C) {
    const k = h(C);
    return k ? k.getChild() : null;
  }
  const S = {
    treeNodes: g,
    treeNodeMap: o,
    levelTreeNodeMap: i,
    maxLevel: Math.max(...i.keys()),
    getChildren: c,
    getFlattenedNodes(C) {
      return i1(g, C);
    },
    getNode: m,
    getPrev: p,
    getNext: x,
    getParent: b,
    getChild: y,
    getFirstAvailableNode() {
      return e1(g);
    },
    getPath(C, k = {}) {
      return Qx(C, k, S);
    },
    getCheckedKeys(C, k = {}) {
      const { cascade: R = !0, leafOnly: w = !1, checkStrategy: B = "all", allowNotLoaded: F = !1 } = k;
      return Ji({
        checkedKeys: Yi(C),
        indeterminateKeys: Zi(C),
        cascade: R,
        leafOnly: w,
        checkStrategy: B,
        allowNotLoaded: F
      }, S);
    },
    check(C, k, R = {}) {
      const { cascade: w = !0, leafOnly: B = !1, checkStrategy: F = "all", allowNotLoaded: A = !1 } = R;
      return Ji({
        checkedKeys: Yi(k),
        indeterminateKeys: Zi(k),
        keysToCheck: C == null ? [] : Us(C),
        cascade: w,
        leafOnly: B,
        checkStrategy: F,
        allowNotLoaded: A
      }, S);
    },
    uncheck(C, k, R = {}) {
      const { cascade: w = !0, leafOnly: B = !1, checkStrategy: F = "all", allowNotLoaded: A = !1 } = R;
      return Ji({
        checkedKeys: Yi(k),
        indeterminateKeys: Zi(k),
        keysToUncheck: C == null ? [] : Us(C),
        cascade: w,
        leafOnly: B,
        checkStrategy: F,
        allowNotLoaded: A
      }, S);
    },
    getNonLeafKeys(C = {}) {
      return Mx(g, C);
    }
  };
  return S;
}
const l1 = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function s1(e) {
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
  return Object.assign(Object.assign({}, l1), {
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
const pl = {
  name: "Empty",
  common: Je,
  self: s1
}, d1 = z("empty", `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [T("icon", `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [M("+", [T("description", `
 margin-top: 8px;
 `)])]), T("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), T("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]), u1 = Object.assign(Object.assign({}, ve.props), {
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
}), Er = ee({
  name: "Empty",
  props: u1,
  slots: Object,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r,
      mergedComponentPropsRef: o
    } = Ae(e), i = ve("Empty", "-empty", d1, pl, e, t), {
      localeRef: a
    } = ir("Empty"), l = $(() => {
      var c, v, g;
      return (c = e.description) !== null && c !== void 0 ? c : (g = (v = o == null ? void 0 : o.value) === null || v === void 0 ? void 0 : v.Empty) === null || g === void 0 ? void 0 : g.description;
    }), s = $(() => {
      var c, v;
      return ((v = (c = o == null ? void 0 : o.value) === null || c === void 0 ? void 0 : c.Empty) === null || v === void 0 ? void 0 : v.renderIcon) || (() => f(yx, null));
    }), d = $(() => {
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
    }), u = r ? Ze("empty", $(() => {
      let c = "";
      const {
        size: v
      } = e;
      return c += v[0], c;
    }), d, e) : void 0;
    return {
      mergedClsPrefix: t,
      mergedRenderIcon: s,
      localizedDescription: $(() => l.value || a.value.description),
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
    }, e.icon ? e.icon() : f(xt, {
      clsPrefix: t
    }, {
      default: this.mergedRenderIcon
    })) : null, this.showDescription ? f("div", {
      class: `${t}-empty__description`
    }, e.default ? e.default() : this.localizedDescription) : null, e.extra ? f("div", {
      class: `${t}-empty__extra`
    }, e.extra()) : null);
  }
}), c1 = {
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
function f1(e) {
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
    heightLarge: S,
    heightHuge: C
  } = e;
  return Object.assign(Object.assign({}, c1), {
    optionFontSizeTiny: v,
    optionFontSizeSmall: g,
    optionFontSizeMedium: m,
    optionFontSizeLarge: h,
    optionFontSizeHuge: p,
    optionHeightTiny: x,
    optionHeightSmall: b,
    optionHeightMedium: y,
    optionHeightLarge: S,
    optionHeightHuge: C,
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
const ml = {
  name: "InternalSelectMenu",
  common: Je,
  peers: {
    Scrollbar: ko,
    Empty: pl
  },
  self: f1
}, Gs = ee({
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
    } = pe(Va);
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
function h1(e, t) {
  return f(_t, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => e ? f(xt, {
      clsPrefix: t,
      class: `${t}-base-select-option__check`
    }, {
      default: () => f(px)
    }) : null
  });
}
const Xs = ee({
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
    } = pe(Va), m = Ue(() => {
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
        value: S
      } = m;
      y.disabled || S || g(b, y);
    }
    return {
      multiple: o,
      isGrouped: Ue(() => {
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
      isSelected: Ue(() => {
        const {
          value: b
        } = t, {
          value: y
        } = o;
        if (b === null) return !1;
        const S = e.tmNode.rawNode[d.value];
        if (y) {
          const {
            value: C
          } = i;
          return C.has(S);
        } else
          return b === S;
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
    } = this, g = h1(r, e), m = d ? [d(t, r), a && g] : [gt(t[this.labelField], t, r), a && g], h = l == null ? void 0 : l(t), p = f("div", Object.assign({}, h, {
      class: [`${e}-base-select-option`, t.class, h == null ? void 0 : h.class, {
        [`${e}-base-select-option--disabled`]: t.disabled,
        [`${e}-base-select-option--selected`]: r,
        [`${e}-base-select-option--grouped`]: i,
        [`${e}-base-select-option--pending`]: o,
        [`${e}-base-select-option--show-checkmark`]: a
      }],
      style: [(h == null ? void 0 : h.style) || "", t.style || ""],
      onClick: ao([u, h == null ? void 0 : h.onClick]),
      onMouseenter: ao([c, h == null ? void 0 : h.onMouseenter]),
      onMousemove: ao([v, h == null ? void 0 : h.onMousemove])
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
  cubicBezierEaseIn: Ys,
  cubicBezierEaseOut: Zs
} = Vn;
function Ro({
  transformOrigin: e = "inherit",
  duration: t = ".2s",
  enterScale: r = ".9",
  originalTransform: o = "",
  originalTransition: i = ""
} = {}) {
  return [M("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${t} ${Ys}, transform ${t} ${Ys} ${i && `,${i}`}`
  }), M("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${t} ${Zs}, transform ${t} ${Zs} ${i && `,${i}`}`
  }), M("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${o} scale(${r})`
  }), M("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${o} scale(1)`
  })];
}
const v1 = z("base-select-menu", `
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
 `, [T("content", `
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
 `), T("loading, empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), T("loading", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), T("header", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), T("action", `
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
 `), M("&::before", `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), M("&:active", `
 color: var(--n-option-text-color-pressed);
 `), N("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), N("pending", [M("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), N("selected", `
 color: var(--n-option-text-color-active);
 `, [M("&::before", `
 background-color: var(--n-option-color-active);
 `), N("pending", [M("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), N("disabled", `
 cursor: not-allowed;
 `, [Ye("selected", `
 color: var(--n-option-text-color-disabled);
 `), N("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), T("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [Ro({
  enterScale: "0.5"
})])])]), Nu = ee({
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
    } = Ae(e), o = zt("InternalSelectMenu", r, t), i = ve("InternalSelectMenu", "-internal-select-menu", v1, ml, e, ie(e, "clsPrefix")), a = I(null), l = I(null), s = I(null), d = $(() => e.treeMate.getFlattenedNodes()), u = $(() => Gx(d.value)), c = I(null);
    function v() {
      const {
        treeMate: j
      } = e;
      let q = null;
      const {
        value: Y
      } = e;
      Y === null ? q = j.getFirstAvailableNode() : (e.multiple ? q = j.getNode((Y || [])[(Y || []).length - 1]) : q = j.getNode(Y), (!q || q.disabled) && (q = j.getFirstAvailableNode())), D(q || null);
    }
    function g() {
      const {
        value: j
      } = c;
      j && !e.treeMate.getNode(j.key) && (c.value = null);
    }
    let m;
    He(() => e.show, (j) => {
      j ? m = He(() => e.treeMate, () => {
        e.resetMenuOnOptionsChange ? (e.autoPending ? v() : g(), pt(E)) : g();
      }, {
        immediate: !0
      }) : m == null || m();
    }, {
      immediate: !0
    }), kt(() => {
      m == null || m();
    });
    const h = $(() => Dt(i.value.self[Z("optionHeight", e.size)])), p = $(() => Nt(i.value.self[Z("padding", e.size)])), x = $(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), b = $(() => {
      const j = d.value;
      return j && j.length === 0;
    });
    function y(j) {
      const {
        onToggle: q
      } = e;
      q && q(j);
    }
    function S(j) {
      const {
        onScroll: q
      } = e;
      q && q(j);
    }
    function C(j) {
      var q;
      (q = s.value) === null || q === void 0 || q.sync(), S(j);
    }
    function k() {
      var j;
      (j = s.value) === null || j === void 0 || j.sync();
    }
    function R() {
      const {
        value: j
      } = c;
      return j || null;
    }
    function w(j, q) {
      q.disabled || D(q, !1);
    }
    function B(j, q) {
      q.disabled || y(q);
    }
    function F(j) {
      var q;
      Gt(j, "action") || (q = e.onKeyup) === null || q === void 0 || q.call(e, j);
    }
    function A(j) {
      var q;
      Gt(j, "action") || (q = e.onKeydown) === null || q === void 0 || q.call(e, j);
    }
    function V(j) {
      var q;
      (q = e.onMousedown) === null || q === void 0 || q.call(e, j), !e.focusable && j.preventDefault();
    }
    function O() {
      const {
        value: j
      } = c;
      j && D(j.getNext({
        loop: !0
      }), !0);
    }
    function n() {
      const {
        value: j
      } = c;
      j && D(j.getPrev({
        loop: !0
      }), !0);
    }
    function D(j, q = !1) {
      c.value = j, q && E();
    }
    function E() {
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
    Ee(Va, {
      handleOptionMouseEnter: w,
      handleOptionClick: B,
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
    }), Ee(Od, a), Pt(() => {
      const {
        value: j
      } = s;
      j && j.sync();
    });
    const K = $(() => {
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
          groupHeaderTextColor: fe,
          actionDividerColor: we,
          optionTextColorPressed: G,
          optionTextColor: ue,
          optionTextColorDisabled: Fe,
          optionTextColorActive: be,
          optionOpacityDisabled: Pe,
          optionCheckColor: ze,
          actionTextColor: st,
          optionColorPending: et,
          optionColorActive: ft,
          loadingColor: ht,
          loadingSize: xe,
          optionColorActivePending: ye,
          [Z("optionFontSize", j)]: $e,
          [Z("optionHeight", j)]: Ie,
          [Z("optionPadding", j)]: Qe
        }
      } = i.value;
      return {
        "--n-height": Y,
        "--n-action-divider-color": we,
        "--n-action-text-color": st,
        "--n-bezier": q,
        "--n-border-radius": ae,
        "--n-color": le,
        "--n-option-font-size": $e,
        "--n-group-header-text-color": fe,
        "--n-option-check-color": ze,
        "--n-option-color-pending": et,
        "--n-option-color-active": ft,
        "--n-option-color-active-pending": ye,
        "--n-option-height": Ie,
        "--n-option-opacity-disabled": Pe,
        "--n-option-text-color": ue,
        "--n-option-text-color-active": be,
        "--n-option-text-color-disabled": Fe,
        "--n-option-text-color-pressed": G,
        "--n-option-padding": Qe,
        "--n-option-padding-left": Nt(Qe, "left"),
        "--n-option-padding-right": Nt(Qe, "right"),
        "--n-loading-color": ht,
        "--n-loading-size": xe
      };
    }), {
      inlineThemeDisabled: te
    } = e, X = te ? Ze("internal-select-menu", $(() => e.size[0]), K, e) : void 0, U = {
      selfRef: a,
      next: O,
      prev: n,
      getPendingTmNode: R
    };
    return eu(a, e.onResize), Object.assign({
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
      doScroll: S,
      handleFocusin: H,
      handleFocusout: L,
      handleKeyUp: F,
      handleKeyDown: A,
      handleMouseDown: V,
      handleVirtualListResize: k,
      handleVirtualListScroll: C,
      cssVars: te ? void 0 : K,
      themeClass: X == null ? void 0 : X.themeClass,
      onRender: X == null ? void 0 : X.onRender
    }, U);
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
    }, _e(e.header, (l) => l && f("div", {
      class: `${r}-base-select-menu__header`,
      "data-header": !0,
      key: "header"
    }, l)), this.loading ? f("div", {
      class: `${r}-base-select-menu__loading`
    }, f(Un, {
      clsPrefix: r,
      strokeWidth: 20
    })) : this.empty ? f("div", {
      class: `${r}-base-select-menu__empty`,
      "data-empty": !0
    }, en(e.empty, () => [f(Er, {
      theme: o.peers.Empty,
      themeOverrides: o.peerOverrides.Empty,
      size: this.size
    })])) : f(pr, {
      ref: "scrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: t ? this.virtualListContainer : void 0,
      content: t ? this.virtualListContent : void 0,
      onScroll: t ? void 0 : this.doScroll
    }, {
      default: () => t ? f(Ja, {
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
        }) => l.isGroup ? f(Gs, {
          key: l.key,
          clsPrefix: r,
          tmNode: l
        }) : l.ignored ? null : f(Xs, {
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
      }, this.flattenedNodes.map((l) => l.isGroup ? f(Gs, {
        key: l.key,
        clsPrefix: r,
        tmNode: l
      }) : f(Xs, {
        clsPrefix: r,
        key: l.key,
        tmNode: l
      })))
    }), _e(e.action, (l) => l && [f("div", {
      class: `${r}-base-select-menu__action`,
      "data-action": !0,
      key: "action"
    }, l), f(Fx, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
}), g1 = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function p1(e) {
  const {
    boxShadow2: t,
    popoverColor: r,
    textColor2: o,
    borderRadius: i,
    fontSize: a,
    dividerColor: l
  } = e;
  return Object.assign(Object.assign({}, g1), {
    fontSize: a,
    borderRadius: i,
    color: r,
    dividerColor: l,
    textColor: o,
    boxShadow: t
  });
}
const mr = {
  name: "Popover",
  common: Je,
  self: p1
}, Qi = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, St = "var(--n-arrow-height) * 1.414", m1 = M([z("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [M(">", [z("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Ye("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [Ye("scrollable", [Ye("show-header-or-footer", "padding: var(--n-padding);")])]), T("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), T("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), N("scrollable, show-header-or-footer", [T("content", `
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
 width: calc(${St});
 height: calc(${St});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
  // body transition
  M("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  M("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  M("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  M("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), nn("top-start", `
 top: calc(${St} / -2);
 left: calc(${Sn("top-start")} - var(--v-offset-left));
 `), nn("top", `
 top: calc(${St} / -2);
 transform: translateX(calc(${St} / -2)) rotate(45deg);
 left: 50%;
 `), nn("top-end", `
 top: calc(${St} / -2);
 right: calc(${Sn("top-end")} + var(--v-offset-left));
 `), nn("bottom-start", `
 bottom: calc(${St} / -2);
 left: calc(${Sn("bottom-start")} - var(--v-offset-left));
 `), nn("bottom", `
 bottom: calc(${St} / -2);
 transform: translateX(calc(${St} / -2)) rotate(45deg);
 left: 50%;
 `), nn("bottom-end", `
 bottom: calc(${St} / -2);
 right: calc(${Sn("bottom-end")} + var(--v-offset-left));
 `), nn("left-start", `
 left: calc(${St} / -2);
 top: calc(${Sn("left-start")} - var(--v-offset-top));
 `), nn("left", `
 left: calc(${St} / -2);
 transform: translateY(calc(${St} / -2)) rotate(45deg);
 top: 50%;
 `), nn("left-end", `
 left: calc(${St} / -2);
 bottom: calc(${Sn("left-end")} + var(--v-offset-top));
 `), nn("right-start", `
 right: calc(${St} / -2);
 top: calc(${Sn("right-start")} - var(--v-offset-top));
 `), nn("right", `
 right: calc(${St} / -2);
 transform: translateY(calc(${St} / -2)) rotate(45deg);
 top: 50%;
 `), nn("right-end", `
 right: calc(${St} / -2);
 bottom: calc(${Sn("right-end")} + var(--v-offset-top));
 `), ...ux({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, t) => {
  const r = ["right", "left"].includes(t), o = r ? "width" : "height";
  return e.map((i) => {
    const a = i.split("-")[1] === "end", s = `calc((${`var(--v-target-${o}, 0px)`} - ${St}) / 2)`, d = Sn(i);
    return M(`[v-placement="${i}"] >`, [z("popover-shared", [N("center-arrow", [z("popover-arrow", `${t}: calc(max(${s}, ${d}) ${a ? "+" : "-"} var(--v-offset-${r ? "left" : "top"}));`)])])]);
  });
})]);
function Sn(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function nn(e, t) {
  const r = e.split("-")[0], o = ["top", "bottom"].includes(r) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return M(`[v-placement="${e}"] >`, [z("popover-shared", `
 margin-${Qi[r]}: var(--n-space);
 `, [N("show-arrow", `
 margin-${Qi[r]}: var(--n-space-arrow);
 `), N("overlap", `
 margin: 0;
 `), nh("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${Qi[r]}: auto;
 ${o}
 `, [z("popover-arrow", t)])])]);
}
const Hu = Object.assign(Object.assign({}, ve.props), {
  to: bn.propTo,
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
function ju({
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
const b1 = ee({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: Hu,
  setup(e, {
    slots: t,
    attrs: r
  }) {
    const {
      namespaceRef: o,
      mergedClsPrefixRef: i,
      inlineThemeDisabled: a
    } = Ae(e), l = ve("Popover", "-popover", m1, mr, e, i), s = I(null), d = pe("NPopover"), u = I(null), c = I(e.show), v = I(!1);
    it(() => {
      const {
        show: w
      } = e;
      w && !C0() && !e.internalDeactivateImmediately && (v.value = !0);
    });
    const g = $(() => {
      const {
        trigger: w,
        onClickoutside: B
      } = e, F = [], {
        positionManuallyRef: {
          value: A
        }
      } = d;
      return A || (w === "click" && !B && F.push([fo, C, void 0, {
        capture: !0
      }]), w === "hover" && F.push([Dh, S])), B && F.push([fo, C, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && v.value) && F.push([zr, e.show]), F;
    }), m = $(() => {
      const {
        common: {
          cubicBezierEaseInOut: w,
          cubicBezierEaseIn: B,
          cubicBezierEaseOut: F
        },
        self: {
          space: A,
          spaceArrow: V,
          padding: O,
          fontSize: n,
          textColor: D,
          dividerColor: E,
          color: H,
          boxShadow: L,
          borderRadius: K,
          arrowHeight: te,
          arrowOffset: X,
          arrowOffsetVertical: U
        }
      } = l.value;
      return {
        "--n-box-shadow": L,
        "--n-bezier": w,
        "--n-bezier-ease-in": B,
        "--n-bezier-ease-out": F,
        "--n-font-size": n,
        "--n-text-color": D,
        "--n-color": H,
        "--n-divider-color": E,
        "--n-border-radius": K,
        "--n-arrow-height": te,
        "--n-arrow-offset": X,
        "--n-arrow-offset-vertical": U,
        "--n-padding": O,
        "--n-space": A,
        "--n-space-arrow": V
      };
    }), h = $(() => {
      const w = e.width === "trigger" ? void 0 : Ct(e.width), B = [];
      w && B.push({
        width: w
      });
      const {
        maxWidth: F,
        minWidth: A
      } = e;
      return F && B.push({
        maxWidth: Ct(F)
      }), A && B.push({
        maxWidth: Ct(A)
      }), a || B.push(m.value), B;
    }), p = a ? Ze("popover", void 0, m, e) : void 0;
    d.setBodyInstance({
      syncPosition: x
    }), kt(() => {
      d.setBodyInstance(null);
    }), He(ie(e, "show"), (w) => {
      e.animated || (w ? c.value = !0 : c.value = !1);
    });
    function x() {
      var w;
      (w = s.value) === null || w === void 0 || w.syncPosition();
    }
    function b(w) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && d.handleMouseEnter(w);
    }
    function y(w) {
      e.trigger === "hover" && e.keepAliveOnHover && d.handleMouseLeave(w);
    }
    function S(w) {
      e.trigger === "hover" && !k().contains($r(w)) && d.handleMouseMoveOutside(w);
    }
    function C(w) {
      (e.trigger === "click" && !k().contains($r(w)) || e.onClickoutside) && d.handleClickOutside(w);
    }
    function k() {
      return d.getTriggerElement();
    }
    Ee(wo, u), Ee(hi, null), Ee(vi, null);
    function R() {
      if (p == null || p.onRender(), !(e.displayDirective === "show" || e.show || e.animated && v.value))
        return null;
      let B;
      const F = d.internalRenderBodyRef.value, {
        value: A
      } = i;
      if (F)
        B = F(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${A}-popover-shared`, p == null ? void 0 : p.themeClass.value, e.overlap && `${A}-popover-shared--overlap`, e.showArrow && `${A}-popover-shared--show-arrow`, e.arrowPointToCenter && `${A}-popover-shared--center-arrow`],
          u,
          h.value,
          b,
          y
        );
      else {
        const {
          value: V
        } = d.extraClassRef, {
          internalTrapFocus: O
        } = e, n = !Rr(t.header) || !Rr(t.footer), D = () => {
          var E, H;
          const L = n ? f(je, null, _e(t.header, (X) => X ? f("div", {
            class: [`${A}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, X) : null), _e(t.default, (X) => X ? f("div", {
            class: [`${A}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t) : null), _e(t.footer, (X) => X ? f("div", {
            class: [`${A}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, X) : null)) : e.scrollable ? (E = t.default) === null || E === void 0 ? void 0 : E.call(t) : f("div", {
            class: [`${A}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t), K = e.scrollable ? f(Mu, {
            contentClass: n ? void 0 : `${A}-popover__content ${(H = e.contentClass) !== null && H !== void 0 ? H : ""}`,
            contentStyle: n ? void 0 : e.contentStyle
          }, {
            default: () => L
          }) : L, te = e.showArrow ? ju({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: A
          }) : null;
          return [K, te];
        };
        B = f("div", Rt({
          class: [`${A}-popover`, `${A}-popover-shared`, p == null ? void 0 : p.themeClass.value, V.map((E) => `${A}-${E}`), {
            [`${A}-popover--scrollable`]: e.scrollable,
            [`${A}-popover--show-header-or-footer`]: n,
            [`${A}-popover--raw`]: e.raw,
            [`${A}-popover-shared--overlap`]: e.overlap,
            [`${A}-popover-shared--show-arrow`]: e.showArrow,
            [`${A}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: u,
          style: h.value,
          onKeydown: d.handleKeydown,
          onMouseenter: b,
          onMouseleave: y
        }, r), O ? f(Qd, {
          active: e.show,
          autoFocus: !0
        }, {
          default: D
        }) : D());
      }
      return pn(B, g.value);
    }
    return {
      displayed: v,
      namespace: o,
      isMounted: d.isMountedRef,
      zIndex: d.zIndexRef,
      followerRef: s,
      adjustedTo: bn(e),
      followerEnabled: c,
      renderContentNode: R
    };
  },
  render() {
    return f(Ya, {
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
      teleportDisabled: this.adjustedTo === bn.tdkey
    }, {
      default: () => this.animated ? f(_t, {
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
}), x1 = Object.keys(Hu), y1 = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function C1(e, t, r) {
  y1[t].forEach((o) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const i = e.props[o], a = r[o];
    i ? e.props[o] = (...l) => {
      i(...l), a(...l);
    } : e.props[o] = a;
  });
}
const ar = {
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
  to: bn.propTo,
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
}, w1 = Object.assign(Object.assign(Object.assign({}, ve.props), ar), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), br = ee({
  name: "Popover",
  inheritAttrs: !1,
  props: w1,
  slots: Object,
  __popover__: !0,
  setup(e) {
    process.env.NODE_ENV !== "production" && it(() => {
      e.maxWidth !== void 0 && ct("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && ct("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && ct("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && ct("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && ct("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const t = Lr(), r = I(null), o = $(() => e.show), i = I(e.defaultShow), a = Mt(o, i), l = Ue(() => e.disabled ? !1 : a.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: E
      } = e;
      return !!(E != null && E());
    }, d = () => s() ? !1 : a.value, u = Wa(e, ["arrow", "showArrow"]), c = $(() => e.overlap ? !1 : u.value);
    let v = null;
    const g = I(null), m = I(null), h = Ue(() => e.x !== void 0 && e.y !== void 0);
    function p(E) {
      const {
        "onUpdate:show": H,
        onUpdateShow: L,
        onShow: K,
        onHide: te
      } = e;
      i.value = E, H && re(H, E), L && re(L, E), E && K && re(K, !0), E && te && re(te, !1);
    }
    function x() {
      v && v.syncPosition();
    }
    function b() {
      const {
        value: E
      } = g;
      E && (window.clearTimeout(E), g.value = null);
    }
    function y() {
      const {
        value: E
      } = m;
      E && (window.clearTimeout(E), m.value = null);
    }
    function S() {
      const E = s();
      if (e.trigger === "focus" && !E) {
        if (d()) return;
        p(!0);
      }
    }
    function C() {
      const E = s();
      if (e.trigger === "focus" && !E) {
        if (!d()) return;
        p(!1);
      }
    }
    function k() {
      const E = s();
      if (e.trigger === "hover" && !E) {
        if (y(), g.value !== null || d()) return;
        const H = () => {
          p(!0), g.value = null;
        }, {
          delay: L
        } = e;
        L === 0 ? H() : g.value = window.setTimeout(H, L);
      }
    }
    function R() {
      const E = s();
      if (e.trigger === "hover" && !E) {
        if (b(), m.value !== null || !d()) return;
        const H = () => {
          p(!1), m.value = null;
        }, {
          duration: L
        } = e;
        L === 0 ? H() : m.value = window.setTimeout(H, L);
      }
    }
    function w() {
      R();
    }
    function B(E) {
      var H;
      d() && (e.trigger === "click" && (b(), y(), p(!1)), (H = e.onClickoutside) === null || H === void 0 || H.call(e, E));
    }
    function F() {
      if (e.trigger === "click" && !s()) {
        b(), y();
        const E = !d();
        p(E);
      }
    }
    function A(E) {
      e.internalTrapFocus && E.key === "Escape" && (b(), y(), p(!1));
    }
    function V(E) {
      i.value = E;
    }
    function O() {
      var E;
      return (E = r.value) === null || E === void 0 ? void 0 : E.targetRef;
    }
    function n(E) {
      v = E;
    }
    return Ee("NPopover", {
      getTriggerElement: O,
      handleKeydown: A,
      handleMouseEnter: k,
      handleMouseLeave: R,
      handleClickOutside: B,
      handleMouseMoveOutside: w,
      setBodyInstance: n,
      positionManuallyRef: h,
      isMountedRef: t,
      zIndexRef: ie(e, "zIndex"),
      extraClassRef: ie(e, "internalExtraClass"),
      internalRenderBodyRef: ie(e, "internalRenderBody")
    }), it(() => {
      a.value && s() && p(!1);
    }), {
      binderInstRef: r,
      positionManually: h,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: i,
      mergedShowArrow: c,
      getMergedShow: d,
      setShow: V,
      handleClick: F,
      handleMouseEnter: k,
      handleMouseLeave: R,
      handleFocus: S,
      handleBlur: C,
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
    if (!t && (o = B0(r, "trigger"), o)) {
      o = wd(o), o = o.type === Pf ? f("span", [o]) : o;
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
        C1(o, l ? "nested" : t ? "manual" : this.trigger, d);
      }
    }
    return f(Ua, {
      ref: "binderInstRef",
      syncTarget: !i,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const a = this.getMergedShow();
        return [this.internalTrapFocus && a ? pn(f("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[Ga, {
          enabled: a,
          zIndex: this.zIndex
        }]]) : null, t ? null : f(qa, null, {
          default: () => o
        }), f(b1, kn(this.$props, x1, Object.assign(Object.assign({}, this.$attrs), {
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
}), S1 = {
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
function B1(e) {
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
    fontSizeSmall: S,
    fontSizeMedium: C,
    heightMini: k,
    heightTiny: R,
    heightSmall: w,
    heightMedium: B,
    closeColorHover: F,
    closeColorPressed: A,
    buttonColor2Hover: V,
    buttonColor2Pressed: O,
    fontWeightStrong: n
  } = e;
  return Object.assign(Object.assign({}, S1), {
    closeBorderRadius: x,
    heightTiny: k,
    heightSmall: R,
    heightMedium: w,
    heightLarge: B,
    borderRadius: x,
    opacityDisabled: v,
    fontSizeTiny: b,
    fontSizeSmall: y,
    fontSizeMedium: S,
    fontSizeLarge: C,
    fontWeightStrong: n,
    // checked
    textColorCheckable: t,
    textColorHoverCheckable: t,
    textColorPressedCheckable: t,
    textColorChecked: u,
    colorCheckable: "#0000",
    colorHoverCheckable: V,
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
    closeColorPressed: A,
    borderPrimary: `1px solid ${De(i, {
      alpha: 0.3
    })}`,
    textColorPrimary: i,
    colorPrimary: De(i, {
      alpha: 0.12
    }),
    colorBorderedPrimary: De(i, {
      alpha: 0.1
    }),
    closeIconColorPrimary: i,
    closeIconColorHoverPrimary: i,
    closeIconColorPressedPrimary: i,
    closeColorHoverPrimary: De(i, {
      alpha: 0.12
    }),
    closeColorPressedPrimary: De(i, {
      alpha: 0.18
    }),
    borderInfo: `1px solid ${De(a, {
      alpha: 0.3
    })}`,
    textColorInfo: a,
    colorInfo: De(a, {
      alpha: 0.12
    }),
    colorBorderedInfo: De(a, {
      alpha: 0.1
    }),
    closeIconColorInfo: a,
    closeIconColorHoverInfo: a,
    closeIconColorPressedInfo: a,
    closeColorHoverInfo: De(a, {
      alpha: 0.12
    }),
    closeColorPressedInfo: De(a, {
      alpha: 0.18
    }),
    borderSuccess: `1px solid ${De(l, {
      alpha: 0.3
    })}`,
    textColorSuccess: l,
    colorSuccess: De(l, {
      alpha: 0.12
    }),
    colorBorderedSuccess: De(l, {
      alpha: 0.1
    }),
    closeIconColorSuccess: l,
    closeIconColorHoverSuccess: l,
    closeIconColorPressedSuccess: l,
    closeColorHoverSuccess: De(l, {
      alpha: 0.12
    }),
    closeColorPressedSuccess: De(l, {
      alpha: 0.18
    }),
    borderWarning: `1px solid ${De(s, {
      alpha: 0.35
    })}`,
    textColorWarning: s,
    colorWarning: De(s, {
      alpha: 0.15
    }),
    colorBorderedWarning: De(s, {
      alpha: 0.12
    }),
    closeIconColorWarning: s,
    closeIconColorHoverWarning: s,
    closeIconColorPressedWarning: s,
    closeColorHoverWarning: De(s, {
      alpha: 0.12
    }),
    closeColorPressedWarning: De(s, {
      alpha: 0.18
    }),
    borderError: `1px solid ${De(d, {
      alpha: 0.23
    })}`,
    textColorError: d,
    colorError: De(d, {
      alpha: 0.1
    }),
    colorBorderedError: De(d, {
      alpha: 0.08
    }),
    closeIconColorError: d,
    closeIconColorHoverError: d,
    closeIconColorPressedError: d,
    closeColorHoverError: De(d, {
      alpha: 0.12
    }),
    closeColorPressedError: De(d, {
      alpha: 0.18
    })
  });
}
const k1 = {
  name: "Tag",
  common: Je,
  self: B1
}, R1 = {
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
}, F1 = z("tag", `
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
 `), T("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), T("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), T("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), T("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), N("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [T("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), T("avatar", `
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
 `, [Ye("disabled", [M("&:hover", "background-color: var(--n-color-hover-checkable);", [Ye("checked", "color: var(--n-text-color-hover-checkable);")]), M("&:active", "background-color: var(--n-color-pressed-checkable);", [Ye("checked", "color: var(--n-text-color-pressed-checkable);")])]), N("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [Ye("disabled", [M("&:hover", "background-color: var(--n-color-checked-hover);"), M("&:active", "background-color: var(--n-color-checked-pressed);")])])])]), P1 = Object.assign(Object.assign(Object.assign({}, ve.props), R1), {
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
}), z1 = "n-tag", ea = ee({
  name: "Tag",
  props: P1,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && it(() => {
      e.onCheckedChange !== void 0 && ct("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
    });
    const t = I(null), {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = ve("Tag", "-tag", F1, k1, e, o);
    Ee(z1, {
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
        h && re(h, m);
      }
    }
    const u = {
      setTextContent(m) {
        const {
          value: h
        } = t;
        h && (h.textContent = m);
      }
    }, c = zt("Tag", a, o), v = $(() => {
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
          closeMargin: S,
          borderRadius: C,
          opacityDisabled: k,
          textColorCheckable: R,
          textColorHoverCheckable: w,
          textColorPressedCheckable: B,
          textColorChecked: F,
          colorCheckable: A,
          colorHoverCheckable: V,
          colorPressedCheckable: O,
          colorChecked: n,
          colorCheckedHover: D,
          colorCheckedPressed: E,
          closeBorderRadius: H,
          fontWeightStrong: L,
          [Z("colorBordered", m)]: K,
          [Z("closeSize", h)]: te,
          [Z("closeIconSize", h)]: X,
          [Z("fontSize", h)]: U,
          [Z("height", h)]: j,
          [Z("color", m)]: q,
          [Z("textColor", m)]: Y,
          [Z("border", m)]: ae,
          [Z("closeIconColor", m)]: le,
          [Z("closeIconColorHover", m)]: fe,
          [Z("closeIconColorPressed", m)]: we,
          [Z("closeColorHover", m)]: G,
          [Z("closeColorPressed", m)]: ue
        }
      } = l.value, Fe = Nt(S);
      return {
        "--n-font-weight-strong": L,
        "--n-avatar-size-override": `calc(${j} - 8px)`,
        "--n-bezier": b,
        "--n-border-radius": C,
        "--n-border": ae,
        "--n-close-icon-size": X,
        "--n-close-color-pressed": ue,
        "--n-close-color-hover": G,
        "--n-close-border-radius": H,
        "--n-close-icon-color": le,
        "--n-close-icon-color-hover": fe,
        "--n-close-icon-color-pressed": we,
        "--n-close-icon-color-disabled": le,
        "--n-close-margin-top": Fe.top,
        "--n-close-margin-right": Fe.right,
        "--n-close-margin-bottom": Fe.bottom,
        "--n-close-margin-left": Fe.left,
        "--n-close-size": te,
        "--n-color": p || (r.value ? K : q),
        "--n-color-checkable": A,
        "--n-color-checked": n,
        "--n-color-checked-hover": D,
        "--n-color-checked-pressed": E,
        "--n-color-hover-checkable": V,
        "--n-color-pressed-checkable": O,
        "--n-font-size": U,
        "--n-height": j,
        "--n-opacity-disabled": k,
        "--n-padding": y,
        "--n-text-color": x || Y,
        "--n-text-color-checkable": R,
        "--n-text-color-checked": F,
        "--n-text-color-hover-checkable": w,
        "--n-text-color-pressed-checkable": B
      };
    }), g = i ? Ze("tag", $(() => {
      let m = "";
      const {
        type: h,
        size: p,
        color: {
          color: x,
          textColor: b
        } = {}
      } = e;
      return m += h[0], m += p[0], x && (m += `a${Zo(x)}`), b && (m += `b${Zo(b)}`), r.value && (m += "c"), m;
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
    const u = _e(d.avatar, (v) => v && f("div", {
      class: `${r}-tag__avatar`
    }, v)), c = _e(d.icon, (v) => v && f("div", {
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
    }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)), !this.checkable && i ? f(Bo, {
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
}), _u = ee({
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
      return f(Un, {
        clsPrefix: r,
        class: `${r}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? f(wa, {
          clsPrefix: r,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => f(xt, {
            clsPrefix: r,
            class: `${r}-base-suffix__arrow`
          }, {
            default: () => en(t.default, () => [f(Tu, null)])
          })
        }) : null
      });
    };
  }
}), $1 = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
function A1(e) {
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
    placeholderColorDisabled: S,
    fontSizeTiny: C,
    fontSizeSmall: k,
    fontSizeMedium: R,
    fontSizeLarge: w,
    heightTiny: B,
    heightSmall: F,
    heightMedium: A,
    heightLarge: V,
    fontWeight: O
  } = e;
  return Object.assign(Object.assign({}, $1), {
    fontSizeTiny: C,
    fontSizeSmall: k,
    fontSizeMedium: R,
    fontSizeLarge: w,
    heightTiny: B,
    heightSmall: F,
    heightMedium: A,
    heightLarge: V,
    borderRadius: t,
    fontWeight: O,
    // default
    textColor: r,
    textColorDisabled: o,
    placeholderColor: y,
    placeholderColorDisabled: S,
    color: i,
    colorDisabled: a,
    colorActive: i,
    border: `1px solid ${g}`,
    borderHover: `1px solid ${s}`,
    borderActive: `1px solid ${l}`,
    borderFocus: `1px solid ${s}`,
    boxShadowHover: "none",
    boxShadowActive: `0 0 0 2px ${De(l, {
      alpha: 0.2
    })}`,
    boxShadowFocus: `0 0 0 2px ${De(l, {
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
    boxShadowActiveWarning: `0 0 0 2px ${De(d, {
      alpha: 0.2
    })}`,
    boxShadowFocusWarning: `0 0 0 2px ${De(d, {
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
    boxShadowActiveError: `0 0 0 2px ${De(c, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${De(c, {
      alpha: 0.2
    })}`,
    colorActiveError: i,
    caretColorError: c,
    clearColor: p,
    clearColorHover: x,
    clearColorPressed: b
  });
}
const Wu = {
  name: "InternalSelection",
  common: Je,
  peers: {
    Popover: mr
  },
  self: A1
}, D1 = M([z("base-selection", `
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
 `), z("base-selection-tags", "min-height: var(--n-height);"), T("border, state-border", `
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
 `), T("state-border", `
 z-index: 1;
 border-color: #0000;
 `), z("base-suffix", `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [T("arrow", `
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
 `, [T("wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), z("base-selection-placeholder", `
 color: var(--n-placeholder-color);
 `, [T("inner", `
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
 `, [T("content", `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), T("render-label", `
 color: var(--n-text-color);
 `)]), Ye("disabled", [M("&:hover", [T("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), N("focus", [T("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), N("active", [T("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), z("base-selection-label", "background-color: var(--n-color-active);"), z("base-selection-tags", "background-color: var(--n-color-active);")])]), N("disabled", "cursor: not-allowed;", [T("arrow", `
 color: var(--n-arrow-color-disabled);
 `), z("base-selection-label", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [z("base-selection-input", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), T("render-label", `
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
 `, [T("input", `
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
 `), T("mirror", `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), ["warning", "error"].map((e) => N(`${e}-status`, [T("state-border", `border: var(--n-border-${e});`), Ye("disabled", [M("&:hover", [T("state-border", `
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]), N("active", [T("state-border", `
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `), z("base-selection-label", `background-color: var(--n-color-active-${e});`), z("base-selection-tags", `background-color: var(--n-color-active-${e});`)]), N("focus", [T("state-border", `
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
 `, [M("&:last-child", "padding-right: 0;"), z("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [T("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]), E1 = ee({
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
    } = Ae(e), o = zt("InternalSelection", r, t), i = I(null), a = I(null), l = I(null), s = I(null), d = I(null), u = I(null), c = I(null), v = I(null), g = I(null), m = I(null), h = I(!1), p = I(!1), x = I(!1), b = ve("InternalSelection", "-internal-selection", D1, Wu, e, ie(e, "clsPrefix")), y = $(() => e.clearable && !e.disabled && (x.value || e.active)), S = $(() => e.selectedOption ? e.renderTag ? e.renderTag({
      option: e.selectedOption,
      handleClose: () => {
      }
    }) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : gt(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder), C = $(() => {
      const oe = e.selectedOption;
      if (oe)
        return oe[e.labelField];
    }), k = $(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length) : e.selectedOption !== null);
    function R() {
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
    function w() {
      const {
        value: oe
      } = m;
      oe && (oe.style.display = "none");
    }
    function B() {
      const {
        value: oe
      } = m;
      oe && (oe.style.display = "inline-block");
    }
    He(ie(e, "active"), (oe) => {
      oe || w();
    }), He(ie(e, "pattern"), () => {
      e.multiple && pt(R);
    });
    function F(oe) {
      const {
        onFocus: he
      } = e;
      he && he(oe);
    }
    function A(oe) {
      const {
        onBlur: he
      } = e;
      he && he(oe);
    }
    function V(oe) {
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
    function D(oe) {
      var he;
      (!oe.relatedTarget || !(!((he = l.value) === null || he === void 0) && he.contains(oe.relatedTarget))) && F(oe);
    }
    function E(oe) {
      var he;
      !((he = l.value) === null || he === void 0) && he.contains(oe.relatedTarget) || A(oe);
    }
    function H(oe) {
      O(oe);
    }
    function L() {
      x.value = !0;
    }
    function K() {
      x.value = !1;
    }
    function te(oe) {
      !e.active || !e.filterable || oe.target !== a.value && oe.preventDefault();
    }
    function X(oe) {
      V(oe);
    }
    const U = I(!1);
    function j(oe) {
      if (oe.key === "Backspace" && !U.value && !e.pattern.length) {
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
        he.textContent = Te, R();
      }
      e.ignoreComposition && U.value ? q = oe : n(oe);
    }
    function ae() {
      U.value = !0;
    }
    function le() {
      U.value = !1, e.ignoreComposition && n(q), q = null;
    }
    function fe(oe) {
      var he;
      p.value = !0, (he = e.onPatternFocus) === null || he === void 0 || he.call(e, oe);
    }
    function we(oe) {
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
      oe && (B(), oe.focus());
    }
    function be() {
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
    function st() {
      return a.value;
    }
    let et = null;
    function ft() {
      et !== null && window.clearTimeout(et);
    }
    function ht() {
      e.active || (ft(), et = window.setTimeout(() => {
        k.value && (h.value = !0);
      }, 100));
    }
    function xe() {
      ft();
    }
    function ye(oe) {
      oe || (ft(), h.value = !1);
    }
    He(k, (oe) => {
      oe || (h.value = !1);
    }), Pt(() => {
      it(() => {
        const oe = u.value;
        oe && (e.disabled ? oe.removeAttribute("tabindex") : oe.tabIndex = p.value ? -1 : 0);
      });
    }), eu(l, e.onResize);
    const {
      inlineThemeDisabled: $e
    } = e, Ie = $(() => {
      const {
        size: oe
      } = e, {
        common: {
          cubicBezierEaseInOut: he
        },
        self: {
          fontWeight: Te,
          borderRadius: dt,
          color: $t,
          placeholderColor: At,
          textColor: mt,
          paddingSingle: rt,
          paddingMultiple: wt,
          caretColor: tt,
          colorDisabled: ce,
          textColorDisabled: Be,
          placeholderColorDisabled: P,
          colorActive: W,
          boxShadowFocus: J,
          boxShadowActive: se,
          boxShadowHover: de,
          border: ge,
          borderFocus: me,
          borderHover: Se,
          borderActive: Le,
          arrowColor: ot,
          arrowColorDisabled: Ve,
          loadingColor: Et,
          // form warning
          colorActiveWarning: It,
          boxShadowFocusWarning: Lt,
          boxShadowActiveWarning: Vt,
          boxShadowHoverWarning: Kt,
          borderWarning: tn,
          borderFocusWarning: Ut,
          borderHoverWarning: _,
          borderActiveWarning: Q,
          // form error
          colorActiveError: Ce,
          boxShadowFocusError: Oe,
          boxShadowActiveError: qe,
          boxShadowHoverError: Ne,
          borderError: at,
          borderFocusError: vt,
          borderHoverError: Yt,
          borderActiveError: yn,
          // clear
          clearColor: Cn,
          clearColorHover: Gn,
          clearColorPressed: _r,
          clearSize: Wr,
          // arrow
          arrowSize: Vr,
          [Z("height", oe)]: Kr,
          [Z("fontSize", oe)]: Ur
        }
      } = b.value, zn = Nt(rt), $n = Nt(wt);
      return {
        "--n-bezier": he,
        "--n-border": ge,
        "--n-border-active": Le,
        "--n-border-focus": me,
        "--n-border-hover": Se,
        "--n-border-radius": dt,
        "--n-box-shadow-active": se,
        "--n-box-shadow-focus": J,
        "--n-box-shadow-hover": de,
        "--n-caret-color": tt,
        "--n-color": $t,
        "--n-color-active": W,
        "--n-color-disabled": ce,
        "--n-font-size": Ur,
        "--n-height": Kr,
        "--n-padding-single-top": zn.top,
        "--n-padding-multiple-top": $n.top,
        "--n-padding-single-right": zn.right,
        "--n-padding-multiple-right": $n.right,
        "--n-padding-single-left": zn.left,
        "--n-padding-multiple-left": $n.left,
        "--n-padding-single-bottom": zn.bottom,
        "--n-padding-multiple-bottom": $n.bottom,
        "--n-placeholder-color": At,
        "--n-placeholder-color-disabled": P,
        "--n-text-color": mt,
        "--n-text-color-disabled": Be,
        "--n-arrow-color": ot,
        "--n-arrow-color-disabled": Ve,
        "--n-loading-color": Et,
        // form warning
        "--n-color-active-warning": It,
        "--n-box-shadow-focus-warning": Lt,
        "--n-box-shadow-active-warning": Vt,
        "--n-box-shadow-hover-warning": Kt,
        "--n-border-warning": tn,
        "--n-border-focus-warning": Ut,
        "--n-border-hover-warning": _,
        "--n-border-active-warning": Q,
        // form error
        "--n-color-active-error": Ce,
        "--n-box-shadow-focus-error": Oe,
        "--n-box-shadow-active-error": qe,
        "--n-box-shadow-hover-error": Ne,
        "--n-border-error": at,
        "--n-border-focus-error": vt,
        "--n-border-hover-error": Yt,
        "--n-border-active-error": yn,
        // clear
        "--n-clear-size": Wr,
        "--n-clear-color": Cn,
        "--n-clear-color-hover": Gn,
        "--n-clear-color-pressed": _r,
        // arrow-size
        "--n-arrow-size": Vr,
        // font-weight
        "--n-font-weight": Te
      };
    }), Qe = $e ? Ze("internal-selection", $(() => e.size[0]), Ie, e) : void 0;
    return {
      mergedTheme: b,
      mergedClearable: y,
      mergedClsPrefix: t,
      rtlEnabled: o,
      patternInputFocused: p,
      filterablePlaceholder: S,
      label: C,
      selected: k,
      showTagsPanel: h,
      isComposing: U,
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
      handleFocusin: D,
      handleClear: H,
      handleMouseEnter: L,
      handleMouseLeave: K,
      handleDeleteOption: X,
      handlePatternKeyDown: j,
      handlePatternInputInput: Y,
      handlePatternInputBlur: we,
      handlePatternInputFocus: fe,
      handleMouseEnterCounter: ht,
      handleMouseLeaveCounter: xe,
      handleFocusout: E,
      handleCompositionEnd: le,
      handleCompositionStart: ae,
      onPopoverUpdateShow: ye,
      focus: ue,
      focusInput: Fe,
      blur: G,
      blurInput: be,
      updateCounter: Pe,
      getCounter: ze,
      getTail: st,
      renderLabel: e.renderLabel,
      cssVars: $e ? void 0 : Ie,
      themeClass: Qe == null ? void 0 : Qe.themeClass,
      onRender: Qe == null ? void 0 : Qe.onRender
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
    const g = a === "responsive", m = typeof a == "number", h = g || m, p = f(fa, null, {
      default: () => f(_u, {
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
      }) : f(ea, {
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
      })), S = () => (m ? this.selectedOptions.slice(0, a) : this.selectedOptions).map(y), C = i ? f("div", {
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
      }, this.pattern)) : null, k = g ? () => f("div", {
        class: `${s}-base-selection-tag-wrapper`,
        ref: "counterWrapperRef"
      }, f(ea, {
        size: r,
        ref: "counterRef",
        onMouseenter: this.handleMouseEnterCounter,
        onMouseleave: this.handleMouseLeaveCounter,
        disabled: o
      })) : void 0;
      let R;
      if (m) {
        const n = this.selectedOptions.length - a;
        n > 0 && (R = f("div", {
          class: `${s}-base-selection-tag-wrapper`,
          key: "__counter__"
        }, f(ea, {
          size: r,
          ref: "counterRef",
          onMouseenter: this.handleMouseEnterCounter,
          disabled: o
        }, {
          default: () => `+${n}`
        })));
      }
      const w = g ? i ? f(ls, {
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
        default: S,
        counter: k,
        tail: () => C
      }) : f(ls, {
        ref: "overflowRef",
        updateCounter: this.updateCounter,
        getCounter: this.getCounter,
        style: {
          width: "100%",
          display: "flex",
          overflow: "hidden"
        }
      }, {
        default: S,
        counter: k
      }) : m && R ? S().concat(R) : S(), B = h ? () => f("div", {
        class: `${s}-base-selection-popover`
      }, g ? S() : this.selectedOptions.map(y)) : void 0, F = h ? Object.assign({
        show: this.showTagsPanel,
        trigger: "hover",
        overlap: !0,
        placement: "top",
        width: "trigger",
        onUpdateShow: this.onPopoverUpdateShow,
        theme: this.mergedTheme.peers.Popover,
        themeOverrides: this.mergedTheme.peerOverrides.Popover
      }, d) : null, V = (this.selected ? !1 : this.active ? !this.pattern && !this.isComposing : !0) ? f("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`
      }, f("div", {
        class: `${s}-base-selection-placeholder__inner`
      }, this.placeholder)) : null, O = i ? f("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-tags`
      }, w, g ? null : C, p) : f("div", {
        ref: "multipleElRef",
        class: `${s}-base-selection-tags`,
        tabindex: o ? void 0 : 0
      }, w, p);
      x = f(je, null, h ? f(br, Object.assign({}, F, {
        scrollable: !0,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => O,
        default: B
      }) : O, V);
    } else if (i) {
      const b = this.pattern || this.isComposing, y = this.active ? !b : !this.selected, S = this.active ? !1 : this.selected;
      x = f("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-label`,
        title: this.patternInputFocused ? void 0 : us(this.label)
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
      })), S ? f("div", {
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
        title: us(this.label),
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
  cubicBezierEaseInOut: Dn
} = Vn;
function T1({
  duration: e = ".2s",
  delay: t = ".1s"
} = {}) {
  return [M("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", {
    opacity: 1
  }), M("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), M("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${Dn},
 max-width ${e} ${Dn} ${t},
 margin-left ${e} ${Dn} ${t},
 margin-right ${e} ${Dn} ${t};
 `), M("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${Dn} ${t},
 max-width ${e} ${Dn},
 margin-left ${e} ${Dn},
 margin-right ${e} ${Dn};
 `)];
}
const O1 = z("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), M1 = ee({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    Kn("-base-wave", O1, ie(e, "clsPrefix"));
    const t = I(null), r = I(!1);
    let o = null;
    return kt(() => {
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
  cubicBezierEaseInOut: cn,
  cubicBezierEaseOut: I1,
  cubicBezierEaseIn: L1
} = Vn;
function Vu({
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
  return [M(`&.fade-in-height-expand-transition-${u}-from,
 &.fade-in-height-expand-transition-${d}-to`, Object.assign(Object.assign({}, a), {
    opacity: 1
  })), M(`&.fade-in-height-expand-transition-${u}-to,
 &.fade-in-height-expand-transition-${d}-from`, Object.assign(Object.assign({}, l), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: i ? "0 !important" : void 0,
    paddingBottom: i ? "0 !important" : void 0
  })), M(`&.fade-in-height-expand-transition-${u}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${cn} ${o},
 opacity ${t} ${I1} ${o},
 margin-top ${t} ${cn} ${o},
 margin-bottom ${t} ${cn} ${o},
 padding-top ${t} ${cn} ${o},
 padding-bottom ${t} ${cn} ${o}
 ${r ? `,${r}` : ""}
 `), M(`&.fade-in-height-expand-transition-${d}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${cn},
 opacity ${t} ${L1},
 margin-top ${t} ${cn},
 margin-bottom ${t} ${cn},
 padding-top ${t} ${cn},
 padding-bottom ${t} ${cn}
 ${r ? `,${r}` : ""}
 `)];
}
const N1 = Nr && "chrome" in window;
Nr && navigator.userAgent.includes("Firefox");
const Ku = Nr && navigator.userAgent.includes("Safari") && !N1, H1 = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function j1(e) {
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
    heightTiny: S,
    heightSmall: C,
    heightMedium: k,
    heightLarge: R,
    actionColor: w,
    clearColor: B,
    clearColorHover: F,
    clearColorPressed: A,
    placeholderColor: V,
    placeholderColorDisabled: O,
    iconColor: n,
    iconColorDisabled: D,
    iconColorHover: E,
    iconColorPressed: H,
    fontWeight: L
  } = e;
  return Object.assign(Object.assign({}, H1), {
    fontWeight: L,
    countTextColorDisabled: o,
    countTextColor: r,
    heightTiny: S,
    heightSmall: C,
    heightMedium: k,
    heightLarge: R,
    fontSizeTiny: p,
    fontSizeSmall: x,
    fontSizeMedium: b,
    fontSizeLarge: y,
    lineHeight: h,
    lineHeightTextarea: h,
    borderRadius: m,
    iconSize: "16px",
    groupLabelColor: w,
    groupLabelTextColor: t,
    textColor: t,
    textColorDisabled: o,
    textDecorationColor: t,
    caretColor: i,
    placeholderColor: V,
    placeholderColorDisabled: O,
    color: l,
    colorDisabled: s,
    colorFocus: l,
    groupLabelBorder: `1px solid ${d}`,
    border: `1px solid ${d}`,
    borderHover: `1px solid ${a}`,
    borderDisabled: `1px solid ${d}`,
    borderFocus: `1px solid ${a}`,
    boxShadowFocus: `0 0 0 2px ${De(i, {
      alpha: 0.2
    })}`,
    loadingColor: i,
    // warning
    loadingColorWarning: u,
    borderWarning: `1px solid ${u}`,
    borderHoverWarning: `1px solid ${c}`,
    colorFocusWarning: l,
    borderFocusWarning: `1px solid ${c}`,
    boxShadowFocusWarning: `0 0 0 2px ${De(u, {
      alpha: 0.2
    })}`,
    caretColorWarning: u,
    // error
    loadingColorError: v,
    borderError: `1px solid ${v}`,
    borderHoverError: `1px solid ${g}`,
    colorFocusError: l,
    borderFocusError: `1px solid ${g}`,
    boxShadowFocusError: `0 0 0 2px ${De(v, {
      alpha: 0.2
    })}`,
    caretColorError: v,
    clearColor: B,
    clearColorHover: F,
    clearColorPressed: A,
    iconColor: n,
    iconColorDisabled: D,
    iconColorHover: E,
    iconColorPressed: H,
    suffixTextColor: t
  });
}
const bl = {
  name: "Input",
  common: Je,
  self: j1
}, Uu = "n-input", _1 = z("input", `
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
 `, [M("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), M("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), M("&:-webkit-autofill ~", [T("placeholder", "display: none;")])]),
  N("round", [Ye("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  T("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [M("span", `
 width: 100%;
 display: inline-block;
 `)]),
  N("textarea", [T("placeholder", "overflow: visible;")]),
  Ye("autosize", "width: 100%;"),
  N("autosize", [T("textarea-el, input-el", `
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
 `, [M("&[type=password]::-ms-reveal", "display: none;"), M("+", [T("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  Ye("textarea", [T("placeholder", "white-space: nowrap;")]),
  T("eye", `
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
  N("pair", [T("input-el, placeholder", "text-align: center;"), T("separator", `
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
 `, [T("border", "border: var(--n-border-disabled);"), T("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), T("placeholder", "color: var(--n-placeholder-color-disabled);"), T("separator", "color: var(--n-text-color-disabled);", [z("icon", `
 color: var(--n-icon-color-disabled);
 `), z("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), z("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), T("suffix, prefix", "color: var(--n-text-color-disabled);", [z("icon", `
 color: var(--n-icon-color-disabled);
 `), z("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  Ye("disabled", [T("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [M("&:hover", `
 color: var(--n-icon-color-hover);
 `), M("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), M("&:hover", [T("state-border", "border: var(--n-border-hover);")]), N("focus", "background-color: var(--n-color-focus);", [T("state-border", `
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
 `, [z("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), z("base-clear", `
 font-size: var(--n-icon-size);
 `, [T("placeholder", [z("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), M(">", [z("icon", `
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
  ["warning", "error"].map((e) => N(`${e}-status`, [Ye("disabled", [z("base-loading", `
 color: var(--n-loading-color-${e})
 `), T("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), T("state-border", `
 border: var(--n-border-${e});
 `), M("&:hover", [T("state-border", `
 border: var(--n-border-hover-${e});
 `)]), M("&:focus", `
 background-color: var(--n-color-focus-${e});
 `, [T("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]), N("focus", `
 background-color: var(--n-color-focus-${e});
 `, [T("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))
]), W1 = z("input", [N("disabled", [T("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
function V1(e) {
  let t = 0;
  for (const r of e)
    t++;
  return t;
}
function No(e) {
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
  return He(e, i), {
    recordCursor: r,
    restoreCursor: o
  };
}
const Js = ee({
  name: "InputWordCount",
  setup(e, {
    slots: t
  }) {
    const {
      mergedValueRef: r,
      maxlengthRef: o,
      mergedClsPrefixRef: i,
      countGraphemesRef: a
    } = pe(Uu), l = $(() => {
      const {
        value: s
      } = r;
      return s === null || Array.isArray(s) ? 0 : (a.value || V1)(s);
    });
    return () => {
      const {
        value: s
      } = o, {
        value: d
      } = r;
      return f("span", {
        class: `${i.value}-input-word-count`
      }, ca(t.default, {
        value: d === null || Array.isArray(d) ? "" : d
      }, () => [s === void 0 ? l.value : `${l.value} / ${s}`]));
    };
  }
}), U1 = Object.assign(Object.assign({}, ve.props), {
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
}), Ba = ee({
  name: "Input",
  props: U1,
  slots: Object,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      mergedBorderedRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = ve("Input", "-input", _1, bl, e, t);
    Ku && Kn("-input-safari", W1, t);
    const l = I(null), s = I(null), d = I(null), u = I(null), c = I(null), v = I(null), g = I(null), m = K1(g), h = I(null), {
      localeRef: p
    } = ir("Input"), x = I(e.defaultValue), b = ie(e, "value"), y = Mt(b, x), S = _n(e), {
      mergedSizeRef: C,
      mergedDisabledRef: k,
      mergedStatusRef: R
    } = S, w = I(!1), B = I(!1), F = I(!1), A = I(!1);
    let V = null;
    const O = $(() => {
      const {
        placeholder: _,
        pair: Q
      } = e;
      return Q ? Array.isArray(_) ? _ : _ === void 0 ? ["", ""] : [_, _] : _ === void 0 ? [p.value.placeholder] : [_];
    }), n = $(() => {
      const {
        value: _
      } = F, {
        value: Q
      } = y, {
        value: Ce
      } = O;
      return !_ && (No(Q) || Array.isArray(Q) && No(Q[0])) && Ce[0];
    }), D = $(() => {
      const {
        value: _
      } = F, {
        value: Q
      } = y, {
        value: Ce
      } = O;
      return !_ && Ce[1] && (No(Q) || Array.isArray(Q) && No(Q[1]));
    }), E = Ue(() => e.internalForceFocus || w.value), H = Ue(() => {
      if (k.value || e.readonly || !e.clearable || !E.value && !B.value)
        return !1;
      const {
        value: _
      } = y, {
        value: Q
      } = E;
      return e.pair ? !!(Array.isArray(_) && (_[0] || _[1])) && (B.value || Q) : !!_ && (B.value || Q);
    }), L = $(() => {
      const {
        showPasswordOn: _
      } = e;
      if (_)
        return _;
      if (e.showPasswordToggle) return "click";
    }), K = I(!1), te = $(() => {
      const {
        textDecoration: _
      } = e;
      return _ ? Array.isArray(_) ? _.map((Q) => ({
        textDecoration: Q
      })) : [{
        textDecoration: _
      }] : ["", ""];
    }), X = I(void 0), U = () => {
      var _, Q;
      if (e.type === "textarea") {
        const {
          autosize: Ce
        } = e;
        if (Ce && (X.value = (Q = (_ = h.value) === null || _ === void 0 ? void 0 : _.$el) === null || Q === void 0 ? void 0 : Q.offsetWidth), !s.value || typeof Ce == "boolean") return;
        const {
          paddingTop: Oe,
          paddingBottom: qe,
          lineHeight: Ne
        } = window.getComputedStyle(s.value), at = Number(Oe.slice(0, -2)), vt = Number(qe.slice(0, -2)), Yt = Number(Ne.slice(0, -2)), {
          value: yn
        } = d;
        if (!yn) return;
        if (Ce.minRows) {
          const Cn = Math.max(Ce.minRows, 1), Gn = `${at + vt + Yt * Cn}px`;
          yn.style.minHeight = Gn;
        }
        if (Ce.maxRows) {
          const Cn = `${at + vt + Yt * Ce.maxRows}px`;
          yn.style.maxHeight = Cn;
        }
      }
    }, j = $(() => {
      const {
        maxlength: _
      } = e;
      return _ === void 0 ? void 0 : Number(_);
    });
    Pt(() => {
      const {
        value: _
      } = y;
      Array.isArray(_) || Le(_);
    });
    const q = yo().proxy;
    function Y(_, Q) {
      const {
        onUpdateValue: Ce,
        "onUpdate:value": Oe,
        onInput: qe
      } = e, {
        nTriggerFormInput: Ne
      } = S;
      Ce && re(Ce, _, Q), Oe && re(Oe, _, Q), qe && re(qe, _, Q), x.value = _, Ne();
    }
    function ae(_, Q) {
      const {
        onChange: Ce
      } = e, {
        nTriggerFormChange: Oe
      } = S;
      Ce && re(Ce, _, Q), x.value = _, Oe();
    }
    function le(_) {
      const {
        onBlur: Q
      } = e, {
        nTriggerFormBlur: Ce
      } = S;
      Q && re(Q, _), Ce();
    }
    function fe(_) {
      const {
        onFocus: Q
      } = e, {
        nTriggerFormFocus: Ce
      } = S;
      Q && re(Q, _), Ce();
    }
    function we(_) {
      const {
        onClear: Q
      } = e;
      Q && re(Q, _);
    }
    function G(_) {
      const {
        onInputBlur: Q
      } = e;
      Q && re(Q, _);
    }
    function ue(_) {
      const {
        onInputFocus: Q
      } = e;
      Q && re(Q, _);
    }
    function Fe() {
      const {
        onDeactivate: _
      } = e;
      _ && re(_);
    }
    function be() {
      const {
        onActivate: _
      } = e;
      _ && re(_);
    }
    function Pe(_) {
      const {
        onClick: Q
      } = e;
      Q && re(Q, _);
    }
    function ze(_) {
      const {
        onWrapperFocus: Q
      } = e;
      Q && re(Q, _);
    }
    function st(_) {
      const {
        onWrapperBlur: Q
      } = e;
      Q && re(Q, _);
    }
    function et() {
      F.value = !0;
    }
    function ft(_) {
      F.value = !1, _.target === v.value ? ht(_, 1) : ht(_, 0);
    }
    function ht(_, Q = 0, Ce = "input") {
      const Oe = _.target.value;
      if (Le(Oe), _ instanceof InputEvent && !_.isComposing && (F.value = !1), e.type === "textarea") {
        const {
          value: Ne
        } = h;
        Ne && Ne.syncUnifiedContainer();
      }
      if (V = Oe, F.value) return;
      m.recordCursor();
      const qe = xe(Oe);
      if (qe)
        if (!e.pair)
          Ce === "input" ? Y(Oe, {
            source: Q
          }) : ae(Oe, {
            source: Q
          });
        else {
          let {
            value: Ne
          } = y;
          Array.isArray(Ne) ? Ne = [Ne[0], Ne[1]] : Ne = ["", ""], Ne[Q] = Oe, Ce === "input" ? Y(Ne, {
            source: Q
          }) : ae(Ne, {
            source: Q
          });
        }
      q.$forceUpdate(), qe || pt(m.restoreCursor);
    }
    function xe(_) {
      const {
        countGraphemes: Q,
        maxlength: Ce,
        minlength: Oe
      } = e;
      if (Q) {
        let Ne;
        if (Ce !== void 0 && (Ne === void 0 && (Ne = Q(_)), Ne > Number(Ce)) || Oe !== void 0 && (Ne === void 0 && (Ne = Q(_)), Ne < Number(Ce)))
          return !1;
      }
      const {
        allowInput: qe
      } = e;
      return typeof qe == "function" ? qe(_) : !0;
    }
    function ye(_) {
      G(_), _.relatedTarget === l.value && Fe(), _.relatedTarget !== null && (_.relatedTarget === c.value || _.relatedTarget === v.value || _.relatedTarget === s.value) || (A.value = !1), oe(_, "blur"), g.value = null;
    }
    function $e(_, Q) {
      ue(_), w.value = !0, A.value = !0, be(), oe(_, "focus"), Q === 0 ? g.value = c.value : Q === 1 ? g.value = v.value : Q === 2 && (g.value = s.value);
    }
    function Ie(_) {
      e.passivelyActivated && (st(_), oe(_, "blur"));
    }
    function Qe(_) {
      e.passivelyActivated && (w.value = !0, ze(_), oe(_, "focus"));
    }
    function oe(_, Q) {
      _.relatedTarget !== null && (_.relatedTarget === c.value || _.relatedTarget === v.value || _.relatedTarget === s.value || _.relatedTarget === l.value) || (Q === "focus" ? (fe(_), w.value = !0) : Q === "blur" && (le(_), w.value = !1));
    }
    function he(_, Q) {
      ht(_, Q, "change");
    }
    function Te(_) {
      Pe(_);
    }
    function dt(_) {
      we(_), $t();
    }
    function $t() {
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
    function At(_) {
      const {
        onMousedown: Q
      } = e;
      Q && Q(_);
      const {
        tagName: Ce
      } = _.target;
      if (Ce !== "INPUT" && Ce !== "TEXTAREA") {
        if (e.resizable) {
          const {
            value: Oe
          } = l;
          if (Oe) {
            const {
              left: qe,
              top: Ne,
              width: at,
              height: vt
            } = Oe.getBoundingClientRect(), Yt = 14;
            if (qe + at - Yt < _.clientX && _.clientX < qe + at && Ne + vt - Yt < _.clientY && _.clientY < Ne + vt)
              return;
          }
        }
        _.preventDefault(), w.value || J();
      }
    }
    function mt() {
      var _;
      B.value = !0, e.type === "textarea" && ((_ = h.value) === null || _ === void 0 || _.handleMouseEnterWrapper());
    }
    function rt() {
      var _;
      B.value = !1, e.type === "textarea" && ((_ = h.value) === null || _ === void 0 || _.handleMouseLeaveWrapper());
    }
    function wt() {
      k.value || L.value === "click" && (K.value = !K.value);
    }
    function tt(_) {
      if (k.value) return;
      _.preventDefault();
      const Q = (Oe) => {
        Oe.preventDefault(), We("mouseup", document, Q);
      };
      if (Ke("mouseup", document, Q), L.value !== "mousedown") return;
      K.value = !0;
      const Ce = () => {
        K.value = !1, We("mouseup", document, Ce);
      };
      Ke("mouseup", document, Ce);
    }
    function ce(_) {
      e.onKeyup && re(e.onKeyup, _);
    }
    function Be(_) {
      switch (e.onKeydown && re(e.onKeydown, _), _.key) {
        case "Escape":
          W();
          break;
        case "Enter":
          P(_);
          break;
      }
    }
    function P(_) {
      var Q, Ce;
      if (e.passivelyActivated) {
        const {
          value: Oe
        } = A;
        if (Oe) {
          e.internalDeactivateOnEnter && W();
          return;
        }
        _.preventDefault(), e.type === "textarea" ? (Q = s.value) === null || Q === void 0 || Q.focus() : (Ce = c.value) === null || Ce === void 0 || Ce.focus();
      }
    }
    function W() {
      e.passivelyActivated && (A.value = !1, pt(() => {
        var _;
        (_ = l.value) === null || _ === void 0 || _.focus();
      }));
    }
    function J() {
      var _, Q, Ce;
      k.value || (e.passivelyActivated ? (_ = l.value) === null || _ === void 0 || _.focus() : ((Q = s.value) === null || Q === void 0 || Q.focus(), (Ce = c.value) === null || Ce === void 0 || Ce.focus()));
    }
    function se() {
      var _;
      !((_ = l.value) === null || _ === void 0) && _.contains(document.activeElement) && document.activeElement.blur();
    }
    function de() {
      var _, Q;
      (_ = s.value) === null || _ === void 0 || _.select(), (Q = c.value) === null || Q === void 0 || Q.select();
    }
    function ge() {
      k.value || (s.value ? s.value.focus() : c.value && c.value.focus());
    }
    function me() {
      const {
        value: _
      } = l;
      _ != null && _.contains(document.activeElement) && _ !== document.activeElement && W();
    }
    function Se(_) {
      if (e.type === "textarea") {
        const {
          value: Q
        } = s;
        Q == null || Q.scrollTo(_);
      } else {
        const {
          value: Q
        } = c;
        Q == null || Q.scrollTo(_);
      }
    }
    function Le(_) {
      const {
        type: Q,
        pair: Ce,
        autosize: Oe
      } = e;
      if (!Ce && Oe)
        if (Q === "textarea") {
          const {
            value: qe
          } = d;
          qe && (qe.textContent = `${_ ?? ""}\r
`);
        } else {
          const {
            value: qe
          } = u;
          qe && (_ ? qe.textContent = _ : qe.innerHTML = "&nbsp;");
        }
    }
    function ot() {
      U();
    }
    const Ve = I({
      top: "0"
    });
    function Et(_) {
      var Q;
      const {
        scrollTop: Ce
      } = _.target;
      Ve.value.top = `${-Ce}px`, (Q = h.value) === null || Q === void 0 || Q.syncUnifiedContainer();
    }
    let It = null;
    it(() => {
      const {
        autosize: _,
        type: Q
      } = e;
      _ && Q === "textarea" ? It = He(y, (Ce) => {
        !Array.isArray(Ce) && Ce !== V && Le(Ce);
      }) : It == null || It();
    });
    let Lt = null;
    it(() => {
      e.type === "textarea" ? Lt = He(y, (_) => {
        var Q;
        !Array.isArray(_) && _ !== V && ((Q = h.value) === null || Q === void 0 || Q.syncUnifiedContainer());
      }) : Lt == null || Lt();
    }), Ee(Uu, {
      mergedValueRef: y,
      maxlengthRef: j,
      mergedClsPrefixRef: t,
      countGraphemesRef: ie(e, "countGraphemes")
    });
    const Vt = {
      wrapperElRef: l,
      inputElRef: c,
      textareaElRef: s,
      isCompositing: F,
      clear: $t,
      focus: J,
      blur: se,
      select: de,
      deactivate: me,
      activate: ge,
      scrollTo: Se
    }, Kt = zt("Input", i, t), tn = $(() => {
      const {
        value: _
      } = C, {
        common: {
          cubicBezierEaseInOut: Q
        },
        self: {
          color: Ce,
          borderRadius: Oe,
          textColor: qe,
          caretColor: Ne,
          caretColorError: at,
          caretColorWarning: vt,
          textDecorationColor: Yt,
          border: yn,
          borderDisabled: Cn,
          borderHover: Gn,
          borderFocus: _r,
          placeholderColor: Wr,
          placeholderColorDisabled: Vr,
          lineHeightTextarea: Kr,
          colorDisabled: Ur,
          colorFocus: zn,
          textColorDisabled: $n,
          boxShadowFocus: Fi,
          iconSize: Pi,
          colorFocusWarning: zi,
          boxShadowFocusWarning: $i,
          borderWarning: Ai,
          borderFocusWarning: Di,
          borderHoverWarning: Ei,
          colorFocusError: Ti,
          boxShadowFocusError: Oi,
          borderError: Mi,
          borderFocusError: Ii,
          borderHoverError: of,
          clearSize: af,
          clearColor: lf,
          clearColorHover: sf,
          clearColorPressed: df,
          iconColor: uf,
          iconColorDisabled: cf,
          suffixTextColor: ff,
          countTextColor: hf,
          countTextColorDisabled: vf,
          iconColorHover: gf,
          iconColorPressed: pf,
          loadingColor: mf,
          loadingColorError: bf,
          loadingColorWarning: xf,
          fontWeight: yf,
          [Z("padding", _)]: Cf,
          [Z("fontSize", _)]: wf,
          [Z("height", _)]: Sf
        }
      } = a.value, {
        left: Bf,
        right: kf
      } = Nt(Cf);
      return {
        "--n-bezier": Q,
        "--n-count-text-color": hf,
        "--n-count-text-color-disabled": vf,
        "--n-color": Ce,
        "--n-font-size": wf,
        "--n-font-weight": yf,
        "--n-border-radius": Oe,
        "--n-height": Sf,
        "--n-padding-left": Bf,
        "--n-padding-right": kf,
        "--n-text-color": qe,
        "--n-caret-color": Ne,
        "--n-text-decoration-color": Yt,
        "--n-border": yn,
        "--n-border-disabled": Cn,
        "--n-border-hover": Gn,
        "--n-border-focus": _r,
        "--n-placeholder-color": Wr,
        "--n-placeholder-color-disabled": Vr,
        "--n-icon-size": Pi,
        "--n-line-height-textarea": Kr,
        "--n-color-disabled": Ur,
        "--n-color-focus": zn,
        "--n-text-color-disabled": $n,
        "--n-box-shadow-focus": Fi,
        "--n-loading-color": mf,
        // form warning
        "--n-caret-color-warning": vt,
        "--n-color-focus-warning": zi,
        "--n-box-shadow-focus-warning": $i,
        "--n-border-warning": Ai,
        "--n-border-focus-warning": Di,
        "--n-border-hover-warning": Ei,
        "--n-loading-color-warning": xf,
        // form error
        "--n-caret-color-error": at,
        "--n-color-focus-error": Ti,
        "--n-box-shadow-focus-error": Oi,
        "--n-border-error": Mi,
        "--n-border-focus-error": Ii,
        "--n-border-hover-error": of,
        "--n-loading-color-error": bf,
        // clear-button
        "--n-clear-color": lf,
        "--n-clear-size": af,
        "--n-clear-color-hover": sf,
        "--n-clear-color-pressed": df,
        "--n-icon-color": uf,
        "--n-icon-color-hover": gf,
        "--n-icon-color-pressed": pf,
        "--n-icon-color-disabled": cf,
        "--n-suffix-text-color": ff
      };
    }), Ut = o ? Ze("input", $(() => {
      const {
        value: _
      } = C;
      return _[0];
    }), tn, e) : void 0;
    return Object.assign(Object.assign({}, Vt), {
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
      passwordVisible: K,
      mergedPlaceholder: O,
      showPlaceholder1: n,
      showPlaceholder2: D,
      mergedFocus: E,
      isComposing: F,
      activated: A,
      showClearButton: H,
      mergedSize: C,
      mergedDisabled: k,
      textDecorationStyle: te,
      mergedClsPrefix: t,
      mergedBordered: r,
      mergedShowPasswordOn: L,
      placeholderStyle: Ve,
      mergedStatus: R,
      textAreaScrollContainerWidth: X,
      // methods
      handleTextAreaScroll: Et,
      handleCompositionStart: et,
      handleCompositionEnd: ft,
      handleInput: ht,
      handleInputBlur: ye,
      handleInputFocus: $e,
      handleWrapperBlur: Ie,
      handleWrapperFocus: Qe,
      handleMouseEnter: mt,
      handleMouseLeave: rt,
      handleMouseDown: At,
      handleChange: he,
      handleClick: Te,
      handleClear: dt,
      handlePasswordToggleClick: wt,
      handlePasswordToggleMousedown: tt,
      handleWrapperKeydown: Be,
      handleWrapperKeyup: ce,
      handleTextAreaMirrorResize: ot,
      getTextareaScrollContainer: () => s.value,
      mergedTheme: a,
      cssVars: o ? void 0 : tn,
      themeClass: Ut == null ? void 0 : Ut.themeClass,
      onRender: Ut == null ? void 0 : Ut.onRender
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
    }, _e(d.prefix, (u) => u && f("div", {
      class: `${r}-input__prefix`
    }, u)), a === "textarea" ? f(pr, {
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
        }, this.mergedPlaceholder[0]) : null, this.autosize ? f(Ar, {
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
    }, " ") : null), !this.pair && _e(d.suffix, (u) => u || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? f("div", {
      class: `${r}-input__suffix`
    }, [_e(d["clear-icon-placeholder"], (c) => (this.clearable || c) && f(wa, {
      clsPrefix: r,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => c,
      icon: () => {
        var v, g;
        return (g = (v = this.$slots)["clear-icon"]) === null || g === void 0 ? void 0 : g.call(v);
      }
    })), this.internalLoadingBeforeSuffix ? null : u, this.loading !== void 0 ? f(_u, {
      clsPrefix: r,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? u : null, this.showCount && this.type !== "textarea" ? f(Js, null, {
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
    }, this.passwordVisible ? en(d["password-visible-icon"], () => [f(xt, {
      clsPrefix: r
    }, {
      default: () => f(Cx, null)
    })]) : en(d["password-invisible-icon"], () => [f(xt, {
      clsPrefix: r
    }, {
      default: () => f(wx, null)
    })])) : null]) : null)), this.pair ? f("span", {
      class: `${r}-input__separator`
    }, en(d.separator, () => [this.separator])) : null, this.pair ? f("div", {
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
    }, f("span", null, this.mergedPlaceholder[1])) : null), _e(d.suffix, (u) => (this.clearable || u) && f("div", {
      class: `${r}-input__suffix`
    }, [this.clearable && f(wa, {
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
    }) : null, this.showCount && a === "textarea" ? f(Js, null, {
      default: (u) => {
        var c;
        const {
          renderCount: v
        } = this;
        return v ? v(u) : (c = d.count) === null || c === void 0 ? void 0 : c.call(d, u);
      }
    }) : null);
  }
}), q1 = z("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [M(">", [z("input", [M("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), M("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), z("button", [M("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [T("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), M("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [T("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), M("*", [M("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [M(">", [z("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), z("base-selection", [z("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), z("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), T("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), M("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [M(">", [z("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), z("base-selection", [z("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), z("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), T("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), G1 = {}, X1 = ee({
  name: "InputGroup",
  props: G1,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e);
    return Kn("-input-group", q1, t), {
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
}), Y1 = z("input-group-label", `
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
 `)]), Z1 = Object.assign(Object.assign({}, ve.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
}), J1 = ee({
  name: "InputGroupLabel",
  props: Z1,
  setup(e) {
    const {
      mergedBorderedRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("Input", "-input-group-label", Y1, bl, e, r), a = $(() => {
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
    }), l = o ? Ze("input-group-label", $(() => e.size[0]), a, e) : void 0;
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
function ai(e) {
  return e.type === "group";
}
function qu(e) {
  return e.type === "ignored";
}
function ta(e, t) {
  try {
    return !!(1 + t.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
function Gu(e, t) {
  return {
    getIsGroup: ai,
    getIgnored: qu,
    getKey(o) {
      return ai(o) ? o.name || o.key || "key-required" : o[e];
    },
    getChildren(o) {
      return o[t];
    }
  };
}
function Q1(e, t, r, o) {
  if (!t) return e;
  function i(a) {
    if (!Array.isArray(a)) return [];
    const l = [];
    for (const s of a)
      if (ai(s)) {
        const d = i(s[o]);
        d.length && l.push(Object.assign({}, s, {
          [o]: d
        }));
      } else {
        if (qu(s))
          continue;
        t(r, s) && l.push(s);
      }
    return l;
  }
  return i(e);
}
function ey(e, t, r) {
  const o = /* @__PURE__ */ new Map();
  return e.forEach((i) => {
    ai(i) ? i[r].forEach((a) => {
      o.set(a[t], a);
    }) : o.set(i[t], i);
  }), o;
}
function Xn(e) {
  return Ge(e, [255, 255, 255, 0.16]);
}
function Ho(e) {
  return Ge(e, [0, 0, 0, 0.12]);
}
const ty = "n-button-group", ny = {
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
function ry(e) {
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
    infoColorHover: S,
    infoColorPressed: C,
    successColor: k,
    successColorHover: R,
    successColorPressed: w,
    warningColor: B,
    warningColorHover: F,
    warningColorPressed: A,
    errorColor: V,
    errorColorHover: O,
    errorColorPressed: n,
    fontWeight: D,
    buttonColor2: E,
    buttonColor2Hover: H,
    buttonColor2Pressed: L,
    fontWeightStrong: K
  } = e;
  return Object.assign(Object.assign({}, ny), {
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
    colorSecondary: E,
    colorSecondaryHover: H,
    colorSecondaryPressed: L,
    // tertiary
    colorTertiary: E,
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
    colorHoverInfo: S,
    colorPressedInfo: C,
    colorFocusInfo: S,
    colorDisabledInfo: y,
    textColorInfo: b,
    textColorHoverInfo: b,
    textColorPressedInfo: b,
    textColorFocusInfo: b,
    textColorDisabledInfo: b,
    textColorTextInfo: y,
    textColorTextHoverInfo: S,
    textColorTextPressedInfo: C,
    textColorTextFocusInfo: S,
    textColorTextDisabledInfo: v,
    textColorGhostInfo: y,
    textColorGhostHoverInfo: S,
    textColorGhostPressedInfo: C,
    textColorGhostFocusInfo: S,
    textColorGhostDisabledInfo: y,
    borderInfo: `1px solid ${y}`,
    borderHoverInfo: `1px solid ${S}`,
    borderPressedInfo: `1px solid ${C}`,
    borderFocusInfo: `1px solid ${S}`,
    borderDisabledInfo: `1px solid ${y}`,
    rippleColorInfo: y,
    // success
    colorSuccess: k,
    colorHoverSuccess: R,
    colorPressedSuccess: w,
    colorFocusSuccess: R,
    colorDisabledSuccess: k,
    textColorSuccess: b,
    textColorHoverSuccess: b,
    textColorPressedSuccess: b,
    textColorFocusSuccess: b,
    textColorDisabledSuccess: b,
    textColorTextSuccess: k,
    textColorTextHoverSuccess: R,
    textColorTextPressedSuccess: w,
    textColorTextFocusSuccess: R,
    textColorTextDisabledSuccess: v,
    textColorGhostSuccess: k,
    textColorGhostHoverSuccess: R,
    textColorGhostPressedSuccess: w,
    textColorGhostFocusSuccess: R,
    textColorGhostDisabledSuccess: k,
    borderSuccess: `1px solid ${k}`,
    borderHoverSuccess: `1px solid ${R}`,
    borderPressedSuccess: `1px solid ${w}`,
    borderFocusSuccess: `1px solid ${R}`,
    borderDisabledSuccess: `1px solid ${k}`,
    rippleColorSuccess: k,
    // warning
    colorWarning: B,
    colorHoverWarning: F,
    colorPressedWarning: A,
    colorFocusWarning: F,
    colorDisabledWarning: B,
    textColorWarning: b,
    textColorHoverWarning: b,
    textColorPressedWarning: b,
    textColorFocusWarning: b,
    textColorDisabledWarning: b,
    textColorTextWarning: B,
    textColorTextHoverWarning: F,
    textColorTextPressedWarning: A,
    textColorTextFocusWarning: F,
    textColorTextDisabledWarning: v,
    textColorGhostWarning: B,
    textColorGhostHoverWarning: F,
    textColorGhostPressedWarning: A,
    textColorGhostFocusWarning: F,
    textColorGhostDisabledWarning: B,
    borderWarning: `1px solid ${B}`,
    borderHoverWarning: `1px solid ${F}`,
    borderPressedWarning: `1px solid ${A}`,
    borderFocusWarning: `1px solid ${F}`,
    borderDisabledWarning: `1px solid ${B}`,
    rippleColorWarning: B,
    // error
    colorError: V,
    colorHoverError: O,
    colorPressedError: n,
    colorFocusError: O,
    colorDisabledError: V,
    textColorError: b,
    textColorHoverError: b,
    textColorPressedError: b,
    textColorFocusError: b,
    textColorDisabledError: b,
    textColorTextError: V,
    textColorTextHoverError: O,
    textColorTextPressedError: n,
    textColorTextFocusError: O,
    textColorTextDisabledError: v,
    textColorGhostError: V,
    textColorGhostHoverError: O,
    textColorGhostPressedError: n,
    textColorGhostFocusError: O,
    textColorGhostDisabledError: V,
    borderError: `1px solid ${V}`,
    borderHoverError: `1px solid ${O}`,
    borderPressedError: `1px solid ${n}`,
    borderFocusError: `1px solid ${O}`,
    borderDisabledError: `1px solid ${V}`,
    rippleColorError: V,
    waveOpacity: "0.6",
    fontWeight: D,
    fontWeightStrong: K
  });
}
const Ci = {
  name: "Button",
  common: Je,
  self: ry
}, oy = M([z("button", `
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
 `, [N("color", [T("border", {
  borderColor: "var(--n-border-color)"
}), N("disabled", [T("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), Ye("disabled", [M("&:focus", [T("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), M("&:hover", [T("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), M("&:active", [T("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), N("pressed", [T("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), N("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [T("border", {
  border: "var(--n-border-disabled)"
})]), Ye("disabled", [M("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [T("state-border", {
  border: "var(--n-border-focus)"
})]), M("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [T("state-border", {
  border: "var(--n-border-hover)"
})]), M("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [T("state-border", {
  border: "var(--n-border-pressed)"
})]), N("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [T("state-border", {
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
})]), Nr && "MozBoxSizing" in document.createElement("div").style ? M("&::moz-focus-inner", {
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
 `, [Zt({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), T1()]), T("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [M("~", [T("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), N("block", `
 display: flex;
 width: 100%;
 `), N("dashed", [T("border, state-border", {
  borderStyle: "dashed !important"
})]), N("disabled", {
  cursor: "not-allowed",
  opacity: "var(--n-opacity-disabled)"
})]), M("@keyframes button-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
  }
}), M("@keyframes button-wave-opacity", {
  from: {
    opacity: "var(--n-wave-opacity)"
  },
  to: {
    opacity: 0
  }
})]), iy = Object.assign(Object.assign({}, ve.props), {
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
    default: !Ku
  }
}), lr = ee({
  name: "Button",
  props: iy,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && it(() => {
      const {
        dashed: C,
        ghost: k,
        text: R,
        secondary: w,
        tertiary: B,
        quaternary: F
      } = e;
      (C || k || R) && (w || B || F) && ct("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const t = I(null), r = I(null), o = I(!1), i = Ue(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = pe(ty, {}), {
      mergedSizeRef: l
    } = _n({}, {
      defaultSize: "medium",
      mergedSize: (C) => {
        const {
          size: k
        } = e;
        if (k) return k;
        const {
          size: R
        } = a;
        if (R) return R;
        const {
          mergedSize: w
        } = C || {};
        return w ? w.value : "medium";
      }
    }), s = $(() => e.focusable && !e.disabled), d = (C) => {
      var k;
      s.value || C.preventDefault(), !e.nativeFocusBehavior && (C.preventDefault(), !e.disabled && s.value && ((k = t.value) === null || k === void 0 || k.focus({
        preventScroll: !0
      })));
    }, u = (C) => {
      var k;
      if (!e.disabled && !e.loading) {
        const {
          onClick: R
        } = e;
        R && re(R, C), e.text || (k = r.value) === null || k === void 0 || k.play();
      }
    }, c = (C) => {
      switch (C.key) {
        case "Enter":
          if (!e.keyboard)
            return;
          o.value = !1;
      }
    }, v = (C) => {
      switch (C.key) {
        case "Enter":
          if (!e.keyboard || e.loading) {
            C.preventDefault();
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
    } = Ae(e), x = ve("Button", "-button", oy, Ci, e, h), b = zt("Button", p, h), y = $(() => {
      const C = x.value, {
        common: {
          cubicBezierEaseInOut: k,
          cubicBezierEaseOut: R
        },
        self: w
      } = C, {
        rippleDuration: B,
        opacityDisabled: F,
        fontWeight: A,
        fontWeightStrong: V
      } = w, O = l.value, {
        dashed: n,
        type: D,
        ghost: E,
        text: H,
        color: L,
        round: K,
        circle: te,
        textColor: X,
        secondary: U,
        tertiary: j,
        quaternary: q,
        strong: Y
      } = e, ae = {
        "--n-font-weight": Y ? V : A
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
      const fe = D === "tertiary", we = D === "default", G = fe ? "default" : D;
      if (H) {
        const ye = X || L;
        le = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": ye || w[Z("textColorText", G)],
          "--n-text-color-hover": ye ? Xn(ye) : w[Z("textColorTextHover", G)],
          "--n-text-color-pressed": ye ? Ho(ye) : w[Z("textColorTextPressed", G)],
          "--n-text-color-focus": ye ? Xn(ye) : w[Z("textColorTextHover", G)],
          "--n-text-color-disabled": ye || w[Z("textColorTextDisabled", G)]
        };
      } else if (E || n) {
        const ye = X || L;
        le = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": L || w[Z("rippleColor", G)],
          "--n-text-color": ye || w[Z("textColorGhost", G)],
          "--n-text-color-hover": ye ? Xn(ye) : w[Z("textColorGhostHover", G)],
          "--n-text-color-pressed": ye ? Ho(ye) : w[Z("textColorGhostPressed", G)],
          "--n-text-color-focus": ye ? Xn(ye) : w[Z("textColorGhostHover", G)],
          "--n-text-color-disabled": ye || w[Z("textColorGhostDisabled", G)]
        };
      } else if (U) {
        const ye = we ? w.textColor : fe ? w.textColorTertiary : w[Z("color", G)], $e = L || ye, Ie = D !== "default" && D !== "tertiary";
        le = {
          "--n-color": Ie ? De($e, {
            alpha: Number(w.colorOpacitySecondary)
          }) : w.colorSecondary,
          "--n-color-hover": Ie ? De($e, {
            alpha: Number(w.colorOpacitySecondaryHover)
          }) : w.colorSecondaryHover,
          "--n-color-pressed": Ie ? De($e, {
            alpha: Number(w.colorOpacitySecondaryPressed)
          }) : w.colorSecondaryPressed,
          "--n-color-focus": Ie ? De($e, {
            alpha: Number(w.colorOpacitySecondaryHover)
          }) : w.colorSecondaryHover,
          "--n-color-disabled": w.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": $e,
          "--n-text-color-hover": $e,
          "--n-text-color-pressed": $e,
          "--n-text-color-focus": $e,
          "--n-text-color-disabled": $e
        };
      } else if (j || q) {
        const ye = we ? w.textColor : fe ? w.textColorTertiary : w[Z("color", G)], $e = L || ye;
        j ? (le["--n-color"] = w.colorTertiary, le["--n-color-hover"] = w.colorTertiaryHover, le["--n-color-pressed"] = w.colorTertiaryPressed, le["--n-color-focus"] = w.colorSecondaryHover, le["--n-color-disabled"] = w.colorTertiary) : (le["--n-color"] = w.colorQuaternary, le["--n-color-hover"] = w.colorQuaternaryHover, le["--n-color-pressed"] = w.colorQuaternaryPressed, le["--n-color-focus"] = w.colorQuaternaryHover, le["--n-color-disabled"] = w.colorQuaternary), le["--n-ripple-color"] = "#0000", le["--n-text-color"] = $e, le["--n-text-color-hover"] = $e, le["--n-text-color-pressed"] = $e, le["--n-text-color-focus"] = $e, le["--n-text-color-disabled"] = $e;
      } else
        le = {
          "--n-color": L || w[Z("color", G)],
          "--n-color-hover": L ? Xn(L) : w[Z("colorHover", G)],
          "--n-color-pressed": L ? Ho(L) : w[Z("colorPressed", G)],
          "--n-color-focus": L ? Xn(L) : w[Z("colorFocus", G)],
          "--n-color-disabled": L || w[Z("colorDisabled", G)],
          "--n-ripple-color": L || w[Z("rippleColor", G)],
          "--n-text-color": X || (L ? w.textColorPrimary : fe ? w.textColorTertiary : w[Z("textColor", G)]),
          "--n-text-color-hover": X || (L ? w.textColorHoverPrimary : w[Z("textColorHover", G)]),
          "--n-text-color-pressed": X || (L ? w.textColorPressedPrimary : w[Z("textColorPressed", G)]),
          "--n-text-color-focus": X || (L ? w.textColorFocusPrimary : w[Z("textColorFocus", G)]),
          "--n-text-color-disabled": X || (L ? w.textColorDisabledPrimary : w[Z("textColorDisabled", G)])
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
        "--n-border": w[Z("border", G)],
        "--n-border-hover": w[Z("borderHover", G)],
        "--n-border-pressed": w[Z("borderPressed", G)],
        "--n-border-focus": w[Z("borderFocus", G)],
        "--n-border-disabled": w[Z("borderDisabled", G)]
      };
      const {
        [Z("height", O)]: Fe,
        [Z("fontSize", O)]: be,
        [Z("padding", O)]: Pe,
        [Z("paddingRound", O)]: ze,
        [Z("iconSize", O)]: st,
        [Z("borderRadius", O)]: et,
        [Z("iconMargin", O)]: ft,
        waveOpacity: ht
      } = w, xe = {
        "--n-width": te && !H ? Fe : "initial",
        "--n-height": H ? "initial" : Fe,
        "--n-font-size": be,
        "--n-padding": te || H ? "initial" : K ? ze : Pe,
        "--n-icon-size": st,
        "--n-icon-margin": ft,
        "--n-border-radius": H ? "initial" : te || K ? Fe : et
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": k,
        "--n-bezier-ease-out": R,
        "--n-ripple-duration": B,
        "--n-opacity-disabled": F,
        "--n-wave-opacity": ht
      }, ae), le), ue), xe);
    }), S = m ? Ze("button", $(() => {
      let C = "";
      const {
        dashed: k,
        type: R,
        ghost: w,
        text: B,
        color: F,
        round: A,
        circle: V,
        textColor: O,
        secondary: n,
        tertiary: D,
        quaternary: E,
        strong: H
      } = e;
      k && (C += "a"), w && (C += "b"), B && (C += "c"), A && (C += "d"), V && (C += "e"), n && (C += "f"), D && (C += "g"), E && (C += "h"), H && (C += "i"), F && (C += `j${Zo(F)}`), O && (C += `k${Zo(O)}`);
      const {
        value: L
      } = l;
      return C += `l${L[0]}`, C += `m${R[0]}`, C;
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
      customColorCssVars: $(() => {
        const {
          color: C
        } = e;
        if (!C) return null;
        const k = Xn(C);
        return {
          "--n-border-color": C,
          "--n-border-color-hover": k,
          "--n-border-color-pressed": Ho(C),
          "--n-border-color-focus": k,
          "--n-border-color-disabled": C
        };
      }),
      cssVars: m ? void 0 : y,
      themeClass: S == null ? void 0 : S.themeClass,
      onRender: S == null ? void 0 : S.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e,
      tag: t,
      onRender: r
    } = this;
    r == null || r();
    const o = _e(this.$slots.default, (i) => i && f("span", {
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
    }, this.iconPlacement === "right" && o, f(vl, {
      width: !0
    }, {
      default: () => _e(this.$slots.icon, (i) => (this.loading || this.renderIcon || i) && f("span", {
        class: `${e}-button__icon`,
        style: {
          margin: Rr(this.$slots.default) ? "0" : ""
        }
      }, f(gr, null, {
        default: () => this.loading ? f(Un, {
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
    }), this.iconPlacement === "left" && o, this.text ? null : f(M1, {
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
}), ay = {
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
function ly(e) {
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
  return Object.assign(Object.assign({}, ay), {
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
const Xu = {
  name: "Card",
  common: Je,
  self: ly
}, sy = M([z("card", `
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
 `, [Ad({
  background: "var(--n-color-modal)"
}), N("hoverable", [M("&:hover", "box-shadow: var(--n-box-shadow);")]), N("content-segmented", [M(">", [T("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), N("content-soft-segmented", [M(">", [T("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), N("footer-segmented", [M(">", [T("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), N("footer-soft-segmented", [M(">", [T("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), M(">", [z("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [T("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), T("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), T("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), T("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), T("content", "flex: 1; min-width: 0;"), T("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [M("&:first-child", {
  paddingTop: "var(--n-padding-bottom)"
})]), T("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), z("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [M("img", `
 display: block;
 width: 100%;
 `)]), N("bordered", `
 border: 1px solid var(--n-border-color);
 `, [M("&:target", "border-color: var(--n-color-target);")]), N("action-segmented", [M(">", [T("action", [M("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("content-segmented, content-soft-segmented", [M(">", [T("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [M("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("footer-segmented, footer-soft-segmented", [M(">", [T("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [M("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("embedded", `
 background-color: var(--n-color-embedded);
 `)]), fi(z("card", `
 background: var(--n-color-modal);
 `, [N("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), La(z("card", `
 background: var(--n-color-popover);
 `, [N("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), xl = {
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
}, dy = Ln(xl), uy = Object.assign(Object.assign({}, ve.props), xl), cy = ee({
  name: "Card",
  props: uy,
  slots: Object,
  setup(e) {
    const t = () => {
      const {
        onClose: u
      } = e;
      u && re(u);
    }, {
      inlineThemeDisabled: r,
      mergedClsPrefixRef: o,
      mergedRtlRef: i
    } = Ae(e), a = ve("Card", "-card", sy, Xu, e, o), l = zt("Card", i, o), s = $(() => {
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
          lineHeight: S,
          closeIconColor: C,
          closeIconColorHover: k,
          closeIconColorPressed: R,
          closeColorHover: w,
          closeColorPressed: B,
          closeBorderRadius: F,
          closeIconSize: A,
          closeSize: V,
          boxShadow: O,
          colorPopover: n,
          colorEmbedded: D,
          colorEmbeddedModal: E,
          colorEmbeddedPopover: H,
          [Z("padding", u)]: L,
          [Z("fontSize", u)]: K,
          [Z("titleFontSize", u)]: te
        },
        common: {
          cubicBezierEaseInOut: X
        }
      } = a.value, {
        top: U,
        left: j,
        bottom: q
      } = Nt(L);
      return {
        "--n-bezier": X,
        "--n-border-radius": y,
        "--n-color": c,
        "--n-color-modal": v,
        "--n-color-popover": n,
        "--n-color-embedded": D,
        "--n-color-embedded-modal": E,
        "--n-color-embedded-popover": H,
        "--n-color-target": g,
        "--n-text-color": m,
        "--n-line-height": S,
        "--n-action-color": b,
        "--n-title-text-color": h,
        "--n-title-font-weight": p,
        "--n-close-icon-color": C,
        "--n-close-icon-color-hover": k,
        "--n-close-icon-color-pressed": R,
        "--n-close-color-hover": w,
        "--n-close-color-pressed": B,
        "--n-border-color": x,
        "--n-box-shadow": O,
        // size
        "--n-padding-top": U,
        "--n-padding-bottom": q,
        "--n-padding-left": j,
        "--n-font-size": K,
        "--n-title-font-size": te,
        "--n-close-size": V,
        "--n-close-icon-size": A,
        "--n-close-border-radius": F
      };
    }), d = r ? Ze("card", $(() => e.size[0]), s, e) : void 0;
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
    }, _e(d.cover, (u) => {
      const c = this.cover ? rn([this.cover()]) : u;
      return c && f("div", {
        class: `${o}-card-cover`,
        role: "none"
      }, c);
    }), _e(d.header, (u) => {
      const {
        title: c
      } = this, v = c ? rn(typeof c == "function" ? [c()] : [c]) : u;
      return v || this.closable ? f("div", {
        class: [`${o}-card-header`, this.headerClass],
        style: this.headerStyle,
        role: "heading"
      }, f("div", {
        class: `${o}-card-header__main`,
        role: "heading"
      }, v), _e(d["header-extra"], (g) => {
        const m = this.headerExtra ? rn([this.headerExtra()]) : g;
        return m && f("div", {
          class: [`${o}-card-header__extra`, this.headerExtraClass],
          style: this.headerExtraStyle
        }, m);
      }), this.closable && f(Bo, {
        clsPrefix: o,
        class: `${o}-card-header__close`,
        onClick: this.handleCloseClick,
        absolute: !0
      })) : null;
    }), _e(d.default, (u) => {
      const {
        content: c
      } = this, v = c ? rn(typeof c == "function" ? [c()] : [c]) : u;
      return v && f("div", {
        class: [`${o}-card__content`, this.contentClass],
        style: this.contentStyle,
        role: "none"
      }, v);
    }), _e(d.footer, (u) => {
      const c = this.footer ? rn([this.footer()]) : u;
      return c && f("div", {
        class: [`${o}-card__footer`, this.footerClass],
        style: this.footerStyle,
        role: "none"
      }, c);
    }), _e(d.action, (u) => {
      const c = this.action ? rn([this.action()]) : u;
      return c && f("div", {
        class: `${o}-card__action`,
        role: "none"
      }, c);
    }));
  }
}), fy = {
  sizeSmall: "14px",
  sizeMedium: "16px",
  sizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function hy(e) {
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
  return Object.assign(Object.assign({}, fy), {
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
    boxShadowFocus: `0 0 0 2px ${De(d, {
      alpha: 0.3
    })}`,
    textColor: u,
    textColorDisabled: l
  });
}
const Yu = {
  name: "Checkbox",
  common: Je,
  self: hy
}, Zu = "n-checkbox-group", vy = {
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
}, Ju = ee({
  name: "CheckboxGroup",
  props: vy,
  setup(e) {
    process.env.NODE_ENV !== "production" && it(() => {
      e.onChange !== void 0 && ct("checkbox-group", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = _n(e), {
      mergedSizeRef: o,
      mergedDisabledRef: i
    } = r, a = I(e.defaultValue), l = $(() => e.value), s = Mt(l, a), d = $(() => {
      var v;
      return ((v = s.value) === null || v === void 0 ? void 0 : v.length) || 0;
    }), u = $(() => Array.isArray(s.value) ? new Set(s.value) : /* @__PURE__ */ new Set());
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
        const y = Array.from(s.value), S = y.findIndex((C) => C === g);
        v ? ~S || (y.push(g), b && re(b, y, {
          actionType: "check",
          value: g
        }), x && re(x, y, {
          actionType: "check",
          value: g
        }), m(), h(), a.value = y, p && re(p, y)) : ~S && (y.splice(S, 1), b && re(b, y, {
          actionType: "uncheck",
          value: g
        }), x && re(x, y, {
          actionType: "uncheck",
          value: g
        }), p && re(p, y), a.value = y, m(), h());
      } else
        v ? (b && re(b, [g], {
          actionType: "check",
          value: g
        }), x && re(x, [g], {
          actionType: "check",
          value: g
        }), p && re(p, [g]), a.value = [g], m(), h()) : (b && re(b, [], {
          actionType: "uncheck",
          value: g
        }), x && re(x, [], {
          actionType: "uncheck",
          value: g
        }), p && re(p, []), a.value = [], m(), h());
    }
    return Ee(Zu, {
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
}), gy = () => f("svg", {
  viewBox: "0 0 64 64",
  class: "check-icon"
}, f("path", {
  d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"
})), py = () => f("svg", {
  viewBox: "0 0 100 100",
  class: "line-icon"
}, f("path", {
  d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"
})), my = M([
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
 `, [N("show-label", "line-height: var(--n-label-line-height);"), M("&:hover", [z("checkbox-box", [T("border", "border: var(--n-border-checked);")])]), M("&:focus:not(:active)", [z("checkbox-box", [T("border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), N("inside-table", [z("checkbox-box", `
 background-color: var(--n-merged-color-table);
 `)]), N("checked", [z("checkbox-box", `
 background-color: var(--n-color-checked);
 `, [z("checkbox-icon", [
    // if not set width to 100%, safari & old chrome won't display the icon
    M(".check-icon", `
 opacity: 1;
 transform: scale(1);
 `)
  ])])]), N("indeterminate", [z("checkbox-box", [z("checkbox-icon", [M(".check-icon", `
 opacity: 0;
 transform: scale(.5);
 `), M(".line-icon", `
 opacity: 1;
 transform: scale(1);
 `)])])]), N("checked, indeterminate", [M("&:focus:not(:active)", [z("checkbox-box", [T("border", `
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), z("checkbox-box", `
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `, [T("border", {
    border: "var(--n-border-checked)"
  })])]), N("disabled", {
    cursor: "not-allowed"
  }, [N("checked", [z("checkbox-box", `
 background-color: var(--n-color-disabled-checked);
 `, [T("border", {
    border: "var(--n-border-disabled-checked)"
  }), z("checkbox-icon", [M(".check-icon, .line-icon", {
    fill: "var(--n-check-mark-color-disabled-checked)"
  })])])]), z("checkbox-box", `
 background-color: var(--n-color-disabled);
 `, [T("border", `
 border: var(--n-border-disabled);
 `), z("checkbox-icon", [M(".check-icon, .line-icon", `
 fill: var(--n-check-mark-color-disabled);
 `)])]), T("label", `
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
 `, [T("border", `
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
 `, [M(".check-icon, .line-icon", `
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
 `), Zt({
    left: "1px",
    top: "1px"
  })])]), T("label", `
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `, [M("&:empty", {
    display: "none"
  })])]),
  // modal table header checkbox
  fi(z("checkbox", `
 --n-merged-color-table: var(--n-color-table-modal);
 `)),
  // popover table header checkbox
  La(z("checkbox", `
 --n-merged-color-table: var(--n-color-table-popover);
 `))
]), by = Object.assign(Object.assign({}, ve.props), {
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
}), wi = ee({
  name: "Checkbox",
  props: by,
  setup(e) {
    process.env.NODE_ENV !== "production" && it(() => {
      e.onChange && ct("checkbox", "`on-change` is deprecated, please use `on-update:checked` instead.");
    });
    const t = pe(Zu, null), r = I(null), {
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = I(e.defaultChecked), s = ie(e, "checked"), d = Mt(s, l), u = Ue(() => {
      if (t) {
        const R = t.valueSetRef.value;
        return R && e.value !== void 0 ? R.has(e.value) : !1;
      } else
        return d.value === e.checkedValue;
    }), c = _n(e, {
      mergedSize(R) {
        const {
          size: w
        } = e;
        if (w !== void 0) return w;
        if (t) {
          const {
            value: B
          } = t.mergedSizeRef;
          if (B !== void 0)
            return B;
        }
        if (R) {
          const {
            mergedSize: B
          } = R;
          if (B !== void 0) return B.value;
        }
        return "medium";
      },
      mergedDisabled(R) {
        const {
          disabled: w
        } = e;
        if (w !== void 0) return w;
        if (t) {
          if (t.disabledRef.value) return !0;
          const {
            maxRef: {
              value: B
            },
            checkedCountRef: F
          } = t;
          if (B !== void 0 && F.value >= B && !u.value)
            return !0;
          const {
            minRef: {
              value: A
            }
          } = t;
          if (A !== void 0 && F.value <= A && u.value)
            return !0;
        }
        return R ? R.disabled.value : !1;
      }
    }), {
      mergedDisabledRef: v,
      mergedSizeRef: g
    } = c, m = ve("Checkbox", "-checkbox", my, Yu, e, o);
    function h(R) {
      if (t && e.value !== void 0)
        t.toggleCheckbox(!u.value, e.value);
      else {
        const {
          onChange: w,
          "onUpdate:checked": B,
          onUpdateChecked: F
        } = e, {
          nTriggerFormInput: A,
          nTriggerFormChange: V
        } = c, O = u.value ? e.uncheckedValue : e.checkedValue;
        B && re(B, O, R), F && re(F, O, R), w && re(w, O, R), A(), V(), l.value = O;
      }
    }
    function p(R) {
      v.value || h(R);
    }
    function x(R) {
      if (!v.value)
        switch (R.key) {
          case " ":
          case "Enter":
            h(R);
        }
    }
    function b(R) {
      switch (R.key) {
        case " ":
          R.preventDefault();
      }
    }
    const y = {
      focus: () => {
        var R;
        (R = r.value) === null || R === void 0 || R.focus();
      },
      blur: () => {
        var R;
        (R = r.value) === null || R === void 0 || R.blur();
      }
    }, S = zt("Checkbox", a, o), C = $(() => {
      const {
        value: R
      } = g, {
        common: {
          cubicBezierEaseInOut: w
        },
        self: {
          borderRadius: B,
          color: F,
          colorChecked: A,
          colorDisabled: V,
          colorTableHeader: O,
          colorTableHeaderModal: n,
          colorTableHeaderPopover: D,
          checkMarkColor: E,
          checkMarkColorDisabled: H,
          border: L,
          borderFocus: K,
          borderDisabled: te,
          borderChecked: X,
          boxShadowFocus: U,
          textColor: j,
          textColorDisabled: q,
          checkMarkColorDisabledChecked: Y,
          colorDisabledChecked: ae,
          borderDisabledChecked: le,
          labelPadding: fe,
          labelLineHeight: we,
          labelFontWeight: G,
          [Z("fontSize", R)]: ue,
          [Z("size", R)]: Fe
        }
      } = m.value;
      return {
        "--n-label-line-height": we,
        "--n-label-font-weight": G,
        "--n-size": Fe,
        "--n-bezier": w,
        "--n-border-radius": B,
        "--n-border": L,
        "--n-border-checked": X,
        "--n-border-focus": K,
        "--n-border-disabled": te,
        "--n-border-disabled-checked": le,
        "--n-box-shadow-focus": U,
        "--n-color": F,
        "--n-color-checked": A,
        "--n-color-table": O,
        "--n-color-table-modal": n,
        "--n-color-table-popover": D,
        "--n-color-disabled": V,
        "--n-color-disabled-checked": ae,
        "--n-text-color": j,
        "--n-text-color-disabled": q,
        "--n-check-mark-color": E,
        "--n-check-mark-color-disabled": H,
        "--n-check-mark-color-disabled-checked": Y,
        "--n-font-size": ue,
        "--n-label-padding": fe
      };
    }), k = i ? Ze("checkbox", $(() => g.value[0]), C, e) : void 0;
    return Object.assign(c, y, {
      rtlEnabled: S,
      selfRef: r,
      mergedClsPrefix: o,
      mergedDisabled: v,
      renderedChecked: u,
      mergedTheme: m,
      labelId: mn(),
      handleClick: p,
      handleKeyUp: x,
      handleKeyDown: b,
      cssVars: i ? void 0 : C,
      themeClass: k == null ? void 0 : k.themeClass,
      onRender: k == null ? void 0 : k.onRender
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
    const h = _e(t.default, (p) => d || p ? f("span", {
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
    }, f(gr, null, {
      default: () => this.indeterminate ? f("div", {
        key: "indeterminate",
        class: `${u}-checkbox-icon`
      }, py()) : f("div", {
        key: "check",
        class: `${u}-checkbox-icon`
      }, gy())
    }), f("div", {
      class: `${u}-checkbox-box__border`
    }))), h);
  }
});
function xy(e) {
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
const yy = {
  name: "Collapse",
  common: Je,
  self: xy
}, Cy = z("collapse", "width: 100%;", [z("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [N("disabled", [T("header", "cursor: not-allowed;", [T("header-main", `
 color: var(--n-title-text-color-disabled);
 `), z("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), z("collapse-item", "margin-left: 32px;"), M("&:first-child", "margin-top: 0;"), M("&:first-child >", [T("header", "padding-top: 0;")]), N("left-arrow-placement", [T("header", [z("collapse-item-arrow", "margin-right: 4px;")])]), N("right-arrow-placement", [T("header", [z("collapse-item-arrow", "margin-left: 4px;")])]), T("content-wrapper", [T("content-inner", "padding-top: 16px;"), Vu({
  duration: "0.15s"
})]), N("active", [T("header", [N("active", [z("collapse-item-arrow", "transform: rotate(90deg);")])])]), M("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), Ye("disabled", [N("trigger-area-main", [T("header", [T("header-main", "cursor: pointer;"), z("collapse-item-arrow", "cursor: default;")])]), N("trigger-area-arrow", [T("header", [z("collapse-item-arrow", "cursor: pointer;")])]), N("trigger-area-extra", [T("header", [T("header-extra", "cursor: pointer;")])])]), T("header", `
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `, [T("header-main", `
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), T("header-extra", `
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
 `)])])]), wy = Object.assign(Object.assign({}, ve.props), {
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
    validator: () => (process.env.NODE_ENV !== "production" && Ft("collapse", "`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead."), !0),
    default: void 0
  }
}), Qu = "n-collapse", Sy = ee({
  name: "Collapse",
  props: wy,
  slots: Object,
  setup(e, {
    slots: t
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = I(e.defaultExpandedNames), l = $(() => e.expandedNames), s = Mt(l, a), d = ve("Collapse", "-collapse", Cy, yy, e, r);
    function u(p) {
      const {
        "onUpdate:expandedNames": x,
        onUpdateExpandedNames: b,
        onExpandedNamesChange: y
      } = e;
      b && re(b, p), x && re(x, p), y && re(y, p), a.value = p;
    }
    function c(p) {
      const {
        onItemHeaderClick: x
      } = e;
      x && re(x, p);
    }
    function v(p, x, b) {
      const {
        accordion: y
      } = e, {
        value: S
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
      else if (!Array.isArray(S))
        u([x]), c({
          name: x,
          expanded: !0,
          event: b
        });
      else {
        const C = S.slice(), k = C.findIndex((R) => x === R);
        ~k ? (C.splice(k, 1), u(C), c({
          name: x,
          expanded: !1,
          event: b
        })) : (C.push(x), u(C), c({
          name: x,
          expanded: !0,
          event: b
        }));
      }
    }
    Ee(Qu, {
      props: e,
      mergedClsPrefixRef: r,
      expandedNamesRef: s,
      slots: t,
      toggleItem: v
    });
    const g = zt("Collapse", i, r), m = $(() => {
      const {
        common: {
          cubicBezierEaseInOut: p
        },
        self: {
          titleFontWeight: x,
          dividerColor: b,
          titlePadding: y,
          titleTextColor: S,
          titleTextColorDisabled: C,
          textColor: k,
          arrowColor: R,
          fontSize: w,
          titleFontSize: B,
          arrowColorDisabled: F,
          itemMargin: A
        }
      } = d.value;
      return {
        "--n-font-size": w,
        "--n-bezier": p,
        "--n-text-color": k,
        "--n-divider-color": b,
        "--n-title-padding": y,
        "--n-title-font-size": B,
        "--n-title-text-color": S,
        "--n-title-text-color-disabled": C,
        "--n-title-font-weight": x,
        "--n-arrow-color": R,
        "--n-arrow-color-disabled": F,
        "--n-item-margin": A
      };
    }), h = o ? Ze("collapse", void 0, m, e) : void 0;
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
}), By = ee({
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
      onceTrue: Td(ie(e, "show"))
    };
  },
  render() {
    return f(vl, null, {
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
        return i ? pn(a, [[zr, e]]) : e ? a : null;
      }
    });
  }
}), ky = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
}, Ry = ee({
  name: "CollapseItem",
  props: ky,
  setup(e) {
    const {
      mergedRtlRef: t
    } = Ae(e), r = mn(), o = Ue(() => {
      var v;
      return (v = e.name) !== null && v !== void 0 ? v : r;
    }), i = pe(Qu);
    i || jn("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
    const {
      expandedNamesRef: a,
      props: l,
      mergedClsPrefixRef: s,
      slots: d
    } = i, u = $(() => {
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
      rtlEnabled: zt("Collapse", t, s),
      collapseSlots: d,
      randomName: r,
      mergedClsPrefix: s,
      collapsed: u,
      triggerAreas: ie(l, "triggerAreas"),
      mergedDisplayDirective: $(() => {
        const {
          displayDirective: v
        } = e;
        return v || l.displayDirective;
      }),
      arrowPlacement: $(() => l.arrowPlacement),
      handleClick(v) {
        let g = "main";
        Gt(v, "arrow") && (g = "arrow"), Gt(v, "extra") && (g = "extra"), l.triggerAreas.includes(g) && i && !e.disabled && i.toggleItem(u.value, o.value, v);
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
    } = this, d = ca(t.header, {
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
    }, ca(c, {
      collapsed: o
    }, () => [f(xt, {
      clsPrefix: a
    }, {
      default: () => this.rtlEnabled ? f(mx, null) : f(cl, null)
    })])), r === "left" && d), F0(u, {
      collapsed: o
    }, (v) => f("div", {
      class: `${a}-collapse-item__header-extra`,
      onClick: this.handleClick,
      "data-extra": !0
    }, v))), f(By, {
      clsPrefix: a,
      displayDirective: i,
      show: !o
    }, t));
  }
}), Fy = {
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
    validator: () => (Ft("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, ec = ee({
  name: "ConfigProvider",
  alias: ["App"],
  props: Fy,
  setup(e) {
    const t = pe(sn, null), r = $(() => {
      const {
        theme: p
      } = e;
      if (p === null) return;
      const x = t == null ? void 0 : t.mergedThemeRef.value;
      return p === void 0 ? x : x === void 0 ? p : Object.assign({}, x, p);
    }), o = $(() => {
      const {
        themeOverrides: p
      } = e;
      if (p !== null) {
        if (p === void 0)
          return t == null ? void 0 : t.mergedThemeOverridesRef.value;
        {
          const x = t == null ? void 0 : t.mergedThemeOverridesRef.value;
          return x === void 0 ? p : Jr({}, x, p);
        }
      }
    }), i = Ue(() => {
      const {
        namespace: p
      } = e;
      return p === void 0 ? t == null ? void 0 : t.mergedNamespaceRef.value : p;
    }), a = Ue(() => {
      const {
        bordered: p
      } = e;
      return p === void 0 ? t == null ? void 0 : t.mergedBorderedRef.value : p;
    }), l = $(() => {
      const {
        icons: p
      } = e;
      return p === void 0 ? t == null ? void 0 : t.mergedIconsRef.value : p;
    }), s = $(() => {
      const {
        componentOptions: p
      } = e;
      return p !== void 0 ? p : t == null ? void 0 : t.mergedComponentPropsRef.value;
    }), d = $(() => {
      const {
        clsPrefix: p
      } = e;
      return p !== void 0 ? p : t ? t.mergedClsPrefixRef.value : Jo;
    }), u = $(() => {
      var p;
      const {
        rtl: x
      } = e;
      if (x === void 0)
        return t == null ? void 0 : t.mergedRtlRef.value;
      const b = {};
      for (const y of x)
        b[y.name] = Fl(y), (p = y.peers) === null || p === void 0 || p.forEach((S) => {
          S.name in b || (b[S.name] = Fl(S));
        });
      return b;
    }), c = $(() => e.breakpoints || (t == null ? void 0 : t.mergedBreakpointsRef.value)), v = e.inlineThemeDisabled || (t == null ? void 0 : t.inlineThemeDisabled), g = e.preflightStyleDisabled || (t == null ? void 0 : t.preflightStyleDisabled), m = e.styleMountTarget || (t == null ? void 0 : t.styleMountTarget), h = $(() => {
      const {
        value: p
      } = r, {
        value: x
      } = o, b = x && Object.keys(x).length !== 0, y = p == null ? void 0 : p.name;
      return y ? b ? `${y}-${uo(JSON.stringify(o.value))}` : y : b ? uo(JSON.stringify(o.value)) : "";
    });
    return Ee(sn, {
      mergedThemeHashRef: h,
      mergedBreakpointsRef: c,
      mergedRtlRef: u,
      mergedIconsRef: l,
      mergedComponentPropsRef: s,
      mergedBorderedRef: a,
      mergedNamespaceRef: i,
      mergedClsPrefixRef: d,
      mergedLocaleRef: $(() => {
        const {
          locale: p
        } = e;
        if (p !== null)
          return p === void 0 ? t == null ? void 0 : t.mergedLocaleRef.value : p;
      }),
      mergedDateLocaleRef: $(() => {
        const {
          dateLocale: p
        } = e;
        if (p !== null)
          return p === void 0 ? t == null ? void 0 : t.mergedDateLocaleRef.value : p;
      }),
      mergedHljsRef: $(() => {
        const {
          hljs: p
        } = e;
        return p === void 0 ? t == null ? void 0 : t.mergedHljsRef.value : p;
      }),
      mergedKatexRef: $(() => {
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
      class: `${this.mergedClsPrefix || Jo}-config-provider`
    }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
  }
});
function Py(e) {
  const {
    boxShadow2: t
  } = e;
  return {
    menuBoxShadow: t
  };
}
const yl = {
  name: "Popselect",
  common: Je,
  peers: {
    Popover: mr,
    InternalSelectMenu: ml
  },
  self: Py
}, tc = "n-popselect", zy = z("popselect-menu", `
 box-shadow: var(--n-menu-box-shadow);
`), Cl = {
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
}, Qs = Ln(Cl), $y = ee({
  name: "PopselectPanel",
  props: Cl,
  setup(e) {
    process.env.NODE_ENV !== "production" && it(() => {
      e.onChange !== void 0 && Ft("popselect", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const t = pe(tc), {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("Popselect", "-pop-select", zy, yl, t.props, r), a = $(() => yi(e.options, Gu("value", "children")));
    function l(g, m) {
      const {
        onUpdateValue: h,
        "onUpdate:value": p,
        onChange: x
      } = e;
      h && re(h, g, m), p && re(p, g, m), x && re(x, g, m);
    }
    function s(g) {
      u(g.key);
    }
    function d(g) {
      !Gt(g, "action") && !Gt(g, "empty") && !Gt(g, "header") && g.preventDefault();
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
        p && re(p, !1), x && re(x, !1), t.setShow(!1);
      }
      pt(() => {
        t.syncPosition();
      });
    }
    He(ie(e, "options"), () => {
      pt(() => {
        t.syncPosition();
      });
    });
    const c = $(() => {
      const {
        self: {
          menuBoxShadow: g
        }
      } = i.value;
      return {
        "--n-menu-box-shadow": g
      };
    }), v = o ? Ze("select", void 0, c, t.props) : void 0;
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
    return (e = this.onRender) === null || e === void 0 || e.call(this), f(Nu, {
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
}), Ay = Object.assign(Object.assign(Object.assign(Object.assign({}, ve.props), cr(ar, ["showArrow", "arrow"])), {
  placement: Object.assign(Object.assign({}, ar.placement), {
    default: "bottom"
  }),
  trigger: {
    type: String,
    default: "hover"
  }
}), Cl), Dy = ee({
  name: "Popselect",
  props: Ay,
  slots: Object,
  inheritAttrs: !1,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = ve("Popselect", "-popselect", void 0, yl, e, t), o = I(null);
    function i() {
      var s;
      (s = o.value) === null || s === void 0 || s.syncPosition();
    }
    function a(s) {
      var d;
      (d = o.value) === null || d === void 0 || d.setShow(s);
    }
    return Ee(tc, {
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
        return f($y, Object.assign({}, s, {
          class: [s.class, r],
          style: [s.style, ...i]
        }, kn(this.$props, Qs), {
          ref: nu(o),
          onMouseenter: ao([a, s.onMouseenter]),
          onMouseleave: ao([l, s.onMouseleave])
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
    return f(br, Object.assign({}, cr(this.$props, Qs), t, {
      internalDeactivateImmediately: !0
    }), {
      trigger: () => {
        var r, o;
        return (o = (r = this.$slots).default) === null || o === void 0 ? void 0 : o.call(r);
      }
    });
  }
});
function Ey(e) {
  const {
    boxShadow2: t
  } = e;
  return {
    menuBoxShadow: t
  };
}
const nc = {
  name: "Select",
  common: Je,
  peers: {
    InternalSelection: Wu,
    InternalSelectMenu: ml
  },
  self: Ey
}, Ty = M([z("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), z("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [Ro({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]), Oy = Object.assign(Object.assign({}, ve.props), {
  to: bn.propTo,
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
}), rc = ee({
  name: "Select",
  props: Oy,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && it(() => {
      e.items !== void 0 && ct("select", "`items` is deprecated, please use `options` instead."), e.onChange !== void 0 && ct("select", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      mergedBorderedRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = ve("Select", "-select", Ty, nc, e, t), l = I(e.defaultValue), s = ie(e, "value"), d = Mt(s, l), u = I(!1), c = I(""), v = Wa(e, ["items", "options"]), g = I([]), m = I([]), h = $(() => m.value.concat(g.value).concat(v.value)), p = $(() => {
      const {
        filter: P
      } = e;
      if (P) return P;
      const {
        labelField: W,
        valueField: J
      } = e;
      return (se, de) => {
        if (!de) return !1;
        const ge = de[W];
        if (typeof ge == "string")
          return ta(se, ge);
        const me = de[J];
        return typeof me == "string" ? ta(se, me) : typeof me == "number" ? ta(se, String(me)) : !1;
      };
    }), x = $(() => {
      if (e.remote)
        return v.value;
      {
        const {
          value: P
        } = h, {
          value: W
        } = c;
        return !W.length || !e.filterable ? P : Q1(P, p.value, W, e.childrenField);
      }
    }), b = $(() => {
      const {
        valueField: P,
        childrenField: W
      } = e, J = Gu(P, W);
      return yi(x.value, J);
    }), y = $(() => ey(h.value, e.valueField, e.childrenField)), S = I(!1), C = Mt(ie(e, "show"), S), k = I(null), R = I(null), w = I(null), {
      localeRef: B
    } = ir("Select"), F = $(() => {
      var P;
      return (P = e.placeholder) !== null && P !== void 0 ? P : B.value.placeholder;
    }), A = [], V = I(/* @__PURE__ */ new Map()), O = $(() => {
      const {
        fallbackOption: P
      } = e;
      if (P === void 0) {
        const {
          labelField: W,
          valueField: J
        } = e;
        return (se) => ({
          [W]: String(se),
          [J]: se
        });
      }
      return P === !1 ? !1 : (W) => Object.assign(P(W), {
        value: W
      });
    });
    function n(P) {
      const W = e.remote, {
        value: J
      } = V, {
        value: se
      } = y, {
        value: de
      } = O, ge = [];
      return P.forEach((me) => {
        if (se.has(me))
          ge.push(se.get(me));
        else if (W && J.has(me))
          ge.push(J.get(me));
        else if (de) {
          const Se = de(me);
          Se && ge.push(Se);
        }
      }), ge;
    }
    const D = $(() => {
      if (e.multiple) {
        const {
          value: P
        } = d;
        return Array.isArray(P) ? n(P) : [];
      }
      return null;
    }), E = $(() => {
      const {
        value: P
      } = d;
      return !e.multiple && !Array.isArray(P) ? P === null ? null : n([P])[0] || null : null;
    }), H = _n(e), {
      mergedSizeRef: L,
      mergedDisabledRef: K,
      mergedStatusRef: te
    } = H;
    function X(P, W) {
      const {
        onChange: J,
        "onUpdate:value": se,
        onUpdateValue: de
      } = e, {
        nTriggerFormChange: ge,
        nTriggerFormInput: me
      } = H;
      J && re(J, P, W), de && re(de, P, W), se && re(se, P, W), l.value = P, ge(), me();
    }
    function U(P) {
      const {
        onBlur: W
      } = e, {
        nTriggerFormBlur: J
      } = H;
      W && re(W, P), J();
    }
    function j() {
      const {
        onClear: P
      } = e;
      P && re(P);
    }
    function q(P) {
      const {
        onFocus: W,
        showOnFocus: J
      } = e, {
        nTriggerFormFocus: se
      } = H;
      W && re(W, P), se(), J && we();
    }
    function Y(P) {
      const {
        onSearch: W
      } = e;
      W && re(W, P);
    }
    function ae(P) {
      const {
        onScroll: W
      } = e;
      W && re(W, P);
    }
    function le() {
      var P;
      const {
        remote: W,
        multiple: J
      } = e;
      if (W) {
        const {
          value: se
        } = V;
        if (J) {
          const {
            valueField: de
          } = e;
          (P = D.value) === null || P === void 0 || P.forEach((ge) => {
            se.set(ge[de], ge);
          });
        } else {
          const de = E.value;
          de && se.set(de[e.valueField], de);
        }
      }
    }
    function fe(P) {
      const {
        onUpdateShow: W,
        "onUpdate:show": J
      } = e;
      W && re(W, P), J && re(J, P), S.value = P;
    }
    function we() {
      K.value || (fe(!0), S.value = !0, e.filterable && rt());
    }
    function G() {
      fe(!1);
    }
    function ue() {
      c.value = "", m.value = A;
    }
    const Fe = I(!1);
    function be() {
      e.filterable && (Fe.value = !0);
    }
    function Pe() {
      e.filterable && (Fe.value = !1, C.value || ue());
    }
    function ze() {
      K.value || (C.value ? e.filterable ? rt() : G() : we());
    }
    function st(P) {
      var W, J;
      !((J = (W = w.value) === null || W === void 0 ? void 0 : W.selfRef) === null || J === void 0) && J.contains(P.relatedTarget) || (u.value = !1, U(P), G());
    }
    function et(P) {
      q(P), u.value = !0;
    }
    function ft() {
      u.value = !0;
    }
    function ht(P) {
      var W;
      !((W = k.value) === null || W === void 0) && W.$el.contains(P.relatedTarget) || (u.value = !1, U(P), G());
    }
    function xe() {
      var P;
      (P = k.value) === null || P === void 0 || P.focus(), G();
    }
    function ye(P) {
      var W;
      C.value && (!((W = k.value) === null || W === void 0) && W.$el.contains($r(P)) || G());
    }
    function $e(P) {
      if (!Array.isArray(P)) return [];
      if (O.value)
        return Array.from(P);
      {
        const {
          remote: W
        } = e, {
          value: J
        } = y;
        if (W) {
          const {
            value: se
          } = V;
          return P.filter((de) => J.has(de) || se.has(de));
        } else
          return P.filter((se) => J.has(se));
      }
    }
    function Ie(P) {
      Qe(P.rawNode);
    }
    function Qe(P) {
      if (K.value) return;
      const {
        tag: W,
        remote: J,
        clearFilterAfterSelect: se,
        valueField: de
      } = e;
      if (W && !J) {
        const {
          value: ge
        } = m, me = ge[0] || null;
        if (me) {
          const Se = g.value;
          Se.length ? Se.push(me) : g.value = [me], m.value = A;
        }
      }
      if (J && V.value.set(P[de], P), e.multiple) {
        const ge = $e(d.value), me = ge.findIndex((Se) => Se === P[de]);
        if (~me) {
          if (ge.splice(me, 1), W && !J) {
            const Se = oe(P[de]);
            ~Se && (g.value.splice(Se, 1), se && (c.value = ""));
          }
        } else
          ge.push(P[de]), se && (c.value = "");
        X(ge, n(ge));
      } else {
        if (W && !J) {
          const ge = oe(P[de]);
          ~ge ? g.value = [g.value[ge]] : g.value = A;
        }
        mt(), G(), X(P[de], P);
      }
    }
    function oe(P) {
      return g.value.findIndex((J) => J[e.valueField] === P);
    }
    function he(P) {
      C.value || we();
      const {
        value: W
      } = P.target;
      c.value = W;
      const {
        tag: J,
        remote: se
      } = e;
      if (Y(W), J && !se) {
        if (!W) {
          m.value = A;
          return;
        }
        const {
          onCreate: de
        } = e, ge = de ? de(W) : {
          [e.labelField]: W,
          [e.valueField]: W
        }, {
          valueField: me,
          labelField: Se
        } = e;
        v.value.some((Le) => Le[me] === ge[me] || Le[Se] === ge[Se]) || g.value.some((Le) => Le[me] === ge[me] || Le[Se] === ge[Se]) ? m.value = A : m.value = [ge];
      }
    }
    function Te(P) {
      P.stopPropagation();
      const {
        multiple: W
      } = e;
      !W && e.filterable && G(), j(), W ? X([], []) : X(null, null);
    }
    function dt(P) {
      !Gt(P, "action") && !Gt(P, "empty") && !Gt(P, "header") && P.preventDefault();
    }
    function $t(P) {
      ae(P);
    }
    function At(P) {
      var W, J, se, de, ge;
      if (!e.keyboard) {
        P.preventDefault();
        return;
      }
      switch (P.key) {
        case " ":
          if (e.filterable)
            break;
          P.preventDefault();
        case "Enter":
          if (!(!((W = k.value) === null || W === void 0) && W.isComposing)) {
            if (C.value) {
              const me = (J = w.value) === null || J === void 0 ? void 0 : J.getPendingTmNode();
              me ? Ie(me) : e.filterable || (G(), mt());
            } else if (we(), e.tag && Fe.value) {
              const me = m.value[0];
              if (me) {
                const Se = me[e.valueField], {
                  value: Le
                } = d;
                e.multiple && Array.isArray(Le) && Le.includes(Se) || Qe(me);
              }
            }
          }
          P.preventDefault();
          break;
        case "ArrowUp":
          if (P.preventDefault(), e.loading) return;
          C.value && ((se = w.value) === null || se === void 0 || se.prev());
          break;
        case "ArrowDown":
          if (P.preventDefault(), e.loading) return;
          C.value ? (de = w.value) === null || de === void 0 || de.next() : we();
          break;
        case "Escape":
          C.value && (w0(P), G()), (ge = k.value) === null || ge === void 0 || ge.focus();
          break;
      }
    }
    function mt() {
      var P;
      (P = k.value) === null || P === void 0 || P.focus();
    }
    function rt() {
      var P;
      (P = k.value) === null || P === void 0 || P.focusInput();
    }
    function wt() {
      var P;
      C.value && ((P = R.value) === null || P === void 0 || P.syncPosition());
    }
    le(), He(ie(e, "options"), le);
    const tt = {
      focus: () => {
        var P;
        (P = k.value) === null || P === void 0 || P.focus();
      },
      focusInput: () => {
        var P;
        (P = k.value) === null || P === void 0 || P.focusInput();
      },
      blur: () => {
        var P;
        (P = k.value) === null || P === void 0 || P.blur();
      },
      blurInput: () => {
        var P;
        (P = k.value) === null || P === void 0 || P.blurInput();
      }
    }, ce = $(() => {
      const {
        self: {
          menuBoxShadow: P
        }
      } = a.value;
      return {
        "--n-menu-box-shadow": P
      };
    }), Be = i ? Ze("select", void 0, ce, e) : void 0;
    return Object.assign(Object.assign({}, tt), {
      mergedStatus: te,
      mergedClsPrefix: t,
      mergedBordered: r,
      namespace: o,
      treeMate: b,
      isMounted: Lr(),
      triggerRef: k,
      menuRef: w,
      pattern: c,
      uncontrolledShow: S,
      mergedShow: C,
      adjustedTo: bn(e),
      uncontrolledValue: l,
      mergedValue: d,
      followerRef: R,
      localizedPlaceholder: F,
      selectedOption: E,
      selectedOptions: D,
      mergedSize: L,
      mergedDisabled: K,
      focused: u,
      activeWithoutMenuOpen: Fe,
      inlineThemeDisabled: i,
      onTriggerInputFocus: be,
      onTriggerInputBlur: Pe,
      handleTriggerOrMenuResize: wt,
      handleMenuFocus: ft,
      handleMenuBlur: ht,
      handleMenuTabOut: xe,
      handleTriggerClick: ze,
      handleToggle: Ie,
      handleDeleteOption: Qe,
      handlePatternInput: he,
      handleClear: Te,
      handleTriggerBlur: st,
      handleTriggerFocus: et,
      handleKeydown: At,
      handleMenuAfterLeave: ue,
      handleMenuClickOutside: ye,
      handleMenuScroll: $t,
      handleMenuKeydown: At,
      handleMenuMousedown: dt,
      mergedTheme: a,
      cssVars: i ? void 0 : ce,
      themeClass: Be == null ? void 0 : Be.themeClass,
      onRender: Be == null ? void 0 : Be.onRender
    });
  },
  render() {
    return f("div", {
      class: `${this.mergedClsPrefix}-select`
    }, f(Ua, null, {
      default: () => [f(qa, null, {
        default: () => f(E1, {
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
      }), f(Ya, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === bn.tdkey,
        containerClass: this.namespace,
        width: this.consistentMenuWidth ? "target" : void 0,
        minWidth: "target",
        placement: this.placement
      }, {
        default: () => f(_t, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted,
          onAfterLeave: this.handleMenuAfterLeave
        }, {
          default: () => {
            var e, t, r;
            return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) === null || e === void 0 || e.call(this), pn(f(Nu, Object.assign({}, this.menuProps, {
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
            }), this.displayDirective === "show" ? [[zr, this.mergedShow], [fo, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]] : [[fo, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), My = {
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
function Iy(e) {
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
  return Object.assign(Object.assign({}, My), {
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
const oc = {
  name: "Pagination",
  common: Je,
  peers: {
    Select: nc,
    Input: bl,
    Popselect: yl
  },
  self: Iy
}, ed = `
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`, td = [N("button", `
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)], Ly = z("pagination", `
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
 `), M("> *:not(:first-child)", `
 margin: var(--n-item-margin);
 `), z("select", `
 width: var(--n-select-width);
 `), M("&.transition-disabled", [z("pagination-item", "transition: none!important;")]), z("pagination-quick-jumper", `
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
 `)]), Ye("disabled", [N("hover", ed, td), M("&:hover", ed, td), M("&:active", `
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
 `, [M("&:hover", `
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
function ic(e) {
  var t;
  if (!e) return 10;
  const {
    defaultPageSize: r
  } = e;
  if (r !== void 0) return r;
  const o = (t = e.pageSizes) === null || t === void 0 ? void 0 : t[0];
  return typeof o == "number" ? o : (o == null ? void 0 : o.value) || 10;
}
function Ny(e, t, r, o) {
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
    options: o ? nd(d + 1, c - 1) : null
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
    options: o ? nd(v + 1, u - 1) : null
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
function nd(e, t) {
  const r = [];
  for (let o = e; o <= t; ++o)
    r.push({
      label: `${o}`,
      value: o
    });
  return r;
}
const Hy = Object.assign(Object.assign({}, ve.props), {
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
  to: bn.propTo,
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
}), ac = ee({
  name: "Pagination",
  props: Hy,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && it(() => {
      e.pageCount !== void 0 && e.itemCount !== void 0 && Ft("pagination", "`page-count` and `item-count` should't be specified together. Only `item-count` will take effect."), e.onPageSizeChange && ct("pagination", "`on-page-size-change` is deprecated, please use `on-update:page-size` instead."), e.onChange && ct("pagination", "`on-change` is deprecated, please use `on-update:page` instead.");
    });
    const {
      mergedComponentPropsRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = ve("Pagination", "-pagination", Ly, oc, e, r), {
      localeRef: l
    } = ir("Pagination"), s = I(null), d = I(e.defaultPage), u = I(ic(e)), c = Mt(ie(e, "page"), d), v = Mt(ie(e, "pageSize"), u), g = $(() => {
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
    it(() => {
      e.simple, m.value = String(c.value);
    });
    const h = I(!1), p = I(!1), x = I(!1), b = I(!1), y = () => {
      e.disabled || (h.value = !0, E());
    }, S = () => {
      e.disabled || (h.value = !1, E());
    }, C = () => {
      p.value = !0, E();
    }, k = () => {
      p.value = !1, E();
    }, R = (G) => {
      H(G);
    }, w = $(() => Ny(c.value, g.value, e.pageSlot, e.showQuickJumpDropdown));
    it(() => {
      w.value.hasFastBackward ? w.value.hasFastForward || (h.value = !1, x.value = !1) : (p.value = !1, b.value = !1);
    });
    const B = $(() => {
      const G = l.value.selectionSuffix;
      return e.pageSizes.map((ue) => typeof ue == "number" ? {
        label: `${ue} / ${G}`,
        value: ue
      } : ue);
    }), F = $(() => {
      var G, ue;
      return ((ue = (G = t == null ? void 0 : t.value) === null || G === void 0 ? void 0 : G.Pagination) === null || ue === void 0 ? void 0 : ue.inputSize) || cs(e.size);
    }), A = $(() => {
      var G, ue;
      return ((ue = (G = t == null ? void 0 : t.value) === null || G === void 0 ? void 0 : G.Pagination) === null || ue === void 0 ? void 0 : ue.selectSize) || cs(e.size);
    }), V = $(() => (c.value - 1) * v.value), O = $(() => {
      const G = c.value * v.value - 1, {
        itemCount: ue
      } = e;
      return ue !== void 0 && G > ue - 1 ? ue - 1 : G;
    }), n = $(() => {
      const {
        itemCount: G
      } = e;
      return G !== void 0 ? G : (e.pageCount || 1) * v.value;
    }), D = zt("Pagination", i, r);
    function E() {
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
        onChange: be,
        simple: Pe
      } = e;
      ue && re(ue, G), Fe && re(Fe, G), be && re(be, G), d.value = G, Pe && (m.value = String(G));
    }
    function L(G) {
      if (G === v.value) return;
      const {
        "onUpdate:pageSize": ue,
        onUpdatePageSize: Fe,
        onPageSizeChange: be
      } = e;
      ue && re(ue, G), Fe && re(Fe, G), be && re(be, G), u.value = G, g.value < c.value && H(g.value);
    }
    function K() {
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
      const G = Math.min(w.value.fastForwardTo, g.value);
      H(G);
    }
    function U() {
      if (e.disabled) return;
      const G = Math.max(w.value.fastBackwardTo, 1);
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
            U();
            break;
          case "fast-forward":
            X();
            break;
        }
    }
    function le(G) {
      m.value = G.replace(/\D+/g, "");
    }
    it(() => {
      c.value, v.value, E();
    });
    const fe = $(() => {
      const {
        size: G
      } = e, {
        self: {
          buttonBorder: ue,
          buttonBorderHover: Fe,
          buttonBorderPressed: be,
          buttonIconColor: Pe,
          buttonIconColorHover: ze,
          buttonIconColorPressed: st,
          itemTextColor: et,
          itemTextColorHover: ft,
          itemTextColorPressed: ht,
          itemTextColorActive: xe,
          itemTextColorDisabled: ye,
          itemColor: $e,
          itemColorHover: Ie,
          itemColorPressed: Qe,
          itemColorActive: oe,
          itemColorActiveHover: he,
          itemColorDisabled: Te,
          itemBorder: dt,
          itemBorderHover: $t,
          itemBorderPressed: At,
          itemBorderActive: mt,
          itemBorderDisabled: rt,
          itemBorderRadius: wt,
          jumperTextColor: tt,
          jumperTextColorDisabled: ce,
          buttonColor: Be,
          buttonColorHover: P,
          buttonColorPressed: W,
          [Z("itemPadding", G)]: J,
          [Z("itemMargin", G)]: se,
          [Z("inputWidth", G)]: de,
          [Z("selectWidth", G)]: ge,
          [Z("inputMargin", G)]: me,
          [Z("selectMargin", G)]: Se,
          [Z("jumperFontSize", G)]: Le,
          [Z("prefixMargin", G)]: ot,
          [Z("suffixMargin", G)]: Ve,
          [Z("itemSize", G)]: Et,
          [Z("buttonIconSize", G)]: It,
          [Z("itemFontSize", G)]: Lt,
          [`${Z("itemMargin", G)}Rtl`]: Vt,
          [`${Z("inputMargin", G)}Rtl`]: Kt
        },
        common: {
          cubicBezierEaseInOut: tn
        }
      } = a.value;
      return {
        "--n-prefix-margin": ot,
        "--n-suffix-margin": Ve,
        "--n-item-font-size": Lt,
        "--n-select-width": ge,
        "--n-select-margin": Se,
        "--n-input-width": de,
        "--n-input-margin": me,
        "--n-input-margin-rtl": Kt,
        "--n-item-size": Et,
        "--n-item-text-color": et,
        "--n-item-text-color-disabled": ye,
        "--n-item-text-color-hover": ft,
        "--n-item-text-color-active": xe,
        "--n-item-text-color-pressed": ht,
        "--n-item-color": $e,
        "--n-item-color-hover": Ie,
        "--n-item-color-disabled": Te,
        "--n-item-color-active": oe,
        "--n-item-color-active-hover": he,
        "--n-item-color-pressed": Qe,
        "--n-item-border": dt,
        "--n-item-border-hover": $t,
        "--n-item-border-disabled": rt,
        "--n-item-border-active": mt,
        "--n-item-border-pressed": At,
        "--n-item-padding": J,
        "--n-item-border-radius": wt,
        "--n-bezier": tn,
        "--n-jumper-font-size": Le,
        "--n-jumper-text-color": tt,
        "--n-jumper-text-color-disabled": ce,
        "--n-item-margin": se,
        "--n-item-margin-rtl": Vt,
        "--n-button-icon-size": It,
        "--n-button-icon-color": Pe,
        "--n-button-icon-color-hover": ze,
        "--n-button-icon-color-pressed": st,
        "--n-button-color-hover": P,
        "--n-button-color": Be,
        "--n-button-color-pressed": W,
        "--n-button-border": ue,
        "--n-button-border-hover": Fe,
        "--n-button-border-pressed": be
      };
    }), we = o ? Ze("pagination", $(() => {
      let G = "";
      const {
        size: ue
      } = e;
      return G += ue[0], G;
    }), fe, e) : void 0;
    return {
      rtlEnabled: D,
      mergedClsPrefix: r,
      locale: l,
      selfRef: s,
      mergedPage: c,
      pageItems: $(() => w.value.items),
      mergedItemCount: n,
      jumperValue: m,
      pageSizeOptions: B,
      mergedPageSize: v,
      inputSize: F,
      selectSize: A,
      mergedTheme: a,
      mergedPageCount: g,
      startIndex: V,
      endIndex: O,
      showFastForwardMenu: x,
      showFastBackwardMenu: b,
      fastForwardActive: h,
      fastBackwardActive: p,
      handleMenuSelect: R,
      handleFastForwardMouseenter: y,
      handleFastForwardMouseleave: S,
      handleFastBackwardMouseenter: C,
      handleFastBackwardMouseleave: k,
      handleJumperInput: le,
      handleBackwardClick: te,
      handleForwardClick: K,
      handlePageItemClick: ae,
      handleSizePickerChange: j,
      handleQuickJumperChange: Y,
      cssVars: o ? void 0 : fe,
      themeClass: we == null ? void 0 : we.themeClass,
      onRender: we == null ? void 0 : we.onRender
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
      prefix: S,
      suffix: C,
      label: k,
      goto: R,
      handleJumperInput: w,
      handleSizePickerChange: B,
      handleBackwardClick: F,
      handlePageItemClick: A,
      handleForwardClick: V,
      handleQuickJumperChange: O,
      onRender: n
    } = this;
    n == null || n();
    const D = S || e.prefix, E = C || e.suffix, H = b || e.prev, L = y || e.next, K = k || e.label;
    return f("div", {
      ref: "selfRef",
      class: [`${t}-pagination`, this.themeClass, this.rtlEnabled && `${t}-pagination--rtl`, r && `${t}-pagination--disabled`, x && `${t}-pagination--simple`],
      style: o
    }, D ? f("div", {
      class: `${t}-pagination-prefix`
    }, D({
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
          }) : f(xt, {
            clsPrefix: t
          }, {
            default: () => this.rtlEnabled ? f(_s, null) : f(Ns, null)
          })), x ? f(je, null, f("div", {
            class: `${t}-pagination-quick-jumper`
          }, f(Ba, {
            value: p,
            onUpdateValue: w,
            size: v,
            placeholder: "",
            disabled: r,
            theme: u.peers.Input,
            themeOverrides: u.peerOverrides.Input,
            onChange: O
          })), " /", " ", a) : l.map((X, U) => {
            let j, q, Y;
            const {
              type: ae
            } = X;
            switch (ae) {
              case "page":
                const fe = X.label;
                K ? j = K({
                  type: "page",
                  node: fe,
                  active: X.active
                }) : j = fe;
                break;
              case "fast-forward":
                const we = this.fastForwardActive ? f(xt, {
                  clsPrefix: t
                }, {
                  default: () => this.rtlEnabled ? f(Hs, null) : f(js, null)
                }) : f(xt, {
                  clsPrefix: t
                }, {
                  default: () => f(Ws, null)
                });
                K ? j = K({
                  type: "fast-forward",
                  node: we,
                  active: this.fastForwardActive || this.showFastForwardMenu
                }) : j = we, q = this.handleFastForwardMouseenter, Y = this.handleFastForwardMouseleave;
                break;
              case "fast-backward":
                const G = this.fastBackwardActive ? f(xt, {
                  clsPrefix: t
                }, {
                  default: () => this.rtlEnabled ? f(js, null) : f(Hs, null)
                }) : f(xt, {
                  clsPrefix: t
                }, {
                  default: () => f(Ws, null)
                });
                K ? j = K({
                  type: "fast-backward",
                  node: G,
                  active: this.fastBackwardActive || this.showFastBackwardMenu
                }) : j = G, q = this.handleFastBackwardMouseenter, Y = this.handleFastBackwardMouseleave;
                break;
            }
            const le = f("div", {
              key: U,
              class: [`${t}-pagination-item`, X.active && `${t}-pagination-item--active`, ae !== "page" && (ae === "fast-backward" && this.showFastBackwardMenu || ae === "fast-forward" && this.showFastForwardMenu) && `${t}-pagination-item--hover`, r && `${t}-pagination-item--disabled`, ae === "page" && `${t}-pagination-item--clickable`],
              onClick: () => {
                A(X);
              },
              onMouseenter: q,
              onMouseleave: Y
            }, j);
            if (ae === "page" && !X.mayBeFastBackward && !X.mayBeFastForward)
              return le;
            {
              const fe = X.type === "page" ? X.mayBeFastBackward ? "fast-backward" : "fast-forward" : X.type;
              return X.type !== "page" && !X.options ? le : f(Dy, {
                to: this.to,
                key: fe,
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
                onUpdateShow: (we) => {
                  ae !== "page" && (we ? ae === "fast-backward" ? this.showFastBackwardMenu = we : this.showFastForwardMenu = we : (this.showFastBackwardMenu = !1, this.showFastForwardMenu = !1));
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
            onClick: V
          }, L ? L({
            page: i,
            pageSize: m,
            pageCount: a,
            itemCount: this.mergedItemCount,
            startIndex: this.startIndex,
            endIndex: this.endIndex
          }) : f(xt, {
            clsPrefix: t
          }, {
            default: () => this.rtlEnabled ? f(Ns, null) : f(_s, null)
          })));
        case "size-picker":
          return !x && s ? f(rc, Object.assign({
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
            onUpdateValue: B
          })) : null;
        case "quick-jumper":
          return !x && d ? f("div", {
            class: `${t}-pagination-quick-jumper`
          }, R ? R() : en(this.$slots.goto, () => [c.goto]), f(Ba, {
            value: p,
            onUpdateValue: w,
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
    }), E ? f("div", {
      class: `${t}-pagination-suffix`
    }, E({
      page: i,
      pageSize: m,
      pageCount: a,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      itemCount: this.mergedItemCount
    })) : null);
  }
}), jy = {
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
function _y(e) {
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
  return Object.assign(Object.assign({}, jy), {
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
    optionColorActive: De(t, {
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
const lc = {
  name: "Dropdown",
  common: Je,
  peers: {
    Popover: mr
  },
  self: _y
}, Wy = {
  padding: "8px 14px"
};
function Vy(e) {
  const {
    borderRadius: t,
    boxShadow2: r,
    baseColor: o
  } = e;
  return Object.assign(Object.assign({}, Wy), {
    borderRadius: t,
    boxShadow: r,
    color: Ge(o, "rgba(0, 0, 0, .85)"),
    textColor: o
  });
}
const sc = {
  name: "Tooltip",
  common: Je,
  peers: {
    Popover: mr
  },
  self: Vy
}, dc = {
  name: "Ellipsis",
  common: Je,
  peers: {
    Tooltip: sc
  }
}, Ky = {
  radioSizeSmall: "14px",
  radioSizeMedium: "16px",
  radioSizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function Uy(e) {
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
    boxShadowFocus: `inset 0 0 0 1px ${r}, 0 0 0 2px ${De(r, {
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
    buttonBoxShadowFocus: `inset 0 0 0 1px ${r}, 0 0 0 2px ${De(r, {
      alpha: 0.3
    })}`,
    buttonBoxShadowHover: "inset 0 0 0 1px #0000",
    buttonBoxShadow: "inset 0 0 0 1px #0000",
    buttonBorderRadius: d
  });
}
const wl = {
  name: "Radio",
  common: Je,
  self: Uy
}, qy = {
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
function Gy(e) {
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
    tableColorStriped: S
  } = e;
  return Object.assign(Object.assign({}, qy), {
    actionDividerColor: x,
    lineHeight: g,
    borderRadius: v,
    fontSizeSmall: m,
    fontSizeMedium: h,
    fontSizeLarge: p,
    borderColor: Ge(t, x),
    tdColorHover: Ge(t, s),
    tdColorSorting: Ge(t, s),
    tdColorStriped: Ge(t, S),
    thColor: Ge(t, l),
    thColorHover: Ge(Ge(t, l), s),
    thColorSorting: Ge(Ge(t, l), s),
    tdColor: t,
    tdTextColor: i,
    thTextColor: a,
    thFontWeight: c,
    thButtonColorHover: s,
    thIconColor: d,
    thIconColorActive: u,
    // modal
    borderColorModal: Ge(r, x),
    tdColorHoverModal: Ge(r, s),
    tdColorSortingModal: Ge(r, s),
    tdColorStripedModal: Ge(r, S),
    thColorModal: Ge(r, l),
    thColorHoverModal: Ge(Ge(r, l), s),
    thColorSortingModal: Ge(Ge(r, l), s),
    tdColorModal: r,
    // popover
    borderColorPopover: Ge(o, x),
    tdColorHoverPopover: Ge(o, s),
    tdColorSortingPopover: Ge(o, s),
    tdColorStripedPopover: Ge(o, S),
    thColorPopover: Ge(o, l),
    thColorHoverPopover: Ge(Ge(o, l), s),
    thColorSortingPopover: Ge(Ge(o, l), s),
    tdColorPopover: o,
    boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)",
    boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)",
    // loading
    loadingColor: u,
    loadingSize: b,
    opacityLoading: y
  });
}
const Xy = {
  name: "DataTable",
  common: Je,
  peers: {
    Button: Ci,
    Checkbox: Yu,
    Radio: wl,
    Pagination: oc,
    Scrollbar: ko,
    Empty: pl,
    Popover: mr,
    Ellipsis: dc,
    Dropdown: lc
  },
  self: Gy
}, Yy = Object.assign(Object.assign({}, ve.props), {
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
}), dn = "n-data-table", uc = 40, cc = 40;
function rd(e) {
  if (e.type === "selection")
    return e.width === void 0 ? uc : Dt(e.width);
  if (e.type === "expand")
    return e.width === void 0 ? cc : Dt(e.width);
  if (!("children" in e))
    return typeof e.width == "string" ? Dt(e.width) : e.width;
}
function Zy(e) {
  var t, r;
  if (e.type === "selection")
    return Ct((t = e.width) !== null && t !== void 0 ? t : uc);
  if (e.type === "expand")
    return Ct((r = e.width) !== null && r !== void 0 ? r : cc);
  if (!("children" in e))
    return Ct(e.width);
}
function ln(e) {
  return e.type === "selection" ? "__n_selection__" : e.type === "expand" ? "__n_expand__" : e.key;
}
function od(e) {
  return e && (typeof e == "object" ? Object.assign({}, e) : e);
}
function Jy(e) {
  return e === "ascend" ? 1 : e === "descend" ? -1 : 0;
}
function Qy(e, t, r) {
  return r !== void 0 && (e = Math.min(e, typeof r == "number" ? r : Number.parseFloat(r))), t !== void 0 && (e = Math.max(e, typeof t == "number" ? t : Number.parseFloat(t))), e;
}
function eC(e, t) {
  if (t !== void 0)
    return {
      width: t,
      minWidth: t,
      maxWidth: t
    };
  const r = Zy(e), {
    minWidth: o,
    maxWidth: i
  } = e;
  return {
    width: r,
    minWidth: Ct(o) || r,
    maxWidth: Ct(i)
  };
}
function tC(e, t, r) {
  return typeof r == "function" ? r(e, t) : r || "";
}
function na(e) {
  return e.filterOptionValues !== void 0 || e.filterOptionValue === void 0 && e.defaultFilterOptionValues !== void 0;
}
function ra(e) {
  return "children" in e ? !1 : !!e.sorter;
}
function fc(e) {
  return "children" in e && e.children.length ? !1 : !!e.resizable;
}
function id(e) {
  return "children" in e ? !1 : !!e.filter && (!!e.filterOptions || !!e.renderFilterMenu);
}
function ad(e) {
  if (e) {
    if (e === "descend") return "ascend";
  } else return "descend";
  return !1;
}
function nC(e, t) {
  return e.sorter === void 0 ? null : t === null || t.columnKey !== e.key ? {
    columnKey: e.key,
    sorter: e.sorter,
    order: ad(!1)
  } : Object.assign(Object.assign({}, t), {
    order: ad(t.order)
  });
}
function hc(e, t) {
  return t.find((r) => r.columnKey === e.key && r.order) !== void 0;
}
function rC(e) {
  return typeof e == "string" ? e.replace(/,/g, "\\,") : e == null ? "" : `${e}`.replace(/,/g, "\\,");
}
function oC(e, t, r, o) {
  const i = e.filter((s) => s.type !== "expand" && s.type !== "selection" && s.allowExport !== !1), a = i.map((s) => o ? o(s) : s.title).join(","), l = t.map((s) => i.map((d) => r ? r(s[d.key], s, d) : rC(s[d.key])).join(","));
  return [a, ...l].join(`
`);
}
const iC = ee({
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
    } = pe(dn);
    return () => {
      const {
        rowKey: o
      } = e;
      return f(wi, {
        privateInsideTable: !0,
        disabled: e.disabled,
        indeterminate: r.value.has(o),
        checked: t.value.has(o),
        onUpdateChecked: e.onUpdateChecked
      });
    };
  }
}), aC = z("radio", `
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
`, [N("checked", [T("dot", `
 background-color: var(--n-color-active);
 `)]), T("dot-wrapper", `
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
 `), T("dot", `
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
 `, [M("&::before", `
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
}, [M("&::before", `
 opacity: 1;
 transform: scale(1);
 `)])]), T("label", `
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `), Ye("disabled", `
 cursor: pointer;
 `, [M("&:hover", [T("dot", {
  boxShadow: "var(--n-box-shadow-hover)"
})]), N("focus", [M("&:not(:active)", [T("dot", {
  boxShadow: "var(--n-box-shadow-focus)"
})])])]), N("disabled", `
 cursor: not-allowed;
 `, [T("dot", {
  boxShadow: "var(--n-box-shadow-disabled)",
  backgroundColor: "var(--n-color-disabled)"
}, [M("&::before", {
  backgroundColor: "var(--n-dot-color-disabled)"
}), N("checked", `
 opacity: 1;
 `)]), T("label", {
  color: "var(--n-text-color-disabled)"
}), z("radio-input", `
 cursor: not-allowed;
 `)])]), lC = {
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
}, vc = "n-radio-group";
function sC(e) {
  process.env.NODE_ENV !== "production" && it(() => {
    e.checkedValue !== void 0 && ct("radio", "`checked-value` is deprecated, please use `checked` instead.");
  });
  const t = pe(vc, null), r = _n(e, {
    mergedSize(y) {
      const {
        size: S
      } = e;
      if (S !== void 0) return S;
      if (t) {
        const {
          mergedSizeRef: {
            value: C
          }
        } = t;
        if (C !== void 0)
          return C;
      }
      return y ? y.mergedSize.value : "medium";
    },
    mergedDisabled(y) {
      return !!(e.disabled || t != null && t.disabledRef.value || y != null && y.disabled.value);
    }
  }), {
    mergedSizeRef: o,
    mergedDisabledRef: i
  } = r, a = I(null), l = I(null), s = I(e.defaultChecked), d = ie(e, "checked"), u = Mt(d, s), c = Ue(() => t ? t.valueRef.value === e.value : u.value), v = Ue(() => {
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
        value: S
      } = e;
      re(y, S);
    } else {
      const {
        onUpdateChecked: y,
        "onUpdate:checked": S
      } = e, {
        nTriggerFormInput: C,
        nTriggerFormChange: k
      } = r;
      y && re(y, !0), S && re(S, !0), C(), k(), s.value = !0;
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
const dC = Object.assign(Object.assign({}, ve.props), lC), Sl = ee({
  name: "Radio",
  props: dC,
  setup(e) {
    const t = sC(e), r = ve("Radio", "-radio", aC, wl, e, t.mergedClsPrefix), o = $(() => {
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
          textColor: S,
          textColorDisabled: C,
          dotColorActive: k,
          dotColorDisabled: R,
          labelPadding: w,
          labelLineHeight: B,
          labelFontWeight: F,
          [Z("fontSize", u)]: A,
          [Z("radioSize", u)]: V
        }
      } = r.value;
      return {
        "--n-bezier": c,
        "--n-label-line-height": B,
        "--n-label-font-weight": F,
        "--n-box-shadow": v,
        "--n-box-shadow-active": g,
        "--n-box-shadow-disabled": m,
        "--n-box-shadow-focus": h,
        "--n-box-shadow-hover": p,
        "--n-color": x,
        "--n-color-active": y,
        "--n-color-disabled": b,
        "--n-dot-color-active": k,
        "--n-dot-color-disabled": R,
        "--n-font-size": A,
        "--n-radio-size": V,
        "--n-text-color": S,
        "--n-text-color-disabled": C,
        "--n-label-padding": w
      };
    }), {
      inlineThemeDisabled: i,
      mergedClsPrefixRef: a,
      mergedRtlRef: l
    } = Ae(e), s = zt("Radio", l, a), d = i ? Ze("radio", $(() => t.mergedSize.value[0]), o, e) : void 0;
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
    })), _e(e.default, (i) => !i && !o ? null : f("div", {
      ref: "labelRef",
      class: `${t}-radio__label`
    }, i || o)));
  }
}), uC = z("radio-group", `
 display: inline-block;
 font-size: var(--n-font-size);
`, [T("splitor", `
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
}), T("splitor", {
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
 `), T("state-border", `
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `), M("&:first-child", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `, [T("state-border", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]), M("&:last-child", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `, [T("state-border", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]), Ye("disabled", `
 cursor: pointer;
 `, [M("&:hover", [T("state-border", `
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `), Ye("checked", {
  color: "var(--n-button-text-color-hover)"
})]), N("focus", [M("&:not(:active)", [T("state-border", {
  boxShadow: "var(--n-button-box-shadow-focus)"
})])])]), N("checked", `
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `), N("disabled", `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);
function cC(e, t, r) {
  var o;
  const i = [];
  let a = !1;
  for (let l = 0; l < e.length; ++l) {
    const s = e[l], d = (o = s.type) === null || o === void 0 ? void 0 : o.name;
    if (d === "RadioButton" && (a = !0), process.env.NODE_ENV !== "production" && a && d !== "RadioButton") {
      Ft("radio-group", "`n-radio-group` in button mode only takes `n-radio-button` as children.");
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
      }, S = p < x ? y : b;
      i.push(f("div", {
        class: [`${r}-radio-group__splitor`, S]
      }), s);
    }
  }
  return {
    children: i,
    isButtonGroup: a
  };
}
const fC = Object.assign(Object.assign({}, ve.props), {
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
}), gc = ee({
  name: "RadioGroup",
  props: fC,
  setup(e) {
    const t = I(null), {
      mergedSizeRef: r,
      mergedDisabledRef: o,
      nTriggerFormChange: i,
      nTriggerFormInput: a,
      nTriggerFormBlur: l,
      nTriggerFormFocus: s
    } = _n(e), {
      mergedClsPrefixRef: d,
      inlineThemeDisabled: u,
      mergedRtlRef: c
    } = Ae(e), v = ve("Radio", "-radio-group", uC, wl, e, d), g = I(e.defaultValue), m = ie(e, "value"), h = Mt(m, g);
    function p(k) {
      const {
        onUpdateValue: R,
        "onUpdate:value": w
      } = e;
      R && re(R, k), w && re(w, k), g.value = k, i(), a();
    }
    function x(k) {
      const {
        value: R
      } = t;
      R && (R.contains(k.relatedTarget) || s());
    }
    function b(k) {
      const {
        value: R
      } = t;
      R && (R.contains(k.relatedTarget) || l());
    }
    Ee(vc, {
      mergedClsPrefixRef: d,
      nameRef: ie(e, "name"),
      valueRef: h,
      disabledRef: o,
      mergedSizeRef: r,
      doUpdateValue: p
    });
    const y = zt("Radio", c, d), S = $(() => {
      const {
        value: k
      } = r, {
        common: {
          cubicBezierEaseInOut: R
        },
        self: {
          buttonBorderColor: w,
          buttonBorderColorActive: B,
          buttonBorderRadius: F,
          buttonBoxShadow: A,
          buttonBoxShadowFocus: V,
          buttonBoxShadowHover: O,
          buttonColor: n,
          buttonColorActive: D,
          buttonTextColor: E,
          buttonTextColorActive: H,
          buttonTextColorHover: L,
          opacityDisabled: K,
          [Z("buttonHeight", k)]: te,
          [Z("fontSize", k)]: X
        }
      } = v.value;
      return {
        "--n-font-size": X,
        "--n-bezier": R,
        "--n-button-border-color": w,
        "--n-button-border-color-active": B,
        "--n-button-border-radius": F,
        "--n-button-box-shadow": A,
        "--n-button-box-shadow-focus": V,
        "--n-button-box-shadow-hover": O,
        "--n-button-color": n,
        "--n-button-color-active": D,
        "--n-button-text-color": E,
        "--n-button-text-color-hover": L,
        "--n-button-text-color-active": H,
        "--n-height": te,
        "--n-opacity-disabled": K
      };
    }), C = u ? Ze("radio-group", $(() => r.value[0]), S, e) : void 0;
    return {
      selfElRef: t,
      rtlEnabled: y,
      mergedClsPrefix: d,
      mergedValue: h,
      handleFocusout: b,
      handleFocusin: x,
      cssVars: u ? void 0 : S,
      themeClass: C == null ? void 0 : C.themeClass,
      onRender: C == null ? void 0 : C.onRender
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
    } = cC(vo(R0(this)), t, r);
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      onFocusin: o,
      onFocusout: i,
      ref: "selfElRef",
      class: [`${r}-radio-group`, this.rtlEnabled && `${r}-radio-group--rtl`, this.themeClass, l && `${r}-radio-group--button-group`],
      style: this.cssVars
    }, a);
  }
}), hC = ee({
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
    } = pe(dn);
    return () => {
      const {
        rowKey: o
      } = e;
      return f(Sl, {
        name: r,
        disabled: e.disabled,
        checked: t.value.has(o),
        onUpdateChecked: e.onUpdateChecked
      });
    };
  }
}), vC = Object.assign(Object.assign({}, ar), ve.props), pc = ee({
  name: "Tooltip",
  props: vC,
  slots: Object,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = ve("Tooltip", "-tooltip", void 0, sc, e, t), o = I(null);
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
      popoverThemeOverrides: $(() => r.value.self)
    });
  },
  render() {
    const {
      mergedTheme: e,
      internalExtraClass: t
    } = this;
    return f(br, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: t.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), mc = z("ellipsis", {
  overflow: "hidden"
}, [Ye("line-clamp", `
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
function ka(e) {
  return `${e}-ellipsis--line-clamp`;
}
function Ra(e, t) {
  return `${e}-ellipsis--cursor-${t}`;
}
const bc = Object.assign(Object.assign({}, ve.props), {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Boolean, Object],
    default: !0
  }
}), Si = ee({
  name: "Ellipsis",
  inheritAttrs: !1,
  props: bc,
  slots: Object,
  setup(e, {
    slots: t,
    attrs: r
  }) {
    const o = ru(), i = ve("Ellipsis", "-ellipsis", mc, dc, e, o), a = I(null), l = I(null), s = I(null), d = I(!1), u = $(() => {
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
          lineClamp: S
        } = e;
        if (m(y), S !== void 0)
          x = y.scrollHeight <= y.offsetHeight;
        else {
          const {
            value: C
          } = l;
          C && (x = C.getBoundingClientRect().width <= y.getBoundingClientRect().width);
        }
        h(y, x);
      }
      return x;
    }
    const v = $(() => e.expandTrigger === "click" ? () => {
      var x;
      const {
        value: b
      } = d;
      b && ((x = s.value) === null || x === void 0 || x.setShow(!1)), d.value = !b;
    } : void 0);
    Ma(() => {
      var x;
      e.tooltip && ((x = s.value) === null || x === void 0 || x.setShow(!1));
    });
    const g = () => f("span", Object.assign({}, Rt(r, {
      class: [`${o.value}-ellipsis`, e.lineClamp !== void 0 ? ka(o.value) : void 0, e.expandTrigger === "click" ? Ra(o.value, "pointer") : void 0],
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
      const b = u.value, y = ka(o.value);
      e.lineClamp !== void 0 ? p(x, y, "add") : p(x, y, "remove");
      for (const S in b)
        x.style[S] !== b[S] && (x.style[S] = b[S]);
    }
    function h(x, b) {
      const y = Ra(o.value, "pointer");
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
      return f(pc, Object.assign({
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
}), gC = ee({
  name: "PerformantEllipsis",
  props: bc,
  inheritAttrs: !1,
  setup(e, {
    attrs: t,
    slots: r
  }) {
    const o = I(!1), i = ru();
    return Kn("-ellipsis", mc, i), {
      mouseEntered: o,
      renderTrigger: () => {
        const {
          lineClamp: l
        } = e, s = i.value;
        return f("span", Object.assign({}, Rt(t, {
          class: [`${s}-ellipsis`, l !== void 0 ? ka(s) : void 0, e.expandTrigger === "click" ? Ra(s, "pointer") : void 0],
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
    return this.mouseEntered ? f(Si, Rt({}, this.$attrs, this.$props), this.$slots) : this.renderTrigger();
  }
}), pC = ee({
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
    if (l && !t ? a = l(o, this.index) : t ? a = (e = o[s]) === null || e === void 0 ? void 0 : e.value : a = i ? i(mo(o, s), o, r) : mo(o, s), d)
      if (typeof d == "object") {
        const {
          mergedTheme: u
        } = this;
        return r.ellipsisComponent === "performant-ellipsis" ? f(gC, Object.assign({}, d, {
          theme: u.peers.Ellipsis,
          themeOverrides: u.peerOverrides.Ellipsis
        }), {
          default: () => a
        }) : f(Si, Object.assign({}, d, {
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
}), ld = ee({
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
    }, f(gr, null, {
      default: () => this.loading ? f(Un, {
        key: "loading",
        clsPrefix: this.clsPrefix,
        radius: 85,
        strokeWidth: 15,
        scale: 0.88
      }) : this.renderExpandIcon ? this.renderExpandIcon({
        expanded: this.expanded,
        rowData: this.rowData
      }) : f(xt, {
        clsPrefix: e,
        key: "base-icon"
      }, {
        default: () => f(cl, null)
      })
    }));
  }
}), mC = ee({
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
    } = Ae(e), o = zt("DataTable", r, t), {
      mergedClsPrefixRef: i,
      mergedThemeRef: a,
      localeRef: l
    } = pe(dn), s = I(e.value), d = $(() => {
      const {
        value: h
      } = s;
      return Array.isArray(h) ? h : null;
    }), u = $(() => {
      const {
        value: h
      } = s;
      return na(e.column) ? Array.isArray(h) && h.length && h[0] || null : Array.isArray(h) ? null : h;
    });
    function c(h) {
      e.onChange(h);
    }
    function v(h) {
      e.multiple && Array.isArray(h) ? s.value = h : na(e.column) && !Array.isArray(h) ? s.value = [h] : s.value = h;
    }
    function g() {
      c(s.value), e.onConfirm();
    }
    function m() {
      e.multiple || na(e.column) ? c([]) : c(null), e.onClear();
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
    }, f(pr, null, {
      default: () => {
        const {
          checkboxGroupValue: o,
          handleChange: i
        } = this;
        return this.multiple ? f(Ju, {
          value: o,
          class: `${r}-data-table-filter-menu__group`,
          onUpdateValue: i
        }, {
          default: () => this.options.map((a) => f(wi, {
            key: a.value,
            theme: e.peers.Checkbox,
            themeOverrides: e.peerOverrides.Checkbox,
            value: a.value
          }, {
            default: () => a.label
          }))
        }) : f(gc, {
          name: this.radioGroupName,
          class: `${r}-data-table-filter-menu__group`,
          value: this.radioGroupValue,
          onUpdateValue: this.handleChange
        }, {
          default: () => this.options.map((a) => f(Sl, {
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
    }, f(lr, {
      size: "tiny",
      theme: e.peers.Button,
      themeOverrides: e.peerOverrides.Button,
      onClick: this.handleClearClick
    }, {
      default: () => t.clear
    }), f(lr, {
      theme: e.peers.Button,
      themeOverrides: e.peerOverrides.Button,
      type: "primary",
      size: "tiny",
      onClick: this.handleConfirmClick
    }, {
      default: () => t.confirm
    })));
  }
}), bC = ee({
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
function xC(e, t, r) {
  const o = Object.assign({}, e);
  return o[t] = r, o;
}
const yC = ee({
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
    } = pe(dn), c = I(!1), v = i, g = $(() => e.column.filterMultiple !== !1), m = $(() => {
      const S = v.value[e.column.key];
      if (S === void 0) {
        const {
          value: C
        } = g;
        return C ? [] : null;
      }
      return S;
    }), h = $(() => {
      const {
        value: S
      } = m;
      return Array.isArray(S) ? S.length > 0 : S !== null;
    }), p = $(() => {
      var S, C;
      return ((C = (S = t == null ? void 0 : t.value) === null || S === void 0 ? void 0 : S.DataTable) === null || C === void 0 ? void 0 : C.renderFilter) || e.column.renderFilter;
    });
    function x(S) {
      const C = xC(v.value, e.column.key, S);
      d(C, e.column), l.value === "first" && s(1);
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
    return f(br, Object.assign({
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
          return f(bC, {
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
        }) : f(xt, {
          clsPrefix: t
        }, {
          default: () => f(Sx, null)
        }));
      },
      default: () => {
        const {
          renderFilterMenu: i
        } = this.column;
        return i ? i({
          hide: r
        }) : f(mC, {
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
}), CC = ee({
  name: "ColumnResizeButton",
  props: {
    onResizeStart: Function,
    onResize: Function,
    onResizeEnd: Function
  },
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = pe(dn), r = I(!1);
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
      r.value = !1, (d = e.onResizeEnd) === null || d === void 0 || d.call(e), We("mousemove", window, l), We("mouseup", window, s);
    }
    return kt(() => {
      We("mousemove", window, l), We("mouseup", window, s);
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
}), wC = ee({
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
}), SC = ee({
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
    } = pe(dn), i = $(() => r.value.find((d) => d.columnKey === e.column.key)), a = $(() => i.value !== void 0), l = $(() => {
      const {
        value: d
      } = i;
      return d && a.value ? d.order : !1;
    }), s = $(() => {
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
    return e ? f(wC, {
      render: e,
      order: t
    }) : f("span", {
      class: [`${r}-data-table-sorter`, t === "ascend" && `${r}-data-table-sorter--asc`, t === "descend" && `${r}-data-table-sorter--desc`]
    }, o ? o({
      order: t
    }) : f(xt, {
      clsPrefix: r
    }, {
      default: () => f(gx, null)
    }));
  }
}), Bl = "n-dropdown-menu", Bi = "n-dropdown", sd = "n-dropdown-option", xc = ee({
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
}), BC = ee({
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
    } = pe(Bl), {
      renderLabelRef: r,
      labelFieldRef: o,
      nodePropsRef: i,
      renderOptionRef: a
    } = pe(Bi);
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
function kC(e) {
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
const RC = {
  name: "Icon",
  common: Je,
  self: kC
}, FC = z("icon", `
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
}, [M("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), M("svg", {
  height: "1em",
  width: "1em"
})]), PC = Object.assign(Object.assign({}, ve.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), bo = ee({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: PC,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Icon", "-icon", FC, RC, e, t), i = $(() => {
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
    }), a = r ? Ze("icon", $(() => `${e.depth || "d"}`), i, e) : void 0;
    return {
      mergedClsPrefix: t,
      mergedStyle: $(() => {
        const {
          size: l,
          color: s
        } = e;
        return {
          fontSize: Ct(l),
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
    return !((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && Ft("icon", "don't wrap `n-icon` inside `n-icon`"), a == null || a(), f("i", Rt(this.$attrs, {
      role: "img",
      class: [`${o}-icon`, l, {
        [`${o}-icon--depth`]: r,
        [`${o}-icon--color-transition`]: r !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), i ? f(i) : this.$slots);
  }
});
function Fa(e, t) {
  return e.type === "submenu" || e.type === void 0 && e[t] !== void 0;
}
function zC(e) {
  return e.type === "group";
}
function yc(e) {
  return e.type === "divider";
}
function $C(e) {
  return e.type === "render";
}
const Cc = ee({
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
    const t = pe(Bi), {
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
    } = t, x = pe(sd, null), b = pe(Bl), y = pe(wo), S = $(() => e.tmNode.rawNode), C = $(() => {
      const {
        value: L
      } = g;
      return Fa(e.tmNode.rawNode, L);
    }), k = $(() => {
      const {
        disabled: L
      } = e.tmNode;
      return L;
    }), R = $(() => {
      if (!C.value) return !1;
      const {
        key: L,
        disabled: K
      } = e.tmNode;
      if (K) return !1;
      const {
        value: te
      } = r, {
        value: X
      } = o, {
        value: U
      } = i, {
        value: j
      } = a;
      return te !== null ? j.includes(L) : X !== null ? j.includes(L) && j[j.length - 1] !== L : U !== null ? j.includes(L) : !1;
    }), w = $(() => o.value === null && !s.value), B = Rh(R, 300, w), F = $(() => !!(x != null && x.enteringSubmenuRef.value)), A = I(!1);
    Ee(sd, {
      enteringSubmenuRef: A
    });
    function V() {
      A.value = !0;
    }
    function O() {
      A.value = !1;
    }
    function n() {
      const {
        parentKey: L,
        tmNode: K
      } = e;
      K.disabled || d.value && (i.value = L, o.value = null, r.value = K.key);
    }
    function D() {
      const {
        tmNode: L
      } = e;
      L.disabled || d.value && r.value !== L.key && n();
    }
    function E(L) {
      if (e.tmNode.disabled || !d.value) return;
      const {
        relatedTarget: K
      } = L;
      K && !Gt({
        target: K
      }, "dropdownOption") && !Gt({
        target: K
      }, "scrollbarRail") && (r.value = null);
    }
    function H() {
      const {
        value: L
      } = C, {
        tmNode: K
      } = e;
      d.value && !L && !K.disabled && (t.doSelect(K.key, K.rawNode), t.doUpdateShow(!1));
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
      mergedShowSubmenu: $(() => B.value && !F.value),
      rawNode: S,
      hasSubmenu: C,
      pending: Ue(() => {
        const {
          value: L
        } = a, {
          key: K
        } = e.tmNode;
        return L.includes(K);
      }),
      childActive: Ue(() => {
        const {
          value: L
        } = l, {
          key: K
        } = e.tmNode, te = L.findIndex((X) => K === X);
        return te === -1 ? !1 : te < L.length - 1;
      }),
      active: Ue(() => {
        const {
          value: L
        } = l, {
          key: K
        } = e.tmNode, te = L.findIndex((X) => K === X);
        return te === -1 ? !1 : te === L.length - 1;
      }),
      mergedDisabled: k,
      renderOption: m,
      nodeProps: h,
      handleClick: H,
      handleMouseMove: D,
      handleMouseEnter: n,
      handleMouseLeave: E,
      handleSubmenuBeforeEnter: V,
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
      h = f(wc, Object.assign({}, y, {
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
    }, x), f("div", Rt(p, g), [f("div", {
      class: [`${a}-dropdown-option-body__prefix`, l && `${a}-dropdown-option-body__prefix--show-icon`]
    }, [u ? u(o) : gt(o.icon)]), f("div", {
      "data-dropdown-option": !0,
      class: `${a}-dropdown-option-body__label`
    }, d ? d(o) : gt((t = o[this.labelField]) !== null && t !== void 0 ? t : o.title)), f("div", {
      "data-dropdown-option": !0,
      class: [`${a}-dropdown-option-body__suffix`, s && `${a}-dropdown-option-body__suffix--has-submenu`]
    }, this.hasSubmenu ? f(bo, null, {
      default: () => f(cl, null)
    }) : null)]), this.hasSubmenu ? f(Ua, null, {
      default: () => [f(qa, null, {
        default: () => f("div", {
          class: `${a}-dropdown-offset-container`
        }, f(Ya, {
          show: this.mergedShowSubmenu,
          placement: this.placement,
          to: m && this.popoverBody || void 0,
          teleportDisabled: !m
        }, {
          default: () => f("div", {
            class: `${a}-dropdown-menu-wrapper`
          }, r ? f(_t, {
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
}), AC = ee({
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
    return f(je, null, f(BC, {
      clsPrefix: r,
      tmNode: e,
      key: e.key
    }), o == null ? void 0 : o.map((i) => {
      const {
        rawNode: a
      } = i;
      return a.show === !1 ? null : yc(a) ? f(xc, {
        clsPrefix: r,
        key: i.key
      }) : i.isGroup ? (Ft("dropdown", "`group` node is not allowed to be put in `group` node."), null) : f(Cc, {
        clsPrefix: r,
        tmNode: i,
        parentKey: t,
        key: i.key
      });
    }));
  }
}), DC = ee({
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
}), wc = ee({
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
    } = pe(Bi);
    Ee(Bl, {
      showIconRef: $(() => {
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
      hasSubmenuRef: $(() => {
        const {
          value: i
        } = r;
        return e.tmNodes.some((a) => {
          var l;
          if (a.isGroup)
            return (l = a.children) === null || l === void 0 ? void 0 : l.some(({
              rawNode: d
            }) => Fa(d, i));
          const {
            rawNode: s
          } = a;
          return Fa(s, i);
        });
      })
    });
    const o = I(null);
    return Ee(vi, null), Ee(hi, null), Ee(wo, o), {
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
      return a.show === !1 ? null : $C(a) ? f(DC, {
        tmNode: i,
        key: i.key
      }) : yc(a) ? f(xc, {
        clsPrefix: t,
        key: i.key
      }) : zC(a) ? f(AC, {
        clsPrefix: t,
        tmNode: i,
        parentKey: e,
        key: i.key
      }) : f(Cc, {
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
    }, r ? f(Mu, {
      contentClass: `${t}-dropdown-menu__content`
    }, {
      default: () => o
    }) : o, this.showArrow ? ju({
      clsPrefix: t,
      arrowStyle: this.arrowStyle,
      arrowClass: void 0,
      arrowWrapperClass: void 0,
      arrowWrapperStyle: void 0
    }) : null);
  }
}), EC = z("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [Ro(), z("dropdown-option", `
 position: relative;
 `, [M("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [M("&::before", `
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
 `, [M("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), Ye("disabled", [N("pending", `
 color: var(--n-option-text-color-hover);
 `, [T("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), M("&::before", "background-color: var(--n-option-color-hover);")]), N("active", `
 color: var(--n-option-text-color-active);
 `, [T("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), M("&::before", "background-color: var(--n-option-color-active);")]), N("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [T("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), N("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), N("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [T("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [N("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), T("prefix", `
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
 `)]), T("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), T("suffix", `
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
 `), M(">", [z("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Ye("scrollable", `
 padding: var(--n-padding);
 `), N("scrollable", [T("content", `
 padding: var(--n-padding);
 `)])]), TC = {
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
}, OC = Object.keys(ar), MC = Object.assign(Object.assign(Object.assign({}, ar), TC), ve.props), Sc = ee({
  name: "Dropdown",
  inheritAttrs: !1,
  props: MC,
  setup(e) {
    const t = I(!1), r = Mt(ie(e, "show"), t), o = $(() => {
      const {
        keyField: O,
        childrenField: n
      } = e;
      return yi(e.options, {
        getKey(D) {
          return D[O];
        },
        getDisabled(D) {
          return D.disabled === !0;
        },
        getIgnored(D) {
          return D.type === "divider" || D.type === "render";
        },
        getChildren(D) {
          return D[n];
        }
      });
    }), i = $(() => o.value.treeNodes), a = I(null), l = I(null), s = I(null), d = $(() => {
      var O, n, D;
      return (D = (n = (O = a.value) !== null && O !== void 0 ? O : l.value) !== null && n !== void 0 ? n : s.value) !== null && D !== void 0 ? D : null;
    }), u = $(() => o.value.getPath(d.value).keyPath), c = $(() => o.value.getPath(e.value).keyPath), v = Ue(() => e.keyboard && r.value);
    Sh({
      keydown: {
        ArrowUp: {
          prevent: !0,
          handler: k
        },
        ArrowRight: {
          prevent: !0,
          handler: C
        },
        ArrowDown: {
          prevent: !0,
          handler: R
        },
        ArrowLeft: {
          prevent: !0,
          handler: S
        },
        Enter: {
          prevent: !0,
          handler: w
        },
        Escape: y
      }
    }, v);
    const {
      mergedClsPrefixRef: g,
      inlineThemeDisabled: m
    } = Ae(e), h = ve("Dropdown", "-dropdown", EC, lc, e, g);
    Ee(Bi, {
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
    }), He(r, (O) => {
      !e.animated && !O && b();
    });
    function p(O, n) {
      const {
        onSelect: D
      } = e;
      D && re(D, O, n);
    }
    function x(O) {
      const {
        "onUpdate:show": n,
        onUpdateShow: D
      } = e;
      n && re(n, O), D && re(D, O), t.value = O;
    }
    function b() {
      a.value = null, l.value = null, s.value = null;
    }
    function y() {
      x(!1);
    }
    function S() {
      F("left");
    }
    function C() {
      F("right");
    }
    function k() {
      F("up");
    }
    function R() {
      F("down");
    }
    function w() {
      const O = B();
      O != null && O.isLeaf && r.value && (p(O.key, O.rawNode), x(!1));
    }
    function B() {
      var O;
      const {
        value: n
      } = o, {
        value: D
      } = d;
      return !n || D === null ? null : (O = n.getNode(D)) !== null && O !== void 0 ? O : null;
    }
    function F(O) {
      const {
        value: n
      } = d, {
        value: {
          getFirstAvailableNode: D
        }
      } = o;
      let E = null;
      if (n === null) {
        const H = D();
        H !== null && (E = H.key);
      } else {
        const H = B();
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
          L && (E = L.key);
        }
      }
      E !== null && (a.value = null, l.value = E);
    }
    const A = $(() => {
      const {
        size: O,
        inverted: n
      } = e, {
        common: {
          cubicBezierEaseInOut: D
        },
        self: E
      } = h.value, {
        padding: H,
        dividerColor: L,
        borderRadius: K,
        optionOpacityDisabled: te,
        [Z("optionIconSuffixWidth", O)]: X,
        [Z("optionSuffixWidth", O)]: U,
        [Z("optionIconPrefixWidth", O)]: j,
        [Z("optionPrefixWidth", O)]: q,
        [Z("fontSize", O)]: Y,
        [Z("optionHeight", O)]: ae,
        [Z("optionIconSize", O)]: le
      } = E, fe = {
        "--n-bezier": D,
        "--n-font-size": Y,
        "--n-padding": H,
        "--n-border-radius": K,
        "--n-option-height": ae,
        "--n-option-prefix-width": q,
        "--n-option-icon-prefix-width": j,
        "--n-option-suffix-width": U,
        "--n-option-icon-suffix-width": X,
        "--n-option-icon-size": le,
        "--n-divider-color": L,
        "--n-option-opacity-disabled": te
      };
      return n ? (fe["--n-color"] = E.colorInverted, fe["--n-option-color-hover"] = E.optionColorHoverInverted, fe["--n-option-color-active"] = E.optionColorActiveInverted, fe["--n-option-text-color"] = E.optionTextColorInverted, fe["--n-option-text-color-hover"] = E.optionTextColorHoverInverted, fe["--n-option-text-color-active"] = E.optionTextColorActiveInverted, fe["--n-option-text-color-child-active"] = E.optionTextColorChildActiveInverted, fe["--n-prefix-color"] = E.prefixColorInverted, fe["--n-suffix-color"] = E.suffixColorInverted, fe["--n-group-header-text-color"] = E.groupHeaderTextColorInverted) : (fe["--n-color"] = E.color, fe["--n-option-color-hover"] = E.optionColorHover, fe["--n-option-color-active"] = E.optionColorActive, fe["--n-option-text-color"] = E.optionTextColor, fe["--n-option-text-color-hover"] = E.optionTextColorHover, fe["--n-option-text-color-active"] = E.optionTextColorActive, fe["--n-option-text-color-child-active"] = E.optionTextColorChildActive, fe["--n-prefix-color"] = E.prefixColor, fe["--n-suffix-color"] = E.suffixColor, fe["--n-group-header-text-color"] = E.groupHeaderTextColor), fe;
    }), V = m ? Ze("dropdown", $(() => `${e.size[0]}${e.inverted ? "i" : ""}`), A, e) : void 0;
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
      cssVars: m ? void 0 : A,
      themeClass: V == null ? void 0 : V.themeClass,
      onRender: V == null ? void 0 : V.onRender
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
        ref: nu(i),
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
      return f(wc, Rt(this.$attrs, g, v));
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
    return f(br, Object.assign({}, kn(this.$props, OC), r), {
      trigger: () => {
        var o, i;
        return (i = (o = this.$slots).default) === null || i === void 0 ? void 0 : i.call(o);
      }
    });
  }
}), Bc = "_n_all__", kc = "_n_none__";
function IC(e, t, r, o) {
  return e ? (i) => {
    for (const a of e)
      switch (i) {
        case Bc:
          r(!0);
          return;
        case kc:
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
function LC(e, t) {
  return e ? e.map((r) => {
    switch (r) {
      case "all":
        return {
          label: t.checkTableAll,
          key: Bc
        };
      case "none":
        return {
          label: t.uncheckTableAll,
          key: kc
        };
      default:
        return r;
    }
  }) : [];
}
const NC = ee({
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
    } = pe(dn), s = $(() => IC(o.value, i, a, l)), d = $(() => LC(o.value, r.value));
    return () => {
      var u, c, v, g;
      const {
        clsPrefix: m
      } = e;
      return f(Sc, {
        theme: (c = (u = t.theme) === null || u === void 0 ? void 0 : u.peers) === null || c === void 0 ? void 0 : c.Dropdown,
        themeOverrides: (g = (v = t.themeOverrides) === null || v === void 0 ? void 0 : v.peers) === null || g === void 0 ? void 0 : g.Dropdown,
        options: d.value,
        onSelect: s.value
      }, {
        default: () => f(xt, {
          clsPrefix: m,
          class: `${m}-data-table-check-extra`
        }, {
          default: () => f(Tu, null)
        })
      });
    };
  }
});
function oa(e) {
  return typeof e.title == "function" ? e.title(e) : e.title;
}
const HC = ee({
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
}), Rc = ee({
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
      handleTableHeaderScroll: S,
      deriveNextSorter: C,
      doUncheckAll: k,
      doCheckAll: R
    } = pe(dn), w = I(), B = I({});
    function F(E) {
      const H = B.value[E];
      return H == null ? void 0 : H.getBoundingClientRect().width;
    }
    function A() {
      a.value ? k() : R();
    }
    function V(E, H) {
      if (Gt(E, "dataTableFilter") || Gt(E, "dataTableResizable") || !ra(H)) return;
      const L = v.value.find((te) => te.columnKey === H.key) || null, K = nC(H, L);
      C(K);
    }
    const O = /* @__PURE__ */ new Map();
    function n(E) {
      O.set(E.key, F(E.key));
    }
    function D(E, H) {
      const L = O.get(E.key);
      if (L === void 0)
        return;
      const K = L + H, te = Qy(K, E.minWidth, E.maxWidth);
      b(K, te, E, F), y(E, te);
    }
    return {
      cellElsRef: B,
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
      virtualListRef: w,
      handleCheckboxUpdateChecked: A,
      handleColHeaderClick: V,
      handleTableHeaderScroll: S,
      handleColumnResizeStart: n,
      handleColumnResize: D
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
      handleColumnResizeStart: S,
      handleColumnResize: C
    } = this, k = (F, A, V) => F.map(({
      column: O,
      colIndex: n,
      colSpan: D,
      rowSpan: E,
      isLast: H
    }) => {
      var L, K;
      const te = ln(O), {
        ellipsis: X
      } = O, U = () => O.type === "selection" ? O.multiple !== !1 ? f(je, null, f(wi, {
        key: i,
        privateInsideTable: !0,
        checked: a,
        indeterminate: l,
        disabled: h,
        onUpdateChecked: y
      }), c ? f(NC, {
        clsPrefix: t
      }) : null) : null : f(je, null, f("div", {
        class: `${t}-data-table-th__title-wrapper`
      }, f("div", {
        class: `${t}-data-table-th__title`
      }, X === !0 || X && !X.tooltip ? f("div", {
        class: `${t}-data-table-th__ellipsis`
      }, oa(O)) : X && typeof X == "object" ? f(Si, Object.assign({}, X, {
        theme: u.peers.Ellipsis,
        themeOverrides: u.peerOverrides.Ellipsis
      }), {
        default: () => oa(O)
      }) : oa(O)), ra(O) ? f(SC, {
        column: O
      }) : null), id(O) ? f(yC, {
        column: O,
        options: O.filterOptions
      }) : null, fc(O) ? f(CC, {
        onResizeStart: () => {
          S(O);
        },
        onResize: (ae) => {
          C(O, ae);
        }
      }) : null), j = te in r, q = te in o, Y = A && !O.fixed ? "div" : "th";
      return f(Y, {
        ref: (ae) => e[te] = ae,
        key: te,
        style: [A && !O.fixed ? {
          position: "absolute",
          left: yt(A(n)),
          top: 0,
          bottom: 0
        } : {
          left: yt((L = r[te]) === null || L === void 0 ? void 0 : L.start),
          right: yt((K = o[te]) === null || K === void 0 ? void 0 : K.start)
        }, {
          width: yt(O.width),
          textAlign: O.titleAlign || O.align,
          height: V
        }],
        colspan: D,
        rowspan: E,
        "data-col-key": te,
        class: [`${t}-data-table-th`, (j || q) && `${t}-data-table-th--fixed-${j ? "left" : "right"}`, {
          [`${t}-data-table-th--sorting`]: hc(O, p),
          [`${t}-data-table-th--filterable`]: id(O),
          [`${t}-data-table-th--sortable`]: ra(O),
          [`${t}-data-table-th--selection`]: O.type === "selection",
          [`${t}-data-table-th--last`]: H
        }, O.className],
        onClick: O.type !== "selection" && O.type !== "expand" && !("children" in O) ? (ae) => {
          b(ae, O);
        } : void 0
      }, U());
    });
    if (x) {
      const {
        headerHeight: F
      } = this;
      let A = 0, V = 0;
      return d.forEach((O) => {
        O.column.fixed === "left" ? A++ : O.column.fixed === "right" && V++;
      }), f(Ja, {
        ref: "virtualListRef",
        class: `${t}-data-table-base-table-header`,
        style: {
          height: yt(F)
        },
        onScroll: this.handleTableHeaderScroll,
        columns: d,
        itemSize: F,
        showScrollbar: !1,
        items: [{}],
        itemResizable: !1,
        visibleItemsTag: HC,
        visibleItemsProps: {
          clsPrefix: t,
          id: v,
          cols: d,
          width: Ct(this.scrollX)
        },
        renderItemWithCols: ({
          startColIndex: O,
          endColIndex: n,
          getLeft: D
        }) => {
          const E = d.map((L, K) => ({
            column: L.column,
            isLast: K === d.length - 1,
            colIndex: L.index,
            colSpan: 1,
            rowSpan: 1
          })).filter(({
            column: L
          }, K) => !!(O <= K && K <= n || L.fixed)), H = k(E, D, yt(F));
          return H.splice(A, 0, f("th", {
            colspan: d.length - A - V,
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
    const R = f("thead", {
      class: `${t}-data-table-thead`,
      "data-n-id": v
    }, s.map((F) => f("tr", {
      class: `${t}-data-table-tr`
    }, k(F, null, void 0))));
    if (!g)
      return R;
    const {
      handleTableHeaderScroll: w,
      scrollX: B
    } = this;
    return f("div", {
      class: `${t}-data-table-base-table-header`,
      onScroll: w
    }, f("table", {
      class: `${t}-data-table-table`,
      style: {
        minWidth: Ct(B),
        tableLayout: m
      }
    }, f("colgroup", null, d.map((F) => f("col", {
      key: F.key,
      style: F.style
    }))), R));
  }
});
function jC(e, t) {
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
const _C = ee({
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
}), WC = ee({
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
      hoverKeyRef: S,
      summaryRef: C,
      mergedSortStateRef: k,
      virtualScrollRef: R,
      virtualScrollXRef: w,
      heightForRowRef: B,
      minRowHeightRef: F,
      componentId: A,
      mergedTableLayoutRef: V,
      childTriggerColIndexRef: O,
      indentRef: n,
      rowPropsRef: D,
      maxHeightRef: E,
      stripedRef: H,
      loadingRef: L,
      onLoadRef: K,
      loadingKeySetRef: te,
      expandableRef: X,
      stickyExpandedRowsRef: U,
      renderExpandIconRef: j,
      summaryPlacementRef: q,
      treeMateRef: Y,
      scrollbarPropsRef: ae,
      setHeaderScrollLeft: le,
      doUpdateExpandedRowKeys: fe,
      handleTableBodyScroll: we,
      doCheck: G,
      doUncheck: ue,
      renderCell: Fe
    } = pe(dn), be = pe(sn), Pe = I(null), ze = I(null), st = I(null), et = Ue(() => d.value.length === 0), ft = Ue(() => e.showHeader || !et.value), ht = Ue(() => e.showHeader || et.value);
    let xe = "";
    const ye = $(() => new Set(o.value));
    function $e(ce) {
      var Be;
      return (Be = Y.value.getNode(ce)) === null || Be === void 0 ? void 0 : Be.rawNode;
    }
    function Ie(ce, Be, P) {
      const W = $e(ce.key);
      if (!W) {
        Ft("data-table", `fail to get row data with key ${ce.key}`);
        return;
      }
      if (P) {
        const J = d.value.findIndex((se) => se.key === xe);
        if (J !== -1) {
          const se = d.value.findIndex((Se) => Se.key === ce.key), de = Math.min(J, se), ge = Math.max(J, se), me = [];
          d.value.slice(de, ge + 1).forEach((Se) => {
            Se.disabled || me.push(Se.key);
          }), Be ? G(me, !1, W) : ue(me, W), xe = ce.key;
          return;
        }
      }
      Be ? G(ce.key, !1, W) : ue(ce.key, W), xe = ce.key;
    }
    function Qe(ce) {
      const Be = $e(ce.key);
      if (!Be) {
        Ft("data-table", `fail to get row data with key ${ce.key}`);
        return;
      }
      G(ce.key, !0, Be);
    }
    function oe() {
      if (!ft.value) {
        const {
          value: Be
        } = st;
        return Be || null;
      }
      if (R.value)
        return dt();
      const {
        value: ce
      } = Pe;
      return ce ? ce.containerRef : null;
    }
    function he(ce, Be) {
      var P;
      if (te.value.has(ce)) return;
      const {
        value: W
      } = o, J = W.indexOf(ce), se = Array.from(W);
      ~J ? (se.splice(J, 1), fe(se)) : Be && !Be.isLeaf && !Be.shallowLoaded ? (te.value.add(ce), (P = K.value) === null || P === void 0 || P.call(K, Be.rawNode).then(() => {
        const {
          value: de
        } = o, ge = Array.from(de);
        ~ge.indexOf(ce) || ge.push(ce), fe(ge);
      }).finally(() => {
        te.value.delete(ce);
      })) : (se.push(ce), fe(se));
    }
    function Te() {
      S.value = null;
    }
    function dt() {
      const {
        value: ce
      } = ze;
      return (ce == null ? void 0 : ce.listElRef) || null;
    }
    function $t() {
      const {
        value: ce
      } = ze;
      return (ce == null ? void 0 : ce.itemsElRef) || null;
    }
    function At(ce) {
      var Be;
      we(ce), (Be = Pe.value) === null || Be === void 0 || Be.sync();
    }
    function mt(ce) {
      var Be;
      const {
        onResize: P
      } = e;
      P && P(ce), (Be = Pe.value) === null || Be === void 0 || Be.sync();
    }
    const rt = {
      getScrollContainer: oe,
      scrollTo(ce, Be) {
        var P, W;
        R.value ? (P = ze.value) === null || P === void 0 || P.scrollTo(ce, Be) : (W = Pe.value) === null || W === void 0 || W.scrollTo(ce, Be);
      }
    }, wt = M([({
      props: ce
    }) => {
      const Be = (W) => W === null ? null : M(`[data-n-id="${ce.componentId}"] [data-col-key="${W}"]::after`, {
        boxShadow: "var(--n-box-shadow-after)"
      }), P = (W) => W === null ? null : M(`[data-n-id="${ce.componentId}"] [data-col-key="${W}"]::before`, {
        boxShadow: "var(--n-box-shadow-before)"
      });
      return M([Be(ce.leftActiveFixedColKey), P(ce.rightActiveFixedColKey), ce.leftActiveFixedChildrenColKeys.map((W) => Be(W)), ce.rightActiveFixedChildrenColKeys.map((W) => P(W))]);
    }]);
    let tt = !1;
    return it(() => {
      const {
        value: ce
      } = h, {
        value: Be
      } = p, {
        value: P
      } = x, {
        value: W
      } = b;
      if (!tt && ce === null && P === null)
        return;
      const J = {
        leftActiveFixedColKey: ce,
        leftActiveFixedChildrenColKeys: Be,
        rightActiveFixedColKey: P,
        rightActiveFixedChildrenColKeys: W,
        componentId: A
      };
      wt.mount({
        id: `n-${A}`,
        force: !0,
        props: J,
        anchorMetaName: Dr,
        parent: be == null ? void 0 : be.styleMountTarget
      }), tt = !0;
    }), Sd(() => {
      wt.unmount({
        id: `n-${A}`,
        parent: be == null ? void 0 : be.styleMountTarget
      });
    }), Object.assign({
      bodyWidth: r,
      summaryPlacement: q,
      dataTableSlots: t,
      componentId: A,
      scrollbarInstRef: Pe,
      virtualListRef: ze,
      emptyElRef: st,
      summary: C,
      mergedClsPrefix: i,
      mergedTheme: a,
      scrollX: l,
      cols: s,
      loading: L,
      bodyShowHeaderOnly: ht,
      shouldDisplaySomeTablePart: ft,
      empty: et,
      paginatedDataAndInfo: $(() => {
        const {
          value: ce
        } = H;
        let Be = !1;
        return {
          data: d.value.map(ce ? (W, J) => (W.isLeaf || (Be = !0), {
            tmNode: W,
            key: W.key,
            striped: J % 2 === 1,
            index: J
          }) : (W, J) => (W.isLeaf || (Be = !0), {
            tmNode: W,
            key: W.key,
            striped: !1,
            index: J
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
      mergedExpandedRowKeySet: ye,
      hoverKey: S,
      mergedSortState: k,
      virtualScroll: R,
      virtualScrollX: w,
      heightForRow: B,
      minRowHeight: F,
      mergedTableLayout: V,
      childTriggerColIndex: O,
      indent: n,
      rowProps: D,
      maxHeight: E,
      loadingKeySet: te,
      expandable: X,
      stickyExpandedRows: U,
      renderExpandIcon: j,
      scrollbarProps: ae,
      setHeaderScrollLeft: le,
      handleVirtualListScroll: At,
      handleVirtualListResize: mt,
      handleMouseleaveTable: Te,
      virtualListContainer: dt,
      virtualListContent: $t,
      handleTableBodyScroll: we,
      handleCheckboxUpdateChecked: Ie,
      handleRadioUpdateChecked: Qe,
      handleUpdateExpanded: he,
      renderCell: Fe
    }, rt);
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
      minWidth: Ct(t) || "100%"
    };
    t && (m.width = "100%");
    const h = f(pr, Object.assign({}, this.scrollbarProps, {
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
          mergedTheme: S,
          fixedColumnLeftMap: C,
          fixedColumnRightMap: k,
          currentPage: R,
          rowClassName: w,
          mergedSortState: B,
          mergedExpandedRowKeySet: F,
          stickyExpandedRows: A,
          componentId: V,
          childTriggerColIndex: O,
          expandable: n,
          rowProps: D,
          handleMouseleaveTable: E,
          renderExpand: H,
          summary: L,
          handleCheckboxUpdateChecked: K,
          handleRadioUpdateChecked: te,
          handleUpdateExpanded: X,
          heightForRow: U,
          minRowHeight: j,
          virtualScrollX: q
        } = this, {
          length: Y
        } = b;
        let ae;
        const {
          data: le,
          hasChildren: fe
        } = y, we = fe ? jC(le, F) : le;
        if (L) {
          const xe = L(this.rawPaginatedData);
          if (Array.isArray(xe)) {
            const ye = xe.map(($e, Ie) => ({
              isSummaryRow: !0,
              key: `__n_summary__${Ie}`,
              tmNode: {
                rawNode: $e,
                disabled: !0
              },
              index: -1
            }));
            ae = this.summaryPlacement === "top" ? [...ye, ...we] : [...we, ...ye];
          } else {
            const ye = {
              isSummaryRow: !0,
              key: "__n_summary__",
              tmNode: {
                rawNode: xe,
                disabled: !0
              },
              index: -1
            };
            ae = this.summaryPlacement === "top" ? [ye, ...we] : [...we, ye];
          }
        } else
          ae = we;
        const G = fe ? {
          width: yt(this.indent)
        } : void 0, ue = [];
        ae.forEach((xe) => {
          H && F.has(xe.key) && (!n || n(xe.tmNode.rawNode)) ? ue.push(xe, {
            isExpandedRow: !0,
            key: `${xe.key}-expand`,
            // solve key repeat of the expanded row
            tmNode: xe.tmNode,
            index: xe.index
          }) : ue.push(xe);
        });
        const {
          length: Fe
        } = ue, be = {};
        le.forEach(({
          tmNode: xe
        }, ye) => {
          be[ye] = xe.key;
        });
        const Pe = A ? this.bodyWidth : null, ze = Pe === null ? void 0 : `${Pe}px`, st = this.virtualScrollX ? "div" : "td";
        let et = 0, ft = 0;
        q && b.forEach((xe) => {
          xe.column.fixed === "left" ? et++ : xe.column.fixed === "right" && ft++;
        });
        const ht = ({
          // Normal
          rowInfo: xe,
          displayedRowIndex: ye,
          isVirtual: $e,
          // Virtual X
          isVirtualX: Ie,
          startColIndex: Qe,
          endColIndex: oe,
          getLeft: he
        }) => {
          const {
            index: Te
          } = xe;
          if ("isExpandedRow" in xe) {
            const {
              tmNode: {
                key: se,
                rawNode: de
              }
            } = xe;
            return f("tr", {
              class: `${r}-data-table-tr ${r}-data-table-tr--expanded`,
              key: `${se}__expand`
            }, f("td", {
              class: [`${r}-data-table-td`, `${r}-data-table-td--last-col`, ye + 1 === Fe && `${r}-data-table-td--last-row`],
              colspan: Y
            }, A ? f("div", {
              class: `${r}-data-table-expand`,
              style: {
                width: ze
              }
            }, H(de, Te)) : H(de, Te)));
          }
          const dt = "isSummaryRow" in xe, $t = !dt && xe.striped, {
            tmNode: At,
            key: mt
          } = xe, {
            rawNode: rt
          } = At, wt = F.has(mt), tt = D ? D(rt, Te) : void 0, ce = typeof w == "string" ? w : tC(rt, Te, w), Be = Ie ? b.filter((se, de) => !!(Qe <= de && de <= oe || se.column.fixed)) : b, P = Ie ? yt((U == null ? void 0 : U(rt, Te)) || j) : void 0, W = Be.map((se) => {
            var de, ge, me, Se, Le;
            const ot = se.index;
            if (ye in p) {
              const at = p[ye], vt = at.indexOf(ot);
              if (~vt)
                return at.splice(vt, 1), null;
            }
            const {
              column: Ve
            } = se, Et = ln(se), {
              rowSpan: It,
              colSpan: Lt
            } = Ve, Vt = dt ? ((de = xe.tmNode.rawNode[Et]) === null || de === void 0 ? void 0 : de.colSpan) || 1 : Lt ? Lt(rt, Te) : 1, Kt = dt ? ((ge = xe.tmNode.rawNode[Et]) === null || ge === void 0 ? void 0 : ge.rowSpan) || 1 : It ? It(rt, Te) : 1, tn = ot + Vt === Y, Ut = ye + Kt === Fe, _ = Kt > 1;
            if (_ && (x[ye] = {
              [ot]: []
            }), Vt > 1 || _)
              for (let at = ye; at < ye + Kt; ++at) {
                _ && x[ye][ot].push(be[at]);
                for (let vt = ot; vt < ot + Vt; ++vt)
                  at === ye && vt === ot || (at in p ? p[at].push(vt) : p[at] = [vt]);
              }
            const Q = _ ? this.hoverKey : null, {
              cellProps: Ce
            } = Ve, Oe = Ce == null ? void 0 : Ce(rt, Te), qe = {
              "--indent-offset": ""
            }, Ne = Ve.fixed ? "td" : st;
            return f(Ne, Object.assign({}, Oe, {
              key: Et,
              style: [{
                textAlign: Ve.align || void 0,
                width: yt(Ve.width)
              }, Ie && {
                height: P
              }, Ie && !Ve.fixed ? {
                position: "absolute",
                left: yt(he(ot)),
                top: 0,
                bottom: 0
              } : {
                left: yt((me = C[Et]) === null || me === void 0 ? void 0 : me.start),
                right: yt((Se = k[Et]) === null || Se === void 0 ? void 0 : Se.start)
              }, qe, (Oe == null ? void 0 : Oe.style) || ""],
              colspan: Vt,
              rowspan: $e ? void 0 : Kt,
              "data-col-key": Et,
              class: [`${r}-data-table-td`, Ve.className, Oe == null ? void 0 : Oe.class, dt && `${r}-data-table-td--summary`, Q !== null && x[ye][ot].includes(Q) && `${r}-data-table-td--hover`, hc(Ve, B) && `${r}-data-table-td--sorting`, Ve.fixed && `${r}-data-table-td--fixed-${Ve.fixed}`, Ve.align && `${r}-data-table-td--${Ve.align}-align`, Ve.type === "selection" && `${r}-data-table-td--selection`, Ve.type === "expand" && `${r}-data-table-td--expand`, tn && `${r}-data-table-td--last-col`, Ut && `${r}-data-table-td--last-row`]
            }), fe && ot === O ? [fh(qe["--indent-offset"] = dt ? 0 : xe.tmNode.level, f("div", {
              class: `${r}-data-table-indent`,
              style: G
            })), dt || xe.tmNode.isLeaf ? f("div", {
              class: `${r}-data-table-expand-placeholder`
            }) : f(ld, {
              class: `${r}-data-table-expand-trigger`,
              clsPrefix: r,
              expanded: wt,
              rowData: rt,
              renderExpandIcon: this.renderExpandIcon,
              loading: s.has(xe.key),
              onClick: () => {
                X(mt, xe.tmNode);
              }
            })] : null, Ve.type === "selection" ? dt ? null : Ve.multiple === !1 ? f(hC, {
              key: R,
              rowKey: mt,
              disabled: xe.tmNode.disabled,
              onUpdateChecked: () => {
                te(xe.tmNode);
              }
            }) : f(iC, {
              key: R,
              rowKey: mt,
              disabled: xe.tmNode.disabled,
              onUpdateChecked: (at, vt) => {
                K(xe.tmNode, at, vt.shiftKey);
              }
            }) : Ve.type === "expand" ? dt ? null : !Ve.expandable || !((Le = Ve.expandable) === null || Le === void 0) && Le.call(Ve, rt) ? f(ld, {
              clsPrefix: r,
              rowData: rt,
              expanded: wt,
              renderExpandIcon: this.renderExpandIcon,
              onClick: () => {
                X(mt, null);
              }
            }) : null : f(pC, {
              clsPrefix: r,
              index: Te,
              row: rt,
              column: Ve,
              isSummary: dt,
              mergedTheme: S,
              renderCell: this.renderCell
            }));
          });
          return Ie && et && ft && W.splice(et, 0, f("td", {
            colspan: b.length - et - ft,
            style: {
              pointerEvents: "none",
              visibility: "hidden",
              height: 0
            }
          })), f("tr", Object.assign({}, tt, {
            onMouseenter: (se) => {
              var de;
              this.hoverKey = mt, (de = tt == null ? void 0 : tt.onMouseenter) === null || de === void 0 || de.call(tt, se);
            },
            key: mt,
            class: [`${r}-data-table-tr`, dt && `${r}-data-table-tr--summary`, $t && `${r}-data-table-tr--striped`, wt && `${r}-data-table-tr--expanded`, ce, tt == null ? void 0 : tt.class],
            style: [tt == null ? void 0 : tt.style, Ie && {
              height: P
            }]
          }), W);
        };
        return o ? f(Ja, {
          ref: "virtualListRef",
          items: ue,
          itemSize: this.minRowHeight,
          visibleItemsTag: _C,
          visibleItemsProps: {
            clsPrefix: r,
            id: V,
            cols: b,
            onMouseleave: E
          },
          showScrollbar: !1,
          onResize: this.handleVirtualListResize,
          onScroll: this.handleVirtualListScroll,
          itemsStyle: m,
          itemResizable: !q,
          columns: b,
          renderItemWithCols: q ? ({
            itemIndex: xe,
            item: ye,
            startColIndex: $e,
            endColIndex: Ie,
            getLeft: Qe
          }) => ht({
            displayedRowIndex: xe,
            isVirtual: !0,
            isVirtualX: !0,
            rowInfo: ye,
            startColIndex: $e,
            endColIndex: Ie,
            getLeft: Qe
          }) : void 0
        }, {
          default: ({
            item: xe,
            index: ye,
            renderedItemWithCols: $e
          }) => $e || ht({
            rowInfo: xe,
            displayedRowIndex: ye,
            isVirtual: !0,
            isVirtualX: !1,
            startColIndex: 0,
            endColIndex: 0,
            getLeft(Ie) {
              return 0;
            }
          })
        }) : f("table", {
          class: `${r}-data-table-table`,
          onMouseleave: E,
          style: {
            tableLayout: this.mergedTableLayout
          }
        }, f("colgroup", null, b.map((xe) => f("col", {
          key: xe.key,
          style: xe.style
        }))), this.showHeader ? f(Rc, {
          discrete: !1
        }) : null, this.empty ? null : f("tbody", {
          "data-n-id": V,
          class: `${r}-data-table-tbody`
        }, ue.map((xe, ye) => ht({
          rowInfo: xe,
          displayedRowIndex: ye,
          isVirtual: !1,
          isVirtualX: !1,
          startColIndex: -1,
          endColIndex: -1,
          getLeft($e) {
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
      }, en(this.dataTableSlots.empty, () => [f(Er, {
        theme: this.mergedTheme.peers.Empty,
        themeOverrides: this.mergedTheme.peerOverrides.Empty
      })]));
      return this.shouldDisplaySomeTablePart ? f(je, null, h, p()) : f(Ar, {
        onResize: this.onResize
      }, {
        default: p
      });
    }
    return h;
  }
}), VC = ee({
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
    } = pe(dn), u = I(null), c = I(null), v = I(null), g = I(!(r.value.length || t.value.length)), m = $(() => ({
      maxHeight: Ct(i.value),
      minHeight: Ct(a.value)
    }));
    function h(y) {
      o.value = y.contentRect.width, d(), g.value || (g.value = !0);
    }
    function p() {
      var y;
      const {
        value: S
      } = u;
      return S ? s.value ? ((y = S.virtualListRef) === null || y === void 0 ? void 0 : y.listElRef) || null : S.$el : null;
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
      scrollTo(y, S) {
        var C;
        (C = c.value) === null || C === void 0 || C.scrollTo(y, S);
      }
    };
    return it(() => {
      const {
        value: y
      } = v;
      if (!y) return;
      const S = `${e.value}-data-table-base-table--transition-disabled`;
      g.value ? setTimeout(() => {
        y.classList.remove(S);
      }, 0) : y.classList.add(S);
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
    }, o ? null : f(Rc, {
      ref: "headerInstRef"
    }), f(WC, {
      ref: "bodyInstRef",
      bodyStyle: this.bodyStyle,
      showHeader: o,
      flexHeight: r,
      onResize: this.handleBodyResize
    }));
  }
}), dd = UC(), KC = M([z("data-table", `
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
 `), N("flex-height", [M(">", [z("data-table-wrapper", [M(">", [z("data-table-base-table", `
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 `, [M(">", [z("data-table-base-table-body", "flex-basis: 0;", [
  // last-child means there is no empty icon
  // body is a scrollbar, we need to override height 100%
  M("&:last-child", "flex-grow: 1;")
])])])])])])]), M(">", [z("data-table-loading-wrapper", `
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
 `, [Ro({
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
 `, [N("expanded", [z("icon", "transform: rotate(90deg);", [Zt({
  originalTransform: "rotate(90deg)"
})]), z("base-icon", "transform: rotate(90deg);", [Zt({
  originalTransform: "rotate(90deg)"
})])]), z("base-loading", `
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [Zt()]), z("icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [Zt()]), z("base-icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [Zt()])]), z("data-table-thead", `
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
 `), N("striped", "background-color: var(--n-merged-td-color-striped);", [z("data-table-td", "background-color: var(--n-merged-td-color-striped);")]), Ye("summary", [M("&:hover", "background-color: var(--n-merged-td-color-hover);", [M(">", [z("data-table-td", "background-color: var(--n-merged-td-color-hover);")])])])]), z("data-table-th", `
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
 `)]), dd, N("selection", `
 padding: 0;
 text-align: center;
 line-height: 0;
 z-index: 3;
 `), T("title-wrapper", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 max-width: 100%;
 `, [T("title", `
 flex: 1;
 min-width: 0;
 `)]), T("ellipsis", `
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
 `, [T("ellipsis", `
 max-width: calc(100% - 18px);
 `), M("&:hover", `
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
 `, [M("&::after", `
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
 `), N("active", [M("&::after", ` 
 background-color: var(--n-th-icon-color-active);
 `)]), M("&:hover::after", `
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
 `, [M("&:hover", `
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
  M("&::after", `
 bottom: 0 !important;
 `),
  M("&::before", `
 bottom: 0 !important;
 `)
]), N("summary", `
 background-color: var(--n-merged-th-color);
 `), N("hover", `
 background-color: var(--n-merged-td-color-hover);
 `), N("sorting", `
 background-color: var(--n-merged-td-color-sorting);
 `), T("ellipsis", `
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
 `), dd]), z("data-table-empty", `
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
 `)]), T("pagination", `
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
 `, [M("&::after, &::before", `
 bottom: 0 !important;
 `)])]), Ye("single-line", [z("data-table-th", `
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
 `)]), z("data-table-base-table", [N("transition-disabled", [z("data-table-th", [M("&::after, &::before", "transition: none;")]), z("data-table-td", [M("&::after, &::before", "transition: none;")])])]), N("bottom-bordered", [z("data-table-td", [N("last-row", `
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
 `, [M("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
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
 `), T("group", `
 display: flex;
 flex-direction: column;
 padding: 12px 12px 0 12px;
 `, [z("checkbox", `
 margin-bottom: 12px;
 margin-right: 0;
 `), z("radio", `
 margin-bottom: 12px;
 margin-right: 0;
 `)]), T("action", `
 padding: var(--n-action-padding);
 display: flex;
 flex-wrap: nowrap;
 justify-content: space-evenly;
 border-top: 1px solid var(--n-action-divider-color);
 `, [z("button", [M("&:not(:last-child)", `
 margin: var(--n-action-button-margin);
 `), M("&:last-child", `
 margin-right: 0;
 `)])]), z("divider", `
 margin: 0 !important;
 `)]), fi(z("data-table", `
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 --n-merged-th-color-hover: var(--n-th-color-hover-modal);
 --n-merged-td-color-hover: var(--n-td-color-hover-modal);
 --n-merged-th-color-sorting: var(--n-th-color-hover-modal);
 --n-merged-td-color-sorting: var(--n-td-color-hover-modal);
 --n-merged-td-color-striped: var(--n-td-color-striped-modal);
 `)), La(z("data-table", `
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 --n-merged-th-color-hover: var(--n-th-color-hover-popover);
 --n-merged-td-color-hover: var(--n-td-color-hover-popover);
 --n-merged-th-color-sorting: var(--n-th-color-hover-popover);
 --n-merged-td-color-sorting: var(--n-td-color-hover-popover);
 --n-merged-td-color-striped: var(--n-td-color-striped-popover);
 `))]);
function UC() {
  return [N("fixed-left", `
 left: 0;
 position: sticky;
 z-index: 2;
 `, [M("&::after", `
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
 `, [M("&::before", `
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
function qC(e, t) {
  const {
    paginatedDataRef: r,
    treeMateRef: o,
    selectionColumnRef: i
  } = t, a = I(e.defaultCheckedRowKeys), l = $(() => {
    var k;
    const {
      checkedRowKeys: R
    } = e, w = R === void 0 ? a.value : R;
    return ((k = i.value) === null || k === void 0 ? void 0 : k.multiple) === !1 ? {
      checkedKeys: w.slice(0, 1),
      indeterminateKeys: []
    } : o.value.getCheckedKeys(w, {
      cascade: e.cascade,
      allowNotLoaded: e.allowCheckingNotLoaded
    });
  }), s = $(() => l.value.checkedKeys), d = $(() => l.value.indeterminateKeys), u = $(() => new Set(s.value)), c = $(() => new Set(d.value)), v = $(() => {
    const {
      value: k
    } = u;
    return r.value.reduce((R, w) => {
      const {
        key: B,
        disabled: F
      } = w;
      return R + (!F && k.has(B) ? 1 : 0);
    }, 0);
  }), g = $(() => r.value.filter((k) => k.disabled).length), m = $(() => {
    const {
      length: k
    } = r.value, {
      value: R
    } = c;
    return v.value > 0 && v.value < k - g.value || r.value.some((w) => R.has(w.key));
  }), h = $(() => {
    const {
      length: k
    } = r.value;
    return v.value !== 0 && v.value === k - g.value;
  }), p = $(() => r.value.length === 0);
  function x(k, R, w) {
    const {
      "onUpdate:checkedRowKeys": B,
      onUpdateCheckedRowKeys: F,
      onCheckedRowKeysChange: A
    } = e, V = [], {
      value: {
        getNode: O
      }
    } = o;
    k.forEach((n) => {
      var D;
      const E = (D = O(n)) === null || D === void 0 ? void 0 : D.rawNode;
      V.push(E);
    }), B && re(B, k, V, {
      row: R,
      action: w
    }), F && re(F, k, V, {
      row: R,
      action: w
    }), A && re(A, k, V, {
      row: R,
      action: w
    }), a.value = k;
  }
  function b(k, R = !1, w) {
    if (!e.loading) {
      if (R) {
        x(Array.isArray(k) ? k.slice(0, 1) : [k], w, "check");
        return;
      }
      x(o.value.check(k, s.value, {
        cascade: e.cascade,
        allowNotLoaded: e.allowCheckingNotLoaded
      }).checkedKeys, w, "check");
    }
  }
  function y(k, R) {
    e.loading || x(o.value.uncheck(k, s.value, {
      cascade: e.cascade,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, R, "uncheck");
  }
  function S(k = !1) {
    const {
      value: R
    } = i;
    if (!R || e.loading) return;
    const w = [];
    (k ? o.value.treeNodes : r.value).forEach((B) => {
      B.disabled || w.push(B.key);
    }), x(o.value.check(w, s.value, {
      cascade: !0,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, void 0, "checkAll");
  }
  function C(k = !1) {
    const {
      value: R
    } = i;
    if (!R || e.loading) return;
    const w = [];
    (k ? o.value.treeNodes : r.value).forEach((B) => {
      B.disabled || w.push(B.key);
    }), x(o.value.uncheck(w, s.value, {
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
    doCheckAll: S,
    doUncheckAll: C,
    doCheck: b,
    doUncheck: y
  };
}
function GC(e, t) {
  const r = Ue(() => {
    for (const u of e.columns)
      if (u.type === "expand")
        return process.env.NODE_ENV !== "production" && !u.renderExpand && Ft("data-table", "column with type `expand` has no `renderExpand` prop."), u.renderExpand;
  }), o = Ue(() => {
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
  })() : t.value.getNonLeafKeys() : e.defaultExpandedRowKeys), a = ie(e, "expandedRowKeys"), l = ie(e, "stickyExpandedRows"), s = Mt(a, i);
  function d(u) {
    const {
      onUpdateExpandedRowKeys: c,
      "onUpdate:expandedRowKeys": v
    } = e;
    c && re(c, u), v && re(v, u), i.value = u;
  }
  return {
    stickyExpandedRowsRef: l,
    mergedExpandedRowKeysRef: s,
    renderExpandRef: r,
    expandableRef: o,
    doUpdateExpandedRowKeys: d
  };
}
function XC(e, t) {
  const r = [], o = [], i = [], a = /* @__PURE__ */ new WeakMap();
  let l = -1, s = 0, d = !1, u = 0;
  function c(g, m) {
    m > l && (r[m] = [], l = m), g.forEach((h) => {
      if ("children" in h)
        c(h.children, m + 1);
      else {
        const p = "key" in h ? h.key : void 0;
        o.push({
          key: ln(h),
          style: eC(h, p !== void 0 ? Ct(t(p)) : void 0),
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
        v(p.children, m + 1), p.children.forEach((S) => {
          var C, k;
          y.colSpan += (k = (C = a.get(S)) === null || C === void 0 ? void 0 : C.colSpan) !== null && k !== void 0 ? k : 0;
        }), b + y.colSpan === s && (y.isLast = !0), a.set(p, y), r[m].push(y);
      } else {
        if (u < h) {
          u += 1;
          return;
        }
        let b = 1;
        "titleColSpan" in p && (b = (x = p.titleColSpan) !== null && x !== void 0 ? x : 1), b > 1 && (h = u + b);
        const y = u + b === s, S = {
          column: p,
          colSpan: b,
          colIndex: u,
          rowSpan: l - m + 1,
          isLast: y
        };
        a.set(p, S), r[m].push(S), u += 1;
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
function YC(e, t) {
  const r = $(() => XC(e.columns, t));
  return {
    rowsRef: $(() => r.value.rows),
    colsRef: $(() => r.value.cols),
    hasEllipsisRef: $(() => r.value.hasEllipsis),
    dataRelatedColsRef: $(() => r.value.dataRelatedCols)
  };
}
function ZC() {
  const e = I({});
  function t(i) {
    return e.value[i];
  }
  function r(i, a) {
    fc(i) && "key" in i && (e.value[i.key] = a);
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
function JC(e, {
  mainTableInstRef: t,
  mergedCurrentPageRef: r,
  bodyWidthRef: o
}) {
  let i = 0;
  const a = I(), l = I(null), s = I([]), d = I(null), u = I([]), c = $(() => Ct(e.scrollX)), v = $(() => e.columns.filter((F) => F.fixed === "left")), g = $(() => e.columns.filter((F) => F.fixed === "right")), m = $(() => {
    const F = {};
    let A = 0;
    function V(O) {
      O.forEach((n) => {
        const D = {
          start: A,
          end: 0
        };
        F[ln(n)] = D, "children" in n ? (V(n.children), D.end = A) : (A += rd(n) || 0, D.end = A);
      });
    }
    return V(v.value), F;
  }), h = $(() => {
    const F = {};
    let A = 0;
    function V(O) {
      for (let n = O.length - 1; n >= 0; --n) {
        const D = O[n], E = {
          start: A,
          end: 0
        };
        F[ln(D)] = E, "children" in D ? (V(D.children), E.end = A) : (A += rd(D) || 0, E.end = A);
      }
    }
    return V(g.value), F;
  });
  function p() {
    var F, A;
    const {
      value: V
    } = v;
    let O = 0;
    const {
      value: n
    } = m;
    let D = null;
    for (let E = 0; E < V.length; ++E) {
      const H = ln(V[E]);
      if (i > (((F = n[H]) === null || F === void 0 ? void 0 : F.start) || 0) - O)
        D = H, O = ((A = n[H]) === null || A === void 0 ? void 0 : A.end) || 0;
      else
        break;
    }
    l.value = D;
  }
  function x() {
    s.value = [];
    let F = e.columns.find((A) => ln(A) === l.value);
    for (; F && "children" in F; ) {
      const A = F.children.length;
      if (A === 0) break;
      const V = F.children[A - 1];
      s.value.push(ln(V)), F = V;
    }
  }
  function b() {
    var F, A;
    const {
      value: V
    } = g, O = Number(e.scrollX), {
      value: n
    } = o;
    if (n === null) return;
    let D = 0, E = null;
    const {
      value: H
    } = h;
    for (let L = V.length - 1; L >= 0; --L) {
      const K = ln(V[L]);
      if (Math.round(i + (((F = H[K]) === null || F === void 0 ? void 0 : F.start) || 0) + n - D) < O)
        E = K, D = ((A = H[K]) === null || A === void 0 ? void 0 : A.end) || 0;
      else
        break;
    }
    d.value = E;
  }
  function y() {
    u.value = [];
    let F = e.columns.find((A) => ln(A) === d.value);
    for (; F && "children" in F && F.children.length; ) {
      const A = F.children[0];
      u.value.push(ln(A)), F = A;
    }
  }
  function S() {
    const F = t.value ? t.value.getHeaderElement() : null, A = t.value ? t.value.getBodyElement() : null;
    return {
      header: F,
      body: A
    };
  }
  function C() {
    const {
      body: F
    } = S();
    F && (F.scrollTop = 0);
  }
  function k() {
    a.value !== "body" ? Yo(w) : a.value = void 0;
  }
  function R(F) {
    var A;
    (A = e.onScroll) === null || A === void 0 || A.call(e, F), a.value !== "head" ? Yo(w) : a.value = void 0;
  }
  function w() {
    const {
      header: F,
      body: A
    } = S();
    if (!A) return;
    const {
      value: V
    } = o;
    if (V !== null) {
      if (e.maxHeight || e.flexHeight) {
        if (!F) return;
        const O = i - F.scrollLeft;
        a.value = O !== 0 ? "head" : "body", a.value === "head" ? (i = F.scrollLeft, A.scrollLeft = i) : (i = A.scrollLeft, F.scrollLeft = i);
      } else
        i = A.scrollLeft;
      p(), x(), b(), y();
    }
  }
  function B(F) {
    const {
      header: A
    } = S();
    A && (A.scrollLeft = F, w());
  }
  return He(r, () => {
    C();
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
    syncScrollState: w,
    handleTableBodyScroll: R,
    handleTableHeaderScroll: k,
    setHeaderScrollLeft: B
  };
}
function jo(e) {
  return typeof e == "object" && typeof e.multiple == "number" ? e.multiple : !1;
}
function QC(e, t) {
  return t && (e === void 0 || e === "default" || typeof e == "object" && e.compare === "default") ? ew(t) : typeof e == "function" ? e : e && typeof e == "object" && e.compare && e.compare !== "default" ? e.compare : !1;
}
function ew(e) {
  return (t, r) => {
    const o = t[e], i = r[e];
    return o == null ? i == null ? 0 : -1 : i == null ? 1 : typeof o == "number" && typeof i == "number" ? o - i : typeof o == "string" && typeof i == "string" ? o.localeCompare(i) : 0;
  };
}
function tw(e, {
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
  const i = I(o), a = $(() => {
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
  }), l = $(() => {
    const m = a.value.slice().sort((h, p) => {
      const x = jo(h.sorter) || 0;
      return (jo(p.sorter) || 0) - x;
    });
    return m.length ? r.value.slice().sort((p, x) => {
      let b = 0;
      return m.some((y) => {
        const {
          columnKey: S,
          sorter: C,
          order: k
        } = y, R = QC(C, S);
        return R && k && (b = R(p.rawNode, x.rawNode), b !== 0) ? (b = b * Jy(k), !0) : !1;
      }), b;
    }) : r.value;
  });
  function s(m) {
    let h = a.value.slice();
    return m && jo(m.sorter) !== !1 ? (h = h.filter((p) => jo(p.sorter) !== !1), g(h, m), h) : m || null;
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
    h && re(h, m), p && re(p, m), x && re(x, m), i.value = m;
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
function nw(e, {
  dataRelatedColsRef: t
}) {
  const r = $(() => {
    const U = (j) => {
      for (let q = 0; q < j.length; ++q) {
        const Y = j[q];
        if ("children" in Y)
          return U(Y.children);
        if (Y.type === "selection")
          return Y;
      }
      return null;
    };
    return U(e.columns);
  }), o = $(() => {
    const {
      childrenKey: U
    } = e;
    return yi(e.data, {
      ignoreEmptyChildren: !0,
      getKey: e.rowKey,
      getChildren: (j) => j[U],
      getDisabled: (j) => {
        var q, Y;
        return !!(!((Y = (q = r.value) === null || q === void 0 ? void 0 : q.disabled) === null || Y === void 0) && Y.call(q, j));
      }
    });
  }), i = Ue(() => {
    const {
      columns: U
    } = e, {
      length: j
    } = U;
    let q = null;
    for (let Y = 0; Y < j; ++Y) {
      const ae = U[Y];
      if (!ae.type && q === null && (q = Y), "tree" in ae && ae.tree)
        return Y;
    }
    return q || 0;
  }), a = I({}), {
    pagination: l
  } = e, s = I(l && l.defaultPage || 1), d = I(ic(l)), u = $(() => {
    const U = t.value.filter((Y) => Y.filterOptionValues !== void 0 || Y.filterOptionValue !== void 0), j = {};
    return U.forEach((Y) => {
      var ae;
      Y.type === "selection" || Y.type === "expand" || (Y.filterOptionValues === void 0 ? j[Y.key] = (ae = Y.filterOptionValue) !== null && ae !== void 0 ? ae : null : j[Y.key] = Y.filterOptionValues);
    }), Object.assign(od(a.value), j);
  }), c = $(() => {
    const U = u.value, {
      columns: j
    } = e;
    function q(le) {
      return (fe, we) => !!~String(we[le]).indexOf(String(fe));
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
        rawNode: fe
      } = le;
      for (const [we, G] of ae) {
        let ue = U[we];
        if (ue == null || (Array.isArray(ue) || (ue = [ue]), !ue.length)) continue;
        const Fe = G.filter === "default" ? q(we) : G.filter;
        if (G && typeof Fe == "function")
          if (G.filterMode === "and") {
            if (ue.some((be) => !Fe(be, fe)))
              return !1;
          } else {
            if (ue.some((be) => Fe(be, fe)))
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
  } = tw(e, {
    dataRelatedColsRef: t,
    filteredDataRef: c
  });
  t.value.forEach((U) => {
    var j;
    if (U.filter) {
      const q = U.defaultFilterOptionValues;
      U.filterMultiple ? a.value[U.key] = q || [] : q !== void 0 ? a.value[U.key] = q === null ? [] : q : a.value[U.key] = (j = U.defaultFilterOptionValue) !== null && j !== void 0 ? j : null;
    }
  });
  const x = $(() => {
    const {
      pagination: U
    } = e;
    if (U !== !1)
      return U.page;
  }), b = $(() => {
    const {
      pagination: U
    } = e;
    if (U !== !1)
      return U.pageSize;
  }), y = Mt(x, s), S = Mt(b, d), C = Ue(() => {
    const U = y.value;
    return e.remote ? U : Math.max(1, Math.min(Math.ceil(c.value.length / S.value), U));
  }), k = $(() => {
    const {
      pagination: U
    } = e;
    if (U) {
      const {
        pageCount: j
      } = U;
      if (j !== void 0) return j;
    }
  }), R = $(() => {
    if (e.remote) return o.value.treeNodes;
    if (!e.pagination) return v.value;
    const U = S.value, j = (C.value - 1) * U;
    return v.value.slice(j, j + U);
  }), w = $(() => R.value.map((U) => U.rawNode));
  function B(U) {
    const {
      pagination: j
    } = e;
    if (j) {
      const {
        onChange: q,
        "onUpdate:page": Y,
        onUpdatePage: ae
      } = j;
      q && re(q, U), ae && re(ae, U), Y && re(Y, U), O(U);
    }
  }
  function F(U) {
    const {
      pagination: j
    } = e;
    if (j) {
      const {
        onPageSizeChange: q,
        "onUpdate:pageSize": Y,
        onUpdatePageSize: ae
      } = j;
      q && re(q, U), ae && re(ae, U), Y && re(Y, U), n(U);
    }
  }
  const A = $(() => {
    if (e.remote) {
      const {
        pagination: U
      } = e;
      if (U) {
        const {
          itemCount: j
        } = U;
        if (j !== void 0) return j;
      }
      return;
    }
    return c.value.length;
  }), V = $(() => Object.assign(Object.assign({}, e.pagination), {
    // reset deprecated methods
    onChange: void 0,
    onUpdatePage: void 0,
    onUpdatePageSize: void 0,
    onPageSizeChange: void 0,
    "onUpdate:page": B,
    "onUpdate:pageSize": F,
    // writing merged props after pagination to avoid
    // pagination[key] === undefined
    // key still exists but value is undefined
    page: C.value,
    pageSize: S.value,
    pageCount: A.value === void 0 ? k.value : void 0,
    itemCount: A.value
  }));
  function O(U) {
    const {
      "onUpdate:page": j,
      onPageChange: q,
      onUpdatePage: Y
    } = e;
    Y && re(Y, U), j && re(j, U), q && re(q, U), s.value = U;
  }
  function n(U) {
    const {
      "onUpdate:pageSize": j,
      onPageSizeChange: q,
      onUpdatePageSize: Y
    } = e;
    q && re(q, U), Y && re(Y, U), j && re(j, U), d.value = U;
  }
  function D(U, j) {
    const {
      onUpdateFilters: q,
      "onUpdate:filters": Y,
      onFiltersChange: ae
    } = e;
    q && re(q, U, j), Y && re(Y, U, j), ae && re(ae, U, j), a.value = U;
  }
  function E(U, j, q, Y) {
    var ae;
    (ae = e.onUnstableColumnResize) === null || ae === void 0 || ae.call(e, U, j, q, Y);
  }
  function H(U) {
    O(U);
  }
  function L() {
    K();
  }
  function K() {
    te({});
  }
  function te(U) {
    X(U);
  }
  function X(U) {
    U ? U ? a.value = od(U) : process.env.NODE_ENV !== "production" && Ft("data-table", "`filters` is not an object") : a.value = {};
  }
  return {
    treeMateRef: o,
    mergedCurrentPageRef: C,
    mergedPaginationRef: V,
    paginatedDataRef: R,
    rawPaginatedDataRef: w,
    mergedFilterStateRef: u,
    mergedSortStateRef: m,
    hoverKeyRef: I(null),
    selectionColumnRef: r,
    childTriggerColIndexRef: i,
    doUpdateFilters: D,
    deriveNextSorter: g,
    doUpdatePageSize: n,
    doUpdatePage: O,
    onUnstableColumnResize: E,
    // exported methods
    filter: X,
    filters: te,
    clearFilter: L,
    clearFilters: K,
    clearSorter: p,
    page: H,
    sort: h
  };
}
const rw = ee({
  name: "DataTable",
  alias: ["AdvancedTable"],
  props: Yy,
  slots: Object,
  setup(e, {
    slots: t
  }) {
    process.env.NODE_ENV !== "production" && it(() => {
      e.onPageChange !== void 0 && ct("data-table", "`on-page-change` is deprecated, please use `on-update:page` instead."), e.onPageSizeChange !== void 0 && ct("data-table", "`on-page-size-change` is deprecated, please use `on-update:page-size` instead."), e.onSorterChange !== void 0 && ct("data-table", "`on-sorter-change` is deprecated, please use `on-update:sorter` instead."), e.onFiltersChange !== void 0 && ct("data-table", "`on-filters-change` is deprecated, please use `on-update:filters` instead."), e.onCheckedRowKeysChange !== void 0 && ct("data-table", "`on-checked-row-keys-change` is deprecated, please use `on-update:checked-row-keys` instead.");
    });
    const {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = zt("DataTable", a, o), s = $(() => {
      const {
        bottomBordered: P
      } = e;
      return r.value ? !1 : P !== void 0 ? P : !0;
    }), d = ve("DataTable", "-data-table", KC, Xy, e, o), u = I(null), c = I(null), {
      getResizableWidth: v,
      clearResizableWidth: g,
      doUpdateResizableWidth: m
    } = ZC(), {
      rowsRef: h,
      colsRef: p,
      dataRelatedColsRef: x,
      hasEllipsisRef: b
    } = YC(e, v), {
      treeMateRef: y,
      mergedCurrentPageRef: S,
      paginatedDataRef: C,
      rawPaginatedDataRef: k,
      selectionColumnRef: R,
      hoverKeyRef: w,
      mergedPaginationRef: B,
      mergedFilterStateRef: F,
      mergedSortStateRef: A,
      childTriggerColIndexRef: V,
      doUpdatePage: O,
      doUpdateFilters: n,
      onUnstableColumnResize: D,
      deriveNextSorter: E,
      filter: H,
      filters: L,
      clearFilter: K,
      clearFilters: te,
      clearSorter: X,
      page: U,
      sort: j
    } = nw(e, {
      dataRelatedColsRef: x
    }), q = (P) => {
      const {
        fileName: W = "data.csv",
        keepOriginalData: J = !1
      } = P || {}, se = J ? e.data : k.value, de = oC(e.columns, se, e.getCsvCell, e.getCsvHeader), ge = new Blob([de], {
        type: "text/csv;charset=utf-8"
      }), me = URL.createObjectURL(ge);
      y0(me, W.endsWith(".csv") ? W : `${W}.csv`), URL.revokeObjectURL(me);
    }, {
      doCheckAll: Y,
      doUncheckAll: ae,
      doCheck: le,
      doUncheck: fe,
      headerCheckboxDisabledRef: we,
      someRowsCheckedRef: G,
      allRowsCheckedRef: ue,
      mergedCheckedRowKeySetRef: Fe,
      mergedInderminateRowKeySetRef: be
    } = qC(e, {
      selectionColumnRef: R,
      treeMateRef: y,
      paginatedDataRef: C
    }), {
      stickyExpandedRowsRef: Pe,
      mergedExpandedRowKeysRef: ze,
      renderExpandRef: st,
      expandableRef: et,
      doUpdateExpandedRowKeys: ft
    } = GC(e, y), {
      handleTableBodyScroll: ht,
      handleTableHeaderScroll: xe,
      syncScrollState: ye,
      setHeaderScrollLeft: $e,
      leftActiveFixedColKeyRef: Ie,
      leftActiveFixedChildrenColKeysRef: Qe,
      rightActiveFixedColKeyRef: oe,
      rightActiveFixedChildrenColKeysRef: he,
      leftFixedColumnsRef: Te,
      rightFixedColumnsRef: dt,
      fixedColumnLeftMapRef: $t,
      fixedColumnRightMapRef: At
    } = JC(e, {
      bodyWidthRef: u,
      mainTableInstRef: c,
      mergedCurrentPageRef: S
    }), {
      localeRef: mt
    } = ir("DataTable"), rt = $(() => e.virtualScroll || e.flexHeight || e.maxHeight !== void 0 || b.value ? "fixed" : e.tableLayout);
    Ee(dn, {
      props: e,
      treeMateRef: y,
      renderExpandIconRef: ie(e, "renderExpandIcon"),
      loadingKeySetRef: I(/* @__PURE__ */ new Set()),
      slots: t,
      indentRef: ie(e, "indent"),
      childTriggerColIndexRef: V,
      bodyWidthRef: u,
      componentId: mn(),
      hoverKeyRef: w,
      mergedClsPrefixRef: o,
      mergedThemeRef: d,
      scrollXRef: $(() => e.scrollX),
      rowsRef: h,
      colsRef: p,
      paginatedDataRef: C,
      leftActiveFixedColKeyRef: Ie,
      leftActiveFixedChildrenColKeysRef: Qe,
      rightActiveFixedColKeyRef: oe,
      rightActiveFixedChildrenColKeysRef: he,
      leftFixedColumnsRef: Te,
      rightFixedColumnsRef: dt,
      fixedColumnLeftMapRef: $t,
      fixedColumnRightMapRef: At,
      mergedCurrentPageRef: S,
      someRowsCheckedRef: G,
      allRowsCheckedRef: ue,
      mergedSortStateRef: A,
      mergedFilterStateRef: F,
      loadingRef: ie(e, "loading"),
      rowClassNameRef: ie(e, "rowClassName"),
      mergedCheckedRowKeySetRef: Fe,
      mergedExpandedRowKeysRef: ze,
      mergedInderminateRowKeySetRef: be,
      localeRef: mt,
      expandableRef: et,
      stickyExpandedRowsRef: Pe,
      rowKeyRef: ie(e, "rowKey"),
      renderExpandRef: st,
      summaryRef: ie(e, "summary"),
      virtualScrollRef: ie(e, "virtualScroll"),
      virtualScrollXRef: ie(e, "virtualScrollX"),
      heightForRowRef: ie(e, "heightForRow"),
      minRowHeightRef: ie(e, "minRowHeight"),
      virtualScrollHeaderRef: ie(e, "virtualScrollHeader"),
      headerHeightRef: ie(e, "headerHeight"),
      rowPropsRef: ie(e, "rowProps"),
      stripedRef: ie(e, "striped"),
      checkOptionsRef: $(() => {
        const {
          value: P
        } = R;
        return P == null ? void 0 : P.options;
      }),
      rawPaginatedDataRef: k,
      filterMenuCssVarsRef: $(() => {
        const {
          self: {
            actionDividerColor: P,
            actionPadding: W,
            actionButtonMargin: J
          }
        } = d.value;
        return {
          "--n-action-padding": W,
          "--n-action-button-margin": J,
          "--n-action-divider-color": P
        };
      }),
      onLoadRef: ie(e, "onLoad"),
      mergedTableLayoutRef: rt,
      maxHeightRef: ie(e, "maxHeight"),
      minHeightRef: ie(e, "minHeight"),
      flexHeightRef: ie(e, "flexHeight"),
      headerCheckboxDisabledRef: we,
      paginationBehaviorOnFilterRef: ie(e, "paginationBehaviorOnFilter"),
      summaryPlacementRef: ie(e, "summaryPlacement"),
      filterIconPopoverPropsRef: ie(e, "filterIconPopoverProps"),
      scrollbarPropsRef: ie(e, "scrollbarProps"),
      syncScrollState: ye,
      doUpdatePage: O,
      doUpdateFilters: n,
      getResizableWidth: v,
      onUnstableColumnResize: D,
      clearResizableWidth: g,
      doUpdateResizableWidth: m,
      deriveNextSorter: E,
      doCheck: le,
      doUncheck: fe,
      doCheckAll: Y,
      doUncheckAll: ae,
      doUpdateExpandedRowKeys: ft,
      handleTableHeaderScroll: xe,
      handleTableBodyScroll: ht,
      setHeaderScrollLeft: $e,
      renderCell: ie(e, "renderCell")
    });
    const wt = {
      filter: H,
      filters: L,
      clearFilters: te,
      clearSorter: X,
      page: U,
      sort: j,
      clearFilter: K,
      downloadCsv: q,
      scrollTo: (P, W) => {
        var J;
        (J = c.value) === null || J === void 0 || J.scrollTo(P, W);
      }
    }, tt = $(() => {
      const {
        size: P
      } = e, {
        common: {
          cubicBezierEaseInOut: W
        },
        self: {
          borderColor: J,
          tdColorHover: se,
          tdColorSorting: de,
          tdColorSortingModal: ge,
          tdColorSortingPopover: me,
          thColorSorting: Se,
          thColorSortingModal: Le,
          thColorSortingPopover: ot,
          thColor: Ve,
          thColorHover: Et,
          tdColor: It,
          tdTextColor: Lt,
          thTextColor: Vt,
          thFontWeight: Kt,
          thButtonColorHover: tn,
          thIconColor: Ut,
          thIconColorActive: _,
          filterSize: Q,
          borderRadius: Ce,
          lineHeight: Oe,
          tdColorModal: qe,
          thColorModal: Ne,
          borderColorModal: at,
          thColorHoverModal: vt,
          tdColorHoverModal: Yt,
          borderColorPopover: yn,
          thColorPopover: Cn,
          tdColorPopover: Gn,
          tdColorHoverPopover: _r,
          thColorHoverPopover: Wr,
          paginationMargin: Vr,
          emptyPadding: Kr,
          boxShadowAfter: Ur,
          boxShadowBefore: zn,
          sorterSize: $n,
          resizableContainerSize: Fi,
          resizableSize: Pi,
          loadingColor: zi,
          loadingSize: $i,
          opacityLoading: Ai,
          tdColorStriped: Di,
          tdColorStripedModal: Ei,
          tdColorStripedPopover: Ti,
          [Z("fontSize", P)]: Oi,
          [Z("thPadding", P)]: Mi,
          [Z("tdPadding", P)]: Ii
        }
      } = d.value;
      return {
        "--n-font-size": Oi,
        "--n-th-padding": Mi,
        "--n-td-padding": Ii,
        "--n-bezier": W,
        "--n-border-radius": Ce,
        "--n-line-height": Oe,
        "--n-border-color": J,
        "--n-border-color-modal": at,
        "--n-border-color-popover": yn,
        "--n-th-color": Ve,
        "--n-th-color-hover": Et,
        "--n-th-color-modal": Ne,
        "--n-th-color-hover-modal": vt,
        "--n-th-color-popover": Cn,
        "--n-th-color-hover-popover": Wr,
        "--n-td-color": It,
        "--n-td-color-hover": se,
        "--n-td-color-modal": qe,
        "--n-td-color-hover-modal": Yt,
        "--n-td-color-popover": Gn,
        "--n-td-color-hover-popover": _r,
        "--n-th-text-color": Vt,
        "--n-td-text-color": Lt,
        "--n-th-font-weight": Kt,
        "--n-th-button-color-hover": tn,
        "--n-th-icon-color": Ut,
        "--n-th-icon-color-active": _,
        "--n-filter-size": Q,
        "--n-pagination-margin": Vr,
        "--n-empty-padding": Kr,
        "--n-box-shadow-before": zn,
        "--n-box-shadow-after": Ur,
        "--n-sorter-size": $n,
        "--n-resizable-container-size": Fi,
        "--n-resizable-size": Pi,
        "--n-loading-size": $i,
        "--n-loading-color": zi,
        "--n-opacity-loading": Ai,
        "--n-td-color-striped": Di,
        "--n-td-color-striped-modal": Ei,
        "--n-td-color-striped-popover": Ti,
        "--n-td-color-sorting": de,
        "--n-td-color-sorting-modal": ge,
        "--n-td-color-sorting-popover": me,
        "--n-th-color-sorting": Se,
        "--n-th-color-sorting-modal": Le,
        "--n-th-color-sorting-popover": ot
      };
    }), ce = i ? Ze("data-table", $(() => e.size[0]), tt, e) : void 0, Be = $(() => {
      if (!e.pagination) return !1;
      if (e.paginateSinglePage) return !0;
      const P = B.value, {
        pageCount: W
      } = P;
      return W !== void 0 ? W > 1 : P.itemCount && P.pageSize && P.itemCount > P.pageSize;
    });
    return Object.assign({
      mainTableInstRef: c,
      mergedClsPrefix: o,
      rtlEnabled: l,
      mergedTheme: d,
      paginatedData: C,
      mergedBordered: r,
      mergedBottomBordered: s,
      mergedPagination: B,
      mergedShowPagination: Be,
      cssVars: i ? void 0 : tt,
      themeClass: ce == null ? void 0 : ce.themeClass,
      onRender: ce == null ? void 0 : ce.onRender
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
    }, f(VC, {
      ref: "mainTableInstRef"
    })), this.mergedShowPagination ? f("div", {
      class: `${e}-data-table__pagination`
    }, f(ac, Object.assign({
      theme: this.mergedTheme.peers.Pagination,
      themeOverrides: this.mergedTheme.peerOverrides.Pagination,
      disabled: this.loading
    }, this.mergedPagination))) : null, f(_t, {
      name: "fade-in-scale-up-transition"
    }, {
      default: () => this.loading ? f("div", {
        class: `${e}-data-table-loading-wrapper`
      }, en(o.loading, () => [f(Un, Object.assign({
        clsPrefix: e,
        strokeWidth: 20
      }, i))])) : null
    }));
  }
}), Fc = "n-dialog-provider", Pc = "n-dialog-api", ow = "n-dialog-reactive-list";
function zc() {
  const e = pe(Pc, null);
  return e === null && jn("use-dialog", "No outer <n-dialog-provider /> founded."), e;
}
const iw = {
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
function aw(e) {
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
  return Object.assign(Object.assign({}, iw), {
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
const $c = {
  name: "Dialog",
  common: Je,
  peers: {
    Button: Ci
  },
  self: aw
}, ki = {
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
}, Ac = Ln(ki), lw = M([z("dialog", `
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
 `, [T("icon", {
  color: "var(--n-icon-color)"
}), N("bordered", {
  border: "var(--n-border)"
}), N("icon-top", [T("close", {
  margin: "var(--n-close-margin)"
}), T("icon", {
  margin: "var(--n-icon-margin)"
}), T("content", {
  textAlign: "center"
}), T("title", {
  justifyContent: "center"
}), T("action", {
  justifyContent: "center"
})]), N("icon-left", [T("icon", {
  margin: "var(--n-icon-margin)"
}), N("closable", [T("title", `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), T("close", `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), T("content", `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [N("last", "margin-bottom: 0;")]), T("action", `
 display: flex;
 justify-content: flex-end;
 `, [M("> *:not(:last-child)", `
 margin-right: var(--n-action-space);
 `)]), T("icon", `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), T("title", `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), z("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), fi(z("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), z("dialog", [Ad(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), sw = {
  default: () => f(oi, null),
  info: () => f(oi, null),
  success: () => f(hl, null),
  warning: () => f(bi, null),
  error: () => f(fl, null)
}, Dc = ee({
  name: "Dialog",
  alias: [
    "NimbusConfirmCard",
    // deprecated
    "Confirm"
    // deprecated
  ],
  props: Object.assign(Object.assign({}, ve.props), ki),
  slots: Object,
  setup(e) {
    const {
      mergedComponentPropsRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = zt("Dialog", i, r), l = $(() => {
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
    const c = ve("Dialog", "-dialog", lw, $c, e, r), v = $(() => {
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
          titleTextColor: S,
          textColor: C,
          color: k,
          closeBorderRadius: R,
          closeColorHover: w,
          closeColorPressed: B,
          closeIconColor: F,
          closeIconColorHover: A,
          closeIconColorPressed: V,
          closeIconSize: O,
          borderRadius: n,
          titleFontWeight: D,
          titleFontSize: E,
          padding: H,
          iconSize: L,
          actionSpace: K,
          contentMargin: te,
          closeSize: X,
          [h === "top" ? "iconMarginIconTop" : "iconMargin"]: U,
          [h === "top" ? "closeMarginIconTop" : "closeMargin"]: j,
          [Z("iconColor", m)]: q
        }
      } = c.value, Y = Nt(U);
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
        "--n-close-border-radius": R,
        "--n-close-color-hover": w,
        "--n-close-color-pressed": B,
        "--n-close-icon-color": F,
        "--n-close-icon-color-hover": A,
        "--n-close-icon-color-pressed": V,
        "--n-color": k,
        "--n-text-color": C,
        "--n-border-radius": n,
        "--n-padding": H,
        "--n-line-height": b,
        "--n-border": y,
        "--n-content-margin": te,
        "--n-title-font-size": E,
        "--n-title-font-weight": D,
        "--n-title-text-color": S,
        "--n-action-space": K
      };
    }), g = o ? Ze("dialog", $(() => `${e.type[0]}${l.value[0]}`), v, e) : void 0;
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
    const S = a ? f(xt, {
      clsPrefix: y,
      class: `${y}-dialog__icon`
    }, {
      default: () => _e(this.$slots.icon, (k) => k || (this.icon ? gt(this.icon) : sw[this.type]()))
    }) : null, C = _e(this.$slots.action, (k) => k || c || u || d ? f("div", {
      class: [`${y}-dialog__action`, this.actionClass],
      style: this.actionStyle
    }, k || (d ? [gt(d)] : [this.negativeText && f(lr, Object.assign({
      theme: p.peers.Button,
      themeOverrides: p.peerOverrides.Button,
      ghost: !0,
      size: "small",
      onClick: h
    }, g), {
      default: () => gt(this.negativeText)
    }), this.positiveText && f(lr, Object.assign({
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
    }, i ? _e(this.$slots.close, (k) => {
      const R = [`${y}-dialog__close`, this.rtlEnabled && `${y}-dialog--rtl`];
      return k ? f("div", {
        class: R
      }, k) : f(Bo, {
        clsPrefix: y,
        class: R,
        onClick: this.handleCloseClick
      });
    }) : null, a && r === "top" ? f("div", {
      class: `${y}-dialog-icon-container`
    }, S) : null, f("div", {
      class: [`${y}-dialog__title`, this.titleClass],
      style: this.titleStyle
    }, a && r === "left" ? S : null, en(this.$slots.header, () => [gt(l)])), f("div", {
      class: [`${y}-dialog__content`, C ? "" : `${y}-dialog__content--last`, this.contentClass],
      style: this.contentStyle
    }, en(this.$slots.default, () => [gt(s)])), C);
  }
});
function dw(e) {
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
const uw = {
  name: "Modal",
  common: Je,
  peers: {
    Scrollbar: ko,
    Dialog: $c,
    Card: Xu
  },
  self: dw
}, cw = "n-modal-provider", Ec = "n-modal-api", fw = "n-modal-reactive-list";
function Tc() {
  const e = pe(Ec, null);
  return e === null && jn("use-modal", "No outer <n-modal-provider /> founded."), e;
}
const Pa = "n-draggable";
function hw(e, t) {
  let r;
  const o = $(() => e.value !== !1), i = $(() => o.value ? Pa : ""), a = $(() => {
    const d = e.value;
    return d === !0 || d === !1 ? !0 : d ? d.bounds !== "none" : !0;
  });
  function l(d) {
    const u = d.querySelector(`.${Pa}`);
    if (!u || !i.value)
      return;
    let c = 0, v = 0, g = 0, m = 0, h = 0, p = 0, x;
    function b(C) {
      C.preventDefault(), x = C;
      const {
        x: k,
        y: R,
        right: w,
        bottom: B
      } = d.getBoundingClientRect();
      v = k, m = R, c = window.innerWidth - w, g = window.innerHeight - B;
      const {
        left: F,
        top: A
      } = d.style;
      h = +A.slice(0, -2), p = +F.slice(0, -2);
    }
    function y(C) {
      if (!x) return;
      const {
        clientX: k,
        clientY: R
      } = x;
      let w = C.clientX - k, B = C.clientY - R;
      a.value && (w > c ? w = c : -w > v && (w = -v), B > g ? B = g : -B > m && (B = -m));
      const F = w + p, A = B + h;
      d.style.top = `${A}px`, d.style.left = `${F}px`;
    }
    function S() {
      x = void 0, t.onEnd(d);
    }
    Ke("mousedown", u, b), Ke("mousemove", window, y), Ke("mouseup", window, S), r = () => {
      We("mousedown", u, b), Ke("mousemove", window, y), Ke("mouseup", window, S);
    };
  }
  function s() {
    r && (r(), r = void 0);
  }
  return Sd(s), {
    stopDrag: s,
    startDrag: l,
    draggableRef: o,
    draggableClassRef: i
  };
}
const kl = Object.assign(Object.assign({}, xl), ki), vw = Ln(kl), gw = ee({
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
  }, kl), {
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
    const t = I(null), r = I(null), o = I(e.show), i = I(null), a = I(null), l = pe(Md);
    let s = null;
    He(ie(e, "show"), (B) => {
      B && (s = l.getMousePosition());
    }, {
      immediate: !0
    });
    const {
      stopDrag: d,
      startDrag: u,
      draggableRef: c,
      draggableClassRef: v
    } = hw(ie(e, "draggable"), {
      onEnd: (B) => {
        p(B);
      }
    }), g = $(() => jt([e.titleClass, v.value])), m = $(() => jt([e.headerClass, v.value]));
    He(ie(e, "show"), (B) => {
      B && (o.value = !0);
    }), Ph($(() => e.blockScroll && o.value));
    function h() {
      if (l.transformOriginRef.value === "center")
        return "";
      const {
        value: B
      } = i, {
        value: F
      } = a;
      if (B === null || F === null)
        return "";
      if (r.value) {
        const A = r.value.containerScrollTop;
        return `${B}px ${F + A}px`;
      }
      return "";
    }
    function p(B) {
      if (l.transformOriginRef.value === "center" || !s || !r.value) return;
      const F = r.value.containerScrollTop, {
        offsetLeft: A,
        offsetTop: V
      } = B, O = s.y, n = s.x;
      i.value = -(A - n), a.value = -(V - O - F), B.style.transformOrigin = h();
    }
    function x(B) {
      pt(() => {
        p(B);
      });
    }
    function b(B) {
      B.style.transformOrigin = h(), e.onBeforeLeave();
    }
    function y(B) {
      const F = B;
      c.value && u(F), e.onAfterEnter && e.onAfterEnter(F);
    }
    function S() {
      o.value = !1, i.value = null, a.value = null, d(), e.onAfterLeave();
    }
    function C() {
      const {
        onClose: B
      } = e;
      B && B();
    }
    function k() {
      e.onNegativeClick();
    }
    function R() {
      e.onPositiveClick();
    }
    const w = I(null);
    return He(w, (B) => {
      B && pt(() => {
        const F = B.el;
        F && t.value !== F && (t.value = F);
      });
    }), Ee(vi, t), Ee(hi, null), Ee(wo, null), {
      mergedTheme: l.mergedThemeRef,
      appear: l.appearRef,
      isMounted: l.isMountedRef,
      mergedClsPrefix: l.mergedClsPrefixRef,
      bodyRef: t,
      scrollbarRef: r,
      draggableClass: v,
      displayed: o,
      childNodeRef: w,
      cardHeaderClass: m,
      dialogTitleClass: g,
      handlePositiveClick: R,
      handleNegativeClick: k,
      handleCloseClick: C,
      handleAfterEnter: y,
      handleAfterLeave: S,
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
      if (d = k0("default", e.default, {
        draggableClass: this.draggableClass
      }), !d) {
        Ft("modal", "default slot is empty");
        return;
      }
      d = wd(d), d.props = Rt({
        class: `${s}-modal`
      }, t, d.props || {});
    }
    return this.displayDirective === "show" || this.displayed || this.show ? pn(f("div", {
      role: "none",
      class: `${s}-modal-body-wrapper`
    }, f(pr, {
      ref: "scrollbarRef",
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      contentClass: `${s}-modal-scroll-content`
    }, {
      default: () => {
        var u;
        return [(u = this.renderMask) === null || u === void 0 ? void 0 : u.call(this), f(Qd, {
          disabled: !this.trapFocus,
          active: this.show,
          onEsc: this.onEsc,
          autoFocus: this.autoFocus
        }, {
          default: () => {
            var c;
            return f(_t, {
              name: "fade-in-scale-up-transition",
              appear: (c = this.appear) !== null && c !== void 0 ? c : this.isMounted,
              onEnter: r,
              onAfterEnter: o,
              onAfterLeave: i,
              onBeforeLeave: a
            }, {
              default: () => {
                const v = [[zr, this.show]], {
                  onClickoutside: g
                } = this;
                return g && v.push([fo, this.onClickoutside, void 0, {
                  capture: !0
                }]), pn(this.preset === "confirm" || this.preset === "dialog" ? f(Dc, Object.assign({}, this.$attrs, {
                  class: [`${s}-modal`, this.$attrs.class],
                  ref: "bodyRef",
                  theme: this.mergedTheme.peers.Dialog,
                  themeOverrides: this.mergedTheme.peerOverrides.Dialog
                }, kn(this.$props, Ac), {
                  titleClass: this.dialogTitleClass,
                  "aria-modal": "true"
                }), e) : this.preset === "card" ? f(cy, Object.assign({}, this.$attrs, {
                  ref: "bodyRef",
                  class: [`${s}-modal`, this.$attrs.class],
                  theme: this.mergedTheme.peers.Card,
                  themeOverrides: this.mergedTheme.peerOverrides.Card
                }, kn(this.$props, dy), {
                  headerClass: this.cardHeaderClass,
                  "aria-modal": "true",
                  role: "dialog"
                }), e) : this.childNodeRef = d, v);
              }
            });
          }
        })];
      }
    })), [[zr, this.displayDirective === "if" || this.displayed || this.show]]) : null;
  }
}), pw = M([z("modal-container", `
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
 `, [xi({
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
 `, [Ro({
  duration: ".25s",
  enterScale: ".5"
}), M(`.${Pa}`, `
 cursor: move;
 user-select: none;
 `)])]), Oc = Object.assign(Object.assign(Object.assign(Object.assign({}, ve.props), {
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
}), kl), {
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
}), Mc = ee({
  name: "Modal",
  inheritAttrs: !1,
  props: Oc,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && (e.onHide && ct("modal", "`on-hide` is deprecated."), e.onAfterHide && ct("modal", "`on-after-hide` is deprecated, please use `on-after-leave` instead."), e.onBeforeHide && ct("modal", "`on-before-hide` is deprecated, please use `on-before-leave` instead."), e.overlayStyle && ct("modal", "`overlay-style` is deprecated, please use `style` instead."));
    const t = I(null), {
      mergedClsPrefixRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = ve("Modal", "-modal", pw, uw, e, r), l = _a(64), s = ja(), d = Lr(), u = e.internalDialog ? pe(Fc, null) : null, c = e.internalModal ? pe(Bh, null) : null, v = Fh();
    function g(R) {
      const {
        onUpdateShow: w,
        "onUpdate:show": B,
        onHide: F
      } = e;
      w && re(w, R), B && re(B, R), F && !R && F(R);
    }
    function m() {
      const {
        onClose: R
      } = e;
      R ? Promise.resolve(R()).then((w) => {
        w !== !1 && g(!1);
      }) : g(!1);
    }
    function h() {
      const {
        onPositiveClick: R
      } = e;
      R ? Promise.resolve(R()).then((w) => {
        w !== !1 && g(!1);
      }) : g(!1);
    }
    function p() {
      const {
        onNegativeClick: R
      } = e;
      R ? Promise.resolve(R()).then((w) => {
        w !== !1 && g(!1);
      }) : g(!1);
    }
    function x() {
      const {
        onBeforeLeave: R,
        onBeforeHide: w
      } = e;
      R && re(R), w && w();
    }
    function b() {
      const {
        onAfterLeave: R,
        onAfterHide: w
      } = e;
      R && re(R), w && w();
    }
    function y(R) {
      var w;
      const {
        onMaskClick: B
      } = e;
      B && B(R), e.maskClosable && !((w = t.value) === null || w === void 0) && w.contains($r(R)) && g(!1);
    }
    function S(R) {
      var w;
      (w = e.onEsc) === null || w === void 0 || w.call(e), e.show && e.closeOnEsc && S0(R) && (v.value || g(!1));
    }
    Ee(Md, {
      getMousePosition: () => {
        const R = u || c;
        if (R) {
          const {
            clickedRef: w,
            clickedPositionRef: B
          } = R;
          if (w.value && B.value)
            return B.value;
        }
        return l.value ? s.value : null;
      },
      mergedClsPrefixRef: r,
      mergedThemeRef: a,
      isMountedRef: d,
      appearRef: ie(e, "internalAppear"),
      transformOriginRef: ie(e, "transformOrigin")
    });
    const C = $(() => {
      const {
        common: {
          cubicBezierEaseOut: R
        },
        self: {
          boxShadow: w,
          color: B,
          textColor: F
        }
      } = a.value;
      return {
        "--n-bezier-ease-out": R,
        "--n-box-shadow": w,
        "--n-color": B,
        "--n-text-color": F
      };
    }), k = i ? Ze("theme-class", void 0, C, e) : void 0;
    return {
      mergedClsPrefix: r,
      namespace: o,
      isMounted: d,
      containerRef: t,
      presetProps: $(() => kn(e, vw)),
      handleEsc: S,
      handleAfterLeave: b,
      handleClickoutside: y,
      handleBeforeLeave: x,
      doUpdateShow: g,
      handleNegativeClick: p,
      handlePositiveClick: h,
      handleCloseClick: m,
      cssVars: i ? void 0 : C,
      themeClass: k == null ? void 0 : k.themeClass,
      onRender: k == null ? void 0 : k.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return f(jd, {
      to: this.to,
      show: this.show
    }, {
      default: () => {
        var t;
        (t = this.onRender) === null || t === void 0 || t.call(this);
        const {
          unstableShowMask: r
        } = this;
        return pn(f("div", {
          role: "none",
          ref: "containerRef",
          class: [`${e}-modal-container`, this.themeClass, this.namespace],
          style: this.cssVars
        }, f(gw, Object.assign({
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
            return f(_t, {
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
        }), this.$slots)), [[Ga, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
}), mw = Object.assign(Object.assign({}, ki), {
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
}), bw = ee({
  name: "DialogEnvironment",
  props: Object.assign(Object.assign({}, mw), {
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
    return f(Mc, {
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
      }) => f(Dc, Object.assign({}, kn(this.$props, Ac), {
        titleClass: jt([this.titleClass, c]),
        style: this.internalStyle,
        onClose: o,
        onNegativeClick: r,
        onPositiveClick: e
      }))
    });
  }
}), xw = {
  injectionKey: String,
  to: [String, Object]
}, Ic = ee({
  name: "DialogProvider",
  props: xw,
  setup() {
    const e = I([]), t = {};
    function r(s = {}) {
      const d = mn(), u = Co(Object.assign(Object.assign({}, s), {
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
    return Ee(Pc, l), Ee(Fc, {
      clickedRef: _a(64),
      clickedPositionRef: ja()
    }), Ee(ow, e), Object.assign(Object.assign({}, l), {
      dialogList: e,
      dialogInstRefs: t,
      handleAfterLeave: i
    });
  },
  render() {
    var e, t;
    return f(je, null, [this.dialogList.map((r) => f(bw, cr(r, ["destroy", "style"], {
      internalStyle: r.style,
      to: this.to,
      ref: (o) => {
        o === null ? delete this.dialogInstRefs[`n-dialog-${r.key}`] : this.dialogInstRefs[`n-dialog-${r.key}`] = o;
      },
      internalKey: r.key,
      onInternalAfterLeave: this.handleAfterLeave
    }))), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)]);
  }
}), Lc = "n-loading-bar", Nc = "n-loading-bar-api";
function yw(e) {
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
const Cw = {
  name: "LoadingBar",
  common: Je,
  self: yw
}, ww = z("loading-bar-container", `
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`, [xi({
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
var _o = function(e, t, r, o) {
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
function Wo(e, t) {
  return `${t}-loading-bar ${t}-loading-bar--${e}`;
}
const Sw = ee({
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
    } = pe(Lc), o = I(null), i = I(!1), a = I(!1), l = I(!1), s = I(!1);
    let d = !1;
    const u = I(!1), c = $(() => {
      const {
        loadingBarStyle: k
      } = t;
      return k ? k[u.value ? "error" : "loading"] : "";
    });
    function v() {
      return _o(this, void 0, void 0, function* () {
        i.value = !1, l.value = !1, d = !1, u.value = !1, s.value = !0, yield pt(), s.value = !1;
      });
    }
    function g() {
      return _o(this, arguments, void 0, function* (k = 0, R = 80, w = "starting") {
        if (a.value = !0, yield v(), d) return;
        l.value = !0, yield pt();
        const B = o.value;
        B && (B.style.maxWidth = `${k}%`, B.style.transition = "none", B.offsetWidth, B.className = Wo(w, r.value), B.style.transition = "", B.style.maxWidth = `${R}%`);
      });
    }
    function m() {
      return _o(this, void 0, void 0, function* () {
        if (d || u.value) return;
        a.value && (yield pt()), d = !0;
        const k = o.value;
        k && (k.className = Wo("finishing", r.value), k.style.maxWidth = "100%", k.offsetWidth, l.value = !1);
      });
    }
    function h() {
      if (!(d || u.value))
        if (!l.value)
          g(100, 100, "error").then(() => {
            u.value = !0;
            const k = o.value;
            k && (k.className = Wo("error", r.value), k.offsetWidth, l.value = !1);
          });
        else {
          u.value = !0;
          const k = o.value;
          if (!k) return;
          k.className = Wo("error", r.value), k.style.maxWidth = "100%", k.offsetWidth, l.value = !1;
        }
    }
    function p() {
      i.value = !0;
    }
    function x() {
      i.value = !1;
    }
    function b() {
      return _o(this, void 0, void 0, function* () {
        yield v();
      });
    }
    const y = ve("LoadingBar", "-loading-bar", ww, Cw, t, r), S = $(() => {
      const {
        self: {
          height: k,
          colorError: R,
          colorLoading: w
        }
      } = y.value;
      return {
        "--n-height": k,
        "--n-color-loading": w,
        "--n-color-error": R
      };
    }), C = e ? Ze("loading-bar", void 0, S, t) : void 0;
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
      cssVars: e ? void 0 : S,
      themeClass: C == null ? void 0 : C.themeClass,
      onRender: C == null ? void 0 : C.onRender
    };
  },
  render() {
    if (!this.started) return null;
    const {
      mergedClsPrefix: e
    } = this;
    return f(_t, {
      name: "fade-in-transition",
      appear: !0,
      onEnter: this.handleEnter,
      onAfterEnter: this.handleAfterEnter,
      onAfterLeave: this.handleAfterLeave,
      css: !this.transitionDisabled
    }, {
      default: () => {
        var t;
        return (t = this.onRender) === null || t === void 0 || t.call(this), pn(f("div", {
          class: [`${e}-loading-bar-container`, this.themeClass, this.containerClass],
          style: this.containerStyle
        }, f("div", {
          ref: "loadingBarRef",
          class: [`${e}-loading-bar`],
          style: [this.cssVars, this.mergedLoadingBarStyle]
        })), [[zr, this.loading || !this.loading && this.entering]]);
      }
    });
  }
}), Bw = Object.assign(Object.assign({}, ve.props), {
  to: {
    type: [String, Object, Boolean],
    default: void 0
  },
  containerClass: String,
  containerStyle: [String, Object],
  loadingBarStyle: {
    type: Object
  }
}), kw = ee({
  name: "LoadingBarProvider",
  props: Bw,
  setup(e) {
    const t = Lr(), r = I(null), o = {
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
    return Ee(Nc, o), Ee(Lc, {
      props: e,
      mergedClsPrefixRef: i
    }), Object.assign(o, {
      loadingBarRef: r
    });
  },
  render() {
    var e, t;
    return f(je, null, f(di, {
      disabled: this.to === !1,
      to: this.to || "body"
    }, f(Sw, {
      ref: "loadingBarRef",
      containerStyle: this.containerStyle,
      containerClass: this.containerClass
    })), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
  }
});
function Rw() {
  const e = pe(Nc, null);
  return e === null && jn("use-loading-bar", "No outer <n-loading-bar-provider /> founded."), e;
}
const Hc = "n-message-api", jc = "n-message-provider", Fw = {
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
function Pw(e) {
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
  return Object.assign(Object.assign({}, Fw), {
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
const zw = {
  name: "Message",
  common: Je,
  self: Pw
}, _c = {
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
}, $w = M([z("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [Vu({
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
 `, [T("content", `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `), T("icon", `
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `, [["default", "info", "success", "warning", "error", "loading"].map((e) => N(`${e}-type`, [M("> *", `
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])), M("> *", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [Zt()])]), T("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [M("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), M("&:active", `
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
 `)])]), Aw = {
  info: () => f(oi, null),
  success: () => f(hl, null),
  warning: () => f(bi, null),
  error: () => f(fl, null),
  default: () => null
}, Dw = ee({
  name: "Message",
  props: Object.assign(Object.assign({}, _c), {
    render: Function
  }),
  setup(e) {
    const {
      inlineThemeDisabled: t,
      mergedRtlRef: r
    } = Ae(e), {
      props: o,
      mergedClsPrefixRef: i
    } = pe(jc), a = zt("Message", r, i), l = ve("Message", "-message", $w, zw, o, i), s = $(() => {
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
          lineHeight: S,
          borderRadius: C,
          iconColorInfo: k,
          iconColorSuccess: R,
          iconColorWarning: w,
          iconColorError: B,
          iconColorLoading: F,
          closeIconSize: A,
          closeBorderRadius: V,
          [Z("textColor", u)]: O,
          [Z("boxShadow", u)]: n,
          [Z("color", u)]: D,
          [Z("closeColorHover", u)]: E,
          [Z("closeColorPressed", u)]: H,
          [Z("closeIconColor", u)]: L,
          [Z("closeIconColorPressed", u)]: K,
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
        "--n-close-icon-size": A,
        "--n-close-border-radius": V,
        "--n-close-size": x,
        "--n-close-margin": p,
        "--n-text-color": O,
        "--n-color": D,
        "--n-box-shadow": n,
        "--n-icon-color-info": k,
        "--n-icon-color-success": R,
        "--n-icon-color-warning": w,
        "--n-icon-color-error": B,
        "--n-icon-color-loading": F,
        "--n-close-color-hover": E,
        "--n-close-color-pressed": H,
        "--n-close-icon-color": L,
        "--n-close-icon-color-pressed": K,
        "--n-close-icon-color-hover": te,
        "--n-line-height": S,
        "--n-border-radius": C
      };
    }), d = t ? Ze("message", $(() => e.type[0]), s, {}) : void 0;
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
    }, (v = Ew(d, t, i)) && c ? f("div", {
      class: `${i}-message__icon ${i}-message__icon--${t}-type`
    }, f(gr, null, {
      default: () => v
    })) : null, f("div", {
      class: `${i}-message__content`
    }, gt(o)), r ? f(Bo, {
      clsPrefix: i,
      class: `${i}-message__close`,
      onClick: u,
      absolute: !0
    }) : null));
  }
});
function Ew(e, t, r) {
  if (typeof e == "function")
    return e();
  {
    const o = t === "loading" ? f(Un, {
      clsPrefix: r,
      strokeWidth: 24,
      scale: 0.85
    }) : Aw[t]();
    return o ? f(xt, {
      clsPrefix: r,
      key: t
    }, {
      default: () => o
    }) : null;
  }
}
const Tw = ee({
  name: "MessageEnvironment",
  props: Object.assign(Object.assign({}, _c), {
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
    Pt(() => {
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
    return f(vl, {
      appear: !0,
      onAfterLeave: this.handleAfterLeave,
      onLeave: this.onLeave
    }, {
      default: () => [this.show ? f(Dw, {
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
}), Ow = Object.assign(Object.assign({}, ve.props), {
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
}), Mw = ee({
  name: "MessageProvider",
  props: Ow,
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
    Ee(jc, {
      props: e,
      mergedClsPrefixRef: t
    }), Ee(Hc, i);
    function a(d, u) {
      const c = mn(), v = Co(Object.assign(Object.assign({}, u), {
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
    return f(je, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e), this.messageList.length ? f(di, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, f("div", {
      class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass],
      key: "message-container",
      style: this.containerStyle
    }, this.messageList.map((o) => f(Tw, Object.assign({
      ref: (i) => {
        i && (this.messageRefs[o.key] = i);
      },
      internalKey: o.key,
      onInternalAfterLeave: this.handleAfterLeave
    }, cr(o, ["destroy"], void 0), {
      duration: o.duration === void 0 ? this.duration : o.duration,
      keepAliveOnHover: o.keepAliveOnHover === void 0 ? this.keepAliveOnHover : o.keepAliveOnHover,
      closable: o.closable === void 0 ? this.closable : o.closable
    }))))) : null);
  }
});
function Iw() {
  const e = pe(Hc, null);
  return e === null && jn("use-message", "No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."), e;
}
const Lw = ee({
  name: "ModalEnvironment",
  props: Object.assign(Object.assign({}, Oc), {
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
    return f(Mc, Object.assign({}, this.$props, {
      show: i,
      onUpdateShow: e,
      onMaskClick: r,
      onEsc: o,
      onAfterLeave: t,
      internalAppear: !0,
      internalModal: !0
    }));
  }
}), Nw = {
  to: [String, Object]
}, Wc = ee({
  name: "ModalProvider",
  props: Nw,
  setup() {
    const e = I([]), t = {};
    function r(l = {}) {
      const s = mn(), d = Co(Object.assign(Object.assign({}, l), {
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
    return Ee(Ec, a), Ee(cw, {
      clickedRef: _a(64),
      clickedPositionRef: ja()
    }), Ee(fw, e), Object.assign(Object.assign({}, a), {
      modalList: e,
      modalInstRefs: t,
      handleAfterLeave: o
    });
  },
  render() {
    var e, t;
    return f(je, null, [this.modalList.map((r) => {
      var o;
      return f(Lw, cr(r, ["destroy"], {
        to: (o = r.to) !== null && o !== void 0 ? o : this.to,
        ref: (i) => {
          i === null ? delete this.modalInstRefs[`n-modal-${r.key}`] : this.modalInstRefs[`n-modal-${r.key}`] = i;
        },
        internalKey: r.key,
        onInternalAfterLeave: this.handleAfterLeave
      }));
    }), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)]);
  }
}), Hw = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px"
};
function jw(e) {
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
  return Object.assign(Object.assign({}, Hw), {
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
const _w = {
  name: "Notification",
  common: Je,
  peers: {
    Scrollbar: ko
  },
  self: jw
}, Ri = "n-notification-provider", Ww = ee({
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
    } = pe(Ri), o = I(null);
    return it(() => {
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
    }, t ? f(pr, {
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      contentStyle: {
        overflow: "hidden"
      }
    }, e) : e);
  }
}), Vw = {
  info: () => f(oi, null),
  success: () => f(hl, null),
  warning: () => f(bi, null),
  error: () => f(fl, null),
  default: () => null
}, Rl = {
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
}, Kw = Ln(Rl), Uw = ee({
  name: "Notification",
  props: Rl,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      mergedThemeRef: r,
      props: o
    } = pe(Ri), {
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(), l = zt("Notification", a, t), s = $(() => {
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
          headerFontWeight: S,
          boxShadow: C,
          lineHeight: k,
          fontSize: R,
          closeMargin: w,
          closeSize: B,
          width: F,
          padding: A,
          closeIconSize: V,
          closeBorderRadius: O,
          closeColorHover: n,
          closeColorPressed: D,
          titleFontSize: E,
          metaFontSize: H,
          descriptionFontSize: L,
          [Z("iconColor", u)]: K
        },
        common: {
          cubicBezierEaseOut: te,
          cubicBezierEaseIn: X,
          cubicBezierEaseInOut: U
        }
      } = r.value, {
        left: j,
        right: q,
        top: Y,
        bottom: ae
      } = Nt(A);
      return {
        "--n-color": c,
        "--n-font-size": R,
        "--n-text-color": v,
        "--n-description-text-color": x,
        "--n-action-text-color": b,
        "--n-title-text-color": p,
        "--n-title-font-weight": S,
        "--n-bezier": U,
        "--n-bezier-ease-out": te,
        "--n-bezier-ease-in": X,
        "--n-border-radius": y,
        "--n-box-shadow": C,
        "--n-close-border-radius": O,
        "--n-close-color-hover": n,
        "--n-close-color-pressed": D,
        "--n-close-icon-color": g,
        "--n-close-icon-color-hover": m,
        "--n-close-icon-color-pressed": h,
        "--n-line-height": k,
        "--n-icon-color": K,
        "--n-close-margin": w,
        "--n-close-size": B,
        "--n-close-icon-size": V,
        "--n-width": F,
        "--n-padding-left": j,
        "--n-padding-right": q,
        "--n-padding-top": Y,
        "--n-padding-bottom": ae,
        "--n-title-font-size": E,
        "--n-meta-font-size": H,
        "--n-description-font-size": L
      };
    }), d = i ? Ze("notification", $(() => e.type[0]), s, o) : void 0;
    return {
      mergedClsPrefix: t,
      showAvatar: $(() => e.avatar || e.type !== "default"),
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
    }, this.avatar ? gt(this.avatar) : this.type !== "default" ? f(xt, {
      clsPrefix: t
    }, {
      default: () => Vw[this.type]()
    }) : null) : null, this.closable ? f(Bo, {
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
}), qw = Object.assign(Object.assign({}, Rl), {
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
}), Gw = ee({
  name: "NotificationEnvironment",
  props: Object.assign(Object.assign({}, qw), {
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
    } = pe(Ri), r = I(!0);
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
    return Pt(() => {
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
    return f(_t, {
      name: "notification-transition",
      appear: !0,
      // convert to any since Element is not compatible with HTMLElement
      onBeforeEnter: this.handleBeforeEnter,
      onAfterEnter: this.handleAfterEnter,
      onBeforeLeave: this.handleBeforeLeave,
      onLeave: this.handleLeave,
      onAfterLeave: this.handleAfterLeave
    }, {
      default: () => this.show ? f(Uw, Object.assign({}, kn(this.$props, Kw), {
        onClose: this.handleClose,
        onMouseenter: this.duration && this.keepAliveOnHover ? this.handleMouseenter : void 0,
        onMouseleave: this.duration && this.keepAliveOnHover ? this.handleMouseleave : void 0
      })) : null
    });
  }
}), Xw = M([z("notification-container", `
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `, [M(">", [z("scrollbar", `
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [M(">", [z("scrollbar-container", `
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [z("scrollbar-content", `
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]), N("top, top-right, top-left", `
 top: 12px;
 `, [M("&.transitioning >", [z("scrollbar", [M(">", [z("scrollbar-container", `
 min-height: 100vh !important;
 `)])])])]), N("bottom, bottom-right, bottom-left", `
 bottom: 12px;
 `, [M(">", [z("scrollbar", [M(">", [z("scrollbar-container", [z("scrollbar-content", `
 padding-bottom: 12px;
 `)])])])]), z("notification-wrapper", `
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]), N("top, bottom", `
 left: 50%;
 transform: translateX(-50%);
 `, [z("notification-wrapper", [M("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: scale(0.85);
 `), M("&.notification-transition-leave-from, &.notification-transition-enter-to", `
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
 `, [Vo("top-right")]), N("top-left", `
 left: 0;
 `, [Vo("top-left")]), N("bottom-right", `
 right: 0;
 `, [Vo("bottom-right")]), N("bottom-left", `
 left: 0;
 `, [Vo("bottom-left")]), N("scrollable", [N("top-right", `
 top: 0;
 `), N("top-left", `
 top: 0;
 `), N("bottom-right", `
 bottom: 0;
 `), N("bottom-left", `
 bottom: 0;
 `)]), z("notification-wrapper", `
 margin-bottom: 12px;
 `, [M("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `), M("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 opacity: 1;
 `), M("&.notification-transition-leave-active", `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `), M("&.notification-transition-enter-active", `
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
 `, [T("avatar", [z("icon", `
 color: var(--n-icon-color);
 `), z("base-icon", `
 color: var(--n-icon-color);
 `)]), N("show-avatar", [z("notification-main", `
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]), N("closable", [z("notification-main", [M("> *:first-child", `
 padding-right: 20px;
 `)]), T("close", `
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), T("avatar", `
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
 `, [T("meta", `
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `), T("action", `
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]), T("header", `
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `), T("description", `
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `), T("content", `
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `, [M("&:first-child", "margin: 0;")])])])])]);
function Vo(e) {
  const r = e.split("-")[1] === "left" ? "calc(-100%)" : "calc(100%)";
  return z("notification-wrapper", [M("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: translate(${r}, 0);
 `), M("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: translate(0, 0);
 `)]);
}
const Vc = "n-notification-api", Yw = Object.assign(Object.assign({}, ve.props), {
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
}), Zw = ee({
  name: "NotificationProvider",
  props: Yw,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = I([]), o = {}, i = /* @__PURE__ */ new Set();
    function a(m) {
      const h = mn(), p = () => {
        i.add(h), o[h] && o[h].hide();
      }, x = Co(Object.assign(Object.assign({}, m), {
        key: h,
        destroy: p,
        hide: p,
        deactivate: p
      })), {
        max: b
      } = e;
      if (b && r.value.length - i.size >= b) {
        let y = !1, S = 0;
        for (const C of r.value) {
          if (!i.has(C.key)) {
            o[C.key] && (C.destroy(), y = !0);
            break;
          }
          S++;
        }
        y || r.value.splice(S, 1);
      }
      return r.value.push(x), x;
    }
    const l = ["info", "success", "warning", "error"].map((m) => (h) => a(Object.assign(Object.assign({}, h), {
      type: m
    })));
    function s(m) {
      i.delete(m), r.value.splice(r.value.findIndex((h) => h.key === m), 1);
    }
    const d = ve("Notification", "-notification", Xw, _w, e, t), u = {
      create: a,
      info: l[0],
      success: l[1],
      warning: l[2],
      error: l[3],
      open: v,
      destroyAll: g
    }, c = I(0);
    Ee(Vc, u), Ee(Ri, {
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
    return f(je, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e), this.notificationList.length ? f(di, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, f(Ww, {
      class: this.containerClass,
      style: this.containerStyle,
      scrollable: this.scrollable && o !== "top" && o !== "bottom",
      placement: o
    }, {
      default: () => this.notificationList.map((i) => f(Gw, Object.assign({
        ref: (a) => {
          const l = i.key;
          a === null ? delete this.notificationRefs[l] : this.notificationRefs[l] = a;
        }
      }, cr(i, ["destroy", "hide", "deactivate"]), {
        internalKey: i.key,
        onInternalAfterLeave: this.handleAfterLeave,
        keepAliveOnHover: i.keepAliveOnHover === void 0 ? this.keepAliveOnHover : i.keepAliveOnHover
      })))
    })) : null);
  }
});
function Jw() {
  const e = pe(Vc, null);
  return e === null && jn("use-notification", "No outer `n-notification-provider` found."), e;
}
const Qw = ee({
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
}), eS = {
  message: Iw,
  notification: Jw,
  loadingBar: Rw,
  dialog: zc,
  modal: Tc
};
function tS({
  providersAndProps: e,
  configProviderProps: t
}) {
  let r = zf(i);
  const o = {
    app: r
  };
  function i() {
    return f(ec, ne(t), {
      default: () => e.map(({
        type: s,
        Provider: d,
        props: u
      }) => f(d, ne(u), {
        default: () => f(Qw, {
          onSetup: () => o[s] = eS[s]()
        })
      }))
    });
  }
  let a;
  return Nr && (a = document.createElement("div"), document.body.appendChild(a), r.mount(a)), Object.assign({
    unmount: () => {
      var s;
      if (r === null || a === null) {
        Ft("discrete", "unmount call no need because discrete app has been unmounted");
        return;
      }
      r.unmount(), (s = a.parentNode) === null || s === void 0 || s.removeChild(a), a = null, r = null;
    }
  }, o);
}
function Kc(e, {
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
          Provider: Mw,
          props: r
        });
        break;
      case "notification":
        s.push({
          type: u,
          Provider: Zw,
          props: i
        });
        break;
      case "dialog":
        s.push({
          type: u,
          Provider: Ic,
          props: o
        });
        break;
      case "loadingBar":
        s.push({
          type: u,
          Provider: kw,
          props: a
        });
        break;
      case "modal":
        s.push({
          type: u,
          Provider: Wc,
          props: l
        });
    }
  }), tS({
    providersAndProps: s,
    configProviderProps: t
  });
}
const nS = {
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
function rS(e) {
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
  return Object.assign(Object.assign({}, nS), {
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
const Uc = {
  name: "Form",
  common: Je,
  self: rS
}, oS = {
  iconSize: "22px"
};
function iS(e) {
  const {
    fontSize: t,
    warningColor: r
  } = e;
  return Object.assign(Object.assign({}, oS), {
    fontSize: t,
    iconColor: r
  });
}
const aS = {
  name: "Popconfirm",
  common: Je,
  peers: {
    Button: Ci,
    Popover: mr
  },
  self: iS
};
function lS(e) {
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
const sS = {
  name: "Spin",
  common: Je,
  self: lS
}, dS = {
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
function uS(e) {
  const {
    primaryColor: t,
    opacityDisabled: r,
    borderRadius: o,
    textColor3: i
  } = e;
  return Object.assign(Object.assign({}, dS), {
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
    boxShadowFocus: `0 0 0 2px ${De(t, {
      alpha: 0.2
    })}`
  });
}
const cS = {
  name: "Switch",
  common: Je,
  self: uS
}, Fo = "n-form", qc = "n-form-item-insts", fS = z("form", [N("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [z("form-item", {
  width: "auto",
  marginRight: "18px"
}, [M("&:last-child", {
  marginRight: 0
})])])]);
var hS = function(e, t, r, o) {
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
const vS = Object.assign(Object.assign({}, ve.props), {
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
}), gS = ee({
  name: "Form",
  props: vS,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e);
    ve("Form", "-form", fS, Uc, e, t);
    const r = {}, o = I(void 0), i = (d) => {
      const u = o.value;
      (u === void 0 || d >= u) && (o.value = d);
    };
    function a(d) {
      return hS(this, arguments, void 0, function* (u, c = () => !0) {
        return yield new Promise((v, g) => {
          const m = [];
          for (const h of Ln(r)) {
            const p = r[h];
            for (const x of p)
              x.path && m.push(x.internalValidate(null, c));
          }
          Promise.all(m).then((h) => {
            const p = h.some((y) => !y.valid), x = [], b = [];
            h.forEach((y) => {
              var S, C;
              !((S = y.errors) === null || S === void 0) && S.length && x.push(y.errors), !((C = y.warnings) === null || C === void 0) && C.length && b.push(y.warnings);
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
      for (const d of Ln(r)) {
        const u = r[d];
        for (const c of u)
          c.restoreValidation();
      }
    }
    return Ee(Fo, {
      props: e,
      maxChildLabelWidthRef: o,
      deriveMaxChildLabelWidth: i
    }), Ee(qc, {
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
function Qn() {
  return Qn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Qn.apply(this, arguments);
}
function pS(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, xo(e, t);
}
function za(e) {
  return za = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, za(e);
}
function xo(e, t) {
  return xo = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, xo(e, t);
}
function mS() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Go(e, t, r) {
  return mS() ? Go = Reflect.construct.bind() : Go = function(i, a, l) {
    var s = [null];
    s.push.apply(s, a);
    var d = Function.bind.apply(i, s), u = new d();
    return l && xo(u, l.prototype), u;
  }, Go.apply(null, arguments);
}
function bS(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function $a(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return $a = function(o) {
    if (o === null || !bS(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(o)) return t.get(o);
      t.set(o, i);
    }
    function i() {
      return Go(o, arguments, za(this).constructor);
    }
    return i.prototype = Object.create(o.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), xo(i, o);
  }, $a(e);
}
var xS = /%[sdj%]/g, Gc = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Gc = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(o) {
    return typeof o == "string";
  }) && console.warn(t, r);
});
function Aa(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(r) {
    var o = r.field;
    t[o] = t[o] || [], t[o].push(r);
  }), t;
}
function Jt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  var i = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var l = e.replace(xS, function(s) {
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
function yS(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Bt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || yS(t) && typeof e == "string" && !e);
}
function CS(e, t, r) {
  var o = [], i = 0, a = e.length;
  function l(s) {
    o.push.apply(o, s || []), i++, i === a && r(o);
  }
  e.forEach(function(s) {
    t(s, l);
  });
}
function ud(e, t, r) {
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
function wS(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var cd = /* @__PURE__ */ function(e) {
  pS(t, e);
  function t(r, o) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = r, i.fields = o, i;
  }
  return t;
}(/* @__PURE__ */ $a(Error));
function SS(e, t, r, o, i) {
  if (t.first) {
    var a = new Promise(function(g, m) {
      var h = function(b) {
        return o(b), b.length ? m(new cd(b, Aa(b))) : g(i);
      }, p = wS(e);
      ud(p, r, h);
    });
    return a.catch(function(g) {
      return g;
    }), a;
  }
  var l = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), d = s.length, u = 0, c = [], v = new Promise(function(g, m) {
    var h = function(x) {
      if (c.push.apply(c, x), u++, u === d)
        return o(c), c.length ? m(new cd(c, Aa(c))) : g(i);
    };
    s.length || (o(c), g(i)), s.forEach(function(p) {
      var x = e[p];
      l.indexOf(p) !== -1 ? ud(x, r, h) : CS(x, r, h);
    });
  });
  return v.catch(function(g) {
    return g;
  }), v;
}
function BS(e) {
  return !!(e && e.message !== void 0);
}
function kS(e, t) {
  for (var r = e, o = 0; o < t.length; o++) {
    if (r == null)
      return r;
    r = r[t[o]];
  }
  return r;
}
function fd(e, t) {
  return function(r) {
    var o;
    return e.fullFields ? o = kS(t, e.fullFields) : o = t[r.field || e.fullField], BS(r) ? (r.field = r.field || e.fullField, r.fieldValue = o, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: o,
      field: r.field || e.fullField
    };
  };
}
function hd(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = t[r];
        typeof o == "object" && typeof e[r] == "object" ? e[r] = Qn({}, e[r], o) : e[r] = o;
      }
  }
  return e;
}
var Xc = function(t, r, o, i, a, l) {
  t.required && (!o.hasOwnProperty(t.field) || Bt(r, l || t.type)) && i.push(Jt(a.messages.required, t.fullField));
}, RS = function(t, r, o, i, a) {
  (/^\s+$/.test(r) || r === "") && i.push(Jt(a.messages.whitespace, t.fullField));
}, Ko, FS = function() {
  if (Ko)
    return Ko;
  var e = "[a-fA-F\\d:]", t = function(C) {
    return C && C.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : "";
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + r + "$)|(?:^" + i + "$)"), l = new RegExp("^" + r + "$"), s = new RegExp("^" + i + "$"), d = function(C) {
    return C && C.exact ? a : new RegExp("(?:" + t(C) + r + t(C) + ")|(?:" + t(C) + i + t(C) + ")", "g");
  };
  d.v4 = function(S) {
    return S && S.exact ? l : new RegExp("" + t(S) + r + t(S), "g");
  }, d.v6 = function(S) {
    return S && S.exact ? s : new RegExp("" + t(S) + i + t(S), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", v = d.v4().source, g = d.v6().source, m = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", x = "(?::\\d{2,5})?", b = '(?:[/?#][^\\s"]*)?', y = "(?:" + u + "|www\\.)" + c + "(?:localhost|" + v + "|" + g + "|" + m + h + p + ")" + x + b;
  return Ko = new RegExp("(?:^" + y + "$)", "i"), Ko;
}, vd = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Qr = {
  integer: function(t) {
    return Qr.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Qr.number(t) && !Qr.integer(t);
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
    return typeof t == "object" && !Qr.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(vd.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(FS());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(vd.hex);
  }
}, PS = function(t, r, o, i, a) {
  if (t.required && r === void 0) {
    Xc(t, r, o, i, a);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  l.indexOf(s) > -1 ? Qr[s](r) || i.push(Jt(a.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && i.push(Jt(a.messages.types[s], t.fullField, t.type));
}, zS = function(t, r, o, i, a) {
  var l = typeof t.len == "number", s = typeof t.min == "number", d = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, v = null, g = typeof r == "number", m = typeof r == "string", h = Array.isArray(r);
  if (g ? v = "number" : m ? v = "string" : h && (v = "array"), !v)
    return !1;
  h && (c = r.length), m && (c = r.replace(u, "_").length), l ? c !== t.len && i.push(Jt(a.messages[v].len, t.fullField, t.len)) : s && !d && c < t.min ? i.push(Jt(a.messages[v].min, t.fullField, t.min)) : d && !s && c > t.max ? i.push(Jt(a.messages[v].max, t.fullField, t.max)) : s && d && (c < t.min || c > t.max) && i.push(Jt(a.messages[v].range, t.fullField, t.min, t.max));
}, Sr = "enum", $S = function(t, r, o, i, a) {
  t[Sr] = Array.isArray(t[Sr]) ? t[Sr] : [], t[Sr].indexOf(r) === -1 && i.push(Jt(a.messages[Sr], t.fullField, t[Sr].join(", ")));
}, AS = function(t, r, o, i, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || i.push(Jt(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var l = new RegExp(t.pattern);
      l.test(r) || i.push(Jt(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, Me = {
  required: Xc,
  whitespace: RS,
  type: PS,
  range: zS,
  enum: $S,
  pattern: AS
}, DS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r, "string") && !t.required)
      return o();
    Me.required(t, r, i, l, a, "string"), Bt(r, "string") || (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a), Me.pattern(t, r, i, l, a), t.whitespace === !0 && Me.whitespace(t, r, i, l, a));
  }
  o(l);
}, ES = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && Me.type(t, r, i, l, a);
  }
  o(l);
}, TS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a));
  }
  o(l);
}, OS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && Me.type(t, r, i, l, a);
  }
  o(l);
}, MS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), Bt(r) || Me.type(t, r, i, l, a);
  }
  o(l);
}, IS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a));
  }
  o(l);
}, LS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a));
  }
  o(l);
}, NS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return o();
    Me.required(t, r, i, l, a, "array"), r != null && (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a));
  }
  o(l);
}, HS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && Me.type(t, r, i, l, a);
  }
  o(l);
}, jS = "enum", _S = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && Me[jS](t, r, i, l, a);
  }
  o(l);
}, WS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r, "string") && !t.required)
      return o();
    Me.required(t, r, i, l, a), Bt(r, "string") || Me.pattern(t, r, i, l, a);
  }
  o(l);
}, VS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r, "date") && !t.required)
      return o();
    if (Me.required(t, r, i, l, a), !Bt(r, "date")) {
      var d;
      r instanceof Date ? d = r : d = new Date(r), Me.type(t, d, i, l, a), d && Me.range(t, d.getTime(), i, l, a);
    }
  }
  o(l);
}, KS = function(t, r, o, i, a) {
  var l = [], s = Array.isArray(r) ? "array" : typeof r;
  Me.required(t, r, i, l, a, s), o(l);
}, ia = function(t, r, o, i, a) {
  var l = t.type, s = [], d = t.required || !t.required && i.hasOwnProperty(t.field);
  if (d) {
    if (Bt(r, l) && !t.required)
      return o();
    Me.required(t, r, i, s, a, l), Bt(r, l) || Me.type(t, r, i, s, a);
  }
  o(s);
}, US = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a);
  }
  o(l);
}, so = {
  string: DS,
  method: ES,
  number: TS,
  boolean: OS,
  regexp: MS,
  integer: IS,
  float: LS,
  array: NS,
  object: HS,
  enum: _S,
  pattern: WS,
  date: VS,
  url: ia,
  hex: ia,
  email: ia,
  required: KS,
  any: US
};
function Da() {
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
var Ea = Da(), Tr = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = Ea, this.define(r);
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
    return o && (this._messages = hd(Da(), o)), this._messages;
  }, t.validate = function(o, i, a) {
    var l = this;
    i === void 0 && (i = {}), a === void 0 && (a = function() {
    });
    var s = o, d = i, u = a;
    if (typeof d == "function" && (u = d, d = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function c(p) {
      var x = [], b = {};
      function y(C) {
        if (Array.isArray(C)) {
          var k;
          x = (k = x).concat.apply(k, C);
        } else
          x.push(C);
      }
      for (var S = 0; S < p.length; S++)
        y(p[S]);
      x.length ? (b = Aa(x), u(x, b)) : u(null, s);
    }
    if (d.messages) {
      var v = this.messages();
      v === Ea && (v = Da()), hd(v, d.messages), d.messages = v;
    } else
      d.messages = this.messages();
    var g = {}, m = d.keys || Object.keys(this.rules);
    m.forEach(function(p) {
      var x = l.rules[p], b = s[p];
      x.forEach(function(y) {
        var S = y;
        typeof S.transform == "function" && (s === o && (s = Qn({}, s)), b = s[p] = S.transform(b)), typeof S == "function" ? S = {
          validator: S
        } : S = Qn({}, S), S.validator = l.getValidationMethod(S), S.validator && (S.field = p, S.fullField = S.fullField || p, S.type = l.getType(S), g[p] = g[p] || [], g[p].push({
          rule: S,
          value: b,
          source: s,
          field: p
        }));
      });
    });
    var h = {};
    return SS(g, d, function(p, x) {
      var b = p.rule, y = (b.type === "object" || b.type === "array") && (typeof b.fields == "object" || typeof b.defaultField == "object");
      y = y && (b.required || !b.required && p.value), b.field = p.field;
      function S(R, w) {
        return Qn({}, w, {
          fullField: b.fullField + "." + R,
          fullFields: b.fullFields ? [].concat(b.fullFields, [R]) : [R]
        });
      }
      function C(R) {
        R === void 0 && (R = []);
        var w = Array.isArray(R) ? R : [R];
        !d.suppressWarning && w.length && e.warning("async-validator:", w), w.length && b.message !== void 0 && (w = [].concat(b.message));
        var B = w.map(fd(b, s));
        if (d.first && B.length)
          return h[b.field] = 1, x(B);
        if (!y)
          x(B);
        else {
          if (b.required && !p.value)
            return b.message !== void 0 ? B = [].concat(b.message).map(fd(b, s)) : d.error && (B = [d.error(b, Jt(d.messages.required, b.field))]), x(B);
          var F = {};
          b.defaultField && Object.keys(p.value).map(function(O) {
            F[O] = b.defaultField;
          }), F = Qn({}, F, p.rule.fields);
          var A = {};
          Object.keys(F).forEach(function(O) {
            var n = F[O], D = Array.isArray(n) ? n : [n];
            A[O] = D.map(S.bind(null, O));
          });
          var V = new e(A);
          V.messages(d.messages), p.rule.options && (p.rule.options.messages = d.messages, p.rule.options.error = d.error), V.validate(p.value, p.rule.options || d, function(O) {
            var n = [];
            B && B.length && n.push.apply(n, B), O && O.length && n.push.apply(n, O), x(n.length ? n : null);
          });
        }
      }
      var k;
      if (b.asyncValidator)
        k = b.asyncValidator(b, p.value, C, p.source, d);
      else if (b.validator) {
        try {
          k = b.validator(b, p.value, C, p.source, d);
        } catch (R) {
          console.error == null || console.error(R), d.suppressValidatorError || setTimeout(function() {
            throw R;
          }, 0), C(R.message);
        }
        k === !0 ? C() : k === !1 ? C(typeof b.message == "function" ? b.message(b.fullField || b.field) : b.message || (b.fullField || b.field) + " fails") : k instanceof Array ? C(k) : k instanceof Error && C(k.message);
      }
      k && k.then && k.then(function() {
        return C();
      }, function(R) {
        return C(R);
      });
    }, function(p) {
      c(p);
    }, s);
  }, t.getType = function(o) {
    if (o.type === void 0 && o.pattern instanceof RegExp && (o.type = "pattern"), typeof o.validator != "function" && o.type && !so.hasOwnProperty(o.type))
      throw new Error(Jt("Unknown rule type %s", o.type));
    return o.type || "string";
  }, t.getValidationMethod = function(o) {
    if (typeof o.validator == "function")
      return o.validator;
    var i = Object.keys(o), a = i.indexOf("message");
    return a !== -1 && i.splice(a, 1), i.length === 1 && i[0] === "required" ? so.required : so[this.getType(o)] || void 0;
  }, e;
}();
Tr.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  so[t] = r;
};
Tr.warning = Gc;
Tr.messages = Ea;
Tr.validators = so;
const {
  cubicBezierEaseInOut: gd
} = Vn;
function qS({
  name: e = "fade-down",
  fromOffset: t = "-4px",
  enterDuration: r = ".3s",
  leaveDuration: o = ".3s",
  enterCubicBezier: i = gd,
  leaveCubicBezier: a = gd
} = {}) {
  return [M(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0,
    transform: `translateY(${t})`
  }), M(`&.${e}-transition-enter-to, &.${e}-transition-leave-from`, {
    opacity: 1,
    transform: "translateY(0)"
  }), M(`&.${e}-transition-leave-active`, {
    transition: `opacity ${o} ${a}, transform ${o} ${a}`
  }), M(`&.${e}-transition-enter-active`, {
    transition: `opacity ${r} ${i}, transform ${r} ${i}`
  })];
}
const GS = z("form-item", `
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
 `), T("text", `
 grid-area: text; 
 `), T("asterisk", `
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
 `, [M("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), z("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [N("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), N("error", {
  color: "var(--n-feedback-text-color-error)"
}), qS({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
function XS(e) {
  const t = pe(Fo, null);
  return {
    mergedSize: $(() => e.size !== void 0 ? e.size : (t == null ? void 0 : t.props.size) !== void 0 ? t.props.size : "medium")
  };
}
function YS(e) {
  const t = pe(Fo, null), r = $(() => {
    const {
      labelPlacement: h
    } = e;
    return h !== void 0 ? h : t != null && t.props.labelPlacement ? t.props.labelPlacement : "top";
  }), o = $(() => r.value === "left" && (e.labelWidth === "auto" || (t == null ? void 0 : t.props.labelWidth) === "auto")), i = $(() => {
    if (r.value === "top") return;
    const {
      labelWidth: h
    } = e;
    if (h !== void 0 && h !== "auto")
      return Ct(h);
    if (o.value) {
      const p = t == null ? void 0 : t.maxChildLabelWidthRef.value;
      return p !== void 0 ? Ct(p) : void 0;
    }
    if ((t == null ? void 0 : t.props.labelWidth) !== void 0)
      return Ct(t.props.labelWidth);
  }), a = $(() => {
    const {
      labelAlign: h
    } = e;
    if (h) return h;
    if (t != null && t.props.labelAlign) return t.props.labelAlign;
  }), l = $(() => {
    var h;
    return [(h = e.labelProps) === null || h === void 0 ? void 0 : h.style, e.labelStyle, {
      width: i.value
    }];
  }), s = $(() => {
    const {
      showRequireMark: h
    } = e;
    return h !== void 0 ? h : t == null ? void 0 : t.props.showRequireMark;
  }), d = $(() => {
    const {
      requireMarkPlacement: h
    } = e;
    return h !== void 0 ? h : (t == null ? void 0 : t.props.requireMarkPlacement) || "right";
  }), u = I(!1), c = I(!1), v = $(() => {
    const {
      validationStatus: h
    } = e;
    if (h !== void 0) return h;
    if (u.value) return "error";
    if (c.value) return "warning";
  }), g = $(() => {
    const {
      showFeedback: h
    } = e;
    return h !== void 0 ? h : (t == null ? void 0 : t.props.showFeedback) !== void 0 ? t.props.showFeedback : !0;
  }), m = $(() => {
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
function ZS(e) {
  const t = pe(Fo, null), r = $(() => {
    const {
      rulePath: l
    } = e;
    if (l !== void 0) return l;
    const {
      path: s
    } = e;
    if (s !== void 0) return s;
  }), o = $(() => {
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
        const c = mo(d, u);
        c !== void 0 && (Array.isArray(c) ? l.push(...c) : l.push(c));
      }
    }
    return l;
  }), i = $(() => o.value.some((l) => l.required)), a = $(() => i.value || e.required);
  return {
    mergedRules: o,
    mergedRequired: a
  };
}
var pd = function(e, t, r, o) {
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
const JS = Object.assign(Object.assign({}, ve.props), {
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
function md(e, t) {
  return (...r) => {
    try {
      const o = e(...r);
      return !t && (typeof o == "boolean" || o instanceof Error || Array.isArray(o)) || o != null && o.then ? o : (o === void 0 || Ft("form-item/validate", `You return a ${typeof o} typed value in the validator method, which is not recommended. Please use ${t ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`), !0);
    } catch (o) {
      Ft("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(o);
      return;
    }
  };
}
const bd = ee({
  name: "FormItem",
  props: JS,
  setup(e) {
    kh(qc, "formItems", ie(e, "path"));
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = pe(Fo, null), i = XS(e), a = YS(e), {
      validationErrored: l,
      validationWarned: s
    } = a, {
      mergedRequired: d,
      mergedRules: u
    } = ZS(e), {
      mergedSize: c
    } = i, {
      mergedLabelPlacement: v,
      mergedLabelAlign: g,
      mergedRequireMarkPlacement: m
    } = a, h = I([]), p = I(mn()), x = o ? ie(o.props, "disabled") : I(!1), b = ve("Form", "-form-item", GS, Uc, e, t);
    He(ie(e, "path"), () => {
      e.ignorePathChange || y();
    });
    function y() {
      h.value = [], l.value = !1, s.value = !1, e.feedback && (p.value = mn());
    }
    const S = (...D) => pd(this, [...D], void 0, function* (E = null, H = () => !0, L = {
      suppressWarning: !0
    }) {
      const {
        path: K
      } = e;
      L ? L.first || (L.first = e.first) : L = {};
      const {
        value: te
      } = u, X = o ? mo(o.props.model, K || "") : void 0, U = {}, j = {}, q = (E ? te.filter((be) => Array.isArray(be.trigger) ? be.trigger.includes(E) : be.trigger === E) : te).filter(H).map((be, Pe) => {
        const ze = Object.assign({}, be);
        if (ze.validator && (ze.validator = md(ze.validator, !1)), ze.asyncValidator && (ze.asyncValidator = md(ze.asyncValidator, !0)), ze.renderMessage) {
          const st = `__renderMessage__${Pe}`;
          j[st] = ze.message, ze.message = st, U[st] = ze.renderMessage;
        }
        return ze;
      }), Y = q.filter((be) => be.level !== "warning"), ae = q.filter((be) => be.level === "warning"), le = {
        valid: !0,
        errors: void 0,
        warnings: void 0
      };
      if (!q.length) return le;
      const fe = K ?? "__n_no_path__", we = new Tr({
        [fe]: Y
      }), G = new Tr({
        [fe]: ae
      }), {
        validateMessages: ue
      } = (o == null ? void 0 : o.props) || {};
      ue && (we.messages(ue), G.messages(ue));
      const Fe = (be) => {
        h.value = be.map((Pe) => {
          const ze = (Pe == null ? void 0 : Pe.message) || "";
          return {
            key: ze,
            render: () => ze.startsWith("__renderMessage__") ? U[ze]() : ze
          };
        }), be.forEach((Pe) => {
          var ze;
          !((ze = Pe.message) === null || ze === void 0) && ze.startsWith("__renderMessage__") && (Pe.message = j[Pe.message]);
        });
      };
      if (Y.length) {
        const be = yield new Promise((Pe) => {
          we.validate({
            [fe]: X
          }, L, Pe);
        });
        be != null && be.length && (le.valid = !1, le.errors = be, Fe(be));
      }
      if (ae.length && !le.errors) {
        const be = yield new Promise((Pe) => {
          G.validate({
            [fe]: X
          }, L, Pe);
        });
        be != null && be.length && (Fe(be), le.warnings = be);
      }
      return !le.errors && !le.warnings ? y() : (l.value = !!le.errors, s.value = !!le.warnings), le;
    });
    function C() {
      S("blur");
    }
    function k() {
      S("change");
    }
    function R() {
      S("focus");
    }
    function w() {
      S("input");
    }
    function B(D, E) {
      return pd(this, void 0, void 0, function* () {
        let H, L, K, te;
        return typeof D == "string" ? (H = D, L = E) : D !== null && typeof D == "object" && (H = D.trigger, L = D.callback, K = D.shouldRuleBeApplied, te = D.options), yield new Promise((X, U) => {
          S(H, K, te).then(({
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
            }), U(q));
          });
        });
      });
    }
    Ee(ha, {
      path: ie(e, "path"),
      disabled: x,
      mergedSize: i.mergedSize,
      mergedValidationStatus: a.mergedValidationStatus,
      restoreValidation: y,
      handleContentBlur: C,
      handleContentChange: k,
      handleContentFocus: R,
      handleContentInput: w
    });
    const F = {
      validate: B,
      restoreValidation: y,
      internalValidate: S
    }, A = I(null);
    Pt(() => {
      if (!a.isAutoLabelWidth.value) return;
      const D = A.value;
      if (D !== null) {
        const E = D.style.whiteSpace;
        D.style.whiteSpace = "nowrap", D.style.width = "", o == null || o.deriveMaxChildLabelWidth(Number(getComputedStyle(D).width.slice(0, -2))), D.style.whiteSpace = E;
      }
    });
    const V = $(() => {
      var D;
      const {
        value: E
      } = c, {
        value: H
      } = v, L = H === "top" ? "vertical" : "horizontal", {
        common: {
          cubicBezierEaseInOut: K
        },
        self: {
          labelTextColor: te,
          asteriskColor: X,
          lineHeight: U,
          feedbackTextColor: j,
          feedbackTextColorWarning: q,
          feedbackTextColorError: Y,
          feedbackPadding: ae,
          labelFontWeight: le,
          [Z("labelHeight", E)]: fe,
          [Z("blankHeight", E)]: we,
          [Z("feedbackFontSize", E)]: G,
          [Z("feedbackHeight", E)]: ue,
          [Z("labelPadding", L)]: Fe,
          [Z("labelTextAlign", L)]: be,
          [Z(Z("labelFontSize", H), E)]: Pe
        }
      } = b.value;
      let ze = (D = g.value) !== null && D !== void 0 ? D : be;
      return H === "top" && (ze = ze === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": K,
        "--n-line-height": U,
        "--n-blank-height": we,
        "--n-label-font-size": Pe,
        "--n-label-text-align": ze,
        "--n-label-height": fe,
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
    }), O = r ? Ze("form-item", $(() => {
      var D;
      return `${c.value[0]}${v.value[0]}${((D = g.value) === null || D === void 0 ? void 0 : D[0]) || ""}`;
    }), V, e) : void 0, n = $(() => v.value === "left" && m.value === "left" && g.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: A,
      mergedClsPrefix: t,
      mergedRequired: d,
      feedbackId: p,
      renderExplains: h,
      reverseColSpace: n
    }, a), i), F), {
      cssVars: r ? void 0 : V,
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
    }, f(_t, {
      name: "fade-down-transition",
      mode: "out-in"
    }, {
      default: () => {
        const {
          mergedValidationStatus: d
        } = this;
        return _e(e.feedback, (u) => {
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
function QS(e) {
  const {
    primaryColor: t,
    baseColor: r
  } = e;
  return {
    color: t,
    iconColor: r
  };
}
const e2 = {
  name: "IconWrapper",
  common: Je,
  self: QS
}, t2 = z("icon-wrapper", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`), n2 = Object.assign(Object.assign({}, ve.props), {
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
}), r2 = ee({
  name: "IconWrapper",
  props: n2,
  setup(e, {
    slots: t
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("IconWrapper", "-icon-wrapper", t2, e2, e, r), a = $(() => {
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
    }), l = o ? Ze("icon-wrapper", void 0, a, e) : void 0;
    return () => {
      const s = Ct(e.size);
      return l == null || l.onRender(), f("div", {
        class: [`${r.value}-icon-wrapper`, l == null ? void 0 : l.themeClass.value],
        style: [a == null ? void 0 : a.value, {
          height: s,
          width: s,
          borderRadius: Ct(e.borderRadius),
          backgroundColor: e.color,
          color: e.iconColor
        }]
      }, t);
    };
  }
}), Yc = "n-popconfirm", Zc = {
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
}, xd = Ln(Zc), o2 = ee({
  name: "NPopconfirmPanel",
  props: Zc,
  setup(e) {
    const {
      localeRef: t
    } = ir("Popconfirm"), {
      inlineThemeDisabled: r
    } = Ae(), {
      mergedClsPrefixRef: o,
      mergedThemeRef: i,
      props: a
    } = pe(Yc), l = $(() => {
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
    }), s = r ? Ze("popconfirm-panel", void 0, l, a) : void 0;
    return Object.assign(Object.assign({}, ir("Popconfirm")), {
      mergedClsPrefix: o,
      cssVars: r ? void 0 : l,
      localizedPositiveText: $(() => e.positiveText || t.value.positiveText),
      localizedNegativeText: $(() => e.negativeText || t.value.negativeText),
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
    } = this, i = en(o.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && f(lr, Object.assign({
      size: "small",
      onClick: this.handleNegativeClick
    }, this.negativeButtonProps), {
      default: () => this.localizedNegativeText
    }), this.positiveText !== null && f(lr, Object.assign({
      size: "small",
      type: "primary",
      onClick: this.handlePositiveClick
    }, this.positiveButtonProps), {
      default: () => this.localizedPositiveText
    })]);
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      class: [`${t}-popconfirm__panel`, this.themeClass],
      style: this.cssVars
    }, _e(o.default, (a) => r || a ? f("div", {
      class: `${t}-popconfirm__body`
    }, r ? f("div", {
      class: `${t}-popconfirm__icon`
    }, en(o.icon, () => [f(xt, {
      clsPrefix: t
    }, {
      default: () => f(bi, null)
    })])) : null, a) : null), i ? f("div", {
      class: [`${t}-popconfirm__action`]
    }, i) : null);
  }
}), i2 = z("popconfirm", [T("body", `
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `, [T("icon", `
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]), T("action", `
 display: flex;
 justify-content: flex-end;
 `, [M("&:not(:first-child)", "margin-top: 8px"), z("button", [M("&:not(:last-child)", "margin-right: 8px;")])])]), a2 = Object.assign(Object.assign(Object.assign({}, ve.props), ar), {
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
}), l2 = ee({
  name: "Popconfirm",
  props: a2,
  slots: Object,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(), r = ve("Popconfirm", "-popconfirm", i2, aS, e, t), o = I(null);
    function i(s) {
      var d;
      if (!(!((d = o.value) === null || d === void 0) && d.getMergedShow())) return;
      const {
        onPositiveClick: u,
        "onUpdate:show": c
      } = e;
      Promise.resolve(u ? u(s) : !0).then((v) => {
        var g;
        v !== !1 && ((g = o.value) === null || g === void 0 || g.setShow(!1), c && re(c, !1));
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
        v !== !1 && ((g = o.value) === null || g === void 0 || g.setShow(!1), c && re(c, !1));
      });
    }
    return Ee(Yc, {
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
    return f(br, cr(t, xd, {
      theme: r.peers.Popover,
      themeOverrides: r.peerOverrides.Popover,
      internalExtraClass: ["popconfirm"],
      ref: "popoverInstRef"
    }), {
      trigger: e.trigger,
      default: () => {
        const o = kn(t, xd);
        return f(o2, Object.assign(Object.assign({}, o), {
          onPositiveClick: this.handlePositiveClick,
          onNegativeClick: this.handleNegativeClick
        }), e);
      }
    });
  }
}), s2 = M([M("@keyframes spin-rotate", `
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
 `, [xi()])]), z("spin-body", `
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
 `)])]), d2 = {
  small: 20,
  medium: 18,
  large: 16
}, u2 = Object.assign(Object.assign({}, ve.props), {
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
}), Jc = ee({
  name: "Spin",
  props: u2,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && it(() => {
      e.spinning !== void 0 && ct("spin", "`spinning` is deprecated, please use `show` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Spin", "-spin", s2, sS, e, t), i = $(() => {
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
      } = c, h = typeof d == "number" ? yt(d) : c[Z("size", d)];
      return {
        "--n-bezier": u,
        "--n-opacity-spinning": v,
        "--n-size": h,
        "--n-color": g,
        "--n-text-color": m
      };
    }), a = r ? Ze("spin", $(() => {
      const {
        size: d
      } = e;
      return typeof d == "number" ? String(d) : d[0];
    }), i, e) : void 0, l = Wa(e, ["spinning", "show"]), s = I(!1);
    return it((d) => {
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
      mergedStrokeWidth: $(() => {
        const {
          strokeWidth: d
        } = e;
        if (d !== void 0) return d;
        const {
          size: u
        } = e;
        return d2[typeof u == "number" ? "medium" : u];
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
    }, f(Un, {
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
    }, r), f(_t, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? s : null
    })) : s;
  }
}), c2 = z("switch", `
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`, [T("children-placeholder", `
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `), T("rail-placeholder", `
 display: flex;
 flex-wrap: none;
 `), T("button-placeholder", `
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
 `, [Zt({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), T("checked, unchecked", `
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
 `), T("checked", `
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), T("unchecked", `
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), M("&:focus", [T("rail", `
 box-shadow: var(--n-box-shadow-focus);
 `)]), N("round", [T("rail", "border-radius: calc(var(--n-rail-height) / 2);", [T("button", "border-radius: calc(var(--n-button-height) / 2);")])]), Ye("disabled", [Ye("icon", [N("rubber-band", [N("pressed", [T("rail", [T("button", "max-width: var(--n-button-width-pressed);")])]), T("rail", [M("&:active", [T("button", "max-width: var(--n-button-width-pressed);")])]), N("active", [N("pressed", [T("rail", [T("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]), T("rail", [M("&:active", [T("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]), N("active", [T("rail", [T("button", "left: calc(100% - var(--n-button-width) - var(--n-offset))")])]), T("rail", `
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
 `, [T("button-icon", `
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
 `, [Zt()]), T("button", `
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
 `)]), N("active", [T("rail", "background-color: var(--n-rail-color-active);")]), N("loading", [T("rail", `
 cursor: wait;
 `)]), N("disabled", [T("rail", `
 cursor: not-allowed;
 opacity: .5;
 `)])]), f2 = Object.assign(Object.assign({}, ve.props), {
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
let Yr;
const h2 = ee({
  name: "Switch",
  props: f2,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && it(() => {
      e.onChange && ct("switch", "`on-change` is deprecated, please use `on-update:value` instead.");
    }), Yr === void 0 && (typeof CSS < "u" ? typeof CSS.supports < "u" ? Yr = CSS.supports("width", "max(1px)") : Yr = !1 : Yr = !0);
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Switch", "-switch", c2, cS, e, t), i = _n(e), {
      mergedSizeRef: a,
      mergedDisabledRef: l
    } = i, s = I(e.defaultValue), d = ie(e, "value"), u = Mt(d, s), c = $(() => u.value === e.checkedValue), v = I(!1), g = I(!1), m = $(() => {
      const {
        railStyle: B
      } = e;
      if (B)
        return B({
          focused: g.value,
          checked: c.value
        });
    });
    function h(B) {
      const {
        "onUpdate:value": F,
        onChange: A,
        onUpdateValue: V
      } = e, {
        nTriggerFormInput: O,
        nTriggerFormChange: n
      } = i;
      F && re(F, B), V && re(V, B), A && re(A, B), s.value = B, O(), n();
    }
    function p() {
      const {
        nTriggerFormFocus: B
      } = i;
      B();
    }
    function x() {
      const {
        nTriggerFormBlur: B
      } = i;
      B();
    }
    function b() {
      e.loading || l.value || (u.value !== e.checkedValue ? h(e.checkedValue) : h(e.uncheckedValue));
    }
    function y() {
      g.value = !0, p();
    }
    function S() {
      g.value = !1, x(), v.value = !1;
    }
    function C(B) {
      e.loading || l.value || B.key === " " && (u.value !== e.checkedValue ? h(e.checkedValue) : h(e.uncheckedValue), v.value = !1);
    }
    function k(B) {
      e.loading || l.value || B.key === " " && (B.preventDefault(), v.value = !0);
    }
    const R = $(() => {
      const {
        value: B
      } = a, {
        self: {
          opacityDisabled: F,
          railColor: A,
          railColorActive: V,
          buttonBoxShadow: O,
          buttonColor: n,
          boxShadowFocus: D,
          loadingColor: E,
          textColor: H,
          iconColor: L,
          [Z("buttonHeight", B)]: K,
          [Z("buttonWidth", B)]: te,
          [Z("buttonWidthPressed", B)]: X,
          [Z("railHeight", B)]: U,
          [Z("railWidth", B)]: j,
          [Z("railBorderRadius", B)]: q,
          [Z("buttonBorderRadius", B)]: Y
        },
        common: {
          cubicBezierEaseInOut: ae
        }
      } = o.value;
      let le, fe, we;
      return Yr ? (le = `calc((${U} - ${K}) / 2)`, fe = `max(${U}, ${K})`, we = `max(${j}, calc(${j} + ${K} - ${U}))`) : (le = yt((Dt(U) - Dt(K)) / 2), fe = yt(Math.max(Dt(U), Dt(K))), we = Dt(U) > Dt(K) ? j : yt(Dt(j) + Dt(K) - Dt(U))), {
        "--n-bezier": ae,
        "--n-button-border-radius": Y,
        "--n-button-box-shadow": O,
        "--n-button-color": n,
        "--n-button-width": te,
        "--n-button-width-pressed": X,
        "--n-button-height": K,
        "--n-height": fe,
        "--n-offset": le,
        "--n-opacity-disabled": F,
        "--n-rail-border-radius": q,
        "--n-rail-color": A,
        "--n-rail-color-active": V,
        "--n-rail-height": U,
        "--n-rail-width": j,
        "--n-width": we,
        "--n-box-shadow-focus": D,
        "--n-loading-color": E,
        "--n-text-color": H,
        "--n-icon-color": L
      };
    }), w = r ? Ze("switch", $(() => a.value[0]), R, e) : void 0;
    return {
      handleClick: b,
      handleBlur: S,
      handleFocus: y,
      handleKeyup: C,
      handleKeydown: k,
      mergedRailStyle: m,
      pressed: v,
      mergedClsPrefix: t,
      mergedValue: u,
      checked: c,
      mergedDisabled: l,
      cssVars: r ? void 0 : R,
      themeClass: w == null ? void 0 : w.themeClass,
      onRender: w == null ? void 0 : w.onRender
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
    } = a, v = !(Rr(d) && Rr(u) && Rr(c));
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
    }, _e(l, (g) => _e(s, (m) => g || m ? f("div", {
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
    }, _e(d, (g) => _e(u, (m) => _e(c, (h) => f(gr, null, {
      default: () => this.loading ? f(Un, {
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
    })))), _e(l, (g) => g && f("div", {
      key: "checked",
      class: `${e}-switch__checked`
    }, g)), _e(s, (g) => g && f("div", {
      key: "unchecked",
      class: `${e}-switch__unchecked`
    }, g)))));
  }
}), v2 = /* @__PURE__ */ Object.assign({
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
    return (r, o) => (ke(), nt(ne(ec), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: ne(z0),
      "date-locale": ne(Wv),
      "theme-overrides": t
    }, {
      default: Xe(() => [
        on(ne(Wc), null, {
          default: Xe(() => [
            on(ne(Ic), null, {
              default: Xe(() => [
                Qt(r.$slots, "default")
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
function g2(e, t, r) {
  e.addEventListener(t, r), ui(() => {
    e.removeEventListener(t, r);
  });
}
var eo = void 0, Pr = {}, Ta;
Pr.throttle = Ta = function(e, t, r, o) {
  var i, a = 0;
  typeof t != "boolean" && (o = r, r = t, t = eo);
  function l() {
    var s = this, d = +/* @__PURE__ */ new Date() - a, u = arguments;
    function c() {
      a = +/* @__PURE__ */ new Date(), r.apply(s, u);
    }
    function v() {
      i = eo;
    }
    o && !i && c(), i && clearTimeout(i), o === eo && d > e ? c() : t !== !0 && (i = setTimeout(o ? v : c, o === eo ? e - d : e));
  }
  return Pr.guid && (l.guid = r.guid = r.guid || Pr.guid++), l;
};
Pr.debounce = function(e, t, r) {
  return r === eo ? Ta(e, t, !1) : Ta(e, r, t !== !1);
};
const qn = function(e, t, r) {
  return Pr.debounce(t || 300, r ?? !0, e);
}, Qc = function(e, t, r) {
  return Pr.throttle(t || 300, r ?? !1, e);
};
function p2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ef = { exports: {} };
(function(e) {
  function t() {
    var r = 0, o = 1, i = 2, a = 3, l = 4, s = 5, d = 6, u = 7, c = 8, v = 9, g = 10, m = 11, h = 12, p = 13, x = 14, b = 15, y = 16, S = 17, C = 0, k = 1, R = 2, w = 3, B = 4;
    function F(n, D) {
      return 55296 <= n.charCodeAt(D) && n.charCodeAt(D) <= 56319 && 56320 <= n.charCodeAt(D + 1) && n.charCodeAt(D + 1) <= 57343;
    }
    function A(n, D) {
      D === void 0 && (D = 0);
      var E = n.charCodeAt(D);
      if (55296 <= E && E <= 56319 && D < n.length - 1) {
        var H = E, L = n.charCodeAt(D + 1);
        return 56320 <= L && L <= 57343 ? (H - 55296) * 1024 + (L - 56320) + 65536 : H;
      }
      if (56320 <= E && E <= 57343 && D >= 1) {
        var H = n.charCodeAt(D - 1), L = E;
        return 55296 <= H && H <= 56319 ? (H - 55296) * 1024 + (L - 56320) + 65536 : L;
      }
      return E;
    }
    function V(n, D, E) {
      var H = [n].concat(D).concat([E]), L = H[H.length - 2], K = E, te = H.lastIndexOf(x);
      if (te > 1 && H.slice(1, te).every(function(j) {
        return j == a;
      }) && [a, p, S].indexOf(n) == -1)
        return R;
      var X = H.lastIndexOf(l);
      if (X > 0 && H.slice(1, X).every(function(j) {
        return j == l;
      }) && [h, l].indexOf(L) == -1)
        return H.filter(function(j) {
          return j == l;
        }).length % 2 == 1 ? w : B;
      if (L == r && K == o)
        return C;
      if (L == i || L == r || L == o)
        return K == x && D.every(function(j) {
          return j == a;
        }) ? R : k;
      if (K == i || K == r || K == o)
        return k;
      if (L == d && (K == d || K == u || K == v || K == g))
        return C;
      if ((L == v || L == u) && (K == u || K == c))
        return C;
      if ((L == g || L == c) && K == c)
        return C;
      if (K == a || K == b)
        return C;
      if (K == s)
        return C;
      if (L == h)
        return C;
      var U = H.indexOf(a) != -1 ? H.lastIndexOf(a) - 1 : H.length - 2;
      return [p, S].indexOf(H[U]) != -1 && H.slice(U + 1, -1).every(function(j) {
        return j == a;
      }) && K == x || L == b && [y, S].indexOf(K) != -1 ? C : D.indexOf(l) != -1 ? R : L == l && K == l ? C : k;
    }
    this.nextBreak = function(n, D) {
      if (D === void 0 && (D = 0), D < 0)
        return 0;
      if (D >= n.length - 1)
        return n.length;
      for (var E = O(A(n, D)), H = [], L = D + 1; L < n.length; L++)
        if (!F(n, L - 1)) {
          var K = O(A(n, L));
          if (V(E, H, K))
            return L;
          H.push(K);
        }
      return n.length;
    }, this.splitGraphemes = function(n) {
      for (var D = [], E = 0, H; (H = this.nextBreak(n, E)) < n.length; )
        D.push(n.slice(E, H)), E = H;
      return E < n.length && D.push(n.slice(E)), D;
    }, this.iterateGraphemes = function(n) {
      var D = 0, E = {
        next: (function() {
          var H, L;
          return (L = this.nextBreak(n, D)) < n.length ? (H = n.slice(D, L), D = L, { value: H, done: !1 }) : D < n.length ? (H = n.slice(D), D = n.length, { value: H, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && (E[Symbol.iterator] = function() {
        return E;
      }), E;
    }, this.countGraphemes = function(n) {
      for (var D = 0, E = 0, H; (H = this.nextBreak(n, E)) < n.length; )
        E = H, D++;
      return E < n.length && D++, D;
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
      n == 128658 ? y : 128102 <= n && n <= 128105 ? S : m;
    }
    return this;
  }
  e.exports && (e.exports = t);
})(ef);
var m2 = ef.exports;
const b2 = /* @__PURE__ */ p2(m2), x2 = new b2(), y2 = (e = "") => x2.countGraphemes(e);
function C2(e) {
  return e && typeof e == "object" && typeof e.then == "function";
}
const li = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ Xt({
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
  emits: /* @__PURE__ */ Xt(["blur", "input", "enter"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const o = Bn(e, "modelValue"), i = r;
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
    const u = er("input"), c = () => {
      u.value && u.value.focus();
    };
    function v() {
      let g = o.value;
      e.trim && (g = g.trim()), i("enter", { value: g }), e.blurByEnter && (l = (/* @__PURE__ */ new Date()).getTime(), setTimeout(() => {
        u.value && u.value.blur();
      }, 0));
    }
    return t({ focus: c }), (g, m) => (ke(), nt(ne(Ba), {
      ref: "input",
      "input-props": { autocomplete: "off" },
      type: e.type,
      size: e.size,
      "show-password-on": e.showPassword ? "click" : void 0,
      value: o.value,
      maxlength: e.maxlength,
      "show-count": e.showCount,
      "count-graphemes": e.maxlength != null && e.maxlength > 0 || e.showCount ? ne(y2) : void 0,
      placeholder: e.placeholder,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      clearable: e.clearable,
      autosize: e.type !== "textarea" ? !1 : e.autosize,
      onInput: d,
      onBlur: s,
      onKeyup: $f(v, ["enter"])
    }, Or({ _: 2 }, [
      e.prefixIcon ? {
        name: "prefix",
        fn: Xe(() => [
          on(ne(bo), Af(Df(e.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly", "clearable", "autosize"]));
  }
}), si = /* @__PURE__ */ Object.assign({
  name: "PSelect",
  inheritAttrs: !1
}, {
  __name: "select",
  props: /* @__PURE__ */ Xt({
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
  emits: /* @__PURE__ */ Xt(["update", "change", "search"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = Rn(), o = t, i = Bn(e, "modelValue"), a = qn(function(d) {
      d !== i.value && pt(() => {
        o("change", d);
      }), i.value = d, o("update", d);
    }, 300);
    function l(d) {
      o("search", d);
    }
    const s = e.throttleSearch ? Qc(l) : l;
    return (d, u) => (ke(), nt(ne(rc), {
      class: jt(`${ne(r).class ? ne(r).class : ""}`),
      style: Wt(e.width ? `width:${e.width}` : ""),
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
      "onUpdate:value": ne(a),
      onSearch: ne(s)
    }, {
      empty: Xe(() => [
        on(ne(Er), {
          size: "small",
          description: e.emptyDescription
        }, null, 8, ["description"])
      ]),
      _: 1
    }, 8, ["class", "style", "options", "value", "size", "remote", "filterable", "loading", "placeholder", "disabled", "value-field", "label-field", "clearable", "show-checkmark", "onUpdate:value", "onSearch"]));
  }
}), sr = /* @__PURE__ */ Object.assign({
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
    const r = Rn(), o = Bd(), i = t, a = qn(function() {
      e.waiting || i("click");
    }, 300);
    return (l, s) => (ke(), nt(ne(lr), {
      class: jt([
        ne(r).class ? ne(r).class : "",
        e.size === "xs" ? "p-button-xs" : "",
        e.type === "default" && e.defaultType ? `p-button-default-${e.defaultType}` : "",
        e.waiting ? "p-button-waiting" : ""
      ]),
      style: Wt(ne(r).style || ""),
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
      onClick: ne(a)
    }, Or({
      default: Xe(() => [
        !e.loading || e.loading && !e.loadingWithoutText ? (ke(), nt(ne(o).default, { key: 0 })) : bt("", !0)
      ]),
      _: 2
    }, [
      l.$slots.icon ? {
        name: "icon",
        fn: Xe(() => [
          on(ne(o).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "style", "attr-type", "block", "size", "type", "loading", "ghost", "secondary", "text", "disabled", "onClick"]));
  }
}), w2 = { key: 0 }, S2 = { class: "p-search-item-content" }, B2 = {
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
    return t({ reset: s }), (d, u) => (ke(), lt("div", {
      class: jt([
        "p-search-item",
        e.item._isActionItem ? "p-search-item-action" : "",
        e.lastItemForMulti ? "p-search-item-last" : ""
      ])
    }, [
      !e.item._isActionItem && !e.item._isEmptyItem ? (ke(), lt(je, { key: 0 }, [
        En("div", {
          class: jt({ "p-search-item-label": !0, "p-search-item-colon-label": e.showColon })
        }, [
          on(ne(Si), {
            style: Wt(
              e.oneLineCondition ? `max-width: ${e.labelWidth - 1}px` : { boxSizing: "border-box", width: `${e.labelWidth - 1}px` }
            )
          }, {
            default: Xe(() => [
              Ht(vn(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["style"]),
          e.showColon ? (ke(), lt("span", w2, "：")) : bt("", !0)
        ], 2),
        En("div", S2, [
          e.item.type === "input" ? (ke(), nt(Tn(ne(li)), Rt({
            key: 0,
            modelValue: r.value,
            "onUpdate:modelValue": u[0] || (u[0] = (c) => r.value = c)
          }, e.item.props, { onBlur: o }), null, 16, ["modelValue"])) : bt("", !0),
          e.item.type === "select" ? (ke(), nt(Tn(ne(si)), Rt({
            key: 1,
            modelValue: r.value,
            "onUpdate:modelValue": u[1] || (u[1] = (c) => r.value = c)
          }, e.item.props, { onChange: i }), null, 16, ["modelValue"])) : bt("", !0)
        ])
      ], 64)) : bt("", !0),
      e.item._isActionItem ? (ke(), lt(je, { key: 1 }, [
        on(ne(sr), {
          style: { width: "80px" },
          onClick: a
        }, {
          icon: Xe(() => [
            on(ne(bo), {
              size: "20",
              color: "#ffffff"
            }, {
              default: Xe(() => u[2] || (u[2] = [
                En("svg", {
                  t: "1737784979409",
                  class: "icon",
                  viewBox: "0 0 1024 1024",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "p-id": "6537",
                  width: "200",
                  height: "200"
                }, [
                  En("path", {
                    d: "M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0",
                    "p-id": "6538"
                  })
                ], -1)
              ])),
              _: 1
            })
          ]),
          default: Xe(() => [
            u[3] || (u[3] = Ht("搜索"))
          ]),
          _: 1
        }),
        on(ne(sr), {
          style: { "margin-left": "10px", width: "80px" },
          type: "default",
          onClick: l
        }, Or({
          default: Xe(() => [
            u[5] || (u[5] = Ht("重置"))
          ]),
          _: 2
        }, [
          e.item.showResetBtnIcon ? {
            name: "icon",
            fn: Xe(() => [
              on(ne(bo), { size: "18" }, {
                default: Xe(() => u[4] || (u[4] = [
                  En("svg", {
                    t: "1737871878167",
                    class: "icon",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "6743",
                    width: "200",
                    height: "200"
                  }, [
                    En("path", {
                      d: "M885.58 554.65c-22.86 0-41.39-18.53-41.39-41.39V182.17c0-22.86 18.53-41.39 41.39-41.39s41.39 18.53 41.39 41.39v331.09c-0.01 22.86-18.54 41.39-41.39 41.39zM140.62 885.74c-22.86 0-41.39-18.53-41.39-41.39V513.26c0-22.86 18.53-41.39 41.39-41.39s41.39 18.53 41.39 41.39v331.09c0 22.86-18.53 41.39-41.39 41.39z",
                      "p-id": "6744"
                    }),
                    En("path", {
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
      ], 64)) : bt("", !0)
    ], 2));
  }
}, k2 = {
  class: "p-search",
  ref: "search"
}, R2 = /* @__PURE__ */ Object.assign({
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
      const B = {};
      e.model.forEach((F) => {
        F.slot || F.field && (Object.hasOwn(F, "defaultValue") ? B[F.field] = F.defaultValue : F.type === "input" && (B[F.field] = ""));
      }), i.value = B;
    };
    a();
    const l = I([]), s = I({}), d = { _isActionItem: !0, width: 170, showResetBtnIcon: e.showResetBtnIcon }, u = { _isEmptyItem: !0 }, c = er("search"), v = $(() => s.value.singleLine || l.value.length === 2 && l.value[1].length === 1), g = $(() => {
      let B = e.labelWidth || 59;
      return B = Math.min(B, e.maxLabelWidth), v.value === !1 ? B : e.maxLabelWidth;
    });
    function m() {
      if (!c.value || !e.model || e.model.length === 0) return;
      const B = Math.floor(c.value.getBoundingClientRect().width);
      if (B >= o * e.model.length + d.width) {
        l.value = [[...e.model, d]], s.value = { singleLine: !0 };
        return;
      }
      const F = Math.floor(B / o);
      if (e.visibleLine <= 0) {
        const A = [];
        e.model.forEach((O, n) => {
          n % F === 0 && A.push([]), A[A.length - 1].push(O);
        });
        const V = A[A.length - 1].length;
        if (V === F)
          A.push([d]);
        else {
          let O = 0;
          const n = F - V;
          for (; O < n; )
            O === n - 1 ? A[A.length - 1].push(d) : A[A.length - 1].push(u), O += 1;
        }
        l.value = A, s.value = { multiLine: !0 };
        return;
      }
    }
    Pt(() => {
      m(), g2(
        window,
        "resize",
        Qc(function() {
          m();
        })
      );
    });
    function h(B, F) {
      B && (i.value[B] = F);
    }
    const p = r;
    function x(B, F = !1) {
      if (typeof B != "object" || B === null) return {};
      const A = (V) => F ? !V && V !== !1 && V !== 0 : V == null || V === "";
      return Object.fromEntries(Object.entries(B).filter(([V, O]) => !A(O)));
    }
    function b() {
      return x(i.value);
    }
    const y = er("searchItem");
    function S() {
      return y.value.forEach((B) => {
        B.reset();
      }), a(), b();
    }
    let C = 0;
    function k() {
      C = (/* @__PURE__ */ new Date()).getTime(), p("search", b(), { type: "search" });
    }
    function R() {
      const B = S();
      pt(() => {
        C = (/* @__PURE__ */ new Date()).getTime(), p("reset", B, { type: "reset" });
      });
    }
    function w() {
      setTimeout(() => {
        let B = !1;
        const F = (/* @__PURE__ */ new Date()).getTime();
        C != 0 && F >= C && F - C < 200 && (B = !0), p("change", b(), { type: "change", isActionTriggered: B });
      }, 0);
    }
    return t({ getSearchData: b, resetSearchData: S }), (B, F) => (ke(), lt("div", k2, [
      (ke(!0), lt(je, null, to(l.value, (A, V) => (ke(), lt("div", {
        key: V,
        class: "p-search-lilne",
        style: Wt(V > 0 ? "margin-top:12px" : "")
      }, [
        (ke(!0), lt(je, null, to(A, (O, n) => (ke(), nt(B2, {
          ref_for: !0,
          ref: "searchItem",
          key: O.field || n,
          oneLineCondition: v.value,
          labelWidth: g.value,
          showColon: e.showColon,
          item: O,
          lastItemForMulti: s.value.multiLine && !O._isActionItem && n === A.length - 1,
          searchData: i.value,
          doSearch: k,
          doReset: R,
          doChange: w,
          updateSearchData: h,
          style: Wt(
            s.value.singleLine && !O._isActionItem ? `width: ${ne(o)}px` : s.value.multiLine ? "flex:1" : ""
          )
        }, null, 8, ["oneLineCondition", "labelWidth", "showColon", "item", "lastItemForMulti", "searchData", "style"]))), 128))
      ], 4))), 128))
    ], 512));
  }
}), Oa = /* @__PURE__ */ Object.assign({
  name: "PSwitch",
  inheritAttrs: !1
}, {
  __name: "switch",
  props: /* @__PURE__ */ Xt({
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
  emits: /* @__PURE__ */ Xt(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = Bn(e, "modelValue"), o = Rn(), i = t, a = qn(function(l) {
      e.readonly || (r.value = l, i("change", l));
    }, 300);
    return (l, s) => (ke(), lt(je, null, [
      on(ne(h2), {
        class: jt([ne(o).class || "", e.readonly ? "p-switch-readonly" : ""]),
        style: Wt(ne(o).style || ""),
        size: e.size,
        value: r.value,
        loading: e.loading,
        disabled: e.disabled,
        "checked-value": e.checkedValue,
        "unchecked-value": e.uncheckedValue,
        "on-update:value": ne(a)
      }, Or({ _: 2 }, [
        !e.outside && e.checkedText != null && e.checkedText !== "" ? {
          name: "checked",
          fn: Xe(() => [
            Ht(vn(e.checkedText), 1)
          ]),
          key: "0"
        } : void 0,
        !e.outside && e.uncheckedText != null && e.uncheckedText !== "" ? {
          name: "unchecked",
          fn: Xe(() => [
            Ht(vn(e.uncheckedText), 1)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["class", "style", "size", "value", "loading", "disabled", "checked-value", "unchecked-value", "on-update:value"]),
      e.outside && e.checkedText != null && e.checkedText !== "" && r.value === e.checkedValue ? (ke(), lt("span", {
        key: 0,
        class: jt(["p-switch-outside-text", e.disabled ? "p-switch-outside-text-disabled" : ""])
      }, vn(e.checkedText), 3)) : bt("", !0),
      e.outside && e.uncheckedText != null && e.uncheckedText !== "" && r.value === e.uncheckedValue ? (ke(), lt("span", {
        key: 1,
        class: jt(["p-switch-outside-text", e.disabled ? "p-switch-outside-text-disabled" : ""])
      }, vn(e.uncheckedText), 3)) : bt("", !0)
    ], 64));
  }
}), F2 = {
  key: 1,
  style: { flex: "1" }
}, P2 = {
  key: 2,
  autocomplete: "off",
  type: "submit",
  style: { display: "none" }
}, z2 = /* @__PURE__ */ Object.assign({
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
    const o = $(() => {
      if (!e.inline || e.inline && e.inlineSize.length <= 0 || e.model.length <= 0) return null;
      const y = [], S = [];
      if (e.inlineSize.length === 1) {
        if (e.model.forEach((C, k) => {
          k % e.inlineSize[0] === 0 && S.push([]), S[S.length - 1].push(C);
        }), S[S.length - 1].length < e.inlineSize[0]) {
          let C = e.inlineSize[0] - S[S.length - 1].length, k = 0;
          for (; k < C; )
            S[S.length - 1].push({ isInlinePlaceholder: !0 }), k++;
        }
      } else {
        let C = 0, k = 0;
        for (let w = 0; w < e.inlineSize.length - 1; w++) {
          const B = e.inlineSize[w];
          if (k += B, C < e.model.length) {
            const F = e.model.slice(C, C + B);
            if (F.length > 0) {
              if (F.length < B) {
                let A = B - F.length, V = 0;
                for (; V < A; )
                  F.push({ isInlinePlaceholder: !0 }), V++;
              }
              y.push(F);
            }
            C += B;
          }
        }
        const R = e.inlineSize[e.inlineSize.length - 1];
        if (e.model.filter((w, B) => B >= k).forEach((w, B) => {
          B % R === 0 && S.push([]), S[S.length - 1].push(w);
        }), S.length > 0 && S[S.length - 1].length < R) {
          let w = R - S[S.length - 1].length, B = 0;
          for (; B < w; )
            S[S.length - 1].push({ isInlinePlaceholder: !0 }), B++;
        }
      }
      return [...y, ...S];
    }), i = function() {
      const y = {};
      return e.model.forEach((S) => {
        S.slot || !S.field || S.placeholder || (y[S.field] = S.defaultValue);
      }), I(y);
    }(), a = function() {
      return e.feedbackSizeClass ? ["s"].includes(e.feedbackSizeClass) ? `p-form-item-feedback-${e.feedbackSizeClass}` : e.feedbackSizeClass : "";
    }();
    function l() {
      const y = {};
      return e.model.forEach((S) => {
        !S.field || S.placeholder || S.slot && (y[S.field] = Tf(S.value));
      }), { ...i.value, ...y };
    }
    const s = r, d = er("form"), u = (y = !0) => (y && document.activeElement && document.activeElement.blur(), d.value.validate().then(() => ({ formData: l(), valid: !0 })).catch((S) => ({ formData: l(), valid: !1, errors: S }))), c = qn(function() {
      u(!0).then((y) => {
        s("submit", y);
      });
    }), v = er("formItem");
    function g(y = "") {
      if (!y) {
        d.value.restoreValidation();
        return;
      }
      const S = v.value.find((C) => C.path === y);
      S && S.restoreValidation();
    }
    function m(y) {
      y && e.rules && e.rules[y] && (e.rules[y].trigger && e.rules[y].trigger.includes("input") || g(y));
    }
    function h(y, S) {
      var k, R;
      const C = y.field;
      C && e.rules && e.rules[C] && ((k = y.props) != null && k.filterable) && g(C), (R = y.event) != null && R.search && y.event.search(S);
    }
    function p(y, S) {
      var k;
      const C = y.field;
      C && e.rules && e.rules[C] && (!e.rules[C].trigger || e.rules[C].trigger && e.rules[C].trigger.includes("change") === !1) && g(C), (k = y.event) != null && k.update && y.event.update(S);
    }
    let x = {};
    e.model.forEach((y) => {
      !y.slot && y.ref === !0 && (x[y.field] = er(`form-item-${y.field}`));
    });
    function b(y = "") {
      return y && x[y] ? x[y].value[0] : null;
    }
    return ui(() => {
      x = null;
    }), t({ validate: u, restoreValidation: g, getFormValue: l, getChild: b }), (y, S) => (ke(), nt(ne(gS), {
      ref: "form",
      class: jt([e.inline ? "p-form-inline" : ""]),
      "show-label": e.showLabel,
      "label-placement": e.labelPlacement,
      "label-width": "auto",
      "require-mark-placement": "left",
      "show-require-mark": e.showRequireMark,
      "label-align": e.labelPlacement === "left" ? "right" : "left",
      model: ne(i),
      rules: e.rules,
      inline: e.inline,
      onSubmit: Ef(ne(c), ["prevent"])
    }, {
      default: Xe(() => [
        !e.inline || e.inline && e.inlineSize.length <= 0 ? (ke(!0), lt(je, { key: 0 }, to(e.model, (C, k) => (ke(), lt(je, {
          key: C.field || k
        }, [
          C.placeholder ? bt("", !0) : (ke(), nt(ne(bd), {
            key: 0,
            ref_for: !0,
            ref: "formItem",
            style: Wt(C.itemStyle == null ? e.itemStyle : C.itemStyle),
            label: C.label,
            path: C.field,
            "feedback-class": ne(a),
            first: !0,
            "show-require-mark": C.showRequireMark == null ? e.showRequireMark : !!C.showRequireMark
          }, {
            default: Xe(() => [
              C.slot === !0 ? Qt(y.$slots, C.field, { key: 0 }) : (ke(), lt(je, { key: 1 }, [
                C.type === "input" ? (ke(), nt(Tn(ne(li)), Rt({
                  key: 0,
                  ref_for: !0,
                  ref: `form-item-${C.field}`,
                  modelValue: ne(i)[C.field],
                  "onUpdate:modelValue": (R) => ne(i)[C.field] = R
                }, { disabled: e.disabled, readonly: e.readonly, ...C.props }, {
                  onInput: (R) => m(C.field)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : C.type === "switch" ? (ke(), nt(Tn(ne(Oa)), Rt({
                  key: 1,
                  ref_for: !0,
                  ref: `form-item-${C.field}`,
                  modelValue: ne(i)[C.field],
                  "onUpdate:modelValue": (R) => ne(i)[C.field] = R
                }, { disabled: e.disabled, readonly: e.readonly, ...C.props }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C.type === "select" ? (ke(), nt(Tn(ne(si)), Rt({
                  key: 2,
                  ref_for: !0,
                  ref: `form-item-${C.field}`,
                  modelValue: ne(i)[C.field],
                  "onUpdate:modelValue": (R) => ne(i)[C.field] = R
                }, { disabled: e.disabled, ...C.props }, {
                  onSearch: (R) => h(C, R),
                  onUpdate: (R) => p(C, R)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onSearch", "onUpdate"])) : bt("", !0)
              ], 64))
            ]),
            _: 2
          }, 1032, ["style", "label", "path", "feedback-class", "show-require-mark"]))
        ], 64))), 128)) : bt("", !0),
        e.inline && e.inlineSize.length > 0 && o.value ? (ke(!0), lt(je, { key: 1 }, to(o.value, (C, k) => (ke(), lt("div", {
          key: k,
          class: jt(["p-form-inline-item", e.inlineClass[k] ? e.inlineClass[k] : ""])
        }, [
          (ke(!0), lt(je, null, to(C, (R, w) => (ke(), lt(je, {
            key: R.field || k + "-" + w
          }, [
            !R.isInlinePlaceholder && !R.placeholder ? (ke(), nt(ne(bd), {
              key: 0,
              ref_for: !0,
              ref: "formItem",
              style: Wt(R.itemStyle == null ? e.itemStyle : R.itemStyle),
              label: R.label,
              path: R.field,
              "feedback-class": ne(a),
              first: !0,
              "show-require-mark": R.showRequireMark == null ? e.showRequireMark : !!R.showRequireMark
            }, {
              default: Xe(() => [
                R.slot === !0 ? Qt(y.$slots, R.field, { key: 0 }) : (ke(), lt(je, { key: 1 }, [
                  R.type === "input" ? (ke(), nt(Tn(ne(li)), Rt({
                    key: 0,
                    ref_for: !0,
                    ref: `form-item-${R.field}`,
                    modelValue: ne(i)[R.field],
                    "onUpdate:modelValue": (B) => ne(i)[R.field] = B
                  }, { disabled: e.disabled, readonly: e.readonly, ...R.props }, {
                    onInput: (B) => m(R.field)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : R.type === "switch" ? (ke(), nt(Tn(ne(Oa)), Rt({
                    key: 1,
                    ref_for: !0,
                    ref: `form-item-${R.field}`,
                    modelValue: ne(i)[R.field],
                    "onUpdate:modelValue": (B) => ne(i)[R.field] = B
                  }, { disabled: e.disabled, readonly: e.readonly, ...R.props }), null, 16, ["modelValue", "onUpdate:modelValue"])) : R.type === "select" ? (ke(), nt(Tn(ne(si)), Rt({
                    key: 2,
                    ref_for: !0,
                    ref: `form-item-${R.field}`,
                    modelValue: ne(i)[R.field],
                    "onUpdate:modelValue": (B) => ne(i)[R.field] = B
                  }, { disabled: e.disabled, ...R.props }, {
                    onSearch: (B) => h(R, B),
                    onUpdate: (B) => p(R, B)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onSearch", "onUpdate"])) : bt("", !0)
                ], 64))
              ]),
              _: 2
            }, 1032, ["style", "label", "path", "feedback-class", "show-require-mark"])) : (ke(), lt("div", F2))
          ], 64))), 128))
        ], 2))), 128)) : bt("", !0),
        e.virtualSubmit ? (ke(), lt("button", P2, "virtual button")) : bt("", !0),
        Qt(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "show-label", "label-placement", "show-require-mark", "label-align", "model", "rules", "inline", "onSubmit"]));
  }
}), $2 = /* @__PURE__ */ Object.assign({
  name: "PRadio",
  inheritAttrs: !1
}, {
  __name: "radio",
  props: /* @__PURE__ */ Xt({
    size: { type: String, default: "medium" },
    disabled: { type: Boolean, default: !1 },
    val: { type: [String, Number, Boolean], default: "" }
  }, {
    modelValue: { type: [String, Number, Boolean] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Xt(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = Bn(e, "modelValue"), o = Rn(), i = t, a = qn(function(l) {
      l && (r.value = e.val, i("change", e.val));
    }, 300);
    return (l, s) => (ke(), nt(ne(Sl), {
      style: Wt(ne(o).style || ""),
      checked: r.value === e.val,
      size: e.size,
      disabled: e.disabled,
      value: e.val,
      "on-update:checked": ne(a)
    }, {
      default: Xe(() => [
        Qt(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "checked", "size", "disabled", "value", "on-update:checked"]));
  }
}), A2 = /* @__PURE__ */ Object.assign({
  name: "PCheckbox",
  inheritAttrs: !1
}, {
  __name: "checkbox",
  props: /* @__PURE__ */ Xt({
    size: { type: String, default: "medium" },
    disabled: { type: Boolean, default: !1 },
    checkedValue: { type: [String, Number, Boolean], default: !0 },
    uncheckedValue: { type: [String, Number, Boolean], default: !1 },
    val: { type: [String, Number] }
  }, {
    modelValue: { type: [String, Number, Boolean] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ Xt(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = Bn(e, "modelValue"), o = Rn(), i = t, a = qn(function(l) {
      r.value = l ? e.checkedValue : e.uncheckedValue, setTimeout(() => {
        i("change", r.value);
      }, 0);
    }, 300);
    return (l, s) => (ke(), nt(ne(wi), {
      style: Wt(ne(o).style || ""),
      checked: r.value === e.checkedValue,
      size: e.size,
      disabled: e.disabled,
      "checked-value": !0,
      "unchecked-value": !1,
      value: e.val,
      "on-update:checked": ne(a)
    }, {
      default: Xe(() => [
        Qt(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "checked", "size", "disabled", "value", "on-update:checked"]));
  }
}), D2 = /* @__PURE__ */ Object.assign({
  name: "PCheckboxGroup",
  inheritAttrs: !1
}, {
  __name: "checkbox-group",
  props: {
    modelValue: { type: Array, default: [] },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ Xt(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = Bn(e, "modelValue"), o = Rn(), i = t, a = qn(function(l, s) {
      r.value = l || [], setTimeout(() => {
        i("change", r.value, s);
      }, 0);
    }, 300);
    return (l, s) => (ke(), nt(ne(Ju), {
      class: "p-checkbox-group",
      style: Wt(ne(o).style || ""),
      value: r.value,
      "on-update:value": ne(a)
    }, {
      default: Xe(() => [
        Qt(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "value", "on-update:value"]));
  }
}), E2 = /* @__PURE__ */ Object.assign({
  name: "PRadioGroup",
  inheritAttrs: !1
}, {
  __name: "radio-group",
  props: {
    modelValue: { type: [String, Number, Boolean], default: null },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ Xt(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = Bn(e, "modelValue"), o = Rn(), i = t, a = qn(function(l) {
      r.value = l, setTimeout(() => {
        i("change", r.value);
      }, 0);
    }, 300);
    return (l, s) => (ke(), nt(ne(gc), {
      class: "p-radio-group",
      style: Wt(ne(o).style || ""),
      value: r.value,
      "on-update:value": ne(a)
    }, {
      default: Xe(() => [
        Qt(l.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "value", "on-update:value"]));
  }
}), T2 = /* @__PURE__ */ ee((e, {
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
  }, o = er("table");
  return t({
    scrollTo: (i = {}) => {
      o && o.value && o.value.scrollTo && o.value.scrollTo(i);
    }
  }), () => f(rw, {
    ...r,
    ...e,
    ref: "table"
  }, {
    empty: () => f(Er, {
      size: "medium",
      description: "暂无数据"
    })
  });
}, {
  name: "PDataTable",
  inheritAttrs: !0
}), O2 = {
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
    return (o, i) => (ke(), lt(je, null, [
      e.negativeText ? (ke(), nt(ne(sr), {
        key: 0,
        size: "xs",
        type: "default",
        "default-type": e.type,
        onClick: t
      }, {
        default: Xe(() => [
          Ht(vn(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type"])) : bt("", !0),
      e.positiveText ? (ke(), nt(ne(sr), {
        key: 1,
        size: "xs",
        type: e.type,
        onClick: r
      }, {
        default: Xe(() => [
          Ht(vn(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type"])) : bt("", !0)
    ], 64));
  }
}, M2 = /* @__PURE__ */ ee((e, {
  emit: t
}) => {
  const r = Bd(), o = I(), i = () => {
    o.value.setShow(!1);
  };
  return () => f(l2, {
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
    action: () => f(O2, {
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
}), I2 = /* @__PURE__ */ Object.assign({
  name: "PPagination",
  inheritAttrs: !1
}, {
  __name: "pagination",
  props: /* @__PURE__ */ Xt({
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
  emits: /* @__PURE__ */ Xt(["changePage", "changePageSize"], ["update:page", "update:pageSize"]),
  setup(e, { emit: t }) {
    const r = Rn(), o = Bn(e, "page"), i = Bn(e, "pageSize"), a = t;
    function l(d) {
      o.value = d, a("changePage", d);
    }
    function s(d) {
      i.value = d, a("changePageSize", d);
    }
    return (d, u) => (ke(), nt(ne(ac), {
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
      style: Wt(ne(r).style)
    }, Or({ _: 2 }, [
      e.simple ? void 0 : {
        name: "prefix",
        fn: Xe(({ itemCount: c }) => [
          Ht("共 " + vn(c) + " 条记录", 1)
        ]),
        key: "0"
      },
      e.showQuickJumper && !e.simple ? {
        name: "suffix",
        fn: Xe(() => [
          u[0] || (u[0] = Ht("页"))
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
function L2(e, t = 200) {
  const r = I(!1), o = I(!1), i = $(() => !r.value && !o.value), a = I(!1), l = I(), s = I();
  let d;
  return He(() => ne(e), (u) => {
    if (r.value = !1, o.value = !1, l.value = null, !u) {
      s.value = null, d && clearTimeout(d), d = null;
      return;
    }
    ne(t) > 0 ? (a.value = !1, d && clearTimeout(d), d = setTimeout(() => {
      a.value = !0;
    }, Number(ne(t)))) : a.value = !0, u.then((c) => {
      u === ne(e) && (s.value = c, o.value = !0);
    }).catch((c) => {
      u === ne(e) && (l.value = c, r.value = !0);
    });
  }, { immediate: !0 }), { isPending: i, isRejected: r, isResolved: o, isDelayElapsed: a, error: l, data: s };
}
const tf = ({ delay: e = 300, minPendingTime: t = 500, loadingValue: r = !1 } = {}) => {
  let o = 0, i = null;
  const a = () => {
    i && (clearTimeout(i), i = null);
  }, l = I(!!r), s = I(!!r);
  let d = null;
  const u = (c) => (l.value = c, new Promise((v) => {
    c === !0 ? v() : d = v;
  }));
  return He(
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
  ), ui(() => {
    d = null, a();
  }), { loading: s, waiting: l, setLoadingStatus: u };
}, N2 = {
  key: 1,
  class: "p-promised-loading"
}, H2 = /* @__PURE__ */ Object.assign({
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
    const t = $(() => ["small", "medium", "large"].includes(e.loadingSize) ? e.loadingSize : "medium"), r = $(() => {
      const y = { position: "absolute", left: "50%", zIndex: 2 };
      return e.loadingTop == null ? y.top = "50%" : y.top = `${e.loadingTop}px`, t.value === "small" ? (y.marginLeft = "-14px", e.loadingTop == null && (y.marginTop = "-14px")) : t.value === "medium" ? (y.marginLeft = "-17px", e.loadingTop == null && (y.marginTop = "-17px")) : t.value === "large" && (y.marginLeft = "-20px", e.loadingTop == null && (y.marginTop = "-20px")), y;
    }), o = $(() => e.nilType === "border" ? "p-promised-empty-border" : e.nilType === "line" ? "p-promised-empty-line" : ""), i = Rn(), a = ie(() => e.promise), { data: l, error: s, isPending: d, isDelayElapsed: u, isResolved: c, isRejected: v } = L2(a, 0), { loading: g, waiting: m } = tf(), h = $(() => !g.value && !d.value && !s.value && b(l.value));
    He(
      () => d.value && u.value,
      (y) => {
        m.value = y;
      },
      { immediate: !1 }
    );
    const p = I(!1);
    He(v, (y) => {
      y === !0 && p.value === !1 && (p.value = y);
    }), He(c, (y) => {
      y === !0 && p.value === !0 && (p.value = !1);
    });
    function x(y) {
      let S = !0;
      if (typeof y == "object") {
        for (const C in y)
          if (typeof y[C] == "object" ? S = x(y[C]) : S = y[C] === "" || y[C] === null || y[C] === void 0, S === !1)
            break;
        return S;
      } else
        return y === "" || y === null || y === void 0;
    }
    function b(y) {
      return y == null || y === "" ? !0 : x(e.dataField ? y[e.dataField] : y);
    }
    return (y, S) => (ke(), lt("div", {
      class: jt(ne(i).class ? ne(i).class : ""),
      style: Wt(e.contentStyle)
    }, [
      !ne(g) && !ne(d) && !ne(s) && !b(ne(l)) || ne(d) && ne(m) && !p.value && !ne(s) && !b(ne(l)) || h.value && e.defaultSlotAsEmpty ? Qt(y.$slots, "default", {
        key: 0,
        data: ne(l),
        isEmpty: h.value
      }) : bt("", !0),
      ne(g) ? (ke(), lt("div", N2, [
        on(ne(Jc), {
          size: t.value,
          style: Wt(r.value)
        }, null, 8, ["size", "style"]),
        S[0] || (S[0] = En("div", { class: "p-promised-loading-mask" }, null, -1))
      ])) : bt("", !0),
      h.value && !e.defaultSlotAsEmpty ? (ke(), lt(je, { key: 2 }, [
        y.$slots.emptyCustomize ? Qt(y.$slots, "emptyCustomize", { key: 1 }) : (ke(), nt(ne(Er), {
          key: 0,
          class: jt(o.value),
          description: e.emptyDesc,
          size: "medium"
        }, Or({ _: 2 }, [
          y.$slots.emptyExtra ? {
            name: "extra",
            fn: Xe(() => [
              Qt(y.$slots, "emptyExtra")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["class", "description"]))
      ], 64)) : bt("", !0),
      !ne(g) && !ne(d) && ne(s) ? (ke(), nt(ne(Er), {
        key: 3,
        class: jt(o.value),
        description: ne(s).message || e.errorDefaultDesc,
        size: "medium"
      }, null, 8, ["class", "description"])) : bt("", !0)
    ], 6));
  }
});
function K2(e = ["loadingBar", "message"], t = {}) {
  var i;
  const { loadingBar: r, message: o } = Kc(e, {
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
const nf = {
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
    const { loading: t, waiting: r, setLoadingStatus: o } = tf();
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
        if (C2(u)) {
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
    return (s, d) => (ke(), lt(je, null, [
      e.negativeText ? (ke(), nt(ne(sr), {
        key: 0,
        size: "small",
        type: "default",
        "default-type": e.type,
        disabled: ne(t),
        onClick: a
      }, {
        default: Xe(() => [
          Ht(vn(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type", "disabled"])) : bt("", !0),
      e.positiveText ? (ke(), nt(ne(sr), {
        key: 1,
        size: "small",
        type: e.type,
        loading: ne(t),
        loadingWithoutText: !1,
        onClick: l
      }, {
        default: Xe(() => [
          Ht(vn(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type", "loading"])) : bt("", !0)
    ], 64));
  }
}, { dialog: j2 } = Kc(["dialog"], {
  configProviderProps: { inlineThemeDisabled: !0 }
}), _2 = j2;
function rf(e) {
  return typeof e == "string" ? function() {
    return f("p", { innerHTML: e });
  } : Array.isArray(e) ? function() {
    return f(
      "div",
      e.map((t) => f("p", { innerHTML: t }))
    );
  } : e;
}
const U2 = () => {
  let e = null, t = null, r = null, o = null;
  const i = zc(), a = (u = {}, c = { width: 430 }, v) => {
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
      return f(nf, {
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
    }), g.content = rf(u.content), i.create(g);
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
  return ui(() => {
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
function q2() {
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
      return f(nf, {
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
    }), d.content = rf(a.content), d.onClose = function() {
      a.onClose && a.onClose(), e && e.destroy(), t && t.destroy(), r && r.destroy(), o && o.destroy(), e = null, t = null, r = null, o = null;
    }, _2.create(d);
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
const G2 = () => {
  const e = Tc();
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
}, X2 = {
  install: (e, t = {}) => {
    const { prefix: r = "p" } = t;
    e.component(`${r}-practical`, v2), e.component(`${r}-search`, R2), e.component(`${r}-form`, z2), e.component(`${r}-input`, li), e.component(`${r}-select`, si), e.component(`${r}-switch`, Oa), e.component(`${r}-radio`, $2), e.component(`${r}-radio-group`, E2), e.component(`${r}-checkbox`, A2), e.component(`${r}-checkbox-group`, D2), e.component(`${r}-button`, sr), e.component(`${r}-data-table`, T2), e.component(`${r}-popconfirm`, M2), e.component(`${r}-pagination`, I2), e.component(`${r}-promised`, H2), e.component(`${r}-icon-wrapper`, r2), e.component(`${r}-icon`, bo), e.component(`${r}-input-group`, X1), e.component(`${r}-input-group-label`, J1), e.component(`${r}-popover`, br), e.component(`${r}-spin`, Jc), e.component(`${r}-collapse`, Sy), e.component(`${r}-collapse-item`, Ry), e.component(`${r}-dropdown`, Sc), e.component(`${r}-tooltip`, pc);
  }
};
export {
  K2 as createDiscreteFn,
  qn as debounce,
  X2 as default,
  q2 as dialogDiscrete,
  Qc as throttle,
  tf as useDelayLoading,
  U2 as useDialog,
  G2 as useModal
};
