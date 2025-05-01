import { ref as I, readonly as Dn, watch as He, computed as $, getCurrentInstance as mo, onMounted as Ft, onBeforeUnmount as kt, onBeforeMount as or, reactive as bo, inject as ge, onActivated as bd, onDeactivated as Ta, createTextVNode as Ht, Fragment as _e, Comment as Oa, defineComponent as ee, provide as Ee, withDirectives as vn, toRef as oe, h as f, Teleport as li, nextTick as vt, renderSlot as wn, mergeProps as Ot, isVNode as Sf, shallowRef as xd, watchEffect as tt, Transition as jt, TransitionGroup as Bf, vShow as Rr, cloneVNode as Cd, Text as kf, markRaw as kl, onUnmounted as yd, normalizeClass as Ut, createApp as Rf, unref as se, openBlock as ze, createBlock as mt, withCtx as it, createVNode as tn, onScopeDispose as si, mergeModels as En, useModel as io, useTemplateRef as Cr, createSlots as xo, normalizeProps as Ff, guardReactiveProps as Pf, useAttrs as Co, normalizeStyle as an, useSlots as wd, createCommentVNode as wt, createElementBlock as ht, toDisplayString as on, createElementVNode as Kn, resolveDynamicComponent as xr, renderList as Zr, withModifiers as zf, toValue as $f } from "vue";
function Af(e) {
  let t = ".", r = "__", o = "--", i;
  if (e) {
    let v = e.blockPrefix;
    v && (t = v), v = e.elementPrefix, v && (r = v), v = e.modifierPrefix, v && (o = v);
  }
  const a = {
    install(v) {
      i = v.c;
      const m = v.context;
      m.bem = {}, m.bem.b = null, m.bem.els = null;
    }
  };
  function l(v) {
    let m, b;
    return {
      before(g) {
        m = g.bem.b, b = g.bem.els, g.bem.els = null;
      },
      after(g) {
        g.bem.b = m, g.bem.els = b;
      },
      $({ context: g, props: C }) {
        return v = typeof v == "string" ? v : v({ context: g, props: C }), g.bem.b = v, `${(C == null ? void 0 : C.bPrefix) || t}${g.bem.b}`;
      }
    };
  }
  function s(v) {
    let m;
    return {
      before(b) {
        m = b.bem.els;
      },
      after(b) {
        b.bem.els = m;
      },
      $({ context: b, props: g }) {
        return v = typeof v == "string" ? v : v({ context: b, props: g }), b.bem.els = v.split(",").map((C) => C.trim()), b.bem.els.map((C) => `${(g == null ? void 0 : g.bPrefix) || t}${b.bem.b}${r}${C}`).join(", ");
      }
    };
  }
  function d(v) {
    return {
      $({ context: m, props: b }) {
        v = typeof v == "string" ? v : v({ context: m, props: b });
        const g = v.split(",").map((w) => w.trim());
        function C(w) {
          return g.map((k) => `&${(b == null ? void 0 : b.bPrefix) || t}${m.bem.b}${w !== void 0 ? `${r}${w}` : ""}${o}${k}`).join(", ");
        }
        const S = m.bem.els;
        if (S !== null) {
          if (process.env.NODE_ENV !== "production" && S.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${v}) is invalid, using modifier inside multiple elements is not allowed`);
          return C(S[0]);
        } else
          return C();
      }
    };
  }
  function u(v) {
    return {
      $({ context: m, props: b }) {
        v = typeof v == "string" ? v : v({ context: m, props: b });
        const g = m.bem.els;
        if (process.env.NODE_ENV !== "production" && g !== null && g.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${v}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(b == null ? void 0 : b.bPrefix) || t}${m.bem.b}${g !== null && g.length > 0 ? `${r}${g[0]}` : ""}${o}${v})`;
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
function Df(e) {
  let t = 0;
  for (let r = 0; r < e.length; ++r)
    e[r] === "&" && ++t;
  return t;
}
const Sd = /\s*,(?![^(]*\))\s*/g, Ef = /\s+/g;
function Tf(e, t) {
  const r = [];
  return t.split(Sd).forEach((o) => {
    let i = Df(o);
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
function Of(e, t) {
  const r = [];
  return t.split(Sd).forEach((o) => {
    e.forEach((i) => {
      r.push((i && i + " ") + o);
    });
  }), r;
}
function Mf(e) {
  let t = [""];
  return e.forEach((r) => {
    r = r && r.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    r && (r.includes("&") ? t = Tf(t, r) : t = Of(t, r));
  }), t.join(", ").replace(Ef, " ");
}
function Rl(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function di(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function If(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function Fo(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Lf = /[A-Z]/g;
function Bd(e) {
  return e.replace(Lf, (t) => "-" + t.toLowerCase());
}
function Nf(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((r) => t + `  ${Bd(r[0])}: ${r[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function Hf(e, t, r) {
  return typeof e == "function" ? e({
    context: t.context,
    props: r
  }) : e;
}
function Fl(e, t, r, o) {
  if (!t)
    return "";
  const i = Hf(t, r, o);
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
    s = Bd(s), d != null && l.push(`  ${s}${Nf(d)}`);
  }), e && l.push("}"), l.join(`
`);
}
function oa(e, t, r) {
  e && e.forEach((o) => {
    if (Array.isArray(o))
      oa(o, t, r);
    else if (typeof o == "function") {
      const i = o(t);
      Array.isArray(i) ? oa(i, t, r) : i && r(i);
    } else o && r(o);
  });
}
function kd(e, t, r, o, i) {
  const a = e.$;
  let l = "";
  if (!a || typeof a == "string")
    Fo(a) ? l = a : t.push(a);
  else if (typeof a == "function") {
    const u = a({
      context: o.context,
      props: i
    });
    Fo(u) ? l = u : t.push(u);
  } else if (a.before && a.before(o.context), !a.$ || typeof a.$ == "string")
    Fo(a.$) ? l = a.$ : t.push(a.$);
  else if (a.$) {
    const u = a.$({
      context: o.context,
      props: i
    });
    Fo(u) ? l = u : t.push(u);
  }
  const s = Mf(t), d = Fl(s, e.props, o, i);
  l ? r.push(`${l} {`) : d.length && r.push(d), e.children && oa(e.children, {
    context: o.context,
    props: i
  }, (u) => {
    if (typeof u == "string") {
      const c = Fl(s, { raw: u }, o, i);
      r.push(c);
    } else
      kd(u, t, r, o, i);
  }), t.pop(), l && r.push("}"), a && a.after && a.after(o.context);
}
function jf(e, t, r) {
  const o = [];
  return kd(e, [], o, t, r), o.join(`

`);
}
function ao(e) {
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
function _f(e, t, r, o) {
  const { els: i } = t;
  if (r === void 0)
    i.forEach(Rl), t.els = [];
  else {
    const a = di(r, o);
    a && i.includes(a) && (Rl(a), t.els = i.filter((l) => l !== a));
  }
}
function Pl(e, t) {
  e.push(t);
}
function Wf(e, t, r, o, i, a, l, s, d) {
  let u;
  if (r === void 0 && (u = t.render(o), r = ao(u)), d) {
    d.adapter(r, u ?? t.render(o));
    return;
  }
  s === void 0 && (s = document.head);
  const c = di(r, s);
  if (c !== null && !a)
    return c;
  const h = c ?? If(r);
  if (u === void 0 && (u = t.render(o)), h.textContent = u, c !== null)
    return c;
  if (l) {
    const p = s.querySelector(`meta[name="${l}"]`);
    if (p)
      return s.insertBefore(h, p), Pl(t.els, h), h;
  }
  return i ? s.insertBefore(h, s.querySelector("style, link")) : s.appendChild(h), Pl(t.els, h), h;
}
function Vf(e) {
  return jf(this, this.instance, e);
}
function Kf(e = {}) {
  const { id: t, ssr: r, props: o, head: i = !1, force: a = !1, anchorMetaName: l, parent: s } = e;
  return Wf(this.instance, this, t, o, i, a, l, s, r);
}
function Uf(e = {}) {
  const { id: t, parent: r } = e;
  _f(this.instance, this, t, r);
}
const Po = function(e, t, r, o) {
  return {
    instance: e,
    $: t,
    props: r,
    children: o,
    els: [],
    render: Vf,
    mount: Kf,
    unmount: Uf
  };
}, qf = function(e, t, r, o) {
  return Array.isArray(t) ? Po(e, { $: null }, null, t) : Array.isArray(r) ? Po(e, t, null, r) : Array.isArray(o) ? Po(e, t, r, o) : Po(e, t, r, null);
};
function Rd(e = {}) {
  const t = {
    c: (...r) => qf(t, ...r),
    use: (r, ...o) => r.install(t, ...o),
    find: di,
    context: {},
    config: e
  };
  return t;
}
function Gf(e, t) {
  if (e === void 0)
    return !1;
  if (t) {
    const { context: { ids: r } } = t;
    return r.has(e);
  }
  return di(e) !== null;
}
const Xf = "n", lo = `.${Xf}-`, Yf = "__", Zf = "--", Fd = Rd(), Pd = Af({
  blockPrefix: lo,
  elementPrefix: Yf,
  modifierPrefix: Zf
});
Fd.use(Pd);
const {
  c: O,
  find: L2
} = Fd, {
  cB: z,
  cE: T,
  cM: N,
  cNotM: Xe
} = Pd;
function ui(e) {
  return O(({
    props: {
      bPrefix: t
    }
  }) => `${t || lo}modal, ${t || lo}drawer`, [e]);
}
function Ma(e) {
  return O(({
    props: {
      bPrefix: t
    }
  }) => `${t || lo}popover`, [e]);
}
function zd(e) {
  return O(({
    props: {
      bPrefix: t
    }
  }) => `&${t || lo}modal`, e);
}
const Jf = (...e) => O(">", [z(...e)]);
function Z(e, t) {
  return e + (t === "default" ? "" : t.replace(/^[a-z]/, (r) => r.toUpperCase()));
}
let Go = [];
const $d = /* @__PURE__ */ new WeakMap();
function Qf() {
  Go.forEach((e) => e(...$d.get(e))), Go = [];
}
function Xo(e, ...t) {
  $d.set(e, t), !Go.includes(e) && Go.push(e) === 1 && requestAnimationFrame(Qf);
}
function qt(e, t) {
  let { target: r } = e;
  for (; r; ) {
    if (r.dataset && r.dataset[t] !== void 0)
      return !0;
    r = r.parentElement;
  }
  return !1;
}
function Fr(e) {
  return e.composedPath()[0] || null;
}
function At(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function xt(e) {
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
const zl = {
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
}, Dr = "^\\s*", Er = "\\s*$", Un = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", qn = "([0-9A-Fa-f])", Gn = "([0-9A-Fa-f]{2})", eh = new RegExp(`${Dr}rgb\\s*\\(${Un},${Un},${Un}\\)${Er}`), th = new RegExp(`${Dr}rgba\\s*\\(${Un},${Un},${Un},${Un}\\)${Er}`), nh = new RegExp(`${Dr}#${qn}${qn}${qn}${Er}`), rh = new RegExp(`${Dr}#${Gn}${Gn}${Gn}${Er}`), oh = new RegExp(`${Dr}#${qn}${qn}${qn}${qn}${Er}`), ih = new RegExp(`${Dr}#${Gn}${Gn}${Gn}${Gn}${Er}`);
function Kt(e) {
  return parseInt(e, 16);
}
function Jn(e) {
  try {
    let t;
    if (t = rh.exec(e))
      return [Kt(t[1]), Kt(t[2]), Kt(t[3]), 1];
    if (t = eh.exec(e))
      return [Tt(t[1]), Tt(t[5]), Tt(t[9]), 1];
    if (t = th.exec(e))
      return [
        Tt(t[1]),
        Tt(t[5]),
        Tt(t[9]),
        Jr(t[13])
      ];
    if (t = nh.exec(e))
      return [
        Kt(t[1] + t[1]),
        Kt(t[2] + t[2]),
        Kt(t[3] + t[3]),
        1
      ];
    if (t = ih.exec(e))
      return [
        Kt(t[1]),
        Kt(t[2]),
        Kt(t[3]),
        Jr(Kt(t[4]) / 255)
      ];
    if (t = oh.exec(e))
      return [
        Kt(t[1] + t[1]),
        Kt(t[2] + t[2]),
        Kt(t[3] + t[3]),
        Jr(Kt(t[4] + t[4]) / 255)
      ];
    if (e in zl)
      return Jn(zl[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function ah(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function ia(e, t, r, o) {
  return `rgba(${Tt(e)}, ${Tt(t)}, ${Tt(r)}, ${ah(o)})`;
}
function Mi(e, t, r, o, i) {
  return Tt((e * t * (1 - o) + r * o) / i);
}
function Ge(e, t) {
  Array.isArray(e) || (e = Jn(e)), Array.isArray(t) || (t = Jn(t));
  const r = e[3], o = t[3], i = Jr(r + o - r * o);
  return ia(Mi(e[0], r, t[0], o, i), Mi(e[1], r, t[1], o, i), Mi(e[2], r, t[2], o, i), i);
}
function De(e, t) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : Jn(e);
  return t.alpha ? ia(r, o, i, t.alpha) : ia(r, o, i, a);
}
function zo(e, t) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : Jn(e), { lightness: l = 1, alpha: s = 1 } = t;
  return lh([r * l, o * l, i * l, a * s]);
}
function Jr(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Tt(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function lh(e) {
  const [t, r, o] = e;
  return 3 in e ? `rgba(${Tt(t)}, ${Tt(r)}, ${Tt(o)}, ${Jr(e[3])})` : `rgba(${Tt(t)}, ${Tt(r)}, ${Tt(o)}, 1)`;
}
function pn(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function sh(e, t) {
  const r = [];
  for (let o = 0; o < e; ++o)
    r.push(t);
  return r;
}
function Ko(e) {
  return e.composedPath()[0];
}
const dh = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function uh(e, t, r) {
  if (e === "mousemoveoutside") {
    const o = (i) => {
      t.contains(Ko(i)) || r(i);
    };
    return {
      mousemove: o,
      touchstart: o
    };
  } else if (e === "clickoutside") {
    let o = !1;
    const i = (l) => {
      o = !t.contains(Ko(l));
    }, a = (l) => {
      o && (t.contains(Ko(l)) || r(l));
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
function Ad(e, t, r) {
  const o = dh[e];
  let i = o.get(t);
  i === void 0 && o.set(t, i = /* @__PURE__ */ new WeakMap());
  let a = i.get(r);
  return a === void 0 && i.set(r, a = uh(e, t, r)), a;
}
function ch(e, t, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Ad(e, t, r);
    return Object.keys(i).forEach((a) => {
      Ke(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function fh(e, t, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Ad(e, t, r);
    return Object.keys(i).forEach((a) => {
      We(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function hh() {
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
  function i(y, B, F) {
    const A = y[B];
    return y[B] = function() {
      return F.apply(y, arguments), A.apply(y, arguments);
    }, y;
  }
  function a(y, B) {
    y[B] = Event.prototype[B];
  }
  const l = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function d() {
    var y;
    return (y = l.get(this)) !== null && y !== void 0 ? y : null;
  }
  function u(y, B) {
    s !== void 0 && Object.defineProperty(y, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: B ?? s.get
    });
  }
  const c = {
    bubble: {},
    capture: {}
  }, h = {};
  function p() {
    const y = function(B) {
      const { type: F, eventPhase: A, bubbles: K } = B, M = Ko(B);
      if (A === 2)
        return;
      const n = A === 1 ? "capture" : "bubble";
      let D = M;
      const E = [];
      for (; D === null && (D = window), E.push(D), D !== window; )
        D = D.parentNode || null;
      const H = c.capture[F], L = c.bubble[F];
      if (i(B, "stopPropagation", r), i(B, "stopImmediatePropagation", o), u(B, d), n === "capture") {
        if (H === void 0)
          return;
        for (let V = E.length - 1; V >= 0 && !e.has(B); --V) {
          const te = E[V], X = H.get(te);
          if (X !== void 0) {
            l.set(B, te);
            for (const U of X) {
              if (t.has(B))
                break;
              U(B);
            }
          }
          if (V === 0 && !K && L !== void 0) {
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
        for (let V = 0; V < E.length && !e.has(B); ++V) {
          const te = E[V], X = L.get(te);
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
    return y.displayName = "evtdUnifiedHandler", y;
  }
  function x() {
    const y = function(B) {
      const { type: F, eventPhase: A } = B;
      if (A !== 2)
        return;
      const K = h[F];
      K !== void 0 && K.forEach((M) => M(B));
    };
    return y.displayName = "evtdUnifiedWindowEventHandler", y;
  }
  const v = p(), m = x();
  function b(y, B) {
    const F = c[y];
    return F[B] === void 0 && (F[B] = /* @__PURE__ */ new Map(), window.addEventListener(B, v, y === "capture")), F[B];
  }
  function g(y) {
    return h[y] === void 0 && (h[y] = /* @__PURE__ */ new Set(), window.addEventListener(y, m)), h[y];
  }
  function C(y, B) {
    let F = y.get(B);
    return F === void 0 && y.set(B, F = /* @__PURE__ */ new Set()), F;
  }
  function S(y, B, F, A) {
    const K = c[B][F];
    if (K !== void 0) {
      const M = K.get(y);
      if (M !== void 0 && M.has(A))
        return !0;
    }
    return !1;
  }
  function w(y, B) {
    const F = h[y];
    return !!(F !== void 0 && F.has(B));
  }
  function k(y, B, F, A) {
    let K;
    if (typeof A == "object" && A.once === !0 ? K = (H) => {
      R(y, B, K, A), F(H);
    } : K = F, ch(y, B, K, A))
      return;
    const n = A === !0 || typeof A == "object" && A.capture === !0 ? "capture" : "bubble", D = b(n, y), E = C(D, B);
    if (E.has(K) || E.add(K), B === window) {
      const H = g(y);
      H.has(K) || H.add(K);
    }
  }
  function R(y, B, F, A) {
    if (fh(y, B, F, A))
      return;
    const M = A === !0 || typeof A == "object" && A.capture === !0, n = M ? "capture" : "bubble", D = b(n, y), E = C(D, B);
    if (B === window && !S(B, M ? "bubble" : "capture", y, F) && w(y, F)) {
      const L = h[y];
      L.delete(F), L.size === 0 && (window.removeEventListener(y, m), h[y] = void 0);
    }
    E.has(F) && E.delete(F), E.size === 0 && D.delete(B), D.size === 0 && (window.removeEventListener(y, v, n === "capture"), c[n][y] = void 0);
  }
  return {
    on: k,
    off: R
  };
}
const { on: Ke, off: We } = hh();
function Dd(e) {
  const t = I(!!e.value);
  if (t.value)
    return Dn(t);
  const r = He(e, (o) => {
    o && (t.value = !0, r());
  });
  return Dn(t);
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
function Ia() {
  return mo() !== null;
}
const La = typeof window < "u";
let yr, Qr;
const vh = () => {
  var e, t;
  yr = La ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, Qr = !1, yr !== void 0 ? yr.then(() => {
    Qr = !0;
  }) : Qr = !0;
};
vh();
function ph(e) {
  if (Qr)
    return;
  let t = !1;
  Ft(() => {
    Qr || yr == null || yr.then(() => {
      t || e();
    });
  }), kt(() => {
    t = !0;
  });
}
const qr = I(null);
function $l(e) {
  if (e.clientX > 0 || e.clientY > 0)
    qr.value = {
      x: e.clientX,
      y: e.clientY
    };
  else {
    const { target: t } = e;
    if (t instanceof Element) {
      const { left: r, top: o, width: i, height: a } = t.getBoundingClientRect();
      r > 0 || o > 0 ? qr.value = {
        x: r + i / 2,
        y: o + a / 2
      } : qr.value = { x: 0, y: 0 };
    } else
      qr.value = null;
  }
}
let $o = 0, Al = !0;
function Na() {
  if (!La)
    return Dn(I(null));
  $o === 0 && Ke("click", document, $l, !0);
  const e = () => {
    $o += 1;
  };
  return Al && (Al = Ia()) ? (or(e), kt(() => {
    $o -= 1, $o === 0 && We("click", document, $l, !0);
  })) : e(), Dn(qr);
}
const gh = I(void 0);
let Ao = 0;
function Dl() {
  gh.value = Date.now();
}
let El = !0;
function Ha(e) {
  if (!La)
    return Dn(I(!1));
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
  Ao === 0 && Ke("click", window, Dl, !0);
  const a = () => {
    Ao += 1, Ke("click", window, i, !0);
  };
  return El && (El = Ia()) ? (or(a), kt(() => {
    Ao -= 1, Ao === 0 && We("click", window, Dl, !0), We("click", window, i, !0), o();
  })) : a(), Dn(t);
}
function Mt(e, t) {
  return He(e, (r) => {
    r !== void 0 && (t.value = r);
  }), $(() => e.value === void 0 ? t.value : e.value);
}
function Tr() {
  const e = I(!1);
  return Ft(() => {
    e.value = !0;
  }), Dn(e);
}
function ja(e, t) {
  return $(() => {
    for (const r of t)
      if (e[r] !== void 0)
        return e[r];
    return e[t[t.length - 1]];
  });
}
const mh = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function bh() {
  return mh;
}
function xh(e = {}, t) {
  const r = bo({
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
    (t === void 0 || t.value) && (Ke("keydown", document, a), Ke("keyup", document, l)), t !== void 0 && He(t, (d) => {
      d ? (Ke("keydown", document, a), Ke("keyup", document, l)) : (We("keydown", document, a), We("keyup", document, l));
    });
  };
  return Ia() ? (or(s), kt(() => {
    (t === void 0 || t.value) && (We("keydown", document, a), We("keyup", document, l));
  })) : s(), Dn(r);
}
const _a = "n-internal-select-menu", Ed = "n-internal-select-menu-body", ci = "n-drawer-body", fi = "n-modal-body", Ch = "n-modal-provider", Td = "n-modal", yo = "n-popover-body", Od = "__disabled__";
function gn(e) {
  const t = ge(fi, null), r = ge(ci, null), o = ge(yo, null), i = ge(Ed, null), a = I();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const l = () => {
      a.value = document.fullscreenElement;
    };
    Ft(() => {
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
    return s !== void 0 ? s === !1 ? Od : s === !0 ? a.value || "body" : s : t != null && t.value ? (l = t.value.$el) !== null && l !== void 0 ? l : t.value : r != null && r.value ? r.value : o != null && o.value ? o.value : i != null && i.value ? i.value : s ?? (a.value || "body");
  });
}
gn.tdkey = Od;
gn.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function yh(e, t, r) {
  var o;
  const i = ge(e, null);
  if (i === null) return;
  const a = (o = mo()) === null || o === void 0 ? void 0 : o.proxy;
  He(r, l), l(r.value), kt(() => {
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
function wh(e, t, r) {
  const o = I(e.value);
  let i = null;
  return He(e, (a) => {
    i !== null && window.clearTimeout(i), a === !0 ? r && !r.value ? o.value = !0 : i = window.setTimeout(() => {
      o.value = !0;
    }, t) : o.value = !1;
  }), o;
}
const Or = typeof document < "u" && typeof window < "u", Wa = I(!1);
function Tl() {
  Wa.value = !0;
}
function Ol() {
  Wa.value = !1;
}
let Wr = 0;
function Sh() {
  return Or && (or(() => {
    Wr || (window.addEventListener("compositionstart", Tl), window.addEventListener("compositionend", Ol)), Wr++;
  }), kt(() => {
    Wr <= 1 ? (window.removeEventListener("compositionstart", Tl), window.removeEventListener("compositionend", Ol), Wr = 0) : Wr--;
  })), Wa;
}
let vr = 0, Ml = "", Il = "", Ll = "", Nl = "";
const Hl = I("0px");
function Bh(e) {
  if (typeof document > "u") return;
  const t = document.documentElement;
  let r, o = !1;
  const i = () => {
    t.style.marginRight = Ml, t.style.overflow = Il, t.style.overflowX = Ll, t.style.overflowY = Nl, Hl.value = "0px";
  };
  Ft(() => {
    r = He(e, (a) => {
      if (a) {
        if (!vr) {
          const l = window.innerWidth - t.offsetWidth;
          l > 0 && (Ml = t.style.marginRight, t.style.marginRight = `${l}px`, Hl.value = `${l}px`), Il = t.style.overflow, Ll = t.style.overflowX, Nl = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden";
        }
        o = !0, vr++;
      } else
        vr--, vr || i(), o = !1;
    }, {
      immediate: !0
    });
  }), kt(() => {
    r == null || r(), o && (vr--, vr || i(), o = !1);
  });
}
function kh(e) {
  const t = {
    isDeactivated: !1
  };
  let r = !1;
  return bd(() => {
    if (t.isDeactivated = !1, !r) {
      r = !0;
      return;
    }
    e();
  }), Ta(() => {
    t.isDeactivated = !0, r || (r = !0);
  }), t;
}
function aa(e, t, r = "default") {
  const o = t[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  return o();
}
function la(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(Ht(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        la(o, t, r);
        return;
      }
      if (o.type === _e) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && la(o.children, t, r);
      } else o.type !== Oa && r.push(o);
    }
  }), r;
}
function jl(e, t, r = "default") {
  const o = t[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  const i = la(o());
  if (i.length === 1)
    return i[0];
  throw new Error(`[vueuc/${e}]: slot[${r}] should have exactly one child.`);
}
let Pn = null;
function Md() {
  if (Pn === null && (Pn = document.getElementById("v-binder-view-measurer"), Pn === null)) {
    Pn = document.createElement("div"), Pn.id = "v-binder-view-measurer";
    const { style: e } = Pn;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(Pn);
  }
  return Pn.getBoundingClientRect();
}
function Rh(e, t) {
  const r = Md();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: r.width - e,
    bottom: r.height - t
  };
}
function Ii(e) {
  const t = e.getBoundingClientRect(), r = Md();
  return {
    left: t.left - r.left,
    top: t.top - r.top,
    bottom: r.height + r.top - t.bottom,
    right: r.width + r.left - t.right,
    width: t.width,
    height: t.height
  };
}
function Fh(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Id(e) {
  if (e === null)
    return null;
  const t = Fh(e);
  if (t === null)
    return null;
  if (t.nodeType === 9)
    return document;
  if (t.nodeType === 1) {
    const { overflow: r, overflowX: o, overflowY: i } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(r + i + o))
      return t;
  }
  return Id(t);
}
const Va = ee({
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
    Ee("VBinder", (t = mo()) === null || t === void 0 ? void 0 : t.proxy);
    const r = ge("VBinder", null), o = I(null), i = (g) => {
      o.value = g, r && e.syncTargetWithParent && r.setTargetRef(g);
    };
    let a = [];
    const l = () => {
      let g = o.value;
      for (; g = Id(g), g !== null; )
        a.push(g);
      for (const C of a)
        Ke("scroll", C, h, !0);
    }, s = () => {
      for (const g of a)
        We("scroll", g, h, !0);
      a = [];
    }, d = /* @__PURE__ */ new Set(), u = (g) => {
      d.size === 0 && l(), d.has(g) || d.add(g);
    }, c = (g) => {
      d.has(g) && d.delete(g), d.size === 0 && s();
    }, h = () => {
      Xo(p);
    }, p = () => {
      d.forEach((g) => g());
    }, x = /* @__PURE__ */ new Set(), v = (g) => {
      x.size === 0 && Ke("resize", window, b), x.has(g) || x.add(g);
    }, m = (g) => {
      x.has(g) && x.delete(g), x.size === 0 && We("resize", window, b);
    }, b = () => {
      x.forEach((g) => g());
    };
    return kt(() => {
      We("resize", window, b), s();
    }), {
      targetRef: o,
      setTargetRef: i,
      addScrollListener: u,
      removeScrollListener: c,
      addResizeListener: v,
      removeResizeListener: m
    };
  },
  render() {
    return aa("binder", this.$slots);
  }
}), Ka = ee({
  name: "Target",
  setup() {
    const { setTargetRef: e, syncTarget: t } = ge("VBinder");
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
    return e ? vn(jl("follower", this.$slots), [
      [t]
    ]) : jl("follower", this.$slots);
  }
}), pr = "@@mmoContext", Ph = {
  mounted(e, { value: t }) {
    e[pr] = {
      handler: void 0
    }, typeof t == "function" && (e[pr].handler = t, Ke("mousemoveoutside", e, t));
  },
  updated(e, { value: t }) {
    const r = e[pr];
    typeof t == "function" ? r.handler ? r.handler !== t && (We("mousemoveoutside", e, r.handler), r.handler = t, Ke("mousemoveoutside", e, t)) : (e[pr].handler = t, Ke("mousemoveoutside", e, t)) : r.handler && (We("mousemoveoutside", e, r.handler), r.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[pr];
    t && We("mousemoveoutside", e, t), e[pr].handler = void 0;
  }
}, gr = "@@coContext", so = {
  mounted(e, { value: t, modifiers: r }) {
    e[gr] = {
      handler: void 0
    }, typeof t == "function" && (e[gr].handler = t, Ke("clickoutside", e, t, {
      capture: r.capture
    }));
  },
  updated(e, { value: t, modifiers: r }) {
    const o = e[gr];
    typeof t == "function" ? o.handler ? o.handler !== t && (We("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = t, Ke("clickoutside", e, t, {
      capture: r.capture
    })) : (e[gr].handler = t, Ke("clickoutside", e, t, {
      capture: r.capture
    })) : o.handler && (We("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = void 0);
  },
  unmounted(e, { modifiers: t }) {
    const { handler: r } = e[gr];
    r && We("clickoutside", e, r, {
      capture: t.capture
    }), e[gr].handler = void 0;
  }
};
function zh(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class $h {
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
    o.has(t) ? o.delete(t) : r === void 0 && zh("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const Li = new $h(), mr = "@@ziContext", Ua = {
  mounted(e, t) {
    const { value: r = {} } = t, { zIndex: o, enabled: i } = r;
    e[mr] = {
      enabled: !!i,
      initialized: !1
    }, i && (Li.ensureZIndex(e, o), e[mr].initialized = !0);
  },
  updated(e, t) {
    const { value: r = {} } = t, { zIndex: o, enabled: i } = r, a = e[mr].enabled;
    i && !a && (Li.ensureZIndex(e, o), e[mr].initialized = !0), e[mr].enabled = !!i;
  },
  unmounted(e, t) {
    if (!e[mr].initialized)
      return;
    const { value: r = {} } = t, { zIndex: o } = r;
    Li.unregister(e, o);
  }
}, Ah = "@css-render/vue3-ssr";
function Dh(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function Eh(e, t, r) {
  const { styles: o, ids: i } = r;
  i.has(e) || o !== null && (i.add(e), o.push(Dh(e, t)));
}
const Th = typeof document < "u";
function ir() {
  if (Th)
    return;
  const e = ge(Ah, null);
  if (e !== null)
    return {
      adapter: (t, r) => Eh(t, r, e),
      context: e
    };
}
function _l(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
const { c: An } = Rd(), qa = "vueuc-style";
function Wl(e) {
  return e & -e;
}
class Ld {
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
      i[t] += r, t += Wl(t);
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
      a += r[t], t -= Wl(t);
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
function Vl(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const Nd = ee({
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
      showTeleport: Dd(oe(e, "show")),
      mergedTo: $(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? aa("lazy-teleport", this.$slots) : f(li, {
      disabled: this.disabled,
      to: this.mergedTo
    }, aa("lazy-teleport", this.$slots)) : null;
  }
}), Do = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Kl = {
  start: "end",
  center: "center",
  end: "start"
}, Ni = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, Oh = {
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
}, Mh = {
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
}, Ih = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, Ul = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, ql = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Lh(e, t, r, o, i, a) {
  if (!i || a)
    return { placement: e, top: 0, left: 0 };
  const [l, s] = e.split("-");
  let d = s ?? "center", u = {
    top: 0,
    left: 0
  };
  const c = (x, v, m) => {
    let b = 0, g = 0;
    const C = r[x] - t[v] - t[x];
    return C > 0 && o && (m ? g = Ul[v] ? C : -C : b = Ul[v] ? C : -C), {
      left: b,
      top: g
    };
  }, h = l === "left" || l === "right";
  if (d !== "center") {
    const x = Ih[e], v = Do[x], m = Ni[x];
    if (r[m] > t[m]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[x] + t[m] < r[m]
      ) {
        const b = (r[m] - t[m]) / 2;
        t[x] < b || t[v] < b ? t[x] < t[v] ? (d = Kl[s], u = c(m, v, h)) : u = c(m, x, h) : d = "center";
      }
    } else r[m] < t[m] && t[v] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[x] > t[v] && (d = Kl[s]);
  } else {
    const x = l === "bottom" || l === "top" ? "left" : "top", v = Do[x], m = Ni[x], b = (r[m] - t[m]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[x] < b || t[v] < b) && (t[x] > t[v] ? (d = ql[x], u = c(m, x, h)) : (d = ql[v], u = c(m, v, h)));
  }
  let p = l;
  return (
    // space is not enough
    t[l] < r[Ni[l]] && // opposite position's space is larger
    t[l] < t[Do[l]] && (p = Do[l]), {
      placement: d !== "center" ? `${p}-${d}` : p,
      left: u.left,
      top: u.top
    }
  );
}
function Nh(e, t) {
  return t ? Mh[e] : Oh[e];
}
function Hh(e, t, r, o, i, a) {
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
const jh = An([
  An(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  An(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    An("> *", {
      pointerEvents: "all"
    })
  ])
]), Ga = ee({
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
    const t = ge("VBinder"), r = Ue(() => e.enabled !== void 0 ? e.enabled : e.show), o = I(null), i = I(null), a = () => {
      const { syncTrigger: p } = e;
      p.includes("scroll") && t.addScrollListener(d), p.includes("resize") && t.addResizeListener(d);
    }, l = () => {
      t.removeScrollListener(d), t.removeResizeListener(d);
    };
    Ft(() => {
      r.value && (d(), a());
    });
    const s = ir();
    jh.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: qa,
      ssr: s
    }), kt(() => {
      l();
    }), ph(() => {
      r.value && d();
    });
    const d = () => {
      if (!r.value)
        return;
      const p = o.value;
      if (p === null)
        return;
      const x = t.targetRef, { x: v, y: m, overlap: b } = e, g = v !== void 0 && m !== void 0 ? Rh(v, m) : Ii(x);
      p.style.setProperty("--v-target-width", `${Math.round(g.width)}px`), p.style.setProperty("--v-target-height", `${Math.round(g.height)}px`);
      const { width: C, minWidth: S, placement: w, internalShift: k, flip: R } = e;
      p.setAttribute("v-placement", w), b ? p.setAttribute("v-overlap", "") : p.removeAttribute("v-overlap");
      const { style: y } = p;
      C === "target" ? y.width = `${g.width}px` : C !== void 0 ? y.width = C : y.width = "", S === "target" ? y.minWidth = `${g.width}px` : S !== void 0 ? y.minWidth = S : y.minWidth = "";
      const B = Ii(p), F = Ii(i.value), { left: A, top: K, placement: M } = Lh(w, g, B, k, R, b), n = Nh(M, b), { left: D, top: E, transform: H } = Hh(M, F, g, K, A, b);
      p.setAttribute("v-placement", M), p.style.setProperty("--v-offset-left", `${Math.round(A)}px`), p.style.setProperty("--v-offset-top", `${Math.round(K)}px`), p.style.transform = `translateX(${D}) translateY(${E}) ${H}`, p.style.setProperty("--v-transform-origin", n), p.style.transformOrigin = n;
    };
    He(r, (p) => {
      p ? (a(), u()) : l();
    });
    const u = () => {
      vt().then(d).catch((p) => console.error(p));
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
      He(oe(e, p), d);
    }), ["teleportDisabled"].forEach((p) => {
      He(oe(e, p), u);
    }), He(oe(e, "syncTrigger"), (p) => {
      p.includes("resize") ? t.addResizeListener(d) : t.removeResizeListener(d), p.includes("scroll") ? t.addScrollListener(d) : t.removeScrollListener(d);
    });
    const c = Tr(), h = Ue(() => {
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
    return f(Nd, {
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
        return this.zindexable ? vn(r, [
          [
            Ua,
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
var Yn = [], _h = function() {
  return Yn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Wh = function() {
  return Yn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Gl = "ResizeObserver loop completed with undelivered notifications.", Vh = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Gl
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Gl), window.dispatchEvent(e);
}, uo;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(uo || (uo = {}));
var Zn = function(e) {
  return Object.freeze(e);
}, Kh = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, Zn(this);
  }
  return e;
}(), Hd = function() {
  function e(t, r, o, i) {
    return this.x = t, this.y = r, this.width = o, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Zn(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, o = t.y, i = t.top, a = t.right, l = t.bottom, s = t.left, d = t.width, u = t.height;
    return { x: r, y: o, top: i, right: a, bottom: l, left: s, width: d, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Xa = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, jd = function(e) {
  if (Xa(e)) {
    var t = e.getBBox(), r = t.width, o = t.height;
    return !r && !o;
  }
  var i = e, a = i.offsetWidth, l = i.offsetHeight;
  return !(a || l || e.getClientRects().length);
}, Xl = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, Uh = function(e) {
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
}, eo = typeof window < "u" ? window : {}, Eo = /* @__PURE__ */ new WeakMap(), Yl = /auto|scroll/, qh = /^tb|vertical/, Gh = /msie|trident/i.test(eo.navigator && eo.navigator.userAgent), dn = function(e) {
  return parseFloat(e || "0");
}, wr = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new Kh((r ? t : e) || 0, (r ? e : t) || 0);
}, Zl = Zn({
  devicePixelContentBoxSize: wr(),
  borderBoxSize: wr(),
  contentBoxSize: wr(),
  contentRect: new Hd(0, 0, 0, 0)
}), _d = function(e, t) {
  if (t === void 0 && (t = !1), Eo.has(e) && !t)
    return Eo.get(e);
  if (jd(e))
    return Eo.set(e, Zl), Zl;
  var r = getComputedStyle(e), o = Xa(e) && e.ownerSVGElement && e.getBBox(), i = !Gh && r.boxSizing === "border-box", a = qh.test(r.writingMode || ""), l = !o && Yl.test(r.overflowY || ""), s = !o && Yl.test(r.overflowX || ""), d = o ? 0 : dn(r.paddingTop), u = o ? 0 : dn(r.paddingRight), c = o ? 0 : dn(r.paddingBottom), h = o ? 0 : dn(r.paddingLeft), p = o ? 0 : dn(r.borderTopWidth), x = o ? 0 : dn(r.borderRightWidth), v = o ? 0 : dn(r.borderBottomWidth), m = o ? 0 : dn(r.borderLeftWidth), b = h + u, g = d + c, C = m + x, S = p + v, w = s ? e.offsetHeight - S - e.clientHeight : 0, k = l ? e.offsetWidth - C - e.clientWidth : 0, R = i ? b + C : 0, y = i ? g + S : 0, B = o ? o.width : dn(r.width) - R - k, F = o ? o.height : dn(r.height) - y - w, A = B + b + k + C, K = F + g + w + S, M = Zn({
    devicePixelContentBoxSize: wr(Math.round(B * devicePixelRatio), Math.round(F * devicePixelRatio), a),
    borderBoxSize: wr(A, K, a),
    contentBoxSize: wr(B, F, a),
    contentRect: new Hd(h, d, B, F)
  });
  return Eo.set(e, M), M;
}, Wd = function(e, t, r) {
  var o = _d(e, r), i = o.borderBoxSize, a = o.contentBoxSize, l = o.devicePixelContentBoxSize;
  switch (t) {
    case uo.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case uo.BORDER_BOX:
      return i;
    default:
      return a;
  }
}, Xh = /* @__PURE__ */ function() {
  function e(t) {
    var r = _d(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = Zn([r.borderBoxSize]), this.contentBoxSize = Zn([r.contentBoxSize]), this.devicePixelContentBoxSize = Zn([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Vd = function(e) {
  if (jd(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, Yh = function() {
  var e = 1 / 0, t = [];
  Yn.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(u) {
        var c = new Xh(u.target), h = Vd(u.target);
        s.push(c), u.lastReportedSize = Wd(u.target, u.observedBox), h < e && (e = h);
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
}, Jl = function(e) {
  Yn.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(i) {
      i.isActive() && (Vd(i.target) > e ? r.activeTargets.push(i) : r.skippedTargets.push(i));
    });
  });
}, Zh = function() {
  var e = 0;
  for (Jl(e); _h(); )
    e = Yh(), Jl(e);
  return Wh() && Vh(), e > 0;
}, Hi, Kd = [], Jh = function() {
  return Kd.splice(0).forEach(function(e) {
    return e();
  });
}, Qh = function(e) {
  if (!Hi) {
    var t = 0, r = document.createTextNode(""), o = { characterData: !0 };
    new MutationObserver(function() {
      return Jh();
    }).observe(r, o), Hi = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  Kd.push(e), Hi();
}, e0 = function(e) {
  Qh(function() {
    requestAnimationFrame(e);
  });
}, Uo = 0, t0 = function() {
  return !!Uo;
}, n0 = 250, r0 = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Ql = [
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
], es = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, ji = !1, o0 = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = n0), !ji) {
      ji = !0;
      var o = es(t);
      e0(function() {
        var i = !1;
        try {
          i = Zh();
        } finally {
          if (ji = !1, t = o - es(), !t0())
            return;
          i ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, r0);
    };
    document.body ? r() : eo.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Ql.forEach(function(r) {
      return eo.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Ql.forEach(function(r) {
      return eo.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), sa = new o0(), ts = function(e) {
  !Uo && e > 0 && sa.start(), Uo += e, !Uo && sa.stop();
}, i0 = function(e) {
  return !Xa(e) && !Uh(e) && getComputedStyle(e).display === "inline";
}, a0 = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || uo.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = Wd(this.target, this.observedBox, !0);
    return i0(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), l0 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), To = /* @__PURE__ */ new WeakMap(), ns = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, Oo = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var o = new l0(t, r);
    To.set(t, o);
  }, e.observe = function(t, r, o) {
    var i = To.get(t), a = i.observationTargets.length === 0;
    ns(i.observationTargets, r) < 0 && (a && Yn.push(i), i.observationTargets.push(new a0(r, o && o.box)), ts(1), sa.schedule());
  }, e.unobserve = function(t, r) {
    var o = To.get(t), i = ns(o.observationTargets, r), a = o.observationTargets.length === 1;
    i >= 0 && (a && Yn.splice(Yn.indexOf(o), 1), o.observationTargets.splice(i, 1), ts(-1));
  }, e.disconnect = function(t) {
    var r = this, o = To.get(t);
    o.observationTargets.slice().forEach(function(i) {
      return r.unobserve(t, i.target);
    }), o.activeTargets.splice(0, o.activeTargets.length);
  }, e;
}(), s0 = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Oo.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Xl(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Oo.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Xl(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Oo.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    Oo.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class d0 {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || s0)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const to = new d0(), Pr = ee({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let t = !1;
    const r = mo().proxy;
    function o(i) {
      const { onResize: a } = e;
      a !== void 0 && a(i);
    }
    Ft(() => {
      const i = r.$el;
      if (i === void 0) {
        _l("resize-observer", "$el does not exist.");
        return;
      }
      if (i.nextElementSibling !== i.nextSibling && i.nodeType === 3 && i.nodeValue !== "") {
        _l("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      i.nextElementSibling !== null && (to.registerHandler(i.nextElementSibling, o), t = !0);
    }), kt(() => {
      t && to.unregisterHandler(r.$el.nextElementSibling);
    });
  },
  render() {
    return wn(this.$slots, "default");
  }
});
let Mo;
function u0() {
  return typeof document > "u" ? !1 : (Mo === void 0 && ("matchMedia" in window ? Mo = window.matchMedia("(pointer:coarse)").matches : Mo = !1), Mo);
}
let _i;
function rs() {
  return typeof document > "u" ? 1 : (_i === void 0 && (_i = "chrome" in window ? window.devicePixelRatio : 1), _i);
}
const Ud = "VVirtualListXScroll";
function c0({ columnsRef: e, renderColRef: t, renderItemWithColsRef: r }) {
  const o = I(0), i = I(0), a = $(() => {
    const u = e.value;
    if (u.length === 0)
      return null;
    const c = new Ld(u.length, 0);
    return u.forEach((h, p) => {
      c.add(p, h.width);
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
  return Ee(Ud, {
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
const os = ee({
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
      ge(Ud)
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
}), f0 = An(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  An("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    An("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), Ya = ee({
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
    const t = ir();
    f0.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: qa,
      ssr: t
    }), Ft(() => {
      const { defaultScrollIndex: n, defaultScrollKey: D } = e;
      n != null ? b({ index: n }) : D != null && b({ key: D });
    });
    let r = !1, o = !1;
    bd(() => {
      if (r = !1, !o) {
        o = !0;
        return;
      }
      b({ top: x.value, left: l.value });
    }), Ta(() => {
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
    }), { scrollLeftRef: l, listWidthRef: s } = c0({
      columnsRef: oe(e, "columns"),
      renderColRef: oe(e, "renderCol"),
      renderItemWithColsRef: oe(e, "renderItemWithCols")
    }), d = I(null), u = I(void 0), c = /* @__PURE__ */ new Map(), h = $(() => {
      const { items: n, itemSize: D, keyField: E } = e, H = new Ld(n.length, D);
      return n.forEach((L, V) => {
        const te = L[E], X = c.get(te);
        X !== void 0 && H.add(V, X);
      }), H;
    }), p = I(0), x = I(0), v = Ue(() => Math.max(h.value.getBound(x.value - At(e.paddingTop)) - 1, 0)), m = $(() => {
      const { value: n } = u;
      if (n === void 0)
        return [];
      const { items: D, itemSize: E } = e, H = v.value, L = Math.min(H + Math.ceil(n / E + 1), D.length - 1), V = [];
      for (let te = H; te <= L; ++te)
        V.push(D[te]);
      return V;
    }), b = (n, D) => {
      if (typeof n == "number") {
        w(n, D, "auto");
        return;
      }
      const { left: E, top: H, index: L, key: V, position: te, behavior: X, debounce: U = !0 } = n;
      if (E !== void 0 || H !== void 0)
        w(E, H, X);
      else if (L !== void 0)
        S(L, X, U);
      else if (V !== void 0) {
        const j = a.value.get(V);
        j !== void 0 && S(j, X, U);
      } else te === "bottom" ? w(0, Number.MAX_SAFE_INTEGER, X) : te === "top" && w(0, 0, X);
    };
    let g, C = null;
    function S(n, D, E) {
      const { value: H } = h, L = H.sum(n) + At(e.paddingTop);
      if (!E)
        d.value.scrollTo({
          left: 0,
          top: L,
          behavior: D
        });
      else {
        g = n, C !== null && window.clearTimeout(C), C = window.setTimeout(() => {
          g = void 0, C = null;
        }, 16);
        const { scrollTop: V, offsetHeight: te } = d.value;
        if (L > V) {
          const X = H.get(n);
          L + X <= V + te || d.value.scrollTo({
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
    function w(n, D, E) {
      d.value.scrollTo({
        left: n,
        top: D,
        behavior: E
      });
    }
    function k(n, D) {
      var E, H, L;
      if (r || e.ignoreItemResize || M(D.target))
        return;
      const { value: V } = h, te = a.value.get(n), X = V.get(te), U = (L = (H = (E = D.borderBoxSize) === null || E === void 0 ? void 0 : E[0]) === null || H === void 0 ? void 0 : H.blockSize) !== null && L !== void 0 ? L : D.contentRect.height;
      if (U === X)
        return;
      U - e.itemSize === 0 ? c.delete(n) : c.set(n, U - e.itemSize);
      const q = U - X;
      if (q === 0)
        return;
      V.add(te, q);
      const Y = d.value;
      if (Y != null) {
        if (g === void 0) {
          const ie = V.sum(te);
          Y.scrollTop > ie && Y.scrollBy(0, q);
        } else if (te < g)
          Y.scrollBy(0, q);
        else if (te === g) {
          const ie = V.sum(te);
          U + ie > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          Y.scrollTop + Y.offsetHeight && Y.scrollBy(0, q);
        }
        K();
      }
      p.value++;
    }
    const R = !u0();
    let y = !1;
    function B(n) {
      var D;
      (D = e.onScroll) === null || D === void 0 || D.call(e, n), (!R || !y) && K();
    }
    function F(n) {
      var D;
      if ((D = e.onWheel) === null || D === void 0 || D.call(e, n), R) {
        const E = d.value;
        if (E != null) {
          if (n.deltaX === 0 && (E.scrollTop === 0 && n.deltaY <= 0 || E.scrollTop + E.offsetHeight >= E.scrollHeight && n.deltaY >= 0))
            return;
          n.preventDefault(), E.scrollTop += n.deltaY / rs(), E.scrollLeft += n.deltaX / rs(), K(), y = !0, Xo(() => {
            y = !1;
          });
        }
      }
    }
    function A(n) {
      if (r || M(n.target))
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
    function K() {
      const { value: n } = d;
      n != null && (x.value = n.scrollTop, l.value = n.scrollLeft);
    }
    function M(n) {
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
        const { itemResizable: n } = e, D = xt(h.value.sum());
        return p.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: xt(i.value),
            height: n ? "" : D,
            minHeight: n ? D : "",
            paddingTop: xt(e.paddingTop),
            paddingBottom: xt(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: $(() => (p.value, {
        transform: `translateY(${xt(h.value.sum(v.value))})`
      })),
      viewportItems: m,
      listElRef: d,
      itemsElRef: I(null),
      scrollTo: b,
      handleListResize: A,
      handleListScroll: B,
      handleListWheel: F,
      handleItemResize: k
    };
  },
  render() {
    const { itemResizable: e, keyField: t, keyToIndex: r, visibleItemsTag: o } = this;
    return f(Pr, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var i, a;
        return f("div", Ot(this.$attrs, {
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
                  const u = d[t], c = r.get(u), h = l != null ? f(os, {
                    index: c,
                    item: d
                  }) : void 0, p = s != null ? f(os, {
                    index: c,
                    item: d
                  }) : void 0, x = this.$slots.default({
                    item: d,
                    renderedCols: h,
                    renderedItemWithCols: p,
                    index: c
                  })[0];
                  return e ? f(Pr, {
                    key: u,
                    onResize: (v) => this.handleItemResize(u, v)
                  }, {
                    default: () => x
                  }) : (x.key = u, x);
                });
              }
            })
          ]) : (a = (i = this.$slots).empty) === null || a === void 0 ? void 0 : a.call(i)
        ]);
      }
    });
  }
}), Cn = "v-hidden", h0 = An("[v-hidden]", {
  display: "none!important"
}), is = ee({
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
      c.hasAttribute(Cn) && c.removeAttribute(Cn);
      const { children: h } = s;
      if (l.showAllItemsBeforeCalculate)
        for (const S of h)
          S.hasAttribute(Cn) && S.removeAttribute(Cn);
      const p = s.offsetWidth, x = [], v = t.tail ? u == null ? void 0 : u() : null;
      let m = v ? v.offsetWidth : 0, b = !1;
      const g = s.children.length - (t.tail ? 1 : 0);
      for (let S = 0; S < g - 1; ++S) {
        if (S < 0)
          continue;
        const w = h[S];
        if (b) {
          w.hasAttribute(Cn) || w.setAttribute(Cn, "");
          continue;
        } else w.hasAttribute(Cn) && w.removeAttribute(Cn);
        const k = w.offsetWidth;
        if (m += k, x[S] = k, m > p) {
          const { updateCounter: R } = e;
          for (let y = S; y >= 0; --y) {
            const B = g - 1 - y;
            R !== void 0 ? R(B) : c.textContent = `${B}`;
            const F = c.offsetWidth;
            if (m -= x[y], m + F <= p || y === 0) {
              b = !0, S = y - 1, v && (S === -1 ? (v.style.maxWidth = `${p - F}px`, v.style.boxSizing = "border-box") : v.style.maxWidth = "");
              const { onUpdateCount: A } = e;
              A && A(B);
              break;
            }
          }
        }
      }
      const { onUpdateOverflow: C } = e;
      b ? C !== void 0 && C(!0) : (C !== void 0 && C(!1), c.setAttribute(Cn, ""));
    }
    const a = ir();
    return h0.mount({
      id: "vueuc/overflow",
      head: !0,
      anchorMetaName: qa,
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
    return vt(() => this.sync({
      showAllItemsBeforeCalculate: !1
    })), f("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      wn(e, "default"),
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
function qd(e) {
  return e instanceof HTMLElement;
}
function Gd(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const r = e.childNodes[t];
    if (qd(r) && (Yd(r) || Gd(r)))
      return !0;
  }
  return !1;
}
function Xd(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const r = e.childNodes[t];
    if (qd(r) && (Yd(r) || Xd(r)))
      return !0;
  }
  return !1;
}
function Yd(e) {
  if (!v0(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function v0(e) {
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
let Vr = [];
const Zd = ee({
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
    const t = pn(), r = I(null), o = I(null);
    let i = !1, a = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function s() {
      return Vr[Vr.length - 1] === t;
    }
    function d(b) {
      var g;
      b.code === "Escape" && s() && ((g = e.onEsc) === null || g === void 0 || g.call(e, b));
    }
    Ft(() => {
      He(() => e.active, (b) => {
        b ? (h(), Ke("keydown", document, d)) : (We("keydown", document, d), i && p());
      }, {
        immediate: !0
      });
    }), kt(() => {
      We("keydown", document, d), i && p();
    });
    function u(b) {
      if (!a && s()) {
        const g = c();
        if (g === null || g.contains(Fr(b)))
          return;
        x("first");
      }
    }
    function c() {
      const b = r.value;
      if (b === null)
        return null;
      let g = b;
      for (; g = g.nextSibling, !(g === null || g instanceof Element && g.tagName === "DIV"); )
        ;
      return g;
    }
    function h() {
      var b;
      if (!e.disabled) {
        if (Vr.push(t), e.autoFocus) {
          const { initialFocusTo: g } = e;
          g === void 0 ? x("first") : (b = Vl(g)) === null || b === void 0 || b.focus({ preventScroll: !0 });
        }
        i = !0, document.addEventListener("focus", u, !0);
      }
    }
    function p() {
      var b;
      if (e.disabled || (document.removeEventListener("focus", u, !0), Vr = Vr.filter((C) => C !== t), s()))
        return;
      const { finalFocusTo: g } = e;
      g !== void 0 ? (b = Vl(g)) === null || b === void 0 || b.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (a = !0, l.focus({ preventScroll: !0 }), a = !1);
    }
    function x(b) {
      if (s() && e.active) {
        const g = r.value, C = o.value;
        if (g !== null && C !== null) {
          const S = c();
          if (S == null || S === C) {
            a = !0, g.focus({ preventScroll: !0 }), a = !1;
            return;
          }
          a = !0;
          const w = b === "first" ? Gd(S) : Xd(S);
          a = !1, w || (a = !0, g.focus({ preventScroll: !0 }), a = !1);
        }
      }
    }
    function v(b) {
      if (a)
        return;
      const g = c();
      g !== null && (b.relatedTarget !== null && g.contains(b.relatedTarget) ? x("last") : x("first"));
    }
    function m(b) {
      a || (b.relatedTarget !== null && b.relatedTarget === r.value ? x("last") : x("first"));
    }
    return {
      focusableStartRef: r,
      focusableEndRef: o,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: v,
      handleEndFocus: m
    };
  },
  render() {
    const { default: e } = this.$slots;
    if (e === void 0)
      return null;
    if (this.disabled)
      return e();
    const { active: t, focusableStyle: r } = this;
    return f(_e, null, [
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
function Jd(e, t) {
  t && (Ft(() => {
    const {
      value: r
    } = e;
    r && to.registerHandler(r, t);
  }), He(e, (r, o) => {
    o && to.unregisterHandler(o);
  }, {
    deep: !1
  }), kt(() => {
    const {
      value: r
    } = e;
    r && to.unregisterHandler(r);
  }));
}
function Yo(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const p0 = /^(\d|\.)+$/, as = /(\d|\.)+/;
function Ct(e, {
  c: t = 1,
  offset: r = 0,
  attachPx: o = !0
} = {}) {
  if (typeof e == "number") {
    const i = (e + r) * t;
    return i === 0 ? "0" : `${i}px`;
  } else if (typeof e == "string")
    if (p0.test(e)) {
      const i = (Number(e) + r) * t;
      return o ? i === 0 ? "0" : `${i}px` : `${i}`;
    } else {
      const i = as.exec(e);
      return i ? e.replace(as, String((Number(i[0]) + r) * t)) : e;
    }
  return e;
}
function ls(e) {
  const {
    left: t,
    right: r,
    top: o,
    bottom: i
  } = Nt(e);
  return `${o} ${t} ${i} ${r}`;
}
function g0(e, t) {
  if (!e) return;
  const r = document.createElement("a");
  r.href = e, t !== void 0 && (r.download = t), document.body.appendChild(r), r.click(), document.body.removeChild(r);
}
let Wi;
function m0() {
  return Wi === void 0 && (Wi = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Wi;
}
const Qd = /* @__PURE__ */ new WeakSet();
function b0(e) {
  Qd.add(e);
}
function x0(e) {
  return !Qd.has(e);
}
function ss(e) {
  switch (typeof e) {
    case "string":
      return e || void 0;
    case "number":
      return String(e);
    default:
      return;
  }
}
function ds(e) {
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
const us = /* @__PURE__ */ new Set();
function at(e, t) {
  const r = `[naive/${e}]: ${t}`;
  us.has(r) || (us.add(r), console.error(r));
}
function Rt(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function In(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function ne(e, ...t) {
  if (Array.isArray(e))
    e.forEach((r) => ne(r, ...t));
  else
    return e(...t);
}
function eu(e) {
  return (t) => {
    t ? e.value = t.$el : e.value = null;
  };
}
function co(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(Ht(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        co(o, t, r);
        return;
      }
      if (o.type === _e) {
        if (o.children === null) return;
        Array.isArray(o.children) && co(o.children, t, r);
      } else {
        if (o.type === Oa && t) return;
        r.push(o);
      }
    }
  }), r;
}
function C0(e, t = "default", r = void 0) {
  const o = e[t];
  if (!o)
    return Rt("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const i = co(o(r));
  return i.length === 1 ? i[0] : (Rt("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function y0(e, t, r) {
  if (!t)
    return null;
  const o = co(t(r));
  return o.length === 1 ? o[0] : (Rt("getFirstSlotVNode", `slot[${e}] should have exactly one child`), null);
}
function w0(e, t = "default", r = []) {
  const i = e.$slots[t];
  return i === void 0 ? r : i();
}
function Sn(e, t = [], r) {
  const o = {};
  return t.forEach((i) => {
    o[i] = e[i];
  }), Object.assign(o, r);
}
function Tn(e) {
  return Object.keys(e);
}
function no(e) {
  const t = e.filter((r) => r !== void 0);
  if (t.length !== 0)
    return t.length === 1 ? t[0] : (r) => {
      e.forEach((o) => {
        o && o(r);
      });
    };
}
function ar(e, t = [], r) {
  const o = {};
  return Object.getOwnPropertyNames(e).forEach((a) => {
    t.includes(a) || (o[a] = e[a]);
  }), Object.assign(o, r);
}
function pt(e, ...t) {
  return typeof e == "function" ? e(...t) : typeof e == "string" ? Ht(e) : typeof e == "number" ? Ht(String(e)) : null;
}
function en(e) {
  return e.some((t) => Sf(t) ? !(t.type === Oa || t.type === _e && !en(t.children)) : !0) ? e : null;
}
function Zt(e, t) {
  return e && en(e()) || t();
}
function da(e, t, r) {
  return e && en(e(t)) || r(t);
}
function je(e, t) {
  const r = e && en(e());
  return t(r || null);
}
function S0(e, t, r) {
  const o = e && en(e(t));
  return r(o || null);
}
function Sr(e) {
  return !(e && en(e()));
}
const ua = ee({
  render() {
    var e, t;
    return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
}), ln = "n-config-provider", Zo = "n";
function Ae(e = {}, t = {
  defaultBordered: !0
}) {
  const r = ge(ln, null);
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
    mergedClsPrefixRef: r ? r.mergedClsPrefixRef : xd(Zo),
    namespaceRef: $(() => r == null ? void 0 : r.mergedNamespaceRef.value)
  };
}
function tu() {
  const e = ge(ln, null);
  return e ? e.mergedClsPrefixRef : xd(Zo);
}
function Ye(e, t, r, o) {
  r || In("useThemeClass", "cssVarsRef is not passed");
  const i = ge(ln, null), a = i == null ? void 0 : i.mergedThemeHashRef, l = i == null ? void 0 : i.styleMountTarget, s = I(""), d = ir();
  let u;
  const c = `__${e}`, h = () => {
    let p = c;
    const x = t ? t.value : void 0, v = a == null ? void 0 : a.value;
    v && (p += `-${v}`), x && (p += `-${x}`);
    const {
      themeOverrides: m,
      builtinThemeOverrides: b
    } = o;
    m && (p += `-${ao(JSON.stringify(m))}`), b && (p += `-${ao(JSON.stringify(b))}`), s.value = p, u = () => {
      const g = r.value;
      let C = "";
      for (const S in g)
        C += `${S}: ${g[S]};`;
      O(`.${p}`, C).mount({
        id: p,
        ssr: d,
        parent: l
      }), u = void 0;
    };
  };
  return tt(() => {
    h();
  }), {
    themeClass: s,
    onRender: () => {
      u == null || u();
    }
  };
}
const ca = "n-form-item";
function Ln(e, {
  defaultSize: t = "medium",
  mergedSize: r,
  mergedDisabled: o
} = {}) {
  const i = ge(ca, null);
  Ee(ca, null);
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
const B0 = {
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
}, k0 = {
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
function Br(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
function cn(e) {
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
function fn(e) {
  return (t, r = {}) => {
    const o = r.width, i = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const l = a[0], s = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(s) ? F0(s, (h) => h.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      R0(s, (h) => h.test(l))
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
function R0(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function F0(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function nu(e) {
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
function P0(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
let z0 = {};
function $0() {
  return z0;
}
function cs(e, t) {
  var s, d, u, c;
  const r = $0(), o = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : d.weekStartsOn) ?? r.weekStartsOn ?? ((c = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = P0(e), a = i.getDay(), l = (a < o ? 7 : 0) + a - o;
  return i.setDate(i.getDate() - l), i.setHours(0, 0, 0, 0), i;
}
function A0(e, t, r) {
  const o = cs(e, r), i = cs(t, r);
  return +o == +i;
}
const D0 = {
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
}, E0 = (e, t, r) => {
  let o;
  const i = D0[e];
  return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
}, T0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, O0 = (e, t, r, o) => T0[e], M0 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, I0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, L0 = {
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
}, N0 = {
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
}, H0 = {
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
}, j0 = {
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
}, _0 = (e, t) => {
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
}, W0 = {
  ordinalNumber: _0,
  era: cn({
    values: M0,
    defaultWidth: "wide"
  }),
  quarter: cn({
    values: I0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: cn({
    values: L0,
    defaultWidth: "wide"
  }),
  day: cn({
    values: N0,
    defaultWidth: "wide"
  }),
  dayPeriod: cn({
    values: H0,
    defaultWidth: "wide",
    formattingValues: j0,
    defaultFormattingWidth: "wide"
  })
}, V0 = /^(\d+)(th|st|nd|rd)?/i, K0 = /\d+/i, U0 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, q0 = {
  any: [/^b/i, /^(a|c)/i]
}, G0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, X0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Y0 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Z0 = {
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
}, J0 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Q0 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, ev = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, tv = {
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
}, nv = {
  ordinalNumber: nu({
    matchPattern: V0,
    parsePattern: K0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: fn({
    matchPatterns: U0,
    defaultMatchWidth: "wide",
    parsePatterns: q0,
    defaultParseWidth: "any"
  }),
  quarter: fn({
    matchPatterns: G0,
    defaultMatchWidth: "wide",
    parsePatterns: X0,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: fn({
    matchPatterns: Y0,
    defaultMatchWidth: "wide",
    parsePatterns: Z0,
    defaultParseWidth: "any"
  }),
  day: fn({
    matchPatterns: J0,
    defaultMatchWidth: "wide",
    parsePatterns: Q0,
    defaultParseWidth: "any"
  }),
  dayPeriod: fn({
    matchPatterns: ev,
    defaultMatchWidth: "any",
    parsePatterns: tv,
    defaultParseWidth: "any"
  })
}, rv = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ov = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, iv = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, av = {
  date: Br({
    formats: rv,
    defaultWidth: "full"
  }),
  time: Br({
    formats: ov,
    defaultWidth: "full"
  }),
  dateTime: Br({
    formats: iv,
    defaultWidth: "full"
  })
}, lv = {
  code: "en-US",
  formatDistance: E0,
  formatLong: av,
  formatRelative: O0,
  localize: W0,
  match: nv,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, sv = {
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
}, dv = (e, t, r) => {
  let o;
  const i = sv[e];
  return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", String(t)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? o + "内" : o + "前" : o;
}, uv = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, cv = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, fv = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, hv = {
  date: Br({
    formats: uv,
    defaultWidth: "full"
  }),
  time: Br({
    formats: cv,
    defaultWidth: "full"
  }),
  dateTime: Br({
    formats: fv,
    defaultWidth: "full"
  })
};
function fs(e, t, r) {
  const o = "eeee p";
  return A0(e, t, r) ? o : e.getTime() > t.getTime() ? "'下个'" + o : "'上个'" + o;
}
const vv = {
  lastWeek: fs,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: fs,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, pv = (e, t, r, o) => {
  const i = vv[e];
  return typeof i == "function" ? i(t, r, o) : i;
}, gv = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, mv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, bv = {
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
}, xv = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, Cv = {
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
}, yv = {
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
}, wv = (e, t) => {
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
}, Sv = {
  ordinalNumber: wv,
  era: cn({
    values: gv,
    defaultWidth: "wide"
  }),
  quarter: cn({
    values: mv,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: cn({
    values: bv,
    defaultWidth: "wide"
  }),
  day: cn({
    values: xv,
    defaultWidth: "wide"
  }),
  dayPeriod: cn({
    values: Cv,
    defaultWidth: "wide",
    formattingValues: yv,
    defaultFormattingWidth: "wide"
  })
}, Bv = /^(第\s*)?\d+(日|时|分|秒)?/i, kv = /\d+/i, Rv = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, Fv = {
  any: [/^(前)/i, /^(公元)/i]
}, Pv = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, zv = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, $v = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, Av = {
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
}, Dv = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, Ev = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, Tv = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, Ov = {
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
}, Mv = {
  ordinalNumber: nu({
    matchPattern: Bv,
    parsePattern: kv,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: fn({
    matchPatterns: Rv,
    defaultMatchWidth: "wide",
    parsePatterns: Fv,
    defaultParseWidth: "any"
  }),
  quarter: fn({
    matchPatterns: Pv,
    defaultMatchWidth: "wide",
    parsePatterns: zv,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: fn({
    matchPatterns: $v,
    defaultMatchWidth: "wide",
    parsePatterns: Av,
    defaultParseWidth: "any"
  }),
  day: fn({
    matchPatterns: Dv,
    defaultMatchWidth: "wide",
    parsePatterns: Ev,
    defaultParseWidth: "any"
  }),
  dayPeriod: fn({
    matchPatterns: Tv,
    defaultMatchWidth: "any",
    parsePatterns: Ov,
    defaultParseWidth: "any"
  })
}, Iv = {
  code: "zh-CN",
  formatDistance: dv,
  formatLong: hv,
  formatRelative: pv,
  localize: Sv,
  match: Mv,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Lv = {
  name: "en-US",
  locale: lv
}, Nv = {
  name: "zh-CN",
  locale: Iv
};
var ru = typeof global == "object" && global && global.Object === Object && global, Hv = typeof self == "object" && self && self.Object === Object && self, mn = ru || Hv || Function("return this")(), On = mn.Symbol, ou = Object.prototype, jv = ou.hasOwnProperty, _v = ou.toString, Kr = On ? On.toStringTag : void 0;
function Wv(e) {
  var t = jv.call(e, Kr), r = e[Kr];
  try {
    e[Kr] = void 0;
    var o = !0;
  } catch {
  }
  var i = _v.call(e);
  return o && (t ? e[Kr] = r : delete e[Kr]), i;
}
var Vv = Object.prototype, Kv = Vv.toString;
function Uv(e) {
  return Kv.call(e);
}
var qv = "[object Null]", Gv = "[object Undefined]", hs = On ? On.toStringTag : void 0;
function lr(e) {
  return e == null ? e === void 0 ? Gv : qv : hs && hs in Object(e) ? Wv(e) : Uv(e);
}
function Mn(e) {
  return e != null && typeof e == "object";
}
var Xv = "[object Symbol]";
function Za(e) {
  return typeof e == "symbol" || Mn(e) && lr(e) == Xv;
}
function iu(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, i = Array(o); ++r < o; )
    i[r] = t(e[r], r, e);
  return i;
}
var nn = Array.isArray, Yv = 1 / 0, vs = On ? On.prototype : void 0, ps = vs ? vs.toString : void 0;
function au(e) {
  if (typeof e == "string")
    return e;
  if (nn(e))
    return iu(e, au) + "";
  if (Za(e))
    return ps ? ps.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Yv ? "-0" : t;
}
function Nn(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function Ja(e) {
  return e;
}
var Zv = "[object AsyncFunction]", Jv = "[object Function]", Qv = "[object GeneratorFunction]", ep = "[object Proxy]";
function Qa(e) {
  if (!Nn(e))
    return !1;
  var t = lr(e);
  return t == Jv || t == Qv || t == Zv || t == ep;
}
var Vi = mn["__core-js_shared__"], gs = function() {
  var e = /[^.]+$/.exec(Vi && Vi.keys && Vi.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function tp(e) {
  return !!gs && gs in e;
}
var np = Function.prototype, rp = np.toString;
function sr(e) {
  if (e != null) {
    try {
      return rp.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var op = /[\\^$.*+?()[\]{}|]/g, ip = /^\[object .+?Constructor\]$/, ap = Function.prototype, lp = Object.prototype, sp = ap.toString, dp = lp.hasOwnProperty, up = RegExp(
  "^" + sp.call(dp).replace(op, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function cp(e) {
  if (!Nn(e) || tp(e))
    return !1;
  var t = Qa(e) ? up : ip;
  return t.test(sr(e));
}
function fp(e, t) {
  return e == null ? void 0 : e[t];
}
function dr(e, t) {
  var r = fp(e, t);
  return cp(r) ? r : void 0;
}
var fa = dr(mn, "WeakMap"), ms = Object.create, hp = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!Nn(t))
      return {};
    if (ms)
      return ms(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function vp(e, t, r) {
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
function pp(e, t) {
  var r = -1, o = e.length;
  for (t || (t = Array(o)); ++r < o; )
    t[r] = e[r];
  return t;
}
var gp = 800, mp = 16, bp = Date.now;
function xp(e) {
  var t = 0, r = 0;
  return function() {
    var o = bp(), i = mp - (o - r);
    if (r = o, i > 0) {
      if (++t >= gp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function Cp(e) {
  return function() {
    return e;
  };
}
var Jo = function() {
  try {
    var e = dr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), yp = Jo ? function(e, t) {
  return Jo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Cp(t),
    writable: !0
  });
} : Ja, wp = xp(yp), Sp = 9007199254740991, Bp = /^(?:0|[1-9]\d*)$/;
function el(e, t) {
  var r = typeof e;
  return t = t ?? Sp, !!t && (r == "number" || r != "symbol" && Bp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function tl(e, t, r) {
  t == "__proto__" && Jo ? Jo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function wo(e, t) {
  return e === t || e !== e && t !== t;
}
var kp = Object.prototype, Rp = kp.hasOwnProperty;
function Fp(e, t, r) {
  var o = e[t];
  (!(Rp.call(e, t) && wo(o, r)) || r === void 0 && !(t in e)) && tl(e, t, r);
}
function Pp(e, t, r, o) {
  var i = !r;
  r || (r = {});
  for (var a = -1, l = t.length; ++a < l; ) {
    var s = t[a], d = void 0;
    d === void 0 && (d = e[s]), i ? tl(r, s, d) : Fp(r, s, d);
  }
  return r;
}
var bs = Math.max;
function zp(e, t, r) {
  return t = bs(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, i = -1, a = bs(o.length - t, 0), l = Array(a); ++i < a; )
      l[i] = o[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = o[i];
    return s[t] = r(l), vp(e, this, s);
  };
}
function $p(e, t) {
  return wp(zp(e, t, Ja), e + "");
}
var Ap = 9007199254740991;
function nl(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Ap;
}
function Mr(e) {
  return e != null && nl(e.length) && !Qa(e);
}
function Dp(e, t, r) {
  if (!Nn(r))
    return !1;
  var o = typeof t;
  return (o == "number" ? Mr(r) && el(t, r.length) : o == "string" && t in r) ? wo(r[t], e) : !1;
}
function Ep(e) {
  return $p(function(t, r) {
    var o = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, l = i > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, l && Dp(r[0], r[1], l) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++o < i; ) {
      var s = r[o];
      s && e(t, s, o, a);
    }
    return t;
  });
}
var Tp = Object.prototype;
function rl(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || Tp;
  return e === r;
}
function Op(e, t) {
  for (var r = -1, o = Array(e); ++r < e; )
    o[r] = t(r);
  return o;
}
var Mp = "[object Arguments]";
function xs(e) {
  return Mn(e) && lr(e) == Mp;
}
var lu = Object.prototype, Ip = lu.hasOwnProperty, Lp = lu.propertyIsEnumerable, Qo = xs(/* @__PURE__ */ function() {
  return arguments;
}()) ? xs : function(e) {
  return Mn(e) && Ip.call(e, "callee") && !Lp.call(e, "callee");
};
function Np() {
  return !1;
}
var su = typeof exports == "object" && exports && !exports.nodeType && exports, Cs = su && typeof module == "object" && module && !module.nodeType && module, Hp = Cs && Cs.exports === su, ys = Hp ? mn.Buffer : void 0, jp = ys ? ys.isBuffer : void 0, ei = jp || Np, _p = "[object Arguments]", Wp = "[object Array]", Vp = "[object Boolean]", Kp = "[object Date]", Up = "[object Error]", qp = "[object Function]", Gp = "[object Map]", Xp = "[object Number]", Yp = "[object Object]", Zp = "[object RegExp]", Jp = "[object Set]", Qp = "[object String]", eg = "[object WeakMap]", tg = "[object ArrayBuffer]", ng = "[object DataView]", rg = "[object Float32Array]", og = "[object Float64Array]", ig = "[object Int8Array]", ag = "[object Int16Array]", lg = "[object Int32Array]", sg = "[object Uint8Array]", dg = "[object Uint8ClampedArray]", ug = "[object Uint16Array]", cg = "[object Uint32Array]", dt = {};
dt[rg] = dt[og] = dt[ig] = dt[ag] = dt[lg] = dt[sg] = dt[dg] = dt[ug] = dt[cg] = !0;
dt[_p] = dt[Wp] = dt[tg] = dt[Vp] = dt[ng] = dt[Kp] = dt[Up] = dt[qp] = dt[Gp] = dt[Xp] = dt[Yp] = dt[Zp] = dt[Jp] = dt[Qp] = dt[eg] = !1;
function fg(e) {
  return Mn(e) && nl(e.length) && !!dt[lr(e)];
}
function hg(e) {
  return function(t) {
    return e(t);
  };
}
var du = typeof exports == "object" && exports && !exports.nodeType && exports, ro = du && typeof module == "object" && module && !module.nodeType && module, vg = ro && ro.exports === du, Ki = vg && ru.process, ws = function() {
  try {
    var e = ro && ro.require && ro.require("util").types;
    return e || Ki && Ki.binding && Ki.binding("util");
  } catch {
  }
}(), Ss = ws && ws.isTypedArray, ol = Ss ? hg(Ss) : fg, pg = Object.prototype, gg = pg.hasOwnProperty;
function uu(e, t) {
  var r = nn(e), o = !r && Qo(e), i = !r && !o && ei(e), a = !r && !o && !i && ol(e), l = r || o || i || a, s = l ? Op(e.length, String) : [], d = s.length;
  for (var u in e)
    (t || gg.call(e, u)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    el(u, d))) && s.push(u);
  return s;
}
function cu(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var mg = cu(Object.keys, Object), bg = Object.prototype, xg = bg.hasOwnProperty;
function Cg(e) {
  if (!rl(e))
    return mg(e);
  var t = [];
  for (var r in Object(e))
    xg.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function il(e) {
  return Mr(e) ? uu(e) : Cg(e);
}
function yg(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var wg = Object.prototype, Sg = wg.hasOwnProperty;
function Bg(e) {
  if (!Nn(e))
    return yg(e);
  var t = rl(e), r = [];
  for (var o in e)
    o == "constructor" && (t || !Sg.call(e, o)) || r.push(o);
  return r;
}
function fu(e) {
  return Mr(e) ? uu(e, !0) : Bg(e);
}
var kg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, Rg = /^\w*$/;
function al(e, t) {
  if (nn(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Za(e) ? !0 : Rg.test(e) || !kg.test(e) || t != null && e in Object(t);
}
var fo = dr(Object, "create");
function Fg() {
  this.__data__ = fo ? fo(null) : {}, this.size = 0;
}
function Pg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var zg = "__lodash_hash_undefined__", $g = Object.prototype, Ag = $g.hasOwnProperty;
function Dg(e) {
  var t = this.__data__;
  if (fo) {
    var r = t[e];
    return r === zg ? void 0 : r;
  }
  return Ag.call(t, e) ? t[e] : void 0;
}
var Eg = Object.prototype, Tg = Eg.hasOwnProperty;
function Og(e) {
  var t = this.__data__;
  return fo ? t[e] !== void 0 : Tg.call(t, e);
}
var Mg = "__lodash_hash_undefined__";
function Ig(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = fo && t === void 0 ? Mg : t, this;
}
function Qn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Qn.prototype.clear = Fg;
Qn.prototype.delete = Pg;
Qn.prototype.get = Dg;
Qn.prototype.has = Og;
Qn.prototype.set = Ig;
function Lg() {
  this.__data__ = [], this.size = 0;
}
function hi(e, t) {
  for (var r = e.length; r--; )
    if (wo(e[r][0], t))
      return r;
  return -1;
}
var Ng = Array.prototype, Hg = Ng.splice;
function jg(e) {
  var t = this.__data__, r = hi(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : Hg.call(t, r, 1), --this.size, !0;
}
function _g(e) {
  var t = this.__data__, r = hi(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Wg(e) {
  return hi(this.__data__, e) > -1;
}
function Vg(e, t) {
  var r = this.__data__, o = hi(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function Bn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Bn.prototype.clear = Lg;
Bn.prototype.delete = jg;
Bn.prototype.get = _g;
Bn.prototype.has = Wg;
Bn.prototype.set = Vg;
var ho = dr(mn, "Map");
function Kg() {
  this.size = 0, this.__data__ = {
    hash: new Qn(),
    map: new (ho || Bn)(),
    string: new Qn()
  };
}
function Ug(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function vi(e, t) {
  var r = e.__data__;
  return Ug(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function qg(e) {
  var t = vi(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Gg(e) {
  return vi(this, e).get(e);
}
function Xg(e) {
  return vi(this, e).has(e);
}
function Yg(e, t) {
  var r = vi(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function kn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
kn.prototype.clear = Kg;
kn.prototype.delete = qg;
kn.prototype.get = Gg;
kn.prototype.has = Xg;
kn.prototype.set = Yg;
var Zg = "Expected a function";
function ll(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Zg);
  var r = function() {
    var o = arguments, i = t ? t.apply(this, o) : o[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var l = e.apply(this, o);
    return r.cache = a.set(i, l) || a, l;
  };
  return r.cache = new (ll.Cache || kn)(), r;
}
ll.Cache = kn;
var Jg = 500;
function Qg(e) {
  var t = ll(e, function(o) {
    return r.size === Jg && r.clear(), o;
  }), r = t.cache;
  return t;
}
var em = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, tm = /\\(\\)?/g, nm = Qg(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(em, function(r, o, i, a) {
    t.push(i ? a.replace(tm, "$1") : o || r);
  }), t;
});
function hu(e) {
  return e == null ? "" : au(e);
}
function vu(e, t) {
  return nn(e) ? e : al(e, t) ? [e] : nm(hu(e));
}
var rm = 1 / 0;
function pi(e) {
  if (typeof e == "string" || Za(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -rm ? "-0" : t;
}
function pu(e, t) {
  t = vu(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[pi(t[r++])];
  return r && r == o ? e : void 0;
}
function vo(e, t, r) {
  var o = e == null ? void 0 : pu(e, t);
  return o === void 0 ? r : o;
}
function om(e, t) {
  for (var r = -1, o = t.length, i = e.length; ++r < o; )
    e[i + r] = t[r];
  return e;
}
var gu = cu(Object.getPrototypeOf, Object), im = "[object Object]", am = Function.prototype, lm = Object.prototype, mu = am.toString, sm = lm.hasOwnProperty, dm = mu.call(Object);
function um(e) {
  if (!Mn(e) || lr(e) != im)
    return !1;
  var t = gu(e);
  if (t === null)
    return !0;
  var r = sm.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && mu.call(r) == dm;
}
function cm(e, t, r) {
  var o = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++o < i; )
    a[o] = e[o + t];
  return a;
}
function fm(e, t, r) {
  var o = e.length;
  return r = r === void 0 ? o : r, !t && r >= o ? e : cm(e, t, r);
}
var hm = "\\ud800-\\udfff", vm = "\\u0300-\\u036f", pm = "\\ufe20-\\ufe2f", gm = "\\u20d0-\\u20ff", mm = vm + pm + gm, bm = "\\ufe0e\\ufe0f", xm = "\\u200d", Cm = RegExp("[" + xm + hm + mm + bm + "]");
function bu(e) {
  return Cm.test(e);
}
function ym(e) {
  return e.split("");
}
var xu = "\\ud800-\\udfff", wm = "\\u0300-\\u036f", Sm = "\\ufe20-\\ufe2f", Bm = "\\u20d0-\\u20ff", km = wm + Sm + Bm, Rm = "\\ufe0e\\ufe0f", Fm = "[" + xu + "]", ha = "[" + km + "]", va = "\\ud83c[\\udffb-\\udfff]", Pm = "(?:" + ha + "|" + va + ")", Cu = "[^" + xu + "]", yu = "(?:\\ud83c[\\udde6-\\uddff]){2}", wu = "[\\ud800-\\udbff][\\udc00-\\udfff]", zm = "\\u200d", Su = Pm + "?", Bu = "[" + Rm + "]?", $m = "(?:" + zm + "(?:" + [Cu, yu, wu].join("|") + ")" + Bu + Su + ")*", Am = Bu + Su + $m, Dm = "(?:" + [Cu + ha + "?", ha, yu, wu, Fm].join("|") + ")", Em = RegExp(va + "(?=" + va + ")|" + Dm + Am, "g");
function Tm(e) {
  return e.match(Em) || [];
}
function Om(e) {
  return bu(e) ? Tm(e) : ym(e);
}
function Mm(e) {
  return function(t) {
    t = hu(t);
    var r = bu(t) ? Om(t) : void 0, o = r ? r[0] : t.charAt(0), i = r ? fm(r, 1).join("") : t.slice(1);
    return o[e]() + i;
  };
}
var Im = Mm("toUpperCase");
function Lm() {
  this.__data__ = new Bn(), this.size = 0;
}
function Nm(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Hm(e) {
  return this.__data__.get(e);
}
function jm(e) {
  return this.__data__.has(e);
}
var _m = 200;
function Wm(e, t) {
  var r = this.__data__;
  if (r instanceof Bn) {
    var o = r.__data__;
    if (!ho || o.length < _m - 1)
      return o.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new kn(o);
  }
  return r.set(e, t), this.size = r.size, this;
}
function hn(e) {
  var t = this.__data__ = new Bn(e);
  this.size = t.size;
}
hn.prototype.clear = Lm;
hn.prototype.delete = Nm;
hn.prototype.get = Hm;
hn.prototype.has = jm;
hn.prototype.set = Wm;
var ku = typeof exports == "object" && exports && !exports.nodeType && exports, Bs = ku && typeof module == "object" && module && !module.nodeType && module, Vm = Bs && Bs.exports === ku, ks = Vm ? mn.Buffer : void 0;
ks && ks.allocUnsafe;
function Km(e, t) {
  return e.slice();
}
function Um(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, i = 0, a = []; ++r < o; ) {
    var l = e[r];
    t(l, r, e) && (a[i++] = l);
  }
  return a;
}
function qm() {
  return [];
}
var Gm = Object.prototype, Xm = Gm.propertyIsEnumerable, Rs = Object.getOwnPropertySymbols, Ym = Rs ? function(e) {
  return e == null ? [] : (e = Object(e), Um(Rs(e), function(t) {
    return Xm.call(e, t);
  }));
} : qm;
function Zm(e, t, r) {
  var o = t(e);
  return nn(e) ? o : om(o, r(e));
}
function Fs(e) {
  return Zm(e, il, Ym);
}
var pa = dr(mn, "DataView"), ga = dr(mn, "Promise"), ma = dr(mn, "Set"), Ps = "[object Map]", Jm = "[object Object]", zs = "[object Promise]", $s = "[object Set]", As = "[object WeakMap]", Ds = "[object DataView]", Qm = sr(pa), eb = sr(ho), tb = sr(ga), nb = sr(ma), rb = sr(fa), $n = lr;
(pa && $n(new pa(new ArrayBuffer(1))) != Ds || ho && $n(new ho()) != Ps || ga && $n(ga.resolve()) != zs || ma && $n(new ma()) != $s || fa && $n(new fa()) != As) && ($n = function(e) {
  var t = lr(e), r = t == Jm ? e.constructor : void 0, o = r ? sr(r) : "";
  if (o)
    switch (o) {
      case Qm:
        return Ds;
      case eb:
        return Ps;
      case tb:
        return zs;
      case nb:
        return $s;
      case rb:
        return As;
    }
  return t;
});
var ti = mn.Uint8Array;
function ob(e) {
  var t = new e.constructor(e.byteLength);
  return new ti(t).set(new ti(e)), t;
}
function ib(e, t) {
  var r = ob(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function ab(e) {
  return typeof e.constructor == "function" && !rl(e) ? hp(gu(e)) : {};
}
var lb = "__lodash_hash_undefined__";
function sb(e) {
  return this.__data__.set(e, lb), this;
}
function db(e) {
  return this.__data__.has(e);
}
function ni(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new kn(); ++t < r; )
    this.add(e[t]);
}
ni.prototype.add = ni.prototype.push = sb;
ni.prototype.has = db;
function ub(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function cb(e, t) {
  return e.has(t);
}
var fb = 1, hb = 2;
function Ru(e, t, r, o, i, a) {
  var l = r & fb, s = e.length, d = t.length;
  if (s != d && !(l && d > s))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var h = -1, p = !0, x = r & hb ? new ni() : void 0;
  for (a.set(e, t), a.set(t, e); ++h < s; ) {
    var v = e[h], m = t[h];
    if (o)
      var b = l ? o(m, v, h, t, e, a) : o(v, m, h, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      p = !1;
      break;
    }
    if (x) {
      if (!ub(t, function(g, C) {
        if (!cb(x, C) && (v === g || i(v, g, r, o, a)))
          return x.push(C);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === m || i(v, m, r, o, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
function vb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o, i) {
    r[++t] = [i, o];
  }), r;
}
function pb(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o) {
    r[++t] = o;
  }), r;
}
var gb = 1, mb = 2, bb = "[object Boolean]", xb = "[object Date]", Cb = "[object Error]", yb = "[object Map]", wb = "[object Number]", Sb = "[object RegExp]", Bb = "[object Set]", kb = "[object String]", Rb = "[object Symbol]", Fb = "[object ArrayBuffer]", Pb = "[object DataView]", Es = On ? On.prototype : void 0, Ui = Es ? Es.valueOf : void 0;
function zb(e, t, r, o, i, a, l) {
  switch (r) {
    case Pb:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case Fb:
      return !(e.byteLength != t.byteLength || !a(new ti(e), new ti(t)));
    case bb:
    case xb:
    case wb:
      return wo(+e, +t);
    case Cb:
      return e.name == t.name && e.message == t.message;
    case Sb:
    case kb:
      return e == t + "";
    case yb:
      var s = vb;
    case Bb:
      var d = o & gb;
      if (s || (s = pb), e.size != t.size && !d)
        return !1;
      var u = l.get(e);
      if (u)
        return u == t;
      o |= mb, l.set(e, t);
      var c = Ru(s(e), s(t), o, i, a, l);
      return l.delete(e), c;
    case Rb:
      if (Ui)
        return Ui.call(e) == Ui.call(t);
  }
  return !1;
}
var $b = 1, Ab = Object.prototype, Db = Ab.hasOwnProperty;
function Eb(e, t, r, o, i, a) {
  var l = r & $b, s = Fs(e), d = s.length, u = Fs(t), c = u.length;
  if (d != c && !l)
    return !1;
  for (var h = d; h--; ) {
    var p = s[h];
    if (!(l ? p in t : Db.call(t, p)))
      return !1;
  }
  var x = a.get(e), v = a.get(t);
  if (x && v)
    return x == t && v == e;
  var m = !0;
  a.set(e, t), a.set(t, e);
  for (var b = l; ++h < d; ) {
    p = s[h];
    var g = e[p], C = t[p];
    if (o)
      var S = l ? o(C, g, p, t, e, a) : o(g, C, p, e, t, a);
    if (!(S === void 0 ? g === C || i(g, C, r, o, a) : S)) {
      m = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (m && !b) {
    var w = e.constructor, k = t.constructor;
    w != k && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof k == "function" && k instanceof k) && (m = !1);
  }
  return a.delete(e), a.delete(t), m;
}
var Tb = 1, Ts = "[object Arguments]", Os = "[object Array]", Io = "[object Object]", Ob = Object.prototype, Ms = Ob.hasOwnProperty;
function Mb(e, t, r, o, i, a) {
  var l = nn(e), s = nn(t), d = l ? Os : $n(e), u = s ? Os : $n(t);
  d = d == Ts ? Io : d, u = u == Ts ? Io : u;
  var c = d == Io, h = u == Io, p = d == u;
  if (p && ei(e)) {
    if (!ei(t))
      return !1;
    l = !0, c = !1;
  }
  if (p && !c)
    return a || (a = new hn()), l || ol(e) ? Ru(e, t, r, o, i, a) : zb(e, t, d, r, o, i, a);
  if (!(r & Tb)) {
    var x = c && Ms.call(e, "__wrapped__"), v = h && Ms.call(t, "__wrapped__");
    if (x || v) {
      var m = x ? e.value() : e, b = v ? t.value() : t;
      return a || (a = new hn()), i(m, b, r, o, a);
    }
  }
  return p ? (a || (a = new hn()), Eb(e, t, r, o, i, a)) : !1;
}
function sl(e, t, r, o, i) {
  return e === t ? !0 : e == null || t == null || !Mn(e) && !Mn(t) ? e !== e && t !== t : Mb(e, t, r, o, sl, i);
}
var Ib = 1, Lb = 2;
function Nb(e, t, r, o) {
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
      var c = new hn(), h;
      if (!(h === void 0 ? sl(u, d, Ib | Lb, o, c) : h))
        return !1;
    }
  }
  return !0;
}
function Fu(e) {
  return e === e && !Nn(e);
}
function Hb(e) {
  for (var t = il(e), r = t.length; r--; ) {
    var o = t[r], i = e[o];
    t[r] = [o, i, Fu(i)];
  }
  return t;
}
function Pu(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function jb(e) {
  var t = Hb(e);
  return t.length == 1 && t[0][2] ? Pu(t[0][0], t[0][1]) : function(r) {
    return r === e || Nb(r, e, t);
  };
}
function _b(e, t) {
  return e != null && t in Object(e);
}
function Wb(e, t, r) {
  t = vu(t, e);
  for (var o = -1, i = t.length, a = !1; ++o < i; ) {
    var l = pi(t[o]);
    if (!(a = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return a || ++o != i ? a : (i = e == null ? 0 : e.length, !!i && nl(i) && el(l, i) && (nn(e) || Qo(e)));
}
function Vb(e, t) {
  return e != null && Wb(e, t, _b);
}
var Kb = 1, Ub = 2;
function qb(e, t) {
  return al(e) && Fu(t) ? Pu(pi(e), t) : function(r) {
    var o = vo(r, e);
    return o === void 0 && o === t ? Vb(r, e) : sl(t, o, Kb | Ub);
  };
}
function Gb(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Xb(e) {
  return function(t) {
    return pu(t, e);
  };
}
function Yb(e) {
  return al(e) ? Gb(pi(e)) : Xb(e);
}
function Zb(e) {
  return typeof e == "function" ? e : e == null ? Ja : typeof e == "object" ? nn(e) ? qb(e[0], e[1]) : jb(e) : Yb(e);
}
function Jb(e) {
  return function(t, r, o) {
    for (var i = -1, a = Object(t), l = o(t), s = l.length; s--; ) {
      var d = l[++i];
      if (r(a[d], d, a) === !1)
        break;
    }
    return t;
  };
}
var zu = Jb();
function Qb(e, t) {
  return e && zu(e, t, il);
}
function ex(e, t) {
  return function(r, o) {
    if (r == null)
      return r;
    if (!Mr(r))
      return e(r, o);
    for (var i = r.length, a = -1, l = Object(r); ++a < i && o(l[a], a, l) !== !1; )
      ;
    return r;
  };
}
var tx = ex(Qb);
function ba(e, t, r) {
  (r !== void 0 && !wo(e[t], r) || r === void 0 && !(t in e)) && tl(e, t, r);
}
function nx(e) {
  return Mn(e) && Mr(e);
}
function xa(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function rx(e) {
  return Pp(e, fu(e));
}
function ox(e, t, r, o, i, a, l) {
  var s = xa(e, r), d = xa(t, r), u = l.get(d);
  if (u) {
    ba(e, r, u);
    return;
  }
  var c = a ? a(s, d, r + "", e, t, l) : void 0, h = c === void 0;
  if (h) {
    var p = nn(d), x = !p && ei(d), v = !p && !x && ol(d);
    c = d, p || x || v ? nn(s) ? c = s : nx(s) ? c = pp(s) : x ? (h = !1, c = Km(d)) : v ? (h = !1, c = ib(d)) : c = [] : um(d) || Qo(d) ? (c = s, Qo(s) ? c = rx(s) : (!Nn(s) || Qa(s)) && (c = ab(d))) : h = !1;
  }
  h && (l.set(d, c), i(c, d, o, a, l), l.delete(d)), ba(e, r, c);
}
function $u(e, t, r, o, i) {
  e !== t && zu(t, function(a, l) {
    if (i || (i = new hn()), Nn(a))
      ox(e, t, l, r, $u, o, i);
    else {
      var s = o ? o(xa(e, l), a, l + "", e, t, i) : void 0;
      s === void 0 && (s = a), ba(e, l, s);
    }
  }, fu);
}
function ix(e, t) {
  var r = -1, o = Mr(e) ? Array(e.length) : [];
  return tx(e, function(i, a, l) {
    o[++r] = t(i, a, l);
  }), o;
}
function ax(e, t) {
  var r = nn(e) ? iu : ix;
  return r(e, Zb(t));
}
var Gr = Ep(function(e, t, r) {
  $u(e, t, r);
});
function er(e) {
  const {
    mergedLocaleRef: t,
    mergedDateLocaleRef: r
  } = ge(ln, null) || {}, o = $(() => {
    var a, l;
    return (l = (a = t == null ? void 0 : t.value) === null || a === void 0 ? void 0 : a[e]) !== null && l !== void 0 ? l : B0[e];
  });
  return {
    dateLocaleRef: $(() => {
      var a;
      return (a = r == null ? void 0 : r.value) !== null && a !== void 0 ? a : Lv;
    }),
    localeRef: o
  };
}
const zr = "naive-ui-style";
function Pt(e, t, r) {
  if (!t) return;
  const o = ir(), i = $(() => {
    const {
      value: s
    } = t;
    if (!s)
      return;
    const d = s[e];
    if (d)
      return d;
  }), a = ge(ln, null), l = () => {
    tt(() => {
      const {
        value: s
      } = r, d = `${s}${e}Rtl`;
      if (Gf(d, o)) return;
      const {
        value: u
      } = i;
      u && u.style.mount({
        id: d,
        head: !0,
        anchorMetaName: zr,
        props: {
          bPrefix: s ? `.${s}-` : void 0
        },
        ssr: o,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    });
  };
  return o ? l() : or(l), i;
}
const Hn = {
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
  fontSize: lx,
  fontFamily: sx,
  lineHeight: dx
} = Hn, Au = O("body", `
 margin: 0;
 font-size: ${lx};
 font-family: ${sx};
 line-height: ${dx};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [O("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function jn(e, t, r) {
  if (!t) {
    process.env.NODE_ENV !== "production" && In("use-style", "No style is specified.");
    return;
  }
  const o = ir(), i = ge(ln, null), a = () => {
    const l = r.value;
    t.mount({
      id: l === void 0 ? e : l + e,
      head: !0,
      anchorMetaName: zr,
      props: {
        bPrefix: l ? `.${l}-` : void 0
      },
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    }), i != null && i.preflightStyleDisabled || Au.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: zr,
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    });
  };
  o ? a() : or(a);
}
function ve(e, t, r, o, i, a) {
  const l = ir(), s = ge(ln, null);
  if (r) {
    const u = () => {
      const c = a == null ? void 0 : a.value;
      r.mount({
        id: c === void 0 ? t : c + t,
        head: !0,
        props: {
          bPrefix: c ? `.${c}-` : void 0
        },
        anchorMetaName: zr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || Au.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: zr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    l ? u() : or(u);
  }
  return $(() => {
    var u;
    const {
      theme: {
        common: c,
        self: h,
        peers: p = {}
      } = {},
      themeOverrides: x = {},
      builtinThemeOverrides: v = {}
    } = i, {
      common: m,
      peers: b
    } = x, {
      common: g = void 0,
      [e]: {
        common: C = void 0,
        self: S = void 0,
        peers: w = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: k = void 0,
      [e]: R = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: y,
      peers: B = {}
    } = R, F = Gr({}, c || C || g || o.common, k, y, m), A = Gr(
      // {}, executed every time, no need for empty obj
      (u = h || S || o.self) === null || u === void 0 ? void 0 : u(F),
      v,
      R,
      x
    );
    return {
      common: F,
      self: A,
      peers: Gr({}, o.peers, w, p),
      peerOverrides: Gr({}, v.peers, B, b)
    };
  });
}
ve.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const ux = z("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [O("svg", `
 height: 1em;
 width: 1em;
 `)]), bt = ee({
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
    jn("-base-icon", ux, oe(e, "clsPrefix"));
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
}), ur = ee({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: t
  }) {
    const r = Tr();
    return () => f(jt, {
      name: "icon-switch-transition",
      appear: r.value
    }, t);
  }
}), cx = ee({
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
function Ir(e, t) {
  const r = ee({
    render() {
      return t();
    }
  });
  return ee({
    name: Im(e),
    setup() {
      var o;
      const i = (o = ge(ln, null)) === null || o === void 0 ? void 0 : o.mergedIconsRef;
      return () => {
        var a;
        const l = (a = i == null ? void 0 : i.value) === null || a === void 0 ? void 0 : a[e];
        return l ? l() : f(r, null);
      };
    }
  });
}
const Is = ee({
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
}), fx = ee({
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
}), Du = ee({
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
}), hx = ee({
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
}), dl = ee({
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
}), vx = Ir("clear", () => f("svg", {
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
}))))), px = Ir("close", () => f("svg", {
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
}))))), gx = ee({
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
}), ul = Ir("error", () => f("svg", {
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
}))))), mx = ee({
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
}), bx = ee({
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
}), Ls = ee({
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
}), Ns = ee({
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
}), xx = ee({
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
}), Hs = ee({
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
}), ri = Ir("info", () => f("svg", {
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
}))))), js = ee({
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
}), cl = Ir("success", () => f("svg", {
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
}))))), gi = Ir("warning", () => f("svg", {
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
  cubicBezierEaseInOut: Cx
} = Hn;
function Xt({
  originalTransform: e = "",
  left: t = 0,
  top: r = 0,
  transition: o = `all .3s ${Cx} !important`
} = {}) {
  return [O("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${e} scale(0.75)`,
    left: t,
    top: r,
    opacity: 0
  }), O("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${e}`,
    left: t,
    top: r,
    opacity: 1
  }), O("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: t,
    top: r,
    transition: o
  })];
}
const yx = z("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [O(">", [T("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [O("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), O("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), T("placeholder", `
 display: flex;
 `), T("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Xt({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), Ca = ee({
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
    return jn("-base-clear", yx, oe(e, "clsPrefix")), {
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
    }, f(ur, null, {
      default: () => {
        var t, r;
        return this.show ? f("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, Zt(this.$slots.icon, () => [f(bt, {
          clsPrefix: e
        }, {
          default: () => f(vx, null)
        })])) : f("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (r = (t = this.$slots).placeholder) === null || r === void 0 ? void 0 : r.call(t));
      }
    }));
  }
}), wx = z("base-close", `
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
 `), O("&::before", `
 content: "";
 position: absolute;
 width: var(--n-close-size);
 height: var(--n-close-size);
 left: 50%;
 top: 50%;
 transform: translateY(-50%) translateX(-50%);
 transition: inherit;
 border-radius: inherit;
 `), Xe("disabled", [O("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), O("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), O("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), O("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), O("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), N("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), N("round", [O("&::before", `
 border-radius: 50%;
 `)])]), So = ee({
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
    return jn("-base-close", wx, oe(e, "clsPrefix")), () => {
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
      }, f(bt, {
        clsPrefix: t
      }, {
        default: () => f(px, null)
      }));
    };
  }
}), fl = ee({
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
      } = e, h = s ? Bf : jt, p = {
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
}), Sx = ee({
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
}), Bx = O([O("@keyframes rotator", `
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
 `, [Xt()]), T("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Xt({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), T("container", `
 animation: rotator 3s linear infinite both;
 `, [T("icon", `
 height: 1em;
 width: 1em;
 `)])])]), qi = "1.6s", kx = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, _n = ee({
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
  }, kx),
  setup(e) {
    jn("-base-loading", Bx, oe(e, "clsPrefix"));
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
    }, f(ur, null, {
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
        dur: qi,
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
        dur: qi,
        fill: "freeze",
        repeatCount: "indefinite"
      }), f("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * t};${1.42 * t};${5.67 * t}`,
        begin: "0s",
        dur: qi,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : f("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), {
  cubicBezierEaseInOut: _s
} = Hn;
function mi({
  name: e = "fade-in",
  enterDuration: t = "0.2s",
  leaveDuration: r = "0.2s",
  enterCubicBezier: o = _s,
  leaveCubicBezier: i = _s
} = {}) {
  return [O(`&.${e}-transition-enter-active`, {
    transition: `all ${t} ${o}!important`
  }), O(`&.${e}-transition-leave-active`, {
    transition: `all ${r} ${i}!important`
  }), O(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), O(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
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
}, Rx = Jn(ke.neutralBase), Eu = Jn(ke.neutralInvertBase), Fx = `rgba(${Eu.slice(0, 3).join(", ")}, `;
function Ws(e) {
  return `${Fx + String(e)})`;
}
function Et(e) {
  const t = Array.from(Eu);
  return t[3] = Number(e), Ge(Rx, t);
}
const Ze = Object.assign(Object.assign({
  name: "common"
}, Hn), {
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
  textColorDisabled: Et(ke.alpha4),
  placeholderColor: Et(ke.alpha4),
  placeholderColorDisabled: Et(ke.alpha5),
  iconColor: Et(ke.alpha4),
  iconColorHover: zo(Et(ke.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: zo(Et(ke.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: Et(ke.alpha5),
  opacity1: ke.alpha1,
  opacity2: ke.alpha2,
  opacity3: ke.alpha3,
  opacity4: ke.alpha4,
  opacity5: ke.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: Et(Number(ke.alphaClose)),
  closeIconColorHover: Et(Number(ke.alphaClose)),
  closeIconColorPressed: Et(Number(ke.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: Et(ke.alpha4),
  clearColorHover: zo(Et(ke.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: zo(Et(ke.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Ws(ke.alphaScrollbar),
  scrollbarColorHover: Ws(ke.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: Et(ke.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: ke.neutralPopover,
  tableColor: ke.neutralCard,
  cardColor: ke.neutralCard,
  modalColor: ke.neutralModal,
  bodyColor: ke.neutralBody,
  tagColor: "#eee",
  avatarColor: Et(ke.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: Et(ke.alphaInput),
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
}), Px = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function zx(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: r,
    scrollbarHeight: o,
    scrollbarWidth: i,
    scrollbarBorderRadius: a
  } = e;
  return Object.assign(Object.assign({}, Px), {
    height: o,
    width: i,
    borderRadius: a,
    color: t,
    colorHover: r
  });
}
const Bo = {
  name: "Scrollbar",
  common: Ze,
  self: zx
}, $x = z("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [O(">", [z("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [O("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), O(">", [
  // We can't set overflow hidden since it affects positioning.
  z("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), O(">, +", [z("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [N("horizontal", `
 height: var(--n-scrollbar-height);
 `, [O(">", [T("scrollbar", `
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
 `, [O(">", [T("scrollbar", `
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
 `), N("disabled", [O(">", [T("scrollbar", "pointer-events: none;")])]), O(">", [T("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [mi(), O("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Ax = Object.assign(Object.assign({}, ve.props), {
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
}), cr = ee({
  name: "Scrollbar",
  props: Ax,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Ae(e), i = Pt("Scrollbar", o, t), a = I(null), l = I(null), s = I(null), d = I(null), u = I(null), c = I(null), h = I(null), p = I(null), x = I(null), v = I(null), m = I(null), b = I(0), g = I(0), C = I(!1), S = I(!1);
    let w = !1, k = !1, R, y, B = 0, F = 0, A = 0, K = 0;
    const M = bh(), n = ve("Scrollbar", "-scrollbar", $x, Bo, e, t), D = $(() => {
      const {
        value: P
      } = p, {
        value: W
      } = c, {
        value: J
      } = v;
      return P === null || W === null || J === null ? 0 : Math.min(P, J * P / W + At(n.value.self.width) * 1.5);
    }), E = $(() => `${D.value}px`), H = $(() => {
      const {
        value: P
      } = x, {
        value: W
      } = h, {
        value: J
      } = m;
      return P === null || W === null || J === null ? 0 : J * P / W + At(n.value.self.height) * 1.5;
    }), L = $(() => `${H.value}px`), V = $(() => {
      const {
        value: P
      } = p, {
        value: W
      } = b, {
        value: J
      } = c, {
        value: le
      } = v;
      if (P === null || J === null || le === null)
        return 0;
      {
        const de = J - P;
        return de ? W / de * (le - D.value) : 0;
      }
    }), te = $(() => `${V.value}px`), X = $(() => {
      const {
        value: P
      } = x, {
        value: W
      } = g, {
        value: J
      } = h, {
        value: le
      } = m;
      if (P === null || J === null || le === null)
        return 0;
      {
        const de = J - P;
        return de ? W / de * (le - H.value) : 0;
      }
    }), U = $(() => `${X.value}px`), j = $(() => {
      const {
        value: P
      } = p, {
        value: W
      } = c;
      return P !== null && W !== null && W > P;
    }), q = $(() => {
      const {
        value: P
      } = x, {
        value: W
      } = h;
      return P !== null && W !== null && W > P;
    }), Y = $(() => {
      const {
        trigger: P
      } = e;
      return P === "none" || C.value;
    }), ie = $(() => {
      const {
        trigger: P
      } = e;
      return P === "none" || S.value;
    }), ae = $(() => {
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
        Fe(P, W ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: J,
        top: le,
        index: de,
        elSize: pe,
        position: me,
        behavior: Se,
        el: Le,
        debounce: rt = !0
      } = P;
      (J !== void 0 || le !== void 0) && Fe(J ?? 0, le ?? 0, 0, !1, Se), Le !== void 0 ? Fe(0, Le.offsetTop, Le.offsetHeight, rt, Se) : de !== void 0 && pe !== void 0 ? Fe(0, de * pe, pe, rt, Se) : me === "bottom" ? Fe(0, Number.MAX_SAFE_INTEGER, 0, !1, Se) : me === "top" && Fe(0, 0, 0, !1, Se);
    }, G = kh(() => {
      e.container || we({
        top: b.value,
        left: g.value
      });
    }), ue = () => {
      G.isDeactivated || he();
    }, Re = (P) => {
      if (G.isDeactivated) return;
      const {
        onResize: W
      } = e;
      W && W(P), he();
    }, be = (P, W) => {
      if (!e.scrollable) return;
      const {
        value: J
      } = ae;
      J && (typeof P == "object" ? J.scrollBy(P) : J.scrollBy(P, W || 0));
    };
    function Fe(P, W, J, le, de) {
      const {
        value: pe
      } = ae;
      if (pe) {
        if (le) {
          const {
            scrollTop: me,
            offsetHeight: Se
          } = pe;
          if (W > me) {
            W + J <= me + Se || pe.scrollTo({
              left: P,
              top: W + J - Se,
              behavior: de
            });
            return;
          }
        }
        pe.scrollTo({
          left: P,
          top: W,
          behavior: de
        });
      }
    }
    function Pe() {
      xe(), Ce(), he();
    }
    function lt() {
      Qe();
    }
    function Qe() {
      ut(), ct();
    }
    function ut() {
      y !== void 0 && window.clearTimeout(y), y = window.setTimeout(() => {
        S.value = !1;
      }, e.duration);
    }
    function ct() {
      R !== void 0 && window.clearTimeout(R), R = window.setTimeout(() => {
        C.value = !1;
      }, e.duration);
    }
    function xe() {
      R !== void 0 && window.clearTimeout(R), C.value = !0;
    }
    function Ce() {
      y !== void 0 && window.clearTimeout(y), S.value = !0;
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
      } = ae;
      P && (b.value = P.scrollTop, g.value = P.scrollLeft * (i != null && i.value ? -1 : 1));
    }
    function Je() {
      const {
        value: P
      } = fe;
      P && (c.value = P.offsetHeight, h.value = P.offsetWidth);
      const {
        value: W
      } = ae;
      W && (p.value = W.offsetHeight, x.value = W.offsetWidth);
      const {
        value: J
      } = u, {
        value: le
      } = d;
      J && (m.value = J.offsetWidth), le && (v.value = le.offsetHeight);
    }
    function re() {
      const {
        value: P
      } = ae;
      P && (b.value = P.scrollTop, g.value = P.scrollLeft * (i != null && i.value ? -1 : 1), p.value = P.offsetHeight, x.value = P.offsetWidth, c.value = P.scrollHeight, h.value = P.scrollWidth);
      const {
        value: W
      } = u, {
        value: J
      } = d;
      W && (m.value = W.offsetWidth), J && (v.value = J.offsetHeight);
    }
    function he() {
      e.scrollable && (e.useUnifiedContainer ? re() : (Je(), Ie()));
    }
    function Te(P) {
      var W;
      return !(!((W = a.value) === null || W === void 0) && W.contains(Fr(P)));
    }
    function st(P) {
      P.preventDefault(), P.stopPropagation(), k = !0, Ke("mousemove", window, zt, !0), Ke("mouseup", window, $t, !0), F = g.value, A = i != null && i.value ? window.innerWidth - P.clientX : P.clientX;
    }
    function zt(P) {
      if (!k) return;
      R !== void 0 && window.clearTimeout(R), y !== void 0 && window.clearTimeout(y);
      const {
        value: W
      } = x, {
        value: J
      } = h, {
        value: le
      } = H;
      if (W === null || J === null) return;
      const pe = (i != null && i.value ? window.innerWidth - P.clientX - A : P.clientX - A) * (J - W) / (W - le), me = J - W;
      let Se = F + pe;
      Se = Math.min(me, Se), Se = Math.max(Se, 0);
      const {
        value: Le
      } = ae;
      if (Le) {
        Le.scrollLeft = Se * (i != null && i.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: rt
        } = e;
        rt && rt(Se);
      }
    }
    function $t(P) {
      P.preventDefault(), P.stopPropagation(), We("mousemove", window, zt, !0), We("mouseup", window, $t, !0), k = !1, he(), Te(P) && Qe();
    }
    function gt(P) {
      P.preventDefault(), P.stopPropagation(), w = !0, Ke("mousemove", window, nt, !0), Ke("mouseup", window, yt, !0), B = b.value, K = P.clientY;
    }
    function nt(P) {
      if (!w) return;
      R !== void 0 && window.clearTimeout(R), y !== void 0 && window.clearTimeout(y);
      const {
        value: W
      } = p, {
        value: J
      } = c, {
        value: le
      } = D;
      if (W === null || J === null) return;
      const pe = (P.clientY - K) * (J - W) / (W - le), me = J - W;
      let Se = B + pe;
      Se = Math.min(me, Se), Se = Math.max(Se, 0);
      const {
        value: Le
      } = ae;
      Le && (Le.scrollTop = Se);
    }
    function yt(P) {
      P.preventDefault(), P.stopPropagation(), We("mousemove", window, nt, !0), We("mouseup", window, yt, !0), w = !1, he(), Te(P) && Qe();
    }
    tt(() => {
      const {
        value: P
      } = q, {
        value: W
      } = j, {
        value: J
      } = t, {
        value: le
      } = u, {
        value: de
      } = d;
      le && (P ? le.classList.remove(`${J}-scrollbar-rail--disabled`) : le.classList.add(`${J}-scrollbar-rail--disabled`)), de && (W ? de.classList.remove(`${J}-scrollbar-rail--disabled`) : de.classList.add(`${J}-scrollbar-rail--disabled`));
    }), Ft(() => {
      e.container || he();
    }), kt(() => {
      R !== void 0 && window.clearTimeout(R), y !== void 0 && window.clearTimeout(y), We("mousemove", window, nt, !0), We("mouseup", window, yt, !0);
    });
    const et = $(() => {
      const {
        common: {
          cubicBezierEaseInOut: P
        },
        self: {
          color: W,
          colorHover: J,
          height: le,
          width: de,
          borderRadius: pe,
          railInsetHorizontalTop: me,
          railInsetHorizontalBottom: Se,
          railInsetVerticalRight: Le,
          railInsetVerticalLeft: rt,
          railColor: Ve
        }
      } = n.value, {
        top: Dt,
        right: It,
        bottom: Lt,
        left: _t
      } = Nt(me), {
        top: Wt,
        right: Jt,
        bottom: Vt,
        left: _
      } = Nt(Se), {
        top: Q,
        right: ye,
        bottom: Oe,
        left: qe
      } = Nt(i != null && i.value ? ls(Le) : Le), {
        top: Ne,
        right: ot,
        bottom: ft,
        left: Gt
      } = Nt(i != null && i.value ? ls(rt) : rt);
      return {
        "--n-scrollbar-bezier": P,
        "--n-scrollbar-color": W,
        "--n-scrollbar-color-hover": J,
        "--n-scrollbar-border-radius": pe,
        "--n-scrollbar-width": de,
        "--n-scrollbar-height": le,
        "--n-scrollbar-rail-top-horizontal-top": Dt,
        "--n-scrollbar-rail-right-horizontal-top": It,
        "--n-scrollbar-rail-bottom-horizontal-top": Lt,
        "--n-scrollbar-rail-left-horizontal-top": _t,
        "--n-scrollbar-rail-top-horizontal-bottom": Wt,
        "--n-scrollbar-rail-right-horizontal-bottom": Jt,
        "--n-scrollbar-rail-bottom-horizontal-bottom": Vt,
        "--n-scrollbar-rail-left-horizontal-bottom": _,
        "--n-scrollbar-rail-top-vertical-right": Q,
        "--n-scrollbar-rail-right-vertical-right": ye,
        "--n-scrollbar-rail-bottom-vertical-right": Oe,
        "--n-scrollbar-rail-left-vertical-right": qe,
        "--n-scrollbar-rail-top-vertical-left": Ne,
        "--n-scrollbar-rail-right-vertical-left": ot,
        "--n-scrollbar-rail-bottom-vertical-left": ft,
        "--n-scrollbar-rail-left-vertical-left": Gt,
        "--n-scrollbar-rail-color": Ve
      };
    }), ce = r ? Ye("scrollbar", void 0, et, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: we,
      scrollBy: be,
      sync: he,
      syncUnifiedContainer: re,
      handleMouseEnterWrapper: Pe,
      handleMouseLeaveWrapper: lt
    }), {
      mergedClsPrefix: t,
      rtlEnabled: i,
      containerScrollTop: b,
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
      isShowYBar: ie,
      isIos: M,
      handleScroll: $e,
      handleContentResize: ue,
      handleContainerResize: Re,
      handleYScrollMouseDown: gt,
      handleXScrollMouseDown: st,
      cssVars: r ? void 0 : et,
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
    const u = this.trigger === "none", c = (x, v) => f("div", {
      ref: "yRailRef",
      class: [`${r}-scrollbar-rail`, `${r}-scrollbar-rail--vertical`, `${r}-scrollbar-rail--vertical--${l}`, x],
      "data-scrollbar-rail": !0,
      style: [v || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, f(u ? ua : jt, u ? null : {
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
      var x, v;
      return (x = this.onRender) === null || x === void 0 || x.call(this), f("div", Ot(this.$attrs, {
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
      }, f(Pr, {
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
      }, f(u ? ua : jt, u ? null : {
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
    }, p = this.container ? h() : f(Pr, {
      onResize: this.handleContainerResize
    }, {
      default: h
    });
    return a ? f(_e, null, p, c(this.themeClass, this.cssVars)) : p;
  }
}), Tu = cr;
function Vs(e) {
  return Array.isArray(e) ? e : [e];
}
const ya = {
  STOP: "STOP"
};
function Ou(e, t) {
  const r = t(e);
  e.children !== void 0 && r !== ya.STOP && e.children.forEach((o) => Ou(o, t));
}
function Dx(e, t = {}) {
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
function Ex(e, t) {
  const { isLeaf: r } = e;
  return r !== void 0 ? r : !t(e);
}
function Tx(e) {
  return e.children;
}
function Ox(e) {
  return e.key;
}
function Mx() {
  return !1;
}
function Ix(e, t) {
  const { isLeaf: r } = e;
  return !(r === !1 && !Array.isArray(t(e)));
}
function Lx(e) {
  return e.disabled === !0;
}
function Nx(e, t) {
  return e.isLeaf === !1 && !Array.isArray(t(e));
}
function Hx(e, t) {
  if (e.isLeaf === !0) {
    const r = t(e);
    if (Array.isArray(r) && r.length > 0)
      return !0;
  }
  return !1;
}
function Gi(e) {
  var t;
  return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : [];
}
function Xi(e) {
  var t;
  return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : [];
}
function jx(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) || r.add(o);
  }), Array.from(r);
}
function _x(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) && r.delete(o);
  }), Array.from(r);
}
function Wx(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function Vx(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r, o) => {
    t.set(r.key, o);
  }), (r) => {
    var o;
    return (o = t.get(r)) !== null && o !== void 0 ? o : null;
  };
}
class Kx extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function Ux(e, t, r, o) {
  return oi(t.concat(e), r, o, !1);
}
function qx(e, t) {
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
function Gx(e, t, r, o) {
  const i = oi(t, r, o, !1), a = oi(e, r, o, !0), l = qx(e, r), s = [];
  return i.forEach((d) => {
    (a.has(d) || l.has(d)) && s.push(d);
  }), s.forEach((d) => i.delete(d)), i;
}
function Yi(e, t) {
  const { checkedKeys: r, keysToCheck: o, keysToUncheck: i, indeterminateKeys: a, cascade: l, leafOnly: s, checkStrategy: d, allowNotLoaded: u } = e;
  if (!l)
    return o !== void 0 ? {
      checkedKeys: jx(r, o),
      indeterminateKeys: Array.from(a)
    } : i !== void 0 ? {
      checkedKeys: _x(r, i),
      indeterminateKeys: Array.from(a)
    } : {
      checkedKeys: Array.from(r),
      indeterminateKeys: Array.from(a)
    };
  const { levelTreeNodeMap: c } = t;
  let h;
  i !== void 0 ? h = Gx(i, r, t, u) : o !== void 0 ? h = Ux(o, r, t, u) : h = oi(r, t, u, !1);
  const p = d === "parent", x = d === "child" || s, v = h, m = /* @__PURE__ */ new Set(), b = Math.max.apply(null, Array.from(c.keys()));
  for (let g = b; g >= 0; g -= 1) {
    const C = g === 0, S = c.get(g);
    for (const w of S) {
      if (w.isLeaf)
        continue;
      const { key: k, shallowLoaded: R } = w;
      if (x && R && w.children.forEach((A) => {
        !A.disabled && !A.isLeaf && A.shallowLoaded && v.has(A.key) && v.delete(A.key);
      }), w.disabled || !R)
        continue;
      let y = !0, B = !1, F = !0;
      for (const A of w.children) {
        const K = A.key;
        if (!A.disabled) {
          if (F && (F = !1), v.has(K))
            B = !0;
          else if (m.has(K)) {
            B = !0, y = !1;
            break;
          } else if (y = !1, B)
            break;
        }
      }
      y && !F ? (p && w.children.forEach((A) => {
        !A.disabled && v.has(A.key) && v.delete(A.key);
      }), v.add(k)) : B && m.add(k), C && x && v.has(k) && v.delete(k);
    }
  }
  return {
    checkedKeys: Array.from(v),
    indeterminateKeys: Array.from(m)
  };
}
function oi(e, t, r, o) {
  const { treeNodeMap: i, getChildren: a } = t, l = /* @__PURE__ */ new Set(), s = new Set(e);
  return e.forEach((d) => {
    const u = i.get(d);
    u !== void 0 && Ou(u, (c) => {
      if (c.disabled)
        return ya.STOP;
      const { key: h } = c;
      if (!l.has(h) && (l.add(h), s.add(h), Nx(c.rawNode, a))) {
        if (o)
          return ya.STOP;
        if (!r)
          throw new Kx();
      }
    });
  }), s;
}
function Xx(e, { includeGroup: t = !1, includeSelf: r = !0 }, o) {
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
function Yx(e) {
  if (e.length === 0)
    return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function Zx(e, t) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return t ? r[(i + 1) % o] : i === r.length - 1 ? null : r[i + 1];
}
function Ks(e, t, { loop: r = !1, includeDisabled: o = !1 } = {}) {
  const i = t === "prev" ? Jx : Zx, a = {
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
        const c = hl(u, a);
        c !== null ? s = c : d(i(u, r));
      } else {
        const c = i(u, !1);
        if (c !== null)
          d(c);
        else {
          const h = Qx(u);
          h != null && h.isGroup ? d(i(h, r)) : r && d(i(u, !0));
        }
      }
    }
  }
  return d(e), s;
}
function Jx(e, t) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return t ? r[(i - 1 + o) % o] : i === 0 ? null : r[i - 1];
}
function Qx(e) {
  return e.parent;
}
function hl(e, t = {}) {
  const { reverse: r = !1 } = t, { children: o } = e;
  if (o) {
    const { length: i } = o, a = r ? i - 1 : 0, l = r ? -1 : i, s = r ? -1 : 1;
    for (let d = a; d !== l; d += s) {
      const u = o[d];
      if (!u.disabled && !u.ignored)
        if (u.isGroup) {
          const c = hl(u, t);
          if (c !== null)
            return c;
        } else
          return u;
    }
  }
  return null;
}
const e1 = {
  getChild() {
    return this.ignored ? null : hl(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return Ks(this, "next", e);
  },
  getPrev(e = {}) {
    return Ks(this, "prev", e);
  }
};
function t1(e, t) {
  const r = t ? new Set(t) : void 0, o = [];
  function i(a) {
    a.forEach((l) => {
      o.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || // normal non-leaf node
      r === void 0 || r.has(l.key)) && i(l.children);
    });
  }
  return i(e), o;
}
function n1(e, t) {
  const r = e.key;
  for (; t; ) {
    if (t.key === r)
      return !0;
    t = t.parent;
  }
  return !1;
}
function Mu(e, t, r, o, i, a = null, l = 0) {
  const s = [];
  return e.forEach((d, u) => {
    var c;
    process.env.NODE_ENV !== "production" && Hx(d, i) && console.error("[treemate]: node", d, "is invalid");
    const h = Object.create(o);
    if (h.rawNode = d, h.siblings = s, h.level = l, h.index = u, h.isFirstChild = u === 0, h.isLastChild = u + 1 === e.length, h.parent = a, !h.ignored) {
      const p = i(d);
      Array.isArray(p) && (h.children = Mu(p, t, r, o, i, h, l + 1));
    }
    s.push(h), t.set(h.key, h), r.has(l) || r.set(l, []), (c = r.get(l)) === null || c === void 0 || c.push(h);
  }), s;
}
function bi(e, t = {}) {
  var r;
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), { getDisabled: a = Lx, getIgnored: l = Mx, getIsGroup: s = Wx, getKey: d = Ox } = t, u = (r = t.getChildren) !== null && r !== void 0 ? r : Tx, c = t.ignoreEmptyChildren ? (w) => {
    const k = u(w);
    return Array.isArray(k) ? k.length ? k : null : k;
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
      return Ex(this.rawNode, c);
    },
    get shallowLoaded() {
      return Ix(this.rawNode, c);
    },
    get ignored() {
      return l(this.rawNode);
    },
    contains(w) {
      return n1(this, w);
    }
  }, e1), p = Mu(e, o, i, h, c);
  function x(w) {
    if (w == null)
      return null;
    const k = o.get(w);
    return k && !k.isGroup && !k.ignored ? k : null;
  }
  function v(w) {
    if (w == null)
      return null;
    const k = o.get(w);
    return k && !k.ignored ? k : null;
  }
  function m(w, k) {
    const R = v(w);
    return R ? R.getPrev(k) : null;
  }
  function b(w, k) {
    const R = v(w);
    return R ? R.getNext(k) : null;
  }
  function g(w) {
    const k = v(w);
    return k ? k.getParent() : null;
  }
  function C(w) {
    const k = v(w);
    return k ? k.getChild() : null;
  }
  const S = {
    treeNodes: p,
    treeNodeMap: o,
    levelTreeNodeMap: i,
    maxLevel: Math.max(...i.keys()),
    getChildren: c,
    getFlattenedNodes(w) {
      return t1(p, w);
    },
    getNode: x,
    getPrev: m,
    getNext: b,
    getParent: g,
    getChild: C,
    getFirstAvailableNode() {
      return Yx(p);
    },
    getPath(w, k = {}) {
      return Xx(w, k, S);
    },
    getCheckedKeys(w, k = {}) {
      const { cascade: R = !0, leafOnly: y = !1, checkStrategy: B = "all", allowNotLoaded: F = !1 } = k;
      return Yi({
        checkedKeys: Gi(w),
        indeterminateKeys: Xi(w),
        cascade: R,
        leafOnly: y,
        checkStrategy: B,
        allowNotLoaded: F
      }, S);
    },
    check(w, k, R = {}) {
      const { cascade: y = !0, leafOnly: B = !1, checkStrategy: F = "all", allowNotLoaded: A = !1 } = R;
      return Yi({
        checkedKeys: Gi(k),
        indeterminateKeys: Xi(k),
        keysToCheck: w == null ? [] : Vs(w),
        cascade: y,
        leafOnly: B,
        checkStrategy: F,
        allowNotLoaded: A
      }, S);
    },
    uncheck(w, k, R = {}) {
      const { cascade: y = !0, leafOnly: B = !1, checkStrategy: F = "all", allowNotLoaded: A = !1 } = R;
      return Yi({
        checkedKeys: Gi(k),
        indeterminateKeys: Xi(k),
        keysToUncheck: w == null ? [] : Vs(w),
        cascade: y,
        leafOnly: B,
        checkStrategy: F,
        allowNotLoaded: A
      }, S);
    },
    getNonLeafKeys(w = {}) {
      return Dx(p, w);
    }
  };
  return S;
}
const r1 = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function o1(e) {
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
  return Object.assign(Object.assign({}, r1), {
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
const vl = {
  name: "Empty",
  common: Ze,
  self: o1
}, i1 = z("empty", `
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
 `, [O("+", [T("description", `
 margin-top: 8px;
 `)])]), T("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), T("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]), a1 = Object.assign(Object.assign({}, ve.props), {
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
}), $r = ee({
  name: "Empty",
  props: a1,
  slots: Object,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r,
      mergedComponentPropsRef: o
    } = Ae(e), i = ve("Empty", "-empty", i1, vl, e, t), {
      localeRef: a
    } = er("Empty"), l = $(() => {
      var c, h, p;
      return (c = e.description) !== null && c !== void 0 ? c : (p = (h = o == null ? void 0 : o.value) === null || h === void 0 ? void 0 : h.Empty) === null || p === void 0 ? void 0 : p.description;
    }), s = $(() => {
      var c, h;
      return ((h = (c = o == null ? void 0 : o.value) === null || c === void 0 ? void 0 : c.Empty) === null || h === void 0 ? void 0 : h.renderIcon) || (() => f(gx, null));
    }), d = $(() => {
      const {
        size: c
      } = e, {
        common: {
          cubicBezierEaseInOut: h
        },
        self: {
          [Z("iconSize", c)]: p,
          [Z("fontSize", c)]: x,
          textColor: v,
          iconColor: m,
          extraTextColor: b
        }
      } = i.value;
      return {
        "--n-icon-size": p,
        "--n-font-size": x,
        "--n-bezier": h,
        "--n-text-color": v,
        "--n-icon-color": m,
        "--n-extra-text-color": b
      };
    }), u = r ? Ye("empty", $(() => {
      let c = "";
      const {
        size: h
      } = e;
      return c += h[0], c;
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
    }, e.icon ? e.icon() : f(bt, {
      clsPrefix: t
    }, {
      default: this.mergedRenderIcon
    })) : null, this.showDescription ? f("div", {
      class: `${t}-empty__description`
    }, e.default ? e.default() : this.localizedDescription) : null, e.extra ? f("div", {
      class: `${t}-empty__extra`
    }, e.extra()) : null);
  }
}), l1 = {
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
function s1(e) {
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
    fontSizeMedium: x,
    fontSizeLarge: v,
    fontSizeHuge: m,
    heightTiny: b,
    heightSmall: g,
    heightMedium: C,
    heightLarge: S,
    heightHuge: w
  } = e;
  return Object.assign(Object.assign({}, l1), {
    optionFontSizeTiny: h,
    optionFontSizeSmall: p,
    optionFontSizeMedium: x,
    optionFontSizeLarge: v,
    optionFontSizeHuge: m,
    optionHeightTiny: b,
    optionHeightSmall: g,
    optionHeightMedium: C,
    optionHeightLarge: S,
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
const pl = {
  name: "InternalSelectMenu",
  common: Ze,
  peers: {
    Scrollbar: Bo,
    Empty: vl
  },
  self: s1
}, Us = ee({
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
    } = ge(_a);
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
    } = this, a = o == null ? void 0 : o(i), l = t ? t(i, !1) : pt(i[this.labelField], i, !1), s = f("div", Object.assign({}, a, {
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
function d1(e, t) {
  return f(jt, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => e ? f(bt, {
      clsPrefix: t,
      class: `${t}-base-select-option__check`
    }, {
      default: () => f(fx)
    }) : null
  });
}
const qs = ee({
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
    } = ge(_a), x = Ue(() => {
      const {
        value: g
      } = r;
      return g ? e.tmNode.key === g.key : !1;
    });
    function v(g) {
      const {
        tmNode: C
      } = e;
      C.disabled || h(g, C);
    }
    function m(g) {
      const {
        tmNode: C
      } = e;
      C.disabled || p(g, C);
    }
    function b(g) {
      const {
        tmNode: C
      } = e, {
        value: S
      } = x;
      C.disabled || S || p(g, C);
    }
    return {
      multiple: o,
      isGrouped: Ue(() => {
        const {
          tmNode: g
        } = e, {
          parent: C
        } = g;
        return C && C.rawNode.type === "group";
      }),
      showCheckmark: u,
      nodeProps: c,
      isPending: x,
      isSelected: Ue(() => {
        const {
          value: g
        } = t, {
          value: C
        } = o;
        if (g === null) return !1;
        const S = e.tmNode.rawNode[d.value];
        if (C) {
          const {
            value: w
          } = i;
          return w.has(S);
        } else
          return g === S;
      }),
      labelField: s,
      renderLabel: a,
      renderOption: l,
      handleMouseMove: b,
      handleMouseEnter: m,
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
    } = this, p = d1(r, e), x = d ? [d(t, r), a && p] : [pt(t[this.labelField], t, r), a && p], v = l == null ? void 0 : l(t), m = f("div", Object.assign({}, v, {
      class: [`${e}-base-select-option`, t.class, v == null ? void 0 : v.class, {
        [`${e}-base-select-option--disabled`]: t.disabled,
        [`${e}-base-select-option--selected`]: r,
        [`${e}-base-select-option--grouped`]: i,
        [`${e}-base-select-option--pending`]: o,
        [`${e}-base-select-option--show-checkmark`]: a
      }],
      style: [(v == null ? void 0 : v.style) || "", t.style || ""],
      onClick: no([u, v == null ? void 0 : v.onClick]),
      onMouseenter: no([c, v == null ? void 0 : v.onMouseenter]),
      onMousemove: no([h, v == null ? void 0 : v.onMousemove])
    }), f("div", {
      class: `${e}-base-select-option__content`
    }, x));
    return t.render ? t.render({
      node: m,
      option: t,
      selected: r
    }) : s ? s({
      node: m,
      option: t,
      selected: r
    }) : m;
  }
}), {
  cubicBezierEaseIn: Gs,
  cubicBezierEaseOut: Xs
} = Hn;
function ko({
  transformOrigin: e = "inherit",
  duration: t = ".2s",
  enterScale: r = ".9",
  originalTransform: o = "",
  originalTransition: i = ""
} = {}) {
  return [O("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${t} ${Gs}, transform ${t} ${Gs} ${i && `,${i}`}`
  }), O("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${t} ${Xs}, transform ${t} ${Xs} ${i && `,${i}`}`
  }), O("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${o} scale(${r})`
  }), O("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${o} scale(1)`
  })];
}
const u1 = z("base-select-menu", `
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
 `), O("&::before", `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), O("&:active", `
 color: var(--n-option-text-color-pressed);
 `), N("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), N("pending", [O("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), N("selected", `
 color: var(--n-option-text-color-active);
 `, [O("&::before", `
 background-color: var(--n-option-color-active);
 `), N("pending", [O("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), N("disabled", `
 cursor: not-allowed;
 `, [Xe("selected", `
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
 `, [ko({
  enterScale: "0.5"
})])])]), Iu = ee({
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
    } = Ae(e), o = Pt("InternalSelectMenu", r, t), i = ve("InternalSelectMenu", "-internal-select-menu", u1, pl, e, oe(e, "clsPrefix")), a = I(null), l = I(null), s = I(null), d = $(() => e.treeMate.getFlattenedNodes()), u = $(() => Vx(d.value)), c = I(null);
    function h() {
      const {
        treeMate: j
      } = e;
      let q = null;
      const {
        value: Y
      } = e;
      Y === null ? q = j.getFirstAvailableNode() : (e.multiple ? q = j.getNode((Y || [])[(Y || []).length - 1]) : q = j.getNode(Y), (!q || q.disabled) && (q = j.getFirstAvailableNode())), D(q || null);
    }
    function p() {
      const {
        value: j
      } = c;
      j && !e.treeMate.getNode(j.key) && (c.value = null);
    }
    let x;
    He(() => e.show, (j) => {
      j ? x = He(() => e.treeMate, () => {
        e.resetMenuOnOptionsChange ? (e.autoPending ? h() : p(), vt(E)) : p();
      }, {
        immediate: !0
      }) : x == null || x();
    }, {
      immediate: !0
    }), kt(() => {
      x == null || x();
    });
    const v = $(() => At(i.value.self[Z("optionHeight", e.size)])), m = $(() => Nt(i.value.self[Z("padding", e.size)])), b = $(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), g = $(() => {
      const j = d.value;
      return j && j.length === 0;
    });
    function C(j) {
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
    function w(j) {
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
    function y(j, q) {
      q.disabled || D(q, !1);
    }
    function B(j, q) {
      q.disabled || C(q);
    }
    function F(j) {
      var q;
      qt(j, "action") || (q = e.onKeyup) === null || q === void 0 || q.call(e, j);
    }
    function A(j) {
      var q;
      qt(j, "action") || (q = e.onKeydown) === null || q === void 0 || q.call(e, j);
    }
    function K(j) {
      var q;
      (q = e.onMousedown) === null || q === void 0 || q.call(e, j), !e.focusable && j.preventDefault();
    }
    function M() {
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
      const ie = u.value(Y.key);
      ie !== null && (e.virtualScroll ? (j = l.value) === null || j === void 0 || j.scrollTo({
        index: ie
      }) : (q = s.value) === null || q === void 0 || q.scrollTo({
        index: ie,
        elSize: v.value
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
    Ee(_a, {
      handleOptionMouseEnter: y,
      handleOptionClick: B,
      valueSetRef: b,
      pendingTmNodeRef: c,
      nodePropsRef: oe(e, "nodeProps"),
      showCheckmarkRef: oe(e, "showCheckmark"),
      multipleRef: oe(e, "multiple"),
      valueRef: oe(e, "value"),
      renderLabelRef: oe(e, "renderLabel"),
      renderOptionRef: oe(e, "renderOption"),
      labelFieldRef: oe(e, "labelField"),
      valueFieldRef: oe(e, "valueField")
    }), Ee(Ed, a), Ft(() => {
      const {
        value: j
      } = s;
      j && j.sync();
    });
    const V = $(() => {
      const {
        size: j
      } = e, {
        common: {
          cubicBezierEaseInOut: q
        },
        self: {
          height: Y,
          borderRadius: ie,
          color: ae,
          groupHeaderTextColor: fe,
          actionDividerColor: we,
          optionTextColorPressed: G,
          optionTextColor: ue,
          optionTextColorDisabled: Re,
          optionTextColorActive: be,
          optionOpacityDisabled: Fe,
          optionCheckColor: Pe,
          actionTextColor: lt,
          optionColorPending: Qe,
          optionColorActive: ut,
          loadingColor: ct,
          loadingSize: xe,
          optionColorActivePending: Ce,
          [Z("optionFontSize", j)]: $e,
          [Z("optionHeight", j)]: Ie,
          [Z("optionPadding", j)]: Je
        }
      } = i.value;
      return {
        "--n-height": Y,
        "--n-action-divider-color": we,
        "--n-action-text-color": lt,
        "--n-bezier": q,
        "--n-border-radius": ie,
        "--n-color": ae,
        "--n-option-font-size": $e,
        "--n-group-header-text-color": fe,
        "--n-option-check-color": Pe,
        "--n-option-color-pending": Qe,
        "--n-option-color-active": ut,
        "--n-option-color-active-pending": Ce,
        "--n-option-height": Ie,
        "--n-option-opacity-disabled": Fe,
        "--n-option-text-color": ue,
        "--n-option-text-color-active": be,
        "--n-option-text-color-disabled": Re,
        "--n-option-text-color-pressed": G,
        "--n-option-padding": Je,
        "--n-option-padding-left": Nt(Je, "left"),
        "--n-option-padding-right": Nt(Je, "right"),
        "--n-loading-color": ct,
        "--n-loading-size": xe
      };
    }), {
      inlineThemeDisabled: te
    } = e, X = te ? Ye("internal-select-menu", $(() => e.size[0]), V, e) : void 0, U = {
      selfRef: a,
      next: M,
      prev: n,
      getPendingTmNode: R
    };
    return Jd(a, e.onResize), Object.assign({
      mergedTheme: i,
      mergedClsPrefix: t,
      rtlEnabled: o,
      virtualListRef: l,
      scrollbarRef: s,
      itemSize: v,
      padding: m,
      flattenedNodes: d,
      empty: g,
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
      handleMouseDown: K,
      handleVirtualListResize: k,
      handleVirtualListScroll: w,
      cssVars: te ? void 0 : V,
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
    }, je(e.header, (l) => l && f("div", {
      class: `${r}-base-select-menu__header`,
      "data-header": !0,
      key: "header"
    }, l)), this.loading ? f("div", {
      class: `${r}-base-select-menu__loading`
    }, f(_n, {
      clsPrefix: r,
      strokeWidth: 20
    })) : this.empty ? f("div", {
      class: `${r}-base-select-menu__empty`,
      "data-empty": !0
    }, Zt(e.empty, () => [f($r, {
      theme: o.peers.Empty,
      themeOverrides: o.peerOverrides.Empty,
      size: this.size
    })])) : f(cr, {
      ref: "scrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: t ? this.virtualListContainer : void 0,
      content: t ? this.virtualListContent : void 0,
      onScroll: t ? void 0 : this.doScroll
    }, {
      default: () => t ? f(Ya, {
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
        }) => l.isGroup ? f(Us, {
          key: l.key,
          clsPrefix: r,
          tmNode: l
        }) : l.ignored ? null : f(qs, {
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
      }, this.flattenedNodes.map((l) => l.isGroup ? f(Us, {
        key: l.key,
        clsPrefix: r,
        tmNode: l
      }) : f(qs, {
        clsPrefix: r,
        key: l.key,
        tmNode: l
      })))
    }), je(e.action, (l) => l && [f("div", {
      class: `${r}-base-select-menu__action`,
      "data-action": !0,
      key: "action"
    }, l), f(Sx, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
}), c1 = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function f1(e) {
  const {
    boxShadow2: t,
    popoverColor: r,
    textColor2: o,
    borderRadius: i,
    fontSize: a,
    dividerColor: l
  } = e;
  return Object.assign(Object.assign({}, c1), {
    fontSize: a,
    borderRadius: i,
    color: r,
    dividerColor: l,
    textColor: o,
    boxShadow: t
  });
}
const fr = {
  name: "Popover",
  common: Ze,
  self: f1
}, Zi = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, St = "var(--n-arrow-height) * 1.414", h1 = O([z("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [O(">", [z("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Xe("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [Xe("scrollable", [Xe("show-header-or-footer", "padding: var(--n-padding);")])]), T("header", `
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
  O("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `),
  O("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `),
  O("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `),
  O("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)
]), Qt("top-start", `
 top: calc(${St} / -2);
 left: calc(${yn("top-start")} - var(--v-offset-left));
 `), Qt("top", `
 top: calc(${St} / -2);
 transform: translateX(calc(${St} / -2)) rotate(45deg);
 left: 50%;
 `), Qt("top-end", `
 top: calc(${St} / -2);
 right: calc(${yn("top-end")} + var(--v-offset-left));
 `), Qt("bottom-start", `
 bottom: calc(${St} / -2);
 left: calc(${yn("bottom-start")} - var(--v-offset-left));
 `), Qt("bottom", `
 bottom: calc(${St} / -2);
 transform: translateX(calc(${St} / -2)) rotate(45deg);
 left: 50%;
 `), Qt("bottom-end", `
 bottom: calc(${St} / -2);
 right: calc(${yn("bottom-end")} + var(--v-offset-left));
 `), Qt("left-start", `
 left: calc(${St} / -2);
 top: calc(${yn("left-start")} - var(--v-offset-top));
 `), Qt("left", `
 left: calc(${St} / -2);
 transform: translateY(calc(${St} / -2)) rotate(45deg);
 top: 50%;
 `), Qt("left-end", `
 left: calc(${St} / -2);
 bottom: calc(${yn("left-end")} + var(--v-offset-top));
 `), Qt("right-start", `
 right: calc(${St} / -2);
 top: calc(${yn("right-start")} - var(--v-offset-top));
 `), Qt("right", `
 right: calc(${St} / -2);
 transform: translateY(calc(${St} / -2)) rotate(45deg);
 top: 50%;
 `), Qt("right-end", `
 right: calc(${St} / -2);
 bottom: calc(${yn("right-end")} + var(--v-offset-top));
 `), ...ax({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, t) => {
  const r = ["right", "left"].includes(t), o = r ? "width" : "height";
  return e.map((i) => {
    const a = i.split("-")[1] === "end", s = `calc((${`var(--v-target-${o}, 0px)`} - ${St}) / 2)`, d = yn(i);
    return O(`[v-placement="${i}"] >`, [z("popover-shared", [N("center-arrow", [z("popover-arrow", `${t}: calc(max(${s}, ${d}) ${a ? "+" : "-"} var(--v-offset-${r ? "left" : "top"}));`)])])]);
  });
})]);
function yn(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function Qt(e, t) {
  const r = e.split("-")[0], o = ["top", "bottom"].includes(r) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return O(`[v-placement="${e}"] >`, [z("popover-shared", `
 margin-${Zi[r]}: var(--n-space);
 `, [N("show-arrow", `
 margin-${Zi[r]}: var(--n-space-arrow);
 `), N("overlap", `
 margin: 0;
 `), Jf("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${Zi[r]}: auto;
 ${o}
 `, [z("popover-arrow", t)])])]);
}
const Lu = Object.assign(Object.assign({}, ve.props), {
  to: gn.propTo,
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
function Nu({
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
const v1 = ee({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: Lu,
  setup(e, {
    slots: t,
    attrs: r
  }) {
    const {
      namespaceRef: o,
      mergedClsPrefixRef: i,
      inlineThemeDisabled: a
    } = Ae(e), l = ve("Popover", "-popover", h1, fr, e, i), s = I(null), d = ge("NPopover"), u = I(null), c = I(e.show), h = I(!1);
    tt(() => {
      const {
        show: y
      } = e;
      y && !m0() && !e.internalDeactivateImmediately && (h.value = !0);
    });
    const p = $(() => {
      const {
        trigger: y,
        onClickoutside: B
      } = e, F = [], {
        positionManuallyRef: {
          value: A
        }
      } = d;
      return A || (y === "click" && !B && F.push([so, w, void 0, {
        capture: !0
      }]), y === "hover" && F.push([Ph, S])), B && F.push([so, w, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && h.value) && F.push([Rr, e.show]), F;
    }), x = $(() => {
      const {
        common: {
          cubicBezierEaseInOut: y,
          cubicBezierEaseIn: B,
          cubicBezierEaseOut: F
        },
        self: {
          space: A,
          spaceArrow: K,
          padding: M,
          fontSize: n,
          textColor: D,
          dividerColor: E,
          color: H,
          boxShadow: L,
          borderRadius: V,
          arrowHeight: te,
          arrowOffset: X,
          arrowOffsetVertical: U
        }
      } = l.value;
      return {
        "--n-box-shadow": L,
        "--n-bezier": y,
        "--n-bezier-ease-in": B,
        "--n-bezier-ease-out": F,
        "--n-font-size": n,
        "--n-text-color": D,
        "--n-color": H,
        "--n-divider-color": E,
        "--n-border-radius": V,
        "--n-arrow-height": te,
        "--n-arrow-offset": X,
        "--n-arrow-offset-vertical": U,
        "--n-padding": M,
        "--n-space": A,
        "--n-space-arrow": K
      };
    }), v = $(() => {
      const y = e.width === "trigger" ? void 0 : Ct(e.width), B = [];
      y && B.push({
        width: y
      });
      const {
        maxWidth: F,
        minWidth: A
      } = e;
      return F && B.push({
        maxWidth: Ct(F)
      }), A && B.push({
        maxWidth: Ct(A)
      }), a || B.push(x.value), B;
    }), m = a ? Ye("popover", void 0, x, e) : void 0;
    d.setBodyInstance({
      syncPosition: b
    }), kt(() => {
      d.setBodyInstance(null);
    }), He(oe(e, "show"), (y) => {
      e.animated || (y ? c.value = !0 : c.value = !1);
    });
    function b() {
      var y;
      (y = s.value) === null || y === void 0 || y.syncPosition();
    }
    function g(y) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && d.handleMouseEnter(y);
    }
    function C(y) {
      e.trigger === "hover" && e.keepAliveOnHover && d.handleMouseLeave(y);
    }
    function S(y) {
      e.trigger === "hover" && !k().contains(Fr(y)) && d.handleMouseMoveOutside(y);
    }
    function w(y) {
      (e.trigger === "click" && !k().contains(Fr(y)) || e.onClickoutside) && d.handleClickOutside(y);
    }
    function k() {
      return d.getTriggerElement();
    }
    Ee(yo, u), Ee(ci, null), Ee(fi, null);
    function R() {
      if (m == null || m.onRender(), !(e.displayDirective === "show" || e.show || e.animated && h.value))
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
          [`${A}-popover-shared`, m == null ? void 0 : m.themeClass.value, e.overlap && `${A}-popover-shared--overlap`, e.showArrow && `${A}-popover-shared--show-arrow`, e.arrowPointToCenter && `${A}-popover-shared--center-arrow`],
          u,
          v.value,
          g,
          C
        );
      else {
        const {
          value: K
        } = d.extraClassRef, {
          internalTrapFocus: M
        } = e, n = !Sr(t.header) || !Sr(t.footer), D = () => {
          var E, H;
          const L = n ? f(_e, null, je(t.header, (X) => X ? f("div", {
            class: [`${A}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, X) : null), je(t.default, (X) => X ? f("div", {
            class: [`${A}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t) : null), je(t.footer, (X) => X ? f("div", {
            class: [`${A}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, X) : null)) : e.scrollable ? (E = t.default) === null || E === void 0 ? void 0 : E.call(t) : f("div", {
            class: [`${A}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t), V = e.scrollable ? f(Tu, {
            contentClass: n ? void 0 : `${A}-popover__content ${(H = e.contentClass) !== null && H !== void 0 ? H : ""}`,
            contentStyle: n ? void 0 : e.contentStyle
          }, {
            default: () => L
          }) : L, te = e.showArrow ? Nu({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: A
          }) : null;
          return [V, te];
        };
        B = f("div", Ot({
          class: [`${A}-popover`, `${A}-popover-shared`, m == null ? void 0 : m.themeClass.value, K.map((E) => `${A}-${E}`), {
            [`${A}-popover--scrollable`]: e.scrollable,
            [`${A}-popover--show-header-or-footer`]: n,
            [`${A}-popover--raw`]: e.raw,
            [`${A}-popover-shared--overlap`]: e.overlap,
            [`${A}-popover-shared--show-arrow`]: e.showArrow,
            [`${A}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: u,
          style: v.value,
          onKeydown: d.handleKeydown,
          onMouseenter: g,
          onMouseleave: C
        }, r), M ? f(Zd, {
          active: e.show,
          autoFocus: !0
        }, {
          default: D
        }) : D());
      }
      return vn(B, p.value);
    }
    return {
      displayed: h,
      namespace: o,
      isMounted: d.isMountedRef,
      zIndex: d.zIndexRef,
      followerRef: s,
      adjustedTo: gn(e),
      followerEnabled: c,
      renderContentNode: R
    };
  },
  render() {
    return f(Ga, {
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
      teleportDisabled: this.adjustedTo === gn.tdkey
    }, {
      default: () => this.animated ? f(jt, {
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
}), p1 = Object.keys(Lu), g1 = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function m1(e, t, r) {
  g1[t].forEach((o) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const i = e.props[o], a = r[o];
    i ? e.props[o] = (...l) => {
      i(...l), a(...l);
    } : e.props[o] = a;
  });
}
const tr = {
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
  to: gn.propTo,
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
}, b1 = Object.assign(Object.assign(Object.assign({}, ve.props), tr), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), hr = ee({
  name: "Popover",
  inheritAttrs: !1,
  props: b1,
  slots: Object,
  __popover__: !0,
  setup(e) {
    process.env.NODE_ENV !== "production" && tt(() => {
      e.maxWidth !== void 0 && at("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && at("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && at("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && at("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && at("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const t = Tr(), r = I(null), o = $(() => e.show), i = I(e.defaultShow), a = Mt(o, i), l = Ue(() => e.disabled ? !1 : a.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: E
      } = e;
      return !!(E != null && E());
    }, d = () => s() ? !1 : a.value, u = ja(e, ["arrow", "showArrow"]), c = $(() => e.overlap ? !1 : u.value);
    let h = null;
    const p = I(null), x = I(null), v = Ue(() => e.x !== void 0 && e.y !== void 0);
    function m(E) {
      const {
        "onUpdate:show": H,
        onUpdateShow: L,
        onShow: V,
        onHide: te
      } = e;
      i.value = E, H && ne(H, E), L && ne(L, E), E && V && ne(V, !0), E && te && ne(te, !1);
    }
    function b() {
      h && h.syncPosition();
    }
    function g() {
      const {
        value: E
      } = p;
      E && (window.clearTimeout(E), p.value = null);
    }
    function C() {
      const {
        value: E
      } = x;
      E && (window.clearTimeout(E), x.value = null);
    }
    function S() {
      const E = s();
      if (e.trigger === "focus" && !E) {
        if (d()) return;
        m(!0);
      }
    }
    function w() {
      const E = s();
      if (e.trigger === "focus" && !E) {
        if (!d()) return;
        m(!1);
      }
    }
    function k() {
      const E = s();
      if (e.trigger === "hover" && !E) {
        if (C(), p.value !== null || d()) return;
        const H = () => {
          m(!0), p.value = null;
        }, {
          delay: L
        } = e;
        L === 0 ? H() : p.value = window.setTimeout(H, L);
      }
    }
    function R() {
      const E = s();
      if (e.trigger === "hover" && !E) {
        if (g(), x.value !== null || !d()) return;
        const H = () => {
          m(!1), x.value = null;
        }, {
          duration: L
        } = e;
        L === 0 ? H() : x.value = window.setTimeout(H, L);
      }
    }
    function y() {
      R();
    }
    function B(E) {
      var H;
      d() && (e.trigger === "click" && (g(), C(), m(!1)), (H = e.onClickoutside) === null || H === void 0 || H.call(e, E));
    }
    function F() {
      if (e.trigger === "click" && !s()) {
        g(), C();
        const E = !d();
        m(E);
      }
    }
    function A(E) {
      e.internalTrapFocus && E.key === "Escape" && (g(), C(), m(!1));
    }
    function K(E) {
      i.value = E;
    }
    function M() {
      var E;
      return (E = r.value) === null || E === void 0 ? void 0 : E.targetRef;
    }
    function n(E) {
      h = E;
    }
    return Ee("NPopover", {
      getTriggerElement: M,
      handleKeydown: A,
      handleMouseEnter: k,
      handleMouseLeave: R,
      handleClickOutside: B,
      handleMouseMoveOutside: y,
      setBodyInstance: n,
      positionManuallyRef: v,
      isMountedRef: t,
      zIndexRef: oe(e, "zIndex"),
      extraClassRef: oe(e, "internalExtraClass"),
      internalRenderBodyRef: oe(e, "internalRenderBody")
    }), tt(() => {
      a.value && s() && m(!1);
    }), {
      binderInstRef: r,
      positionManually: v,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: i,
      mergedShowArrow: c,
      getMergedShow: d,
      setShow: K,
      handleClick: F,
      handleMouseEnter: k,
      handleMouseLeave: R,
      handleFocus: S,
      handleBlur: w,
      syncPosition: b
    };
  },
  render() {
    var e;
    const {
      positionManually: t,
      $slots: r
    } = this;
    let o, i = !1;
    if (!t && (o = C0(r, "trigger"), o)) {
      o = Cd(o), o = o.type === kf ? f("span", [o]) : o;
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
        m1(o, l ? "nested" : t ? "manual" : this.trigger, d);
      }
    }
    return f(Va, {
      ref: "binderInstRef",
      syncTarget: !i,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const a = this.getMergedShow();
        return [this.internalTrapFocus && a ? vn(f("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[Ua, {
          enabled: a,
          zIndex: this.zIndex
        }]]) : null, t ? null : f(Ka, null, {
          default: () => o
        }), f(v1, Sn(this.$props, p1, Object.assign(Object.assign({}, this.$attrs), {
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
}), x1 = {
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
function C1(e) {
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
    closeIconColor: x,
    closeIconColorHover: v,
    closeIconColorPressed: m,
    borderRadiusSmall: b,
    fontSizeMini: g,
    fontSizeTiny: C,
    fontSizeSmall: S,
    fontSizeMedium: w,
    heightMini: k,
    heightTiny: R,
    heightSmall: y,
    heightMedium: B,
    closeColorHover: F,
    closeColorPressed: A,
    buttonColor2Hover: K,
    buttonColor2Pressed: M,
    fontWeightStrong: n
  } = e;
  return Object.assign(Object.assign({}, x1), {
    closeBorderRadius: b,
    heightTiny: k,
    heightSmall: R,
    heightMedium: y,
    heightLarge: B,
    borderRadius: b,
    opacityDisabled: h,
    fontSizeTiny: g,
    fontSizeSmall: C,
    fontSizeMedium: S,
    fontSizeLarge: w,
    fontWeightStrong: n,
    // checked
    textColorCheckable: t,
    textColorHoverCheckable: t,
    textColorPressedCheckable: t,
    textColorChecked: u,
    colorCheckable: "#0000",
    colorHoverCheckable: K,
    colorPressedCheckable: M,
    colorChecked: i,
    colorCheckedHover: r,
    colorCheckedPressed: o,
    // default
    border: `1px solid ${c}`,
    textColor: t,
    color: p,
    colorBordered: "rgb(250, 250, 252)",
    closeIconColor: x,
    closeIconColorHover: v,
    closeIconColorPressed: m,
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
const y1 = {
  name: "Tag",
  common: Ze,
  self: C1
}, w1 = {
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
}, S1 = z("tag", `
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
 `, [Xe("disabled", [O("&:hover", "background-color: var(--n-color-hover-checkable);", [Xe("checked", "color: var(--n-text-color-hover-checkable);")]), O("&:active", "background-color: var(--n-color-pressed-checkable);", [Xe("checked", "color: var(--n-text-color-pressed-checkable);")])]), N("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [Xe("disabled", [O("&:hover", "background-color: var(--n-color-checked-hover);"), O("&:active", "background-color: var(--n-color-checked-pressed);")])])])]), B1 = Object.assign(Object.assign(Object.assign({}, ve.props), w1), {
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
}), k1 = "n-tag", Ji = ee({
  name: "Tag",
  props: B1,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && tt(() => {
      e.onCheckedChange !== void 0 && at("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
    });
    const t = I(null), {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = ve("Tag", "-tag", S1, y1, e, o);
    Ee(k1, {
      roundRef: oe(e, "round")
    });
    function s() {
      if (!e.disabled && e.checkable) {
        const {
          checked: x,
          onCheckedChange: v,
          onUpdateChecked: m,
          "onUpdate:checked": b
        } = e;
        m && m(!x), b && b(!x), v && v(!x);
      }
    }
    function d(x) {
      if (e.triggerClickOnClose || x.stopPropagation(), !e.disabled) {
        const {
          onClose: v
        } = e;
        v && ne(v, x);
      }
    }
    const u = {
      setTextContent(x) {
        const {
          value: v
        } = t;
        v && (v.textContent = x);
      }
    }, c = Pt("Tag", a, o), h = $(() => {
      const {
        type: x,
        size: v,
        color: {
          color: m,
          textColor: b
        } = {}
      } = e, {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          padding: C,
          closeMargin: S,
          borderRadius: w,
          opacityDisabled: k,
          textColorCheckable: R,
          textColorHoverCheckable: y,
          textColorPressedCheckable: B,
          textColorChecked: F,
          colorCheckable: A,
          colorHoverCheckable: K,
          colorPressedCheckable: M,
          colorChecked: n,
          colorCheckedHover: D,
          colorCheckedPressed: E,
          closeBorderRadius: H,
          fontWeightStrong: L,
          [Z("colorBordered", x)]: V,
          [Z("closeSize", v)]: te,
          [Z("closeIconSize", v)]: X,
          [Z("fontSize", v)]: U,
          [Z("height", v)]: j,
          [Z("color", x)]: q,
          [Z("textColor", x)]: Y,
          [Z("border", x)]: ie,
          [Z("closeIconColor", x)]: ae,
          [Z("closeIconColorHover", x)]: fe,
          [Z("closeIconColorPressed", x)]: we,
          [Z("closeColorHover", x)]: G,
          [Z("closeColorPressed", x)]: ue
        }
      } = l.value, Re = Nt(S);
      return {
        "--n-font-weight-strong": L,
        "--n-avatar-size-override": `calc(${j} - 8px)`,
        "--n-bezier": g,
        "--n-border-radius": w,
        "--n-border": ie,
        "--n-close-icon-size": X,
        "--n-close-color-pressed": ue,
        "--n-close-color-hover": G,
        "--n-close-border-radius": H,
        "--n-close-icon-color": ae,
        "--n-close-icon-color-hover": fe,
        "--n-close-icon-color-pressed": we,
        "--n-close-icon-color-disabled": ae,
        "--n-close-margin-top": Re.top,
        "--n-close-margin-right": Re.right,
        "--n-close-margin-bottom": Re.bottom,
        "--n-close-margin-left": Re.left,
        "--n-close-size": te,
        "--n-color": m || (r.value ? V : q),
        "--n-color-checkable": A,
        "--n-color-checked": n,
        "--n-color-checked-hover": D,
        "--n-color-checked-pressed": E,
        "--n-color-hover-checkable": K,
        "--n-color-pressed-checkable": M,
        "--n-font-size": U,
        "--n-height": j,
        "--n-opacity-disabled": k,
        "--n-padding": C,
        "--n-text-color": b || Y,
        "--n-text-color-checkable": R,
        "--n-text-color-checked": F,
        "--n-text-color-hover-checkable": y,
        "--n-text-color-pressed-checkable": B
      };
    }), p = i ? Ye("tag", $(() => {
      let x = "";
      const {
        type: v,
        size: m,
        color: {
          color: b,
          textColor: g
        } = {}
      } = e;
      return x += v[0], x += m[0], b && (x += `a${Yo(b)}`), g && (x += `b${Yo(g)}`), r.value && (x += "c"), x;
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
    const u = je(d.avatar, (h) => h && f("div", {
      class: `${r}-tag__avatar`
    }, h)), c = je(d.icon, (h) => h && f("div", {
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
    }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)), !this.checkable && i ? f(So, {
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
}), Hu = ee({
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
      return f(_n, {
        clsPrefix: r,
        class: `${r}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? f(Ca, {
          clsPrefix: r,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => f(bt, {
            clsPrefix: r,
            class: `${r}-base-suffix__arrow`
          }, {
            default: () => Zt(t.default, () => [f(Du, null)])
          })
        }) : null
      });
    };
  }
}), R1 = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
function F1(e) {
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
    iconColor: x,
    iconColorDisabled: v,
    clearColor: m,
    clearColorHover: b,
    clearColorPressed: g,
    placeholderColor: C,
    placeholderColorDisabled: S,
    fontSizeTiny: w,
    fontSizeSmall: k,
    fontSizeMedium: R,
    fontSizeLarge: y,
    heightTiny: B,
    heightSmall: F,
    heightMedium: A,
    heightLarge: K,
    fontWeight: M
  } = e;
  return Object.assign(Object.assign({}, R1), {
    fontSizeTiny: w,
    fontSizeSmall: k,
    fontSizeMedium: R,
    fontSizeLarge: y,
    heightTiny: B,
    heightSmall: F,
    heightMedium: A,
    heightLarge: K,
    borderRadius: t,
    fontWeight: M,
    // default
    textColor: r,
    textColorDisabled: o,
    placeholderColor: C,
    placeholderColorDisabled: S,
    color: i,
    colorDisabled: a,
    colorActive: i,
    border: `1px solid ${p}`,
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
    arrowColor: x,
    arrowColorDisabled: v,
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
    borderHoverError: `1px solid ${h}`,
    borderActiveError: `1px solid ${c}`,
    borderFocusError: `1px solid ${h}`,
    boxShadowHoverError: "none",
    boxShadowActiveError: `0 0 0 2px ${De(c, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${De(c, {
      alpha: 0.2
    })}`,
    colorActiveError: i,
    caretColorError: c,
    clearColor: m,
    clearColorHover: b,
    clearColorPressed: g
  });
}
const ju = {
  name: "InternalSelection",
  common: Ze,
  peers: {
    Popover: fr
  },
  self: F1
}, P1 = O([z("base-selection", `
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
 `)]), Xe("disabled", [O("&:hover", [T("state-border", `
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
 `)]), ["warning", "error"].map((e) => N(`${e}-status`, [T("state-border", `border: var(--n-border-${e});`), Xe("disabled", [O("&:hover", [T("state-border", `
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
 `, [O("&:last-child", "padding-right: 0;"), z("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [T("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]), z1 = ee({
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
    } = Ae(e), o = Pt("InternalSelection", r, t), i = I(null), a = I(null), l = I(null), s = I(null), d = I(null), u = I(null), c = I(null), h = I(null), p = I(null), x = I(null), v = I(!1), m = I(!1), b = I(!1), g = ve("InternalSelection", "-internal-selection", P1, ju, e, oe(e, "clsPrefix")), C = $(() => e.clearable && !e.disabled && (b.value || e.active)), S = $(() => e.selectedOption ? e.renderTag ? e.renderTag({
      option: e.selectedOption,
      handleClose: () => {
      }
    }) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : pt(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder), w = $(() => {
      const re = e.selectedOption;
      if (re)
        return re[e.labelField];
    }), k = $(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length) : e.selectedOption !== null);
    function R() {
      var re;
      const {
        value: he
      } = i;
      if (he) {
        const {
          value: Te
        } = a;
        Te && (Te.style.width = `${he.offsetWidth}px`, e.maxTagCount !== "responsive" && ((re = p.value) === null || re === void 0 || re.sync({
          showAllItemsBeforeCalculate: !1
        })));
      }
    }
    function y() {
      const {
        value: re
      } = x;
      re && (re.style.display = "none");
    }
    function B() {
      const {
        value: re
      } = x;
      re && (re.style.display = "inline-block");
    }
    He(oe(e, "active"), (re) => {
      re || y();
    }), He(oe(e, "pattern"), () => {
      e.multiple && vt(R);
    });
    function F(re) {
      const {
        onFocus: he
      } = e;
      he && he(re);
    }
    function A(re) {
      const {
        onBlur: he
      } = e;
      he && he(re);
    }
    function K(re) {
      const {
        onDeleteOption: he
      } = e;
      he && he(re);
    }
    function M(re) {
      const {
        onClear: he
      } = e;
      he && he(re);
    }
    function n(re) {
      const {
        onPatternInput: he
      } = e;
      he && he(re);
    }
    function D(re) {
      var he;
      (!re.relatedTarget || !(!((he = l.value) === null || he === void 0) && he.contains(re.relatedTarget))) && F(re);
    }
    function E(re) {
      var he;
      !((he = l.value) === null || he === void 0) && he.contains(re.relatedTarget) || A(re);
    }
    function H(re) {
      M(re);
    }
    function L() {
      b.value = !0;
    }
    function V() {
      b.value = !1;
    }
    function te(re) {
      !e.active || !e.filterable || re.target !== a.value && re.preventDefault();
    }
    function X(re) {
      K(re);
    }
    const U = I(!1);
    function j(re) {
      if (re.key === "Backspace" && !U.value && !e.pattern.length) {
        const {
          selectedOptions: he
        } = e;
        he != null && he.length && X(he[he.length - 1]);
      }
    }
    let q = null;
    function Y(re) {
      const {
        value: he
      } = i;
      if (he) {
        const Te = re.target.value;
        he.textContent = Te, R();
      }
      e.ignoreComposition && U.value ? q = re : n(re);
    }
    function ie() {
      U.value = !0;
    }
    function ae() {
      U.value = !1, e.ignoreComposition && n(q), q = null;
    }
    function fe(re) {
      var he;
      m.value = !0, (he = e.onPatternFocus) === null || he === void 0 || he.call(e, re);
    }
    function we(re) {
      var he;
      m.value = !1, (he = e.onPatternBlur) === null || he === void 0 || he.call(e, re);
    }
    function G() {
      var re, he;
      if (e.filterable)
        m.value = !1, (re = u.value) === null || re === void 0 || re.blur(), (he = a.value) === null || he === void 0 || he.blur();
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
      var re, he, Te;
      e.filterable ? (m.value = !1, (re = u.value) === null || re === void 0 || re.focus()) : e.multiple ? (he = s.value) === null || he === void 0 || he.focus() : (Te = d.value) === null || Te === void 0 || Te.focus();
    }
    function Re() {
      const {
        value: re
      } = a;
      re && (B(), re.focus());
    }
    function be() {
      const {
        value: re
      } = a;
      re && re.blur();
    }
    function Fe(re) {
      const {
        value: he
      } = c;
      he && he.setTextContent(`+${re}`);
    }
    function Pe() {
      const {
        value: re
      } = h;
      return re;
    }
    function lt() {
      return a.value;
    }
    let Qe = null;
    function ut() {
      Qe !== null && window.clearTimeout(Qe);
    }
    function ct() {
      e.active || (ut(), Qe = window.setTimeout(() => {
        k.value && (v.value = !0);
      }, 100));
    }
    function xe() {
      ut();
    }
    function Ce(re) {
      re || (ut(), v.value = !1);
    }
    He(k, (re) => {
      re || (v.value = !1);
    }), Ft(() => {
      tt(() => {
        const re = u.value;
        re && (e.disabled ? re.removeAttribute("tabindex") : re.tabIndex = m.value ? -1 : 0);
      });
    }), Jd(l, e.onResize);
    const {
      inlineThemeDisabled: $e
    } = e, Ie = $(() => {
      const {
        size: re
      } = e, {
        common: {
          cubicBezierEaseInOut: he
        },
        self: {
          fontWeight: Te,
          borderRadius: st,
          color: zt,
          placeholderColor: $t,
          textColor: gt,
          paddingSingle: nt,
          paddingMultiple: yt,
          caretColor: et,
          colorDisabled: ce,
          textColorDisabled: Be,
          placeholderColorDisabled: P,
          colorActive: W,
          boxShadowFocus: J,
          boxShadowActive: le,
          boxShadowHover: de,
          border: pe,
          borderFocus: me,
          borderHover: Se,
          borderActive: Le,
          arrowColor: rt,
          arrowColorDisabled: Ve,
          loadingColor: Dt,
          // form warning
          colorActiveWarning: It,
          boxShadowFocusWarning: Lt,
          boxShadowActiveWarning: _t,
          boxShadowHoverWarning: Wt,
          borderWarning: Jt,
          borderFocusWarning: Vt,
          borderHoverWarning: _,
          borderActiveWarning: Q,
          // form error
          colorActiveError: ye,
          boxShadowFocusError: Oe,
          boxShadowActiveError: qe,
          boxShadowHoverError: Ne,
          borderError: ot,
          borderFocusError: ft,
          borderHoverError: Gt,
          borderActiveError: bn,
          // clear
          clearColor: xn,
          clearColorHover: Wn,
          clearColorPressed: Lr,
          clearSize: Nr,
          // arrow
          arrowSize: Hr,
          [Z("height", re)]: jr,
          [Z("fontSize", re)]: _r
        }
      } = g.value, Rn = Nt(nt), Fn = Nt(yt);
      return {
        "--n-bezier": he,
        "--n-border": pe,
        "--n-border-active": Le,
        "--n-border-focus": me,
        "--n-border-hover": Se,
        "--n-border-radius": st,
        "--n-box-shadow-active": le,
        "--n-box-shadow-focus": J,
        "--n-box-shadow-hover": de,
        "--n-caret-color": et,
        "--n-color": zt,
        "--n-color-active": W,
        "--n-color-disabled": ce,
        "--n-font-size": _r,
        "--n-height": jr,
        "--n-padding-single-top": Rn.top,
        "--n-padding-multiple-top": Fn.top,
        "--n-padding-single-right": Rn.right,
        "--n-padding-multiple-right": Fn.right,
        "--n-padding-single-left": Rn.left,
        "--n-padding-multiple-left": Fn.left,
        "--n-padding-single-bottom": Rn.bottom,
        "--n-padding-multiple-bottom": Fn.bottom,
        "--n-placeholder-color": $t,
        "--n-placeholder-color-disabled": P,
        "--n-text-color": gt,
        "--n-text-color-disabled": Be,
        "--n-arrow-color": rt,
        "--n-arrow-color-disabled": Ve,
        "--n-loading-color": Dt,
        // form warning
        "--n-color-active-warning": It,
        "--n-box-shadow-focus-warning": Lt,
        "--n-box-shadow-active-warning": _t,
        "--n-box-shadow-hover-warning": Wt,
        "--n-border-warning": Jt,
        "--n-border-focus-warning": Vt,
        "--n-border-hover-warning": _,
        "--n-border-active-warning": Q,
        // form error
        "--n-color-active-error": ye,
        "--n-box-shadow-focus-error": Oe,
        "--n-box-shadow-active-error": qe,
        "--n-box-shadow-hover-error": Ne,
        "--n-border-error": ot,
        "--n-border-focus-error": ft,
        "--n-border-hover-error": Gt,
        "--n-border-active-error": bn,
        // clear
        "--n-clear-size": Nr,
        "--n-clear-color": xn,
        "--n-clear-color-hover": Wn,
        "--n-clear-color-pressed": Lr,
        // arrow-size
        "--n-arrow-size": Hr,
        // font-weight
        "--n-font-weight": Te
      };
    }), Je = $e ? Ye("internal-selection", $(() => e.size[0]), Ie, e) : void 0;
    return {
      mergedTheme: g,
      mergedClearable: C,
      mergedClsPrefix: t,
      rtlEnabled: o,
      patternInputFocused: m,
      filterablePlaceholder: S,
      label: w,
      selected: k,
      showTagsPanel: v,
      isComposing: U,
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
      inputTagElRef: x,
      handleMouseDown: te,
      handleFocusin: D,
      handleClear: H,
      handleMouseEnter: L,
      handleMouseLeave: V,
      handleDeleteOption: X,
      handlePatternKeyDown: j,
      handlePatternInputInput: Y,
      handlePatternInputBlur: we,
      handlePatternInputFocus: fe,
      handleMouseEnterCounter: ct,
      handleMouseLeaveCounter: xe,
      handleFocusout: E,
      handleCompositionEnd: ae,
      handleCompositionStart: ie,
      onPopoverUpdateShow: Ce,
      focus: ue,
      focusInput: Re,
      blur: G,
      blurInput: be,
      updateCounter: Fe,
      getCounter: Pe,
      getTail: lt,
      renderLabel: e.renderLabel,
      cssVars: $e ? void 0 : Ie,
      themeClass: Je == null ? void 0 : Je.themeClass,
      onRender: Je == null ? void 0 : Je.onRender
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
    const p = a === "responsive", x = typeof a == "number", v = p || x, m = f(ua, null, {
      default: () => f(Hu, {
        clsPrefix: s,
        loading: this.loading,
        showArrow: this.showArrow,
        showClear: this.mergedClearable && this.selected,
        onClear: this.handleClear
      }, {
        default: () => {
          var g, C;
          return (C = (g = this.$slots).arrow) === null || C === void 0 ? void 0 : C.call(g);
        }
      })
    });
    let b;
    if (t) {
      const {
        labelField: g
      } = this, C = (n) => f("div", {
        class: `${s}-base-selection-tag-wrapper`,
        key: n.value
      }, c ? c({
        option: n,
        handleClose: () => {
          this.handleDeleteOption(n);
        }
      }) : f(Ji, {
        size: r,
        closable: !n.disabled,
        disabled: o,
        onClose: () => {
          this.handleDeleteOption(n);
        },
        internalCloseIsButtonTag: !1,
        internalCloseFocusable: !1
      }, {
        default: () => h ? h(n, !0) : pt(n[g], n, !0)
      })), S = () => (x ? this.selectedOptions.slice(0, a) : this.selectedOptions).map(C), w = i ? f("div", {
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
      }, this.pattern)) : null, k = p ? () => f("div", {
        class: `${s}-base-selection-tag-wrapper`,
        ref: "counterWrapperRef"
      }, f(Ji, {
        size: r,
        ref: "counterRef",
        onMouseenter: this.handleMouseEnterCounter,
        onMouseleave: this.handleMouseLeaveCounter,
        disabled: o
      })) : void 0;
      let R;
      if (x) {
        const n = this.selectedOptions.length - a;
        n > 0 && (R = f("div", {
          class: `${s}-base-selection-tag-wrapper`,
          key: "__counter__"
        }, f(Ji, {
          size: r,
          ref: "counterRef",
          onMouseenter: this.handleMouseEnterCounter,
          disabled: o
        }, {
          default: () => `+${n}`
        })));
      }
      const y = p ? i ? f(is, {
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
        tail: () => w
      }) : f(is, {
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
      }) : x && R ? S().concat(R) : S(), B = v ? () => f("div", {
        class: `${s}-base-selection-popover`
      }, p ? S() : this.selectedOptions.map(C)) : void 0, F = v ? Object.assign({
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
      }, this.placeholder)) : null, M = i ? f("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-tags`
      }, y, p ? null : w, m) : f("div", {
        ref: "multipleElRef",
        class: `${s}-base-selection-tags`,
        tabindex: o ? void 0 : 0
      }, y, m);
      b = f(_e, null, v ? f(hr, Object.assign({}, F, {
        scrollable: !0,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => M,
        default: B
      }) : M, K);
    } else if (i) {
      const g = this.pattern || this.isComposing, C = this.active ? !g : !this.selected, S = this.active ? !1 : this.selected;
      b = f("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-label`,
        title: this.patternInputFocused ? void 0 : ss(this.label)
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
      }) : h ? h(this.selectedOption, !0) : pt(this.label, this.selectedOption, !0))) : null, C ? f("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`,
        key: "placeholder"
      }, f("div", {
        class: `${s}-base-selection-overlay__wrapper`
      }, this.filterablePlaceholder)) : null, m);
    } else
      b = f("div", {
        ref: "singleElRef",
        class: `${s}-base-selection-label`,
        tabindex: this.disabled ? void 0 : 0
      }, this.label !== void 0 ? f("div", {
        class: `${s}-base-selection-input`,
        title: ss(this.label),
        key: "input"
      }, f("div", {
        class: `${s}-base-selection-input__content`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : h ? h(this.selectedOption, !0) : pt(this.label, this.selectedOption, !0))) : f("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`,
        key: "placeholder"
      }, f("div", {
        class: `${s}-base-selection-placeholder__inner`
      }, this.placeholder)), m);
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
    }, b, l ? f("div", {
      class: `${s}-base-selection__border`
    }) : null, l ? f("div", {
      class: `${s}-base-selection__state-border`
    }) : null);
  }
}), {
  cubicBezierEaseInOut: zn
} = Hn;
function $1({
  duration: e = ".2s",
  delay: t = ".1s"
} = {}) {
  return [O("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", {
    opacity: 1
  }), O("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), O("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${zn},
 max-width ${e} ${zn} ${t},
 margin-left ${e} ${zn} ${t},
 margin-right ${e} ${zn} ${t};
 `), O("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${zn} ${t},
 max-width ${e} ${zn},
 margin-left ${e} ${zn},
 margin-right ${e} ${zn};
 `)];
}
const A1 = z("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), D1 = ee({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    jn("-base-wave", A1, oe(e, "clsPrefix"));
    const t = I(null), r = I(!1);
    let o = null;
    return kt(() => {
      o !== null && window.clearTimeout(o);
    }), {
      active: r,
      selfRef: t,
      play() {
        o !== null && (window.clearTimeout(o), r.value = !1, o = null), vt(() => {
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
  cubicBezierEaseInOut: un,
  cubicBezierEaseOut: E1,
  cubicBezierEaseIn: T1
} = Hn;
function _u({
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
  return [O(`&.fade-in-height-expand-transition-${u}-from,
 &.fade-in-height-expand-transition-${d}-to`, Object.assign(Object.assign({}, a), {
    opacity: 1
  })), O(`&.fade-in-height-expand-transition-${u}-to,
 &.fade-in-height-expand-transition-${d}-from`, Object.assign(Object.assign({}, l), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: i ? "0 !important" : void 0,
    paddingBottom: i ? "0 !important" : void 0
  })), O(`&.fade-in-height-expand-transition-${u}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${un} ${o},
 opacity ${t} ${E1} ${o},
 margin-top ${t} ${un} ${o},
 margin-bottom ${t} ${un} ${o},
 padding-top ${t} ${un} ${o},
 padding-bottom ${t} ${un} ${o}
 ${r ? `,${r}` : ""}
 `), O(`&.fade-in-height-expand-transition-${d}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${un},
 opacity ${t} ${T1},
 margin-top ${t} ${un},
 margin-bottom ${t} ${un},
 padding-top ${t} ${un},
 padding-bottom ${t} ${un}
 ${r ? `,${r}` : ""}
 `)];
}
const O1 = Or && "chrome" in window;
Or && navigator.userAgent.includes("Firefox");
const Wu = Or && navigator.userAgent.includes("Safari") && !O1, M1 = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function I1(e) {
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
    borderRadius: x,
    lineHeight: v,
    fontSizeTiny: m,
    fontSizeSmall: b,
    fontSizeMedium: g,
    fontSizeLarge: C,
    heightTiny: S,
    heightSmall: w,
    heightMedium: k,
    heightLarge: R,
    actionColor: y,
    clearColor: B,
    clearColorHover: F,
    clearColorPressed: A,
    placeholderColor: K,
    placeholderColorDisabled: M,
    iconColor: n,
    iconColorDisabled: D,
    iconColorHover: E,
    iconColorPressed: H,
    fontWeight: L
  } = e;
  return Object.assign(Object.assign({}, M1), {
    fontWeight: L,
    countTextColorDisabled: o,
    countTextColor: r,
    heightTiny: S,
    heightSmall: w,
    heightMedium: k,
    heightLarge: R,
    fontSizeTiny: m,
    fontSizeSmall: b,
    fontSizeMedium: g,
    fontSizeLarge: C,
    lineHeight: v,
    lineHeightTextarea: v,
    borderRadius: x,
    iconSize: "16px",
    groupLabelColor: y,
    groupLabelTextColor: t,
    textColor: t,
    textColorDisabled: o,
    textDecorationColor: t,
    caretColor: i,
    placeholderColor: K,
    placeholderColorDisabled: M,
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
    loadingColorError: h,
    borderError: `1px solid ${h}`,
    borderHoverError: `1px solid ${p}`,
    colorFocusError: l,
    borderFocusError: `1px solid ${p}`,
    boxShadowFocusError: `0 0 0 2px ${De(h, {
      alpha: 0.2
    })}`,
    caretColorError: h,
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
const gl = {
  name: "Input",
  common: Ze,
  self: I1
}, Vu = "n-input", L1 = z("input", `
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
 `, [O("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), O("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), O("&:-webkit-autofill ~", [T("placeholder", "display: none;")])]),
  N("round", [Xe("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  T("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [O("span", `
 width: 100%;
 display: inline-block;
 `)]),
  N("textarea", [T("placeholder", "overflow: visible;")]),
  Xe("autosize", "width: 100%;"),
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
 `, [O("&[type=password]::-ms-reveal", "display: none;"), O("+", [T("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  Xe("textarea", [T("placeholder", "white-space: nowrap;")]),
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
  Xe("disabled", [T("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [O("&:hover", `
 color: var(--n-icon-color-hover);
 `), O("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), O("&:hover", [T("state-border", "border: var(--n-border-hover);")]), N("focus", "background-color: var(--n-color-focus);", [T("state-border", `
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
 `)])]), O(">", [z("icon", `
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
  ["warning", "error"].map((e) => N(`${e}-status`, [Xe("disabled", [z("base-loading", `
 color: var(--n-loading-color-${e})
 `), T("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), T("state-border", `
 border: var(--n-border-${e});
 `), O("&:hover", [T("state-border", `
 border: var(--n-border-hover-${e});
 `)]), O("&:focus", `
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
]), N1 = z("input", [N("disabled", [T("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
function H1(e) {
  let t = 0;
  for (const r of e)
    t++;
  return t;
}
function Lo(e) {
  return e === "" || e == null;
}
function j1(e) {
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
      afterText: h
    } = l;
    let p = d.length;
    if (d.endsWith(h))
      p = d.length - h.length;
    else if (d.startsWith(c))
      p = c.length;
    else {
      const x = c[u - 1], v = d.indexOf(x, u - 1);
      v !== -1 && (p = v + 1);
    }
    (a = s.setSelectionRange) === null || a === void 0 || a.call(s, p, p);
  }
  function i() {
    t.value = null;
  }
  return He(e, i), {
    recordCursor: r,
    restoreCursor: o
  };
}
const Ys = ee({
  name: "InputWordCount",
  setup(e, {
    slots: t
  }) {
    const {
      mergedValueRef: r,
      maxlengthRef: o,
      mergedClsPrefixRef: i,
      countGraphemesRef: a
    } = ge(Vu), l = $(() => {
      const {
        value: s
      } = r;
      return s === null || Array.isArray(s) ? 0 : (a.value || H1)(s);
    });
    return () => {
      const {
        value: s
      } = o, {
        value: d
      } = r;
      return f("span", {
        class: `${i.value}-input-word-count`
      }, da(t.default, {
        value: d === null || Array.isArray(d) ? "" : d
      }, () => [s === void 0 ? l.value : `${l.value} / ${s}`]));
    };
  }
}), _1 = Object.assign(Object.assign({}, ve.props), {
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
}), wa = ee({
  name: "Input",
  props: _1,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && tt(() => {
      e.showPasswordToggle && at("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: t,
      mergedBorderedRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = ve("Input", "-input", L1, gl, e, t);
    Wu && jn("-input-safari", N1, t);
    const l = I(null), s = I(null), d = I(null), u = I(null), c = I(null), h = I(null), p = I(null), x = j1(p), v = I(null), {
      localeRef: m
    } = er("Input"), b = I(e.defaultValue), g = oe(e, "value"), C = Mt(g, b), S = Ln(e), {
      mergedSizeRef: w,
      mergedDisabledRef: k,
      mergedStatusRef: R
    } = S, y = I(!1), B = I(!1), F = I(!1), A = I(!1);
    let K = null;
    const M = $(() => {
      const {
        placeholder: _,
        pair: Q
      } = e;
      return Q ? Array.isArray(_) ? _ : _ === void 0 ? ["", ""] : [_, _] : _ === void 0 ? [m.value.placeholder] : [_];
    }), n = $(() => {
      const {
        value: _
      } = F, {
        value: Q
      } = C, {
        value: ye
      } = M;
      return !_ && (Lo(Q) || Array.isArray(Q) && Lo(Q[0])) && ye[0];
    }), D = $(() => {
      const {
        value: _
      } = F, {
        value: Q
      } = C, {
        value: ye
      } = M;
      return !_ && ye[1] && (Lo(Q) || Array.isArray(Q) && Lo(Q[1]));
    }), E = Ue(() => e.internalForceFocus || y.value), H = Ue(() => {
      if (k.value || e.readonly || !e.clearable || !E.value && !B.value)
        return !1;
      const {
        value: _
      } = C, {
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
    }), V = I(!1), te = $(() => {
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
          autosize: ye
        } = e;
        if (ye && (X.value = (Q = (_ = v.value) === null || _ === void 0 ? void 0 : _.$el) === null || Q === void 0 ? void 0 : Q.offsetWidth), !s.value || typeof ye == "boolean") return;
        const {
          paddingTop: Oe,
          paddingBottom: qe,
          lineHeight: Ne
        } = window.getComputedStyle(s.value), ot = Number(Oe.slice(0, -2)), ft = Number(qe.slice(0, -2)), Gt = Number(Ne.slice(0, -2)), {
          value: bn
        } = d;
        if (!bn) return;
        if (ye.minRows) {
          const xn = Math.max(ye.minRows, 1), Wn = `${ot + ft + Gt * xn}px`;
          bn.style.minHeight = Wn;
        }
        if (ye.maxRows) {
          const xn = `${ot + ft + Gt * ye.maxRows}px`;
          bn.style.maxHeight = xn;
        }
      }
    }, j = $(() => {
      const {
        maxlength: _
      } = e;
      return _ === void 0 ? void 0 : Number(_);
    });
    Ft(() => {
      const {
        value: _
      } = C;
      Array.isArray(_) || Le(_);
    });
    const q = mo().proxy;
    function Y(_, Q) {
      const {
        onUpdateValue: ye,
        "onUpdate:value": Oe,
        onInput: qe
      } = e, {
        nTriggerFormInput: Ne
      } = S;
      ye && ne(ye, _, Q), Oe && ne(Oe, _, Q), qe && ne(qe, _, Q), b.value = _, Ne();
    }
    function ie(_, Q) {
      const {
        onChange: ye
      } = e, {
        nTriggerFormChange: Oe
      } = S;
      ye && ne(ye, _, Q), b.value = _, Oe();
    }
    function ae(_) {
      const {
        onBlur: Q
      } = e, {
        nTriggerFormBlur: ye
      } = S;
      Q && ne(Q, _), ye();
    }
    function fe(_) {
      const {
        onFocus: Q
      } = e, {
        nTriggerFormFocus: ye
      } = S;
      Q && ne(Q, _), ye();
    }
    function we(_) {
      const {
        onClear: Q
      } = e;
      Q && ne(Q, _);
    }
    function G(_) {
      const {
        onInputBlur: Q
      } = e;
      Q && ne(Q, _);
    }
    function ue(_) {
      const {
        onInputFocus: Q
      } = e;
      Q && ne(Q, _);
    }
    function Re() {
      const {
        onDeactivate: _
      } = e;
      _ && ne(_);
    }
    function be() {
      const {
        onActivate: _
      } = e;
      _ && ne(_);
    }
    function Fe(_) {
      const {
        onClick: Q
      } = e;
      Q && ne(Q, _);
    }
    function Pe(_) {
      const {
        onWrapperFocus: Q
      } = e;
      Q && ne(Q, _);
    }
    function lt(_) {
      const {
        onWrapperBlur: Q
      } = e;
      Q && ne(Q, _);
    }
    function Qe() {
      F.value = !0;
    }
    function ut(_) {
      F.value = !1, _.target === h.value ? ct(_, 1) : ct(_, 0);
    }
    function ct(_, Q = 0, ye = "input") {
      const Oe = _.target.value;
      if (Le(Oe), _ instanceof InputEvent && !_.isComposing && (F.value = !1), e.type === "textarea") {
        const {
          value: Ne
        } = v;
        Ne && Ne.syncUnifiedContainer();
      }
      if (K = Oe, F.value) return;
      x.recordCursor();
      const qe = xe(Oe);
      if (qe)
        if (!e.pair)
          ye === "input" ? Y(Oe, {
            source: Q
          }) : ie(Oe, {
            source: Q
          });
        else {
          let {
            value: Ne
          } = C;
          Array.isArray(Ne) ? Ne = [Ne[0], Ne[1]] : Ne = ["", ""], Ne[Q] = Oe, ye === "input" ? Y(Ne, {
            source: Q
          }) : ie(Ne, {
            source: Q
          });
        }
      q.$forceUpdate(), qe || vt(x.restoreCursor);
    }
    function xe(_) {
      const {
        countGraphemes: Q,
        maxlength: ye,
        minlength: Oe
      } = e;
      if (Q) {
        let Ne;
        if (ye !== void 0 && (Ne === void 0 && (Ne = Q(_)), Ne > Number(ye)) || Oe !== void 0 && (Ne === void 0 && (Ne = Q(_)), Ne < Number(ye)))
          return !1;
      }
      const {
        allowInput: qe
      } = e;
      return typeof qe == "function" ? qe(_) : !0;
    }
    function Ce(_) {
      G(_), _.relatedTarget === l.value && Re(), _.relatedTarget !== null && (_.relatedTarget === c.value || _.relatedTarget === h.value || _.relatedTarget === s.value) || (A.value = !1), re(_, "blur"), p.value = null;
    }
    function $e(_, Q) {
      ue(_), y.value = !0, A.value = !0, be(), re(_, "focus"), Q === 0 ? p.value = c.value : Q === 1 ? p.value = h.value : Q === 2 && (p.value = s.value);
    }
    function Ie(_) {
      e.passivelyActivated && (lt(_), re(_, "blur"));
    }
    function Je(_) {
      e.passivelyActivated && (y.value = !0, Pe(_), re(_, "focus"));
    }
    function re(_, Q) {
      _.relatedTarget !== null && (_.relatedTarget === c.value || _.relatedTarget === h.value || _.relatedTarget === s.value || _.relatedTarget === l.value) || (Q === "focus" ? (fe(_), y.value = !0) : Q === "blur" && (ae(_), y.value = !1));
    }
    function he(_, Q) {
      ct(_, Q, "change");
    }
    function Te(_) {
      Fe(_);
    }
    function st(_) {
      we(_), zt();
    }
    function zt() {
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
    function $t(_) {
      const {
        onMousedown: Q
      } = e;
      Q && Q(_);
      const {
        tagName: ye
      } = _.target;
      if (ye !== "INPUT" && ye !== "TEXTAREA") {
        if (e.resizable) {
          const {
            value: Oe
          } = l;
          if (Oe) {
            const {
              left: qe,
              top: Ne,
              width: ot,
              height: ft
            } = Oe.getBoundingClientRect(), Gt = 14;
            if (qe + ot - Gt < _.clientX && _.clientX < qe + ot && Ne + ft - Gt < _.clientY && _.clientY < Ne + ft)
              return;
          }
        }
        _.preventDefault(), y.value || J();
      }
    }
    function gt() {
      var _;
      B.value = !0, e.type === "textarea" && ((_ = v.value) === null || _ === void 0 || _.handleMouseEnterWrapper());
    }
    function nt() {
      var _;
      B.value = !1, e.type === "textarea" && ((_ = v.value) === null || _ === void 0 || _.handleMouseLeaveWrapper());
    }
    function yt() {
      k.value || L.value === "click" && (V.value = !V.value);
    }
    function et(_) {
      if (k.value) return;
      _.preventDefault();
      const Q = (Oe) => {
        Oe.preventDefault(), We("mouseup", document, Q);
      };
      if (Ke("mouseup", document, Q), L.value !== "mousedown") return;
      V.value = !0;
      const ye = () => {
        V.value = !1, We("mouseup", document, ye);
      };
      Ke("mouseup", document, ye);
    }
    function ce(_) {
      e.onKeyup && ne(e.onKeyup, _);
    }
    function Be(_) {
      switch (e.onKeydown && ne(e.onKeydown, _), _.key) {
        case "Escape":
          W();
          break;
        case "Enter":
          P(_);
          break;
      }
    }
    function P(_) {
      var Q, ye;
      if (e.passivelyActivated) {
        const {
          value: Oe
        } = A;
        if (Oe) {
          e.internalDeactivateOnEnter && W();
          return;
        }
        _.preventDefault(), e.type === "textarea" ? (Q = s.value) === null || Q === void 0 || Q.focus() : (ye = c.value) === null || ye === void 0 || ye.focus();
      }
    }
    function W() {
      e.passivelyActivated && (A.value = !1, vt(() => {
        var _;
        (_ = l.value) === null || _ === void 0 || _.focus();
      }));
    }
    function J() {
      var _, Q, ye;
      k.value || (e.passivelyActivated ? (_ = l.value) === null || _ === void 0 || _.focus() : ((Q = s.value) === null || Q === void 0 || Q.focus(), (ye = c.value) === null || ye === void 0 || ye.focus()));
    }
    function le() {
      var _;
      !((_ = l.value) === null || _ === void 0) && _.contains(document.activeElement) && document.activeElement.blur();
    }
    function de() {
      var _, Q;
      (_ = s.value) === null || _ === void 0 || _.select(), (Q = c.value) === null || Q === void 0 || Q.select();
    }
    function pe() {
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
        pair: ye,
        autosize: Oe
      } = e;
      if (!ye && Oe)
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
    function rt() {
      U();
    }
    const Ve = I({
      top: "0"
    });
    function Dt(_) {
      var Q;
      const {
        scrollTop: ye
      } = _.target;
      Ve.value.top = `${-ye}px`, (Q = v.value) === null || Q === void 0 || Q.syncUnifiedContainer();
    }
    let It = null;
    tt(() => {
      const {
        autosize: _,
        type: Q
      } = e;
      _ && Q === "textarea" ? It = He(C, (ye) => {
        !Array.isArray(ye) && ye !== K && Le(ye);
      }) : It == null || It();
    });
    let Lt = null;
    tt(() => {
      e.type === "textarea" ? Lt = He(C, (_) => {
        var Q;
        !Array.isArray(_) && _ !== K && ((Q = v.value) === null || Q === void 0 || Q.syncUnifiedContainer());
      }) : Lt == null || Lt();
    }), Ee(Vu, {
      mergedValueRef: C,
      maxlengthRef: j,
      mergedClsPrefixRef: t,
      countGraphemesRef: oe(e, "countGraphemes")
    });
    const _t = {
      wrapperElRef: l,
      inputElRef: c,
      textareaElRef: s,
      isCompositing: F,
      clear: zt,
      focus: J,
      blur: le,
      select: de,
      deactivate: me,
      activate: pe,
      scrollTo: Se
    }, Wt = Pt("Input", i, t), Jt = $(() => {
      const {
        value: _
      } = w, {
        common: {
          cubicBezierEaseInOut: Q
        },
        self: {
          color: ye,
          borderRadius: Oe,
          textColor: qe,
          caretColor: Ne,
          caretColorError: ot,
          caretColorWarning: ft,
          textDecorationColor: Gt,
          border: bn,
          borderDisabled: xn,
          borderHover: Wn,
          borderFocus: Lr,
          placeholderColor: Nr,
          placeholderColorDisabled: Hr,
          lineHeightTextarea: jr,
          colorDisabled: _r,
          colorFocus: Rn,
          textColorDisabled: Fn,
          boxShadowFocus: ki,
          iconSize: Ri,
          colorFocusWarning: Fi,
          boxShadowFocusWarning: Pi,
          borderWarning: zi,
          borderFocusWarning: $i,
          borderHoverWarning: Ai,
          colorFocusError: Di,
          boxShadowFocusError: Ei,
          borderError: Ti,
          borderFocusError: Oi,
          borderHoverError: tf,
          clearSize: nf,
          clearColor: rf,
          clearColorHover: of,
          clearColorPressed: af,
          iconColor: lf,
          iconColorDisabled: sf,
          suffixTextColor: df,
          countTextColor: uf,
          countTextColorDisabled: cf,
          iconColorHover: ff,
          iconColorPressed: hf,
          loadingColor: vf,
          loadingColorError: pf,
          loadingColorWarning: gf,
          fontWeight: mf,
          [Z("padding", _)]: bf,
          [Z("fontSize", _)]: xf,
          [Z("height", _)]: Cf
        }
      } = a.value, {
        left: yf,
        right: wf
      } = Nt(bf);
      return {
        "--n-bezier": Q,
        "--n-count-text-color": uf,
        "--n-count-text-color-disabled": cf,
        "--n-color": ye,
        "--n-font-size": xf,
        "--n-font-weight": mf,
        "--n-border-radius": Oe,
        "--n-height": Cf,
        "--n-padding-left": yf,
        "--n-padding-right": wf,
        "--n-text-color": qe,
        "--n-caret-color": Ne,
        "--n-text-decoration-color": Gt,
        "--n-border": bn,
        "--n-border-disabled": xn,
        "--n-border-hover": Wn,
        "--n-border-focus": Lr,
        "--n-placeholder-color": Nr,
        "--n-placeholder-color-disabled": Hr,
        "--n-icon-size": Ri,
        "--n-line-height-textarea": jr,
        "--n-color-disabled": _r,
        "--n-color-focus": Rn,
        "--n-text-color-disabled": Fn,
        "--n-box-shadow-focus": ki,
        "--n-loading-color": vf,
        // form warning
        "--n-caret-color-warning": ft,
        "--n-color-focus-warning": Fi,
        "--n-box-shadow-focus-warning": Pi,
        "--n-border-warning": zi,
        "--n-border-focus-warning": $i,
        "--n-border-hover-warning": Ai,
        "--n-loading-color-warning": gf,
        // form error
        "--n-caret-color-error": ot,
        "--n-color-focus-error": Di,
        "--n-box-shadow-focus-error": Ei,
        "--n-border-error": Ti,
        "--n-border-focus-error": Oi,
        "--n-border-hover-error": tf,
        "--n-loading-color-error": pf,
        // clear-button
        "--n-clear-color": rf,
        "--n-clear-size": nf,
        "--n-clear-color-hover": of,
        "--n-clear-color-pressed": af,
        "--n-icon-color": lf,
        "--n-icon-color-hover": ff,
        "--n-icon-color-pressed": hf,
        "--n-icon-color-disabled": sf,
        "--n-suffix-text-color": df
      };
    }), Vt = o ? Ye("input", $(() => {
      const {
        value: _
      } = w;
      return _[0];
    }), Jt, e) : void 0;
    return Object.assign(Object.assign({}, _t), {
      // DOM ref
      wrapperElRef: l,
      inputElRef: c,
      inputMirrorElRef: u,
      inputEl2Ref: h,
      textareaElRef: s,
      textareaMirrorElRef: d,
      textareaScrollbarInstRef: v,
      // value
      rtlEnabled: Wt,
      uncontrolledValue: b,
      mergedValue: C,
      passwordVisible: V,
      mergedPlaceholder: M,
      showPlaceholder1: n,
      showPlaceholder2: D,
      mergedFocus: E,
      isComposing: F,
      activated: A,
      showClearButton: H,
      mergedSize: w,
      mergedDisabled: k,
      textDecorationStyle: te,
      mergedClsPrefix: t,
      mergedBordered: r,
      mergedShowPasswordOn: L,
      placeholderStyle: Ve,
      mergedStatus: R,
      textAreaScrollContainerWidth: X,
      // methods
      handleTextAreaScroll: Dt,
      handleCompositionStart: Qe,
      handleCompositionEnd: ut,
      handleInput: ct,
      handleInputBlur: Ce,
      handleInputFocus: $e,
      handleWrapperBlur: Ie,
      handleWrapperFocus: Je,
      handleMouseEnter: gt,
      handleMouseLeave: nt,
      handleMouseDown: $t,
      handleChange: he,
      handleClick: Te,
      handleClear: st,
      handlePasswordToggleClick: yt,
      handlePasswordToggleMousedown: et,
      handleWrapperKeydown: Be,
      handleWrapperKeyup: ce,
      handleTextAreaMirrorResize: rt,
      getTextareaScrollContainer: () => s.value,
      mergedTheme: a,
      cssVars: o ? void 0 : Jt,
      themeClass: Vt == null ? void 0 : Vt.themeClass,
      onRender: Vt == null ? void 0 : Vt.onRender
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
    }, je(d.prefix, (u) => u && f("div", {
      class: `${r}-input__prefix`
    }, u)), a === "textarea" ? f(cr, {
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
        return f(_e, null, f("textarea", Object.assign({}, this.inputProps, {
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
          onFocus: (x) => {
            this.handleInputFocus(x, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? f("div", {
          class: `${r}-input__placeholder`,
          style: [this.placeholderStyle, p],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? f(Pr, {
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
    }, " ") : null), !this.pair && je(d.suffix, (u) => u || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? f("div", {
      class: `${r}-input__suffix`
    }, [je(d["clear-icon-placeholder"], (c) => (this.clearable || c) && f(Ca, {
      clsPrefix: r,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => c,
      icon: () => {
        var h, p;
        return (p = (h = this.$slots)["clear-icon"]) === null || p === void 0 ? void 0 : p.call(h);
      }
    })), this.internalLoadingBeforeSuffix ? null : u, this.loading !== void 0 ? f(Hu, {
      clsPrefix: r,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? u : null, this.showCount && this.type !== "textarea" ? f(Ys, null, {
      default: (c) => {
        var h;
        const {
          renderCount: p
        } = this;
        return p ? p(c) : (h = d.count) === null || h === void 0 ? void 0 : h.call(d, c);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? f("div", {
      class: `${r}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? Zt(d["password-visible-icon"], () => [f(bt, {
      clsPrefix: r
    }, {
      default: () => f(mx, null)
    })]) : Zt(d["password-invisible-icon"], () => [f(bt, {
      clsPrefix: r
    }, {
      default: () => f(bx, null)
    })])) : null]) : null)), this.pair ? f("span", {
      class: `${r}-input__separator`
    }, Zt(d.separator, () => [this.separator])) : null, this.pair ? f("div", {
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
    }, f("span", null, this.mergedPlaceholder[1])) : null), je(d.suffix, (u) => (this.clearable || u) && f("div", {
      class: `${r}-input__suffix`
    }, [this.clearable && f(Ca, {
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
    }) : null, this.showCount && a === "textarea" ? f(Ys, null, {
      default: (u) => {
        var c;
        const {
          renderCount: h
        } = this;
        return h ? h(u) : (c = d.count) === null || c === void 0 ? void 0 : c.call(d, u);
      }
    }) : null);
  }
}), W1 = z("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [O(">", [z("input", [O("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), O("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), z("button", [O("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [T("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), O("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [T("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), O("*", [O("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [O(">", [z("input", `
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
 `)])])]), O("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [O(">", [z("input", `
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
 `)])])])])])]), V1 = {}, K1 = ee({
  name: "InputGroup",
  props: V1,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e);
    return jn("-input-group", W1, t), {
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
}), U1 = z("input-group-label", `
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
 `)]), q1 = Object.assign(Object.assign({}, ve.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
}), G1 = ee({
  name: "InputGroupLabel",
  props: q1,
  setup(e) {
    const {
      mergedBorderedRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("Input", "-input-group-label", U1, gl, e, r), a = $(() => {
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
          groupLabelBorder: x,
          [Z("fontSize", s)]: v,
          [Z("height", s)]: m
        }
      } = i.value;
      return {
        "--n-bezier": d,
        "--n-group-label-color": u,
        "--n-group-label-border": x,
        "--n-border-radius": c,
        "--n-group-label-text-color": h,
        "--n-font-size": v,
        "--n-line-height": p,
        "--n-height": m
      };
    }), l = o ? Ye("input-group-label", $(() => e.size[0]), a, e) : void 0;
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
function ii(e) {
  return e.type === "group";
}
function Ku(e) {
  return e.type === "ignored";
}
function Qi(e, t) {
  try {
    return !!(1 + t.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
function Uu(e, t) {
  return {
    getIsGroup: ii,
    getIgnored: Ku,
    getKey(o) {
      return ii(o) ? o.name || o.key || "key-required" : o[e];
    },
    getChildren(o) {
      return o[t];
    }
  };
}
function X1(e, t, r, o) {
  if (!t) return e;
  function i(a) {
    if (!Array.isArray(a)) return [];
    const l = [];
    for (const s of a)
      if (ii(s)) {
        const d = i(s[o]);
        d.length && l.push(Object.assign({}, s, {
          [o]: d
        }));
      } else {
        if (Ku(s))
          continue;
        t(r, s) && l.push(s);
      }
    return l;
  }
  return i(e);
}
function Y1(e, t, r) {
  const o = /* @__PURE__ */ new Map();
  return e.forEach((i) => {
    ii(i) ? i[r].forEach((a) => {
      o.set(a[t], a);
    }) : o.set(i[t], i);
  }), o;
}
function Vn(e) {
  return Ge(e, [255, 255, 255, 0.16]);
}
function No(e) {
  return Ge(e, [0, 0, 0, 0.12]);
}
const Z1 = "n-button-group", J1 = {
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
function Q1(e) {
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
    primaryColorHover: x,
    primaryColorPressed: v,
    borderColor: m,
    primaryColor: b,
    baseColor: g,
    infoColor: C,
    infoColorHover: S,
    infoColorPressed: w,
    successColor: k,
    successColorHover: R,
    successColorPressed: y,
    warningColor: B,
    warningColorHover: F,
    warningColorPressed: A,
    errorColor: K,
    errorColorHover: M,
    errorColorPressed: n,
    fontWeight: D,
    buttonColor2: E,
    buttonColor2Hover: H,
    buttonColor2Pressed: L,
    fontWeightStrong: V
  } = e;
  return Object.assign(Object.assign({}, J1), {
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
    textColor: h,
    textColorTertiary: p,
    textColorHover: x,
    textColorPressed: v,
    textColorFocus: x,
    textColorDisabled: h,
    textColorText: h,
    textColorTextHover: x,
    textColorTextPressed: v,
    textColorTextFocus: x,
    textColorTextDisabled: h,
    textColorGhost: h,
    textColorGhostHover: x,
    textColorGhostPressed: v,
    textColorGhostFocus: x,
    textColorGhostDisabled: h,
    border: `1px solid ${m}`,
    borderHover: `1px solid ${x}`,
    borderPressed: `1px solid ${v}`,
    borderFocus: `1px solid ${x}`,
    borderDisabled: `1px solid ${m}`,
    rippleColor: b,
    // primary
    colorPrimary: b,
    colorHoverPrimary: x,
    colorPressedPrimary: v,
    colorFocusPrimary: x,
    colorDisabledPrimary: b,
    textColorPrimary: g,
    textColorHoverPrimary: g,
    textColorPressedPrimary: g,
    textColorFocusPrimary: g,
    textColorDisabledPrimary: g,
    textColorTextPrimary: b,
    textColorTextHoverPrimary: x,
    textColorTextPressedPrimary: v,
    textColorTextFocusPrimary: x,
    textColorTextDisabledPrimary: h,
    textColorGhostPrimary: b,
    textColorGhostHoverPrimary: x,
    textColorGhostPressedPrimary: v,
    textColorGhostFocusPrimary: x,
    textColorGhostDisabledPrimary: b,
    borderPrimary: `1px solid ${b}`,
    borderHoverPrimary: `1px solid ${x}`,
    borderPressedPrimary: `1px solid ${v}`,
    borderFocusPrimary: `1px solid ${x}`,
    borderDisabledPrimary: `1px solid ${b}`,
    rippleColorPrimary: b,
    // info
    colorInfo: C,
    colorHoverInfo: S,
    colorPressedInfo: w,
    colorFocusInfo: S,
    colorDisabledInfo: C,
    textColorInfo: g,
    textColorHoverInfo: g,
    textColorPressedInfo: g,
    textColorFocusInfo: g,
    textColorDisabledInfo: g,
    textColorTextInfo: C,
    textColorTextHoverInfo: S,
    textColorTextPressedInfo: w,
    textColorTextFocusInfo: S,
    textColorTextDisabledInfo: h,
    textColorGhostInfo: C,
    textColorGhostHoverInfo: S,
    textColorGhostPressedInfo: w,
    textColorGhostFocusInfo: S,
    textColorGhostDisabledInfo: C,
    borderInfo: `1px solid ${C}`,
    borderHoverInfo: `1px solid ${S}`,
    borderPressedInfo: `1px solid ${w}`,
    borderFocusInfo: `1px solid ${S}`,
    borderDisabledInfo: `1px solid ${C}`,
    rippleColorInfo: C,
    // success
    colorSuccess: k,
    colorHoverSuccess: R,
    colorPressedSuccess: y,
    colorFocusSuccess: R,
    colorDisabledSuccess: k,
    textColorSuccess: g,
    textColorHoverSuccess: g,
    textColorPressedSuccess: g,
    textColorFocusSuccess: g,
    textColorDisabledSuccess: g,
    textColorTextSuccess: k,
    textColorTextHoverSuccess: R,
    textColorTextPressedSuccess: y,
    textColorTextFocusSuccess: R,
    textColorTextDisabledSuccess: h,
    textColorGhostSuccess: k,
    textColorGhostHoverSuccess: R,
    textColorGhostPressedSuccess: y,
    textColorGhostFocusSuccess: R,
    textColorGhostDisabledSuccess: k,
    borderSuccess: `1px solid ${k}`,
    borderHoverSuccess: `1px solid ${R}`,
    borderPressedSuccess: `1px solid ${y}`,
    borderFocusSuccess: `1px solid ${R}`,
    borderDisabledSuccess: `1px solid ${k}`,
    rippleColorSuccess: k,
    // warning
    colorWarning: B,
    colorHoverWarning: F,
    colorPressedWarning: A,
    colorFocusWarning: F,
    colorDisabledWarning: B,
    textColorWarning: g,
    textColorHoverWarning: g,
    textColorPressedWarning: g,
    textColorFocusWarning: g,
    textColorDisabledWarning: g,
    textColorTextWarning: B,
    textColorTextHoverWarning: F,
    textColorTextPressedWarning: A,
    textColorTextFocusWarning: F,
    textColorTextDisabledWarning: h,
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
    colorError: K,
    colorHoverError: M,
    colorPressedError: n,
    colorFocusError: M,
    colorDisabledError: K,
    textColorError: g,
    textColorHoverError: g,
    textColorPressedError: g,
    textColorFocusError: g,
    textColorDisabledError: g,
    textColorTextError: K,
    textColorTextHoverError: M,
    textColorTextPressedError: n,
    textColorTextFocusError: M,
    textColorTextDisabledError: h,
    textColorGhostError: K,
    textColorGhostHoverError: M,
    textColorGhostPressedError: n,
    textColorGhostFocusError: M,
    textColorGhostDisabledError: K,
    borderError: `1px solid ${K}`,
    borderHoverError: `1px solid ${M}`,
    borderPressedError: `1px solid ${n}`,
    borderFocusError: `1px solid ${M}`,
    borderDisabledError: `1px solid ${K}`,
    rippleColorError: K,
    waveOpacity: "0.6",
    fontWeight: D,
    fontWeightStrong: V
  });
}
const xi = {
  name: "Button",
  common: Ze,
  self: Q1
}, eC = O([z("button", `
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
})]), Xe("disabled", [O("&:focus", [T("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), O("&:hover", [T("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), O("&:active", [T("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), N("pressed", [T("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), N("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [T("border", {
  border: "var(--n-border-disabled)"
})]), Xe("disabled", [O("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [T("state-border", {
  border: "var(--n-border-focus)"
})]), O("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [T("state-border", {
  border: "var(--n-border-hover)"
})]), O("&:active", {
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
})]), Or && "MozBoxSizing" in document.createElement("div").style ? O("&::moz-focus-inner", {
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
 `, [Xt({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), $1()]), T("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [O("~", [T("icon", {
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
})]), O("@keyframes button-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
  }
}), O("@keyframes button-wave-opacity", {
  from: {
    opacity: "var(--n-wave-opacity)"
  },
  to: {
    opacity: 0
  }
})]), tC = Object.assign(Object.assign({}, ve.props), {
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
    default: !Wu
  }
}), nr = ee({
  name: "Button",
  props: tC,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && tt(() => {
      const {
        dashed: w,
        ghost: k,
        text: R,
        secondary: y,
        tertiary: B,
        quaternary: F
      } = e;
      (w || k || R) && (y || B || F) && at("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const t = I(null), r = I(null), o = I(!1), i = Ue(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = ge(Z1, {}), {
      mergedSizeRef: l
    } = Ln({}, {
      defaultSize: "medium",
      mergedSize: (w) => {
        const {
          size: k
        } = e;
        if (k) return k;
        const {
          size: R
        } = a;
        if (R) return R;
        const {
          mergedSize: y
        } = w || {};
        return y ? y.value : "medium";
      }
    }), s = $(() => e.focusable && !e.disabled), d = (w) => {
      var k;
      s.value || w.preventDefault(), !e.nativeFocusBehavior && (w.preventDefault(), !e.disabled && s.value && ((k = t.value) === null || k === void 0 || k.focus({
        preventScroll: !0
      })));
    }, u = (w) => {
      var k;
      if (!e.disabled && !e.loading) {
        const {
          onClick: R
        } = e;
        R && ne(R, w), e.text || (k = r.value) === null || k === void 0 || k.play();
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
      inlineThemeDisabled: x,
      mergedClsPrefixRef: v,
      mergedRtlRef: m
    } = Ae(e), b = ve("Button", "-button", eC, xi, e, v), g = Pt("Button", m, v), C = $(() => {
      const w = b.value, {
        common: {
          cubicBezierEaseInOut: k,
          cubicBezierEaseOut: R
        },
        self: y
      } = w, {
        rippleDuration: B,
        opacityDisabled: F,
        fontWeight: A,
        fontWeightStrong: K
      } = y, M = l.value, {
        dashed: n,
        type: D,
        ghost: E,
        text: H,
        color: L,
        round: V,
        circle: te,
        textColor: X,
        secondary: U,
        tertiary: j,
        quaternary: q,
        strong: Y
      } = e, ie = {
        "--n-font-weight": Y ? K : A
      };
      let ae = {
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
        const Ce = X || L;
        ae = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": Ce || y[Z("textColorText", G)],
          "--n-text-color-hover": Ce ? Vn(Ce) : y[Z("textColorTextHover", G)],
          "--n-text-color-pressed": Ce ? No(Ce) : y[Z("textColorTextPressed", G)],
          "--n-text-color-focus": Ce ? Vn(Ce) : y[Z("textColorTextHover", G)],
          "--n-text-color-disabled": Ce || y[Z("textColorTextDisabled", G)]
        };
      } else if (E || n) {
        const Ce = X || L;
        ae = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": L || y[Z("rippleColor", G)],
          "--n-text-color": Ce || y[Z("textColorGhost", G)],
          "--n-text-color-hover": Ce ? Vn(Ce) : y[Z("textColorGhostHover", G)],
          "--n-text-color-pressed": Ce ? No(Ce) : y[Z("textColorGhostPressed", G)],
          "--n-text-color-focus": Ce ? Vn(Ce) : y[Z("textColorGhostHover", G)],
          "--n-text-color-disabled": Ce || y[Z("textColorGhostDisabled", G)]
        };
      } else if (U) {
        const Ce = we ? y.textColor : fe ? y.textColorTertiary : y[Z("color", G)], $e = L || Ce, Ie = D !== "default" && D !== "tertiary";
        ae = {
          "--n-color": Ie ? De($e, {
            alpha: Number(y.colorOpacitySecondary)
          }) : y.colorSecondary,
          "--n-color-hover": Ie ? De($e, {
            alpha: Number(y.colorOpacitySecondaryHover)
          }) : y.colorSecondaryHover,
          "--n-color-pressed": Ie ? De($e, {
            alpha: Number(y.colorOpacitySecondaryPressed)
          }) : y.colorSecondaryPressed,
          "--n-color-focus": Ie ? De($e, {
            alpha: Number(y.colorOpacitySecondaryHover)
          }) : y.colorSecondaryHover,
          "--n-color-disabled": y.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": $e,
          "--n-text-color-hover": $e,
          "--n-text-color-pressed": $e,
          "--n-text-color-focus": $e,
          "--n-text-color-disabled": $e
        };
      } else if (j || q) {
        const Ce = we ? y.textColor : fe ? y.textColorTertiary : y[Z("color", G)], $e = L || Ce;
        j ? (ae["--n-color"] = y.colorTertiary, ae["--n-color-hover"] = y.colorTertiaryHover, ae["--n-color-pressed"] = y.colorTertiaryPressed, ae["--n-color-focus"] = y.colorSecondaryHover, ae["--n-color-disabled"] = y.colorTertiary) : (ae["--n-color"] = y.colorQuaternary, ae["--n-color-hover"] = y.colorQuaternaryHover, ae["--n-color-pressed"] = y.colorQuaternaryPressed, ae["--n-color-focus"] = y.colorQuaternaryHover, ae["--n-color-disabled"] = y.colorQuaternary), ae["--n-ripple-color"] = "#0000", ae["--n-text-color"] = $e, ae["--n-text-color-hover"] = $e, ae["--n-text-color-pressed"] = $e, ae["--n-text-color-focus"] = $e, ae["--n-text-color-disabled"] = $e;
      } else
        ae = {
          "--n-color": L || y[Z("color", G)],
          "--n-color-hover": L ? Vn(L) : y[Z("colorHover", G)],
          "--n-color-pressed": L ? No(L) : y[Z("colorPressed", G)],
          "--n-color-focus": L ? Vn(L) : y[Z("colorFocus", G)],
          "--n-color-disabled": L || y[Z("colorDisabled", G)],
          "--n-ripple-color": L || y[Z("rippleColor", G)],
          "--n-text-color": X || (L ? y.textColorPrimary : fe ? y.textColorTertiary : y[Z("textColor", G)]),
          "--n-text-color-hover": X || (L ? y.textColorHoverPrimary : y[Z("textColorHover", G)]),
          "--n-text-color-pressed": X || (L ? y.textColorPressedPrimary : y[Z("textColorPressed", G)]),
          "--n-text-color-focus": X || (L ? y.textColorFocusPrimary : y[Z("textColorFocus", G)]),
          "--n-text-color-disabled": X || (L ? y.textColorDisabledPrimary : y[Z("textColorDisabled", G)])
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
        "--n-border": y[Z("border", G)],
        "--n-border-hover": y[Z("borderHover", G)],
        "--n-border-pressed": y[Z("borderPressed", G)],
        "--n-border-focus": y[Z("borderFocus", G)],
        "--n-border-disabled": y[Z("borderDisabled", G)]
      };
      const {
        [Z("height", M)]: Re,
        [Z("fontSize", M)]: be,
        [Z("padding", M)]: Fe,
        [Z("paddingRound", M)]: Pe,
        [Z("iconSize", M)]: lt,
        [Z("borderRadius", M)]: Qe,
        [Z("iconMargin", M)]: ut,
        waveOpacity: ct
      } = y, xe = {
        "--n-width": te && !H ? Re : "initial",
        "--n-height": H ? "initial" : Re,
        "--n-font-size": be,
        "--n-padding": te || H ? "initial" : V ? Pe : Fe,
        "--n-icon-size": lt,
        "--n-icon-margin": ut,
        "--n-border-radius": H ? "initial" : te || V ? Re : Qe
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": k,
        "--n-bezier-ease-out": R,
        "--n-ripple-duration": B,
        "--n-opacity-disabled": F,
        "--n-wave-opacity": ct
      }, ie), ae), ue), xe);
    }), S = x ? Ye("button", $(() => {
      let w = "";
      const {
        dashed: k,
        type: R,
        ghost: y,
        text: B,
        color: F,
        round: A,
        circle: K,
        textColor: M,
        secondary: n,
        tertiary: D,
        quaternary: E,
        strong: H
      } = e;
      k && (w += "a"), y && (w += "b"), B && (w += "c"), A && (w += "d"), K && (w += "e"), n && (w += "f"), D && (w += "g"), E && (w += "h"), H && (w += "i"), F && (w += `j${Yo(F)}`), M && (w += `k${Yo(M)}`);
      const {
        value: L
      } = l;
      return w += `l${L[0]}`, w += `m${R[0]}`, w;
    }), C, e) : void 0;
    return {
      selfElRef: t,
      waveElRef: r,
      mergedClsPrefix: v,
      mergedFocusable: s,
      mergedSize: l,
      showBorder: i,
      enterPressed: o,
      rtlEnabled: g,
      handleMousedown: d,
      handleKeydown: h,
      handleBlur: p,
      handleKeyup: c,
      handleClick: u,
      customColorCssVars: $(() => {
        const {
          color: w
        } = e;
        if (!w) return null;
        const k = Vn(w);
        return {
          "--n-border-color": w,
          "--n-border-color-hover": k,
          "--n-border-color-pressed": No(w),
          "--n-border-color-focus": k,
          "--n-border-color-disabled": w
        };
      }),
      cssVars: x ? void 0 : C,
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
    const o = je(this.$slots.default, (i) => i && f("span", {
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
    }, this.iconPlacement === "right" && o, f(fl, {
      width: !0
    }, {
      default: () => je(this.$slots.icon, (i) => (this.loading || this.renderIcon || i) && f("span", {
        class: `${e}-button__icon`,
        style: {
          margin: Sr(this.$slots.default) ? "0" : ""
        }
      }, f(ur, null, {
        default: () => this.loading ? f(_n, {
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
    }), this.iconPlacement === "left" && o, this.text ? null : f(D1, {
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
}), nC = {
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
function rC(e) {
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
    closeColorHover: x,
    closeColorPressed: v,
    modalColor: m,
    boxShadow1: b,
    popoverColor: g,
    actionColor: C
  } = e;
  return Object.assign(Object.assign({}, nC), {
    lineHeight: o,
    color: a,
    colorModal: m,
    colorPopover: g,
    colorTarget: t,
    colorEmbedded: C,
    colorEmbeddedModal: C,
    colorEmbeddedPopover: C,
    textColor: l,
    titleTextColor: s,
    borderColor: d,
    actionColor: C,
    titleFontWeight: u,
    closeColorHover: x,
    closeColorPressed: v,
    closeBorderRadius: r,
    closeIconColor: c,
    closeIconColorHover: h,
    closeIconColorPressed: p,
    fontSizeSmall: i,
    fontSizeMedium: i,
    fontSizeLarge: i,
    fontSizeHuge: i,
    boxShadow: b,
    borderRadius: r
  });
}
const qu = {
  name: "Card",
  common: Ze,
  self: rC
}, oC = O([z("card", `
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
 `, [zd({
  background: "var(--n-color-modal)"
}), N("hoverable", [O("&:hover", "box-shadow: var(--n-box-shadow);")]), N("content-segmented", [O(">", [T("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), N("content-soft-segmented", [O(">", [T("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), N("footer-segmented", [O(">", [T("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), N("footer-soft-segmented", [O(">", [T("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), O(">", [z("card-header", `
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
 `, [O("&:first-child", {
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
 `, [O("img", `
 display: block;
 width: 100%;
 `)]), N("bordered", `
 border: 1px solid var(--n-border-color);
 `, [O("&:target", "border-color: var(--n-color-target);")]), N("action-segmented", [O(">", [T("action", [O("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("content-segmented, content-soft-segmented", [O(">", [T("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [O("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("footer-segmented, footer-soft-segmented", [O(">", [T("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [O("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("embedded", `
 background-color: var(--n-color-embedded);
 `)]), ui(z("card", `
 background: var(--n-color-modal);
 `, [N("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), Ma(z("card", `
 background: var(--n-color-popover);
 `, [N("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), ml = {
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
}, iC = Tn(ml), aC = Object.assign(Object.assign({}, ve.props), ml), lC = ee({
  name: "Card",
  props: aC,
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
    } = Ae(e), a = ve("Card", "-card", oC, qu, e, o), l = Pt("Card", i, o), s = $(() => {
      const {
        size: u
      } = e, {
        self: {
          color: c,
          colorModal: h,
          colorTarget: p,
          textColor: x,
          titleTextColor: v,
          titleFontWeight: m,
          borderColor: b,
          actionColor: g,
          borderRadius: C,
          lineHeight: S,
          closeIconColor: w,
          closeIconColorHover: k,
          closeIconColorPressed: R,
          closeColorHover: y,
          closeColorPressed: B,
          closeBorderRadius: F,
          closeIconSize: A,
          closeSize: K,
          boxShadow: M,
          colorPopover: n,
          colorEmbedded: D,
          colorEmbeddedModal: E,
          colorEmbeddedPopover: H,
          [Z("padding", u)]: L,
          [Z("fontSize", u)]: V,
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
        "--n-border-radius": C,
        "--n-color": c,
        "--n-color-modal": h,
        "--n-color-popover": n,
        "--n-color-embedded": D,
        "--n-color-embedded-modal": E,
        "--n-color-embedded-popover": H,
        "--n-color-target": p,
        "--n-text-color": x,
        "--n-line-height": S,
        "--n-action-color": g,
        "--n-title-text-color": v,
        "--n-title-font-weight": m,
        "--n-close-icon-color": w,
        "--n-close-icon-color-hover": k,
        "--n-close-icon-color-pressed": R,
        "--n-close-color-hover": y,
        "--n-close-color-pressed": B,
        "--n-border-color": b,
        "--n-box-shadow": M,
        // size
        "--n-padding-top": U,
        "--n-padding-bottom": q,
        "--n-padding-left": j,
        "--n-font-size": V,
        "--n-title-font-size": te,
        "--n-close-size": K,
        "--n-close-icon-size": A,
        "--n-close-border-radius": F
      };
    }), d = r ? Ye("card", $(() => e.size[0]), s, e) : void 0;
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
    }, je(d.cover, (u) => {
      const c = this.cover ? en([this.cover()]) : u;
      return c && f("div", {
        class: `${o}-card-cover`,
        role: "none"
      }, c);
    }), je(d.header, (u) => {
      const {
        title: c
      } = this, h = c ? en(typeof c == "function" ? [c()] : [c]) : u;
      return h || this.closable ? f("div", {
        class: [`${o}-card-header`, this.headerClass],
        style: this.headerStyle,
        role: "heading"
      }, f("div", {
        class: `${o}-card-header__main`,
        role: "heading"
      }, h), je(d["header-extra"], (p) => {
        const x = this.headerExtra ? en([this.headerExtra()]) : p;
        return x && f("div", {
          class: [`${o}-card-header__extra`, this.headerExtraClass],
          style: this.headerExtraStyle
        }, x);
      }), this.closable && f(So, {
        clsPrefix: o,
        class: `${o}-card-header__close`,
        onClick: this.handleCloseClick,
        absolute: !0
      })) : null;
    }), je(d.default, (u) => {
      const {
        content: c
      } = this, h = c ? en(typeof c == "function" ? [c()] : [c]) : u;
      return h && f("div", {
        class: [`${o}-card__content`, this.contentClass],
        style: this.contentStyle,
        role: "none"
      }, h);
    }), je(d.footer, (u) => {
      const c = this.footer ? en([this.footer()]) : u;
      return c && f("div", {
        class: [`${o}-card__footer`, this.footerClass],
        style: this.footerStyle,
        role: "none"
      }, c);
    }), je(d.action, (u) => {
      const c = this.action ? en([this.action()]) : u;
      return c && f("div", {
        class: `${o}-card__action`,
        role: "none"
      }, c);
    }));
  }
}), sC = {
  sizeSmall: "14px",
  sizeMedium: "16px",
  sizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function dC(e) {
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
    borderRadiusSmall: x,
    lineHeight: v
  } = e;
  return Object.assign(Object.assign({}, sC), {
    labelLineHeight: v,
    fontSizeSmall: c,
    fontSizeMedium: h,
    fontSizeLarge: p,
    borderRadius: x,
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
const Gu = {
  name: "Checkbox",
  common: Ze,
  self: dC
}, Xu = "n-checkbox-group", uC = {
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
}, cC = ee({
  name: "CheckboxGroup",
  props: uC,
  setup(e) {
    process.env.NODE_ENV !== "production" && tt(() => {
      e.onChange !== void 0 && at("checkbox-group", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = Ln(e), {
      mergedSizeRef: o,
      mergedDisabledRef: i
    } = r, a = I(e.defaultValue), l = $(() => e.value), s = Mt(l, a), d = $(() => {
      var h;
      return ((h = s.value) === null || h === void 0 ? void 0 : h.length) || 0;
    }), u = $(() => Array.isArray(s.value) ? new Set(s.value) : /* @__PURE__ */ new Set());
    function c(h, p) {
      const {
        nTriggerFormInput: x,
        nTriggerFormChange: v
      } = r, {
        onChange: m,
        "onUpdate:value": b,
        onUpdateValue: g
      } = e;
      if (Array.isArray(s.value)) {
        const C = Array.from(s.value), S = C.findIndex((w) => w === p);
        h ? ~S || (C.push(p), g && ne(g, C, {
          actionType: "check",
          value: p
        }), b && ne(b, C, {
          actionType: "check",
          value: p
        }), x(), v(), a.value = C, m && ne(m, C)) : ~S && (C.splice(S, 1), g && ne(g, C, {
          actionType: "uncheck",
          value: p
        }), b && ne(b, C, {
          actionType: "uncheck",
          value: p
        }), m && ne(m, C), a.value = C, x(), v());
      } else
        h ? (g && ne(g, [p], {
          actionType: "check",
          value: p
        }), b && ne(b, [p], {
          actionType: "check",
          value: p
        }), m && ne(m, [p]), a.value = [p], x(), v()) : (g && ne(g, [], {
          actionType: "uncheck",
          value: p
        }), b && ne(b, [], {
          actionType: "uncheck",
          value: p
        }), m && ne(m, []), a.value = [], x(), v());
    }
    return Ee(Xu, {
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
}), fC = () => f("svg", {
  viewBox: "0 0 64 64",
  class: "check-icon"
}, f("path", {
  d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"
})), hC = () => f("svg", {
  viewBox: "0 0 100 100",
  class: "line-icon"
}, f("path", {
  d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"
})), vC = O([
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
 `, [N("show-label", "line-height: var(--n-label-line-height);"), O("&:hover", [z("checkbox-box", [T("border", "border: var(--n-border-checked);")])]), O("&:focus:not(:active)", [z("checkbox-box", [T("border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), N("inside-table", [z("checkbox-box", `
 background-color: var(--n-merged-color-table);
 `)]), N("checked", [z("checkbox-box", `
 background-color: var(--n-color-checked);
 `, [z("checkbox-icon", [
    // if not set width to 100%, safari & old chrome won't display the icon
    O(".check-icon", `
 opacity: 1;
 transform: scale(1);
 `)
  ])])]), N("indeterminate", [z("checkbox-box", [z("checkbox-icon", [O(".check-icon", `
 opacity: 0;
 transform: scale(.5);
 `), O(".line-icon", `
 opacity: 1;
 transform: scale(1);
 `)])])]), N("checked, indeterminate", [O("&:focus:not(:active)", [z("checkbox-box", [T("border", `
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
  }), z("checkbox-icon", [O(".check-icon, .line-icon", {
    fill: "var(--n-check-mark-color-disabled-checked)"
  })])])]), z("checkbox-box", `
 background-color: var(--n-color-disabled);
 `, [T("border", `
 border: var(--n-border-disabled);
 `), z("checkbox-icon", [O(".check-icon, .line-icon", `
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
 `, [O(".check-icon, .line-icon", `
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
 `), Xt({
    left: "1px",
    top: "1px"
  })])]), T("label", `
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 user-select: none;
 -webkit-user-select: none;
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 `, [O("&:empty", {
    display: "none"
  })])]),
  // modal table header checkbox
  ui(z("checkbox", `
 --n-merged-color-table: var(--n-color-table-modal);
 `)),
  // popover table header checkbox
  Ma(z("checkbox", `
 --n-merged-color-table: var(--n-color-table-popover);
 `))
]), pC = Object.assign(Object.assign({}, ve.props), {
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
}), bl = ee({
  name: "Checkbox",
  props: pC,
  setup(e) {
    process.env.NODE_ENV !== "production" && tt(() => {
      e.onChange && at("checkbox", "`on-change` is deprecated, please use `on-update:checked` instead.");
    });
    const t = ge(Xu, null), r = I(null), {
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = I(e.defaultChecked), s = oe(e, "checked"), d = Mt(s, l), u = Ue(() => {
      if (t) {
        const R = t.valueSetRef.value;
        return R && e.value !== void 0 ? R.has(e.value) : !1;
      } else
        return d.value === e.checkedValue;
    }), c = Ln(e, {
      mergedSize(R) {
        const {
          size: y
        } = e;
        if (y !== void 0) return y;
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
          disabled: y
        } = e;
        if (y !== void 0) return y;
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
      mergedDisabledRef: h,
      mergedSizeRef: p
    } = c, x = ve("Checkbox", "-checkbox", vC, Gu, e, o);
    function v(R) {
      if (t && e.value !== void 0)
        t.toggleCheckbox(!u.value, e.value);
      else {
        const {
          onChange: y,
          "onUpdate:checked": B,
          onUpdateChecked: F
        } = e, {
          nTriggerFormInput: A,
          nTriggerFormChange: K
        } = c, M = u.value ? e.uncheckedValue : e.checkedValue;
        B && ne(B, M, R), F && ne(F, M, R), y && ne(y, M, R), A(), K(), l.value = M;
      }
    }
    function m(R) {
      h.value || v(R);
    }
    function b(R) {
      if (!h.value)
        switch (R.key) {
          case " ":
          case "Enter":
            v(R);
        }
    }
    function g(R) {
      switch (R.key) {
        case " ":
          R.preventDefault();
      }
    }
    const C = {
      focus: () => {
        var R;
        (R = r.value) === null || R === void 0 || R.focus();
      },
      blur: () => {
        var R;
        (R = r.value) === null || R === void 0 || R.blur();
      }
    }, S = Pt("Checkbox", a, o), w = $(() => {
      const {
        value: R
      } = p, {
        common: {
          cubicBezierEaseInOut: y
        },
        self: {
          borderRadius: B,
          color: F,
          colorChecked: A,
          colorDisabled: K,
          colorTableHeader: M,
          colorTableHeaderModal: n,
          colorTableHeaderPopover: D,
          checkMarkColor: E,
          checkMarkColorDisabled: H,
          border: L,
          borderFocus: V,
          borderDisabled: te,
          borderChecked: X,
          boxShadowFocus: U,
          textColor: j,
          textColorDisabled: q,
          checkMarkColorDisabledChecked: Y,
          colorDisabledChecked: ie,
          borderDisabledChecked: ae,
          labelPadding: fe,
          labelLineHeight: we,
          labelFontWeight: G,
          [Z("fontSize", R)]: ue,
          [Z("size", R)]: Re
        }
      } = x.value;
      return {
        "--n-label-line-height": we,
        "--n-label-font-weight": G,
        "--n-size": Re,
        "--n-bezier": y,
        "--n-border-radius": B,
        "--n-border": L,
        "--n-border-checked": X,
        "--n-border-focus": V,
        "--n-border-disabled": te,
        "--n-border-disabled-checked": ae,
        "--n-box-shadow-focus": U,
        "--n-color": F,
        "--n-color-checked": A,
        "--n-color-table": M,
        "--n-color-table-modal": n,
        "--n-color-table-popover": D,
        "--n-color-disabled": K,
        "--n-color-disabled-checked": ie,
        "--n-text-color": j,
        "--n-text-color-disabled": q,
        "--n-check-mark-color": E,
        "--n-check-mark-color-disabled": H,
        "--n-check-mark-color-disabled-checked": Y,
        "--n-font-size": ue,
        "--n-label-padding": fe
      };
    }), k = i ? Ye("checkbox", $(() => p.value[0]), w, e) : void 0;
    return Object.assign(c, C, {
      rtlEnabled: S,
      selfRef: r,
      mergedClsPrefix: o,
      mergedDisabled: h,
      renderedChecked: u,
      mergedTheme: x,
      labelId: pn(),
      handleClick: m,
      handleKeyUp: b,
      handleKeyDown: g,
      cssVars: i ? void 0 : w,
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
      handleKeyUp: h,
      handleKeyDown: p,
      handleClick: x
    } = this;
    (e = this.onRender) === null || e === void 0 || e.call(this);
    const v = je(t.default, (m) => d || m ? f("span", {
      class: `${u}-checkbox__label`,
      id: s
    }, d || m) : null);
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
      onClick: x,
      onMousedown: () => {
        Ke("selectstart", window, (m) => {
          m.preventDefault();
        }, {
          once: !0
        });
      }
    }, f("div", {
      class: `${u}-checkbox-box-wrapper`
    }, " ", f("div", {
      class: `${u}-checkbox-box`
    }, f(ur, null, {
      default: () => this.indeterminate ? f("div", {
        key: "indeterminate",
        class: `${u}-checkbox-icon`
      }, hC()) : f("div", {
        key: "check",
        class: `${u}-checkbox-icon`
      }, fC())
    }), f("div", {
      class: `${u}-checkbox-box__border`
    }))), v);
  }
});
function gC(e) {
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
const mC = {
  name: "Collapse",
  common: Ze,
  self: gC
}, bC = z("collapse", "width: 100%;", [z("collapse-item", `
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
 `)])]), z("collapse-item", "margin-left: 32px;"), O("&:first-child", "margin-top: 0;"), O("&:first-child >", [T("header", "padding-top: 0;")]), N("left-arrow-placement", [T("header", [z("collapse-item-arrow", "margin-right: 4px;")])]), N("right-arrow-placement", [T("header", [z("collapse-item-arrow", "margin-left: 4px;")])]), T("content-wrapper", [T("content-inner", "padding-top: 16px;"), _u({
  duration: "0.15s"
})]), N("active", [T("header", [N("active", [z("collapse-item-arrow", "transform: rotate(90deg);")])])]), O("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), Xe("disabled", [N("trigger-area-main", [T("header", [T("header-main", "cursor: pointer;"), z("collapse-item-arrow", "cursor: default;")])]), N("trigger-area-arrow", [T("header", [z("collapse-item-arrow", "cursor: pointer;")])]), N("trigger-area-extra", [T("header", [T("header-extra", "cursor: pointer;")])])]), T("header", `
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
 `)])])]), xC = Object.assign(Object.assign({}, ve.props), {
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
    validator: () => (process.env.NODE_ENV !== "production" && Rt("collapse", "`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead."), !0),
    default: void 0
  }
}), Yu = "n-collapse", CC = ee({
  name: "Collapse",
  props: xC,
  slots: Object,
  setup(e, {
    slots: t
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = I(e.defaultExpandedNames), l = $(() => e.expandedNames), s = Mt(l, a), d = ve("Collapse", "-collapse", bC, mC, e, r);
    function u(m) {
      const {
        "onUpdate:expandedNames": b,
        onUpdateExpandedNames: g,
        onExpandedNamesChange: C
      } = e;
      g && ne(g, m), b && ne(b, m), C && ne(C, m), a.value = m;
    }
    function c(m) {
      const {
        onItemHeaderClick: b
      } = e;
      b && ne(b, m);
    }
    function h(m, b, g) {
      const {
        accordion: C
      } = e, {
        value: S
      } = s;
      if (C)
        m ? (u([b]), c({
          name: b,
          expanded: !0,
          event: g
        })) : (u([]), c({
          name: b,
          expanded: !1,
          event: g
        }));
      else if (!Array.isArray(S))
        u([b]), c({
          name: b,
          expanded: !0,
          event: g
        });
      else {
        const w = S.slice(), k = w.findIndex((R) => b === R);
        ~k ? (w.splice(k, 1), u(w), c({
          name: b,
          expanded: !1,
          event: g
        })) : (w.push(b), u(w), c({
          name: b,
          expanded: !0,
          event: g
        }));
      }
    }
    Ee(Yu, {
      props: e,
      mergedClsPrefixRef: r,
      expandedNamesRef: s,
      slots: t,
      toggleItem: h
    });
    const p = Pt("Collapse", i, r), x = $(() => {
      const {
        common: {
          cubicBezierEaseInOut: m
        },
        self: {
          titleFontWeight: b,
          dividerColor: g,
          titlePadding: C,
          titleTextColor: S,
          titleTextColorDisabled: w,
          textColor: k,
          arrowColor: R,
          fontSize: y,
          titleFontSize: B,
          arrowColorDisabled: F,
          itemMargin: A
        }
      } = d.value;
      return {
        "--n-font-size": y,
        "--n-bezier": m,
        "--n-text-color": k,
        "--n-divider-color": g,
        "--n-title-padding": C,
        "--n-title-font-size": B,
        "--n-title-text-color": S,
        "--n-title-text-color-disabled": w,
        "--n-title-font-weight": b,
        "--n-arrow-color": R,
        "--n-arrow-color-disabled": F,
        "--n-item-margin": A
      };
    }), v = o ? Ye("collapse", void 0, x, e) : void 0;
    return {
      rtlEnabled: p,
      mergedTheme: d,
      mergedClsPrefix: r,
      cssVars: o ? void 0 : x,
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
}), yC = ee({
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
      onceTrue: Dd(oe(e, "show"))
    };
  },
  render() {
    return f(fl, null, {
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
        return i ? vn(a, [[Rr, e]]) : e ? a : null;
      }
    });
  }
}), wC = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
}, SC = ee({
  name: "CollapseItem",
  props: wC,
  setup(e) {
    const {
      mergedRtlRef: t
    } = Ae(e), r = pn(), o = Ue(() => {
      var h;
      return (h = e.name) !== null && h !== void 0 ? h : r;
    }), i = ge(Yu);
    i || In("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
    const {
      expandedNamesRef: a,
      props: l,
      mergedClsPrefixRef: s,
      slots: d
    } = i, u = $(() => {
      const {
        value: h
      } = a;
      if (Array.isArray(h)) {
        const {
          value: p
        } = o;
        return !~h.findIndex((x) => x === p);
      } else if (h) {
        const {
          value: p
        } = o;
        return p !== h;
      }
      return !0;
    });
    return {
      rtlEnabled: Pt("Collapse", t, s),
      collapseSlots: d,
      randomName: r,
      mergedClsPrefix: s,
      collapsed: u,
      triggerAreas: oe(l, "triggerAreas"),
      mergedDisplayDirective: $(() => {
        const {
          displayDirective: h
        } = e;
        return h || l.displayDirective;
      }),
      arrowPlacement: $(() => l.arrowPlacement),
      handleClick(h) {
        let p = "main";
        qt(h, "arrow") && (p = "arrow"), qt(h, "extra") && (p = "extra"), l.triggerAreas.includes(p) && i && !e.disabled && i.toggleItem(u.value, o.value, h);
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
    } = this, d = da(t.header, {
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
    }, da(c, {
      collapsed: o
    }, () => [f(bt, {
      clsPrefix: a
    }, {
      default: () => this.rtlEnabled ? f(hx, null) : f(dl, null)
    })])), r === "left" && d), S0(u, {
      collapsed: o
    }, (h) => f("div", {
      class: `${a}-collapse-item__header-extra`,
      onClick: this.handleClick,
      "data-extra": !0
    }, h))), f(yC, {
      clsPrefix: a,
      displayDirective: i,
      show: !o
    }, t));
  }
}), BC = {
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
    validator: () => (Rt("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, Zu = ee({
  name: "ConfigProvider",
  alias: ["App"],
  props: BC,
  setup(e) {
    const t = ge(ln, null), r = $(() => {
      const {
        theme: m
      } = e;
      if (m === null) return;
      const b = t == null ? void 0 : t.mergedThemeRef.value;
      return m === void 0 ? b : b === void 0 ? m : Object.assign({}, b, m);
    }), o = $(() => {
      const {
        themeOverrides: m
      } = e;
      if (m !== null) {
        if (m === void 0)
          return t == null ? void 0 : t.mergedThemeOverridesRef.value;
        {
          const b = t == null ? void 0 : t.mergedThemeOverridesRef.value;
          return b === void 0 ? m : Gr({}, b, m);
        }
      }
    }), i = Ue(() => {
      const {
        namespace: m
      } = e;
      return m === void 0 ? t == null ? void 0 : t.mergedNamespaceRef.value : m;
    }), a = Ue(() => {
      const {
        bordered: m
      } = e;
      return m === void 0 ? t == null ? void 0 : t.mergedBorderedRef.value : m;
    }), l = $(() => {
      const {
        icons: m
      } = e;
      return m === void 0 ? t == null ? void 0 : t.mergedIconsRef.value : m;
    }), s = $(() => {
      const {
        componentOptions: m
      } = e;
      return m !== void 0 ? m : t == null ? void 0 : t.mergedComponentPropsRef.value;
    }), d = $(() => {
      const {
        clsPrefix: m
      } = e;
      return m !== void 0 ? m : t ? t.mergedClsPrefixRef.value : Zo;
    }), u = $(() => {
      var m;
      const {
        rtl: b
      } = e;
      if (b === void 0)
        return t == null ? void 0 : t.mergedRtlRef.value;
      const g = {};
      for (const C of b)
        g[C.name] = kl(C), (m = C.peers) === null || m === void 0 || m.forEach((S) => {
          S.name in g || (g[S.name] = kl(S));
        });
      return g;
    }), c = $(() => e.breakpoints || (t == null ? void 0 : t.mergedBreakpointsRef.value)), h = e.inlineThemeDisabled || (t == null ? void 0 : t.inlineThemeDisabled), p = e.preflightStyleDisabled || (t == null ? void 0 : t.preflightStyleDisabled), x = e.styleMountTarget || (t == null ? void 0 : t.styleMountTarget), v = $(() => {
      const {
        value: m
      } = r, {
        value: b
      } = o, g = b && Object.keys(b).length !== 0, C = m == null ? void 0 : m.name;
      return C ? g ? `${C}-${ao(JSON.stringify(o.value))}` : C : g ? ao(JSON.stringify(o.value)) : "";
    });
    return Ee(ln, {
      mergedThemeHashRef: v,
      mergedBreakpointsRef: c,
      mergedRtlRef: u,
      mergedIconsRef: l,
      mergedComponentPropsRef: s,
      mergedBorderedRef: a,
      mergedNamespaceRef: i,
      mergedClsPrefixRef: d,
      mergedLocaleRef: $(() => {
        const {
          locale: m
        } = e;
        if (m !== null)
          return m === void 0 ? t == null ? void 0 : t.mergedLocaleRef.value : m;
      }),
      mergedDateLocaleRef: $(() => {
        const {
          dateLocale: m
        } = e;
        if (m !== null)
          return m === void 0 ? t == null ? void 0 : t.mergedDateLocaleRef.value : m;
      }),
      mergedHljsRef: $(() => {
        const {
          hljs: m
        } = e;
        return m === void 0 ? t == null ? void 0 : t.mergedHljsRef.value : m;
      }),
      mergedKatexRef: $(() => {
        const {
          katex: m
        } = e;
        return m === void 0 ? t == null ? void 0 : t.mergedKatexRef.value : m;
      }),
      mergedThemeRef: r,
      mergedThemeOverridesRef: o,
      inlineThemeDisabled: h || !1,
      preflightStyleDisabled: p || !1,
      styleMountTarget: x
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
      class: `${this.mergedClsPrefix || Zo}-config-provider`
    }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
  }
});
function kC(e) {
  const {
    boxShadow2: t
  } = e;
  return {
    menuBoxShadow: t
  };
}
const xl = {
  name: "Popselect",
  common: Ze,
  peers: {
    Popover: fr,
    InternalSelectMenu: pl
  },
  self: kC
}, Ju = "n-popselect", RC = z("popselect-menu", `
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
}, Zs = Tn(Cl), FC = ee({
  name: "PopselectPanel",
  props: Cl,
  setup(e) {
    process.env.NODE_ENV !== "production" && tt(() => {
      e.onChange !== void 0 && Rt("popselect", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const t = ge(Ju), {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("Popselect", "-pop-select", RC, xl, t.props, r), a = $(() => bi(e.options, Uu("value", "children")));
    function l(p, x) {
      const {
        onUpdateValue: v,
        "onUpdate:value": m,
        onChange: b
      } = e;
      v && ne(v, p, x), m && ne(m, p, x), b && ne(b, p, x);
    }
    function s(p) {
      u(p.key);
    }
    function d(p) {
      !qt(p, "action") && !qt(p, "empty") && !qt(p, "header") && p.preventDefault();
    }
    function u(p) {
      const {
        value: {
          getNode: x
        }
      } = a;
      if (e.multiple)
        if (Array.isArray(e.value)) {
          const v = [], m = [];
          let b = !0;
          e.value.forEach((g) => {
            if (g === p) {
              b = !1;
              return;
            }
            const C = x(g);
            C && (v.push(C.key), m.push(C.rawNode));
          }), b && (v.push(p), m.push(x(p).rawNode)), l(v, m);
        } else {
          const v = x(p);
          v && l([p], [v.rawNode]);
        }
      else if (e.value === p && e.cancelable)
        l(null, null);
      else {
        const v = x(p);
        v && l(p, v.rawNode);
        const {
          "onUpdate:show": m,
          onUpdateShow: b
        } = t.props;
        m && ne(m, !1), b && ne(b, !1), t.setShow(!1);
      }
      vt(() => {
        t.syncPosition();
      });
    }
    He(oe(e, "options"), () => {
      vt(() => {
        t.syncPosition();
      });
    });
    const c = $(() => {
      const {
        self: {
          menuBoxShadow: p
        }
      } = i.value;
      return {
        "--n-menu-box-shadow": p
      };
    }), h = o ? Ye("select", void 0, c, t.props) : void 0;
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
    return (e = this.onRender) === null || e === void 0 || e.call(this), f(Iu, {
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
}), PC = Object.assign(Object.assign(Object.assign(Object.assign({}, ve.props), ar(tr, ["showArrow", "arrow"])), {
  placement: Object.assign(Object.assign({}, tr.placement), {
    default: "bottom"
  }),
  trigger: {
    type: String,
    default: "hover"
  }
}), Cl), zC = ee({
  name: "Popselect",
  props: PC,
  slots: Object,
  inheritAttrs: !1,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = ve("Popselect", "-popselect", void 0, xl, e, t), o = I(null);
    function i() {
      var s;
      (s = o.value) === null || s === void 0 || s.syncPosition();
    }
    function a(s) {
      var d;
      (d = o.value) === null || d === void 0 || d.setShow(s);
    }
    return Ee(Ju, {
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
        return f(FC, Object.assign({}, s, {
          class: [s.class, r],
          style: [s.style, ...i]
        }, Sn(this.$props, Zs), {
          ref: eu(o),
          onMouseenter: no([a, s.onMouseenter]),
          onMouseleave: no([l, s.onMouseleave])
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
    return f(hr, Object.assign({}, ar(this.$props, Zs), t, {
      internalDeactivateImmediately: !0
    }), {
      trigger: () => {
        var r, o;
        return (o = (r = this.$slots).default) === null || o === void 0 ? void 0 : o.call(r);
      }
    });
  }
});
function $C(e) {
  const {
    boxShadow2: t
  } = e;
  return {
    menuBoxShadow: t
  };
}
const Qu = {
  name: "Select",
  common: Ze,
  peers: {
    InternalSelection: ju,
    InternalSelectMenu: pl
  },
  self: $C
}, AC = O([z("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), z("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [ko({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]), DC = Object.assign(Object.assign({}, ve.props), {
  to: gn.propTo,
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
}), ec = ee({
  name: "Select",
  props: DC,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && tt(() => {
      e.items !== void 0 && at("select", "`items` is deprecated, please use `options` instead."), e.onChange !== void 0 && at("select", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      mergedBorderedRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = ve("Select", "-select", AC, Qu, e, t), l = I(e.defaultValue), s = oe(e, "value"), d = Mt(s, l), u = I(!1), c = I(""), h = ja(e, ["items", "options"]), p = I([]), x = I([]), v = $(() => x.value.concat(p.value).concat(h.value)), m = $(() => {
      const {
        filter: P
      } = e;
      if (P) return P;
      const {
        labelField: W,
        valueField: J
      } = e;
      return (le, de) => {
        if (!de) return !1;
        const pe = de[W];
        if (typeof pe == "string")
          return Qi(le, pe);
        const me = de[J];
        return typeof me == "string" ? Qi(le, me) : typeof me == "number" ? Qi(le, String(me)) : !1;
      };
    }), b = $(() => {
      if (e.remote)
        return h.value;
      {
        const {
          value: P
        } = v, {
          value: W
        } = c;
        return !W.length || !e.filterable ? P : X1(P, m.value, W, e.childrenField);
      }
    }), g = $(() => {
      const {
        valueField: P,
        childrenField: W
      } = e, J = Uu(P, W);
      return bi(b.value, J);
    }), C = $(() => Y1(v.value, e.valueField, e.childrenField)), S = I(!1), w = Mt(oe(e, "show"), S), k = I(null), R = I(null), y = I(null), {
      localeRef: B
    } = er("Select"), F = $(() => {
      var P;
      return (P = e.placeholder) !== null && P !== void 0 ? P : B.value.placeholder;
    }), A = [], K = I(/* @__PURE__ */ new Map()), M = $(() => {
      const {
        fallbackOption: P
      } = e;
      if (P === void 0) {
        const {
          labelField: W,
          valueField: J
        } = e;
        return (le) => ({
          [W]: String(le),
          [J]: le
        });
      }
      return P === !1 ? !1 : (W) => Object.assign(P(W), {
        value: W
      });
    });
    function n(P) {
      const W = e.remote, {
        value: J
      } = K, {
        value: le
      } = C, {
        value: de
      } = M, pe = [];
      return P.forEach((me) => {
        if (le.has(me))
          pe.push(le.get(me));
        else if (W && J.has(me))
          pe.push(J.get(me));
        else if (de) {
          const Se = de(me);
          Se && pe.push(Se);
        }
      }), pe;
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
    }), H = Ln(e), {
      mergedSizeRef: L,
      mergedDisabledRef: V,
      mergedStatusRef: te
    } = H;
    function X(P, W) {
      const {
        onChange: J,
        "onUpdate:value": le,
        onUpdateValue: de
      } = e, {
        nTriggerFormChange: pe,
        nTriggerFormInput: me
      } = H;
      J && ne(J, P, W), de && ne(de, P, W), le && ne(le, P, W), l.value = P, pe(), me();
    }
    function U(P) {
      const {
        onBlur: W
      } = e, {
        nTriggerFormBlur: J
      } = H;
      W && ne(W, P), J();
    }
    function j() {
      const {
        onClear: P
      } = e;
      P && ne(P);
    }
    function q(P) {
      const {
        onFocus: W,
        showOnFocus: J
      } = e, {
        nTriggerFormFocus: le
      } = H;
      W && ne(W, P), le(), J && we();
    }
    function Y(P) {
      const {
        onSearch: W
      } = e;
      W && ne(W, P);
    }
    function ie(P) {
      const {
        onScroll: W
      } = e;
      W && ne(W, P);
    }
    function ae() {
      var P;
      const {
        remote: W,
        multiple: J
      } = e;
      if (W) {
        const {
          value: le
        } = K;
        if (J) {
          const {
            valueField: de
          } = e;
          (P = D.value) === null || P === void 0 || P.forEach((pe) => {
            le.set(pe[de], pe);
          });
        } else {
          const de = E.value;
          de && le.set(de[e.valueField], de);
        }
      }
    }
    function fe(P) {
      const {
        onUpdateShow: W,
        "onUpdate:show": J
      } = e;
      W && ne(W, P), J && ne(J, P), S.value = P;
    }
    function we() {
      V.value || (fe(!0), S.value = !0, e.filterable && nt());
    }
    function G() {
      fe(!1);
    }
    function ue() {
      c.value = "", x.value = A;
    }
    const Re = I(!1);
    function be() {
      e.filterable && (Re.value = !0);
    }
    function Fe() {
      e.filterable && (Re.value = !1, w.value || ue());
    }
    function Pe() {
      V.value || (w.value ? e.filterable ? nt() : G() : we());
    }
    function lt(P) {
      var W, J;
      !((J = (W = y.value) === null || W === void 0 ? void 0 : W.selfRef) === null || J === void 0) && J.contains(P.relatedTarget) || (u.value = !1, U(P), G());
    }
    function Qe(P) {
      q(P), u.value = !0;
    }
    function ut() {
      u.value = !0;
    }
    function ct(P) {
      var W;
      !((W = k.value) === null || W === void 0) && W.$el.contains(P.relatedTarget) || (u.value = !1, U(P), G());
    }
    function xe() {
      var P;
      (P = k.value) === null || P === void 0 || P.focus(), G();
    }
    function Ce(P) {
      var W;
      w.value && (!((W = k.value) === null || W === void 0) && W.$el.contains(Fr(P)) || G());
    }
    function $e(P) {
      if (!Array.isArray(P)) return [];
      if (M.value)
        return Array.from(P);
      {
        const {
          remote: W
        } = e, {
          value: J
        } = C;
        if (W) {
          const {
            value: le
          } = K;
          return P.filter((de) => J.has(de) || le.has(de));
        } else
          return P.filter((le) => J.has(le));
      }
    }
    function Ie(P) {
      Je(P.rawNode);
    }
    function Je(P) {
      if (V.value) return;
      const {
        tag: W,
        remote: J,
        clearFilterAfterSelect: le,
        valueField: de
      } = e;
      if (W && !J) {
        const {
          value: pe
        } = x, me = pe[0] || null;
        if (me) {
          const Se = p.value;
          Se.length ? Se.push(me) : p.value = [me], x.value = A;
        }
      }
      if (J && K.value.set(P[de], P), e.multiple) {
        const pe = $e(d.value), me = pe.findIndex((Se) => Se === P[de]);
        if (~me) {
          if (pe.splice(me, 1), W && !J) {
            const Se = re(P[de]);
            ~Se && (p.value.splice(Se, 1), le && (c.value = ""));
          }
        } else
          pe.push(P[de]), le && (c.value = "");
        X(pe, n(pe));
      } else {
        if (W && !J) {
          const pe = re(P[de]);
          ~pe ? p.value = [p.value[pe]] : p.value = A;
        }
        gt(), G(), X(P[de], P);
      }
    }
    function re(P) {
      return p.value.findIndex((J) => J[e.valueField] === P);
    }
    function he(P) {
      w.value || we();
      const {
        value: W
      } = P.target;
      c.value = W;
      const {
        tag: J,
        remote: le
      } = e;
      if (Y(W), J && !le) {
        if (!W) {
          x.value = A;
          return;
        }
        const {
          onCreate: de
        } = e, pe = de ? de(W) : {
          [e.labelField]: W,
          [e.valueField]: W
        }, {
          valueField: me,
          labelField: Se
        } = e;
        h.value.some((Le) => Le[me] === pe[me] || Le[Se] === pe[Se]) || p.value.some((Le) => Le[me] === pe[me] || Le[Se] === pe[Se]) ? x.value = A : x.value = [pe];
      }
    }
    function Te(P) {
      P.stopPropagation();
      const {
        multiple: W
      } = e;
      !W && e.filterable && G(), j(), W ? X([], []) : X(null, null);
    }
    function st(P) {
      !qt(P, "action") && !qt(P, "empty") && !qt(P, "header") && P.preventDefault();
    }
    function zt(P) {
      ie(P);
    }
    function $t(P) {
      var W, J, le, de, pe;
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
            if (w.value) {
              const me = (J = y.value) === null || J === void 0 ? void 0 : J.getPendingTmNode();
              me ? Ie(me) : e.filterable || (G(), gt());
            } else if (we(), e.tag && Re.value) {
              const me = x.value[0];
              if (me) {
                const Se = me[e.valueField], {
                  value: Le
                } = d;
                e.multiple && Array.isArray(Le) && Le.includes(Se) || Je(me);
              }
            }
          }
          P.preventDefault();
          break;
        case "ArrowUp":
          if (P.preventDefault(), e.loading) return;
          w.value && ((le = y.value) === null || le === void 0 || le.prev());
          break;
        case "ArrowDown":
          if (P.preventDefault(), e.loading) return;
          w.value ? (de = y.value) === null || de === void 0 || de.next() : we();
          break;
        case "Escape":
          w.value && (b0(P), G()), (pe = k.value) === null || pe === void 0 || pe.focus();
          break;
      }
    }
    function gt() {
      var P;
      (P = k.value) === null || P === void 0 || P.focus();
    }
    function nt() {
      var P;
      (P = k.value) === null || P === void 0 || P.focusInput();
    }
    function yt() {
      var P;
      w.value && ((P = R.value) === null || P === void 0 || P.syncPosition());
    }
    ae(), He(oe(e, "options"), ae);
    const et = {
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
    }), Be = i ? Ye("select", void 0, ce, e) : void 0;
    return Object.assign(Object.assign({}, et), {
      mergedStatus: te,
      mergedClsPrefix: t,
      mergedBordered: r,
      namespace: o,
      treeMate: g,
      isMounted: Tr(),
      triggerRef: k,
      menuRef: y,
      pattern: c,
      uncontrolledShow: S,
      mergedShow: w,
      adjustedTo: gn(e),
      uncontrolledValue: l,
      mergedValue: d,
      followerRef: R,
      localizedPlaceholder: F,
      selectedOption: E,
      selectedOptions: D,
      mergedSize: L,
      mergedDisabled: V,
      focused: u,
      activeWithoutMenuOpen: Re,
      inlineThemeDisabled: i,
      onTriggerInputFocus: be,
      onTriggerInputBlur: Fe,
      handleTriggerOrMenuResize: yt,
      handleMenuFocus: ut,
      handleMenuBlur: ct,
      handleMenuTabOut: xe,
      handleTriggerClick: Pe,
      handleToggle: Ie,
      handleDeleteOption: Je,
      handlePatternInput: he,
      handleClear: Te,
      handleTriggerBlur: lt,
      handleTriggerFocus: Qe,
      handleKeydown: $t,
      handleMenuAfterLeave: ue,
      handleMenuClickOutside: Ce,
      handleMenuScroll: zt,
      handleMenuKeydown: $t,
      handleMenuMousedown: st,
      mergedTheme: a,
      cssVars: i ? void 0 : ce,
      themeClass: Be == null ? void 0 : Be.themeClass,
      onRender: Be == null ? void 0 : Be.onRender
    });
  },
  render() {
    return f("div", {
      class: `${this.mergedClsPrefix}-select`
    }, f(Va, null, {
      default: () => [f(Ka, null, {
        default: () => f(z1, {
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
      }), f(Ga, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === gn.tdkey,
        containerClass: this.namespace,
        width: this.consistentMenuWidth ? "target" : void 0,
        minWidth: "target",
        placement: this.placement
      }, {
        default: () => f(jt, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted,
          onAfterLeave: this.handleMenuAfterLeave
        }, {
          default: () => {
            var e, t, r;
            return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) === null || e === void 0 || e.call(this), vn(f(Iu, Object.assign({}, this.menuProps, {
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
            }), this.displayDirective === "show" ? [[Rr, this.mergedShow], [so, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]] : [[so, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), EC = {
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
function TC(e) {
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
    heightSmall: x,
    heightMedium: v
  } = e;
  return Object.assign(Object.assign({}, EC), {
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
    itemSizeMedium: x,
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
const tc = {
  name: "Pagination",
  common: Ze,
  peers: {
    Select: Qu,
    Input: gl,
    Popselect: xl
  },
  self: TC
}, Js = `
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`, Qs = [N("button", `
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)], OC = z("pagination", `
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
 `), O("> *:not(:first-child)", `
 margin: var(--n-item-margin);
 `), z("select", `
 width: var(--n-select-width);
 `), O("&.transition-disabled", [z("pagination-item", "transition: none!important;")]), z("pagination-quick-jumper", `
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
 `)]), Xe("disabled", [N("hover", Js, Qs), O("&:hover", Js, Qs), O("&:active", `
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
 `, [O("&:hover", `
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
function nc(e) {
  var t;
  if (!e) return 10;
  const {
    defaultPageSize: r
  } = e;
  if (r !== void 0) return r;
  const o = (t = e.pageSizes) === null || t === void 0 ? void 0 : t[0];
  return typeof o == "number" ? o : (o == null ? void 0 : o.value) || 10;
}
function MC(e, t, r, o) {
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
  let x = !1, v = !1;
  c > d + 2 && (x = !0), h < u - 2 && (v = !0);
  const m = [];
  m.push({
    type: "page",
    label: 1,
    active: e === 1,
    mayBeFastBackward: !1,
    mayBeFastForward: !1
  }), x ? (i = !0, l = c - 1, m.push({
    type: "fast-backward",
    active: !1,
    label: void 0,
    options: o ? ed(d + 1, c - 1) : null
  })) : u >= d + 1 && m.push({
    type: "page",
    label: d + 1,
    mayBeFastBackward: !0,
    mayBeFastForward: !1,
    active: e === d + 1
  });
  for (let b = c; b <= h; ++b)
    m.push({
      type: "page",
      label: b,
      mayBeFastBackward: !1,
      mayBeFastForward: !1,
      active: e === b
    });
  return v ? (a = !0, s = h + 1, m.push({
    type: "fast-forward",
    active: !1,
    label: void 0,
    options: o ? ed(h + 1, u - 1) : null
  })) : h === u - 2 && m[m.length - 1].label !== u - 1 && m.push({
    type: "page",
    mayBeFastForward: !0,
    mayBeFastBackward: !1,
    label: u - 1,
    active: e === u - 1
  }), m[m.length - 1].label !== u && m.push({
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
    items: m
  };
}
function ed(e, t) {
  const r = [];
  for (let o = e; o <= t; ++o)
    r.push({
      label: `${o}`,
      value: o
    });
  return r;
}
const IC = Object.assign(Object.assign({}, ve.props), {
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
  to: gn.propTo,
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
}), rc = ee({
  name: "Pagination",
  props: IC,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && tt(() => {
      e.pageCount !== void 0 && e.itemCount !== void 0 && Rt("pagination", "`page-count` and `item-count` should't be specified together. Only `item-count` will take effect."), e.onPageSizeChange && at("pagination", "`on-page-size-change` is deprecated, please use `on-update:page-size` instead."), e.onChange && at("pagination", "`on-change` is deprecated, please use `on-update:page` instead.");
    });
    const {
      mergedComponentPropsRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = ve("Pagination", "-pagination", OC, tc, e, r), {
      localeRef: l
    } = er("Pagination"), s = I(null), d = I(e.defaultPage), u = I(nc(e)), c = Mt(oe(e, "page"), d), h = Mt(oe(e, "pageSize"), u), p = $(() => {
      const {
        itemCount: G
      } = e;
      if (G !== void 0)
        return Math.max(1, Math.ceil(G / h.value));
      const {
        pageCount: ue
      } = e;
      return ue !== void 0 ? Math.max(ue, 1) : 1;
    }), x = I("");
    tt(() => {
      e.simple, x.value = String(c.value);
    });
    const v = I(!1), m = I(!1), b = I(!1), g = I(!1), C = () => {
      e.disabled || (v.value = !0, E());
    }, S = () => {
      e.disabled || (v.value = !1, E());
    }, w = () => {
      m.value = !0, E();
    }, k = () => {
      m.value = !1, E();
    }, R = (G) => {
      H(G);
    }, y = $(() => MC(c.value, p.value, e.pageSlot, e.showQuickJumpDropdown));
    tt(() => {
      y.value.hasFastBackward ? y.value.hasFastForward || (v.value = !1, b.value = !1) : (m.value = !1, g.value = !1);
    });
    const B = $(() => {
      const G = l.value.selectionSuffix;
      return e.pageSizes.map((ue) => typeof ue == "number" ? {
        label: `${ue} / ${G}`,
        value: ue
      } : ue);
    }), F = $(() => {
      var G, ue;
      return ((ue = (G = t == null ? void 0 : t.value) === null || G === void 0 ? void 0 : G.Pagination) === null || ue === void 0 ? void 0 : ue.inputSize) || ds(e.size);
    }), A = $(() => {
      var G, ue;
      return ((ue = (G = t == null ? void 0 : t.value) === null || G === void 0 ? void 0 : G.Pagination) === null || ue === void 0 ? void 0 : ue.selectSize) || ds(e.size);
    }), K = $(() => (c.value - 1) * h.value), M = $(() => {
      const G = c.value * h.value - 1, {
        itemCount: ue
      } = e;
      return ue !== void 0 && G > ue - 1 ? ue - 1 : G;
    }), n = $(() => {
      const {
        itemCount: G
      } = e;
      return G !== void 0 ? G : (e.pageCount || 1) * h.value;
    }), D = Pt("Pagination", i, r);
    function E() {
      vt(() => {
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
        onUpdatePage: Re,
        onChange: be,
        simple: Fe
      } = e;
      ue && ne(ue, G), Re && ne(Re, G), be && ne(be, G), d.value = G, Fe && (x.value = String(G));
    }
    function L(G) {
      if (G === h.value) return;
      const {
        "onUpdate:pageSize": ue,
        onUpdatePageSize: Re,
        onPageSizeChange: be
      } = e;
      ue && ne(ue, G), Re && ne(Re, G), be && ne(be, G), u.value = G, p.value < c.value && H(p.value);
    }
    function V() {
      if (e.disabled) return;
      const G = Math.min(c.value + 1, p.value);
      H(G);
    }
    function te() {
      if (e.disabled) return;
      const G = Math.max(c.value - 1, 1);
      H(G);
    }
    function X() {
      if (e.disabled) return;
      const G = Math.min(y.value.fastForwardTo, p.value);
      H(G);
    }
    function U() {
      if (e.disabled) return;
      const G = Math.max(y.value.fastBackwardTo, 1);
      H(G);
    }
    function j(G) {
      L(G);
    }
    function q() {
      const G = Number.parseInt(x.value);
      Number.isNaN(G) || (H(Math.max(1, Math.min(G, p.value))), e.simple || (x.value = ""));
    }
    function Y() {
      q();
    }
    function ie(G) {
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
    function ae(G) {
      x.value = G.replace(/\D+/g, "");
    }
    tt(() => {
      c.value, h.value, E();
    });
    const fe = $(() => {
      const {
        size: G
      } = e, {
        self: {
          buttonBorder: ue,
          buttonBorderHover: Re,
          buttonBorderPressed: be,
          buttonIconColor: Fe,
          buttonIconColorHover: Pe,
          buttonIconColorPressed: lt,
          itemTextColor: Qe,
          itemTextColorHover: ut,
          itemTextColorPressed: ct,
          itemTextColorActive: xe,
          itemTextColorDisabled: Ce,
          itemColor: $e,
          itemColorHover: Ie,
          itemColorPressed: Je,
          itemColorActive: re,
          itemColorActiveHover: he,
          itemColorDisabled: Te,
          itemBorder: st,
          itemBorderHover: zt,
          itemBorderPressed: $t,
          itemBorderActive: gt,
          itemBorderDisabled: nt,
          itemBorderRadius: yt,
          jumperTextColor: et,
          jumperTextColorDisabled: ce,
          buttonColor: Be,
          buttonColorHover: P,
          buttonColorPressed: W,
          [Z("itemPadding", G)]: J,
          [Z("itemMargin", G)]: le,
          [Z("inputWidth", G)]: de,
          [Z("selectWidth", G)]: pe,
          [Z("inputMargin", G)]: me,
          [Z("selectMargin", G)]: Se,
          [Z("jumperFontSize", G)]: Le,
          [Z("prefixMargin", G)]: rt,
          [Z("suffixMargin", G)]: Ve,
          [Z("itemSize", G)]: Dt,
          [Z("buttonIconSize", G)]: It,
          [Z("itemFontSize", G)]: Lt,
          [`${Z("itemMargin", G)}Rtl`]: _t,
          [`${Z("inputMargin", G)}Rtl`]: Wt
        },
        common: {
          cubicBezierEaseInOut: Jt
        }
      } = a.value;
      return {
        "--n-prefix-margin": rt,
        "--n-suffix-margin": Ve,
        "--n-item-font-size": Lt,
        "--n-select-width": pe,
        "--n-select-margin": Se,
        "--n-input-width": de,
        "--n-input-margin": me,
        "--n-input-margin-rtl": Wt,
        "--n-item-size": Dt,
        "--n-item-text-color": Qe,
        "--n-item-text-color-disabled": Ce,
        "--n-item-text-color-hover": ut,
        "--n-item-text-color-active": xe,
        "--n-item-text-color-pressed": ct,
        "--n-item-color": $e,
        "--n-item-color-hover": Ie,
        "--n-item-color-disabled": Te,
        "--n-item-color-active": re,
        "--n-item-color-active-hover": he,
        "--n-item-color-pressed": Je,
        "--n-item-border": st,
        "--n-item-border-hover": zt,
        "--n-item-border-disabled": nt,
        "--n-item-border-active": gt,
        "--n-item-border-pressed": $t,
        "--n-item-padding": J,
        "--n-item-border-radius": yt,
        "--n-bezier": Jt,
        "--n-jumper-font-size": Le,
        "--n-jumper-text-color": et,
        "--n-jumper-text-color-disabled": ce,
        "--n-item-margin": le,
        "--n-item-margin-rtl": _t,
        "--n-button-icon-size": It,
        "--n-button-icon-color": Fe,
        "--n-button-icon-color-hover": Pe,
        "--n-button-icon-color-pressed": lt,
        "--n-button-color-hover": P,
        "--n-button-color": Be,
        "--n-button-color-pressed": W,
        "--n-button-border": ue,
        "--n-button-border-hover": Re,
        "--n-button-border-pressed": be
      };
    }), we = o ? Ye("pagination", $(() => {
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
      pageItems: $(() => y.value.items),
      mergedItemCount: n,
      jumperValue: x,
      pageSizeOptions: B,
      mergedPageSize: h,
      inputSize: F,
      selectSize: A,
      mergedTheme: a,
      mergedPageCount: p,
      startIndex: K,
      endIndex: M,
      showFastForwardMenu: b,
      showFastBackwardMenu: g,
      fastForwardActive: v,
      fastBackwardActive: m,
      handleMenuSelect: R,
      handleFastForwardMouseenter: C,
      handleFastForwardMouseleave: S,
      handleFastBackwardMouseenter: w,
      handleFastBackwardMouseleave: k,
      handleJumperInput: ae,
      handleBackwardClick: te,
      handleForwardClick: V,
      handlePageItemClick: ie,
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
      inputSize: h,
      selectSize: p,
      mergedPageSize: x,
      pageSizeOptions: v,
      jumperValue: m,
      simple: b,
      prev: g,
      next: C,
      prefix: S,
      suffix: w,
      label: k,
      goto: R,
      handleJumperInput: y,
      handleSizePickerChange: B,
      handleBackwardClick: F,
      handlePageItemClick: A,
      handleForwardClick: K,
      handleQuickJumperChange: M,
      onRender: n
    } = this;
    n == null || n();
    const D = S || e.prefix, E = w || e.suffix, H = g || e.prev, L = C || e.next, V = k || e.label;
    return f("div", {
      ref: "selfRef",
      class: [`${t}-pagination`, this.themeClass, this.rtlEnabled && `${t}-pagination--rtl`, r && `${t}-pagination--disabled`, b && `${t}-pagination--simple`],
      style: o
    }, D ? f("div", {
      class: `${t}-pagination-prefix`
    }, D({
      page: i,
      pageSize: x,
      pageCount: a,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      itemCount: this.mergedItemCount
    })) : null, this.displayOrder.map((te) => {
      switch (te) {
        case "pages":
          return f(_e, null, f("div", {
            class: [`${t}-pagination-item`, !H && `${t}-pagination-item--button`, (i <= 1 || i > a || r) && `${t}-pagination-item--disabled`],
            onClick: F
          }, H ? H({
            page: i,
            pageSize: x,
            pageCount: a,
            startIndex: this.startIndex,
            endIndex: this.endIndex,
            itemCount: this.mergedItemCount
          }) : f(bt, {
            clsPrefix: t
          }, {
            default: () => this.rtlEnabled ? f(Hs, null) : f(Is, null)
          })), b ? f(_e, null, f("div", {
            class: `${t}-pagination-quick-jumper`
          }, f(wa, {
            value: m,
            onUpdateValue: y,
            size: h,
            placeholder: "",
            disabled: r,
            theme: u.peers.Input,
            themeOverrides: u.peerOverrides.Input,
            onChange: M
          })), " /", " ", a) : l.map((X, U) => {
            let j, q, Y;
            const {
              type: ie
            } = X;
            switch (ie) {
              case "page":
                const fe = X.label;
                V ? j = V({
                  type: "page",
                  node: fe,
                  active: X.active
                }) : j = fe;
                break;
              case "fast-forward":
                const we = this.fastForwardActive ? f(bt, {
                  clsPrefix: t
                }, {
                  default: () => this.rtlEnabled ? f(Ls, null) : f(Ns, null)
                }) : f(bt, {
                  clsPrefix: t
                }, {
                  default: () => f(js, null)
                });
                V ? j = V({
                  type: "fast-forward",
                  node: we,
                  active: this.fastForwardActive || this.showFastForwardMenu
                }) : j = we, q = this.handleFastForwardMouseenter, Y = this.handleFastForwardMouseleave;
                break;
              case "fast-backward":
                const G = this.fastBackwardActive ? f(bt, {
                  clsPrefix: t
                }, {
                  default: () => this.rtlEnabled ? f(Ns, null) : f(Ls, null)
                }) : f(bt, {
                  clsPrefix: t
                }, {
                  default: () => f(js, null)
                });
                V ? j = V({
                  type: "fast-backward",
                  node: G,
                  active: this.fastBackwardActive || this.showFastBackwardMenu
                }) : j = G, q = this.handleFastBackwardMouseenter, Y = this.handleFastBackwardMouseleave;
                break;
            }
            const ae = f("div", {
              key: U,
              class: [`${t}-pagination-item`, X.active && `${t}-pagination-item--active`, ie !== "page" && (ie === "fast-backward" && this.showFastBackwardMenu || ie === "fast-forward" && this.showFastForwardMenu) && `${t}-pagination-item--hover`, r && `${t}-pagination-item--disabled`, ie === "page" && `${t}-pagination-item--clickable`],
              onClick: () => {
                A(X);
              },
              onMouseenter: q,
              onMouseleave: Y
            }, j);
            if (ie === "page" && !X.mayBeFastBackward && !X.mayBeFastForward)
              return ae;
            {
              const fe = X.type === "page" ? X.mayBeFastBackward ? "fast-backward" : "fast-forward" : X.type;
              return X.type !== "page" && !X.options ? ae : f(zC, {
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
                onUpdateShow: (we) => {
                  ie !== "page" && (we ? ie === "fast-backward" ? this.showFastBackwardMenu = we : this.showFastForwardMenu = we : (this.showFastBackwardMenu = !1, this.showFastForwardMenu = !1));
                },
                options: X.type !== "page" && X.options ? X.options : [],
                onUpdateValue: this.handleMenuSelect,
                scrollable: !0,
                showCheckmark: !1
              }, {
                default: () => ae
              });
            }
          }), f("div", {
            class: [`${t}-pagination-item`, !L && `${t}-pagination-item--button`, {
              [`${t}-pagination-item--disabled`]: i < 1 || i >= a || r
            }],
            onClick: K
          }, L ? L({
            page: i,
            pageSize: x,
            pageCount: a,
            itemCount: this.mergedItemCount,
            startIndex: this.startIndex,
            endIndex: this.endIndex
          }) : f(bt, {
            clsPrefix: t
          }, {
            default: () => this.rtlEnabled ? f(Is, null) : f(Hs, null)
          })));
        case "size-picker":
          return !b && s ? f(ec, Object.assign({
            consistentMenuWidth: !1,
            placeholder: "",
            showCheckmark: !1,
            to: this.to
          }, this.selectProps, {
            size: p,
            options: v,
            value: x,
            disabled: r,
            theme: u.peers.Select,
            themeOverrides: u.peerOverrides.Select,
            onUpdateValue: B
          })) : null;
        case "quick-jumper":
          return !b && d ? f("div", {
            class: `${t}-pagination-quick-jumper`
          }, R ? R() : Zt(this.$slots.goto, () => [c.goto]), f(wa, {
            value: m,
            onUpdateValue: y,
            size: h,
            placeholder: "",
            disabled: r,
            theme: u.peers.Input,
            themeOverrides: u.peerOverrides.Input,
            onChange: M
          })) : null;
        default:
          return null;
      }
    }), E ? f("div", {
      class: `${t}-pagination-suffix`
    }, E({
      page: i,
      pageSize: x,
      pageCount: a,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      itemCount: this.mergedItemCount
    })) : null);
  }
}), LC = {
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
function NC(e) {
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
    heightMedium: x,
    heightLarge: v,
    heightHuge: m,
    textColor3: b,
    opacityDisabled: g
  } = e;
  return Object.assign(Object.assign({}, LC), {
    optionHeightSmall: p,
    optionHeightMedium: x,
    optionHeightLarge: v,
    optionHeightHuge: m,
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
    optionColorActive: De(t, {
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
    optionColorHoverInverted: t,
    optionColorActiveInverted: t,
    groupHeaderTextColorInverted: "#AAA",
    optionOpacityDisabled: g
  });
}
const oc = {
  name: "Dropdown",
  common: Ze,
  peers: {
    Popover: fr
  },
  self: NC
}, HC = {
  padding: "8px 14px"
};
function jC(e) {
  const {
    borderRadius: t,
    boxShadow2: r,
    baseColor: o
  } = e;
  return Object.assign(Object.assign({}, HC), {
    borderRadius: t,
    boxShadow: r,
    color: Ge(o, "rgba(0, 0, 0, .85)"),
    textColor: o
  });
}
const ic = {
  name: "Tooltip",
  common: Ze,
  peers: {
    Popover: fr
  },
  self: jC
}, ac = {
  name: "Ellipsis",
  common: Ze,
  peers: {
    Tooltip: ic
  }
}, _C = {
  radioSizeSmall: "14px",
  radioSizeMedium: "16px",
  radioSizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function WC(e) {
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
    heightMedium: x,
    heightLarge: v,
    lineHeight: m
  } = e;
  return Object.assign(Object.assign({}, _C), {
    labelLineHeight: m,
    buttonHeightSmall: p,
    buttonHeightMedium: x,
    buttonHeightLarge: v,
    fontSizeSmall: u,
    fontSizeMedium: c,
    fontSizeLarge: h,
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
const yl = {
  name: "Radio",
  common: Ze,
  self: WC
}, VC = {
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
function KC(e) {
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
    fontSizeSmall: x,
    fontSizeMedium: v,
    fontSizeLarge: m,
    dividerColor: b,
    heightSmall: g,
    opacityDisabled: C,
    tableColorStriped: S
  } = e;
  return Object.assign(Object.assign({}, VC), {
    actionDividerColor: b,
    lineHeight: p,
    borderRadius: h,
    fontSizeSmall: x,
    fontSizeMedium: v,
    fontSizeLarge: m,
    borderColor: Ge(t, b),
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
    borderColorModal: Ge(r, b),
    tdColorHoverModal: Ge(r, s),
    tdColorSortingModal: Ge(r, s),
    tdColorStripedModal: Ge(r, S),
    thColorModal: Ge(r, l),
    thColorHoverModal: Ge(Ge(r, l), s),
    thColorSortingModal: Ge(Ge(r, l), s),
    tdColorModal: r,
    // popover
    borderColorPopover: Ge(o, b),
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
    loadingSize: g,
    opacityLoading: C
  });
}
const UC = {
  name: "DataTable",
  common: Ze,
  peers: {
    Button: xi,
    Checkbox: Gu,
    Radio: yl,
    Pagination: tc,
    Scrollbar: Bo,
    Empty: vl,
    Popover: fr,
    Ellipsis: ac,
    Dropdown: oc
  },
  self: KC
}, qC = Object.assign(Object.assign({}, ve.props), {
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
}), sn = "n-data-table", lc = 40, sc = 40;
function td(e) {
  if (e.type === "selection")
    return e.width === void 0 ? lc : At(e.width);
  if (e.type === "expand")
    return e.width === void 0 ? sc : At(e.width);
  if (!("children" in e))
    return typeof e.width == "string" ? At(e.width) : e.width;
}
function GC(e) {
  var t, r;
  if (e.type === "selection")
    return Ct((t = e.width) !== null && t !== void 0 ? t : lc);
  if (e.type === "expand")
    return Ct((r = e.width) !== null && r !== void 0 ? r : sc);
  if (!("children" in e))
    return Ct(e.width);
}
function rn(e) {
  return e.type === "selection" ? "__n_selection__" : e.type === "expand" ? "__n_expand__" : e.key;
}
function nd(e) {
  return e && (typeof e == "object" ? Object.assign({}, e) : e);
}
function XC(e) {
  return e === "ascend" ? 1 : e === "descend" ? -1 : 0;
}
function YC(e, t, r) {
  return r !== void 0 && (e = Math.min(e, typeof r == "number" ? r : Number.parseFloat(r))), t !== void 0 && (e = Math.max(e, typeof t == "number" ? t : Number.parseFloat(t))), e;
}
function ZC(e, t) {
  if (t !== void 0)
    return {
      width: t,
      minWidth: t,
      maxWidth: t
    };
  const r = GC(e), {
    minWidth: o,
    maxWidth: i
  } = e;
  return {
    width: r,
    minWidth: Ct(o) || r,
    maxWidth: Ct(i)
  };
}
function JC(e, t, r) {
  return typeof r == "function" ? r(e, t) : r || "";
}
function ea(e) {
  return e.filterOptionValues !== void 0 || e.filterOptionValue === void 0 && e.defaultFilterOptionValues !== void 0;
}
function ta(e) {
  return "children" in e ? !1 : !!e.sorter;
}
function dc(e) {
  return "children" in e && e.children.length ? !1 : !!e.resizable;
}
function rd(e) {
  return "children" in e ? !1 : !!e.filter && (!!e.filterOptions || !!e.renderFilterMenu);
}
function od(e) {
  if (e) {
    if (e === "descend") return "ascend";
  } else return "descend";
  return !1;
}
function QC(e, t) {
  return e.sorter === void 0 ? null : t === null || t.columnKey !== e.key ? {
    columnKey: e.key,
    sorter: e.sorter,
    order: od(!1)
  } : Object.assign(Object.assign({}, t), {
    order: od(t.order)
  });
}
function uc(e, t) {
  return t.find((r) => r.columnKey === e.key && r.order) !== void 0;
}
function ey(e) {
  return typeof e == "string" ? e.replace(/,/g, "\\,") : e == null ? "" : `${e}`.replace(/,/g, "\\,");
}
function ty(e, t, r, o) {
  const i = e.filter((s) => s.type !== "expand" && s.type !== "selection" && s.allowExport !== !1), a = i.map((s) => o ? o(s) : s.title).join(","), l = t.map((s) => i.map((d) => r ? r(s[d.key], s, d) : ey(s[d.key])).join(","));
  return [a, ...l].join(`
`);
}
const ny = ee({
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
    } = ge(sn);
    return () => {
      const {
        rowKey: o
      } = e;
      return f(bl, {
        privateInsideTable: !0,
        disabled: e.disabled,
        indeterminate: r.value.has(o),
        checked: t.value.has(o),
        onUpdateChecked: e.onUpdateChecked
      });
    };
  }
}), ry = z("radio", `
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
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
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
 `, [O("&::before", `
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
}, [O("&::before", `
 opacity: 1;
 transform: scale(1);
 `)])]), T("label", `
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `), Xe("disabled", `
 cursor: pointer;
 `, [O("&:hover", [T("dot", {
  boxShadow: "var(--n-box-shadow-hover)"
})]), N("focus", [O("&:not(:active)", [T("dot", {
  boxShadow: "var(--n-box-shadow-focus)"
})])])]), N("disabled", `
 cursor: not-allowed;
 `, [T("dot", {
  boxShadow: "var(--n-box-shadow-disabled)",
  backgroundColor: "var(--n-color-disabled)"
}, [O("&::before", {
  backgroundColor: "var(--n-dot-color-disabled)"
}), N("checked", `
 opacity: 1;
 `)]), T("label", {
  color: "var(--n-text-color-disabled)"
}), z("radio-input", `
 cursor: not-allowed;
 `)])]), oy = {
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
}, cc = "n-radio-group";
function iy(e) {
  process.env.NODE_ENV !== "production" && tt(() => {
    e.checkedValue !== void 0 && at("radio", "`checked-value` is deprecated, please use `checked` instead.");
  });
  const t = ge(cc, null), r = Ln(e, {
    mergedSize(C) {
      const {
        size: S
      } = e;
      if (S !== void 0) return S;
      if (t) {
        const {
          mergedSizeRef: {
            value: w
          }
        } = t;
        if (w !== void 0)
          return w;
      }
      return C ? C.mergedSize.value : "medium";
    },
    mergedDisabled(C) {
      return !!(e.disabled || t != null && t.disabledRef.value || C != null && C.disabled.value);
    }
  }), {
    mergedSizeRef: o,
    mergedDisabledRef: i
  } = r, a = I(null), l = I(null), s = I(e.defaultChecked), d = oe(e, "checked"), u = Mt(d, s), c = Ue(() => t ? t.valueRef.value === e.value : u.value), h = Ue(() => {
    const {
      name: C
    } = e;
    if (C !== void 0) return C;
    if (t) return t.nameRef.value;
  }), p = I(!1);
  function x() {
    if (t) {
      const {
        doUpdateValue: C
      } = t, {
        value: S
      } = e;
      ne(C, S);
    } else {
      const {
        onUpdateChecked: C,
        "onUpdate:checked": S
      } = e, {
        nTriggerFormInput: w,
        nTriggerFormChange: k
      } = r;
      C && ne(C, !0), S && ne(S, !0), w(), k(), s.value = !0;
    }
  }
  function v() {
    i.value || c.value || x();
  }
  function m() {
    v(), a.value && (a.value.checked = c.value);
  }
  function b() {
    p.value = !1;
  }
  function g() {
    p.value = !0;
  }
  return {
    mergedClsPrefix: t ? t.mergedClsPrefixRef : Ae(e).mergedClsPrefixRef,
    inputRef: a,
    labelRef: l,
    mergedName: h,
    mergedDisabled: i,
    renderSafeChecked: c,
    focus: p,
    mergedSize: o,
    handleRadioInputChange: m,
    handleRadioInputBlur: b,
    handleRadioInputFocus: g
  };
}
const ay = Object.assign(Object.assign({}, ve.props), oy), fc = ee({
  name: "Radio",
  props: ay,
  setup(e) {
    const t = iy(e), r = ve("Radio", "-radio", ry, yl, e, t.mergedClsPrefix), o = $(() => {
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
          boxShadowDisabled: x,
          boxShadowFocus: v,
          boxShadowHover: m,
          color: b,
          colorDisabled: g,
          colorActive: C,
          textColor: S,
          textColorDisabled: w,
          dotColorActive: k,
          dotColorDisabled: R,
          labelPadding: y,
          labelLineHeight: B,
          labelFontWeight: F,
          [Z("fontSize", u)]: A,
          [Z("radioSize", u)]: K
        }
      } = r.value;
      return {
        "--n-bezier": c,
        "--n-label-line-height": B,
        "--n-label-font-weight": F,
        "--n-box-shadow": h,
        "--n-box-shadow-active": p,
        "--n-box-shadow-disabled": x,
        "--n-box-shadow-focus": v,
        "--n-box-shadow-hover": m,
        "--n-color": b,
        "--n-color-active": C,
        "--n-color-disabled": g,
        "--n-dot-color-active": k,
        "--n-dot-color-disabled": R,
        "--n-font-size": A,
        "--n-radio-size": K,
        "--n-text-color": S,
        "--n-text-color-disabled": w,
        "--n-label-padding": y
      };
    }), {
      inlineThemeDisabled: i,
      mergedClsPrefixRef: a,
      mergedRtlRef: l
    } = Ae(e), s = Pt("Radio", l, a), d = i ? Ye("radio", $(() => t.mergedSize.value[0]), o, e) : void 0;
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
    })), je(e.default, (i) => !i && !o ? null : f("div", {
      ref: "labelRef",
      class: `${t}-radio__label`
    }, i || o)));
  }
}), ly = z("radio-group", `
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
 `), O("&:first-child", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `, [T("state-border", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]), O("&:last-child", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `, [T("state-border", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]), Xe("disabled", `
 cursor: pointer;
 `, [O("&:hover", [T("state-border", `
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `), Xe("checked", {
  color: "var(--n-button-text-color-hover)"
})]), N("focus", [O("&:not(:active)", [T("state-border", {
  boxShadow: "var(--n-button-box-shadow-focus)"
})])])]), N("checked", `
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `), N("disabled", `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);
function sy(e, t, r) {
  var o;
  const i = [];
  let a = !1;
  for (let l = 0; l < e.length; ++l) {
    const s = e[l], d = (o = s.type) === null || o === void 0 ? void 0 : o.name;
    if (d === "RadioButton" && (a = !0), process.env.NODE_ENV !== "production" && a && d !== "RadioButton") {
      Rt("radio-group", "`n-radio-group` in button mode only takes `n-radio-button` as children.");
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
      const c = i[i.length - 1].props, h = t === c.value, p = c.disabled, x = t === u.value, v = u.disabled, m = (h ? 2 : 0) + (p ? 0 : 1), b = (x ? 2 : 0) + (v ? 0 : 1), g = {
        [`${r}-radio-group__splitor--disabled`]: p,
        [`${r}-radio-group__splitor--checked`]: h
      }, C = {
        [`${r}-radio-group__splitor--disabled`]: v,
        [`${r}-radio-group__splitor--checked`]: x
      }, S = m < b ? C : g;
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
const dy = Object.assign(Object.assign({}, ve.props), {
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
}), uy = ee({
  name: "RadioGroup",
  props: dy,
  setup(e) {
    const t = I(null), {
      mergedSizeRef: r,
      mergedDisabledRef: o,
      nTriggerFormChange: i,
      nTriggerFormInput: a,
      nTriggerFormBlur: l,
      nTriggerFormFocus: s
    } = Ln(e), {
      mergedClsPrefixRef: d,
      inlineThemeDisabled: u,
      mergedRtlRef: c
    } = Ae(e), h = ve("Radio", "-radio-group", ly, yl, e, d), p = I(e.defaultValue), x = oe(e, "value"), v = Mt(x, p);
    function m(k) {
      const {
        onUpdateValue: R,
        "onUpdate:value": y
      } = e;
      R && ne(R, k), y && ne(y, k), p.value = k, i(), a();
    }
    function b(k) {
      const {
        value: R
      } = t;
      R && (R.contains(k.relatedTarget) || s());
    }
    function g(k) {
      const {
        value: R
      } = t;
      R && (R.contains(k.relatedTarget) || l());
    }
    Ee(cc, {
      mergedClsPrefixRef: d,
      nameRef: oe(e, "name"),
      valueRef: v,
      disabledRef: o,
      mergedSizeRef: r,
      doUpdateValue: m
    });
    const C = Pt("Radio", c, d), S = $(() => {
      const {
        value: k
      } = r, {
        common: {
          cubicBezierEaseInOut: R
        },
        self: {
          buttonBorderColor: y,
          buttonBorderColorActive: B,
          buttonBorderRadius: F,
          buttonBoxShadow: A,
          buttonBoxShadowFocus: K,
          buttonBoxShadowHover: M,
          buttonColor: n,
          buttonColorActive: D,
          buttonTextColor: E,
          buttonTextColorActive: H,
          buttonTextColorHover: L,
          opacityDisabled: V,
          [Z("buttonHeight", k)]: te,
          [Z("fontSize", k)]: X
        }
      } = h.value;
      return {
        "--n-font-size": X,
        "--n-bezier": R,
        "--n-button-border-color": y,
        "--n-button-border-color-active": B,
        "--n-button-border-radius": F,
        "--n-button-box-shadow": A,
        "--n-button-box-shadow-focus": K,
        "--n-button-box-shadow-hover": M,
        "--n-button-color": n,
        "--n-button-color-active": D,
        "--n-button-text-color": E,
        "--n-button-text-color-hover": L,
        "--n-button-text-color-active": H,
        "--n-height": te,
        "--n-opacity-disabled": V
      };
    }), w = u ? Ye("radio-group", $(() => r.value[0]), S, e) : void 0;
    return {
      selfElRef: t,
      rtlEnabled: C,
      mergedClsPrefix: d,
      mergedValue: v,
      handleFocusout: g,
      handleFocusin: b,
      cssVars: u ? void 0 : S,
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
    } = sy(co(w0(this)), t, r);
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      onFocusin: o,
      onFocusout: i,
      ref: "selfElRef",
      class: [`${r}-radio-group`, this.rtlEnabled && `${r}-radio-group--rtl`, this.themeClass, l && `${r}-radio-group--button-group`],
      style: this.cssVars
    }, a);
  }
}), cy = ee({
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
    } = ge(sn);
    return () => {
      const {
        rowKey: o
      } = e;
      return f(fc, {
        name: r,
        disabled: e.disabled,
        checked: t.value.has(o),
        onUpdateChecked: e.onUpdateChecked
      });
    };
  }
}), fy = Object.assign(Object.assign({}, tr), ve.props), hc = ee({
  name: "Tooltip",
  props: fy,
  slots: Object,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = ve("Tooltip", "-tooltip", void 0, ic, e, t), o = I(null);
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
    return f(hr, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: t.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), vc = z("ellipsis", {
  overflow: "hidden"
}, [Xe("line-clamp", `
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
function Sa(e) {
  return `${e}-ellipsis--line-clamp`;
}
function Ba(e, t) {
  return `${e}-ellipsis--cursor-${t}`;
}
const pc = Object.assign(Object.assign({}, ve.props), {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Boolean, Object],
    default: !0
  }
}), Ci = ee({
  name: "Ellipsis",
  inheritAttrs: !1,
  props: pc,
  slots: Object,
  setup(e, {
    slots: t,
    attrs: r
  }) {
    const o = tu(), i = ve("Ellipsis", "-ellipsis", vc, ac, e, o), a = I(null), l = I(null), s = I(null), d = I(!1), u = $(() => {
      const {
        lineClamp: b
      } = e, {
        value: g
      } = d;
      return b !== void 0 ? {
        textOverflow: "",
        "-webkit-line-clamp": g ? "" : b
      } : {
        textOverflow: g ? "" : "ellipsis",
        "-webkit-line-clamp": ""
      };
    });
    function c() {
      let b = !1;
      const {
        value: g
      } = d;
      if (g) return !0;
      const {
        value: C
      } = a;
      if (C) {
        const {
          lineClamp: S
        } = e;
        if (x(C), S !== void 0)
          b = C.scrollHeight <= C.offsetHeight;
        else {
          const {
            value: w
          } = l;
          w && (b = w.getBoundingClientRect().width <= C.getBoundingClientRect().width);
        }
        v(C, b);
      }
      return b;
    }
    const h = $(() => e.expandTrigger === "click" ? () => {
      var b;
      const {
        value: g
      } = d;
      g && ((b = s.value) === null || b === void 0 || b.setShow(!1)), d.value = !g;
    } : void 0);
    Ta(() => {
      var b;
      e.tooltip && ((b = s.value) === null || b === void 0 || b.setShow(!1));
    });
    const p = () => f("span", Object.assign({}, Ot(r, {
      class: [`${o.value}-ellipsis`, e.lineClamp !== void 0 ? Sa(o.value) : void 0, e.expandTrigger === "click" ? Ba(o.value, "pointer") : void 0],
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
    function x(b) {
      if (!b) return;
      const g = u.value, C = Sa(o.value);
      e.lineClamp !== void 0 ? m(b, C, "add") : m(b, C, "remove");
      for (const S in g)
        b.style[S] !== g[S] && (b.style[S] = g[S]);
    }
    function v(b, g) {
      const C = Ba(o.value, "pointer");
      e.expandTrigger === "click" && !g ? m(b, C, "add") : m(b, C, "remove");
    }
    function m(b, g, C) {
      C === "add" ? b.classList.contains(g) || b.classList.add(g) : b.classList.contains(g) && b.classList.remove(g);
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
      return f(hc, Object.assign({
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
}), hy = ee({
  name: "PerformantEllipsis",
  props: pc,
  inheritAttrs: !1,
  setup(e, {
    attrs: t,
    slots: r
  }) {
    const o = I(!1), i = tu();
    return jn("-ellipsis", vc, i), {
      mouseEntered: o,
      renderTrigger: () => {
        const {
          lineClamp: l
        } = e, s = i.value;
        return f("span", Object.assign({}, Ot(t, {
          class: [`${s}-ellipsis`, l !== void 0 ? Sa(s) : void 0, e.expandTrigger === "click" ? Ba(s, "pointer") : void 0],
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
    return this.mouseEntered ? f(Ci, Ot({}, this.$attrs, this.$props), this.$slots) : this.renderTrigger();
  }
}), vy = ee({
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
    if (l && !t ? a = l(o, this.index) : t ? a = (e = o[s]) === null || e === void 0 ? void 0 : e.value : a = i ? i(vo(o, s), o, r) : vo(o, s), d)
      if (typeof d == "object") {
        const {
          mergedTheme: u
        } = this;
        return r.ellipsisComponent === "performant-ellipsis" ? f(hy, Object.assign({}, d, {
          theme: u.peers.Ellipsis,
          themeOverrides: u.peerOverrides.Ellipsis
        }), {
          default: () => a
        }) : f(Ci, Object.assign({}, d, {
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
}), id = ee({
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
    }, f(ur, null, {
      default: () => this.loading ? f(_n, {
        key: "loading",
        clsPrefix: this.clsPrefix,
        radius: 85,
        strokeWidth: 15,
        scale: 0.88
      }) : this.renderExpandIcon ? this.renderExpandIcon({
        expanded: this.expanded,
        rowData: this.rowData
      }) : f(bt, {
        clsPrefix: e,
        key: "base-icon"
      }, {
        default: () => f(dl, null)
      })
    }));
  }
}), py = ee({
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
    } = Ae(e), o = Pt("DataTable", r, t), {
      mergedClsPrefixRef: i,
      mergedThemeRef: a,
      localeRef: l
    } = ge(sn), s = I(e.value), d = $(() => {
      const {
        value: v
      } = s;
      return Array.isArray(v) ? v : null;
    }), u = $(() => {
      const {
        value: v
      } = s;
      return ea(e.column) ? Array.isArray(v) && v.length && v[0] || null : Array.isArray(v) ? null : v;
    });
    function c(v) {
      e.onChange(v);
    }
    function h(v) {
      e.multiple && Array.isArray(v) ? s.value = v : ea(e.column) && !Array.isArray(v) ? s.value = [v] : s.value = v;
    }
    function p() {
      c(s.value), e.onConfirm();
    }
    function x() {
      e.multiple || ea(e.column) ? c([]) : c(null), e.onClear();
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
      handleClearClick: x
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
    }, f(cr, null, {
      default: () => {
        const {
          checkboxGroupValue: o,
          handleChange: i
        } = this;
        return this.multiple ? f(cC, {
          value: o,
          class: `${r}-data-table-filter-menu__group`,
          onUpdateValue: i
        }, {
          default: () => this.options.map((a) => f(bl, {
            key: a.value,
            theme: e.peers.Checkbox,
            themeOverrides: e.peerOverrides.Checkbox,
            value: a.value
          }, {
            default: () => a.label
          }))
        }) : f(uy, {
          name: this.radioGroupName,
          class: `${r}-data-table-filter-menu__group`,
          value: this.radioGroupValue,
          onUpdateValue: this.handleChange
        }, {
          default: () => this.options.map((a) => f(fc, {
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
    }, f(nr, {
      size: "tiny",
      theme: e.peers.Button,
      themeOverrides: e.peerOverrides.Button,
      onClick: this.handleClearClick
    }, {
      default: () => t.clear
    }), f(nr, {
      theme: e.peers.Button,
      themeOverrides: e.peerOverrides.Button,
      type: "primary",
      size: "tiny",
      onClick: this.handleConfirmClick
    }, {
      default: () => t.confirm
    })));
  }
}), gy = ee({
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
function my(e, t, r) {
  const o = Object.assign({}, e);
  return o[t] = r, o;
}
const by = ee({
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
    } = ge(sn), c = I(!1), h = i, p = $(() => e.column.filterMultiple !== !1), x = $(() => {
      const S = h.value[e.column.key];
      if (S === void 0) {
        const {
          value: w
        } = p;
        return w ? [] : null;
      }
      return S;
    }), v = $(() => {
      const {
        value: S
      } = x;
      return Array.isArray(S) ? S.length > 0 : S !== null;
    }), m = $(() => {
      var S, w;
      return ((w = (S = t == null ? void 0 : t.value) === null || S === void 0 ? void 0 : S.DataTable) === null || w === void 0 ? void 0 : w.renderFilter) || e.column.renderFilter;
    });
    function b(S) {
      const w = my(h.value, e.column.key, S);
      d(w, e.column), l.value === "first" && s(1);
    }
    function g() {
      c.value = !1;
    }
    function C() {
      c.value = !1;
    }
    return {
      mergedTheme: r,
      mergedClsPrefix: o,
      active: v,
      showPopover: c,
      mergedRenderFilter: m,
      filterIconPopoverProps: u,
      filterMultiple: p,
      mergedFilterValue: x,
      filterMenuCssVars: a,
      handleFilterChange: b,
      handleFilterMenuConfirm: C,
      handleFilterMenuCancel: g
    };
  },
  render() {
    const {
      mergedTheme: e,
      mergedClsPrefix: t,
      handleFilterMenuCancel: r,
      filterIconPopoverProps: o
    } = this;
    return f(hr, Object.assign({
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
          return f(gy, {
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
        }) : f(bt, {
          clsPrefix: t
        }, {
          default: () => f(xx, null)
        }));
      },
      default: () => {
        const {
          renderFilterMenu: i
        } = this.column;
        return i ? i({
          hide: r
        }) : f(py, {
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
}), xy = ee({
  name: "ColumnResizeButton",
  props: {
    onResizeStart: Function,
    onResize: Function,
    onResizeEnd: Function
  },
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = ge(sn), r = I(!1);
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
}), Cy = ee({
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
}), yy = ee({
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
    } = ge(sn), i = $(() => r.value.find((d) => d.columnKey === e.column.key)), a = $(() => i.value !== void 0), l = $(() => {
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
    return e ? f(Cy, {
      render: e,
      order: t
    }) : f("span", {
      class: [`${r}-data-table-sorter`, t === "ascend" && `${r}-data-table-sorter--asc`, t === "descend" && `${r}-data-table-sorter--desc`]
    }, o ? o({
      order: t
    }) : f(bt, {
      clsPrefix: r
    }, {
      default: () => f(cx, null)
    }));
  }
}), wl = "n-dropdown-menu", yi = "n-dropdown", ad = "n-dropdown-option", gc = ee({
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
}), wy = ee({
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
    } = ge(wl), {
      renderLabelRef: r,
      labelFieldRef: o,
      nodePropsRef: i,
      renderOptionRef: a
    } = ge(yi);
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
    }, pt(s.icon)), f("div", {
      class: `${t}-dropdown-option-body__label`,
      "data-dropdown-option": !0
    }, a ? a(s) : pt((e = s.title) !== null && e !== void 0 ? e : s[this.labelField])), f("div", {
      class: [`${t}-dropdown-option-body__suffix`, r && `${t}-dropdown-option-body__suffix--has-submenu`],
      "data-dropdown-option": !0
    })));
    return l ? l({
      node: d,
      option: s
    }) : d;
  }
});
function Sy(e) {
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
const By = {
  name: "Icon",
  common: Ze,
  self: Sy
}, ky = z("icon", `
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
}, [O("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), O("svg", {
  height: "1em",
  width: "1em"
})]), Ry = Object.assign(Object.assign({}, ve.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), po = ee({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: Ry,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Icon", "-icon", ky, By, e, t), i = $(() => {
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
    }), a = r ? Ye("icon", $(() => `${e.depth || "d"}`), i, e) : void 0;
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
    return !((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && Rt("icon", "don't wrap `n-icon` inside `n-icon`"), a == null || a(), f("i", Ot(this.$attrs, {
      role: "img",
      class: [`${o}-icon`, l, {
        [`${o}-icon--depth`]: r,
        [`${o}-icon--color-transition`]: r !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), i ? f(i) : this.$slots);
  }
});
function ka(e, t) {
  return e.type === "submenu" || e.type === void 0 && e[t] !== void 0;
}
function Fy(e) {
  return e.type === "group";
}
function mc(e) {
  return e.type === "divider";
}
function Py(e) {
  return e.type === "render";
}
const bc = ee({
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
    const t = ge(yi), {
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
      renderOptionRef: x,
      nodePropsRef: v,
      menuPropsRef: m
    } = t, b = ge(ad, null), g = ge(wl), C = ge(yo), S = $(() => e.tmNode.rawNode), w = $(() => {
      const {
        value: L
      } = p;
      return ka(e.tmNode.rawNode, L);
    }), k = $(() => {
      const {
        disabled: L
      } = e.tmNode;
      return L;
    }), R = $(() => {
      if (!w.value) return !1;
      const {
        key: L,
        disabled: V
      } = e.tmNode;
      if (V) return !1;
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
    }), y = $(() => o.value === null && !s.value), B = wh(R, 300, y), F = $(() => !!(b != null && b.enteringSubmenuRef.value)), A = I(!1);
    Ee(ad, {
      enteringSubmenuRef: A
    });
    function K() {
      A.value = !0;
    }
    function M() {
      A.value = !1;
    }
    function n() {
      const {
        parentKey: L,
        tmNode: V
      } = e;
      V.disabled || d.value && (i.value = L, o.value = null, r.value = V.key);
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
        relatedTarget: V
      } = L;
      V && !qt({
        target: V
      }, "dropdownOption") && !qt({
        target: V
      }, "scrollbarRail") && (r.value = null);
    }
    function H() {
      const {
        value: L
      } = w, {
        tmNode: V
      } = e;
      d.value && !L && !V.disabled && (t.doSelect(V.key, V.rawNode), t.doUpdateShow(!1));
    }
    return {
      labelField: h,
      renderLabel: u,
      renderIcon: c,
      siblingHasIcon: g.showIconRef,
      siblingHasSubmenu: g.hasSubmenuRef,
      menuProps: m,
      popoverBody: C,
      animated: s,
      mergedShowSubmenu: $(() => B.value && !F.value),
      rawNode: S,
      hasSubmenu: w,
      pending: Ue(() => {
        const {
          value: L
        } = a, {
          key: V
        } = e.tmNode;
        return L.includes(V);
      }),
      childActive: Ue(() => {
        const {
          value: L
        } = l, {
          key: V
        } = e.tmNode, te = L.findIndex((X) => V === X);
        return te === -1 ? !1 : te < L.length - 1;
      }),
      active: Ue(() => {
        const {
          value: L
        } = l, {
          key: V
        } = e.tmNode, te = L.findIndex((X) => V === X);
        return te === -1 ? !1 : te === L.length - 1;
      }),
      mergedDisabled: k,
      renderOption: x,
      nodeProps: v,
      handleClick: H,
      handleMouseMove: D,
      handleMouseEnter: n,
      handleMouseLeave: E,
      handleSubmenuBeforeEnter: K,
      handleSubmenuAfterEnter: M
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
      scrollable: x
    } = this;
    let v = null;
    if (i) {
      const C = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, o, o.children);
      v = f(xc, Object.assign({}, C, {
        clsPrefix: a,
        scrollable: this.scrollable,
        tmNodes: this.tmNode.children,
        parentKey: this.tmNode.key
      }));
    }
    const m = {
      class: [`${a}-dropdown-option-body`, this.pending && `${a}-dropdown-option-body--pending`, this.active && `${a}-dropdown-option-body--active`, this.childActive && `${a}-dropdown-option-body--child-active`, this.mergedDisabled && `${a}-dropdown-option-body--disabled`],
      onMousemove: this.handleMouseMove,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onClick: this.handleClick
    }, b = h == null ? void 0 : h(o), g = f("div", Object.assign({
      class: [`${a}-dropdown-option`, b == null ? void 0 : b.class],
      "data-dropdown-option": !0
    }, b), f("div", Ot(m, p), [f("div", {
      class: [`${a}-dropdown-option-body__prefix`, l && `${a}-dropdown-option-body__prefix--show-icon`]
    }, [u ? u(o) : pt(o.icon)]), f("div", {
      "data-dropdown-option": !0,
      class: `${a}-dropdown-option-body__label`
    }, d ? d(o) : pt((t = o[this.labelField]) !== null && t !== void 0 ? t : o.title)), f("div", {
      "data-dropdown-option": !0,
      class: [`${a}-dropdown-option-body__suffix`, s && `${a}-dropdown-option-body__suffix--has-submenu`]
    }, this.hasSubmenu ? f(po, null, {
      default: () => f(dl, null)
    }) : null)]), this.hasSubmenu ? f(Va, null, {
      default: () => [f(Ka, null, {
        default: () => f("div", {
          class: `${a}-dropdown-offset-container`
        }, f(Ga, {
          show: this.mergedShowSubmenu,
          placement: this.placement,
          to: x && this.popoverBody || void 0,
          teleportDisabled: !x
        }, {
          default: () => f("div", {
            class: `${a}-dropdown-menu-wrapper`
          }, r ? f(jt, {
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
      node: g,
      option: o
    }) : g;
  }
}), zy = ee({
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
    return f(_e, null, f(wy, {
      clsPrefix: r,
      tmNode: e,
      key: e.key
    }), o == null ? void 0 : o.map((i) => {
      const {
        rawNode: a
      } = i;
      return a.show === !1 ? null : mc(a) ? f(gc, {
        clsPrefix: r,
        key: i.key
      }) : i.isGroup ? (Rt("dropdown", "`group` node is not allowed to be put in `group` node."), null) : f(bc, {
        clsPrefix: r,
        tmNode: i,
        parentKey: t,
        key: i.key
      });
    }));
  }
}), $y = ee({
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
}), xc = ee({
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
    } = ge(yi);
    Ee(wl, {
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
            }) => ka(d, i));
          const {
            rawNode: s
          } = a;
          return ka(s, i);
        });
      })
    });
    const o = I(null);
    return Ee(fi, null), Ee(ci, null), Ee(yo, o), {
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
      return a.show === !1 ? null : Py(a) ? f($y, {
        tmNode: i,
        key: i.key
      }) : mc(a) ? f(gc, {
        clsPrefix: t,
        key: i.key
      }) : Fy(a) ? f(zy, {
        clsPrefix: t,
        tmNode: i,
        parentKey: e,
        key: i.key
      }) : f(bc, {
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
    }, r ? f(Tu, {
      contentClass: `${t}-dropdown-menu__content`
    }, {
      default: () => o
    }) : o, this.showArrow ? Nu({
      clsPrefix: t,
      arrowStyle: this.arrowStyle,
      arrowClass: void 0,
      arrowWrapperClass: void 0,
      arrowWrapperStyle: void 0
    }) : null);
  }
}), Ay = z("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [ko(), z("dropdown-option", `
 position: relative;
 `, [O("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [O("&::before", `
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
 `, [O("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), Xe("disabled", [N("pending", `
 color: var(--n-option-text-color-hover);
 `, [T("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), O("&::before", "background-color: var(--n-option-color-hover);")]), N("active", `
 color: var(--n-option-text-color-active);
 `, [T("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), O("&::before", "background-color: var(--n-option-color-active);")]), N("child-active", `
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
 `), O(">", [z("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Xe("scrollable", `
 padding: var(--n-padding);
 `), N("scrollable", [T("content", `
 padding: var(--n-padding);
 `)])]), Dy = {
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
}, Ey = Object.keys(tr), Ty = Object.assign(Object.assign(Object.assign({}, tr), Dy), ve.props), Cc = ee({
  name: "Dropdown",
  inheritAttrs: !1,
  props: Ty,
  setup(e) {
    const t = I(!1), r = Mt(oe(e, "show"), t), o = $(() => {
      const {
        keyField: M,
        childrenField: n
      } = e;
      return bi(e.options, {
        getKey(D) {
          return D[M];
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
      var M, n, D;
      return (D = (n = (M = a.value) !== null && M !== void 0 ? M : l.value) !== null && n !== void 0 ? n : s.value) !== null && D !== void 0 ? D : null;
    }), u = $(() => o.value.getPath(d.value).keyPath), c = $(() => o.value.getPath(e.value).keyPath), h = Ue(() => e.keyboard && r.value);
    xh({
      keydown: {
        ArrowUp: {
          prevent: !0,
          handler: k
        },
        ArrowRight: {
          prevent: !0,
          handler: w
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
          handler: y
        },
        Escape: C
      }
    }, h);
    const {
      mergedClsPrefixRef: p,
      inlineThemeDisabled: x
    } = Ae(e), v = ve("Dropdown", "-dropdown", Ay, oc, e, p);
    Ee(yi, {
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
      doSelect: m,
      doUpdateShow: b
    }), He(r, (M) => {
      !e.animated && !M && g();
    });
    function m(M, n) {
      const {
        onSelect: D
      } = e;
      D && ne(D, M, n);
    }
    function b(M) {
      const {
        "onUpdate:show": n,
        onUpdateShow: D
      } = e;
      n && ne(n, M), D && ne(D, M), t.value = M;
    }
    function g() {
      a.value = null, l.value = null, s.value = null;
    }
    function C() {
      b(!1);
    }
    function S() {
      F("left");
    }
    function w() {
      F("right");
    }
    function k() {
      F("up");
    }
    function R() {
      F("down");
    }
    function y() {
      const M = B();
      M != null && M.isLeaf && r.value && (m(M.key, M.rawNode), b(!1));
    }
    function B() {
      var M;
      const {
        value: n
      } = o, {
        value: D
      } = d;
      return !n || D === null ? null : (M = n.getNode(D)) !== null && M !== void 0 ? M : null;
    }
    function F(M) {
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
          switch (M) {
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
        size: M,
        inverted: n
      } = e, {
        common: {
          cubicBezierEaseInOut: D
        },
        self: E
      } = v.value, {
        padding: H,
        dividerColor: L,
        borderRadius: V,
        optionOpacityDisabled: te,
        [Z("optionIconSuffixWidth", M)]: X,
        [Z("optionSuffixWidth", M)]: U,
        [Z("optionIconPrefixWidth", M)]: j,
        [Z("optionPrefixWidth", M)]: q,
        [Z("fontSize", M)]: Y,
        [Z("optionHeight", M)]: ie,
        [Z("optionIconSize", M)]: ae
      } = E, fe = {
        "--n-bezier": D,
        "--n-font-size": Y,
        "--n-padding": H,
        "--n-border-radius": V,
        "--n-option-height": ie,
        "--n-option-prefix-width": q,
        "--n-option-icon-prefix-width": j,
        "--n-option-suffix-width": U,
        "--n-option-icon-suffix-width": X,
        "--n-option-icon-size": ae,
        "--n-divider-color": L,
        "--n-option-opacity-disabled": te
      };
      return n ? (fe["--n-color"] = E.colorInverted, fe["--n-option-color-hover"] = E.optionColorHoverInverted, fe["--n-option-color-active"] = E.optionColorActiveInverted, fe["--n-option-text-color"] = E.optionTextColorInverted, fe["--n-option-text-color-hover"] = E.optionTextColorHoverInverted, fe["--n-option-text-color-active"] = E.optionTextColorActiveInverted, fe["--n-option-text-color-child-active"] = E.optionTextColorChildActiveInverted, fe["--n-prefix-color"] = E.prefixColorInverted, fe["--n-suffix-color"] = E.suffixColorInverted, fe["--n-group-header-text-color"] = E.groupHeaderTextColorInverted) : (fe["--n-color"] = E.color, fe["--n-option-color-hover"] = E.optionColorHover, fe["--n-option-color-active"] = E.optionColorActive, fe["--n-option-text-color"] = E.optionTextColor, fe["--n-option-text-color-hover"] = E.optionTextColorHover, fe["--n-option-text-color-active"] = E.optionTextColorActive, fe["--n-option-text-color-child-active"] = E.optionTextColorChildActive, fe["--n-prefix-color"] = E.prefixColor, fe["--n-suffix-color"] = E.suffixColor, fe["--n-group-header-text-color"] = E.groupHeaderTextColor), fe;
    }), K = x ? Ye("dropdown", $(() => `${e.size[0]}${e.inverted ? "i" : ""}`), A, e) : void 0;
    return {
      mergedClsPrefix: p,
      mergedTheme: v,
      // data
      tmNodes: i,
      // show
      mergedShow: r,
      // methods
      handleAfterLeave: () => {
        e.animated && g();
      },
      doUpdateShow: b,
      cssVars: x ? void 0 : A,
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
      const h = (c == null ? void 0 : c(void 0, this.tmNodes.map((x) => x.rawNode))) || {}, p = {
        ref: eu(i),
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
      return f(xc, Ot(this.$attrs, p, h));
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
    return f(hr, Object.assign({}, Sn(this.$props, Ey), r), {
      trigger: () => {
        var o, i;
        return (i = (o = this.$slots).default) === null || i === void 0 ? void 0 : i.call(o);
      }
    });
  }
}), yc = "_n_all__", wc = "_n_none__";
function Oy(e, t, r, o) {
  return e ? (i) => {
    for (const a of e)
      switch (i) {
        case yc:
          r(!0);
          return;
        case wc:
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
function My(e, t) {
  return e ? e.map((r) => {
    switch (r) {
      case "all":
        return {
          label: t.checkTableAll,
          key: yc
        };
      case "none":
        return {
          label: t.uncheckTableAll,
          key: wc
        };
      default:
        return r;
    }
  }) : [];
}
const Iy = ee({
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
    } = ge(sn), s = $(() => Oy(o.value, i, a, l)), d = $(() => My(o.value, r.value));
    return () => {
      var u, c, h, p;
      const {
        clsPrefix: x
      } = e;
      return f(Cc, {
        theme: (c = (u = t.theme) === null || u === void 0 ? void 0 : u.peers) === null || c === void 0 ? void 0 : c.Dropdown,
        themeOverrides: (p = (h = t.themeOverrides) === null || h === void 0 ? void 0 : h.peers) === null || p === void 0 ? void 0 : p.Dropdown,
        options: d.value,
        onSelect: s.value
      }, {
        default: () => f(bt, {
          clsPrefix: x,
          class: `${x}-data-table-check-extra`
        }, {
          default: () => f(Du, null)
        })
      });
    };
  }
});
function na(e) {
  return typeof e.title == "function" ? e.title(e) : e.title;
}
const Ly = ee({
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
}), Sc = ee({
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
      mergedTableLayoutRef: x,
      headerCheckboxDisabledRef: v,
      virtualScrollHeaderRef: m,
      headerHeightRef: b,
      onUnstableColumnResize: g,
      doUpdateResizableWidth: C,
      handleTableHeaderScroll: S,
      deriveNextSorter: w,
      doUncheckAll: k,
      doCheckAll: R
    } = ge(sn), y = I(), B = I({});
    function F(E) {
      const H = B.value[E];
      return H == null ? void 0 : H.getBoundingClientRect().width;
    }
    function A() {
      a.value ? k() : R();
    }
    function K(E, H) {
      if (qt(E, "dataTableFilter") || qt(E, "dataTableResizable") || !ta(H)) return;
      const L = h.value.find((te) => te.columnKey === H.key) || null, V = QC(H, L);
      w(V);
    }
    const M = /* @__PURE__ */ new Map();
    function n(E) {
      M.set(E.key, F(E.key));
    }
    function D(E, H) {
      const L = M.get(E.key);
      if (L === void 0)
        return;
      const V = L + H, te = YC(V, E.minWidth, E.maxWidth);
      g(V, te, E, F), C(E, te);
    }
    return {
      cellElsRef: B,
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
      mergedTableLayout: x,
      headerCheckboxDisabled: v,
      headerHeight: b,
      virtualScrollHeader: m,
      virtualListRef: y,
      handleCheckboxUpdateChecked: A,
      handleColHeaderClick: K,
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
      componentId: h,
      discrete: p,
      mergedTableLayout: x,
      headerCheckboxDisabled: v,
      mergedSortState: m,
      virtualScrollHeader: b,
      handleColHeaderClick: g,
      handleCheckboxUpdateChecked: C,
      handleColumnResizeStart: S,
      handleColumnResize: w
    } = this, k = (F, A, K) => F.map(({
      column: M,
      colIndex: n,
      colSpan: D,
      rowSpan: E,
      isLast: H
    }) => {
      var L, V;
      const te = rn(M), {
        ellipsis: X
      } = M, U = () => M.type === "selection" ? M.multiple !== !1 ? f(_e, null, f(bl, {
        key: i,
        privateInsideTable: !0,
        checked: a,
        indeterminate: l,
        disabled: v,
        onUpdateChecked: C
      }), c ? f(Iy, {
        clsPrefix: t
      }) : null) : null : f(_e, null, f("div", {
        class: `${t}-data-table-th__title-wrapper`
      }, f("div", {
        class: `${t}-data-table-th__title`
      }, X === !0 || X && !X.tooltip ? f("div", {
        class: `${t}-data-table-th__ellipsis`
      }, na(M)) : X && typeof X == "object" ? f(Ci, Object.assign({}, X, {
        theme: u.peers.Ellipsis,
        themeOverrides: u.peerOverrides.Ellipsis
      }), {
        default: () => na(M)
      }) : na(M)), ta(M) ? f(yy, {
        column: M
      }) : null), rd(M) ? f(by, {
        column: M,
        options: M.filterOptions
      }) : null, dc(M) ? f(xy, {
        onResizeStart: () => {
          S(M);
        },
        onResize: (ie) => {
          w(M, ie);
        }
      }) : null), j = te in r, q = te in o, Y = A && !M.fixed ? "div" : "th";
      return f(Y, {
        ref: (ie) => e[te] = ie,
        key: te,
        style: [A && !M.fixed ? {
          position: "absolute",
          left: xt(A(n)),
          top: 0,
          bottom: 0
        } : {
          left: xt((L = r[te]) === null || L === void 0 ? void 0 : L.start),
          right: xt((V = o[te]) === null || V === void 0 ? void 0 : V.start)
        }, {
          width: xt(M.width),
          textAlign: M.titleAlign || M.align,
          height: K
        }],
        colspan: D,
        rowspan: E,
        "data-col-key": te,
        class: [`${t}-data-table-th`, (j || q) && `${t}-data-table-th--fixed-${j ? "left" : "right"}`, {
          [`${t}-data-table-th--sorting`]: uc(M, m),
          [`${t}-data-table-th--filterable`]: rd(M),
          [`${t}-data-table-th--sortable`]: ta(M),
          [`${t}-data-table-th--selection`]: M.type === "selection",
          [`${t}-data-table-th--last`]: H
        }, M.className],
        onClick: M.type !== "selection" && M.type !== "expand" && !("children" in M) ? (ie) => {
          g(ie, M);
        } : void 0
      }, U());
    });
    if (b) {
      const {
        headerHeight: F
      } = this;
      let A = 0, K = 0;
      return d.forEach((M) => {
        M.column.fixed === "left" ? A++ : M.column.fixed === "right" && K++;
      }), f(Ya, {
        ref: "virtualListRef",
        class: `${t}-data-table-base-table-header`,
        style: {
          height: xt(F)
        },
        onScroll: this.handleTableHeaderScroll,
        columns: d,
        itemSize: F,
        showScrollbar: !1,
        items: [{}],
        itemResizable: !1,
        visibleItemsTag: Ly,
        visibleItemsProps: {
          clsPrefix: t,
          id: h,
          cols: d,
          width: Ct(this.scrollX)
        },
        renderItemWithCols: ({
          startColIndex: M,
          endColIndex: n,
          getLeft: D
        }) => {
          const E = d.map((L, V) => ({
            column: L.column,
            isLast: V === d.length - 1,
            colIndex: L.index,
            colSpan: 1,
            rowSpan: 1
          })).filter(({
            column: L
          }, V) => !!(M <= V && V <= n || L.fixed)), H = k(E, D, xt(F));
          return H.splice(A, 0, f("th", {
            colspan: d.length - A - K,
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
          renderedItemWithCols: M
        }) => M
      });
    }
    const R = f("thead", {
      class: `${t}-data-table-thead`,
      "data-n-id": h
    }, s.map((F) => f("tr", {
      class: `${t}-data-table-tr`
    }, k(F, null, void 0))));
    if (!p)
      return R;
    const {
      handleTableHeaderScroll: y,
      scrollX: B
    } = this;
    return f("div", {
      class: `${t}-data-table-base-table-header`,
      onScroll: y
    }, f("table", {
      class: `${t}-data-table-table`,
      style: {
        minWidth: Ct(B),
        tableLayout: x
      }
    }, f("colgroup", null, d.map((F) => f("col", {
      key: F.key,
      style: F.style
    }))), R));
  }
});
function Ny(e, t) {
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
const Hy = ee({
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
}), jy = ee({
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
      rowClassNameRef: x,
      leftActiveFixedColKeyRef: v,
      leftActiveFixedChildrenColKeysRef: m,
      rightActiveFixedColKeyRef: b,
      rightActiveFixedChildrenColKeysRef: g,
      renderExpandRef: C,
      hoverKeyRef: S,
      summaryRef: w,
      mergedSortStateRef: k,
      virtualScrollRef: R,
      virtualScrollXRef: y,
      heightForRowRef: B,
      minRowHeightRef: F,
      componentId: A,
      mergedTableLayoutRef: K,
      childTriggerColIndexRef: M,
      indentRef: n,
      rowPropsRef: D,
      maxHeightRef: E,
      stripedRef: H,
      loadingRef: L,
      onLoadRef: V,
      loadingKeySetRef: te,
      expandableRef: X,
      stickyExpandedRowsRef: U,
      renderExpandIconRef: j,
      summaryPlacementRef: q,
      treeMateRef: Y,
      scrollbarPropsRef: ie,
      setHeaderScrollLeft: ae,
      doUpdateExpandedRowKeys: fe,
      handleTableBodyScroll: we,
      doCheck: G,
      doUncheck: ue,
      renderCell: Re
    } = ge(sn), be = ge(ln), Fe = I(null), Pe = I(null), lt = I(null), Qe = Ue(() => d.value.length === 0), ut = Ue(() => e.showHeader || !Qe.value), ct = Ue(() => e.showHeader || Qe.value);
    let xe = "";
    const Ce = $(() => new Set(o.value));
    function $e(ce) {
      var Be;
      return (Be = Y.value.getNode(ce)) === null || Be === void 0 ? void 0 : Be.rawNode;
    }
    function Ie(ce, Be, P) {
      const W = $e(ce.key);
      if (!W) {
        Rt("data-table", `fail to get row data with key ${ce.key}`);
        return;
      }
      if (P) {
        const J = d.value.findIndex((le) => le.key === xe);
        if (J !== -1) {
          const le = d.value.findIndex((Se) => Se.key === ce.key), de = Math.min(J, le), pe = Math.max(J, le), me = [];
          d.value.slice(de, pe + 1).forEach((Se) => {
            Se.disabled || me.push(Se.key);
          }), Be ? G(me, !1, W) : ue(me, W), xe = ce.key;
          return;
        }
      }
      Be ? G(ce.key, !1, W) : ue(ce.key, W), xe = ce.key;
    }
    function Je(ce) {
      const Be = $e(ce.key);
      if (!Be) {
        Rt("data-table", `fail to get row data with key ${ce.key}`);
        return;
      }
      G(ce.key, !0, Be);
    }
    function re() {
      if (!ut.value) {
        const {
          value: Be
        } = lt;
        return Be || null;
      }
      if (R.value)
        return st();
      const {
        value: ce
      } = Fe;
      return ce ? ce.containerRef : null;
    }
    function he(ce, Be) {
      var P;
      if (te.value.has(ce)) return;
      const {
        value: W
      } = o, J = W.indexOf(ce), le = Array.from(W);
      ~J ? (le.splice(J, 1), fe(le)) : Be && !Be.isLeaf && !Be.shallowLoaded ? (te.value.add(ce), (P = V.value) === null || P === void 0 || P.call(V, Be.rawNode).then(() => {
        const {
          value: de
        } = o, pe = Array.from(de);
        ~pe.indexOf(ce) || pe.push(ce), fe(pe);
      }).finally(() => {
        te.value.delete(ce);
      })) : (le.push(ce), fe(le));
    }
    function Te() {
      S.value = null;
    }
    function st() {
      const {
        value: ce
      } = Pe;
      return (ce == null ? void 0 : ce.listElRef) || null;
    }
    function zt() {
      const {
        value: ce
      } = Pe;
      return (ce == null ? void 0 : ce.itemsElRef) || null;
    }
    function $t(ce) {
      var Be;
      we(ce), (Be = Fe.value) === null || Be === void 0 || Be.sync();
    }
    function gt(ce) {
      var Be;
      const {
        onResize: P
      } = e;
      P && P(ce), (Be = Fe.value) === null || Be === void 0 || Be.sync();
    }
    const nt = {
      getScrollContainer: re,
      scrollTo(ce, Be) {
        var P, W;
        R.value ? (P = Pe.value) === null || P === void 0 || P.scrollTo(ce, Be) : (W = Fe.value) === null || W === void 0 || W.scrollTo(ce, Be);
      }
    }, yt = O([({
      props: ce
    }) => {
      const Be = (W) => W === null ? null : O(`[data-n-id="${ce.componentId}"] [data-col-key="${W}"]::after`, {
        boxShadow: "var(--n-box-shadow-after)"
      }), P = (W) => W === null ? null : O(`[data-n-id="${ce.componentId}"] [data-col-key="${W}"]::before`, {
        boxShadow: "var(--n-box-shadow-before)"
      });
      return O([Be(ce.leftActiveFixedColKey), P(ce.rightActiveFixedColKey), ce.leftActiveFixedChildrenColKeys.map((W) => Be(W)), ce.rightActiveFixedChildrenColKeys.map((W) => P(W))]);
    }]);
    let et = !1;
    return tt(() => {
      const {
        value: ce
      } = v, {
        value: Be
      } = m, {
        value: P
      } = b, {
        value: W
      } = g;
      if (!et && ce === null && P === null)
        return;
      const J = {
        leftActiveFixedColKey: ce,
        leftActiveFixedChildrenColKeys: Be,
        rightActiveFixedColKey: P,
        rightActiveFixedChildrenColKeys: W,
        componentId: A
      };
      yt.mount({
        id: `n-${A}`,
        force: !0,
        props: J,
        anchorMetaName: zr,
        parent: be == null ? void 0 : be.styleMountTarget
      }), et = !0;
    }), yd(() => {
      yt.unmount({
        id: `n-${A}`,
        parent: be == null ? void 0 : be.styleMountTarget
      });
    }), Object.assign({
      bodyWidth: r,
      summaryPlacement: q,
      dataTableSlots: t,
      componentId: A,
      scrollbarInstRef: Fe,
      virtualListRef: Pe,
      emptyElRef: lt,
      summary: w,
      mergedClsPrefix: i,
      mergedTheme: a,
      scrollX: l,
      cols: s,
      loading: L,
      bodyShowHeaderOnly: ct,
      shouldDisplaySomeTablePart: ut,
      empty: Qe,
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
      fixedColumnRightMap: h,
      currentPage: p,
      rowClassName: x,
      renderExpand: C,
      mergedExpandedRowKeySet: Ce,
      hoverKey: S,
      mergedSortState: k,
      virtualScroll: R,
      virtualScrollX: y,
      heightForRow: B,
      minRowHeight: F,
      mergedTableLayout: K,
      childTriggerColIndex: M,
      indent: n,
      rowProps: D,
      maxHeight: E,
      loadingKeySet: te,
      expandable: X,
      stickyExpandedRows: U,
      renderExpandIcon: j,
      scrollbarProps: ie,
      setHeaderScrollLeft: ae,
      handleVirtualListScroll: $t,
      handleVirtualListResize: gt,
      handleMouseleaveTable: Te,
      virtualListContainer: st,
      virtualListContent: zt,
      handleTableBodyScroll: we,
      handleCheckboxUpdateChecked: Ie,
      handleRadioUpdateChecked: Je,
      handleUpdateExpanded: he,
      renderCell: Re
    }, nt);
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
    } = this, c = t !== void 0 || i !== void 0 || l, h = !c && a === "auto", p = t !== void 0 || h, x = {
      minWidth: Ct(t) || "100%"
    };
    t && (x.width = "100%");
    const v = f(cr, Object.assign({}, this.scrollbarProps, {
      ref: "scrollbarInstRef",
      scrollable: c || h,
      class: `${r}-data-table-base-table-body`,
      style: this.empty ? void 0 : this.bodyStyle,
      theme: e.peers.Scrollbar,
      themeOverrides: e.peerOverrides.Scrollbar,
      contentStyle: x,
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
        const m = {}, b = {}, {
          cols: g,
          paginatedDataAndInfo: C,
          mergedTheme: S,
          fixedColumnLeftMap: w,
          fixedColumnRightMap: k,
          currentPage: R,
          rowClassName: y,
          mergedSortState: B,
          mergedExpandedRowKeySet: F,
          stickyExpandedRows: A,
          componentId: K,
          childTriggerColIndex: M,
          expandable: n,
          rowProps: D,
          handleMouseleaveTable: E,
          renderExpand: H,
          summary: L,
          handleCheckboxUpdateChecked: V,
          handleRadioUpdateChecked: te,
          handleUpdateExpanded: X,
          heightForRow: U,
          minRowHeight: j,
          virtualScrollX: q
        } = this, {
          length: Y
        } = g;
        let ie;
        const {
          data: ae,
          hasChildren: fe
        } = C, we = fe ? Ny(ae, F) : ae;
        if (L) {
          const xe = L(this.rawPaginatedData);
          if (Array.isArray(xe)) {
            const Ce = xe.map(($e, Ie) => ({
              isSummaryRow: !0,
              key: `__n_summary__${Ie}`,
              tmNode: {
                rawNode: $e,
                disabled: !0
              },
              index: -1
            }));
            ie = this.summaryPlacement === "top" ? [...Ce, ...we] : [...we, ...Ce];
          } else {
            const Ce = {
              isSummaryRow: !0,
              key: "__n_summary__",
              tmNode: {
                rawNode: xe,
                disabled: !0
              },
              index: -1
            };
            ie = this.summaryPlacement === "top" ? [Ce, ...we] : [...we, Ce];
          }
        } else
          ie = we;
        const G = fe ? {
          width: xt(this.indent)
        } : void 0, ue = [];
        ie.forEach((xe) => {
          H && F.has(xe.key) && (!n || n(xe.tmNode.rawNode)) ? ue.push(xe, {
            isExpandedRow: !0,
            key: `${xe.key}-expand`,
            // solve key repeat of the expanded row
            tmNode: xe.tmNode,
            index: xe.index
          }) : ue.push(xe);
        });
        const {
          length: Re
        } = ue, be = {};
        ae.forEach(({
          tmNode: xe
        }, Ce) => {
          be[Ce] = xe.key;
        });
        const Fe = A ? this.bodyWidth : null, Pe = Fe === null ? void 0 : `${Fe}px`, lt = this.virtualScrollX ? "div" : "td";
        let Qe = 0, ut = 0;
        q && g.forEach((xe) => {
          xe.column.fixed === "left" ? Qe++ : xe.column.fixed === "right" && ut++;
        });
        const ct = ({
          // Normal
          rowInfo: xe,
          displayedRowIndex: Ce,
          isVirtual: $e,
          // Virtual X
          isVirtualX: Ie,
          startColIndex: Je,
          endColIndex: re,
          getLeft: he
        }) => {
          const {
            index: Te
          } = xe;
          if ("isExpandedRow" in xe) {
            const {
              tmNode: {
                key: le,
                rawNode: de
              }
            } = xe;
            return f("tr", {
              class: `${r}-data-table-tr ${r}-data-table-tr--expanded`,
              key: `${le}__expand`
            }, f("td", {
              class: [`${r}-data-table-td`, `${r}-data-table-td--last-col`, Ce + 1 === Re && `${r}-data-table-td--last-row`],
              colspan: Y
            }, A ? f("div", {
              class: `${r}-data-table-expand`,
              style: {
                width: Pe
              }
            }, H(de, Te)) : H(de, Te)));
          }
          const st = "isSummaryRow" in xe, zt = !st && xe.striped, {
            tmNode: $t,
            key: gt
          } = xe, {
            rawNode: nt
          } = $t, yt = F.has(gt), et = D ? D(nt, Te) : void 0, ce = typeof y == "string" ? y : JC(nt, Te, y), Be = Ie ? g.filter((le, de) => !!(Je <= de && de <= re || le.column.fixed)) : g, P = Ie ? xt((U == null ? void 0 : U(nt, Te)) || j) : void 0, W = Be.map((le) => {
            var de, pe, me, Se, Le;
            const rt = le.index;
            if (Ce in m) {
              const ot = m[Ce], ft = ot.indexOf(rt);
              if (~ft)
                return ot.splice(ft, 1), null;
            }
            const {
              column: Ve
            } = le, Dt = rn(le), {
              rowSpan: It,
              colSpan: Lt
            } = Ve, _t = st ? ((de = xe.tmNode.rawNode[Dt]) === null || de === void 0 ? void 0 : de.colSpan) || 1 : Lt ? Lt(nt, Te) : 1, Wt = st ? ((pe = xe.tmNode.rawNode[Dt]) === null || pe === void 0 ? void 0 : pe.rowSpan) || 1 : It ? It(nt, Te) : 1, Jt = rt + _t === Y, Vt = Ce + Wt === Re, _ = Wt > 1;
            if (_ && (b[Ce] = {
              [rt]: []
            }), _t > 1 || _)
              for (let ot = Ce; ot < Ce + Wt; ++ot) {
                _ && b[Ce][rt].push(be[ot]);
                for (let ft = rt; ft < rt + _t; ++ft)
                  ot === Ce && ft === rt || (ot in m ? m[ot].push(ft) : m[ot] = [ft]);
              }
            const Q = _ ? this.hoverKey : null, {
              cellProps: ye
            } = Ve, Oe = ye == null ? void 0 : ye(nt, Te), qe = {
              "--indent-offset": ""
            }, Ne = Ve.fixed ? "td" : lt;
            return f(Ne, Object.assign({}, Oe, {
              key: Dt,
              style: [{
                textAlign: Ve.align || void 0,
                width: xt(Ve.width)
              }, Ie && {
                height: P
              }, Ie && !Ve.fixed ? {
                position: "absolute",
                left: xt(he(rt)),
                top: 0,
                bottom: 0
              } : {
                left: xt((me = w[Dt]) === null || me === void 0 ? void 0 : me.start),
                right: xt((Se = k[Dt]) === null || Se === void 0 ? void 0 : Se.start)
              }, qe, (Oe == null ? void 0 : Oe.style) || ""],
              colspan: _t,
              rowspan: $e ? void 0 : Wt,
              "data-col-key": Dt,
              class: [`${r}-data-table-td`, Ve.className, Oe == null ? void 0 : Oe.class, st && `${r}-data-table-td--summary`, Q !== null && b[Ce][rt].includes(Q) && `${r}-data-table-td--hover`, uc(Ve, B) && `${r}-data-table-td--sorting`, Ve.fixed && `${r}-data-table-td--fixed-${Ve.fixed}`, Ve.align && `${r}-data-table-td--${Ve.align}-align`, Ve.type === "selection" && `${r}-data-table-td--selection`, Ve.type === "expand" && `${r}-data-table-td--expand`, Jt && `${r}-data-table-td--last-col`, Vt && `${r}-data-table-td--last-row`]
            }), fe && rt === M ? [sh(qe["--indent-offset"] = st ? 0 : xe.tmNode.level, f("div", {
              class: `${r}-data-table-indent`,
              style: G
            })), st || xe.tmNode.isLeaf ? f("div", {
              class: `${r}-data-table-expand-placeholder`
            }) : f(id, {
              class: `${r}-data-table-expand-trigger`,
              clsPrefix: r,
              expanded: yt,
              rowData: nt,
              renderExpandIcon: this.renderExpandIcon,
              loading: s.has(xe.key),
              onClick: () => {
                X(gt, xe.tmNode);
              }
            })] : null, Ve.type === "selection" ? st ? null : Ve.multiple === !1 ? f(cy, {
              key: R,
              rowKey: gt,
              disabled: xe.tmNode.disabled,
              onUpdateChecked: () => {
                te(xe.tmNode);
              }
            }) : f(ny, {
              key: R,
              rowKey: gt,
              disabled: xe.tmNode.disabled,
              onUpdateChecked: (ot, ft) => {
                V(xe.tmNode, ot, ft.shiftKey);
              }
            }) : Ve.type === "expand" ? st ? null : !Ve.expandable || !((Le = Ve.expandable) === null || Le === void 0) && Le.call(Ve, nt) ? f(id, {
              clsPrefix: r,
              rowData: nt,
              expanded: yt,
              renderExpandIcon: this.renderExpandIcon,
              onClick: () => {
                X(gt, null);
              }
            }) : null : f(vy, {
              clsPrefix: r,
              index: Te,
              row: nt,
              column: Ve,
              isSummary: st,
              mergedTheme: S,
              renderCell: this.renderCell
            }));
          });
          return Ie && Qe && ut && W.splice(Qe, 0, f("td", {
            colspan: g.length - Qe - ut,
            style: {
              pointerEvents: "none",
              visibility: "hidden",
              height: 0
            }
          })), f("tr", Object.assign({}, et, {
            onMouseenter: (le) => {
              var de;
              this.hoverKey = gt, (de = et == null ? void 0 : et.onMouseenter) === null || de === void 0 || de.call(et, le);
            },
            key: gt,
            class: [`${r}-data-table-tr`, st && `${r}-data-table-tr--summary`, zt && `${r}-data-table-tr--striped`, yt && `${r}-data-table-tr--expanded`, ce, et == null ? void 0 : et.class],
            style: [et == null ? void 0 : et.style, Ie && {
              height: P
            }]
          }), W);
        };
        return o ? f(Ya, {
          ref: "virtualListRef",
          items: ue,
          itemSize: this.minRowHeight,
          visibleItemsTag: Hy,
          visibleItemsProps: {
            clsPrefix: r,
            id: K,
            cols: g,
            onMouseleave: E
          },
          showScrollbar: !1,
          onResize: this.handleVirtualListResize,
          onScroll: this.handleVirtualListScroll,
          itemsStyle: x,
          itemResizable: !q,
          columns: g,
          renderItemWithCols: q ? ({
            itemIndex: xe,
            item: Ce,
            startColIndex: $e,
            endColIndex: Ie,
            getLeft: Je
          }) => ct({
            displayedRowIndex: xe,
            isVirtual: !0,
            isVirtualX: !0,
            rowInfo: Ce,
            startColIndex: $e,
            endColIndex: Ie,
            getLeft: Je
          }) : void 0
        }, {
          default: ({
            item: xe,
            index: Ce,
            renderedItemWithCols: $e
          }) => $e || ct({
            rowInfo: xe,
            displayedRowIndex: Ce,
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
        }, f("colgroup", null, g.map((xe) => f("col", {
          key: xe.key,
          style: xe.style
        }))), this.showHeader ? f(Sc, {
          discrete: !1
        }) : null, this.empty ? null : f("tbody", {
          "data-n-id": K,
          class: `${r}-data-table-tbody`
        }, ue.map((xe, Ce) => ct({
          rowInfo: xe,
          displayedRowIndex: Ce,
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
      const m = () => f("div", {
        class: [`${r}-data-table-empty`, this.loading && `${r}-data-table-empty--hide`],
        style: this.bodyStyle,
        ref: "emptyElRef"
      }, Zt(this.dataTableSlots.empty, () => [f($r, {
        theme: this.mergedTheme.peers.Empty,
        themeOverrides: this.mergedTheme.peerOverrides.Empty
      })]));
      return this.shouldDisplaySomeTablePart ? f(_e, null, v, m()) : f(Pr, {
        onResize: this.onResize
      }, {
        default: m
      });
    }
    return v;
  }
}), _y = ee({
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
    } = ge(sn), u = I(null), c = I(null), h = I(null), p = I(!(r.value.length || t.value.length)), x = $(() => ({
      maxHeight: Ct(i.value),
      minHeight: Ct(a.value)
    }));
    function v(C) {
      o.value = C.contentRect.width, d(), p.value || (p.value = !0);
    }
    function m() {
      var C;
      const {
        value: S
      } = u;
      return S ? s.value ? ((C = S.virtualListRef) === null || C === void 0 ? void 0 : C.listElRef) || null : S.$el : null;
    }
    function b() {
      const {
        value: C
      } = c;
      return C ? C.getScrollContainer() : null;
    }
    const g = {
      getBodyElement: b,
      getHeaderElement: m,
      scrollTo(C, S) {
        var w;
        (w = c.value) === null || w === void 0 || w.scrollTo(C, S);
      }
    };
    return tt(() => {
      const {
        value: C
      } = h;
      if (!C) return;
      const S = `${e.value}-data-table-base-table--transition-disabled`;
      p.value ? setTimeout(() => {
        C.classList.remove(S);
      }, 0) : C.classList.add(S);
    }), Object.assign({
      maxHeight: i,
      mergedClsPrefix: e,
      selfElRef: h,
      headerInstRef: u,
      bodyInstRef: c,
      bodyStyle: x,
      flexHeight: l,
      handleBodyResize: v
    }, g);
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
    }, o ? null : f(Sc, {
      ref: "headerInstRef"
    }), f(jy, {
      ref: "bodyInstRef",
      bodyStyle: this.bodyStyle,
      showHeader: o,
      flexHeight: r,
      onResize: this.handleBodyResize
    }));
  }
}), ld = Vy(), Wy = O([z("data-table", `
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
 `, [z("data-table-wrapper", `
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 `), N("flex-height", [O(">", [z("data-table-wrapper", [O(">", [z("data-table-base-table", `
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 `, [O(">", [z("data-table-base-table-body", "flex-basis: 0;", [
  // last-child means there is no empty icon
  // body is a scrollbar, we need to override height 100%
  O("&:last-child", "flex-grow: 1;")
])])])])])])]), O(">", [z("data-table-loading-wrapper", `
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
 `, [ko({
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
 `, [N("expanded", [z("icon", "transform: rotate(90deg);", [Xt({
  originalTransform: "rotate(90deg)"
})]), z("base-icon", "transform: rotate(90deg);", [Xt({
  originalTransform: "rotate(90deg)"
})])]), z("base-loading", `
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [Xt()]), z("icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [Xt()]), z("base-icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [Xt()])]), z("data-table-thead", `
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
 `), N("striped", "background-color: var(--n-merged-td-color-striped);", [z("data-table-td", "background-color: var(--n-merged-td-color-striped);")]), Xe("summary", [O("&:hover", "background-color: var(--n-merged-td-color-hover);", [O(">", [z("data-table-td", "background-color: var(--n-merged-td-color-hover);")])])])]), z("data-table-th", `
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
 `)]), ld, N("selection", `
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
 `), O("&:hover", `
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
 `, [O("&::after", `
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
 `), N("active", [O("&::after", ` 
 background-color: var(--n-th-icon-color-active);
 `)]), O("&:hover::after", `
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
 `, [O("&:hover", `
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
  O("&::after", `
 bottom: 0 !important;
 `),
  O("&::before", `
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
 `), ld]), z("data-table-empty", `
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
 `, [O("&::after, &::before", `
 bottom: 0 !important;
 `)])]), Xe("single-line", [z("data-table-th", `
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
 `)]), z("data-table-base-table", [N("transition-disabled", [z("data-table-th", [O("&::after, &::before", "transition: none;")]), z("data-table-td", [O("&::after, &::before", "transition: none;")])])]), N("bottom-bordered", [z("data-table-td", [N("last-row", `
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
 `, [O("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
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
 `, [z("button", [O("&:not(:last-child)", `
 margin: var(--n-action-button-margin);
 `), O("&:last-child", `
 margin-right: 0;
 `)])]), z("divider", `
 margin: 0 !important;
 `)]), ui(z("data-table", `
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 --n-merged-th-color-hover: var(--n-th-color-hover-modal);
 --n-merged-td-color-hover: var(--n-td-color-hover-modal);
 --n-merged-th-color-sorting: var(--n-th-color-hover-modal);
 --n-merged-td-color-sorting: var(--n-td-color-hover-modal);
 --n-merged-td-color-striped: var(--n-td-color-striped-modal);
 `)), Ma(z("data-table", `
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 --n-merged-th-color-hover: var(--n-th-color-hover-popover);
 --n-merged-td-color-hover: var(--n-td-color-hover-popover);
 --n-merged-th-color-sorting: var(--n-th-color-hover-popover);
 --n-merged-td-color-sorting: var(--n-td-color-hover-popover);
 --n-merged-td-color-striped: var(--n-td-color-striped-popover);
 `))]);
function Vy() {
  return [N("fixed-left", `
 left: 0;
 position: sticky;
 z-index: 2;
 `, [O("&::after", `
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
 `, [O("&::before", `
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
function Ky(e, t) {
  const {
    paginatedDataRef: r,
    treeMateRef: o,
    selectionColumnRef: i
  } = t, a = I(e.defaultCheckedRowKeys), l = $(() => {
    var k;
    const {
      checkedRowKeys: R
    } = e, y = R === void 0 ? a.value : R;
    return ((k = i.value) === null || k === void 0 ? void 0 : k.multiple) === !1 ? {
      checkedKeys: y.slice(0, 1),
      indeterminateKeys: []
    } : o.value.getCheckedKeys(y, {
      cascade: e.cascade,
      allowNotLoaded: e.allowCheckingNotLoaded
    });
  }), s = $(() => l.value.checkedKeys), d = $(() => l.value.indeterminateKeys), u = $(() => new Set(s.value)), c = $(() => new Set(d.value)), h = $(() => {
    const {
      value: k
    } = u;
    return r.value.reduce((R, y) => {
      const {
        key: B,
        disabled: F
      } = y;
      return R + (!F && k.has(B) ? 1 : 0);
    }, 0);
  }), p = $(() => r.value.filter((k) => k.disabled).length), x = $(() => {
    const {
      length: k
    } = r.value, {
      value: R
    } = c;
    return h.value > 0 && h.value < k - p.value || r.value.some((y) => R.has(y.key));
  }), v = $(() => {
    const {
      length: k
    } = r.value;
    return h.value !== 0 && h.value === k - p.value;
  }), m = $(() => r.value.length === 0);
  function b(k, R, y) {
    const {
      "onUpdate:checkedRowKeys": B,
      onUpdateCheckedRowKeys: F,
      onCheckedRowKeysChange: A
    } = e, K = [], {
      value: {
        getNode: M
      }
    } = o;
    k.forEach((n) => {
      var D;
      const E = (D = M(n)) === null || D === void 0 ? void 0 : D.rawNode;
      K.push(E);
    }), B && ne(B, k, K, {
      row: R,
      action: y
    }), F && ne(F, k, K, {
      row: R,
      action: y
    }), A && ne(A, k, K, {
      row: R,
      action: y
    }), a.value = k;
  }
  function g(k, R = !1, y) {
    if (!e.loading) {
      if (R) {
        b(Array.isArray(k) ? k.slice(0, 1) : [k], y, "check");
        return;
      }
      b(o.value.check(k, s.value, {
        cascade: e.cascade,
        allowNotLoaded: e.allowCheckingNotLoaded
      }).checkedKeys, y, "check");
    }
  }
  function C(k, R) {
    e.loading || b(o.value.uncheck(k, s.value, {
      cascade: e.cascade,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, R, "uncheck");
  }
  function S(k = !1) {
    const {
      value: R
    } = i;
    if (!R || e.loading) return;
    const y = [];
    (k ? o.value.treeNodes : r.value).forEach((B) => {
      B.disabled || y.push(B.key);
    }), b(o.value.check(y, s.value, {
      cascade: !0,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, void 0, "checkAll");
  }
  function w(k = !1) {
    const {
      value: R
    } = i;
    if (!R || e.loading) return;
    const y = [];
    (k ? o.value.treeNodes : r.value).forEach((B) => {
      B.disabled || y.push(B.key);
    }), b(o.value.uncheck(y, s.value, {
      cascade: !0,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, void 0, "uncheckAll");
  }
  return {
    mergedCheckedRowKeySetRef: u,
    mergedCheckedRowKeysRef: s,
    mergedInderminateRowKeySetRef: c,
    someRowsCheckedRef: x,
    allRowsCheckedRef: v,
    headerCheckboxDisabledRef: m,
    doUpdateCheckedRowKeys: b,
    doCheckAll: S,
    doUncheckAll: w,
    doCheck: g,
    doUncheck: C
  };
}
function Uy(e, t) {
  const r = Ue(() => {
    for (const u of e.columns)
      if (u.type === "expand")
        return process.env.NODE_ENV !== "production" && !u.renderExpand && Rt("data-table", "column with type `expand` has no `renderExpand` prop."), u.renderExpand;
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
      var h;
      !((h = o.value) === null || h === void 0) && h.call(o, c.rawNode) && u.push(c.key);
    }), u;
  })() : t.value.getNonLeafKeys() : e.defaultExpandedRowKeys), a = oe(e, "expandedRowKeys"), l = oe(e, "stickyExpandedRows"), s = Mt(a, i);
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
function qy(e, t) {
  const r = [], o = [], i = [], a = /* @__PURE__ */ new WeakMap();
  let l = -1, s = 0, d = !1, u = 0;
  function c(p, x) {
    x > l && (r[x] = [], l = x), p.forEach((v) => {
      if ("children" in v)
        c(v.children, x + 1);
      else {
        const m = "key" in v ? v.key : void 0;
        o.push({
          key: rn(v),
          style: ZC(v, m !== void 0 ? Ct(t(m)) : void 0),
          column: v,
          index: u++,
          // The width property is only applied to horizontally virtual scroll table
          width: v.width === void 0 ? 128 : Number(v.width)
        }), s += 1, d || (d = !!v.ellipsis), i.push(v);
      }
    });
  }
  c(e, 0), u = 0;
  function h(p, x) {
    let v = 0;
    p.forEach((m) => {
      var b;
      if ("children" in m) {
        const g = u, C = {
          column: m,
          colIndex: u,
          colSpan: 0,
          rowSpan: 1,
          isLast: !1
        };
        h(m.children, x + 1), m.children.forEach((S) => {
          var w, k;
          C.colSpan += (k = (w = a.get(S)) === null || w === void 0 ? void 0 : w.colSpan) !== null && k !== void 0 ? k : 0;
        }), g + C.colSpan === s && (C.isLast = !0), a.set(m, C), r[x].push(C);
      } else {
        if (u < v) {
          u += 1;
          return;
        }
        let g = 1;
        "titleColSpan" in m && (g = (b = m.titleColSpan) !== null && b !== void 0 ? b : 1), g > 1 && (v = u + g);
        const C = u + g === s, S = {
          column: m,
          colSpan: g,
          colIndex: u,
          rowSpan: l - x + 1,
          isLast: C
        };
        a.set(m, S), r[x].push(S), u += 1;
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
function Gy(e, t) {
  const r = $(() => qy(e.columns, t));
  return {
    rowsRef: $(() => r.value.rows),
    colsRef: $(() => r.value.cols),
    hasEllipsisRef: $(() => r.value.hasEllipsis),
    dataRelatedColsRef: $(() => r.value.dataRelatedCols)
  };
}
function Xy() {
  const e = I({});
  function t(i) {
    return e.value[i];
  }
  function r(i, a) {
    dc(i) && "key" in i && (e.value[i.key] = a);
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
function Yy(e, {
  mainTableInstRef: t,
  mergedCurrentPageRef: r,
  bodyWidthRef: o
}) {
  let i = 0;
  const a = I(), l = I(null), s = I([]), d = I(null), u = I([]), c = $(() => Ct(e.scrollX)), h = $(() => e.columns.filter((F) => F.fixed === "left")), p = $(() => e.columns.filter((F) => F.fixed === "right")), x = $(() => {
    const F = {};
    let A = 0;
    function K(M) {
      M.forEach((n) => {
        const D = {
          start: A,
          end: 0
        };
        F[rn(n)] = D, "children" in n ? (K(n.children), D.end = A) : (A += td(n) || 0, D.end = A);
      });
    }
    return K(h.value), F;
  }), v = $(() => {
    const F = {};
    let A = 0;
    function K(M) {
      for (let n = M.length - 1; n >= 0; --n) {
        const D = M[n], E = {
          start: A,
          end: 0
        };
        F[rn(D)] = E, "children" in D ? (K(D.children), E.end = A) : (A += td(D) || 0, E.end = A);
      }
    }
    return K(p.value), F;
  });
  function m() {
    var F, A;
    const {
      value: K
    } = h;
    let M = 0;
    const {
      value: n
    } = x;
    let D = null;
    for (let E = 0; E < K.length; ++E) {
      const H = rn(K[E]);
      if (i > (((F = n[H]) === null || F === void 0 ? void 0 : F.start) || 0) - M)
        D = H, M = ((A = n[H]) === null || A === void 0 ? void 0 : A.end) || 0;
      else
        break;
    }
    l.value = D;
  }
  function b() {
    s.value = [];
    let F = e.columns.find((A) => rn(A) === l.value);
    for (; F && "children" in F; ) {
      const A = F.children.length;
      if (A === 0) break;
      const K = F.children[A - 1];
      s.value.push(rn(K)), F = K;
    }
  }
  function g() {
    var F, A;
    const {
      value: K
    } = p, M = Number(e.scrollX), {
      value: n
    } = o;
    if (n === null) return;
    let D = 0, E = null;
    const {
      value: H
    } = v;
    for (let L = K.length - 1; L >= 0; --L) {
      const V = rn(K[L]);
      if (Math.round(i + (((F = H[V]) === null || F === void 0 ? void 0 : F.start) || 0) + n - D) < M)
        E = V, D = ((A = H[V]) === null || A === void 0 ? void 0 : A.end) || 0;
      else
        break;
    }
    d.value = E;
  }
  function C() {
    u.value = [];
    let F = e.columns.find((A) => rn(A) === d.value);
    for (; F && "children" in F && F.children.length; ) {
      const A = F.children[0];
      u.value.push(rn(A)), F = A;
    }
  }
  function S() {
    const F = t.value ? t.value.getHeaderElement() : null, A = t.value ? t.value.getBodyElement() : null;
    return {
      header: F,
      body: A
    };
  }
  function w() {
    const {
      body: F
    } = S();
    F && (F.scrollTop = 0);
  }
  function k() {
    a.value !== "body" ? Xo(y) : a.value = void 0;
  }
  function R(F) {
    var A;
    (A = e.onScroll) === null || A === void 0 || A.call(e, F), a.value !== "head" ? Xo(y) : a.value = void 0;
  }
  function y() {
    const {
      header: F,
      body: A
    } = S();
    if (!A) return;
    const {
      value: K
    } = o;
    if (K !== null) {
      if (e.maxHeight || e.flexHeight) {
        if (!F) return;
        const M = i - F.scrollLeft;
        a.value = M !== 0 ? "head" : "body", a.value === "head" ? (i = F.scrollLeft, A.scrollLeft = i) : (i = A.scrollLeft, F.scrollLeft = i);
      } else
        i = A.scrollLeft;
      m(), b(), g(), C();
    }
  }
  function B(F) {
    const {
      header: A
    } = S();
    A && (A.scrollLeft = F, y());
  }
  return He(r, () => {
    w();
  }), {
    styleScrollXRef: c,
    fixedColumnLeftMapRef: x,
    fixedColumnRightMapRef: v,
    leftFixedColumnsRef: h,
    rightFixedColumnsRef: p,
    leftActiveFixedColKeyRef: l,
    leftActiveFixedChildrenColKeysRef: s,
    rightActiveFixedColKeyRef: d,
    rightActiveFixedChildrenColKeysRef: u,
    syncScrollState: y,
    handleTableBodyScroll: R,
    handleTableHeaderScroll: k,
    setHeaderScrollLeft: B
  };
}
function Ho(e) {
  return typeof e == "object" && typeof e.multiple == "number" ? e.multiple : !1;
}
function Zy(e, t) {
  return t && (e === void 0 || e === "default" || typeof e == "object" && e.compare === "default") ? Jy(t) : typeof e == "function" ? e : e && typeof e == "object" && e.compare && e.compare !== "default" ? e.compare : !1;
}
function Jy(e) {
  return (t, r) => {
    const o = t[e], i = r[e];
    return o == null ? i == null ? 0 : -1 : i == null ? 1 : typeof o == "number" && typeof i == "number" ? o - i : typeof o == "string" && typeof i == "string" ? o.localeCompare(i) : 0;
  };
}
function Qy(e, {
  dataRelatedColsRef: t,
  filteredDataRef: r
}) {
  const o = [];
  t.value.forEach((x) => {
    var v;
    x.sorter !== void 0 && p(o, {
      columnKey: x.key,
      sorter: x.sorter,
      order: (v = x.defaultSortOrder) !== null && v !== void 0 ? v : !1
    });
  });
  const i = I(o), a = $(() => {
    const x = t.value.filter((b) => b.type !== "selection" && b.sorter !== void 0 && (b.sortOrder === "ascend" || b.sortOrder === "descend" || b.sortOrder === !1)), v = x.filter((b) => b.sortOrder !== !1);
    if (v.length)
      return v.map((b) => ({
        columnKey: b.key,
        // column to sort has controlled sorter
        // sorter && sort order won't be undefined
        order: b.sortOrder,
        sorter: b.sorter
      }));
    if (x.length) return [];
    const {
      value: m
    } = i;
    return Array.isArray(m) ? m : m ? [m] : [];
  }), l = $(() => {
    const x = a.value.slice().sort((v, m) => {
      const b = Ho(v.sorter) || 0;
      return (Ho(m.sorter) || 0) - b;
    });
    return x.length ? r.value.slice().sort((m, b) => {
      let g = 0;
      return x.some((C) => {
        const {
          columnKey: S,
          sorter: w,
          order: k
        } = C, R = Zy(w, S);
        return R && k && (g = R(m.rawNode, b.rawNode), g !== 0) ? (g = g * XC(k), !0) : !1;
      }), g;
    }) : r.value;
  });
  function s(x) {
    let v = a.value.slice();
    return x && Ho(x.sorter) !== !1 ? (v = v.filter((m) => Ho(m.sorter) !== !1), p(v, x), v) : x || null;
  }
  function d(x) {
    const v = s(x);
    u(v);
  }
  function u(x) {
    const {
      "onUpdate:sorter": v,
      onUpdateSorter: m,
      onSorterChange: b
    } = e;
    v && ne(v, x), m && ne(m, x), b && ne(b, x), i.value = x;
  }
  function c(x, v = "ascend") {
    if (!x)
      h();
    else {
      const m = t.value.find((g) => g.type !== "selection" && g.type !== "expand" && g.key === x);
      if (!(m != null && m.sorter)) return;
      const b = m.sorter;
      d({
        columnKey: x,
        sorter: b,
        order: v
      });
    }
  }
  function h() {
    u(null);
  }
  function p(x, v) {
    const m = x.findIndex((b) => (v == null ? void 0 : v.columnKey) && b.columnKey === v.columnKey);
    m !== void 0 && m >= 0 ? x[m] = v : x.push(v);
  }
  return {
    clearSorter: h,
    sort: c,
    sortedDataRef: l,
    mergedSortStateRef: a,
    deriveNextSorter: d
  };
}
function ew(e, {
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
    return bi(e.data, {
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
      const ie = U[Y];
      if (!ie.type && q === null && (q = Y), "tree" in ie && ie.tree)
        return Y;
    }
    return q || 0;
  }), a = I({}), {
    pagination: l
  } = e, s = I(l && l.defaultPage || 1), d = I(nc(l)), u = $(() => {
    const U = t.value.filter((Y) => Y.filterOptionValues !== void 0 || Y.filterOptionValue !== void 0), j = {};
    return U.forEach((Y) => {
      var ie;
      Y.type === "selection" || Y.type === "expand" || (Y.filterOptionValues === void 0 ? j[Y.key] = (ie = Y.filterOptionValue) !== null && ie !== void 0 ? ie : null : j[Y.key] = Y.filterOptionValues);
    }), Object.assign(nd(a.value), j);
  }), c = $(() => {
    const U = u.value, {
      columns: j
    } = e;
    function q(ae) {
      return (fe, we) => !!~String(we[ae]).indexOf(String(fe));
    }
    const {
      value: {
        treeNodes: Y
      }
    } = o, ie = [];
    return j.forEach((ae) => {
      ae.type === "selection" || ae.type === "expand" || "children" in ae || ie.push([ae.key, ae]);
    }), Y ? Y.filter((ae) => {
      const {
        rawNode: fe
      } = ae;
      for (const [we, G] of ie) {
        let ue = U[we];
        if (ue == null || (Array.isArray(ue) || (ue = [ue]), !ue.length)) continue;
        const Re = G.filter === "default" ? q(we) : G.filter;
        if (G && typeof Re == "function")
          if (G.filterMode === "and") {
            if (ue.some((be) => !Re(be, fe)))
              return !1;
          } else {
            if (ue.some((be) => Re(be, fe)))
              continue;
            return !1;
          }
      }
      return !0;
    }) : [];
  }), {
    sortedDataRef: h,
    deriveNextSorter: p,
    mergedSortStateRef: x,
    sort: v,
    clearSorter: m
  } = Qy(e, {
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
  const b = $(() => {
    const {
      pagination: U
    } = e;
    if (U !== !1)
      return U.page;
  }), g = $(() => {
    const {
      pagination: U
    } = e;
    if (U !== !1)
      return U.pageSize;
  }), C = Mt(b, s), S = Mt(g, d), w = Ue(() => {
    const U = C.value;
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
    if (!e.pagination) return h.value;
    const U = S.value, j = (w.value - 1) * U;
    return h.value.slice(j, j + U);
  }), y = $(() => R.value.map((U) => U.rawNode));
  function B(U) {
    const {
      pagination: j
    } = e;
    if (j) {
      const {
        onChange: q,
        "onUpdate:page": Y,
        onUpdatePage: ie
      } = j;
      q && ne(q, U), ie && ne(ie, U), Y && ne(Y, U), M(U);
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
        onUpdatePageSize: ie
      } = j;
      q && ne(q, U), ie && ne(ie, U), Y && ne(Y, U), n(U);
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
  }), K = $(() => Object.assign(Object.assign({}, e.pagination), {
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
    page: w.value,
    pageSize: S.value,
    pageCount: A.value === void 0 ? k.value : void 0,
    itemCount: A.value
  }));
  function M(U) {
    const {
      "onUpdate:page": j,
      onPageChange: q,
      onUpdatePage: Y
    } = e;
    Y && ne(Y, U), j && ne(j, U), q && ne(q, U), s.value = U;
  }
  function n(U) {
    const {
      "onUpdate:pageSize": j,
      onPageSizeChange: q,
      onUpdatePageSize: Y
    } = e;
    q && ne(q, U), Y && ne(Y, U), j && ne(j, U), d.value = U;
  }
  function D(U, j) {
    const {
      onUpdateFilters: q,
      "onUpdate:filters": Y,
      onFiltersChange: ie
    } = e;
    q && ne(q, U, j), Y && ne(Y, U, j), ie && ne(ie, U, j), a.value = U;
  }
  function E(U, j, q, Y) {
    var ie;
    (ie = e.onUnstableColumnResize) === null || ie === void 0 || ie.call(e, U, j, q, Y);
  }
  function H(U) {
    M(U);
  }
  function L() {
    V();
  }
  function V() {
    te({});
  }
  function te(U) {
    X(U);
  }
  function X(U) {
    U ? U ? a.value = nd(U) : process.env.NODE_ENV !== "production" && Rt("data-table", "`filters` is not an object") : a.value = {};
  }
  return {
    treeMateRef: o,
    mergedCurrentPageRef: w,
    mergedPaginationRef: K,
    paginatedDataRef: R,
    rawPaginatedDataRef: y,
    mergedFilterStateRef: u,
    mergedSortStateRef: x,
    hoverKeyRef: I(null),
    selectionColumnRef: r,
    childTriggerColIndexRef: i,
    doUpdateFilters: D,
    deriveNextSorter: p,
    doUpdatePageSize: n,
    doUpdatePage: M,
    onUnstableColumnResize: E,
    // exported methods
    filter: X,
    filters: te,
    clearFilter: L,
    clearFilters: V,
    clearSorter: m,
    page: H,
    sort: v
  };
}
const tw = ee({
  name: "DataTable",
  alias: ["AdvancedTable"],
  props: qC,
  slots: Object,
  setup(e, {
    slots: t
  }) {
    process.env.NODE_ENV !== "production" && tt(() => {
      e.onPageChange !== void 0 && at("data-table", "`on-page-change` is deprecated, please use `on-update:page` instead."), e.onPageSizeChange !== void 0 && at("data-table", "`on-page-size-change` is deprecated, please use `on-update:page-size` instead."), e.onSorterChange !== void 0 && at("data-table", "`on-sorter-change` is deprecated, please use `on-update:sorter` instead."), e.onFiltersChange !== void 0 && at("data-table", "`on-filters-change` is deprecated, please use `on-update:filters` instead."), e.onCheckedRowKeysChange !== void 0 && at("data-table", "`on-checked-row-keys-change` is deprecated, please use `on-update:checked-row-keys` instead.");
    });
    const {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = Pt("DataTable", a, o), s = $(() => {
      const {
        bottomBordered: P
      } = e;
      return r.value ? !1 : P !== void 0 ? P : !0;
    }), d = ve("DataTable", "-data-table", Wy, UC, e, o), u = I(null), c = I(null), {
      getResizableWidth: h,
      clearResizableWidth: p,
      doUpdateResizableWidth: x
    } = Xy(), {
      rowsRef: v,
      colsRef: m,
      dataRelatedColsRef: b,
      hasEllipsisRef: g
    } = Gy(e, h), {
      treeMateRef: C,
      mergedCurrentPageRef: S,
      paginatedDataRef: w,
      rawPaginatedDataRef: k,
      selectionColumnRef: R,
      hoverKeyRef: y,
      mergedPaginationRef: B,
      mergedFilterStateRef: F,
      mergedSortStateRef: A,
      childTriggerColIndexRef: K,
      doUpdatePage: M,
      doUpdateFilters: n,
      onUnstableColumnResize: D,
      deriveNextSorter: E,
      filter: H,
      filters: L,
      clearFilter: V,
      clearFilters: te,
      clearSorter: X,
      page: U,
      sort: j
    } = ew(e, {
      dataRelatedColsRef: b
    }), q = (P) => {
      const {
        fileName: W = "data.csv",
        keepOriginalData: J = !1
      } = P || {}, le = J ? e.data : k.value, de = ty(e.columns, le, e.getCsvCell, e.getCsvHeader), pe = new Blob([de], {
        type: "text/csv;charset=utf-8"
      }), me = URL.createObjectURL(pe);
      g0(me, W.endsWith(".csv") ? W : `${W}.csv`), URL.revokeObjectURL(me);
    }, {
      doCheckAll: Y,
      doUncheckAll: ie,
      doCheck: ae,
      doUncheck: fe,
      headerCheckboxDisabledRef: we,
      someRowsCheckedRef: G,
      allRowsCheckedRef: ue,
      mergedCheckedRowKeySetRef: Re,
      mergedInderminateRowKeySetRef: be
    } = Ky(e, {
      selectionColumnRef: R,
      treeMateRef: C,
      paginatedDataRef: w
    }), {
      stickyExpandedRowsRef: Fe,
      mergedExpandedRowKeysRef: Pe,
      renderExpandRef: lt,
      expandableRef: Qe,
      doUpdateExpandedRowKeys: ut
    } = Uy(e, C), {
      handleTableBodyScroll: ct,
      handleTableHeaderScroll: xe,
      syncScrollState: Ce,
      setHeaderScrollLeft: $e,
      leftActiveFixedColKeyRef: Ie,
      leftActiveFixedChildrenColKeysRef: Je,
      rightActiveFixedColKeyRef: re,
      rightActiveFixedChildrenColKeysRef: he,
      leftFixedColumnsRef: Te,
      rightFixedColumnsRef: st,
      fixedColumnLeftMapRef: zt,
      fixedColumnRightMapRef: $t
    } = Yy(e, {
      bodyWidthRef: u,
      mainTableInstRef: c,
      mergedCurrentPageRef: S
    }), {
      localeRef: gt
    } = er("DataTable"), nt = $(() => e.virtualScroll || e.flexHeight || e.maxHeight !== void 0 || g.value ? "fixed" : e.tableLayout);
    Ee(sn, {
      props: e,
      treeMateRef: C,
      renderExpandIconRef: oe(e, "renderExpandIcon"),
      loadingKeySetRef: I(/* @__PURE__ */ new Set()),
      slots: t,
      indentRef: oe(e, "indent"),
      childTriggerColIndexRef: K,
      bodyWidthRef: u,
      componentId: pn(),
      hoverKeyRef: y,
      mergedClsPrefixRef: o,
      mergedThemeRef: d,
      scrollXRef: $(() => e.scrollX),
      rowsRef: v,
      colsRef: m,
      paginatedDataRef: w,
      leftActiveFixedColKeyRef: Ie,
      leftActiveFixedChildrenColKeysRef: Je,
      rightActiveFixedColKeyRef: re,
      rightActiveFixedChildrenColKeysRef: he,
      leftFixedColumnsRef: Te,
      rightFixedColumnsRef: st,
      fixedColumnLeftMapRef: zt,
      fixedColumnRightMapRef: $t,
      mergedCurrentPageRef: S,
      someRowsCheckedRef: G,
      allRowsCheckedRef: ue,
      mergedSortStateRef: A,
      mergedFilterStateRef: F,
      loadingRef: oe(e, "loading"),
      rowClassNameRef: oe(e, "rowClassName"),
      mergedCheckedRowKeySetRef: Re,
      mergedExpandedRowKeysRef: Pe,
      mergedInderminateRowKeySetRef: be,
      localeRef: gt,
      expandableRef: Qe,
      stickyExpandedRowsRef: Fe,
      rowKeyRef: oe(e, "rowKey"),
      renderExpandRef: lt,
      summaryRef: oe(e, "summary"),
      virtualScrollRef: oe(e, "virtualScroll"),
      virtualScrollXRef: oe(e, "virtualScrollX"),
      heightForRowRef: oe(e, "heightForRow"),
      minRowHeightRef: oe(e, "minRowHeight"),
      virtualScrollHeaderRef: oe(e, "virtualScrollHeader"),
      headerHeightRef: oe(e, "headerHeight"),
      rowPropsRef: oe(e, "rowProps"),
      stripedRef: oe(e, "striped"),
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
      onLoadRef: oe(e, "onLoad"),
      mergedTableLayoutRef: nt,
      maxHeightRef: oe(e, "maxHeight"),
      minHeightRef: oe(e, "minHeight"),
      flexHeightRef: oe(e, "flexHeight"),
      headerCheckboxDisabledRef: we,
      paginationBehaviorOnFilterRef: oe(e, "paginationBehaviorOnFilter"),
      summaryPlacementRef: oe(e, "summaryPlacement"),
      filterIconPopoverPropsRef: oe(e, "filterIconPopoverProps"),
      scrollbarPropsRef: oe(e, "scrollbarProps"),
      syncScrollState: Ce,
      doUpdatePage: M,
      doUpdateFilters: n,
      getResizableWidth: h,
      onUnstableColumnResize: D,
      clearResizableWidth: p,
      doUpdateResizableWidth: x,
      deriveNextSorter: E,
      doCheck: ae,
      doUncheck: fe,
      doCheckAll: Y,
      doUncheckAll: ie,
      doUpdateExpandedRowKeys: ut,
      handleTableHeaderScroll: xe,
      handleTableBodyScroll: ct,
      setHeaderScrollLeft: $e,
      renderCell: oe(e, "renderCell")
    });
    const yt = {
      filter: H,
      filters: L,
      clearFilters: te,
      clearSorter: X,
      page: U,
      sort: j,
      clearFilter: V,
      downloadCsv: q,
      scrollTo: (P, W) => {
        var J;
        (J = c.value) === null || J === void 0 || J.scrollTo(P, W);
      }
    }, et = $(() => {
      const {
        size: P
      } = e, {
        common: {
          cubicBezierEaseInOut: W
        },
        self: {
          borderColor: J,
          tdColorHover: le,
          tdColorSorting: de,
          tdColorSortingModal: pe,
          tdColorSortingPopover: me,
          thColorSorting: Se,
          thColorSortingModal: Le,
          thColorSortingPopover: rt,
          thColor: Ve,
          thColorHover: Dt,
          tdColor: It,
          tdTextColor: Lt,
          thTextColor: _t,
          thFontWeight: Wt,
          thButtonColorHover: Jt,
          thIconColor: Vt,
          thIconColorActive: _,
          filterSize: Q,
          borderRadius: ye,
          lineHeight: Oe,
          tdColorModal: qe,
          thColorModal: Ne,
          borderColorModal: ot,
          thColorHoverModal: ft,
          tdColorHoverModal: Gt,
          borderColorPopover: bn,
          thColorPopover: xn,
          tdColorPopover: Wn,
          tdColorHoverPopover: Lr,
          thColorHoverPopover: Nr,
          paginationMargin: Hr,
          emptyPadding: jr,
          boxShadowAfter: _r,
          boxShadowBefore: Rn,
          sorterSize: Fn,
          resizableContainerSize: ki,
          resizableSize: Ri,
          loadingColor: Fi,
          loadingSize: Pi,
          opacityLoading: zi,
          tdColorStriped: $i,
          tdColorStripedModal: Ai,
          tdColorStripedPopover: Di,
          [Z("fontSize", P)]: Ei,
          [Z("thPadding", P)]: Ti,
          [Z("tdPadding", P)]: Oi
        }
      } = d.value;
      return {
        "--n-font-size": Ei,
        "--n-th-padding": Ti,
        "--n-td-padding": Oi,
        "--n-bezier": W,
        "--n-border-radius": ye,
        "--n-line-height": Oe,
        "--n-border-color": J,
        "--n-border-color-modal": ot,
        "--n-border-color-popover": bn,
        "--n-th-color": Ve,
        "--n-th-color-hover": Dt,
        "--n-th-color-modal": Ne,
        "--n-th-color-hover-modal": ft,
        "--n-th-color-popover": xn,
        "--n-th-color-hover-popover": Nr,
        "--n-td-color": It,
        "--n-td-color-hover": le,
        "--n-td-color-modal": qe,
        "--n-td-color-hover-modal": Gt,
        "--n-td-color-popover": Wn,
        "--n-td-color-hover-popover": Lr,
        "--n-th-text-color": _t,
        "--n-td-text-color": Lt,
        "--n-th-font-weight": Wt,
        "--n-th-button-color-hover": Jt,
        "--n-th-icon-color": Vt,
        "--n-th-icon-color-active": _,
        "--n-filter-size": Q,
        "--n-pagination-margin": Hr,
        "--n-empty-padding": jr,
        "--n-box-shadow-before": Rn,
        "--n-box-shadow-after": _r,
        "--n-sorter-size": Fn,
        "--n-resizable-container-size": ki,
        "--n-resizable-size": Ri,
        "--n-loading-size": Pi,
        "--n-loading-color": Fi,
        "--n-opacity-loading": zi,
        "--n-td-color-striped": $i,
        "--n-td-color-striped-modal": Ai,
        "--n-td-color-striped-popover": Di,
        "n-td-color-sorting": de,
        "n-td-color-sorting-modal": pe,
        "n-td-color-sorting-popover": me,
        "n-th-color-sorting": Se,
        "n-th-color-sorting-modal": Le,
        "n-th-color-sorting-popover": rt
      };
    }), ce = i ? Ye("data-table", $(() => e.size[0]), et, e) : void 0, Be = $(() => {
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
      paginatedData: w,
      mergedBordered: r,
      mergedBottomBordered: s,
      mergedPagination: B,
      mergedShowPagination: Be,
      cssVars: i ? void 0 : et,
      themeClass: ce == null ? void 0 : ce.themeClass,
      onRender: ce == null ? void 0 : ce.onRender
    }, yt);
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
    }, f(_y, {
      ref: "mainTableInstRef"
    })), this.mergedShowPagination ? f("div", {
      class: `${e}-data-table__pagination`
    }, f(rc, Object.assign({
      theme: this.mergedTheme.peers.Pagination,
      themeOverrides: this.mergedTheme.peerOverrides.Pagination,
      disabled: this.loading
    }, this.mergedPagination))) : null, f(jt, {
      name: "fade-in-scale-up-transition"
    }, {
      default: () => this.loading ? f("div", {
        class: `${e}-data-table-loading-wrapper`
      }, Zt(o.loading, () => [f(_n, Object.assign({
        clsPrefix: e,
        strokeWidth: 20
      }, i))])) : null
    }));
  }
}), Bc = "n-dialog-provider", kc = "n-dialog-api", nw = "n-dialog-reactive-list";
function Rc() {
  const e = ge(kc, null);
  return e === null && In("use-dialog", "No outer <n-dialog-provider /> founded."), e;
}
const rw = {
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
function ow(e) {
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
    primaryColor: x,
    dividerColor: v,
    borderRadius: m,
    fontWeightStrong: b,
    lineHeight: g,
    fontSize: C
  } = e;
  return Object.assign(Object.assign({}, rw), {
    fontSize: C,
    lineHeight: g,
    border: `1px solid ${v}`,
    titleTextColor: t,
    textColor: r,
    color: o,
    closeColorHover: s,
    closeColorPressed: d,
    closeIconColor: i,
    closeIconColorHover: a,
    closeIconColorPressed: l,
    closeBorderRadius: m,
    iconColor: x,
    iconColorInfo: u,
    iconColorSuccess: c,
    iconColorWarning: h,
    iconColorError: p,
    borderRadius: m,
    titleFontWeight: b
  });
}
const Fc = {
  name: "Dialog",
  common: Ze,
  peers: {
    Button: xi
  },
  self: ow
}, wi = {
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
}, Pc = Tn(wi), iw = O([z("dialog", `
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
 `, [O("> *:not(:last-child)", `
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
 `)]), ui(z("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), z("dialog", [zd(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), aw = {
  default: () => f(ri, null),
  info: () => f(ri, null),
  success: () => f(cl, null),
  warning: () => f(gi, null),
  error: () => f(ul, null)
}, zc = ee({
  name: "Dialog",
  alias: [
    "NimbusConfirmCard",
    // deprecated
    "Confirm"
    // deprecated
  ],
  props: Object.assign(Object.assign({}, ve.props), wi),
  slots: Object,
  setup(e) {
    const {
      mergedComponentPropsRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = Pt("Dialog", i, r), l = $(() => {
      var x, v;
      const {
        iconPlacement: m
      } = e;
      return m || ((v = (x = t == null ? void 0 : t.value) === null || x === void 0 ? void 0 : x.Dialog) === null || v === void 0 ? void 0 : v.iconPlacement) || "left";
    });
    function s(x) {
      const {
        onPositiveClick: v
      } = e;
      v && v(x);
    }
    function d(x) {
      const {
        onNegativeClick: v
      } = e;
      v && v(x);
    }
    function u() {
      const {
        onClose: x
      } = e;
      x && x();
    }
    const c = ve("Dialog", "-dialog", iw, Fc, e, r), h = $(() => {
      const {
        type: x
      } = e, v = l.value, {
        common: {
          cubicBezierEaseInOut: m
        },
        self: {
          fontSize: b,
          lineHeight: g,
          border: C,
          titleTextColor: S,
          textColor: w,
          color: k,
          closeBorderRadius: R,
          closeColorHover: y,
          closeColorPressed: B,
          closeIconColor: F,
          closeIconColorHover: A,
          closeIconColorPressed: K,
          closeIconSize: M,
          borderRadius: n,
          titleFontWeight: D,
          titleFontSize: E,
          padding: H,
          iconSize: L,
          actionSpace: V,
          contentMargin: te,
          closeSize: X,
          [v === "top" ? "iconMarginIconTop" : "iconMargin"]: U,
          [v === "top" ? "closeMarginIconTop" : "closeMargin"]: j,
          [Z("iconColor", x)]: q
        }
      } = c.value, Y = Nt(U);
      return {
        "--n-font-size": b,
        "--n-icon-color": q,
        "--n-bezier": m,
        "--n-close-margin": j,
        "--n-icon-margin-top": Y.top,
        "--n-icon-margin-right": Y.right,
        "--n-icon-margin-bottom": Y.bottom,
        "--n-icon-margin-left": Y.left,
        "--n-icon-size": L,
        "--n-close-size": X,
        "--n-close-icon-size": M,
        "--n-close-border-radius": R,
        "--n-close-color-hover": y,
        "--n-close-color-pressed": B,
        "--n-close-icon-color": F,
        "--n-close-icon-color-hover": A,
        "--n-close-icon-color-pressed": K,
        "--n-color": k,
        "--n-text-color": w,
        "--n-border-radius": n,
        "--n-padding": H,
        "--n-line-height": g,
        "--n-border": C,
        "--n-content-margin": te,
        "--n-title-font-size": E,
        "--n-title-font-weight": D,
        "--n-title-text-color": S,
        "--n-action-space": V
      };
    }), p = o ? Ye("dialog", $(() => `${e.type[0]}${l.value[0]}`), h, e) : void 0;
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
      handlePositiveClick: x,
      handleNegativeClick: v,
      mergedTheme: m,
      loading: b,
      type: g,
      mergedClsPrefix: C
    } = this;
    (e = this.onRender) === null || e === void 0 || e.call(this);
    const S = a ? f(bt, {
      clsPrefix: C,
      class: `${C}-dialog__icon`
    }, {
      default: () => je(this.$slots.icon, (k) => k || (this.icon ? pt(this.icon) : aw[this.type]()))
    }) : null, w = je(this.$slots.action, (k) => k || c || u || d ? f("div", {
      class: [`${C}-dialog__action`, this.actionClass],
      style: this.actionStyle
    }, k || (d ? [pt(d)] : [this.negativeText && f(nr, Object.assign({
      theme: m.peers.Button,
      themeOverrides: m.peerOverrides.Button,
      ghost: !0,
      size: "small",
      onClick: v
    }, p), {
      default: () => pt(this.negativeText)
    }), this.positiveText && f(nr, Object.assign({
      theme: m.peers.Button,
      themeOverrides: m.peerOverrides.Button,
      size: "small",
      type: g === "default" ? "primary" : g,
      disabled: b,
      loading: b,
      onClick: x
    }, h), {
      default: () => pt(this.positiveText)
    })])) : null);
    return f("div", {
      class: [`${C}-dialog`, this.themeClass, this.closable && `${C}-dialog--closable`, `${C}-dialog--icon-${r}`, t && `${C}-dialog--bordered`, this.rtlEnabled && `${C}-dialog--rtl`],
      style: o,
      role: "dialog"
    }, i ? je(this.$slots.close, (k) => {
      const R = [`${C}-dialog__close`, this.rtlEnabled && `${C}-dialog--rtl`];
      return k ? f("div", {
        class: R
      }, k) : f(So, {
        clsPrefix: C,
        class: R,
        onClick: this.handleCloseClick
      });
    }) : null, a && r === "top" ? f("div", {
      class: `${C}-dialog-icon-container`
    }, S) : null, f("div", {
      class: [`${C}-dialog__title`, this.titleClass],
      style: this.titleStyle
    }, a && r === "left" ? S : null, Zt(this.$slots.header, () => [pt(l)])), f("div", {
      class: [`${C}-dialog__content`, w ? "" : `${C}-dialog__content--last`, this.contentClass],
      style: this.contentStyle
    }, Zt(this.$slots.default, () => [pt(s)])), w);
  }
});
function lw(e) {
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
const sw = {
  name: "Modal",
  common: Ze,
  peers: {
    Scrollbar: Bo,
    Dialog: Fc,
    Card: qu
  },
  self: lw
}, dw = "n-modal-provider", $c = "n-modal-api", uw = "n-modal-reactive-list";
function Ac() {
  const e = ge($c, null);
  return e === null && In("use-modal", "No outer <n-modal-provider /> founded."), e;
}
const Ra = "n-draggable";
function cw(e, t) {
  let r;
  const o = $(() => e.value !== !1), i = $(() => o.value ? Ra : ""), a = $(() => {
    const d = e.value;
    return d === !0 || d === !1 ? !0 : d ? d.bounds !== "none" : !0;
  });
  function l(d) {
    const u = d.querySelector(`.${Ra}`);
    if (!u || !i.value)
      return;
    let c = 0, h = 0, p = 0, x = 0, v = 0, m = 0, b;
    function g(w) {
      w.preventDefault(), b = w;
      const {
        x: k,
        y: R,
        right: y,
        bottom: B
      } = d.getBoundingClientRect();
      h = k, x = R, c = window.innerWidth - y, p = window.innerHeight - B;
      const {
        left: F,
        top: A
      } = d.style;
      v = +A.slice(0, -2), m = +F.slice(0, -2);
    }
    function C(w) {
      if (!b) return;
      const {
        clientX: k,
        clientY: R
      } = b;
      let y = w.clientX - k, B = w.clientY - R;
      a.value && (y > c ? y = c : -y > h && (y = -h), B > p ? B = p : -B > x && (B = -x));
      const F = y + m, A = B + v;
      d.style.top = `${A}px`, d.style.left = `${F}px`;
    }
    function S() {
      b = void 0, t.onEnd(d);
    }
    Ke("mousedown", u, g), Ke("mousemove", window, C), Ke("mouseup", window, S), r = () => {
      We("mousedown", u, g), Ke("mousemove", window, C), Ke("mouseup", window, S);
    };
  }
  function s() {
    r && (r(), r = void 0);
  }
  return yd(s), {
    stopDrag: s,
    startDrag: l,
    draggableRef: o,
    draggableClassRef: i
  };
}
const Sl = Object.assign(Object.assign({}, ml), wi), fw = Tn(Sl), hw = ee({
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
  }, Sl), {
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
    const t = I(null), r = I(null), o = I(e.show), i = I(null), a = I(null), l = ge(Td);
    let s = null;
    He(oe(e, "show"), (B) => {
      B && (s = l.getMousePosition());
    }, {
      immediate: !0
    });
    const {
      stopDrag: d,
      startDrag: u,
      draggableRef: c,
      draggableClassRef: h
    } = cw(oe(e, "draggable"), {
      onEnd: (B) => {
        m(B);
      }
    }), p = $(() => Ut([e.titleClass, h.value])), x = $(() => Ut([e.headerClass, h.value]));
    He(oe(e, "show"), (B) => {
      B && (o.value = !0);
    }), Bh($(() => e.blockScroll && o.value));
    function v() {
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
    function m(B) {
      if (l.transformOriginRef.value === "center" || !s || !r.value) return;
      const F = r.value.containerScrollTop, {
        offsetLeft: A,
        offsetTop: K
      } = B, M = s.y, n = s.x;
      i.value = -(A - n), a.value = -(K - M - F), B.style.transformOrigin = v();
    }
    function b(B) {
      vt(() => {
        m(B);
      });
    }
    function g(B) {
      B.style.transformOrigin = v(), e.onBeforeLeave();
    }
    function C(B) {
      const F = B;
      c.value && u(F), e.onAfterEnter && e.onAfterEnter(F);
    }
    function S() {
      o.value = !1, i.value = null, a.value = null, d(), e.onAfterLeave();
    }
    function w() {
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
    const y = I(null);
    return He(y, (B) => {
      B && vt(() => {
        const F = B.el;
        F && t.value !== F && (t.value = F);
      });
    }), Ee(fi, t), Ee(ci, null), Ee(yo, null), {
      mergedTheme: l.mergedThemeRef,
      appear: l.appearRef,
      isMounted: l.isMountedRef,
      mergedClsPrefix: l.mergedClsPrefixRef,
      bodyRef: t,
      scrollbarRef: r,
      draggableClass: h,
      displayed: o,
      childNodeRef: y,
      cardHeaderClass: x,
      dialogTitleClass: p,
      handlePositiveClick: R,
      handleNegativeClick: k,
      handleCloseClick: w,
      handleAfterEnter: C,
      handleAfterLeave: S,
      handleBeforeLeave: g,
      handleEnter: b
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
      if (d = y0("default", e.default, {
        draggableClass: this.draggableClass
      }), !d) {
        Rt("modal", "default slot is empty");
        return;
      }
      d = Cd(d), d.props = Ot({
        class: `${s}-modal`
      }, t, d.props || {});
    }
    return this.displayDirective === "show" || this.displayed || this.show ? vn(f("div", {
      role: "none",
      class: `${s}-modal-body-wrapper`
    }, f(cr, {
      ref: "scrollbarRef",
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      contentClass: `${s}-modal-scroll-content`
    }, {
      default: () => {
        var u;
        return [(u = this.renderMask) === null || u === void 0 ? void 0 : u.call(this), f(Zd, {
          disabled: !this.trapFocus,
          active: this.show,
          onEsc: this.onEsc,
          autoFocus: this.autoFocus
        }, {
          default: () => {
            var c;
            return f(jt, {
              name: "fade-in-scale-up-transition",
              appear: (c = this.appear) !== null && c !== void 0 ? c : this.isMounted,
              onEnter: r,
              onAfterEnter: o,
              onAfterLeave: i,
              onBeforeLeave: a
            }, {
              default: () => {
                const h = [[Rr, this.show]], {
                  onClickoutside: p
                } = this;
                return p && h.push([so, this.onClickoutside, void 0, {
                  capture: !0
                }]), vn(this.preset === "confirm" || this.preset === "dialog" ? f(zc, Object.assign({}, this.$attrs, {
                  class: [`${s}-modal`, this.$attrs.class],
                  ref: "bodyRef",
                  theme: this.mergedTheme.peers.Dialog,
                  themeOverrides: this.mergedTheme.peerOverrides.Dialog
                }, Sn(this.$props, Pc), {
                  titleClass: this.dialogTitleClass,
                  "aria-modal": "true"
                }), e) : this.preset === "card" ? f(lC, Object.assign({}, this.$attrs, {
                  ref: "bodyRef",
                  class: [`${s}-modal`, this.$attrs.class],
                  theme: this.mergedTheme.peers.Card,
                  themeOverrides: this.mergedTheme.peerOverrides.Card
                }, Sn(this.$props, iC), {
                  headerClass: this.cardHeaderClass,
                  "aria-modal": "true",
                  role: "dialog"
                }), e) : this.childNodeRef = d, h);
              }
            });
          }
        })];
      }
    })), [[Rr, this.displayDirective === "if" || this.displayed || this.show]]) : null;
  }
}), vw = O([z("modal-container", `
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
 `, [mi({
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
 `, [ko({
  duration: ".25s",
  enterScale: ".5"
}), O(`.${Ra}`, `
 cursor: move;
 user-select: none;
 `)])]), Dc = Object.assign(Object.assign(Object.assign(Object.assign({}, ve.props), {
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
}), Sl), {
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
}), Ec = ee({
  name: "Modal",
  inheritAttrs: !1,
  props: Dc,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && (e.onHide && at("modal", "`on-hide` is deprecated."), e.onAfterHide && at("modal", "`on-after-hide` is deprecated, please use `on-after-leave` instead."), e.onBeforeHide && at("modal", "`on-before-hide` is deprecated, please use `on-before-leave` instead."), e.overlayStyle && at("modal", "`overlay-style` is deprecated, please use `style` instead."));
    const t = I(null), {
      mergedClsPrefixRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = ve("Modal", "-modal", vw, sw, e, r), l = Ha(64), s = Na(), d = Tr(), u = e.internalDialog ? ge(Bc, null) : null, c = e.internalModal ? ge(Ch, null) : null, h = Sh();
    function p(R) {
      const {
        onUpdateShow: y,
        "onUpdate:show": B,
        onHide: F
      } = e;
      y && ne(y, R), B && ne(B, R), F && !R && F(R);
    }
    function x() {
      const {
        onClose: R
      } = e;
      R ? Promise.resolve(R()).then((y) => {
        y !== !1 && p(!1);
      }) : p(!1);
    }
    function v() {
      const {
        onPositiveClick: R
      } = e;
      R ? Promise.resolve(R()).then((y) => {
        y !== !1 && p(!1);
      }) : p(!1);
    }
    function m() {
      const {
        onNegativeClick: R
      } = e;
      R ? Promise.resolve(R()).then((y) => {
        y !== !1 && p(!1);
      }) : p(!1);
    }
    function b() {
      const {
        onBeforeLeave: R,
        onBeforeHide: y
      } = e;
      R && ne(R), y && y();
    }
    function g() {
      const {
        onAfterLeave: R,
        onAfterHide: y
      } = e;
      R && ne(R), y && y();
    }
    function C(R) {
      var y;
      const {
        onMaskClick: B
      } = e;
      B && B(R), e.maskClosable && !((y = t.value) === null || y === void 0) && y.contains(Fr(R)) && p(!1);
    }
    function S(R) {
      var y;
      (y = e.onEsc) === null || y === void 0 || y.call(e), e.show && e.closeOnEsc && x0(R) && (h.value || p(!1));
    }
    Ee(Td, {
      getMousePosition: () => {
        const R = u || c;
        if (R) {
          const {
            clickedRef: y,
            clickedPositionRef: B
          } = R;
          if (y.value && B.value)
            return B.value;
        }
        return l.value ? s.value : null;
      },
      mergedClsPrefixRef: r,
      mergedThemeRef: a,
      isMountedRef: d,
      appearRef: oe(e, "internalAppear"),
      transformOriginRef: oe(e, "transformOrigin")
    });
    const w = $(() => {
      const {
        common: {
          cubicBezierEaseOut: R
        },
        self: {
          boxShadow: y,
          color: B,
          textColor: F
        }
      } = a.value;
      return {
        "--n-bezier-ease-out": R,
        "--n-box-shadow": y,
        "--n-color": B,
        "--n-text-color": F
      };
    }), k = i ? Ye("theme-class", void 0, w, e) : void 0;
    return {
      mergedClsPrefix: r,
      namespace: o,
      isMounted: d,
      containerRef: t,
      presetProps: $(() => Sn(e, fw)),
      handleEsc: S,
      handleAfterLeave: g,
      handleClickoutside: C,
      handleBeforeLeave: b,
      doUpdateShow: p,
      handleNegativeClick: m,
      handlePositiveClick: v,
      handleCloseClick: x,
      cssVars: i ? void 0 : w,
      themeClass: k == null ? void 0 : k.themeClass,
      onRender: k == null ? void 0 : k.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return f(Nd, {
      to: this.to,
      show: this.show
    }, {
      default: () => {
        var t;
        (t = this.onRender) === null || t === void 0 || t.call(this);
        const {
          unstableShowMask: r
        } = this;
        return vn(f("div", {
          role: "none",
          ref: "containerRef",
          class: [`${e}-modal-container`, this.themeClass, this.namespace],
          style: this.cssVars
        }, f(hw, Object.assign({
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
            return f(jt, {
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
        }), this.$slots)), [[Ua, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
}), pw = Object.assign(Object.assign({}, wi), {
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
}), gw = ee({
  name: "DialogEnvironment",
  props: Object.assign(Object.assign({}, pw), {
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
    return f(Ec, {
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
      }) => f(zc, Object.assign({}, Sn(this.$props, Pc), {
        titleClass: Ut([this.titleClass, c]),
        style: this.internalStyle,
        onClose: o,
        onNegativeClick: r,
        onPositiveClick: e
      }))
    });
  }
}), mw = {
  injectionKey: String,
  to: [String, Object]
}, Tc = ee({
  name: "DialogProvider",
  props: mw,
  setup() {
    const e = I([]), t = {};
    function r(s = {}) {
      const d = pn(), u = bo(Object.assign(Object.assign({}, s), {
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
    return Ee(kc, l), Ee(Bc, {
      clickedRef: Ha(64),
      clickedPositionRef: Na()
    }), Ee(nw, e), Object.assign(Object.assign({}, l), {
      dialogList: e,
      dialogInstRefs: t,
      handleAfterLeave: i
    });
  },
  render() {
    var e, t;
    return f(_e, null, [this.dialogList.map((r) => f(gw, ar(r, ["destroy", "style"], {
      internalStyle: r.style,
      to: this.to,
      ref: (o) => {
        o === null ? delete this.dialogInstRefs[`n-dialog-${r.key}`] : this.dialogInstRefs[`n-dialog-${r.key}`] = o;
      },
      internalKey: r.key,
      onInternalAfterLeave: this.handleAfterLeave
    }))), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)]);
  }
}), Oc = "n-loading-bar", Mc = "n-loading-bar-api";
function bw(e) {
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
const xw = {
  name: "LoadingBar",
  common: Ze,
  self: bw
}, Cw = z("loading-bar-container", `
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`, [mi({
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
var jo = function(e, t, r, o) {
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
function _o(e, t) {
  return `${t}-loading-bar ${t}-loading-bar--${e}`;
}
const yw = ee({
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
    } = ge(Oc), o = I(null), i = I(!1), a = I(!1), l = I(!1), s = I(!1);
    let d = !1;
    const u = I(!1), c = $(() => {
      const {
        loadingBarStyle: k
      } = t;
      return k ? k[u.value ? "error" : "loading"] : "";
    });
    function h() {
      return jo(this, void 0, void 0, function* () {
        i.value = !1, l.value = !1, d = !1, u.value = !1, s.value = !0, yield vt(), s.value = !1;
      });
    }
    function p() {
      return jo(this, arguments, void 0, function* (k = 0, R = 80, y = "starting") {
        if (a.value = !0, yield h(), d) return;
        l.value = !0, yield vt();
        const B = o.value;
        B && (B.style.maxWidth = `${k}%`, B.style.transition = "none", B.offsetWidth, B.className = _o(y, r.value), B.style.transition = "", B.style.maxWidth = `${R}%`);
      });
    }
    function x() {
      return jo(this, void 0, void 0, function* () {
        if (d || u.value) return;
        a.value && (yield vt()), d = !0;
        const k = o.value;
        k && (k.className = _o("finishing", r.value), k.style.maxWidth = "100%", k.offsetWidth, l.value = !1);
      });
    }
    function v() {
      if (!(d || u.value))
        if (!l.value)
          p(100, 100, "error").then(() => {
            u.value = !0;
            const k = o.value;
            k && (k.className = _o("error", r.value), k.offsetWidth, l.value = !1);
          });
        else {
          u.value = !0;
          const k = o.value;
          if (!k) return;
          k.className = _o("error", r.value), k.style.maxWidth = "100%", k.offsetWidth, l.value = !1;
        }
    }
    function m() {
      i.value = !0;
    }
    function b() {
      i.value = !1;
    }
    function g() {
      return jo(this, void 0, void 0, function* () {
        yield h();
      });
    }
    const C = ve("LoadingBar", "-loading-bar", Cw, xw, t, r), S = $(() => {
      const {
        self: {
          height: k,
          colorError: R,
          colorLoading: y
        }
      } = C.value;
      return {
        "--n-height": k,
        "--n-color-loading": y,
        "--n-color-error": R
      };
    }), w = e ? Ye("loading-bar", void 0, S, t) : void 0;
    return {
      mergedClsPrefix: r,
      loadingBarRef: o,
      started: a,
      loading: l,
      entering: i,
      transitionDisabled: s,
      start: p,
      error: v,
      finish: x,
      handleEnter: m,
      handleAfterEnter: b,
      handleAfterLeave: g,
      mergedLoadingBarStyle: c,
      cssVars: e ? void 0 : S,
      themeClass: w == null ? void 0 : w.themeClass,
      onRender: w == null ? void 0 : w.onRender
    };
  },
  render() {
    if (!this.started) return null;
    const {
      mergedClsPrefix: e
    } = this;
    return f(jt, {
      name: "fade-in-transition",
      appear: !0,
      onEnter: this.handleEnter,
      onAfterEnter: this.handleAfterEnter,
      onAfterLeave: this.handleAfterLeave,
      css: !this.transitionDisabled
    }, {
      default: () => {
        var t;
        return (t = this.onRender) === null || t === void 0 || t.call(this), vn(f("div", {
          class: [`${e}-loading-bar-container`, this.themeClass, this.containerClass],
          style: this.containerStyle
        }, f("div", {
          ref: "loadingBarRef",
          class: [`${e}-loading-bar`],
          style: [this.cssVars, this.mergedLoadingBarStyle]
        })), [[Rr, this.loading || !this.loading && this.entering]]);
      }
    });
  }
}), ww = Object.assign(Object.assign({}, ve.props), {
  to: {
    type: [String, Object, Boolean],
    default: void 0
  },
  containerClass: String,
  containerStyle: [String, Object],
  loadingBarStyle: {
    type: Object
  }
}), Sw = ee({
  name: "LoadingBarProvider",
  props: ww,
  setup(e) {
    const t = Tr(), r = I(null), o = {
      start() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.start() : vt(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.start();
        });
      },
      error() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.error() : vt(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.error();
        });
      },
      finish() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.finish() : vt(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.finish();
        });
      }
    }, {
      mergedClsPrefixRef: i
    } = Ae(e);
    return Ee(Mc, o), Ee(Oc, {
      props: e,
      mergedClsPrefixRef: i
    }), Object.assign(o, {
      loadingBarRef: r
    });
  },
  render() {
    var e, t;
    return f(_e, null, f(li, {
      disabled: this.to === !1,
      to: this.to || "body"
    }, f(yw, {
      ref: "loadingBarRef",
      containerStyle: this.containerStyle,
      containerClass: this.containerClass
    })), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
  }
});
function Bw() {
  const e = ge(Mc, null);
  return e === null && In("use-loading-bar", "No outer <n-loading-bar-provider /> founded."), e;
}
const Ic = "n-message-api", Lc = "n-message-provider", kw = {
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
function Rw(e) {
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
    borderRadius: x,
    closeColorHover: v,
    closeColorPressed: m
  } = e;
  return Object.assign(Object.assign({}, kw), {
    closeBorderRadius: x,
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
    closeColorPressed: m,
    closeIconColor: r,
    closeIconColorHover: o,
    closeIconColorPressed: i,
    closeColorHoverInfo: v,
    closeColorPressedInfo: m,
    closeIconColorInfo: r,
    closeIconColorHoverInfo: o,
    closeIconColorPressedInfo: i,
    closeColorHoverSuccess: v,
    closeColorPressedSuccess: m,
    closeIconColorSuccess: r,
    closeIconColorHoverSuccess: o,
    closeIconColorPressedSuccess: i,
    closeColorHoverError: v,
    closeColorPressedError: m,
    closeIconColorError: r,
    closeIconColorHoverError: o,
    closeIconColorPressedError: i,
    closeColorHoverWarning: v,
    closeColorPressedWarning: m,
    closeIconColorWarning: r,
    closeIconColorHoverWarning: o,
    closeIconColorPressedWarning: i,
    closeColorHoverLoading: v,
    closeColorPressedLoading: m,
    closeIconColorLoading: r,
    closeIconColorHoverLoading: o,
    closeIconColorPressedLoading: i,
    loadingColor: h,
    lineHeight: p,
    borderRadius: x
  });
}
const Fw = {
  name: "Message",
  common: Ze,
  self: Rw
}, Nc = {
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
}, Pw = O([z("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [_u({
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
 `, [["default", "info", "success", "warning", "error", "loading"].map((e) => N(`${e}-type`, [O("> *", `
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])), O("> *", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [Xt()])]), T("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [O("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), O("&:active", `
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
 `)])]), zw = {
  info: () => f(ri, null),
  success: () => f(cl, null),
  warning: () => f(gi, null),
  error: () => f(ul, null),
  default: () => null
}, $w = ee({
  name: "Message",
  props: Object.assign(Object.assign({}, Nc), {
    render: Function
  }),
  setup(e) {
    const {
      inlineThemeDisabled: t,
      mergedRtlRef: r
    } = Ae(e), {
      props: o,
      mergedClsPrefixRef: i
    } = ge(Lc), a = Pt("Message", r, i), l = ve("Message", "-message", Pw, Fw, o, i), s = $(() => {
      const {
        type: u
      } = e, {
        common: {
          cubicBezierEaseInOut: c
        },
        self: {
          padding: h,
          margin: p,
          maxWidth: x,
          iconMargin: v,
          closeMargin: m,
          closeSize: b,
          iconSize: g,
          fontSize: C,
          lineHeight: S,
          borderRadius: w,
          iconColorInfo: k,
          iconColorSuccess: R,
          iconColorWarning: y,
          iconColorError: B,
          iconColorLoading: F,
          closeIconSize: A,
          closeBorderRadius: K,
          [Z("textColor", u)]: M,
          [Z("boxShadow", u)]: n,
          [Z("color", u)]: D,
          [Z("closeColorHover", u)]: E,
          [Z("closeColorPressed", u)]: H,
          [Z("closeIconColor", u)]: L,
          [Z("closeIconColorPressed", u)]: V,
          [Z("closeIconColorHover", u)]: te
        }
      } = l.value;
      return {
        "--n-bezier": c,
        "--n-margin": p,
        "--n-padding": h,
        "--n-max-width": x,
        "--n-font-size": C,
        "--n-icon-margin": v,
        "--n-icon-size": g,
        "--n-close-icon-size": A,
        "--n-close-border-radius": K,
        "--n-close-size": b,
        "--n-close-margin": m,
        "--n-text-color": M,
        "--n-color": D,
        "--n-box-shadow": n,
        "--n-icon-color-info": k,
        "--n-icon-color-success": R,
        "--n-icon-color-warning": y,
        "--n-icon-color-error": B,
        "--n-icon-color-loading": F,
        "--n-close-color-hover": E,
        "--n-close-color-pressed": H,
        "--n-close-icon-color": L,
        "--n-close-icon-color-pressed": V,
        "--n-close-icon-color-hover": te,
        "--n-line-height": S,
        "--n-border-radius": w
      };
    }), d = t ? Ye("message", $(() => e.type[0]), s, {}) : void 0;
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
    }, (h = Aw(d, t, i)) && c ? f("div", {
      class: `${i}-message__icon ${i}-message__icon--${t}-type`
    }, f(ur, null, {
      default: () => h
    })) : null, f("div", {
      class: `${i}-message__content`
    }, pt(o)), r ? f(So, {
      clsPrefix: i,
      class: `${i}-message__close`,
      onClick: u,
      absolute: !0
    }) : null));
  }
});
function Aw(e, t, r) {
  if (typeof e == "function")
    return e();
  {
    const o = t === "loading" ? f(_n, {
      clsPrefix: r,
      strokeWidth: 24,
      scale: 0.85
    }) : zw[t]();
    return o ? f(bt, {
      clsPrefix: r,
      key: t
    }, {
      default: () => o
    }) : null;
  }
}
const Dw = ee({
  name: "MessageEnvironment",
  props: Object.assign(Object.assign({}, Nc), {
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
        internalKey: x
      } = e;
      c && c(), h && h(x), p && p();
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
    return f(fl, {
      appear: !0,
      onAfterLeave: this.handleAfterLeave,
      onLeave: this.onLeave
    }, {
      default: () => [this.show ? f($w, {
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
}), Ew = Object.assign(Object.assign({}, ve.props), {
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
}), Tw = ee({
  name: "MessageProvider",
  props: Ew,
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
    Ee(Lc, {
      props: e,
      mergedClsPrefixRef: t
    }), Ee(Ic, i);
    function a(d, u) {
      const c = pn(), h = bo(Object.assign(Object.assign({}, u), {
        content: d,
        key: c,
        destroy: () => {
          var x;
          (x = o.value[c]) === null || x === void 0 || x.hide();
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
    return f(_e, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e), this.messageList.length ? f(li, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, f("div", {
      class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass],
      key: "message-container",
      style: this.containerStyle
    }, this.messageList.map((o) => f(Dw, Object.assign({
      ref: (i) => {
        i && (this.messageRefs[o.key] = i);
      },
      internalKey: o.key,
      onInternalAfterLeave: this.handleAfterLeave
    }, ar(o, ["destroy"], void 0), {
      duration: o.duration === void 0 ? this.duration : o.duration,
      keepAliveOnHover: o.keepAliveOnHover === void 0 ? this.keepAliveOnHover : o.keepAliveOnHover,
      closable: o.closable === void 0 ? this.closable : o.closable
    }))))) : null);
  }
});
function Ow() {
  const e = ge(Ic, null);
  return e === null && In("use-message", "No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."), e;
}
const Mw = ee({
  name: "ModalEnvironment",
  props: Object.assign(Object.assign({}, Dc), {
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
    return f(Ec, Object.assign({}, this.$props, {
      show: i,
      onUpdateShow: e,
      onMaskClick: r,
      onEsc: o,
      onAfterLeave: t,
      internalAppear: !0,
      internalModal: !0
    }));
  }
}), Iw = {
  to: [String, Object]
}, Hc = ee({
  name: "ModalProvider",
  props: Iw,
  setup() {
    const e = I([]), t = {};
    function r(l = {}) {
      const s = pn(), d = bo(Object.assign(Object.assign({}, l), {
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
    return Ee($c, a), Ee(dw, {
      clickedRef: Ha(64),
      clickedPositionRef: Na()
    }), Ee(uw, e), Object.assign(Object.assign({}, a), {
      modalList: e,
      modalInstRefs: t,
      handleAfterLeave: o
    });
  },
  render() {
    var e, t;
    return f(_e, null, [this.modalList.map((r) => {
      var o;
      return f(Mw, ar(r, ["destroy"], {
        to: (o = r.to) !== null && o !== void 0 ? o : this.to,
        ref: (i) => {
          i === null ? delete this.modalInstRefs[`n-modal-${r.key}`] : this.modalInstRefs[`n-modal-${r.key}`] = i;
        },
        internalKey: r.key,
        onInternalAfterLeave: this.handleAfterLeave
      }));
    }), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)]);
  }
}), Lw = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px"
};
function Nw(e) {
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
    textColor3: x,
    borderRadius: v,
    fontWeightStrong: m,
    boxShadow2: b,
    lineHeight: g,
    fontSize: C
  } = e;
  return Object.assign(Object.assign({}, Lw), {
    borderRadius: v,
    lineHeight: g,
    fontSize: C,
    headerFontWeight: m,
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
    descriptionTextColor: x,
    actionTextColor: t,
    boxShadow: b
  });
}
const Hw = {
  name: "Notification",
  common: Ze,
  peers: {
    Scrollbar: Bo
  },
  self: Nw
}, Si = "n-notification-provider", jw = ee({
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
    } = ge(Si), o = I(null);
    return tt(() => {
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
    }, t ? f(cr, {
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      contentStyle: {
        overflow: "hidden"
      }
    }, e) : e);
  }
}), _w = {
  info: () => f(ri, null),
  success: () => f(cl, null),
  warning: () => f(gi, null),
  error: () => f(ul, null),
  default: () => null
}, Bl = {
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
}, Ww = Tn(Bl), Vw = ee({
  name: "Notification",
  props: Bl,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      mergedThemeRef: r,
      props: o
    } = ge(Si), {
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(), l = Pt("Notification", a, t), s = $(() => {
      const {
        type: u
      } = e, {
        self: {
          color: c,
          textColor: h,
          closeIconColor: p,
          closeIconColorHover: x,
          closeIconColorPressed: v,
          headerTextColor: m,
          descriptionTextColor: b,
          actionTextColor: g,
          borderRadius: C,
          headerFontWeight: S,
          boxShadow: w,
          lineHeight: k,
          fontSize: R,
          closeMargin: y,
          closeSize: B,
          width: F,
          padding: A,
          closeIconSize: K,
          closeBorderRadius: M,
          closeColorHover: n,
          closeColorPressed: D,
          titleFontSize: E,
          metaFontSize: H,
          descriptionFontSize: L,
          [Z("iconColor", u)]: V
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
        bottom: ie
      } = Nt(A);
      return {
        "--n-color": c,
        "--n-font-size": R,
        "--n-text-color": h,
        "--n-description-text-color": b,
        "--n-action-text-color": g,
        "--n-title-text-color": m,
        "--n-title-font-weight": S,
        "--n-bezier": U,
        "--n-bezier-ease-out": te,
        "--n-bezier-ease-in": X,
        "--n-border-radius": C,
        "--n-box-shadow": w,
        "--n-close-border-radius": M,
        "--n-close-color-hover": n,
        "--n-close-color-pressed": D,
        "--n-close-icon-color": p,
        "--n-close-icon-color-hover": x,
        "--n-close-icon-color-pressed": v,
        "--n-line-height": k,
        "--n-icon-color": V,
        "--n-close-margin": y,
        "--n-close-size": B,
        "--n-close-icon-size": K,
        "--n-width": F,
        "--n-padding-left": j,
        "--n-padding-right": q,
        "--n-padding-top": Y,
        "--n-padding-bottom": ie,
        "--n-title-font-size": E,
        "--n-meta-font-size": H,
        "--n-description-font-size": L
      };
    }), d = i ? Ye("notification", $(() => e.type[0]), s, o) : void 0;
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
    }, this.avatar ? pt(this.avatar) : this.type !== "default" ? f(bt, {
      clsPrefix: t
    }, {
      default: () => _w[this.type]()
    }) : null) : null, this.closable ? f(So, {
      clsPrefix: t,
      class: `${t}-notification__close`,
      onClick: this.handleCloseClick
    }) : null, f("div", {
      ref: "bodyRef",
      class: `${t}-notification-main`
    }, this.title ? f("div", {
      class: `${t}-notification-main__header`
    }, pt(this.title)) : null, this.description ? f("div", {
      class: `${t}-notification-main__description`
    }, pt(this.description)) : null, this.content ? f("pre", {
      class: `${t}-notification-main__content`
    }, pt(this.content)) : null, this.meta || this.action ? f("div", {
      class: `${t}-notification-main-footer`
    }, this.meta ? f("div", {
      class: `${t}-notification-main-footer__meta`
    }, pt(this.meta)) : null, this.action ? f("div", {
      class: `${t}-notification-main-footer__action`
    }, pt(this.action)) : null) : null)));
  }
}), Kw = Object.assign(Object.assign({}, Bl), {
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
}), Uw = ee({
  name: "NotificationEnvironment",
  props: Object.assign(Object.assign({}, Kw), {
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
    } = ge(Si), r = I(!0);
    let o = null;
    function i() {
      r.value = !1, o && window.clearTimeout(o);
    }
    function a(v) {
      t.value++, vt(() => {
        v.style.height = `${v.offsetHeight}px`, v.style.maxHeight = "0", v.style.transition = "none", v.offsetHeight, v.style.transition = "", v.style.maxHeight = v.style.height;
      });
    }
    function l(v) {
      t.value--, v.style.height = "", v.style.maxHeight = "";
      const {
        onAfterEnter: m,
        onAfterShow: b
      } = e;
      m && m(), b && b();
    }
    function s(v) {
      t.value++, v.style.maxHeight = `${v.offsetHeight}px`, v.style.height = `${v.offsetHeight}px`, v.offsetHeight;
    }
    function d(v) {
      const {
        onHide: m
      } = e;
      m && m(), v.style.maxHeight = "0", v.offsetHeight;
    }
    function u() {
      t.value--;
      const {
        onAfterLeave: v,
        onInternalAfterLeave: m,
        onAfterHide: b,
        internalKey: g
      } = e;
      v && v(), m(g), b && b();
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
    function x() {
      const {
        onClose: v
      } = e;
      v ? Promise.resolve(v()).then((m) => {
        m !== !1 && i();
      }) : i();
    }
    return Ft(() => {
      e.duration && (o = window.setTimeout(i, e.duration));
    }), {
      show: r,
      hide: i,
      handleClose: x,
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
    return f(jt, {
      name: "notification-transition",
      appear: !0,
      // convert to any since Element is not compatible with HTMLElement
      onBeforeEnter: this.handleBeforeEnter,
      onAfterEnter: this.handleAfterEnter,
      onBeforeLeave: this.handleBeforeLeave,
      onLeave: this.handleLeave,
      onAfterLeave: this.handleAfterLeave
    }, {
      default: () => this.show ? f(Vw, Object.assign({}, Sn(this.$props, Ww), {
        onClose: this.handleClose,
        onMouseenter: this.duration && this.keepAliveOnHover ? this.handleMouseenter : void 0,
        onMouseleave: this.duration && this.keepAliveOnHover ? this.handleMouseleave : void 0
      })) : null
    });
  }
}), qw = O([z("notification-container", `
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `, [O(">", [z("scrollbar", `
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [O(">", [z("scrollbar-container", `
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [z("scrollbar-content", `
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]), N("top, top-right, top-left", `
 top: 12px;
 `, [O("&.transitioning >", [z("scrollbar", [O(">", [z("scrollbar-container", `
 min-height: 100vh !important;
 `)])])])]), N("bottom, bottom-right, bottom-left", `
 bottom: 12px;
 `, [O(">", [z("scrollbar", [O(">", [z("scrollbar-container", [z("scrollbar-content", `
 padding-bottom: 12px;
 `)])])])]), z("notification-wrapper", `
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]), N("top, bottom", `
 left: 50%;
 transform: translateX(-50%);
 `, [z("notification-wrapper", [O("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: scale(0.85);
 `), O("&.notification-transition-leave-from, &.notification-transition-enter-to", `
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
 `, [Wo("top-right")]), N("top-left", `
 left: 0;
 `, [Wo("top-left")]), N("bottom-right", `
 right: 0;
 `, [Wo("bottom-right")]), N("bottom-left", `
 left: 0;
 `, [Wo("bottom-left")]), N("scrollable", [N("top-right", `
 top: 0;
 `), N("top-left", `
 top: 0;
 `), N("bottom-right", `
 bottom: 0;
 `), N("bottom-left", `
 bottom: 0;
 `)]), z("notification-wrapper", `
 margin-bottom: 12px;
 `, [O("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 opacity: 0;
 margin-top: 0 !important;
 margin-bottom: 0 !important;
 `), O("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 opacity: 1;
 `), O("&.notification-transition-leave-active", `
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 transform .3s var(--n-bezier-ease-in),
 max-height .3s var(--n-bezier),
 margin-top .3s linear,
 margin-bottom .3s linear,
 box-shadow .3s var(--n-bezier);
 `), O("&.notification-transition-enter-active", `
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
 `)]), N("closable", [z("notification-main", [O("> *:first-child", `
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
 `, [O("&:first-child", "margin: 0;")])])])])]);
function Wo(e) {
  const r = e.split("-")[1] === "left" ? "calc(-100%)" : "calc(100%)";
  return z("notification-wrapper", [O("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: translate(${r}, 0);
 `), O("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: translate(0, 0);
 `)]);
}
const jc = "n-notification-api", Gw = Object.assign(Object.assign({}, ve.props), {
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
}), Xw = ee({
  name: "NotificationProvider",
  props: Gw,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = I([]), o = {}, i = /* @__PURE__ */ new Set();
    function a(x) {
      const v = pn(), m = () => {
        i.add(v), o[v] && o[v].hide();
      }, b = bo(Object.assign(Object.assign({}, x), {
        key: v,
        destroy: m,
        hide: m,
        deactivate: m
      })), {
        max: g
      } = e;
      if (g && r.value.length - i.size >= g) {
        let C = !1, S = 0;
        for (const w of r.value) {
          if (!i.has(w.key)) {
            o[w.key] && (w.destroy(), C = !0);
            break;
          }
          S++;
        }
        C || r.value.splice(S, 1);
      }
      return r.value.push(b), b;
    }
    const l = ["info", "success", "warning", "error"].map((x) => (v) => a(Object.assign(Object.assign({}, v), {
      type: x
    })));
    function s(x) {
      i.delete(x), r.value.splice(r.value.findIndex((v) => v.key === x), 1);
    }
    const d = ve("Notification", "-notification", qw, Hw, e, t), u = {
      create: a,
      info: l[0],
      success: l[1],
      warning: l[2],
      error: l[3],
      open: h,
      destroyAll: p
    }, c = I(0);
    Ee(jc, u), Ee(Si, {
      props: e,
      mergedClsPrefixRef: t,
      mergedThemeRef: d,
      wipTransitionCountRef: c
    });
    function h(x) {
      return a(x);
    }
    function p() {
      Object.values(r.value).forEach((x) => {
        x.hide();
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
    return f(_e, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e), this.notificationList.length ? f(li, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, f(jw, {
      class: this.containerClass,
      style: this.containerStyle,
      scrollable: this.scrollable && o !== "top" && o !== "bottom",
      placement: o
    }, {
      default: () => this.notificationList.map((i) => f(Uw, Object.assign({
        ref: (a) => {
          const l = i.key;
          a === null ? delete this.notificationRefs[l] : this.notificationRefs[l] = a;
        }
      }, ar(i, ["destroy", "hide", "deactivate"]), {
        internalKey: i.key,
        onInternalAfterLeave: this.handleAfterLeave,
        keepAliveOnHover: i.keepAliveOnHover === void 0 ? this.keepAliveOnHover : i.keepAliveOnHover
      })))
    })) : null);
  }
});
function Yw() {
  const e = ge(jc, null);
  return e === null && In("use-notification", "No outer `n-notification-provider` found."), e;
}
const Zw = ee({
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
}), Jw = {
  message: Ow,
  notification: Yw,
  loadingBar: Bw,
  dialog: Rc,
  modal: Ac
};
function Qw({
  providersAndProps: e,
  configProviderProps: t
}) {
  let r = Rf(i);
  const o = {
    app: r
  };
  function i() {
    return f(Zu, se(t), {
      default: () => e.map(({
        type: s,
        Provider: d,
        props: u
      }) => f(d, se(u), {
        default: () => f(Zw, {
          onSetup: () => o[s] = Jw[s]()
        })
      }))
    });
  }
  let a;
  return Or && (a = document.createElement("div"), document.body.appendChild(a), r.mount(a)), Object.assign({
    unmount: () => {
      var s;
      if (r === null || a === null) {
        Rt("discrete", "unmount call no need because discrete app has been unmounted");
        return;
      }
      r.unmount(), (s = a.parentNode) === null || s === void 0 || s.removeChild(a), a = null, r = null;
    }
  }, o);
}
function _c(e, {
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
          Provider: Tw,
          props: r
        });
        break;
      case "notification":
        s.push({
          type: u,
          Provider: Xw,
          props: i
        });
        break;
      case "dialog":
        s.push({
          type: u,
          Provider: Tc,
          props: o
        });
        break;
      case "loadingBar":
        s.push({
          type: u,
          Provider: Sw,
          props: a
        });
        break;
      case "modal":
        s.push({
          type: u,
          Provider: Hc,
          props: l
        });
    }
  }), Qw({
    providersAndProps: s,
    configProviderProps: t
  });
}
const eS = {
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
function tS(e) {
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
  return Object.assign(Object.assign({}, eS), {
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
const Wc = {
  name: "Form",
  common: Ze,
  self: tS
}, nS = {
  iconSize: "22px"
};
function rS(e) {
  const {
    fontSize: t,
    warningColor: r
  } = e;
  return Object.assign(Object.assign({}, nS), {
    fontSize: t,
    iconColor: r
  });
}
const oS = {
  name: "Popconfirm",
  common: Ze,
  peers: {
    Button: xi,
    Popover: fr
  },
  self: rS
};
function iS(e) {
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
const aS = {
  name: "Spin",
  common: Ze,
  self: iS
}, lS = {
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
function sS(e) {
  const {
    primaryColor: t,
    opacityDisabled: r,
    borderRadius: o,
    textColor3: i
  } = e;
  return Object.assign(Object.assign({}, lS), {
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
const dS = {
  name: "Switch",
  common: Ze,
  self: sS
}, Ro = "n-form", Vc = "n-form-item-insts", uS = z("form", [N("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [z("form-item", {
  width: "auto",
  marginRight: "18px"
}, [O("&:last-child", {
  marginRight: 0
})])])]);
var cS = function(e, t, r, o) {
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
const fS = Object.assign(Object.assign({}, ve.props), {
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
}), hS = ee({
  name: "Form",
  props: fS,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e);
    ve("Form", "-form", uS, Wc, e, t);
    const r = {}, o = I(void 0), i = (d) => {
      const u = o.value;
      (u === void 0 || d >= u) && (o.value = d);
    };
    function a(d) {
      return cS(this, arguments, void 0, function* (u, c = () => !0) {
        return yield new Promise((h, p) => {
          const x = [];
          for (const v of Tn(r)) {
            const m = r[v];
            for (const b of m)
              b.path && x.push(b.internalValidate(null, c));
          }
          Promise.all(x).then((v) => {
            const m = v.some((C) => !C.valid), b = [], g = [];
            v.forEach((C) => {
              var S, w;
              !((S = C.errors) === null || S === void 0) && S.length && b.push(C.errors), !((w = C.warnings) === null || w === void 0) && w.length && g.push(C.warnings);
            }), u && u(b.length ? b : void 0, {
              warnings: g.length ? g : void 0
            }), m ? p(b.length ? b : void 0) : h({
              warnings: g.length ? g : void 0
            });
          });
        });
      });
    }
    function l() {
      for (const d of Tn(r)) {
        const u = r[d];
        for (const c of u)
          c.restoreValidation();
      }
    }
    return Ee(Ro, {
      props: e,
      maxChildLabelWidthRef: o,
      deriveMaxChildLabelWidth: i
    }), Ee(Vc, {
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
function Xn() {
  return Xn = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Xn.apply(this, arguments);
}
function vS(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, go(e, t);
}
function Fa(e) {
  return Fa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Fa(e);
}
function go(e, t) {
  return go = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, go(e, t);
}
function pS() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function qo(e, t, r) {
  return pS() ? qo = Reflect.construct.bind() : qo = function(i, a, l) {
    var s = [null];
    s.push.apply(s, a);
    var d = Function.bind.apply(i, s), u = new d();
    return l && go(u, l.prototype), u;
  }, qo.apply(null, arguments);
}
function gS(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Pa(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Pa = function(o) {
    if (o === null || !gS(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(o)) return t.get(o);
      t.set(o, i);
    }
    function i() {
      return qo(o, arguments, Fa(this).constructor);
    }
    return i.prototype = Object.create(o.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), go(i, o);
  }, Pa(e);
}
var mS = /%[sdj%]/g, Kc = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Kc = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(o) {
    return typeof o == "string";
  }) && console.warn(t, r);
});
function za(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(r) {
    var o = r.field;
    t[o] = t[o] || [], t[o].push(r);
  }), t;
}
function Yt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  var i = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var l = e.replace(mS, function(s) {
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
function bS(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Bt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || bS(t) && typeof e == "string" && !e);
}
function xS(e, t, r) {
  var o = [], i = 0, a = e.length;
  function l(s) {
    o.push.apply(o, s || []), i++, i === a && r(o);
  }
  e.forEach(function(s) {
    t(s, l);
  });
}
function sd(e, t, r) {
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
function CS(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var dd = /* @__PURE__ */ function(e) {
  vS(t, e);
  function t(r, o) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = r, i.fields = o, i;
  }
  return t;
}(/* @__PURE__ */ Pa(Error));
function yS(e, t, r, o, i) {
  if (t.first) {
    var a = new Promise(function(p, x) {
      var v = function(g) {
        return o(g), g.length ? x(new dd(g, za(g))) : p(i);
      }, m = CS(e);
      sd(m, r, v);
    });
    return a.catch(function(p) {
      return p;
    }), a;
  }
  var l = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), d = s.length, u = 0, c = [], h = new Promise(function(p, x) {
    var v = function(b) {
      if (c.push.apply(c, b), u++, u === d)
        return o(c), c.length ? x(new dd(c, za(c))) : p(i);
    };
    s.length || (o(c), p(i)), s.forEach(function(m) {
      var b = e[m];
      l.indexOf(m) !== -1 ? sd(b, r, v) : xS(b, r, v);
    });
  });
  return h.catch(function(p) {
    return p;
  }), h;
}
function wS(e) {
  return !!(e && e.message !== void 0);
}
function SS(e, t) {
  for (var r = e, o = 0; o < t.length; o++) {
    if (r == null)
      return r;
    r = r[t[o]];
  }
  return r;
}
function ud(e, t) {
  return function(r) {
    var o;
    return e.fullFields ? o = SS(t, e.fullFields) : o = t[r.field || e.fullField], wS(r) ? (r.field = r.field || e.fullField, r.fieldValue = o, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: o,
      field: r.field || e.fullField
    };
  };
}
function cd(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = t[r];
        typeof o == "object" && typeof e[r] == "object" ? e[r] = Xn({}, e[r], o) : e[r] = o;
      }
  }
  return e;
}
var Uc = function(t, r, o, i, a, l) {
  t.required && (!o.hasOwnProperty(t.field) || Bt(r, l || t.type)) && i.push(Yt(a.messages.required, t.fullField));
}, BS = function(t, r, o, i, a) {
  (/^\s+$/.test(r) || r === "") && i.push(Yt(a.messages.whitespace, t.fullField));
}, Vo, kS = function() {
  if (Vo)
    return Vo;
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
  d.v4 = function(S) {
    return S && S.exact ? l : new RegExp("" + t(S) + r + t(S), "g");
  }, d.v6 = function(S) {
    return S && S.exact ? s : new RegExp("" + t(S) + i + t(S), "g");
  };
  var u = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", h = d.v4().source, p = d.v6().source, x = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", v = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", m = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", g = '(?:[/?#][^\\s"]*)?', C = "(?:" + u + "|www\\.)" + c + "(?:localhost|" + h + "|" + p + "|" + x + v + m + ")" + b + g;
  return Vo = new RegExp("(?:^" + C + "$)", "i"), Vo;
}, fd = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Xr = {
  integer: function(t) {
    return Xr.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Xr.number(t) && !Xr.integer(t);
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
    return typeof t == "object" && !Xr.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(fd.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(kS());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(fd.hex);
  }
}, RS = function(t, r, o, i, a) {
  if (t.required && r === void 0) {
    Uc(t, r, o, i, a);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  l.indexOf(s) > -1 ? Xr[s](r) || i.push(Yt(a.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && i.push(Yt(a.messages.types[s], t.fullField, t.type));
}, FS = function(t, r, o, i, a) {
  var l = typeof t.len == "number", s = typeof t.min == "number", d = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, h = null, p = typeof r == "number", x = typeof r == "string", v = Array.isArray(r);
  if (p ? h = "number" : x ? h = "string" : v && (h = "array"), !h)
    return !1;
  v && (c = r.length), x && (c = r.replace(u, "_").length), l ? c !== t.len && i.push(Yt(a.messages[h].len, t.fullField, t.len)) : s && !d && c < t.min ? i.push(Yt(a.messages[h].min, t.fullField, t.min)) : d && !s && c > t.max ? i.push(Yt(a.messages[h].max, t.fullField, t.max)) : s && d && (c < t.min || c > t.max) && i.push(Yt(a.messages[h].range, t.fullField, t.min, t.max));
}, br = "enum", PS = function(t, r, o, i, a) {
  t[br] = Array.isArray(t[br]) ? t[br] : [], t[br].indexOf(r) === -1 && i.push(Yt(a.messages[br], t.fullField, t[br].join(", ")));
}, zS = function(t, r, o, i, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || i.push(Yt(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var l = new RegExp(t.pattern);
      l.test(r) || i.push(Yt(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, Me = {
  required: Uc,
  whitespace: BS,
  type: RS,
  range: FS,
  enum: PS,
  pattern: zS
}, $S = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r, "string") && !t.required)
      return o();
    Me.required(t, r, i, l, a, "string"), Bt(r, "string") || (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a), Me.pattern(t, r, i, l, a), t.whitespace === !0 && Me.whitespace(t, r, i, l, a));
  }
  o(l);
}, AS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && Me.type(t, r, i, l, a);
  }
  o(l);
}, DS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a));
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
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), Bt(r) || Me.type(t, r, i, l, a);
  }
  o(l);
}, OS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a));
  }
  o(l);
}, MS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a));
  }
  o(l);
}, IS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return o();
    Me.required(t, r, i, l, a, "array"), r != null && (Me.type(t, r, i, l, a), Me.range(t, r, i, l, a));
  }
  o(l);
}, LS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && Me.type(t, r, i, l, a);
  }
  o(l);
}, NS = "enum", HS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a), r !== void 0 && Me[NS](t, r, i, l, a);
  }
  o(l);
}, jS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r, "string") && !t.required)
      return o();
    Me.required(t, r, i, l, a), Bt(r, "string") || Me.pattern(t, r, i, l, a);
  }
  o(l);
}, _S = function(t, r, o, i, a) {
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
}, WS = function(t, r, o, i, a) {
  var l = [], s = Array.isArray(r) ? "array" : typeof r;
  Me.required(t, r, i, l, a, s), o(l);
}, ra = function(t, r, o, i, a) {
  var l = t.type, s = [], d = t.required || !t.required && i.hasOwnProperty(t.field);
  if (d) {
    if (Bt(r, l) && !t.required)
      return o();
    Me.required(t, r, i, s, a, l), Bt(r, l) || Me.type(t, r, i, s, a);
  }
  o(s);
}, VS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (Bt(r) && !t.required)
      return o();
    Me.required(t, r, i, l, a);
  }
  o(l);
}, oo = {
  string: $S,
  method: AS,
  number: DS,
  boolean: ES,
  regexp: TS,
  integer: OS,
  float: MS,
  array: IS,
  object: LS,
  enum: HS,
  pattern: jS,
  date: _S,
  url: ra,
  hex: ra,
  email: ra,
  required: WS,
  any: VS
};
function $a() {
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
var Aa = $a(), Ar = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = Aa, this.define(r);
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
    return o && (this._messages = cd($a(), o)), this._messages;
  }, t.validate = function(o, i, a) {
    var l = this;
    i === void 0 && (i = {}), a === void 0 && (a = function() {
    });
    var s = o, d = i, u = a;
    if (typeof d == "function" && (u = d, d = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function c(m) {
      var b = [], g = {};
      function C(w) {
        if (Array.isArray(w)) {
          var k;
          b = (k = b).concat.apply(k, w);
        } else
          b.push(w);
      }
      for (var S = 0; S < m.length; S++)
        C(m[S]);
      b.length ? (g = za(b), u(b, g)) : u(null, s);
    }
    if (d.messages) {
      var h = this.messages();
      h === Aa && (h = $a()), cd(h, d.messages), d.messages = h;
    } else
      d.messages = this.messages();
    var p = {}, x = d.keys || Object.keys(this.rules);
    x.forEach(function(m) {
      var b = l.rules[m], g = s[m];
      b.forEach(function(C) {
        var S = C;
        typeof S.transform == "function" && (s === o && (s = Xn({}, s)), g = s[m] = S.transform(g)), typeof S == "function" ? S = {
          validator: S
        } : S = Xn({}, S), S.validator = l.getValidationMethod(S), S.validator && (S.field = m, S.fullField = S.fullField || m, S.type = l.getType(S), p[m] = p[m] || [], p[m].push({
          rule: S,
          value: g,
          source: s,
          field: m
        }));
      });
    });
    var v = {};
    return yS(p, d, function(m, b) {
      var g = m.rule, C = (g.type === "object" || g.type === "array") && (typeof g.fields == "object" || typeof g.defaultField == "object");
      C = C && (g.required || !g.required && m.value), g.field = m.field;
      function S(R, y) {
        return Xn({}, y, {
          fullField: g.fullField + "." + R,
          fullFields: g.fullFields ? [].concat(g.fullFields, [R]) : [R]
        });
      }
      function w(R) {
        R === void 0 && (R = []);
        var y = Array.isArray(R) ? R : [R];
        !d.suppressWarning && y.length && e.warning("async-validator:", y), y.length && g.message !== void 0 && (y = [].concat(g.message));
        var B = y.map(ud(g, s));
        if (d.first && B.length)
          return v[g.field] = 1, b(B);
        if (!C)
          b(B);
        else {
          if (g.required && !m.value)
            return g.message !== void 0 ? B = [].concat(g.message).map(ud(g, s)) : d.error && (B = [d.error(g, Yt(d.messages.required, g.field))]), b(B);
          var F = {};
          g.defaultField && Object.keys(m.value).map(function(M) {
            F[M] = g.defaultField;
          }), F = Xn({}, F, m.rule.fields);
          var A = {};
          Object.keys(F).forEach(function(M) {
            var n = F[M], D = Array.isArray(n) ? n : [n];
            A[M] = D.map(S.bind(null, M));
          });
          var K = new e(A);
          K.messages(d.messages), m.rule.options && (m.rule.options.messages = d.messages, m.rule.options.error = d.error), K.validate(m.value, m.rule.options || d, function(M) {
            var n = [];
            B && B.length && n.push.apply(n, B), M && M.length && n.push.apply(n, M), b(n.length ? n : null);
          });
        }
      }
      var k;
      if (g.asyncValidator)
        k = g.asyncValidator(g, m.value, w, m.source, d);
      else if (g.validator) {
        try {
          k = g.validator(g, m.value, w, m.source, d);
        } catch (R) {
          console.error == null || console.error(R), d.suppressValidatorError || setTimeout(function() {
            throw R;
          }, 0), w(R.message);
        }
        k === !0 ? w() : k === !1 ? w(typeof g.message == "function" ? g.message(g.fullField || g.field) : g.message || (g.fullField || g.field) + " fails") : k instanceof Array ? w(k) : k instanceof Error && w(k.message);
      }
      k && k.then && k.then(function() {
        return w();
      }, function(R) {
        return w(R);
      });
    }, function(m) {
      c(m);
    }, s);
  }, t.getType = function(o) {
    if (o.type === void 0 && o.pattern instanceof RegExp && (o.type = "pattern"), typeof o.validator != "function" && o.type && !oo.hasOwnProperty(o.type))
      throw new Error(Yt("Unknown rule type %s", o.type));
    return o.type || "string";
  }, t.getValidationMethod = function(o) {
    if (typeof o.validator == "function")
      return o.validator;
    var i = Object.keys(o), a = i.indexOf("message");
    return a !== -1 && i.splice(a, 1), i.length === 1 && i[0] === "required" ? oo.required : oo[this.getType(o)] || void 0;
  }, e;
}();
Ar.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  oo[t] = r;
};
Ar.warning = Kc;
Ar.messages = Aa;
Ar.validators = oo;
const {
  cubicBezierEaseInOut: hd
} = Hn;
function KS({
  name: e = "fade-down",
  fromOffset: t = "-4px",
  enterDuration: r = ".3s",
  leaveDuration: o = ".3s",
  enterCubicBezier: i = hd,
  leaveCubicBezier: a = hd
} = {}) {
  return [O(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0,
    transform: `translateY(${t})`
  }), O(`&.${e}-transition-enter-to, &.${e}-transition-leave-from`, {
    opacity: 1,
    transform: "translateY(0)"
  }), O(`&.${e}-transition-leave-active`, {
    transition: `opacity ${o} ${a}, transform ${o} ${a}`
  }), O(`&.${e}-transition-enter-active`, {
    transition: `opacity ${r} ${i}, transform ${r} ${i}`
  })];
}
const US = z("form-item", `
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
 `, [O("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), z("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [N("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), N("error", {
  color: "var(--n-feedback-text-color-error)"
}), KS({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
function qS(e) {
  const t = ge(Ro, null);
  return {
    mergedSize: $(() => e.size !== void 0 ? e.size : (t == null ? void 0 : t.props.size) !== void 0 ? t.props.size : "medium")
  };
}
function GS(e) {
  const t = ge(Ro, null), r = $(() => {
    const {
      labelPlacement: v
    } = e;
    return v !== void 0 ? v : t != null && t.props.labelPlacement ? t.props.labelPlacement : "top";
  }), o = $(() => r.value === "left" && (e.labelWidth === "auto" || (t == null ? void 0 : t.props.labelWidth) === "auto")), i = $(() => {
    if (r.value === "top") return;
    const {
      labelWidth: v
    } = e;
    if (v !== void 0 && v !== "auto")
      return Ct(v);
    if (o.value) {
      const m = t == null ? void 0 : t.maxChildLabelWidthRef.value;
      return m !== void 0 ? Ct(m) : void 0;
    }
    if ((t == null ? void 0 : t.props.labelWidth) !== void 0)
      return Ct(t.props.labelWidth);
  }), a = $(() => {
    const {
      labelAlign: v
    } = e;
    if (v) return v;
    if (t != null && t.props.labelAlign) return t.props.labelAlign;
  }), l = $(() => {
    var v;
    return [(v = e.labelProps) === null || v === void 0 ? void 0 : v.style, e.labelStyle, {
      width: i.value
    }];
  }), s = $(() => {
    const {
      showRequireMark: v
    } = e;
    return v !== void 0 ? v : t == null ? void 0 : t.props.showRequireMark;
  }), d = $(() => {
    const {
      requireMarkPlacement: v
    } = e;
    return v !== void 0 ? v : (t == null ? void 0 : t.props.requireMarkPlacement) || "right";
  }), u = I(!1), c = I(!1), h = $(() => {
    const {
      validationStatus: v
    } = e;
    if (v !== void 0) return v;
    if (u.value) return "error";
    if (c.value) return "warning";
  }), p = $(() => {
    const {
      showFeedback: v
    } = e;
    return v !== void 0 ? v : (t == null ? void 0 : t.props.showFeedback) !== void 0 ? t.props.showFeedback : !0;
  }), x = $(() => {
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
    mergedShowLabel: x,
    isAutoLabelWidth: o
  };
}
function XS(e) {
  const t = ge(Ro, null), r = $(() => {
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
        const c = vo(d, u);
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
var vd = function(e, t, r, o) {
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
const YS = Object.assign(Object.assign({}, ve.props), {
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
function pd(e, t) {
  return (...r) => {
    try {
      const o = e(...r);
      return !t && (typeof o == "boolean" || o instanceof Error || Array.isArray(o)) || o != null && o.then ? o : (o === void 0 || Rt("form-item/validate", `You return a ${typeof o} typed value in the validator method, which is not recommended. Please use ${t ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`), !0);
    } catch (o) {
      Rt("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(o);
      return;
    }
  };
}
const gd = ee({
  name: "FormItem",
  props: YS,
  setup(e) {
    yh(Vc, "formItems", oe(e, "path"));
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ge(Ro, null), i = qS(e), a = GS(e), {
      validationErrored: l,
      validationWarned: s
    } = a, {
      mergedRequired: d,
      mergedRules: u
    } = XS(e), {
      mergedSize: c
    } = i, {
      mergedLabelPlacement: h,
      mergedLabelAlign: p,
      mergedRequireMarkPlacement: x
    } = a, v = I([]), m = I(pn()), b = o ? oe(o.props, "disabled") : I(!1), g = ve("Form", "-form-item", US, Wc, e, t);
    He(oe(e, "path"), () => {
      e.ignorePathChange || C();
    });
    function C() {
      v.value = [], l.value = !1, s.value = !1, e.feedback && (m.value = pn());
    }
    const S = (...D) => vd(this, [...D], void 0, function* (E = null, H = () => !0, L = {
      suppressWarning: !0
    }) {
      const {
        path: V
      } = e;
      L ? L.first || (L.first = e.first) : L = {};
      const {
        value: te
      } = u, X = o ? vo(o.props.model, V || "") : void 0, U = {}, j = {}, q = (E ? te.filter((be) => Array.isArray(be.trigger) ? be.trigger.includes(E) : be.trigger === E) : te).filter(H).map((be, Fe) => {
        const Pe = Object.assign({}, be);
        if (Pe.validator && (Pe.validator = pd(Pe.validator, !1)), Pe.asyncValidator && (Pe.asyncValidator = pd(Pe.asyncValidator, !0)), Pe.renderMessage) {
          const lt = `__renderMessage__${Fe}`;
          j[lt] = Pe.message, Pe.message = lt, U[lt] = Pe.renderMessage;
        }
        return Pe;
      }), Y = q.filter((be) => be.level !== "warning"), ie = q.filter((be) => be.level === "warning"), ae = {
        valid: !0,
        errors: void 0,
        warnings: void 0
      };
      if (!q.length) return ae;
      const fe = V ?? "__n_no_path__", we = new Ar({
        [fe]: Y
      }), G = new Ar({
        [fe]: ie
      }), {
        validateMessages: ue
      } = (o == null ? void 0 : o.props) || {};
      ue && (we.messages(ue), G.messages(ue));
      const Re = (be) => {
        v.value = be.map((Fe) => {
          const Pe = (Fe == null ? void 0 : Fe.message) || "";
          return {
            key: Pe,
            render: () => Pe.startsWith("__renderMessage__") ? U[Pe]() : Pe
          };
        }), be.forEach((Fe) => {
          var Pe;
          !((Pe = Fe.message) === null || Pe === void 0) && Pe.startsWith("__renderMessage__") && (Fe.message = j[Fe.message]);
        });
      };
      if (Y.length) {
        const be = yield new Promise((Fe) => {
          we.validate({
            [fe]: X
          }, L, Fe);
        });
        be != null && be.length && (ae.valid = !1, ae.errors = be, Re(be));
      }
      if (ie.length && !ae.errors) {
        const be = yield new Promise((Fe) => {
          G.validate({
            [fe]: X
          }, L, Fe);
        });
        be != null && be.length && (Re(be), ae.warnings = be);
      }
      return !ae.errors && !ae.warnings ? C() : (l.value = !!ae.errors, s.value = !!ae.warnings), ae;
    });
    function w() {
      S("blur");
    }
    function k() {
      S("change");
    }
    function R() {
      S("focus");
    }
    function y() {
      S("input");
    }
    function B(D, E) {
      return vd(this, void 0, void 0, function* () {
        let H, L, V, te;
        return typeof D == "string" ? (H = D, L = E) : D !== null && typeof D == "object" && (H = D.trigger, L = D.callback, V = D.shouldRuleBeApplied, te = D.options), yield new Promise((X, U) => {
          S(H, V, te).then(({
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
    Ee(ca, {
      path: oe(e, "path"),
      disabled: b,
      mergedSize: i.mergedSize,
      mergedValidationStatus: a.mergedValidationStatus,
      restoreValidation: C,
      handleContentBlur: w,
      handleContentChange: k,
      handleContentFocus: R,
      handleContentInput: y
    });
    const F = {
      validate: B,
      restoreValidation: C,
      internalValidate: S
    }, A = I(null);
    Ft(() => {
      if (!a.isAutoLabelWidth.value) return;
      const D = A.value;
      if (D !== null) {
        const E = D.style.whiteSpace;
        D.style.whiteSpace = "nowrap", D.style.width = "", o == null || o.deriveMaxChildLabelWidth(Number(getComputedStyle(D).width.slice(0, -2))), D.style.whiteSpace = E;
      }
    });
    const K = $(() => {
      var D;
      const {
        value: E
      } = c, {
        value: H
      } = h, L = H === "top" ? "vertical" : "horizontal", {
        common: {
          cubicBezierEaseInOut: V
        },
        self: {
          labelTextColor: te,
          asteriskColor: X,
          lineHeight: U,
          feedbackTextColor: j,
          feedbackTextColorWarning: q,
          feedbackTextColorError: Y,
          feedbackPadding: ie,
          labelFontWeight: ae,
          [Z("labelHeight", E)]: fe,
          [Z("blankHeight", E)]: we,
          [Z("feedbackFontSize", E)]: G,
          [Z("feedbackHeight", E)]: ue,
          [Z("labelPadding", L)]: Re,
          [Z("labelTextAlign", L)]: be,
          [Z(Z("labelFontSize", H), E)]: Fe
        }
      } = g.value;
      let Pe = (D = p.value) !== null && D !== void 0 ? D : be;
      return H === "top" && (Pe = Pe === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": V,
        "--n-line-height": U,
        "--n-blank-height": we,
        "--n-label-font-size": Fe,
        "--n-label-text-align": Pe,
        "--n-label-height": fe,
        "--n-label-padding": Re,
        "--n-label-font-weight": ae,
        "--n-asterisk-color": X,
        "--n-label-text-color": te,
        "--n-feedback-padding": ie,
        "--n-feedback-font-size": G,
        "--n-feedback-height": ue,
        "--n-feedback-text-color": j,
        "--n-feedback-text-color-warning": q,
        "--n-feedback-text-color-error": Y
      };
    }), M = r ? Ye("form-item", $(() => {
      var D;
      return `${c.value[0]}${h.value[0]}${((D = p.value) === null || D === void 0 ? void 0 : D[0]) || ""}`;
    }), K, e) : void 0, n = $(() => h.value === "left" && x.value === "left" && p.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: A,
      mergedClsPrefix: t,
      mergedRequired: d,
      feedbackId: m,
      renderExplains: v,
      reverseColSpace: n
    }, a), i), F), {
      cssVars: r ? void 0 : K,
      themeClass: M == null ? void 0 : M.themeClass,
      onRender: M == null ? void 0 : M.onRender
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
    }, f(jt, {
      name: "fade-down-transition",
      mode: "out-in"
    }, {
      default: () => {
        const {
          mergedValidationStatus: d
        } = this;
        return je(e.feedback, (u) => {
          var c;
          const {
            feedback: h
          } = this, p = u || h ? f("div", {
            key: "__feedback__",
            class: `${t}-form-item-feedback__line`
          }, u || h) : this.renderExplains.length ? (c = this.renderExplains) === null || c === void 0 ? void 0 : c.map(({
            key: x,
            render: v
          }) => f("div", {
            key: x,
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
function ZS(e) {
  const {
    primaryColor: t,
    baseColor: r
  } = e;
  return {
    color: t,
    iconColor: r
  };
}
const JS = {
  name: "IconWrapper",
  common: Ze,
  self: ZS
}, QS = z("icon-wrapper", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`), e2 = Object.assign(Object.assign({}, ve.props), {
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
}), t2 = ee({
  name: "IconWrapper",
  props: e2,
  setup(e, {
    slots: t
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("IconWrapper", "-icon-wrapper", QS, JS, e, r), a = $(() => {
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
}), qc = "n-popconfirm", Gc = {
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
}, md = Tn(Gc), n2 = ee({
  name: "NPopconfirmPanel",
  props: Gc,
  setup(e) {
    const {
      localeRef: t
    } = er("Popconfirm"), {
      inlineThemeDisabled: r
    } = Ae(), {
      mergedClsPrefixRef: o,
      mergedThemeRef: i,
      props: a
    } = ge(qc), l = $(() => {
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
    }), s = r ? Ye("popconfirm-panel", void 0, l, a) : void 0;
    return Object.assign(Object.assign({}, er("Popconfirm")), {
      mergedClsPrefix: o,
      cssVars: r ? void 0 : l,
      localizedPositiveText: $(() => e.positiveText || t.value.positiveText),
      localizedNegativeText: $(() => e.negativeText || t.value.negativeText),
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
    } = this, i = Zt(o.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && f(nr, Object.assign({
      size: "small",
      onClick: this.handleNegativeClick
    }, this.negativeButtonProps), {
      default: () => this.localizedNegativeText
    }), this.positiveText !== null && f(nr, Object.assign({
      size: "small",
      type: "primary",
      onClick: this.handlePositiveClick
    }, this.positiveButtonProps), {
      default: () => this.localizedPositiveText
    })]);
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      class: [`${t}-popconfirm__panel`, this.themeClass],
      style: this.cssVars
    }, je(o.default, (a) => r || a ? f("div", {
      class: `${t}-popconfirm__body`
    }, r ? f("div", {
      class: `${t}-popconfirm__icon`
    }, Zt(o.icon, () => [f(bt, {
      clsPrefix: t
    }, {
      default: () => f(gi, null)
    })])) : null, a) : null), i ? f("div", {
      class: [`${t}-popconfirm__action`]
    }, i) : null);
  }
}), r2 = z("popconfirm", [T("body", `
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
 `, [O("&:not(:first-child)", "margin-top: 8px"), z("button", [O("&:not(:last-child)", "margin-right: 8px;")])])]), o2 = Object.assign(Object.assign(Object.assign({}, ve.props), tr), {
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
}), i2 = ee({
  name: "Popconfirm",
  props: o2,
  slots: Object,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(), r = ve("Popconfirm", "-popconfirm", r2, oS, e, t), o = I(null);
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
    return Ee(qc, {
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
    return f(hr, ar(t, md, {
      theme: r.peers.Popover,
      themeOverrides: r.peerOverrides.Popover,
      internalExtraClass: ["popconfirm"],
      ref: "popoverInstRef"
    }), {
      trigger: e.trigger,
      default: () => {
        const o = Sn(t, md);
        return f(n2, Object.assign(Object.assign({}, o), {
          onPositiveClick: this.handlePositiveClick,
          onNegativeClick: this.handleNegativeClick
        }), e);
      }
    });
  }
}), a2 = O([O("@keyframes spin-rotate", `
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
 `, [mi()])]), z("spin-body", `
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
 `)])]), l2 = {
  small: 20,
  medium: 18,
  large: 16
}, s2 = Object.assign(Object.assign({}, ve.props), {
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
}), Xc = ee({
  name: "Spin",
  props: s2,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && tt(() => {
      e.spinning !== void 0 && at("spin", "`spinning` is deprecated, please use `show` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Spin", "-spin", a2, aS, e, t), i = $(() => {
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
        textColor: x
      } = c, v = typeof d == "number" ? xt(d) : c[Z("size", d)];
      return {
        "--n-bezier": u,
        "--n-opacity-spinning": h,
        "--n-size": v,
        "--n-color": p,
        "--n-text-color": x
      };
    }), a = r ? Ye("spin", $(() => {
      const {
        size: d
      } = e;
      return typeof d == "number" ? String(d) : d[0];
    }), i, e) : void 0, l = ja(e, ["spinning", "show"]), s = I(!1);
    return tt((d) => {
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
        return l2[typeof u == "number" ? "medium" : u];
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
    }, f(_n, {
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
    }, r), f(jt, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? s : null
    })) : s;
  }
}), d2 = z("switch", `
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
 `, [Xt({
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
 `), O("&:focus", [T("rail", `
 box-shadow: var(--n-box-shadow-focus);
 `)]), N("round", [T("rail", "border-radius: calc(var(--n-rail-height) / 2);", [T("button", "border-radius: calc(var(--n-button-height) / 2);")])]), Xe("disabled", [Xe("icon", [N("rubber-band", [N("pressed", [T("rail", [T("button", "max-width: var(--n-button-width-pressed);")])]), T("rail", [O("&:active", [T("button", "max-width: var(--n-button-width-pressed);")])]), N("active", [N("pressed", [T("rail", [T("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]), T("rail", [O("&:active", [T("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]), N("active", [T("rail", [T("button", "left: calc(100% - var(--n-button-width) - var(--n-offset))")])]), T("rail", `
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
 `, [Xt()]), T("button", `
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
 `)])]), u2 = Object.assign(Object.assign({}, ve.props), {
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
let Ur;
const c2 = ee({
  name: "Switch",
  props: u2,
  slots: Object,
  setup(e) {
    process.env.NODE_ENV !== "production" && tt(() => {
      e.onChange && at("switch", "`on-change` is deprecated, please use `on-update:value` instead.");
    }), Ur === void 0 && (typeof CSS < "u" ? typeof CSS.supports < "u" ? Ur = CSS.supports("width", "max(1px)") : Ur = !1 : Ur = !0);
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Switch", "-switch", d2, dS, e, t), i = Ln(e), {
      mergedSizeRef: a,
      mergedDisabledRef: l
    } = i, s = I(e.defaultValue), d = oe(e, "value"), u = Mt(d, s), c = $(() => u.value === e.checkedValue), h = I(!1), p = I(!1), x = $(() => {
      const {
        railStyle: B
      } = e;
      if (B)
        return B({
          focused: p.value,
          checked: c.value
        });
    });
    function v(B) {
      const {
        "onUpdate:value": F,
        onChange: A,
        onUpdateValue: K
      } = e, {
        nTriggerFormInput: M,
        nTriggerFormChange: n
      } = i;
      F && ne(F, B), K && ne(K, B), A && ne(A, B), s.value = B, M(), n();
    }
    function m() {
      const {
        nTriggerFormFocus: B
      } = i;
      B();
    }
    function b() {
      const {
        nTriggerFormBlur: B
      } = i;
      B();
    }
    function g() {
      e.loading || l.value || (u.value !== e.checkedValue ? v(e.checkedValue) : v(e.uncheckedValue));
    }
    function C() {
      p.value = !0, m();
    }
    function S() {
      p.value = !1, b(), h.value = !1;
    }
    function w(B) {
      e.loading || l.value || B.key === " " && (u.value !== e.checkedValue ? v(e.checkedValue) : v(e.uncheckedValue), h.value = !1);
    }
    function k(B) {
      e.loading || l.value || B.key === " " && (B.preventDefault(), h.value = !0);
    }
    const R = $(() => {
      const {
        value: B
      } = a, {
        self: {
          opacityDisabled: F,
          railColor: A,
          railColorActive: K,
          buttonBoxShadow: M,
          buttonColor: n,
          boxShadowFocus: D,
          loadingColor: E,
          textColor: H,
          iconColor: L,
          [Z("buttonHeight", B)]: V,
          [Z("buttonWidth", B)]: te,
          [Z("buttonWidthPressed", B)]: X,
          [Z("railHeight", B)]: U,
          [Z("railWidth", B)]: j,
          [Z("railBorderRadius", B)]: q,
          [Z("buttonBorderRadius", B)]: Y
        },
        common: {
          cubicBezierEaseInOut: ie
        }
      } = o.value;
      let ae, fe, we;
      return Ur ? (ae = `calc((${U} - ${V}) / 2)`, fe = `max(${U}, ${V})`, we = `max(${j}, calc(${j} + ${V} - ${U}))`) : (ae = xt((At(U) - At(V)) / 2), fe = xt(Math.max(At(U), At(V))), we = At(U) > At(V) ? j : xt(At(j) + At(V) - At(U))), {
        "--n-bezier": ie,
        "--n-button-border-radius": Y,
        "--n-button-box-shadow": M,
        "--n-button-color": n,
        "--n-button-width": te,
        "--n-button-width-pressed": X,
        "--n-button-height": V,
        "--n-height": fe,
        "--n-offset": ae,
        "--n-opacity-disabled": F,
        "--n-rail-border-radius": q,
        "--n-rail-color": A,
        "--n-rail-color-active": K,
        "--n-rail-height": U,
        "--n-rail-width": j,
        "--n-width": we,
        "--n-box-shadow-focus": D,
        "--n-loading-color": E,
        "--n-text-color": H,
        "--n-icon-color": L
      };
    }), y = r ? Ye("switch", $(() => a.value[0]), R, e) : void 0;
    return {
      handleClick: g,
      handleBlur: S,
      handleFocus: C,
      handleKeyup: w,
      handleKeydown: k,
      mergedRailStyle: x,
      pressed: h,
      mergedClsPrefix: t,
      mergedValue: u,
      checked: c,
      mergedDisabled: l,
      cssVars: r ? void 0 : R,
      themeClass: y == null ? void 0 : y.themeClass,
      onRender: y == null ? void 0 : y.onRender
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
    } = a, h = !(Sr(d) && Sr(u) && Sr(c));
    return f("div", {
      role: "switch",
      "aria-checked": r,
      class: [`${e}-switch`, this.themeClass, h && `${e}-switch--icon`, r && `${e}-switch--active`, t && `${e}-switch--disabled`, this.round && `${e}-switch--round`, this.loading && `${e}-switch--loading`, this.pressed && `${e}-switch--pressed`, this.rubberBand && `${e}-switch--rubber-band`],
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
    }, je(l, (p) => je(s, (x) => p || x ? f("div", {
      "aria-hidden": !0,
      class: `${e}-switch__children-placeholder`
    }, f("div", {
      class: `${e}-switch__rail-placeholder`
    }, f("div", {
      class: `${e}-switch__button-placeholder`
    }), p), f("div", {
      class: `${e}-switch__rail-placeholder`
    }, f("div", {
      class: `${e}-switch__button-placeholder`
    }), x)) : null)), f("div", {
      class: `${e}-switch__button`
    }, je(d, (p) => je(u, (x) => je(c, (v) => f(ur, null, {
      default: () => this.loading ? f(_n, {
        key: "loading",
        clsPrefix: e,
        strokeWidth: 20
      }) : this.checked && (x || p) ? f("div", {
        class: `${e}-switch__button-icon`,
        key: x ? "checked-icon" : "icon"
      }, x || p) : !this.checked && (v || p) ? f("div", {
        class: `${e}-switch__button-icon`,
        key: v ? "unchecked-icon" : "icon"
      }, v || p) : null
    })))), je(l, (p) => p && f("div", {
      key: "checked",
      class: `${e}-switch__checked`
    }, p)), je(s, (p) => p && f("div", {
      key: "unchecked",
      class: `${e}-switch__unchecked`
    }, p)))));
  }
}), f2 = /* @__PURE__ */ Object.assign({
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
    return (r, o) => (ze(), mt(se(Zu), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: se(k0),
      "date-locale": se(Nv),
      "theme-overrides": t
    }, {
      default: it(() => [
        tn(se(Hc), null, {
          default: it(() => [
            tn(se(Tc), null, {
              default: it(() => [
                wn(r.$slots, "default")
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
function h2(e, t, r) {
  e.addEventListener(t, r), si(() => {
    e.removeEventListener(t, r);
  });
}
var Yr = void 0, kr = {}, Da;
kr.throttle = Da = function(e, t, r, o) {
  var i, a = 0;
  typeof t != "boolean" && (o = r, r = t, t = Yr);
  function l() {
    var s = this, d = +/* @__PURE__ */ new Date() - a, u = arguments;
    function c() {
      a = +/* @__PURE__ */ new Date(), r.apply(s, u);
    }
    function h() {
      i = Yr;
    }
    o && !i && c(), i && clearTimeout(i), o === Yr && d > e ? c() : t !== !0 && (i = setTimeout(o ? h : c, o === Yr ? e - d : e));
  }
  return kr.guid && (l.guid = r.guid = r.guid || kr.guid++), l;
};
kr.debounce = function(e, t, r) {
  return r === Yr ? Da(e, t, !1) : Da(e, r, t !== !1);
};
const Bi = function(e, t, r) {
  return kr.debounce(t || 300, r ?? !0, e);
}, v2 = function(e, t, r) {
  return kr.throttle(t || 300, r ?? !1, e);
};
function p2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yc = { exports: {} };
(function(e) {
  function t() {
    var r = 0, o = 1, i = 2, a = 3, l = 4, s = 5, d = 6, u = 7, c = 8, h = 9, p = 10, x = 11, v = 12, m = 13, b = 14, g = 15, C = 16, S = 17, w = 0, k = 1, R = 2, y = 3, B = 4;
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
    function K(n, D, E) {
      var H = [n].concat(D).concat([E]), L = H[H.length - 2], V = E, te = H.lastIndexOf(b);
      if (te > 1 && H.slice(1, te).every(function(j) {
        return j == a;
      }) && [a, m, S].indexOf(n) == -1)
        return R;
      var X = H.lastIndexOf(l);
      if (X > 0 && H.slice(1, X).every(function(j) {
        return j == l;
      }) && [v, l].indexOf(L) == -1)
        return H.filter(function(j) {
          return j == l;
        }).length % 2 == 1 ? y : B;
      if (L == r && V == o)
        return w;
      if (L == i || L == r || L == o)
        return V == b && D.every(function(j) {
          return j == a;
        }) ? R : k;
      if (V == i || V == r || V == o)
        return k;
      if (L == d && (V == d || V == u || V == h || V == p))
        return w;
      if ((L == h || L == u) && (V == u || V == c))
        return w;
      if ((L == p || L == c) && V == c)
        return w;
      if (V == a || V == g)
        return w;
      if (V == s)
        return w;
      if (L == v)
        return w;
      var U = H.indexOf(a) != -1 ? H.lastIndexOf(a) - 1 : H.length - 2;
      return [m, S].indexOf(H[U]) != -1 && H.slice(U + 1, -1).every(function(j) {
        return j == a;
      }) && V == b || L == g && [C, S].indexOf(V) != -1 ? w : D.indexOf(l) != -1 ? R : L == l && V == l ? w : k;
    }
    this.nextBreak = function(n, D) {
      if (D === void 0 && (D = 0), D < 0)
        return 0;
      if (D >= n.length - 1)
        return n.length;
      for (var E = M(A(n, D)), H = [], L = D + 1; L < n.length; L++)
        if (!F(n, L - 1)) {
          var V = M(A(n, L));
          if (K(E, H, V))
            return L;
          H.push(V);
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
    function M(n) {
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
      129489 <= n && n <= 129501 ? m : 127995 <= n && n <= 127999 ? b : n == 8205 ? g : n == 9792 || // So       FEMALE SIGN
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
      n == 128658 ? C : 128102 <= n && n <= 128105 ? S : x;
    }
    return this;
  }
  e.exports && (e.exports = t);
})(Yc);
var g2 = Yc.exports;
const m2 = /* @__PURE__ */ p2(g2), b2 = new m2(), x2 = (e = "") => b2.countGraphemes(e);
function C2(e) {
  return e && typeof e == "object" && typeof e.then == "function";
}
const ai = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ En({
    type: { type: String, default: "text" },
    size: { type: String, default: "medium" },
    placeholder: { type: String, default: "请输入" },
    maxlength: { type: Number },
    showCount: { type: Boolean, default: !1 },
    autofocus: { type: Boolean, default: !1 },
    disabled: { type: Boolean, default: !1 },
    clearable: { type: Boolean, default: !1 },
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
  emits: /* @__PURE__ */ En(["blur", "input"], ["update:modelValue"]),
  setup(e, { expose: t, emit: r }) {
    const o = io(e, "modelValue"), i = r;
    function a() {
      let c = o.value;
      if (e.trim) {
        const h = c.trim();
        o.value = h, c = h;
      }
      return c;
    }
    function l() {
      const c = a();
      i("blur", { value: c });
    }
    function s(c) {
      o.value = c;
      let h = c;
      e.trim && (h = h.trim()), i("input", { value: h });
    }
    const d = Cr("input");
    return t({ focus: () => {
      d.value && d.value.focus();
    } }), (c, h) => (ze(), mt(se(wa), {
      ref: "input",
      "input-props": { autocomplete: "off" },
      type: e.type,
      size: e.size,
      "show-password-on": e.showPassword ? "click" : void 0,
      value: o.value,
      maxlength: e.maxlength,
      "show-count": e.showCount,
      "count-graphemes": e.maxlength != null && e.maxlength > 0 || e.showCount ? se(x2) : void 0,
      placeholder: e.placeholder,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      clearable: e.clearable,
      onInput: s,
      onBlur: l
    }, xo({ _: 2 }, [
      e.prefixIcon ? {
        name: "prefix",
        fn: it(() => [
          tn(se(po), Ff(Pf(e.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly", "clearable"]));
  }
}), Zc = /* @__PURE__ */ Object.assign({
  name: "PSelect",
  inheritAttrs: !1
}, {
  __name: "select",
  props: /* @__PURE__ */ En({
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
  emits: /* @__PURE__ */ En(["update", "change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = Co(), o = t, i = io(e, "modelValue"), a = Bi(function(l) {
      l !== i.value && vt(() => {
        o("change", l);
      }), i.value = l, o("update", l);
    }, 300);
    return (l, s) => (ze(), mt(se(ec), {
      class: Ut(`${se(r).class ? se(r).class : ""}`),
      style: an(e.width ? `width:${e.width}` : ""),
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
      "onUpdate:value": se(a)
    }, {
      empty: it(() => [
        tn(se($r), {
          size: "small",
          description: e.emptyDescription
        }, null, 8, ["description"])
      ]),
      _: 1
    }, 8, ["class", "style", "options", "value", "size", "placeholder", "disabled", "value-field", "label-field", "clearable", "show-checkmark", "onUpdate:value"]));
  }
}), rr = /* @__PURE__ */ Object.assign({
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
    const r = Co(), o = wd(), i = t, a = Bi(function() {
      e.waiting || i("click");
    }, 300);
    return (l, s) => (ze(), mt(se(nr), {
      class: Ut([
        se(r).class ? se(r).class : "",
        e.size === "xs" ? "p-button-xs" : "",
        e.type === "default" && e.defaultType ? `p-button-default-${e.defaultType}` : "",
        e.waiting ? "p-button-waiting" : ""
      ]),
      style: an(se(r).style || ""),
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
      onClick: se(a)
    }, xo({
      default: it(() => [
        !e.loading || e.loading && !e.loadingWithoutText ? (ze(), mt(se(o).default, { key: 0 })) : wt("", !0)
      ]),
      _: 2
    }, [
      l.$slots.icon ? {
        name: "icon",
        fn: it(() => [
          tn(se(o).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "style", "attr-type", "block", "size", "type", "loading", "ghost", "secondary", "text", "disabled", "onClick"]));
  }
}), y2 = { class: "p-search-item-content" }, w2 = {
  __name: "search-item",
  props: {
    lastItemForMulti: { type: Boolean, default: !1 },
    // 多行且每行的最后一个搜索条件
    unlimitedLabelWidth: { type: Boolean, required: !0 },
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
      document.activeElement && document.activeElement.blur(), vt(() => {
        e.doSearch();
      });
    }
    function l() {
      document.activeElement && document.activeElement.blur(), vt(() => {
        e.doReset();
      });
    }
    function s() {
      e.item._isActionItem || e.item.field && (r.value = e.item.defaultValue);
    }
    return t({ reset: s }), (d, u) => (ze(), ht("div", {
      class: Ut([
        "p-search-item",
        e.item._isActionItem ? "p-search-item-action" : "",
        e.lastItemForMulti ? "p-search-item-last" : ""
      ])
    }, [
      !e.item._isActionItem && !e.item._isEmptyItem ? (ze(), ht(_e, { key: 0 }, [
        tn(se(Ci), {
          class: "p-search-item-label",
          style: an(e.unlimitedLabelWidth ? "" : { boxSizing: "border-box", width: `${e.labelWidth}px` })
        }, {
          default: it(() => [
            Ht(on(e.item.label) + on(e.showColon ? "：" : ""), 1)
          ]),
          _: 1
        }, 8, ["style"]),
        Kn("div", y2, [
          e.item.type === "input" ? (ze(), mt(xr(se(ai)), Ot({
            key: 0,
            modelValue: r.value,
            "onUpdate:modelValue": u[0] || (u[0] = (c) => r.value = c)
          }, e.item.props, { onBlur: o }), null, 16, ["modelValue"])) : wt("", !0),
          e.item.type === "select" ? (ze(), mt(xr(se(Zc)), Ot({
            key: 1,
            modelValue: r.value,
            "onUpdate:modelValue": u[1] || (u[1] = (c) => r.value = c)
          }, e.item.props, { onChange: i }), null, 16, ["modelValue"])) : wt("", !0)
        ])
      ], 64)) : wt("", !0),
      e.item._isActionItem ? (ze(), ht(_e, { key: 1 }, [
        tn(se(rr), {
          style: { width: "80px" },
          onClick: a
        }, {
          icon: it(() => [
            tn(se(po), {
              size: "20",
              color: "#ffffff"
            }, {
              default: it(() => u[2] || (u[2] = [
                Kn("svg", {
                  t: "1737784979409",
                  class: "icon",
                  viewBox: "0 0 1024 1024",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "p-id": "6537",
                  width: "200",
                  height: "200"
                }, [
                  Kn("path", {
                    d: "M446.112323 177.545051c137.567677 0.219798 252.612525 104.59798 266.162424 241.493333 13.562828 136.895354-78.778182 261.818182-213.617777 289.008485-134.852525 27.203232-268.386263-52.156768-308.945455-183.608889s25.018182-272.252121 151.738182-325.779394A267.235556 267.235556 0 0 1 446.112323 177.545051m0-62.060607c-182.794343 0-330.989899 148.195556-330.989899 330.989899s148.195556 330.989899 330.989899 330.989899 330.989899-148.195556 330.989899-330.989899-148.195556-330.989899-330.989899-330.989899z m431.321212 793.341415a30.849293 30.849293 0 0 1-21.94101-9.102223l-157.220202-157.220202c-11.752727-12.179394-11.584646-31.534545 0.37495-43.50707 11.972525-11.972525 31.327677-12.140606 43.494141-0.37495l157.220202 157.220202a31.036768 31.036768 0 0 1 6.723232 33.810101 31.004444 31.004444 0 0 1-28.651313 19.174142z m0 0",
                    "p-id": "6538"
                  })
                ], -1)
              ])),
              _: 1
            })
          ]),
          default: it(() => [
            u[3] || (u[3] = Ht("搜索"))
          ]),
          _: 1
        }),
        tn(se(rr), {
          style: { "margin-left": "10px", width: "80px" },
          type: "default",
          onClick: l
        }, {
          icon: it(() => [
            tn(se(po), { size: "18" }, {
              default: it(() => u[4] || (u[4] = [
                Kn("svg", {
                  t: "1737871878167",
                  class: "icon",
                  viewBox: "0 0 1024 1024",
                  version: "1.1",
                  xmlns: "http://www.w3.org/2000/svg",
                  "p-id": "6743",
                  width: "200",
                  height: "200"
                }, [
                  Kn("path", {
                    d: "M885.58 554.65c-22.86 0-41.39-18.53-41.39-41.39V182.17c0-22.86 18.53-41.39 41.39-41.39s41.39 18.53 41.39 41.39v331.09c-0.01 22.86-18.54 41.39-41.39 41.39zM140.62 885.74c-22.86 0-41.39-18.53-41.39-41.39V513.26c0-22.86 18.53-41.39 41.39-41.39s41.39 18.53 41.39 41.39v331.09c0 22.86-18.53 41.39-41.39 41.39z",
                    "p-id": "6744"
                  }),
                  Kn("path", {
                    d: "M513.1 927.12c-228.21 0-413.86-185.65-413.86-413.86 0-22.86 18.53-41.39 41.39-41.39s41.39 18.53 41.39 41.39c0 182.56 148.53 331.09 331.09 331.09 86.23 0 167.89-32.98 229.93-92.86 16.45-15.82 42.66-15.42 58.52 1.05 15.86 16.45 15.4 42.64-1.05 58.52-77.57 74.84-179.64 116.06-287.41 116.06zM885.6 554.65c-22.86 0-41.39-18.53-41.39-41.39 0-182.56-148.53-331.09-331.09-331.09-90.65 0-175.27 35.93-238.25 101.16-15.82 16.51-42.07 16.95-58.5 1.03-16.45-15.86-16.91-42.07-1.03-58.5C294.04 144.3 399.81 99.4 513.12 99.4c228.21 0 413.86 185.65 413.86 413.86 0 22.86-18.53 41.39-41.38 41.39z",
                    "p-id": "6745"
                  })
                ], -1)
              ])),
              _: 1
            })
          ]),
          default: it(() => [
            u[5] || (u[5] = Ht("重置"))
          ]),
          _: 1
        })
      ], 64)) : wt("", !0)
    ], 2));
  }
}, S2 = {
  class: "p-search",
  ref: "search"
}, B2 = /* @__PURE__ */ Object.assign({
  name: "PSearch"
}, {
  __name: "search",
  props: {
    model: { type: Array, default: () => [] },
    itemWidth: { type: Number, default: 268 },
    labelWidth: { type: Number },
    visibleLine: { type: Number, default: -1 },
    showColon: { type: Boolean, default: !0 }
  },
  emits: ["search", "reset", "change"],
  setup(e, { expose: t, emit: r }) {
    const o = Math.max(e.itemWidth, 200), i = $(() => e.labelWidth ? e.labelWidth : e.showColon ? 74 : 60), a = I({}), l = () => {
      const R = {};
      e.model.forEach((y) => {
        y.slot || y.field && Object.hasOwn(y, "defaultValue") && (R[y.field] = y.defaultValue);
      }), a.value = R;
    };
    l();
    const s = I([]), d = I({}), u = { _isActionItem: !0, width: 170 }, c = { _isEmptyItem: !0 }, h = Cr("search");
    function p() {
      if (!h.value || !e.model || e.model.length === 0) return;
      const R = Math.floor(h.value.getBoundingClientRect().width);
      if (R >= o * e.model.length + u.width) {
        s.value = [[...e.model, u]], d.value = { singleLine: !0 };
        return;
      }
      const y = Math.floor(R / o);
      if (e.visibleLine <= 0) {
        const B = [];
        e.model.forEach((A, K) => {
          K % y === 0 && B.push([]), B[B.length - 1].push(A);
        });
        const F = B[B.length - 1].length;
        if (F === y)
          B.push([u]);
        else {
          let A = 0;
          const K = y - F;
          for (; A < K; )
            A === K - 1 ? B[B.length - 1].push(u) : B[B.length - 1].push(c), A += 1;
        }
        s.value = B, d.value = { multiLine: !0 };
        return;
      }
    }
    Ft(() => {
      p(), h2(
        window,
        "resize",
        v2(function() {
          p();
        })
      );
    });
    function x(R, y) {
      R && (a.value[R] = y);
    }
    const v = r;
    function m(R, y = !1) {
      if (typeof R != "object" || R === null) return {};
      const B = (F) => y ? !F && F !== !1 && F !== 0 : F == null || F === "";
      return Object.fromEntries(Object.entries(R).filter(([F, A]) => !B(A)));
    }
    function b() {
      return m(a.value);
    }
    const g = Cr("searchItem");
    function C() {
      return g.value.forEach((R) => {
        R.reset();
      }), l(), b();
    }
    function S() {
      v("search", b());
    }
    function w() {
      const R = C();
      vt(() => {
        v("reset", R);
      });
    }
    function k() {
      vt(() => {
        v("change", b());
      });
    }
    return t({ getSearchData: b, resetSearchData: C }), (R, y) => (ze(), ht("div", S2, [
      (ze(!0), ht(_e, null, Zr(s.value, (B, F) => (ze(), ht("div", {
        key: F,
        class: "p-search-lilne",
        style: an(F > 0 ? "margin-top:12px" : "")
      }, [
        (ze(!0), ht(_e, null, Zr(B, (A, K) => (ze(), mt(w2, {
          ref_for: !0,
          ref: "searchItem",
          key: A.field || K,
          unlimitedLabelWidth: d.value.singleLine || s.value.length === 2 && s.value[1].length === 1,
          labelWidth: i.value,
          showColon: e.showColon,
          item: A,
          lastItemForMulti: d.value.multiLine && !A._isActionItem && K === B.length - 1,
          searchData: a.value,
          doSearch: S,
          doReset: w,
          doChange: k,
          updateSearchData: x,
          style: an(
            d.value.singleLine && !A._isActionItem ? `width: ${se(o)}px` : d.value.multiLine ? "flex:1" : ""
          )
        }, null, 8, ["unlimitedLabelWidth", "labelWidth", "showColon", "item", "lastItemForMulti", "searchData", "style"]))), 128))
      ], 4))), 128))
    ], 512));
  }
}), Ea = /* @__PURE__ */ Object.assign({
  name: "PSwitch",
  inheritAttrs: !1
}, {
  __name: "switch",
  props: /* @__PURE__ */ En({
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
  emits: /* @__PURE__ */ En(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = io(e, "modelValue"), o = Co(), i = t, a = Bi(function(l) {
      e.readonly || (r.value = l, i("change", l));
    }, 300);
    return (l, s) => (ze(), ht(_e, null, [
      tn(se(c2), {
        class: Ut([se(o).class || "", e.readonly ? "p-switch-readonly" : ""]),
        style: an(se(o).style || ""),
        size: e.size,
        value: r.value,
        loading: e.loading,
        disabled: e.disabled,
        "checked-value": e.checkedValue,
        "unchecked-value": e.uncheckedValue,
        "on-update:value": se(a)
      }, xo({ _: 2 }, [
        !e.outside && e.checkedText != null && e.checkedText !== "" ? {
          name: "checked",
          fn: it(() => [
            Ht(on(e.checkedText), 1)
          ]),
          key: "0"
        } : void 0,
        !e.outside && e.uncheckedText != null && e.uncheckedText !== "" ? {
          name: "unchecked",
          fn: it(() => [
            Ht(on(e.uncheckedText), 1)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["class", "style", "size", "value", "loading", "disabled", "checked-value", "unchecked-value", "on-update:value"]),
      e.outside && e.checkedText != null && e.checkedText !== "" && r.value === e.checkedValue ? (ze(), ht("span", {
        key: 0,
        class: Ut(["p-switch-outside-text", e.disabled ? "p-switch-outside-text-disabled" : ""])
      }, on(e.checkedText), 3)) : wt("", !0),
      e.outside && e.uncheckedText != null && e.uncheckedText !== "" && r.value === e.uncheckedValue ? (ze(), ht("span", {
        key: 1,
        class: Ut(["p-switch-outside-text", e.disabled ? "p-switch-outside-text-disabled" : ""])
      }, on(e.uncheckedText), 3)) : wt("", !0)
    ], 64));
  }
}), k2 = {
  key: 1,
  style: { flex: "1" }
}, R2 = {
  key: 2,
  autocomplete: "off",
  type: "submit",
  style: { display: "none" }
}, F2 = /* @__PURE__ */ Object.assign({
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
    showRequireMark: { type: Boolean, default: !0 },
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
      const b = [], g = [];
      if (e.inlineSize.length === 1) {
        if (e.model.forEach((C, S) => {
          S % e.inlineSize[0] === 0 && g.push([]), g[g.length - 1].push(C);
        }), g[g.length - 1].length < e.inlineSize[0]) {
          let C = e.inlineSize[0] - g[g.length - 1].length, S = 0;
          for (; S < C; )
            g[g.length - 1].push({ isInlinePlaceholder: !0 }), S++;
        }
      } else {
        let C = 0, S = 0;
        for (let k = 0; k < e.inlineSize.length - 1; k++) {
          const R = e.inlineSize[k];
          if (S += R, C < e.model.length) {
            const y = e.model.slice(C, C + R);
            if (y.length > 0) {
              if (y.length < R) {
                let B = R - y.length, F = 0;
                for (; F < B; )
                  y.push({ isInlinePlaceholder: !0 }), F++;
              }
              b.push(y);
            }
            C += R;
          }
        }
        const w = e.inlineSize[e.inlineSize.length - 1];
        if (e.model.filter((k, R) => R >= S).forEach((k, R) => {
          R % w === 0 && g.push([]), g[g.length - 1].push(k);
        }), g.length > 0 && g[g.length - 1].length < w) {
          let k = w - g[g.length - 1].length, R = 0;
          for (; R < k; )
            g[g.length - 1].push({ isInlinePlaceholder: !0 }), R++;
        }
      }
      return [...b, ...g];
    }), i = function() {
      const b = {};
      return e.model.forEach((g) => {
        g.slot || !g.field || g.placeholder || (b[g.field] = g.defaultValue);
      }), I(b);
    }(), a = function() {
      return e.feedbackSizeClass ? ["s"].includes(e.feedbackSizeClass) ? `p-form-item-feedback-${e.feedbackSizeClass}` : e.feedbackSizeClass : "";
    }();
    function l() {
      const b = {};
      return e.model.forEach((g) => {
        !g.field || g.placeholder || g.slot && (b[g.field] = $f(g.value));
      }), { ...i.value, ...b };
    }
    const s = r, d = Cr("form"), u = (b = !0) => (b && document.activeElement && document.activeElement.blur(), d.value.validate().then(() => ({ formData: l(), valid: !0 })).catch((g) => ({ formData: l(), valid: !1, errors: g }))), c = Bi(function() {
      u(!0).then((b) => {
        s("submit", b);
      });
    }), h = Cr("formItem");
    function p(b = "") {
      if (!b) {
        d.value.restoreValidation();
        return;
      }
      const g = h.value.find((C) => C.path === b);
      g && g.restoreValidation();
    }
    function x(b) {
      b && e.rules && e.rules[b] && (e.rules[b].trigger && e.rules[b].trigger.includes("input") || p(b));
    }
    let v = {};
    e.model.forEach((b) => {
      !b.slot && b.ref === !0 && (v[b.field] = Cr(`form-item-${b.field}`));
    });
    function m(b = "") {
      return b && v[b] ? v[b].value[0] : null;
    }
    return si(() => {
      v = null;
    }), t({ validate: u, restoreValidation: p, getFormValue: l, getChild: m }), (b, g) => (ze(), mt(se(hS), {
      ref: "form",
      class: Ut([e.inline ? "p-form-inline" : ""]),
      "show-label": e.showLabel,
      "label-placement": e.labelPlacement,
      "label-width": "auto",
      "require-mark-placement": "left",
      "show-require-mark": e.showRequireMark,
      "label-align": e.labelPlacement === "left" ? "right" : "left",
      model: se(i),
      rules: e.rules,
      inline: e.inline,
      onSubmit: zf(se(c), ["prevent"])
    }, {
      default: it(() => [
        !e.inline || e.inline && e.inlineSize.length <= 0 ? (ze(!0), ht(_e, { key: 0 }, Zr(e.model, (C, S) => (ze(), mt(se(gd), {
          ref_for: !0,
          ref: "formItem",
          style: an(C.itemStyle == null ? e.itemStyle : C.itemStyle),
          key: C.field || S,
          label: C.label,
          path: C.field,
          "feedback-class": se(a),
          first: !0
        }, {
          default: it(() => [
            C.slot === !0 ? wn(b.$slots, C.field, { key: 0 }) : (ze(), ht(_e, { key: 1 }, [
              C.type === "input" ? (ze(), mt(xr(se(ai)), Ot({
                key: 0,
                ref_for: !0,
                ref: `form-item-${C.field}`,
                modelValue: se(i)[C.field],
                "onUpdate:modelValue": (w) => se(i)[C.field] = w
              }, { disabled: e.disabled, readonly: e.readonly, ...C.props }, {
                onInput: (w) => x(C.field)
              }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : C.type === "switch" ? (ze(), mt(xr(se(Ea)), Ot({
                key: 1,
                ref_for: !0,
                ref: `form-item-${C.field}`,
                modelValue: se(i)[C.field],
                "onUpdate:modelValue": (w) => se(i)[C.field] = w
              }, { disabled: e.disabled, readonly: e.readonly, ...C.props }), null, 16, ["modelValue", "onUpdate:modelValue"])) : wt("", !0)
            ], 64))
          ]),
          _: 2
        }, 1032, ["style", "label", "path", "feedback-class"]))), 128)) : wt("", !0),
        e.inline && e.inlineSize.length > 0 && o.value ? (ze(!0), ht(_e, { key: 1 }, Zr(o.value, (C, S) => (ze(), ht("div", {
          key: S,
          class: Ut(["p-form-inline-item", e.inlineClass[S] ? e.inlineClass[S] : ""])
        }, [
          (ze(!0), ht(_e, null, Zr(C, (w, k) => (ze(), ht(_e, {
            key: w.field || S + "-" + k
          }, [
            !w.isInlinePlaceholder && !w.placeholder ? (ze(), mt(se(gd), {
              key: 0,
              ref_for: !0,
              ref: "formItem",
              style: an(w.itemStyle == null ? e.itemStyle : w.itemStyle),
              label: w.label,
              path: w.field,
              "feedback-class": se(a),
              first: !0
            }, {
              default: it(() => [
                w.slot === !0 ? wn(b.$slots, w.field, { key: 0 }) : (ze(), ht(_e, { key: 1 }, [
                  w.type === "input" ? (ze(), mt(xr(se(ai)), Ot({
                    key: 0,
                    ref_for: !0,
                    ref: `form-item-${w.field}`,
                    modelValue: se(i)[w.field],
                    "onUpdate:modelValue": (R) => se(i)[w.field] = R
                  }, { disabled: e.disabled, readonly: e.readonly, ...w.props }, {
                    onInput: (R) => x(w.field)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : w.type === "switch" ? (ze(), mt(xr(se(Ea)), Ot({
                    key: 1,
                    ref_for: !0,
                    ref: `form-item-${w.field}`,
                    modelValue: se(i)[w.field],
                    "onUpdate:modelValue": (R) => se(i)[w.field] = R
                  }, { disabled: e.disabled, readonly: e.readonly, ...w.props }), null, 16, ["modelValue", "onUpdate:modelValue"])) : wt("", !0)
                ], 64))
              ]),
              _: 2
            }, 1032, ["style", "label", "path", "feedback-class"])) : (ze(), ht("div", k2))
          ], 64))), 128))
        ], 2))), 128)) : wt("", !0),
        e.virtualSubmit ? (ze(), ht("button", R2, "virtual button")) : wt("", !0),
        wn(b.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "show-label", "label-placement", "show-require-mark", "label-align", "model", "rules", "inline", "onSubmit"]));
  }
}), P2 = /* @__PURE__ */ ee((e) => {
  const t = {
    bordered: !1,
    bottomBordered: !1,
    singleColumn: !1,
    singleLine: !0,
    striped: !1,
    pagination: !1,
    size: "small"
  };
  return () => f(tw, {
    ...t,
    ...e
  }, {
    empty: () => f($r, {
      size: "medium",
      description: "暂无数据"
    })
  });
}, {
  name: "PDataTable",
  inheritAttrs: !0
}), z2 = {
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
    return (o, i) => (ze(), ht(_e, null, [
      e.negativeText ? (ze(), mt(se(rr), {
        key: 0,
        size: "xs",
        type: "default",
        "default-type": e.type,
        onClick: t
      }, {
        default: it(() => [
          Ht(on(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type"])) : wt("", !0),
      e.positiveText ? (ze(), mt(se(rr), {
        key: 1,
        size: "xs",
        type: e.type,
        onClick: r
      }, {
        default: it(() => [
          Ht(on(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type"])) : wt("", !0)
    ], 64));
  }
}, $2 = /* @__PURE__ */ ee((e, {
  emit: t
}) => {
  const r = wd(), o = I(), i = () => {
    o.value.setShow(!1);
  };
  return () => f(i2, {
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
    action: () => f(z2, {
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
}), A2 = /* @__PURE__ */ Object.assign({
  name: "PPagination",
  inheritAttrs: !1
}, {
  __name: "pagination",
  props: /* @__PURE__ */ En({
    total: { type: Number },
    pageSlot: { type: Number, default: 9 },
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
  emits: /* @__PURE__ */ En(["changePage", "changePageSize"], ["update:page", "update:pageSize"]),
  setup(e, { emit: t }) {
    const r = Co(), o = io(e, "page"), i = io(e, "pageSize"), a = t;
    function l(d) {
      o.value = d, a("changePage", d);
    }
    function s(d) {
      i.value = d, a("changePageSize", d);
    }
    return (d, u) => (ze(), mt(se(rc), {
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
      style: an(se(r).style)
    }, xo({ _: 2 }, [
      e.simple ? void 0 : {
        name: "prefix",
        fn: it(({ itemCount: c }) => [
          Ht("共 " + on(c) + " 条记录", 1)
        ]),
        key: "0"
      },
      e.showQuickJumper && !e.simple ? {
        name: "suffix",
        fn: it(() => [
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
function D2(e, t = 200) {
  const r = I(!1), o = I(!1), i = $(() => !r.value && !o.value), a = I(!1), l = I(), s = I();
  let d;
  return He(() => se(e), (u) => {
    if (r.value = !1, o.value = !1, l.value = null, !u) {
      s.value = null, d && clearTimeout(d), d = null;
      return;
    }
    se(t) > 0 ? (a.value = !1, d && clearTimeout(d), d = setTimeout(() => {
      a.value = !0;
    }, Number(se(t)))) : a.value = !0, u.then((c) => {
      u === se(e) && (s.value = c, o.value = !0);
    }).catch((c) => {
      u === se(e) && (l.value = c, r.value = !0);
    });
  }, { immediate: !0 }), { isPending: i, isRejected: r, isResolved: o, isDelayElapsed: a, error: l, data: s };
}
const Jc = ({ delay: e = 300, minPendingTime: t = 500, loadingValue: r = !1 } = {}) => {
  let o = 0, i = null;
  const a = () => {
    i && (clearTimeout(i), i = null);
  }, l = I(!!r), s = I(!!r);
  let d = null;
  const u = (c) => (l.value = c, new Promise((h) => {
    c === !0 ? h() : d = h;
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
          const p = (/* @__PURE__ */ new Date()).getTime() - o - e, x = p >= t ? 0 : t - p;
          i = setTimeout(() => {
            s.value = c, d && (d(), d = null);
          }, x);
        } else
          d && (d(), d = null);
        o = 0;
      }
    },
    { immediate: !!r, deep: !1 }
  ), si(() => {
    d = null, a();
  }), { loading: s, waiting: l, setLoadingStatus: u };
}, E2 = {
  key: 1,
  class: "p-promised-loading"
}, T2 = /* @__PURE__ */ Object.assign({
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
      const C = { position: "absolute", left: "50%", zIndex: 2 };
      return e.loadingTop == null ? C.top = "50%" : C.top = `${e.loadingTop}px`, t.value === "small" ? (C.marginLeft = "-14px", e.loadingTop == null && (C.marginTop = "-14px")) : t.value === "medium" ? (C.marginLeft = "-17px", e.loadingTop == null && (C.marginTop = "-17px")) : t.value === "large" && (C.marginLeft = "-20px", e.loadingTop == null && (C.marginTop = "-20px")), C;
    }), o = $(() => e.nilType === "border" ? "p-promised-empty-border" : e.nilType === "line" ? "p-promised-empty-line" : ""), i = Co(), a = oe(() => e.promise), { data: l, error: s, isPending: d, isDelayElapsed: u, isResolved: c, isRejected: h } = D2(a, 0), { loading: p, waiting: x } = Jc(), v = $(() => !p.value && !d.value && !s.value && g(l.value));
    He(
      () => d.value && u.value,
      (C) => {
        x.value = C;
      },
      { immediate: !1 }
    );
    const m = I(!1);
    He(h, (C) => {
      C === !0 && m.value === !1 && (m.value = C);
    }), He(c, (C) => {
      C === !0 && m.value === !0 && (m.value = !1);
    });
    function b(C) {
      let S = !0;
      if (typeof C == "object") {
        for (const w in C)
          if (typeof C[w] == "object" ? S = b(C[w]) : S = C[w] === "" || C[w] === null || C[w] === void 0, S === !1)
            break;
        return S;
      } else
        return C === "" || C === null || C === void 0;
    }
    function g(C) {
      return C == null || C === "" ? !0 : b(e.dataField ? C[e.dataField] : C);
    }
    return (C, S) => (ze(), ht("div", {
      class: Ut(se(i).class ? se(i).class : ""),
      style: an(e.contentStyle)
    }, [
      !se(p) && !se(d) && !se(s) && !g(se(l)) || se(d) && se(x) && !m.value && !se(s) && !g(se(l)) || v.value && e.defaultSlotAsEmpty ? wn(C.$slots, "default", {
        key: 0,
        data: se(l),
        isEmpty: v.value
      }) : wt("", !0),
      se(p) ? (ze(), ht("div", E2, [
        tn(se(Xc), {
          size: t.value,
          style: an(r.value)
        }, null, 8, ["size", "style"]),
        S[0] || (S[0] = Kn("div", { class: "p-promised-loading-mask" }, null, -1))
      ])) : wt("", !0),
      v.value && !e.defaultSlotAsEmpty ? (ze(), ht(_e, { key: 2 }, [
        C.$slots.emptyCustomize ? wn(C.$slots, "emptyCustomize", { key: 1 }) : (ze(), mt(se($r), {
          key: 0,
          class: Ut(o.value),
          description: e.emptyDesc,
          size: "medium"
        }, xo({ _: 2 }, [
          C.$slots.emptyExtra ? {
            name: "extra",
            fn: it(() => [
              wn(C.$slots, "emptyExtra")
            ]),
            key: "0"
          } : void 0
        ]), 1032, ["class", "description"]))
      ], 64)) : wt("", !0),
      !se(p) && !se(d) && se(s) ? (ze(), mt(se($r), {
        key: 3,
        class: Ut(o.value),
        description: se(s).message || e.errorDefaultDesc,
        size: "medium"
      }, null, 8, ["class", "description"])) : wt("", !0)
    ], 6));
  }
});
function N2(e = ["loadingBar", "message"], t = {}) {
  var i;
  const { loadingBar: r, message: o } = _c(e, {
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
const Qc = {
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
    const { loading: t, waiting: r, setLoadingStatus: o } = Jc();
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
    return (s, d) => (ze(), ht(_e, null, [
      e.negativeText ? (ze(), mt(se(rr), {
        key: 0,
        size: "small",
        type: "default",
        "default-type": e.type,
        disabled: se(t),
        onClick: a
      }, {
        default: it(() => [
          Ht(on(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type", "disabled"])) : wt("", !0),
      e.positiveText ? (ze(), mt(se(rr), {
        key: 1,
        size: "small",
        type: e.type,
        loading: se(t),
        loadingWithoutText: !1,
        onClick: l
      }, {
        default: it(() => [
          Ht(on(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type", "loading"])) : wt("", !0)
    ], 64));
  }
}, { dialog: O2 } = _c(["dialog"], {
  configProviderProps: { inlineThemeDisabled: !0 }
}), M2 = O2;
function ef(e) {
  return typeof e == "string" ? function() {
    return f("p", { innerHTML: e });
  } : Array.isArray(e) ? function() {
    return f(
      "div",
      e.map((t) => f("p", { innerHTML: t }))
    );
  } : e;
}
const H2 = () => {
  let e = null, t = null, r = null, o = null;
  const i = Rc(), a = (u = {}, c = { width: 430 }, h) => {
    const p = {
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
    return p.closeOnEsc = !1, p.maskClosable = !1, p.iconPlacement = "left", p.titleClass = p.showIcon ? "p-dialog-title" : "p-dialog-title p-dialog-title-without-icon", p.style = "width: " + c.width + "px", h && (p.type = h), (p.positiveText || p.negativeText) && (p.action = function() {
      return f(Qc, {
        positiveText: p.positiveText,
        negativeText: p.negativeText,
        type: h,
        onPositiveClick: p.onPositiveClick,
        onNegativeClick: p.onNegativeClick,
        onClose: function() {
          h === "success" && t ? (t.destroy(), t = null) : h === "warning" && r ? (r.destroy(), r = null) : h === "error" && o ? (o.destroy(), o = null) : e && (e.destroy(), e = null);
        },
        onLoading: (x) => {
          let v = null;
          h === "success" && t ? v = t : h === "warning" && r ? v = r : h === "error" && o ? v = o : e && (v = e), v.closable !== !1 && (v.class = x === !0 ? "p-dialog p-dialog-loading" : "p-dialog");
        }
      });
    }), p.content = ef(u.content), i.create(p);
  }, l = (u = {}, c = {}) => {
    u.negativeText == null && !c.useDefaultConf && (u.negativeText = ""), u.positiveText == null && !c.useDefaultConf && (u.positiveText = "我知道了"), u.closable == null && !c.useDefaultConf && (u.closable = !1), u.showIcon == null && !c.useDefaultConf && (u.showIcon = !0);
    const h = a(u, { width: 430, ...c }, "success");
    return t = h, h;
  }, s = (u = {}, c = {}) => {
    u.negativeText == null && !c.useDefaultConf && (u.negativeText = ""), u.positiveText == null && !c.useDefaultConf && (u.positiveText = "我知道了"), u.closable == null && !c.useDefaultConf && (u.closable = !1), u.showIcon == null && !c.useDefaultConf && (u.showIcon = !0);
    const h = a(u, { width: 430, ...c }, "warning");
    return r = h, h;
  }, d = (u = {}, c = {}) => {
    u.negativeText == null && !c.useDefaultConf && (u.negativeText = ""), u.positiveText == null && !c.useDefaultConf && (u.positiveText = "我知道了"), u.closable == null && !c.useDefaultConf && (u.closable = !1), u.showIcon == null && !c.useDefaultConf && (u.showIcon = !0);
    const h = a(u, { width: 430, ...c }, "error");
    return o = h, h;
  };
  return si(() => {
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
};
function j2() {
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
      return f(Qc, {
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
    }), d.content = ef(a.content), d.onClose = function() {
      a.onClose && a.onClose(), e && e.destroy(), t && t.destroy(), r && r.destroy(), o && o.destroy(), e = null, t = null, r = null, o = null;
    }, M2.create(d);
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
const _2 = () => {
  const e = Ac();
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
}, W2 = {
  install: (e, t = {}) => {
    const { prefix: r = "p" } = t;
    e.component(`${r}-practical`, f2), e.component(`${r}-search`, B2), e.component(`${r}-form`, F2), e.component(`${r}-input`, ai), e.component(`${r}-select`, Zc), e.component(`${r}-switch`, Ea), e.component(`${r}-button`, rr), e.component(`${r}-data-table`, P2), e.component(`${r}-popconfirm`, $2), e.component(`${r}-pagination`, A2), e.component(`${r}-promised`, T2), e.component(`${r}-icon-wrapper`, t2), e.component(`${r}-icon`, po), e.component(`${r}-input-group`, K1), e.component(`${r}-input-group-label`, G1), e.component(`${r}-popover`, hr), e.component(`${r}-spin`, Xc), e.component(`${r}-collapse`, CC), e.component(`${r}-collapse-item`, SC), e.component(`${r}-dropdown`, Cc), e.component(`${r}-tooltip`, hc);
  }
};
export {
  N2 as createDiscreteFn,
  Bi as debounce,
  W2 as default,
  j2 as dialogDiscrete,
  v2 as throttle,
  Jc as useDelayLoading,
  H2 as useDialog,
  _2 as useModal
};
