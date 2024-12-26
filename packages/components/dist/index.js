import { ref as L, readonly as $n, watch as Ne, computed as z, getCurrentInstance as co, onMounted as zt, onBeforeUnmount as St, onBeforeMount as nr, reactive as fo, inject as ge, onActivated as md, onDeactivated as Aa, createTextVNode as Qt, Fragment as Qe, Comment as Da, defineComponent as ee, provide as $e, withDirectives as un, toRef as oe, h as f, Teleport as oi, nextTick as bt, renderSlot as zn, mergeProps as Vt, isVNode as bf, shallowRef as bd, watchEffect as et, Transition as _t, TransitionGroup as xf, vShow as wr, cloneVNode as xd, Text as Cf, markRaw as wl, onUnmounted as yf, createApp as wf, unref as de, openBlock as _e, createBlock as Ct, withCtx as yt, createVNode as Xn, mergeModels as An, useModel as eo, createSlots as ho, normalizeProps as Sf, guardReactiveProps as Bf, useAttrs as vo, createElementBlock as Mt, normalizeClass as xn, normalizeStyle as Yn, toDisplayString as bn, createCommentVNode as It, useTemplateRef as Sl, withModifiers as kf, renderList as Ai, resolveDynamicComponent as yo, toValue as Rf, useSlots as Cd, onScopeDispose as yd, createElementVNode as Ff } from "vue";
function Pf(e) {
  let t = ".", r = "__", o = "--", i;
  if (e) {
    let h = e.blockPrefix;
    h && (t = h), h = e.elementPrefix, h && (r = h), h = e.modifierPrefix, h && (o = h);
  }
  const a = {
    install(h) {
      i = h.c;
      const g = h.context;
      g.bem = {}, g.bem.b = null, g.bem.els = null;
    }
  };
  function l(h) {
    let g, b;
    return {
      before(m) {
        g = m.bem.b, b = m.bem.els, m.bem.els = null;
      },
      after(m) {
        m.bem.b = g, m.bem.els = b;
      },
      $({ context: m, props: C }) {
        return h = typeof h == "string" ? h : h({ context: m, props: C }), m.bem.b = h, `${(C == null ? void 0 : C.bPrefix) || t}${m.bem.b}`;
      }
    };
  }
  function s(h) {
    let g;
    return {
      before(b) {
        g = b.bem.els;
      },
      after(b) {
        b.bem.els = g;
      },
      $({ context: b, props: m }) {
        return h = typeof h == "string" ? h : h({ context: b, props: m }), b.bem.els = h.split(",").map((C) => C.trim()), b.bem.els.map((C) => `${(m == null ? void 0 : m.bPrefix) || t}${b.bem.b}${r}${C}`).join(", ");
      }
    };
  }
  function d(h) {
    return {
      $({ context: g, props: b }) {
        h = typeof h == "string" ? h : h({ context: g, props: b });
        const m = h.split(",").map((w) => w.trim());
        function C(w) {
          return m.map((B) => `&${(b == null ? void 0 : b.bPrefix) || t}${g.bem.b}${w !== void 0 ? `${r}${w}` : ""}${o}${B}`).join(", ");
        }
        const S = g.bem.els;
        if (S !== null) {
          if (process.env.NODE_ENV !== "production" && S.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${h}) is invalid, using modifier inside multiple elements is not allowed`);
          return C(S[0]);
        } else
          return C();
      }
    };
  }
  function u(h) {
    return {
      $({ context: g, props: b }) {
        h = typeof h == "string" ? h : h({ context: g, props: b });
        const m = g.bem.els;
        if (process.env.NODE_ENV !== "production" && m !== null && m.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${h}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(b == null ? void 0 : b.bPrefix) || t}${g.bem.b}${m !== null && m.length > 0 ? `${r}${m[0]}` : ""}${o}${h})`;
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
function zf(e) {
  let t = 0;
  for (let r = 0; r < e.length; ++r)
    e[r] === "&" && ++t;
  return t;
}
const wd = /\s*,(?![^(]*\))\s*/g, $f = /\s+/g;
function Af(e, t) {
  const r = [];
  return t.split(wd).forEach((o) => {
    let i = zf(o);
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
function Df(e, t) {
  const r = [];
  return t.split(wd).forEach((o) => {
    e.forEach((i) => {
      r.push((i && i + " ") + o);
    });
  }), r;
}
function Ef(e) {
  let t = [""];
  return e.forEach((r) => {
    r = r && r.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    r && (r.includes("&") ? t = Af(t, r) : t = Df(t, r));
  }), t.join(", ").replace($f, " ");
}
function Bl(e) {
  if (!e)
    return;
  const t = e.parentElement;
  t && t.removeChild(e);
}
function ii(e, t) {
  return (t ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Tf(e) {
  const t = document.createElement("style");
  return t.setAttribute("cssr-id", e), t;
}
function wo(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Of = /[A-Z]/g;
function Sd(e) {
  return e.replace(Of, (t) => "-" + t.toLowerCase());
}
function Mf(e, t = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((r) => t + `  ${Sd(r[0])}: ${r[1]};`).join(`
`) + `
` + t + "}" : `: ${e};`;
}
function If(e, t, r) {
  return typeof e == "function" ? e({
    context: t.context,
    props: r
  }) : e;
}
function kl(e, t, r, o) {
  if (!t)
    return "";
  const i = If(t, r, o);
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
    s = Sd(s), d != null && l.push(`  ${s}${Mf(d)}`);
  }), e && l.push("}"), l.join(`
`);
}
function ea(e, t, r) {
  e && e.forEach((o) => {
    if (Array.isArray(o))
      ea(o, t, r);
    else if (typeof o == "function") {
      const i = o(t);
      Array.isArray(i) ? ea(i, t, r) : i && r(i);
    } else o && r(o);
  });
}
function Bd(e, t, r, o, i) {
  const a = e.$;
  let l = "";
  if (!a || typeof a == "string")
    wo(a) ? l = a : t.push(a);
  else if (typeof a == "function") {
    const u = a({
      context: o.context,
      props: i
    });
    wo(u) ? l = u : t.push(u);
  } else if (a.before && a.before(o.context), !a.$ || typeof a.$ == "string")
    wo(a.$) ? l = a.$ : t.push(a.$);
  else if (a.$) {
    const u = a.$({
      context: o.context,
      props: i
    });
    wo(u) ? l = u : t.push(u);
  }
  const s = Ef(t), d = kl(s, e.props, o, i);
  l ? r.push(`${l} {`) : d.length && r.push(d), e.children && ea(e.children, {
    context: o.context,
    props: i
  }, (u) => {
    if (typeof u == "string") {
      const c = kl(s, { raw: u }, o, i);
      r.push(c);
    } else
      Bd(u, t, r, o, i);
  }), t.pop(), l && r.push("}"), a && a.after && a.after(o.context);
}
function Lf(e, t, r) {
  const o = [];
  return Bd(e, [], o, t, r), o.join(`

`);
}
function to(e) {
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
    i.forEach(Bl), t.els = [];
  else {
    const a = ii(r, o);
    a && i.includes(a) && (Bl(a), t.els = i.filter((l) => l !== a));
  }
}
function Rl(e, t) {
  e.push(t);
}
function Nf(e, t, r, o, i, a, l, s, d) {
  let u;
  if (r === void 0 && (u = t.render(o), r = to(u)), d) {
    d.adapter(r, u ?? t.render(o));
    return;
  }
  s === void 0 && (s = document.head);
  const c = ii(r, s);
  if (c !== null && !a)
    return c;
  const v = c ?? Tf(r);
  if (u === void 0 && (u = t.render(o)), v.textContent = u, c !== null)
    return c;
  if (l) {
    const p = s.querySelector(`meta[name="${l}"]`);
    if (p)
      return s.insertBefore(v, p), Rl(t.els, v), v;
  }
  return i ? s.insertBefore(v, s.querySelector("style, link")) : s.appendChild(v), Rl(t.els, v), v;
}
function Hf(e) {
  return Lf(this, this.instance, e);
}
function jf(e = {}) {
  const { id: t, ssr: r, props: o, head: i = !1, force: a = !1, anchorMetaName: l, parent: s } = e;
  return Nf(this.instance, this, t, o, i, a, l, s, r);
}
function Wf(e = {}) {
  const { id: t, parent: r } = e;
  _f(this.instance, this, t, r);
}
const So = function(e, t, r, o) {
  return {
    instance: e,
    $: t,
    props: r,
    children: o,
    els: [],
    render: Hf,
    mount: jf,
    unmount: Wf
  };
}, Vf = function(e, t, r, o) {
  return Array.isArray(t) ? So(e, { $: null }, null, t) : Array.isArray(r) ? So(e, t, null, r) : Array.isArray(o) ? So(e, t, r, o) : So(e, t, r, null);
};
function kd(e = {}) {
  const t = {
    c: (...r) => Vf(t, ...r),
    use: (r, ...o) => r.install(t, ...o),
    find: ii,
    context: {},
    config: e
  };
  return t;
}
function Kf(e, t) {
  if (e === void 0)
    return !1;
  if (t) {
    const { context: { ids: r } } = t;
    return r.has(e);
  }
  return ii(e) !== null;
}
const Uf = "n", no = `.${Uf}-`, qf = "__", Gf = "--", Rd = kd(), Fd = Pf({
  blockPrefix: no,
  elementPrefix: qf,
  modifierPrefix: Gf
});
Rd.use(Fd);
const {
  c: O,
  find: k2
} = Rd, {
  cB: F,
  cE: E,
  cM: _,
  cNotM: qe
} = Fd;
function ai(e) {
  return O(({
    props: {
      bPrefix: t
    }
  }) => `${t || no}modal, ${t || no}drawer`, [e]);
}
function Ea(e) {
  return O(({
    props: {
      bPrefix: t
    }
  }) => `${t || no}popover`, [e]);
}
function Pd(e) {
  return O(({
    props: {
      bPrefix: t
    }
  }) => `&${t || no}modal`, e);
}
const Xf = (...e) => O(">", [F(...e)]);
function Z(e, t) {
  return e + (t === "default" ? "" : t.replace(/^[a-z]/, (r) => r.toUpperCase()));
}
let Wo = [];
const zd = /* @__PURE__ */ new WeakMap();
function Yf() {
  Wo.forEach((e) => e(...zd.get(e))), Wo = [];
}
function Vo(e, ...t) {
  zd.set(e, t), !Wo.includes(e) && Wo.push(e) === 1 && requestAnimationFrame(Yf);
}
function Kt(e, t) {
  let { target: r } = e;
  for (; r; ) {
    if (r.dataset && r.dataset[t] !== void 0)
      return !0;
    r = r.parentElement;
  }
  return !1;
}
function Sr(e) {
  return e.composedPath()[0] || null;
}
function Ft(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function pt(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function Lt(e, t) {
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
const Fl = {
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
}, Pr = "^\\s*", zr = "\\s*$", Wn = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Vn = "([0-9A-Fa-f])", Kn = "([0-9A-Fa-f]{2})", Zf = new RegExp(`${Pr}rgb\\s*\\(${Wn},${Wn},${Wn}\\)${zr}`), Jf = new RegExp(`${Pr}rgba\\s*\\(${Wn},${Wn},${Wn},${Wn}\\)${zr}`), Qf = new RegExp(`${Pr}#${Vn}${Vn}${Vn}${zr}`), eh = new RegExp(`${Pr}#${Kn}${Kn}${Kn}${zr}`), th = new RegExp(`${Pr}#${Vn}${Vn}${Vn}${Vn}${zr}`), nh = new RegExp(`${Pr}#${Kn}${Kn}${Kn}${Kn}${zr}`);
function Wt(e) {
  return parseInt(e, 16);
}
function Zn(e) {
  try {
    let t;
    if (t = eh.exec(e))
      return [Wt(t[1]), Wt(t[2]), Wt(t[3]), 1];
    if (t = Zf.exec(e))
      return [Dt(t[1]), Dt(t[5]), Dt(t[9]), 1];
    if (t = Jf.exec(e))
      return [
        Dt(t[1]),
        Dt(t[5]),
        Dt(t[9]),
        qr(t[13])
      ];
    if (t = Qf.exec(e))
      return [
        Wt(t[1] + t[1]),
        Wt(t[2] + t[2]),
        Wt(t[3] + t[3]),
        1
      ];
    if (t = nh.exec(e))
      return [
        Wt(t[1]),
        Wt(t[2]),
        Wt(t[3]),
        qr(Wt(t[4]) / 255)
      ];
    if (t = th.exec(e))
      return [
        Wt(t[1] + t[1]),
        Wt(t[2] + t[2]),
        Wt(t[3] + t[3]),
        qr(Wt(t[4] + t[4]) / 255)
      ];
    if (e in Fl)
      return Zn(Fl[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (t) {
    throw t;
  }
}
function rh(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function ta(e, t, r, o) {
  return `rgba(${Dt(e)}, ${Dt(t)}, ${Dt(r)}, ${rh(o)})`;
}
function Di(e, t, r, o, i) {
  return Dt((e * t * (1 - o) + r * o) / i);
}
function Ue(e, t) {
  Array.isArray(e) || (e = Zn(e)), Array.isArray(t) || (t = Zn(t));
  const r = e[3], o = t[3], i = qr(r + o - r * o);
  return ta(Di(e[0], r, t[0], o, i), Di(e[1], r, t[1], o, i), Di(e[2], r, t[2], o, i), i);
}
function De(e, t) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : Zn(e);
  return t.alpha ? ta(r, o, i, t.alpha) : ta(r, o, i, a);
}
function Bo(e, t) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : Zn(e), { lightness: l = 1, alpha: s = 1 } = t;
  return oh([r * l, o * l, i * l, a * s]);
}
function qr(e) {
  const t = Math.round(Number(e) * 100) / 100;
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Dt(e) {
  const t = Math.round(Number(e));
  return t > 255 ? 255 : t < 0 ? 0 : t;
}
function oh(e) {
  const [t, r, o] = e;
  return 3 in e ? `rgba(${Dt(t)}, ${Dt(r)}, ${Dt(o)}, ${qr(e[3])})` : `rgba(${Dt(t)}, ${Dt(r)}, ${Dt(o)}, 1)`;
}
function cn(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function ih(e, t) {
  const r = [];
  for (let o = 0; o < e; ++o)
    r.push(t);
  return r;
}
function No(e) {
  return e.composedPath()[0];
}
const ah = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function lh(e, t, r) {
  if (e === "mousemoveoutside") {
    const o = (i) => {
      t.contains(No(i)) || r(i);
    };
    return {
      mousemove: o,
      touchstart: o
    };
  } else if (e === "clickoutside") {
    let o = !1;
    const i = (l) => {
      o = !t.contains(No(l));
    }, a = (l) => {
      o && (t.contains(No(l)) || r(l));
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
function $d(e, t, r) {
  const o = ah[e];
  let i = o.get(t);
  i === void 0 && o.set(t, i = /* @__PURE__ */ new WeakMap());
  let a = i.get(r);
  return a === void 0 && i.set(r, a = lh(e, t, r)), a;
}
function sh(e, t, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = $d(e, t, r);
    return Object.keys(i).forEach((a) => {
      rt(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function dh(e, t, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = $d(e, t, r);
    return Object.keys(i).forEach((a) => {
      We(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function uh() {
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
  function i(y, P, D) {
    const T = y[P];
    return y[P] = function() {
      return D.apply(y, arguments), T.apply(y, arguments);
    }, y;
  }
  function a(y, P) {
    y[P] = Event.prototype[P];
  }
  const l = /* @__PURE__ */ new WeakMap(), s = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function d() {
    var y;
    return (y = l.get(this)) !== null && y !== void 0 ? y : null;
  }
  function u(y, P) {
    s !== void 0 && Object.defineProperty(y, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: P ?? s.get
    });
  }
  const c = {
    bubble: {},
    capture: {}
  }, v = {};
  function p() {
    const y = function(P) {
      const { type: D, eventPhase: T, bubbles: U } = P, M = No(P);
      if (T === 2)
        return;
      const n = T === 1 ? "capture" : "bubble";
      let $ = M;
      const A = [];
      for (; $ === null && ($ = window), A.push($), $ !== window; )
        $ = $.parentNode || null;
      const N = c.capture[D], I = c.bubble[D];
      if (i(P, "stopPropagation", r), i(P, "stopImmediatePropagation", o), u(P, d), n === "capture") {
        if (N === void 0)
          return;
        for (let V = A.length - 1; V >= 0 && !e.has(P); --V) {
          const te = A[V], X = N.get(te);
          if (X !== void 0) {
            l.set(P, te);
            for (const K of X) {
              if (t.has(P))
                break;
              K(P);
            }
          }
          if (V === 0 && !U && I !== void 0) {
            const K = I.get(te);
            if (K !== void 0)
              for (const H of K) {
                if (t.has(P))
                  break;
                H(P);
              }
          }
        }
      } else if (n === "bubble") {
        if (I === void 0)
          return;
        for (let V = 0; V < A.length && !e.has(P); ++V) {
          const te = A[V], X = I.get(te);
          if (X !== void 0) {
            l.set(P, te);
            for (const K of X) {
              if (t.has(P))
                break;
              K(P);
            }
          }
        }
      }
      a(P, "stopPropagation"), a(P, "stopImmediatePropagation"), u(P);
    };
    return y.displayName = "evtdUnifiedHandler", y;
  }
  function x() {
    const y = function(P) {
      const { type: D, eventPhase: T } = P;
      if (T !== 2)
        return;
      const U = v[D];
      U !== void 0 && U.forEach((M) => M(P));
    };
    return y.displayName = "evtdUnifiedWindowEventHandler", y;
  }
  const h = p(), g = x();
  function b(y, P) {
    const D = c[y];
    return D[P] === void 0 && (D[P] = /* @__PURE__ */ new Map(), window.addEventListener(P, h, y === "capture")), D[P];
  }
  function m(y) {
    return v[y] === void 0 && (v[y] = /* @__PURE__ */ new Set(), window.addEventListener(y, g)), v[y];
  }
  function C(y, P) {
    let D = y.get(P);
    return D === void 0 && y.set(P, D = /* @__PURE__ */ new Set()), D;
  }
  function S(y, P, D, T) {
    const U = c[P][D];
    if (U !== void 0) {
      const M = U.get(y);
      if (M !== void 0 && M.has(T))
        return !0;
    }
    return !1;
  }
  function w(y, P) {
    const D = v[y];
    return !!(D !== void 0 && D.has(P));
  }
  function B(y, P, D, T) {
    let U;
    if (typeof T == "object" && T.once === !0 ? U = (N) => {
      R(y, P, U, T), D(N);
    } : U = D, sh(y, P, U, T))
      return;
    const n = T === !0 || typeof T == "object" && T.capture === !0 ? "capture" : "bubble", $ = b(n, y), A = C($, P);
    if (A.has(U) || A.add(U), P === window) {
      const N = m(y);
      N.has(U) || N.add(U);
    }
  }
  function R(y, P, D, T) {
    if (dh(y, P, D, T))
      return;
    const M = T === !0 || typeof T == "object" && T.capture === !0, n = M ? "capture" : "bubble", $ = b(n, y), A = C($, P);
    if (P === window && !S(P, M ? "bubble" : "capture", y, D) && w(y, D)) {
      const I = v[y];
      I.delete(D), I.size === 0 && (window.removeEventListener(y, g), v[y] = void 0);
    }
    A.has(D) && A.delete(D), A.size === 0 && $.delete(P), $.size === 0 && (window.removeEventListener(y, h, n === "capture"), c[n][y] = void 0);
  }
  return {
    on: B,
    off: R
  };
}
const { on: rt, off: We } = uh();
function Ad(e) {
  const t = L(!!e.value);
  if (t.value)
    return $n(t);
  const r = Ne(e, (o) => {
    o && (t.value = !0, r());
  });
  return $n(t);
}
function Ve(e) {
  const t = z(e), r = L(t.value);
  return Ne(t, (o) => {
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
function Ta() {
  return co() !== null;
}
const Oa = typeof window < "u";
let mr, Gr;
const ch = () => {
  var e, t;
  mr = Oa ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t === void 0 ? void 0 : t.ready : void 0, Gr = !1, mr !== void 0 ? mr.then(() => {
    Gr = !0;
  }) : Gr = !0;
};
ch();
function fh(e) {
  if (Gr)
    return;
  let t = !1;
  zt(() => {
    Gr || mr == null || mr.then(() => {
      t || e();
    });
  }), St(() => {
    t = !0;
  });
}
const Wr = L(null);
function Pl(e) {
  if (e.clientX > 0 || e.clientY > 0)
    Wr.value = {
      x: e.clientX,
      y: e.clientY
    };
  else {
    const { target: t } = e;
    if (t instanceof Element) {
      const { left: r, top: o, width: i, height: a } = t.getBoundingClientRect();
      r > 0 || o > 0 ? Wr.value = {
        x: r + i / 2,
        y: o + a / 2
      } : Wr.value = { x: 0, y: 0 };
    } else
      Wr.value = null;
  }
}
let ko = 0, zl = !0;
function Ko() {
  if (!Oa)
    return $n(L(null));
  ko === 0 && rt("click", document, Pl, !0);
  const e = () => {
    ko += 1;
  };
  return zl && (zl = Ta()) ? (nr(e), St(() => {
    ko -= 1, ko === 0 && We("click", document, Pl, !0);
  })) : e(), $n(Wr);
}
const hh = L(void 0);
let Ro = 0;
function $l() {
  hh.value = Date.now();
}
let Al = !0;
function Uo(e) {
  if (!Oa)
    return $n(L(!1));
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
  Ro === 0 && rt("click", window, $l, !0);
  const a = () => {
    Ro += 1, rt("click", window, i, !0);
  };
  return Al && (Al = Ta()) ? (nr(a), St(() => {
    Ro -= 1, Ro === 0 && We("click", window, $l, !0), We("click", window, i, !0), o();
  })) : a(), $n(t);
}
function Et(e, t) {
  return Ne(e, (r) => {
    r !== void 0 && (t.value = r);
  }), z(() => e.value === void 0 ? t.value : e.value);
}
function $r() {
  const e = L(!1);
  return zt(() => {
    e.value = !0;
  }), $n(e);
}
function Ma(e, t) {
  return z(() => {
    for (const r of t)
      if (e[r] !== void 0)
        return e[r];
    return e[t[t.length - 1]];
  });
}
const vh = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function ph() {
  return vh;
}
function gh(e = {}, t) {
  const r = fo({
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
        const { stop: v = !1, prevent: p = !1 } = c;
        v && d.stopPropagation(), p && d.preventDefault(), c.handler(d);
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
        const { stop: v = !1, prevent: p = !1 } = c;
        v && d.stopPropagation(), p && d.preventDefault(), c.handler(d);
      }
    });
  }, s = () => {
    (t === void 0 || t.value) && (rt("keydown", document, a), rt("keyup", document, l)), t !== void 0 && Ne(t, (d) => {
      d ? (rt("keydown", document, a), rt("keyup", document, l)) : (We("keydown", document, a), We("keyup", document, l));
    });
  };
  return Ta() ? (nr(s), St(() => {
    (t === void 0 || t.value) && (We("keydown", document, a), We("keyup", document, l));
  })) : s(), $n(r);
}
const Ia = "n-internal-select-menu", Dd = "n-internal-select-menu-body", li = "n-drawer-body", si = "n-modal-body", mh = "n-modal-provider", Ed = "n-modal", po = "n-popover-body", Td = "__disabled__";
function fn(e) {
  const t = ge(si, null), r = ge(li, null), o = ge(po, null), i = ge(Dd, null), a = L();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const l = () => {
      a.value = document.fullscreenElement;
    };
    zt(() => {
      rt("fullscreenchange", document, l);
    }), St(() => {
      We("fullscreenchange", document, l);
    });
  }
  return Ve(() => {
    var l;
    const {
      to: s
    } = e;
    return s !== void 0 ? s === !1 ? Td : s === !0 ? a.value || "body" : s : t != null && t.value ? (l = t.value.$el) !== null && l !== void 0 ? l : t.value : r != null && r.value ? r.value : o != null && o.value ? o.value : i != null && i.value ? i.value : s ?? (a.value || "body");
  });
}
fn.tdkey = Td;
fn.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function bh(e, t, r) {
  var o;
  const i = ge(e, null);
  if (i === null) return;
  const a = (o = co()) === null || o === void 0 ? void 0 : o.proxy;
  Ne(r, l), l(r.value), St(() => {
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
function xh(e, t, r) {
  const o = L(e.value);
  let i = null;
  return Ne(e, (a) => {
    i !== null && window.clearTimeout(i), a === !0 ? r && !r.value ? o.value = !0 : i = window.setTimeout(() => {
      o.value = !0;
    }, t) : o.value = !1;
  }), o;
}
const Ar = typeof document < "u" && typeof window < "u", La = L(!1);
function Dl() {
  La.value = !0;
}
function El() {
  La.value = !1;
}
let _r = 0;
function Ch() {
  return Ar && (nr(() => {
    _r || (window.addEventListener("compositionstart", Dl), window.addEventListener("compositionend", El)), _r++;
  }), St(() => {
    _r <= 1 ? (window.removeEventListener("compositionstart", Dl), window.removeEventListener("compositionend", El), _r = 0) : _r--;
  })), La;
}
let fr = 0, Tl = "", Ol = "", Ml = "", Il = "";
const Ll = L("0px");
function yh(e) {
  if (typeof document > "u") return;
  const t = document.documentElement;
  let r, o = !1;
  const i = () => {
    t.style.marginRight = Tl, t.style.overflow = Ol, t.style.overflowX = Ml, t.style.overflowY = Il, Ll.value = "0px";
  };
  zt(() => {
    r = Ne(e, (a) => {
      if (a) {
        if (!fr) {
          const l = window.innerWidth - t.offsetWidth;
          l > 0 && (Tl = t.style.marginRight, t.style.marginRight = `${l}px`, Ll.value = `${l}px`), Ol = t.style.overflow, Ml = t.style.overflowX, Il = t.style.overflowY, t.style.overflow = "hidden", t.style.overflowX = "hidden", t.style.overflowY = "hidden";
        }
        o = !0, fr++;
      } else
        fr--, fr || i(), o = !1;
    }, {
      immediate: !0
    });
  }), St(() => {
    r == null || r(), o && (fr--, fr || i(), o = !1);
  });
}
function wh(e) {
  const t = {
    isDeactivated: !1
  };
  let r = !1;
  return md(() => {
    if (t.isDeactivated = !1, !r) {
      r = !0;
      return;
    }
    e();
  }), Aa(() => {
    t.isDeactivated = !0, r || (r = !0);
  }), t;
}
function na(e, t, r = "default") {
  const o = t[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  return o();
}
function ra(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(Qt(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        ra(o, t, r);
        return;
      }
      if (o.type === Qe) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && ra(o.children, t, r);
      } else o.type !== Da && r.push(o);
    }
  }), r;
}
function _l(e, t, r = "default") {
  const o = t[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  const i = ra(o());
  if (i.length === 1)
    return i[0];
  throw new Error(`[vueuc/${e}]: slot[${r}] should have exactly one child.`);
}
let kn = null;
function Od() {
  if (kn === null && (kn = document.getElementById("v-binder-view-measurer"), kn === null)) {
    kn = document.createElement("div"), kn.id = "v-binder-view-measurer";
    const { style: e } = kn;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(kn);
  }
  return kn.getBoundingClientRect();
}
function Sh(e, t) {
  const r = Od();
  return {
    top: t,
    left: e,
    height: 0,
    width: 0,
    right: r.width - e,
    bottom: r.height - t
  };
}
function Ei(e) {
  const t = e.getBoundingClientRect(), r = Od();
  return {
    left: t.left - r.left,
    top: t.top - r.top,
    bottom: r.height + r.top - t.bottom,
    right: r.width + r.left - t.right,
    width: t.width,
    height: t.height
  };
}
function Bh(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Md(e) {
  if (e === null)
    return null;
  const t = Bh(e);
  if (t === null)
    return null;
  if (t.nodeType === 9)
    return document;
  if (t.nodeType === 1) {
    const { overflow: r, overflowX: o, overflowY: i } = getComputedStyle(t);
    if (/(auto|scroll|overlay)/.test(r + i + o))
      return t;
  }
  return Md(t);
}
const _a = ee({
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
    $e("VBinder", (t = co()) === null || t === void 0 ? void 0 : t.proxy);
    const r = ge("VBinder", null), o = L(null), i = (m) => {
      o.value = m, r && e.syncTargetWithParent && r.setTargetRef(m);
    };
    let a = [];
    const l = () => {
      let m = o.value;
      for (; m = Md(m), m !== null; )
        a.push(m);
      for (const C of a)
        rt("scroll", C, v, !0);
    }, s = () => {
      for (const m of a)
        We("scroll", m, v, !0);
      a = [];
    }, d = /* @__PURE__ */ new Set(), u = (m) => {
      d.size === 0 && l(), d.has(m) || d.add(m);
    }, c = (m) => {
      d.has(m) && d.delete(m), d.size === 0 && s();
    }, v = () => {
      Vo(p);
    }, p = () => {
      d.forEach((m) => m());
    }, x = /* @__PURE__ */ new Set(), h = (m) => {
      x.size === 0 && rt("resize", window, b), x.has(m) || x.add(m);
    }, g = (m) => {
      x.has(m) && x.delete(m), x.size === 0 && We("resize", window, b);
    }, b = () => {
      x.forEach((m) => m());
    };
    return St(() => {
      We("resize", window, b), s();
    }), {
      targetRef: o,
      setTargetRef: i,
      addScrollListener: u,
      removeScrollListener: c,
      addResizeListener: h,
      removeResizeListener: g
    };
  },
  render() {
    return na("binder", this.$slots);
  }
}), Na = ee({
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
    return e ? un(_l("follower", this.$slots), [
      [t]
    ]) : _l("follower", this.$slots);
  }
}), hr = "@@mmoContext", kh = {
  mounted(e, { value: t }) {
    e[hr] = {
      handler: void 0
    }, typeof t == "function" && (e[hr].handler = t, rt("mousemoveoutside", e, t));
  },
  updated(e, { value: t }) {
    const r = e[hr];
    typeof t == "function" ? r.handler ? r.handler !== t && (We("mousemoveoutside", e, r.handler), r.handler = t, rt("mousemoveoutside", e, t)) : (e[hr].handler = t, rt("mousemoveoutside", e, t)) : r.handler && (We("mousemoveoutside", e, r.handler), r.handler = void 0);
  },
  unmounted(e) {
    const { handler: t } = e[hr];
    t && We("mousemoveoutside", e, t), e[hr].handler = void 0;
  }
}, vr = "@@coContext", ro = {
  mounted(e, { value: t, modifiers: r }) {
    e[vr] = {
      handler: void 0
    }, typeof t == "function" && (e[vr].handler = t, rt("clickoutside", e, t, {
      capture: r.capture
    }));
  },
  updated(e, { value: t, modifiers: r }) {
    const o = e[vr];
    typeof t == "function" ? o.handler ? o.handler !== t && (We("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = t, rt("clickoutside", e, t, {
      capture: r.capture
    })) : (e[vr].handler = t, rt("clickoutside", e, t, {
      capture: r.capture
    })) : o.handler && (We("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = void 0);
  },
  unmounted(e, { modifiers: t }) {
    const { handler: r } = e[vr];
    r && We("clickoutside", e, r, {
      capture: t.capture
    }), e[vr].handler = void 0;
  }
};
function Rh(e, t) {
  console.error(`[vdirs/${e}]: ${t}`);
}
class Fh {
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
    o.has(t) ? o.delete(t) : r === void 0 && Rh("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const Ti = new Fh(), pr = "@@ziContext", Ha = {
  mounted(e, t) {
    const { value: r = {} } = t, { zIndex: o, enabled: i } = r;
    e[pr] = {
      enabled: !!i,
      initialized: !1
    }, i && (Ti.ensureZIndex(e, o), e[pr].initialized = !0);
  },
  updated(e, t) {
    const { value: r = {} } = t, { zIndex: o, enabled: i } = r, a = e[pr].enabled;
    i && !a && (Ti.ensureZIndex(e, o), e[pr].initialized = !0), e[pr].enabled = !!i;
  },
  unmounted(e, t) {
    if (!e[pr].initialized)
      return;
    const { value: r = {} } = t, { zIndex: o } = r;
    Ti.unregister(e, o);
  }
}, Ph = "@css-render/vue3-ssr";
function zh(e, t) {
  return `<style cssr-id="${e}">
${t}
</style>`;
}
function $h(e, t, r) {
  const { styles: o, ids: i } = r;
  i.has(e) || o !== null && (i.add(e), o.push(zh(e, t)));
}
const Ah = typeof document < "u";
function rr() {
  if (Ah)
    return;
  const e = ge(Ph, null);
  if (e !== null)
    return {
      adapter: (t, r) => $h(t, r, e),
      context: e
    };
}
function Nl(e, t) {
  console.error(`[vueuc/${e}]: ${t}`);
}
const { c: Pn } = kd(), ja = "vueuc-style";
function Hl(e) {
  return e & -e;
}
class Id {
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
      i[t] += r, t += Hl(t);
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
      a += r[t], t -= Hl(t);
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
function jl(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const Ld = ee({
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
      showTeleport: Ad(oe(e, "show")),
      mergedTo: z(() => {
        const { to: t } = e;
        return t ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? na("lazy-teleport", this.$slots) : f(oi, {
      disabled: this.disabled,
      to: this.mergedTo
    }, na("lazy-teleport", this.$slots)) : null;
  }
}), Fo = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Wl = {
  start: "end",
  center: "center",
  end: "start"
}, Oi = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, Dh = {
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
}, Eh = {
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
}, Th = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, Vl = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, Kl = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Oh(e, t, r, o, i, a) {
  if (!i || a)
    return { placement: e, top: 0, left: 0 };
  const [l, s] = e.split("-");
  let d = s ?? "center", u = {
    top: 0,
    left: 0
  };
  const c = (x, h, g) => {
    let b = 0, m = 0;
    const C = r[x] - t[h] - t[x];
    return C > 0 && o && (g ? m = Vl[h] ? C : -C : b = Vl[h] ? C : -C), {
      left: b,
      top: m
    };
  }, v = l === "left" || l === "right";
  if (d !== "center") {
    const x = Th[e], h = Fo[x], g = Oi[x];
    if (r[g] > t[g]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        t[x] + t[g] < r[g]
      ) {
        const b = (r[g] - t[g]) / 2;
        t[x] < b || t[h] < b ? t[x] < t[h] ? (d = Wl[s], u = c(g, h, v)) : u = c(g, x, v) : d = "center";
      }
    } else r[g] < t[g] && t[h] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    t[x] > t[h] && (d = Wl[s]);
  } else {
    const x = l === "bottom" || l === "top" ? "left" : "top", h = Fo[x], g = Oi[x], b = (r[g] - t[g]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (t[x] < b || t[h] < b) && (t[x] > t[h] ? (d = Kl[x], u = c(g, x, v)) : (d = Kl[h], u = c(g, h, v)));
  }
  let p = l;
  return (
    // space is not enough
    t[l] < r[Oi[l]] && // opposite position's space is larger
    t[l] < t[Fo[l]] && (p = Fo[l]), {
      placement: d !== "center" ? `${p}-${d}` : p,
      left: u.left,
      top: u.top
    }
  );
}
function Mh(e, t) {
  return t ? Eh[e] : Dh[e];
}
function Ih(e, t, r, o, i, a) {
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
const Lh = Pn([
  Pn(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  Pn(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    Pn("> *", {
      pointerEvents: "all"
    })
  ])
]), Wa = ee({
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
    const t = ge("VBinder"), r = Ve(() => e.enabled !== void 0 ? e.enabled : e.show), o = L(null), i = L(null), a = () => {
      const { syncTrigger: p } = e;
      p.includes("scroll") && t.addScrollListener(d), p.includes("resize") && t.addResizeListener(d);
    }, l = () => {
      t.removeScrollListener(d), t.removeResizeListener(d);
    };
    zt(() => {
      r.value && (d(), a());
    });
    const s = rr();
    Lh.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: ja,
      ssr: s
    }), St(() => {
      l();
    }), fh(() => {
      r.value && d();
    });
    const d = () => {
      if (!r.value)
        return;
      const p = o.value;
      if (p === null)
        return;
      const x = t.targetRef, { x: h, y: g, overlap: b } = e, m = h !== void 0 && g !== void 0 ? Sh(h, g) : Ei(x);
      p.style.setProperty("--v-target-width", `${Math.round(m.width)}px`), p.style.setProperty("--v-target-height", `${Math.round(m.height)}px`);
      const { width: C, minWidth: S, placement: w, internalShift: B, flip: R } = e;
      p.setAttribute("v-placement", w), b ? p.setAttribute("v-overlap", "") : p.removeAttribute("v-overlap");
      const { style: y } = p;
      C === "target" ? y.width = `${m.width}px` : C !== void 0 ? y.width = C : y.width = "", S === "target" ? y.minWidth = `${m.width}px` : S !== void 0 ? y.minWidth = S : y.minWidth = "";
      const P = Ei(p), D = Ei(i.value), { left: T, top: U, placement: M } = Oh(w, m, P, B, R, b), n = Mh(M, b), { left: $, top: A, transform: N } = Ih(M, D, m, U, T, b);
      p.setAttribute("v-placement", M), p.style.setProperty("--v-offset-left", `${Math.round(T)}px`), p.style.setProperty("--v-offset-top", `${Math.round(U)}px`), p.style.transform = `translateX(${$}) translateY(${A}) ${N}`, p.style.setProperty("--v-transform-origin", n), p.style.transformOrigin = n;
    };
    Ne(r, (p) => {
      p ? (a(), u()) : l();
    });
    const u = () => {
      bt().then(d).catch((p) => console.error(p));
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
      Ne(oe(e, p), d);
    }), ["teleportDisabled"].forEach((p) => {
      Ne(oe(e, p), u);
    }), Ne(oe(e, "syncTrigger"), (p) => {
      p.includes("resize") ? t.addResizeListener(d) : t.removeResizeListener(d), p.includes("scroll") ? t.addScrollListener(d) : t.removeScrollListener(d);
    });
    const c = $r(), v = Ve(() => {
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
      mergedTo: v,
      syncPosition: d
    };
  },
  render() {
    return f(Ld, {
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
        return this.zindexable ? un(r, [
          [
            Ha,
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
var qn = [], _h = function() {
  return qn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Nh = function() {
  return qn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Ul = "ResizeObserver loop completed with undelivered notifications.", Hh = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Ul
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Ul), window.dispatchEvent(e);
}, oo;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(oo || (oo = {}));
var Gn = function(e) {
  return Object.freeze(e);
}, jh = /* @__PURE__ */ function() {
  function e(t, r) {
    this.inlineSize = t, this.blockSize = r, Gn(this);
  }
  return e;
}(), _d = function() {
  function e(t, r, o, i) {
    return this.x = t, this.y = r, this.width = o, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Gn(this);
  }
  return e.prototype.toJSON = function() {
    var t = this, r = t.x, o = t.y, i = t.top, a = t.right, l = t.bottom, s = t.left, d = t.width, u = t.height;
    return { x: r, y: o, top: i, right: a, bottom: l, left: s, width: d, height: u };
  }, e.fromRect = function(t) {
    return new e(t.x, t.y, t.width, t.height);
  }, e;
}(), Va = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Nd = function(e) {
  if (Va(e)) {
    var t = e.getBBox(), r = t.width, o = t.height;
    return !r && !o;
  }
  var i = e, a = i.offsetWidth, l = i.offsetHeight;
  return !(a || l || e.getClientRects().length);
}, ql = function(e) {
  var t;
  if (e instanceof Element)
    return !0;
  var r = (t = e == null ? void 0 : e.ownerDocument) === null || t === void 0 ? void 0 : t.defaultView;
  return !!(r && e instanceof r.Element);
}, Wh = function(e) {
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
}, Xr = typeof window < "u" ? window : {}, Po = /* @__PURE__ */ new WeakMap(), Gl = /auto|scroll/, Vh = /^tb|vertical/, Kh = /msie|trident/i.test(Xr.navigator && Xr.navigator.userAgent), on = function(e) {
  return parseFloat(e || "0");
}, br = function(e, t, r) {
  return e === void 0 && (e = 0), t === void 0 && (t = 0), r === void 0 && (r = !1), new jh((r ? t : e) || 0, (r ? e : t) || 0);
}, Xl = Gn({
  devicePixelContentBoxSize: br(),
  borderBoxSize: br(),
  contentBoxSize: br(),
  contentRect: new _d(0, 0, 0, 0)
}), Hd = function(e, t) {
  if (t === void 0 && (t = !1), Po.has(e) && !t)
    return Po.get(e);
  if (Nd(e))
    return Po.set(e, Xl), Xl;
  var r = getComputedStyle(e), o = Va(e) && e.ownerSVGElement && e.getBBox(), i = !Kh && r.boxSizing === "border-box", a = Vh.test(r.writingMode || ""), l = !o && Gl.test(r.overflowY || ""), s = !o && Gl.test(r.overflowX || ""), d = o ? 0 : on(r.paddingTop), u = o ? 0 : on(r.paddingRight), c = o ? 0 : on(r.paddingBottom), v = o ? 0 : on(r.paddingLeft), p = o ? 0 : on(r.borderTopWidth), x = o ? 0 : on(r.borderRightWidth), h = o ? 0 : on(r.borderBottomWidth), g = o ? 0 : on(r.borderLeftWidth), b = v + u, m = d + c, C = g + x, S = p + h, w = s ? e.offsetHeight - S - e.clientHeight : 0, B = l ? e.offsetWidth - C - e.clientWidth : 0, R = i ? b + C : 0, y = i ? m + S : 0, P = o ? o.width : on(r.width) - R - B, D = o ? o.height : on(r.height) - y - w, T = P + b + B + C, U = D + m + w + S, M = Gn({
    devicePixelContentBoxSize: br(Math.round(P * devicePixelRatio), Math.round(D * devicePixelRatio), a),
    borderBoxSize: br(T, U, a),
    contentBoxSize: br(P, D, a),
    contentRect: new _d(v, d, P, D)
  });
  return Po.set(e, M), M;
}, jd = function(e, t, r) {
  var o = Hd(e, r), i = o.borderBoxSize, a = o.contentBoxSize, l = o.devicePixelContentBoxSize;
  switch (t) {
    case oo.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case oo.BORDER_BOX:
      return i;
    default:
      return a;
  }
}, Uh = /* @__PURE__ */ function() {
  function e(t) {
    var r = Hd(t);
    this.target = t, this.contentRect = r.contentRect, this.borderBoxSize = Gn([r.borderBoxSize]), this.contentBoxSize = Gn([r.contentBoxSize]), this.devicePixelContentBoxSize = Gn([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Wd = function(e) {
  if (Nd(e))
    return 1 / 0;
  for (var t = 0, r = e.parentNode; r; )
    t += 1, r = r.parentNode;
  return t;
}, qh = function() {
  var e = 1 / 0, t = [];
  qn.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(u) {
        var c = new Uh(u.target), v = Wd(u.target);
        s.push(c), u.lastReportedSize = jd(u.target, u.observedBox), v < e && (e = v);
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
}, Yl = function(e) {
  qn.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(i) {
      i.isActive() && (Wd(i.target) > e ? r.activeTargets.push(i) : r.skippedTargets.push(i));
    });
  });
}, Gh = function() {
  var e = 0;
  for (Yl(e); _h(); )
    e = qh(), Yl(e);
  return Nh() && Hh(), e > 0;
}, Mi, Vd = [], Xh = function() {
  return Vd.splice(0).forEach(function(e) {
    return e();
  });
}, Yh = function(e) {
  if (!Mi) {
    var t = 0, r = document.createTextNode(""), o = { characterData: !0 };
    new MutationObserver(function() {
      return Xh();
    }).observe(r, o), Mi = function() {
      r.textContent = "".concat(t ? t-- : t++);
    };
  }
  Vd.push(e), Mi();
}, Zh = function(e) {
  Yh(function() {
    requestAnimationFrame(e);
  });
}, Ho = 0, Jh = function() {
  return !!Ho;
}, Qh = 250, e0 = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Zl = [
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
], Jl = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, Ii = !1, t0 = function() {
  function e() {
    var t = this;
    this.stopped = !0, this.listener = function() {
      return t.schedule();
    };
  }
  return e.prototype.run = function(t) {
    var r = this;
    if (t === void 0 && (t = Qh), !Ii) {
      Ii = !0;
      var o = Jl(t);
      Zh(function() {
        var i = !1;
        try {
          i = Gh();
        } finally {
          if (Ii = !1, t = o - Jl(), !Jh())
            return;
          i ? r.run(1e3) : t > 0 ? r.run(t) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var t = this, r = function() {
      return t.observer && t.observer.observe(document.body, e0);
    };
    document.body ? r() : Xr.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var t = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Zl.forEach(function(r) {
      return Xr.addEventListener(r, t.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var t = this;
    this.stopped || (this.observer && this.observer.disconnect(), Zl.forEach(function(r) {
      return Xr.removeEventListener(r, t.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), oa = new t0(), Ql = function(e) {
  !Ho && e > 0 && oa.start(), Ho += e, !Ho && oa.stop();
}, n0 = function(e) {
  return !Va(e) && !Wh(e) && getComputedStyle(e).display === "inline";
}, r0 = function() {
  function e(t, r) {
    this.target = t, this.observedBox = r || oo.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var t = jd(this.target, this.observedBox, !0);
    return n0(this.target) && (this.lastReportedSize = t), this.lastReportedSize.inlineSize !== t.inlineSize || this.lastReportedSize.blockSize !== t.blockSize;
  }, e;
}(), o0 = /* @__PURE__ */ function() {
  function e(t, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = t, this.callback = r;
  }
  return e;
}(), zo = /* @__PURE__ */ new WeakMap(), es = function(e, t) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === t)
      return r;
  return -1;
}, $o = function() {
  function e() {
  }
  return e.connect = function(t, r) {
    var o = new o0(t, r);
    zo.set(t, o);
  }, e.observe = function(t, r, o) {
    var i = zo.get(t), a = i.observationTargets.length === 0;
    es(i.observationTargets, r) < 0 && (a && qn.push(i), i.observationTargets.push(new r0(r, o && o.box)), Ql(1), oa.schedule());
  }, e.unobserve = function(t, r) {
    var o = zo.get(t), i = es(o.observationTargets, r), a = o.observationTargets.length === 1;
    i >= 0 && (a && qn.splice(qn.indexOf(o), 1), o.observationTargets.splice(i, 1), Ql(-1));
  }, e.disconnect = function(t) {
    var r = this, o = zo.get(t);
    o.observationTargets.slice().forEach(function(i) {
      return r.unobserve(t, i.target);
    }), o.activeTargets.splice(0, o.activeTargets.length);
  }, e;
}(), i0 = function() {
  function e(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof t != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    $o.connect(this, t);
  }
  return e.prototype.observe = function(t, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!ql(t))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    $o.observe(this, t, r);
  }, e.prototype.unobserve = function(t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!ql(t))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    $o.unobserve(this, t);
  }, e.prototype.disconnect = function() {
    $o.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class a0 {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || i0)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const Yr = new a0(), Br = ee({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let t = !1;
    const r = co().proxy;
    function o(i) {
      const { onResize: a } = e;
      a !== void 0 && a(i);
    }
    zt(() => {
      const i = r.$el;
      if (i === void 0) {
        Nl("resize-observer", "$el does not exist.");
        return;
      }
      if (i.nextElementSibling !== i.nextSibling && i.nodeType === 3 && i.nodeValue !== "") {
        Nl("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      i.nextElementSibling !== null && (Yr.registerHandler(i.nextElementSibling, o), t = !0);
    }), St(() => {
      t && Yr.unregisterHandler(r.$el.nextElementSibling);
    });
  },
  render() {
    return zn(this.$slots, "default");
  }
});
let Ao;
function l0() {
  return typeof document > "u" ? !1 : (Ao === void 0 && ("matchMedia" in window ? Ao = window.matchMedia("(pointer:coarse)").matches : Ao = !1), Ao);
}
let Li;
function ts() {
  return typeof document > "u" ? 1 : (Li === void 0 && (Li = "chrome" in window ? window.devicePixelRatio : 1), Li);
}
const Kd = "VVirtualListXScroll";
function s0({ columnsRef: e, renderColRef: t, renderItemWithColsRef: r }) {
  const o = L(0), i = L(0), a = z(() => {
    const u = e.value;
    if (u.length === 0)
      return null;
    const c = new Id(u.length, 0);
    return u.forEach((v, p) => {
      c.add(p, v.width);
    }), c;
  }), l = Ve(() => {
    const u = a.value;
    return u !== null ? Math.max(u.getBound(i.value) - 1, 0) : 0;
  }), s = (u) => {
    const c = a.value;
    return c !== null ? c.sum(u) : 0;
  }, d = Ve(() => {
    const u = a.value;
    return u !== null ? Math.min(u.getBound(i.value + o.value) + 1, e.value.length - 1) : 0;
  });
  return $e(Kd, {
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
const ns = ee({
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
      ge(Kd)
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
}), d0 = Pn(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  Pn("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    Pn("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), Ka = ee({
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
    const t = rr();
    d0.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: ja,
      ssr: t
    }), zt(() => {
      const { defaultScrollIndex: n, defaultScrollKey: $ } = e;
      n != null ? b({ index: n }) : $ != null && b({ key: $ });
    });
    let r = !1, o = !1;
    md(() => {
      if (r = !1, !o) {
        o = !0;
        return;
      }
      b({ top: x.value, left: l.value });
    }), Aa(() => {
      r = !0, o || (o = !0);
    });
    const i = Ve(() => {
      if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0)
        return;
      let n = 0;
      return e.columns.forEach(($) => {
        n += $.width;
      }), n;
    }), a = z(() => {
      const n = /* @__PURE__ */ new Map(), { keyField: $ } = e;
      return e.items.forEach((A, N) => {
        n.set(A[$], N);
      }), n;
    }), { scrollLeftRef: l, listWidthRef: s } = s0({
      columnsRef: oe(e, "columns"),
      renderColRef: oe(e, "renderCol"),
      renderItemWithColsRef: oe(e, "renderItemWithCols")
    }), d = L(null), u = L(void 0), c = /* @__PURE__ */ new Map(), v = z(() => {
      const { items: n, itemSize: $, keyField: A } = e, N = new Id(n.length, $);
      return n.forEach((I, V) => {
        const te = I[A], X = c.get(te);
        X !== void 0 && N.add(V, X);
      }), N;
    }), p = L(0), x = L(0), h = Ve(() => Math.max(v.value.getBound(x.value - Ft(e.paddingTop)) - 1, 0)), g = z(() => {
      const { value: n } = u;
      if (n === void 0)
        return [];
      const { items: $, itemSize: A } = e, N = h.value, I = Math.min(N + Math.ceil(n / A + 1), $.length - 1), V = [];
      for (let te = N; te <= I; ++te)
        V.push($[te]);
      return V;
    }), b = (n, $) => {
      if (typeof n == "number") {
        w(n, $, "auto");
        return;
      }
      const { left: A, top: N, index: I, key: V, position: te, behavior: X, debounce: K = !0 } = n;
      if (A !== void 0 || N !== void 0)
        w(A, N, X);
      else if (I !== void 0)
        S(I, X, K);
      else if (V !== void 0) {
        const H = a.value.get(V);
        H !== void 0 && S(H, X, K);
      } else te === "bottom" ? w(0, Number.MAX_SAFE_INTEGER, X) : te === "top" && w(0, 0, X);
    };
    let m, C = null;
    function S(n, $, A) {
      const { value: N } = v, I = N.sum(n) + Ft(e.paddingTop);
      if (!A)
        d.value.scrollTo({
          left: 0,
          top: I,
          behavior: $
        });
      else {
        m = n, C !== null && window.clearTimeout(C), C = window.setTimeout(() => {
          m = void 0, C = null;
        }, 16);
        const { scrollTop: V, offsetHeight: te } = d.value;
        if (I > V) {
          const X = N.get(n);
          I + X <= V + te || d.value.scrollTo({
            left: 0,
            top: I + X - te,
            behavior: $
          });
        } else
          d.value.scrollTo({
            left: 0,
            top: I,
            behavior: $
          });
      }
    }
    function w(n, $, A) {
      d.value.scrollTo({
        left: n,
        top: $,
        behavior: A
      });
    }
    function B(n, $) {
      var A, N, I;
      if (r || e.ignoreItemResize || M($.target))
        return;
      const { value: V } = v, te = a.value.get(n), X = V.get(te), K = (I = (N = (A = $.borderBoxSize) === null || A === void 0 ? void 0 : A[0]) === null || N === void 0 ? void 0 : N.blockSize) !== null && I !== void 0 ? I : $.contentRect.height;
      if (K === X)
        return;
      K - e.itemSize === 0 ? c.delete(n) : c.set(n, K - e.itemSize);
      const q = K - X;
      if (q === 0)
        return;
      V.add(te, q);
      const Y = d.value;
      if (Y != null) {
        if (m === void 0) {
          const ie = V.sum(te);
          Y.scrollTop > ie && Y.scrollBy(0, q);
        } else if (te < m)
          Y.scrollBy(0, q);
        else if (te === m) {
          const ie = V.sum(te);
          K + ie > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          Y.scrollTop + Y.offsetHeight && Y.scrollBy(0, q);
        }
        U();
      }
      p.value++;
    }
    const R = !l0();
    let y = !1;
    function P(n) {
      var $;
      ($ = e.onScroll) === null || $ === void 0 || $.call(e, n), (!R || !y) && U();
    }
    function D(n) {
      var $;
      if (($ = e.onWheel) === null || $ === void 0 || $.call(e, n), R) {
        const A = d.value;
        if (A != null) {
          if (n.deltaX === 0 && (A.scrollTop === 0 && n.deltaY <= 0 || A.scrollTop + A.offsetHeight >= A.scrollHeight && n.deltaY >= 0))
            return;
          n.preventDefault(), A.scrollTop += n.deltaY / ts(), A.scrollLeft += n.deltaX / ts(), U(), y = !0, Vo(() => {
            y = !1;
          });
        }
      }
    }
    function T(n) {
      if (r || M(n.target))
        return;
      if (e.renderCol == null && e.renderItemWithCols == null) {
        if (n.contentRect.height === u.value)
          return;
      } else if (n.contentRect.height === u.value && n.contentRect.width === s.value)
        return;
      u.value = n.contentRect.height, s.value = n.contentRect.width;
      const { onResize: $ } = e;
      $ !== void 0 && $(n);
    }
    function U() {
      const { value: n } = d;
      n != null && (x.value = n.scrollTop, l.value = n.scrollLeft);
    }
    function M(n) {
      let $ = n;
      for (; $ !== null; ) {
        if ($.style.display === "none")
          return !0;
        $ = $.parentElement;
      }
      return !1;
    }
    return {
      listHeight: u,
      listStyle: {
        overflow: "auto"
      },
      keyToIndex: a,
      itemsStyle: z(() => {
        const { itemResizable: n } = e, $ = pt(v.value.sum());
        return p.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: pt(i.value),
            height: n ? "" : $,
            minHeight: n ? $ : "",
            paddingTop: pt(e.paddingTop),
            paddingBottom: pt(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: z(() => (p.value, {
        transform: `translateY(${pt(v.value.sum(h.value))})`
      })),
      viewportItems: g,
      listElRef: d,
      itemsElRef: L(null),
      scrollTo: b,
      handleListResize: T,
      handleListScroll: P,
      handleListWheel: D,
      handleItemResize: B
    };
  },
  render() {
    const { itemResizable: e, keyField: t, keyToIndex: r, visibleItemsTag: o } = this;
    return f(Br, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var i, a;
        return f("div", Vt(this.$attrs, {
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
                  const u = d[t], c = r.get(u), v = l != null ? f(ns, {
                    index: c,
                    item: d
                  }) : void 0, p = s != null ? f(ns, {
                    index: c,
                    item: d
                  }) : void 0, x = this.$slots.default({
                    item: d,
                    renderedCols: v,
                    renderedItemWithCols: p,
                    index: c
                  })[0];
                  return e ? f(Br, {
                    key: u,
                    onResize: (h) => this.handleItemResize(u, h)
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
}), gn = "v-hidden", u0 = Pn("[v-hidden]", {
  display: "none!important"
}), rs = ee({
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
    function i(l) {
      const { value: s } = r, { getCounter: d, getTail: u } = e;
      let c;
      if (d !== void 0 ? c = d() : c = o.value, !s || !c)
        return;
      c.hasAttribute(gn) && c.removeAttribute(gn);
      const { children: v } = s;
      if (l.showAllItemsBeforeCalculate)
        for (const S of v)
          S.hasAttribute(gn) && S.removeAttribute(gn);
      const p = s.offsetWidth, x = [], h = t.tail ? u == null ? void 0 : u() : null;
      let g = h ? h.offsetWidth : 0, b = !1;
      const m = s.children.length - (t.tail ? 1 : 0);
      for (let S = 0; S < m - 1; ++S) {
        if (S < 0)
          continue;
        const w = v[S];
        if (b) {
          w.hasAttribute(gn) || w.setAttribute(gn, "");
          continue;
        } else w.hasAttribute(gn) && w.removeAttribute(gn);
        const B = w.offsetWidth;
        if (g += B, x[S] = B, g > p) {
          const { updateCounter: R } = e;
          for (let y = S; y >= 0; --y) {
            const P = m - 1 - y;
            R !== void 0 ? R(P) : c.textContent = `${P}`;
            const D = c.offsetWidth;
            if (g -= x[y], g + D <= p || y === 0) {
              b = !0, S = y - 1, h && (S === -1 ? (h.style.maxWidth = `${p - D}px`, h.style.boxSizing = "border-box") : h.style.maxWidth = "");
              const { onUpdateCount: T } = e;
              T && T(P);
              break;
            }
          }
        }
      }
      const { onUpdateOverflow: C } = e;
      b ? C !== void 0 && C(!0) : (C !== void 0 && C(!1), c.setAttribute(gn, ""));
    }
    const a = rr();
    return u0.mount({
      id: "vueuc/overflow",
      head: !0,
      anchorMetaName: ja,
      ssr: a
    }), zt(() => i({
      showAllItemsBeforeCalculate: !1
    })), {
      selfRef: r,
      counterRef: o,
      sync: i
    };
  },
  render() {
    const { $slots: e } = this;
    return bt(() => this.sync({
      showAllItemsBeforeCalculate: !1
    })), f("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      zn(e, "default"),
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
function Ud(e) {
  return e instanceof HTMLElement;
}
function qd(e) {
  for (let t = 0; t < e.childNodes.length; t++) {
    const r = e.childNodes[t];
    if (Ud(r) && (Xd(r) || qd(r)))
      return !0;
  }
  return !1;
}
function Gd(e) {
  for (let t = e.childNodes.length - 1; t >= 0; t--) {
    const r = e.childNodes[t];
    if (Ud(r) && (Xd(r) || Gd(r)))
      return !0;
  }
  return !1;
}
function Xd(e) {
  if (!c0(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function c0(e) {
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
let Nr = [];
const Yd = ee({
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
    const t = cn(), r = L(null), o = L(null);
    let i = !1, a = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function s() {
      return Nr[Nr.length - 1] === t;
    }
    function d(b) {
      var m;
      b.code === "Escape" && s() && ((m = e.onEsc) === null || m === void 0 || m.call(e, b));
    }
    zt(() => {
      Ne(() => e.active, (b) => {
        b ? (v(), rt("keydown", document, d)) : (We("keydown", document, d), i && p());
      }, {
        immediate: !0
      });
    }), St(() => {
      We("keydown", document, d), i && p();
    });
    function u(b) {
      if (!a && s()) {
        const m = c();
        if (m === null || m.contains(Sr(b)))
          return;
        x("first");
      }
    }
    function c() {
      const b = r.value;
      if (b === null)
        return null;
      let m = b;
      for (; m = m.nextSibling, !(m === null || m instanceof Element && m.tagName === "DIV"); )
        ;
      return m;
    }
    function v() {
      var b;
      if (!e.disabled) {
        if (Nr.push(t), e.autoFocus) {
          const { initialFocusTo: m } = e;
          m === void 0 ? x("first") : (b = jl(m)) === null || b === void 0 || b.focus({ preventScroll: !0 });
        }
        i = !0, document.addEventListener("focus", u, !0);
      }
    }
    function p() {
      var b;
      if (e.disabled || (document.removeEventListener("focus", u, !0), Nr = Nr.filter((C) => C !== t), s()))
        return;
      const { finalFocusTo: m } = e;
      m !== void 0 ? (b = jl(m)) === null || b === void 0 || b.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (a = !0, l.focus({ preventScroll: !0 }), a = !1);
    }
    function x(b) {
      if (s() && e.active) {
        const m = r.value, C = o.value;
        if (m !== null && C !== null) {
          const S = c();
          if (S == null || S === C) {
            a = !0, m.focus({ preventScroll: !0 }), a = !1;
            return;
          }
          a = !0;
          const w = b === "first" ? qd(S) : Gd(S);
          a = !1, w || (a = !0, m.focus({ preventScroll: !0 }), a = !1);
        }
      }
    }
    function h(b) {
      if (a)
        return;
      const m = c();
      m !== null && (b.relatedTarget !== null && m.contains(b.relatedTarget) ? x("last") : x("first"));
    }
    function g(b) {
      a || (b.relatedTarget !== null && b.relatedTarget === r.value ? x("last") : x("first"));
    }
    return {
      focusableStartRef: r,
      focusableEndRef: o,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: h,
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
    return f(Qe, null, [
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
function Zd(e, t) {
  t && (zt(() => {
    const {
      value: r
    } = e;
    r && Yr.registerHandler(r, t);
  }), Ne(e, (r, o) => {
    o && Yr.unregisterHandler(o);
  }, {
    deep: !1
  }), St(() => {
    const {
      value: r
    } = e;
    r && Yr.unregisterHandler(r);
  }));
}
function qo(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const f0 = /^(\d|\.)+$/, os = /(\d|\.)+/;
function gt(e, {
  c: t = 1,
  offset: r = 0,
  attachPx: o = !0
} = {}) {
  if (typeof e == "number") {
    const i = (e + r) * t;
    return i === 0 ? "0" : `${i}px`;
  } else if (typeof e == "string")
    if (f0.test(e)) {
      const i = (Number(e) + r) * t;
      return o ? i === 0 ? "0" : `${i}px` : `${i}`;
    } else {
      const i = os.exec(e);
      return i ? e.replace(os, String((Number(i[0]) + r) * t)) : e;
    }
  return e;
}
function is(e) {
  const {
    left: t,
    right: r,
    top: o,
    bottom: i
  } = Lt(e);
  return `${o} ${t} ${i} ${r}`;
}
function h0(e, t) {
  if (!e) return;
  const r = document.createElement("a");
  r.href = e, t !== void 0 && (r.download = t), document.body.appendChild(r), r.click(), document.body.removeChild(r);
}
let _i;
function v0() {
  return _i === void 0 && (_i = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), _i;
}
const Jd = /* @__PURE__ */ new WeakSet();
function p0(e) {
  Jd.add(e);
}
function g0(e) {
  return !Jd.has(e);
}
function as(e) {
  switch (typeof e) {
    case "string":
      return e || void 0;
    case "number":
      return String(e);
    default:
      return;
  }
}
function ls(e) {
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
const ss = /* @__PURE__ */ new Set();
function it(e, t) {
  const r = `[naive/${e}]: ${t}`;
  ss.has(r) || (ss.add(r), console.error(r));
}
function Pt(e, t) {
  console.error(`[naive/${e}]: ${t}`);
}
function On(e, t) {
  throw new Error(`[naive/${e}]: ${t}`);
}
function ne(e, ...t) {
  if (Array.isArray(e))
    e.forEach((r) => ne(r, ...t));
  else
    return e(...t);
}
function Qd(e) {
  return (t) => {
    t ? e.value = t.$el : e.value = null;
  };
}
function Go(e, t = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(Qt(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        Go(o, t, r);
        return;
      }
      if (o.type === Qe) {
        if (o.children === null) return;
        Array.isArray(o.children) && Go(o.children, t, r);
      } else {
        if (o.type === Da && t) return;
        r.push(o);
      }
    }
  }), r;
}
function ia(e, t = "default", r = void 0) {
  const o = e[t];
  if (!o)
    return Pt("getFirstSlotVNode", `slot[${t}] is empty`), null;
  const i = Go(o(r));
  return i.length === 1 ? i[0] : (Pt("getFirstSlotVNode", `slot[${t}] should have exactly one child`), null);
}
function m0(e, t = "default", r = []) {
  const i = e.$slots[t];
  return i === void 0 ? r : i();
}
function Cn(e, t = [], r) {
  const o = {};
  return t.forEach((i) => {
    o[i] = e[i];
  }), Object.assign(o, r);
}
function Dn(e) {
  return Object.keys(e);
}
function Zr(e) {
  const t = e.filter((r) => r !== void 0);
  if (t.length !== 0)
    return t.length === 1 ? t[0] : (r) => {
      e.forEach((o) => {
        o && o(r);
      });
    };
}
function or(e, t = [], r) {
  const o = {};
  return Object.getOwnPropertyNames(e).forEach((a) => {
    t.includes(a) || (o[a] = e[a]);
  }), Object.assign(o, r);
}
function ft(e, ...t) {
  return typeof e == "function" ? e(...t) : typeof e == "string" ? Qt(e) : typeof e == "number" ? Qt(String(e)) : null;
}
function Jt(e) {
  return e.some((t) => bf(t) ? !(t.type === Da || t.type === Qe && !Jt(t.children)) : !0) ? e : null;
}
function Xt(e, t) {
  return e && Jt(e()) || t();
}
function aa(e, t, r) {
  return e && Jt(e(t)) || r(t);
}
function He(e, t) {
  const r = e && Jt(e());
  return t(r || null);
}
function b0(e, t, r) {
  const o = e && Jt(e(t));
  return r(o || null);
}
function xr(e) {
  return !(e && Jt(e()));
}
const la = ee({
  render() {
    var e, t;
    return (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e);
  }
}), nn = "n-config-provider", Xo = "n";
function Ae(e = {}, t = {
  defaultBordered: !0
}) {
  const r = ge(nn, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: r == null ? void 0 : r.inlineThemeDisabled,
    mergedRtlRef: r == null ? void 0 : r.mergedRtlRef,
    mergedComponentPropsRef: r == null ? void 0 : r.mergedComponentPropsRef,
    mergedBreakpointsRef: r == null ? void 0 : r.mergedBreakpointsRef,
    mergedBorderedRef: z(() => {
      var o, i;
      const {
        bordered: a
      } = e;
      return a !== void 0 ? a : (i = (o = r == null ? void 0 : r.mergedBorderedRef.value) !== null && o !== void 0 ? o : t.defaultBordered) !== null && i !== void 0 ? i : !0;
    }),
    mergedClsPrefixRef: r ? r.mergedClsPrefixRef : bd(Xo),
    namespaceRef: z(() => r == null ? void 0 : r.mergedNamespaceRef.value)
  };
}
function eu() {
  const e = ge(nn, null);
  return e ? e.mergedClsPrefixRef : bd(Xo);
}
function Ge(e, t, r, o) {
  r || On("useThemeClass", "cssVarsRef is not passed");
  const i = ge(nn, null), a = i == null ? void 0 : i.mergedThemeHashRef, l = i == null ? void 0 : i.styleMountTarget, s = L(""), d = rr();
  let u;
  const c = `__${e}`, v = () => {
    let p = c;
    const x = t ? t.value : void 0, h = a == null ? void 0 : a.value;
    h && (p += `-${h}`), x && (p += `-${x}`);
    const {
      themeOverrides: g,
      builtinThemeOverrides: b
    } = o;
    g && (p += `-${to(JSON.stringify(g))}`), b && (p += `-${to(JSON.stringify(b))}`), s.value = p, u = () => {
      const m = r.value;
      let C = "";
      for (const S in m)
        C += `${S}: ${m[S]};`;
      O(`.${p}`, C).mount({
        id: p,
        ssr: d,
        parent: l
      }), u = void 0;
    };
  };
  return et(() => {
    v();
  }), {
    themeClass: s,
    onRender: () => {
      u == null || u();
    }
  };
}
const sa = "n-form-item";
function Mn(e, {
  defaultSize: t = "medium",
  mergedSize: r,
  mergedDisabled: o
} = {}) {
  const i = ge(sa, null);
  $e(sa, null);
  const a = z(r ? () => r(i) : () => {
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
  }), l = z(o ? () => o(i) : () => {
    const {
      disabled: d
    } = e;
    return d !== void 0 ? d : i ? i.disabled.value : !1;
  }), s = z(() => {
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
const x0 = {
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
}, C0 = {
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
function Cr(e) {
  return (t = {}) => {
    const r = t.width ? String(t.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
function ln(e) {
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
function sn(e) {
  return (t, r = {}) => {
    const o = r.width, i = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], a = t.match(i);
    if (!a)
      return null;
    const l = a[0], s = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], d = Array.isArray(s) ? w0(s, (v) => v.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      y0(s, (v) => v.test(l))
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
function y0(e, t) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && t(e[r]))
      return r;
}
function w0(e, t) {
  for (let r = 0; r < e.length; r++)
    if (t(e[r]))
      return r;
}
function tu(e) {
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
function S0(e) {
  const t = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && t === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || t === "[object Number]" || typeof e == "string" || t === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
let B0 = {};
function k0() {
  return B0;
}
function ds(e, t) {
  var s, d, u, c;
  const r = k0(), o = (t == null ? void 0 : t.weekStartsOn) ?? ((d = (s = t == null ? void 0 : t.locale) == null ? void 0 : s.options) == null ? void 0 : d.weekStartsOn) ?? r.weekStartsOn ?? ((c = (u = r.locale) == null ? void 0 : u.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = S0(e), a = i.getDay(), l = (a < o ? 7 : 0) + a - o;
  return i.setDate(i.getDate() - l), i.setHours(0, 0, 0, 0), i;
}
function R0(e, t, r) {
  const o = ds(e, r), i = ds(t, r);
  return +o == +i;
}
const F0 = {
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
}, P0 = (e, t, r) => {
  let o;
  const i = F0[e];
  return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", t.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
}, z0 = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, $0 = (e, t, r, o) => z0[e], A0 = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, D0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, E0 = {
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
}, T0 = {
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
}, O0 = {
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
}, M0 = {
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
}, I0 = (e, t) => {
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
}, L0 = {
  ordinalNumber: I0,
  era: ln({
    values: A0,
    defaultWidth: "wide"
  }),
  quarter: ln({
    values: D0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ln({
    values: E0,
    defaultWidth: "wide"
  }),
  day: ln({
    values: T0,
    defaultWidth: "wide"
  }),
  dayPeriod: ln({
    values: O0,
    defaultWidth: "wide",
    formattingValues: M0,
    defaultFormattingWidth: "wide"
  })
}, _0 = /^(\d+)(th|st|nd|rd)?/i, N0 = /\d+/i, H0 = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, j0 = {
  any: [/^b/i, /^(a|c)/i]
}, W0 = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, V0 = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, K0 = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, U0 = {
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
}, q0 = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, G0 = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, X0 = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Y0 = {
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
}, Z0 = {
  ordinalNumber: tu({
    matchPattern: _0,
    parsePattern: N0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: sn({
    matchPatterns: H0,
    defaultMatchWidth: "wide",
    parsePatterns: j0,
    defaultParseWidth: "any"
  }),
  quarter: sn({
    matchPatterns: W0,
    defaultMatchWidth: "wide",
    parsePatterns: V0,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: sn({
    matchPatterns: K0,
    defaultMatchWidth: "wide",
    parsePatterns: U0,
    defaultParseWidth: "any"
  }),
  day: sn({
    matchPatterns: q0,
    defaultMatchWidth: "wide",
    parsePatterns: G0,
    defaultParseWidth: "any"
  }),
  dayPeriod: sn({
    matchPatterns: X0,
    defaultMatchWidth: "any",
    parsePatterns: Y0,
    defaultParseWidth: "any"
  })
}, J0 = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Q0 = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, ev = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, tv = {
  date: Cr({
    formats: J0,
    defaultWidth: "full"
  }),
  time: Cr({
    formats: Q0,
    defaultWidth: "full"
  }),
  dateTime: Cr({
    formats: ev,
    defaultWidth: "full"
  })
}, nv = {
  code: "en-US",
  formatDistance: P0,
  formatLong: tv,
  formatRelative: $0,
  localize: L0,
  match: Z0,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, rv = {
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
}, ov = (e, t, r) => {
  let o;
  const i = rv[e];
  return typeof i == "string" ? o = i : t === 1 ? o = i.one : o = i.other.replace("{{count}}", String(t)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? o + "内" : o + "前" : o;
}, iv = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, av = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, lv = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, sv = {
  date: Cr({
    formats: iv,
    defaultWidth: "full"
  }),
  time: Cr({
    formats: av,
    defaultWidth: "full"
  }),
  dateTime: Cr({
    formats: lv,
    defaultWidth: "full"
  })
};
function us(e, t, r) {
  const o = "eeee p";
  return R0(e, t, r) ? o : e.getTime() > t.getTime() ? "'下个'" + o : "'上个'" + o;
}
const dv = {
  lastWeek: us,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: us,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, uv = (e, t, r, o) => {
  const i = dv[e];
  return typeof i == "function" ? i(t, r, o) : i;
}, cv = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, fv = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, hv = {
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
}, vv = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, pv = {
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
}, gv = {
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
}, mv = (e, t) => {
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
}, bv = {
  ordinalNumber: mv,
  era: ln({
    values: cv,
    defaultWidth: "wide"
  }),
  quarter: ln({
    values: fv,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: ln({
    values: hv,
    defaultWidth: "wide"
  }),
  day: ln({
    values: vv,
    defaultWidth: "wide"
  }),
  dayPeriod: ln({
    values: pv,
    defaultWidth: "wide",
    formattingValues: gv,
    defaultFormattingWidth: "wide"
  })
}, xv = /^(第\s*)?\d+(日|时|分|秒)?/i, Cv = /\d+/i, yv = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, wv = {
  any: [/^(前)/i, /^(公元)/i]
}, Sv = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, Bv = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, kv = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, Rv = {
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
}, Fv = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, Pv = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, zv = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, $v = {
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
}, Av = {
  ordinalNumber: tu({
    matchPattern: xv,
    parsePattern: Cv,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: sn({
    matchPatterns: yv,
    defaultMatchWidth: "wide",
    parsePatterns: wv,
    defaultParseWidth: "any"
  }),
  quarter: sn({
    matchPatterns: Sv,
    defaultMatchWidth: "wide",
    parsePatterns: Bv,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: sn({
    matchPatterns: kv,
    defaultMatchWidth: "wide",
    parsePatterns: Rv,
    defaultParseWidth: "any"
  }),
  day: sn({
    matchPatterns: Fv,
    defaultMatchWidth: "wide",
    parsePatterns: Pv,
    defaultParseWidth: "any"
  }),
  dayPeriod: sn({
    matchPatterns: zv,
    defaultMatchWidth: "any",
    parsePatterns: $v,
    defaultParseWidth: "any"
  })
}, Dv = {
  code: "zh-CN",
  formatDistance: ov,
  formatLong: sv,
  formatRelative: uv,
  localize: bv,
  match: Av,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Ev = {
  name: "en-US",
  locale: nv
}, Tv = {
  name: "zh-CN",
  locale: Dv
};
var nu = typeof global == "object" && global && global.Object === Object && global, Ov = typeof self == "object" && self && self.Object === Object && self, hn = nu || Ov || Function("return this")(), En = hn.Symbol, ru = Object.prototype, Mv = ru.hasOwnProperty, Iv = ru.toString, Hr = En ? En.toStringTag : void 0;
function Lv(e) {
  var t = Mv.call(e, Hr), r = e[Hr];
  try {
    e[Hr] = void 0;
    var o = !0;
  } catch {
  }
  var i = Iv.call(e);
  return o && (t ? e[Hr] = r : delete e[Hr]), i;
}
var _v = Object.prototype, Nv = _v.toString;
function Hv(e) {
  return Nv.call(e);
}
var jv = "[object Null]", Wv = "[object Undefined]", cs = En ? En.toStringTag : void 0;
function ir(e) {
  return e == null ? e === void 0 ? Wv : jv : cs && cs in Object(e) ? Lv(e) : Hv(e);
}
function Tn(e) {
  return e != null && typeof e == "object";
}
var Vv = "[object Symbol]";
function Ua(e) {
  return typeof e == "symbol" || Tn(e) && ir(e) == Vv;
}
function ou(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, i = Array(o); ++r < o; )
    i[r] = t(e[r], r, e);
  return i;
}
var en = Array.isArray, Kv = 1 / 0, fs = En ? En.prototype : void 0, hs = fs ? fs.toString : void 0;
function iu(e) {
  if (typeof e == "string")
    return e;
  if (en(e))
    return ou(e, iu) + "";
  if (Ua(e))
    return hs ? hs.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -Kv ? "-0" : t;
}
function In(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
function qa(e) {
  return e;
}
var Uv = "[object AsyncFunction]", qv = "[object Function]", Gv = "[object GeneratorFunction]", Xv = "[object Proxy]";
function Ga(e) {
  if (!In(e))
    return !1;
  var t = ir(e);
  return t == qv || t == Gv || t == Uv || t == Xv;
}
var Ni = hn["__core-js_shared__"], vs = function() {
  var e = /[^.]+$/.exec(Ni && Ni.keys && Ni.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function Yv(e) {
  return !!vs && vs in e;
}
var Zv = Function.prototype, Jv = Zv.toString;
function ar(e) {
  if (e != null) {
    try {
      return Jv.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Qv = /[\\^$.*+?()[\]{}|]/g, ep = /^\[object .+?Constructor\]$/, tp = Function.prototype, np = Object.prototype, rp = tp.toString, op = np.hasOwnProperty, ip = RegExp(
  "^" + rp.call(op).replace(Qv, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function ap(e) {
  if (!In(e) || Yv(e))
    return !1;
  var t = Ga(e) ? ip : ep;
  return t.test(ar(e));
}
function lp(e, t) {
  return e == null ? void 0 : e[t];
}
function lr(e, t) {
  var r = lp(e, t);
  return ap(r) ? r : void 0;
}
var da = lr(hn, "WeakMap"), ps = Object.create, sp = /* @__PURE__ */ function() {
  function e() {
  }
  return function(t) {
    if (!In(t))
      return {};
    if (ps)
      return ps(t);
    e.prototype = t;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function dp(e, t, r) {
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
function up(e, t) {
  var r = -1, o = e.length;
  for (t || (t = Array(o)); ++r < o; )
    t[r] = e[r];
  return t;
}
var cp = 800, fp = 16, hp = Date.now;
function vp(e) {
  var t = 0, r = 0;
  return function() {
    var o = hp(), i = fp - (o - r);
    if (r = o, i > 0) {
      if (++t >= cp)
        return arguments[0];
    } else
      t = 0;
    return e.apply(void 0, arguments);
  };
}
function pp(e) {
  return function() {
    return e;
  };
}
var Yo = function() {
  try {
    var e = lr(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), gp = Yo ? function(e, t) {
  return Yo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: pp(t),
    writable: !0
  });
} : qa, mp = vp(gp), bp = 9007199254740991, xp = /^(?:0|[1-9]\d*)$/;
function Xa(e, t) {
  var r = typeof e;
  return t = t ?? bp, !!t && (r == "number" || r != "symbol" && xp.test(e)) && e > -1 && e % 1 == 0 && e < t;
}
function Ya(e, t, r) {
  t == "__proto__" && Yo ? Yo(e, t, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[t] = r;
}
function go(e, t) {
  return e === t || e !== e && t !== t;
}
var Cp = Object.prototype, yp = Cp.hasOwnProperty;
function wp(e, t, r) {
  var o = e[t];
  (!(yp.call(e, t) && go(o, r)) || r === void 0 && !(t in e)) && Ya(e, t, r);
}
function Sp(e, t, r, o) {
  var i = !r;
  r || (r = {});
  for (var a = -1, l = t.length; ++a < l; ) {
    var s = t[a], d = void 0;
    d === void 0 && (d = e[s]), i ? Ya(r, s, d) : wp(r, s, d);
  }
  return r;
}
var gs = Math.max;
function Bp(e, t, r) {
  return t = gs(t === void 0 ? e.length - 1 : t, 0), function() {
    for (var o = arguments, i = -1, a = gs(o.length - t, 0), l = Array(a); ++i < a; )
      l[i] = o[t + i];
    i = -1;
    for (var s = Array(t + 1); ++i < t; )
      s[i] = o[i];
    return s[t] = r(l), dp(e, this, s);
  };
}
function kp(e, t) {
  return mp(Bp(e, t, qa), e + "");
}
var Rp = 9007199254740991;
function Za(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Rp;
}
function Dr(e) {
  return e != null && Za(e.length) && !Ga(e);
}
function Fp(e, t, r) {
  if (!In(r))
    return !1;
  var o = typeof t;
  return (o == "number" ? Dr(r) && Xa(t, r.length) : o == "string" && t in r) ? go(r[t], e) : !1;
}
function Pp(e) {
  return kp(function(t, r) {
    var o = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, l = i > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, l && Fp(r[0], r[1], l) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++o < i; ) {
      var s = r[o];
      s && e(t, s, o, a);
    }
    return t;
  });
}
var zp = Object.prototype;
function Ja(e) {
  var t = e && e.constructor, r = typeof t == "function" && t.prototype || zp;
  return e === r;
}
function $p(e, t) {
  for (var r = -1, o = Array(e); ++r < e; )
    o[r] = t(r);
  return o;
}
var Ap = "[object Arguments]";
function ms(e) {
  return Tn(e) && ir(e) == Ap;
}
var au = Object.prototype, Dp = au.hasOwnProperty, Ep = au.propertyIsEnumerable, Zo = ms(/* @__PURE__ */ function() {
  return arguments;
}()) ? ms : function(e) {
  return Tn(e) && Dp.call(e, "callee") && !Ep.call(e, "callee");
};
function Tp() {
  return !1;
}
var lu = typeof exports == "object" && exports && !exports.nodeType && exports, bs = lu && typeof module == "object" && module && !module.nodeType && module, Op = bs && bs.exports === lu, xs = Op ? hn.Buffer : void 0, Mp = xs ? xs.isBuffer : void 0, Jo = Mp || Tp, Ip = "[object Arguments]", Lp = "[object Array]", _p = "[object Boolean]", Np = "[object Date]", Hp = "[object Error]", jp = "[object Function]", Wp = "[object Map]", Vp = "[object Number]", Kp = "[object Object]", Up = "[object RegExp]", qp = "[object Set]", Gp = "[object String]", Xp = "[object WeakMap]", Yp = "[object ArrayBuffer]", Zp = "[object DataView]", Jp = "[object Float32Array]", Qp = "[object Float64Array]", eg = "[object Int8Array]", tg = "[object Int16Array]", ng = "[object Int32Array]", rg = "[object Uint8Array]", og = "[object Uint8ClampedArray]", ig = "[object Uint16Array]", ag = "[object Uint32Array]", st = {};
st[Jp] = st[Qp] = st[eg] = st[tg] = st[ng] = st[rg] = st[og] = st[ig] = st[ag] = !0;
st[Ip] = st[Lp] = st[Yp] = st[_p] = st[Zp] = st[Np] = st[Hp] = st[jp] = st[Wp] = st[Vp] = st[Kp] = st[Up] = st[qp] = st[Gp] = st[Xp] = !1;
function lg(e) {
  return Tn(e) && Za(e.length) && !!st[ir(e)];
}
function sg(e) {
  return function(t) {
    return e(t);
  };
}
var su = typeof exports == "object" && exports && !exports.nodeType && exports, Jr = su && typeof module == "object" && module && !module.nodeType && module, dg = Jr && Jr.exports === su, Hi = dg && nu.process, Cs = function() {
  try {
    var e = Jr && Jr.require && Jr.require("util").types;
    return e || Hi && Hi.binding && Hi.binding("util");
  } catch {
  }
}(), ys = Cs && Cs.isTypedArray, Qa = ys ? sg(ys) : lg, ug = Object.prototype, cg = ug.hasOwnProperty;
function du(e, t) {
  var r = en(e), o = !r && Zo(e), i = !r && !o && Jo(e), a = !r && !o && !i && Qa(e), l = r || o || i || a, s = l ? $p(e.length, String) : [], d = s.length;
  for (var u in e)
    (t || cg.call(e, u)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (u == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (u == "offset" || u == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (u == "buffer" || u == "byteLength" || u == "byteOffset") || // Skip index properties.
    Xa(u, d))) && s.push(u);
  return s;
}
function uu(e, t) {
  return function(r) {
    return e(t(r));
  };
}
var fg = uu(Object.keys, Object), hg = Object.prototype, vg = hg.hasOwnProperty;
function pg(e) {
  if (!Ja(e))
    return fg(e);
  var t = [];
  for (var r in Object(e))
    vg.call(e, r) && r != "constructor" && t.push(r);
  return t;
}
function el(e) {
  return Dr(e) ? du(e) : pg(e);
}
function gg(e) {
  var t = [];
  if (e != null)
    for (var r in Object(e))
      t.push(r);
  return t;
}
var mg = Object.prototype, bg = mg.hasOwnProperty;
function xg(e) {
  if (!In(e))
    return gg(e);
  var t = Ja(e), r = [];
  for (var o in e)
    o == "constructor" && (t || !bg.call(e, o)) || r.push(o);
  return r;
}
function cu(e) {
  return Dr(e) ? du(e, !0) : xg(e);
}
var Cg = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, yg = /^\w*$/;
function tl(e, t) {
  if (en(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || Ua(e) ? !0 : yg.test(e) || !Cg.test(e) || t != null && e in Object(t);
}
var io = lr(Object, "create");
function wg() {
  this.__data__ = io ? io(null) : {}, this.size = 0;
}
function Sg(e) {
  var t = this.has(e) && delete this.__data__[e];
  return this.size -= t ? 1 : 0, t;
}
var Bg = "__lodash_hash_undefined__", kg = Object.prototype, Rg = kg.hasOwnProperty;
function Fg(e) {
  var t = this.__data__;
  if (io) {
    var r = t[e];
    return r === Bg ? void 0 : r;
  }
  return Rg.call(t, e) ? t[e] : void 0;
}
var Pg = Object.prototype, zg = Pg.hasOwnProperty;
function $g(e) {
  var t = this.__data__;
  return io ? t[e] !== void 0 : zg.call(t, e);
}
var Ag = "__lodash_hash_undefined__";
function Dg(e, t) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = io && t === void 0 ? Ag : t, this;
}
function Jn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
Jn.prototype.clear = wg;
Jn.prototype.delete = Sg;
Jn.prototype.get = Fg;
Jn.prototype.has = $g;
Jn.prototype.set = Dg;
function Eg() {
  this.__data__ = [], this.size = 0;
}
function di(e, t) {
  for (var r = e.length; r--; )
    if (go(e[r][0], t))
      return r;
  return -1;
}
var Tg = Array.prototype, Og = Tg.splice;
function Mg(e) {
  var t = this.__data__, r = di(t, e);
  if (r < 0)
    return !1;
  var o = t.length - 1;
  return r == o ? t.pop() : Og.call(t, r, 1), --this.size, !0;
}
function Ig(e) {
  var t = this.__data__, r = di(t, e);
  return r < 0 ? void 0 : t[r][1];
}
function Lg(e) {
  return di(this.__data__, e) > -1;
}
function _g(e, t) {
  var r = this.__data__, o = di(r, e);
  return o < 0 ? (++this.size, r.push([e, t])) : r[o][1] = t, this;
}
function yn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
yn.prototype.clear = Eg;
yn.prototype.delete = Mg;
yn.prototype.get = Ig;
yn.prototype.has = Lg;
yn.prototype.set = _g;
var ao = lr(hn, "Map");
function Ng() {
  this.size = 0, this.__data__ = {
    hash: new Jn(),
    map: new (ao || yn)(),
    string: new Jn()
  };
}
function Hg(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null;
}
function ui(e, t) {
  var r = e.__data__;
  return Hg(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
}
function jg(e) {
  var t = ui(this, e).delete(e);
  return this.size -= t ? 1 : 0, t;
}
function Wg(e) {
  return ui(this, e).get(e);
}
function Vg(e) {
  return ui(this, e).has(e);
}
function Kg(e, t) {
  var r = ui(this, e), o = r.size;
  return r.set(e, t), this.size += r.size == o ? 0 : 1, this;
}
function wn(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++t < r; ) {
    var o = e[t];
    this.set(o[0], o[1]);
  }
}
wn.prototype.clear = Ng;
wn.prototype.delete = jg;
wn.prototype.get = Wg;
wn.prototype.has = Vg;
wn.prototype.set = Kg;
var Ug = "Expected a function";
function nl(e, t) {
  if (typeof e != "function" || t != null && typeof t != "function")
    throw new TypeError(Ug);
  var r = function() {
    var o = arguments, i = t ? t.apply(this, o) : o[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var l = e.apply(this, o);
    return r.cache = a.set(i, l) || a, l;
  };
  return r.cache = new (nl.Cache || wn)(), r;
}
nl.Cache = wn;
var qg = 500;
function Gg(e) {
  var t = nl(e, function(o) {
    return r.size === qg && r.clear(), o;
  }), r = t.cache;
  return t;
}
var Xg = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Yg = /\\(\\)?/g, Zg = Gg(function(e) {
  var t = [];
  return e.charCodeAt(0) === 46 && t.push(""), e.replace(Xg, function(r, o, i, a) {
    t.push(i ? a.replace(Yg, "$1") : o || r);
  }), t;
});
function fu(e) {
  return e == null ? "" : iu(e);
}
function hu(e, t) {
  return en(e) ? e : tl(e, t) ? [e] : Zg(fu(e));
}
var Jg = 1 / 0;
function ci(e) {
  if (typeof e == "string" || Ua(e))
    return e;
  var t = e + "";
  return t == "0" && 1 / e == -Jg ? "-0" : t;
}
function vu(e, t) {
  t = hu(t, e);
  for (var r = 0, o = t.length; e != null && r < o; )
    e = e[ci(t[r++])];
  return r && r == o ? e : void 0;
}
function lo(e, t, r) {
  var o = e == null ? void 0 : vu(e, t);
  return o === void 0 ? r : o;
}
function Qg(e, t) {
  for (var r = -1, o = t.length, i = e.length; ++r < o; )
    e[i + r] = t[r];
  return e;
}
var pu = uu(Object.getPrototypeOf, Object), em = "[object Object]", tm = Function.prototype, nm = Object.prototype, gu = tm.toString, rm = nm.hasOwnProperty, om = gu.call(Object);
function im(e) {
  if (!Tn(e) || ir(e) != em)
    return !1;
  var t = pu(e);
  if (t === null)
    return !0;
  var r = rm.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r instanceof r && gu.call(r) == om;
}
function am(e, t, r) {
  var o = -1, i = e.length;
  t < 0 && (t = -t > i ? 0 : i + t), r = r > i ? i : r, r < 0 && (r += i), i = t > r ? 0 : r - t >>> 0, t >>>= 0;
  for (var a = Array(i); ++o < i; )
    a[o] = e[o + t];
  return a;
}
function lm(e, t, r) {
  var o = e.length;
  return r = r === void 0 ? o : r, !t && r >= o ? e : am(e, t, r);
}
var sm = "\\ud800-\\udfff", dm = "\\u0300-\\u036f", um = "\\ufe20-\\ufe2f", cm = "\\u20d0-\\u20ff", fm = dm + um + cm, hm = "\\ufe0e\\ufe0f", vm = "\\u200d", pm = RegExp("[" + vm + sm + fm + hm + "]");
function mu(e) {
  return pm.test(e);
}
function gm(e) {
  return e.split("");
}
var bu = "\\ud800-\\udfff", mm = "\\u0300-\\u036f", bm = "\\ufe20-\\ufe2f", xm = "\\u20d0-\\u20ff", Cm = mm + bm + xm, ym = "\\ufe0e\\ufe0f", wm = "[" + bu + "]", ua = "[" + Cm + "]", ca = "\\ud83c[\\udffb-\\udfff]", Sm = "(?:" + ua + "|" + ca + ")", xu = "[^" + bu + "]", Cu = "(?:\\ud83c[\\udde6-\\uddff]){2}", yu = "[\\ud800-\\udbff][\\udc00-\\udfff]", Bm = "\\u200d", wu = Sm + "?", Su = "[" + ym + "]?", km = "(?:" + Bm + "(?:" + [xu, Cu, yu].join("|") + ")" + Su + wu + ")*", Rm = Su + wu + km, Fm = "(?:" + [xu + ua + "?", ua, Cu, yu, wm].join("|") + ")", Pm = RegExp(ca + "(?=" + ca + ")|" + Fm + Rm, "g");
function zm(e) {
  return e.match(Pm) || [];
}
function $m(e) {
  return mu(e) ? zm(e) : gm(e);
}
function Am(e) {
  return function(t) {
    t = fu(t);
    var r = mu(t) ? $m(t) : void 0, o = r ? r[0] : t.charAt(0), i = r ? lm(r, 1).join("") : t.slice(1);
    return o[e]() + i;
  };
}
var Dm = Am("toUpperCase");
function Em() {
  this.__data__ = new yn(), this.size = 0;
}
function Tm(e) {
  var t = this.__data__, r = t.delete(e);
  return this.size = t.size, r;
}
function Om(e) {
  return this.__data__.get(e);
}
function Mm(e) {
  return this.__data__.has(e);
}
var Im = 200;
function Lm(e, t) {
  var r = this.__data__;
  if (r instanceof yn) {
    var o = r.__data__;
    if (!ao || o.length < Im - 1)
      return o.push([e, t]), this.size = ++r.size, this;
    r = this.__data__ = new wn(o);
  }
  return r.set(e, t), this.size = r.size, this;
}
function dn(e) {
  var t = this.__data__ = new yn(e);
  this.size = t.size;
}
dn.prototype.clear = Em;
dn.prototype.delete = Tm;
dn.prototype.get = Om;
dn.prototype.has = Mm;
dn.prototype.set = Lm;
var Bu = typeof exports == "object" && exports && !exports.nodeType && exports, ws = Bu && typeof module == "object" && module && !module.nodeType && module, _m = ws && ws.exports === Bu, Ss = _m ? hn.Buffer : void 0;
Ss && Ss.allocUnsafe;
function Nm(e, t) {
  return e.slice();
}
function Hm(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length, i = 0, a = []; ++r < o; ) {
    var l = e[r];
    t(l, r, e) && (a[i++] = l);
  }
  return a;
}
function jm() {
  return [];
}
var Wm = Object.prototype, Vm = Wm.propertyIsEnumerable, Bs = Object.getOwnPropertySymbols, Km = Bs ? function(e) {
  return e == null ? [] : (e = Object(e), Hm(Bs(e), function(t) {
    return Vm.call(e, t);
  }));
} : jm;
function Um(e, t, r) {
  var o = t(e);
  return en(e) ? o : Qg(o, r(e));
}
function ks(e) {
  return Um(e, el, Km);
}
var fa = lr(hn, "DataView"), ha = lr(hn, "Promise"), va = lr(hn, "Set"), Rs = "[object Map]", qm = "[object Object]", Fs = "[object Promise]", Ps = "[object Set]", zs = "[object WeakMap]", $s = "[object DataView]", Gm = ar(fa), Xm = ar(ao), Ym = ar(ha), Zm = ar(va), Jm = ar(da), Fn = ir;
(fa && Fn(new fa(new ArrayBuffer(1))) != $s || ao && Fn(new ao()) != Rs || ha && Fn(ha.resolve()) != Fs || va && Fn(new va()) != Ps || da && Fn(new da()) != zs) && (Fn = function(e) {
  var t = ir(e), r = t == qm ? e.constructor : void 0, o = r ? ar(r) : "";
  if (o)
    switch (o) {
      case Gm:
        return $s;
      case Xm:
        return Rs;
      case Ym:
        return Fs;
      case Zm:
        return Ps;
      case Jm:
        return zs;
    }
  return t;
});
var Qo = hn.Uint8Array;
function Qm(e) {
  var t = new e.constructor(e.byteLength);
  return new Qo(t).set(new Qo(e)), t;
}
function eb(e, t) {
  var r = Qm(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function tb(e) {
  return typeof e.constructor == "function" && !Ja(e) ? sp(pu(e)) : {};
}
var nb = "__lodash_hash_undefined__";
function rb(e) {
  return this.__data__.set(e, nb), this;
}
function ob(e) {
  return this.__data__.has(e);
}
function ei(e) {
  var t = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new wn(); ++t < r; )
    this.add(e[t]);
}
ei.prototype.add = ei.prototype.push = rb;
ei.prototype.has = ob;
function ib(e, t) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (t(e[r], r, e))
      return !0;
  return !1;
}
function ab(e, t) {
  return e.has(t);
}
var lb = 1, sb = 2;
function ku(e, t, r, o, i, a) {
  var l = r & lb, s = e.length, d = t.length;
  if (s != d && !(l && d > s))
    return !1;
  var u = a.get(e), c = a.get(t);
  if (u && c)
    return u == t && c == e;
  var v = -1, p = !0, x = r & sb ? new ei() : void 0;
  for (a.set(e, t), a.set(t, e); ++v < s; ) {
    var h = e[v], g = t[v];
    if (o)
      var b = l ? o(g, h, v, t, e, a) : o(h, g, v, e, t, a);
    if (b !== void 0) {
      if (b)
        continue;
      p = !1;
      break;
    }
    if (x) {
      if (!ib(t, function(m, C) {
        if (!ab(x, C) && (h === m || i(h, m, r, o, a)))
          return x.push(C);
      })) {
        p = !1;
        break;
      }
    } else if (!(h === g || i(h, g, r, o, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(t), p;
}
function db(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o, i) {
    r[++t] = [i, o];
  }), r;
}
function ub(e) {
  var t = -1, r = Array(e.size);
  return e.forEach(function(o) {
    r[++t] = o;
  }), r;
}
var cb = 1, fb = 2, hb = "[object Boolean]", vb = "[object Date]", pb = "[object Error]", gb = "[object Map]", mb = "[object Number]", bb = "[object RegExp]", xb = "[object Set]", Cb = "[object String]", yb = "[object Symbol]", wb = "[object ArrayBuffer]", Sb = "[object DataView]", As = En ? En.prototype : void 0, ji = As ? As.valueOf : void 0;
function Bb(e, t, r, o, i, a, l) {
  switch (r) {
    case Sb:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      e = e.buffer, t = t.buffer;
    case wb:
      return !(e.byteLength != t.byteLength || !a(new Qo(e), new Qo(t)));
    case hb:
    case vb:
    case mb:
      return go(+e, +t);
    case pb:
      return e.name == t.name && e.message == t.message;
    case bb:
    case Cb:
      return e == t + "";
    case gb:
      var s = db;
    case xb:
      var d = o & cb;
      if (s || (s = ub), e.size != t.size && !d)
        return !1;
      var u = l.get(e);
      if (u)
        return u == t;
      o |= fb, l.set(e, t);
      var c = ku(s(e), s(t), o, i, a, l);
      return l.delete(e), c;
    case yb:
      if (ji)
        return ji.call(e) == ji.call(t);
  }
  return !1;
}
var kb = 1, Rb = Object.prototype, Fb = Rb.hasOwnProperty;
function Pb(e, t, r, o, i, a) {
  var l = r & kb, s = ks(e), d = s.length, u = ks(t), c = u.length;
  if (d != c && !l)
    return !1;
  for (var v = d; v--; ) {
    var p = s[v];
    if (!(l ? p in t : Fb.call(t, p)))
      return !1;
  }
  var x = a.get(e), h = a.get(t);
  if (x && h)
    return x == t && h == e;
  var g = !0;
  a.set(e, t), a.set(t, e);
  for (var b = l; ++v < d; ) {
    p = s[v];
    var m = e[p], C = t[p];
    if (o)
      var S = l ? o(C, m, p, t, e, a) : o(m, C, p, e, t, a);
    if (!(S === void 0 ? m === C || i(m, C, r, o, a) : S)) {
      g = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (g && !b) {
    var w = e.constructor, B = t.constructor;
    w != B && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof B == "function" && B instanceof B) && (g = !1);
  }
  return a.delete(e), a.delete(t), g;
}
var zb = 1, Ds = "[object Arguments]", Es = "[object Array]", Do = "[object Object]", $b = Object.prototype, Ts = $b.hasOwnProperty;
function Ab(e, t, r, o, i, a) {
  var l = en(e), s = en(t), d = l ? Es : Fn(e), u = s ? Es : Fn(t);
  d = d == Ds ? Do : d, u = u == Ds ? Do : u;
  var c = d == Do, v = u == Do, p = d == u;
  if (p && Jo(e)) {
    if (!Jo(t))
      return !1;
    l = !0, c = !1;
  }
  if (p && !c)
    return a || (a = new dn()), l || Qa(e) ? ku(e, t, r, o, i, a) : Bb(e, t, d, r, o, i, a);
  if (!(r & zb)) {
    var x = c && Ts.call(e, "__wrapped__"), h = v && Ts.call(t, "__wrapped__");
    if (x || h) {
      var g = x ? e.value() : e, b = h ? t.value() : t;
      return a || (a = new dn()), i(g, b, r, o, a);
    }
  }
  return p ? (a || (a = new dn()), Pb(e, t, r, o, i, a)) : !1;
}
function rl(e, t, r, o, i) {
  return e === t ? !0 : e == null || t == null || !Tn(e) && !Tn(t) ? e !== e && t !== t : Ab(e, t, r, o, rl, i);
}
var Db = 1, Eb = 2;
function Tb(e, t, r, o) {
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
      var c = new dn(), v;
      if (!(v === void 0 ? rl(u, d, Db | Eb, o, c) : v))
        return !1;
    }
  }
  return !0;
}
function Ru(e) {
  return e === e && !In(e);
}
function Ob(e) {
  for (var t = el(e), r = t.length; r--; ) {
    var o = t[r], i = e[o];
    t[r] = [o, i, Ru(i)];
  }
  return t;
}
function Fu(e, t) {
  return function(r) {
    return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
  };
}
function Mb(e) {
  var t = Ob(e);
  return t.length == 1 && t[0][2] ? Fu(t[0][0], t[0][1]) : function(r) {
    return r === e || Tb(r, e, t);
  };
}
function Ib(e, t) {
  return e != null && t in Object(e);
}
function Lb(e, t, r) {
  t = hu(t, e);
  for (var o = -1, i = t.length, a = !1; ++o < i; ) {
    var l = ci(t[o]);
    if (!(a = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return a || ++o != i ? a : (i = e == null ? 0 : e.length, !!i && Za(i) && Xa(l, i) && (en(e) || Zo(e)));
}
function _b(e, t) {
  return e != null && Lb(e, t, Ib);
}
var Nb = 1, Hb = 2;
function jb(e, t) {
  return tl(e) && Ru(t) ? Fu(ci(e), t) : function(r) {
    var o = lo(r, e);
    return o === void 0 && o === t ? _b(r, e) : rl(t, o, Nb | Hb);
  };
}
function Wb(e) {
  return function(t) {
    return t == null ? void 0 : t[e];
  };
}
function Vb(e) {
  return function(t) {
    return vu(t, e);
  };
}
function Kb(e) {
  return tl(e) ? Wb(ci(e)) : Vb(e);
}
function Ub(e) {
  return typeof e == "function" ? e : e == null ? qa : typeof e == "object" ? en(e) ? jb(e[0], e[1]) : Mb(e) : Kb(e);
}
function qb(e) {
  return function(t, r, o) {
    for (var i = -1, a = Object(t), l = o(t), s = l.length; s--; ) {
      var d = l[++i];
      if (r(a[d], d, a) === !1)
        break;
    }
    return t;
  };
}
var Pu = qb();
function Gb(e, t) {
  return e && Pu(e, t, el);
}
function Xb(e, t) {
  return function(r, o) {
    if (r == null)
      return r;
    if (!Dr(r))
      return e(r, o);
    for (var i = r.length, a = -1, l = Object(r); ++a < i && o(l[a], a, l) !== !1; )
      ;
    return r;
  };
}
var Yb = Xb(Gb);
function pa(e, t, r) {
  (r !== void 0 && !go(e[t], r) || r === void 0 && !(t in e)) && Ya(e, t, r);
}
function Zb(e) {
  return Tn(e) && Dr(e);
}
function ga(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
function Jb(e) {
  return Sp(e, cu(e));
}
function Qb(e, t, r, o, i, a, l) {
  var s = ga(e, r), d = ga(t, r), u = l.get(d);
  if (u) {
    pa(e, r, u);
    return;
  }
  var c = a ? a(s, d, r + "", e, t, l) : void 0, v = c === void 0;
  if (v) {
    var p = en(d), x = !p && Jo(d), h = !p && !x && Qa(d);
    c = d, p || x || h ? en(s) ? c = s : Zb(s) ? c = up(s) : x ? (v = !1, c = Nm(d)) : h ? (v = !1, c = eb(d)) : c = [] : im(d) || Zo(d) ? (c = s, Zo(s) ? c = Jb(s) : (!In(s) || Ga(s)) && (c = tb(d))) : v = !1;
  }
  v && (l.set(d, c), i(c, d, o, a, l), l.delete(d)), pa(e, r, c);
}
function zu(e, t, r, o, i) {
  e !== t && Pu(t, function(a, l) {
    if (i || (i = new dn()), In(a))
      Qb(e, t, l, r, zu, o, i);
    else {
      var s = o ? o(ga(e, l), a, l + "", e, t, i) : void 0;
      s === void 0 && (s = a), pa(e, l, s);
    }
  }, cu);
}
function ex(e, t) {
  var r = -1, o = Dr(e) ? Array(e.length) : [];
  return Yb(e, function(i, a, l) {
    o[++r] = t(i, a, l);
  }), o;
}
function tx(e, t) {
  var r = en(e) ? ou : ex;
  return r(e, Ub(t));
}
var Vr = Pp(function(e, t, r) {
  zu(e, t, r);
});
function Qn(e) {
  const {
    mergedLocaleRef: t,
    mergedDateLocaleRef: r
  } = ge(nn, null) || {}, o = z(() => {
    var a, l;
    return (l = (a = t == null ? void 0 : t.value) === null || a === void 0 ? void 0 : a[e]) !== null && l !== void 0 ? l : x0[e];
  });
  return {
    dateLocaleRef: z(() => {
      var a;
      return (a = r == null ? void 0 : r.value) !== null && a !== void 0 ? a : Ev;
    }),
    localeRef: o
  };
}
const kr = "naive-ui-style";
function Bt(e, t, r) {
  if (!t) return;
  const o = rr(), i = z(() => {
    const {
      value: s
    } = t;
    if (!s)
      return;
    const d = s[e];
    if (d)
      return d;
  }), a = ge(nn, null), l = () => {
    et(() => {
      const {
        value: s
      } = r, d = `${s}${e}Rtl`;
      if (Kf(d, o)) return;
      const {
        value: u
      } = i;
      u && u.style.mount({
        id: d,
        head: !0,
        anchorMetaName: kr,
        props: {
          bPrefix: s ? `.${s}-` : void 0
        },
        ssr: o,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    });
  };
  return o ? l() : nr(l), i;
}
const Ln = {
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
  fontSize: nx,
  fontFamily: rx,
  lineHeight: ox
} = Ln, $u = O("body", `
 margin: 0;
 font-size: ${nx};
 font-family: ${rx};
 line-height: ${ox};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [O("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function _n(e, t, r) {
  if (!t) {
    process.env.NODE_ENV !== "production" && On("use-style", "No style is specified.");
    return;
  }
  const o = rr(), i = ge(nn, null), a = () => {
    const l = r.value;
    t.mount({
      id: l === void 0 ? e : l + e,
      head: !0,
      anchorMetaName: kr,
      props: {
        bPrefix: l ? `.${l}-` : void 0
      },
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    }), i != null && i.preflightStyleDisabled || $u.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: kr,
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    });
  };
  o ? a() : nr(a);
}
function ve(e, t, r, o, i, a) {
  const l = rr(), s = ge(nn, null);
  if (r) {
    const u = () => {
      const c = a == null ? void 0 : a.value;
      r.mount({
        id: c === void 0 ? t : c + t,
        head: !0,
        props: {
          bPrefix: c ? `.${c}-` : void 0
        },
        anchorMetaName: kr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || $u.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: kr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    l ? u() : nr(u);
  }
  return z(() => {
    var u;
    const {
      theme: {
        common: c,
        self: v,
        peers: p = {}
      } = {},
      themeOverrides: x = {},
      builtinThemeOverrides: h = {}
    } = i, {
      common: g,
      peers: b
    } = x, {
      common: m = void 0,
      [e]: {
        common: C = void 0,
        self: S = void 0,
        peers: w = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: B = void 0,
      [e]: R = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: y,
      peers: P = {}
    } = R, D = Vr({}, c || C || m || o.common, B, y, g), T = Vr(
      // {}, executed every time, no need for empty obj
      (u = v || S || o.self) === null || u === void 0 ? void 0 : u(D),
      h,
      R,
      x
    );
    return {
      common: D,
      self: T,
      peers: Vr({}, o.peers, w, p),
      peerOverrides: Vr({}, h.peers, P, b)
    };
  });
}
ve.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const ix = F("base-icon", `
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
 `)]), vt = ee({
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
    _n("-base-icon", ix, oe(e, "clsPrefix"));
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
}), sr = ee({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: t
  }) {
    const r = $r();
    return () => f(_t, {
      name: "icon-switch-transition",
      appear: r.value
    }, t);
  }
}), ax = ee({
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
function Er(e, t) {
  const r = ee({
    render() {
      return t();
    }
  });
  return ee({
    name: Dm(e),
    setup() {
      var o;
      const i = (o = ge(nn, null)) === null || o === void 0 ? void 0 : o.mergedIconsRef;
      return () => {
        var a;
        const l = (a = i == null ? void 0 : i.value) === null || a === void 0 ? void 0 : a[e];
        return l ? l() : f(r, null);
      };
    }
  });
}
const Os = ee({
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
}), lx = ee({
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
}), Au = ee({
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
}), sx = ee({
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
}), ol = ee({
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
}), dx = Er("clear", () => f("svg", {
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
}))))), ux = Er("close", () => f("svg", {
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
}))))), cx = ee({
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
}), il = Er("error", () => f("svg", {
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
}))))), fx = ee({
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
}), hx = ee({
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
}), Ms = ee({
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
}), Is = ee({
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
}), vx = ee({
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
}), Ls = ee({
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
}), ti = Er("info", () => f("svg", {
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
}))))), _s = ee({
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
}), al = Er("success", () => f("svg", {
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
}))))), fi = Er("warning", () => f("svg", {
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
  cubicBezierEaseInOut: px
} = Ln;
function qt({
  originalTransform: e = "",
  left: t = 0,
  top: r = 0,
  transition: o = `all .3s ${px} !important`
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
const gx = F("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [O(">", [E("clear", `
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
 `)]), E("placeholder", `
 display: flex;
 `), E("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [qt({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), ma = ee({
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
    return _n("-base-clear", gx, oe(e, "clsPrefix")), {
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
    }, f(sr, null, {
      default: () => {
        var t, r;
        return this.show ? f("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, Xt(this.$slots.icon, () => [f(vt, {
          clsPrefix: e
        }, {
          default: () => f(dx, null)
        })])) : f("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (r = (t = this.$slots).placeholder) === null || r === void 0 ? void 0 : r.call(t));
      }
    }));
  }
}), mx = F("base-close", `
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
`, [_("absolute", `
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
 `), qe("disabled", [O("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), O("&:hover::before", `
 background-color: var(--n-close-color-hover);
 `), O("&:focus::before", `
 background-color: var(--n-close-color-hover);
 `), O("&:active", `
 color: var(--n-close-icon-color-pressed);
 `), O("&:active::before", `
 background-color: var(--n-close-color-pressed);
 `)]), _("disabled", `
 cursor: not-allowed;
 color: var(--n-close-icon-color-disabled);
 background-color: transparent;
 `), _("round", [O("&::before", `
 border-radius: 50%;
 `)])]), mo = ee({
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
    return _n("-base-close", mx, oe(e, "clsPrefix")), () => {
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
      }, f(vt, {
        clsPrefix: t
      }, {
        default: () => f(ux, null)
      }));
    };
  }
}), ll = ee({
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
      } = e, v = s ? xf : _t, p = {
        name: d ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: u,
        onEnter: a,
        onAfterEnter: l,
        onBeforeLeave: r,
        onLeave: o,
        onAfterLeave: i
      };
      return s || (p.mode = c), f(v, p, t);
    };
  }
}), bx = ee({
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
}), xx = O([O("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), F("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [E("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [qt()]), E("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [qt({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), E("container", `
 animation: rotator 3s linear infinite both;
 `, [E("icon", `
 height: 1em;
 width: 1em;
 `)])])]), Wi = "1.6s", Cx = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Nn = ee({
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
  }, Cx),
  setup(e) {
    _n("-base-loading", xx, oe(e, "clsPrefix"));
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
    }, f(sr, null, {
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
        dur: Wi,
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
        dur: Wi,
        fill: "freeze",
        repeatCount: "indefinite"
      }), f("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * t};${1.42 * t};${5.67 * t}`,
        begin: "0s",
        dur: Wi,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : f("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), {
  cubicBezierEaseInOut: Ns
} = Ln;
function hi({
  name: e = "fade-in",
  enterDuration: t = "0.2s",
  leaveDuration: r = "0.2s",
  enterCubicBezier: o = Ns,
  leaveCubicBezier: i = Ns
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
}, yx = Zn(ke.neutralBase), Du = Zn(ke.neutralInvertBase), wx = `rgba(${Du.slice(0, 3).join(", ")}, `;
function Hs(e) {
  return `${wx + String(e)})`;
}
function At(e) {
  const t = Array.from(Du);
  return t[3] = Number(e), Ue(yx, t);
}
const Xe = Object.assign(Object.assign({
  name: "common"
}, Ln), {
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
  textColorDisabled: At(ke.alpha4),
  placeholderColor: At(ke.alpha4),
  placeholderColorDisabled: At(ke.alpha5),
  iconColor: At(ke.alpha4),
  iconColorHover: Bo(At(ke.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: Bo(At(ke.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: At(ke.alpha5),
  opacity1: ke.alpha1,
  opacity2: ke.alpha2,
  opacity3: ke.alpha3,
  opacity4: ke.alpha4,
  opacity5: ke.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: At(Number(ke.alphaClose)),
  closeIconColorHover: At(Number(ke.alphaClose)),
  closeIconColorPressed: At(Number(ke.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: At(ke.alpha4),
  clearColorHover: Bo(At(ke.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: Bo(At(ke.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Hs(ke.alphaScrollbar),
  scrollbarColorHover: Hs(ke.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: At(ke.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: ke.neutralPopover,
  tableColor: ke.neutralCard,
  cardColor: ke.neutralCard,
  modalColor: ke.neutralModal,
  bodyColor: ke.neutralBody,
  tagColor: "#eee",
  avatarColor: At(ke.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: At(ke.alphaInput),
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
}), Sx = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Bx(e) {
  const {
    scrollbarColor: t,
    scrollbarColorHover: r,
    scrollbarHeight: o,
    scrollbarWidth: i,
    scrollbarBorderRadius: a
  } = e;
  return Object.assign(Object.assign({}, Sx), {
    height: o,
    width: i,
    borderRadius: a,
    color: t,
    colorHover: r
  });
}
const bo = {
  name: "Scrollbar",
  common: Xe,
  self: Bx
}, kx = F("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [O(">", [F("scrollbar-container", `
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
  F("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), O(">, +", [F("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [_("horizontal", `
 height: var(--n-scrollbar-height);
 `, [O(">", [E("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), _("horizontal--top", `
 top: var(--n-scrollbar-rail-top-horizontal-top); 
 right: var(--n-scrollbar-rail-right-horizontal-top); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-top); 
 left: var(--n-scrollbar-rail-left-horizontal-top); 
 `), _("horizontal--bottom", `
 top: var(--n-scrollbar-rail-top-horizontal-bottom); 
 right: var(--n-scrollbar-rail-right-horizontal-bottom); 
 bottom: var(--n-scrollbar-rail-bottom-horizontal-bottom); 
 left: var(--n-scrollbar-rail-left-horizontal-bottom); 
 `), _("vertical", `
 width: var(--n-scrollbar-width);
 `, [O(">", [E("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), _("vertical--left", `
 top: var(--n-scrollbar-rail-top-vertical-left); 
 right: var(--n-scrollbar-rail-right-vertical-left); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-left); 
 left: var(--n-scrollbar-rail-left-vertical-left); 
 `), _("vertical--right", `
 top: var(--n-scrollbar-rail-top-vertical-right); 
 right: var(--n-scrollbar-rail-right-vertical-right); 
 bottom: var(--n-scrollbar-rail-bottom-vertical-right); 
 left: var(--n-scrollbar-rail-left-vertical-right); 
 `), _("disabled", [O(">", [E("scrollbar", "pointer-events: none;")])]), O(">", [E("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [hi(), O("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Rx = Object.assign(Object.assign({}, ve.props), {
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
}), dr = ee({
  name: "Scrollbar",
  props: Rx,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Ae(e), i = Bt("Scrollbar", o, t), a = L(null), l = L(null), s = L(null), d = L(null), u = L(null), c = L(null), v = L(null), p = L(null), x = L(null), h = L(null), g = L(null), b = L(0), m = L(0), C = L(!1), S = L(!1);
    let w = !1, B = !1, R, y, P = 0, D = 0, T = 0, U = 0;
    const M = ph(), n = ve("Scrollbar", "-scrollbar", kx, bo, e, t), $ = z(() => {
      const {
        value: k
      } = p, {
        value: W
      } = c, {
        value: J
      } = h;
      return k === null || W === null || J === null ? 0 : Math.min(k, J * k / W + Ft(n.value.self.width) * 1.5);
    }), A = z(() => `${$.value}px`), N = z(() => {
      const {
        value: k
      } = x, {
        value: W
      } = v, {
        value: J
      } = g;
      return k === null || W === null || J === null ? 0 : J * k / W + Ft(n.value.self.height) * 1.5;
    }), I = z(() => `${N.value}px`), V = z(() => {
      const {
        value: k
      } = p, {
        value: W
      } = b, {
        value: J
      } = c, {
        value: le
      } = h;
      if (k === null || J === null || le === null)
        return 0;
      {
        const se = J - k;
        return se ? W / se * (le - $.value) : 0;
      }
    }), te = z(() => `${V.value}px`), X = z(() => {
      const {
        value: k
      } = x, {
        value: W
      } = m, {
        value: J
      } = v, {
        value: le
      } = g;
      if (k === null || J === null || le === null)
        return 0;
      {
        const se = J - k;
        return se ? W / se * (le - N.value) : 0;
      }
    }), K = z(() => `${X.value}px`), H = z(() => {
      const {
        value: k
      } = p, {
        value: W
      } = c;
      return k !== null && W !== null && W > k;
    }), q = z(() => {
      const {
        value: k
      } = x, {
        value: W
      } = v;
      return k !== null && W !== null && W > k;
    }), Y = z(() => {
      const {
        trigger: k
      } = e;
      return k === "none" || C.value;
    }), ie = z(() => {
      const {
        trigger: k
      } = e;
      return k === "none" || S.value;
    }), ae = z(() => {
      const {
        container: k
      } = e;
      return k ? k() : l.value;
    }), fe = z(() => {
      const {
        content: k
      } = e;
      return k ? k() : s.value;
    }), we = (k, W) => {
      if (!e.scrollable) return;
      if (typeof k == "number") {
        Fe(k, W ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: J,
        top: le,
        index: se,
        elSize: pe,
        position: me,
        behavior: Se,
        el: Ie,
        debounce: nt = !0
      } = k;
      (J !== void 0 || le !== void 0) && Fe(J ?? 0, le ?? 0, 0, !1, Se), Ie !== void 0 ? Fe(0, Ie.offsetTop, Ie.offsetHeight, nt, Se) : se !== void 0 && pe !== void 0 ? Fe(0, se * pe, pe, nt, Se) : me === "bottom" ? Fe(0, Number.MAX_SAFE_INTEGER, 0, !1, Se) : me === "top" && Fe(0, 0, 0, !1, Se);
    }, G = wh(() => {
      e.container || we({
        top: b.value,
        left: m.value
      });
    }), ue = () => {
      G.isDeactivated || he();
    }, Re = (k) => {
      if (G.isDeactivated) return;
      const {
        onResize: W
      } = e;
      W && W(k), he();
    }, be = (k, W) => {
      if (!e.scrollable) return;
      const {
        value: J
      } = ae;
      J && (typeof k == "object" ? J.scrollBy(k) : J.scrollBy(k, W || 0));
    };
    function Fe(k, W, J, le, se) {
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
              left: k,
              top: W + J - Se,
              behavior: se
            });
            return;
          }
        }
        pe.scrollTo({
          left: k,
          top: W,
          behavior: se
        });
      }
    }
    function Pe() {
      xe(), Ce(), he();
    }
    function at() {
      Ze();
    }
    function Ze() {
      dt(), ut();
    }
    function dt() {
      y !== void 0 && window.clearTimeout(y), y = window.setTimeout(() => {
        S.value = !1;
      }, e.duration);
    }
    function ut() {
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
    function ze(k) {
      const {
        onScroll: W
      } = e;
      W && W(k), Me();
    }
    function Me() {
      const {
        value: k
      } = ae;
      k && (b.value = k.scrollTop, m.value = k.scrollLeft * (i != null && i.value ? -1 : 1));
    }
    function Ye() {
      const {
        value: k
      } = fe;
      k && (c.value = k.offsetHeight, v.value = k.offsetWidth);
      const {
        value: W
      } = ae;
      W && (p.value = W.offsetHeight, x.value = W.offsetWidth);
      const {
        value: J
      } = u, {
        value: le
      } = d;
      J && (g.value = J.offsetWidth), le && (h.value = le.offsetHeight);
    }
    function re() {
      const {
        value: k
      } = ae;
      k && (b.value = k.scrollTop, m.value = k.scrollLeft * (i != null && i.value ? -1 : 1), p.value = k.offsetHeight, x.value = k.offsetWidth, c.value = k.scrollHeight, v.value = k.scrollWidth);
      const {
        value: W
      } = u, {
        value: J
      } = d;
      W && (g.value = W.offsetWidth), J && (h.value = J.offsetHeight);
    }
    function he() {
      e.scrollable && (e.useUnifiedContainer ? re() : (Ye(), Me()));
    }
    function Ee(k) {
      var W;
      return !(!((W = a.value) === null || W === void 0) && W.contains(Sr(k)));
    }
    function lt(k) {
      k.preventDefault(), k.stopPropagation(), B = !0, rt("mousemove", window, kt, !0), rt("mouseup", window, Rt, !0), D = m.value, T = i != null && i.value ? window.innerWidth - k.clientX : k.clientX;
    }
    function kt(k) {
      if (!B) return;
      R !== void 0 && window.clearTimeout(R), y !== void 0 && window.clearTimeout(y);
      const {
        value: W
      } = x, {
        value: J
      } = v, {
        value: le
      } = N;
      if (W === null || J === null) return;
      const pe = (i != null && i.value ? window.innerWidth - k.clientX - T : k.clientX - T) * (J - W) / (W - le), me = J - W;
      let Se = D + pe;
      Se = Math.min(me, Se), Se = Math.max(Se, 0);
      const {
        value: Ie
      } = ae;
      if (Ie) {
        Ie.scrollLeft = Se * (i != null && i.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: nt
        } = e;
        nt && nt(Se);
      }
    }
    function Rt(k) {
      k.preventDefault(), k.stopPropagation(), We("mousemove", window, kt, !0), We("mouseup", window, Rt, !0), B = !1, he(), Ee(k) && Ze();
    }
    function ht(k) {
      k.preventDefault(), k.stopPropagation(), w = !0, rt("mousemove", window, tt, !0), rt("mouseup", window, mt, !0), P = b.value, U = k.clientY;
    }
    function tt(k) {
      if (!w) return;
      R !== void 0 && window.clearTimeout(R), y !== void 0 && window.clearTimeout(y);
      const {
        value: W
      } = p, {
        value: J
      } = c, {
        value: le
      } = $;
      if (W === null || J === null) return;
      const pe = (k.clientY - U) * (J - W) / (W - le), me = J - W;
      let Se = P + pe;
      Se = Math.min(me, Se), Se = Math.max(Se, 0);
      const {
        value: Ie
      } = ae;
      Ie && (Ie.scrollTop = Se);
    }
    function mt(k) {
      k.preventDefault(), k.stopPropagation(), We("mousemove", window, tt, !0), We("mouseup", window, mt, !0), w = !1, he(), Ee(k) && Ze();
    }
    et(() => {
      const {
        value: k
      } = q, {
        value: W
      } = H, {
        value: J
      } = t, {
        value: le
      } = u, {
        value: se
      } = d;
      le && (k ? le.classList.remove(`${J}-scrollbar-rail--disabled`) : le.classList.add(`${J}-scrollbar-rail--disabled`)), se && (W ? se.classList.remove(`${J}-scrollbar-rail--disabled`) : se.classList.add(`${J}-scrollbar-rail--disabled`));
    }), zt(() => {
      e.container || he();
    }), St(() => {
      R !== void 0 && window.clearTimeout(R), y !== void 0 && window.clearTimeout(y), We("mousemove", window, tt, !0), We("mouseup", window, mt, !0);
    });
    const Je = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: k
        },
        self: {
          color: W,
          colorHover: J,
          height: le,
          width: se,
          borderRadius: pe,
          railInsetHorizontalTop: me,
          railInsetHorizontalBottom: Se,
          railInsetVerticalRight: Ie,
          railInsetVerticalLeft: nt,
          railColor: je
        }
      } = n.value, {
        top: $t,
        right: Tt,
        bottom: Ot,
        left: Nt
      } = Lt(me), {
        top: Ht,
        right: Yt,
        bottom: jt,
        left: j
      } = Lt(Se), {
        top: Q,
        right: ye,
        bottom: Te,
        left: Ke
      } = Lt(i != null && i.value ? is(Ie) : Ie), {
        top: Le,
        right: ot,
        bottom: ct,
        left: Ut
      } = Lt(i != null && i.value ? is(nt) : nt);
      return {
        "--n-scrollbar-bezier": k,
        "--n-scrollbar-color": W,
        "--n-scrollbar-color-hover": J,
        "--n-scrollbar-border-radius": pe,
        "--n-scrollbar-width": se,
        "--n-scrollbar-height": le,
        "--n-scrollbar-rail-top-horizontal-top": $t,
        "--n-scrollbar-rail-right-horizontal-top": Tt,
        "--n-scrollbar-rail-bottom-horizontal-top": Ot,
        "--n-scrollbar-rail-left-horizontal-top": Nt,
        "--n-scrollbar-rail-top-horizontal-bottom": Ht,
        "--n-scrollbar-rail-right-horizontal-bottom": Yt,
        "--n-scrollbar-rail-bottom-horizontal-bottom": jt,
        "--n-scrollbar-rail-left-horizontal-bottom": j,
        "--n-scrollbar-rail-top-vertical-right": Q,
        "--n-scrollbar-rail-right-vertical-right": ye,
        "--n-scrollbar-rail-bottom-vertical-right": Te,
        "--n-scrollbar-rail-left-vertical-right": Ke,
        "--n-scrollbar-rail-top-vertical-left": Le,
        "--n-scrollbar-rail-right-vertical-left": ot,
        "--n-scrollbar-rail-bottom-vertical-left": ct,
        "--n-scrollbar-rail-left-vertical-left": Ut,
        "--n-scrollbar-rail-color": je
      };
    }), ce = r ? Ge("scrollbar", void 0, Je, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: we,
      scrollBy: be,
      sync: he,
      syncUnifiedContainer: re,
      handleMouseEnterWrapper: Pe,
      handleMouseLeaveWrapper: at
    }), {
      mergedClsPrefix: t,
      rtlEnabled: i,
      containerScrollTop: b,
      wrapperRef: a,
      containerRef: l,
      contentRef: s,
      yRailRef: d,
      xRailRef: u,
      needYBar: H,
      needXBar: q,
      yBarSizePx: A,
      xBarSizePx: I,
      yBarTopPx: te,
      xBarLeftPx: K,
      isShowXBar: Y,
      isShowYBar: ie,
      isIos: M,
      handleScroll: ze,
      handleContentResize: ue,
      handleContainerResize: Re,
      handleYScrollMouseDown: ht,
      handleXScrollMouseDown: lt,
      cssVars: r ? void 0 : Je,
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
    const u = this.trigger === "none", c = (x, h) => f("div", {
      ref: "yRailRef",
      class: [`${r}-scrollbar-rail`, `${r}-scrollbar-rail--vertical`, `${r}-scrollbar-rail--vertical--${l}`, x],
      "data-scrollbar-rail": !0,
      style: [h || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, f(u ? la : _t, u ? null : {
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
      var x, h;
      return (x = this.onRender) === null || x === void 0 || x.call(this), f("div", Vt(this.$attrs, {
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
      }, f(Br, {
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
      }, f(u ? la : _t, u ? null : {
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
    }, p = this.container ? v() : f(Br, {
      onResize: this.handleContainerResize
    }, {
      default: v
    });
    return a ? f(Qe, null, p, c(this.themeClass, this.cssVars)) : p;
  }
}), Eu = dr;
function js(e) {
  return Array.isArray(e) ? e : [e];
}
const ba = {
  STOP: "STOP"
};
function Tu(e, t) {
  const r = t(e);
  e.children !== void 0 && r !== ba.STOP && e.children.forEach((o) => Tu(o, t));
}
function Fx(e, t = {}) {
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
function Px(e, t) {
  const { isLeaf: r } = e;
  return r !== void 0 ? r : !t(e);
}
function zx(e) {
  return e.children;
}
function $x(e) {
  return e.key;
}
function Ax() {
  return !1;
}
function Dx(e, t) {
  const { isLeaf: r } = e;
  return !(r === !1 && !Array.isArray(t(e)));
}
function Ex(e) {
  return e.disabled === !0;
}
function Tx(e, t) {
  return e.isLeaf === !1 && !Array.isArray(t(e));
}
function Ox(e, t) {
  if (e.isLeaf === !0) {
    const r = t(e);
    if (Array.isArray(r) && r.length > 0)
      return !0;
  }
  return !1;
}
function Vi(e) {
  var t;
  return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : [];
}
function Ki(e) {
  var t;
  return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : [];
}
function Mx(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) || r.add(o);
  }), Array.from(r);
}
function Ix(e, t) {
  const r = new Set(e);
  return t.forEach((o) => {
    r.has(o) && r.delete(o);
  }), Array.from(r);
}
function Lx(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function _x(e) {
  const t = /* @__PURE__ */ new Map();
  return e.forEach((r, o) => {
    t.set(r.key, o);
  }), (r) => {
    var o;
    return (o = t.get(r)) !== null && o !== void 0 ? o : null;
  };
}
class Nx extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function Hx(e, t, r, o) {
  return ni(t.concat(e), r, o, !1);
}
function jx(e, t) {
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
function Wx(e, t, r, o) {
  const i = ni(t, r, o, !1), a = ni(e, r, o, !0), l = jx(e, r), s = [];
  return i.forEach((d) => {
    (a.has(d) || l.has(d)) && s.push(d);
  }), s.forEach((d) => i.delete(d)), i;
}
function Ui(e, t) {
  const { checkedKeys: r, keysToCheck: o, keysToUncheck: i, indeterminateKeys: a, cascade: l, leafOnly: s, checkStrategy: d, allowNotLoaded: u } = e;
  if (!l)
    return o !== void 0 ? {
      checkedKeys: Mx(r, o),
      indeterminateKeys: Array.from(a)
    } : i !== void 0 ? {
      checkedKeys: Ix(r, i),
      indeterminateKeys: Array.from(a)
    } : {
      checkedKeys: Array.from(r),
      indeterminateKeys: Array.from(a)
    };
  const { levelTreeNodeMap: c } = t;
  let v;
  i !== void 0 ? v = Wx(i, r, t, u) : o !== void 0 ? v = Hx(o, r, t, u) : v = ni(r, t, u, !1);
  const p = d === "parent", x = d === "child" || s, h = v, g = /* @__PURE__ */ new Set(), b = Math.max.apply(null, Array.from(c.keys()));
  for (let m = b; m >= 0; m -= 1) {
    const C = m === 0, S = c.get(m);
    for (const w of S) {
      if (w.isLeaf)
        continue;
      const { key: B, shallowLoaded: R } = w;
      if (x && R && w.children.forEach((T) => {
        !T.disabled && !T.isLeaf && T.shallowLoaded && h.has(T.key) && h.delete(T.key);
      }), w.disabled || !R)
        continue;
      let y = !0, P = !1, D = !0;
      for (const T of w.children) {
        const U = T.key;
        if (!T.disabled) {
          if (D && (D = !1), h.has(U))
            P = !0;
          else if (g.has(U)) {
            P = !0, y = !1;
            break;
          } else if (y = !1, P)
            break;
        }
      }
      y && !D ? (p && w.children.forEach((T) => {
        !T.disabled && h.has(T.key) && h.delete(T.key);
      }), h.add(B)) : P && g.add(B), C && x && h.has(B) && h.delete(B);
    }
  }
  return {
    checkedKeys: Array.from(h),
    indeterminateKeys: Array.from(g)
  };
}
function ni(e, t, r, o) {
  const { treeNodeMap: i, getChildren: a } = t, l = /* @__PURE__ */ new Set(), s = new Set(e);
  return e.forEach((d) => {
    const u = i.get(d);
    u !== void 0 && Tu(u, (c) => {
      if (c.disabled)
        return ba.STOP;
      const { key: v } = c;
      if (!l.has(v) && (l.add(v), s.add(v), Tx(c.rawNode, a))) {
        if (o)
          return ba.STOP;
        if (!r)
          throw new Nx();
      }
    });
  }), s;
}
function Vx(e, { includeGroup: t = !1, includeSelf: r = !0 }, o) {
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
function Kx(e) {
  if (e.length === 0)
    return null;
  const t = e[0];
  return t.isGroup || t.ignored || t.disabled ? t.getNext() : t;
}
function Ux(e, t) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return t ? r[(i + 1) % o] : i === r.length - 1 ? null : r[i + 1];
}
function Ws(e, t, { loop: r = !1, includeDisabled: o = !1 } = {}) {
  const i = t === "prev" ? qx : Ux, a = {
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
        const c = sl(u, a);
        c !== null ? s = c : d(i(u, r));
      } else {
        const c = i(u, !1);
        if (c !== null)
          d(c);
        else {
          const v = Gx(u);
          v != null && v.isGroup ? d(i(v, r)) : r && d(i(u, !0));
        }
      }
    }
  }
  return d(e), s;
}
function qx(e, t) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return t ? r[(i - 1 + o) % o] : i === 0 ? null : r[i - 1];
}
function Gx(e) {
  return e.parent;
}
function sl(e, t = {}) {
  const { reverse: r = !1 } = t, { children: o } = e;
  if (o) {
    const { length: i } = o, a = r ? i - 1 : 0, l = r ? -1 : i, s = r ? -1 : 1;
    for (let d = a; d !== l; d += s) {
      const u = o[d];
      if (!u.disabled && !u.ignored)
        if (u.isGroup) {
          const c = sl(u, t);
          if (c !== null)
            return c;
        } else
          return u;
    }
  }
  return null;
}
const Xx = {
  getChild() {
    return this.ignored ? null : sl(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return Ws(this, "next", e);
  },
  getPrev(e = {}) {
    return Ws(this, "prev", e);
  }
};
function Yx(e, t) {
  const r = t ? new Set(t) : void 0, o = [];
  function i(a) {
    a.forEach((l) => {
      o.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || // normal non-leaf node
      r === void 0 || r.has(l.key)) && i(l.children);
    });
  }
  return i(e), o;
}
function Zx(e, t) {
  const r = e.key;
  for (; t; ) {
    if (t.key === r)
      return !0;
    t = t.parent;
  }
  return !1;
}
function Ou(e, t, r, o, i, a = null, l = 0) {
  const s = [];
  return e.forEach((d, u) => {
    var c;
    process.env.NODE_ENV !== "production" && Ox(d, i) && console.error("[treemate]: node", d, "is invalid");
    const v = Object.create(o);
    if (v.rawNode = d, v.siblings = s, v.level = l, v.index = u, v.isFirstChild = u === 0, v.isLastChild = u + 1 === e.length, v.parent = a, !v.ignored) {
      const p = i(d);
      Array.isArray(p) && (v.children = Ou(p, t, r, o, i, v, l + 1));
    }
    s.push(v), t.set(v.key, v), r.has(l) || r.set(l, []), (c = r.get(l)) === null || c === void 0 || c.push(v);
  }), s;
}
function vi(e, t = {}) {
  var r;
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), { getDisabled: a = Ex, getIgnored: l = Ax, getIsGroup: s = Lx, getKey: d = $x } = t, u = (r = t.getChildren) !== null && r !== void 0 ? r : zx, c = t.ignoreEmptyChildren ? (w) => {
    const B = u(w);
    return Array.isArray(B) ? B.length ? B : null : B;
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
      return Px(this.rawNode, c);
    },
    get shallowLoaded() {
      return Dx(this.rawNode, c);
    },
    get ignored() {
      return l(this.rawNode);
    },
    contains(w) {
      return Zx(this, w);
    }
  }, Xx), p = Ou(e, o, i, v, c);
  function x(w) {
    if (w == null)
      return null;
    const B = o.get(w);
    return B && !B.isGroup && !B.ignored ? B : null;
  }
  function h(w) {
    if (w == null)
      return null;
    const B = o.get(w);
    return B && !B.ignored ? B : null;
  }
  function g(w, B) {
    const R = h(w);
    return R ? R.getPrev(B) : null;
  }
  function b(w, B) {
    const R = h(w);
    return R ? R.getNext(B) : null;
  }
  function m(w) {
    const B = h(w);
    return B ? B.getParent() : null;
  }
  function C(w) {
    const B = h(w);
    return B ? B.getChild() : null;
  }
  const S = {
    treeNodes: p,
    treeNodeMap: o,
    levelTreeNodeMap: i,
    maxLevel: Math.max(...i.keys()),
    getChildren: c,
    getFlattenedNodes(w) {
      return Yx(p, w);
    },
    getNode: x,
    getPrev: g,
    getNext: b,
    getParent: m,
    getChild: C,
    getFirstAvailableNode() {
      return Kx(p);
    },
    getPath(w, B = {}) {
      return Vx(w, B, S);
    },
    getCheckedKeys(w, B = {}) {
      const { cascade: R = !0, leafOnly: y = !1, checkStrategy: P = "all", allowNotLoaded: D = !1 } = B;
      return Ui({
        checkedKeys: Vi(w),
        indeterminateKeys: Ki(w),
        cascade: R,
        leafOnly: y,
        checkStrategy: P,
        allowNotLoaded: D
      }, S);
    },
    check(w, B, R = {}) {
      const { cascade: y = !0, leafOnly: P = !1, checkStrategy: D = "all", allowNotLoaded: T = !1 } = R;
      return Ui({
        checkedKeys: Vi(B),
        indeterminateKeys: Ki(B),
        keysToCheck: w == null ? [] : js(w),
        cascade: y,
        leafOnly: P,
        checkStrategy: D,
        allowNotLoaded: T
      }, S);
    },
    uncheck(w, B, R = {}) {
      const { cascade: y = !0, leafOnly: P = !1, checkStrategy: D = "all", allowNotLoaded: T = !1 } = R;
      return Ui({
        checkedKeys: Vi(B),
        indeterminateKeys: Ki(B),
        keysToUncheck: w == null ? [] : js(w),
        cascade: y,
        leafOnly: P,
        checkStrategy: D,
        allowNotLoaded: T
      }, S);
    },
    getNonLeafKeys(w = {}) {
      return Fx(p, w);
    }
  };
  return S;
}
const Jx = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function Qx(e) {
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
  return Object.assign(Object.assign({}, Jx), {
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
const dl = {
  name: "Empty",
  common: Xe,
  self: Qx
}, e1 = F("empty", `
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
 `, [O("+", [E("description", `
 margin-top: 8px;
 `)])]), E("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), E("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]), t1 = Object.assign(Object.assign({}, ve.props), {
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
}), Rr = ee({
  name: "Empty",
  props: t1,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r,
      mergedComponentPropsRef: o
    } = Ae(e), i = ve("Empty", "-empty", e1, dl, e, t), {
      localeRef: a
    } = Qn("Empty"), l = z(() => {
      var c, v, p;
      return (c = e.description) !== null && c !== void 0 ? c : (p = (v = o == null ? void 0 : o.value) === null || v === void 0 ? void 0 : v.Empty) === null || p === void 0 ? void 0 : p.description;
    }), s = z(() => {
      var c, v;
      return ((v = (c = o == null ? void 0 : o.value) === null || c === void 0 ? void 0 : c.Empty) === null || v === void 0 ? void 0 : v.renderIcon) || (() => f(cx, null));
    }), d = z(() => {
      const {
        size: c
      } = e, {
        common: {
          cubicBezierEaseInOut: v
        },
        self: {
          [Z("iconSize", c)]: p,
          [Z("fontSize", c)]: x,
          textColor: h,
          iconColor: g,
          extraTextColor: b
        }
      } = i.value;
      return {
        "--n-icon-size": p,
        "--n-font-size": x,
        "--n-bezier": v,
        "--n-text-color": h,
        "--n-icon-color": g,
        "--n-extra-text-color": b
      };
    }), u = r ? Ge("empty", z(() => {
      let c = "";
      const {
        size: v
      } = e;
      return c += v[0], c;
    }), d, e) : void 0;
    return {
      mergedClsPrefix: t,
      mergedRenderIcon: s,
      localizedDescription: z(() => l.value || a.value.description),
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
    }, e.icon ? e.icon() : f(vt, {
      clsPrefix: t
    }, {
      default: this.mergedRenderIcon
    })) : null, this.showDescription ? f("div", {
      class: `${t}-empty__description`
    }, e.default ? e.default() : this.localizedDescription) : null, e.extra ? f("div", {
      class: `${t}-empty__extra`
    }, e.extra()) : null);
  }
}), n1 = {
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
function r1(e) {
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
    fontSizeSmall: p,
    fontSizeMedium: x,
    fontSizeLarge: h,
    fontSizeHuge: g,
    heightTiny: b,
    heightSmall: m,
    heightMedium: C,
    heightLarge: S,
    heightHuge: w
  } = e;
  return Object.assign(Object.assign({}, n1), {
    optionFontSizeTiny: v,
    optionFontSizeSmall: p,
    optionFontSizeMedium: x,
    optionFontSizeLarge: h,
    optionFontSizeHuge: g,
    optionHeightTiny: b,
    optionHeightSmall: m,
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
const ul = {
  name: "InternalSelectMenu",
  common: Xe,
  peers: {
    Scrollbar: bo,
    Empty: dl
  },
  self: r1
}, Vs = ee({
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
    } = ge(Ia);
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
    } = this, a = o == null ? void 0 : o(i), l = t ? t(i, !1) : ft(i[this.labelField], i, !1), s = f("div", Object.assign({}, a, {
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
function o1(e, t) {
  return f(_t, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => e ? f(vt, {
      clsPrefix: t,
      class: `${t}-base-select-option__check`
    }, {
      default: () => f(lx)
    }) : null
  });
}
const Ks = ee({
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
      handleOptionMouseEnter: p
    } = ge(Ia), x = Ve(() => {
      const {
        value: m
      } = r;
      return m ? e.tmNode.key === m.key : !1;
    });
    function h(m) {
      const {
        tmNode: C
      } = e;
      C.disabled || v(m, C);
    }
    function g(m) {
      const {
        tmNode: C
      } = e;
      C.disabled || p(m, C);
    }
    function b(m) {
      const {
        tmNode: C
      } = e, {
        value: S
      } = x;
      C.disabled || S || p(m, C);
    }
    return {
      multiple: o,
      isGrouped: Ve(() => {
        const {
          tmNode: m
        } = e, {
          parent: C
        } = m;
        return C && C.rawNode.type === "group";
      }),
      showCheckmark: u,
      nodeProps: c,
      isPending: x,
      isSelected: Ve(() => {
        const {
          value: m
        } = t, {
          value: C
        } = o;
        if (m === null) return !1;
        const S = e.tmNode.rawNode[d.value];
        if (C) {
          const {
            value: w
          } = i;
          return w.has(S);
        } else
          return m === S;
      }),
      labelField: s,
      renderLabel: a,
      renderOption: l,
      handleMouseMove: b,
      handleMouseEnter: g,
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
    } = this, p = o1(r, e), x = d ? [d(t, r), a && p] : [ft(t[this.labelField], t, r), a && p], h = l == null ? void 0 : l(t), g = f("div", Object.assign({}, h, {
      class: [`${e}-base-select-option`, t.class, h == null ? void 0 : h.class, {
        [`${e}-base-select-option--disabled`]: t.disabled,
        [`${e}-base-select-option--selected`]: r,
        [`${e}-base-select-option--grouped`]: i,
        [`${e}-base-select-option--pending`]: o,
        [`${e}-base-select-option--show-checkmark`]: a
      }],
      style: [(h == null ? void 0 : h.style) || "", t.style || ""],
      onClick: Zr([u, h == null ? void 0 : h.onClick]),
      onMouseenter: Zr([c, h == null ? void 0 : h.onMouseenter]),
      onMousemove: Zr([v, h == null ? void 0 : h.onMousemove])
    }), f("div", {
      class: `${e}-base-select-option__content`
    }, x));
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
  cubicBezierEaseIn: Us,
  cubicBezierEaseOut: qs
} = Ln;
function xo({
  transformOrigin: e = "inherit",
  duration: t = ".2s",
  enterScale: r = ".9",
  originalTransform: o = "",
  originalTransition: i = ""
} = {}) {
  return [O("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${t} ${Us}, transform ${t} ${Us} ${i && `,${i}`}`
  }), O("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${t} ${qs}, transform ${t} ${qs} ${i && `,${i}`}`
  }), O("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${o} scale(${r})`
  }), O("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${o} scale(1)`
  })];
}
const i1 = F("base-select-menu", `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [F("scrollbar", `
 max-height: var(--n-height);
 `), F("virtual-list", `
 max-height: var(--n-height);
 `), F("base-select-option", `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [E("content", `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), F("base-select-group-header", `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), F("base-select-menu-option-wrapper", `
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
 `), F("base-select-group-header", `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), F("base-select-option", `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [_("show-checkmark", `
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
 `), _("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), _("pending", [O("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), _("selected", `
 color: var(--n-option-text-color-active);
 `, [O("&::before", `
 background-color: var(--n-option-color-active);
 `), _("pending", [O("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), _("disabled", `
 cursor: not-allowed;
 `, [qe("selected", `
 color: var(--n-option-text-color-disabled);
 `), _("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), E("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [xo({
  enterScale: "0.5"
})])])]), Mu = ee({
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
    } = Ae(e), o = Bt("InternalSelectMenu", r, t), i = ve("InternalSelectMenu", "-internal-select-menu", i1, ul, e, oe(e, "clsPrefix")), a = L(null), l = L(null), s = L(null), d = z(() => e.treeMate.getFlattenedNodes()), u = z(() => _x(d.value)), c = L(null);
    function v() {
      const {
        treeMate: H
      } = e;
      let q = null;
      const {
        value: Y
      } = e;
      Y === null ? q = H.getFirstAvailableNode() : (e.multiple ? q = H.getNode((Y || [])[(Y || []).length - 1]) : q = H.getNode(Y), (!q || q.disabled) && (q = H.getFirstAvailableNode())), $(q || null);
    }
    function p() {
      const {
        value: H
      } = c;
      H && !e.treeMate.getNode(H.key) && (c.value = null);
    }
    let x;
    Ne(() => e.show, (H) => {
      H ? x = Ne(() => e.treeMate, () => {
        e.resetMenuOnOptionsChange ? (e.autoPending ? v() : p(), bt(A)) : p();
      }, {
        immediate: !0
      }) : x == null || x();
    }, {
      immediate: !0
    }), St(() => {
      x == null || x();
    });
    const h = z(() => Ft(i.value.self[Z("optionHeight", e.size)])), g = z(() => Lt(i.value.self[Z("padding", e.size)])), b = z(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), m = z(() => {
      const H = d.value;
      return H && H.length === 0;
    });
    function C(H) {
      const {
        onToggle: q
      } = e;
      q && q(H);
    }
    function S(H) {
      const {
        onScroll: q
      } = e;
      q && q(H);
    }
    function w(H) {
      var q;
      (q = s.value) === null || q === void 0 || q.sync(), S(H);
    }
    function B() {
      var H;
      (H = s.value) === null || H === void 0 || H.sync();
    }
    function R() {
      const {
        value: H
      } = c;
      return H || null;
    }
    function y(H, q) {
      q.disabled || $(q, !1);
    }
    function P(H, q) {
      q.disabled || C(q);
    }
    function D(H) {
      var q;
      Kt(H, "action") || (q = e.onKeyup) === null || q === void 0 || q.call(e, H);
    }
    function T(H) {
      var q;
      Kt(H, "action") || (q = e.onKeydown) === null || q === void 0 || q.call(e, H);
    }
    function U(H) {
      var q;
      (q = e.onMousedown) === null || q === void 0 || q.call(e, H), !e.focusable && H.preventDefault();
    }
    function M() {
      const {
        value: H
      } = c;
      H && $(H.getNext({
        loop: !0
      }), !0);
    }
    function n() {
      const {
        value: H
      } = c;
      H && $(H.getPrev({
        loop: !0
      }), !0);
    }
    function $(H, q = !1) {
      c.value = H, q && A();
    }
    function A() {
      var H, q;
      const Y = c.value;
      if (!Y) return;
      const ie = u.value(Y.key);
      ie !== null && (e.virtualScroll ? (H = l.value) === null || H === void 0 || H.scrollTo({
        index: ie
      }) : (q = s.value) === null || q === void 0 || q.scrollTo({
        index: ie,
        elSize: h.value
      }));
    }
    function N(H) {
      var q, Y;
      !((q = a.value) === null || q === void 0) && q.contains(H.target) && ((Y = e.onFocus) === null || Y === void 0 || Y.call(e, H));
    }
    function I(H) {
      var q, Y;
      !((q = a.value) === null || q === void 0) && q.contains(H.relatedTarget) || (Y = e.onBlur) === null || Y === void 0 || Y.call(e, H);
    }
    $e(Ia, {
      handleOptionMouseEnter: y,
      handleOptionClick: P,
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
    }), $e(Dd, a), zt(() => {
      const {
        value: H
      } = s;
      H && H.sync();
    });
    const V = z(() => {
      const {
        size: H
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
          actionTextColor: at,
          optionColorPending: Ze,
          optionColorActive: dt,
          loadingColor: ut,
          loadingSize: xe,
          optionColorActivePending: Ce,
          [Z("optionFontSize", H)]: ze,
          [Z("optionHeight", H)]: Me,
          [Z("optionPadding", H)]: Ye
        }
      } = i.value;
      return {
        "--n-height": Y,
        "--n-action-divider-color": we,
        "--n-action-text-color": at,
        "--n-bezier": q,
        "--n-border-radius": ie,
        "--n-color": ae,
        "--n-option-font-size": ze,
        "--n-group-header-text-color": fe,
        "--n-option-check-color": Pe,
        "--n-option-color-pending": Ze,
        "--n-option-color-active": dt,
        "--n-option-color-active-pending": Ce,
        "--n-option-height": Me,
        "--n-option-opacity-disabled": Fe,
        "--n-option-text-color": ue,
        "--n-option-text-color-active": be,
        "--n-option-text-color-disabled": Re,
        "--n-option-text-color-pressed": G,
        "--n-option-padding": Ye,
        "--n-option-padding-left": Lt(Ye, "left"),
        "--n-option-padding-right": Lt(Ye, "right"),
        "--n-loading-color": ut,
        "--n-loading-size": xe
      };
    }), {
      inlineThemeDisabled: te
    } = e, X = te ? Ge("internal-select-menu", z(() => e.size[0]), V, e) : void 0, K = {
      selfRef: a,
      next: M,
      prev: n,
      getPendingTmNode: R
    };
    return Zd(a, e.onResize), Object.assign({
      mergedTheme: i,
      mergedClsPrefix: t,
      rtlEnabled: o,
      virtualListRef: l,
      scrollbarRef: s,
      itemSize: h,
      padding: g,
      flattenedNodes: d,
      empty: m,
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
      doScroll: S,
      handleFocusin: N,
      handleFocusout: I,
      handleKeyUp: D,
      handleKeyDown: T,
      handleMouseDown: U,
      handleVirtualListResize: B,
      handleVirtualListScroll: w,
      cssVars: te ? void 0 : V,
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
    }, He(e.header, (l) => l && f("div", {
      class: `${r}-base-select-menu__header`,
      "data-header": !0,
      key: "header"
    }, l)), this.loading ? f("div", {
      class: `${r}-base-select-menu__loading`
    }, f(Nn, {
      clsPrefix: r,
      strokeWidth: 20
    })) : this.empty ? f("div", {
      class: `${r}-base-select-menu__empty`,
      "data-empty": !0
    }, Xt(e.empty, () => [f(Rr, {
      theme: o.peers.Empty,
      themeOverrides: o.peerOverrides.Empty,
      size: this.size
    })])) : f(dr, {
      ref: "scrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: t ? this.virtualListContainer : void 0,
      content: t ? this.virtualListContent : void 0,
      onScroll: t ? void 0 : this.doScroll
    }, {
      default: () => t ? f(Ka, {
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
        }) => l.isGroup ? f(Vs, {
          key: l.key,
          clsPrefix: r,
          tmNode: l
        }) : l.ignored ? null : f(Ks, {
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
      }, this.flattenedNodes.map((l) => l.isGroup ? f(Vs, {
        key: l.key,
        clsPrefix: r,
        tmNode: l
      }) : f(Ks, {
        clsPrefix: r,
        key: l.key,
        tmNode: l
      })))
    }), He(e.action, (l) => l && [f("div", {
      class: `${r}-base-select-menu__action`,
      "data-action": !0,
      key: "action"
    }, l), f(bx, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
}), a1 = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function l1(e) {
  const {
    boxShadow2: t,
    popoverColor: r,
    textColor2: o,
    borderRadius: i,
    fontSize: a,
    dividerColor: l
  } = e;
  return Object.assign(Object.assign({}, a1), {
    fontSize: a,
    borderRadius: i,
    color: r,
    dividerColor: l,
    textColor: o,
    boxShadow: t
  });
}
const ur = {
  name: "Popover",
  common: Xe,
  self: l1
}, qi = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, xt = "var(--n-arrow-height) * 1.414", s1 = O([F("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [O(">", [F("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), qe("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [qe("scrollable", [qe("show-header-or-footer", "padding: var(--n-padding);")])]), E("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), E("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), _("scrollable, show-header-or-footer", [E("content", `
 padding: var(--n-padding);
 `)])]), F("popover-shared", `
 transform-origin: inherit;
 `, [
  F("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [F("popover-arrow", `
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
]), Zt("top-start", `
 top: calc(${xt} / -2);
 left: calc(${mn("top-start")} - var(--v-offset-left));
 `), Zt("top", `
 top: calc(${xt} / -2);
 transform: translateX(calc(${xt} / -2)) rotate(45deg);
 left: 50%;
 `), Zt("top-end", `
 top: calc(${xt} / -2);
 right: calc(${mn("top-end")} + var(--v-offset-left));
 `), Zt("bottom-start", `
 bottom: calc(${xt} / -2);
 left: calc(${mn("bottom-start")} - var(--v-offset-left));
 `), Zt("bottom", `
 bottom: calc(${xt} / -2);
 transform: translateX(calc(${xt} / -2)) rotate(45deg);
 left: 50%;
 `), Zt("bottom-end", `
 bottom: calc(${xt} / -2);
 right: calc(${mn("bottom-end")} + var(--v-offset-left));
 `), Zt("left-start", `
 left: calc(${xt} / -2);
 top: calc(${mn("left-start")} - var(--v-offset-top));
 `), Zt("left", `
 left: calc(${xt} / -2);
 transform: translateY(calc(${xt} / -2)) rotate(45deg);
 top: 50%;
 `), Zt("left-end", `
 left: calc(${xt} / -2);
 bottom: calc(${mn("left-end")} + var(--v-offset-top));
 `), Zt("right-start", `
 right: calc(${xt} / -2);
 top: calc(${mn("right-start")} - var(--v-offset-top));
 `), Zt("right", `
 right: calc(${xt} / -2);
 transform: translateY(calc(${xt} / -2)) rotate(45deg);
 top: 50%;
 `), Zt("right-end", `
 right: calc(${xt} / -2);
 bottom: calc(${mn("right-end")} + var(--v-offset-top));
 `), ...tx({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, t) => {
  const r = ["right", "left"].includes(t), o = r ? "width" : "height";
  return e.map((i) => {
    const a = i.split("-")[1] === "end", s = `calc((${`var(--v-target-${o}, 0px)`} - ${xt}) / 2)`, d = mn(i);
    return O(`[v-placement="${i}"] >`, [F("popover-shared", [_("center-arrow", [F("popover-arrow", `${t}: calc(max(${s}, ${d}) ${a ? "+" : "-"} var(--v-offset-${r ? "left" : "top"}));`)])])]);
  });
})]);
function mn(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function Zt(e, t) {
  const r = e.split("-")[0], o = ["top", "bottom"].includes(r) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return O(`[v-placement="${e}"] >`, [F("popover-shared", `
 margin-${qi[r]}: var(--n-space);
 `, [_("show-arrow", `
 margin-${qi[r]}: var(--n-space-arrow);
 `), _("overlap", `
 margin: 0;
 `), Xf("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${qi[r]}: auto;
 ${o}
 `, [F("popover-arrow", t)])])]);
}
const Iu = Object.assign(Object.assign({}, ve.props), {
  to: fn.propTo,
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
function Lu({
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
const d1 = ee({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: Iu,
  setup(e, {
    slots: t,
    attrs: r
  }) {
    const {
      namespaceRef: o,
      mergedClsPrefixRef: i,
      inlineThemeDisabled: a
    } = Ae(e), l = ve("Popover", "-popover", s1, ur, e, i), s = L(null), d = ge("NPopover"), u = L(null), c = L(e.show), v = L(!1);
    et(() => {
      const {
        show: y
      } = e;
      y && !v0() && !e.internalDeactivateImmediately && (v.value = !0);
    });
    const p = z(() => {
      const {
        trigger: y,
        onClickoutside: P
      } = e, D = [], {
        positionManuallyRef: {
          value: T
        }
      } = d;
      return T || (y === "click" && !P && D.push([ro, w, void 0, {
        capture: !0
      }]), y === "hover" && D.push([kh, S])), P && D.push([ro, w, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && v.value) && D.push([wr, e.show]), D;
    }), x = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: y,
          cubicBezierEaseIn: P,
          cubicBezierEaseOut: D
        },
        self: {
          space: T,
          spaceArrow: U,
          padding: M,
          fontSize: n,
          textColor: $,
          dividerColor: A,
          color: N,
          boxShadow: I,
          borderRadius: V,
          arrowHeight: te,
          arrowOffset: X,
          arrowOffsetVertical: K
        }
      } = l.value;
      return {
        "--n-box-shadow": I,
        "--n-bezier": y,
        "--n-bezier-ease-in": P,
        "--n-bezier-ease-out": D,
        "--n-font-size": n,
        "--n-text-color": $,
        "--n-color": N,
        "--n-divider-color": A,
        "--n-border-radius": V,
        "--n-arrow-height": te,
        "--n-arrow-offset": X,
        "--n-arrow-offset-vertical": K,
        "--n-padding": M,
        "--n-space": T,
        "--n-space-arrow": U
      };
    }), h = z(() => {
      const y = e.width === "trigger" ? void 0 : gt(e.width), P = [];
      y && P.push({
        width: y
      });
      const {
        maxWidth: D,
        minWidth: T
      } = e;
      return D && P.push({
        maxWidth: gt(D)
      }), T && P.push({
        maxWidth: gt(T)
      }), a || P.push(x.value), P;
    }), g = a ? Ge("popover", void 0, x, e) : void 0;
    d.setBodyInstance({
      syncPosition: b
    }), St(() => {
      d.setBodyInstance(null);
    }), Ne(oe(e, "show"), (y) => {
      e.animated || (y ? c.value = !0 : c.value = !1);
    });
    function b() {
      var y;
      (y = s.value) === null || y === void 0 || y.syncPosition();
    }
    function m(y) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && d.handleMouseEnter(y);
    }
    function C(y) {
      e.trigger === "hover" && e.keepAliveOnHover && d.handleMouseLeave(y);
    }
    function S(y) {
      e.trigger === "hover" && !B().contains(Sr(y)) && d.handleMouseMoveOutside(y);
    }
    function w(y) {
      (e.trigger === "click" && !B().contains(Sr(y)) || e.onClickoutside) && d.handleClickOutside(y);
    }
    function B() {
      return d.getTriggerElement();
    }
    $e(po, u), $e(li, null), $e(si, null);
    function R() {
      if (g == null || g.onRender(), !(e.displayDirective === "show" || e.show || e.animated && v.value))
        return null;
      let P;
      const D = d.internalRenderBodyRef.value, {
        value: T
      } = i;
      if (D)
        P = D(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${T}-popover-shared`, g == null ? void 0 : g.themeClass.value, e.overlap && `${T}-popover-shared--overlap`, e.showArrow && `${T}-popover-shared--show-arrow`, e.arrowPointToCenter && `${T}-popover-shared--center-arrow`],
          u,
          h.value,
          m,
          C
        );
      else {
        const {
          value: U
        } = d.extraClassRef, {
          internalTrapFocus: M
        } = e, n = !xr(t.header) || !xr(t.footer), $ = () => {
          var A, N;
          const I = n ? f(Qe, null, He(t.header, (X) => X ? f("div", {
            class: [`${T}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, X) : null), He(t.default, (X) => X ? f("div", {
            class: [`${T}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t) : null), He(t.footer, (X) => X ? f("div", {
            class: [`${T}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, X) : null)) : e.scrollable ? (A = t.default) === null || A === void 0 ? void 0 : A.call(t) : f("div", {
            class: [`${T}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, t), V = e.scrollable ? f(Eu, {
            contentClass: n ? void 0 : `${T}-popover__content ${(N = e.contentClass) !== null && N !== void 0 ? N : ""}`,
            contentStyle: n ? void 0 : e.contentStyle
          }, {
            default: () => I
          }) : I, te = e.showArrow ? Lu({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: T
          }) : null;
          return [V, te];
        };
        P = f("div", Vt({
          class: [`${T}-popover`, `${T}-popover-shared`, g == null ? void 0 : g.themeClass.value, U.map((A) => `${T}-${A}`), {
            [`${T}-popover--scrollable`]: e.scrollable,
            [`${T}-popover--show-header-or-footer`]: n,
            [`${T}-popover--raw`]: e.raw,
            [`${T}-popover-shared--overlap`]: e.overlap,
            [`${T}-popover-shared--show-arrow`]: e.showArrow,
            [`${T}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: u,
          style: h.value,
          onKeydown: d.handleKeydown,
          onMouseenter: m,
          onMouseleave: C
        }, r), M ? f(Yd, {
          active: e.show,
          autoFocus: !0
        }, {
          default: $
        }) : $());
      }
      return un(P, p.value);
    }
    return {
      displayed: v,
      namespace: o,
      isMounted: d.isMountedRef,
      zIndex: d.zIndexRef,
      followerRef: s,
      adjustedTo: fn(e),
      followerEnabled: c,
      renderContentNode: R
    };
  },
  render() {
    return f(Wa, {
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
      teleportDisabled: this.adjustedTo === fn.tdkey
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
}), u1 = Object.keys(Iu), c1 = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function f1(e, t, r) {
  c1[t].forEach((o) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const i = e.props[o], a = r[o];
    i ? e.props[o] = (...l) => {
      i(...l), a(...l);
    } : e.props[o] = a;
  });
}
const er = {
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
  to: fn.propTo,
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
}, h1 = Object.assign(Object.assign(Object.assign({}, ve.props), er), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), cr = ee({
  name: "Popover",
  inheritAttrs: !1,
  props: h1,
  __popover__: !0,
  setup(e) {
    process.env.NODE_ENV !== "production" && et(() => {
      e.maxWidth !== void 0 && it("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && it("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && it("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && it("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && it("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const t = $r(), r = L(null), o = z(() => e.show), i = L(e.defaultShow), a = Et(o, i), l = Ve(() => e.disabled ? !1 : a.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: A
      } = e;
      return !!(A != null && A());
    }, d = () => s() ? !1 : a.value, u = Ma(e, ["arrow", "showArrow"]), c = z(() => e.overlap ? !1 : u.value);
    let v = null;
    const p = L(null), x = L(null), h = Ve(() => e.x !== void 0 && e.y !== void 0);
    function g(A) {
      const {
        "onUpdate:show": N,
        onUpdateShow: I,
        onShow: V,
        onHide: te
      } = e;
      i.value = A, N && ne(N, A), I && ne(I, A), A && V && ne(V, !0), A && te && ne(te, !1);
    }
    function b() {
      v && v.syncPosition();
    }
    function m() {
      const {
        value: A
      } = p;
      A && (window.clearTimeout(A), p.value = null);
    }
    function C() {
      const {
        value: A
      } = x;
      A && (window.clearTimeout(A), x.value = null);
    }
    function S() {
      const A = s();
      if (e.trigger === "focus" && !A) {
        if (d()) return;
        g(!0);
      }
    }
    function w() {
      const A = s();
      if (e.trigger === "focus" && !A) {
        if (!d()) return;
        g(!1);
      }
    }
    function B() {
      const A = s();
      if (e.trigger === "hover" && !A) {
        if (C(), p.value !== null || d()) return;
        const N = () => {
          g(!0), p.value = null;
        }, {
          delay: I
        } = e;
        I === 0 ? N() : p.value = window.setTimeout(N, I);
      }
    }
    function R() {
      const A = s();
      if (e.trigger === "hover" && !A) {
        if (m(), x.value !== null || !d()) return;
        const N = () => {
          g(!1), x.value = null;
        }, {
          duration: I
        } = e;
        I === 0 ? N() : x.value = window.setTimeout(N, I);
      }
    }
    function y() {
      R();
    }
    function P(A) {
      var N;
      d() && (e.trigger === "click" && (m(), C(), g(!1)), (N = e.onClickoutside) === null || N === void 0 || N.call(e, A));
    }
    function D() {
      if (e.trigger === "click" && !s()) {
        m(), C();
        const A = !d();
        g(A);
      }
    }
    function T(A) {
      e.internalTrapFocus && A.key === "Escape" && (m(), C(), g(!1));
    }
    function U(A) {
      i.value = A;
    }
    function M() {
      var A;
      return (A = r.value) === null || A === void 0 ? void 0 : A.targetRef;
    }
    function n(A) {
      v = A;
    }
    return $e("NPopover", {
      getTriggerElement: M,
      handleKeydown: T,
      handleMouseEnter: B,
      handleMouseLeave: R,
      handleClickOutside: P,
      handleMouseMoveOutside: y,
      setBodyInstance: n,
      positionManuallyRef: h,
      isMountedRef: t,
      zIndexRef: oe(e, "zIndex"),
      extraClassRef: oe(e, "internalExtraClass"),
      internalRenderBodyRef: oe(e, "internalRenderBody")
    }), et(() => {
      a.value && s() && g(!1);
    }), {
      binderInstRef: r,
      positionManually: h,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: i,
      mergedShowArrow: c,
      getMergedShow: d,
      setShow: U,
      handleClick: D,
      handleMouseEnter: B,
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
    if (!t && (r.activator ? o = ia(r, "activator") : o = ia(r, "trigger"), o)) {
      o = xd(o), o = o.type === Cf ? f("span", [o]) : o;
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
        f1(o, l ? "nested" : t ? "manual" : this.trigger, d);
      }
    }
    return f(_a, {
      ref: "binderInstRef",
      syncTarget: !i,
      syncTargetWithParent: this.internalSyncTargetWithParent
    }, {
      default: () => {
        this.mergedShowConsideringDisabledProp;
        const a = this.getMergedShow();
        return [this.internalTrapFocus && a ? un(f("div", {
          style: {
            position: "fixed",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
          }
        }), [[Ha, {
          enabled: a,
          zIndex: this.zIndex
        }]]) : null, t ? null : f(Na, null, {
          default: () => o
        }), f(d1, Cn(this.$props, u1, Object.assign(Object.assign({}, this.$attrs), {
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
}), v1 = {
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
function p1(e) {
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
    tagColor: p,
    closeIconColor: x,
    closeIconColorHover: h,
    closeIconColorPressed: g,
    borderRadiusSmall: b,
    fontSizeMini: m,
    fontSizeTiny: C,
    fontSizeSmall: S,
    fontSizeMedium: w,
    heightMini: B,
    heightTiny: R,
    heightSmall: y,
    heightMedium: P,
    closeColorHover: D,
    closeColorPressed: T,
    buttonColor2Hover: U,
    buttonColor2Pressed: M,
    fontWeightStrong: n
  } = e;
  return Object.assign(Object.assign({}, v1), {
    closeBorderRadius: b,
    heightTiny: B,
    heightSmall: R,
    heightMedium: y,
    heightLarge: P,
    borderRadius: b,
    opacityDisabled: v,
    fontSizeTiny: m,
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
    colorHoverCheckable: U,
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
    closeIconColorHover: h,
    closeIconColorPressed: g,
    closeColorHover: D,
    closeColorPressed: T,
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
const g1 = {
  name: "Tag",
  common: Xe,
  self: p1
}, m1 = {
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
}, b1 = F("tag", `
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
`, [_("strong", `
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
 `), _("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [E("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), E("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), _("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), _("icon, avatar", [_("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), _("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), _("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [qe("disabled", [O("&:hover", "background-color: var(--n-color-hover-checkable);", [qe("checked", "color: var(--n-text-color-hover-checkable);")]), O("&:active", "background-color: var(--n-color-pressed-checkable);", [qe("checked", "color: var(--n-text-color-pressed-checkable);")])]), _("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [qe("disabled", [O("&:hover", "background-color: var(--n-color-checked-hover);"), O("&:active", "background-color: var(--n-color-checked-pressed);")])])])]), x1 = Object.assign(Object.assign(Object.assign({}, ve.props), m1), {
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
}), C1 = "n-tag", Gi = ee({
  name: "Tag",
  props: x1,
  setup(e) {
    process.env.NODE_ENV !== "production" && et(() => {
      e.onCheckedChange !== void 0 && it("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
    });
    const t = L(null), {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = ve("Tag", "-tag", b1, g1, e, o);
    $e(C1, {
      roundRef: oe(e, "round")
    });
    function s() {
      if (!e.disabled && e.checkable) {
        const {
          checked: x,
          onCheckedChange: h,
          onUpdateChecked: g,
          "onUpdate:checked": b
        } = e;
        g && g(!x), b && b(!x), h && h(!x);
      }
    }
    function d(x) {
      if (e.triggerClickOnClose || x.stopPropagation(), !e.disabled) {
        const {
          onClose: h
        } = e;
        h && ne(h, x);
      }
    }
    const u = {
      setTextContent(x) {
        const {
          value: h
        } = t;
        h && (h.textContent = x);
      }
    }, c = Bt("Tag", a, o), v = z(() => {
      const {
        type: x,
        size: h,
        color: {
          color: g,
          textColor: b
        } = {}
      } = e, {
        common: {
          cubicBezierEaseInOut: m
        },
        self: {
          padding: C,
          closeMargin: S,
          borderRadius: w,
          opacityDisabled: B,
          textColorCheckable: R,
          textColorHoverCheckable: y,
          textColorPressedCheckable: P,
          textColorChecked: D,
          colorCheckable: T,
          colorHoverCheckable: U,
          colorPressedCheckable: M,
          colorChecked: n,
          colorCheckedHover: $,
          colorCheckedPressed: A,
          closeBorderRadius: N,
          fontWeightStrong: I,
          [Z("colorBordered", x)]: V,
          [Z("closeSize", h)]: te,
          [Z("closeIconSize", h)]: X,
          [Z("fontSize", h)]: K,
          [Z("height", h)]: H,
          [Z("color", x)]: q,
          [Z("textColor", x)]: Y,
          [Z("border", x)]: ie,
          [Z("closeIconColor", x)]: ae,
          [Z("closeIconColorHover", x)]: fe,
          [Z("closeIconColorPressed", x)]: we,
          [Z("closeColorHover", x)]: G,
          [Z("closeColorPressed", x)]: ue
        }
      } = l.value, Re = Lt(S);
      return {
        "--n-font-weight-strong": I,
        "--n-avatar-size-override": `calc(${H} - 8px)`,
        "--n-bezier": m,
        "--n-border-radius": w,
        "--n-border": ie,
        "--n-close-icon-size": X,
        "--n-close-color-pressed": ue,
        "--n-close-color-hover": G,
        "--n-close-border-radius": N,
        "--n-close-icon-color": ae,
        "--n-close-icon-color-hover": fe,
        "--n-close-icon-color-pressed": we,
        "--n-close-icon-color-disabled": ae,
        "--n-close-margin-top": Re.top,
        "--n-close-margin-right": Re.right,
        "--n-close-margin-bottom": Re.bottom,
        "--n-close-margin-left": Re.left,
        "--n-close-size": te,
        "--n-color": g || (r.value ? V : q),
        "--n-color-checkable": T,
        "--n-color-checked": n,
        "--n-color-checked-hover": $,
        "--n-color-checked-pressed": A,
        "--n-color-hover-checkable": U,
        "--n-color-pressed-checkable": M,
        "--n-font-size": K,
        "--n-height": H,
        "--n-opacity-disabled": B,
        "--n-padding": C,
        "--n-text-color": b || Y,
        "--n-text-color-checkable": R,
        "--n-text-color-checked": D,
        "--n-text-color-hover-checkable": y,
        "--n-text-color-pressed-checkable": P
      };
    }), p = i ? Ge("tag", z(() => {
      let x = "";
      const {
        type: h,
        size: g,
        color: {
          color: b,
          textColor: m
        } = {}
      } = e;
      return x += h[0], x += g[0], b && (x += `a${qo(b)}`), m && (x += `b${qo(m)}`), r.value && (x += "c"), x;
    }), v, e) : void 0;
    return Object.assign(Object.assign({}, u), {
      rtlEnabled: c,
      mergedClsPrefix: o,
      contentRef: t,
      mergedBordered: r,
      handleClick: s,
      handleCloseClick: d,
      cssVars: i ? void 0 : v,
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
    const u = He(d.avatar, (v) => v && f("div", {
      class: `${r}-tag__avatar`
    }, v)), c = He(d.icon, (v) => v && f("div", {
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
    }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)), !this.checkable && i ? f(mo, {
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
      return f(Nn, {
        clsPrefix: r,
        class: `${r}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? f(ma, {
          clsPrefix: r,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => f(vt, {
            clsPrefix: r,
            class: `${r}-base-suffix__arrow`
          }, {
            default: () => Xt(t.default, () => [f(Au, null)])
          })
        }) : null
      });
    };
  }
}), y1 = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
function w1(e) {
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
    borderColor: p,
    iconColor: x,
    iconColorDisabled: h,
    clearColor: g,
    clearColorHover: b,
    clearColorPressed: m,
    placeholderColor: C,
    placeholderColorDisabled: S,
    fontSizeTiny: w,
    fontSizeSmall: B,
    fontSizeMedium: R,
    fontSizeLarge: y,
    heightTiny: P,
    heightSmall: D,
    heightMedium: T,
    heightLarge: U,
    fontWeight: M
  } = e;
  return Object.assign(Object.assign({}, y1), {
    fontSizeTiny: w,
    fontSizeSmall: B,
    fontSizeMedium: R,
    fontSizeLarge: y,
    heightTiny: P,
    heightSmall: D,
    heightMedium: T,
    heightLarge: U,
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
    clearColor: g,
    clearColorHover: b,
    clearColorPressed: m
  });
}
const Nu = {
  name: "InternalSelection",
  common: Xe,
  peers: {
    Popover: ur
  },
  self: w1
}, S1 = O([F("base-selection", `
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
 `, [F("base-loading", `
 color: var(--n-loading-color);
 `), F("base-selection-tags", "min-height: var(--n-height);"), E("border, state-border", `
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
 `), F("base-suffix", `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [E("arrow", `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), F("base-selection-overlay", `
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
 `)]), F("base-selection-placeholder", `
 color: var(--n-placeholder-color);
 `, [E("inner", `
 max-width: 100%;
 overflow: hidden;
 `)]), F("base-selection-tags", `
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
 `), F("base-selection-label", `
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
 `, [F("base-selection-input", `
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
 `)]), qe("disabled", [O("&:hover", [E("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), _("focus", [E("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), _("active", [E("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), F("base-selection-label", "background-color: var(--n-color-active);"), F("base-selection-tags", "background-color: var(--n-color-active);")])]), _("disabled", "cursor: not-allowed;", [E("arrow", `
 color: var(--n-arrow-color-disabled);
 `), F("base-selection-label", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [F("base-selection-input", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), E("render-label", `
 color: var(--n-text-color-disabled);
 `)]), F("base-selection-tags", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), F("base-selection-placeholder", `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), F("base-selection-input-tag", `
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
 `)]), ["warning", "error"].map((e) => _(`${e}-status`, [E("state-border", `border: var(--n-border-${e});`), qe("disabled", [O("&:hover", [E("state-border", `
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]), _("active", [E("state-border", `
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `), F("base-selection-label", `background-color: var(--n-color-active-${e});`), F("base-selection-tags", `background-color: var(--n-color-active-${e});`)]), _("focus", [E("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]), F("base-selection-popover", `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), F("base-selection-tag-wrapper", `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [O("&:last-child", "padding-right: 0;"), F("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [E("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]), B1 = ee({
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
    } = Ae(e), o = Bt("InternalSelection", r, t), i = L(null), a = L(null), l = L(null), s = L(null), d = L(null), u = L(null), c = L(null), v = L(null), p = L(null), x = L(null), h = L(!1), g = L(!1), b = L(!1), m = ve("InternalSelection", "-internal-selection", S1, Nu, e, oe(e, "clsPrefix")), C = z(() => e.clearable && !e.disabled && (b.value || e.active)), S = z(() => e.selectedOption ? e.renderTag ? e.renderTag({
      option: e.selectedOption,
      handleClose: () => {
      }
    }) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : ft(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder), w = z(() => {
      const re = e.selectedOption;
      if (re)
        return re[e.labelField];
    }), B = z(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length) : e.selectedOption !== null);
    function R() {
      var re;
      const {
        value: he
      } = i;
      if (he) {
        const {
          value: Ee
        } = a;
        Ee && (Ee.style.width = `${he.offsetWidth}px`, e.maxTagCount !== "responsive" && ((re = p.value) === null || re === void 0 || re.sync({
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
    function P() {
      const {
        value: re
      } = x;
      re && (re.style.display = "inline-block");
    }
    Ne(oe(e, "active"), (re) => {
      re || y();
    }), Ne(oe(e, "pattern"), () => {
      e.multiple && bt(R);
    });
    function D(re) {
      const {
        onFocus: he
      } = e;
      he && he(re);
    }
    function T(re) {
      const {
        onBlur: he
      } = e;
      he && he(re);
    }
    function U(re) {
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
    function $(re) {
      var he;
      (!re.relatedTarget || !(!((he = l.value) === null || he === void 0) && he.contains(re.relatedTarget))) && D(re);
    }
    function A(re) {
      var he;
      !((he = l.value) === null || he === void 0) && he.contains(re.relatedTarget) || T(re);
    }
    function N(re) {
      M(re);
    }
    function I() {
      b.value = !0;
    }
    function V() {
      b.value = !1;
    }
    function te(re) {
      !e.active || !e.filterable || re.target !== a.value && re.preventDefault();
    }
    function X(re) {
      U(re);
    }
    const K = L(!1);
    function H(re) {
      if (re.key === "Backspace" && !K.value && !e.pattern.length) {
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
        const Ee = re.target.value;
        he.textContent = Ee, R();
      }
      e.ignoreComposition && K.value ? q = re : n(re);
    }
    function ie() {
      K.value = !0;
    }
    function ae() {
      K.value = !1, e.ignoreComposition && n(q), q = null;
    }
    function fe(re) {
      var he;
      g.value = !0, (he = e.onPatternFocus) === null || he === void 0 || he.call(e, re);
    }
    function we(re) {
      var he;
      g.value = !1, (he = e.onPatternBlur) === null || he === void 0 || he.call(e, re);
    }
    function G() {
      var re, he;
      if (e.filterable)
        g.value = !1, (re = u.value) === null || re === void 0 || re.blur(), (he = a.value) === null || he === void 0 || he.blur();
      else if (e.multiple) {
        const {
          value: Ee
        } = s;
        Ee == null || Ee.blur();
      } else {
        const {
          value: Ee
        } = d;
        Ee == null || Ee.blur();
      }
    }
    function ue() {
      var re, he, Ee;
      e.filterable ? (g.value = !1, (re = u.value) === null || re === void 0 || re.focus()) : e.multiple ? (he = s.value) === null || he === void 0 || he.focus() : (Ee = d.value) === null || Ee === void 0 || Ee.focus();
    }
    function Re() {
      const {
        value: re
      } = a;
      re && (P(), re.focus());
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
      } = v;
      return re;
    }
    function at() {
      return a.value;
    }
    let Ze = null;
    function dt() {
      Ze !== null && window.clearTimeout(Ze);
    }
    function ut() {
      e.active || (dt(), Ze = window.setTimeout(() => {
        B.value && (h.value = !0);
      }, 100));
    }
    function xe() {
      dt();
    }
    function Ce(re) {
      re || (dt(), h.value = !1);
    }
    Ne(B, (re) => {
      re || (h.value = !1);
    }), zt(() => {
      et(() => {
        const re = u.value;
        re && (e.disabled ? re.removeAttribute("tabindex") : re.tabIndex = g.value ? -1 : 0);
      });
    }), Zd(l, e.onResize);
    const {
      inlineThemeDisabled: ze
    } = e, Me = z(() => {
      const {
        size: re
      } = e, {
        common: {
          cubicBezierEaseInOut: he
        },
        self: {
          fontWeight: Ee,
          borderRadius: lt,
          color: kt,
          placeholderColor: Rt,
          textColor: ht,
          paddingSingle: tt,
          paddingMultiple: mt,
          caretColor: Je,
          colorDisabled: ce,
          textColorDisabled: Be,
          placeholderColorDisabled: k,
          colorActive: W,
          boxShadowFocus: J,
          boxShadowActive: le,
          boxShadowHover: se,
          border: pe,
          borderFocus: me,
          borderHover: Se,
          borderActive: Ie,
          arrowColor: nt,
          arrowColorDisabled: je,
          loadingColor: $t,
          // form warning
          colorActiveWarning: Tt,
          boxShadowFocusWarning: Ot,
          boxShadowActiveWarning: Nt,
          boxShadowHoverWarning: Ht,
          borderWarning: Yt,
          borderFocusWarning: jt,
          borderHoverWarning: j,
          borderActiveWarning: Q,
          // form error
          colorActiveError: ye,
          boxShadowFocusError: Te,
          boxShadowActiveError: Ke,
          boxShadowHoverError: Le,
          borderError: ot,
          borderFocusError: ct,
          borderHoverError: Ut,
          borderActiveError: vn,
          // clear
          clearColor: pn,
          clearColorHover: Hn,
          clearColorPressed: Tr,
          clearSize: Or,
          // arrow
          arrowSize: Mr,
          [Z("height", re)]: Ir,
          [Z("fontSize", re)]: Lr
        }
      } = m.value, Sn = Lt(tt), Bn = Lt(mt);
      return {
        "--n-bezier": he,
        "--n-border": pe,
        "--n-border-active": Ie,
        "--n-border-focus": me,
        "--n-border-hover": Se,
        "--n-border-radius": lt,
        "--n-box-shadow-active": le,
        "--n-box-shadow-focus": J,
        "--n-box-shadow-hover": se,
        "--n-caret-color": Je,
        "--n-color": kt,
        "--n-color-active": W,
        "--n-color-disabled": ce,
        "--n-font-size": Lr,
        "--n-height": Ir,
        "--n-padding-single-top": Sn.top,
        "--n-padding-multiple-top": Bn.top,
        "--n-padding-single-right": Sn.right,
        "--n-padding-multiple-right": Bn.right,
        "--n-padding-single-left": Sn.left,
        "--n-padding-multiple-left": Bn.left,
        "--n-padding-single-bottom": Sn.bottom,
        "--n-padding-multiple-bottom": Bn.bottom,
        "--n-placeholder-color": Rt,
        "--n-placeholder-color-disabled": k,
        "--n-text-color": ht,
        "--n-text-color-disabled": Be,
        "--n-arrow-color": nt,
        "--n-arrow-color-disabled": je,
        "--n-loading-color": $t,
        // form warning
        "--n-color-active-warning": Tt,
        "--n-box-shadow-focus-warning": Ot,
        "--n-box-shadow-active-warning": Nt,
        "--n-box-shadow-hover-warning": Ht,
        "--n-border-warning": Yt,
        "--n-border-focus-warning": jt,
        "--n-border-hover-warning": j,
        "--n-border-active-warning": Q,
        // form error
        "--n-color-active-error": ye,
        "--n-box-shadow-focus-error": Te,
        "--n-box-shadow-active-error": Ke,
        "--n-box-shadow-hover-error": Le,
        "--n-border-error": ot,
        "--n-border-focus-error": ct,
        "--n-border-hover-error": Ut,
        "--n-border-active-error": vn,
        // clear
        "--n-clear-size": Or,
        "--n-clear-color": pn,
        "--n-clear-color-hover": Hn,
        "--n-clear-color-pressed": Tr,
        // arrow-size
        "--n-arrow-size": Mr,
        // font-weight
        "--n-font-weight": Ee
      };
    }), Ye = ze ? Ge("internal-selection", z(() => e.size[0]), Me, e) : void 0;
    return {
      mergedTheme: m,
      mergedClearable: C,
      mergedClsPrefix: t,
      rtlEnabled: o,
      patternInputFocused: g,
      filterablePlaceholder: S,
      label: w,
      selected: B,
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
      overflowRef: p,
      inputTagElRef: x,
      handleMouseDown: te,
      handleFocusin: $,
      handleClear: N,
      handleMouseEnter: I,
      handleMouseLeave: V,
      handleDeleteOption: X,
      handlePatternKeyDown: H,
      handlePatternInputInput: Y,
      handlePatternInputBlur: we,
      handlePatternInputFocus: fe,
      handleMouseEnterCounter: ut,
      handleMouseLeaveCounter: xe,
      handleFocusout: A,
      handleCompositionEnd: ae,
      handleCompositionStart: ie,
      onPopoverUpdateShow: Ce,
      focus: ue,
      focusInput: Re,
      blur: G,
      blurInput: be,
      updateCounter: Fe,
      getCounter: Pe,
      getTail: at,
      renderLabel: e.renderLabel,
      cssVars: ze ? void 0 : Me,
      themeClass: Ye == null ? void 0 : Ye.themeClass,
      onRender: Ye == null ? void 0 : Ye.onRender
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
    const p = a === "responsive", x = typeof a == "number", h = p || x, g = f(la, null, {
      default: () => f(_u, {
        clsPrefix: s,
        loading: this.loading,
        showArrow: this.showArrow,
        showClear: this.mergedClearable && this.selected,
        onClear: this.handleClear
      }, {
        default: () => {
          var m, C;
          return (C = (m = this.$slots).arrow) === null || C === void 0 ? void 0 : C.call(m);
        }
      })
    });
    let b;
    if (t) {
      const {
        labelField: m
      } = this, C = (n) => f("div", {
        class: `${s}-base-selection-tag-wrapper`,
        key: n.value
      }, c ? c({
        option: n,
        handleClose: () => {
          this.handleDeleteOption(n);
        }
      }) : f(Gi, {
        size: r,
        closable: !n.disabled,
        disabled: o,
        onClose: () => {
          this.handleDeleteOption(n);
        },
        internalCloseIsButtonTag: !1,
        internalCloseFocusable: !1
      }, {
        default: () => v ? v(n, !0) : ft(n[m], n, !0)
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
      }, this.pattern)) : null, B = p ? () => f("div", {
        class: `${s}-base-selection-tag-wrapper`,
        ref: "counterWrapperRef"
      }, f(Gi, {
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
        }, f(Gi, {
          size: r,
          ref: "counterRef",
          onMouseenter: this.handleMouseEnterCounter,
          disabled: o
        }, {
          default: () => `+${n}`
        })));
      }
      const y = p ? i ? f(rs, {
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
        counter: B,
        tail: () => w
      }) : f(rs, {
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
        counter: B
      }) : x && R ? S().concat(R) : S(), P = h ? () => f("div", {
        class: `${s}-base-selection-popover`
      }, p ? S() : this.selectedOptions.map(C)) : void 0, D = h ? Object.assign({
        show: this.showTagsPanel,
        trigger: "hover",
        overlap: !0,
        placement: "top",
        width: "trigger",
        onUpdateShow: this.onPopoverUpdateShow,
        theme: this.mergedTheme.peers.Popover,
        themeOverrides: this.mergedTheme.peerOverrides.Popover
      }, d) : null, U = (this.selected ? !1 : this.active ? !this.pattern && !this.isComposing : !0) ? f("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`
      }, f("div", {
        class: `${s}-base-selection-placeholder__inner`
      }, this.placeholder)) : null, M = i ? f("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-tags`
      }, y, p ? null : w, g) : f("div", {
        ref: "multipleElRef",
        class: `${s}-base-selection-tags`,
        tabindex: o ? void 0 : 0
      }, y, g);
      b = f(Qe, null, h ? f(cr, Object.assign({}, D, {
        scrollable: !0,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => M,
        default: P
      }) : M, U);
    } else if (i) {
      const m = this.pattern || this.isComposing, C = this.active ? !m : !this.selected, S = this.active ? !1 : this.selected;
      b = f("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-label`,
        title: this.patternInputFocused ? void 0 : as(this.label)
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
      }) : v ? v(this.selectedOption, !0) : ft(this.label, this.selectedOption, !0))) : null, C ? f("div", {
        class: `${s}-base-selection-placeholder ${s}-base-selection-overlay`,
        key: "placeholder"
      }, f("div", {
        class: `${s}-base-selection-overlay__wrapper`
      }, this.filterablePlaceholder)) : null, g);
    } else
      b = f("div", {
        ref: "singleElRef",
        class: `${s}-base-selection-label`,
        tabindex: this.disabled ? void 0 : 0
      }, this.label !== void 0 ? f("div", {
        class: `${s}-base-selection-input`,
        title: as(this.label),
        key: "input"
      }, f("div", {
        class: `${s}-base-selection-input__content`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : v ? v(this.selectedOption, !0) : ft(this.label, this.selectedOption, !0))) : f("div", {
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
    }, b, l ? f("div", {
      class: `${s}-base-selection__border`
    }) : null, l ? f("div", {
      class: `${s}-base-selection__state-border`
    }) : null);
  }
}), {
  cubicBezierEaseInOut: Rn
} = Ln;
function k1({
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
 opacity ${e} ${Rn},
 max-width ${e} ${Rn} ${t},
 margin-left ${e} ${Rn} ${t},
 margin-right ${e} ${Rn} ${t};
 `), O("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${Rn} ${t},
 max-width ${e} ${Rn},
 margin-left ${e} ${Rn},
 margin-right ${e} ${Rn};
 `)];
}
const R1 = F("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), F1 = ee({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    _n("-base-wave", R1, oe(e, "clsPrefix"));
    const t = L(null), r = L(!1);
    let o = null;
    return St(() => {
      o !== null && window.clearTimeout(o);
    }), {
      active: r,
      selfRef: t,
      play() {
        o !== null && (window.clearTimeout(o), r.value = !1, o = null), bt(() => {
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
  cubicBezierEaseInOut: an,
  cubicBezierEaseOut: P1,
  cubicBezierEaseIn: z1
} = Ln;
function Hu({
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
 max-height ${t} ${an} ${o},
 opacity ${t} ${P1} ${o},
 margin-top ${t} ${an} ${o},
 margin-bottom ${t} ${an} ${o},
 padding-top ${t} ${an} ${o},
 padding-bottom ${t} ${an} ${o}
 ${r ? `,${r}` : ""}
 `), O(`&.fade-in-height-expand-transition-${d}-active`, `
 overflow: ${e};
 transition:
 max-height ${t} ${an},
 opacity ${t} ${z1},
 margin-top ${t} ${an},
 margin-bottom ${t} ${an},
 padding-top ${t} ${an},
 padding-bottom ${t} ${an}
 ${r ? `,${r}` : ""}
 `)];
}
const $1 = Ar && "chrome" in window;
Ar && navigator.userAgent.includes("Firefox");
const ju = Ar && navigator.userAgent.includes("Safari") && !$1, A1 = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function D1(e) {
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
    errorColorHover: p,
    borderRadius: x,
    lineHeight: h,
    fontSizeTiny: g,
    fontSizeSmall: b,
    fontSizeMedium: m,
    fontSizeLarge: C,
    heightTiny: S,
    heightSmall: w,
    heightMedium: B,
    heightLarge: R,
    actionColor: y,
    clearColor: P,
    clearColorHover: D,
    clearColorPressed: T,
    placeholderColor: U,
    placeholderColorDisabled: M,
    iconColor: n,
    iconColorDisabled: $,
    iconColorHover: A,
    iconColorPressed: N,
    fontWeight: I
  } = e;
  return Object.assign(Object.assign({}, A1), {
    fontWeight: I,
    countTextColorDisabled: o,
    countTextColor: r,
    heightTiny: S,
    heightSmall: w,
    heightMedium: B,
    heightLarge: R,
    fontSizeTiny: g,
    fontSizeSmall: b,
    fontSizeMedium: m,
    fontSizeLarge: C,
    lineHeight: h,
    lineHeightTextarea: h,
    borderRadius: x,
    iconSize: "16px",
    groupLabelColor: y,
    groupLabelTextColor: t,
    textColor: t,
    textColorDisabled: o,
    textDecorationColor: t,
    caretColor: i,
    placeholderColor: U,
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
    loadingColorError: v,
    borderError: `1px solid ${v}`,
    borderHoverError: `1px solid ${p}`,
    colorFocusError: l,
    borderFocusError: `1px solid ${p}`,
    boxShadowFocusError: `0 0 0 2px ${De(v, {
      alpha: 0.2
    })}`,
    caretColorError: v,
    clearColor: P,
    clearColorHover: D,
    clearColorPressed: T,
    iconColor: n,
    iconColorDisabled: $,
    iconColorHover: A,
    iconColorPressed: N,
    suffixTextColor: t
  });
}
const cl = {
  name: "Input",
  common: Xe,
  self: D1
}, Wu = "n-input", E1 = F("input", `
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
 `, [O("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), O("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), O("&:-webkit-autofill ~", [E("placeholder", "display: none;")])]),
  _("round", [qe("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  E("placeholder", `
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
  _("textarea", [E("placeholder", "overflow: visible;")]),
  qe("autosize", "width: 100%;"),
  _("autosize", [E("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  F("input-wrapper", `
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
 `, [O("&[type=password]::-ms-reveal", "display: none;"), O("+", [E("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  qe("textarea", [E("placeholder", "white-space: nowrap;")]),
  E("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  _("textarea", "width: 100%;", [F("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), _("resizable", [F("input-wrapper", `
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
  _("pair", [E("input-el, placeholder", "text-align: center;"), E("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [F("icon", `
 color: var(--n-icon-color);
 `), F("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  _("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [E("border", "border: var(--n-border-disabled);"), E("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), E("placeholder", "color: var(--n-placeholder-color-disabled);"), E("separator", "color: var(--n-text-color-disabled);", [F("icon", `
 color: var(--n-icon-color-disabled);
 `), F("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), F("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), E("suffix, prefix", "color: var(--n-text-color-disabled);", [F("icon", `
 color: var(--n-icon-color-disabled);
 `), F("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  qe("disabled", [E("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [O("&:hover", `
 color: var(--n-icon-color-hover);
 `), O("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), O("&:hover", [E("state-border", "border: var(--n-border-hover);")]), _("focus", "background-color: var(--n-color-focus);", [E("state-border", `
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
 `, [F("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), F("base-clear", `
 font-size: var(--n-icon-size);
 `, [E("placeholder", [F("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), O(">", [F("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), F("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  F("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((e) => _(`${e}-status`, [qe("disabled", [F("base-loading", `
 color: var(--n-loading-color-${e})
 `), E("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), E("state-border", `
 border: var(--n-border-${e});
 `), O("&:hover", [E("state-border", `
 border: var(--n-border-hover-${e});
 `)]), O("&:focus", `
 background-color: var(--n-color-focus-${e});
 `, [E("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]), _("focus", `
 background-color: var(--n-color-focus-${e});
 `, [E("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))
]), T1 = F("input", [_("disabled", [E("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
function O1(e) {
  let t = 0;
  for (const r of e)
    t++;
  return t;
}
function Eo(e) {
  return e === "" || e == null;
}
function M1(e) {
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
    let p = d.length;
    if (d.endsWith(v))
      p = d.length - v.length;
    else if (d.startsWith(c))
      p = c.length;
    else {
      const x = c[u - 1], h = d.indexOf(x, u - 1);
      h !== -1 && (p = h + 1);
    }
    (a = s.setSelectionRange) === null || a === void 0 || a.call(s, p, p);
  }
  function i() {
    t.value = null;
  }
  return Ne(e, i), {
    recordCursor: r,
    restoreCursor: o
  };
}
const Gs = ee({
  name: "InputWordCount",
  setup(e, {
    slots: t
  }) {
    const {
      mergedValueRef: r,
      maxlengthRef: o,
      mergedClsPrefixRef: i,
      countGraphemesRef: a
    } = ge(Wu), l = z(() => {
      const {
        value: s
      } = r;
      return s === null || Array.isArray(s) ? 0 : (a.value || O1)(s);
    });
    return () => {
      const {
        value: s
      } = o, {
        value: d
      } = r;
      return f("span", {
        class: `${i.value}-input-word-count`
      }, aa(t.default, {
        value: d === null || Array.isArray(d) ? "" : d
      }, () => [s === void 0 ? l.value : `${l.value} / ${s}`]));
    };
  }
}), I1 = Object.assign(Object.assign({}, ve.props), {
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
}), xa = ee({
  name: "Input",
  props: I1,
  setup(e) {
    process.env.NODE_ENV !== "production" && et(() => {
      e.showPasswordToggle && it("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: t,
      mergedBorderedRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = ve("Input", "-input", E1, cl, e, t);
    ju && _n("-input-safari", T1, t);
    const l = L(null), s = L(null), d = L(null), u = L(null), c = L(null), v = L(null), p = L(null), x = M1(p), h = L(null), {
      localeRef: g
    } = Qn("Input"), b = L(e.defaultValue), m = oe(e, "value"), C = Et(m, b), S = Mn(e), {
      mergedSizeRef: w,
      mergedDisabledRef: B,
      mergedStatusRef: R
    } = S, y = L(!1), P = L(!1), D = L(!1), T = L(!1);
    let U = null;
    const M = z(() => {
      const {
        placeholder: j,
        pair: Q
      } = e;
      return Q ? Array.isArray(j) ? j : j === void 0 ? ["", ""] : [j, j] : j === void 0 ? [g.value.placeholder] : [j];
    }), n = z(() => {
      const {
        value: j
      } = D, {
        value: Q
      } = C, {
        value: ye
      } = M;
      return !j && (Eo(Q) || Array.isArray(Q) && Eo(Q[0])) && ye[0];
    }), $ = z(() => {
      const {
        value: j
      } = D, {
        value: Q
      } = C, {
        value: ye
      } = M;
      return !j && ye[1] && (Eo(Q) || Array.isArray(Q) && Eo(Q[1]));
    }), A = Ve(() => e.internalForceFocus || y.value), N = Ve(() => {
      if (B.value || e.readonly || !e.clearable || !A.value && !P.value)
        return !1;
      const {
        value: j
      } = C, {
        value: Q
      } = A;
      return e.pair ? !!(Array.isArray(j) && (j[0] || j[1])) && (P.value || Q) : !!j && (P.value || Q);
    }), I = z(() => {
      const {
        showPasswordOn: j
      } = e;
      if (j)
        return j;
      if (e.showPasswordToggle) return "click";
    }), V = L(!1), te = z(() => {
      const {
        textDecoration: j
      } = e;
      return j ? Array.isArray(j) ? j.map((Q) => ({
        textDecoration: Q
      })) : [{
        textDecoration: j
      }] : ["", ""];
    }), X = L(void 0), K = () => {
      var j, Q;
      if (e.type === "textarea") {
        const {
          autosize: ye
        } = e;
        if (ye && (X.value = (Q = (j = h.value) === null || j === void 0 ? void 0 : j.$el) === null || Q === void 0 ? void 0 : Q.offsetWidth), !s.value || typeof ye == "boolean") return;
        const {
          paddingTop: Te,
          paddingBottom: Ke,
          lineHeight: Le
        } = window.getComputedStyle(s.value), ot = Number(Te.slice(0, -2)), ct = Number(Ke.slice(0, -2)), Ut = Number(Le.slice(0, -2)), {
          value: vn
        } = d;
        if (!vn) return;
        if (ye.minRows) {
          const pn = Math.max(ye.minRows, 1), Hn = `${ot + ct + Ut * pn}px`;
          vn.style.minHeight = Hn;
        }
        if (ye.maxRows) {
          const pn = `${ot + ct + Ut * ye.maxRows}px`;
          vn.style.maxHeight = pn;
        }
      }
    }, H = z(() => {
      const {
        maxlength: j
      } = e;
      return j === void 0 ? void 0 : Number(j);
    });
    zt(() => {
      const {
        value: j
      } = C;
      Array.isArray(j) || Ie(j);
    });
    const q = co().proxy;
    function Y(j, Q) {
      const {
        onUpdateValue: ye,
        "onUpdate:value": Te,
        onInput: Ke
      } = e, {
        nTriggerFormInput: Le
      } = S;
      ye && ne(ye, j, Q), Te && ne(Te, j, Q), Ke && ne(Ke, j, Q), b.value = j, Le();
    }
    function ie(j, Q) {
      const {
        onChange: ye
      } = e, {
        nTriggerFormChange: Te
      } = S;
      ye && ne(ye, j, Q), b.value = j, Te();
    }
    function ae(j) {
      const {
        onBlur: Q
      } = e, {
        nTriggerFormBlur: ye
      } = S;
      Q && ne(Q, j), ye();
    }
    function fe(j) {
      const {
        onFocus: Q
      } = e, {
        nTriggerFormFocus: ye
      } = S;
      Q && ne(Q, j), ye();
    }
    function we(j) {
      const {
        onClear: Q
      } = e;
      Q && ne(Q, j);
    }
    function G(j) {
      const {
        onInputBlur: Q
      } = e;
      Q && ne(Q, j);
    }
    function ue(j) {
      const {
        onInputFocus: Q
      } = e;
      Q && ne(Q, j);
    }
    function Re() {
      const {
        onDeactivate: j
      } = e;
      j && ne(j);
    }
    function be() {
      const {
        onActivate: j
      } = e;
      j && ne(j);
    }
    function Fe(j) {
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
    function at(j) {
      const {
        onWrapperBlur: Q
      } = e;
      Q && ne(Q, j);
    }
    function Ze() {
      D.value = !0;
    }
    function dt(j) {
      D.value = !1, j.target === v.value ? ut(j, 1) : ut(j, 0);
    }
    function ut(j, Q = 0, ye = "input") {
      const Te = j.target.value;
      if (Ie(Te), j instanceof InputEvent && !j.isComposing && (D.value = !1), e.type === "textarea") {
        const {
          value: Le
        } = h;
        Le && Le.syncUnifiedContainer();
      }
      if (U = Te, D.value) return;
      x.recordCursor();
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
            value: Le
          } = C;
          Array.isArray(Le) ? Le = [Le[0], Le[1]] : Le = ["", ""], Le[Q] = Te, ye === "input" ? Y(Le, {
            source: Q
          }) : ie(Le, {
            source: Q
          });
        }
      q.$forceUpdate(), Ke || bt(x.restoreCursor);
    }
    function xe(j) {
      const {
        countGraphemes: Q,
        maxlength: ye,
        minlength: Te
      } = e;
      if (Q) {
        let Le;
        if (ye !== void 0 && (Le === void 0 && (Le = Q(j)), Le > Number(ye)) || Te !== void 0 && (Le === void 0 && (Le = Q(j)), Le < Number(ye)))
          return !1;
      }
      const {
        allowInput: Ke
      } = e;
      return typeof Ke == "function" ? Ke(j) : !0;
    }
    function Ce(j) {
      G(j), j.relatedTarget === l.value && Re(), j.relatedTarget !== null && (j.relatedTarget === c.value || j.relatedTarget === v.value || j.relatedTarget === s.value) || (T.value = !1), re(j, "blur"), p.value = null;
    }
    function ze(j, Q) {
      ue(j), y.value = !0, T.value = !0, be(), re(j, "focus"), Q === 0 ? p.value = c.value : Q === 1 ? p.value = v.value : Q === 2 && (p.value = s.value);
    }
    function Me(j) {
      e.passivelyActivated && (at(j), re(j, "blur"));
    }
    function Ye(j) {
      e.passivelyActivated && (y.value = !0, Pe(j), re(j, "focus"));
    }
    function re(j, Q) {
      j.relatedTarget !== null && (j.relatedTarget === c.value || j.relatedTarget === v.value || j.relatedTarget === s.value || j.relatedTarget === l.value) || (Q === "focus" ? (fe(j), y.value = !0) : Q === "blur" && (ae(j), y.value = !1));
    }
    function he(j, Q) {
      ut(j, Q, "change");
    }
    function Ee(j) {
      Fe(j);
    }
    function lt(j) {
      we(j), kt();
    }
    function kt() {
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
    function Rt(j) {
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
              top: Le,
              width: ot,
              height: ct
            } = Te.getBoundingClientRect(), Ut = 14;
            if (Ke + ot - Ut < j.clientX && j.clientX < Ke + ot && Le + ct - Ut < j.clientY && j.clientY < Le + ct)
              return;
          }
        }
        j.preventDefault(), y.value || J();
      }
    }
    function ht() {
      var j;
      P.value = !0, e.type === "textarea" && ((j = h.value) === null || j === void 0 || j.handleMouseEnterWrapper());
    }
    function tt() {
      var j;
      P.value = !1, e.type === "textarea" && ((j = h.value) === null || j === void 0 || j.handleMouseLeaveWrapper());
    }
    function mt() {
      B.value || I.value === "click" && (V.value = !V.value);
    }
    function Je(j) {
      if (B.value) return;
      j.preventDefault();
      const Q = (Te) => {
        Te.preventDefault(), We("mouseup", document, Q);
      };
      if (rt("mouseup", document, Q), I.value !== "mousedown") return;
      V.value = !0;
      const ye = () => {
        V.value = !1, We("mouseup", document, ye);
      };
      rt("mouseup", document, ye);
    }
    function ce(j) {
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
        } = T;
        if (Te) {
          e.internalDeactivateOnEnter && W();
          return;
        }
        j.preventDefault(), e.type === "textarea" ? (Q = s.value) === null || Q === void 0 || Q.focus() : (ye = c.value) === null || ye === void 0 || ye.focus();
      }
    }
    function W() {
      e.passivelyActivated && (T.value = !1, bt(() => {
        var j;
        (j = l.value) === null || j === void 0 || j.focus();
      }));
    }
    function J() {
      var j, Q, ye;
      B.value || (e.passivelyActivated ? (j = l.value) === null || j === void 0 || j.focus() : ((Q = s.value) === null || Q === void 0 || Q.focus(), (ye = c.value) === null || ye === void 0 || ye.focus()));
    }
    function le() {
      var j;
      !((j = l.value) === null || j === void 0) && j.contains(document.activeElement) && document.activeElement.blur();
    }
    function se() {
      var j, Q;
      (j = s.value) === null || j === void 0 || j.select(), (Q = c.value) === null || Q === void 0 || Q.select();
    }
    function pe() {
      B.value || (s.value ? s.value.focus() : c.value && c.value.focus());
    }
    function me() {
      const {
        value: j
      } = l;
      j != null && j.contains(document.activeElement) && j !== document.activeElement && W();
    }
    function Se(j) {
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
    function nt() {
      K();
    }
    const je = L({
      top: "0"
    });
    function $t(j) {
      var Q;
      const {
        scrollTop: ye
      } = j.target;
      je.value.top = `${-ye}px`, (Q = h.value) === null || Q === void 0 || Q.syncUnifiedContainer();
    }
    let Tt = null;
    et(() => {
      const {
        autosize: j,
        type: Q
      } = e;
      j && Q === "textarea" ? Tt = Ne(C, (ye) => {
        !Array.isArray(ye) && ye !== U && Ie(ye);
      }) : Tt == null || Tt();
    });
    let Ot = null;
    et(() => {
      e.type === "textarea" ? Ot = Ne(C, (j) => {
        var Q;
        !Array.isArray(j) && j !== U && ((Q = h.value) === null || Q === void 0 || Q.syncUnifiedContainer());
      }) : Ot == null || Ot();
    }), $e(Wu, {
      mergedValueRef: C,
      maxlengthRef: H,
      mergedClsPrefixRef: t,
      countGraphemesRef: oe(e, "countGraphemes")
    });
    const Nt = {
      wrapperElRef: l,
      inputElRef: c,
      textareaElRef: s,
      isCompositing: D,
      clear: kt,
      focus: J,
      blur: le,
      select: se,
      deactivate: me,
      activate: pe,
      scrollTo: Se
    }, Ht = Bt("Input", i, t), Yt = z(() => {
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
          caretColor: Le,
          caretColorError: ot,
          caretColorWarning: ct,
          textDecorationColor: Ut,
          border: vn,
          borderDisabled: pn,
          borderHover: Hn,
          borderFocus: Tr,
          placeholderColor: Or,
          placeholderColorDisabled: Mr,
          lineHeightTextarea: Ir,
          colorDisabled: Lr,
          colorFocus: Sn,
          textColorDisabled: Bn,
          boxShadowFocus: Ci,
          iconSize: yi,
          colorFocusWarning: wi,
          boxShadowFocusWarning: Si,
          borderWarning: Bi,
          borderFocusWarning: ki,
          borderHoverWarning: Ri,
          colorFocusError: Fi,
          boxShadowFocusError: Pi,
          borderError: zi,
          borderFocusError: $i,
          borderHoverError: Yc,
          clearSize: Zc,
          clearColor: Jc,
          clearColorHover: Qc,
          clearColorPressed: ef,
          iconColor: tf,
          iconColorDisabled: nf,
          suffixTextColor: rf,
          countTextColor: of,
          countTextColorDisabled: af,
          iconColorHover: lf,
          iconColorPressed: sf,
          loadingColor: df,
          loadingColorError: uf,
          loadingColorWarning: cf,
          fontWeight: ff,
          [Z("padding", j)]: hf,
          [Z("fontSize", j)]: vf,
          [Z("height", j)]: pf
        }
      } = a.value, {
        left: gf,
        right: mf
      } = Lt(hf);
      return {
        "--n-bezier": Q,
        "--n-count-text-color": of,
        "--n-count-text-color-disabled": af,
        "--n-color": ye,
        "--n-font-size": vf,
        "--n-font-weight": ff,
        "--n-border-radius": Te,
        "--n-height": pf,
        "--n-padding-left": gf,
        "--n-padding-right": mf,
        "--n-text-color": Ke,
        "--n-caret-color": Le,
        "--n-text-decoration-color": Ut,
        "--n-border": vn,
        "--n-border-disabled": pn,
        "--n-border-hover": Hn,
        "--n-border-focus": Tr,
        "--n-placeholder-color": Or,
        "--n-placeholder-color-disabled": Mr,
        "--n-icon-size": yi,
        "--n-line-height-textarea": Ir,
        "--n-color-disabled": Lr,
        "--n-color-focus": Sn,
        "--n-text-color-disabled": Bn,
        "--n-box-shadow-focus": Ci,
        "--n-loading-color": df,
        // form warning
        "--n-caret-color-warning": ct,
        "--n-color-focus-warning": wi,
        "--n-box-shadow-focus-warning": Si,
        "--n-border-warning": Bi,
        "--n-border-focus-warning": ki,
        "--n-border-hover-warning": Ri,
        "--n-loading-color-warning": cf,
        // form error
        "--n-caret-color-error": ot,
        "--n-color-focus-error": Fi,
        "--n-box-shadow-focus-error": Pi,
        "--n-border-error": zi,
        "--n-border-focus-error": $i,
        "--n-border-hover-error": Yc,
        "--n-loading-color-error": uf,
        // clear-button
        "--n-clear-color": Jc,
        "--n-clear-size": Zc,
        "--n-clear-color-hover": Qc,
        "--n-clear-color-pressed": ef,
        "--n-icon-color": tf,
        "--n-icon-color-hover": lf,
        "--n-icon-color-pressed": sf,
        "--n-icon-color-disabled": nf,
        "--n-suffix-text-color": rf
      };
    }), jt = o ? Ge("input", z(() => {
      const {
        value: j
      } = w;
      return j[0];
    }), Yt, e) : void 0;
    return Object.assign(Object.assign({}, Nt), {
      // DOM ref
      wrapperElRef: l,
      inputElRef: c,
      inputMirrorElRef: u,
      inputEl2Ref: v,
      textareaElRef: s,
      textareaMirrorElRef: d,
      textareaScrollbarInstRef: h,
      // value
      rtlEnabled: Ht,
      uncontrolledValue: b,
      mergedValue: C,
      passwordVisible: V,
      mergedPlaceholder: M,
      showPlaceholder1: n,
      showPlaceholder2: $,
      mergedFocus: A,
      isComposing: D,
      activated: T,
      showClearButton: N,
      mergedSize: w,
      mergedDisabled: B,
      textDecorationStyle: te,
      mergedClsPrefix: t,
      mergedBordered: r,
      mergedShowPasswordOn: I,
      placeholderStyle: je,
      mergedStatus: R,
      textAreaScrollContainerWidth: X,
      // methods
      handleTextAreaScroll: $t,
      handleCompositionStart: Ze,
      handleCompositionEnd: dt,
      handleInput: ut,
      handleInputBlur: Ce,
      handleInputFocus: ze,
      handleWrapperBlur: Me,
      handleWrapperFocus: Ye,
      handleMouseEnter: ht,
      handleMouseLeave: tt,
      handleMouseDown: Rt,
      handleChange: he,
      handleClick: Ee,
      handleClear: lt,
      handlePasswordToggleClick: mt,
      handlePasswordToggleMousedown: Je,
      handleWrapperKeydown: Be,
      handleWrapperKeyup: ce,
      handleTextAreaMirrorResize: nt,
      getTextareaScrollContainer: () => s.value,
      mergedTheme: a,
      cssVars: o ? void 0 : Yt,
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
    }, He(d.prefix, (u) => u && f("div", {
      class: `${r}-input__prefix`
    }, u)), a === "textarea" ? f(dr, {
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
        } = this, p = {
          width: this.autosize && v && `${v}px`
        };
        return f(Qe, null, f("textarea", Object.assign({}, this.inputProps, {
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
        }, this.mergedPlaceholder[0]) : null, this.autosize ? f(Br, {
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
    }, " ") : null), !this.pair && He(d.suffix, (u) => u || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? f("div", {
      class: `${r}-input__suffix`
    }, [He(d["clear-icon-placeholder"], (c) => (this.clearable || c) && f(ma, {
      clsPrefix: r,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => c,
      icon: () => {
        var v, p;
        return (p = (v = this.$slots)["clear-icon"]) === null || p === void 0 ? void 0 : p.call(v);
      }
    })), this.internalLoadingBeforeSuffix ? null : u, this.loading !== void 0 ? f(_u, {
      clsPrefix: r,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? u : null, this.showCount && this.type !== "textarea" ? f(Gs, null, {
      default: (c) => {
        var v;
        return (v = d.count) === null || v === void 0 ? void 0 : v.call(d, c);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? f("div", {
      class: `${r}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? Xt(d["password-visible-icon"], () => [f(vt, {
      clsPrefix: r
    }, {
      default: () => f(fx, null)
    })]) : Xt(d["password-invisible-icon"], () => [f(vt, {
      clsPrefix: r
    }, {
      default: () => f(hx, null)
    })])) : null]) : null)), this.pair ? f("span", {
      class: `${r}-input__separator`
    }, Xt(d.separator, () => [this.separator])) : null, this.pair ? f("div", {
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
    }, f("span", null, this.mergedPlaceholder[1])) : null), He(d.suffix, (u) => (this.clearable || u) && f("div", {
      class: `${r}-input__suffix`
    }, [this.clearable && f(ma, {
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
    }) : null, this.showCount && a === "textarea" ? f(Gs, null, {
      default: (u) => {
        var c;
        const {
          renderCount: v
        } = this;
        return v ? v(u) : (c = d.count) === null || c === void 0 ? void 0 : c.call(d, u);
      }
    }) : null);
  }
}), L1 = F("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [O(">", [F("input", [O("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), O("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), F("button", [O("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [E("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), O("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [E("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), O("*", [O("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [O(">", [F("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), F("base-selection", [F("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), F("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), E("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), O("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [O(">", [F("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), F("base-selection", [F("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), F("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), E("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), _1 = {}, N1 = ee({
  name: "InputGroup",
  props: _1,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e);
    return _n("-input-group", L1, t), {
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
}), H1 = F("input-group-label", `
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
 `)]), j1 = Object.assign(Object.assign({}, ve.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
}), W1 = ee({
  name: "InputGroupLabel",
  props: j1,
  setup(e) {
    const {
      mergedBorderedRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("Input", "-input-group-label", H1, cl, e, r), a = z(() => {
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
          lineHeight: p,
          groupLabelBorder: x,
          [Z("fontSize", s)]: h,
          [Z("height", s)]: g
        }
      } = i.value;
      return {
        "--n-bezier": d,
        "--n-group-label-color": u,
        "--n-group-label-border": x,
        "--n-border-radius": c,
        "--n-group-label-text-color": v,
        "--n-font-size": h,
        "--n-line-height": p,
        "--n-height": g
      };
    }), l = o ? Ge("input-group-label", z(() => e.size[0]), a, e) : void 0;
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
function ri(e) {
  return e.type === "group";
}
function Vu(e) {
  return e.type === "ignored";
}
function Xi(e, t) {
  try {
    return !!(1 + t.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
function Ku(e, t) {
  return {
    getIsGroup: ri,
    getIgnored: Vu,
    getKey(o) {
      return ri(o) ? o.name || o.key || "key-required" : o[e];
    },
    getChildren(o) {
      return o[t];
    }
  };
}
function V1(e, t, r, o) {
  if (!t) return e;
  function i(a) {
    if (!Array.isArray(a)) return [];
    const l = [];
    for (const s of a)
      if (ri(s)) {
        const d = i(s[o]);
        d.length && l.push(Object.assign({}, s, {
          [o]: d
        }));
      } else {
        if (Vu(s))
          continue;
        t(r, s) && l.push(s);
      }
    return l;
  }
  return i(e);
}
function K1(e, t, r) {
  const o = /* @__PURE__ */ new Map();
  return e.forEach((i) => {
    ri(i) ? i[r].forEach((a) => {
      o.set(a[t], a);
    }) : o.set(i[t], i);
  }), o;
}
function jn(e) {
  return Ue(e, [255, 255, 255, 0.16]);
}
function To(e) {
  return Ue(e, [0, 0, 0, 0.12]);
}
const U1 = "n-button-group", q1 = {
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
function G1(e) {
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
    textColor3: p,
    primaryColorHover: x,
    primaryColorPressed: h,
    borderColor: g,
    primaryColor: b,
    baseColor: m,
    infoColor: C,
    infoColorHover: S,
    infoColorPressed: w,
    successColor: B,
    successColorHover: R,
    successColorPressed: y,
    warningColor: P,
    warningColorHover: D,
    warningColorPressed: T,
    errorColor: U,
    errorColorHover: M,
    errorColorPressed: n,
    fontWeight: $,
    buttonColor2: A,
    buttonColor2Hover: N,
    buttonColor2Pressed: I,
    fontWeightStrong: V
  } = e;
  return Object.assign(Object.assign({}, q1), {
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
    colorSecondary: A,
    colorSecondaryHover: N,
    colorSecondaryPressed: I,
    // tertiary
    colorTertiary: A,
    colorTertiaryHover: N,
    colorTertiaryPressed: I,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: N,
    colorQuaternaryPressed: I,
    // default type
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: v,
    textColorTertiary: p,
    textColorHover: x,
    textColorPressed: h,
    textColorFocus: x,
    textColorDisabled: v,
    textColorText: v,
    textColorTextHover: x,
    textColorTextPressed: h,
    textColorTextFocus: x,
    textColorTextDisabled: v,
    textColorGhost: v,
    textColorGhostHover: x,
    textColorGhostPressed: h,
    textColorGhostFocus: x,
    textColorGhostDisabled: v,
    border: `1px solid ${g}`,
    borderHover: `1px solid ${x}`,
    borderPressed: `1px solid ${h}`,
    borderFocus: `1px solid ${x}`,
    borderDisabled: `1px solid ${g}`,
    rippleColor: b,
    // primary
    colorPrimary: b,
    colorHoverPrimary: x,
    colorPressedPrimary: h,
    colorFocusPrimary: x,
    colorDisabledPrimary: b,
    textColorPrimary: m,
    textColorHoverPrimary: m,
    textColorPressedPrimary: m,
    textColorFocusPrimary: m,
    textColorDisabledPrimary: m,
    textColorTextPrimary: b,
    textColorTextHoverPrimary: x,
    textColorTextPressedPrimary: h,
    textColorTextFocusPrimary: x,
    textColorTextDisabledPrimary: v,
    textColorGhostPrimary: b,
    textColorGhostHoverPrimary: x,
    textColorGhostPressedPrimary: h,
    textColorGhostFocusPrimary: x,
    textColorGhostDisabledPrimary: b,
    borderPrimary: `1px solid ${b}`,
    borderHoverPrimary: `1px solid ${x}`,
    borderPressedPrimary: `1px solid ${h}`,
    borderFocusPrimary: `1px solid ${x}`,
    borderDisabledPrimary: `1px solid ${b}`,
    rippleColorPrimary: b,
    // info
    colorInfo: C,
    colorHoverInfo: S,
    colorPressedInfo: w,
    colorFocusInfo: S,
    colorDisabledInfo: C,
    textColorInfo: m,
    textColorHoverInfo: m,
    textColorPressedInfo: m,
    textColorFocusInfo: m,
    textColorDisabledInfo: m,
    textColorTextInfo: C,
    textColorTextHoverInfo: S,
    textColorTextPressedInfo: w,
    textColorTextFocusInfo: S,
    textColorTextDisabledInfo: v,
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
    colorSuccess: B,
    colorHoverSuccess: R,
    colorPressedSuccess: y,
    colorFocusSuccess: R,
    colorDisabledSuccess: B,
    textColorSuccess: m,
    textColorHoverSuccess: m,
    textColorPressedSuccess: m,
    textColorFocusSuccess: m,
    textColorDisabledSuccess: m,
    textColorTextSuccess: B,
    textColorTextHoverSuccess: R,
    textColorTextPressedSuccess: y,
    textColorTextFocusSuccess: R,
    textColorTextDisabledSuccess: v,
    textColorGhostSuccess: B,
    textColorGhostHoverSuccess: R,
    textColorGhostPressedSuccess: y,
    textColorGhostFocusSuccess: R,
    textColorGhostDisabledSuccess: B,
    borderSuccess: `1px solid ${B}`,
    borderHoverSuccess: `1px solid ${R}`,
    borderPressedSuccess: `1px solid ${y}`,
    borderFocusSuccess: `1px solid ${R}`,
    borderDisabledSuccess: `1px solid ${B}`,
    rippleColorSuccess: B,
    // warning
    colorWarning: P,
    colorHoverWarning: D,
    colorPressedWarning: T,
    colorFocusWarning: D,
    colorDisabledWarning: P,
    textColorWarning: m,
    textColorHoverWarning: m,
    textColorPressedWarning: m,
    textColorFocusWarning: m,
    textColorDisabledWarning: m,
    textColorTextWarning: P,
    textColorTextHoverWarning: D,
    textColorTextPressedWarning: T,
    textColorTextFocusWarning: D,
    textColorTextDisabledWarning: v,
    textColorGhostWarning: P,
    textColorGhostHoverWarning: D,
    textColorGhostPressedWarning: T,
    textColorGhostFocusWarning: D,
    textColorGhostDisabledWarning: P,
    borderWarning: `1px solid ${P}`,
    borderHoverWarning: `1px solid ${D}`,
    borderPressedWarning: `1px solid ${T}`,
    borderFocusWarning: `1px solid ${D}`,
    borderDisabledWarning: `1px solid ${P}`,
    rippleColorWarning: P,
    // error
    colorError: U,
    colorHoverError: M,
    colorPressedError: n,
    colorFocusError: M,
    colorDisabledError: U,
    textColorError: m,
    textColorHoverError: m,
    textColorPressedError: m,
    textColorFocusError: m,
    textColorDisabledError: m,
    textColorTextError: U,
    textColorTextHoverError: M,
    textColorTextPressedError: n,
    textColorTextFocusError: M,
    textColorTextDisabledError: v,
    textColorGhostError: U,
    textColorGhostHoverError: M,
    textColorGhostPressedError: n,
    textColorGhostFocusError: M,
    textColorGhostDisabledError: U,
    borderError: `1px solid ${U}`,
    borderHoverError: `1px solid ${M}`,
    borderPressedError: `1px solid ${n}`,
    borderFocusError: `1px solid ${M}`,
    borderDisabledError: `1px solid ${U}`,
    rippleColorError: U,
    waveOpacity: "0.6",
    fontWeight: $,
    fontWeightStrong: V
  });
}
const pi = {
  name: "Button",
  common: Xe,
  self: G1
}, X1 = O([F("button", `
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
 `, [_("color", [E("border", {
  borderColor: "var(--n-border-color)"
}), _("disabled", [E("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), qe("disabled", [O("&:focus", [E("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), O("&:hover", [E("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), O("&:active", [E("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), _("pressed", [E("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), _("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [E("border", {
  border: "var(--n-border-disabled)"
})]), qe("disabled", [O("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [E("state-border", {
  border: "var(--n-border-focus)"
})]), O("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [E("state-border", {
  border: "var(--n-border-hover)"
})]), O("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [E("state-border", {
  border: "var(--n-border-pressed)"
})]), _("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [E("state-border", {
  border: "var(--n-border-pressed)"
})])]), _("loading", "cursor: wait;"), F("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [_("active", {
  zIndex: 1,
  animationName: "button-wave-spread, button-wave-opacity"
})]), Ar && "MozBoxSizing" in document.createElement("div").style ? O("&::moz-focus-inner", {
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
 `, [F("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [qt({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), k1()]), E("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [O("~", [E("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), _("block", `
 display: flex;
 width: 100%;
 `), _("dashed", [E("border, state-border", {
  borderStyle: "dashed !important"
})]), _("disabled", {
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
})]), Y1 = Object.assign(Object.assign({}, ve.props), {
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
    default: !ju
  }
}), tr = ee({
  name: "Button",
  props: Y1,
  setup(e) {
    process.env.NODE_ENV !== "production" && et(() => {
      const {
        dashed: w,
        ghost: B,
        text: R,
        secondary: y,
        tertiary: P,
        quaternary: D
      } = e;
      (w || B || R) && (y || P || D) && it("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const t = L(null), r = L(null), o = L(!1), i = Ve(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = ge(U1, {}), {
      mergedSizeRef: l
    } = Mn({}, {
      defaultSize: "medium",
      mergedSize: (w) => {
        const {
          size: B
        } = e;
        if (B) return B;
        const {
          size: R
        } = a;
        if (R) return R;
        const {
          mergedSize: y
        } = w || {};
        return y ? y.value : "medium";
      }
    }), s = z(() => e.focusable && !e.disabled), d = (w) => {
      var B;
      s.value || w.preventDefault(), !e.nativeFocusBehavior && (w.preventDefault(), !e.disabled && s.value && ((B = t.value) === null || B === void 0 || B.focus({
        preventScroll: !0
      })));
    }, u = (w) => {
      var B;
      if (!e.disabled && !e.loading) {
        const {
          onClick: R
        } = e;
        R && ne(R, w), e.text || (B = r.value) === null || B === void 0 || B.play();
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
    }, p = () => {
      o.value = !1;
    }, {
      inlineThemeDisabled: x,
      mergedClsPrefixRef: h,
      mergedRtlRef: g
    } = Ae(e), b = ve("Button", "-button", X1, pi, e, h), m = Bt("Button", g, h), C = z(() => {
      const w = b.value, {
        common: {
          cubicBezierEaseInOut: B,
          cubicBezierEaseOut: R
        },
        self: y
      } = w, {
        rippleDuration: P,
        opacityDisabled: D,
        fontWeight: T,
        fontWeightStrong: U
      } = y, M = l.value, {
        dashed: n,
        type: $,
        ghost: A,
        text: N,
        color: I,
        round: V,
        circle: te,
        textColor: X,
        secondary: K,
        tertiary: H,
        quaternary: q,
        strong: Y
      } = e, ie = {
        "--n-font-weight": Y ? U : T
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
      const fe = $ === "tertiary", we = $ === "default", G = fe ? "default" : $;
      if (N) {
        const Ce = X || I;
        ae = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": Ce || y[Z("textColorText", G)],
          "--n-text-color-hover": Ce ? jn(Ce) : y[Z("textColorTextHover", G)],
          "--n-text-color-pressed": Ce ? To(Ce) : y[Z("textColorTextPressed", G)],
          "--n-text-color-focus": Ce ? jn(Ce) : y[Z("textColorTextHover", G)],
          "--n-text-color-disabled": Ce || y[Z("textColorTextDisabled", G)]
        };
      } else if (A || n) {
        const Ce = X || I;
        ae = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": I || y[Z("rippleColor", G)],
          "--n-text-color": Ce || y[Z("textColorGhost", G)],
          "--n-text-color-hover": Ce ? jn(Ce) : y[Z("textColorGhostHover", G)],
          "--n-text-color-pressed": Ce ? To(Ce) : y[Z("textColorGhostPressed", G)],
          "--n-text-color-focus": Ce ? jn(Ce) : y[Z("textColorGhostHover", G)],
          "--n-text-color-disabled": Ce || y[Z("textColorGhostDisabled", G)]
        };
      } else if (K) {
        const Ce = we ? y.textColor : fe ? y.textColorTertiary : y[Z("color", G)], ze = I || Ce, Me = $ !== "default" && $ !== "tertiary";
        ae = {
          "--n-color": Me ? De(ze, {
            alpha: Number(y.colorOpacitySecondary)
          }) : y.colorSecondary,
          "--n-color-hover": Me ? De(ze, {
            alpha: Number(y.colorOpacitySecondaryHover)
          }) : y.colorSecondaryHover,
          "--n-color-pressed": Me ? De(ze, {
            alpha: Number(y.colorOpacitySecondaryPressed)
          }) : y.colorSecondaryPressed,
          "--n-color-focus": Me ? De(ze, {
            alpha: Number(y.colorOpacitySecondaryHover)
          }) : y.colorSecondaryHover,
          "--n-color-disabled": y.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": ze,
          "--n-text-color-hover": ze,
          "--n-text-color-pressed": ze,
          "--n-text-color-focus": ze,
          "--n-text-color-disabled": ze
        };
      } else if (H || q) {
        const Ce = we ? y.textColor : fe ? y.textColorTertiary : y[Z("color", G)], ze = I || Ce;
        H ? (ae["--n-color"] = y.colorTertiary, ae["--n-color-hover"] = y.colorTertiaryHover, ae["--n-color-pressed"] = y.colorTertiaryPressed, ae["--n-color-focus"] = y.colorSecondaryHover, ae["--n-color-disabled"] = y.colorTertiary) : (ae["--n-color"] = y.colorQuaternary, ae["--n-color-hover"] = y.colorQuaternaryHover, ae["--n-color-pressed"] = y.colorQuaternaryPressed, ae["--n-color-focus"] = y.colorQuaternaryHover, ae["--n-color-disabled"] = y.colorQuaternary), ae["--n-ripple-color"] = "#0000", ae["--n-text-color"] = ze, ae["--n-text-color-hover"] = ze, ae["--n-text-color-pressed"] = ze, ae["--n-text-color-focus"] = ze, ae["--n-text-color-disabled"] = ze;
      } else
        ae = {
          "--n-color": I || y[Z("color", G)],
          "--n-color-hover": I ? jn(I) : y[Z("colorHover", G)],
          "--n-color-pressed": I ? To(I) : y[Z("colorPressed", G)],
          "--n-color-focus": I ? jn(I) : y[Z("colorFocus", G)],
          "--n-color-disabled": I || y[Z("colorDisabled", G)],
          "--n-ripple-color": I || y[Z("rippleColor", G)],
          "--n-text-color": X || (I ? y.textColorPrimary : fe ? y.textColorTertiary : y[Z("textColor", G)]),
          "--n-text-color-hover": X || (I ? y.textColorHoverPrimary : y[Z("textColorHover", G)]),
          "--n-text-color-pressed": X || (I ? y.textColorPressedPrimary : y[Z("textColorPressed", G)]),
          "--n-text-color-focus": X || (I ? y.textColorFocusPrimary : y[Z("textColorFocus", G)]),
          "--n-text-color-disabled": X || (I ? y.textColorDisabledPrimary : y[Z("textColorDisabled", G)])
        };
      let ue = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      N ? ue = {
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
        [Z("iconSize", M)]: at,
        [Z("borderRadius", M)]: Ze,
        [Z("iconMargin", M)]: dt,
        waveOpacity: ut
      } = y, xe = {
        "--n-width": te && !N ? Re : "initial",
        "--n-height": N ? "initial" : Re,
        "--n-font-size": be,
        "--n-padding": te || N ? "initial" : V ? Pe : Fe,
        "--n-icon-size": at,
        "--n-icon-margin": dt,
        "--n-border-radius": N ? "initial" : te || V ? Re : Ze
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": B,
        "--n-bezier-ease-out": R,
        "--n-ripple-duration": P,
        "--n-opacity-disabled": D,
        "--n-wave-opacity": ut
      }, ie), ae), ue), xe);
    }), S = x ? Ge("button", z(() => {
      let w = "";
      const {
        dashed: B,
        type: R,
        ghost: y,
        text: P,
        color: D,
        round: T,
        circle: U,
        textColor: M,
        secondary: n,
        tertiary: $,
        quaternary: A,
        strong: N
      } = e;
      B && (w += "a"), y && (w += "b"), P && (w += "c"), T && (w += "d"), U && (w += "e"), n && (w += "f"), $ && (w += "g"), A && (w += "h"), N && (w += "i"), D && (w += `j${qo(D)}`), M && (w += `k${qo(M)}`);
      const {
        value: I
      } = l;
      return w += `l${I[0]}`, w += `m${R[0]}`, w;
    }), C, e) : void 0;
    return {
      selfElRef: t,
      waveElRef: r,
      mergedClsPrefix: h,
      mergedFocusable: s,
      mergedSize: l,
      showBorder: i,
      enterPressed: o,
      rtlEnabled: m,
      handleMousedown: d,
      handleKeydown: v,
      handleBlur: p,
      handleKeyup: c,
      handleClick: u,
      customColorCssVars: z(() => {
        const {
          color: w
        } = e;
        if (!w) return null;
        const B = jn(w);
        return {
          "--n-border-color": w,
          "--n-border-color-hover": B,
          "--n-border-color-pressed": To(w),
          "--n-border-color-focus": B,
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
    const o = He(this.$slots.default, (i) => i && f("span", {
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
    }, this.iconPlacement === "right" && o, f(ll, {
      width: !0
    }, {
      default: () => He(this.$slots.icon, (i) => (this.loading || this.renderIcon || i) && f("span", {
        class: `${e}-button__icon`,
        style: {
          margin: xr(this.$slots.default) ? "0" : ""
        }
      }, f(sr, null, {
        default: () => this.loading ? f(Nn, {
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
    }), this.iconPlacement === "left" && o, this.text ? null : f(F1, {
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
}), Z1 = {
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
function J1(e) {
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
    closeIconColorPressed: p,
    closeColorHover: x,
    closeColorPressed: h,
    modalColor: g,
    boxShadow1: b,
    popoverColor: m,
    actionColor: C
  } = e;
  return Object.assign(Object.assign({}, Z1), {
    lineHeight: o,
    color: a,
    colorModal: g,
    colorPopover: m,
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
    closeColorPressed: h,
    closeBorderRadius: r,
    closeIconColor: c,
    closeIconColorHover: v,
    closeIconColorPressed: p,
    fontSizeSmall: i,
    fontSizeMedium: i,
    fontSizeLarge: i,
    fontSizeHuge: i,
    boxShadow: b,
    borderRadius: r
  });
}
const Uu = {
  name: "Card",
  common: Xe,
  self: J1
}, Q1 = O([F("card", `
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
 `, [Pd({
  background: "var(--n-color-modal)"
}), _("hoverable", [O("&:hover", "box-shadow: var(--n-box-shadow);")]), _("content-segmented", [O(">", [E("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), _("content-soft-segmented", [O(">", [E("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), _("footer-segmented", [O(">", [E("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), _("footer-soft-segmented", [O(">", [E("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), O(">", [F("card-header", `
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
 `, [O("&:first-child", {
  paddingTop: "var(--n-padding-bottom)"
})]), E("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), F("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [O("img", `
 display: block;
 width: 100%;
 `)]), _("bordered", `
 border: 1px solid var(--n-border-color);
 `, [O("&:target", "border-color: var(--n-color-target);")]), _("action-segmented", [O(">", [E("action", [O("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), _("content-segmented, content-soft-segmented", [O(">", [E("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [O("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), _("footer-segmented, footer-soft-segmented", [O(">", [E("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [O("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), _("embedded", `
 background-color: var(--n-color-embedded);
 `)]), ai(F("card", `
 background: var(--n-color-modal);
 `, [_("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), Ea(F("card", `
 background: var(--n-color-popover);
 `, [_("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), fl = {
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
}, eC = Dn(fl), tC = Object.assign(Object.assign({}, ve.props), fl), nC = ee({
  name: "Card",
  props: tC,
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
    } = Ae(e), a = ve("Card", "-card", Q1, Uu, e, o), l = Bt("Card", i, o), s = z(() => {
      const {
        size: u
      } = e, {
        self: {
          color: c,
          colorModal: v,
          colorTarget: p,
          textColor: x,
          titleTextColor: h,
          titleFontWeight: g,
          borderColor: b,
          actionColor: m,
          borderRadius: C,
          lineHeight: S,
          closeIconColor: w,
          closeIconColorHover: B,
          closeIconColorPressed: R,
          closeColorHover: y,
          closeColorPressed: P,
          closeBorderRadius: D,
          closeIconSize: T,
          closeSize: U,
          boxShadow: M,
          colorPopover: n,
          colorEmbedded: $,
          colorEmbeddedModal: A,
          colorEmbeddedPopover: N,
          [Z("padding", u)]: I,
          [Z("fontSize", u)]: V,
          [Z("titleFontSize", u)]: te
        },
        common: {
          cubicBezierEaseInOut: X
        }
      } = a.value, {
        top: K,
        left: H,
        bottom: q
      } = Lt(I);
      return {
        "--n-bezier": X,
        "--n-border-radius": C,
        "--n-color": c,
        "--n-color-modal": v,
        "--n-color-popover": n,
        "--n-color-embedded": $,
        "--n-color-embedded-modal": A,
        "--n-color-embedded-popover": N,
        "--n-color-target": p,
        "--n-text-color": x,
        "--n-line-height": S,
        "--n-action-color": m,
        "--n-title-text-color": h,
        "--n-title-font-weight": g,
        "--n-close-icon-color": w,
        "--n-close-icon-color-hover": B,
        "--n-close-icon-color-pressed": R,
        "--n-close-color-hover": y,
        "--n-close-color-pressed": P,
        "--n-border-color": b,
        "--n-box-shadow": M,
        // size
        "--n-padding-top": K,
        "--n-padding-bottom": q,
        "--n-padding-left": H,
        "--n-font-size": V,
        "--n-title-font-size": te,
        "--n-close-size": U,
        "--n-close-icon-size": T,
        "--n-close-border-radius": D
      };
    }), d = r ? Ge("card", z(() => e.size[0]), s, e) : void 0;
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
    }, He(d.cover, (u) => {
      const c = this.cover ? Jt([this.cover()]) : u;
      return c && f("div", {
        class: `${o}-card-cover`,
        role: "none"
      }, c);
    }), He(d.header, (u) => {
      const {
        title: c
      } = this, v = c ? Jt(typeof c == "function" ? [c()] : [c]) : u;
      return v || this.closable ? f("div", {
        class: [`${o}-card-header`, this.headerClass],
        style: this.headerStyle,
        role: "heading"
      }, f("div", {
        class: `${o}-card-header__main`,
        role: "heading"
      }, v), He(d["header-extra"], (p) => {
        const x = this.headerExtra ? Jt([this.headerExtra()]) : p;
        return x && f("div", {
          class: [`${o}-card-header__extra`, this.headerExtraClass],
          style: this.headerExtraStyle
        }, x);
      }), this.closable && f(mo, {
        clsPrefix: o,
        class: `${o}-card-header__close`,
        onClick: this.handleCloseClick,
        absolute: !0
      })) : null;
    }), He(d.default, (u) => {
      const {
        content: c
      } = this, v = c ? Jt(typeof c == "function" ? [c()] : [c]) : u;
      return v && f("div", {
        class: [`${o}-card__content`, this.contentClass],
        style: this.contentStyle,
        role: "none"
      }, v);
    }), He(d.footer, (u) => {
      const c = this.footer ? Jt([this.footer()]) : u;
      return c && f("div", {
        class: [`${o}-card__footer`, this.footerClass],
        style: this.footerStyle,
        role: "none"
      }, c);
    }), He(d.action, (u) => {
      const c = this.action ? Jt([this.action()]) : u;
      return c && f("div", {
        class: `${o}-card__action`,
        role: "none"
      }, c);
    }));
  }
}), rC = {
  sizeSmall: "14px",
  sizeMedium: "16px",
  sizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function oC(e) {
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
    fontSizeLarge: p,
    borderRadiusSmall: x,
    lineHeight: h
  } = e;
  return Object.assign(Object.assign({}, rC), {
    labelLineHeight: h,
    fontSizeSmall: c,
    fontSizeMedium: v,
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
const qu = {
  name: "Checkbox",
  common: Xe,
  self: oC
}, Gu = "n-checkbox-group", iC = {
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
}, aC = ee({
  name: "CheckboxGroup",
  props: iC,
  setup(e) {
    process.env.NODE_ENV !== "production" && et(() => {
      e.onChange !== void 0 && it("checkbox-group", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = Mn(e), {
      mergedSizeRef: o,
      mergedDisabledRef: i
    } = r, a = L(e.defaultValue), l = z(() => e.value), s = Et(l, a), d = z(() => {
      var v;
      return ((v = s.value) === null || v === void 0 ? void 0 : v.length) || 0;
    }), u = z(() => Array.isArray(s.value) ? new Set(s.value) : /* @__PURE__ */ new Set());
    function c(v, p) {
      const {
        nTriggerFormInput: x,
        nTriggerFormChange: h
      } = r, {
        onChange: g,
        "onUpdate:value": b,
        onUpdateValue: m
      } = e;
      if (Array.isArray(s.value)) {
        const C = Array.from(s.value), S = C.findIndex((w) => w === p);
        v ? ~S || (C.push(p), m && ne(m, C, {
          actionType: "check",
          value: p
        }), b && ne(b, C, {
          actionType: "check",
          value: p
        }), x(), h(), a.value = C, g && ne(g, C)) : ~S && (C.splice(S, 1), m && ne(m, C, {
          actionType: "uncheck",
          value: p
        }), b && ne(b, C, {
          actionType: "uncheck",
          value: p
        }), g && ne(g, C), a.value = C, x(), h());
      } else
        v ? (m && ne(m, [p], {
          actionType: "check",
          value: p
        }), b && ne(b, [p], {
          actionType: "check",
          value: p
        }), g && ne(g, [p]), a.value = [p], x(), h()) : (m && ne(m, [], {
          actionType: "uncheck",
          value: p
        }), b && ne(b, [], {
          actionType: "uncheck",
          value: p
        }), g && ne(g, []), a.value = [], x(), h());
    }
    return $e(Gu, {
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
}), lC = () => f("svg", {
  viewBox: "0 0 64 64",
  class: "check-icon"
}, f("path", {
  d: "M50.42,16.76L22.34,39.45l-8.1-11.46c-1.12-1.58-3.3-1.96-4.88-0.84c-1.58,1.12-1.95,3.3-0.84,4.88l10.26,14.51  c0.56,0.79,1.42,1.31,2.38,1.45c0.16,0.02,0.32,0.03,0.48,0.03c0.8,0,1.57-0.27,2.2-0.78l30.99-25.03c1.5-1.21,1.74-3.42,0.52-4.92  C54.13,15.78,51.93,15.55,50.42,16.76z"
})), sC = () => f("svg", {
  viewBox: "0 0 100 100",
  class: "line-icon"
}, f("path", {
  d: "M80.2,55.5H21.4c-2.8,0-5.1-2.5-5.1-5.5l0,0c0-3,2.3-5.5,5.1-5.5h58.7c2.8,0,5.1,2.5,5.1,5.5l0,0C85.2,53.1,82.9,55.5,80.2,55.5z"
})), dC = O([
  F("checkbox", `
 font-size: var(--n-font-size);
 outline: none;
 cursor: pointer;
 display: inline-flex;
 flex-wrap: nowrap;
 align-items: flex-start;
 word-break: break-word;
 line-height: var(--n-size);
 --n-merged-color-table: var(--n-color-table);
 `, [_("show-label", "line-height: var(--n-label-line-height);"), O("&:hover", [F("checkbox-box", [E("border", "border: var(--n-border-checked);")])]), O("&:focus:not(:active)", [F("checkbox-box", [E("border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), _("inside-table", [F("checkbox-box", `
 background-color: var(--n-merged-color-table);
 `)]), _("checked", [F("checkbox-box", `
 background-color: var(--n-color-checked);
 `, [F("checkbox-icon", [
    // if not set width to 100%, safari & old chrome won't display the icon
    O(".check-icon", `
 opacity: 1;
 transform: scale(1);
 `)
  ])])]), _("indeterminate", [F("checkbox-box", [F("checkbox-icon", [O(".check-icon", `
 opacity: 0;
 transform: scale(.5);
 `), O(".line-icon", `
 opacity: 1;
 transform: scale(1);
 `)])])]), _("checked, indeterminate", [O("&:focus:not(:active)", [F("checkbox-box", [E("border", `
 border: var(--n-border-checked);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), F("checkbox-box", `
 background-color: var(--n-color-checked);
 border-left: 0;
 border-top: 0;
 `, [E("border", {
    border: "var(--n-border-checked)"
  })])]), _("disabled", {
    cursor: "not-allowed"
  }, [_("checked", [F("checkbox-box", `
 background-color: var(--n-color-disabled-checked);
 `, [E("border", {
    border: "var(--n-border-disabled-checked)"
  }), F("checkbox-icon", [O(".check-icon, .line-icon", {
    fill: "var(--n-check-mark-color-disabled-checked)"
  })])])]), F("checkbox-box", `
 background-color: var(--n-color-disabled);
 `, [E("border", `
 border: var(--n-border-disabled);
 `), F("checkbox-icon", [O(".check-icon, .line-icon", `
 fill: var(--n-check-mark-color-disabled);
 `)])]), E("label", `
 color: var(--n-text-color-disabled);
 `)]), F("checkbox-box-wrapper", `
 position: relative;
 width: var(--n-size);
 flex-shrink: 0;
 flex-grow: 0;
 user-select: none;
 -webkit-user-select: none;
 `), F("checkbox-box", `
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
 `, [E("border", `
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
 `), F("checkbox-icon", `
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
 `), qt({
    left: "1px",
    top: "1px"
  })])]), E("label", `
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
  ai(F("checkbox", `
 --n-merged-color-table: var(--n-color-table-modal);
 `)),
  // popover table header checkbox
  Ea(F("checkbox", `
 --n-merged-color-table: var(--n-color-table-popover);
 `))
]), uC = Object.assign(Object.assign({}, ve.props), {
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
}), hl = ee({
  name: "Checkbox",
  props: uC,
  setup(e) {
    process.env.NODE_ENV !== "production" && et(() => {
      e.onChange && it("checkbox", "`on-change` is deprecated, please use `on-update:checked` instead.");
    });
    const t = ge(Gu, null), r = L(null), {
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = L(e.defaultChecked), s = oe(e, "checked"), d = Et(s, l), u = Ve(() => {
      if (t) {
        const R = t.valueSetRef.value;
        return R && e.value !== void 0 ? R.has(e.value) : !1;
      } else
        return d.value === e.checkedValue;
    }), c = Mn(e, {
      mergedSize(R) {
        const {
          size: y
        } = e;
        if (y !== void 0) return y;
        if (t) {
          const {
            value: P
          } = t.mergedSizeRef;
          if (P !== void 0)
            return P;
        }
        if (R) {
          const {
            mergedSize: P
          } = R;
          if (P !== void 0) return P.value;
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
              value: P
            },
            checkedCountRef: D
          } = t;
          if (P !== void 0 && D.value >= P && !u.value)
            return !0;
          const {
            minRef: {
              value: T
            }
          } = t;
          if (T !== void 0 && D.value <= T && u.value)
            return !0;
        }
        return R ? R.disabled.value : !1;
      }
    }), {
      mergedDisabledRef: v,
      mergedSizeRef: p
    } = c, x = ve("Checkbox", "-checkbox", dC, qu, e, o);
    function h(R) {
      if (t && e.value !== void 0)
        t.toggleCheckbox(!u.value, e.value);
      else {
        const {
          onChange: y,
          "onUpdate:checked": P,
          onUpdateChecked: D
        } = e, {
          nTriggerFormInput: T,
          nTriggerFormChange: U
        } = c, M = u.value ? e.uncheckedValue : e.checkedValue;
        P && ne(P, M, R), D && ne(D, M, R), y && ne(y, M, R), T(), U(), l.value = M;
      }
    }
    function g(R) {
      v.value || h(R);
    }
    function b(R) {
      if (!v.value)
        switch (R.key) {
          case " ":
          case "Enter":
            h(R);
        }
    }
    function m(R) {
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
    }, S = Bt("Checkbox", a, o), w = z(() => {
      const {
        value: R
      } = p, {
        common: {
          cubicBezierEaseInOut: y
        },
        self: {
          borderRadius: P,
          color: D,
          colorChecked: T,
          colorDisabled: U,
          colorTableHeader: M,
          colorTableHeaderModal: n,
          colorTableHeaderPopover: $,
          checkMarkColor: A,
          checkMarkColorDisabled: N,
          border: I,
          borderFocus: V,
          borderDisabled: te,
          borderChecked: X,
          boxShadowFocus: K,
          textColor: H,
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
        "--n-border-radius": P,
        "--n-border": I,
        "--n-border-checked": X,
        "--n-border-focus": V,
        "--n-border-disabled": te,
        "--n-border-disabled-checked": ae,
        "--n-box-shadow-focus": K,
        "--n-color": D,
        "--n-color-checked": T,
        "--n-color-table": M,
        "--n-color-table-modal": n,
        "--n-color-table-popover": $,
        "--n-color-disabled": U,
        "--n-color-disabled-checked": ie,
        "--n-text-color": H,
        "--n-text-color-disabled": q,
        "--n-check-mark-color": A,
        "--n-check-mark-color-disabled": N,
        "--n-check-mark-color-disabled-checked": Y,
        "--n-font-size": ue,
        "--n-label-padding": fe
      };
    }), B = i ? Ge("checkbox", z(() => p.value[0]), w, e) : void 0;
    return Object.assign(c, C, {
      rtlEnabled: S,
      selfRef: r,
      mergedClsPrefix: o,
      mergedDisabled: v,
      renderedChecked: u,
      mergedTheme: x,
      labelId: cn(),
      handleClick: g,
      handleKeyUp: b,
      handleKeyDown: m,
      cssVars: i ? void 0 : w,
      themeClass: B == null ? void 0 : B.themeClass,
      onRender: B == null ? void 0 : B.onRender
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
      handleKeyDown: p,
      handleClick: x
    } = this;
    (e = this.onRender) === null || e === void 0 || e.call(this);
    const h = He(t.default, (g) => d || g ? f("span", {
      class: `${u}-checkbox__label`,
      id: s
    }, d || g) : null);
    return f("div", {
      ref: "selfRef",
      class: [`${u}-checkbox`, this.themeClass, this.rtlEnabled && `${u}-checkbox--rtl`, r && `${u}-checkbox--checked`, o && `${u}-checkbox--disabled`, i && `${u}-checkbox--indeterminate`, a && `${u}-checkbox--inside-table`, h && `${u}-checkbox--show-label`],
      tabindex: o || !c ? void 0 : 0,
      role: "checkbox",
      "aria-checked": i ? "mixed" : r,
      "aria-labelledby": s,
      style: l,
      onKeyup: v,
      onKeydown: p,
      onClick: x,
      onMousedown: () => {
        rt("selectstart", window, (g) => {
          g.preventDefault();
        }, {
          once: !0
        });
      }
    }, f("div", {
      class: `${u}-checkbox-box-wrapper`
    }, " ", f("div", {
      class: `${u}-checkbox-box`
    }, f(sr, null, {
      default: () => this.indeterminate ? f("div", {
        key: "indeterminate",
        class: `${u}-checkbox-icon`
      }, sC()) : f("div", {
        key: "check",
        class: `${u}-checkbox-icon`
      }, lC())
    }), f("div", {
      class: `${u}-checkbox-box__border`
    }))), h);
  }
});
function cC(e) {
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
const fC = {
  name: "Collapse",
  common: Xe,
  self: cC
}, hC = F("collapse", "width: 100%;", [F("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [_("disabled", [E("header", "cursor: not-allowed;", [E("header-main", `
 color: var(--n-title-text-color-disabled);
 `), F("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), F("collapse-item", "margin-left: 32px;"), O("&:first-child", "margin-top: 0;"), O("&:first-child >", [E("header", "padding-top: 0;")]), _("left-arrow-placement", [E("header", [F("collapse-item-arrow", "margin-right: 4px;")])]), _("right-arrow-placement", [E("header", [F("collapse-item-arrow", "margin-left: 4px;")])]), E("content-wrapper", [E("content-inner", "padding-top: 16px;"), Hu({
  duration: "0.15s"
})]), _("active", [E("header", [_("active", [F("collapse-item-arrow", "transform: rotate(90deg);")])])]), O("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), qe("disabled", [_("trigger-area-main", [E("header", [E("header-main", "cursor: pointer;"), F("collapse-item-arrow", "cursor: default;")])]), _("trigger-area-arrow", [E("header", [F("collapse-item-arrow", "cursor: pointer;")])]), _("trigger-area-extra", [E("header", [E("header-extra", "cursor: pointer;")])])]), E("header", `
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
 `), F("collapse-item-arrow", `
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]), vC = Object.assign(Object.assign({}, ve.props), {
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
    validator: () => (process.env.NODE_ENV !== "production" && Pt("collapse", "`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead."), !0),
    default: void 0
  }
}), Xu = "n-collapse", pC = ee({
  name: "Collapse",
  props: vC,
  setup(e, {
    slots: t
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = L(e.defaultExpandedNames), l = z(() => e.expandedNames), s = Et(l, a), d = ve("Collapse", "-collapse", hC, fC, e, r);
    function u(g) {
      const {
        "onUpdate:expandedNames": b,
        onUpdateExpandedNames: m,
        onExpandedNamesChange: C
      } = e;
      m && ne(m, g), b && ne(b, g), C && ne(C, g), a.value = g;
    }
    function c(g) {
      const {
        onItemHeaderClick: b
      } = e;
      b && ne(b, g);
    }
    function v(g, b, m) {
      const {
        accordion: C
      } = e, {
        value: S
      } = s;
      if (C)
        g ? (u([b]), c({
          name: b,
          expanded: !0,
          event: m
        })) : (u([]), c({
          name: b,
          expanded: !1,
          event: m
        }));
      else if (!Array.isArray(S))
        u([b]), c({
          name: b,
          expanded: !0,
          event: m
        });
      else {
        const w = S.slice(), B = w.findIndex((R) => b === R);
        ~B ? (w.splice(B, 1), u(w), c({
          name: b,
          expanded: !1,
          event: m
        })) : (w.push(b), u(w), c({
          name: b,
          expanded: !0,
          event: m
        }));
      }
    }
    $e(Xu, {
      props: e,
      mergedClsPrefixRef: r,
      expandedNamesRef: s,
      slots: t,
      toggleItem: v
    });
    const p = Bt("Collapse", i, r), x = z(() => {
      const {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          titleFontWeight: b,
          dividerColor: m,
          titlePadding: C,
          titleTextColor: S,
          titleTextColorDisabled: w,
          textColor: B,
          arrowColor: R,
          fontSize: y,
          titleFontSize: P,
          arrowColorDisabled: D,
          itemMargin: T
        }
      } = d.value;
      return {
        "--n-font-size": y,
        "--n-bezier": g,
        "--n-text-color": B,
        "--n-divider-color": m,
        "--n-title-padding": C,
        "--n-title-font-size": P,
        "--n-title-text-color": S,
        "--n-title-text-color-disabled": w,
        "--n-title-font-weight": b,
        "--n-arrow-color": R,
        "--n-arrow-color-disabled": D,
        "--n-item-margin": T
      };
    }), h = o ? Ge("collapse", void 0, x, e) : void 0;
    return {
      rtlEnabled: p,
      mergedTheme: d,
      mergedClsPrefix: r,
      cssVars: o ? void 0 : x,
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
}), gC = ee({
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
      onceTrue: Ad(oe(e, "show"))
    };
  },
  render() {
    return f(ll, null, {
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
        return i ? un(a, [[wr, e]]) : e ? a : null;
      }
    });
  }
}), mC = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
}, bC = ee({
  name: "CollapseItem",
  props: mC,
  setup(e) {
    const {
      mergedRtlRef: t
    } = Ae(e), r = cn(), o = Ve(() => {
      var v;
      return (v = e.name) !== null && v !== void 0 ? v : r;
    }), i = ge(Xu);
    i || On("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
    const {
      expandedNamesRef: a,
      props: l,
      mergedClsPrefixRef: s,
      slots: d
    } = i, u = z(() => {
      const {
        value: v
      } = a;
      if (Array.isArray(v)) {
        const {
          value: p
        } = o;
        return !~v.findIndex((x) => x === p);
      } else if (v) {
        const {
          value: p
        } = o;
        return p !== v;
      }
      return !0;
    });
    return {
      rtlEnabled: Bt("Collapse", t, s),
      collapseSlots: d,
      randomName: r,
      mergedClsPrefix: s,
      collapsed: u,
      triggerAreas: oe(l, "triggerAreas"),
      mergedDisplayDirective: z(() => {
        const {
          displayDirective: v
        } = e;
        return v || l.displayDirective;
      }),
      arrowPlacement: z(() => l.arrowPlacement),
      handleClick(v) {
        let p = "main";
        Kt(v, "arrow") && (p = "arrow"), Kt(v, "extra") && (p = "extra"), l.triggerAreas.includes(p) && i && !e.disabled && i.toggleItem(u.value, o.value, v);
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
    } = this, d = aa(t.header, {
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
    }, aa(c, {
      collapsed: o
    }, () => {
      var v;
      return [f(vt, {
        clsPrefix: a
      }, {
        default: (v = e.expandIcon) !== null && v !== void 0 ? v : () => this.rtlEnabled ? f(sx, null) : f(ol, null)
      })];
    })), r === "left" && d), b0(u, {
      collapsed: o
    }, (v) => f("div", {
      class: `${a}-collapse-item__header-extra`,
      onClick: this.handleClick,
      "data-extra": !0
    }, v))), f(gC, {
      clsPrefix: a,
      displayDirective: i,
      show: !o
    }, t));
  }
}), xC = {
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
    validator: () => (Pt("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, Yu = ee({
  name: "ConfigProvider",
  alias: ["App"],
  props: xC,
  setup(e) {
    const t = ge(nn, null), r = z(() => {
      const {
        theme: g
      } = e;
      if (g === null) return;
      const b = t == null ? void 0 : t.mergedThemeRef.value;
      return g === void 0 ? b : b === void 0 ? g : Object.assign({}, b, g);
    }), o = z(() => {
      const {
        themeOverrides: g
      } = e;
      if (g !== null) {
        if (g === void 0)
          return t == null ? void 0 : t.mergedThemeOverridesRef.value;
        {
          const b = t == null ? void 0 : t.mergedThemeOverridesRef.value;
          return b === void 0 ? g : Vr({}, b, g);
        }
      }
    }), i = Ve(() => {
      const {
        namespace: g
      } = e;
      return g === void 0 ? t == null ? void 0 : t.mergedNamespaceRef.value : g;
    }), a = Ve(() => {
      const {
        bordered: g
      } = e;
      return g === void 0 ? t == null ? void 0 : t.mergedBorderedRef.value : g;
    }), l = z(() => {
      const {
        icons: g
      } = e;
      return g === void 0 ? t == null ? void 0 : t.mergedIconsRef.value : g;
    }), s = z(() => {
      const {
        componentOptions: g
      } = e;
      return g !== void 0 ? g : t == null ? void 0 : t.mergedComponentPropsRef.value;
    }), d = z(() => {
      const {
        clsPrefix: g
      } = e;
      return g !== void 0 ? g : t ? t.mergedClsPrefixRef.value : Xo;
    }), u = z(() => {
      var g;
      const {
        rtl: b
      } = e;
      if (b === void 0)
        return t == null ? void 0 : t.mergedRtlRef.value;
      const m = {};
      for (const C of b)
        m[C.name] = wl(C), (g = C.peers) === null || g === void 0 || g.forEach((S) => {
          S.name in m || (m[S.name] = wl(S));
        });
      return m;
    }), c = z(() => e.breakpoints || (t == null ? void 0 : t.mergedBreakpointsRef.value)), v = e.inlineThemeDisabled || (t == null ? void 0 : t.inlineThemeDisabled), p = e.preflightStyleDisabled || (t == null ? void 0 : t.preflightStyleDisabled), x = e.styleMountTarget || (t == null ? void 0 : t.styleMountTarget), h = z(() => {
      const {
        value: g
      } = r, {
        value: b
      } = o, m = b && Object.keys(b).length !== 0, C = g == null ? void 0 : g.name;
      return C ? m ? `${C}-${to(JSON.stringify(o.value))}` : C : m ? to(JSON.stringify(o.value)) : "";
    });
    return $e(nn, {
      mergedThemeHashRef: h,
      mergedBreakpointsRef: c,
      mergedRtlRef: u,
      mergedIconsRef: l,
      mergedComponentPropsRef: s,
      mergedBorderedRef: a,
      mergedNamespaceRef: i,
      mergedClsPrefixRef: d,
      mergedLocaleRef: z(() => {
        const {
          locale: g
        } = e;
        if (g !== null)
          return g === void 0 ? t == null ? void 0 : t.mergedLocaleRef.value : g;
      }),
      mergedDateLocaleRef: z(() => {
        const {
          dateLocale: g
        } = e;
        if (g !== null)
          return g === void 0 ? t == null ? void 0 : t.mergedDateLocaleRef.value : g;
      }),
      mergedHljsRef: z(() => {
        const {
          hljs: g
        } = e;
        return g === void 0 ? t == null ? void 0 : t.mergedHljsRef.value : g;
      }),
      mergedKatexRef: z(() => {
        const {
          katex: g
        } = e;
        return g === void 0 ? t == null ? void 0 : t.mergedKatexRef.value : g;
      }),
      mergedThemeRef: r,
      mergedThemeOverridesRef: o,
      inlineThemeDisabled: v || !1,
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
      class: `${this.mergedClsPrefix || Xo}-config-provider`
    }, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
  }
});
function CC(e) {
  const {
    boxShadow2: t
  } = e;
  return {
    menuBoxShadow: t
  };
}
const vl = {
  name: "Popselect",
  common: Xe,
  peers: {
    Popover: ur,
    InternalSelectMenu: ul
  },
  self: CC
}, Zu = "n-popselect", yC = F("popselect-menu", `
 box-shadow: var(--n-menu-box-shadow);
`), pl = {
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
}, Xs = Dn(pl), wC = ee({
  name: "PopselectPanel",
  props: pl,
  setup(e) {
    process.env.NODE_ENV !== "production" && et(() => {
      e.onChange !== void 0 && Pt("popselect", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const t = ge(Zu), {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("Popselect", "-pop-select", yC, vl, t.props, r), a = z(() => vi(e.options, Ku("value", "children")));
    function l(p, x) {
      const {
        onUpdateValue: h,
        "onUpdate:value": g,
        onChange: b
      } = e;
      h && ne(h, p, x), g && ne(g, p, x), b && ne(b, p, x);
    }
    function s(p) {
      u(p.key);
    }
    function d(p) {
      !Kt(p, "action") && !Kt(p, "empty") && !Kt(p, "header") && p.preventDefault();
    }
    function u(p) {
      const {
        value: {
          getNode: x
        }
      } = a;
      if (e.multiple)
        if (Array.isArray(e.value)) {
          const h = [], g = [];
          let b = !0;
          e.value.forEach((m) => {
            if (m === p) {
              b = !1;
              return;
            }
            const C = x(m);
            C && (h.push(C.key), g.push(C.rawNode));
          }), b && (h.push(p), g.push(x(p).rawNode)), l(h, g);
        } else {
          const h = x(p);
          h && l([p], [h.rawNode]);
        }
      else if (e.value === p && e.cancelable)
        l(null, null);
      else {
        const h = x(p);
        h && l(p, h.rawNode);
        const {
          "onUpdate:show": g,
          onUpdateShow: b
        } = t.props;
        g && ne(g, !1), b && ne(b, !1), t.setShow(!1);
      }
      bt(() => {
        t.syncPosition();
      });
    }
    Ne(oe(e, "options"), () => {
      bt(() => {
        t.syncPosition();
      });
    });
    const c = z(() => {
      const {
        self: {
          menuBoxShadow: p
        }
      } = i.value;
      return {
        "--n-menu-box-shadow": p
      };
    }), v = o ? Ge("select", void 0, c, t.props) : void 0;
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
    return (e = this.onRender) === null || e === void 0 || e.call(this), f(Mu, {
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
}), SC = Object.assign(Object.assign(Object.assign(Object.assign({}, ve.props), or(er, ["showArrow", "arrow"])), {
  placement: Object.assign(Object.assign({}, er.placement), {
    default: "bottom"
  }),
  trigger: {
    type: String,
    default: "hover"
  }
}), pl), BC = ee({
  name: "Popselect",
  props: SC,
  inheritAttrs: !1,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = ve("Popselect", "-popselect", void 0, vl, e, t), o = L(null);
    function i() {
      var s;
      (s = o.value) === null || s === void 0 || s.syncPosition();
    }
    function a(s) {
      var d;
      (d = o.value) === null || d === void 0 || d.setShow(s);
    }
    return $e(Zu, {
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
        return f(wC, Object.assign({}, s, {
          class: [s.class, r],
          style: [s.style, ...i]
        }, Cn(this.$props, Xs), {
          ref: Qd(o),
          onMouseenter: Zr([a, s.onMouseenter]),
          onMouseleave: Zr([l, s.onMouseleave])
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
    return f(cr, Object.assign({}, or(this.$props, Xs), t, {
      internalDeactivateImmediately: !0
    }), {
      trigger: () => {
        var r, o;
        return (o = (r = this.$slots).default) === null || o === void 0 ? void 0 : o.call(r);
      }
    });
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
const Ju = {
  name: "Select",
  common: Xe,
  peers: {
    InternalSelection: Nu,
    InternalSelectMenu: ul
  },
  self: kC
}, RC = O([F("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), F("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [xo({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]), FC = Object.assign(Object.assign({}, ve.props), {
  to: fn.propTo,
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
}), Qu = ee({
  name: "Select",
  props: FC,
  setup(e) {
    process.env.NODE_ENV !== "production" && et(() => {
      e.items !== void 0 && it("select", "`items` is deprecated, please use `options` instead."), e.onChange !== void 0 && it("select", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      mergedBorderedRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = ve("Select", "-select", RC, Ju, e, t), l = L(e.defaultValue), s = oe(e, "value"), d = Et(s, l), u = L(!1), c = L(""), v = Ma(e, ["items", "options"]), p = L([]), x = L([]), h = z(() => x.value.concat(p.value).concat(v.value)), g = z(() => {
      const {
        filter: k
      } = e;
      if (k) return k;
      const {
        labelField: W,
        valueField: J
      } = e;
      return (le, se) => {
        if (!se) return !1;
        const pe = se[W];
        if (typeof pe == "string")
          return Xi(le, pe);
        const me = se[J];
        return typeof me == "string" ? Xi(le, me) : typeof me == "number" ? Xi(le, String(me)) : !1;
      };
    }), b = z(() => {
      if (e.remote)
        return v.value;
      {
        const {
          value: k
        } = h, {
          value: W
        } = c;
        return !W.length || !e.filterable ? k : V1(k, g.value, W, e.childrenField);
      }
    }), m = z(() => {
      const {
        valueField: k,
        childrenField: W
      } = e, J = Ku(k, W);
      return vi(b.value, J);
    }), C = z(() => K1(h.value, e.valueField, e.childrenField)), S = L(!1), w = Et(oe(e, "show"), S), B = L(null), R = L(null), y = L(null), {
      localeRef: P
    } = Qn("Select"), D = z(() => {
      var k;
      return (k = e.placeholder) !== null && k !== void 0 ? k : P.value.placeholder;
    }), T = [], U = L(/* @__PURE__ */ new Map()), M = z(() => {
      const {
        fallbackOption: k
      } = e;
      if (k === void 0) {
        const {
          labelField: W,
          valueField: J
        } = e;
        return (le) => ({
          [W]: String(le),
          [J]: le
        });
      }
      return k === !1 ? !1 : (W) => Object.assign(k(W), {
        value: W
      });
    });
    function n(k) {
      const W = e.remote, {
        value: J
      } = U, {
        value: le
      } = C, {
        value: se
      } = M, pe = [];
      return k.forEach((me) => {
        if (le.has(me))
          pe.push(le.get(me));
        else if (W && J.has(me))
          pe.push(J.get(me));
        else if (se) {
          const Se = se(me);
          Se && pe.push(Se);
        }
      }), pe;
    }
    const $ = z(() => {
      if (e.multiple) {
        const {
          value: k
        } = d;
        return Array.isArray(k) ? n(k) : [];
      }
      return null;
    }), A = z(() => {
      const {
        value: k
      } = d;
      return !e.multiple && !Array.isArray(k) ? k === null ? null : n([k])[0] || null : null;
    }), N = Mn(e), {
      mergedSizeRef: I,
      mergedDisabledRef: V,
      mergedStatusRef: te
    } = N;
    function X(k, W) {
      const {
        onChange: J,
        "onUpdate:value": le,
        onUpdateValue: se
      } = e, {
        nTriggerFormChange: pe,
        nTriggerFormInput: me
      } = N;
      J && ne(J, k, W), se && ne(se, k, W), le && ne(le, k, W), l.value = k, pe(), me();
    }
    function K(k) {
      const {
        onBlur: W
      } = e, {
        nTriggerFormBlur: J
      } = N;
      W && ne(W, k), J();
    }
    function H() {
      const {
        onClear: k
      } = e;
      k && ne(k);
    }
    function q(k) {
      const {
        onFocus: W,
        showOnFocus: J
      } = e, {
        nTriggerFormFocus: le
      } = N;
      W && ne(W, k), le(), J && we();
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
    function ae() {
      var k;
      const {
        remote: W,
        multiple: J
      } = e;
      if (W) {
        const {
          value: le
        } = U;
        if (J) {
          const {
            valueField: se
          } = e;
          (k = $.value) === null || k === void 0 || k.forEach((pe) => {
            le.set(pe[se], pe);
          });
        } else {
          const se = A.value;
          se && le.set(se[e.valueField], se);
        }
      }
    }
    function fe(k) {
      const {
        onUpdateShow: W,
        "onUpdate:show": J
      } = e;
      W && ne(W, k), J && ne(J, k), S.value = k;
    }
    function we() {
      V.value || (fe(!0), S.value = !0, e.filterable && tt());
    }
    function G() {
      fe(!1);
    }
    function ue() {
      c.value = "", x.value = T;
    }
    const Re = L(!1);
    function be() {
      e.filterable && (Re.value = !0);
    }
    function Fe() {
      e.filterable && (Re.value = !1, w.value || ue());
    }
    function Pe() {
      V.value || (w.value ? e.filterable ? tt() : G() : we());
    }
    function at(k) {
      var W, J;
      !((J = (W = y.value) === null || W === void 0 ? void 0 : W.selfRef) === null || J === void 0) && J.contains(k.relatedTarget) || (u.value = !1, K(k), G());
    }
    function Ze(k) {
      q(k), u.value = !0;
    }
    function dt() {
      u.value = !0;
    }
    function ut(k) {
      var W;
      !((W = B.value) === null || W === void 0) && W.$el.contains(k.relatedTarget) || (u.value = !1, K(k), G());
    }
    function xe() {
      var k;
      (k = B.value) === null || k === void 0 || k.focus(), G();
    }
    function Ce(k) {
      var W;
      w.value && (!((W = B.value) === null || W === void 0) && W.$el.contains(Sr(k)) || G());
    }
    function ze(k) {
      if (!Array.isArray(k)) return [];
      if (M.value)
        return Array.from(k);
      {
        const {
          remote: W
        } = e, {
          value: J
        } = C;
        if (W) {
          const {
            value: le
          } = U;
          return k.filter((se) => J.has(se) || le.has(se));
        } else
          return k.filter((le) => J.has(le));
      }
    }
    function Me(k) {
      Ye(k.rawNode);
    }
    function Ye(k) {
      if (V.value) return;
      const {
        tag: W,
        remote: J,
        clearFilterAfterSelect: le,
        valueField: se
      } = e;
      if (W && !J) {
        const {
          value: pe
        } = x, me = pe[0] || null;
        if (me) {
          const Se = p.value;
          Se.length ? Se.push(me) : p.value = [me], x.value = T;
        }
      }
      if (J && U.value.set(k[se], k), e.multiple) {
        const pe = ze(d.value), me = pe.findIndex((Se) => Se === k[se]);
        if (~me) {
          if (pe.splice(me, 1), W && !J) {
            const Se = re(k[se]);
            ~Se && (p.value.splice(Se, 1), le && (c.value = ""));
          }
        } else
          pe.push(k[se]), le && (c.value = "");
        X(pe, n(pe));
      } else {
        if (W && !J) {
          const pe = re(k[se]);
          ~pe ? p.value = [p.value[pe]] : p.value = T;
        }
        ht(), G(), X(k[se], k);
      }
    }
    function re(k) {
      return p.value.findIndex((J) => J[e.valueField] === k);
    }
    function he(k) {
      w.value || we();
      const {
        value: W
      } = k.target;
      c.value = W;
      const {
        tag: J,
        remote: le
      } = e;
      if (Y(W), J && !le) {
        if (!W) {
          x.value = T;
          return;
        }
        const {
          onCreate: se
        } = e, pe = se ? se(W) : {
          [e.labelField]: W,
          [e.valueField]: W
        }, {
          valueField: me,
          labelField: Se
        } = e;
        v.value.some((Ie) => Ie[me] === pe[me] || Ie[Se] === pe[Se]) || p.value.some((Ie) => Ie[me] === pe[me] || Ie[Se] === pe[Se]) ? x.value = T : x.value = [pe];
      }
    }
    function Ee(k) {
      k.stopPropagation();
      const {
        multiple: W
      } = e;
      !W && e.filterable && G(), H(), W ? X([], []) : X(null, null);
    }
    function lt(k) {
      !Kt(k, "action") && !Kt(k, "empty") && !Kt(k, "header") && k.preventDefault();
    }
    function kt(k) {
      ie(k);
    }
    function Rt(k) {
      var W, J, le, se, pe;
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
          if (!(!((W = B.value) === null || W === void 0) && W.isComposing)) {
            if (w.value) {
              const me = (J = y.value) === null || J === void 0 ? void 0 : J.getPendingTmNode();
              me ? Me(me) : e.filterable || (G(), ht());
            } else if (we(), e.tag && Re.value) {
              const me = x.value[0];
              if (me) {
                const Se = me[e.valueField], {
                  value: Ie
                } = d;
                e.multiple && Array.isArray(Ie) && Ie.includes(Se) || Ye(me);
              }
            }
          }
          k.preventDefault();
          break;
        case "ArrowUp":
          if (k.preventDefault(), e.loading) return;
          w.value && ((le = y.value) === null || le === void 0 || le.prev());
          break;
        case "ArrowDown":
          if (k.preventDefault(), e.loading) return;
          w.value ? (se = y.value) === null || se === void 0 || se.next() : we();
          break;
        case "Escape":
          w.value && (p0(k), G()), (pe = B.value) === null || pe === void 0 || pe.focus();
          break;
      }
    }
    function ht() {
      var k;
      (k = B.value) === null || k === void 0 || k.focus();
    }
    function tt() {
      var k;
      (k = B.value) === null || k === void 0 || k.focusInput();
    }
    function mt() {
      var k;
      w.value && ((k = R.value) === null || k === void 0 || k.syncPosition());
    }
    ae(), Ne(oe(e, "options"), ae);
    const Je = {
      focus: () => {
        var k;
        (k = B.value) === null || k === void 0 || k.focus();
      },
      focusInput: () => {
        var k;
        (k = B.value) === null || k === void 0 || k.focusInput();
      },
      blur: () => {
        var k;
        (k = B.value) === null || k === void 0 || k.blur();
      },
      blurInput: () => {
        var k;
        (k = B.value) === null || k === void 0 || k.blurInput();
      }
    }, ce = z(() => {
      const {
        self: {
          menuBoxShadow: k
        }
      } = a.value;
      return {
        "--n-menu-box-shadow": k
      };
    }), Be = i ? Ge("select", void 0, ce, e) : void 0;
    return Object.assign(Object.assign({}, Je), {
      mergedStatus: te,
      mergedClsPrefix: t,
      mergedBordered: r,
      namespace: o,
      treeMate: m,
      isMounted: $r(),
      triggerRef: B,
      menuRef: y,
      pattern: c,
      uncontrolledShow: S,
      mergedShow: w,
      adjustedTo: fn(e),
      uncontrolledValue: l,
      mergedValue: d,
      followerRef: R,
      localizedPlaceholder: D,
      selectedOption: A,
      selectedOptions: $,
      mergedSize: I,
      mergedDisabled: V,
      focused: u,
      activeWithoutMenuOpen: Re,
      inlineThemeDisabled: i,
      onTriggerInputFocus: be,
      onTriggerInputBlur: Fe,
      handleTriggerOrMenuResize: mt,
      handleMenuFocus: dt,
      handleMenuBlur: ut,
      handleMenuTabOut: xe,
      handleTriggerClick: Pe,
      handleToggle: Me,
      handleDeleteOption: Ye,
      handlePatternInput: he,
      handleClear: Ee,
      handleTriggerBlur: at,
      handleTriggerFocus: Ze,
      handleKeydown: Rt,
      handleMenuAfterLeave: ue,
      handleMenuClickOutside: Ce,
      handleMenuScroll: kt,
      handleMenuKeydown: Rt,
      handleMenuMousedown: lt,
      mergedTheme: a,
      cssVars: i ? void 0 : ce,
      themeClass: Be == null ? void 0 : Be.themeClass,
      onRender: Be == null ? void 0 : Be.onRender
    });
  },
  render() {
    return f("div", {
      class: `${this.mergedClsPrefix}-select`
    }, f(_a, null, {
      default: () => [f(Na, null, {
        default: () => f(B1, {
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
      }), f(Wa, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === fn.tdkey,
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
            return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) === null || e === void 0 || e.call(this), un(f(Mu, Object.assign({}, this.menuProps, {
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
            }), this.displayDirective === "show" ? [[wr, this.mergedShow], [ro, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]] : [[ro, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), PC = {
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
function zC(e) {
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
    heightTiny: p,
    heightSmall: x,
    heightMedium: h
  } = e;
  return Object.assign(Object.assign({}, PC), {
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
const ec = {
  name: "Pagination",
  common: Xe,
  peers: {
    Select: Ju,
    Input: cl,
    Popselect: vl
  },
  self: zC
}, Ys = `
 background: var(--n-item-color-hover);
 color: var(--n-item-text-color-hover);
 border: var(--n-item-border-hover);
`, Zs = [_("button", `
 background: var(--n-button-color-hover);
 border: var(--n-button-border-hover);
 color: var(--n-button-icon-color-hover);
 `)], $C = F("pagination", `
 display: flex;
 vertical-align: middle;
 font-size: var(--n-item-font-size);
 flex-wrap: nowrap;
`, [F("pagination-prefix", `
 display: flex;
 align-items: center;
 margin: var(--n-prefix-margin);
 `), F("pagination-suffix", `
 display: flex;
 align-items: center;
 margin: var(--n-suffix-margin);
 `), O("> *:not(:first-child)", `
 margin: var(--n-item-margin);
 `), F("select", `
 width: var(--n-select-width);
 `), O("&.transition-disabled", [F("pagination-item", "transition: none!important;")]), F("pagination-quick-jumper", `
 white-space: nowrap;
 display: flex;
 color: var(--n-jumper-text-color);
 transition: color .3s var(--n-bezier);
 align-items: center;
 font-size: var(--n-jumper-font-size);
 `, [F("input", `
 margin: var(--n-input-margin);
 width: var(--n-input-width);
 `)]), F("pagination-item", `
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
 `, [_("button", `
 background: var(--n-button-color);
 color: var(--n-button-icon-color);
 border: var(--n-button-border);
 padding: 0;
 `, [F("base-icon", `
 font-size: var(--n-button-icon-size);
 `)]), qe("disabled", [_("hover", Ys, Zs), O("&:hover", Ys, Zs), O("&:active", `
 background: var(--n-item-color-pressed);
 color: var(--n-item-text-color-pressed);
 border: var(--n-item-border-pressed);
 `, [_("button", `
 background: var(--n-button-color-pressed);
 border: var(--n-button-border-pressed);
 color: var(--n-button-icon-color-pressed);
 `)]), _("active", `
 background: var(--n-item-color-active);
 color: var(--n-item-text-color-active);
 border: var(--n-item-border-active);
 `, [O("&:hover", `
 background: var(--n-item-color-active-hover);
 `)])]), _("disabled", `
 cursor: not-allowed;
 color: var(--n-item-text-color-disabled);
 `, [_("active, button", `
 background-color: var(--n-item-color-disabled);
 border: var(--n-item-border-disabled);
 `)])]), _("disabled", `
 cursor: not-allowed;
 `, [F("pagination-quick-jumper", `
 color: var(--n-jumper-text-color-disabled);
 `)]), _("simple", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 `, [F("pagination-quick-jumper", [F("input", `
 margin: 0;
 `)])])]);
function tc(e) {
  var t;
  if (!e) return 10;
  const {
    defaultPageSize: r
  } = e;
  if (r !== void 0) return r;
  const o = (t = e.pageSizes) === null || t === void 0 ? void 0 : t[0];
  return typeof o == "number" ? o : (o == null ? void 0 : o.value) || 10;
}
function AC(e, t, r, o) {
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
  const p = (r - 5) / 2;
  v += Math.ceil(p), v = Math.min(Math.max(v, d + r - 3), u - 2), c -= Math.floor(p), c = Math.max(Math.min(c, u - r + 3), d + 2);
  let x = !1, h = !1;
  c > d + 2 && (x = !0), v < u - 2 && (h = !0);
  const g = [];
  g.push({
    type: "page",
    label: 1,
    active: e === 1,
    mayBeFastBackward: !1,
    mayBeFastForward: !1
  }), x ? (i = !0, l = c - 1, g.push({
    type: "fast-backward",
    active: !1,
    label: void 0,
    options: o ? Js(d + 1, c - 1) : null
  })) : u >= d + 1 && g.push({
    type: "page",
    label: d + 1,
    mayBeFastBackward: !0,
    mayBeFastForward: !1,
    active: e === d + 1
  });
  for (let b = c; b <= v; ++b)
    g.push({
      type: "page",
      label: b,
      mayBeFastBackward: !1,
      mayBeFastForward: !1,
      active: e === b
    });
  return h ? (a = !0, s = v + 1, g.push({
    type: "fast-forward",
    active: !1,
    label: void 0,
    options: o ? Js(v + 1, u - 1) : null
  })) : v === u - 2 && g[g.length - 1].label !== u - 1 && g.push({
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
function Js(e, t) {
  const r = [];
  for (let o = e; o <= t; ++o)
    r.push({
      label: `${o}`,
      value: o
    });
  return r;
}
const DC = Object.assign(Object.assign({}, ve.props), {
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
  to: fn.propTo,
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
}), nc = ee({
  name: "Pagination",
  props: DC,
  setup(e) {
    process.env.NODE_ENV !== "production" && et(() => {
      e.pageCount !== void 0 && e.itemCount !== void 0 && Pt("pagination", "`page-count` and `item-count` should't be specified together. Only `item-count` will take effect."), e.onPageSizeChange && it("pagination", "`on-page-size-change` is deprecated, please use `on-update:page-size` instead."), e.onChange && it("pagination", "`on-change` is deprecated, please use `on-update:page` instead.");
    });
    const {
      mergedComponentPropsRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = ve("Pagination", "-pagination", $C, ec, e, r), {
      localeRef: l
    } = Qn("Pagination"), s = L(null), d = L(e.defaultPage), u = L(tc(e)), c = Et(oe(e, "page"), d), v = Et(oe(e, "pageSize"), u), p = z(() => {
      const {
        itemCount: G
      } = e;
      if (G !== void 0)
        return Math.max(1, Math.ceil(G / v.value));
      const {
        pageCount: ue
      } = e;
      return ue !== void 0 ? Math.max(ue, 1) : 1;
    }), x = L("");
    et(() => {
      e.simple, x.value = String(c.value);
    });
    const h = L(!1), g = L(!1), b = L(!1), m = L(!1), C = () => {
      e.disabled || (h.value = !0, A());
    }, S = () => {
      e.disabled || (h.value = !1, A());
    }, w = () => {
      g.value = !0, A();
    }, B = () => {
      g.value = !1, A();
    }, R = (G) => {
      N(G);
    }, y = z(() => AC(c.value, p.value, e.pageSlot, e.showQuickJumpDropdown));
    et(() => {
      y.value.hasFastBackward ? y.value.hasFastForward || (h.value = !1, b.value = !1) : (g.value = !1, m.value = !1);
    });
    const P = z(() => {
      const G = l.value.selectionSuffix;
      return e.pageSizes.map((ue) => typeof ue == "number" ? {
        label: `${ue} / ${G}`,
        value: ue
      } : ue);
    }), D = z(() => {
      var G, ue;
      return ((ue = (G = t == null ? void 0 : t.value) === null || G === void 0 ? void 0 : G.Pagination) === null || ue === void 0 ? void 0 : ue.inputSize) || ls(e.size);
    }), T = z(() => {
      var G, ue;
      return ((ue = (G = t == null ? void 0 : t.value) === null || G === void 0 ? void 0 : G.Pagination) === null || ue === void 0 ? void 0 : ue.selectSize) || ls(e.size);
    }), U = z(() => (c.value - 1) * v.value), M = z(() => {
      const G = c.value * v.value - 1, {
        itemCount: ue
      } = e;
      return ue !== void 0 && G > ue - 1 ? ue - 1 : G;
    }), n = z(() => {
      const {
        itemCount: G
      } = e;
      return G !== void 0 ? G : (e.pageCount || 1) * v.value;
    }), $ = Bt("Pagination", i, r);
    function A() {
      bt(() => {
        var G;
        const {
          value: ue
        } = s;
        ue && (ue.classList.add("transition-disabled"), (G = s.value) === null || G === void 0 || G.offsetWidth, ue.classList.remove("transition-disabled"));
      });
    }
    function N(G) {
      if (G === c.value) return;
      const {
        "onUpdate:page": ue,
        onUpdatePage: Re,
        onChange: be,
        simple: Fe
      } = e;
      ue && ne(ue, G), Re && ne(Re, G), be && ne(be, G), d.value = G, Fe && (x.value = String(G));
    }
    function I(G) {
      if (G === v.value) return;
      const {
        "onUpdate:pageSize": ue,
        onUpdatePageSize: Re,
        onPageSizeChange: be
      } = e;
      ue && ne(ue, G), Re && ne(Re, G), be && ne(be, G), u.value = G, p.value < c.value && N(p.value);
    }
    function V() {
      if (e.disabled) return;
      const G = Math.min(c.value + 1, p.value);
      N(G);
    }
    function te() {
      if (e.disabled) return;
      const G = Math.max(c.value - 1, 1);
      N(G);
    }
    function X() {
      if (e.disabled) return;
      const G = Math.min(y.value.fastForwardTo, p.value);
      N(G);
    }
    function K() {
      if (e.disabled) return;
      const G = Math.max(y.value.fastBackwardTo, 1);
      N(G);
    }
    function H(G) {
      I(G);
    }
    function q() {
      const G = Number.parseInt(x.value);
      Number.isNaN(G) || (N(Math.max(1, Math.min(G, p.value))), e.simple || (x.value = ""));
    }
    function Y() {
      q();
    }
    function ie(G) {
      if (!e.disabled)
        switch (G.type) {
          case "page":
            N(G.label);
            break;
          case "fast-backward":
            K();
            break;
          case "fast-forward":
            X();
            break;
        }
    }
    function ae(G) {
      x.value = G.replace(/\D+/g, "");
    }
    et(() => {
      c.value, v.value, A();
    });
    const fe = z(() => {
      const {
        size: G
      } = e, {
        self: {
          buttonBorder: ue,
          buttonBorderHover: Re,
          buttonBorderPressed: be,
          buttonIconColor: Fe,
          buttonIconColorHover: Pe,
          buttonIconColorPressed: at,
          itemTextColor: Ze,
          itemTextColorHover: dt,
          itemTextColorPressed: ut,
          itemTextColorActive: xe,
          itemTextColorDisabled: Ce,
          itemColor: ze,
          itemColorHover: Me,
          itemColorPressed: Ye,
          itemColorActive: re,
          itemColorActiveHover: he,
          itemColorDisabled: Ee,
          itemBorder: lt,
          itemBorderHover: kt,
          itemBorderPressed: Rt,
          itemBorderActive: ht,
          itemBorderDisabled: tt,
          itemBorderRadius: mt,
          jumperTextColor: Je,
          jumperTextColorDisabled: ce,
          buttonColor: Be,
          buttonColorHover: k,
          buttonColorPressed: W,
          [Z("itemPadding", G)]: J,
          [Z("itemMargin", G)]: le,
          [Z("inputWidth", G)]: se,
          [Z("selectWidth", G)]: pe,
          [Z("inputMargin", G)]: me,
          [Z("selectMargin", G)]: Se,
          [Z("jumperFontSize", G)]: Ie,
          [Z("prefixMargin", G)]: nt,
          [Z("suffixMargin", G)]: je,
          [Z("itemSize", G)]: $t,
          [Z("buttonIconSize", G)]: Tt,
          [Z("itemFontSize", G)]: Ot,
          [`${Z("itemMargin", G)}Rtl`]: Nt,
          [`${Z("inputMargin", G)}Rtl`]: Ht
        },
        common: {
          cubicBezierEaseInOut: Yt
        }
      } = a.value;
      return {
        "--n-prefix-margin": nt,
        "--n-suffix-margin": je,
        "--n-item-font-size": Ot,
        "--n-select-width": pe,
        "--n-select-margin": Se,
        "--n-input-width": se,
        "--n-input-margin": me,
        "--n-input-margin-rtl": Ht,
        "--n-item-size": $t,
        "--n-item-text-color": Ze,
        "--n-item-text-color-disabled": Ce,
        "--n-item-text-color-hover": dt,
        "--n-item-text-color-active": xe,
        "--n-item-text-color-pressed": ut,
        "--n-item-color": ze,
        "--n-item-color-hover": Me,
        "--n-item-color-disabled": Ee,
        "--n-item-color-active": re,
        "--n-item-color-active-hover": he,
        "--n-item-color-pressed": Ye,
        "--n-item-border": lt,
        "--n-item-border-hover": kt,
        "--n-item-border-disabled": tt,
        "--n-item-border-active": ht,
        "--n-item-border-pressed": Rt,
        "--n-item-padding": J,
        "--n-item-border-radius": mt,
        "--n-bezier": Yt,
        "--n-jumper-font-size": Ie,
        "--n-jumper-text-color": Je,
        "--n-jumper-text-color-disabled": ce,
        "--n-item-margin": le,
        "--n-item-margin-rtl": Nt,
        "--n-button-icon-size": Tt,
        "--n-button-icon-color": Fe,
        "--n-button-icon-color-hover": Pe,
        "--n-button-icon-color-pressed": at,
        "--n-button-color-hover": k,
        "--n-button-color": Be,
        "--n-button-color-pressed": W,
        "--n-button-border": ue,
        "--n-button-border-hover": Re,
        "--n-button-border-pressed": be
      };
    }), we = o ? Ge("pagination", z(() => {
      let G = "";
      const {
        size: ue
      } = e;
      return G += ue[0], G;
    }), fe, e) : void 0;
    return {
      rtlEnabled: $,
      mergedClsPrefix: r,
      locale: l,
      selfRef: s,
      mergedPage: c,
      pageItems: z(() => y.value.items),
      mergedItemCount: n,
      jumperValue: x,
      pageSizeOptions: P,
      mergedPageSize: v,
      inputSize: D,
      selectSize: T,
      mergedTheme: a,
      mergedPageCount: p,
      startIndex: U,
      endIndex: M,
      showFastForwardMenu: b,
      showFastBackwardMenu: m,
      fastForwardActive: h,
      fastBackwardActive: g,
      handleMenuSelect: R,
      handleFastForwardMouseenter: C,
      handleFastForwardMouseleave: S,
      handleFastBackwardMouseenter: w,
      handleFastBackwardMouseleave: B,
      handleJumperInput: ae,
      handleBackwardClick: te,
      handleForwardClick: V,
      handlePageItemClick: ie,
      handleSizePickerChange: H,
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
      selectSize: p,
      mergedPageSize: x,
      pageSizeOptions: h,
      jumperValue: g,
      simple: b,
      prev: m,
      next: C,
      prefix: S,
      suffix: w,
      label: B,
      goto: R,
      handleJumperInput: y,
      handleSizePickerChange: P,
      handleBackwardClick: D,
      handlePageItemClick: T,
      handleForwardClick: U,
      handleQuickJumperChange: M,
      onRender: n
    } = this;
    n == null || n();
    const $ = e.prefix || S, A = e.suffix || w, N = m || e.prev, I = C || e.next, V = B || e.label;
    return f("div", {
      ref: "selfRef",
      class: [`${t}-pagination`, this.themeClass, this.rtlEnabled && `${t}-pagination--rtl`, r && `${t}-pagination--disabled`, b && `${t}-pagination--simple`],
      style: o
    }, $ ? f("div", {
      class: `${t}-pagination-prefix`
    }, $({
      page: i,
      pageSize: x,
      pageCount: a,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      itemCount: this.mergedItemCount
    })) : null, this.displayOrder.map((te) => {
      switch (te) {
        case "pages":
          return f(Qe, null, f("div", {
            class: [`${t}-pagination-item`, !N && `${t}-pagination-item--button`, (i <= 1 || i > a || r) && `${t}-pagination-item--disabled`],
            onClick: D
          }, N ? N({
            page: i,
            pageSize: x,
            pageCount: a,
            startIndex: this.startIndex,
            endIndex: this.endIndex,
            itemCount: this.mergedItemCount
          }) : f(vt, {
            clsPrefix: t
          }, {
            default: () => this.rtlEnabled ? f(Ls, null) : f(Os, null)
          })), b ? f(Qe, null, f("div", {
            class: `${t}-pagination-quick-jumper`
          }, f(xa, {
            value: g,
            onUpdateValue: y,
            size: v,
            placeholder: "",
            disabled: r,
            theme: u.peers.Input,
            themeOverrides: u.peerOverrides.Input,
            onChange: M
          })), " /", " ", a) : l.map((X, K) => {
            let H, q, Y;
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
                const we = this.fastForwardActive ? f(vt, {
                  clsPrefix: t
                }, {
                  default: () => this.rtlEnabled ? f(Ms, null) : f(Is, null)
                }) : f(vt, {
                  clsPrefix: t
                }, {
                  default: () => f(_s, null)
                });
                V ? H = V({
                  type: "fast-forward",
                  node: we,
                  active: this.fastForwardActive || this.showFastForwardMenu
                }) : H = we, q = this.handleFastForwardMouseenter, Y = this.handleFastForwardMouseleave;
                break;
              case "fast-backward":
                const G = this.fastBackwardActive ? f(vt, {
                  clsPrefix: t
                }, {
                  default: () => this.rtlEnabled ? f(Is, null) : f(Ms, null)
                }) : f(vt, {
                  clsPrefix: t
                }, {
                  default: () => f(_s, null)
                });
                V ? H = V({
                  type: "fast-backward",
                  node: G,
                  active: this.fastBackwardActive || this.showFastBackwardMenu
                }) : H = G, q = this.handleFastBackwardMouseenter, Y = this.handleFastBackwardMouseleave;
                break;
            }
            const ae = f("div", {
              key: K,
              class: [`${t}-pagination-item`, X.active && `${t}-pagination-item--active`, ie !== "page" && (ie === "fast-backward" && this.showFastBackwardMenu || ie === "fast-forward" && this.showFastForwardMenu) && `${t}-pagination-item--hover`, r && `${t}-pagination-item--disabled`, ie === "page" && `${t}-pagination-item--clickable`],
              onClick: () => {
                T(X);
              },
              onMouseenter: q,
              onMouseleave: Y
            }, H);
            if (ie === "page" && !X.mayBeFastBackward && !X.mayBeFastForward)
              return ae;
            {
              const fe = X.type === "page" ? X.mayBeFastBackward ? "fast-backward" : "fast-forward" : X.type;
              return X.type !== "page" && !X.options ? ae : f(BC, {
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
            class: [`${t}-pagination-item`, !I && `${t}-pagination-item--button`, {
              [`${t}-pagination-item--disabled`]: i < 1 || i >= a || r
            }],
            onClick: U
          }, I ? I({
            page: i,
            pageSize: x,
            pageCount: a,
            itemCount: this.mergedItemCount,
            startIndex: this.startIndex,
            endIndex: this.endIndex
          }) : f(vt, {
            clsPrefix: t
          }, {
            default: () => this.rtlEnabled ? f(Os, null) : f(Ls, null)
          })));
        case "size-picker":
          return !b && s ? f(Qu, Object.assign({
            consistentMenuWidth: !1,
            placeholder: "",
            showCheckmark: !1,
            to: this.to
          }, this.selectProps, {
            size: p,
            options: h,
            value: x,
            disabled: r,
            theme: u.peers.Select,
            themeOverrides: u.peerOverrides.Select,
            onUpdateValue: P
          })) : null;
        case "quick-jumper":
          return !b && d ? f("div", {
            class: `${t}-pagination-quick-jumper`
          }, R ? R() : Xt(this.$slots.goto, () => [c.goto]), f(xa, {
            value: g,
            onUpdateValue: y,
            size: v,
            placeholder: "",
            disabled: r,
            theme: u.peers.Input,
            themeOverrides: u.peerOverrides.Input,
            onChange: M
          })) : null;
        default:
          return null;
      }
    }), A ? f("div", {
      class: `${t}-pagination-suffix`
    }, A({
      page: i,
      pageSize: x,
      pageCount: a,
      startIndex: this.startIndex,
      endIndex: this.endIndex,
      itemCount: this.mergedItemCount
    })) : null);
  }
}), EC = {
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
function TC(e) {
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
    heightSmall: p,
    heightMedium: x,
    heightLarge: h,
    heightHuge: g,
    textColor3: b,
    opacityDisabled: m
  } = e;
  return Object.assign(Object.assign({}, EC), {
    optionHeightSmall: p,
    optionHeightMedium: x,
    optionHeightLarge: h,
    optionHeightHuge: g,
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
    optionOpacityDisabled: m
  });
}
const rc = {
  name: "Dropdown",
  common: Xe,
  peers: {
    Popover: ur
  },
  self: TC
}, OC = {
  padding: "8px 14px"
};
function MC(e) {
  const {
    borderRadius: t,
    boxShadow2: r,
    baseColor: o
  } = e;
  return Object.assign(Object.assign({}, OC), {
    borderRadius: t,
    boxShadow: r,
    color: Ue(o, "rgba(0, 0, 0, .85)"),
    textColor: o
  });
}
const oc = {
  name: "Tooltip",
  common: Xe,
  peers: {
    Popover: ur
  },
  self: MC
}, ic = {
  name: "Ellipsis",
  common: Xe,
  peers: {
    Tooltip: oc
  }
}, IC = {
  radioSizeSmall: "14px",
  radioSizeMedium: "16px",
  radioSizeLarge: "18px",
  labelPadding: "0 8px",
  labelFontWeight: "400"
};
function LC(e) {
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
    heightSmall: p,
    heightMedium: x,
    heightLarge: h,
    lineHeight: g
  } = e;
  return Object.assign(Object.assign({}, IC), {
    labelLineHeight: g,
    buttonHeightSmall: p,
    buttonHeightMedium: x,
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
const gl = {
  name: "Radio",
  common: Xe,
  self: LC
}, _C = {
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
function NC(e) {
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
    lineHeight: p,
    fontSizeSmall: x,
    fontSizeMedium: h,
    fontSizeLarge: g,
    dividerColor: b,
    heightSmall: m,
    opacityDisabled: C,
    tableColorStriped: S
  } = e;
  return Object.assign(Object.assign({}, _C), {
    actionDividerColor: b,
    lineHeight: p,
    borderRadius: v,
    fontSizeSmall: x,
    fontSizeMedium: h,
    fontSizeLarge: g,
    borderColor: Ue(t, b),
    tdColorHover: Ue(t, s),
    tdColorSorting: Ue(t, s),
    tdColorStriped: Ue(t, S),
    thColor: Ue(t, l),
    thColorHover: Ue(Ue(t, l), s),
    thColorSorting: Ue(Ue(t, l), s),
    tdColor: t,
    tdTextColor: i,
    thTextColor: a,
    thFontWeight: c,
    thButtonColorHover: s,
    thIconColor: d,
    thIconColorActive: u,
    // modal
    borderColorModal: Ue(r, b),
    tdColorHoverModal: Ue(r, s),
    tdColorSortingModal: Ue(r, s),
    tdColorStripedModal: Ue(r, S),
    thColorModal: Ue(r, l),
    thColorHoverModal: Ue(Ue(r, l), s),
    thColorSortingModal: Ue(Ue(r, l), s),
    tdColorModal: r,
    // popover
    borderColorPopover: Ue(o, b),
    tdColorHoverPopover: Ue(o, s),
    tdColorSortingPopover: Ue(o, s),
    tdColorStripedPopover: Ue(o, S),
    thColorPopover: Ue(o, l),
    thColorHoverPopover: Ue(Ue(o, l), s),
    thColorSortingPopover: Ue(Ue(o, l), s),
    tdColorPopover: o,
    boxShadowBefore: "inset -12px 0 8px -12px rgba(0, 0, 0, .18)",
    boxShadowAfter: "inset 12px 0 8px -12px rgba(0, 0, 0, .18)",
    // loading
    loadingColor: u,
    loadingSize: m,
    opacityLoading: C
  });
}
const HC = {
  name: "DataTable",
  common: Xe,
  peers: {
    Button: pi,
    Checkbox: qu,
    Radio: gl,
    Pagination: ec,
    Scrollbar: bo,
    Empty: dl,
    Popover: ur,
    Ellipsis: ic,
    Dropdown: rc
  },
  self: NC
}, jC = Object.assign(Object.assign({}, ve.props), {
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
}), rn = "n-data-table", ac = 40, lc = 40;
function Qs(e) {
  if (e.type === "selection")
    return e.width === void 0 ? ac : Ft(e.width);
  if (e.type === "expand")
    return e.width === void 0 ? lc : Ft(e.width);
  if (!("children" in e))
    return typeof e.width == "string" ? Ft(e.width) : e.width;
}
function WC(e) {
  var t, r;
  if (e.type === "selection")
    return gt((t = e.width) !== null && t !== void 0 ? t : ac);
  if (e.type === "expand")
    return gt((r = e.width) !== null && r !== void 0 ? r : lc);
  if (!("children" in e))
    return gt(e.width);
}
function tn(e) {
  return e.type === "selection" ? "__n_selection__" : e.type === "expand" ? "__n_expand__" : e.key;
}
function ed(e) {
  return e && (typeof e == "object" ? Object.assign({}, e) : e);
}
function VC(e) {
  return e === "ascend" ? 1 : e === "descend" ? -1 : 0;
}
function KC(e, t, r) {
  return r !== void 0 && (e = Math.min(e, typeof r == "number" ? r : Number.parseFloat(r))), t !== void 0 && (e = Math.max(e, typeof t == "number" ? t : Number.parseFloat(t))), e;
}
function UC(e, t) {
  if (t !== void 0)
    return {
      width: t,
      minWidth: t,
      maxWidth: t
    };
  const r = WC(e), {
    minWidth: o,
    maxWidth: i
  } = e;
  return {
    width: r,
    minWidth: gt(o) || r,
    maxWidth: gt(i)
  };
}
function qC(e, t, r) {
  return typeof r == "function" ? r(e, t) : r || "";
}
function Yi(e) {
  return e.filterOptionValues !== void 0 || e.filterOptionValue === void 0 && e.defaultFilterOptionValues !== void 0;
}
function Zi(e) {
  return "children" in e ? !1 : !!e.sorter;
}
function sc(e) {
  return "children" in e && e.children.length ? !1 : !!e.resizable;
}
function td(e) {
  return "children" in e ? !1 : !!e.filter && (!!e.filterOptions || !!e.renderFilterMenu);
}
function nd(e) {
  if (e) {
    if (e === "descend") return "ascend";
  } else return "descend";
  return !1;
}
function GC(e, t) {
  return e.sorter === void 0 ? null : t === null || t.columnKey !== e.key ? {
    columnKey: e.key,
    sorter: e.sorter,
    order: nd(!1)
  } : Object.assign(Object.assign({}, t), {
    order: nd(t.order)
  });
}
function dc(e, t) {
  return t.find((r) => r.columnKey === e.key && r.order) !== void 0;
}
function XC(e) {
  return typeof e == "string" ? e.replace(/,/g, "\\,") : e == null ? "" : `${e}`.replace(/,/g, "\\,");
}
function YC(e, t, r, o) {
  const i = e.filter((s) => s.type !== "expand" && s.type !== "selection" && s.allowExport !== !1), a = i.map((s) => o ? o(s) : s.title).join(","), l = t.map((s) => i.map((d) => r ? r(s[d.key], s, d) : XC(s[d.key])).join(","));
  return [a, ...l].join(`
`);
}
const ZC = ee({
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
    } = ge(rn);
    return () => {
      const {
        rowKey: o
      } = e;
      return f(hl, {
        privateInsideTable: !0,
        disabled: e.disabled,
        indeterminate: r.value.has(o),
        checked: t.value.has(o),
        onUpdateChecked: e.onUpdateChecked
      });
    };
  }
}), JC = F("radio", `
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
`, [_("checked", [E("dot", `
 background-color: var(--n-color-active);
 `)]), E("dot-wrapper", `
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `), F("radio-input", `
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
 `), E("dot", `
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
 `), _("checked", {
  boxShadow: "var(--n-box-shadow-active)"
}, [O("&::before", `
 opacity: 1;
 transform: scale(1);
 `)])]), E("label", `
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `), qe("disabled", `
 cursor: pointer;
 `, [O("&:hover", [E("dot", {
  boxShadow: "var(--n-box-shadow-hover)"
})]), _("focus", [O("&:not(:active)", [E("dot", {
  boxShadow: "var(--n-box-shadow-focus)"
})])])]), _("disabled", `
 cursor: not-allowed;
 `, [E("dot", {
  boxShadow: "var(--n-box-shadow-disabled)",
  backgroundColor: "var(--n-color-disabled)"
}, [O("&::before", {
  backgroundColor: "var(--n-dot-color-disabled)"
}), _("checked", `
 opacity: 1;
 `)]), E("label", {
  color: "var(--n-text-color-disabled)"
}), F("radio-input", `
 cursor: not-allowed;
 `)])]), QC = {
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
}, uc = "n-radio-group";
function ey(e) {
  process.env.NODE_ENV !== "production" && et(() => {
    e.checkedValue !== void 0 && it("radio", "`checked-value` is deprecated, please use `checked` instead.");
  });
  const t = ge(uc, null), r = Mn(e, {
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
  } = r, a = L(null), l = L(null), s = L(e.defaultChecked), d = oe(e, "checked"), u = Et(d, s), c = Ve(() => t ? t.valueRef.value === e.value : u.value), v = Ve(() => {
    const {
      name: C
    } = e;
    if (C !== void 0) return C;
    if (t) return t.nameRef.value;
  }), p = L(!1);
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
        nTriggerFormChange: B
      } = r;
      C && ne(C, !0), S && ne(S, !0), w(), B(), s.value = !0;
    }
  }
  function h() {
    i.value || c.value || x();
  }
  function g() {
    h(), a.value && (a.value.checked = c.value);
  }
  function b() {
    p.value = !1;
  }
  function m() {
    p.value = !0;
  }
  return {
    mergedClsPrefix: t ? t.mergedClsPrefixRef : Ae(e).mergedClsPrefixRef,
    inputRef: a,
    labelRef: l,
    mergedName: v,
    mergedDisabled: i,
    renderSafeChecked: c,
    focus: p,
    mergedSize: o,
    handleRadioInputChange: g,
    handleRadioInputBlur: b,
    handleRadioInputFocus: m
  };
}
const ty = Object.assign(Object.assign({}, ve.props), QC), cc = ee({
  name: "Radio",
  props: ty,
  setup(e) {
    const t = ey(e), r = ve("Radio", "-radio", JC, gl, e, t.mergedClsPrefix), o = z(() => {
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
          boxShadowActive: p,
          boxShadowDisabled: x,
          boxShadowFocus: h,
          boxShadowHover: g,
          color: b,
          colorDisabled: m,
          colorActive: C,
          textColor: S,
          textColorDisabled: w,
          dotColorActive: B,
          dotColorDisabled: R,
          labelPadding: y,
          labelLineHeight: P,
          labelFontWeight: D,
          [Z("fontSize", u)]: T,
          [Z("radioSize", u)]: U
        }
      } = r.value;
      return {
        "--n-bezier": c,
        "--n-label-line-height": P,
        "--n-label-font-weight": D,
        "--n-box-shadow": v,
        "--n-box-shadow-active": p,
        "--n-box-shadow-disabled": x,
        "--n-box-shadow-focus": h,
        "--n-box-shadow-hover": g,
        "--n-color": b,
        "--n-color-active": C,
        "--n-color-disabled": m,
        "--n-dot-color-active": B,
        "--n-dot-color-disabled": R,
        "--n-font-size": T,
        "--n-radio-size": U,
        "--n-text-color": S,
        "--n-text-color-disabled": w,
        "--n-label-padding": y
      };
    }), {
      inlineThemeDisabled: i,
      mergedClsPrefixRef: a,
      mergedRtlRef: l
    } = Ae(e), s = Bt("Radio", l, a), d = i ? Ge("radio", z(() => t.mergedSize.value[0]), o, e) : void 0;
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
    })), He(e.default, (i) => !i && !o ? null : f("div", {
      ref: "labelRef",
      class: `${t}-radio__label`
    }, i || o)));
  }
}), ny = F("radio-group", `
 display: inline-block;
 font-size: var(--n-font-size);
`, [E("splitor", `
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `, [_("checked", {
  backgroundColor: "var(--n-button-border-color-active)"
}), _("disabled", {
  opacity: "var(--n-opacity-disabled)"
})]), _("button-group", `
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [F("radio-button", {
  height: "var(--n-height)",
  lineHeight: "var(--n-height)"
}), E("splitor", {
  height: "var(--n-height)"
})]), F("radio-button", `
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
 `, [F("radio-input", `
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
 `), E("state-border", `
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
 `, [E("state-border", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]), O("&:last-child", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `, [E("state-border", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]), qe("disabled", `
 cursor: pointer;
 `, [O("&:hover", [E("state-border", `
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `), qe("checked", {
  color: "var(--n-button-text-color-hover)"
})]), _("focus", [O("&:not(:active)", [E("state-border", {
  boxShadow: "var(--n-button-box-shadow-focus)"
})])])]), _("checked", `
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `), _("disabled", `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);
function ry(e, t, r) {
  var o;
  const i = [];
  let a = !1;
  for (let l = 0; l < e.length; ++l) {
    const s = e[l], d = (o = s.type) === null || o === void 0 ? void 0 : o.name;
    if (d === "RadioButton" && (a = !0), process.env.NODE_ENV !== "production" && a && d !== "RadioButton") {
      Pt("radio-group", "`n-radio-group` in button mode only takes `n-radio-button` as children.");
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
      const c = i[i.length - 1].props, v = t === c.value, p = c.disabled, x = t === u.value, h = u.disabled, g = (v ? 2 : 0) + (p ? 0 : 1), b = (x ? 2 : 0) + (h ? 0 : 1), m = {
        [`${r}-radio-group__splitor--disabled`]: p,
        [`${r}-radio-group__splitor--checked`]: v
      }, C = {
        [`${r}-radio-group__splitor--disabled`]: h,
        [`${r}-radio-group__splitor--checked`]: x
      }, S = g < b ? C : m;
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
const oy = Object.assign(Object.assign({}, ve.props), {
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
}), iy = ee({
  name: "RadioGroup",
  props: oy,
  setup(e) {
    const t = L(null), {
      mergedSizeRef: r,
      mergedDisabledRef: o,
      nTriggerFormChange: i,
      nTriggerFormInput: a,
      nTriggerFormBlur: l,
      nTriggerFormFocus: s
    } = Mn(e), {
      mergedClsPrefixRef: d,
      inlineThemeDisabled: u,
      mergedRtlRef: c
    } = Ae(e), v = ve("Radio", "-radio-group", ny, gl, e, d), p = L(e.defaultValue), x = oe(e, "value"), h = Et(x, p);
    function g(B) {
      const {
        onUpdateValue: R,
        "onUpdate:value": y
      } = e;
      R && ne(R, B), y && ne(y, B), p.value = B, i(), a();
    }
    function b(B) {
      const {
        value: R
      } = t;
      R && (R.contains(B.relatedTarget) || s());
    }
    function m(B) {
      const {
        value: R
      } = t;
      R && (R.contains(B.relatedTarget) || l());
    }
    $e(uc, {
      mergedClsPrefixRef: d,
      nameRef: oe(e, "name"),
      valueRef: h,
      disabledRef: o,
      mergedSizeRef: r,
      doUpdateValue: g
    });
    const C = Bt("Radio", c, d), S = z(() => {
      const {
        value: B
      } = r, {
        common: {
          cubicBezierEaseInOut: R
        },
        self: {
          buttonBorderColor: y,
          buttonBorderColorActive: P,
          buttonBorderRadius: D,
          buttonBoxShadow: T,
          buttonBoxShadowFocus: U,
          buttonBoxShadowHover: M,
          buttonColor: n,
          buttonColorActive: $,
          buttonTextColor: A,
          buttonTextColorActive: N,
          buttonTextColorHover: I,
          opacityDisabled: V,
          [Z("buttonHeight", B)]: te,
          [Z("fontSize", B)]: X
        }
      } = v.value;
      return {
        "--n-font-size": X,
        "--n-bezier": R,
        "--n-button-border-color": y,
        "--n-button-border-color-active": P,
        "--n-button-border-radius": D,
        "--n-button-box-shadow": T,
        "--n-button-box-shadow-focus": U,
        "--n-button-box-shadow-hover": M,
        "--n-button-color": n,
        "--n-button-color-active": $,
        "--n-button-text-color": A,
        "--n-button-text-color-hover": I,
        "--n-button-text-color-active": N,
        "--n-height": te,
        "--n-opacity-disabled": V
      };
    }), w = u ? Ge("radio-group", z(() => r.value[0]), S, e) : void 0;
    return {
      selfElRef: t,
      rtlEnabled: C,
      mergedClsPrefix: d,
      mergedValue: h,
      handleFocusout: m,
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
    } = ry(Go(m0(this)), t, r);
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      onFocusin: o,
      onFocusout: i,
      ref: "selfElRef",
      class: [`${r}-radio-group`, this.rtlEnabled && `${r}-radio-group--rtl`, this.themeClass, l && `${r}-radio-group--button-group`],
      style: this.cssVars
    }, a);
  }
}), ay = ee({
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
    } = ge(rn);
    return () => {
      const {
        rowKey: o
      } = e;
      return f(cc, {
        name: r,
        disabled: e.disabled,
        checked: t.value.has(o),
        onUpdateChecked: e.onUpdateChecked
      });
    };
  }
}), ly = Object.assign(Object.assign({}, er), ve.props), fc = ee({
  name: "Tooltip",
  props: ly,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = ve("Tooltip", "-tooltip", void 0, oc, e, t), o = L(null);
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
      popoverThemeOverrides: z(() => r.value.self)
    });
  },
  render() {
    const {
      mergedTheme: e,
      internalExtraClass: t
    } = this;
    return f(cr, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: t.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), hc = F("ellipsis", {
  overflow: "hidden"
}, [qe("line-clamp", `
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `), _("line-clamp", `
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `), _("cursor-pointer", `
 cursor: pointer;
 `)]);
function Ca(e) {
  return `${e}-ellipsis--line-clamp`;
}
function ya(e, t) {
  return `${e}-ellipsis--cursor-${t}`;
}
const vc = Object.assign(Object.assign({}, ve.props), {
  expandTrigger: String,
  lineClamp: [Number, String],
  tooltip: {
    type: [Boolean, Object],
    default: !0
  }
}), ml = ee({
  name: "Ellipsis",
  inheritAttrs: !1,
  props: vc,
  setup(e, {
    slots: t,
    attrs: r
  }) {
    const o = eu(), i = ve("Ellipsis", "-ellipsis", hc, ic, e, o), a = L(null), l = L(null), s = L(null), d = L(!1), u = z(() => {
      const {
        lineClamp: b
      } = e, {
        value: m
      } = d;
      return b !== void 0 ? {
        textOverflow: "",
        "-webkit-line-clamp": m ? "" : b
      } : {
        textOverflow: m ? "" : "ellipsis",
        "-webkit-line-clamp": ""
      };
    });
    function c() {
      let b = !1;
      const {
        value: m
      } = d;
      if (m) return !0;
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
        h(C, b);
      }
      return b;
    }
    const v = z(() => e.expandTrigger === "click" ? () => {
      var b;
      const {
        value: m
      } = d;
      m && ((b = s.value) === null || b === void 0 || b.setShow(!1)), d.value = !m;
    } : void 0);
    Aa(() => {
      var b;
      e.tooltip && ((b = s.value) === null || b === void 0 || b.setShow(!1));
    });
    const p = () => f("span", Object.assign({}, Vt(r, {
      class: [`${o.value}-ellipsis`, e.lineClamp !== void 0 ? Ca(o.value) : void 0, e.expandTrigger === "click" ? ya(o.value, "pointer") : void 0],
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
    function x(b) {
      if (!b) return;
      const m = u.value, C = Ca(o.value);
      e.lineClamp !== void 0 ? g(b, C, "add") : g(b, C, "remove");
      for (const S in m)
        b.style[S] !== m[S] && (b.style[S] = m[S]);
    }
    function h(b, m) {
      const C = ya(o.value, "pointer");
      e.expandTrigger === "click" && !m ? g(b, C, "add") : g(b, C, "remove");
    }
    function g(b, m, C) {
      C === "add" ? b.classList.contains(m) || b.classList.add(m) : b.classList.contains(m) && b.classList.remove(m);
    }
    return {
      mergedTheme: i,
      triggerRef: a,
      triggerInnerRef: l,
      tooltipRef: s,
      handleClick: v,
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
      return f(fc, Object.assign({
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
}), sy = ee({
  name: "PerformantEllipsis",
  props: vc,
  inheritAttrs: !1,
  setup(e, {
    attrs: t,
    slots: r
  }) {
    const o = L(!1), i = eu();
    return _n("-ellipsis", hc, i), {
      mouseEntered: o,
      renderTrigger: () => {
        const {
          lineClamp: l
        } = e, s = i.value;
        return f("span", Object.assign({}, Vt(t, {
          class: [`${s}-ellipsis`, l !== void 0 ? Ca(s) : void 0, e.expandTrigger === "click" ? ya(s, "pointer") : void 0],
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
    return this.mouseEntered ? f(ml, Vt({}, this.$attrs, this.$props), this.$slots) : this.renderTrigger();
  }
}), dy = ee({
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
    if (l && !t ? a = l(o, this.index) : t ? a = (e = o[s]) === null || e === void 0 ? void 0 : e.value : a = i ? i(lo(o, s), o, r) : lo(o, s), d)
      if (typeof d == "object") {
        const {
          mergedTheme: u
        } = this;
        return r.ellipsisComponent === "performant-ellipsis" ? f(sy, Object.assign({}, d, {
          theme: u.peers.Ellipsis,
          themeOverrides: u.peerOverrides.Ellipsis
        }), {
          default: () => a
        }) : f(ml, Object.assign({}, d, {
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
}), rd = ee({
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
    }, f(sr, null, {
      default: () => this.loading ? f(Nn, {
        key: "loading",
        clsPrefix: this.clsPrefix,
        radius: 85,
        strokeWidth: 15,
        scale: 0.88
      }) : this.renderExpandIcon ? this.renderExpandIcon({
        expanded: this.expanded,
        rowData: this.rowData
      }) : f(vt, {
        clsPrefix: e,
        key: "base-icon"
      }, {
        default: () => f(ol, null)
      })
    }));
  }
}), uy = ee({
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
    } = Ae(e), o = Bt("DataTable", r, t), {
      mergedClsPrefixRef: i,
      mergedThemeRef: a,
      localeRef: l
    } = ge(rn), s = L(e.value), d = z(() => {
      const {
        value: h
      } = s;
      return Array.isArray(h) ? h : null;
    }), u = z(() => {
      const {
        value: h
      } = s;
      return Yi(e.column) ? Array.isArray(h) && h.length && h[0] || null : Array.isArray(h) ? null : h;
    });
    function c(h) {
      e.onChange(h);
    }
    function v(h) {
      e.multiple && Array.isArray(h) ? s.value = h : Yi(e.column) && !Array.isArray(h) ? s.value = [h] : s.value = h;
    }
    function p() {
      c(s.value), e.onConfirm();
    }
    function x() {
      e.multiple || Yi(e.column) ? c([]) : c(null), e.onClear();
    }
    return {
      mergedClsPrefix: i,
      rtlEnabled: o,
      mergedTheme: a,
      locale: l,
      checkboxGroupValue: d,
      radioGroupValue: u,
      handleChange: v,
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
    }, f(dr, null, {
      default: () => {
        const {
          checkboxGroupValue: o,
          handleChange: i
        } = this;
        return this.multiple ? f(aC, {
          value: o,
          class: `${r}-data-table-filter-menu__group`,
          onUpdateValue: i
        }, {
          default: () => this.options.map((a) => f(hl, {
            key: a.value,
            theme: e.peers.Checkbox,
            themeOverrides: e.peerOverrides.Checkbox,
            value: a.value
          }, {
            default: () => a.label
          }))
        }) : f(iy, {
          name: this.radioGroupName,
          class: `${r}-data-table-filter-menu__group`,
          value: this.radioGroupValue,
          onUpdateValue: this.handleChange
        }, {
          default: () => this.options.map((a) => f(cc, {
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
    }, f(tr, {
      size: "tiny",
      theme: e.peers.Button,
      themeOverrides: e.peerOverrides.Button,
      onClick: this.handleClearClick
    }, {
      default: () => t.clear
    }), f(tr, {
      theme: e.peers.Button,
      themeOverrides: e.peerOverrides.Button,
      type: "primary",
      size: "tiny",
      onClick: this.handleConfirmClick
    }, {
      default: () => t.confirm
    })));
  }
}), cy = ee({
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
function fy(e, t, r) {
  const o = Object.assign({}, e);
  return o[t] = r, o;
}
const hy = ee({
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
    } = ge(rn), c = L(!1), v = i, p = z(() => e.column.filterMultiple !== !1), x = z(() => {
      const S = v.value[e.column.key];
      if (S === void 0) {
        const {
          value: w
        } = p;
        return w ? [] : null;
      }
      return S;
    }), h = z(() => {
      const {
        value: S
      } = x;
      return Array.isArray(S) ? S.length > 0 : S !== null;
    }), g = z(() => {
      var S, w;
      return ((w = (S = t == null ? void 0 : t.value) === null || S === void 0 ? void 0 : S.DataTable) === null || w === void 0 ? void 0 : w.renderFilter) || e.column.renderFilter;
    });
    function b(S) {
      const w = fy(v.value, e.column.key, S);
      d(w, e.column), l.value === "first" && s(1);
    }
    function m() {
      c.value = !1;
    }
    function C() {
      c.value = !1;
    }
    return {
      mergedTheme: r,
      mergedClsPrefix: o,
      active: h,
      showPopover: c,
      mergedRenderFilter: g,
      filterIconPopoverProps: u,
      filterMultiple: p,
      mergedFilterValue: x,
      filterMenuCssVars: a,
      handleFilterChange: b,
      handleFilterMenuConfirm: C,
      handleFilterMenuCancel: m
    };
  },
  render() {
    const {
      mergedTheme: e,
      mergedClsPrefix: t,
      handleFilterMenuCancel: r,
      filterIconPopoverProps: o
    } = this;
    return f(cr, Object.assign({
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
          return f(cy, {
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
        }) : f(vt, {
          clsPrefix: t
        }, {
          default: () => f(vx, null)
        }));
      },
      default: () => {
        const {
          renderFilterMenu: i
        } = this.column;
        return i ? i({
          hide: r
        }) : f(uy, {
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
}), vy = ee({
  name: "ColumnResizeButton",
  props: {
    onResizeStart: Function,
    onResize: Function,
    onResizeEnd: Function
  },
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = ge(rn), r = L(!1);
    let o = 0;
    function i(d) {
      return d.clientX;
    }
    function a(d) {
      var u;
      d.preventDefault();
      const c = r.value;
      o = i(d), r.value = !0, c || (rt("mousemove", window, l), rt("mouseup", window, s), (u = e.onResizeStart) === null || u === void 0 || u.call(e));
    }
    function l(d) {
      var u;
      (u = e.onResize) === null || u === void 0 || u.call(e, i(d) - o);
    }
    function s() {
      var d;
      r.value = !1, (d = e.onResizeEnd) === null || d === void 0 || d.call(e), We("mousemove", window, l), We("mouseup", window, s);
    }
    return St(() => {
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
}), py = ee({
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
}), gy = ee({
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
    } = ge(rn), i = z(() => r.value.find((d) => d.columnKey === e.column.key)), a = z(() => i.value !== void 0), l = z(() => {
      const {
        value: d
      } = i;
      return d && a.value ? d.order : !1;
    }), s = z(() => {
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
    return e ? f(py, {
      render: e,
      order: t
    }) : f("span", {
      class: [`${r}-data-table-sorter`, t === "ascend" && `${r}-data-table-sorter--asc`, t === "descend" && `${r}-data-table-sorter--desc`]
    }, o ? o({
      order: t
    }) : f(vt, {
      clsPrefix: r
    }, {
      default: () => f(ax, null)
    }));
  }
}), bl = "n-dropdown-menu", gi = "n-dropdown", od = "n-dropdown-option", pc = ee({
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
}), my = ee({
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
    } = ge(bl), {
      renderLabelRef: r,
      labelFieldRef: o,
      nodePropsRef: i,
      renderOptionRef: a
    } = ge(gi);
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
    }, ft(s.icon)), f("div", {
      class: `${t}-dropdown-option-body__label`,
      "data-dropdown-option": !0
    }, a ? a(s) : ft((e = s.title) !== null && e !== void 0 ? e : s[this.labelField])), f("div", {
      class: [`${t}-dropdown-option-body__suffix`, r && `${t}-dropdown-option-body__suffix--has-submenu`],
      "data-dropdown-option": !0
    })));
    return l ? l({
      node: d,
      option: s
    }) : d;
  }
});
function by(e) {
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
const xy = {
  name: "Icon",
  common: Xe,
  self: by
}, Cy = F("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [_("color-transition", {
  transition: "color .3s var(--n-bezier)"
}), _("depth", {
  color: "var(--n-color)"
}, [O("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), O("svg", {
  height: "1em",
  width: "1em"
})]), yy = Object.assign(Object.assign({}, ve.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), xl = ee({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: yy,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Icon", "-icon", Cy, xy, e, t), i = z(() => {
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
    }), a = r ? Ge("icon", z(() => `${e.depth || "d"}`), i, e) : void 0;
    return {
      mergedClsPrefix: t,
      mergedStyle: z(() => {
        const {
          size: l,
          color: s
        } = e;
        return {
          fontSize: gt(l),
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
    return !((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && Pt("icon", "don't wrap `n-icon` inside `n-icon`"), a == null || a(), f("i", Vt(this.$attrs, {
      role: "img",
      class: [`${o}-icon`, l, {
        [`${o}-icon--depth`]: r,
        [`${o}-icon--color-transition`]: r !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), i ? f(i) : this.$slots);
  }
});
function wa(e, t) {
  return e.type === "submenu" || e.type === void 0 && e[t] !== void 0;
}
function wy(e) {
  return e.type === "group";
}
function gc(e) {
  return e.type === "divider";
}
function Sy(e) {
  return e.type === "render";
}
const mc = ee({
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
    const t = ge(gi), {
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
      childrenFieldRef: p,
      renderOptionRef: x,
      nodePropsRef: h,
      menuPropsRef: g
    } = t, b = ge(od, null), m = ge(bl), C = ge(po), S = z(() => e.tmNode.rawNode), w = z(() => {
      const {
        value: I
      } = p;
      return wa(e.tmNode.rawNode, I);
    }), B = z(() => {
      const {
        disabled: I
      } = e.tmNode;
      return I;
    }), R = z(() => {
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
        value: K
      } = i, {
        value: H
      } = a;
      return te !== null ? H.includes(I) : X !== null ? H.includes(I) && H[H.length - 1] !== I : K !== null ? H.includes(I) : !1;
    }), y = z(() => o.value === null && !s.value), P = xh(R, 300, y), D = z(() => !!(b != null && b.enteringSubmenuRef.value)), T = L(!1);
    $e(od, {
      enteringSubmenuRef: T
    });
    function U() {
      T.value = !0;
    }
    function M() {
      T.value = !1;
    }
    function n() {
      const {
        parentKey: I,
        tmNode: V
      } = e;
      V.disabled || d.value && (i.value = I, o.value = null, r.value = V.key);
    }
    function $() {
      const {
        tmNode: I
      } = e;
      I.disabled || d.value && r.value !== I.key && n();
    }
    function A(I) {
      if (e.tmNode.disabled || !d.value) return;
      const {
        relatedTarget: V
      } = I;
      V && !Kt({
        target: V
      }, "dropdownOption") && !Kt({
        target: V
      }, "scrollbarRail") && (r.value = null);
    }
    function N() {
      const {
        value: I
      } = w, {
        tmNode: V
      } = e;
      d.value && !I && !V.disabled && (t.doSelect(V.key, V.rawNode), t.doUpdateShow(!1));
    }
    return {
      labelField: v,
      renderLabel: u,
      renderIcon: c,
      siblingHasIcon: m.showIconRef,
      siblingHasSubmenu: m.hasSubmenuRef,
      menuProps: g,
      popoverBody: C,
      animated: s,
      mergedShowSubmenu: z(() => P.value && !D.value),
      rawNode: S,
      hasSubmenu: w,
      pending: Ve(() => {
        const {
          value: I
        } = a, {
          key: V
        } = e.tmNode;
        return I.includes(V);
      }),
      childActive: Ve(() => {
        const {
          value: I
        } = l, {
          key: V
        } = e.tmNode, te = I.findIndex((X) => V === X);
        return te === -1 ? !1 : te < I.length - 1;
      }),
      active: Ve(() => {
        const {
          value: I
        } = l, {
          key: V
        } = e.tmNode, te = I.findIndex((X) => V === X);
        return te === -1 ? !1 : te === I.length - 1;
      }),
      mergedDisabled: B,
      renderOption: x,
      nodeProps: h,
      handleClick: N,
      handleMouseMove: $,
      handleMouseEnter: n,
      handleMouseLeave: A,
      handleSubmenuBeforeEnter: U,
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
      nodeProps: v,
      props: p,
      scrollable: x
    } = this;
    let h = null;
    if (i) {
      const C = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, o, o.children);
      h = f(bc, Object.assign({}, C, {
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
    }, b = v == null ? void 0 : v(o), m = f("div", Object.assign({
      class: [`${a}-dropdown-option`, b == null ? void 0 : b.class],
      "data-dropdown-option": !0
    }, b), f("div", Vt(g, p), [f("div", {
      class: [`${a}-dropdown-option-body__prefix`, l && `${a}-dropdown-option-body__prefix--show-icon`]
    }, [u ? u(o) : ft(o.icon)]), f("div", {
      "data-dropdown-option": !0,
      class: `${a}-dropdown-option-body__label`
    }, d ? d(o) : ft((t = o[this.labelField]) !== null && t !== void 0 ? t : o.title)), f("div", {
      "data-dropdown-option": !0,
      class: [`${a}-dropdown-option-body__suffix`, s && `${a}-dropdown-option-body__suffix--has-submenu`]
    }, this.hasSubmenu ? f(xl, null, {
      default: () => f(ol, null)
    }) : null)]), this.hasSubmenu ? f(_a, null, {
      default: () => [f(Na, null, {
        default: () => f("div", {
          class: `${a}-dropdown-offset-container`
        }, f(Wa, {
          show: this.mergedShowSubmenu,
          placement: this.placement,
          to: x && this.popoverBody || void 0,
          teleportDisabled: !x
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
      node: m,
      option: o
    }) : m;
  }
}), By = ee({
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
    return f(Qe, null, f(my, {
      clsPrefix: r,
      tmNode: e,
      key: e.key
    }), o == null ? void 0 : o.map((i) => {
      const {
        rawNode: a
      } = i;
      return a.show === !1 ? null : gc(a) ? f(pc, {
        clsPrefix: r,
        key: i.key
      }) : i.isGroup ? (Pt("dropdown", "`group` node is not allowed to be put in `group` node."), null) : f(mc, {
        clsPrefix: r,
        tmNode: i,
        parentKey: t,
        key: i.key
      });
    }));
  }
}), ky = ee({
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
}), bc = ee({
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
    } = ge(gi);
    $e(bl, {
      showIconRef: z(() => {
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
      hasSubmenuRef: z(() => {
        const {
          value: i
        } = r;
        return e.tmNodes.some((a) => {
          var l;
          if (a.isGroup)
            return (l = a.children) === null || l === void 0 ? void 0 : l.some(({
              rawNode: d
            }) => wa(d, i));
          const {
            rawNode: s
          } = a;
          return wa(s, i);
        });
      })
    });
    const o = L(null);
    return $e(si, null), $e(li, null), $e(po, o), {
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
      return a.show === !1 ? null : Sy(a) ? f(ky, {
        tmNode: i,
        key: i.key
      }) : gc(a) ? f(pc, {
        clsPrefix: t,
        key: i.key
      }) : wy(a) ? f(By, {
        clsPrefix: t,
        tmNode: i,
        parentKey: e,
        key: i.key
      }) : f(mc, {
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
    }, r ? f(Eu, {
      contentClass: `${t}-dropdown-menu__content`
    }, {
      default: () => o
    }) : o, this.showArrow ? Lu({
      clsPrefix: t,
      arrowStyle: this.arrowStyle,
      arrowClass: void 0,
      arrowWrapperClass: void 0,
      arrowWrapperStyle: void 0
    }) : null);
  }
}), Ry = F("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [xo(), F("dropdown-option", `
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
 `)]), F("dropdown-option-body", `
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
 `), qe("disabled", [_("pending", `
 color: var(--n-option-text-color-hover);
 `, [E("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), O("&::before", "background-color: var(--n-option-color-hover);")]), _("active", `
 color: var(--n-option-text-color-active);
 `, [E("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), O("&::before", "background-color: var(--n-option-color-active);")]), _("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [E("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), _("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), _("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [E("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [_("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), E("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [_("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), F("icon", `
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
 `, [_("has-submenu", `
 width: var(--n-option-icon-suffix-width);
 `), F("icon", `
 font-size: var(--n-option-icon-size);
 `)]), F("dropdown-menu", "pointer-events: all;")]), F("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), F("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), F("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), O(">", [F("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), qe("scrollable", `
 padding: var(--n-padding);
 `), _("scrollable", [E("content", `
 padding: var(--n-padding);
 `)])]), Fy = {
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
}, Py = Object.keys(er), zy = Object.assign(Object.assign(Object.assign({}, er), Fy), ve.props), xc = ee({
  name: "Dropdown",
  inheritAttrs: !1,
  props: zy,
  setup(e) {
    const t = L(!1), r = Et(oe(e, "show"), t), o = z(() => {
      const {
        keyField: M,
        childrenField: n
      } = e;
      return vi(e.options, {
        getKey($) {
          return $[M];
        },
        getDisabled($) {
          return $.disabled === !0;
        },
        getIgnored($) {
          return $.type === "divider" || $.type === "render";
        },
        getChildren($) {
          return $[n];
        }
      });
    }), i = z(() => o.value.treeNodes), a = L(null), l = L(null), s = L(null), d = z(() => {
      var M, n, $;
      return ($ = (n = (M = a.value) !== null && M !== void 0 ? M : l.value) !== null && n !== void 0 ? n : s.value) !== null && $ !== void 0 ? $ : null;
    }), u = z(() => o.value.getPath(d.value).keyPath), c = z(() => o.value.getPath(e.value).keyPath), v = Ve(() => e.keyboard && r.value);
    gh({
      keydown: {
        ArrowUp: {
          prevent: !0,
          handler: B
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
    }, v);
    const {
      mergedClsPrefixRef: p,
      inlineThemeDisabled: x
    } = Ae(e), h = ve("Dropdown", "-dropdown", Ry, rc, e, p);
    $e(gi, {
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
      doUpdateShow: b
    }), Ne(r, (M) => {
      !e.animated && !M && m();
    });
    function g(M, n) {
      const {
        onSelect: $
      } = e;
      $ && ne($, M, n);
    }
    function b(M) {
      const {
        "onUpdate:show": n,
        onUpdateShow: $
      } = e;
      n && ne(n, M), $ && ne($, M), t.value = M;
    }
    function m() {
      a.value = null, l.value = null, s.value = null;
    }
    function C() {
      b(!1);
    }
    function S() {
      D("left");
    }
    function w() {
      D("right");
    }
    function B() {
      D("up");
    }
    function R() {
      D("down");
    }
    function y() {
      const M = P();
      M != null && M.isLeaf && r.value && (g(M.key, M.rawNode), b(!1));
    }
    function P() {
      var M;
      const {
        value: n
      } = o, {
        value: $
      } = d;
      return !n || $ === null ? null : (M = n.getNode($)) !== null && M !== void 0 ? M : null;
    }
    function D(M) {
      const {
        value: n
      } = d, {
        value: {
          getFirstAvailableNode: $
        }
      } = o;
      let A = null;
      if (n === null) {
        const N = $();
        N !== null && (A = N.key);
      } else {
        const N = P();
        if (N) {
          let I;
          switch (M) {
            case "down":
              I = N.getNext();
              break;
            case "up":
              I = N.getPrev();
              break;
            case "right":
              I = N.getChild();
              break;
            case "left":
              I = N.getParent();
              break;
          }
          I && (A = I.key);
        }
      }
      A !== null && (a.value = null, l.value = A);
    }
    const T = z(() => {
      const {
        size: M,
        inverted: n
      } = e, {
        common: {
          cubicBezierEaseInOut: $
        },
        self: A
      } = h.value, {
        padding: N,
        dividerColor: I,
        borderRadius: V,
        optionOpacityDisabled: te,
        [Z("optionIconSuffixWidth", M)]: X,
        [Z("optionSuffixWidth", M)]: K,
        [Z("optionIconPrefixWidth", M)]: H,
        [Z("optionPrefixWidth", M)]: q,
        [Z("fontSize", M)]: Y,
        [Z("optionHeight", M)]: ie,
        [Z("optionIconSize", M)]: ae
      } = A, fe = {
        "--n-bezier": $,
        "--n-font-size": Y,
        "--n-padding": N,
        "--n-border-radius": V,
        "--n-option-height": ie,
        "--n-option-prefix-width": q,
        "--n-option-icon-prefix-width": H,
        "--n-option-suffix-width": K,
        "--n-option-icon-suffix-width": X,
        "--n-option-icon-size": ae,
        "--n-divider-color": I,
        "--n-option-opacity-disabled": te
      };
      return n ? (fe["--n-color"] = A.colorInverted, fe["--n-option-color-hover"] = A.optionColorHoverInverted, fe["--n-option-color-active"] = A.optionColorActiveInverted, fe["--n-option-text-color"] = A.optionTextColorInverted, fe["--n-option-text-color-hover"] = A.optionTextColorHoverInverted, fe["--n-option-text-color-active"] = A.optionTextColorActiveInverted, fe["--n-option-text-color-child-active"] = A.optionTextColorChildActiveInverted, fe["--n-prefix-color"] = A.prefixColorInverted, fe["--n-suffix-color"] = A.suffixColorInverted, fe["--n-group-header-text-color"] = A.groupHeaderTextColorInverted) : (fe["--n-color"] = A.color, fe["--n-option-color-hover"] = A.optionColorHover, fe["--n-option-color-active"] = A.optionColorActive, fe["--n-option-text-color"] = A.optionTextColor, fe["--n-option-text-color-hover"] = A.optionTextColorHover, fe["--n-option-text-color-active"] = A.optionTextColorActive, fe["--n-option-text-color-child-active"] = A.optionTextColorChildActive, fe["--n-prefix-color"] = A.prefixColor, fe["--n-suffix-color"] = A.suffixColor, fe["--n-group-header-text-color"] = A.groupHeaderTextColor), fe;
    }), U = x ? Ge("dropdown", z(() => `${e.size[0]}${e.inverted ? "i" : ""}`), T, e) : void 0;
    return {
      mergedClsPrefix: p,
      mergedTheme: h,
      // data
      tmNodes: i,
      // show
      mergedShow: r,
      // methods
      handleAfterLeave: () => {
        e.animated && m();
      },
      doUpdateShow: b,
      cssVars: x ? void 0 : T,
      themeClass: U == null ? void 0 : U.themeClass,
      onRender: U == null ? void 0 : U.onRender
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
      const v = (c == null ? void 0 : c(void 0, this.tmNodes.map((x) => x.rawNode))) || {}, p = {
        ref: Qd(i),
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
      return f(bc, Vt(this.$attrs, p, v));
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
    return f(cr, Object.assign({}, Cn(this.$props, Py), r), {
      trigger: () => {
        var o, i;
        return (i = (o = this.$slots).default) === null || i === void 0 ? void 0 : i.call(o);
      }
    });
  }
}), Cc = "_n_all__", yc = "_n_none__";
function $y(e, t, r, o) {
  return e ? (i) => {
    for (const a of e)
      switch (i) {
        case Cc:
          r(!0);
          return;
        case yc:
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
function Ay(e, t) {
  return e ? e.map((r) => {
    switch (r) {
      case "all":
        return {
          label: t.checkTableAll,
          key: Cc
        };
      case "none":
        return {
          label: t.uncheckTableAll,
          key: yc
        };
      default:
        return r;
    }
  }) : [];
}
const Dy = ee({
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
    } = ge(rn), s = z(() => $y(o.value, i, a, l)), d = z(() => Ay(o.value, r.value));
    return () => {
      var u, c, v, p;
      const {
        clsPrefix: x
      } = e;
      return f(xc, {
        theme: (c = (u = t.theme) === null || u === void 0 ? void 0 : u.peers) === null || c === void 0 ? void 0 : c.Dropdown,
        themeOverrides: (p = (v = t.themeOverrides) === null || v === void 0 ? void 0 : v.peers) === null || p === void 0 ? void 0 : p.Dropdown,
        options: d.value,
        onSelect: s.value
      }, {
        default: () => f(vt, {
          clsPrefix: x,
          class: `${x}-data-table-check-extra`
        }, {
          default: () => f(Au, null)
        })
      });
    };
  }
});
function Ji(e) {
  return typeof e.title == "function" ? e.title(e) : e.title;
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
}), wc = ee({
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
      componentId: p,
      mergedTableLayoutRef: x,
      headerCheckboxDisabledRef: h,
      virtualScrollHeaderRef: g,
      headerHeightRef: b,
      onUnstableColumnResize: m,
      doUpdateResizableWidth: C,
      handleTableHeaderScroll: S,
      deriveNextSorter: w,
      doUncheckAll: B,
      doCheckAll: R
    } = ge(rn), y = L(), P = L({});
    function D(A) {
      const N = P.value[A];
      return N == null ? void 0 : N.getBoundingClientRect().width;
    }
    function T() {
      a.value ? B() : R();
    }
    function U(A, N) {
      if (Kt(A, "dataTableFilter") || Kt(A, "dataTableResizable") || !Zi(N)) return;
      const I = v.value.find((te) => te.columnKey === N.key) || null, V = GC(N, I);
      w(V);
    }
    const M = /* @__PURE__ */ new Map();
    function n(A) {
      M.set(A.key, D(A.key));
    }
    function $(A, N) {
      const I = M.get(A.key);
      if (I === void 0)
        return;
      const V = I + N, te = KC(V, A.minWidth, A.maxWidth);
      m(V, te, A, D), C(A, te);
    }
    return {
      cellElsRef: P,
      componentId: p,
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
      mergedTableLayout: x,
      headerCheckboxDisabled: h,
      headerHeight: b,
      virtualScrollHeader: g,
      virtualListRef: y,
      handleCheckboxUpdateChecked: T,
      handleColHeaderClick: U,
      handleTableHeaderScroll: S,
      handleColumnResizeStart: n,
      handleColumnResize: $
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
      discrete: p,
      mergedTableLayout: x,
      headerCheckboxDisabled: h,
      mergedSortState: g,
      virtualScrollHeader: b,
      handleColHeaderClick: m,
      handleCheckboxUpdateChecked: C,
      handleColumnResizeStart: S,
      handleColumnResize: w
    } = this, B = (D, T, U) => D.map(({
      column: M,
      colIndex: n,
      colSpan: $,
      rowSpan: A,
      isLast: N
    }) => {
      var I, V;
      const te = tn(M), {
        ellipsis: X
      } = M, K = () => M.type === "selection" ? M.multiple !== !1 ? f(Qe, null, f(hl, {
        key: i,
        privateInsideTable: !0,
        checked: a,
        indeterminate: l,
        disabled: h,
        onUpdateChecked: C
      }), c ? f(Dy, {
        clsPrefix: t
      }) : null) : null : f(Qe, null, f("div", {
        class: `${t}-data-table-th__title-wrapper`
      }, f("div", {
        class: `${t}-data-table-th__title`
      }, X === !0 || X && !X.tooltip ? f("div", {
        class: `${t}-data-table-th__ellipsis`
      }, Ji(M)) : X && typeof X == "object" ? f(ml, Object.assign({}, X, {
        theme: u.peers.Ellipsis,
        themeOverrides: u.peerOverrides.Ellipsis
      }), {
        default: () => Ji(M)
      }) : Ji(M)), Zi(M) ? f(gy, {
        column: M
      }) : null), td(M) ? f(hy, {
        column: M,
        options: M.filterOptions
      }) : null, sc(M) ? f(vy, {
        onResizeStart: () => {
          S(M);
        },
        onResize: (ie) => {
          w(M, ie);
        }
      }) : null), H = te in r, q = te in o, Y = T && !M.fixed ? "div" : "th";
      return f(Y, {
        ref: (ie) => e[te] = ie,
        key: te,
        style: [T && !M.fixed ? {
          position: "absolute",
          left: pt(T(n)),
          top: 0,
          bottom: 0
        } : {
          left: pt((I = r[te]) === null || I === void 0 ? void 0 : I.start),
          right: pt((V = o[te]) === null || V === void 0 ? void 0 : V.start)
        }, {
          width: pt(M.width),
          textAlign: M.titleAlign || M.align,
          height: U
        }],
        colspan: $,
        rowspan: A,
        "data-col-key": te,
        class: [`${t}-data-table-th`, (H || q) && `${t}-data-table-th--fixed-${H ? "left" : "right"}`, {
          [`${t}-data-table-th--sorting`]: dc(M, g),
          [`${t}-data-table-th--filterable`]: td(M),
          [`${t}-data-table-th--sortable`]: Zi(M),
          [`${t}-data-table-th--selection`]: M.type === "selection",
          [`${t}-data-table-th--last`]: N
        }, M.className],
        onClick: M.type !== "selection" && M.type !== "expand" && !("children" in M) ? (ie) => {
          m(ie, M);
        } : void 0
      }, K());
    });
    if (b) {
      const {
        headerHeight: D
      } = this;
      let T = 0, U = 0;
      return d.forEach((M) => {
        M.column.fixed === "left" ? T++ : M.column.fixed === "right" && U++;
      }), f(Ka, {
        ref: "virtualListRef",
        class: `${t}-data-table-base-table-header`,
        style: {
          height: pt(D)
        },
        onScroll: this.handleTableHeaderScroll,
        columns: d,
        itemSize: D,
        showScrollbar: !1,
        items: [{}],
        itemResizable: !1,
        visibleItemsTag: Ey,
        visibleItemsProps: {
          clsPrefix: t,
          id: v,
          cols: d,
          width: gt(this.scrollX)
        },
        renderItemWithCols: ({
          startColIndex: M,
          endColIndex: n,
          getLeft: $
        }) => {
          const A = d.map((I, V) => ({
            column: I.column,
            isLast: V === d.length - 1,
            colIndex: I.index,
            colSpan: 1,
            rowSpan: 1
          })).filter(({
            column: I
          }, V) => !!(M <= V && V <= n || I.fixed)), N = B(A, $, pt(D));
          return N.splice(T, 0, f("th", {
            colspan: d.length - T - U,
            style: {
              pointerEvents: "none",
              visibility: "hidden",
              height: 0
            }
          })), f("tr", {
            style: {
              position: "relative"
            }
          }, N);
        }
      }, {
        default: ({
          renderedItemWithCols: M
        }) => M
      });
    }
    const R = f("thead", {
      class: `${t}-data-table-thead`,
      "data-n-id": v
    }, s.map((D) => f("tr", {
      class: `${t}-data-table-tr`
    }, B(D, null, void 0))));
    if (!p)
      return R;
    const {
      handleTableHeaderScroll: y,
      scrollX: P
    } = this;
    return f("div", {
      class: `${t}-data-table-base-table-header`,
      onScroll: y
    }, f("table", {
      class: `${t}-data-table-table`,
      style: {
        minWidth: gt(P),
        tableLayout: x
      }
    }, f("colgroup", null, d.map((D) => f("col", {
      key: D.key,
      style: D.style
    }))), R));
  }
});
function Ty(e, t) {
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
const Oy = ee({
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
}), My = ee({
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
      mergedCurrentPageRef: p,
      rowClassNameRef: x,
      leftActiveFixedColKeyRef: h,
      leftActiveFixedChildrenColKeysRef: g,
      rightActiveFixedColKeyRef: b,
      rightActiveFixedChildrenColKeysRef: m,
      renderExpandRef: C,
      hoverKeyRef: S,
      summaryRef: w,
      mergedSortStateRef: B,
      virtualScrollRef: R,
      virtualScrollXRef: y,
      heightForRowRef: P,
      minRowHeightRef: D,
      componentId: T,
      mergedTableLayoutRef: U,
      childTriggerColIndexRef: M,
      indentRef: n,
      rowPropsRef: $,
      maxHeightRef: A,
      stripedRef: N,
      loadingRef: I,
      onLoadRef: V,
      loadingKeySetRef: te,
      expandableRef: X,
      stickyExpandedRowsRef: K,
      renderExpandIconRef: H,
      summaryPlacementRef: q,
      treeMateRef: Y,
      scrollbarPropsRef: ie,
      setHeaderScrollLeft: ae,
      doUpdateExpandedRowKeys: fe,
      handleTableBodyScroll: we,
      doCheck: G,
      doUncheck: ue,
      renderCell: Re
    } = ge(rn), be = ge(nn), Fe = L(null), Pe = L(null), at = L(null), Ze = Ve(() => d.value.length === 0), dt = Ve(() => e.showHeader || !Ze.value), ut = Ve(() => e.showHeader || Ze.value);
    let xe = "";
    const Ce = z(() => new Set(o.value));
    function ze(ce) {
      var Be;
      return (Be = Y.value.getNode(ce)) === null || Be === void 0 ? void 0 : Be.rawNode;
    }
    function Me(ce, Be, k) {
      const W = ze(ce.key);
      if (!W) {
        Pt("data-table", `fail to get row data with key ${ce.key}`);
        return;
      }
      if (k) {
        const J = d.value.findIndex((le) => le.key === xe);
        if (J !== -1) {
          const le = d.value.findIndex((Se) => Se.key === ce.key), se = Math.min(J, le), pe = Math.max(J, le), me = [];
          d.value.slice(se, pe + 1).forEach((Se) => {
            Se.disabled || me.push(Se.key);
          }), Be ? G(me, !1, W) : ue(me, W), xe = ce.key;
          return;
        }
      }
      Be ? G(ce.key, !1, W) : ue(ce.key, W), xe = ce.key;
    }
    function Ye(ce) {
      const Be = ze(ce.key);
      if (!Be) {
        Pt("data-table", `fail to get row data with key ${ce.key}`);
        return;
      }
      G(ce.key, !0, Be);
    }
    function re() {
      if (!dt.value) {
        const {
          value: Be
        } = at;
        return Be || null;
      }
      if (R.value)
        return lt();
      const {
        value: ce
      } = Fe;
      return ce ? ce.containerRef : null;
    }
    function he(ce, Be) {
      var k;
      if (te.value.has(ce)) return;
      const {
        value: W
      } = o, J = W.indexOf(ce), le = Array.from(W);
      ~J ? (le.splice(J, 1), fe(le)) : Be && !Be.isLeaf && !Be.shallowLoaded ? (te.value.add(ce), (k = V.value) === null || k === void 0 || k.call(V, Be.rawNode).then(() => {
        const {
          value: se
        } = o, pe = Array.from(se);
        ~pe.indexOf(ce) || pe.push(ce), fe(pe);
      }).finally(() => {
        te.value.delete(ce);
      })) : (le.push(ce), fe(le));
    }
    function Ee() {
      S.value = null;
    }
    function lt() {
      const {
        value: ce
      } = Pe;
      return (ce == null ? void 0 : ce.listElRef) || null;
    }
    function kt() {
      const {
        value: ce
      } = Pe;
      return (ce == null ? void 0 : ce.itemsElRef) || null;
    }
    function Rt(ce) {
      var Be;
      we(ce), (Be = Fe.value) === null || Be === void 0 || Be.sync();
    }
    function ht(ce) {
      var Be;
      const {
        onResize: k
      } = e;
      k && k(ce), (Be = Fe.value) === null || Be === void 0 || Be.sync();
    }
    const tt = {
      getScrollContainer: re,
      scrollTo(ce, Be) {
        var k, W;
        R.value ? (k = Pe.value) === null || k === void 0 || k.scrollTo(ce, Be) : (W = Fe.value) === null || W === void 0 || W.scrollTo(ce, Be);
      }
    }, mt = O([({
      props: ce
    }) => {
      const Be = (W) => W === null ? null : O(`[data-n-id="${ce.componentId}"] [data-col-key="${W}"]::after`, {
        boxShadow: "var(--n-box-shadow-after)"
      }), k = (W) => W === null ? null : O(`[data-n-id="${ce.componentId}"] [data-col-key="${W}"]::before`, {
        boxShadow: "var(--n-box-shadow-before)"
      });
      return O([Be(ce.leftActiveFixedColKey), k(ce.rightActiveFixedColKey), ce.leftActiveFixedChildrenColKeys.map((W) => Be(W)), ce.rightActiveFixedChildrenColKeys.map((W) => k(W))]);
    }]);
    let Je = !1;
    return et(() => {
      const {
        value: ce
      } = h, {
        value: Be
      } = g, {
        value: k
      } = b, {
        value: W
      } = m;
      if (!Je && ce === null && k === null)
        return;
      const J = {
        leftActiveFixedColKey: ce,
        leftActiveFixedChildrenColKeys: Be,
        rightActiveFixedColKey: k,
        rightActiveFixedChildrenColKeys: W,
        componentId: T
      };
      mt.mount({
        id: `n-${T}`,
        force: !0,
        props: J,
        anchorMetaName: kr,
        parent: be == null ? void 0 : be.styleMountTarget
      }), Je = !0;
    }), yf(() => {
      mt.unmount({
        id: `n-${T}`,
        parent: be == null ? void 0 : be.styleMountTarget
      });
    }), Object.assign({
      bodyWidth: r,
      summaryPlacement: q,
      dataTableSlots: t,
      componentId: T,
      scrollbarInstRef: Fe,
      virtualListRef: Pe,
      emptyElRef: at,
      summary: w,
      mergedClsPrefix: i,
      mergedTheme: a,
      scrollX: l,
      cols: s,
      loading: I,
      bodyShowHeaderOnly: ut,
      shouldDisplaySomeTablePart: dt,
      empty: Ze,
      paginatedDataAndInfo: z(() => {
        const {
          value: ce
        } = N;
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
      currentPage: p,
      rowClassName: x,
      renderExpand: C,
      mergedExpandedRowKeySet: Ce,
      hoverKey: S,
      mergedSortState: B,
      virtualScroll: R,
      virtualScrollX: y,
      heightForRow: P,
      minRowHeight: D,
      mergedTableLayout: U,
      childTriggerColIndex: M,
      indent: n,
      rowProps: $,
      maxHeight: A,
      loadingKeySet: te,
      expandable: X,
      stickyExpandedRows: K,
      renderExpandIcon: H,
      scrollbarProps: ie,
      setHeaderScrollLeft: ae,
      handleVirtualListScroll: Rt,
      handleVirtualListResize: ht,
      handleMouseleaveTable: Ee,
      virtualListContainer: lt,
      virtualListContent: kt,
      handleTableBodyScroll: we,
      handleCheckboxUpdateChecked: Me,
      handleRadioUpdateChecked: Ye,
      handleUpdateExpanded: he,
      renderCell: Re
    }, tt);
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
    } = this, c = t !== void 0 || i !== void 0 || l, v = !c && a === "auto", p = t !== void 0 || v, x = {
      minWidth: gt(t) || "100%"
    };
    t && (x.width = "100%");
    const h = f(dr, Object.assign({}, this.scrollbarProps, {
      ref: "scrollbarInstRef",
      scrollable: c || v,
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
        const g = {}, b = {}, {
          cols: m,
          paginatedDataAndInfo: C,
          mergedTheme: S,
          fixedColumnLeftMap: w,
          fixedColumnRightMap: B,
          currentPage: R,
          rowClassName: y,
          mergedSortState: P,
          mergedExpandedRowKeySet: D,
          stickyExpandedRows: T,
          componentId: U,
          childTriggerColIndex: M,
          expandable: n,
          rowProps: $,
          handleMouseleaveTable: A,
          renderExpand: N,
          summary: I,
          handleCheckboxUpdateChecked: V,
          handleRadioUpdateChecked: te,
          handleUpdateExpanded: X,
          heightForRow: K,
          minRowHeight: H,
          virtualScrollX: q
        } = this, {
          length: Y
        } = m;
        let ie;
        const {
          data: ae,
          hasChildren: fe
        } = C, we = fe ? Ty(ae, D) : ae;
        if (I) {
          const xe = I(this.rawPaginatedData);
          if (Array.isArray(xe)) {
            const Ce = xe.map((ze, Me) => ({
              isSummaryRow: !0,
              key: `__n_summary__${Me}`,
              tmNode: {
                rawNode: ze,
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
          width: pt(this.indent)
        } : void 0, ue = [];
        ie.forEach((xe) => {
          N && D.has(xe.key) && (!n || n(xe.tmNode.rawNode)) ? ue.push(xe, {
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
        const Fe = T ? this.bodyWidth : null, Pe = Fe === null ? void 0 : `${Fe}px`, at = this.virtualScrollX ? "div" : "td";
        let Ze = 0, dt = 0;
        q && m.forEach((xe) => {
          xe.column.fixed === "left" ? Ze++ : xe.column.fixed === "right" && dt++;
        });
        const ut = ({
          // Normal
          rowInfo: xe,
          displayedRowIndex: Ce,
          isVirtual: ze,
          // Virtual X
          isVirtualX: Me,
          startColIndex: Ye,
          endColIndex: re,
          getLeft: he
        }) => {
          const {
            index: Ee
          } = xe;
          if ("isExpandedRow" in xe) {
            const {
              tmNode: {
                key: le,
                rawNode: se
              }
            } = xe;
            return f("tr", {
              class: `${r}-data-table-tr ${r}-data-table-tr--expanded`,
              key: `${le}__expand`
            }, f("td", {
              class: [`${r}-data-table-td`, `${r}-data-table-td--last-col`, Ce + 1 === Re && `${r}-data-table-td--last-row`],
              colspan: Y
            }, T ? f("div", {
              class: `${r}-data-table-expand`,
              style: {
                width: Pe
              }
            }, N(se, Ee)) : N(se, Ee)));
          }
          const lt = "isSummaryRow" in xe, kt = !lt && xe.striped, {
            tmNode: Rt,
            key: ht
          } = xe, {
            rawNode: tt
          } = Rt, mt = D.has(ht), Je = $ ? $(tt, Ee) : void 0, ce = typeof y == "string" ? y : qC(tt, Ee, y), Be = Me ? m.filter((le, se) => !!(Ye <= se && se <= re || le.column.fixed)) : m, k = Me ? pt((K == null ? void 0 : K(tt, Ee)) || H) : void 0, W = Be.map((le) => {
            var se, pe, me, Se, Ie;
            const nt = le.index;
            if (Ce in g) {
              const ot = g[Ce], ct = ot.indexOf(nt);
              if (~ct)
                return ot.splice(ct, 1), null;
            }
            const {
              column: je
            } = le, $t = tn(le), {
              rowSpan: Tt,
              colSpan: Ot
            } = je, Nt = lt ? ((se = xe.tmNode.rawNode[$t]) === null || se === void 0 ? void 0 : se.colSpan) || 1 : Ot ? Ot(tt, Ee) : 1, Ht = lt ? ((pe = xe.tmNode.rawNode[$t]) === null || pe === void 0 ? void 0 : pe.rowSpan) || 1 : Tt ? Tt(tt, Ee) : 1, Yt = nt + Nt === Y, jt = Ce + Ht === Re, j = Ht > 1;
            if (j && (b[Ce] = {
              [nt]: []
            }), Nt > 1 || j)
              for (let ot = Ce; ot < Ce + Ht; ++ot) {
                j && b[Ce][nt].push(be[ot]);
                for (let ct = nt; ct < nt + Nt; ++ct)
                  ot === Ce && ct === nt || (ot in g ? g[ot].push(ct) : g[ot] = [ct]);
              }
            const Q = j ? this.hoverKey : null, {
              cellProps: ye
            } = je, Te = ye == null ? void 0 : ye(tt, Ee), Ke = {
              "--indent-offset": ""
            }, Le = je.fixed ? "td" : at;
            return f(Le, Object.assign({}, Te, {
              key: $t,
              style: [{
                textAlign: je.align || void 0,
                width: pt(je.width)
              }, Me && {
                height: k
              }, Me && !je.fixed ? {
                position: "absolute",
                left: pt(he(nt)),
                top: 0,
                bottom: 0
              } : {
                left: pt((me = w[$t]) === null || me === void 0 ? void 0 : me.start),
                right: pt((Se = B[$t]) === null || Se === void 0 ? void 0 : Se.start)
              }, Ke, (Te == null ? void 0 : Te.style) || ""],
              colspan: Nt,
              rowspan: ze ? void 0 : Ht,
              "data-col-key": $t,
              class: [`${r}-data-table-td`, je.className, Te == null ? void 0 : Te.class, lt && `${r}-data-table-td--summary`, Q !== null && b[Ce][nt].includes(Q) && `${r}-data-table-td--hover`, dc(je, P) && `${r}-data-table-td--sorting`, je.fixed && `${r}-data-table-td--fixed-${je.fixed}`, je.align && `${r}-data-table-td--${je.align}-align`, je.type === "selection" && `${r}-data-table-td--selection`, je.type === "expand" && `${r}-data-table-td--expand`, Yt && `${r}-data-table-td--last-col`, jt && `${r}-data-table-td--last-row`]
            }), fe && nt === M ? [ih(Ke["--indent-offset"] = lt ? 0 : xe.tmNode.level, f("div", {
              class: `${r}-data-table-indent`,
              style: G
            })), lt || xe.tmNode.isLeaf ? f("div", {
              class: `${r}-data-table-expand-placeholder`
            }) : f(rd, {
              class: `${r}-data-table-expand-trigger`,
              clsPrefix: r,
              expanded: mt,
              rowData: tt,
              renderExpandIcon: this.renderExpandIcon,
              loading: s.has(xe.key),
              onClick: () => {
                X(ht, xe.tmNode);
              }
            })] : null, je.type === "selection" ? lt ? null : je.multiple === !1 ? f(ay, {
              key: R,
              rowKey: ht,
              disabled: xe.tmNode.disabled,
              onUpdateChecked: () => {
                te(xe.tmNode);
              }
            }) : f(ZC, {
              key: R,
              rowKey: ht,
              disabled: xe.tmNode.disabled,
              onUpdateChecked: (ot, ct) => {
                V(xe.tmNode, ot, ct.shiftKey);
              }
            }) : je.type === "expand" ? lt ? null : !je.expandable || !((Ie = je.expandable) === null || Ie === void 0) && Ie.call(je, tt) ? f(rd, {
              clsPrefix: r,
              rowData: tt,
              expanded: mt,
              renderExpandIcon: this.renderExpandIcon,
              onClick: () => {
                X(ht, null);
              }
            }) : null : f(dy, {
              clsPrefix: r,
              index: Ee,
              row: tt,
              column: je,
              isSummary: lt,
              mergedTheme: S,
              renderCell: this.renderCell
            }));
          });
          return Me && Ze && dt && W.splice(Ze, 0, f("td", {
            colspan: m.length - Ze - dt,
            style: {
              pointerEvents: "none",
              visibility: "hidden",
              height: 0
            }
          })), f("tr", Object.assign({}, Je, {
            onMouseenter: (le) => {
              var se;
              this.hoverKey = ht, (se = Je == null ? void 0 : Je.onMouseenter) === null || se === void 0 || se.call(Je, le);
            },
            key: ht,
            class: [`${r}-data-table-tr`, lt && `${r}-data-table-tr--summary`, kt && `${r}-data-table-tr--striped`, mt && `${r}-data-table-tr--expanded`, ce, Je == null ? void 0 : Je.class],
            style: [Je == null ? void 0 : Je.style, Me && {
              height: k
            }]
          }), W);
        };
        return o ? f(Ka, {
          ref: "virtualListRef",
          items: ue,
          itemSize: this.minRowHeight,
          visibleItemsTag: Oy,
          visibleItemsProps: {
            clsPrefix: r,
            id: U,
            cols: m,
            onMouseleave: A
          },
          showScrollbar: !1,
          onResize: this.handleVirtualListResize,
          onScroll: this.handleVirtualListScroll,
          itemsStyle: x,
          itemResizable: !q,
          columns: m,
          renderItemWithCols: q ? ({
            itemIndex: xe,
            item: Ce,
            startColIndex: ze,
            endColIndex: Me,
            getLeft: Ye
          }) => ut({
            displayedRowIndex: xe,
            isVirtual: !0,
            isVirtualX: !0,
            rowInfo: Ce,
            startColIndex: ze,
            endColIndex: Me,
            getLeft: Ye
          }) : void 0
        }, {
          default: ({
            item: xe,
            index: Ce,
            renderedItemWithCols: ze
          }) => ze || ut({
            rowInfo: xe,
            displayedRowIndex: Ce,
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
          onMouseleave: A,
          style: {
            tableLayout: this.mergedTableLayout
          }
        }, f("colgroup", null, m.map((xe) => f("col", {
          key: xe.key,
          style: xe.style
        }))), this.showHeader ? f(wc, {
          discrete: !1
        }) : null, this.empty ? null : f("tbody", {
          "data-n-id": U,
          class: `${r}-data-table-tbody`
        }, ue.map((xe, Ce) => ut({
          rowInfo: xe,
          displayedRowIndex: Ce,
          isVirtual: !1,
          isVirtualX: !1,
          startColIndex: -1,
          endColIndex: -1,
          getLeft(ze) {
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
      }, Xt(this.dataTableSlots.empty, () => [f(Rr, {
        theme: this.mergedTheme.peers.Empty,
        themeOverrides: this.mergedTheme.peerOverrides.Empty
      })]));
      return this.shouldDisplaySomeTablePart ? f(Qe, null, h, g()) : f(Br, {
        onResize: this.onResize
      }, {
        default: g
      });
    }
    return h;
  }
}), Iy = ee({
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
    } = ge(rn), u = L(null), c = L(null), v = L(null), p = L(!(r.value.length || t.value.length)), x = z(() => ({
      maxHeight: gt(i.value),
      minHeight: gt(a.value)
    }));
    function h(C) {
      o.value = C.contentRect.width, d(), p.value || (p.value = !0);
    }
    function g() {
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
    const m = {
      getBodyElement: b,
      getHeaderElement: g,
      scrollTo(C, S) {
        var w;
        (w = c.value) === null || w === void 0 || w.scrollTo(C, S);
      }
    };
    return et(() => {
      const {
        value: C
      } = v;
      if (!C) return;
      const S = `${e.value}-data-table-base-table--transition-disabled`;
      p.value ? setTimeout(() => {
        C.classList.remove(S);
      }, 0) : C.classList.add(S);
    }), Object.assign({
      maxHeight: i,
      mergedClsPrefix: e,
      selfElRef: v,
      headerInstRef: u,
      bodyInstRef: c,
      bodyStyle: x,
      flexHeight: l,
      handleBodyResize: h
    }, m);
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
    }, o ? null : f(wc, {
      ref: "headerInstRef"
    }), f(My, {
      ref: "bodyInstRef",
      bodyStyle: this.bodyStyle,
      showHeader: o,
      flexHeight: r,
      onResize: this.handleBodyResize
    }));
  }
}), id = _y(), Ly = O([F("data-table", `
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
 `, [F("data-table-wrapper", `
 flex-grow: 1;
 display: flex;
 flex-direction: column;
 `), _("flex-height", [O(">", [F("data-table-wrapper", [O(">", [F("data-table-base-table", `
 display: flex;
 flex-direction: column;
 flex-grow: 1;
 `, [O(">", [F("data-table-base-table-body", "flex-basis: 0;", [
  // last-child means there is no empty icon
  // body is a scrollbar, we need to override height 100%
  O("&:last-child", "flex-grow: 1;")
])])])])])])]), O(">", [F("data-table-loading-wrapper", `
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
 `, [xo({
  originalTransform: "translateX(-50%) translateY(-50%)"
})])]), F("data-table-expand-placeholder", `
 margin-right: 8px;
 display: inline-block;
 width: 16px;
 height: 1px;
 `), F("data-table-indent", `
 display: inline-block;
 height: 1px;
 `), F("data-table-expand-trigger", `
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
 `, [_("expanded", [F("icon", "transform: rotate(90deg);", [qt({
  originalTransform: "rotate(90deg)"
})]), F("base-icon", "transform: rotate(90deg);", [qt({
  originalTransform: "rotate(90deg)"
})])]), F("base-loading", `
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [qt()]), F("icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [qt()]), F("base-icon", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `, [qt()])]), F("data-table-thead", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-merged-th-color);
 `), F("data-table-tr", `
 position: relative;
 box-sizing: border-box;
 background-clip: padding-box;
 transition: background-color .3s var(--n-bezier);
 `, [F("data-table-expand", `
 position: sticky;
 left: 0;
 overflow: hidden;
 margin: calc(var(--n-th-padding) * -1);
 padding: var(--n-th-padding);
 box-sizing: border-box;
 `), _("striped", "background-color: var(--n-merged-td-color-striped);", [F("data-table-td", "background-color: var(--n-merged-td-color-striped);")]), qe("summary", [O("&:hover", "background-color: var(--n-merged-td-color-hover);", [O(">", [F("data-table-td", "background-color: var(--n-merged-td-color-hover);")])])])]), F("data-table-th", `
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
 `, [_("filterable", `
 padding-right: 36px;
 `, [_("sortable", `
 padding-right: calc(var(--n-th-padding) + 36px);
 `)]), id, _("selection", `
 padding: 0;
 text-align: center;
 line-height: 0;
 z-index: 3;
 `), E("title-wrapper", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 max-width: 100%;
 `, [E("title", `
 flex: 1;
 min-width: 0;
 `)]), E("ellipsis", `
 display: inline-block;
 vertical-align: bottom;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 `), _("hover", `
 background-color: var(--n-merged-th-color-hover);
 `), _("sorting", `
 background-color: var(--n-merged-th-color-sorting);
 `), _("sortable", `
 cursor: pointer;
 `, [E("ellipsis", `
 max-width: calc(100% - 18px);
 `), O("&:hover", `
 background-color: var(--n-merged-th-color-hover);
 `)]), F("data-table-sorter", `
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
 `, [F("base-icon", "transition: transform .3s var(--n-bezier)"), _("desc", [F("base-icon", `
 transform: rotate(0deg);
 `)]), _("asc", [F("base-icon", `
 transform: rotate(-180deg);
 `)]), _("asc, desc", `
 color: var(--n-th-icon-color-active);
 `)]), F("data-table-resize-button", `
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
 `), _("active", [O("&::after", ` 
 background-color: var(--n-th-icon-color-active);
 `)]), O("&:hover::after", `
 background-color: var(--n-th-icon-color-active);
 `)]), F("data-table-filter", `
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
 `), _("show", `
 background-color: var(--n-th-button-color-hover);
 `), _("active", `
 background-color: var(--n-th-button-color-hover);
 color: var(--n-th-icon-color-active);
 `)])]), F("data-table-td", `
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
 `, [_("expand", [F("data-table-expand-trigger", `
 margin-right: 0;
 `)]), _("last-row", `
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
]), _("summary", `
 background-color: var(--n-merged-th-color);
 `), _("hover", `
 background-color: var(--n-merged-td-color-hover);
 `), _("sorting", `
 background-color: var(--n-merged-td-color-sorting);
 `), E("ellipsis", `
 display: inline-block;
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap;
 max-width: 100%;
 vertical-align: bottom;
 max-width: calc(100% - var(--indent-offset, -1.5) * 16px - 24px);
 `), _("selection, expand", `
 text-align: center;
 padding: 0;
 line-height: 0;
 `), id]), F("data-table-empty", `
 box-sizing: border-box;
 padding: var(--n-empty-padding);
 flex-grow: 1;
 flex-shrink: 0;
 opacity: 1;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: opacity .3s var(--n-bezier);
 `, [_("hide", `
 opacity: 0;
 `)]), E("pagination", `
 margin: var(--n-pagination-margin);
 display: flex;
 justify-content: flex-end;
 `), F("data-table-wrapper", `
 position: relative;
 opacity: 1;
 transition: opacity .3s var(--n-bezier), border-color .3s var(--n-bezier);
 border-top-left-radius: var(--n-border-radius);
 border-top-right-radius: var(--n-border-radius);
 line-height: var(--n-line-height);
 `), _("loading", [F("data-table-wrapper", `
 opacity: var(--n-opacity-loading);
 pointer-events: none;
 `)]), _("single-column", [F("data-table-td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `, [O("&::after, &::before", `
 bottom: 0 !important;
 `)])]), qe("single-line", [F("data-table-th", `
 border-right: 1px solid var(--n-merged-border-color);
 `, [_("last", `
 border-right: 0 solid var(--n-merged-border-color);
 `)]), F("data-table-td", `
 border-right: 1px solid var(--n-merged-border-color);
 `, [_("last-col", `
 border-right: 0 solid var(--n-merged-border-color);
 `)])]), _("bordered", [F("data-table-wrapper", `
 border: 1px solid var(--n-merged-border-color);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 overflow: hidden;
 `)]), F("data-table-base-table", [_("transition-disabled", [F("data-table-th", [O("&::after, &::before", "transition: none;")]), F("data-table-td", [O("&::after, &::before", "transition: none;")])])]), _("bottom-bordered", [F("data-table-td", [_("last-row", `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)])]), F("data-table-table", `
 font-variant-numeric: tabular-nums;
 width: 100%;
 word-break: break-word;
 transition: background-color .3s var(--n-bezier);
 border-collapse: separate;
 border-spacing: 0;
 background-color: var(--n-merged-td-color);
 `), F("data-table-base-table-header", `
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
 `)]), F("data-table-check-extra", `
 transition: color .3s var(--n-bezier);
 color: var(--n-th-icon-color);
 position: absolute;
 font-size: 14px;
 right: -4px;
 top: 50%;
 transform: translateY(-50%);
 z-index: 1;
 `)]), F("data-table-filter-menu", [F("scrollbar", `
 max-height: 240px;
 `), E("group", `
 display: flex;
 flex-direction: column;
 padding: 12px 12px 0 12px;
 `, [F("checkbox", `
 margin-bottom: 12px;
 margin-right: 0;
 `), F("radio", `
 margin-bottom: 12px;
 margin-right: 0;
 `)]), E("action", `
 padding: var(--n-action-padding);
 display: flex;
 flex-wrap: nowrap;
 justify-content: space-evenly;
 border-top: 1px solid var(--n-action-divider-color);
 `, [F("button", [O("&:not(:last-child)", `
 margin: var(--n-action-button-margin);
 `), O("&:last-child", `
 margin-right: 0;
 `)])]), F("divider", `
 margin: 0 !important;
 `)]), ai(F("data-table", `
 --n-merged-th-color: var(--n-th-color-modal);
 --n-merged-td-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 --n-merged-th-color-hover: var(--n-th-color-hover-modal);
 --n-merged-td-color-hover: var(--n-td-color-hover-modal);
 --n-merged-th-color-sorting: var(--n-th-color-hover-modal);
 --n-merged-td-color-sorting: var(--n-td-color-hover-modal);
 --n-merged-td-color-striped: var(--n-td-color-striped-modal);
 `)), Ea(F("data-table", `
 --n-merged-th-color: var(--n-th-color-popover);
 --n-merged-td-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 --n-merged-th-color-hover: var(--n-th-color-hover-popover);
 --n-merged-td-color-hover: var(--n-td-color-hover-popover);
 --n-merged-th-color-sorting: var(--n-th-color-hover-popover);
 --n-merged-td-color-sorting: var(--n-td-color-hover-popover);
 --n-merged-td-color-striped: var(--n-td-color-striped-popover);
 `))]);
function _y() {
  return [_("fixed-left", `
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
 `)]), _("fixed-right", `
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
function Ny(e, t) {
  const {
    paginatedDataRef: r,
    treeMateRef: o,
    selectionColumnRef: i
  } = t, a = L(e.defaultCheckedRowKeys), l = z(() => {
    var B;
    const {
      checkedRowKeys: R
    } = e, y = R === void 0 ? a.value : R;
    return ((B = i.value) === null || B === void 0 ? void 0 : B.multiple) === !1 ? {
      checkedKeys: y.slice(0, 1),
      indeterminateKeys: []
    } : o.value.getCheckedKeys(y, {
      cascade: e.cascade,
      allowNotLoaded: e.allowCheckingNotLoaded
    });
  }), s = z(() => l.value.checkedKeys), d = z(() => l.value.indeterminateKeys), u = z(() => new Set(s.value)), c = z(() => new Set(d.value)), v = z(() => {
    const {
      value: B
    } = u;
    return r.value.reduce((R, y) => {
      const {
        key: P,
        disabled: D
      } = y;
      return R + (!D && B.has(P) ? 1 : 0);
    }, 0);
  }), p = z(() => r.value.filter((B) => B.disabled).length), x = z(() => {
    const {
      length: B
    } = r.value, {
      value: R
    } = c;
    return v.value > 0 && v.value < B - p.value || r.value.some((y) => R.has(y.key));
  }), h = z(() => {
    const {
      length: B
    } = r.value;
    return v.value !== 0 && v.value === B - p.value;
  }), g = z(() => r.value.length === 0);
  function b(B, R, y) {
    const {
      "onUpdate:checkedRowKeys": P,
      onUpdateCheckedRowKeys: D,
      onCheckedRowKeysChange: T
    } = e, U = [], {
      value: {
        getNode: M
      }
    } = o;
    B.forEach((n) => {
      var $;
      const A = ($ = M(n)) === null || $ === void 0 ? void 0 : $.rawNode;
      U.push(A);
    }), P && ne(P, B, U, {
      row: R,
      action: y
    }), D && ne(D, B, U, {
      row: R,
      action: y
    }), T && ne(T, B, U, {
      row: R,
      action: y
    }), a.value = B;
  }
  function m(B, R = !1, y) {
    if (!e.loading) {
      if (R) {
        b(Array.isArray(B) ? B.slice(0, 1) : [B], y, "check");
        return;
      }
      b(o.value.check(B, s.value, {
        cascade: e.cascade,
        allowNotLoaded: e.allowCheckingNotLoaded
      }).checkedKeys, y, "check");
    }
  }
  function C(B, R) {
    e.loading || b(o.value.uncheck(B, s.value, {
      cascade: e.cascade,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, R, "uncheck");
  }
  function S(B = !1) {
    const {
      value: R
    } = i;
    if (!R || e.loading) return;
    const y = [];
    (B ? o.value.treeNodes : r.value).forEach((P) => {
      P.disabled || y.push(P.key);
    }), b(o.value.check(y, s.value, {
      cascade: !0,
      allowNotLoaded: e.allowCheckingNotLoaded
    }).checkedKeys, void 0, "checkAll");
  }
  function w(B = !1) {
    const {
      value: R
    } = i;
    if (!R || e.loading) return;
    const y = [];
    (B ? o.value.treeNodes : r.value).forEach((P) => {
      P.disabled || y.push(P.key);
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
    allRowsCheckedRef: h,
    headerCheckboxDisabledRef: g,
    doUpdateCheckedRowKeys: b,
    doCheckAll: S,
    doUncheckAll: w,
    doCheck: m,
    doUncheck: C
  };
}
function Hy(e, t) {
  const r = Ve(() => {
    for (const u of e.columns)
      if (u.type === "expand")
        return process.env.NODE_ENV !== "production" && !u.renderExpand && Pt("data-table", "column with type `expand` has no `renderExpand` prop."), u.renderExpand;
  }), o = Ve(() => {
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
  })() : t.value.getNonLeafKeys() : e.defaultExpandedRowKeys), a = oe(e, "expandedRowKeys"), l = oe(e, "stickyExpandedRows"), s = Et(a, i);
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
function jy(e, t) {
  const r = [], o = [], i = [], a = /* @__PURE__ */ new WeakMap();
  let l = -1, s = 0, d = !1;
  function u(p, x) {
    x > l && (r[x] = [], l = x), p.forEach((h, g) => {
      if ("children" in h)
        u(h.children, x + 1);
      else {
        const b = "key" in h ? h.key : void 0;
        o.push({
          key: tn(h),
          style: UC(h, b !== void 0 ? gt(t(b)) : void 0),
          column: h,
          index: g,
          // The width property is only applied to horizontally virtual scroll table
          width: h.width === void 0 ? 128 : Number(h.width)
        }), s += 1, d || (d = !!h.ellipsis), i.push(h);
      }
    });
  }
  u(e, 0);
  let c = 0;
  function v(p, x) {
    let h = 0;
    p.forEach((g) => {
      var b;
      if ("children" in g) {
        const m = c, C = {
          column: g,
          colIndex: c,
          colSpan: 0,
          rowSpan: 1,
          isLast: !1
        };
        v(g.children, x + 1), g.children.forEach((S) => {
          var w, B;
          C.colSpan += (B = (w = a.get(S)) === null || w === void 0 ? void 0 : w.colSpan) !== null && B !== void 0 ? B : 0;
        }), m + C.colSpan === s && (C.isLast = !0), a.set(g, C), r[x].push(C);
      } else {
        if (c < h) {
          c += 1;
          return;
        }
        let m = 1;
        "titleColSpan" in g && (m = (b = g.titleColSpan) !== null && b !== void 0 ? b : 1), m > 1 && (h = c + m);
        const C = c + m === s, S = {
          column: g,
          colSpan: m,
          colIndex: c,
          rowSpan: l - x + 1,
          isLast: C
        };
        a.set(g, S), r[x].push(S), c += 1;
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
function Wy(e, t) {
  const r = z(() => jy(e.columns, t));
  return {
    rowsRef: z(() => r.value.rows),
    colsRef: z(() => r.value.cols),
    hasEllipsisRef: z(() => r.value.hasEllipsis),
    dataRelatedColsRef: z(() => r.value.dataRelatedCols)
  };
}
function Vy() {
  const e = L({});
  function t(i) {
    return e.value[i];
  }
  function r(i, a) {
    sc(i) && "key" in i && (e.value[i.key] = a);
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
function Ky(e, {
  mainTableInstRef: t,
  mergedCurrentPageRef: r,
  bodyWidthRef: o
}) {
  let i = 0;
  const a = L(), l = L(null), s = L([]), d = L(null), u = L([]), c = z(() => gt(e.scrollX)), v = z(() => e.columns.filter((D) => D.fixed === "left")), p = z(() => e.columns.filter((D) => D.fixed === "right")), x = z(() => {
    const D = {};
    let T = 0;
    function U(M) {
      M.forEach((n) => {
        const $ = {
          start: T,
          end: 0
        };
        D[tn(n)] = $, "children" in n ? (U(n.children), $.end = T) : (T += Qs(n) || 0, $.end = T);
      });
    }
    return U(v.value), D;
  }), h = z(() => {
    const D = {};
    let T = 0;
    function U(M) {
      for (let n = M.length - 1; n >= 0; --n) {
        const $ = M[n], A = {
          start: T,
          end: 0
        };
        D[tn($)] = A, "children" in $ ? (U($.children), A.end = T) : (T += Qs($) || 0, A.end = T);
      }
    }
    return U(p.value), D;
  });
  function g() {
    var D, T;
    const {
      value: U
    } = v;
    let M = 0;
    const {
      value: n
    } = x;
    let $ = null;
    for (let A = 0; A < U.length; ++A) {
      const N = tn(U[A]);
      if (i > (((D = n[N]) === null || D === void 0 ? void 0 : D.start) || 0) - M)
        $ = N, M = ((T = n[N]) === null || T === void 0 ? void 0 : T.end) || 0;
      else
        break;
    }
    l.value = $;
  }
  function b() {
    s.value = [];
    let D = e.columns.find((T) => tn(T) === l.value);
    for (; D && "children" in D; ) {
      const T = D.children.length;
      if (T === 0) break;
      const U = D.children[T - 1];
      s.value.push(tn(U)), D = U;
    }
  }
  function m() {
    var D, T;
    const {
      value: U
    } = p, M = Number(e.scrollX), {
      value: n
    } = o;
    if (n === null) return;
    let $ = 0, A = null;
    const {
      value: N
    } = h;
    for (let I = U.length - 1; I >= 0; --I) {
      const V = tn(U[I]);
      if (Math.round(i + (((D = N[V]) === null || D === void 0 ? void 0 : D.start) || 0) + n - $) < M)
        A = V, $ = ((T = N[V]) === null || T === void 0 ? void 0 : T.end) || 0;
      else
        break;
    }
    d.value = A;
  }
  function C() {
    u.value = [];
    let D = e.columns.find((T) => tn(T) === d.value);
    for (; D && "children" in D && D.children.length; ) {
      const T = D.children[0];
      u.value.push(tn(T)), D = T;
    }
  }
  function S() {
    const D = t.value ? t.value.getHeaderElement() : null, T = t.value ? t.value.getBodyElement() : null;
    return {
      header: D,
      body: T
    };
  }
  function w() {
    const {
      body: D
    } = S();
    D && (D.scrollTop = 0);
  }
  function B() {
    a.value !== "body" ? Vo(y) : a.value = void 0;
  }
  function R(D) {
    var T;
    (T = e.onScroll) === null || T === void 0 || T.call(e, D), a.value !== "head" ? Vo(y) : a.value = void 0;
  }
  function y() {
    const {
      header: D,
      body: T
    } = S();
    if (!T) return;
    const {
      value: U
    } = o;
    if (U !== null) {
      if (e.maxHeight || e.flexHeight) {
        if (!D) return;
        const M = i - D.scrollLeft;
        a.value = M !== 0 ? "head" : "body", a.value === "head" ? (i = D.scrollLeft, T.scrollLeft = i) : (i = T.scrollLeft, D.scrollLeft = i);
      } else
        i = T.scrollLeft;
      g(), b(), m(), C();
    }
  }
  function P(D) {
    const {
      header: T
    } = S();
    T && (T.scrollLeft = D, y());
  }
  return Ne(r, () => {
    w();
  }), {
    styleScrollXRef: c,
    fixedColumnLeftMapRef: x,
    fixedColumnRightMapRef: h,
    leftFixedColumnsRef: v,
    rightFixedColumnsRef: p,
    leftActiveFixedColKeyRef: l,
    leftActiveFixedChildrenColKeysRef: s,
    rightActiveFixedColKeyRef: d,
    rightActiveFixedChildrenColKeysRef: u,
    syncScrollState: y,
    handleTableBodyScroll: R,
    handleTableHeaderScroll: B,
    setHeaderScrollLeft: P
  };
}
function Oo(e) {
  return typeof e == "object" && typeof e.multiple == "number" ? e.multiple : !1;
}
function Uy(e, t) {
  return t && (e === void 0 || e === "default" || typeof e == "object" && e.compare === "default") ? qy(t) : typeof e == "function" ? e : e && typeof e == "object" && e.compare && e.compare !== "default" ? e.compare : !1;
}
function qy(e) {
  return (t, r) => {
    const o = t[e], i = r[e];
    return o == null ? i == null ? 0 : -1 : i == null ? 1 : typeof o == "number" && typeof i == "number" ? o - i : typeof o == "string" && typeof i == "string" ? o.localeCompare(i) : 0;
  };
}
function Gy(e, {
  dataRelatedColsRef: t,
  filteredDataRef: r
}) {
  const o = [];
  t.value.forEach((x) => {
    var h;
    x.sorter !== void 0 && p(o, {
      columnKey: x.key,
      sorter: x.sorter,
      order: (h = x.defaultSortOrder) !== null && h !== void 0 ? h : !1
    });
  });
  const i = L(o), a = z(() => {
    const x = t.value.filter((b) => b.type !== "selection" && b.sorter !== void 0 && (b.sortOrder === "ascend" || b.sortOrder === "descend" || b.sortOrder === !1)), h = x.filter((b) => b.sortOrder !== !1);
    if (h.length)
      return h.map((b) => ({
        columnKey: b.key,
        // column to sort has controlled sorter
        // sorter && sort order won't be undefined
        order: b.sortOrder,
        sorter: b.sorter
      }));
    if (x.length) return [];
    const {
      value: g
    } = i;
    return Array.isArray(g) ? g : g ? [g] : [];
  }), l = z(() => {
    const x = a.value.slice().sort((h, g) => {
      const b = Oo(h.sorter) || 0;
      return (Oo(g.sorter) || 0) - b;
    });
    return x.length ? r.value.slice().sort((g, b) => {
      let m = 0;
      return x.some((C) => {
        const {
          columnKey: S,
          sorter: w,
          order: B
        } = C, R = Uy(w, S);
        return R && B && (m = R(g.rawNode, b.rawNode), m !== 0) ? (m = m * VC(B), !0) : !1;
      }), m;
    }) : r.value;
  });
  function s(x) {
    let h = a.value.slice();
    return x && Oo(x.sorter) !== !1 ? (h = h.filter((g) => Oo(g.sorter) !== !1), p(h, x), h) : x || null;
  }
  function d(x) {
    const h = s(x);
    u(h);
  }
  function u(x) {
    const {
      "onUpdate:sorter": h,
      onUpdateSorter: g,
      onSorterChange: b
    } = e;
    h && ne(h, x), g && ne(g, x), b && ne(b, x), i.value = x;
  }
  function c(x, h = "ascend") {
    if (!x)
      v();
    else {
      const g = t.value.find((m) => m.type !== "selection" && m.type !== "expand" && m.key === x);
      if (!(g != null && g.sorter)) return;
      const b = g.sorter;
      d({
        columnKey: x,
        sorter: b,
        order: h
      });
    }
  }
  function v() {
    u(null);
  }
  function p(x, h) {
    const g = x.findIndex((b) => (h == null ? void 0 : h.columnKey) && b.columnKey === h.columnKey);
    g !== void 0 && g >= 0 ? x[g] = h : x.push(h);
  }
  return {
    clearSorter: v,
    sort: c,
    sortedDataRef: l,
    mergedSortStateRef: a,
    deriveNextSorter: d
  };
}
function Xy(e, {
  dataRelatedColsRef: t
}) {
  const r = z(() => {
    const K = (H) => {
      for (let q = 0; q < H.length; ++q) {
        const Y = H[q];
        if ("children" in Y)
          return K(Y.children);
        if (Y.type === "selection")
          return Y;
      }
      return null;
    };
    return K(e.columns);
  }), o = z(() => {
    const {
      childrenKey: K
    } = e;
    return vi(e.data, {
      ignoreEmptyChildren: !0,
      getKey: e.rowKey,
      getChildren: (H) => H[K],
      getDisabled: (H) => {
        var q, Y;
        return !!(!((Y = (q = r.value) === null || q === void 0 ? void 0 : q.disabled) === null || Y === void 0) && Y.call(q, H));
      }
    });
  }), i = Ve(() => {
    const {
      columns: K
    } = e, {
      length: H
    } = K;
    let q = null;
    for (let Y = 0; Y < H; ++Y) {
      const ie = K[Y];
      if (!ie.type && q === null && (q = Y), "tree" in ie && ie.tree)
        return Y;
    }
    return q || 0;
  }), a = L({}), {
    pagination: l
  } = e, s = L(l && l.defaultPage || 1), d = L(tc(l)), u = z(() => {
    const K = t.value.filter((Y) => Y.filterOptionValues !== void 0 || Y.filterOptionValue !== void 0), H = {};
    return K.forEach((Y) => {
      var ie;
      Y.type === "selection" || Y.type === "expand" || (Y.filterOptionValues === void 0 ? H[Y.key] = (ie = Y.filterOptionValue) !== null && ie !== void 0 ? ie : null : H[Y.key] = Y.filterOptionValues);
    }), Object.assign(ed(a.value), H);
  }), c = z(() => {
    const K = u.value, {
      columns: H
    } = e;
    function q(ae) {
      return (fe, we) => !!~String(we[ae]).indexOf(String(fe));
    }
    const {
      value: {
        treeNodes: Y
      }
    } = o, ie = [];
    return H.forEach((ae) => {
      ae.type === "selection" || ae.type === "expand" || "children" in ae || ie.push([ae.key, ae]);
    }), Y ? Y.filter((ae) => {
      const {
        rawNode: fe
      } = ae;
      for (const [we, G] of ie) {
        let ue = K[we];
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
    sortedDataRef: v,
    deriveNextSorter: p,
    mergedSortStateRef: x,
    sort: h,
    clearSorter: g
  } = Gy(e, {
    dataRelatedColsRef: t,
    filteredDataRef: c
  });
  t.value.forEach((K) => {
    var H;
    if (K.filter) {
      const q = K.defaultFilterOptionValues;
      K.filterMultiple ? a.value[K.key] = q || [] : q !== void 0 ? a.value[K.key] = q === null ? [] : q : a.value[K.key] = (H = K.defaultFilterOptionValue) !== null && H !== void 0 ? H : null;
    }
  });
  const b = z(() => {
    const {
      pagination: K
    } = e;
    if (K !== !1)
      return K.page;
  }), m = z(() => {
    const {
      pagination: K
    } = e;
    if (K !== !1)
      return K.pageSize;
  }), C = Et(b, s), S = Et(m, d), w = Ve(() => {
    const K = C.value;
    return e.remote ? K : Math.max(1, Math.min(Math.ceil(c.value.length / S.value), K));
  }), B = z(() => {
    const {
      pagination: K
    } = e;
    if (K) {
      const {
        pageCount: H
      } = K;
      if (H !== void 0) return H;
    }
  }), R = z(() => {
    if (e.remote) return o.value.treeNodes;
    if (!e.pagination) return v.value;
    const K = S.value, H = (w.value - 1) * K;
    return v.value.slice(H, H + K);
  }), y = z(() => R.value.map((K) => K.rawNode));
  function P(K) {
    const {
      pagination: H
    } = e;
    if (H) {
      const {
        onChange: q,
        "onUpdate:page": Y,
        onUpdatePage: ie
      } = H;
      q && ne(q, K), ie && ne(ie, K), Y && ne(Y, K), M(K);
    }
  }
  function D(K) {
    const {
      pagination: H
    } = e;
    if (H) {
      const {
        onPageSizeChange: q,
        "onUpdate:pageSize": Y,
        onUpdatePageSize: ie
      } = H;
      q && ne(q, K), ie && ne(ie, K), Y && ne(Y, K), n(K);
    }
  }
  const T = z(() => {
    if (e.remote) {
      const {
        pagination: K
      } = e;
      if (K) {
        const {
          itemCount: H
        } = K;
        if (H !== void 0) return H;
      }
      return;
    }
    return c.value.length;
  }), U = z(() => Object.assign(Object.assign({}, e.pagination), {
    // reset deprecated methods
    onChange: void 0,
    onUpdatePage: void 0,
    onUpdatePageSize: void 0,
    onPageSizeChange: void 0,
    "onUpdate:page": P,
    "onUpdate:pageSize": D,
    // writing merged props after pagination to avoid
    // pagination[key] === undefined
    // key still exists but value is undefined
    page: w.value,
    pageSize: S.value,
    pageCount: T.value === void 0 ? B.value : void 0,
    itemCount: T.value
  }));
  function M(K) {
    const {
      "onUpdate:page": H,
      onPageChange: q,
      onUpdatePage: Y
    } = e;
    Y && ne(Y, K), H && ne(H, K), q && ne(q, K), s.value = K;
  }
  function n(K) {
    const {
      "onUpdate:pageSize": H,
      onPageSizeChange: q,
      onUpdatePageSize: Y
    } = e;
    q && ne(q, K), Y && ne(Y, K), H && ne(H, K), d.value = K;
  }
  function $(K, H) {
    const {
      onUpdateFilters: q,
      "onUpdate:filters": Y,
      onFiltersChange: ie
    } = e;
    q && ne(q, K, H), Y && ne(Y, K, H), ie && ne(ie, K, H), a.value = K;
  }
  function A(K, H, q, Y) {
    var ie;
    (ie = e.onUnstableColumnResize) === null || ie === void 0 || ie.call(e, K, H, q, Y);
  }
  function N(K) {
    M(K);
  }
  function I() {
    V();
  }
  function V() {
    te({});
  }
  function te(K) {
    X(K);
  }
  function X(K) {
    K ? K ? a.value = ed(K) : process.env.NODE_ENV !== "production" && Pt("data-table", "`filters` is not an object") : a.value = {};
  }
  return {
    treeMateRef: o,
    mergedCurrentPageRef: w,
    mergedPaginationRef: U,
    paginatedDataRef: R,
    rawPaginatedDataRef: y,
    mergedFilterStateRef: u,
    mergedSortStateRef: x,
    hoverKeyRef: L(null),
    selectionColumnRef: r,
    childTriggerColIndexRef: i,
    doUpdateFilters: $,
    deriveNextSorter: p,
    doUpdatePageSize: n,
    doUpdatePage: M,
    onUnstableColumnResize: A,
    // exported methods
    filter: X,
    filters: te,
    clearFilter: I,
    clearFilters: V,
    clearSorter: g,
    page: N,
    sort: h
  };
}
const Yy = ee({
  name: "DataTable",
  alias: ["AdvancedTable"],
  props: jC,
  setup(e, {
    slots: t
  }) {
    process.env.NODE_ENV !== "production" && et(() => {
      e.onPageChange !== void 0 && it("data-table", "`on-page-change` is deprecated, please use `on-update:page` instead."), e.onPageSizeChange !== void 0 && it("data-table", "`on-page-size-change` is deprecated, please use `on-update:page-size` instead."), e.onSorterChange !== void 0 && it("data-table", "`on-sorter-change` is deprecated, please use `on-update:sorter` instead."), e.onFiltersChange !== void 0 && it("data-table", "`on-filters-change` is deprecated, please use `on-update:filters` instead."), e.onCheckedRowKeysChange !== void 0 && it("data-table", "`on-checked-row-keys-change` is deprecated, please use `on-update:checked-row-keys` instead.");
    });
    const {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = Bt("DataTable", a, o), s = z(() => {
      const {
        bottomBordered: k
      } = e;
      return r.value ? !1 : k !== void 0 ? k : !0;
    }), d = ve("DataTable", "-data-table", Ly, HC, e, o), u = L(null), c = L(null), {
      getResizableWidth: v,
      clearResizableWidth: p,
      doUpdateResizableWidth: x
    } = Vy(), {
      rowsRef: h,
      colsRef: g,
      dataRelatedColsRef: b,
      hasEllipsisRef: m
    } = Wy(e, v), {
      treeMateRef: C,
      mergedCurrentPageRef: S,
      paginatedDataRef: w,
      rawPaginatedDataRef: B,
      selectionColumnRef: R,
      hoverKeyRef: y,
      mergedPaginationRef: P,
      mergedFilterStateRef: D,
      mergedSortStateRef: T,
      childTriggerColIndexRef: U,
      doUpdatePage: M,
      doUpdateFilters: n,
      onUnstableColumnResize: $,
      deriveNextSorter: A,
      filter: N,
      filters: I,
      clearFilter: V,
      clearFilters: te,
      clearSorter: X,
      page: K,
      sort: H
    } = Xy(e, {
      dataRelatedColsRef: b
    }), q = (k) => {
      const {
        fileName: W = "data.csv",
        keepOriginalData: J = !1
      } = k || {}, le = J ? e.data : B.value, se = YC(e.columns, le, e.getCsvCell, e.getCsvHeader), pe = new Blob([se], {
        type: "text/csv;charset=utf-8"
      }), me = URL.createObjectURL(pe);
      h0(me, W.endsWith(".csv") ? W : `${W}.csv`), URL.revokeObjectURL(me);
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
    } = Ny(e, {
      selectionColumnRef: R,
      treeMateRef: C,
      paginatedDataRef: w
    }), {
      stickyExpandedRowsRef: Fe,
      mergedExpandedRowKeysRef: Pe,
      renderExpandRef: at,
      expandableRef: Ze,
      doUpdateExpandedRowKeys: dt
    } = Hy(e, C), {
      handleTableBodyScroll: ut,
      handleTableHeaderScroll: xe,
      syncScrollState: Ce,
      setHeaderScrollLeft: ze,
      leftActiveFixedColKeyRef: Me,
      leftActiveFixedChildrenColKeysRef: Ye,
      rightActiveFixedColKeyRef: re,
      rightActiveFixedChildrenColKeysRef: he,
      leftFixedColumnsRef: Ee,
      rightFixedColumnsRef: lt,
      fixedColumnLeftMapRef: kt,
      fixedColumnRightMapRef: Rt
    } = Ky(e, {
      bodyWidthRef: u,
      mainTableInstRef: c,
      mergedCurrentPageRef: S
    }), {
      localeRef: ht
    } = Qn("DataTable"), tt = z(() => e.virtualScroll || e.flexHeight || e.maxHeight !== void 0 || m.value ? "fixed" : e.tableLayout);
    $e(rn, {
      props: e,
      treeMateRef: C,
      renderExpandIconRef: oe(e, "renderExpandIcon"),
      loadingKeySetRef: L(/* @__PURE__ */ new Set()),
      slots: t,
      indentRef: oe(e, "indent"),
      childTriggerColIndexRef: U,
      bodyWidthRef: u,
      componentId: cn(),
      hoverKeyRef: y,
      mergedClsPrefixRef: o,
      mergedThemeRef: d,
      scrollXRef: z(() => e.scrollX),
      rowsRef: h,
      colsRef: g,
      paginatedDataRef: w,
      leftActiveFixedColKeyRef: Me,
      leftActiveFixedChildrenColKeysRef: Ye,
      rightActiveFixedColKeyRef: re,
      rightActiveFixedChildrenColKeysRef: he,
      leftFixedColumnsRef: Ee,
      rightFixedColumnsRef: lt,
      fixedColumnLeftMapRef: kt,
      fixedColumnRightMapRef: Rt,
      mergedCurrentPageRef: S,
      someRowsCheckedRef: G,
      allRowsCheckedRef: ue,
      mergedSortStateRef: T,
      mergedFilterStateRef: D,
      loadingRef: oe(e, "loading"),
      rowClassNameRef: oe(e, "rowClassName"),
      mergedCheckedRowKeySetRef: Re,
      mergedExpandedRowKeysRef: Pe,
      mergedInderminateRowKeySetRef: be,
      localeRef: ht,
      expandableRef: Ze,
      stickyExpandedRowsRef: Fe,
      rowKeyRef: oe(e, "rowKey"),
      renderExpandRef: at,
      summaryRef: oe(e, "summary"),
      virtualScrollRef: oe(e, "virtualScroll"),
      virtualScrollXRef: oe(e, "virtualScrollX"),
      heightForRowRef: oe(e, "heightForRow"),
      minRowHeightRef: oe(e, "minRowHeight"),
      virtualScrollHeaderRef: oe(e, "virtualScrollHeader"),
      headerHeightRef: oe(e, "headerHeight"),
      rowPropsRef: oe(e, "rowProps"),
      stripedRef: oe(e, "striped"),
      checkOptionsRef: z(() => {
        const {
          value: k
        } = R;
        return k == null ? void 0 : k.options;
      }),
      rawPaginatedDataRef: B,
      filterMenuCssVarsRef: z(() => {
        const {
          self: {
            actionDividerColor: k,
            actionPadding: W,
            actionButtonMargin: J
          }
        } = d.value;
        return {
          "--n-action-padding": W,
          "--n-action-button-margin": J,
          "--n-action-divider-color": k
        };
      }),
      onLoadRef: oe(e, "onLoad"),
      mergedTableLayoutRef: tt,
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
      getResizableWidth: v,
      onUnstableColumnResize: $,
      clearResizableWidth: p,
      doUpdateResizableWidth: x,
      deriveNextSorter: A,
      doCheck: ae,
      doUncheck: fe,
      doCheckAll: Y,
      doUncheckAll: ie,
      doUpdateExpandedRowKeys: dt,
      handleTableHeaderScroll: xe,
      handleTableBodyScroll: ut,
      setHeaderScrollLeft: ze,
      renderCell: oe(e, "renderCell")
    });
    const mt = {
      filter: N,
      filters: I,
      clearFilters: te,
      clearSorter: X,
      page: K,
      sort: H,
      clearFilter: V,
      downloadCsv: q,
      scrollTo: (k, W) => {
        var J;
        (J = c.value) === null || J === void 0 || J.scrollTo(k, W);
      }
    }, Je = z(() => {
      const {
        size: k
      } = e, {
        common: {
          cubicBezierEaseInOut: W
        },
        self: {
          borderColor: J,
          tdColorHover: le,
          tdColorSorting: se,
          tdColorSortingModal: pe,
          tdColorSortingPopover: me,
          thColorSorting: Se,
          thColorSortingModal: Ie,
          thColorSortingPopover: nt,
          thColor: je,
          thColorHover: $t,
          tdColor: Tt,
          tdTextColor: Ot,
          thTextColor: Nt,
          thFontWeight: Ht,
          thButtonColorHover: Yt,
          thIconColor: jt,
          thIconColorActive: j,
          filterSize: Q,
          borderRadius: ye,
          lineHeight: Te,
          tdColorModal: Ke,
          thColorModal: Le,
          borderColorModal: ot,
          thColorHoverModal: ct,
          tdColorHoverModal: Ut,
          borderColorPopover: vn,
          thColorPopover: pn,
          tdColorPopover: Hn,
          tdColorHoverPopover: Tr,
          thColorHoverPopover: Or,
          paginationMargin: Mr,
          emptyPadding: Ir,
          boxShadowAfter: Lr,
          boxShadowBefore: Sn,
          sorterSize: Bn,
          resizableContainerSize: Ci,
          resizableSize: yi,
          loadingColor: wi,
          loadingSize: Si,
          opacityLoading: Bi,
          tdColorStriped: ki,
          tdColorStripedModal: Ri,
          tdColorStripedPopover: Fi,
          [Z("fontSize", k)]: Pi,
          [Z("thPadding", k)]: zi,
          [Z("tdPadding", k)]: $i
        }
      } = d.value;
      return {
        "--n-font-size": Pi,
        "--n-th-padding": zi,
        "--n-td-padding": $i,
        "--n-bezier": W,
        "--n-border-radius": ye,
        "--n-line-height": Te,
        "--n-border-color": J,
        "--n-border-color-modal": ot,
        "--n-border-color-popover": vn,
        "--n-th-color": je,
        "--n-th-color-hover": $t,
        "--n-th-color-modal": Le,
        "--n-th-color-hover-modal": ct,
        "--n-th-color-popover": pn,
        "--n-th-color-hover-popover": Or,
        "--n-td-color": Tt,
        "--n-td-color-hover": le,
        "--n-td-color-modal": Ke,
        "--n-td-color-hover-modal": Ut,
        "--n-td-color-popover": Hn,
        "--n-td-color-hover-popover": Tr,
        "--n-th-text-color": Nt,
        "--n-td-text-color": Ot,
        "--n-th-font-weight": Ht,
        "--n-th-button-color-hover": Yt,
        "--n-th-icon-color": jt,
        "--n-th-icon-color-active": j,
        "--n-filter-size": Q,
        "--n-pagination-margin": Mr,
        "--n-empty-padding": Ir,
        "--n-box-shadow-before": Sn,
        "--n-box-shadow-after": Lr,
        "--n-sorter-size": Bn,
        "--n-resizable-container-size": Ci,
        "--n-resizable-size": yi,
        "--n-loading-size": Si,
        "--n-loading-color": wi,
        "--n-opacity-loading": Bi,
        "--n-td-color-striped": ki,
        "--n-td-color-striped-modal": Ri,
        "--n-td-color-striped-popover": Fi,
        "n-td-color-sorting": se,
        "n-td-color-sorting-modal": pe,
        "n-td-color-sorting-popover": me,
        "n-th-color-sorting": Se,
        "n-th-color-sorting-modal": Ie,
        "n-th-color-sorting-popover": nt
      };
    }), ce = i ? Ge("data-table", z(() => e.size[0]), Je, e) : void 0, Be = z(() => {
      if (!e.pagination) return !1;
      if (e.paginateSinglePage) return !0;
      const k = P.value, {
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
      mergedPagination: P,
      mergedShowPagination: Be,
      cssVars: i ? void 0 : Je,
      themeClass: ce == null ? void 0 : ce.themeClass,
      onRender: ce == null ? void 0 : ce.onRender
    }, mt);
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
    }, f(Iy, {
      ref: "mainTableInstRef"
    })), this.mergedShowPagination ? f("div", {
      class: `${e}-data-table__pagination`
    }, f(nc, Object.assign({
      theme: this.mergedTheme.peers.Pagination,
      themeOverrides: this.mergedTheme.peerOverrides.Pagination,
      disabled: this.loading
    }, this.mergedPagination))) : null, f(_t, {
      name: "fade-in-scale-up-transition"
    }, {
      default: () => this.loading ? f("div", {
        class: `${e}-data-table-loading-wrapper`
      }, Xt(o.loading, () => [f(Nn, Object.assign({
        clsPrefix: e,
        strokeWidth: 20
      }, i))])) : null
    }));
  }
}), Sc = "n-dialog-provider", Bc = "n-dialog-api", Zy = "n-dialog-reactive-list";
function kc() {
  const e = ge(Bc, null);
  return e === null && On("use-dialog", "No outer <n-dialog-provider /> founded."), e;
}
const Jy = {
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
function Qy(e) {
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
    errorColor: p,
    primaryColor: x,
    dividerColor: h,
    borderRadius: g,
    fontWeightStrong: b,
    lineHeight: m,
    fontSize: C
  } = e;
  return Object.assign(Object.assign({}, Jy), {
    fontSize: C,
    lineHeight: m,
    border: `1px solid ${h}`,
    titleTextColor: t,
    textColor: r,
    color: o,
    closeColorHover: s,
    closeColorPressed: d,
    closeIconColor: i,
    closeIconColorHover: a,
    closeIconColorPressed: l,
    closeBorderRadius: g,
    iconColor: x,
    iconColorInfo: u,
    iconColorSuccess: c,
    iconColorWarning: v,
    iconColorError: p,
    borderRadius: g,
    titleFontWeight: b
  });
}
const Rc = {
  name: "Dialog",
  common: Xe,
  peers: {
    Button: pi
  },
  self: Qy
}, mi = {
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
}, Fc = Dn(mi), ew = O([F("dialog", `
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
}), _("bordered", {
  border: "var(--n-border)"
}), _("icon-top", [E("close", {
  margin: "var(--n-close-margin)"
}), E("icon", {
  margin: "var(--n-icon-margin)"
}), E("content", {
  textAlign: "center"
}), E("title", {
  justifyContent: "center"
}), E("action", {
  justifyContent: "center"
})]), _("icon-left", [E("icon", {
  margin: "var(--n-icon-margin)"
}), _("closable", [E("title", `
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
 `, [_("last", "margin-bottom: 0;")]), E("action", `
 display: flex;
 justify-content: flex-end;
 `, [O("> *:not(:last-child)", `
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
 `), F("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), ai(F("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), F("dialog", [Pd(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), tw = {
  default: () => f(ti, null),
  info: () => f(ti, null),
  success: () => f(al, null),
  warning: () => f(fi, null),
  error: () => f(il, null)
}, Pc = ee({
  name: "Dialog",
  alias: [
    "NimbusConfirmCard",
    // deprecated
    "Confirm"
    // deprecated
  ],
  props: Object.assign(Object.assign({}, ve.props), mi),
  setup(e) {
    const {
      mergedComponentPropsRef: t,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = Bt("Dialog", i, r), l = z(() => {
      var x, h;
      const {
        iconPlacement: g
      } = e;
      return g || ((h = (x = t == null ? void 0 : t.value) === null || x === void 0 ? void 0 : x.Dialog) === null || h === void 0 ? void 0 : h.iconPlacement) || "left";
    });
    function s(x) {
      const {
        onPositiveClick: h
      } = e;
      h && h(x);
    }
    function d(x) {
      const {
        onNegativeClick: h
      } = e;
      h && h(x);
    }
    function u() {
      const {
        onClose: x
      } = e;
      x && x();
    }
    const c = ve("Dialog", "-dialog", ew, Rc, e, r), v = z(() => {
      const {
        type: x
      } = e, h = l.value, {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          fontSize: b,
          lineHeight: m,
          border: C,
          titleTextColor: S,
          textColor: w,
          color: B,
          closeBorderRadius: R,
          closeColorHover: y,
          closeColorPressed: P,
          closeIconColor: D,
          closeIconColorHover: T,
          closeIconColorPressed: U,
          closeIconSize: M,
          borderRadius: n,
          titleFontWeight: $,
          titleFontSize: A,
          padding: N,
          iconSize: I,
          actionSpace: V,
          contentMargin: te,
          closeSize: X,
          [h === "top" ? "iconMarginIconTop" : "iconMargin"]: K,
          [h === "top" ? "closeMarginIconTop" : "closeMargin"]: H,
          [Z("iconColor", x)]: q
        }
      } = c.value, Y = Lt(K);
      return {
        "--n-font-size": b,
        "--n-icon-color": q,
        "--n-bezier": g,
        "--n-close-margin": H,
        "--n-icon-margin-top": Y.top,
        "--n-icon-margin-right": Y.right,
        "--n-icon-margin-bottom": Y.bottom,
        "--n-icon-margin-left": Y.left,
        "--n-icon-size": I,
        "--n-close-size": X,
        "--n-close-icon-size": M,
        "--n-close-border-radius": R,
        "--n-close-color-hover": y,
        "--n-close-color-pressed": P,
        "--n-close-icon-color": D,
        "--n-close-icon-color-hover": T,
        "--n-close-icon-color-pressed": U,
        "--n-color": B,
        "--n-text-color": w,
        "--n-border-radius": n,
        "--n-padding": N,
        "--n-line-height": m,
        "--n-border": C,
        "--n-content-margin": te,
        "--n-title-font-size": A,
        "--n-title-font-weight": $,
        "--n-title-text-color": S,
        "--n-action-space": V
      };
    }), p = o ? Ge("dialog", z(() => `${e.type[0]}${l.value[0]}`), v, e) : void 0;
    return {
      mergedClsPrefix: r,
      rtlEnabled: a,
      mergedIconPlacement: l,
      mergedTheme: c,
      handlePositiveClick: s,
      handleNegativeClick: d,
      handleCloseClick: u,
      cssVars: o ? void 0 : v,
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
      positiveButtonProps: v,
      negativeButtonProps: p,
      handlePositiveClick: x,
      handleNegativeClick: h,
      mergedTheme: g,
      loading: b,
      type: m,
      mergedClsPrefix: C
    } = this;
    (e = this.onRender) === null || e === void 0 || e.call(this);
    const S = a ? f(vt, {
      clsPrefix: C,
      class: `${C}-dialog__icon`
    }, {
      default: () => He(this.$slots.icon, (B) => B || (this.icon ? ft(this.icon) : tw[this.type]()))
    }) : null, w = He(this.$slots.action, (B) => B || c || u || d ? f("div", {
      class: [`${C}-dialog__action`, this.actionClass],
      style: this.actionStyle
    }, B || (d ? [ft(d)] : [this.negativeText && f(tr, Object.assign({
      theme: g.peers.Button,
      themeOverrides: g.peerOverrides.Button,
      ghost: !0,
      size: "small",
      onClick: h
    }, p), {
      default: () => ft(this.negativeText)
    }), this.positiveText && f(tr, Object.assign({
      theme: g.peers.Button,
      themeOverrides: g.peerOverrides.Button,
      size: "small",
      type: m === "default" ? "primary" : m,
      disabled: b,
      loading: b,
      onClick: x
    }, v), {
      default: () => ft(this.positiveText)
    })])) : null);
    return f("div", {
      class: [`${C}-dialog`, this.themeClass, this.closable && `${C}-dialog--closable`, `${C}-dialog--icon-${r}`, t && `${C}-dialog--bordered`, this.rtlEnabled && `${C}-dialog--rtl`],
      style: o,
      role: "dialog"
    }, i ? He(this.$slots.close, (B) => {
      const R = [`${C}-dialog__close`, this.rtlEnabled && `${C}-dialog--rtl`];
      return B ? f("div", {
        class: R
      }, B) : f(mo, {
        clsPrefix: C,
        class: R,
        onClick: this.handleCloseClick
      });
    }) : null, a && r === "top" ? f("div", {
      class: `${C}-dialog-icon-container`
    }, S) : null, f("div", {
      class: [`${C}-dialog__title`, this.titleClass],
      style: this.titleStyle
    }, a && r === "left" ? S : null, Xt(this.$slots.header, () => [ft(l)])), f("div", {
      class: [`${C}-dialog__content`, w ? "" : `${C}-dialog__content--last`, this.contentClass],
      style: this.contentStyle
    }, Xt(this.$slots.default, () => [ft(s)])), w);
  }
});
function nw(e) {
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
const rw = {
  name: "Modal",
  common: Xe,
  peers: {
    Scrollbar: bo,
    Dialog: Rc,
    Card: Uu
  },
  self: nw
}, Cl = Object.assign(Object.assign({}, fl), mi), ow = Dn(Cl), iw = ee({
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
  }, Cl), {
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
    const t = L(null), r = L(null), o = L(e.show), i = L(null), a = L(null);
    Ne(oe(e, "show"), (b) => {
      b && (o.value = !0);
    }), yh(z(() => e.blockScroll && o.value));
    const l = ge(Ed);
    function s() {
      if (l.transformOriginRef.value === "center")
        return "";
      const {
        value: b
      } = i, {
        value: m
      } = a;
      if (b === null || m === null)
        return "";
      if (r.value) {
        const C = r.value.containerScrollTop;
        return `${b}px ${m + C}px`;
      }
      return "";
    }
    function d(b) {
      if (l.transformOriginRef.value === "center")
        return;
      const m = l.getMousePosition();
      if (!m || !r.value) return;
      const C = r.value.containerScrollTop, {
        offsetLeft: S,
        offsetTop: w
      } = b;
      if (m) {
        const B = m.y, R = m.x;
        i.value = -(S - R), a.value = -(w - B - C);
      }
      b.style.transformOrigin = s();
    }
    function u(b) {
      bt(() => {
        d(b);
      });
    }
    function c(b) {
      b.style.transformOrigin = s(), e.onBeforeLeave();
    }
    function v() {
      o.value = !1, i.value = null, a.value = null, e.onAfterLeave();
    }
    function p() {
      const {
        onClose: b
      } = e;
      b && b();
    }
    function x() {
      e.onNegativeClick();
    }
    function h() {
      e.onPositiveClick();
    }
    const g = L(null);
    return Ne(g, (b) => {
      b && bt(() => {
        const m = b.el;
        m && t.value !== m && (t.value = m);
      });
    }), $e(si, t), $e(li, null), $e(po, null), {
      mergedTheme: l.mergedThemeRef,
      appear: l.appearRef,
      isMounted: l.isMountedRef,
      mergedClsPrefix: l.mergedClsPrefixRef,
      bodyRef: t,
      scrollbarRef: r,
      displayed: o,
      childNodeRef: g,
      handlePositiveClick: h,
      handleNegativeClick: x,
      handleCloseClick: p,
      handleAfterLeave: v,
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
      if (s = ia(e), !s) {
        Pt("modal", "default slot is empty");
        return;
      }
      s = xd(s), s.props = Vt({
        class: `${l}-modal`
      }, t, s.props || {});
    }
    return this.displayDirective === "show" || this.displayed || this.show ? un(f("div", {
      role: "none",
      class: `${l}-modal-body-wrapper`
    }, f(dr, {
      ref: "scrollbarRef",
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      contentClass: `${l}-modal-scroll-content`
    }, {
      default: () => {
        var d;
        return [(d = this.renderMask) === null || d === void 0 ? void 0 : d.call(this), f(Yd, {
          disabled: !this.trapFocus,
          active: this.show,
          onEsc: this.onEsc,
          autoFocus: this.autoFocus
        }, {
          default: () => {
            var u;
            return f(_t, {
              name: "fade-in-scale-up-transition",
              appear: (u = this.appear) !== null && u !== void 0 ? u : this.isMounted,
              onEnter: r,
              onAfterEnter: this.onAfterEnter,
              onAfterLeave: o,
              onBeforeLeave: i
            }, {
              default: () => {
                const c = [[wr, this.show]], {
                  onClickoutside: v
                } = this;
                return v && c.push([ro, this.onClickoutside, void 0, {
                  capture: !0
                }]), un(this.preset === "confirm" || this.preset === "dialog" ? f(Pc, Object.assign({}, this.$attrs, {
                  class: [`${l}-modal`, this.$attrs.class],
                  ref: "bodyRef",
                  theme: this.mergedTheme.peers.Dialog,
                  themeOverrides: this.mergedTheme.peerOverrides.Dialog
                }, Cn(this.$props, Fc), {
                  "aria-modal": "true"
                }), e) : this.preset === "card" ? f(nC, Object.assign({}, this.$attrs, {
                  ref: "bodyRef",
                  class: [`${l}-modal`, this.$attrs.class],
                  theme: this.mergedTheme.peers.Card,
                  themeOverrides: this.mergedTheme.peerOverrides.Card
                }, Cn(this.$props, eC), {
                  "aria-modal": "true",
                  role: "dialog"
                }), e) : this.childNodeRef = s, c);
              }
            });
          }
        })];
      }
    })), [[wr, this.displayDirective === "if" || this.displayed || this.show]]) : null;
  }
}), aw = O([F("modal-container", `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), F("modal-mask", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [hi({
  enterDuration: ".25s",
  leaveDuration: ".25s",
  enterCubicBezier: "var(--n-bezier-ease-out)",
  leaveCubicBezier: "var(--n-bezier-ease-out)"
})]), F("modal-body-wrapper", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [F("modal-scroll-content", `
 min-height: 100%;
 display: flex;
 position: relative;
 `)]), F("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [xo({
  duration: ".25s",
  enterScale: ".5"
})])]), zc = Object.assign(Object.assign(Object.assign(Object.assign({}, ve.props), {
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
}), Cl), {
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
}), $c = ee({
  name: "Modal",
  inheritAttrs: !1,
  props: zc,
  setup(e) {
    process.env.NODE_ENV !== "production" && (e.onHide && it("modal", "`on-hide` is deprecated."), e.onAfterHide && it("modal", "`on-after-hide` is deprecated, please use `on-after-leave` instead."), e.onBeforeHide && it("modal", "`on-before-hide` is deprecated, please use `on-before-leave` instead."), e.overlayStyle && it("modal", "`overlay-style` is deprecated, please use `style` instead."));
    const t = L(null), {
      mergedClsPrefixRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = ve("Modal", "-modal", aw, rw, e, r), l = Uo(64), s = Ko(), d = $r(), u = e.internalDialog ? ge(Sc, null) : null, c = e.internalModal ? ge(mh, null) : null, v = Ch();
    function p(R) {
      const {
        onUpdateShow: y,
        "onUpdate:show": P,
        onHide: D
      } = e;
      y && ne(y, R), P && ne(P, R), D && !R && D(R);
    }
    function x() {
      const {
        onClose: R
      } = e;
      R ? Promise.resolve(R()).then((y) => {
        y !== !1 && p(!1);
      }) : p(!1);
    }
    function h() {
      const {
        onPositiveClick: R
      } = e;
      R ? Promise.resolve(R()).then((y) => {
        y !== !1 && p(!1);
      }) : p(!1);
    }
    function g() {
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
    function m() {
      const {
        onAfterLeave: R,
        onAfterHide: y
      } = e;
      R && ne(R), y && y();
    }
    function C(R) {
      var y;
      const {
        onMaskClick: P
      } = e;
      P && P(R), e.maskClosable && !((y = t.value) === null || y === void 0) && y.contains(Sr(R)) && p(!1);
    }
    function S(R) {
      var y;
      (y = e.onEsc) === null || y === void 0 || y.call(e), e.show && e.closeOnEsc && g0(R) && (v.value || p(!1));
    }
    $e(Ed, {
      getMousePosition: () => {
        const R = u || c;
        if (R) {
          const {
            clickedRef: y,
            clickedPositionRef: P
          } = R;
          if (y.value && P.value)
            return P.value;
        }
        return l.value ? s.value : null;
      },
      mergedClsPrefixRef: r,
      mergedThemeRef: a,
      isMountedRef: d,
      appearRef: oe(e, "internalAppear"),
      transformOriginRef: oe(e, "transformOrigin")
    });
    const w = z(() => {
      const {
        common: {
          cubicBezierEaseOut: R
        },
        self: {
          boxShadow: y,
          color: P,
          textColor: D
        }
      } = a.value;
      return {
        "--n-bezier-ease-out": R,
        "--n-box-shadow": y,
        "--n-color": P,
        "--n-text-color": D
      };
    }), B = i ? Ge("theme-class", void 0, w, e) : void 0;
    return {
      mergedClsPrefix: r,
      namespace: o,
      isMounted: d,
      containerRef: t,
      presetProps: z(() => Cn(e, ow)),
      handleEsc: S,
      handleAfterLeave: m,
      handleClickoutside: C,
      handleBeforeLeave: b,
      doUpdateShow: p,
      handleNegativeClick: g,
      handlePositiveClick: h,
      handleCloseClick: x,
      cssVars: i ? void 0 : w,
      themeClass: B == null ? void 0 : B.themeClass,
      onRender: B == null ? void 0 : B.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: e
    } = this;
    return f(Ld, {
      to: this.to,
      show: this.show
    }, {
      default: () => {
        var t;
        (t = this.onRender) === null || t === void 0 || t.call(this);
        const {
          unstableShowMask: r
        } = this;
        return un(f("div", {
          role: "none",
          ref: "containerRef",
          class: [`${e}-modal-container`, this.themeClass, this.namespace],
          style: this.cssVars
        }, f(iw, Object.assign({
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
        }), this.$slots)), [[Ha, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
}), lw = Object.assign(Object.assign({}, mi), {
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
}), sw = ee({
  name: "DialogEnvironment",
  props: Object.assign(Object.assign({}, lw), {
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
        onAfterLeave: p
      } = e;
      c && c(v), p && p();
    }
    function o(c) {
      const {
        onPositiveClick: v
      } = e;
      v ? Promise.resolve(v(c)).then((p) => {
        p !== !1 && d();
      }) : d();
    }
    function i(c) {
      const {
        onNegativeClick: v
      } = e;
      v ? Promise.resolve(v(c)).then((p) => {
        p !== !1 && d();
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
        maskClosable: p
      } = e;
      v && (v(c), p && d());
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
    return f($c, {
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
      default: () => f(Pc, Object.assign({}, Cn(this.$props, Fc), {
        style: this.internalStyle,
        onClose: o,
        onNegativeClick: r,
        onPositiveClick: e
      }))
    });
  }
}), dw = {
  injectionKey: String,
  to: [String, Object]
}, Ac = ee({
  name: "DialogProvider",
  props: dw,
  setup() {
    const e = L([]), t = {};
    function r(s = {}) {
      const d = cn(), u = fo(Object.assign(Object.assign({}, s), {
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
    return $e(Bc, l), $e(Sc, {
      clickedRef: Uo(64),
      clickedPositionRef: Ko()
    }), $e(Zy, e), Object.assign(Object.assign({}, l), {
      dialogList: e,
      dialogInstRefs: t,
      handleAfterLeave: i
    });
  },
  render() {
    var e, t;
    return f(Qe, null, [this.dialogList.map((r) => f(sw, or(r, ["destroy", "style"], {
      internalStyle: r.style,
      to: this.to,
      ref: (o) => {
        o === null ? delete this.dialogInstRefs[`n-dialog-${r.key}`] : this.dialogInstRefs[`n-dialog-${r.key}`] = o;
      },
      internalKey: r.key,
      onInternalAfterLeave: this.handleAfterLeave
    }))), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)]);
  }
}), Dc = "n-loading-bar", Ec = "n-loading-bar-api";
function uw(e) {
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
const cw = {
  name: "LoadingBar",
  common: Xe,
  self: uw
}, fw = F("loading-bar-container", `
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`, [hi({
  enterDuration: "0.3s",
  leaveDuration: "0.8s"
}), F("loading-bar", `
 width: 100%;
 transition:
 max-width 4s linear,
 background .2s linear;
 height: var(--n-height);
 `, [_("starting", `
 background: var(--n-color-loading);
 `), _("finishing", `
 background: var(--n-color-loading);
 transition:
 max-width .2s linear,
 background .2s linear;
 `), _("error", `
 background: var(--n-color-error);
 transition:
 max-width .2s linear,
 background .2s linear;
 `)])]);
var Mo = function(e, t, r, o) {
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
function Io(e, t) {
  return `${t}-loading-bar ${t}-loading-bar--${e}`;
}
const hw = ee({
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
    } = ge(Dc), o = L(null), i = L(!1), a = L(!1), l = L(!1), s = L(!1);
    let d = !1;
    const u = L(!1), c = z(() => {
      const {
        loadingBarStyle: B
      } = t;
      return B ? B[u.value ? "error" : "loading"] : "";
    });
    function v() {
      return Mo(this, void 0, void 0, function* () {
        i.value = !1, l.value = !1, d = !1, u.value = !1, s.value = !0, yield bt(), s.value = !1;
      });
    }
    function p() {
      return Mo(this, arguments, void 0, function* (B = 0, R = 80, y = "starting") {
        if (a.value = !0, yield v(), d) return;
        l.value = !0, yield bt();
        const P = o.value;
        P && (P.style.maxWidth = `${B}%`, P.style.transition = "none", P.offsetWidth, P.className = Io(y, r.value), P.style.transition = "", P.style.maxWidth = `${R}%`);
      });
    }
    function x() {
      return Mo(this, void 0, void 0, function* () {
        if (d || u.value) return;
        a.value && (yield bt()), d = !0;
        const B = o.value;
        B && (B.className = Io("finishing", r.value), B.style.maxWidth = "100%", B.offsetWidth, l.value = !1);
      });
    }
    function h() {
      if (!(d || u.value))
        if (!l.value)
          p(100, 100, "error").then(() => {
            u.value = !0;
            const B = o.value;
            B && (B.className = Io("error", r.value), B.offsetWidth, l.value = !1);
          });
        else {
          u.value = !0;
          const B = o.value;
          if (!B) return;
          B.className = Io("error", r.value), B.style.maxWidth = "100%", B.offsetWidth, l.value = !1;
        }
    }
    function g() {
      i.value = !0;
    }
    function b() {
      i.value = !1;
    }
    function m() {
      return Mo(this, void 0, void 0, function* () {
        yield v();
      });
    }
    const C = ve("LoadingBar", "-loading-bar", fw, cw, t, r), S = z(() => {
      const {
        self: {
          height: B,
          colorError: R,
          colorLoading: y
        }
      } = C.value;
      return {
        "--n-height": B,
        "--n-color-loading": y,
        "--n-color-error": R
      };
    }), w = e ? Ge("loading-bar", void 0, S, t) : void 0;
    return {
      mergedClsPrefix: r,
      loadingBarRef: o,
      started: a,
      loading: l,
      entering: i,
      transitionDisabled: s,
      start: p,
      error: h,
      finish: x,
      handleEnter: g,
      handleAfterEnter: b,
      handleAfterLeave: m,
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
        return (t = this.onRender) === null || t === void 0 || t.call(this), un(f("div", {
          class: [`${e}-loading-bar-container`, this.themeClass, this.containerClass],
          style: this.containerStyle
        }, f("div", {
          ref: "loadingBarRef",
          class: [`${e}-loading-bar`],
          style: [this.cssVars, this.mergedLoadingBarStyle]
        })), [[wr, this.loading || !this.loading && this.entering]]);
      }
    });
  }
}), vw = Object.assign(Object.assign({}, ve.props), {
  to: {
    type: [String, Object, Boolean],
    default: void 0
  },
  containerClass: String,
  containerStyle: [String, Object],
  loadingBarStyle: {
    type: Object
  }
}), pw = ee({
  name: "LoadingBarProvider",
  props: vw,
  setup(e) {
    const t = $r(), r = L(null), o = {
      start() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.start() : bt(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.start();
        });
      },
      error() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.error() : bt(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.error();
        });
      },
      finish() {
        var a;
        t.value ? (a = r.value) === null || a === void 0 || a.finish() : bt(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.finish();
        });
      }
    }, {
      mergedClsPrefixRef: i
    } = Ae(e);
    return $e(Ec, o), $e(Dc, {
      props: e,
      mergedClsPrefixRef: i
    }), Object.assign(o, {
      loadingBarRef: r
    });
  },
  render() {
    var e, t;
    return f(Qe, null, f(oi, {
      disabled: this.to === !1,
      to: this.to || "body"
    }, f(hw, {
      ref: "loadingBarRef",
      containerStyle: this.containerStyle,
      containerClass: this.containerClass
    })), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e));
  }
});
function gw() {
  const e = ge(Ec, null);
  return e === null && On("use-loading-bar", "No outer <n-loading-bar-provider /> founded."), e;
}
const Tc = "n-message-api", Oc = "n-message-provider", mw = {
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
function bw(e) {
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
    lineHeight: p,
    borderRadius: x,
    closeColorHover: h,
    closeColorPressed: g
  } = e;
  return Object.assign(Object.assign({}, mw), {
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
    iconColorLoading: v,
    closeColorHover: h,
    closeColorPressed: g,
    closeIconColor: r,
    closeIconColorHover: o,
    closeIconColorPressed: i,
    closeColorHoverInfo: h,
    closeColorPressedInfo: g,
    closeIconColorInfo: r,
    closeIconColorHoverInfo: o,
    closeIconColorPressedInfo: i,
    closeColorHoverSuccess: h,
    closeColorPressedSuccess: g,
    closeIconColorSuccess: r,
    closeIconColorHoverSuccess: o,
    closeIconColorPressedSuccess: i,
    closeColorHoverError: h,
    closeColorPressedError: g,
    closeIconColorError: r,
    closeIconColorHoverError: o,
    closeIconColorPressedError: i,
    closeColorHoverWarning: h,
    closeColorPressedWarning: g,
    closeIconColorWarning: r,
    closeIconColorHoverWarning: o,
    closeIconColorPressedWarning: i,
    closeColorHoverLoading: h,
    closeColorPressedLoading: g,
    closeIconColorLoading: r,
    closeIconColorHoverLoading: o,
    closeIconColorPressedLoading: i,
    loadingColor: v,
    lineHeight: p,
    borderRadius: x
  });
}
const xw = {
  name: "Message",
  common: Xe,
  self: bw
}, Mc = {
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
}, Cw = O([F("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [Hu({
  overflow: "visible",
  originalTransition: "transform .3s var(--n-bezier)",
  enterToProps: {
    transform: "scale(1)"
  },
  leaveToProps: {
    transform: "scale(0.85)"
  }
})]), F("message", `
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
 `, [E("content", `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `), E("icon", `
 position: relative;
 margin: var(--n-icon-margin);
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 flex-shrink: 0;
 `, [["default", "info", "success", "warning", "error", "loading"].map((e) => _(`${e}-type`, [O("> *", `
 color: var(--n-icon-color-${e});
 transition: color .3s var(--n-bezier);
 `)])), O("> *", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 `, [qt()])]), E("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [O("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), O("&:active", `
 color: var(--n-close-icon-color-pressed);
 `)])]), F("message-container", `
 z-index: 6000;
 position: fixed;
 height: 0;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: center;
 `, [_("top", `
 top: 12px;
 left: 0;
 right: 0;
 `), _("top-left", `
 top: 12px;
 left: 12px;
 right: 0;
 align-items: flex-start;
 `), _("top-right", `
 top: 12px;
 left: 0;
 right: 12px;
 align-items: flex-end;
 `), _("bottom", `
 bottom: 4px;
 left: 0;
 right: 0;
 justify-content: flex-end;
 `), _("bottom-left", `
 bottom: 4px;
 left: 12px;
 right: 0;
 justify-content: flex-end;
 align-items: flex-start;
 `), _("bottom-right", `
 bottom: 4px;
 left: 0;
 right: 12px;
 justify-content: flex-end;
 align-items: flex-end;
 `)])]), yw = {
  info: () => f(ti, null),
  success: () => f(al, null),
  warning: () => f(fi, null),
  error: () => f(il, null),
  default: () => null
}, ww = ee({
  name: "Message",
  props: Object.assign(Object.assign({}, Mc), {
    render: Function
  }),
  setup(e) {
    const {
      inlineThemeDisabled: t,
      mergedRtlRef: r
    } = Ae(e), {
      props: o,
      mergedClsPrefixRef: i
    } = ge(Oc), a = Bt("Message", r, i), l = ve("Message", "-message", Cw, xw, o, i), s = z(() => {
      const {
        type: u
      } = e, {
        common: {
          cubicBezierEaseInOut: c
        },
        self: {
          padding: v,
          margin: p,
          maxWidth: x,
          iconMargin: h,
          closeMargin: g,
          closeSize: b,
          iconSize: m,
          fontSize: C,
          lineHeight: S,
          borderRadius: w,
          iconColorInfo: B,
          iconColorSuccess: R,
          iconColorWarning: y,
          iconColorError: P,
          iconColorLoading: D,
          closeIconSize: T,
          closeBorderRadius: U,
          [Z("textColor", u)]: M,
          [Z("boxShadow", u)]: n,
          [Z("color", u)]: $,
          [Z("closeColorHover", u)]: A,
          [Z("closeColorPressed", u)]: N,
          [Z("closeIconColor", u)]: I,
          [Z("closeIconColorPressed", u)]: V,
          [Z("closeIconColorHover", u)]: te
        }
      } = l.value;
      return {
        "--n-bezier": c,
        "--n-margin": p,
        "--n-padding": v,
        "--n-max-width": x,
        "--n-font-size": C,
        "--n-icon-margin": h,
        "--n-icon-size": m,
        "--n-close-icon-size": T,
        "--n-close-border-radius": U,
        "--n-close-size": b,
        "--n-close-margin": g,
        "--n-text-color": M,
        "--n-color": $,
        "--n-box-shadow": n,
        "--n-icon-color-info": B,
        "--n-icon-color-success": R,
        "--n-icon-color-warning": y,
        "--n-icon-color-error": P,
        "--n-icon-color-loading": D,
        "--n-close-color-hover": A,
        "--n-close-color-pressed": N,
        "--n-close-icon-color": I,
        "--n-close-icon-color-pressed": V,
        "--n-close-icon-color-hover": te,
        "--n-line-height": S,
        "--n-border-radius": w
      };
    }), d = t ? Ge("message", z(() => e.type[0]), s, {}) : void 0;
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
    }, (v = Sw(d, t, i)) && c ? f("div", {
      class: `${i}-message__icon ${i}-message__icon--${t}-type`
    }, f(sr, null, {
      default: () => v
    })) : null, f("div", {
      class: `${i}-message__content`
    }, ft(o)), r ? f(mo, {
      clsPrefix: i,
      class: `${i}-message__close`,
      onClick: u,
      absolute: !0
    }) : null));
  }
});
function Sw(e, t, r) {
  if (typeof e == "function")
    return e();
  {
    const o = t === "loading" ? f(Nn, {
      clsPrefix: r,
      strokeWidth: 24,
      scale: 0.85
    }) : yw[t]();
    return o ? f(vt, {
      clsPrefix: r,
      key: t
    }, {
      default: () => o
    }) : null;
  }
}
const Bw = ee({
  name: "MessageEnvironment",
  props: Object.assign(Object.assign({}, Mc), {
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
    zt(() => {
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
        onAfterHide: p,
        internalKey: x
      } = e;
      c && c(), v && v(x), p && p();
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
    return f(ll, {
      appear: !0,
      onAfterLeave: this.handleAfterLeave,
      onLeave: this.onLeave
    }, {
      default: () => [this.show ? f(ww, {
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
}), kw = Object.assign(Object.assign({}, ve.props), {
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
}), Rw = ee({
  name: "MessageProvider",
  props: kw,
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
      destroyAll: s
    };
    $e(Oc, {
      props: e,
      mergedClsPrefixRef: t
    }), $e(Tc, i);
    function a(d, u) {
      const c = cn(), v = fo(Object.assign(Object.assign({}, u), {
        content: d,
        key: c,
        destroy: () => {
          var x;
          (x = o.value[c]) === null || x === void 0 || x.hide();
        }
      })), {
        max: p
      } = e;
      return p && r.value.length >= p && r.value.shift(), r.value.push(v), v;
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
    return f(Qe, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e), this.messageList.length ? f(oi, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, f("div", {
      class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass],
      key: "message-container",
      style: this.containerStyle
    }, this.messageList.map((o) => f(Bw, Object.assign({
      ref: (i) => {
        i && (this.messageRefs[o.key] = i);
      },
      internalKey: o.key,
      onInternalAfterLeave: this.handleAfterLeave
    }, or(o, ["destroy"], void 0), {
      duration: o.duration === void 0 ? this.duration : o.duration,
      keepAliveOnHover: o.keepAliveOnHover === void 0 ? this.keepAliveOnHover : o.keepAliveOnHover,
      closable: o.closable === void 0 ? this.closable : o.closable
    }))))) : null);
  }
});
function Fw() {
  const e = ge(Tc, null);
  return e === null && On("use-message", "No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."), e;
}
const ad = "n-modal-provider", Ic = "n-modal-api", Pw = "n-modal-reactive-list", zw = ee({
  name: "ModalEnvironment",
  props: Object.assign(Object.assign({}, zc), {
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
        onAfterLeave: p
      } = e;
      c && c(v), p && p();
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
        maskClosable: p
      } = e;
      v && (v(c), p && d());
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
    return f($c, Object.assign({}, this.$props, {
      show: i,
      onUpdateShow: e,
      onMaskClick: r,
      onEsc: o,
      onAfterLeave: t,
      internalAppear: !0,
      internalModal: !0
    }));
  }
}), $w = {
  to: [String, Object]
}, Lc = ee({
  name: "ModalProvider",
  props: $w,
  setup() {
    const e = Uo(64), t = Ko(), r = L([]), o = {};
    function i(d = {}) {
      const u = cn(), c = fo(Object.assign(Object.assign({}, d), {
        key: u,
        destroy: () => {
          var v;
          (v = o[`n-modal-${u}`]) === null || v === void 0 || v.hide();
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
    return $e(Ic, s), $e(ad, {
      clickedRef: Uo(64),
      clickedPositionRef: Ko()
    }), $e(Pw, r), $e(ad, {
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
    return f(Qe, null, [this.modalList.map((r) => {
      var o;
      return f(zw, or(r, ["destroy"], {
        to: (o = r.to) !== null && o !== void 0 ? o : this.to,
        ref: (i) => {
          i === null ? delete this.modalInstRefs[`n-modal-${r.key}`] : this.modalInstRefs[`n-modal-${r.key}`] = i;
        },
        internalKey: r.key,
        onInternalAfterLeave: this.handleAfterLeave
      }));
    }), (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)]);
  }
}), Aw = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px"
};
function Dw(e) {
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
    textColor1: p,
    textColor3: x,
    borderRadius: h,
    fontWeightStrong: g,
    boxShadow2: b,
    lineHeight: m,
    fontSize: C
  } = e;
  return Object.assign(Object.assign({}, Aw), {
    borderRadius: h,
    lineHeight: m,
    fontSize: C,
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
    closeBorderRadius: h,
    closeColorHover: c,
    closeColorPressed: v,
    headerTextColor: p,
    descriptionTextColor: x,
    actionTextColor: t,
    boxShadow: b
  });
}
const Ew = {
  name: "Notification",
  common: Xe,
  peers: {
    Scrollbar: bo
  },
  self: Dw
}, bi = "n-notification-provider", Tw = ee({
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
    } = ge(bi), o = L(null);
    return et(() => {
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
    }, t ? f(dr, {
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      contentStyle: {
        overflow: "hidden"
      }
    }, e) : e);
  }
}), Ow = {
  info: () => f(ti, null),
  success: () => f(al, null),
  warning: () => f(fi, null),
  error: () => f(il, null),
  default: () => null
}, yl = {
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
}, Mw = Dn(yl), Iw = ee({
  name: "Notification",
  props: yl,
  setup(e) {
    const {
      mergedClsPrefixRef: t,
      mergedThemeRef: r,
      props: o
    } = ge(bi), {
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(), l = Bt("Notification", a, t), s = z(() => {
      const {
        type: u
      } = e, {
        self: {
          color: c,
          textColor: v,
          closeIconColor: p,
          closeIconColorHover: x,
          closeIconColorPressed: h,
          headerTextColor: g,
          descriptionTextColor: b,
          actionTextColor: m,
          borderRadius: C,
          headerFontWeight: S,
          boxShadow: w,
          lineHeight: B,
          fontSize: R,
          closeMargin: y,
          closeSize: P,
          width: D,
          padding: T,
          closeIconSize: U,
          closeBorderRadius: M,
          closeColorHover: n,
          closeColorPressed: $,
          titleFontSize: A,
          metaFontSize: N,
          descriptionFontSize: I,
          [Z("iconColor", u)]: V
        },
        common: {
          cubicBezierEaseOut: te,
          cubicBezierEaseIn: X,
          cubicBezierEaseInOut: K
        }
      } = r.value, {
        left: H,
        right: q,
        top: Y,
        bottom: ie
      } = Lt(T);
      return {
        "--n-color": c,
        "--n-font-size": R,
        "--n-text-color": v,
        "--n-description-text-color": b,
        "--n-action-text-color": m,
        "--n-title-text-color": g,
        "--n-title-font-weight": S,
        "--n-bezier": K,
        "--n-bezier-ease-out": te,
        "--n-bezier-ease-in": X,
        "--n-border-radius": C,
        "--n-box-shadow": w,
        "--n-close-border-radius": M,
        "--n-close-color-hover": n,
        "--n-close-color-pressed": $,
        "--n-close-icon-color": p,
        "--n-close-icon-color-hover": x,
        "--n-close-icon-color-pressed": h,
        "--n-line-height": B,
        "--n-icon-color": V,
        "--n-close-margin": y,
        "--n-close-size": P,
        "--n-close-icon-size": U,
        "--n-width": D,
        "--n-padding-left": H,
        "--n-padding-right": q,
        "--n-padding-top": Y,
        "--n-padding-bottom": ie,
        "--n-title-font-size": A,
        "--n-meta-font-size": N,
        "--n-description-font-size": I
      };
    }), d = i ? Ge("notification", z(() => e.type[0]), s, o) : void 0;
    return {
      mergedClsPrefix: t,
      showAvatar: z(() => e.avatar || e.type !== "default"),
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
    }, this.avatar ? ft(this.avatar) : this.type !== "default" ? f(vt, {
      clsPrefix: t
    }, {
      default: () => Ow[this.type]()
    }) : null) : null, this.closable ? f(mo, {
      clsPrefix: t,
      class: `${t}-notification__close`,
      onClick: this.handleCloseClick
    }) : null, f("div", {
      ref: "bodyRef",
      class: `${t}-notification-main`
    }, this.title ? f("div", {
      class: `${t}-notification-main__header`
    }, ft(this.title)) : null, this.description ? f("div", {
      class: `${t}-notification-main__description`
    }, ft(this.description)) : null, this.content ? f("pre", {
      class: `${t}-notification-main__content`
    }, ft(this.content)) : null, this.meta || this.action ? f("div", {
      class: `${t}-notification-main-footer`
    }, this.meta ? f("div", {
      class: `${t}-notification-main-footer__meta`
    }, ft(this.meta)) : null, this.action ? f("div", {
      class: `${t}-notification-main-footer__action`
    }, ft(this.action)) : null) : null)));
  }
}), Lw = Object.assign(Object.assign({}, yl), {
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
}), _w = ee({
  name: "NotificationEnvironment",
  props: Object.assign(Object.assign({}, Lw), {
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
    } = ge(bi), r = L(!0);
    let o = null;
    function i() {
      r.value = !1, o && window.clearTimeout(o);
    }
    function a(h) {
      t.value++, bt(() => {
        h.style.height = `${h.offsetHeight}px`, h.style.maxHeight = "0", h.style.transition = "none", h.offsetHeight, h.style.transition = "", h.style.maxHeight = h.style.height;
      });
    }
    function l(h) {
      t.value--, h.style.height = "", h.style.maxHeight = "";
      const {
        onAfterEnter: g,
        onAfterShow: b
      } = e;
      g && g(), b && b();
    }
    function s(h) {
      t.value++, h.style.maxHeight = `${h.offsetHeight}px`, h.style.height = `${h.offsetHeight}px`, h.offsetHeight;
    }
    function d(h) {
      const {
        onHide: g
      } = e;
      g && g(), h.style.maxHeight = "0", h.offsetHeight;
    }
    function u() {
      t.value--;
      const {
        onAfterLeave: h,
        onInternalAfterLeave: g,
        onAfterHide: b,
        internalKey: m
      } = e;
      h && h(), g(m), b && b();
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
    function p(h) {
      h.currentTarget === h.target && c();
    }
    function x() {
      const {
        onClose: h
      } = e;
      h ? Promise.resolve(h()).then((g) => {
        g !== !1 && i();
      }) : i();
    }
    return zt(() => {
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
      handleMouseenter: v,
      handleMouseleave: p
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
      default: () => this.show ? f(Iw, Object.assign({}, Cn(this.$props, Mw), {
        onClose: this.handleClose,
        onMouseenter: this.duration && this.keepAliveOnHover ? this.handleMouseenter : void 0,
        onMouseleave: this.duration && this.keepAliveOnHover ? this.handleMouseleave : void 0
      })) : null
    });
  }
}), Nw = O([F("notification-container", `
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `, [O(">", [F("scrollbar", `
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [O(">", [F("scrollbar-container", `
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [F("scrollbar-content", `
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]), _("top, top-right, top-left", `
 top: 12px;
 `, [O("&.transitioning >", [F("scrollbar", [O(">", [F("scrollbar-container", `
 min-height: 100vh !important;
 `)])])])]), _("bottom, bottom-right, bottom-left", `
 bottom: 12px;
 `, [O(">", [F("scrollbar", [O(">", [F("scrollbar-container", [F("scrollbar-content", `
 padding-bottom: 12px;
 `)])])])]), F("notification-wrapper", `
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]), _("top, bottom", `
 left: 50%;
 transform: translateX(-50%);
 `, [F("notification-wrapper", [O("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: scale(0.85);
 `), O("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: scale(1);
 `)])]), _("top", [F("notification-wrapper", `
 transform-origin: top center;
 `)]), _("bottom", [F("notification-wrapper", `
 transform-origin: bottom center;
 `)]), _("top-right, bottom-right", [F("notification", `
 margin-left: 28px;
 margin-right: 16px;
 `)]), _("top-left, bottom-left", [F("notification", `
 margin-left: 16px;
 margin-right: 28px;
 `)]), _("top-right", `
 right: 0;
 `, [Lo("top-right")]), _("top-left", `
 left: 0;
 `, [Lo("top-left")]), _("bottom-right", `
 right: 0;
 `, [Lo("bottom-right")]), _("bottom-left", `
 left: 0;
 `, [Lo("bottom-left")]), _("scrollable", [_("top-right", `
 top: 0;
 `), _("top-left", `
 top: 0;
 `), _("bottom-right", `
 bottom: 0;
 `), _("bottom-left", `
 bottom: 0;
 `)]), F("notification-wrapper", `
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
 `)]), F("notification", `
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
 `, [E("avatar", [F("icon", `
 color: var(--n-icon-color);
 `), F("base-icon", `
 color: var(--n-icon-color);
 `)]), _("show-avatar", [F("notification-main", `
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]), _("closable", [F("notification-main", [O("> *:first-child", `
 padding-right: 20px;
 `)]), E("close", `
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), E("avatar", `
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [F("icon", "transition: color .3s var(--n-bezier);")]), F("notification-main", `
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `, [F("notification-main-footer", `
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `, [E("meta", `
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `), E("action", `
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]), E("header", `
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `), E("description", `
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `), E("content", `
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `, [O("&:first-child", "margin: 0;")])])])])]);
function Lo(e) {
  const r = e.split("-")[1] === "left" ? "calc(-100%)" : "calc(100%)";
  return F("notification-wrapper", [O("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: translate(${r}, 0);
 `), O("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: translate(0, 0);
 `)]);
}
const _c = "n-notification-api", Hw = Object.assign(Object.assign({}, ve.props), {
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
}), jw = ee({
  name: "NotificationProvider",
  props: Hw,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e), r = L([]), o = {}, i = /* @__PURE__ */ new Set();
    function a(x) {
      const h = cn(), g = () => {
        i.add(h), o[h] && o[h].hide();
      }, b = fo(Object.assign(Object.assign({}, x), {
        key: h,
        destroy: g,
        hide: g,
        deactivate: g
      })), {
        max: m
      } = e;
      if (m && r.value.length - i.size >= m) {
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
    const l = ["info", "success", "warning", "error"].map((x) => (h) => a(Object.assign(Object.assign({}, h), {
      type: x
    })));
    function s(x) {
      i.delete(x), r.value.splice(r.value.findIndex((h) => h.key === x), 1);
    }
    const d = ve("Notification", "-notification", Nw, Ew, e, t), u = {
      create: a,
      info: l[0],
      success: l[1],
      warning: l[2],
      error: l[3],
      open: v,
      destroyAll: p
    }, c = L(0);
    $e(_c, u), $e(bi, {
      props: e,
      mergedClsPrefixRef: t,
      mergedThemeRef: d,
      wipTransitionCountRef: c
    });
    function v(x) {
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
    return f(Qe, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e), this.notificationList.length ? f(oi, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, f(Tw, {
      class: this.containerClass,
      style: this.containerStyle,
      scrollable: this.scrollable && o !== "top" && o !== "bottom",
      placement: o
    }, {
      default: () => this.notificationList.map((i) => f(_w, Object.assign({
        ref: (a) => {
          const l = i.key;
          a === null ? delete this.notificationRefs[l] : this.notificationRefs[l] = a;
        }
      }, or(i, ["destroy", "hide", "deactivate"]), {
        internalKey: i.key,
        onInternalAfterLeave: this.handleAfterLeave,
        keepAliveOnHover: i.keepAliveOnHover === void 0 ? this.keepAliveOnHover : i.keepAliveOnHover
      })))
    })) : null);
  }
});
function Ww() {
  const e = ge(_c, null);
  return e === null && On("use-notification", "No outer `n-notification-provider` found."), e;
}
function Nc() {
  const e = ge(Ic, null);
  return e === null && On("use-modal", "No outer <n-modal-provider /> founded."), e;
}
const Vw = ee({
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
}), Kw = {
  message: Fw,
  notification: Ww,
  loadingBar: gw,
  dialog: kc,
  modal: Nc
};
function Uw({
  providersAndProps: e,
  configProviderProps: t
}) {
  let r = wf(i);
  const o = {
    app: r
  };
  function i() {
    return f(Yu, de(t), {
      default: () => e.map(({
        type: s,
        Provider: d,
        props: u
      }) => f(d, de(u), {
        default: () => f(Vw, {
          onSetup: () => o[s] = Kw[s]()
        })
      }))
    });
  }
  let a;
  return Ar && (a = document.createElement("div"), document.body.appendChild(a), r.mount(a)), Object.assign({
    unmount: () => {
      var s;
      if (r === null || a === null) {
        Pt("discrete", "unmount call no need because discrete app has been unmounted");
        return;
      }
      r.unmount(), (s = a.parentNode) === null || s === void 0 || s.removeChild(a), a = null, r = null;
    }
  }, o);
}
function R2(e, {
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
          Provider: Rw,
          props: r
        });
        break;
      case "notification":
        s.push({
          type: u,
          Provider: jw,
          props: i
        });
        break;
      case "dialog":
        s.push({
          type: u,
          Provider: Ac,
          props: o
        });
        break;
      case "loadingBar":
        s.push({
          type: u,
          Provider: pw,
          props: a
        });
        break;
      case "modal":
        s.push({
          type: u,
          Provider: Lc,
          props: l
        });
    }
  }), Uw({
    providersAndProps: s,
    configProviderProps: t
  });
}
const qw = {
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
function Gw(e) {
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
  return Object.assign(Object.assign({}, qw), {
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
const Hc = {
  name: "Form",
  common: Xe,
  self: Gw
}, Xw = {
  iconSize: "22px"
};
function Yw(e) {
  const {
    fontSize: t,
    warningColor: r
  } = e;
  return Object.assign(Object.assign({}, Xw), {
    fontSize: t,
    iconColor: r
  });
}
const Zw = {
  name: "Popconfirm",
  common: Xe,
  peers: {
    Button: pi,
    Popover: ur
  },
  self: Yw
};
function Jw(e) {
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
const Qw = {
  name: "Spin",
  common: Xe,
  self: Jw
}, eS = {
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
function tS(e) {
  const {
    primaryColor: t,
    opacityDisabled: r,
    borderRadius: o,
    textColor3: i
  } = e;
  return Object.assign(Object.assign({}, eS), {
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
const nS = {
  name: "Switch",
  common: Xe,
  self: tS
}, Co = "n-form", jc = "n-form-item-insts", rS = F("form", [_("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [F("form-item", {
  width: "auto",
  marginRight: "18px"
}, [O("&:last-child", {
  marginRight: 0
})])])]);
var oS = function(e, t, r, o) {
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
const iS = Object.assign(Object.assign({}, ve.props), {
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
}), aS = ee({
  name: "Form",
  props: iS,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(e);
    ve("Form", "-form", rS, Hc, e, t);
    const r = {}, o = L(void 0), i = (d) => {
      const u = o.value;
      (u === void 0 || d >= u) && (o.value = d);
    };
    function a(d) {
      return oS(this, arguments, void 0, function* (u, c = () => !0) {
        return yield new Promise((v, p) => {
          const x = [];
          for (const h of Dn(r)) {
            const g = r[h];
            for (const b of g)
              b.path && x.push(b.internalValidate(null, c));
          }
          Promise.all(x).then((h) => {
            const g = h.some((C) => !C.valid), b = [], m = [];
            h.forEach((C) => {
              var S, w;
              !((S = C.errors) === null || S === void 0) && S.length && b.push(C.errors), !((w = C.warnings) === null || w === void 0) && w.length && m.push(C.warnings);
            }), u && u(b.length ? b : void 0, {
              warnings: m.length ? m : void 0
            }), g ? p(b.length ? b : void 0) : v({
              warnings: m.length ? m : void 0
            });
          });
        });
      });
    }
    function l() {
      for (const d of Dn(r)) {
        const u = r[d];
        for (const c of u)
          c.restoreValidation();
      }
    }
    return $e(Co, {
      props: e,
      maxChildLabelWidthRef: o,
      deriveMaxChildLabelWidth: i
    }), $e(jc, {
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
function Un() {
  return Un = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Un.apply(this, arguments);
}
function lS(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, so(e, t);
}
function Sa(e) {
  return Sa = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Sa(e);
}
function so(e, t) {
  return so = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, so(e, t);
}
function sS() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function jo(e, t, r) {
  return sS() ? jo = Reflect.construct.bind() : jo = function(i, a, l) {
    var s = [null];
    s.push.apply(s, a);
    var d = Function.bind.apply(i, s), u = new d();
    return l && so(u, l.prototype), u;
  }, jo.apply(null, arguments);
}
function dS(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ba(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ba = function(o) {
    if (o === null || !dS(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof t < "u") {
      if (t.has(o)) return t.get(o);
      t.set(o, i);
    }
    function i() {
      return jo(o, arguments, Sa(this).constructor);
    }
    return i.prototype = Object.create(o.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), so(i, o);
  }, Ba(e);
}
var uS = /%[sdj%]/g, Wc = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (Wc = function(t, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(o) {
    return typeof o == "string";
  }) && console.warn(t, r);
});
function ka(e) {
  if (!e || !e.length) return null;
  var t = {};
  return e.forEach(function(r) {
    var o = r.field;
    t[o] = t[o] || [], t[o].push(r);
  }), t;
}
function Gt(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++)
    r[o - 1] = arguments[o];
  var i = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var l = e.replace(uS, function(s) {
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
function cS(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function wt(e, t) {
  return !!(e == null || t === "array" && Array.isArray(e) && !e.length || cS(t) && typeof e == "string" && !e);
}
function fS(e, t, r) {
  var o = [], i = 0, a = e.length;
  function l(s) {
    o.push.apply(o, s || []), i++, i === a && r(o);
  }
  e.forEach(function(s) {
    t(s, l);
  });
}
function ld(e, t, r) {
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
function hS(e) {
  var t = [];
  return Object.keys(e).forEach(function(r) {
    t.push.apply(t, e[r] || []);
  }), t;
}
var sd = /* @__PURE__ */ function(e) {
  lS(t, e);
  function t(r, o) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = r, i.fields = o, i;
  }
  return t;
}(/* @__PURE__ */ Ba(Error));
function vS(e, t, r, o, i) {
  if (t.first) {
    var a = new Promise(function(p, x) {
      var h = function(m) {
        return o(m), m.length ? x(new sd(m, ka(m))) : p(i);
      }, g = hS(e);
      ld(g, r, h);
    });
    return a.catch(function(p) {
      return p;
    }), a;
  }
  var l = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [], s = Object.keys(e), d = s.length, u = 0, c = [], v = new Promise(function(p, x) {
    var h = function(b) {
      if (c.push.apply(c, b), u++, u === d)
        return o(c), c.length ? x(new sd(c, ka(c))) : p(i);
    };
    s.length || (o(c), p(i)), s.forEach(function(g) {
      var b = e[g];
      l.indexOf(g) !== -1 ? ld(b, r, h) : fS(b, r, h);
    });
  });
  return v.catch(function(p) {
    return p;
  }), v;
}
function pS(e) {
  return !!(e && e.message !== void 0);
}
function gS(e, t) {
  for (var r = e, o = 0; o < t.length; o++) {
    if (r == null)
      return r;
    r = r[t[o]];
  }
  return r;
}
function dd(e, t) {
  return function(r) {
    var o;
    return e.fullFields ? o = gS(t, e.fullFields) : o = t[r.field || e.fullField], pS(r) ? (r.field = r.field || e.fullField, r.fieldValue = o, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: o,
      field: r.field || e.fullField
    };
  };
}
function ud(e, t) {
  if (t) {
    for (var r in t)
      if (t.hasOwnProperty(r)) {
        var o = t[r];
        typeof o == "object" && typeof e[r] == "object" ? e[r] = Un({}, e[r], o) : e[r] = o;
      }
  }
  return e;
}
var Vc = function(t, r, o, i, a, l) {
  t.required && (!o.hasOwnProperty(t.field) || wt(r, l || t.type)) && i.push(Gt(a.messages.required, t.fullField));
}, mS = function(t, r, o, i, a) {
  (/^\s+$/.test(r) || r === "") && i.push(Gt(a.messages.whitespace, t.fullField));
}, _o, bS = function() {
  if (_o)
    return _o;
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
  var u = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", v = d.v4().source, p = d.v6().source, x = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", h = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", m = '(?:[/?#][^\\s"]*)?', C = "(?:" + u + "|www\\.)" + c + "(?:localhost|" + v + "|" + p + "|" + x + h + g + ")" + b + m;
  return _o = new RegExp("(?:^" + C + "$)", "i"), _o;
}, cd = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, Kr = {
  integer: function(t) {
    return Kr.number(t) && parseInt(t, 10) === t;
  },
  float: function(t) {
    return Kr.number(t) && !Kr.integer(t);
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
    return typeof t == "object" && !Kr.array(t);
  },
  method: function(t) {
    return typeof t == "function";
  },
  email: function(t) {
    return typeof t == "string" && t.length <= 320 && !!t.match(cd.email);
  },
  url: function(t) {
    return typeof t == "string" && t.length <= 2048 && !!t.match(bS());
  },
  hex: function(t) {
    return typeof t == "string" && !!t.match(cd.hex);
  }
}, xS = function(t, r, o, i, a) {
  if (t.required && r === void 0) {
    Vc(t, r, o, i, a);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = t.type;
  l.indexOf(s) > -1 ? Kr[s](r) || i.push(Gt(a.messages.types[s], t.fullField, t.type)) : s && typeof r !== t.type && i.push(Gt(a.messages.types[s], t.fullField, t.type));
}, CS = function(t, r, o, i, a) {
  var l = typeof t.len == "number", s = typeof t.min == "number", d = typeof t.max == "number", u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, v = null, p = typeof r == "number", x = typeof r == "string", h = Array.isArray(r);
  if (p ? v = "number" : x ? v = "string" : h && (v = "array"), !v)
    return !1;
  h && (c = r.length), x && (c = r.replace(u, "_").length), l ? c !== t.len && i.push(Gt(a.messages[v].len, t.fullField, t.len)) : s && !d && c < t.min ? i.push(Gt(a.messages[v].min, t.fullField, t.min)) : d && !s && c > t.max ? i.push(Gt(a.messages[v].max, t.fullField, t.max)) : s && d && (c < t.min || c > t.max) && i.push(Gt(a.messages[v].range, t.fullField, t.min, t.max));
}, gr = "enum", yS = function(t, r, o, i, a) {
  t[gr] = Array.isArray(t[gr]) ? t[gr] : [], t[gr].indexOf(r) === -1 && i.push(Gt(a.messages[gr], t.fullField, t[gr].join(", ")));
}, wS = function(t, r, o, i, a) {
  if (t.pattern) {
    if (t.pattern instanceof RegExp)
      t.pattern.lastIndex = 0, t.pattern.test(r) || i.push(Gt(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    else if (typeof t.pattern == "string") {
      var l = new RegExp(t.pattern);
      l.test(r) || i.push(Gt(a.messages.pattern.mismatch, t.fullField, r, t.pattern));
    }
  }
}, Oe = {
  required: Vc,
  whitespace: mS,
  type: xS,
  range: CS,
  enum: yS,
  pattern: wS
}, SS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (wt(r, "string") && !t.required)
      return o();
    Oe.required(t, r, i, l, a, "string"), wt(r, "string") || (Oe.type(t, r, i, l, a), Oe.range(t, r, i, l, a), Oe.pattern(t, r, i, l, a), t.whitespace === !0 && Oe.whitespace(t, r, i, l, a));
  }
  o(l);
}, BS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && Oe.type(t, r, i, l, a);
  }
  o(l);
}, kS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (r === "" && (r = void 0), wt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && (Oe.type(t, r, i, l, a), Oe.range(t, r, i, l, a));
  }
  o(l);
}, RS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && Oe.type(t, r, i, l, a);
  }
  o(l);
}, FS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), wt(r) || Oe.type(t, r, i, l, a);
  }
  o(l);
}, PS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && (Oe.type(t, r, i, l, a), Oe.range(t, r, i, l, a));
  }
  o(l);
}, zS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && (Oe.type(t, r, i, l, a), Oe.range(t, r, i, l, a));
  }
  o(l);
}, $S = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (r == null && !t.required)
      return o();
    Oe.required(t, r, i, l, a, "array"), r != null && (Oe.type(t, r, i, l, a), Oe.range(t, r, i, l, a));
  }
  o(l);
}, AS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && Oe.type(t, r, i, l, a);
  }
  o(l);
}, DS = "enum", ES = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a), r !== void 0 && Oe[DS](t, r, i, l, a);
  }
  o(l);
}, TS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (wt(r, "string") && !t.required)
      return o();
    Oe.required(t, r, i, l, a), wt(r, "string") || Oe.pattern(t, r, i, l, a);
  }
  o(l);
}, OS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (wt(r, "date") && !t.required)
      return o();
    if (Oe.required(t, r, i, l, a), !wt(r, "date")) {
      var d;
      r instanceof Date ? d = r : d = new Date(r), Oe.type(t, d, i, l, a), d && Oe.range(t, d.getTime(), i, l, a);
    }
  }
  o(l);
}, MS = function(t, r, o, i, a) {
  var l = [], s = Array.isArray(r) ? "array" : typeof r;
  Oe.required(t, r, i, l, a, s), o(l);
}, Qi = function(t, r, o, i, a) {
  var l = t.type, s = [], d = t.required || !t.required && i.hasOwnProperty(t.field);
  if (d) {
    if (wt(r, l) && !t.required)
      return o();
    Oe.required(t, r, i, s, a, l), wt(r, l) || Oe.type(t, r, i, s, a);
  }
  o(s);
}, IS = function(t, r, o, i, a) {
  var l = [], s = t.required || !t.required && i.hasOwnProperty(t.field);
  if (s) {
    if (wt(r) && !t.required)
      return o();
    Oe.required(t, r, i, l, a);
  }
  o(l);
}, Qr = {
  string: SS,
  method: BS,
  number: kS,
  boolean: RS,
  regexp: FS,
  integer: PS,
  float: zS,
  array: $S,
  object: AS,
  enum: ES,
  pattern: TS,
  date: OS,
  url: Qi,
  hex: Qi,
  email: Qi,
  required: MS,
  any: IS
};
function Ra() {
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
var Fa = Ra(), Fr = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = Fa, this.define(r);
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
    return o && (this._messages = ud(Ra(), o)), this._messages;
  }, t.validate = function(o, i, a) {
    var l = this;
    i === void 0 && (i = {}), a === void 0 && (a = function() {
    });
    var s = o, d = i, u = a;
    if (typeof d == "function" && (u = d, d = {}), !this.rules || Object.keys(this.rules).length === 0)
      return u && u(null, s), Promise.resolve(s);
    function c(g) {
      var b = [], m = {};
      function C(w) {
        if (Array.isArray(w)) {
          var B;
          b = (B = b).concat.apply(B, w);
        } else
          b.push(w);
      }
      for (var S = 0; S < g.length; S++)
        C(g[S]);
      b.length ? (m = ka(b), u(b, m)) : u(null, s);
    }
    if (d.messages) {
      var v = this.messages();
      v === Fa && (v = Ra()), ud(v, d.messages), d.messages = v;
    } else
      d.messages = this.messages();
    var p = {}, x = d.keys || Object.keys(this.rules);
    x.forEach(function(g) {
      var b = l.rules[g], m = s[g];
      b.forEach(function(C) {
        var S = C;
        typeof S.transform == "function" && (s === o && (s = Un({}, s)), m = s[g] = S.transform(m)), typeof S == "function" ? S = {
          validator: S
        } : S = Un({}, S), S.validator = l.getValidationMethod(S), S.validator && (S.field = g, S.fullField = S.fullField || g, S.type = l.getType(S), p[g] = p[g] || [], p[g].push({
          rule: S,
          value: m,
          source: s,
          field: g
        }));
      });
    });
    var h = {};
    return vS(p, d, function(g, b) {
      var m = g.rule, C = (m.type === "object" || m.type === "array") && (typeof m.fields == "object" || typeof m.defaultField == "object");
      C = C && (m.required || !m.required && g.value), m.field = g.field;
      function S(R, y) {
        return Un({}, y, {
          fullField: m.fullField + "." + R,
          fullFields: m.fullFields ? [].concat(m.fullFields, [R]) : [R]
        });
      }
      function w(R) {
        R === void 0 && (R = []);
        var y = Array.isArray(R) ? R : [R];
        !d.suppressWarning && y.length && e.warning("async-validator:", y), y.length && m.message !== void 0 && (y = [].concat(m.message));
        var P = y.map(dd(m, s));
        if (d.first && P.length)
          return h[m.field] = 1, b(P);
        if (!C)
          b(P);
        else {
          if (m.required && !g.value)
            return m.message !== void 0 ? P = [].concat(m.message).map(dd(m, s)) : d.error && (P = [d.error(m, Gt(d.messages.required, m.field))]), b(P);
          var D = {};
          m.defaultField && Object.keys(g.value).map(function(M) {
            D[M] = m.defaultField;
          }), D = Un({}, D, g.rule.fields);
          var T = {};
          Object.keys(D).forEach(function(M) {
            var n = D[M], $ = Array.isArray(n) ? n : [n];
            T[M] = $.map(S.bind(null, M));
          });
          var U = new e(T);
          U.messages(d.messages), g.rule.options && (g.rule.options.messages = d.messages, g.rule.options.error = d.error), U.validate(g.value, g.rule.options || d, function(M) {
            var n = [];
            P && P.length && n.push.apply(n, P), M && M.length && n.push.apply(n, M), b(n.length ? n : null);
          });
        }
      }
      var B;
      if (m.asyncValidator)
        B = m.asyncValidator(m, g.value, w, g.source, d);
      else if (m.validator) {
        try {
          B = m.validator(m, g.value, w, g.source, d);
        } catch (R) {
          console.error == null || console.error(R), d.suppressValidatorError || setTimeout(function() {
            throw R;
          }, 0), w(R.message);
        }
        B === !0 ? w() : B === !1 ? w(typeof m.message == "function" ? m.message(m.fullField || m.field) : m.message || (m.fullField || m.field) + " fails") : B instanceof Array ? w(B) : B instanceof Error && w(B.message);
      }
      B && B.then && B.then(function() {
        return w();
      }, function(R) {
        return w(R);
      });
    }, function(g) {
      c(g);
    }, s);
  }, t.getType = function(o) {
    if (o.type === void 0 && o.pattern instanceof RegExp && (o.type = "pattern"), typeof o.validator != "function" && o.type && !Qr.hasOwnProperty(o.type))
      throw new Error(Gt("Unknown rule type %s", o.type));
    return o.type || "string";
  }, t.getValidationMethod = function(o) {
    if (typeof o.validator == "function")
      return o.validator;
    var i = Object.keys(o), a = i.indexOf("message");
    return a !== -1 && i.splice(a, 1), i.length === 1 && i[0] === "required" ? Qr.required : Qr[this.getType(o)] || void 0;
  }, e;
}();
Fr.register = function(t, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  Qr[t] = r;
};
Fr.warning = Wc;
Fr.messages = Fa;
Fr.validators = Qr;
const {
  cubicBezierEaseInOut: fd
} = Ln;
function LS({
  name: e = "fade-down",
  fromOffset: t = "-4px",
  enterDuration: r = ".3s",
  leaveDuration: o = ".3s",
  enterCubicBezier: i = fd,
  leaveCubicBezier: a = fd
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
const _S = F("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [F("form-item-label", `
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
 `)]), F("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), _("auto-label-width", [F("form-item-label", "white-space: nowrap;")]), _("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [F("form-item-label", `
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `, [_("reverse-columns-space", `
 grid-template-columns: auto 1fr;
 `), _("left-mark", `
 grid-template-areas:
 "mark text"
 ". text";
 `), _("right-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), _("right-hanging-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), E("text", `
 grid-area: text; 
 `), E("asterisk", `
 grid-area: mark; 
 align-self: end;
 `)])]), _("top-labelled", `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [_("no-label", `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), F("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), F("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), F("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [O("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), F("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [_("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), _("error", {
  color: "var(--n-feedback-text-color-error)"
}), LS({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
function NS(e) {
  const t = ge(Co, null);
  return {
    mergedSize: z(() => e.size !== void 0 ? e.size : (t == null ? void 0 : t.props.size) !== void 0 ? t.props.size : "medium")
  };
}
function HS(e) {
  const t = ge(Co, null), r = z(() => {
    const {
      labelPlacement: h
    } = e;
    return h !== void 0 ? h : t != null && t.props.labelPlacement ? t.props.labelPlacement : "top";
  }), o = z(() => r.value === "left" && (e.labelWidth === "auto" || (t == null ? void 0 : t.props.labelWidth) === "auto")), i = z(() => {
    if (r.value === "top") return;
    const {
      labelWidth: h
    } = e;
    if (h !== void 0 && h !== "auto")
      return gt(h);
    if (o.value) {
      const g = t == null ? void 0 : t.maxChildLabelWidthRef.value;
      return g !== void 0 ? gt(g) : void 0;
    }
    if ((t == null ? void 0 : t.props.labelWidth) !== void 0)
      return gt(t.props.labelWidth);
  }), a = z(() => {
    const {
      labelAlign: h
    } = e;
    if (h) return h;
    if (t != null && t.props.labelAlign) return t.props.labelAlign;
  }), l = z(() => {
    var h;
    return [(h = e.labelProps) === null || h === void 0 ? void 0 : h.style, e.labelStyle, {
      width: i.value
    }];
  }), s = z(() => {
    const {
      showRequireMark: h
    } = e;
    return h !== void 0 ? h : t == null ? void 0 : t.props.showRequireMark;
  }), d = z(() => {
    const {
      requireMarkPlacement: h
    } = e;
    return h !== void 0 ? h : (t == null ? void 0 : t.props.requireMarkPlacement) || "right";
  }), u = L(!1), c = L(!1), v = z(() => {
    const {
      validationStatus: h
    } = e;
    if (h !== void 0) return h;
    if (u.value) return "error";
    if (c.value) return "warning";
  }), p = z(() => {
    const {
      showFeedback: h
    } = e;
    return h !== void 0 ? h : (t == null ? void 0 : t.props.showFeedback) !== void 0 ? t.props.showFeedback : !0;
  }), x = z(() => {
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
    mergedShowFeedback: p,
    mergedShowLabel: x,
    isAutoLabelWidth: o
  };
}
function jS(e) {
  const t = ge(Co, null), r = z(() => {
    const {
      rulePath: l
    } = e;
    if (l !== void 0) return l;
    const {
      path: s
    } = e;
    if (s !== void 0) return s;
  }), o = z(() => {
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
        const c = lo(d, u);
        c !== void 0 && (Array.isArray(c) ? l.push(...c) : l.push(c));
      }
    }
    return l;
  }), i = z(() => o.value.some((l) => l.required)), a = z(() => i.value || e.required);
  return {
    mergedRules: o,
    mergedRequired: a
  };
}
var hd = function(e, t, r, o) {
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
const WS = Object.assign(Object.assign({}, ve.props), {
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
function vd(e, t) {
  return (...r) => {
    try {
      const o = e(...r);
      return !t && (typeof o == "boolean" || o instanceof Error || Array.isArray(o)) || o != null && o.then ? o : (o === void 0 || Pt("form-item/validate", `You return a ${typeof o} typed value in the validator method, which is not recommended. Please use ${t ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`), !0);
    } catch (o) {
      Pt("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(o);
      return;
    }
  };
}
const pd = ee({
  name: "FormItem",
  props: WS,
  setup(e) {
    bh(jc, "formItems", oe(e, "path"));
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ge(Co, null), i = NS(e), a = HS(e), {
      validationErrored: l,
      validationWarned: s
    } = a, {
      mergedRequired: d,
      mergedRules: u
    } = jS(e), {
      mergedSize: c
    } = i, {
      mergedLabelPlacement: v,
      mergedLabelAlign: p,
      mergedRequireMarkPlacement: x
    } = a, h = L([]), g = L(cn()), b = o ? oe(o.props, "disabled") : L(!1), m = ve("Form", "-form-item", _S, Hc, e, t);
    Ne(oe(e, "path"), () => {
      e.ignorePathChange || C();
    });
    function C() {
      h.value = [], l.value = !1, s.value = !1, e.feedback && (g.value = cn());
    }
    const S = (...$) => hd(this, [...$], void 0, function* (A = null, N = () => !0, I = {
      suppressWarning: !0
    }) {
      const {
        path: V
      } = e;
      I ? I.first || (I.first = e.first) : I = {};
      const {
        value: te
      } = u, X = o ? lo(o.props.model, V || "") : void 0, K = {}, H = {}, q = (A ? te.filter((be) => Array.isArray(be.trigger) ? be.trigger.includes(A) : be.trigger === A) : te).filter(N).map((be, Fe) => {
        const Pe = Object.assign({}, be);
        if (Pe.validator && (Pe.validator = vd(Pe.validator, !1)), Pe.asyncValidator && (Pe.asyncValidator = vd(Pe.asyncValidator, !0)), Pe.renderMessage) {
          const at = `__renderMessage__${Fe}`;
          H[at] = Pe.message, Pe.message = at, K[at] = Pe.renderMessage;
        }
        return Pe;
      }), Y = q.filter((be) => be.level !== "warning"), ie = q.filter((be) => be.level === "warning"), ae = {
        valid: !0,
        errors: void 0,
        warnings: void 0
      };
      if (!q.length) return ae;
      const fe = V ?? "__n_no_path__", we = new Fr({
        [fe]: Y
      }), G = new Fr({
        [fe]: ie
      }), {
        validateMessages: ue
      } = (o == null ? void 0 : o.props) || {};
      ue && (we.messages(ue), G.messages(ue));
      const Re = (be) => {
        h.value = be.map((Fe) => {
          const Pe = (Fe == null ? void 0 : Fe.message) || "";
          return {
            key: Pe,
            render: () => Pe.startsWith("__renderMessage__") ? K[Pe]() : Pe
          };
        }), be.forEach((Fe) => {
          var Pe;
          !((Pe = Fe.message) === null || Pe === void 0) && Pe.startsWith("__renderMessage__") && (Fe.message = H[Fe.message]);
        });
      };
      if (Y.length) {
        const be = yield new Promise((Fe) => {
          we.validate({
            [fe]: X
          }, I, Fe);
        });
        be != null && be.length && (ae.valid = !1, ae.errors = be, Re(be));
      }
      if (ie.length && !ae.errors) {
        const be = yield new Promise((Fe) => {
          G.validate({
            [fe]: X
          }, I, Fe);
        });
        be != null && be.length && (Re(be), ae.warnings = be);
      }
      return !ae.errors && !ae.warnings ? C() : (l.value = !!ae.errors, s.value = !!ae.warnings), ae;
    });
    function w() {
      S("blur");
    }
    function B() {
      S("change");
    }
    function R() {
      S("focus");
    }
    function y() {
      S("input");
    }
    function P($, A) {
      return hd(this, void 0, void 0, function* () {
        let N, I, V, te;
        return typeof $ == "string" ? (N = $, I = A) : $ !== null && typeof $ == "object" && (N = $.trigger, I = $.callback, V = $.shouldRuleBeApplied, te = $.options), yield new Promise((X, K) => {
          S(N, V, te).then(({
            valid: H,
            errors: q,
            warnings: Y
          }) => {
            H ? (I && I(void 0, {
              warnings: Y
            }), X({
              warnings: Y
            })) : (I && I(q, {
              warnings: Y
            }), K(q));
          });
        });
      });
    }
    $e(sa, {
      path: oe(e, "path"),
      disabled: b,
      mergedSize: i.mergedSize,
      mergedValidationStatus: a.mergedValidationStatus,
      restoreValidation: C,
      handleContentBlur: w,
      handleContentChange: B,
      handleContentFocus: R,
      handleContentInput: y
    });
    const D = {
      validate: P,
      restoreValidation: C,
      internalValidate: S
    }, T = L(null);
    zt(() => {
      if (!a.isAutoLabelWidth.value) return;
      const $ = T.value;
      if ($ !== null) {
        const A = $.style.whiteSpace;
        $.style.whiteSpace = "nowrap", $.style.width = "", o == null || o.deriveMaxChildLabelWidth(Number(getComputedStyle($).width.slice(0, -2))), $.style.whiteSpace = A;
      }
    });
    const U = z(() => {
      var $;
      const {
        value: A
      } = c, {
        value: N
      } = v, I = N === "top" ? "vertical" : "horizontal", {
        common: {
          cubicBezierEaseInOut: V
        },
        self: {
          labelTextColor: te,
          asteriskColor: X,
          lineHeight: K,
          feedbackTextColor: H,
          feedbackTextColorWarning: q,
          feedbackTextColorError: Y,
          feedbackPadding: ie,
          labelFontWeight: ae,
          [Z("labelHeight", A)]: fe,
          [Z("blankHeight", A)]: we,
          [Z("feedbackFontSize", A)]: G,
          [Z("feedbackHeight", A)]: ue,
          [Z("labelPadding", I)]: Re,
          [Z("labelTextAlign", I)]: be,
          [Z(Z("labelFontSize", N), A)]: Fe
        }
      } = m.value;
      let Pe = ($ = p.value) !== null && $ !== void 0 ? $ : be;
      return N === "top" && (Pe = Pe === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": V,
        "--n-line-height": K,
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
        "--n-feedback-text-color": H,
        "--n-feedback-text-color-warning": q,
        "--n-feedback-text-color-error": Y
      };
    }), M = r ? Ge("form-item", z(() => {
      var $;
      return `${c.value[0]}${v.value[0]}${(($ = p.value) === null || $ === void 0 ? void 0 : $[0]) || ""}`;
    }), U, e) : void 0, n = z(() => v.value === "left" && x.value === "left" && p.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: T,
      mergedClsPrefix: t,
      mergedRequired: d,
      feedbackId: g,
      renderExplains: h,
      reverseColSpace: n
    }, a), i), D), {
      cssVars: r ? void 0 : U,
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
        return He(e.feedback, (u) => {
          var c;
          const {
            feedback: v
          } = this, p = u || v ? f("div", {
            key: "__feedback__",
            class: `${t}-form-item-feedback__line`
          }, u || v) : this.renderExplains.length ? (c = this.renderExplains) === null || c === void 0 ? void 0 : c.map(({
            key: x,
            render: h
          }) => f("div", {
            key: x,
            class: `${t}-form-item-feedback__line`
          }, h())) : null;
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
function VS(e) {
  const {
    primaryColor: t,
    baseColor: r
  } = e;
  return {
    color: t,
    iconColor: r
  };
}
const KS = {
  name: "IconWrapper",
  common: Xe,
  self: VS
}, US = F("icon-wrapper", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`), qS = Object.assign(Object.assign({}, ve.props), {
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
}), GS = ee({
  name: "IconWrapper",
  props: qS,
  setup(e, {
    slots: t
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ve("IconWrapper", "-icon-wrapper", US, KS, e, r), a = z(() => {
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
    }), l = o ? Ge("icon-wrapper", void 0, a, e) : void 0;
    return () => {
      const s = gt(e.size);
      return l == null || l.onRender(), f("div", {
        class: [`${r.value}-icon-wrapper`, l == null ? void 0 : l.themeClass.value],
        style: [a == null ? void 0 : a.value, {
          height: s,
          width: s,
          borderRadius: gt(e.borderRadius),
          backgroundColor: e.color,
          color: e.iconColor
        }]
      }, t);
    };
  }
}), Kc = "n-popconfirm", Uc = {
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
}, gd = Dn(Uc), XS = ee({
  name: "NPopconfirmPanel",
  props: Uc,
  setup(e) {
    const {
      localeRef: t
    } = Qn("Popconfirm"), {
      inlineThemeDisabled: r
    } = Ae(), {
      mergedClsPrefixRef: o,
      mergedThemeRef: i,
      props: a
    } = ge(Kc), l = z(() => {
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
    }), s = r ? Ge("popconfirm-panel", void 0, l, a) : void 0;
    return Object.assign(Object.assign({}, Qn("Popconfirm")), {
      mergedClsPrefix: o,
      cssVars: r ? void 0 : l,
      localizedPositiveText: z(() => e.positiveText || t.value.positiveText),
      localizedNegativeText: z(() => e.negativeText || t.value.negativeText),
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
    } = this, i = Xt(o.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && f(tr, Object.assign({
      size: "small",
      onClick: this.handleNegativeClick
    }, this.negativeButtonProps), {
      default: () => this.localizedNegativeText
    }), this.positiveText !== null && f(tr, Object.assign({
      size: "small",
      type: "primary",
      onClick: this.handlePositiveClick
    }, this.positiveButtonProps), {
      default: () => this.localizedPositiveText
    })]);
    return (e = this.onRender) === null || e === void 0 || e.call(this), f("div", {
      class: [`${t}-popconfirm__panel`, this.themeClass],
      style: this.cssVars
    }, He(o.default, (a) => r || a ? f("div", {
      class: `${t}-popconfirm__body`
    }, r ? f("div", {
      class: `${t}-popconfirm__icon`
    }, Xt(o.icon, () => [f(vt, {
      clsPrefix: t
    }, {
      default: () => f(fi, null)
    })])) : null, a) : null), i ? f("div", {
      class: [`${t}-popconfirm__action`]
    }, i) : null);
  }
}), YS = F("popconfirm", [E("body", `
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
 `, [O("&:not(:first-child)", "margin-top: 8px"), F("button", [O("&:not(:last-child)", "margin-right: 8px;")])])]), ZS = Object.assign(Object.assign(Object.assign({}, ve.props), er), {
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
}), JS = ee({
  name: "Popconfirm",
  props: ZS,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: t
    } = Ae(), r = ve("Popconfirm", "-popconfirm", YS, Zw, e, t), o = L(null);
    function i(s) {
      var d;
      if (!(!((d = o.value) === null || d === void 0) && d.getMergedShow())) return;
      const {
        onPositiveClick: u,
        "onUpdate:show": c
      } = e;
      Promise.resolve(u ? u(s) : !0).then((v) => {
        var p;
        v !== !1 && ((p = o.value) === null || p === void 0 || p.setShow(!1), c && ne(c, !1));
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
        var p;
        v !== !1 && ((p = o.value) === null || p === void 0 || p.setShow(!1), c && ne(c, !1));
      });
    }
    return $e(Kc, {
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
    return f(cr, or(t, gd, {
      theme: r.peers.Popover,
      themeOverrides: r.peerOverrides.Popover,
      internalExtraClass: ["popconfirm"],
      ref: "popoverInstRef"
    }), {
      trigger: e.activator || e.trigger,
      default: () => {
        const o = Cn(t, gd);
        return f(XS, Object.assign(Object.assign({}, o), {
          onPositiveClick: this.handlePositiveClick,
          onNegativeClick: this.handleNegativeClick
        }), e);
      }
    });
  }
}), QS = O([O("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), F("spin-container", `
 position: relative;
 `, [F("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [hi()])]), F("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), F("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [_("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]), F("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), F("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [_("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]), e2 = {
  small: 20,
  medium: 18,
  large: 16
}, t2 = Object.assign(Object.assign({}, ve.props), {
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
}), qc = ee({
  name: "Spin",
  props: t2,
  setup(e) {
    process.env.NODE_ENV !== "production" && et(() => {
      e.spinning !== void 0 && it("spin", "`spinning` is deprecated, please use `show` instead.");
    });
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Spin", "-spin", QS, Qw, e, t), i = z(() => {
      const {
        size: d
      } = e, {
        common: {
          cubicBezierEaseInOut: u
        },
        self: c
      } = o.value, {
        opacitySpinning: v,
        color: p,
        textColor: x
      } = c, h = typeof d == "number" ? pt(d) : c[Z("size", d)];
      return {
        "--n-bezier": u,
        "--n-opacity-spinning": v,
        "--n-size": h,
        "--n-color": p,
        "--n-text-color": x
      };
    }), a = r ? Ge("spin", z(() => {
      const {
        size: d
      } = e;
      return typeof d == "number" ? String(d) : d[0];
    }), i, e) : void 0, l = Ma(e, ["spinning", "show"]), s = L(!1);
    return et((d) => {
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
      mergedStrokeWidth: z(() => {
        const {
          strokeWidth: d
        } = e;
        if (d !== void 0) return d;
        const {
          size: u
        } = e;
        return e2[typeof u == "number" ? "medium" : u];
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
    }, f(Nn, {
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
}), n2 = F("switch", `
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`, [E("children-placeholder", `
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `), E("rail-placeholder", `
 display: flex;
 flex-wrap: none;
 `), E("button-placeholder", `
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `), F("base-loading", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `, [qt({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), E("checked, unchecked", `
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
 `), E("checked", `
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), E("unchecked", `
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), O("&:focus", [E("rail", `
 box-shadow: var(--n-box-shadow-focus);
 `)]), _("round", [E("rail", "border-radius: calc(var(--n-rail-height) / 2);", [E("button", "border-radius: calc(var(--n-button-height) / 2);")])]), qe("disabled", [qe("icon", [_("rubber-band", [_("pressed", [E("rail", [E("button", "max-width: var(--n-button-width-pressed);")])]), E("rail", [O("&:active", [E("button", "max-width: var(--n-button-width-pressed);")])]), _("active", [_("pressed", [E("rail", [E("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])]), E("rail", [O("&:active", [E("button", "left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));")])])])])])]), _("active", [E("rail", [E("button", "left: calc(100% - var(--n-button-width) - var(--n-offset))")])]), E("rail", `
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
 `, [E("button-icon", `
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
 `, [qt()]), E("button", `
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
 `)]), _("active", [E("rail", "background-color: var(--n-rail-color-active);")]), _("loading", [E("rail", `
 cursor: wait;
 `)]), _("disabled", [E("rail", `
 cursor: not-allowed;
 opacity: .5;
 `)])]), r2 = Object.assign(Object.assign({}, ve.props), {
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
let jr;
const o2 = ee({
  name: "Switch",
  props: r2,
  setup(e) {
    process.env.NODE_ENV !== "production" && et(() => {
      e.onChange && it("switch", "`on-change` is deprecated, please use `on-update:value` instead.");
    }), jr === void 0 && (typeof CSS < "u" ? typeof CSS.supports < "u" ? jr = CSS.supports("width", "max(1px)") : jr = !1 : jr = !0);
    const {
      mergedClsPrefixRef: t,
      inlineThemeDisabled: r
    } = Ae(e), o = ve("Switch", "-switch", n2, nS, e, t), i = Mn(e), {
      mergedSizeRef: a,
      mergedDisabledRef: l
    } = i, s = L(e.defaultValue), d = oe(e, "value"), u = Et(d, s), c = z(() => u.value === e.checkedValue), v = L(!1), p = L(!1), x = z(() => {
      const {
        railStyle: P
      } = e;
      if (P)
        return P({
          focused: p.value,
          checked: c.value
        });
    });
    function h(P) {
      const {
        "onUpdate:value": D,
        onChange: T,
        onUpdateValue: U
      } = e, {
        nTriggerFormInput: M,
        nTriggerFormChange: n
      } = i;
      D && ne(D, P), U && ne(U, P), T && ne(T, P), s.value = P, M(), n();
    }
    function g() {
      const {
        nTriggerFormFocus: P
      } = i;
      P();
    }
    function b() {
      const {
        nTriggerFormBlur: P
      } = i;
      P();
    }
    function m() {
      e.loading || l.value || (u.value !== e.checkedValue ? h(e.checkedValue) : h(e.uncheckedValue));
    }
    function C() {
      p.value = !0, g();
    }
    function S() {
      p.value = !1, b(), v.value = !1;
    }
    function w(P) {
      e.loading || l.value || P.key === " " && (u.value !== e.checkedValue ? h(e.checkedValue) : h(e.uncheckedValue), v.value = !1);
    }
    function B(P) {
      e.loading || l.value || P.key === " " && (P.preventDefault(), v.value = !0);
    }
    const R = z(() => {
      const {
        value: P
      } = a, {
        self: {
          opacityDisabled: D,
          railColor: T,
          railColorActive: U,
          buttonBoxShadow: M,
          buttonColor: n,
          boxShadowFocus: $,
          loadingColor: A,
          textColor: N,
          iconColor: I,
          [Z("buttonHeight", P)]: V,
          [Z("buttonWidth", P)]: te,
          [Z("buttonWidthPressed", P)]: X,
          [Z("railHeight", P)]: K,
          [Z("railWidth", P)]: H,
          [Z("railBorderRadius", P)]: q,
          [Z("buttonBorderRadius", P)]: Y
        },
        common: {
          cubicBezierEaseInOut: ie
        }
      } = o.value;
      let ae, fe, we;
      return jr ? (ae = `calc((${K} - ${V}) / 2)`, fe = `max(${K}, ${V})`, we = `max(${H}, calc(${H} + ${V} - ${K}))`) : (ae = pt((Ft(K) - Ft(V)) / 2), fe = pt(Math.max(Ft(K), Ft(V))), we = Ft(K) > Ft(V) ? H : pt(Ft(H) + Ft(V) - Ft(K))), {
        "--n-bezier": ie,
        "--n-button-border-radius": Y,
        "--n-button-box-shadow": M,
        "--n-button-color": n,
        "--n-button-width": te,
        "--n-button-width-pressed": X,
        "--n-button-height": V,
        "--n-height": fe,
        "--n-offset": ae,
        "--n-opacity-disabled": D,
        "--n-rail-border-radius": q,
        "--n-rail-color": T,
        "--n-rail-color-active": U,
        "--n-rail-height": K,
        "--n-rail-width": H,
        "--n-width": we,
        "--n-box-shadow-focus": $,
        "--n-loading-color": A,
        "--n-text-color": N,
        "--n-icon-color": I
      };
    }), y = r ? Ge("switch", z(() => a.value[0]), R, e) : void 0;
    return {
      handleClick: m,
      handleBlur: S,
      handleFocus: C,
      handleKeyup: w,
      handleKeydown: B,
      mergedRailStyle: x,
      pressed: v,
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
    } = a, v = !(xr(d) && xr(u) && xr(c));
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
    }, He(l, (p) => He(s, (x) => p || x ? f("div", {
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
    }, He(d, (p) => He(u, (x) => He(c, (h) => f(sr, null, {
      default: () => this.loading ? f(Nn, {
        key: "loading",
        clsPrefix: e,
        strokeWidth: 20
      }) : this.checked && (x || p) ? f("div", {
        class: `${e}-switch__button-icon`,
        key: x ? "checked-icon" : "icon"
      }, x || p) : !this.checked && (h || p) ? f("div", {
        class: `${e}-switch__button-icon`,
        key: h ? "unchecked-icon" : "icon"
      }, h || p) : null
    })))), He(l, (p) => p && f("div", {
      key: "checked",
      class: `${e}-switch__checked`
    }, p)), He(s, (p) => p && f("div", {
      key: "unchecked",
      class: `${e}-switch__unchecked`
    }, p)))));
  }
}), i2 = /* @__PURE__ */ Object.assign({
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
    return (r, o) => (_e(), Ct(de(Yu), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: de(C0),
      "date-locale": de(Tv),
      "theme-overrides": t
    }, {
      default: yt(() => [
        Xn(de(Lc), null, {
          default: yt(() => [
            Xn(de(Ac), null, {
              default: yt(() => [
                zn(r.$slots, "default")
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
function a2(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Gc = { exports: {} };
(function(e) {
  function t() {
    var r = 0, o = 1, i = 2, a = 3, l = 4, s = 5, d = 6, u = 7, c = 8, v = 9, p = 10, x = 11, h = 12, g = 13, b = 14, m = 15, C = 16, S = 17, w = 0, B = 1, R = 2, y = 3, P = 4;
    function D(n, $) {
      return 55296 <= n.charCodeAt($) && n.charCodeAt($) <= 56319 && 56320 <= n.charCodeAt($ + 1) && n.charCodeAt($ + 1) <= 57343;
    }
    function T(n, $) {
      $ === void 0 && ($ = 0);
      var A = n.charCodeAt($);
      if (55296 <= A && A <= 56319 && $ < n.length - 1) {
        var N = A, I = n.charCodeAt($ + 1);
        return 56320 <= I && I <= 57343 ? (N - 55296) * 1024 + (I - 56320) + 65536 : N;
      }
      if (56320 <= A && A <= 57343 && $ >= 1) {
        var N = n.charCodeAt($ - 1), I = A;
        return 55296 <= N && N <= 56319 ? (N - 55296) * 1024 + (I - 56320) + 65536 : I;
      }
      return A;
    }
    function U(n, $, A) {
      var N = [n].concat($).concat([A]), I = N[N.length - 2], V = A, te = N.lastIndexOf(b);
      if (te > 1 && N.slice(1, te).every(function(H) {
        return H == a;
      }) && [a, g, S].indexOf(n) == -1)
        return R;
      var X = N.lastIndexOf(l);
      if (X > 0 && N.slice(1, X).every(function(H) {
        return H == l;
      }) && [h, l].indexOf(I) == -1)
        return N.filter(function(H) {
          return H == l;
        }).length % 2 == 1 ? y : P;
      if (I == r && V == o)
        return w;
      if (I == i || I == r || I == o)
        return V == b && $.every(function(H) {
          return H == a;
        }) ? R : B;
      if (V == i || V == r || V == o)
        return B;
      if (I == d && (V == d || V == u || V == v || V == p))
        return w;
      if ((I == v || I == u) && (V == u || V == c))
        return w;
      if ((I == p || I == c) && V == c)
        return w;
      if (V == a || V == m)
        return w;
      if (V == s)
        return w;
      if (I == h)
        return w;
      var K = N.indexOf(a) != -1 ? N.lastIndexOf(a) - 1 : N.length - 2;
      return [g, S].indexOf(N[K]) != -1 && N.slice(K + 1, -1).every(function(H) {
        return H == a;
      }) && V == b || I == m && [C, S].indexOf(V) != -1 ? w : $.indexOf(l) != -1 ? R : I == l && V == l ? w : B;
    }
    this.nextBreak = function(n, $) {
      if ($ === void 0 && ($ = 0), $ < 0)
        return 0;
      if ($ >= n.length - 1)
        return n.length;
      for (var A = M(T(n, $)), N = [], I = $ + 1; I < n.length; I++)
        if (!D(n, I - 1)) {
          var V = M(T(n, I));
          if (U(A, N, V))
            return I;
          N.push(V);
        }
      return n.length;
    }, this.splitGraphemes = function(n) {
      for (var $ = [], A = 0, N; (N = this.nextBreak(n, A)) < n.length; )
        $.push(n.slice(A, N)), A = N;
      return A < n.length && $.push(n.slice(A)), $;
    }, this.iterateGraphemes = function(n) {
      var $ = 0, A = {
        next: (function() {
          var N, I;
          return (I = this.nextBreak(n, $)) < n.length ? (N = n.slice($, I), $ = I, { value: N, done: !1 }) : $ < n.length ? (N = n.slice($), $ = n.length, { value: N, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && (A[Symbol.iterator] = function() {
        return A;
      }), A;
    }, this.countGraphemes = function(n) {
      for (var $ = 0, A = 0, N; (N = this.nextBreak(n, A)) < n.length; )
        A = N, $++;
      return A < n.length && $++, $;
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
      129489 <= n && n <= 129501 ? g : 127995 <= n && n <= 127999 ? b : n == 8205 ? m : n == 9792 || // So       FEMALE SIGN
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
})(Gc);
var l2 = Gc.exports;
const s2 = /* @__PURE__ */ a2(l2), d2 = new s2(), u2 = (e = "") => d2.countGraphemes(e);
function c2(e) {
  return e && typeof e == "object" && typeof e.then == "function";
}
const Pa = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ An({
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
  emits: /* @__PURE__ */ An(["blur", "input"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = eo(e, "modelValue"), o = t;
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
    return (s, d) => (_e(), Ct(de(xa), {
      "input-props": { autocomplete: "off" },
      type: e.type,
      size: e.size,
      "show-password-on": e.showPassword ? "click" : void 0,
      value: r.value,
      maxlength: e.maxlength,
      "show-count": e.showCount,
      "count-graphemes": e.maxlength != null && e.maxlength > 0 || e.showCount ? de(u2) : void 0,
      placeholder: e.placeholder,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      onInput: l,
      onBlur: a
    }, ho({ _: 2 }, [
      e.prefixIcon ? {
        name: "prefix",
        fn: yt(() => [
          Xn(de(xl), Sf(Bf(e.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly"]));
  }
});
var Ur = void 0, yr = {}, za;
yr.throttle = za = function(e, t, r, o) {
  var i, a = 0;
  typeof t != "boolean" && (o = r, r = t, t = Ur);
  function l() {
    var s = this, d = +/* @__PURE__ */ new Date() - a, u = arguments;
    function c() {
      a = +/* @__PURE__ */ new Date(), r.apply(s, u);
    }
    function v() {
      i = Ur;
    }
    o && !i && c(), i && clearTimeout(i), o === Ur && d > e ? c() : t !== !0 && (i = setTimeout(o ? v : c, o === Ur ? e - d : e));
  }
  return yr.guid && (l.guid = r.guid = r.guid || yr.guid++), l;
};
yr.debounce = function(e, t, r) {
  return r === Ur ? za(e, t, !1) : za(e, r, t !== !1);
};
const xi = function(e, t, r) {
  return yr.debounce(t || 300, r ?? !0, e);
}, F2 = function(e, t, r) {
  return yr.throttle(t || 300, r ?? !1, e);
}, $a = /* @__PURE__ */ Object.assign({
  name: "PSwitch",
  inheritAttrs: !1
}, {
  __name: "switch",
  props: /* @__PURE__ */ An({
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
  emits: /* @__PURE__ */ An(["change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = eo(e, "modelValue"), o = vo(), i = t, a = xi(function(l) {
      e.readonly || (r.value = l, i("change", l));
    }, 300);
    return (l, s) => (_e(), Mt(Qe, null, [
      Xn(de(o2), {
        class: xn([de(o).class || "", e.readonly ? "p-switch-readonly" : ""]),
        style: Yn(de(o).style || ""),
        size: e.size,
        value: r.value,
        loading: e.loading,
        disabled: e.disabled,
        "checked-value": e.checkedValue,
        "unchecked-value": e.uncheckedValue,
        "on-update:value": de(a)
      }, ho({ _: 2 }, [
        !e.outside && e.checkedText != null && e.checkedText !== "" ? {
          name: "checked",
          fn: yt(() => [
            Qt(bn(e.checkedText), 1)
          ]),
          key: "0"
        } : void 0,
        !e.outside && e.uncheckedText != null && e.uncheckedText !== "" ? {
          name: "unchecked",
          fn: yt(() => [
            Qt(bn(e.uncheckedText), 1)
          ]),
          key: "1"
        } : void 0
      ]), 1032, ["class", "style", "size", "value", "loading", "disabled", "checked-value", "unchecked-value", "on-update:value"]),
      e.outside && e.checkedText != null && e.checkedText !== "" && r.value === e.checkedValue ? (_e(), Mt("span", {
        key: 0,
        class: xn(["p-switch-outside-text", e.disabled ? "p-switch-outside-text-disabled" : ""])
      }, bn(e.checkedText), 3)) : It("", !0),
      e.outside && e.uncheckedText != null && e.uncheckedText !== "" && r.value === e.uncheckedValue ? (_e(), Mt("span", {
        key: 1,
        class: xn(["p-switch-outside-text", e.disabled ? "p-switch-outside-text-disabled" : ""])
      }, bn(e.uncheckedText), 3)) : It("", !0)
    ], 64));
  }
}), f2 = {
  key: 1,
  style: { flex: "1" }
}, h2 = /* @__PURE__ */ Object.assign({
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
    inlineSize: { type: Array, default: () => [] }
    // 配合 inline 使用，每行显示 form-item 的数量，可传一个数组，如 [2, 3, 2]，表示第一行显示 2 个，第二行显示 3 个，第三行及以下显示 2 个
  },
  emits: ["submit"],
  setup(e, { expose: t, emit: r }) {
    const o = z(() => {
      if (!e.inline || e.inline && e.inlineSize.length <= 0 || e.model.length <= 0) return null;
      const h = [], g = [];
      if (e.inlineSize.length === 1) {
        if (e.model.forEach((b, m) => {
          m % e.inlineSize[0] === 0 && g.push([]), g[g.length - 1].push(b);
        }), g[g.length - 1].length < e.inlineSize[0]) {
          let b = e.inlineSize[0] - g[g.length - 1].length, m = 0;
          for (; m < b; )
            g[g.length - 1].push({ isInlinePlaceholder: !0 }), m++;
        }
      } else {
        let b = 0, m = 0;
        for (let S = 0; S < e.inlineSize.length - 1; S++) {
          const w = e.inlineSize[S];
          if (m += w, b < e.model.length) {
            const B = e.model.slice(b, b + w);
            if (B.length > 0) {
              if (B.length < w) {
                let R = w - B.length, y = 0;
                for (; y < R; )
                  B.push({ isInlinePlaceholder: !0 }), y++;
              }
              h.push(B);
            }
            b += w;
          }
        }
        const C = e.inlineSize[e.inlineSize.length - 1];
        if (e.model.filter((S, w) => w >= m).forEach((S, w) => {
          w % C === 0 && g.push([]), g[g.length - 1].push(S);
        }), g.length > 0 && g[g.length - 1].length < C) {
          let S = C - g[g.length - 1].length, w = 0;
          for (; w < S; )
            g[g.length - 1].push({ isInlinePlaceholder: !0 }), w++;
        }
      }
      return [...h, ...g];
    }), i = function() {
      const h = {};
      return e.model.forEach((g) => {
        g.slot || (h[g.field] = g.value);
      }), L(h);
    }(), a = function() {
      return e.feedbackSizeClass ? ["s"].includes(e.feedbackSizeClass) ? `p-form-item-feedback-${e.feedbackSizeClass}` : e.feedbackSizeClass : "";
    }();
    function l() {
      const h = {};
      return e.model.forEach((g) => {
        g.slot && (h[g.field] = Rf(g.value));
      }), { ...i.value, ...h };
    }
    const s = r, d = Sl("form"), u = (h = !0) => (h && document.activeElement && document.activeElement.blur(), d.value.validate().then(() => ({ formData: l(), valid: !0 })).catch((g) => ({ formData: l(), valid: !1, errors: g }))), c = xi(function() {
      u(!0).then((h) => {
        s("submit", h);
      });
    }), v = Sl("formItem");
    function p(h = "") {
      if (!h) {
        d.value.restoreValidation();
        return;
      }
      const g = v.value.find((b) => b.path === h);
      g && g.restoreValidation();
    }
    function x(h) {
      h && e.rules && e.rules[h] && (e.rules[h].trigger && e.rules[h].trigger.includes("input") || p(h));
    }
    return t({ validate: u, restoreValidation: p, getFormValue: l }), (h, g) => (_e(), Ct(de(aS), {
      ref: "form",
      class: xn([e.inline ? "p-form-inline" : ""]),
      "show-label": e.showLabel,
      "label-placement": e.labelPlacement,
      "label-width": "auto",
      "require-mark-placement": "left",
      "show-require-mark": e.showRequireMark,
      "label-align": e.labelPlacement === "left" ? "right" : "left",
      model: de(i),
      rules: e.rules,
      inline: e.inline,
      onSubmit: kf(de(c), ["prevent"])
    }, {
      default: yt(() => [
        !e.inline || e.inline && e.inlineSize.length <= 0 ? (_e(!0), Mt(Qe, { key: 0 }, Ai(e.model, (b) => (_e(), Ct(de(pd), {
          ref_for: !0,
          ref: "formItem",
          style: Yn(b.itemStyle == null ? e.itemStyle : b.itemStyle),
          key: b.field,
          label: b.label,
          path: b.field,
          "feedback-class": de(a),
          first: !0
        }, {
          default: yt(() => [
            b.slot === !0 ? zn(h.$slots, b.field, { key: 0 }) : (_e(), Mt(Qe, { key: 1 }, [
              b.type === "input" ? (_e(), Ct(yo(de(Pa)), Vt({
                key: 0,
                modelValue: de(i)[b.field],
                "onUpdate:modelValue": (m) => de(i)[b.field] = m,
                ref_for: !0
              }, { disabled: e.disabled, readonly: e.readonly, ...b.props }, {
                onInput: (m) => x(b.field)
              }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : b.type === "switch" ? (_e(), Ct(yo(de($a)), Vt({
                key: 1,
                modelValue: de(i)[b.field],
                "onUpdate:modelValue": (m) => de(i)[b.field] = m,
                ref_for: !0
              }, { disabled: e.disabled, readonly: e.readonly, ...b.props }), null, 16, ["modelValue", "onUpdate:modelValue"])) : It("", !0)
            ], 64))
          ]),
          _: 2
        }, 1032, ["style", "label", "path", "feedback-class"]))), 128)) : It("", !0),
        e.inline && e.inlineSize.length > 0 && o.value ? (_e(!0), Mt(Qe, { key: 1 }, Ai(o.value, (b, m) => (_e(), Mt("div", {
          key: m,
          class: "p-form-inline-item"
        }, [
          (_e(!0), Mt(Qe, null, Ai(b, (C) => (_e(), Mt(Qe, {
            key: C.field
          }, [
            C.isInlinePlaceholder ? (_e(), Mt("div", f2)) : (_e(), Ct(de(pd), {
              key: 0,
              ref_for: !0,
              ref: "formItem",
              style: Yn(C.itemStyle == null ? e.itemStyle : C.itemStyle),
              label: C.label,
              path: C.field,
              "feedback-class": de(a),
              first: !0
            }, {
              default: yt(() => [
                C.slot === !0 ? zn(h.$slots, C.field, { key: 0 }) : (_e(), Mt(Qe, { key: 1 }, [
                  C.type === "input" ? (_e(), Ct(yo(de(Pa)), Vt({
                    key: 0,
                    modelValue: de(i)[C.field],
                    "onUpdate:modelValue": (S) => de(i)[C.field] = S,
                    ref_for: !0
                  }, { disabled: e.disabled, readonly: e.readonly, ...C.props }, {
                    onInput: (S) => x(C.field)
                  }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : C.type === "switch" ? (_e(), Ct(yo(de($a)), Vt({
                    key: 1,
                    modelValue: de(i)[C.field],
                    "onUpdate:modelValue": (S) => de(i)[C.field] = S,
                    ref_for: !0
                  }, { disabled: e.disabled, readonly: e.readonly, ...C.props }), null, 16, ["modelValue", "onUpdate:modelValue"])) : It("", !0)
                ], 64))
              ]),
              _: 2
            }, 1032, ["style", "label", "path", "feedback-class"]))
          ], 64))), 128))
        ]))), 128)) : It("", !0),
        zn(h.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "show-label", "label-placement", "show-require-mark", "label-align", "model", "rules", "inline", "onSubmit"]));
  }
}), v2 = /* @__PURE__ */ Object.assign({
  name: "PSelect",
  inheritAttrs: !1
}, {
  __name: "select",
  props: /* @__PURE__ */ An({
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
  emits: /* @__PURE__ */ An(["update", "change"], ["update:modelValue"]),
  setup(e, { emit: t }) {
    const r = vo(), o = t, i = eo(e, "modelValue"), a = xi(function(l) {
      l !== i.value && bt(() => {
        o("change", l);
      }), i.value = l, o("update", l);
    }, 300);
    return (l, s) => (_e(), Ct(de(Qu), {
      class: xn(`${de(r).class ? de(r).class : ""}`),
      style: Yn(e.width ? `width:${e.width}` : ""),
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
      "onUpdate:value": de(a)
    }, {
      empty: yt(() => [
        Xn(de(Rr), {
          size: "small",
          description: e.emptyDescription
        }, null, 8, ["description"])
      ]),
      _: 1
    }, 8, ["class", "style", "options", "value", "size", "placeholder", "disabled", "value-field", "label-field", "clearable", "show-checkmark", "onUpdate:value"]));
  }
}), uo = /* @__PURE__ */ Object.assign({
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
    const r = vo(), o = Cd(), i = t, a = xi(function() {
      e.waiting || i("click");
    }, 300);
    return (l, s) => (_e(), Ct(de(tr), {
      class: xn([
        de(r).class ? de(r).class : "",
        e.size === "xs" ? "p-button-xs" : "",
        e.type === "default" && e.defaultType ? `p-button-default-${e.defaultType}` : "",
        e.waiting ? "p-button-waiting" : ""
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
      disabled: e.disabled,
      "icon-placement": "left",
      onClick: de(a)
    }, ho({
      default: yt(() => [
        !e.loading || e.loading && !e.loadingWithoutText ? (_e(), Ct(de(o).default, { key: 0 })) : It("", !0)
      ]),
      _: 2
    }, [
      l.$slots.icon ? {
        name: "icon",
        fn: yt(() => [
          Xn(de(o).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "attr-type", "block", "size", "type", "loading", "ghost", "secondary", "text", "disabled", "onClick"]));
  }
}), p2 = /* @__PURE__ */ ee((e) => {
  const t = {
    bordered: !1,
    bottomBordered: !1,
    singleColumn: !1,
    singleLine: !0,
    striped: !1,
    pagination: !1,
    size: "small"
  };
  return () => f(Yy, {
    ...t,
    ...e
  }, {
    empty: () => f(Rr, {
      size: "medium",
      description: "暂无数据"
    })
  });
}, {
  name: "PDataTable",
  inheritAttrs: !0
}), g2 = {
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
    return (o, i) => (_e(), Mt(Qe, null, [
      e.negativeText ? (_e(), Ct(de(uo), {
        key: 0,
        size: "xs",
        type: "default",
        "default-type": e.type,
        onClick: t
      }, {
        default: yt(() => [
          Qt(bn(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type"])) : It("", !0),
      e.positiveText ? (_e(), Ct(de(uo), {
        key: 1,
        size: "xs",
        type: e.type,
        onClick: r
      }, {
        default: yt(() => [
          Qt(bn(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type"])) : It("", !0)
    ], 64));
  }
}, m2 = /* @__PURE__ */ ee((e, {
  emit: t
}) => {
  const r = Cd(), o = L(), i = () => {
    o.value.setShow(!1);
  };
  return () => f(JS, {
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
    action: () => f(g2, {
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
}), b2 = /* @__PURE__ */ Object.assign({
  name: "PPagination",
  inheritAttrs: !1
}, {
  __name: "pagination",
  props: /* @__PURE__ */ An({
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
  emits: /* @__PURE__ */ An(["changePage", "changePageSize"], ["update:page", "update:pageSize"]),
  setup(e, { emit: t }) {
    const r = vo(), o = eo(e, "page"), i = eo(e, "pageSize"), a = t;
    function l(d) {
      o.value = d, a("changePage", d);
    }
    function s(d) {
      i.value = d, a("changePageSize", d);
    }
    return (d, u) => (_e(), Ct(de(nc), {
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
      style: Yn(de(r).style)
    }, ho({ _: 2 }, [
      e.simple ? void 0 : {
        name: "prefix",
        fn: yt(({ itemCount: c }) => [
          Qt("共 " + bn(c) + " 条记录", 1)
        ]),
        key: "0"
      },
      e.showQuickJumper && !e.simple ? {
        name: "suffix",
        fn: yt(() => [
          u[0] || (u[0] = Qt("页"))
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
function x2(e, t = 200) {
  const r = L(!1), o = L(!1), i = z(() => !r.value && !o.value), a = L(!1), l = L(), s = L();
  let d;
  return Ne(() => de(e), (u) => {
    if (r.value = !1, o.value = !1, l.value = null, !u) {
      s.value = null, d && clearTimeout(d), d = null;
      return;
    }
    de(t) > 0 ? (a.value = !1, d && clearTimeout(d), d = setTimeout(() => {
      a.value = !0;
    }, Number(de(t)))) : a.value = !0, u.then((c) => {
      u === de(e) && (s.value = c, o.value = !0);
    }).catch((c) => {
      u === de(e) && (l.value = c, r.value = !0);
    });
  }, { immediate: !0 }), { isPending: i, isRejected: r, isResolved: o, isDelayElapsed: a, error: l, data: s };
}
const Xc = ({ delay: e = 300, minPendingTime: t = 500, loadingValue: r = !1 } = {}) => {
  let o = 0, i = null;
  const a = () => {
    i && (clearTimeout(i), i = null);
  }, l = L(!!r), s = L(!!r);
  let d = null;
  const u = (c) => (l.value = c, new Promise((v) => {
    c === !0 ? v() : d = v;
  }));
  return Ne(
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
  ), yd(() => {
    d = null, a();
  }), { loading: s, waiting: l, setLoadingStatus: u };
}, C2 = {
  key: 1,
  class: "p-promised-loading"
}, y2 = /* @__PURE__ */ Object.assign({
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
    nilType: { type: String },
    // 控制 empty 和 error 状态下的样式
    contentStyle: { type: String, default: "position:relative; min-height:72px;" }
    //  内容的最小高度，避免 loading/empty 状态下高度不确定导致抖动
  },
  setup(e) {
    const t = z(() => ["small", "medium", "large"].includes(e.loadingSize) ? e.loadingSize : "medium"), r = z(() => {
      const m = { position: "absolute", left: "50%", zIndex: 2 };
      return e.loadingTop == null ? m.top = "50%" : m.top = `${e.loadingTop}px`, t.value === "small" ? (m.marginLeft = "-14px", e.loadingTop == null && (m.marginTop = "-14px")) : t.value === "medium" ? (m.marginLeft = "-17px", e.loadingTop == null && (m.marginTop = "-17px")) : t.value === "large" && (m.marginLeft = "-20px", e.loadingTop == null && (m.marginTop = "-20px")), m;
    }), o = z(() => e.nilType === "border" ? "p-promised-empty-border" : e.nilType === "line" ? "p-promised-empty-line" : ""), i = vo(), a = oe(() => e.promise), { data: l, error: s, isPending: d, isDelayElapsed: u, isResolved: c, isRejected: v } = x2(a, 0), { loading: p, waiting: x } = Xc();
    Ne(
      () => d.value && u.value,
      (m) => {
        x.value = m;
      },
      { immediate: !1 }
    );
    const h = L(!1);
    Ne(v, (m) => {
      m === !0 && h.value === !1 && (h.value = m);
    }), Ne(c, (m) => {
      m === !0 && h.value === !0 && (h.value = !1);
    });
    function g(m) {
      let C = !0;
      if (typeof m == "object") {
        for (const S in m)
          if (typeof m[S] == "object" ? C = g(m[S]) : C = m[S] === "" || m[S] === null || m[S] === void 0, C === !1)
            break;
        return C;
      } else
        return m === "" || m === null || m === void 0;
    }
    function b(m) {
      return m == null || m === "" ? !0 : g(e.dataField ? m[e.dataField] : m);
    }
    return (m, C) => (_e(), Mt("div", {
      class: xn(de(i).class ? de(i).class : ""),
      style: Yn(e.contentStyle)
    }, [
      !de(p) && !de(d) && !de(s) && !b(de(l)) || de(d) && de(x) && !h.value && !de(s) && !b(de(l)) ? zn(m.$slots, "default", {
        key: 0,
        data: de(l)
      }) : It("", !0),
      de(p) ? (_e(), Mt("div", C2, [
        Xn(de(qc), {
          size: t.value,
          style: Yn(r.value)
        }, null, 8, ["size", "style"]),
        C[0] || (C[0] = Ff("div", { class: "p-promised-loading-mask" }, null, -1))
      ])) : It("", !0),
      !de(p) && !de(d) && !de(s) && b(de(l)) ? (_e(), Ct(de(Rr), {
        key: 2,
        class: xn(o.value),
        description: e.emptyDesc,
        size: "medium"
      }, ho({ _: 2 }, [
        m.$slots.emptyExtra ? {
          name: "extra",
          fn: yt(() => [
            zn(m.$slots, "emptyExtra")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["class", "description"])) : It("", !0),
      !de(p) && !de(d) && de(s) ? (_e(), Ct(de(Rr), {
        key: 3,
        class: xn(o.value),
        description: de(s).message || e.errorDefaultDesc,
        size: "medium"
      }, null, 8, ["class", "description"])) : It("", !0)
    ], 6));
  }
}), w2 = {
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
    const { loading: t, waiting: r, setLoadingStatus: o } = Xc();
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
        if (c2(u)) {
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
    return (s, d) => (_e(), Mt(Qe, null, [
      e.negativeText ? (_e(), Ct(de(uo), {
        key: 0,
        size: "small",
        type: "default",
        "default-type": e.type,
        disabled: de(t),
        onClick: a
      }, {
        default: yt(() => [
          Qt(bn(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type", "disabled"])) : It("", !0),
      e.positiveText ? (_e(), Ct(de(uo), {
        key: 1,
        size: "small",
        type: e.type,
        loading: de(t),
        loadingWithoutText: !1,
        onClick: l
      }, {
        default: yt(() => [
          Qt(bn(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type", "loading"])) : It("", !0)
    ], 64));
  }
};
function S2(e) {
  return typeof e == "string" ? function() {
    return f("p", { innerHTML: e });
  } : Array.isArray(e) ? function() {
    return f(
      "div",
      e.map((t) => f("p", { innerHTML: t }))
    );
  } : e;
}
const P2 = () => {
  let e = null, t = null, r = null, o = null;
  const i = kc(), a = (u = {}, c = { width: 430 }, v) => {
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
    return p.closeOnEsc = !1, p.maskClosable = !1, p.iconPlacement = "left", p.titleClass = p.showIcon ? "p-dialog-title" : "p-dialog-title p-dialog-title-without-icon", p.style = "width: " + c.width + "px", v && (p.type = v), (p.positiveText || p.negativeText) && (p.action = function() {
      return f(w2, {
        positiveText: p.positiveText,
        negativeText: p.negativeText,
        type: v,
        onPositiveClick: p.onPositiveClick,
        onNegativeClick: p.onNegativeClick,
        onClose: function() {
          v === "success" && t ? (t.destroy(), t = null) : v === "warning" && r ? (r.destroy(), r = null) : v === "error" && o ? (o.destroy(), o = null) : e && (e.destroy(), e = null);
        },
        onLoading: (x) => {
          let h = null;
          v === "success" && t ? h = t : v === "warning" && r ? h = r : v === "error" && o ? h = o : e && (h = e), h.closable !== !1 && (h.class = x === !0 ? "p-dialog p-dialog-loading" : "p-dialog");
        }
      });
    }), p.content = S2(u.content), i.create(p);
  }, l = (u, c = {}) => {
    u.negativeText == null && !c.useDefaultConf && (u.negativeText = ""), u.positiveText == null && !c.useDefaultConf && (u.positiveText = "我知道了"), u.closable == null && !c.useDefaultConf && (u.closable = !1), u.showIcon == null && !c.useDefaultConf && (u.showIcon = !0);
    const v = a(u, { width: 430, ...c }, "success");
    return t = v, v;
  }, s = (u, c = {}) => {
    u.negativeText == null && !c.useDefaultConf && (u.negativeText = ""), u.positiveText == null && !c.useDefaultConf && (u.positiveText = "我知道了"), u.closable == null && !c.useDefaultConf && (u.closable = !1), u.showIcon == null && !c.useDefaultConf && (u.showIcon = !0);
    const v = a(u, { width: 430, ...c }, "warning");
    return r = v, v;
  }, d = (u, c = {}) => {
    u.negativeText == null && !c.useDefaultConf && (u.negativeText = ""), u.positiveText == null && !c.useDefaultConf && (u.positiveText = "我知道了"), u.closable == null && !c.useDefaultConf && (u.closable = !1), u.showIcon == null && !c.useDefaultConf && (u.showIcon = !0);
    const v = a(u, { width: 430, ...c }, "error");
    return o = v, v;
  };
  return yd(() => {
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
}, z2 = () => {
  const e = Nc();
  return { open: (r = {}, o = {}) => {
    const i = {
      title: "",
      closable: !0,
      autoFocus: !1,
      ...r,
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
    !i.title && r.closable == null && (i.closable = !1), i.title && (i.titleClass = "p-modal-title"), !i.title && !i.closable && (i.titleClass = "p-modal-title-hidden"), !i.title && i.closable && (i.titleClass = "p-modal-title-closable"), r.contentStyle || (i.title ? i.contentStyle = "padding: 16px" : !i.title && i.closable ? i.contentStyle = "padding: 0 16px 16px" : !i.title && !i.closable && (i.contentStyle = "padding: 16px"));
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
}, $2 = {
  install: (e, t = {}) => {
    const { prefix: r = "p" } = t;
    e.component(`${r}-practical`, i2), e.component(`${r}-form`, h2), e.component(`${r}-input`, Pa), e.component(`${r}-select`, v2), e.component(`${r}-switch`, $a), e.component(`${r}-button`, uo), e.component(`${r}-data-table`, p2), e.component(`${r}-popconfirm`, m2), e.component(`${r}-pagination`, b2), e.component(`${r}-promised`, y2), e.component(`${r}-icon-wrapper`, GS), e.component(`${r}-icon`, xl), e.component(`${r}-input-group`, N1), e.component(`${r}-input-group-label`, W1), e.component(`${r}-popover`, cr), e.component(`${r}-spin`, qc), e.component(`${r}-collapse`, pC), e.component(`${r}-collapse-item`, bC), e.component(`${r}-dropdown`, xc), e.component(`${r}-tooltip`, fc);
  }
};
export {
  R2 as createDiscreteApi,
  xi as debounce,
  $2 as default,
  F2 as throttle,
  Xc as useDelayLoading,
  P2 as useDialog,
  z2 as useModal
};
