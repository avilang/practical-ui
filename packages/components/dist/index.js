import { ref as _, readonly as Fn, watch as Le, computed as P, getCurrentInstance as oo, onMounted as Ft, onBeforeUnmount as Ct, onBeforeMount as Gn, reactive as io, inject as pe, onActivated as dd, onDeactivated as Sa, createTextVNode as an, Fragment as ht, Comment as Ba, defineComponent as ee, provide as $e, withDirectives as ln, toRef as oe, h as f, Teleport as Zo, nextTick as mt, renderSlot as jn, mergeProps as Yt, isVNode as hf, shallowRef as ud, watchEffect as Qe, Transition as zt, TransitionGroup as vf, vShow as vr, cloneVNode as cd, Text as pf, markRaw as pl, onUnmounted as gf, createApp as mf, unref as Ce, openBlock as gt, createBlock as $t, withCtx as At, createVNode as pr, mergeModels as gr, useModel as To, createSlots as Jo, normalizeProps as xf, guardReactiveProps as bf, useTemplateRef as gl, withModifiers as Cf, createElementBlock as qr, renderList as yf, resolveDynamicComponent as wf, toValue as Sf, useAttrs as fd, normalizeClass as hd, normalizeStyle as Ui, useSlots as vd, createCommentVNode as pn, toDisplayString as Gr, onScopeDispose as pd, createElementVNode as Bf } from "vue";
function kf(e) {
  let t = ".", r = "__", o = "--", i;
  if (e) {
    let v = e.blockPrefix;
    v && (t = v), v = e.elementPrefix, v && (r = v), v = e.modifierPrefix, v && (o = v);
  }
  const a = {
    install(v) {
      i = v.c;
      const g = v.context;
      g.bem = {}, g.bem.b = null, g.bem.els = null;
    }
  };
  function l(v) {
    let g, x;
    return {
      before(b) {
        g = b.bem.b, x = b.bem.els, b.bem.els = null;
      },
      after(b) {
        b.bem.b = g, b.bem.els = x;
      },
      $({ context: b, props: y }) {
        return v = typeof v == "string" ? v : v({ context: b, props: y }), b.bem.b = v, `${(y == null ? void 0 : y.bPrefix) || t}${b.bem.b}`;
      }
    };
  }
  function s(v) {
    let g;
    return {
      before(x) {
        g = x.bem.els;
      },
      after(x) {
        x.bem.els = g;
      },
      $({ context: x, props: b }) {
        return v = typeof v == "string" ? v : v({ context: x, props: b }), x.bem.els = v.split(",").map((y) => y.trim()), x.bem.els.map((y) => `${(b == null ? void 0 : b.bPrefix) || t}${x.bem.b}${r}${y}`).join(", ");
      }
    };
  }
  function d(v) {
    return {
      $({ context: g, props: x }) {
        v = typeof v == "string" ? v : v({ context: g, props: x });
        const b = v.split(",").map((w) => w.trim());
        function y(w) {
          return b.map((S) => `&${(x == null ? void 0 : x.bPrefix) || t}${g.bem.b}${w !== void 0 ? `${r}${w}` : ""}${o}${S}`).join(", ");
        }
        const B = g.bem.els;
        if (B !== null) {
          if (process.env.NODE_ENV !== "production" && B.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${v}) is invalid, using modifier inside multiple elements is not allowed`);
          return y(B[0]);
        } else
          return y();
      }
    };
  }
  function u(v) {
    return {
      $({ context: g, props: x }) {
        v = typeof v == "string" ? v : v({ context: g, props: x });
        const b = g.bem.els;
        if (process.env.NODE_ENV !== "production" && b !== null && b.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${v}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(x == null ? void 0 : x.bPrefix) || t}${g.bem.b}${b !== null && b.length > 0 ? `${r}${b[0]}` : ""}${o}${v})`;
      }
    };
  }
  return Object.assign(a, {
    cB: (...v) => i(l(v[0]), v[1], v[2]),
    cE: (...v) => i(s(v[0]), v[1], v[2]),
    cM: (...v) => i(d(v[0]), v[1], v[2]),
    cNotM: (...v) => i(u(v[0]), v[1], v[2])
  }), a;
}
function Ff(e) {
  let t = 0;
  for (let r = 0; r < e.length; ++r)
    e[r] === "&" && ++t;
  return t;
}
const gd = /\s*,(?![^(]*\))\s*/g, Rf = /\s+/g;
function Pf(e, t) {
  const r = [];
  return t.split(gd).forEach((o) => {
    let i = Ff(o);
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
function Af(e, t) {
  const r = [];
  return t.split(gd).forEach((o) => {
    e.forEach((i) => {
      r.push((i && i + " ") + o);
    });
  }), r;
}
function $f(e) {
  let t = [""];
  return e.forEach((r) => {
    r = r && r.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    r && (r.includes("&") ? t = Pf(t, r) : t = Af(t, r));
  }), t.join(", ").replace(Rf, " ");
}
function ml(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function Qo(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function zf(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function ho(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Ef = /[A-Z]/g;
function md(e) {
  return e.replace(Ef, (t) => "-" + t.toLowerCase());
}
function Df(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((r) => t + `  ${md(r[0])}: ${r[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function Tf(e, t, r) {
  return typeof e == "function" ? e({
    context: t.context,
    props: r
  }) : e;
}
function xl(e, t, r, o) {
  if (!t)
    return "";
  const i = Tf(t, r, o);
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
    s = md(s), d != null && l.push(`  ${s}${Df(d)}`);
  }), e && l.push("}"), l.join(`
`);
}
function qi(e, t, r) {
  e && e.forEach((o) => {
    if (Array.isArray(o))
      qi(o, t, r);
    else if (typeof o == "function") {
      const i = o(t);
      Array.isArray(i) ? qi(i, t, r) : i && r(i);
    } else o && r(o);
  });
}
function xd(e, t, r, o, i) {
  const a = e.$;
  let l = "";
  if (!a || typeof a == "string")
    ho(a) ? l = a : t.push(a);
  else if (typeof a == "function") {
    const u = a({
      context: o.context,
      props: i
    });
    ho(u) ? l = u : t.push(u);
  } else if (a.before && a.before(o.context), !a.$ || typeof a.$ == "string")
    ho(a.$) ? l = a.$ : t.push(a.$);
  else if (a.$) {
    const u = a.$({
      context: o.context,
      props: i
    });
    ho(u) ? l = u : t.push(u);
  }
  const s = $f(t), d = xl(s, e.props, o, i);
  l ? r.push(`${l} {`) : d.length && r.push(d), e.children && qi(e.children, {
    context: o.context,
    props: i
  }, (u) => {
    if (typeof u == "string") {
      const c = xl(s, { raw: u }, o, i);
      r.push(c);
    } else
      xd(u, t, r, o, i);
  }), t.pop(), l && r.push("}"), a && a.after && a.after(o.context);
}
function Of(e, t, r) {
  const o = [];
  return xd(e, [], o, t, r), o.join(`

`);
}
function Xr(e) {
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
function Mf(e, t, r, o) {
  const { els: i } = t;
  if (r === void 0)
    i.forEach(ml), t.els = [];
  else {
    const a = Qo(r, o);
    a && i.includes(a) && (ml(a), t.els = i.filter((l) => l !== a));
  }
}
function bl(e, t) {
  e.push(t);
}
function If(e, t, r, o, i, a, l, s, d) {
  let u;
  if (r === void 0 && (u = t.render(o), r = Xr(u)), d) {
    d.adapter(r, u ?? t.render(o));
    return;
  }
  s === void 0 && (s = document.head);
  const c = Qo(r, s);
  if (c !== null && !a)
    return c;
  const h = c ?? zf(r);
  if (u === void 0 && (u = t.render(o)), h.textContent = u, c !== null)
    return c;
  if (l) {
    const p = s.querySelector(`meta[name="${l}"]`);
    if (p)
      return s.insertBefore(h, p), bl(t.els, h), h;
  }
  return i ? s.insertBefore(h, s.querySelector("style, link")) : s.appendChild(h), bl(t.els, h), h;
}
function _f(e) {
  return Of(this, this.instance, e);
}
function Lf(e = {}) {
  const { id: t, ssr: r, props: o, head: i = !1, force: a = !1, anchorMetaName: l, parent: s } = e;
  return If(this.instance, this, t, o, i, a, l, s, r);
}
function Nf(e = {}) {
  const { id: t, parent: r } = e;
  Mf(this.instance, this, t, r);
}
const vo = function(e, t, r, o) {
  return {
    instance: e,
    $: t,
    props: r,
    children: o,
    els: [],
    render: _f,
    mount: Lf,
    unmount: Nf
  };
}, Hf = function(e, t, r, o) {
  return Array.isArray(t) ? vo(e, { $: null }, null, t) : Array.isArray(r) ? vo(e, t, null, r) : Array.isArray(o) ? vo(e, t, r, o) : vo(e, t, r, null);
};
function bd(e = {}) {
  const t = {
    c: (...r) => Hf(t, ...r),
    use: (r, ...o) => r.install(t, ...o),
    find: Qo,
    context: {},
    config: e
  };
  return t;
}
function jf(e, t) {
  if (e === void 0)
    return !1;
  if (t) {
    const { context: { ids: r } } = t;
    return r.has(e);
  }
  return Qo(e) !== null;
}
const Wf = "n", Yr = `.${Wf}-`, Vf = "__", Kf = "--", Cd = bd(), yd = kf({
  blockPrefix: Yr,
  elementPrefix: Vf,
  modifierPrefix: Kf
});
Cd.use(yd);
const {
  c: T,
  find: g2
} = Cd, {
  cB: R,
  cE: M,
  cM: N,
  cNotM: Ye
} = yd;
function ei(e) {
  return T(({
    props: {
      bPrefix: t
    }
  }) => `${t || Yr}modal, ${t || Yr}drawer`, [e]);
}
function ka(e) {
  return T(({
    props: {
      bPrefix: t
    }
  }) => `${t || Yr}popover`, [e]);
}
function wd(e) {
  return T(({
    props: {
      bPrefix: t
    }
  }) => `&${t || Yr}modal`, e);
}
const Uf = (...e) => T(">", [R(...e)]);
function J(e, t) {
  return e + (t === "default" ? "" : t.replace(/^[a-z]/, (r) => r.toUpperCase()));
}
let Oo = [];
const Sd = /* @__PURE__ */ new WeakMap();
function qf() {
  Oo.forEach((e) => e(...Sd.get(e))), Oo = [];
}
function Mo(e, ...t) {
  Sd.set(e, t), !Oo.includes(e) && Oo.push(e) === 1 && requestAnimationFrame(qf);
}
function Ot(e, t) {
  let { target: r } = e;
  for (; r; ) {
    if (r.dataset && r.dataset[t] !== void 0)
      return !0;
    r = r.parentElement;
  }
  return !1;
}
function mr(e) {
  return e.composedPath()[0] || null;
}
function kn(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function yt(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Xt(e, t) {
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
const Cl = {
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
}, wr = "^\\s*", Sr = "\\s*$", Mn = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", In = "([0-9A-Fa-f])", _n = "([0-9A-Fa-f]{2})", Gf = new RegExp(`${wr}rgb\\s*\\(${Mn},${Mn},${Mn}\\)${Sr}`), Xf = new RegExp(`${wr}rgba\\s*\\(${Mn},${Mn},${Mn},${Mn}\\)${Sr}`), Yf = new RegExp(`${wr}#${In}${In}${In}${Sr}`), Zf = new RegExp(`${wr}#${_n}${_n}${_n}${Sr}`), Jf = new RegExp(`${wr}#${In}${In}${In}${In}${Sr}`), Qf = new RegExp(`${wr}#${_n}${_n}${_n}${_n}${Sr}`);
function Tt(e) {
  return parseInt(e, 16);
}
function Wn(e) {
  try {
    let t;
    if (t = Zf.exec(e))
      return [Tt(t[1]), Tt(t[2]), Tt(t[3]), 1];
    if (t = Gf.exec(e))
      return [Pt(t[1]), Pt(t[5]), Pt(t[9]), 1];
    if (t = Xf.exec(e))
      return [
        Pt(t[1]),
        Pt(t[5]),
        Pt(t[9]),
        Hr(t[13])
      ];
    if (t = Yf.exec(e))
      return [
        Tt(t[1] + t[1]),
        Tt(t[2] + t[2]),
        Tt(t[3] + t[3]),
        1
      ];
    if (t = Qf.exec(e))
      return [
        Tt(t[1]),
        Tt(t[2]),
        Tt(t[3]),
        Hr(Tt(t[4]) / 255)
      ];
    if (t = Jf.exec(e))
      return [
        Tt(t[1] + t[1]),
        Tt(t[2] + t[2]),
        Tt(t[3] + t[3]),
        Hr(Tt(t[4] + t[4]) / 255)
      ];
    if (e in Cl)
      return Wn(Cl[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function eh(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function Gi(e, t, r, o) {
  return `rgba(${Pt(e)}, ${Pt(t)}, ${Pt(r)}, ${eh(o)})`;
}
function Bi(e, t, r, o, i) {
  return Pt((e * t * (1 - o) + r * o) / i);
}
function We(e, t) {
  Array.isArray(e) || (e = Wn(e)), Array.isArray(t) || (t = Wn(t));
  const r = e[3], o = t[3], i = Hr(r + o - r * o);
  return Gi(Bi(e[0], r, t[0], o, i), Bi(e[1], r, t[1], o, i), Bi(e[2], r, t[2], o, i), i);
}
function Ee(e, t) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : Wn(e);
  return t.alpha ? Gi(r, o, i, t.alpha) : Gi(r, o, i, a);
}
function po(e, t) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : Wn(e), { lightness: l = 1, alpha: s = 1 } = t;
  return th([r * l, o * l, i * l, a * s]);
}
function Hr(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Pt(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function th(e) {
  const [t, r, o] = e;
  return 3 in e ? `rgba(${Pt(t)}, ${Pt(r)}, ${Pt(o)}, ${Hr(e[3])})` : `rgba(${Pt(t)}, ${Pt(r)}, ${Pt(o)}, 1)`;
}
function sn(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function nh(e, t) {
  const r = [];
  for (let o = 0; o < e; ++o)
    r.push(t);
  return r;
}
function zo(e) {
  return e.composedPath()[0];
}
const rh = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function oh(e, t, r) {
  if (e === "mousemoveoutside") {
    const o = (i) => {
      t.contains(zo(i)) || r(i);
    };
    return {
      mousemove: o,
      touchstart: o
    };
  } else if (e === "clickoutside") {
    let o = !1;
    const i = (l) => {
      o = !t.contains(zo(l));
    }, a = (l) => {
      o && (t.contains(zo(l)) || r(l));
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
function Bd(e, t, r) {
  const o = rh[e];
  let i = o.get(t);
  i === void 0 && o.set(t, i = /* @__PURE__ */ new WeakMap());
  let a = i.get(r);
  return a === void 0 && i.set(r, a = oh(e, t, r)), a;
}
function ih(e, t, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Bd(e, t, r);
    return Object.keys(i).forEach((a) => {
      et(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function ah(e, t, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Bd(e, t, r);
    return Object.keys(i).forEach((a) => {
      He(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function lh() {
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
  function i(C, z, E) {
    const D = C[z];
    return C[z] = function() {
      return E.apply(C, arguments), D.apply(C, arguments);
    }, C;
  }
  function a(C, z) {
    C[z] = Event.prototype[z];
  }
  const l = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function d() {
    var C;
    return (C = l.get(this)) !== null && C !== void 0 ? C : null;
  }
  function u(C, z) {
    s !== void 0 && Object.defineProperty(C, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: z ?? s.get
    });
  }
  const c = {
    bubble: {},
    capture: {}
  }, h = {};
  function p() {
    const C = function(z) {
      const { type: E, eventPhase: D, bubbles: K } = z, O = zo(z);
      if (D === 2)
        return;
      const n = D === 1 ? "capture" : "bubble";
      let A = O;
      const $ = [];
      for (; A === null && (A = window), $.push(A), A !== window; )
        A = A.parentNode || null;
      const L = c.capture[E], I = c.bubble[E];
      if (i(z, "stopPropagation", r), i(z, "stopImmediatePropagation", o), u(z, d), n === "capture") {
        if (L === void 0)
          return;
        for (let V = $.length - 1; V >= 0 && !e.has(z); --V) {
          const te = $[V], X = L.get(te);
          if (X !== void 0) {
            l.set(z, te);
            for (const q of X) {
              if (t.has(z))
                break;
              q(z);
            }
          }
          if (V === 0 && !K && I !== void 0) {
            const q = I.get(te);
            if (q !== void 0)
              for (const H of q) {
                if (t.has(z))
                  break;
                H(z);
              }
          }
        }
      } else if (n === "bubble") {
        if (I === void 0)
          return;
        for (let V = 0; V < $.length && !e.has(z); ++V) {
          const te = $[V], X = I.get(te);
          if (X !== void 0) {
            l.set(z, te);
            for (const q of X) {
              if (t.has(z))
                break;
              q(z);
            }
          }
        }
      }
      a(z, "stopPropagation"), a(z, "stopImmediatePropagation"), u(z);
    };
    return C.displayName = "evtdUnifiedHandler", C;
  }
  function m() {
    const C = function(z) {
      const { type: E, eventPhase: D } = z;
      if (D !== 2)
        return;
      const K = h[E];
      K !== void 0 && K.forEach((O) => O(z));
    };
    return C.displayName = "evtdUnifiedWindowEventHandler", C;
  }
  const v = p(), g = m();
  function x(C, z) {
    const E = c[C];
    return E[z] === void 0 && (E[z] = /* @__PURE__ */ new Map(), window.addEventListener(z, v, C === "capture")), E[z];
  }
  function b(C) {
    return h[C] === void 0 && (h[C] = /* @__PURE__ */ new Set(), window.addEventListener(C, g)), h[C];
  }
  function y(C, z) {
    let E = C.get(z);
    return E === void 0 && C.set(z, E = /* @__PURE__ */ new Set()), E;
  }
  function B(C, z, E, D) {
    const K = c[z][E];
    if (K !== void 0) {
      const O = K.get(C);
      if (O !== void 0 && O.has(D))
        return !0;
    }
    return !1;
  }
  function w(C, z) {
    const E = h[C];
    return !!(E !== void 0 && E.has(z));
  }
  function S(C, z, E, D) {
    let K;
    if (typeof D == "object" && D.once === !0 ? K = (L) => {
      F(C, z, K, D), E(L);
    } : K = E, ih(C, z, K, D))
      return;
    const n = D === !0 || typeof D == "object" && D.capture === !0 ? "capture" : "bubble", A = x(n, C), $ = y(A, z);
    if ($.has(K) || $.add(K), z === window) {
      const L = b(C);
      L.has(K) || L.add(K);
    }
  }
  function F(C, z, E, D) {
    if (ah(C, z, E, D))
      return;
    const O = D === !0 || typeof D == "object" && D.capture === !0, n = O ? "capture" : "bubble", A = x(n, C), $ = y(A, z);
    if (z === window && !B(z, O ? "bubble" : "capture", C, E) && w(C, E)) {
      const I = h[C];
      I.delete(E), I.size === 0 && (window.removeEventListener(C, g), h[C] = void 0);
    }
    $.has(E) && $.delete(E), $.size === 0 && A.delete(z), A.size === 0 && (window.removeEventListener(C, v, n === "capture"), c[n][C] = void 0);
  }
  return {
    on: S,
    off: F
  };
}
const { on: et, off: He } = lh();
function kd(e) {
  const t = _(!!e.value);
  if (t.value)
    return Fn(t);
  const r = Le(e, (o) => {
    o && (t.value = !0, r());
  });
  return Fn(t);
}
function je(e) {
  const t = P(e), r = _(t.value);
  return Le(t, (o) => {
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
function Fa() {
  return oo() !== null;
}
const Ra = typeof window < "u";
let ur, jr;
const sh = () => {
  var e, t;
  ur = Ra ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, jr = !1, ur !== void 0 ? ur.then(() => {
    jr = !0;
  }) : jr = !0;
};
sh();
function dh(e) {
  if (jr)
    return;
  let t = !1;
  Ft(() => {
    jr || ur == null || ur.then(() => {
      t || e();
    });
  }), Ct(() => {
    t = !0;
  });
}
const Ir = _(null);
function yl(e) {
  if (e.clientX > 0 || e.clientY > 0)
    Ir.value = {
      x: e.clientX,
      y: e.clientY
    };
  else {
    const { target: t } = e;
    if (t instanceof Element) {
      const { left: r, top: o, width: i, height: a } = t.getBoundingClientRect();
      r > 0 || o > 0 ? Ir.value = {
        x: r + i / 2,
        y: o + a / 2
      } : Ir.value = { x: 0, y: 0 };
    } else
      Ir.value = null;
  }
}
let go = 0, wl = !0;
function Io() {
  if (!Ra)
    return Fn(_(null));
  go === 0 && et("click", document, yl, !0);
  const e = () => {
    go += 1;
  };
  return wl && (wl = Fa()) ? (Gn(e), Ct(() => {
    go -= 1, go === 0 && He("click", document, yl, !0);
  })) : e(), Fn(Ir);
}
const uh = _(void 0);
let mo = 0;
function Sl() {
  uh.value = Date.now();
}
let Bl = !0;
function _o(e) {
  if (!Ra)
    return Fn(_(!1));
  const t = _(!1);
  let r = null;
  function o() {
    r !== null && window.clearTimeout(r);
  }
  function i() {
    o(), t.value = !0, r = window.setTimeout(() => {
      t.value = !1;
    }, e);
  }
  mo === 0 && et("click", window, Sl, !0);
  const a = () => {
    mo += 1, et("click", window, i, !0);
  };
  return Bl && (Bl = Fa()) ? (Gn(a), Ct(() => {
    mo -= 1, mo === 0 && He("click", window, Sl, !0), He("click", window, i, !0), o();
  })) : a(), Fn(t);
}
function Et(e, t) {
  return Le(e, (r) => {
    r !== void 0 && (t.value = r);
  }), P(() => e.value === void 0 ? t.value : e.value);
}
function Br() {
  const e = _(!1);
  return Ft(() => {
    e.value = !0;
  }), Fn(e);
}
function Pa(e, t) {
  return P(() => {
    for (const r of t)
      if (e[r] !== void 0)
        return e[r];
    return e[t[t.length - 1]];
  });
}
const ch = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function fh() {
  return ch;
}
function hh(e = {}, t) {
  const r = io({
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
        const { stop: h = !1, prevent: p = !1 } = c;
        h && d.stopPropagation(), p && d.preventDefault(), c.handler(d);
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
        const { stop: h = !1, prevent: p = !1 } = c;
        h && d.stopPropagation(), p && d.preventDefault(), c.handler(d);
      }
    });
  }, s = () => {
    (t === void 0 || t.value) && (et("keydown", document, a), et("keyup", document, l)), t !== void 0 && Le(t, (d) => {
      d ? (et("keydown", document, a), et("keyup", document, l)) : (He("keydown", document, a), He("keyup", document, l));
    });
  };
  return Fa() ? (Gn(s), Ct(() => {
    (t === void 0 || t.value) && (He("keydown", document, a), He("keyup", document, l));
  })) : s(), Fn(r);
}
const Aa = "n-internal-select-menu", Fd = "n-internal-select-menu-body", ti = "n-drawer-body", ni = "n-modal-body", vh = "n-modal-provider", Rd = "n-modal", ao = "n-popover-body", Pd = "__disabled__";
function dn(e) {
  const t = pe(ni, null), r = pe(ti, null), o = pe(ao, null), i = pe(Fd, null), a = _();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const l = () => {
      a.value = document.fullscreenElement;
    };
    Ft(() => {
      et("fullscreenchange", document, l);
    }), Ct(() => {
      He("fullscreenchange", document, l);
    });
  }
  return je(() => {
    var l;
    const {
      to: s
    } = e;
    return s !== void 0 ? s === !1 ? Pd : s === !0 ? a.value || "body" : s : t != null && t.value ? (l = t.value.$el) !== null && l !== void 0 ? l : t.value : r != null && r.value ? r.value : o != null && o.value ? o.value : i != null && i.value ? i.value : s ?? (a.value || "body");
  });
}
dn.tdkey = Pd;
dn.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function ph(e, t, r) {
  var o;
  const i = pe(e, null);
  if (i === null) return;
  const a = (o = oo()) === null || o === void 0 ? void 0 : o.proxy;
  Le(r, l), l(r.value), Ct(() => {
    l(void 0, r.value);
  });
  function l(u, c) {
    if (!i) return;
    const h = i[t];
    c !== void 0 && s(h, c), u !== void 0 && d(h, u);
  }
  function s(u, c) {
    u[c] || (u[c] = []), u[c].splice(u[c].findIndex((h) => h === a), 1);
  }
  function d(u, c) {
    u[c] || (u[c] = []), ~u[c].findIndex((h) => h === a) || u[c].push(a);
  }
}
function gh(e, t, r) {
  const o = _(e.value);
  let i = null;
  return Le(e, (a) => {
    i !== null && window.clearTimeout(i), a === !0 ? r && !r.value ? o.value = !0 : i = window.setTimeout(() => {
      o.value = !0;
    }, t) : o.value = !1;
  }), o;
}
const kr = typeof document < "u" && typeof window < "u", $a = _(!1);
function kl() {
  $a.value = !0;
}
function Fl() {
  $a.value = !1;
}
let Tr = 0;
function mh() {
  return kr && (Gn(() => {
    Tr || (window.addEventListener("compositionstart", kl), window.addEventListener("compositionend", Fl)), Tr++;
  }), Ct(() => {
    Tr <= 1 ? (window.removeEventListener("compositionstart", kl), window.removeEventListener("compositionend", Fl), Tr = 0) : Tr--;
  })), $a;
}
let ir = 0, Rl = "", Pl = "", Al = "", $l = "";
const zl = _("0px");
function xh(e) {
  if (typeof document > "u") return;
  const t = document.documentElement;
  let r, o = !1;
  const i = () => {
    t.style.marginRight = Rl, t.style.overflow = Pl, t.style.overflowX = Al, t.style.overflowY = $l, zl.value = "0px";
  };
  Ft(() => {
    r = Le(e, (a) => {
      if (a) {
        if (!ir) {
          const l = window.innerWidth - t.offsetWidth;
          l > 0 && (Rl = t.style.marginRight, t.style.marginRight = `${l}px`, zl.value = `${l}px`), Pl = t.style.overflow, Al = t.style.overflowX, $l = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden";
        }
        o = !0, ir++;
      } else
        ir--, ir || i(), o = !1;
    }, {
      immediate: !0
    });
  }), Ct(() => {
    r == null || r(), o && (ir--, ir || i(), o = !1);
  });
}
function bh(e) {
  const t = {
    isDeactivated: !1
  };
  let r = !1;
  return dd(() => {
    if (t.isDeactivated = !1, !r) {
      r = !0;
      return;
    }
    e();
  }), Sa(() => {
    t.isDeactivated = !0, r || (r = !0);
  }), t;
}
function Xi(e, t, r = "default") {
  const o = t[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  return o();
}
function Yi(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(an(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        Yi(o, t, r);
        return;
      }
      if (o.type === ht) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && Yi(o.children, t, r);
      } else o.type !== Ba && r.push(o);
    }
  }), r;
}
function El(e, t, r = "default") {
  const o = t[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  const i = Yi(o());
  if (i.length === 1)
    return i[0];
  throw new Error(`[vueuc/${e}]: slot[${r}] should have exactly one child.`);
}
let yn = null;
function Ad() {
  if (yn === null && (yn = document.getElementById("v-binder-view-measurer"), yn === null)) {
    yn = document.createElement("div"), yn.id = "v-binder-view-measurer";
    const { style: e } = yn;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(yn);
  }
  return yn.getBoundingClientRect();
}
function Ch(e, t) {
  const r = Ad();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: r.width - e,
    bottom: r.height - t
  };
}
function ki(e) {
  const t = e.getBoundingClientRect(), r = Ad();
  return {
    left: t.left - r.left,
    top: t.top - r.top,
    bottom: r.height + r.top - t.bottom,
    right: r.width + r.left - t.right,
    width: t.width,
    height: t.height
  };
}
function yh(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function $d(e) {
  if (e === null)
    return null;
  const t = yh(e);
  if (t === null)
    return null;
  if (t.nodeType === 9)
    return document;
  if (t.nodeType === 1) {
    const { overflow: r, overflowX: o, overflowY: i } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(r + i + o))
      return t;
  }
  return $d(t);
}
const za = ee({
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
    $e("VBinder", (t = oo()) === null || t === void 0 ? void 0 : t.proxy);
    const r = pe("VBinder", null), o = _(null), i = (b) => {
      o.value = b, r && e.syncTargetWithParent && r.setTargetRef(b);
    };
    let a = [];
    const l = () => {
      let b = o.value;
      for (; b = $d(b), b !== null; )
        a.push(b);
      for (const y of a)
        et("scroll", y, h, !0);
    }, s = () => {
      for (const b of a)
        He("scroll", b, h, !0);
      a = [];
    }, d = /* @__PURE__ */ new Set(), u = (b) => {
      d.size === 0 && l(), d.has(b) || d.add(b);
    }, c = (b) => {
      d.has(b) && d.delete(b), d.size === 0 && s();
    }, h = () => {
      Mo(p);
    }, p = () => {
      d.forEach((b) => b());
    }, m = /* @__PURE__ */ new Set(), v = (b) => {
      m.size === 0 && et("resize", window, x), m.has(b) || m.add(b);
    }, g = (b) => {
      m.has(b) && m.delete(b), m.size === 0 && He("resize", window, x);
    }, x = () => {
      m.forEach((b) => b());
    };
    return Ct(() => {
      He("resize", window, x), s();
    }), {
      targetRef: o,
      setTargetRef: i,
      addScrollListener: u,
      removeScrollListener: c,
      addResizeListener: v,
      removeResizeListener: g
    };
  },
  render() {
    return Xi("binder", this.$slots);
  }
}), Ea = ee({
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
    return e ? ln(El("follower", this.$slots), [
      [t]
    ]) : El("follower", this.$slots);
  }
}), ar = "@@mmoContext", wh = {
  mounted(e, { value: t }) {
    e[ar] = {
      handler: void 0
    }, typeof t == "function" && (e[ar].handler = t, et("mousemoveoutside", e, t));
  },
  updated(e, { value: t }) {
    const r = e[ar];
    typeof t == "function" ? r.handler ? r.handler !== t && (He("mousemoveoutside", e, r.handler), r.handler = t, et("mousemoveoutside", e, t)) : (e[ar].handler = t, et("mousemoveoutside", e, t)) : r.handler && (He("mousemoveoutside", e, r.handler), r.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[ar];
    t && He("mousemoveoutside", e, t), e[ar].handler = void 0;
  }
}, lr = "@@coContext", Zr = {
  mounted(e, { value: t, modifiers: r }) {
    e[lr] = {
      handler: void 0
    }, typeof t == "function" && (e[lr].handler = t, et("clickoutside", e, t, {
      capture: r.capture
    }));
  },
  updated(e, { value: t, modifiers: r }) {
    const o = e[lr];
    typeof t == "function" ? o.handler ? o.handler !== t && (He("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = t, et("clickoutside", e, t, {
      capture: r.capture
    })) : (e[lr].handler = t, et("clickoutside", e, t, {
      capture: r.capture
    })) : o.handler && (He("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = void 0);
  },
  unmounted(e, { modifiers: t }) {
    const { handler: r } = e[lr];
    r && He("clickoutside", e, r, {
      capture: t.capture
    }), e[lr].handler = void 0;
  }
};
function Sh(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class Bh {
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
    o.has(t) ? o.delete(t) : r === void 0 && Sh("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const Fi = new Bh(), sr = "@@ziContext", Da = {
  mounted(e, t) {
    const { value: r = {} } = t, { zIndex: o, enabled: i } = r;
    e[sr] = {
      enabled: !!i,
      initialized: !1
    }, i && (Fi.ensureZIndex(e, o), e[sr].initialized = !0);
  },
  updated(e, t) {
    const { value: r = {} } = t, { zIndex: o, enabled: i } = r, a = e[sr].enabled;
    i && !a && (Fi.ensureZIndex(e, o), e[sr].initialized = !0), e[sr].enabled = !!i;
  },
  unmounted(e, t) {
    if (!e[sr].initialized)
      return;
    const { value: r = {} } = t, { zIndex: o } = r;
    Fi.unregister(e, o);
  }
}, kh = "@css-render/vue3-ssr";
function Fh(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function Rh(e, t, r) {
  const { styles: o, ids: i } = r;
  i.has(e) || o !== null && (i.add(e), o.push(Fh(e, t)));
}
const Ph = typeof document < "u";
function Xn() {
  if (Ph)
    return;
  const e = pe(kh, null);
  if (e !== null)
    return {
      adapter: (t, r) => Rh(t, r, e),
      context: e
    };
}
function Dl(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
const { c: Bn } = bd(), Ta = "vueuc-style";
function Tl(e) {
  return e & -e;
}
class zd {
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
      i[t] += r, t += Tl(t);
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
      a += r[t], t -= Tl(t);
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
function Ol(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const Ed = ee({
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
      showTeleport: kd(oe(e, "show")),
      mergedTo: P(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? Xi("lazy-teleport", this.$slots) : f(Zo, {
      disabled: this.disabled,
      to: this.mergedTo
    }, Xi("lazy-teleport", this.$slots)) : null;
  }
}), xo = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ml = {
  start: "end",
  center: "center",
  end: "start"
}, Ri = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, Ah = {
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
}, $h = {
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
}, zh = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, Il = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, _l = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Eh(e, t, r, o, i, a) {
  if (!i || a)
    return { placement: e, top: 0, left: 0 };
  const [l, s] = e.split("-");
  let d = s ?? "center", u = {
    top: 0,
    left: 0
  };
  const c = (m, v, g) => {
    let x = 0, b = 0;
    const y = r[m] - t[v] - t[m];
    return y > 0 && o && (g ? b = Il[v] ? y : -y : x = Il[v] ? y : -y), {
      left: x,
      top: b
    };
  }, h = l === "left" || l === "right";
  if (d !== "center") {
    const m = zh[e], v = xo[m], g = Ri[m];
    if (r[g] > t[g]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[m] + t[g] < r[g]
      ) {
        const x = (r[g] - t[g]) / 2;
        t[m] < x || t[v] < x ? t[m] < t[v] ? (d = Ml[s], u = c(g, v, h)) : u = c(g, m, h) : d = "center";
      }
    } else r[g] < t[g] && t[v] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[m] > t[v] && (d = Ml[s]);
  } else {
    const m = l === "bottom" || l === "top" ? "left" : "top", v = xo[m], g = Ri[m], x = (r[g] - t[g]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[m] < x || t[v] < x) && (t[m] > t[v] ? (d = _l[m], u = c(g, m, h)) : (d = _l[v], u = c(g, v, h)));
  }
  let p = l;
  return (
    // space is not enough
    t[l] < r[Ri[l]] && // opposite position's space is larger
    t[l] < t[xo[l]] && (p = xo[l]), {
      placement: d !== "center" ? `${p}-${d}` : p,
      left: u.left,
      top: u.top
    }
  );
}
function Dh(e, t) {
  return t ? $h[e] : Ah[e];
}
function Th(e, t, r, o, i, a) {
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
const Oh = Bn([
  Bn(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  Bn(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    Bn("> *", {
      pointerEvents: "all"
    })
  ])
]), Oa = ee({
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
    const t = pe("VBinder"), r = je(() => e.enabled !== void 0 ? e.enabled : e.show), o = _(null), i = _(null), a = () => {
      const { syncTrigger: p } = e;
      p.includes("scroll") && t.addScrollListener(d), p.includes("resize") && t.addResizeListener(d);
    }, l = () => {
      t.removeScrollListener(d), t.removeResizeListener(d);
    };
    Ft(() => {
      r.value && (d(), a());
    });
    const s = Xn();
    Oh.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: Ta,
      ssr: s
    }), Ct(() => {
      l();
    }), dh(() => {
      r.value && d();
    });
    const d = () => {
      if (!r.value)
        return;
      const p = o.value;
      if (p === null)
        return;
      const m = t.targetRef, { x: v, y: g, overlap: x } = e, b = v !== void 0 && g !== void 0 ? Ch(v, g) : ki(m);
      p.style.setProperty("--v-target-width", `${Math.round(b.width)}px`), p.style.setProperty("--v-target-height", `${Math.round(b.height)}px`);
      const { width: y, minWidth: B, placement: w, internalShift: S, flip: F } = e;
      p.setAttribute("v-placement", w), x ? p.setAttribute("v-overlap", "") : p.removeAttribute("v-overlap");
      const { style: C } = p;
      y === "target" ? C.width = `${b.width}px` : y !== void 0 ? C.width = y : C.width = "", B === "target" ? C.minWidth = `${b.width}px` : B !== void 0 ? C.minWidth = B : C.minWidth = "";
      const z = ki(p), E = ki(i.value), { left: D, top: K, placement: O } = Eh(w, b, z, S, F, x), n = Dh(O, x), { left: A, top: $, transform: L } = Th(O, E, b, K, D, x);
      p.setAttribute("v-placement", O), p.style.setProperty("--v-offset-left", `${Math.round(D)}px`), p.style.setProperty("--v-offset-top", `${Math.round(K)}px`), p.style.transform = `translateX(${A}) translateY(${$}) ${L}`, p.style.setProperty("--v-transform-origin", n), p.style.transformOrigin = n;
    };
    Le(r, (p) => {
      p ? (a(), u()) : l();
    });
    const u = () => {
      mt().then(d).catch((p) => console.error(p));
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
      Le(oe(e, p), d);
    }), ["teleportDisabled"].forEach((p) => {
      Le(oe(e, p), u);
    }), Le(oe(e, "syncTrigger"), (p) => {
      p.includes("resize") ? t.addResizeListener(d) : t.removeResizeListener(d), p.includes("scroll") ? t.addScrollListener(d) : t.removeScrollListener(d);
    });
    const c = Br(), h = je(() => {
      const { to: p } = e;
      if (p !== void 0)
        return p;
      c.value;
    });
    return {
      VBinder: t,
      mergedEnabled: r,
      offsetContainerRef: i,
      followerRef: o,
      mergedTo: h,
      syncPosition: d
    };
  },
  render() {
    return f(Ed, {
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
        return this.zindexable ? ln(r, [
          [
            Da,
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
var Nn = [], Mh = function() {
  return Nn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Ih = function() {
  return Nn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Ll = "ResizeObserver loop completed with undelivered notifications.", _h = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Ll
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Ll), window.dispatchEvent(e);
}, Jr;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Jr || (Jr = {}));
var Hn = function(e) {
  return Object.freeze(e);
}, Lh = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, Hn(this);
  }
  return e;
}(), Dd = function() {
  function e(t, r, o, i) {
    return this.x = t, this.y = r, this.width = o, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Hn(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, o = t.y, i = t.top, a = t.right, l = t.bottom, s = t.left, d = t.width, u = t.height;
    return { x: r, y: o, top: i, right: a, bottom: l, left: s, width: d, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Ma = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Td = function(e) {
  if (Ma(e)) {
    var t = e.getBBox(), r = t.width, o = t.height;
    return !r && !o;
  }
  var i = e, a = i.offsetWidth, l = i.offsetHeight;
  return !(a || l || e.getClientRects().length);
}, Nl = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, Nh = function(e) {
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
}, Wr = typeof window < "u" ? window : {}, bo = /* @__PURE__ */ new WeakMap(), Hl = /auto|scroll/, Hh = /^tb|vertical/, jh = /msie|trident/i.test(Wr.navigator && Wr.navigator.userAgent), en = function(e) {
  return parseFloat(e || "0");
}, cr = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new Lh((r ? t : e) || 0, (r ? e : t) || 0);
}, jl = Hn({
  devicePixelContentBoxSize: cr(),
  borderBoxSize: cr(),
  contentBoxSize: cr(),
  contentRect: new Dd(0, 0, 0, 0)
}), Od = function(e, t) {
  if (t === void 0 && (t = !1), bo.has(e) && !t)
    return bo.get(e);
  if (Td(e))
    return bo.set(e, jl), jl;
  var r = getComputedStyle(e), o = Ma(e) && e.ownerSVGElement && e.getBBox(), i = !jh && r.boxSizing === "border-box", a = Hh.test(r.writingMode || ""), l = !o && Hl.test(r.overflowY || ""), s = !o && Hl.test(r.overflowX || ""), d = o ? 0 : en(r.paddingTop), u = o ? 0 : en(r.paddingRight), c = o ? 0 : en(r.paddingBottom), h = o ? 0 : en(r.paddingLeft), p = o ? 0 : en(r.borderTopWidth), m = o ? 0 : en(r.borderRightWidth), v = o ? 0 : en(r.borderBottomWidth), g = o ? 0 : en(r.borderLeftWidth), x = h + u, b = d + c, y = g + m, B = p + v, w = s ? e.offsetHeight - B - e.clientHeight : 0, S = l ? e.offsetWidth - y - e.clientWidth : 0, F = i ? x + y : 0, C = i ? b + B : 0, z = o ? o.width : en(r.width) - F - S, E = o ? o.height : en(r.height) - C - w, D = z + x + S + y, K = E + b + w + B, O = Hn({
    devicePixelContentBoxSize: cr(Math.round(z * devicePixelRatio), Math.round(E * devicePixelRatio), a),
    borderBoxSize: cr(D, K, a),
    contentBoxSize: cr(z, E, a),
    contentRect: new Dd(h, d, z, E)
  });
  return bo.set(e, O), O;
}, Md = function(e, t, r) {
  var o = Od(e, r), i = o.borderBoxSize, a = o.contentBoxSize, l = o.devicePixelContentBoxSize;
  switch (t) {
    case Jr.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case Jr.BORDER_BOX:
      return i;
    default:
      return a;
  }
}, Wh = /* @__PURE__ */ function() {
  function e(t) {
    var r = Od(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = Hn([r.borderBoxSize]), this.contentBoxSize = Hn([r.contentBoxSize]), this.devicePixelContentBoxSize = Hn([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Id = function(e) {
  if (Td(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, Vh = function() {
  var e = 1 / 0, t = [];
  Nn.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(u) {
        var c = new Wh(u.target), h = Id(u.target);
        s.push(c), u.lastReportedSize = Md(u.target, u.observedBox), h < e && (e = h);
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
}, Wl = function(e) {
  Nn.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(i) {
      i.isActive() && (Id(i.target) > e ? r.activeTargets.push(i) : r.skippedTargets.push(i));
    });
  });
}, Kh = function() {
  var e = 0;
  for (Wl(e); Mh(); )
    e = Vh(), Wl(e);
  return Ih() && _h(), e > 0;
}, Pi, _d = [], Uh = function() {
  return _d.splice(0).forEach(function(e) {
    return e();
  });
}, qh = function(e) {
  if (!Pi) {
    var t = 0, r = document.createTextNode(""), o = { characterData: !0 };
    new MutationObserver(function() {
      return Uh();
    }).observe(r, o), Pi = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  _d.push(e), Pi();
}, Gh = function(e) {
  qh(function() {
    requestAnimationFrame(e);
  });
}, Eo = 0, Xh = function() {
  return !!Eo;
}, Yh = 250, Zh = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Vl = [
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
], Kl = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Ai = !1, Jh = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = Yh), !Ai) {
      Ai = !0;
      var o = Kl(t);
      Gh(function() {
        var i = !1;
        try {
          i = Kh();
        } finally {
          if (Ai = !1, t = o - Kl(), !Xh())
            return;
          i ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, Zh);
    };
    document.body ? r() : Wr.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Vl.forEach(function(r) {
      return Wr.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Vl.forEach(function(r) {
      return Wr.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Zi = new Jh(), Ul = function(e) {
  !Eo && e > 0 && Zi.start(), Eo += e, !Eo && Zi.stop();
}, Qh = function(e) {
  return !Ma(e) && !Nh(e) && getComputedStyle(e).display === "inline";
}, e0 = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || Jr.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Md(this.target, this.observedBox, !0);
    return Qh(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), t0 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), Co = /* @__PURE__ */ new WeakMap(), ql = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, yo = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var o = new t0(t, r);
    Co.set(t, o);
  }, e.observe = function(t, r, o) {
    var i = Co.get(t), a = i.observationTargets.length === 0;
    ql(i.observationTargets, r) < 0 && (a && Nn.push(i), i.observationTargets.push(new e0(r, o && o.box)), Ul(1), Zi.schedule());
  }, e.unobserve = function(t, r) {
    var o = Co.get(t), i = ql(o.observationTargets, r), a = o.observationTargets.length === 1;
    i >= 0 && (a && Nn.splice(Nn.indexOf(o), 1), o.observationTargets.splice(i, 1), Ul(-1));
  }, e.disconnect = function(t) {
    var r = this, o = Co.get(t);
    o.observationTargets.slice().forEach(function(i) {
      return r.unobserve(t, i.target);
    }), o.activeTargets.splice(0, o.activeTargets.length);
  }, e;
}(), n0 = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    yo.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Nl(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    yo.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Nl(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    yo.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    yo.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class r0 {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || n0)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const Lo = new r0(), xr = ee({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let t = !1;
    const r = oo().proxy;
    function o(i) {
      const { onResize: a } = e;
      a !== void 0 && a(i);
    }
    Ft(() => {
      const i = r.$el;
      if (i === void 0) {
        Dl("resize-observer", "$el does not exist.");
        return;
      }
      if (i.nextElementSibling !== i.nextSibling && i.nodeType === 3 && i.nodeValue !== "") {
        Dl("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      i.nextElementSibling !== null && (Lo.registerHandler(i.nextElementSibling, o), t = !0);
    }), Ct(() => {
      t && Lo.unregisterHandler(r.$el.nextElementSibling);
    });
  },
  render() {
    return jn(this.$slots, "default");
  }
});
let wo;
function o0() {
  return typeof document > "u" ? !1 : (wo === void 0 && ("matchMedia" in window ? wo = window.matchMedia("(pointer:coarse)").matches : wo = !1), wo);
}
let $i;
function Gl() {
  return typeof document > "u" ? 1 : ($i === void 0 && ($i = "chrome" in window ? window.devicePixelRatio : 1), $i);
}
const Ld = "VVirtualListXScroll";
function i0({ columnsRef: e, renderColRef: t, renderItemWithColsRef: r }) {
  const o = _(0), i = _(0), a = P(() => {
    const u = e.value;
    if (u.length === 0)
      return null;
    const c = new zd(u.length, 0);
    return u.forEach((h, p) => {
      c.add(p, h.width);
    }), c;
  }), l = je(() => {
    const u = a.value;
    return u !== null ? Math.max(u.getBound(i.value) - 1, 0) : 0;
  }), s = (u) => {
    const c = a.value;
    return c !== null ? c.sum(u) : 0;
  }, d = je(() => {
    const u = a.value;
    return u !== null ? Math.min(u.getBound(i.value + o.value) + 1, e.value.length - 1) : 0;
  });
  return $e(Ld, {
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
const Xl = ee({
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
      pe(Ld)
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
}), a0 = Bn(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  Bn("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    Bn("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), Ia = ee({
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
    const t = Xn();
    a0.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: Ta,
      ssr: t
    }), Ft(() => {
      const { defaultScrollIndex: n, defaultScrollKey: A } = e;
      n != null ? x({ index: n }) : A != null && x({ key: A });
    });
    let r = !1, o = !1;
    dd(() => {
      if (r = !1, !o) {
        o = !0;
        return;
      }
      x({ top: m.value, left: l.value });
    }), Sa(() => {
      r = !0, o || (o = !0);
    });
    const i = je(() => {
      if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0)
        return;
      let n = 0;
      return e.columns.forEach((A) => {
        n += A.width;
      }), n;
    }), a = P(() => {
      const n = /* @__PURE__ */ new Map(), { keyField: A } = e;
      return e.items.forEach(($, L) => {
        n.set($[A], L);
      }), n;
    }), { scrollLeftRef: l, listWidthRef: s } = i0({
      columnsRef: oe(e, "columns"),
      renderColRef: oe(e, "renderCol"),
      renderItemWithColsRef: oe(e, "renderItemWithCols")
    }), d = _(null), u = _(void 0), c = /* @__PURE__ */ new Map(), h = P(() => {
      const { items: n, itemSize: A, keyField: $ } = e, L = new zd(n.length, A);
      return n.forEach((I, V) => {
        const te = I[$], X = c.get(te);
        X !== void 0 && L.add(V, X);
      }), L;
    }), p = _(0), m = _(0), v = je(() => Math.max(h.value.getBound(m.value - kn(e.paddingTop)) - 1, 0)), g = P(() => {
      const { value: n } = u;
      if (n === void 0)
        return [];
      const { items: A, itemSize: $ } = e, L = v.value, I = Math.min(L + Math.ceil(n / $ + 1), A.length - 1), V = [];
      for (let te = L; te <= I; ++te)
        V.push(A[te]);
      return V;
    }), x = (n, A) => {
      if (typeof n == "number") {
        w(n, A, "auto");
        return;
      }
      const { left: $, top: L, index: I, key: V, position: te, behavior: X, debounce: q = !0 } = n;
      if ($ !== void 0 || L !== void 0)
        w($, L, X);
      else if (I !== void 0)
        B(I, X, q);
      else if (V !== void 0) {
        const H = a.value.get(V);
        H !== void 0 && B(H, X, q);
      } else te === "bottom" ? w(0, Number.MAX_SAFE_INTEGER, X) : te === "top" && w(0, 0, X);
    };
    let b, y = null;
    function B(n, A, $) {
      const { value: L } = h, I = L.sum(n) + kn(e.paddingTop);
      if (!$)
        d.value.scrollTo({
          left: 0,
          top: I,
          behavior: A
        });
      else {
        b = n, y !== null && window.clearTimeout(y), y = window.setTimeout(() => {
          b = void 0, y = null;
        }, 16);
        const { scrollTop: V, offsetHeight: te } = d.value;
        if (I > V) {
          const X = L.get(n);
          I + X <= V + te || d.value.scrollTo({
            left: 0,
            top: I + X - te,
            behavior: A
          });
        } else
          d.value.scrollTo({
            left: 0,
            top: I,
            behavior: A
          });
      }
    }
    function w(n, A, $) {
      d.value.scrollTo({
        left: n,
        top: A,
        behavior: $
      });
    }
    function S(n, A) {
      var $, L, I;
      if (r || e.ignoreItemResize || O(A.target))
        return;
      const { value: V } = h, te = a.value.get(n), X = V.get(te), q = (I = (L = ($ = A.borderBoxSize) === null || $ === void 0 ? void 0 : $[0]) === null || L === void 0 ? void 0 : L.blockSize) !== null && I !== void 0 ? I : A.contentRect.height;
      if (q === X)
        return;
      q - e.itemSize === 0 ? c.delete(n) : c.set(n, q - e.itemSize);
      const G = q - X;
      if (G === 0)
        return;
      V.add(te, G);
      const Y = d.value;
      if (Y != null) {
        if (b === void 0) {
          const ie = V.sum(te);
          Y.scrollTop > ie && Y.scrollBy(0, G);
        } else if (te < b)
          Y.scrollBy(0, G);
        else if (te === b) {
          const ie = V.sum(te);
          q + ie > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          Y.scrollTop + Y.offsetHeight && Y.scrollBy(0, G);
        }
        K();
      }
      p.value++;
    }
    const F = !o0();
    let C = !1;
    function z(n) {
      var A;
      (A = e.onScroll) === null || A === void 0 || A.call(e, n), (!F || !C) && K();
    }
    function E(n) {
      var A;
      if ((A = e.onWheel) === null || A === void 0 || A.call(e, n), F) {
        const $ = d.value;
        if ($ != null) {
          if (n.deltaX === 0 && ($.scrollTop === 0 && n.deltaY <= 0 || $.scrollTop + $.offsetHeight >= $.scrollHeight && n.deltaY >= 0))
            return;
          n.preventDefault(), $.scrollTop += n.deltaY / Gl(), $.scrollLeft += n.deltaX / Gl(), K(), C = !0, Mo(() => {
            C = !1;
          });
        }
      }
    }
    function D(n) {
      if (r || O(n.target))
        return;
      if (e.renderCol == null && e.renderItemWithCols == null) {
        if (n.contentRect.height === u.value)
          return;
      } else if (n.contentRect.height === u.value && n.contentRect.width === s.value)
        return;
      u.value = n.contentRect.height, s.value = n.contentRect.width;
      const { onResize: A } = e;
      A !== void 0 && A(n);
    }
    function K() {
      const { value: n } = d;
      n != null && (m.value = n.scrollTop, l.value = n.scrollLeft);
    }
    function O(n) {
      let A = n;
      for (; A !== null; ) {
        if (A.style.display === "none")
          return !0;
        A = A.parentElement;
      }
      return !1;
    }
    return {
      listHeight: u,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: a,
      itemsStyle: P(() => {
        const { itemResizable: n } = e, A = yt(h.value.sum());
        return p.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: yt(i.value),
            height: n ? "" : A,
            minHeight: n ? A : "",
            paddingTop: yt(e.paddingTop),
            paddingBottom: yt(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: P(() => (p.value, {
        transform: `translateY(${yt(h.value.sum(v.value))})`
      })),
      viewportItems: g,
      listElRef: d,
      itemsElRef: _(null),
      scrollTo: x,
      handleListResize: D,
      handleListScroll: z,
      handleListWheel: E,
      handleItemResize: S
    };
  },
  render() {
    const { itemResizable: e, keyField: t, keyToIndex: r, visibleItemsTag: o } = this;
    return f(xr, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var i, a;
        return f("div", Yt(this.$attrs, {
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
                  const u = d[t], c = r.get(u), h = l != null ? f(Xl, {
                    index: c,
                    item: d
                  }) : void 0, p = s != null ? f(Xl, {
                    index: c,
                    item: d
                  }) : void 0, m = this.$slots.default({
                    item: d,
                    renderedCols: h,
                    renderedItemWithCols: p,
                    index: c
                  })[0];
                  return e ? f(xr, {
                    key: u,
                    onResize: (v) => this.handleItemResize(u, v)
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
}), hn = "v-hidden", l0 = Bn("[v-hidden]", {
  display: "none!important"
}), Yl = ee({
  name: "Overflow",
  props: {
    getCounter: Function,
    getTail: Function,
    updateCounter: Function,
    onUpdateCount: Function,
    onUpdateOverflow: Function
  },
  setup(e, { slots: t }) {
    const r = _(null), o = _(null);
    function i(l) {
      const { value: s } = r, { getCounter: d, getTail: u } = e;
      let c;
      if (d !== void 0 ? c = d() : c = o.value, !s || !c)
        return;
      c.hasAttribute(hn) && c.removeAttribute(hn);
      const { children: h } = s;
      if (l.showAllItemsBeforeCalculate)
        for (const B of h)
          B.hasAttribute(hn) && B.removeAttribute(hn);
      const p = s.offsetWidth, m = [], v = t.tail ? u == null ? void 0 : u() : null;
      let g = v ? v.offsetWidth : 0, x = !1;
      const b = s.children.length - (t.tail ? 1 : 0);
      for (let B = 0; B < b - 1; ++B) {
        if (B < 0)
          continue;
        const w = h[B];
        if (x) {
          w.hasAttribute(hn) || w.setAttribute(hn, "");
          continue;
        } else w.hasAttribute(hn) && w.removeAttribute(hn);
        const S = w.offsetWidth;
        if (g += S, m[B] = S, g > p) {
          const { updateCounter: F } = e;
          for (let C = B; C >= 0; --C) {
            const z = b - 1 - C;
            F !== void 0 ? F(z) : c.textContent = `${z}`;
            const E = c.offsetWidth;
            if (g -= m[C], g + E <= p || C === 0) {
              x = !0, B = C - 1, v && (B === -1 ? (v.style.maxWidth = `${p - E}px`, v.style.boxSizing = "border-box") : v.style.maxWidth = "");
              const { onUpdateCount: D } = e;
              D && D(z);
              break;
            }
          }
        }
      }
      const { onUpdateOverflow: y } = e;
      x ? y !== void 0 && y(!0) : (y !== void 0 && y(!1), c.setAttribute(hn, ""));
    }
    const a = Xn();
    return l0.mount({
      id: "vueuc/overflow",
      head: !0,
      anchorMetaName: Ta,
      ssr: a
    }), Ft(() => i({
      showAllItemsBeforeCalculate: !1
    })), {
      selfRef: r,
      counterRef: o,
      sync: i
    };
  },
  render() {
    const { $slots: e } = this;
    return mt(() => this.sync({
      showAllItemsBeforeCalculate: !1
    })), f("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      jn(e, "default"),
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
function Nd(e) {
  return e instanceof HTMLElement;
}
function Hd(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const r = e.childNodes[t];
    if (Nd(r) && (Wd(r) || Hd(r)))
      return !0;
  }
  return !1;
}
function jd(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const r = e.childNodes[t];
    if (Nd(r) && (Wd(r) || jd(r)))
      return !0;
  }
  return !1;
}
function Wd(e) {
  if (!s0(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function s0(e) {
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
let Or = [];
const Vd = ee({
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
    const t = sn(), r = _(null), o = _(null);
    let i = !1, a = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function s() {
      return Or[Or.length - 1] === t;
    }
    function d(x) {
      var b;
      x.code === "Escape" && s() && ((b = e.onEsc) === null || b === void 0 || b.call(e, x));
    }
    Ft(() => {
      Le(() => e.active, (x) => {
        x ? (h(), et("keydown", document, d)) : (He("keydown", document, d), i && p());
      }, {
        immediate: !0
      });
    }), Ct(() => {
      He("keydown", document, d), i && p();
    });
    function u(x) {
      if (!a && s()) {
        const b = c();
        if (b === null || b.contains(mr(x)))
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
    function h() {
      var x;
      if (!e.disabled) {
        if (Or.push(t), e.autoFocus) {
          const { initialFocusTo: b } = e;
          b === void 0 ? m("first") : (x = Ol(b)) === null || x === void 0 || x.focus({ preventScroll: !0 });
        }
        i = !0, document.addEventListener("focus", u, !0);
      }
    }
    function p() {
      var x;
      if (e.disabled || (document.removeEventListener("focus", u, !0), Or = Or.filter((y) => y !== t), s()))
        return;
      const { finalFocusTo: b } = e;
      b !== void 0 ? (x = Ol(b)) === null || x === void 0 || x.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (a = !0, l.focus({ preventScroll: !0 }), a = !1);
    }
    function m(x) {
      if (s() && e.active) {
        const b = r.value, y = o.value;
        if (b !== null && y !== null) {
          const B = c();
          if (B == null || B === y) {
            a = !0, b.focus({ preventScroll: !0 }), a = !1;
            return;
          }
          a = !0;
          const w = x === "first" ? Hd(B) : jd(B);
          a = !1, w || (a = !0, b.focus({ preventScroll: !0 }), a = !1);
        }
      }
    }
    function v(x) {
      if (a)
        return;
      const b = c();
      b !== null && (x.relatedTarget !== null && b.contains(x.relatedTarget) ? m("last") : m("first"));
    }
    function g(x) {
      a || (x.relatedTarget !== null && x.relatedTarget === r.value ? m("last") : m("first"));
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
    const { active: t, focusableStyle: r } = this;
    return f(ht, null, [
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
function Kd(e, t) {
  t && (Ft(() => {
    const {
      value: r
    } = e;
    r && Lo.registerHandler(r, t);
  }), Ct(() => {
    const {
      value: r
    } = e;
    r && Lo.unregisterHandler(r);
  }));
}
function No(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const d0 = /^(\d|\.)+$/, Zl = /(\d|\.)+/;
function vt(e, {
  c: t = 1,
  offset: r = 0,
  attachPx: o = !0
} = {}) {
  if (typeof e == "number") {
    const i = (e + r) * t;
    return i === 0 ? "0" : `${i}px`;
  } else if (typeof e == "string")
    if (d0.test(e)) {
      const i = (Number(e) + r) * t;
      return o ? i === 0 ? "0" : `${i}px` : `${i}`;
    } else {
      const i = Zl.exec(e);
      return i ? e.replace(Zl, String((Number(i[0]) + r) * t)) : e;
    }
  return e;
}
function Jl(e) {
  const {
    left: t,
    right: r,
    top: o,
    bottom: i
  } = Xt(e);
  return `${o} ${r} ${i} ${t}`;
}
function u0(e, t) {
  if (!e) return;
  const r = document.createElement("a");
  r.href = e, t !== void 0 && (r.download = t), document.body.appendChild(r), r.click(), document.body.removeChild(r);
}
let zi;
function c0() {
  return zi === void 0 && (zi = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), zi;
}
const Ud = /* @__PURE__ */ new WeakSet();
function f0(e) {
  Ud.add(e);
}
function h0(e) {
  return !Ud.has(e);
}
function Ql(e) {
  switch (typeof e) {
    case "string":
      return e || void 0;
    case "number":
      return String(e);
    default:
      return;
  }
}
function es(e) {
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
const ts = /* @__PURE__ */ new Set();
function it(e, t) {
  const r = `[naive/${e}]: ${t}`;
  ts.has(r) || (ts.add(r), console.error(r));
}
function kt(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function $n(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function ne(e, ...t) {
  if (Array.isArray(e))
    e.forEach((r) => ne(r, ...t));
  else
    return e(...t);
}
function qd(e) {
  return (t) => {
    t ? e.value = t.$el : e.value = null;
  };
}
function Ho(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(an(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        Ho(o, t, r);
        return;
      }
      if (o.type === ht) {
        if (o.children === null) return;
        Array.isArray(o.children) && Ho(o.children, t, r);
      } else {
        if (o.type === Ba && t) return;
        r.push(o);
      }
    }
  }), r;
}
function Ji(e, t = "default", r = void 0) {
  const o = e[t];
  if (!o)
    return kt("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const i = Ho(o(r));
  return i.length === 1 ? i[0] : (kt("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function v0(e, t = "default", r = []) {
  const i = e.$slots[t];
  return i === void 0 ? r : i();
}
function gn(e, t = [], r) {
  const o = {};
  return t.forEach((i) => {
    o[i] = e[i];
  }), Object.assign(o, r);
}
function Rn(e) {
  return Object.keys(e);
}
function Vr(e) {
  const t = e.filter((r) => r !== void 0);
  if (t.length !== 0)
    return t.length === 1 ? t[0] : (r) => {
      e.forEach((o) => {
        o && o(r);
      });
    };
}
function Yn(e, t = [], r) {
  const o = {};
  return Object.getOwnPropertyNames(e).forEach((a) => {
    t.includes(a) || (o[a] = e[a]);
  }), Object.assign(o, r);
}
function dt(e, ...t) {
  return typeof e == "function" ? e(...t) : typeof e == "string" ? an(e) : typeof e == "number" ? an(String(e)) : null;
}
function Vt(e) {
  return e.some((t) => hf(t) ? !(t.type === Ba || t.type === ht && !Vt(t.children)) : !0) ? e : null;
}
function Lt(e, t) {
  return e && Vt(e()) || t();
}
function Qi(e, t, r) {
  return e && Vt(e(t)) || r(t);
}
function tt(e, t) {
  const r = e && Vt(e());
  return t(r || null);
}
function p0(e, t, r) {
  const o = e && Vt(e(t));
  return r(o || null);
}
function ea(e) {
  return !(e && Vt(e()));
}
const ta = ee({
  render() {
    var e, t;
    return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
}), Zt = "n-config-provider", jo = "n";
function ze(e = {}, t = {
  defaultBordered: !0
}) {
  const r = pe(Zt, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: r == null ? void 0 : r.inlineThemeDisabled,
    mergedRtlRef: r == null ? void 0 : r.mergedRtlRef,
    mergedComponentPropsRef: r == null ? void 0 : r.mergedComponentPropsRef,
    mergedBreakpointsRef: r == null ? void 0 : r.mergedBreakpointsRef,
    mergedBorderedRef: P(() => {
      var o, i;
      const {
        bordered: a
      } = e;
      return a !== void 0 ? a : (i = (o = r == null ? void 0 : r.mergedBorderedRef.value) !== null && o !== void 0 ? o : t.defaultBordered) !== null && i !== void 0 ? i : !0;
    }),
    mergedClsPrefixRef: r ? r.mergedClsPrefixRef : ud(jo),
    namespaceRef: P(() => r == null ? void 0 : r.mergedNamespaceRef.value)
  };
}
function Gd() {
  const e = pe(Zt, null);
  return e ? e.mergedClsPrefixRef : ud(jo);
}
function Ue(e, t, r, o) {
  r || $n("useThemeClass", "cssVarsRef is not passed");
  const i = pe(Zt, null), a = i == null ? void 0 : i.mergedThemeHashRef, l = i == null ? void 0 : i.styleMountTarget, s = _(""), d = Xn();
  let u;
  const c = `__${e}`, h = () => {
    let p = c;
    const m = t ? t.value : void 0, v = a == null ? void 0 : a.value;
    v && (p += `-${v}`), m && (p += `-${m}`);
    const {
      themeOverrides: g,
      builtinThemeOverrides: x
    } = o;
    g && (p += `-${Xr(JSON.stringify(g))}`), x && (p += `-${Xr(JSON.stringify(x))}`), s.value = p, u = () => {
      const b = r.value;
      let y = "";
      for (const B in b)
        y += `${B}: ${b[B]};`;
      T(`.${p}`, y).mount({
        id: p,
        ssr: d,
        parent: l
      }), u = void 0;
    };
  };
  return Qe(() => {
    h();
  }), {
    themeClass: s,
    onRender: () => {
      u == null || u();
    }
  };
}
const na = "n-form-item";
function Zn(e, {
  defaultSize: t = "medium",
  mergedSize: r,
  mergedDisabled: o
} = {}) {
  const i = pe(na, null);
  $e(na, null);
  const a = P(r ? () => r(i) : () => {
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
  }), l = P(o ? () => o(i) : () => {
    const {
      disabled: d
    } = e;
    return d !== void 0 ? d : i ? i.disabled.value : !1;
  }), s = P(() => {
    const {
      status: d
    } = e;
    return d || (i == null ? void 0 : i.mergedValidationStatus.value);
  });
  return Ct(() => {
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
const g0 = {
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
}, m0 = {
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
function fr(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
function nn(e) {
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
function rn(e) {
  return (t, r = {}) => {
    const o = r.width, i = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const l = a[0], s = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(s) ? b0(s, (h) => h.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      x0(s, (h) => h.test(l))
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
function x0(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function b0(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function Xd(e) {
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
function C0(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
let y0 = {};
function w0() {
  return y0;
}
function ns(e, t) {
  var s, d, u, c;
  const r = w0(), o = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : d.weekStartsOn) ?? r.weekStartsOn ?? ((c = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = C0(e), a = i.getDay(), l = (a < o ? 7 : 0) + a - o;
  return i.setDate(i.getDate() - l), i.setHours(0, 0, 0, 0), i;
}
function S0(e, t, r) {
  const o = ns(e, r), i = ns(t, r);
  return +o == +i;
}
const B0 = {
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
}, k0 = (e, t, r) => {
  let o;
  const i = B0[e];
  return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
}, F0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, R0 = (e, t, r, o) => F0[e], P0 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, A0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, $0 = {
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
}, z0 = {
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
}, E0 = {
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
}, D0 = {
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
}, T0 = (e, t) => {
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
}, O0 = {
  ordinalNumber: T0,
  era: nn({
    values: P0,
    defaultWidth: "wide"
  }),
  quarter: nn({
    values: A0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: nn({
    values: $0,
    defaultWidth: "wide"
  }),
  day: nn({
    values: z0,
    defaultWidth: "wide"
  }),
  dayPeriod: nn({
    values: E0,
    defaultWidth: "wide",
    formattingValues: D0,
    defaultFormattingWidth: "wide"
  })
}, M0 = /^(\d+)(th|st|nd|rd)?/i, I0 = /\d+/i, _0 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, L0 = {
  any: [/^b/i, /^(a|c)/i]
}, N0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, H0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, j0 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, W0 = {
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
}, V0 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, K0 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, U0 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, q0 = {
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
}, G0 = {
  ordinalNumber: Xd({
    matchPattern: M0,
    parsePattern: I0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: rn({
    matchPatterns: _0,
    defaultMatchWidth: "wide",
    parsePatterns: L0,
    defaultParseWidth: "any"
  }),
  quarter: rn({
    matchPatterns: N0,
    defaultMatchWidth: "wide",
    parsePatterns: H0,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: rn({
    matchPatterns: j0,
    defaultMatchWidth: "wide",
    parsePatterns: W0,
    defaultParseWidth: "any"
  }),
  day: rn({
    matchPatterns: V0,
    defaultMatchWidth: "wide",
    parsePatterns: K0,
    defaultParseWidth: "any"
  }),
  dayPeriod: rn({
    matchPatterns: U0,
    defaultMatchWidth: "any",
    parsePatterns: q0,
    defaultParseWidth: "any"
  })
}, X0 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Y0 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Z0 = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, J0 = {
  date: fr({
    formats: X0,
    defaultWidth: "full"
  }),
  time: fr({
    formats: Y0,
    defaultWidth: "full"
  }),
  dateTime: fr({
    formats: Z0,
    defaultWidth: "full"
  })
}, Q0 = {
  code: "en-US",
  formatDistance: k0,
  formatLong: J0,
  formatRelative: R0,
  localize: O0,
  match: G0,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, ev = {
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
}, tv = (e, t, r) => {
  let o;
  const i = ev[e];
  return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", String(t)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? o + "内" : o + "前" : o;
}, nv = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, rv = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, ov = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, iv = {
  date: fr({
    formats: nv,
    defaultWidth: "full"
  }),
  time: fr({
    formats: rv,
    defaultWidth: "full"
  }),
  dateTime: fr({
    formats: ov,
    defaultWidth: "full"
  })
};
function rs(e, t, r) {
  const o = "eeee p";
  return S0(e, t, r) ? o : e.getTime() > t.getTime() ? "'下个'" + o : "'上个'" + o;
}
const av = {
  lastWeek: rs,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: rs,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, lv = (e, t, r, o) => {
  const i = av[e];
  return typeof i == "function" ? i(t, r, o) : i;
}, sv = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, dv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, uv = {
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
}, cv = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, fv = {
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
}, hv = {
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
}, vv = (e, t) => {
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
}, pv = {
  ordinalNumber: vv,
  era: nn({
    values: sv,
    defaultWidth: "wide"
  }),
  quarter: nn({
    values: dv,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: nn({
    values: uv,
    defaultWidth: "wide"
  }),
  day: nn({
    values: cv,
    defaultWidth: "wide"
  }),
  dayPeriod: nn({
    values: fv,
    defaultWidth: "wide",
    formattingValues: hv,
    defaultFormattingWidth: "wide"
  })
}, gv = /^(第\s*)?\d+(日|时|分|秒)?/i, mv = /\d+/i, xv = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, bv = {
  any: [/^(前)/i, /^(公元)/i]
}, Cv = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, yv = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, wv = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, Sv = {
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
}, Bv = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, kv = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, Fv = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, Rv = {
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
}, Pv = {
  ordinalNumber: Xd({
    matchPattern: gv,
    parsePattern: mv,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: rn({
    matchPatterns: xv,
    defaultMatchWidth: "wide",
    parsePatterns: bv,
    defaultParseWidth: "any"
  }),
  quarter: rn({
    matchPatterns: Cv,
    defaultMatchWidth: "wide",
    parsePatterns: yv,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: rn({
    matchPatterns: wv,
    defaultMatchWidth: "wide",
    parsePatterns: Sv,
    defaultParseWidth: "any"
  }),
  day: rn({
    matchPatterns: Bv,
    defaultMatchWidth: "wide",
    parsePatterns: kv,
    defaultParseWidth: "any"
  }),
  dayPeriod: rn({
    matchPatterns: Fv,
    defaultMatchWidth: "any",
    parsePatterns: Rv,
    defaultParseWidth: "any"
  })
}, Av = {
  code: "zh-CN",
  formatDistance: tv,
  formatLong: iv,
  formatRelative: lv,
  localize: pv,
  match: Pv,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, $v = {
  name: "en-US",
  locale: Q0
}, zv = {
  name: "zh-CN",
  locale: Av
};
var Yd = typeof global == "object" && global && global.Object === Object && global, Ev = typeof self == "object" && self && self.Object === Object && self, un = Yd || Ev || Function("return this")(), Pn = un.Symbol, Zd = Object.prototype, Dv = Zd.hasOwnProperty, Tv = Zd.toString, Mr = Pn ? Pn.toStringTag : void 0;
function Ov(e) {
  var t = Dv.call(e, Mr), r = e[Mr];
  try {
    e[Mr] = void 0;
    var o = !0;
  } catch {
  }
  var i = Tv.call(e);
  return o && (t ? e[Mr] = r : delete e[Mr]), i;
}
var Mv = Object.prototype, Iv = Mv.toString;
function _v(e) {
  return Iv.call(e);
}
var Lv = "[object Null]", Nv = "[object Undefined]", os = Pn ? Pn.toStringTag : void 0;
function Jn(e) {
  return e == null ? e === void 0 ? Nv : Lv : os && os in Object(e) ? Ov(e) : _v(e);
}
function An(e) {
  return e != null && typeof e == "object";
}
var Hv = "[object Symbol]";
function _a(e) {
  return typeof e == "symbol" || An(e) && Jn(e) == Hv;
}
function Jd(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, i = Array(o); ++r < o; )
    i[r] = t(e[r], r, e);
  return i;
}
var Kt = Array.isArray, jv = 1 / 0, is = Pn ? Pn.prototype : void 0, as = is ? is.toString : void 0;
function Qd(e) {
  if (typeof e == "string")
    return e;
  if (Kt(e))
    return Jd(e, Qd) + "";
  if (_a(e))
    return as ? as.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -jv ? "-0" : t;
}
function zn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function La(e) {
  return e;
}
var Wv = "[object AsyncFunction]", Vv = "[object Function]", Kv = "[object GeneratorFunction]", Uv = "[object Proxy]";
function Na(e) {
  if (!zn(e))
    return !1;
  var t = Jn(e);
  return t == Vv || t == Kv || t == Wv || t == Uv;
}
var Ei = un["__core-js_shared__"], ls = function() {
  var e = /[^.]+$/.exec(Ei && Ei.keys && Ei.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function qv(e) {
  return !!ls && ls in e;
}
var Gv = Function.prototype, Xv = Gv.toString;
function Qn(e) {
  if (e != null) {
    try {
      return Xv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Yv = /[\\^$.*+?()[\]{}|]/g, Zv = /^\[object .+?Constructor\]$/, Jv = Function.prototype, Qv = Object.prototype, ep = Jv.toString, tp = Qv.hasOwnProperty, np = RegExp(
  "^" + ep.call(tp).replace(Yv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function rp(e) {
  if (!zn(e) || qv(e))
    return !1;
  var t = Na(e) ? np : Zv;
  return t.test(Qn(e));
}
function op(e, t) {
  return e == null ? void 0 : e[t];
}
function er(e, t) {
  var r = op(e, t);
  return rp(r) ? r : void 0;
}
var ra = er(un, "WeakMap"), ss = Object.create, ip = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!zn(t))
      return {};
    if (ss)
      return ss(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function ap(e, t, r) {
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
function lp(e, t) {
  var r = -1, o = e.length;
  for (t || (t = Array(o)); ++r < o; )
    t[r] = e[r];
  return t;
}
var sp = 800, dp = 16, up = Date.now;
function cp(e) {
  var t = 0, r = 0;
  return function() {
    var o = up(), i = dp - (o - r);
    if (r = o, i > 0) {
      if (++t >= sp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function fp(e) {
  return function() {
    return e;
  };
}
var Wo = function() {
  try {
    var e = er(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), hp = Wo ? function(e, t) {
  return Wo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: fp(t),
    writable: !0
  });
} : La, vp = cp(hp), pp = 9007199254740991, gp = /^(?:0|[1-9]\d*)$/;
function Ha(e, t) {
  var r = typeof e;
  return t = t ?? pp, !!t && (r == "number" || r != "symbol" && gp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function ja(e, t, r) {
  t == "__proto__" && Wo ? Wo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function lo(e, t) {
  return e === t || e !== e && t !== t;
}
var mp = Object.prototype, xp = mp.hasOwnProperty;
function bp(e, t, r) {
  var o = e[t];
  (!(xp.call(e, t) && lo(o, r)) || r === void 0 && !(t in e)) && ja(e, t, r);
}
function Cp(e, t, r, o) {
  var i = !r;
  r || (r = {});
  for (var a = -1, l = t.length; ++a < l; ) {
    var s = t[a], d = void 0;
    d === void 0 && (d = e[s]), i ? ja(r, s, d) : bp(r, s, d);
  }
  return r;
}
var ds = Math.max;
function yp(e, t, r) {
  return t = ds(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, i = -1, a = ds(o.length - t, 0), l = Array(a); ++i < a; )
      l[i] = o[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = o[i];
    return s[t] = r(l), ap(e, this, s);
  };
}
function wp(e, t) {
  return vp(yp(e, t, La), e + "");
}
var Sp = 9007199254740991;
function Wa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Sp;
}
function Fr(e) {
  return e != null && Wa(e.length) && !Na(e);
}
function Bp(e, t, r) {
  if (!zn(r))
    return !1;
  var o = typeof t;
  return (o == "number" ? Fr(r) && Ha(t, r.length) : o == "string" && t in r) ? lo(r[t], e) : !1;
}
function kp(e) {
  return wp(function(t, r) {
    var o = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, l = i > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, l && Bp(r[0], r[1], l) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++o < i; ) {
      var s = r[o];
      s && e(t, s, o, a);
    }
    return t;
  });
}
var Fp = Object.prototype;
function Va(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Fp;
  return e === r;
}
function Rp(e, t) {
  for (var r = -1, o = Array(e); ++r < e; )
    o[r] = t(r);
  return o;
}
var Pp = "[object Arguments]";
function us(e) {
  return An(e) && Jn(e) == Pp;
}
var eu = Object.prototype, Ap = eu.hasOwnProperty, $p = eu.propertyIsEnumerable, Vo = us(/* @__PURE__ */ function() {
  return arguments;
}()) ? us : function(e) {
  return An(e) && Ap.call(e, "callee") && !$p.call(e, "callee");
};
function zp() {
  return !1;
}
var tu = typeof exports == "object" && exports && !exports.nodeType && exports, cs = tu && typeof module == "object" && module && !module.nodeType && module, Ep = cs && cs.exports === tu, fs = Ep ? un.Buffer : void 0, Dp = fs ? fs.isBuffer : void 0, Ko = Dp || zp, Tp = "[object Arguments]", Op = "[object Array]", Mp = "[object Boolean]", Ip = "[object Date]", _p = "[object Error]", Lp = "[object Function]", Np = "[object Map]", Hp = "[object Number]", jp = "[object Object]", Wp = "[object RegExp]", Vp = "[object Set]", Kp = "[object String]", Up = "[object WeakMap]", qp = "[object ArrayBuffer]", Gp = "[object DataView]", Xp = "[object Float32Array]", Yp = "[object Float64Array]", Zp = "[object Int8Array]", Jp = "[object Int16Array]", Qp = "[object Int32Array]", eg = "[object Uint8Array]", tg = "[object Uint8ClampedArray]", ng = "[object Uint16Array]", rg = "[object Uint32Array]", ot = {};
ot[Xp] = ot[Yp] = ot[Zp] = ot[Jp] = ot[Qp] = ot[eg] = ot[tg] = ot[ng] = ot[rg] = !0;
ot[Tp] = ot[Op] = ot[qp] = ot[Mp] = ot[Gp] = ot[Ip] = ot[_p] = ot[Lp] = ot[Np] = ot[Hp] = ot[jp] = ot[Wp] = ot[Vp] = ot[Kp] = ot[Up] = !1;
function og(e) {
  return An(e) && Wa(e.length) && !!ot[Jn(e)];
}
function ig(e) {
  return function(t) {
    return e(t);
  };
}
var nu = typeof exports == "object" && exports && !exports.nodeType && exports, Kr = nu && typeof module == "object" && module && !module.nodeType && module, ag = Kr && Kr.exports === nu, Di = ag && Yd.process, hs = function() {
  try {
    var e = Kr && Kr.require && Kr.require("util").types;
    return e || Di && Di.binding && Di.binding("util");
  } catch {
  }
}(), vs = hs && hs.isTypedArray, Ka = vs ? ig(vs) : og, lg = Object.prototype, sg = lg.hasOwnProperty;
function ru(e, t) {
  var r = Kt(e), o = !r && Vo(e), i = !r && !o && Ko(e), a = !r && !o && !i && Ka(e), l = r || o || i || a, s = l ? Rp(e.length, String) : [], d = s.length;
  for (var u in e)
    (t || sg.call(e, u)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Ha(u, d))) && s.push(u);
  return s;
}
function ou(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var dg = ou(Object.keys, Object), ug = Object.prototype, cg = ug.hasOwnProperty;
function fg(e) {
  if (!Va(e))
    return dg(e);
  var t = [];
  for (var r in Object(e))
    cg.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function Ua(e) {
  return Fr(e) ? ru(e) : fg(e);
}
function hg(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var vg = Object.prototype, pg = vg.hasOwnProperty;
function gg(e) {
  if (!zn(e))
    return hg(e);
  var t = Va(e), r = [];
  for (var o in e)
    o == "constructor" && (t || !pg.call(e, o)) || r.push(o);
  return r;
}
function iu(e) {
  return Fr(e) ? ru(e, !0) : gg(e);
}
var mg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, xg = /^\w*$/;
function qa(e, t) {
  if (Kt(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || _a(e) ? !0 : xg.test(e) || !mg.test(e) || t != null && e in Object(t);
}
var Qr = er(Object, "create");
function bg() {
  this.__data__ = Qr ? Qr(null) : {}, this.size = 0;
}
function Cg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var yg = "__lodash_hash_undefined__", wg = Object.prototype, Sg = wg.hasOwnProperty;
function Bg(e) {
  var t = this.__data__;
  if (Qr) {
    var r = t[e];
    return r === yg ? void 0 : r;
  }
  return Sg.call(t, e) ? t[e] : void 0;
}
var kg = Object.prototype, Fg = kg.hasOwnProperty;
function Rg(e) {
  var t = this.__data__;
  return Qr ? t[e] !== void 0 : Fg.call(t, e);
}
var Pg = "__lodash_hash_undefined__";
function Ag(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Qr && t === void 0 ? Pg : t, this;
}
function Vn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Vn.prototype.clear = bg;
Vn.prototype.delete = Cg;
Vn.prototype.get = Bg;
Vn.prototype.has = Rg;
Vn.prototype.set = Ag;
function $g() {
  this.__data__ = [], this.size = 0;
}
function ri(e, t) {
  for (var r = e.length; r--; )
    if (lo(e[r][0], t))
      return r;
  return -1;
}
var zg = Array.prototype, Eg = zg.splice;
function Dg(e) {
  var t = this.__data__, r = ri(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : Eg.call(t, r, 1), --this.size, !0;
}
function Tg(e) {
  var t = this.__data__, r = ri(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Og(e) {
  return ri(this.__data__, e) > -1;
}
function Mg(e, t) {
  var r = this.__data__, o = ri(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function mn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
mn.prototype.clear = $g;
mn.prototype.delete = Dg;
mn.prototype.get = Tg;
mn.prototype.has = Og;
mn.prototype.set = Mg;
var eo = er(un, "Map");
function Ig() {
  this.size = 0, this.__data__ = {
    hash: new Vn(),
    map: new (eo || mn)(),
    string: new Vn()
  };
}
function _g(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function oi(e, t) {
  var r = e.__data__;
  return _g(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function Lg(e) {
  var t = oi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Ng(e) {
  return oi(this, e).get(e);
}
function Hg(e) {
  return oi(this, e).has(e);
}
function jg(e, t) {
  var r = oi(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function xn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
xn.prototype.clear = Ig;
xn.prototype.delete = Lg;
xn.prototype.get = Ng;
xn.prototype.has = Hg;
xn.prototype.set = jg;
var Wg = "Expected a function";
function Ga(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Wg);
  var r = function() {
    var o = arguments, i = t ? t.apply(this, o) : o[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var l = e.apply(this, o);
    return r.cache = a.set(i, l) || a, l;
  };
  return r.cache = new (Ga.Cache || xn)(), r;
}
Ga.Cache = xn;
var Vg = 500;
function Kg(e) {
  var t = Ga(e, function(o) {
    return r.size === Vg && r.clear(), o;
  }), r = t.cache;
  return t;
}
var Ug = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, qg = /\\(\\)?/g, Gg = Kg(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Ug, function(r, o, i, a) {
    t.push(i ? a.replace(qg, "$1") : o || r);
  }), t;
});
function au(e) {
  return e == null ? "" : Qd(e);
}
function lu(e, t) {
  return Kt(e) ? e : qa(e, t) ? [e] : Gg(au(e));
}
var Xg = 1 / 0;
function ii(e) {
  if (typeof e == "string" || _a(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Xg ? "-0" : t;
}
function su(e, t) {
  t = lu(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[ii(t[r++])];
  return r && r == o ? e : void 0;
}
function to(e, t, r) {
  var o = e == null ? void 0 : su(e, t);
  return o === void 0 ? r : o;
}
function Yg(e, t) {
  for (var r = -1, o = t.length, i = e.length; ++r < o; )
    e[i + r] = t[r];
  return e;
}
var du = ou(Object.getPrototypeOf, Object), Zg = "[object Object]", Jg = Function.prototype, Qg = Object.prototype, uu = Jg.toString, em = Qg.hasOwnProperty, tm = uu.call(Object);
function nm(e) {
  if (!An(e) || Jn(e) != Zg)
    return !1;
  var t = du(e);
  if (t === null)
    return !0;
  var r = em.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && uu.call(r) == tm;
}
function rm(e, t, r) {
  var o = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++o < i; )
    a[o] = e[o + t];
  return a;
}
function om(e, t, r) {
  var o = e.length;
  return r = r === void 0 ? o : r, !t && r >= o ? e : rm(e, t, r);
}
var im = "\\ud800-\\udfff", am = "\\u0300-\\u036f", lm = "\\ufe20-\\ufe2f", sm = "\\u20d0-\\u20ff", dm = am + lm + sm, um = "\\ufe0e\\ufe0f", cm = "\\u200d", fm = RegExp("[" + cm + im + dm + um + "]");
function cu(e) {
  return fm.test(e);
}
function hm(e) {
  return e.split("");
}
var fu = "\\ud800-\\udfff", vm = "\\u0300-\\u036f", pm = "\\ufe20-\\ufe2f", gm = "\\u20d0-\\u20ff", mm = vm + pm + gm, xm = "\\ufe0e\\ufe0f", bm = "[" + fu + "]", oa = "[" + mm + "]", ia = "\\ud83c[\\udffb-\\udfff]", Cm = "(?:" + oa + "|" + ia + ")", hu = "[^" + fu + "]", vu = "(?:\\ud83c[\\udde6-\\uddff]){2}", pu = "[\\ud800-\\udbff][\\udc00-\\udfff]", ym = "\\u200d", gu = Cm + "?", mu = "[" + xm + "]?", wm = "(?:" + ym + "(?:" + [hu, vu, pu].join("|") + ")" + mu + gu + ")*", Sm = mu + gu + wm, Bm = "(?:" + [hu + oa + "?", oa, vu, pu, bm].join("|") + ")", km = RegExp(ia + "(?=" + ia + ")|" + Bm + Sm, "g");
function Fm(e) {
  return e.match(km) || [];
}
function Rm(e) {
  return cu(e) ? Fm(e) : hm(e);
}
function Pm(e) {
  return function(t) {
    t = au(t);
    var r = cu(t) ? Rm(t) : void 0, o = r ? r[0] : t.charAt(0), i = r ? om(r, 1).join("") : t.slice(1);
    return o[e]() + i;
  };
}
var Am = Pm("toUpperCase");
function $m() {
  this.__data__ = new mn(), this.size = 0;
}
function zm(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Em(e) {
  return this.__data__.get(e);
}
function Dm(e) {
  return this.__data__.has(e);
}
var Tm = 200;
function Om(e, t) {
  var r = this.__data__;
  if (r instanceof mn) {
    var o = r.__data__;
    if (!eo || o.length < Tm - 1)
      return o.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new xn(o);
  }
  return r.set(e, t), this.size = r.size, this;
}
function on(e) {
  var t = this.__data__ = new mn(e);
  this.size = t.size;
}
on.prototype.clear = $m;
on.prototype.delete = zm;
on.prototype.get = Em;
on.prototype.has = Dm;
on.prototype.set = Om;
var xu = typeof exports == "object" && exports && !exports.nodeType && exports, ps = xu && typeof module == "object" && module && !module.nodeType && module, Mm = ps && ps.exports === xu, gs = Mm ? un.Buffer : void 0;
gs && gs.allocUnsafe;
function Im(e, t) {
  return e.slice();
}
function _m(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, i = 0, a = []; ++r < o; ) {
    var l = e[r];
    t(l, r, e) && (a[i++] = l);
  }
  return a;
}
function Lm() {
  return [];
}
var Nm = Object.prototype, Hm = Nm.propertyIsEnumerable, ms = Object.getOwnPropertySymbols, jm = ms ? function(e) {
  return e == null ? [] : (e = Object(e), _m(ms(e), function(t) {
    return Hm.call(e, t);
  }));
} : Lm;
function Wm(e, t, r) {
  var o = t(e);
  return Kt(e) ? o : Yg(o, r(e));
}
function xs(e) {
  return Wm(e, Ua, jm);
}
var aa = er(un, "DataView"), la = er(un, "Promise"), sa = er(un, "Set"), bs = "[object Map]", Vm = "[object Object]", Cs = "[object Promise]", ys = "[object Set]", ws = "[object WeakMap]", Ss = "[object DataView]", Km = Qn(aa), Um = Qn(eo), qm = Qn(la), Gm = Qn(sa), Xm = Qn(ra), Sn = Jn;
(aa && Sn(new aa(new ArrayBuffer(1))) != Ss || eo && Sn(new eo()) != bs || la && Sn(la.resolve()) != Cs || sa && Sn(new sa()) != ys || ra && Sn(new ra()) != ws) && (Sn = function(e) {
  var t = Jn(e), r = t == Vm ? e.constructor : void 0, o = r ? Qn(r) : "";
  if (o)
    switch (o) {
      case Km:
        return Ss;
      case Um:
        return bs;
      case qm:
        return Cs;
      case Gm:
        return ys;
      case Xm:
        return ws;
    }
  return t;
});
var Uo = un.Uint8Array;
function Ym(e) {
  var t = new e.constructor(e.byteLength);
  return new Uo(t).set(new Uo(e)), t;
}
function Zm(e, t) {
  var r = Ym(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function Jm(e) {
  return typeof e.constructor == "function" && !Va(e) ? ip(du(e)) : {};
}
var Qm = "__lodash_hash_undefined__";
function ex(e) {
  return this.__data__.set(e, Qm), this;
}
function tx(e) {
  return this.__data__.has(e);
}
function qo(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new xn(); ++t < r; )
    this.add(e[t]);
}
qo.prototype.add = qo.prototype.push = ex;
qo.prototype.has = tx;
function nx(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function rx(e, t) {
  return e.has(t);
}
var ox = 1, ix = 2;
function bu(e, t, r, o, i, a) {
  var l = r & ox, s = e.length, d = t.length;
  if (s != d && !(l && d > s))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var h = -1, p = !0, m = r & ix ? new qo() : void 0;
  for (a.set(e, t), a.set(t, e); ++h < s; ) {
    var v = e[h], g = t[h];
    if (o)
      var x = l ? o(g, v, h, t, e, a) : o(v, g, h, e, t, a);
    if (x !== void 0) {
      if (x)
        continue;
      p = !1;
      break;
    }
    if (m) {
      if (!nx(t, function(b, y) {
        if (!rx(m, y) && (v === b || i(v, b, r, o, a)))
          return m.push(y);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === g || i(v, g, r, o, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
function ax(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o, i) {
    r[++t] = [i, o];
  }), r;
}
function lx(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o) {
    r[++t] = o;
  }), r;
}
var sx = 1, dx = 2, ux = "[object Boolean]", cx = "[object Date]", fx = "[object Error]", hx = "[object Map]", vx = "[object Number]", px = "[object RegExp]", gx = "[object Set]", mx = "[object String]", xx = "[object Symbol]", bx = "[object ArrayBuffer]", Cx = "[object DataView]", Bs = Pn ? Pn.prototype : void 0, Ti = Bs ? Bs.valueOf : void 0;
function yx(e, t, r, o, i, a, l) {
  switch (r) {
    case Cx:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case bx:
      return !(e.byteLength != t.byteLength || !a(new Uo(e), new Uo(t)));
    case ux:
    case cx:
    case vx:
      return lo(+e, +t);
    case fx:
      return e.name == t.name && e.message == t.message;
    case px:
    case mx:
      return e == t + "";
    case hx:
      var s = ax;
    case gx:
      var d = o & sx;
      if (s || (s = lx), e.size != t.size && !d)
        return !1;
      var u = l.get(e);
      if (u)
        return u == t;
      o |= dx, l.set(e, t);
      var c = bu(s(e), s(t), o, i, a, l);
      return l.delete(e), c;
    case xx:
      if (Ti)
        return Ti.call(e) == Ti.call(t);
  }
  return !1;
}
var wx = 1, Sx = Object.prototype, Bx = Sx.hasOwnProperty;
function kx(e, t, r, o, i, a) {
  var l = r & wx, s = xs(e), d = s.length, u = xs(t), c = u.length;
  if (d != c && !l)
    return !1;
  for (var h = d; h--; ) {
    var p = s[h];
    if (!(l ? p in t : Bx.call(t, p)))
      return !1;
  }
  var m = a.get(e), v = a.get(t);
  if (m && v)
    return m == t && v == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var x = l; ++h < d; ) {
    p = s[h];
    var b = e[p], y = t[p];
    if (o)
      var B = l ? o(y, b, p, t, e, a) : o(b, y, p, e, t, a);
    if (!(B === void 0 ? b === y || i(b, y, r, o, a) : B)) {
      g = !1;
      break;
    }
    x || (x = p == "constructor");
  }
  if (g && !x) {
    var w = e.constructor, S = t.constructor;
    w != S && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof S == "function" && S instanceof S) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var Fx = 1, ks = "[object Arguments]", Fs = "[object Array]", So = "[object Object]", Rx = Object.prototype, Rs = Rx.hasOwnProperty;
function Px(e, t, r, o, i, a) {
  var l = Kt(e), s = Kt(t), d = l ? Fs : Sn(e), u = s ? Fs : Sn(t);
  d = d == ks ? So : d, u = u == ks ? So : u;
  var c = d == So, h = u == So, p = d == u;
  if (p && Ko(e)) {
    if (!Ko(t))
      return !1;
    l = !0, c = !1;
  }
  if (p && !c)
    return a || (a = new on()), l || Ka(e) ? bu(e, t, r, o, i, a) : yx(e, t, d, r, o, i, a);
  if (!(r & Fx)) {
    var m = c && Rs.call(e, "__wrapped__"), v = h && Rs.call(t, "__wrapped__");
    if (m || v) {
      var g = m ? e.value() : e, x = v ? t.value() : t;
      return a || (a = new on()), i(g, x, r, o, a);
    }
  }
  return p ? (a || (a = new on()), kx(e, t, r, o, i, a)) : !1;
}
function Xa(e, t, r, o, i) {
  return e === t ? !0 : e == null || t == null || !An(e) && !An(t) ? e !== e && t !== t : Px(e, t, r, o, Xa, i);
}
var Ax = 1, $x = 2;
function zx(e, t, r, o) {
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
      var c = new on(), h;
      if (!(h === void 0 ? Xa(u, d, Ax | $x, o, c) : h))
        return !1;
    }
  }
  return !0;
}
function Cu(e) {
  return e === e && !zn(e);
}
function Ex(e) {
  for (var t = Ua(e), r = t.length; r--; ) {
    var o = t[r], i = e[o];
    t[r] = [o, i, Cu(i)];
  }
  return t;
}
function yu(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Dx(e) {
  var t = Ex(e);
  return t.length == 1 && t[0][2] ? yu(t[0][0], t[0][1]) : function(r) {
    return r === e || zx(r, e, t);
  };
}
function Tx(e, t) {
  return e != null && t in Object(e);
}
function Ox(e, t, r) {
  t = lu(t, e);
  for (var o = -1, i = t.length, a = !1; ++o < i; ) {
    var l = ii(t[o]);
    if (!(a = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return a || ++o != i ? a : (i = e == null ? 0 : e.length, !!i && Wa(i) && Ha(l, i) && (Kt(e) || Vo(e)));
}
function Mx(e, t) {
  return e != null && Ox(e, t, Tx);
}
var Ix = 1, _x = 2;
function Lx(e, t) {
  return qa(e) && Cu(t) ? yu(ii(e), t) : function(r) {
    var o = to(r, e);
    return o === void 0 && o === t ? Mx(r, e) : Xa(t, o, Ix | _x);
  };
}
function Nx(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Hx(e) {
  return function(t) {
    return su(t, e);
  };
}
function jx(e) {
  return qa(e) ? Nx(ii(e)) : Hx(e);
}
function Wx(e) {
  return typeof e == "function" ? e : e == null ? La : typeof e == "object" ? Kt(e) ? Lx(e[0], e[1]) : Dx(e) : jx(e);
}
function Vx(e) {
  return function(t, r, o) {
    for (var i = -1, a = Object(t), l = o(t), s = l.length; s--; ) {
      var d = l[++i];
      if (r(a[d], d, a) === !1)
        break;
    }
    return t;
  };
}
var wu = Vx();
function Kx(e, t) {
  return e && wu(e, t, Ua);
}
function Ux(e, t) {
  return function(r, o) {
    if (r == null)
      return r;
    if (!Fr(r))
      return e(r, o);
    for (var i = r.length, a = -1, l = Object(r); ++a < i && o(l[a], a, l) !== !1; )
      ;
    return r;
  };
}
var qx = Ux(Kx);
function da(e, t, r) {
  (r !== void 0 && !lo(e[t], r) || r === void 0 && !(t in e)) && ja(e, t, r);
}
function Gx(e) {
  return An(e) && Fr(e);
}
function ua(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Xx(e) {
  return Cp(e, iu(e));
}
function Yx(e, t, r, o, i, a, l) {
  var s = ua(e, r), d = ua(t, r), u = l.get(d);
  if (u) {
    da(e, r, u);
    return;
  }
  var c = a ? a(s, d, r + "", e, t, l) : void 0, h = c === void 0;
  if (h) {
    var p = Kt(d), m = !p && Ko(d), v = !p && !m && Ka(d);
    c = d, p || m || v ? Kt(s) ? c = s : Gx(s) ? c = lp(s) : m ? (h = !1, c = Im(d)) : v ? (h = !1, c = Zm(d)) : c = [] : nm(d) || Vo(d) ? (c = s, Vo(s) ? c = Xx(s) : (!zn(s) || Na(s)) && (c = Jm(d))) : h = !1;
  }
  h && (l.set(d, c), i(c, d, o, a, l), l.delete(d)), da(e, r, c);
}
function Su(e, t, r, o, i) {
  e !== t && wu(t, function(a, l) {
    if (i || (i = new on()), zn(a))
      Yx(e, t, l, r, Su, o, i);
    else {
      var s = o ? o(ua(e, l), a, l + "", e, t, i) : void 0;
      s === void 0 && (s = a), da(e, l, s);
    }
  }, iu);
}
function Zx(e, t) {
  var r = -1, o = Fr(e) ? Array(e.length) : [];
  return qx(e, function(i, a, l) {
    o[++r] = t(i, a, l);
  }), o;
}
function Jx(e, t) {
  var r = Kt(e) ? Jd : Zx;
  return r(e, Wx(t));
}
var _r = kp(function(e, t, r) {
  Su(e, t, r);
});
function Kn(e) {
  const {
    mergedLocaleRef: t,
    mergedDateLocaleRef: r
  } = pe(Zt, null) || {}, o = P(() => {
    var a, l;
    return (l = (a = t == null ? void 0 : t.value) === null || a === void 0 ? void 0 : a[e]) !== null && l !== void 0 ? l : g0[e];
  });
  return {
    dateLocaleRef: P(() => {
      var a;
      return (a = r == null ? void 0 : r.value) !== null && a !== void 0 ? a : $v;
    }),
    localeRef: o
  };
}
const br = "naive-ui-style";
function wt(e, t, r) {
  if (!t) return;
  const o = Xn(), i = P(() => {
    const {
      value: s
    } = t;
    if (!s)
      return;
    const d = s[e];
    if (d)
      return d;
  }), a = pe(Zt, null), l = () => {
    Qe(() => {
      const {
        value: s
      } = r, d = `${s}${e}Rtl`;
      if (jf(d, o)) return;
      const {
        value: u
      } = i;
      u && u.style.mount({
        id: d,
        head: !0,
        anchorMetaName: br,
        props: {
          bPrefix: s ? `.${s}-` : void 0
        },
        ssr: o,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    });
  };
  return o ? l() : Gn(l), i;
}
const En = {
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
  fontSize: Qx,
  fontFamily: eb,
  lineHeight: tb
} = En, Bu = T("body", `
 margin: 0;
 font-size: ${Qx};
 font-family: ${eb};
 line-height: ${tb};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [T("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function Dn(e, t, r) {
  if (!t) {
    process.env.NODE_ENV !== "production" && $n("use-style", "No style is specified.");
    return;
  }
  const o = Xn(), i = pe(Zt, null), a = () => {
    const l = r.value;
    t.mount({
      id: l === void 0 ? e : l + e,
      head: !0,
      anchorMetaName: br,
      props: {
        bPrefix: l ? `.${l}-` : void 0
      },
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    }), i != null && i.preflightStyleDisabled || Bu.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: br,
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    });
  };
  o ? a() : Gn(a);
}
function ve(e, t, r, o, i, a) {
  const l = Xn(), s = pe(Zt, null);
  if (r) {
    const u = () => {
      const c = a == null ? void 0 : a.value;
      r.mount({
        id: c === void 0 ? t : c + t,
        head: !0,
        props: {
          bPrefix: c ? `.${c}-` : void 0
        },
        anchorMetaName: br,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || Bu.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: br,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    l ? u() : Gn(u);
  }
  return P(() => {
    var u;
    const {
      theme: {
        common: c,
        self: h,
        peers: p = {}
      } = {},
      themeOverrides: m = {},
      builtinThemeOverrides: v = {}
    } = i, {
      common: g,
      peers: x
    } = m, {
      common: b = void 0,
      [e]: {
        common: y = void 0,
        self: B = void 0,
        peers: w = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: S = void 0,
      [e]: F = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: C,
      peers: z = {}
    } = F, E = _r({}, c || y || b || o.common, S, C, g), D = _r(
      // {}, executed every time, no need for empty obj
      (u = h || B || o.self) === null || u === void 0 ? void 0 : u(E),
      v,
      F,
      m
    );
    return {
      common: E,
      self: D,
      peers: _r({}, o.peers, w, p),
      peerOverrides: _r({}, v.peers, z, x)
    };
  });
}
ve.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const nb = R("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [T("svg", `
 height: 1em;
 width: 1em;
 `)]), ft = ee({
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
    Dn("-base-icon", nb, oe(e, "clsPrefix"));
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
}), Rr = ee({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: t
  }) {
    const r = Br();
    return () => f(zt, {
      name: "icon-switch-transition",
      appear: r.value
    }, t);
  }
}), rb = ee({
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
function Pr(e, t) {
  return ee({
    name: Am(e),
    setup() {
      var r;
      const o = (r = pe(Zt, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
      return () => {
        var i;
        const a = (i = o == null ? void 0 : o.value) === null || i === void 0 ? void 0 : i[e];
        return a ? a() : t;
      };
    }
  });
}
const Ps = ee({
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
}), ob = ee({
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
}), ku = ee({
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
}), ib = ee({
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
}), Ya = ee({
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
}), ab = Pr("clear", f("svg", {
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
}))))), lb = Pr("close", f("svg", {
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
}))))), sb = ee({
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
}), Za = Pr("error", f("svg", {
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
}))))), db = ee({
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
}), ub = ee({
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
}), As = ee({
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
}), $s = ee({
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
}), cb = ee({
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
}), zs = ee({
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
}), Go = Pr("info", f("svg", {
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
}))))), Es = ee({
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
}), Ja = Pr("success", f("svg", {
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
}))))), ai = Pr("warning", f("svg", {
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
  cubicBezierEaseInOut: fb
} = En;
function Gt({
  originalTransform: e = "",
  left: t = 0,
  top: r = 0,
  transition: o = `all .3s ${fb} !important`
} = {}) {
  return [T("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${e} scale(0.75)`,
    left: t,
    top: r,
    opacity: 0
  }), T("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${e}`,
    left: t,
    top: r,
    opacity: 1
  }), T("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: t,
    top: r,
    transition: o
  })];
}
const hb = R("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [T(">", [M("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [T("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), T("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), M("placeholder", `
 display: flex;
 `), M("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Gt({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), ca = ee({
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
    return Dn("-base-clear", hb, oe(e, "clsPrefix")), {
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
    }, f(Rr, null, {
      default: () => {
        var t, r;
        return this.show ? f("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, Lt(this.$slots.icon, () => [f(ft, {
          clsPrefix: e
        }, {
          default: () => f(ab, null)
        })])) : f("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (r = (t = this.$slots).placeholder) === null || r === void 0 ? void 0 : r.call(t));
      }
    }));
  }
}), vb = R("base-close", `
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
 `), T("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), Ye("disabled", [T("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), T("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), T("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), T("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), T("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), N("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), N("round", [T("&::before", `
 border-radius: 50%;
 `)])]), so = ee({
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
    return Dn("-base-close", vb, oe(e, "clsPrefix")), () => {
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
      }, f(ft, {
        clsPrefix: t
      }, {
        default: () => f(lb, null)
      }));
    };
  }
}), Qa = ee({
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
      } = e, h = s ? vf : zt, p = {
        name: d ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: u,
        onEnter: a,
        onAfterEnter: l,
        onBeforeLeave: r,
        onLeave: o,
        onAfterLeave: i
      };
      return s || (p.mode = c), f(h, p, t);
    };
  }
}), pb = ee({
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
}), gb = T([T("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), R("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [M("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [Gt()]), M("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Gt({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), M("container", `
 animation: rotator 3s linear infinite both;
 `, [M("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Oi = "1.6s", mb = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, tr = ee({
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
  }, mb),
  setup(e) {
    Dn("-base-loading", gb, oe(e, "clsPrefix"));
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
    }, f(Rr, null, {
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
        dur: Oi,
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
        dur: Oi,
        fill: "freeze",
        repeatCount: "indefinite"
      }), f("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * t};${1.42 * t};${5.67 * t}`,
        begin: "0s",
        dur: Oi,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : f("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), {
  cubicBezierEaseInOut: Ds
} = En;
function li({
  name: e = "fade-in",
  enterDuration: t = "0.2s",
  leaveDuration: r = "0.2s",
  enterCubicBezier: o = Ds,
  leaveCubicBezier: i = Ds
} = {}) {
  return [T(`&.${e}-transition-enter-active`, {
    transition: `all ${t} ${o}!important`
  }), T(`&.${e}-transition-leave-active`, {
    transition: `all ${r} ${i}!important`
  }), T(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), T(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
    opacity: 1
  })];
}
const ke = {
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
}, xb = Wn(ke.neutralBase), Fu = Wn(ke.neutralInvertBase), bb = `rgba(${Fu.slice(0, 3).join(", ")}, `;
function Ts(e) {
  return `${bb + String(e)})`;
}
function Rt(e) {
  const t = Array.from(Fu);
  return t[3] = Number(e), We(xb, t);
}
const qe = Object.assign(Object.assign({
  name: "common"
}, En), {
  baseColor: ke.neutralBase,
  // primary color
  primaryColor: ke.primaryDefault,
  primaryColorHover: ke.primaryHover,
  primaryColorPressed: ke.primaryActive,
  primaryColorSuppl: ke.primarySuppl,
  // info color
  infoColor: ke.infoDefault,
  infoColorHover: ke.infoHover,
  infoColorPressed: ke.infoActive,
  infoColorSuppl: ke.infoSuppl,
  // success color
  successColor: ke.successDefault,
  successColorHover: ke.successHover,
  successColorPressed: ke.successActive,
  successColorSuppl: ke.successSuppl,
  // warning color
  warningColor: ke.warningDefault,
  warningColorHover: ke.warningHover,
  warningColorPressed: ke.warningActive,
  warningColorSuppl: ke.warningSuppl,
  // error color
  errorColor: ke.errorDefault,
  errorColorHover: ke.errorHover,
  errorColorPressed: ke.errorActive,
  errorColorSuppl: ke.errorSuppl,
  // text color
  textColorBase: ke.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: Rt(ke.alpha4),
  placeholderColor: Rt(ke.alpha4),
  placeholderColorDisabled: Rt(ke.alpha5),
  iconColor: Rt(ke.alpha4),
  iconColorHover: po(Rt(ke.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: po(Rt(ke.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: Rt(ke.alpha5),
  opacity1: ke.alpha1,
  opacity2: ke.alpha2,
  opacity3: ke.alpha3,
  opacity4: ke.alpha4,
  opacity5: ke.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: Rt(Number(ke.alphaClose)),
  closeIconColorHover: Rt(Number(ke.alphaClose)),
  closeIconColorPressed: Rt(Number(ke.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: Rt(ke.alpha4),
  clearColorHover: po(Rt(ke.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: po(Rt(ke.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Ts(ke.alphaScrollbar),
  scrollbarColorHover: Ts(ke.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: Rt(ke.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: ke.neutralPopover,
  tableColor: ke.neutralCard,
  cardColor: ke.neutralCard,
  modalColor: ke.neutralModal,
  bodyColor: ke.neutralBody,
  tagColor: "#eee",
  avatarColor: Rt(ke.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: Rt(ke.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: ke.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), Cb = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function yb(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: r,
    scrollbarHeight: o,
    scrollbarWidth: i,
    scrollbarBorderRadius: a
  } = e;
  return Object.assign(Object.assign({}, Cb), {
    height: o,
    width: i,
    borderRadius: a,
    color: t,
    colorHover: r
  });
}
const uo = {
  name: "Scrollbar",
  common: qe,
  self: yb
}, wb = R("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [T(">", [R("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [T("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), T(">", [
  // We can't set overflow hidden since it affects positioning.
  R("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), T(">, +", [R("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [N("horizontal", `
 height: var(--n-scrollbar-height);
 `, [T(">", [M("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), N("horizontal--top", `
 inset: var(--n-scrollbar-rail-inset-horizontal-top); 
 `), N("horizontal--bottom", `
 inset: var(--n-scrollbar-rail-inset-horizontal-bottom); 
 `), N("vertical", `
 width: var(--n-scrollbar-width);
 `, [T(">", [M("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), N("vertical--left", `
 inset: var(--n-scrollbar-rail-inset-vertical-left); 
 `), N("vertical--right", `
 inset: var(--n-scrollbar-rail-inset-vertical-right); 
 `), N("disabled", [T(">", [M("scrollbar", "pointer-events: none;")])]), T(">", [M("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [li(), T("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Sb = Object.assign(Object.assign({}, ve.props), {
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
}), nr = ee({
  name: "Scrollbar",
  props: Sb,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = ze(e), i = wt("Scrollbar", o, t), a = _(null), l = _(null), s = _(null), d = _(null), u = _(null), c = _(null), h = _(null), p = _(null), m = _(null), v = _(null), g = _(null), x = _(0), b = _(0), y = _(!1), B = _(!1);
    let w = !1, S = !1, F, C, z = 0, E = 0, D = 0, K = 0;
    const O = fh(), n = ve("Scrollbar", "-scrollbar", wb, uo, e, t), A = P(() => {
      const {
        value: k
      } = p, {
        value: W
      } = c, {
        value: Z
      } = v;
      return k === null || W === null || Z === null ? 0 : Math.min(k, Z * k / W + kn(n.value.self.width) * 1.5);
    }), $ = P(() => `${A.value}px`), L = P(() => {
      const {
        value: k
      } = m, {
        value: W
      } = h, {
        value: Z
      } = g;
      return k === null || W === null || Z === null ? 0 : Z * k / W + kn(n.value.self.height) * 1.5;
    }), I = P(() => `${L.value}px`), V = P(() => {
      const {
        value: k
      } = p, {
        value: W
      } = x, {
        value: Z
      } = c, {
        value: ae
      } = v;
      if (k === null || Z === null || ae === null)
        return 0;
      {
        const se = Z - k;
        return se ? W / se * (ae - A.value) : 0;
      }
    }), te = P(() => `${V.value}px`), X = P(() => {
      const {
        value: k
      } = m, {
        value: W
      } = b, {
        value: Z
      } = h, {
        value: ae
      } = g;
      if (k === null || Z === null || ae === null)
        return 0;
      {
        const se = Z - k;
        return se ? W / se * (ae - L.value) : 0;
      }
    }), q = P(() => `${X.value}px`), H = P(() => {
      const {
        value: k
      } = p, {
        value: W
      } = c;
      return k !== null && W !== null && W > k;
    }), G = P(() => {
      const {
        value: k
      } = m, {
        value: W
      } = h;
      return k !== null && W !== null && W > k;
    }), Y = P(() => {
      const {
        trigger: k
      } = e;
      return k === "none" || y.value;
    }), ie = P(() => {
      const {
        trigger: k
      } = e;
      return k === "none" || B.value;
    }), le = P(() => {
      const {
        container: k
      } = e;
      return k ? k() : l.value;
    }), fe = P(() => {
      const {
        content: k
      } = e;
      return k ? k() : s.value;
    }), Se = (k, W) => {
      if (!e.scrollable) return;
      if (typeof k == "number") {
        Re(k, W ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: Z,
        top: ae,
        index: se,
        elSize: he,
        position: ge,
        behavior: we,
        el: Ie,
        debounce: Je = !0
      } = k;
      (Z !== void 0 || ae !== void 0) && Re(Z ?? 0, ae ?? 0, 0, !1, we), Ie !== void 0 ? Re(0, Ie.offsetTop, Ie.offsetHeight, Je, we) : se !== void 0 && he !== void 0 ? Re(0, se * he, he, Je, we) : ge === "bottom" ? Re(0, Number.MAX_SAFE_INTEGER, 0, !1, we) : ge === "top" && Re(0, 0, 0, !1, we);
    }, U = bh(() => {
      e.container || Se({
        top: x.value,
        left: b.value
      });
    }), de = () => {
      U.isDeactivated || ce();
    }, Fe = (k) => {
      if (U.isDeactivated) return;
      const {
        onResize: W
      } = e;
      W && W(k), ce();
    }, me = (k, W) => {
      if (!e.scrollable) return;
      const {
        value: Z
      } = le;
      Z && (typeof k == "object" ? Z.scrollBy(k) : Z.scrollBy(k, W || 0));
    };
    function Re(k, W, Z, ae, se) {
      const {
        value: he
      } = le;
      if (he) {
        if (ae) {
          const {
            scrollTop: ge,
            offsetHeight: we
          } = he;
          if (W > ge) {
            W + Z <= ge + we || he.scrollTo({
              left: k,
              top: W + Z - we,
              behavior: se
            });
            return;
          }
        }
        he.scrollTo({
          left: k,
          top: W,
          behavior: se
        });
      }
    }
    function Pe() {
      xe(), be(), ce();
    }
    function nt() {
      Ge();
    }
    function Ge() {
      at(), lt();
    }
    function at() {
      C !== void 0 && window.clearTimeout(C), C = window.setTimeout(() => {
        B.value = !1;
      }, e.duration);
    }
    function lt() {
      F !== void 0 && window.clearTimeout(F), F = window.setTimeout(() => {
        y.value = !1;
      }, e.duration);
    }
    function xe() {
      F !== void 0 && window.clearTimeout(F), y.value = !0;
    }
    function be() {
      C !== void 0 && window.clearTimeout(C), B.value = !0;
    }
    function Ae(k) {
      const {
        onScroll: W
      } = e;
      W && W(k), Me();
    }
    function Me() {
      const {
        value: k
      } = le;
      k && (x.value = k.scrollTop, b.value = k.scrollLeft * (i != null && i.value ? -1 : 1));
    }
    function Ve() {
      const {
        value: k
      } = fe;
      k && (c.value = k.offsetHeight, h.value = k.offsetWidth);
      const {
        value: W
      } = le;
      W && (p.value = W.offsetHeight, m.value = W.offsetWidth);
      const {
        value: Z
      } = u, {
        value: ae
      } = d;
      Z && (g.value = Z.offsetWidth), ae && (v.value = ae.offsetHeight);
    }
    function re() {
      const {
        value: k
      } = le;
      k && (x.value = k.scrollTop, b.value = k.scrollLeft * (i != null && i.value ? -1 : 1), p.value = k.offsetHeight, m.value = k.offsetWidth, c.value = k.scrollHeight, h.value = k.scrollWidth);
      const {
        value: W
      } = u, {
        value: Z
      } = d;
      W && (g.value = W.offsetWidth), Z && (v.value = Z.offsetHeight);
    }
    function ce() {
      e.scrollable && (e.useUnifiedContainer ? re() : (Ve(), Me()));
    }
    function De(k) {
      var W;
      return !(!((W = a.value) === null || W === void 0) && W.contains(mr(k)));
    }
    function rt(k) {
      k.preventDefault(), k.stopPropagation(), S = !0, et("mousemove", window, St, !0), et("mouseup", window, Bt, !0), E = b.value, D = i != null && i.value ? window.innerWidth - k.clientX : k.clientX;
    }
    function St(k) {
      if (!S) return;
      F !== void 0 && window.clearTimeout(F), C !== void 0 && window.clearTimeout(C);
      const {
        value: W
      } = m, {
        value: Z
      } = h, {
        value: ae
      } = L;
      if (W === null || Z === null) return;
      const he = (i != null && i.value ? window.innerWidth - k.clientX - D : k.clientX - D) * (Z - W) / (W - ae), ge = Z - W;
      let we = E + he;
      we = Math.min(ge, we), we = Math.max(we, 0);
      const {
        value: Ie
      } = le;
      if (Ie) {
        Ie.scrollLeft = we * (i != null && i.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: Je
        } = e;
        Je && Je(we);
      }
    }
    function Bt(k) {
      k.preventDefault(), k.stopPropagation(), He("mousemove", window, St, !0), He("mouseup", window, Bt, !0), S = !1, ce(), De(k) && Ge();
    }
    function ut(k) {
      k.preventDefault(), k.stopPropagation(), w = !0, et("mousemove", window, Ze, !0), et("mouseup", window, pt, !0), z = x.value, K = k.clientY;
    }
    function Ze(k) {
      if (!w) return;
      F !== void 0 && window.clearTimeout(F), C !== void 0 && window.clearTimeout(C);
      const {
        value: W
      } = p, {
        value: Z
      } = c, {
        value: ae
      } = A;
      if (W === null || Z === null) return;
      const he = (k.clientY - K) * (Z - W) / (W - ae), ge = Z - W;
      let we = z + he;
      we = Math.min(ge, we), we = Math.max(we, 0);
      const {
        value: Ie
      } = le;
      Ie && (Ie.scrollTop = we);
    }
    function pt(k) {
      k.preventDefault(), k.stopPropagation(), He("mousemove", window, Ze, !0), He("mouseup", window, pt, !0), w = !1, ce(), De(k) && Ge();
    }
    Qe(() => {
      const {
        value: k
      } = G, {
        value: W
      } = H, {
        value: Z
      } = t, {
        value: ae
      } = u, {
        value: se
      } = d;
      ae && (k ? ae.classList.remove(`${Z}-scrollbar-rail--disabled`) : ae.classList.add(`${Z}-scrollbar-rail--disabled`)), se && (W ? se.classList.remove(`${Z}-scrollbar-rail--disabled`) : se.classList.add(`${Z}-scrollbar-rail--disabled`));
    }), Ft(() => {
      e.container || ce();
    }), Ct(() => {
      F !== void 0 && window.clearTimeout(F), C !== void 0 && window.clearTimeout(C), He("mousemove", window, Ze, !0), He("mouseup", window, pt, !0);
    });
    const Xe = P(() => {
      const {
        common: {
          cubicBezierEaseInOut: k
        },
        self: {
          color: W,
          colorHover: Z,
          height: ae,
          width: se,
          borderRadius: he,
          railInsetHorizontalTop: ge,
          railInsetHorizontalBottom: we,
          railInsetVerticalRight: Ie,
          railInsetVerticalLeft: Je,
          railColor: Ne
        }
      } = n.value;
      return {
        "--n-scrollbar-bezier": k,
        "--n-scrollbar-color": W,
        "--n-scrollbar-color-hover": Z,
        "--n-scrollbar-border-radius": he,
        "--n-scrollbar-width": se,
        "--n-scrollbar-height": ae,
        "--n-scrollbar-rail-inset-horizontal-top": ge,
        "--n-scrollbar-rail-inset-horizontal-bottom": we,
        "--n-scrollbar-rail-inset-vertical-right": i != null && i.value ? Jl(Ie) : Ie,
        "--n-scrollbar-rail-inset-vertical-left": i != null && i.value ? Jl(Je) : Je,
        "--n-scrollbar-rail-color": Ne
      };
    }), ue = r ? Ue("scrollbar", void 0, Xe, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Se,
      scrollBy: me,
      sync: ce,
      syncUnifiedContainer: re,
      handleMouseEnterWrapper: Pe,
      handleMouseLeaveWrapper: nt
    }), {
      mergedClsPrefix: t,
      rtlEnabled: i,
      containerScrollTop: x,
      wrapperRef: a,
      containerRef: l,
      contentRef: s,
      yRailRef: d,
      xRailRef: u,
      needYBar: H,
      needXBar: G,
      yBarSizePx: $,
      xBarSizePx: I,
      yBarTopPx: te,
      xBarLeftPx: q,
      isShowXBar: Y,
      isShowYBar: ie,
      isIos: O,
      handleScroll: Ae,
      handleContentResize: de,
      handleContainerResize: Fe,
      handleYScrollMouseDown: ut,
      handleXScrollMouseDown: rt,
      cssVars: r ? void 0 : Xe,
      themeClass: ue == null ? void 0 : ue.themeClass,
      onRender: ue == null ? void 0 : ue.onRender
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
    const u = this.trigger === "none", c = (m, v) => f("div", {
      ref: "yRailRef",
      class: [`${r}-scrollbar-rail`, `${r}-scrollbar-rail--vertical`, `${r}-scrollbar-rail--vertical--${l}`, m],
      "data-scrollbar-rail": !0,
      style: [v || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, f(u ? ta : zt, u ? null : {
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
    })), h = () => {
      var m, v;
      return (m = this.onRender) === null || m === void 0 || m.call(this), f("div", Yt(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${r}-scrollbar`, this.themeClass, i && `${r}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: o ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: o ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (v = t.default) === null || v === void 0 ? void 0 : v.call(t) : f("div", {
        role: "none",
        ref: "containerRef",
        class: [`${r}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, f(xr, {
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
      }, f(u ? ta : zt, u ? null : {
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
    }, p = this.container ? h() : f(xr, {
      onResize: this.handleContainerResize
    }, {
      default: h
    });
    return a ? f(ht, null, p, c(this.themeClass, this.cssVars)) : p;
  }
}), Ru = nr;
function Os(e) {
  return Array.isArray(e) ? e : [e];
}
const fa = {
  STOP: "STOP"
};
function Pu(e, t) {
  const r = t(e);
  e.children !== void 0 && r !== fa.STOP && e.children.forEach((o) => Pu(o, t));
}
function Bb(e, t = {}) {
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
function kb(e, t) {
  const { isLeaf: r } = e;
  return r !== void 0 ? r : !t(e);
}
function Fb(e) {
  return e.children;
}
function Rb(e) {
  return e.key;
}
function Pb() {
  return !1;
}
function Ab(e, t) {
  const { isLeaf: r } = e;
  return !(r === !1 && !Array.isArray(t(e)));
}
function $b(e) {
  return e.disabled === !0;
}
function zb(e, t) {
  return e.isLeaf === !1 && !Array.isArray(t(e));
}
function Eb(e, t) {
  if (e.isLeaf === !0) {
    const r = t(e);
    if (Array.isArray(r) && r.length > 0)
      return !0;
  }
  return !1;
}
function Mi(e) {
  var t;
  return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : [];
}
function Ii(e) {
  var t;
  return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : [];
}
function Db(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) || r.add(o);
  }), Array.from(r);
}
function Tb(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) && r.delete(o);
  }), Array.from(r);
}
function Ob(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function Mb(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r, o) => {
    t.set(r.key, o);
  }), (r) => {
    var o;
    return (o = t.get(r)) !== null && o !== void 0 ? o : null;
  };
}
class Ib extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function _b(e, t, r, o) {
  return Xo(t.concat(e), r, o, !1);
}
function Lb(e, t) {
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
function Nb(e, t, r, o) {
  const i = Xo(t, r, o, !1), a = Xo(e, r, o, !0), l = Lb(e, r), s = [];
  return i.forEach((d) => {
    (a.has(d) || l.has(d)) && s.push(d);
  }), s.forEach((d) => i.delete(d)), i;
}
function _i(e, t) {
  const { checkedKeys: r, keysToCheck: o, keysToUncheck: i, indeterminateKeys: a, cascade: l, leafOnly: s, checkStrategy: d, allowNotLoaded: u } = e;
  if (!l)
    return o !== void 0 ? {
      checkedKeys: Db(r, o),
      indeterminateKeys: Array.from(a)
    } : i !== void 0 ? {
      checkedKeys: Tb(r, i),
      indeterminateKeys: Array.from(a)
    } : {
      checkedKeys: Array.from(r),
      indeterminateKeys: Array.from(a)
    };
  const { levelTreeNodeMap: c } = t;
  let h;
  i !== void 0 ? h = Nb(i, r, t, u) : o !== void 0 ? h = _b(o, r, t, u) : h = Xo(r, t, u, !1);
  const p = d === "parent", m = d === "child" || s, v = h, g = /* @__PURE__ */ new Set(), x = Math.max.apply(null, Array.from(c.keys()));
  for (let b = x; b >= 0; b -= 1) {
    const y = b === 0, B = c.get(b);
    for (const w of B) {
      if (w.isLeaf)
        continue;
      const { key: S, shallowLoaded: F } = w;
      if (m && F && w.children.forEach((D) => {
        !D.disabled && !D.isLeaf && D.shallowLoaded && v.has(D.key) && v.delete(D.key);
      }), w.disabled || !F)
        continue;
      let C = !0, z = !1, E = !0;
      for (const D of w.children) {
        const K = D.key;
        if (!D.disabled) {
          if (E && (E = !1), v.has(K))
            z = !0;
          else if (g.has(K)) {
            z = !0, C = !1;
            break;
          } else if (C = !1, z)
            break;
        }
      }
      C && !E ? (p && w.children.forEach((D) => {
        !D.disabled && v.has(D.key) && v.delete(D.key);
      }), v.add(S)) : z && g.add(S), y && m && v.has(S) && v.delete(S);
    }
  }
  return {
    checkedKeys: Array.from(v),
    indeterminateKeys: Array.from(g)
  };
}
function Xo(e, t, r, o) {
  const { treeNodeMap: i, getChildren: a } = t, l = /* @__PURE__ */ new Set(), s = new Set(e);
  return e.forEach((d) => {
    const u = i.get(d);
    u !== void 0 && Pu(u, (c) => {
      if (c.disabled)
        return fa.STOP;
      const { key: h } = c;
      if (!l.has(h) && (l.add(h), s.add(h), zb(c.rawNode, a))) {
        if (o)
          return fa.STOP;
        if (!r)
          throw new Ib();
      }
    });
  }), s;
}
function Hb(e, { includeGroup: t = !1, includeSelf: r = !0 }, o) {
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
function jb(e) {
  if (e.length === 0)
    return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function Wb(e, t) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return t ? r[(i + 1) % o] : i === r.length - 1 ? null : r[i + 1];
}
function Ms(e, t, { loop: r = !1, includeDisabled: o = !1 } = {}) {
  const i = t === "prev" ? Vb : Wb, a = {
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
        const c = el(u, a);
        c !== null ? s = c : d(i(u, r));
      } else {
        const c = i(u, !1);
        if (c !== null)
          d(c);
        else {
          const h = Kb(u);
          h != null && h.isGroup ? d(i(h, r)) : r && d(i(u, !0));
        }
      }
    }
  }
  return d(e), s;
}
function Vb(e, t) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return t ? r[(i - 1 + o) % o] : i === 0 ? null : r[i - 1];
}
function Kb(e) {
  return e.parent;
}
function el(e, t = {}) {
  const { reverse: r = !1 } = t, { children: o } = e;
  if (o) {
    const { length: i } = o, a = r ? i - 1 : 0, l = r ? -1 : i, s = r ? -1 : 1;
    for (let d = a; d !== l; d += s) {
      const u = o[d];
      if (!u.disabled && !u.ignored)
        if (u.isGroup) {
          const c = el(u, t);
          if (c !== null)
            return c;
        } else
          return u;
    }
  }
  return null;
}
const Ub = {
  getChild() {
    return this.ignored ? null : el(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return Ms(this, "next", e);
  },
  getPrev(e = {}) {
    return Ms(this, "prev", e);
  }
};
function qb(e, t) {
  const r = t ? new Set(t) : void 0, o = [];
  function i(a) {
    a.forEach((l) => {
      o.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || // normal non-leaf node
      r === void 0 || r.has(l.key)) && i(l.children);
    });
  }
  return i(e), o;
}
function Gb(e, t) {
  const r = e.key;
  for (; t; ) {
    if (t.key === r)
      return !0;
    t = t.parent;
  }
  return !1;
}
function Au(e, t, r, o, i, a = null, l = 0) {
  const s = [];
  return e.forEach((d, u) => {
    var c;
    process.env.NODE_ENV !== "production" && Eb(d, i) && console.error("[treemate]: node", d, "is invalid");
    const h = Object.create(o);
    if (h.rawNode = d, h.siblings = s, h.level = l, h.index = u, h.isFirstChild = u === 0, h.isLastChild = u + 1 === e.length, h.parent = a, !h.ignored) {
      const p = i(d);
      Array.isArray(p) && (h.children = Au(p, t, r, o, i, h, l + 1));
    }
    s.push(h), t.set(h.key, h), r.has(l) || r.set(l, []), (c = r.get(l)) === null || c === void 0 || c.push(h);
  }), s;
}
function si(e, t = {}) {
  var r;
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), { getDisabled: a = $b, getIgnored: l = Pb, getIsGroup: s = Ob, getKey: d = Rb } = t, u = (r = t.getChildren) !== null && r !== void 0 ? r : Fb, c = t.ignoreEmptyChildren ? (w) => {
    const S = u(w);
    return Array.isArray(S) ? S.length ? S : null : S;
  } : u, h = Object.assign({
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
      return kb(this.rawNode, c);
    },
    get shallowLoaded() {
      return Ab(this.rawNode, c);
    },
    get ignored() {
      return l(this.rawNode);
    },
    contains(w) {
      return Gb(this, w);
    }
  }, Ub), p = Au(e, o, i, h, c);
  function m(w) {
    if (w == null)
      return null;
    const S = o.get(w);
    return S && !S.isGroup && !S.ignored ? S : null;
  }
  function v(w) {
    if (w == null)
      return null;
    const S = o.get(w);
    return S && !S.ignored ? S : null;
  }
  function g(w, S) {
    const F = v(w);
    return F ? F.getPrev(S) : null;
  }
  function x(w, S) {
    const F = v(w);
    return F ? F.getNext(S) : null;
  }
  function b(w) {
    const S = v(w);
    return S ? S.getParent() : null;
  }
  function y(w) {
    const S = v(w);
    return S ? S.getChild() : null;
  }
  const B = {
    treeNodes: p,
    treeNodeMap: o,
    levelTreeNodeMap: i,
    maxLevel: Math.max(...i.keys()),
    getChildren: c,
    getFlattenedNodes(w) {
      return qb(p, w);
    },
    getNode: m,
    getPrev: g,
    getNext: x,
    getParent: b,
    getChild: y,
    getFirstAvailableNode() {
      return jb(p);
    },
    getPath(w, S = {}) {
      return Hb(w, S, B);
    },
    getCheckedKeys(w, S = {}) {
      const { cascade: F = !0, leafOnly: C = !1, checkStrategy: z = "all", allowNotLoaded: E = !1 } = S;
      return _i({
        checkedKeys: Mi(w),
        indeterminateKeys: Ii(w),
        cascade: F,
        leafOnly: C,
        checkStrategy: z,
        allowNotLoaded: E
      }, B);
    },
    check(w, S, F = {}) {
      const { cascade: C = !0, leafOnly: z = !1, checkStrategy: E = "all", allowNotLoaded: D = !1 } = F;
      return _i({
        checkedKeys: Mi(S),
        indeterminateKeys: Ii(S),
        keysToCheck: w == null ? [] : Os(w),
        cascade: C,
        leafOnly: z,
        checkStrategy: E,
        allowNotLoaded: D
      }, B);
    },
    uncheck(w, S, F = {}) {
      const { cascade: C = !0, leafOnly: z = !1, checkStrategy: E = "all", allowNotLoaded: D = !1 } = F;
      return _i({
        checkedKeys: Mi(S),
        indeterminateKeys: Ii(S),
        keysToUncheck: w == null ? [] : Os(w),
        cascade: C,
        leafOnly: z,
        checkStrategy: E,
        allowNotLoaded: D
      }, B);
    },
    getNonLeafKeys(w = {}) {
      return Bb(p, w);
    }
  };
  return B;
}
const Xb = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function Yb(e) {
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
  return Object.assign(Object.assign({}, Xb), {
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
const tl = {
  name: "Empty",
  common: qe,
  self: Yb
}, Zb = R("empty", `
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
 `, [T("+", [M("description", `
 margin-top: 8px;
 `)])]), M("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), M("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]), Jb = Object.assign(Object.assign({}, ve.props), {
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
}), Cr = ee({
  name: "Empty",
  props: Jb,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r,
      mergedComponentPropsRef: o
    } = ze(e), i = ve("Empty", "-empty", Zb, tl, e, t), {
      localeRef: a
    } = Kn("Empty"), l = P(() => {
      var c, h, p;
      return (c = e.description) !== null && c !== void 0 ? c : (p = (h = o == null ? void 0 : o.value) === null || h === void 0 ? void 0 : h.Empty) === null || p === void 0 ? void 0 : p.description;
    }), s = P(() => {
      var c, h;
      return ((h = (c = o == null ? void 0 : o.value) === null || c === void 0 ? void 0 : c.Empty) === null || h === void 0 ? void 0 : h.renderIcon) || (() => f(sb, null));
    }), d = P(() => {
      const {
        size: c
      } = e, {
        common: {
          cubicBezierEaseInOut: h
        },
        self: {
          [J("iconSize", c)]: p,
          [J("fontSize", c)]: m,
          textColor: v,
          iconColor: g,
          extraTextColor: x
        }
      } = i.value;
      return {
        "--n-icon-size": p,
        "--n-font-size": m,
        "--n-bezier": h,
        "--n-text-color": v,
        "--n-icon-color": g,
        "--n-extra-text-color": x
      };
    }), u = r ? Ue("empty", P(() => {
      let c = "";
      const {
        size: h
      } = e;
      return c += h[0], c;
    }), d, e) : void 0;
    return {
      mergedClsPrefix: t,
      mergedRenderIcon: s,
      localizedDescription: P(() => l.value || a.value.description),
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
    }, e.icon ? e.icon() : f(ft, {
      clsPrefix: t
    }, {
      default: this.mergedRenderIcon
    })) : null, this.showDescription ? f("div", {
      class: `${t}-empty__description`
    }, e.default ? e.default() : this.localizedDescription) : null, e.extra ? f("div", {
      class: `${t}-empty__extra`
    }, e.extra()) : null);
  }
}), Qb = {
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
function e1(e) {
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
    fontSizeTiny: h,
    fontSizeSmall: p,
    fontSizeMedium: m,
    fontSizeLarge: v,
    fontSizeHuge: g,
    heightTiny: x,
    heightSmall: b,
    heightMedium: y,
    heightLarge: B,
    heightHuge: w
  } = e;
  return Object.assign(Object.assign({}, Qb), {
    optionFontSizeTiny: h,
    optionFontSizeSmall: p,
    optionFontSizeMedium: m,
    optionFontSizeLarge: v,
    optionFontSizeHuge: g,
    optionHeightTiny: x,
    optionHeightSmall: b,
    optionHeightMedium: y,
    optionHeightLarge: B,
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
const nl = {
  name: "InternalSelectMenu",
  common: qe,
  peers: {
    Scrollbar: uo,
    Empty: tl
  },
  self: e1
}, Is = ee({
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
    } = pe(Aa);
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
    } = this, a = o == null ? void 0 : o(i), l = t ? t(i, !1) : dt(i[this.labelField], i, !1), s = f("div", Object.assign({}, a, {
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
function t1(e, t) {
  return f(zt, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => e ? f(ft, {
      clsPrefix: t,
      class: `${t}-base-select-option__check`
    }, {
      default: () => f(ob)
    }) : null
  });
}
const _s = ee({
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
      handleOptionClick: h,
      handleOptionMouseEnter: p
    } = pe(Aa), m = je(() => {
      const {
        value: b
      } = r;
      return b ? e.tmNode.key === b.key : !1;
    });
    function v(b) {
      const {
        tmNode: y
      } = e;
      y.disabled || h(b, y);
    }
    function g(b) {
      const {
        tmNode: y
      } = e;
      y.disabled || p(b, y);
    }
    function x(b) {
      const {
        tmNode: y
      } = e, {
        value: B
      } = m;
      y.disabled || B || p(b, y);
    }
    return {
      multiple: o,
      isGrouped: je(() => {
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
      isSelected: je(() => {
        const {
          value: b
        } = t, {
          value: y
        } = o;
        if (b === null) return !1;
        const B = e.tmNode.rawNode[d.value];
        if (y) {
          const {
            value: w
          } = i;
          return w.has(B);
        } else
          return b === B;
      }),
      labelField: s,
      renderLabel: a,
      renderOption: l,
      handleMouseMove: x,
      handleMouseEnter: g,
      handleClick: v
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
      handleMouseMove: h
    } = this, p = t1(r, e), m = d ? [d(t, r), a && p] : [dt(t[this.labelField], t, r), a && p], v = l == null ? void 0 : l(t), g = f("div", Object.assign({}, v, {
      class: [`${e}-base-select-option`, t.class, v == null ? void 0 : v.class, {
        [`${e}-base-select-option--disabled`]: t.disabled,
        [`${e}-base-select-option--selected`]: r,
        [`${e}-base-select-option--grouped`]: i,
        [`${e}-base-select-option--pending`]: o,
        [`${e}-base-select-option--show-checkmark`]: a
      }],
      style: [(v == null ? void 0 : v.style) || "", t.style || ""],
      onClick: Vr([u, v == null ? void 0 : v.onClick]),
      onMouseenter: Vr([c, v == null ? void 0 : v.onMouseenter]),
      onMousemove: Vr([h, v == null ? void 0 : v.onMousemove])
    }), f("div", {
      class: `${e}-base-select-option__content`
    }, m));
    return t.render ? t.render({
      node: g,
      option: t,
      selected: r
    }) : s ? s({
      node: g,
      option: t,
      selected: r
    }) : g;
  }
}), {
  cubicBezierEaseIn: Ls,
  cubicBezierEaseOut: Ns
} = En;
function co({
  transformOrigin: e = "inherit",
  duration: t = ".2s",
  enterScale: r = ".9",
  originalTransform: o = "",
  originalTransition: i = ""
} = {}) {
  return [T("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${t} ${Ls}, transform ${t} ${Ls} ${i && `,${i}`}`
  }), T("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${t} ${Ns}, transform ${t} ${Ns} ${i && `,${i}`}`
  }), T("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${o} scale(${r})`
  }), T("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${o} scale(1)`
  })];
}
const n1 = R("base-select-menu", `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [R("scrollbar", `
 max-height: var(--n-height);
 `), R("virtual-list", `
 max-height: var(--n-height);
 `), R("base-select-option", `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [M("content", `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), R("base-select-group-header", `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), R("base-select-menu-option-wrapper", `
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
 `), R("base-select-group-header", `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), R("base-select-option", `
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
 `), T("&::before", `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), T("&:active", `
 color: var(--n-option-text-color-pressed);
 `), N("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), N("pending", [T("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), N("selected", `
 color: var(--n-option-text-color-active);
 `, [T("&::before", `
 background-color: var(--n-option-color-active);
 `), N("pending", [T("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), N("disabled", `
 cursor: not-allowed;
 `, [Ye("selected", `
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
 `, [co({
  enterScale: "0.5"
})])])]), $u = ee({
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
    } = ze(e), o = wt("InternalSelectMenu", r, t), i = ve("InternalSelectMenu", "-internal-select-menu", n1, nl, e, oe(e, "clsPrefix")), a = _(null), l = _(null), s = _(null), d = P(() => e.treeMate.getFlattenedNodes()), u = P(() => Mb(d.value)), c = _(null);
    function h() {
      const {
        treeMate: H
      } = e;
      let G = null;
      const {
        value: Y
      } = e;
      Y === null ? G = H.getFirstAvailableNode() : (e.multiple ? G = H.getNode((Y || [])[(Y || []).length - 1]) : G = H.getNode(Y), (!G || G.disabled) && (G = H.getFirstAvailableNode())), A(G || null);
    }
    function p() {
      const {
        value: H
      } = c;
      H && !e.treeMate.getNode(H.key) && (c.value = null);
    }
    let m;
    Le(() => e.show, (H) => {
      H ? m = Le(() => e.treeMate, () => {
        e.resetMenuOnOptionsChange ? (e.autoPending ? h() : p(), mt($)) : p();
      }, {
        immediate: !0
      }) : m == null || m();
    }, {
      immediate: !0
    }), Ct(() => {
      m == null || m();
    });
    const v = P(() => kn(i.value.self[J("optionHeight", e.size)])), g = P(() => Xt(i.value.self[J("padding", e.size)])), x = P(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), b = P(() => {
      const H = d.value;
      return H && H.length === 0;
    });
    function y(H) {
      const {
        onToggle: G
      } = e;
      G && G(H);
    }
    function B(H) {
      const {
        onScroll: G
      } = e;
      G && G(H);
    }
    function w(H) {
      var G;
      (G = s.value) === null || G === void 0 || G.sync(), B(H);
    }
    function S() {
      var H;
      (H = s.value) === null || H === void 0 || H.sync();
    }
    function F() {
      const {
        value: H
      } = c;
      return H || null;
    }
    function C(H, G) {
      G.disabled || A(G, !1);
    }
    function z(H, G) {
      G.disabled || y(G);
    }
    function E(H) {
      var G;
      Ot(H, "action") || (G = e.onKeyup) === null || G === void 0 || G.call(e, H);
    }
    function D(H) {
      var G;
      Ot(H, "action") || (G = e.onKeydown) === null || G === void 0 || G.call(e, H);
    }
    function K(H) {
      var G;
      (G = e.onMousedown) === null || G === void 0 || G.call(e, H), !e.focusable && H.preventDefault();
    }
    function O() {
      const {
        value: H
      } = c;
      H && A(H.getNext({
        loop: !0
      }), !0);
    }
    function n() {
      const {
        value: H
      } = c;
      H && A(H.getPrev({
        loop: !0
      }), !0);
    }
    function A(H, G = !1) {
      c.value = H, G && $();
    }
    function $() {
      var H, G;
      const Y = c.value;
      if (!Y) return;
      const ie = u.value(Y.key);
      ie !== null && (e.virtualScroll ? (H = l.value) === null || H === void 0 || H.scrollTo({
        index: ie
      }) : (G = s.value) === null || G === void 0 || G.scrollTo({
        index: ie,
        elSize: v.value
      }));
    }
    function L(H) {
      var G, Y;
      !((G = a.value) === null || G === void 0) && G.contains(H.target) && ((Y = e.onFocus) === null || Y === void 0 || Y.call(e, H));
    }
    function I(H) {
      var G, Y;
      !((G = a.value) === null || G === void 0) && G.contains(H.relatedTarget) || (Y = e.onBlur) === null || Y === void 0 || Y.call(e, H);
    }
    $e(Aa, {
      handleOptionMouseEnter: C,
      handleOptionClick: z,
      valueSetRef: x,
      pendingTmNodeRef: c,
      nodePropsRef: oe(e, "nodeProps"),
      showCheckmarkRef: oe(e, "showCheckmark"),
      multipleRef: oe(e, "multiple"),
      valueRef: oe(e, "value"),
      renderLabelRef: oe(e, "renderLabel"),
      renderOptionRef: oe(e, "renderOption"),
      labelFieldRef: oe(e, "labelField"),
      valueFieldRef: oe(e, "valueField")
    }), $e(Fd, a), Ft(() => {
      const {
        value: H
      } = s;
      H && H.sync();
    });
    const V = P(() => {
      const {
        size: H
      } = e, {
        common: {
          cubicBezierEaseInOut: G
        },
        self: {
          height: Y,
          borderRadius: ie,
          color: le,
          groupHeaderTextColor: fe,
          actionDividerColor: Se,
          optionTextColorPressed: U,
          optionTextColor: de,
          optionTextColorDisabled: Fe,
          optionTextColorActive: me,
          optionOpacityDisabled: Re,
          optionCheckColor: Pe,
          actionTextColor: nt,
          optionColorPending: Ge,
          optionColorActive: at,
          loadingColor: lt,
          loadingSize: xe,
          optionColorActivePending: be,
          [J("optionFontSize", H)]: Ae,
          [J("optionHeight", H)]: Me,
          [J("optionPadding", H)]: Ve
        }
      } = i.value;
      return {
        "--n-height": Y,
        "--n-action-divider-color": Se,
        "--n-action-text-color": nt,
        "--n-bezier": G,
        "--n-border-radius": ie,
        "--n-color": le,
        "--n-option-font-size": Ae,
        "--n-group-header-text-color": fe,
        "--n-option-check-color": Pe,
        "--n-option-color-pending": Ge,
        "--n-option-color-active": at,
        "--n-option-color-active-pending": be,
        "--n-option-height": Me,
        "--n-option-opacity-disabled": Re,
        "--n-option-text-color": de,
        "--n-option-text-color-active": me,
        "--n-option-text-color-disabled": Fe,
        "--n-option-text-color-pressed": U,
        "--n-option-padding": Ve,
        "--n-option-padding-left": Xt(Ve, "left"),
        "--n-option-padding-right": Xt(Ve, "right"),
        "--n-loading-color": lt,
        "--n-loading-size": xe
      };
    }), {
      inlineThemeDisabled: te
    } = e, X = te ? Ue("internal-select-menu", P(() => e.size[0]), V, e) : void 0, q = {
      selfRef: a,
      next: O,
      prev: n,
      getPendingTmNode: F
    };
    return Kd(a, e.onResize), Object.assign({
      mergedTheme: i,
      mergedClsPrefix: t,
      rtlEnabled: o,
      virtualListRef: l,
      scrollbarRef: s,
      itemSize: v,
      padding: g,
      flattenedNodes: d,
      empty: b,
      virtualListContainer() {
        const {
          value: H
        } = l;
        return H == null ? void 0 : H.listElRef;
      },
      virtualListContent() {
        const {
          value: H
        } = l;
        return H == null ? void 0 : H.itemsElRef;
      },
      doScroll: B,
      handleFocusin: L,
      handleFocusout: I,
      handleKeyUp: E,
      handleKeyDown: D,
      handleMouseDown: K,
      handleVirtualListResize: S,
      handleVirtualListScroll: w,
      cssVars: te ? void 0 : V,
      themeClass: X == null ? void 0 : X.themeClass,
      onRender: X == null ? void 0 : X.onRender
    }, q);
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
    }, tt(e.header, (l) => l && f("div", {
      class: `${r}-base-select-menu__header`,
      "data-header": !0,
      key: "header"
    }, l)), this.loading ? f("div", {
      class: `${r}-base-select-menu__loading`
    }, f(tr, {
      clsPrefix: r,
      strokeWidth: 20
    })) : this.empty ? f("div", {
      class: `${r}-base-select-menu__empty`,
      "data-empty": !0
    }, Lt(e.empty, () => [f(Cr, {
      theme: o.peers.Empty,
      themeOverrides: o.peerOverrides.Empty,
      size: this.size
    })])) : f(nr, {
      ref: "scrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: t ? this.virtualListContainer : void 0,
      content: t ? this.virtualListContent : void 0,
      onScroll: t ? void 0 : this.doScroll
    }, {
      default: () => t ? f(Ia, {
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
        }) => l.isGroup ? f(Is, {
          key: l.key,
          clsPrefix: r,
          tmNode: l
        }) : l.ignored ? null : f(_s, {
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
      }, this.flattenedNodes.map((l) => l.isGroup ? f(Is, {
        key: l.key,
        clsPrefix: r,
        tmNode: l
      }) : f(_s, {
        clsPrefix: r,
        key: l.key,
        tmNode: l
      })))
    }), tt(e.action, (l) => l && [f("div", {
      class: `${r}-base-select-menu__action`,
      "data-action": !0,
      key: "action"
    }, l), f(pb, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
}), r1 = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function o1(e) {
  const {
    boxShadow2: t,
    popoverColor: r,
    textColor2: o,
    borderRadius: i,
    fontSize: a,
    dividerColor: l
  } = e;
  return Object.assign(Object.assign({}, r1), {
    fontSize: a,
    borderRadius: i,
    color: r,
    dividerColor: l,
    textColor: o,
    boxShadow: t
  });
}
const rr = {
  name: "Popover",
  common: qe,
  self: o1
}, Li = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, xt = "var(--n-arrow-height) * 1.414", i1 = T([R("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [T(">", [R("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Ye("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [Ye("scrollable", [Ye("show-header-or-footer", "padding: var(--n-padding);")])]), M("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), M("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), N("scrollable, show-header-or-footer", [M("content", `
 padding: var(--n-padding);
 `)])]), R("popover-shared", `
 transform-origin: inherit;
 `, [
  R("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [R("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${xt});
 height: calc(${xt});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]),
  // body transition
  T("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  T("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  T("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  T("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), Wt("top-start", `
 top: calc(${xt} / -2);
 left: calc(${vn("top-start")} - var(--v-offset-left));
 `), Wt("top", `
 top: calc(${xt} / -2);
 transform: translateX(calc(${xt} / -2)) rotate(45deg);
 left: 50%;
 `), Wt("top-end", `
 top: calc(${xt} / -2);
 right: calc(${vn("top-end")} + var(--v-offset-left));
 `), Wt("bottom-start", `
 bottom: calc(${xt} / -2);
 left: calc(${vn("bottom-start")} - var(--v-offset-left));
 `), Wt("bottom", `
 bottom: calc(${xt} / -2);
 transform: translateX(calc(${xt} / -2)) rotate(45deg);
 left: 50%;
 `), Wt("bottom-end", `
 bottom: calc(${xt} / -2);
 right: calc(${vn("bottom-end")} + var(--v-offset-left));
 `), Wt("left-start", `
 left: calc(${xt} / -2);
 top: calc(${vn("left-start")} - var(--v-offset-top));
 `), Wt("left", `
 left: calc(${xt} / -2);
 transform: translateY(calc(${xt} / -2)) rotate(45deg);
 top: 50%;
 `), Wt("left-end", `
 left: calc(${xt} / -2);
 bottom: calc(${vn("left-end")} + var(--v-offset-top));
 `), Wt("right-start", `
 right: calc(${xt} / -2);
 top: calc(${vn("right-start")} - var(--v-offset-top));
 `), Wt("right", `
 right: calc(${xt} / -2);
 transform: translateY(calc(${xt} / -2)) rotate(45deg);
 top: 50%;
 `), Wt("right-end", `
 right: calc(${xt} / -2);
 bottom: calc(${vn("right-end")} + var(--v-offset-top));
 `), ...Jx({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, t) => {
  const r = ["right", "left"].includes(t), o = r ? "width" : "height";
  return e.map((i) => {
    const a = i.split("-")[1] === "end", s = `calc((${`var(--v-target-${o}, 0px)`} - ${xt}) / 2)`, d = vn(i);
    return T(`[v-placement="${i}"] >`, [R("popover-shared", [N("center-arrow", [R("popover-arrow", `${t}: calc(max(${s}, ${d}) ${a ? "+" : "-"} var(--v-offset-${r ? "left" : "top"}));`)])])]);
  });
})]);
function vn(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function Wt(e, t) {
  const r = e.split("-")[0], o = ["top", "bottom"].includes(r) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return T(`[v-placement="${e}"] >`, [R("popover-shared", `
 margin-${Li[r]}: var(--n-space);
 `, [N("show-arrow", `
 margin-${Li[r]}: var(--n-space-arrow);
 `), N("overlap", `
 margin: 0;
 `), Uf("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${Li[r]}: auto;
 ${o}
 `, [R("popover-arrow", t)])])]);
}
const zu = Object.assign(Object.assign({}, ve.props), {
  to: dn.propTo,
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
function Eu({
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
const a1 = ee({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: zu,
  setup(e, {
    slots: t,
    attrs: r
  }) {
    const {
      namespaceRef: o,
      mergedClsPrefixRef: i,
      inlineThemeDisabled: a
    } = ze(e), l = ve("Popover", "-popover", i1, rr, e, i), s = _(null), d = pe("NPopover"), u = _(null), c = _(e.show), h = _(!1);
    Qe(() => {
      const {
        show: C
      } = e;
      C && !c0() && !e.internalDeactivateImmediately && (h.value = !0);
    });
    const p = P(() => {
      const {
        trigger: C,
        onClickoutside: z
      } = e, E = [], {
        positionManuallyRef: {
          value: D
        }
      } = d;
      return D || (C === "click" && !z && E.push([Zr, w, void 0, {
        capture: !0
      }]), C === "hover" && E.push([wh, B])), z && E.push([Zr, w, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && h.value) && E.push([vr, e.show]), E;
    }), m = P(() => {
      const {
        common: {
          cubicBezierEaseInOut: C,
          cubicBezierEaseIn: z,
          cubicBezierEaseOut: E
        },
        self: {
          space: D,
          spaceArrow: K,
          padding: O,
          fontSize: n,
          textColor: A,
          dividerColor: $,
          color: L,
          boxShadow: I,
          borderRadius: V,
          arrowHeight: te,
          arrowOffset: X,
          arrowOffsetVertical: q
        }
      } = l.value;
      return {
        "--n-box-shadow": I,
        "--n-bezier": C,
        "--n-bezier-ease-in": z,
        "--n-bezier-ease-out": E,
        "--n-font-size": n,
        "--n-text-color": A,
        "--n-color": L,
        "--n-divider-color": $,
        "--n-border-radius": V,
        "--n-arrow-height": te,
        "--n-arrow-offset": X,
        "--n-arrow-offset-vertical": q,
        "--n-padding": O,
        "--n-space": D,
        "--n-space-arrow": K
      };
    }), v = P(() => {
      const C = e.width === "trigger" ? void 0 : vt(e.width), z = [];
      C && z.push({
        width: C
      });
      const {
        maxWidth: E,
        minWidth: D
      } = e;
      return E && z.push({
        maxWidth: vt(E)
      }), D && z.push({
        maxWidth: vt(D)
      }), a || z.push(m.value), z;
    }), g = a ? Ue("popover", void 0, m, e) : void 0;
    d.setBodyInstance({
      syncPosition: x
    }), Ct(() => {
      d.setBodyInstance(null);
    }), Le(oe(e, "show"), (C) => {
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
    function B(C) {
      e.trigger === "hover" && !S().contains(mr(C)) && d.handleMouseMoveOutside(C);
    }
    function w(C) {
      (e.trigger === "click" && !S().contains(mr(C)) || e.onClickoutside) && d.handleClickOutside(C);
    }
    function S() {
      return d.getTriggerElement();
    }
    $e(ao, u), $e(ti, null), $e(ni, null);
    function F() {
      if (g == null || g.onRender(), !(e.displayDirective === "show" || e.show || e.animated && h.value))
        return null;
      let z;
      const E = d.internalRenderBodyRef.value, {
        value: D
      } = i;
      if (E)
        z = E(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${D}-popover-shared`, g == null ? void 0 : g.themeClass.value, e.overlap && `${D}-popover-shared--overlap`, e.showArrow && `${D}-popover-shared--show-arrow`, e.arrowPointToCenter && `${D}-popover-shared--center-arrow`],
          u,
          v.value,
          b,
          y
        );
      else {
        const {
          value: K
        } = d.extraClassRef, {
          internalTrapFocus: O
        } = e, n = !ea(t.header) || !ea(t.footer), A = () => {
          var $, L;
          const I = n ? f(ht, null, tt(t.header, (X) => X ? f("div", {
            class: [`${D}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, X) : null), tt(t.default, (X) => X ? f("div", {
            class: [`${D}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t) : null), tt(t.footer, (X) => X ? f("div", {
            class: [`${D}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, X) : null)) : e.scrollable ? ($ = t.default) === null || $ === void 0 ? void 0 : $.call(t) : f("div", {
            class: [`${D}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t), V = e.scrollable ? f(Ru, {
            contentClass: n ? void 0 : `${D}-popover__content ${(L = e.contentClass) !== null && L !== void 0 ? L : ""}`,
            contentStyle: n ? void 0 : e.contentStyle
          }, {
            default: () => I
          }) : I, te = e.showArrow ? Eu({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: D
          }) : null;
          return [V, te];
        };
        z = f("div", Yt({
          class: [`${D}-popover`, `${D}-popover-shared`, g == null ? void 0 : g.themeClass.value, K.map(($) => `${D}-${$}`), {
            [`${D}-popover--scrollable`]: e.scrollable,
            [`${D}-popover--show-header-or-footer`]: n,
            [`${D}-popover--raw`]: e.raw,
            [`${D}-popover-shared--overlap`]: e.overlap,
            [`${D}-popover-shared--show-arrow`]: e.showArrow,
            [`${D}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: u,
          style: v.value,
          onKeydown: d.handleKeydown,
          onMouseenter: b,
          onMouseleave: y
        }, r), O ? f(Vd, {
          active: e.show,
          autoFocus: !0
        }, {
          default: A
        }) : A());
      }
      return ln(z, p.value);
    }
    return {
      displayed: h,
      namespace: o,
      isMounted: d.isMountedRef,
      zIndex: d.zIndexRef,
      followerRef: s,
      adjustedTo: dn(e),
      followerEnabled: c,
      renderContentNode: F
    };
  },
  render() {
    return f(Oa, {
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
      teleportDisabled: this.adjustedTo === dn.tdkey
    }, {
      default: () => this.animated ? f(zt, {
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
}), l1 = Object.keys(zu), s1 = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function d1(e, t, r) {
  s1[t].forEach((o) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const i = e.props[o], a = r[o];
    i ? e.props[o] = (...l) => {
      i(...l), a(...l);
    } : e.props[o] = a;
  });
}
const Un = {
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
  to: dn.propTo,
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
}, u1 = Object.assign(Object.assign(Object.assign({}, ve.props), Un), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), or = ee({
  name: "Popover",
  inheritAttrs: !1,
  props: u1,
  __popover__: !0,
  setup(e) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      e.maxWidth !== void 0 && it("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && it("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && it("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && it("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && it("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const t = Br(), r = _(null), o = P(() => e.show), i = _(e.defaultShow), a = Et(o, i), l = je(() => e.disabled ? !1 : a.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: $
      } = e;
      return !!($ != null && $());
    }, d = () => s() ? !1 : a.value, u = Pa(e, ["arrow", "showArrow"]), c = P(() => e.overlap ? !1 : u.value);
    let h = null;
    const p = _(null), m = _(null), v = je(() => e.x !== void 0 && e.y !== void 0);
    function g($) {
      const {
        "onUpdate:show": L,
        onUpdateShow: I,
        onShow: V,
        onHide: te
      } = e;
      i.value = $, L && ne(L, $), I && ne(I, $), $ && V && ne(V, !0), $ && te && ne(te, !1);
    }
    function x() {
      h && h.syncPosition();
    }
    function b() {
      const {
        value: $
      } = p;
      $ && (window.clearTimeout($), p.value = null);
    }
    function y() {
      const {
        value: $
      } = m;
      $ && (window.clearTimeout($), m.value = null);
    }
    function B() {
      const $ = s();
      if (e.trigger === "focus" && !$) {
        if (d()) return;
        g(!0);
      }
    }
    function w() {
      const $ = s();
      if (e.trigger === "focus" && !$) {
        if (!d()) return;
        g(!1);
      }
    }
    function S() {
      const $ = s();
      if (e.trigger === "hover" && !$) {
        if (y(), p.value !== null || d()) return;
        const L = () => {
          g(!0), p.value = null;
        }, {
          delay: I
        } = e;
        I === 0 ? L() : p.value = window.setTimeout(L, I);
      }
    }
    function F() {
      const $ = s();
      if (e.trigger === "hover" && !$) {
        if (b(), m.value !== null || !d()) return;
        const L = () => {
          g(!1), m.value = null;
        }, {
          duration: I
        } = e;
        I === 0 ? L() : m.value = window.setTimeout(L, I);
      }
    }
    function C() {
      F();
    }
    function z($) {
      var L;
      d() && (e.trigger === "click" && (b(), y(), g(!1)), (L = e.onClickoutside) === null || L === void 0 || L.call(e, $));
    }
    function E() {
      if (e.trigger === "click" && !s()) {
        b(), y();
        const $ = !d();
        g($);
      }
    }
    function D($) {
      e.internalTrapFocus && $.key === "Escape" && (b(), y(), g(!1));
    }
    function K($) {
      i.value = $;
    }
    function O() {
      var $;
      return ($ = r.value) === null || $ === void 0 ? void 0 : $.targetRef;
    }
    function n($) {
      h = $;
    }
    return $e("NPopover", {
      getTriggerElement: O,
      handleKeydown: D,
      handleMouseEnter: S,
      handleMouseLeave: F,
      handleClickOutside: z,
      handleMouseMoveOutside: C,
      setBodyInstance: n,
      positionManuallyRef: v,
      isMountedRef: t,
      zIndexRef: oe(e, "zIndex"),
      extraClassRef: oe(e, "internalExtraClass"),
      internalRenderBodyRef: oe(e, "internalRenderBody")
    }), Qe(() => {
      a.value && s() && g(!1);
    }), {
      binderInstRef: r,
      positionManually: v,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: i,
      mergedShowArrow: c,
      getMergedShow: d,
      setShow: K,
      handleClick: E,
      handleMouseEnter: S,
      handleMouseLeave: F,
      handleFocus: B,
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
    if (!t && (r.activator ? o = Ji(r, "activator") : o = Ji(r, "trigger"), o)) {
      o = cd(o), o = o.type === pf ? f("span", [o]) : o;
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
        d1(o, l ? "nested" : t ? "manual" : this.trigger, d);
      }
    }
    return f(za, {
      ref: "binderInstRef",
      syncTarget: !i,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const a = this.getMergedShow();
        return [this.internalTrapFocus && a ? ln(f("div", {
          style: {
            position: "fixed",
            inset: 0
          }
        }), [[Da, {
          enabled: a,
          zIndex: this.zIndex
        }]]) : null, t ? null : f(Ea, null, {
          default: () => o
        }), f(a1, gn(this.$props, l1, Object.assign(Object.assign({}, this.$attrs), {
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
}), c1 = {
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
function f1(e) {
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
    opacityDisabled: h,
    tagColor: p,
    closeIconColor: m,
    closeIconColorHover: v,
    closeIconColorPressed: g,
    borderRadiusSmall: x,
    fontSizeMini: b,
    fontSizeTiny: y,
    fontSizeSmall: B,
    fontSizeMedium: w,
    heightMini: S,
    heightTiny: F,
    heightSmall: C,
    heightMedium: z,
    closeColorHover: E,
    closeColorPressed: D,
    buttonColor2Hover: K,
    buttonColor2Pressed: O,
    fontWeightStrong: n
  } = e;
  return Object.assign(Object.assign({}, c1), {
    closeBorderRadius: x,
    heightTiny: S,
    heightSmall: F,
    heightMedium: C,
    heightLarge: z,
    borderRadius: x,
    opacityDisabled: h,
    fontSizeTiny: b,
    fontSizeSmall: y,
    fontSizeMedium: B,
    fontSizeLarge: w,
    fontWeightStrong: n,
    // checked
    textColorCheckable: t,
    textColorHoverCheckable: t,
    textColorPressedCheckable: t,
    textColorChecked: u,
    colorCheckable: "#0000",
    colorHoverCheckable: K,
    colorPressedCheckable: O,
    colorChecked: i,
    colorCheckedHover: r,
    colorCheckedPressed: o,
    // default
    border: `1px solid ${c}`,
    textColor: t,
    color: p,
    colorBordered: "rgb(250, 250, 252)",
    closeIconColor: m,
    closeIconColorHover: v,
    closeIconColorPressed: g,
    closeColorHover: E,
    closeColorPressed: D,
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
const h1 = {
  name: "Tag",
  common: qe,
  self: f1
}, v1 = {
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
}, p1 = R("tag", `
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
 `, [Ye("disabled", [T("&:hover", "background-color: var(--n-color-hover-checkable);", [Ye("checked", "color: var(--n-text-color-hover-checkable);")]), T("&:active", "background-color: var(--n-color-pressed-checkable);", [Ye("checked", "color: var(--n-text-color-pressed-checkable);")])]), N("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [Ye("disabled", [T("&:hover", "background-color: var(--n-color-checked-hover);"), T("&:active", "background-color: var(--n-color-checked-pressed);")])])])]), g1 = Object.assign(Object.assign(Object.assign({}, ve.props), v1), {
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
}), m1 = "n-tag", Ni = ee({
  name: "Tag",
  props: g1,
  setup(e) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      e.onCheckedChange !== void 0 && it("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
    });
    const t = _(null), {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = ze(e), l = ve("Tag", "-tag", p1, h1, e, o);
    $e(m1, {
      roundRef: oe(e, "round")
    });
    function s() {
      if (!e.disabled && e.checkable) {
        const {
          checked: m,
          onCheckedChange: v,
          onUpdateChecked: g,
          "onUpdate:checked": x
        } = e;
        g && g(!m), x && x(!m), v && v(!m);
      }
    }
    function d(m) {
      if (e.triggerClickOnClose || m.stopPropagation(), !e.disabled) {
        const {
          onClose: v
        } = e;
        v && ne(v, m);
      }
    }
    const u = {
      setTextContent(m) {
        const {
          value: v
        } = t;
        v && (v.textContent = m);
      }
    }, c = wt("Tag", a, o), h = P(() => {
      const {
        type: m,
        size: v,
        color: {
          color: g,
          textColor: x
        } = {}
      } = e, {
        common: {
          cubicBezierEaseInOut: b
        },
        self: {
          padding: y,
          closeMargin: B,
          borderRadius: w,
          opacityDisabled: S,
          textColorCheckable: F,
          textColorHoverCheckable: C,
          textColorPressedCheckable: z,
          textColorChecked: E,
          colorCheckable: D,
          colorHoverCheckable: K,
          colorPressedCheckable: O,
          colorChecked: n,
          colorCheckedHover: A,
          colorCheckedPressed: $,
          closeBorderRadius: L,
          fontWeightStrong: I,
          [J("colorBordered", m)]: V,
          [J("closeSize", v)]: te,
          [J("closeIconSize", v)]: X,
          [J("fontSize", v)]: q,
          [J("height", v)]: H,
          [J("color", m)]: G,
          [J("textColor", m)]: Y,
          [J("border", m)]: ie,
          [J("closeIconColor", m)]: le,
          [J("closeIconColorHover", m)]: fe,
          [J("closeIconColorPressed", m)]: Se,
          [J("closeColorHover", m)]: U,
          [J("closeColorPressed", m)]: de
        }
      } = l.value, Fe = Xt(B);
      return {
        "--n-font-weight-strong": I,
        "--n-avatar-size-override": `calc(${H} - 8px)`,
        "--n-bezier": b,
        "--n-border-radius": w,
        "--n-border": ie,
        "--n-close-icon-size": X,
        "--n-close-color-pressed": de,
        "--n-close-color-hover": U,
        "--n-close-border-radius": L,
        "--n-close-icon-color": le,
        "--n-close-icon-color-hover": fe,
        "--n-close-icon-color-pressed": Se,
        "--n-close-icon-color-disabled": le,
        "--n-close-margin-top": Fe.top,
        "--n-close-margin-right": Fe.right,
        "--n-close-margin-bottom": Fe.bottom,
        "--n-close-margin-left": Fe.left,
        "--n-close-size": te,
        "--n-color": g || (r.value ? V : G),
        "--n-color-checkable": D,
        "--n-color-checked": n,
        "--n-color-checked-hover": A,
        "--n-color-checked-pressed": $,
        "--n-color-hover-checkable": K,
        "--n-color-pressed-checkable": O,
        "--n-font-size": q,
        "--n-height": H,
        "--n-opacity-disabled": S,
        "--n-padding": y,
        "--n-text-color": x || Y,
        "--n-text-color-checkable": F,
        "--n-text-color-checked": E,
        "--n-text-color-hover-checkable": C,
        "--n-text-color-pressed-checkable": z
      };
    }), p = i ? Ue("tag", P(() => {
      let m = "";
      const {
        type: v,
        size: g,
        color: {
          color: x,
          textColor: b
        } = {}
      } = e;
      return m += v[0], m += g[0], x && (m += `a${No(x)}`), b && (m += `b${No(b)}`), r.value && (m += "c"), m;
    }), h, e) : void 0;
    return Object.assign(Object.assign({}, u), {
      rtlEnabled: c,
      mergedClsPrefix: o,
      contentRef: t,
      mergedBordered: r,
      handleClick: s,
      handleCloseClick: d,
      cssVars: i ? void 0 : h,
      themeClass: p == null ? void 0 : p.themeClass,
      onRender: p == null ? void 0 : p.onRender
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
    const u = tt(d.avatar, (h) => h && f("div", {
      class: `${r}-tag__avatar`
    }, h)), c = tt(d.icon, (h) => h && f("div", {
      class: `${r}-tag__icon`
    }, h));
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
    }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)), !this.checkable && i ? f(so, {
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
}), Du = ee({
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
      return f(tr, {
        clsPrefix: r,
        class: `${r}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? f(ca, {
          clsPrefix: r,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => f(ft, {
            clsPrefix: r,
            class: `${r}-base-suffix__arrow`
          }, {
            default: () => Lt(t.default, () => [f(ku, null)])
          })
        }) : null
      });
    };
  }
}), x1 = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
function b1(e) {
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
    errorColorHover: h,
    borderColor: p,
    iconColor: m,
    iconColorDisabled: v,
    clearColor: g,
    clearColorHover: x,
    clearColorPressed: b,
    placeholderColor: y,
    placeholderColorDisabled: B,
    fontSizeTiny: w,
    fontSizeSmall: S,
    fontSizeMedium: F,
    fontSizeLarge: C,
    heightTiny: z,
    heightSmall: E,
    heightMedium: D,
    heightLarge: K,
    fontWeight: O
  } = e;
  return Object.assign(Object.assign({}, x1), {
    fontSizeTiny: w,
    fontSizeSmall: S,
    fontSizeMedium: F,
    fontSizeLarge: C,
    heightTiny: z,
    heightSmall: E,
    heightMedium: D,
    heightLarge: K,
    borderRadius: t,
    fontWeight: O,
    // default
    textColor: r,
    textColorDisabled: o,
    placeholderColor: y,
    placeholderColorDisabled: B,
    color: i,
    colorDisabled: a,
    colorActive: i,
    border: `1px solid ${p}`,
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
    arrowColorDisabled: v,
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
    borderHoverError: `1px solid ${h}`,
    borderActiveError: `1px solid ${c}`,
    borderFocusError: `1px solid ${h}`,
    boxShadowHoverError: "none",
    boxShadowActiveError: `0 0 0 2px ${Ee(c, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${Ee(c, {
      alpha: 0.2
    })}`,
    colorActiveError: i,
    caretColorError: c,
    clearColor: g,
    clearColorHover: x,
    clearColorPressed: b
  });
}
const Tu = {
  name: "InternalSelection",
  common: qe,
  peers: {
    Popover: rr
  },
  self: b1
}, C1 = T([R("base-selection", `
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
 `, [R("base-loading", `
 color: var(--n-loading-color);
 `), R("base-selection-tags", "min-height: var(--n-height);"), M("border, state-border", `
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
 `), R("base-suffix", `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [M("arrow", `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), R("base-selection-overlay", `
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
 `)]), R("base-selection-placeholder", `
 color: var(--n-placeholder-color);
 `, [M("inner", `
 max-width: 100%;
 overflow: hidden;
 `)]), R("base-selection-tags", `
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
 `), R("base-selection-label", `
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
 `, [R("base-selection-input", `
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
 `)]), Ye("disabled", [T("&:hover", [M("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), N("focus", [M("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), N("active", [M("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), R("base-selection-label", "background-color: var(--n-color-active);"), R("base-selection-tags", "background-color: var(--n-color-active);")])]), N("disabled", "cursor: not-allowed;", [M("arrow", `
 color: var(--n-arrow-color-disabled);
 `), R("base-selection-label", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [R("base-selection-input", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), M("render-label", `
 color: var(--n-text-color-disabled);
 `)]), R("base-selection-tags", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), R("base-selection-placeholder", `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), R("base-selection-input-tag", `
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
 `)]), ["warning", "error"].map((e) => N(`${e}-status`, [M("state-border", `border: var(--n-border-${e});`), Ye("disabled", [T("&:hover", [M("state-border", `
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]), N("active", [M("state-border", `
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `), R("base-selection-label", `background-color: var(--n-color-active-${e});`), R("base-selection-tags", `background-color: var(--n-color-active-${e});`)]), N("focus", [M("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]), R("base-selection-popover", `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), R("base-selection-tag-wrapper", `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [T("&:last-child", "padding-right: 0;"), R("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [M("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]), y1 = ee({
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
    } = ze(e), o = wt("InternalSelection", r, t), i = _(null), a = _(null), l = _(null), s = _(null), d = _(null), u = _(null), c = _(null), h = _(null), p = _(null), m = _(null), v = _(!1), g = _(!1), x = _(!1), b = ve("InternalSelection", "-internal-selection", C1, Tu, e, oe(e, "clsPrefix")), y = P(() => e.clearable && !e.disabled && (x.value || e.active)), B = P(() => e.selectedOption ? e.renderTag ? e.renderTag({
      option: e.selectedOption,
      handleClose: () => {
      }
    }) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : dt(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder), w = P(() => {
      const re = e.selectedOption;
      if (re)
        return re[e.labelField];
    }), S = P(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length) : e.selectedOption !== null);
    function F() {
      var re;
      const {
        value: ce
      } = i;
      if (ce) {
        const {
          value: De
        } = a;
        De && (De.style.width = `${ce.offsetWidth}px`, e.maxTagCount !== "responsive" && ((re = p.value) === null || re === void 0 || re.sync({
          showAllItemsBeforeCalculate: !1
        })));
      }
    }
    function C() {
      const {
        value: re
      } = m;
      re && (re.style.display = "none");
    }
    function z() {
      const {
        value: re
      } = m;
      re && (re.style.display = "inline-block");
    }
    Le(oe(e, "active"), (re) => {
      re || C();
    }), Le(oe(e, "pattern"), () => {
      e.multiple && mt(F);
    });
    function E(re) {
      const {
        onFocus: ce
      } = e;
      ce && ce(re);
    }
    function D(re) {
      const {
        onBlur: ce
      } = e;
      ce && ce(re);
    }
    function K(re) {
      const {
        onDeleteOption: ce
      } = e;
      ce && ce(re);
    }
    function O(re) {
      const {
        onClear: ce
      } = e;
      ce && ce(re);
    }
    function n(re) {
      const {
        onPatternInput: ce
      } = e;
      ce && ce(re);
    }
    function A(re) {
      var ce;
      (!re.relatedTarget || !(!((ce = l.value) === null || ce === void 0) && ce.contains(re.relatedTarget))) && E(re);
    }
    function $(re) {
      var ce;
      !((ce = l.value) === null || ce === void 0) && ce.contains(re.relatedTarget) || D(re);
    }
    function L(re) {
      O(re);
    }
    function I() {
      x.value = !0;
    }
    function V() {
      x.value = !1;
    }
    function te(re) {
      !e.active || !e.filterable || re.target !== a.value && re.preventDefault();
    }
    function X(re) {
      K(re);
    }
    const q = _(!1);
    function H(re) {
      if (re.key === "Backspace" && !q.value && !e.pattern.length) {
        const {
          selectedOptions: ce
        } = e;
        ce != null && ce.length && X(ce[ce.length - 1]);
      }
    }
    let G = null;
    function Y(re) {
      const {
        value: ce
      } = i;
      if (ce) {
        const De = re.target.value;
        ce.textContent = De, F();
      }
      e.ignoreComposition && q.value ? G = re : n(re);
    }
    function ie() {
      q.value = !0;
    }
    function le() {
      q.value = !1, e.ignoreComposition && n(G), G = null;
    }
    function fe(re) {
      var ce;
      g.value = !0, (ce = e.onPatternFocus) === null || ce === void 0 || ce.call(e, re);
    }
    function Se(re) {
      var ce;
      g.value = !1, (ce = e.onPatternBlur) === null || ce === void 0 || ce.call(e, re);
    }
    function U() {
      var re, ce;
      if (e.filterable)
        g.value = !1, (re = u.value) === null || re === void 0 || re.blur(), (ce = a.value) === null || ce === void 0 || ce.blur();
      else if (e.multiple) {
        const {
          value: De
        } = s;
        De == null || De.blur();
      } else {
        const {
          value: De
        } = d;
        De == null || De.blur();
      }
    }
    function de() {
      var re, ce, De;
      e.filterable ? (g.value = !1, (re = u.value) === null || re === void 0 || re.focus()) : e.multiple ? (ce = s.value) === null || ce === void 0 || ce.focus() : (De = d.value) === null || De === void 0 || De.focus();
    }
    function Fe() {
      const {
        value: re
      } = a;
      re && (z(), re.focus());
    }
    function me() {
      const {
        value: re
      } = a;
      re && re.blur();
    }
    function Re(re) {
      const {
        value: ce
      } = c;
      ce && ce.setTextContent(`+${re}`);
    }
    function Pe() {
      const {
        value: re
      } = h;
      return re;
    }
    function nt() {
      return a.value;
    }
    let Ge = null;
    function at() {
      Ge !== null && window.clearTimeout(Ge);
    }
    function lt() {
      e.active || (at(), Ge = window.setTimeout(() => {
        S.value && (v.value = !0);
      }, 100));
    }
    function xe() {
      at();
    }
    function be(re) {
      re || (at(), v.value = !1);
    }
    Le(S, (re) => {
      re || (v.value = !1);
    }), Ft(() => {
      Qe(() => {
        const re = u.value;
        re && (e.disabled ? re.removeAttribute("tabindex") : re.tabIndex = g.value ? -1 : 0);
      });
    }), Kd(l, e.onResize);
    const {
      inlineThemeDisabled: Ae
    } = e, Me = P(() => {
      const {
        size: re
      } = e, {
        common: {
          cubicBezierEaseInOut: ce
        },
        self: {
          fontWeight: De,
          borderRadius: rt,
          color: St,
          placeholderColor: Bt,
          textColor: ut,
          paddingSingle: Ze,
          paddingMultiple: pt,
          caretColor: Xe,
          colorDisabled: ue,
          textColorDisabled: Be,
          placeholderColorDisabled: k,
          colorActive: W,
          boxShadowFocus: Z,
          boxShadowActive: ae,
          boxShadowHover: se,
          border: he,
          borderFocus: ge,
          borderHover: we,
          borderActive: Ie,
          arrowColor: Je,
          arrowColorDisabled: Ne,
          loadingColor: Dt,
          // form warning
          colorActiveWarning: Mt,
          boxShadowFocusWarning: It,
          boxShadowActiveWarning: Nt,
          boxShadowHoverWarning: Ht,
          borderWarning: Qt,
          borderFocusWarning: jt,
          borderHoverWarning: j,
          borderActiveWarning: Q,
          // form error
          colorActiveError: ye,
          boxShadowFocusError: Te,
          boxShadowActiveError: Ke,
          boxShadowHoverError: _e,
          borderError: st,
          borderFocusError: ct,
          borderHoverError: Ut,
          borderActiveError: cn,
          // clear
          clearColor: fn,
          clearColorHover: Tn,
          clearColorPressed: Ar,
          clearSize: $r,
          // arrow
          arrowSize: zr,
          [J("height", re)]: Er,
          [J("fontSize", re)]: Dr
        }
      } = b.value, bn = Xt(Ze), Cn = Xt(pt);
      return {
        "--n-bezier": ce,
        "--n-border": he,
        "--n-border-active": Ie,
        "--n-border-focus": ge,
        "--n-border-hover": we,
        "--n-border-radius": rt,
        "--n-box-shadow-active": ae,
        "--n-box-shadow-focus": Z,
        "--n-box-shadow-hover": se,
        "--n-caret-color": Xe,
        "--n-color": St,
        "--n-color-active": W,
        "--n-color-disabled": ue,
        "--n-font-size": Dr,
        "--n-height": Er,
        "--n-padding-single-top": bn.top,
        "--n-padding-multiple-top": Cn.top,
        "--n-padding-single-right": bn.right,
        "--n-padding-multiple-right": Cn.right,
        "--n-padding-single-left": bn.left,
        "--n-padding-multiple-left": Cn.left,
        "--n-padding-single-bottom": bn.bottom,
        "--n-padding-multiple-bottom": Cn.bottom,
        "--n-placeholder-color": Bt,
        "--n-placeholder-color-disabled": k,
        "--n-text-color": ut,
        "--n-text-color-disabled": Be,
        "--n-arrow-color": Je,
        "--n-arrow-color-disabled": Ne,
        "--n-loading-color": Dt,
        // form warning
        "--n-color-active-warning": Mt,
        "--n-box-shadow-focus-warning": It,
        "--n-box-shadow-active-warning": Nt,
        "--n-box-shadow-hover-warning": Ht,
        "--n-border-warning": Qt,
        "--n-border-focus-warning": jt,
        "--n-border-hover-warning": j,
        "--n-border-active-warning": Q,
        // form error
        "--n-color-active-error": ye,
        "--n-box-shadow-focus-error": Te,
        "--n-box-shadow-active-error": Ke,
        "--n-box-shadow-hover-error": _e,
        "--n-border-error": st,
        "--n-border-focus-error": ct,
        "--n-border-hover-error": Ut,
        "--n-border-active-error": cn,
        // clear
        "--n-clear-size": $r,
        "--n-clear-color": fn,
        "--n-clear-color-hover": Tn,
        "--n-clear-color-pressed": Ar,
        // arrow-size
        "--n-arrow-size": zr,
        // font-weight
        "--n-font-weight": De
      };
    }), Ve = Ae ? Ue("internal-selection", P(() => e.size[0]), Me, e) : void 0;
    return {
      mergedTheme: b,
      mergedClearable: y,
      mergedClsPrefix: t,
      rtlEnabled: o,
      patternInputFocused: g,
      filterablePlaceholder: B,
      label: w,
      selected: S,
      showTagsPanel: v,
      isComposing: q,
      // dom ref
      counterRef: c,
      counterWrapperRef: h,
      patternInputMirrorRef: i,
      patternInputRef: a,
      selfRef: l,
      multipleElRef: s,
      singleElRef: d,
      patternInputWrapperRef: u,
      overflowRef: p,
      inputTagElRef: m,
      handleMouseDown: te,
      handleFocusin: A,
      handleClear: L,
      handleMouseEnter: I,
      handleMouseLeave: V,
      handleDeleteOption: X,
      handlePatternKeyDown: H,
      handlePatternInputInput: Y,
      handlePatternInputBlur: Se,
      handlePatternInputFocus: fe,
      handleMouseEnterCounter: lt,
      handleMouseLeaveCounter: xe,
      handleFocusout: $,
      handleCompositionEnd: le,
      handleCompositionStart: ie,
      onPopoverUpdateShow: be,
      focus: de,
      focusInput: Fe,
      blur: U,
      blurInput: me,
      updateCounter: Re,
      getCounter: Pe,
      getTail: nt,
      renderLabel: e.renderLabel,
      cssVars: Ae ? void 0 : Me,
      themeClass: Ve == null ? void 0 : Ve.themeClass,
      onRender: Ve == null ? void 0 : Ve.onRender
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
      renderLabel: h
    } = this;
    u == null || u();
    const p = a === "responsive", m = typeof a == "number", v = p || m, g = f(ta, null, {
      default: () => f(Du, {
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
      }) : f(Ni, {
        size: r,
        closable: !n.disabled,
        disabled: o,
        onClose: () => {
          this.handleDeleteOption(n);
        },
        internalCloseIsButtonTag: !1,
        internalCloseFocusable: !1
      }, {
        default: () => h ? h(n, !0) : dt(n[b], n, !0)
      })), B = () => (m ? this.selectedOptions.slice(0, a) : this.selectedOptions).map(y), w = i ? f("div", {
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
      }, this.pattern)) : null, S = p ? () => f("div", {
        class: `${s}-base-selection-tag-wrapper`,
        ref: "counterWrapperRef"
      }, f(Ni, {
        size: r,
        ref: "counterRef",
        onMouseenter: this.handleMouseEnterCounter,
        onMouseleave: this.handleMouseLeaveCounter,
        disabled: o
      })) : void 0;
      let F;
      if (m) {
        const n = this.selectedOptions.length - a;
        n > 0 && (F = f("div", {
          class: `${s}-base-selection-tag-wrapper`,
          key: "__counter__"
        }, f(Ni, {
          size: r,
          ref: "counterRef",
          onMouseenter: this.handleMouseEnterCounter,
          disabled: o
        }, {
          default: () => `+${n}`
        })));
      }
      const C = p ? i ? f(Yl, {
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
        counter: S,
        tail: () => w
      }) : f(Yl, {
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
        counter: S
      }) : m && F ? B().concat(F) : B(), z = v ? () => f("div", {
        class: `${s}-base-selection-popover`
      }, p ? B() : this.selectedOptions.map(y)) : void 0, E = v ? Object.assign({
        show: this.showTagsPanel,
        trigger: "hover",
        overlap: !0,
        placement: "top",
        width: "trigger",
        onUpdateShow: this.onPopoverUpdateShow,
        theme: this.mergedTheme.peers.Popover,
        themeOverrides: this.mergedTheme.peerOverrides.Popover
      }, d) : null, K = (this.selected ? !1 : this.active ? !this.pattern && !this.isComposing : !0) ? f("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`
      }, f("div", {
        class: `${s}-base-selection-placeholder__inner`
      }, this.placeholder)) : null, O = i ? f("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-tags`
      }, C, p ? null : w, g) : f("div", {
        ref: "multipleElRef",
        class: `${s}-base-selection-tags`,
        tabindex: o ? void 0 : 0
      }, C, g);
      x = f(ht, null, v ? f(or, Object.assign({}, E, {
        scrollable: !0,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => O,
        default: z
      }) : O, K);
    } else if (i) {
      const b = this.pattern || this.isComposing, y = this.active ? !b : !this.selected, B = this.active ? !1 : this.selected;
      x = f("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-label`,
        title: this.patternInputFocused ? void 0 : Ql(this.label)
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
      })), B ? f("div", {
        class: `${s}-base-selection-label__render-label ${s}-base-selection-overlay`,
        key: "input"
      }, f("div", {
        class: `${s}-base-selection-overlay__wrapper`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : h ? h(this.selectedOption, !0) : dt(this.label, this.selectedOption, !0))) : null, y ? f("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`,
        key: "placeholder"
      }, f("div", {
        class: `${s}-base-selection-overlay__wrapper`
      }, this.filterablePlaceholder)) : null, g);
    } else
      x = f("div", {
        ref: "singleElRef",
        class: `${s}-base-selection-label`,
        tabindex: this.disabled ? void 0 : 0
      }, this.label !== void 0 ? f("div", {
        class: `${s}-base-selection-input`,
        title: Ql(this.label),
        key: "input"
      }, f("div", {
        class: `${s}-base-selection-input__content`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : h ? h(this.selectedOption, !0) : dt(this.label, this.selectedOption, !0))) : f("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`,
        key: "placeholder"
      }, f("div", {
        class: `${s}-base-selection-placeholder__inner`
      }, this.placeholder)), g);
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
  cubicBezierEaseInOut: wn
} = En;
function w1({
  duration: e = ".2s",
  delay: t = ".1s"
} = {}) {
  return [T("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", {
    opacity: 1
  }), T("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), T("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${wn},
 max-width ${e} ${wn} ${t},
 margin-left ${e} ${wn} ${t},
 margin-right ${e} ${wn} ${t};
 `), T("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${wn} ${t},
 max-width ${e} ${wn},
 margin-left ${e} ${wn},
 margin-right ${e} ${wn};
 `)];
}
const S1 = R("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), B1 = ee({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    Dn("-base-wave", S1, oe(e, "clsPrefix"));
    const t = _(null), r = _(!1);
    let o = null;
    return Ct(() => {
      o !== null && window.clearTimeout(o);
    }), {
      active: r,
      selfRef: t,
      play() {
        o !== null && (window.clearTimeout(o), r.value = !1, o = null), mt(() => {
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
  cubicBezierEaseInOut: tn,
  cubicBezierEaseOut: k1,
  cubicBezierEaseIn: F1
} = En;
function Ou({
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
  return [T(`&.fade-in-height-expand-transition-${u}-from,
 &.fade-in-height-expand-transition-${d}-to`, Object.assign(Object.assign({}, a), {
    opacity: 1
  })), T(`&.fade-in-height-expand-transition-${u}-to,
 &.fade-in-height-expand-transition-${d}-from`, Object.assign(Object.assign({}, l), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: i ? "0 !important" : void 0,
    paddingBottom: i ? "0 !important" : void 0
  })), T(`&.fade-in-height-expand-transition-${u}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${tn} ${o},
 opacity ${t} ${k1} ${o},
 margin-top ${t} ${tn} ${o},
 margin-bottom ${t} ${tn} ${o},
 padding-top ${t} ${tn} ${o},
 padding-bottom ${t} ${tn} ${o}
 ${r ? `,${r}` : ""}
 `), T(`&.fade-in-height-expand-transition-${d}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${tn},
 opacity ${t} ${F1},
 margin-top ${t} ${tn},
 margin-bottom ${t} ${tn},
 padding-top ${t} ${tn},
 padding-bottom ${t} ${tn}
 ${r ? `,${r}` : ""}
 `)];
}
const R1 = kr && "chrome" in window;
kr && navigator.userAgent.includes("Firefox");
const Mu = kr && navigator.userAgent.includes("Safari") && !R1, P1 = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function A1(e) {
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
    errorColor: h,
    errorColorHover: p,
    borderRadius: m,
    lineHeight: v,
    fontSizeTiny: g,
    fontSizeSmall: x,
    fontSizeMedium: b,
    fontSizeLarge: y,
    heightTiny: B,
    heightSmall: w,
    heightMedium: S,
    heightLarge: F,
    actionColor: C,
    clearColor: z,
    clearColorHover: E,
    clearColorPressed: D,
    placeholderColor: K,
    placeholderColorDisabled: O,
    iconColor: n,
    iconColorDisabled: A,
    iconColorHover: $,
    iconColorPressed: L,
    fontWeight: I
  } = e;
  return Object.assign(Object.assign({}, P1), {
    fontWeight: I,
    countTextColorDisabled: o,
    countTextColor: r,
    heightTiny: B,
    heightSmall: w,
    heightMedium: S,
    heightLarge: F,
    fontSizeTiny: g,
    fontSizeSmall: x,
    fontSizeMedium: b,
    fontSizeLarge: y,
    lineHeight: v,
    lineHeightTextarea: v,
    borderRadius: m,
    iconSize: "16px",
    groupLabelColor: C,
    groupLabelTextColor: t,
    textColor: t,
    textColorDisabled: o,
    textDecorationColor: t,
    caretColor: i,
    placeholderColor: K,
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
    loadingColorError: h,
    borderError: `1px solid ${h}`,
    borderHoverError: `1px solid ${p}`,
    colorFocusError: l,
    borderFocusError: `1px solid ${p}`,
    boxShadowFocusError: `0 0 0 2px ${Ee(h, {
      alpha: 0.2
    })}`,
    caretColorError: h,
    clearColor: z,
    clearColorHover: E,
    clearColorPressed: D,
    iconColor: n,
    iconColorDisabled: A,
    iconColorHover: $,
    iconColorPressed: L,
    suffixTextColor: t
  });
}
const rl = {
  name: "Input",
  common: qe,
  self: A1
}, Iu = "n-input", $1 = R("input", `
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
 `, [T("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), T("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), T("&:-webkit-autofill ~", [M("placeholder", "display: none;")])]),
  N("round", [Ye("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  M("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [T("span", `
 width: 100%;
 display: inline-block;
 `)]),
  N("textarea", [M("placeholder", "overflow: visible;")]),
  Ye("autosize", "width: 100%;"),
  N("autosize", [M("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  R("input-wrapper", `
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
 `, [T("&[type=password]::-ms-reveal", "display: none;"), T("+", [M("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  Ye("textarea", [M("placeholder", "white-space: nowrap;")]),
  M("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  N("textarea", "width: 100%;", [R("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), N("resizable", [R("input-wrapper", `
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
 `, [R("icon", `
 color: var(--n-icon-color);
 `), R("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  N("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [M("border", "border: var(--n-border-disabled);"), M("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), M("placeholder", "color: var(--n-placeholder-color-disabled);"), M("separator", "color: var(--n-text-color-disabled);", [R("icon", `
 color: var(--n-icon-color-disabled);
 `), R("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), R("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), M("suffix, prefix", "color: var(--n-text-color-disabled);", [R("icon", `
 color: var(--n-icon-color-disabled);
 `), R("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  Ye("disabled", [M("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [T("&:hover", `
 color: var(--n-icon-color-hover);
 `), T("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), T("&:hover", [M("state-border", "border: var(--n-border-hover);")]), N("focus", "background-color: var(--n-color-focus);", [M("state-border", `
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
 `, [R("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), R("base-clear", `
 font-size: var(--n-icon-size);
 `, [M("placeholder", [R("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), T(">", [R("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), R("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  R("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((e) => N(`${e}-status`, [Ye("disabled", [R("base-loading", `
 color: var(--n-loading-color-${e})
 `), M("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), M("state-border", `
 border: var(--n-border-${e});
 `), T("&:hover", [M("state-border", `
 border: var(--n-border-hover-${e});
 `)]), T("&:focus", `
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
]), z1 = R("input", [N("disabled", [M("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
function E1(e) {
  let t = 0;
  for (const r of e)
    t++;
  return t;
}
function Bo(e) {
  return e === "" || e == null;
}
function D1(e) {
  const t = _(null);
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
      afterText: h
    } = l;
    let p = d.length;
    if (d.endsWith(h))
      p = d.length - h.length;
    else if (d.startsWith(c))
      p = c.length;
    else {
      const m = c[u - 1], v = d.indexOf(m, u - 1);
      v !== -1 && (p = v + 1);
    }
    (a = s.setSelectionRange) === null || a === void 0 || a.call(s, p, p);
  }
  function i() {
    t.value = null;
  }
  return Le(e, i), {
    recordCursor: r,
    restoreCursor: o
  };
}
const Hs = ee({
  name: "InputWordCount",
  setup(e, {
    slots: t
  }) {
    const {
      mergedValueRef: r,
      maxlengthRef: o,
      mergedClsPrefixRef: i,
      countGraphemesRef: a
    } = pe(Iu), l = P(() => {
      const {
        value: s
      } = r;
      return s === null || Array.isArray(s) ? 0 : (a.value || E1)(s);
    });
    return () => {
      const {
        value: s
      } = o, {
        value: d
      } = r;
      return f("span", {
        class: `${i.value}-input-word-count`
      }, Qi(t.default, {
        value: d === null || Array.isArray(d) ? "" : d
      }, () => [s === void 0 ? l.value : `${l.value} / ${s}`]));
    };
  }
}), T1 = Object.assign(Object.assign({}, ve.props), {
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
}), ha = ee({
  name: "Input",
  props: T1,
  setup(e) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      e.showPasswordToggle && it("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: t,
      mergedBorderedRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = ze(e), a = ve("Input", "-input", $1, rl, e, t);
    Mu && Dn("-input-safari", z1, t);
    const l = _(null), s = _(null), d = _(null), u = _(null), c = _(null), h = _(null), p = _(null), m = D1(p), v = _(null), {
      localeRef: g
    } = Kn("Input"), x = _(e.defaultValue), b = oe(e, "value"), y = Et(b, x), B = Zn(e), {
      mergedSizeRef: w,
      mergedDisabledRef: S,
      mergedStatusRef: F
    } = B, C = _(!1), z = _(!1), E = _(!1), D = _(!1);
    let K = null;
    const O = P(() => {
      const {
        placeholder: j,
        pair: Q
      } = e;
      return Q ? Array.isArray(j) ? j : j === void 0 ? ["", ""] : [j, j] : j === void 0 ? [g.value.placeholder] : [j];
    }), n = P(() => {
      const {
        value: j
      } = E, {
        value: Q
      } = y, {
        value: ye
      } = O;
      return !j && (Bo(Q) || Array.isArray(Q) && Bo(Q[0])) && ye[0];
    }), A = P(() => {
      const {
        value: j
      } = E, {
        value: Q
      } = y, {
        value: ye
      } = O;
      return !j && ye[1] && (Bo(Q) || Array.isArray(Q) && Bo(Q[1]));
    }), $ = je(() => e.internalForceFocus || C.value), L = je(() => {
      if (S.value || e.readonly || !e.clearable || !$.value && !z.value)
        return !1;
      const {
        value: j
      } = y, {
        value: Q
      } = $;
      return e.pair ? !!(Array.isArray(j) && (j[0] || j[1])) && (z.value || Q) : !!j && (z.value || Q);
    }), I = P(() => {
      const {
        showPasswordOn: j
      } = e;
      if (j)
        return j;
      if (e.showPasswordToggle) return "click";
    }), V = _(!1), te = P(() => {
      const {
        textDecoration: j
      } = e;
      return j ? Array.isArray(j) ? j.map((Q) => ({
        textDecoration: Q
      })) : [{
        textDecoration: j
      }] : ["", ""];
    }), X = _(void 0), q = () => {
      var j, Q;
      if (e.type === "textarea") {
        const {
          autosize: ye
        } = e;
        if (ye && (X.value = (Q = (j = v.value) === null || j === void 0 ? void 0 : j.$el) === null || Q === void 0 ? void 0 : Q.offsetWidth), !s.value || typeof ye == "boolean") return;
        const {
          paddingTop: Te,
          paddingBottom: Ke,
          lineHeight: _e
        } = window.getComputedStyle(s.value), st = Number(Te.slice(0, -2)), ct = Number(Ke.slice(0, -2)), Ut = Number(_e.slice(0, -2)), {
          value: cn
        } = d;
        if (!cn) return;
        if (ye.minRows) {
          const fn = Math.max(ye.minRows, 1), Tn = `${st + ct + Ut * fn}px`;
          cn.style.minHeight = Tn;
        }
        if (ye.maxRows) {
          const fn = `${st + ct + Ut * ye.maxRows}px`;
          cn.style.maxHeight = fn;
        }
      }
    }, H = P(() => {
      const {
        maxlength: j
      } = e;
      return j === void 0 ? void 0 : Number(j);
    });
    Ft(() => {
      const {
        value: j
      } = y;
      Array.isArray(j) || Ie(j);
    });
    const G = oo().proxy;
    function Y(j, Q) {
      const {
        onUpdateValue: ye,
        "onUpdate:value": Te,
        onInput: Ke
      } = e, {
        nTriggerFormInput: _e
      } = B;
      ye && ne(ye, j, Q), Te && ne(Te, j, Q), Ke && ne(Ke, j, Q), x.value = j, _e();
    }
    function ie(j, Q) {
      const {
        onChange: ye
      } = e, {
        nTriggerFormChange: Te
      } = B;
      ye && ne(ye, j, Q), x.value = j, Te();
    }
    function le(j) {
      const {
        onBlur: Q
      } = e, {
        nTriggerFormBlur: ye
      } = B;
      Q && ne(Q, j), ye();
    }
    function fe(j) {
      const {
        onFocus: Q
      } = e, {
        nTriggerFormFocus: ye
      } = B;
      Q && ne(Q, j), ye();
    }
    function Se(j) {
      const {
        onClear: Q
      } = e;
      Q && ne(Q, j);
    }
    function U(j) {
      const {
        onInputBlur: Q
      } = e;
      Q && ne(Q, j);
    }
    function de(j) {
      const {
        onInputFocus: Q
      } = e;
      Q && ne(Q, j);
    }
    function Fe() {
      const {
        onDeactivate: j
      } = e;
      j && ne(j);
    }
    function me() {
      const {
        onActivate: j
      } = e;
      j && ne(j);
    }
    function Re(j) {
      const {
        onClick: Q
      } = e;
      Q && ne(Q, j);
    }
    function Pe(j) {
      const {
        onWrapperFocus: Q
      } = e;
      Q && ne(Q, j);
    }
    function nt(j) {
      const {
        onWrapperBlur: Q
      } = e;
      Q && ne(Q, j);
    }
    function Ge() {
      E.value = !0;
    }
    function at(j) {
      E.value = !1, j.target === h.value ? lt(j, 1) : lt(j, 0);
    }
    function lt(j, Q = 0, ye = "input") {
      const Te = j.target.value;
      if (Ie(Te), j instanceof InputEvent && !j.isComposing && (E.value = !1), e.type === "textarea") {
        const {
          value: _e
        } = v;
        _e && _e.syncUnifiedContainer();
      }
      if (K = Te, E.value) return;
      m.recordCursor();
      const Ke = xe(Te);
      if (Ke)
        if (!e.pair)
          ye === "input" ? Y(Te, {
            source: Q
          }) : ie(Te, {
            source: Q
          });
        else {
          let {
            value: _e
          } = y;
          Array.isArray(_e) ? _e = [_e[0], _e[1]] : _e = ["", ""], _e[Q] = Te, ye === "input" ? Y(_e, {
            source: Q
          }) : ie(_e, {
            source: Q
          });
        }
      G.$forceUpdate(), Ke || mt(m.restoreCursor);
    }
    function xe(j) {
      const {
        countGraphemes: Q,
        maxlength: ye,
        minlength: Te
      } = e;
      if (Q) {
        let _e;
        if (ye !== void 0 && (_e === void 0 && (_e = Q(j)), _e > Number(ye)) || Te !== void 0 && (_e === void 0 && (_e = Q(j)), _e < Number(ye)))
          return !1;
      }
      const {
        allowInput: Ke
      } = e;
      return typeof Ke == "function" ? Ke(j) : !0;
    }
    function be(j) {
      U(j), j.relatedTarget === l.value && Fe(), j.relatedTarget !== null && (j.relatedTarget === c.value || j.relatedTarget === h.value || j.relatedTarget === s.value) || (D.value = !1), re(j, "blur"), p.value = null;
    }
    function Ae(j, Q) {
      de(j), C.value = !0, D.value = !0, me(), re(j, "focus"), Q === 0 ? p.value = c.value : Q === 1 ? p.value = h.value : Q === 2 && (p.value = s.value);
    }
    function Me(j) {
      e.passivelyActivated && (nt(j), re(j, "blur"));
    }
    function Ve(j) {
      e.passivelyActivated && (C.value = !0, Pe(j), re(j, "focus"));
    }
    function re(j, Q) {
      j.relatedTarget !== null && (j.relatedTarget === c.value || j.relatedTarget === h.value || j.relatedTarget === s.value || j.relatedTarget === l.value) || (Q === "focus" ? (fe(j), C.value = !0) : Q === "blur" && (le(j), C.value = !1));
    }
    function ce(j, Q) {
      lt(j, Q, "change");
    }
    function De(j) {
      Re(j);
    }
    function rt(j) {
      Se(j), St();
    }
    function St() {
      e.pair ? (Y(["", ""], {
        source: "clear"
      }), ie(["", ""], {
        source: "clear"
      })) : (Y("", {
        source: "clear"
      }), ie("", {
        source: "clear"
      }));
    }
    function Bt(j) {
      const {
        onMousedown: Q
      } = e;
      Q && Q(j);
      const {
        tagName: ye
      } = j.target;
      if (ye !== "INPUT" && ye !== "TEXTAREA") {
        if (e.resizable) {
          const {
            value: Te
          } = l;
          if (Te) {
            const {
              left: Ke,
              top: _e,
              width: st,
              height: ct
            } = Te.getBoundingClientRect(), Ut = 14;
            if (Ke + st - Ut < j.clientX && j.clientX < Ke + st && _e + ct - Ut < j.clientY && j.clientY < _e + ct)
              return;
          }
        }
        j.preventDefault(), C.value || Z();
      }
    }
    function ut() {
      var j;
      z.value = !0, e.type === "textarea" && ((j = v.value) === null || j === void 0 || j.handleMouseEnterWrapper());
    }
    function Ze() {
      var j;
      z.value = !1, e.type === "textarea" && ((j = v.value) === null || j === void 0 || j.handleMouseLeaveWrapper());
    }
    function pt() {
      S.value || I.value === "click" && (V.value = !V.value);
    }
    function Xe(j) {
      if (S.value) return;
      j.preventDefault();
      const Q = (Te) => {
        Te.preventDefault(), He("mouseup", document, Q);
      };
      if (et("mouseup", document, Q), I.value !== "mousedown") return;
      V.value = !0;
      const ye = () => {
        V.value = !1, He("mouseup", document, ye);
      };
      et("mouseup", document, ye);
    }
    function ue(j) {
      e.onKeyup && ne(e.onKeyup, j);
    }
    function Be(j) {
      switch (e.onKeydown && ne(e.onKeydown, j), j.key) {
        case "Escape":
          W();
          break;
        case "Enter":
          k(j);
          break;
      }
    }
    function k(j) {
      var Q, ye;
      if (e.passivelyActivated) {
        const {
          value: Te
        } = D;
        if (Te) {
          e.internalDeactivateOnEnter && W();
          return;
        }
        j.preventDefault(), e.type === "textarea" ? (Q = s.value) === null || Q === void 0 || Q.focus() : (ye = c.value) === null || ye === void 0 || ye.focus();
      }
    }
    function W() {
      e.passivelyActivated && (D.value = !1, mt(() => {
        var j;
        (j = l.value) === null || j === void 0 || j.focus();
      }));
    }
    function Z() {
      var j, Q, ye;
      S.value || (e.passivelyActivated ? (j = l.value) === null || j === void 0 || j.focus() : ((Q = s.value) === null || Q === void 0 || Q.focus(), (ye = c.value) === null || ye === void 0 || ye.focus()));
    }
    function ae() {
      var j;
      !((j = l.value) === null || j === void 0) && j.contains(document.activeElement) && document.activeElement.blur();
    }
    function se() {
      var j, Q;
      (j = s.value) === null || j === void 0 || j.select(), (Q = c.value) === null || Q === void 0 || Q.select();
    }
    function he() {
      S.value || (s.value ? s.value.focus() : c.value && c.value.focus());
    }
    function ge() {
      const {
        value: j
      } = l;
      j != null && j.contains(document.activeElement) && j !== document.activeElement && W();
    }
    function we(j) {
      if (e.type === "textarea") {
        const {
          value: Q
        } = s;
        Q == null || Q.scrollTo(j);
      } else {
        const {
          value: Q
        } = c;
        Q == null || Q.scrollTo(j);
      }
    }
    function Ie(j) {
      const {
        type: Q,
        pair: ye,
        autosize: Te
      } = e;
      if (!ye && Te)
        if (Q === "textarea") {
          const {
            value: Ke
          } = d;
          Ke && (Ke.textContent = `${j ?? ""}\r
`);
        } else {
          const {
            value: Ke
          } = u;
          Ke && (j ? Ke.textContent = j : Ke.innerHTML = "&nbsp;");
        }
    }
    function Je() {
      q();
    }
    const Ne = _({
      top: "0"
    });
    function Dt(j) {
      var Q;
      const {
        scrollTop: ye
      } = j.target;
      Ne.value.top = `${-ye}px`, (Q = v.value) === null || Q === void 0 || Q.syncUnifiedContainer();
    }
    let Mt = null;
    Qe(() => {
      const {
        autosize: j,
        type: Q
      } = e;
      j && Q === "textarea" ? Mt = Le(y, (ye) => {
        !Array.isArray(ye) && ye !== K && Ie(ye);
      }) : Mt == null || Mt();
    });
    let It = null;
    Qe(() => {
      e.type === "textarea" ? It = Le(y, (j) => {
        var Q;
        !Array.isArray(j) && j !== K && ((Q = v.value) === null || Q === void 0 || Q.syncUnifiedContainer());
      }) : It == null || It();
    }), $e(Iu, {
      mergedValueRef: y,
      maxlengthRef: H,
      mergedClsPrefixRef: t,
      countGraphemesRef: oe(e, "countGraphemes")
    });
    const Nt = {
      wrapperElRef: l,
      inputElRef: c,
      textareaElRef: s,
      isCompositing: E,
      clear: St,
      focus: Z,
      blur: ae,
      select: se,
      deactivate: ge,
      activate: he,
      scrollTo: we
    }, Ht = wt("Input", i, t), Qt = P(() => {
      const {
        value: j
      } = w, {
        common: {
          cubicBezierEaseInOut: Q
        },
        self: {
          color: ye,
          borderRadius: Te,
          textColor: Ke,
          caretColor: _e,
          caretColorError: st,
          caretColorWarning: ct,
          textDecorationColor: Ut,
          border: cn,
          borderDisabled: fn,
          borderHover: Tn,
          borderFocus: Ar,
          placeholderColor: $r,
          placeholderColorDisabled: zr,
          lineHeightTextarea: Er,
          colorDisabled: Dr,
          colorFocus: bn,
          textColorDisabled: Cn,
          boxShadowFocus: hi,
          iconSize: vi,
          colorFocusWarning: pi,
          boxShadowFocusWarning: gi,
          borderWarning: mi,
          borderFocusWarning: xi,
          borderHoverWarning: bi,
          colorFocusError: Ci,
          boxShadowFocusError: yi,
          borderError: wi,
          borderFocusError: Si,
          borderHoverError: Kc,
          clearSize: Uc,
          clearColor: qc,
          clearColorHover: Gc,
          clearColorPressed: Xc,
          iconColor: Yc,
          iconColorDisabled: Zc,
          suffixTextColor: Jc,
          countTextColor: Qc,
          countTextColorDisabled: ef,
          iconColorHover: tf,
          iconColorPressed: nf,
          loadingColor: rf,
          loadingColorError: of,
          loadingColorWarning: af,
          fontWeight: lf,
          [J("padding", j)]: sf,
          [J("fontSize", j)]: df,
          [J("height", j)]: uf
        }
      } = a.value, {
        left: cf,
        right: ff
      } = Xt(sf);
      return {
        "--n-bezier": Q,
        "--n-count-text-color": Qc,
        "--n-count-text-color-disabled": ef,
        "--n-color": ye,
        "--n-font-size": df,
        "--n-font-weight": lf,
        "--n-border-radius": Te,
        "--n-height": uf,
        "--n-padding-left": cf,
        "--n-padding-right": ff,
        "--n-text-color": Ke,
        "--n-caret-color": _e,
        "--n-text-decoration-color": Ut,
        "--n-border": cn,
        "--n-border-disabled": fn,
        "--n-border-hover": Tn,
        "--n-border-focus": Ar,
        "--n-placeholder-color": $r,
        "--n-placeholder-color-disabled": zr,
        "--n-icon-size": vi,
        "--n-line-height-textarea": Er,
        "--n-color-disabled": Dr,
        "--n-color-focus": bn,
        "--n-text-color-disabled": Cn,
        "--n-box-shadow-focus": hi,
        "--n-loading-color": rf,
        // form warning
        "--n-caret-color-warning": ct,
        "--n-color-focus-warning": pi,
        "--n-box-shadow-focus-warning": gi,
        "--n-border-warning": mi,
        "--n-border-focus-warning": xi,
        "--n-border-hover-warning": bi,
        "--n-loading-color-warning": af,
        // form error
        "--n-caret-color-error": st,
        "--n-color-focus-error": Ci,
        "--n-box-shadow-focus-error": yi,
        "--n-border-error": wi,
        "--n-border-focus-error": Si,
        "--n-border-hover-error": Kc,
        "--n-loading-color-error": of,
        // clear-button
        "--n-clear-color": qc,
        "--n-clear-size": Uc,
        "--n-clear-color-hover": Gc,
        "--n-clear-color-pressed": Xc,
        "--n-icon-color": Yc,
        "--n-icon-color-hover": tf,
        "--n-icon-color-pressed": nf,
        "--n-icon-color-disabled": Zc,
        "--n-suffix-text-color": Jc
      };
    }), jt = o ? Ue("input", P(() => {
      const {
        value: j
      } = w;
      return j[0];
    }), Qt, e) : void 0;
    return Object.assign(Object.assign({}, Nt), {
      // DOM ref
      wrapperElRef: l,
      inputElRef: c,
      inputMirrorElRef: u,
      inputEl2Ref: h,
      textareaElRef: s,
      textareaMirrorElRef: d,
      textareaScrollbarInstRef: v,
      // value
      rtlEnabled: Ht,
      uncontrolledValue: x,
      mergedValue: y,
      passwordVisible: V,
      mergedPlaceholder: O,
      showPlaceholder1: n,
      showPlaceholder2: A,
      mergedFocus: $,
      isComposing: E,
      activated: D,
      showClearButton: L,
      mergedSize: w,
      mergedDisabled: S,
      textDecorationStyle: te,
      mergedClsPrefix: t,
      mergedBordered: r,
      mergedShowPasswordOn: I,
      placeholderStyle: Ne,
      mergedStatus: F,
      textAreaScrollContainerWidth: X,
      // methods
      handleTextAreaScroll: Dt,
      handleCompositionStart: Ge,
      handleCompositionEnd: at,
      handleInput: lt,
      handleInputBlur: be,
      handleInputFocus: Ae,
      handleWrapperBlur: Me,
      handleWrapperFocus: Ve,
      handleMouseEnter: ut,
      handleMouseLeave: Ze,
      handleMouseDown: Bt,
      handleChange: ce,
      handleClick: De,
      handleClear: rt,
      handlePasswordToggleClick: pt,
      handlePasswordToggleMousedown: Xe,
      handleWrapperKeydown: Be,
      handleWrapperKeyup: ue,
      handleTextAreaMirrorResize: Je,
      getTextareaScrollContainer: () => s.value,
      mergedTheme: a,
      cssVars: o ? void 0 : Qt,
      themeClass: jt == null ? void 0 : jt.themeClass,
      onRender: jt == null ? void 0 : jt.onRender
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
    }, tt(d.prefix, (u) => u && f("div", {
      class: `${r}-input__prefix`
    }, u)), a === "textarea" ? f(nr, {
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
          textAreaScrollContainerWidth: h
        } = this, p = {
          width: this.autosize && h && `${h}px`
        };
        return f(ht, null, f("textarea", Object.assign({}, this.inputProps, {
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
          style: [this.textDecorationStyle[0], (c = this.inputProps) === null || c === void 0 ? void 0 : c.style, p],
          onBlur: this.handleInputBlur,
          onFocus: (m) => {
            this.handleInputFocus(m, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? f("div", {
          class: `${r}-input__placeholder`,
          style: [this.placeholderStyle, p],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? f(xr, {
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
    }, " ") : null), !this.pair && tt(d.suffix, (u) => u || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? f("div", {
      class: `${r}-input__suffix`
    }, [tt(d["clear-icon-placeholder"], (c) => (this.clearable || c) && f(ca, {
      clsPrefix: r,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => c,
      icon: () => {
        var h, p;
        return (p = (h = this.$slots)["clear-icon"]) === null || p === void 0 ? void 0 : p.call(h);
      }
    })), this.internalLoadingBeforeSuffix ? null : u, this.loading !== void 0 ? f(Du, {
      clsPrefix: r,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? u : null, this.showCount && this.type !== "textarea" ? f(Hs, null, {
      default: (c) => {
        var h;
        return (h = d.count) === null || h === void 0 ? void 0 : h.call(d, c);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? f("div", {
      class: `${r}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? Lt(d["password-visible-icon"], () => [f(ft, {
      clsPrefix: r
    }, {
      default: () => f(db, null)
    })]) : Lt(d["password-invisible-icon"], () => [f(ft, {
      clsPrefix: r
    }, {
      default: () => f(ub, null)
    })])) : null]) : null)), this.pair ? f("span", {
      class: `${r}-input__separator`
    }, Lt(d.separator, () => [this.separator])) : null, this.pair ? f("div", {
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
    }, f("span", null, this.mergedPlaceholder[1])) : null), tt(d.suffix, (u) => (this.clearable || u) && f("div", {
      class: `${r}-input__suffix`
    }, [this.clearable && f(ca, {
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
    }) : null, this.showCount && a === "textarea" ? f(Hs, null, {
      default: (u) => {
        var c;
        const {
          renderCount: h
        } = this;
        return h ? h(u) : (c = d.count) === null || c === void 0 ? void 0 : c.call(d, u);
      }
    }) : null);
  }
}), O1 = R("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [T(">", [R("input", [T("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), T("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), R("button", [T("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [M("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), T("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [M("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), T("*", [T("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [T(">", [R("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), R("base-selection", [R("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), R("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), M("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), T("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [T(">", [R("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), R("base-selection", [R("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), R("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), M("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), M1 = {}, I1 = ee({
  name: "InputGroup",
  props: M1,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = ze(e);
    return Dn("-input-group", O1, t), {
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
}), _1 = R("input-group-label", `
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
 `)]), L1 = Object.assign(Object.assign({}, ve.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
}), N1 = ee({
  name: "InputGroupLabel",
  props: L1,
  setup(e) {
    const {
      mergedBorderedRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = ze(e), i = ve("Input", "-input-group-label", _1, rl, e, r), a = P(() => {
      const {
        size: s
      } = e, {
        common: {
          cubicBezierEaseInOut: d
        },
        self: {
          groupLabelColor: u,
          borderRadius: c,
          groupLabelTextColor: h,
          lineHeight: p,
          groupLabelBorder: m,
          [J("fontSize", s)]: v,
          [J("height", s)]: g
        }
      } = i.value;
      return {
        "--n-bezier": d,
        "--n-group-label-color": u,
        "--n-group-label-border": m,
        "--n-border-radius": c,
        "--n-group-label-text-color": h,
        "--n-font-size": v,
        "--n-line-height": p,
        "--n-height": g
      };
    }), l = o ? Ue("input-group-label", P(() => e.size[0]), a, e) : void 0;
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
function Yo(e) {
  return e.type === "group";
}
function _u(e) {
  return e.type === "ignored";
}
function Hi(e, t) {
  try {
    return !!(1 + t.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
function Lu(e, t) {
  return {
    getIsGroup: Yo,
    getIgnored: _u,
    getKey(o) {
      return Yo(o) ? o.name || o.key || "key-required" : o[e];
    },
    getChildren(o) {
      return o[t];
    }
  };
}
function H1(e, t, r, o) {
  if (!t) return e;
  function i(a) {
    if (!Array.isArray(a)) return [];
    const l = [];
    for (const s of a)
      if (Yo(s)) {
        const d = i(s[o]);
        d.length && l.push(Object.assign({}, s, {
          [o]: d
        }));
      } else {
        if (_u(s))
          continue;
        t(r, s) && l.push(s);
      }
    return l;
  }
  return i(e);
}
function j1(e, t, r) {
  const o = /* @__PURE__ */ new Map();
  return e.forEach((i) => {
    Yo(i) ? i[r].forEach((a) => {
      o.set(a[t], a);
    }) : o.set(i[t], i);
  }), o;
}
function On(e) {
  return We(e, [255, 255, 255, 0.16]);
}
function ko(e) {
  return We(e, [0, 0, 0, 0.12]);
}
const W1 = "n-button-group", V1 = {
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
function K1(e) {
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
    textColor2: h,
    textColor3: p,
    primaryColorHover: m,
    primaryColorPressed: v,
    borderColor: g,
    primaryColor: x,
    baseColor: b,
    infoColor: y,
    infoColorHover: B,
    infoColorPressed: w,
    successColor: S,
    successColorHover: F,
    successColorPressed: C,
    warningColor: z,
    warningColorHover: E,
    warningColorPressed: D,
    errorColor: K,
    errorColorHover: O,
    errorColorPressed: n,
    fontWeight: A,
    buttonColor2: $,
    buttonColor2Hover: L,
    buttonColor2Pressed: I,
    fontWeightStrong: V
  } = e;
  return Object.assign(Object.assign({}, V1), {
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
    colorSecondary: $,
    colorSecondaryHover: L,
    colorSecondaryPressed: I,
    // tertiary
    colorTertiary: $,
    colorTertiaryHover: L,
    colorTertiaryPressed: I,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: L,
    colorQuaternaryPressed: I,
    // default type
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: h,
    textColorTertiary: p,
    textColorHover: m,
    textColorPressed: v,
    textColorFocus: m,
    textColorDisabled: h,
    textColorText: h,
    textColorTextHover: m,
    textColorTextPressed: v,
    textColorTextFocus: m,
    textColorTextDisabled: h,
    textColorGhost: h,
    textColorGhostHover: m,
    textColorGhostPressed: v,
    textColorGhostFocus: m,
    textColorGhostDisabled: h,
    border: `1px solid ${g}`,
    borderHover: `1px solid ${m}`,
    borderPressed: `1px solid ${v}`,
    borderFocus: `1px solid ${m}`,
    borderDisabled: `1px solid ${g}`,
    rippleColor: x,
    // primary
    colorPrimary: x,
    colorHoverPrimary: m,
    colorPressedPrimary: v,
    colorFocusPrimary: m,
    colorDisabledPrimary: x,
    textColorPrimary: b,
    textColorHoverPrimary: b,
    textColorPressedPrimary: b,
    textColorFocusPrimary: b,
    textColorDisabledPrimary: b,
    textColorTextPrimary: x,
    textColorTextHoverPrimary: m,
    textColorTextPressedPrimary: v,
    textColorTextFocusPrimary: m,
    textColorTextDisabledPrimary: h,
    textColorGhostPrimary: x,
    textColorGhostHoverPrimary: m,
    textColorGhostPressedPrimary: v,
    textColorGhostFocusPrimary: m,
    textColorGhostDisabledPrimary: x,
    borderPrimary: `1px solid ${x}`,
    borderHoverPrimary: `1px solid ${m}`,
    borderPressedPrimary: `1px solid ${v}`,
    borderFocusPrimary: `1px solid ${m}`,
    borderDisabledPrimary: `1px solid ${x}`,
    rippleColorPrimary: x,
    // info
    colorInfo: y,
    colorHoverInfo: B,
    colorPressedInfo: w,
    colorFocusInfo: B,
    colorDisabledInfo: y,
    textColorInfo: b,
    textColorHoverInfo: b,
    textColorPressedInfo: b,
    textColorFocusInfo: b,
    textColorDisabledInfo: b,
    textColorTextInfo: y,
    textColorTextHoverInfo: B,
    textColorTextPressedInfo: w,
    textColorTextFocusInfo: B,
    textColorTextDisabledInfo: h,
    textColorGhostInfo: y,
    textColorGhostHoverInfo: B,
    textColorGhostPressedInfo: w,
    textColorGhostFocusInfo: B,
    textColorGhostDisabledInfo: y,
    borderInfo: `1px solid ${y}`,
    borderHoverInfo: `1px solid ${B}`,
    borderPressedInfo: `1px solid ${w}`,
    borderFocusInfo: `1px solid ${B}`,
    borderDisabledInfo: `1px solid ${y}`,
    rippleColorInfo: y,
    // success
    colorSuccess: S,
    colorHoverSuccess: F,
    colorPressedSuccess: C,
    colorFocusSuccess: F,
    colorDisabledSuccess: S,
    textColorSuccess: b,
    textColorHoverSuccess: b,
    textColorPressedSuccess: b,
    textColorFocusSuccess: b,
    textColorDisabledSuccess: b,
    textColorTextSuccess: S,
    textColorTextHoverSuccess: F,
    textColorTextPressedSuccess: C,
    textColorTextFocusSuccess: F,
    textColorTextDisabledSuccess: h,
    textColorGhostSuccess: S,
    textColorGhostHoverSuccess: F,
    textColorGhostPressedSuccess: C,
    textColorGhostFocusSuccess: F,
    textColorGhostDisabledSuccess: S,
    borderSuccess: `1px solid ${S}`,
    borderHoverSuccess: `1px solid ${F}`,
    borderPressedSuccess: `1px solid ${C}`,
    borderFocusSuccess: `1px solid ${F}`,
    borderDisabledSuccess: `1px solid ${S}`,
    rippleColorSuccess: S,
    // warning
    colorWarning: z,
    colorHoverWarning: E,
    colorPressedWarning: D,
    colorFocusWarning: E,
    colorDisabledWarning: z,
    textColorWarning: b,
    textColorHoverWarning: b,
    textColorPressedWarning: b,
    textColorFocusWarning: b,
    textColorDisabledWarning: b,
    textColorTextWarning: z,
    textColorTextHoverWarning: E,
    textColorTextPressedWarning: D,
    textColorTextFocusWarning: E,
    textColorTextDisabledWarning: h,
    textColorGhostWarning: z,
    textColorGhostHoverWarning: E,
    textColorGhostPressedWarning: D,
    textColorGhostFocusWarning: E,
    textColorGhostDisabledWarning: z,
    borderWarning: `1px solid ${z}`,
    borderHoverWarning: `1px solid ${E}`,
    borderPressedWarning: `1px solid ${D}`,
    borderFocusWarning: `1px solid ${E}`,
    borderDisabledWarning: `1px solid ${z}`,
    rippleColorWarning: z,
    // error
    colorError: K,
    colorHoverError: O,
    colorPressedError: n,
    colorFocusError: O,
    colorDisabledError: K,
    textColorError: b,
    textColorHoverError: b,
    textColorPressedError: b,
    textColorFocusError: b,
    textColorDisabledError: b,
    textColorTextError: K,
    textColorTextHoverError: O,
    textColorTextPressedError: n,
    textColorTextFocusError: O,
    textColorTextDisabledError: h,
    textColorGhostError: K,
    textColorGhostHoverError: O,
    textColorGhostPressedError: n,
    textColorGhostFocusError: O,
    textColorGhostDisabledError: K,
    borderError: `1px solid ${K}`,
    borderHoverError: `1px solid ${O}`,
    borderPressedError: `1px solid ${n}`,
    borderFocusError: `1px solid ${O}`,
    borderDisabledError: `1px solid ${K}`,
    rippleColorError: K,
    waveOpacity: "0.6",
    fontWeight: A,
    fontWeightStrong: V
  });
}
const di = {
  name: "Button",
  common: qe,
  self: K1
}, U1 = T([R("button", `
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
})]), Ye("disabled", [T("&:focus", [M("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), T("&:hover", [M("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), T("&:active", [M("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), N("pressed", [M("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), N("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [M("border", {
  border: "var(--n-border-disabled)"
})]), Ye("disabled", [T("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [M("state-border", {
  border: "var(--n-border-focus)"
})]), T("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [M("state-border", {
  border: "var(--n-border-hover)"
})]), T("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [M("state-border", {
  border: "var(--n-border-pressed)"
})]), N("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [M("state-border", {
  border: "var(--n-border-pressed)"
})])]), N("loading", "cursor: wait;"), R("base-wave", `
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
})]), kr && "MozBoxSizing" in document.createElement("div").style ? T("&::moz-focus-inner", {
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
 `, [R("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [Gt({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), w1()]), M("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [T("~", [M("icon", {
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
})]), T("@keyframes button-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
  }
}), T("@keyframes button-wave-opacity", {
  from: {
    opacity: "var(--n-wave-opacity)"
  },
  to: {
    opacity: 0
  }
})]), q1 = Object.assign(Object.assign({}, ve.props), {
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
    default: !Mu
  }
}), qn = ee({
  name: "Button",
  props: q1,
  setup(e) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      const {
        dashed: w,
        ghost: S,
        text: F,
        secondary: C,
        tertiary: z,
        quaternary: E
      } = e;
      (w || S || F) && (C || z || E) && it("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const t = _(null), r = _(null), o = _(!1), i = je(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = pe(W1, {}), {
      mergedSizeRef: l
    } = Zn({}, {
      defaultSize: "medium",
      mergedSize: (w) => {
        const {
          size: S
        } = e;
        if (S) return S;
        const {
          size: F
        } = a;
        if (F) return F;
        const {
          mergedSize: C
        } = w || {};
        return C ? C.value : "medium";
      }
    }), s = P(() => e.focusable && !e.disabled), d = (w) => {
      var S;
      s.value || w.preventDefault(), !e.nativeFocusBehavior && (w.preventDefault(), !e.disabled && s.value && ((S = t.value) === null || S === void 0 || S.focus({
        preventScroll: !0
      })));
    }, u = (w) => {
      var S;
      if (!e.disabled && !e.loading) {
        const {
          onClick: F
        } = e;
        F && ne(F, w), e.text || (S = r.value) === null || S === void 0 || S.play();
      }
    }, c = (w) => {
      switch (w.key) {
        case "Enter":
          if (!e.keyboard)
            return;
          o.value = !1;
      }
    }, h = (w) => {
      switch (w.key) {
        case "Enter":
          if (!e.keyboard || e.loading) {
            w.preventDefault();
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
    } = ze(e), x = ve("Button", "-button", U1, di, e, v), b = wt("Button", g, v), y = P(() => {
      const w = x.value, {
        common: {
          cubicBezierEaseInOut: S,
          cubicBezierEaseOut: F
        },
        self: C
      } = w, {
        rippleDuration: z,
        opacityDisabled: E,
        fontWeight: D,
        fontWeightStrong: K
      } = C, O = l.value, {
        dashed: n,
        type: A,
        ghost: $,
        text: L,
        color: I,
        round: V,
        circle: te,
        textColor: X,
        secondary: q,
        tertiary: H,
        quaternary: G,
        strong: Y
      } = e, ie = {
        "--n-font-weight": Y ? K : D
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
      const fe = A === "tertiary", Se = A === "default", U = fe ? "default" : A;
      if (L) {
        const be = X || I;
        le = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": be || C[J("textColorText", U)],
          "--n-text-color-hover": be ? On(be) : C[J("textColorTextHover", U)],
          "--n-text-color-pressed": be ? ko(be) : C[J("textColorTextPressed", U)],
          "--n-text-color-focus": be ? On(be) : C[J("textColorTextHover", U)],
          "--n-text-color-disabled": be || C[J("textColorTextDisabled", U)]
        };
      } else if ($ || n) {
        const be = X || I;
        le = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": I || C[J("rippleColor", U)],
          "--n-text-color": be || C[J("textColorGhost", U)],
          "--n-text-color-hover": be ? On(be) : C[J("textColorGhostHover", U)],
          "--n-text-color-pressed": be ? ko(be) : C[J("textColorGhostPressed", U)],
          "--n-text-color-focus": be ? On(be) : C[J("textColorGhostHover", U)],
          "--n-text-color-disabled": be || C[J("textColorGhostDisabled", U)]
        };
      } else if (q) {
        const be = Se ? C.textColor : fe ? C.textColorTertiary : C[J("color", U)], Ae = I || be, Me = A !== "default" && A !== "tertiary";
        le = {
          "--n-color": Me ? Ee(Ae, {
            alpha: Number(C.colorOpacitySecondary)
          }) : C.colorSecondary,
          "--n-color-hover": Me ? Ee(Ae, {
            alpha: Number(C.colorOpacitySecondaryHover)
          }) : C.colorSecondaryHover,
          "--n-color-pressed": Me ? Ee(Ae, {
            alpha: Number(C.colorOpacitySecondaryPressed)
          }) : C.colorSecondaryPressed,
          "--n-color-focus": Me ? Ee(Ae, {
            alpha: Number(C.colorOpacitySecondaryHover)
          }) : C.colorSecondaryHover,
          "--n-color-disabled": C.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": Ae,
          "--n-text-color-hover": Ae,
          "--n-text-color-pressed": Ae,
          "--n-text-color-focus": Ae,
          "--n-text-color-disabled": Ae
        };
      } else if (H || G) {
        const be = Se ? C.textColor : fe ? C.textColorTertiary : C[J("color", U)], Ae = I || be;
        H ? (le["--n-color"] = C.colorTertiary, le["--n-color-hover"] = C.colorTertiaryHover, le["--n-color-pressed"] = C.colorTertiaryPressed, le["--n-color-focus"] = C.colorSecondaryHover, le["--n-color-disabled"] = C.colorTertiary) : (le["--n-color"] = C.colorQuaternary, le["--n-color-hover"] = C.colorQuaternaryHover, le["--n-color-pressed"] = C.colorQuaternaryPressed, le["--n-color-focus"] = C.colorQuaternaryHover, le["--n-color-disabled"] = C.colorQuaternary), le["--n-ripple-color"] = "#0000", le["--n-text-color"] = Ae, le["--n-text-color-hover"] = Ae, le["--n-text-color-pressed"] = Ae, le["--n-text-color-focus"] = Ae, le["--n-text-color-disabled"] = Ae;
      } else
        le = {
          "--n-color": I || C[J("color", U)],
          "--n-color-hover": I ? On(I) : C[J("colorHover", U)],
          "--n-color-pressed": I ? ko(I) : C[J("colorPressed", U)],
          "--n-color-focus": I ? On(I) : C[J("colorFocus", U)],
          "--n-color-disabled": I || C[J("colorDisabled", U)],
          "--n-ripple-color": I || C[J("rippleColor", U)],
          "--n-text-color": X || (I ? C.textColorPrimary : fe ? C.textColorTertiary : C[J("textColor", U)]),
          "--n-text-color-hover": X || (I ? C.textColorHoverPrimary : C[J("textColorHover", U)]),
          "--n-text-color-pressed": X || (I ? C.textColorPressedPrimary : C[J("textColorPressed", U)]),
          "--n-text-color-focus": X || (I ? C.textColorFocusPrimary : C[J("textColorFocus", U)]),
          "--n-text-color-disabled": X || (I ? C.textColorDisabledPrimary : C[J("textColorDisabled", U)])
        };
      let de = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      L ? de = {
        "--n-border": "none",
        "--n-border-hover": "none",
        "--n-border-pressed": "none",
        "--n-border-focus": "none",
        "--n-border-disabled": "none"
      } : de = {
        "--n-border": C[J("border", U)],
        "--n-border-hover": C[J("borderHover", U)],
        "--n-border-pressed": C[J("borderPressed", U)],
        "--n-border-focus": C[J("borderFocus", U)],
        "--n-border-disabled": C[J("borderDisabled", U)]
      };
      const {
        [J("height", O)]: Fe,
        [J("fontSize", O)]: me,
        [J("padding", O)]: Re,
        [J("paddingRound", O)]: Pe,
        [J("iconSize", O)]: nt,
        [J("borderRadius", O)]: Ge,
        [J("iconMargin", O)]: at,
        waveOpacity: lt
      } = C, xe = {
        "--n-width": te && !L ? Fe : "initial",
        "--n-height": L ? "initial" : Fe,
        "--n-font-size": me,
        "--n-padding": te || L ? "initial" : V ? Pe : Re,
        "--n-icon-size": nt,
        "--n-icon-margin": at,
        "--n-border-radius": L ? "initial" : te || V ? Fe : Ge
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": S,
        "--n-bezier-ease-out": F,
        "--n-ripple-duration": z,
        "--n-opacity-disabled": E,
        "--n-wave-opacity": lt
      }, ie), le), de), xe);
    }), B = m ? Ue("button", P(() => {
      let w = "";
      const {
        dashed: S,
        type: F,
        ghost: C,
        text: z,
        color: E,
        round: D,
        circle: K,
        textColor: O,
        secondary: n,
        tertiary: A,
        quaternary: $,
        strong: L
      } = e;
      S && (w += "a"), C && (w += "b"), z && (w += "c"), D && (w += "d"), K && (w += "e"), n && (w += "f"), A && (w += "g"), $ && (w += "h"), L && (w += "i"), E && (w += `j${No(E)}`), O && (w += `k${No(O)}`);
      const {
        value: I
      } = l;
      return w += `l${I[0]}`, w += `m${F[0]}`, w;
    }), y, e) : void 0;
    return {
      selfElRef: t,
      waveElRef: r,
      mergedClsPrefix: v,
      mergedFocusable: s,
      mergedSize: l,
      showBorder: i,
      enterPressed: o,
      rtlEnabled: b,
      handleMousedown: d,
      handleKeydown: h,
      handleBlur: p,
      handleKeyup: c,
      handleClick: u,
      customColorCssVars: P(() => {
        const {
          color: w
        } = e;
        if (!w) return null;
        const S = On(w);
        return {
          "--n-border-color": w,
          "--n-border-color-hover": S,
          "--n-border-color-pressed": ko(w),
          "--n-border-color-focus": S,
          "--n-border-color-disabled": w
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
    const o = tt(this.$slots.default, (i) => i && f("span", {
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
    }, this.iconPlacement === "right" && o, f(Qa, {
      width: !0
    }, {
      default: () => tt(this.$slots.icon, (i) => (this.loading || this.renderIcon || i) && f("span", {
        class: `${e}-button__icon`,
        style: {
          margin: ea(this.$slots.default) ? "0" : ""
        }
      }, f(Rr, null, {
        default: () => this.loading ? f(tr, {
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
    }), this.iconPlacement === "left" && o, this.text ? null : f(B1, {
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
}), G1 = {
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
function X1(e) {
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
    closeIconColorHover: h,
    closeIconColorPressed: p,
    closeColorHover: m,
    closeColorPressed: v,
    modalColor: g,
    boxShadow1: x,
    popoverColor: b,
    actionColor: y
  } = e;
  return Object.assign(Object.assign({}, G1), {
    lineHeight: o,
    color: a,
    colorModal: g,
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
    closeColorPressed: v,
    closeBorderRadius: r,
    closeIconColor: c,
    closeIconColorHover: h,
    closeIconColorPressed: p,
    fontSizeSmall: i,
    fontSizeMedium: i,
    fontSizeLarge: i,
    fontSizeHuge: i,
    boxShadow: x,
    borderRadius: r
  });
}
const Nu = {
  name: "Card",
  common: qe,
  self: X1
}, Y1 = T([R("card", `
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
 `, [wd({
  background: "var(--n-color-modal)"
}), N("hoverable", [T("&:hover", "box-shadow: var(--n-box-shadow);")]), N("content-segmented", [T(">", [M("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), N("content-soft-segmented", [T(">", [M("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), N("footer-segmented", [T(">", [M("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), N("footer-soft-segmented", [T(">", [M("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), T(">", [R("card-header", `
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
 `, [T("&:first-child", {
  paddingTop: "var(--n-padding-bottom)"
})]), M("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), R("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [T("img", `
 display: block;
 width: 100%;
 `)]), N("bordered", `
 border: 1px solid var(--n-border-color);
 `, [T("&:target", "border-color: var(--n-color-target);")]), N("action-segmented", [T(">", [M("action", [T("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("content-segmented, content-soft-segmented", [T(">", [M("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [T("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("footer-segmented, footer-soft-segmented", [T(">", [M("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [T("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("embedded", `
 background-color: var(--n-color-embedded);
 `)]), ei(R("card", `
 background: var(--n-color-modal);
 `, [N("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), ka(R("card", `
 background: var(--n-color-popover);
 `, [N("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), ol = {
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
}, Z1 = Rn(ol), J1 = Object.assign(Object.assign({}, ve.props), ol), Q1 = ee({
  name: "Card",
  props: J1,
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
    } = ze(e), a = ve("Card", "-card", Y1, Nu, e, o), l = wt("Card", i, o), s = P(() => {
      const {
        size: u
      } = e, {
        self: {
          color: c,
          colorModal: h,
          colorTarget: p,
          textColor: m,
          titleTextColor: v,
          titleFontWeight: g,
          borderColor: x,
          actionColor: b,
          borderRadius: y,
          lineHeight: B,
          closeIconColor: w,
          closeIconColorHover: S,
          closeIconColorPressed: F,
          closeColorHover: C,
          closeColorPressed: z,
          closeBorderRadius: E,
          closeIconSize: D,
          closeSize: K,
          boxShadow: O,
          colorPopover: n,
          colorEmbedded: A,
          colorEmbeddedModal: $,
          colorEmbeddedPopover: L,
          [J("padding", u)]: I,
          [J("fontSize", u)]: V,
          [J("titleFontSize", u)]: te
        },
        common: {
          cubicBezierEaseInOut: X
        }
      } = a.value, {
        top: q,
        left: H,
        bottom: G
      } = Xt(I);
      return {
        "--n-bezier": X,
        "--n-border-radius": y,
        "--n-color": c,
        "--n-color-modal": h,
        "--n-color-popover": n,
        "--n-color-embedded": A,
        "--n-color-embedded-modal": $,
        "--n-color-embedded-popover": L,
        "--n-color-target": p,
        "--n-text-color": m,
        "--n-line-height": B,
        "--n-action-color": b,
        "--n-title-text-color": v,
        "--n-title-font-weight": g,
        "--n-close-icon-color": w,
        "--n-close-icon-color-hover": S,
        "--n-close-icon-color-pressed": F,
        "--n-close-color-hover": C,
        "--n-close-color-pressed": z,
        "--n-border-color": x,
        "--n-box-shadow": O,
        // size
        "--n-padding-top": q,
        "--n-padding-bottom": G,
        "--n-padding-left": H,
        "--n-font-size": V,
        "--n-title-font-size": te,
        "--n-close-size": K,
        "--n-close-icon-size": D,
        "--n-close-border-radius": E
      };
    }), d = r ? Ue("card", P(() => e.size[0]), s, e) : void 0;
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
    }, tt(d.cover, (u) => {
      const c = this.cover ? Vt([this.cover()]) : u;
      return c && f("div", {
        class: `${o}-card-cover`,
        role: "none"
      }, c);
    }), tt(d.header, (u) => {
      const {
        title: c
      } = this, h = c ? Vt(typeof c == "function" ? [c()] : [c]) : u;
      return h || this.closable ? f("div", {
        class: [`${o}-card-header`, this.headerClass],
        style: this.headerStyle,
        role: "heading"
      }, f("div", {
        class: `${o}-card-header__main`,
        role: "heading"
      }, h), tt(d["header-extra"], (p) => {
        const m = this.headerExtra ? Vt([this.headerExtra()]) : p;
        return m && f("div", {
          class: [`${o}-card-header__extra`, this.headerExtraClass],
          style: this.headerExtraStyle
        }, m);
      }), this.closable && f(so, {
        clsPrefix: o,
        class: `${o}-card-header__close`,
        onClick: this.handleCloseClick,
        absolute: !0
      })) : null;
    }), tt(d.default, (u) => {
      const {
        content: c
      } = this, h = c ? Vt(typeof c == "function" ? [c()] : [c]) : u;
      return h && f("div", {
        class: [`${o}-card__content`, this.contentClass],
        style: this.contentStyle,
        role: "none"
      }, h);
    }), tt(d.footer, (u) => {
      const c = this.footer ? Vt([this.footer()]) : u;
      return c && f("div", {
        class: [`${o}-card__footer`, this.footerClass],
        style: this.footerStyle,
        role: "none"
      }, c);
    }), tt(d.action, (u) => {
      const c = this.action ? Vt([this.action()]) : u;
      return c && f("div", {
        class: `${o}-card__action`,
        role: "none"
      }, c);
    }));
  }
}), eC = {
  sizeSmall: "14px",
  sizeMedium: "16px",
  sizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function tC(e) {
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
    fontSizeMedium: h,
    fontSizeLarge: p,
    borderRadiusSmall: m,
    lineHeight: v
  } = e;
  return Object.assign(Object.assign({}, eC), {
    labelLineHeight: v,
    fontSizeSmall: c,
    fontSizeMedium: h,
    fontSizeLarge: p,
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
const Hu = {
  name: "Checkbox",
  common: qe,
  self: tC
}, ju = "n-checkbox-group", nC = {
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
}, rC = ee({
  name: "CheckboxGroup",
  props: nC,
  setup(e) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      e.onChange !== void 0 && it("checkbox-group", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: t
    } = ze(e), r = Zn(e), {
      mergedSizeRef: o,
      mergedDisabledRef: i
    } = r, a = _(e.defaultValue), l = P(() => e.value), s = Et(l, a), d = P(() => {
      var h;
      return ((h = s.value) === null || h === void 0 ? void 0 : h.length) || 0;
    }), u = P(() => Array.isArray(s.value) ? new Set(s.value) : /* @__PURE__ */ new Set());
    function c(h, p) {
      const {
        nTriggerFormInput: m,
        nTriggerFormChange: v
      } = r, {
        onChange: g,
        "onUpdate:value": x,
        onUpdateValue: b
      } = e;
      if (Array.isArray(s.value)) {
        const y = Array.from(s.value), B = y.findIndex((w) => w === p);
        h ? ~B || (y.push(p), b && ne(b, y, {
          actionType: "check",
          value: p
        }), x && ne(x, y, {
          actionType: "check",
          value: p
        }), m(), v(), a.value = y, g && ne(g, y)) : ~B && (y.splice(B, 1), b && ne(b, y, {
          actionType: "uncheck",
          value: p
        }), x && ne(x, y, {
          actionType: "uncheck",
          value: p
        }), g && ne(g, y), a.value = y, m(), v());
      } else
        h ? (b && ne(b, [p], {
          actionType: "check",
          value: p
        }), x && ne(x, [p], {
          actionType: "check",
          value: p
        }), g && ne(g, [p]), a.value = [p], m(), v()) : (b && ne(b, [], {
          actionType: "uncheck",
          value: p
        }), x && ne(x, [], {
          actionType: "uncheck",
          value: p
        }), g && ne(g, []), a.value = [], m(), v());
    }
    return $e(ju, {
      checkedCountRef: d,
      maxRef: oe(e, "max"),
      minRef: oe(e, "min"),
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
}), oC = f("svg", {
  viewBox: "0 0 64 64",
  class: "check-icon"
}, f("path", {
  d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"
})), iC = f("svg", {
  viewBox: "0 0 100 100",
  class: "line-icon"
}, f("path", {
  d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"
})), aC = T([
  R("checkbox", `
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `, [N("show-label", "line-height: var(--n-label-line-height);"), T("&:hover", [R("checkbox-box", [M("border", "border: var(--n-border-checked);")])]), T("&:focus:not(:active)", [R("checkbox-box", [M("border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), N("inside-table", [R("checkbox-box", `
 background-color: var(--n-merged-color-table);
 `)]), N("checked", [R("checkbox-box", `
 background-color: var(--n-color-checked);
 `, [R("checkbox-icon", [
    // if not set width to 100%, safari & old chrome won't display the icon
    T(".check-icon", `
 opacity: 1;
 transform: scale(1);
 `)
  ])])]), N("indeterminate", [R("checkbox-box", [R("checkbox-icon", [T(".check-icon", `
 opacity: 0;
 transform: scale(.5);
 `), T(".line-icon", `
 opacity: 1;
 transform: scale(1);
 `)])])]), N("checked, indeterminate", [T("&:focus:not(:active)", [R("checkbox-box", [M("border", `
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), R("checkbox-box", `
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `, [M("border", {
    border: "var(--n-border-checked)"
  })])]), N("disabled", {
    cursor: "not-allowed"
  }, [N("checked", [R("checkbox-box", `
 background-color: var(--n-color-disabled-checked);
 `, [M("border", {
    border: "var(--n-border-disabled-checked)"
  }), R("checkbox-icon", [T(".check-icon, .line-icon", {
    fill: "var(--n-check-mark-color-disabled-checked)"
  })])])]), R("checkbox-box", `
 background-color: var(--n-color-disabled);
 `, [M("border", `
 border: var(--n-border-disabled);
 `), R("checkbox-icon", [T(".check-icon, .line-icon", `
 fill: var(--n-check-mark-color-disabled);
 `)])]), M("label", `
 color: var(--n-text-color-disabled);
 `)]), R("checkbox-box-wrapper", `
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `), R("checkbox-box", `
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
 `), R("checkbox-icon", `
 display: flex;
 align-items: center;
 justify-content: center;
 position: absolute;
 left: 1px;
 right: 1px;
 top: 1px;
 bottom: 1px;
 `, [T(".check-icon, .line-icon", `
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
 `), Gt({
    left: "1px",
    top: "1px"
  })])]), M("label", `
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `, [T("&:empty", {
    display: "none"
  })])]),
  // modal table header checkbox
  ei(R("checkbox", `
 --n-merged-color-table: var(--n-color-table-modal);
 `)),
  // popover table header checkbox
  ka(R("checkbox", `
 --n-merged-color-table: var(--n-color-table-popover);
 `))
]), lC = Object.assign(Object.assign({}, ve.props), {
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
}), il = ee({
  name: "Checkbox",
  props: lC,
  setup(e) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      e.onChange && it("checkbox", "`on-change` is deprecated, please use `on-update:checked` instead.");
    });
    const t = pe(ju, null), r = _(null), {
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = ze(e), l = _(e.defaultChecked), s = oe(e, "checked"), d = Et(s, l), u = je(() => {
      if (t) {
        const F = t.valueSetRef.value;
        return F && e.value !== void 0 ? F.has(e.value) : !1;
      } else
        return d.value === e.checkedValue;
    }), c = Zn(e, {
      mergedSize(F) {
        const {
          size: C
        } = e;
        if (C !== void 0) return C;
        if (t) {
          const {
            value: z
          } = t.mergedSizeRef;
          if (z !== void 0)
            return z;
        }
        if (F) {
          const {
            mergedSize: z
          } = F;
          if (z !== void 0) return z.value;
        }
        return "medium";
      },
      mergedDisabled(F) {
        const {
          disabled: C
        } = e;
        if (C !== void 0) return C;
        if (t) {
          if (t.disabledRef.value) return !0;
          const {
            maxRef: {
              value: z
            },
            checkedCountRef: E
          } = t;
          if (z !== void 0 && E.value >= z && !u.value)
            return !0;
          const {
            minRef: {
              value: D
            }
          } = t;
          if (D !== void 0 && E.value <= D && u.value)
            return !0;
        }
        return F ? F.disabled.value : !1;
      }
    }), {
      mergedDisabledRef: h,
      mergedSizeRef: p
    } = c, m = ve("Checkbox", "-checkbox", aC, Hu, e, o);
    function v(F) {
      if (t && e.value !== void 0)
        t.toggleCheckbox(!u.value, e.value);
      else {
        const {
          onChange: C,
          "onUpdate:checked": z,
          onUpdateChecked: E
        } = e, {
          nTriggerFormInput: D,
          nTriggerFormChange: K
        } = c, O = u.value ? e.uncheckedValue : e.checkedValue;
        z && ne(z, O, F), E && ne(E, O, F), C && ne(C, O, F), D(), K(), l.value = O;
      }
    }
    function g(F) {
      h.value || v(F);
    }
    function x(F) {
      if (!h.value)
        switch (F.key) {
          case " ":
          case "Enter":
            v(F);
        }
    }
    function b(F) {
      switch (F.key) {
        case " ":
          F.preventDefault();
      }
    }
    const y = {
      focus: () => {
        var F;
        (F = r.value) === null || F === void 0 || F.focus();
      },
      blur: () => {
        var F;
        (F = r.value) === null || F === void 0 || F.blur();
      }
    }, B = wt("Checkbox", a, o), w = P(() => {
      const {
        value: F
      } = p, {
        common: {
          cubicBezierEaseInOut: C
        },
        self: {
          borderRadius: z,
          color: E,
          colorChecked: D,
          colorDisabled: K,
          colorTableHeader: O,
          colorTableHeaderModal: n,
          colorTableHeaderPopover: A,
          checkMarkColor: $,
          checkMarkColorDisabled: L,
          border: I,
          borderFocus: V,
          borderDisabled: te,
          borderChecked: X,
          boxShadowFocus: q,
          textColor: H,
          textColorDisabled: G,
          checkMarkColorDisabledChecked: Y,
          colorDisabledChecked: ie,
          borderDisabledChecked: le,
          labelPadding: fe,
          labelLineHeight: Se,
          labelFontWeight: U,
          [J("fontSize", F)]: de,
          [J("size", F)]: Fe
        }
      } = m.value;
      return {
        "--n-label-line-height": Se,
        "--n-label-font-weight": U,
        "--n-size": Fe,
        "--n-bezier": C,
        "--n-border-radius": z,
        "--n-border": I,
        "--n-border-checked": X,
        "--n-border-focus": V,
        "--n-border-disabled": te,
        "--n-border-disabled-checked": le,
        "--n-box-shadow-focus": q,
        "--n-color": E,
        "--n-color-checked": D,
        "--n-color-table": O,
        "--n-color-table-modal": n,
        "--n-color-table-popover": A,
        "--n-color-disabled": K,
        "--n-color-disabled-checked": ie,
        "--n-text-color": H,
        "--n-text-color-disabled": G,
        "--n-check-mark-color": $,
        "--n-check-mark-color-disabled": L,
        "--n-check-mark-color-disabled-checked": Y,
        "--n-font-size": de,
        "--n-label-padding": fe
      };
    }), S = i ? Ue("checkbox", P(() => p.value[0]), w, e) : void 0;
    return Object.assign(c, y, {
      rtlEnabled: B,
      selfRef: r,
      mergedClsPrefix: o,
      mergedDisabled: h,
      renderedChecked: u,
      mergedTheme: m,
      labelId: sn(),
      handleClick: g,
      handleKeyUp: x,
      handleKeyDown: b,
      cssVars: i ? void 0 : w,
      themeClass: S == null ? void 0 : S.themeClass,
      onRender: S == null ? void 0 : S.onRender
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
      handleKeyUp: h,
      handleKeyDown: p,
      handleClick: m
    } = this;
    (e = this.onRender) === null || e === void 0 || e.call(this);
    const v = tt(t.default, (g) => d || g ? f("span", {
      class: `${u}-checkbox__label`,
      id: s
    }, d || g) : null);
    return f("div", {
      ref: "selfRef",
      class: [`${u}-checkbox`, this.themeClass, this.rtlEnabled && `${u}-checkbox--rtl`, r && `${u}-checkbox--checked`, o && `${u}-checkbox--disabled`, i && `${u}-checkbox--indeterminate`, a && `${u}-checkbox--inside-table`, v && `${u}-checkbox--show-label`],
      tabindex: o || !c ? void 0 : 0,
      role: "checkbox",
      "aria-checked": i ? "mixed" : r,
      "aria-labelledby": s,
      style: l,
      onKeyup: h,
      onKeydown: p,
      onClick: m,
      onMousedown: () => {
        et("selectstart", window, (g) => {
          g.preventDefault();
        }, {
          once: !0
        });
      }
    }, f("div", {
      class: `${u}-checkbox-box-wrapper`
    }, " ", f("div", {
      class: `${u}-checkbox-box`
    }, f(Rr, null, {
      default: () => this.indeterminate ? f("div", {
        key: "indeterminate",
        class: `${u}-checkbox-icon`
      }, iC) : f("div", {
        key: "check",
        class: `${u}-checkbox-icon`
      }, oC)
    }), f("div", {
      class: `${u}-checkbox-box__border`
    }))), v);
  }
});
function sC(e) {
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
const dC = {
  name: "Collapse",
  common: qe,
  self: sC
}, uC = R("collapse", "width: 100%;", [R("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [N("disabled", [M("header", "cursor: not-allowed;", [M("header-main", `
 color: var(--n-title-text-color-disabled);
 `), R("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), R("collapse-item", "margin-left: 32px;"), T("&:first-child", "margin-top: 0;"), T("&:first-child >", [M("header", "padding-top: 0;")]), N("left-arrow-placement", [M("header", [R("collapse-item-arrow", "margin-right: 4px;")])]), N("right-arrow-placement", [M("header", [R("collapse-item-arrow", "margin-left: 4px;")])]), M("content-wrapper", [M("content-inner", "padding-top: 16px;"), Ou({
  duration: "0.15s"
})]), N("active", [M("header", [N("active", [R("collapse-item-arrow", "transform: rotate(90deg);")])])]), T("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), Ye("disabled", [N("trigger-area-main", [M("header", [M("header-main", "cursor: pointer;"), R("collapse-item-arrow", "cursor: default;")])]), N("trigger-area-arrow", [M("header", [R("collapse-item-arrow", "cursor: pointer;")])]), N("trigger-area-extra", [M("header", [M("header-extra", "cursor: pointer;")])])]), M("header", `
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
 `), R("collapse-item-arrow", `
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]), cC = Object.assign(Object.assign({}, ve.props), {
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
    validator: () => (process.env.NODE_ENV !== "production" && kt("collapse", "`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead."), !0),
    default: void 0
  }
}), Wu = "n-collapse", fC = ee({
  name: "Collapse",
  props: cC,
  setup(e, {
    slots: t
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = ze(e), a = _(e.defaultExpandedNames), l = P(() => e.expandedNames), s = Et(l, a), d = ve("Collapse", "-collapse", uC, dC, e, r);
    function u(g) {
      const {
        "onUpdate:expandedNames": x,
        onUpdateExpandedNames: b,
        onExpandedNamesChange: y
      } = e;
      b && ne(b, g), x && ne(x, g), y && ne(y, g), a.value = g;
    }
    function c(g) {
      const {
        onItemHeaderClick: x
      } = e;
      x && ne(x, g);
    }
    function h(g, x, b) {
      const {
        accordion: y
      } = e, {
        value: B
      } = s;
      if (y)
        g ? (u([x]), c({
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
        const w = B.slice(), S = w.findIndex((F) => x === F);
        ~S ? (w.splice(S, 1), u(w), c({
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
    $e(Wu, {
      props: e,
      mergedClsPrefixRef: r,
      expandedNamesRef: s,
      slots: t,
      toggleItem: h
    });
    const p = wt("Collapse", i, r), m = P(() => {
      const {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          titleFontWeight: x,
          dividerColor: b,
          titlePadding: y,
          titleTextColor: B,
          titleTextColorDisabled: w,
          textColor: S,
          arrowColor: F,
          fontSize: C,
          titleFontSize: z,
          arrowColorDisabled: E,
          itemMargin: D
        }
      } = d.value;
      return {
        "--n-font-size": C,
        "--n-bezier": g,
        "--n-text-color": S,
        "--n-divider-color": b,
        "--n-title-padding": y,
        "--n-title-font-size": z,
        "--n-title-text-color": B,
        "--n-title-text-color-disabled": w,
        "--n-title-font-weight": x,
        "--n-arrow-color": F,
        "--n-arrow-color-disabled": E,
        "--n-item-margin": D
      };
    }), v = o ? Ue("collapse", void 0, m, e) : void 0;
    return {
      rtlEnabled: p,
      mergedTheme: d,
      mergedClsPrefix: r,
      cssVars: o ? void 0 : m,
      themeClass: v == null ? void 0 : v.themeClass,
      onRender: v == null ? void 0 : v.onRender
    };
  },
  render() {
    var e;
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      class: [`${this.mergedClsPrefix}-collapse`, this.rtlEnabled && `${this.mergedClsPrefix}-collapse--rtl`, this.themeClass],
      style: this.cssVars
    }, this.$slots);
  }
}), hC = ee({
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
      onceTrue: kd(oe(e, "show"))
    };
  },
  render() {
    return f(Qa, null, {
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
        return i ? ln(a, [[vr, e]]) : e ? a : null;
      }
    });
  }
}), vC = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
}, pC = ee({
  name: "CollapseItem",
  props: vC,
  setup(e) {
    const {
      mergedRtlRef: t
    } = ze(e), r = sn(), o = je(() => {
      var h;
      return (h = e.name) !== null && h !== void 0 ? h : r;
    }), i = pe(Wu);
    i || $n("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
    const {
      expandedNamesRef: a,
      props: l,
      mergedClsPrefixRef: s,
      slots: d
    } = i, u = P(() => {
      const {
        value: h
      } = a;
      if (Array.isArray(h)) {
        const {
          value: p
        } = o;
        return !~h.findIndex((m) => m === p);
      } else if (h) {
        const {
          value: p
        } = o;
        return p !== h;
      }
      return !0;
    });
    return {
      rtlEnabled: wt("Collapse", t, s),
      collapseSlots: d,
      randomName: r,
      mergedClsPrefix: s,
      collapsed: u,
      triggerAreas: oe(l, "triggerAreas"),
      mergedDisplayDirective: P(() => {
        const {
          displayDirective: h
        } = e;
        return h || l.displayDirective;
      }),
      arrowPlacement: P(() => l.arrowPlacement),
      handleClick(h) {
        let p = "main";
        Ot(h, "arrow") && (p = "arrow"), Ot(h, "extra") && (p = "extra"), l.triggerAreas.includes(p) && i && !e.disabled && i.toggleItem(u.value, o.value, h);
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
    } = this, d = Qi(t.header, {
      collapsed: o
    }, () => [this.title]), u = t["header-extra"] || e["header-extra"], c = t.arrow || e.arrow;
    return f("div", {
      class: [`${a}-collapse-item`, `${a}-collapse-item--${r}-arrow-placement`, l && `${a}-collapse-item--disabled`, !o && `${a}-collapse-item--active`, s.map((h) => `${a}-collapse-item--trigger-area-${h}`)]
    }, f("div", {
      class: [`${a}-collapse-item__header`, !o && `${a}-collapse-item__header--active`]
    }, f("div", {
      class: `${a}-collapse-item__header-main`,
      onClick: this.handleClick
    }, r === "right" && d, f("div", {
      class: `${a}-collapse-item-arrow`,
      key: this.rtlEnabled ? 0 : 1,
      "data-arrow": !0
    }, Qi(c, {
      collapsed: o
    }, () => {
      var h;
      return [f(ft, {
        clsPrefix: a
      }, {
        default: (h = e.expandIcon) !== null && h !== void 0 ? h : () => this.rtlEnabled ? f(ib, null) : f(Ya, null)
      })];
    })), r === "left" && d), p0(u, {
      collapsed: o
    }, (h) => f("div", {
      class: `${a}-collapse-item__header-extra`,
      onClick: this.handleClick,
      "data-extra": !0
    }, h))), f(hC, {
      clsPrefix: a,
      displayDirective: i,
      show: !o
    }, t));
  }
}), gC = {
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
    validator: () => (kt("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, Vu = ee({
  name: "ConfigProvider",
  alias: ["App"],
  props: gC,
  setup(e) {
    const t = pe(Zt, null), r = P(() => {
      const {
        theme: g
      } = e;
      if (g === null) return;
      const x = t == null ? void 0 : t.mergedThemeRef.value;
      return g === void 0 ? x : x === void 0 ? g : Object.assign({}, x, g);
    }), o = P(() => {
      const {
        themeOverrides: g
      } = e;
      if (g !== null) {
        if (g === void 0)
          return t == null ? void 0 : t.mergedThemeOverridesRef.value;
        {
          const x = t == null ? void 0 : t.mergedThemeOverridesRef.value;
          return x === void 0 ? g : _r({}, x, g);
        }
      }
    }), i = je(() => {
      const {
        namespace: g
      } = e;
      return g === void 0 ? t == null ? void 0 : t.mergedNamespaceRef.value : g;
    }), a = je(() => {
      const {
        bordered: g
      } = e;
      return g === void 0 ? t == null ? void 0 : t.mergedBorderedRef.value : g;
    }), l = P(() => {
      const {
        icons: g
      } = e;
      return g === void 0 ? t == null ? void 0 : t.mergedIconsRef.value : g;
    }), s = P(() => {
      const {
        componentOptions: g
      } = e;
      return g !== void 0 ? g : t == null ? void 0 : t.mergedComponentPropsRef.value;
    }), d = P(() => {
      const {
        clsPrefix: g
      } = e;
      return g !== void 0 ? g : t ? t.mergedClsPrefixRef.value : jo;
    }), u = P(() => {
      var g;
      const {
        rtl: x
      } = e;
      if (x === void 0)
        return t == null ? void 0 : t.mergedRtlRef.value;
      const b = {};
      for (const y of x)
        b[y.name] = pl(y), (g = y.peers) === null || g === void 0 || g.forEach((B) => {
          B.name in b || (b[B.name] = pl(B));
        });
      return b;
    }), c = P(() => e.breakpoints || (t == null ? void 0 : t.mergedBreakpointsRef.value)), h = e.inlineThemeDisabled || (t == null ? void 0 : t.inlineThemeDisabled), p = e.preflightStyleDisabled || (t == null ? void 0 : t.preflightStyleDisabled), m = e.styleMountTarget || (t == null ? void 0 : t.styleMountTarget), v = P(() => {
      const {
        value: g
      } = r, {
        value: x
      } = o, b = x && Object.keys(x).length !== 0, y = g == null ? void 0 : g.name;
      return y ? b ? `${y}-${Xr(JSON.stringify(o.value))}` : y : b ? Xr(JSON.stringify(o.value)) : "";
    });
    return $e(Zt, {
      mergedThemeHashRef: v,
      mergedBreakpointsRef: c,
      mergedRtlRef: u,
      mergedIconsRef: l,
      mergedComponentPropsRef: s,
      mergedBorderedRef: a,
      mergedNamespaceRef: i,
      mergedClsPrefixRef: d,
      mergedLocaleRef: P(() => {
        const {
          locale: g
        } = e;
        if (g !== null)
          return g === void 0 ? t == null ? void 0 : t.mergedLocaleRef.value : g;
      }),
      mergedDateLocaleRef: P(() => {
        const {
          dateLocale: g
        } = e;
        if (g !== null)
          return g === void 0 ? t == null ? void 0 : t.mergedDateLocaleRef.value : g;
      }),
      mergedHljsRef: P(() => {
        const {
          hljs: g
        } = e;
        return g === void 0 ? t == null ? void 0 : t.mergedHljsRef.value : g;
      }),
      mergedKatexRef: P(() => {
        const {
          katex: g
        } = e;
        return g === void 0 ? t == null ? void 0 : t.mergedKatexRef.value : g;
      }),
      mergedThemeRef: r,
      mergedThemeOverridesRef: o,
      inlineThemeDisabled: h || !1,
      preflightStyleDisabled: p || !1,
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
      class: `${this.mergedClsPrefix || jo}-config-provider`
    }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
  }
});
function mC(e) {
  const {
    boxShadow2: t
  } = e;
  return {
    menuBoxShadow: t
  };
}
const al = {
  name: "Popselect",
  common: qe,
  peers: {
    Popover: rr,
    InternalSelectMenu: nl
  },
  self: mC
}, Ku = "n-popselect", xC = R("popselect-menu", `
 box-shadow: var(--n-menu-box-shadow);
`), ll = {
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
}, js = Rn(ll), bC = ee({
  name: "PopselectPanel",
  props: ll,
  setup(e) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      e.onChange !== void 0 && kt("popselect", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const t = pe(Ku), {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = ze(e), i = ve("Popselect", "-pop-select", xC, al, t.props, r), a = P(() => si(e.options, Lu("value", "children")));
    function l(p, m) {
      const {
        onUpdateValue: v,
        "onUpdate:value": g,
        onChange: x
      } = e;
      v && ne(v, p, m), g && ne(g, p, m), x && ne(x, p, m);
    }
    function s(p) {
      u(p.key);
    }
    function d(p) {
      !Ot(p, "action") && !Ot(p, "empty") && !Ot(p, "header") && p.preventDefault();
    }
    function u(p) {
      const {
        value: {
          getNode: m
        }
      } = a;
      if (e.multiple)
        if (Array.isArray(e.value)) {
          const v = [], g = [];
          let x = !0;
          e.value.forEach((b) => {
            if (b === p) {
              x = !1;
              return;
            }
            const y = m(b);
            y && (v.push(y.key), g.push(y.rawNode));
          }), x && (v.push(p), g.push(m(p).rawNode)), l(v, g);
        } else {
          const v = m(p);
          v && l([p], [v.rawNode]);
        }
      else if (e.value === p && e.cancelable)
        l(null, null);
      else {
        const v = m(p);
        v && l(p, v.rawNode);
        const {
          "onUpdate:show": g,
          onUpdateShow: x
        } = t.props;
        g && ne(g, !1), x && ne(x, !1), t.setShow(!1);
      }
      mt(() => {
        t.syncPosition();
      });
    }
    Le(oe(e, "options"), () => {
      mt(() => {
        t.syncPosition();
      });
    });
    const c = P(() => {
      const {
        self: {
          menuBoxShadow: p
        }
      } = i.value;
      return {
        "--n-menu-box-shadow": p
      };
    }), h = o ? Ue("select", void 0, c, t.props) : void 0;
    return {
      mergedTheme: t.mergedThemeRef,
      mergedClsPrefix: r,
      treeMate: a,
      handleToggle: s,
      handleMenuMousedown: d,
      cssVars: o ? void 0 : c,
      themeClass: h == null ? void 0 : h.themeClass,
      onRender: h == null ? void 0 : h.onRender
    };
  },
  render() {
    var e;
    return (e = this.onRender) === null || e === void 0 || e.call(this), f($u, {
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
}), CC = Object.assign(Object.assign(Object.assign(Object.assign({}, ve.props), Yn(Un, ["showArrow", "arrow"])), {
  placement: Object.assign(Object.assign({}, Un.placement), {
    default: "bottom"
  }),
  trigger: {
    type: String,
    default: "hover"
  }
}), ll), yC = ee({
  name: "Popselect",
  props: CC,
  inheritAttrs: !1,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = ze(e), r = ve("Popselect", "-popselect", void 0, al, e, t), o = _(null);
    function i() {
      var s;
      (s = o.value) === null || s === void 0 || s.syncPosition();
    }
    function a(s) {
      var d;
      (d = o.value) === null || d === void 0 || d.setShow(s);
    }
    return $e(Ku, {
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
        return f(bC, Object.assign({}, s, {
          class: [s.class, r],
          style: [s.style, ...i]
        }, gn(this.$props, js), {
          ref: qd(o),
          onMouseenter: Vr([a, s.onMouseenter]),
          onMouseleave: Vr([l, s.onMouseleave])
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
    return f(or, Object.assign({}, Yn(this.$props, js), t, {
      internalDeactivateImmediately: !0
    }), {
      trigger: () => {
        var r, o;
        return (o = (r = this.$slots).default) === null || o === void 0 ? void 0 : o.call(r);
      }
    });
  }
});
function wC(e) {
  const {
    boxShadow2: t
  } = e;
  return {
    menuBoxShadow: t
  };
}
const Uu = {
  name: "Select",
  common: qe,
  peers: {
    InternalSelection: Tu,
    InternalSelectMenu: nl
  },
  self: wC
}, SC = T([R("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), R("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [co({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]), BC = Object.assign(Object.assign({}, ve.props), {
  to: dn.propTo,
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
}), qu = ee({
  name: "Select",
  props: BC,
  setup(e) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      e.items !== void 0 && it("select", "`items` is deprecated, please use `options` instead."), e.onChange !== void 0 && it("select", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      mergedBorderedRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = ze(e), a = ve("Select", "-select", SC, Uu, e, t), l = _(e.defaultValue), s = oe(e, "value"), d = Et(s, l), u = _(!1), c = _(""), h = Pa(e, ["items", "options"]), p = _([]), m = _([]), v = P(() => m.value.concat(p.value).concat(h.value)), g = P(() => {
      const {
        filter: k
      } = e;
      if (k) return k;
      const {
        labelField: W,
        valueField: Z
      } = e;
      return (ae, se) => {
        if (!se) return !1;
        const he = se[W];
        if (typeof he == "string")
          return Hi(ae, he);
        const ge = se[Z];
        return typeof ge == "string" ? Hi(ae, ge) : typeof ge == "number" ? Hi(ae, String(ge)) : !1;
      };
    }), x = P(() => {
      if (e.remote)
        return h.value;
      {
        const {
          value: k
        } = v, {
          value: W
        } = c;
        return !W.length || !e.filterable ? k : H1(k, g.value, W, e.childrenField);
      }
    }), b = P(() => {
      const {
        valueField: k,
        childrenField: W
      } = e, Z = Lu(k, W);
      return si(x.value, Z);
    }), y = P(() => j1(v.value, e.valueField, e.childrenField)), B = _(!1), w = Et(oe(e, "show"), B), S = _(null), F = _(null), C = _(null), {
      localeRef: z
    } = Kn("Select"), E = P(() => {
      var k;
      return (k = e.placeholder) !== null && k !== void 0 ? k : z.value.placeholder;
    }), D = [], K = _(/* @__PURE__ */ new Map()), O = P(() => {
      const {
        fallbackOption: k
      } = e;
      if (k === void 0) {
        const {
          labelField: W,
          valueField: Z
        } = e;
        return (ae) => ({
          [W]: String(ae),
          [Z]: ae
        });
      }
      return k === !1 ? !1 : (W) => Object.assign(k(W), {
        value: W
      });
    });
    function n(k) {
      const W = e.remote, {
        value: Z
      } = K, {
        value: ae
      } = y, {
        value: se
      } = O, he = [];
      return k.forEach((ge) => {
        if (ae.has(ge))
          he.push(ae.get(ge));
        else if (W && Z.has(ge))
          he.push(Z.get(ge));
        else if (se) {
          const we = se(ge);
          we && he.push(we);
        }
      }), he;
    }
    const A = P(() => {
      if (e.multiple) {
        const {
          value: k
        } = d;
        return Array.isArray(k) ? n(k) : [];
      }
      return null;
    }), $ = P(() => {
      const {
        value: k
      } = d;
      return !e.multiple && !Array.isArray(k) ? k === null ? null : n([k])[0] || null : null;
    }), L = Zn(e), {
      mergedSizeRef: I,
      mergedDisabledRef: V,
      mergedStatusRef: te
    } = L;
    function X(k, W) {
      const {
        onChange: Z,
        "onUpdate:value": ae,
        onUpdateValue: se
      } = e, {
        nTriggerFormChange: he,
        nTriggerFormInput: ge
      } = L;
      Z && ne(Z, k, W), se && ne(se, k, W), ae && ne(ae, k, W), l.value = k, he(), ge();
    }
    function q(k) {
      const {
        onBlur: W
      } = e, {
        nTriggerFormBlur: Z
      } = L;
      W && ne(W, k), Z();
    }
    function H() {
      const {
        onClear: k
      } = e;
      k && ne(k);
    }
    function G(k) {
      const {
        onFocus: W,
        showOnFocus: Z
      } = e, {
        nTriggerFormFocus: ae
      } = L;
      W && ne(W, k), ae(), Z && Se();
    }
    function Y(k) {
      const {
        onSearch: W
      } = e;
      W && ne(W, k);
    }
    function ie(k) {
      const {
        onScroll: W
      } = e;
      W && ne(W, k);
    }
    function le() {
      var k;
      const {
        remote: W,
        multiple: Z
      } = e;
      if (W) {
        const {
          value: ae
        } = K;
        if (Z) {
          const {
            valueField: se
          } = e;
          (k = A.value) === null || k === void 0 || k.forEach((he) => {
            ae.set(he[se], he);
          });
        } else {
          const se = $.value;
          se && ae.set(se[e.valueField], se);
        }
      }
    }
    function fe(k) {
      const {
        onUpdateShow: W,
        "onUpdate:show": Z
      } = e;
      W && ne(W, k), Z && ne(Z, k), B.value = k;
    }
    function Se() {
      V.value || (fe(!0), B.value = !0, e.filterable && Ze());
    }
    function U() {
      fe(!1);
    }
    function de() {
      c.value = "", m.value = D;
    }
    const Fe = _(!1);
    function me() {
      e.filterable && (Fe.value = !0);
    }
    function Re() {
      e.filterable && (Fe.value = !1, w.value || de());
    }
    function Pe() {
      V.value || (w.value ? e.filterable ? Ze() : U() : Se());
    }
    function nt(k) {
      var W, Z;
      !((Z = (W = C.value) === null || W === void 0 ? void 0 : W.selfRef) === null || Z === void 0) && Z.contains(k.relatedTarget) || (u.value = !1, q(k), U());
    }
    function Ge(k) {
      G(k), u.value = !0;
    }
    function at() {
      u.value = !0;
    }
    function lt(k) {
      var W;
      !((W = S.value) === null || W === void 0) && W.$el.contains(k.relatedTarget) || (u.value = !1, q(k), U());
    }
    function xe() {
      var k;
      (k = S.value) === null || k === void 0 || k.focus(), U();
    }
    function be(k) {
      var W;
      w.value && (!((W = S.value) === null || W === void 0) && W.$el.contains(mr(k)) || U());
    }
    function Ae(k) {
      if (!Array.isArray(k)) return [];
      if (O.value)
        return Array.from(k);
      {
        const {
          remote: W
        } = e, {
          value: Z
        } = y;
        if (W) {
          const {
            value: ae
          } = K;
          return k.filter((se) => Z.has(se) || ae.has(se));
        } else
          return k.filter((ae) => Z.has(ae));
      }
    }
    function Me(k) {
      Ve(k.rawNode);
    }
    function Ve(k) {
      if (V.value) return;
      const {
        tag: W,
        remote: Z,
        clearFilterAfterSelect: ae,
        valueField: se
      } = e;
      if (W && !Z) {
        const {
          value: he
        } = m, ge = he[0] || null;
        if (ge) {
          const we = p.value;
          we.length ? we.push(ge) : p.value = [ge], m.value = D;
        }
      }
      if (Z && K.value.set(k[se], k), e.multiple) {
        const he = Ae(d.value), ge = he.findIndex((we) => we === k[se]);
        if (~ge) {
          if (he.splice(ge, 1), W && !Z) {
            const we = re(k[se]);
            ~we && (p.value.splice(we, 1), ae && (c.value = ""));
          }
        } else
          he.push(k[se]), ae && (c.value = "");
        X(he, n(he));
      } else {
        if (W && !Z) {
          const he = re(k[se]);
          ~he ? p.value = [p.value[he]] : p.value = D;
        }
        ut(), U(), X(k[se], k);
      }
    }
    function re(k) {
      return p.value.findIndex((Z) => Z[e.valueField] === k);
    }
    function ce(k) {
      w.value || Se();
      const {
        value: W
      } = k.target;
      c.value = W;
      const {
        tag: Z,
        remote: ae
      } = e;
      if (Y(W), Z && !ae) {
        if (!W) {
          m.value = D;
          return;
        }
        const {
          onCreate: se
        } = e, he = se ? se(W) : {
          [e.labelField]: W,
          [e.valueField]: W
        }, {
          valueField: ge,
          labelField: we
        } = e;
        h.value.some((Ie) => Ie[ge] === he[ge] || Ie[we] === he[we]) || p.value.some((Ie) => Ie[ge] === he[ge] || Ie[we] === he[we]) ? m.value = D : m.value = [he];
      }
    }
    function De(k) {
      k.stopPropagation();
      const {
        multiple: W
      } = e;
      !W && e.filterable && U(), H(), W ? X([], []) : X(null, null);
    }
    function rt(k) {
      !Ot(k, "action") && !Ot(k, "empty") && !Ot(k, "header") && k.preventDefault();
    }
    function St(k) {
      ie(k);
    }
    function Bt(k) {
      var W, Z, ae, se, he;
      if (!e.keyboard) {
        k.preventDefault();
        return;
      }
      switch (k.key) {
        case " ":
          if (e.filterable)
            break;
          k.preventDefault();
        case "Enter":
          if (!(!((W = S.value) === null || W === void 0) && W.isComposing)) {
            if (w.value) {
              const ge = (Z = C.value) === null || Z === void 0 ? void 0 : Z.getPendingTmNode();
              ge ? Me(ge) : e.filterable || (U(), ut());
            } else if (Se(), e.tag && Fe.value) {
              const ge = m.value[0];
              if (ge) {
                const we = ge[e.valueField], {
                  value: Ie
                } = d;
                e.multiple && Array.isArray(Ie) && Ie.includes(we) || Ve(ge);
              }
            }
          }
          k.preventDefault();
          break;
        case "ArrowUp":
          if (k.preventDefault(), e.loading) return;
          w.value && ((ae = C.value) === null || ae === void 0 || ae.prev());
          break;
        case "ArrowDown":
          if (k.preventDefault(), e.loading) return;
          w.value ? (se = C.value) === null || se === void 0 || se.next() : Se();
          break;
        case "Escape":
          w.value && (f0(k), U()), (he = S.value) === null || he === void 0 || he.focus();
          break;
      }
    }
    function ut() {
      var k;
      (k = S.value) === null || k === void 0 || k.focus();
    }
    function Ze() {
      var k;
      (k = S.value) === null || k === void 0 || k.focusInput();
    }
    function pt() {
      var k;
      w.value && ((k = F.value) === null || k === void 0 || k.syncPosition());
    }
    le(), Le(oe(e, "options"), le);
    const Xe = {
      focus: () => {
        var k;
        (k = S.value) === null || k === void 0 || k.focus();
      },
      focusInput: () => {
        var k;
        (k = S.value) === null || k === void 0 || k.focusInput();
      },
      blur: () => {
        var k;
        (k = S.value) === null || k === void 0 || k.blur();
      },
      blurInput: () => {
        var k;
        (k = S.value) === null || k === void 0 || k.blurInput();
      }
    }, ue = P(() => {
      const {
        self: {
          menuBoxShadow: k
        }
      } = a.value;
      return {
        "--n-menu-box-shadow": k
      };
    }), Be = i ? Ue("select", void 0, ue, e) : void 0;
    return Object.assign(Object.assign({}, Xe), {
      mergedStatus: te,
      mergedClsPrefix: t,
      mergedBordered: r,
      namespace: o,
      treeMate: b,
      isMounted: Br(),
      triggerRef: S,
      menuRef: C,
      pattern: c,
      uncontrolledShow: B,
      mergedShow: w,
      adjustedTo: dn(e),
      uncontrolledValue: l,
      mergedValue: d,
      followerRef: F,
      localizedPlaceholder: E,
      selectedOption: $,
      selectedOptions: A,
      mergedSize: I,
      mergedDisabled: V,
      focused: u,
      activeWithoutMenuOpen: Fe,
      inlineThemeDisabled: i,
      onTriggerInputFocus: me,
      onTriggerInputBlur: Re,
      handleTriggerOrMenuResize: pt,
      handleMenuFocus: at,
      handleMenuBlur: lt,
      handleMenuTabOut: xe,
      handleTriggerClick: Pe,
      handleToggle: Me,
      handleDeleteOption: Ve,
      handlePatternInput: ce,
      handleClear: De,
      handleTriggerBlur: nt,
      handleTriggerFocus: Ge,
      handleKeydown: Bt,
      handleMenuAfterLeave: de,
      handleMenuClickOutside: be,
      handleMenuScroll: St,
      handleMenuKeydown: Bt,
      handleMenuMousedown: rt,
      mergedTheme: a,
      cssVars: i ? void 0 : ue,
      themeClass: Be == null ? void 0 : Be.themeClass,
      onRender: Be == null ? void 0 : Be.onRender
    });
  },
  render() {
    return f("div", {
      class: `${this.mergedClsPrefix}-select`
    }, f(za, null, {
      default: () => [f(Ea, null, {
        default: () => f(y1, {
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
      }), f(Oa, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === dn.tdkey,
        containerClass: this.namespace,
        width: this.consistentMenuWidth ? "target" : void 0,
        minWidth: "target",
        placement: this.placement
      }, {
        default: () => f(zt, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted,
          onAfterLeave: this.handleMenuAfterLeave
        }, {
          default: () => {
            var e, t, r;
            return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) === null || e === void 0 || e.call(this), ln(f($u, Object.assign({}, this.menuProps, {
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
            }), this.displayDirective === "show" ? [[vr, this.mergedShow], [Zr, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]] : [[Zr, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), kC = {
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
function FC(e) {
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
    fontSizeMedium: h,
    // item size
    heightTiny: p,
    heightSmall: m,
    heightMedium: v
  } = e;
  return Object.assign(Object.assign({}, kC), {
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
    itemSizeSmall: p,
    itemSizeMedium: m,
    itemSizeLarge: v,
    itemFontSizeSmall: u,
    itemFontSizeMedium: c,
    itemFontSizeLarge: h,
    jumperFontSizeSmall: u,
    jumperFontSizeMedium: c,
    jumperFontSizeLarge: h,
    jumperTextColor: t,
    jumperTextColorDisabled: l
  });
}
const Gu = {
  name: "Pagination",
  common: qe,
  peers: {
    Select: Uu,
    Input: rl,
    Popselect: al
  },
  self: FC
}, Ws = `
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`, Vs = [N("button", `
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)], RC = R("pagination", `
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`, [R("pagination-prefix", `
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `), R("pagination-suffix", `
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `), T("> *:not(:first-child)", `
 margin: var(--n-item-margin);
 `), R("select", `
 width: var(--n-select-width);
 `), T("&.transition-disabled", [R("pagination-item", "transition: none!important;")]), R("pagination-quick-jumper", `
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `, [R("input", `
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]), R("pagination-item", `
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
 `, [R("base-icon", `
 font-size: var(--n-button-icon-size);
 `)]), Ye("disabled", [N("hover", Ws, Vs), T("&:hover", Ws, Vs), T("&:active", `
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
 `, [T("&:hover", `
 background: var(--n-item-color-active-hover);
 `)])]), N("disabled", `
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `, [N("active, button", `
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]), N("disabled", `
 cursor: not-allowed;
 `, [R("pagination-quick-jumper", `
 color: var(--n-jumper-text-color-disabled);
 `)]), N("simple", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `, [R("pagination-quick-jumper", [R("input", `
 margin: 0;
 `)])])]);
function Xu(e) {
  var t;
  if (!e) return 10;
  const {
    defaultPageSize: r
  } = e;
  if (r !== void 0) return r;
  const o = (t = e.pageSizes) === null || t === void 0 ? void 0 : t[0];
  return typeof o == "number" ? o : (o == null ? void 0 : o.value) || 10;
}
function PC(e, t, r, o) {
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
  let c = e, h = e;
  const p = (r - 5) / 2;
  h += Math.ceil(p), h = Math.min(Math.max(h, d + r - 3), u - 2), c -= Math.floor(p), c = Math.max(Math.min(c, u - r + 3), d + 2);
  let m = !1, v = !1;
  c > d + 2 && (m = !0), h < u - 2 && (v = !0);
  const g = [];
  g.push({
    type: "page",
    label: 1,
    active: e === 1,
    mayBeFastBackward: !1,
    mayBeFastForward: !1
  }), m ? (i = !0, l = c - 1, g.push({
    type: "fast-backward",
    active: !1,
    label: void 0,
    options: o ? Ks(d + 1, c - 1) : null
  })) : u >= d + 1 && g.push({
    type: "page",
    label: d + 1,
    mayBeFastBackward: !0,
    mayBeFastForward: !1,
    active: e === d + 1
  });
  for (let x = c; x <= h; ++x)
    g.push({
      type: "page",
      label: x,
      mayBeFastBackward: !1,
      mayBeFastForward: !1,
      active: e === x
    });
  return v ? (a = !0, s = h + 1, g.push({
    type: "fast-forward",
    active: !1,
    label: void 0,
    options: o ? Ks(h + 1, u - 1) : null
  })) : h === u - 2 && g[g.length - 1].label !== u - 1 && g.push({
    type: "page",
    mayBeFastForward: !0,
    mayBeFastBackward: !1,
    label: u - 1,
    active: e === u - 1
  }), g[g.length - 1].label !== u && g.push({
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
    items: g
  };
}
function Ks(e, t) {
  const r = [];
  for (let o = e; o <= t; ++o)
    r.push({
      label: `${o}`,
      value: o
    });
  return r;
}
const AC = Object.assign(Object.assign({}, ve.props), {
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
  to: dn.propTo,
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
}), Yu = ee({
  name: "Pagination",
  props: AC,
  setup(e) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      e.pageCount !== void 0 && e.itemCount !== void 0 && kt("pagination", "`page-count` and `item-count` should't be specified together. Only `item-count` will take effect."), e.onPageSizeChange && it("pagination", "`on-page-size-change` is deprecated, please use `on-update:page-size` instead."), e.onChange && it("pagination", "`on-change` is deprecated, please use `on-update:page` instead.");
    });
    const {
      mergedComponentPropsRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = ze(e), a = ve("Pagination", "-pagination", RC, Gu, e, r), {
      localeRef: l
    } = Kn("Pagination"), s = _(null), d = _(e.defaultPage), u = _(Xu(e)), c = Et(oe(e, "page"), d), h = Et(oe(e, "pageSize"), u), p = P(() => {
      const {
        itemCount: U
      } = e;
      if (U !== void 0)
        return Math.max(1, Math.ceil(U / h.value));
      const {
        pageCount: de
      } = e;
      return de !== void 0 ? Math.max(de, 1) : 1;
    }), m = _("");
    Qe(() => {
      e.simple, m.value = String(c.value);
    });
    const v = _(!1), g = _(!1), x = _(!1), b = _(!1), y = () => {
      e.disabled || (v.value = !0, $());
    }, B = () => {
      e.disabled || (v.value = !1, $());
    }, w = () => {
      g.value = !0, $();
    }, S = () => {
      g.value = !1, $();
    }, F = (U) => {
      L(U);
    }, C = P(() => PC(c.value, p.value, e.pageSlot, e.showQuickJumpDropdown));
    Qe(() => {
      C.value.hasFastBackward ? C.value.hasFastForward || (v.value = !1, x.value = !1) : (g.value = !1, b.value = !1);
    });
    const z = P(() => {
      const U = l.value.selectionSuffix;
      return e.pageSizes.map((de) => typeof de == "number" ? {
        label: `${de} / ${U}`,
        value: de
      } : de);
    }), E = P(() => {
      var U, de;
      return ((de = (U = t == null ? void 0 : t.value) === null || U === void 0 ? void 0 : U.Pagination) === null || de === void 0 ? void 0 : de.inputSize) || es(e.size);
    }), D = P(() => {
      var U, de;
      return ((de = (U = t == null ? void 0 : t.value) === null || U === void 0 ? void 0 : U.Pagination) === null || de === void 0 ? void 0 : de.selectSize) || es(e.size);
    }), K = P(() => (c.value - 1) * h.value), O = P(() => {
      const U = c.value * h.value - 1, {
        itemCount: de
      } = e;
      return de !== void 0 && U > de - 1 ? de - 1 : U;
    }), n = P(() => {
      const {
        itemCount: U
      } = e;
      return U !== void 0 ? U : (e.pageCount || 1) * h.value;
    }), A = wt("Pagination", i, r);
    function $() {
      mt(() => {
        var U;
        const {
          value: de
        } = s;
        de && (de.classList.add("transition-disabled"), (U = s.value) === null || U === void 0 || U.offsetWidth, de.classList.remove("transition-disabled"));
      });
    }
    function L(U) {
      if (U === c.value) return;
      const {
        "onUpdate:page": de,
        onUpdatePage: Fe,
        onChange: me,
        simple: Re
      } = e;
      de && ne(de, U), Fe && ne(Fe, U), me && ne(me, U), d.value = U, Re && (m.value = String(U));
    }
    function I(U) {
      if (U === h.value) return;
      const {
        "onUpdate:pageSize": de,
        onUpdatePageSize: Fe,
        onPageSizeChange: me
      } = e;
      de && ne(de, U), Fe && ne(Fe, U), me && ne(me, U), u.value = U, p.value < c.value && L(p.value);
    }
    function V() {
      if (e.disabled) return;
      const U = Math.min(c.value + 1, p.value);
      L(U);
    }
    function te() {
      if (e.disabled) return;
      const U = Math.max(c.value - 1, 1);
      L(U);
    }
    function X() {
      if (e.disabled) return;
      const U = Math.min(C.value.fastForwardTo, p.value);
      L(U);
    }
    function q() {
      if (e.disabled) return;
      const U = Math.max(C.value.fastBackwardTo, 1);
      L(U);
    }
    function H(U) {
      I(U);
    }
    function G() {
      const U = Number.parseInt(m.value);
      Number.isNaN(U) || (L(Math.max(1, Math.min(U, p.value))), e.simple || (m.value = ""));
    }
    function Y() {
      G();
    }
    function ie(U) {
      if (!e.disabled)
        switch (U.type) {
          case "page":
            L(U.label);
            break;
          case "fast-backward":
            q();
            break;
          case "fast-forward":
            X();
            break;
        }
    }
    function le(U) {
      m.value = U.replace(/\D+/g, "");
    }
    Qe(() => {
      c.value, h.value, $();
    });
    const fe = P(() => {
      const {
        size: U
      } = e, {
        self: {
          buttonBorder: de,
          buttonBorderHover: Fe,
          buttonBorderPressed: me,
          buttonIconColor: Re,
          buttonIconColorHover: Pe,
          buttonIconColorPressed: nt,
          itemTextColor: Ge,
          itemTextColorHover: at,
          itemTextColorPressed: lt,
          itemTextColorActive: xe,
          itemTextColorDisabled: be,
          itemColor: Ae,
          itemColorHover: Me,
          itemColorPressed: Ve,
          itemColorActive: re,
          itemColorActiveHover: ce,
          itemColorDisabled: De,
          itemBorder: rt,
          itemBorderHover: St,
          itemBorderPressed: Bt,
          itemBorderActive: ut,
          itemBorderDisabled: Ze,
          itemBorderRadius: pt,
          jumperTextColor: Xe,
          jumperTextColorDisabled: ue,
          buttonColor: Be,
          buttonColorHover: k,
          buttonColorPressed: W,
          [J("itemPadding", U)]: Z,
          [J("itemMargin", U)]: ae,
          [J("inputWidth", U)]: se,
          [J("selectWidth", U)]: he,
          [J("inputMargin", U)]: ge,
          [J("selectMargin", U)]: we,
          [J("jumperFontSize", U)]: Ie,
          [J("prefixMargin", U)]: Je,
          [J("suffixMargin", U)]: Ne,
          [J("itemSize", U)]: Dt,
          [J("buttonIconSize", U)]: Mt,
          [J("itemFontSize", U)]: It,
          [`${J("itemMargin", U)}Rtl`]: Nt,
          [`${J("inputMargin", U)}Rtl`]: Ht
        },
        common: {
          cubicBezierEaseInOut: Qt
        }
      } = a.value;
      return {
        "--n-prefix-margin": Je,
        "--n-suffix-margin": Ne,
        "--n-item-font-size": It,
        "--n-select-width": he,
        "--n-select-margin": we,
        "--n-input-width": se,
        "--n-input-margin": ge,
        "--n-input-margin-rtl": Ht,
        "--n-item-size": Dt,
        "--n-item-text-color": Ge,
        "--n-item-text-color-disabled": be,
        "--n-item-text-color-hover": at,
        "--n-item-text-color-active": xe,
        "--n-item-text-color-pressed": lt,
        "--n-item-color": Ae,
        "--n-item-color-hover": Me,
        "--n-item-color-disabled": De,
        "--n-item-color-active": re,
        "--n-item-color-active-hover": ce,
        "--n-item-color-pressed": Ve,
        "--n-item-border": rt,
        "--n-item-border-hover": St,
        "--n-item-border-disabled": Ze,
        "--n-item-border-active": ut,
        "--n-item-border-pressed": Bt,
        "--n-item-padding": Z,
        "--n-item-border-radius": pt,
        "--n-bezier": Qt,
        "--n-jumper-font-size": Ie,
        "--n-jumper-text-color": Xe,
        "--n-jumper-text-color-disabled": ue,
        "--n-item-margin": ae,
        "--n-item-margin-rtl": Nt,
        "--n-button-icon-size": Mt,
        "--n-button-icon-color": Re,
        "--n-button-icon-color-hover": Pe,
        "--n-button-icon-color-pressed": nt,
        "--n-button-color-hover": k,
        "--n-button-color": Be,
        "--n-button-color-pressed": W,
        "--n-button-border": de,
        "--n-button-border-hover": Fe,
        "--n-button-border-pressed": me
      };
    }), Se = o ? Ue("pagination", P(() => {
      let U = "";
      const {
        size: de
      } = e;
      return U += de[0], U;
    }), fe, e) : void 0;
    return {
      rtlEnabled: A,
      mergedClsPrefix: r,
      locale: l,
      selfRef: s,
      mergedPage: c,
      pageItems: P(() => C.value.items),
      mergedItemCount: n,
      jumperValue: m,
      pageSizeOptions: z,
      mergedPageSize: h,
      inputSize: E,
      selectSize: D,
      mergedTheme: a,
      mergedPageCount: p,
      startIndex: K,
      endIndex: O,
      showFastForwardMenu: x,
      showFastBackwardMenu: b,
      fastForwardActive: v,
      fastBackwardActive: g,
      handleMenuSelect: F,
      handleFastForwardMouseenter: y,
      handleFastForwardMouseleave: B,
      handleFastBackwardMouseenter: w,
      handleFastBackwardMouseleave: S,
      handleJumperInput: le,
      handleBackwardClick: te,
      handleForwardClick: V,
      handlePageItemClick: ie,
      handleSizePickerChange: H,
      handleQuickJumperChange: Y,
      cssVars: o ? void 0 : fe,
      themeClass: Se == null ? void 0 : Se.themeClass,
      onRender: Se == null ? void 0 : Se.onRender
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
      inputSize: h,
      selectSize: p,
      mergedPageSize: m,
      pageSizeOptions: v,
      jumperValue: g,
      simple: x,
      prev: b,
      next: y,
      prefix: B,
      suffix: w,
      label: S,
      goto: F,
      handleJumperInput: C,
      handleSizePickerChange: z,
      handleBackwardClick: E,
      handlePageItemClick: D,
      handleForwardClick: K,
      handleQuickJumperChange: O,
      onRender: n
    } = this;
    n == null || n();
    const A = e.prefix || B, $ = e.suffix || w, L = b || e.prev, I = y || e.next, V = S || e.label;
    return f("div", {
      ref: "selfRef",
      class: [`${t}-pagination`, this.themeClass, this.rtlEnabled && `${t}-pagination--rtl`, r && `${t}-pagination--disabled`, x && `${t}-pagination--simple`],
      style: o
    }, A ? f("div", {
      class: `${t}-pagination-prefix`
    }, A({
      page: i,
      pageSize: m,
      pageCount: a,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      itemCount: this.mergedItemCount
    })) : null, this.displayOrder.map((te) => {
      switch (te) {
        case "pages":
          return f(ht, null, f("div", {
            class: [`${t}-pagination-item`, !L && `${t}-pagination-item--button`, (i <= 1 || i > a || r) && `${t}-pagination-item--disabled`],
            onClick: E
          }, L ? L({
            page: i,
            pageSize: m,
            pageCount: a,
            startIndex: this.startIndex,
            endIndex: this.endIndex,
            itemCount: this.mergedItemCount
          }) : f(ft, {
            clsPrefix: t
          }, {
            default: () => this.rtlEnabled ? f(zs, null) : f(Ps, null)
          })), x ? f(ht, null, f("div", {
            class: `${t}-pagination-quick-jumper`
          }, f(ha, {
            value: g,
            onUpdateValue: C,
            size: h,
            placeholder: "",
            disabled: r,
            theme: u.peers.Input,
            themeOverrides: u.peerOverrides.Input,
            onChange: O
          })), " /", " ", a) : l.map((X, q) => {
            let H, G, Y;
            const {
              type: ie
            } = X;
            switch (ie) {
              case "page":
                const fe = X.label;
                V ? H = V({
                  type: "page",
                  node: fe,
                  active: X.active
                }) : H = fe;
                break;
              case "fast-forward":
                const Se = this.fastForwardActive ? f(ft, {
                  clsPrefix: t
                }, {
                  default: () => this.rtlEnabled ? f(As, null) : f($s, null)
                }) : f(ft, {
                  clsPrefix: t
                }, {
                  default: () => f(Es, null)
                });
                V ? H = V({
                  type: "fast-forward",
                  node: Se,
                  active: this.fastForwardActive || this.showFastForwardMenu
                }) : H = Se, G = this.handleFastForwardMouseenter, Y = this.handleFastForwardMouseleave;
                break;
              case "fast-backward":
                const U = this.fastBackwardActive ? f(ft, {
                  clsPrefix: t
                }, {
                  default: () => this.rtlEnabled ? f($s, null) : f(As, null)
                }) : f(ft, {
                  clsPrefix: t
                }, {
                  default: () => f(Es, null)
                });
                V ? H = V({
                  type: "fast-backward",
                  node: U,
                  active: this.fastBackwardActive || this.showFastBackwardMenu
                }) : H = U, G = this.handleFastBackwardMouseenter, Y = this.handleFastBackwardMouseleave;
                break;
            }
            const le = f("div", {
              key: q,
              class: [`${t}-pagination-item`, X.active && `${t}-pagination-item--active`, ie !== "page" && (ie === "fast-backward" && this.showFastBackwardMenu || ie === "fast-forward" && this.showFastForwardMenu) && `${t}-pagination-item--hover`, r && `${t}-pagination-item--disabled`, ie === "page" && `${t}-pagination-item--clickable`],
              onClick: () => {
                D(X);
              },
              onMouseenter: G,
              onMouseleave: Y
            }, H);
            if (ie === "page" && !X.mayBeFastBackward && !X.mayBeFastForward)
              return le;
            {
              const fe = X.type === "page" ? X.mayBeFastBackward ? "fast-backward" : "fast-forward" : X.type;
              return X.type !== "page" && !X.options ? le : f(yC, {
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
                show: ie === "page" ? !1 : ie === "fast-backward" ? this.showFastBackwardMenu : this.showFastForwardMenu,
                onUpdateShow: (Se) => {
                  ie !== "page" && (Se ? ie === "fast-backward" ? this.showFastBackwardMenu = Se : this.showFastForwardMenu = Se : (this.showFastBackwardMenu = !1, this.showFastForwardMenu = !1));
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
            class: [`${t}-pagination-item`, !I && `${t}-pagination-item--button`, {
              [`${t}-pagination-item--disabled`]: i < 1 || i >= a || r
            }],
            onClick: K
          }, I ? I({
            page: i,
            pageSize: m,
            pageCount: a,
            itemCount: this.mergedItemCount,
            startIndex: this.startIndex,
            endIndex: this.endIndex
          }) : f(ft, {
            clsPrefix: t
          }, {
            default: () => this.rtlEnabled ? f(Ps, null) : f(zs, null)
          })));
        case "size-picker":
          return !x && s ? f(qu, Object.assign({
            consistentMenuWidth: !1,
            placeholder: "",
            showCheckmark: !1,
            to: this.to
          }, this.selectProps, {
            size: p,
            options: v,
            value: m,
            disabled: r,
            theme: u.peers.Select,
            themeOverrides: u.peerOverrides.Select,
            onUpdateValue: z
          })) : null;
        case "quick-jumper":
          return !x && d ? f("div", {
            class: `${t}-pagination-quick-jumper`
          }, F ? F() : Lt(this.$slots.goto, () => [c.goto]), f(ha, {
            value: g,
            onUpdateValue: C,
            size: h,
            placeholder: "",
            disabled: r,
            theme: u.peers.Input,
            themeOverrides: u.peerOverrides.Input,
            onChange: O
          })) : null;
        default:
          return null;
      }
    }), $ ? f("div", {
      class: `${t}-pagination-suffix`
    }, $({
      page: i,
      pageSize: m,
      pageCount: a,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      itemCount: this.mergedItemCount
    })) : null);
  }
}), $C = {
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
function zC(e) {
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
    fontSizeHuge: h,
    heightSmall: p,
    heightMedium: m,
    heightLarge: v,
    heightHuge: g,
    textColor3: x,
    opacityDisabled: b
  } = e;
  return Object.assign(Object.assign({}, $C), {
    optionHeightSmall: p,
    optionHeightMedium: m,
    optionHeightLarge: v,
    optionHeightHuge: g,
    borderRadius: s,
    fontSizeSmall: d,
    fontSizeMedium: u,
    fontSizeLarge: c,
    fontSizeHuge: h,
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
const Zu = {
  name: "Dropdown",
  common: qe,
  peers: {
    Popover: rr
  },
  self: zC
}, EC = {
  padding: "8px 14px"
};
function DC(e) {
  const {
    borderRadius: t,
    boxShadow2: r,
    baseColor: o
  } = e;
  return Object.assign(Object.assign({}, EC), {
    borderRadius: t,
    boxShadow: r,
    color: We(o, "rgba(0, 0, 0, .85)"),
    textColor: o
  });
}
const Ju = {
  name: "Tooltip",
  common: qe,
  peers: {
    Popover: rr
  },
  self: DC
}, Qu = {
  name: "Ellipsis",
  common: qe,
  peers: {
    Tooltip: Ju
  }
}, TC = {
  radioSizeSmall: "14px",
  radioSizeMedium: "16px",
  radioSizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function OC(e) {
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
    fontSizeLarge: h,
    heightSmall: p,
    heightMedium: m,
    heightLarge: v,
    lineHeight: g
  } = e;
  return Object.assign(Object.assign({}, TC), {
    labelLineHeight: g,
    buttonHeightSmall: p,
    buttonHeightMedium: m,
    buttonHeightLarge: v,
    fontSizeSmall: u,
    fontSizeMedium: c,
    fontSizeLarge: h,
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
const sl = {
  name: "Radio",
  common: qe,
  self: OC
}, MC = {
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
function IC(e) {
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
    borderRadius: h,
    lineHeight: p,
    fontSizeSmall: m,
    fontSizeMedium: v,
    fontSizeLarge: g,
    dividerColor: x,
    heightSmall: b,
    opacityDisabled: y,
    tableColorStriped: B
  } = e;
  return Object.assign(Object.assign({}, MC), {
    actionDividerColor: x,
    lineHeight: p,
    borderRadius: h,
    fontSizeSmall: m,
    fontSizeMedium: v,
    fontSizeLarge: g,
    borderColor: We(t, x),
    tdColorHover: We(t, s),
    tdColorSorting: We(t, s),
    tdColorStriped: We(t, B),
    thColor: We(t, l),
    thColorHover: We(We(t, l), s),
    thColorSorting: We(We(t, l), s),
    tdColor: t,
    tdTextColor: i,
    thTextColor: a,
    thFontWeight: c,
    thButtonColorHover: s,
    thIconColor: d,
    thIconColorActive: u,
    // modal
    borderColorModal: We(r, x),
    tdColorHoverModal: We(r, s),
    tdColorSortingModal: We(r, s),
    tdColorStripedModal: We(r, B),
    thColorModal: We(r, l),
    thColorHoverModal: We(We(r, l), s),
    thColorSortingModal: We(We(r, l), s),
    tdColorModal: r,
    // popover
    borderColorPopover: We(o, x),
    tdColorHoverPopover: We(o, s),
    tdColorSortingPopover: We(o, s),
    tdColorStripedPopover: We(o, B),
    thColorPopover: We(o, l),
    thColorHoverPopover: We(We(o, l), s),
    thColorSortingPopover: We(We(o, l), s),
    tdColorPopover: o,
    boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)",
    boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)",
    // loading
    loadingColor: u,
    loadingSize: b,
    opacityLoading: y
  });
}
const _C = {
  name: "DataTable",
  common: qe,
  peers: {
    Button: di,
    Checkbox: Hu,
    Radio: sl,
    Pagination: Gu,
    Scrollbar: uo,
    Empty: tl,
    Popover: rr,
    Ellipsis: Qu,
    Dropdown: Zu
  },
  self: IC
}, LC = Object.assign(Object.assign({}, ve.props), {
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
}), Jt = "n-data-table", ec = 40, tc = 40;
function Us(e) {
  if (e.type === "selection")
    return e.width === void 0 ? ec : kn(e.width);
  if (e.type === "expand")
    return e.width === void 0 ? tc : kn(e.width);
  if (!("children" in e))
    return typeof e.width == "string" ? kn(e.width) : e.width;
}
function NC(e) {
  var t, r;
  if (e.type === "selection")
    return vt((t = e.width) !== null && t !== void 0 ? t : ec);
  if (e.type === "expand")
    return vt((r = e.width) !== null && r !== void 0 ? r : tc);
  if (!("children" in e))
    return vt(e.width);
}
function qt(e) {
  return e.type === "selection" ? "__n_selection__" : e.type === "expand" ? "__n_expand__" : e.key;
}
function qs(e) {
  return e && (typeof e == "object" ? Object.assign({}, e) : e);
}
function HC(e) {
  return e === "ascend" ? 1 : e === "descend" ? -1 : 0;
}
function jC(e, t, r) {
  return r !== void 0 && (e = Math.min(e, typeof r == "number" ? r : Number.parseFloat(r))), t !== void 0 && (e = Math.max(e, typeof t == "number" ? t : Number.parseFloat(t))), e;
}
function WC(e, t) {
  if (t !== void 0)
    return {
      width: t,
      minWidth: t,
      maxWidth: t
    };
  const r = NC(e), {
    minWidth: o,
    maxWidth: i
  } = e;
  return {
    width: r,
    minWidth: vt(o) || r,
    maxWidth: vt(i)
  };
}
function VC(e, t, r) {
  return typeof r == "function" ? r(e, t) : r || "";
}
function ji(e) {
  return e.filterOptionValues !== void 0 || e.filterOptionValue === void 0 && e.defaultFilterOptionValues !== void 0;
}
function Wi(e) {
  return "children" in e ? !1 : !!e.sorter;
}
function nc(e) {
  return "children" in e && e.children.length ? !1 : !!e.resizable;
}
function Gs(e) {
  return "children" in e ? !1 : !!e.filter && (!!e.filterOptions || !!e.renderFilterMenu);
}
function Xs(e) {
  if (e) {
    if (e === "descend") return "ascend";
  } else return "descend";
  return !1;
}
function KC(e, t) {
  return e.sorter === void 0 ? null : t === null || t.columnKey !== e.key ? {
    columnKey: e.key,
    sorter: e.sorter,
    order: Xs(!1)
  } : Object.assign(Object.assign({}, t), {
    order: Xs(t.order)
  });
}
function rc(e, t) {
  return t.find((r) => r.columnKey === e.key && r.order) !== void 0;
}
function UC(e) {
  return typeof e == "string" ? e.replace(/,/g, "\\,") : e == null ? "" : `${e}`.replace(/,/g, "\\,");
}
function qC(e, t, r, o) {
  const i = e.filter((s) => s.type !== "expand" && s.type !== "selection" && s.allowExport !== !1), a = i.map((s) => o ? o(s) : s.title).join(","), l = t.map((s) => i.map((d) => r ? r(s[d.key], s, d) : UC(s[d.key])).join(","));
  return [a, ...l].join(`
`);
}
const GC = ee({
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
    } = pe(Jt);
    return () => {
      const {
        rowKey: o
      } = e;
      return f(il, {
        privateInsideTable: !0,
        disabled: e.disabled,
        indeterminate: r.value.has(o),
        checked: t.value.has(o),
        onUpdateChecked: e.onUpdateChecked
      });
    };
  }
}), XC = R("radio", `
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
 `), R("radio-input", `
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
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
 `, [T("&::before", `
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
}, [T("&::before", `
 opacity: 1;
 transform: scale(1);
 `)])]), M("label", `
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `), Ye("disabled", `
 cursor: pointer;
 `, [T("&:hover", [M("dot", {
  boxShadow: "var(--n-box-shadow-hover)"
})]), N("focus", [T("&:not(:active)", [M("dot", {
  boxShadow: "var(--n-box-shadow-focus)"
})])])]), N("disabled", `
 cursor: not-allowed;
 `, [M("dot", {
  boxShadow: "var(--n-box-shadow-disabled)",
  backgroundColor: "var(--n-color-disabled)"
}, [T("&::before", {
  backgroundColor: "var(--n-dot-color-disabled)"
}), N("checked", `
 opacity: 1;
 `)]), M("label", {
  color: "var(--n-text-color-disabled)"
}), R("radio-input", `
 cursor: not-allowed;
 `)])]), YC = {
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
}, oc = "n-radio-group";
function ZC(e) {
  process.env.NODE_ENV !== "production" && Qe(() => {
    e.checkedValue !== void 0 && it("radio", "`checked-value` is deprecated, please use `checked` instead.");
  });
  const t = pe(oc, null), r = Zn(e, {
    mergedSize(y) {
      const {
        size: B
      } = e;
      if (B !== void 0) return B;
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
  } = r, a = _(null), l = _(null), s = _(e.defaultChecked), d = oe(e, "checked"), u = Et(d, s), c = je(() => t ? t.valueRef.value === e.value : u.value), h = je(() => {
    const {
      name: y
    } = e;
    if (y !== void 0) return y;
    if (t) return t.nameRef.value;
  }), p = _(!1);
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
        nTriggerFormInput: w,
        nTriggerFormChange: S
      } = r;
      y && ne(y, !0), B && ne(B, !0), w(), S(), s.value = !0;
    }
  }
  function v() {
    i.value || c.value || m();
  }
  function g() {
    v(), a.value && (a.value.checked = c.value);
  }
  function x() {
    p.value = !1;
  }
  function b() {
    p.value = !0;
  }
  return {
    mergedClsPrefix: t ? t.mergedClsPrefixRef : ze(e).mergedClsPrefixRef,
    inputRef: a,
    labelRef: l,
    mergedName: h,
    mergedDisabled: i,
    renderSafeChecked: c,
    focus: p,
    mergedSize: o,
    handleRadioInputChange: g,
    handleRadioInputBlur: x,
    handleRadioInputFocus: b
  };
}
const JC = Object.assign(Object.assign({}, ve.props), YC), ic = ee({
  name: "Radio",
  props: JC,
  setup(e) {
    const t = ZC(e), r = ve("Radio", "-radio", XC, sl, e, t.mergedClsPrefix), o = P(() => {
      const {
        mergedSize: {
          value: u
        }
      } = t, {
        common: {
          cubicBezierEaseInOut: c
        },
        self: {
          boxShadow: h,
          boxShadowActive: p,
          boxShadowDisabled: m,
          boxShadowFocus: v,
          boxShadowHover: g,
          color: x,
          colorDisabled: b,
          colorActive: y,
          textColor: B,
          textColorDisabled: w,
          dotColorActive: S,
          dotColorDisabled: F,
          labelPadding: C,
          labelLineHeight: z,
          labelFontWeight: E,
          [J("fontSize", u)]: D,
          [J("radioSize", u)]: K
        }
      } = r.value;
      return {
        "--n-bezier": c,
        "--n-label-line-height": z,
        "--n-label-font-weight": E,
        "--n-box-shadow": h,
        "--n-box-shadow-active": p,
        "--n-box-shadow-disabled": m,
        "--n-box-shadow-focus": v,
        "--n-box-shadow-hover": g,
        "--n-color": x,
        "--n-color-active": y,
        "--n-color-disabled": b,
        "--n-dot-color-active": S,
        "--n-dot-color-disabled": F,
        "--n-font-size": D,
        "--n-radio-size": K,
        "--n-text-color": B,
        "--n-text-color-disabled": w,
        "--n-label-padding": C
      };
    }), {
      inlineThemeDisabled: i,
      mergedClsPrefixRef: a,
      mergedRtlRef: l
    } = ze(e), s = wt("Radio", l, a), d = i ? Ue("radio", P(() => t.mergedSize.value[0]), o, e) : void 0;
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
    }, f("input", {
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
    }), f("div", {
      class: `${t}-radio__dot-wrapper`
    }, " ", f("div", {
      class: [`${t}-radio__dot`, this.renderSafeChecked && `${t}-radio__dot--checked`]
    })), tt(e.default, (i) => !i && !o ? null : f("div", {
      ref: "labelRef",
      class: `${t}-radio__label`
    }, i || o)));
  }
}), QC = R("radio-group", `
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
 `, [R("radio-button", {
  height: "var(--n-height)",
  lineHeight: "var(--n-height)"
}), M("splitor", {
  height: "var(--n-height)"
})]), R("radio-button", `
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
 `, [R("radio-input", `
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
 `), T("&:first-child", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `, [M("state-border", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]), T("&:last-child", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `, [M("state-border", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]), Ye("disabled", `
 cursor: pointer;
 `, [T("&:hover", [M("state-border", `
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `), Ye("checked", {
  color: "var(--n-button-text-color-hover)"
})]), N("focus", [T("&:not(:active)", [M("state-border", {
  boxShadow: "var(--n-button-box-shadow-focus)"
})])])]), N("checked", `
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `), N("disabled", `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);
function ey(e, t, r) {
  var o;
  const i = [];
  let a = !1;
  for (let l = 0; l < e.length; ++l) {
    const s = e[l], d = (o = s.type) === null || o === void 0 ? void 0 : o.name;
    if (d === "RadioButton" && (a = !0), process.env.NODE_ENV !== "production" && a && d !== "RadioButton") {
      kt("radio-group", "`n-radio-group` in button mode only takes `n-radio-button` as children.");
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
      const c = i[i.length - 1].props, h = t === c.value, p = c.disabled, m = t === u.value, v = u.disabled, g = (h ? 2 : 0) + (p ? 0 : 1), x = (m ? 2 : 0) + (v ? 0 : 1), b = {
        [`${r}-radio-group__splitor--disabled`]: p,
        [`${r}-radio-group__splitor--checked`]: h
      }, y = {
        [`${r}-radio-group__splitor--disabled`]: v,
        [`${r}-radio-group__splitor--checked`]: m
      }, B = g < x ? y : b;
      i.push(f("div", {
        class: [`${r}-radio-group__splitor`, B]
      }), s);
    }
  }
  return {
    children: i,
    isButtonGroup: a
  };
}
const ty = Object.assign(Object.assign({}, ve.props), {
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
}), ny = ee({
  name: "RadioGroup",
  props: ty,
  setup(e) {
    const t = _(null), {
      mergedSizeRef: r,
      mergedDisabledRef: o,
      nTriggerFormChange: i,
      nTriggerFormInput: a,
      nTriggerFormBlur: l,
      nTriggerFormFocus: s
    } = Zn(e), {
      mergedClsPrefixRef: d,
      inlineThemeDisabled: u,
      mergedRtlRef: c
    } = ze(e), h = ve("Radio", "-radio-group", QC, sl, e, d), p = _(e.defaultValue), m = oe(e, "value"), v = Et(m, p);
    function g(S) {
      const {
        onUpdateValue: F,
        "onUpdate:value": C
      } = e;
      F && ne(F, S), C && ne(C, S), p.value = S, i(), a();
    }
    function x(S) {
      const {
        value: F
      } = t;
      F && (F.contains(S.relatedTarget) || s());
    }
    function b(S) {
      const {
        value: F
      } = t;
      F && (F.contains(S.relatedTarget) || l());
    }
    $e(oc, {
      mergedClsPrefixRef: d,
      nameRef: oe(e, "name"),
      valueRef: v,
      disabledRef: o,
      mergedSizeRef: r,
      doUpdateValue: g
    });
    const y = wt("Radio", c, d), B = P(() => {
      const {
        value: S
      } = r, {
        common: {
          cubicBezierEaseInOut: F
        },
        self: {
          buttonBorderColor: C,
          buttonBorderColorActive: z,
          buttonBorderRadius: E,
          buttonBoxShadow: D,
          buttonBoxShadowFocus: K,
          buttonBoxShadowHover: O,
          buttonColor: n,
          buttonColorActive: A,
          buttonTextColor: $,
          buttonTextColorActive: L,
          buttonTextColorHover: I,
          opacityDisabled: V,
          [J("buttonHeight", S)]: te,
          [J("fontSize", S)]: X
        }
      } = h.value;
      return {
        "--n-font-size": X,
        "--n-bezier": F,
        "--n-button-border-color": C,
        "--n-button-border-color-active": z,
        "--n-button-border-radius": E,
        "--n-button-box-shadow": D,
        "--n-button-box-shadow-focus": K,
        "--n-button-box-shadow-hover": O,
        "--n-button-color": n,
        "--n-button-color-active": A,
        "--n-button-text-color": $,
        "--n-button-text-color-hover": I,
        "--n-button-text-color-active": L,
        "--n-height": te,
        "--n-opacity-disabled": V
      };
    }), w = u ? Ue("radio-group", P(() => r.value[0]), B, e) : void 0;
    return {
      selfElRef: t,
      rtlEnabled: y,
      mergedClsPrefix: d,
      mergedValue: v,
      handleFocusout: b,
      handleFocusin: x,
      cssVars: u ? void 0 : B,
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
    } = ey(Ho(v0(this)), t, r);
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      onFocusin: o,
      onFocusout: i,
      ref: "selfElRef",
      class: [`${r}-radio-group`, this.rtlEnabled && `${r}-radio-group--rtl`, this.themeClass, l && `${r}-radio-group--button-group`],
      style: this.cssVars
    }, a);
  }
}), ry = ee({
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
    } = pe(Jt);
    return () => {
      const {
        rowKey: o
      } = e;
      return f(ic, {
        name: r,
        disabled: e.disabled,
        checked: t.value.has(o),
        onUpdateChecked: e.onUpdateChecked
      });
    };
  }
}), oy = Object.assign(Object.assign({}, Un), ve.props), ac = ee({
  name: "Tooltip",
  props: oy,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = ze(e), r = ve("Tooltip", "-tooltip", void 0, Ju, e, t), o = _(null);
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
      popoverThemeOverrides: P(() => r.value.self)
    });
  },
  render() {
    const {
      mergedTheme: e,
      internalExtraClass: t
    } = this;
    return f(or, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: t.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), lc = R("ellipsis", {
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
function va(e) {
  return `${e}-ellipsis--line-clamp`;
}
function pa(e, t) {
  return `${e}-ellipsis--cursor-${t}`;
}
const sc = Object.assign(Object.assign({}, ve.props), {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Boolean, Object],
    default: !0
  }
}), dl = ee({
  name: "Ellipsis",
  inheritAttrs: !1,
  props: sc,
  setup(e, {
    slots: t,
    attrs: r
  }) {
    const o = Gd(), i = ve("Ellipsis", "-ellipsis", lc, Qu, e, o), a = _(null), l = _(null), s = _(null), d = _(!1), u = P(() => {
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
            value: w
          } = l;
          w && (x = w.getBoundingClientRect().width <= y.getBoundingClientRect().width);
        }
        v(y, x);
      }
      return x;
    }
    const h = P(() => e.expandTrigger === "click" ? () => {
      var x;
      const {
        value: b
      } = d;
      b && ((x = s.value) === null || x === void 0 || x.setShow(!1)), d.value = !b;
    } : void 0);
    Sa(() => {
      var x;
      e.tooltip && ((x = s.value) === null || x === void 0 || x.setShow(!1));
    });
    const p = () => f("span", Object.assign({}, Yt(r, {
      class: [`${o.value}-ellipsis`, e.lineClamp !== void 0 ? va(o.value) : void 0, e.expandTrigger === "click" ? pa(o.value, "pointer") : void 0],
      style: u.value
    }), {
      ref: "triggerRef",
      onClick: h.value,
      onMouseenter: (
        // get tooltip disabled will derive cursor style
        e.expandTrigger === "click" ? c : void 0
      )
    }), e.lineClamp ? t : f("span", {
      ref: "triggerInnerRef"
    }, t));
    function m(x) {
      if (!x) return;
      const b = u.value, y = va(o.value);
      e.lineClamp !== void 0 ? g(x, y, "add") : g(x, y, "remove");
      for (const B in b)
        x.style[B] !== b[B] && (x.style[B] = b[B]);
    }
    function v(x, b) {
      const y = pa(o.value, "pointer");
      e.expandTrigger === "click" && !b ? g(x, y, "add") : g(x, y, "remove");
    }
    function g(x, b, y) {
      y === "add" ? x.classList.contains(b) || x.classList.add(b) : x.classList.contains(b) && x.classList.remove(b);
    }
    return {
      mergedTheme: i,
      triggerRef: a,
      triggerInnerRef: l,
      tooltipRef: s,
      handleClick: h,
      renderTrigger: p,
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
      return f(ac, Object.assign({
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
}), iy = ee({
  name: "PerformantEllipsis",
  props: sc,
  inheritAttrs: !1,
  setup(e, {
    attrs: t,
    slots: r
  }) {
    const o = _(!1), i = Gd();
    return Dn("-ellipsis", lc, i), {
      mouseEntered: o,
      renderTrigger: () => {
        const {
          lineClamp: l
        } = e, s = i.value;
        return f("span", Object.assign({}, Yt(t, {
          class: [`${s}-ellipsis`, l !== void 0 ? va(s) : void 0, e.expandTrigger === "click" ? pa(s, "pointer") : void 0],
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
    return this.mouseEntered ? f(dl, Yt({}, this.$attrs, this.$props), this.$slots) : this.renderTrigger();
  }
}), ay = ee({
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
    if (l && !t ? a = l(o, this.index) : t ? a = (e = o[s]) === null || e === void 0 ? void 0 : e.value : a = i ? i(to(o, s), o, r) : to(o, s), d)
      if (typeof d == "object") {
        const {
          mergedTheme: u
        } = this;
        return r.ellipsisComponent === "performant-ellipsis" ? f(iy, Object.assign({}, d, {
          theme: u.peers.Ellipsis,
          themeOverrides: u.peerOverrides.Ellipsis
        }), {
          default: () => a
        }) : f(dl, Object.assign({}, d, {
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
}), Ys = ee({
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
    }, f(Rr, null, {
      default: () => this.loading ? f(tr, {
        key: "loading",
        clsPrefix: this.clsPrefix,
        radius: 85,
        strokeWidth: 15,
        scale: 0.88
      }) : this.renderExpandIcon ? this.renderExpandIcon({
        expanded: this.expanded,
        rowData: this.rowData
      }) : f(ft, {
        clsPrefix: e,
        key: "base-icon"
      }, {
        default: () => f(Ya, null)
      })
    }));
  }
}), ly = ee({
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
    } = ze(e), o = wt("DataTable", r, t), {
      mergedClsPrefixRef: i,
      mergedThemeRef: a,
      localeRef: l
    } = pe(Jt), s = _(e.value), d = P(() => {
      const {
        value: v
      } = s;
      return Array.isArray(v) ? v : null;
    }), u = P(() => {
      const {
        value: v
      } = s;
      return ji(e.column) ? Array.isArray(v) && v.length && v[0] || null : Array.isArray(v) ? null : v;
    });
    function c(v) {
      e.onChange(v);
    }
    function h(v) {
      e.multiple && Array.isArray(v) ? s.value = v : ji(e.column) && !Array.isArray(v) ? s.value = [v] : s.value = v;
    }
    function p() {
      c(s.value), e.onConfirm();
    }
    function m() {
      e.multiple || ji(e.column) ? c([]) : c(null), e.onClear();
    }
    return {
      mergedClsPrefix: i,
      rtlEnabled: o,
      mergedTheme: a,
      locale: l,
      checkboxGroupValue: d,
      radioGroupValue: u,
      handleChange: h,
      handleConfirmClick: p,
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
    }, f(nr, null, {
      default: () => {
        const {
          checkboxGroupValue: o,
          handleChange: i
        } = this;
        return this.multiple ? f(rC, {
          value: o,
          class: `${r}-data-table-filter-menu__group`,
          onUpdateValue: i
        }, {
          default: () => this.options.map((a) => f(il, {
            key: a.value,
            theme: e.peers.Checkbox,
            themeOverrides: e.peerOverrides.Checkbox,
            value: a.value
          }, {
            default: () => a.label
          }))
        }) : f(ny, {
          name: this.radioGroupName,
          class: `${r}-data-table-filter-menu__group`,
          value: this.radioGroupValue,
          onUpdateValue: this.handleChange
        }, {
          default: () => this.options.map((a) => f(ic, {
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
    }, f(qn, {
      size: "tiny",
      theme: e.peers.Button,
      themeOverrides: e.peerOverrides.Button,
      onClick: this.handleClearClick
    }, {
      default: () => t.clear
    }), f(qn, {
      theme: e.peers.Button,
      themeOverrides: e.peerOverrides.Button,
      type: "primary",
      size: "tiny",
      onClick: this.handleConfirmClick
    }, {
      default: () => t.confirm
    })));
  }
}), sy = ee({
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
function dy(e, t, r) {
  const o = Object.assign({}, e);
  return o[t] = r, o;
}
const uy = ee({
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
    } = ze(), {
      mergedThemeRef: r,
      mergedClsPrefixRef: o,
      mergedFilterStateRef: i,
      filterMenuCssVarsRef: a,
      paginationBehaviorOnFilterRef: l,
      doUpdatePage: s,
      doUpdateFilters: d,
      filterIconPopoverPropsRef: u
    } = pe(Jt), c = _(!1), h = i, p = P(() => e.column.filterMultiple !== !1), m = P(() => {
      const B = h.value[e.column.key];
      if (B === void 0) {
        const {
          value: w
        } = p;
        return w ? [] : null;
      }
      return B;
    }), v = P(() => {
      const {
        value: B
      } = m;
      return Array.isArray(B) ? B.length > 0 : B !== null;
    }), g = P(() => {
      var B, w;
      return ((w = (B = t == null ? void 0 : t.value) === null || B === void 0 ? void 0 : B.DataTable) === null || w === void 0 ? void 0 : w.renderFilter) || e.column.renderFilter;
    });
    function x(B) {
      const w = dy(h.value, e.column.key, B);
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
      active: v,
      showPopover: c,
      mergedRenderFilter: g,
      filterIconPopoverProps: u,
      filterMultiple: p,
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
    return f(or, Object.assign({
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
          return f(sy, {
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
        }) : f(ft, {
          clsPrefix: t
        }, {
          default: () => f(cb, null)
        }));
      },
      default: () => {
        const {
          renderFilterMenu: i
        } = this.column;
        return i ? i({
          hide: r
        }) : f(ly, {
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
}), cy = ee({
  name: "ColumnResizeButton",
  props: {
    onResizeStart: Function,
    onResize: Function,
    onResizeEnd: Function
  },
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = pe(Jt), r = _(!1);
    let o = 0;
    function i(d) {
      return d.clientX;
    }
    function a(d) {
      var u;
      d.preventDefault();
      const c = r.value;
      o = i(d), r.value = !0, c || (et("mousemove", window, l), et("mouseup", window, s), (u = e.onResizeStart) === null || u === void 0 || u.call(e));
    }
    function l(d) {
      var u;
      (u = e.onResize) === null || u === void 0 || u.call(e, i(d) - o);
    }
    function s() {
      var d;
      r.value = !1, (d = e.onResizeEnd) === null || d === void 0 || d.call(e), He("mousemove", window, l), He("mouseup", window, s);
    }
    return Ct(() => {
      He("mousemove", window, l), He("mouseup", window, s);
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
}), fy = ee({
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
}), hy = ee({
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
    } = ze(), {
      mergedSortStateRef: r,
      mergedClsPrefixRef: o
    } = pe(Jt), i = P(() => r.value.find((d) => d.columnKey === e.column.key)), a = P(() => i.value !== void 0), l = P(() => {
      const {
        value: d
      } = i;
      return d && a.value ? d.order : !1;
    }), s = P(() => {
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
    return e ? f(fy, {
      render: e,
      order: t
    }) : f("span", {
      class: [`${r}-data-table-sorter`, t === "ascend" && `${r}-data-table-sorter--asc`, t === "descend" && `${r}-data-table-sorter--desc`]
    }, o ? o({
      order: t
    }) : f(ft, {
      clsPrefix: r
    }, {
      default: () => f(rb, null)
    }));
  }
}), ul = "n-dropdown-menu", ui = "n-dropdown", Zs = "n-dropdown-option", dc = ee({
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
}), vy = ee({
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
    } = pe(ul), {
      renderLabelRef: r,
      labelFieldRef: o,
      nodePropsRef: i,
      renderOptionRef: a
    } = pe(ui);
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
    }, dt(s.icon)), f("div", {
      class: `${t}-dropdown-option-body__label`,
      "data-dropdown-option": !0
    }, a ? a(s) : dt((e = s.title) !== null && e !== void 0 ? e : s[this.labelField])), f("div", {
      class: [`${t}-dropdown-option-body__suffix`, r && `${t}-dropdown-option-body__suffix--has-submenu`],
      "data-dropdown-option": !0
    })));
    return l ? l({
      node: d,
      option: s
    }) : d;
  }
});
function py(e) {
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
const gy = {
  name: "Icon",
  common: qe,
  self: py
}, my = R("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [N("color-transition", {
  transition: "color .3s var(--n-bezier)"
}), N("depth", {
  color: "var(--n-color)"
}, [T("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), T("svg", {
  height: "1em",
  width: "1em"
})]), xy = Object.assign(Object.assign({}, ve.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), cl = ee({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: xy,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = ze(e), o = ve("Icon", "-icon", my, gy, e, t), i = P(() => {
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
    }), a = r ? Ue("icon", P(() => `${e.depth || "d"}`), i, e) : void 0;
    return {
      mergedClsPrefix: t,
      mergedStyle: P(() => {
        const {
          size: l,
          color: s
        } = e;
        return {
          fontSize: vt(l),
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
    return !((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && kt("icon", "don't wrap `n-icon` inside `n-icon`"), a == null || a(), f("i", Yt(this.$attrs, {
      role: "img",
      class: [`${o}-icon`, l, {
        [`${o}-icon--depth`]: r,
        [`${o}-icon--color-transition`]: r !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), i ? f(i) : this.$slots);
  }
});
function ga(e, t) {
  return e.type === "submenu" || e.type === void 0 && e[t] !== void 0;
}
function by(e) {
  return e.type === "group";
}
function uc(e) {
  return e.type === "divider";
}
function Cy(e) {
  return e.type === "render";
}
const cc = ee({
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
    const t = pe(ui), {
      hoverKeyRef: r,
      keyboardKeyRef: o,
      lastToggledSubmenuKeyRef: i,
      pendingKeyPathRef: a,
      activeKeyPathRef: l,
      animatedRef: s,
      mergedShowRef: d,
      renderLabelRef: u,
      renderIconRef: c,
      labelFieldRef: h,
      childrenFieldRef: p,
      renderOptionRef: m,
      nodePropsRef: v,
      menuPropsRef: g
    } = t, x = pe(Zs, null), b = pe(ul), y = pe(ao), B = P(() => e.tmNode.rawNode), w = P(() => {
      const {
        value: I
      } = p;
      return ga(e.tmNode.rawNode, I);
    }), S = P(() => {
      const {
        disabled: I
      } = e.tmNode;
      return I;
    }), F = P(() => {
      if (!w.value) return !1;
      const {
        key: I,
        disabled: V
      } = e.tmNode;
      if (V) return !1;
      const {
        value: te
      } = r, {
        value: X
      } = o, {
        value: q
      } = i, {
        value: H
      } = a;
      return te !== null ? H.includes(I) : X !== null ? H.includes(I) && H[H.length - 1] !== I : q !== null ? H.includes(I) : !1;
    }), C = P(() => o.value === null && !s.value), z = gh(F, 300, C), E = P(() => !!(x != null && x.enteringSubmenuRef.value)), D = _(!1);
    $e(Zs, {
      enteringSubmenuRef: D
    });
    function K() {
      D.value = !0;
    }
    function O() {
      D.value = !1;
    }
    function n() {
      const {
        parentKey: I,
        tmNode: V
      } = e;
      V.disabled || d.value && (i.value = I, o.value = null, r.value = V.key);
    }
    function A() {
      const {
        tmNode: I
      } = e;
      I.disabled || d.value && r.value !== I.key && n();
    }
    function $(I) {
      if (e.tmNode.disabled || !d.value) return;
      const {
        relatedTarget: V
      } = I;
      V && !Ot({
        target: V
      }, "dropdownOption") && !Ot({
        target: V
      }, "scrollbarRail") && (r.value = null);
    }
    function L() {
      const {
        value: I
      } = w, {
        tmNode: V
      } = e;
      d.value && !I && !V.disabled && (t.doSelect(V.key, V.rawNode), t.doUpdateShow(!1));
    }
    return {
      labelField: h,
      renderLabel: u,
      renderIcon: c,
      siblingHasIcon: b.showIconRef,
      siblingHasSubmenu: b.hasSubmenuRef,
      menuProps: g,
      popoverBody: y,
      animated: s,
      mergedShowSubmenu: P(() => z.value && !E.value),
      rawNode: B,
      hasSubmenu: w,
      pending: je(() => {
        const {
          value: I
        } = a, {
          key: V
        } = e.tmNode;
        return I.includes(V);
      }),
      childActive: je(() => {
        const {
          value: I
        } = l, {
          key: V
        } = e.tmNode, te = I.findIndex((X) => V === X);
        return te === -1 ? !1 : te < I.length - 1;
      }),
      active: je(() => {
        const {
          value: I
        } = l, {
          key: V
        } = e.tmNode, te = I.findIndex((X) => V === X);
        return te === -1 ? !1 : te === I.length - 1;
      }),
      mergedDisabled: S,
      renderOption: m,
      nodeProps: v,
      handleClick: L,
      handleMouseMove: A,
      handleMouseEnter: n,
      handleMouseLeave: $,
      handleSubmenuBeforeEnter: K,
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
      nodeProps: h,
      props: p,
      scrollable: m
    } = this;
    let v = null;
    if (i) {
      const y = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, o, o.children);
      v = f(fc, Object.assign({}, y, {
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
    }, x = h == null ? void 0 : h(o), b = f("div", Object.assign({
      class: [`${a}-dropdown-option`, x == null ? void 0 : x.class],
      "data-dropdown-option": !0
    }, x), f("div", Yt(g, p), [f("div", {
      class: [`${a}-dropdown-option-body__prefix`, l && `${a}-dropdown-option-body__prefix--show-icon`]
    }, [u ? u(o) : dt(o.icon)]), f("div", {
      "data-dropdown-option": !0,
      class: `${a}-dropdown-option-body__label`
    }, d ? d(o) : dt((t = o[this.labelField]) !== null && t !== void 0 ? t : o.title)), f("div", {
      "data-dropdown-option": !0,
      class: [`${a}-dropdown-option-body__suffix`, s && `${a}-dropdown-option-body__suffix--has-submenu`]
    }, this.hasSubmenu ? f(cl, null, {
      default: () => f(Ya, null)
    }) : null)]), this.hasSubmenu ? f(za, null, {
      default: () => [f(Ea, null, {
        default: () => f("div", {
          class: `${a}-dropdown-offset-container`
        }, f(Oa, {
          show: this.mergedShowSubmenu,
          placement: this.placement,
          to: m && this.popoverBody || void 0,
          teleportDisabled: !m
        }, {
          default: () => f("div", {
            class: `${a}-dropdown-menu-wrapper`
          }, r ? f(zt, {
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
      node: b,
      option: o
    }) : b;
  }
}), yy = ee({
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
    return f(ht, null, f(vy, {
      clsPrefix: r,
      tmNode: e,
      key: e.key
    }), o == null ? void 0 : o.map((i) => {
      const {
        rawNode: a
      } = i;
      return a.show === !1 ? null : uc(a) ? f(dc, {
        clsPrefix: r,
        key: i.key
      }) : i.isGroup ? (kt("dropdown", "`group` node is not allowed to be put in `group` node."), null) : f(cc, {
        clsPrefix: r,
        tmNode: i,
        parentKey: t,
        key: i.key
      });
    }));
  }
}), wy = ee({
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
}), fc = ee({
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
    } = pe(ui);
    $e(ul, {
      showIconRef: P(() => {
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
      hasSubmenuRef: P(() => {
        const {
          value: i
        } = r;
        return e.tmNodes.some((a) => {
          var l;
          if (a.isGroup)
            return (l = a.children) === null || l === void 0 ? void 0 : l.some(({
              rawNode: d
            }) => ga(d, i));
          const {
            rawNode: s
          } = a;
          return ga(s, i);
        });
      })
    });
    const o = _(null);
    return $e(ni, null), $e(ti, null), $e(ao, o), {
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
      return a.show === !1 ? null : Cy(a) ? f(wy, {
        tmNode: i,
        key: i.key
      }) : uc(a) ? f(dc, {
        clsPrefix: t,
        key: i.key
      }) : by(a) ? f(yy, {
        clsPrefix: t,
        tmNode: i,
        parentKey: e,
        key: i.key
      }) : f(cc, {
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
    }, r ? f(Ru, {
      contentClass: `${t}-dropdown-menu__content`
    }, {
      default: () => o
    }) : o, this.showArrow ? Eu({
      clsPrefix: t,
      arrowStyle: this.arrowStyle,
      arrowClass: void 0,
      arrowWrapperClass: void 0,
      arrowWrapperStyle: void 0
    }) : null);
  }
}), Sy = R("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [co(), R("dropdown-option", `
 position: relative;
 `, [T("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [T("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), R("dropdown-option-body", `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [T("&::before", `
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
 `, [M("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), T("&::before", "background-color: var(--n-option-color-hover);")]), N("active", `
 color: var(--n-option-text-color-active);
 `, [M("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), T("&::before", "background-color: var(--n-option-color-active);")]), N("child-active", `
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
 `), R("icon", `
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
 `), R("icon", `
 font-size: var(--n-option-icon-size);
 `)]), R("dropdown-menu", "pointer-events: all;")]), R("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), R("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), R("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), T(">", [R("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Ye("scrollable", `
 padding: var(--n-padding);
 `), N("scrollable", [M("content", `
 padding: var(--n-padding);
 `)])]), By = {
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
}, ky = Object.keys(Un), Fy = Object.assign(Object.assign(Object.assign({}, Un), By), ve.props), hc = ee({
  name: "Dropdown",
  inheritAttrs: !1,
  props: Fy,
  setup(e) {
    const t = _(!1), r = Et(oe(e, "show"), t), o = P(() => {
      const {
        keyField: O,
        childrenField: n
      } = e;
      return si(e.options, {
        getKey(A) {
          return A[O];
        },
        getDisabled(A) {
          return A.disabled === !0;
        },
        getIgnored(A) {
          return A.type === "divider" || A.type === "render";
        },
        getChildren(A) {
          return A[n];
        }
      });
    }), i = P(() => o.value.treeNodes), a = _(null), l = _(null), s = _(null), d = P(() => {
      var O, n, A;
      return (A = (n = (O = a.value) !== null && O !== void 0 ? O : l.value) !== null && n !== void 0 ? n : s.value) !== null && A !== void 0 ? A : null;
    }), u = P(() => o.value.getPath(d.value).keyPath), c = P(() => o.value.getPath(e.value).keyPath), h = je(() => e.keyboard && r.value);
    hh({
      keydown: {
        ArrowUp: {
          prevent: !0,
          handler: S
        },
        ArrowRight: {
          prevent: !0,
          handler: w
        },
        ArrowDown: {
          prevent: !0,
          handler: F
        },
        ArrowLeft: {
          prevent: !0,
          handler: B
        },
        Enter: {
          prevent: !0,
          handler: C
        },
        Escape: y
      }
    }, h);
    const {
      mergedClsPrefixRef: p,
      inlineThemeDisabled: m
    } = ze(e), v = ve("Dropdown", "-dropdown", Sy, Zu, e, p);
    $e(ui, {
      labelFieldRef: oe(e, "labelField"),
      childrenFieldRef: oe(e, "childrenField"),
      renderLabelRef: oe(e, "renderLabel"),
      renderIconRef: oe(e, "renderIcon"),
      hoverKeyRef: a,
      keyboardKeyRef: l,
      lastToggledSubmenuKeyRef: s,
      pendingKeyPathRef: u,
      activeKeyPathRef: c,
      animatedRef: oe(e, "animated"),
      mergedShowRef: r,
      nodePropsRef: oe(e, "nodeProps"),
      renderOptionRef: oe(e, "renderOption"),
      menuPropsRef: oe(e, "menuProps"),
      doSelect: g,
      doUpdateShow: x
    }), Le(r, (O) => {
      !e.animated && !O && b();
    });
    function g(O, n) {
      const {
        onSelect: A
      } = e;
      A && ne(A, O, n);
    }
    function x(O) {
      const {
        "onUpdate:show": n,
        onUpdateShow: A
      } = e;
      n && ne(n, O), A && ne(A, O), t.value = O;
    }
    function b() {
      a.value = null, l.value = null, s.value = null;
    }
    function y() {
      x(!1);
    }
    function B() {
      E("left");
    }
    function w() {
      E("right");
    }
    function S() {
      E("up");
    }
    function F() {
      E("down");
    }
    function C() {
      const O = z();
      O != null && O.isLeaf && r.value && (g(O.key, O.rawNode), x(!1));
    }
    function z() {
      var O;
      const {
        value: n
      } = o, {
        value: A
      } = d;
      return !n || A === null ? null : (O = n.getNode(A)) !== null && O !== void 0 ? O : null;
    }
    function E(O) {
      const {
        value: n
      } = d, {
        value: {
          getFirstAvailableNode: A
        }
      } = o;
      let $ = null;
      if (n === null) {
        const L = A();
        L !== null && ($ = L.key);
      } else {
        const L = z();
        if (L) {
          let I;
          switch (O) {
            case "down":
              I = L.getNext();
              break;
            case "up":
              I = L.getPrev();
              break;
            case "right":
              I = L.getChild();
              break;
            case "left":
              I = L.getParent();
              break;
          }
          I && ($ = I.key);
        }
      }
      $ !== null && (a.value = null, l.value = $);
    }
    const D = P(() => {
      const {
        size: O,
        inverted: n
      } = e, {
        common: {
          cubicBezierEaseInOut: A
        },
        self: $
      } = v.value, {
        padding: L,
        dividerColor: I,
        borderRadius: V,
        optionOpacityDisabled: te,
        [J("optionIconSuffixWidth", O)]: X,
        [J("optionSuffixWidth", O)]: q,
        [J("optionIconPrefixWidth", O)]: H,
        [J("optionPrefixWidth", O)]: G,
        [J("fontSize", O)]: Y,
        [J("optionHeight", O)]: ie,
        [J("optionIconSize", O)]: le
      } = $, fe = {
        "--n-bezier": A,
        "--n-font-size": Y,
        "--n-padding": L,
        "--n-border-radius": V,
        "--n-option-height": ie,
        "--n-option-prefix-width": G,
        "--n-option-icon-prefix-width": H,
        "--n-option-suffix-width": q,
        "--n-option-icon-suffix-width": X,
        "--n-option-icon-size": le,
        "--n-divider-color": I,
        "--n-option-opacity-disabled": te
      };
      return n ? (fe["--n-color"] = $.colorInverted, fe["--n-option-color-hover"] = $.optionColorHoverInverted, fe["--n-option-color-active"] = $.optionColorActiveInverted, fe["--n-option-text-color"] = $.optionTextColorInverted, fe["--n-option-text-color-hover"] = $.optionTextColorHoverInverted, fe["--n-option-text-color-active"] = $.optionTextColorActiveInverted, fe["--n-option-text-color-child-active"] = $.optionTextColorChildActiveInverted, fe["--n-prefix-color"] = $.prefixColorInverted, fe["--n-suffix-color"] = $.suffixColorInverted, fe["--n-group-header-text-color"] = $.groupHeaderTextColorInverted) : (fe["--n-color"] = $.color, fe["--n-option-color-hover"] = $.optionColorHover, fe["--n-option-color-active"] = $.optionColorActive, fe["--n-option-text-color"] = $.optionTextColor, fe["--n-option-text-color-hover"] = $.optionTextColorHover, fe["--n-option-text-color-active"] = $.optionTextColorActive, fe["--n-option-text-color-child-active"] = $.optionTextColorChildActive, fe["--n-prefix-color"] = $.prefixColor, fe["--n-suffix-color"] = $.suffixColor, fe["--n-group-header-text-color"] = $.groupHeaderTextColor), fe;
    }), K = m ? Ue("dropdown", P(() => `${e.size[0]}${e.inverted ? "i" : ""}`), D, e) : void 0;
    return {
      mergedClsPrefix: p,
      mergedTheme: v,
      // data
      tmNodes: i,
      // show
      mergedShow: r,
      // methods
      handleAfterLeave: () => {
        e.animated && b();
      },
      doUpdateShow: x,
      cssVars: m ? void 0 : D,
      themeClass: K == null ? void 0 : K.themeClass,
      onRender: K == null ? void 0 : K.onRender
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
      const h = (c == null ? void 0 : c(void 0, this.tmNodes.map((m) => m.rawNode))) || {}, p = {
        ref: qd(i),
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
      return f(fc, Yt(this.$attrs, p, h));
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
    return f(or, Object.assign({}, gn(this.$props, ky), r), {
      trigger: () => {
        var o, i;
        return (i = (o = this.$slots).default) === null || i === void 0 ? void 0 : i.call(o);
      }
    });
  }
}), vc = "_n_all__", pc = "_n_none__";
function Ry(e, t, r, o) {
  return e ? (i) => {
    for (const a of e)
      switch (i) {
        case vc:
          r(!0);
          return;
        case pc:
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
function Py(e, t) {
  return e ? e.map((r) => {
    switch (r) {
      case "all":
        return {
          label: t.checkTableAll,
          key: vc
        };
      case "none":
        return {
          label: t.uncheckTableAll,
          key: pc
        };
      default:
        return r;
    }
  }) : [];
}
const Ay = ee({
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
    } = pe(Jt), s = P(() => Ry(o.value, i, a, l)), d = P(() => Py(o.value, r.value));
    return () => {
      var u, c, h, p;
      const {
        clsPrefix: m
      } = e;
      return f(hc, {
        theme: (c = (u = t.theme) === null || u === void 0 ? void 0 : u.peers) === null || c === void 0 ? void 0 : c.Dropdown,
        themeOverrides: (p = (h = t.themeOverrides) === null || h === void 0 ? void 0 : h.peers) === null || p === void 0 ? void 0 : p.Dropdown,
        options: d.value,
        onSelect: s.value
      }, {
        default: () => f(ft, {
          clsPrefix: m,
          class: `${m}-data-table-check-extra`
        }, {
          default: () => f(ku, null)
        })
      });
    };
  }
});
function Vi(e) {
  return typeof e.title == "function" ? e.title(e) : e.title;
}
const $y = ee({
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
}), gc = ee({
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
      mergedSortStateRef: h,
      componentId: p,
      mergedTableLayoutRef: m,
      headerCheckboxDisabledRef: v,
      virtualScrollHeaderRef: g,
      headerHeightRef: x,
      onUnstableColumnResize: b,
      doUpdateResizableWidth: y,
      handleTableHeaderScroll: B,
      deriveNextSorter: w,
      doUncheckAll: S,
      doCheckAll: F
    } = pe(Jt), C = _(), z = _({});
    function E($) {
      const L = z.value[$];
      return L == null ? void 0 : L.getBoundingClientRect().width;
    }
    function D() {
      a.value ? S() : F();
    }
    function K($, L) {
      if (Ot($, "dataTableFilter") || Ot($, "dataTableResizable") || !Wi(L)) return;
      const I = h.value.find((te) => te.columnKey === L.key) || null, V = KC(L, I);
      w(V);
    }
    const O = /* @__PURE__ */ new Map();
    function n($) {
      O.set($.key, E($.key));
    }
    function A($, L) {
      const I = O.get($.key);
      if (I === void 0)
        return;
      const V = I + L, te = jC(V, $.minWidth, $.maxWidth);
      b(V, te, $, E), y($, te);
    }
    return {
      cellElsRef: z,
      componentId: p,
      mergedSortState: h,
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
      headerCheckboxDisabled: v,
      headerHeight: x,
      virtualScrollHeader: g,
      virtualListRef: C,
      handleCheckboxUpdateChecked: D,
      handleColHeaderClick: K,
      handleTableHeaderScroll: B,
      handleColumnResizeStart: n,
      handleColumnResize: A
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
      componentId: h,
      discrete: p,
      mergedTableLayout: m,
      headerCheckboxDisabled: v,
      mergedSortState: g,
      virtualScrollHeader: x,
      handleColHeaderClick: b,
      handleCheckboxUpdateChecked: y,
      handleColumnResizeStart: B,
      handleColumnResize: w
    } = this, S = (E, D, K) => E.map(({
      column: O,
      colIndex: n,
      colSpan: A,
      rowSpan: $,
      isLast: L
    }) => {
      var I, V;
      const te = qt(O), {
        ellipsis: X
      } = O, q = () => O.type === "selection" ? O.multiple !== !1 ? f(ht, null, f(il, {
        key: i,
        privateInsideTable: !0,
        checked: a,
        indeterminate: l,
        disabled: v,
        onUpdateChecked: y
      }), c ? f(Ay, {
        clsPrefix: t
      }) : null) : null : f(ht, null, f("div", {
        class: `${t}-data-table-th__title-wrapper`
      }, f("div", {
        class: `${t}-data-table-th__title`
      }, X === !0 || X && !X.tooltip ? f("div", {
        class: `${t}-data-table-th__ellipsis`
      }, Vi(O)) : X && typeof X == "object" ? f(dl, Object.assign({}, X, {
        theme: u.peers.Ellipsis,
        themeOverrides: u.peerOverrides.Ellipsis
      }), {
        default: () => Vi(O)
      }) : Vi(O)), Wi(O) ? f(hy, {
        column: O
      }) : null), Gs(O) ? f(uy, {
        column: O,
        options: O.filterOptions
      }) : null, nc(O) ? f(cy, {
        onResizeStart: () => {
          B(O);
        },
        onResize: (ie) => {
          w(O, ie);
        }
      }) : null), H = te in r, G = te in o, Y = D && !O.fixed ? "div" : "th";
      return f(Y, {
        ref: (ie) => e[te] = ie,
        key: te,
        style: [D && !O.fixed ? {
          position: "absolute",
          left: yt(D(n)),
          top: 0,
          bottom: 0
        } : {
          left: yt((I = r[te]) === null || I === void 0 ? void 0 : I.start),
          right: yt((V = o[te]) === null || V === void 0 ? void 0 : V.start)
        }, {
          width: yt(O.width),
          textAlign: O.titleAlign || O.align,
          height: K
        }],
        colspan: A,
        rowspan: $,
        "data-col-key": te,
        class: [`${t}-data-table-th`, (H || G) && `${t}-data-table-th--fixed-${H ? "left" : "right"}`, {
          [`${t}-data-table-th--sorting`]: rc(O, g),
          [`${t}-data-table-th--filterable`]: Gs(O),
          [`${t}-data-table-th--sortable`]: Wi(O),
          [`${t}-data-table-th--selection`]: O.type === "selection",
          [`${t}-data-table-th--last`]: L
        }, O.className],
        onClick: O.type !== "selection" && O.type !== "expand" && !("children" in O) ? (ie) => {
          b(ie, O);
        } : void 0
      }, q());
    });
    if (x) {
      const {
        headerHeight: E
      } = this;
      let D = 0, K = 0;
      return d.forEach((O) => {
        O.column.fixed === "left" ? D++ : O.column.fixed === "right" && K++;
      }), f(Ia, {
        ref: "virtualListRef",
        class: `${t}-data-table-base-table-header`,
        style: {
          height: yt(E)
        },
        onScroll: this.handleTableHeaderScroll,
        columns: d,
        itemSize: E,
        showScrollbar: !1,
        items: [{}],
        itemResizable: !1,
        visibleItemsTag: $y,
        visibleItemsProps: {
          clsPrefix: t,
          id: h,
          cols: d,
          width: vt(this.scrollX)
        },
        renderItemWithCols: ({
          startColIndex: O,
          endColIndex: n,
          getLeft: A
        }) => {
          const $ = d.map((I, V) => ({
            column: I.column,
            isLast: V === d.length - 1,
            colIndex: I.index,
            colSpan: 1,
            rowSpan: 1
          })).filter(({
            column: I
          }, V) => !!(O <= V && V <= n || I.fixed)), L = S($, A, yt(E));
          return L.splice(D, 0, f("th", {
            colspan: d.length - D - K,
            style: {
              pointerEvents: "none",
              visibility: "hidden",
              height: 0
            }
          })), f("tr", {
            style: {
              position: "relative"
            }
          }, L);
        }
      }, {
        default: ({
          renderedItemWithCols: O
        }) => O
      });
    }
    const F = f("thead", {
      class: `${t}-data-table-thead`,
      "data-n-id": h
    }, s.map((E) => f("tr", {
      class: `${t}-data-table-tr`
    }, S(E, null, void 0))));
    if (!p)
      return F;
    const {
      handleTableHeaderScroll: C,
      scrollX: z
    } = this;
    return f("div", {
      class: `${t}-data-table-base-table-header`,
      onScroll: C
    }, f("table", {
      class: `${t}-data-table-table`,
      style: {
        minWidth: vt(z),
        tableLayout: m
      }
    }, f("colgroup", null, d.map((E) => f("col", {
      key: E.key,
      style: E.style
    }))), F));
  }
});
function zy(e, t) {
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
const Ey = ee({
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
}), Dy = ee({
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
      fixedColumnRightMapRef: h,
      mergedCurrentPageRef: p,
      rowClassNameRef: m,
      leftActiveFixedColKeyRef: v,
      leftActiveFixedChildrenColKeysRef: g,
      rightActiveFixedColKeyRef: x,
      rightActiveFixedChildrenColKeysRef: b,
      renderExpandRef: y,
      hoverKeyRef: B,
      summaryRef: w,
      mergedSortStateRef: S,
      virtualScrollRef: F,
      virtualScrollXRef: C,
      heightForRowRef: z,
      minRowHeightRef: E,
      componentId: D,
      mergedTableLayoutRef: K,
      childTriggerColIndexRef: O,
      indentRef: n,
      rowPropsRef: A,
      maxHeightRef: $,
      stripedRef: L,
      loadingRef: I,
      onLoadRef: V,
      loadingKeySetRef: te,
      expandableRef: X,
      stickyExpandedRowsRef: q,
      renderExpandIconRef: H,
      summaryPlacementRef: G,
      treeMateRef: Y,
      scrollbarPropsRef: ie,
      setHeaderScrollLeft: le,
      doUpdateExpandedRowKeys: fe,
      handleTableBodyScroll: Se,
      doCheck: U,
      doUncheck: de,
      renderCell: Fe
    } = pe(Jt), me = pe(Zt), Re = _(null), Pe = _(null), nt = _(null), Ge = je(() => d.value.length === 0), at = je(() => e.showHeader || !Ge.value), lt = je(() => e.showHeader || Ge.value);
    let xe = "";
    const be = P(() => new Set(o.value));
    function Ae(ue) {
      var Be;
      return (Be = Y.value.getNode(ue)) === null || Be === void 0 ? void 0 : Be.rawNode;
    }
    function Me(ue, Be, k) {
      const W = Ae(ue.key);
      if (!W) {
        kt("data-table", `fail to get row data with key ${ue.key}`);
        return;
      }
      if (k) {
        const Z = d.value.findIndex((ae) => ae.key === xe);
        if (Z !== -1) {
          const ae = d.value.findIndex((we) => we.key === ue.key), se = Math.min(Z, ae), he = Math.max(Z, ae), ge = [];
          d.value.slice(se, he + 1).forEach((we) => {
            we.disabled || ge.push(we.key);
          }), Be ? U(ge, !1, W) : de(ge, W), xe = ue.key;
          return;
        }
      }
      Be ? U(ue.key, !1, W) : de(ue.key, W), xe = ue.key;
    }
    function Ve(ue) {
      const Be = Ae(ue.key);
      if (!Be) {
        kt("data-table", `fail to get row data with key ${ue.key}`);
        return;
      }
      U(ue.key, !0, Be);
    }
    function re() {
      if (!at.value) {
        const {
          value: Be
        } = nt;
        return Be || null;
      }
      if (F.value)
        return rt();
      const {
        value: ue
      } = Re;
      return ue ? ue.containerRef : null;
    }
    function ce(ue, Be) {
      var k;
      if (te.value.has(ue)) return;
      const {
        value: W
      } = o, Z = W.indexOf(ue), ae = Array.from(W);
      ~Z ? (ae.splice(Z, 1), fe(ae)) : Be && !Be.isLeaf && !Be.shallowLoaded ? (te.value.add(ue), (k = V.value) === null || k === void 0 || k.call(V, Be.rawNode).then(() => {
        const {
          value: se
        } = o, he = Array.from(se);
        ~he.indexOf(ue) || he.push(ue), fe(he);
      }).finally(() => {
        te.value.delete(ue);
      })) : (ae.push(ue), fe(ae));
    }
    function De() {
      B.value = null;
    }
    function rt() {
      const {
        value: ue
      } = Pe;
      return (ue == null ? void 0 : ue.listElRef) || null;
    }
    function St() {
      const {
        value: ue
      } = Pe;
      return (ue == null ? void 0 : ue.itemsElRef) || null;
    }
    function Bt(ue) {
      var Be;
      Se(ue), (Be = Re.value) === null || Be === void 0 || Be.sync();
    }
    function ut(ue) {
      var Be;
      const {
        onResize: k
      } = e;
      k && k(ue), (Be = Re.value) === null || Be === void 0 || Be.sync();
    }
    const Ze = {
      getScrollContainer: re,
      scrollTo(ue, Be) {
        var k, W;
        F.value ? (k = Pe.value) === null || k === void 0 || k.scrollTo(ue, Be) : (W = Re.value) === null || W === void 0 || W.scrollTo(ue, Be);
      }
    }, pt = T([({
      props: ue
    }) => {
      const Be = (W) => W === null ? null : T(`[data-n-id="${ue.componentId}"] [data-col-key="${W}"]::after`, {
        boxShadow: "var(--n-box-shadow-after)"
      }), k = (W) => W === null ? null : T(`[data-n-id="${ue.componentId}"] [data-col-key="${W}"]::before`, {
        boxShadow: "var(--n-box-shadow-before)"
      });
      return T([Be(ue.leftActiveFixedColKey), k(ue.rightActiveFixedColKey), ue.leftActiveFixedChildrenColKeys.map((W) => Be(W)), ue.rightActiveFixedChildrenColKeys.map((W) => k(W))]);
    }]);
    let Xe = !1;
    return Qe(() => {
      const {
        value: ue
      } = v, {
        value: Be
      } = g, {
        value: k
      } = x, {
        value: W
      } = b;
      if (!Xe && ue === null && k === null)
        return;
      const Z = {
        leftActiveFixedColKey: ue,
        leftActiveFixedChildrenColKeys: Be,
        rightActiveFixedColKey: k,
        rightActiveFixedChildrenColKeys: W,
        componentId: D
      };
      pt.mount({
        id: `n-${D}`,
        force: !0,
        props: Z,
        anchorMetaName: br,
        parent: me == null ? void 0 : me.styleMountTarget
      }), Xe = !0;
    }), gf(() => {
      pt.unmount({
        id: `n-${D}`,
        parent: me == null ? void 0 : me.styleMountTarget
      });
    }), Object.assign({
      bodyWidth: r,
      summaryPlacement: G,
      dataTableSlots: t,
      componentId: D,
      scrollbarInstRef: Re,
      virtualListRef: Pe,
      emptyElRef: nt,
      summary: w,
      mergedClsPrefix: i,
      mergedTheme: a,
      scrollX: l,
      cols: s,
      loading: I,
      bodyShowHeaderOnly: lt,
      shouldDisplaySomeTablePart: at,
      empty: Ge,
      paginatedDataAndInfo: P(() => {
        const {
          value: ue
        } = L;
        let Be = !1;
        return {
          data: d.value.map(ue ? (W, Z) => (W.isLeaf || (Be = !0), {
            tmNode: W,
            key: W.key,
            striped: Z % 2 === 1,
            index: Z
          }) : (W, Z) => (W.isLeaf || (Be = !0), {
            tmNode: W,
            key: W.key,
            striped: !1,
            index: Z
          })),
          hasChildren: Be
        };
      }),
      rawPaginatedData: u,
      fixedColumnLeftMap: c,
      fixedColumnRightMap: h,
      currentPage: p,
      rowClassName: m,
      renderExpand: y,
      mergedExpandedRowKeySet: be,
      hoverKey: B,
      mergedSortState: S,
      virtualScroll: F,
      virtualScrollX: C,
      heightForRow: z,
      minRowHeight: E,
      mergedTableLayout: K,
      childTriggerColIndex: O,
      indent: n,
      rowProps: A,
      maxHeight: $,
      loadingKeySet: te,
      expandable: X,
      stickyExpandedRows: q,
      renderExpandIcon: H,
      scrollbarProps: ie,
      setHeaderScrollLeft: le,
      handleVirtualListScroll: Bt,
      handleVirtualListResize: ut,
      handleMouseleaveTable: De,
      virtualListContainer: rt,
      virtualListContent: St,
      handleTableBodyScroll: Se,
      handleCheckboxUpdateChecked: Me,
      handleRadioUpdateChecked: Ve,
      handleUpdateExpanded: ce,
      renderCell: Fe
    }, Ze);
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
    } = this, c = t !== void 0 || i !== void 0 || l, h = !c && a === "auto", p = t !== void 0 || h, m = {
      minWidth: vt(t) || "100%"
    };
    t && (m.width = "100%");
    const v = f(nr, Object.assign({}, this.scrollbarProps, {
      ref: "scrollbarInstRef",
      scrollable: c || h,
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
      xScrollable: p,
      onScroll: o ? void 0 : this.handleTableBodyScroll,
      internalOnUpdateScrollLeft: u,
      onResize: d
    }), {
      default: () => {
        const g = {}, x = {}, {
          cols: b,
          paginatedDataAndInfo: y,
          mergedTheme: B,
          fixedColumnLeftMap: w,
          fixedColumnRightMap: S,
          currentPage: F,
          rowClassName: C,
          mergedSortState: z,
          mergedExpandedRowKeySet: E,
          stickyExpandedRows: D,
          componentId: K,
          childTriggerColIndex: O,
          expandable: n,
          rowProps: A,
          handleMouseleaveTable: $,
          renderExpand: L,
          summary: I,
          handleCheckboxUpdateChecked: V,
          handleRadioUpdateChecked: te,
          handleUpdateExpanded: X,
          heightForRow: q,
          minRowHeight: H,
          virtualScrollX: G
        } = this, {
          length: Y
        } = b;
        let ie;
        const {
          data: le,
          hasChildren: fe
        } = y, Se = fe ? zy(le, E) : le;
        if (I) {
          const xe = I(this.rawPaginatedData);
          if (Array.isArray(xe)) {
            const be = xe.map((Ae, Me) => ({
              isSummaryRow: !0,
              key: `__n_summary__${Me}`,
              tmNode: {
                rawNode: Ae,
                disabled: !0
              },
              index: -1
            }));
            ie = this.summaryPlacement === "top" ? [...be, ...Se] : [...Se, ...be];
          } else {
            const be = {
              isSummaryRow: !0,
              key: "__n_summary__",
              tmNode: {
                rawNode: xe,
                disabled: !0
              },
              index: -1
            };
            ie = this.summaryPlacement === "top" ? [be, ...Se] : [...Se, be];
          }
        } else
          ie = Se;
        const U = fe ? {
          width: yt(this.indent)
        } : void 0, de = [];
        ie.forEach((xe) => {
          L && E.has(xe.key) && (!n || n(xe.tmNode.rawNode)) ? de.push(xe, {
            isExpandedRow: !0,
            key: `${xe.key}-expand`,
            // solve key repeat of the expanded row
            tmNode: xe.tmNode,
            index: xe.index
          }) : de.push(xe);
        });
        const {
          length: Fe
        } = de, me = {};
        le.forEach(({
          tmNode: xe
        }, be) => {
          me[be] = xe.key;
        });
        const Re = D ? this.bodyWidth : null, Pe = Re === null ? void 0 : `${Re}px`, nt = this.virtualScrollX ? "div" : "td";
        let Ge = 0, at = 0;
        G && b.forEach((xe) => {
          xe.column.fixed === "left" ? Ge++ : xe.column.fixed === "right" && at++;
        });
        const lt = ({
          // Normal
          rowInfo: xe,
          displayedRowIndex: be,
          isVirtual: Ae,
          // Virtual X
          isVirtualX: Me,
          startColIndex: Ve,
          endColIndex: re,
          getLeft: ce
        }) => {
          const {
            index: De
          } = xe;
          if ("isExpandedRow" in xe) {
            const {
              tmNode: {
                key: ae,
                rawNode: se
              }
            } = xe;
            return f("tr", {
              class: `${r}-data-table-tr ${r}-data-table-tr--expanded`,
              key: `${ae}__expand`
            }, f("td", {
              class: [`${r}-data-table-td`, `${r}-data-table-td--last-col`, be + 1 === Fe && `${r}-data-table-td--last-row`],
              colspan: Y
            }, D ? f("div", {
              class: `${r}-data-table-expand`,
              style: {
                width: Pe
              }
            }, L(se, De)) : L(se, De)));
          }
          const rt = "isSummaryRow" in xe, St = !rt && xe.striped, {
            tmNode: Bt,
            key: ut
          } = xe, {
            rawNode: Ze
          } = Bt, pt = E.has(ut), Xe = A ? A(Ze, De) : void 0, ue = typeof C == "string" ? C : VC(Ze, De, C), Be = Me ? b.filter((ae, se) => !!(Ve <= se && se <= re || ae.column.fixed)) : b, k = Me ? yt((q == null ? void 0 : q(Ze, De)) || H) : void 0, W = Be.map((ae) => {
            var se, he, ge, we, Ie;
            const Je = ae.index;
            if (be in g) {
              const st = g[be], ct = st.indexOf(Je);
              if (~ct)
                return st.splice(ct, 1), null;
            }
            const {
              column: Ne
            } = ae, Dt = qt(ae), {
              rowSpan: Mt,
              colSpan: It
            } = Ne, Nt = rt ? ((se = xe.tmNode.rawNode[Dt]) === null || se === void 0 ? void 0 : se.colSpan) || 1 : It ? It(Ze, De) : 1, Ht = rt ? ((he = xe.tmNode.rawNode[Dt]) === null || he === void 0 ? void 0 : he.rowSpan) || 1 : Mt ? Mt(Ze, De) : 1, Qt = Je + Nt === Y, jt = be + Ht === Fe, j = Ht > 1;
            if (j && (x[be] = {
              [Je]: []
            }), Nt > 1 || j)
              for (let st = be; st < be + Ht; ++st) {
                j && x[be][Je].push(me[st]);
                for (let ct = Je; ct < Je + Nt; ++ct)
                  st === be && ct === Je || (st in g ? g[st].push(ct) : g[st] = [ct]);
              }
            const Q = j ? this.hoverKey : null, {
              cellProps: ye
            } = Ne, Te = ye == null ? void 0 : ye(Ze, De), Ke = {
              "--indent-offset": ""
            }, _e = Ne.fixed ? "td" : nt;
            return f(_e, Object.assign({}, Te, {
              key: Dt,
              style: [{
                textAlign: Ne.align || void 0,
                width: yt(Ne.width)
              }, Me && {
                height: k
              }, Me && !Ne.fixed ? {
                position: "absolute",
                left: yt(ce(Je)),
                top: 0,
                bottom: 0
              } : {
                left: yt((ge = w[Dt]) === null || ge === void 0 ? void 0 : ge.start),
                right: yt((we = S[Dt]) === null || we === void 0 ? void 0 : we.start)
              }, Ke, (Te == null ? void 0 : Te.style) || ""],
              colspan: Nt,
              rowspan: Ae ? void 0 : Ht,
              "data-col-key": Dt,
              class: [`${r}-data-table-td`, Ne.className, Te == null ? void 0 : Te.class, rt && `${r}-data-table-td--summary`, Q !== null && x[be][Je].includes(Q) && `${r}-data-table-td--hover`, rc(Ne, z) && `${r}-data-table-td--sorting`, Ne.fixed && `${r}-data-table-td--fixed-${Ne.fixed}`, Ne.align && `${r}-data-table-td--${Ne.align}-align`, Ne.type === "selection" && `${r}-data-table-td--selection`, Ne.type === "expand" && `${r}-data-table-td--expand`, Qt && `${r}-data-table-td--last-col`, jt && `${r}-data-table-td--last-row`]
            }), fe && Je === O ? [nh(Ke["--indent-offset"] = rt ? 0 : xe.tmNode.level, f("div", {
              class: `${r}-data-table-indent`,
              style: U
            })), rt || xe.tmNode.isLeaf ? f("div", {
              class: `${r}-data-table-expand-placeholder`
            }) : f(Ys, {
              class: `${r}-data-table-expand-trigger`,
              clsPrefix: r,
              expanded: pt,
              rowData: Ze,
              renderExpandIcon: this.renderExpandIcon,
              loading: s.has(xe.key),
              onClick: () => {
                X(ut, xe.tmNode);
              }
            })] : null, Ne.type === "selection" ? rt ? null : Ne.multiple === !1 ? f(ry, {
              key: F,
              rowKey: ut,
              disabled: xe.tmNode.disabled,
              onUpdateChecked: () => {
                te(xe.tmNode);
              }
            }) : f(GC, {
              key: F,
              rowKey: ut,
              disabled: xe.tmNode.disabled,
              onUpdateChecked: (st, ct) => {
                V(xe.tmNode, st, ct.shiftKey);
              }
            }) : Ne.type === "expand" ? rt ? null : !Ne.expandable || !((Ie = Ne.expandable) === null || Ie === void 0) && Ie.call(Ne, Ze) ? f(Ys, {
              clsPrefix: r,
              rowData: Ze,
              expanded: pt,
              renderExpandIcon: this.renderExpandIcon,
              onClick: () => {
                X(ut, null);
              }
            }) : null : f(ay, {
              clsPrefix: r,
              index: De,
              row: Ze,
              column: Ne,
              isSummary: rt,
              mergedTheme: B,
              renderCell: this.renderCell
            }));
          });
          return Me && Ge && at && W.splice(Ge, 0, f("td", {
            colspan: b.length - Ge - at,
            style: {
              pointerEvents: "none",
              visibility: "hidden",
              height: 0
            }
          })), f("tr", Object.assign({}, Xe, {
            onMouseenter: (ae) => {
              var se;
              this.hoverKey = ut, (se = Xe == null ? void 0 : Xe.onMouseenter) === null || se === void 0 || se.call(Xe, ae);
            },
            key: ut,
            class: [`${r}-data-table-tr`, rt && `${r}-data-table-tr--summary`, St && `${r}-data-table-tr--striped`, pt && `${r}-data-table-tr--expanded`, ue, Xe == null ? void 0 : Xe.class],
            style: [Xe == null ? void 0 : Xe.style, Me && {
              height: k
            }]
          }), W);
        };
        return o ? f(Ia, {
          ref: "virtualListRef",
          items: de,
          itemSize: this.minRowHeight,
          visibleItemsTag: Ey,
          visibleItemsProps: {
            clsPrefix: r,
            id: K,
            cols: b,
            onMouseleave: $
          },
          showScrollbar: !1,
          onResize: this.handleVirtualListResize,
          onScroll: this.handleVirtualListScroll,
          itemsStyle: m,
          itemResizable: !G,
          columns: b,
          renderItemWithCols: G ? ({
            itemIndex: xe,
            item: be,
            startColIndex: Ae,
            endColIndex: Me,
            getLeft: Ve
          }) => lt({
            displayedRowIndex: xe,
            isVirtual: !0,
            isVirtualX: !0,
            rowInfo: be,
            startColIndex: Ae,
            endColIndex: Me,
            getLeft: Ve
          }) : void 0
        }, {
          default: ({
            item: xe,
            index: be,
            renderedItemWithCols: Ae
          }) => Ae || lt({
            rowInfo: xe,
            displayedRowIndex: be,
            isVirtual: !0,
            isVirtualX: !1,
            startColIndex: 0,
            endColIndex: 0,
            getLeft(Me) {
              return 0;
            }
          })
        }) : f("table", {
          class: `${r}-data-table-table`,
          onMouseleave: $,
          style: {
            tableLayout: this.mergedTableLayout
          }
        }, f("colgroup", null, b.map((xe) => f("col", {
          key: xe.key,
          style: xe.style
        }))), this.showHeader ? f(gc, {
          discrete: !1
        }) : null, this.empty ? null : f("tbody", {
          "data-n-id": K,
          class: `${r}-data-table-tbody`
        }, de.map((xe, be) => lt({
          rowInfo: xe,
          displayedRowIndex: be,
          isVirtual: !1,
          isVirtualX: !1,
          startColIndex: -1,
          endColIndex: -1,
          getLeft(Ae) {
            return -1;
          }
        }))));
      }
    });
    if (this.empty) {
      const g = () => f("div", {
        class: [`${r}-data-table-empty`, this.loading && `${r}-data-table-empty--hide`],
        style: this.bodyStyle,
        ref: "emptyElRef"
      }, Lt(this.dataTableSlots.empty, () => [f(Cr, {
        theme: this.mergedTheme.peers.Empty,
        themeOverrides: this.mergedTheme.peerOverrides.Empty
      })]));
      return this.shouldDisplaySomeTablePart ? f(ht, null, v, g()) : f(xr, {
        onResize: this.onResize
      }, {
        default: g
      });
    }
    return v;
  }
}), Ty = ee({
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
    } = pe(Jt), u = _(null), c = _(null), h = _(null), p = _(!(r.value.length || t.value.length)), m = P(() => ({
      maxHeight: vt(i.value),
      minHeight: vt(a.value)
    }));
    function v(y) {
      o.value = y.contentRect.width, d(), p.value || (p.value = !0);
    }
    function g() {
      var y;
      const {
        value: B
      } = u;
      return B ? s.value ? ((y = B.virtualListRef) === null || y === void 0 ? void 0 : y.listElRef) || null : B.$el : null;
    }
    function x() {
      const {
        value: y
      } = c;
      return y ? y.getScrollContainer() : null;
    }
    const b = {
      getBodyElement: x,
      getHeaderElement: g,
      scrollTo(y, B) {
        var w;
        (w = c.value) === null || w === void 0 || w.scrollTo(y, B);
      }
    };
    return Qe(() => {
      const {
        value: y
      } = h;
      if (!y) return;
      const B = `${e.value}-data-table-base-table--transition-disabled`;
      p.value ? setTimeout(() => {
        y.classList.remove(B);
      }, 0) : y.classList.add(B);
    }), Object.assign({
      maxHeight: i,
      mergedClsPrefix: e,
      selfElRef: h,
      headerInstRef: u,
      bodyInstRef: c,
      bodyStyle: m,
      flexHeight: l,
      handleBodyResize: v
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
    }, o ? null : f(gc, {
      ref: "headerInstRef"
    }), f(Dy, {
      ref: "bodyInstRef",
      bodyStyle: this.bodyStyle,
      showHeader: o,
      flexHeight: r,
      onResize: this.handleBodyResize
    }));
  }
}), Js = My(), Oy = T([R("data-table", `
 width: 100%;
 font-size: var(--n-font-size);
 display: flex;
 flex-direction: column;
 position: relative;
 --n-merged-th-color: var(--n-th-color);
 --n-merged-td-color: var(--n-td-color);
 --n-merged-border-color: var(--n-border-color);
 --n-merged-th-color-sorting: var(--n-th-color-sorting);
 --n-merged-td-color-hover: var(--n-td-color-hover);
 --n-merged-td-color-sorting: var(--n-td-color-sorting);
 --n-merged-td-color-striped: var(--n-td-color-striped);
 `, [R("data-table-wrapper", `
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 `), N("flex-height", [T(">", [R("data-table-wrapper", [T(">", [R("data-table-base-table", `
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 `, [T(">", [R("data-table-base-table-body", "flex-basis: 0;", [
  // last-child means there is no empty icon
  // body is a scrollbar, we need to override height 100%
  T("&:last-child", "flex-grow: 1;")
])])])])])])]), T(">", [R("data-table-loading-wrapper", `
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
 `, [co({
  originalTransform: "translateX(-50%) translateY(-50%)"
})])]), R("data-table-expand-placeholder", `
 margin-right: 8px;
 display: inline-block;
 width: 16px;
 height: 1px;
 `), R("data-table-indent", `
 display: inline-block;
 height: 1px;
 `), R("data-table-expand-trigger", `
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
 `, [N("expanded", [R("icon", "transform: rotate(90deg);", [Gt({
  originalTransform: "rotate(90deg)"
})]), R("base-icon", "transform: rotate(90deg);", [Gt({
  originalTransform: "rotate(90deg)"
})])]), R("base-loading", `
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [Gt()]), R("icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [Gt()]), R("base-icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [Gt()])]), R("data-table-thead", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-merged-th-color);
 `), R("data-table-tr", `
 position: relative;
 box-sizing: border-box;
 background-clip: padding-box;
 transition: background-color .3s var(--n-bezier);
 `, [R("data-table-expand", `
 position: sticky;
 left: 0;
 overflow: hidden;
 margin: calc(var(--n-th-padding) * -1);
 padding: var(--n-th-padding);
 box-sizing: border-box;
 `), N("striped", "background-color: var(--n-merged-td-color-striped);", [R("data-table-td", "background-color: var(--n-merged-td-color-striped);")]), Ye("summary", [T("&:hover", "background-color: var(--n-merged-td-color-hover);", [T(">", [R("data-table-td", "background-color: var(--n-merged-td-color-hover);")])])])]), R("data-table-th", `
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
 `)]), Js, N("selection", `
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
 `), T("&:hover", `
 background-color: var(--n-merged-th-color-hover);
 `)]), R("data-table-sorter", `
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
 `, [R("base-icon", "transition: transform .3s var(--n-bezier)"), N("desc", [R("base-icon", `
 transform: rotate(0deg);
 `)]), N("asc", [R("base-icon", `
 transform: rotate(-180deg);
 `)]), N("asc, desc", `
 color: var(--n-th-icon-color-active);
 `)]), R("data-table-resize-button", `
 width: var(--n-resizable-container-size);
 position: absolute;
 top: 0;
 right: calc(var(--n-resizable-container-size) / 2);
 bottom: 0;
 cursor: col-resize;
 user-select: none;
 `, [T("&::after", `
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
 `), N("active", [T("&::after", ` 
 background-color: var(--n-th-icon-color-active);
 `)]), T("&:hover::after", `
 background-color: var(--n-th-icon-color-active);
 `)]), R("data-table-filter", `
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
 `, [T("&:hover", `
 background-color: var(--n-th-button-color-hover);
 `), N("show", `
 background-color: var(--n-th-button-color-hover);
 `), N("active", `
 background-color: var(--n-th-button-color-hover);
 color: var(--n-th-icon-color-active);
 `)])]), R("data-table-td", `
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
 `, [N("expand", [R("data-table-expand-trigger", `
 margin-right: 0;
 `)]), N("last-row", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `, [
  // make sure there is no overlap between bottom border and
  // fixed column box shadow
  T("&::after", `
 bottom: 0 !important;
 `),
  T("&::before", `
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
 `), Js]), R("data-table-empty", `
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
 `), R("data-table-wrapper", `
 position: relative;
 opacity: 1;
 transition: opacity .3s var(--n-bezier), border-color .3s var(--n-bezier);
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 line-height: var(--n-line-height);
 `), N("loading", [R("data-table-wrapper", `
 opacity: var(--n-opacity-loading);
 pointer-events: none;
 `)]), N("single-column", [R("data-table-td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `, [T("&::after, &::before", `
 bottom: 0 !important;
 `)])]), Ye("single-line", [R("data-table-th", `
 border-right: 1px solid var(--n-merged-border-color);
 `, [N("last", `
 border-right: 0 solid var(--n-merged-border-color);
 `)]), R("data-table-td", `
 border-right: 1px solid var(--n-merged-border-color);
 `, [N("last-col", `
 border-right: 0 solid var(--n-merged-border-color);
 `)])]), N("bordered", [R("data-table-wrapper", `
 border: 1px solid var(--n-merged-border-color);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 overflow: hidden;
 `)]), R("data-table-base-table", [N("transition-disabled", [R("data-table-th", [T("&::after, &::before", "transition: none;")]), R("data-table-td", [T("&::after, &::before", "transition: none;")])])]), N("bottom-bordered", [R("data-table-td", [N("last-row", `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]), R("data-table-table", `
 font-variant-numeric: tabular-nums;
 width: 100%;
 word-break: break-word;
 transition: background-color .3s var(--n-bezier);
 border-collapse: separate;
 border-spacing: 0;
 background-color: var(--n-merged-td-color);
 `), R("data-table-base-table-header", `
 border-top-left-radius: calc(var(--n-border-radius) - 1px);
 border-top-right-radius: calc(var(--n-border-radius) - 1px);
 z-index: 3;
 overflow: scroll;
 flex-shrink: 0;
 transition: border-color .3s var(--n-bezier);
 scrollbar-width: none;
 `, [T("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 display: none;
 width: 0;
 height: 0;
 `)]), R("data-table-check-extra", `
 transition: color .3s var(--n-bezier);
 color: var(--n-th-icon-color);
 position: absolute;
 font-size: 14px;
 right: -4px;
 top: 50%;
 transform: translateY(-50%);
 z-index: 1;
 `)]), R("data-table-filter-menu", [R("scrollbar", `
 max-height: 240px;
 `), M("group", `
 display: flex;
 flex-direction: column;
 padding: 12px 12px 0 12px;
 `, [R("checkbox", `
 margin-bottom: 12px;
 margin-right: 0;
 `), R("radio", `
 margin-bottom: 12px;
 margin-right: 0;
 `)]), M("action", `
 padding: var(--n-action-padding);
 display: flex;
 flex-wrap: nowrap;
 justify-content: space-evenly;
 border-top: 1px solid var(--n-action-divider-color);
 `, [R("button", [T("&:not(:last-child)", `
 margin: var(--n-action-button-margin);
 `), T("&:last-child", `
 margin-right: 0;
 `)])]), R("divider", `
 margin: 0 !important;
 `)]), ei(R("data-table", `
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 --n-merged-th-color-hover: var(--n-th-color-hover-modal);
 --n-merged-td-color-hover: var(--n-td-color-hover-modal);
 --n-merged-th-color-sorting: var(--n-th-color-hover-modal);
 --n-merged-td-color-sorting: var(--n-td-color-hover-modal);
 --n-merged-td-color-striped: var(--n-td-color-striped-modal);
 `)), ka(R("data-table", `
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 --n-merged-th-color-hover: var(--n-th-color-hover-popover);
 --n-merged-td-color-hover: var(--n-td-color-hover-popover);
 --n-merged-th-color-sorting: var(--n-th-color-hover-popover);
 --n-merged-td-color-sorting: var(--n-td-color-hover-popover);
 --n-merged-td-color-striped: var(--n-td-color-striped-popover);
 `))]);
function My() {
  return [N("fixed-left", `
 left: 0;
 position: sticky;
 z-index: 2;
 `, [T("&::after", `
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
 `, [T("&::before", `
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
function Iy(e, t) {
  const {
    paginatedDataRef: r,
    treeMateRef: o,
    selectionColumnRef: i
  } = t, a = _(e.defaultCheckedRowKeys), l = P(() => {
    var S;
    const {
      checkedRowKeys: F
    } = e, C = F === void 0 ? a.value : F;
    return ((S = i.value) === null || S === void 0 ? void 0 : S.multiple) === !1 ? {
      checkedKeys: C.slice(0, 1),
      indeterminateKeys: []
    } : o.value.getCheckedKeys(C, {
      cascade: e.cascade,
      allowNotLoaded: e.allowCheckingNotLoaded
    });
  }), s = P(() => l.value.checkedKeys), d = P(() => l.value.indeterminateKeys), u = P(() => new Set(s.value)), c = P(() => new Set(d.value)), h = P(() => {
    const {
      value: S
    } = u;
    return r.value.reduce((F, C) => {
      const {
        key: z,
        disabled: E
      } = C;
      return F + (!E && S.has(z) ? 1 : 0);
    }, 0);
  }), p = P(() => r.value.filter((S) => S.disabled).length), m = P(() => {
    const {
      length: S
    } = r.value, {
      value: F
    } = c;
    return h.value > 0 && h.value < S - p.value || r.value.some((C) => F.has(C.key));
  }), v = P(() => {
    const {
      length: S
    } = r.value;
    return h.value !== 0 && h.value === S - p.value;
  }), g = P(() => r.value.length === 0);
  function x(S, F, C) {
    const {
      "onUpdate:checkedRowKeys": z,
      onUpdateCheckedRowKeys: E,
      onCheckedRowKeysChange: D
    } = e, K = [], {
      value: {
        getNode: O
      }
    } = o;
    S.forEach((n) => {
      var A;
      const $ = (A = O(n)) === null || A === void 0 ? void 0 : A.rawNode;
      K.push($);
    }), z && ne(z, S, K, {
      row: F,
      action: C
    }), E && ne(E, S, K, {
      row: F,
      action: C
    }), D && ne(D, S, K, {
      row: F,
      action: C
    }), a.value = S;
  }
  function b(S, F = !1, C) {
    if (!e.loading) {
      if (F) {
        x(Array.isArray(S) ? S.slice(0, 1) : [S], C, "check");
        return;
      }
      x(o.value.check(S, s.value, {
        cascade: e.cascade,
        allowNotLoaded: e.allowCheckingNotLoaded
      }).checkedKeys, C, "check");
    }
  }
  function y(S, F) {
    e.loading || x(o.value.uncheck(S, s.value, {
      cascade: e.cascade,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, F, "uncheck");
  }
  function B(S = !1) {
    const {
      value: F
    } = i;
    if (!F || e.loading) return;
    const C = [];
    (S ? o.value.treeNodes : r.value).forEach((z) => {
      z.disabled || C.push(z.key);
    }), x(o.value.check(C, s.value, {
      cascade: !0,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, void 0, "checkAll");
  }
  function w(S = !1) {
    const {
      value: F
    } = i;
    if (!F || e.loading) return;
    const C = [];
    (S ? o.value.treeNodes : r.value).forEach((z) => {
      z.disabled || C.push(z.key);
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
    allRowsCheckedRef: v,
    headerCheckboxDisabledRef: g,
    doUpdateCheckedRowKeys: x,
    doCheckAll: B,
    doUncheckAll: w,
    doCheck: b,
    doUncheck: y
  };
}
function _y(e, t) {
  const r = je(() => {
    for (const u of e.columns)
      if (u.type === "expand")
        return process.env.NODE_ENV !== "production" && !u.renderExpand && kt("data-table", "column with type `expand` has no `renderExpand` prop."), u.renderExpand;
  }), o = je(() => {
    let u;
    for (const c of e.columns)
      if (c.type === "expand") {
        u = c.expandable;
        break;
      }
    return u;
  }), i = _(e.defaultExpandAll ? r != null && r.value ? (() => {
    const u = [];
    return t.value.treeNodes.forEach((c) => {
      var h;
      !((h = o.value) === null || h === void 0) && h.call(o, c.rawNode) && u.push(c.key);
    }), u;
  })() : t.value.getNonLeafKeys() : e.defaultExpandedRowKeys), a = oe(e, "expandedRowKeys"), l = oe(e, "stickyExpandedRows"), s = Et(a, i);
  function d(u) {
    const {
      onUpdateExpandedRowKeys: c,
      "onUpdate:expandedRowKeys": h
    } = e;
    c && ne(c, u), h && ne(h, u), i.value = u;
  }
  return {
    stickyExpandedRowsRef: l,
    mergedExpandedRowKeysRef: s,
    renderExpandRef: r,
    expandableRef: o,
    doUpdateExpandedRowKeys: d
  };
}
function Ly(e, t) {
  const r = [], o = [], i = [], a = /* @__PURE__ */ new WeakMap();
  let l = -1, s = 0, d = !1;
  function u(p, m) {
    m > l && (r[m] = [], l = m), p.forEach((v, g) => {
      if ("children" in v)
        u(v.children, m + 1);
      else {
        const x = "key" in v ? v.key : void 0;
        o.push({
          key: qt(v),
          style: WC(v, x !== void 0 ? vt(t(x)) : void 0),
          column: v,
          index: g,
          // The width property is only applied to horizontally virtual scroll table
          width: v.width === void 0 ? 128 : Number(v.width)
        }), s += 1, d || (d = !!v.ellipsis), i.push(v);
      }
    });
  }
  u(e, 0);
  let c = 0;
  function h(p, m) {
    let v = 0;
    p.forEach((g) => {
      var x;
      if ("children" in g) {
        const b = c, y = {
          column: g,
          colIndex: c,
          colSpan: 0,
          rowSpan: 1,
          isLast: !1
        };
        h(g.children, m + 1), g.children.forEach((B) => {
          var w, S;
          y.colSpan += (S = (w = a.get(B)) === null || w === void 0 ? void 0 : w.colSpan) !== null && S !== void 0 ? S : 0;
        }), b + y.colSpan === s && (y.isLast = !0), a.set(g, y), r[m].push(y);
      } else {
        if (c < v) {
          c += 1;
          return;
        }
        let b = 1;
        "titleColSpan" in g && (b = (x = g.titleColSpan) !== null && x !== void 0 ? x : 1), b > 1 && (v = c + b);
        const y = c + b === s, B = {
          column: g,
          colSpan: b,
          colIndex: c,
          rowSpan: l - m + 1,
          isLast: y
        };
        a.set(g, B), r[m].push(B), c += 1;
      }
    });
  }
  return h(e, 0), {
    hasEllipsis: d,
    rows: r,
    cols: o,
    dataRelatedCols: i
  };
}
function Ny(e, t) {
  const r = P(() => Ly(e.columns, t));
  return {
    rowsRef: P(() => r.value.rows),
    colsRef: P(() => r.value.cols),
    hasEllipsisRef: P(() => r.value.hasEllipsis),
    dataRelatedColsRef: P(() => r.value.dataRelatedCols)
  };
}
function Hy() {
  const e = _({});
  function t(i) {
    return e.value[i];
  }
  function r(i, a) {
    nc(i) && "key" in i && (e.value[i.key] = a);
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
function jy(e, {
  mainTableInstRef: t,
  mergedCurrentPageRef: r,
  bodyWidthRef: o
}) {
  let i = 0;
  const a = _(), l = _(null), s = _([]), d = _(null), u = _([]), c = P(() => vt(e.scrollX)), h = P(() => e.columns.filter((E) => E.fixed === "left")), p = P(() => e.columns.filter((E) => E.fixed === "right")), m = P(() => {
    const E = {};
    let D = 0;
    function K(O) {
      O.forEach((n) => {
        const A = {
          start: D,
          end: 0
        };
        E[qt(n)] = A, "children" in n ? (K(n.children), A.end = D) : (D += Us(n) || 0, A.end = D);
      });
    }
    return K(h.value), E;
  }), v = P(() => {
    const E = {};
    let D = 0;
    function K(O) {
      for (let n = O.length - 1; n >= 0; --n) {
        const A = O[n], $ = {
          start: D,
          end: 0
        };
        E[qt(A)] = $, "children" in A ? (K(A.children), $.end = D) : (D += Us(A) || 0, $.end = D);
      }
    }
    return K(p.value), E;
  });
  function g() {
    var E, D;
    const {
      value: K
    } = h;
    let O = 0;
    const {
      value: n
    } = m;
    let A = null;
    for (let $ = 0; $ < K.length; ++$) {
      const L = qt(K[$]);
      if (i > (((E = n[L]) === null || E === void 0 ? void 0 : E.start) || 0) - O)
        A = L, O = ((D = n[L]) === null || D === void 0 ? void 0 : D.end) || 0;
      else
        break;
    }
    l.value = A;
  }
  function x() {
    s.value = [];
    let E = e.columns.find((D) => qt(D) === l.value);
    for (; E && "children" in E; ) {
      const D = E.children.length;
      if (D === 0) break;
      const K = E.children[D - 1];
      s.value.push(qt(K)), E = K;
    }
  }
  function b() {
    var E, D;
    const {
      value: K
    } = p, O = Number(e.scrollX), {
      value: n
    } = o;
    if (n === null) return;
    let A = 0, $ = null;
    const {
      value: L
    } = v;
    for (let I = K.length - 1; I >= 0; --I) {
      const V = qt(K[I]);
      if (Math.round(i + (((E = L[V]) === null || E === void 0 ? void 0 : E.start) || 0) + n - A) < O)
        $ = V, A = ((D = L[V]) === null || D === void 0 ? void 0 : D.end) || 0;
      else
        break;
    }
    d.value = $;
  }
  function y() {
    u.value = [];
    let E = e.columns.find((D) => qt(D) === d.value);
    for (; E && "children" in E && E.children.length; ) {
      const D = E.children[0];
      u.value.push(qt(D)), E = D;
    }
  }
  function B() {
    const E = t.value ? t.value.getHeaderElement() : null, D = t.value ? t.value.getBodyElement() : null;
    return {
      header: E,
      body: D
    };
  }
  function w() {
    const {
      body: E
    } = B();
    E && (E.scrollTop = 0);
  }
  function S() {
    a.value !== "body" ? Mo(C) : a.value = void 0;
  }
  function F(E) {
    var D;
    (D = e.onScroll) === null || D === void 0 || D.call(e, E), a.value !== "head" ? Mo(C) : a.value = void 0;
  }
  function C() {
    const {
      header: E,
      body: D
    } = B();
    if (!D) return;
    const {
      value: K
    } = o;
    if (K !== null) {
      if (e.maxHeight || e.flexHeight) {
        if (!E) return;
        const O = i - E.scrollLeft;
        a.value = O !== 0 ? "head" : "body", a.value === "head" ? (i = E.scrollLeft, D.scrollLeft = i) : (i = D.scrollLeft, E.scrollLeft = i);
      } else
        i = D.scrollLeft;
      g(), x(), b(), y();
    }
  }
  function z(E) {
    const {
      header: D
    } = B();
    D && (D.scrollLeft = E, C());
  }
  return Le(r, () => {
    w();
  }), {
    styleScrollXRef: c,
    fixedColumnLeftMapRef: m,
    fixedColumnRightMapRef: v,
    leftFixedColumnsRef: h,
    rightFixedColumnsRef: p,
    leftActiveFixedColKeyRef: l,
    leftActiveFixedChildrenColKeysRef: s,
    rightActiveFixedColKeyRef: d,
    rightActiveFixedChildrenColKeysRef: u,
    syncScrollState: C,
    handleTableBodyScroll: F,
    handleTableHeaderScroll: S,
    setHeaderScrollLeft: z
  };
}
function Fo(e) {
  return typeof e == "object" && typeof e.multiple == "number" ? e.multiple : !1;
}
function Wy(e, t) {
  return t && (e === void 0 || e === "default" || typeof e == "object" && e.compare === "default") ? Vy(t) : typeof e == "function" ? e : e && typeof e == "object" && e.compare && e.compare !== "default" ? e.compare : !1;
}
function Vy(e) {
  return (t, r) => {
    const o = t[e], i = r[e];
    return o == null ? i == null ? 0 : -1 : i == null ? 1 : typeof o == "number" && typeof i == "number" ? o - i : typeof o == "string" && typeof i == "string" ? o.localeCompare(i) : 0;
  };
}
function Ky(e, {
  dataRelatedColsRef: t,
  filteredDataRef: r
}) {
  const o = [];
  t.value.forEach((m) => {
    var v;
    m.sorter !== void 0 && p(o, {
      columnKey: m.key,
      sorter: m.sorter,
      order: (v = m.defaultSortOrder) !== null && v !== void 0 ? v : !1
    });
  });
  const i = _(o), a = P(() => {
    const m = t.value.filter((x) => x.type !== "selection" && x.sorter !== void 0 && (x.sortOrder === "ascend" || x.sortOrder === "descend" || x.sortOrder === !1)), v = m.filter((x) => x.sortOrder !== !1);
    if (v.length)
      return v.map((x) => ({
        columnKey: x.key,
        // column to sort has controlled sorter
        // sorter && sort order won't be undefined
        order: x.sortOrder,
        sorter: x.sorter
      }));
    if (m.length) return [];
    const {
      value: g
    } = i;
    return Array.isArray(g) ? g : g ? [g] : [];
  }), l = P(() => {
    const m = a.value.slice().sort((v, g) => {
      const x = Fo(v.sorter) || 0;
      return (Fo(g.sorter) || 0) - x;
    });
    return m.length ? r.value.slice().sort((g, x) => {
      let b = 0;
      return m.some((y) => {
        const {
          columnKey: B,
          sorter: w,
          order: S
        } = y, F = Wy(w, B);
        return F && S && (b = F(g.rawNode, x.rawNode), b !== 0) ? (b = b * HC(S), !0) : !1;
      }), b;
    }) : r.value;
  });
  function s(m) {
    let v = a.value.slice();
    return m && Fo(m.sorter) !== !1 ? (v = v.filter((g) => Fo(g.sorter) !== !1), p(v, m), v) : m || null;
  }
  function d(m) {
    const v = s(m);
    u(v);
  }
  function u(m) {
    const {
      "onUpdate:sorter": v,
      onUpdateSorter: g,
      onSorterChange: x
    } = e;
    v && ne(v, m), g && ne(g, m), x && ne(x, m), i.value = m;
  }
  function c(m, v = "ascend") {
    if (!m)
      h();
    else {
      const g = t.value.find((b) => b.type !== "selection" && b.type !== "expand" && b.key === m);
      if (!(g != null && g.sorter)) return;
      const x = g.sorter;
      d({
        columnKey: m,
        sorter: x,
        order: v
      });
    }
  }
  function h() {
    u(null);
  }
  function p(m, v) {
    const g = m.findIndex((x) => (v == null ? void 0 : v.columnKey) && x.columnKey === v.columnKey);
    g !== void 0 && g >= 0 ? m[g] = v : m.push(v);
  }
  return {
    clearSorter: h,
    sort: c,
    sortedDataRef: l,
    mergedSortStateRef: a,
    deriveNextSorter: d
  };
}
function Uy(e, {
  dataRelatedColsRef: t
}) {
  const r = P(() => {
    const q = (H) => {
      for (let G = 0; G < H.length; ++G) {
        const Y = H[G];
        if ("children" in Y)
          return q(Y.children);
        if (Y.type === "selection")
          return Y;
      }
      return null;
    };
    return q(e.columns);
  }), o = P(() => {
    const {
      childrenKey: q
    } = e;
    return si(e.data, {
      ignoreEmptyChildren: !0,
      getKey: e.rowKey,
      getChildren: (H) => H[q],
      getDisabled: (H) => {
        var G, Y;
        return !!(!((Y = (G = r.value) === null || G === void 0 ? void 0 : G.disabled) === null || Y === void 0) && Y.call(G, H));
      }
    });
  }), i = je(() => {
    const {
      columns: q
    } = e, {
      length: H
    } = q;
    let G = null;
    for (let Y = 0; Y < H; ++Y) {
      const ie = q[Y];
      if (!ie.type && G === null && (G = Y), "tree" in ie && ie.tree)
        return Y;
    }
    return G || 0;
  }), a = _({}), {
    pagination: l
  } = e, s = _(l && l.defaultPage || 1), d = _(Xu(l)), u = P(() => {
    const q = t.value.filter((Y) => Y.filterOptionValues !== void 0 || Y.filterOptionValue !== void 0), H = {};
    return q.forEach((Y) => {
      var ie;
      Y.type === "selection" || Y.type === "expand" || (Y.filterOptionValues === void 0 ? H[Y.key] = (ie = Y.filterOptionValue) !== null && ie !== void 0 ? ie : null : H[Y.key] = Y.filterOptionValues);
    }), Object.assign(qs(a.value), H);
  }), c = P(() => {
    const q = u.value, {
      columns: H
    } = e;
    function G(le) {
      return (fe, Se) => !!~String(Se[le]).indexOf(String(fe));
    }
    const {
      value: {
        treeNodes: Y
      }
    } = o, ie = [];
    return H.forEach((le) => {
      le.type === "selection" || le.type === "expand" || "children" in le || ie.push([le.key, le]);
    }), Y ? Y.filter((le) => {
      const {
        rawNode: fe
      } = le;
      for (const [Se, U] of ie) {
        let de = q[Se];
        if (de == null || (Array.isArray(de) || (de = [de]), !de.length)) continue;
        const Fe = U.filter === "default" ? G(Se) : U.filter;
        if (U && typeof Fe == "function")
          if (U.filterMode === "and") {
            if (de.some((me) => !Fe(me, fe)))
              return !1;
          } else {
            if (de.some((me) => Fe(me, fe)))
              continue;
            return !1;
          }
      }
      return !0;
    }) : [];
  }), {
    sortedDataRef: h,
    deriveNextSorter: p,
    mergedSortStateRef: m,
    sort: v,
    clearSorter: g
  } = Ky(e, {
    dataRelatedColsRef: t,
    filteredDataRef: c
  });
  t.value.forEach((q) => {
    var H;
    if (q.filter) {
      const G = q.defaultFilterOptionValues;
      q.filterMultiple ? a.value[q.key] = G || [] : G !== void 0 ? a.value[q.key] = G === null ? [] : G : a.value[q.key] = (H = q.defaultFilterOptionValue) !== null && H !== void 0 ? H : null;
    }
  });
  const x = P(() => {
    const {
      pagination: q
    } = e;
    if (q !== !1)
      return q.page;
  }), b = P(() => {
    const {
      pagination: q
    } = e;
    if (q !== !1)
      return q.pageSize;
  }), y = Et(x, s), B = Et(b, d), w = je(() => {
    const q = y.value;
    return e.remote ? q : Math.max(1, Math.min(Math.ceil(c.value.length / B.value), q));
  }), S = P(() => {
    const {
      pagination: q
    } = e;
    if (q) {
      const {
        pageCount: H
      } = q;
      if (H !== void 0) return H;
    }
  }), F = P(() => {
    if (e.remote) return o.value.treeNodes;
    if (!e.pagination) return h.value;
    const q = B.value, H = (w.value - 1) * q;
    return h.value.slice(H, H + q);
  }), C = P(() => F.value.map((q) => q.rawNode));
  function z(q) {
    const {
      pagination: H
    } = e;
    if (H) {
      const {
        onChange: G,
        "onUpdate:page": Y,
        onUpdatePage: ie
      } = H;
      G && ne(G, q), ie && ne(ie, q), Y && ne(Y, q), O(q);
    }
  }
  function E(q) {
    const {
      pagination: H
    } = e;
    if (H) {
      const {
        onPageSizeChange: G,
        "onUpdate:pageSize": Y,
        onUpdatePageSize: ie
      } = H;
      G && ne(G, q), ie && ne(ie, q), Y && ne(Y, q), n(q);
    }
  }
  const D = P(() => {
    if (e.remote) {
      const {
        pagination: q
      } = e;
      if (q) {
        const {
          itemCount: H
        } = q;
        if (H !== void 0) return H;
      }
      return;
    }
    return c.value.length;
  }), K = P(() => Object.assign(Object.assign({}, e.pagination), {
    // reset deprecated methods
    onChange: void 0,
    onUpdatePage: void 0,
    onUpdatePageSize: void 0,
    onPageSizeChange: void 0,
    "onUpdate:page": z,
    "onUpdate:pageSize": E,
    // writing merged props after pagination to avoid
    // pagination[key] === undefined
    // key still exists but value is undefined
    page: w.value,
    pageSize: B.value,
    pageCount: D.value === void 0 ? S.value : void 0,
    itemCount: D.value
  }));
  function O(q) {
    const {
      "onUpdate:page": H,
      onPageChange: G,
      onUpdatePage: Y
    } = e;
    Y && ne(Y, q), H && ne(H, q), G && ne(G, q), s.value = q;
  }
  function n(q) {
    const {
      "onUpdate:pageSize": H,
      onPageSizeChange: G,
      onUpdatePageSize: Y
    } = e;
    G && ne(G, q), Y && ne(Y, q), H && ne(H, q), d.value = q;
  }
  function A(q, H) {
    const {
      onUpdateFilters: G,
      "onUpdate:filters": Y,
      onFiltersChange: ie
    } = e;
    G && ne(G, q, H), Y && ne(Y, q, H), ie && ne(ie, q, H), a.value = q;
  }
  function $(q, H, G, Y) {
    var ie;
    (ie = e.onUnstableColumnResize) === null || ie === void 0 || ie.call(e, q, H, G, Y);
  }
  function L(q) {
    O(q);
  }
  function I() {
    V();
  }
  function V() {
    te({});
  }
  function te(q) {
    X(q);
  }
  function X(q) {
    q ? q ? a.value = qs(q) : process.env.NODE_ENV !== "production" && kt("data-table", "`filters` is not an object") : a.value = {};
  }
  return {
    treeMateRef: o,
    mergedCurrentPageRef: w,
    mergedPaginationRef: K,
    paginatedDataRef: F,
    rawPaginatedDataRef: C,
    mergedFilterStateRef: u,
    mergedSortStateRef: m,
    hoverKeyRef: _(null),
    selectionColumnRef: r,
    childTriggerColIndexRef: i,
    doUpdateFilters: A,
    deriveNextSorter: p,
    doUpdatePageSize: n,
    doUpdatePage: O,
    onUnstableColumnResize: $,
    // exported methods
    filter: X,
    filters: te,
    clearFilter: I,
    clearFilters: V,
    clearSorter: g,
    page: L,
    sort: v
  };
}
const qy = ee({
  name: "DataTable",
  alias: ["AdvancedTable"],
  props: LC,
  setup(e, {
    slots: t
  }) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      e.onPageChange !== void 0 && it("data-table", "`on-page-change` is deprecated, please use `on-update:page` instead."), e.onPageSizeChange !== void 0 && it("data-table", "`on-page-size-change` is deprecated, please use `on-update:page-size` instead."), e.onSorterChange !== void 0 && it("data-table", "`on-sorter-change` is deprecated, please use `on-update:sorter` instead."), e.onFiltersChange !== void 0 && it("data-table", "`on-filters-change` is deprecated, please use `on-update:filters` instead."), e.onCheckedRowKeysChange !== void 0 && it("data-table", "`on-checked-row-keys-change` is deprecated, please use `on-update:checked-row-keys` instead.");
    });
    const {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = ze(e), l = wt("DataTable", a, o), s = P(() => {
      const {
        bottomBordered: k
      } = e;
      return r.value ? !1 : k !== void 0 ? k : !0;
    }), d = ve("DataTable", "-data-table", Oy, _C, e, o), u = _(null), c = _(null), {
      getResizableWidth: h,
      clearResizableWidth: p,
      doUpdateResizableWidth: m
    } = Hy(), {
      rowsRef: v,
      colsRef: g,
      dataRelatedColsRef: x,
      hasEllipsisRef: b
    } = Ny(e, h), {
      treeMateRef: y,
      mergedCurrentPageRef: B,
      paginatedDataRef: w,
      rawPaginatedDataRef: S,
      selectionColumnRef: F,
      hoverKeyRef: C,
      mergedPaginationRef: z,
      mergedFilterStateRef: E,
      mergedSortStateRef: D,
      childTriggerColIndexRef: K,
      doUpdatePage: O,
      doUpdateFilters: n,
      onUnstableColumnResize: A,
      deriveNextSorter: $,
      filter: L,
      filters: I,
      clearFilter: V,
      clearFilters: te,
      clearSorter: X,
      page: q,
      sort: H
    } = Uy(e, {
      dataRelatedColsRef: x
    }), G = (k) => {
      const {
        fileName: W = "data.csv",
        keepOriginalData: Z = !1
      } = k || {}, ae = Z ? e.data : S.value, se = qC(e.columns, ae, e.getCsvCell, e.getCsvHeader), he = new Blob([se], {
        type: "text/csv;charset=utf-8"
      }), ge = URL.createObjectURL(he);
      u0(ge, W.endsWith(".csv") ? W : `${W}.csv`), URL.revokeObjectURL(ge);
    }, {
      doCheckAll: Y,
      doUncheckAll: ie,
      doCheck: le,
      doUncheck: fe,
      headerCheckboxDisabledRef: Se,
      someRowsCheckedRef: U,
      allRowsCheckedRef: de,
      mergedCheckedRowKeySetRef: Fe,
      mergedInderminateRowKeySetRef: me
    } = Iy(e, {
      selectionColumnRef: F,
      treeMateRef: y,
      paginatedDataRef: w
    }), {
      stickyExpandedRowsRef: Re,
      mergedExpandedRowKeysRef: Pe,
      renderExpandRef: nt,
      expandableRef: Ge,
      doUpdateExpandedRowKeys: at
    } = _y(e, y), {
      handleTableBodyScroll: lt,
      handleTableHeaderScroll: xe,
      syncScrollState: be,
      setHeaderScrollLeft: Ae,
      leftActiveFixedColKeyRef: Me,
      leftActiveFixedChildrenColKeysRef: Ve,
      rightActiveFixedColKeyRef: re,
      rightActiveFixedChildrenColKeysRef: ce,
      leftFixedColumnsRef: De,
      rightFixedColumnsRef: rt,
      fixedColumnLeftMapRef: St,
      fixedColumnRightMapRef: Bt
    } = jy(e, {
      bodyWidthRef: u,
      mainTableInstRef: c,
      mergedCurrentPageRef: B
    }), {
      localeRef: ut
    } = Kn("DataTable"), Ze = P(() => e.virtualScroll || e.flexHeight || e.maxHeight !== void 0 || b.value ? "fixed" : e.tableLayout);
    $e(Jt, {
      props: e,
      treeMateRef: y,
      renderExpandIconRef: oe(e, "renderExpandIcon"),
      loadingKeySetRef: _(/* @__PURE__ */ new Set()),
      slots: t,
      indentRef: oe(e, "indent"),
      childTriggerColIndexRef: K,
      bodyWidthRef: u,
      componentId: sn(),
      hoverKeyRef: C,
      mergedClsPrefixRef: o,
      mergedThemeRef: d,
      scrollXRef: P(() => e.scrollX),
      rowsRef: v,
      colsRef: g,
      paginatedDataRef: w,
      leftActiveFixedColKeyRef: Me,
      leftActiveFixedChildrenColKeysRef: Ve,
      rightActiveFixedColKeyRef: re,
      rightActiveFixedChildrenColKeysRef: ce,
      leftFixedColumnsRef: De,
      rightFixedColumnsRef: rt,
      fixedColumnLeftMapRef: St,
      fixedColumnRightMapRef: Bt,
      mergedCurrentPageRef: B,
      someRowsCheckedRef: U,
      allRowsCheckedRef: de,
      mergedSortStateRef: D,
      mergedFilterStateRef: E,
      loadingRef: oe(e, "loading"),
      rowClassNameRef: oe(e, "rowClassName"),
      mergedCheckedRowKeySetRef: Fe,
      mergedExpandedRowKeysRef: Pe,
      mergedInderminateRowKeySetRef: me,
      localeRef: ut,
      expandableRef: Ge,
      stickyExpandedRowsRef: Re,
      rowKeyRef: oe(e, "rowKey"),
      renderExpandRef: nt,
      summaryRef: oe(e, "summary"),
      virtualScrollRef: oe(e, "virtualScroll"),
      virtualScrollXRef: oe(e, "virtualScrollX"),
      heightForRowRef: oe(e, "heightForRow"),
      minRowHeightRef: oe(e, "minRowHeight"),
      virtualScrollHeaderRef: oe(e, "virtualScrollHeader"),
      headerHeightRef: oe(e, "headerHeight"),
      rowPropsRef: oe(e, "rowProps"),
      stripedRef: oe(e, "striped"),
      checkOptionsRef: P(() => {
        const {
          value: k
        } = F;
        return k == null ? void 0 : k.options;
      }),
      rawPaginatedDataRef: S,
      filterMenuCssVarsRef: P(() => {
        const {
          self: {
            actionDividerColor: k,
            actionPadding: W,
            actionButtonMargin: Z
          }
        } = d.value;
        return {
          "--n-action-padding": W,
          "--n-action-button-margin": Z,
          "--n-action-divider-color": k
        };
      }),
      onLoadRef: oe(e, "onLoad"),
      mergedTableLayoutRef: Ze,
      maxHeightRef: oe(e, "maxHeight"),
      minHeightRef: oe(e, "minHeight"),
      flexHeightRef: oe(e, "flexHeight"),
      headerCheckboxDisabledRef: Se,
      paginationBehaviorOnFilterRef: oe(e, "paginationBehaviorOnFilter"),
      summaryPlacementRef: oe(e, "summaryPlacement"),
      filterIconPopoverPropsRef: oe(e, "filterIconPopoverProps"),
      scrollbarPropsRef: oe(e, "scrollbarProps"),
      syncScrollState: be,
      doUpdatePage: O,
      doUpdateFilters: n,
      getResizableWidth: h,
      onUnstableColumnResize: A,
      clearResizableWidth: p,
      doUpdateResizableWidth: m,
      deriveNextSorter: $,
      doCheck: le,
      doUncheck: fe,
      doCheckAll: Y,
      doUncheckAll: ie,
      doUpdateExpandedRowKeys: at,
      handleTableHeaderScroll: xe,
      handleTableBodyScroll: lt,
      setHeaderScrollLeft: Ae,
      renderCell: oe(e, "renderCell")
    });
    const pt = {
      filter: L,
      filters: I,
      clearFilters: te,
      clearSorter: X,
      page: q,
      sort: H,
      clearFilter: V,
      downloadCsv: G,
      scrollTo: (k, W) => {
        var Z;
        (Z = c.value) === null || Z === void 0 || Z.scrollTo(k, W);
      }
    }, Xe = P(() => {
      const {
        size: k
      } = e, {
        common: {
          cubicBezierEaseInOut: W
        },
        self: {
          borderColor: Z,
          tdColorHover: ae,
          tdColorSorting: se,
          tdColorSortingModal: he,
          tdColorSortingPopover: ge,
          thColorSorting: we,
          thColorSortingModal: Ie,
          thColorSortingPopover: Je,
          thColor: Ne,
          thColorHover: Dt,
          tdColor: Mt,
          tdTextColor: It,
          thTextColor: Nt,
          thFontWeight: Ht,
          thButtonColorHover: Qt,
          thIconColor: jt,
          thIconColorActive: j,
          filterSize: Q,
          borderRadius: ye,
          lineHeight: Te,
          tdColorModal: Ke,
          thColorModal: _e,
          borderColorModal: st,
          thColorHoverModal: ct,
          tdColorHoverModal: Ut,
          borderColorPopover: cn,
          thColorPopover: fn,
          tdColorPopover: Tn,
          tdColorHoverPopover: Ar,
          thColorHoverPopover: $r,
          paginationMargin: zr,
          emptyPadding: Er,
          boxShadowAfter: Dr,
          boxShadowBefore: bn,
          sorterSize: Cn,
          resizableContainerSize: hi,
          resizableSize: vi,
          loadingColor: pi,
          loadingSize: gi,
          opacityLoading: mi,
          tdColorStriped: xi,
          tdColorStripedModal: bi,
          tdColorStripedPopover: Ci,
          [J("fontSize", k)]: yi,
          [J("thPadding", k)]: wi,
          [J("tdPadding", k)]: Si
        }
      } = d.value;
      return {
        "--n-font-size": yi,
        "--n-th-padding": wi,
        "--n-td-padding": Si,
        "--n-bezier": W,
        "--n-border-radius": ye,
        "--n-line-height": Te,
        "--n-border-color": Z,
        "--n-border-color-modal": st,
        "--n-border-color-popover": cn,
        "--n-th-color": Ne,
        "--n-th-color-hover": Dt,
        "--n-th-color-modal": _e,
        "--n-th-color-hover-modal": ct,
        "--n-th-color-popover": fn,
        "--n-th-color-hover-popover": $r,
        "--n-td-color": Mt,
        "--n-td-color-hover": ae,
        "--n-td-color-modal": Ke,
        "--n-td-color-hover-modal": Ut,
        "--n-td-color-popover": Tn,
        "--n-td-color-hover-popover": Ar,
        "--n-th-text-color": Nt,
        "--n-td-text-color": It,
        "--n-th-font-weight": Ht,
        "--n-th-button-color-hover": Qt,
        "--n-th-icon-color": jt,
        "--n-th-icon-color-active": j,
        "--n-filter-size": Q,
        "--n-pagination-margin": zr,
        "--n-empty-padding": Er,
        "--n-box-shadow-before": bn,
        "--n-box-shadow-after": Dr,
        "--n-sorter-size": Cn,
        "--n-resizable-container-size": hi,
        "--n-resizable-size": vi,
        "--n-loading-size": gi,
        "--n-loading-color": pi,
        "--n-opacity-loading": mi,
        "--n-td-color-striped": xi,
        "--n-td-color-striped-modal": bi,
        "--n-td-color-striped-popover": Ci,
        "n-td-color-sorting": se,
        "n-td-color-sorting-modal": he,
        "n-td-color-sorting-popover": ge,
        "n-th-color-sorting": we,
        "n-th-color-sorting-modal": Ie,
        "n-th-color-sorting-popover": Je
      };
    }), ue = i ? Ue("data-table", P(() => e.size[0]), Xe, e) : void 0, Be = P(() => {
      if (!e.pagination) return !1;
      if (e.paginateSinglePage) return !0;
      const k = z.value, {
        pageCount: W
      } = k;
      return W !== void 0 ? W > 1 : k.itemCount && k.pageSize && k.itemCount > k.pageSize;
    });
    return Object.assign({
      mainTableInstRef: c,
      mergedClsPrefix: o,
      rtlEnabled: l,
      mergedTheme: d,
      paginatedData: w,
      mergedBordered: r,
      mergedBottomBordered: s,
      mergedPagination: z,
      mergedShowPagination: Be,
      cssVars: i ? void 0 : Xe,
      themeClass: ue == null ? void 0 : ue.themeClass,
      onRender: ue == null ? void 0 : ue.onRender
    }, pt);
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
    }, f(Ty, {
      ref: "mainTableInstRef"
    })), this.mergedShowPagination ? f("div", {
      class: `${e}-data-table__pagination`
    }, f(Yu, Object.assign({
      theme: this.mergedTheme.peers.Pagination,
      themeOverrides: this.mergedTheme.peerOverrides.Pagination,
      disabled: this.loading
    }, this.mergedPagination))) : null, f(zt, {
      name: "fade-in-scale-up-transition"
    }, {
      default: () => this.loading ? f("div", {
        class: `${e}-data-table-loading-wrapper`
      }, Lt(o.loading, () => [f(tr, Object.assign({
        clsPrefix: e,
        strokeWidth: 20
      }, i))])) : null
    }));
  }
}), mc = "n-dialog-provider", xc = "n-dialog-api", Gy = "n-dialog-reactive-list";
function bc() {
  const e = pe(xc, null);
  return e === null && $n("use-dialog", "No outer <n-dialog-provider /> founded."), e;
}
const Xy = {
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
function Yy(e) {
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
    warningColor: h,
    errorColor: p,
    primaryColor: m,
    dividerColor: v,
    borderRadius: g,
    fontWeightStrong: x,
    lineHeight: b,
    fontSize: y
  } = e;
  return Object.assign(Object.assign({}, Xy), {
    fontSize: y,
    lineHeight: b,
    border: `1px solid ${v}`,
    titleTextColor: t,
    textColor: r,
    color: o,
    closeColorHover: s,
    closeColorPressed: d,
    closeIconColor: i,
    closeIconColorHover: a,
    closeIconColorPressed: l,
    closeBorderRadius: g,
    iconColor: m,
    iconColorInfo: u,
    iconColorSuccess: c,
    iconColorWarning: h,
    iconColorError: p,
    borderRadius: g,
    titleFontWeight: x
  });
}
const Cc = {
  name: "Dialog",
  common: qe,
  peers: {
    Button: di
  },
  self: Yy
}, ci = {
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
}, yc = Rn(ci), Zy = T([R("dialog", `
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
 `, [T("> *:not(:last-child)", `
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
 `), R("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), ei(R("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), R("dialog", [wd(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), Jy = {
  default: () => f(Go, null),
  info: () => f(Go, null),
  success: () => f(Ja, null),
  warning: () => f(ai, null),
  error: () => f(Za, null)
}, wc = ee({
  name: "Dialog",
  alias: [
    "NimbusConfirmCard",
    // deprecated
    "Confirm"
    // deprecated
  ],
  props: Object.assign(Object.assign({}, ve.props), ci),
  setup(e) {
    const {
      mergedComponentPropsRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = ze(e), a = wt("Dialog", i, r), l = P(() => {
      var m, v;
      const {
        iconPlacement: g
      } = e;
      return g || ((v = (m = t == null ? void 0 : t.value) === null || m === void 0 ? void 0 : m.Dialog) === null || v === void 0 ? void 0 : v.iconPlacement) || "left";
    });
    function s(m) {
      const {
        onPositiveClick: v
      } = e;
      v && v(m);
    }
    function d(m) {
      const {
        onNegativeClick: v
      } = e;
      v && v(m);
    }
    function u() {
      const {
        onClose: m
      } = e;
      m && m();
    }
    const c = ve("Dialog", "-dialog", Zy, Cc, e, r), h = P(() => {
      const {
        type: m
      } = e, v = l.value, {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          fontSize: x,
          lineHeight: b,
          border: y,
          titleTextColor: B,
          textColor: w,
          color: S,
          closeBorderRadius: F,
          closeColorHover: C,
          closeColorPressed: z,
          closeIconColor: E,
          closeIconColorHover: D,
          closeIconColorPressed: K,
          closeIconSize: O,
          borderRadius: n,
          titleFontWeight: A,
          titleFontSize: $,
          padding: L,
          iconSize: I,
          actionSpace: V,
          contentMargin: te,
          closeSize: X,
          [v === "top" ? "iconMarginIconTop" : "iconMargin"]: q,
          [v === "top" ? "closeMarginIconTop" : "closeMargin"]: H,
          [J("iconColor", m)]: G
        }
      } = c.value, Y = Xt(q);
      return {
        "--n-font-size": x,
        "--n-icon-color": G,
        "--n-bezier": g,
        "--n-close-margin": H,
        "--n-icon-margin-top": Y.top,
        "--n-icon-margin-right": Y.right,
        "--n-icon-margin-bottom": Y.bottom,
        "--n-icon-margin-left": Y.left,
        "--n-icon-size": I,
        "--n-close-size": X,
        "--n-close-icon-size": O,
        "--n-close-border-radius": F,
        "--n-close-color-hover": C,
        "--n-close-color-pressed": z,
        "--n-close-icon-color": E,
        "--n-close-icon-color-hover": D,
        "--n-close-icon-color-pressed": K,
        "--n-color": S,
        "--n-text-color": w,
        "--n-border-radius": n,
        "--n-padding": L,
        "--n-line-height": b,
        "--n-border": y,
        "--n-content-margin": te,
        "--n-title-font-size": $,
        "--n-title-font-weight": A,
        "--n-title-text-color": B,
        "--n-action-space": V
      };
    }), p = o ? Ue("dialog", P(() => `${e.type[0]}${l.value[0]}`), h, e) : void 0;
    return {
      mergedClsPrefix: r,
      rtlEnabled: a,
      mergedIconPlacement: l,
      mergedTheme: c,
      handlePositiveClick: s,
      handleNegativeClick: d,
      handleCloseClick: u,
      cssVars: o ? void 0 : h,
      themeClass: p == null ? void 0 : p.themeClass,
      onRender: p == null ? void 0 : p.onRender
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
      positiveButtonProps: h,
      negativeButtonProps: p,
      handlePositiveClick: m,
      handleNegativeClick: v,
      mergedTheme: g,
      loading: x,
      type: b,
      mergedClsPrefix: y
    } = this;
    (e = this.onRender) === null || e === void 0 || e.call(this);
    const B = a ? f(ft, {
      clsPrefix: y,
      class: `${y}-dialog__icon`
    }, {
      default: () => tt(this.$slots.icon, (S) => S || (this.icon ? dt(this.icon) : Jy[this.type]()))
    }) : null, w = tt(this.$slots.action, (S) => S || c || u || d ? f("div", {
      class: [`${y}-dialog__action`, this.actionClass],
      style: this.actionStyle
    }, S || (d ? [dt(d)] : [this.negativeText && f(qn, Object.assign({
      theme: g.peers.Button,
      themeOverrides: g.peerOverrides.Button,
      ghost: !0,
      size: "small",
      onClick: v
    }, p), {
      default: () => dt(this.negativeText)
    }), this.positiveText && f(qn, Object.assign({
      theme: g.peers.Button,
      themeOverrides: g.peerOverrides.Button,
      size: "small",
      type: b === "default" ? "primary" : b,
      disabled: x,
      loading: x,
      onClick: m
    }, h), {
      default: () => dt(this.positiveText)
    })])) : null);
    return f("div", {
      class: [`${y}-dialog`, this.themeClass, this.closable && `${y}-dialog--closable`, `${y}-dialog--icon-${r}`, t && `${y}-dialog--bordered`, this.rtlEnabled && `${y}-dialog--rtl`],
      style: o,
      role: "dialog"
    }, i ? tt(this.$slots.close, (S) => {
      const F = [`${y}-dialog__close`, this.rtlEnabled && `${y}-dialog--rtl`];
      return S ? f("div", {
        class: F
      }, S) : f(so, {
        clsPrefix: y,
        class: F,
        onClick: this.handleCloseClick
      });
    }) : null, a && r === "top" ? f("div", {
      class: `${y}-dialog-icon-container`
    }, B) : null, f("div", {
      class: [`${y}-dialog__title`, this.titleClass],
      style: this.titleStyle
    }, a && r === "left" ? B : null, Lt(this.$slots.header, () => [dt(l)])), f("div", {
      class: [`${y}-dialog__content`, w ? "" : `${y}-dialog__content--last`, this.contentClass],
      style: this.contentStyle
    }, Lt(this.$slots.default, () => [dt(s)])), w);
  }
});
function Qy(e) {
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
const ew = {
  name: "Modal",
  common: qe,
  peers: {
    Scrollbar: uo,
    Dialog: Cc,
    Card: Nu
  },
  self: Qy
}, fl = Object.assign(Object.assign({}, ol), ci), tw = Rn(fl), nw = ee({
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
  }, fl), {
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
    const t = _(null), r = _(null), o = _(e.show), i = _(null), a = _(null);
    Le(oe(e, "show"), (x) => {
      x && (o.value = !0);
    }), xh(P(() => e.blockScroll && o.value));
    const l = pe(Rd);
    function s() {
      if (l.transformOriginRef.value === "center")
        return "";
      const {
        value: x
      } = i, {
        value: b
      } = a;
      if (x === null || b === null)
        return "";
      if (r.value) {
        const y = r.value.containerScrollTop;
        return `${x}px ${b + y}px`;
      }
      return "";
    }
    function d(x) {
      if (l.transformOriginRef.value === "center")
        return;
      const b = l.getMousePosition();
      if (!b || !r.value) return;
      const y = r.value.containerScrollTop, {
        offsetLeft: B,
        offsetTop: w
      } = x;
      if (b) {
        const S = b.y, F = b.x;
        i.value = -(B - F), a.value = -(w - S - y);
      }
      x.style.transformOrigin = s();
    }
    function u(x) {
      mt(() => {
        d(x);
      });
    }
    function c(x) {
      x.style.transformOrigin = s(), e.onBeforeLeave();
    }
    function h() {
      o.value = !1, i.value = null, a.value = null, e.onAfterLeave();
    }
    function p() {
      const {
        onClose: x
      } = e;
      x && x();
    }
    function m() {
      e.onNegativeClick();
    }
    function v() {
      e.onPositiveClick();
    }
    const g = _(null);
    return Le(g, (x) => {
      x && mt(() => {
        const b = x.el;
        b && t.value !== b && (t.value = b);
      });
    }), $e(ni, t), $e(ti, null), $e(ao, null), {
      mergedTheme: l.mergedThemeRef,
      appear: l.appearRef,
      isMounted: l.isMountedRef,
      mergedClsPrefix: l.mergedClsPrefixRef,
      bodyRef: t,
      scrollbarRef: r,
      displayed: o,
      childNodeRef: g,
      handlePositiveClick: v,
      handleNegativeClick: m,
      handleCloseClick: p,
      handleAfterLeave: h,
      handleBeforeLeave: c,
      handleEnter: u
    };
  },
  render() {
    const {
      $slots: e,
      $attrs: t,
      handleEnter: r,
      handleAfterLeave: o,
      handleBeforeLeave: i,
      preset: a,
      mergedClsPrefix: l
    } = this;
    let s = null;
    if (!a) {
      if (s = Ji(e), !s) {
        kt("modal", "default slot is empty");
        return;
      }
      s = cd(s), s.props = Yt({
        class: `${l}-modal`
      }, t, s.props || {});
    }
    return this.displayDirective === "show" || this.displayed || this.show ? ln(f("div", {
      role: "none",
      class: `${l}-modal-body-wrapper`
    }, f(nr, {
      ref: "scrollbarRef",
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      contentClass: `${l}-modal-scroll-content`
    }, {
      default: () => {
        var d;
        return [(d = this.renderMask) === null || d === void 0 ? void 0 : d.call(this), f(Vd, {
          disabled: !this.trapFocus,
          active: this.show,
          onEsc: this.onEsc,
          autoFocus: this.autoFocus
        }, {
          default: () => {
            var u;
            return f(zt, {
              name: "fade-in-scale-up-transition",
              appear: (u = this.appear) !== null && u !== void 0 ? u : this.isMounted,
              onEnter: r,
              onAfterEnter: this.onAfterEnter,
              onAfterLeave: o,
              onBeforeLeave: i
            }, {
              default: () => {
                const c = [[vr, this.show]], {
                  onClickoutside: h
                } = this;
                return h && c.push([Zr, this.onClickoutside, void 0, {
                  capture: !0
                }]), ln(this.preset === "confirm" || this.preset === "dialog" ? f(wc, Object.assign({}, this.$attrs, {
                  class: [`${l}-modal`, this.$attrs.class],
                  ref: "bodyRef",
                  theme: this.mergedTheme.peers.Dialog,
                  themeOverrides: this.mergedTheme.peerOverrides.Dialog
                }, gn(this.$props, yc), {
                  "aria-modal": "true"
                }), e) : this.preset === "card" ? f(Q1, Object.assign({}, this.$attrs, {
                  ref: "bodyRef",
                  class: [`${l}-modal`, this.$attrs.class],
                  theme: this.mergedTheme.peers.Card,
                  themeOverrides: this.mergedTheme.peerOverrides.Card
                }, gn(this.$props, Z1), {
                  "aria-modal": "true",
                  role: "dialog"
                }), e) : this.childNodeRef = s, c);
              }
            });
          }
        })];
      }
    })), [[vr, this.displayDirective === "if" || this.displayed || this.show]]) : null;
  }
}), rw = T([R("modal-container", `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), R("modal-mask", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [li({
  enterDuration: ".25s",
  leaveDuration: ".25s",
  enterCubicBezier: "var(--n-bezier-ease-out)",
  leaveCubicBezier: "var(--n-bezier-ease-out)"
})]), R("modal-body-wrapper", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [R("modal-scroll-content", `
 min-height: 100%;
 display: flex;
 position: relative;
 `)]), R("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [co({
  duration: ".25s",
  enterScale: ".5"
})])]), Sc = Object.assign(Object.assign(Object.assign(Object.assign({}, ve.props), {
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
}), fl), {
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
}), Bc = ee({
  name: "Modal",
  inheritAttrs: !1,
  props: Sc,
  setup(e) {
    process.env.NODE_ENV !== "production" && (e.onHide && it("modal", "`on-hide` is deprecated."), e.onAfterHide && it("modal", "`on-after-hide` is deprecated, please use `on-after-leave` instead."), e.onBeforeHide && it("modal", "`on-before-hide` is deprecated, please use `on-before-leave` instead."), e.overlayStyle && it("modal", "`overlay-style` is deprecated, please use `style` instead."));
    const t = _(null), {
      mergedClsPrefixRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = ze(e), a = ve("Modal", "-modal", rw, ew, e, r), l = _o(64), s = Io(), d = Br(), u = e.internalDialog ? pe(mc, null) : null, c = e.internalModal ? pe(vh, null) : null, h = mh();
    function p(F) {
      const {
        onUpdateShow: C,
        "onUpdate:show": z,
        onHide: E
      } = e;
      C && ne(C, F), z && ne(z, F), E && !F && E(F);
    }
    function m() {
      const {
        onClose: F
      } = e;
      F ? Promise.resolve(F()).then((C) => {
        C !== !1 && p(!1);
      }) : p(!1);
    }
    function v() {
      const {
        onPositiveClick: F
      } = e;
      F ? Promise.resolve(F()).then((C) => {
        C !== !1 && p(!1);
      }) : p(!1);
    }
    function g() {
      const {
        onNegativeClick: F
      } = e;
      F ? Promise.resolve(F()).then((C) => {
        C !== !1 && p(!1);
      }) : p(!1);
    }
    function x() {
      const {
        onBeforeLeave: F,
        onBeforeHide: C
      } = e;
      F && ne(F), C && C();
    }
    function b() {
      const {
        onAfterLeave: F,
        onAfterHide: C
      } = e;
      F && ne(F), C && C();
    }
    function y(F) {
      var C;
      const {
        onMaskClick: z
      } = e;
      z && z(F), e.maskClosable && !((C = t.value) === null || C === void 0) && C.contains(mr(F)) && p(!1);
    }
    function B(F) {
      var C;
      (C = e.onEsc) === null || C === void 0 || C.call(e), e.show && e.closeOnEsc && h0(F) && (h.value || p(!1));
    }
    $e(Rd, {
      getMousePosition: () => {
        const F = u || c;
        if (F) {
          const {
            clickedRef: C,
            clickedPositionRef: z
          } = F;
          if (C.value && z.value)
            return z.value;
        }
        return l.value ? s.value : null;
      },
      mergedClsPrefixRef: r,
      mergedThemeRef: a,
      isMountedRef: d,
      appearRef: oe(e, "internalAppear"),
      transformOriginRef: oe(e, "transformOrigin")
    });
    const w = P(() => {
      const {
        common: {
          cubicBezierEaseOut: F
        },
        self: {
          boxShadow: C,
          color: z,
          textColor: E
        }
      } = a.value;
      return {
        "--n-bezier-ease-out": F,
        "--n-box-shadow": C,
        "--n-color": z,
        "--n-text-color": E
      };
    }), S = i ? Ue("theme-class", void 0, w, e) : void 0;
    return {
      mergedClsPrefix: r,
      namespace: o,
      isMounted: d,
      containerRef: t,
      presetProps: P(() => gn(e, tw)),
      handleEsc: B,
      handleAfterLeave: b,
      handleClickoutside: y,
      handleBeforeLeave: x,
      doUpdateShow: p,
      handleNegativeClick: g,
      handlePositiveClick: v,
      handleCloseClick: m,
      cssVars: i ? void 0 : w,
      themeClass: S == null ? void 0 : S.themeClass,
      onRender: S == null ? void 0 : S.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return f(Ed, {
      to: this.to,
      show: this.show
    }, {
      default: () => {
        var t;
        (t = this.onRender) === null || t === void 0 || t.call(this);
        const {
          unstableShowMask: r
        } = this;
        return ln(f("div", {
          role: "none",
          ref: "containerRef",
          class: [`${e}-modal-container`, this.themeClass, this.namespace],
          style: this.cssVars
        }, f(nw, Object.assign({
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
            return f(zt, {
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
        }), this.$slots)), [[Da, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
}), ow = Object.assign(Object.assign({}, ci), {
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
}), iw = ee({
  name: "DialogEnvironment",
  props: Object.assign(Object.assign({}, ow), {
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
    const t = _(!0);
    function r() {
      const {
        onInternalAfterLeave: c,
        internalKey: h,
        onAfterLeave: p
      } = e;
      c && c(h), p && p();
    }
    function o(c) {
      const {
        onPositiveClick: h
      } = e;
      h ? Promise.resolve(h(c)).then((p) => {
        p !== !1 && d();
      }) : d();
    }
    function i(c) {
      const {
        onNegativeClick: h
      } = e;
      h ? Promise.resolve(h(c)).then((p) => {
        p !== !1 && d();
      }) : d();
    }
    function a() {
      const {
        onClose: c
      } = e;
      c ? Promise.resolve(c()).then((h) => {
        h !== !1 && d();
      }) : d();
    }
    function l(c) {
      const {
        onMaskClick: h,
        maskClosable: p
      } = e;
      h && (h(c), p && d());
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
    return f(Bc, {
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
      internalAppear: !0,
      internalDialog: !0
    }, {
      default: () => f(wc, Object.assign({}, gn(this.$props, yc), {
        style: this.internalStyle,
        onClose: o,
        onNegativeClick: r,
        onPositiveClick: e
      }))
    });
  }
}), aw = {
  injectionKey: String,
  to: [String, Object]
}, kc = ee({
  name: "DialogProvider",
  props: aw,
  setup() {
    const e = _([]), t = {};
    function r(s = {}) {
      const d = sn(), u = io(Object.assign(Object.assign({}, s), {
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
    return $e(xc, l), $e(mc, {
      clickedRef: _o(64),
      clickedPositionRef: Io()
    }), $e(Gy, e), Object.assign(Object.assign({}, l), {
      dialogList: e,
      dialogInstRefs: t,
      handleAfterLeave: i
    });
  },
  render() {
    var e, t;
    return f(ht, null, [this.dialogList.map((r) => f(iw, Yn(r, ["destroy", "style"], {
      internalStyle: r.style,
      to: this.to,
      ref: (o) => {
        o === null ? delete this.dialogInstRefs[`n-dialog-${r.key}`] : this.dialogInstRefs[`n-dialog-${r.key}`] = o;
      },
      internalKey: r.key,
      onInternalAfterLeave: this.handleAfterLeave
    }))), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)]);
  }
}), Fc = "n-loading-bar", Rc = "n-loading-bar-api";
function lw(e) {
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
const sw = {
  name: "LoadingBar",
  common: qe,
  self: lw
}, dw = R("loading-bar-container", `
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`, [li({
  enterDuration: "0.3s",
  leaveDuration: "0.8s"
}), R("loading-bar", `
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
var Ro = function(e, t, r, o) {
  function i(a) {
    return a instanceof r ? a : new r(function(l) {
      l(a);
    });
  }
  return new (r || (r = Promise))(function(a, l) {
    function s(c) {
      try {
        u(o.next(c));
      } catch (h) {
        l(h);
      }
    }
    function d(c) {
      try {
        u(o.throw(c));
      } catch (h) {
        l(h);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, d);
    }
    u((o = o.apply(e, t || [])).next());
  });
};
function Po(e, t) {
  return `${t}-loading-bar ${t}-loading-bar--${e}`;
}
const uw = ee({
  name: "LoadingBar",
  props: {
    containerClass: String,
    containerStyle: [String, Object]
  },
  setup() {
    const {
      inlineThemeDisabled: e
    } = ze(), {
      props: t,
      mergedClsPrefixRef: r
    } = pe(Fc), o = _(null), i = _(!1), a = _(!1), l = _(!1), s = _(!1);
    let d = !1;
    const u = _(!1), c = P(() => {
      const {
        loadingBarStyle: S
      } = t;
      return S ? S[u.value ? "error" : "loading"] : "";
    });
    function h() {
      return Ro(this, void 0, void 0, function* () {
        i.value = !1, l.value = !1, d = !1, u.value = !1, s.value = !0, yield mt(), s.value = !1;
      });
    }
    function p() {
      return Ro(this, arguments, void 0, function* (S = 0, F = 80, C = "starting") {
        if (a.value = !0, yield h(), d) return;
        l.value = !0, yield mt();
        const z = o.value;
        z && (z.style.maxWidth = `${S}%`, z.style.transition = "none", z.offsetWidth, z.className = Po(C, r.value), z.style.transition = "", z.style.maxWidth = `${F}%`);
      });
    }
    function m() {
      return Ro(this, void 0, void 0, function* () {
        if (d || u.value) return;
        a.value && (yield mt()), d = !0;
        const S = o.value;
        S && (S.className = Po("finishing", r.value), S.style.maxWidth = "100%", S.offsetWidth, l.value = !1);
      });
    }
    function v() {
      if (!(d || u.value))
        if (!l.value)
          p(100, 100, "error").then(() => {
            u.value = !0;
            const S = o.value;
            S && (S.className = Po("error", r.value), S.offsetWidth, l.value = !1);
          });
        else {
          u.value = !0;
          const S = o.value;
          if (!S) return;
          S.className = Po("error", r.value), S.style.maxWidth = "100%", S.offsetWidth, l.value = !1;
        }
    }
    function g() {
      i.value = !0;
    }
    function x() {
      i.value = !1;
    }
    function b() {
      return Ro(this, void 0, void 0, function* () {
        yield h();
      });
    }
    const y = ve("LoadingBar", "-loading-bar", dw, sw, t, r), B = P(() => {
      const {
        self: {
          height: S,
          colorError: F,
          colorLoading: C
        }
      } = y.value;
      return {
        "--n-height": S,
        "--n-color-loading": C,
        "--n-color-error": F
      };
    }), w = e ? Ue("loading-bar", void 0, B, t) : void 0;
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
      handleAfterEnter: x,
      handleAfterLeave: b,
      mergedLoadingBarStyle: c,
      cssVars: e ? void 0 : B,
      themeClass: w == null ? void 0 : w.themeClass,
      onRender: w == null ? void 0 : w.onRender
    };
  },
  render() {
    if (!this.started) return null;
    const {
      mergedClsPrefix: e
    } = this;
    return f(zt, {
      name: "fade-in-transition",
      appear: !0,
      onEnter: this.handleEnter,
      onAfterEnter: this.handleAfterEnter,
      onAfterLeave: this.handleAfterLeave,
      css: !this.transitionDisabled
    }, {
      default: () => {
        var t;
        return (t = this.onRender) === null || t === void 0 || t.call(this), ln(f("div", {
          class: [`${e}-loading-bar-container`, this.themeClass, this.containerClass],
          style: this.containerStyle
        }, f("div", {
          ref: "loadingBarRef",
          class: [`${e}-loading-bar`],
          style: [this.cssVars, this.mergedLoadingBarStyle]
        })), [[vr, this.loading || !this.loading && this.entering]]);
      }
    });
  }
}), cw = Object.assign(Object.assign({}, ve.props), {
  to: {
    type: [String, Object, Boolean],
    default: void 0
  },
  containerClass: String,
  containerStyle: [String, Object],
  loadingBarStyle: {
    type: Object
  }
}), fw = ee({
  name: "LoadingBarProvider",
  props: cw,
  setup(e) {
    const t = Br(), r = _(null), o = {
      start() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.start() : mt(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.start();
        });
      },
      error() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.error() : mt(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.error();
        });
      },
      finish() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.finish() : mt(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.finish();
        });
      }
    }, {
      mergedClsPrefixRef: i
    } = ze(e);
    return $e(Rc, o), $e(Fc, {
      props: e,
      mergedClsPrefixRef: i
    }), Object.assign(o, {
      loadingBarRef: r
    });
  },
  render() {
    var e, t;
    return f(ht, null, f(Zo, {
      disabled: this.to === !1,
      to: this.to || "body"
    }, f(uw, {
      ref: "loadingBarRef",
      containerStyle: this.containerStyle,
      containerClass: this.containerClass
    })), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
  }
});
function hw() {
  const e = pe(Rc, null);
  return e === null && $n("use-loading-bar", "No outer <n-loading-bar-provider /> founded."), e;
}
const Pc = "n-message-api", Ac = "n-message-provider", vw = {
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
function pw(e) {
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
    primaryColor: h,
    lineHeight: p,
    borderRadius: m,
    closeColorHover: v,
    closeColorPressed: g
  } = e;
  return Object.assign(Object.assign({}, vw), {
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
    iconColorLoading: h,
    closeColorHover: v,
    closeColorPressed: g,
    closeIconColor: r,
    closeIconColorHover: o,
    closeIconColorPressed: i,
    closeColorHoverInfo: v,
    closeColorPressedInfo: g,
    closeIconColorInfo: r,
    closeIconColorHoverInfo: o,
    closeIconColorPressedInfo: i,
    closeColorHoverSuccess: v,
    closeColorPressedSuccess: g,
    closeIconColorSuccess: r,
    closeIconColorHoverSuccess: o,
    closeIconColorPressedSuccess: i,
    closeColorHoverError: v,
    closeColorPressedError: g,
    closeIconColorError: r,
    closeIconColorHoverError: o,
    closeIconColorPressedError: i,
    closeColorHoverWarning: v,
    closeColorPressedWarning: g,
    closeIconColorWarning: r,
    closeIconColorHoverWarning: o,
    closeIconColorPressedWarning: i,
    closeColorHoverLoading: v,
    closeColorPressedLoading: g,
    closeIconColorLoading: r,
    closeIconColorHoverLoading: o,
    closeIconColorPressedLoading: i,
    loadingColor: h,
    lineHeight: p,
    borderRadius: m
  });
}
const gw = {
  name: "Message",
  common: qe,
  self: pw
}, $c = {
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
}, mw = T([R("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [Ou({
  overflow: "visible",
  originalTransition: "transform .3s var(--n-bezier)",
  enterToProps: {
    transform: "scale(1)"
  },
  leaveToProps: {
    transform: "scale(0.85)"
  }
})]), R("message", `
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
 `, [["default", "info", "success", "warning", "error", "loading"].map((e) => N(`${e}-type`, [T("> *", `
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])), T("> *", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [Gt()])]), M("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [T("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), T("&:active", `
 color: var(--n-close-icon-color-pressed);
 `)])]), R("message-container", `
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
 `)])]), xw = {
  info: () => f(Go, null),
  success: () => f(Ja, null),
  warning: () => f(ai, null),
  error: () => f(Za, null),
  default: () => null
}, bw = ee({
  name: "Message",
  props: Object.assign(Object.assign({}, $c), {
    render: Function
  }),
  setup(e) {
    const {
      inlineThemeDisabled: t,
      mergedRtlRef: r
    } = ze(e), {
      props: o,
      mergedClsPrefixRef: i
    } = pe(Ac), a = wt("Message", r, i), l = ve("Message", "-message", mw, gw, o, i), s = P(() => {
      const {
        type: u
      } = e, {
        common: {
          cubicBezierEaseInOut: c
        },
        self: {
          padding: h,
          margin: p,
          maxWidth: m,
          iconMargin: v,
          closeMargin: g,
          closeSize: x,
          iconSize: b,
          fontSize: y,
          lineHeight: B,
          borderRadius: w,
          iconColorInfo: S,
          iconColorSuccess: F,
          iconColorWarning: C,
          iconColorError: z,
          iconColorLoading: E,
          closeIconSize: D,
          closeBorderRadius: K,
          [J("textColor", u)]: O,
          [J("boxShadow", u)]: n,
          [J("color", u)]: A,
          [J("closeColorHover", u)]: $,
          [J("closeColorPressed", u)]: L,
          [J("closeIconColor", u)]: I,
          [J("closeIconColorPressed", u)]: V,
          [J("closeIconColorHover", u)]: te
        }
      } = l.value;
      return {
        "--n-bezier": c,
        "--n-margin": p,
        "--n-padding": h,
        "--n-max-width": m,
        "--n-font-size": y,
        "--n-icon-margin": v,
        "--n-icon-size": b,
        "--n-close-icon-size": D,
        "--n-close-border-radius": K,
        "--n-close-size": x,
        "--n-close-margin": g,
        "--n-text-color": O,
        "--n-color": A,
        "--n-box-shadow": n,
        "--n-icon-color-info": S,
        "--n-icon-color-success": F,
        "--n-icon-color-warning": C,
        "--n-icon-color-error": z,
        "--n-icon-color-loading": E,
        "--n-close-color-hover": $,
        "--n-close-color-pressed": L,
        "--n-close-icon-color": I,
        "--n-close-icon-color-pressed": V,
        "--n-close-icon-color-hover": te,
        "--n-line-height": B,
        "--n-border-radius": w
      };
    }), d = t ? Ue("message", P(() => e.type[0]), s, {}) : void 0;
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
    let h;
    return f("div", {
      class: [`${i}-message-wrapper`, l],
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
      style: [{
        alignItems: this.placement.startsWith("top") ? "flex-start" : "flex-end"
      }, a]
    }, e ? e(this.$props) : f("div", {
      class: [`${i}-message ${i}-message--${t}-type`, this.rtlEnabled && `${i}-message--rtl`]
    }, (h = Cw(d, t, i)) && c ? f("div", {
      class: `${i}-message__icon ${i}-message__icon--${t}-type`
    }, f(Rr, null, {
      default: () => h
    })) : null, f("div", {
      class: `${i}-message__content`
    }, dt(o)), r ? f(so, {
      clsPrefix: i,
      class: `${i}-message__close`,
      onClick: u,
      absolute: !0
    }) : null));
  }
});
function Cw(e, t, r) {
  if (typeof e == "function")
    return e();
  {
    const o = t === "loading" ? f(tr, {
      clsPrefix: r,
      strokeWidth: 24,
      scale: 0.85
    }) : xw[t]();
    return o ? f(ft, {
      clsPrefix: r,
      key: t
    }, {
      default: () => o
    }) : null;
  }
}
const yw = ee({
  name: "MessageEnvironment",
  props: Object.assign(Object.assign({}, $c), {
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
    const r = _(!0);
    Ft(() => {
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
        onInternalAfterLeave: h,
        onAfterHide: p,
        internalKey: m
      } = e;
      c && c(), h && h(m), p && p();
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
    return f(Qa, {
      appear: !0,
      onAfterLeave: this.handleAfterLeave,
      onLeave: this.onLeave
    }, {
      default: () => [this.show ? f(bw, {
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
}), ww = Object.assign(Object.assign({}, ve.props), {
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
}), Sw = ee({
  name: "MessageProvider",
  props: ww,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = ze(e), r = _([]), o = _({}), i = {
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
    $e(Ac, {
      props: e,
      mergedClsPrefixRef: t
    }), $e(Pc, i);
    function a(d, u) {
      const c = sn(), h = io(Object.assign(Object.assign({}, u), {
        content: d,
        key: c,
        destroy: () => {
          var m;
          (m = o.value[c]) === null || m === void 0 || m.hide();
        }
      })), {
        max: p
      } = e;
      return p && r.value.length >= p && r.value.shift(), r.value.push(h), h;
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
    return f(ht, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e), this.messageList.length ? f(Zo, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, f("div", {
      class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass],
      key: "message-container",
      style: this.containerStyle
    }, this.messageList.map((o) => f(yw, Object.assign({
      ref: (i) => {
        i && (this.messageRefs[o.key] = i);
      },
      internalKey: o.key,
      onInternalAfterLeave: this.handleAfterLeave
    }, Yn(o, ["destroy"], void 0), {
      duration: o.duration === void 0 ? this.duration : o.duration,
      keepAliveOnHover: o.keepAliveOnHover === void 0 ? this.keepAliveOnHover : o.keepAliveOnHover,
      closable: o.closable === void 0 ? this.closable : o.closable
    }))))) : null);
  }
});
function Bw() {
  const e = pe(Pc, null);
  return e === null && $n("use-message", "No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."), e;
}
const Qs = "n-modal-provider", zc = "n-modal-api", kw = "n-modal-reactive-list", Fw = ee({
  name: "ModalEnvironment",
  props: Object.assign(Object.assign({}, Sc), {
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
    const t = _(!0);
    function r() {
      const {
        onInternalAfterLeave: c,
        internalKey: h,
        onAfterLeave: p
      } = e;
      c && c(h), p && p();
    }
    function o() {
      const {
        onPositiveClick: c
      } = e;
      c ? Promise.resolve(c()).then((h) => {
        h !== !1 && d();
      }) : d();
    }
    function i() {
      const {
        onNegativeClick: c
      } = e;
      c ? Promise.resolve(c()).then((h) => {
        h !== !1 && d();
      }) : d();
    }
    function a() {
      const {
        onClose: c
      } = e;
      c ? Promise.resolve(c()).then((h) => {
        h !== !1 && d();
      }) : d();
    }
    function l(c) {
      const {
        onMaskClick: h,
        maskClosable: p
      } = e;
      h && (h(c), p && d());
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
    return f(Bc, Object.assign({}, this.$props, {
      show: i,
      onUpdateShow: e,
      onMaskClick: r,
      onEsc: o,
      onAfterLeave: t,
      internalAppear: !0,
      internalModal: !0
    }));
  }
}), Rw = {
  to: [String, Object]
}, Ec = ee({
  name: "ModalProvider",
  props: Rw,
  setup() {
    const e = _o(64), t = Io(), r = _([]), o = {};
    function i(d = {}) {
      const u = sn(), c = io(Object.assign(Object.assign({}, d), {
        key: u,
        destroy: () => {
          var h;
          (h = o[`n-modal-${u}`]) === null || h === void 0 || h.hide();
        }
      }));
      return r.value.push(c), c;
    }
    function a(d) {
      const {
        value: u
      } = r;
      u.splice(u.findIndex((c) => c.key === d), 1);
    }
    function l() {
      Object.values(o).forEach((d) => {
        d == null || d.hide();
      });
    }
    const s = {
      create: i,
      destroyAll: l
    };
    return $e(zc, s), $e(Qs, {
      clickedRef: _o(64),
      clickedPositionRef: Io()
    }), $e(kw, r), $e(Qs, {
      clickedRef: e,
      clickedPositionRef: t
    }), Object.assign(Object.assign({}, s), {
      modalList: r,
      modalInstRefs: o,
      handleAfterLeave: a
    });
  },
  render() {
    var e, t;
    return f(ht, null, [this.modalList.map((r) => {
      var o;
      return f(Fw, Yn(r, ["destroy"], {
        to: (o = r.to) !== null && o !== void 0 ? o : this.to,
        ref: (i) => {
          i === null ? delete this.modalInstRefs[`n-modal-${r.key}`] : this.modalInstRefs[`n-modal-${r.key}`] = i;
        },
        internalKey: r.key,
        onInternalAfterLeave: this.handleAfterLeave
      }));
    }), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)]);
  }
}), Pw = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px"
};
function Aw(e) {
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
    closeColorPressed: h,
    textColor1: p,
    textColor3: m,
    borderRadius: v,
    fontWeightStrong: g,
    boxShadow2: x,
    lineHeight: b,
    fontSize: y
  } = e;
  return Object.assign(Object.assign({}, Pw), {
    borderRadius: v,
    lineHeight: b,
    fontSize: y,
    headerFontWeight: g,
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
    closeBorderRadius: v,
    closeColorHover: c,
    closeColorPressed: h,
    headerTextColor: p,
    descriptionTextColor: m,
    actionTextColor: t,
    boxShadow: x
  });
}
const $w = {
  name: "Notification",
  common: qe,
  peers: {
    Scrollbar: uo
  },
  self: Aw
}, fi = "n-notification-provider", zw = ee({
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
    } = pe(fi), o = _(null);
    return Qe(() => {
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
    }, t ? f(nr, {
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      contentStyle: {
        overflow: "hidden"
      }
    }, e) : e);
  }
}), Ew = {
  info: () => f(Go, null),
  success: () => f(Ja, null),
  warning: () => f(ai, null),
  error: () => f(Za, null),
  default: () => null
}, hl = {
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
}, Dw = Rn(hl), Tw = ee({
  name: "Notification",
  props: hl,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      mergedThemeRef: r,
      props: o
    } = pe(fi), {
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = ze(), l = wt("Notification", a, t), s = P(() => {
      const {
        type: u
      } = e, {
        self: {
          color: c,
          textColor: h,
          closeIconColor: p,
          closeIconColorHover: m,
          closeIconColorPressed: v,
          headerTextColor: g,
          descriptionTextColor: x,
          actionTextColor: b,
          borderRadius: y,
          headerFontWeight: B,
          boxShadow: w,
          lineHeight: S,
          fontSize: F,
          closeMargin: C,
          closeSize: z,
          width: E,
          padding: D,
          closeIconSize: K,
          closeBorderRadius: O,
          closeColorHover: n,
          closeColorPressed: A,
          titleFontSize: $,
          metaFontSize: L,
          descriptionFontSize: I,
          [J("iconColor", u)]: V
        },
        common: {
          cubicBezierEaseOut: te,
          cubicBezierEaseIn: X,
          cubicBezierEaseInOut: q
        }
      } = r.value, {
        left: H,
        right: G,
        top: Y,
        bottom: ie
      } = Xt(D);
      return {
        "--n-color": c,
        "--n-font-size": F,
        "--n-text-color": h,
        "--n-description-text-color": x,
        "--n-action-text-color": b,
        "--n-title-text-color": g,
        "--n-title-font-weight": B,
        "--n-bezier": q,
        "--n-bezier-ease-out": te,
        "--n-bezier-ease-in": X,
        "--n-border-radius": y,
        "--n-box-shadow": w,
        "--n-close-border-radius": O,
        "--n-close-color-hover": n,
        "--n-close-color-pressed": A,
        "--n-close-icon-color": p,
        "--n-close-icon-color-hover": m,
        "--n-close-icon-color-pressed": v,
        "--n-line-height": S,
        "--n-icon-color": V,
        "--n-close-margin": C,
        "--n-close-size": z,
        "--n-close-icon-size": K,
        "--n-width": E,
        "--n-padding-left": H,
        "--n-padding-right": G,
        "--n-padding-top": Y,
        "--n-padding-bottom": ie,
        "--n-title-font-size": $,
        "--n-meta-font-size": L,
        "--n-description-font-size": I
      };
    }), d = i ? Ue("notification", P(() => e.type[0]), s, o) : void 0;
    return {
      mergedClsPrefix: t,
      showAvatar: P(() => e.avatar || e.type !== "default"),
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
    }, this.avatar ? dt(this.avatar) : this.type !== "default" ? f(ft, {
      clsPrefix: t
    }, {
      default: () => Ew[this.type]()
    }) : null) : null, this.closable ? f(so, {
      clsPrefix: t,
      class: `${t}-notification__close`,
      onClick: this.handleCloseClick
    }) : null, f("div", {
      ref: "bodyRef",
      class: `${t}-notification-main`
    }, this.title ? f("div", {
      class: `${t}-notification-main__header`
    }, dt(this.title)) : null, this.description ? f("div", {
      class: `${t}-notification-main__description`
    }, dt(this.description)) : null, this.content ? f("pre", {
      class: `${t}-notification-main__content`
    }, dt(this.content)) : null, this.meta || this.action ? f("div", {
      class: `${t}-notification-main-footer`
    }, this.meta ? f("div", {
      class: `${t}-notification-main-footer__meta`
    }, dt(this.meta)) : null, this.action ? f("div", {
      class: `${t}-notification-main-footer__action`
    }, dt(this.action)) : null) : null)));
  }
}), Ow = Object.assign(Object.assign({}, hl), {
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
}), Mw = ee({
  name: "NotificationEnvironment",
  props: Object.assign(Object.assign({}, Ow), {
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
    } = pe(fi), r = _(!0);
    let o = null;
    function i() {
      r.value = !1, o && window.clearTimeout(o);
    }
    function a(v) {
      t.value++, mt(() => {
        v.style.height = `${v.offsetHeight}px`, v.style.maxHeight = "0", v.style.transition = "none", v.offsetHeight, v.style.transition = "", v.style.maxHeight = v.style.height;
      });
    }
    function l(v) {
      t.value--, v.style.height = "", v.style.maxHeight = "";
      const {
        onAfterEnter: g,
        onAfterShow: x
      } = e;
      g && g(), x && x();
    }
    function s(v) {
      t.value++, v.style.maxHeight = `${v.offsetHeight}px`, v.style.height = `${v.offsetHeight}px`, v.offsetHeight;
    }
    function d(v) {
      const {
        onHide: g
      } = e;
      g && g(), v.style.maxHeight = "0", v.offsetHeight;
    }
    function u() {
      t.value--;
      const {
        onAfterLeave: v,
        onInternalAfterLeave: g,
        onAfterHide: x,
        internalKey: b
      } = e;
      v && v(), g(b), x && x();
    }
    function c() {
      const {
        duration: v
      } = e;
      v && (o = window.setTimeout(i, v));
    }
    function h(v) {
      v.currentTarget === v.target && o !== null && (window.clearTimeout(o), o = null);
    }
    function p(v) {
      v.currentTarget === v.target && c();
    }
    function m() {
      const {
        onClose: v
      } = e;
      v ? Promise.resolve(v()).then((g) => {
        g !== !1 && i();
      }) : i();
    }
    return Ft(() => {
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
      handleMouseenter: h,
      handleMouseleave: p
    };
  },
  render() {
    return f(zt, {
      name: "notification-transition",
      appear: !0,
      // convert to any since Element is not compatible with HTMLElement
      onBeforeEnter: this.handleBeforeEnter,
      onAfterEnter: this.handleAfterEnter,
      onBeforeLeave: this.handleBeforeLeave,
      onLeave: this.handleLeave,
      onAfterLeave: this.handleAfterLeave
    }, {
      default: () => this.show ? f(Tw, Object.assign({}, gn(this.$props, Dw), {
        onClose: this.handleClose,
        onMouseenter: this.duration && this.keepAliveOnHover ? this.handleMouseenter : void 0,
        onMouseleave: this.duration && this.keepAliveOnHover ? this.handleMouseleave : void 0
      })) : null
    });
  }
}), Iw = T([R("notification-container", `
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `, [T(">", [R("scrollbar", `
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [T(">", [R("scrollbar-container", `
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [R("scrollbar-content", `
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]), N("top, top-right, top-left", `
 top: 12px;
 `, [T("&.transitioning >", [R("scrollbar", [T(">", [R("scrollbar-container", `
 min-height: 100vh !important;
 `)])])])]), N("bottom, bottom-right, bottom-left", `
 bottom: 12px;
 `, [T(">", [R("scrollbar", [T(">", [R("scrollbar-container", [R("scrollbar-content", `
 padding-bottom: 12px;
 `)])])])]), R("notification-wrapper", `
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]), N("top, bottom", `
 left: 50%;
 transform: translateX(-50%);
 `, [R("notification-wrapper", [T("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: scale(0.85);
 `), T("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: scale(1);
 `)])]), N("top", [R("notification-wrapper", `
 transform-origin: top center;
 `)]), N("bottom", [R("notification-wrapper", `
 transform-origin: bottom center;
 `)]), N("top-right, bottom-right", [R("notification", `
 margin-left: 28px;
 margin-right: 16px;
 `)]), N("top-left, bottom-left", [R("notification", `
 margin-left: 16px;
 margin-right: 28px;
 `)]), N("top-right", `
 right: 0;
 `, [Ao("top-right")]), N("top-left", `
 left: 0;
 `, [Ao("top-left")]), N("bottom-right", `
 right: 0;
 `, [Ao("bottom-right")]), N("bottom-left", `
 left: 0;
 `, [Ao("bottom-left")]), N("scrollable", [N("top-right", `
 top: 0;
 `), N("top-left", `
 top: 0;
 `), N("bottom-right", `
 bottom: 0;
 `), N("bottom-left", `
 bottom: 0;
 `)]), R("notification-wrapper", `
 margin-bottom: 12px;
 `, [T("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `), T("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 opacity: 1;
 `), T("&.notification-transition-leave-active", `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `), T("&.notification-transition-enter-active", `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-out),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `)]), R("notification", `
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
 `, [M("avatar", [R("icon", `
 color: var(--n-icon-color);
 `), R("base-icon", `
 color: var(--n-icon-color);
 `)]), N("show-avatar", [R("notification-main", `
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]), N("closable", [R("notification-main", [T("> *:first-child", `
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
 `, [R("icon", "transition: color .3s var(--n-bezier);")]), R("notification-main", `
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `, [R("notification-main-footer", `
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
 `, [T("&:first-child", "margin: 0;")])])])])]);
function Ao(e) {
  const r = e.split("-")[1] === "left" ? "calc(-100%)" : "calc(100%)";
  return R("notification-wrapper", [T("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: translate(${r}, 0);
 `), T("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: translate(0, 0);
 `)]);
}
const Dc = "n-notification-api", _w = Object.assign(Object.assign({}, ve.props), {
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
}), Lw = ee({
  name: "NotificationProvider",
  props: _w,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = ze(e), r = _([]), o = {}, i = /* @__PURE__ */ new Set();
    function a(m) {
      const v = sn(), g = () => {
        i.add(v), o[v] && o[v].hide();
      }, x = io(Object.assign(Object.assign({}, m), {
        key: v,
        destroy: g,
        hide: g,
        deactivate: g
      })), {
        max: b
      } = e;
      if (b && r.value.length - i.size >= b) {
        let y = !1, B = 0;
        for (const w of r.value) {
          if (!i.has(w.key)) {
            o[w.key] && (w.destroy(), y = !0);
            break;
          }
          B++;
        }
        y || r.value.splice(B, 1);
      }
      return r.value.push(x), x;
    }
    const l = ["info", "success", "warning", "error"].map((m) => (v) => a(Object.assign(Object.assign({}, v), {
      type: m
    })));
    function s(m) {
      i.delete(m), r.value.splice(r.value.findIndex((v) => v.key === m), 1);
    }
    const d = ve("Notification", "-notification", Iw, $w, e, t), u = {
      create: a,
      info: l[0],
      success: l[1],
      warning: l[2],
      error: l[3],
      open: h,
      destroyAll: p
    }, c = _(0);
    $e(Dc, u), $e(fi, {
      props: e,
      mergedClsPrefixRef: t,
      mergedThemeRef: d,
      wipTransitionCountRef: c
    });
    function h(m) {
      return a(m);
    }
    function p() {
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
    return f(ht, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e), this.notificationList.length ? f(Zo, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, f(zw, {
      class: this.containerClass,
      style: this.containerStyle,
      scrollable: this.scrollable && o !== "top" && o !== "bottom",
      placement: o
    }, {
      default: () => this.notificationList.map((i) => f(Mw, Object.assign({
        ref: (a) => {
          const l = i.key;
          a === null ? delete this.notificationRefs[l] : this.notificationRefs[l] = a;
        }
      }, Yn(i, ["destroy", "hide", "deactivate"]), {
        internalKey: i.key,
        onInternalAfterLeave: this.handleAfterLeave,
        keepAliveOnHover: i.keepAliveOnHover === void 0 ? this.keepAliveOnHover : i.keepAliveOnHover
      })))
    })) : null);
  }
});
function Nw() {
  const e = pe(Dc, null);
  return e === null && $n("use-notification", "No outer `n-notification-provider` found."), e;
}
function Tc() {
  const e = pe(zc, null);
  return e === null && $n("use-modal", "No outer <n-modal-provider /> founded."), e;
}
const Hw = ee({
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
}), jw = {
  message: Bw,
  notification: Nw,
  loadingBar: hw,
  dialog: bc,
  modal: Tc
};
function Ww({
  providersAndProps: e,
  configProviderProps: t
}) {
  let r = mf(i);
  const o = {
    app: r
  };
  function i() {
    return f(Vu, Ce(t), {
      default: () => e.map(({
        type: s,
        Provider: d,
        props: u
      }) => f(d, Ce(u), {
        default: () => f(Hw, {
          onSetup: () => o[s] = jw[s]()
        })
      }))
    });
  }
  let a;
  return kr && (a = document.createElement("div"), document.body.appendChild(a), r.mount(a)), Object.assign({
    unmount: () => {
      var s;
      if (r === null || a === null) {
        kt("discrete", "unmount call no need because discrete app has been unmounted");
        return;
      }
      r.unmount(), (s = a.parentNode) === null || s === void 0 || s.removeChild(a), a = null, r = null;
    }
  }, o);
}
function m2(e, {
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
          Provider: Sw,
          props: r
        });
        break;
      case "notification":
        s.push({
          type: u,
          Provider: Lw,
          props: i
        });
        break;
      case "dialog":
        s.push({
          type: u,
          Provider: kc,
          props: o
        });
        break;
      case "loadingBar":
        s.push({
          type: u,
          Provider: fw,
          props: a
        });
        break;
      case "modal":
        s.push({
          type: u,
          Provider: Ec,
          props: l
        });
    }
  }), Ww({
    providersAndProps: s,
    configProviderProps: t
  });
}
const Vw = {
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
function Kw(e) {
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
  return Object.assign(Object.assign({}, Vw), {
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
const Oc = {
  name: "Form",
  common: qe,
  self: Kw
}, Uw = {
  iconSize: "22px"
};
function qw(e) {
  const {
    fontSize: t,
    warningColor: r
  } = e;
  return Object.assign(Object.assign({}, Uw), {
    fontSize: t,
    iconColor: r
  });
}
const Gw = {
  name: "Popconfirm",
  common: qe,
  peers: {
    Button: di,
    Popover: rr
  },
  self: qw
};
function Xw(e) {
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
const Yw = {
  name: "Spin",
  common: qe,
  self: Xw
}, fo = "n-form", Mc = "n-form-item-insts", Zw = R("form", [N("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [R("form-item", {
  width: "auto",
  marginRight: "18px"
}, [T("&:last-child", {
  marginRight: 0
})])])]);
var Jw = function(e, t, r, o) {
  function i(a) {
    return a instanceof r ? a : new r(function(l) {
      l(a);
    });
  }
  return new (r || (r = Promise))(function(a, l) {
    function s(c) {
      try {
        u(o.next(c));
      } catch (h) {
        l(h);
      }
    }
    function d(c) {
      try {
        u(o.throw(c));
      } catch (h) {
        l(h);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, d);
    }
    u((o = o.apply(e, t || [])).next());
  });
};
const Qw = Object.assign(Object.assign({}, ve.props), {
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
}), eS = ee({
  name: "Form",
  props: Qw,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = ze(e);
    ve("Form", "-form", Zw, Oc, e, t);
    const r = {}, o = _(void 0), i = (d) => {
      const u = o.value;
      (u === void 0 || d >= u) && (o.value = d);
    };
    function a(d) {
      return Jw(this, arguments, void 0, function* (u, c = () => !0) {
        return yield new Promise((h, p) => {
          const m = [];
          for (const v of Rn(r)) {
            const g = r[v];
            for (const x of g)
              x.path && m.push(x.internalValidate(null, c));
          }
          Promise.all(m).then((v) => {
            const g = v.some((y) => !y.valid), x = [], b = [];
            v.forEach((y) => {
              var B, w;
              !((B = y.errors) === null || B === void 0) && B.length && x.push(y.errors), !((w = y.warnings) === null || w === void 0) && w.length && b.push(y.warnings);
            }), u && u(x.length ? x : void 0, {
              warnings: b.length ? b : void 0
            }), g ? p(x.length ? x : void 0) : h({
              warnings: b.length ? b : void 0
            });
          });
        });
      });
    }
    function l() {
      for (const d of Rn(r)) {
        const u = r[d];
        for (const c of u)
          c.restoreValidation();
      }
    }
    return $e(fo, {
      props: e,
      maxChildLabelWidthRef: o,
      deriveMaxChildLabelWidth: i
    }), $e(Mc, {
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
function Ln() {
  return Ln = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Ln.apply(this, arguments);
}
function tS(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, no(e, t);
}
function ma(e) {
  return ma = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, ma(e);
}
function no(e, t) {
  return no = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, no(e, t);
}
function nS() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function Do(e, t, r) {
  return nS() ? Do = Reflect.construct.bind() : Do = function(i, a, l) {
    var s = [null];
    s.push.apply(s, a);
    var d = Function.bind.apply(i, s), u = new d();
    return l && no(u, l.prototype), u;
  }, Do.apply(null, arguments);
}
function rS(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function xa(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return xa = function(o) {
    if (o === null || !rS(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(o)) return t.get(o);
      t.set(o, i);
    }
    function i() {
      return Do(o, arguments, ma(this).constructor);
    }
    return i.prototype = Object.create(o.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), no(i, o);
  }, xa(e);
}
var oS = /%[sdj%]/g, Ic = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Ic = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(o) {
    return typeof o == "string";
  }) && console.warn(t, r);
});
function ba(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(r) {
    var o = r.field;
    t[o] = t[o] || [], t[o].push(r);
  }), t;
}
function _t(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  var i = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var l = e.replace(oS, function(s) {
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
function iS(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function bt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || iS(t) && typeof e == "string" && !e);
}
function aS(e, t, r) {
  var o = [], i = 0, a = e.length;
  function l(s) {
    o.push.apply(o, s || []), i++, i === a && r(o);
  }
  e.forEach(function(s) {
    t(s, l);
  });
}
function ed(e, t, r) {
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
function lS(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var td = /* @__PURE__ */ function(e) {
  tS(t, e);
  function t(r, o) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = r, i.fields = o, i;
  }
  return t;
}(/* @__PURE__ */ xa(Error));
function sS(e, t, r, o, i) {
  if (t.first) {
    var a = new Promise(function(p, m) {
      var v = function(b) {
        return o(b), b.length ? m(new td(b, ba(b))) : p(i);
      }, g = lS(e);
      ed(g, r, v);
    });
    return a.catch(function(p) {
      return p;
    }), a;
  }
  var l = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), d = s.length, u = 0, c = [], h = new Promise(function(p, m) {
    var v = function(x) {
      if (c.push.apply(c, x), u++, u === d)
        return o(c), c.length ? m(new td(c, ba(c))) : p(i);
    };
    s.length || (o(c), p(i)), s.forEach(function(g) {
      var x = e[g];
      l.indexOf(g) !== -1 ? ed(x, r, v) : aS(x, r, v);
    });
  });
  return h.catch(function(p) {
    return p;
  }), h;
}
function dS(e) {
  return !!(e && e.message !== void 0);
}
function uS(e, t) {
  for (var r = e, o = 0; o < t.length; o++) {
    if (r == null)
      return r;
    r = r[t[o]];
  }
  return r;
}
function nd(e, t) {
  return function(r) {
    var o;
    return e.fullFields ? o = uS(t, e.fullFields) : o = t[r.field || e.fullField], dS(r) ? (r.field = r.field || e.fullField, r.fieldValue = o, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: o,
      field: r.field || e.fullField
    };
  };
}
function rd(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = t[r];
        typeof o == "object" && typeof e[r] == "object" ? e[r] = Ln({}, e[r], o) : e[r] = o;
      }
  }
  return e;
}
var _c = function(t, r, o, i, a, l) {
  t.required && (!o.hasOwnProperty(t.field) || bt(r, l || t.type)) && i.push(_t(a.messages.required, t.fullField));
}, cS = function(t, r, o, i, a) {
  (/^\s+$/.test(r) || r === "") && i.push(_t(a.messages.whitespace, t.fullField));
}, $o, fS = function() {
  if ($o)
    return $o;
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
  d.v4 = function(B) {
    return B && B.exact ? l : new RegExp("" + t(B) + r + t(B), "g");
  }, d.v6 = function(B) {
    return B && B.exact ? s : new RegExp("" + t(B) + i + t(B), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", h = d.v4().source, p = d.v6().source, m = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", v = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", x = "(?::\\d{2,5})?", b = '(?:[/?#][^\\s"]*)?', y = "(?:" + u + "|www\\.)" + c + "(?:localhost|" + h + "|" + p + "|" + m + v + g + ")" + x + b;
  return $o = new RegExp("(?:^" + y + "$)", "i"), $o;
}, od = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Lr = {
  integer: function(t) {
    return Lr.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Lr.number(t) && !Lr.integer(t);
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
    return typeof t == "object" && !Lr.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(od.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(fS());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(od.hex);
  }
}, hS = function(t, r, o, i, a) {
  if (t.required && r === void 0) {
    _c(t, r, o, i, a);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  l.indexOf(s) > -1 ? Lr[s](r) || i.push(_t(a.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && i.push(_t(a.messages.types[s], t.fullField, t.type));
}, vS = function(t, r, o, i, a) {
  var l = typeof t.len == "number", s = typeof t.min == "number", d = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, h = null, p = typeof r == "number", m = typeof r == "string", v = Array.isArray(r);
  if (p ? h = "number" : m ? h = "string" : v && (h = "array"), !h)
    return !1;
  v && (c = r.length), m && (c = r.replace(u, "_").length), l ? c !== t.len && i.push(_t(a.messages[h].len, t.fullField, t.len)) : s && !d && c < t.min ? i.push(_t(a.messages[h].min, t.fullField, t.min)) : d && !s && c > t.max ? i.push(_t(a.messages[h].max, t.fullField, t.max)) : s && d && (c < t.min || c > t.max) && i.push(_t(a.messages[h].range, t.fullField, t.min, t.max));
}, dr = "enum", pS = function(t, r, o, i, a) {
  t[dr] = Array.isArray(t[dr]) ? t[dr] : [], t[dr].indexOf(r) === -1 && i.push(_t(a.messages[dr], t.fullField, t[dr].join(", ")));
}, gS = function(t, r, o, i, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || i.push(_t(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var l = new RegExp(t.pattern);
      l.test(r) || i.push(_t(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, Oe = {
  required: _c,
  whitespace: cS,
  type: hS,
  range: vS,
  enum: pS,
  pattern: gS
}, mS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (bt(r, "string") && !t.required)
      return o();
    Oe.required(t, r, i, l, a, "string"), bt(r, "string") || (Oe.type(t, r, i, l, a), Oe.range(t, r, i, l, a), Oe.pattern(t, r, i, l, a), t.whitespace === !0 && Oe.whitespace(t, r, i, l, a));
  }
  o(l);
}, xS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (bt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && Oe.type(t, r, i, l, a);
  }
  o(l);
}, bS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), bt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && (Oe.type(t, r, i, l, a), Oe.range(t, r, i, l, a));
  }
  o(l);
}, CS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (bt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && Oe.type(t, r, i, l, a);
  }
  o(l);
}, yS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (bt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), bt(r) || Oe.type(t, r, i, l, a);
  }
  o(l);
}, wS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (bt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && (Oe.type(t, r, i, l, a), Oe.range(t, r, i, l, a));
  }
  o(l);
}, SS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (bt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && (Oe.type(t, r, i, l, a), Oe.range(t, r, i, l, a));
  }
  o(l);
}, BS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return o();
    Oe.required(t, r, i, l, a, "array"), r != null && (Oe.type(t, r, i, l, a), Oe.range(t, r, i, l, a));
  }
  o(l);
}, kS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (bt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && Oe.type(t, r, i, l, a);
  }
  o(l);
}, FS = "enum", RS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (bt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && Oe[FS](t, r, i, l, a);
  }
  o(l);
}, PS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (bt(r, "string") && !t.required)
      return o();
    Oe.required(t, r, i, l, a), bt(r, "string") || Oe.pattern(t, r, i, l, a);
  }
  o(l);
}, AS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (bt(r, "date") && !t.required)
      return o();
    if (Oe.required(t, r, i, l, a), !bt(r, "date")) {
      var d;
      r instanceof Date ? d = r : d = new Date(r), Oe.type(t, d, i, l, a), d && Oe.range(t, d.getTime(), i, l, a);
    }
  }
  o(l);
}, $S = function(t, r, o, i, a) {
  var l = [], s = Array.isArray(r) ? "array" : typeof r;
  Oe.required(t, r, i, l, a, s), o(l);
}, Ki = function(t, r, o, i, a) {
  var l = t.type, s = [], d = t.required || !t.required && i.hasOwnProperty(t.field);
  if (d) {
    if (bt(r, l) && !t.required)
      return o();
    Oe.required(t, r, i, s, a, l), bt(r, l) || Oe.type(t, r, i, s, a);
  }
  o(s);
}, zS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (bt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a);
  }
  o(l);
}, Ur = {
  string: mS,
  method: xS,
  number: bS,
  boolean: CS,
  regexp: yS,
  integer: wS,
  float: SS,
  array: BS,
  object: kS,
  enum: RS,
  pattern: PS,
  date: AS,
  url: Ki,
  hex: Ki,
  email: Ki,
  required: $S,
  any: zS
};
function Ca() {
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
var ya = Ca(), yr = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = ya, this.define(r);
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
    return o && (this._messages = rd(Ca(), o)), this._messages;
  }, t.validate = function(o, i, a) {
    var l = this;
    i === void 0 && (i = {}), a === void 0 && (a = function() {
    });
    var s = o, d = i, u = a;
    if (typeof d == "function" && (u = d, d = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function c(g) {
      var x = [], b = {};
      function y(w) {
        if (Array.isArray(w)) {
          var S;
          x = (S = x).concat.apply(S, w);
        } else
          x.push(w);
      }
      for (var B = 0; B < g.length; B++)
        y(g[B]);
      x.length ? (b = ba(x), u(x, b)) : u(null, s);
    }
    if (d.messages) {
      var h = this.messages();
      h === ya && (h = Ca()), rd(h, d.messages), d.messages = h;
    } else
      d.messages = this.messages();
    var p = {}, m = d.keys || Object.keys(this.rules);
    m.forEach(function(g) {
      var x = l.rules[g], b = s[g];
      x.forEach(function(y) {
        var B = y;
        typeof B.transform == "function" && (s === o && (s = Ln({}, s)), b = s[g] = B.transform(b)), typeof B == "function" ? B = {
          validator: B
        } : B = Ln({}, B), B.validator = l.getValidationMethod(B), B.validator && (B.field = g, B.fullField = B.fullField || g, B.type = l.getType(B), p[g] = p[g] || [], p[g].push({
          rule: B,
          value: b,
          source: s,
          field: g
        }));
      });
    });
    var v = {};
    return sS(p, d, function(g, x) {
      var b = g.rule, y = (b.type === "object" || b.type === "array") && (typeof b.fields == "object" || typeof b.defaultField == "object");
      y = y && (b.required || !b.required && g.value), b.field = g.field;
      function B(F, C) {
        return Ln({}, C, {
          fullField: b.fullField + "." + F,
          fullFields: b.fullFields ? [].concat(b.fullFields, [F]) : [F]
        });
      }
      function w(F) {
        F === void 0 && (F = []);
        var C = Array.isArray(F) ? F : [F];
        !d.suppressWarning && C.length && e.warning("async-validator:", C), C.length && b.message !== void 0 && (C = [].concat(b.message));
        var z = C.map(nd(b, s));
        if (d.first && z.length)
          return v[b.field] = 1, x(z);
        if (!y)
          x(z);
        else {
          if (b.required && !g.value)
            return b.message !== void 0 ? z = [].concat(b.message).map(nd(b, s)) : d.error && (z = [d.error(b, _t(d.messages.required, b.field))]), x(z);
          var E = {};
          b.defaultField && Object.keys(g.value).map(function(O) {
            E[O] = b.defaultField;
          }), E = Ln({}, E, g.rule.fields);
          var D = {};
          Object.keys(E).forEach(function(O) {
            var n = E[O], A = Array.isArray(n) ? n : [n];
            D[O] = A.map(B.bind(null, O));
          });
          var K = new e(D);
          K.messages(d.messages), g.rule.options && (g.rule.options.messages = d.messages, g.rule.options.error = d.error), K.validate(g.value, g.rule.options || d, function(O) {
            var n = [];
            z && z.length && n.push.apply(n, z), O && O.length && n.push.apply(n, O), x(n.length ? n : null);
          });
        }
      }
      var S;
      if (b.asyncValidator)
        S = b.asyncValidator(b, g.value, w, g.source, d);
      else if (b.validator) {
        try {
          S = b.validator(b, g.value, w, g.source, d);
        } catch (F) {
          console.error == null || console.error(F), d.suppressValidatorError || setTimeout(function() {
            throw F;
          }, 0), w(F.message);
        }
        S === !0 ? w() : S === !1 ? w(typeof b.message == "function" ? b.message(b.fullField || b.field) : b.message || (b.fullField || b.field) + " fails") : S instanceof Array ? w(S) : S instanceof Error && w(S.message);
      }
      S && S.then && S.then(function() {
        return w();
      }, function(F) {
        return w(F);
      });
    }, function(g) {
      c(g);
    }, s);
  }, t.getType = function(o) {
    if (o.type === void 0 && o.pattern instanceof RegExp && (o.type = "pattern"), typeof o.validator != "function" && o.type && !Ur.hasOwnProperty(o.type))
      throw new Error(_t("Unknown rule type %s", o.type));
    return o.type || "string";
  }, t.getValidationMethod = function(o) {
    if (typeof o.validator == "function")
      return o.validator;
    var i = Object.keys(o), a = i.indexOf("message");
    return a !== -1 && i.splice(a, 1), i.length === 1 && i[0] === "required" ? Ur.required : Ur[this.getType(o)] || void 0;
  }, e;
}();
yr.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Ur[t] = r;
};
yr.warning = Ic;
yr.messages = ya;
yr.validators = Ur;
const {
  cubicBezierEaseInOut: id
} = En;
function ES({
  name: e = "fade-down",
  fromOffset: t = "-4px",
  enterDuration: r = ".3s",
  leaveDuration: o = ".3s",
  enterCubicBezier: i = id,
  leaveCubicBezier: a = id
} = {}) {
  return [T(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0,
    transform: `translateY(${t})`
  }), T(`&.${e}-transition-enter-to, &.${e}-transition-leave-from`, {
    opacity: 1,
    transform: "translateY(0)"
  }), T(`&.${e}-transition-leave-active`, {
    transition: `opacity ${o} ${a}, transform ${o} ${a}`
  }), T(`&.${e}-transition-enter-active`, {
    transition: `opacity ${r} ${i}, transform ${r} ${i}`
  })];
}
const DS = R("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [R("form-item-label", `
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
 `)]), R("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), N("auto-label-width", [R("form-item-label", "white-space: nowrap;")]), N("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [R("form-item-label", `
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
 `), R("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), R("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), R("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [T("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), R("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [N("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), N("error", {
  color: "var(--n-feedback-text-color-error)"
}), ES({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
function TS(e) {
  const t = pe(fo, null);
  return {
    mergedSize: P(() => e.size !== void 0 ? e.size : (t == null ? void 0 : t.props.size) !== void 0 ? t.props.size : "medium")
  };
}
function OS(e) {
  const t = pe(fo, null), r = P(() => {
    const {
      labelPlacement: v
    } = e;
    return v !== void 0 ? v : t != null && t.props.labelPlacement ? t.props.labelPlacement : "top";
  }), o = P(() => r.value === "left" && (e.labelWidth === "auto" || (t == null ? void 0 : t.props.labelWidth) === "auto")), i = P(() => {
    if (r.value === "top") return;
    const {
      labelWidth: v
    } = e;
    if (v !== void 0 && v !== "auto")
      return vt(v);
    if (o.value) {
      const g = t == null ? void 0 : t.maxChildLabelWidthRef.value;
      return g !== void 0 ? vt(g) : void 0;
    }
    if ((t == null ? void 0 : t.props.labelWidth) !== void 0)
      return vt(t.props.labelWidth);
  }), a = P(() => {
    const {
      labelAlign: v
    } = e;
    if (v) return v;
    if (t != null && t.props.labelAlign) return t.props.labelAlign;
  }), l = P(() => {
    var v;
    return [(v = e.labelProps) === null || v === void 0 ? void 0 : v.style, e.labelStyle, {
      width: i.value
    }];
  }), s = P(() => {
    const {
      showRequireMark: v
    } = e;
    return v !== void 0 ? v : t == null ? void 0 : t.props.showRequireMark;
  }), d = P(() => {
    const {
      requireMarkPlacement: v
    } = e;
    return v !== void 0 ? v : (t == null ? void 0 : t.props.requireMarkPlacement) || "right";
  }), u = _(!1), c = _(!1), h = P(() => {
    const {
      validationStatus: v
    } = e;
    if (v !== void 0) return v;
    if (u.value) return "error";
    if (c.value) return "warning";
  }), p = P(() => {
    const {
      showFeedback: v
    } = e;
    return v !== void 0 ? v : (t == null ? void 0 : t.props.showFeedback) !== void 0 ? t.props.showFeedback : !0;
  }), m = P(() => {
    const {
      showLabel: v
    } = e;
    return v !== void 0 ? v : (t == null ? void 0 : t.props.showLabel) !== void 0 ? t.props.showLabel : !0;
  });
  return {
    validationErrored: u,
    validationWarned: c,
    mergedLabelStyle: l,
    mergedLabelPlacement: r,
    mergedLabelAlign: a,
    mergedShowRequireMark: s,
    mergedRequireMarkPlacement: d,
    mergedValidationStatus: h,
    mergedShowFeedback: p,
    mergedShowLabel: m,
    isAutoLabelWidth: o
  };
}
function MS(e) {
  const t = pe(fo, null), r = P(() => {
    const {
      rulePath: l
    } = e;
    if (l !== void 0) return l;
    const {
      path: s
    } = e;
    if (s !== void 0) return s;
  }), o = P(() => {
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
        const c = to(d, u);
        c !== void 0 && (Array.isArray(c) ? l.push(...c) : l.push(c));
      }
    }
    return l;
  }), i = P(() => o.value.some((l) => l.required)), a = P(() => i.value || e.required);
  return {
    mergedRules: o,
    mergedRequired: a
  };
}
var ad = function(e, t, r, o) {
  function i(a) {
    return a instanceof r ? a : new r(function(l) {
      l(a);
    });
  }
  return new (r || (r = Promise))(function(a, l) {
    function s(c) {
      try {
        u(o.next(c));
      } catch (h) {
        l(h);
      }
    }
    function d(c) {
      try {
        u(o.throw(c));
      } catch (h) {
        l(h);
      }
    }
    function u(c) {
      c.done ? a(c.value) : i(c.value).then(s, d);
    }
    u((o = o.apply(e, t || [])).next());
  });
};
const IS = Object.assign(Object.assign({}, ve.props), {
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
function ld(e, t) {
  return (...r) => {
    try {
      const o = e(...r);
      return !t && (typeof o == "boolean" || o instanceof Error || Array.isArray(o)) || o != null && o.then ? o : (o === void 0 || kt("form-item/validate", `You return a ${typeof o} typed value in the validator method, which is not recommended. Please use ${t ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`), !0);
    } catch (o) {
      kt("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(o);
      return;
    }
  };
}
const _S = ee({
  name: "FormItem",
  props: IS,
  setup(e) {
    ph(Mc, "formItems", oe(e, "path"));
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = ze(e), o = pe(fo, null), i = TS(e), a = OS(e), {
      validationErrored: l,
      validationWarned: s
    } = a, {
      mergedRequired: d,
      mergedRules: u
    } = MS(e), {
      mergedSize: c
    } = i, {
      mergedLabelPlacement: h,
      mergedLabelAlign: p,
      mergedRequireMarkPlacement: m
    } = a, v = _([]), g = _(sn()), x = o ? oe(o.props, "disabled") : _(!1), b = ve("Form", "-form-item", DS, Oc, e, t);
    Le(oe(e, "path"), () => {
      e.ignorePathChange || y();
    });
    function y() {
      v.value = [], l.value = !1, s.value = !1, e.feedback && (g.value = sn());
    }
    const B = (...A) => ad(this, [...A], void 0, function* ($ = null, L = () => !0, I = {
      suppressWarning: !0
    }) {
      const {
        path: V
      } = e;
      I ? I.first || (I.first = e.first) : I = {};
      const {
        value: te
      } = u, X = o ? to(o.props.model, V || "") : void 0, q = {}, H = {}, G = ($ ? te.filter((me) => Array.isArray(me.trigger) ? me.trigger.includes($) : me.trigger === $) : te).filter(L).map((me, Re) => {
        const Pe = Object.assign({}, me);
        if (Pe.validator && (Pe.validator = ld(Pe.validator, !1)), Pe.asyncValidator && (Pe.asyncValidator = ld(Pe.asyncValidator, !0)), Pe.renderMessage) {
          const nt = `__renderMessage__${Re}`;
          H[nt] = Pe.message, Pe.message = nt, q[nt] = Pe.renderMessage;
        }
        return Pe;
      }), Y = G.filter((me) => me.level !== "warning"), ie = G.filter((me) => me.level === "warning"), le = {
        valid: !0,
        errors: void 0,
        warnings: void 0
      };
      if (!G.length) return le;
      const fe = V ?? "__n_no_path__", Se = new yr({
        [fe]: Y
      }), U = new yr({
        [fe]: ie
      }), {
        validateMessages: de
      } = (o == null ? void 0 : o.props) || {};
      de && (Se.messages(de), U.messages(de));
      const Fe = (me) => {
        v.value = me.map((Re) => {
          const Pe = (Re == null ? void 0 : Re.message) || "";
          return {
            key: Pe,
            render: () => Pe.startsWith("__renderMessage__") ? q[Pe]() : Pe
          };
        }), me.forEach((Re) => {
          var Pe;
          !((Pe = Re.message) === null || Pe === void 0) && Pe.startsWith("__renderMessage__") && (Re.message = H[Re.message]);
        });
      };
      if (Y.length) {
        const me = yield new Promise((Re) => {
          Se.validate({
            [fe]: X
          }, I, Re);
        });
        me != null && me.length && (le.valid = !1, le.errors = me, Fe(me));
      }
      if (ie.length && !le.errors) {
        const me = yield new Promise((Re) => {
          U.validate({
            [fe]: X
          }, I, Re);
        });
        me != null && me.length && (Fe(me), le.warnings = me);
      }
      return !le.errors && !le.warnings ? y() : (l.value = !!le.errors, s.value = !!le.warnings), le;
    });
    function w() {
      B("blur");
    }
    function S() {
      B("change");
    }
    function F() {
      B("focus");
    }
    function C() {
      B("input");
    }
    function z(A, $) {
      return ad(this, void 0, void 0, function* () {
        let L, I, V, te;
        return typeof A == "string" ? (L = A, I = $) : A !== null && typeof A == "object" && (L = A.trigger, I = A.callback, V = A.shouldRuleBeApplied, te = A.options), yield new Promise((X, q) => {
          B(L, V, te).then(({
            valid: H,
            errors: G,
            warnings: Y
          }) => {
            H ? (I && I(void 0, {
              warnings: Y
            }), X({
              warnings: Y
            })) : (I && I(G, {
              warnings: Y
            }), q(G));
          });
        });
      });
    }
    $e(na, {
      path: oe(e, "path"),
      disabled: x,
      mergedSize: i.mergedSize,
      mergedValidationStatus: a.mergedValidationStatus,
      restoreValidation: y,
      handleContentBlur: w,
      handleContentChange: S,
      handleContentFocus: F,
      handleContentInput: C
    });
    const E = {
      validate: z,
      restoreValidation: y,
      internalValidate: B
    }, D = _(null);
    Ft(() => {
      if (!a.isAutoLabelWidth.value) return;
      const A = D.value;
      if (A !== null) {
        const $ = A.style.whiteSpace;
        A.style.whiteSpace = "nowrap", A.style.width = "", o == null || o.deriveMaxChildLabelWidth(Number(getComputedStyle(A).width.slice(0, -2))), A.style.whiteSpace = $;
      }
    });
    const K = P(() => {
      var A;
      const {
        value: $
      } = c, {
        value: L
      } = h, I = L === "top" ? "vertical" : "horizontal", {
        common: {
          cubicBezierEaseInOut: V
        },
        self: {
          labelTextColor: te,
          asteriskColor: X,
          lineHeight: q,
          feedbackTextColor: H,
          feedbackTextColorWarning: G,
          feedbackTextColorError: Y,
          feedbackPadding: ie,
          labelFontWeight: le,
          [J("labelHeight", $)]: fe,
          [J("blankHeight", $)]: Se,
          [J("feedbackFontSize", $)]: U,
          [J("feedbackHeight", $)]: de,
          [J("labelPadding", I)]: Fe,
          [J("labelTextAlign", I)]: me,
          [J(J("labelFontSize", L), $)]: Re
        }
      } = b.value;
      let Pe = (A = p.value) !== null && A !== void 0 ? A : me;
      return L === "top" && (Pe = Pe === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": V,
        "--n-line-height": q,
        "--n-blank-height": Se,
        "--n-label-font-size": Re,
        "--n-label-text-align": Pe,
        "--n-label-height": fe,
        "--n-label-padding": Fe,
        "--n-label-font-weight": le,
        "--n-asterisk-color": X,
        "--n-label-text-color": te,
        "--n-feedback-padding": ie,
        "--n-feedback-font-size": U,
        "--n-feedback-height": de,
        "--n-feedback-text-color": H,
        "--n-feedback-text-color-warning": G,
        "--n-feedback-text-color-error": Y
      };
    }), O = r ? Ue("form-item", P(() => {
      var A;
      return `${c.value[0]}${h.value[0]}${((A = p.value) === null || A === void 0 ? void 0 : A[0]) || ""}`;
    }), K, e) : void 0, n = P(() => h.value === "left" && m.value === "left" && p.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: D,
      mergedClsPrefix: t,
      mergedRequired: d,
      feedbackId: g,
      renderExplains: v,
      reverseColSpace: n
    }, a), i), E), {
      cssVars: r ? void 0 : K,
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
        labelProps: h
      } = this;
      return f("label", Object.assign({}, h, {
        class: [h == null ? void 0 : h.class, `${t}-form-item-label`, `${t}-form-item-label--${i}-mark`, this.reverseColSpace && `${t}-form-item-label--reverse-columns-space`],
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
    }, f(zt, {
      name: "fade-down-transition",
      mode: "out-in"
    }, {
      default: () => {
        const {
          mergedValidationStatus: d
        } = this;
        return tt(e.feedback, (u) => {
          var c;
          const {
            feedback: h
          } = this, p = u || h ? f("div", {
            key: "__feedback__",
            class: `${t}-form-item-feedback__line`
          }, u || h) : this.renderExplains.length ? (c = this.renderExplains) === null || c === void 0 ? void 0 : c.map(({
            key: m,
            render: v
          }) => f("div", {
            key: m,
            class: `${t}-form-item-feedback__line`
          }, v())) : null;
          return p ? d === "warning" ? f("div", {
            key: "controlled-warning",
            class: `${t}-form-item-feedback ${t}-form-item-feedback--warning`
          }, p) : d === "error" ? f("div", {
            key: "controlled-error",
            class: `${t}-form-item-feedback ${t}-form-item-feedback--error`
          }, p) : d === "success" ? f("div", {
            key: "controlled-success",
            class: `${t}-form-item-feedback ${t}-form-item-feedback--success`
          }, p) : f("div", {
            key: "controlled-default",
            class: `${t}-form-item-feedback`
          }, p) : null;
        });
      }
    })) : null);
  }
});
function LS(e) {
  const {
    primaryColor: t,
    baseColor: r
  } = e;
  return {
    color: t,
    iconColor: r
  };
}
const NS = {
  name: "IconWrapper",
  common: qe,
  self: LS
}, HS = R("icon-wrapper", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`), jS = Object.assign(Object.assign({}, ve.props), {
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
}), WS = ee({
  name: "IconWrapper",
  props: jS,
  setup(e, {
    slots: t
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = ze(e), i = ve("IconWrapper", "-icon-wrapper", HS, NS, e, r), a = P(() => {
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
    }), l = o ? Ue("icon-wrapper", void 0, a, e) : void 0;
    return () => {
      const s = vt(e.size);
      return l == null || l.onRender(), f("div", {
        class: [`${r.value}-icon-wrapper`, l == null ? void 0 : l.themeClass.value],
        style: [a == null ? void 0 : a.value, {
          height: s,
          width: s,
          borderRadius: vt(e.borderRadius),
          backgroundColor: e.color,
          color: e.iconColor
        }]
      }, t);
    };
  }
}), Lc = "n-popconfirm", Nc = {
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
}, sd = Rn(Nc), VS = ee({
  name: "NPopconfirmPanel",
  props: Nc,
  setup(e) {
    const {
      localeRef: t
    } = Kn("Popconfirm"), {
      inlineThemeDisabled: r
    } = ze(), {
      mergedClsPrefixRef: o,
      mergedThemeRef: i,
      props: a
    } = pe(Lc), l = P(() => {
      const {
        common: {
          cubicBezierEaseInOut: d
        },
        self: {
          fontSize: u,
          iconSize: c,
          iconColor: h
        }
      } = i.value;
      return {
        "--n-bezier": d,
        "--n-font-size": u,
        "--n-icon-size": c,
        "--n-icon-color": h
      };
    }), s = r ? Ue("popconfirm-panel", void 0, l, a) : void 0;
    return Object.assign(Object.assign({}, Kn("Popconfirm")), {
      mergedClsPrefix: o,
      cssVars: r ? void 0 : l,
      localizedPositiveText: P(() => e.positiveText || t.value.positiveText),
      localizedNegativeText: P(() => e.negativeText || t.value.negativeText),
      positiveButtonProps: oe(a, "positiveButtonProps"),
      negativeButtonProps: oe(a, "negativeButtonProps"),
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
    } = this, i = Lt(o.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && f(qn, Object.assign({
      size: "small",
      onClick: this.handleNegativeClick
    }, this.negativeButtonProps), {
      default: () => this.localizedNegativeText
    }), this.positiveText !== null && f(qn, Object.assign({
      size: "small",
      type: "primary",
      onClick: this.handlePositiveClick
    }, this.positiveButtonProps), {
      default: () => this.localizedPositiveText
    })]);
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      class: [`${t}-popconfirm__panel`, this.themeClass],
      style: this.cssVars
    }, tt(o.default, (a) => r || a ? f("div", {
      class: `${t}-popconfirm__body`
    }, r ? f("div", {
      class: `${t}-popconfirm__icon`
    }, Lt(o.icon, () => [f(ft, {
      clsPrefix: t
    }, {
      default: () => f(ai, null)
    })])) : null, a) : null), i ? f("div", {
      class: [`${t}-popconfirm__action`]
    }, i) : null);
  }
}), KS = R("popconfirm", [M("body", `
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
 `, [T("&:not(:first-child)", "margin-top: 8px"), R("button", [T("&:not(:last-child)", "margin-right: 8px;")])])]), US = Object.assign(Object.assign(Object.assign({}, ve.props), Un), {
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
}), qS = ee({
  name: "Popconfirm",
  props: US,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = ze(), r = ve("Popconfirm", "-popconfirm", KS, Gw, e, t), o = _(null);
    function i(s) {
      var d;
      if (!(!((d = o.value) === null || d === void 0) && d.getMergedShow())) return;
      const {
        onPositiveClick: u,
        "onUpdate:show": c
      } = e;
      Promise.resolve(u ? u(s) : !0).then((h) => {
        var p;
        h !== !1 && ((p = o.value) === null || p === void 0 || p.setShow(!1), c && ne(c, !1));
      });
    }
    function a(s) {
      var d;
      if (!(!((d = o.value) === null || d === void 0) && d.getMergedShow())) return;
      const {
        onNegativeClick: u,
        "onUpdate:show": c
      } = e;
      Promise.resolve(u ? u(s) : !0).then((h) => {
        var p;
        h !== !1 && ((p = o.value) === null || p === void 0 || p.setShow(!1), c && ne(c, !1));
      });
    }
    return $e(Lc, {
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
    return f(or, Yn(t, sd, {
      theme: r.peers.Popover,
      themeOverrides: r.peerOverrides.Popover,
      internalExtraClass: ["popconfirm"],
      ref: "popoverInstRef"
    }), {
      trigger: e.activator || e.trigger,
      default: () => {
        const o = gn(t, sd);
        return f(VS, Object.assign(Object.assign({}, o), {
          onPositiveClick: this.handlePositiveClick,
          onNegativeClick: this.handleNegativeClick
        }), e);
      }
    });
  }
}), GS = T([T("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), R("spin-container", `
 position: relative;
 `, [R("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [li()])]), R("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), R("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [N("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]), R("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), R("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [N("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]), XS = {
  small: 20,
  medium: 18,
  large: 16
}, YS = Object.assign(Object.assign({}, ve.props), {
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
}), Hc = ee({
  name: "Spin",
  props: YS,
  setup(e) {
    process.env.NODE_ENV !== "production" && Qe(() => {
      e.spinning !== void 0 && it("spin", "`spinning` is deprecated, please use `show` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = ze(e), o = ve("Spin", "-spin", GS, Yw, e, t), i = P(() => {
      const {
        size: d
      } = e, {
        common: {
          cubicBezierEaseInOut: u
        },
        self: c
      } = o.value, {
        opacitySpinning: h,
        color: p,
        textColor: m
      } = c, v = typeof d == "number" ? yt(d) : c[J("size", d)];
      return {
        "--n-bezier": u,
        "--n-opacity-spinning": h,
        "--n-size": v,
        "--n-color": p,
        "--n-text-color": m
      };
    }), a = r ? Ue("spin", P(() => {
      const {
        size: d
      } = e;
      return typeof d == "number" ? String(d) : d[0];
    }), i, e) : void 0, l = Pa(e, ["spinning", "show"]), s = _(!1);
    return Qe((d) => {
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
      mergedStrokeWidth: P(() => {
        const {
          strokeWidth: d
        } = e;
        if (d !== void 0) return d;
        const {
          size: u
        } = e;
        return XS[typeof u == "number" ? "medium" : u];
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
    }, f(tr, {
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
    }, r), f(zt, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? s : null
    })) : s;
  }
}), ZS = /* @__PURE__ */ Object.assign({
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
    return (r, o) => (gt(), $t(Ce(Vu), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: Ce(m0),
      "date-locale": Ce(zv),
      "theme-overrides": t
    }, {
      default: At(() => [
        pr(Ce(Ec), null, {
          default: At(() => [
            pr(Ce(kc), null, {
              default: At(() => [
                jn(r.$slots, "default")
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
function JS(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var jc = { exports: {} };
(function(e) {
  function t() {
    var r = 0, o = 1, i = 2, a = 3, l = 4, s = 5, d = 6, u = 7, c = 8, h = 9, p = 10, m = 11, v = 12, g = 13, x = 14, b = 15, y = 16, B = 17, w = 0, S = 1, F = 2, C = 3, z = 4;
    function E(n, A) {
      return 55296 <= n.charCodeAt(A) && n.charCodeAt(A) <= 56319 && 56320 <= n.charCodeAt(A + 1) && n.charCodeAt(A + 1) <= 57343;
    }
    function D(n, A) {
      A === void 0 && (A = 0);
      var $ = n.charCodeAt(A);
      if (55296 <= $ && $ <= 56319 && A < n.length - 1) {
        var L = $, I = n.charCodeAt(A + 1);
        return 56320 <= I && I <= 57343 ? (L - 55296) * 1024 + (I - 56320) + 65536 : L;
      }
      if (56320 <= $ && $ <= 57343 && A >= 1) {
        var L = n.charCodeAt(A - 1), I = $;
        return 55296 <= L && L <= 56319 ? (L - 55296) * 1024 + (I - 56320) + 65536 : I;
      }
      return $;
    }
    function K(n, A, $) {
      var L = [n].concat(A).concat([$]), I = L[L.length - 2], V = $, te = L.lastIndexOf(x);
      if (te > 1 && L.slice(1, te).every(function(H) {
        return H == a;
      }) && [a, g, B].indexOf(n) == -1)
        return F;
      var X = L.lastIndexOf(l);
      if (X > 0 && L.slice(1, X).every(function(H) {
        return H == l;
      }) && [v, l].indexOf(I) == -1)
        return L.filter(function(H) {
          return H == l;
        }).length % 2 == 1 ? C : z;
      if (I == r && V == o)
        return w;
      if (I == i || I == r || I == o)
        return V == x && A.every(function(H) {
          return H == a;
        }) ? F : S;
      if (V == i || V == r || V == o)
        return S;
      if (I == d && (V == d || V == u || V == h || V == p))
        return w;
      if ((I == h || I == u) && (V == u || V == c))
        return w;
      if ((I == p || I == c) && V == c)
        return w;
      if (V == a || V == b)
        return w;
      if (V == s)
        return w;
      if (I == v)
        return w;
      var q = L.indexOf(a) != -1 ? L.lastIndexOf(a) - 1 : L.length - 2;
      return [g, B].indexOf(L[q]) != -1 && L.slice(q + 1, -1).every(function(H) {
        return H == a;
      }) && V == x || I == b && [y, B].indexOf(V) != -1 ? w : A.indexOf(l) != -1 ? F : I == l && V == l ? w : S;
    }
    this.nextBreak = function(n, A) {
      if (A === void 0 && (A = 0), A < 0)
        return 0;
      if (A >= n.length - 1)
        return n.length;
      for (var $ = O(D(n, A)), L = [], I = A + 1; I < n.length; I++)
        if (!E(n, I - 1)) {
          var V = O(D(n, I));
          if (K($, L, V))
            return I;
          L.push(V);
        }
      return n.length;
    }, this.splitGraphemes = function(n) {
      for (var A = [], $ = 0, L; (L = this.nextBreak(n, $)) < n.length; )
        A.push(n.slice($, L)), $ = L;
      return $ < n.length && A.push(n.slice($)), A;
    }, this.iterateGraphemes = function(n) {
      var A = 0, $ = {
        next: (function() {
          var L, I;
          return (I = this.nextBreak(n, A)) < n.length ? (L = n.slice(A, I), A = I, { value: L, done: !1 }) : A < n.length ? (L = n.slice(A), A = n.length, { value: L, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && ($[Symbol.iterator] = function() {
        return $;
      }), $;
    }, this.countGraphemes = function(n) {
      for (var A = 0, $ = 0, L; (L = this.nextBreak(n, $)) < n.length; )
        $ = L, A++;
      return $ < n.length && A++, A;
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
      n == 73030 ? v : n == 13 ? r : n == 10 ? o : 0 <= n && n <= 9 || // Cc  [10] <control-0000>..<control-0009>
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
      n == 55176 ? h : 44033 <= n && n <= 44059 || // Lo  [27] HANGUL SYLLABLE GAG..HANGUL SYLLABLE GAH
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
      55177 <= n && n <= 55203 ? p : n == 9757 || // So       WHITE UP POINTING INDEX
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
      129489 <= n && n <= 129501 ? g : 127995 <= n && n <= 127999 ? x : n == 8205 ? b : n == 9792 || // So       FEMALE SIGN
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
})(jc);
var QS = jc.exports;
const e2 = /* @__PURE__ */ JS(QS), t2 = new e2(), n2 = (e = "") => t2.countGraphemes(e);
function r2(e) {
  return e && typeof e == "object" && typeof e.then == "function";
}
const Wc = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ gr({
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
  emits: /* @__PURE__ */ gr(["blur", "input"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = To(e, "modelValue"), o = t;
    function i() {
      let s = r.value;
      if (e.trim) {
        const d = s.trim();
        r.value = d, s = d;
      }
      return s;
    }
    function a() {
      const s = i();
      o("blur", { value: s });
    }
    function l(s) {
      r.value = s;
      let d = s;
      e.trim && (d = d.trim()), o("input", { value: d });
    }
    return (s, d) => (gt(), $t(Ce(ha), {
      "input-props": { autocomplete: "off" },
      type: e.type,
      size: e.size,
      "show-password-on": e.showPassword ? "click" : void 0,
      value: r.value,
      maxlength: e.maxlength,
      "show-count": e.showCount,
      "count-graphemes": e.maxlength != null && e.maxlength > 0 || e.showCount ? Ce(n2) : void 0,
      placeholder: e.placeholder,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      onInput: l,
      onBlur: a
    }, Jo({ _: 2 }, [
      e.prefixIcon ? {
        name: "prefix",
        fn: At(() => [
          pr(Ce(cl), xf(bf(e.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly"]));
  }
});
var Nr = void 0, hr = {}, wa;
hr.throttle = wa = function(e, t, r, o) {
  var i, a = 0;
  typeof t != "boolean" && (o = r, r = t, t = Nr);
  function l() {
    var s = this, d = +/* @__PURE__ */ new Date() - a, u = arguments;
    function c() {
      a = +/* @__PURE__ */ new Date(), r.apply(s, u);
    }
    function h() {
      i = Nr;
    }
    o && !i && c(), i && clearTimeout(i), o === Nr && d > e ? c() : t !== !0 && (i = setTimeout(o ? h : c, o === Nr ? e - d : e));
  }
  return hr.guid && (l.guid = r.guid = r.guid || hr.guid++), l;
};
hr.debounce = function(e, t, r) {
  return r === Nr ? wa(e, t, !1) : wa(e, r, t !== !1);
};
const vl = function(e, t, r) {
  return hr.debounce(t || 300, r ?? !0, e);
}, x2 = function(e, t, r) {
  return hr.throttle(t || 300, r ?? !1, e);
}, o2 = /* @__PURE__ */ Object.assign({
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
  setup(e, { expose: t, emit: r }) {
    const o = function() {
      const h = {};
      return e.model.forEach((p) => {
        p.slot || (h[p.field] = p.value);
      }), _(h);
    }();
    function i() {
      const h = {};
      return e.model.forEach((p) => {
        p.slot && (h[p.field] = Sf(p.value));
      }), { ...o.value, ...h };
    }
    const a = r, l = gl("form"), s = vl(function() {
      document.activeElement && document.activeElement.blur(), l.value.validate((h) => {
        a("submit", { formData: i(), valid: !h || h.length === 0, errors: h });
      }).catch(() => null);
    }), d = gl("formItem");
    function u(h = "") {
      if (!h) {
        l.value.restoreValidation();
        return;
      }
      const p = d.value.find((m) => m.path === h);
      p && p.restoreValidation();
    }
    function c(h) {
      h && e.rules && e.rules[h] && (e.rules[h].trigger && e.rules[h].trigger.includes("input") || u(h));
    }
    return t({ restoreValidation: u }), (h, p) => (gt(), $t(Ce(eS), {
      ref: "form",
      "show-label": e.showLabel,
      "label-placement": e.labelPlacement,
      "label-width": "auto",
      "label-align": e.labelPlacement === "left" ? "right" : "left",
      model: Ce(o),
      rules: e.rules,
      onSubmit: Cf(Ce(s), ["prevent"])
    }, {
      default: At(() => [
        (gt(!0), qr(ht, null, yf(e.model, (m) => (gt(), $t(Ce(_S), {
          ref_for: !0,
          ref: "formItem",
          key: m.field,
          label: m.label,
          path: m.field,
          "feedback-class": e.feedbackSizeClass ? `p-form-item-feedback-${e.feedbackSizeClass}` : "",
          first: !0
        }, {
          default: At(() => [
            !m.slot && m.type === "input" ? (gt(), $t(wf(Ce(Wc)), Yt({
              key: 0,
              modelValue: Ce(o)[m.field],
              "onUpdate:modelValue": (v) => Ce(o)[m.field] = v,
              ref_for: !0
            }, { disabled: e.disabled, readonly: e.readonly, ...m.props }, {
              onInput: (v) => c(m.field)
            }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : jn(h.$slots, m.field, { key: 1 })
          ]),
          _: 2
        }, 1032, ["label", "path", "feedback-class"]))), 128)),
        jn(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["show-label", "label-placement", "label-align", "model", "rules", "onSubmit"]));
  }
}), i2 = /* @__PURE__ */ Object.assign({
  name: "PSelect",
  inheritAttrs: !1
}, {
  __name: "select",
  props: /* @__PURE__ */ gr({
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
  emits: /* @__PURE__ */ gr(["update", "change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = fd(), o = t, i = To(e, "modelValue"), a = vl(function(l) {
      l !== i.value && mt(() => {
        o("change", l);
      }), i.value = l, o("update", l);
    }, 300);
    return (l, s) => (gt(), $t(Ce(qu), {
      class: hd(`${Ce(r).class ? Ce(r).class : ""}`),
      style: Ui(e.width ? `width:${e.width}` : ""),
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
      "onUpdate:value": Ce(a)
    }, {
      empty: At(() => [
        pr(Ce(Cr), {
          size: "small",
          description: e.emptyDescription
        }, null, 8, ["description"])
      ]),
      _: 1
    }, 8, ["class", "style", "options", "value", "size", "placeholder", "disabled", "value-field", "label-field", "clearable", "show-checkmark", "onUpdate:value"]));
  }
}), ro = /* @__PURE__ */ Object.assign({
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
    const r = fd(), o = vd(), i = t, a = vl(function() {
      i("click");
    }, 300);
    return (l, s) => (gt(), $t(Ce(qn), {
      class: hd([
        Ce(r).class ? Ce(r).class : "",
        e.size === "xs" ? "p-button-xs" : "",
        e.type === "default" && e.defaultType ? `p-button-default-${e.defaultType}` : ""
      ]),
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
      disabled: e.disabled || e.waiting,
      "icon-placement": "left",
      onClick: Ce(a)
    }, Jo({
      default: At(() => [
        !e.loading || e.loading && !e.loadingWithoutText ? (gt(), $t(Ce(o).default, { key: 0 })) : pn("", !0)
      ]),
      _: 2
    }, [
      l.$slots.icon ? {
        name: "icon",
        fn: At(() => [
          pr(Ce(o).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "attr-type", "block", "size", "type", "loading", "ghost", "secondary", "text", "disabled", "onClick"]));
  }
}), a2 = /* @__PURE__ */ ee((e) => {
  const t = {
    bordered: !1,
    bottomBordered: !1,
    singleColumn: !1,
    singleLine: !0,
    striped: !1,
    pagination: !1,
    size: "small"
  };
  return () => f(qy, {
    ...t,
    ...e
  }, {
    empty: () => f(Cr, {
      size: "medium",
      description: "暂无数据"
    })
  });
}, {
  name: "PDataTable",
  inheritAttrs: !0
}), l2 = {
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
    return (o, i) => (gt(), qr(ht, null, [
      e.negativeText ? (gt(), $t(Ce(ro), {
        key: 0,
        size: "xs",
        type: "default",
        "default-type": e.type,
        onClick: t
      }, {
        default: At(() => [
          an(Gr(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type"])) : pn("", !0),
      e.positiveText ? (gt(), $t(Ce(ro), {
        key: 1,
        size: "xs",
        type: e.type,
        onClick: r
      }, {
        default: At(() => [
          an(Gr(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type"])) : pn("", !0)
    ], 64));
  }
}, s2 = /* @__PURE__ */ ee((e, {
  emit: t
}) => {
  const r = vd(), o = _(), i = () => {
    o.value.setShow(!1);
  };
  return () => f(qS, {
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
    action: () => f(l2, {
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
}), d2 = /* @__PURE__ */ Object.assign({
  name: "PPagination",
  inheritAttrs: !1
}, {
  __name: "pagination",
  props: /* @__PURE__ */ gr({
    total: { type: Number },
    pageSlot: { type: Number, default: 7 },
    showQuickJumper: { type: Boolean, default: !0 },
    showSizePicker: { type: Boolean, default: !0 },
    pageSizes: { type: Array, default: () => [10, 20, 30, 40] },
    simple: { type: Boolean, default: !1 }
  }, {
    page: { type: Number, default: 1 },
    pageModifiers: {},
    pageSize: { type: Number, default: 10 },
    pageSizeModifiers: {}
  }),
  emits: /* @__PURE__ */ gr(["changePage", "changePageSize"], ["update:page", "update:pageSize"]),
  setup(e, { emit: t }) {
    const r = To(e, "page"), o = To(e, "pageSize"), i = t;
    function a(s) {
      r.value = s, i("changePage", s);
    }
    function l(s) {
      o.value = s, i("changePageSize", s);
    }
    return (s, d) => (gt(), $t(Ce(Yu), {
      class: "p-pagination",
      size: "medium",
      "display-order": ["pages", "size-picker", "quick-jumper"],
      simple: e.simple,
      "item-count": e.total,
      page: r.value,
      "page-size": o.value,
      "page-slot": e.pageSlot,
      "show-quick-jumper": e.showQuickJumper,
      "show-size-picker": e.showSizePicker,
      "page-sizes": e.pageSizes,
      "show-quick-jump-dropdown": !1,
      "on-update:page": a,
      "on-update:page-size": l
    }, Jo({ _: 2 }, [
      e.simple ? void 0 : {
        name: "prefix",
        fn: At(({ itemCount: u }) => [
          an("共 " + Gr(u) + " 条记录", 1)
        ]),
        key: "0"
      },
      e.showQuickJumper && !e.simple ? {
        name: "suffix",
        fn: At(() => [
          d[0] || (d[0] = an("页"))
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["simple", "item-count", "page", "page-size", "page-slot", "show-quick-jumper", "show-size-picker", "page-sizes"]));
  }
});
/*!
  * vue-promised v2.1.0
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
function u2(e, t = 200) {
  const r = _(!1), o = _(!1), i = P(() => !r.value && !o.value), a = _(!1), l = _(), s = _();
  let d;
  return Le(() => Ce(e), (u) => {
    if (r.value = !1, o.value = !1, l.value = null, !u) {
      s.value = null, d && clearTimeout(d), d = null;
      return;
    }
    Ce(t) > 0 ? (a.value = !1, d && clearTimeout(d), d = setTimeout(() => {
      a.value = !0;
    }, Number(Ce(t)))) : a.value = !0, u.then((c) => {
      u === Ce(e) && (s.value = c, o.value = !0);
    }).catch((c) => {
      u === Ce(e) && (l.value = c, r.value = !0);
    });
  }, { immediate: !0 }), { isPending: i, isRejected: r, isResolved: o, isDelayElapsed: a, error: l, data: s };
}
const Vc = ({ delay: e = 300, minPendingTime: t = 500, loadingValue: r = !1 } = {}) => {
  let o = 0, i = null;
  const a = () => {
    i && (clearTimeout(i), i = null);
  }, l = _(!!r), s = _(!!r);
  let d = null;
  const u = (c) => (l.value = c, new Promise((h) => {
    c === !0 ? h() : d = h;
  }));
  return Le(
    l,
    (c) => {
      if (o === 0)
        o = (/* @__PURE__ */ new Date()).getTime(), a(), i = setTimeout(() => {
          s.value = c;
        }, e);
      else {
        if (a(), s.value !== c) {
          const p = (/* @__PURE__ */ new Date()).getTime() - o - e, m = p >= t ? 0 : t - p;
          i = setTimeout(() => {
            s.value = c, d && (d(), d = null);
          }, m);
        } else
          d && (d(), d = null);
        o = 0;
      }
    },
    { immediate: !!r, deep: !1 }
  ), pd(() => {
    d = null, a();
  }), { loading: s, waiting: l, setLoadingStatus: u };
}, c2 = {
  key: 1,
  class: "p-promised-loading"
}, f2 = /* @__PURE__ */ Object.assign({
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
    contentStyle: { type: String, default: "position:relative; min-height:72px;" }
    //  内容的最小高度，避免 loading/empty 状态下高度不确定导致抖动
  },
  setup(e) {
    const t = P(() => ["small", "medium", "large"].includes(e.loadingSize) ? e.loadingSize : "medium"), r = P(() => {
      const g = { position: "absolute", left: "50%", zIndex: 2 };
      return e.loadingTop == null ? g.top = "50%" : g.top = `${e.loadingTop}px`, t.value === "small" ? (g.marginLeft = "-14px", e.loadingTop == null && (g.marginTop = "-14px")) : t.value === "medium" ? (g.marginLeft = "-17px", e.loadingTop == null && (g.marginTop = "-17px")) : t.value === "large" && (g.marginLeft = "-20px", e.loadingTop == null && (g.marginTop = "-20px")), g;
    }), o = oe(() => e.promise), { data: i, error: a, isPending: l, isDelayElapsed: s, isResolved: d, isRejected: u } = u2(o, 0), { loading: c, waiting: h } = Vc();
    Le(
      () => l.value && s.value,
      (g) => {
        h.value = g;
      },
      { immediate: !1 }
    );
    const p = _(!1);
    Le(u, (g) => {
      g === !0 && p.value === !1 && (p.value = g);
    }), Le(d, (g) => {
      g === !0 && p.value === !0 && (p.value = !1);
    });
    function m(g) {
      let x = !0;
      if (typeof g == "object") {
        for (const b in g)
          if (typeof g[b] == "object" ? x = m(g[b]) : x = g[b] === "" || g[b] === null || g[b] === void 0, x === !1)
            break;
        return x;
      } else
        return g === "" || g === null || g === void 0;
    }
    function v(g) {
      return g == null || g === "" ? !0 : m(e.dataField ? g[e.dataField] : g);
    }
    return (g, x) => (gt(), qr("div", {
      style: Ui(e.contentStyle)
    }, [
      !Ce(c) && !Ce(l) && !Ce(a) && !v(Ce(i)) || Ce(l) && Ce(h) && !p.value && !Ce(a) && !v(Ce(i)) ? jn(g.$slots, "default", {
        key: 0,
        data: Ce(i)
      }) : pn("", !0),
      Ce(c) ? (gt(), qr("div", c2, [
        pr(Ce(Hc), {
          size: t.value,
          style: Ui(r.value)
        }, null, 8, ["size", "style"]),
        x[0] || (x[0] = Bf("div", { class: "p-promised-loading-mask" }, null, -1))
      ])) : pn("", !0),
      !Ce(c) && !Ce(l) && !Ce(a) && v(Ce(i)) ? (gt(), $t(Ce(Cr), {
        key: 2,
        description: e.emptyDesc,
        size: "medium"
      }, Jo({ _: 2 }, [
        g.$slots.emptyExtra ? {
          name: "extra",
          fn: At(() => [
            jn(g.$slots, "emptyExtra")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["description"])) : pn("", !0),
      !Ce(c) && !Ce(l) && Ce(a) ? (gt(), $t(Ce(Cr), {
        key: 3,
        description: Ce(a).message || e.errorDefaultDesc,
        size: "medium"
      }, null, 8, ["description"])) : pn("", !0)
    ], 4));
  }
}), h2 = {
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
    const { loading: t, waiting: r, setLoadingStatus: o } = Vc();
    function i(s, d) {
      const u = s({
        done: function() {
          return o(!1).then(() => {
            e.onLoading(!1);
          });
        }
      });
      if (u !== !1)
        if (r2(u)) {
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
    return (s, d) => (gt(), qr(ht, null, [
      e.negativeText ? (gt(), $t(Ce(ro), {
        key: 0,
        size: "small",
        type: "default",
        "default-type": e.type,
        disabled: Ce(t),
        onClick: a
      }, {
        default: At(() => [
          an(Gr(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type", "disabled"])) : pn("", !0),
      e.positiveText ? (gt(), $t(Ce(ro), {
        key: 1,
        size: "small",
        type: e.type,
        loading: Ce(t),
        loadingWithoutText: !1,
        onClick: l
      }, {
        default: At(() => [
          an(Gr(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type", "loading"])) : pn("", !0)
    ], 64));
  }
};
function v2(e) {
  return typeof e == "string" ? function() {
    return f("p", { innerHTML: e });
  } : Array.isArray(e) ? function() {
    return f(
      "div",
      e.map((t) => f("p", { innerHTML: t }))
    );
  } : e;
}
const b2 = () => {
  let e = null, t = null, r = null, o = null;
  const i = bc(), a = (u = {}, c = { width: 430 }, h) => {
    const p = {
      autoFocus: !1,
      blockScroll: !0,
      bordered: !1,
      closable: !0,
      showIcon: !1,
      title: "提示",
      positiveText: "确定",
      negativeText: "取消",
      ...u,
      transformOrigin: "center",
      class: "p-dialog",
      contentClass: "p-dialog-content",
      actionClass: "p-dialog-action"
    };
    return p.closeOnEsc = !1, p.maskClosable = !1, p.iconPlacement = "left", p.titleClass = p.showIcon ? "p-dialog-title" : "p-dialog-title p-dialog-title-without-icon", p.style = "width: " + c.width + "px", h && (p.type = h), (p.positiveText || p.negativeText) && (p.action = function() {
      return f(h2, {
        positiveText: p.positiveText,
        negativeText: p.negativeText,
        type: h,
        onPositiveClick: p.onPositiveClick,
        onNegativeClick: p.onNegativeClick,
        onClose: function() {
          h === "success" && t ? (t.destroy(), t = null) : h === "warning" && r ? (r.destroy(), r = null) : h === "error" && o ? (o.destroy(), o = null) : e && (e.destroy(), e = null);
        },
        onLoading: (m) => {
          let v = null;
          h === "success" && t ? v = t : h === "warning" && r ? v = r : h === "error" && o ? v = o : e && (v = e), v.closable !== !1 && (v.class = m === !0 ? "p-dialog p-dialog-loading" : "p-dialog");
        }
      });
    }), p.content = v2(u.content), i.create(p);
  }, l = (u, c) => {
    u.negativeText == null && (u.negativeText = ""), u.positiveText == null && (u.positiveText = "我知道了"), u.closable == null && (u.closable = !1), u.showIcon == null && (u.showIcon = !0);
    const h = a(u, c, "success");
    return t = h, h;
  }, s = (u, c) => {
    u.negativeText == null && (u.negativeText = ""), u.positiveText == null && (u.positiveText = "我知道了"), u.closable == null && (u.closable = !1), u.showIcon == null && (u.showIcon = !0);
    const h = a(u, c, "warning");
    return r = h, h;
  }, d = (u, c) => {
    u.negativeText == null && (u.negativeText = ""), u.positiveText == null && (u.positiveText = "我知道了"), u.closable == null && (u.closable = !1), u.showIcon == null && (u.showIcon = !0);
    const h = a(u, c, "error");
    return o = h, h;
  };
  return pd(() => {
    e && e.destroy(), t && t.destroy(), r && r.destroy(), o && o.destroy(), e = null, t = null, r = null, o = null;
  }), {
    open: function(u, c) {
      const h = a(u, c);
      return e = h, h;
    },
    success: l,
    warning: s,
    error: d
  };
}, C2 = () => {
  const e = Tc();
  return { open: (r = {}, o = {}) => {
    const i = {
      title: "",
      closable: !0,
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
    !i.title && r.closable == null && (i.closable = !1), i.title && (i.titleClass = "p-modal-title"), !i.title && !i.closable && (i.titleClass = "p-modal-title-hidden"), !i.title && i.closable && (i.titleClass = "p-modal-title-closable"), i.title ? i.contentStyle = "padding: 16px" : !i.title && i.closable ? i.contentStyle = "padding: 0 16px 16px" : !i.title && !i.closable && (i.contentStyle = "padding: 16px");
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
      unLock: function() {
        s.class = "p-modal";
      }
    };
  } };
}, y2 = {
  install: (e, t = {}) => {
    const { prefix: r = "p" } = t;
    e.component(`${r}-practical`, ZS), e.component(`${r}-form`, o2), e.component(`${r}-input`, Wc), e.component(`${r}-select`, i2), e.component(`${r}-button`, ro), e.component(`${r}-data-table`, a2), e.component(`${r}-popconfirm`, s2), e.component(`${r}-pagination`, d2), e.component(`${r}-promised`, f2), e.component(`${r}-icon-wrapper`, WS), e.component(`${r}-icon`, cl), e.component(`${r}-input-group`, I1), e.component(`${r}-input-group-label`, N1), e.component(`${r}-popover`, or), e.component(`${r}-spin`, Hc), e.component(`${r}-collapse`, fC), e.component(`${r}-collapse-item`, pC), e.component(`${r}-dropdown`, hc), e.component(`${r}-tooltip`, ac);
  }
};
export {
  m2 as createDiscreteApi,
  vl as debounce,
  y2 as default,
  x2 as throttle,
  Vc as useDelayLoading,
  b2 as useDialog,
  C2 as useModal
};
