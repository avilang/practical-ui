import { ref as L, readonly as Vn, watch as Me, computed as E, getCurrentInstance as Ao, onMounted as $t, onBeforeUnmount as Bt, onBeforeMount as pr, reactive as Eo, inject as pe, onActivated as Td, onDeactivated as Ka, createTextVNode as jt, Fragment as je, Comment as qa, defineComponent as J, provide as ze, withDirectives as rn, toRef as ie, h as f, Teleport as yi, nextTick as ht, renderSlot as Zt, mergeProps as Pt, isVNode as _f, shallowRef as Od, watchEffect as rt, Transition as It, TransitionGroup as Vf, vShow as Un, cloneVNode as Md, Text as Uf, markRaw as Hl, onUnmounted as Id, normalizeClass as zt, createApp as Kf, unref as re, openBlock as Be, createBlock as et, withCtx as We, createVNode as Yt, onScopeDispose as Ci, mergeModels as At, useAttrs as Bn, useModel as fn, useTemplateRef as ar, withKeys as qf, createSlots as mr, normalizeProps as Gf, guardReactiveProps as Xf, normalizeStyle as Ut, useSlots as Ga, createCommentVNode as yt, createElementBlock as dt, createElementVNode as Hn, toDisplayString as cn, resolveDynamicComponent as jn, renderList as ho, withModifiers as Yf, toValue as Zf } from "vue";
function Jf(e) {
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
  function s(h) {
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
  function l(h) {
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
          return b.map((P) => `&${(x == null ? void 0 : x.bPrefix) || t}${p.bem.b}${C !== void 0 ? `${r}${C}` : ""}${o}${P}`).join(", ");
        }
        const B = p.bem.els;
        if (B !== null) {
          if (process.env.NODE_ENV !== "production" && B.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${h}) is invalid, using modifier inside multiple elements is not allowed`);
          return y(B[0]);
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
    cB: (...h) => i(s(h[0]), h[1], h[2]),
    cE: (...h) => i(l(h[0]), h[1], h[2]),
    cM: (...h) => i(d(h[0]), h[1], h[2]),
    cNotM: (...h) => i(u(h[0]), h[1], h[2])
  }), a;
}
function Qf(e) {
  let t = 0;
  for (let r = 0; r < e.length; ++r)
    e[r] === "&" && ++t;
  return t;
}
const Ld = /\s*,(?![^(]*\))\s*/g, eh = /\s+/g;
function th(e, t) {
  const r = [];
  return t.split(Ld).forEach((o) => {
    let i = Qf(o);
    if (i) {
      if (i === 1) {
        e.forEach((s) => {
          r.push(o.replace("&", s));
        });
        return;
      }
    } else {
      e.forEach((s) => {
        r.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (s && s + " ") + o
        );
      });
      return;
    }
    let a = [
      o
    ];
    for (; i--; ) {
      const s = [];
      a.forEach((l) => {
        e.forEach((d) => {
          s.push(l.replace("&", d));
        });
      }), a = s;
    }
    a.forEach((s) => r.push(s));
  }), r;
}
function nh(e, t) {
  const r = [];
  return t.split(Ld).forEach((o) => {
    e.forEach((i) => {
      r.push((i && i + " ") + o);
    });
  }), r;
}
function rh(e) {
  let t = [""];
  return e.forEach((r) => {
    r = r && r.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    r && (r.includes("&") ? t = th(t, r) : t = nh(t, r));
  }), t.join(", ").replace(eh, " ");
}
function jl(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function wi(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function oh(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function Ho(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const ih = /[A-Z]/g;
function Nd(e) {
  return e.replace(ih, (t) => "-" + t.toLowerCase());
}
function ah(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((r) => t + `  ${Nd(r[0])}: ${r[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function lh(e, t, r) {
  return typeof e == "function" ? e({
    context: t.context,
    props: r
  }) : e;
}
function Wl(e, t, r, o) {
  if (!t)
    return "";
  const i = lh(t, r, o);
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
  const s = e ? [
    e + " {"
  ] : [];
  return a.forEach((l) => {
    const d = i[l];
    if (l === "raw") {
      s.push(`
` + d + `
`);
      return;
    }
    l = Nd(l), d != null && s.push(`  ${l}${ah(d)}`);
  }), e && s.push("}"), s.join(`
`);
}
function pa(e, t, r) {
  e && e.forEach((o) => {
    if (Array.isArray(o))
      pa(o, t, r);
    else if (typeof o == "function") {
      const i = o(t);
      Array.isArray(i) ? pa(i, t, r) : i && r(i);
    } else o && r(o);
  });
}
function Hd(e, t, r, o, i) {
  const a = e.$;
  let s = "";
  if (!a || typeof a == "string")
    Ho(a) ? s = a : t.push(a);
  else if (typeof a == "function") {
    const u = a({
      context: o.context,
      props: i
    });
    Ho(u) ? s = u : t.push(u);
  } else if (a.before && a.before(o.context), !a.$ || typeof a.$ == "string")
    Ho(a.$) ? s = a.$ : t.push(a.$);
  else if (a.$) {
    const u = a.$({
      context: o.context,
      props: i
    });
    Ho(u) ? s = u : t.push(u);
  }
  const l = rh(t), d = Wl(l, e.props, o, i);
  s ? r.push(`${s} {`) : d.length && r.push(d), e.children && pa(e.children, {
    context: o.context,
    props: i
  }, (u) => {
    if (typeof u == "string") {
      const c = Wl(l, { raw: u }, o, i);
      r.push(c);
    } else
      Hd(u, t, r, o, i);
  }), t.pop(), s && r.push("}"), a && a.after && a.after(o.context);
}
function sh(e, t, r) {
  const o = [];
  return Hd(e, [], o, t, r), o.join(`

`);
}
function Co(e) {
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
function dh(e, t, r, o) {
  const { els: i } = t;
  if (r === void 0)
    i.forEach(jl), t.els = [];
  else {
    const a = wi(r, o);
    a && i.includes(a) && (jl(a), t.els = i.filter((s) => s !== a));
  }
}
function _l(e, t) {
  e.push(t);
}
function uh(e, t, r, o, i, a, s, l, d) {
  let u;
  if (r === void 0 && (u = t.render(o), r = Co(u)), d) {
    d.adapter(r, u ?? t.render(o));
    return;
  }
  l === void 0 && (l = document.head);
  const c = wi(r, l);
  if (c !== null && !a)
    return c;
  const v = c ?? oh(r);
  if (u === void 0 && (u = t.render(o)), v.textContent = u, c !== null)
    return c;
  if (s) {
    const g = l.querySelector(`meta[name="${s}"]`);
    if (g)
      return l.insertBefore(v, g), _l(t.els, v), v;
  }
  return i ? l.insertBefore(v, l.querySelector("style, link")) : l.appendChild(v), _l(t.els, v), v;
}
function ch(e) {
  return sh(this, this.instance, e);
}
function fh(e = {}) {
  const { id: t, ssr: r, props: o, head: i = !1, force: a = !1, anchorMetaName: s, parent: l } = e;
  return uh(this.instance, this, t, o, i, a, s, l, r);
}
function hh(e = {}) {
  const { id: t, parent: r } = e;
  dh(this.instance, this, t, r);
}
const jo = function(e, t, r, o) {
  return {
    instance: e,
    $: t,
    props: r,
    children: o,
    els: [],
    render: ch,
    mount: fh,
    unmount: hh
  };
}, vh = function(e, t, r, o) {
  return Array.isArray(t) ? jo(e, { $: null }, null, t) : Array.isArray(r) ? jo(e, t, null, r) : Array.isArray(o) ? jo(e, t, r, o) : jo(e, t, r, null);
};
function jd(e = {}) {
  const t = {
    c: (...r) => vh(t, ...r),
    use: (r, ...o) => r.install(t, ...o),
    find: wi,
    context: {},
    config: e
  };
  return t;
}
function gh(e, t) {
  if (e === void 0)
    return !1;
  if (t) {
    const { context: { ids: r } } = t;
    return r.has(e);
  }
  return wi(e) !== null;
}
const ph = "n", wo = `.${ph}-`, mh = "__", bh = "--", Wd = jd(), _d = Jf({
  blockPrefix: wo,
  elementPrefix: mh,
  modifierPrefix: bh
});
Wd.use(_d);
const {
  c: D,
  find: HB
} = Wd, {
  cB: z,
  cE: T,
  cM: I,
  cNotM: Ue
} = _d;
function Si(e) {
  return D(({
    props: {
      bPrefix: t
    }
  }) => `${t || wo}modal, ${t || wo}drawer`, [e]);
}
function Xa(e) {
  return D(({
    props: {
      bPrefix: t
    }
  }) => `${t || wo}popover`, [e]);
}
function Vd(e) {
  return D(({
    props: {
      bPrefix: t
    }
  }) => `&${t || wo}modal`, e);
}
const xh = (...e) => D(">", [z(...e)]);
function Z(e, t) {
  return e + (t === "default" ? "" : t.replace(/^[a-z]/, (r) => r.toUpperCase()));
}
let li = [];
const Ud = /* @__PURE__ */ new WeakMap();
function yh() {
  li.forEach((e) => e(...Ud.get(e))), li = [];
}
function si(e, ...t) {
  Ud.set(e, t), !li.includes(e) && li.push(e) === 1 && requestAnimationFrame(yh);
}
function Jt(e, t) {
  let { target: r } = e;
  for (; r; ) {
    if (r.dataset && r.dataset[t] !== void 0)
      return !0;
    r = r.parentElement;
  }
  return !1;
}
function Hr(e) {
  return e.composedPath()[0] || null;
}
function Mt(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function wt(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Vt(e, t) {
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
const Vl = {
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
}, Kr = "^\\s*", qr = "\\s*$", nr = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", rr = "([0-9A-Fa-f])", or = "([0-9A-Fa-f]{2})", Ch = new RegExp(`${Kr}rgb\\s*\\(${nr},${nr},${nr}\\)${qr}`), wh = new RegExp(`${Kr}rgba\\s*\\(${nr},${nr},${nr},${nr}\\)${qr}`), Sh = new RegExp(`${Kr}#${rr}${rr}${rr}${qr}`), Bh = new RegExp(`${Kr}#${or}${or}${or}${qr}`), kh = new RegExp(`${Kr}#${rr}${rr}${rr}${rr}${qr}`), Rh = new RegExp(`${Kr}#${or}${or}${or}${or}${qr}`);
function Xt(e) {
  return parseInt(e, 16);
}
function dr(e) {
  try {
    let t;
    if (t = Bh.exec(e))
      return [Xt(t[1]), Xt(t[2]), Xt(t[3]), 1];
    if (t = Ch.exec(e))
      return [Ht(t[1]), Ht(t[5]), Ht(t[9]), 1];
    if (t = wh.exec(e))
      return [
        Ht(t[1]),
        Ht(t[5]),
        Ht(t[9]),
        vo(t[13])
      ];
    if (t = Sh.exec(e))
      return [
        Xt(t[1] + t[1]),
        Xt(t[2] + t[2]),
        Xt(t[3] + t[3]),
        1
      ];
    if (t = Rh.exec(e))
      return [
        Xt(t[1]),
        Xt(t[2]),
        Xt(t[3]),
        vo(Xt(t[4]) / 255)
      ];
    if (t = kh.exec(e))
      return [
        Xt(t[1] + t[1]),
        Xt(t[2] + t[2]),
        Xt(t[3] + t[3]),
        vo(Xt(t[4] + t[4]) / 255)
      ];
    if (e in Vl)
      return dr(Vl[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function Ph(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function ma(e, t, r, o) {
  return `rgba(${Ht(e)}, ${Ht(t)}, ${Ht(r)}, ${Ph(o)})`;
}
function Gi(e, t, r, o, i) {
  return Ht((e * t * (1 - o) + r * o) / i);
}
function Je(e, t) {
  Array.isArray(e) || (e = dr(e)), Array.isArray(t) || (t = dr(t));
  const r = e[3], o = t[3], i = vo(r + o - r * o);
  return ma(Gi(e[0], r, t[0], o, i), Gi(e[1], r, t[1], o, i), Gi(e[2], r, t[2], o, i), i);
}
function De(e, t) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : dr(e);
  return t.alpha ? ma(r, o, i, t.alpha) : ma(r, o, i, a);
}
function Wo(e, t) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : dr(e), { lightness: s = 1, alpha: l = 1 } = t;
  return Fh([r * s, o * s, i * s, a * l]);
}
function vo(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Ht(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function Fh(e) {
  const [t, r, o] = e;
  return 3 in e ? `rgba(${Ht(t)}, ${Ht(r)}, ${Ht(o)}, ${vo(e[3])})` : `rgba(${Ht(t)}, ${Ht(r)}, ${Ht(o)}, 1)`;
}
function wn(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function $h(e, t) {
  const r = [];
  for (let o = 0; o < e; ++o)
    r.push(t);
  return r;
}
function oi(e) {
  return e.composedPath()[0];
}
const zh = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Ah(e, t, r) {
  if (e === "mousemoveoutside") {
    const o = (i) => {
      t.contains(oi(i)) || r(i);
    };
    return {
      mousemove: o,
      touchstart: o
    };
  } else if (e === "clickoutside") {
    let o = !1;
    const i = (s) => {
      o = !t.contains(oi(s));
    }, a = (s) => {
      o && (t.contains(oi(s)) || r(s));
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
function Kd(e, t, r) {
  const o = zh[e];
  let i = o.get(t);
  i === void 0 && o.set(t, i = /* @__PURE__ */ new WeakMap());
  let a = i.get(r);
  return a === void 0 && i.set(r, a = Ah(e, t, r)), a;
}
function Eh(e, t, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Kd(e, t, r);
    return Object.keys(i).forEach((a) => {
      qe(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function Dh(e, t, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Kd(e, t, r);
    return Object.keys(i).forEach((a) => {
      Ve(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function Th() {
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
  function i(S, w, R) {
    const F = S[w];
    return S[w] = function() {
      return R.apply(S, arguments), F.apply(S, arguments);
    }, S;
  }
  function a(S, w) {
    S[w] = Event.prototype[w];
  }
  const s = /* @__PURE__ */ new WeakMap(), l = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function d() {
    var S;
    return (S = s.get(this)) !== null && S !== void 0 ? S : null;
  }
  function u(S, w) {
    l !== void 0 && Object.defineProperty(S, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: w ?? l.get
    });
  }
  const c = {
    bubble: {},
    capture: {}
  }, v = {};
  function g() {
    const S = function(w) {
      const { type: R, eventPhase: F, bubbles: N } = w, $ = oi(w);
      if (F === 2)
        return;
      const n = F === 1 ? "capture" : "bubble";
      let O = $;
      const M = [];
      for (; O === null && (O = window), M.push(O), O !== window; )
        O = O.parentNode || null;
      const W = c.capture[R], H = c.bubble[R];
      if (i(w, "stopPropagation", r), i(w, "stopImmediatePropagation", o), u(w, d), n === "capture") {
        if (W === void 0)
          return;
        for (let U = M.length - 1; U >= 0 && !e.has(w); --U) {
          const ee = M[U], Y = W.get(ee);
          if (Y !== void 0) {
            s.set(w, ee);
            for (const K of Y) {
              if (t.has(w))
                break;
              K(w);
            }
          }
          if (U === 0 && !N && H !== void 0) {
            const K = H.get(ee);
            if (K !== void 0)
              for (const j of K) {
                if (t.has(w))
                  break;
                j(w);
              }
          }
        }
      } else if (n === "bubble") {
        if (H === void 0)
          return;
        for (let U = 0; U < M.length && !e.has(w); ++U) {
          const ee = M[U], Y = H.get(ee);
          if (Y !== void 0) {
            s.set(w, ee);
            for (const K of Y) {
              if (t.has(w))
                break;
              K(w);
            }
          }
        }
      }
      a(w, "stopPropagation"), a(w, "stopImmediatePropagation"), u(w);
    };
    return S.displayName = "evtdUnifiedHandler", S;
  }
  function m() {
    const S = function(w) {
      const { type: R, eventPhase: F } = w;
      if (F !== 2)
        return;
      const N = v[R];
      N !== void 0 && N.forEach(($) => $(w));
    };
    return S.displayName = "evtdUnifiedWindowEventHandler", S;
  }
  const h = g(), p = m();
  function x(S, w) {
    const R = c[S];
    return R[w] === void 0 && (R[w] = /* @__PURE__ */ new Map(), window.addEventListener(w, h, S === "capture")), R[w];
  }
  function b(S) {
    return v[S] === void 0 && (v[S] = /* @__PURE__ */ new Set(), window.addEventListener(S, p)), v[S];
  }
  function y(S, w) {
    let R = S.get(w);
    return R === void 0 && S.set(w, R = /* @__PURE__ */ new Set()), R;
  }
  function B(S, w, R, F) {
    const N = c[w][R];
    if (N !== void 0) {
      const $ = N.get(S);
      if ($ !== void 0 && $.has(F))
        return !0;
    }
    return !1;
  }
  function C(S, w) {
    const R = v[S];
    return !!(R !== void 0 && R.has(w));
  }
  function P(S, w, R, F) {
    let N;
    if (typeof F == "object" && F.once === !0 ? N = (W) => {
      k(S, w, N, F), R(W);
    } : N = R, Eh(S, w, N, F))
      return;
    const n = F === !0 || typeof F == "object" && F.capture === !0 ? "capture" : "bubble", O = x(n, S), M = y(O, w);
    if (M.has(N) || M.add(N), w === window) {
      const W = b(S);
      W.has(N) || W.add(N);
    }
  }
  function k(S, w, R, F) {
    if (Dh(S, w, R, F))
      return;
    const $ = F === !0 || typeof F == "object" && F.capture === !0, n = $ ? "capture" : "bubble", O = x(n, S), M = y(O, w);
    if (w === window && !B(w, $ ? "bubble" : "capture", S, R) && C(S, R)) {
      const H = v[S];
      H.delete(R), H.size === 0 && (window.removeEventListener(S, p), v[S] = void 0);
    }
    M.has(R) && M.delete(R), M.size === 0 && O.delete(w), O.size === 0 && (window.removeEventListener(S, h, n === "capture"), c[n][S] = void 0);
  }
  return {
    on: P,
    off: k
  };
}
const { on: qe, off: Ve } = Th();
function qd(e) {
  const t = L(!!e.value);
  if (t.value)
    return Vn(t);
  const r = Me(e, (o) => {
    o && (t.value = !0, r());
  });
  return Vn(t);
}
function Ge(e) {
  const t = E(e), r = L(t.value);
  return Me(t, (o) => {
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
function Ya() {
  return Ao() !== null;
}
const Za = typeof window < "u";
let Or, go;
const Oh = () => {
  var e, t;
  Or = Za ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, go = !1, Or !== void 0 ? Or.then(() => {
    go = !0;
  }) : go = !0;
};
Oh();
function Mh(e) {
  if (go)
    return;
  let t = !1;
  $t(() => {
    go || Or == null || Or.then(() => {
      t || e();
    });
  }), Bt(() => {
    t = !0;
  });
}
const so = L(null);
function Ul(e) {
  if (e.clientX > 0 || e.clientY > 0)
    so.value = {
      x: e.clientX,
      y: e.clientY
    };
  else {
    const { target: t } = e;
    if (t instanceof Element) {
      const { left: r, top: o, width: i, height: a } = t.getBoundingClientRect();
      r > 0 || o > 0 ? so.value = {
        x: r + i / 2,
        y: o + a / 2
      } : so.value = { x: 0, y: 0 };
    } else
      so.value = null;
  }
}
let _o = 0, Kl = !0;
function Ja() {
  if (!Za)
    return Vn(L(null));
  _o === 0 && qe("click", document, Ul, !0);
  const e = () => {
    _o += 1;
  };
  return Kl && (Kl = Ya()) ? (pr(e), Bt(() => {
    _o -= 1, _o === 0 && Ve("click", document, Ul, !0);
  })) : e(), Vn(so);
}
const Ih = L(void 0);
let Vo = 0;
function ql() {
  Ih.value = Date.now();
}
let Gl = !0;
function Qa(e) {
  if (!Za)
    return Vn(L(!1));
  const t = L(!1);
  let r = null;
  function o() {
    r !== null && window.clearTimeout(r);
  }
  function i() {
    o(), t.value = !0, r = window.setTimeout(() => {
      t.value = !1;
    }, e);
  }
  Vo === 0 && qe("click", window, ql, !0);
  const a = () => {
    Vo += 1, qe("click", window, i, !0);
  };
  return Gl && (Gl = Ya()) ? (pr(a), Bt(() => {
    Vo -= 1, Vo === 0 && Ve("click", window, ql, !0), Ve("click", window, i, !0), o();
  })) : a(), Vn(t);
}
function Et(e, t) {
  return Me(e, (r) => {
    r !== void 0 && (t.value = r);
  }), E(() => e.value === void 0 ? t.value : e.value);
}
function br() {
  const e = L(!1);
  return $t(() => {
    e.value = !0;
  }), Vn(e);
}
function el(e, t) {
  return E(() => {
    for (const r of t)
      if (e[r] !== void 0)
        return e[r];
    return e[t[t.length - 1]];
  });
}
const Lh = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function Nh() {
  return Lh;
}
function Hh(e = {}, t) {
  const r = Eo({
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
  }, s = (d) => {
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
  }, l = () => {
    (t === void 0 || t.value) && (qe("keydown", document, a), qe("keyup", document, s)), t !== void 0 && Me(t, (d) => {
      d ? (qe("keydown", document, a), qe("keyup", document, s)) : (Ve("keydown", document, a), Ve("keyup", document, s));
    });
  };
  return Ya() ? (pr(l), Bt(() => {
    (t === void 0 || t.value) && (Ve("keydown", document, a), Ve("keyup", document, s));
  })) : l(), Vn(r);
}
const tl = "n-internal-select-menu", Gd = "n-internal-select-menu-body", Do = "n-drawer-body", nl = "n-drawer", To = "n-modal-body", jh = "n-modal-provider", Xd = "n-modal", Gr = "n-popover-body", Yd = "__disabled__";
function Sn(e) {
  const t = pe(To, null), r = pe(Do, null), o = pe(Gr, null), i = pe(Gd, null), a = L();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const s = () => {
      a.value = document.fullscreenElement;
    };
    $t(() => {
      qe("fullscreenchange", document, s);
    }), Bt(() => {
      Ve("fullscreenchange", document, s);
    });
  }
  return Ge(() => {
    var s;
    const {
      to: l
    } = e;
    return l !== void 0 ? l === !1 ? Yd : l === !0 ? a.value || "body" : l : t != null && t.value ? (s = t.value.$el) !== null && s !== void 0 ? s : t.value : r != null && r.value ? r.value : o != null && o.value ? o.value : i != null && i.value ? i.value : l ?? (a.value || "body");
  });
}
Sn.tdkey = Yd;
Sn.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function Wh(e, t, r) {
  var o;
  const i = pe(e, null);
  if (i === null) return;
  const a = (o = Ao()) === null || o === void 0 ? void 0 : o.proxy;
  Me(r, s), s(r.value), Bt(() => {
    s(void 0, r.value);
  });
  function s(u, c) {
    if (!i) return;
    const v = i[t];
    c !== void 0 && l(v, c), u !== void 0 && d(v, u);
  }
  function l(u, c) {
    u[c] || (u[c] = []), u[c].splice(u[c].findIndex((v) => v === a), 1);
  }
  function d(u, c) {
    u[c] || (u[c] = []), ~u[c].findIndex((v) => v === a) || u[c].push(a);
  }
}
function _h(e, t, r) {
  const o = L(e.value);
  let i = null;
  return Me(e, (a) => {
    i !== null && window.clearTimeout(i), a === !0 ? r && !r.value ? o.value = !0 : i = window.setTimeout(() => {
      o.value = !0;
    }, t) : o.value = !1;
  }), o;
}
const Xr = typeof document < "u" && typeof window < "u", rl = L(!1);
function Xl() {
  rl.value = !0;
}
function Yl() {
  rl.value = !1;
}
let oo = 0;
function Zd() {
  return Xr && (pr(() => {
    oo || (window.addEventListener("compositionstart", Xl), window.addEventListener("compositionend", Yl)), oo++;
  }), Bt(() => {
    oo <= 1 ? (window.removeEventListener("compositionstart", Xl), window.removeEventListener("compositionend", Yl), oo = 0) : oo--;
  })), rl;
}
let zr = 0, Zl = "", Jl = "", Ql = "", es = "";
const ts = L("0px");
function Jd(e) {
  if (typeof document > "u") return;
  const t = document.documentElement;
  let r, o = !1;
  const i = () => {
    t.style.marginRight = Zl, t.style.overflow = Jl, t.style.overflowX = Ql, t.style.overflowY = es, ts.value = "0px";
  };
  $t(() => {
    r = Me(e, (a) => {
      if (a) {
        if (!zr) {
          const s = window.innerWidth - t.offsetWidth;
          s > 0 && (Zl = t.style.marginRight, t.style.marginRight = `${s}px`, ts.value = `${s}px`), Jl = t.style.overflow, Ql = t.style.overflowX, es = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden";
        }
        o = !0, zr++;
      } else
        zr--, zr || i(), o = !1;
    }, {
      immediate: !0
    });
  }), Bt(() => {
    r == null || r(), o && (zr--, zr || i(), o = !1);
  });
}
function Vh(e) {
  const t = {
    isDeactivated: !1
  };
  let r = !1;
  return Td(() => {
    if (t.isDeactivated = !1, !r) {
      r = !0;
      return;
    }
    e();
  }), Ka(() => {
    t.isDeactivated = !0, r || (r = !0);
  }), t;
}
function ba(e, t, r = "default") {
  const o = t[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  return o();
}
function xa(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(jt(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        xa(o, t, r);
        return;
      }
      if (o.type === je) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && xa(o.children, t, r);
      } else o.type !== qa && r.push(o);
    }
  }), r;
}
function ns(e, t, r = "default") {
  const o = t[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  const i = xa(o());
  if (i.length === 1)
    return i[0];
  throw new Error(`[vueuc/${e}]: slot[${r}] should have exactly one child.`);
}
let Ln = null;
function Qd() {
  if (Ln === null && (Ln = document.getElementById("v-binder-view-measurer"), Ln === null)) {
    Ln = document.createElement("div"), Ln.id = "v-binder-view-measurer";
    const { style: e } = Ln;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(Ln);
  }
  return Ln.getBoundingClientRect();
}
function Uh(e, t) {
  const r = Qd();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: r.width - e,
    bottom: r.height - t
  };
}
function Xi(e) {
  const t = e.getBoundingClientRect(), r = Qd();
  return {
    left: t.left - r.left,
    top: t.top - r.top,
    bottom: r.height + r.top - t.bottom,
    right: r.width + r.left - t.right,
    width: t.width,
    height: t.height
  };
}
function Kh(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function eu(e) {
  if (e === null)
    return null;
  const t = Kh(e);
  if (t === null)
    return null;
  if (t.nodeType === 9)
    return document;
  if (t.nodeType === 1) {
    const { overflow: r, overflowX: o, overflowY: i } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(r + i + o))
      return t;
  }
  return eu(t);
}
const ol = J({
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
    ze("VBinder", (t = Ao()) === null || t === void 0 ? void 0 : t.proxy);
    const r = pe("VBinder", null), o = L(null), i = (b) => {
      o.value = b, r && e.syncTargetWithParent && r.setTargetRef(b);
    };
    let a = [];
    const s = () => {
      let b = o.value;
      for (; b = eu(b), b !== null; )
        a.push(b);
      for (const y of a)
        qe("scroll", y, v, !0);
    }, l = () => {
      for (const b of a)
        Ve("scroll", b, v, !0);
      a = [];
    }, d = /* @__PURE__ */ new Set(), u = (b) => {
      d.size === 0 && s(), d.has(b) || d.add(b);
    }, c = (b) => {
      d.has(b) && d.delete(b), d.size === 0 && l();
    }, v = () => {
      si(g);
    }, g = () => {
      d.forEach((b) => b());
    }, m = /* @__PURE__ */ new Set(), h = (b) => {
      m.size === 0 && qe("resize", window, x), m.has(b) || m.add(b);
    }, p = (b) => {
      m.has(b) && m.delete(b), m.size === 0 && Ve("resize", window, x);
    }, x = () => {
      m.forEach((b) => b());
    };
    return Bt(() => {
      Ve("resize", window, x), l();
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
    return ba("binder", this.$slots);
  }
}), il = J({
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
    return e ? rn(ns("follower", this.$slots), [
      [t]
    ]) : ns("follower", this.$slots);
  }
}), Ar = "@@mmoContext", qh = {
  mounted(e, { value: t }) {
    e[Ar] = {
      handler: void 0
    }, typeof t == "function" && (e[Ar].handler = t, qe("mousemoveoutside", e, t));
  },
  updated(e, { value: t }) {
    const r = e[Ar];
    typeof t == "function" ? r.handler ? r.handler !== t && (Ve("mousemoveoutside", e, r.handler), r.handler = t, qe("mousemoveoutside", e, t)) : (e[Ar].handler = t, qe("mousemoveoutside", e, t)) : r.handler && (Ve("mousemoveoutside", e, r.handler), r.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[Ar];
    t && Ve("mousemoveoutside", e, t), e[Ar].handler = void 0;
  }
}, Er = "@@coContext", jr = {
  mounted(e, { value: t, modifiers: r }) {
    e[Er] = {
      handler: void 0
    }, typeof t == "function" && (e[Er].handler = t, qe("clickoutside", e, t, {
      capture: r.capture
    }));
  },
  updated(e, { value: t, modifiers: r }) {
    const o = e[Er];
    typeof t == "function" ? o.handler ? o.handler !== t && (Ve("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = t, qe("clickoutside", e, t, {
      capture: r.capture
    })) : (e[Er].handler = t, qe("clickoutside", e, t, {
      capture: r.capture
    })) : o.handler && (Ve("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = void 0);
  },
  unmounted(e, { modifiers: t }) {
    const { handler: r } = e[Er];
    r && Ve("clickoutside", e, r, {
      capture: t.capture
    }), e[Er].handler = void 0;
  }
};
function Gh(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class Xh {
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
    o.has(t) ? o.delete(t) : r === void 0 && Gh("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const Yi = new Xh(), Dr = "@@ziContext", Bi = {
  mounted(e, t) {
    const { value: r = {} } = t, { zIndex: o, enabled: i } = r;
    e[Dr] = {
      enabled: !!i,
      initialized: !1
    }, i && (Yi.ensureZIndex(e, o), e[Dr].initialized = !0);
  },
  updated(e, t) {
    const { value: r = {} } = t, { zIndex: o, enabled: i } = r, a = e[Dr].enabled;
    i && !a && (Yi.ensureZIndex(e, o), e[Dr].initialized = !0), e[Dr].enabled = !!i;
  },
  unmounted(e, t) {
    if (!e[Dr].initialized)
      return;
    const { value: r = {} } = t, { zIndex: o } = r;
    Yi.unregister(e, o);
  }
}, Yh = "@css-render/vue3-ssr";
function Zh(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function Jh(e, t, r) {
  const { styles: o, ids: i } = r;
  i.has(e) || o !== null && (i.add(e), o.push(Zh(e, t)));
}
const Qh = typeof document < "u";
function xr() {
  if (Qh)
    return;
  const e = pe(Yh, null);
  if (e !== null)
    return {
      adapter: (t, r) => Jh(t, r, e),
      context: e
    };
}
function rs(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
const { c: _n } = jd(), al = "vueuc-style";
function os(e) {
  return e & -e;
}
class tu {
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
      i[t] += r, t += os(t);
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
      a += r[t], t -= os(t);
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
function is(e) {
  return typeof e == "string" ? document.querySelector(e) : e() || null;
}
const ll = J({
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
      showTeleport: qd(ie(e, "show")),
      mergedTo: E(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? ba("lazy-teleport", this.$slots) : f(yi, {
      disabled: this.disabled,
      to: this.mergedTo
    }, ba("lazy-teleport", this.$slots)) : null;
  }
}), Uo = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, as = {
  start: "end",
  center: "center",
  end: "start"
}, Zi = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, e0 = {
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
}, t0 = {
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
}, n0 = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, ls = {
  top: !0,
  // top++
  bottom: !1,
  // top--
  left: !0,
  // left++
  right: !1
  // left--
}, ss = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function r0(e, t, r, o, i, a) {
  if (!i || a)
    return { placement: e, top: 0, left: 0 };
  const [s, l] = e.split("-");
  let d = l ?? "center", u = {
    top: 0,
    left: 0
  };
  const c = (m, h, p) => {
    let x = 0, b = 0;
    const y = r[m] - t[h] - t[m];
    return y > 0 && o && (p ? b = ls[h] ? y : -y : x = ls[h] ? y : -y), {
      left: x,
      top: b
    };
  }, v = s === "left" || s === "right";
  if (d !== "center") {
    const m = n0[e], h = Uo[m], p = Zi[m];
    if (r[p] > t[p]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[m] + t[p] < r[p]
      ) {
        const x = (r[p] - t[p]) / 2;
        t[m] < x || t[h] < x ? t[m] < t[h] ? (d = as[l], u = c(p, h, v)) : u = c(p, m, v) : d = "center";
      }
    } else r[p] < t[p] && t[h] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[m] > t[h] && (d = as[l]);
  } else {
    const m = s === "bottom" || s === "top" ? "left" : "top", h = Uo[m], p = Zi[m], x = (r[p] - t[p]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[m] < x || t[h] < x) && (t[m] > t[h] ? (d = ss[m], u = c(p, m, v)) : (d = ss[h], u = c(p, h, v)));
  }
  let g = s;
  return (
    // space is not enough
    t[s] < r[Zi[s]] && // opposite position's space is larger
    t[s] < t[Uo[s]] && (g = Uo[s]), {
      placement: d !== "center" ? `${g}-${d}` : g,
      left: u.left,
      top: u.top
    }
  );
}
function o0(e, t) {
  return t ? t0[e] : e0[e];
}
function i0(e, t, r, o, i, a) {
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
const a0 = _n([
  _n(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  _n(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    _n("> *", {
      pointerEvents: "all"
    })
  ])
]), sl = J({
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
    const t = pe("VBinder"), r = Ge(() => e.enabled !== void 0 ? e.enabled : e.show), o = L(null), i = L(null), a = () => {
      const { syncTrigger: g } = e;
      g.includes("scroll") && t.addScrollListener(d), g.includes("resize") && t.addResizeListener(d);
    }, s = () => {
      t.removeScrollListener(d), t.removeResizeListener(d);
    };
    $t(() => {
      r.value && (d(), a());
    });
    const l = xr();
    a0.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: al,
      ssr: l
    }), Bt(() => {
      s();
    }), Mh(() => {
      r.value && d();
    });
    const d = () => {
      if (!r.value)
        return;
      const g = o.value;
      if (g === null)
        return;
      const m = t.targetRef, { x: h, y: p, overlap: x } = e, b = h !== void 0 && p !== void 0 ? Uh(h, p) : Xi(m);
      g.style.setProperty("--v-target-width", `${Math.round(b.width)}px`), g.style.setProperty("--v-target-height", `${Math.round(b.height)}px`);
      const { width: y, minWidth: B, placement: C, internalShift: P, flip: k } = e;
      g.setAttribute("v-placement", C), x ? g.setAttribute("v-overlap", "") : g.removeAttribute("v-overlap");
      const { style: S } = g;
      y === "target" ? S.width = `${b.width}px` : y !== void 0 ? S.width = y : S.width = "", B === "target" ? S.minWidth = `${b.width}px` : B !== void 0 ? S.minWidth = B : S.minWidth = "";
      const w = Xi(g), R = Xi(i.value), { left: F, top: N, placement: $ } = r0(C, b, w, P, k, x), n = o0($, x), { left: O, top: M, transform: W } = i0($, R, b, N, F, x);
      g.setAttribute("v-placement", $), g.style.setProperty("--v-offset-left", `${Math.round(F)}px`), g.style.setProperty("--v-offset-top", `${Math.round(N)}px`), g.style.transform = `translateX(${O}) translateY(${M}) ${W}`, g.style.setProperty("--v-transform-origin", n), g.style.transformOrigin = n;
    };
    Me(r, (g) => {
      g ? (a(), u()) : s();
    });
    const u = () => {
      ht().then(d).catch((g) => console.error(g));
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
      Me(ie(e, g), d);
    }), ["teleportDisabled"].forEach((g) => {
      Me(ie(e, g), u);
    }), Me(ie(e, "syncTrigger"), (g) => {
      g.includes("resize") ? t.addResizeListener(d) : t.removeResizeListener(d), g.includes("scroll") ? t.addScrollListener(d) : t.removeScrollListener(d);
    });
    const c = br(), v = Ge(() => {
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
    return f(ll, {
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
        return this.zindexable ? rn(r, [
          [
            Bi,
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
var lr = [], l0 = function() {
  return lr.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, s0 = function() {
  return lr.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, ds = "ResizeObserver loop completed with undelivered notifications.", d0 = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: ds
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = ds), window.dispatchEvent(e);
}, So;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(So || (So = {}));
var sr = function(e) {
  return Object.freeze(e);
}, u0 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, sr(this);
  }
  return e;
}(), nu = function() {
  function e(t, r, o, i) {
    return this.x = t, this.y = r, this.width = o, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, sr(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, o = t.y, i = t.top, a = t.right, s = t.bottom, l = t.left, d = t.width, u = t.height;
    return { x: r, y: o, top: i, right: a, bottom: s, left: l, width: d, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), dl = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, ru = function(e) {
  if (dl(e)) {
    var t = e.getBBox(), r = t.width, o = t.height;
    return !r && !o;
  }
  var i = e, a = i.offsetWidth, s = i.offsetHeight;
  return !(a || s || e.getClientRects().length);
}, us = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, c0 = function(e) {
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
}, po = typeof window < "u" ? window : {}, Ko = /* @__PURE__ */ new WeakMap(), cs = /auto|scroll/, f0 = /^tb|vertical/, h0 = /msie|trident/i.test(po.navigator && po.navigator.userAgent), gn = function(e) {
  return parseFloat(e || "0");
}, Mr = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new u0((r ? t : e) || 0, (r ? e : t) || 0);
}, fs = sr({
  devicePixelContentBoxSize: Mr(),
  borderBoxSize: Mr(),
  contentBoxSize: Mr(),
  contentRect: new nu(0, 0, 0, 0)
}), ou = function(e, t) {
  if (t === void 0 && (t = !1), Ko.has(e) && !t)
    return Ko.get(e);
  if (ru(e))
    return Ko.set(e, fs), fs;
  var r = getComputedStyle(e), o = dl(e) && e.ownerSVGElement && e.getBBox(), i = !h0 && r.boxSizing === "border-box", a = f0.test(r.writingMode || ""), s = !o && cs.test(r.overflowY || ""), l = !o && cs.test(r.overflowX || ""), d = o ? 0 : gn(r.paddingTop), u = o ? 0 : gn(r.paddingRight), c = o ? 0 : gn(r.paddingBottom), v = o ? 0 : gn(r.paddingLeft), g = o ? 0 : gn(r.borderTopWidth), m = o ? 0 : gn(r.borderRightWidth), h = o ? 0 : gn(r.borderBottomWidth), p = o ? 0 : gn(r.borderLeftWidth), x = v + u, b = d + c, y = p + m, B = g + h, C = l ? e.offsetHeight - B - e.clientHeight : 0, P = s ? e.offsetWidth - y - e.clientWidth : 0, k = i ? x + y : 0, S = i ? b + B : 0, w = o ? o.width : gn(r.width) - k - P, R = o ? o.height : gn(r.height) - S - C, F = w + x + P + y, N = R + b + C + B, $ = sr({
    devicePixelContentBoxSize: Mr(Math.round(w * devicePixelRatio), Math.round(R * devicePixelRatio), a),
    borderBoxSize: Mr(F, N, a),
    contentBoxSize: Mr(w, R, a),
    contentRect: new nu(v, d, w, R)
  });
  return Ko.set(e, $), $;
}, iu = function(e, t, r) {
  var o = ou(e, r), i = o.borderBoxSize, a = o.contentBoxSize, s = o.devicePixelContentBoxSize;
  switch (t) {
    case So.DEVICE_PIXEL_CONTENT_BOX:
      return s;
    case So.BORDER_BOX:
      return i;
    default:
      return a;
  }
}, v0 = /* @__PURE__ */ function() {
  function e(t) {
    var r = ou(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = sr([r.borderBoxSize]), this.contentBoxSize = sr([r.contentBoxSize]), this.devicePixelContentBoxSize = sr([r.devicePixelContentBoxSize]);
  }
  return e;
}(), au = function(e) {
  if (ru(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, g0 = function() {
  var e = 1 / 0, t = [];
  lr.forEach(function(s) {
    if (s.activeTargets.length !== 0) {
      var l = [];
      s.activeTargets.forEach(function(u) {
        var c = new v0(u.target), v = au(u.target);
        l.push(c), u.lastReportedSize = iu(u.target, u.observedBox), v < e && (e = v);
      }), t.push(function() {
        s.callback.call(s.observer, l, s.observer);
      }), s.activeTargets.splice(0, s.activeTargets.length);
    }
  });
  for (var r = 0, o = t; r < o.length; r++) {
    var i = o[r];
    i();
  }
  return e;
}, hs = function(e) {
  lr.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(i) {
      i.isActive() && (au(i.target) > e ? r.activeTargets.push(i) : r.skippedTargets.push(i));
    });
  });
}, p0 = function() {
  var e = 0;
  for (hs(e); l0(); )
    e = g0(), hs(e);
  return s0() && d0(), e > 0;
}, Ji, lu = [], m0 = function() {
  return lu.splice(0).forEach(function(e) {
    return e();
  });
}, b0 = function(e) {
  if (!Ji) {
    var t = 0, r = document.createTextNode(""), o = { characterData: !0 };
    new MutationObserver(function() {
      return m0();
    }).observe(r, o), Ji = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  lu.push(e), Ji();
}, x0 = function(e) {
  b0(function() {
    requestAnimationFrame(e);
  });
}, ii = 0, y0 = function() {
  return !!ii;
}, C0 = 250, w0 = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, vs = [
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
], gs = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Qi = !1, S0 = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = C0), !Qi) {
      Qi = !0;
      var o = gs(t);
      x0(function() {
        var i = !1;
        try {
          i = p0();
        } finally {
          if (Qi = !1, t = o - gs(), !y0())
            return;
          i ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, w0);
    };
    document.body ? r() : po.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), vs.forEach(function(r) {
      return po.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), vs.forEach(function(r) {
      return po.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), ya = new S0(), ps = function(e) {
  !ii && e > 0 && ya.start(), ii += e, !ii && ya.stop();
}, B0 = function(e) {
  return !dl(e) && !c0(e) && getComputedStyle(e).display === "inline";
}, k0 = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || So.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = iu(this.target, this.observedBox, !0);
    return B0(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), R0 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), qo = /* @__PURE__ */ new WeakMap(), ms = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, Go = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var o = new R0(t, r);
    qo.set(t, o);
  }, e.observe = function(t, r, o) {
    var i = qo.get(t), a = i.observationTargets.length === 0;
    ms(i.observationTargets, r) < 0 && (a && lr.push(i), i.observationTargets.push(new k0(r, o && o.box)), ps(1), ya.schedule());
  }, e.unobserve = function(t, r) {
    var o = qo.get(t), i = ms(o.observationTargets, r), a = o.observationTargets.length === 1;
    i >= 0 && (a && lr.splice(lr.indexOf(o), 1), o.observationTargets.splice(i, 1), ps(-1));
  }, e.disconnect = function(t) {
    var r = this, o = qo.get(t);
    o.observationTargets.slice().forEach(function(i) {
      return r.unobserve(t, i.target);
    }), o.activeTargets.splice(0, o.activeTargets.length);
  }, e;
}(), P0 = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Go.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!us(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Go.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!us(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Go.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Go.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class F0 {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || P0)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const mo = new F0(), Wr = J({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let t = !1;
    const r = Ao().proxy;
    function o(i) {
      const { onResize: a } = e;
      a !== void 0 && a(i);
    }
    $t(() => {
      const i = r.$el;
      if (i === void 0) {
        rs("resize-observer", "$el does not exist.");
        return;
      }
      if (i.nextElementSibling !== i.nextSibling && i.nodeType === 3 && i.nodeValue !== "") {
        rs("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      i.nextElementSibling !== null && (mo.registerHandler(i.nextElementSibling, o), t = !0);
    }), Bt(() => {
      t && mo.unregisterHandler(r.$el.nextElementSibling);
    });
  },
  render() {
    return Zt(this.$slots, "default");
  }
});
let Xo;
function $0() {
  return typeof document > "u" ? !1 : (Xo === void 0 && ("matchMedia" in window ? Xo = window.matchMedia("(pointer:coarse)").matches : Xo = !1), Xo);
}
let ea;
function bs() {
  return typeof document > "u" ? 1 : (ea === void 0 && (ea = "chrome" in window ? window.devicePixelRatio : 1), ea);
}
const su = "VVirtualListXScroll";
function z0({ columnsRef: e, renderColRef: t, renderItemWithColsRef: r }) {
  const o = L(0), i = L(0), a = E(() => {
    const u = e.value;
    if (u.length === 0)
      return null;
    const c = new tu(u.length, 0);
    return u.forEach((v, g) => {
      c.add(g, v.width);
    }), c;
  }), s = Ge(() => {
    const u = a.value;
    return u !== null ? Math.max(u.getBound(i.value) - 1, 0) : 0;
  }), l = (u) => {
    const c = a.value;
    return c !== null ? c.sum(u) : 0;
  }, d = Ge(() => {
    const u = a.value;
    return u !== null ? Math.min(u.getBound(i.value + o.value) + 1, e.value.length - 1) : 0;
  });
  return ze(su, {
    startIndexRef: s,
    endIndexRef: d,
    columnsRef: e,
    renderColRef: t,
    renderItemWithColsRef: r,
    getLeft: l
  }), {
    listWidthRef: o,
    scrollLeftRef: i
  };
}
const xs = J({
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
      pe(su)
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
    const { startIndex: e, endIndex: t, columns: r, renderCol: o, renderItemWithCols: i, getLeft: a, item: s } = this;
    if (i != null)
      return i({
        itemIndex: this.index,
        startColIndex: e,
        endColIndex: t,
        allColumns: r,
        item: s,
        getLeft: a
      });
    if (o != null) {
      const l = [];
      for (let d = e; d <= t; ++d) {
        const u = r[d];
        l.push(o({ column: u, left: a(d), item: s }));
      }
      return l;
    }
    return null;
  }
}), A0 = _n(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  _n("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    _n("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), ul = J({
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
    const t = xr();
    A0.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: al,
      ssr: t
    }), $t(() => {
      const { defaultScrollIndex: n, defaultScrollKey: O } = e;
      n != null ? x({ index: n }) : O != null && x({ key: O });
    });
    let r = !1, o = !1;
    Td(() => {
      if (r = !1, !o) {
        o = !0;
        return;
      }
      x({ top: m.value, left: s.value });
    }), Ka(() => {
      r = !0, o || (o = !0);
    });
    const i = Ge(() => {
      if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0)
        return;
      let n = 0;
      return e.columns.forEach((O) => {
        n += O.width;
      }), n;
    }), a = E(() => {
      const n = /* @__PURE__ */ new Map(), { keyField: O } = e;
      return e.items.forEach((M, W) => {
        n.set(M[O], W);
      }), n;
    }), { scrollLeftRef: s, listWidthRef: l } = z0({
      columnsRef: ie(e, "columns"),
      renderColRef: ie(e, "renderCol"),
      renderItemWithColsRef: ie(e, "renderItemWithCols")
    }), d = L(null), u = L(void 0), c = /* @__PURE__ */ new Map(), v = E(() => {
      const { items: n, itemSize: O, keyField: M } = e, W = new tu(n.length, O);
      return n.forEach((H, U) => {
        const ee = H[M], Y = c.get(ee);
        Y !== void 0 && W.add(U, Y);
      }), W;
    }), g = L(0), m = L(0), h = Ge(() => Math.max(v.value.getBound(m.value - Mt(e.paddingTop)) - 1, 0)), p = E(() => {
      const { value: n } = u;
      if (n === void 0)
        return [];
      const { items: O, itemSize: M } = e, W = h.value, H = Math.min(W + Math.ceil(n / M + 1), O.length - 1), U = [];
      for (let ee = W; ee <= H; ++ee)
        U.push(O[ee]);
      return U;
    }), x = (n, O) => {
      if (typeof n == "number") {
        C(n, O, "auto");
        return;
      }
      const { left: M, top: W, index: H, key: U, position: ee, behavior: Y, debounce: K = !0 } = n;
      if (M !== void 0 || W !== void 0)
        C(M, W, Y);
      else if (H !== void 0)
        B(H, Y, K);
      else if (U !== void 0) {
        const j = a.value.get(U);
        j !== void 0 && B(j, Y, K);
      } else ee === "bottom" ? C(0, Number.MAX_SAFE_INTEGER, Y) : ee === "top" && C(0, 0, Y);
    };
    let b, y = null;
    function B(n, O, M) {
      const { value: W } = v, H = W.sum(n) + Mt(e.paddingTop);
      if (!M)
        d.value.scrollTo({
          left: 0,
          top: H,
          behavior: O
        });
      else {
        b = n, y !== null && window.clearTimeout(y), y = window.setTimeout(() => {
          b = void 0, y = null;
        }, 16);
        const { scrollTop: U, offsetHeight: ee } = d.value;
        if (H > U) {
          const Y = W.get(n);
          H + Y <= U + ee || d.value.scrollTo({
            left: 0,
            top: H + Y - ee,
            behavior: O
          });
        } else
          d.value.scrollTo({
            left: 0,
            top: H,
            behavior: O
          });
      }
    }
    function C(n, O, M) {
      d.value.scrollTo({
        left: n,
        top: O,
        behavior: M
      });
    }
    function P(n, O) {
      var M, W, H;
      if (r || e.ignoreItemResize || $(O.target))
        return;
      const { value: U } = v, ee = a.value.get(n), Y = U.get(ee), K = (H = (W = (M = O.borderBoxSize) === null || M === void 0 ? void 0 : M[0]) === null || W === void 0 ? void 0 : W.blockSize) !== null && H !== void 0 ? H : O.contentRect.height;
      if (K === Y)
        return;
      K - e.itemSize === 0 ? c.delete(n) : c.set(n, K - e.itemSize);
      const q = K - Y;
      if (q === 0)
        return;
      U.add(ee, q);
      const X = d.value;
      if (X != null) {
        if (b === void 0) {
          const ae = U.sum(ee);
          X.scrollTop > ae && X.scrollBy(0, q);
        } else if (ee < b)
          X.scrollBy(0, q);
        else if (ee === b) {
          const ae = U.sum(ee);
          K + ae > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          X.scrollTop + X.offsetHeight && X.scrollBy(0, q);
        }
        N();
      }
      g.value++;
    }
    const k = !$0();
    let S = !1;
    function w(n) {
      var O;
      (O = e.onScroll) === null || O === void 0 || O.call(e, n), (!k || !S) && N();
    }
    function R(n) {
      var O;
      if ((O = e.onWheel) === null || O === void 0 || O.call(e, n), k) {
        const M = d.value;
        if (M != null) {
          if (n.deltaX === 0 && (M.scrollTop === 0 && n.deltaY <= 0 || M.scrollTop + M.offsetHeight >= M.scrollHeight && n.deltaY >= 0))
            return;
          n.preventDefault(), M.scrollTop += n.deltaY / bs(), M.scrollLeft += n.deltaX / bs(), N(), S = !0, si(() => {
            S = !1;
          });
        }
      }
    }
    function F(n) {
      if (r || $(n.target))
        return;
      if (e.renderCol == null && e.renderItemWithCols == null) {
        if (n.contentRect.height === u.value)
          return;
      } else if (n.contentRect.height === u.value && n.contentRect.width === l.value)
        return;
      u.value = n.contentRect.height, l.value = n.contentRect.width;
      const { onResize: O } = e;
      O !== void 0 && O(n);
    }
    function N() {
      const { value: n } = d;
      n != null && (m.value = n.scrollTop, s.value = n.scrollLeft);
    }
    function $(n) {
      let O = n;
      for (; O !== null; ) {
        if (O.style.display === "none")
          return !0;
        O = O.parentElement;
      }
      return !1;
    }
    return {
      listHeight: u,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: a,
      itemsStyle: E(() => {
        const { itemResizable: n } = e, O = wt(v.value.sum());
        return g.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: wt(i.value),
            height: n ? "" : O,
            minHeight: n ? O : "",
            paddingTop: wt(e.paddingTop),
            paddingBottom: wt(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: E(() => (g.value, {
        transform: `translateY(${wt(v.value.sum(h.value))})`
      })),
      viewportItems: p,
      listElRef: d,
      itemsElRef: L(null),
      scrollTo: x,
      handleListResize: F,
      handleListScroll: w,
      handleListWheel: R,
      handleItemResize: P
    };
  },
  render() {
    const { itemResizable: e, keyField: t, keyToIndex: r, visibleItemsTag: o } = this;
    return f(Wr, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var i, a;
        return f("div", Pt(this.$attrs, {
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
                const { renderCol: s, renderItemWithCols: l } = this;
                return this.viewportItems.map((d) => {
                  const u = d[t], c = r.get(u), v = s != null ? f(xs, {
                    index: c,
                    item: d
                  }) : void 0, g = l != null ? f(xs, {
                    index: c,
                    item: d
                  }) : void 0, m = this.$slots.default({
                    item: d,
                    renderedCols: v,
                    renderedItemWithCols: g,
                    index: c
                  })[0];
                  return e ? f(Wr, {
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
}), Fn = "v-hidden", E0 = _n("[v-hidden]", {
  display: "none!important"
}), ys = J({
  name: "Overflow",
  props: {
    getCounter: Function,
    getTail: Function,
    updateCounter: Function,
    onUpdateCount: Function,
    onUpdateOverflow: Function
  },
  setup(e, { slots: t }) {
    const r = L(null), o = L(null);
    function i(s) {
      const { value: l } = r, { getCounter: d, getTail: u } = e;
      let c;
      if (d !== void 0 ? c = d() : c = o.value, !l || !c)
        return;
      c.hasAttribute(Fn) && c.removeAttribute(Fn);
      const { children: v } = l;
      if (s.showAllItemsBeforeCalculate)
        for (const B of v)
          B.hasAttribute(Fn) && B.removeAttribute(Fn);
      const g = l.offsetWidth, m = [], h = t.tail ? u == null ? void 0 : u() : null;
      let p = h ? h.offsetWidth : 0, x = !1;
      const b = l.children.length - (t.tail ? 1 : 0);
      for (let B = 0; B < b - 1; ++B) {
        if (B < 0)
          continue;
        const C = v[B];
        if (x) {
          C.hasAttribute(Fn) || C.setAttribute(Fn, "");
          continue;
        } else C.hasAttribute(Fn) && C.removeAttribute(Fn);
        const P = C.offsetWidth;
        if (p += P, m[B] = P, p > g) {
          const { updateCounter: k } = e;
          for (let S = B; S >= 0; --S) {
            const w = b - 1 - S;
            k !== void 0 ? k(w) : c.textContent = `${w}`;
            const R = c.offsetWidth;
            if (p -= m[S], p + R <= g || S === 0) {
              x = !0, B = S - 1, h && (B === -1 ? (h.style.maxWidth = `${g - R}px`, h.style.boxSizing = "border-box") : h.style.maxWidth = "");
              const { onUpdateCount: F } = e;
              F && F(w);
              break;
            }
          }
        }
      }
      const { onUpdateOverflow: y } = e;
      x ? y !== void 0 && y(!0) : (y !== void 0 && y(!1), c.setAttribute(Fn, ""));
    }
    const a = xr();
    return E0.mount({
      id: "vueuc/overflow",
      head: !0,
      anchorMetaName: al,
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
    return ht(() => this.sync({
      showAllItemsBeforeCalculate: !1
    })), f("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      Zt(e, "default"),
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
function du(e) {
  return e instanceof HTMLElement;
}
function uu(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const r = e.childNodes[t];
    if (du(r) && (fu(r) || uu(r)))
      return !0;
  }
  return !1;
}
function cu(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const r = e.childNodes[t];
    if (du(r) && (fu(r) || cu(r)))
      return !0;
  }
  return !1;
}
function fu(e) {
  if (!D0(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function D0(e) {
  if (e.tabIndex > 0 || e.tabIndex === 0 && e.getAttribute("tabIndex") !== null)
    return !0;
  if (e.getAttribute("disabled"))
    return !1;
  switch (e.nodeName) {
    case "A":
      return !!e.href && e.rel !== "ignore";
    case "INPUT":
      return e.type !== "hidden" && e.type !== "file";
    case "SELECT":
    case "TEXTAREA":
      return !0;
    default:
      return !1;
  }
}
let io = [];
const cl = J({
  name: "FocusTrap",
  props: {
    disabled: Boolean,
    active: Boolean,
    autoFocus: {
      type: Boolean,
      default: !0
    },
    onEsc: Function,
    initialFocusTo: [String, Function],
    finalFocusTo: [String, Function],
    returnFocusOnDeactivated: {
      type: Boolean,
      default: !0
    }
  },
  setup(e) {
    const t = wn(), r = L(null), o = L(null);
    let i = !1, a = !1;
    const s = typeof document > "u" ? null : document.activeElement;
    function l() {
      return io[io.length - 1] === t;
    }
    function d(x) {
      var b;
      x.code === "Escape" && l() && ((b = e.onEsc) === null || b === void 0 || b.call(e, x));
    }
    $t(() => {
      Me(() => e.active, (x) => {
        x ? (v(), qe("keydown", document, d)) : (Ve("keydown", document, d), i && g());
      }, {
        immediate: !0
      });
    }), Bt(() => {
      Ve("keydown", document, d), i && g();
    });
    function u(x) {
      if (!a && l()) {
        const b = c();
        if (b === null || b.contains(Hr(x)))
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
        if (io.push(t), e.autoFocus) {
          const { initialFocusTo: b } = e;
          b === void 0 ? m("first") : (x = is(b)) === null || x === void 0 || x.focus({ preventScroll: !0 });
        }
        i = !0, document.addEventListener("focus", u, !0);
      }
    }
    function g() {
      var x;
      if (e.disabled || (document.removeEventListener("focus", u, !0), io = io.filter((y) => y !== t), l()))
        return;
      const { finalFocusTo: b } = e;
      b !== void 0 ? (x = is(b)) === null || x === void 0 || x.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && s instanceof HTMLElement && (a = !0, s.focus({ preventScroll: !0 }), a = !1);
    }
    function m(x) {
      if (l() && e.active) {
        const b = r.value, y = o.value;
        if (b !== null && y !== null) {
          const B = c();
          if (B == null || B === y) {
            a = !0, b.focus({ preventScroll: !0 }), a = !1;
            return;
          }
          a = !0;
          const C = x === "first" ? uu(B) : cu(B);
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
function hu(e, t) {
  t && ($t(() => {
    const {
      value: r
    } = e;
    r && mo.registerHandler(r, t);
  }), Me(e, (r, o) => {
    o && mo.unregisterHandler(o);
  }, {
    deep: !1
  }), Bt(() => {
    const {
      value: r
    } = e;
    r && mo.unregisterHandler(r);
  }));
}
function di(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const T0 = /^(\d|\.)+$/, Cs = /(\d|\.)+/;
function bt(e, {
  c: t = 1,
  offset: r = 0,
  attachPx: o = !0
} = {}) {
  if (typeof e == "number") {
    const i = (e + r) * t;
    return i === 0 ? "0" : `${i}px`;
  } else if (typeof e == "string")
    if (T0.test(e)) {
      const i = (Number(e) + r) * t;
      return o ? i === 0 ? "0" : `${i}px` : `${i}`;
    } else {
      const i = Cs.exec(e);
      return i ? e.replace(Cs, String((Number(i[0]) + r) * t)) : e;
    }
  return e;
}
function ws(e) {
  const {
    left: t,
    right: r,
    top: o,
    bottom: i
  } = Vt(e);
  return `${o} ${t} ${i} ${r}`;
}
function O0(e, t) {
  if (!e) return;
  const r = document.createElement("a");
  r.href = e, t !== void 0 && (r.download = t), document.body.appendChild(r), r.click(), document.body.removeChild(r);
}
let ta;
function M0() {
  return ta === void 0 && (ta = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), ta;
}
const vu = /* @__PURE__ */ new WeakSet();
function I0(e) {
  vu.add(e);
}
function gu(e) {
  return !vu.has(e);
}
function Ss(e) {
  switch (typeof e) {
    case "string":
      return e || void 0;
    case "number":
      return String(e);
    default:
      return;
  }
}
const L0 = {
  tiny: "mini",
  small: "tiny",
  medium: "small",
  large: "medium",
  huge: "large"
};
function Bs(e) {
  const t = L0[e];
  if (t === void 0)
    throw new Error(`${e} has no smaller size.`);
  return t;
}
const ks = /* @__PURE__ */ new Set();
function Qe(e, t) {
  const r = `[naive/${e}]: ${t}`;
  ks.has(r) || (ks.add(r), console.error(r));
}
function Dt(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function An(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function ne(e, ...t) {
  if (Array.isArray(e))
    e.forEach((r) => ne(r, ...t));
  else
    return e(...t);
}
function pu(e) {
  return (t) => {
    t ? e.value = t.$el : e.value = null;
  };
}
function Bo(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(jt(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        Bo(o, t, r);
        return;
      }
      if (o.type === je) {
        if (o.children === null) return;
        Array.isArray(o.children) && Bo(o.children, t, r);
      } else {
        if (o.type === qa && t) return;
        r.push(o);
      }
    }
  }), r;
}
function N0(e, t = "default", r = void 0) {
  const o = e[t];
  if (!o)
    return Dt("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const i = Bo(o(r));
  return i.length === 1 ? i[0] : (Dt("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function H0(e, t, r) {
  if (!t)
    return null;
  const o = Bo(t(r));
  return o.length === 1 ? o[0] : (Dt("getFirstSlotVNode", `slot[${e}] should have exactly one child`), null);
}
function j0(e, t = "default", r = []) {
  const i = e.$slots[t];
  return i === void 0 ? r : i();
}
function zn(e, t = [], r) {
  const o = {};
  return t.forEach((i) => {
    o[i] = e[i];
  }), Object.assign(o, r);
}
function Kn(e) {
  return Object.keys(e);
}
function bo(e) {
  const t = e.filter((r) => r !== void 0);
  if (t.length !== 0)
    return t.length === 1 ? t[0] : (r) => {
      e.forEach((o) => {
        o && o(r);
      });
    };
}
function yr(e, t = [], r) {
  const o = {};
  return Object.getOwnPropertyNames(e).forEach((a) => {
    t.includes(a) || (o[a] = e[a]);
  }), Object.assign(o, r);
}
function mt(e, ...t) {
  return typeof e == "function" ? e(...t) : typeof e == "string" ? jt(e) : typeof e == "number" ? jt(String(e)) : null;
}
function ln(e) {
  return e.some((t) => _f(t) ? !(t.type === qa || t.type === je && !ln(t.children)) : !0) ? e : null;
}
function nn(e, t) {
  return e && ln(e()) || t();
}
function Ca(e, t, r) {
  return e && ln(e(t)) || r(t);
}
function _e(e, t) {
  const r = e && ln(e());
  return t(r || null);
}
function W0(e, t, r) {
  const o = e && ln(e(t));
  return r(o || null);
}
function Ir(e) {
  return !(e && ln(e()));
}
const wa = J({
  render() {
    var e, t;
    return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
}), hn = "n-config-provider", ui = "n";
function Ae(e = {}, t = {
  defaultBordered: !0
}) {
  const r = pe(hn, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: r == null ? void 0 : r.inlineThemeDisabled,
    mergedRtlRef: r == null ? void 0 : r.mergedRtlRef,
    mergedComponentPropsRef: r == null ? void 0 : r.mergedComponentPropsRef,
    mergedBreakpointsRef: r == null ? void 0 : r.mergedBreakpointsRef,
    mergedBorderedRef: E(() => {
      var o, i;
      const {
        bordered: a
      } = e;
      return a !== void 0 ? a : (i = (o = r == null ? void 0 : r.mergedBorderedRef.value) !== null && o !== void 0 ? o : t.defaultBordered) !== null && i !== void 0 ? i : !0;
    }),
    mergedClsPrefixRef: r ? r.mergedClsPrefixRef : Od(ui),
    namespaceRef: E(() => r == null ? void 0 : r.mergedNamespaceRef.value)
  };
}
function mu() {
  const e = pe(hn, null);
  return e ? e.mergedClsPrefixRef : Od(ui);
}
function Xe(e, t, r, o) {
  r || An("useThemeClass", "cssVarsRef is not passed");
  const i = pe(hn, null), a = i == null ? void 0 : i.mergedThemeHashRef, s = i == null ? void 0 : i.styleMountTarget, l = L(""), d = xr();
  let u;
  const c = `__${e}`, v = () => {
    let g = c;
    const m = t ? t.value : void 0, h = a == null ? void 0 : a.value;
    h && (g += `-${h}`), m && (g += `-${m}`);
    const {
      themeOverrides: p,
      builtinThemeOverrides: x
    } = o;
    p && (g += `-${Co(JSON.stringify(p))}`), x && (g += `-${Co(JSON.stringify(x))}`), l.value = g, u = () => {
      const b = r.value;
      let y = "";
      for (const B in b)
        y += `${B}: ${b[B]};`;
      D(`.${g}`, y).mount({
        id: g,
        ssr: d,
        parent: s
      }), u = void 0;
    };
  };
  return rt(() => {
    v();
  }), {
    themeClass: l,
    onRender: () => {
      u == null || u();
    }
  };
}
const Sa = "n-form-item";
function En(e, {
  defaultSize: t = "medium",
  mergedSize: r,
  mergedDisabled: o
} = {}) {
  const i = pe(Sa, null);
  ze(Sa, null);
  const a = E(r ? () => r(i) : () => {
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
  }), s = E(o ? () => o(i) : () => {
    const {
      disabled: d
    } = e;
    return d !== void 0 ? d : i ? i.disabled.value : !1;
  }), l = E(() => {
    const {
      status: d
    } = e;
    return d || (i == null ? void 0 : i.mergedValidationStatus.value);
  });
  return Bt(() => {
    i && i.restoreValidation();
  }), {
    mergedSizeRef: a,
    mergedDisabledRef: s,
    mergedStatusRef: l,
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
const _0 = {
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
  },
  Heatmap: {
    less: "less",
    more: "more",
    monthFormat: "MMM",
    weekdayFormat: "eee"
  }
}, V0 = {
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
  },
  Heatmap: {
    less: "少",
    more: "多",
    monthFormat: "MMM",
    weekdayFormat: "eeeeee"
  }
};
function Lr(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
function bn(e) {
  return (t, r) => {
    const o = r != null && r.context ? String(r.context) : "standalone";
    let i;
    if (o === "formatting" && e.formattingValues) {
      const s = e.defaultFormattingWidth || e.defaultWidth, l = r != null && r.width ? String(r.width) : s;
      i = e.formattingValues[l] || e.formattingValues[s];
    } else {
      const s = e.defaultWidth, l = r != null && r.width ? String(r.width) : e.defaultWidth;
      i = e.values[l] || e.values[s];
    }
    const a = e.argumentCallback ? e.argumentCallback(t) : t;
    return i[a];
  };
}
function xn(e) {
  return (t, r = {}) => {
    const o = r.width, i = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const s = a[0], l = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(l) ? K0(l, (v) => v.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      U0(l, (v) => v.test(s))
    );
    let u;
    u = e.valueCallback ? e.valueCallback(d) : d, u = r.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      r.valueCallback(u)
    ) : u;
    const c = t.slice(s.length);
    return { value: u, rest: c };
  };
}
function U0(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function K0(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function bu(e) {
  return (t, r = {}) => {
    const o = t.match(e.matchPattern);
    if (!o) return null;
    const i = o[0], a = t.match(e.parsePattern);
    if (!a) return null;
    let s = e.valueCallback ? e.valueCallback(a[0]) : a[0];
    s = r.valueCallback ? r.valueCallback(s) : s;
    const l = t.slice(i.length);
    return { value: s, rest: l };
  };
}
function q0(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
let G0 = {};
function X0() {
  return G0;
}
function Rs(e, t) {
  var l, d, u, c;
  const r = X0(), o = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (l = t == null ? void 0 : t.locale) == null ? void 0 : l.options) == null ? void 0 : d.weekStartsOn) ?? r.weekStartsOn ?? ((c = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = q0(e), a = i.getDay(), s = (a < o ? 7 : 0) + a - o;
  return i.setDate(i.getDate() - s), i.setHours(0, 0, 0, 0), i;
}
function Y0(e, t, r) {
  const o = Rs(e, r), i = Rs(t, r);
  return +o == +i;
}
const Z0 = {
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
}, J0 = (e, t, r) => {
  let o;
  const i = Z0[e];
  return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
}, Q0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, ev = (e, t, r, o) => Q0[e], tv = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, nv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, rv = {
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
}, ov = {
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
}, iv = {
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
}, av = {
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
}, lv = (e, t) => {
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
}, sv = {
  ordinalNumber: lv,
  era: bn({
    values: tv,
    defaultWidth: "wide"
  }),
  quarter: bn({
    values: nv,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: bn({
    values: rv,
    defaultWidth: "wide"
  }),
  day: bn({
    values: ov,
    defaultWidth: "wide"
  }),
  dayPeriod: bn({
    values: iv,
    defaultWidth: "wide",
    formattingValues: av,
    defaultFormattingWidth: "wide"
  })
}, dv = /^(\d+)(th|st|nd|rd)?/i, uv = /\d+/i, cv = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, fv = {
  any: [/^b/i, /^(a|c)/i]
}, hv = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, vv = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, gv = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, pv = {
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
}, mv = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, bv = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, xv = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, yv = {
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
}, Cv = {
  ordinalNumber: bu({
    matchPattern: dv,
    parsePattern: uv,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: xn({
    matchPatterns: cv,
    defaultMatchWidth: "wide",
    parsePatterns: fv,
    defaultParseWidth: "any"
  }),
  quarter: xn({
    matchPatterns: hv,
    defaultMatchWidth: "wide",
    parsePatterns: vv,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: xn({
    matchPatterns: gv,
    defaultMatchWidth: "wide",
    parsePatterns: pv,
    defaultParseWidth: "any"
  }),
  day: xn({
    matchPatterns: mv,
    defaultMatchWidth: "wide",
    parsePatterns: bv,
    defaultParseWidth: "any"
  }),
  dayPeriod: xn({
    matchPatterns: xv,
    defaultMatchWidth: "any",
    parsePatterns: yv,
    defaultParseWidth: "any"
  })
}, wv = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Sv = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Bv = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, kv = {
  date: Lr({
    formats: wv,
    defaultWidth: "full"
  }),
  time: Lr({
    formats: Sv,
    defaultWidth: "full"
  }),
  dateTime: Lr({
    formats: Bv,
    defaultWidth: "full"
  })
}, Rv = {
  code: "en-US",
  formatDistance: J0,
  formatLong: kv,
  formatRelative: ev,
  localize: sv,
  match: Cv,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Pv = {
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
}, Fv = (e, t, r) => {
  let o;
  const i = Pv[e];
  return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", String(t)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? o + "内" : o + "前" : o;
}, $v = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, zv = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, Av = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Ev = {
  date: Lr({
    formats: $v,
    defaultWidth: "full"
  }),
  time: Lr({
    formats: zv,
    defaultWidth: "full"
  }),
  dateTime: Lr({
    formats: Av,
    defaultWidth: "full"
  })
};
function Ps(e, t, r) {
  const o = "eeee p";
  return Y0(e, t, r) ? o : e.getTime() > t.getTime() ? "'下个'" + o : "'上个'" + o;
}
const Dv = {
  lastWeek: Ps,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: Ps,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, Tv = (e, t, r, o) => {
  const i = Dv[e];
  return typeof i == "function" ? i(t, r, o) : i;
}, Ov = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, Mv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, Iv = {
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
}, Lv = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, Nv = {
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
}, Hv = {
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
}, jv = (e, t) => {
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
}, Wv = {
  ordinalNumber: jv,
  era: bn({
    values: Ov,
    defaultWidth: "wide"
  }),
  quarter: bn({
    values: Mv,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: bn({
    values: Iv,
    defaultWidth: "wide"
  }),
  day: bn({
    values: Lv,
    defaultWidth: "wide"
  }),
  dayPeriod: bn({
    values: Nv,
    defaultWidth: "wide",
    formattingValues: Hv,
    defaultFormattingWidth: "wide"
  })
}, _v = /^(第\s*)?\d+(日|时|分|秒)?/i, Vv = /\d+/i, Uv = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, Kv = {
  any: [/^(前)/i, /^(公元)/i]
}, qv = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, Gv = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, Xv = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, Yv = {
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
}, Zv = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, Jv = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, Qv = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, eg = {
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
}, tg = {
  ordinalNumber: bu({
    matchPattern: _v,
    parsePattern: Vv,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: xn({
    matchPatterns: Uv,
    defaultMatchWidth: "wide",
    parsePatterns: Kv,
    defaultParseWidth: "any"
  }),
  quarter: xn({
    matchPatterns: qv,
    defaultMatchWidth: "wide",
    parsePatterns: Gv,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: xn({
    matchPatterns: Xv,
    defaultMatchWidth: "wide",
    parsePatterns: Yv,
    defaultParseWidth: "any"
  }),
  day: xn({
    matchPatterns: Zv,
    defaultMatchWidth: "wide",
    parsePatterns: Jv,
    defaultParseWidth: "any"
  }),
  dayPeriod: xn({
    matchPatterns: Qv,
    defaultMatchWidth: "any",
    parsePatterns: eg,
    defaultParseWidth: "any"
  })
}, ng = {
  code: "zh-CN",
  formatDistance: Fv,
  formatLong: Ev,
  formatRelative: Tv,
  localize: Wv,
  match: tg,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, rg = {
  name: "en-US",
  locale: Rv
}, og = {
  name: "zh-CN",
  locale: ng
};
var xu = typeof global == "object" && global && global.Object === Object && global, ig = typeof self == "object" && self && self.Object === Object && self, kn = xu || ig || Function("return this")(), qn = kn.Symbol, yu = Object.prototype, ag = yu.hasOwnProperty, lg = yu.toString, ao = qn ? qn.toStringTag : void 0;
function sg(e) {
  var t = ag.call(e, ao), r = e[ao];
  try {
    e[ao] = void 0;
    var o = !0;
  } catch {
  }
  var i = lg.call(e);
  return o && (t ? e[ao] = r : delete e[ao]), i;
}
var dg = Object.prototype, ug = dg.toString;
function cg(e) {
  return ug.call(e);
}
var fg = "[object Null]", hg = "[object Undefined]", Fs = qn ? qn.toStringTag : void 0;
function Cr(e) {
  return e == null ? e === void 0 ? hg : fg : Fs && Fs in Object(e) ? sg(e) : cg(e);
}
function Gn(e) {
  return e != null && typeof e == "object";
}
var vg = "[object Symbol]";
function fl(e) {
  return typeof e == "symbol" || Gn(e) && Cr(e) == vg;
}
function Cu(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, i = Array(o); ++r < o; )
    i[r] = t(e[r], r, e);
  return i;
}
var sn = Array.isArray, gg = 1 / 0, $s = qn ? qn.prototype : void 0, zs = $s ? $s.toString : void 0;
function wu(e) {
  if (typeof e == "string")
    return e;
  if (sn(e))
    return Cu(e, wu) + "";
  if (fl(e))
    return zs ? zs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -gg ? "-0" : t;
}
function Xn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function hl(e) {
  return e;
}
var pg = "[object AsyncFunction]", mg = "[object Function]", bg = "[object GeneratorFunction]", xg = "[object Proxy]";
function vl(e) {
  if (!Xn(e))
    return !1;
  var t = Cr(e);
  return t == mg || t == bg || t == pg || t == xg;
}
var na = kn["__core-js_shared__"], As = function() {
  var e = /[^.]+$/.exec(na && na.keys && na.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function yg(e) {
  return !!As && As in e;
}
var Cg = Function.prototype, wg = Cg.toString;
function wr(e) {
  if (e != null) {
    try {
      return wg.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Sg = /[\\^$.*+?()[\]{}|]/g, Bg = /^\[object .+?Constructor\]$/, kg = Function.prototype, Rg = Object.prototype, Pg = kg.toString, Fg = Rg.hasOwnProperty, $g = RegExp(
  "^" + Pg.call(Fg).replace(Sg, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function zg(e) {
  if (!Xn(e) || yg(e))
    return !1;
  var t = vl(e) ? $g : Bg;
  return t.test(wr(e));
}
function Ag(e, t) {
  return e == null ? void 0 : e[t];
}
function Sr(e, t) {
  var r = Ag(e, t);
  return zg(r) ? r : void 0;
}
var Ba = Sr(kn, "WeakMap"), Es = Object.create, Eg = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Xn(t))
      return {};
    if (Es)
      return Es(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function Dg(e, t, r) {
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
function Tg(e, t) {
  var r = -1, o = e.length;
  for (t || (t = Array(o)); ++r < o; )
    t[r] = e[r];
  return t;
}
var Og = 800, Mg = 16, Ig = Date.now;
function Lg(e) {
  var t = 0, r = 0;
  return function() {
    var o = Ig(), i = Mg - (o - r);
    if (r = o, i > 0) {
      if (++t >= Og)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Ng(e) {
  return function() {
    return e;
  };
}
var ci = function() {
  try {
    var e = Sr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Hg = ci ? function(e, t) {
  return ci(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Ng(t),
    writable: !0
  });
} : hl, jg = Lg(Hg), Wg = 9007199254740991, _g = /^(?:0|[1-9]\d*)$/;
function gl(e, t) {
  var r = typeof e;
  return t = t ?? Wg, !!t && (r == "number" || r != "symbol" && _g.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function pl(e, t, r) {
  t == "__proto__" && ci ? ci(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function Oo(e, t) {
  return e === t || e !== e && t !== t;
}
var Vg = Object.prototype, Ug = Vg.hasOwnProperty;
function Kg(e, t, r) {
  var o = e[t];
  (!(Ug.call(e, t) && Oo(o, r)) || r === void 0 && !(t in e)) && pl(e, t, r);
}
function qg(e, t, r, o) {
  var i = !r;
  r || (r = {});
  for (var a = -1, s = t.length; ++a < s; ) {
    var l = t[a], d = void 0;
    d === void 0 && (d = e[l]), i ? pl(r, l, d) : Kg(r, l, d);
  }
  return r;
}
var Ds = Math.max;
function Gg(e, t, r) {
  return t = Ds(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, i = -1, a = Ds(o.length - t, 0), s = Array(a); ++i < a; )
      s[i] = o[t + i];
    i = -1;
    for (var l = Array(t + 1); ++i < t; )
      l[i] = o[i];
    return l[t] = r(s), Dg(e, this, l);
  };
}
function Xg(e, t) {
  return jg(Gg(e, t, hl), e + "");
}
var Yg = 9007199254740991;
function ml(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Yg;
}
function Yr(e) {
  return e != null && ml(e.length) && !vl(e);
}
function Zg(e, t, r) {
  if (!Xn(r))
    return !1;
  var o = typeof t;
  return (o == "number" ? Yr(r) && gl(t, r.length) : o == "string" && t in r) ? Oo(r[t], e) : !1;
}
function Jg(e) {
  return Xg(function(t, r) {
    var o = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, s = i > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, s && Zg(r[0], r[1], s) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++o < i; ) {
      var l = r[o];
      l && e(t, l, o, a);
    }
    return t;
  });
}
var Qg = Object.prototype;
function bl(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Qg;
  return e === r;
}
function ep(e, t) {
  for (var r = -1, o = Array(e); ++r < e; )
    o[r] = t(r);
  return o;
}
var tp = "[object Arguments]";
function Ts(e) {
  return Gn(e) && Cr(e) == tp;
}
var Su = Object.prototype, np = Su.hasOwnProperty, rp = Su.propertyIsEnumerable, fi = Ts(/* @__PURE__ */ function() {
  return arguments;
}()) ? Ts : function(e) {
  return Gn(e) && np.call(e, "callee") && !rp.call(e, "callee");
};
function op() {
  return !1;
}
var Bu = typeof exports == "object" && exports && !exports.nodeType && exports, Os = Bu && typeof module == "object" && module && !module.nodeType && module, ip = Os && Os.exports === Bu, Ms = ip ? kn.Buffer : void 0, ap = Ms ? Ms.isBuffer : void 0, hi = ap || op, lp = "[object Arguments]", sp = "[object Array]", dp = "[object Boolean]", up = "[object Date]", cp = "[object Error]", fp = "[object Function]", hp = "[object Map]", vp = "[object Number]", gp = "[object Object]", pp = "[object RegExp]", mp = "[object Set]", bp = "[object String]", xp = "[object WeakMap]", yp = "[object ArrayBuffer]", Cp = "[object DataView]", wp = "[object Float32Array]", Sp = "[object Float64Array]", Bp = "[object Int8Array]", kp = "[object Int16Array]", Rp = "[object Int32Array]", Pp = "[object Uint8Array]", Fp = "[object Uint8ClampedArray]", $p = "[object Uint16Array]", zp = "[object Uint32Array]", ft = {};
ft[wp] = ft[Sp] = ft[Bp] = ft[kp] = ft[Rp] = ft[Pp] = ft[Fp] = ft[$p] = ft[zp] = !0;
ft[lp] = ft[sp] = ft[yp] = ft[dp] = ft[Cp] = ft[up] = ft[cp] = ft[fp] = ft[hp] = ft[vp] = ft[gp] = ft[pp] = ft[mp] = ft[bp] = ft[xp] = !1;
function Ap(e) {
  return Gn(e) && ml(e.length) && !!ft[Cr(e)];
}
function Ep(e) {
  return function(t) {
    return e(t);
  };
}
var ku = typeof exports == "object" && exports && !exports.nodeType && exports, xo = ku && typeof module == "object" && module && !module.nodeType && module, Dp = xo && xo.exports === ku, ra = Dp && xu.process, Is = function() {
  try {
    var e = xo && xo.require && xo.require("util").types;
    return e || ra && ra.binding && ra.binding("util");
  } catch {
  }
}(), Ls = Is && Is.isTypedArray, xl = Ls ? Ep(Ls) : Ap, Tp = Object.prototype, Op = Tp.hasOwnProperty;
function Ru(e, t) {
  var r = sn(e), o = !r && fi(e), i = !r && !o && hi(e), a = !r && !o && !i && xl(e), s = r || o || i || a, l = s ? ep(e.length, String) : [], d = l.length;
  for (var u in e)
    (t || Op.call(e, u)) && !(s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    gl(u, d))) && l.push(u);
  return l;
}
function Pu(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var Mp = Pu(Object.keys, Object), Ip = Object.prototype, Lp = Ip.hasOwnProperty;
function Np(e) {
  if (!bl(e))
    return Mp(e);
  var t = [];
  for (var r in Object(e))
    Lp.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function yl(e) {
  return Yr(e) ? Ru(e) : Np(e);
}
function Hp(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var jp = Object.prototype, Wp = jp.hasOwnProperty;
function _p(e) {
  if (!Xn(e))
    return Hp(e);
  var t = bl(e), r = [];
  for (var o in e)
    o == "constructor" && (t || !Wp.call(e, o)) || r.push(o);
  return r;
}
function Fu(e) {
  return Yr(e) ? Ru(e, !0) : _p(e);
}
var Vp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Up = /^\w*$/;
function Cl(e, t) {
  if (sn(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || fl(e) ? !0 : Up.test(e) || !Vp.test(e) || t != null && e in Object(t);
}
var ko = Sr(Object, "create");
function Kp() {
  this.__data__ = ko ? ko(null) : {}, this.size = 0;
}
function qp(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Gp = "__lodash_hash_undefined__", Xp = Object.prototype, Yp = Xp.hasOwnProperty;
function Zp(e) {
  var t = this.__data__;
  if (ko) {
    var r = t[e];
    return r === Gp ? void 0 : r;
  }
  return Yp.call(t, e) ? t[e] : void 0;
}
var Jp = Object.prototype, Qp = Jp.hasOwnProperty;
function em(e) {
  var t = this.__data__;
  return ko ? t[e] !== void 0 : Qp.call(t, e);
}
var tm = "__lodash_hash_undefined__";
function nm(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = ko && t === void 0 ? tm : t, this;
}
function ur(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
ur.prototype.clear = Kp;
ur.prototype.delete = qp;
ur.prototype.get = Zp;
ur.prototype.has = em;
ur.prototype.set = nm;
function rm() {
  this.__data__ = [], this.size = 0;
}
function ki(e, t) {
  for (var r = e.length; r--; )
    if (Oo(e[r][0], t))
      return r;
  return -1;
}
var om = Array.prototype, im = om.splice;
function am(e) {
  var t = this.__data__, r = ki(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : im.call(t, r, 1), --this.size, !0;
}
function lm(e) {
  var t = this.__data__, r = ki(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function sm(e) {
  return ki(this.__data__, e) > -1;
}
function dm(e, t) {
  var r = this.__data__, o = ki(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function Dn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Dn.prototype.clear = rm;
Dn.prototype.delete = am;
Dn.prototype.get = lm;
Dn.prototype.has = sm;
Dn.prototype.set = dm;
var Ro = Sr(kn, "Map");
function um() {
  this.size = 0, this.__data__ = {
    hash: new ur(),
    map: new (Ro || Dn)(),
    string: new ur()
  };
}
function cm(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function Ri(e, t) {
  var r = e.__data__;
  return cm(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function fm(e) {
  var t = Ri(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function hm(e) {
  return Ri(this, e).get(e);
}
function vm(e) {
  return Ri(this, e).has(e);
}
function gm(e, t) {
  var r = Ri(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function Tn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Tn.prototype.clear = um;
Tn.prototype.delete = fm;
Tn.prototype.get = hm;
Tn.prototype.has = vm;
Tn.prototype.set = gm;
var pm = "Expected a function";
function wl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(pm);
  var r = function() {
    var o = arguments, i = t ? t.apply(this, o) : o[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var s = e.apply(this, o);
    return r.cache = a.set(i, s) || a, s;
  };
  return r.cache = new (wl.Cache || Tn)(), r;
}
wl.Cache = Tn;
var mm = 500;
function bm(e) {
  var t = wl(e, function(o) {
    return r.size === mm && r.clear(), o;
  }), r = t.cache;
  return t;
}
var xm = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, ym = /\\(\\)?/g, Cm = bm(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(xm, function(r, o, i, a) {
    t.push(i ? a.replace(ym, "$1") : o || r);
  }), t;
});
function $u(e) {
  return e == null ? "" : wu(e);
}
function zu(e, t) {
  return sn(e) ? e : Cl(e, t) ? [e] : Cm($u(e));
}
var wm = 1 / 0;
function Pi(e) {
  if (typeof e == "string" || fl(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -wm ? "-0" : t;
}
function Au(e, t) {
  t = zu(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[Pi(t[r++])];
  return r && r == o ? e : void 0;
}
function Po(e, t, r) {
  var o = e == null ? void 0 : Au(e, t);
  return o === void 0 ? r : o;
}
function Sm(e, t) {
  for (var r = -1, o = t.length, i = e.length; ++r < o; )
    e[i + r] = t[r];
  return e;
}
var Eu = Pu(Object.getPrototypeOf, Object), Bm = "[object Object]", km = Function.prototype, Rm = Object.prototype, Du = km.toString, Pm = Rm.hasOwnProperty, Fm = Du.call(Object);
function $m(e) {
  if (!Gn(e) || Cr(e) != Bm)
    return !1;
  var t = Eu(e);
  if (t === null)
    return !0;
  var r = Pm.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && Du.call(r) == Fm;
}
function zm(e, t, r) {
  var o = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++o < i; )
    a[o] = e[o + t];
  return a;
}
function Am(e, t, r) {
  var o = e.length;
  return r = r === void 0 ? o : r, !t && r >= o ? e : zm(e, t, r);
}
var Em = "\\ud800-\\udfff", Dm = "\\u0300-\\u036f", Tm = "\\ufe20-\\ufe2f", Om = "\\u20d0-\\u20ff", Mm = Dm + Tm + Om, Im = "\\ufe0e\\ufe0f", Lm = "\\u200d", Nm = RegExp("[" + Lm + Em + Mm + Im + "]");
function Tu(e) {
  return Nm.test(e);
}
function Hm(e) {
  return e.split("");
}
var Ou = "\\ud800-\\udfff", jm = "\\u0300-\\u036f", Wm = "\\ufe20-\\ufe2f", _m = "\\u20d0-\\u20ff", Vm = jm + Wm + _m, Um = "\\ufe0e\\ufe0f", Km = "[" + Ou + "]", ka = "[" + Vm + "]", Ra = "\\ud83c[\\udffb-\\udfff]", qm = "(?:" + ka + "|" + Ra + ")", Mu = "[^" + Ou + "]", Iu = "(?:\\ud83c[\\udde6-\\uddff]){2}", Lu = "[\\ud800-\\udbff][\\udc00-\\udfff]", Gm = "\\u200d", Nu = qm + "?", Hu = "[" + Um + "]?", Xm = "(?:" + Gm + "(?:" + [Mu, Iu, Lu].join("|") + ")" + Hu + Nu + ")*", Ym = Hu + Nu + Xm, Zm = "(?:" + [Mu + ka + "?", ka, Iu, Lu, Km].join("|") + ")", Jm = RegExp(Ra + "(?=" + Ra + ")|" + Zm + Ym, "g");
function Qm(e) {
  return e.match(Jm) || [];
}
function eb(e) {
  return Tu(e) ? Qm(e) : Hm(e);
}
function tb(e) {
  return function(t) {
    t = $u(t);
    var r = Tu(t) ? eb(t) : void 0, o = r ? r[0] : t.charAt(0), i = r ? Am(r, 1).join("") : t.slice(1);
    return o[e]() + i;
  };
}
var nb = tb("toUpperCase");
function rb() {
  this.__data__ = new Dn(), this.size = 0;
}
function ob(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function ib(e) {
  return this.__data__.get(e);
}
function ab(e) {
  return this.__data__.has(e);
}
var lb = 200;
function sb(e, t) {
  var r = this.__data__;
  if (r instanceof Dn) {
    var o = r.__data__;
    if (!Ro || o.length < lb - 1)
      return o.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new Tn(o);
  }
  return r.set(e, t), this.size = r.size, this;
}
function yn(e) {
  var t = this.__data__ = new Dn(e);
  this.size = t.size;
}
yn.prototype.clear = rb;
yn.prototype.delete = ob;
yn.prototype.get = ib;
yn.prototype.has = ab;
yn.prototype.set = sb;
var ju = typeof exports == "object" && exports && !exports.nodeType && exports, Ns = ju && typeof module == "object" && module && !module.nodeType && module, db = Ns && Ns.exports === ju, Hs = db ? kn.Buffer : void 0;
Hs && Hs.allocUnsafe;
function ub(e, t) {
  return e.slice();
}
function cb(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, i = 0, a = []; ++r < o; ) {
    var s = e[r];
    t(s, r, e) && (a[i++] = s);
  }
  return a;
}
function fb() {
  return [];
}
var hb = Object.prototype, vb = hb.propertyIsEnumerable, js = Object.getOwnPropertySymbols, gb = js ? function(e) {
  return e == null ? [] : (e = Object(e), cb(js(e), function(t) {
    return vb.call(e, t);
  }));
} : fb;
function pb(e, t, r) {
  var o = t(e);
  return sn(e) ? o : Sm(o, r(e));
}
function Ws(e) {
  return pb(e, yl, gb);
}
var Pa = Sr(kn, "DataView"), Fa = Sr(kn, "Promise"), $a = Sr(kn, "Set"), _s = "[object Map]", mb = "[object Object]", Vs = "[object Promise]", Us = "[object Set]", Ks = "[object WeakMap]", qs = "[object DataView]", bb = wr(Pa), xb = wr(Ro), yb = wr(Fa), Cb = wr($a), wb = wr(Ba), Wn = Cr;
(Pa && Wn(new Pa(new ArrayBuffer(1))) != qs || Ro && Wn(new Ro()) != _s || Fa && Wn(Fa.resolve()) != Vs || $a && Wn(new $a()) != Us || Ba && Wn(new Ba()) != Ks) && (Wn = function(e) {
  var t = Cr(e), r = t == mb ? e.constructor : void 0, o = r ? wr(r) : "";
  if (o)
    switch (o) {
      case bb:
        return qs;
      case xb:
        return _s;
      case yb:
        return Vs;
      case Cb:
        return Us;
      case wb:
        return Ks;
    }
  return t;
});
var vi = kn.Uint8Array;
function Sb(e) {
  var t = new e.constructor(e.byteLength);
  return new vi(t).set(new vi(e)), t;
}
function Bb(e, t) {
  var r = Sb(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function kb(e) {
  return typeof e.constructor == "function" && !bl(e) ? Eg(Eu(e)) : {};
}
var Rb = "__lodash_hash_undefined__";
function Pb(e) {
  return this.__data__.set(e, Rb), this;
}
function Fb(e) {
  return this.__data__.has(e);
}
function gi(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Tn(); ++t < r; )
    this.add(e[t]);
}
gi.prototype.add = gi.prototype.push = Pb;
gi.prototype.has = Fb;
function $b(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function zb(e, t) {
  return e.has(t);
}
var Ab = 1, Eb = 2;
function Wu(e, t, r, o, i, a) {
  var s = r & Ab, l = e.length, d = t.length;
  if (l != d && !(s && d > l))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var v = -1, g = !0, m = r & Eb ? new gi() : void 0;
  for (a.set(e, t), a.set(t, e); ++v < l; ) {
    var h = e[v], p = t[v];
    if (o)
      var x = s ? o(p, h, v, t, e, a) : o(h, p, v, e, t, a);
    if (x !== void 0) {
      if (x)
        continue;
      g = !1;
      break;
    }
    if (m) {
      if (!$b(t, function(b, y) {
        if (!zb(m, y) && (h === b || i(h, b, r, o, a)))
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
function Db(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o, i) {
    r[++t] = [i, o];
  }), r;
}
function Tb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o) {
    r[++t] = o;
  }), r;
}
var Ob = 1, Mb = 2, Ib = "[object Boolean]", Lb = "[object Date]", Nb = "[object Error]", Hb = "[object Map]", jb = "[object Number]", Wb = "[object RegExp]", _b = "[object Set]", Vb = "[object String]", Ub = "[object Symbol]", Kb = "[object ArrayBuffer]", qb = "[object DataView]", Gs = qn ? qn.prototype : void 0, oa = Gs ? Gs.valueOf : void 0;
function Gb(e, t, r, o, i, a, s) {
  switch (r) {
    case qb:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Kb:
      return !(e.byteLength != t.byteLength || !a(new vi(e), new vi(t)));
    case Ib:
    case Lb:
    case jb:
      return Oo(+e, +t);
    case Nb:
      return e.name == t.name && e.message == t.message;
    case Wb:
    case Vb:
      return e == t + "";
    case Hb:
      var l = Db;
    case _b:
      var d = o & Ob;
      if (l || (l = Tb), e.size != t.size && !d)
        return !1;
      var u = s.get(e);
      if (u)
        return u == t;
      o |= Mb, s.set(e, t);
      var c = Wu(l(e), l(t), o, i, a, s);
      return s.delete(e), c;
    case Ub:
      if (oa)
        return oa.call(e) == oa.call(t);
  }
  return !1;
}
var Xb = 1, Yb = Object.prototype, Zb = Yb.hasOwnProperty;
function Jb(e, t, r, o, i, a) {
  var s = r & Xb, l = Ws(e), d = l.length, u = Ws(t), c = u.length;
  if (d != c && !s)
    return !1;
  for (var v = d; v--; ) {
    var g = l[v];
    if (!(s ? g in t : Zb.call(t, g)))
      return !1;
  }
  var m = a.get(e), h = a.get(t);
  if (m && h)
    return m == t && h == e;
  var p = !0;
  a.set(e, t), a.set(t, e);
  for (var x = s; ++v < d; ) {
    g = l[v];
    var b = e[g], y = t[g];
    if (o)
      var B = s ? o(y, b, g, t, e, a) : o(b, y, g, e, t, a);
    if (!(B === void 0 ? b === y || i(b, y, r, o, a) : B)) {
      p = !1;
      break;
    }
    x || (x = g == "constructor");
  }
  if (p && !x) {
    var C = e.constructor, P = t.constructor;
    C != P && "constructor" in e && "constructor" in t && !(typeof C == "function" && C instanceof C && typeof P == "function" && P instanceof P) && (p = !1);
  }
  return a.delete(e), a.delete(t), p;
}
var Qb = 1, Xs = "[object Arguments]", Ys = "[object Array]", Yo = "[object Object]", ex = Object.prototype, Zs = ex.hasOwnProperty;
function tx(e, t, r, o, i, a) {
  var s = sn(e), l = sn(t), d = s ? Ys : Wn(e), u = l ? Ys : Wn(t);
  d = d == Xs ? Yo : d, u = u == Xs ? Yo : u;
  var c = d == Yo, v = u == Yo, g = d == u;
  if (g && hi(e)) {
    if (!hi(t))
      return !1;
    s = !0, c = !1;
  }
  if (g && !c)
    return a || (a = new yn()), s || xl(e) ? Wu(e, t, r, o, i, a) : Gb(e, t, d, r, o, i, a);
  if (!(r & Qb)) {
    var m = c && Zs.call(e, "__wrapped__"), h = v && Zs.call(t, "__wrapped__");
    if (m || h) {
      var p = m ? e.value() : e, x = h ? t.value() : t;
      return a || (a = new yn()), i(p, x, r, o, a);
    }
  }
  return g ? (a || (a = new yn()), Jb(e, t, r, o, i, a)) : !1;
}
function Sl(e, t, r, o, i) {
  return e === t ? !0 : e == null || t == null || !Gn(e) && !Gn(t) ? e !== e && t !== t : tx(e, t, r, o, Sl, i);
}
var nx = 1, rx = 2;
function ox(e, t, r, o) {
  var i = r.length, a = i;
  if (e == null)
    return !a;
  for (e = Object(e); i--; ) {
    var s = r[i];
    if (s[2] ? s[1] !== e[s[0]] : !(s[0] in e))
      return !1;
  }
  for (; ++i < a; ) {
    s = r[i];
    var l = s[0], d = e[l], u = s[1];
    if (s[2]) {
      if (d === void 0 && !(l in e))
        return !1;
    } else {
      var c = new yn(), v;
      if (!(v === void 0 ? Sl(u, d, nx | rx, o, c) : v))
        return !1;
    }
  }
  return !0;
}
function _u(e) {
  return e === e && !Xn(e);
}
function ix(e) {
  for (var t = yl(e), r = t.length; r--; ) {
    var o = t[r], i = e[o];
    t[r] = [o, i, _u(i)];
  }
  return t;
}
function Vu(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function ax(e) {
  var t = ix(e);
  return t.length == 1 && t[0][2] ? Vu(t[0][0], t[0][1]) : function(r) {
    return r === e || ox(r, e, t);
  };
}
function lx(e, t) {
  return e != null && t in Object(e);
}
function sx(e, t, r) {
  t = zu(t, e);
  for (var o = -1, i = t.length, a = !1; ++o < i; ) {
    var s = Pi(t[o]);
    if (!(a = e != null && r(e, s)))
      break;
    e = e[s];
  }
  return a || ++o != i ? a : (i = e == null ? 0 : e.length, !!i && ml(i) && gl(s, i) && (sn(e) || fi(e)));
}
function dx(e, t) {
  return e != null && sx(e, t, lx);
}
var ux = 1, cx = 2;
function fx(e, t) {
  return Cl(e) && _u(t) ? Vu(Pi(e), t) : function(r) {
    var o = Po(r, e);
    return o === void 0 && o === t ? dx(r, e) : Sl(t, o, ux | cx);
  };
}
function hx(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function vx(e) {
  return function(t) {
    return Au(t, e);
  };
}
function gx(e) {
  return Cl(e) ? hx(Pi(e)) : vx(e);
}
function px(e) {
  return typeof e == "function" ? e : e == null ? hl : typeof e == "object" ? sn(e) ? fx(e[0], e[1]) : ax(e) : gx(e);
}
function mx(e) {
  return function(t, r, o) {
    for (var i = -1, a = Object(t), s = o(t), l = s.length; l--; ) {
      var d = s[++i];
      if (r(a[d], d, a) === !1)
        break;
    }
    return t;
  };
}
var Uu = mx();
function bx(e, t) {
  return e && Uu(e, t, yl);
}
function xx(e, t) {
  return function(r, o) {
    if (r == null)
      return r;
    if (!Yr(r))
      return e(r, o);
    for (var i = r.length, a = -1, s = Object(r); ++a < i && o(s[a], a, s) !== !1; )
      ;
    return r;
  };
}
var yx = xx(bx);
function za(e, t, r) {
  (r !== void 0 && !Oo(e[t], r) || r === void 0 && !(t in e)) && pl(e, t, r);
}
function Cx(e) {
  return Gn(e) && Yr(e);
}
function Aa(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function wx(e) {
  return qg(e, Fu(e));
}
function Sx(e, t, r, o, i, a, s) {
  var l = Aa(e, r), d = Aa(t, r), u = s.get(d);
  if (u) {
    za(e, r, u);
    return;
  }
  var c = a ? a(l, d, r + "", e, t, s) : void 0, v = c === void 0;
  if (v) {
    var g = sn(d), m = !g && hi(d), h = !g && !m && xl(d);
    c = d, g || m || h ? sn(l) ? c = l : Cx(l) ? c = Tg(l) : m ? (v = !1, c = ub(d)) : h ? (v = !1, c = Bb(d)) : c = [] : $m(d) || fi(d) ? (c = l, fi(l) ? c = wx(l) : (!Xn(l) || vl(l)) && (c = kb(d))) : v = !1;
  }
  v && (s.set(d, c), i(c, d, o, a, s), s.delete(d)), za(e, r, c);
}
function Ku(e, t, r, o, i) {
  e !== t && Uu(t, function(a, s) {
    if (i || (i = new yn()), Xn(a))
      Sx(e, t, s, r, Ku, o, i);
    else {
      var l = o ? o(Aa(e, s), a, s + "", e, t, i) : void 0;
      l === void 0 && (l = a), za(e, s, l);
    }
  }, Fu);
}
function Bx(e, t) {
  var r = -1, o = Yr(e) ? Array(e.length) : [];
  return yx(e, function(i, a, s) {
    o[++r] = t(i, a, s);
  }), o;
}
function kx(e, t) {
  var r = sn(e) ? Cu : Bx;
  return r(e, px(t));
}
var uo = Jg(function(e, t, r) {
  Ku(e, t, r);
});
function cr(e) {
  const {
    mergedLocaleRef: t,
    mergedDateLocaleRef: r
  } = pe(hn, null) || {}, o = E(() => {
    var a, s;
    return (s = (a = t == null ? void 0 : t.value) === null || a === void 0 ? void 0 : a[e]) !== null && s !== void 0 ? s : _0[e];
  });
  return {
    dateLocaleRef: E(() => {
      var a;
      return (a = r == null ? void 0 : r.value) !== null && a !== void 0 ? a : rg;
    }),
    localeRef: o
  };
}
const _r = "naive-ui-style";
function kt(e, t, r) {
  if (!t) return;
  const o = xr(), i = E(() => {
    const {
      value: l
    } = t;
    if (!l)
      return;
    const d = l[e];
    if (d)
      return d;
  }), a = pe(hn, null), s = () => {
    rt(() => {
      const {
        value: l
      } = r, d = `${l}${e}Rtl`;
      if (gh(d, o)) return;
      const {
        value: u
      } = i;
      u && u.style.mount({
        id: d,
        head: !0,
        anchorMetaName: _r,
        props: {
          bPrefix: l ? `.${l}-` : void 0
        },
        ssr: o,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    });
  };
  return o ? s() : pr(s), i;
}
const dn = {
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
  fontSize: Rx,
  fontFamily: Px,
  lineHeight: Fx
} = dn, qu = D("body", `
 margin: 0;
 font-size: ${Rx};
 font-family: ${Px};
 line-height: ${Fx};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [D("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function Yn(e, t, r) {
  if (!t) {
    process.env.NODE_ENV !== "production" && An("use-style", "No style is specified.");
    return;
  }
  const o = xr(), i = pe(hn, null), a = () => {
    const s = r.value;
    t.mount({
      id: s === void 0 ? e : s + e,
      head: !0,
      anchorMetaName: _r,
      props: {
        bPrefix: s ? `.${s}-` : void 0
      },
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    }), i != null && i.preflightStyleDisabled || qu.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: _r,
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    });
  };
  o ? a() : pr(a);
}
function ve(e, t, r, o, i, a) {
  const s = xr(), l = pe(hn, null);
  if (r) {
    const u = () => {
      const c = a == null ? void 0 : a.value;
      r.mount({
        id: c === void 0 ? t : c + t,
        head: !0,
        props: {
          bPrefix: c ? `.${c}-` : void 0
        },
        anchorMetaName: _r,
        ssr: s,
        parent: l == null ? void 0 : l.styleMountTarget
      }), l != null && l.preflightStyleDisabled || qu.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: _r,
        ssr: s,
        parent: l == null ? void 0 : l.styleMountTarget
      });
    };
    s ? u() : pr(u);
  }
  return E(() => {
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
        self: B = void 0,
        peers: C = {}
      } = {}
    } = (l == null ? void 0 : l.mergedThemeRef.value) || {}, {
      common: P = void 0,
      [e]: k = {}
    } = (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {}, {
      common: S,
      peers: w = {}
    } = k, R = uo({}, c || y || b || o.common, P, S, p), F = uo(
      // {}, executed every time, no need for empty obj
      (u = v || B || o.self) === null || u === void 0 ? void 0 : u(R),
      h,
      k,
      m
    );
    return {
      common: R,
      self: F,
      peers: uo({}, o.peers, C, g),
      peerOverrides: uo({}, h.peers, w, x)
    };
  });
}
ve.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const $x = z("base-icon", `
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
 `)]), Ct = J({
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
    Yn("-base-icon", $x, ie(e, "clsPrefix"));
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
}), Br = J({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: t
  }) {
    const r = br();
    return () => f(It, {
      name: "icon-switch-transition",
      appear: r.value
    }, t);
  }
}), zx = J({
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
function Zr(e, t) {
  const r = J({
    render() {
      return t();
    }
  });
  return J({
    name: nb(e),
    setup() {
      var o;
      const i = (o = pe(hn, null)) === null || o === void 0 ? void 0 : o.mergedIconsRef;
      return () => {
        var a;
        const s = (a = i == null ? void 0 : i.value) === null || a === void 0 ? void 0 : a[e];
        return s ? s() : f(r, null);
      };
    }
  });
}
const Js = J({
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
}), Ax = J({
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
}), Gu = J({
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
}), Ex = J({
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
}), Bl = J({
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
}), Dx = Zr("clear", () => f("svg", {
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
}))))), Tx = Zr("close", () => f("svg", {
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
}))))), Ox = J({
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
}), kl = Zr("error", () => f("svg", {
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
}))))), Mx = J({
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
}), Ix = J({
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
}), Qs = J({
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
}), ed = J({
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
}), Lx = J({
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
}), td = J({
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
}), pi = Zr("info", () => f("svg", {
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
}))))), nd = J({
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
}), Rl = Zr("success", () => f("svg", {
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
}))))), Fi = Zr("warning", () => f("svg", {
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
  cubicBezierEaseInOut: Nx
} = dn;
function en({
  originalTransform: e = "",
  left: t = 0,
  top: r = 0,
  transition: o = `all .3s ${Nx} !important`
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
const Hx = z("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [D(">", [T("clear", `
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
 `)]), T("placeholder", `
 display: flex;
 `), T("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [en({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), Ea = J({
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
    return Yn("-base-clear", Hx, ie(e, "clsPrefix")), {
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
    }, f(Br, null, {
      default: () => {
        var t, r;
        return this.show ? f("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, nn(this.$slots.icon, () => [f(Ct, {
          clsPrefix: e
        }, {
          default: () => f(Dx, null)
        })])) : f("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (r = (t = this.$slots).placeholder) === null || r === void 0 ? void 0 : r.call(t));
      }
    }));
  }
}), jx = z("base-close", `
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
`, [I("absolute", `
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
 `), Ue("disabled", [D("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), D("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), D("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), D("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), D("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), I("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), I("round", [D("&::before", `
 border-radius: 50%;
 `)])]), Jr = J({
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
    return Yn("-base-close", jx, ie(e, "clsPrefix")), () => {
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
        onMousedown: (l) => {
          e.focusable || l.preventDefault();
        },
        onClick: e.onClick
      }, f(Ct, {
        clsPrefix: t
      }, {
        default: () => f(Tx, null)
      }));
    };
  }
}), Pl = J({
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
    function r(l) {
      e.width ? l.style.maxWidth = `${l.offsetWidth}px` : l.style.maxHeight = `${l.offsetHeight}px`, l.offsetWidth;
    }
    function o(l) {
      e.width ? l.style.maxWidth = "0" : l.style.maxHeight = "0", l.offsetWidth;
      const {
        onLeave: d
      } = e;
      d && d();
    }
    function i(l) {
      e.width ? l.style.maxWidth = "" : l.style.maxHeight = "";
      const {
        onAfterLeave: d
      } = e;
      d && d();
    }
    function a(l) {
      if (l.style.transition = "none", e.width) {
        const d = l.offsetWidth;
        l.style.maxWidth = "0", l.offsetWidth, l.style.transition = "", l.style.maxWidth = `${d}px`;
      } else if (e.reverse)
        l.style.maxHeight = `${l.offsetHeight}px`, l.offsetHeight, l.style.transition = "", l.style.maxHeight = "0";
      else {
        const d = l.offsetHeight;
        l.style.maxHeight = "0", l.offsetWidth, l.style.transition = "", l.style.maxHeight = `${d}px`;
      }
      l.offsetWidth;
    }
    function s(l) {
      var d;
      e.width ? l.style.maxWidth = "" : e.reverse || (l.style.maxHeight = ""), (d = e.onAfterEnter) === null || d === void 0 || d.call(e);
    }
    return () => {
      const {
        group: l,
        width: d,
        appear: u,
        mode: c
      } = e, v = l ? Vf : It, g = {
        name: d ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: u,
        onEnter: a,
        onAfterEnter: s,
        onBeforeLeave: r,
        onLeave: o,
        onAfterLeave: i
      };
      return l || (g.mode = c), f(v, g, t);
    };
  }
}), Wx = J({
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
}), _x = D([D("@keyframes rotator", `
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
 `, [en()]), T("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [en({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), T("container", `
 animation: rotator 3s linear infinite both;
 `, [T("icon", `
 height: 1em;
 width: 1em;
 `)])])]), ia = "1.6s", Vx = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Zn = J({
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
  }, Vx),
  setup(e) {
    Yn("-base-loading", _x, ie(e, "clsPrefix"));
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
    }, f(Br, null, {
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
        dur: ia,
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
        dur: ia,
        fill: "freeze",
        repeatCount: "indefinite"
      }), f("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * t};${1.42 * t};${5.67 * t}`,
        begin: "0s",
        dur: ia,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : f("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), {
  cubicBezierEaseInOut: rd
} = dn;
function Mo({
  name: e = "fade-in",
  enterDuration: t = "0.2s",
  leaveDuration: r = "0.2s",
  enterCubicBezier: o = rd,
  leaveCubicBezier: i = rd
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
}, Ux = dr(Re.neutralBase), Xu = dr(Re.neutralInvertBase), Kx = `rgba(${Xu.slice(0, 3).join(", ")}, `;
function od(e) {
  return `${Kx + String(e)})`;
}
function Nt(e) {
  const t = Array.from(Xu);
  return t[3] = Number(e), Je(Ux, t);
}
const Ye = Object.assign(Object.assign({
  name: "common"
}, dn), {
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
  textColorDisabled: Nt(Re.alpha4),
  placeholderColor: Nt(Re.alpha4),
  placeholderColorDisabled: Nt(Re.alpha5),
  iconColor: Nt(Re.alpha4),
  iconColorHover: Wo(Nt(Re.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: Wo(Nt(Re.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: Nt(Re.alpha5),
  opacity1: Re.alpha1,
  opacity2: Re.alpha2,
  opacity3: Re.alpha3,
  opacity4: Re.alpha4,
  opacity5: Re.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: Nt(Number(Re.alphaClose)),
  closeIconColorHover: Nt(Number(Re.alphaClose)),
  closeIconColorPressed: Nt(Number(Re.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: Nt(Re.alpha4),
  clearColorHover: Wo(Nt(Re.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: Wo(Nt(Re.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: od(Re.alphaScrollbar),
  scrollbarColorHover: od(Re.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: Nt(Re.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: Re.neutralPopover,
  tableColor: Re.neutralCard,
  cardColor: Re.neutralCard,
  modalColor: Re.neutralModal,
  bodyColor: Re.neutralBody,
  tagColor: "#eee",
  avatarColor: Nt(Re.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: Nt(Re.alphaInput),
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
}), qx = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Gx(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: r,
    scrollbarHeight: o,
    scrollbarWidth: i,
    scrollbarBorderRadius: a
  } = e;
  return Object.assign(Object.assign({}, qx), {
    height: o,
    width: i,
    borderRadius: a,
    color: t,
    colorHover: r
  });
}
const Jn = {
  name: "Scrollbar",
  common: Ye,
  self: Gx
}, Xx = z("scrollbar", `
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
 `, [I("horizontal", `
 height: var(--n-scrollbar-height);
 `, [D(">", [T("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), I("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), I("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), I("vertical", `
 width: var(--n-scrollbar-width);
 `, [D(">", [T("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), I("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), I("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), I("disabled", [D(">", [T("scrollbar", "pointer-events: none;")])]), D(">", [T("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [Mo(), D("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Yx = Object.assign(Object.assign({}, ve.props), {
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
}), On = J({
  name: "Scrollbar",
  props: Yx,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Ae(e), i = kt("Scrollbar", o, t), a = L(null), s = L(null), l = L(null), d = L(null), u = L(null), c = L(null), v = L(null), g = L(null), m = L(null), h = L(null), p = L(null), x = L(0), b = L(0), y = L(!1), B = L(!1);
    let C = !1, P = !1, k, S, w = 0, R = 0, F = 0, N = 0;
    const $ = Nh(), n = ve("Scrollbar", "-scrollbar", Xx, Jn, e, t), O = E(() => {
      const {
        value: A
      } = g, {
        value: V
      } = c, {
        value: Q
      } = h;
      return A === null || V === null || Q === null ? 0 : Math.min(A, Q * A / V + Mt(n.value.self.width) * 1.5);
    }), M = E(() => `${O.value}px`), W = E(() => {
      const {
        value: A
      } = m, {
        value: V
      } = v, {
        value: Q
      } = p;
      return A === null || V === null || Q === null ? 0 : Q * A / V + Mt(n.value.self.height) * 1.5;
    }), H = E(() => `${W.value}px`), U = E(() => {
      const {
        value: A
      } = g, {
        value: V
      } = x, {
        value: Q
      } = c, {
        value: se
      } = h;
      if (A === null || Q === null || se === null)
        return 0;
      {
        const de = Q - A;
        return de ? V / de * (se - O.value) : 0;
      }
    }), ee = E(() => `${U.value}px`), Y = E(() => {
      const {
        value: A
      } = m, {
        value: V
      } = b, {
        value: Q
      } = v, {
        value: se
      } = p;
      if (A === null || Q === null || se === null)
        return 0;
      {
        const de = Q - A;
        return de ? V / de * (se - W.value) : 0;
      }
    }), K = E(() => `${Y.value}px`), j = E(() => {
      const {
        value: A
      } = g, {
        value: V
      } = c;
      return A !== null && V !== null && V > A;
    }), q = E(() => {
      const {
        value: A
      } = m, {
        value: V
      } = v;
      return A !== null && V !== null && V > A;
    }), X = E(() => {
      const {
        trigger: A
      } = e;
      return A === "none" || y.value;
    }), ae = E(() => {
      const {
        trigger: A
      } = e;
      return A === "none" || B.value;
    }), le = E(() => {
      const {
        container: A
      } = e;
      return A ? A() : s.value;
    }), ce = E(() => {
      const {
        content: A
      } = e;
      return A ? A() : l.value;
    }), be = (A, V) => {
      if (!e.scrollable) return;
      if (typeof A == "number") {
        Fe(A, V ?? 0, 0, !1, "auto");
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
        debounce: lt = !0
      } = A;
      (Q !== void 0 || se !== void 0) && Fe(Q ?? 0, se ?? 0, 0, !1, Se), Ne !== void 0 ? Fe(0, Ne.offsetTop, Ne.offsetHeight, lt, Se) : de !== void 0 && ge !== void 0 ? Fe(0, de * ge, ge, lt, Se) : me === "bottom" ? Fe(0, Number.MAX_SAFE_INTEGER, 0, !1, Se) : me === "top" && Fe(0, 0, 0, !1, Se);
    }, G = Vh(() => {
      e.container || be({
        top: x.value,
        left: b.value
      });
    }), ue = () => {
      G.isDeactivated || he();
    }, Pe = (A) => {
      if (G.isDeactivated) return;
      const {
        onResize: V
      } = e;
      V && V(A), he();
    }, xe = (A, V) => {
      if (!e.scrollable) return;
      const {
        value: Q
      } = le;
      Q && (typeof A == "object" ? Q.scrollBy(A) : Q.scrollBy(A, V || 0));
    };
    function Fe(A, V, Q, se, de) {
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
              left: A,
              top: V + Q - Se,
              behavior: de
            });
            return;
          }
        }
        ge.scrollTo({
          left: A,
          top: V,
          behavior: de
        });
      }
    }
    function $e() {
      ye(), Ce(), he();
    }
    function ut() {
      ot();
    }
    function ot() {
      vt(), gt();
    }
    function vt() {
      S !== void 0 && window.clearTimeout(S), S = window.setTimeout(() => {
        B.value = !1;
      }, e.duration);
    }
    function gt() {
      k !== void 0 && window.clearTimeout(k), k = window.setTimeout(() => {
        y.value = !1;
      }, e.duration);
    }
    function ye() {
      k !== void 0 && window.clearTimeout(k), y.value = !0;
    }
    function Ce() {
      S !== void 0 && window.clearTimeout(S), B.value = !0;
    }
    function Ee(A) {
      const {
        onScroll: V
      } = e;
      V && V(A), Le();
    }
    function Le() {
      const {
        value: A
      } = le;
      A && (x.value = A.scrollTop, b.value = A.scrollLeft * (i != null && i.value ? -1 : 1));
    }
    function nt() {
      const {
        value: A
      } = ce;
      A && (c.value = A.offsetHeight, v.value = A.offsetWidth);
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
        value: A
      } = le;
      A && (x.value = A.scrollTop, b.value = A.scrollLeft * (i != null && i.value ? -1 : 1), g.value = A.offsetHeight, m.value = A.offsetWidth, c.value = A.scrollHeight, v.value = A.scrollWidth);
      const {
        value: V
      } = u, {
        value: Q
      } = d;
      V && (p.value = V.offsetWidth), Q && (h.value = Q.offsetHeight);
    }
    function he() {
      e.scrollable && (e.useUnifiedContainer ? oe() : (nt(), Le()));
    }
    function Te(A) {
      var V;
      return !(!((V = a.value) === null || V === void 0) && V.contains(Hr(A)));
    }
    function ct(A) {
      A.preventDefault(), A.stopPropagation(), P = !0, qe("mousemove", window, Tt, !0), qe("mouseup", window, Ot, !0), R = b.value, F = i != null && i.value ? window.innerWidth - A.clientX : A.clientX;
    }
    function Tt(A) {
      if (!P) return;
      k !== void 0 && window.clearTimeout(k), S !== void 0 && window.clearTimeout(S);
      const {
        value: V
      } = m, {
        value: Q
      } = v, {
        value: se
      } = W;
      if (V === null || Q === null) return;
      const ge = (i != null && i.value ? window.innerWidth - A.clientX - F : A.clientX - F) * (Q - V) / (V - se), me = Q - V;
      let Se = R + ge;
      Se = Math.min(me, Se), Se = Math.max(Se, 0);
      const {
        value: Ne
      } = le;
      if (Ne) {
        Ne.scrollLeft = Se * (i != null && i.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: lt
        } = e;
        lt && lt(Se);
      }
    }
    function Ot(A) {
      A.preventDefault(), A.stopPropagation(), Ve("mousemove", window, Tt, !0), Ve("mouseup", window, Ot, !0), P = !1, he(), Te(A) && ot();
    }
    function xt(A) {
      A.preventDefault(), A.stopPropagation(), C = !0, qe("mousemove", window, at, !0), qe("mouseup", window, St, !0), w = x.value, N = A.clientY;
    }
    function at(A) {
      if (!C) return;
      k !== void 0 && window.clearTimeout(k), S !== void 0 && window.clearTimeout(S);
      const {
        value: V
      } = g, {
        value: Q
      } = c, {
        value: se
      } = O;
      if (V === null || Q === null) return;
      const ge = (A.clientY - N) * (Q - V) / (V - se), me = Q - V;
      let Se = w + ge;
      Se = Math.min(me, Se), Se = Math.max(Se, 0);
      const {
        value: Ne
      } = le;
      Ne && (Ne.scrollTop = Se);
    }
    function St(A) {
      A.preventDefault(), A.stopPropagation(), Ve("mousemove", window, at, !0), Ve("mouseup", window, St, !0), C = !1, he(), Te(A) && ot();
    }
    rt(() => {
      const {
        value: A
      } = q, {
        value: V
      } = j, {
        value: Q
      } = t, {
        value: se
      } = u, {
        value: de
      } = d;
      se && (A ? se.classList.remove(`${Q}-scrollbar-rail--disabled`) : se.classList.add(`${Q}-scrollbar-rail--disabled`)), de && (V ? de.classList.remove(`${Q}-scrollbar-rail--disabled`) : de.classList.add(`${Q}-scrollbar-rail--disabled`));
    }), $t(() => {
      e.container || he();
    }), Bt(() => {
      k !== void 0 && window.clearTimeout(k), S !== void 0 && window.clearTimeout(S), Ve("mousemove", window, at, !0), Ve("mouseup", window, St, !0);
    });
    const it = E(() => {
      const {
        common: {
          cubicBezierEaseInOut: A
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
          railInsetVerticalLeft: lt,
          railColor: Ke
        }
      } = n.value, {
        top: Lt,
        right: Wt,
        bottom: _t,
        left: Kt
      } = Vt(me), {
        top: qt,
        right: on,
        bottom: Gt,
        left: _
      } = Vt(Se), {
        top: te,
        right: we,
        bottom: Oe,
        left: Ze
      } = Vt(i != null && i.value ? ws(Ne) : Ne), {
        top: He,
        right: st,
        bottom: pt,
        left: Qt
      } = Vt(i != null && i.value ? ws(lt) : lt);
      return {
        "--n-scrollbar-bezier": A,
        "--n-scrollbar-color": V,
        "--n-scrollbar-color-hover": Q,
        "--n-scrollbar-border-radius": ge,
        "--n-scrollbar-width": de,
        "--n-scrollbar-height": se,
        "--n-scrollbar-rail-top-horizontal-top": Lt,
        "--n-scrollbar-rail-right-horizontal-top": Wt,
        "--n-scrollbar-rail-bottom-horizontal-top": _t,
        "--n-scrollbar-rail-left-horizontal-top": Kt,
        "--n-scrollbar-rail-top-horizontal-bottom": qt,
        "--n-scrollbar-rail-right-horizontal-bottom": on,
        "--n-scrollbar-rail-bottom-horizontal-bottom": Gt,
        "--n-scrollbar-rail-left-horizontal-bottom": _,
        "--n-scrollbar-rail-top-vertical-right": te,
        "--n-scrollbar-rail-right-vertical-right": we,
        "--n-scrollbar-rail-bottom-vertical-right": Oe,
        "--n-scrollbar-rail-left-vertical-right": Ze,
        "--n-scrollbar-rail-top-vertical-left": He,
        "--n-scrollbar-rail-right-vertical-left": st,
        "--n-scrollbar-rail-bottom-vertical-left": pt,
        "--n-scrollbar-rail-left-vertical-left": Qt,
        "--n-scrollbar-rail-color": Ke
      };
    }), fe = r ? Xe("scrollbar", void 0, it, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: be,
      scrollBy: xe,
      sync: he,
      syncUnifiedContainer: oe,
      handleMouseEnterWrapper: $e,
      handleMouseLeaveWrapper: ut
    }), {
      mergedClsPrefix: t,
      rtlEnabled: i,
      containerScrollTop: x,
      wrapperRef: a,
      containerRef: s,
      contentRef: l,
      yRailRef: d,
      xRailRef: u,
      needYBar: j,
      needXBar: q,
      yBarSizePx: M,
      xBarSizePx: H,
      yBarTopPx: ee,
      xBarLeftPx: K,
      isShowXBar: X,
      isShowYBar: ae,
      isIos: $,
      handleScroll: Ee,
      handleContentResize: ue,
      handleContainerResize: Pe,
      handleYScrollMouseDown: xt,
      handleXScrollMouseDown: ct,
      cssVars: r ? void 0 : it,
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
      yPlacement: s,
      xPlacement: l,
      xScrollable: d
    } = this;
    if (!this.scrollable) return (e = t.default) === null || e === void 0 ? void 0 : e.call(t);
    const u = this.trigger === "none", c = (m, h) => f("div", {
      ref: "yRailRef",
      class: [`${r}-scrollbar-rail`, `${r}-scrollbar-rail--vertical`, `${r}-scrollbar-rail--vertical--${s}`, m],
      "data-scrollbar-rail": !0,
      style: [h || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, f(u ? wa : It, u ? null : {
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
      return (m = this.onRender) === null || m === void 0 || m.call(this), f("div", Pt(this.$attrs, {
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
      }, f(Wr, {
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
        class: [`${r}-scrollbar-rail`, `${r}-scrollbar-rail--horizontal`, `${r}-scrollbar-rail--horizontal--${l}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, f(u ? wa : It, u ? null : {
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
    }, g = this.container ? v() : f(Wr, {
      onResize: this.handleContainerResize
    }, {
      default: v
    });
    return a ? f(je, null, g, c(this.themeClass, this.cssVars)) : g;
  }
}), Yu = On;
function id(e) {
  return Array.isArray(e) ? e : [e];
}
const Da = {
  STOP: "STOP"
};
function Zu(e, t) {
  const r = t(e);
  e.children !== void 0 && r !== Da.STOP && e.children.forEach((o) => Zu(o, t));
}
function Zx(e, t = {}) {
  const { preserveGroup: r = !1 } = t, o = [], i = r ? (s) => {
    s.isLeaf || (o.push(s.key), a(s.children));
  } : (s) => {
    s.isLeaf || (s.isGroup || o.push(s.key), a(s.children));
  };
  function a(s) {
    s.forEach(i);
  }
  return a(e), o;
}
function Jx(e, t) {
  const { isLeaf: r } = e;
  return r !== void 0 ? r : !t(e);
}
function Qx(e) {
  return e.children;
}
function e1(e) {
  return e.key;
}
function t1() {
  return !1;
}
function n1(e, t) {
  const { isLeaf: r } = e;
  return !(r === !1 && !Array.isArray(t(e)));
}
function r1(e) {
  return e.disabled === !0;
}
function o1(e, t) {
  return e.isLeaf === !1 && !Array.isArray(t(e));
}
function i1(e, t) {
  if (e.isLeaf === !0) {
    const r = t(e);
    if (Array.isArray(r) && r.length > 0)
      return !0;
  }
  return !1;
}
function aa(e) {
  var t;
  return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : [];
}
function la(e) {
  var t;
  return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : [];
}
function a1(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) || r.add(o);
  }), Array.from(r);
}
function l1(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) && r.delete(o);
  }), Array.from(r);
}
function s1(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function d1(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r, o) => {
    t.set(r.key, o);
  }), (r) => {
    var o;
    return (o = t.get(r)) !== null && o !== void 0 ? o : null;
  };
}
class u1 extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function c1(e, t, r, o) {
  return mi(t.concat(e), r, o, !1);
}
function f1(e, t) {
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
function h1(e, t, r, o) {
  const i = mi(t, r, o, !1), a = mi(e, r, o, !0), s = f1(e, r), l = [];
  return i.forEach((d) => {
    (a.has(d) || s.has(d)) && l.push(d);
  }), l.forEach((d) => i.delete(d)), i;
}
function sa(e, t) {
  const { checkedKeys: r, keysToCheck: o, keysToUncheck: i, indeterminateKeys: a, cascade: s, leafOnly: l, checkStrategy: d, allowNotLoaded: u } = e;
  if (!s)
    return o !== void 0 ? {
      checkedKeys: a1(r, o),
      indeterminateKeys: Array.from(a)
    } : i !== void 0 ? {
      checkedKeys: l1(r, i),
      indeterminateKeys: Array.from(a)
    } : {
      checkedKeys: Array.from(r),
      indeterminateKeys: Array.from(a)
    };
  const { levelTreeNodeMap: c } = t;
  let v;
  i !== void 0 ? v = h1(i, r, t, u) : o !== void 0 ? v = c1(o, r, t, u) : v = mi(r, t, u, !1);
  const g = d === "parent", m = d === "child" || l, h = v, p = /* @__PURE__ */ new Set(), x = Math.max.apply(null, Array.from(c.keys()));
  for (let b = x; b >= 0; b -= 1) {
    const y = b === 0, B = c.get(b);
    for (const C of B) {
      if (C.isLeaf)
        continue;
      const { key: P, shallowLoaded: k } = C;
      if (m && k && C.children.forEach((F) => {
        !F.disabled && !F.isLeaf && F.shallowLoaded && h.has(F.key) && h.delete(F.key);
      }), C.disabled || !k)
        continue;
      let S = !0, w = !1, R = !0;
      for (const F of C.children) {
        const N = F.key;
        if (!F.disabled) {
          if (R && (R = !1), h.has(N))
            w = !0;
          else if (p.has(N)) {
            w = !0, S = !1;
            break;
          } else if (S = !1, w)
            break;
        }
      }
      S && !R ? (g && C.children.forEach((F) => {
        !F.disabled && h.has(F.key) && h.delete(F.key);
      }), h.add(P)) : w && p.add(P), y && m && h.has(P) && h.delete(P);
    }
  }
  return {
    checkedKeys: Array.from(h),
    indeterminateKeys: Array.from(p)
  };
}
function mi(e, t, r, o) {
  const { treeNodeMap: i, getChildren: a } = t, s = /* @__PURE__ */ new Set(), l = new Set(e);
  return e.forEach((d) => {
    const u = i.get(d);
    u !== void 0 && Zu(u, (c) => {
      if (c.disabled)
        return Da.STOP;
      const { key: v } = c;
      if (!s.has(v) && (s.add(v), l.add(v), o1(c.rawNode, a))) {
        if (o)
          return Da.STOP;
        if (!r)
          throw new u1();
      }
    });
  }), l;
}
function v1(e, { includeGroup: t = !1, includeSelf: r = !0 }, o) {
  var i;
  const a = o.treeNodeMap;
  let s = e == null ? null : (i = a.get(e)) !== null && i !== void 0 ? i : null;
  const l = {
    keyPath: [],
    treeNodePath: [],
    treeNode: s
  };
  if (s != null && s.ignored)
    return l.treeNode = null, l;
  for (; s; )
    !s.ignored && (t || !s.isGroup) && l.treeNodePath.push(s), s = s.parent;
  return l.treeNodePath.reverse(), r || l.treeNodePath.pop(), l.keyPath = l.treeNodePath.map((d) => d.key), l;
}
function g1(e) {
  if (e.length === 0)
    return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function p1(e, t) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return t ? r[(i + 1) % o] : i === r.length - 1 ? null : r[i + 1];
}
function ad(e, t, { loop: r = !1, includeDisabled: o = !1 } = {}) {
  const i = t === "prev" ? m1 : p1, a = {
    reverse: t === "prev"
  };
  let s = !1, l = null;
  function d(u) {
    if (u !== null) {
      if (u === e) {
        if (!s)
          s = !0;
        else if (!e.disabled && !e.isGroup) {
          l = e;
          return;
        }
      } else if ((!u.disabled || o) && !u.ignored && !u.isGroup) {
        l = u;
        return;
      }
      if (u.isGroup) {
        const c = Fl(u, a);
        c !== null ? l = c : d(i(u, r));
      } else {
        const c = i(u, !1);
        if (c !== null)
          d(c);
        else {
          const v = b1(u);
          v != null && v.isGroup ? d(i(v, r)) : r && d(i(u, !0));
        }
      }
    }
  }
  return d(e), l;
}
function m1(e, t) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return t ? r[(i - 1 + o) % o] : i === 0 ? null : r[i - 1];
}
function b1(e) {
  return e.parent;
}
function Fl(e, t = {}) {
  const { reverse: r = !1 } = t, { children: o } = e;
  if (o) {
    const { length: i } = o, a = r ? i - 1 : 0, s = r ? -1 : i, l = r ? -1 : 1;
    for (let d = a; d !== s; d += l) {
      const u = o[d];
      if (!u.disabled && !u.ignored)
        if (u.isGroup) {
          const c = Fl(u, t);
          if (c !== null)
            return c;
        } else
          return u;
    }
  }
  return null;
}
const x1 = {
  getChild() {
    return this.ignored ? null : Fl(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return ad(this, "next", e);
  },
  getPrev(e = {}) {
    return ad(this, "prev", e);
  }
};
function y1(e, t) {
  const r = t ? new Set(t) : void 0, o = [];
  function i(a) {
    a.forEach((s) => {
      o.push(s), !(s.isLeaf || !s.children || s.ignored) && (s.isGroup || // normal non-leaf node
      r === void 0 || r.has(s.key)) && i(s.children);
    });
  }
  return i(e), o;
}
function C1(e, t) {
  const r = e.key;
  for (; t; ) {
    if (t.key === r)
      return !0;
    t = t.parent;
  }
  return !1;
}
function Ju(e, t, r, o, i, a = null, s = 0) {
  const l = [];
  return e.forEach((d, u) => {
    var c;
    process.env.NODE_ENV !== "production" && i1(d, i) && console.error("[treemate]: node", d, "is invalid");
    const v = Object.create(o);
    if (v.rawNode = d, v.siblings = l, v.level = s, v.index = u, v.isFirstChild = u === 0, v.isLastChild = u + 1 === e.length, v.parent = a, !v.ignored) {
      const g = i(d);
      Array.isArray(g) && (v.children = Ju(g, t, r, o, i, v, s + 1));
    }
    l.push(v), t.set(v.key, v), r.has(s) || r.set(s, []), (c = r.get(s)) === null || c === void 0 || c.push(v);
  }), l;
}
function $i(e, t = {}) {
  var r;
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), { getDisabled: a = r1, getIgnored: s = t1, getIsGroup: l = s1, getKey: d = e1 } = t, u = (r = t.getChildren) !== null && r !== void 0 ? r : Qx, c = t.ignoreEmptyChildren ? (C) => {
    const P = u(C);
    return Array.isArray(P) ? P.length ? P : null : P;
  } : u, v = Object.assign({
    get key() {
      return d(this.rawNode);
    },
    get disabled() {
      return a(this.rawNode);
    },
    get isGroup() {
      return l(this.rawNode);
    },
    get isLeaf() {
      return Jx(this.rawNode, c);
    },
    get shallowLoaded() {
      return n1(this.rawNode, c);
    },
    get ignored() {
      return s(this.rawNode);
    },
    contains(C) {
      return C1(this, C);
    }
  }, x1), g = Ju(e, o, i, v, c);
  function m(C) {
    if (C == null)
      return null;
    const P = o.get(C);
    return P && !P.isGroup && !P.ignored ? P : null;
  }
  function h(C) {
    if (C == null)
      return null;
    const P = o.get(C);
    return P && !P.ignored ? P : null;
  }
  function p(C, P) {
    const k = h(C);
    return k ? k.getPrev(P) : null;
  }
  function x(C, P) {
    const k = h(C);
    return k ? k.getNext(P) : null;
  }
  function b(C) {
    const P = h(C);
    return P ? P.getParent() : null;
  }
  function y(C) {
    const P = h(C);
    return P ? P.getChild() : null;
  }
  const B = {
    treeNodes: g,
    treeNodeMap: o,
    levelTreeNodeMap: i,
    maxLevel: Math.max(...i.keys()),
    getChildren: c,
    getFlattenedNodes(C) {
      return y1(g, C);
    },
    getNode: m,
    getPrev: p,
    getNext: x,
    getParent: b,
    getChild: y,
    getFirstAvailableNode() {
      return g1(g);
    },
    getPath(C, P = {}) {
      return v1(C, P, B);
    },
    getCheckedKeys(C, P = {}) {
      const { cascade: k = !0, leafOnly: S = !1, checkStrategy: w = "all", allowNotLoaded: R = !1 } = P;
      return sa({
        checkedKeys: aa(C),
        indeterminateKeys: la(C),
        cascade: k,
        leafOnly: S,
        checkStrategy: w,
        allowNotLoaded: R
      }, B);
    },
    check(C, P, k = {}) {
      const { cascade: S = !0, leafOnly: w = !1, checkStrategy: R = "all", allowNotLoaded: F = !1 } = k;
      return sa({
        checkedKeys: aa(P),
        indeterminateKeys: la(P),
        keysToCheck: C == null ? [] : id(C),
        cascade: S,
        leafOnly: w,
        checkStrategy: R,
        allowNotLoaded: F
      }, B);
    },
    uncheck(C, P, k = {}) {
      const { cascade: S = !0, leafOnly: w = !1, checkStrategy: R = "all", allowNotLoaded: F = !1 } = k;
      return sa({
        checkedKeys: aa(P),
        indeterminateKeys: la(P),
        keysToUncheck: C == null ? [] : id(C),
        cascade: S,
        leafOnly: w,
        checkStrategy: R,
        allowNotLoaded: F
      }, B);
    },
    getNonLeafKeys(C = {}) {
      return Zx(g, C);
    }
  };
  return B;
}
const w1 = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function S1(e) {
  const {
    textColorDisabled: t,
    iconColor: r,
    textColor2: o,
    fontSizeTiny: i,
    fontSizeSmall: a,
    fontSizeMedium: s,
    fontSizeLarge: l,
    fontSizeHuge: d
  } = e;
  return Object.assign(Object.assign({}, w1), {
    fontSizeTiny: i,
    fontSizeSmall: a,
    fontSizeMedium: s,
    fontSizeLarge: l,
    fontSizeHuge: d,
    textColor: t,
    iconColor: r,
    extraTextColor: o
  });
}
const $l = {
  name: "Empty",
  common: Ye,
  self: S1
}, B1 = z("empty", `
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
 `, [D("+", [T("description", `
 margin-top: 8px;
 `)])]), T("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), T("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]), k1 = Object.assign(Object.assign({}, ve.props), {
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
}), Vr = J({
  name: "Empty",
  props: k1,
  slots: Object,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r,
      mergedComponentPropsRef: o
    } = Ae(e), i = ve("Empty", "-empty", B1, $l, e, t), {
      localeRef: a
    } = cr("Empty"), s = E(() => {
      var c, v, g;
      return (c = e.description) !== null && c !== void 0 ? c : (g = (v = o == null ? void 0 : o.value) === null || v === void 0 ? void 0 : v.Empty) === null || g === void 0 ? void 0 : g.description;
    }), l = E(() => {
      var c, v;
      return ((v = (c = o == null ? void 0 : o.value) === null || c === void 0 ? void 0 : c.Empty) === null || v === void 0 ? void 0 : v.renderIcon) || (() => f(Ox, null));
    }), d = E(() => {
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
    }), u = r ? Xe("empty", E(() => {
      let c = "";
      const {
        size: v
      } = e;
      return c += v[0], c;
    }), d, e) : void 0;
    return {
      mergedClsPrefix: t,
      mergedRenderIcon: l,
      localizedDescription: E(() => s.value || a.value.description),
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
    }, e.icon ? e.icon() : f(Ct, {
      clsPrefix: t
    }, {
      default: this.mergedRenderIcon
    })) : null, this.showDescription ? f("div", {
      class: `${t}-empty__description`
    }, e.default ? e.default() : this.localizedDescription) : null, e.extra ? f("div", {
      class: `${t}-empty__extra`
    }, e.extra()) : null);
  }
}), R1 = {
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
function P1(e) {
  const {
    borderRadius: t,
    popoverColor: r,
    textColor3: o,
    dividerColor: i,
    textColor2: a,
    primaryColorPressed: s,
    textColorDisabled: l,
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
    heightLarge: B,
    heightHuge: C
  } = e;
  return Object.assign(Object.assign({}, R1), {
    optionFontSizeTiny: v,
    optionFontSizeSmall: g,
    optionFontSizeMedium: m,
    optionFontSizeLarge: h,
    optionFontSizeHuge: p,
    optionHeightTiny: x,
    optionHeightSmall: b,
    optionHeightMedium: y,
    optionHeightLarge: B,
    optionHeightHuge: C,
    borderRadius: t,
    color: r,
    groupHeaderTextColor: o,
    actionDividerColor: i,
    optionTextColor: a,
    optionTextColorPressed: s,
    optionTextColorDisabled: l,
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
const zl = {
  name: "InternalSelectMenu",
  common: Ye,
  peers: {
    Scrollbar: Jn,
    Empty: $l
  },
  self: P1
}, ld = J({
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
    } = pe(tl);
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
    } = this, a = o == null ? void 0 : o(i), s = t ? t(i, !1) : mt(i[this.labelField], i, !1), l = f("div", Object.assign({}, a, {
      class: [`${e}-base-select-group-header`, a == null ? void 0 : a.class]
    }), s);
    return i.render ? i.render({
      node: l,
      option: i
    }) : r ? r({
      node: l,
      option: i,
      selected: !1
    }) : l;
  }
});
function F1(e, t) {
  return f(It, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => e ? f(Ct, {
      clsPrefix: t,
      class: `${t}-base-select-option__check`
    }, {
      default: () => f(Ax)
    }) : null
  });
}
const sd = J({
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
      renderOptionRef: s,
      labelFieldRef: l,
      valueFieldRef: d,
      showCheckmarkRef: u,
      nodePropsRef: c,
      handleOptionClick: v,
      handleOptionMouseEnter: g
    } = pe(tl), m = Ge(() => {
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
        value: B
      } = m;
      y.disabled || B || g(b, y);
    }
    return {
      multiple: o,
      isGrouped: Ge(() => {
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
      isSelected: Ge(() => {
        const {
          value: b
        } = t, {
          value: y
        } = o;
        if (b === null) return !1;
        const B = e.tmNode.rawNode[d.value];
        if (y) {
          const {
            value: C
          } = i;
          return C.has(B);
        } else
          return b === B;
      }),
      labelField: l,
      renderLabel: a,
      renderOption: s,
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
      nodeProps: s,
      renderOption: l,
      renderLabel: d,
      handleClick: u,
      handleMouseEnter: c,
      handleMouseMove: v
    } = this, g = F1(r, e), m = d ? [d(t, r), a && g] : [mt(t[this.labelField], t, r), a && g], h = s == null ? void 0 : s(t), p = f("div", Object.assign({}, h, {
      class: [`${e}-base-select-option`, t.class, h == null ? void 0 : h.class, {
        [`${e}-base-select-option--disabled`]: t.disabled,
        [`${e}-base-select-option--selected`]: r,
        [`${e}-base-select-option--grouped`]: i,
        [`${e}-base-select-option--pending`]: o,
        [`${e}-base-select-option--show-checkmark`]: a
      }],
      style: [(h == null ? void 0 : h.style) || "", t.style || ""],
      onClick: bo([u, h == null ? void 0 : h.onClick]),
      onMouseenter: bo([c, h == null ? void 0 : h.onMouseenter]),
      onMousemove: bo([v, h == null ? void 0 : h.onMousemove])
    }), f("div", {
      class: `${e}-base-select-option__content`
    }, m));
    return t.render ? t.render({
      node: p,
      option: t,
      selected: r
    }) : l ? l({
      node: p,
      option: t,
      selected: r
    }) : p;
  }
}), {
  cubicBezierEaseIn: dd,
  cubicBezierEaseOut: ud
} = dn;
function Io({
  transformOrigin: e = "inherit",
  duration: t = ".2s",
  enterScale: r = ".9",
  originalTransform: o = "",
  originalTransition: i = ""
} = {}) {
  return [D("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${t} ${dd}, transform ${t} ${dd} ${i && `,${i}`}`
  }), D("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${t} ${ud}, transform ${t} ${ud} ${i && `,${i}`}`
  }), D("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${o} scale(${r})`
  }), D("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${o} scale(1)`
  })];
}
const $1 = z("base-select-menu", `
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
 `, [I("show-checkmark", `
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
 `), I("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), I("pending", [D("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), I("selected", `
 color: var(--n-option-text-color-active);
 `, [D("&::before", `
 background-color: var(--n-option-color-active);
 `), I("pending", [D("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), I("disabled", `
 cursor: not-allowed;
 `, [Ue("selected", `
 color: var(--n-option-text-color-disabled);
 `), I("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), T("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [Io({
  enterScale: "0.5"
})])])]), Qu = J({
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
    } = Ae(e), o = kt("InternalSelectMenu", r, t), i = ve("InternalSelectMenu", "-internal-select-menu", $1, zl, e, ie(e, "clsPrefix")), a = L(null), s = L(null), l = L(null), d = E(() => e.treeMate.getFlattenedNodes()), u = E(() => d1(d.value)), c = L(null);
    function v() {
      const {
        treeMate: j
      } = e;
      let q = null;
      const {
        value: X
      } = e;
      X === null ? q = j.getFirstAvailableNode() : (e.multiple ? q = j.getNode((X || [])[(X || []).length - 1]) : q = j.getNode(X), (!q || q.disabled) && (q = j.getFirstAvailableNode())), O(q || null);
    }
    function g() {
      const {
        value: j
      } = c;
      j && !e.treeMate.getNode(j.key) && (c.value = null);
    }
    let m;
    Me(() => e.show, (j) => {
      j ? m = Me(() => e.treeMate, () => {
        e.resetMenuOnOptionsChange ? (e.autoPending ? v() : g(), ht(M)) : g();
      }, {
        immediate: !0
      }) : m == null || m();
    }, {
      immediate: !0
    }), Bt(() => {
      m == null || m();
    });
    const h = E(() => Mt(i.value.self[Z("optionHeight", e.size)])), p = E(() => Vt(i.value.self[Z("padding", e.size)])), x = E(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), b = E(() => {
      const j = d.value;
      return j && j.length === 0;
    });
    function y(j) {
      const {
        onToggle: q
      } = e;
      q && q(j);
    }
    function B(j) {
      const {
        onScroll: q
      } = e;
      q && q(j);
    }
    function C(j) {
      var q;
      (q = l.value) === null || q === void 0 || q.sync(), B(j);
    }
    function P() {
      var j;
      (j = l.value) === null || j === void 0 || j.sync();
    }
    function k() {
      const {
        value: j
      } = c;
      return j || null;
    }
    function S(j, q) {
      q.disabled || O(q, !1);
    }
    function w(j, q) {
      q.disabled || y(q);
    }
    function R(j) {
      var q;
      Jt(j, "action") || (q = e.onKeyup) === null || q === void 0 || q.call(e, j);
    }
    function F(j) {
      var q;
      Jt(j, "action") || (q = e.onKeydown) === null || q === void 0 || q.call(e, j);
    }
    function N(j) {
      var q;
      (q = e.onMousedown) === null || q === void 0 || q.call(e, j), !e.focusable && j.preventDefault();
    }
    function $() {
      const {
        value: j
      } = c;
      j && O(j.getNext({
        loop: !0
      }), !0);
    }
    function n() {
      const {
        value: j
      } = c;
      j && O(j.getPrev({
        loop: !0
      }), !0);
    }
    function O(j, q = !1) {
      c.value = j, q && M();
    }
    function M() {
      var j, q;
      const X = c.value;
      if (!X) return;
      const ae = u.value(X.key);
      ae !== null && (e.virtualScroll ? (j = s.value) === null || j === void 0 || j.scrollTo({
        index: ae
      }) : (q = l.value) === null || q === void 0 || q.scrollTo({
        index: ae,
        elSize: h.value
      }));
    }
    function W(j) {
      var q, X;
      !((q = a.value) === null || q === void 0) && q.contains(j.target) && ((X = e.onFocus) === null || X === void 0 || X.call(e, j));
    }
    function H(j) {
      var q, X;
      !((q = a.value) === null || q === void 0) && q.contains(j.relatedTarget) || (X = e.onBlur) === null || X === void 0 || X.call(e, j);
    }
    ze(tl, {
      handleOptionMouseEnter: S,
      handleOptionClick: w,
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
    }), ze(Gd, a), $t(() => {
      const {
        value: j
      } = l;
      j && j.sync();
    });
    const U = E(() => {
      const {
        size: j
      } = e, {
        common: {
          cubicBezierEaseInOut: q
        },
        self: {
          height: X,
          borderRadius: ae,
          color: le,
          groupHeaderTextColor: ce,
          actionDividerColor: be,
          optionTextColorPressed: G,
          optionTextColor: ue,
          optionTextColorDisabled: Pe,
          optionTextColorActive: xe,
          optionOpacityDisabled: Fe,
          optionCheckColor: $e,
          actionTextColor: ut,
          optionColorPending: ot,
          optionColorActive: vt,
          loadingColor: gt,
          loadingSize: ye,
          optionColorActivePending: Ce,
          [Z("optionFontSize", j)]: Ee,
          [Z("optionHeight", j)]: Le,
          [Z("optionPadding", j)]: nt
        }
      } = i.value;
      return {
        "--n-height": X,
        "--n-action-divider-color": be,
        "--n-action-text-color": ut,
        "--n-bezier": q,
        "--n-border-radius": ae,
        "--n-color": le,
        "--n-option-font-size": Ee,
        "--n-group-header-text-color": ce,
        "--n-option-check-color": $e,
        "--n-option-color-pending": ot,
        "--n-option-color-active": vt,
        "--n-option-color-active-pending": Ce,
        "--n-option-height": Le,
        "--n-option-opacity-disabled": Fe,
        "--n-option-text-color": ue,
        "--n-option-text-color-active": xe,
        "--n-option-text-color-disabled": Pe,
        "--n-option-text-color-pressed": G,
        "--n-option-padding": nt,
        "--n-option-padding-left": Vt(nt, "left"),
        "--n-option-padding-right": Vt(nt, "right"),
        "--n-loading-color": gt,
        "--n-loading-size": ye
      };
    }), {
      inlineThemeDisabled: ee
    } = e, Y = ee ? Xe("internal-select-menu", E(() => e.size[0]), U, e) : void 0, K = {
      selfRef: a,
      next: $,
      prev: n,
      getPendingTmNode: k
    };
    return hu(a, e.onResize), Object.assign({
      mergedTheme: i,
      mergedClsPrefix: t,
      rtlEnabled: o,
      virtualListRef: s,
      scrollbarRef: l,
      itemSize: h,
      padding: p,
      flattenedNodes: d,
      empty: b,
      virtualListContainer() {
        const {
          value: j
        } = s;
        return j == null ? void 0 : j.listElRef;
      },
      virtualListContent() {
        const {
          value: j
        } = s;
        return j == null ? void 0 : j.itemsElRef;
      },
      doScroll: B,
      handleFocusin: W,
      handleFocusout: H,
      handleKeyUp: R,
      handleKeyDown: F,
      handleMouseDown: N,
      handleVirtualListResize: P,
      handleVirtualListScroll: C,
      cssVars: ee ? void 0 : U,
      themeClass: Y == null ? void 0 : Y.themeClass,
      onRender: Y == null ? void 0 : Y.onRender
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
    }, _e(e.header, (s) => s && f("div", {
      class: `${r}-base-select-menu__header`,
      "data-header": !0,
      key: "header"
    }, s)), this.loading ? f("div", {
      class: `${r}-base-select-menu__loading`
    }, f(Zn, {
      clsPrefix: r,
      strokeWidth: 20
    })) : this.empty ? f("div", {
      class: `${r}-base-select-menu__empty`,
      "data-empty": !0
    }, nn(e.empty, () => [f(Vr, {
      theme: o.peers.Empty,
      themeOverrides: o.peerOverrides.Empty,
      size: this.size
    })])) : f(On, {
      ref: "scrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: t ? this.virtualListContainer : void 0,
      content: t ? this.virtualListContent : void 0,
      onScroll: t ? void 0 : this.doScroll
    }, {
      default: () => t ? f(ul, {
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
          item: s
        }) => s.isGroup ? f(ld, {
          key: s.key,
          clsPrefix: r,
          tmNode: s
        }) : s.ignored ? null : f(sd, {
          clsPrefix: r,
          key: s.key,
          tmNode: s
        })
      }) : f("div", {
        class: `${r}-base-select-menu-option-wrapper`,
        style: {
          paddingTop: this.padding.top,
          paddingBottom: this.padding.bottom
        }
      }, this.flattenedNodes.map((s) => s.isGroup ? f(ld, {
        key: s.key,
        clsPrefix: r,
        tmNode: s
      }) : f(sd, {
        clsPrefix: r,
        key: s.key,
        tmNode: s
      })))
    }), _e(e.action, (s) => s && [f("div", {
      class: `${r}-base-select-menu__action`,
      "data-action": !0,
      key: "action"
    }, s), f(Wx, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
}), z1 = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function A1(e) {
  const {
    boxShadow2: t,
    popoverColor: r,
    textColor2: o,
    borderRadius: i,
    fontSize: a,
    dividerColor: s
  } = e;
  return Object.assign(Object.assign({}, z1), {
    fontSize: a,
    borderRadius: i,
    color: r,
    dividerColor: s,
    textColor: o,
    boxShadow: t
  });
}
const kr = {
  name: "Popover",
  common: Ye,
  peers: {
    Scrollbar: Jn
  },
  self: A1
}, da = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Rt = "var(--n-arrow-height) * 1.414", E1 = D([z("popover", `
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
 `)]), Ue("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [Ue("scrollable", [Ue("show-header-or-footer", "padding: var(--n-padding);")])]), T("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), T("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), I("scrollable, show-header-or-footer", [T("content", `
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
 width: calc(${Rt});
 height: calc(${Rt});
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
]), an("top-start", `
 top: calc(${Rt} / -2);
 left: calc(${$n("top-start")} - var(--v-offset-left));
 `), an("top", `
 top: calc(${Rt} / -2);
 transform: translateX(calc(${Rt} / -2)) rotate(45deg);
 left: 50%;
 `), an("top-end", `
 top: calc(${Rt} / -2);
 right: calc(${$n("top-end")} + var(--v-offset-left));
 `), an("bottom-start", `
 bottom: calc(${Rt} / -2);
 left: calc(${$n("bottom-start")} - var(--v-offset-left));
 `), an("bottom", `
 bottom: calc(${Rt} / -2);
 transform: translateX(calc(${Rt} / -2)) rotate(45deg);
 left: 50%;
 `), an("bottom-end", `
 bottom: calc(${Rt} / -2);
 right: calc(${$n("bottom-end")} + var(--v-offset-left));
 `), an("left-start", `
 left: calc(${Rt} / -2);
 top: calc(${$n("left-start")} - var(--v-offset-top));
 `), an("left", `
 left: calc(${Rt} / -2);
 transform: translateY(calc(${Rt} / -2)) rotate(45deg);
 top: 50%;
 `), an("left-end", `
 left: calc(${Rt} / -2);
 bottom: calc(${$n("left-end")} + var(--v-offset-top));
 `), an("right-start", `
 right: calc(${Rt} / -2);
 top: calc(${$n("right-start")} - var(--v-offset-top));
 `), an("right", `
 right: calc(${Rt} / -2);
 transform: translateY(calc(${Rt} / -2)) rotate(45deg);
 top: 50%;
 `), an("right-end", `
 right: calc(${Rt} / -2);
 bottom: calc(${$n("right-end")} + var(--v-offset-top));
 `), ...kx({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, t) => {
  const r = ["right", "left"].includes(t), o = r ? "width" : "height";
  return e.map((i) => {
    const a = i.split("-")[1] === "end", l = `calc((${`var(--v-target-${o}, 0px)`} - ${Rt}) / 2)`, d = $n(i);
    return D(`[v-placement="${i}"] >`, [z("popover-shared", [I("center-arrow", [z("popover-arrow", `${t}: calc(max(${l}, ${d}) ${a ? "+" : "-"} var(--v-offset-${r ? "left" : "top"}));`)])])]);
  });
})]);
function $n(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function an(e, t) {
  const r = e.split("-")[0], o = ["top", "bottom"].includes(r) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return D(`[v-placement="${e}"] >`, [z("popover-shared", `
 margin-${da[r]}: var(--n-space);
 `, [I("show-arrow", `
 margin-${da[r]}: var(--n-space-arrow);
 `), I("overlap", `
 margin: 0;
 `), xh("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${da[r]}: auto;
 ${o}
 `, [z("popover-arrow", t)])])]);
}
const ec = Object.assign(Object.assign({}, ve.props), {
  to: Sn.propTo,
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
function tc({
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
const D1 = J({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: ec,
  setup(e, {
    slots: t,
    attrs: r
  }) {
    const {
      namespaceRef: o,
      mergedClsPrefixRef: i,
      inlineThemeDisabled: a,
      mergedRtlRef: s
    } = Ae(e), l = ve("Popover", "-popover", E1, kr, e, i), d = kt("Popover", s, i), u = L(null), c = pe("NPopover"), v = L(null), g = L(e.show), m = L(!1);
    rt(() => {
      const {
        show: R
      } = e;
      R && !M0() && !e.internalDeactivateImmediately && (m.value = !0);
    });
    const h = E(() => {
      const {
        trigger: R,
        onClickoutside: F
      } = e, N = [], {
        positionManuallyRef: {
          value: $
        }
      } = c;
      return $ || (R === "click" && !F && N.push([jr, k, void 0, {
        capture: !0
      }]), R === "hover" && N.push([qh, P])), F && N.push([jr, k, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && m.value) && N.push([Un, e.show]), N;
    }), p = E(() => {
      const {
        common: {
          cubicBezierEaseInOut: R,
          cubicBezierEaseIn: F,
          cubicBezierEaseOut: N
        },
        self: {
          space: $,
          spaceArrow: n,
          padding: O,
          fontSize: M,
          textColor: W,
          dividerColor: H,
          color: U,
          boxShadow: ee,
          borderRadius: Y,
          arrowHeight: K,
          arrowOffset: j,
          arrowOffsetVertical: q
        }
      } = l.value;
      return {
        "--n-box-shadow": ee,
        "--n-bezier": R,
        "--n-bezier-ease-in": F,
        "--n-bezier-ease-out": N,
        "--n-font-size": M,
        "--n-text-color": W,
        "--n-color": U,
        "--n-divider-color": H,
        "--n-border-radius": Y,
        "--n-arrow-height": K,
        "--n-arrow-offset": j,
        "--n-arrow-offset-vertical": q,
        "--n-padding": O,
        "--n-space": $,
        "--n-space-arrow": n
      };
    }), x = E(() => {
      const R = e.width === "trigger" ? void 0 : bt(e.width), F = [];
      R && F.push({
        width: R
      });
      const {
        maxWidth: N,
        minWidth: $
      } = e;
      return N && F.push({
        maxWidth: bt(N)
      }), $ && F.push({
        maxWidth: bt($)
      }), a || F.push(p.value), F;
    }), b = a ? Xe("popover", void 0, p, e) : void 0;
    c.setBodyInstance({
      syncPosition: y
    }), Bt(() => {
      c.setBodyInstance(null);
    }), Me(ie(e, "show"), (R) => {
      e.animated || (R ? g.value = !0 : g.value = !1);
    });
    function y() {
      var R;
      (R = u.value) === null || R === void 0 || R.syncPosition();
    }
    function B(R) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && c.handleMouseEnter(R);
    }
    function C(R) {
      e.trigger === "hover" && e.keepAliveOnHover && c.handleMouseLeave(R);
    }
    function P(R) {
      e.trigger === "hover" && !S().contains(Hr(R)) && c.handleMouseMoveOutside(R);
    }
    function k(R) {
      (e.trigger === "click" && !S().contains(Hr(R)) || e.onClickoutside) && c.handleClickOutside(R);
    }
    function S() {
      return c.getTriggerElement();
    }
    ze(Gr, v), ze(Do, null), ze(To, null);
    function w() {
      if (b == null || b.onRender(), !(e.displayDirective === "show" || e.show || e.animated && m.value))
        return null;
      let F;
      const N = c.internalRenderBodyRef.value, {
        value: $
      } = i;
      if (N)
        F = N(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${$}-popover-shared`, (d == null ? void 0 : d.value) && `${$}-popover--rtl`, b == null ? void 0 : b.themeClass.value, e.overlap && `${$}-popover-shared--overlap`, e.showArrow && `${$}-popover-shared--show-arrow`, e.arrowPointToCenter && `${$}-popover-shared--center-arrow`],
          v,
          x.value,
          B,
          C
        );
      else {
        const {
          value: n
        } = c.extraClassRef, {
          internalTrapFocus: O
        } = e, M = !Ir(t.header) || !Ir(t.footer), W = () => {
          var H, U;
          const ee = M ? f(je, null, _e(t.header, (j) => j ? f("div", {
            class: [`${$}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, j) : null), _e(t.default, (j) => j ? f("div", {
            class: [`${$}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t) : null), _e(t.footer, (j) => j ? f("div", {
            class: [`${$}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, j) : null)) : e.scrollable ? (H = t.default) === null || H === void 0 ? void 0 : H.call(t) : f("div", {
            class: [`${$}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t), Y = e.scrollable ? f(Yu, {
            themeOverrides: l.value.peerOverrides.Scrollbar,
            theme: l.value.peers.Scrollbar,
            contentClass: M ? void 0 : `${$}-popover__content ${(U = e.contentClass) !== null && U !== void 0 ? U : ""}`,
            contentStyle: M ? void 0 : e.contentStyle
          }, {
            default: () => ee
          }) : ee, K = e.showArrow ? tc({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: $
          }) : null;
          return [Y, K];
        };
        F = f("div", Pt({
          class: [`${$}-popover`, `${$}-popover-shared`, (d == null ? void 0 : d.value) && `${$}-popover--rtl`, b == null ? void 0 : b.themeClass.value, n.map((H) => `${$}-${H}`), {
            [`${$}-popover--scrollable`]: e.scrollable,
            [`${$}-popover--show-header-or-footer`]: M,
            [`${$}-popover--raw`]: e.raw,
            [`${$}-popover-shared--overlap`]: e.overlap,
            [`${$}-popover-shared--show-arrow`]: e.showArrow,
            [`${$}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: v,
          style: x.value,
          onKeydown: c.handleKeydown,
          onMouseenter: B,
          onMouseleave: C
        }, r), O ? f(cl, {
          active: e.show,
          autoFocus: !0
        }, {
          default: W
        }) : W());
      }
      return rn(F, h.value);
    }
    return {
      displayed: m,
      namespace: o,
      isMounted: c.isMountedRef,
      zIndex: c.zIndexRef,
      followerRef: u,
      adjustedTo: Sn(e),
      followerEnabled: g,
      renderContentNode: w
    };
  },
  render() {
    return f(sl, {
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
      teleportDisabled: this.adjustedTo === Sn.tdkey
    }, {
      default: () => this.animated ? f(It, {
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
}), T1 = Object.keys(ec), O1 = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function M1(e, t, r) {
  O1[t].forEach((o) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const i = e.props[o], a = r[o];
    i ? e.props[o] = (...s) => {
      i(...s), a(...s);
    } : e.props[o] = a;
  });
}
const fr = {
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
  to: Sn.propTo,
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
}, I1 = Object.assign(Object.assign(Object.assign({}, ve.props), fr), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), Rr = J({
  name: "Popover",
  inheritAttrs: !1,
  props: I1,
  slots: Object,
  __popover__: !0,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.maxWidth !== void 0 && Qe("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && Qe("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && Qe("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && Qe("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && Qe("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const t = br(), r = L(null), o = E(() => e.show), i = L(e.defaultShow), a = Et(o, i), s = Ge(() => e.disabled ? !1 : a.value), l = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: M
      } = e;
      return !!(M != null && M());
    }, d = () => l() ? !1 : a.value, u = el(e, ["arrow", "showArrow"]), c = E(() => e.overlap ? !1 : u.value);
    let v = null;
    const g = L(null), m = L(null), h = Ge(() => e.x !== void 0 && e.y !== void 0);
    function p(M) {
      const {
        "onUpdate:show": W,
        onUpdateShow: H,
        onShow: U,
        onHide: ee
      } = e;
      i.value = M, W && ne(W, M), H && ne(H, M), M && U && ne(U, !0), M && ee && ne(ee, !1);
    }
    function x() {
      v && v.syncPosition();
    }
    function b() {
      const {
        value: M
      } = g;
      M && (window.clearTimeout(M), g.value = null);
    }
    function y() {
      const {
        value: M
      } = m;
      M && (window.clearTimeout(M), m.value = null);
    }
    function B() {
      const M = l();
      if (e.trigger === "focus" && !M) {
        if (d()) return;
        p(!0);
      }
    }
    function C() {
      const M = l();
      if (e.trigger === "focus" && !M) {
        if (!d()) return;
        p(!1);
      }
    }
    function P() {
      const M = l();
      if (e.trigger === "hover" && !M) {
        if (y(), g.value !== null || d()) return;
        const W = () => {
          p(!0), g.value = null;
        }, {
          delay: H
        } = e;
        H === 0 ? W() : g.value = window.setTimeout(W, H);
      }
    }
    function k() {
      const M = l();
      if (e.trigger === "hover" && !M) {
        if (b(), m.value !== null || !d()) return;
        const W = () => {
          p(!1), m.value = null;
        }, {
          duration: H
        } = e;
        H === 0 ? W() : m.value = window.setTimeout(W, H);
      }
    }
    function S() {
      k();
    }
    function w(M) {
      var W;
      d() && (e.trigger === "click" && (b(), y(), p(!1)), (W = e.onClickoutside) === null || W === void 0 || W.call(e, M));
    }
    function R() {
      if (e.trigger === "click" && !l()) {
        b(), y();
        const M = !d();
        p(M);
      }
    }
    function F(M) {
      e.internalTrapFocus && M.key === "Escape" && (b(), y(), p(!1));
    }
    function N(M) {
      i.value = M;
    }
    function $() {
      var M;
      return (M = r.value) === null || M === void 0 ? void 0 : M.targetRef;
    }
    function n(M) {
      v = M;
    }
    return ze("NPopover", {
      getTriggerElement: $,
      handleKeydown: F,
      handleMouseEnter: P,
      handleMouseLeave: k,
      handleClickOutside: w,
      handleMouseMoveOutside: S,
      setBodyInstance: n,
      positionManuallyRef: h,
      isMountedRef: t,
      zIndexRef: ie(e, "zIndex"),
      extraClassRef: ie(e, "internalExtraClass"),
      internalRenderBodyRef: ie(e, "internalRenderBody")
    }), rt(() => {
      a.value && l() && p(!1);
    }), {
      binderInstRef: r,
      positionManually: h,
      mergedShowConsideringDisabledProp: s,
      // if to show popover body
      uncontrolledShow: i,
      mergedShowArrow: c,
      getMergedShow: d,
      setShow: N,
      handleClick: R,
      handleMouseEnter: P,
      handleMouseLeave: k,
      handleFocus: B,
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
    if (!t && (o = N0(r, "trigger"), o)) {
      o = Md(o), o = o.type === Uf ? f("span", [o]) : o;
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
          internalInheritedEventHandlers: s
        } = this, l = [a, ...s], d = {
          onBlur: (u) => {
            l.forEach((c) => {
              c.onBlur(u);
            });
          },
          onFocus: (u) => {
            l.forEach((c) => {
              c.onFocus(u);
            });
          },
          onClick: (u) => {
            l.forEach((c) => {
              c.onClick(u);
            });
          },
          onMouseenter: (u) => {
            l.forEach((c) => {
              c.onMouseenter(u);
            });
          },
          onMouseleave: (u) => {
            l.forEach((c) => {
              c.onMouseleave(u);
            });
          }
        };
        M1(o, s ? "nested" : t ? "manual" : this.trigger, d);
      }
    }
    return f(ol, {
      ref: "binderInstRef",
      syncTarget: !i,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const a = this.getMergedShow();
        return [this.internalTrapFocus && a ? rn(f("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[Bi, {
          enabled: a,
          zIndex: this.zIndex
        }]]) : null, t ? null : f(il, null, {
          default: () => o
        }), f(D1, zn(this.$props, T1, Object.assign(Object.assign({}, this.$attrs), {
          showArrow: this.mergedShowArrow,
          show: a
        })), {
          default: () => {
            var s, l;
            return (l = (s = this.$slots).default) === null || l === void 0 ? void 0 : l.call(s);
          },
          header: () => {
            var s, l;
            return (l = (s = this.$slots).header) === null || l === void 0 ? void 0 : l.call(s);
          },
          footer: () => {
            var s, l;
            return (l = (s = this.$slots).footer) === null || l === void 0 ? void 0 : l.call(s);
          }
        })];
      }
    });
  }
}), L1 = {
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
function N1(e) {
  const {
    textColor2: t,
    primaryColorHover: r,
    primaryColorPressed: o,
    primaryColor: i,
    infoColor: a,
    successColor: s,
    warningColor: l,
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
    fontSizeSmall: B,
    fontSizeMedium: C,
    heightMini: P,
    heightTiny: k,
    heightSmall: S,
    heightMedium: w,
    closeColorHover: R,
    closeColorPressed: F,
    buttonColor2Hover: N,
    buttonColor2Pressed: $,
    fontWeightStrong: n
  } = e;
  return Object.assign(Object.assign({}, L1), {
    closeBorderRadius: x,
    heightTiny: P,
    heightSmall: k,
    heightMedium: S,
    heightLarge: w,
    borderRadius: x,
    opacityDisabled: v,
    fontSizeTiny: b,
    fontSizeSmall: y,
    fontSizeMedium: B,
    fontSizeLarge: C,
    fontWeightStrong: n,
    // checked
    textColorCheckable: t,
    textColorHoverCheckable: t,
    textColorPressedCheckable: t,
    textColorChecked: u,
    colorCheckable: "#0000",
    colorHoverCheckable: N,
    colorPressedCheckable: $,
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
    closeColorHover: R,
    closeColorPressed: F,
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
    borderSuccess: `1px solid ${De(s, {
      alpha: 0.3
    })}`,
    textColorSuccess: s,
    colorSuccess: De(s, {
      alpha: 0.12
    }),
    colorBorderedSuccess: De(s, {
      alpha: 0.1
    }),
    closeIconColorSuccess: s,
    closeIconColorHoverSuccess: s,
    closeIconColorPressedSuccess: s,
    closeColorHoverSuccess: De(s, {
      alpha: 0.12
    }),
    closeColorPressedSuccess: De(s, {
      alpha: 0.18
    }),
    borderWarning: `1px solid ${De(l, {
      alpha: 0.35
    })}`,
    textColorWarning: l,
    colorWarning: De(l, {
      alpha: 0.15
    }),
    colorBorderedWarning: De(l, {
      alpha: 0.12
    }),
    closeIconColorWarning: l,
    closeIconColorHoverWarning: l,
    closeIconColorPressedWarning: l,
    closeColorHoverWarning: De(l, {
      alpha: 0.12
    }),
    closeColorPressedWarning: De(l, {
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
const H1 = {
  name: "Tag",
  common: Ye,
  self: N1
}, j1 = {
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
}, W1 = z("tag", `
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
`, [I("strong", `
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
 `), I("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [T("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), T("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), I("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), I("icon, avatar", [I("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), I("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), I("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [Ue("disabled", [D("&:hover", "background-color: var(--n-color-hover-checkable);", [Ue("checked", "color: var(--n-text-color-hover-checkable);")]), D("&:active", "background-color: var(--n-color-pressed-checkable);", [Ue("checked", "color: var(--n-text-color-pressed-checkable);")])]), I("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [Ue("disabled", [D("&:hover", "background-color: var(--n-color-checked-hover);"), D("&:active", "background-color: var(--n-color-checked-pressed);")])])])]), _1 = Object.assign(Object.assign(Object.assign({}, ve.props), j1), {
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
}), V1 = "n-tag", ua = J({
  name: "Tag",
  props: _1,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.onCheckedChange !== void 0 && Qe("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
    });
    const t = L(null), {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), s = ve("Tag", "-tag", W1, H1, e, o);
    ze(V1, {
      roundRef: ie(e, "round")
    });
    function l() {
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
    }, c = kt("Tag", a, o), v = E(() => {
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
          closeMargin: B,
          borderRadius: C,
          opacityDisabled: P,
          textColorCheckable: k,
          textColorHoverCheckable: S,
          textColorPressedCheckable: w,
          textColorChecked: R,
          colorCheckable: F,
          colorHoverCheckable: N,
          colorPressedCheckable: $,
          colorChecked: n,
          colorCheckedHover: O,
          colorCheckedPressed: M,
          closeBorderRadius: W,
          fontWeightStrong: H,
          [Z("colorBordered", m)]: U,
          [Z("closeSize", h)]: ee,
          [Z("closeIconSize", h)]: Y,
          [Z("fontSize", h)]: K,
          [Z("height", h)]: j,
          [Z("color", m)]: q,
          [Z("textColor", m)]: X,
          [Z("border", m)]: ae,
          [Z("closeIconColor", m)]: le,
          [Z("closeIconColorHover", m)]: ce,
          [Z("closeIconColorPressed", m)]: be,
          [Z("closeColorHover", m)]: G,
          [Z("closeColorPressed", m)]: ue
        }
      } = s.value, Pe = Vt(B);
      return {
        "--n-font-weight-strong": H,
        "--n-avatar-size-override": `calc(${j} - 8px)`,
        "--n-bezier": b,
        "--n-border-radius": C,
        "--n-border": ae,
        "--n-close-icon-size": Y,
        "--n-close-color-pressed": ue,
        "--n-close-color-hover": G,
        "--n-close-border-radius": W,
        "--n-close-icon-color": le,
        "--n-close-icon-color-hover": ce,
        "--n-close-icon-color-pressed": be,
        "--n-close-icon-color-disabled": le,
        "--n-close-margin-top": Pe.top,
        "--n-close-margin-right": Pe.right,
        "--n-close-margin-bottom": Pe.bottom,
        "--n-close-margin-left": Pe.left,
        "--n-close-size": ee,
        "--n-color": p || (r.value ? U : q),
        "--n-color-checkable": F,
        "--n-color-checked": n,
        "--n-color-checked-hover": O,
        "--n-color-checked-pressed": M,
        "--n-color-hover-checkable": N,
        "--n-color-pressed-checkable": $,
        "--n-font-size": K,
        "--n-height": j,
        "--n-opacity-disabled": P,
        "--n-padding": y,
        "--n-text-color": x || X,
        "--n-text-color-checkable": k,
        "--n-text-color-checked": R,
        "--n-text-color-hover-checkable": S,
        "--n-text-color-pressed-checkable": w
      };
    }), g = i ? Xe("tag", E(() => {
      let m = "";
      const {
        type: h,
        size: p,
        color: {
          color: x,
          textColor: b
        } = {}
      } = e;
      return m += h[0], m += p[0], x && (m += `a${di(x)}`), b && (m += `b${di(b)}`), r.value && (m += "c"), m;
    }), v, e) : void 0;
    return Object.assign(Object.assign({}, u), {
      rtlEnabled: c,
      mergedClsPrefix: o,
      contentRef: t,
      mergedBordered: r,
      handleClick: l,
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
      round: s,
      onRender: l,
      $slots: d
    } = this;
    l == null || l();
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
        [`${r}-tag--round`]: s,
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
    }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)), !this.checkable && i ? f(Jr, {
      clsPrefix: r,
      class: `${r}-tag__close`,
      disabled: this.disabled,
      onClick: this.handleCloseClick,
      focusable: this.internalCloseFocusable,
      round: s,
      isButtonTag: this.internalCloseIsButtonTag,
      absolute: !0
    }) : null, !this.checkable && this.mergedBordered ? f("div", {
      class: `${r}-tag__border`,
      style: {
        borderColor: a
      }
    }) : null);
  }
}), nc = J({
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
      return f(Zn, {
        clsPrefix: r,
        class: `${r}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? f(Ea, {
          clsPrefix: r,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => f(Ct, {
            clsPrefix: r,
            class: `${r}-base-suffix__arrow`
          }, {
            default: () => nn(t.default, () => [f(Gu, null)])
          })
        }) : null
      });
    };
  }
}), U1 = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
function K1(e) {
  const {
    borderRadius: t,
    textColor2: r,
    textColorDisabled: o,
    inputColor: i,
    inputColorDisabled: a,
    primaryColor: s,
    primaryColorHover: l,
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
    placeholderColorDisabled: B,
    fontSizeTiny: C,
    fontSizeSmall: P,
    fontSizeMedium: k,
    fontSizeLarge: S,
    heightTiny: w,
    heightSmall: R,
    heightMedium: F,
    heightLarge: N,
    fontWeight: $
  } = e;
  return Object.assign(Object.assign({}, U1), {
    fontSizeTiny: C,
    fontSizeSmall: P,
    fontSizeMedium: k,
    fontSizeLarge: S,
    heightTiny: w,
    heightSmall: R,
    heightMedium: F,
    heightLarge: N,
    borderRadius: t,
    fontWeight: $,
    // default
    textColor: r,
    textColorDisabled: o,
    placeholderColor: y,
    placeholderColorDisabled: B,
    color: i,
    colorDisabled: a,
    colorActive: i,
    border: `1px solid ${g}`,
    borderHover: `1px solid ${l}`,
    borderActive: `1px solid ${s}`,
    borderFocus: `1px solid ${l}`,
    boxShadowHover: "none",
    boxShadowActive: `0 0 0 2px ${De(s, {
      alpha: 0.2
    })}`,
    boxShadowFocus: `0 0 0 2px ${De(s, {
      alpha: 0.2
    })}`,
    caretColor: s,
    arrowColor: m,
    arrowColorDisabled: h,
    loadingColor: s,
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
const rc = {
  name: "InternalSelection",
  common: Ye,
  peers: {
    Popover: kr
  },
  self: K1
}, q1 = D([z("base-selection", `
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
 `)]), Ue("disabled", [D("&:hover", [T("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), I("focus", [T("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), I("active", [T("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), z("base-selection-label", "background-color: var(--n-color-active);"), z("base-selection-tags", "background-color: var(--n-color-active);")])]), I("disabled", "cursor: not-allowed;", [T("arrow", `
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
 `)]), ["warning", "error"].map((e) => I(`${e}-status`, [T("state-border", `border: var(--n-border-${e});`), Ue("disabled", [D("&:hover", [T("state-border", `
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]), I("active", [T("state-border", `
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `), z("base-selection-label", `background-color: var(--n-color-active-${e});`), z("base-selection-tags", `background-color: var(--n-color-active-${e});`)]), I("focus", [T("state-border", `
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
 `, [T("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]), G1 = J({
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
    } = Ae(e), o = kt("InternalSelection", r, t), i = L(null), a = L(null), s = L(null), l = L(null), d = L(null), u = L(null), c = L(null), v = L(null), g = L(null), m = L(null), h = L(!1), p = L(!1), x = L(!1), b = ve("InternalSelection", "-internal-selection", q1, rc, e, ie(e, "clsPrefix")), y = E(() => e.clearable && !e.disabled && (x.value || e.active)), B = E(() => e.selectedOption ? e.renderTag ? e.renderTag({
      option: e.selectedOption,
      handleClose: () => {
      }
    }) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : mt(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder), C = E(() => {
      const oe = e.selectedOption;
      if (oe)
        return oe[e.labelField];
    }), P = E(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length) : e.selectedOption !== null);
    function k() {
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
    function S() {
      const {
        value: oe
      } = m;
      oe && (oe.style.display = "none");
    }
    function w() {
      const {
        value: oe
      } = m;
      oe && (oe.style.display = "inline-block");
    }
    Me(ie(e, "active"), (oe) => {
      oe || S();
    }), Me(ie(e, "pattern"), () => {
      e.multiple && ht(k);
    });
    function R(oe) {
      const {
        onFocus: he
      } = e;
      he && he(oe);
    }
    function F(oe) {
      const {
        onBlur: he
      } = e;
      he && he(oe);
    }
    function N(oe) {
      const {
        onDeleteOption: he
      } = e;
      he && he(oe);
    }
    function $(oe) {
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
    function O(oe) {
      var he;
      (!oe.relatedTarget || !(!((he = s.value) === null || he === void 0) && he.contains(oe.relatedTarget))) && R(oe);
    }
    function M(oe) {
      var he;
      !((he = s.value) === null || he === void 0) && he.contains(oe.relatedTarget) || F(oe);
    }
    function W(oe) {
      $(oe);
    }
    function H() {
      x.value = !0;
    }
    function U() {
      x.value = !1;
    }
    function ee(oe) {
      !e.active || !e.filterable || oe.target !== a.value && oe.preventDefault();
    }
    function Y(oe) {
      N(oe);
    }
    const K = L(!1);
    function j(oe) {
      if (oe.key === "Backspace" && !K.value && !e.pattern.length) {
        const {
          selectedOptions: he
        } = e;
        he != null && he.length && Y(he[he.length - 1]);
      }
    }
    let q = null;
    function X(oe) {
      const {
        value: he
      } = i;
      if (he) {
        const Te = oe.target.value;
        he.textContent = Te, k();
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
        } = l;
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
      e.filterable ? (p.value = !1, (oe = u.value) === null || oe === void 0 || oe.focus()) : e.multiple ? (he = l.value) === null || he === void 0 || he.focus() : (Te = d.value) === null || Te === void 0 || Te.focus();
    }
    function Pe() {
      const {
        value: oe
      } = a;
      oe && (w(), oe.focus());
    }
    function xe() {
      const {
        value: oe
      } = a;
      oe && oe.blur();
    }
    function Fe(oe) {
      const {
        value: he
      } = c;
      he && he.setTextContent(`+${oe}`);
    }
    function $e() {
      const {
        value: oe
      } = v;
      return oe;
    }
    function ut() {
      return a.value;
    }
    let ot = null;
    function vt() {
      ot !== null && window.clearTimeout(ot);
    }
    function gt() {
      e.active || (vt(), ot = window.setTimeout(() => {
        P.value && (h.value = !0);
      }, 100));
    }
    function ye() {
      vt();
    }
    function Ce(oe) {
      oe || (vt(), h.value = !1);
    }
    Me(P, (oe) => {
      oe || (h.value = !1);
    }), $t(() => {
      rt(() => {
        const oe = u.value;
        oe && (e.disabled ? oe.removeAttribute("tabindex") : oe.tabIndex = p.value ? -1 : 0);
      });
    }), hu(s, e.onResize);
    const {
      inlineThemeDisabled: Ee
    } = e, Le = E(() => {
      const {
        size: oe
      } = e, {
        common: {
          cubicBezierEaseInOut: he
        },
        self: {
          fontWeight: Te,
          borderRadius: ct,
          color: Tt,
          placeholderColor: Ot,
          textColor: xt,
          paddingSingle: at,
          paddingMultiple: St,
          caretColor: it,
          colorDisabled: fe,
          textColorDisabled: ke,
          placeholderColorDisabled: A,
          colorActive: V,
          boxShadowFocus: Q,
          boxShadowActive: se,
          boxShadowHover: de,
          border: ge,
          borderFocus: me,
          borderHover: Se,
          borderActive: Ne,
          arrowColor: lt,
          arrowColorDisabled: Ke,
          loadingColor: Lt,
          // form warning
          colorActiveWarning: Wt,
          boxShadowFocusWarning: _t,
          boxShadowActiveWarning: Kt,
          boxShadowHoverWarning: qt,
          borderWarning: on,
          borderFocusWarning: Gt,
          borderHoverWarning: _,
          borderActiveWarning: te,
          // form error
          colorActiveError: we,
          boxShadowFocusError: Oe,
          boxShadowActiveError: Ze,
          boxShadowHoverError: He,
          borderError: st,
          borderFocusError: pt,
          borderHoverError: Qt,
          borderActiveError: Rn,
          // clear
          clearColor: Pn,
          clearColorHover: er,
          clearColorPressed: Qr,
          clearSize: eo,
          // arrow
          arrowSize: to,
          [Z("height", oe)]: no,
          [Z("fontSize", oe)]: ro
        }
      } = b.value, Mn = Vt(at), In = Vt(St);
      return {
        "--n-bezier": he,
        "--n-border": ge,
        "--n-border-active": Ne,
        "--n-border-focus": me,
        "--n-border-hover": Se,
        "--n-border-radius": ct,
        "--n-box-shadow-active": se,
        "--n-box-shadow-focus": Q,
        "--n-box-shadow-hover": de,
        "--n-caret-color": it,
        "--n-color": Tt,
        "--n-color-active": V,
        "--n-color-disabled": fe,
        "--n-font-size": ro,
        "--n-height": no,
        "--n-padding-single-top": Mn.top,
        "--n-padding-multiple-top": In.top,
        "--n-padding-single-right": Mn.right,
        "--n-padding-multiple-right": In.right,
        "--n-padding-single-left": Mn.left,
        "--n-padding-multiple-left": In.left,
        "--n-padding-single-bottom": Mn.bottom,
        "--n-padding-multiple-bottom": In.bottom,
        "--n-placeholder-color": Ot,
        "--n-placeholder-color-disabled": A,
        "--n-text-color": xt,
        "--n-text-color-disabled": ke,
        "--n-arrow-color": lt,
        "--n-arrow-color-disabled": Ke,
        "--n-loading-color": Lt,
        // form warning
        "--n-color-active-warning": Wt,
        "--n-box-shadow-focus-warning": _t,
        "--n-box-shadow-active-warning": Kt,
        "--n-box-shadow-hover-warning": qt,
        "--n-border-warning": on,
        "--n-border-focus-warning": Gt,
        "--n-border-hover-warning": _,
        "--n-border-active-warning": te,
        // form error
        "--n-color-active-error": we,
        "--n-box-shadow-focus-error": Oe,
        "--n-box-shadow-active-error": Ze,
        "--n-box-shadow-hover-error": He,
        "--n-border-error": st,
        "--n-border-focus-error": pt,
        "--n-border-hover-error": Qt,
        "--n-border-active-error": Rn,
        // clear
        "--n-clear-size": eo,
        "--n-clear-color": Pn,
        "--n-clear-color-hover": er,
        "--n-clear-color-pressed": Qr,
        // arrow-size
        "--n-arrow-size": to,
        // font-weight
        "--n-font-weight": Te
      };
    }), nt = Ee ? Xe("internal-selection", E(() => e.size[0]), Le, e) : void 0;
    return {
      mergedTheme: b,
      mergedClearable: y,
      mergedClsPrefix: t,
      rtlEnabled: o,
      patternInputFocused: p,
      filterablePlaceholder: B,
      label: C,
      selected: P,
      showTagsPanel: h,
      isComposing: K,
      // dom ref
      counterRef: c,
      counterWrapperRef: v,
      patternInputMirrorRef: i,
      patternInputRef: a,
      selfRef: s,
      multipleElRef: l,
      singleElRef: d,
      patternInputWrapperRef: u,
      overflowRef: g,
      inputTagElRef: m,
      handleMouseDown: ee,
      handleFocusin: O,
      handleClear: W,
      handleMouseEnter: H,
      handleMouseLeave: U,
      handleDeleteOption: Y,
      handlePatternKeyDown: j,
      handlePatternInputInput: X,
      handlePatternInputBlur: be,
      handlePatternInputFocus: ce,
      handleMouseEnterCounter: gt,
      handleMouseLeaveCounter: ye,
      handleFocusout: M,
      handleCompositionEnd: le,
      handleCompositionStart: ae,
      onPopoverUpdateShow: Ce,
      focus: ue,
      focusInput: Pe,
      blur: G,
      blurInput: xe,
      updateCounter: Fe,
      getCounter: $e,
      getTail: ut,
      renderLabel: e.renderLabel,
      cssVars: Ee ? void 0 : Le,
      themeClass: nt == null ? void 0 : nt.themeClass,
      onRender: nt == null ? void 0 : nt.onRender
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
      bordered: s,
      clsPrefix: l,
      ellipsisTagPopoverProps: d,
      onRender: u,
      renderTag: c,
      renderLabel: v
    } = this;
    u == null || u();
    const g = a === "responsive", m = typeof a == "number", h = g || m, p = f(wa, null, {
      default: () => f(nc, {
        clsPrefix: l,
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
        class: `${l}-base-selection-tag-wrapper`,
        key: n.value
      }, c ? c({
        option: n,
        handleClose: () => {
          this.handleDeleteOption(n);
        }
      }) : f(ua, {
        size: r,
        closable: !n.disabled,
        disabled: o,
        onClose: () => {
          this.handleDeleteOption(n);
        },
        internalCloseIsButtonTag: !1,
        internalCloseFocusable: !1
      }, {
        default: () => v ? v(n, !0) : mt(n[b], n, !0)
      })), B = () => (m ? this.selectedOptions.slice(0, a) : this.selectedOptions).map(y), C = i ? f("div", {
        class: `${l}-base-selection-input-tag`,
        ref: "inputTagElRef",
        key: "__input-tag__"
      }, f("input", Object.assign({}, this.inputProps, {
        ref: "patternInputRef",
        tabindex: -1,
        disabled: o,
        value: this.pattern,
        autofocus: this.autofocus,
        class: `${l}-base-selection-input-tag__input`,
        onBlur: this.handlePatternInputBlur,
        onFocus: this.handlePatternInputFocus,
        onKeydown: this.handlePatternKeyDown,
        onInput: this.handlePatternInputInput,
        onCompositionstart: this.handleCompositionStart,
        onCompositionend: this.handleCompositionEnd
      })), f("span", {
        ref: "patternInputMirrorRef",
        class: `${l}-base-selection-input-tag__mirror`
      }, this.pattern)) : null, P = g ? () => f("div", {
        class: `${l}-base-selection-tag-wrapper`,
        ref: "counterWrapperRef"
      }, f(ua, {
        size: r,
        ref: "counterRef",
        onMouseenter: this.handleMouseEnterCounter,
        onMouseleave: this.handleMouseLeaveCounter,
        disabled: o
      })) : void 0;
      let k;
      if (m) {
        const n = this.selectedOptions.length - a;
        n > 0 && (k = f("div", {
          class: `${l}-base-selection-tag-wrapper`,
          key: "__counter__"
        }, f(ua, {
          size: r,
          ref: "counterRef",
          onMouseenter: this.handleMouseEnterCounter,
          disabled: o
        }, {
          default: () => `+${n}`
        })));
      }
      const S = g ? i ? f(ys, {
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
        default: B,
        counter: P,
        tail: () => C
      }) : f(ys, {
        ref: "overflowRef",
        updateCounter: this.updateCounter,
        getCounter: this.getCounter,
        style: {
          width: "100%",
          display: "flex",
          overflow: "hidden"
        }
      }, {
        default: B,
        counter: P
      }) : m && k ? B().concat(k) : B(), w = h ? () => f("div", {
        class: `${l}-base-selection-popover`
      }, g ? B() : this.selectedOptions.map(y)) : void 0, R = h ? Object.assign({
        show: this.showTagsPanel,
        trigger: "hover",
        overlap: !0,
        placement: "top",
        width: "trigger",
        onUpdateShow: this.onPopoverUpdateShow,
        theme: this.mergedTheme.peers.Popover,
        themeOverrides: this.mergedTheme.peerOverrides.Popover
      }, d) : null, N = (this.selected ? !1 : this.active ? !this.pattern && !this.isComposing : !0) ? f("div", {
        class: `${l}-base-selection-placeholder ${l}-base-selection-overlay`
      }, f("div", {
        class: `${l}-base-selection-placeholder__inner`
      }, this.placeholder)) : null, $ = i ? f("div", {
        ref: "patternInputWrapperRef",
        class: `${l}-base-selection-tags`
      }, S, g ? null : C, p) : f("div", {
        ref: "multipleElRef",
        class: `${l}-base-selection-tags`,
        tabindex: o ? void 0 : 0
      }, S, p);
      x = f(je, null, h ? f(Rr, Object.assign({}, R, {
        scrollable: !0,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => $,
        default: w
      }) : $, N);
    } else if (i) {
      const b = this.pattern || this.isComposing, y = this.active ? !b : !this.selected, B = this.active ? !1 : this.selected;
      x = f("div", {
        ref: "patternInputWrapperRef",
        class: `${l}-base-selection-label`,
        title: this.patternInputFocused ? void 0 : Ss(this.label)
      }, f("input", Object.assign({}, this.inputProps, {
        ref: "patternInputRef",
        class: `${l}-base-selection-input`,
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
      })), B ? f("div", {
        class: `${l}-base-selection-label__render-label ${l}-base-selection-overlay`,
        key: "input"
      }, f("div", {
        class: `${l}-base-selection-overlay__wrapper`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : v ? v(this.selectedOption, !0) : mt(this.label, this.selectedOption, !0))) : null, y ? f("div", {
        class: `${l}-base-selection-placeholder ${l}-base-selection-overlay`,
        key: "placeholder"
      }, f("div", {
        class: `${l}-base-selection-overlay__wrapper`
      }, this.filterablePlaceholder)) : null, p);
    } else
      x = f("div", {
        ref: "singleElRef",
        class: `${l}-base-selection-label`,
        tabindex: this.disabled ? void 0 : 0
      }, this.label !== void 0 ? f("div", {
        class: `${l}-base-selection-input`,
        title: Ss(this.label),
        key: "input"
      }, f("div", {
        class: `${l}-base-selection-input__content`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : v ? v(this.selectedOption, !0) : mt(this.label, this.selectedOption, !0))) : f("div", {
        class: `${l}-base-selection-placeholder ${l}-base-selection-overlay`,
        key: "placeholder"
      }, f("div", {
        class: `${l}-base-selection-placeholder__inner`
      }, this.placeholder)), p);
    return f("div", {
      ref: "selfRef",
      class: [`${l}-base-selection`, this.rtlEnabled && `${l}-base-selection--rtl`, this.themeClass, e && `${l}-base-selection--${e}-status`, {
        [`${l}-base-selection--active`]: this.active,
        [`${l}-base-selection--selected`]: this.selected || this.active && this.pattern,
        [`${l}-base-selection--disabled`]: this.disabled,
        [`${l}-base-selection--multiple`]: this.multiple,
        // focus is not controlled by selection itself since it always need
        // to be managed together with menu. provide :focus style will cause
        // many redundant codes.
        [`${l}-base-selection--focus`]: this.focused
      }],
      style: this.cssVars,
      onClick: this.onClick,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onKeydown: this.onKeydown,
      onFocusin: this.handleFocusin,
      onFocusout: this.handleFocusout,
      onMousedown: this.handleMouseDown
    }, x, s ? f("div", {
      class: `${l}-base-selection__border`
    }) : null, s ? f("div", {
      class: `${l}-base-selection__state-border`
    }) : null);
  }
}), {
  cubicBezierEaseInOut: Nn
} = dn;
function X1({
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
 opacity ${e} ${Nn},
 max-width ${e} ${Nn} ${t},
 margin-left ${e} ${Nn} ${t},
 margin-right ${e} ${Nn} ${t};
 `), D("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${Nn} ${t},
 max-width ${e} ${Nn},
 margin-left ${e} ${Nn},
 margin-right ${e} ${Nn};
 `)];
}
const Y1 = z("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), Z1 = J({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    Yn("-base-wave", Y1, ie(e, "clsPrefix"));
    const t = L(null), r = L(!1);
    let o = null;
    return Bt(() => {
      o !== null && window.clearTimeout(o);
    }), {
      active: r,
      selfRef: t,
      play() {
        o !== null && (window.clearTimeout(o), r.value = !1, o = null), ht(() => {
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
  cubicBezierEaseInOut: pn,
  cubicBezierEaseOut: J1,
  cubicBezierEaseIn: Q1
} = dn;
function oc({
  overflow: e = "hidden",
  duration: t = ".3s",
  originalTransition: r = "",
  leavingDelay: o = "0s",
  foldPadding: i = !1,
  enterToProps: a = void 0,
  leaveToProps: s = void 0,
  reverse: l = !1
} = {}) {
  const d = l ? "leave" : "enter", u = l ? "enter" : "leave";
  return [D(`&.fade-in-height-expand-transition-${u}-from,
 &.fade-in-height-expand-transition-${d}-to`, Object.assign(Object.assign({}, a), {
    opacity: 1
  })), D(`&.fade-in-height-expand-transition-${u}-to,
 &.fade-in-height-expand-transition-${d}-from`, Object.assign(Object.assign({}, s), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: i ? "0 !important" : void 0,
    paddingBottom: i ? "0 !important" : void 0
  })), D(`&.fade-in-height-expand-transition-${u}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${pn} ${o},
 opacity ${t} ${J1} ${o},
 margin-top ${t} ${pn} ${o},
 margin-bottom ${t} ${pn} ${o},
 padding-top ${t} ${pn} ${o},
 padding-bottom ${t} ${pn} ${o}
 ${r ? `,${r}` : ""}
 `), D(`&.fade-in-height-expand-transition-${d}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${pn},
 opacity ${t} ${Q1},
 margin-top ${t} ${pn},
 margin-bottom ${t} ${pn},
 padding-top ${t} ${pn},
 padding-bottom ${t} ${pn}
 ${r ? `,${r}` : ""}
 `)];
}
const ey = Xr && "chrome" in window;
Xr && navigator.userAgent.includes("Firefox");
const ic = Xr && navigator.userAgent.includes("Safari") && !ey, ty = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function ny(e) {
  const {
    textColor2: t,
    textColor3: r,
    textColorDisabled: o,
    primaryColor: i,
    primaryColorHover: a,
    inputColor: s,
    inputColorDisabled: l,
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
    heightTiny: B,
    heightSmall: C,
    heightMedium: P,
    heightLarge: k,
    actionColor: S,
    clearColor: w,
    clearColorHover: R,
    clearColorPressed: F,
    placeholderColor: N,
    placeholderColorDisabled: $,
    iconColor: n,
    iconColorDisabled: O,
    iconColorHover: M,
    iconColorPressed: W,
    fontWeight: H
  } = e;
  return Object.assign(Object.assign({}, ty), {
    fontWeight: H,
    countTextColorDisabled: o,
    countTextColor: r,
    heightTiny: B,
    heightSmall: C,
    heightMedium: P,
    heightLarge: k,
    fontSizeTiny: p,
    fontSizeSmall: x,
    fontSizeMedium: b,
    fontSizeLarge: y,
    lineHeight: h,
    lineHeightTextarea: h,
    borderRadius: m,
    iconSize: "16px",
    groupLabelColor: S,
    groupLabelTextColor: t,
    textColor: t,
    textColorDisabled: o,
    textDecorationColor: t,
    caretColor: i,
    placeholderColor: N,
    placeholderColorDisabled: $,
    color: s,
    colorDisabled: l,
    colorFocus: s,
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
    colorFocusWarning: s,
    borderFocusWarning: `1px solid ${c}`,
    boxShadowFocusWarning: `0 0 0 2px ${De(u, {
      alpha: 0.2
    })}`,
    caretColorWarning: u,
    // error
    loadingColorError: v,
    borderError: `1px solid ${v}`,
    borderHoverError: `1px solid ${g}`,
    colorFocusError: s,
    borderFocusError: `1px solid ${g}`,
    boxShadowFocusError: `0 0 0 2px ${De(v, {
      alpha: 0.2
    })}`,
    caretColorError: v,
    clearColor: w,
    clearColorHover: R,
    clearColorPressed: F,
    iconColor: n,
    iconColorDisabled: O,
    iconColorHover: M,
    iconColorPressed: W,
    suffixTextColor: t
  });
}
const Al = {
  name: "Input",
  common: Ye,
  peers: {
    Scrollbar: Jn
  },
  self: ny
}, ac = "n-input", ry = z("input", `
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
 `, [D("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), D("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), D("&:-webkit-autofill ~", [T("placeholder", "display: none;")])]),
  I("round", [Ue("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  T("placeholder", `
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
  I("textarea", [T("placeholder", "overflow: visible;")]),
  Ue("autosize", "width: 100%;"),
  I("autosize", [T("textarea-el, input-el", `
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
 `, [D("&[type=password]::-ms-reveal", "display: none;"), D("+", [T("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  Ue("textarea", [T("placeholder", "white-space: nowrap;")]),
  T("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  I("textarea", "width: 100%;", [z("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), I("resizable", [z("input-wrapper", `
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
  I("pair", [T("input-el, placeholder", "text-align: center;"), T("separator", `
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
  I("disabled", `
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
  Ue("disabled", [T("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [D("&:hover", `
 color: var(--n-icon-color-hover);
 `), D("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), D("&:hover", [T("state-border", "border: var(--n-border-hover);")]), I("focus", "background-color: var(--n-color-focus);", [T("state-border", `
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
  ["warning", "error"].map((e) => I(`${e}-status`, [Ue("disabled", [z("base-loading", `
 color: var(--n-loading-color-${e})
 `), T("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), T("state-border", `
 border: var(--n-border-${e});
 `), D("&:hover", [T("state-border", `
 border: var(--n-border-hover-${e});
 `)]), D("&:focus", `
 background-color: var(--n-color-focus-${e});
 `, [T("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]), I("focus", `
 background-color: var(--n-color-focus-${e});
 `, [T("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))
]), oy = z("input", [I("disabled", [T("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
function iy(e) {
  let t = 0;
  for (const r of e)
    t++;
  return t;
}
function Zo(e) {
  return e === "" || e == null;
}
function ay(e) {
  const t = L(null);
  function r() {
    const {
      value: a
    } = e;
    if (!(a != null && a.focus)) {
      i();
      return;
    }
    const {
      selectionStart: s,
      selectionEnd: l,
      value: d
    } = a;
    if (s == null || l == null) {
      i();
      return;
    }
    t.value = {
      start: s,
      end: l,
      beforeText: d.slice(0, s),
      afterText: d.slice(l)
    };
  }
  function o() {
    var a;
    const {
      value: s
    } = t, {
      value: l
    } = e;
    if (!s || !l)
      return;
    const {
      value: d
    } = l, {
      start: u,
      beforeText: c,
      afterText: v
    } = s;
    let g = d.length;
    if (d.endsWith(v))
      g = d.length - v.length;
    else if (d.startsWith(c))
      g = c.length;
    else {
      const m = c[u - 1], h = d.indexOf(m, u - 1);
      h !== -1 && (g = h + 1);
    }
    (a = l.setSelectionRange) === null || a === void 0 || a.call(l, g, g);
  }
  function i() {
    t.value = null;
  }
  return Me(e, i), {
    recordCursor: r,
    restoreCursor: o
  };
}
const cd = J({
  name: "InputWordCount",
  setup(e, {
    slots: t
  }) {
    const {
      mergedValueRef: r,
      maxlengthRef: o,
      mergedClsPrefixRef: i,
      countGraphemesRef: a
    } = pe(ac), s = E(() => {
      const {
        value: l
      } = r;
      return l === null || Array.isArray(l) ? 0 : (a.value || iy)(l);
    });
    return () => {
      const {
        value: l
      } = o, {
        value: d
      } = r;
      return f("span", {
        class: `${i.value}-input-word-count`
      }, Ca(t.default, {
        value: d === null || Array.isArray(d) ? "" : d
      }, () => [l === void 0 ? s.value : `${s.value} / ${l}`]));
    };
  }
}), ly = Object.assign(Object.assign({}, ve.props), {
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
}), Ta = J({
  name: "Input",
  props: ly,
  slots: Object,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      mergedBorderedRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = ve("Input", "-input", ry, Al, e, t);
    ic && Yn("-input-safari", oy, t);
    const s = L(null), l = L(null), d = L(null), u = L(null), c = L(null), v = L(null), g = L(null), m = ay(g), h = L(null), {
      localeRef: p
    } = cr("Input"), x = L(e.defaultValue), b = ie(e, "value"), y = Et(b, x), B = En(e), {
      mergedSizeRef: C,
      mergedDisabledRef: P,
      mergedStatusRef: k
    } = B, S = L(!1), w = L(!1), R = L(!1), F = L(!1);
    let N = null;
    const $ = E(() => {
      const {
        placeholder: _,
        pair: te
      } = e;
      return te ? Array.isArray(_) ? _ : _ === void 0 ? ["", ""] : [_, _] : _ === void 0 ? [p.value.placeholder] : [_];
    }), n = E(() => {
      const {
        value: _
      } = R, {
        value: te
      } = y, {
        value: we
      } = $;
      return !_ && (Zo(te) || Array.isArray(te) && Zo(te[0])) && we[0];
    }), O = E(() => {
      const {
        value: _
      } = R, {
        value: te
      } = y, {
        value: we
      } = $;
      return !_ && we[1] && (Zo(te) || Array.isArray(te) && Zo(te[1]));
    }), M = Ge(() => e.internalForceFocus || S.value), W = Ge(() => {
      if (P.value || e.readonly || !e.clearable || !M.value && !w.value)
        return !1;
      const {
        value: _
      } = y, {
        value: te
      } = M;
      return e.pair ? !!(Array.isArray(_) && (_[0] || _[1])) && (w.value || te) : !!_ && (w.value || te);
    }), H = E(() => {
      const {
        showPasswordOn: _
      } = e;
      if (_)
        return _;
      if (e.showPasswordToggle) return "click";
    }), U = L(!1), ee = E(() => {
      const {
        textDecoration: _
      } = e;
      return _ ? Array.isArray(_) ? _.map((te) => ({
        textDecoration: te
      })) : [{
        textDecoration: _
      }] : ["", ""];
    }), Y = L(void 0), K = () => {
      var _, te;
      if (e.type === "textarea") {
        const {
          autosize: we
        } = e;
        if (we && (Y.value = (te = (_ = h.value) === null || _ === void 0 ? void 0 : _.$el) === null || te === void 0 ? void 0 : te.offsetWidth), !l.value || typeof we == "boolean") return;
        const {
          paddingTop: Oe,
          paddingBottom: Ze,
          lineHeight: He
        } = window.getComputedStyle(l.value), st = Number(Oe.slice(0, -2)), pt = Number(Ze.slice(0, -2)), Qt = Number(He.slice(0, -2)), {
          value: Rn
        } = d;
        if (!Rn) return;
        if (we.minRows) {
          const Pn = Math.max(we.minRows, 1), er = `${st + pt + Qt * Pn}px`;
          Rn.style.minHeight = er;
        }
        if (we.maxRows) {
          const Pn = `${st + pt + Qt * we.maxRows}px`;
          Rn.style.maxHeight = Pn;
        }
      }
    }, j = E(() => {
      const {
        maxlength: _
      } = e;
      return _ === void 0 ? void 0 : Number(_);
    });
    $t(() => {
      const {
        value: _
      } = y;
      Array.isArray(_) || Ne(_);
    });
    const q = Ao().proxy;
    function X(_, te) {
      const {
        onUpdateValue: we,
        "onUpdate:value": Oe,
        onInput: Ze
      } = e, {
        nTriggerFormInput: He
      } = B;
      we && ne(we, _, te), Oe && ne(Oe, _, te), Ze && ne(Ze, _, te), x.value = _, He();
    }
    function ae(_, te) {
      const {
        onChange: we
      } = e, {
        nTriggerFormChange: Oe
      } = B;
      we && ne(we, _, te), x.value = _, Oe();
    }
    function le(_) {
      const {
        onBlur: te
      } = e, {
        nTriggerFormBlur: we
      } = B;
      te && ne(te, _), we();
    }
    function ce(_) {
      const {
        onFocus: te
      } = e, {
        nTriggerFormFocus: we
      } = B;
      te && ne(te, _), we();
    }
    function be(_) {
      const {
        onClear: te
      } = e;
      te && ne(te, _);
    }
    function G(_) {
      const {
        onInputBlur: te
      } = e;
      te && ne(te, _);
    }
    function ue(_) {
      const {
        onInputFocus: te
      } = e;
      te && ne(te, _);
    }
    function Pe() {
      const {
        onDeactivate: _
      } = e;
      _ && ne(_);
    }
    function xe() {
      const {
        onActivate: _
      } = e;
      _ && ne(_);
    }
    function Fe(_) {
      const {
        onClick: te
      } = e;
      te && ne(te, _);
    }
    function $e(_) {
      const {
        onWrapperFocus: te
      } = e;
      te && ne(te, _);
    }
    function ut(_) {
      const {
        onWrapperBlur: te
      } = e;
      te && ne(te, _);
    }
    function ot() {
      R.value = !0;
    }
    function vt(_) {
      R.value = !1, _.target === v.value ? gt(_, 1) : gt(_, 0);
    }
    function gt(_, te = 0, we = "input") {
      const Oe = _.target.value;
      if (Ne(Oe), _ instanceof InputEvent && !_.isComposing && (R.value = !1), e.type === "textarea") {
        const {
          value: He
        } = h;
        He && He.syncUnifiedContainer();
      }
      if (N = Oe, R.value) return;
      m.recordCursor();
      const Ze = ye(Oe);
      if (Ze)
        if (!e.pair)
          we === "input" ? X(Oe, {
            source: te
          }) : ae(Oe, {
            source: te
          });
        else {
          let {
            value: He
          } = y;
          Array.isArray(He) ? He = [He[0], He[1]] : He = ["", ""], He[te] = Oe, we === "input" ? X(He, {
            source: te
          }) : ae(He, {
            source: te
          });
        }
      q.$forceUpdate(), Ze || ht(m.restoreCursor);
    }
    function ye(_) {
      const {
        countGraphemes: te,
        maxlength: we,
        minlength: Oe
      } = e;
      if (te) {
        let He;
        if (we !== void 0 && (He === void 0 && (He = te(_)), He > Number(we)) || Oe !== void 0 && (He === void 0 && (He = te(_)), He < Number(we)))
          return !1;
      }
      const {
        allowInput: Ze
      } = e;
      return typeof Ze == "function" ? Ze(_) : !0;
    }
    function Ce(_) {
      G(_), _.relatedTarget === s.value && Pe(), _.relatedTarget !== null && (_.relatedTarget === c.value || _.relatedTarget === v.value || _.relatedTarget === l.value) || (F.value = !1), oe(_, "blur"), g.value = null;
    }
    function Ee(_, te) {
      ue(_), S.value = !0, F.value = !0, xe(), oe(_, "focus"), te === 0 ? g.value = c.value : te === 1 ? g.value = v.value : te === 2 && (g.value = l.value);
    }
    function Le(_) {
      e.passivelyActivated && (ut(_), oe(_, "blur"));
    }
    function nt(_) {
      e.passivelyActivated && (S.value = !0, $e(_), oe(_, "focus"));
    }
    function oe(_, te) {
      _.relatedTarget !== null && (_.relatedTarget === c.value || _.relatedTarget === v.value || _.relatedTarget === l.value || _.relatedTarget === s.value) || (te === "focus" ? (ce(_), S.value = !0) : te === "blur" && (le(_), S.value = !1));
    }
    function he(_, te) {
      gt(_, te, "change");
    }
    function Te(_) {
      Fe(_);
    }
    function ct(_) {
      be(_), Tt();
    }
    function Tt() {
      e.pair ? (X(["", ""], {
        source: "clear"
      }), ae(["", ""], {
        source: "clear"
      })) : (X("", {
        source: "clear"
      }), ae("", {
        source: "clear"
      }));
    }
    function Ot(_) {
      const {
        onMousedown: te
      } = e;
      te && te(_);
      const {
        tagName: we
      } = _.target;
      if (we !== "INPUT" && we !== "TEXTAREA") {
        if (e.resizable) {
          const {
            value: Oe
          } = s;
          if (Oe) {
            const {
              left: Ze,
              top: He,
              width: st,
              height: pt
            } = Oe.getBoundingClientRect(), Qt = 14;
            if (Ze + st - Qt < _.clientX && _.clientX < Ze + st && He + pt - Qt < _.clientY && _.clientY < He + pt)
              return;
          }
        }
        _.preventDefault(), S.value || Q();
      }
    }
    function xt() {
      var _;
      w.value = !0, e.type === "textarea" && ((_ = h.value) === null || _ === void 0 || _.handleMouseEnterWrapper());
    }
    function at() {
      var _;
      w.value = !1, e.type === "textarea" && ((_ = h.value) === null || _ === void 0 || _.handleMouseLeaveWrapper());
    }
    function St() {
      P.value || H.value === "click" && (U.value = !U.value);
    }
    function it(_) {
      if (P.value) return;
      _.preventDefault();
      const te = (Oe) => {
        Oe.preventDefault(), Ve("mouseup", document, te);
      };
      if (qe("mouseup", document, te), H.value !== "mousedown") return;
      U.value = !0;
      const we = () => {
        U.value = !1, Ve("mouseup", document, we);
      };
      qe("mouseup", document, we);
    }
    function fe(_) {
      e.onKeyup && ne(e.onKeyup, _);
    }
    function ke(_) {
      switch (e.onKeydown && ne(e.onKeydown, _), _.key) {
        case "Escape":
          V();
          break;
        case "Enter":
          A(_);
          break;
      }
    }
    function A(_) {
      var te, we;
      if (e.passivelyActivated) {
        const {
          value: Oe
        } = F;
        if (Oe) {
          e.internalDeactivateOnEnter && V();
          return;
        }
        _.preventDefault(), e.type === "textarea" ? (te = l.value) === null || te === void 0 || te.focus() : (we = c.value) === null || we === void 0 || we.focus();
      }
    }
    function V() {
      e.passivelyActivated && (F.value = !1, ht(() => {
        var _;
        (_ = s.value) === null || _ === void 0 || _.focus();
      }));
    }
    function Q() {
      var _, te, we;
      P.value || (e.passivelyActivated ? (_ = s.value) === null || _ === void 0 || _.focus() : ((te = l.value) === null || te === void 0 || te.focus(), (we = c.value) === null || we === void 0 || we.focus()));
    }
    function se() {
      var _;
      !((_ = s.value) === null || _ === void 0) && _.contains(document.activeElement) && document.activeElement.blur();
    }
    function de() {
      var _, te;
      (_ = l.value) === null || _ === void 0 || _.select(), (te = c.value) === null || te === void 0 || te.select();
    }
    function ge() {
      P.value || (l.value ? l.value.focus() : c.value && c.value.focus());
    }
    function me() {
      const {
        value: _
      } = s;
      _ != null && _.contains(document.activeElement) && _ !== document.activeElement && V();
    }
    function Se(_) {
      if (e.type === "textarea") {
        const {
          value: te
        } = l;
        te == null || te.scrollTo(_);
      } else {
        const {
          value: te
        } = c;
        te == null || te.scrollTo(_);
      }
    }
    function Ne(_) {
      const {
        type: te,
        pair: we,
        autosize: Oe
      } = e;
      if (!we && Oe)
        if (te === "textarea") {
          const {
            value: Ze
          } = d;
          Ze && (Ze.textContent = `${_ ?? ""}\r
`);
        } else {
          const {
            value: Ze
          } = u;
          Ze && (_ ? Ze.textContent = _ : Ze.innerHTML = "&nbsp;");
        }
    }
    function lt() {
      K();
    }
    const Ke = L({
      top: "0"
    });
    function Lt(_) {
      var te;
      const {
        scrollTop: we
      } = _.target;
      Ke.value.top = `${-we}px`, (te = h.value) === null || te === void 0 || te.syncUnifiedContainer();
    }
    let Wt = null;
    rt(() => {
      const {
        autosize: _,
        type: te
      } = e;
      _ && te === "textarea" ? Wt = Me(y, (we) => {
        !Array.isArray(we) && we !== N && Ne(we);
      }) : Wt == null || Wt();
    });
    let _t = null;
    rt(() => {
      e.type === "textarea" ? _t = Me(y, (_) => {
        var te;
        !Array.isArray(_) && _ !== N && ((te = h.value) === null || te === void 0 || te.syncUnifiedContainer());
      }) : _t == null || _t();
    }), ze(ac, {
      mergedValueRef: y,
      maxlengthRef: j,
      mergedClsPrefixRef: t,
      countGraphemesRef: ie(e, "countGraphemes")
    });
    const Kt = {
      wrapperElRef: s,
      inputElRef: c,
      textareaElRef: l,
      isCompositing: R,
      clear: Tt,
      focus: Q,
      blur: se,
      select: de,
      deactivate: me,
      activate: ge,
      scrollTo: Se
    }, qt = kt("Input", i, t), on = E(() => {
      const {
        value: _
      } = C, {
        common: {
          cubicBezierEaseInOut: te
        },
        self: {
          color: we,
          borderRadius: Oe,
          textColor: Ze,
          caretColor: He,
          caretColorError: st,
          caretColorWarning: pt,
          textDecorationColor: Qt,
          border: Rn,
          borderDisabled: Pn,
          borderHover: er,
          borderFocus: Qr,
          placeholderColor: eo,
          placeholderColorDisabled: to,
          lineHeightTextarea: no,
          colorDisabled: ro,
          colorFocus: Mn,
          textColorDisabled: In,
          boxShadowFocus: Ii,
          iconSize: Li,
          colorFocusWarning: Ni,
          boxShadowFocusWarning: Hi,
          borderWarning: ji,
          borderFocusWarning: Wi,
          borderHoverWarning: _i,
          colorFocusError: Vi,
          boxShadowFocusError: Ui,
          borderError: Ki,
          borderFocusError: qi,
          borderHoverError: wf,
          clearSize: Sf,
          clearColor: Bf,
          clearColorHover: kf,
          clearColorPressed: Rf,
          iconColor: Pf,
          iconColorDisabled: Ff,
          suffixTextColor: $f,
          countTextColor: zf,
          countTextColorDisabled: Af,
          iconColorHover: Ef,
          iconColorPressed: Df,
          loadingColor: Tf,
          loadingColorError: Of,
          loadingColorWarning: Mf,
          fontWeight: If,
          [Z("padding", _)]: Lf,
          [Z("fontSize", _)]: Nf,
          [Z("height", _)]: Hf
        }
      } = a.value, {
        left: jf,
        right: Wf
      } = Vt(Lf);
      return {
        "--n-bezier": te,
        "--n-count-text-color": zf,
        "--n-count-text-color-disabled": Af,
        "--n-color": we,
        "--n-font-size": Nf,
        "--n-font-weight": If,
        "--n-border-radius": Oe,
        "--n-height": Hf,
        "--n-padding-left": jf,
        "--n-padding-right": Wf,
        "--n-text-color": Ze,
        "--n-caret-color": He,
        "--n-text-decoration-color": Qt,
        "--n-border": Rn,
        "--n-border-disabled": Pn,
        "--n-border-hover": er,
        "--n-border-focus": Qr,
        "--n-placeholder-color": eo,
        "--n-placeholder-color-disabled": to,
        "--n-icon-size": Li,
        "--n-line-height-textarea": no,
        "--n-color-disabled": ro,
        "--n-color-focus": Mn,
        "--n-text-color-disabled": In,
        "--n-box-shadow-focus": Ii,
        "--n-loading-color": Tf,
        // form warning
        "--n-caret-color-warning": pt,
        "--n-color-focus-warning": Ni,
        "--n-box-shadow-focus-warning": Hi,
        "--n-border-warning": ji,
        "--n-border-focus-warning": Wi,
        "--n-border-hover-warning": _i,
        "--n-loading-color-warning": Mf,
        // form error
        "--n-caret-color-error": st,
        "--n-color-focus-error": Vi,
        "--n-box-shadow-focus-error": Ui,
        "--n-border-error": Ki,
        "--n-border-focus-error": qi,
        "--n-border-hover-error": wf,
        "--n-loading-color-error": Of,
        // clear-button
        "--n-clear-color": Bf,
        "--n-clear-size": Sf,
        "--n-clear-color-hover": kf,
        "--n-clear-color-pressed": Rf,
        "--n-icon-color": Pf,
        "--n-icon-color-hover": Ef,
        "--n-icon-color-pressed": Df,
        "--n-icon-color-disabled": Ff,
        "--n-suffix-text-color": $f
      };
    }), Gt = o ? Xe("input", E(() => {
      const {
        value: _
      } = C;
      return _[0];
    }), on, e) : void 0;
    return Object.assign(Object.assign({}, Kt), {
      // DOM ref
      wrapperElRef: s,
      inputElRef: c,
      inputMirrorElRef: u,
      inputEl2Ref: v,
      textareaElRef: l,
      textareaMirrorElRef: d,
      textareaScrollbarInstRef: h,
      // value
      rtlEnabled: qt,
      uncontrolledValue: x,
      mergedValue: y,
      passwordVisible: U,
      mergedPlaceholder: $,
      showPlaceholder1: n,
      showPlaceholder2: O,
      mergedFocus: M,
      isComposing: R,
      activated: F,
      showClearButton: W,
      mergedSize: C,
      mergedDisabled: P,
      textDecorationStyle: ee,
      mergedClsPrefix: t,
      mergedBordered: r,
      mergedShowPasswordOn: H,
      placeholderStyle: Ke,
      mergedStatus: k,
      textAreaScrollContainerWidth: Y,
      // methods
      handleTextAreaScroll: Lt,
      handleCompositionStart: ot,
      handleCompositionEnd: vt,
      handleInput: gt,
      handleInputBlur: Ce,
      handleInputFocus: Ee,
      handleWrapperBlur: Le,
      handleWrapperFocus: nt,
      handleMouseEnter: xt,
      handleMouseLeave: at,
      handleMouseDown: Ot,
      handleChange: he,
      handleClick: Te,
      handleClear: ct,
      handlePasswordToggleClick: St,
      handlePasswordToggleMousedown: it,
      handleWrapperKeydown: ke,
      handleWrapperKeyup: fe,
      handleTextAreaMirrorResize: lt,
      getTextareaScrollContainer: () => l.value,
      mergedTheme: a,
      cssVars: o ? void 0 : on,
      themeClass: Gt == null ? void 0 : Gt.themeClass,
      onRender: Gt == null ? void 0 : Gt.onRender
    });
  },
  render() {
    var e, t, r, o, i, a, s;
    const {
      mergedClsPrefix: l,
      mergedStatus: d,
      themeClass: u,
      type: c,
      countGraphemes: v,
      onRender: g
    } = this, m = this.$slots;
    return g == null || g(), f("div", {
      ref: "wrapperElRef",
      class: [`${l}-input`, u, d && `${l}-input--${d}-status`, {
        [`${l}-input--rtl`]: this.rtlEnabled,
        [`${l}-input--disabled`]: this.mergedDisabled,
        [`${l}-input--textarea`]: c === "textarea",
        [`${l}-input--resizable`]: this.resizable && !this.autosize,
        [`${l}-input--autosize`]: this.autosize,
        [`${l}-input--round`]: this.round && c !== "textarea",
        [`${l}-input--pair`]: this.pair,
        [`${l}-input--focus`]: this.mergedFocus,
        [`${l}-input--stateful`]: this.stateful
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
      class: `${l}-input-wrapper`
    }, _e(m.prefix, (h) => h && f("div", {
      class: `${l}-input__prefix`
    }, h)), c === "textarea" ? f(On, {
      ref: "textareaScrollbarInstRef",
      class: `${l}-input__textarea`,
      container: this.getTextareaScrollContainer,
      theme: (t = (e = this.theme) === null || e === void 0 ? void 0 : e.peers) === null || t === void 0 ? void 0 : t.Scrollbar,
      themeOverrides: (o = (r = this.themeOverrides) === null || r === void 0 ? void 0 : r.peers) === null || o === void 0 ? void 0 : o.Scrollbar,
      triggerDisplayManually: !0,
      useUnifiedContainer: !0,
      internalHoistYRail: !0
    }, {
      default: () => {
        var h, p;
        const {
          textAreaScrollContainerWidth: x
        } = this, b = {
          width: this.autosize && x && `${x}px`
        };
        return f(je, null, f("textarea", Object.assign({}, this.inputProps, {
          ref: "textareaElRef",
          class: [`${l}-input__textarea-el`, (h = this.inputProps) === null || h === void 0 ? void 0 : h.class],
          autofocus: this.autofocus,
          rows: Number(this.rows),
          placeholder: this.placeholder,
          value: this.mergedValue,
          disabled: this.mergedDisabled,
          maxlength: v ? void 0 : this.maxlength,
          minlength: v ? void 0 : this.minlength,
          readonly: this.readonly,
          tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
          style: [this.textDecorationStyle[0], (p = this.inputProps) === null || p === void 0 ? void 0 : p.style, b],
          onBlur: this.handleInputBlur,
          onFocus: (y) => {
            this.handleInputFocus(y, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? f("div", {
          class: `${l}-input__placeholder`,
          style: [this.placeholderStyle, b],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? f(Wr, {
          onResize: this.handleTextAreaMirrorResize
        }, {
          default: () => f("div", {
            ref: "textareaMirrorElRef",
            class: `${l}-input__textarea-mirror`,
            key: "mirror"
          })
        }) : null);
      }
    }) : f("div", {
      class: `${l}-input__input`
    }, f("input", Object.assign({
      type: c === "password" && this.mergedShowPasswordOn && this.passwordVisible ? "text" : c
    }, this.inputProps, {
      ref: "inputElRef",
      class: [`${l}-input__input-el`, (i = this.inputProps) === null || i === void 0 ? void 0 : i.class],
      style: [this.textDecorationStyle[0], (a = this.inputProps) === null || a === void 0 ? void 0 : a.style],
      tabindex: this.passivelyActivated && !this.activated ? -1 : (s = this.inputProps) === null || s === void 0 ? void 0 : s.tabindex,
      placeholder: this.mergedPlaceholder[0],
      disabled: this.mergedDisabled,
      maxlength: v ? void 0 : this.maxlength,
      minlength: v ? void 0 : this.minlength,
      value: Array.isArray(this.mergedValue) ? this.mergedValue[0] : this.mergedValue,
      readonly: this.readonly,
      autofocus: this.autofocus,
      size: this.attrSize,
      onBlur: this.handleInputBlur,
      onFocus: (h) => {
        this.handleInputFocus(h, 0);
      },
      onInput: (h) => {
        this.handleInput(h, 0);
      },
      onChange: (h) => {
        this.handleChange(h, 0);
      }
    })), this.showPlaceholder1 ? f("div", {
      class: `${l}-input__placeholder`
    }, f("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? f("div", {
      class: `${l}-input__input-mirror`,
      key: "mirror",
      ref: "inputMirrorElRef"
    }, " ") : null), !this.pair && _e(m.suffix, (h) => h || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? f("div", {
      class: `${l}-input__suffix`
    }, [_e(m["clear-icon-placeholder"], (p) => (this.clearable || p) && f(Ea, {
      clsPrefix: l,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => p,
      icon: () => {
        var x, b;
        return (b = (x = this.$slots)["clear-icon"]) === null || b === void 0 ? void 0 : b.call(x);
      }
    })), this.internalLoadingBeforeSuffix ? null : h, this.loading !== void 0 ? f(nc, {
      clsPrefix: l,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? h : null, this.showCount && this.type !== "textarea" ? f(cd, null, {
      default: (p) => {
        var x;
        const {
          renderCount: b
        } = this;
        return b ? b(p) : (x = m.count) === null || x === void 0 ? void 0 : x.call(m, p);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? f("div", {
      class: `${l}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? nn(m["password-visible-icon"], () => [f(Ct, {
      clsPrefix: l
    }, {
      default: () => f(Mx, null)
    })]) : nn(m["password-invisible-icon"], () => [f(Ct, {
      clsPrefix: l
    }, {
      default: () => f(Ix, null)
    })])) : null]) : null)), this.pair ? f("span", {
      class: `${l}-input__separator`
    }, nn(m.separator, () => [this.separator])) : null, this.pair ? f("div", {
      class: `${l}-input-wrapper`
    }, f("div", {
      class: `${l}-input__input`
    }, f("input", {
      ref: "inputEl2Ref",
      type: this.type,
      class: `${l}-input__input-el`,
      tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
      placeholder: this.mergedPlaceholder[1],
      disabled: this.mergedDisabled,
      maxlength: v ? void 0 : this.maxlength,
      minlength: v ? void 0 : this.minlength,
      value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : void 0,
      readonly: this.readonly,
      style: this.textDecorationStyle[1],
      onBlur: this.handleInputBlur,
      onFocus: (h) => {
        this.handleInputFocus(h, 1);
      },
      onInput: (h) => {
        this.handleInput(h, 1);
      },
      onChange: (h) => {
        this.handleChange(h, 1);
      }
    }), this.showPlaceholder2 ? f("div", {
      class: `${l}-input__placeholder`
    }, f("span", null, this.mergedPlaceholder[1])) : null), _e(m.suffix, (h) => (this.clearable || h) && f("div", {
      class: `${l}-input__suffix`
    }, [this.clearable && f(Ea, {
      clsPrefix: l,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      icon: () => {
        var p;
        return (p = m["clear-icon"]) === null || p === void 0 ? void 0 : p.call(m);
      },
      placeholder: () => {
        var p;
        return (p = m["clear-icon-placeholder"]) === null || p === void 0 ? void 0 : p.call(m);
      }
    }), h]))) : null, this.mergedBordered ? f("div", {
      class: `${l}-input__border`
    }) : null, this.mergedBordered ? f("div", {
      class: `${l}-input__state-border`
    }) : null, this.showCount && c === "textarea" ? f(cd, null, {
      default: (h) => {
        var p;
        const {
          renderCount: x
        } = this;
        return x ? x(h) : (p = m.count) === null || p === void 0 ? void 0 : p.call(m, h);
      }
    }) : null);
  }
}), sy = z("input-group", `
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
 `, [T("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), D("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [T("state-border, border", `
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
 `), T("box-shadow, border, state-border", `
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
 `), T("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), dy = {}, uy = J({
  name: "InputGroup",
  props: dy,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e);
    return Yn("-input-group", sy, t), {
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
}), cy = z("input-group-label", `
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
 `)]), fy = Object.assign(Object.assign({}, ve.props), {
  size: String,
  bordered: {
    type: Boolean,
    default: void 0
  }
}), hy = J({
  name: "InputGroupLabel",
  props: fy,
  setup(e) {
    const {
      mergedBorderedRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = En(e), {
      mergedSizeRef: a
    } = i, s = ve("Input", "-input-group-label", cy, Al, e, r), l = E(() => {
      const {
        value: u
      } = a, {
        common: {
          cubicBezierEaseInOut: c
        },
        self: {
          groupLabelColor: v,
          borderRadius: g,
          groupLabelTextColor: m,
          lineHeight: h,
          groupLabelBorder: p,
          [Z("fontSize", u)]: x,
          [Z("height", u)]: b
        }
      } = s.value;
      return {
        "--n-bezier": c,
        "--n-group-label-color": v,
        "--n-group-label-border": p,
        "--n-border-radius": g,
        "--n-group-label-text-color": m,
        "--n-font-size": x,
        "--n-line-height": h,
        "--n-height": b
      };
    }), d = o ? Xe("input-group-label", E(() => {
      const {
        value: u
      } = a;
      return u[0];
    }), l, e) : void 0;
    return {
      mergedClsPrefix: r,
      mergedBordered: t,
      cssVars: o ? void 0 : l,
      themeClass: d == null ? void 0 : d.themeClass,
      onRender: d == null ? void 0 : d.onRender
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
function bi(e) {
  return e.type === "group";
}
function lc(e) {
  return e.type === "ignored";
}
function ca(e, t) {
  try {
    return !!(1 + t.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
function sc(e, t) {
  return {
    getIsGroup: bi,
    getIgnored: lc,
    getKey(o) {
      return bi(o) ? o.name || o.key || "key-required" : o[e];
    },
    getChildren(o) {
      return o[t];
    }
  };
}
function vy(e, t, r, o) {
  if (!t) return e;
  function i(a) {
    if (!Array.isArray(a)) return [];
    const s = [];
    for (const l of a)
      if (bi(l)) {
        const d = i(l[o]);
        d.length && s.push(Object.assign({}, l, {
          [o]: d
        }));
      } else {
        if (lc(l))
          continue;
        t(r, l) && s.push(l);
      }
    return s;
  }
  return i(e);
}
function gy(e, t, r) {
  const o = /* @__PURE__ */ new Map();
  return e.forEach((i) => {
    bi(i) ? i[r].forEach((a) => {
      o.set(a[t], a);
    }) : o.set(i[t], i);
  }), o;
}
function tr(e) {
  return Je(e, [255, 255, 255, 0.16]);
}
function Jo(e) {
  return Je(e, [0, 0, 0, 0.12]);
}
const py = "n-button-group", my = {
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
function by(e) {
  const {
    heightTiny: t,
    heightSmall: r,
    heightMedium: o,
    heightLarge: i,
    borderRadius: a,
    fontSizeTiny: s,
    fontSizeSmall: l,
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
    infoColorHover: B,
    infoColorPressed: C,
    successColor: P,
    successColorHover: k,
    successColorPressed: S,
    warningColor: w,
    warningColorHover: R,
    warningColorPressed: F,
    errorColor: N,
    errorColorHover: $,
    errorColorPressed: n,
    fontWeight: O,
    buttonColor2: M,
    buttonColor2Hover: W,
    buttonColor2Pressed: H,
    fontWeightStrong: U
  } = e;
  return Object.assign(Object.assign({}, my), {
    heightTiny: t,
    heightSmall: r,
    heightMedium: o,
    heightLarge: i,
    borderRadiusTiny: a,
    borderRadiusSmall: a,
    borderRadiusMedium: a,
    borderRadiusLarge: a,
    fontSizeTiny: s,
    fontSizeSmall: l,
    fontSizeMedium: d,
    fontSizeLarge: u,
    opacityDisabled: c,
    // secondary
    colorOpacitySecondary: "0.16",
    colorOpacitySecondaryHover: "0.22",
    colorOpacitySecondaryPressed: "0.28",
    colorSecondary: M,
    colorSecondaryHover: W,
    colorSecondaryPressed: H,
    // tertiary
    colorTertiary: M,
    colorTertiaryHover: W,
    colorTertiaryPressed: H,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: W,
    colorQuaternaryPressed: H,
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
    colorHoverInfo: B,
    colorPressedInfo: C,
    colorFocusInfo: B,
    colorDisabledInfo: y,
    textColorInfo: b,
    textColorHoverInfo: b,
    textColorPressedInfo: b,
    textColorFocusInfo: b,
    textColorDisabledInfo: b,
    textColorTextInfo: y,
    textColorTextHoverInfo: B,
    textColorTextPressedInfo: C,
    textColorTextFocusInfo: B,
    textColorTextDisabledInfo: v,
    textColorGhostInfo: y,
    textColorGhostHoverInfo: B,
    textColorGhostPressedInfo: C,
    textColorGhostFocusInfo: B,
    textColorGhostDisabledInfo: y,
    borderInfo: `1px solid ${y}`,
    borderHoverInfo: `1px solid ${B}`,
    borderPressedInfo: `1px solid ${C}`,
    borderFocusInfo: `1px solid ${B}`,
    borderDisabledInfo: `1px solid ${y}`,
    rippleColorInfo: y,
    // success
    colorSuccess: P,
    colorHoverSuccess: k,
    colorPressedSuccess: S,
    colorFocusSuccess: k,
    colorDisabledSuccess: P,
    textColorSuccess: b,
    textColorHoverSuccess: b,
    textColorPressedSuccess: b,
    textColorFocusSuccess: b,
    textColorDisabledSuccess: b,
    textColorTextSuccess: P,
    textColorTextHoverSuccess: k,
    textColorTextPressedSuccess: S,
    textColorTextFocusSuccess: k,
    textColorTextDisabledSuccess: v,
    textColorGhostSuccess: P,
    textColorGhostHoverSuccess: k,
    textColorGhostPressedSuccess: S,
    textColorGhostFocusSuccess: k,
    textColorGhostDisabledSuccess: P,
    borderSuccess: `1px solid ${P}`,
    borderHoverSuccess: `1px solid ${k}`,
    borderPressedSuccess: `1px solid ${S}`,
    borderFocusSuccess: `1px solid ${k}`,
    borderDisabledSuccess: `1px solid ${P}`,
    rippleColorSuccess: P,
    // warning
    colorWarning: w,
    colorHoverWarning: R,
    colorPressedWarning: F,
    colorFocusWarning: R,
    colorDisabledWarning: w,
    textColorWarning: b,
    textColorHoverWarning: b,
    textColorPressedWarning: b,
    textColorFocusWarning: b,
    textColorDisabledWarning: b,
    textColorTextWarning: w,
    textColorTextHoverWarning: R,
    textColorTextPressedWarning: F,
    textColorTextFocusWarning: R,
    textColorTextDisabledWarning: v,
    textColorGhostWarning: w,
    textColorGhostHoverWarning: R,
    textColorGhostPressedWarning: F,
    textColorGhostFocusWarning: R,
    textColorGhostDisabledWarning: w,
    borderWarning: `1px solid ${w}`,
    borderHoverWarning: `1px solid ${R}`,
    borderPressedWarning: `1px solid ${F}`,
    borderFocusWarning: `1px solid ${R}`,
    borderDisabledWarning: `1px solid ${w}`,
    rippleColorWarning: w,
    // error
    colorError: N,
    colorHoverError: $,
    colorPressedError: n,
    colorFocusError: $,
    colorDisabledError: N,
    textColorError: b,
    textColorHoverError: b,
    textColorPressedError: b,
    textColorFocusError: b,
    textColorDisabledError: b,
    textColorTextError: N,
    textColorTextHoverError: $,
    textColorTextPressedError: n,
    textColorTextFocusError: $,
    textColorTextDisabledError: v,
    textColorGhostError: N,
    textColorGhostHoverError: $,
    textColorGhostPressedError: n,
    textColorGhostFocusError: $,
    textColorGhostDisabledError: N,
    borderError: `1px solid ${N}`,
    borderHoverError: `1px solid ${$}`,
    borderPressedError: `1px solid ${n}`,
    borderFocusError: `1px solid ${$}`,
    borderDisabledError: `1px solid ${N}`,
    rippleColorError: N,
    waveOpacity: "0.6",
    fontWeight: O,
    fontWeightStrong: U
  });
}
const zi = {
  name: "Button",
  common: Ye,
  self: by
}, xy = D([z("button", `
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
 `, [I("color", [T("border", {
  borderColor: "var(--n-border-color)"
}), I("disabled", [T("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), Ue("disabled", [D("&:focus", [T("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), D("&:hover", [T("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), D("&:active", [T("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), I("pressed", [T("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), I("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [T("border", {
  border: "var(--n-border-disabled)"
})]), Ue("disabled", [D("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [T("state-border", {
  border: "var(--n-border-focus)"
})]), D("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [T("state-border", {
  border: "var(--n-border-hover)"
})]), D("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [T("state-border", {
  border: "var(--n-border-pressed)"
})]), I("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [T("state-border", {
  border: "var(--n-border-pressed)"
})])]), I("loading", "cursor: wait;"), z("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [I("active", {
  zIndex: 1,
  animationName: "button-wave-spread, button-wave-opacity"
})]), Xr && "MozBoxSizing" in document.createElement("div").style ? D("&::moz-focus-inner", {
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
 `, [en({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), X1()]), T("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [D("~", [T("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), I("block", `
 display: flex;
 width: 100%;
 `), I("dashed", [T("border, state-border", {
  borderStyle: "dashed !important"
})]), I("disabled", {
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
})]), yy = Object.assign(Object.assign({}, ve.props), {
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
    default: !ic
  }
}), hr = J({
  name: "Button",
  props: yy,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      const {
        dashed: C,
        ghost: P,
        text: k,
        secondary: S,
        tertiary: w,
        quaternary: R
      } = e;
      (C || P || k) && (S || w || R) && Qe("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const t = L(null), r = L(null), o = L(!1), i = Ge(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = pe(py, {}), {
      mergedSizeRef: s
    } = En({}, {
      defaultSize: "medium",
      mergedSize: (C) => {
        const {
          size: P
        } = e;
        if (P) return P;
        const {
          size: k
        } = a;
        if (k) return k;
        const {
          mergedSize: S
        } = C || {};
        return S ? S.value : "medium";
      }
    }), l = E(() => e.focusable && !e.disabled), d = (C) => {
      var P;
      l.value || C.preventDefault(), !e.nativeFocusBehavior && (C.preventDefault(), !e.disabled && l.value && ((P = t.value) === null || P === void 0 || P.focus({
        preventScroll: !0
      })));
    }, u = (C) => {
      var P;
      if (!e.disabled && !e.loading) {
        const {
          onClick: k
        } = e;
        k && ne(k, C), e.text || (P = r.value) === null || P === void 0 || P.play();
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
    } = Ae(e), x = ve("Button", "-button", xy, zi, e, h), b = kt("Button", p, h), y = E(() => {
      const C = x.value, {
        common: {
          cubicBezierEaseInOut: P,
          cubicBezierEaseOut: k
        },
        self: S
      } = C, {
        rippleDuration: w,
        opacityDisabled: R,
        fontWeight: F,
        fontWeightStrong: N
      } = S, $ = s.value, {
        dashed: n,
        type: O,
        ghost: M,
        text: W,
        color: H,
        round: U,
        circle: ee,
        textColor: Y,
        secondary: K,
        tertiary: j,
        quaternary: q,
        strong: X
      } = e, ae = {
        "--n-font-weight": X ? N : F
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
      const ce = O === "tertiary", be = O === "default", G = ce ? "default" : O;
      if (W) {
        const Ce = Y || H;
        le = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": Ce || S[Z("textColorText", G)],
          "--n-text-color-hover": Ce ? tr(Ce) : S[Z("textColorTextHover", G)],
          "--n-text-color-pressed": Ce ? Jo(Ce) : S[Z("textColorTextPressed", G)],
          "--n-text-color-focus": Ce ? tr(Ce) : S[Z("textColorTextHover", G)],
          "--n-text-color-disabled": Ce || S[Z("textColorTextDisabled", G)]
        };
      } else if (M || n) {
        const Ce = Y || H;
        le = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": H || S[Z("rippleColor", G)],
          "--n-text-color": Ce || S[Z("textColorGhost", G)],
          "--n-text-color-hover": Ce ? tr(Ce) : S[Z("textColorGhostHover", G)],
          "--n-text-color-pressed": Ce ? Jo(Ce) : S[Z("textColorGhostPressed", G)],
          "--n-text-color-focus": Ce ? tr(Ce) : S[Z("textColorGhostHover", G)],
          "--n-text-color-disabled": Ce || S[Z("textColorGhostDisabled", G)]
        };
      } else if (K) {
        const Ce = be ? S.textColor : ce ? S.textColorTertiary : S[Z("color", G)], Ee = H || Ce, Le = O !== "default" && O !== "tertiary";
        le = {
          "--n-color": Le ? De(Ee, {
            alpha: Number(S.colorOpacitySecondary)
          }) : S.colorSecondary,
          "--n-color-hover": Le ? De(Ee, {
            alpha: Number(S.colorOpacitySecondaryHover)
          }) : S.colorSecondaryHover,
          "--n-color-pressed": Le ? De(Ee, {
            alpha: Number(S.colorOpacitySecondaryPressed)
          }) : S.colorSecondaryPressed,
          "--n-color-focus": Le ? De(Ee, {
            alpha: Number(S.colorOpacitySecondaryHover)
          }) : S.colorSecondaryHover,
          "--n-color-disabled": S.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": Ee,
          "--n-text-color-hover": Ee,
          "--n-text-color-pressed": Ee,
          "--n-text-color-focus": Ee,
          "--n-text-color-disabled": Ee
        };
      } else if (j || q) {
        const Ce = be ? S.textColor : ce ? S.textColorTertiary : S[Z("color", G)], Ee = H || Ce;
        j ? (le["--n-color"] = S.colorTertiary, le["--n-color-hover"] = S.colorTertiaryHover, le["--n-color-pressed"] = S.colorTertiaryPressed, le["--n-color-focus"] = S.colorSecondaryHover, le["--n-color-disabled"] = S.colorTertiary) : (le["--n-color"] = S.colorQuaternary, le["--n-color-hover"] = S.colorQuaternaryHover, le["--n-color-pressed"] = S.colorQuaternaryPressed, le["--n-color-focus"] = S.colorQuaternaryHover, le["--n-color-disabled"] = S.colorQuaternary), le["--n-ripple-color"] = "#0000", le["--n-text-color"] = Ee, le["--n-text-color-hover"] = Ee, le["--n-text-color-pressed"] = Ee, le["--n-text-color-focus"] = Ee, le["--n-text-color-disabled"] = Ee;
      } else
        le = {
          "--n-color": H || S[Z("color", G)],
          "--n-color-hover": H ? tr(H) : S[Z("colorHover", G)],
          "--n-color-pressed": H ? Jo(H) : S[Z("colorPressed", G)],
          "--n-color-focus": H ? tr(H) : S[Z("colorFocus", G)],
          "--n-color-disabled": H || S[Z("colorDisabled", G)],
          "--n-ripple-color": H || S[Z("rippleColor", G)],
          "--n-text-color": Y || (H ? S.textColorPrimary : ce ? S.textColorTertiary : S[Z("textColor", G)]),
          "--n-text-color-hover": Y || (H ? S.textColorHoverPrimary : S[Z("textColorHover", G)]),
          "--n-text-color-pressed": Y || (H ? S.textColorPressedPrimary : S[Z("textColorPressed", G)]),
          "--n-text-color-focus": Y || (H ? S.textColorFocusPrimary : S[Z("textColorFocus", G)]),
          "--n-text-color-disabled": Y || (H ? S.textColorDisabledPrimary : S[Z("textColorDisabled", G)])
        };
      let ue = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      W ? ue = {
        "--n-border": "none",
        "--n-border-hover": "none",
        "--n-border-pressed": "none",
        "--n-border-focus": "none",
        "--n-border-disabled": "none"
      } : ue = {
        "--n-border": S[Z("border", G)],
        "--n-border-hover": S[Z("borderHover", G)],
        "--n-border-pressed": S[Z("borderPressed", G)],
        "--n-border-focus": S[Z("borderFocus", G)],
        "--n-border-disabled": S[Z("borderDisabled", G)]
      };
      const {
        [Z("height", $)]: Pe,
        [Z("fontSize", $)]: xe,
        [Z("padding", $)]: Fe,
        [Z("paddingRound", $)]: $e,
        [Z("iconSize", $)]: ut,
        [Z("borderRadius", $)]: ot,
        [Z("iconMargin", $)]: vt,
        waveOpacity: gt
      } = S, ye = {
        "--n-width": ee && !W ? Pe : "initial",
        "--n-height": W ? "initial" : Pe,
        "--n-font-size": xe,
        "--n-padding": ee || W ? "initial" : U ? $e : Fe,
        "--n-icon-size": ut,
        "--n-icon-margin": vt,
        "--n-border-radius": W ? "initial" : ee || U ? Pe : ot
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": P,
        "--n-bezier-ease-out": k,
        "--n-ripple-duration": w,
        "--n-opacity-disabled": R,
        "--n-wave-opacity": gt
      }, ae), le), ue), ye);
    }), B = m ? Xe("button", E(() => {
      let C = "";
      const {
        dashed: P,
        type: k,
        ghost: S,
        text: w,
        color: R,
        round: F,
        circle: N,
        textColor: $,
        secondary: n,
        tertiary: O,
        quaternary: M,
        strong: W
      } = e;
      P && (C += "a"), S && (C += "b"), w && (C += "c"), F && (C += "d"), N && (C += "e"), n && (C += "f"), O && (C += "g"), M && (C += "h"), W && (C += "i"), R && (C += `j${di(R)}`), $ && (C += `k${di($)}`);
      const {
        value: H
      } = s;
      return C += `l${H[0]}`, C += `m${k[0]}`, C;
    }), y, e) : void 0;
    return {
      selfElRef: t,
      waveElRef: r,
      mergedClsPrefix: h,
      mergedFocusable: l,
      mergedSize: s,
      showBorder: i,
      enterPressed: o,
      rtlEnabled: b,
      handleMousedown: d,
      handleKeydown: v,
      handleBlur: g,
      handleKeyup: c,
      handleClick: u,
      customColorCssVars: E(() => {
        const {
          color: C
        } = e;
        if (!C) return null;
        const P = tr(C);
        return {
          "--n-border-color": C,
          "--n-border-color-hover": P,
          "--n-border-color-pressed": Jo(C),
          "--n-border-color-focus": P,
          "--n-border-color-disabled": C
        };
      }),
      cssVars: m ? void 0 : y,
      themeClass: B == null ? void 0 : B.themeClass,
      onRender: B == null ? void 0 : B.onRender
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
    }, this.iconPlacement === "right" && o, f(Pl, {
      width: !0
    }, {
      default: () => _e(this.$slots.icon, (i) => (this.loading || this.renderIcon || i) && f("span", {
        class: `${e}-button__icon`,
        style: {
          margin: Ir(this.$slots.default) ? "0" : ""
        }
      }, f(Br, null, {
        default: () => this.loading ? f(Zn, {
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
    }), this.iconPlacement === "left" && o, this.text ? null : f(Z1, {
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
}), Cy = {
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
function wy(e) {
  const {
    primaryColor: t,
    borderRadius: r,
    lineHeight: o,
    fontSize: i,
    cardColor: a,
    textColor2: s,
    textColor1: l,
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
  return Object.assign(Object.assign({}, Cy), {
    lineHeight: o,
    color: a,
    colorModal: p,
    colorPopover: b,
    colorTarget: t,
    colorEmbedded: y,
    colorEmbeddedModal: y,
    colorEmbeddedPopover: y,
    textColor: s,
    titleTextColor: l,
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
const dc = {
  name: "Card",
  common: Ye,
  self: wy
}, Sy = D([z("card", `
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
 `, [Vd({
  background: "var(--n-color-modal)"
}), I("hoverable", [D("&:hover", "box-shadow: var(--n-box-shadow);")]), I("content-segmented", [D(">", [T("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), I("content-soft-segmented", [D(">", [T("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), I("footer-segmented", [D(">", [T("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), I("footer-soft-segmented", [D(">", [T("footer", `
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
 `, [D("&:first-child", {
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
 `, [D("img", `
 display: block;
 width: 100%;
 `)]), I("bordered", `
 border: 1px solid var(--n-border-color);
 `, [D("&:target", "border-color: var(--n-color-target);")]), I("action-segmented", [D(">", [T("action", [D("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), I("content-segmented, content-soft-segmented", [D(">", [T("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [D("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), I("footer-segmented, footer-soft-segmented", [D(">", [T("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [D("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), I("embedded", `
 background-color: var(--n-color-embedded);
 `)]), Si(z("card", `
 background: var(--n-color-modal);
 `, [I("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), Xa(z("card", `
 background: var(--n-color-popover);
 `, [I("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), El = {
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
  headerExtra: Function,
  closeFocusable: Boolean
}, By = Kn(El), ky = Object.assign(Object.assign({}, ve.props), El), Ry = J({
  name: "Card",
  props: ky,
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
    } = Ae(e), a = ve("Card", "-card", Sy, dc, e, o), s = kt("Card", i, o), l = E(() => {
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
          lineHeight: B,
          closeIconColor: C,
          closeIconColorHover: P,
          closeIconColorPressed: k,
          closeColorHover: S,
          closeColorPressed: w,
          closeBorderRadius: R,
          closeIconSize: F,
          closeSize: N,
          boxShadow: $,
          colorPopover: n,
          colorEmbedded: O,
          colorEmbeddedModal: M,
          colorEmbeddedPopover: W,
          [Z("padding", u)]: H,
          [Z("fontSize", u)]: U,
          [Z("titleFontSize", u)]: ee
        },
        common: {
          cubicBezierEaseInOut: Y
        }
      } = a.value, {
        top: K,
        left: j,
        bottom: q
      } = Vt(H);
      return {
        "--n-bezier": Y,
        "--n-border-radius": y,
        "--n-color": c,
        "--n-color-modal": v,
        "--n-color-popover": n,
        "--n-color-embedded": O,
        "--n-color-embedded-modal": M,
        "--n-color-embedded-popover": W,
        "--n-color-target": g,
        "--n-text-color": m,
        "--n-line-height": B,
        "--n-action-color": b,
        "--n-title-text-color": h,
        "--n-title-font-weight": p,
        "--n-close-icon-color": C,
        "--n-close-icon-color-hover": P,
        "--n-close-icon-color-pressed": k,
        "--n-close-color-hover": S,
        "--n-close-color-pressed": w,
        "--n-border-color": x,
        "--n-box-shadow": $,
        // size
        "--n-padding-top": K,
        "--n-padding-bottom": q,
        "--n-padding-left": j,
        "--n-font-size": U,
        "--n-title-font-size": ee,
        "--n-close-size": N,
        "--n-close-icon-size": F,
        "--n-close-border-radius": R
      };
    }), d = r ? Xe("card", E(() => e.size[0]), l, e) : void 0;
    return {
      rtlEnabled: s,
      mergedClsPrefix: o,
      mergedTheme: a,
      handleCloseClick: t,
      cssVars: r ? void 0 : l,
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
      embedded: s,
      tag: l,
      $slots: d
    } = this;
    return a == null || a(), f(l, {
      class: [`${o}-card`, this.themeClass, s && `${o}-card--embedded`, {
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
      const c = this.cover ? ln([this.cover()]) : u;
      return c && f("div", {
        class: `${o}-card-cover`,
        role: "none"
      }, c);
    }), _e(d.header, (u) => {
      const {
        title: c
      } = this, v = c ? ln(typeof c == "function" ? [c()] : [c]) : u;
      return v || this.closable ? f("div", {
        class: [`${o}-card-header`, this.headerClass],
        style: this.headerStyle,
        role: "heading"
      }, f("div", {
        class: `${o}-card-header__main`,
        role: "heading"
      }, v), _e(d["header-extra"], (g) => {
        const m = this.headerExtra ? ln([this.headerExtra()]) : g;
        return m && f("div", {
          class: [`${o}-card-header__extra`, this.headerExtraClass],
          style: this.headerExtraStyle
        }, m);
      }), this.closable && f(Jr, {
        clsPrefix: o,
        class: `${o}-card-header__close`,
        onClick: this.handleCloseClick,
        focusable: this.closeFocusable,
        absolute: !0
      })) : null;
    }), _e(d.default, (u) => {
      const {
        content: c
      } = this, v = c ? ln(typeof c == "function" ? [c()] : [c]) : u;
      return v && f("div", {
        class: [`${o}-card__content`, this.contentClass],
        style: this.contentStyle,
        role: "none"
      }, v);
    }), _e(d.footer, (u) => {
      const c = this.footer ? ln([this.footer()]) : u;
      return c && f("div", {
        class: [`${o}-card__footer`, this.footerClass],
        style: this.footerStyle,
        role: "none"
      }, c);
    }), _e(d.action, (u) => {
      const c = this.action ? ln([this.action()]) : u;
      return c && f("div", {
        class: `${o}-card__action`,
        role: "none"
      }, c);
    }));
  }
}), Py = {
  sizeSmall: "14px",
  sizeMedium: "16px",
  sizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function Fy(e) {
  const {
    baseColor: t,
    inputColorDisabled: r,
    cardColor: o,
    modalColor: i,
    popoverColor: a,
    textColorDisabled: s,
    borderColor: l,
    primaryColor: d,
    textColor2: u,
    fontSizeSmall: c,
    fontSizeMedium: v,
    fontSizeLarge: g,
    borderRadiusSmall: m,
    lineHeight: h
  } = e;
  return Object.assign(Object.assign({}, Py), {
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
    checkMarkColorDisabled: s,
    checkMarkColorDisabledChecked: s,
    border: `1px solid ${l}`,
    borderDisabled: `1px solid ${l}`,
    borderDisabledChecked: `1px solid ${l}`,
    borderChecked: `1px solid ${d}`,
    borderFocus: `1px solid ${d}`,
    boxShadowFocus: `0 0 0 2px ${De(d, {
      alpha: 0.3
    })}`,
    textColor: u,
    textColorDisabled: s
  });
}
const uc = {
  name: "Checkbox",
  common: Ye,
  self: Fy
}, cc = "n-checkbox-group", $y = {
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
}, fc = J({
  name: "CheckboxGroup",
  props: $y,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.onChange !== void 0 && Qe("checkbox-group", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = En(e), {
      mergedSizeRef: o,
      mergedDisabledRef: i
    } = r, a = L(e.defaultValue), s = E(() => e.value), l = Et(s, a), d = E(() => {
      var v;
      return ((v = l.value) === null || v === void 0 ? void 0 : v.length) || 0;
    }), u = E(() => Array.isArray(l.value) ? new Set(l.value) : /* @__PURE__ */ new Set());
    function c(v, g) {
      const {
        nTriggerFormInput: m,
        nTriggerFormChange: h
      } = r, {
        onChange: p,
        "onUpdate:value": x,
        onUpdateValue: b
      } = e;
      if (Array.isArray(l.value)) {
        const y = Array.from(l.value), B = y.findIndex((C) => C === g);
        v ? ~B || (y.push(g), b && ne(b, y, {
          actionType: "check",
          value: g
        }), x && ne(x, y, {
          actionType: "check",
          value: g
        }), m(), h(), a.value = y, p && ne(p, y)) : ~B && (y.splice(B, 1), b && ne(b, y, {
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
    return ze(cc, {
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
}), zy = () => f("svg", {
  viewBox: "0 0 64 64",
  class: "check-icon"
}, f("path", {
  d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"
})), Ay = () => f("svg", {
  viewBox: "0 0 100 100",
  class: "line-icon"
}, f("path", {
  d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"
})), Ey = D([
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
 `, [I("show-label", "line-height: var(--n-label-line-height);"), D("&:hover", [z("checkbox-box", [T("border", "border: var(--n-border-checked);")])]), D("&:focus:not(:active)", [z("checkbox-box", [T("border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), I("inside-table", [z("checkbox-box", `
 background-color: var(--n-merged-color-table);
 `)]), I("checked", [z("checkbox-box", `
 background-color: var(--n-color-checked);
 `, [z("checkbox-icon", [
    // if not set width to 100%, safari & old chrome won't display the icon
    D(".check-icon", `
 opacity: 1;
 transform: scale(1);
 `)
  ])])]), I("indeterminate", [z("checkbox-box", [z("checkbox-icon", [D(".check-icon", `
 opacity: 0;
 transform: scale(.5);
 `), D(".line-icon", `
 opacity: 1;
 transform: scale(1);
 `)])])]), I("checked, indeterminate", [D("&:focus:not(:active)", [z("checkbox-box", [T("border", `
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), z("checkbox-box", `
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `, [T("border", {
    border: "var(--n-border-checked)"
  })])]), I("disabled", {
    cursor: "not-allowed"
  }, [I("checked", [z("checkbox-box", `
 background-color: var(--n-color-disabled-checked);
 `, [T("border", {
    border: "var(--n-border-disabled-checked)"
  }), z("checkbox-icon", [D(".check-icon, .line-icon", {
    fill: "var(--n-check-mark-color-disabled-checked)"
  })])])]), z("checkbox-box", `
 background-color: var(--n-color-disabled);
 `, [T("border", `
 border: var(--n-border-disabled);
 `), z("checkbox-icon", [D(".check-icon, .line-icon", `
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
 `), en({
    left: "1px",
    top: "1px"
  })])]), T("label", `
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
  Si(z("checkbox", `
 --n-merged-color-table: var(--n-color-table-modal);
 `)),
  // popover table header checkbox
  Xa(z("checkbox", `
 --n-merged-color-table: var(--n-color-table-popover);
 `))
]), Dy = Object.assign(Object.assign({}, ve.props), {
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
}), Ai = J({
  name: "Checkbox",
  props: Dy,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.onChange && Qe("checkbox", "`on-change` is deprecated, please use `on-update:checked` instead.");
    });
    const t = pe(cc, null), r = L(null), {
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), s = L(e.defaultChecked), l = ie(e, "checked"), d = Et(l, s), u = Ge(() => {
      if (t) {
        const k = t.valueSetRef.value;
        return k && e.value !== void 0 ? k.has(e.value) : !1;
      } else
        return d.value === e.checkedValue;
    }), c = En(e, {
      mergedSize(k) {
        const {
          size: S
        } = e;
        if (S !== void 0) return S;
        if (t) {
          const {
            value: w
          } = t.mergedSizeRef;
          if (w !== void 0)
            return w;
        }
        if (k) {
          const {
            mergedSize: w
          } = k;
          if (w !== void 0) return w.value;
        }
        return "medium";
      },
      mergedDisabled(k) {
        const {
          disabled: S
        } = e;
        if (S !== void 0) return S;
        if (t) {
          if (t.disabledRef.value) return !0;
          const {
            maxRef: {
              value: w
            },
            checkedCountRef: R
          } = t;
          if (w !== void 0 && R.value >= w && !u.value)
            return !0;
          const {
            minRef: {
              value: F
            }
          } = t;
          if (F !== void 0 && R.value <= F && u.value)
            return !0;
        }
        return k ? k.disabled.value : !1;
      }
    }), {
      mergedDisabledRef: v,
      mergedSizeRef: g
    } = c, m = ve("Checkbox", "-checkbox", Ey, uc, e, o);
    function h(k) {
      if (t && e.value !== void 0)
        t.toggleCheckbox(!u.value, e.value);
      else {
        const {
          onChange: S,
          "onUpdate:checked": w,
          onUpdateChecked: R
        } = e, {
          nTriggerFormInput: F,
          nTriggerFormChange: N
        } = c, $ = u.value ? e.uncheckedValue : e.checkedValue;
        w && ne(w, $, k), R && ne(R, $, k), S && ne(S, $, k), F(), N(), s.value = $;
      }
    }
    function p(k) {
      v.value || h(k);
    }
    function x(k) {
      if (!v.value)
        switch (k.key) {
          case " ":
          case "Enter":
            h(k);
        }
    }
    function b(k) {
      switch (k.key) {
        case " ":
          k.preventDefault();
      }
    }
    const y = {
      focus: () => {
        var k;
        (k = r.value) === null || k === void 0 || k.focus();
      },
      blur: () => {
        var k;
        (k = r.value) === null || k === void 0 || k.blur();
      }
    }, B = kt("Checkbox", a, o), C = E(() => {
      const {
        value: k
      } = g, {
        common: {
          cubicBezierEaseInOut: S
        },
        self: {
          borderRadius: w,
          color: R,
          colorChecked: F,
          colorDisabled: N,
          colorTableHeader: $,
          colorTableHeaderModal: n,
          colorTableHeaderPopover: O,
          checkMarkColor: M,
          checkMarkColorDisabled: W,
          border: H,
          borderFocus: U,
          borderDisabled: ee,
          borderChecked: Y,
          boxShadowFocus: K,
          textColor: j,
          textColorDisabled: q,
          checkMarkColorDisabledChecked: X,
          colorDisabledChecked: ae,
          borderDisabledChecked: le,
          labelPadding: ce,
          labelLineHeight: be,
          labelFontWeight: G,
          [Z("fontSize", k)]: ue,
          [Z("size", k)]: Pe
        }
      } = m.value;
      return {
        "--n-label-line-height": be,
        "--n-label-font-weight": G,
        "--n-size": Pe,
        "--n-bezier": S,
        "--n-border-radius": w,
        "--n-border": H,
        "--n-border-checked": Y,
        "--n-border-focus": U,
        "--n-border-disabled": ee,
        "--n-border-disabled-checked": le,
        "--n-box-shadow-focus": K,
        "--n-color": R,
        "--n-color-checked": F,
        "--n-color-table": $,
        "--n-color-table-modal": n,
        "--n-color-table-popover": O,
        "--n-color-disabled": N,
        "--n-color-disabled-checked": ae,
        "--n-text-color": j,
        "--n-text-color-disabled": q,
        "--n-check-mark-color": M,
        "--n-check-mark-color-disabled": W,
        "--n-check-mark-color-disabled-checked": X,
        "--n-font-size": ue,
        "--n-label-padding": ce
      };
    }), P = i ? Xe("checkbox", E(() => g.value[0]), C, e) : void 0;
    return Object.assign(c, y, {
      rtlEnabled: B,
      selfRef: r,
      mergedClsPrefix: o,
      mergedDisabled: v,
      renderedChecked: u,
      mergedTheme: m,
      labelId: wn(),
      handleClick: p,
      handleKeyUp: x,
      handleKeyDown: b,
      cssVars: i ? void 0 : C,
      themeClass: P == null ? void 0 : P.themeClass,
      onRender: P == null ? void 0 : P.onRender
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
      cssVars: s,
      labelId: l,
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
      id: l
    }, d || p) : null);
    return f("div", {
      ref: "selfRef",
      class: [`${u}-checkbox`, this.themeClass, this.rtlEnabled && `${u}-checkbox--rtl`, r && `${u}-checkbox--checked`, o && `${u}-checkbox--disabled`, i && `${u}-checkbox--indeterminate`, a && `${u}-checkbox--inside-table`, h && `${u}-checkbox--show-label`],
      tabindex: o || !c ? void 0 : 0,
      role: "checkbox",
      "aria-checked": i ? "mixed" : r,
      "aria-labelledby": l,
      style: s,
      onKeyup: v,
      onKeydown: g,
      onClick: m,
      onMousedown: () => {
        qe("selectstart", window, (p) => {
          p.preventDefault();
        }, {
          once: !0
        });
      }
    }, f("div", {
      class: `${u}-checkbox-box-wrapper`
    }, " ", f("div", {
      class: `${u}-checkbox-box`
    }, f(Br, null, {
      default: () => this.indeterminate ? f("div", {
        key: "indeterminate",
        class: `${u}-checkbox-icon`
      }, Ay()) : f("div", {
        key: "check",
        class: `${u}-checkbox-icon`
      }, zy())
    }), f("div", {
      class: `${u}-checkbox-box__border`
    }))), h);
  }
});
function Ty(e) {
  const {
    fontWeight: t,
    textColor1: r,
    textColor2: o,
    textColorDisabled: i,
    dividerColor: a,
    fontSize: s
  } = e;
  return {
    titleFontSize: s,
    titleFontWeight: t,
    dividerColor: a,
    titleTextColor: r,
    titleTextColorDisabled: i,
    fontSize: s,
    textColor: o,
    arrowColor: o,
    arrowColorDisabled: i,
    itemMargin: "16px 0 0 0",
    titlePadding: "16px 0 0 0"
  };
}
const Oy = {
  name: "Collapse",
  common: Ye,
  self: Ty
}, My = z("collapse", "width: 100%;", [z("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [I("disabled", [T("header", "cursor: not-allowed;", [T("header-main", `
 color: var(--n-title-text-color-disabled);
 `), z("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), z("collapse-item", "margin-left: 32px;"), D("&:first-child", "margin-top: 0;"), D("&:first-child >", [T("header", "padding-top: 0;")]), I("left-arrow-placement", [T("header", [z("collapse-item-arrow", "margin-right: 4px;")])]), I("right-arrow-placement", [T("header", [z("collapse-item-arrow", "margin-left: 4px;")])]), T("content-wrapper", [T("content-inner", "padding-top: 16px;"), oc({
  duration: "0.15s"
})]), I("active", [T("header", [I("active", [z("collapse-item-arrow", "transform: rotate(90deg);")])])]), D("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), Ue("disabled", [I("trigger-area-main", [T("header", [T("header-main", "cursor: pointer;"), z("collapse-item-arrow", "cursor: default;")])]), I("trigger-area-arrow", [T("header", [z("collapse-item-arrow", "cursor: pointer;")])]), I("trigger-area-extra", [T("header", [T("header-extra", "cursor: pointer;")])])]), T("header", `
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
 `)])])]), Iy = Object.assign(Object.assign({}, ve.props), {
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
}), hc = "n-collapse", Ly = J({
  name: "Collapse",
  props: Iy,
  slots: Object,
  setup(e, {
    slots: t
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = L(e.defaultExpandedNames), s = E(() => e.expandedNames), l = Et(s, a), d = ve("Collapse", "-collapse", My, Oy, e, r);
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
        value: B
      } = l;
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
      else if (!Array.isArray(B))
        u([x]), c({
          name: x,
          expanded: !0,
          event: b
        });
      else {
        const C = B.slice(), P = C.findIndex((k) => x === k);
        ~P ? (C.splice(P, 1), u(C), c({
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
    ze(hc, {
      props: e,
      mergedClsPrefixRef: r,
      expandedNamesRef: l,
      slots: t,
      toggleItem: v
    });
    const g = kt("Collapse", i, r), m = E(() => {
      const {
        common: {
          cubicBezierEaseInOut: p
        },
        self: {
          titleFontWeight: x,
          dividerColor: b,
          titlePadding: y,
          titleTextColor: B,
          titleTextColorDisabled: C,
          textColor: P,
          arrowColor: k,
          fontSize: S,
          titleFontSize: w,
          arrowColorDisabled: R,
          itemMargin: F
        }
      } = d.value;
      return {
        "--n-font-size": S,
        "--n-bezier": p,
        "--n-text-color": P,
        "--n-divider-color": b,
        "--n-title-padding": y,
        "--n-title-font-size": w,
        "--n-title-text-color": B,
        "--n-title-text-color-disabled": C,
        "--n-title-font-weight": x,
        "--n-arrow-color": k,
        "--n-arrow-color-disabled": R,
        "--n-item-margin": F
      };
    }), h = o ? Xe("collapse", void 0, m, e) : void 0;
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
}), Ny = J({
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
      onceTrue: qd(ie(e, "show"))
    };
  },
  render() {
    return f(Pl, null, {
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
        return i ? rn(a, [[Un, e]]) : e ? a : null;
      }
    });
  }
}), Hy = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
}, jy = J({
  name: "CollapseItem",
  props: Hy,
  setup(e) {
    const {
      mergedRtlRef: t
    } = Ae(e), r = wn(), o = Ge(() => {
      var v;
      return (v = e.name) !== null && v !== void 0 ? v : r;
    }), i = pe(hc);
    i || An("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
    const {
      expandedNamesRef: a,
      props: s,
      mergedClsPrefixRef: l,
      slots: d
    } = i, u = E(() => {
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
      rtlEnabled: kt("Collapse", t, l),
      collapseSlots: d,
      randomName: r,
      mergedClsPrefix: l,
      collapsed: u,
      triggerAreas: ie(s, "triggerAreas"),
      mergedDisplayDirective: E(() => {
        const {
          displayDirective: v
        } = e;
        return v || s.displayDirective;
      }),
      arrowPlacement: E(() => s.arrowPlacement),
      handleClick(v) {
        let g = "main";
        Jt(v, "arrow") && (g = "arrow"), Jt(v, "extra") && (g = "extra"), s.triggerAreas.includes(g) && i && !e.disabled && i.toggleItem(u.value, o.value, v);
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
      disabled: s,
      triggerAreas: l
    } = this, d = Ca(t.header, {
      collapsed: o
    }, () => [this.title]), u = t["header-extra"] || e["header-extra"], c = t.arrow || e.arrow;
    return f("div", {
      class: [`${a}-collapse-item`, `${a}-collapse-item--${r}-arrow-placement`, s && `${a}-collapse-item--disabled`, !o && `${a}-collapse-item--active`, l.map((v) => `${a}-collapse-item--trigger-area-${v}`)]
    }, f("div", {
      class: [`${a}-collapse-item__header`, !o && `${a}-collapse-item__header--active`]
    }, f("div", {
      class: `${a}-collapse-item__header-main`,
      onClick: this.handleClick
    }, r === "right" && d, f("div", {
      class: `${a}-collapse-item-arrow`,
      key: this.rtlEnabled ? 0 : 1,
      "data-arrow": !0
    }, Ca(c, {
      collapsed: o
    }, () => [f(Ct, {
      clsPrefix: a
    }, {
      default: () => this.rtlEnabled ? f(Ex, null) : f(Bl, null)
    })])), r === "left" && d), W0(u, {
      collapsed: o
    }, (v) => f("div", {
      class: `${a}-collapse-item__header-extra`,
      onClick: this.handleClick,
      "data-extra": !0
    }, v))), f(Ny, {
      clsPrefix: a,
      displayDirective: i,
      show: !o
    }, t));
  }
}), Wy = {
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
}, vc = J({
  name: "ConfigProvider",
  alias: ["App"],
  props: Wy,
  setup(e) {
    const t = pe(hn, null), r = E(() => {
      const {
        theme: p
      } = e;
      if (p === null) return;
      const x = t == null ? void 0 : t.mergedThemeRef.value;
      return p === void 0 ? x : x === void 0 ? p : Object.assign({}, x, p);
    }), o = E(() => {
      const {
        themeOverrides: p
      } = e;
      if (p !== null) {
        if (p === void 0)
          return t == null ? void 0 : t.mergedThemeOverridesRef.value;
        {
          const x = t == null ? void 0 : t.mergedThemeOverridesRef.value;
          return x === void 0 ? p : uo({}, x, p);
        }
      }
    }), i = Ge(() => {
      const {
        namespace: p
      } = e;
      return p === void 0 ? t == null ? void 0 : t.mergedNamespaceRef.value : p;
    }), a = Ge(() => {
      const {
        bordered: p
      } = e;
      return p === void 0 ? t == null ? void 0 : t.mergedBorderedRef.value : p;
    }), s = E(() => {
      const {
        icons: p
      } = e;
      return p === void 0 ? t == null ? void 0 : t.mergedIconsRef.value : p;
    }), l = E(() => {
      const {
        componentOptions: p
      } = e;
      return p !== void 0 ? p : t == null ? void 0 : t.mergedComponentPropsRef.value;
    }), d = E(() => {
      const {
        clsPrefix: p
      } = e;
      return p !== void 0 ? p : t ? t.mergedClsPrefixRef.value : ui;
    }), u = E(() => {
      var p;
      const {
        rtl: x
      } = e;
      if (x === void 0)
        return t == null ? void 0 : t.mergedRtlRef.value;
      const b = {};
      for (const y of x)
        b[y.name] = Hl(y), (p = y.peers) === null || p === void 0 || p.forEach((B) => {
          B.name in b || (b[B.name] = Hl(B));
        });
      return b;
    }), c = E(() => e.breakpoints || (t == null ? void 0 : t.mergedBreakpointsRef.value)), v = e.inlineThemeDisabled || (t == null ? void 0 : t.inlineThemeDisabled), g = e.preflightStyleDisabled || (t == null ? void 0 : t.preflightStyleDisabled), m = e.styleMountTarget || (t == null ? void 0 : t.styleMountTarget), h = E(() => {
      const {
        value: p
      } = r, {
        value: x
      } = o, b = x && Object.keys(x).length !== 0, y = p == null ? void 0 : p.name;
      return y ? b ? `${y}-${Co(JSON.stringify(o.value))}` : y : b ? Co(JSON.stringify(o.value)) : "";
    });
    return ze(hn, {
      mergedThemeHashRef: h,
      mergedBreakpointsRef: c,
      mergedRtlRef: u,
      mergedIconsRef: s,
      mergedComponentPropsRef: l,
      mergedBorderedRef: a,
      mergedNamespaceRef: i,
      mergedClsPrefixRef: d,
      mergedLocaleRef: E(() => {
        const {
          locale: p
        } = e;
        if (p !== null)
          return p === void 0 ? t == null ? void 0 : t.mergedLocaleRef.value : p;
      }),
      mergedDateLocaleRef: E(() => {
        const {
          dateLocale: p
        } = e;
        if (p !== null)
          return p === void 0 ? t == null ? void 0 : t.mergedDateLocaleRef.value : p;
      }),
      mergedHljsRef: E(() => {
        const {
          hljs: p
        } = e;
        return p === void 0 ? t == null ? void 0 : t.mergedHljsRef.value : p;
      }),
      mergedKatexRef: E(() => {
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
      class: `${this.mergedClsPrefix || ui}-config-provider`
    }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
  }
});
function _y(e) {
  const {
    boxShadow2: t
  } = e;
  return {
    menuBoxShadow: t
  };
}
const Dl = {
  name: "Popselect",
  common: Ye,
  peers: {
    Popover: kr,
    InternalSelectMenu: zl
  },
  self: _y
}, gc = "n-popselect", Vy = z("popselect-menu", `
 box-shadow: var(--n-menu-box-shadow);
`), Tl = {
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
}, fd = Kn(Tl), Uy = J({
  name: "PopselectPanel",
  props: Tl,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.onChange !== void 0 && Dt("popselect", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const t = pe(gc), {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("Popselect", "-pop-select", Vy, Dl, t.props, r), a = E(() => $i(e.options, sc("value", "children")));
    function s(g, m) {
      const {
        onUpdateValue: h,
        "onUpdate:value": p,
        onChange: x
      } = e;
      h && ne(h, g, m), p && ne(p, g, m), x && ne(x, g, m);
    }
    function l(g) {
      u(g.key);
    }
    function d(g) {
      !Jt(g, "action") && !Jt(g, "empty") && !Jt(g, "header") && g.preventDefault();
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
          }), x && (h.push(g), p.push(m(g).rawNode)), s(h, p);
        } else {
          const h = m(g);
          h && s([g], [h.rawNode]);
        }
      else if (e.value === g && e.cancelable)
        s(null, null);
      else {
        const h = m(g);
        h && s(g, h.rawNode);
        const {
          "onUpdate:show": p,
          onUpdateShow: x
        } = t.props;
        p && ne(p, !1), x && ne(x, !1), t.setShow(!1);
      }
      ht(() => {
        t.syncPosition();
      });
    }
    Me(ie(e, "options"), () => {
      ht(() => {
        t.syncPosition();
      });
    });
    const c = E(() => {
      const {
        self: {
          menuBoxShadow: g
        }
      } = i.value;
      return {
        "--n-menu-box-shadow": g
      };
    }), v = o ? Xe("select", void 0, c, t.props) : void 0;
    return {
      mergedTheme: t.mergedThemeRef,
      mergedClsPrefix: r,
      treeMate: a,
      handleToggle: l,
      handleMenuMousedown: d,
      cssVars: o ? void 0 : c,
      themeClass: v == null ? void 0 : v.themeClass,
      onRender: v == null ? void 0 : v.onRender
    };
  },
  render() {
    var e;
    return (e = this.onRender) === null || e === void 0 || e.call(this), f(Qu, {
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
}), Ky = Object.assign(Object.assign(Object.assign(Object.assign({}, ve.props), yr(fr, ["showArrow", "arrow"])), {
  placement: Object.assign(Object.assign({}, fr.placement), {
    default: "bottom"
  }),
  trigger: {
    type: String,
    default: "hover"
  }
}), Tl), qy = J({
  name: "Popselect",
  props: Ky,
  slots: Object,
  inheritAttrs: !1,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = ve("Popselect", "-popselect", void 0, Dl, e, t), o = L(null);
    function i() {
      var l;
      (l = o.value) === null || l === void 0 || l.syncPosition();
    }
    function a(l) {
      var d;
      (d = o.value) === null || d === void 0 || d.setShow(l);
    }
    return ze(gc, {
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
      internalRenderBody: (r, o, i, a, s) => {
        const {
          $attrs: l
        } = this;
        return f(Uy, Object.assign({}, l, {
          class: [l.class, r],
          style: [l.style, ...i]
        }, zn(this.$props, fd), {
          ref: pu(o),
          onMouseenter: bo([a, l.onMouseenter]),
          onMouseleave: bo([s, l.onMouseleave])
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
    return f(Rr, Object.assign({}, yr(this.$props, fd), t, {
      internalDeactivateImmediately: !0
    }), {
      trigger: () => {
        var r, o;
        return (o = (r = this.$slots).default) === null || o === void 0 ? void 0 : o.call(r);
      }
    });
  }
});
function Gy(e) {
  const {
    boxShadow2: t
  } = e;
  return {
    menuBoxShadow: t
  };
}
const pc = {
  name: "Select",
  common: Ye,
  peers: {
    InternalSelection: rc,
    InternalSelectMenu: zl
  },
  self: Gy
}, Xy = D([z("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), z("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [Io({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]), Yy = Object.assign(Object.assign({}, ve.props), {
  to: Sn.propTo,
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
}), mc = J({
  name: "Select",
  props: Yy,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.items !== void 0 && Qe("select", "`items` is deprecated, please use `options` instead."), e.onChange !== void 0 && Qe("select", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      mergedBorderedRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = ve("Select", "-select", Xy, pc, e, t), s = L(e.defaultValue), l = ie(e, "value"), d = Et(l, s), u = L(!1), c = L(""), v = el(e, ["items", "options"]), g = L([]), m = L([]), h = E(() => m.value.concat(g.value).concat(v.value)), p = E(() => {
      const {
        filter: A
      } = e;
      if (A) return A;
      const {
        labelField: V,
        valueField: Q
      } = e;
      return (se, de) => {
        if (!de) return !1;
        const ge = de[V];
        if (typeof ge == "string")
          return ca(se, ge);
        const me = de[Q];
        return typeof me == "string" ? ca(se, me) : typeof me == "number" ? ca(se, String(me)) : !1;
      };
    }), x = E(() => {
      if (e.remote)
        return v.value;
      {
        const {
          value: A
        } = h, {
          value: V
        } = c;
        return !V.length || !e.filterable ? A : vy(A, p.value, V, e.childrenField);
      }
    }), b = E(() => {
      const {
        valueField: A,
        childrenField: V
      } = e, Q = sc(A, V);
      return $i(x.value, Q);
    }), y = E(() => gy(h.value, e.valueField, e.childrenField)), B = L(!1), C = Et(ie(e, "show"), B), P = L(null), k = L(null), S = L(null), {
      localeRef: w
    } = cr("Select"), R = E(() => {
      var A;
      return (A = e.placeholder) !== null && A !== void 0 ? A : w.value.placeholder;
    }), F = [], N = L(/* @__PURE__ */ new Map()), $ = E(() => {
      const {
        fallbackOption: A
      } = e;
      if (A === void 0) {
        const {
          labelField: V,
          valueField: Q
        } = e;
        return (se) => ({
          [V]: String(se),
          [Q]: se
        });
      }
      return A === !1 ? !1 : (V) => Object.assign(A(V), {
        value: V
      });
    });
    function n(A) {
      const V = e.remote, {
        value: Q
      } = N, {
        value: se
      } = y, {
        value: de
      } = $, ge = [];
      return A.forEach((me) => {
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
    const O = E(() => {
      if (e.multiple) {
        const {
          value: A
        } = d;
        return Array.isArray(A) ? n(A) : [];
      }
      return null;
    }), M = E(() => {
      const {
        value: A
      } = d;
      return !e.multiple && !Array.isArray(A) ? A === null ? null : n([A])[0] || null : null;
    }), W = En(e), {
      mergedSizeRef: H,
      mergedDisabledRef: U,
      mergedStatusRef: ee
    } = W;
    function Y(A, V) {
      const {
        onChange: Q,
        "onUpdate:value": se,
        onUpdateValue: de
      } = e, {
        nTriggerFormChange: ge,
        nTriggerFormInput: me
      } = W;
      Q && ne(Q, A, V), de && ne(de, A, V), se && ne(se, A, V), s.value = A, ge(), me();
    }
    function K(A) {
      const {
        onBlur: V
      } = e, {
        nTriggerFormBlur: Q
      } = W;
      V && ne(V, A), Q();
    }
    function j() {
      const {
        onClear: A
      } = e;
      A && ne(A);
    }
    function q(A) {
      const {
        onFocus: V,
        showOnFocus: Q
      } = e, {
        nTriggerFormFocus: se
      } = W;
      V && ne(V, A), se(), Q && be();
    }
    function X(A) {
      const {
        onSearch: V
      } = e;
      V && ne(V, A);
    }
    function ae(A) {
      const {
        onScroll: V
      } = e;
      V && ne(V, A);
    }
    function le() {
      var A;
      const {
        remote: V,
        multiple: Q
      } = e;
      if (V) {
        const {
          value: se
        } = N;
        if (Q) {
          const {
            valueField: de
          } = e;
          (A = O.value) === null || A === void 0 || A.forEach((ge) => {
            se.set(ge[de], ge);
          });
        } else {
          const de = M.value;
          de && se.set(de[e.valueField], de);
        }
      }
    }
    function ce(A) {
      const {
        onUpdateShow: V,
        "onUpdate:show": Q
      } = e;
      V && ne(V, A), Q && ne(Q, A), B.value = A;
    }
    function be() {
      U.value || (ce(!0), B.value = !0, e.filterable && at());
    }
    function G() {
      ce(!1);
    }
    function ue() {
      c.value = "", m.value = F;
    }
    const Pe = L(!1);
    function xe() {
      e.filterable && (Pe.value = !0);
    }
    function Fe() {
      e.filterable && (Pe.value = !1, C.value || ue());
    }
    function $e() {
      U.value || (C.value ? e.filterable ? at() : G() : be());
    }
    function ut(A) {
      var V, Q;
      !((Q = (V = S.value) === null || V === void 0 ? void 0 : V.selfRef) === null || Q === void 0) && Q.contains(A.relatedTarget) || (u.value = !1, K(A), G());
    }
    function ot(A) {
      q(A), u.value = !0;
    }
    function vt() {
      u.value = !0;
    }
    function gt(A) {
      var V;
      !((V = P.value) === null || V === void 0) && V.$el.contains(A.relatedTarget) || (u.value = !1, K(A), G());
    }
    function ye() {
      var A;
      (A = P.value) === null || A === void 0 || A.focus(), G();
    }
    function Ce(A) {
      var V;
      C.value && (!((V = P.value) === null || V === void 0) && V.$el.contains(Hr(A)) || G());
    }
    function Ee(A) {
      if (!Array.isArray(A)) return [];
      if ($.value)
        return Array.from(A);
      {
        const {
          remote: V
        } = e, {
          value: Q
        } = y;
        if (V) {
          const {
            value: se
          } = N;
          return A.filter((de) => Q.has(de) || se.has(de));
        } else
          return A.filter((se) => Q.has(se));
      }
    }
    function Le(A) {
      nt(A.rawNode);
    }
    function nt(A) {
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
          Se.length ? Se.push(me) : g.value = [me], m.value = F;
        }
      }
      if (Q && N.value.set(A[de], A), e.multiple) {
        const ge = Ee(d.value), me = ge.findIndex((Se) => Se === A[de]);
        if (~me) {
          if (ge.splice(me, 1), V && !Q) {
            const Se = oe(A[de]);
            ~Se && (g.value.splice(Se, 1), se && (c.value = ""));
          }
        } else
          ge.push(A[de]), se && (c.value = "");
        Y(ge, n(ge));
      } else {
        if (V && !Q) {
          const ge = oe(A[de]);
          ~ge ? g.value = [g.value[ge]] : g.value = F;
        }
        xt(), G(), Y(A[de], A);
      }
    }
    function oe(A) {
      return g.value.findIndex((Q) => Q[e.valueField] === A);
    }
    function he(A) {
      C.value || be();
      const {
        value: V
      } = A.target;
      c.value = V;
      const {
        tag: Q,
        remote: se
      } = e;
      if (X(V), Q && !se) {
        if (!V) {
          m.value = F;
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
        v.value.some((Ne) => Ne[me] === ge[me] || Ne[Se] === ge[Se]) || g.value.some((Ne) => Ne[me] === ge[me] || Ne[Se] === ge[Se]) ? m.value = F : m.value = [ge];
      }
    }
    function Te(A) {
      A.stopPropagation();
      const {
        multiple: V
      } = e;
      !V && e.filterable && G(), j(), V ? Y([], []) : Y(null, null);
    }
    function ct(A) {
      !Jt(A, "action") && !Jt(A, "empty") && !Jt(A, "header") && A.preventDefault();
    }
    function Tt(A) {
      ae(A);
    }
    function Ot(A) {
      var V, Q, se, de, ge;
      if (!e.keyboard) {
        A.preventDefault();
        return;
      }
      switch (A.key) {
        case " ":
          if (e.filterable)
            break;
          A.preventDefault();
        case "Enter":
          if (!(!((V = P.value) === null || V === void 0) && V.isComposing)) {
            if (C.value) {
              const me = (Q = S.value) === null || Q === void 0 ? void 0 : Q.getPendingTmNode();
              me ? Le(me) : e.filterable || (G(), xt());
            } else if (be(), e.tag && Pe.value) {
              const me = m.value[0];
              if (me) {
                const Se = me[e.valueField], {
                  value: Ne
                } = d;
                e.multiple && Array.isArray(Ne) && Ne.includes(Se) || nt(me);
              }
            }
          }
          A.preventDefault();
          break;
        case "ArrowUp":
          if (A.preventDefault(), e.loading) return;
          C.value && ((se = S.value) === null || se === void 0 || se.prev());
          break;
        case "ArrowDown":
          if (A.preventDefault(), e.loading) return;
          C.value ? (de = S.value) === null || de === void 0 || de.next() : be();
          break;
        case "Escape":
          C.value && (I0(A), G()), (ge = P.value) === null || ge === void 0 || ge.focus();
          break;
      }
    }
    function xt() {
      var A;
      (A = P.value) === null || A === void 0 || A.focus();
    }
    function at() {
      var A;
      (A = P.value) === null || A === void 0 || A.focusInput();
    }
    function St() {
      var A;
      C.value && ((A = k.value) === null || A === void 0 || A.syncPosition());
    }
    le(), Me(ie(e, "options"), le);
    const it = {
      focus: () => {
        var A;
        (A = P.value) === null || A === void 0 || A.focus();
      },
      focusInput: () => {
        var A;
        (A = P.value) === null || A === void 0 || A.focusInput();
      },
      blur: () => {
        var A;
        (A = P.value) === null || A === void 0 || A.blur();
      },
      blurInput: () => {
        var A;
        (A = P.value) === null || A === void 0 || A.blurInput();
      }
    }, fe = E(() => {
      const {
        self: {
          menuBoxShadow: A
        }
      } = a.value;
      return {
        "--n-menu-box-shadow": A
      };
    }), ke = i ? Xe("select", void 0, fe, e) : void 0;
    return Object.assign(Object.assign({}, it), {
      mergedStatus: ee,
      mergedClsPrefix: t,
      mergedBordered: r,
      namespace: o,
      treeMate: b,
      isMounted: br(),
      triggerRef: P,
      menuRef: S,
      pattern: c,
      uncontrolledShow: B,
      mergedShow: C,
      adjustedTo: Sn(e),
      uncontrolledValue: s,
      mergedValue: d,
      followerRef: k,
      localizedPlaceholder: R,
      selectedOption: M,
      selectedOptions: O,
      mergedSize: H,
      mergedDisabled: U,
      focused: u,
      activeWithoutMenuOpen: Pe,
      inlineThemeDisabled: i,
      onTriggerInputFocus: xe,
      onTriggerInputBlur: Fe,
      handleTriggerOrMenuResize: St,
      handleMenuFocus: vt,
      handleMenuBlur: gt,
      handleMenuTabOut: ye,
      handleTriggerClick: $e,
      handleToggle: Le,
      handleDeleteOption: nt,
      handlePatternInput: he,
      handleClear: Te,
      handleTriggerBlur: ut,
      handleTriggerFocus: ot,
      handleKeydown: Ot,
      handleMenuAfterLeave: ue,
      handleMenuClickOutside: Ce,
      handleMenuScroll: Tt,
      handleMenuKeydown: Ot,
      handleMenuMousedown: ct,
      mergedTheme: a,
      cssVars: i ? void 0 : fe,
      themeClass: ke == null ? void 0 : ke.themeClass,
      onRender: ke == null ? void 0 : ke.onRender
    });
  },
  render() {
    return f("div", {
      class: `${this.mergedClsPrefix}-select`
    }, f(ol, null, {
      default: () => [f(il, null, {
        default: () => f(G1, {
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
      }), f(sl, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === Sn.tdkey,
        containerClass: this.namespace,
        width: this.consistentMenuWidth ? "target" : void 0,
        minWidth: "target",
        placement: this.placement
      }, {
        default: () => f(It, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted,
          onAfterLeave: this.handleMenuAfterLeave
        }, {
          default: () => {
            var e, t, r;
            return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) === null || e === void 0 || e.call(this), rn(f(Qu, Object.assign({}, this.menuProps, {
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
            }), this.displayDirective === "show" ? [[Un, this.mergedShow], [jr, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]] : [[jr, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), Zy = {
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
function Jy(e) {
  const {
    textColor2: t,
    primaryColor: r,
    primaryColorHover: o,
    primaryColorPressed: i,
    inputColorDisabled: a,
    textColorDisabled: s,
    borderColor: l,
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
  return Object.assign(Object.assign({}, Zy), {
    buttonColor: "#0000",
    buttonColorHover: "#0000",
    buttonColorPressed: "#0000",
    buttonBorder: `1px solid ${l}`,
    buttonBorderHover: `1px solid ${l}`,
    buttonBorderPressed: `1px solid ${l}`,
    buttonIconColor: t,
    buttonIconColorHover: t,
    buttonIconColorPressed: t,
    itemTextColor: t,
    itemTextColorHover: o,
    itemTextColorPressed: i,
    itemTextColorActive: r,
    itemTextColorDisabled: s,
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
    itemBorderDisabled: `1px solid ${l}`,
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
    jumperTextColorDisabled: s
  });
}
const bc = {
  name: "Pagination",
  common: Ye,
  peers: {
    Select: pc,
    Input: Al,
    Popselect: Dl
  },
  self: Jy
}, hd = `
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`, vd = [I("button", `
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)], Qy = z("pagination", `
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
 `, [I("button", `
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `, [z("base-icon", `
 font-size: var(--n-button-icon-size);
 `)]), Ue("disabled", [I("hover", hd, vd), D("&:hover", hd, vd), D("&:active", `
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `, [I("button", `
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `)]), I("active", `
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `, [D("&:hover", `
 background: var(--n-item-color-active-hover);
 `)])]), I("disabled", `
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `, [I("active, button", `
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]), I("disabled", `
 cursor: not-allowed;
 `, [z("pagination-quick-jumper", `
 color: var(--n-jumper-text-color-disabled);
 `)]), I("simple", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `, [z("pagination-quick-jumper", [z("input", `
 margin: 0;
 `)])])]);
function xc(e) {
  var t;
  if (!e) return 10;
  const {
    defaultPageSize: r
  } = e;
  if (r !== void 0) return r;
  const o = (t = e.pageSizes) === null || t === void 0 ? void 0 : t[0];
  return typeof o == "number" ? o : (o == null ? void 0 : o.value) || 10;
}
function eC(e, t, r, o) {
  let i = !1, a = !1, s = 1, l = t;
  if (t === 1)
    return {
      hasFastBackward: !1,
      hasFastForward: !1,
      fastForwardTo: l,
      fastBackwardTo: s,
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
      fastForwardTo: l,
      fastBackwardTo: s,
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
  }), m ? (i = !0, s = c - 1, p.push({
    type: "fast-backward",
    active: !1,
    label: void 0,
    options: o ? gd(d + 1, c - 1) : null
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
  return h ? (a = !0, l = v + 1, p.push({
    type: "fast-forward",
    active: !1,
    label: void 0,
    options: o ? gd(v + 1, u - 1) : null
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
    fastBackwardTo: s,
    fastForwardTo: l,
    items: p
  };
}
function gd(e, t) {
  const r = [];
  for (let o = e; o <= t; ++o)
    r.push({
      label: `${o}`,
      value: o
    });
  return r;
}
const tC = Object.assign(Object.assign({}, ve.props), {
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
  to: Sn.propTo,
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
}), yc = J({
  name: "Pagination",
  props: tC,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.pageCount !== void 0 && e.itemCount !== void 0 && Dt("pagination", "`page-count` and `item-count` should't be specified together. Only `item-count` will take effect."), e.onPageSizeChange && Qe("pagination", "`on-page-size-change` is deprecated, please use `on-update:page-size` instead."), e.onChange && Qe("pagination", "`on-change` is deprecated, please use `on-update:page` instead.");
    });
    const {
      mergedComponentPropsRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = ve("Pagination", "-pagination", Qy, bc, e, r), {
      localeRef: s
    } = cr("Pagination"), l = L(null), d = L(e.defaultPage), u = L(xc(e)), c = Et(ie(e, "page"), d), v = Et(ie(e, "pageSize"), u), g = E(() => {
      const {
        itemCount: G
      } = e;
      if (G !== void 0)
        return Math.max(1, Math.ceil(G / v.value));
      const {
        pageCount: ue
      } = e;
      return ue !== void 0 ? Math.max(ue, 1) : 1;
    }), m = L("");
    rt(() => {
      e.simple, m.value = String(c.value);
    });
    const h = L(!1), p = L(!1), x = L(!1), b = L(!1), y = () => {
      e.disabled || (h.value = !0, M());
    }, B = () => {
      e.disabled || (h.value = !1, M());
    }, C = () => {
      p.value = !0, M();
    }, P = () => {
      p.value = !1, M();
    }, k = (G) => {
      W(G);
    }, S = E(() => eC(c.value, g.value, e.pageSlot, e.showQuickJumpDropdown));
    rt(() => {
      S.value.hasFastBackward ? S.value.hasFastForward || (h.value = !1, x.value = !1) : (p.value = !1, b.value = !1);
    });
    const w = E(() => {
      const G = s.value.selectionSuffix;
      return e.pageSizes.map((ue) => typeof ue == "number" ? {
        label: `${ue} / ${G}`,
        value: ue
      } : ue);
    }), R = E(() => {
      var G, ue;
      return ((ue = (G = t == null ? void 0 : t.value) === null || G === void 0 ? void 0 : G.Pagination) === null || ue === void 0 ? void 0 : ue.inputSize) || Bs(e.size);
    }), F = E(() => {
      var G, ue;
      return ((ue = (G = t == null ? void 0 : t.value) === null || G === void 0 ? void 0 : G.Pagination) === null || ue === void 0 ? void 0 : ue.selectSize) || Bs(e.size);
    }), N = E(() => (c.value - 1) * v.value), $ = E(() => {
      const G = c.value * v.value - 1, {
        itemCount: ue
      } = e;
      return ue !== void 0 && G > ue - 1 ? ue - 1 : G;
    }), n = E(() => {
      const {
        itemCount: G
      } = e;
      return G !== void 0 ? G : (e.pageCount || 1) * v.value;
    }), O = kt("Pagination", i, r);
    function M() {
      ht(() => {
        var G;
        const {
          value: ue
        } = l;
        ue && (ue.classList.add("transition-disabled"), (G = l.value) === null || G === void 0 || G.offsetWidth, ue.classList.remove("transition-disabled"));
      });
    }
    function W(G) {
      if (G === c.value) return;
      const {
        "onUpdate:page": ue,
        onUpdatePage: Pe,
        onChange: xe,
        simple: Fe
      } = e;
      ue && ne(ue, G), Pe && ne(Pe, G), xe && ne(xe, G), d.value = G, Fe && (m.value = String(G));
    }
    function H(G) {
      if (G === v.value) return;
      const {
        "onUpdate:pageSize": ue,
        onUpdatePageSize: Pe,
        onPageSizeChange: xe
      } = e;
      ue && ne(ue, G), Pe && ne(Pe, G), xe && ne(xe, G), u.value = G, g.value < c.value && W(g.value);
    }
    function U() {
      if (e.disabled) return;
      const G = Math.min(c.value + 1, g.value);
      W(G);
    }
    function ee() {
      if (e.disabled) return;
      const G = Math.max(c.value - 1, 1);
      W(G);
    }
    function Y() {
      if (e.disabled) return;
      const G = Math.min(S.value.fastForwardTo, g.value);
      W(G);
    }
    function K() {
      if (e.disabled) return;
      const G = Math.max(S.value.fastBackwardTo, 1);
      W(G);
    }
    function j(G) {
      H(G);
    }
    function q() {
      const G = Number.parseInt(m.value);
      Number.isNaN(G) || (W(Math.max(1, Math.min(G, g.value))), e.simple || (m.value = ""));
    }
    function X() {
      q();
    }
    function ae(G) {
      if (!e.disabled)
        switch (G.type) {
          case "page":
            W(G.label);
            break;
          case "fast-backward":
            K();
            break;
          case "fast-forward":
            Y();
            break;
        }
    }
    function le(G) {
      m.value = G.replace(/\D+/g, "");
    }
    rt(() => {
      c.value, v.value, M();
    });
    const ce = E(() => {
      const {
        size: G
      } = e, {
        self: {
          buttonBorder: ue,
          buttonBorderHover: Pe,
          buttonBorderPressed: xe,
          buttonIconColor: Fe,
          buttonIconColorHover: $e,
          buttonIconColorPressed: ut,
          itemTextColor: ot,
          itemTextColorHover: vt,
          itemTextColorPressed: gt,
          itemTextColorActive: ye,
          itemTextColorDisabled: Ce,
          itemColor: Ee,
          itemColorHover: Le,
          itemColorPressed: nt,
          itemColorActive: oe,
          itemColorActiveHover: he,
          itemColorDisabled: Te,
          itemBorder: ct,
          itemBorderHover: Tt,
          itemBorderPressed: Ot,
          itemBorderActive: xt,
          itemBorderDisabled: at,
          itemBorderRadius: St,
          jumperTextColor: it,
          jumperTextColorDisabled: fe,
          buttonColor: ke,
          buttonColorHover: A,
          buttonColorPressed: V,
          [Z("itemPadding", G)]: Q,
          [Z("itemMargin", G)]: se,
          [Z("inputWidth", G)]: de,
          [Z("selectWidth", G)]: ge,
          [Z("inputMargin", G)]: me,
          [Z("selectMargin", G)]: Se,
          [Z("jumperFontSize", G)]: Ne,
          [Z("prefixMargin", G)]: lt,
          [Z("suffixMargin", G)]: Ke,
          [Z("itemSize", G)]: Lt,
          [Z("buttonIconSize", G)]: Wt,
          [Z("itemFontSize", G)]: _t,
          [`${Z("itemMargin", G)}Rtl`]: Kt,
          [`${Z("inputMargin", G)}Rtl`]: qt
        },
        common: {
          cubicBezierEaseInOut: on
        }
      } = a.value;
      return {
        "--n-prefix-margin": lt,
        "--n-suffix-margin": Ke,
        "--n-item-font-size": _t,
        "--n-select-width": ge,
        "--n-select-margin": Se,
        "--n-input-width": de,
        "--n-input-margin": me,
        "--n-input-margin-rtl": qt,
        "--n-item-size": Lt,
        "--n-item-text-color": ot,
        "--n-item-text-color-disabled": Ce,
        "--n-item-text-color-hover": vt,
        "--n-item-text-color-active": ye,
        "--n-item-text-color-pressed": gt,
        "--n-item-color": Ee,
        "--n-item-color-hover": Le,
        "--n-item-color-disabled": Te,
        "--n-item-color-active": oe,
        "--n-item-color-active-hover": he,
        "--n-item-color-pressed": nt,
        "--n-item-border": ct,
        "--n-item-border-hover": Tt,
        "--n-item-border-disabled": at,
        "--n-item-border-active": xt,
        "--n-item-border-pressed": Ot,
        "--n-item-padding": Q,
        "--n-item-border-radius": St,
        "--n-bezier": on,
        "--n-jumper-font-size": Ne,
        "--n-jumper-text-color": it,
        "--n-jumper-text-color-disabled": fe,
        "--n-item-margin": se,
        "--n-item-margin-rtl": Kt,
        "--n-button-icon-size": Wt,
        "--n-button-icon-color": Fe,
        "--n-button-icon-color-hover": $e,
        "--n-button-icon-color-pressed": ut,
        "--n-button-color-hover": A,
        "--n-button-color": ke,
        "--n-button-color-pressed": V,
        "--n-button-border": ue,
        "--n-button-border-hover": Pe,
        "--n-button-border-pressed": xe
      };
    }), be = o ? Xe("pagination", E(() => {
      let G = "";
      const {
        size: ue
      } = e;
      return G += ue[0], G;
    }), ce, e) : void 0;
    return {
      rtlEnabled: O,
      mergedClsPrefix: r,
      locale: s,
      selfRef: l,
      mergedPage: c,
      pageItems: E(() => S.value.items),
      mergedItemCount: n,
      jumperValue: m,
      pageSizeOptions: w,
      mergedPageSize: v,
      inputSize: R,
      selectSize: F,
      mergedTheme: a,
      mergedPageCount: g,
      startIndex: N,
      endIndex: $,
      showFastForwardMenu: x,
      showFastBackwardMenu: b,
      fastForwardActive: h,
      fastBackwardActive: p,
      handleMenuSelect: k,
      handleFastForwardMouseenter: y,
      handleFastForwardMouseleave: B,
      handleFastBackwardMouseenter: C,
      handleFastBackwardMouseleave: P,
      handleJumperInput: le,
      handleBackwardClick: ee,
      handleForwardClick: U,
      handlePageItemClick: ae,
      handleSizePickerChange: j,
      handleQuickJumperChange: X,
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
      pageItems: s,
      showSizePicker: l,
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
      prefix: B,
      suffix: C,
      label: P,
      goto: k,
      handleJumperInput: S,
      handleSizePickerChange: w,
      handleBackwardClick: R,
      handlePageItemClick: F,
      handleForwardClick: N,
      handleQuickJumperChange: $,
      onRender: n
    } = this;
    n == null || n();
    const O = B || e.prefix, M = C || e.suffix, W = b || e.prev, H = y || e.next, U = P || e.label;
    return f("div", {
      ref: "selfRef",
      class: [`${t}-pagination`, this.themeClass, this.rtlEnabled && `${t}-pagination--rtl`, r && `${t}-pagination--disabled`, x && `${t}-pagination--simple`],
      style: o
    }, O ? f("div", {
      class: `${t}-pagination-prefix`
    }, O({
      page: i,
      pageSize: m,
      pageCount: a,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      itemCount: this.mergedItemCount
    })) : null, this.displayOrder.map((ee) => {
      switch (ee) {
        case "pages":
          return f(je, null, f("div", {
            class: [`${t}-pagination-item`, !W && `${t}-pagination-item--button`, (i <= 1 || i > a || r) && `${t}-pagination-item--disabled`],
            onClick: R
          }, W ? W({
            page: i,
            pageSize: m,
            pageCount: a,
            startIndex: this.startIndex,
            endIndex: this.endIndex,
            itemCount: this.mergedItemCount
          }) : f(Ct, {
            clsPrefix: t
          }, {
            default: () => this.rtlEnabled ? f(td, null) : f(Js, null)
          })), x ? f(je, null, f("div", {
            class: `${t}-pagination-quick-jumper`
          }, f(Ta, {
            value: p,
            onUpdateValue: S,
            size: v,
            placeholder: "",
            disabled: r,
            theme: u.peers.Input,
            themeOverrides: u.peerOverrides.Input,
            onChange: $
          })), " /", " ", a) : s.map((Y, K) => {
            let j, q, X;
            const {
              type: ae
            } = Y;
            switch (ae) {
              case "page":
                const ce = Y.label;
                U ? j = U({
                  type: "page",
                  node: ce,
                  active: Y.active
                }) : j = ce;
                break;
              case "fast-forward":
                const be = this.fastForwardActive ? f(Ct, {
                  clsPrefix: t
                }, {
                  default: () => this.rtlEnabled ? f(Qs, null) : f(ed, null)
                }) : f(Ct, {
                  clsPrefix: t
                }, {
                  default: () => f(nd, null)
                });
                U ? j = U({
                  type: "fast-forward",
                  node: be,
                  active: this.fastForwardActive || this.showFastForwardMenu
                }) : j = be, q = this.handleFastForwardMouseenter, X = this.handleFastForwardMouseleave;
                break;
              case "fast-backward":
                const G = this.fastBackwardActive ? f(Ct, {
                  clsPrefix: t
                }, {
                  default: () => this.rtlEnabled ? f(ed, null) : f(Qs, null)
                }) : f(Ct, {
                  clsPrefix: t
                }, {
                  default: () => f(nd, null)
                });
                U ? j = U({
                  type: "fast-backward",
                  node: G,
                  active: this.fastBackwardActive || this.showFastBackwardMenu
                }) : j = G, q = this.handleFastBackwardMouseenter, X = this.handleFastBackwardMouseleave;
                break;
            }
            const le = f("div", {
              key: K,
              class: [`${t}-pagination-item`, Y.active && `${t}-pagination-item--active`, ae !== "page" && (ae === "fast-backward" && this.showFastBackwardMenu || ae === "fast-forward" && this.showFastForwardMenu) && `${t}-pagination-item--hover`, r && `${t}-pagination-item--disabled`, ae === "page" && `${t}-pagination-item--clickable`],
              onClick: () => {
                F(Y);
              },
              onMouseenter: q,
              onMouseleave: X
            }, j);
            if (ae === "page" && !Y.mayBeFastBackward && !Y.mayBeFastForward)
              return le;
            {
              const ce = Y.type === "page" ? Y.mayBeFastBackward ? "fast-backward" : "fast-forward" : Y.type;
              return Y.type !== "page" && !Y.options ? le : f(qy, {
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
                options: Y.type !== "page" && Y.options ? Y.options : [],
                onUpdateValue: this.handleMenuSelect,
                scrollable: !0,
                showCheckmark: !1
              }, {
                default: () => le
              });
            }
          }), f("div", {
            class: [`${t}-pagination-item`, !H && `${t}-pagination-item--button`, {
              [`${t}-pagination-item--disabled`]: i < 1 || i >= a || r
            }],
            onClick: N
          }, H ? H({
            page: i,
            pageSize: m,
            pageCount: a,
            itemCount: this.mergedItemCount,
            startIndex: this.startIndex,
            endIndex: this.endIndex
          }) : f(Ct, {
            clsPrefix: t
          }, {
            default: () => this.rtlEnabled ? f(Js, null) : f(td, null)
          })));
        case "size-picker":
          return !x && l ? f(mc, Object.assign({
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
            onUpdateValue: w
          })) : null;
        case "quick-jumper":
          return !x && d ? f("div", {
            class: `${t}-pagination-quick-jumper`
          }, k ? k() : nn(this.$slots.goto, () => [c.goto]), f(Ta, {
            value: p,
            onUpdateValue: S,
            size: v,
            placeholder: "",
            disabled: r,
            theme: u.peers.Input,
            themeOverrides: u.peerOverrides.Input,
            onChange: $
          })) : null;
        default:
          return null;
      }
    }), M ? f("div", {
      class: `${t}-pagination-suffix`
    }, M({
      page: i,
      pageSize: m,
      pageCount: a,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      itemCount: this.mergedItemCount
    })) : null);
  }
}), nC = {
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
function rC(e) {
  const {
    primaryColor: t,
    textColor2: r,
    dividerColor: o,
    hoverColor: i,
    popoverColor: a,
    invertedColor: s,
    borderRadius: l,
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
  return Object.assign(Object.assign({}, nC), {
    optionHeightSmall: g,
    optionHeightMedium: m,
    optionHeightLarge: h,
    optionHeightHuge: p,
    borderRadius: l,
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
    colorInverted: s,
    dividerColorInverted: "#BBB",
    suffixColorInverted: "#BBB",
    prefixColorInverted: "#BBB",
    optionColorHoverInverted: t,
    optionColorActiveInverted: t,
    groupHeaderTextColorInverted: "#AAA",
    optionOpacityDisabled: b
  });
}
const Cc = {
  name: "Dropdown",
  common: Ye,
  peers: {
    Popover: kr
  },
  self: rC
}, oC = {
  padding: "8px 14px"
};
function iC(e) {
  const {
    borderRadius: t,
    boxShadow2: r,
    baseColor: o
  } = e;
  return Object.assign(Object.assign({}, oC), {
    borderRadius: t,
    boxShadow: r,
    color: Je(o, "rgba(0, 0, 0, .85)"),
    textColor: o
  });
}
const wc = {
  name: "Tooltip",
  common: Ye,
  peers: {
    Popover: kr
  },
  self: iC
}, Sc = {
  name: "Ellipsis",
  common: Ye,
  peers: {
    Tooltip: wc
  }
}, aC = {
  radioSizeSmall: "14px",
  radioSizeMedium: "16px",
  radioSizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function lC(e) {
  const {
    borderColor: t,
    primaryColor: r,
    baseColor: o,
    textColorDisabled: i,
    inputColorDisabled: a,
    textColor2: s,
    opacityDisabled: l,
    borderRadius: d,
    fontSizeSmall: u,
    fontSizeMedium: c,
    fontSizeLarge: v,
    heightSmall: g,
    heightMedium: m,
    heightLarge: h,
    lineHeight: p
  } = e;
  return Object.assign(Object.assign({}, aC), {
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
    textColor: s,
    textColorDisabled: i,
    dotColorActive: r,
    dotColorDisabled: t,
    buttonBorderColor: t,
    buttonBorderColorActive: r,
    buttonBorderColorHover: t,
    buttonColor: o,
    buttonColorActive: o,
    buttonTextColor: s,
    buttonTextColorActive: r,
    buttonTextColorHover: r,
    opacityDisabled: l,
    buttonBoxShadowFocus: `inset 0 0 0 1px ${r}, 0 0 0 2px ${De(r, {
      alpha: 0.3
    })}`,
    buttonBoxShadowHover: "inset 0 0 0 1px #0000",
    buttonBoxShadow: "inset 0 0 0 1px #0000",
    buttonBorderRadius: d
  });
}
const Ol = {
  name: "Radio",
  common: Ye,
  self: lC
}, sC = {
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
function dC(e) {
  const {
    cardColor: t,
    modalColor: r,
    popoverColor: o,
    textColor2: i,
    textColor1: a,
    tableHeaderColor: s,
    tableColorHover: l,
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
    tableColorStriped: B
  } = e;
  return Object.assign(Object.assign({}, sC), {
    actionDividerColor: x,
    lineHeight: g,
    borderRadius: v,
    fontSizeSmall: m,
    fontSizeMedium: h,
    fontSizeLarge: p,
    borderColor: Je(t, x),
    tdColorHover: Je(t, l),
    tdColorSorting: Je(t, l),
    tdColorStriped: Je(t, B),
    thColor: Je(t, s),
    thColorHover: Je(Je(t, s), l),
    thColorSorting: Je(Je(t, s), l),
    tdColor: t,
    tdTextColor: i,
    thTextColor: a,
    thFontWeight: c,
    thButtonColorHover: l,
    thIconColor: d,
    thIconColorActive: u,
    // modal
    borderColorModal: Je(r, x),
    tdColorHoverModal: Je(r, l),
    tdColorSortingModal: Je(r, l),
    tdColorStripedModal: Je(r, B),
    thColorModal: Je(r, s),
    thColorHoverModal: Je(Je(r, s), l),
    thColorSortingModal: Je(Je(r, s), l),
    tdColorModal: r,
    // popover
    borderColorPopover: Je(o, x),
    tdColorHoverPopover: Je(o, l),
    tdColorSortingPopover: Je(o, l),
    tdColorStripedPopover: Je(o, B),
    thColorPopover: Je(o, s),
    thColorHoverPopover: Je(Je(o, s), l),
    thColorSortingPopover: Je(Je(o, s), l),
    tdColorPopover: o,
    boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)",
    boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)",
    // loading
    loadingColor: u,
    loadingSize: b,
    opacityLoading: y
  });
}
const uC = {
  name: "DataTable",
  common: Ye,
  peers: {
    Button: zi,
    Checkbox: uc,
    Radio: Ol,
    Pagination: bc,
    Scrollbar: Jn,
    Empty: $l,
    Popover: kr,
    Ellipsis: Sc,
    Dropdown: Cc
  },
  self: dC
}, cC = Object.assign(Object.assign({}, ve.props), {
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
}), vn = "n-data-table", Bc = 40, kc = 40;
function pd(e) {
  if (e.type === "selection")
    return e.width === void 0 ? Bc : Mt(e.width);
  if (e.type === "expand")
    return e.width === void 0 ? kc : Mt(e.width);
  if (!("children" in e))
    return typeof e.width == "string" ? Mt(e.width) : e.width;
}
function fC(e) {
  var t, r;
  if (e.type === "selection")
    return bt((t = e.width) !== null && t !== void 0 ? t : Bc);
  if (e.type === "expand")
    return bt((r = e.width) !== null && r !== void 0 ? r : kc);
  if (!("children" in e))
    return bt(e.width);
}
function un(e) {
  return e.type === "selection" ? "__n_selection__" : e.type === "expand" ? "__n_expand__" : e.key;
}
function md(e) {
  return e && (typeof e == "object" ? Object.assign({}, e) : e);
}
function hC(e) {
  return e === "ascend" ? 1 : e === "descend" ? -1 : 0;
}
function vC(e, t, r) {
  return r !== void 0 && (e = Math.min(e, typeof r == "number" ? r : Number.parseFloat(r))), t !== void 0 && (e = Math.max(e, typeof t == "number" ? t : Number.parseFloat(t))), e;
}
function gC(e, t) {
  if (t !== void 0)
    return {
      width: t,
      minWidth: t,
      maxWidth: t
    };
  const r = fC(e), {
    minWidth: o,
    maxWidth: i
  } = e;
  return {
    width: r,
    minWidth: bt(o) || r,
    maxWidth: bt(i)
  };
}
function pC(e, t, r) {
  return typeof r == "function" ? r(e, t) : r || "";
}
function fa(e) {
  return e.filterOptionValues !== void 0 || e.filterOptionValue === void 0 && e.defaultFilterOptionValues !== void 0;
}
function ha(e) {
  return "children" in e ? !1 : !!e.sorter;
}
function Rc(e) {
  return "children" in e && e.children.length ? !1 : !!e.resizable;
}
function bd(e) {
  return "children" in e ? !1 : !!e.filter && (!!e.filterOptions || !!e.renderFilterMenu);
}
function xd(e) {
  if (e) {
    if (e === "descend") return "ascend";
  } else return "descend";
  return !1;
}
function mC(e, t) {
  if (e.sorter === void 0) return null;
  const {
    customNextSortOrder: r
  } = e;
  return t === null || t.columnKey !== e.key ? {
    columnKey: e.key,
    sorter: e.sorter,
    order: xd(!1)
  } : Object.assign(Object.assign({}, t), {
    order: (r || xd)(t.order)
  });
}
function Pc(e, t) {
  return t.find((r) => r.columnKey === e.key && r.order) !== void 0;
}
function bC(e) {
  return typeof e == "string" ? e.replace(/,/g, "\\,") : e == null ? "" : `${e}`.replace(/,/g, "\\,");
}
function xC(e, t, r, o) {
  const i = e.filter((l) => l.type !== "expand" && l.type !== "selection" && l.allowExport !== !1), a = i.map((l) => o ? o(l) : l.title).join(","), s = t.map((l) => i.map((d) => r ? r(l[d.key], l, d) : bC(l[d.key])).join(","));
  return [a, ...s].join(`
`);
}
const yC = J({
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
    } = pe(vn);
    return () => {
      const {
        rowKey: o
      } = e;
      return f(Ai, {
        privateInsideTable: !0,
        disabled: e.disabled,
        indeterminate: r.value.has(o),
        checked: t.value.has(o),
        onUpdateChecked: e.onUpdateChecked
      });
    };
  }
}), CC = z("radio", `
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
`, [I("checked", [T("dot", `
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
 `), I("checked", {
  boxShadow: "var(--n-box-shadow-active)"
}, [D("&::before", `
 opacity: 1;
 transform: scale(1);
 `)])]), T("label", `
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `), Ue("disabled", `
 cursor: pointer;
 `, [D("&:hover", [T("dot", {
  boxShadow: "var(--n-box-shadow-hover)"
})]), I("focus", [D("&:not(:active)", [T("dot", {
  boxShadow: "var(--n-box-shadow-focus)"
})])])]), I("disabled", `
 cursor: not-allowed;
 `, [T("dot", {
  boxShadow: "var(--n-box-shadow-disabled)",
  backgroundColor: "var(--n-color-disabled)"
}, [D("&::before", {
  backgroundColor: "var(--n-dot-color-disabled)"
}), I("checked", `
 opacity: 1;
 `)]), T("label", {
  color: "var(--n-text-color-disabled)"
}), z("radio-input", `
 cursor: not-allowed;
 `)])]), wC = {
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
}, Fc = "n-radio-group";
function SC(e) {
  process.env.NODE_ENV !== "production" && rt(() => {
    e.checkedValue !== void 0 && Qe("radio", "`checked-value` is deprecated, please use `checked` instead.");
  });
  const t = pe(Fc, null), r = En(e, {
    mergedSize(y) {
      const {
        size: B
      } = e;
      if (B !== void 0) return B;
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
  } = r, a = L(null), s = L(null), l = L(e.defaultChecked), d = ie(e, "checked"), u = Et(d, l), c = Ge(() => t ? t.valueRef.value === e.value : u.value), v = Ge(() => {
    const {
      name: y
    } = e;
    if (y !== void 0) return y;
    if (t) return t.nameRef.value;
  }), g = L(!1);
  function m() {
    if (t) {
      const {
        doUpdateValue: y
      } = t, {
        value: B
      } = e;
      ne(y, B);
    } else {
      const {
        onUpdateChecked: y,
        "onUpdate:checked": B
      } = e, {
        nTriggerFormInput: C,
        nTriggerFormChange: P
      } = r;
      y && ne(y, !0), B && ne(B, !0), C(), P(), l.value = !0;
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
    labelRef: s,
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
const BC = Object.assign(Object.assign({}, ve.props), wC), Ml = J({
  name: "Radio",
  props: BC,
  setup(e) {
    const t = SC(e), r = ve("Radio", "-radio", CC, Ol, e, t.mergedClsPrefix), o = E(() => {
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
          textColor: B,
          textColorDisabled: C,
          dotColorActive: P,
          dotColorDisabled: k,
          labelPadding: S,
          labelLineHeight: w,
          labelFontWeight: R,
          [Z("fontSize", u)]: F,
          [Z("radioSize", u)]: N
        }
      } = r.value;
      return {
        "--n-bezier": c,
        "--n-label-line-height": w,
        "--n-label-font-weight": R,
        "--n-box-shadow": v,
        "--n-box-shadow-active": g,
        "--n-box-shadow-disabled": m,
        "--n-box-shadow-focus": h,
        "--n-box-shadow-hover": p,
        "--n-color": x,
        "--n-color-active": y,
        "--n-color-disabled": b,
        "--n-dot-color-active": P,
        "--n-dot-color-disabled": k,
        "--n-font-size": F,
        "--n-radio-size": N,
        "--n-text-color": B,
        "--n-text-color-disabled": C,
        "--n-label-padding": S
      };
    }), {
      inlineThemeDisabled: i,
      mergedClsPrefixRef: a,
      mergedRtlRef: s
    } = Ae(e), l = kt("Radio", s, a), d = i ? Xe("radio", E(() => t.mergedSize.value[0]), o, e) : void 0;
    return Object.assign(t, {
      rtlEnabled: l,
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
}), kC = z("radio-group", `
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
 `, [I("checked", {
  backgroundColor: "var(--n-button-border-color-active)"
}), I("disabled", {
  opacity: "var(--n-opacity-disabled)"
})]), I("button-group", `
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
 `), D("&:first-child", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `, [T("state-border", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]), D("&:last-child", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `, [T("state-border", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]), Ue("disabled", `
 cursor: pointer;
 `, [D("&:hover", [T("state-border", `
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `), Ue("checked", {
  color: "var(--n-button-text-color-hover)"
})]), I("focus", [D("&:not(:active)", [T("state-border", {
  boxShadow: "var(--n-button-box-shadow-focus)"
})])])]), I("checked", `
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `), I("disabled", `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);
function RC(e, t, r) {
  var o;
  const i = [];
  let a = !1;
  for (let s = 0; s < e.length; ++s) {
    const l = e[s], d = (o = l.type) === null || o === void 0 ? void 0 : o.name;
    if (d === "RadioButton" && (a = !0), process.env.NODE_ENV !== "production" && a && d !== "RadioButton") {
      Dt("radio-group", "`n-radio-group` in button mode only takes `n-radio-button` as children.");
      continue;
    }
    const u = l.props;
    if (d !== "RadioButton") {
      i.push(l);
      continue;
    }
    if (s === 0)
      i.push(l);
    else {
      const c = i[i.length - 1].props, v = t === c.value, g = c.disabled, m = t === u.value, h = u.disabled, p = (v ? 2 : 0) + (g ? 0 : 1), x = (m ? 2 : 0) + (h ? 0 : 1), b = {
        [`${r}-radio-group__splitor--disabled`]: g,
        [`${r}-radio-group__splitor--checked`]: v
      }, y = {
        [`${r}-radio-group__splitor--disabled`]: h,
        [`${r}-radio-group__splitor--checked`]: m
      }, B = p < x ? y : b;
      i.push(f("div", {
        class: [`${r}-radio-group__splitor`, B]
      }), l);
    }
  }
  return {
    children: i,
    isButtonGroup: a
  };
}
const PC = Object.assign(Object.assign({}, ve.props), {
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
}), $c = J({
  name: "RadioGroup",
  props: PC,
  setup(e) {
    const t = L(null), {
      mergedSizeRef: r,
      mergedDisabledRef: o,
      nTriggerFormChange: i,
      nTriggerFormInput: a,
      nTriggerFormBlur: s,
      nTriggerFormFocus: l
    } = En(e), {
      mergedClsPrefixRef: d,
      inlineThemeDisabled: u,
      mergedRtlRef: c
    } = Ae(e), v = ve("Radio", "-radio-group", kC, Ol, e, d), g = L(e.defaultValue), m = ie(e, "value"), h = Et(m, g);
    function p(P) {
      const {
        onUpdateValue: k,
        "onUpdate:value": S
      } = e;
      k && ne(k, P), S && ne(S, P), g.value = P, i(), a();
    }
    function x(P) {
      const {
        value: k
      } = t;
      k && (k.contains(P.relatedTarget) || l());
    }
    function b(P) {
      const {
        value: k
      } = t;
      k && (k.contains(P.relatedTarget) || s());
    }
    ze(Fc, {
      mergedClsPrefixRef: d,
      nameRef: ie(e, "name"),
      valueRef: h,
      disabledRef: o,
      mergedSizeRef: r,
      doUpdateValue: p
    });
    const y = kt("Radio", c, d), B = E(() => {
      const {
        value: P
      } = r, {
        common: {
          cubicBezierEaseInOut: k
        },
        self: {
          buttonBorderColor: S,
          buttonBorderColorActive: w,
          buttonBorderRadius: R,
          buttonBoxShadow: F,
          buttonBoxShadowFocus: N,
          buttonBoxShadowHover: $,
          buttonColor: n,
          buttonColorActive: O,
          buttonTextColor: M,
          buttonTextColorActive: W,
          buttonTextColorHover: H,
          opacityDisabled: U,
          [Z("buttonHeight", P)]: ee,
          [Z("fontSize", P)]: Y
        }
      } = v.value;
      return {
        "--n-font-size": Y,
        "--n-bezier": k,
        "--n-button-border-color": S,
        "--n-button-border-color-active": w,
        "--n-button-border-radius": R,
        "--n-button-box-shadow": F,
        "--n-button-box-shadow-focus": N,
        "--n-button-box-shadow-hover": $,
        "--n-button-color": n,
        "--n-button-color-active": O,
        "--n-button-text-color": M,
        "--n-button-text-color-hover": H,
        "--n-button-text-color-active": W,
        "--n-height": ee,
        "--n-opacity-disabled": U
      };
    }), C = u ? Xe("radio-group", E(() => r.value[0]), B, e) : void 0;
    return {
      selfElRef: t,
      rtlEnabled: y,
      mergedClsPrefix: d,
      mergedValue: h,
      handleFocusout: b,
      handleFocusin: x,
      cssVars: u ? void 0 : B,
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
      isButtonGroup: s
    } = RC(Bo(j0(this)), t, r);
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      onFocusin: o,
      onFocusout: i,
      ref: "selfElRef",
      class: [`${r}-radio-group`, this.rtlEnabled && `${r}-radio-group--rtl`, this.themeClass, s && `${r}-radio-group--button-group`],
      style: this.cssVars
    }, a);
  }
}), FC = J({
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
    } = pe(vn);
    return () => {
      const {
        rowKey: o
      } = e;
      return f(Ml, {
        name: r,
        disabled: e.disabled,
        checked: t.value.has(o),
        onUpdateChecked: e.onUpdateChecked
      });
    };
  }
}), $C = Object.assign(Object.assign({}, fr), ve.props), zc = J({
  name: "Tooltip",
  props: $C,
  slots: Object,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = ve("Tooltip", "-tooltip", void 0, wc, e, t), o = L(null);
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
      popoverThemeOverrides: E(() => r.value.self)
    });
  },
  render() {
    const {
      mergedTheme: e,
      internalExtraClass: t
    } = this;
    return f(Rr, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: t.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), Ac = z("ellipsis", {
  overflow: "hidden"
}, [Ue("line-clamp", `
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `), I("line-clamp", `
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `), I("cursor-pointer", `
 cursor: pointer;
 `)]);
function Oa(e) {
  return `${e}-ellipsis--line-clamp`;
}
function Ma(e, t) {
  return `${e}-ellipsis--cursor-${t}`;
}
const Ec = Object.assign(Object.assign({}, ve.props), {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Boolean, Object],
    default: !0
  }
}), Ei = J({
  name: "Ellipsis",
  inheritAttrs: !1,
  props: Ec,
  slots: Object,
  setup(e, {
    slots: t,
    attrs: r
  }) {
    const o = mu(), i = ve("Ellipsis", "-ellipsis", Ac, Sc, e, o), a = L(null), s = L(null), l = L(null), d = L(!1), u = E(() => {
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
          lineClamp: B
        } = e;
        if (m(y), B !== void 0)
          x = y.scrollHeight <= y.offsetHeight;
        else {
          const {
            value: C
          } = s;
          C && (x = C.getBoundingClientRect().width <= y.getBoundingClientRect().width);
        }
        h(y, x);
      }
      return x;
    }
    const v = E(() => e.expandTrigger === "click" ? () => {
      var x;
      const {
        value: b
      } = d;
      b && ((x = l.value) === null || x === void 0 || x.setShow(!1)), d.value = !b;
    } : void 0);
    Ka(() => {
      var x;
      e.tooltip && ((x = l.value) === null || x === void 0 || x.setShow(!1));
    });
    const g = () => f("span", Object.assign({}, Pt(r, {
      class: [`${o.value}-ellipsis`, e.lineClamp !== void 0 ? Oa(o.value) : void 0, e.expandTrigger === "click" ? Ma(o.value, "pointer") : void 0],
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
      const b = u.value, y = Oa(o.value);
      e.lineClamp !== void 0 ? p(x, y, "add") : p(x, y, "remove");
      for (const B in b)
        x.style[B] !== b[B] && (x.style[B] = b[B]);
    }
    function h(x, b) {
      const y = Ma(o.value, "pointer");
      e.expandTrigger === "click" && !b ? p(x, y, "add") : p(x, y, "remove");
    }
    function p(x, b, y) {
      y === "add" ? x.classList.contains(b) || x.classList.add(b) : x.classList.contains(b) && x.classList.remove(b);
    }
    return {
      mergedTheme: i,
      triggerRef: a,
      triggerInnerRef: s,
      tooltipRef: l,
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
      return f(zc, Object.assign({
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
}), zC = J({
  name: "PerformantEllipsis",
  props: Ec,
  inheritAttrs: !1,
  setup(e, {
    attrs: t,
    slots: r
  }) {
    const o = L(!1), i = mu();
    return Yn("-ellipsis", Ac, i), {
      mouseEntered: o,
      renderTrigger: () => {
        const {
          lineClamp: s
        } = e, l = i.value;
        return f("span", Object.assign({}, Pt(t, {
          class: [`${l}-ellipsis`, s !== void 0 ? Oa(l) : void 0, e.expandTrigger === "click" ? Ma(l, "pointer") : void 0],
          style: s === void 0 ? {
            textOverflow: "ellipsis"
          } : {
            "-webkit-line-clamp": s
          }
        }), {
          onMouseenter: () => {
            o.value = !0;
          }
        }), s ? r : f("span", null, r));
      }
    };
  },
  render() {
    return this.mouseEntered ? f(Ei, Pt({}, this.$attrs, this.$props), this.$slots) : this.renderTrigger();
  }
}), AC = J({
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
      render: s,
      key: l,
      ellipsis: d
    } = r;
    if (s && !t ? a = s(o, this.index) : t ? a = (e = o[l]) === null || e === void 0 ? void 0 : e.value : a = i ? i(Po(o, l), o, r) : Po(o, l), d)
      if (typeof d == "object") {
        const {
          mergedTheme: u
        } = this;
        return r.ellipsisComponent === "performant-ellipsis" ? f(zC, Object.assign({}, d, {
          theme: u.peers.Ellipsis,
          themeOverrides: u.peerOverrides.Ellipsis
        }), {
          default: () => a
        }) : f(Ei, Object.assign({}, d, {
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
}), yd = J({
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
    }, f(Br, null, {
      default: () => this.loading ? f(Zn, {
        key: "loading",
        clsPrefix: this.clsPrefix,
        radius: 85,
        strokeWidth: 15,
        scale: 0.88
      }) : this.renderExpandIcon ? this.renderExpandIcon({
        expanded: this.expanded,
        rowData: this.rowData
      }) : f(Ct, {
        clsPrefix: e,
        key: "base-icon"
      }, {
        default: () => f(Bl, null)
      })
    }));
  }
}), EC = J({
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
    } = Ae(e), o = kt("DataTable", r, t), {
      mergedClsPrefixRef: i,
      mergedThemeRef: a,
      localeRef: s
    } = pe(vn), l = L(e.value), d = E(() => {
      const {
        value: h
      } = l;
      return Array.isArray(h) ? h : null;
    }), u = E(() => {
      const {
        value: h
      } = l;
      return fa(e.column) ? Array.isArray(h) && h.length && h[0] || null : Array.isArray(h) ? null : h;
    });
    function c(h) {
      e.onChange(h);
    }
    function v(h) {
      e.multiple && Array.isArray(h) ? l.value = h : fa(e.column) && !Array.isArray(h) ? l.value = [h] : l.value = h;
    }
    function g() {
      c(l.value), e.onConfirm();
    }
    function m() {
      e.multiple || fa(e.column) ? c([]) : c(null), e.onClear();
    }
    return {
      mergedClsPrefix: i,
      rtlEnabled: o,
      mergedTheme: a,
      locale: s,
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
    }, f(On, null, {
      default: () => {
        const {
          checkboxGroupValue: o,
          handleChange: i
        } = this;
        return this.multiple ? f(fc, {
          value: o,
          class: `${r}-data-table-filter-menu__group`,
          onUpdateValue: i
        }, {
          default: () => this.options.map((a) => f(Ai, {
            key: a.value,
            theme: e.peers.Checkbox,
            themeOverrides: e.peerOverrides.Checkbox,
            value: a.value
          }, {
            default: () => a.label
          }))
        }) : f($c, {
          name: this.radioGroupName,
          class: `${r}-data-table-filter-menu__group`,
          value: this.radioGroupValue,
          onUpdateValue: this.handleChange
        }, {
          default: () => this.options.map((a) => f(Ml, {
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
    }, f(hr, {
      size: "tiny",
      theme: e.peers.Button,
      themeOverrides: e.peerOverrides.Button,
      onClick: this.handleClearClick
    }, {
      default: () => t.clear
    }), f(hr, {
      theme: e.peers.Button,
      themeOverrides: e.peerOverrides.Button,
      type: "primary",
      size: "tiny",
      onClick: this.handleConfirmClick
    }, {
      default: () => t.confirm
    })));
  }
}), DC = J({
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
function TC(e, t, r) {
  const o = Object.assign({}, e);
  return o[t] = r, o;
}
const OC = J({
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
      paginationBehaviorOnFilterRef: s,
      doUpdatePage: l,
      doUpdateFilters: d,
      filterIconPopoverPropsRef: u
    } = pe(vn), c = L(!1), v = i, g = E(() => e.column.filterMultiple !== !1), m = E(() => {
      const B = v.value[e.column.key];
      if (B === void 0) {
        const {
          value: C
        } = g;
        return C ? [] : null;
      }
      return B;
    }), h = E(() => {
      const {
        value: B
      } = m;
      return Array.isArray(B) ? B.length > 0 : B !== null;
    }), p = E(() => {
      var B, C;
      return ((C = (B = t == null ? void 0 : t.value) === null || B === void 0 ? void 0 : B.DataTable) === null || C === void 0 ? void 0 : C.renderFilter) || e.column.renderFilter;
    });
    function x(B) {
      const C = TC(v.value, e.column.key, B);
      d(C, e.column), s.value === "first" && l(1);
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
    return f(Rr, Object.assign({
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
          return f(DC, {
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
        }) : f(Ct, {
          clsPrefix: t
        }, {
          default: () => f(Lx, null)
        }));
      },
      default: () => {
        const {
          renderFilterMenu: i
        } = this.column;
        return i ? i({
          hide: r
        }) : f(EC, {
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
}), MC = J({
  name: "ColumnResizeButton",
  props: {
    onResizeStart: Function,
    onResize: Function,
    onResizeEnd: Function
  },
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = pe(vn), r = L(!1);
    let o = 0;
    function i(d) {
      return d.clientX;
    }
    function a(d) {
      var u;
      d.preventDefault();
      const c = r.value;
      o = i(d), r.value = !0, c || (qe("mousemove", window, s), qe("mouseup", window, l), (u = e.onResizeStart) === null || u === void 0 || u.call(e));
    }
    function s(d) {
      var u;
      (u = e.onResize) === null || u === void 0 || u.call(e, i(d) - o);
    }
    function l() {
      var d;
      r.value = !1, (d = e.onResizeEnd) === null || d === void 0 || d.call(e), Ve("mousemove", window, s), Ve("mouseup", window, l);
    }
    return Bt(() => {
      Ve("mousemove", window, s), Ve("mouseup", window, l);
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
}), IC = J({
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
}), LC = J({
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
    } = pe(vn), i = E(() => r.value.find((d) => d.columnKey === e.column.key)), a = E(() => i.value !== void 0), s = E(() => {
      const {
        value: d
      } = i;
      return d && a.value ? d.order : !1;
    }), l = E(() => {
      var d, u;
      return ((u = (d = t == null ? void 0 : t.value) === null || d === void 0 ? void 0 : d.DataTable) === null || u === void 0 ? void 0 : u.renderSorter) || e.column.renderSorter;
    });
    return {
      mergedClsPrefix: o,
      active: a,
      mergedSortOrder: s,
      mergedRenderSorter: l
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
    return e ? f(IC, {
      render: e,
      order: t
    }) : f("span", {
      class: [`${r}-data-table-sorter`, t === "ascend" && `${r}-data-table-sorter--asc`, t === "descend" && `${r}-data-table-sorter--desc`]
    }, o ? o({
      order: t
    }) : f(Ct, {
      clsPrefix: r
    }, {
      default: () => f(zx, null)
    }));
  }
}), Il = "n-dropdown-menu", Di = "n-dropdown", Cd = "n-dropdown-option", Dc = J({
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
}), NC = J({
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
    } = pe(Il), {
      renderLabelRef: r,
      labelFieldRef: o,
      nodePropsRef: i,
      renderOptionRef: a
    } = pe(Di);
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
      renderOption: s
    } = this, {
      rawNode: l
    } = this.tmNode, d = f("div", Object.assign({
      class: `${t}-dropdown-option`
    }, i == null ? void 0 : i(l)), f("div", {
      class: `${t}-dropdown-option-body ${t}-dropdown-option-body--group`
    }, f("div", {
      "data-dropdown-option": !0,
      class: [`${t}-dropdown-option-body__prefix`, o && `${t}-dropdown-option-body__prefix--show-icon`]
    }, mt(l.icon)), f("div", {
      class: `${t}-dropdown-option-body__label`,
      "data-dropdown-option": !0
    }, a ? a(l) : mt((e = l.title) !== null && e !== void 0 ? e : l[this.labelField])), f("div", {
      class: [`${t}-dropdown-option-body__suffix`, r && `${t}-dropdown-option-body__suffix--has-submenu`],
      "data-dropdown-option": !0
    })));
    return s ? s({
      node: d,
      option: l
    }) : d;
  }
});
function HC(e) {
  const {
    textColorBase: t,
    opacity1: r,
    opacity2: o,
    opacity3: i,
    opacity4: a,
    opacity5: s
  } = e;
  return {
    color: t,
    opacity1Depth: r,
    opacity2Depth: o,
    opacity3Depth: i,
    opacity4Depth: a,
    opacity5Depth: s
  };
}
const jC = {
  name: "Icon",
  common: Ye,
  self: HC
}, WC = z("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`, [I("color-transition", {
  transition: "color .3s var(--n-bezier)"
}), I("depth", {
  color: "var(--n-color)"
}, [D("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), D("svg", {
  height: "1em",
  width: "1em"
})]), _C = Object.assign(Object.assign({}, ve.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), Fo = J({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: _C,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Icon", "-icon", WC, jC, e, t), i = E(() => {
      const {
        depth: s
      } = e, {
        common: {
          cubicBezierEaseInOut: l
        },
        self: d
      } = o.value;
      if (s !== void 0) {
        const {
          color: u,
          [`opacity${s}Depth`]: c
        } = d;
        return {
          "--n-bezier": l,
          "--n-color": u,
          "--n-opacity": c
        };
      }
      return {
        "--n-bezier": l,
        "--n-color": "",
        "--n-opacity": ""
      };
    }), a = r ? Xe("icon", E(() => `${e.depth || "d"}`), i, e) : void 0;
    return {
      mergedClsPrefix: t,
      mergedStyle: E(() => {
        const {
          size: s,
          color: l
        } = e;
        return {
          fontSize: bt(s),
          color: l
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
      themeClass: s
    } = this;
    return !((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && Dt("icon", "don't wrap `n-icon` inside `n-icon`"), a == null || a(), f("i", Pt(this.$attrs, {
      role: "img",
      class: [`${o}-icon`, s, {
        [`${o}-icon--depth`]: r,
        [`${o}-icon--color-transition`]: r !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), i ? f(i) : this.$slots);
  }
});
function Ia(e, t) {
  return e.type === "submenu" || e.type === void 0 && e[t] !== void 0;
}
function VC(e) {
  return e.type === "group";
}
function Tc(e) {
  return e.type === "divider";
}
function UC(e) {
  return e.type === "render";
}
const Oc = J({
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
    const t = pe(Di), {
      hoverKeyRef: r,
      keyboardKeyRef: o,
      lastToggledSubmenuKeyRef: i,
      pendingKeyPathRef: a,
      activeKeyPathRef: s,
      animatedRef: l,
      mergedShowRef: d,
      renderLabelRef: u,
      renderIconRef: c,
      labelFieldRef: v,
      childrenFieldRef: g,
      renderOptionRef: m,
      nodePropsRef: h,
      menuPropsRef: p
    } = t, x = pe(Cd, null), b = pe(Il), y = pe(Gr), B = E(() => e.tmNode.rawNode), C = E(() => {
      const {
        value: H
      } = g;
      return Ia(e.tmNode.rawNode, H);
    }), P = E(() => {
      const {
        disabled: H
      } = e.tmNode;
      return H;
    }), k = E(() => {
      if (!C.value) return !1;
      const {
        key: H,
        disabled: U
      } = e.tmNode;
      if (U) return !1;
      const {
        value: ee
      } = r, {
        value: Y
      } = o, {
        value: K
      } = i, {
        value: j
      } = a;
      return ee !== null ? j.includes(H) : Y !== null ? j.includes(H) && j[j.length - 1] !== H : K !== null ? j.includes(H) : !1;
    }), S = E(() => o.value === null && !l.value), w = _h(k, 300, S), R = E(() => !!(x != null && x.enteringSubmenuRef.value)), F = L(!1);
    ze(Cd, {
      enteringSubmenuRef: F
    });
    function N() {
      F.value = !0;
    }
    function $() {
      F.value = !1;
    }
    function n() {
      const {
        parentKey: H,
        tmNode: U
      } = e;
      U.disabled || d.value && (i.value = H, o.value = null, r.value = U.key);
    }
    function O() {
      const {
        tmNode: H
      } = e;
      H.disabled || d.value && r.value !== H.key && n();
    }
    function M(H) {
      if (e.tmNode.disabled || !d.value) return;
      const {
        relatedTarget: U
      } = H;
      U && !Jt({
        target: U
      }, "dropdownOption") && !Jt({
        target: U
      }, "scrollbarRail") && (r.value = null);
    }
    function W() {
      const {
        value: H
      } = C, {
        tmNode: U
      } = e;
      d.value && !H && !U.disabled && (t.doSelect(U.key, U.rawNode), t.doUpdateShow(!1));
    }
    return {
      labelField: v,
      renderLabel: u,
      renderIcon: c,
      siblingHasIcon: b.showIconRef,
      siblingHasSubmenu: b.hasSubmenuRef,
      menuProps: p,
      popoverBody: y,
      animated: l,
      mergedShowSubmenu: E(() => w.value && !R.value),
      rawNode: B,
      hasSubmenu: C,
      pending: Ge(() => {
        const {
          value: H
        } = a, {
          key: U
        } = e.tmNode;
        return H.includes(U);
      }),
      childActive: Ge(() => {
        const {
          value: H
        } = s, {
          key: U
        } = e.tmNode, ee = H.findIndex((Y) => U === Y);
        return ee === -1 ? !1 : ee < H.length - 1;
      }),
      active: Ge(() => {
        const {
          value: H
        } = s, {
          key: U
        } = e.tmNode, ee = H.findIndex((Y) => U === Y);
        return ee === -1 ? !1 : ee === H.length - 1;
      }),
      mergedDisabled: P,
      renderOption: m,
      nodeProps: h,
      handleClick: W,
      handleMouseMove: O,
      handleMouseEnter: n,
      handleMouseLeave: M,
      handleSubmenuBeforeEnter: N,
      handleSubmenuAfterEnter: $
    };
  },
  render() {
    var e, t;
    const {
      animated: r,
      rawNode: o,
      mergedShowSubmenu: i,
      clsPrefix: a,
      siblingHasIcon: s,
      siblingHasSubmenu: l,
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
      h = f(Mc, Object.assign({}, y, {
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
    }, x), f("div", Pt(p, g), [f("div", {
      class: [`${a}-dropdown-option-body__prefix`, s && `${a}-dropdown-option-body__prefix--show-icon`]
    }, [u ? u(o) : mt(o.icon)]), f("div", {
      "data-dropdown-option": !0,
      class: `${a}-dropdown-option-body__label`
    }, d ? d(o) : mt((t = o[this.labelField]) !== null && t !== void 0 ? t : o.title)), f("div", {
      "data-dropdown-option": !0,
      class: [`${a}-dropdown-option-body__suffix`, l && `${a}-dropdown-option-body__suffix--has-submenu`]
    }, this.hasSubmenu ? f(Fo, null, {
      default: () => f(Bl, null)
    }) : null)]), this.hasSubmenu ? f(ol, null, {
      default: () => [f(il, null, {
        default: () => f("div", {
          class: `${a}-dropdown-offset-container`
        }, f(sl, {
          show: this.mergedShowSubmenu,
          placement: this.placement,
          to: m && this.popoverBody || void 0,
          teleportDisabled: !m
        }, {
          default: () => f("div", {
            class: `${a}-dropdown-menu-wrapper`
          }, r ? f(It, {
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
}), KC = J({
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
    return f(je, null, f(NC, {
      clsPrefix: r,
      tmNode: e,
      key: e.key
    }), o == null ? void 0 : o.map((i) => {
      const {
        rawNode: a
      } = i;
      return a.show === !1 ? null : Tc(a) ? f(Dc, {
        clsPrefix: r,
        key: i.key
      }) : i.isGroup ? (Dt("dropdown", "`group` node is not allowed to be put in `group` node."), null) : f(Oc, {
        clsPrefix: r,
        tmNode: i,
        parentKey: t,
        key: i.key
      });
    }));
  }
}), qC = J({
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
}), Mc = J({
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
    } = pe(Di);
    ze(Il, {
      showIconRef: E(() => {
        const i = t.value;
        return e.tmNodes.some((a) => {
          var s;
          if (a.isGroup)
            return (s = a.children) === null || s === void 0 ? void 0 : s.some(({
              rawNode: d
            }) => i ? i(d) : d.icon);
          const {
            rawNode: l
          } = a;
          return i ? i(l) : l.icon;
        });
      }),
      hasSubmenuRef: E(() => {
        const {
          value: i
        } = r;
        return e.tmNodes.some((a) => {
          var s;
          if (a.isGroup)
            return (s = a.children) === null || s === void 0 ? void 0 : s.some(({
              rawNode: d
            }) => Ia(d, i));
          const {
            rawNode: l
          } = a;
          return Ia(l, i);
        });
      })
    });
    const o = L(null);
    return ze(To, null), ze(Do, null), ze(Gr, o), {
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
      return a.show === !1 ? null : UC(a) ? f(qC, {
        tmNode: i,
        key: i.key
      }) : Tc(a) ? f(Dc, {
        clsPrefix: t,
        key: i.key
      }) : VC(a) ? f(KC, {
        clsPrefix: t,
        tmNode: i,
        parentKey: e,
        key: i.key
      }) : f(Oc, {
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
    }, r ? f(Yu, {
      contentClass: `${t}-dropdown-menu__content`
    }, {
      default: () => o
    }) : o, this.showArrow ? tc({
      clsPrefix: t,
      arrowStyle: this.arrowStyle,
      arrowClass: void 0,
      arrowWrapperClass: void 0,
      arrowWrapperStyle: void 0
    }) : null);
  }
}), GC = z("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [Io(), z("dropdown-option", `
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
 `), Ue("disabled", [I("pending", `
 color: var(--n-option-text-color-hover);
 `, [T("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), D("&::before", "background-color: var(--n-option-color-hover);")]), I("active", `
 color: var(--n-option-text-color-active);
 `, [T("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), D("&::before", "background-color: var(--n-option-color-active);")]), I("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [T("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), I("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), I("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [T("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [I("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), T("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [I("show-icon", `
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
 `, [I("has-submenu", `
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
 `)]), Ue("scrollable", `
 padding: var(--n-padding);
 `), I("scrollable", [T("content", `
 padding: var(--n-padding);
 `)])]), XC = {
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
}, YC = Object.keys(fr), ZC = Object.assign(Object.assign(Object.assign({}, fr), XC), ve.props), Ic = J({
  name: "Dropdown",
  inheritAttrs: !1,
  props: ZC,
  setup(e) {
    const t = L(!1), r = Et(ie(e, "show"), t), o = E(() => {
      const {
        keyField: $,
        childrenField: n
      } = e;
      return $i(e.options, {
        getKey(O) {
          return O[$];
        },
        getDisabled(O) {
          return O.disabled === !0;
        },
        getIgnored(O) {
          return O.type === "divider" || O.type === "render";
        },
        getChildren(O) {
          return O[n];
        }
      });
    }), i = E(() => o.value.treeNodes), a = L(null), s = L(null), l = L(null), d = E(() => {
      var $, n, O;
      return (O = (n = ($ = a.value) !== null && $ !== void 0 ? $ : s.value) !== null && n !== void 0 ? n : l.value) !== null && O !== void 0 ? O : null;
    }), u = E(() => o.value.getPath(d.value).keyPath), c = E(() => o.value.getPath(e.value).keyPath), v = Ge(() => e.keyboard && r.value);
    Hh({
      keydown: {
        ArrowUp: {
          prevent: !0,
          handler: P
        },
        ArrowRight: {
          prevent: !0,
          handler: C
        },
        ArrowDown: {
          prevent: !0,
          handler: k
        },
        ArrowLeft: {
          prevent: !0,
          handler: B
        },
        Enter: {
          prevent: !0,
          handler: S
        },
        Escape: y
      }
    }, v);
    const {
      mergedClsPrefixRef: g,
      inlineThemeDisabled: m
    } = Ae(e), h = ve("Dropdown", "-dropdown", GC, Cc, e, g);
    ze(Di, {
      labelFieldRef: ie(e, "labelField"),
      childrenFieldRef: ie(e, "childrenField"),
      renderLabelRef: ie(e, "renderLabel"),
      renderIconRef: ie(e, "renderIcon"),
      hoverKeyRef: a,
      keyboardKeyRef: s,
      lastToggledSubmenuKeyRef: l,
      pendingKeyPathRef: u,
      activeKeyPathRef: c,
      animatedRef: ie(e, "animated"),
      mergedShowRef: r,
      nodePropsRef: ie(e, "nodeProps"),
      renderOptionRef: ie(e, "renderOption"),
      menuPropsRef: ie(e, "menuProps"),
      doSelect: p,
      doUpdateShow: x
    }), Me(r, ($) => {
      !e.animated && !$ && b();
    });
    function p($, n) {
      const {
        onSelect: O
      } = e;
      O && ne(O, $, n);
    }
    function x($) {
      const {
        "onUpdate:show": n,
        onUpdateShow: O
      } = e;
      n && ne(n, $), O && ne(O, $), t.value = $;
    }
    function b() {
      a.value = null, s.value = null, l.value = null;
    }
    function y() {
      x(!1);
    }
    function B() {
      R("left");
    }
    function C() {
      R("right");
    }
    function P() {
      R("up");
    }
    function k() {
      R("down");
    }
    function S() {
      const $ = w();
      $ != null && $.isLeaf && r.value && (p($.key, $.rawNode), x(!1));
    }
    function w() {
      var $;
      const {
        value: n
      } = o, {
        value: O
      } = d;
      return !n || O === null ? null : ($ = n.getNode(O)) !== null && $ !== void 0 ? $ : null;
    }
    function R($) {
      const {
        value: n
      } = d, {
        value: {
          getFirstAvailableNode: O
        }
      } = o;
      let M = null;
      if (n === null) {
        const W = O();
        W !== null && (M = W.key);
      } else {
        const W = w();
        if (W) {
          let H;
          switch ($) {
            case "down":
              H = W.getNext();
              break;
            case "up":
              H = W.getPrev();
              break;
            case "right":
              H = W.getChild();
              break;
            case "left":
              H = W.getParent();
              break;
          }
          H && (M = H.key);
        }
      }
      M !== null && (a.value = null, s.value = M);
    }
    const F = E(() => {
      const {
        size: $,
        inverted: n
      } = e, {
        common: {
          cubicBezierEaseInOut: O
        },
        self: M
      } = h.value, {
        padding: W,
        dividerColor: H,
        borderRadius: U,
        optionOpacityDisabled: ee,
        [Z("optionIconSuffixWidth", $)]: Y,
        [Z("optionSuffixWidth", $)]: K,
        [Z("optionIconPrefixWidth", $)]: j,
        [Z("optionPrefixWidth", $)]: q,
        [Z("fontSize", $)]: X,
        [Z("optionHeight", $)]: ae,
        [Z("optionIconSize", $)]: le
      } = M, ce = {
        "--n-bezier": O,
        "--n-font-size": X,
        "--n-padding": W,
        "--n-border-radius": U,
        "--n-option-height": ae,
        "--n-option-prefix-width": q,
        "--n-option-icon-prefix-width": j,
        "--n-option-suffix-width": K,
        "--n-option-icon-suffix-width": Y,
        "--n-option-icon-size": le,
        "--n-divider-color": H,
        "--n-option-opacity-disabled": ee
      };
      return n ? (ce["--n-color"] = M.colorInverted, ce["--n-option-color-hover"] = M.optionColorHoverInverted, ce["--n-option-color-active"] = M.optionColorActiveInverted, ce["--n-option-text-color"] = M.optionTextColorInverted, ce["--n-option-text-color-hover"] = M.optionTextColorHoverInverted, ce["--n-option-text-color-active"] = M.optionTextColorActiveInverted, ce["--n-option-text-color-child-active"] = M.optionTextColorChildActiveInverted, ce["--n-prefix-color"] = M.prefixColorInverted, ce["--n-suffix-color"] = M.suffixColorInverted, ce["--n-group-header-text-color"] = M.groupHeaderTextColorInverted) : (ce["--n-color"] = M.color, ce["--n-option-color-hover"] = M.optionColorHover, ce["--n-option-color-active"] = M.optionColorActive, ce["--n-option-text-color"] = M.optionTextColor, ce["--n-option-text-color-hover"] = M.optionTextColorHover, ce["--n-option-text-color-active"] = M.optionTextColorActive, ce["--n-option-text-color-child-active"] = M.optionTextColorChildActive, ce["--n-prefix-color"] = M.prefixColor, ce["--n-suffix-color"] = M.suffixColor, ce["--n-group-header-text-color"] = M.groupHeaderTextColor), ce;
    }), N = m ? Xe("dropdown", E(() => `${e.size[0]}${e.inverted ? "i" : ""}`), F, e) : void 0;
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
      cssVars: m ? void 0 : F,
      themeClass: N == null ? void 0 : N.themeClass,
      onRender: N == null ? void 0 : N.onRender
    };
  },
  render() {
    const e = (o, i, a, s, l) => {
      var d;
      const {
        mergedClsPrefix: u,
        menuProps: c
      } = this;
      (d = this.onRender) === null || d === void 0 || d.call(this);
      const v = (c == null ? void 0 : c(void 0, this.tmNodes.map((m) => m.rawNode))) || {}, g = {
        ref: pu(i),
        class: [o, `${u}-dropdown`, this.themeClass],
        clsPrefix: u,
        tmNodes: this.tmNodes,
        style: [...a, this.cssVars],
        showArrow: this.showArrow,
        arrowStyle: this.arrowStyle,
        scrollable: this.scrollable,
        onMouseenter: s,
        onMouseleave: l
      };
      return f(Mc, Pt(this.$attrs, g, v));
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
    return f(Rr, Object.assign({}, zn(this.$props, YC), r), {
      trigger: () => {
        var o, i;
        return (i = (o = this.$slots).default) === null || i === void 0 ? void 0 : i.call(o);
      }
    });
  }
}), Lc = "_n_all__", Nc = "_n_none__";
function JC(e, t, r, o) {
  return e ? (i) => {
    for (const a of e)
      switch (i) {
        case Lc:
          r(!0);
          return;
        case Nc:
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
function QC(e, t) {
  return e ? e.map((r) => {
    switch (r) {
      case "all":
        return {
          label: t.checkTableAll,
          key: Lc
        };
      case "none":
        return {
          label: t.uncheckTableAll,
          key: Nc
        };
      default:
        return r;
    }
  }) : [];
}
const ew = J({
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
      doUncheckAll: s
    } = pe(vn), l = E(() => JC(o.value, i, a, s)), d = E(() => QC(o.value, r.value));
    return () => {
      var u, c, v, g;
      const {
        clsPrefix: m
      } = e;
      return f(Ic, {
        theme: (c = (u = t.theme) === null || u === void 0 ? void 0 : u.peers) === null || c === void 0 ? void 0 : c.Dropdown,
        themeOverrides: (g = (v = t.themeOverrides) === null || v === void 0 ? void 0 : v.peers) === null || g === void 0 ? void 0 : g.Dropdown,
        options: d.value,
        onSelect: l.value
      }, {
        default: () => f(Ct, {
          clsPrefix: m,
          class: `${m}-data-table-check-extra`
        }, {
          default: () => f(Gu, null)
        })
      });
    };
  }
});
function va(e) {
  return typeof e.title == "function" ? e.title(e) : e.title;
}
const tw = J({
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
}), Hc = J({
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
      someRowsCheckedRef: s,
      rowsRef: l,
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
      handleTableHeaderScroll: B,
      deriveNextSorter: C,
      doUncheckAll: P,
      doCheckAll: k
    } = pe(vn), S = L(), w = L({});
    function R(M) {
      const W = w.value[M];
      return W == null ? void 0 : W.getBoundingClientRect().width;
    }
    function F() {
      a.value ? P() : k();
    }
    function N(M, W) {
      if (Jt(M, "dataTableFilter") || Jt(M, "dataTableResizable") || !ha(W)) return;
      const H = v.value.find((ee) => ee.columnKey === W.key) || null, U = mC(W, H);
      C(U);
    }
    const $ = /* @__PURE__ */ new Map();
    function n(M) {
      $.set(M.key, R(M.key));
    }
    function O(M, W) {
      const H = $.get(M.key);
      if (H === void 0)
        return;
      const U = H + W, ee = vC(U, M.minWidth, M.maxWidth);
      b(U, ee, M, R), y(M, ee);
    }
    return {
      cellElsRef: w,
      componentId: g,
      mergedSortState: v,
      mergedClsPrefix: e,
      scrollX: t,
      fixedColumnLeftMap: r,
      fixedColumnRightMap: o,
      currentPage: i,
      allRowsChecked: a,
      someRowsChecked: s,
      rows: l,
      cols: d,
      mergedTheme: u,
      checkOptions: c,
      mergedTableLayout: m,
      headerCheckboxDisabled: h,
      headerHeight: x,
      virtualScrollHeader: p,
      virtualListRef: S,
      handleCheckboxUpdateChecked: F,
      handleColHeaderClick: N,
      handleTableHeaderScroll: B,
      handleColumnResizeStart: n,
      handleColumnResize: O
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
      someRowsChecked: s,
      rows: l,
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
      handleColumnResizeStart: B,
      handleColumnResize: C
    } = this, P = (R, F, N) => R.map(({
      column: $,
      colIndex: n,
      colSpan: O,
      rowSpan: M,
      isLast: W
    }) => {
      var H, U;
      const ee = un($), {
        ellipsis: Y
      } = $, K = () => $.type === "selection" ? $.multiple !== !1 ? f(je, null, f(Ai, {
        key: i,
        privateInsideTable: !0,
        checked: a,
        indeterminate: s,
        disabled: h,
        onUpdateChecked: y
      }), c ? f(ew, {
        clsPrefix: t
      }) : null) : null : f(je, null, f("div", {
        class: `${t}-data-table-th__title-wrapper`
      }, f("div", {
        class: `${t}-data-table-th__title`
      }, Y === !0 || Y && !Y.tooltip ? f("div", {
        class: `${t}-data-table-th__ellipsis`
      }, va($)) : Y && typeof Y == "object" ? f(Ei, Object.assign({}, Y, {
        theme: u.peers.Ellipsis,
        themeOverrides: u.peerOverrides.Ellipsis
      }), {
        default: () => va($)
      }) : va($)), ha($) ? f(LC, {
        column: $
      }) : null), bd($) ? f(OC, {
        column: $,
        options: $.filterOptions
      }) : null, Rc($) ? f(MC, {
        onResizeStart: () => {
          B($);
        },
        onResize: (ae) => {
          C($, ae);
        }
      }) : null), j = ee in r, q = ee in o, X = F && !$.fixed ? "div" : "th";
      return f(X, {
        ref: (ae) => e[ee] = ae,
        key: ee,
        style: [F && !$.fixed ? {
          position: "absolute",
          left: wt(F(n)),
          top: 0,
          bottom: 0
        } : {
          left: wt((H = r[ee]) === null || H === void 0 ? void 0 : H.start),
          right: wt((U = o[ee]) === null || U === void 0 ? void 0 : U.start)
        }, {
          width: wt($.width),
          textAlign: $.titleAlign || $.align,
          height: N
        }],
        colspan: O,
        rowspan: M,
        "data-col-key": ee,
        class: [`${t}-data-table-th`, (j || q) && `${t}-data-table-th--fixed-${j ? "left" : "right"}`, {
          [`${t}-data-table-th--sorting`]: Pc($, p),
          [`${t}-data-table-th--filterable`]: bd($),
          [`${t}-data-table-th--sortable`]: ha($),
          [`${t}-data-table-th--selection`]: $.type === "selection",
          [`${t}-data-table-th--last`]: W
        }, $.className],
        onClick: $.type !== "selection" && $.type !== "expand" && !("children" in $) ? (ae) => {
          b(ae, $);
        } : void 0
      }, K());
    });
    if (x) {
      const {
        headerHeight: R
      } = this;
      let F = 0, N = 0;
      return d.forEach(($) => {
        $.column.fixed === "left" ? F++ : $.column.fixed === "right" && N++;
      }), f(ul, {
        ref: "virtualListRef",
        class: `${t}-data-table-base-table-header`,
        style: {
          height: wt(R)
        },
        onScroll: this.handleTableHeaderScroll,
        columns: d,
        itemSize: R,
        showScrollbar: !1,
        items: [{}],
        itemResizable: !1,
        visibleItemsTag: tw,
        visibleItemsProps: {
          clsPrefix: t,
          id: v,
          cols: d,
          width: bt(this.scrollX)
        },
        renderItemWithCols: ({
          startColIndex: $,
          endColIndex: n,
          getLeft: O
        }) => {
          const M = d.map((H, U) => ({
            column: H.column,
            isLast: U === d.length - 1,
            colIndex: H.index,
            colSpan: 1,
            rowSpan: 1
          })).filter(({
            column: H
          }, U) => !!($ <= U && U <= n || H.fixed)), W = P(M, O, wt(R));
          return W.splice(F, 0, f("th", {
            colspan: d.length - F - N,
            style: {
              pointerEvents: "none",
              visibility: "hidden",
              height: 0
            }
          })), f("tr", {
            style: {
              position: "relative"
            }
          }, W);
        }
      }, {
        default: ({
          renderedItemWithCols: $
        }) => $
      });
    }
    const k = f("thead", {
      class: `${t}-data-table-thead`,
      "data-n-id": v
    }, l.map((R) => f("tr", {
      class: `${t}-data-table-tr`
    }, P(R, null, void 0))));
    if (!g)
      return k;
    const {
      handleTableHeaderScroll: S,
      scrollX: w
    } = this;
    return f("div", {
      class: `${t}-data-table-base-table-header`,
      onScroll: S
    }, f("table", {
      class: `${t}-data-table-table`,
      style: {
        minWidth: bt(w),
        tableLayout: m
      }
    }, f("colgroup", null, d.map((R) => f("col", {
      key: R.key,
      style: R.style
    }))), k));
  }
});
function nw(e, t) {
  const r = [];
  function o(i, a) {
    i.forEach((s) => {
      s.children && t.has(s.key) ? (r.push({
        tmNode: s,
        striped: !1,
        key: s.key,
        index: a
      }), o(s.children, a)) : r.push({
        key: s.key,
        tmNode: s,
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
const rw = J({
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
}), ow = J({
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
      scrollXRef: s,
      colsRef: l,
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
      hoverKeyRef: B,
      summaryRef: C,
      mergedSortStateRef: P,
      virtualScrollRef: k,
      virtualScrollXRef: S,
      heightForRowRef: w,
      minRowHeightRef: R,
      componentId: F,
      mergedTableLayoutRef: N,
      childTriggerColIndexRef: $,
      indentRef: n,
      rowPropsRef: O,
      maxHeightRef: M,
      stripedRef: W,
      loadingRef: H,
      onLoadRef: U,
      loadingKeySetRef: ee,
      expandableRef: Y,
      stickyExpandedRowsRef: K,
      renderExpandIconRef: j,
      summaryPlacementRef: q,
      treeMateRef: X,
      scrollbarPropsRef: ae,
      setHeaderScrollLeft: le,
      doUpdateExpandedRowKeys: ce,
      handleTableBodyScroll: be,
      doCheck: G,
      doUncheck: ue,
      renderCell: Pe
    } = pe(vn), xe = pe(hn), Fe = L(null), $e = L(null), ut = L(null), ot = Ge(() => d.value.length === 0), vt = Ge(() => e.showHeader || !ot.value), gt = Ge(() => e.showHeader || ot.value);
    let ye = "";
    const Ce = E(() => new Set(o.value));
    function Ee(fe) {
      var ke;
      return (ke = X.value.getNode(fe)) === null || ke === void 0 ? void 0 : ke.rawNode;
    }
    function Le(fe, ke, A) {
      const V = Ee(fe.key);
      if (!V) {
        Dt("data-table", `fail to get row data with key ${fe.key}`);
        return;
      }
      if (A) {
        const Q = d.value.findIndex((se) => se.key === ye);
        if (Q !== -1) {
          const se = d.value.findIndex((Se) => Se.key === fe.key), de = Math.min(Q, se), ge = Math.max(Q, se), me = [];
          d.value.slice(de, ge + 1).forEach((Se) => {
            Se.disabled || me.push(Se.key);
          }), ke ? G(me, !1, V) : ue(me, V), ye = fe.key;
          return;
        }
      }
      ke ? G(fe.key, !1, V) : ue(fe.key, V), ye = fe.key;
    }
    function nt(fe) {
      const ke = Ee(fe.key);
      if (!ke) {
        Dt("data-table", `fail to get row data with key ${fe.key}`);
        return;
      }
      G(fe.key, !0, ke);
    }
    function oe() {
      if (!vt.value) {
        const {
          value: ke
        } = ut;
        return ke || null;
      }
      if (k.value)
        return ct();
      const {
        value: fe
      } = Fe;
      return fe ? fe.containerRef : null;
    }
    function he(fe, ke) {
      var A;
      if (ee.value.has(fe)) return;
      const {
        value: V
      } = o, Q = V.indexOf(fe), se = Array.from(V);
      ~Q ? (se.splice(Q, 1), ce(se)) : ke && !ke.isLeaf && !ke.shallowLoaded ? (ee.value.add(fe), (A = U.value) === null || A === void 0 || A.call(U, ke.rawNode).then(() => {
        const {
          value: de
        } = o, ge = Array.from(de);
        ~ge.indexOf(fe) || ge.push(fe), ce(ge);
      }).finally(() => {
        ee.value.delete(fe);
      })) : (se.push(fe), ce(se));
    }
    function Te() {
      B.value = null;
    }
    function ct() {
      const {
        value: fe
      } = $e;
      return (fe == null ? void 0 : fe.listElRef) || null;
    }
    function Tt() {
      const {
        value: fe
      } = $e;
      return (fe == null ? void 0 : fe.itemsElRef) || null;
    }
    function Ot(fe) {
      var ke;
      be(fe), (ke = Fe.value) === null || ke === void 0 || ke.sync();
    }
    function xt(fe) {
      var ke;
      const {
        onResize: A
      } = e;
      A && A(fe), (ke = Fe.value) === null || ke === void 0 || ke.sync();
    }
    const at = {
      getScrollContainer: oe,
      scrollTo(fe, ke) {
        var A, V;
        k.value ? (A = $e.value) === null || A === void 0 || A.scrollTo(fe, ke) : (V = Fe.value) === null || V === void 0 || V.scrollTo(fe, ke);
      }
    }, St = D([({
      props: fe
    }) => {
      const ke = (V) => V === null ? null : D(`[data-n-id="${fe.componentId}"] [data-col-key="${V}"]::after`, {
        boxShadow: "var(--n-box-shadow-after)"
      }), A = (V) => V === null ? null : D(`[data-n-id="${fe.componentId}"] [data-col-key="${V}"]::before`, {
        boxShadow: "var(--n-box-shadow-before)"
      });
      return D([ke(fe.leftActiveFixedColKey), A(fe.rightActiveFixedColKey), fe.leftActiveFixedChildrenColKeys.map((V) => ke(V)), fe.rightActiveFixedChildrenColKeys.map((V) => A(V))]);
    }]);
    let it = !1;
    return rt(() => {
      const {
        value: fe
      } = h, {
        value: ke
      } = p, {
        value: A
      } = x, {
        value: V
      } = b;
      if (!it && fe === null && A === null)
        return;
      const Q = {
        leftActiveFixedColKey: fe,
        leftActiveFixedChildrenColKeys: ke,
        rightActiveFixedColKey: A,
        rightActiveFixedChildrenColKeys: V,
        componentId: F
      };
      St.mount({
        id: `n-${F}`,
        force: !0,
        props: Q,
        anchorMetaName: _r,
        parent: xe == null ? void 0 : xe.styleMountTarget
      }), it = !0;
    }), Id(() => {
      St.unmount({
        id: `n-${F}`,
        parent: xe == null ? void 0 : xe.styleMountTarget
      });
    }), Object.assign({
      bodyWidth: r,
      summaryPlacement: q,
      dataTableSlots: t,
      componentId: F,
      scrollbarInstRef: Fe,
      virtualListRef: $e,
      emptyElRef: ut,
      summary: C,
      mergedClsPrefix: i,
      mergedTheme: a,
      scrollX: s,
      cols: l,
      loading: H,
      bodyShowHeaderOnly: gt,
      shouldDisplaySomeTablePart: vt,
      empty: ot,
      paginatedDataAndInfo: E(() => {
        const {
          value: fe
        } = W;
        let ke = !1;
        return {
          data: d.value.map(fe ? (V, Q) => (V.isLeaf || (ke = !0), {
            tmNode: V,
            key: V.key,
            striped: Q % 2 === 1,
            index: Q
          }) : (V, Q) => (V.isLeaf || (ke = !0), {
            tmNode: V,
            key: V.key,
            striped: !1,
            index: Q
          })),
          hasChildren: ke
        };
      }),
      rawPaginatedData: u,
      fixedColumnLeftMap: c,
      fixedColumnRightMap: v,
      currentPage: g,
      rowClassName: m,
      renderExpand: y,
      mergedExpandedRowKeySet: Ce,
      hoverKey: B,
      mergedSortState: P,
      virtualScroll: k,
      virtualScrollX: S,
      heightForRow: w,
      minRowHeight: R,
      mergedTableLayout: N,
      childTriggerColIndex: $,
      indent: n,
      rowProps: O,
      maxHeight: M,
      loadingKeySet: ee,
      expandable: Y,
      stickyExpandedRows: K,
      renderExpandIcon: j,
      scrollbarProps: ae,
      setHeaderScrollLeft: le,
      handleVirtualListScroll: Ot,
      handleVirtualListResize: xt,
      handleMouseleaveTable: Te,
      virtualListContainer: ct,
      virtualListContent: Tt,
      handleTableBodyScroll: be,
      handleCheckboxUpdateChecked: Le,
      handleRadioUpdateChecked: nt,
      handleUpdateExpanded: he,
      renderCell: Pe
    }, at);
  },
  render() {
    const {
      mergedTheme: e,
      scrollX: t,
      mergedClsPrefix: r,
      virtualScroll: o,
      maxHeight: i,
      mergedTableLayout: a,
      flexHeight: s,
      loadingKeySet: l,
      onResize: d,
      setHeaderScrollLeft: u
    } = this, c = t !== void 0 || i !== void 0 || s, v = !c && a === "auto", g = t !== void 0 || v, m = {
      minWidth: bt(t) || "100%"
    };
    t && (m.width = "100%");
    const h = f(On, Object.assign({}, this.scrollbarProps, {
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
          mergedTheme: B,
          fixedColumnLeftMap: C,
          fixedColumnRightMap: P,
          currentPage: k,
          rowClassName: S,
          mergedSortState: w,
          mergedExpandedRowKeySet: R,
          stickyExpandedRows: F,
          componentId: N,
          childTriggerColIndex: $,
          expandable: n,
          rowProps: O,
          handleMouseleaveTable: M,
          renderExpand: W,
          summary: H,
          handleCheckboxUpdateChecked: U,
          handleRadioUpdateChecked: ee,
          handleUpdateExpanded: Y,
          heightForRow: K,
          minRowHeight: j,
          virtualScrollX: q
        } = this, {
          length: X
        } = b;
        let ae;
        const {
          data: le,
          hasChildren: ce
        } = y, be = ce ? nw(le, R) : le;
        if (H) {
          const ye = H(this.rawPaginatedData);
          if (Array.isArray(ye)) {
            const Ce = ye.map((Ee, Le) => ({
              isSummaryRow: !0,
              key: `__n_summary__${Le}`,
              tmNode: {
                rawNode: Ee,
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
          width: wt(this.indent)
        } : void 0, ue = [];
        ae.forEach((ye) => {
          W && R.has(ye.key) && (!n || n(ye.tmNode.rawNode)) ? ue.push(ye, {
            isExpandedRow: !0,
            key: `${ye.key}-expand`,
            // solve key repeat of the expanded row
            tmNode: ye.tmNode,
            index: ye.index
          }) : ue.push(ye);
        });
        const {
          length: Pe
        } = ue, xe = {};
        le.forEach(({
          tmNode: ye
        }, Ce) => {
          xe[Ce] = ye.key;
        });
        const Fe = F ? this.bodyWidth : null, $e = Fe === null ? void 0 : `${Fe}px`, ut = this.virtualScrollX ? "div" : "td";
        let ot = 0, vt = 0;
        q && b.forEach((ye) => {
          ye.column.fixed === "left" ? ot++ : ye.column.fixed === "right" && vt++;
        });
        const gt = ({
          // Normal
          rowInfo: ye,
          displayedRowIndex: Ce,
          isVirtual: Ee,
          // Virtual X
          isVirtualX: Le,
          startColIndex: nt,
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
              class: [`${r}-data-table-td`, `${r}-data-table-td--last-col`, Ce + 1 === Pe && `${r}-data-table-td--last-row`],
              colspan: X
            }, F ? f("div", {
              class: `${r}-data-table-expand`,
              style: {
                width: $e
              }
            }, W(de, Te)) : W(de, Te)));
          }
          const ct = "isSummaryRow" in ye, Tt = !ct && ye.striped, {
            tmNode: Ot,
            key: xt
          } = ye, {
            rawNode: at
          } = Ot, St = R.has(xt), it = O ? O(at, Te) : void 0, fe = typeof S == "string" ? S : pC(at, Te, S), ke = Le ? b.filter((se, de) => !!(nt <= de && de <= oe || se.column.fixed)) : b, A = Le ? wt((K == null ? void 0 : K(at, Te)) || j) : void 0, V = ke.map((se) => {
            var de, ge, me, Se, Ne;
            const lt = se.index;
            if (Ce in p) {
              const st = p[Ce], pt = st.indexOf(lt);
              if (~pt)
                return st.splice(pt, 1), null;
            }
            const {
              column: Ke
            } = se, Lt = un(se), {
              rowSpan: Wt,
              colSpan: _t
            } = Ke, Kt = ct ? ((de = ye.tmNode.rawNode[Lt]) === null || de === void 0 ? void 0 : de.colSpan) || 1 : _t ? _t(at, Te) : 1, qt = ct ? ((ge = ye.tmNode.rawNode[Lt]) === null || ge === void 0 ? void 0 : ge.rowSpan) || 1 : Wt ? Wt(at, Te) : 1, on = lt + Kt === X, Gt = Ce + qt === Pe, _ = qt > 1;
            if (_ && (x[Ce] = {
              [lt]: []
            }), Kt > 1 || _)
              for (let st = Ce; st < Ce + qt; ++st) {
                _ && x[Ce][lt].push(xe[st]);
                for (let pt = lt; pt < lt + Kt; ++pt)
                  st === Ce && pt === lt || (st in p ? p[st].push(pt) : p[st] = [pt]);
              }
            const te = _ ? this.hoverKey : null, {
              cellProps: we
            } = Ke, Oe = we == null ? void 0 : we(at, Te), Ze = {
              "--indent-offset": ""
            }, He = Ke.fixed ? "td" : ut;
            return f(He, Object.assign({}, Oe, {
              key: Lt,
              style: [{
                textAlign: Ke.align || void 0,
                width: wt(Ke.width)
              }, Le && {
                height: A
              }, Le && !Ke.fixed ? {
                position: "absolute",
                left: wt(he(lt)),
                top: 0,
                bottom: 0
              } : {
                left: wt((me = C[Lt]) === null || me === void 0 ? void 0 : me.start),
                right: wt((Se = P[Lt]) === null || Se === void 0 ? void 0 : Se.start)
              }, Ze, (Oe == null ? void 0 : Oe.style) || ""],
              colspan: Kt,
              rowspan: Ee ? void 0 : qt,
              "data-col-key": Lt,
              class: [`${r}-data-table-td`, Ke.className, Oe == null ? void 0 : Oe.class, ct && `${r}-data-table-td--summary`, te !== null && x[Ce][lt].includes(te) && `${r}-data-table-td--hover`, Pc(Ke, w) && `${r}-data-table-td--sorting`, Ke.fixed && `${r}-data-table-td--fixed-${Ke.fixed}`, Ke.align && `${r}-data-table-td--${Ke.align}-align`, Ke.type === "selection" && `${r}-data-table-td--selection`, Ke.type === "expand" && `${r}-data-table-td--expand`, on && `${r}-data-table-td--last-col`, Gt && `${r}-data-table-td--last-row`]
            }), ce && lt === $ ? [$h(Ze["--indent-offset"] = ct ? 0 : ye.tmNode.level, f("div", {
              class: `${r}-data-table-indent`,
              style: G
            })), ct || ye.tmNode.isLeaf ? f("div", {
              class: `${r}-data-table-expand-placeholder`
            }) : f(yd, {
              class: `${r}-data-table-expand-trigger`,
              clsPrefix: r,
              expanded: St,
              rowData: at,
              renderExpandIcon: this.renderExpandIcon,
              loading: l.has(ye.key),
              onClick: () => {
                Y(xt, ye.tmNode);
              }
            })] : null, Ke.type === "selection" ? ct ? null : Ke.multiple === !1 ? f(FC, {
              key: k,
              rowKey: xt,
              disabled: ye.tmNode.disabled,
              onUpdateChecked: () => {
                ee(ye.tmNode);
              }
            }) : f(yC, {
              key: k,
              rowKey: xt,
              disabled: ye.tmNode.disabled,
              onUpdateChecked: (st, pt) => {
                U(ye.tmNode, st, pt.shiftKey);
              }
            }) : Ke.type === "expand" ? ct ? null : !Ke.expandable || !((Ne = Ke.expandable) === null || Ne === void 0) && Ne.call(Ke, at) ? f(yd, {
              clsPrefix: r,
              rowData: at,
              expanded: St,
              renderExpandIcon: this.renderExpandIcon,
              onClick: () => {
                Y(xt, null);
              }
            }) : null : f(AC, {
              clsPrefix: r,
              index: Te,
              row: at,
              column: Ke,
              isSummary: ct,
              mergedTheme: B,
              renderCell: this.renderCell
            }));
          });
          return Le && ot && vt && V.splice(ot, 0, f("td", {
            colspan: b.length - ot - vt,
            style: {
              pointerEvents: "none",
              visibility: "hidden",
              height: 0
            }
          })), f("tr", Object.assign({}, it, {
            onMouseenter: (se) => {
              var de;
              this.hoverKey = xt, (de = it == null ? void 0 : it.onMouseenter) === null || de === void 0 || de.call(it, se);
            },
            key: xt,
            class: [`${r}-data-table-tr`, ct && `${r}-data-table-tr--summary`, Tt && `${r}-data-table-tr--striped`, St && `${r}-data-table-tr--expanded`, fe, it == null ? void 0 : it.class],
            style: [it == null ? void 0 : it.style, Le && {
              height: A
            }]
          }), V);
        };
        return o ? f(ul, {
          ref: "virtualListRef",
          items: ue,
          itemSize: this.minRowHeight,
          visibleItemsTag: rw,
          visibleItemsProps: {
            clsPrefix: r,
            id: N,
            cols: b,
            onMouseleave: M
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
            startColIndex: Ee,
            endColIndex: Le,
            getLeft: nt
          }) => gt({
            displayedRowIndex: ye,
            isVirtual: !0,
            isVirtualX: !0,
            rowInfo: Ce,
            startColIndex: Ee,
            endColIndex: Le,
            getLeft: nt
          }) : void 0
        }, {
          default: ({
            item: ye,
            index: Ce,
            renderedItemWithCols: Ee
          }) => Ee || gt({
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
          onMouseleave: M,
          style: {
            tableLayout: this.mergedTableLayout
          }
        }, f("colgroup", null, b.map((ye) => f("col", {
          key: ye.key,
          style: ye.style
        }))), this.showHeader ? f(Hc, {
          discrete: !1
        }) : null, this.empty ? null : f("tbody", {
          "data-n-id": N,
          class: `${r}-data-table-tbody`
        }, ue.map((ye, Ce) => gt({
          rowInfo: ye,
          displayedRowIndex: Ce,
          isVirtual: !1,
          isVirtualX: !1,
          startColIndex: -1,
          endColIndex: -1,
          getLeft(Ee) {
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
      }, nn(this.dataTableSlots.empty, () => [f(Vr, {
        theme: this.mergedTheme.peers.Empty,
        themeOverrides: this.mergedTheme.peerOverrides.Empty
      })]));
      return this.shouldDisplaySomeTablePart ? f(je, null, h, p()) : f(Wr, {
        onResize: this.onResize
      }, {
        default: p
      });
    }
    return h;
  }
}), iw = J({
  name: "MainTable",
  setup() {
    const {
      mergedClsPrefixRef: e,
      rightFixedColumnsRef: t,
      leftFixedColumnsRef: r,
      bodyWidthRef: o,
      maxHeightRef: i,
      minHeightRef: a,
      flexHeightRef: s,
      virtualScrollHeaderRef: l,
      syncScrollState: d
    } = pe(vn), u = L(null), c = L(null), v = L(null), g = L(!(r.value.length || t.value.length)), m = E(() => ({
      maxHeight: bt(i.value),
      minHeight: bt(a.value)
    }));
    function h(y) {
      o.value = y.contentRect.width, d(), g.value || (g.value = !0);
    }
    function p() {
      var y;
      const {
        value: B
      } = u;
      return B ? l.value ? ((y = B.virtualListRef) === null || y === void 0 ? void 0 : y.listElRef) || null : B.$el : null;
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
      scrollTo(y, B) {
        var C;
        (C = c.value) === null || C === void 0 || C.scrollTo(y, B);
      }
    };
    return rt(() => {
      const {
        value: y
      } = v;
      if (!y) return;
      const B = `${e.value}-data-table-base-table--transition-disabled`;
      g.value ? setTimeout(() => {
        y.classList.remove(B);
      }, 0) : y.classList.add(B);
    }), Object.assign({
      maxHeight: i,
      mergedClsPrefix: e,
      selfElRef: v,
      headerInstRef: u,
      bodyInstRef: c,
      bodyStyle: m,
      flexHeight: s,
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
    }, o ? null : f(Hc, {
      ref: "headerInstRef"
    }), f(ow, {
      ref: "bodyInstRef",
      bodyStyle: this.bodyStyle,
      showHeader: o,
      flexHeight: r,
      onResize: this.handleBodyResize
    }));
  }
}), wd = lw(), aw = D([z("data-table", `
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
 `), I("flex-height", [D(">", [z("data-table-wrapper", [D(">", [z("data-table-base-table", `
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
 `, [Io({
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
 `, [I("expanded", [z("icon", "transform: rotate(90deg);", [en({
  originalTransform: "rotate(90deg)"
})]), z("base-icon", "transform: rotate(90deg);", [en({
  originalTransform: "rotate(90deg)"
})])]), z("base-loading", `
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [en()]), z("icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [en()]), z("base-icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [en()])]), z("data-table-thead", `
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
 `), I("striped", "background-color: var(--n-merged-td-color-striped);", [z("data-table-td", "background-color: var(--n-merged-td-color-striped);")]), Ue("summary", [D("&:hover", "background-color: var(--n-merged-td-color-hover);", [D(">", [z("data-table-td", "background-color: var(--n-merged-td-color-hover);")])])])]), z("data-table-th", `
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
 `, [I("filterable", `
 padding-right: 36px;
 `, [I("sortable", `
 padding-right: calc(var(--n-th-padding) + 36px);
 `)]), wd, I("selection", `
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
 `), I("hover", `
 background-color: var(--n-merged-th-color-hover);
 `), I("sorting", `
 background-color: var(--n-merged-th-color-sorting);
 `), I("sortable", `
 cursor: pointer;
 `, [T("ellipsis", `
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
 `, [z("base-icon", "transition: transform .3s var(--n-bezier)"), I("desc", [z("base-icon", `
 transform: rotate(0deg);
 `)]), I("asc", [z("base-icon", `
 transform: rotate(-180deg);
 `)]), I("asc, desc", `
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
 `), I("active", [D("&::after", ` 
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
 `), I("show", `
 background-color: var(--n-th-button-color-hover);
 `), I("active", `
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
 `, [I("expand", [z("data-table-expand-trigger", `
 margin-right: 0;
 `)]), I("last-row", `
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
]), I("summary", `
 background-color: var(--n-merged-th-color);
 `), I("hover", `
 background-color: var(--n-merged-td-color-hover);
 `), I("sorting", `
 background-color: var(--n-merged-td-color-sorting);
 `), T("ellipsis", `
 display: inline-block;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 vertical-align: bottom;
 max-width: calc(100% - var(--indent-offset, -1.5) * 16px - 24px);
 `), I("selection, expand", `
 text-align: center;
 padding: 0;
 line-height: 0;
 `), wd]), z("data-table-empty", `
 box-sizing: border-box;
 padding: var(--n-empty-padding);
 flex-grow: 1;
 flex-shrink: 0;
 opacity: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: opacity .3s var(--n-bezier);
 `, [I("hide", `
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
 `), I("loading", [z("data-table-wrapper", `
 opacity: var(--n-opacity-loading);
 pointer-events: none;
 `)]), I("single-column", [z("data-table-td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `, [D("&::after, &::before", `
 bottom: 0 !important;
 `)])]), Ue("single-line", [z("data-table-th", `
 border-right: 1px solid var(--n-merged-border-color);
 `, [I("last", `
 border-right: 0 solid var(--n-merged-border-color);
 `)]), z("data-table-td", `
 border-right: 1px solid var(--n-merged-border-color);
 `, [I("last-col", `
 border-right: 0 solid var(--n-merged-border-color);
 `)])]), I("bordered", [z("data-table-wrapper", `
 border: 1px solid var(--n-merged-border-color);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 overflow: hidden;
 `)]), z("data-table-base-table", [I("transition-disabled", [z("data-table-th", [D("&::after, &::before", "transition: none;")]), z("data-table-td", [D("&::after, &::before", "transition: none;")])])]), I("bottom-bordered", [z("data-table-td", [I("last-row", `
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
 `, [z("button", [D("&:not(:last-child)", `
 margin: var(--n-action-button-margin);
 `), D("&:last-child", `
 margin-right: 0;
 `)])]), z("divider", `
 margin: 0 !important;
 `)]), Si(z("data-table", `
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 --n-merged-th-color-hover: var(--n-th-color-hover-modal);
 --n-merged-td-color-hover: var(--n-td-color-hover-modal);
 --n-merged-th-color-sorting: var(--n-th-color-hover-modal);
 --n-merged-td-color-sorting: var(--n-td-color-hover-modal);
 --n-merged-td-color-striped: var(--n-td-color-striped-modal);
 `)), Xa(z("data-table", `
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 --n-merged-th-color-hover: var(--n-th-color-hover-popover);
 --n-merged-td-color-hover: var(--n-td-color-hover-popover);
 --n-merged-th-color-sorting: var(--n-th-color-hover-popover);
 --n-merged-td-color-sorting: var(--n-td-color-hover-popover);
 --n-merged-td-color-striped: var(--n-td-color-striped-popover);
 `))]);
function lw() {
  return [I("fixed-left", `
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
 `)]), I("fixed-right", `
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
function sw(e, t) {
  const {
    paginatedDataRef: r,
    treeMateRef: o,
    selectionColumnRef: i
  } = t, a = L(e.defaultCheckedRowKeys), s = E(() => {
    var P;
    const {
      checkedRowKeys: k
    } = e, S = k === void 0 ? a.value : k;
    return ((P = i.value) === null || P === void 0 ? void 0 : P.multiple) === !1 ? {
      checkedKeys: S.slice(0, 1),
      indeterminateKeys: []
    } : o.value.getCheckedKeys(S, {
      cascade: e.cascade,
      allowNotLoaded: e.allowCheckingNotLoaded
    });
  }), l = E(() => s.value.checkedKeys), d = E(() => s.value.indeterminateKeys), u = E(() => new Set(l.value)), c = E(() => new Set(d.value)), v = E(() => {
    const {
      value: P
    } = u;
    return r.value.reduce((k, S) => {
      const {
        key: w,
        disabled: R
      } = S;
      return k + (!R && P.has(w) ? 1 : 0);
    }, 0);
  }), g = E(() => r.value.filter((P) => P.disabled).length), m = E(() => {
    const {
      length: P
    } = r.value, {
      value: k
    } = c;
    return v.value > 0 && v.value < P - g.value || r.value.some((S) => k.has(S.key));
  }), h = E(() => {
    const {
      length: P
    } = r.value;
    return v.value !== 0 && v.value === P - g.value;
  }), p = E(() => r.value.length === 0);
  function x(P, k, S) {
    const {
      "onUpdate:checkedRowKeys": w,
      onUpdateCheckedRowKeys: R,
      onCheckedRowKeysChange: F
    } = e, N = [], {
      value: {
        getNode: $
      }
    } = o;
    P.forEach((n) => {
      var O;
      const M = (O = $(n)) === null || O === void 0 ? void 0 : O.rawNode;
      N.push(M);
    }), w && ne(w, P, N, {
      row: k,
      action: S
    }), R && ne(R, P, N, {
      row: k,
      action: S
    }), F && ne(F, P, N, {
      row: k,
      action: S
    }), a.value = P;
  }
  function b(P, k = !1, S) {
    if (!e.loading) {
      if (k) {
        x(Array.isArray(P) ? P.slice(0, 1) : [P], S, "check");
        return;
      }
      x(o.value.check(P, l.value, {
        cascade: e.cascade,
        allowNotLoaded: e.allowCheckingNotLoaded
      }).checkedKeys, S, "check");
    }
  }
  function y(P, k) {
    e.loading || x(o.value.uncheck(P, l.value, {
      cascade: e.cascade,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, k, "uncheck");
  }
  function B(P = !1) {
    const {
      value: k
    } = i;
    if (!k || e.loading) return;
    const S = [];
    (P ? o.value.treeNodes : r.value).forEach((w) => {
      w.disabled || S.push(w.key);
    }), x(o.value.check(S, l.value, {
      cascade: !0,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, void 0, "checkAll");
  }
  function C(P = !1) {
    const {
      value: k
    } = i;
    if (!k || e.loading) return;
    const S = [];
    (P ? o.value.treeNodes : r.value).forEach((w) => {
      w.disabled || S.push(w.key);
    }), x(o.value.uncheck(S, l.value, {
      cascade: !0,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, void 0, "uncheckAll");
  }
  return {
    mergedCheckedRowKeySetRef: u,
    mergedCheckedRowKeysRef: l,
    mergedInderminateRowKeySetRef: c,
    someRowsCheckedRef: m,
    allRowsCheckedRef: h,
    headerCheckboxDisabledRef: p,
    doUpdateCheckedRowKeys: x,
    doCheckAll: B,
    doUncheckAll: C,
    doCheck: b,
    doUncheck: y
  };
}
function dw(e, t) {
  const r = Ge(() => {
    for (const u of e.columns)
      if (u.type === "expand")
        return process.env.NODE_ENV !== "production" && !u.renderExpand && Dt("data-table", "column with type `expand` has no `renderExpand` prop."), u.renderExpand;
  }), o = Ge(() => {
    let u;
    for (const c of e.columns)
      if (c.type === "expand") {
        u = c.expandable;
        break;
      }
    return u;
  }), i = L(e.defaultExpandAll ? r != null && r.value ? (() => {
    const u = [];
    return t.value.treeNodes.forEach((c) => {
      var v;
      !((v = o.value) === null || v === void 0) && v.call(o, c.rawNode) && u.push(c.key);
    }), u;
  })() : t.value.getNonLeafKeys() : e.defaultExpandedRowKeys), a = ie(e, "expandedRowKeys"), s = ie(e, "stickyExpandedRows"), l = Et(a, i);
  function d(u) {
    const {
      onUpdateExpandedRowKeys: c,
      "onUpdate:expandedRowKeys": v
    } = e;
    c && ne(c, u), v && ne(v, u), i.value = u;
  }
  return {
    stickyExpandedRowsRef: s,
    mergedExpandedRowKeysRef: l,
    renderExpandRef: r,
    expandableRef: o,
    doUpdateExpandedRowKeys: d
  };
}
function uw(e, t) {
  const r = [], o = [], i = [], a = /* @__PURE__ */ new WeakMap();
  let s = -1, l = 0, d = !1, u = 0;
  function c(g, m) {
    m > s && (r[m] = [], s = m), g.forEach((h) => {
      if ("children" in h)
        c(h.children, m + 1);
      else {
        const p = "key" in h ? h.key : void 0;
        o.push({
          key: un(h),
          style: gC(h, p !== void 0 ? bt(t(p)) : void 0),
          column: h,
          index: u++,
          // The width property is only applied to horizontally virtual scroll table
          width: h.width === void 0 ? 128 : Number(h.width)
        }), l += 1, d || (d = !!h.ellipsis), i.push(h);
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
        v(p.children, m + 1), p.children.forEach((B) => {
          var C, P;
          y.colSpan += (P = (C = a.get(B)) === null || C === void 0 ? void 0 : C.colSpan) !== null && P !== void 0 ? P : 0;
        }), b + y.colSpan === l && (y.isLast = !0), a.set(p, y), r[m].push(y);
      } else {
        if (u < h) {
          u += 1;
          return;
        }
        let b = 1;
        "titleColSpan" in p && (b = (x = p.titleColSpan) !== null && x !== void 0 ? x : 1), b > 1 && (h = u + b);
        const y = u + b === l, B = {
          column: p,
          colSpan: b,
          colIndex: u,
          rowSpan: s - m + 1,
          isLast: y
        };
        a.set(p, B), r[m].push(B), u += 1;
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
function cw(e, t) {
  const r = E(() => uw(e.columns, t));
  return {
    rowsRef: E(() => r.value.rows),
    colsRef: E(() => r.value.cols),
    hasEllipsisRef: E(() => r.value.hasEllipsis),
    dataRelatedColsRef: E(() => r.value.dataRelatedCols)
  };
}
function fw() {
  const e = L({});
  function t(i) {
    return e.value[i];
  }
  function r(i, a) {
    Rc(i) && "key" in i && (e.value[i.key] = a);
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
function hw(e, {
  mainTableInstRef: t,
  mergedCurrentPageRef: r,
  bodyWidthRef: o
}) {
  let i = 0;
  const a = L(), s = L(null), l = L([]), d = L(null), u = L([]), c = E(() => bt(e.scrollX)), v = E(() => e.columns.filter((R) => R.fixed === "left")), g = E(() => e.columns.filter((R) => R.fixed === "right")), m = E(() => {
    const R = {};
    let F = 0;
    function N($) {
      $.forEach((n) => {
        const O = {
          start: F,
          end: 0
        };
        R[un(n)] = O, "children" in n ? (N(n.children), O.end = F) : (F += pd(n) || 0, O.end = F);
      });
    }
    return N(v.value), R;
  }), h = E(() => {
    const R = {};
    let F = 0;
    function N($) {
      for (let n = $.length - 1; n >= 0; --n) {
        const O = $[n], M = {
          start: F,
          end: 0
        };
        R[un(O)] = M, "children" in O ? (N(O.children), M.end = F) : (F += pd(O) || 0, M.end = F);
      }
    }
    return N(g.value), R;
  });
  function p() {
    var R, F;
    const {
      value: N
    } = v;
    let $ = 0;
    const {
      value: n
    } = m;
    let O = null;
    for (let M = 0; M < N.length; ++M) {
      const W = un(N[M]);
      if (i > (((R = n[W]) === null || R === void 0 ? void 0 : R.start) || 0) - $)
        O = W, $ = ((F = n[W]) === null || F === void 0 ? void 0 : F.end) || 0;
      else
        break;
    }
    s.value = O;
  }
  function x() {
    l.value = [];
    let R = e.columns.find((F) => un(F) === s.value);
    for (; R && "children" in R; ) {
      const F = R.children.length;
      if (F === 0) break;
      const N = R.children[F - 1];
      l.value.push(un(N)), R = N;
    }
  }
  function b() {
    var R, F;
    const {
      value: N
    } = g, $ = Number(e.scrollX), {
      value: n
    } = o;
    if (n === null) return;
    let O = 0, M = null;
    const {
      value: W
    } = h;
    for (let H = N.length - 1; H >= 0; --H) {
      const U = un(N[H]);
      if (Math.round(i + (((R = W[U]) === null || R === void 0 ? void 0 : R.start) || 0) + n - O) < $)
        M = U, O = ((F = W[U]) === null || F === void 0 ? void 0 : F.end) || 0;
      else
        break;
    }
    d.value = M;
  }
  function y() {
    u.value = [];
    let R = e.columns.find((F) => un(F) === d.value);
    for (; R && "children" in R && R.children.length; ) {
      const F = R.children[0];
      u.value.push(un(F)), R = F;
    }
  }
  function B() {
    const R = t.value ? t.value.getHeaderElement() : null, F = t.value ? t.value.getBodyElement() : null;
    return {
      header: R,
      body: F
    };
  }
  function C() {
    const {
      body: R
    } = B();
    R && (R.scrollTop = 0);
  }
  function P() {
    a.value !== "body" ? si(S) : a.value = void 0;
  }
  function k(R) {
    var F;
    (F = e.onScroll) === null || F === void 0 || F.call(e, R), a.value !== "head" ? si(S) : a.value = void 0;
  }
  function S() {
    const {
      header: R,
      body: F
    } = B();
    if (!F) return;
    const {
      value: N
    } = o;
    if (N !== null) {
      if (e.maxHeight || e.flexHeight) {
        if (!R) return;
        const $ = i - R.scrollLeft;
        a.value = $ !== 0 ? "head" : "body", a.value === "head" ? (i = R.scrollLeft, F.scrollLeft = i) : (i = F.scrollLeft, R.scrollLeft = i);
      } else
        i = F.scrollLeft;
      p(), x(), b(), y();
    }
  }
  function w(R) {
    const {
      header: F
    } = B();
    F && (F.scrollLeft = R, S());
  }
  return Me(r, () => {
    C();
  }), {
    styleScrollXRef: c,
    fixedColumnLeftMapRef: m,
    fixedColumnRightMapRef: h,
    leftFixedColumnsRef: v,
    rightFixedColumnsRef: g,
    leftActiveFixedColKeyRef: s,
    leftActiveFixedChildrenColKeysRef: l,
    rightActiveFixedColKeyRef: d,
    rightActiveFixedChildrenColKeysRef: u,
    syncScrollState: S,
    handleTableBodyScroll: k,
    handleTableHeaderScroll: P,
    setHeaderScrollLeft: w
  };
}
function Qo(e) {
  return typeof e == "object" && typeof e.multiple == "number" ? e.multiple : !1;
}
function vw(e, t) {
  return t && (e === void 0 || e === "default" || typeof e == "object" && e.compare === "default") ? gw(t) : typeof e == "function" ? e : e && typeof e == "object" && e.compare && e.compare !== "default" ? e.compare : !1;
}
function gw(e) {
  return (t, r) => {
    const o = t[e], i = r[e];
    return o == null ? i == null ? 0 : -1 : i == null ? 1 : typeof o == "number" && typeof i == "number" ? o - i : typeof o == "string" && typeof i == "string" ? o.localeCompare(i) : 0;
  };
}
function pw(e, {
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
  const i = L(o), a = E(() => {
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
  }), s = E(() => {
    const m = a.value.slice().sort((h, p) => {
      const x = Qo(h.sorter) || 0;
      return (Qo(p.sorter) || 0) - x;
    });
    return m.length ? r.value.slice().sort((p, x) => {
      let b = 0;
      return m.some((y) => {
        const {
          columnKey: B,
          sorter: C,
          order: P
        } = y, k = vw(C, B);
        return k && P && (b = k(p.rawNode, x.rawNode), b !== 0) ? (b = b * hC(P), !0) : !1;
      }), b;
    }) : r.value;
  });
  function l(m) {
    let h = a.value.slice();
    return m && Qo(m.sorter) !== !1 ? (h = h.filter((p) => Qo(p.sorter) !== !1), g(h, m), h) : m || null;
  }
  function d(m) {
    const h = l(m);
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
    sortedDataRef: s,
    mergedSortStateRef: a,
    deriveNextSorter: d
  };
}
function mw(e, {
  dataRelatedColsRef: t
}) {
  const r = E(() => {
    const K = (j) => {
      for (let q = 0; q < j.length; ++q) {
        const X = j[q];
        if ("children" in X)
          return K(X.children);
        if (X.type === "selection")
          return X;
      }
      return null;
    };
    return K(e.columns);
  }), o = E(() => {
    const {
      childrenKey: K
    } = e;
    return $i(e.data, {
      ignoreEmptyChildren: !0,
      getKey: e.rowKey,
      getChildren: (j) => j[K],
      getDisabled: (j) => {
        var q, X;
        return !!(!((X = (q = r.value) === null || q === void 0 ? void 0 : q.disabled) === null || X === void 0) && X.call(q, j));
      }
    });
  }), i = Ge(() => {
    const {
      columns: K
    } = e, {
      length: j
    } = K;
    let q = null;
    for (let X = 0; X < j; ++X) {
      const ae = K[X];
      if (!ae.type && q === null && (q = X), "tree" in ae && ae.tree)
        return X;
    }
    return q || 0;
  }), a = L({}), {
    pagination: s
  } = e, l = L(s && s.defaultPage || 1), d = L(xc(s)), u = E(() => {
    const K = t.value.filter((X) => X.filterOptionValues !== void 0 || X.filterOptionValue !== void 0), j = {};
    return K.forEach((X) => {
      var ae;
      X.type === "selection" || X.type === "expand" || (X.filterOptionValues === void 0 ? j[X.key] = (ae = X.filterOptionValue) !== null && ae !== void 0 ? ae : null : j[X.key] = X.filterOptionValues);
    }), Object.assign(md(a.value), j);
  }), c = E(() => {
    const K = u.value, {
      columns: j
    } = e;
    function q(le) {
      return (ce, be) => !!~String(be[le]).indexOf(String(ce));
    }
    const {
      value: {
        treeNodes: X
      }
    } = o, ae = [];
    return j.forEach((le) => {
      le.type === "selection" || le.type === "expand" || "children" in le || ae.push([le.key, le]);
    }), X ? X.filter((le) => {
      const {
        rawNode: ce
      } = le;
      for (const [be, G] of ae) {
        let ue = K[be];
        if (ue == null || (Array.isArray(ue) || (ue = [ue]), !ue.length)) continue;
        const Pe = G.filter === "default" ? q(be) : G.filter;
        if (G && typeof Pe == "function")
          if (G.filterMode === "and") {
            if (ue.some((xe) => !Pe(xe, ce)))
              return !1;
          } else {
            if (ue.some((xe) => Pe(xe, ce)))
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
  } = pw(e, {
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
  const x = E(() => {
    const {
      pagination: K
    } = e;
    if (K !== !1)
      return K.page;
  }), b = E(() => {
    const {
      pagination: K
    } = e;
    if (K !== !1)
      return K.pageSize;
  }), y = Et(x, l), B = Et(b, d), C = Ge(() => {
    const K = y.value;
    return e.remote ? K : Math.max(1, Math.min(Math.ceil(c.value.length / B.value), K));
  }), P = E(() => {
    const {
      pagination: K
    } = e;
    if (K) {
      const {
        pageCount: j
      } = K;
      if (j !== void 0) return j;
    }
  }), k = E(() => {
    if (e.remote) return o.value.treeNodes;
    if (!e.pagination) return v.value;
    const K = B.value, j = (C.value - 1) * K;
    return v.value.slice(j, j + K);
  }), S = E(() => k.value.map((K) => K.rawNode));
  function w(K) {
    const {
      pagination: j
    } = e;
    if (j) {
      const {
        onChange: q,
        "onUpdate:page": X,
        onUpdatePage: ae
      } = j;
      q && ne(q, K), ae && ne(ae, K), X && ne(X, K), $(K);
    }
  }
  function R(K) {
    const {
      pagination: j
    } = e;
    if (j) {
      const {
        onPageSizeChange: q,
        "onUpdate:pageSize": X,
        onUpdatePageSize: ae
      } = j;
      q && ne(q, K), ae && ne(ae, K), X && ne(X, K), n(K);
    }
  }
  const F = E(() => {
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
  }), N = E(() => Object.assign(Object.assign({}, e.pagination), {
    // reset deprecated methods
    onChange: void 0,
    onUpdatePage: void 0,
    onUpdatePageSize: void 0,
    onPageSizeChange: void 0,
    "onUpdate:page": w,
    "onUpdate:pageSize": R,
    // writing merged props after pagination to avoid
    // pagination[key] === undefined
    // key still exists but value is undefined
    page: C.value,
    pageSize: B.value,
    pageCount: F.value === void 0 ? P.value : void 0,
    itemCount: F.value
  }));
  function $(K) {
    const {
      "onUpdate:page": j,
      onPageChange: q,
      onUpdatePage: X
    } = e;
    X && ne(X, K), j && ne(j, K), q && ne(q, K), l.value = K;
  }
  function n(K) {
    const {
      "onUpdate:pageSize": j,
      onPageSizeChange: q,
      onUpdatePageSize: X
    } = e;
    q && ne(q, K), X && ne(X, K), j && ne(j, K), d.value = K;
  }
  function O(K, j) {
    const {
      onUpdateFilters: q,
      "onUpdate:filters": X,
      onFiltersChange: ae
    } = e;
    q && ne(q, K, j), X && ne(X, K, j), ae && ne(ae, K, j), a.value = K;
  }
  function M(K, j, q, X) {
    var ae;
    (ae = e.onUnstableColumnResize) === null || ae === void 0 || ae.call(e, K, j, q, X);
  }
  function W(K) {
    $(K);
  }
  function H() {
    U();
  }
  function U() {
    ee({});
  }
  function ee(K) {
    Y(K);
  }
  function Y(K) {
    K ? K ? a.value = md(K) : process.env.NODE_ENV !== "production" && Dt("data-table", "`filters` is not an object") : a.value = {};
  }
  return {
    treeMateRef: o,
    mergedCurrentPageRef: C,
    mergedPaginationRef: N,
    paginatedDataRef: k,
    rawPaginatedDataRef: S,
    mergedFilterStateRef: u,
    mergedSortStateRef: m,
    hoverKeyRef: L(null),
    selectionColumnRef: r,
    childTriggerColIndexRef: i,
    doUpdateFilters: O,
    deriveNextSorter: g,
    doUpdatePageSize: n,
    doUpdatePage: $,
    onUnstableColumnResize: M,
    // exported methods
    filter: Y,
    filters: ee,
    clearFilter: H,
    clearFilters: U,
    clearSorter: p,
    page: W,
    sort: h
  };
}
const bw = J({
  name: "DataTable",
  alias: ["AdvancedTable"],
  props: cC,
  slots: Object,
  setup(e, {
    slots: t
  }) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.onPageChange !== void 0 && Qe("data-table", "`on-page-change` is deprecated, please use `on-update:page` instead."), e.onPageSizeChange !== void 0 && Qe("data-table", "`on-page-size-change` is deprecated, please use `on-update:page-size` instead."), e.onSorterChange !== void 0 && Qe("data-table", "`on-sorter-change` is deprecated, please use `on-update:sorter` instead."), e.onFiltersChange !== void 0 && Qe("data-table", "`on-filters-change` is deprecated, please use `on-update:filters` instead."), e.onCheckedRowKeysChange !== void 0 && Qe("data-table", "`on-checked-row-keys-change` is deprecated, please use `on-update:checked-row-keys` instead.");
    });
    const {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), s = kt("DataTable", a, o), l = E(() => {
      const {
        bottomBordered: A
      } = e;
      return r.value ? !1 : A !== void 0 ? A : !0;
    }), d = ve("DataTable", "-data-table", aw, uC, e, o), u = L(null), c = L(null), {
      getResizableWidth: v,
      clearResizableWidth: g,
      doUpdateResizableWidth: m
    } = fw(), {
      rowsRef: h,
      colsRef: p,
      dataRelatedColsRef: x,
      hasEllipsisRef: b
    } = cw(e, v), {
      treeMateRef: y,
      mergedCurrentPageRef: B,
      paginatedDataRef: C,
      rawPaginatedDataRef: P,
      selectionColumnRef: k,
      hoverKeyRef: S,
      mergedPaginationRef: w,
      mergedFilterStateRef: R,
      mergedSortStateRef: F,
      childTriggerColIndexRef: N,
      doUpdatePage: $,
      doUpdateFilters: n,
      onUnstableColumnResize: O,
      deriveNextSorter: M,
      filter: W,
      filters: H,
      clearFilter: U,
      clearFilters: ee,
      clearSorter: Y,
      page: K,
      sort: j
    } = mw(e, {
      dataRelatedColsRef: x
    }), q = (A) => {
      const {
        fileName: V = "data.csv",
        keepOriginalData: Q = !1
      } = A || {}, se = Q ? e.data : P.value, de = xC(e.columns, se, e.getCsvCell, e.getCsvHeader), ge = new Blob([de], {
        type: "text/csv;charset=utf-8"
      }), me = URL.createObjectURL(ge);
      O0(me, V.endsWith(".csv") ? V : `${V}.csv`), URL.revokeObjectURL(me);
    }, {
      doCheckAll: X,
      doUncheckAll: ae,
      doCheck: le,
      doUncheck: ce,
      headerCheckboxDisabledRef: be,
      someRowsCheckedRef: G,
      allRowsCheckedRef: ue,
      mergedCheckedRowKeySetRef: Pe,
      mergedInderminateRowKeySetRef: xe
    } = sw(e, {
      selectionColumnRef: k,
      treeMateRef: y,
      paginatedDataRef: C
    }), {
      stickyExpandedRowsRef: Fe,
      mergedExpandedRowKeysRef: $e,
      renderExpandRef: ut,
      expandableRef: ot,
      doUpdateExpandedRowKeys: vt
    } = dw(e, y), {
      handleTableBodyScroll: gt,
      handleTableHeaderScroll: ye,
      syncScrollState: Ce,
      setHeaderScrollLeft: Ee,
      leftActiveFixedColKeyRef: Le,
      leftActiveFixedChildrenColKeysRef: nt,
      rightActiveFixedColKeyRef: oe,
      rightActiveFixedChildrenColKeysRef: he,
      leftFixedColumnsRef: Te,
      rightFixedColumnsRef: ct,
      fixedColumnLeftMapRef: Tt,
      fixedColumnRightMapRef: Ot
    } = hw(e, {
      bodyWidthRef: u,
      mainTableInstRef: c,
      mergedCurrentPageRef: B
    }), {
      localeRef: xt
    } = cr("DataTable"), at = E(() => e.virtualScroll || e.flexHeight || e.maxHeight !== void 0 || b.value ? "fixed" : e.tableLayout);
    ze(vn, {
      props: e,
      treeMateRef: y,
      renderExpandIconRef: ie(e, "renderExpandIcon"),
      loadingKeySetRef: L(/* @__PURE__ */ new Set()),
      slots: t,
      indentRef: ie(e, "indent"),
      childTriggerColIndexRef: N,
      bodyWidthRef: u,
      componentId: wn(),
      hoverKeyRef: S,
      mergedClsPrefixRef: o,
      mergedThemeRef: d,
      scrollXRef: E(() => e.scrollX),
      rowsRef: h,
      colsRef: p,
      paginatedDataRef: C,
      leftActiveFixedColKeyRef: Le,
      leftActiveFixedChildrenColKeysRef: nt,
      rightActiveFixedColKeyRef: oe,
      rightActiveFixedChildrenColKeysRef: he,
      leftFixedColumnsRef: Te,
      rightFixedColumnsRef: ct,
      fixedColumnLeftMapRef: Tt,
      fixedColumnRightMapRef: Ot,
      mergedCurrentPageRef: B,
      someRowsCheckedRef: G,
      allRowsCheckedRef: ue,
      mergedSortStateRef: F,
      mergedFilterStateRef: R,
      loadingRef: ie(e, "loading"),
      rowClassNameRef: ie(e, "rowClassName"),
      mergedCheckedRowKeySetRef: Pe,
      mergedExpandedRowKeysRef: $e,
      mergedInderminateRowKeySetRef: xe,
      localeRef: xt,
      expandableRef: ot,
      stickyExpandedRowsRef: Fe,
      rowKeyRef: ie(e, "rowKey"),
      renderExpandRef: ut,
      summaryRef: ie(e, "summary"),
      virtualScrollRef: ie(e, "virtualScroll"),
      virtualScrollXRef: ie(e, "virtualScrollX"),
      heightForRowRef: ie(e, "heightForRow"),
      minRowHeightRef: ie(e, "minRowHeight"),
      virtualScrollHeaderRef: ie(e, "virtualScrollHeader"),
      headerHeightRef: ie(e, "headerHeight"),
      rowPropsRef: ie(e, "rowProps"),
      stripedRef: ie(e, "striped"),
      checkOptionsRef: E(() => {
        const {
          value: A
        } = k;
        return A == null ? void 0 : A.options;
      }),
      rawPaginatedDataRef: P,
      filterMenuCssVarsRef: E(() => {
        const {
          self: {
            actionDividerColor: A,
            actionPadding: V,
            actionButtonMargin: Q
          }
        } = d.value;
        return {
          "--n-action-padding": V,
          "--n-action-button-margin": Q,
          "--n-action-divider-color": A
        };
      }),
      onLoadRef: ie(e, "onLoad"),
      mergedTableLayoutRef: at,
      maxHeightRef: ie(e, "maxHeight"),
      minHeightRef: ie(e, "minHeight"),
      flexHeightRef: ie(e, "flexHeight"),
      headerCheckboxDisabledRef: be,
      paginationBehaviorOnFilterRef: ie(e, "paginationBehaviorOnFilter"),
      summaryPlacementRef: ie(e, "summaryPlacement"),
      filterIconPopoverPropsRef: ie(e, "filterIconPopoverProps"),
      scrollbarPropsRef: ie(e, "scrollbarProps"),
      syncScrollState: Ce,
      doUpdatePage: $,
      doUpdateFilters: n,
      getResizableWidth: v,
      onUnstableColumnResize: O,
      clearResizableWidth: g,
      doUpdateResizableWidth: m,
      deriveNextSorter: M,
      doCheck: le,
      doUncheck: ce,
      doCheckAll: X,
      doUncheckAll: ae,
      doUpdateExpandedRowKeys: vt,
      handleTableHeaderScroll: ye,
      handleTableBodyScroll: gt,
      setHeaderScrollLeft: Ee,
      renderCell: ie(e, "renderCell")
    });
    const St = {
      filter: W,
      filters: H,
      clearFilters: ee,
      clearSorter: Y,
      page: K,
      sort: j,
      clearFilter: U,
      downloadCsv: q,
      scrollTo: (A, V) => {
        var Q;
        (Q = c.value) === null || Q === void 0 || Q.scrollTo(A, V);
      }
    }, it = E(() => {
      const {
        size: A
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
          thColorSortingPopover: lt,
          thColor: Ke,
          thColorHover: Lt,
          tdColor: Wt,
          tdTextColor: _t,
          thTextColor: Kt,
          thFontWeight: qt,
          thButtonColorHover: on,
          thIconColor: Gt,
          thIconColorActive: _,
          filterSize: te,
          borderRadius: we,
          lineHeight: Oe,
          tdColorModal: Ze,
          thColorModal: He,
          borderColorModal: st,
          thColorHoverModal: pt,
          tdColorHoverModal: Qt,
          borderColorPopover: Rn,
          thColorPopover: Pn,
          tdColorPopover: er,
          tdColorHoverPopover: Qr,
          thColorHoverPopover: eo,
          paginationMargin: to,
          emptyPadding: no,
          boxShadowAfter: ro,
          boxShadowBefore: Mn,
          sorterSize: In,
          resizableContainerSize: Ii,
          resizableSize: Li,
          loadingColor: Ni,
          loadingSize: Hi,
          opacityLoading: ji,
          tdColorStriped: Wi,
          tdColorStripedModal: _i,
          tdColorStripedPopover: Vi,
          [Z("fontSize", A)]: Ui,
          [Z("thPadding", A)]: Ki,
          [Z("tdPadding", A)]: qi
        }
      } = d.value;
      return {
        "--n-font-size": Ui,
        "--n-th-padding": Ki,
        "--n-td-padding": qi,
        "--n-bezier": V,
        "--n-border-radius": we,
        "--n-line-height": Oe,
        "--n-border-color": Q,
        "--n-border-color-modal": st,
        "--n-border-color-popover": Rn,
        "--n-th-color": Ke,
        "--n-th-color-hover": Lt,
        "--n-th-color-modal": He,
        "--n-th-color-hover-modal": pt,
        "--n-th-color-popover": Pn,
        "--n-th-color-hover-popover": eo,
        "--n-td-color": Wt,
        "--n-td-color-hover": se,
        "--n-td-color-modal": Ze,
        "--n-td-color-hover-modal": Qt,
        "--n-td-color-popover": er,
        "--n-td-color-hover-popover": Qr,
        "--n-th-text-color": Kt,
        "--n-td-text-color": _t,
        "--n-th-font-weight": qt,
        "--n-th-button-color-hover": on,
        "--n-th-icon-color": Gt,
        "--n-th-icon-color-active": _,
        "--n-filter-size": te,
        "--n-pagination-margin": to,
        "--n-empty-padding": no,
        "--n-box-shadow-before": Mn,
        "--n-box-shadow-after": ro,
        "--n-sorter-size": In,
        "--n-resizable-container-size": Ii,
        "--n-resizable-size": Li,
        "--n-loading-size": Hi,
        "--n-loading-color": Ni,
        "--n-opacity-loading": ji,
        "--n-td-color-striped": Wi,
        "--n-td-color-striped-modal": _i,
        "--n-td-color-striped-popover": Vi,
        "--n-td-color-sorting": de,
        "--n-td-color-sorting-modal": ge,
        "--n-td-color-sorting-popover": me,
        "--n-th-color-sorting": Se,
        "--n-th-color-sorting-modal": Ne,
        "--n-th-color-sorting-popover": lt
      };
    }), fe = i ? Xe("data-table", E(() => e.size[0]), it, e) : void 0, ke = E(() => {
      if (!e.pagination) return !1;
      if (e.paginateSinglePage) return !0;
      const A = w.value, {
        pageCount: V
      } = A;
      return V !== void 0 ? V > 1 : A.itemCount && A.pageSize && A.itemCount > A.pageSize;
    });
    return Object.assign({
      mainTableInstRef: c,
      mergedClsPrefix: o,
      rtlEnabled: s,
      mergedTheme: d,
      paginatedData: C,
      mergedBordered: r,
      mergedBottomBordered: l,
      mergedPagination: w,
      mergedShowPagination: ke,
      cssVars: i ? void 0 : it,
      themeClass: fe == null ? void 0 : fe.themeClass,
      onRender: fe == null ? void 0 : fe.onRender
    }, St);
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
    }, f(iw, {
      ref: "mainTableInstRef"
    })), this.mergedShowPagination ? f("div", {
      class: `${e}-data-table__pagination`
    }, f(yc, Object.assign({
      theme: this.mergedTheme.peers.Pagination,
      themeOverrides: this.mergedTheme.peerOverrides.Pagination,
      disabled: this.loading
    }, this.mergedPagination))) : null, f(It, {
      name: "fade-in-scale-up-transition"
    }, {
      default: () => this.loading ? f("div", {
        class: `${e}-data-table-loading-wrapper`
      }, nn(o.loading, () => [f(Zn, Object.assign({
        clsPrefix: e,
        strokeWidth: 20
      }, i))])) : null
    }));
  }
}), jc = "n-dialog-provider", Wc = "n-dialog-api", xw = "n-dialog-reactive-list";
function _c() {
  const e = pe(Wc, null);
  return e === null && An("use-dialog", "No outer <n-dialog-provider /> founded."), e;
}
const yw = {
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
function Cw(e) {
  const {
    textColor1: t,
    textColor2: r,
    modalColor: o,
    closeIconColor: i,
    closeIconColorHover: a,
    closeIconColorPressed: s,
    closeColorHover: l,
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
  return Object.assign(Object.assign({}, yw), {
    fontSize: y,
    lineHeight: b,
    border: `1px solid ${h}`,
    titleTextColor: t,
    textColor: r,
    color: o,
    closeColorHover: l,
    closeColorPressed: d,
    closeIconColor: i,
    closeIconColorHover: a,
    closeIconColorPressed: s,
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
const Vc = {
  name: "Dialog",
  common: Ye,
  peers: {
    Button: zi
  },
  self: Cw
}, Ti = {
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
  onClose: Function,
  closeFocusable: Boolean
}, Uc = Kn(Ti), ww = D([z("dialog", `
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
}), I("bordered", {
  border: "var(--n-border)"
}), I("icon-top", [T("close", {
  margin: "var(--n-close-margin)"
}), T("icon", {
  margin: "var(--n-icon-margin)"
}), T("content", {
  textAlign: "center"
}), T("title", {
  justifyContent: "center"
}), T("action", {
  justifyContent: "center"
})]), I("icon-left", [T("icon", {
  margin: "var(--n-icon-margin)"
}), I("closable", [T("title", `
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
 `, [I("last", "margin-bottom: 0;")]), T("action", `
 display: flex;
 justify-content: flex-end;
 `, [D("> *:not(:last-child)", `
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
 `)]), Si(z("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), z("dialog", [Vd(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), Sw = {
  default: () => f(pi, null),
  info: () => f(pi, null),
  success: () => f(Rl, null),
  warning: () => f(Fi, null),
  error: () => f(kl, null)
}, Kc = J({
  name: "Dialog",
  alias: [
    "NimbusConfirmCard",
    // deprecated
    "Confirm"
    // deprecated
  ],
  props: Object.assign(Object.assign({}, ve.props), Ti),
  slots: Object,
  setup(e) {
    const {
      mergedComponentPropsRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = kt("Dialog", i, r), s = E(() => {
      var m, h;
      const {
        iconPlacement: p
      } = e;
      return p || ((h = (m = t == null ? void 0 : t.value) === null || m === void 0 ? void 0 : m.Dialog) === null || h === void 0 ? void 0 : h.iconPlacement) || "left";
    });
    function l(m) {
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
    const c = ve("Dialog", "-dialog", ww, Vc, e, r), v = E(() => {
      const {
        type: m
      } = e, h = s.value, {
        common: {
          cubicBezierEaseInOut: p
        },
        self: {
          fontSize: x,
          lineHeight: b,
          border: y,
          titleTextColor: B,
          textColor: C,
          color: P,
          closeBorderRadius: k,
          closeColorHover: S,
          closeColorPressed: w,
          closeIconColor: R,
          closeIconColorHover: F,
          closeIconColorPressed: N,
          closeIconSize: $,
          borderRadius: n,
          titleFontWeight: O,
          titleFontSize: M,
          padding: W,
          iconSize: H,
          actionSpace: U,
          contentMargin: ee,
          closeSize: Y,
          [h === "top" ? "iconMarginIconTop" : "iconMargin"]: K,
          [h === "top" ? "closeMarginIconTop" : "closeMargin"]: j,
          [Z("iconColor", m)]: q
        }
      } = c.value, X = Vt(K);
      return {
        "--n-font-size": x,
        "--n-icon-color": q,
        "--n-bezier": p,
        "--n-close-margin": j,
        "--n-icon-margin-top": X.top,
        "--n-icon-margin-right": X.right,
        "--n-icon-margin-bottom": X.bottom,
        "--n-icon-margin-left": X.left,
        "--n-icon-size": H,
        "--n-close-size": Y,
        "--n-close-icon-size": $,
        "--n-close-border-radius": k,
        "--n-close-color-hover": S,
        "--n-close-color-pressed": w,
        "--n-close-icon-color": R,
        "--n-close-icon-color-hover": F,
        "--n-close-icon-color-pressed": N,
        "--n-color": P,
        "--n-text-color": C,
        "--n-border-radius": n,
        "--n-padding": W,
        "--n-line-height": b,
        "--n-border": y,
        "--n-content-margin": ee,
        "--n-title-font-size": M,
        "--n-title-font-weight": O,
        "--n-title-text-color": B,
        "--n-action-space": U
      };
    }), g = o ? Xe("dialog", E(() => `${e.type[0]}${s.value[0]}`), v, e) : void 0;
    return {
      mergedClsPrefix: r,
      rtlEnabled: a,
      mergedIconPlacement: s,
      mergedTheme: c,
      handlePositiveClick: l,
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
      title: s,
      content: l,
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
    const B = a ? f(Ct, {
      clsPrefix: y,
      class: `${y}-dialog__icon`
    }, {
      default: () => _e(this.$slots.icon, (P) => P || (this.icon ? mt(this.icon) : Sw[this.type]()))
    }) : null, C = _e(this.$slots.action, (P) => P || c || u || d ? f("div", {
      class: [`${y}-dialog__action`, this.actionClass],
      style: this.actionStyle
    }, P || (d ? [mt(d)] : [this.negativeText && f(hr, Object.assign({
      theme: p.peers.Button,
      themeOverrides: p.peerOverrides.Button,
      ghost: !0,
      size: "small",
      onClick: h
    }, g), {
      default: () => mt(this.negativeText)
    }), this.positiveText && f(hr, Object.assign({
      theme: p.peers.Button,
      themeOverrides: p.peerOverrides.Button,
      size: "small",
      type: b === "default" ? "primary" : b,
      disabled: x,
      loading: x,
      onClick: m
    }, v), {
      default: () => mt(this.positiveText)
    })])) : null);
    return f("div", {
      class: [`${y}-dialog`, this.themeClass, this.closable && `${y}-dialog--closable`, `${y}-dialog--icon-${r}`, t && `${y}-dialog--bordered`, this.rtlEnabled && `${y}-dialog--rtl`],
      style: o,
      role: "dialog"
    }, i ? _e(this.$slots.close, (P) => {
      const k = [`${y}-dialog__close`, this.rtlEnabled && `${y}-dialog--rtl`];
      return P ? f("div", {
        class: k
      }, P) : f(Jr, {
        focusable: this.closeFocusable,
        clsPrefix: y,
        class: k,
        onClick: this.handleCloseClick
      });
    }) : null, a && r === "top" ? f("div", {
      class: `${y}-dialog-icon-container`
    }, B) : null, f("div", {
      class: [`${y}-dialog__title`, this.titleClass],
      style: this.titleStyle
    }, a && r === "left" ? B : null, nn(this.$slots.header, () => [mt(s)])), f("div", {
      class: [`${y}-dialog__content`, C ? "" : `${y}-dialog__content--last`, this.contentClass],
      style: this.contentStyle
    }, nn(this.$slots.default, () => [mt(l)])), C);
  }
});
function Bw(e) {
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
const kw = {
  name: "Modal",
  common: Ye,
  peers: {
    Scrollbar: Jn,
    Dialog: Vc,
    Card: dc
  },
  self: Bw
}, Rw = "n-modal-provider", qc = "n-modal-api", Pw = "n-modal-reactive-list";
function Gc() {
  const e = pe(qc, null);
  return e === null && An("use-modal", "No outer <n-modal-provider /> founded."), e;
}
const La = "n-draggable";
function Fw(e, t) {
  let r;
  const o = E(() => e.value !== !1), i = E(() => o.value ? La : ""), a = E(() => {
    const d = e.value;
    return d === !0 || d === !1 ? !0 : d ? d.bounds !== "none" : !0;
  });
  function s(d) {
    const u = d.querySelector(`.${La}`);
    if (!u || !i.value)
      return;
    let c = 0, v = 0, g = 0, m = 0, h = 0, p = 0, x;
    function b(C) {
      C.preventDefault(), x = C;
      const {
        x: P,
        y: k,
        right: S,
        bottom: w
      } = d.getBoundingClientRect();
      v = P, m = k, c = window.innerWidth - S, g = window.innerHeight - w;
      const {
        left: R,
        top: F
      } = d.style;
      h = +F.slice(0, -2), p = +R.slice(0, -2);
    }
    function y(C) {
      if (!x) return;
      const {
        clientX: P,
        clientY: k
      } = x;
      let S = C.clientX - P, w = C.clientY - k;
      a.value && (S > c ? S = c : -S > v && (S = -v), w > g ? w = g : -w > m && (w = -m));
      const R = S + p, F = w + h;
      d.style.top = `${F}px`, d.style.left = `${R}px`;
    }
    function B() {
      x = void 0, t.onEnd(d);
    }
    qe("mousedown", u, b), qe("mousemove", window, y), qe("mouseup", window, B), r = () => {
      Ve("mousedown", u, b), qe("mousemove", window, y), qe("mouseup", window, B);
    };
  }
  function l() {
    r && (r(), r = void 0);
  }
  return Id(l), {
    stopDrag: l,
    startDrag: s,
    draggableRef: o,
    draggableClassRef: i
  };
}
const Ll = Object.assign(Object.assign({}, El), Ti), $w = Kn(Ll), zw = J({
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
    },
    maskHidden: Boolean
  }, Ll), {
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
    const t = L(null), r = L(null), o = L(e.show), i = L(null), a = L(null), s = pe(Xd);
    let l = null;
    Me(ie(e, "show"), (w) => {
      w && (l = s.getMousePosition());
    }, {
      immediate: !0
    });
    const {
      stopDrag: d,
      startDrag: u,
      draggableRef: c,
      draggableClassRef: v
    } = Fw(ie(e, "draggable"), {
      onEnd: (w) => {
        p(w);
      }
    }), g = E(() => zt([e.titleClass, v.value])), m = E(() => zt([e.headerClass, v.value]));
    Me(ie(e, "show"), (w) => {
      w && (o.value = !0);
    }), Jd(E(() => e.blockScroll && o.value));
    function h() {
      if (s.transformOriginRef.value === "center")
        return "";
      const {
        value: w
      } = i, {
        value: R
      } = a;
      if (w === null || R === null)
        return "";
      if (r.value) {
        const F = r.value.containerScrollTop;
        return `${w}px ${R + F}px`;
      }
      return "";
    }
    function p(w) {
      if (s.transformOriginRef.value === "center" || !l || !r.value) return;
      const R = r.value.containerScrollTop, {
        offsetLeft: F,
        offsetTop: N
      } = w, $ = l.y, n = l.x;
      i.value = -(F - n), a.value = -(N - $ - R), w.style.transformOrigin = h();
    }
    function x(w) {
      ht(() => {
        p(w);
      });
    }
    function b(w) {
      w.style.transformOrigin = h(), e.onBeforeLeave();
    }
    function y(w) {
      const R = w;
      c.value && u(R), e.onAfterEnter && e.onAfterEnter(R);
    }
    function B() {
      o.value = !1, i.value = null, a.value = null, d(), e.onAfterLeave();
    }
    function C() {
      const {
        onClose: w
      } = e;
      w && w();
    }
    function P() {
      e.onNegativeClick();
    }
    function k() {
      e.onPositiveClick();
    }
    const S = L(null);
    return Me(S, (w) => {
      w && ht(() => {
        const R = w.el;
        R && t.value !== R && (t.value = R);
      });
    }), ze(To, t), ze(Do, null), ze(Gr, null), {
      mergedTheme: s.mergedThemeRef,
      appear: s.appearRef,
      isMounted: s.isMountedRef,
      mergedClsPrefix: s.mergedClsPrefixRef,
      bodyRef: t,
      scrollbarRef: r,
      draggableClass: v,
      displayed: o,
      childNodeRef: S,
      cardHeaderClass: m,
      dialogTitleClass: g,
      handlePositiveClick: k,
      handleNegativeClick: P,
      handleCloseClick: C,
      handleAfterEnter: y,
      handleAfterLeave: B,
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
      preset: s,
      mergedClsPrefix: l
    } = this;
    let d = null;
    if (!s) {
      if (d = H0("default", e.default, {
        draggableClass: this.draggableClass
      }), !d) {
        Dt("modal", "default slot is empty");
        return;
      }
      d = Md(d), d.props = Pt({
        class: `${l}-modal`
      }, t, d.props || {});
    }
    return this.displayDirective === "show" || this.displayed || this.show ? rn(f("div", {
      role: "none",
      class: [`${l}-modal-body-wrapper`, this.maskHidden && `${l}-modal-body-wrapper--mask-hidden`]
    }, f(On, {
      ref: "scrollbarRef",
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      contentClass: `${l}-modal-scroll-content`
    }, {
      default: () => {
        var u;
        return [(u = this.renderMask) === null || u === void 0 ? void 0 : u.call(this), f(cl, {
          disabled: !this.trapFocus || this.maskHidden,
          active: this.show,
          onEsc: this.onEsc,
          autoFocus: this.autoFocus
        }, {
          default: () => {
            var c;
            return f(It, {
              name: "fade-in-scale-up-transition",
              appear: (c = this.appear) !== null && c !== void 0 ? c : this.isMounted,
              onEnter: r,
              onAfterEnter: o,
              onAfterLeave: i,
              onBeforeLeave: a
            }, {
              default: () => {
                const v = [[Un, this.show]], {
                  onClickoutside: g
                } = this;
                return g && v.push([jr, this.onClickoutside, void 0, {
                  capture: !0
                }]), rn(this.preset === "confirm" || this.preset === "dialog" ? f(Kc, Object.assign({}, this.$attrs, {
                  class: [`${l}-modal`, this.$attrs.class],
                  ref: "bodyRef",
                  theme: this.mergedTheme.peers.Dialog,
                  themeOverrides: this.mergedTheme.peerOverrides.Dialog
                }, zn(this.$props, Uc), {
                  titleClass: this.dialogTitleClass,
                  "aria-modal": "true"
                }), e) : this.preset === "card" ? f(Ry, Object.assign({}, this.$attrs, {
                  ref: "bodyRef",
                  class: [`${l}-modal`, this.$attrs.class],
                  theme: this.mergedTheme.peers.Card,
                  themeOverrides: this.mergedTheme.peerOverrides.Card
                }, zn(this.$props, By), {
                  headerClass: this.cardHeaderClass,
                  "aria-modal": "true",
                  role: "dialog"
                }), e) : this.childNodeRef = d, v);
              }
            });
          }
        })];
      }
    })), [[Un, this.displayDirective === "if" || this.displayed || this.show]]) : null;
  }
}), Aw = D([z("modal-container", `
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
 `, [Mo({
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
 `), I("mask-hidden", "pointer-events: none;", [D("> *", `
 pointer-events: all;
 `)])]), z("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [Io({
  duration: ".25s",
  enterScale: ".5"
}), D(`.${La}`, `
 cursor: move;
 user-select: none;
 `)])]), Xc = Object.assign(Object.assign(Object.assign(Object.assign({}, ve.props), {
  show: Boolean,
  showMask: {
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
}), Ll), {
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
  onHide: Function,
  unstableShowMask: {
    type: Boolean,
    default: void 0
  }
}), Yc = J({
  name: "Modal",
  inheritAttrs: !1,
  props: Xc,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && (e.onHide && Qe("modal", "`on-hide` is deprecated."), e.onAfterHide && Qe("modal", "`on-after-hide` is deprecated, please use `on-after-leave` instead."), e.onBeforeHide && Qe("modal", "`on-before-hide` is deprecated, please use `on-before-leave` instead."), e.overlayStyle && Qe("modal", "`overlay-style` is deprecated, please use `style` instead."), e.unstableShowMask && Qe("modal", "`unstable-show-mask` has been removed, please use `show-mask` instead."));
    const t = L(null), {
      mergedClsPrefixRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = ve("Modal", "-modal", Aw, kw, e, r), s = Qa(64), l = Ja(), d = br(), u = e.internalDialog ? pe(jc, null) : null, c = e.internalModal ? pe(jh, null) : null, v = Zd();
    function g(k) {
      const {
        onUpdateShow: S,
        "onUpdate:show": w,
        onHide: R
      } = e;
      S && ne(S, k), w && ne(w, k), R && !k && R(k);
    }
    function m() {
      const {
        onClose: k
      } = e;
      k ? Promise.resolve(k()).then((S) => {
        S !== !1 && g(!1);
      }) : g(!1);
    }
    function h() {
      const {
        onPositiveClick: k
      } = e;
      k ? Promise.resolve(k()).then((S) => {
        S !== !1 && g(!1);
      }) : g(!1);
    }
    function p() {
      const {
        onNegativeClick: k
      } = e;
      k ? Promise.resolve(k()).then((S) => {
        S !== !1 && g(!1);
      }) : g(!1);
    }
    function x() {
      const {
        onBeforeLeave: k,
        onBeforeHide: S
      } = e;
      k && ne(k), S && S();
    }
    function b() {
      const {
        onAfterLeave: k,
        onAfterHide: S
      } = e;
      k && ne(k), S && S();
    }
    function y(k) {
      var S;
      const {
        onMaskClick: w
      } = e;
      w && w(k), e.maskClosable && !((S = t.value) === null || S === void 0) && S.contains(Hr(k)) && g(!1);
    }
    function B(k) {
      var S;
      (S = e.onEsc) === null || S === void 0 || S.call(e), e.show && e.closeOnEsc && gu(k) && (v.value || g(!1));
    }
    ze(Xd, {
      getMousePosition: () => {
        const k = u || c;
        if (k) {
          const {
            clickedRef: S,
            clickedPositionRef: w
          } = k;
          if (S.value && w.value)
            return w.value;
        }
        return s.value ? l.value : null;
      },
      mergedClsPrefixRef: r,
      mergedThemeRef: a,
      isMountedRef: d,
      appearRef: ie(e, "internalAppear"),
      transformOriginRef: ie(e, "transformOrigin")
    });
    const C = E(() => {
      const {
        common: {
          cubicBezierEaseOut: k
        },
        self: {
          boxShadow: S,
          color: w,
          textColor: R
        }
      } = a.value;
      return {
        "--n-bezier-ease-out": k,
        "--n-box-shadow": S,
        "--n-color": w,
        "--n-text-color": R
      };
    }), P = i ? Xe("theme-class", void 0, C, e) : void 0;
    return {
      mergedClsPrefix: r,
      namespace: o,
      isMounted: d,
      containerRef: t,
      presetProps: E(() => zn(e, $w)),
      handleEsc: B,
      handleAfterLeave: b,
      handleClickoutside: y,
      handleBeforeLeave: x,
      doUpdateShow: g,
      handleNegativeClick: p,
      handlePositiveClick: h,
      handleCloseClick: m,
      cssVars: i ? void 0 : C,
      themeClass: P == null ? void 0 : P.themeClass,
      onRender: P == null ? void 0 : P.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return f(ll, {
      to: this.to,
      show: this.show
    }, {
      default: () => {
        var t;
        (t = this.onRender) === null || t === void 0 || t.call(this);
        const {
          showMask: r
        } = this;
        return rn(f("div", {
          role: "none",
          ref: "containerRef",
          class: [`${e}-modal-container`, this.themeClass, this.namespace],
          style: this.cssVars
        }, f(zw, Object.assign({
          style: this.overlayStyle
        }, this.$attrs, {
          ref: "bodyWrapper",
          displayDirective: this.displayDirective,
          show: this.show,
          preset: this.preset,
          autoFocus: this.autoFocus,
          trapFocus: this.trapFocus,
          draggable: this.draggable,
          blockScroll: this.blockScroll,
          maskHidden: !r
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
            return f(It, {
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
        }), this.$slots)), [[Bi, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
}), Ew = Object.assign(Object.assign({}, Ti), {
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
  zIndex: Number,
  onPositiveClick: Function,
  onNegativeClick: Function,
  onClose: Function,
  onMaskClick: Function,
  draggable: [Boolean, Object]
}), Dw = J({
  name: "DialogEnvironment",
  props: Object.assign(Object.assign({}, Ew), {
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
    const t = L(!0);
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
    function s(c) {
      const {
        onMaskClick: v,
        maskClosable: g
      } = e;
      v && (v(c), g && d());
    }
    function l() {
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
      handleMaskClick: s,
      handleEsc: l
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
      handleEsc: s,
      to: l,
      zIndex: d,
      maskClosable: u,
      show: c
    } = this;
    return f(Yc, {
      show: c,
      onUpdateShow: t,
      onMaskClick: a,
      onEsc: s,
      to: l,
      zIndex: d,
      maskClosable: u,
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
        draggableClass: v
      }) => f(Kc, Object.assign({}, zn(this.$props, Uc), {
        titleClass: zt([this.titleClass, v]),
        style: this.internalStyle,
        onClose: o,
        onNegativeClick: r,
        onPositiveClick: e
      }))
    });
  }
}), Tw = {
  injectionKey: String,
  to: [String, Object]
}, Zc = J({
  name: "DialogProvider",
  props: Tw,
  setup() {
    const e = L([]), t = {};
    function r(l = {}) {
      const d = wn(), u = Eo(Object.assign(Object.assign({}, l), {
        key: d,
        destroy: () => {
          var c;
          (c = t[`n-dialog-${d}`]) === null || c === void 0 || c.hide();
        }
      }));
      return e.value.push(u), u;
    }
    const o = ["info", "success", "warning", "error"].map((l) => (d) => r(Object.assign(Object.assign({}, d), {
      type: l
    })));
    function i(l) {
      const {
        value: d
      } = e;
      d.splice(d.findIndex((u) => u.key === l), 1);
    }
    function a() {
      Object.values(t).forEach((l) => {
        l == null || l.hide();
      });
    }
    const s = {
      create: r,
      destroyAll: a,
      info: o[0],
      success: o[1],
      warning: o[2],
      error: o[3]
    };
    return ze(Wc, s), ze(jc, {
      clickedRef: Qa(64),
      clickedPositionRef: Ja()
    }), ze(xw, e), Object.assign(Object.assign({}, s), {
      dialogList: e,
      dialogInstRefs: t,
      handleAfterLeave: i
    });
  },
  render() {
    var e, t;
    return f(je, null, [this.dialogList.map((r) => f(Dw, yr(r, ["destroy", "style"], {
      internalStyle: r.style,
      to: this.to,
      ref: (o) => {
        o === null ? delete this.dialogInstRefs[`n-dialog-${r.key}`] : this.dialogInstRefs[`n-dialog-${r.key}`] = o;
      },
      internalKey: r.key,
      onInternalAfterLeave: this.handleAfterLeave
    }))), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)]);
  }
}), Jc = "n-loading-bar", Qc = "n-loading-bar-api";
function Ow(e) {
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
const Mw = {
  name: "LoadingBar",
  common: Ye,
  self: Ow
}, Iw = z("loading-bar-container", `
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`, [Mo({
  enterDuration: "0.3s",
  leaveDuration: "0.8s"
}), z("loading-bar", `
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `, [I("starting", `
 background: var(--n-color-loading);
 `), I("finishing", `
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `), I("error", `
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]);
var ei = function(e, t, r, o) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function l(c) {
      try {
        u(o.next(c));
      } catch (v) {
        s(v);
      }
    }
    function d(c) {
      try {
        u(o.throw(c));
      } catch (v) {
        s(v);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(l, d);
    }
    u((o = o.apply(e, t || [])).next());
  });
};
function ti(e, t) {
  return `${t}-loading-bar ${t}-loading-bar--${e}`;
}
const Lw = J({
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
    } = pe(Jc), o = L(null), i = L(!1), a = L(!1), s = L(!1), l = L(!1);
    let d = !1;
    const u = L(!1), c = E(() => {
      const {
        loadingBarStyle: P
      } = t;
      return P ? P[u.value ? "error" : "loading"] : "";
    });
    function v() {
      return ei(this, void 0, void 0, function* () {
        i.value = !1, s.value = !1, d = !1, u.value = !1, l.value = !0, yield ht(), l.value = !1;
      });
    }
    function g() {
      return ei(this, arguments, void 0, function* (P = 0, k = 80, S = "starting") {
        if (a.value = !0, yield v(), d) return;
        s.value = !0, yield ht();
        const w = o.value;
        w && (w.style.maxWidth = `${P}%`, w.style.transition = "none", w.offsetWidth, w.className = ti(S, r.value), w.style.transition = "", w.style.maxWidth = `${k}%`);
      });
    }
    function m() {
      return ei(this, void 0, void 0, function* () {
        if (d || u.value) return;
        a.value && (yield ht()), d = !0;
        const P = o.value;
        P && (P.className = ti("finishing", r.value), P.style.maxWidth = "100%", P.offsetWidth, s.value = !1);
      });
    }
    function h() {
      if (!(d || u.value))
        if (!s.value)
          g(100, 100, "error").then(() => {
            u.value = !0;
            const P = o.value;
            P && (P.className = ti("error", r.value), P.offsetWidth, s.value = !1);
          });
        else {
          u.value = !0;
          const P = o.value;
          if (!P) return;
          P.className = ti("error", r.value), P.style.maxWidth = "100%", P.offsetWidth, s.value = !1;
        }
    }
    function p() {
      i.value = !0;
    }
    function x() {
      i.value = !1;
    }
    function b() {
      return ei(this, void 0, void 0, function* () {
        yield v();
      });
    }
    const y = ve("LoadingBar", "-loading-bar", Iw, Mw, t, r), B = E(() => {
      const {
        self: {
          height: P,
          colorError: k,
          colorLoading: S
        }
      } = y.value;
      return {
        "--n-height": P,
        "--n-color-loading": S,
        "--n-color-error": k
      };
    }), C = e ? Xe("loading-bar", void 0, B, t) : void 0;
    return {
      mergedClsPrefix: r,
      loadingBarRef: o,
      started: a,
      loading: s,
      entering: i,
      transitionDisabled: l,
      start: g,
      error: h,
      finish: m,
      handleEnter: p,
      handleAfterEnter: x,
      handleAfterLeave: b,
      mergedLoadingBarStyle: c,
      cssVars: e ? void 0 : B,
      themeClass: C == null ? void 0 : C.themeClass,
      onRender: C == null ? void 0 : C.onRender
    };
  },
  render() {
    if (!this.started) return null;
    const {
      mergedClsPrefix: e
    } = this;
    return f(It, {
      name: "fade-in-transition",
      appear: !0,
      onEnter: this.handleEnter,
      onAfterEnter: this.handleAfterEnter,
      onAfterLeave: this.handleAfterLeave,
      css: !this.transitionDisabled
    }, {
      default: () => {
        var t;
        return (t = this.onRender) === null || t === void 0 || t.call(this), rn(f("div", {
          class: [`${e}-loading-bar-container`, this.themeClass, this.containerClass],
          style: this.containerStyle
        }, f("div", {
          ref: "loadingBarRef",
          class: [`${e}-loading-bar`],
          style: [this.cssVars, this.mergedLoadingBarStyle]
        })), [[Un, this.loading || !this.loading && this.entering]]);
      }
    });
  }
}), Nw = Object.assign(Object.assign({}, ve.props), {
  to: {
    type: [String, Object, Boolean],
    default: void 0
  },
  containerClass: String,
  containerStyle: [String, Object],
  loadingBarStyle: {
    type: Object
  }
}), Hw = J({
  name: "LoadingBarProvider",
  props: Nw,
  setup(e) {
    const t = br(), r = L(null), o = {
      start() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.start() : ht(() => {
          var s;
          (s = r.value) === null || s === void 0 || s.start();
        });
      },
      error() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.error() : ht(() => {
          var s;
          (s = r.value) === null || s === void 0 || s.error();
        });
      },
      finish() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.finish() : ht(() => {
          var s;
          (s = r.value) === null || s === void 0 || s.finish();
        });
      }
    }, {
      mergedClsPrefixRef: i
    } = Ae(e);
    return ze(Qc, o), ze(Jc, {
      props: e,
      mergedClsPrefixRef: i
    }), Object.assign(o, {
      loadingBarRef: r
    });
  },
  render() {
    var e, t;
    return f(je, null, f(yi, {
      disabled: this.to === !1,
      to: this.to || "body"
    }, f(Lw, {
      ref: "loadingBarRef",
      containerStyle: this.containerStyle,
      containerClass: this.containerClass
    })), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
  }
});
function jw() {
  const e = pe(Qc, null);
  return e === null && An("use-loading-bar", "No outer <n-loading-bar-provider /> founded."), e;
}
const ef = "n-message-api", tf = "n-message-provider", Ww = {
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
function _w(e) {
  const {
    textColor2: t,
    closeIconColor: r,
    closeIconColorHover: o,
    closeIconColorPressed: i,
    infoColor: a,
    successColor: s,
    errorColor: l,
    warningColor: d,
    popoverColor: u,
    boxShadow2: c,
    primaryColor: v,
    lineHeight: g,
    borderRadius: m,
    closeColorHover: h,
    closeColorPressed: p
  } = e;
  return Object.assign(Object.assign({}, Ww), {
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
    iconColorSuccess: s,
    iconColorWarning: d,
    iconColorError: l,
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
    borderRadius: m,
    border: "0"
  });
}
const Vw = {
  name: "Message",
  common: Ye,
  self: _w
}, nf = {
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
}, Uw = D([z("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [oc({
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
 border: var(--n-border);
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
 `, [["default", "info", "success", "warning", "error", "loading"].map((e) => I(`${e}-type`, [D("> *", `
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])), D("> *", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [en()])]), T("close", `
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
 `, [I("top", `
 top: 12px;
 left: 0;
 right: 0;
 `), I("top-left", `
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `), I("top-right", `
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `), I("bottom", `
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `), I("bottom-left", `
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `), I("bottom-right", `
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]), Kw = {
  info: () => f(pi, null),
  success: () => f(Rl, null),
  warning: () => f(Fi, null),
  error: () => f(kl, null),
  default: () => null
}, qw = J({
  name: "Message",
  props: Object.assign(Object.assign({}, nf), {
    render: Function
  }),
  setup(e) {
    const {
      inlineThemeDisabled: t,
      mergedRtlRef: r
    } = Ae(e), {
      props: o,
      mergedClsPrefixRef: i
    } = pe(tf), a = kt("Message", r, i), s = ve("Message", "-message", Uw, Vw, o, i), l = E(() => {
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
          lineHeight: B,
          borderRadius: C,
          border: P,
          iconColorInfo: k,
          iconColorSuccess: S,
          iconColorWarning: w,
          iconColorError: R,
          iconColorLoading: F,
          closeIconSize: N,
          closeBorderRadius: $,
          [Z("textColor", u)]: n,
          [Z("boxShadow", u)]: O,
          [Z("color", u)]: M,
          [Z("closeColorHover", u)]: W,
          [Z("closeColorPressed", u)]: H,
          [Z("closeIconColor", u)]: U,
          [Z("closeIconColorPressed", u)]: ee,
          [Z("closeIconColorHover", u)]: Y
        }
      } = s.value;
      return {
        "--n-bezier": c,
        "--n-margin": g,
        "--n-padding": v,
        "--n-max-width": m,
        "--n-font-size": y,
        "--n-icon-margin": h,
        "--n-icon-size": b,
        "--n-close-icon-size": N,
        "--n-close-border-radius": $,
        "--n-close-size": x,
        "--n-close-margin": p,
        "--n-text-color": n,
        "--n-color": M,
        "--n-box-shadow": O,
        "--n-icon-color-info": k,
        "--n-icon-color-success": S,
        "--n-icon-color-warning": w,
        "--n-icon-color-error": R,
        "--n-icon-color-loading": F,
        "--n-close-color-hover": W,
        "--n-close-color-pressed": H,
        "--n-close-icon-color": U,
        "--n-close-icon-color-pressed": ee,
        "--n-close-icon-color-hover": Y,
        "--n-line-height": B,
        "--n-border-radius": C,
        "--n-border": P
      };
    }), d = t ? Xe("message", E(() => e.type[0]), l, {}) : void 0;
    return {
      mergedClsPrefix: i,
      rtlEnabled: a,
      messageProviderProps: o,
      handleClose() {
        var u;
        (u = e.onClose) === null || u === void 0 || u.call(e);
      },
      cssVars: t ? void 0 : l,
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
      themeClass: s,
      onRender: l,
      icon: d,
      handleClose: u,
      showIcon: c
    } = this;
    l == null || l();
    let v;
    return f("div", {
      class: [`${i}-message-wrapper`, s],
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
      style: [{
        alignItems: this.placement.startsWith("top") ? "flex-start" : "flex-end"
      }, a]
    }, e ? e(this.$props) : f("div", {
      class: [`${i}-message ${i}-message--${t}-type`, this.rtlEnabled && `${i}-message--rtl`]
    }, (v = Gw(d, t, i)) && c ? f("div", {
      class: `${i}-message__icon ${i}-message__icon--${t}-type`
    }, f(Br, null, {
      default: () => v
    })) : null, f("div", {
      class: `${i}-message__content`
    }, mt(o)), r ? f(Jr, {
      clsPrefix: i,
      class: `${i}-message__close`,
      onClick: u,
      absolute: !0
    }) : null));
  }
});
function Gw(e, t, r) {
  if (typeof e == "function")
    return e();
  {
    const o = t === "loading" ? f(Zn, {
      clsPrefix: r,
      strokeWidth: 24,
      scale: 0.85
    }) : Kw[t]();
    return o ? f(Ct, {
      clsPrefix: r,
      key: t
    }, {
      default: () => o
    }) : null;
  }
}
const Xw = J({
  name: "MessageEnvironment",
  props: Object.assign(Object.assign({}, nf), {
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
    const r = L(!0);
    $t(() => {
      o();
    });
    function o() {
      const {
        duration: c
      } = e;
      c && (t = window.setTimeout(s, c));
    }
    function i(c) {
      c.currentTarget === c.target && t !== null && (window.clearTimeout(t), t = null);
    }
    function a(c) {
      c.currentTarget === c.target && o();
    }
    function s() {
      const {
        onHide: c
      } = e;
      r.value = !1, t && (window.clearTimeout(t), t = null), c && c();
    }
    function l() {
      const {
        onClose: c
      } = e;
      c && c(), s();
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
      s();
    }
    return {
      show: r,
      hide: s,
      handleClose: l,
      handleAfterLeave: d,
      handleMouseleave: a,
      handleMouseenter: i,
      deactivate: u
    };
  },
  render() {
    return f(Pl, {
      appear: !0,
      onAfterLeave: this.handleAfterLeave,
      onLeave: this.onLeave
    }, {
      default: () => [this.show ? f(qw, {
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
}), Yw = Object.assign(Object.assign({}, ve.props), {
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
}), Zw = J({
  name: "MessageProvider",
  props: Yw,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = L([]), o = L({}), i = {
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
      destroyAll: l
    };
    ze(tf, {
      props: e,
      mergedClsPrefixRef: t
    }), ze(ef, i);
    function a(d, u) {
      const c = wn(), v = Eo(Object.assign(Object.assign({}, u), {
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
    function s(d) {
      r.value.splice(r.value.findIndex((u) => u.key === d), 1), delete o.value[d];
    }
    function l() {
      Object.values(o.value).forEach((d) => {
        d.hide();
      });
    }
    return Object.assign({
      mergedClsPrefix: t,
      messageRefs: o,
      messageList: r,
      handleAfterLeave: s
    }, i);
  },
  render() {
    var e, t, r;
    return f(je, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e), this.messageList.length ? f(yi, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, f("div", {
      class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass],
      key: "message-container",
      style: this.containerStyle
    }, this.messageList.map((o) => f(Xw, Object.assign({
      ref: (i) => {
        i && (this.messageRefs[o.key] = i);
      },
      internalKey: o.key,
      onInternalAfterLeave: this.handleAfterLeave
    }, yr(o, ["destroy"], void 0), {
      duration: o.duration === void 0 ? this.duration : o.duration,
      keepAliveOnHover: o.keepAliveOnHover === void 0 ? this.keepAliveOnHover : o.keepAliveOnHover,
      closable: o.closable === void 0 ? this.closable : o.closable
    }))))) : null);
  }
});
function Jw() {
  const e = pe(ef, null);
  return e === null && An("use-message", "No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."), e;
}
const Qw = J({
  name: "ModalEnvironment",
  props: Object.assign(Object.assign({}, Xc), {
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
    const t = L(!0);
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
    function s(c) {
      const {
        onMaskClick: v,
        maskClosable: g
      } = e;
      v && (v(c), g && d());
    }
    function l() {
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
      handleMaskClick: s,
      handleEsc: l
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
    return f(Yc, Object.assign({}, this.$props, {
      show: i,
      onUpdateShow: e,
      onMaskClick: r,
      onEsc: o,
      onAfterLeave: t,
      internalAppear: !0,
      internalModal: !0
    }), this.$slots);
  }
}), eS = {
  to: [String, Object]
}, rf = J({
  name: "ModalProvider",
  props: eS,
  setup() {
    const e = L([]), t = {};
    function r(s = {}) {
      const l = wn(), d = Eo(Object.assign(Object.assign({}, s), {
        key: l,
        destroy: () => {
          var u;
          (u = t[`n-modal-${l}`]) === null || u === void 0 || u.hide();
        }
      }));
      return e.value.push(d), d;
    }
    function o(s) {
      const {
        value: l
      } = e;
      l.splice(l.findIndex((d) => d.key === s), 1);
    }
    function i() {
      Object.values(t).forEach((s) => {
        s == null || s.hide();
      });
    }
    const a = {
      create: r,
      destroyAll: i
    };
    return ze(qc, a), ze(Rw, {
      clickedRef: Qa(64),
      clickedPositionRef: Ja()
    }), ze(Pw, e), Object.assign(Object.assign({}, a), {
      modalList: e,
      modalInstRefs: t,
      handleAfterLeave: o
    });
  },
  render() {
    var e, t;
    return f(je, null, [this.modalList.map((r) => {
      var o;
      return f(Qw, yr(r, ["destroy", "render"], {
        to: (o = r.to) !== null && o !== void 0 ? o : this.to,
        ref: (i) => {
          i === null ? delete this.modalInstRefs[`n-modal-${r.key}`] : this.modalInstRefs[`n-modal-${r.key}`] = i;
        },
        internalKey: r.key,
        onInternalAfterLeave: this.handleAfterLeave
      }), {
        default: r.render
      });
    }), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)]);
  }
}), tS = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px"
};
function nS(e) {
  const {
    textColor2: t,
    successColor: r,
    infoColor: o,
    warningColor: i,
    errorColor: a,
    popoverColor: s,
    closeIconColor: l,
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
  return Object.assign(Object.assign({}, tS), {
    borderRadius: h,
    lineHeight: b,
    fontSize: y,
    headerFontWeight: p,
    iconColor: t,
    iconColorSuccess: r,
    iconColorInfo: o,
    iconColorWarning: i,
    iconColorError: a,
    color: s,
    textColor: t,
    closeIconColor: l,
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
const rS = {
  name: "Notification",
  common: Ye,
  peers: {
    Scrollbar: Jn
  },
  self: nS
}, Oi = "n-notification-provider", oS = J({
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
    } = pe(Oi), o = L(null);
    return rt(() => {
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
    }, t ? f(On, {
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      contentStyle: {
        overflow: "hidden"
      }
    }, e) : e);
  }
}), iS = {
  info: () => f(pi, null),
  success: () => f(Rl, null),
  warning: () => f(Fi, null),
  error: () => f(kl, null),
  default: () => null
}, Nl = {
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
}, aS = Kn(Nl), lS = J({
  name: "Notification",
  props: Nl,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      mergedThemeRef: r,
      props: o
    } = pe(Oi), {
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(), s = kt("Notification", a, t), l = E(() => {
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
          headerFontWeight: B,
          boxShadow: C,
          lineHeight: P,
          fontSize: k,
          closeMargin: S,
          closeSize: w,
          width: R,
          padding: F,
          closeIconSize: N,
          closeBorderRadius: $,
          closeColorHover: n,
          closeColorPressed: O,
          titleFontSize: M,
          metaFontSize: W,
          descriptionFontSize: H,
          [Z("iconColor", u)]: U
        },
        common: {
          cubicBezierEaseOut: ee,
          cubicBezierEaseIn: Y,
          cubicBezierEaseInOut: K
        }
      } = r.value, {
        left: j,
        right: q,
        top: X,
        bottom: ae
      } = Vt(F);
      return {
        "--n-color": c,
        "--n-font-size": k,
        "--n-text-color": v,
        "--n-description-text-color": x,
        "--n-action-text-color": b,
        "--n-title-text-color": p,
        "--n-title-font-weight": B,
        "--n-bezier": K,
        "--n-bezier-ease-out": ee,
        "--n-bezier-ease-in": Y,
        "--n-border-radius": y,
        "--n-box-shadow": C,
        "--n-close-border-radius": $,
        "--n-close-color-hover": n,
        "--n-close-color-pressed": O,
        "--n-close-icon-color": g,
        "--n-close-icon-color-hover": m,
        "--n-close-icon-color-pressed": h,
        "--n-line-height": P,
        "--n-icon-color": U,
        "--n-close-margin": S,
        "--n-close-size": w,
        "--n-close-icon-size": N,
        "--n-width": R,
        "--n-padding-left": j,
        "--n-padding-right": q,
        "--n-padding-top": X,
        "--n-padding-bottom": ae,
        "--n-title-font-size": M,
        "--n-meta-font-size": W,
        "--n-description-font-size": H
      };
    }), d = i ? Xe("notification", E(() => e.type[0]), l, o) : void 0;
    return {
      mergedClsPrefix: t,
      showAvatar: E(() => e.avatar || e.type !== "default"),
      handleCloseClick() {
        e.onClose();
      },
      rtlEnabled: s,
      cssVars: i ? void 0 : l,
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
    }, this.avatar ? mt(this.avatar) : this.type !== "default" ? f(Ct, {
      clsPrefix: t
    }, {
      default: () => iS[this.type]()
    }) : null) : null, this.closable ? f(Jr, {
      clsPrefix: t,
      class: `${t}-notification__close`,
      onClick: this.handleCloseClick
    }) : null, f("div", {
      ref: "bodyRef",
      class: `${t}-notification-main`
    }, this.title ? f("div", {
      class: `${t}-notification-main__header`
    }, mt(this.title)) : null, this.description ? f("div", {
      class: `${t}-notification-main__description`
    }, mt(this.description)) : null, this.content ? f("pre", {
      class: `${t}-notification-main__content`
    }, mt(this.content)) : null, this.meta || this.action ? f("div", {
      class: `${t}-notification-main-footer`
    }, this.meta ? f("div", {
      class: `${t}-notification-main-footer__meta`
    }, mt(this.meta)) : null, this.action ? f("div", {
      class: `${t}-notification-main-footer__action`
    }, mt(this.action)) : null) : null)));
  }
}), sS = Object.assign(Object.assign({}, Nl), {
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
}), dS = J({
  name: "NotificationEnvironment",
  props: Object.assign(Object.assign({}, sS), {
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
    } = pe(Oi), r = L(!0);
    let o = null;
    function i() {
      r.value = !1, o && window.clearTimeout(o);
    }
    function a(h) {
      t.value++, ht(() => {
        h.style.height = `${h.offsetHeight}px`, h.style.maxHeight = "0", h.style.transition = "none", h.offsetHeight, h.style.transition = "", h.style.maxHeight = h.style.height;
      });
    }
    function s(h) {
      t.value--, h.style.height = "", h.style.maxHeight = "";
      const {
        onAfterEnter: p,
        onAfterShow: x
      } = e;
      p && p(), x && x();
    }
    function l(h) {
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
      handleBeforeLeave: l,
      handleAfterEnter: s,
      handleBeforeEnter: a,
      handleMouseenter: v,
      handleMouseleave: g
    };
  },
  render() {
    return f(It, {
      name: "notification-transition",
      appear: !0,
      // convert to any since Element is not compatible with HTMLElement
      onBeforeEnter: this.handleBeforeEnter,
      onAfterEnter: this.handleAfterEnter,
      onBeforeLeave: this.handleBeforeLeave,
      onLeave: this.handleLeave,
      onAfterLeave: this.handleAfterLeave
    }, {
      default: () => this.show ? f(lS, Object.assign({}, zn(this.$props, aS), {
        onClose: this.handleClose,
        onMouseenter: this.duration && this.keepAliveOnHover ? this.handleMouseenter : void 0,
        onMouseleave: this.duration && this.keepAliveOnHover ? this.handleMouseleave : void 0
      })) : null
    });
  }
}), uS = D([z("notification-container", `
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
 `)])])])]), I("top, top-right, top-left", `
 top: 12px;
 `, [D("&.transitioning >", [z("scrollbar", [D(">", [z("scrollbar-container", `
 min-height: 100vh !important;
 `)])])])]), I("bottom, bottom-right, bottom-left", `
 bottom: 12px;
 `, [D(">", [z("scrollbar", [D(">", [z("scrollbar-container", [z("scrollbar-content", `
 padding-bottom: 12px;
 `)])])])]), z("notification-wrapper", `
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]), I("top, bottom", `
 left: 50%;
 transform: translateX(-50%);
 `, [z("notification-wrapper", [D("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: scale(0.85);
 `), D("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: scale(1);
 `)])]), I("top", [z("notification-wrapper", `
 transform-origin: top center;
 `)]), I("bottom", [z("notification-wrapper", `
 transform-origin: bottom center;
 `)]), I("top-right, bottom-right", [z("notification", `
 margin-left: 28px;
 margin-right: 16px;
 `)]), I("top-left, bottom-left", [z("notification", `
 margin-left: 16px;
 margin-right: 28px;
 `)]), I("top-right", `
 right: 0;
 `, [ni("top-right")]), I("top-left", `
 left: 0;
 `, [ni("top-left")]), I("bottom-right", `
 right: 0;
 `, [ni("bottom-right")]), I("bottom-left", `
 left: 0;
 `, [ni("bottom-left")]), I("scrollable", [I("top-right", `
 top: 0;
 `), I("top-left", `
 top: 0;
 `), I("bottom-right", `
 bottom: 0;
 `), I("bottom-left", `
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
 `, [T("avatar", [z("icon", `
 color: var(--n-icon-color);
 `), z("base-icon", `
 color: var(--n-icon-color);
 `)]), I("show-avatar", [z("notification-main", `
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]), I("closable", [z("notification-main", [D("> *:first-child", `
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
 `, [D("&:first-child", "margin: 0;")])])])])]);
function ni(e) {
  const r = e.split("-")[1] === "left" ? "calc(-100%)" : "calc(100%)";
  return z("notification-wrapper", [D("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: translate(${r}, 0);
 `), D("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: translate(0, 0);
 `)]);
}
const of = "n-notification-api", cS = Object.assign(Object.assign({}, ve.props), {
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
}), fS = J({
  name: "NotificationProvider",
  props: cS,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = L([]), o = {}, i = /* @__PURE__ */ new Set();
    function a(m) {
      const h = wn(), p = () => {
        i.add(h), o[h] && o[h].hide();
      }, x = Eo(Object.assign(Object.assign({}, m), {
        key: h,
        destroy: p,
        hide: p,
        deactivate: p
      })), {
        max: b
      } = e;
      if (b && r.value.length - i.size >= b) {
        let y = !1, B = 0;
        for (const C of r.value) {
          if (!i.has(C.key)) {
            o[C.key] && (C.destroy(), y = !0);
            break;
          }
          B++;
        }
        y || r.value.splice(B, 1);
      }
      return r.value.push(x), x;
    }
    const s = ["info", "success", "warning", "error"].map((m) => (h) => a(Object.assign(Object.assign({}, h), {
      type: m
    })));
    function l(m) {
      i.delete(m), r.value.splice(r.value.findIndex((h) => h.key === m), 1);
    }
    const d = ve("Notification", "-notification", uS, rS, e, t), u = {
      create: a,
      info: s[0],
      success: s[1],
      warning: s[2],
      error: s[3],
      open: v,
      destroyAll: g
    }, c = L(0);
    ze(of, u), ze(Oi, {
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
      handleAfterLeave: l
    }, u);
  },
  render() {
    var e, t, r;
    const {
      placement: o
    } = this;
    return f(je, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e), this.notificationList.length ? f(yi, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, f(oS, {
      class: this.containerClass,
      style: this.containerStyle,
      scrollable: this.scrollable && o !== "top" && o !== "bottom",
      placement: o
    }, {
      default: () => this.notificationList.map((i) => f(dS, Object.assign({
        ref: (a) => {
          const s = i.key;
          a === null ? delete this.notificationRefs[s] : this.notificationRefs[s] = a;
        }
      }, yr(i, ["destroy", "hide", "deactivate"]), {
        internalKey: i.key,
        onInternalAfterLeave: this.handleAfterLeave,
        keepAliveOnHover: i.keepAliveOnHover === void 0 ? this.keepAliveOnHover : i.keepAliveOnHover
      })))
    })) : null);
  }
});
function hS() {
  const e = pe(of, null);
  return e === null && An("use-notification", "No outer `n-notification-provider` found."), e;
}
const vS = J({
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
}), gS = {
  message: Jw,
  notification: hS,
  loadingBar: jw,
  dialog: _c,
  modal: Gc
};
function pS({
  providersAndProps: e,
  configProviderProps: t
}) {
  let r = Kf(i);
  const o = {
    app: r
  };
  function i() {
    return f(vc, re(t), {
      default: () => e.map(({
        type: l,
        Provider: d,
        props: u
      }) => f(d, re(u), {
        default: () => f(vS, {
          onSetup: () => o[l] = gS[l]()
        })
      }))
    });
  }
  let a;
  return Xr && (a = document.createElement("div"), document.body.appendChild(a), r.mount(a)), Object.assign({
    unmount: () => {
      var l;
      if (r === null || a === null) {
        Dt("discrete", "unmount call no need because discrete app has been unmounted");
        return;
      }
      r.unmount(), (l = a.parentNode) === null || l === void 0 || l.removeChild(a), a = null, r = null;
    }
  }, o);
}
function af(e, {
  configProviderProps: t,
  messageProviderProps: r,
  dialogProviderProps: o,
  notificationProviderProps: i,
  loadingBarProviderProps: a,
  modalProviderProps: s
} = {}) {
  const l = [];
  return e.forEach((u) => {
    switch (u) {
      case "message":
        l.push({
          type: u,
          Provider: Zw,
          props: r
        });
        break;
      case "notification":
        l.push({
          type: u,
          Provider: fS,
          props: i
        });
        break;
      case "dialog":
        l.push({
          type: u,
          Provider: Zc,
          props: o
        });
        break;
      case "loadingBar":
        l.push({
          type: u,
          Provider: Hw,
          props: a
        });
        break;
      case "modal":
        l.push({
          type: u,
          Provider: rf,
          props: s
        });
    }
  }), pS({
    providersAndProps: l,
    configProviderProps: t
  });
}
function mS(e) {
  const {
    textColor1: t,
    dividerColor: r,
    fontWeightStrong: o
  } = e;
  return {
    textColor: t,
    color: r,
    fontWeight: o
  };
}
const bS = {
  name: "Divider",
  common: Ye,
  self: mS
}, xS = z("divider", `
 position: relative;
 display: flex;
 width: 100%;
 box-sizing: border-box;
 font-size: 16px;
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
`, [Ue("vertical", `
 margin-top: 24px;
 margin-bottom: 24px;
 `, [Ue("no-title", `
 display: flex;
 align-items: center;
 `)]), T("title", `
 display: flex;
 align-items: center;
 margin-left: 12px;
 margin-right: 12px;
 white-space: nowrap;
 font-weight: var(--n-font-weight);
 `), I("title-position-left", [T("line", [I("left", {
  width: "28px"
})])]), I("title-position-right", [T("line", [I("right", {
  width: "28px"
})])]), I("dashed", [T("line", `
 background-color: #0000;
 height: 0px;
 width: 100%;
 border-style: dashed;
 border-width: 1px 0 0;
 `)]), I("vertical", `
 display: inline-block;
 height: 1em;
 margin: 0 8px;
 vertical-align: middle;
 width: 1px;
 `), T("line", `
 border: none;
 transition: background-color .3s var(--n-bezier), border-color .3s var(--n-bezier);
 height: 1px;
 width: 100%;
 margin: 0;
 `), Ue("dashed", [T("line", {
  backgroundColor: "var(--n-color)"
})]), I("dashed", [T("line", {
  borderColor: "var(--n-color)"
})]), I("vertical", {
  backgroundColor: "var(--n-color)"
})]), yS = Object.assign(Object.assign({}, ve.props), {
  titlePlacement: {
    type: String,
    default: "center"
  },
  dashed: Boolean,
  vertical: Boolean
}), CS = J({
  name: "Divider",
  props: yS,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Divider", "-divider", xS, bS, e, t), i = E(() => {
      const {
        common: {
          cubicBezierEaseInOut: s
        },
        self: {
          color: l,
          textColor: d,
          fontWeight: u
        }
      } = o.value;
      return {
        "--n-bezier": s,
        "--n-color": l,
        "--n-text-color": d,
        "--n-font-weight": u
      };
    }), a = r ? Xe("divider", void 0, i, e) : void 0;
    return {
      mergedClsPrefix: t,
      cssVars: r ? void 0 : i,
      themeClass: a == null ? void 0 : a.themeClass,
      onRender: a == null ? void 0 : a.onRender
    };
  },
  render() {
    var e;
    const {
      $slots: t,
      titlePlacement: r,
      vertical: o,
      dashed: i,
      cssVars: a,
      mergedClsPrefix: s
    } = this;
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      role: "separator",
      class: [`${s}-divider`, this.themeClass, {
        [`${s}-divider--vertical`]: o,
        [`${s}-divider--no-title`]: !t.default,
        [`${s}-divider--dashed`]: i,
        [`${s}-divider--title-position-${r}`]: t.default && r
      }],
      style: a
    }, o ? null : f("div", {
      class: `${s}-divider__line ${s}-divider__line--left`
    }), !o && t.default ? f(je, null, f("div", {
      class: `${s}-divider__title`
    }, this.$slots), f("div", {
      class: `${s}-divider__line ${s}-divider__line--right`
    })) : null);
  }
});
function wS(e) {
  const {
    modalColor: t,
    textColor1: r,
    textColor2: o,
    boxShadow3: i,
    lineHeight: a,
    fontWeightStrong: s,
    dividerColor: l,
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
    titleFontWeight: s,
    boxShadow: i,
    lineHeight: a,
    headerBorderBottom: `1px solid ${l}`,
    footerBorderTop: `1px solid ${l}`,
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
const SS = {
  name: "Drawer",
  common: Ye,
  peers: {
    Scrollbar: Jn
  },
  self: wS
}, BS = J({
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
    const t = L(!!e.show), r = L(null), o = pe(nl);
    let i = 0, a = "", s = null;
    const l = L(!1), d = L(!1), u = E(() => e.placement === "top" || e.placement === "bottom"), {
      mergedClsPrefixRef: c,
      mergedRtlRef: v
    } = Ae(e), g = kt("Drawer", v, c), m = k, h = (R) => {
      d.value = !0, i = u.value ? R.clientY : R.clientX, a = document.body.style.cursor, document.body.style.cursor = u.value ? "ns-resize" : "ew-resize", document.body.addEventListener("mousemove", P), document.body.addEventListener("mouseleave", m), document.body.addEventListener("mouseup", k);
    }, p = () => {
      s !== null && (window.clearTimeout(s), s = null), d.value ? l.value = !0 : s = window.setTimeout(() => {
        l.value = !0;
      }, 300);
    }, x = () => {
      s !== null && (window.clearTimeout(s), s = null), l.value = !1;
    }, {
      doUpdateHeight: b,
      doUpdateWidth: y
    } = o, B = (R) => {
      const {
        maxWidth: F
      } = e;
      if (F && R > F) return F;
      const {
        minWidth: N
      } = e;
      return N && R < N ? N : R;
    }, C = (R) => {
      const {
        maxHeight: F
      } = e;
      if (F && R > F) return F;
      const {
        minHeight: N
      } = e;
      return N && R < N ? N : R;
    };
    function P(R) {
      var F, N;
      if (d.value)
        if (u.value) {
          let $ = ((F = r.value) === null || F === void 0 ? void 0 : F.offsetHeight) || 0;
          const n = i - R.clientY;
          $ += e.placement === "bottom" ? n : -n, $ = C($), b($), i = R.clientY;
        } else {
          let $ = ((N = r.value) === null || N === void 0 ? void 0 : N.offsetWidth) || 0;
          const n = i - R.clientX;
          $ += e.placement === "right" ? n : -n, $ = B($), y($), i = R.clientX;
        }
    }
    function k() {
      d.value && (i = 0, d.value = !1, document.body.style.cursor = a, document.body.removeEventListener("mousemove", P), document.body.removeEventListener("mouseup", k), document.body.removeEventListener("mouseleave", m));
    }
    rt(() => {
      e.show && (t.value = !0);
    }), Me(() => e.show, (R) => {
      R || k();
    }), Bt(() => {
      k();
    });
    const S = E(() => {
      const {
        show: R
      } = e, F = [[Un, R]];
      return e.showMask || F.push([jr, e.onClickoutside, void 0, {
        capture: !0
      }]), F;
    });
    function w() {
      var R;
      t.value = !1, (R = e.onAfterLeave) === null || R === void 0 || R.call(e);
    }
    return Jd(E(() => e.blockScroll && t.value)), ze(Do, r), ze(Gr, null), ze(To, null), {
      bodyRef: r,
      rtlEnabled: g,
      mergedClsPrefix: o.mergedClsPrefixRef,
      isMounted: o.isMountedRef,
      mergedTheme: o.mergedThemeRef,
      displayed: t,
      transitionName: E(() => ({
        right: "slide-in-from-right-transition",
        left: "slide-in-from-left-transition",
        top: "slide-in-from-top-transition",
        bottom: "slide-in-from-bottom-transition"
      })[e.placement]),
      handleAfterLeave: w,
      bodyDirectives: S,
      handleMousedownResizeTrigger: h,
      handleMouseenterResizeTrigger: p,
      handleMouseleaveResizeTrigger: x,
      isDragging: d,
      isHoverOnResizeTrigger: l
    };
  },
  render() {
    const {
      $slots: e,
      mergedClsPrefix: t
    } = this;
    return this.displayDirective === "show" || this.displayed || this.show ? rn(
      /* Keep the wrapper dom. Make sure the drawer has a host.
      Nor the detached content will disappear without transition */
      f("div", {
        role: "none"
      }, f(cl, {
        disabled: !this.showMask || !this.trapFocus,
        active: this.show,
        autoFocus: this.autoFocus,
        onEsc: this.onEsc
      }, {
        default: () => f(It, {
          name: this.transitionName,
          appear: this.isMounted,
          onAfterEnter: this.onAfterEnter,
          onAfterLeave: this.handleAfterLeave
        }, {
          default: () => rn(f("div", Pt(this.$attrs, {
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
          }, e) : f(On, Object.assign({}, this.scrollbarProps, {
            contentStyle: this.contentStyle,
            contentClass: [`${t}-drawer-content-wrapper`, this.contentClass],
            theme: this.mergedTheme.peers.Scrollbar,
            themeOverrides: this.mergedTheme.peerOverrides.Scrollbar
          }), e)]), this.bodyDirectives)
        })
      })),
      [[Un, this.displayDirective === "if" || this.displayed || this.show]]
    ) : null;
  }
}), {
  cubicBezierEaseIn: kS,
  cubicBezierEaseOut: RS
} = dn;
function PS({
  duration: e = "0.3s",
  leaveDuration: t = "0.2s",
  name: r = "slide-in-from-bottom"
} = {}) {
  return [D(`&.${r}-transition-leave-active`, {
    transition: `transform ${t} ${kS}`
  }), D(`&.${r}-transition-enter-active`, {
    transition: `transform ${e} ${RS}`
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
  cubicBezierEaseIn: FS,
  cubicBezierEaseOut: $S
} = dn;
function zS({
  duration: e = "0.3s",
  leaveDuration: t = "0.2s",
  name: r = "slide-in-from-left"
} = {}) {
  return [D(`&.${r}-transition-leave-active`, {
    transition: `transform ${t} ${FS}`
  }), D(`&.${r}-transition-enter-active`, {
    transition: `transform ${e} ${$S}`
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
  cubicBezierEaseIn: AS,
  cubicBezierEaseOut: ES
} = dn;
function DS({
  duration: e = "0.3s",
  leaveDuration: t = "0.2s",
  name: r = "slide-in-from-right"
} = {}) {
  return [D(`&.${r}-transition-leave-active`, {
    transition: `transform ${t} ${AS}`
  }), D(`&.${r}-transition-enter-active`, {
    transition: `transform ${e} ${ES}`
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
  cubicBezierEaseIn: TS,
  cubicBezierEaseOut: OS
} = dn;
function MS({
  duration: e = "0.3s",
  leaveDuration: t = "0.2s",
  name: r = "slide-in-from-top"
} = {}) {
  return [D(`&.${r}-transition-leave-active`, {
    transition: `transform ${t} ${TS}`
  }), D(`&.${r}-transition-enter-active`, {
    transition: `transform ${e} ${OS}`
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
const IS = D([z("drawer", `
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
 `, [DS(), zS(), MS(), PS(), I("unselectable", `
 user-select: none; 
 -webkit-user-select: none;
 `), I("native-scrollbar", [z("drawer-content-wrapper", `
 overflow: auto;
 height: 100%;
 `)]), T("resize-trigger", `
 position: absolute;
 background-color: #0000;
 transition: background-color .3s var(--n-bezier);
 `, [I("hover", `
 background-color: var(--n-resize-trigger-color-hover);
 `)]), z("drawer-content-wrapper", `
 box-sizing: border-box;
 `), z("drawer-content", `
 height: 100%;
 display: flex;
 flex-direction: column;
 `, [I("native-scrollbar", [z("drawer-body-content-wrapper", `
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
 `, [T("main", `
 flex: 1;
 `), T("close", `
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
 `)]), I("right-placement", `
 top: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-bottom-left-radius: var(--n-border-radius);
 `, [T("resize-trigger", `
 width: 3px;
 height: 100%;
 top: 0;
 left: 0;
 transform: translateX(-1.5px);
 cursor: ew-resize;
 `)]), I("left-placement", `
 top: 0;
 bottom: 0;
 left: 0;
 border-top-right-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `, [T("resize-trigger", `
 width: 3px;
 height: 100%;
 top: 0;
 right: 0;
 transform: translateX(1.5px);
 cursor: ew-resize;
 `)]), I("top-placement", `
 top: 0;
 left: 0;
 right: 0;
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `, [T("resize-trigger", `
 width: 100%;
 height: 3px;
 bottom: 0;
 left: 0;
 transform: translateY(1.5px);
 cursor: ns-resize;
 `)]), I("bottom-placement", `
 left: 0;
 bottom: 0;
 right: 0;
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 `, [T("resize-trigger", `
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
 `, [I("invisible", `
 background-color: rgba(0, 0, 0, 0)
 `), Mo({
  enterDuration: "0.2s",
  leaveDuration: "0.2s",
  enterCubicBezier: "var(--n-bezier-in)",
  leaveCubicBezier: "var(--n-bezier-out)"
})])]), LS = Object.assign(Object.assign({}, ve.props), {
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
}), NS = J({
  name: "Drawer",
  inheritAttrs: !1,
  props: LS,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.drawerStyle !== void 0 && Qe("drawer", "`drawer-style` is deprecated, please use `style` instead."), e.drawerClass !== void 0 && Qe("drawer", "`drawer-class` is deprecated, please use `class` instead."), e.target !== void 0 && Qe("drawer", "`target` is deprecated, please use `to` instead."), e.onShow !== void 0 && Qe("drawer", "`on-show` is deprecated, please use `on-update:show` instead."), e.onHide !== void 0 && Qe("drawer", "`on-hide` is deprecated, please use `on-update:show` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      namespaceRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = br(), a = ve("Drawer", "-drawer", IS, SS, e, t), s = L(e.defaultWidth), l = L(e.defaultHeight), d = Et(ie(e, "width"), s), u = Et(ie(e, "height"), l), c = E(() => {
      const {
        placement: k
      } = e;
      return k === "top" || k === "bottom" ? "" : bt(d.value);
    }), v = E(() => {
      const {
        placement: k
      } = e;
      return k === "left" || k === "right" ? "" : bt(u.value);
    }), g = (k) => {
      const {
        onUpdateWidth: S,
        "onUpdate:width": w
      } = e;
      S && ne(S, k), w && ne(w, k), s.value = k;
    }, m = (k) => {
      const {
        onUpdateHeight: S,
        "onUpdate:width": w
      } = e;
      S && ne(S, k), w && ne(w, k), l.value = k;
    }, h = E(() => [{
      width: c.value,
      height: v.value
    }, e.drawerStyle || ""]);
    function p(k) {
      const {
        onMaskClick: S,
        maskClosable: w
      } = e;
      w && B(!1), S && S(k);
    }
    function x(k) {
      p(k);
    }
    const b = Zd();
    function y(k) {
      var S;
      (S = e.onEsc) === null || S === void 0 || S.call(e), e.show && e.closeOnEsc && gu(k) && (b.value || B(!1));
    }
    function B(k) {
      const {
        onHide: S,
        onUpdateShow: w,
        "onUpdate:show": R
      } = e;
      w && ne(w, k), R && ne(R, k), S && !k && ne(S, k);
    }
    ze(nl, {
      isMountedRef: i,
      mergedThemeRef: a,
      mergedClsPrefixRef: t,
      doUpdateShow: B,
      doUpdateHeight: m,
      doUpdateWidth: g
    });
    const C = E(() => {
      const {
        common: {
          cubicBezierEaseInOut: k,
          cubicBezierEaseIn: S,
          cubicBezierEaseOut: w
        },
        self: {
          color: R,
          textColor: F,
          boxShadow: N,
          lineHeight: $,
          headerPadding: n,
          footerPadding: O,
          borderRadius: M,
          bodyPadding: W,
          titleFontSize: H,
          titleTextColor: U,
          titleFontWeight: ee,
          headerBorderBottom: Y,
          footerBorderTop: K,
          closeIconColor: j,
          closeIconColorHover: q,
          closeIconColorPressed: X,
          closeColorHover: ae,
          closeColorPressed: le,
          closeIconSize: ce,
          closeSize: be,
          closeBorderRadius: G,
          resizableTriggerColorHover: ue
        }
      } = a.value;
      return {
        "--n-line-height": $,
        "--n-color": R,
        "--n-border-radius": M,
        "--n-text-color": F,
        "--n-box-shadow": N,
        "--n-bezier": k,
        "--n-bezier-out": w,
        "--n-bezier-in": S,
        "--n-header-padding": n,
        "--n-body-padding": W,
        "--n-footer-padding": O,
        "--n-title-text-color": U,
        "--n-title-font-size": H,
        "--n-title-font-weight": ee,
        "--n-header-border-bottom": Y,
        "--n-footer-border-top": K,
        "--n-close-icon-color": j,
        "--n-close-icon-color-hover": q,
        "--n-close-icon-color-pressed": X,
        "--n-close-size": be,
        "--n-close-color-hover": ae,
        "--n-close-color-pressed": le,
        "--n-close-icon-size": ce,
        "--n-close-border-radius": G,
        "--n-resize-trigger-color-hover": ue
      };
    }), P = o ? Xe("drawer", void 0, C, e) : void 0;
    return {
      mergedClsPrefix: t,
      namespace: r,
      mergedBodyStyle: h,
      handleOutsideClick: x,
      handleMaskClick: p,
      handleEsc: y,
      mergedTheme: a,
      cssVars: o ? void 0 : C,
      themeClass: P == null ? void 0 : P.themeClass,
      onRender: P == null ? void 0 : P.onRender,
      isMounted: i
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return f(ll, {
      to: this.to,
      show: this.show
    }, {
      default: () => {
        var t;
        return (t = this.onRender) === null || t === void 0 || t.call(this), rn(f("div", {
          class: [`${e}-drawer-container`, this.namespace, this.themeClass],
          style: this.cssVars,
          role: "none"
        }, this.showMask ? f(It, {
          name: "fade-in-transition",
          appear: this.isMounted
        }, {
          default: () => this.show ? f("div", {
            "aria-hidden": !0,
            class: [`${e}-drawer-mask`, this.showMask === "transparent" && `${e}-drawer-mask--invisible`],
            onClick: this.handleMaskClick
          }) : null
        }) : null, f(BS, Object.assign({}, this.$attrs, {
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
        }), this.$slots)), [[Bi, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
}), HS = {
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
}, jS = J({
  name: "DrawerContent",
  props: HS,
  slots: Object,
  setup() {
    const e = pe(nl, null);
    e || An("drawer-content", "`n-drawer-content` must be placed inside `n-drawer`.");
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
      bodyContentClass: s,
      bodyContentStyle: l,
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
    }, h.header !== void 0 ? h.header() : e), m && f(Jr, {
      onClick: this.handleCloseClick,
      clsPrefix: t,
      class: `${t}-drawer-header__close`,
      absolute: !0
    })) : null, r ? f("div", {
      class: [`${t}-drawer-body`, i],
      style: a,
      role: "none"
    }, f("div", {
      class: [`${t}-drawer-body-content-wrapper`, s],
      style: l,
      role: "none"
    }, h)) : f(On, Object.assign({
      themeOverrides: o.peerOverrides.Scrollbar,
      theme: o.peers.Scrollbar
    }, g, {
      class: `${t}-drawer-body`,
      contentClass: [`${t}-drawer-body-content-wrapper`, s],
      contentStyle: l
    }), h), h.footer ? f("div", {
      class: [`${t}-drawer-footer`, c],
      style: v,
      role: "none"
    }, h.footer()) : null);
  }
}), WS = {
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
function _S(e) {
  const {
    heightSmall: t,
    heightMedium: r,
    heightLarge: o,
    textColor1: i,
    errorColor: a,
    warningColor: s,
    lineHeight: l,
    textColor3: d
  } = e;
  return Object.assign(Object.assign({}, WS), {
    blankHeightSmall: t,
    blankHeightMedium: r,
    blankHeightLarge: o,
    lineHeight: l,
    labelTextColor: i,
    asteriskColor: a,
    feedbackTextColorError: a,
    feedbackTextColorWarning: s,
    feedbackTextColor: d
  });
}
const lf = {
  name: "Form",
  common: Ye,
  self: _S
}, VS = {
  iconSize: "22px"
};
function US(e) {
  const {
    fontSize: t,
    warningColor: r
  } = e;
  return Object.assign(Object.assign({}, VS), {
    fontSize: t,
    iconColor: r
  });
}
const KS = {
  name: "Popconfirm",
  common: Ye,
  peers: {
    Button: zi,
    Popover: kr
  },
  self: US
};
function qS(e) {
  const {
    opacityDisabled: t,
    heightTiny: r,
    heightSmall: o,
    heightMedium: i,
    heightLarge: a,
    heightHuge: s,
    primaryColor: l,
    fontSize: d
  } = e;
  return {
    fontSize: d,
    textColor: l,
    sizeTiny: r,
    sizeSmall: o,
    sizeMedium: i,
    sizeLarge: a,
    sizeHuge: s,
    color: l,
    opacitySpinning: t
  };
}
const GS = {
  name: "Spin",
  common: Ye,
  self: qS
}, XS = {
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
function YS(e) {
  const {
    primaryColor: t,
    opacityDisabled: r,
    borderRadius: o,
    textColor3: i
  } = e;
  return Object.assign(Object.assign({}, XS), {
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
const ZS = {
  name: "Switch",
  common: Ye,
  self: YS
}, Lo = "n-form", sf = "n-form-item-insts", JS = z("form", [I("inline", `
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
var QS = function(e, t, r, o) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function l(c) {
      try {
        u(o.next(c));
      } catch (v) {
        s(v);
      }
    }
    function d(c) {
      try {
        u(o.throw(c));
      } catch (v) {
        s(v);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(l, d);
    }
    u((o = o.apply(e, t || [])).next());
  });
};
const e2 = Object.assign(Object.assign({}, ve.props), {
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
}), t2 = J({
  name: "Form",
  props: e2,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e);
    ve("Form", "-form", JS, lf, e, t);
    const r = {}, o = L(void 0), i = (d) => {
      const u = o.value;
      (u === void 0 || d >= u) && (o.value = d);
    };
    function a(d) {
      return QS(this, arguments, void 0, function* (u, c = () => !0) {
        return yield new Promise((v, g) => {
          const m = [];
          for (const h of Kn(r)) {
            const p = r[h];
            for (const x of p)
              x.path && m.push(x.internalValidate(null, c));
          }
          Promise.all(m).then((h) => {
            const p = h.some((y) => !y.valid), x = [], b = [];
            h.forEach((y) => {
              var B, C;
              !((B = y.errors) === null || B === void 0) && B.length && x.push(y.errors), !((C = y.warnings) === null || C === void 0) && C.length && b.push(y.warnings);
            }), u && u(x.length ? x : void 0, {
              warnings: b.length ? b : void 0
            }), p ? g(x.length ? x : void 0) : v({
              warnings: b.length ? b : void 0
            });
          });
        });
      });
    }
    function s() {
      for (const d of Kn(r)) {
        const u = r[d];
        for (const c of u)
          c.restoreValidation();
      }
    }
    return ze(Lo, {
      props: e,
      maxChildLabelWidthRef: o,
      deriveMaxChildLabelWidth: i
    }), ze(sf, {
      formItems: r
    }), Object.assign({
      validate: a,
      restoreValidation: s
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
function ir() {
  return ir = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, ir.apply(this, arguments);
}
function n2(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, $o(e, t);
}
function Na(e) {
  return Na = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Na(e);
}
function $o(e, t) {
  return $o = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, $o(e, t);
}
function r2() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ai(e, t, r) {
  return r2() ? ai = Reflect.construct.bind() : ai = function(i, a, s) {
    var l = [null];
    l.push.apply(l, a);
    var d = Function.bind.apply(i, l), u = new d();
    return s && $o(u, s.prototype), u;
  }, ai.apply(null, arguments);
}
function o2(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ha(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ha = function(o) {
    if (o === null || !o2(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(o)) return t.get(o);
      t.set(o, i);
    }
    function i() {
      return ai(o, arguments, Na(this).constructor);
    }
    return i.prototype = Object.create(o.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), $o(i, o);
  }, Ha(e);
}
var i2 = /%[sdj%]/g, df = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (df = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(o) {
    return typeof o == "string";
  }) && console.warn(t, r);
});
function ja(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(r) {
    var o = r.field;
    t[o] = t[o] || [], t[o].push(r);
  }), t;
}
function tn(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  var i = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var s = e.replace(i2, function(l) {
      if (l === "%%")
        return "%";
      if (i >= a)
        return l;
      switch (l) {
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
          return l;
      }
    });
    return s;
  }
  return e;
}
function a2(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Ft(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || a2(t) && typeof e == "string" && !e);
}
function l2(e, t, r) {
  var o = [], i = 0, a = e.length;
  function s(l) {
    o.push.apply(o, l || []), i++, i === a && r(o);
  }
  e.forEach(function(l) {
    t(l, s);
  });
}
function Sd(e, t, r) {
  var o = 0, i = e.length;
  function a(s) {
    if (s && s.length) {
      r(s);
      return;
    }
    var l = o;
    o = o + 1, l < i ? t(e[l], a) : r([]);
  }
  a([]);
}
function s2(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var Bd = /* @__PURE__ */ function(e) {
  n2(t, e);
  function t(r, o) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = r, i.fields = o, i;
  }
  return t;
}(/* @__PURE__ */ Ha(Error));
function d2(e, t, r, o, i) {
  if (t.first) {
    var a = new Promise(function(g, m) {
      var h = function(b) {
        return o(b), b.length ? m(new Bd(b, ja(b))) : g(i);
      }, p = s2(e);
      Sd(p, r, h);
    });
    return a.catch(function(g) {
      return g;
    }), a;
  }
  var s = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], l = Object.keys(e), d = l.length, u = 0, c = [], v = new Promise(function(g, m) {
    var h = function(x) {
      if (c.push.apply(c, x), u++, u === d)
        return o(c), c.length ? m(new Bd(c, ja(c))) : g(i);
    };
    l.length || (o(c), g(i)), l.forEach(function(p) {
      var x = e[p];
      s.indexOf(p) !== -1 ? Sd(x, r, h) : l2(x, r, h);
    });
  });
  return v.catch(function(g) {
    return g;
  }), v;
}
function u2(e) {
  return !!(e && e.message !== void 0);
}
function c2(e, t) {
  for (var r = e, o = 0; o < t.length; o++) {
    if (r == null)
      return r;
    r = r[t[o]];
  }
  return r;
}
function kd(e, t) {
  return function(r) {
    var o;
    return e.fullFields ? o = c2(t, e.fullFields) : o = t[r.field || e.fullField], u2(r) ? (r.field = r.field || e.fullField, r.fieldValue = o, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: o,
      field: r.field || e.fullField
    };
  };
}
function Rd(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = t[r];
        typeof o == "object" && typeof e[r] == "object" ? e[r] = ir({}, e[r], o) : e[r] = o;
      }
  }
  return e;
}
var uf = function(t, r, o, i, a, s) {
  t.required && (!o.hasOwnProperty(t.field) || Ft(r, s || t.type)) && i.push(tn(a.messages.required, t.fullField));
}, f2 = function(t, r, o, i, a) {
  (/^\s+$/.test(r) || r === "") && i.push(tn(a.messages.whitespace, t.fullField));
}, ri, h2 = function() {
  if (ri)
    return ri;
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
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(), a = new RegExp("(?:^" + r + "$)|(?:^" + i + "$)"), s = new RegExp("^" + r + "$"), l = new RegExp("^" + i + "$"), d = function(C) {
    return C && C.exact ? a : new RegExp("(?:" + t(C) + r + t(C) + ")|(?:" + t(C) + i + t(C) + ")", "g");
  };
  d.v4 = function(B) {
    return B && B.exact ? s : new RegExp("" + t(B) + r + t(B), "g");
  }, d.v6 = function(B) {
    return B && B.exact ? l : new RegExp("" + t(B) + i + t(B), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", v = d.v4().source, g = d.v6().source, m = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", p = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", x = "(?::\\d{2,5})?", b = '(?:[/?#][^\\s"]*)?', y = "(?:" + u + "|www\\.)" + c + "(?:localhost|" + v + "|" + g + "|" + m + h + p + ")" + x + b;
  return ri = new RegExp("(?:^" + y + "$)", "i"), ri;
}, Pd = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, co = {
  integer: function(t) {
    return co.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return co.number(t) && !co.integer(t);
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
    return typeof t == "object" && !co.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(Pd.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(h2());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(Pd.hex);
  }
}, v2 = function(t, r, o, i, a) {
  if (t.required && r === void 0) {
    uf(t, r, o, i, a);
    return;
  }
  var s = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], l = t.type;
  s.indexOf(l) > -1 ? co[l](r) || i.push(tn(a.messages.types[l], t.fullField, t.type)) : l && typeof r !== t.type && i.push(tn(a.messages.types[l], t.fullField, t.type));
}, g2 = function(t, r, o, i, a) {
  var s = typeof t.len == "number", l = typeof t.min == "number", d = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, v = null, g = typeof r == "number", m = typeof r == "string", h = Array.isArray(r);
  if (g ? v = "number" : m ? v = "string" : h && (v = "array"), !v)
    return !1;
  h && (c = r.length), m && (c = r.replace(u, "_").length), s ? c !== t.len && i.push(tn(a.messages[v].len, t.fullField, t.len)) : l && !d && c < t.min ? i.push(tn(a.messages[v].min, t.fullField, t.min)) : d && !l && c > t.max ? i.push(tn(a.messages[v].max, t.fullField, t.max)) : l && d && (c < t.min || c > t.max) && i.push(tn(a.messages[v].range, t.fullField, t.min, t.max));
}, Tr = "enum", p2 = function(t, r, o, i, a) {
  t[Tr] = Array.isArray(t[Tr]) ? t[Tr] : [], t[Tr].indexOf(r) === -1 && i.push(tn(a.messages[Tr], t.fullField, t[Tr].join(", ")));
}, m2 = function(t, r, o, i, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || i.push(tn(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var s = new RegExp(t.pattern);
      s.test(r) || i.push(tn(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, Ie = {
  required: uf,
  whitespace: f2,
  type: v2,
  range: g2,
  enum: p2,
  pattern: m2
}, b2 = function(t, r, o, i, a) {
  var s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ft(r, "string") && !t.required)
      return o();
    Ie.required(t, r, i, s, a, "string"), Ft(r, "string") || (Ie.type(t, r, i, s, a), Ie.range(t, r, i, s, a), Ie.pattern(t, r, i, s, a), t.whitespace === !0 && Ie.whitespace(t, r, i, s, a));
  }
  o(s);
}, x2 = function(t, r, o, i, a) {
  var s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ft(r) && !t.required)
      return o();
    Ie.required(t, r, i, s, a), r !== void 0 && Ie.type(t, r, i, s, a);
  }
  o(s);
}, y2 = function(t, r, o, i, a) {
  var s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (r === "" && (r = void 0), Ft(r) && !t.required)
      return o();
    Ie.required(t, r, i, s, a), r !== void 0 && (Ie.type(t, r, i, s, a), Ie.range(t, r, i, s, a));
  }
  o(s);
}, C2 = function(t, r, o, i, a) {
  var s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ft(r) && !t.required)
      return o();
    Ie.required(t, r, i, s, a), r !== void 0 && Ie.type(t, r, i, s, a);
  }
  o(s);
}, w2 = function(t, r, o, i, a) {
  var s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ft(r) && !t.required)
      return o();
    Ie.required(t, r, i, s, a), Ft(r) || Ie.type(t, r, i, s, a);
  }
  o(s);
}, S2 = function(t, r, o, i, a) {
  var s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ft(r) && !t.required)
      return o();
    Ie.required(t, r, i, s, a), r !== void 0 && (Ie.type(t, r, i, s, a), Ie.range(t, r, i, s, a));
  }
  o(s);
}, B2 = function(t, r, o, i, a) {
  var s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ft(r) && !t.required)
      return o();
    Ie.required(t, r, i, s, a), r !== void 0 && (Ie.type(t, r, i, s, a), Ie.range(t, r, i, s, a));
  }
  o(s);
}, k2 = function(t, r, o, i, a) {
  var s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (r == null && !t.required)
      return o();
    Ie.required(t, r, i, s, a, "array"), r != null && (Ie.type(t, r, i, s, a), Ie.range(t, r, i, s, a));
  }
  o(s);
}, R2 = function(t, r, o, i, a) {
  var s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ft(r) && !t.required)
      return o();
    Ie.required(t, r, i, s, a), r !== void 0 && Ie.type(t, r, i, s, a);
  }
  o(s);
}, P2 = "enum", F2 = function(t, r, o, i, a) {
  var s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ft(r) && !t.required)
      return o();
    Ie.required(t, r, i, s, a), r !== void 0 && Ie[P2](t, r, i, s, a);
  }
  o(s);
}, $2 = function(t, r, o, i, a) {
  var s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ft(r, "string") && !t.required)
      return o();
    Ie.required(t, r, i, s, a), Ft(r, "string") || Ie.pattern(t, r, i, s, a);
  }
  o(s);
}, z2 = function(t, r, o, i, a) {
  var s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ft(r, "date") && !t.required)
      return o();
    if (Ie.required(t, r, i, s, a), !Ft(r, "date")) {
      var d;
      r instanceof Date ? d = r : d = new Date(r), Ie.type(t, d, i, s, a), d && Ie.range(t, d.getTime(), i, s, a);
    }
  }
  o(s);
}, A2 = function(t, r, o, i, a) {
  var s = [], l = Array.isArray(r) ? "array" : typeof r;
  Ie.required(t, r, i, s, a, l), o(s);
}, ga = function(t, r, o, i, a) {
  var s = t.type, l = [], d = t.required || !t.required && i.hasOwnProperty(t.field);
  if (d) {
    if (Ft(r, s) && !t.required)
      return o();
    Ie.required(t, r, i, l, a, s), Ft(r, s) || Ie.type(t, r, i, l, a);
  }
  o(l);
}, E2 = function(t, r, o, i, a) {
  var s = [], l = t.required || !t.required && i.hasOwnProperty(t.field);
  if (l) {
    if (Ft(r) && !t.required)
      return o();
    Ie.required(t, r, i, s, a);
  }
  o(s);
}, yo = {
  string: b2,
  method: x2,
  number: y2,
  boolean: C2,
  regexp: w2,
  integer: S2,
  float: B2,
  array: k2,
  object: R2,
  enum: F2,
  pattern: $2,
  date: z2,
  url: ga,
  hex: ga,
  email: ga,
  required: A2,
  any: E2
};
function Wa() {
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
var _a = Wa(), Ur = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = _a, this.define(r);
  }
  var t = e.prototype;
  return t.define = function(o) {
    var i = this;
    if (!o)
      throw new Error("Cannot configure a schema with no rules");
    if (typeof o != "object" || Array.isArray(o))
      throw new Error("Rules must be an object");
    this.rules = {}, Object.keys(o).forEach(function(a) {
      var s = o[a];
      i.rules[a] = Array.isArray(s) ? s : [s];
    });
  }, t.messages = function(o) {
    return o && (this._messages = Rd(Wa(), o)), this._messages;
  }, t.validate = function(o, i, a) {
    var s = this;
    i === void 0 && (i = {}), a === void 0 && (a = function() {
    });
    var l = o, d = i, u = a;
    if (typeof d == "function" && (u = d, d = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, l), Promise.resolve(l);
    function c(p) {
      var x = [], b = {};
      function y(C) {
        if (Array.isArray(C)) {
          var P;
          x = (P = x).concat.apply(P, C);
        } else
          x.push(C);
      }
      for (var B = 0; B < p.length; B++)
        y(p[B]);
      x.length ? (b = ja(x), u(x, b)) : u(null, l);
    }
    if (d.messages) {
      var v = this.messages();
      v === _a && (v = Wa()), Rd(v, d.messages), d.messages = v;
    } else
      d.messages = this.messages();
    var g = {}, m = d.keys || Object.keys(this.rules);
    m.forEach(function(p) {
      var x = s.rules[p], b = l[p];
      x.forEach(function(y) {
        var B = y;
        typeof B.transform == "function" && (l === o && (l = ir({}, l)), b = l[p] = B.transform(b)), typeof B == "function" ? B = {
          validator: B
        } : B = ir({}, B), B.validator = s.getValidationMethod(B), B.validator && (B.field = p, B.fullField = B.fullField || p, B.type = s.getType(B), g[p] = g[p] || [], g[p].push({
          rule: B,
          value: b,
          source: l,
          field: p
        }));
      });
    });
    var h = {};
    return d2(g, d, function(p, x) {
      var b = p.rule, y = (b.type === "object" || b.type === "array") && (typeof b.fields == "object" || typeof b.defaultField == "object");
      y = y && (b.required || !b.required && p.value), b.field = p.field;
      function B(k, S) {
        return ir({}, S, {
          fullField: b.fullField + "." + k,
          fullFields: b.fullFields ? [].concat(b.fullFields, [k]) : [k]
        });
      }
      function C(k) {
        k === void 0 && (k = []);
        var S = Array.isArray(k) ? k : [k];
        !d.suppressWarning && S.length && e.warning("async-validator:", S), S.length && b.message !== void 0 && (S = [].concat(b.message));
        var w = S.map(kd(b, l));
        if (d.first && w.length)
          return h[b.field] = 1, x(w);
        if (!y)
          x(w);
        else {
          if (b.required && !p.value)
            return b.message !== void 0 ? w = [].concat(b.message).map(kd(b, l)) : d.error && (w = [d.error(b, tn(d.messages.required, b.field))]), x(w);
          var R = {};
          b.defaultField && Object.keys(p.value).map(function($) {
            R[$] = b.defaultField;
          }), R = ir({}, R, p.rule.fields);
          var F = {};
          Object.keys(R).forEach(function($) {
            var n = R[$], O = Array.isArray(n) ? n : [n];
            F[$] = O.map(B.bind(null, $));
          });
          var N = new e(F);
          N.messages(d.messages), p.rule.options && (p.rule.options.messages = d.messages, p.rule.options.error = d.error), N.validate(p.value, p.rule.options || d, function($) {
            var n = [];
            w && w.length && n.push.apply(n, w), $ && $.length && n.push.apply(n, $), x(n.length ? n : null);
          });
        }
      }
      var P;
      if (b.asyncValidator)
        P = b.asyncValidator(b, p.value, C, p.source, d);
      else if (b.validator) {
        try {
          P = b.validator(b, p.value, C, p.source, d);
        } catch (k) {
          console.error == null || console.error(k), d.suppressValidatorError || setTimeout(function() {
            throw k;
          }, 0), C(k.message);
        }
        P === !0 ? C() : P === !1 ? C(typeof b.message == "function" ? b.message(b.fullField || b.field) : b.message || (b.fullField || b.field) + " fails") : P instanceof Array ? C(P) : P instanceof Error && C(P.message);
      }
      P && P.then && P.then(function() {
        return C();
      }, function(k) {
        return C(k);
      });
    }, function(p) {
      c(p);
    }, l);
  }, t.getType = function(o) {
    if (o.type === void 0 && o.pattern instanceof RegExp && (o.type = "pattern"), typeof o.validator != "function" && o.type && !yo.hasOwnProperty(o.type))
      throw new Error(tn("Unknown rule type %s", o.type));
    return o.type || "string";
  }, t.getValidationMethod = function(o) {
    if (typeof o.validator == "function")
      return o.validator;
    var i = Object.keys(o), a = i.indexOf("message");
    return a !== -1 && i.splice(a, 1), i.length === 1 && i[0] === "required" ? yo.required : yo[this.getType(o)] || void 0;
  }, e;
}();
Ur.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  yo[t] = r;
};
Ur.warning = df;
Ur.messages = _a;
Ur.validators = yo;
const {
  cubicBezierEaseInOut: Fd
} = dn;
function D2({
  name: e = "fade-down",
  fromOffset: t = "-4px",
  enterDuration: r = ".3s",
  leaveDuration: o = ".3s",
  enterCubicBezier: i = Fd,
  leaveCubicBezier: a = Fd
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
const T2 = z("form-item", `
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
 `), I("auto-label-width", [z("form-item-label", "white-space: nowrap;")]), I("left-labelled", `
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
 `, [I("reverse-columns-space", `
 grid-template-columns: auto 1fr;
 `), I("left-mark", `
 grid-template-areas:
 "mark text"
 ". text";
 `), I("right-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), I("right-hanging-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), T("text", `
 grid-area: text; 
 `), T("asterisk", `
 grid-area: mark; 
 align-self: end;
 `)])]), I("top-labelled", `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [I("no-label", `
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
}, [I("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), I("error", {
  color: "var(--n-feedback-text-color-error)"
}), D2({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
function O2(e) {
  const t = pe(Lo, null);
  return {
    mergedSize: E(() => e.size !== void 0 ? e.size : (t == null ? void 0 : t.props.size) !== void 0 ? t.props.size : "medium")
  };
}
function M2(e) {
  const t = pe(Lo, null), r = E(() => {
    const {
      labelPlacement: h
    } = e;
    return h !== void 0 ? h : t != null && t.props.labelPlacement ? t.props.labelPlacement : "top";
  }), o = E(() => r.value === "left" && (e.labelWidth === "auto" || (t == null ? void 0 : t.props.labelWidth) === "auto")), i = E(() => {
    if (r.value === "top") return;
    const {
      labelWidth: h
    } = e;
    if (h !== void 0 && h !== "auto")
      return bt(h);
    if (o.value) {
      const p = t == null ? void 0 : t.maxChildLabelWidthRef.value;
      return p !== void 0 ? bt(p) : void 0;
    }
    if ((t == null ? void 0 : t.props.labelWidth) !== void 0)
      return bt(t.props.labelWidth);
  }), a = E(() => {
    const {
      labelAlign: h
    } = e;
    if (h) return h;
    if (t != null && t.props.labelAlign) return t.props.labelAlign;
  }), s = E(() => {
    var h;
    return [(h = e.labelProps) === null || h === void 0 ? void 0 : h.style, e.labelStyle, {
      width: i.value
    }];
  }), l = E(() => {
    const {
      showRequireMark: h
    } = e;
    return h !== void 0 ? h : t == null ? void 0 : t.props.showRequireMark;
  }), d = E(() => {
    const {
      requireMarkPlacement: h
    } = e;
    return h !== void 0 ? h : (t == null ? void 0 : t.props.requireMarkPlacement) || "right";
  }), u = L(!1), c = L(!1), v = E(() => {
    const {
      validationStatus: h
    } = e;
    if (h !== void 0) return h;
    if (u.value) return "error";
    if (c.value) return "warning";
  }), g = E(() => {
    const {
      showFeedback: h
    } = e;
    return h !== void 0 ? h : (t == null ? void 0 : t.props.showFeedback) !== void 0 ? t.props.showFeedback : !0;
  }), m = E(() => {
    const {
      showLabel: h
    } = e;
    return h !== void 0 ? h : (t == null ? void 0 : t.props.showLabel) !== void 0 ? t.props.showLabel : !0;
  });
  return {
    validationErrored: u,
    validationWarned: c,
    mergedLabelStyle: s,
    mergedLabelPlacement: r,
    mergedLabelAlign: a,
    mergedShowRequireMark: l,
    mergedRequireMarkPlacement: d,
    mergedValidationStatus: v,
    mergedShowFeedback: g,
    mergedShowLabel: m,
    isAutoLabelWidth: o
  };
}
function I2(e) {
  const t = pe(Lo, null), r = E(() => {
    const {
      rulePath: s
    } = e;
    if (s !== void 0) return s;
    const {
      path: l
    } = e;
    if (l !== void 0) return l;
  }), o = E(() => {
    const s = [], {
      rule: l
    } = e;
    if (l !== void 0 && (Array.isArray(l) ? s.push(...l) : s.push(l)), t) {
      const {
        rules: d
      } = t.props, {
        value: u
      } = r;
      if (d !== void 0 && u !== void 0) {
        const c = Po(d, u);
        c !== void 0 && (Array.isArray(c) ? s.push(...c) : s.push(c));
      }
    }
    return s;
  }), i = E(() => o.value.some((s) => s.required)), a = E(() => i.value || e.required);
  return {
    mergedRules: o,
    mergedRequired: a
  };
}
var $d = function(e, t, r, o) {
  function i(a) {
    return a instanceof r ? a : new r(function(s) {
      s(a);
    });
  }
  return new (r || (r = Promise))(function(a, s) {
    function l(c) {
      try {
        u(o.next(c));
      } catch (v) {
        s(v);
      }
    }
    function d(c) {
      try {
        u(o.throw(c));
      } catch (v) {
        s(v);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(l, d);
    }
    u((o = o.apply(e, t || [])).next());
  });
};
const L2 = Object.assign(Object.assign({}, ve.props), {
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
  labelProps: Object,
  contentClass: String,
  contentStyle: [String, Object]
});
function zd(e, t) {
  return (...r) => {
    try {
      const o = e(...r);
      return !t && (typeof o == "boolean" || o instanceof Error || Array.isArray(o)) || o != null && o.then ? o : (o === void 0 || Dt("form-item/validate", `You return a ${typeof o} typed value in the validator method, which is not recommended. Please use ${t ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`), !0);
    } catch (o) {
      Dt("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(o);
      return;
    }
  };
}
const Ad = J({
  name: "FormItem",
  props: L2,
  setup(e) {
    Wh(sf, "formItems", ie(e, "path"));
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = pe(Lo, null), i = O2(e), a = M2(e), {
      validationErrored: s,
      validationWarned: l
    } = a, {
      mergedRequired: d,
      mergedRules: u
    } = I2(e), {
      mergedSize: c
    } = i, {
      mergedLabelPlacement: v,
      mergedLabelAlign: g,
      mergedRequireMarkPlacement: m
    } = a, h = L([]), p = L(wn()), x = o ? ie(o.props, "disabled") : L(!1), b = ve("Form", "-form-item", T2, lf, e, t);
    Me(ie(e, "path"), () => {
      e.ignorePathChange || y();
    });
    function y() {
      h.value = [], s.value = !1, l.value = !1, e.feedback && (p.value = wn());
    }
    const B = (...O) => $d(this, [...O], void 0, function* (M = null, W = () => !0, H = {
      suppressWarning: !0
    }) {
      const {
        path: U
      } = e;
      H ? H.first || (H.first = e.first) : H = {};
      const {
        value: ee
      } = u, Y = o ? Po(o.props.model, U || "") : void 0, K = {}, j = {}, q = (M ? ee.filter((xe) => Array.isArray(xe.trigger) ? xe.trigger.includes(M) : xe.trigger === M) : ee).filter(W).map((xe, Fe) => {
        const $e = Object.assign({}, xe);
        if ($e.validator && ($e.validator = zd($e.validator, !1)), $e.asyncValidator && ($e.asyncValidator = zd($e.asyncValidator, !0)), $e.renderMessage) {
          const ut = `__renderMessage__${Fe}`;
          j[ut] = $e.message, $e.message = ut, K[ut] = $e.renderMessage;
        }
        return $e;
      }), X = q.filter((xe) => xe.level !== "warning"), ae = q.filter((xe) => xe.level === "warning"), le = {
        valid: !0,
        errors: void 0,
        warnings: void 0
      };
      if (!q.length) return le;
      const ce = U ?? "__n_no_path__", be = new Ur({
        [ce]: X
      }), G = new Ur({
        [ce]: ae
      }), {
        validateMessages: ue
      } = (o == null ? void 0 : o.props) || {};
      ue && (be.messages(ue), G.messages(ue));
      const Pe = (xe) => {
        h.value = xe.map((Fe) => {
          const $e = (Fe == null ? void 0 : Fe.message) || "";
          return {
            key: $e,
            render: () => $e.startsWith("__renderMessage__") ? K[$e]() : $e
          };
        }), xe.forEach((Fe) => {
          var $e;
          !(($e = Fe.message) === null || $e === void 0) && $e.startsWith("__renderMessage__") && (Fe.message = j[Fe.message]);
        });
      };
      if (X.length) {
        const xe = yield new Promise((Fe) => {
          be.validate({
            [ce]: Y
          }, H, Fe);
        });
        xe != null && xe.length && (le.valid = !1, le.errors = xe, Pe(xe));
      }
      if (ae.length && !le.errors) {
        const xe = yield new Promise((Fe) => {
          G.validate({
            [ce]: Y
          }, H, Fe);
        });
        xe != null && xe.length && (Pe(xe), le.warnings = xe);
      }
      return !le.errors && !le.warnings ? y() : (s.value = !!le.errors, l.value = !!le.warnings), le;
    });
    function C() {
      B("blur");
    }
    function P() {
      B("change");
    }
    function k() {
      B("focus");
    }
    function S() {
      B("input");
    }
    function w(O, M) {
      return $d(this, void 0, void 0, function* () {
        let W, H, U, ee;
        return typeof O == "string" ? (W = O, H = M) : O !== null && typeof O == "object" && (W = O.trigger, H = O.callback, U = O.shouldRuleBeApplied, ee = O.options), yield new Promise((Y, K) => {
          B(W, U, ee).then(({
            valid: j,
            errors: q,
            warnings: X
          }) => {
            j ? (H && H(void 0, {
              warnings: X
            }), Y({
              warnings: X
            })) : (H && H(q, {
              warnings: X
            }), K(q));
          });
        });
      });
    }
    ze(Sa, {
      path: ie(e, "path"),
      disabled: x,
      mergedSize: i.mergedSize,
      mergedValidationStatus: a.mergedValidationStatus,
      restoreValidation: y,
      handleContentBlur: C,
      handleContentChange: P,
      handleContentFocus: k,
      handleContentInput: S
    });
    const R = {
      validate: w,
      restoreValidation: y,
      internalValidate: B
    }, F = L(null);
    $t(() => {
      if (!a.isAutoLabelWidth.value) return;
      const O = F.value;
      if (O !== null) {
        const M = O.style.whiteSpace;
        O.style.whiteSpace = "nowrap", O.style.width = "", o == null || o.deriveMaxChildLabelWidth(Number(getComputedStyle(O).width.slice(0, -2))), O.style.whiteSpace = M;
      }
    });
    const N = E(() => {
      var O;
      const {
        value: M
      } = c, {
        value: W
      } = v, H = W === "top" ? "vertical" : "horizontal", {
        common: {
          cubicBezierEaseInOut: U
        },
        self: {
          labelTextColor: ee,
          asteriskColor: Y,
          lineHeight: K,
          feedbackTextColor: j,
          feedbackTextColorWarning: q,
          feedbackTextColorError: X,
          feedbackPadding: ae,
          labelFontWeight: le,
          [Z("labelHeight", M)]: ce,
          [Z("blankHeight", M)]: be,
          [Z("feedbackFontSize", M)]: G,
          [Z("feedbackHeight", M)]: ue,
          [Z("labelPadding", H)]: Pe,
          [Z("labelTextAlign", H)]: xe,
          [Z(Z("labelFontSize", W), M)]: Fe
        }
      } = b.value;
      let $e = (O = g.value) !== null && O !== void 0 ? O : xe;
      return W === "top" && ($e = $e === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": U,
        "--n-line-height": K,
        "--n-blank-height": be,
        "--n-label-font-size": Fe,
        "--n-label-text-align": $e,
        "--n-label-height": ce,
        "--n-label-padding": Pe,
        "--n-label-font-weight": le,
        "--n-asterisk-color": Y,
        "--n-label-text-color": ee,
        "--n-feedback-padding": ae,
        "--n-feedback-font-size": G,
        "--n-feedback-height": ue,
        "--n-feedback-text-color": j,
        "--n-feedback-text-color-warning": q,
        "--n-feedback-text-color-error": X
      };
    }), $ = r ? Xe("form-item", E(() => {
      var O;
      return `${c.value[0]}${v.value[0]}${((O = g.value) === null || O === void 0 ? void 0 : O[0]) || ""}`;
    }), N, e) : void 0, n = E(() => v.value === "left" && m.value === "left" && g.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: F,
      mergedClsPrefix: t,
      mergedRequired: d,
      feedbackId: p,
      renderExplains: h,
      reverseColSpace: n
    }, a), i), R), {
      cssVars: r ? void 0 : N,
      themeClass: $ == null ? void 0 : $.themeClass,
      onRender: $ == null ? void 0 : $.onRender
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
    } = this, s = o !== void 0 ? o : this.mergedRequired;
    a == null || a();
    const l = () => {
      const d = this.$slots.label ? this.$slots.label() : this.label;
      if (!d) return null;
      const u = f("span", {
        class: `${t}-form-item-label__text`
      }, d), c = s ? f("span", {
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
    }, r && l(), f("div", {
      class: [`${t}-form-item-blank`, this.contentClass, this.mergedValidationStatus && `${t}-form-item-blank--${this.mergedValidationStatus}`],
      style: this.contentStyle
    }, e), this.mergedShowFeedback ? f("div", {
      key: this.feedbackId,
      style: this.feedbackStyle,
      class: [`${t}-form-item-feedback-wrapper`, this.feedbackClass]
    }, f(It, {
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
function N2(e) {
  const {
    primaryColor: t,
    baseColor: r
  } = e;
  return {
    color: t,
    iconColor: r
  };
}
const H2 = {
  name: "IconWrapper",
  common: Ye,
  self: N2
}, j2 = z("icon-wrapper", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`), W2 = Object.assign(Object.assign({}, ve.props), {
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
}), _2 = J({
  name: "IconWrapper",
  props: W2,
  setup(e, {
    slots: t
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("IconWrapper", "-icon-wrapper", j2, H2, e, r), a = E(() => {
      const {
        common: {
          cubicBezierEaseInOut: l
        },
        self: {
          color: d,
          iconColor: u
        }
      } = i.value;
      return {
        "--n-bezier": l,
        "--n-color": d,
        "--n-icon-color": u
      };
    }), s = o ? Xe("icon-wrapper", void 0, a, e) : void 0;
    return () => {
      const l = bt(e.size);
      return s == null || s.onRender(), f("div", {
        class: [`${r.value}-icon-wrapper`, s == null ? void 0 : s.themeClass.value],
        style: [a == null ? void 0 : a.value, {
          height: l,
          width: l,
          borderRadius: bt(e.borderRadius),
          backgroundColor: e.color,
          color: e.iconColor
        }]
      }, t);
    };
  }
}), cf = "n-popconfirm", ff = {
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
}, Ed = Kn(ff), V2 = J({
  name: "NPopconfirmPanel",
  props: ff,
  setup(e) {
    const {
      localeRef: t
    } = cr("Popconfirm"), {
      inlineThemeDisabled: r
    } = Ae(), {
      mergedClsPrefixRef: o,
      mergedThemeRef: i,
      props: a
    } = pe(cf), s = E(() => {
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
    }), l = r ? Xe("popconfirm-panel", void 0, s, a) : void 0;
    return Object.assign(Object.assign({}, cr("Popconfirm")), {
      mergedClsPrefix: o,
      cssVars: r ? void 0 : s,
      localizedPositiveText: E(() => e.positiveText || t.value.positiveText),
      localizedNegativeText: E(() => e.negativeText || t.value.negativeText),
      positiveButtonProps: ie(a, "positiveButtonProps"),
      negativeButtonProps: ie(a, "negativeButtonProps"),
      handlePositiveClick(d) {
        e.onPositiveClick(d);
      },
      handleNegativeClick(d) {
        e.onNegativeClick(d);
      },
      themeClass: l == null ? void 0 : l.themeClass,
      onRender: l == null ? void 0 : l.onRender
    });
  },
  render() {
    var e;
    const {
      mergedClsPrefix: t,
      showIcon: r,
      $slots: o
    } = this, i = nn(o.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && f(hr, Object.assign({
      size: "small",
      onClick: this.handleNegativeClick
    }, this.negativeButtonProps), {
      default: () => this.localizedNegativeText
    }), this.positiveText !== null && f(hr, Object.assign({
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
    }, nn(o.icon, () => [f(Ct, {
      clsPrefix: t
    }, {
      default: () => f(Fi, null)
    })])) : null, a) : null), i ? f("div", {
      class: [`${t}-popconfirm__action`]
    }, i) : null);
  }
}), U2 = z("popconfirm", [T("body", `
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
 `, [D("&:not(:first-child)", "margin-top: 8px"), z("button", [D("&:not(:last-child)", "margin-right: 8px;")])])]), K2 = Object.assign(Object.assign(Object.assign({}, ve.props), fr), {
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
}), q2 = J({
  name: "Popconfirm",
  props: K2,
  slots: Object,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(), r = ve("Popconfirm", "-popconfirm", U2, KS, e, t), o = L(null);
    function i(l) {
      var d;
      if (!(!((d = o.value) === null || d === void 0) && d.getMergedShow())) return;
      const {
        onPositiveClick: u,
        "onUpdate:show": c
      } = e;
      Promise.resolve(u ? u(l) : !0).then((v) => {
        var g;
        v !== !1 && ((g = o.value) === null || g === void 0 || g.setShow(!1), c && ne(c, !1));
      });
    }
    function a(l) {
      var d;
      if (!(!((d = o.value) === null || d === void 0) && d.getMergedShow())) return;
      const {
        onNegativeClick: u,
        "onUpdate:show": c
      } = e;
      Promise.resolve(u ? u(l) : !0).then((v) => {
        var g;
        v !== !1 && ((g = o.value) === null || g === void 0 || g.setShow(!1), c && ne(c, !1));
      });
    }
    return ze(cf, {
      mergedThemeRef: r,
      mergedClsPrefixRef: t,
      props: e
    }), {
      setShow(l) {
        var d;
        (d = o.value) === null || d === void 0 || d.setShow(l);
      },
      syncPosition() {
        var l;
        (l = o.value) === null || l === void 0 || l.syncPosition();
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
    return f(Rr, Object.assign({}, yr(t, Ed), {
      theme: r.peers.Popover,
      themeOverrides: r.peerOverrides.Popover,
      internalExtraClass: ["popconfirm"],
      ref: "popoverInstRef"
    }), {
      trigger: e.trigger,
      default: () => {
        const o = zn(t, Ed);
        return f(V2, Object.assign({}, o, {
          onPositiveClick: this.handlePositiveClick,
          onNegativeClick: this.handleNegativeClick
        }), e);
      }
    });
  }
}), G2 = D([D("@keyframes spin-rotate", `
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
 `, [Mo()])]), z("spin-body", `
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
 `, [I("rotate", `
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
 `, [I("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]), X2 = {
  small: 20,
  medium: 18,
  large: 16
}, Y2 = Object.assign(Object.assign({}, ve.props), {
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
}), hf = J({
  name: "Spin",
  props: Y2,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.spinning !== void 0 && Qe("spin", "`spinning` is deprecated, please use `show` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Spin", "-spin", G2, GS, e, t), i = E(() => {
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
      } = c, h = typeof d == "number" ? wt(d) : c[Z("size", d)];
      return {
        "--n-bezier": u,
        "--n-opacity-spinning": v,
        "--n-size": h,
        "--n-color": g,
        "--n-text-color": m
      };
    }), a = r ? Xe("spin", E(() => {
      const {
        size: d
      } = e;
      return typeof d == "number" ? String(d) : d[0];
    }), i, e) : void 0, s = el(e, ["spinning", "show"]), l = L(!1);
    return rt((d) => {
      let u;
      if (s.value) {
        const {
          delay: c
        } = e;
        if (c) {
          u = window.setTimeout(() => {
            l.value = !0;
          }, c), d(() => {
            clearTimeout(u);
          });
          return;
        }
      }
      l.value = s.value;
    }), {
      mergedClsPrefix: t,
      active: l,
      mergedStrokeWidth: E(() => {
        const {
          strokeWidth: d
        } = e;
        if (d !== void 0) return d;
        const {
          size: u
        } = e;
        return X2[typeof u == "number" ? "medium" : u];
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
    } = this, a = r.icon && this.rotate, s = (i || r.description) && f("div", {
      class: `${o}-spin-description`
    }, i || ((e = r.description) === null || e === void 0 ? void 0 : e.call(r))), l = r.icon ? f("div", {
      class: [`${o}-spin-body`, this.themeClass]
    }, f("div", {
      class: [`${o}-spin`, a && `${o}-spin--rotate`],
      style: r.default ? "" : this.cssVars
    }, r.icon()), s) : f("div", {
      class: [`${o}-spin-body`, this.themeClass]
    }, f(Zn, {
      clsPrefix: o,
      style: r.default ? "" : this.cssVars,
      stroke: this.stroke,
      "stroke-width": this.mergedStrokeWidth,
      class: `${o}-spin`
    }), s);
    return (t = this.onRender) === null || t === void 0 || t.call(this), r.default ? f("div", {
      class: [`${o}-spin-container`, this.themeClass],
      style: this.cssVars
    }, f("div", {
      class: [`${o}-spin-content`, this.active && `${o}-spin-content--spinning`, this.contentClass],
      style: this.contentStyle
    }, r), f(It, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? l : null
    })) : l;
  }
}), Z2 = z("switch", `
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
 `, [en({
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
 `), D("&:focus", [T("rail", `
 box-shadow: var(--n-box-shadow-focus);
 `)]), I("round", [T("rail", "border-radius: calc(var(--n-rail-height) / 2);", [T("button", "border-radius: calc(var(--n-button-height) / 2);")])]), Ue("disabled", [Ue("icon", [I("rubber-band", [I("pressed", [T("rail", [T("button", "max-width: var(--n-button-width-pressed);")])]), T("rail", [D("&:active", [T("button", "max-width: var(--n-button-width-pressed);")])]), I("active", [I("pressed", [T("rail", [T("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]), T("rail", [D("&:active", [T("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]), I("active", [T("rail", [T("button", "left: calc(100% - var(--n-button-width) - var(--n-offset))")])]), T("rail", `
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
 `, [en()]), T("button", `
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
 `)]), I("active", [T("rail", "background-color: var(--n-rail-color-active);")]), I("loading", [T("rail", `
 cursor: wait;
 `)]), I("disabled", [T("rail", `
 cursor: not-allowed;
 opacity: .5;
 `)])]), J2 = Object.assign(Object.assign({}, ve.props), {
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
let lo;
const Q2 = J({
  name: "Switch",
  props: J2,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && rt(() => {
      e.onChange && Qe("switch", "`on-change` is deprecated, please use `on-update:value` instead.");
    }), lo === void 0 && (typeof CSS < "u" ? typeof CSS.supports < "u" ? lo = CSS.supports("width", "max(1px)") : lo = !1 : lo = !0);
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Switch", "-switch", Z2, ZS, e, t), i = En(e), {
      mergedSizeRef: a,
      mergedDisabledRef: s
    } = i, l = L(e.defaultValue), d = ie(e, "value"), u = Et(d, l), c = E(() => u.value === e.checkedValue), v = L(!1), g = L(!1), m = E(() => {
      const {
        railStyle: w
      } = e;
      if (w)
        return w({
          focused: g.value,
          checked: c.value
        });
    });
    function h(w) {
      const {
        "onUpdate:value": R,
        onChange: F,
        onUpdateValue: N
      } = e, {
        nTriggerFormInput: $,
        nTriggerFormChange: n
      } = i;
      R && ne(R, w), N && ne(N, w), F && ne(F, w), l.value = w, $(), n();
    }
    function p() {
      const {
        nTriggerFormFocus: w
      } = i;
      w();
    }
    function x() {
      const {
        nTriggerFormBlur: w
      } = i;
      w();
    }
    function b() {
      e.loading || s.value || (u.value !== e.checkedValue ? h(e.checkedValue) : h(e.uncheckedValue));
    }
    function y() {
      g.value = !0, p();
    }
    function B() {
      g.value = !1, x(), v.value = !1;
    }
    function C(w) {
      e.loading || s.value || w.key === " " && (u.value !== e.checkedValue ? h(e.checkedValue) : h(e.uncheckedValue), v.value = !1);
    }
    function P(w) {
      e.loading || s.value || w.key === " " && (w.preventDefault(), v.value = !0);
    }
    const k = E(() => {
      const {
        value: w
      } = a, {
        self: {
          opacityDisabled: R,
          railColor: F,
          railColorActive: N,
          buttonBoxShadow: $,
          buttonColor: n,
          boxShadowFocus: O,
          loadingColor: M,
          textColor: W,
          iconColor: H,
          [Z("buttonHeight", w)]: U,
          [Z("buttonWidth", w)]: ee,
          [Z("buttonWidthPressed", w)]: Y,
          [Z("railHeight", w)]: K,
          [Z("railWidth", w)]: j,
          [Z("railBorderRadius", w)]: q,
          [Z("buttonBorderRadius", w)]: X
        },
        common: {
          cubicBezierEaseInOut: ae
        }
      } = o.value;
      let le, ce, be;
      return lo ? (le = `calc((${K} - ${U}) / 2)`, ce = `max(${K}, ${U})`, be = `max(${j}, calc(${j} + ${U} - ${K}))`) : (le = wt((Mt(K) - Mt(U)) / 2), ce = wt(Math.max(Mt(K), Mt(U))), be = Mt(K) > Mt(U) ? j : wt(Mt(j) + Mt(U) - Mt(K))), {
        "--n-bezier": ae,
        "--n-button-border-radius": X,
        "--n-button-box-shadow": $,
        "--n-button-color": n,
        "--n-button-width": ee,
        "--n-button-width-pressed": Y,
        "--n-button-height": U,
        "--n-height": ce,
        "--n-offset": le,
        "--n-opacity-disabled": R,
        "--n-rail-border-radius": q,
        "--n-rail-color": F,
        "--n-rail-color-active": N,
        "--n-rail-height": K,
        "--n-rail-width": j,
        "--n-width": be,
        "--n-box-shadow-focus": O,
        "--n-loading-color": M,
        "--n-text-color": W,
        "--n-icon-color": H
      };
    }), S = r ? Xe("switch", E(() => a.value[0]), k, e) : void 0;
    return {
      handleClick: b,
      handleBlur: B,
      handleFocus: y,
      handleKeyup: C,
      handleKeydown: P,
      mergedRailStyle: m,
      pressed: v,
      mergedClsPrefix: t,
      mergedValue: u,
      checked: c,
      mergedDisabled: s,
      cssVars: r ? void 0 : k,
      themeClass: S == null ? void 0 : S.themeClass,
      onRender: S == null ? void 0 : S.onRender
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
      checked: s,
      unchecked: l,
      icon: d,
      "checked-icon": u,
      "unchecked-icon": c
    } = a, v = !(Ir(d) && Ir(u) && Ir(c));
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
    }, _e(s, (g) => _e(l, (m) => g || m ? f("div", {
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
    }, _e(d, (g) => _e(u, (m) => _e(c, (h) => f(Br, null, {
      default: () => this.loading ? f(Zn, {
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
    })))), _e(s, (g) => g && f("div", {
      key: "checked",
      class: `${e}-switch__checked`
    }, g)), _e(l, (g) => g && f("div", {
      key: "unchecked",
      class: `${e}-switch__unchecked`
    }, g)))));
  }
}), eB = /* @__PURE__ */ Object.assign({
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
    return (r, o) => (Be(), et(re(vc), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: re(V0),
      "date-locale": re(og),
      "theme-overrides": t
    }, {
      default: We(() => [
        Yt(re(rf), null, {
          default: We(() => [
            Yt(re(Zc), null, {
              default: We(() => [
                Zt(r.$slots, "default")
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
function tB(e, t, r) {
  e.addEventListener(t, r), Ci(() => {
    e.removeEventListener(t, r);
  });
}
var fo = void 0, Nr = {}, Va;
Nr.throttle = Va = function(e, t, r, o) {
  var i, a = 0;
  typeof t != "boolean" && (o = r, r = t, t = fo);
  function s() {
    var l = this, d = +/* @__PURE__ */ new Date() - a, u = arguments;
    function c() {
      a = +/* @__PURE__ */ new Date(), r.apply(l, u);
    }
    function v() {
      i = fo;
    }
    o && !i && c(), i && clearTimeout(i), o === fo && d > e ? c() : t !== !0 && (i = setTimeout(o ? v : c, o === fo ? e - d : e));
  }
  return Nr.guid && (s.guid = r.guid = r.guid || Nr.guid++), s;
};
Nr.debounce = function(e, t, r) {
  return r === fo ? Va(e, t, !1) : Va(e, r, t !== !1);
};
const Qn = function(e, t, r) {
  return Nr.debounce(t || 300, r ?? !0, e);
}, vf = function(e, t, r) {
  return Nr.throttle(t || 300, r ?? !1, e);
};
function nB(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var gf = { exports: {} };
(function(e) {
  function t() {
    var r = 0, o = 1, i = 2, a = 3, s = 4, l = 5, d = 6, u = 7, c = 8, v = 9, g = 10, m = 11, h = 12, p = 13, x = 14, b = 15, y = 16, B = 17, C = 0, P = 1, k = 2, S = 3, w = 4;
    function R(n, O) {
      return 55296 <= n.charCodeAt(O) && n.charCodeAt(O) <= 56319 && 56320 <= n.charCodeAt(O + 1) && n.charCodeAt(O + 1) <= 57343;
    }
    function F(n, O) {
      O === void 0 && (O = 0);
      var M = n.charCodeAt(O);
      if (55296 <= M && M <= 56319 && O < n.length - 1) {
        var W = M, H = n.charCodeAt(O + 1);
        return 56320 <= H && H <= 57343 ? (W - 55296) * 1024 + (H - 56320) + 65536 : W;
      }
      if (56320 <= M && M <= 57343 && O >= 1) {
        var W = n.charCodeAt(O - 1), H = M;
        return 55296 <= W && W <= 56319 ? (W - 55296) * 1024 + (H - 56320) + 65536 : H;
      }
      return M;
    }
    function N(n, O, M) {
      var W = [n].concat(O).concat([M]), H = W[W.length - 2], U = M, ee = W.lastIndexOf(x);
      if (ee > 1 && W.slice(1, ee).every(function(j) {
        return j == a;
      }) && [a, p, B].indexOf(n) == -1)
        return k;
      var Y = W.lastIndexOf(s);
      if (Y > 0 && W.slice(1, Y).every(function(j) {
        return j == s;
      }) && [h, s].indexOf(H) == -1)
        return W.filter(function(j) {
          return j == s;
        }).length % 2 == 1 ? S : w;
      if (H == r && U == o)
        return C;
      if (H == i || H == r || H == o)
        return U == x && O.every(function(j) {
          return j == a;
        }) ? k : P;
      if (U == i || U == r || U == o)
        return P;
      if (H == d && (U == d || U == u || U == v || U == g))
        return C;
      if ((H == v || H == u) && (U == u || U == c))
        return C;
      if ((H == g || H == c) && U == c)
        return C;
      if (U == a || U == b)
        return C;
      if (U == l)
        return C;
      if (H == h)
        return C;
      var K = W.indexOf(a) != -1 ? W.lastIndexOf(a) - 1 : W.length - 2;
      return [p, B].indexOf(W[K]) != -1 && W.slice(K + 1, -1).every(function(j) {
        return j == a;
      }) && U == x || H == b && [y, B].indexOf(U) != -1 ? C : O.indexOf(s) != -1 ? k : H == s && U == s ? C : P;
    }
    this.nextBreak = function(n, O) {
      if (O === void 0 && (O = 0), O < 0)
        return 0;
      if (O >= n.length - 1)
        return n.length;
      for (var M = $(F(n, O)), W = [], H = O + 1; H < n.length; H++)
        if (!R(n, H - 1)) {
          var U = $(F(n, H));
          if (N(M, W, U))
            return H;
          W.push(U);
        }
      return n.length;
    }, this.splitGraphemes = function(n) {
      for (var O = [], M = 0, W; (W = this.nextBreak(n, M)) < n.length; )
        O.push(n.slice(M, W)), M = W;
      return M < n.length && O.push(n.slice(M)), O;
    }, this.iterateGraphemes = function(n) {
      var O = 0, M = {
        next: (function() {
          var W, H;
          return (H = this.nextBreak(n, O)) < n.length ? (W = n.slice(O, H), O = H, { value: W, done: !1 }) : O < n.length ? (W = n.slice(O), O = n.length, { value: W, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && (M[Symbol.iterator] = function() {
        return M;
      }), M;
    }, this.countGraphemes = function(n) {
      for (var O = 0, M = 0, W; (W = this.nextBreak(n, M)) < n.length; )
        M = W, O++;
      return M < n.length && O++, O;
    };
    function $(n) {
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
      917760 <= n && n <= 917999 ? a : 127462 <= n && n <= 127487 ? s : n == 2307 || // Mc       DEVANAGARI SIGN VISARGA
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
      n == 119149 ? l : 4352 <= n && n <= 4447 || // Lo  [96] HANGUL CHOSEONG KIYEOK..HANGUL CHOSEONG FILLER
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
      n == 128658 ? y : 128102 <= n && n <= 128105 ? B : m;
    }
    return this;
  }
  e.exports && (e.exports = t);
})(gf);
var rB = gf.exports;
const oB = /* @__PURE__ */ nB(rB);
var iB = 20, aB = 1, vr = 1e6, Dd = 1e6, lB = -7, sB = 21, dB = !1, No = "[big.js] ", Pr = No + "Invalid ", Mi = Pr + "decimal places", uB = Pr + "rounding mode", pf = No + "Division by zero", tt = {}, Cn = void 0, cB = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;
function mf() {
  function e(t) {
    var r = this;
    if (!(r instanceof e))
      return t === Cn && arguments.length === 0 ? mf() : new e(t);
    if (t instanceof e)
      r.s = t.s, r.e = t.e, r.c = t.c.slice();
    else {
      if (typeof t != "string") {
        if (e.strict === !0 && typeof t != "bigint")
          throw TypeError(Pr + "value");
        t = t === 0 && 1 / t < 0 ? "-0" : String(t);
      }
      fB(r, t);
    }
    r.constructor = e;
  }
  return e.prototype = tt, e.DP = iB, e.RM = aB, e.NE = lB, e.PE = sB, e.strict = dB, e.roundDown = 0, e.roundHalfUp = 1, e.roundHalfEven = 2, e.roundUp = 3, e;
}
function fB(e, t) {
  var r, o, i;
  if (!cB.test(t))
    throw Error(Pr + "number");
  for (e.s = t.charAt(0) == "-" ? (t = t.slice(1), -1) : 1, (r = t.indexOf(".")) > -1 && (t = t.replace(".", "")), (o = t.search(/e/i)) > 0 ? (r < 0 && (r = o), r += +t.slice(o + 1), t = t.substring(0, o)) : r < 0 && (r = t.length), i = t.length, o = 0; o < i && t.charAt(o) == "0"; ) ++o;
  if (o == i)
    e.c = [e.e = 0];
  else {
    for (; i > 0 && t.charAt(--i) == "0"; ) ;
    for (e.e = r - o - 1, e.c = [], r = 0; o <= i; ) e.c[r++] = +t.charAt(o++);
  }
  return e;
}
function Fr(e, t, r, o) {
  var i = e.c;
  if (r === Cn && (r = e.constructor.RM), r !== 0 && r !== 1 && r !== 2 && r !== 3)
    throw Error(uB);
  if (t < 1)
    o = r === 3 && (o || !!i[0]) || t === 0 && (r === 1 && i[0] >= 5 || r === 2 && (i[0] > 5 || i[0] === 5 && (o || i[1] !== Cn))), i.length = 1, o ? (e.e = e.e - t + 1, i[0] = 1) : i[0] = e.e = 0;
  else if (t < i.length) {
    if (o = r === 1 && i[t] >= 5 || r === 2 && (i[t] > 5 || i[t] === 5 && (o || i[t + 1] !== Cn || i[t - 1] & 1)) || r === 3 && (o || !!i[0]), i.length = t, o) {
      for (; ++i[--t] > 9; )
        if (i[t] = 0, t === 0) {
          ++e.e, i.unshift(1);
          break;
        }
    }
    for (t = i.length; !i[--t]; ) i.pop();
  }
  return e;
}
function $r(e, t, r) {
  var o = e.e, i = e.c.join(""), a = i.length;
  if (t)
    i = i.charAt(0) + (a > 1 ? "." + i.slice(1) : "") + (o < 0 ? "e" : "e+") + o;
  else if (o < 0) {
    for (; ++o; ) i = "0" + i;
    i = "0." + i;
  } else if (o > 0)
    if (++o > a)
      for (o -= a; o--; ) i += "0";
    else o < a && (i = i.slice(0, o) + "." + i.slice(o));
  else a > 1 && (i = i.charAt(0) + "." + i.slice(1));
  return e.s < 0 && r ? "-" + i : i;
}
tt.abs = function() {
  var e = new this.constructor(this);
  return e.s = 1, e;
};
tt.cmp = function(e) {
  var t, r = this, o = r.c, i = (e = new r.constructor(e)).c, a = r.s, s = e.s, l = r.e, d = e.e;
  if (!o[0] || !i[0]) return o[0] ? a : i[0] ? -s : 0;
  if (a != s) return a;
  if (t = a < 0, l != d) return l > d ^ t ? 1 : -1;
  for (s = (l = o.length) < (d = i.length) ? l : d, a = -1; ++a < s; )
    if (o[a] != i[a]) return o[a] > i[a] ^ t ? 1 : -1;
  return l == d ? 0 : l > d ^ t ? 1 : -1;
};
tt.div = function(e) {
  var t = this, r = t.constructor, o = t.c, i = (e = new r(e)).c, a = t.s == e.s ? 1 : -1, s = r.DP;
  if (s !== ~~s || s < 0 || s > vr)
    throw Error(Mi);
  if (!i[0])
    throw Error(pf);
  if (!o[0])
    return e.s = a, e.c = [e.e = 0], e;
  var l, d, u, c, v, g = i.slice(), m = l = i.length, h = o.length, p = o.slice(0, l), x = p.length, b = e, y = b.c = [], B = 0, C = s + (b.e = t.e - e.e) + 1;
  for (b.s = a, a = C < 0 ? 0 : C, g.unshift(0); x++ < l; ) p.push(0);
  do {
    for (u = 0; u < 10; u++) {
      if (l != (x = p.length))
        c = l > x ? 1 : -1;
      else
        for (v = -1, c = 0; ++v < l; )
          if (i[v] != p[v]) {
            c = i[v] > p[v] ? 1 : -1;
            break;
          }
      if (c < 0) {
        for (d = x == l ? i : g; x; ) {
          if (p[--x] < d[x]) {
            for (v = x; v && !p[--v]; ) p[v] = 9;
            --p[v], p[x] += 10;
          }
          p[x] -= d[x];
        }
        for (; !p[0]; ) p.shift();
      } else
        break;
    }
    y[B++] = c ? u : ++u, p[0] && c ? p[x] = o[m] || 0 : p = [o[m]];
  } while ((m++ < h || p[0] !== Cn) && a--);
  return !y[0] && B != 1 && (y.shift(), b.e--, C--), B > C && Fr(b, C, r.RM, p[0] !== Cn), b;
};
tt.eq = function(e) {
  return this.cmp(e) === 0;
};
tt.gt = function(e) {
  return this.cmp(e) > 0;
};
tt.gte = function(e) {
  return this.cmp(e) > -1;
};
tt.lt = function(e) {
  return this.cmp(e) < 0;
};
tt.lte = function(e) {
  return this.cmp(e) < 1;
};
tt.minus = tt.sub = function(e) {
  var t, r, o, i, a = this, s = a.constructor, l = a.s, d = (e = new s(e)).s;
  if (l != d)
    return e.s = -d, a.plus(e);
  var u = a.c.slice(), c = a.e, v = e.c, g = e.e;
  if (!u[0] || !v[0])
    return v[0] ? e.s = -d : u[0] ? e = new s(a) : e.s = 1, e;
  if (l = c - g) {
    for ((i = l < 0) ? (l = -l, o = u) : (g = c, o = v), o.reverse(), d = l; d--; ) o.push(0);
    o.reverse();
  } else
    for (r = ((i = u.length < v.length) ? u : v).length, l = d = 0; d < r; d++)
      if (u[d] != v[d]) {
        i = u[d] < v[d];
        break;
      }
  if (i && (o = u, u = v, v = o, e.s = -e.s), (d = (r = v.length) - (t = u.length)) > 0) for (; d--; ) u[t++] = 0;
  for (d = t; r > l; ) {
    if (u[--r] < v[r]) {
      for (t = r; t && !u[--t]; ) u[t] = 9;
      --u[t], u[r] += 10;
    }
    u[r] -= v[r];
  }
  for (; u[--d] === 0; ) u.pop();
  for (; u[0] === 0; )
    u.shift(), --g;
  return u[0] || (e.s = 1, u = [g = 0]), e.c = u, e.e = g, e;
};
tt.mod = function(e) {
  var t, r = this, o = r.constructor, i = r.s, a = (e = new o(e)).s;
  if (!e.c[0])
    throw Error(pf);
  return r.s = e.s = 1, t = e.cmp(r) == 1, r.s = i, e.s = a, t ? new o(r) : (i = o.DP, a = o.RM, o.DP = o.RM = 0, r = r.div(e), o.DP = i, o.RM = a, this.minus(r.times(e)));
};
tt.neg = function() {
  var e = new this.constructor(this);
  return e.s = -e.s, e;
};
tt.plus = tt.add = function(e) {
  var t, r, o, i = this, a = i.constructor;
  if (e = new a(e), i.s != e.s)
    return e.s = -e.s, i.minus(e);
  var s = i.e, l = i.c, d = e.e, u = e.c;
  if (!l[0] || !u[0])
    return u[0] || (l[0] ? e = new a(i) : e.s = i.s), e;
  if (l = l.slice(), t = s - d) {
    for (t > 0 ? (d = s, o = u) : (t = -t, o = l), o.reverse(); t--; ) o.push(0);
    o.reverse();
  }
  for (l.length - u.length < 0 && (o = u, u = l, l = o), t = u.length, r = 0; t; l[t] %= 10) r = (l[--t] = l[t] + u[t] + r) / 10 | 0;
  for (r && (l.unshift(r), ++d), t = l.length; l[--t] === 0; ) l.pop();
  return e.c = l, e.e = d, e;
};
tt.pow = function(e) {
  var t = this, r = new t.constructor("1"), o = r, i = e < 0;
  if (e !== ~~e || e < -Dd || e > Dd)
    throw Error(Pr + "exponent");
  for (i && (e = -e); e & 1 && (o = o.times(t)), e >>= 1, !!e; )
    t = t.times(t);
  return i ? r.div(o) : o;
};
tt.prec = function(e, t) {
  if (e !== ~~e || e < 1 || e > vr)
    throw Error(Pr + "precision");
  return Fr(new this.constructor(this), e, t);
};
tt.round = function(e, t) {
  if (e === Cn) e = 0;
  else if (e !== ~~e || e < -vr || e > vr)
    throw Error(Mi);
  return Fr(new this.constructor(this), e + this.e + 1, t);
};
tt.sqrt = function() {
  var e, t, r, o = this, i = o.constructor, a = o.s, s = o.e, l = new i("0.5");
  if (!o.c[0]) return new i(o);
  if (a < 0)
    throw Error(No + "No square root");
  a = Math.sqrt(+$r(o, !0, !0)), a === 0 || a === 1 / 0 ? (t = o.c.join(""), t.length + s & 1 || (t += "0"), a = Math.sqrt(t), s = ((s + 1) / 2 | 0) - (s < 0 || s & 1), e = new i((a == 1 / 0 ? "5e" : (a = a.toExponential()).slice(0, a.indexOf("e") + 1)) + s)) : e = new i(a + ""), s = e.e + (i.DP += 4);
  do
    r = e, e = l.times(r.plus(o.div(r)));
  while (r.c.slice(0, s).join("") !== e.c.slice(0, s).join(""));
  return Fr(e, (i.DP -= 4) + e.e + 1, i.RM);
};
tt.times = tt.mul = function(e) {
  var t, r = this, o = r.constructor, i = r.c, a = (e = new o(e)).c, s = i.length, l = a.length, d = r.e, u = e.e;
  if (e.s = r.s == e.s ? 1 : -1, !i[0] || !a[0])
    return e.c = [e.e = 0], e;
  for (e.e = d + u, s < l && (t = i, i = a, a = t, u = s, s = l, l = u), t = new Array(u = s + l); u--; ) t[u] = 0;
  for (d = l; d--; ) {
    for (l = 0, u = s + d; u > d; )
      l = t[u] + a[d] * i[u - d - 1] + l, t[u--] = l % 10, l = l / 10 | 0;
    t[u] = l;
  }
  for (l ? ++e.e : t.shift(), d = t.length; !t[--d]; ) t.pop();
  return e.c = t, e;
};
tt.toExponential = function(e, t) {
  var r = this, o = r.c[0];
  if (e !== Cn) {
    if (e !== ~~e || e < 0 || e > vr)
      throw Error(Mi);
    for (r = Fr(new r.constructor(r), ++e, t); r.c.length < e; ) r.c.push(0);
  }
  return $r(r, !0, !!o);
};
tt.toFixed = function(e, t) {
  var r = this, o = r.c[0];
  if (e !== Cn) {
    if (e !== ~~e || e < 0 || e > vr)
      throw Error(Mi);
    for (r = Fr(new r.constructor(r), e + r.e + 1, t), e = e + r.e + 1; r.c.length < e; ) r.c.push(0);
  }
  return $r(r, !1, !!o);
};
tt.toJSON = tt.toString = function() {
  var e = this, t = e.constructor;
  return $r(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0]);
};
typeof Symbol < "u" && (tt[Symbol.for("nodejs.util.inspect.custom")] = tt.toJSON);
tt.toNumber = function() {
  var e = +$r(this, !0, !0);
  if (this.constructor.strict === !0 && !this.eq(e.toString()))
    throw Error(No + "Imprecise conversion");
  return e;
};
tt.toPrecision = function(e, t) {
  var r = this, o = r.constructor, i = r.c[0];
  if (e !== Cn) {
    if (e !== ~~e || e < 1 || e > vr)
      throw Error(Pr + "precision");
    for (r = Fr(new o(r), e, t); r.c.length < e; ) r.c.push(0);
  }
  return $r(r, e <= r.e || r.e <= o.NE || r.e >= o.PE, !!i);
};
tt.valueOf = function() {
  var e = this, t = e.constructor;
  if (t.strict === !0)
    throw Error(No + "valueOf disallowed");
  return $r(e, e.e <= t.NE || e.e >= t.PE, !0);
};
var bf = mf();
const hB = new oB(), mn = bf();
mn.NE = -7;
mn.PE = 21;
mn.RM = bf.roundHalfUp;
mn.strict = !0;
const vB = (e = "") => hB.countGraphemes(e);
function gB(e) {
  return e && typeof e == "object" && typeof e.then == "function";
}
const zo = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ At({
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
  emits: /* @__PURE__ */ At(["blur", "input", "enter"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const o = Bn(), i = fn(e, "modelValue"), a = r;
    function s() {
      let m = i.value;
      if (e.trim) {
        const h = m.trim();
        i.value = h, m = h;
      }
      return m;
    }
    let l = 0;
    function d() {
      let m = !1;
      if (e.blurByEnter && l > 0) {
        const p = (/* @__PURE__ */ new Date()).getTime();
        l != 0 && p >= l && p - l < 200 && (m = !0);
      }
      const h = s();
      a("blur", { value: h, isTriggerByEnter: m });
    }
    function u(m) {
      i.value = m;
      let h = m;
      e.trim && (h = h.trim()), a("input", { value: h });
    }
    const c = ar("input"), v = () => {
      c.value && c.value.focus();
    };
    function g() {
      let m = i.value;
      e.trim && (m = m.trim()), a("enter", { value: m }), e.blurByEnter && (l = (/* @__PURE__ */ new Date()).getTime(), setTimeout(() => {
        c.value && c.value.blur();
      }, 0));
    }
    return t({ focus: v }), (m, h) => (Be(), et(re(Ta), {
      class: zt(`${re(o).class ? re(o).class : ""}`),
      ref: "input",
      "input-props": { autocomplete: "off" },
      type: e.type,
      size: e.size,
      "show-password-on": e.showPassword ? "click" : void 0,
      value: i.value,
      maxlength: e.maxlength,
      "show-count": e.showCount,
      "count-graphemes": e.maxlength != null && e.maxlength > 0 || e.showCount ? re(vB) : void 0,
      placeholder: e.placeholder,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      clearable: e.clearable,
      autosize: e.type !== "textarea" ? !1 : e.autosize,
      onInput: u,
      onBlur: d,
      onKeyup: qf(g, ["enter"])
    }, mr({ _: 2 }, [
      e.prefixIcon ? {
        name: "prefix",
        fn: We(() => [
          Yt(re(Fo), Gf(Xf(e.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly", "clearable", "autosize"]));
  }
}), xi = /* @__PURE__ */ Object.assign({
  name: "PSelect",
  inheritAttrs: !1
}, {
  __name: "select",
  props: /* @__PURE__ */ At({
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
  emits: /* @__PURE__ */ At(["update", "change", "search"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = Bn(), o = t, i = fn(e, "modelValue"), a = Qn(function(d) {
      d !== i.value && ht(() => {
        o("change", d);
      }), i.value = d, o("update", d);
    }, 300);
    function s(d) {
      o("search", d);
    }
    const l = e.throttleSearch ? vf(s) : s;
    return (d, u) => (Be(), et(re(mc), {
      class: zt(`${re(r).class ? re(r).class : ""}`),
      style: Ut(e.width ? `width:${e.width}` : ""),
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
      onSearch: re(l)
    }, {
      empty: We(() => [
        Yt(re(Vr), {
          size: "small",
          description: e.emptyDescription
        }, null, 8, ["description"])
      ]),
      _: 1
    }, 8, ["class", "style", "options", "value", "size", "remote", "filterable", "loading", "placeholder", "disabled", "value-field", "label-field", "clearable", "show-checkmark", "onUpdate:value", "onSearch"]));
  }
}), gr = /* @__PURE__ */ Object.assign({
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
    const r = Bn(), o = Ga(), i = t, a = Qn(function() {
      e.waiting || i("click");
    }, 300);
    return (s, l) => (Be(), et(re(hr), {
      class: zt([
        re(r).class ? re(r).class : "",
        e.size === "xs" ? "p-button-xs" : "",
        e.type === "default" && e.defaultType ? `p-button-default-${e.defaultType}` : "",
        e.waiting ? "p-button-waiting" : ""
      ]),
      style: Ut(re(r).style || ""),
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
    }, mr({
      default: We(() => [
        !e.loading || e.loading && !e.loadingWithoutText ? (Be(), et(re(o).default, { key: 0 })) : yt("", !0)
      ]),
      _: 2
    }, [
      s.$slots.icon ? {
        name: "icon",
        fn: We(() => [
          Yt(re(o).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "style", "attr-type", "block", "size", "type", "loading", "ghost", "secondary", "text", "disabled", "onClick"]));
  }
}), pB = { key: 0 }, mB = { class: "p-search-item-content" }, bB = {
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
    const r = L(e.item.field ? e.searchData[e.item.field] : void 0);
    function o({ value: d }) {
      const u = d !== e.searchData[e.item.field];
      e.updateSearchData(e.item.field, d), u && e.doChange();
    }
    function i(d) {
      e.updateSearchData(e.item.field, d), e.doChange();
    }
    function a() {
      document.activeElement && document.activeElement.blur(), ht(() => {
        e.doSearch();
      });
    }
    function s() {
      document.activeElement && document.activeElement.blur(), ht(() => {
        e.doReset();
      });
    }
    function l() {
      e.item._isActionItem || e.item.field && (r.value = e.item.defaultValue);
    }
    return t({ reset: l }), (d, u) => (Be(), dt("div", {
      class: zt([
        "p-search-item",
        e.item._isActionItem ? "p-search-item-action" : "",
        e.lastItemForMulti ? "p-search-item-last" : ""
      ])
    }, [
      !e.item._isActionItem && !e.item._isEmptyItem ? (Be(), dt(je, { key: 0 }, [
        Hn("div", {
          class: zt({ "p-search-item-label": !0, "p-search-item-colon-label": e.showColon })
        }, [
          Yt(re(Ei), {
            style: Ut(
              e.oneLineCondition ? `max-width: ${e.labelWidth - 1}px` : { boxSizing: "border-box", width: `${e.labelWidth - 1}px` }
            )
          }, {
            default: We(() => [
              jt(cn(e.item.label), 1)
            ]),
            _: 1
          }, 8, ["style"]),
          e.showColon ? (Be(), dt("span", pB, "：")) : yt("", !0)
        ], 2),
        Hn("div", mB, [
          e.item.type === "input" ? (Be(), et(jn(re(zo)), Pt({
            key: 0,
            modelValue: r.value,
            "onUpdate:modelValue": u[0] || (u[0] = (c) => r.value = c)
          }, e.item.props, { onBlur: o }), null, 16, ["modelValue"])) : yt("", !0),
          e.item.type === "select" ? (Be(), et(jn(re(xi)), Pt({
            key: 1,
            modelValue: r.value,
            "onUpdate:modelValue": u[1] || (u[1] = (c) => r.value = c)
          }, e.item.props, { onChange: i }), null, 16, ["modelValue"])) : yt("", !0)
        ])
      ], 64)) : yt("", !0),
      e.item._isActionItem ? (Be(), dt(je, { key: 1 }, [
        Yt(re(gr), {
          style: { width: "80px" },
          onClick: a
        }, {
          icon: We(() => [
            Yt(re(Fo), {
              size: "20",
              color: "#ffffff"
            }, {
              default: We(() => u[2] || (u[2] = [
                Hn("svg", {
                  t: "1737784979409",
                  class: "icon",
                  viewBox: "0 0 1024 1024",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "p-id": "6537",
                  width: "200",
                  height: "200"
                }, [
                  Hn("path", {
                    d: "M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0",
                    "p-id": "6538"
                  })
                ], -1)
              ])),
              _: 1
            })
          ]),
          default: We(() => [
            u[3] || (u[3] = jt("搜索"))
          ]),
          _: 1
        }),
        Yt(re(gr), {
          style: { "margin-left": "10px", width: "80px" },
          type: "default",
          onClick: s
        }, mr({
          default: We(() => [
            u[5] || (u[5] = jt("重置"))
          ]),
          _: 2
        }, [
          e.item.showResetBtnIcon ? {
            name: "icon",
            fn: We(() => [
              Yt(re(Fo), { size: "18" }, {
                default: We(() => u[4] || (u[4] = [
                  Hn("svg", {
                    t: "1737871878167",
                    class: "icon",
                    viewBox: "0 0 1024 1024",
                    version: "1.1",
                    xmlns: "http://www.w3.org/2000/svg",
                    "p-id": "6743",
                    width: "200",
                    height: "200"
                  }, [
                    Hn("path", {
                      d: "M885.58 554.65c-22.86 0-41.39-18.53-41.39-41.39V182.17c0-22.86 18.53-41.39 41.39-41.39s41.39 18.53 41.39 41.39v331.09c-0.01 22.86-18.54 41.39-41.39 41.39zM140.62 885.74c-22.86 0-41.39-18.53-41.39-41.39V513.26c0-22.86 18.53-41.39 41.39-41.39s41.39 18.53 41.39 41.39v331.09c0 22.86-18.53 41.39-41.39 41.39z",
                      "p-id": "6744"
                    }),
                    Hn("path", {
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
      ], 64)) : yt("", !0)
    ], 2));
  }
}, xB = {
  class: "p-search",
  ref: "search"
}, yB = /* @__PURE__ */ Object.assign({
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
    const o = Math.max(e.itemWidth, 200), i = L({}), a = () => {
      const w = {};
      e.model.forEach((R) => {
        R.slot || R.field && (Object.hasOwn(R, "defaultValue") ? w[R.field] = R.defaultValue : R.type === "input" && (w[R.field] = ""));
      }), i.value = w;
    };
    a();
    const s = L([]), l = L({}), d = { _isActionItem: !0, width: 170, showResetBtnIcon: e.showResetBtnIcon }, u = { _isEmptyItem: !0 }, c = ar("search"), v = E(() => l.value.singleLine || s.value.length === 2 && s.value[1].length === 1), g = E(() => {
      let w = e.labelWidth || 59;
      return w = Math.min(w, e.maxLabelWidth), v.value === !1 ? w : e.maxLabelWidth;
    });
    function m() {
      if (!c.value || !e.model || e.model.length === 0) return;
      const w = Math.floor(c.value.getBoundingClientRect().width);
      if (w >= o * e.model.length + d.width) {
        s.value = [[...e.model, d]], l.value = { singleLine: !0 };
        return;
      }
      const R = Math.floor(w / o);
      if (e.visibleLine <= 0) {
        const F = [];
        e.model.forEach(($, n) => {
          n % R === 0 && F.push([]), F[F.length - 1].push($);
        });
        const N = F[F.length - 1].length;
        if (N === R)
          F.push([d]);
        else {
          let $ = 0;
          const n = R - N;
          for (; $ < n; )
            $ === n - 1 ? F[F.length - 1].push(d) : F[F.length - 1].push(u), $ += 1;
        }
        s.value = F, l.value = { multiLine: !0 };
        return;
      }
    }
    $t(() => {
      m(), tB(
        window,
        "resize",
        vf(function() {
          m();
        })
      );
    });
    function h(w, R) {
      w && (i.value[w] = R);
    }
    const p = r;
    function x(w, R = !1) {
      if (typeof w != "object" || w === null) return {};
      const F = (N) => R ? !N && N !== !1 && N !== 0 : N == null || N === "";
      return Object.fromEntries(Object.entries(w).filter(([N, $]) => !F($)));
    }
    function b() {
      return x(i.value);
    }
    const y = ar("searchItem");
    function B() {
      return y.value.forEach((w) => {
        w.reset();
      }), a(), b();
    }
    let C = 0;
    function P() {
      C = (/* @__PURE__ */ new Date()).getTime(), p("search", b(), { type: "search" });
    }
    function k() {
      const w = B();
      ht(() => {
        C = (/* @__PURE__ */ new Date()).getTime(), p("reset", w, { type: "reset" });
      });
    }
    function S() {
      setTimeout(() => {
        let w = !1;
        const R = (/* @__PURE__ */ new Date()).getTime();
        C != 0 && R >= C && R - C < 200 && (w = !0), p("change", b(), { type: "change", isActionTriggered: w });
      }, 0);
    }
    return t({ getSearchData: b, resetSearchData: B }), (w, R) => (Be(), dt("div", xB, [
      (Be(!0), dt(je, null, ho(s.value, (F, N) => (Be(), dt("div", {
        key: N,
        class: "p-search-lilne",
        style: Ut(N > 0 ? "margin-top:12px" : "")
      }, [
        (Be(!0), dt(je, null, ho(F, ($, n) => (Be(), et(bB, {
          ref_for: !0,
          ref: "searchItem",
          key: $.field || n,
          oneLineCondition: v.value,
          labelWidth: g.value,
          showColon: e.showColon,
          item: $,
          lastItemForMulti: l.value.multiLine && !$._isActionItem && n === F.length - 1,
          searchData: i.value,
          doSearch: P,
          doReset: k,
          doChange: S,
          updateSearchData: h,
          style: Ut(
            l.value.singleLine && !$._isActionItem ? `width: ${re(o)}px` : l.value.multiLine ? "flex:1" : ""
          )
        }, null, 8, ["oneLineCondition", "labelWidth", "showColon", "item", "lastItemForMulti", "searchData", "style"]))), 128))
      ], 4))), 128))
    ], 512));
  }
}), Ua = /* @__PURE__ */ Object.assign({
  name: "PSwitch",
  inheritAttrs: !1
}, {
  __name: "switch",
  props: /* @__PURE__ */ At({
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
  emits: /* @__PURE__ */ At(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = fn(e, "modelValue"), o = Bn(), i = t, a = Qn(function(s) {
      e.readonly || (r.value = s, i("change", s));
    }, 300);
    return (s, l) => (Be(), dt(je, null, [
      Yt(re(Q2), {
        class: zt([re(o).class || "", e.readonly ? "p-switch-readonly" : ""]),
        style: Ut(re(o).style || ""),
        size: e.size,
        value: r.value,
        loading: e.loading,
        disabled: e.disabled,
        "checked-value": e.checkedValue,
        "unchecked-value": e.uncheckedValue,
        "on-update:value": re(a)
      }, mr({ _: 2 }, [
        !e.outside && e.checkedText != null && e.checkedText !== "" ? {
          name: "checked",
          fn: We(() => [
            jt(cn(e.checkedText), 1)
          ]),
          key: "0"
        } : void 0,
        !e.outside && e.uncheckedText != null && e.uncheckedText !== "" ? {
          name: "unchecked",
          fn: We(() => [
            jt(cn(e.uncheckedText), 1)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["class", "style", "size", "value", "loading", "disabled", "checked-value", "unchecked-value", "on-update:value"]),
      e.outside && e.checkedText != null && e.checkedText !== "" && r.value === e.checkedValue ? (Be(), dt("span", {
        key: 0,
        class: zt(["p-switch-outside-text", e.disabled ? "p-switch-outside-text-disabled" : ""])
      }, cn(e.checkedText), 3)) : yt("", !0),
      e.outside && e.uncheckedText != null && e.uncheckedText !== "" && r.value === e.uncheckedValue ? (Be(), dt("span", {
        key: 1,
        class: zt(["p-switch-outside-text", e.disabled ? "p-switch-outside-text-disabled" : ""])
      }, cn(e.uncheckedText), 3)) : yt("", !0)
    ], 64));
  }
}), CB = {
  key: 1,
  style: { flex: "1" }
}, wB = {
  key: 2,
  autocomplete: "off",
  type: "submit",
  style: { display: "none" }
}, SB = /* @__PURE__ */ Object.assign({
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
    const o = E(() => {
      if (!e.inline || e.inline && e.inlineSize.length <= 0 || e.model.length <= 0) return null;
      const y = [], B = [];
      if (e.inlineSize.length === 1) {
        if (e.model.forEach((C, P) => {
          P % e.inlineSize[0] === 0 && B.push([]), B[B.length - 1].push(C);
        }), B[B.length - 1].length < e.inlineSize[0]) {
          let C = e.inlineSize[0] - B[B.length - 1].length, P = 0;
          for (; P < C; )
            B[B.length - 1].push({ isInlinePlaceholder: !0 }), P++;
        }
      } else {
        let C = 0, P = 0;
        for (let S = 0; S < e.inlineSize.length - 1; S++) {
          const w = e.inlineSize[S];
          if (P += w, C < e.model.length) {
            const R = e.model.slice(C, C + w);
            if (R.length > 0) {
              if (R.length < w) {
                let F = w - R.length, N = 0;
                for (; N < F; )
                  R.push({ isInlinePlaceholder: !0 }), N++;
              }
              y.push(R);
            }
            C += w;
          }
        }
        const k = e.inlineSize[e.inlineSize.length - 1];
        if (e.model.filter((S, w) => w >= P).forEach((S, w) => {
          w % k === 0 && B.push([]), B[B.length - 1].push(S);
        }), B.length > 0 && B[B.length - 1].length < k) {
          let S = k - B[B.length - 1].length, w = 0;
          for (; w < S; )
            B[B.length - 1].push({ isInlinePlaceholder: !0 }), w++;
        }
      }
      return [...y, ...B];
    }), i = function() {
      const y = {};
      return e.model.forEach((B) => {
        B.slot || !B.field || B.placeholder || (y[B.field] = B.defaultValue);
      }), L(y);
    }(), a = function() {
      return e.feedbackSizeClass ? ["s"].includes(e.feedbackSizeClass) ? `p-form-item-feedback-${e.feedbackSizeClass}` : e.feedbackSizeClass : "";
    }();
    function s() {
      const y = {};
      return e.model.forEach((B) => {
        !B.field || B.placeholder || B.slot && (y[B.field] = Zf(B.value));
      }), { ...i.value, ...y };
    }
    const l = r, d = ar("form"), u = (y = !0) => (y && document.activeElement && document.activeElement.blur(), d.value.validate().then(() => ({ formData: s(), valid: !0 })).catch((B) => ({ formData: s(), valid: !1, errors: B }))), c = Qn(function() {
      u(!0).then((y) => {
        l("submit", y);
      });
    }), v = ar("formItem");
    function g(y = "") {
      if (!y) {
        d.value.restoreValidation();
        return;
      }
      const B = v.value.find((C) => C.path === y);
      B && B.restoreValidation();
    }
    function m(y) {
      y && e.rules && e.rules[y] && (e.rules[y].trigger && e.rules[y].trigger.includes("input") || g(y));
    }
    function h(y, B) {
      var P, k;
      const C = y.field;
      C && e.rules && e.rules[C] && ((P = y.props) != null && P.filterable) && g(C), (k = y.event) != null && k.search && y.event.search(B);
    }
    function p(y, B) {
      var P;
      const C = y.field;
      C && e.rules && e.rules[C] && (!e.rules[C].trigger || e.rules[C].trigger && e.rules[C].trigger.includes("change") === !1) && g(C), (P = y.event) != null && P.update && y.event.update(B);
    }
    let x = {};
    e.model.forEach((y) => {
      !y.slot && y.ref === !0 && (x[y.field] = ar(`form-item-${y.field}`));
    });
    function b(y = "") {
      return y && x[y] ? x[y].value[0] : null;
    }
    return Ci(() => {
      x = null;
    }), t({ validate: u, restoreValidation: g, getFormValue: s, getChild: b }), (y, B) => (Be(), et(re(t2), {
      ref: "form",
      class: zt([e.inline ? "p-form-inline" : ""]),
      "show-label": e.showLabel,
      "label-placement": e.labelPlacement,
      "label-width": "auto",
      "require-mark-placement": "left",
      "show-require-mark": e.showRequireMark,
      "label-align": e.labelPlacement === "left" ? "right" : "left",
      model: re(i),
      rules: e.rules,
      inline: e.inline,
      onSubmit: Yf(re(c), ["prevent"])
    }, {
      default: We(() => [
        !e.inline || e.inline && e.inlineSize.length <= 0 ? (Be(!0), dt(je, { key: 0 }, ho(e.model, (C, P) => (Be(), dt(je, {
          key: C.field || P
        }, [
          C.placeholder ? yt("", !0) : (Be(), et(re(Ad), {
            key: 0,
            ref_for: !0,
            ref: "formItem",
            style: Ut(C.itemStyle == null ? e.itemStyle : C.itemStyle),
            label: C.label,
            path: C.field,
            "feedback-class": re(a),
            first: !0,
            "show-require-mark": C.showRequireMark == null ? e.showRequireMark : !!C.showRequireMark
          }, {
            default: We(() => [
              C.slot === !0 ? Zt(y.$slots, C.field, { key: 0 }) : (Be(), dt(je, { key: 1 }, [
                C.type === "input" ? (Be(), et(jn(re(zo)), Pt({
                  key: 0,
                  ref_for: !0,
                  ref: `form-item-${C.field}`,
                  modelValue: re(i)[C.field],
                  "onUpdate:modelValue": (k) => re(i)[C.field] = k
                }, { disabled: e.disabled, readonly: e.readonly, ...C.props }, {
                  onInput: (k) => m(C.field)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : C.type === "switch" ? (Be(), et(jn(re(Ua)), Pt({
                  key: 1,
                  ref_for: !0,
                  ref: `form-item-${C.field}`,
                  modelValue: re(i)[C.field],
                  "onUpdate:modelValue": (k) => re(i)[C.field] = k
                }, { disabled: e.disabled, readonly: e.readonly, ...C.props }), null, 16, ["modelValue", "onUpdate:modelValue"])) : C.type === "select" ? (Be(), et(jn(re(xi)), Pt({
                  key: 2,
                  ref_for: !0,
                  ref: `form-item-${C.field}`,
                  modelValue: re(i)[C.field],
                  "onUpdate:modelValue": (k) => re(i)[C.field] = k
                }, { disabled: e.disabled, ...C.props }, {
                  onSearch: (k) => h(C, k),
                  onUpdate: (k) => p(C, k)
                }), null, 16, ["modelValue", "onUpdate:modelValue", "onSearch", "onUpdate"])) : yt("", !0)
              ], 64))
            ]),
            _: 2
          }, 1032, ["style", "label", "path", "feedback-class", "show-require-mark"]))
        ], 64))), 128)) : yt("", !0),
        e.inline && e.inlineSize.length > 0 && o.value ? (Be(!0), dt(je, { key: 1 }, ho(o.value, (C, P) => (Be(), dt("div", {
          key: P,
          class: zt(["p-form-inline-item", e.inlineClass[P] ? e.inlineClass[P] : ""])
        }, [
          (Be(!0), dt(je, null, ho(C, (k, S) => (Be(), dt(je, {
            key: k.field || P + "-" + S
          }, [
            !k.isInlinePlaceholder && !k.placeholder ? (Be(), et(re(Ad), {
              key: 0,
              ref_for: !0,
              ref: "formItem",
              style: Ut(k.itemStyle == null ? e.itemStyle : k.itemStyle),
              label: k.label,
              path: k.field,
              "feedback-class": re(a),
              first: !0,
              "show-require-mark": k.showRequireMark == null ? e.showRequireMark : !!k.showRequireMark
            }, {
              default: We(() => [
                k.slot === !0 ? Zt(y.$slots, k.field, { key: 0 }) : (Be(), dt(je, { key: 1 }, [
                  k.type === "input" ? (Be(), et(jn(re(zo)), Pt({
                    key: 0,
                    ref_for: !0,
                    ref: `form-item-${k.field}`,
                    modelValue: re(i)[k.field],
                    "onUpdate:modelValue": (w) => re(i)[k.field] = w
                  }, { disabled: e.disabled, readonly: e.readonly, ...k.props }, {
                    onInput: (w) => m(k.field)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : k.type === "switch" ? (Be(), et(jn(re(Ua)), Pt({
                    key: 1,
                    ref_for: !0,
                    ref: `form-item-${k.field}`,
                    modelValue: re(i)[k.field],
                    "onUpdate:modelValue": (w) => re(i)[k.field] = w
                  }, { disabled: e.disabled, readonly: e.readonly, ...k.props }), null, 16, ["modelValue", "onUpdate:modelValue"])) : k.type === "select" ? (Be(), et(jn(re(xi)), Pt({
                    key: 2,
                    ref_for: !0,
                    ref: `form-item-${k.field}`,
                    modelValue: re(i)[k.field],
                    "onUpdate:modelValue": (w) => re(i)[k.field] = w
                  }, { disabled: e.disabled, ...k.props }, {
                    onSearch: (w) => h(k, w),
                    onUpdate: (w) => p(k, w)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onSearch", "onUpdate"])) : yt("", !0)
                ], 64))
              ]),
              _: 2
            }, 1032, ["style", "label", "path", "feedback-class", "show-require-mark"])) : (Be(), dt("div", CB))
          ], 64))), 128))
        ], 2))), 128)) : yt("", !0),
        e.virtualSubmit ? (Be(), dt("button", wB, "virtual button")) : yt("", !0),
        Zt(y.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "show-label", "label-placement", "show-require-mark", "label-align", "model", "rules", "inline", "onSubmit"]));
  }
}), BB = /* @__PURE__ */ Object.assign({
  name: "PInputNumber",
  inheritAttrs: !1
}, {
  __name: "input-number",
  props: /* @__PURE__ */ At({
    size: { type: String, default: "medium" },
    placeholder: { type: String, default: "请输入" },
    maxlength: { type: Number },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
    readonly: { type: Boolean, default: !1 },
    max: { type: Number },
    min: { type: Number },
    precision: { type: Number },
    fillPrecision: { type: Boolean, default: !0 },
    verificationType: { type: String, default: "positiveIntegerContainZero" }
  }, {
    modelValue: { type: [Number, String] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ At(["blur", "input"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = fn(e, "modelValue"), o = L({ type: "ok" }), i = L(""), s = [
      "numeric",
      "positiveNumber",
      "positiveNumberContainZero",
      "positiveInteger",
      "positiveIntegerContainZero"
    ].indexOf(e.verificationType) === -1 ? "positiveIntegerContainZero" : e.verificationType, l = /* @__PURE__ */ function() {
      return {
        isNumeric: s === "numeric",
        isPositiveNumber: s === "positiveNumber",
        isPositiveNumberContainZero: s === "positiveNumberContainZero",
        isPositiveInteger: s === "positiveInteger",
        isPositiveIntegerContainZero: s === "positiveIntegerContainZero"
      };
    }(), d = /^[-]?[0-9]$|^[-]?[1-9][0-9]+$|^[-]?0\.[0-9]+$|^[-]?[1-9][0-9]*\.[0-9]+$/, u = /^[1-9]$|^[1-9][0-9]+$|^0\.[0-9]+$|^[1-9][0-9]*\.[0-9]+$/, c = /^[0-9]$|^[1-9][0-9]+$|^0\.[0-9]+$|^[1-9][0-9]*\.[0-9]+$/, v = /^[1-9]$|^[1-9][0-9]+$/, g = /^[0-9]$|^[1-9][0-9]+$/, m = /^[-]?0\.$|^[1-9][0-9]*\.$/, h = /^[1-9][0-9]*\.$/, p = /^[-]?0\.$|^[-]?[1-9][0-9]*\.$/, x = /^[-]?0\.$|^[-]?0\.[0]+$|^[-]?0$/;
    Me(
      r,
      (w) => {
        o.value.type === "ok" && (B(`${w == null || w === "" ? "" : w}`, !0), y());
      },
      { immediate: !1 }
    );
    function b(w, R = {}, F = {}) {
      if (w == null || w === "")
        return o.value = R, r.value = w, w;
      let N = `${w}`, $ = null;
      if (e.precision != null && e.precision !== "" && l.isPositiveInteger === !1 && l.isPositiveIntegerContainZero === !1)
        if (e.fillPrecision)
          $ = mn(N), N = $.toFixed(e.precision, 0);
        else if (e.precision <= 0)
          $ = mn(N), N = $.toFixed(0, 0);
        else {
          const n = N.split(".");
          n.length === 1 || n.length === 2 && n[1].length < e.precision ? ($ = mn(N), N = $.toFixed(void 0, 0)) : n.length === 2 && n[1].length >= e.precision && ($ = mn(N), N = $.toFixed(e.precision, 0));
        }
      if ((e.max != null && e.max !== "" || e.min != null && e.min !== "") && ($ = mn(N)), $ != null) {
        if (e.max != null && e.max !== "" && $.gt(`${e.max}`))
          return o.value = { type: F.forOK ? "ok" : "error" }, r.value = null, null;
        if (e.min != null && e.min !== "" && $.lt(`${e.min}`))
          return o.value = { type: F.forOK ? "ok" : "error" }, r.value = null, null;
      }
      return o.value = R, r.value = N, N;
    }
    function y() {
      const w = r.value;
      w == null || w === "" ? i.value = "" : i.value = `${w}`;
    }
    function B(w, R = !1) {
      let F = null, N = null;
      l.isNumeric ? N = d : l.isPositiveNumber ? N = u : l.isPositiveNumberContainZero ? N = c : l.isPositiveInteger ? N = v : l.isPositiveIntegerContainZero && (N = g);
      let $ = N.test(w);
      if ($ && l.isPositiveNumber && parseFloat(w) === 0 && ($ = !1), $)
        return R && Math.abs(parseFloat(w)) === 0 ? F = b(0, { type: "ok" }, { forOK: R }) : F = b(w, { type: R ? "ok" : "inputok" }, { forOK: R }), F;
      if (l.isPositiveIntegerContainZero) {
        if (d.test(w)) {
          if (Math.abs(parseFloat(w)) === 0)
            return F = b(0, { type: R ? "ok" : "warning" }, { forOK: R }), F;
        } else if (m.test(w))
          return F = b(`${Math.abs(parseFloat(w))}`, { type: R ? "ok" : "warning" }, { forOK: R }), F;
      } else if (l.isPositiveInteger) {
        if (h.test(w))
          return F = b(`${parseInt(w)}`, { type: R ? "ok" : "warning" }, { forOK: R }), F;
      } else if (l.isPositiveNumber) {
        if (h.test(w))
          return F = b(`${parseFloat(w)}`, { type: R ? "ok" : "warning" }, { forOK: R }), F;
      } else if (l.isPositiveNumberContainZero) {
        if (m.test(w) || x.test(w))
          return F = b(`${Math.abs(parseFloat(w))}`, { type: R ? "ok" : "warning" }, { forOK: R }), F;
      } else if (l.isNumeric && p.test(w))
        return F = b(`${parseFloat(w)}`, { type: R ? "ok" : "warning" }, { forOK: R }), F;
      return F = b(null, { type: R ? "ok" : "error" }, { forOK: R }), F;
    }
    $t(() => {
      B(`${r.value == null || r.value === "" ? "" : r.value}`, !0), ht(() => {
        y();
      });
    });
    const C = t, P = (w) => w == null || w === "" ? w : l.isPositiveInteger || l.isPositiveIntegerContainZero ? parseInt(w) : parseFloat(w);
    function k({ value: w }) {
      const R = (w || "").trim();
      i.value = R;
      const F = B(R);
      C("input", { value: P(F) });
    }
    function S(w) {
      const R = B((w.value || "").trim(), !0);
      ht(() => {
        y(), C("blur", { ...w, value: P(R) });
      });
    }
    return (w, R) => (Be(), et(re(zo), {
      class: zt(`${w.$attrs.class ? w.$attrs.class : ""} ${o.value.type === "error" && i.value != null && i.value !== "" ? "p-input-number-error" : ""}`),
      trim: !1,
      placeholder: e.placeholder,
      size: e.size,
      maxlength: e.maxlength,
      disabled: e.disabled,
      readonly: e.readonly,
      clearable: e.clearable,
      modelValue: i.value,
      "onUpdate:modelValue": R[0] || (R[0] = (F) => i.value = F),
      onInput: k,
      onBlur: S
    }, null, 8, ["class", "placeholder", "size", "maxlength", "disabled", "readonly", "clearable", "modelValue"]));
  }
}), kB = /* @__PURE__ */ Object.assign({
  name: "PRadio",
  inheritAttrs: !1
}, {
  __name: "radio",
  props: /* @__PURE__ */ At({
    size: { type: String, default: "medium" },
    disabled: { type: Boolean, default: !1 },
    val: { type: [String, Number, Boolean], default: "" }
  }, {
    modelValue: { type: [String, Number, Boolean] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ At(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = fn(e, "modelValue"), o = Bn(), i = t, a = Qn(function(s) {
      s && (r.value = e.val, i("change", e.val));
    }, 300);
    return (s, l) => (Be(), et(re(Ml), {
      style: Ut(re(o).style || ""),
      checked: r.value === e.val,
      size: e.size,
      disabled: e.disabled,
      value: e.val,
      "on-update:checked": re(a)
    }, {
      default: We(() => [
        Zt(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "checked", "size", "disabled", "value", "on-update:checked"]));
  }
}), RB = /* @__PURE__ */ Object.assign({
  name: "PCheckbox",
  inheritAttrs: !1
}, {
  __name: "checkbox",
  props: /* @__PURE__ */ At({
    size: { type: String, default: "medium" },
    disabled: { type: Boolean, default: !1 },
    checkedValue: { type: [String, Number, Boolean], default: !0 },
    uncheckedValue: { type: [String, Number, Boolean], default: !1 },
    checkedOnly: { type: Boolean, default: !1 },
    // 若选中时，再次点击不取消选中 - 就是要选中的效果，不在 group 中使用
    val: { type: [String, Number] }
  }, {
    modelValue: { type: [String, Number, Boolean] },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ At(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = fn(e, "modelValue"), o = Bn(), i = t, a = Qn(function(s) {
      e.checkedOnly && e.val == null && r.value === e.checkedValue || (r.value = s ? e.checkedValue : e.uncheckedValue, setTimeout(() => {
        i("change", r.value);
      }, 0));
    }, 300);
    return (s, l) => (Be(), et(re(Ai), {
      style: Ut(re(o).style || ""),
      checked: r.value === e.checkedValue,
      size: e.size,
      disabled: e.disabled,
      "checked-value": !0,
      "unchecked-value": !1,
      value: e.val,
      "on-update:checked": re(a)
    }, {
      default: We(() => [
        Zt(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "checked", "size", "disabled", "value", "on-update:checked"]));
  }
}), PB = /* @__PURE__ */ Object.assign({
  name: "PCheckboxGroup",
  inheritAttrs: !1
}, {
  __name: "checkbox-group",
  props: {
    modelValue: { type: Array, default: [] },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ At(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = fn(e, "modelValue"), o = Bn(), i = t, a = Qn(function(s, l) {
      r.value = s || [], setTimeout(() => {
        i("change", r.value, l);
      }, 0);
    }, 300);
    return (s, l) => (Be(), et(re(fc), {
      class: "p-checkbox-group",
      style: Ut(re(o).style || ""),
      value: r.value,
      "on-update:value": re(a)
    }, {
      default: We(() => [
        Zt(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "value", "on-update:value"]));
  }
}), FB = /* @__PURE__ */ Object.assign({
  name: "PRadioGroup",
  inheritAttrs: !1
}, {
  __name: "radio-group",
  props: {
    modelValue: { type: [String, Number, Boolean], default: null },
    modelModifiers: {}
  },
  emits: /* @__PURE__ */ At(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = fn(e, "modelValue"), o = Bn(), i = t, a = Qn(function(s) {
      r.value = s, setTimeout(() => {
        i("change", r.value);
      }, 0);
    }, 300);
    return (s, l) => (Be(), et(re($c), {
      class: "p-radio-group",
      style: Ut(re(o).style || ""),
      value: r.value,
      "on-update:value": re(a)
    }, {
      default: We(() => [
        Zt(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["style", "value", "on-update:value"]));
  }
}), $B = /* @__PURE__ */ J((e, {
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
  }, o = ar("table");
  return t({
    scrollTo: (i = {}) => {
      o && o.value && o.value.scrollTo && o.value.scrollTo(i);
    }
  }), () => f(bw, {
    ...r,
    ...e,
    ref: "table"
  }, {
    empty: () => f(Vr, {
      size: "medium",
      description: "暂无数据"
    })
  });
}, {
  name: "PDataTable",
  inheritAttrs: !0
}), zB = {
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
    return (o, i) => (Be(), dt(je, null, [
      e.negativeText ? (Be(), et(re(gr), {
        key: 0,
        size: "xs",
        type: "default",
        "default-type": e.type,
        onClick: t
      }, {
        default: We(() => [
          jt(cn(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type"])) : yt("", !0),
      e.positiveText ? (Be(), et(re(gr), {
        key: 1,
        size: "xs",
        type: e.type,
        onClick: r
      }, {
        default: We(() => [
          jt(cn(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type"])) : yt("", !0)
    ], 64));
  }
}, AB = /* @__PURE__ */ J((e, {
  emit: t
}) => {
  const r = Ga(), o = L(), i = () => {
    o.value.setShow(!1);
  };
  return () => f(q2, {
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
    action: () => f(zB, {
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
}), EB = /* @__PURE__ */ Object.assign({
  name: "PPagination",
  inheritAttrs: !1
}, {
  __name: "pagination",
  props: /* @__PURE__ */ At({
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
  emits: /* @__PURE__ */ At(["changePage", "changePageSize"], ["update:page", "update:pageSize"]),
  setup(e, { emit: t }) {
    const r = Bn(), o = fn(e, "page"), i = fn(e, "pageSize"), a = t;
    function s(d) {
      o.value = d, a("changePage", d);
    }
    function l(d) {
      i.value = d, a("changePageSize", d);
    }
    return (d, u) => (Be(), et(re(yc), {
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
      "on-update:page": s,
      "on-update:page-size": l,
      style: Ut(re(r).style)
    }, mr({ _: 2 }, [
      e.simple ? void 0 : {
        name: "prefix",
        fn: We(({ itemCount: c }) => [
          jt("共 " + cn(c) + " 条记录", 1)
        ]),
        key: "0"
      },
      e.showQuickJumper && !e.simple ? {
        name: "suffix",
        fn: We(() => [
          u[0] || (u[0] = jt("页"))
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
function DB(e, t = 200) {
  const r = L(!1), o = L(!1), i = E(() => !r.value && !o.value), a = L(!1), s = L(), l = L();
  let d;
  return Me(() => re(e), (u) => {
    if (r.value = !1, o.value = !1, s.value = null, !u) {
      l.value = null, d && clearTimeout(d), d = null;
      return;
    }
    re(t) > 0 ? (a.value = !1, d && clearTimeout(d), d = setTimeout(() => {
      a.value = !0;
    }, Number(re(t)))) : a.value = !0, u.then((c) => {
      u === re(e) && (l.value = c, o.value = !0);
    }).catch((c) => {
      u === re(e) && (s.value = c, r.value = !0);
    });
  }, { immediate: !0 }), { isPending: i, isRejected: r, isResolved: o, isDelayElapsed: a, error: s, data: l };
}
const xf = ({ delay: e = 300, minPendingTime: t = 500, loadingValue: r = !1 } = {}) => {
  let o = 0, i = null;
  const a = () => {
    i && (clearTimeout(i), i = null);
  }, s = L(!!r), l = L(!!r);
  let d = null;
  const u = (c) => (s.value = c, new Promise((v) => {
    c === !0 ? v() : d = v;
  }));
  return Me(
    s,
    (c) => {
      if (o === 0)
        o = (/* @__PURE__ */ new Date()).getTime(), a(), i = setTimeout(() => {
          l.value = c;
        }, e);
      else {
        if (a(), l.value !== c) {
          const g = (/* @__PURE__ */ new Date()).getTime() - o - e, m = g >= t ? 0 : t - g;
          i = setTimeout(() => {
            l.value = c, d && (d(), d = null);
          }, m);
        } else
          d && (d(), d = null);
        o = 0;
      }
    },
    { immediate: !!r, deep: !1 }
  ), Ci(() => {
    d = null, a();
  }), { loading: l, waiting: s, setLoadingStatus: u };
}, TB = {
  key: 1,
  class: "p-promised-loading"
}, OB = /* @__PURE__ */ Object.assign({
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
    nilClass: { type: String },
    // 定义 empty 和 error 状态下的 class 名
    contentStyle: { type: String, default: "position:relative; min-height:72px;" }
    //  内容的最小高度，避免 loading/empty 状态下高度不确定导致抖动
  },
  setup(e) {
    const t = E(() => ["small", "medium", "large"].includes(e.loadingSize) ? e.loadingSize : "medium"), r = E(() => {
      const y = { position: "absolute", left: "50%", zIndex: 2 };
      return e.loadingTop == null ? y.top = "50%" : y.top = `${e.loadingTop}px`, t.value === "small" ? (y.marginLeft = "-14px", e.loadingTop == null && (y.marginTop = "-14px")) : t.value === "medium" ? (y.marginLeft = "-17px", e.loadingTop == null && (y.marginTop = "-17px")) : t.value === "large" && (y.marginLeft = "-20px", e.loadingTop == null && (y.marginTop = "-20px")), y;
    }), o = E(() => {
      let y = (e.nilClass || "").trim();
      return e.nilType === "border" && (y += " p-promised-empty-border"), e.nilType === "line" && (y += " p-promised-empty-line"), y.trim();
    }), i = Bn(), a = ie(() => e.promise), { data: s, error: l, isPending: d, isDelayElapsed: u, isResolved: c, isRejected: v } = DB(a, 0), { loading: g, waiting: m } = xf(), h = E(() => !g.value && !d.value && !l.value && b(s.value));
    Me(
      () => d.value && u.value,
      (y) => {
        m.value = y;
      },
      { immediate: !1 }
    );
    const p = L(!1);
    Me(v, (y) => {
      y === !0 && p.value === !1 && (p.value = y);
    }), Me(c, (y) => {
      y === !0 && p.value === !0 && (p.value = !1);
    });
    function x(y) {
      let B = !0;
      if (typeof y == "object") {
        for (const C in y)
          if (typeof y[C] == "object" ? B = x(y[C]) : B = y[C] === "" || y[C] === null || y[C] === void 0, B === !1)
            break;
        return B;
      } else
        return y === "" || y === null || y === void 0;
    }
    function b(y) {
      return y == null || y === "" ? !0 : x(e.dataField ? y[e.dataField] : y);
    }
    return (y, B) => (Be(), dt("div", {
      class: zt(re(i).class ? re(i).class : ""),
      style: Ut(e.contentStyle)
    }, [
      !re(g) && !re(d) && !re(l) && !b(re(s)) || re(d) && re(m) && !p.value && !re(l) && !b(re(s)) || h.value && e.defaultSlotAsEmpty ? Zt(y.$slots, "default", {
        key: 0,
        data: re(s),
        isEmpty: h.value
      }) : yt("", !0),
      re(g) ? (Be(), dt("div", TB, [
        Yt(re(hf), {
          size: t.value,
          style: Ut(r.value)
        }, null, 8, ["size", "style"]),
        B[0] || (B[0] = Hn("div", { class: "p-promised-loading-mask" }, null, -1))
      ])) : yt("", !0),
      h.value && !e.defaultSlotAsEmpty ? (Be(), dt(je, { key: 2 }, [
        y.$slots.emptyCustomize ? Zt(y.$slots, "emptyCustomize", { key: 1 }) : (Be(), et(re(Vr), {
          key: 0,
          class: zt(o.value),
          description: e.emptyDesc,
          size: "medium"
        }, mr({ _: 2 }, [
          y.$slots.emptyExtra ? {
            name: "extra",
            fn: We(() => [
              Zt(y.$slots, "emptyExtra")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["class", "description"]))
      ], 64)) : yt("", !0),
      !re(g) && !re(d) && re(l) ? (Be(), et(re(Vr), {
        key: 3,
        class: zt(o.value),
        description: re(l).message || e.errorDefaultDesc,
        size: "medium"
      }, null, 8, ["class", "description"])) : yt("", !0)
    ], 6));
  }
}), MB = /* @__PURE__ */ Object.assign({
  name: "PDrawer",
  inheritAttrs: !1
}, {
  __name: "drawer",
  props: /* @__PURE__ */ At({
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
  emits: /* @__PURE__ */ At(["afterEnter", "afterLeave"], ["update:show"]),
  setup(e, { emit: t }) {
    const r = fn(e, "show"), o = Ga(), i = t;
    function a(d) {
      e.lock || (r.value = d);
    }
    function s() {
      i("afterEnter");
    }
    function l() {
      i("afterLeave");
    }
    return (d, u) => (Be(), et(re(NS), {
      class: zt({ "p-drawer": !0, "p-drawer-lock": e.lock }),
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
      "on-after-enter": s,
      "on-after-leave": l
    }, {
      default: We(() => [
        Yt(re(jS), {
          "body-content-class": e.bodyContentClass,
          "body-content-style": e.bodyContentStyle,
          "footer-style": e.footerStyle,
          closable: e.closable,
          "native-scrollbar": ""
        }, mr({
          default: We(() => [
            Zt(d.$slots, "default")
          ]),
          _: 2
        }, [
          e.title || !e.title && e.closable ? {
            name: "header",
            fn: We(() => [
              jt(cn(e.title || " "), 1)
            ]),
            key: "0"
          } : void 0,
          d.$slots.footer ? {
            name: "footer",
            fn: We(() => [
              Yt(re(o).footer)
            ]),
            key: "1"
          } : void 0
        ]), 1032, ["body-content-class", "body-content-style", "footer-style", "closable"])
      ]),
      _: 3
    }, 8, ["class", "show", "width", "height", "placement", "mask-closable"]));
  }
});
function jB(e = ["loadingBar", "message"], t = {}) {
  var i;
  const { loadingBar: r, message: o } = af(e, {
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
const yf = {
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
    const { loading: t, waiting: r, setLoadingStatus: o } = xf();
    function i(l, d) {
      const u = l({
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
        if (gB(u)) {
          d === "positiveClick" && (o(!0), e.onLoading(!0));
          return;
        } else
          e.onClose();
    }
    function a() {
      r.value || (e.onNegativeClick ? i(e.onNegativeClick, "negativeClick") : e.onClose());
    }
    function s() {
      r.value || (e.onPositiveClick ? i(e.onPositiveClick, "positiveClick") : e.onClose());
    }
    return (l, d) => (Be(), dt(je, null, [
      e.negativeText ? (Be(), et(re(gr), {
        key: 0,
        size: "small",
        type: "default",
        "default-type": e.type,
        disabled: re(t),
        onClick: a
      }, {
        default: We(() => [
          jt(cn(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type", "disabled"])) : yt("", !0),
      e.positiveText ? (Be(), et(re(gr), {
        key: 1,
        size: "small",
        type: e.type,
        loading: re(t),
        loadingWithoutText: !1,
        onClick: s
      }, {
        default: We(() => [
          jt(cn(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type", "loading"])) : yt("", !0)
    ], 64));
  }
}, { dialog: IB } = af(["dialog"], {
  configProviderProps: { inlineThemeDisabled: !0 }
}), LB = IB;
function Cf(e) {
  return typeof e == "string" ? function() {
    return f("p", { innerHTML: e });
  } : Array.isArray(e) ? function() {
    return f(
      "div",
      e.map((t) => f("p", { innerHTML: t }))
    );
  } : e;
}
const WB = () => {
  let e = null, t = null, r = null, o = null;
  const i = _c(), a = (u = {}, c = { width: 430 }, v) => {
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
      return f(yf, {
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
    }), g.content = Cf(u.content), i.create(g);
  }, s = (u = {}, c = {}) => {
    u.negativeText == null && !c.useDefaultConf && (u.negativeText = ""), u.positiveText == null && !c.useDefaultConf && (u.positiveText = "我知道了"), u.closable == null && !c.useDefaultConf && (u.closable = !1), u.showIcon == null && !c.useDefaultConf && (u.showIcon = !0);
    const v = a(u, { width: 430, ...c }, "success");
    return t = v, v;
  }, l = (u = {}, c = {}) => {
    u.negativeText == null && !c.useDefaultConf && (u.negativeText = ""), u.positiveText == null && !c.useDefaultConf && (u.positiveText = "我知道了"), u.closable == null && !c.useDefaultConf && (u.closable = !1), u.showIcon == null && !c.useDefaultConf && (u.showIcon = !0);
    const v = a(u, { width: 430, ...c }, "warning");
    return r = v, v;
  }, d = (u = {}, c = {}) => {
    u.negativeText == null && !c.useDefaultConf && (u.negativeText = ""), u.positiveText == null && !c.useDefaultConf && (u.positiveText = "我知道了"), u.closable == null && !c.useDefaultConf && (u.closable = !1), u.showIcon == null && !c.useDefaultConf && (u.showIcon = !0);
    const v = a(u, { width: 430, ...c }, "error");
    return o = v, v;
  };
  return Ci(() => {
    e && e.destroy(), t && t.destroy(), r && r.destroy(), o && o.destroy(), e = null, t = null, r = null, o = null;
  }), {
    open: function(u, c) {
      const v = a(u, c);
      return e = v, v;
    },
    success: s,
    warning: l,
    error: d
  };
};
function _B() {
  let e = null, t = null, r = null, o = null;
  const i = (a = {}, s = { width: 430 }, l) => {
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
    return d.closeOnEsc = !1, d.maskClosable = !1, d.iconPlacement = "left", d.titleClass = d.showIcon ? "p-dialog-title" : "p-dialog-title p-dialog-title-without-icon", d.style = "width: " + s.width + "px", l && (d.type = l), (d.positiveText || d.negativeText) && (d.action = function() {
      return f(yf, {
        positiveText: d.positiveText,
        negativeText: d.negativeText,
        type: l,
        onPositiveClick: d.onPositiveClick,
        onNegativeClick: d.onNegativeClick,
        onClose: function() {
          l === "success" && t ? (t.destroy(), t = null) : l === "warning" && r ? (r.destroy(), r = null) : l === "error" && o ? (o.destroy(), o = null) : e && (e.destroy(), e = null);
        },
        onLoading: (u) => {
          let c = null;
          l === "success" && t ? c = t : l === "warning" && r ? c = r : l === "error" && o ? c = o : e && (c = e), c.closable !== !1 && (c.class = u === !0 ? "p-dialog p-dialog-loading" : "p-dialog");
        }
      });
    }), d.content = Cf(a.content), d.onClose = function() {
      a.onClose && a.onClose(), e && e.destroy(), t && t.destroy(), r && r.destroy(), o && o.destroy(), e = null, t = null, r = null, o = null;
    }, LB.create(d);
  };
  return {
    open: function(a, s) {
      const l = i(a, s, "info");
      return e = l, l;
    },
    warning: function(a = {}, s = {}) {
      a.negativeText == null && !s.useDefaultConf && (a.negativeText = ""), a.positiveText == null && !s.useDefaultConf && (a.positiveText = "我知道了"), a.closable == null && !s.useDefaultConf && (a.closable = !1), a.showIcon == null && !s.useDefaultConf && (a.showIcon = !0);
      const l = i(a, { width: 430, ...s }, "warning");
      return r = l, l;
    },
    success: function(a = {}, s = {}) {
      a.negativeText == null && !s.useDefaultConf && (a.negativeText = ""), a.positiveText == null && !s.useDefaultConf && (a.positiveText = "我知道了"), a.closable == null && !s.useDefaultConf && (a.closable = !1), a.showIcon == null && !s.useDefaultConf && (a.showIcon = !0);
      const l = i(a, { width: 430, ...s }, "success");
      return t = l, l;
    },
    error: function(a = {}, s = {}) {
      a.negativeText == null && !s.useDefaultConf && (a.negativeText = ""), a.positiveText == null && !s.useDefaultConf && (a.positiveText = "我知道了"), a.closable == null && !s.useDefaultConf && (a.closable = !1), a.showIcon == null && !s.useDefaultConf && (a.showIcon = !0);
      const l = i(a, { width: 430, ...s }, "error");
      return o = l, l;
    }
  };
}
const VB = () => {
  const e = Gc();
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
    let s = [];
    a.width && s.push("width:" + a.width), a.maxHeight && s.push("max-height:" + a.maxHeight), s && (i.style = s.join(";")), i.content = function() {
      return r.content ? f(r.content, a.contentProps) : f("div", null);
    }, a.footer && (i.action = function() {
      return f(a.footer, a.footerProps);
    });
    const l = e.create(i);
    return {
      instance: l,
      lock: function() {
        l.class = "p-modal p-modal-lock";
      },
      unlock: function() {
        l.class = "p-modal";
      }
    };
  } };
}, UB = {
  install: (e, t = {}) => {
    const { prefix: r = "p" } = t;
    e.component(`${r}-practical`, eB), e.component(`${r}-search`, yB), e.component(`${r}-form`, SB), e.component(`${r}-input`, zo), e.component(`${r}-input-number`, BB), e.component(`${r}-select`, xi), e.component(`${r}-switch`, Ua), e.component(`${r}-radio`, kB), e.component(`${r}-radio-group`, FB), e.component(`${r}-checkbox`, RB), e.component(`${r}-checkbox-group`, PB), e.component(`${r}-button`, gr), e.component(`${r}-data-table`, $B), e.component(`${r}-popconfirm`, AB), e.component(`${r}-pagination`, EB), e.component(`${r}-promised`, OB), e.component(`${r}-drawer`, MB), e.component(`${r}-icon-wrapper`, _2), e.component(`${r}-icon`, Fo), e.component(`${r}-input-group`, uy), e.component(`${r}-input-group-label`, hy), e.component(`${r}-popover`, Rr), e.component(`${r}-spin`, hf), e.component(`${r}-collapse`, Ly), e.component(`${r}-collapse-item`, jy), e.component(`${r}-dropdown`, Ic), e.component(`${r}-tooltip`, zc), e.component(`${r}-divider`, CS);
  }
};
export {
  jB as createDiscreteFn,
  Qn as debounce,
  UB as default,
  _B as dialogDiscrete,
  vf as throttle,
  xf as useDelayLoading,
  WB as useDialog,
  VB as useModal
};
