import { ref as M, readonly as rn, watch as Pe, computed as O, getCurrentInstance as Rr, onMounted as Qe, onBeforeUnmount as Ye, onBeforeMount as $n, reactive as Or, inject as he, onActivated as fs, onDeactivated as hs, createTextVNode as on, Fragment as et, Comment as Xi, defineComponent as J, provide as me, withDirectives as kt, toRef as se, h, Teleport as Eo, nextTick as Je, renderSlot as an, mergeProps as cn, isVNode as ic, shallowRef as ac, watchEffect as ot, Transition as ct, TransitionGroup as lc, vShow as Xn, cloneVNode as vs, Text as sc, markRaw as Ra, createApp as uc, unref as te, openBlock as Ke, createBlock as lt, withCtx as st, createVNode as Yn, mergeModels as vo, useModel as ps, createSlots as Yi, normalizeProps as dc, guardReactiveProps as cc, useTemplateRef as Oa, withModifiers as fc, createElementBlock as br, renderList as hc, resolveDynamicComponent as vc, toValue as pc, useAttrs as gs, normalizeClass as xs, normalizeStyle as bi, useSlots as ms, createCommentVNode as Wt, toDisplayString as po, onScopeDispose as bs, createElementVNode as gc } from "vue";
function xc(e) {
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
      $({ context: x, props: w }) {
        return v = typeof v == "string" ? v : v({ context: x, props: w }), x.bem.b = v, `${(w == null ? void 0 : w.bPrefix) || n}${x.bem.b}`;
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
        return v = typeof v == "string" ? v : v({ context: b, props: x }), b.bem.els = v.split(",").map((w) => w.trim()), b.bem.els.map((w) => `${(x == null ? void 0 : x.bPrefix) || n}${b.bem.b}${r}${w}`).join(", ");
      }
    };
  }
  function u(v) {
    return {
      $({ context: g, props: b }) {
        v = typeof v == "string" ? v : v({ context: g, props: b });
        const x = v.split(",").map((y) => y.trim());
        function w(y) {
          return x.map((S) => `&${(b == null ? void 0 : b.bPrefix) || n}${g.bem.b}${y !== void 0 ? `${r}${y}` : ""}${o}${S}`).join(", ");
        }
        const A = g.bem.els;
        if (A !== null) {
          if (process.env.NODE_ENV !== "production" && A.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${v}) is invalid, using modifier inside multiple elements is not allowed`);
          return w(A[0]);
        } else
          return w();
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
function mc(e) {
  let n = 0;
  for (let r = 0; r < e.length; ++r)
    e[r] === "&" && ++n;
  return n;
}
const Cs = /\s*,(?![^(]*\))\s*/g, bc = /\s+/g;
function Cc(e, n) {
  const r = [];
  return n.split(Cs).forEach((o) => {
    let i = mc(o);
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
function yc(e, n) {
  const r = [];
  return n.split(Cs).forEach((o) => {
    e.forEach((i) => {
      r.push((i && i + " ") + o);
    });
  }), r;
}
function wc(e) {
  let n = [""];
  return e.forEach((r) => {
    r = r && r.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    r && (r.includes("&") ? n = Cc(n, r) : n = yc(n, r));
  }), n.join(", ").replace(bc, " ");
}
function Ma(e) {
  if (!e)
    return;
  const n = e.parentElement;
  n && n.removeChild(e);
}
function zo(e, n) {
  return (n ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function Bc(e) {
  const n = document.createElement("style");
  return n.setAttribute("cssr-id", e), n;
}
function Ur(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Sc = /[A-Z]/g;
function ys(e) {
  return e.replace(Sc, (n) => "-" + n.toLowerCase());
}
function Ac(e, n = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((r) => n + `  ${ys(r[0])}: ${r[1]};`).join(`
`) + `
` + n + "}" : `: ${e};`;
}
function Fc(e, n, r) {
  return typeof e == "function" ? e({
    context: n.context,
    props: r
  }) : e;
}
function Ia(e, n, r, o) {
  if (!n)
    return "";
  const i = Fc(n, r, o);
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
    s = ys(s), u != null && l.push(`  ${s}${Ac(u)}`);
  }), e && l.push("}"), l.join(`
`);
}
function Ci(e, n, r) {
  e && e.forEach((o) => {
    if (Array.isArray(o))
      Ci(o, n, r);
    else if (typeof o == "function") {
      const i = o(n);
      Array.isArray(i) ? Ci(i, n, r) : i && r(i);
    } else o && r(o);
  });
}
function ws(e, n, r, o, i) {
  const a = e.$;
  let l = "";
  if (!a || typeof a == "string")
    Ur(a) ? l = a : n.push(a);
  else if (typeof a == "function") {
    const d = a({
      context: o.context,
      props: i
    });
    Ur(d) ? l = d : n.push(d);
  } else if (a.before && a.before(o.context), !a.$ || typeof a.$ == "string")
    Ur(a.$) ? l = a.$ : n.push(a.$);
  else if (a.$) {
    const d = a.$({
      context: o.context,
      props: i
    });
    Ur(d) ? l = d : n.push(d);
  }
  const s = wc(n), u = Ia(s, e.props, o, i);
  l ? r.push(`${l} {`) : u.length && r.push(u), e.children && Ci(e.children, {
    context: o.context,
    props: i
  }, (d) => {
    if (typeof d == "string") {
      const c = Ia(s, { raw: d }, o, i);
      r.push(c);
    } else
      ws(d, n, r, o, i);
  }), n.pop(), l && r.push("}"), a && a.after && a.after(o.context);
}
function Pc(e, n, r) {
  const o = [];
  return ws(e, [], o, n, r), o.join(`

`);
}
function Cr(e) {
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
function $c(e, n, r, o) {
  const { els: i } = n;
  if (r === void 0)
    i.forEach(Ma), n.els = [];
  else {
    const a = zo(r, o);
    a && i.includes(a) && (Ma(a), n.els = i.filter((l) => l !== a));
  }
}
function _a(e, n) {
  e.push(n);
}
function Dc(e, n, r, o, i, a, l, s, u) {
  let d;
  if (r === void 0 && (d = n.render(o), r = Cr(d)), u) {
    u.adapter(r, d ?? n.render(o));
    return;
  }
  s === void 0 && (s = document.head);
  const c = zo(r, s);
  if (c !== null && !a)
    return c;
  const f = c ?? Bc(r);
  if (d === void 0 && (d = n.render(o)), f.textContent = d, c !== null)
    return c;
  if (l) {
    const p = s.querySelector(`meta[name="${l}"]`);
    if (p)
      return s.insertBefore(f, p), _a(n.els, f), f;
  }
  return i ? s.insertBefore(f, s.querySelector("style, link")) : s.appendChild(f), _a(n.els, f), f;
}
function Ec(e) {
  return Pc(this, this.instance, e);
}
function zc(e = {}) {
  const { id: n, ssr: r, props: o, head: i = !1, force: a = !1, anchorMetaName: l, parent: s } = e;
  return Dc(this.instance, this, n, o, i, a, l, s, r);
}
function kc(e = {}) {
  const { id: n, parent: r } = e;
  $c(this.instance, this, n, r);
}
const Gr = function(e, n, r, o) {
  return {
    instance: e,
    $: n,
    props: r,
    children: o,
    els: [],
    render: Ec,
    mount: zc,
    unmount: kc
  };
}, Tc = function(e, n, r, o) {
  return Array.isArray(n) ? Gr(e, { $: null }, null, n) : Array.isArray(r) ? Gr(e, n, null, r) : Array.isArray(o) ? Gr(e, n, r, o) : Gr(e, n, r, null);
};
function Bs(e = {}) {
  const n = {
    c: (...r) => Tc(n, ...r),
    use: (r, ...o) => r.install(n, ...o),
    find: zo,
    context: {},
    config: e
  };
  return n;
}
function Rc(e, n) {
  if (e === void 0)
    return !1;
  if (n) {
    const { context: { ids: r } } = n;
    return r.has(e);
  }
  return zo(e) !== null;
}
const Oc = "n", yr = `.${Oc}-`, Mc = "__", Ic = "--", Ss = Bs(), As = xc({
  blockPrefix: yr,
  elementPrefix: Mc,
  modifierPrefix: Ic
});
Ss.use(As);
const {
  c: D,
  find: rw
} = Ss, {
  cB: k,
  cE: z,
  cM: N,
  cNotM: Ve
} = As;
function Zi(e) {
  return D(({
    props: {
      bPrefix: n
    }
  }) => `${n || yr}modal, ${n || yr}drawer`, [e]);
}
function Fs(e) {
  return D(({
    props: {
      bPrefix: n
    }
  }) => `${n || yr}popover`, [e]);
}
function Ps(e) {
  return D(({
    props: {
      bPrefix: n
    }
  }) => `&${n || yr}modal`, e);
}
const _c = (...e) => D(">", [k(...e)]);
function U(e, n) {
  return e + (n === "default" ? "" : n.replace(/^[a-z]/, (r) => r.toUpperCase()));
}
let go = [];
const $s = /* @__PURE__ */ new WeakMap();
function Lc() {
  go.forEach((e) => e(...$s.get(e))), go = [];
}
function Ds(e, ...n) {
  $s.set(e, n), !go.includes(e) && go.push(e) === 1 && requestAnimationFrame(Lc);
}
function Vt(e, n) {
  let { target: r } = e;
  for (; r; ) {
    if (r.dataset && r.dataset[n] !== void 0)
      return !0;
    r = r.parentElement;
  }
  return !1;
}
function Zn(e) {
  return e.composedPath()[0] || null;
}
function wr(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function Vn(e) {
  if (e != null)
    return typeof e == "number" ? `${e}px` : e.endsWith("px") ? e : `${e}px`;
}
function St(e, n) {
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
const La = {
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
}, er = "^\\s*", tr = "\\s*$", bn = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Cn = "([0-9A-Fa-f])", yn = "([0-9A-Fa-f]{2})", Nc = new RegExp(`${er}rgb\\s*\\(${bn},${bn},${bn}\\)${tr}`), Hc = new RegExp(`${er}rgba\\s*\\(${bn},${bn},${bn},${bn}\\)${tr}`), jc = new RegExp(`${er}#${Cn}${Cn}${Cn}${tr}`), Wc = new RegExp(`${er}#${yn}${yn}${yn}${tr}`), Vc = new RegExp(`${er}#${Cn}${Cn}${Cn}${Cn}${tr}`), qc = new RegExp(`${er}#${yn}${yn}${yn}${yn}${tr}`);
function dt(e) {
  return parseInt(e, 16);
}
function An(e) {
  try {
    let n;
    if (n = Wc.exec(e))
      return [dt(n[1]), dt(n[2]), dt(n[3]), 1];
    if (n = Nc.exec(e))
      return [rt(n[1]), rt(n[5]), rt(n[9]), 1];
    if (n = Hc.exec(e))
      return [
        rt(n[1]),
        rt(n[5]),
        rt(n[9]),
        vr(n[13])
      ];
    if (n = jc.exec(e))
      return [
        dt(n[1] + n[1]),
        dt(n[2] + n[2]),
        dt(n[3] + n[3]),
        1
      ];
    if (n = qc.exec(e))
      return [
        dt(n[1]),
        dt(n[2]),
        dt(n[3]),
        vr(dt(n[4]) / 255)
      ];
    if (n = Vc.exec(e))
      return [
        dt(n[1] + n[1]),
        dt(n[2] + n[2]),
        dt(n[3] + n[3]),
        vr(dt(n[4] + n[4]) / 255)
      ];
    if (e in La)
      return An(La[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (n) {
    throw n;
  }
}
function Kc(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function yi(e, n, r, o) {
  return `rgba(${rt(e)}, ${rt(n)}, ${rt(r)}, ${Kc(o)})`;
}
function Qo(e, n, r, o, i) {
  return rt((e * n * (1 - o) + r * o) / i);
}
function vt(e, n) {
  Array.isArray(e) || (e = An(e)), Array.isArray(n) || (n = An(n));
  const r = e[3], o = n[3], i = vr(r + o - r * o);
  return yi(Qo(e[0], r, n[0], o, i), Qo(e[1], r, n[1], o, i), Qo(e[2], r, n[2], o, i), i);
}
function be(e, n) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : An(e);
  return n.alpha ? yi(r, o, i, n.alpha) : yi(r, o, i, a);
}
function Xr(e, n) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : An(e), { lightness: l = 1, alpha: s = 1 } = n;
  return Uc([r * l, o * l, i * l, a * s]);
}
function vr(e) {
  const n = Math.round(Number(e) * 100) / 100;
  return n > 1 ? 1 : n < 0 ? 0 : n;
}
function rt(e) {
  const n = Math.round(Number(e));
  return n > 255 ? 255 : n < 0 ? 0 : n;
}
function Uc(e) {
  const [n, r, o] = e;
  return 3 in e ? `rgba(${rt(n)}, ${rt(r)}, ${rt(o)}, ${vr(e[3])})` : `rgba(${rt(n)}, ${rt(r)}, ${rt(o)}, 1)`;
}
function ln(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function co(e) {
  return e.composedPath()[0];
}
const Gc = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Xc(e, n, r) {
  if (e === "mousemoveoutside") {
    const o = (i) => {
      n.contains(co(i)) || r(i);
    };
    return {
      mousemove: o,
      touchstart: o
    };
  } else if (e === "clickoutside") {
    let o = !1;
    const i = (l) => {
      o = !n.contains(co(l));
    }, a = (l) => {
      o && (n.contains(co(l)) || r(l));
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
function Es(e, n, r) {
  const o = Gc[e];
  let i = o.get(n);
  i === void 0 && o.set(n, i = /* @__PURE__ */ new WeakMap());
  let a = i.get(r);
  return a === void 0 && i.set(r, a = Xc(e, n, r)), a;
}
function Yc(e, n, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Es(e, n, r);
    return Object.keys(i).forEach((a) => {
      Le(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function Zc(e, n, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Es(e, n, r);
    return Object.keys(i).forEach((a) => {
      Ee(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function Jc() {
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
  function i(C, P, I) {
    const _ = C[P];
    return C[P] = function() {
      return I.apply(C, arguments), _.apply(C, arguments);
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
  function p() {
    const C = function(P) {
      const { type: I, eventPhase: _, bubbles: K } = P, H = co(P);
      if (_ === 2)
        return;
      const t = _ === 1 ? "capture" : "bubble";
      let F = H;
      const $ = [];
      for (; F === null && (F = window), $.push(F), F !== window; )
        F = F.parentNode || null;
      const L = c.capture[I], R = c.bubble[I];
      if (i(P, "stopPropagation", r), i(P, "stopImmediatePropagation", o), d(P, u), t === "capture") {
        if (L === void 0)
          return;
        for (let V = $.length - 1; V >= 0 && !e.has(P); --V) {
          const Q = $[V], Z = L.get(Q);
          if (Z !== void 0) {
            l.set(P, Q);
            for (const oe of Z) {
              if (n.has(P))
                break;
              oe(P);
            }
          }
          if (V === 0 && !K && R !== void 0) {
            const oe = R.get(Q);
            if (oe !== void 0)
              for (const W of oe) {
                if (n.has(P))
                  break;
                W(P);
              }
          }
        }
      } else if (t === "bubble") {
        if (R === void 0)
          return;
        for (let V = 0; V < $.length && !e.has(P); ++V) {
          const Q = $[V], Z = R.get(Q);
          if (Z !== void 0) {
            l.set(P, Q);
            for (const oe of Z) {
              if (n.has(P))
                break;
              oe(P);
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
      const { type: I, eventPhase: _ } = P;
      if (_ !== 2)
        return;
      const K = f[I];
      K !== void 0 && K.forEach((H) => H(P));
    };
    return C.displayName = "evtdUnifiedWindowEventHandler", C;
  }
  const v = p(), g = m();
  function b(C, P) {
    const I = c[C];
    return I[P] === void 0 && (I[P] = /* @__PURE__ */ new Map(), window.addEventListener(P, v, C === "capture")), I[P];
  }
  function x(C) {
    return f[C] === void 0 && (f[C] = /* @__PURE__ */ new Set(), window.addEventListener(C, g)), f[C];
  }
  function w(C, P) {
    let I = C.get(P);
    return I === void 0 && C.set(P, I = /* @__PURE__ */ new Set()), I;
  }
  function A(C, P, I, _) {
    const K = c[P][I];
    if (K !== void 0) {
      const H = K.get(C);
      if (H !== void 0 && H.has(_))
        return !0;
    }
    return !1;
  }
  function y(C, P) {
    const I = f[C];
    return !!(I !== void 0 && I.has(P));
  }
  function S(C, P, I, _) {
    let K;
    if (typeof _ == "object" && _.once === !0 ? K = (L) => {
      T(C, P, K, _), I(L);
    } : K = I, Yc(C, P, K, _))
      return;
    const t = _ === !0 || typeof _ == "object" && _.capture === !0 ? "capture" : "bubble", F = b(t, C), $ = w(F, P);
    if ($.has(K) || $.add(K), P === window) {
      const L = x(C);
      L.has(K) || L.add(K);
    }
  }
  function T(C, P, I, _) {
    if (Zc(C, P, I, _))
      return;
    const H = _ === !0 || typeof _ == "object" && _.capture === !0, t = H ? "capture" : "bubble", F = b(t, C), $ = w(F, P);
    if (P === window && !A(P, H ? "bubble" : "capture", C, I) && y(C, I)) {
      const R = f[C];
      R.delete(I), R.size === 0 && (window.removeEventListener(C, g), f[C] = void 0);
    }
    $.has(I) && $.delete(I), $.size === 0 && F.delete(P), F.size === 0 && (window.removeEventListener(C, v, t === "capture"), c[t][C] = void 0);
  }
  return {
    on: S,
    off: T
  };
}
const { on: Le, off: Ee } = Jc();
function zs(e) {
  const n = M(!!e.value);
  if (n.value)
    return rn(n);
  const r = Pe(e, (o) => {
    o && (n.value = !0, r());
  });
  return rn(n);
}
function qe(e) {
  const n = O(e), r = M(n.value);
  return Pe(n, (o) => {
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
function Ji() {
  return Rr() !== null;
}
const Qi = typeof window < "u";
let qn, pr;
const Qc = () => {
  var e, n;
  qn = Qi ? (n = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || n === void 0 ? void 0 : n.ready : void 0, pr = !1, qn !== void 0 ? qn.then(() => {
    pr = !0;
  }) : pr = !0;
};
Qc();
function ef(e) {
  if (pr)
    return;
  let n = !1;
  Qe(() => {
    pr || qn == null || qn.then(() => {
      n || e();
    });
  }), Ye(() => {
    n = !0;
  });
}
const dr = M(null);
function Na(e) {
  if (e.clientX > 0 || e.clientY > 0)
    dr.value = {
      x: e.clientX,
      y: e.clientY
    };
  else {
    const { target: n } = e;
    if (n instanceof Element) {
      const { left: r, top: o, width: i, height: a } = n.getBoundingClientRect();
      r > 0 || o > 0 ? dr.value = {
        x: r + i / 2,
        y: o + a / 2
      } : dr.value = { x: 0, y: 0 };
    } else
      dr.value = null;
  }
}
let Yr = 0, Ha = !0;
function xo() {
  if (!Qi)
    return rn(M(null));
  Yr === 0 && Le("click", document, Na, !0);
  const e = () => {
    Yr += 1;
  };
  return Ha && (Ha = Ji()) ? ($n(e), Ye(() => {
    Yr -= 1, Yr === 0 && Ee("click", document, Na, !0);
  })) : e(), rn(dr);
}
const tf = M(void 0);
let Zr = 0;
function ja() {
  tf.value = Date.now();
}
let Wa = !0;
function mo(e) {
  if (!Qi)
    return rn(M(!1));
  const n = M(!1);
  let r = null;
  function o() {
    r !== null && window.clearTimeout(r);
  }
  function i() {
    o(), n.value = !0, r = window.setTimeout(() => {
      n.value = !1;
    }, e);
  }
  Zr === 0 && Le("click", window, ja, !0);
  const a = () => {
    Zr += 1, Le("click", window, i, !0);
  };
  return Wa && (Wa = Ji()) ? ($n(a), Ye(() => {
    Zr -= 1, Zr === 0 && Ee("click", window, ja, !0), Ee("click", window, i, !0), o();
  })) : a(), rn(n);
}
function Jn(e, n) {
  return Pe(e, (r) => {
    r !== void 0 && (n.value = r);
  }), O(() => e.value === void 0 ? n.value : e.value);
}
function nr() {
  const e = M(!1);
  return Qe(() => {
    e.value = !0;
  }), rn(e);
}
function ea(e, n) {
  return O(() => {
    for (const r of n)
      if (e[r] !== void 0)
        return e[r];
    return e[n[n.length - 1]];
  });
}
const nf = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function rf() {
  return nf;
}
function of(e = {}, n) {
  const r = Or({
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
    (n === void 0 || n.value) && (Le("keydown", document, a), Le("keyup", document, l)), n !== void 0 && Pe(n, (u) => {
      u ? (Le("keydown", document, a), Le("keyup", document, l)) : (Ee("keydown", document, a), Ee("keyup", document, l));
    });
  };
  return Ji() ? ($n(s), Ye(() => {
    (n === void 0 || n.value) && (Ee("keydown", document, a), Ee("keyup", document, l));
  })) : s(), rn(r);
}
const ta = "n-internal-select-menu", ks = "n-internal-select-menu-body", ko = "n-drawer-body", To = "n-modal-body", af = "n-modal-provider", Ts = "n-modal", Mr = "n-popover-body", Rs = "__disabled__";
function Kt(e) {
  const n = he(To, null), r = he(ko, null), o = he(Mr, null), i = he(ks, null), a = M();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const l = () => {
      a.value = document.fullscreenElement;
    };
    Qe(() => {
      Le("fullscreenchange", document, l);
    }), Ye(() => {
      Ee("fullscreenchange", document, l);
    });
  }
  return qe(() => {
    var l;
    const {
      to: s
    } = e;
    return s !== void 0 ? s === !1 ? Rs : s === !0 ? a.value || "body" : s : n != null && n.value ? (l = n.value.$el) !== null && l !== void 0 ? l : n.value : r != null && r.value ? r.value : o != null && o.value ? o.value : i != null && i.value ? i.value : s ?? (a.value || "body");
  });
}
Kt.tdkey = Rs;
Kt.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function lf(e, n, r) {
  var o;
  const i = he(e, null);
  if (i === null) return;
  const a = (o = Rr()) === null || o === void 0 ? void 0 : o.proxy;
  Pe(r, l), l(r.value), Ye(() => {
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
function sf(e, n, r) {
  const o = M(e.value);
  let i = null;
  return Pe(e, (a) => {
    i !== null && window.clearTimeout(i), a === !0 ? r && !r.value ? o.value = !0 : i = window.setTimeout(() => {
      o.value = !0;
    }, n) : o.value = !1;
  }), o;
}
const rr = typeof document < "u" && typeof window < "u", na = M(!1);
function Va() {
  na.value = !0;
}
function qa() {
  na.value = !1;
}
let lr = 0;
function uf() {
  return rr && ($n(() => {
    lr || (window.addEventListener("compositionstart", Va), window.addEventListener("compositionend", qa)), lr++;
  }), Ye(() => {
    lr <= 1 ? (window.removeEventListener("compositionstart", Va), window.removeEventListener("compositionend", qa), lr = 0) : lr--;
  })), na;
}
let Ln = 0, Ka = "", Ua = "", Ga = "", Xa = "";
const Ya = M("0px");
function df(e) {
  if (typeof document > "u") return;
  const n = document.documentElement;
  let r, o = !1;
  const i = () => {
    n.style.marginRight = Ka, n.style.overflow = Ua, n.style.overflowX = Ga, n.style.overflowY = Xa, Ya.value = "0px";
  };
  Qe(() => {
    r = Pe(e, (a) => {
      if (a) {
        if (!Ln) {
          const l = window.innerWidth - n.offsetWidth;
          l > 0 && (Ka = n.style.marginRight, n.style.marginRight = `${l}px`, Ya.value = `${l}px`), Ua = n.style.overflow, Ga = n.style.overflowX, Xa = n.style.overflowY, n.style.overflow = "hidden", n.style.overflowX = "hidden", n.style.overflowY = "hidden";
        }
        o = !0, Ln++;
      } else
        Ln--, Ln || i(), o = !1;
    }, {
      immediate: !0
    });
  }), Ye(() => {
    r == null || r(), o && (Ln--, Ln || i(), o = !1);
  });
}
function cf(e) {
  const n = {
    isDeactivated: !1
  };
  let r = !1;
  return fs(() => {
    if (n.isDeactivated = !1, !r) {
      r = !0;
      return;
    }
    e();
  }), hs(() => {
    n.isDeactivated = !0, r || (r = !0);
  }), n;
}
function wi(e, n, r = "default") {
  const o = n[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  return o();
}
function Bi(e, n = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(on(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        Bi(o, n, r);
        return;
      }
      if (o.type === et) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && Bi(o.children, n, r);
      } else o.type !== Xi && r.push(o);
    }
  }), r;
}
function Za(e, n, r = "default") {
  const o = n[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  const i = Bi(o());
  if (i.length === 1)
    return i[0];
  throw new Error(`[vueuc/${e}]: slot[${r}] should have exactly one child.`);
}
let Qt = null;
function Os() {
  if (Qt === null && (Qt = document.getElementById("v-binder-view-measurer"), Qt === null)) {
    Qt = document.createElement("div"), Qt.id = "v-binder-view-measurer";
    const { style: e } = Qt;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(Qt);
  }
  return Qt.getBoundingClientRect();
}
function ff(e, n) {
  const r = Os();
  return {
    top: n,
    left: e,
    height: 0,
    width: 0,
    right: r.width - e,
    bottom: r.height - n
  };
}
function ei(e) {
  const n = e.getBoundingClientRect(), r = Os();
  return {
    left: n.left - r.left,
    top: n.top - r.top,
    bottom: r.height + r.top - n.bottom,
    right: r.width + r.left - n.right,
    width: n.width,
    height: n.height
  };
}
function hf(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Ms(e) {
  if (e === null)
    return null;
  const n = hf(e);
  if (n === null)
    return null;
  if (n.nodeType === 9)
    return document;
  if (n.nodeType === 1) {
    const { overflow: r, overflowX: o, overflowY: i } = getComputedStyle(n);
    if (/(auto|scroll|overlay)/.test(r + i + o))
      return n;
  }
  return Ms(n);
}
const ra = J({
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
    me("VBinder", (n = Rr()) === null || n === void 0 ? void 0 : n.proxy);
    const r = he("VBinder", null), o = M(null), i = (x) => {
      o.value = x, r && e.syncTargetWithParent && r.setTargetRef(x);
    };
    let a = [];
    const l = () => {
      let x = o.value;
      for (; x = Ms(x), x !== null; )
        a.push(x);
      for (const w of a)
        Le("scroll", w, f, !0);
    }, s = () => {
      for (const x of a)
        Ee("scroll", x, f, !0);
      a = [];
    }, u = /* @__PURE__ */ new Set(), d = (x) => {
      u.size === 0 && l(), u.has(x) || u.add(x);
    }, c = (x) => {
      u.has(x) && u.delete(x), u.size === 0 && s();
    }, f = () => {
      Ds(p);
    }, p = () => {
      u.forEach((x) => x());
    }, m = /* @__PURE__ */ new Set(), v = (x) => {
      m.size === 0 && Le("resize", window, b), m.has(x) || m.add(x);
    }, g = (x) => {
      m.has(x) && m.delete(x), m.size === 0 && Ee("resize", window, b);
    }, b = () => {
      m.forEach((x) => x());
    };
    return Ye(() => {
      Ee("resize", window, b), s();
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
    return wi("binder", this.$slots);
  }
}), oa = J({
  name: "Target",
  setup() {
    const { setTargetRef: e, syncTarget: n } = he("VBinder");
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
    return e ? kt(Za("follower", this.$slots), [
      [n]
    ]) : Za("follower", this.$slots);
  }
}), Nn = "@@mmoContext", vf = {
  mounted(e, { value: n }) {
    e[Nn] = {
      handler: void 0
    }, typeof n == "function" && (e[Nn].handler = n, Le("mousemoveoutside", e, n));
  },
  updated(e, { value: n }) {
    const r = e[Nn];
    typeof n == "function" ? r.handler ? r.handler !== n && (Ee("mousemoveoutside", e, r.handler), r.handler = n, Le("mousemoveoutside", e, n)) : (e[Nn].handler = n, Le("mousemoveoutside", e, n)) : r.handler && (Ee("mousemoveoutside", e, r.handler), r.handler = void 0);
  },
  unmounted(e) {
    const { handler: n } = e[Nn];
    n && Ee("mousemoveoutside", e, n), e[Nn].handler = void 0;
  }
}, Hn = "@@coContext", Br = {
  mounted(e, { value: n, modifiers: r }) {
    e[Hn] = {
      handler: void 0
    }, typeof n == "function" && (e[Hn].handler = n, Le("clickoutside", e, n, {
      capture: r.capture
    }));
  },
  updated(e, { value: n, modifiers: r }) {
    const o = e[Hn];
    typeof n == "function" ? o.handler ? o.handler !== n && (Ee("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = n, Le("clickoutside", e, n, {
      capture: r.capture
    })) : (e[Hn].handler = n, Le("clickoutside", e, n, {
      capture: r.capture
    })) : o.handler && (Ee("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = void 0);
  },
  unmounted(e, { modifiers: n }) {
    const { handler: r } = e[Hn];
    r && Ee("clickoutside", e, r, {
      capture: n.capture
    }), e[Hn].handler = void 0;
  }
};
function pf(e, n) {
  console.error(`[vdirs/${e}]: ${n}`);
}
class gf {
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
    o.has(n) ? o.delete(n) : r === void 0 && pf("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const ti = new gf(), jn = "@@ziContext", ia = {
  mounted(e, n) {
    const { value: r = {} } = n, { zIndex: o, enabled: i } = r;
    e[jn] = {
      enabled: !!i,
      initialized: !1
    }, i && (ti.ensureZIndex(e, o), e[jn].initialized = !0);
  },
  updated(e, n) {
    const { value: r = {} } = n, { zIndex: o, enabled: i } = r, a = e[jn].enabled;
    i && !a && (ti.ensureZIndex(e, o), e[jn].initialized = !0), e[jn].enabled = !!i;
  },
  unmounted(e, n) {
    if (!e[jn].initialized)
      return;
    const { value: r = {} } = n, { zIndex: o } = r;
    ti.unregister(e, o);
  }
}, xf = "@css-render/vue3-ssr";
function mf(e, n) {
  return `<style cssr-id="${e}">
${n}
</style>`;
}
function bf(e, n, r) {
  const { styles: o, ids: i } = r;
  i.has(e) || o !== null && (i.add(e), o.push(mf(e, n)));
}
const Cf = typeof document < "u";
function Dn() {
  if (Cf)
    return;
  const e = he(xf, null);
  if (e !== null)
    return {
      adapter: (n, r) => bf(n, r, e),
      context: e
    };
}
function Ja(e, n) {
  console.error(`[vueuc/${e}]: ${n}`);
}
const { c: nn } = Bs(), aa = "vueuc-style";
function Qa(e) {
  return e & -e;
}
class Is {
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
      i[n] += r, n += Qa(n);
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
      a += r[n], n -= Qa(n);
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
function el(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const _s = J({
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
      showTeleport: zs(se(e, "show")),
      mergedTo: O(() => {
        const { to: n } = e;
        return n ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? wi("lazy-teleport", this.$slots) : h(Eo, {
      disabled: this.disabled,
      to: this.mergedTo
    }, wi("lazy-teleport", this.$slots)) : null;
  }
}), Jr = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, tl = {
  start: "end",
  center: "center",
  end: "start"
}, ni = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, yf = {
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
}, wf = {
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
}, Bf = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, nl = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, rl = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function Sf(e, n, r, o, i, a) {
  if (!i || a)
    return { placement: e, top: 0, left: 0 };
  const [l, s] = e.split("-");
  let u = s ?? "center", d = {
    top: 0,
    left: 0
  };
  const c = (m, v, g) => {
    let b = 0, x = 0;
    const w = r[m] - n[v] - n[m];
    return w > 0 && o && (g ? x = nl[v] ? w : -w : b = nl[v] ? w : -w), {
      left: b,
      top: x
    };
  }, f = l === "left" || l === "right";
  if (u !== "center") {
    const m = Bf[e], v = Jr[m], g = ni[m];
    if (r[g] > n[g]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        n[m] + n[g] < r[g]
      ) {
        const b = (r[g] - n[g]) / 2;
        n[m] < b || n[v] < b ? n[m] < n[v] ? (u = tl[s], d = c(g, v, f)) : d = c(g, m, f) : u = "center";
      }
    } else r[g] < n[g] && n[v] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    n[m] > n[v] && (u = tl[s]);
  } else {
    const m = l === "bottom" || l === "top" ? "left" : "top", v = Jr[m], g = ni[m], b = (r[g] - n[g]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (n[m] < b || n[v] < b) && (n[m] > n[v] ? (u = rl[m], d = c(g, m, f)) : (u = rl[v], d = c(g, v, f)));
  }
  let p = l;
  return (
    // space is not enough
    n[l] < r[ni[l]] && // opposite position's space is larger
    n[l] < n[Jr[l]] && (p = Jr[l]), {
      placement: u !== "center" ? `${p}-${u}` : p,
      left: d.left,
      top: d.top
    }
  );
}
function Af(e, n) {
  return n ? wf[e] : yf[e];
}
function Ff(e, n, r, o, i, a) {
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
const Pf = nn([
  nn(".v-binder-follower-container", {
    position: "absolute",
    left: "0",
    right: "0",
    top: "0",
    height: "0",
    pointerEvents: "none",
    zIndex: "auto"
  }),
  nn(".v-binder-follower-content", {
    position: "absolute",
    zIndex: "auto"
  }, [
    nn("> *", {
      pointerEvents: "all"
    })
  ])
]), la = J({
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
    const n = he("VBinder"), r = qe(() => e.enabled !== void 0 ? e.enabled : e.show), o = M(null), i = M(null), a = () => {
      const { syncTrigger: p } = e;
      p.includes("scroll") && n.addScrollListener(u), p.includes("resize") && n.addResizeListener(u);
    }, l = () => {
      n.removeScrollListener(u), n.removeResizeListener(u);
    };
    Qe(() => {
      r.value && (u(), a());
    });
    const s = Dn();
    Pf.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: aa,
      ssr: s
    }), Ye(() => {
      l();
    }), ef(() => {
      r.value && u();
    });
    const u = () => {
      if (!r.value)
        return;
      const p = o.value;
      if (p === null)
        return;
      const m = n.targetRef, { x: v, y: g, overlap: b } = e, x = v !== void 0 && g !== void 0 ? ff(v, g) : ei(m);
      p.style.setProperty("--v-target-width", `${Math.round(x.width)}px`), p.style.setProperty("--v-target-height", `${Math.round(x.height)}px`);
      const { width: w, minWidth: A, placement: y, internalShift: S, flip: T } = e;
      p.setAttribute("v-placement", y), b ? p.setAttribute("v-overlap", "") : p.removeAttribute("v-overlap");
      const { style: C } = p;
      w === "target" ? C.width = `${x.width}px` : w !== void 0 ? C.width = w : C.width = "", A === "target" ? C.minWidth = `${x.width}px` : A !== void 0 ? C.minWidth = A : C.minWidth = "";
      const P = ei(p), I = ei(i.value), { left: _, top: K, placement: H } = Sf(y, x, P, S, T, b), t = Af(H, b), { left: F, top: $, transform: L } = Ff(H, I, x, K, _, b);
      p.setAttribute("v-placement", H), p.style.setProperty("--v-offset-left", `${Math.round(_)}px`), p.style.setProperty("--v-offset-top", `${Math.round(K)}px`), p.style.transform = `translateX(${F}) translateY(${$}) ${L}`, p.style.setProperty("--v-transform-origin", t), p.style.transformOrigin = t;
    };
    Pe(r, (p) => {
      p ? (a(), d()) : l();
    });
    const d = () => {
      Je().then(u).catch((p) => console.error(p));
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
      Pe(se(e, p), u);
    }), ["teleportDisabled"].forEach((p) => {
      Pe(se(e, p), d);
    }), Pe(se(e, "syncTrigger"), (p) => {
      p.includes("resize") ? n.addResizeListener(u) : n.removeResizeListener(u), p.includes("scroll") ? n.addScrollListener(u) : n.removeScrollListener(u);
    });
    const c = nr(), f = qe(() => {
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
    return h(_s, {
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
            ia,
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
var Bn = [], $f = function() {
  return Bn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Df = function() {
  return Bn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, ol = "ResizeObserver loop completed with undelivered notifications.", Ef = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: ol
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = ol), window.dispatchEvent(e);
}, Sr;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Sr || (Sr = {}));
var Sn = function(e) {
  return Object.freeze(e);
}, zf = /* @__PURE__ */ function() {
  function e(n, r) {
    this.inlineSize = n, this.blockSize = r, Sn(this);
  }
  return e;
}(), Ls = function() {
  function e(n, r, o, i) {
    return this.x = n, this.y = r, this.width = o, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Sn(this);
  }
  return e.prototype.toJSON = function() {
    var n = this, r = n.x, o = n.y, i = n.top, a = n.right, l = n.bottom, s = n.left, u = n.width, d = n.height;
    return { x: r, y: o, top: i, right: a, bottom: l, left: s, width: u, height: d };
  }, e.fromRect = function(n) {
    return new e(n.x, n.y, n.width, n.height);
  }, e;
}(), sa = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, Ns = function(e) {
  if (sa(e)) {
    var n = e.getBBox(), r = n.width, o = n.height;
    return !r && !o;
  }
  var i = e, a = i.offsetWidth, l = i.offsetHeight;
  return !(a || l || e.getClientRects().length);
}, il = function(e) {
  var n;
  if (e instanceof Element)
    return !0;
  var r = (n = e == null ? void 0 : e.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
  return !!(r && e instanceof r.Element);
}, kf = function(e) {
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
}, gr = typeof window < "u" ? window : {}, Qr = /* @__PURE__ */ new WeakMap(), al = /auto|scroll/, Tf = /^tb|vertical/, Rf = /msie|trident/i.test(gr.navigator && gr.navigator.userAgent), Ft = function(e) {
  return parseFloat(e || "0");
}, Kn = function(e, n, r) {
  return e === void 0 && (e = 0), n === void 0 && (n = 0), r === void 0 && (r = !1), new zf((r ? n : e) || 0, (r ? e : n) || 0);
}, ll = Sn({
  devicePixelContentBoxSize: Kn(),
  borderBoxSize: Kn(),
  contentBoxSize: Kn(),
  contentRect: new Ls(0, 0, 0, 0)
}), Hs = function(e, n) {
  if (n === void 0 && (n = !1), Qr.has(e) && !n)
    return Qr.get(e);
  if (Ns(e))
    return Qr.set(e, ll), ll;
  var r = getComputedStyle(e), o = sa(e) && e.ownerSVGElement && e.getBBox(), i = !Rf && r.boxSizing === "border-box", a = Tf.test(r.writingMode || ""), l = !o && al.test(r.overflowY || ""), s = !o && al.test(r.overflowX || ""), u = o ? 0 : Ft(r.paddingTop), d = o ? 0 : Ft(r.paddingRight), c = o ? 0 : Ft(r.paddingBottom), f = o ? 0 : Ft(r.paddingLeft), p = o ? 0 : Ft(r.borderTopWidth), m = o ? 0 : Ft(r.borderRightWidth), v = o ? 0 : Ft(r.borderBottomWidth), g = o ? 0 : Ft(r.borderLeftWidth), b = f + d, x = u + c, w = g + m, A = p + v, y = s ? e.offsetHeight - A - e.clientHeight : 0, S = l ? e.offsetWidth - w - e.clientWidth : 0, T = i ? b + w : 0, C = i ? x + A : 0, P = o ? o.width : Ft(r.width) - T - S, I = o ? o.height : Ft(r.height) - C - y, _ = P + b + S + w, K = I + x + y + A, H = Sn({
    devicePixelContentBoxSize: Kn(Math.round(P * devicePixelRatio), Math.round(I * devicePixelRatio), a),
    borderBoxSize: Kn(_, K, a),
    contentBoxSize: Kn(P, I, a),
    contentRect: new Ls(f, u, P, I)
  });
  return Qr.set(e, H), H;
}, js = function(e, n, r) {
  var o = Hs(e, r), i = o.borderBoxSize, a = o.contentBoxSize, l = o.devicePixelContentBoxSize;
  switch (n) {
    case Sr.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case Sr.BORDER_BOX:
      return i;
    default:
      return a;
  }
}, Of = /* @__PURE__ */ function() {
  function e(n) {
    var r = Hs(n);
    this.target = n, this.contentRect = r.contentRect, this.borderBoxSize = Sn([r.borderBoxSize]), this.contentBoxSize = Sn([r.contentBoxSize]), this.devicePixelContentBoxSize = Sn([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Ws = function(e) {
  if (Ns(e))
    return 1 / 0;
  for (var n = 0, r = e.parentNode; r; )
    n += 1, r = r.parentNode;
  return n;
}, Mf = function() {
  var e = 1 / 0, n = [];
  Bn.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(d) {
        var c = new Of(d.target), f = Ws(d.target);
        s.push(c), d.lastReportedSize = js(d.target, d.observedBox), f < e && (e = f);
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
}, sl = function(e) {
  Bn.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(i) {
      i.isActive() && (Ws(i.target) > e ? r.activeTargets.push(i) : r.skippedTargets.push(i));
    });
  });
}, If = function() {
  var e = 0;
  for (sl(e); $f(); )
    e = Mf(), sl(e);
  return Df() && Ef(), e > 0;
}, ri, Vs = [], _f = function() {
  return Vs.splice(0).forEach(function(e) {
    return e();
  });
}, Lf = function(e) {
  if (!ri) {
    var n = 0, r = document.createTextNode(""), o = { characterData: !0 };
    new MutationObserver(function() {
      return _f();
    }).observe(r, o), ri = function() {
      r.textContent = "".concat(n ? n-- : n++);
    };
  }
  Vs.push(e), ri();
}, Nf = function(e) {
  Lf(function() {
    requestAnimationFrame(e);
  });
}, fo = 0, Hf = function() {
  return !!fo;
}, jf = 250, Wf = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, ul = [
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
], dl = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, oi = !1, Vf = function() {
  function e() {
    var n = this;
    this.stopped = !0, this.listener = function() {
      return n.schedule();
    };
  }
  return e.prototype.run = function(n) {
    var r = this;
    if (n === void 0 && (n = jf), !oi) {
      oi = !0;
      var o = dl(n);
      Nf(function() {
        var i = !1;
        try {
          i = If();
        } finally {
          if (oi = !1, n = o - dl(), !Hf())
            return;
          i ? r.run(1e3) : n > 0 ? r.run(n) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var n = this, r = function() {
      return n.observer && n.observer.observe(document.body, Wf);
    };
    document.body ? r() : gr.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var n = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), ul.forEach(function(r) {
      return gr.addEventListener(r, n.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var n = this;
    this.stopped || (this.observer && this.observer.disconnect(), ul.forEach(function(r) {
      return gr.removeEventListener(r, n.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Si = new Vf(), cl = function(e) {
  !fo && e > 0 && Si.start(), fo += e, !fo && Si.stop();
}, qf = function(e) {
  return !sa(e) && !kf(e) && getComputedStyle(e).display === "inline";
}, Kf = function() {
  function e(n, r) {
    this.target = n, this.observedBox = r || Sr.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var n = js(this.target, this.observedBox, !0);
    return qf(this.target) && (this.lastReportedSize = n), this.lastReportedSize.inlineSize !== n.inlineSize || this.lastReportedSize.blockSize !== n.blockSize;
  }, e;
}(), Uf = /* @__PURE__ */ function() {
  function e(n, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = n, this.callback = r;
  }
  return e;
}(), eo = /* @__PURE__ */ new WeakMap(), fl = function(e, n) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === n)
      return r;
  return -1;
}, to = function() {
  function e() {
  }
  return e.connect = function(n, r) {
    var o = new Uf(n, r);
    eo.set(n, o);
  }, e.observe = function(n, r, o) {
    var i = eo.get(n), a = i.observationTargets.length === 0;
    fl(i.observationTargets, r) < 0 && (a && Bn.push(i), i.observationTargets.push(new Kf(r, o && o.box)), cl(1), Si.schedule());
  }, e.unobserve = function(n, r) {
    var o = eo.get(n), i = fl(o.observationTargets, r), a = o.observationTargets.length === 1;
    i >= 0 && (a && Bn.splice(Bn.indexOf(o), 1), o.observationTargets.splice(i, 1), cl(-1));
  }, e.disconnect = function(n) {
    var r = this, o = eo.get(n);
    o.observationTargets.slice().forEach(function(i) {
      return r.unobserve(n, i.target);
    }), o.activeTargets.splice(0, o.activeTargets.length);
  }, e;
}(), Gf = function() {
  function e(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof n != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    to.connect(this, n);
  }
  return e.prototype.observe = function(n, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!il(n))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    to.observe(this, n, r);
  }, e.prototype.unobserve = function(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!il(n))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    to.unobserve(this, n);
  }, e.prototype.disconnect = function() {
    to.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class Xf {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || Gf)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const bo = new Xf(), Ar = J({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let n = !1;
    const r = Rr().proxy;
    function o(i) {
      const { onResize: a } = e;
      a !== void 0 && a(i);
    }
    Qe(() => {
      const i = r.$el;
      if (i === void 0) {
        Ja("resize-observer", "$el does not exist.");
        return;
      }
      if (i.nextElementSibling !== i.nextSibling && i.nodeType === 3 && i.nodeValue !== "") {
        Ja("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      i.nextElementSibling !== null && (bo.registerHandler(i.nextElementSibling, o), n = !0);
    }), Ye(() => {
      n && bo.unregisterHandler(r.$el.nextElementSibling);
    });
  },
  render() {
    return an(this.$slots, "default");
  }
});
let no;
function Yf() {
  return typeof document > "u" ? !1 : (no === void 0 && ("matchMedia" in window ? no = window.matchMedia("(pointer:coarse)").matches : no = !1), no);
}
let ii;
function hl() {
  return typeof document > "u" ? 1 : (ii === void 0 && (ii = "chrome" in window ? window.devicePixelRatio : 1), ii);
}
const qs = "VVirtualListXScroll";
function Zf({ columnsRef: e, renderColRef: n, renderItemWithColsRef: r }) {
  const o = M(0), i = M(0), a = O(() => {
    const d = e.value;
    if (d.length === 0)
      return null;
    const c = new Is(d.length, 0);
    return d.forEach((f, p) => {
      c.add(p, f.width);
    }), c;
  }), l = qe(() => {
    const d = a.value;
    return d !== null ? Math.max(d.getBound(i.value) - 1, 0) : 0;
  }), s = (d) => {
    const c = a.value;
    return c !== null ? c.sum(d) : 0;
  }, u = qe(() => {
    const d = a.value;
    return d !== null ? Math.min(d.getBound(i.value + o.value) + 1, e.value.length - 1) : 0;
  });
  return me(qs, {
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
const vl = J({
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
      he(qs)
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
}), Jf = nn(".v-vl", {
  maxHeight: "inherit",
  height: "100%",
  overflow: "auto",
  minWidth: "1px"
  // a zero width container won't be scrollable
}, [
  nn("&:not(.v-vl--show-scrollbar)", {
    scrollbarWidth: "none"
  }, [
    nn("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
      width: 0,
      height: 0,
      display: "none"
    })
  ])
]), Qf = J({
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
    const n = Dn();
    Jf.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: aa,
      ssr: n
    }), Qe(() => {
      const { defaultScrollIndex: t, defaultScrollKey: F } = e;
      t != null ? b({ index: t }) : F != null && b({ key: F });
    });
    let r = !1, o = !1;
    fs(() => {
      if (r = !1, !o) {
        o = !0;
        return;
      }
      b({ top: m.value, left: l.value });
    }), hs(() => {
      r = !0, o || (o = !0);
    });
    const i = qe(() => {
      if (e.renderCol == null && e.renderItemWithCols == null || e.columns.length === 0)
        return;
      let t = 0;
      return e.columns.forEach((F) => {
        t += F.width;
      }), t;
    }), a = O(() => {
      const t = /* @__PURE__ */ new Map(), { keyField: F } = e;
      return e.items.forEach(($, L) => {
        t.set($[F], L);
      }), t;
    }), { scrollLeftRef: l, listWidthRef: s } = Zf({
      columnsRef: se(e, "columns"),
      renderColRef: se(e, "renderCol"),
      renderItemWithColsRef: se(e, "renderItemWithCols")
    }), u = M(null), d = M(void 0), c = /* @__PURE__ */ new Map(), f = O(() => {
      const { items: t, itemSize: F, keyField: $ } = e, L = new Is(t.length, F);
      return t.forEach((R, V) => {
        const Q = R[$], Z = c.get(Q);
        Z !== void 0 && L.add(V, Z);
      }), L;
    }), p = M(0), m = M(0), v = qe(() => Math.max(f.value.getBound(m.value - wr(e.paddingTop)) - 1, 0)), g = O(() => {
      const { value: t } = d;
      if (t === void 0)
        return [];
      const { items: F, itemSize: $ } = e, L = v.value, R = Math.min(L + Math.ceil(t / $ + 1), F.length - 1), V = [];
      for (let Q = L; Q <= R; ++Q)
        V.push(F[Q]);
      return V;
    }), b = (t, F) => {
      if (typeof t == "number") {
        y(t, F, "auto");
        return;
      }
      const { left: $, top: L, index: R, key: V, position: Q, behavior: Z, debounce: oe = !0 } = t;
      if ($ !== void 0 || L !== void 0)
        y($, L, Z);
      else if (R !== void 0)
        A(R, Z, oe);
      else if (V !== void 0) {
        const W = a.value.get(V);
        W !== void 0 && A(W, Z, oe);
      } else Q === "bottom" ? y(0, Number.MAX_SAFE_INTEGER, Z) : Q === "top" && y(0, 0, Z);
    };
    let x, w = null;
    function A(t, F, $) {
      const { value: L } = f, R = L.sum(t) + wr(e.paddingTop);
      if (!$)
        u.value.scrollTo({
          left: 0,
          top: R,
          behavior: F
        });
      else {
        x = t, w !== null && window.clearTimeout(w), w = window.setTimeout(() => {
          x = void 0, w = null;
        }, 16);
        const { scrollTop: V, offsetHeight: Q } = u.value;
        if (R > V) {
          const Z = L.get(t);
          R + Z <= V + Q || u.value.scrollTo({
            left: 0,
            top: R + Z - Q,
            behavior: F
          });
        } else
          u.value.scrollTo({
            left: 0,
            top: R,
            behavior: F
          });
      }
    }
    function y(t, F, $) {
      u.value.scrollTo({
        left: t,
        top: F,
        behavior: $
      });
    }
    function S(t, F) {
      var $, L, R;
      if (r || e.ignoreItemResize || H(F.target))
        return;
      const { value: V } = f, Q = a.value.get(t), Z = V.get(Q), oe = (R = (L = ($ = F.borderBoxSize) === null || $ === void 0 ? void 0 : $[0]) === null || L === void 0 ? void 0 : L.blockSize) !== null && R !== void 0 ? R : F.contentRect.height;
      if (oe === Z)
        return;
      oe - e.itemSize === 0 ? c.delete(t) : c.set(t, oe - e.itemSize);
      const G = oe - Z;
      if (G === 0)
        return;
      V.add(Q, G);
      const re = u.value;
      if (re != null) {
        if (x === void 0) {
          const Be = V.sum(Q);
          re.scrollTop > Be && re.scrollBy(0, G);
        } else if (Q < x)
          re.scrollBy(0, G);
        else if (Q === x) {
          const Be = V.sum(Q);
          oe + Be > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          re.scrollTop + re.offsetHeight && re.scrollBy(0, G);
        }
        K();
      }
      p.value++;
    }
    const T = !Yf();
    let C = !1;
    function P(t) {
      var F;
      (F = e.onScroll) === null || F === void 0 || F.call(e, t), (!T || !C) && K();
    }
    function I(t) {
      var F;
      if ((F = e.onWheel) === null || F === void 0 || F.call(e, t), T) {
        const $ = u.value;
        if ($ != null) {
          if (t.deltaX === 0 && ($.scrollTop === 0 && t.deltaY <= 0 || $.scrollTop + $.offsetHeight >= $.scrollHeight && t.deltaY >= 0))
            return;
          t.preventDefault(), $.scrollTop += t.deltaY / hl(), $.scrollLeft += t.deltaX / hl(), K(), C = !0, Ds(() => {
            C = !1;
          });
        }
      }
    }
    function _(t) {
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
      itemsStyle: O(() => {
        const { itemResizable: t } = e, F = Vn(f.value.sum());
        return p.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: Vn(i.value),
            height: t ? "" : F,
            minHeight: t ? F : "",
            paddingTop: Vn(e.paddingTop),
            paddingBottom: Vn(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: O(() => (p.value, {
        transform: `translateY(${Vn(f.value.sum(v.value))})`
      })),
      viewportItems: g,
      listElRef: u,
      itemsElRef: M(null),
      scrollTo: b,
      handleListResize: _,
      handleListScroll: P,
      handleListWheel: I,
      handleItemResize: S
    };
  },
  render() {
    const { itemResizable: e, keyField: n, keyToIndex: r, visibleItemsTag: o } = this;
    return h(Ar, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var i, a;
        return h("div", cn(this.$attrs, {
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
                  const d = u[n], c = r.get(d), f = l != null ? h(vl, {
                    index: c,
                    item: u
                  }) : void 0, p = s != null ? h(vl, {
                    index: c,
                    item: u
                  }) : void 0, m = this.$slots.default({
                    item: u,
                    renderedCols: f,
                    renderedItemWithCols: p,
                    index: c
                  })[0];
                  return e ? h(Ar, {
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
}), Ht = "v-hidden", eh = nn("[v-hidden]", {
  display: "none!important"
}), pl = J({
  name: "Overflow",
  props: {
    getCounter: Function,
    getTail: Function,
    updateCounter: Function,
    onUpdateCount: Function,
    onUpdateOverflow: Function
  },
  setup(e, { slots: n }) {
    const r = M(null), o = M(null);
    function i(l) {
      const { value: s } = r, { getCounter: u, getTail: d } = e;
      let c;
      if (u !== void 0 ? c = u() : c = o.value, !s || !c)
        return;
      c.hasAttribute(Ht) && c.removeAttribute(Ht);
      const { children: f } = s;
      if (l.showAllItemsBeforeCalculate)
        for (const A of f)
          A.hasAttribute(Ht) && A.removeAttribute(Ht);
      const p = s.offsetWidth, m = [], v = n.tail ? d == null ? void 0 : d() : null;
      let g = v ? v.offsetWidth : 0, b = !1;
      const x = s.children.length - (n.tail ? 1 : 0);
      for (let A = 0; A < x - 1; ++A) {
        if (A < 0)
          continue;
        const y = f[A];
        if (b) {
          y.hasAttribute(Ht) || y.setAttribute(Ht, "");
          continue;
        } else y.hasAttribute(Ht) && y.removeAttribute(Ht);
        const S = y.offsetWidth;
        if (g += S, m[A] = S, g > p) {
          const { updateCounter: T } = e;
          for (let C = A; C >= 0; --C) {
            const P = x - 1 - C;
            T !== void 0 ? T(P) : c.textContent = `${P}`;
            const I = c.offsetWidth;
            if (g -= m[C], g + I <= p || C === 0) {
              b = !0, A = C - 1, v && (A === -1 ? (v.style.maxWidth = `${p - I}px`, v.style.boxSizing = "border-box") : v.style.maxWidth = "");
              const { onUpdateCount: _ } = e;
              _ && _(P);
              break;
            }
          }
        }
      }
      const { onUpdateOverflow: w } = e;
      b ? w !== void 0 && w(!0) : (w !== void 0 && w(!1), c.setAttribute(Ht, ""));
    }
    const a = Dn();
    return eh.mount({
      id: "vueuc/overflow",
      head: !0,
      anchorMetaName: aa,
      ssr: a
    }), Qe(() => i({
      showAllItemsBeforeCalculate: !1
    })), {
      selfRef: r,
      counterRef: o,
      sync: i
    };
  },
  render() {
    const { $slots: e } = this;
    return Je(() => this.sync({
      showAllItemsBeforeCalculate: !1
    })), h("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      an(e, "default"),
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
function Ks(e) {
  return e instanceof HTMLElement;
}
function Us(e) {
  for (let n = 0; n < e.childNodes.length; n++) {
    const r = e.childNodes[n];
    if (Ks(r) && (Xs(r) || Us(r)))
      return !0;
  }
  return !1;
}
function Gs(e) {
  for (let n = e.childNodes.length - 1; n >= 0; n--) {
    const r = e.childNodes[n];
    if (Ks(r) && (Xs(r) || Gs(r)))
      return !0;
  }
  return !1;
}
function Xs(e) {
  if (!th(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function th(e) {
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
let sr = [];
const Ys = J({
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
    const n = ln(), r = M(null), o = M(null);
    let i = !1, a = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function s() {
      return sr[sr.length - 1] === n;
    }
    function u(b) {
      var x;
      b.code === "Escape" && s() && ((x = e.onEsc) === null || x === void 0 || x.call(e, b));
    }
    Qe(() => {
      Pe(() => e.active, (b) => {
        b ? (f(), Le("keydown", document, u)) : (Ee("keydown", document, u), i && p());
      }, {
        immediate: !0
      });
    }), Ye(() => {
      Ee("keydown", document, u), i && p();
    });
    function d(b) {
      if (!a && s()) {
        const x = c();
        if (x === null || x.contains(Zn(b)))
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
        if (sr.push(n), e.autoFocus) {
          const { initialFocusTo: x } = e;
          x === void 0 ? m("first") : (b = el(x)) === null || b === void 0 || b.focus({ preventScroll: !0 });
        }
        i = !0, document.addEventListener("focus", d, !0);
      }
    }
    function p() {
      var b;
      if (e.disabled || (document.removeEventListener("focus", d, !0), sr = sr.filter((w) => w !== n), s()))
        return;
      const { finalFocusTo: x } = e;
      x !== void 0 ? (b = el(x)) === null || b === void 0 || b.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (a = !0, l.focus({ preventScroll: !0 }), a = !1);
    }
    function m(b) {
      if (s() && e.active) {
        const x = r.value, w = o.value;
        if (x !== null && w !== null) {
          const A = c();
          if (A == null || A === w) {
            a = !0, x.focus({ preventScroll: !0 }), a = !1;
            return;
          }
          a = !0;
          const y = b === "first" ? Us(A) : Gs(A);
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
    return h(et, null, [
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
function Zs(e, n) {
  n && (Qe(() => {
    const {
      value: r
    } = e;
    r && bo.registerHandler(r, n);
  }), Ye(() => {
    const {
      value: r
    } = e;
    r && bo.unregisterHandler(r);
  }));
}
function Co(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
const nh = /^(\d|\.)+$/, gl = /(\d|\.)+/;
function qt(e, {
  c: n = 1,
  offset: r = 0,
  attachPx: o = !0
} = {}) {
  if (typeof e == "number") {
    const i = (e + r) * n;
    return i === 0 ? "0" : `${i}px`;
  } else if (typeof e == "string")
    if (nh.test(e)) {
      const i = (Number(e) + r) * n;
      return o ? i === 0 ? "0" : `${i}px` : `${i}`;
    } else {
      const i = gl.exec(e);
      return i ? e.replace(gl, String((Number(i[0]) + r) * n)) : e;
    }
  return e;
}
function xl(e) {
  const {
    left: n,
    right: r,
    top: o,
    bottom: i
  } = St(e);
  return `${o} ${r} ${i} ${n}`;
}
let ai;
function rh() {
  return ai === void 0 && (ai = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), ai;
}
const Js = /* @__PURE__ */ new WeakSet();
function oh(e) {
  Js.add(e);
}
function ih(e) {
  return !Js.has(e);
}
function ml(e) {
  switch (typeof e) {
    case "string":
      return e || void 0;
    case "number":
      return String(e);
    default:
      return;
  }
}
const bl = /* @__PURE__ */ new Set();
function at(e, n) {
  const r = `[naive/${e}]: ${n}`;
  bl.has(r) || (bl.add(r), console.error(r));
}
function Tt(e, n) {
  console.error(`[naive/${e}]: ${n}`);
}
function fn(e, n) {
  throw new Error(`[naive/${e}]: ${n}`);
}
function pe(e, ...n) {
  if (Array.isArray(e))
    e.forEach((r) => pe(r, ...n));
  else
    return e(...n);
}
function ah(e) {
  return (n) => {
    n ? e.value = n.$el : e.value = null;
  };
}
function Ai(e, n = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(on(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        Ai(o, n, r);
        return;
      }
      if (o.type === et) {
        if (o.children === null) return;
        Array.isArray(o.children) && Ai(o.children, n, r);
      } else {
        if (o.type === Xi && n) return;
        r.push(o);
      }
    }
  }), r;
}
function Fi(e, n = "default", r = void 0) {
  const o = e[n];
  if (!o)
    return Tt("getFirstSlotVNode", `slot[${n}] is empty`), null;
  const i = Ai(o(r));
  return i.length === 1 ? i[0] : (Tt("getFirstSlotVNode", `slot[${n}] should have exactly one child`), null);
}
function sn(e, n = [], r) {
  const o = {};
  return n.forEach((i) => {
    o[i] = e[i];
  }), Object.assign(o, r);
}
function Fn(e) {
  return Object.keys(e);
}
function li(e) {
  const n = e.filter((r) => r !== void 0);
  if (n.length !== 0)
    return n.length === 1 ? n[0] : (r) => {
      e.forEach((o) => {
        o && o(r);
      });
    };
}
function Ir(e, n = [], r) {
  const o = {};
  return Object.getOwnPropertyNames(e).forEach((a) => {
    n.includes(a) || (o[a] = e[a]);
  }), Object.assign(o, r);
}
function je(e, ...n) {
  return typeof e == "function" ? e(...n) : typeof e == "string" ? on(e) : typeof e == "number" ? on(String(e)) : null;
}
function bt(e) {
  return e.some((n) => ic(n) ? !(n.type === Xi || n.type === et && !bt(n.children)) : !0) ? e : null;
}
function Et(e, n) {
  return e && bt(e()) || n();
}
function Pi(e, n, r) {
  return e && bt(e(n)) || r(n);
}
function _e(e, n) {
  const r = e && bt(e());
  return n(r || null);
}
function lh(e, n, r) {
  const o = e && bt(e(n));
  return r(o || null);
}
function $i(e) {
  return !(e && bt(e()));
}
const Di = J({
  render() {
    var e, n;
    return (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e);
  }
}), Ut = "n-config-provider", Ei = "n";
function Ae(e = {}, n = {
  defaultBordered: !0
}) {
  const r = he(Ut, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: r == null ? void 0 : r.inlineThemeDisabled,
    mergedRtlRef: r == null ? void 0 : r.mergedRtlRef,
    mergedComponentPropsRef: r == null ? void 0 : r.mergedComponentPropsRef,
    mergedBreakpointsRef: r == null ? void 0 : r.mergedBreakpointsRef,
    mergedBorderedRef: O(() => {
      var o, i;
      const {
        bordered: a
      } = e;
      return a !== void 0 ? a : (i = (o = r == null ? void 0 : r.mergedBorderedRef.value) !== null && o !== void 0 ? o : n.defaultBordered) !== null && i !== void 0 ? i : !0;
    }),
    mergedClsPrefixRef: r ? r.mergedClsPrefixRef : ac(Ei),
    namespaceRef: O(() => r == null ? void 0 : r.mergedNamespaceRef.value)
  };
}
function Ne(e, n, r, o) {
  r || fn("useThemeClass", "cssVarsRef is not passed");
  const i = he(Ut, null), a = i == null ? void 0 : i.mergedThemeHashRef, l = i == null ? void 0 : i.styleMountTarget, s = M(""), u = Dn();
  let d;
  const c = `__${e}`, f = () => {
    let p = c;
    const m = n ? n.value : void 0, v = a == null ? void 0 : a.value;
    v && (p += `-${v}`), m && (p += `-${m}`);
    const {
      themeOverrides: g,
      builtinThemeOverrides: b
    } = o;
    g && (p += `-${Cr(JSON.stringify(g))}`), b && (p += `-${Cr(JSON.stringify(b))}`), s.value = p, d = () => {
      const x = r.value;
      let w = "";
      for (const A in x)
        w += `${A}: ${x[A]};`;
      D(`.${p}`, w).mount({
        id: p,
        ssr: u,
        parent: l
      }), d = void 0;
    };
  };
  return ot(() => {
    f();
  }), {
    themeClass: s,
    onRender: () => {
      d == null || d();
    }
  };
}
const zi = "n-form-item";
function ua(e, {
  defaultSize: n = "medium",
  mergedSize: r,
  mergedDisabled: o
} = {}) {
  const i = he(zi, null);
  me(zi, null);
  const a = O(r ? () => r(i) : () => {
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
  }), l = O(o ? () => o(i) : () => {
    const {
      disabled: u
    } = e;
    return u !== void 0 ? u : i ? i.disabled.value : !1;
  }), s = O(() => {
    const {
      status: u
    } = e;
    return u || (i == null ? void 0 : i.mergedValidationStatus.value);
  });
  return Ye(() => {
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
const sh = {
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
}, uh = {
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
function Un(e) {
  return (n = {}) => {
    const r = n.width ? String(n.width) : e.defaultWidth;
    return e.formats[r] || e.formats[e.defaultWidth];
  };
}
function $t(e) {
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
function Dt(e) {
  return (n, r = {}) => {
    const o = r.width, i = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth], a = n.match(i);
    if (!a)
      return null;
    const l = a[0], s = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? ch(s, (f) => f.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      dh(s, (f) => f.test(l))
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
function dh(e, n) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && n(e[r]))
      return r;
}
function ch(e, n) {
  for (let r = 0; r < e.length; r++)
    if (n(e[r]))
      return r;
}
function Qs(e) {
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
function fh(e) {
  const n = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && n === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || n === "[object Number]" || typeof e == "string" || n === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
let hh = {};
function vh() {
  return hh;
}
function Cl(e, n) {
  var s, u, d, c;
  const r = vh(), o = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((c = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = fh(e), a = i.getDay(), l = (a < o ? 7 : 0) + a - o;
  return i.setDate(i.getDate() - l), i.setHours(0, 0, 0, 0), i;
}
function ph(e, n, r) {
  const o = Cl(e, r), i = Cl(n, r);
  return +o == +i;
}
const gh = {
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
}, xh = (e, n, r) => {
  let o;
  const i = gh[e];
  return typeof i == "string" ? o = i : n === 1 ? o = i.one : o = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
}, mh = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, bh = (e, n, r, o) => mh[e], Ch = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, yh = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, wh = {
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
}, Bh = {
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
}, Sh = {
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
}, Ah = {
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
}, Fh = (e, n) => {
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
}, Ph = {
  ordinalNumber: Fh,
  era: $t({
    values: Ch,
    defaultWidth: "wide"
  }),
  quarter: $t({
    values: yh,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: $t({
    values: wh,
    defaultWidth: "wide"
  }),
  day: $t({
    values: Bh,
    defaultWidth: "wide"
  }),
  dayPeriod: $t({
    values: Sh,
    defaultWidth: "wide",
    formattingValues: Ah,
    defaultFormattingWidth: "wide"
  })
}, $h = /^(\d+)(th|st|nd|rd)?/i, Dh = /\d+/i, Eh = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, zh = {
  any: [/^b/i, /^(a|c)/i]
}, kh = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Th = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Rh = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Oh = {
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
}, Mh = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Ih = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, _h = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Lh = {
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
}, Nh = {
  ordinalNumber: Qs({
    matchPattern: $h,
    parsePattern: Dh,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Dt({
    matchPatterns: Eh,
    defaultMatchWidth: "wide",
    parsePatterns: zh,
    defaultParseWidth: "any"
  }),
  quarter: Dt({
    matchPatterns: kh,
    defaultMatchWidth: "wide",
    parsePatterns: Th,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Dt({
    matchPatterns: Rh,
    defaultMatchWidth: "wide",
    parsePatterns: Oh,
    defaultParseWidth: "any"
  }),
  day: Dt({
    matchPatterns: Mh,
    defaultMatchWidth: "wide",
    parsePatterns: Ih,
    defaultParseWidth: "any"
  }),
  dayPeriod: Dt({
    matchPatterns: _h,
    defaultMatchWidth: "any",
    parsePatterns: Lh,
    defaultParseWidth: "any"
  })
}, Hh = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, jh = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Wh = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Vh = {
  date: Un({
    formats: Hh,
    defaultWidth: "full"
  }),
  time: Un({
    formats: jh,
    defaultWidth: "full"
  }),
  dateTime: Un({
    formats: Wh,
    defaultWidth: "full"
  })
}, qh = {
  code: "en-US",
  formatDistance: xh,
  formatLong: Vh,
  formatRelative: bh,
  localize: Ph,
  match: Nh,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, Kh = {
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
}, Uh = (e, n, r) => {
  let o;
  const i = Kh[e];
  return typeof i == "string" ? o = i : n === 1 ? o = i.one : o = i.other.replace("{{count}}", String(n)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? o + "内" : o + "前" : o;
}, Gh = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, Xh = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, Yh = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, Zh = {
  date: Un({
    formats: Gh,
    defaultWidth: "full"
  }),
  time: Un({
    formats: Xh,
    defaultWidth: "full"
  }),
  dateTime: Un({
    formats: Yh,
    defaultWidth: "full"
  })
};
function yl(e, n, r) {
  const o = "eeee p";
  return ph(e, n, r) ? o : e.getTime() > n.getTime() ? "'下个'" + o : "'上个'" + o;
}
const Jh = {
  lastWeek: yl,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: yl,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, Qh = (e, n, r, o) => {
  const i = Jh[e];
  return typeof i == "function" ? i(n, r, o) : i;
}, e0 = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, t0 = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, n0 = {
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
}, r0 = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, o0 = {
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
}, i0 = {
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
}, a0 = (e, n) => {
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
}, l0 = {
  ordinalNumber: a0,
  era: $t({
    values: e0,
    defaultWidth: "wide"
  }),
  quarter: $t({
    values: t0,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: $t({
    values: n0,
    defaultWidth: "wide"
  }),
  day: $t({
    values: r0,
    defaultWidth: "wide"
  }),
  dayPeriod: $t({
    values: o0,
    defaultWidth: "wide",
    formattingValues: i0,
    defaultFormattingWidth: "wide"
  })
}, s0 = /^(第\s*)?\d+(日|时|分|秒)?/i, u0 = /\d+/i, d0 = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, c0 = {
  any: [/^(前)/i, /^(公元)/i]
}, f0 = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, h0 = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, v0 = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, p0 = {
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
}, g0 = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, x0 = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, m0 = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, b0 = {
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
}, C0 = {
  ordinalNumber: Qs({
    matchPattern: s0,
    parsePattern: u0,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Dt({
    matchPatterns: d0,
    defaultMatchWidth: "wide",
    parsePatterns: c0,
    defaultParseWidth: "any"
  }),
  quarter: Dt({
    matchPatterns: f0,
    defaultMatchWidth: "wide",
    parsePatterns: h0,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Dt({
    matchPatterns: v0,
    defaultMatchWidth: "wide",
    parsePatterns: p0,
    defaultParseWidth: "any"
  }),
  day: Dt({
    matchPatterns: g0,
    defaultMatchWidth: "wide",
    parsePatterns: x0,
    defaultParseWidth: "any"
  }),
  dayPeriod: Dt({
    matchPatterns: m0,
    defaultMatchWidth: "any",
    parsePatterns: b0,
    defaultParseWidth: "any"
  })
}, y0 = {
  code: "zh-CN",
  formatDistance: Uh,
  formatLong: Zh,
  formatRelative: Qh,
  localize: l0,
  match: C0,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, w0 = {
  name: "en-US",
  locale: qh
}, B0 = {
  name: "zh-CN",
  locale: y0
};
var eu = typeof global == "object" && global && global.Object === Object && global, S0 = typeof self == "object" && self && self.Object === Object && self, Rt = eu || S0 || Function("return this")(), un = Rt.Symbol, tu = Object.prototype, A0 = tu.hasOwnProperty, F0 = tu.toString, ur = un ? un.toStringTag : void 0;
function P0(e) {
  var n = A0.call(e, ur), r = e[ur];
  try {
    e[ur] = void 0;
    var o = !0;
  } catch {
  }
  var i = F0.call(e);
  return o && (n ? e[ur] = r : delete e[ur]), i;
}
var $0 = Object.prototype, D0 = $0.toString;
function E0(e) {
  return D0.call(e);
}
var z0 = "[object Null]", k0 = "[object Undefined]", wl = un ? un.toStringTag : void 0;
function En(e) {
  return e == null ? e === void 0 ? k0 : z0 : wl && wl in Object(e) ? P0(e) : E0(e);
}
function dn(e) {
  return e != null && typeof e == "object";
}
var T0 = "[object Symbol]";
function da(e) {
  return typeof e == "symbol" || dn(e) && En(e) == T0;
}
function nu(e, n) {
  for (var r = -1, o = e == null ? 0 : e.length, i = Array(o); ++r < o; )
    i[r] = n(e[r], r, e);
  return i;
}
var Ct = Array.isArray, R0 = 1 / 0, Bl = un ? un.prototype : void 0, Sl = Bl ? Bl.toString : void 0;
function ru(e) {
  if (typeof e == "string")
    return e;
  if (Ct(e))
    return nu(e, ru) + "";
  if (da(e))
    return Sl ? Sl.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -R0 ? "-0" : n;
}
function hn(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
function ca(e) {
  return e;
}
var O0 = "[object AsyncFunction]", M0 = "[object Function]", I0 = "[object GeneratorFunction]", _0 = "[object Proxy]";
function fa(e) {
  if (!hn(e))
    return !1;
  var n = En(e);
  return n == M0 || n == I0 || n == O0 || n == _0;
}
var si = Rt["__core-js_shared__"], Al = function() {
  var e = /[^.]+$/.exec(si && si.keys && si.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function L0(e) {
  return !!Al && Al in e;
}
var N0 = Function.prototype, H0 = N0.toString;
function zn(e) {
  if (e != null) {
    try {
      return H0.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var j0 = /[\\^$.*+?()[\]{}|]/g, W0 = /^\[object .+?Constructor\]$/, V0 = Function.prototype, q0 = Object.prototype, K0 = V0.toString, U0 = q0.hasOwnProperty, G0 = RegExp(
  "^" + K0.call(U0).replace(j0, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function X0(e) {
  if (!hn(e) || L0(e))
    return !1;
  var n = fa(e) ? G0 : W0;
  return n.test(zn(e));
}
function Y0(e, n) {
  return e == null ? void 0 : e[n];
}
function kn(e, n) {
  var r = Y0(e, n);
  return X0(r) ? r : void 0;
}
var ki = kn(Rt, "WeakMap"), Fl = Object.create, Z0 = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!hn(n))
      return {};
    if (Fl)
      return Fl(n);
    e.prototype = n;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function J0(e, n, r) {
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
function Q0(e, n) {
  var r = -1, o = e.length;
  for (n || (n = Array(o)); ++r < o; )
    n[r] = e[r];
  return n;
}
var ev = 800, tv = 16, nv = Date.now;
function rv(e) {
  var n = 0, r = 0;
  return function() {
    var o = nv(), i = tv - (o - r);
    if (r = o, i > 0) {
      if (++n >= ev)
        return arguments[0];
    } else
      n = 0;
    return e.apply(void 0, arguments);
  };
}
function ov(e) {
  return function() {
    return e;
  };
}
var yo = function() {
  try {
    var e = kn(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), iv = yo ? function(e, n) {
  return yo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: ov(n),
    writable: !0
  });
} : ca, av = rv(iv), lv = 9007199254740991, sv = /^(?:0|[1-9]\d*)$/;
function ha(e, n) {
  var r = typeof e;
  return n = n ?? lv, !!n && (r == "number" || r != "symbol" && sv.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function va(e, n, r) {
  n == "__proto__" && yo ? yo(e, n, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[n] = r;
}
function _r(e, n) {
  return e === n || e !== e && n !== n;
}
var uv = Object.prototype, dv = uv.hasOwnProperty;
function cv(e, n, r) {
  var o = e[n];
  (!(dv.call(e, n) && _r(o, r)) || r === void 0 && !(n in e)) && va(e, n, r);
}
function fv(e, n, r, o) {
  var i = !r;
  r || (r = {});
  for (var a = -1, l = n.length; ++a < l; ) {
    var s = n[a], u = void 0;
    u === void 0 && (u = e[s]), i ? va(r, s, u) : cv(r, s, u);
  }
  return r;
}
var Pl = Math.max;
function hv(e, n, r) {
  return n = Pl(n === void 0 ? e.length - 1 : n, 0), function() {
    for (var o = arguments, i = -1, a = Pl(o.length - n, 0), l = Array(a); ++i < a; )
      l[i] = o[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = o[i];
    return s[n] = r(l), J0(e, this, s);
  };
}
function vv(e, n) {
  return av(hv(e, n, ca), e + "");
}
var pv = 9007199254740991;
function pa(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= pv;
}
function or(e) {
  return e != null && pa(e.length) && !fa(e);
}
function gv(e, n, r) {
  if (!hn(r))
    return !1;
  var o = typeof n;
  return (o == "number" ? or(r) && ha(n, r.length) : o == "string" && n in r) ? _r(r[n], e) : !1;
}
function xv(e) {
  return vv(function(n, r) {
    var o = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, l = i > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, l && gv(r[0], r[1], l) && (a = i < 3 ? void 0 : a, i = 1), n = Object(n); ++o < i; ) {
      var s = r[o];
      s && e(n, s, o, a);
    }
    return n;
  });
}
var mv = Object.prototype;
function ga(e) {
  var n = e && e.constructor, r = typeof n == "function" && n.prototype || mv;
  return e === r;
}
function bv(e, n) {
  for (var r = -1, o = Array(e); ++r < e; )
    o[r] = n(r);
  return o;
}
var Cv = "[object Arguments]";
function $l(e) {
  return dn(e) && En(e) == Cv;
}
var ou = Object.prototype, yv = ou.hasOwnProperty, wv = ou.propertyIsEnumerable, wo = $l(/* @__PURE__ */ function() {
  return arguments;
}()) ? $l : function(e) {
  return dn(e) && yv.call(e, "callee") && !wv.call(e, "callee");
};
function Bv() {
  return !1;
}
var iu = typeof exports == "object" && exports && !exports.nodeType && exports, Dl = iu && typeof module == "object" && module && !module.nodeType && module, Sv = Dl && Dl.exports === iu, El = Sv ? Rt.Buffer : void 0, Av = El ? El.isBuffer : void 0, Bo = Av || Bv, Fv = "[object Arguments]", Pv = "[object Array]", $v = "[object Boolean]", Dv = "[object Date]", Ev = "[object Error]", zv = "[object Function]", kv = "[object Map]", Tv = "[object Number]", Rv = "[object Object]", Ov = "[object RegExp]", Mv = "[object Set]", Iv = "[object String]", _v = "[object WeakMap]", Lv = "[object ArrayBuffer]", Nv = "[object DataView]", Hv = "[object Float32Array]", jv = "[object Float64Array]", Wv = "[object Int8Array]", Vv = "[object Int16Array]", qv = "[object Int32Array]", Kv = "[object Uint8Array]", Uv = "[object Uint8ClampedArray]", Gv = "[object Uint16Array]", Xv = "[object Uint32Array]", Oe = {};
Oe[Hv] = Oe[jv] = Oe[Wv] = Oe[Vv] = Oe[qv] = Oe[Kv] = Oe[Uv] = Oe[Gv] = Oe[Xv] = !0;
Oe[Fv] = Oe[Pv] = Oe[Lv] = Oe[$v] = Oe[Nv] = Oe[Dv] = Oe[Ev] = Oe[zv] = Oe[kv] = Oe[Tv] = Oe[Rv] = Oe[Ov] = Oe[Mv] = Oe[Iv] = Oe[_v] = !1;
function Yv(e) {
  return dn(e) && pa(e.length) && !!Oe[En(e)];
}
function Zv(e) {
  return function(n) {
    return e(n);
  };
}
var au = typeof exports == "object" && exports && !exports.nodeType && exports, xr = au && typeof module == "object" && module && !module.nodeType && module, Jv = xr && xr.exports === au, ui = Jv && eu.process, zl = function() {
  try {
    var e = xr && xr.require && xr.require("util").types;
    return e || ui && ui.binding && ui.binding("util");
  } catch {
  }
}(), kl = zl && zl.isTypedArray, xa = kl ? Zv(kl) : Yv, Qv = Object.prototype, ep = Qv.hasOwnProperty;
function lu(e, n) {
  var r = Ct(e), o = !r && wo(e), i = !r && !o && Bo(e), a = !r && !o && !i && xa(e), l = r || o || i || a, s = l ? bv(e.length, String) : [], u = s.length;
  for (var d in e)
    (n || ep.call(e, d)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    ha(d, u))) && s.push(d);
  return s;
}
function su(e, n) {
  return function(r) {
    return e(n(r));
  };
}
var tp = su(Object.keys, Object), np = Object.prototype, rp = np.hasOwnProperty;
function op(e) {
  if (!ga(e))
    return tp(e);
  var n = [];
  for (var r in Object(e))
    rp.call(e, r) && r != "constructor" && n.push(r);
  return n;
}
function ma(e) {
  return or(e) ? lu(e) : op(e);
}
function ip(e) {
  var n = [];
  if (e != null)
    for (var r in Object(e))
      n.push(r);
  return n;
}
var ap = Object.prototype, lp = ap.hasOwnProperty;
function sp(e) {
  if (!hn(e))
    return ip(e);
  var n = ga(e), r = [];
  for (var o in e)
    o == "constructor" && (n || !lp.call(e, o)) || r.push(o);
  return r;
}
function uu(e) {
  return or(e) ? lu(e, !0) : sp(e);
}
var up = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, dp = /^\w*$/;
function ba(e, n) {
  if (Ct(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || da(e) ? !0 : dp.test(e) || !up.test(e) || n != null && e in Object(n);
}
var Fr = kn(Object, "create");
function cp() {
  this.__data__ = Fr ? Fr(null) : {}, this.size = 0;
}
function fp(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var hp = "__lodash_hash_undefined__", vp = Object.prototype, pp = vp.hasOwnProperty;
function gp(e) {
  var n = this.__data__;
  if (Fr) {
    var r = n[e];
    return r === hp ? void 0 : r;
  }
  return pp.call(n, e) ? n[e] : void 0;
}
var xp = Object.prototype, mp = xp.hasOwnProperty;
function bp(e) {
  var n = this.__data__;
  return Fr ? n[e] !== void 0 : mp.call(n, e);
}
var Cp = "__lodash_hash_undefined__";
function yp(e, n) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Fr && n === void 0 ? Cp : n, this;
}
function Pn(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var o = e[n];
    this.set(o[0], o[1]);
  }
}
Pn.prototype.clear = cp;
Pn.prototype.delete = fp;
Pn.prototype.get = gp;
Pn.prototype.has = bp;
Pn.prototype.set = yp;
function wp() {
  this.__data__ = [], this.size = 0;
}
function Ro(e, n) {
  for (var r = e.length; r--; )
    if (_r(e[r][0], n))
      return r;
  return -1;
}
var Bp = Array.prototype, Sp = Bp.splice;
function Ap(e) {
  var n = this.__data__, r = Ro(n, e);
  if (r < 0)
    return !1;
  var o = n.length - 1;
  return r == o ? n.pop() : Sp.call(n, r, 1), --this.size, !0;
}
function Fp(e) {
  var n = this.__data__, r = Ro(n, e);
  return r < 0 ? void 0 : n[r][1];
}
function Pp(e) {
  return Ro(this.__data__, e) > -1;
}
function $p(e, n) {
  var r = this.__data__, o = Ro(r, e);
  return o < 0 ? (++this.size, r.push([e, n])) : r[o][1] = n, this;
}
function Gt(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var o = e[n];
    this.set(o[0], o[1]);
  }
}
Gt.prototype.clear = wp;
Gt.prototype.delete = Ap;
Gt.prototype.get = Fp;
Gt.prototype.has = Pp;
Gt.prototype.set = $p;
var Pr = kn(Rt, "Map");
function Dp() {
  this.size = 0, this.__data__ = {
    hash: new Pn(),
    map: new (Pr || Gt)(),
    string: new Pn()
  };
}
function Ep(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function Oo(e, n) {
  var r = e.__data__;
  return Ep(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
}
function zp(e) {
  var n = Oo(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function kp(e) {
  return Oo(this, e).get(e);
}
function Tp(e) {
  return Oo(this, e).has(e);
}
function Rp(e, n) {
  var r = Oo(this, e), o = r.size;
  return r.set(e, n), this.size += r.size == o ? 0 : 1, this;
}
function Xt(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var o = e[n];
    this.set(o[0], o[1]);
  }
}
Xt.prototype.clear = Dp;
Xt.prototype.delete = zp;
Xt.prototype.get = kp;
Xt.prototype.has = Tp;
Xt.prototype.set = Rp;
var Op = "Expected a function";
function Ca(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(Op);
  var r = function() {
    var o = arguments, i = n ? n.apply(this, o) : o[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var l = e.apply(this, o);
    return r.cache = a.set(i, l) || a, l;
  };
  return r.cache = new (Ca.Cache || Xt)(), r;
}
Ca.Cache = Xt;
var Mp = 500;
function Ip(e) {
  var n = Ca(e, function(o) {
    return r.size === Mp && r.clear(), o;
  }), r = n.cache;
  return n;
}
var _p = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, Lp = /\\(\\)?/g, Np = Ip(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(_p, function(r, o, i, a) {
    n.push(i ? a.replace(Lp, "$1") : o || r);
  }), n;
});
function du(e) {
  return e == null ? "" : ru(e);
}
function cu(e, n) {
  return Ct(e) ? e : ba(e, n) ? [e] : Np(du(e));
}
var Hp = 1 / 0;
function Mo(e) {
  if (typeof e == "string" || da(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -Hp ? "-0" : n;
}
function fu(e, n) {
  n = cu(n, e);
  for (var r = 0, o = n.length; e != null && r < o; )
    e = e[Mo(n[r++])];
  return r && r == o ? e : void 0;
}
function ya(e, n, r) {
  var o = e == null ? void 0 : fu(e, n);
  return o === void 0 ? r : o;
}
function jp(e, n) {
  for (var r = -1, o = n.length, i = e.length; ++r < o; )
    e[i + r] = n[r];
  return e;
}
var hu = su(Object.getPrototypeOf, Object), Wp = "[object Object]", Vp = Function.prototype, qp = Object.prototype, vu = Vp.toString, Kp = qp.hasOwnProperty, Up = vu.call(Object);
function Gp(e) {
  if (!dn(e) || En(e) != Wp)
    return !1;
  var n = hu(e);
  if (n === null)
    return !0;
  var r = Kp.call(n, "constructor") && n.constructor;
  return typeof r == "function" && r instanceof r && vu.call(r) == Up;
}
function Xp(e, n, r) {
  var o = -1, i = e.length;
  n < 0 && (n = -n > i ? 0 : i + n), r = r > i ? i : r, r < 0 && (r += i), i = n > r ? 0 : r - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++o < i; )
    a[o] = e[o + n];
  return a;
}
function Yp(e, n, r) {
  var o = e.length;
  return r = r === void 0 ? o : r, !n && r >= o ? e : Xp(e, n, r);
}
var Zp = "\\ud800-\\udfff", Jp = "\\u0300-\\u036f", Qp = "\\ufe20-\\ufe2f", eg = "\\u20d0-\\u20ff", tg = Jp + Qp + eg, ng = "\\ufe0e\\ufe0f", rg = "\\u200d", og = RegExp("[" + rg + Zp + tg + ng + "]");
function pu(e) {
  return og.test(e);
}
function ig(e) {
  return e.split("");
}
var gu = "\\ud800-\\udfff", ag = "\\u0300-\\u036f", lg = "\\ufe20-\\ufe2f", sg = "\\u20d0-\\u20ff", ug = ag + lg + sg, dg = "\\ufe0e\\ufe0f", cg = "[" + gu + "]", Ti = "[" + ug + "]", Ri = "\\ud83c[\\udffb-\\udfff]", fg = "(?:" + Ti + "|" + Ri + ")", xu = "[^" + gu + "]", mu = "(?:\\ud83c[\\udde6-\\uddff]){2}", bu = "[\\ud800-\\udbff][\\udc00-\\udfff]", hg = "\\u200d", Cu = fg + "?", yu = "[" + dg + "]?", vg = "(?:" + hg + "(?:" + [xu, mu, bu].join("|") + ")" + yu + Cu + ")*", pg = yu + Cu + vg, gg = "(?:" + [xu + Ti + "?", Ti, mu, bu, cg].join("|") + ")", xg = RegExp(Ri + "(?=" + Ri + ")|" + gg + pg, "g");
function mg(e) {
  return e.match(xg) || [];
}
function bg(e) {
  return pu(e) ? mg(e) : ig(e);
}
function Cg(e) {
  return function(n) {
    n = du(n);
    var r = pu(n) ? bg(n) : void 0, o = r ? r[0] : n.charAt(0), i = r ? Yp(r, 1).join("") : n.slice(1);
    return o[e]() + i;
  };
}
var yg = Cg("toUpperCase");
function wg() {
  this.__data__ = new Gt(), this.size = 0;
}
function Bg(e) {
  var n = this.__data__, r = n.delete(e);
  return this.size = n.size, r;
}
function Sg(e) {
  return this.__data__.get(e);
}
function Ag(e) {
  return this.__data__.has(e);
}
var Fg = 200;
function Pg(e, n) {
  var r = this.__data__;
  if (r instanceof Gt) {
    var o = r.__data__;
    if (!Pr || o.length < Fg - 1)
      return o.push([e, n]), this.size = ++r.size, this;
    r = this.__data__ = new Xt(o);
  }
  return r.set(e, n), this.size = r.size, this;
}
function zt(e) {
  var n = this.__data__ = new Gt(e);
  this.size = n.size;
}
zt.prototype.clear = wg;
zt.prototype.delete = Bg;
zt.prototype.get = Sg;
zt.prototype.has = Ag;
zt.prototype.set = Pg;
var wu = typeof exports == "object" && exports && !exports.nodeType && exports, Tl = wu && typeof module == "object" && module && !module.nodeType && module, $g = Tl && Tl.exports === wu, Rl = $g ? Rt.Buffer : void 0;
Rl && Rl.allocUnsafe;
function Dg(e, n) {
  return e.slice();
}
function Eg(e, n) {
  for (var r = -1, o = e == null ? 0 : e.length, i = 0, a = []; ++r < o; ) {
    var l = e[r];
    n(l, r, e) && (a[i++] = l);
  }
  return a;
}
function zg() {
  return [];
}
var kg = Object.prototype, Tg = kg.propertyIsEnumerable, Ol = Object.getOwnPropertySymbols, Rg = Ol ? function(e) {
  return e == null ? [] : (e = Object(e), Eg(Ol(e), function(n) {
    return Tg.call(e, n);
  }));
} : zg;
function Og(e, n, r) {
  var o = n(e);
  return Ct(e) ? o : jp(o, r(e));
}
function Ml(e) {
  return Og(e, ma, Rg);
}
var Oi = kn(Rt, "DataView"), Mi = kn(Rt, "Promise"), Ii = kn(Rt, "Set"), Il = "[object Map]", Mg = "[object Object]", _l = "[object Promise]", Ll = "[object Set]", Nl = "[object WeakMap]", Hl = "[object DataView]", Ig = zn(Oi), _g = zn(Pr), Lg = zn(Mi), Ng = zn(Ii), Hg = zn(ki), tn = En;
(Oi && tn(new Oi(new ArrayBuffer(1))) != Hl || Pr && tn(new Pr()) != Il || Mi && tn(Mi.resolve()) != _l || Ii && tn(new Ii()) != Ll || ki && tn(new ki()) != Nl) && (tn = function(e) {
  var n = En(e), r = n == Mg ? e.constructor : void 0, o = r ? zn(r) : "";
  if (o)
    switch (o) {
      case Ig:
        return Hl;
      case _g:
        return Il;
      case Lg:
        return _l;
      case Ng:
        return Ll;
      case Hg:
        return Nl;
    }
  return n;
});
var So = Rt.Uint8Array;
function jg(e) {
  var n = new e.constructor(e.byteLength);
  return new So(n).set(new So(e)), n;
}
function Wg(e, n) {
  var r = jg(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function Vg(e) {
  return typeof e.constructor == "function" && !ga(e) ? Z0(hu(e)) : {};
}
var qg = "__lodash_hash_undefined__";
function Kg(e) {
  return this.__data__.set(e, qg), this;
}
function Ug(e) {
  return this.__data__.has(e);
}
function Ao(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Xt(); ++n < r; )
    this.add(e[n]);
}
Ao.prototype.add = Ao.prototype.push = Kg;
Ao.prototype.has = Ug;
function Gg(e, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(e[r], r, e))
      return !0;
  return !1;
}
function Xg(e, n) {
  return e.has(n);
}
var Yg = 1, Zg = 2;
function Bu(e, n, r, o, i, a) {
  var l = r & Yg, s = e.length, u = n.length;
  if (s != u && !(l && u > s))
    return !1;
  var d = a.get(e), c = a.get(n);
  if (d && c)
    return d == n && c == e;
  var f = -1, p = !0, m = r & Zg ? new Ao() : void 0;
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
      if (!Gg(n, function(x, w) {
        if (!Xg(m, w) && (v === x || i(v, x, r, o, a)))
          return m.push(w);
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
function Jg(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(o, i) {
    r[++n] = [i, o];
  }), r;
}
function Qg(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(o) {
    r[++n] = o;
  }), r;
}
var ex = 1, tx = 2, nx = "[object Boolean]", rx = "[object Date]", ox = "[object Error]", ix = "[object Map]", ax = "[object Number]", lx = "[object RegExp]", sx = "[object Set]", ux = "[object String]", dx = "[object Symbol]", cx = "[object ArrayBuffer]", fx = "[object DataView]", jl = un ? un.prototype : void 0, di = jl ? jl.valueOf : void 0;
function hx(e, n, r, o, i, a, l) {
  switch (r) {
    case fx:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case cx:
      return !(e.byteLength != n.byteLength || !a(new So(e), new So(n)));
    case nx:
    case rx:
    case ax:
      return _r(+e, +n);
    case ox:
      return e.name == n.name && e.message == n.message;
    case lx:
    case ux:
      return e == n + "";
    case ix:
      var s = Jg;
    case sx:
      var u = o & ex;
      if (s || (s = Qg), e.size != n.size && !u)
        return !1;
      var d = l.get(e);
      if (d)
        return d == n;
      o |= tx, l.set(e, n);
      var c = Bu(s(e), s(n), o, i, a, l);
      return l.delete(e), c;
    case dx:
      if (di)
        return di.call(e) == di.call(n);
  }
  return !1;
}
var vx = 1, px = Object.prototype, gx = px.hasOwnProperty;
function xx(e, n, r, o, i, a) {
  var l = r & vx, s = Ml(e), u = s.length, d = Ml(n), c = d.length;
  if (u != c && !l)
    return !1;
  for (var f = u; f--; ) {
    var p = s[f];
    if (!(l ? p in n : gx.call(n, p)))
      return !1;
  }
  var m = a.get(e), v = a.get(n);
  if (m && v)
    return m == n && v == e;
  var g = !0;
  a.set(e, n), a.set(n, e);
  for (var b = l; ++f < u; ) {
    p = s[f];
    var x = e[p], w = n[p];
    if (o)
      var A = l ? o(w, x, p, n, e, a) : o(x, w, p, e, n, a);
    if (!(A === void 0 ? x === w || i(x, w, r, o, a) : A)) {
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
var mx = 1, Wl = "[object Arguments]", Vl = "[object Array]", ro = "[object Object]", bx = Object.prototype, ql = bx.hasOwnProperty;
function Cx(e, n, r, o, i, a) {
  var l = Ct(e), s = Ct(n), u = l ? Vl : tn(e), d = s ? Vl : tn(n);
  u = u == Wl ? ro : u, d = d == Wl ? ro : d;
  var c = u == ro, f = d == ro, p = u == d;
  if (p && Bo(e)) {
    if (!Bo(n))
      return !1;
    l = !0, c = !1;
  }
  if (p && !c)
    return a || (a = new zt()), l || xa(e) ? Bu(e, n, r, o, i, a) : hx(e, n, u, r, o, i, a);
  if (!(r & mx)) {
    var m = c && ql.call(e, "__wrapped__"), v = f && ql.call(n, "__wrapped__");
    if (m || v) {
      var g = m ? e.value() : e, b = v ? n.value() : n;
      return a || (a = new zt()), i(g, b, r, o, a);
    }
  }
  return p ? (a || (a = new zt()), xx(e, n, r, o, i, a)) : !1;
}
function wa(e, n, r, o, i) {
  return e === n ? !0 : e == null || n == null || !dn(e) && !dn(n) ? e !== e && n !== n : Cx(e, n, r, o, wa, i);
}
var yx = 1, wx = 2;
function Bx(e, n, r, o) {
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
      var c = new zt(), f;
      if (!(f === void 0 ? wa(d, u, yx | wx, o, c) : f))
        return !1;
    }
  }
  return !0;
}
function Su(e) {
  return e === e && !hn(e);
}
function Sx(e) {
  for (var n = ma(e), r = n.length; r--; ) {
    var o = n[r], i = e[o];
    n[r] = [o, i, Su(i)];
  }
  return n;
}
function Au(e, n) {
  return function(r) {
    return r == null ? !1 : r[e] === n && (n !== void 0 || e in Object(r));
  };
}
function Ax(e) {
  var n = Sx(e);
  return n.length == 1 && n[0][2] ? Au(n[0][0], n[0][1]) : function(r) {
    return r === e || Bx(r, e, n);
  };
}
function Fx(e, n) {
  return e != null && n in Object(e);
}
function Px(e, n, r) {
  n = cu(n, e);
  for (var o = -1, i = n.length, a = !1; ++o < i; ) {
    var l = Mo(n[o]);
    if (!(a = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return a || ++o != i ? a : (i = e == null ? 0 : e.length, !!i && pa(i) && ha(l, i) && (Ct(e) || wo(e)));
}
function $x(e, n) {
  return e != null && Px(e, n, Fx);
}
var Dx = 1, Ex = 2;
function zx(e, n) {
  return ba(e) && Su(n) ? Au(Mo(e), n) : function(r) {
    var o = ya(r, e);
    return o === void 0 && o === n ? $x(r, e) : wa(n, o, Dx | Ex);
  };
}
function kx(e) {
  return function(n) {
    return n == null ? void 0 : n[e];
  };
}
function Tx(e) {
  return function(n) {
    return fu(n, e);
  };
}
function Rx(e) {
  return ba(e) ? kx(Mo(e)) : Tx(e);
}
function Ox(e) {
  return typeof e == "function" ? e : e == null ? ca : typeof e == "object" ? Ct(e) ? zx(e[0], e[1]) : Ax(e) : Rx(e);
}
function Mx(e) {
  return function(n, r, o) {
    for (var i = -1, a = Object(n), l = o(n), s = l.length; s--; ) {
      var u = l[++i];
      if (r(a[u], u, a) === !1)
        break;
    }
    return n;
  };
}
var Fu = Mx();
function Ix(e, n) {
  return e && Fu(e, n, ma);
}
function _x(e, n) {
  return function(r, o) {
    if (r == null)
      return r;
    if (!or(r))
      return e(r, o);
    for (var i = r.length, a = -1, l = Object(r); ++a < i && o(l[a], a, l) !== !1; )
      ;
    return r;
  };
}
var Lx = _x(Ix);
function _i(e, n, r) {
  (r !== void 0 && !_r(e[n], r) || r === void 0 && !(n in e)) && va(e, n, r);
}
function Nx(e) {
  return dn(e) && or(e);
}
function Li(e, n) {
  if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
    return e[n];
}
function Hx(e) {
  return fv(e, uu(e));
}
function jx(e, n, r, o, i, a, l) {
  var s = Li(e, r), u = Li(n, r), d = l.get(u);
  if (d) {
    _i(e, r, d);
    return;
  }
  var c = a ? a(s, u, r + "", e, n, l) : void 0, f = c === void 0;
  if (f) {
    var p = Ct(u), m = !p && Bo(u), v = !p && !m && xa(u);
    c = u, p || m || v ? Ct(s) ? c = s : Nx(s) ? c = Q0(s) : m ? (f = !1, c = Dg(u)) : v ? (f = !1, c = Wg(u)) : c = [] : Gp(u) || wo(u) ? (c = s, wo(s) ? c = Hx(s) : (!hn(s) || fa(s)) && (c = Vg(u))) : f = !1;
  }
  f && (l.set(u, c), i(c, u, o, a, l), l.delete(u)), _i(e, r, c);
}
function Pu(e, n, r, o, i) {
  e !== n && Fu(n, function(a, l) {
    if (i || (i = new zt()), hn(a))
      jx(e, n, l, r, Pu, o, i);
    else {
      var s = o ? o(Li(e, l), a, l + "", e, n, i) : void 0;
      s === void 0 && (s = a), _i(e, l, s);
    }
  }, uu);
}
function Wx(e, n) {
  var r = -1, o = or(e) ? Array(e.length) : [];
  return Lx(e, function(i, a, l) {
    o[++r] = n(i, a, l);
  }), o;
}
function Vx(e, n) {
  var r = Ct(e) ? nu : Wx;
  return r(e, Ox(n));
}
var cr = xv(function(e, n, r) {
  Pu(e, n, r);
});
function $r(e) {
  const {
    mergedLocaleRef: n,
    mergedDateLocaleRef: r
  } = he(Ut, null) || {}, o = O(() => {
    var a, l;
    return (l = (a = n == null ? void 0 : n.value) === null || a === void 0 ? void 0 : a[e]) !== null && l !== void 0 ? l : sh[e];
  });
  return {
    dateLocaleRef: O(() => {
      var a;
      return (a = r == null ? void 0 : r.value) !== null && a !== void 0 ? a : w0;
    }),
    localeRef: o
  };
}
const Dr = "naive-ui-style";
function gt(e, n, r) {
  if (!n) return;
  const o = Dn(), i = O(() => {
    const {
      value: s
    } = n;
    if (!s)
      return;
    const u = s[e];
    if (u)
      return u;
  }), a = he(Ut, null), l = () => {
    ot(() => {
      const {
        value: s
      } = r, u = `${s}${e}Rtl`;
      if (Rc(u, o)) return;
      const {
        value: d
      } = i;
      d && d.style.mount({
        id: u,
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
  return o ? l() : $n(l), i;
}
const vn = {
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
  fontSize: qx,
  fontFamily: Kx,
  lineHeight: Ux
} = vn, $u = D("body", `
 margin: 0;
 font-size: ${qx};
 font-family: ${Kx};
 line-height: ${Ux};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [D("input", `
 font-family: inherit;
 font-size: inherit;
 `)]);
function Tn(e, n, r) {
  if (!n) {
    process.env.NODE_ENV !== "production" && fn("use-style", "No style is specified.");
    return;
  }
  const o = Dn(), i = he(Ut, null), a = () => {
    const l = r.value;
    n.mount({
      id: l === void 0 ? e : l + e,
      head: !0,
      anchorMetaName: Dr,
      props: {
        bPrefix: l ? `.${l}-` : void 0
      },
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    }), i != null && i.preflightStyleDisabled || $u.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: Dr,
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    });
  };
  o ? a() : $n(a);
}
function ue(e, n, r, o, i, a) {
  const l = Dn(), s = he(Ut, null);
  if (r) {
    const d = () => {
      const c = a == null ? void 0 : a.value;
      r.mount({
        id: c === void 0 ? n : c + n,
        head: !0,
        props: {
          bPrefix: c ? `.${c}-` : void 0
        },
        anchorMetaName: Dr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || $u.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Dr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    l ? d() : $n(d);
  }
  return O(() => {
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
        common: w = void 0,
        self: A = void 0,
        peers: y = {}
      } = {}
    } = (s == null ? void 0 : s.mergedThemeRef.value) || {}, {
      common: S = void 0,
      [e]: T = {}
    } = (s == null ? void 0 : s.mergedThemeOverridesRef.value) || {}, {
      common: C,
      peers: P = {}
    } = T, I = cr({}, c || w || x || o.common, S, C, g), _ = cr(
      // {}, executed every time, no need for empty obj
      (d = f || A || o.self) === null || d === void 0 ? void 0 : d(I),
      v,
      T,
      m
    );
    return {
      common: I,
      self: _,
      peers: cr({}, o.peers, y, p),
      peerOverrides: cr({}, v.peers, P, b)
    };
  });
}
ue.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const Gx = k("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
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
    Tn("-base-icon", Gx, se(e, "clsPrefix"));
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
}), Io = J({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: n
  }) {
    const r = nr();
    return () => h(ct, {
      name: "icon-switch-transition",
      appear: r.value
    }, n);
  }
});
function ir(e, n) {
  return J({
    name: yg(e),
    setup() {
      var r;
      const o = (r = he(Ut, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
      return () => {
        var i;
        const a = (i = o == null ? void 0 : o.value) === null || i === void 0 ? void 0 : i[e];
        return a ? a() : n;
      };
    }
  });
}
const Xx = J({
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
}), Yx = J({
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
}), Zx = J({
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
}), Du = J({
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
}), Jx = ir("clear", h("svg", {
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
}))))), Qx = ir("close", h("svg", {
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
}))))), em = J({
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
}), Ba = ir("error", h("svg", {
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
}))))), tm = J({
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
}), nm = J({
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
}), Fo = ir("info", h("svg", {
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
}))))), Sa = ir("success", h("svg", {
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
}))))), _o = ir("warning", h("svg", {
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
}))))), {
  cubicBezierEaseInOut: rm
} = vn;
function Er({
  originalTransform: e = "",
  left: n = 0,
  top: r = 0,
  transition: o = `all .3s ${rm} !important`
} = {}) {
  return [D("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${e} scale(0.75)`,
    left: n,
    top: r,
    opacity: 0
  }), D("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${e}`,
    left: n,
    top: r,
    opacity: 1
  }), D("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: n,
    top: r,
    transition: o
  })];
}
const om = k("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [D(">", [z("clear", `
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
 `)]), z("placeholder", `
 display: flex;
 `), z("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Er({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), Ni = J({
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
    return Tn("-base-clear", om, se(e, "clsPrefix")), {
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
    }, h(Io, null, {
      default: () => {
        var n, r;
        return this.show ? h("div", {
          key: "dismiss",
          class: `${e}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, Et(this.$slots.icon, () => [h(yt, {
          clsPrefix: e
        }, {
          default: () => h(Jx, null)
        })])) : h("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (r = (n = this.$slots).placeholder) === null || r === void 0 ? void 0 : r.call(n));
      }
    }));
  }
}), im = k("base-close", `
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
 `), Ve("disabled", [D("&:hover", `
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
 `)])]), Lr = J({
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
    return Tn("-base-close", im, se(e, "clsPrefix")), () => {
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
      }, h(yt, {
        clsPrefix: n
      }, {
        default: () => h(Qx, null)
      }));
    };
  }
}), Aa = J({
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
      } = e, f = s ? lc : ct, p = {
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
}), am = J({
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
}), lm = D([D("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), k("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [z("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [Er()]), z("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Er({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), z("container", `
 animation: rotator 3s linear infinite both;
 `, [z("icon", `
 height: 1em;
 width: 1em;
 `)])])]), ci = "1.6s", sm = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Nr = J({
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
  }, sm),
  setup(e) {
    Tn("-base-loading", lm, se(e, "clsPrefix"));
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
    }, h(Io, null, {
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
        dur: ci,
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
        dur: ci,
        fill: "freeze",
        repeatCount: "indefinite"
      }), h("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * n};${1.42 * n};${5.67 * n}`,
        begin: "0s",
        dur: ci,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : h("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), {
  cubicBezierEaseInOut: Kl
} = vn;
function Lo({
  name: e = "fade-in",
  enterDuration: n = "0.2s",
  leaveDuration: r = "0.2s",
  enterCubicBezier: o = Kl,
  leaveCubicBezier: i = Kl
} = {}) {
  return [D(`&.${e}-transition-enter-active`, {
    transition: `all ${n} ${o}!important`
  }), D(`&.${e}-transition-leave-active`, {
    transition: `all ${r} ${i}!important`
  }), D(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0
  }), D(`&.${e}-transition-leave-from, &.${e}-transition-enter-to`, {
    opacity: 1
  })];
}
const ce = {
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
}, um = An(ce.neutralBase), Eu = An(ce.neutralInvertBase), dm = `rgba(${Eu.slice(0, 3).join(", ")}, `;
function Ul(e) {
  return `${dm + String(e)})`;
}
function nt(e) {
  const n = Array.from(Eu);
  return n[3] = Number(e), vt(um, n);
}
const He = Object.assign(Object.assign({
  name: "common"
}, vn), {
  baseColor: ce.neutralBase,
  // primary color
  primaryColor: ce.primaryDefault,
  primaryColorHover: ce.primaryHover,
  primaryColorPressed: ce.primaryActive,
  primaryColorSuppl: ce.primarySuppl,
  // info color
  infoColor: ce.infoDefault,
  infoColorHover: ce.infoHover,
  infoColorPressed: ce.infoActive,
  infoColorSuppl: ce.infoSuppl,
  // success color
  successColor: ce.successDefault,
  successColorHover: ce.successHover,
  successColorPressed: ce.successActive,
  successColorSuppl: ce.successSuppl,
  // warning color
  warningColor: ce.warningDefault,
  warningColorHover: ce.warningHover,
  warningColorPressed: ce.warningActive,
  warningColorSuppl: ce.warningSuppl,
  // error color
  errorColor: ce.errorDefault,
  errorColorHover: ce.errorHover,
  errorColorPressed: ce.errorActive,
  errorColorSuppl: ce.errorSuppl,
  // text color
  textColorBase: ce.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: nt(ce.alpha4),
  placeholderColor: nt(ce.alpha4),
  placeholderColorDisabled: nt(ce.alpha5),
  iconColor: nt(ce.alpha4),
  iconColorHover: Xr(nt(ce.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: Xr(nt(ce.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: nt(ce.alpha5),
  opacity1: ce.alpha1,
  opacity2: ce.alpha2,
  opacity3: ce.alpha3,
  opacity4: ce.alpha4,
  opacity5: ce.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: nt(Number(ce.alphaClose)),
  closeIconColorHover: nt(Number(ce.alphaClose)),
  closeIconColorPressed: nt(Number(ce.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: nt(ce.alpha4),
  clearColorHover: Xr(nt(ce.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: Xr(nt(ce.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Ul(ce.alphaScrollbar),
  scrollbarColorHover: Ul(ce.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: nt(ce.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: ce.neutralPopover,
  tableColor: ce.neutralCard,
  cardColor: ce.neutralCard,
  modalColor: ce.neutralModal,
  bodyColor: ce.neutralBody,
  tagColor: "#eee",
  avatarColor: nt(ce.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: nt(ce.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: ce.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), cm = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function fm(e) {
  const {
    scrollbarColor: n,
    scrollbarColorHover: r,
    scrollbarHeight: o,
    scrollbarWidth: i,
    scrollbarBorderRadius: a
  } = e;
  return Object.assign(Object.assign({}, cm), {
    height: o,
    width: i,
    borderRadius: a,
    color: n,
    colorHover: r
  });
}
const No = {
  name: "Scrollbar",
  common: He,
  self: fm
}, hm = k("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [D(">", [k("scrollbar-container", `
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
  k("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), D(">, +", [k("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [N("horizontal", `
 height: var(--n-scrollbar-height);
 `, [D(">", [z("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), N("horizontal--top", `
 inset: var(--n-scrollbar-rail-inset-horizontal-top); 
 `), N("horizontal--bottom", `
 inset: var(--n-scrollbar-rail-inset-horizontal-bottom); 
 `), N("vertical", `
 width: var(--n-scrollbar-width);
 `, [D(">", [z("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), N("vertical--left", `
 inset: var(--n-scrollbar-rail-inset-vertical-left); 
 `), N("vertical--right", `
 inset: var(--n-scrollbar-rail-inset-vertical-right); 
 `), N("disabled", [D(">", [z("scrollbar", "pointer-events: none;")])]), D(">", [z("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [Lo(), D("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), vm = Object.assign(Object.assign({}, ue.props), {
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
}), Hr = J({
  name: "Scrollbar",
  props: vm,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Ae(e), i = gt("Scrollbar", o, n), a = M(null), l = M(null), s = M(null), u = M(null), d = M(null), c = M(null), f = M(null), p = M(null), m = M(null), v = M(null), g = M(null), b = M(0), x = M(0), w = M(!1), A = M(!1);
    let y = !1, S = !1, T, C, P = 0, I = 0, _ = 0, K = 0;
    const H = rf(), t = ue("Scrollbar", "-scrollbar", hm, No, e, n), F = O(() => {
      const {
        value: B
      } = p, {
        value: j
      } = c, {
        value: X
      } = v;
      return B === null || j === null || X === null ? 0 : Math.min(B, X * B / j + wr(t.value.self.width) * 1.5);
    }), $ = O(() => `${F.value}px`), L = O(() => {
      const {
        value: B
      } = m, {
        value: j
      } = f, {
        value: X
      } = g;
      return B === null || j === null || X === null ? 0 : X * B / j + wr(t.value.self.height) * 1.5;
    }), R = O(() => `${L.value}px`), V = O(() => {
      const {
        value: B
      } = p, {
        value: j
      } = b, {
        value: X
      } = c, {
        value: ne
      } = v;
      if (B === null || X === null || ne === null)
        return 0;
      {
        const ae = X - B;
        return ae ? j / ae * (ne - F.value) : 0;
      }
    }), Q = O(() => `${V.value}px`), Z = O(() => {
      const {
        value: B
      } = m, {
        value: j
      } = x, {
        value: X
      } = f, {
        value: ne
      } = g;
      if (B === null || X === null || ne === null)
        return 0;
      {
        const ae = X - B;
        return ae ? j / ae * (ne - L.value) : 0;
      }
    }), oe = O(() => `${Z.value}px`), W = O(() => {
      const {
        value: B
      } = p, {
        value: j
      } = c;
      return B !== null && j !== null && j > B;
    }), G = O(() => {
      const {
        value: B
      } = m, {
        value: j
      } = f;
      return B !== null && j !== null && j > B;
    }), re = O(() => {
      const {
        trigger: B
      } = e;
      return B === "none" || w.value;
    }), Be = O(() => {
      const {
        trigger: B
      } = e;
      return B === "none" || A.value;
    }), ie = O(() => {
      const {
        container: B
      } = e;
      return B ? B() : l.value;
    }), ge = O(() => {
      const {
        content: B
      } = e;
      return B ? B() : s.value;
    }), Me = (B, j) => {
      if (!e.scrollable) return;
      if (typeof B == "number") {
        Se(B, j ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: X,
        top: ne,
        index: ae,
        elSize: fe,
        position: ve,
        behavior: xe,
        el: ke,
        debounce: xt = !0
      } = B;
      (X !== void 0 || ne !== void 0) && Se(X ?? 0, ne ?? 0, 0, !1, xe), ke !== void 0 ? Se(0, ke.offsetTop, ke.offsetHeight, xt, xe) : ae !== void 0 && fe !== void 0 ? Se(0, ae * fe, fe, xt, xe) : ve === "bottom" ? Se(0, Number.MAX_SAFE_INTEGER, 0, !1, xe) : ve === "top" && Se(0, 0, 0, !1, xe);
    }, le = cf(() => {
      e.container || Me({
        top: b.value,
        left: x.value
      });
    }), We = () => {
      le.isDeactivated || ee();
    }, Te = (B) => {
      if (le.isDeactivated) return;
      const {
        onResize: j
      } = e;
      j && j(B), ee();
    }, Ce = (B, j) => {
      if (!e.scrollable) return;
      const {
        value: X
      } = ie;
      X && (typeof B == "object" ? X.scrollBy(B) : X.scrollBy(B, j || 0));
    };
    function Se(B, j, X, ne, ae) {
      const {
        value: fe
      } = ie;
      if (fe) {
        if (ne) {
          const {
            scrollTop: ve,
            offsetHeight: xe
          } = fe;
          if (j > ve) {
            j + X <= ve + xe || fe.scrollTo({
              left: B,
              top: j + X - xe,
              behavior: ae
            });
            return;
          }
        }
        fe.scrollTo({
          left: B,
          top: j,
          behavior: ae
        });
      }
    }
    function ye() {
      wt(), Fe(), ee();
    }
    function tt() {
      it();
    }
    function it() {
      ft(), ut();
    }
    function ft() {
      C !== void 0 && window.clearTimeout(C), C = window.setTimeout(() => {
        A.value = !1;
      }, e.duration);
    }
    function ut() {
      T !== void 0 && window.clearTimeout(T), T = window.setTimeout(() => {
        w.value = !1;
      }, e.duration);
    }
    function wt() {
      T !== void 0 && window.clearTimeout(T), w.value = !0;
    }
    function Fe() {
      C !== void 0 && window.clearTimeout(C), A.value = !0;
    }
    function ze(B) {
      const {
        onScroll: j
      } = e;
      j && j(B), Ze();
    }
    function Ze() {
      const {
        value: B
      } = ie;
      B && (b.value = B.scrollTop, x.value = B.scrollLeft * (i != null && i.value ? -1 : 1));
    }
    function Ue() {
      const {
        value: B
      } = ge;
      B && (c.value = B.offsetHeight, f.value = B.offsetWidth);
      const {
        value: j
      } = ie;
      j && (p.value = j.offsetHeight, m.value = j.offsetWidth);
      const {
        value: X
      } = d, {
        value: ne
      } = u;
      X && (g.value = X.offsetWidth), ne && (v.value = ne.offsetHeight);
    }
    function Y() {
      const {
        value: B
      } = ie;
      B && (b.value = B.scrollTop, x.value = B.scrollLeft * (i != null && i.value ? -1 : 1), p.value = B.offsetHeight, m.value = B.offsetWidth, c.value = B.scrollHeight, f.value = B.scrollWidth);
      const {
        value: j
      } = d, {
        value: X
      } = u;
      j && (g.value = j.offsetWidth), X && (v.value = X.offsetHeight);
    }
    function ee() {
      e.scrollable && (e.useUnifiedContainer ? Y() : (Ue(), Ze()));
    }
    function Re(B) {
      var j;
      return !(!((j = a.value) === null || j === void 0) && j.contains(Zn(B)));
    }
    function pn(B) {
      B.preventDefault(), B.stopPropagation(), S = !0, Le("mousemove", window, Ot, !0), Le("mouseup", window, Mt, !0), I = x.value, _ = i != null && i.value ? window.innerWidth - B.clientX : B.clientX;
    }
    function Ot(B) {
      if (!S) return;
      T !== void 0 && window.clearTimeout(T), C !== void 0 && window.clearTimeout(C);
      const {
        value: j
      } = m, {
        value: X
      } = f, {
        value: ne
      } = L;
      if (j === null || X === null) return;
      const fe = (i != null && i.value ? window.innerWidth - B.clientX - _ : B.clientX - _) * (X - j) / (j - ne), ve = X - j;
      let xe = I + fe;
      xe = Math.min(ve, xe), xe = Math.max(xe, 0);
      const {
        value: ke
      } = ie;
      if (ke) {
        ke.scrollLeft = xe * (i != null && i.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: xt
        } = e;
        xt && xt(xe);
      }
    }
    function Mt(B) {
      B.preventDefault(), B.stopPropagation(), Ee("mousemove", window, Ot, !0), Ee("mouseup", window, Mt, !0), S = !1, ee(), Re(B) && it();
    }
    function Yt(B) {
      B.preventDefault(), B.stopPropagation(), y = !0, Le("mousemove", window, At, !0), Le("mouseup", window, It, !0), P = b.value, K = B.clientY;
    }
    function At(B) {
      if (!y) return;
      T !== void 0 && window.clearTimeout(T), C !== void 0 && window.clearTimeout(C);
      const {
        value: j
      } = p, {
        value: X
      } = c, {
        value: ne
      } = F;
      if (j === null || X === null) return;
      const fe = (B.clientY - K) * (X - j) / (j - ne), ve = X - j;
      let xe = P + fe;
      xe = Math.min(ve, xe), xe = Math.max(xe, 0);
      const {
        value: ke
      } = ie;
      ke && (ke.scrollTop = xe);
    }
    function It(B) {
      B.preventDefault(), B.stopPropagation(), Ee("mousemove", window, At, !0), Ee("mouseup", window, It, !0), y = !1, ee(), Re(B) && it();
    }
    ot(() => {
      const {
        value: B
      } = G, {
        value: j
      } = W, {
        value: X
      } = n, {
        value: ne
      } = d, {
        value: ae
      } = u;
      ne && (B ? ne.classList.remove(`${X}-scrollbar-rail--disabled`) : ne.classList.add(`${X}-scrollbar-rail--disabled`)), ae && (j ? ae.classList.remove(`${X}-scrollbar-rail--disabled`) : ae.classList.add(`${X}-scrollbar-rail--disabled`));
    }), Qe(() => {
      e.container || ee();
    }), Ye(() => {
      T !== void 0 && window.clearTimeout(T), C !== void 0 && window.clearTimeout(C), Ee("mousemove", window, At, !0), Ee("mouseup", window, It, !0);
    });
    const Zt = O(() => {
      const {
        common: {
          cubicBezierEaseInOut: B
        },
        self: {
          color: j,
          colorHover: X,
          height: ne,
          width: ae,
          borderRadius: fe,
          railInsetHorizontalTop: ve,
          railInsetHorizontalBottom: xe,
          railInsetVerticalRight: ke,
          railInsetVerticalLeft: xt,
          railColor: Rn
        }
      } = t.value;
      return {
        "--n-scrollbar-bezier": B,
        "--n-scrollbar-color": j,
        "--n-scrollbar-color-hover": X,
        "--n-scrollbar-border-radius": fe,
        "--n-scrollbar-width": ae,
        "--n-scrollbar-height": ne,
        "--n-scrollbar-rail-inset-horizontal-top": ve,
        "--n-scrollbar-rail-inset-horizontal-bottom": xe,
        "--n-scrollbar-rail-inset-vertical-right": i != null && i.value ? xl(ke) : ke,
        "--n-scrollbar-rail-inset-vertical-left": i != null && i.value ? xl(xt) : xt,
        "--n-scrollbar-rail-color": Rn
      };
    }), ht = r ? Ne("scrollbar", void 0, Zt, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Me,
      scrollBy: Ce,
      sync: ee,
      syncUnifiedContainer: Y,
      handleMouseEnterWrapper: ye,
      handleMouseLeaveWrapper: tt
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
      needXBar: G,
      yBarSizePx: $,
      xBarSizePx: R,
      yBarTopPx: Q,
      xBarLeftPx: oe,
      isShowXBar: re,
      isShowYBar: Be,
      isIos: H,
      handleScroll: ze,
      handleContentResize: We,
      handleContainerResize: Te,
      handleYScrollMouseDown: Yt,
      handleXScrollMouseDown: pn,
      cssVars: r ? void 0 : Zt,
      themeClass: ht == null ? void 0 : ht.themeClass,
      onRender: ht == null ? void 0 : ht.onRender
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
    }, h(d ? Di : ct, d ? null : {
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
      return (m = this.onRender) === null || m === void 0 || m.call(this), h("div", cn(this.$attrs, {
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
      }, h(Ar, {
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
      }, h(d ? Di : ct, d ? null : {
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
    }, p = this.container ? f() : h(Ar, {
      onResize: this.handleContainerResize
    }, {
      default: f
    });
    return a ? h(et, null, p, c(this.themeClass, this.cssVars)) : p;
  }
}), zu = Hr;
function Gl(e) {
  return Array.isArray(e) ? e : [e];
}
const Hi = {
  STOP: "STOP"
};
function ku(e, n) {
  const r = n(e);
  e.children !== void 0 && r !== Hi.STOP && e.children.forEach((o) => ku(o, n));
}
function pm(e, n = {}) {
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
function gm(e, n) {
  const { isLeaf: r } = e;
  return r !== void 0 ? r : !n(e);
}
function xm(e) {
  return e.children;
}
function mm(e) {
  return e.key;
}
function bm() {
  return !1;
}
function Cm(e, n) {
  const { isLeaf: r } = e;
  return !(r === !1 && !Array.isArray(n(e)));
}
function ym(e) {
  return e.disabled === !0;
}
function wm(e, n) {
  return e.isLeaf === !1 && !Array.isArray(n(e));
}
function Bm(e, n) {
  if (e.isLeaf === !0) {
    const r = n(e);
    if (Array.isArray(r) && r.length > 0)
      return !0;
  }
  return !1;
}
function fi(e) {
  var n;
  return e == null ? [] : Array.isArray(e) ? e : (n = e.checkedKeys) !== null && n !== void 0 ? n : [];
}
function hi(e) {
  var n;
  return e == null || Array.isArray(e) ? [] : (n = e.indeterminateKeys) !== null && n !== void 0 ? n : [];
}
function Sm(e, n) {
  const r = new Set(e);
  return n.forEach((o) => {
    r.has(o) || r.add(o);
  }), Array.from(r);
}
function Am(e, n) {
  const r = new Set(e);
  return n.forEach((o) => {
    r.has(o) && r.delete(o);
  }), Array.from(r);
}
function Fm(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function Pm(e) {
  const n = /* @__PURE__ */ new Map();
  return e.forEach((r, o) => {
    n.set(r.key, o);
  }), (r) => {
    var o;
    return (o = n.get(r)) !== null && o !== void 0 ? o : null;
  };
}
class $m extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function Dm(e, n, r, o) {
  return Po(n.concat(e), r, o, !1);
}
function Em(e, n) {
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
function zm(e, n, r, o) {
  const i = Po(n, r, o, !1), a = Po(e, r, o, !0), l = Em(e, r), s = [];
  return i.forEach((u) => {
    (a.has(u) || l.has(u)) && s.push(u);
  }), s.forEach((u) => i.delete(u)), i;
}
function vi(e, n) {
  const { checkedKeys: r, keysToCheck: o, keysToUncheck: i, indeterminateKeys: a, cascade: l, leafOnly: s, checkStrategy: u, allowNotLoaded: d } = e;
  if (!l)
    return o !== void 0 ? {
      checkedKeys: Sm(r, o),
      indeterminateKeys: Array.from(a)
    } : i !== void 0 ? {
      checkedKeys: Am(r, i),
      indeterminateKeys: Array.from(a)
    } : {
      checkedKeys: Array.from(r),
      indeterminateKeys: Array.from(a)
    };
  const { levelTreeNodeMap: c } = n;
  let f;
  i !== void 0 ? f = zm(i, r, n, d) : o !== void 0 ? f = Dm(o, r, n, d) : f = Po(r, n, d, !1);
  const p = u === "parent", m = u === "child" || s, v = f, g = /* @__PURE__ */ new Set(), b = Math.max.apply(null, Array.from(c.keys()));
  for (let x = b; x >= 0; x -= 1) {
    const w = x === 0, A = c.get(x);
    for (const y of A) {
      if (y.isLeaf)
        continue;
      const { key: S, shallowLoaded: T } = y;
      if (m && T && y.children.forEach((_) => {
        !_.disabled && !_.isLeaf && _.shallowLoaded && v.has(_.key) && v.delete(_.key);
      }), y.disabled || !T)
        continue;
      let C = !0, P = !1, I = !0;
      for (const _ of y.children) {
        const K = _.key;
        if (!_.disabled) {
          if (I && (I = !1), v.has(K))
            P = !0;
          else if (g.has(K)) {
            P = !0, C = !1;
            break;
          } else if (C = !1, P)
            break;
        }
      }
      C && !I ? (p && y.children.forEach((_) => {
        !_.disabled && v.has(_.key) && v.delete(_.key);
      }), v.add(S)) : P && g.add(S), w && m && v.has(S) && v.delete(S);
    }
  }
  return {
    checkedKeys: Array.from(v),
    indeterminateKeys: Array.from(g)
  };
}
function Po(e, n, r, o) {
  const { treeNodeMap: i, getChildren: a } = n, l = /* @__PURE__ */ new Set(), s = new Set(e);
  return e.forEach((u) => {
    const d = i.get(u);
    d !== void 0 && ku(d, (c) => {
      if (c.disabled)
        return Hi.STOP;
      const { key: f } = c;
      if (!l.has(f) && (l.add(f), s.add(f), wm(c.rawNode, a))) {
        if (o)
          return Hi.STOP;
        if (!r)
          throw new $m();
      }
    });
  }), s;
}
function km(e, { includeGroup: n = !1, includeSelf: r = !0 }, o) {
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
function Tm(e) {
  if (e.length === 0)
    return null;
  const n = e[0];
  return n.isGroup || n.ignored || n.disabled ? n.getNext() : n;
}
function Rm(e, n) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return n ? r[(i + 1) % o] : i === r.length - 1 ? null : r[i + 1];
}
function Xl(e, n, { loop: r = !1, includeDisabled: o = !1 } = {}) {
  const i = n === "prev" ? Om : Rm, a = {
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
        const c = Fa(d, a);
        c !== null ? s = c : u(i(d, r));
      } else {
        const c = i(d, !1);
        if (c !== null)
          u(c);
        else {
          const f = Mm(d);
          f != null && f.isGroup ? u(i(f, r)) : r && u(i(d, !0));
        }
      }
    }
  }
  return u(e), s;
}
function Om(e, n) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return n ? r[(i - 1 + o) % o] : i === 0 ? null : r[i - 1];
}
function Mm(e) {
  return e.parent;
}
function Fa(e, n = {}) {
  const { reverse: r = !1 } = n, { children: o } = e;
  if (o) {
    const { length: i } = o, a = r ? i - 1 : 0, l = r ? -1 : i, s = r ? -1 : 1;
    for (let u = a; u !== l; u += s) {
      const d = o[u];
      if (!d.disabled && !d.ignored)
        if (d.isGroup) {
          const c = Fa(d, n);
          if (c !== null)
            return c;
        } else
          return d;
    }
  }
  return null;
}
const Im = {
  getChild() {
    return this.ignored ? null : Fa(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return Xl(this, "next", e);
  },
  getPrev(e = {}) {
    return Xl(this, "prev", e);
  }
};
function _m(e, n) {
  const r = n ? new Set(n) : void 0, o = [];
  function i(a) {
    a.forEach((l) => {
      o.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || // normal non-leaf node
      r === void 0 || r.has(l.key)) && i(l.children);
    });
  }
  return i(e), o;
}
function Lm(e, n) {
  const r = e.key;
  for (; n; ) {
    if (n.key === r)
      return !0;
    n = n.parent;
  }
  return !1;
}
function Tu(e, n, r, o, i, a = null, l = 0) {
  const s = [];
  return e.forEach((u, d) => {
    var c;
    process.env.NODE_ENV !== "production" && Bm(u, i) && console.error("[treemate]: node", u, "is invalid");
    const f = Object.create(o);
    if (f.rawNode = u, f.siblings = s, f.level = l, f.index = d, f.isFirstChild = d === 0, f.isLastChild = d + 1 === e.length, f.parent = a, !f.ignored) {
      const p = i(u);
      Array.isArray(p) && (f.children = Tu(p, n, r, o, i, f, l + 1));
    }
    s.push(f), n.set(f.key, f), r.has(l) || r.set(l, []), (c = r.get(l)) === null || c === void 0 || c.push(f);
  }), s;
}
function Ru(e, n = {}) {
  var r;
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), { getDisabled: a = ym, getIgnored: l = bm, getIsGroup: s = Fm, getKey: u = mm } = n, d = (r = n.getChildren) !== null && r !== void 0 ? r : xm, c = n.ignoreEmptyChildren ? (y) => {
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
      return gm(this.rawNode, c);
    },
    get shallowLoaded() {
      return Cm(this.rawNode, c);
    },
    get ignored() {
      return l(this.rawNode);
    },
    contains(y) {
      return Lm(this, y);
    }
  }, Im), p = Tu(e, o, i, f, c);
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
    const T = v(y);
    return T ? T.getPrev(S) : null;
  }
  function b(y, S) {
    const T = v(y);
    return T ? T.getNext(S) : null;
  }
  function x(y) {
    const S = v(y);
    return S ? S.getParent() : null;
  }
  function w(y) {
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
      return _m(p, y);
    },
    getNode: m,
    getPrev: g,
    getNext: b,
    getParent: x,
    getChild: w,
    getFirstAvailableNode() {
      return Tm(p);
    },
    getPath(y, S = {}) {
      return km(y, S, A);
    },
    getCheckedKeys(y, S = {}) {
      const { cascade: T = !0, leafOnly: C = !1, checkStrategy: P = "all", allowNotLoaded: I = !1 } = S;
      return vi({
        checkedKeys: fi(y),
        indeterminateKeys: hi(y),
        cascade: T,
        leafOnly: C,
        checkStrategy: P,
        allowNotLoaded: I
      }, A);
    },
    check(y, S, T = {}) {
      const { cascade: C = !0, leafOnly: P = !1, checkStrategy: I = "all", allowNotLoaded: _ = !1 } = T;
      return vi({
        checkedKeys: fi(S),
        indeterminateKeys: hi(S),
        keysToCheck: y == null ? [] : Gl(y),
        cascade: C,
        leafOnly: P,
        checkStrategy: I,
        allowNotLoaded: _
      }, A);
    },
    uncheck(y, S, T = {}) {
      const { cascade: C = !0, leafOnly: P = !1, checkStrategy: I = "all", allowNotLoaded: _ = !1 } = T;
      return vi({
        checkedKeys: fi(S),
        indeterminateKeys: hi(S),
        keysToUncheck: y == null ? [] : Gl(y),
        cascade: C,
        leafOnly: P,
        checkStrategy: I,
        allowNotLoaded: _
      }, A);
    },
    getNonLeafKeys(y = {}) {
      return pm(p, y);
    }
  };
  return A;
}
const Nm = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function Hm(e) {
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
  return Object.assign(Object.assign({}, Nm), {
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
const Ou = {
  name: "Empty",
  common: He,
  self: Hm
}, jm = k("empty", `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [z("icon", `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [D("+", [z("description", `
 margin-top: 8px;
 `)])]), z("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), z("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]), Wm = Object.assign(Object.assign({}, ue.props), {
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
}), $o = J({
  name: "Empty",
  props: Wm,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r,
      mergedComponentPropsRef: o
    } = Ae(e), i = ue("Empty", "-empty", jm, Ou, e, n), {
      localeRef: a
    } = $r("Empty"), l = O(() => {
      var c, f, p;
      return (c = e.description) !== null && c !== void 0 ? c : (p = (f = o == null ? void 0 : o.value) === null || f === void 0 ? void 0 : f.Empty) === null || p === void 0 ? void 0 : p.description;
    }), s = O(() => {
      var c, f;
      return ((f = (c = o == null ? void 0 : o.value) === null || c === void 0 ? void 0 : c.Empty) === null || f === void 0 ? void 0 : f.renderIcon) || (() => h(em, null));
    }), u = O(() => {
      const {
        size: c
      } = e, {
        common: {
          cubicBezierEaseInOut: f
        },
        self: {
          [U("iconSize", c)]: p,
          [U("fontSize", c)]: m,
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
    }), d = r ? Ne("empty", O(() => {
      let c = "";
      const {
        size: f
      } = e;
      return c += f[0], c;
    }), u, e) : void 0;
    return {
      mergedClsPrefix: n,
      mergedRenderIcon: s,
      localizedDescription: O(() => l.value || a.value.description),
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
    }, e.icon ? e.icon() : h(yt, {
      clsPrefix: n
    }, {
      default: this.mergedRenderIcon
    })) : null, this.showDescription ? h("div", {
      class: `${n}-empty__description`
    }, e.default ? e.default() : this.localizedDescription) : null, e.extra ? h("div", {
      class: `${n}-empty__extra`
    }, e.extra()) : null);
  }
}), Vm = {
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
function qm(e) {
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
    heightMedium: w,
    heightLarge: A,
    heightHuge: y
  } = e;
  return Object.assign(Object.assign({}, Vm), {
    optionFontSizeTiny: f,
    optionFontSizeSmall: p,
    optionFontSizeMedium: m,
    optionFontSizeLarge: v,
    optionFontSizeHuge: g,
    optionHeightTiny: b,
    optionHeightSmall: x,
    optionHeightMedium: w,
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
const Mu = {
  name: "InternalSelectMenu",
  common: He,
  peers: {
    Scrollbar: No,
    Empty: Ou
  },
  self: qm
}, Yl = J({
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
    } = he(ta);
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
    } = this, a = o == null ? void 0 : o(i), l = n ? n(i, !1) : je(i[this.labelField], i, !1), s = h("div", Object.assign({}, a, {
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
function Km(e, n) {
  return h(ct, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => e ? h(yt, {
      clsPrefix: n,
      class: `${n}-base-select-option__check`
    }, {
      default: () => h(Xx)
    }) : null
  });
}
const Zl = J({
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
    } = he(ta), m = qe(() => {
      const {
        value: x
      } = r;
      return x ? e.tmNode.key === x.key : !1;
    });
    function v(x) {
      const {
        tmNode: w
      } = e;
      w.disabled || f(x, w);
    }
    function g(x) {
      const {
        tmNode: w
      } = e;
      w.disabled || p(x, w);
    }
    function b(x) {
      const {
        tmNode: w
      } = e, {
        value: A
      } = m;
      w.disabled || A || p(x, w);
    }
    return {
      multiple: o,
      isGrouped: qe(() => {
        const {
          tmNode: x
        } = e, {
          parent: w
        } = x;
        return w && w.rawNode.type === "group";
      }),
      showCheckmark: d,
      nodeProps: c,
      isPending: m,
      isSelected: qe(() => {
        const {
          value: x
        } = n, {
          value: w
        } = o;
        if (x === null) return !1;
        const A = e.tmNode.rawNode[u.value];
        if (w) {
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
    } = this, p = Km(r, e), m = u ? [u(n, r), a && p] : [je(n[this.labelField], n, r), a && p], v = l == null ? void 0 : l(n), g = h("div", Object.assign({}, v, {
      class: [`${e}-base-select-option`, n.class, v == null ? void 0 : v.class, {
        [`${e}-base-select-option--disabled`]: n.disabled,
        [`${e}-base-select-option--selected`]: r,
        [`${e}-base-select-option--grouped`]: i,
        [`${e}-base-select-option--pending`]: o,
        [`${e}-base-select-option--show-checkmark`]: a
      }],
      style: [(v == null ? void 0 : v.style) || "", n.style || ""],
      onClick: li([d, v == null ? void 0 : v.onClick]),
      onMouseenter: li([c, v == null ? void 0 : v.onMouseenter]),
      onMousemove: li([f, v == null ? void 0 : v.onMousemove])
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
}), {
  cubicBezierEaseIn: Jl,
  cubicBezierEaseOut: Ql
} = vn;
function Ho({
  transformOrigin: e = "inherit",
  duration: n = ".2s",
  enterScale: r = ".9",
  originalTransform: o = "",
  originalTransition: i = ""
} = {}) {
  return [D("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${Jl}, transform ${n} ${Jl} ${i && `,${i}`}`
  }), D("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${Ql}, transform ${n} ${Ql} ${i && `,${i}`}`
  }), D("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${o} scale(${r})`
  }), D("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${o} scale(1)`
  })];
}
const Um = k("base-select-menu", `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [k("scrollbar", `
 max-height: var(--n-height);
 `), k("virtual-list", `
 max-height: var(--n-height);
 `), k("base-select-option", `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [z("content", `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), k("base-select-group-header", `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), k("base-select-menu-option-wrapper", `
 position: relative;
 width: 100%;
 `), z("loading, empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), z("loading", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), z("header", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), z("action", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), k("base-select-group-header", `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), k("base-select-option", `
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
 `, [Ve("selected", `
 color: var(--n-option-text-color-disabled);
 `), N("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), z("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [Ho({
  enterScale: "0.5"
})])])]), Gm = J({
  name: "InternalSelectMenu",
  props: Object.assign(Object.assign({}, ue.props), {
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
    } = Ae(e), o = gt("InternalSelectMenu", r, n), i = ue("InternalSelectMenu", "-internal-select-menu", Um, Mu, e, se(e, "clsPrefix")), a = M(null), l = M(null), s = M(null), u = O(() => e.treeMate.getFlattenedNodes()), d = O(() => Pm(u.value)), c = M(null);
    function f() {
      const {
        treeMate: W
      } = e;
      let G = null;
      const {
        value: re
      } = e;
      re === null ? G = W.getFirstAvailableNode() : (e.multiple ? G = W.getNode((re || [])[(re || []).length - 1]) : G = W.getNode(re), (!G || G.disabled) && (G = W.getFirstAvailableNode())), F(G || null);
    }
    function p() {
      const {
        value: W
      } = c;
      W && !e.treeMate.getNode(W.key) && (c.value = null);
    }
    let m;
    Pe(() => e.show, (W) => {
      W ? m = Pe(() => e.treeMate, () => {
        e.resetMenuOnOptionsChange ? (e.autoPending ? f() : p(), Je($)) : p();
      }, {
        immediate: !0
      }) : m == null || m();
    }, {
      immediate: !0
    }), Ye(() => {
      m == null || m();
    });
    const v = O(() => wr(i.value.self[U("optionHeight", e.size)])), g = O(() => St(i.value.self[U("padding", e.size)])), b = O(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), x = O(() => {
      const W = u.value;
      return W && W.length === 0;
    });
    function w(W) {
      const {
        onToggle: G
      } = e;
      G && G(W);
    }
    function A(W) {
      const {
        onScroll: G
      } = e;
      G && G(W);
    }
    function y(W) {
      var G;
      (G = s.value) === null || G === void 0 || G.sync(), A(W);
    }
    function S() {
      var W;
      (W = s.value) === null || W === void 0 || W.sync();
    }
    function T() {
      const {
        value: W
      } = c;
      return W || null;
    }
    function C(W, G) {
      G.disabled || F(G, !1);
    }
    function P(W, G) {
      G.disabled || w(G);
    }
    function I(W) {
      var G;
      Vt(W, "action") || (G = e.onKeyup) === null || G === void 0 || G.call(e, W);
    }
    function _(W) {
      var G;
      Vt(W, "action") || (G = e.onKeydown) === null || G === void 0 || G.call(e, W);
    }
    function K(W) {
      var G;
      (G = e.onMousedown) === null || G === void 0 || G.call(e, W), !e.focusable && W.preventDefault();
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
    function F(W, G = !1) {
      c.value = W, G && $();
    }
    function $() {
      var W, G;
      const re = c.value;
      if (!re) return;
      const Be = d.value(re.key);
      Be !== null && (e.virtualScroll ? (W = l.value) === null || W === void 0 || W.scrollTo({
        index: Be
      }) : (G = s.value) === null || G === void 0 || G.scrollTo({
        index: Be,
        elSize: v.value
      }));
    }
    function L(W) {
      var G, re;
      !((G = a.value) === null || G === void 0) && G.contains(W.target) && ((re = e.onFocus) === null || re === void 0 || re.call(e, W));
    }
    function R(W) {
      var G, re;
      !((G = a.value) === null || G === void 0) && G.contains(W.relatedTarget) || (re = e.onBlur) === null || re === void 0 || re.call(e, W);
    }
    me(ta, {
      handleOptionMouseEnter: C,
      handleOptionClick: P,
      valueSetRef: b,
      pendingTmNodeRef: c,
      nodePropsRef: se(e, "nodeProps"),
      showCheckmarkRef: se(e, "showCheckmark"),
      multipleRef: se(e, "multiple"),
      valueRef: se(e, "value"),
      renderLabelRef: se(e, "renderLabel"),
      renderOptionRef: se(e, "renderOption"),
      labelFieldRef: se(e, "labelField"),
      valueFieldRef: se(e, "valueField")
    }), me(ks, a), Qe(() => {
      const {
        value: W
      } = s;
      W && W.sync();
    });
    const V = O(() => {
      const {
        size: W
      } = e, {
        common: {
          cubicBezierEaseInOut: G
        },
        self: {
          height: re,
          borderRadius: Be,
          color: ie,
          groupHeaderTextColor: ge,
          actionDividerColor: Me,
          optionTextColorPressed: le,
          optionTextColor: We,
          optionTextColorDisabled: Te,
          optionTextColorActive: Ce,
          optionOpacityDisabled: Se,
          optionCheckColor: ye,
          actionTextColor: tt,
          optionColorPending: it,
          optionColorActive: ft,
          loadingColor: ut,
          loadingSize: wt,
          optionColorActivePending: Fe,
          [U("optionFontSize", W)]: ze,
          [U("optionHeight", W)]: Ze,
          [U("optionPadding", W)]: Ue
        }
      } = i.value;
      return {
        "--n-height": re,
        "--n-action-divider-color": Me,
        "--n-action-text-color": tt,
        "--n-bezier": G,
        "--n-border-radius": Be,
        "--n-color": ie,
        "--n-option-font-size": ze,
        "--n-group-header-text-color": ge,
        "--n-option-check-color": ye,
        "--n-option-color-pending": it,
        "--n-option-color-active": ft,
        "--n-option-color-active-pending": Fe,
        "--n-option-height": Ze,
        "--n-option-opacity-disabled": Se,
        "--n-option-text-color": We,
        "--n-option-text-color-active": Ce,
        "--n-option-text-color-disabled": Te,
        "--n-option-text-color-pressed": le,
        "--n-option-padding": Ue,
        "--n-option-padding-left": St(Ue, "left"),
        "--n-option-padding-right": St(Ue, "right"),
        "--n-loading-color": ut,
        "--n-loading-size": wt
      };
    }), {
      inlineThemeDisabled: Q
    } = e, Z = Q ? Ne("internal-select-menu", O(() => e.size[0]), V, e) : void 0, oe = {
      selfRef: a,
      next: H,
      prev: t,
      getPendingTmNode: T
    };
    return Zs(a, e.onResize), Object.assign({
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
      handleFocusin: L,
      handleFocusout: R,
      handleKeyUp: I,
      handleKeyDown: _,
      handleMouseDown: K,
      handleVirtualListResize: S,
      handleVirtualListScroll: y,
      cssVars: Q ? void 0 : V,
      themeClass: Z == null ? void 0 : Z.themeClass,
      onRender: Z == null ? void 0 : Z.onRender
    }, oe);
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
    }, h(Nr, {
      clsPrefix: r,
      strokeWidth: 20
    })) : this.empty ? h("div", {
      class: `${r}-base-select-menu__empty`,
      "data-empty": !0
    }, Et(e.empty, () => [h($o, {
      theme: o.peers.Empty,
      themeOverrides: o.peerOverrides.Empty,
      size: this.size
    })])) : h(Hr, {
      ref: "scrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: n ? this.virtualListContainer : void 0,
      content: n ? this.virtualListContent : void 0,
      onScroll: n ? void 0 : this.doScroll
    }, {
      default: () => n ? h(Qf, {
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
        }) => l.isGroup ? h(Yl, {
          key: l.key,
          clsPrefix: r,
          tmNode: l
        }) : l.ignored ? null : h(Zl, {
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
      }, this.flattenedNodes.map((l) => l.isGroup ? h(Yl, {
        key: l.key,
        clsPrefix: r,
        tmNode: l
      }) : h(Zl, {
        clsPrefix: r,
        key: l.key,
        tmNode: l
      })))
    }), _e(e.action, (l) => l && [h("div", {
      class: `${r}-base-select-menu__action`,
      "data-action": !0,
      key: "action"
    }, l), h(am, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
}), Xm = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function Ym(e) {
  const {
    boxShadow2: n,
    popoverColor: r,
    textColor2: o,
    borderRadius: i,
    fontSize: a,
    dividerColor: l
  } = e;
  return Object.assign(Object.assign({}, Xm), {
    fontSize: a,
    borderRadius: i,
    color: r,
    dividerColor: l,
    textColor: o,
    boxShadow: n
  });
}
const jr = {
  name: "Popover",
  common: He,
  self: Ym
}, pi = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ge = "var(--n-arrow-height) * 1.414", Zm = D([k("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [D(">", [k("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Ve("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [Ve("scrollable", [Ve("show-header-or-footer", "padding: var(--n-padding);")])]), z("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), z("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), N("scrollable, show-header-or-footer", [z("content", `
 padding: var(--n-padding);
 `)])]), k("popover-shared", `
 transform-origin: inherit;
 `, [
  k("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [k("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${Ge});
 height: calc(${Ge});
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
]), mt("top-start", `
 top: calc(${Ge} / -2);
 left: calc(${jt("top-start")} - var(--v-offset-left));
 `), mt("top", `
 top: calc(${Ge} / -2);
 transform: translateX(calc(${Ge} / -2)) rotate(45deg);
 left: 50%;
 `), mt("top-end", `
 top: calc(${Ge} / -2);
 right: calc(${jt("top-end")} + var(--v-offset-left));
 `), mt("bottom-start", `
 bottom: calc(${Ge} / -2);
 left: calc(${jt("bottom-start")} - var(--v-offset-left));
 `), mt("bottom", `
 bottom: calc(${Ge} / -2);
 transform: translateX(calc(${Ge} / -2)) rotate(45deg);
 left: 50%;
 `), mt("bottom-end", `
 bottom: calc(${Ge} / -2);
 right: calc(${jt("bottom-end")} + var(--v-offset-left));
 `), mt("left-start", `
 left: calc(${Ge} / -2);
 top: calc(${jt("left-start")} - var(--v-offset-top));
 `), mt("left", `
 left: calc(${Ge} / -2);
 transform: translateY(calc(${Ge} / -2)) rotate(45deg);
 top: 50%;
 `), mt("left-end", `
 left: calc(${Ge} / -2);
 bottom: calc(${jt("left-end")} + var(--v-offset-top));
 `), mt("right-start", `
 right: calc(${Ge} / -2);
 top: calc(${jt("right-start")} - var(--v-offset-top));
 `), mt("right", `
 right: calc(${Ge} / -2);
 transform: translateY(calc(${Ge} / -2)) rotate(45deg);
 top: 50%;
 `), mt("right-end", `
 right: calc(${Ge} / -2);
 bottom: calc(${jt("right-end")} + var(--v-offset-top));
 `), ...Vx({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, n) => {
  const r = ["right", "left"].includes(n), o = r ? "width" : "height";
  return e.map((i) => {
    const a = i.split("-")[1] === "end", s = `calc((${`var(--v-target-${o}, 0px)`} - ${Ge}) / 2)`, u = jt(i);
    return D(`[v-placement="${i}"] >`, [k("popover-shared", [N("center-arrow", [k("popover-arrow", `${n}: calc(max(${s}, ${u}) ${a ? "+" : "-"} var(--v-offset-${r ? "left" : "top"}));`)])])]);
  });
})]);
function jt(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function mt(e, n) {
  const r = e.split("-")[0], o = ["top", "bottom"].includes(r) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return D(`[v-placement="${e}"] >`, [k("popover-shared", `
 margin-${pi[r]}: var(--n-space);
 `, [N("show-arrow", `
 margin-${pi[r]}: var(--n-space-arrow);
 `), N("overlap", `
 margin: 0;
 `), _c("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${pi[r]}: auto;
 ${o}
 `, [k("popover-arrow", n)])])]);
}
const Iu = Object.assign(Object.assign({}, ue.props), {
  to: Kt.propTo,
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
function _u({
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
const Jm = J({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: Iu,
  setup(e, {
    slots: n,
    attrs: r
  }) {
    const {
      namespaceRef: o,
      mergedClsPrefixRef: i,
      inlineThemeDisabled: a
    } = Ae(e), l = ue("Popover", "-popover", Zm, jr, e, i), s = M(null), u = he("NPopover"), d = M(null), c = M(e.show), f = M(!1);
    ot(() => {
      const {
        show: C
      } = e;
      C && !rh() && !e.internalDeactivateImmediately && (f.value = !0);
    });
    const p = O(() => {
      const {
        trigger: C,
        onClickoutside: P
      } = e, I = [], {
        positionManuallyRef: {
          value: _
        }
      } = u;
      return _ || (C === "click" && !P && I.push([Br, y, void 0, {
        capture: !0
      }]), C === "hover" && I.push([vf, A])), P && I.push([Br, y, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && f.value) && I.push([Xn, e.show]), I;
    }), m = O(() => {
      const {
        common: {
          cubicBezierEaseInOut: C,
          cubicBezierEaseIn: P,
          cubicBezierEaseOut: I
        },
        self: {
          space: _,
          spaceArrow: K,
          padding: H,
          fontSize: t,
          textColor: F,
          dividerColor: $,
          color: L,
          boxShadow: R,
          borderRadius: V,
          arrowHeight: Q,
          arrowOffset: Z,
          arrowOffsetVertical: oe
        }
      } = l.value;
      return {
        "--n-box-shadow": R,
        "--n-bezier": C,
        "--n-bezier-ease-in": P,
        "--n-bezier-ease-out": I,
        "--n-font-size": t,
        "--n-text-color": F,
        "--n-color": L,
        "--n-divider-color": $,
        "--n-border-radius": V,
        "--n-arrow-height": Q,
        "--n-arrow-offset": Z,
        "--n-arrow-offset-vertical": oe,
        "--n-padding": H,
        "--n-space": _,
        "--n-space-arrow": K
      };
    }), v = O(() => {
      const C = e.width === "trigger" ? void 0 : qt(e.width), P = [];
      C && P.push({
        width: C
      });
      const {
        maxWidth: I,
        minWidth: _
      } = e;
      return I && P.push({
        maxWidth: qt(I)
      }), _ && P.push({
        maxWidth: qt(_)
      }), a || P.push(m.value), P;
    }), g = a ? Ne("popover", void 0, m, e) : void 0;
    u.setBodyInstance({
      syncPosition: b
    }), Ye(() => {
      u.setBodyInstance(null);
    }), Pe(se(e, "show"), (C) => {
      e.animated || (C ? c.value = !0 : c.value = !1);
    });
    function b() {
      var C;
      (C = s.value) === null || C === void 0 || C.syncPosition();
    }
    function x(C) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && u.handleMouseEnter(C);
    }
    function w(C) {
      e.trigger === "hover" && e.keepAliveOnHover && u.handleMouseLeave(C);
    }
    function A(C) {
      e.trigger === "hover" && !S().contains(Zn(C)) && u.handleMouseMoveOutside(C);
    }
    function y(C) {
      (e.trigger === "click" && !S().contains(Zn(C)) || e.onClickoutside) && u.handleClickOutside(C);
    }
    function S() {
      return u.getTriggerElement();
    }
    me(Mr, d), me(ko, null), me(To, null);
    function T() {
      if (g == null || g.onRender(), !(e.displayDirective === "show" || e.show || e.animated && f.value))
        return null;
      let P;
      const I = u.internalRenderBodyRef.value, {
        value: _
      } = i;
      if (I)
        P = I(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${_}-popover-shared`, g == null ? void 0 : g.themeClass.value, e.overlap && `${_}-popover-shared--overlap`, e.showArrow && `${_}-popover-shared--show-arrow`, e.arrowPointToCenter && `${_}-popover-shared--center-arrow`],
          d,
          v.value,
          x,
          w
        );
      else {
        const {
          value: K
        } = u.extraClassRef, {
          internalTrapFocus: H
        } = e, t = !$i(n.header) || !$i(n.footer), F = () => {
          var $, L;
          const R = t ? h(et, null, _e(n.header, (Z) => Z ? h("div", {
            class: [`${_}-popover__header`, e.headerClass],
            style: e.headerStyle
          }, Z) : null), _e(n.default, (Z) => Z ? h("div", {
            class: [`${_}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, n) : null), _e(n.footer, (Z) => Z ? h("div", {
            class: [`${_}-popover__footer`, e.footerClass],
            style: e.footerStyle
          }, Z) : null)) : e.scrollable ? ($ = n.default) === null || $ === void 0 ? void 0 : $.call(n) : h("div", {
            class: [`${_}-popover__content`, e.contentClass],
            style: e.contentStyle
          }, n), V = e.scrollable ? h(zu, {
            contentClass: t ? void 0 : `${_}-popover__content ${(L = e.contentClass) !== null && L !== void 0 ? L : ""}`,
            contentStyle: t ? void 0 : e.contentStyle
          }, {
            default: () => R
          }) : R, Q = e.showArrow ? _u({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: _
          }) : null;
          return [V, Q];
        };
        P = h("div", cn({
          class: [`${_}-popover`, `${_}-popover-shared`, g == null ? void 0 : g.themeClass.value, K.map(($) => `${_}-${$}`), {
            [`${_}-popover--scrollable`]: e.scrollable,
            [`${_}-popover--show-header-or-footer`]: t,
            [`${_}-popover--raw`]: e.raw,
            [`${_}-popover-shared--overlap`]: e.overlap,
            [`${_}-popover-shared--show-arrow`]: e.showArrow,
            [`${_}-popover-shared--center-arrow`]: e.arrowPointToCenter
          }],
          ref: d,
          style: v.value,
          onKeydown: u.handleKeydown,
          onMouseenter: x,
          onMouseleave: w
        }, r), H ? h(Ys, {
          active: e.show,
          autoFocus: !0
        }, {
          default: F
        }) : F());
      }
      return kt(P, p.value);
    }
    return {
      displayed: f,
      namespace: o,
      isMounted: u.isMountedRef,
      zIndex: u.zIndexRef,
      followerRef: s,
      adjustedTo: Kt(e),
      followerEnabled: c,
      renderContentNode: T
    };
  },
  render() {
    return h(la, {
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
      teleportDisabled: this.adjustedTo === Kt.tdkey
    }, {
      default: () => this.animated ? h(ct, {
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
}), Qm = Object.keys(Iu), eb = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function tb(e, n, r) {
  eb[n].forEach((o) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const i = e.props[o], a = r[o];
    i ? e.props[o] = (...l) => {
      i(...l), a(...l);
    } : e.props[o] = a;
  });
}
const Wr = {
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
  to: Kt.propTo,
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
}, nb = Object.assign(Object.assign(Object.assign({}, ue.props), Wr), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), Vr = J({
  name: "Popover",
  inheritAttrs: !1,
  props: nb,
  __popover__: !0,
  setup(e) {
    process.env.NODE_ENV !== "production" && ot(() => {
      e.maxWidth !== void 0 && at("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && at("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && at("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && at("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && at("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const n = nr(), r = M(null), o = O(() => e.show), i = M(e.defaultShow), a = Jn(o, i), l = qe(() => e.disabled ? !1 : a.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: $
      } = e;
      return !!($ != null && $());
    }, u = () => s() ? !1 : a.value, d = ea(e, ["arrow", "showArrow"]), c = O(() => e.overlap ? !1 : d.value);
    let f = null;
    const p = M(null), m = M(null), v = qe(() => e.x !== void 0 && e.y !== void 0);
    function g($) {
      const {
        "onUpdate:show": L,
        onUpdateShow: R,
        onShow: V,
        onHide: Q
      } = e;
      i.value = $, L && pe(L, $), R && pe(R, $), $ && V && pe(V, !0), $ && Q && pe(Q, !1);
    }
    function b() {
      f && f.syncPosition();
    }
    function x() {
      const {
        value: $
      } = p;
      $ && (window.clearTimeout($), p.value = null);
    }
    function w() {
      const {
        value: $
      } = m;
      $ && (window.clearTimeout($), m.value = null);
    }
    function A() {
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
    function S() {
      const $ = s();
      if (e.trigger === "hover" && !$) {
        if (w(), p.value !== null || u()) return;
        const L = () => {
          g(!0), p.value = null;
        }, {
          delay: R
        } = e;
        R === 0 ? L() : p.value = window.setTimeout(L, R);
      }
    }
    function T() {
      const $ = s();
      if (e.trigger === "hover" && !$) {
        if (x(), m.value !== null || !u()) return;
        const L = () => {
          g(!1), m.value = null;
        }, {
          duration: R
        } = e;
        R === 0 ? L() : m.value = window.setTimeout(L, R);
      }
    }
    function C() {
      T();
    }
    function P($) {
      var L;
      u() && (e.trigger === "click" && (x(), w(), g(!1)), (L = e.onClickoutside) === null || L === void 0 || L.call(e, $));
    }
    function I() {
      if (e.trigger === "click" && !s()) {
        x(), w();
        const $ = !u();
        g($);
      }
    }
    function _($) {
      e.internalTrapFocus && $.key === "Escape" && (x(), w(), g(!1));
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
    return me("NPopover", {
      getTriggerElement: H,
      handleKeydown: _,
      handleMouseEnter: S,
      handleMouseLeave: T,
      handleClickOutside: P,
      handleMouseMoveOutside: C,
      setBodyInstance: t,
      positionManuallyRef: v,
      isMountedRef: n,
      zIndexRef: se(e, "zIndex"),
      extraClassRef: se(e, "internalExtraClass"),
      internalRenderBodyRef: se(e, "internalRenderBody")
    }), ot(() => {
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
      handleClick: I,
      handleMouseEnter: S,
      handleMouseLeave: T,
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
    if (!n && (r.activator ? o = Fi(r, "activator") : o = Fi(r, "trigger"), o)) {
      o = vs(o), o = o.type === sc ? h("span", [o]) : o;
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
        tb(o, l ? "nested" : n ? "manual" : this.trigger, u);
      }
    }
    return h(ra, {
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
        }), [[ia, {
          enabled: a,
          zIndex: this.zIndex
        }]]) : null, n ? null : h(oa, null, {
          default: () => o
        }), h(Jm, sn(this.$props, Qm, Object.assign(Object.assign({}, this.$attrs), {
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
}), rb = {
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
function ob(e) {
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
    fontSizeTiny: w,
    fontSizeSmall: A,
    fontSizeMedium: y,
    heightMini: S,
    heightTiny: T,
    heightSmall: C,
    heightMedium: P,
    closeColorHover: I,
    closeColorPressed: _,
    buttonColor2Hover: K,
    buttonColor2Pressed: H,
    fontWeightStrong: t
  } = e;
  return Object.assign(Object.assign({}, rb), {
    closeBorderRadius: b,
    heightTiny: S,
    heightSmall: T,
    heightMedium: C,
    heightLarge: P,
    borderRadius: b,
    opacityDisabled: f,
    fontSizeTiny: x,
    fontSizeSmall: w,
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
    closeColorHover: I,
    closeColorPressed: _,
    borderPrimary: `1px solid ${be(i, {
      alpha: 0.3
    })}`,
    textColorPrimary: i,
    colorPrimary: be(i, {
      alpha: 0.12
    }),
    colorBorderedPrimary: be(i, {
      alpha: 0.1
    }),
    closeIconColorPrimary: i,
    closeIconColorHoverPrimary: i,
    closeIconColorPressedPrimary: i,
    closeColorHoverPrimary: be(i, {
      alpha: 0.12
    }),
    closeColorPressedPrimary: be(i, {
      alpha: 0.18
    }),
    borderInfo: `1px solid ${be(a, {
      alpha: 0.3
    })}`,
    textColorInfo: a,
    colorInfo: be(a, {
      alpha: 0.12
    }),
    colorBorderedInfo: be(a, {
      alpha: 0.1
    }),
    closeIconColorInfo: a,
    closeIconColorHoverInfo: a,
    closeIconColorPressedInfo: a,
    closeColorHoverInfo: be(a, {
      alpha: 0.12
    }),
    closeColorPressedInfo: be(a, {
      alpha: 0.18
    }),
    borderSuccess: `1px solid ${be(l, {
      alpha: 0.3
    })}`,
    textColorSuccess: l,
    colorSuccess: be(l, {
      alpha: 0.12
    }),
    colorBorderedSuccess: be(l, {
      alpha: 0.1
    }),
    closeIconColorSuccess: l,
    closeIconColorHoverSuccess: l,
    closeIconColorPressedSuccess: l,
    closeColorHoverSuccess: be(l, {
      alpha: 0.12
    }),
    closeColorPressedSuccess: be(l, {
      alpha: 0.18
    }),
    borderWarning: `1px solid ${be(s, {
      alpha: 0.35
    })}`,
    textColorWarning: s,
    colorWarning: be(s, {
      alpha: 0.15
    }),
    colorBorderedWarning: be(s, {
      alpha: 0.12
    }),
    closeIconColorWarning: s,
    closeIconColorHoverWarning: s,
    closeIconColorPressedWarning: s,
    closeColorHoverWarning: be(s, {
      alpha: 0.12
    }),
    closeColorPressedWarning: be(s, {
      alpha: 0.18
    }),
    borderError: `1px solid ${be(u, {
      alpha: 0.23
    })}`,
    textColorError: u,
    colorError: be(u, {
      alpha: 0.1
    }),
    colorBorderedError: be(u, {
      alpha: 0.08
    }),
    closeIconColorError: u,
    closeIconColorHoverError: u,
    closeIconColorPressedError: u,
    closeColorHoverError: be(u, {
      alpha: 0.12
    }),
    closeColorPressedError: be(u, {
      alpha: 0.18
    })
  });
}
const ib = {
  name: "Tag",
  common: He,
  self: ob
}, ab = {
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
}, lb = k("tag", `
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
 `), z("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), z("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), z("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), z("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), N("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [z("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), z("avatar", `
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
 `, [Ve("disabled", [D("&:hover", "background-color: var(--n-color-hover-checkable);", [Ve("checked", "color: var(--n-text-color-hover-checkable);")]), D("&:active", "background-color: var(--n-color-pressed-checkable);", [Ve("checked", "color: var(--n-text-color-pressed-checkable);")])]), N("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [Ve("disabled", [D("&:hover", "background-color: var(--n-color-checked-hover);"), D("&:active", "background-color: var(--n-color-checked-pressed);")])])])]), sb = Object.assign(Object.assign(Object.assign({}, ue.props), ab), {
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
}), ub = "n-tag", gi = J({
  name: "Tag",
  props: sb,
  setup(e) {
    process.env.NODE_ENV !== "production" && ot(() => {
      e.onCheckedChange !== void 0 && at("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
    });
    const n = M(null), {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = ue("Tag", "-tag", lb, ib, e, o);
    me(ub, {
      roundRef: se(e, "round")
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
        v && pe(v, m);
      }
    }
    const d = {
      setTextContent(m) {
        const {
          value: v
        } = n;
        v && (v.textContent = m);
      }
    }, c = gt("Tag", a, o), f = O(() => {
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
          padding: w,
          closeMargin: A,
          borderRadius: y,
          opacityDisabled: S,
          textColorCheckable: T,
          textColorHoverCheckable: C,
          textColorPressedCheckable: P,
          textColorChecked: I,
          colorCheckable: _,
          colorHoverCheckable: K,
          colorPressedCheckable: H,
          colorChecked: t,
          colorCheckedHover: F,
          colorCheckedPressed: $,
          closeBorderRadius: L,
          fontWeightStrong: R,
          [U("colorBordered", m)]: V,
          [U("closeSize", v)]: Q,
          [U("closeIconSize", v)]: Z,
          [U("fontSize", v)]: oe,
          [U("height", v)]: W,
          [U("color", m)]: G,
          [U("textColor", m)]: re,
          [U("border", m)]: Be,
          [U("closeIconColor", m)]: ie,
          [U("closeIconColorHover", m)]: ge,
          [U("closeIconColorPressed", m)]: Me,
          [U("closeColorHover", m)]: le,
          [U("closeColorPressed", m)]: We
        }
      } = l.value, Te = St(A);
      return {
        "--n-font-weight-strong": R,
        "--n-avatar-size-override": `calc(${W} - 8px)`,
        "--n-bezier": x,
        "--n-border-radius": y,
        "--n-border": Be,
        "--n-close-icon-size": Z,
        "--n-close-color-pressed": We,
        "--n-close-color-hover": le,
        "--n-close-border-radius": L,
        "--n-close-icon-color": ie,
        "--n-close-icon-color-hover": ge,
        "--n-close-icon-color-pressed": Me,
        "--n-close-icon-color-disabled": ie,
        "--n-close-margin-top": Te.top,
        "--n-close-margin-right": Te.right,
        "--n-close-margin-bottom": Te.bottom,
        "--n-close-margin-left": Te.left,
        "--n-close-size": Q,
        "--n-color": g || (r.value ? V : G),
        "--n-color-checkable": _,
        "--n-color-checked": t,
        "--n-color-checked-hover": F,
        "--n-color-checked-pressed": $,
        "--n-color-hover-checkable": K,
        "--n-color-pressed-checkable": H,
        "--n-font-size": oe,
        "--n-height": W,
        "--n-opacity-disabled": S,
        "--n-padding": w,
        "--n-text-color": b || re,
        "--n-text-color-checkable": T,
        "--n-text-color-checked": I,
        "--n-text-color-hover-checkable": C,
        "--n-text-color-pressed-checkable": P
      };
    }), p = i ? Ne("tag", O(() => {
      let m = "";
      const {
        type: v,
        size: g,
        color: {
          color: b,
          textColor: x
        } = {}
      } = e;
      return m += v[0], m += g[0], b && (m += `a${Co(b)}`), x && (m += `b${Co(x)}`), r.value && (m += "c"), m;
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
    }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e)), !this.checkable && i ? h(Lr, {
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
}), Lu = J({
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
      return h(Nr, {
        clsPrefix: r,
        class: `${r}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? h(Ni, {
          clsPrefix: r,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => h(yt, {
            clsPrefix: r,
            class: `${r}-base-suffix__arrow`
          }, {
            default: () => Et(n.default, () => [h(Yx, null)])
          })
        }) : null
      });
    };
  }
}), db = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
function cb(e) {
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
    placeholderColor: w,
    placeholderColorDisabled: A,
    fontSizeTiny: y,
    fontSizeSmall: S,
    fontSizeMedium: T,
    fontSizeLarge: C,
    heightTiny: P,
    heightSmall: I,
    heightMedium: _,
    heightLarge: K,
    fontWeight: H
  } = e;
  return Object.assign(Object.assign({}, db), {
    fontSizeTiny: y,
    fontSizeSmall: S,
    fontSizeMedium: T,
    fontSizeLarge: C,
    heightTiny: P,
    heightSmall: I,
    heightMedium: _,
    heightLarge: K,
    borderRadius: n,
    fontWeight: H,
    // default
    textColor: r,
    textColorDisabled: o,
    placeholderColor: w,
    placeholderColorDisabled: A,
    color: i,
    colorDisabled: a,
    colorActive: i,
    border: `1px solid ${p}`,
    borderHover: `1px solid ${s}`,
    borderActive: `1px solid ${l}`,
    borderFocus: `1px solid ${s}`,
    boxShadowHover: "none",
    boxShadowActive: `0 0 0 2px ${be(l, {
      alpha: 0.2
    })}`,
    boxShadowFocus: `0 0 0 2px ${be(l, {
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
    boxShadowActiveWarning: `0 0 0 2px ${be(u, {
      alpha: 0.2
    })}`,
    boxShadowFocusWarning: `0 0 0 2px ${be(u, {
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
    boxShadowActiveError: `0 0 0 2px ${be(c, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${be(c, {
      alpha: 0.2
    })}`,
    colorActiveError: i,
    caretColorError: c,
    clearColor: g,
    clearColorHover: b,
    clearColorPressed: x
  });
}
const Nu = {
  name: "InternalSelection",
  common: He,
  peers: {
    Popover: jr
  },
  self: cb
}, fb = D([k("base-selection", `
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
 `, [k("base-loading", `
 color: var(--n-loading-color);
 `), k("base-selection-tags", "min-height: var(--n-height);"), z("border, state-border", `
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
 `), z("state-border", `
 z-index: 1;
 border-color: #0000;
 `), k("base-suffix", `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [z("arrow", `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), k("base-selection-overlay", `
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
 `, [z("wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), k("base-selection-placeholder", `
 color: var(--n-placeholder-color);
 `, [z("inner", `
 max-width: 100%;
 overflow: hidden;
 `)]), k("base-selection-tags", `
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
 `), k("base-selection-label", `
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
 `, [k("base-selection-input", `
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
 `, [z("content", `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), z("render-label", `
 color: var(--n-text-color);
 `)]), Ve("disabled", [D("&:hover", [z("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), N("focus", [z("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), N("active", [z("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), k("base-selection-label", "background-color: var(--n-color-active);"), k("base-selection-tags", "background-color: var(--n-color-active);")])]), N("disabled", "cursor: not-allowed;", [z("arrow", `
 color: var(--n-arrow-color-disabled);
 `), k("base-selection-label", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [k("base-selection-input", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), z("render-label", `
 color: var(--n-text-color-disabled);
 `)]), k("base-selection-tags", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), k("base-selection-placeholder", `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), k("base-selection-input-tag", `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [z("input", `
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
 `), z("mirror", `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), ["warning", "error"].map((e) => N(`${e}-status`, [z("state-border", `border: var(--n-border-${e});`), Ve("disabled", [D("&:hover", [z("state-border", `
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]), N("active", [z("state-border", `
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `), k("base-selection-label", `background-color: var(--n-color-active-${e});`), k("base-selection-tags", `background-color: var(--n-color-active-${e});`)]), N("focus", [z("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]), k("base-selection-popover", `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), k("base-selection-tag-wrapper", `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [D("&:last-child", "padding-right: 0;"), k("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [z("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]), hb = J({
  name: "InternalSelection",
  props: Object.assign(Object.assign({}, ue.props), {
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
    } = Ae(e), o = gt("InternalSelection", r, n), i = M(null), a = M(null), l = M(null), s = M(null), u = M(null), d = M(null), c = M(null), f = M(null), p = M(null), m = M(null), v = M(!1), g = M(!1), b = M(!1), x = ue("InternalSelection", "-internal-selection", fb, Nu, e, se(e, "clsPrefix")), w = O(() => e.clearable && !e.disabled && (b.value || e.active)), A = O(() => e.selectedOption ? e.renderTag ? e.renderTag({
      option: e.selectedOption,
      handleClose: () => {
      }
    }) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : je(e.selectedOption[e.labelField], e.selectedOption, !0) : e.placeholder), y = O(() => {
      const Y = e.selectedOption;
      if (Y)
        return Y[e.labelField];
    }), S = O(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions.length) : e.selectedOption !== null);
    function T() {
      var Y;
      const {
        value: ee
      } = i;
      if (ee) {
        const {
          value: Re
        } = a;
        Re && (Re.style.width = `${ee.offsetWidth}px`, e.maxTagCount !== "responsive" && ((Y = p.value) === null || Y === void 0 || Y.sync({
          showAllItemsBeforeCalculate: !1
        })));
      }
    }
    function C() {
      const {
        value: Y
      } = m;
      Y && (Y.style.display = "none");
    }
    function P() {
      const {
        value: Y
      } = m;
      Y && (Y.style.display = "inline-block");
    }
    Pe(se(e, "active"), (Y) => {
      Y || C();
    }), Pe(se(e, "pattern"), () => {
      e.multiple && Je(T);
    });
    function I(Y) {
      const {
        onFocus: ee
      } = e;
      ee && ee(Y);
    }
    function _(Y) {
      const {
        onBlur: ee
      } = e;
      ee && ee(Y);
    }
    function K(Y) {
      const {
        onDeleteOption: ee
      } = e;
      ee && ee(Y);
    }
    function H(Y) {
      const {
        onClear: ee
      } = e;
      ee && ee(Y);
    }
    function t(Y) {
      const {
        onPatternInput: ee
      } = e;
      ee && ee(Y);
    }
    function F(Y) {
      var ee;
      (!Y.relatedTarget || !(!((ee = l.value) === null || ee === void 0) && ee.contains(Y.relatedTarget))) && I(Y);
    }
    function $(Y) {
      var ee;
      !((ee = l.value) === null || ee === void 0) && ee.contains(Y.relatedTarget) || _(Y);
    }
    function L(Y) {
      H(Y);
    }
    function R() {
      b.value = !0;
    }
    function V() {
      b.value = !1;
    }
    function Q(Y) {
      !e.active || !e.filterable || Y.target !== a.value && Y.preventDefault();
    }
    function Z(Y) {
      K(Y);
    }
    const oe = M(!1);
    function W(Y) {
      if (Y.key === "Backspace" && !oe.value && !e.pattern.length) {
        const {
          selectedOptions: ee
        } = e;
        ee != null && ee.length && Z(ee[ee.length - 1]);
      }
    }
    let G = null;
    function re(Y) {
      const {
        value: ee
      } = i;
      if (ee) {
        const Re = Y.target.value;
        ee.textContent = Re, T();
      }
      e.ignoreComposition && oe.value ? G = Y : t(Y);
    }
    function Be() {
      oe.value = !0;
    }
    function ie() {
      oe.value = !1, e.ignoreComposition && t(G), G = null;
    }
    function ge(Y) {
      var ee;
      g.value = !0, (ee = e.onPatternFocus) === null || ee === void 0 || ee.call(e, Y);
    }
    function Me(Y) {
      var ee;
      g.value = !1, (ee = e.onPatternBlur) === null || ee === void 0 || ee.call(e, Y);
    }
    function le() {
      var Y, ee;
      if (e.filterable)
        g.value = !1, (Y = d.value) === null || Y === void 0 || Y.blur(), (ee = a.value) === null || ee === void 0 || ee.blur();
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
    function We() {
      var Y, ee, Re;
      e.filterable ? (g.value = !1, (Y = d.value) === null || Y === void 0 || Y.focus()) : e.multiple ? (ee = s.value) === null || ee === void 0 || ee.focus() : (Re = u.value) === null || Re === void 0 || Re.focus();
    }
    function Te() {
      const {
        value: Y
      } = a;
      Y && (P(), Y.focus());
    }
    function Ce() {
      const {
        value: Y
      } = a;
      Y && Y.blur();
    }
    function Se(Y) {
      const {
        value: ee
      } = c;
      ee && ee.setTextContent(`+${Y}`);
    }
    function ye() {
      const {
        value: Y
      } = f;
      return Y;
    }
    function tt() {
      return a.value;
    }
    let it = null;
    function ft() {
      it !== null && window.clearTimeout(it);
    }
    function ut() {
      e.active || (ft(), it = window.setTimeout(() => {
        S.value && (v.value = !0);
      }, 100));
    }
    function wt() {
      ft();
    }
    function Fe(Y) {
      Y || (ft(), v.value = !1);
    }
    Pe(S, (Y) => {
      Y || (v.value = !1);
    }), Qe(() => {
      ot(() => {
        const Y = d.value;
        Y && (e.disabled ? Y.removeAttribute("tabindex") : Y.tabIndex = g.value ? -1 : 0);
      });
    }), Zs(l, e.onResize);
    const {
      inlineThemeDisabled: ze
    } = e, Ze = O(() => {
      const {
        size: Y
      } = e, {
        common: {
          cubicBezierEaseInOut: ee
        },
        self: {
          fontWeight: Re,
          borderRadius: pn,
          color: Ot,
          placeholderColor: Mt,
          textColor: Yt,
          paddingSingle: At,
          paddingMultiple: It,
          caretColor: Zt,
          colorDisabled: ht,
          textColorDisabled: Bt,
          placeholderColorDisabled: B,
          colorActive: j,
          boxShadowFocus: X,
          boxShadowActive: ne,
          boxShadowHover: ae,
          border: fe,
          borderFocus: ve,
          borderHover: xe,
          borderActive: ke,
          arrowColor: xt,
          arrowColorDisabled: Rn,
          loadingColor: qo,
          // form warning
          colorActiveWarning: On,
          boxShadowFocusWarning: Mn,
          boxShadowActiveWarning: Ko,
          boxShadowHoverWarning: Uo,
          borderWarning: Kr,
          borderFocusWarning: Jt,
          borderHoverWarning: E,
          borderActiveWarning: q,
          // form error
          colorActiveError: de,
          boxShadowFocusError: De,
          boxShadowActiveError: Ie,
          boxShadowHoverError: $e,
          borderError: _t,
          borderFocusError: Lt,
          borderHoverError: Nt,
          borderActiveError: gn,
          // clear
          clearColor: xn,
          clearColorHover: ar,
          clearColorPressed: Go,
          clearSize: Xo,
          // arrow
          arrowSize: Yo,
          [U("height", Y)]: Zo,
          [U("fontSize", Y)]: Jo
        }
      } = x.value, In = St(At), _n = St(It);
      return {
        "--n-bezier": ee,
        "--n-border": fe,
        "--n-border-active": ke,
        "--n-border-focus": ve,
        "--n-border-hover": xe,
        "--n-border-radius": pn,
        "--n-box-shadow-active": ne,
        "--n-box-shadow-focus": X,
        "--n-box-shadow-hover": ae,
        "--n-caret-color": Zt,
        "--n-color": Ot,
        "--n-color-active": j,
        "--n-color-disabled": ht,
        "--n-font-size": Jo,
        "--n-height": Zo,
        "--n-padding-single-top": In.top,
        "--n-padding-multiple-top": _n.top,
        "--n-padding-single-right": In.right,
        "--n-padding-multiple-right": _n.right,
        "--n-padding-single-left": In.left,
        "--n-padding-multiple-left": _n.left,
        "--n-padding-single-bottom": In.bottom,
        "--n-padding-multiple-bottom": _n.bottom,
        "--n-placeholder-color": Mt,
        "--n-placeholder-color-disabled": B,
        "--n-text-color": Yt,
        "--n-text-color-disabled": Bt,
        "--n-arrow-color": xt,
        "--n-arrow-color-disabled": Rn,
        "--n-loading-color": qo,
        // form warning
        "--n-color-active-warning": On,
        "--n-box-shadow-focus-warning": Mn,
        "--n-box-shadow-active-warning": Ko,
        "--n-box-shadow-hover-warning": Uo,
        "--n-border-warning": Kr,
        "--n-border-focus-warning": Jt,
        "--n-border-hover-warning": E,
        "--n-border-active-warning": q,
        // form error
        "--n-color-active-error": de,
        "--n-box-shadow-focus-error": De,
        "--n-box-shadow-active-error": Ie,
        "--n-box-shadow-hover-error": $e,
        "--n-border-error": _t,
        "--n-border-focus-error": Lt,
        "--n-border-hover-error": Nt,
        "--n-border-active-error": gn,
        // clear
        "--n-clear-size": Xo,
        "--n-clear-color": xn,
        "--n-clear-color-hover": ar,
        "--n-clear-color-pressed": Go,
        // arrow-size
        "--n-arrow-size": Yo,
        // font-weight
        "--n-font-weight": Re
      };
    }), Ue = ze ? Ne("internal-selection", O(() => e.size[0]), Ze, e) : void 0;
    return {
      mergedTheme: x,
      mergedClearable: w,
      mergedClsPrefix: n,
      rtlEnabled: o,
      patternInputFocused: g,
      filterablePlaceholder: A,
      label: y,
      selected: S,
      showTagsPanel: v,
      isComposing: oe,
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
      handleMouseDown: Q,
      handleFocusin: F,
      handleClear: L,
      handleMouseEnter: R,
      handleMouseLeave: V,
      handleDeleteOption: Z,
      handlePatternKeyDown: W,
      handlePatternInputInput: re,
      handlePatternInputBlur: Me,
      handlePatternInputFocus: ge,
      handleMouseEnterCounter: ut,
      handleMouseLeaveCounter: wt,
      handleFocusout: $,
      handleCompositionEnd: ie,
      handleCompositionStart: Be,
      onPopoverUpdateShow: Fe,
      focus: We,
      focusInput: Te,
      blur: le,
      blurInput: Ce,
      updateCounter: Se,
      getCounter: ye,
      getTail: tt,
      renderLabel: e.renderLabel,
      cssVars: ze ? void 0 : Ze,
      themeClass: Ue == null ? void 0 : Ue.themeClass,
      onRender: Ue == null ? void 0 : Ue.onRender
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
    const p = a === "responsive", m = typeof a == "number", v = p || m, g = h(Di, null, {
      default: () => h(Lu, {
        clsPrefix: s,
        loading: this.loading,
        showArrow: this.showArrow,
        showClear: this.mergedClearable && this.selected,
        onClear: this.handleClear
      }, {
        default: () => {
          var x, w;
          return (w = (x = this.$slots).arrow) === null || w === void 0 ? void 0 : w.call(x);
        }
      })
    });
    let b;
    if (n) {
      const {
        labelField: x
      } = this, w = (t) => h("div", {
        class: `${s}-base-selection-tag-wrapper`,
        key: t.value
      }, c ? c({
        option: t,
        handleClose: () => {
          this.handleDeleteOption(t);
        }
      }) : h(gi, {
        size: r,
        closable: !t.disabled,
        disabled: o,
        onClose: () => {
          this.handleDeleteOption(t);
        },
        internalCloseIsButtonTag: !1,
        internalCloseFocusable: !1
      }, {
        default: () => f ? f(t, !0) : je(t[x], t, !0)
      })), A = () => (m ? this.selectedOptions.slice(0, a) : this.selectedOptions).map(w), y = i ? h("div", {
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
      }, h(gi, {
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
        }, h(gi, {
          size: r,
          ref: "counterRef",
          onMouseenter: this.handleMouseEnterCounter,
          disabled: o
        }, {
          default: () => `+${t}`
        })));
      }
      const C = p ? i ? h(pl, {
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
      }) : h(pl, {
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
      }) : m && T ? A().concat(T) : A(), P = v ? () => h("div", {
        class: `${s}-base-selection-popover`
      }, p ? A() : this.selectedOptions.map(w)) : void 0, I = v ? Object.assign({
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
      b = h(et, null, v ? h(Vr, Object.assign({}, I, {
        scrollable: !0,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => H,
        default: P
      }) : H, K);
    } else if (i) {
      const x = this.pattern || this.isComposing, w = this.active ? !x : !this.selected, A = this.active ? !1 : this.selected;
      b = h("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-label`,
        title: this.patternInputFocused ? void 0 : ml(this.label)
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
      }) : f ? f(this.selectedOption, !0) : je(this.label, this.selectedOption, !0))) : null, w ? h("div", {
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
        title: ml(this.label),
        key: "input"
      }, h("div", {
        class: `${s}-base-selection-input__content`
      }, c ? c({
        option: this.selectedOption,
        handleClose: () => {
        }
      }) : f ? f(this.selectedOption, !0) : je(this.label, this.selectedOption, !0))) : h("div", {
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
  cubicBezierEaseInOut: en
} = vn;
function vb({
  duration: e = ".2s",
  delay: n = ".1s"
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
 opacity ${e} ${en},
 max-width ${e} ${en} ${n},
 margin-left ${e} ${en} ${n},
 margin-right ${e} ${en} ${n};
 `), D("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${en} ${n},
 max-width ${e} ${en},
 margin-left ${e} ${en},
 margin-right ${e} ${en};
 `)];
}
const pb = k("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), gb = J({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    Tn("-base-wave", pb, se(e, "clsPrefix"));
    const n = M(null), r = M(!1);
    let o = null;
    return Ye(() => {
      o !== null && window.clearTimeout(o);
    }), {
      active: r,
      selfRef: n,
      play() {
        o !== null && (window.clearTimeout(o), r.value = !1, o = null), Je(() => {
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
}), {
  cubicBezierEaseInOut: Pt,
  cubicBezierEaseOut: xb,
  cubicBezierEaseIn: mb
} = vn;
function Hu({
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
  return [D(`&.fade-in-height-expand-transition-${d}-from,
 &.fade-in-height-expand-transition-${u}-to`, Object.assign(Object.assign({}, a), {
    opacity: 1
  })), D(`&.fade-in-height-expand-transition-${d}-to,
 &.fade-in-height-expand-transition-${u}-from`, Object.assign(Object.assign({}, l), {
    opacity: 0,
    marginTop: "0 !important",
    marginBottom: "0 !important",
    paddingTop: i ? "0 !important" : void 0,
    paddingBottom: i ? "0 !important" : void 0
  })), D(`&.fade-in-height-expand-transition-${d}-active`, `
 overflow: ${e};
 transition:
 max-height ${n} ${Pt} ${o},
 opacity ${n} ${xb} ${o},
 margin-top ${n} ${Pt} ${o},
 margin-bottom ${n} ${Pt} ${o},
 padding-top ${n} ${Pt} ${o},
 padding-bottom ${n} ${Pt} ${o}
 ${r ? `,${r}` : ""}
 `), D(`&.fade-in-height-expand-transition-${u}-active`, `
 overflow: ${e};
 transition:
 max-height ${n} ${Pt},
 opacity ${n} ${mb},
 margin-top ${n} ${Pt},
 margin-bottom ${n} ${Pt},
 padding-top ${n} ${Pt},
 padding-bottom ${n} ${Pt}
 ${r ? `,${r}` : ""}
 `)];
}
const bb = rr && "chrome" in window;
rr && navigator.userAgent.includes("Firefox");
const ju = rr && navigator.userAgent.includes("Safari") && !bb, Cb = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function yb(e) {
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
    fontSizeLarge: w,
    heightTiny: A,
    heightSmall: y,
    heightMedium: S,
    heightLarge: T,
    actionColor: C,
    clearColor: P,
    clearColorHover: I,
    clearColorPressed: _,
    placeholderColor: K,
    placeholderColorDisabled: H,
    iconColor: t,
    iconColorDisabled: F,
    iconColorHover: $,
    iconColorPressed: L,
    fontWeight: R
  } = e;
  return Object.assign(Object.assign({}, Cb), {
    fontWeight: R,
    countTextColorDisabled: o,
    countTextColor: r,
    heightTiny: A,
    heightSmall: y,
    heightMedium: S,
    heightLarge: T,
    fontSizeTiny: g,
    fontSizeSmall: b,
    fontSizeMedium: x,
    fontSizeLarge: w,
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
    boxShadowFocus: `0 0 0 2px ${be(i, {
      alpha: 0.2
    })}`,
    loadingColor: i,
    // warning
    loadingColorWarning: d,
    borderWarning: `1px solid ${d}`,
    borderHoverWarning: `1px solid ${c}`,
    colorFocusWarning: l,
    borderFocusWarning: `1px solid ${c}`,
    boxShadowFocusWarning: `0 0 0 2px ${be(d, {
      alpha: 0.2
    })}`,
    caretColorWarning: d,
    // error
    loadingColorError: f,
    borderError: `1px solid ${f}`,
    borderHoverError: `1px solid ${p}`,
    colorFocusError: l,
    borderFocusError: `1px solid ${p}`,
    boxShadowFocusError: `0 0 0 2px ${be(f, {
      alpha: 0.2
    })}`,
    caretColorError: f,
    clearColor: P,
    clearColorHover: I,
    clearColorPressed: _,
    iconColor: t,
    iconColorDisabled: F,
    iconColorHover: $,
    iconColorPressed: L,
    suffixTextColor: n
  });
}
const Wu = {
  name: "Input",
  common: He,
  self: yb
}, Vu = "n-input", wb = k("input", `
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
  z("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),
  z("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
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
  z("input-el, textarea-el", `
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
 `), D("&:-webkit-autofill ~", [z("placeholder", "display: none;")])]),
  N("round", [Ve("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  z("placeholder", `
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
  N("textarea", [z("placeholder", "overflow: visible;")]),
  Ve("autosize", "width: 100%;"),
  N("autosize", [z("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  k("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),
  z("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),
  z("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [D("&[type=password]::-ms-reveal", "display: none;"), D("+", [z("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  Ve("textarea", [z("placeholder", "white-space: nowrap;")]),
  z("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  N("textarea", "width: 100%;", [k("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), N("resizable", [k("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), z("textarea-el, textarea-mirror, placeholder", `
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
 `), z("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
  // pair
  N("pair", [z("input-el, placeholder", "text-align: center;"), z("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [k("icon", `
 color: var(--n-icon-color);
 `), k("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  N("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [z("border", "border: var(--n-border-disabled);"), z("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), z("placeholder", "color: var(--n-placeholder-color-disabled);"), z("separator", "color: var(--n-text-color-disabled);", [k("icon", `
 color: var(--n-icon-color-disabled);
 `), k("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), k("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), z("suffix, prefix", "color: var(--n-text-color-disabled);", [k("icon", `
 color: var(--n-icon-color-disabled);
 `), k("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  Ve("disabled", [z("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [D("&:hover", `
 color: var(--n-icon-color-hover);
 `), D("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), D("&:hover", [z("state-border", "border: var(--n-border-hover);")]), N("focus", "background-color: var(--n-color-focus);", [z("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),
  z("border, state-border", `
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
  z("state-border", `
 border-color: #0000;
 z-index: 1;
 `),
  z("prefix", "margin-right: 4px;"),
  z("suffix", `
 margin-left: 4px;
 `),
  z("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [k("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), k("base-clear", `
 font-size: var(--n-icon-size);
 `, [z("placeholder", [k("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), D(">", [k("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), k("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  k("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((e) => N(`${e}-status`, [Ve("disabled", [k("base-loading", `
 color: var(--n-loading-color-${e})
 `), z("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), z("state-border", `
 border: var(--n-border-${e});
 `), D("&:hover", [z("state-border", `
 border: var(--n-border-hover-${e});
 `)]), D("&:focus", `
 background-color: var(--n-color-focus-${e});
 `, [z("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]), N("focus", `
 background-color: var(--n-color-focus-${e});
 `, [z("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))
]), Bb = k("input", [N("disabled", [z("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]);
function Sb(e) {
  let n = 0;
  for (const r of e)
    n++;
  return n;
}
function oo(e) {
  return e === "" || e == null;
}
function Ab(e) {
  const n = M(null);
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
  return Pe(e, i), {
    recordCursor: r,
    restoreCursor: o
  };
}
const es = J({
  name: "InputWordCount",
  setup(e, {
    slots: n
  }) {
    const {
      mergedValueRef: r,
      maxlengthRef: o,
      mergedClsPrefixRef: i,
      countGraphemesRef: a
    } = he(Vu), l = O(() => {
      const {
        value: s
      } = r;
      return s === null || Array.isArray(s) ? 0 : (a.value || Sb)(s);
    });
    return () => {
      const {
        value: s
      } = o, {
        value: u
      } = r;
      return h("span", {
        class: `${i.value}-input-word-count`
      }, Pi(n.default, {
        value: u === null || Array.isArray(u) ? "" : u
      }, () => [s === void 0 ? l.value : `${l.value} / ${s}`]));
    };
  }
}), Fb = Object.assign(Object.assign({}, ue.props), {
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
}), Pb = J({
  name: "Input",
  props: Fb,
  setup(e) {
    process.env.NODE_ENV !== "production" && ot(() => {
      e.showPasswordToggle && at("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: n,
      mergedBorderedRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = ue("Input", "-input", wb, Wu, e, n);
    ju && Tn("-input-safari", Bb, n);
    const l = M(null), s = M(null), u = M(null), d = M(null), c = M(null), f = M(null), p = M(null), m = Ab(p), v = M(null), {
      localeRef: g
    } = $r("Input"), b = M(e.defaultValue), x = se(e, "value"), w = Jn(x, b), A = ua(e), {
      mergedSizeRef: y,
      mergedDisabledRef: S,
      mergedStatusRef: T
    } = A, C = M(!1), P = M(!1), I = M(!1), _ = M(!1);
    let K = null;
    const H = O(() => {
      const {
        placeholder: E,
        pair: q
      } = e;
      return q ? Array.isArray(E) ? E : E === void 0 ? ["", ""] : [E, E] : E === void 0 ? [g.value.placeholder] : [E];
    }), t = O(() => {
      const {
        value: E
      } = I, {
        value: q
      } = w, {
        value: de
      } = H;
      return !E && (oo(q) || Array.isArray(q) && oo(q[0])) && de[0];
    }), F = O(() => {
      const {
        value: E
      } = I, {
        value: q
      } = w, {
        value: de
      } = H;
      return !E && de[1] && (oo(q) || Array.isArray(q) && oo(q[1]));
    }), $ = qe(() => e.internalForceFocus || C.value), L = qe(() => {
      if (S.value || e.readonly || !e.clearable || !$.value && !P.value)
        return !1;
      const {
        value: E
      } = w, {
        value: q
      } = $;
      return e.pair ? !!(Array.isArray(E) && (E[0] || E[1])) && (P.value || q) : !!E && (P.value || q);
    }), R = O(() => {
      const {
        showPasswordOn: E
      } = e;
      if (E)
        return E;
      if (e.showPasswordToggle) return "click";
    }), V = M(!1), Q = O(() => {
      const {
        textDecoration: E
      } = e;
      return E ? Array.isArray(E) ? E.map((q) => ({
        textDecoration: q
      })) : [{
        textDecoration: E
      }] : ["", ""];
    }), Z = M(void 0), oe = () => {
      var E, q;
      if (e.type === "textarea") {
        const {
          autosize: de
        } = e;
        if (de && (Z.value = (q = (E = v.value) === null || E === void 0 ? void 0 : E.$el) === null || q === void 0 ? void 0 : q.offsetWidth), !s.value || typeof de == "boolean") return;
        const {
          paddingTop: De,
          paddingBottom: Ie,
          lineHeight: $e
        } = window.getComputedStyle(s.value), _t = Number(De.slice(0, -2)), Lt = Number(Ie.slice(0, -2)), Nt = Number($e.slice(0, -2)), {
          value: gn
        } = u;
        if (!gn) return;
        if (de.minRows) {
          const xn = Math.max(de.minRows, 1), ar = `${_t + Lt + Nt * xn}px`;
          gn.style.minHeight = ar;
        }
        if (de.maxRows) {
          const xn = `${_t + Lt + Nt * de.maxRows}px`;
          gn.style.maxHeight = xn;
        }
      }
    }, W = O(() => {
      const {
        maxlength: E
      } = e;
      return E === void 0 ? void 0 : Number(E);
    });
    Qe(() => {
      const {
        value: E
      } = w;
      Array.isArray(E) || ke(E);
    });
    const G = Rr().proxy;
    function re(E, q) {
      const {
        onUpdateValue: de,
        "onUpdate:value": De,
        onInput: Ie
      } = e, {
        nTriggerFormInput: $e
      } = A;
      de && pe(de, E, q), De && pe(De, E, q), Ie && pe(Ie, E, q), b.value = E, $e();
    }
    function Be(E, q) {
      const {
        onChange: de
      } = e, {
        nTriggerFormChange: De
      } = A;
      de && pe(de, E, q), b.value = E, De();
    }
    function ie(E) {
      const {
        onBlur: q
      } = e, {
        nTriggerFormBlur: de
      } = A;
      q && pe(q, E), de();
    }
    function ge(E) {
      const {
        onFocus: q
      } = e, {
        nTriggerFormFocus: de
      } = A;
      q && pe(q, E), de();
    }
    function Me(E) {
      const {
        onClear: q
      } = e;
      q && pe(q, E);
    }
    function le(E) {
      const {
        onInputBlur: q
      } = e;
      q && pe(q, E);
    }
    function We(E) {
      const {
        onInputFocus: q
      } = e;
      q && pe(q, E);
    }
    function Te() {
      const {
        onDeactivate: E
      } = e;
      E && pe(E);
    }
    function Ce() {
      const {
        onActivate: E
      } = e;
      E && pe(E);
    }
    function Se(E) {
      const {
        onClick: q
      } = e;
      q && pe(q, E);
    }
    function ye(E) {
      const {
        onWrapperFocus: q
      } = e;
      q && pe(q, E);
    }
    function tt(E) {
      const {
        onWrapperBlur: q
      } = e;
      q && pe(q, E);
    }
    function it() {
      I.value = !0;
    }
    function ft(E) {
      I.value = !1, E.target === f.value ? ut(E, 1) : ut(E, 0);
    }
    function ut(E, q = 0, de = "input") {
      const De = E.target.value;
      if (ke(De), E instanceof InputEvent && !E.isComposing && (I.value = !1), e.type === "textarea") {
        const {
          value: $e
        } = v;
        $e && $e.syncUnifiedContainer();
      }
      if (K = De, I.value) return;
      m.recordCursor();
      const Ie = wt(De);
      if (Ie)
        if (!e.pair)
          de === "input" ? re(De, {
            source: q
          }) : Be(De, {
            source: q
          });
        else {
          let {
            value: $e
          } = w;
          Array.isArray($e) ? $e = [$e[0], $e[1]] : $e = ["", ""], $e[q] = De, de === "input" ? re($e, {
            source: q
          }) : Be($e, {
            source: q
          });
        }
      G.$forceUpdate(), Ie || Je(m.restoreCursor);
    }
    function wt(E) {
      const {
        countGraphemes: q,
        maxlength: de,
        minlength: De
      } = e;
      if (q) {
        let $e;
        if (de !== void 0 && ($e === void 0 && ($e = q(E)), $e > Number(de)) || De !== void 0 && ($e === void 0 && ($e = q(E)), $e < Number(de)))
          return !1;
      }
      const {
        allowInput: Ie
      } = e;
      return typeof Ie == "function" ? Ie(E) : !0;
    }
    function Fe(E) {
      le(E), E.relatedTarget === l.value && Te(), E.relatedTarget !== null && (E.relatedTarget === c.value || E.relatedTarget === f.value || E.relatedTarget === s.value) || (_.value = !1), Y(E, "blur"), p.value = null;
    }
    function ze(E, q) {
      We(E), C.value = !0, _.value = !0, Ce(), Y(E, "focus"), q === 0 ? p.value = c.value : q === 1 ? p.value = f.value : q === 2 && (p.value = s.value);
    }
    function Ze(E) {
      e.passivelyActivated && (tt(E), Y(E, "blur"));
    }
    function Ue(E) {
      e.passivelyActivated && (C.value = !0, ye(E), Y(E, "focus"));
    }
    function Y(E, q) {
      E.relatedTarget !== null && (E.relatedTarget === c.value || E.relatedTarget === f.value || E.relatedTarget === s.value || E.relatedTarget === l.value) || (q === "focus" ? (ge(E), C.value = !0) : q === "blur" && (ie(E), C.value = !1));
    }
    function ee(E, q) {
      ut(E, q, "change");
    }
    function Re(E) {
      Se(E);
    }
    function pn(E) {
      Me(E), Ot();
    }
    function Ot() {
      e.pair ? (re(["", ""], {
        source: "clear"
      }), Be(["", ""], {
        source: "clear"
      })) : (re("", {
        source: "clear"
      }), Be("", {
        source: "clear"
      }));
    }
    function Mt(E) {
      const {
        onMousedown: q
      } = e;
      q && q(E);
      const {
        tagName: de
      } = E.target;
      if (de !== "INPUT" && de !== "TEXTAREA") {
        if (e.resizable) {
          const {
            value: De
          } = l;
          if (De) {
            const {
              left: Ie,
              top: $e,
              width: _t,
              height: Lt
            } = De.getBoundingClientRect(), Nt = 14;
            if (Ie + _t - Nt < E.clientX && E.clientX < Ie + _t && $e + Lt - Nt < E.clientY && E.clientY < $e + Lt)
              return;
          }
        }
        E.preventDefault(), C.value || X();
      }
    }
    function Yt() {
      var E;
      P.value = !0, e.type === "textarea" && ((E = v.value) === null || E === void 0 || E.handleMouseEnterWrapper());
    }
    function At() {
      var E;
      P.value = !1, e.type === "textarea" && ((E = v.value) === null || E === void 0 || E.handleMouseLeaveWrapper());
    }
    function It() {
      S.value || R.value === "click" && (V.value = !V.value);
    }
    function Zt(E) {
      if (S.value) return;
      E.preventDefault();
      const q = (De) => {
        De.preventDefault(), Ee("mouseup", document, q);
      };
      if (Le("mouseup", document, q), R.value !== "mousedown") return;
      V.value = !0;
      const de = () => {
        V.value = !1, Ee("mouseup", document, de);
      };
      Le("mouseup", document, de);
    }
    function ht(E) {
      e.onKeyup && pe(e.onKeyup, E);
    }
    function Bt(E) {
      switch (e.onKeydown && pe(e.onKeydown, E), E.key) {
        case "Escape":
          j();
          break;
        case "Enter":
          B(E);
          break;
      }
    }
    function B(E) {
      var q, de;
      if (e.passivelyActivated) {
        const {
          value: De
        } = _;
        if (De) {
          e.internalDeactivateOnEnter && j();
          return;
        }
        E.preventDefault(), e.type === "textarea" ? (q = s.value) === null || q === void 0 || q.focus() : (de = c.value) === null || de === void 0 || de.focus();
      }
    }
    function j() {
      e.passivelyActivated && (_.value = !1, Je(() => {
        var E;
        (E = l.value) === null || E === void 0 || E.focus();
      }));
    }
    function X() {
      var E, q, de;
      S.value || (e.passivelyActivated ? (E = l.value) === null || E === void 0 || E.focus() : ((q = s.value) === null || q === void 0 || q.focus(), (de = c.value) === null || de === void 0 || de.focus()));
    }
    function ne() {
      var E;
      !((E = l.value) === null || E === void 0) && E.contains(document.activeElement) && document.activeElement.blur();
    }
    function ae() {
      var E, q;
      (E = s.value) === null || E === void 0 || E.select(), (q = c.value) === null || q === void 0 || q.select();
    }
    function fe() {
      S.value || (s.value ? s.value.focus() : c.value && c.value.focus());
    }
    function ve() {
      const {
        value: E
      } = l;
      E != null && E.contains(document.activeElement) && E !== document.activeElement && j();
    }
    function xe(E) {
      if (e.type === "textarea") {
        const {
          value: q
        } = s;
        q == null || q.scrollTo(E);
      } else {
        const {
          value: q
        } = c;
        q == null || q.scrollTo(E);
      }
    }
    function ke(E) {
      const {
        type: q,
        pair: de,
        autosize: De
      } = e;
      if (!de && De)
        if (q === "textarea") {
          const {
            value: Ie
          } = u;
          Ie && (Ie.textContent = `${E ?? ""}\r
`);
        } else {
          const {
            value: Ie
          } = d;
          Ie && (E ? Ie.textContent = E : Ie.innerHTML = "&nbsp;");
        }
    }
    function xt() {
      oe();
    }
    const Rn = M({
      top: "0"
    });
    function qo(E) {
      var q;
      const {
        scrollTop: de
      } = E.target;
      Rn.value.top = `${-de}px`, (q = v.value) === null || q === void 0 || q.syncUnifiedContainer();
    }
    let On = null;
    ot(() => {
      const {
        autosize: E,
        type: q
      } = e;
      E && q === "textarea" ? On = Pe(w, (de) => {
        !Array.isArray(de) && de !== K && ke(de);
      }) : On == null || On();
    });
    let Mn = null;
    ot(() => {
      e.type === "textarea" ? Mn = Pe(w, (E) => {
        var q;
        !Array.isArray(E) && E !== K && ((q = v.value) === null || q === void 0 || q.syncUnifiedContainer());
      }) : Mn == null || Mn();
    }), me(Vu, {
      mergedValueRef: w,
      maxlengthRef: W,
      mergedClsPrefixRef: n,
      countGraphemesRef: se(e, "countGraphemes")
    });
    const Ko = {
      wrapperElRef: l,
      inputElRef: c,
      textareaElRef: s,
      isCompositing: I,
      clear: Ot,
      focus: X,
      blur: ne,
      select: ae,
      deactivate: ve,
      activate: fe,
      scrollTo: xe
    }, Uo = gt("Input", i, n), Kr = O(() => {
      const {
        value: E
      } = y, {
        common: {
          cubicBezierEaseInOut: q
        },
        self: {
          color: de,
          borderRadius: De,
          textColor: Ie,
          caretColor: $e,
          caretColorError: _t,
          caretColorWarning: Lt,
          textDecorationColor: Nt,
          border: gn,
          borderDisabled: xn,
          borderHover: ar,
          borderFocus: Go,
          placeholderColor: Xo,
          placeholderColorDisabled: Yo,
          lineHeightTextarea: Zo,
          colorDisabled: Jo,
          colorFocus: In,
          textColorDisabled: _n,
          boxShadowFocus: Pd,
          iconSize: $d,
          colorFocusWarning: Dd,
          boxShadowFocusWarning: Ed,
          borderWarning: zd,
          borderFocusWarning: kd,
          borderHoverWarning: Td,
          colorFocusError: Rd,
          boxShadowFocusError: Od,
          borderError: Md,
          borderFocusError: Id,
          borderHoverError: _d,
          clearSize: Ld,
          clearColor: Nd,
          clearColorHover: Hd,
          clearColorPressed: jd,
          iconColor: Wd,
          iconColorDisabled: Vd,
          suffixTextColor: qd,
          countTextColor: Kd,
          countTextColorDisabled: Ud,
          iconColorHover: Gd,
          iconColorPressed: Xd,
          loadingColor: Yd,
          loadingColorError: Zd,
          loadingColorWarning: Jd,
          fontWeight: Qd,
          [U("padding", E)]: ec,
          [U("fontSize", E)]: tc,
          [U("height", E)]: nc
        }
      } = a.value, {
        left: rc,
        right: oc
      } = St(ec);
      return {
        "--n-bezier": q,
        "--n-count-text-color": Kd,
        "--n-count-text-color-disabled": Ud,
        "--n-color": de,
        "--n-font-size": tc,
        "--n-font-weight": Qd,
        "--n-border-radius": De,
        "--n-height": nc,
        "--n-padding-left": rc,
        "--n-padding-right": oc,
        "--n-text-color": Ie,
        "--n-caret-color": $e,
        "--n-text-decoration-color": Nt,
        "--n-border": gn,
        "--n-border-disabled": xn,
        "--n-border-hover": ar,
        "--n-border-focus": Go,
        "--n-placeholder-color": Xo,
        "--n-placeholder-color-disabled": Yo,
        "--n-icon-size": $d,
        "--n-line-height-textarea": Zo,
        "--n-color-disabled": Jo,
        "--n-color-focus": In,
        "--n-text-color-disabled": _n,
        "--n-box-shadow-focus": Pd,
        "--n-loading-color": Yd,
        // form warning
        "--n-caret-color-warning": Lt,
        "--n-color-focus-warning": Dd,
        "--n-box-shadow-focus-warning": Ed,
        "--n-border-warning": zd,
        "--n-border-focus-warning": kd,
        "--n-border-hover-warning": Td,
        "--n-loading-color-warning": Jd,
        // form error
        "--n-caret-color-error": _t,
        "--n-color-focus-error": Rd,
        "--n-box-shadow-focus-error": Od,
        "--n-border-error": Md,
        "--n-border-focus-error": Id,
        "--n-border-hover-error": _d,
        "--n-loading-color-error": Zd,
        // clear-button
        "--n-clear-color": Nd,
        "--n-clear-size": Ld,
        "--n-clear-color-hover": Hd,
        "--n-clear-color-pressed": jd,
        "--n-icon-color": Wd,
        "--n-icon-color-hover": Gd,
        "--n-icon-color-pressed": Xd,
        "--n-icon-color-disabled": Vd,
        "--n-suffix-text-color": qd
      };
    }), Jt = o ? Ne("input", O(() => {
      const {
        value: E
      } = y;
      return E[0];
    }), Kr, e) : void 0;
    return Object.assign(Object.assign({}, Ko), {
      // DOM ref
      wrapperElRef: l,
      inputElRef: c,
      inputMirrorElRef: d,
      inputEl2Ref: f,
      textareaElRef: s,
      textareaMirrorElRef: u,
      textareaScrollbarInstRef: v,
      // value
      rtlEnabled: Uo,
      uncontrolledValue: b,
      mergedValue: w,
      passwordVisible: V,
      mergedPlaceholder: H,
      showPlaceholder1: t,
      showPlaceholder2: F,
      mergedFocus: $,
      isComposing: I,
      activated: _,
      showClearButton: L,
      mergedSize: y,
      mergedDisabled: S,
      textDecorationStyle: Q,
      mergedClsPrefix: n,
      mergedBordered: r,
      mergedShowPasswordOn: R,
      placeholderStyle: Rn,
      mergedStatus: T,
      textAreaScrollContainerWidth: Z,
      // methods
      handleTextAreaScroll: qo,
      handleCompositionStart: it,
      handleCompositionEnd: ft,
      handleInput: ut,
      handleInputBlur: Fe,
      handleInputFocus: ze,
      handleWrapperBlur: Ze,
      handleWrapperFocus: Ue,
      handleMouseEnter: Yt,
      handleMouseLeave: At,
      handleMouseDown: Mt,
      handleChange: ee,
      handleClick: Re,
      handleClear: pn,
      handlePasswordToggleClick: It,
      handlePasswordToggleMousedown: Zt,
      handleWrapperKeydown: Bt,
      handleWrapperKeyup: ht,
      handleTextAreaMirrorResize: xt,
      getTextareaScrollContainer: () => s.value,
      mergedTheme: a,
      cssVars: o ? void 0 : Kr,
      themeClass: Jt == null ? void 0 : Jt.themeClass,
      onRender: Jt == null ? void 0 : Jt.onRender
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
    }, d)), a === "textarea" ? h(Hr, {
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
        return h(et, null, h("textarea", Object.assign({}, this.inputProps, {
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
        }, this.mergedPlaceholder[0]) : null, this.autosize ? h(Ar, {
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
    }, [_e(u["clear-icon-placeholder"], (c) => (this.clearable || c) && h(Ni, {
      clsPrefix: r,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => c,
      icon: () => {
        var f, p;
        return (p = (f = this.$slots)["clear-icon"]) === null || p === void 0 ? void 0 : p.call(f);
      }
    })), this.internalLoadingBeforeSuffix ? null : d, this.loading !== void 0 ? h(Lu, {
      clsPrefix: r,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? d : null, this.showCount && this.type !== "textarea" ? h(es, null, {
      default: (c) => {
        var f;
        return (f = u.count) === null || f === void 0 ? void 0 : f.call(u, c);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? h("div", {
      class: `${r}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? Et(u["password-visible-icon"], () => [h(yt, {
      clsPrefix: r
    }, {
      default: () => h(tm, null)
    })]) : Et(u["password-invisible-icon"], () => [h(yt, {
      clsPrefix: r
    }, {
      default: () => h(nm, null)
    })])) : null]) : null)), this.pair ? h("span", {
      class: `${r}-input__separator`
    }, Et(u.separator, () => [this.separator])) : null, this.pair ? h("div", {
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
    }, [this.clearable && h(Ni, {
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
    }) : null, this.showCount && a === "textarea" ? h(es, null, {
      default: (d) => {
        var c;
        const {
          renderCount: f
        } = this;
        return f ? f(d) : (c = u.count) === null || c === void 0 ? void 0 : c.call(u, d);
      }
    }) : null);
  }
}), $b = k("input-group", `
 display: inline-flex;
 width: 100%;
 flex-wrap: nowrap;
 vertical-align: bottom;
`, [D(">", [k("input", [D("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), D("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 margin-left: -1px!important;
 `)]), k("button", [D("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [z("state-border, border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)]), D("&:not(:first-child)", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [z("state-border, border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])]), D("*", [D("&:not(:last-child)", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `, [D(">", [k("input", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), k("base-selection", [k("base-selection-label", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), k("base-selection-tags", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `), z("box-shadow, border, state-border", `
 border-top-right-radius: 0!important;
 border-bottom-right-radius: 0!important;
 `)])])]), D("&:not(:first-child)", `
 margin-left: -1px!important;
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `, [D(">", [k("input", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), k("base-selection", [k("base-selection-label", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), k("base-selection-tags", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `), z("box-shadow, border, state-border", `
 border-top-left-radius: 0!important;
 border-bottom-left-radius: 0!important;
 `)])])])])])]), Db = {}, Eb = J({
  name: "InputGroup",
  props: Db,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Ae(e);
    return Tn("-input-group", $b, n), {
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
}), zb = k("input-group-label", `
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
`, [z("border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-group-label-border);
 transition: border-color .3s var(--n-bezier);
 `)]), kb = Object.assign(Object.assign({}, ue.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
}), Tb = J({
  name: "InputGroupLabel",
  props: kb,
  setup(e) {
    const {
      mergedBorderedRef: n,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ue("Input", "-input-group-label", zb, Wu, e, r), a = O(() => {
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
          [U("fontSize", s)]: v,
          [U("height", s)]: g
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
    }), l = o ? Ne("input-group-label", O(() => e.size[0]), a, e) : void 0;
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
function Do(e) {
  return e.type === "group";
}
function qu(e) {
  return e.type === "ignored";
}
function xi(e, n) {
  try {
    return !!(1 + n.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
function Rb(e, n) {
  return {
    getIsGroup: Do,
    getIgnored: qu,
    getKey(o) {
      return Do(o) ? o.name || o.key || "key-required" : o[e];
    },
    getChildren(o) {
      return o[n];
    }
  };
}
function Ob(e, n, r, o) {
  if (!n) return e;
  function i(a) {
    if (!Array.isArray(a)) return [];
    const l = [];
    for (const s of a)
      if (Do(s)) {
        const u = i(s[o]);
        u.length && l.push(Object.assign({}, s, {
          [o]: u
        }));
      } else {
        if (qu(s))
          continue;
        n(r, s) && l.push(s);
      }
    return l;
  }
  return i(e);
}
function Mb(e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return e.forEach((i) => {
    Do(i) ? i[r].forEach((a) => {
      o.set(a[n], a);
    }) : o.set(i[n], i);
  }), o;
}
function mn(e) {
  return vt(e, [255, 255, 255, 0.16]);
}
function io(e) {
  return vt(e, [0, 0, 0, 0.12]);
}
const Ib = "n-button-group", _b = {
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
function Lb(e) {
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
    infoColor: w,
    infoColorHover: A,
    infoColorPressed: y,
    successColor: S,
    successColorHover: T,
    successColorPressed: C,
    warningColor: P,
    warningColorHover: I,
    warningColorPressed: _,
    errorColor: K,
    errorColorHover: H,
    errorColorPressed: t,
    fontWeight: F,
    buttonColor2: $,
    buttonColor2Hover: L,
    buttonColor2Pressed: R,
    fontWeightStrong: V
  } = e;
  return Object.assign(Object.assign({}, _b), {
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
    colorSecondaryHover: L,
    colorSecondaryPressed: R,
    // tertiary
    colorTertiary: $,
    colorTertiaryHover: L,
    colorTertiaryPressed: R,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: L,
    colorQuaternaryPressed: R,
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
    colorInfo: w,
    colorHoverInfo: A,
    colorPressedInfo: y,
    colorFocusInfo: A,
    colorDisabledInfo: w,
    textColorInfo: x,
    textColorHoverInfo: x,
    textColorPressedInfo: x,
    textColorFocusInfo: x,
    textColorDisabledInfo: x,
    textColorTextInfo: w,
    textColorTextHoverInfo: A,
    textColorTextPressedInfo: y,
    textColorTextFocusInfo: A,
    textColorTextDisabledInfo: f,
    textColorGhostInfo: w,
    textColorGhostHoverInfo: A,
    textColorGhostPressedInfo: y,
    textColorGhostFocusInfo: A,
    textColorGhostDisabledInfo: w,
    borderInfo: `1px solid ${w}`,
    borderHoverInfo: `1px solid ${A}`,
    borderPressedInfo: `1px solid ${y}`,
    borderFocusInfo: `1px solid ${A}`,
    borderDisabledInfo: `1px solid ${w}`,
    rippleColorInfo: w,
    // success
    colorSuccess: S,
    colorHoverSuccess: T,
    colorPressedSuccess: C,
    colorFocusSuccess: T,
    colorDisabledSuccess: S,
    textColorSuccess: x,
    textColorHoverSuccess: x,
    textColorPressedSuccess: x,
    textColorFocusSuccess: x,
    textColorDisabledSuccess: x,
    textColorTextSuccess: S,
    textColorTextHoverSuccess: T,
    textColorTextPressedSuccess: C,
    textColorTextFocusSuccess: T,
    textColorTextDisabledSuccess: f,
    textColorGhostSuccess: S,
    textColorGhostHoverSuccess: T,
    textColorGhostPressedSuccess: C,
    textColorGhostFocusSuccess: T,
    textColorGhostDisabledSuccess: S,
    borderSuccess: `1px solid ${S}`,
    borderHoverSuccess: `1px solid ${T}`,
    borderPressedSuccess: `1px solid ${C}`,
    borderFocusSuccess: `1px solid ${T}`,
    borderDisabledSuccess: `1px solid ${S}`,
    rippleColorSuccess: S,
    // warning
    colorWarning: P,
    colorHoverWarning: I,
    colorPressedWarning: _,
    colorFocusWarning: I,
    colorDisabledWarning: P,
    textColorWarning: x,
    textColorHoverWarning: x,
    textColorPressedWarning: x,
    textColorFocusWarning: x,
    textColorDisabledWarning: x,
    textColorTextWarning: P,
    textColorTextHoverWarning: I,
    textColorTextPressedWarning: _,
    textColorTextFocusWarning: I,
    textColorTextDisabledWarning: f,
    textColorGhostWarning: P,
    textColorGhostHoverWarning: I,
    textColorGhostPressedWarning: _,
    textColorGhostFocusWarning: I,
    textColorGhostDisabledWarning: P,
    borderWarning: `1px solid ${P}`,
    borderHoverWarning: `1px solid ${I}`,
    borderPressedWarning: `1px solid ${_}`,
    borderFocusWarning: `1px solid ${I}`,
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
    fontWeight: F,
    fontWeightStrong: V
  });
}
const Pa = {
  name: "Button",
  common: He,
  self: Lb
}, Nb = D([k("button", `
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
 `, [N("color", [z("border", {
  borderColor: "var(--n-border-color)"
}), N("disabled", [z("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), Ve("disabled", [D("&:focus", [z("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), D("&:hover", [z("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), D("&:active", [z("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), N("pressed", [z("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), N("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [z("border", {
  border: "var(--n-border-disabled)"
})]), Ve("disabled", [D("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [z("state-border", {
  border: "var(--n-border-focus)"
})]), D("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [z("state-border", {
  border: "var(--n-border-hover)"
})]), D("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [z("state-border", {
  border: "var(--n-border-pressed)"
})]), N("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [z("state-border", {
  border: "var(--n-border-pressed)"
})])]), N("loading", "cursor: wait;"), k("base-wave", `
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
})]), rr && "MozBoxSizing" in document.createElement("div").style ? D("&::moz-focus-inner", {
  border: 0
}) : null, z("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), z("border", {
  border: "var(--n-border)"
}), z("state-border", {
  border: "var(--n-border)",
  borderColor: "#0000",
  zIndex: 1
}), z("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [k("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [Er({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), vb()]), z("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [D("~", [z("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), N("block", `
 display: flex;
 width: 100%;
 `), N("dashed", [z("border, state-border", {
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
})]), Hb = Object.assign(Object.assign({}, ue.props), {
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
}), zr = J({
  name: "Button",
  props: Hb,
  setup(e) {
    process.env.NODE_ENV !== "production" && ot(() => {
      const {
        dashed: y,
        ghost: S,
        text: T,
        secondary: C,
        tertiary: P,
        quaternary: I
      } = e;
      (y || S || T) && (C || P || I) && at("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const n = M(null), r = M(null), o = M(!1), i = qe(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = he(Ib, {}), {
      mergedSizeRef: l
    } = ua({}, {
      defaultSize: "medium",
      mergedSize: (y) => {
        const {
          size: S
        } = e;
        if (S) return S;
        const {
          size: T
        } = a;
        if (T) return T;
        const {
          mergedSize: C
        } = y || {};
        return C ? C.value : "medium";
      }
    }), s = O(() => e.focusable && !e.disabled), u = (y) => {
      var S;
      s.value || y.preventDefault(), !e.nativeFocusBehavior && (y.preventDefault(), !e.disabled && s.value && ((S = n.value) === null || S === void 0 || S.focus({
        preventScroll: !0
      })));
    }, d = (y) => {
      var S;
      if (!e.disabled && !e.loading) {
        const {
          onClick: T
        } = e;
        T && pe(T, y), e.text || (S = r.value) === null || S === void 0 || S.play();
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
    } = Ae(e), b = ue("Button", "-button", Nb, Pa, e, v), x = gt("Button", g, v), w = O(() => {
      const y = b.value, {
        common: {
          cubicBezierEaseInOut: S,
          cubicBezierEaseOut: T
        },
        self: C
      } = y, {
        rippleDuration: P,
        opacityDisabled: I,
        fontWeight: _,
        fontWeightStrong: K
      } = C, H = l.value, {
        dashed: t,
        type: F,
        ghost: $,
        text: L,
        color: R,
        round: V,
        circle: Q,
        textColor: Z,
        secondary: oe,
        tertiary: W,
        quaternary: G,
        strong: re
      } = e, Be = {
        "--n-font-weight": re ? K : _
      };
      let ie = {
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
      const ge = F === "tertiary", Me = F === "default", le = ge ? "default" : F;
      if (L) {
        const Fe = Z || R;
        ie = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": Fe || C[U("textColorText", le)],
          "--n-text-color-hover": Fe ? mn(Fe) : C[U("textColorTextHover", le)],
          "--n-text-color-pressed": Fe ? io(Fe) : C[U("textColorTextPressed", le)],
          "--n-text-color-focus": Fe ? mn(Fe) : C[U("textColorTextHover", le)],
          "--n-text-color-disabled": Fe || C[U("textColorTextDisabled", le)]
        };
      } else if ($ || t) {
        const Fe = Z || R;
        ie = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": R || C[U("rippleColor", le)],
          "--n-text-color": Fe || C[U("textColorGhost", le)],
          "--n-text-color-hover": Fe ? mn(Fe) : C[U("textColorGhostHover", le)],
          "--n-text-color-pressed": Fe ? io(Fe) : C[U("textColorGhostPressed", le)],
          "--n-text-color-focus": Fe ? mn(Fe) : C[U("textColorGhostHover", le)],
          "--n-text-color-disabled": Fe || C[U("textColorGhostDisabled", le)]
        };
      } else if (oe) {
        const Fe = Me ? C.textColor : ge ? C.textColorTertiary : C[U("color", le)], ze = R || Fe, Ze = F !== "default" && F !== "tertiary";
        ie = {
          "--n-color": Ze ? be(ze, {
            alpha: Number(C.colorOpacitySecondary)
          }) : C.colorSecondary,
          "--n-color-hover": Ze ? be(ze, {
            alpha: Number(C.colorOpacitySecondaryHover)
          }) : C.colorSecondaryHover,
          "--n-color-pressed": Ze ? be(ze, {
            alpha: Number(C.colorOpacitySecondaryPressed)
          }) : C.colorSecondaryPressed,
          "--n-color-focus": Ze ? be(ze, {
            alpha: Number(C.colorOpacitySecondaryHover)
          }) : C.colorSecondaryHover,
          "--n-color-disabled": C.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": ze,
          "--n-text-color-hover": ze,
          "--n-text-color-pressed": ze,
          "--n-text-color-focus": ze,
          "--n-text-color-disabled": ze
        };
      } else if (W || G) {
        const Fe = Me ? C.textColor : ge ? C.textColorTertiary : C[U("color", le)], ze = R || Fe;
        W ? (ie["--n-color"] = C.colorTertiary, ie["--n-color-hover"] = C.colorTertiaryHover, ie["--n-color-pressed"] = C.colorTertiaryPressed, ie["--n-color-focus"] = C.colorSecondaryHover, ie["--n-color-disabled"] = C.colorTertiary) : (ie["--n-color"] = C.colorQuaternary, ie["--n-color-hover"] = C.colorQuaternaryHover, ie["--n-color-pressed"] = C.colorQuaternaryPressed, ie["--n-color-focus"] = C.colorQuaternaryHover, ie["--n-color-disabled"] = C.colorQuaternary), ie["--n-ripple-color"] = "#0000", ie["--n-text-color"] = ze, ie["--n-text-color-hover"] = ze, ie["--n-text-color-pressed"] = ze, ie["--n-text-color-focus"] = ze, ie["--n-text-color-disabled"] = ze;
      } else
        ie = {
          "--n-color": R || C[U("color", le)],
          "--n-color-hover": R ? mn(R) : C[U("colorHover", le)],
          "--n-color-pressed": R ? io(R) : C[U("colorPressed", le)],
          "--n-color-focus": R ? mn(R) : C[U("colorFocus", le)],
          "--n-color-disabled": R || C[U("colorDisabled", le)],
          "--n-ripple-color": R || C[U("rippleColor", le)],
          "--n-text-color": Z || (R ? C.textColorPrimary : ge ? C.textColorTertiary : C[U("textColor", le)]),
          "--n-text-color-hover": Z || (R ? C.textColorHoverPrimary : C[U("textColorHover", le)]),
          "--n-text-color-pressed": Z || (R ? C.textColorPressedPrimary : C[U("textColorPressed", le)]),
          "--n-text-color-focus": Z || (R ? C.textColorFocusPrimary : C[U("textColorFocus", le)]),
          "--n-text-color-disabled": Z || (R ? C.textColorDisabledPrimary : C[U("textColorDisabled", le)])
        };
      let We = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      L ? We = {
        "--n-border": "none",
        "--n-border-hover": "none",
        "--n-border-pressed": "none",
        "--n-border-focus": "none",
        "--n-border-disabled": "none"
      } : We = {
        "--n-border": C[U("border", le)],
        "--n-border-hover": C[U("borderHover", le)],
        "--n-border-pressed": C[U("borderPressed", le)],
        "--n-border-focus": C[U("borderFocus", le)],
        "--n-border-disabled": C[U("borderDisabled", le)]
      };
      const {
        [U("height", H)]: Te,
        [U("fontSize", H)]: Ce,
        [U("padding", H)]: Se,
        [U("paddingRound", H)]: ye,
        [U("iconSize", H)]: tt,
        [U("borderRadius", H)]: it,
        [U("iconMargin", H)]: ft,
        waveOpacity: ut
      } = C, wt = {
        "--n-width": Q && !L ? Te : "initial",
        "--n-height": L ? "initial" : Te,
        "--n-font-size": Ce,
        "--n-padding": Q || L ? "initial" : V ? ye : Se,
        "--n-icon-size": tt,
        "--n-icon-margin": ft,
        "--n-border-radius": L ? "initial" : Q || V ? Te : it
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": S,
        "--n-bezier-ease-out": T,
        "--n-ripple-duration": P,
        "--n-opacity-disabled": I,
        "--n-wave-opacity": ut
      }, Be), ie), We), wt);
    }), A = m ? Ne("button", O(() => {
      let y = "";
      const {
        dashed: S,
        type: T,
        ghost: C,
        text: P,
        color: I,
        round: _,
        circle: K,
        textColor: H,
        secondary: t,
        tertiary: F,
        quaternary: $,
        strong: L
      } = e;
      S && (y += "a"), C && (y += "b"), P && (y += "c"), _ && (y += "d"), K && (y += "e"), t && (y += "f"), F && (y += "g"), $ && (y += "h"), L && (y += "i"), I && (y += `j${Co(I)}`), H && (y += `k${Co(H)}`);
      const {
        value: R
      } = l;
      return y += `l${R[0]}`, y += `m${T[0]}`, y;
    }), w, e) : void 0;
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
      customColorCssVars: O(() => {
        const {
          color: y
        } = e;
        if (!y) return null;
        const S = mn(y);
        return {
          "--n-border-color": y,
          "--n-border-color-hover": S,
          "--n-border-color-pressed": io(y),
          "--n-border-color-focus": S,
          "--n-border-color-disabled": y
        };
      }),
      cssVars: m ? void 0 : w,
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
    }, this.iconPlacement === "right" && o, h(Aa, {
      width: !0
    }, {
      default: () => _e(this.$slots.icon, (i) => (this.loading || this.renderIcon || i) && h("span", {
        class: `${e}-button__icon`,
        style: {
          margin: $i(this.$slots.default) ? "0" : ""
        }
      }, h(Io, null, {
        default: () => this.loading ? h(Nr, {
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
    }), this.iconPlacement === "left" && o, this.text ? null : h(gb, {
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
}), jb = {
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
function Wb(e) {
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
    actionColor: w
  } = e;
  return Object.assign(Object.assign({}, jb), {
    lineHeight: o,
    color: a,
    colorModal: g,
    colorPopover: x,
    colorTarget: n,
    colorEmbedded: w,
    colorEmbeddedModal: w,
    colorEmbeddedPopover: w,
    textColor: l,
    titleTextColor: s,
    borderColor: u,
    actionColor: w,
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
const Ku = {
  name: "Card",
  common: He,
  self: Wb
}, Vb = D([k("card", `
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
 `, [Ps({
  background: "var(--n-color-modal)"
}), N("hoverable", [D("&:hover", "box-shadow: var(--n-box-shadow);")]), N("content-segmented", [D(">", [z("content", {
  paddingTop: "var(--n-padding-bottom)"
})])]), N("content-soft-segmented", [D(">", [z("content", `
 margin: 0 var(--n-padding-left);
 padding: var(--n-padding-bottom) 0;
 `)])]), N("footer-segmented", [D(">", [z("footer", {
  paddingTop: "var(--n-padding-bottom)"
})])]), N("footer-soft-segmented", [D(">", [z("footer", `
 padding: var(--n-padding-bottom) 0;
 margin: 0 var(--n-padding-left);
 `)])]), D(">", [k("card-header", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 padding:
 var(--n-padding-top)
 var(--n-padding-left)
 var(--n-padding-bottom)
 var(--n-padding-left);
 `, [z("main", `
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 min-width: 0;
 color: var(--n-title-text-color);
 `), z("extra", `
 display: flex;
 align-items: center;
 font-size: var(--n-font-size);
 font-weight: 400;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), z("close", `
 margin: 0 0 0 8px;
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), z("action", `
 box-sizing: border-box;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 background-clip: padding-box;
 background-color: var(--n-action-color);
 `), z("content", "flex: 1; min-width: 0;"), z("content, footer", `
 box-sizing: border-box;
 padding: 0 var(--n-padding-left) var(--n-padding-bottom) var(--n-padding-left);
 font-size: var(--n-font-size);
 `, [D("&:first-child", {
  paddingTop: "var(--n-padding-bottom)"
})]), z("action", `
 background-color: var(--n-action-color);
 padding: var(--n-padding-bottom) var(--n-padding-left);
 border-bottom-left-radius: var(--n-border-radius);
 border-bottom-right-radius: var(--n-border-radius);
 `)]), k("card-cover", `
 overflow: hidden;
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 `, [D("img", `
 display: block;
 width: 100%;
 `)]), N("bordered", `
 border: 1px solid var(--n-border-color);
 `, [D("&:target", "border-color: var(--n-color-target);")]), N("action-segmented", [D(">", [z("action", [D("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("content-segmented, content-soft-segmented", [D(">", [z("content", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [D("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("footer-segmented, footer-soft-segmented", [D(">", [z("footer", {
  transition: "border-color 0.3s var(--n-bezier)"
}, [D("&:not(:first-child)", {
  borderTop: "1px solid var(--n-border-color)"
})])])]), N("embedded", `
 background-color: var(--n-color-embedded);
 `)]), Zi(k("card", `
 background: var(--n-color-modal);
 `, [N("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), Fs(k("card", `
 background: var(--n-color-popover);
 `, [N("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), $a = {
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
}, qb = Fn($a), Kb = Object.assign(Object.assign({}, ue.props), $a), Ub = J({
  name: "Card",
  props: Kb,
  setup(e) {
    const n = () => {
      const {
        onClose: d
      } = e;
      d && pe(d);
    }, {
      inlineThemeDisabled: r,
      mergedClsPrefixRef: o,
      mergedRtlRef: i
    } = Ae(e), a = ue("Card", "-card", Vb, Ku, e, o), l = gt("Card", i, o), s = O(() => {
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
          borderRadius: w,
          lineHeight: A,
          closeIconColor: y,
          closeIconColorHover: S,
          closeIconColorPressed: T,
          closeColorHover: C,
          closeColorPressed: P,
          closeBorderRadius: I,
          closeIconSize: _,
          closeSize: K,
          boxShadow: H,
          colorPopover: t,
          colorEmbedded: F,
          colorEmbeddedModal: $,
          colorEmbeddedPopover: L,
          [U("padding", d)]: R,
          [U("fontSize", d)]: V,
          [U("titleFontSize", d)]: Q
        },
        common: {
          cubicBezierEaseInOut: Z
        }
      } = a.value, {
        top: oe,
        left: W,
        bottom: G
      } = St(R);
      return {
        "--n-bezier": Z,
        "--n-border-radius": w,
        "--n-color": c,
        "--n-color-modal": f,
        "--n-color-popover": t,
        "--n-color-embedded": F,
        "--n-color-embedded-modal": $,
        "--n-color-embedded-popover": L,
        "--n-color-target": p,
        "--n-text-color": m,
        "--n-line-height": A,
        "--n-action-color": x,
        "--n-title-text-color": v,
        "--n-title-font-weight": g,
        "--n-close-icon-color": y,
        "--n-close-icon-color-hover": S,
        "--n-close-icon-color-pressed": T,
        "--n-close-color-hover": C,
        "--n-close-color-pressed": P,
        "--n-border-color": b,
        "--n-box-shadow": H,
        // size
        "--n-padding-top": oe,
        "--n-padding-bottom": G,
        "--n-padding-left": W,
        "--n-font-size": V,
        "--n-title-font-size": Q,
        "--n-close-size": K,
        "--n-close-icon-size": _,
        "--n-close-border-radius": I
      };
    }), u = r ? Ne("card", O(() => e.size[0]), s, e) : void 0;
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
      const c = this.cover ? bt([this.cover()]) : d;
      return c && h("div", {
        class: `${o}-card-cover`,
        role: "none"
      }, c);
    }), _e(u.header, (d) => {
      const {
        title: c
      } = this, f = c ? bt(typeof c == "function" ? [c()] : [c]) : d;
      return f || this.closable ? h("div", {
        class: [`${o}-card-header`, this.headerClass],
        style: this.headerStyle,
        role: "heading"
      }, h("div", {
        class: `${o}-card-header__main`,
        role: "heading"
      }, f), _e(u["header-extra"], (p) => {
        const m = this.headerExtra ? bt([this.headerExtra()]) : p;
        return m && h("div", {
          class: [`${o}-card-header__extra`, this.headerExtraClass],
          style: this.headerExtraStyle
        }, m);
      }), this.closable && h(Lr, {
        clsPrefix: o,
        class: `${o}-card-header__close`,
        onClick: this.handleCloseClick,
        absolute: !0
      })) : null;
    }), _e(u.default, (d) => {
      const {
        content: c
      } = this, f = c ? bt(typeof c == "function" ? [c()] : [c]) : d;
      return f && h("div", {
        class: [`${o}-card__content`, this.contentClass],
        style: this.contentStyle,
        role: "none"
      }, f);
    }), _e(u.footer, (d) => {
      const c = this.footer ? bt([this.footer()]) : d;
      return c && h("div", {
        class: [`${o}-card__footer`, this.footerClass],
        style: this.footerStyle,
        role: "none"
      }, c);
    }), _e(u.action, (d) => {
      const c = this.action ? bt([this.action()]) : d;
      return c && h("div", {
        class: `${o}-card__action`,
        role: "none"
      }, c);
    }));
  }
});
function Gb(e) {
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
const Xb = {
  name: "Collapse",
  common: He,
  self: Gb
}, Yb = k("collapse", "width: 100%;", [k("collapse-item", `
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition:
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 margin: var(--n-item-margin);
 `, [N("disabled", [z("header", "cursor: not-allowed;", [z("header-main", `
 color: var(--n-title-text-color-disabled);
 `), k("collapse-item-arrow", `
 color: var(--n-arrow-color-disabled);
 `)])]), k("collapse-item", "margin-left: 32px;"), D("&:first-child", "margin-top: 0;"), D("&:first-child >", [z("header", "padding-top: 0;")]), N("left-arrow-placement", [z("header", [k("collapse-item-arrow", "margin-right: 4px;")])]), N("right-arrow-placement", [z("header", [k("collapse-item-arrow", "margin-left: 4px;")])]), z("content-wrapper", [z("content-inner", "padding-top: 16px;"), Hu({
  duration: "0.15s"
})]), N("active", [z("header", [N("active", [k("collapse-item-arrow", "transform: rotate(90deg);")])])]), D("&:not(:first-child)", "border-top: 1px solid var(--n-divider-color);"), Ve("disabled", [N("trigger-area-main", [z("header", [z("header-main", "cursor: pointer;"), k("collapse-item-arrow", "cursor: default;")])]), N("trigger-area-arrow", [z("header", [k("collapse-item-arrow", "cursor: pointer;")])]), N("trigger-area-extra", [z("header", [z("header-extra", "cursor: pointer;")])])]), z("header", `
 font-size: var(--n-title-font-size);
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition: color .3s var(--n-bezier);
 position: relative;
 padding: var(--n-title-padding);
 color: var(--n-title-text-color);
 `, [z("header-main", `
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 flex: 1;
 color: var(--n-title-text-color);
 `), z("header-extra", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), k("collapse-item-arrow", `
 display: flex;
 transition:
 transform .15s var(--n-bezier),
 color .3s var(--n-bezier);
 font-size: 18px;
 color: var(--n-arrow-color);
 `)])])]), Zb = Object.assign(Object.assign({}, ue.props), {
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
    validator: () => (process.env.NODE_ENV !== "production" && Tt("collapse", "`on-expanded-names-change` is deprecated, please use `on-update:expanded-names` instead."), !0),
    default: void 0
  }
}), Uu = "n-collapse", Jb = J({
  name: "Collapse",
  props: Zb,
  setup(e, {
    slots: n
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = M(e.defaultExpandedNames), l = O(() => e.expandedNames), s = Jn(l, a), u = ue("Collapse", "-collapse", Yb, Xb, e, r);
    function d(g) {
      const {
        "onUpdate:expandedNames": b,
        onUpdateExpandedNames: x,
        onExpandedNamesChange: w
      } = e;
      x && pe(x, g), b && pe(b, g), w && pe(w, g), a.value = g;
    }
    function c(g) {
      const {
        onItemHeaderClick: b
      } = e;
      b && pe(b, g);
    }
    function f(g, b, x) {
      const {
        accordion: w
      } = e, {
        value: A
      } = s;
      if (w)
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
        const y = A.slice(), S = y.findIndex((T) => b === T);
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
    me(Uu, {
      props: e,
      mergedClsPrefixRef: r,
      expandedNamesRef: s,
      slots: n,
      toggleItem: f
    });
    const p = gt("Collapse", i, r), m = O(() => {
      const {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          titleFontWeight: b,
          dividerColor: x,
          titlePadding: w,
          titleTextColor: A,
          titleTextColorDisabled: y,
          textColor: S,
          arrowColor: T,
          fontSize: C,
          titleFontSize: P,
          arrowColorDisabled: I,
          itemMargin: _
        }
      } = u.value;
      return {
        "--n-font-size": C,
        "--n-bezier": g,
        "--n-text-color": S,
        "--n-divider-color": x,
        "--n-title-padding": w,
        "--n-title-font-size": P,
        "--n-title-text-color": A,
        "--n-title-text-color-disabled": y,
        "--n-title-font-weight": b,
        "--n-arrow-color": T,
        "--n-arrow-color-disabled": I,
        "--n-item-margin": _
      };
    }), v = o ? Ne("collapse", void 0, m, e) : void 0;
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
}), Qb = J({
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
      onceTrue: zs(se(e, "show"))
    };
  },
  render() {
    return h(Aa, null, {
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
        return i ? kt(a, [[Xn, e]]) : e ? a : null;
      }
    });
  }
}), e1 = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
}, t1 = J({
  name: "CollapseItem",
  props: e1,
  setup(e) {
    const {
      mergedRtlRef: n
    } = Ae(e), r = ln(), o = qe(() => {
      var f;
      return (f = e.name) !== null && f !== void 0 ? f : r;
    }), i = he(Uu);
    i || fn("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
    const {
      expandedNamesRef: a,
      props: l,
      mergedClsPrefixRef: s,
      slots: u
    } = i, d = O(() => {
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
      rtlEnabled: gt("Collapse", n, s),
      collapseSlots: u,
      randomName: r,
      mergedClsPrefix: s,
      collapsed: d,
      triggerAreas: se(l, "triggerAreas"),
      mergedDisplayDirective: O(() => {
        const {
          displayDirective: f
        } = e;
        return f || l.displayDirective;
      }),
      arrowPlacement: O(() => l.arrowPlacement),
      handleClick(f) {
        let p = "main";
        Vt(f, "arrow") && (p = "arrow"), Vt(f, "extra") && (p = "extra"), l.triggerAreas.includes(p) && i && !e.disabled && i.toggleItem(d.value, o.value, f);
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
    } = this, u = Pi(n.header, {
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
    }, Pi(c, {
      collapsed: o
    }, () => {
      var f;
      return [h(yt, {
        clsPrefix: a
      }, {
        default: (f = e.expandIcon) !== null && f !== void 0 ? f : () => this.rtlEnabled ? h(Zx, null) : h(Du, null)
      })];
    })), r === "left" && u), lh(d, {
      collapsed: o
    }, (f) => h("div", {
      class: `${a}-collapse-item__header-extra`,
      onClick: this.handleClick,
      "data-extra": !0
    }, f))), h(Qb, {
      clsPrefix: a,
      displayDirective: i,
      show: !o
    }, n));
  }
}), n1 = {
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
    validator: () => (Tt("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, Gu = J({
  name: "ConfigProvider",
  alias: ["App"],
  props: n1,
  setup(e) {
    const n = he(Ut, null), r = O(() => {
      const {
        theme: g
      } = e;
      if (g === null) return;
      const b = n == null ? void 0 : n.mergedThemeRef.value;
      return g === void 0 ? b : b === void 0 ? g : Object.assign({}, b, g);
    }), o = O(() => {
      const {
        themeOverrides: g
      } = e;
      if (g !== null) {
        if (g === void 0)
          return n == null ? void 0 : n.mergedThemeOverridesRef.value;
        {
          const b = n == null ? void 0 : n.mergedThemeOverridesRef.value;
          return b === void 0 ? g : cr({}, b, g);
        }
      }
    }), i = qe(() => {
      const {
        namespace: g
      } = e;
      return g === void 0 ? n == null ? void 0 : n.mergedNamespaceRef.value : g;
    }), a = qe(() => {
      const {
        bordered: g
      } = e;
      return g === void 0 ? n == null ? void 0 : n.mergedBorderedRef.value : g;
    }), l = O(() => {
      const {
        icons: g
      } = e;
      return g === void 0 ? n == null ? void 0 : n.mergedIconsRef.value : g;
    }), s = O(() => {
      const {
        componentOptions: g
      } = e;
      return g !== void 0 ? g : n == null ? void 0 : n.mergedComponentPropsRef.value;
    }), u = O(() => {
      const {
        clsPrefix: g
      } = e;
      return g !== void 0 ? g : n ? n.mergedClsPrefixRef.value : Ei;
    }), d = O(() => {
      var g;
      const {
        rtl: b
      } = e;
      if (b === void 0)
        return n == null ? void 0 : n.mergedRtlRef.value;
      const x = {};
      for (const w of b)
        x[w.name] = Ra(w), (g = w.peers) === null || g === void 0 || g.forEach((A) => {
          A.name in x || (x[A.name] = Ra(A));
        });
      return x;
    }), c = O(() => e.breakpoints || (n == null ? void 0 : n.mergedBreakpointsRef.value)), f = e.inlineThemeDisabled || (n == null ? void 0 : n.inlineThemeDisabled), p = e.preflightStyleDisabled || (n == null ? void 0 : n.preflightStyleDisabled), m = e.styleMountTarget || (n == null ? void 0 : n.styleMountTarget), v = O(() => {
      const {
        value: g
      } = r, {
        value: b
      } = o, x = b && Object.keys(b).length !== 0, w = g == null ? void 0 : g.name;
      return w ? x ? `${w}-${Cr(JSON.stringify(o.value))}` : w : x ? Cr(JSON.stringify(o.value)) : "";
    });
    return me(Ut, {
      mergedThemeHashRef: v,
      mergedBreakpointsRef: c,
      mergedRtlRef: d,
      mergedIconsRef: l,
      mergedComponentPropsRef: s,
      mergedBorderedRef: a,
      mergedNamespaceRef: i,
      mergedClsPrefixRef: u,
      mergedLocaleRef: O(() => {
        const {
          locale: g
        } = e;
        if (g !== null)
          return g === void 0 ? n == null ? void 0 : n.mergedLocaleRef.value : g;
      }),
      mergedDateLocaleRef: O(() => {
        const {
          dateLocale: g
        } = e;
        if (g !== null)
          return g === void 0 ? n == null ? void 0 : n.mergedDateLocaleRef.value : g;
      }),
      mergedHljsRef: O(() => {
        const {
          hljs: g
        } = e;
        return g === void 0 ? n == null ? void 0 : n.mergedHljsRef.value : g;
      }),
      mergedKatexRef: O(() => {
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
      class: `${this.mergedClsPrefix || Ei}-config-provider`
    }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e));
  }
});
function r1(e) {
  const {
    boxShadow2: n
  } = e;
  return {
    menuBoxShadow: n
  };
}
const o1 = {
  name: "Select",
  common: He,
  peers: {
    InternalSelection: Nu,
    InternalSelectMenu: Mu
  },
  self: r1
}, i1 = D([k("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 font-weight: var(--n-font-weight);
 `), k("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [Ho({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]), a1 = Object.assign(Object.assign({}, ue.props), {
  to: Kt.propTo,
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
}), l1 = J({
  name: "Select",
  props: a1,
  setup(e) {
    process.env.NODE_ENV !== "production" && ot(() => {
      e.items !== void 0 && at("select", "`items` is deprecated, please use `options` instead."), e.onChange !== void 0 && at("select", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: n,
      mergedBorderedRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = ue("Select", "-select", i1, o1, e, n), l = M(e.defaultValue), s = se(e, "value"), u = Jn(s, l), d = M(!1), c = M(""), f = ea(e, ["items", "options"]), p = M([]), m = M([]), v = O(() => m.value.concat(p.value).concat(f.value)), g = O(() => {
      const {
        filter: B
      } = e;
      if (B) return B;
      const {
        labelField: j,
        valueField: X
      } = e;
      return (ne, ae) => {
        if (!ae) return !1;
        const fe = ae[j];
        if (typeof fe == "string")
          return xi(ne, fe);
        const ve = ae[X];
        return typeof ve == "string" ? xi(ne, ve) : typeof ve == "number" ? xi(ne, String(ve)) : !1;
      };
    }), b = O(() => {
      if (e.remote)
        return f.value;
      {
        const {
          value: B
        } = v, {
          value: j
        } = c;
        return !j.length || !e.filterable ? B : Ob(B, g.value, j, e.childrenField);
      }
    }), x = O(() => {
      const {
        valueField: B,
        childrenField: j
      } = e, X = Rb(B, j);
      return Ru(b.value, X);
    }), w = O(() => Mb(v.value, e.valueField, e.childrenField)), A = M(!1), y = Jn(se(e, "show"), A), S = M(null), T = M(null), C = M(null), {
      localeRef: P
    } = $r("Select"), I = O(() => {
      var B;
      return (B = e.placeholder) !== null && B !== void 0 ? B : P.value.placeholder;
    }), _ = [], K = M(/* @__PURE__ */ new Map()), H = O(() => {
      const {
        fallbackOption: B
      } = e;
      if (B === void 0) {
        const {
          labelField: j,
          valueField: X
        } = e;
        return (ne) => ({
          [j]: String(ne),
          [X]: ne
        });
      }
      return B === !1 ? !1 : (j) => Object.assign(B(j), {
        value: j
      });
    });
    function t(B) {
      const j = e.remote, {
        value: X
      } = K, {
        value: ne
      } = w, {
        value: ae
      } = H, fe = [];
      return B.forEach((ve) => {
        if (ne.has(ve))
          fe.push(ne.get(ve));
        else if (j && X.has(ve))
          fe.push(X.get(ve));
        else if (ae) {
          const xe = ae(ve);
          xe && fe.push(xe);
        }
      }), fe;
    }
    const F = O(() => {
      if (e.multiple) {
        const {
          value: B
        } = u;
        return Array.isArray(B) ? t(B) : [];
      }
      return null;
    }), $ = O(() => {
      const {
        value: B
      } = u;
      return !e.multiple && !Array.isArray(B) ? B === null ? null : t([B])[0] || null : null;
    }), L = ua(e), {
      mergedSizeRef: R,
      mergedDisabledRef: V,
      mergedStatusRef: Q
    } = L;
    function Z(B, j) {
      const {
        onChange: X,
        "onUpdate:value": ne,
        onUpdateValue: ae
      } = e, {
        nTriggerFormChange: fe,
        nTriggerFormInput: ve
      } = L;
      X && pe(X, B, j), ae && pe(ae, B, j), ne && pe(ne, B, j), l.value = B, fe(), ve();
    }
    function oe(B) {
      const {
        onBlur: j
      } = e, {
        nTriggerFormBlur: X
      } = L;
      j && pe(j, B), X();
    }
    function W() {
      const {
        onClear: B
      } = e;
      B && pe(B);
    }
    function G(B) {
      const {
        onFocus: j,
        showOnFocus: X
      } = e, {
        nTriggerFormFocus: ne
      } = L;
      j && pe(j, B), ne(), X && Me();
    }
    function re(B) {
      const {
        onSearch: j
      } = e;
      j && pe(j, B);
    }
    function Be(B) {
      const {
        onScroll: j
      } = e;
      j && pe(j, B);
    }
    function ie() {
      var B;
      const {
        remote: j,
        multiple: X
      } = e;
      if (j) {
        const {
          value: ne
        } = K;
        if (X) {
          const {
            valueField: ae
          } = e;
          (B = F.value) === null || B === void 0 || B.forEach((fe) => {
            ne.set(fe[ae], fe);
          });
        } else {
          const ae = $.value;
          ae && ne.set(ae[e.valueField], ae);
        }
      }
    }
    function ge(B) {
      const {
        onUpdateShow: j,
        "onUpdate:show": X
      } = e;
      j && pe(j, B), X && pe(X, B), A.value = B;
    }
    function Me() {
      V.value || (ge(!0), A.value = !0, e.filterable && At());
    }
    function le() {
      ge(!1);
    }
    function We() {
      c.value = "", m.value = _;
    }
    const Te = M(!1);
    function Ce() {
      e.filterable && (Te.value = !0);
    }
    function Se() {
      e.filterable && (Te.value = !1, y.value || We());
    }
    function ye() {
      V.value || (y.value ? e.filterable ? At() : le() : Me());
    }
    function tt(B) {
      var j, X;
      !((X = (j = C.value) === null || j === void 0 ? void 0 : j.selfRef) === null || X === void 0) && X.contains(B.relatedTarget) || (d.value = !1, oe(B), le());
    }
    function it(B) {
      G(B), d.value = !0;
    }
    function ft() {
      d.value = !0;
    }
    function ut(B) {
      var j;
      !((j = S.value) === null || j === void 0) && j.$el.contains(B.relatedTarget) || (d.value = !1, oe(B), le());
    }
    function wt() {
      var B;
      (B = S.value) === null || B === void 0 || B.focus(), le();
    }
    function Fe(B) {
      var j;
      y.value && (!((j = S.value) === null || j === void 0) && j.$el.contains(Zn(B)) || le());
    }
    function ze(B) {
      if (!Array.isArray(B)) return [];
      if (H.value)
        return Array.from(B);
      {
        const {
          remote: j
        } = e, {
          value: X
        } = w;
        if (j) {
          const {
            value: ne
          } = K;
          return B.filter((ae) => X.has(ae) || ne.has(ae));
        } else
          return B.filter((ne) => X.has(ne));
      }
    }
    function Ze(B) {
      Ue(B.rawNode);
    }
    function Ue(B) {
      if (V.value) return;
      const {
        tag: j,
        remote: X,
        clearFilterAfterSelect: ne,
        valueField: ae
      } = e;
      if (j && !X) {
        const {
          value: fe
        } = m, ve = fe[0] || null;
        if (ve) {
          const xe = p.value;
          xe.length ? xe.push(ve) : p.value = [ve], m.value = _;
        }
      }
      if (X && K.value.set(B[ae], B), e.multiple) {
        const fe = ze(u.value), ve = fe.findIndex((xe) => xe === B[ae]);
        if (~ve) {
          if (fe.splice(ve, 1), j && !X) {
            const xe = Y(B[ae]);
            ~xe && (p.value.splice(xe, 1), ne && (c.value = ""));
          }
        } else
          fe.push(B[ae]), ne && (c.value = "");
        Z(fe, t(fe));
      } else {
        if (j && !X) {
          const fe = Y(B[ae]);
          ~fe ? p.value = [p.value[fe]] : p.value = _;
        }
        Yt(), le(), Z(B[ae], B);
      }
    }
    function Y(B) {
      return p.value.findIndex((X) => X[e.valueField] === B);
    }
    function ee(B) {
      y.value || Me();
      const {
        value: j
      } = B.target;
      c.value = j;
      const {
        tag: X,
        remote: ne
      } = e;
      if (re(j), X && !ne) {
        if (!j) {
          m.value = _;
          return;
        }
        const {
          onCreate: ae
        } = e, fe = ae ? ae(j) : {
          [e.labelField]: j,
          [e.valueField]: j
        }, {
          valueField: ve,
          labelField: xe
        } = e;
        f.value.some((ke) => ke[ve] === fe[ve] || ke[xe] === fe[xe]) || p.value.some((ke) => ke[ve] === fe[ve] || ke[xe] === fe[xe]) ? m.value = _ : m.value = [fe];
      }
    }
    function Re(B) {
      B.stopPropagation();
      const {
        multiple: j
      } = e;
      !j && e.filterable && le(), W(), j ? Z([], []) : Z(null, null);
    }
    function pn(B) {
      !Vt(B, "action") && !Vt(B, "empty") && !Vt(B, "header") && B.preventDefault();
    }
    function Ot(B) {
      Be(B);
    }
    function Mt(B) {
      var j, X, ne, ae, fe;
      if (!e.keyboard) {
        B.preventDefault();
        return;
      }
      switch (B.key) {
        case " ":
          if (e.filterable)
            break;
          B.preventDefault();
        case "Enter":
          if (!(!((j = S.value) === null || j === void 0) && j.isComposing)) {
            if (y.value) {
              const ve = (X = C.value) === null || X === void 0 ? void 0 : X.getPendingTmNode();
              ve ? Ze(ve) : e.filterable || (le(), Yt());
            } else if (Me(), e.tag && Te.value) {
              const ve = m.value[0];
              if (ve) {
                const xe = ve[e.valueField], {
                  value: ke
                } = u;
                e.multiple && Array.isArray(ke) && ke.includes(xe) || Ue(ve);
              }
            }
          }
          B.preventDefault();
          break;
        case "ArrowUp":
          if (B.preventDefault(), e.loading) return;
          y.value && ((ne = C.value) === null || ne === void 0 || ne.prev());
          break;
        case "ArrowDown":
          if (B.preventDefault(), e.loading) return;
          y.value ? (ae = C.value) === null || ae === void 0 || ae.next() : Me();
          break;
        case "Escape":
          y.value && (oh(B), le()), (fe = S.value) === null || fe === void 0 || fe.focus();
          break;
      }
    }
    function Yt() {
      var B;
      (B = S.value) === null || B === void 0 || B.focus();
    }
    function At() {
      var B;
      (B = S.value) === null || B === void 0 || B.focusInput();
    }
    function It() {
      var B;
      y.value && ((B = T.value) === null || B === void 0 || B.syncPosition());
    }
    ie(), Pe(se(e, "options"), ie);
    const Zt = {
      focus: () => {
        var B;
        (B = S.value) === null || B === void 0 || B.focus();
      },
      focusInput: () => {
        var B;
        (B = S.value) === null || B === void 0 || B.focusInput();
      },
      blur: () => {
        var B;
        (B = S.value) === null || B === void 0 || B.blur();
      },
      blurInput: () => {
        var B;
        (B = S.value) === null || B === void 0 || B.blurInput();
      }
    }, ht = O(() => {
      const {
        self: {
          menuBoxShadow: B
        }
      } = a.value;
      return {
        "--n-menu-box-shadow": B
      };
    }), Bt = i ? Ne("select", void 0, ht, e) : void 0;
    return Object.assign(Object.assign({}, Zt), {
      mergedStatus: Q,
      mergedClsPrefix: n,
      mergedBordered: r,
      namespace: o,
      treeMate: x,
      isMounted: nr(),
      triggerRef: S,
      menuRef: C,
      pattern: c,
      uncontrolledShow: A,
      mergedShow: y,
      adjustedTo: Kt(e),
      uncontrolledValue: l,
      mergedValue: u,
      followerRef: T,
      localizedPlaceholder: I,
      selectedOption: $,
      selectedOptions: F,
      mergedSize: R,
      mergedDisabled: V,
      focused: d,
      activeWithoutMenuOpen: Te,
      inlineThemeDisabled: i,
      onTriggerInputFocus: Ce,
      onTriggerInputBlur: Se,
      handleTriggerOrMenuResize: It,
      handleMenuFocus: ft,
      handleMenuBlur: ut,
      handleMenuTabOut: wt,
      handleTriggerClick: ye,
      handleToggle: Ze,
      handleDeleteOption: Ue,
      handlePatternInput: ee,
      handleClear: Re,
      handleTriggerBlur: tt,
      handleTriggerFocus: it,
      handleKeydown: Mt,
      handleMenuAfterLeave: We,
      handleMenuClickOutside: Fe,
      handleMenuScroll: Ot,
      handleMenuKeydown: Mt,
      handleMenuMousedown: pn,
      mergedTheme: a,
      cssVars: i ? void 0 : ht,
      themeClass: Bt == null ? void 0 : Bt.themeClass,
      onRender: Bt == null ? void 0 : Bt.onRender
    });
  },
  render() {
    return h("div", {
      class: `${this.mergedClsPrefix}-select`
    }, h(ra, null, {
      default: () => [h(oa, null, {
        default: () => h(hb, {
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
      }), h(la, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === Kt.tdkey,
        containerClass: this.namespace,
        width: this.consistentMenuWidth ? "target" : void 0,
        minWidth: "target",
        placement: this.placement
      }, {
        default: () => h(ct, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted,
          onAfterLeave: this.handleMenuAfterLeave
        }, {
          default: () => {
            var e, n, r;
            return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) === null || e === void 0 || e.call(this), kt(h(Gm, Object.assign({}, this.menuProps, {
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
            }), this.displayDirective === "show" ? [[Xn, this.mergedShow], [Br, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]] : [[Br, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), s1 = {
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
function u1(e) {
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
  return Object.assign(Object.assign({}, s1), {
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
    optionColorActive: be(n, {
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
const d1 = {
  name: "Dropdown",
  common: He,
  peers: {
    Popover: jr
  },
  self: u1
}, c1 = {
  padding: "8px 14px"
};
function f1(e) {
  const {
    borderRadius: n,
    boxShadow2: r,
    baseColor: o
  } = e;
  return Object.assign(Object.assign({}, c1), {
    borderRadius: n,
    boxShadow: r,
    color: vt(o, "rgba(0, 0, 0, .85)"),
    textColor: o
  });
}
const h1 = {
  name: "Tooltip",
  common: He,
  peers: {
    Popover: jr
  },
  self: f1
}, v1 = Object.assign(Object.assign({}, Wr), ue.props), p1 = J({
  name: "Tooltip",
  props: v1,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Ae(e), r = ue("Tooltip", "-tooltip", void 0, h1, e, n), o = M(null);
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
      popoverThemeOverrides: O(() => r.value.self)
    });
  },
  render() {
    const {
      mergedTheme: e,
      internalExtraClass: n
    } = this;
    return h(Vr, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: n.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), Da = "n-dropdown-menu", jo = "n-dropdown", ts = "n-dropdown-option", Xu = J({
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
}), g1 = J({
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
    } = he(Da), {
      renderLabelRef: r,
      labelFieldRef: o,
      nodePropsRef: i,
      renderOptionRef: a
    } = he(jo);
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
    }, je(s.icon)), h("div", {
      class: `${n}-dropdown-option-body__label`,
      "data-dropdown-option": !0
    }, a ? a(s) : je((e = s.title) !== null && e !== void 0 ? e : s[this.labelField])), h("div", {
      class: [`${n}-dropdown-option-body__suffix`, r && `${n}-dropdown-option-body__suffix--has-submenu`],
      "data-dropdown-option": !0
    })));
    return l ? l({
      node: u,
      option: s
    }) : u;
  }
});
function x1(e) {
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
const m1 = {
  name: "Icon",
  common: He,
  self: x1
}, b1 = k("icon", `
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
}, [D("svg", {
  opacity: "var(--n-opacity)",
  transition: "opacity .3s var(--n-bezier)"
})]), D("svg", {
  height: "1em",
  width: "1em"
})]), C1 = Object.assign(Object.assign({}, ue.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), Ea = J({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: C1,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r
    } = Ae(e), o = ue("Icon", "-icon", b1, m1, e, n), i = O(() => {
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
    }), a = r ? Ne("icon", O(() => `${e.depth || "d"}`), i, e) : void 0;
    return {
      mergedClsPrefix: n,
      mergedStyle: O(() => {
        const {
          size: l,
          color: s
        } = e;
        return {
          fontSize: qt(l),
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
    return !((e = n == null ? void 0 : n.$options) === null || e === void 0) && e._n_icon__ && Tt("icon", "don't wrap `n-icon` inside `n-icon`"), a == null || a(), h("i", cn(this.$attrs, {
      role: "img",
      class: [`${o}-icon`, l, {
        [`${o}-icon--depth`]: r,
        [`${o}-icon--color-transition`]: r !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), i ? h(i) : this.$slots);
  }
});
function ji(e, n) {
  return e.type === "submenu" || e.type === void 0 && e[n] !== void 0;
}
function y1(e) {
  return e.type === "group";
}
function Yu(e) {
  return e.type === "divider";
}
function w1(e) {
  return e.type === "render";
}
const Zu = J({
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
    const n = he(jo), {
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
    } = n, b = he(ts, null), x = he(Da), w = he(Mr), A = O(() => e.tmNode.rawNode), y = O(() => {
      const {
        value: R
      } = p;
      return ji(e.tmNode.rawNode, R);
    }), S = O(() => {
      const {
        disabled: R
      } = e.tmNode;
      return R;
    }), T = O(() => {
      if (!y.value) return !1;
      const {
        key: R,
        disabled: V
      } = e.tmNode;
      if (V) return !1;
      const {
        value: Q
      } = r, {
        value: Z
      } = o, {
        value: oe
      } = i, {
        value: W
      } = a;
      return Q !== null ? W.includes(R) : Z !== null ? W.includes(R) && W[W.length - 1] !== R : oe !== null ? W.includes(R) : !1;
    }), C = O(() => o.value === null && !s.value), P = sf(T, 300, C), I = O(() => !!(b != null && b.enteringSubmenuRef.value)), _ = M(!1);
    me(ts, {
      enteringSubmenuRef: _
    });
    function K() {
      _.value = !0;
    }
    function H() {
      _.value = !1;
    }
    function t() {
      const {
        parentKey: R,
        tmNode: V
      } = e;
      V.disabled || u.value && (i.value = R, o.value = null, r.value = V.key);
    }
    function F() {
      const {
        tmNode: R
      } = e;
      R.disabled || u.value && r.value !== R.key && t();
    }
    function $(R) {
      if (e.tmNode.disabled || !u.value) return;
      const {
        relatedTarget: V
      } = R;
      V && !Vt({
        target: V
      }, "dropdownOption") && !Vt({
        target: V
      }, "scrollbarRail") && (r.value = null);
    }
    function L() {
      const {
        value: R
      } = y, {
        tmNode: V
      } = e;
      u.value && !R && !V.disabled && (n.doSelect(V.key, V.rawNode), n.doUpdateShow(!1));
    }
    return {
      labelField: f,
      renderLabel: d,
      renderIcon: c,
      siblingHasIcon: x.showIconRef,
      siblingHasSubmenu: x.hasSubmenuRef,
      menuProps: g,
      popoverBody: w,
      animated: s,
      mergedShowSubmenu: O(() => P.value && !I.value),
      rawNode: A,
      hasSubmenu: y,
      pending: qe(() => {
        const {
          value: R
        } = a, {
          key: V
        } = e.tmNode;
        return R.includes(V);
      }),
      childActive: qe(() => {
        const {
          value: R
        } = l, {
          key: V
        } = e.tmNode, Q = R.findIndex((Z) => V === Z);
        return Q === -1 ? !1 : Q < R.length - 1;
      }),
      active: qe(() => {
        const {
          value: R
        } = l, {
          key: V
        } = e.tmNode, Q = R.findIndex((Z) => V === Z);
        return Q === -1 ? !1 : Q === R.length - 1;
      }),
      mergedDisabled: S,
      renderOption: m,
      nodeProps: v,
      handleClick: L,
      handleMouseMove: F,
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
      props: p,
      scrollable: m
    } = this;
    let v = null;
    if (i) {
      const w = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, o, o.children);
      v = h(Ju, Object.assign({}, w, {
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
    }, b), h("div", cn(g, p), [h("div", {
      class: [`${a}-dropdown-option-body__prefix`, l && `${a}-dropdown-option-body__prefix--show-icon`]
    }, [d ? d(o) : je(o.icon)]), h("div", {
      "data-dropdown-option": !0,
      class: `${a}-dropdown-option-body__label`
    }, u ? u(o) : je((n = o[this.labelField]) !== null && n !== void 0 ? n : o.title)), h("div", {
      "data-dropdown-option": !0,
      class: [`${a}-dropdown-option-body__suffix`, s && `${a}-dropdown-option-body__suffix--has-submenu`]
    }, this.hasSubmenu ? h(Ea, null, {
      default: () => h(Du, null)
    }) : null)]), this.hasSubmenu ? h(ra, null, {
      default: () => [h(oa, null, {
        default: () => h("div", {
          class: `${a}-dropdown-offset-container`
        }, h(la, {
          show: this.mergedShowSubmenu,
          placement: this.placement,
          to: m && this.popoverBody || void 0,
          teleportDisabled: !m
        }, {
          default: () => h("div", {
            class: `${a}-dropdown-menu-wrapper`
          }, r ? h(ct, {
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
}), B1 = J({
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
    return h(et, null, h(g1, {
      clsPrefix: r,
      tmNode: e,
      key: e.key
    }), o == null ? void 0 : o.map((i) => {
      const {
        rawNode: a
      } = i;
      return a.show === !1 ? null : Yu(a) ? h(Xu, {
        clsPrefix: r,
        key: i.key
      }) : i.isGroup ? (Tt("dropdown", "`group` node is not allowed to be put in `group` node."), null) : h(Zu, {
        clsPrefix: r,
        tmNode: i,
        parentKey: n,
        key: i.key
      });
    }));
  }
}), S1 = J({
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
}), Ju = J({
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
    } = he(jo);
    me(Da, {
      showIconRef: O(() => {
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
      hasSubmenuRef: O(() => {
        const {
          value: i
        } = r;
        return e.tmNodes.some((a) => {
          var l;
          if (a.isGroup)
            return (l = a.children) === null || l === void 0 ? void 0 : l.some(({
              rawNode: u
            }) => ji(u, i));
          const {
            rawNode: s
          } = a;
          return ji(s, i);
        });
      })
    });
    const o = M(null);
    return me(To, null), me(ko, null), me(Mr, o), {
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
      return a.show === !1 ? null : w1(a) ? h(S1, {
        tmNode: i,
        key: i.key
      }) : Yu(a) ? h(Xu, {
        clsPrefix: n,
        key: i.key
      }) : y1(a) ? h(B1, {
        clsPrefix: n,
        tmNode: i,
        parentKey: e,
        key: i.key
      }) : h(Zu, {
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
    }, r ? h(zu, {
      contentClass: `${n}-dropdown-menu__content`
    }, {
      default: () => o
    }) : o, this.showArrow ? _u({
      clsPrefix: n,
      arrowStyle: this.arrowStyle,
      arrowClass: void 0,
      arrowWrapperClass: void 0,
      arrowWrapperStyle: void 0
    }) : null);
  }
}), A1 = k("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [Ho(), k("dropdown-option", `
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
 `)]), k("dropdown-option-body", `
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
 `), Ve("disabled", [N("pending", `
 color: var(--n-option-text-color-hover);
 `, [z("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), D("&::before", "background-color: var(--n-option-color-hover);")]), N("active", `
 color: var(--n-option-text-color-active);
 `, [z("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), D("&::before", "background-color: var(--n-option-color-active);")]), N("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [z("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), N("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), N("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [z("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [N("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), z("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [N("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), k("icon", `
 font-size: var(--n-option-icon-size);
 `)]), z("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), z("suffix", `
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
 `), k("icon", `
 font-size: var(--n-option-icon-size);
 `)]), k("dropdown-menu", "pointer-events: all;")]), k("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), k("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), k("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), D(">", [k("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), Ve("scrollable", `
 padding: var(--n-padding);
 `), N("scrollable", [z("content", `
 padding: var(--n-padding);
 `)])]), F1 = {
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
}, P1 = Object.keys(Wr), $1 = Object.assign(Object.assign(Object.assign({}, Wr), F1), ue.props), D1 = J({
  name: "Dropdown",
  inheritAttrs: !1,
  props: $1,
  setup(e) {
    const n = M(!1), r = Jn(se(e, "show"), n), o = O(() => {
      const {
        keyField: H,
        childrenField: t
      } = e;
      return Ru(e.options, {
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
    }), i = O(() => o.value.treeNodes), a = M(null), l = M(null), s = M(null), u = O(() => {
      var H, t, F;
      return (F = (t = (H = a.value) !== null && H !== void 0 ? H : l.value) !== null && t !== void 0 ? t : s.value) !== null && F !== void 0 ? F : null;
    }), d = O(() => o.value.getPath(u.value).keyPath), c = O(() => o.value.getPath(e.value).keyPath), f = qe(() => e.keyboard && r.value);
    of({
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
          handler: T
        },
        ArrowLeft: {
          prevent: !0,
          handler: A
        },
        Enter: {
          prevent: !0,
          handler: C
        },
        Escape: w
      }
    }, f);
    const {
      mergedClsPrefixRef: p,
      inlineThemeDisabled: m
    } = Ae(e), v = ue("Dropdown", "-dropdown", A1, d1, e, p);
    me(jo, {
      labelFieldRef: se(e, "labelField"),
      childrenFieldRef: se(e, "childrenField"),
      renderLabelRef: se(e, "renderLabel"),
      renderIconRef: se(e, "renderIcon"),
      hoverKeyRef: a,
      keyboardKeyRef: l,
      lastToggledSubmenuKeyRef: s,
      pendingKeyPathRef: d,
      activeKeyPathRef: c,
      animatedRef: se(e, "animated"),
      mergedShowRef: r,
      nodePropsRef: se(e, "nodeProps"),
      renderOptionRef: se(e, "renderOption"),
      menuPropsRef: se(e, "menuProps"),
      doSelect: g,
      doUpdateShow: b
    }), Pe(r, (H) => {
      !e.animated && !H && x();
    });
    function g(H, t) {
      const {
        onSelect: F
      } = e;
      F && pe(F, H, t);
    }
    function b(H) {
      const {
        "onUpdate:show": t,
        onUpdateShow: F
      } = e;
      t && pe(t, H), F && pe(F, H), n.value = H;
    }
    function x() {
      a.value = null, l.value = null, s.value = null;
    }
    function w() {
      b(!1);
    }
    function A() {
      I("left");
    }
    function y() {
      I("right");
    }
    function S() {
      I("up");
    }
    function T() {
      I("down");
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
        value: F
      } = u;
      return !t || F === null ? null : (H = t.getNode(F)) !== null && H !== void 0 ? H : null;
    }
    function I(H) {
      const {
        value: t
      } = u, {
        value: {
          getFirstAvailableNode: F
        }
      } = o;
      let $ = null;
      if (t === null) {
        const L = F();
        L !== null && ($ = L.key);
      } else {
        const L = P();
        if (L) {
          let R;
          switch (H) {
            case "down":
              R = L.getNext();
              break;
            case "up":
              R = L.getPrev();
              break;
            case "right":
              R = L.getChild();
              break;
            case "left":
              R = L.getParent();
              break;
          }
          R && ($ = R.key);
        }
      }
      $ !== null && (a.value = null, l.value = $);
    }
    const _ = O(() => {
      const {
        size: H,
        inverted: t
      } = e, {
        common: {
          cubicBezierEaseInOut: F
        },
        self: $
      } = v.value, {
        padding: L,
        dividerColor: R,
        borderRadius: V,
        optionOpacityDisabled: Q,
        [U("optionIconSuffixWidth", H)]: Z,
        [U("optionSuffixWidth", H)]: oe,
        [U("optionIconPrefixWidth", H)]: W,
        [U("optionPrefixWidth", H)]: G,
        [U("fontSize", H)]: re,
        [U("optionHeight", H)]: Be,
        [U("optionIconSize", H)]: ie
      } = $, ge = {
        "--n-bezier": F,
        "--n-font-size": re,
        "--n-padding": L,
        "--n-border-radius": V,
        "--n-option-height": Be,
        "--n-option-prefix-width": G,
        "--n-option-icon-prefix-width": W,
        "--n-option-suffix-width": oe,
        "--n-option-icon-suffix-width": Z,
        "--n-option-icon-size": ie,
        "--n-divider-color": R,
        "--n-option-opacity-disabled": Q
      };
      return t ? (ge["--n-color"] = $.colorInverted, ge["--n-option-color-hover"] = $.optionColorHoverInverted, ge["--n-option-color-active"] = $.optionColorActiveInverted, ge["--n-option-text-color"] = $.optionTextColorInverted, ge["--n-option-text-color-hover"] = $.optionTextColorHoverInverted, ge["--n-option-text-color-active"] = $.optionTextColorActiveInverted, ge["--n-option-text-color-child-active"] = $.optionTextColorChildActiveInverted, ge["--n-prefix-color"] = $.prefixColorInverted, ge["--n-suffix-color"] = $.suffixColorInverted, ge["--n-group-header-text-color"] = $.groupHeaderTextColorInverted) : (ge["--n-color"] = $.color, ge["--n-option-color-hover"] = $.optionColorHover, ge["--n-option-color-active"] = $.optionColorActive, ge["--n-option-text-color"] = $.optionTextColor, ge["--n-option-text-color-hover"] = $.optionTextColorHover, ge["--n-option-text-color-active"] = $.optionTextColorActive, ge["--n-option-text-color-child-active"] = $.optionTextColorChildActive, ge["--n-prefix-color"] = $.prefixColor, ge["--n-suffix-color"] = $.suffixColor, ge["--n-group-header-text-color"] = $.groupHeaderTextColor), ge;
    }), K = m ? Ne("dropdown", O(() => `${e.size[0]}${e.inverted ? "i" : ""}`), _, e) : void 0;
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
      cssVars: m ? void 0 : _,
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
        ref: ah(i),
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
      return h(Ju, cn(this.$attrs, p, f));
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
    return h(Vr, Object.assign({}, sn(this.$props, P1), r), {
      trigger: () => {
        var o, i;
        return (i = (o = this.$slots).default) === null || i === void 0 ? void 0 : i.call(o);
      }
    });
  }
}), Qu = "n-dialog-provider", ed = "n-dialog-api", E1 = "n-dialog-reactive-list";
function td() {
  const e = he(ed, null);
  return e === null && fn("use-dialog", "No outer <n-dialog-provider /> founded."), e;
}
const z1 = {
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
function k1(e) {
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
    fontSize: w
  } = e;
  return Object.assign(Object.assign({}, z1), {
    fontSize: w,
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
const nd = {
  name: "Dialog",
  common: He,
  peers: {
    Button: Pa
  },
  self: k1
}, Wo = {
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
}, rd = Fn(Wo), T1 = D([k("dialog", `
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
 `, [z("icon", {
  color: "var(--n-icon-color)"
}), N("bordered", {
  border: "var(--n-border)"
}), N("icon-top", [z("close", {
  margin: "var(--n-close-margin)"
}), z("icon", {
  margin: "var(--n-icon-margin)"
}), z("content", {
  textAlign: "center"
}), z("title", {
  justifyContent: "center"
}), z("action", {
  justifyContent: "center"
})]), N("icon-left", [z("icon", {
  margin: "var(--n-icon-margin)"
}), N("closable", [z("title", `
 padding-right: calc(var(--n-close-size) + 6px);
 `)])]), z("close", `
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 z-index: 1;
 `), z("content", `
 font-size: var(--n-font-size);
 margin: var(--n-content-margin);
 position: relative;
 word-break: break-word;
 `, [N("last", "margin-bottom: 0;")]), z("action", `
 display: flex;
 justify-content: flex-end;
 `, [D("> *:not(:last-child)", `
 margin-right: var(--n-action-space);
 `)]), z("icon", `
 font-size: var(--n-icon-size);
 transition: color .3s var(--n-bezier);
 `), z("title", `
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 font-size: var(--n-title-font-size);
 font-weight: var(--n-title-font-weight);
 color: var(--n-title-text-color);
 `), k("dialog-icon-container", `
 display: flex;
 justify-content: center;
 `)]), Zi(k("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), k("dialog", [Ps(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), R1 = {
  default: () => h(Fo, null),
  info: () => h(Fo, null),
  success: () => h(Sa, null),
  warning: () => h(_o, null),
  error: () => h(Ba, null)
}, od = J({
  name: "Dialog",
  alias: [
    "NimbusConfirmCard",
    // deprecated
    "Confirm"
    // deprecated
  ],
  props: Object.assign(Object.assign({}, ue.props), Wo),
  setup(e) {
    const {
      mergedComponentPropsRef: n,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = gt("Dialog", i, r), l = O(() => {
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
    const c = ue("Dialog", "-dialog", T1, nd, e, r), f = O(() => {
      const {
        type: m
      } = e, v = l.value, {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          fontSize: b,
          lineHeight: x,
          border: w,
          titleTextColor: A,
          textColor: y,
          color: S,
          closeBorderRadius: T,
          closeColorHover: C,
          closeColorPressed: P,
          closeIconColor: I,
          closeIconColorHover: _,
          closeIconColorPressed: K,
          closeIconSize: H,
          borderRadius: t,
          titleFontWeight: F,
          titleFontSize: $,
          padding: L,
          iconSize: R,
          actionSpace: V,
          contentMargin: Q,
          closeSize: Z,
          [v === "top" ? "iconMarginIconTop" : "iconMargin"]: oe,
          [v === "top" ? "closeMarginIconTop" : "closeMargin"]: W,
          [U("iconColor", m)]: G
        }
      } = c.value, re = St(oe);
      return {
        "--n-font-size": b,
        "--n-icon-color": G,
        "--n-bezier": g,
        "--n-close-margin": W,
        "--n-icon-margin-top": re.top,
        "--n-icon-margin-right": re.right,
        "--n-icon-margin-bottom": re.bottom,
        "--n-icon-margin-left": re.left,
        "--n-icon-size": R,
        "--n-close-size": Z,
        "--n-close-icon-size": H,
        "--n-close-border-radius": T,
        "--n-close-color-hover": C,
        "--n-close-color-pressed": P,
        "--n-close-icon-color": I,
        "--n-close-icon-color-hover": _,
        "--n-close-icon-color-pressed": K,
        "--n-color": S,
        "--n-text-color": y,
        "--n-border-radius": t,
        "--n-padding": L,
        "--n-line-height": x,
        "--n-border": w,
        "--n-content-margin": Q,
        "--n-title-font-size": $,
        "--n-title-font-weight": F,
        "--n-title-text-color": A,
        "--n-action-space": V
      };
    }), p = o ? Ne("dialog", O(() => `${e.type[0]}${l.value[0]}`), f, e) : void 0;
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
      mergedClsPrefix: w
    } = this;
    (e = this.onRender) === null || e === void 0 || e.call(this);
    const A = a ? h(yt, {
      clsPrefix: w,
      class: `${w}-dialog__icon`
    }, {
      default: () => _e(this.$slots.icon, (S) => S || (this.icon ? je(this.icon) : R1[this.type]()))
    }) : null, y = _e(this.$slots.action, (S) => S || c || d || u ? h("div", {
      class: [`${w}-dialog__action`, this.actionClass],
      style: this.actionStyle
    }, S || (u ? [je(u)] : [this.negativeText && h(zr, Object.assign({
      theme: g.peers.Button,
      themeOverrides: g.peerOverrides.Button,
      ghost: !0,
      size: "small",
      onClick: v
    }, p), {
      default: () => je(this.negativeText)
    }), this.positiveText && h(zr, Object.assign({
      theme: g.peers.Button,
      themeOverrides: g.peerOverrides.Button,
      size: "small",
      type: x === "default" ? "primary" : x,
      disabled: b,
      loading: b,
      onClick: m
    }, f), {
      default: () => je(this.positiveText)
    })])) : null);
    return h("div", {
      class: [`${w}-dialog`, this.themeClass, this.closable && `${w}-dialog--closable`, `${w}-dialog--icon-${r}`, n && `${w}-dialog--bordered`, this.rtlEnabled && `${w}-dialog--rtl`],
      style: o,
      role: "dialog"
    }, i ? _e(this.$slots.close, (S) => {
      const T = [`${w}-dialog__close`, this.rtlEnabled && `${w}-dialog--rtl`];
      return S ? h("div", {
        class: T
      }, S) : h(Lr, {
        clsPrefix: w,
        class: T,
        onClick: this.handleCloseClick
      });
    }) : null, a && r === "top" ? h("div", {
      class: `${w}-dialog-icon-container`
    }, A) : null, h("div", {
      class: [`${w}-dialog__title`, this.titleClass],
      style: this.titleStyle
    }, a && r === "left" ? A : null, Et(this.$slots.header, () => [je(l)])), h("div", {
      class: [`${w}-dialog__content`, y ? "" : `${w}-dialog__content--last`, this.contentClass],
      style: this.contentStyle
    }, Et(this.$slots.default, () => [je(s)])), y);
  }
});
function O1(e) {
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
const M1 = {
  name: "Modal",
  common: He,
  peers: {
    Scrollbar: No,
    Dialog: nd,
    Card: Ku
  },
  self: O1
}, za = Object.assign(Object.assign({}, $a), Wo), I1 = Fn(za), _1 = J({
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
  }, za), {
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
    const n = M(null), r = M(null), o = M(e.show), i = M(null), a = M(null);
    Pe(se(e, "show"), (b) => {
      b && (o.value = !0);
    }), df(O(() => e.blockScroll && o.value));
    const l = he(Ts);
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
        const w = r.value.containerScrollTop;
        return `${b}px ${x + w}px`;
      }
      return "";
    }
    function u(b) {
      if (l.transformOriginRef.value === "center")
        return;
      const x = l.getMousePosition();
      if (!x || !r.value) return;
      const w = r.value.containerScrollTop, {
        offsetLeft: A,
        offsetTop: y
      } = b;
      if (x) {
        const S = x.y, T = x.x;
        i.value = -(A - T), a.value = -(y - S - w);
      }
      b.style.transformOrigin = s();
    }
    function d(b) {
      Je(() => {
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
    const g = M(null);
    return Pe(g, (b) => {
      b && Je(() => {
        const x = b.el;
        x && n.value !== x && (n.value = x);
      });
    }), me(To, n), me(ko, null), me(Mr, null), {
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
      if (s = Fi(e), !s) {
        Tt("modal", "default slot is empty");
        return;
      }
      s = vs(s), s.props = cn({
        class: `${l}-modal`
      }, n, s.props || {});
    }
    return this.displayDirective === "show" || this.displayed || this.show ? kt(h("div", {
      role: "none",
      class: `${l}-modal-body-wrapper`
    }, h(Hr, {
      ref: "scrollbarRef",
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      contentClass: `${l}-modal-scroll-content`
    }, {
      default: () => {
        var u;
        return [(u = this.renderMask) === null || u === void 0 ? void 0 : u.call(this), h(Ys, {
          disabled: !this.trapFocus,
          active: this.show,
          onEsc: this.onEsc,
          autoFocus: this.autoFocus
        }, {
          default: () => {
            var d;
            return h(ct, {
              name: "fade-in-scale-up-transition",
              appear: (d = this.appear) !== null && d !== void 0 ? d : this.isMounted,
              onEnter: r,
              onAfterEnter: this.onAfterEnter,
              onAfterLeave: o,
              onBeforeLeave: i
            }, {
              default: () => {
                const c = [[Xn, this.show]], {
                  onClickoutside: f
                } = this;
                return f && c.push([Br, this.onClickoutside, void 0, {
                  capture: !0
                }]), kt(this.preset === "confirm" || this.preset === "dialog" ? h(od, Object.assign({}, this.$attrs, {
                  class: [`${l}-modal`, this.$attrs.class],
                  ref: "bodyRef",
                  theme: this.mergedTheme.peers.Dialog,
                  themeOverrides: this.mergedTheme.peerOverrides.Dialog
                }, sn(this.$props, rd), {
                  "aria-modal": "true"
                }), e) : this.preset === "card" ? h(Ub, Object.assign({}, this.$attrs, {
                  ref: "bodyRef",
                  class: [`${l}-modal`, this.$attrs.class],
                  theme: this.mergedTheme.peers.Card,
                  themeOverrides: this.mergedTheme.peerOverrides.Card
                }, sn(this.$props, qb), {
                  "aria-modal": "true",
                  role: "dialog"
                }), e) : this.childNodeRef = s, c);
              }
            });
          }
        })];
      }
    })), [[Xn, this.displayDirective === "if" || this.displayed || this.show]]) : null;
  }
}), L1 = D([k("modal-container", `
 position: fixed;
 left: 0;
 top: 0;
 height: 0;
 width: 0;
 display: flex;
 `), k("modal-mask", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background-color: rgba(0, 0, 0, .4);
 `, [Lo({
  enterDuration: ".25s",
  leaveDuration: ".25s",
  enterCubicBezier: "var(--n-bezier-ease-out)",
  leaveCubicBezier: "var(--n-bezier-ease-out)"
})]), k("modal-body-wrapper", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: visible;
 `, [k("modal-scroll-content", `
 min-height: 100%;
 display: flex;
 position: relative;
 `)]), k("modal", `
 position: relative;
 align-self: center;
 color: var(--n-text-color);
 margin: auto;
 box-shadow: var(--n-box-shadow);
 `, [Ho({
  duration: ".25s",
  enterScale: ".5"
})])]), id = Object.assign(Object.assign(Object.assign(Object.assign({}, ue.props), {
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
}), za), {
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
}), ad = J({
  name: "Modal",
  inheritAttrs: !1,
  props: id,
  setup(e) {
    process.env.NODE_ENV !== "production" && (e.onHide && at("modal", "`on-hide` is deprecated."), e.onAfterHide && at("modal", "`on-after-hide` is deprecated, please use `on-after-leave` instead."), e.onBeforeHide && at("modal", "`on-before-hide` is deprecated, please use `on-before-leave` instead."), e.overlayStyle && at("modal", "`overlay-style` is deprecated, please use `style` instead."));
    const n = M(null), {
      mergedClsPrefixRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = ue("Modal", "-modal", L1, M1, e, r), l = mo(64), s = xo(), u = nr(), d = e.internalDialog ? he(Qu, null) : null, c = e.internalModal ? he(af, null) : null, f = uf();
    function p(T) {
      const {
        onUpdateShow: C,
        "onUpdate:show": P,
        onHide: I
      } = e;
      C && pe(C, T), P && pe(P, T), I && !T && I(T);
    }
    function m() {
      const {
        onClose: T
      } = e;
      T ? Promise.resolve(T()).then((C) => {
        C !== !1 && p(!1);
      }) : p(!1);
    }
    function v() {
      const {
        onPositiveClick: T
      } = e;
      T ? Promise.resolve(T()).then((C) => {
        C !== !1 && p(!1);
      }) : p(!1);
    }
    function g() {
      const {
        onNegativeClick: T
      } = e;
      T ? Promise.resolve(T()).then((C) => {
        C !== !1 && p(!1);
      }) : p(!1);
    }
    function b() {
      const {
        onBeforeLeave: T,
        onBeforeHide: C
      } = e;
      T && pe(T), C && C();
    }
    function x() {
      const {
        onAfterLeave: T,
        onAfterHide: C
      } = e;
      T && pe(T), C && C();
    }
    function w(T) {
      var C;
      const {
        onMaskClick: P
      } = e;
      P && P(T), e.maskClosable && !((C = n.value) === null || C === void 0) && C.contains(Zn(T)) && p(!1);
    }
    function A(T) {
      var C;
      (C = e.onEsc) === null || C === void 0 || C.call(e), e.show && e.closeOnEsc && ih(T) && (f.value || p(!1));
    }
    me(Ts, {
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
      appearRef: se(e, "internalAppear"),
      transformOriginRef: se(e, "transformOrigin")
    });
    const y = O(() => {
      const {
        common: {
          cubicBezierEaseOut: T
        },
        self: {
          boxShadow: C,
          color: P,
          textColor: I
        }
      } = a.value;
      return {
        "--n-bezier-ease-out": T,
        "--n-box-shadow": C,
        "--n-color": P,
        "--n-text-color": I
      };
    }), S = i ? Ne("theme-class", void 0, y, e) : void 0;
    return {
      mergedClsPrefix: r,
      namespace: o,
      isMounted: u,
      containerRef: n,
      presetProps: O(() => sn(e, I1)),
      handleEsc: A,
      handleAfterLeave: x,
      handleClickoutside: w,
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
    return h(_s, {
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
        }, h(_1, Object.assign({
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
            return h(ct, {
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
        }), this.$slots)), [[ia, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
}), N1 = Object.assign(Object.assign({}, Wo), {
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
}), H1 = J({
  name: "DialogEnvironment",
  props: Object.assign(Object.assign({}, N1), {
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
    const n = M(!0);
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
    return h(ad, {
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
      default: () => h(od, Object.assign({}, sn(this.$props, rd), {
        style: this.internalStyle,
        onClose: o,
        onNegativeClick: r,
        onPositiveClick: e
      }))
    });
  }
}), j1 = {
  injectionKey: String,
  to: [String, Object]
}, ld = J({
  name: "DialogProvider",
  props: j1,
  setup() {
    const e = M([]), n = {};
    function r(s = {}) {
      const u = ln(), d = Or(Object.assign(Object.assign({}, s), {
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
    return me(ed, l), me(Qu, {
      clickedRef: mo(64),
      clickedPositionRef: xo()
    }), me(E1, e), Object.assign(Object.assign({}, l), {
      dialogList: e,
      dialogInstRefs: n,
      handleAfterLeave: i
    });
  },
  render() {
    var e, n;
    return h(et, null, [this.dialogList.map((r) => h(H1, Ir(r, ["destroy", "style"], {
      internalStyle: r.style,
      to: this.to,
      ref: (o) => {
        o === null ? delete this.dialogInstRefs[`n-dialog-${r.key}`] : this.dialogInstRefs[`n-dialog-${r.key}`] = o;
      },
      internalKey: r.key,
      onInternalAfterLeave: this.handleAfterLeave
    }))), (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e)]);
  }
}), sd = "n-loading-bar", ud = "n-loading-bar-api";
function W1(e) {
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
const V1 = {
  name: "LoadingBar",
  common: He,
  self: W1
}, q1 = k("loading-bar-container", `
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`, [Lo({
  enterDuration: "0.3s",
  leaveDuration: "0.8s"
}), k("loading-bar", `
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
var ao = function(e, n, r, o) {
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
function lo(e, n) {
  return `${n}-loading-bar ${n}-loading-bar--${e}`;
}
const K1 = J({
  name: "LoadingBar",
  props: {
    containerClass: String,
    containerStyle: [String, Object]
  },
  setup() {
    const {
      inlineThemeDisabled: e
    } = Ae(), {
      props: n,
      mergedClsPrefixRef: r
    } = he(sd), o = M(null), i = M(!1), a = M(!1), l = M(!1), s = M(!1);
    let u = !1;
    const d = M(!1), c = O(() => {
      const {
        loadingBarStyle: S
      } = n;
      return S ? S[d.value ? "error" : "loading"] : "";
    });
    function f() {
      return ao(this, void 0, void 0, function* () {
        i.value = !1, l.value = !1, u = !1, d.value = !1, s.value = !0, yield Je(), s.value = !1;
      });
    }
    function p() {
      return ao(this, arguments, void 0, function* (S = 0, T = 80, C = "starting") {
        if (a.value = !0, yield f(), u) return;
        l.value = !0, yield Je();
        const P = o.value;
        P && (P.style.maxWidth = `${S}%`, P.style.transition = "none", P.offsetWidth, P.className = lo(C, r.value), P.style.transition = "", P.style.maxWidth = `${T}%`);
      });
    }
    function m() {
      return ao(this, void 0, void 0, function* () {
        if (u || d.value) return;
        a.value && (yield Je()), u = !0;
        const S = o.value;
        S && (S.className = lo("finishing", r.value), S.style.maxWidth = "100%", S.offsetWidth, l.value = !1);
      });
    }
    function v() {
      if (!(u || d.value))
        if (!l.value)
          p(100, 100, "error").then(() => {
            d.value = !0;
            const S = o.value;
            S && (S.className = lo("error", r.value), S.offsetWidth, l.value = !1);
          });
        else {
          d.value = !0;
          const S = o.value;
          if (!S) return;
          S.className = lo("error", r.value), S.style.maxWidth = "100%", S.offsetWidth, l.value = !1;
        }
    }
    function g() {
      i.value = !0;
    }
    function b() {
      i.value = !1;
    }
    function x() {
      return ao(this, void 0, void 0, function* () {
        yield f();
      });
    }
    const w = ue("LoadingBar", "-loading-bar", q1, V1, n, r), A = O(() => {
      const {
        self: {
          height: S,
          colorError: T,
          colorLoading: C
        }
      } = w.value;
      return {
        "--n-height": S,
        "--n-color-loading": C,
        "--n-color-error": T
      };
    }), y = e ? Ne("loading-bar", void 0, A, n) : void 0;
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
    return h(ct, {
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
        })), [[Xn, this.loading || !this.loading && this.entering]]);
      }
    });
  }
}), U1 = Object.assign(Object.assign({}, ue.props), {
  to: {
    type: [String, Object, Boolean],
    default: void 0
  },
  containerClass: String,
  containerStyle: [String, Object],
  loadingBarStyle: {
    type: Object
  }
}), G1 = J({
  name: "LoadingBarProvider",
  props: U1,
  setup(e) {
    const n = nr(), r = M(null), o = {
      start() {
        var a;
        n.value ? (a = r.value) === null || a === void 0 || a.start() : Je(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.start();
        });
      },
      error() {
        var a;
        n.value ? (a = r.value) === null || a === void 0 || a.error() : Je(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.error();
        });
      },
      finish() {
        var a;
        n.value ? (a = r.value) === null || a === void 0 || a.finish() : Je(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.finish();
        });
      }
    }, {
      mergedClsPrefixRef: i
    } = Ae(e);
    return me(ud, o), me(sd, {
      props: e,
      mergedClsPrefixRef: i
    }), Object.assign(o, {
      loadingBarRef: r
    });
  },
  render() {
    var e, n;
    return h(et, null, h(Eo, {
      disabled: this.to === !1,
      to: this.to || "body"
    }, h(K1, {
      ref: "loadingBarRef",
      containerStyle: this.containerStyle,
      containerClass: this.containerClass
    })), (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e));
  }
});
function X1() {
  const e = he(ud, null);
  return e === null && fn("use-loading-bar", "No outer <n-loading-bar-provider /> founded."), e;
}
const dd = "n-message-api", cd = "n-message-provider", Y1 = {
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
function Z1(e) {
  const {
    textColor2: n,
    closeIconColor: r,
    closeIconColorHover: o,
    closeIconColorPressed: i,
    infoColor: a,
    successColor: l,
    errorColor: s,
    warningColor: u,
    popoverColor: d,
    boxShadow2: c,
    primaryColor: f,
    lineHeight: p,
    borderRadius: m,
    closeColorHover: v,
    closeColorPressed: g
  } = e;
  return Object.assign(Object.assign({}, Y1), {
    closeBorderRadius: m,
    textColor: n,
    textColorInfo: n,
    textColorSuccess: n,
    textColorError: n,
    textColorWarning: n,
    textColorLoading: n,
    color: d,
    colorInfo: d,
    colorSuccess: d,
    colorError: d,
    colorWarning: d,
    colorLoading: d,
    boxShadow: c,
    boxShadowInfo: c,
    boxShadowSuccess: c,
    boxShadowError: c,
    boxShadowWarning: c,
    boxShadowLoading: c,
    iconColor: n,
    iconColorInfo: a,
    iconColorSuccess: l,
    iconColorWarning: u,
    iconColorError: s,
    iconColorLoading: f,
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
    loadingColor: f,
    lineHeight: p,
    borderRadius: m
  });
}
const J1 = {
  name: "Message",
  common: He,
  self: Z1
}, fd = {
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
}, Q1 = D([k("message-wrapper", `
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
})]), k("message", `
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
 `, [z("content", `
 display: inline-block;
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 `), z("icon", `
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
 `, [Er()])]), z("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 flex-shrink: 0;
 `, [D("&:hover", `
 color: var(--n-close-icon-color-hover);
 `), D("&:active", `
 color: var(--n-close-icon-color-pressed);
 `)])]), k("message-container", `
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
 `)])]), eC = {
  info: () => h(Fo, null),
  success: () => h(Sa, null),
  warning: () => h(_o, null),
  error: () => h(Ba, null),
  default: () => null
}, tC = J({
  name: "Message",
  props: Object.assign(Object.assign({}, fd), {
    render: Function
  }),
  setup(e) {
    const {
      inlineThemeDisabled: n,
      mergedRtlRef: r
    } = Ae(e), {
      props: o,
      mergedClsPrefixRef: i
    } = he(cd), a = gt("Message", r, i), l = ue("Message", "-message", Q1, J1, o, i), s = O(() => {
      const {
        type: d
      } = e, {
        common: {
          cubicBezierEaseInOut: c
        },
        self: {
          padding: f,
          margin: p,
          maxWidth: m,
          iconMargin: v,
          closeMargin: g,
          closeSize: b,
          iconSize: x,
          fontSize: w,
          lineHeight: A,
          borderRadius: y,
          iconColorInfo: S,
          iconColorSuccess: T,
          iconColorWarning: C,
          iconColorError: P,
          iconColorLoading: I,
          closeIconSize: _,
          closeBorderRadius: K,
          [U("textColor", d)]: H,
          [U("boxShadow", d)]: t,
          [U("color", d)]: F,
          [U("closeColorHover", d)]: $,
          [U("closeColorPressed", d)]: L,
          [U("closeIconColor", d)]: R,
          [U("closeIconColorPressed", d)]: V,
          [U("closeIconColorHover", d)]: Q
        }
      } = l.value;
      return {
        "--n-bezier": c,
        "--n-margin": p,
        "--n-padding": f,
        "--n-max-width": m,
        "--n-font-size": w,
        "--n-icon-margin": v,
        "--n-icon-size": x,
        "--n-close-icon-size": _,
        "--n-close-border-radius": K,
        "--n-close-size": b,
        "--n-close-margin": g,
        "--n-text-color": H,
        "--n-color": F,
        "--n-box-shadow": t,
        "--n-icon-color-info": S,
        "--n-icon-color-success": T,
        "--n-icon-color-warning": C,
        "--n-icon-color-error": P,
        "--n-icon-color-loading": I,
        "--n-close-color-hover": $,
        "--n-close-color-pressed": L,
        "--n-close-icon-color": R,
        "--n-close-icon-color-pressed": V,
        "--n-close-icon-color-hover": Q,
        "--n-line-height": A,
        "--n-border-radius": y
      };
    }), u = n ? Ne("message", O(() => e.type[0]), s, {}) : void 0;
    return {
      mergedClsPrefix: i,
      rtlEnabled: a,
      messageProviderProps: o,
      handleClose() {
        var d;
        (d = e.onClose) === null || d === void 0 || d.call(e);
      },
      cssVars: n ? void 0 : s,
      themeClass: u == null ? void 0 : u.themeClass,
      onRender: u == null ? void 0 : u.onRender,
      placement: o.placement
    };
  },
  render() {
    const {
      render: e,
      type: n,
      closable: r,
      content: o,
      mergedClsPrefix: i,
      cssVars: a,
      themeClass: l,
      onRender: s,
      icon: u,
      handleClose: d,
      showIcon: c
    } = this;
    s == null || s();
    let f;
    return h("div", {
      class: [`${i}-message-wrapper`, l],
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
      style: [{
        alignItems: this.placement.startsWith("top") ? "flex-start" : "flex-end"
      }, a]
    }, e ? e(this.$props) : h("div", {
      class: [`${i}-message ${i}-message--${n}-type`, this.rtlEnabled && `${i}-message--rtl`]
    }, (f = nC(u, n, i)) && c ? h("div", {
      class: `${i}-message__icon ${i}-message__icon--${n}-type`
    }, h(Io, null, {
      default: () => f
    })) : null, h("div", {
      class: `${i}-message__content`
    }, je(o)), r ? h(Lr, {
      clsPrefix: i,
      class: `${i}-message__close`,
      onClick: d,
      absolute: !0
    }) : null));
  }
});
function nC(e, n, r) {
  if (typeof e == "function")
    return e();
  {
    const o = n === "loading" ? h(Nr, {
      clsPrefix: r,
      strokeWidth: 24,
      scale: 0.85
    }) : eC[n]();
    return o ? h(yt, {
      clsPrefix: r,
      key: n
    }, {
      default: () => o
    }) : null;
  }
}
const rC = J({
  name: "MessageEnvironment",
  props: Object.assign(Object.assign({}, fd), {
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
    let n = null;
    const r = M(!0);
    Qe(() => {
      o();
    });
    function o() {
      const {
        duration: c
      } = e;
      c && (n = window.setTimeout(l, c));
    }
    function i(c) {
      c.currentTarget === c.target && n !== null && (window.clearTimeout(n), n = null);
    }
    function a(c) {
      c.currentTarget === c.target && o();
    }
    function l() {
      const {
        onHide: c
      } = e;
      r.value = !1, n && (window.clearTimeout(n), n = null), c && c();
    }
    function s() {
      const {
        onClose: c
      } = e;
      c && c(), l();
    }
    function u() {
      const {
        onAfterLeave: c,
        onInternalAfterLeave: f,
        onAfterHide: p,
        internalKey: m
      } = e;
      c && c(), f && f(m), p && p();
    }
    function d() {
      l();
    }
    return {
      show: r,
      hide: l,
      handleClose: s,
      handleAfterLeave: u,
      handleMouseleave: a,
      handleMouseenter: i,
      deactivate: d
    };
  },
  render() {
    return h(Aa, {
      appear: !0,
      onAfterLeave: this.handleAfterLeave,
      onLeave: this.onLeave
    }, {
      default: () => [this.show ? h(tC, {
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
}), oC = Object.assign(Object.assign({}, ue.props), {
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
}), iC = J({
  name: "MessageProvider",
  props: oC,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Ae(e), r = M([]), o = M({}), i = {
      create(u, d) {
        return a(u, Object.assign({
          type: "default"
        }, d));
      },
      info(u, d) {
        return a(u, Object.assign(Object.assign({}, d), {
          type: "info"
        }));
      },
      success(u, d) {
        return a(u, Object.assign(Object.assign({}, d), {
          type: "success"
        }));
      },
      warning(u, d) {
        return a(u, Object.assign(Object.assign({}, d), {
          type: "warning"
        }));
      },
      error(u, d) {
        return a(u, Object.assign(Object.assign({}, d), {
          type: "error"
        }));
      },
      loading(u, d) {
        return a(u, Object.assign(Object.assign({}, d), {
          type: "loading"
        }));
      },
      destroyAll: s
    };
    me(cd, {
      props: e,
      mergedClsPrefixRef: n
    }), me(dd, i);
    function a(u, d) {
      const c = ln(), f = Or(Object.assign(Object.assign({}, d), {
        content: u,
        key: c,
        destroy: () => {
          var m;
          (m = o.value[c]) === null || m === void 0 || m.hide();
        }
      })), {
        max: p
      } = e;
      return p && r.value.length >= p && r.value.shift(), r.value.push(f), f;
    }
    function l(u) {
      r.value.splice(r.value.findIndex((d) => d.key === u), 1), delete o.value[u];
    }
    function s() {
      Object.values(o.value).forEach((u) => {
        u.hide();
      });
    }
    return Object.assign({
      mergedClsPrefix: n,
      messageRefs: o,
      messageList: r,
      handleAfterLeave: l
    }, i);
  },
  render() {
    var e, n, r;
    return h(et, null, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e), this.messageList.length ? h(Eo, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, h("div", {
      class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass],
      key: "message-container",
      style: this.containerStyle
    }, this.messageList.map((o) => h(rC, Object.assign({
      ref: (i) => {
        i && (this.messageRefs[o.key] = i);
      },
      internalKey: o.key,
      onInternalAfterLeave: this.handleAfterLeave
    }, Ir(o, ["destroy"], void 0), {
      duration: o.duration === void 0 ? this.duration : o.duration,
      keepAliveOnHover: o.keepAliveOnHover === void 0 ? this.keepAliveOnHover : o.keepAliveOnHover,
      closable: o.closable === void 0 ? this.closable : o.closable
    }))))) : null);
  }
});
function aC() {
  const e = he(dd, null);
  return e === null && fn("use-message", "No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."), e;
}
const ns = "n-modal-provider", hd = "n-modal-api", lC = "n-modal-reactive-list", sC = J({
  name: "ModalEnvironment",
  props: Object.assign(Object.assign({}, id), {
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
    const n = M(!0);
    function r() {
      const {
        onInternalAfterLeave: c,
        internalKey: f,
        onAfterLeave: p
      } = e;
      c && c(f), p && p();
    }
    function o() {
      const {
        onPositiveClick: c
      } = e;
      c ? Promise.resolve(c()).then((f) => {
        f !== !1 && u();
      }) : u();
    }
    function i() {
      const {
        onNegativeClick: c
      } = e;
      c ? Promise.resolve(c()).then((f) => {
        f !== !1 && u();
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
      handleUpdateShow: e,
      handleAfterLeave: n,
      handleMaskClick: r,
      handleEsc: o,
      show: i
    } = this;
    return h(ad, Object.assign({}, this.$props, {
      show: i,
      onUpdateShow: e,
      onMaskClick: r,
      onEsc: o,
      onAfterLeave: n,
      internalAppear: !0,
      internalModal: !0
    }));
  }
}), uC = {
  to: [String, Object]
}, vd = J({
  name: "ModalProvider",
  props: uC,
  setup() {
    const e = mo(64), n = xo(), r = M([]), o = {};
    function i(u = {}) {
      const d = ln(), c = Or(Object.assign(Object.assign({}, u), {
        key: d,
        destroy: () => {
          var f;
          (f = o[`n-modal-${d}`]) === null || f === void 0 || f.hide();
        }
      }));
      return r.value.push(c), c;
    }
    function a(u) {
      const {
        value: d
      } = r;
      d.splice(d.findIndex((c) => c.key === u), 1);
    }
    function l() {
      Object.values(o).forEach((u) => {
        u == null || u.hide();
      });
    }
    const s = {
      create: i,
      destroyAll: l
    };
    return me(hd, s), me(ns, {
      clickedRef: mo(64),
      clickedPositionRef: xo()
    }), me(lC, r), me(ns, {
      clickedRef: e,
      clickedPositionRef: n
    }), Object.assign(Object.assign({}, s), {
      modalList: r,
      modalInstRefs: o,
      handleAfterLeave: a
    });
  },
  render() {
    var e, n;
    return h(et, null, [this.modalList.map((r) => {
      var o;
      return h(sC, Ir(r, ["destroy"], {
        to: (o = r.to) !== null && o !== void 0 ? o : this.to,
        ref: (i) => {
          i === null ? delete this.modalInstRefs[`n-modal-${r.key}`] : this.modalInstRefs[`n-modal-${r.key}`] = i;
        },
        internalKey: r.key,
        onInternalAfterLeave: this.handleAfterLeave
      }));
    }), (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e)]);
  }
}), dC = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px"
};
function cC(e) {
  const {
    textColor2: n,
    successColor: r,
    infoColor: o,
    warningColor: i,
    errorColor: a,
    popoverColor: l,
    closeIconColor: s,
    closeIconColorHover: u,
    closeIconColorPressed: d,
    closeColorHover: c,
    closeColorPressed: f,
    textColor1: p,
    textColor3: m,
    borderRadius: v,
    fontWeightStrong: g,
    boxShadow2: b,
    lineHeight: x,
    fontSize: w
  } = e;
  return Object.assign(Object.assign({}, dC), {
    borderRadius: v,
    lineHeight: x,
    fontSize: w,
    headerFontWeight: g,
    iconColor: n,
    iconColorSuccess: r,
    iconColorInfo: o,
    iconColorWarning: i,
    iconColorError: a,
    color: l,
    textColor: n,
    closeIconColor: s,
    closeIconColorHover: u,
    closeIconColorPressed: d,
    closeBorderRadius: v,
    closeColorHover: c,
    closeColorPressed: f,
    headerTextColor: p,
    descriptionTextColor: m,
    actionTextColor: n,
    boxShadow: b
  });
}
const fC = {
  name: "Notification",
  common: He,
  peers: {
    Scrollbar: No
  },
  self: cC
}, Vo = "n-notification-provider", hC = J({
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
      mergedClsPrefixRef: n,
      wipTransitionCountRef: r
    } = he(Vo), o = M(null);
    return ot(() => {
      var i, a;
      r.value > 0 ? (i = o == null ? void 0 : o.value) === null || i === void 0 || i.classList.add("transitioning") : (a = o == null ? void 0 : o.value) === null || a === void 0 || a.classList.remove("transitioning");
    }), {
      selfRef: o,
      mergedTheme: e,
      mergedClsPrefix: n,
      transitioning: r
    };
  },
  render() {
    const {
      $slots: e,
      scrollable: n,
      mergedClsPrefix: r,
      mergedTheme: o,
      placement: i
    } = this;
    return h("div", {
      ref: "selfRef",
      class: [`${r}-notification-container`, n && `${r}-notification-container--scrollable`, `${r}-notification-container--${i}`]
    }, n ? h(Hr, {
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      contentStyle: {
        overflow: "hidden"
      }
    }, e) : e);
  }
}), vC = {
  info: () => h(Fo, null),
  success: () => h(Sa, null),
  warning: () => h(_o, null),
  error: () => h(Ba, null),
  default: () => null
}, ka = {
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
}, pC = Fn(ka), gC = J({
  name: "Notification",
  props: ka,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      mergedThemeRef: r,
      props: o
    } = he(Vo), {
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(), l = gt("Notification", a, n), s = O(() => {
      const {
        type: d
      } = e, {
        self: {
          color: c,
          textColor: f,
          closeIconColor: p,
          closeIconColorHover: m,
          closeIconColorPressed: v,
          headerTextColor: g,
          descriptionTextColor: b,
          actionTextColor: x,
          borderRadius: w,
          headerFontWeight: A,
          boxShadow: y,
          lineHeight: S,
          fontSize: T,
          closeMargin: C,
          closeSize: P,
          width: I,
          padding: _,
          closeIconSize: K,
          closeBorderRadius: H,
          closeColorHover: t,
          closeColorPressed: F,
          titleFontSize: $,
          metaFontSize: L,
          descriptionFontSize: R,
          [U("iconColor", d)]: V
        },
        common: {
          cubicBezierEaseOut: Q,
          cubicBezierEaseIn: Z,
          cubicBezierEaseInOut: oe
        }
      } = r.value, {
        left: W,
        right: G,
        top: re,
        bottom: Be
      } = St(_);
      return {
        "--n-color": c,
        "--n-font-size": T,
        "--n-text-color": f,
        "--n-description-text-color": b,
        "--n-action-text-color": x,
        "--n-title-text-color": g,
        "--n-title-font-weight": A,
        "--n-bezier": oe,
        "--n-bezier-ease-out": Q,
        "--n-bezier-ease-in": Z,
        "--n-border-radius": w,
        "--n-box-shadow": y,
        "--n-close-border-radius": H,
        "--n-close-color-hover": t,
        "--n-close-color-pressed": F,
        "--n-close-icon-color": p,
        "--n-close-icon-color-hover": m,
        "--n-close-icon-color-pressed": v,
        "--n-line-height": S,
        "--n-icon-color": V,
        "--n-close-margin": C,
        "--n-close-size": P,
        "--n-close-icon-size": K,
        "--n-width": I,
        "--n-padding-left": W,
        "--n-padding-right": G,
        "--n-padding-top": re,
        "--n-padding-bottom": Be,
        "--n-title-font-size": $,
        "--n-meta-font-size": L,
        "--n-description-font-size": R
      };
    }), u = i ? Ne("notification", O(() => e.type[0]), s, o) : void 0;
    return {
      mergedClsPrefix: n,
      showAvatar: O(() => e.avatar || e.type !== "default"),
      handleCloseClick() {
        e.onClose();
      },
      rtlEnabled: l,
      cssVars: i ? void 0 : s,
      themeClass: u == null ? void 0 : u.themeClass,
      onRender: u == null ? void 0 : u.onRender
    };
  },
  render() {
    var e;
    const {
      mergedClsPrefix: n
    } = this;
    return (e = this.onRender) === null || e === void 0 || e.call(this), h("div", {
      class: [`${n}-notification-wrapper`, this.themeClass],
      onMouseenter: this.onMouseenter,
      onMouseleave: this.onMouseleave,
      style: this.cssVars
    }, h("div", {
      class: [`${n}-notification`, this.rtlEnabled && `${n}-notification--rtl`, this.themeClass, {
        [`${n}-notification--closable`]: this.closable,
        [`${n}-notification--show-avatar`]: this.showAvatar
      }],
      style: this.cssVars
    }, this.showAvatar ? h("div", {
      class: `${n}-notification__avatar`
    }, this.avatar ? je(this.avatar) : this.type !== "default" ? h(yt, {
      clsPrefix: n
    }, {
      default: () => vC[this.type]()
    }) : null) : null, this.closable ? h(Lr, {
      clsPrefix: n,
      class: `${n}-notification__close`,
      onClick: this.handleCloseClick
    }) : null, h("div", {
      ref: "bodyRef",
      class: `${n}-notification-main`
    }, this.title ? h("div", {
      class: `${n}-notification-main__header`
    }, je(this.title)) : null, this.description ? h("div", {
      class: `${n}-notification-main__description`
    }, je(this.description)) : null, this.content ? h("pre", {
      class: `${n}-notification-main__content`
    }, je(this.content)) : null, this.meta || this.action ? h("div", {
      class: `${n}-notification-main-footer`
    }, this.meta ? h("div", {
      class: `${n}-notification-main-footer__meta`
    }, je(this.meta)) : null, this.action ? h("div", {
      class: `${n}-notification-main-footer__action`
    }, je(this.action)) : null) : null)));
  }
}), xC = Object.assign(Object.assign({}, ka), {
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
}), mC = J({
  name: "NotificationEnvironment",
  props: Object.assign(Object.assign({}, xC), {
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
      wipTransitionCountRef: n
    } = he(Vo), r = M(!0);
    let o = null;
    function i() {
      r.value = !1, o && window.clearTimeout(o);
    }
    function a(v) {
      n.value++, Je(() => {
        v.style.height = `${v.offsetHeight}px`, v.style.maxHeight = "0", v.style.transition = "none", v.offsetHeight, v.style.transition = "", v.style.maxHeight = v.style.height;
      });
    }
    function l(v) {
      n.value--, v.style.height = "", v.style.maxHeight = "";
      const {
        onAfterEnter: g,
        onAfterShow: b
      } = e;
      g && g(), b && b();
    }
    function s(v) {
      n.value++, v.style.maxHeight = `${v.offsetHeight}px`, v.style.height = `${v.offsetHeight}px`, v.offsetHeight;
    }
    function u(v) {
      const {
        onHide: g
      } = e;
      g && g(), v.style.maxHeight = "0", v.offsetHeight;
    }
    function d() {
      n.value--;
      const {
        onAfterLeave: v,
        onInternalAfterLeave: g,
        onAfterHide: b,
        internalKey: x
      } = e;
      v && v(), g(x), b && b();
    }
    function c() {
      const {
        duration: v
      } = e;
      v && (o = window.setTimeout(i, v));
    }
    function f(v) {
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
    return Qe(() => {
      e.duration && (o = window.setTimeout(i, e.duration));
    }), {
      show: r,
      hide: i,
      handleClose: m,
      handleAfterLeave: d,
      handleLeave: u,
      handleBeforeLeave: s,
      handleAfterEnter: l,
      handleBeforeEnter: a,
      handleMouseenter: f,
      handleMouseleave: p
    };
  },
  render() {
    return h(ct, {
      name: "notification-transition",
      appear: !0,
      // convert to any since Element is not compatible with HTMLElement
      onBeforeEnter: this.handleBeforeEnter,
      onAfterEnter: this.handleAfterEnter,
      onBeforeLeave: this.handleBeforeLeave,
      onLeave: this.handleLeave,
      onAfterLeave: this.handleAfterLeave
    }, {
      default: () => this.show ? h(gC, Object.assign({}, sn(this.$props, pC), {
        onClose: this.handleClose,
        onMouseenter: this.duration && this.keepAliveOnHover ? this.handleMouseenter : void 0,
        onMouseleave: this.duration && this.keepAliveOnHover ? this.handleMouseleave : void 0
      })) : null
    });
  }
}), bC = D([k("notification-container", `
 z-index: 4000;
 position: fixed;
 overflow: visible;
 display: flex;
 flex-direction: column;
 align-items: flex-end;
 `, [D(">", [k("scrollbar", `
 width: initial;
 overflow: visible;
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [D(">", [k("scrollbar-container", `
 height: -moz-fit-content !important;
 height: fit-content !important;
 max-height: 100vh !important;
 `, [k("scrollbar-content", `
 padding-top: 12px;
 padding-bottom: 33px;
 `)])])])]), N("top, top-right, top-left", `
 top: 12px;
 `, [D("&.transitioning >", [k("scrollbar", [D(">", [k("scrollbar-container", `
 min-height: 100vh !important;
 `)])])])]), N("bottom, bottom-right, bottom-left", `
 bottom: 12px;
 `, [D(">", [k("scrollbar", [D(">", [k("scrollbar-container", [k("scrollbar-content", `
 padding-bottom: 12px;
 `)])])])]), k("notification-wrapper", `
 display: flex;
 align-items: flex-end;
 margin-bottom: 0;
 margin-top: 12px;
 `)]), N("top, bottom", `
 left: 50%;
 transform: translateX(-50%);
 `, [k("notification-wrapper", [D("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: scale(0.85);
 `), D("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: scale(1);
 `)])]), N("top", [k("notification-wrapper", `
 transform-origin: top center;
 `)]), N("bottom", [k("notification-wrapper", `
 transform-origin: bottom center;
 `)]), N("top-right, bottom-right", [k("notification", `
 margin-left: 28px;
 margin-right: 16px;
 `)]), N("top-left, bottom-left", [k("notification", `
 margin-left: 16px;
 margin-right: 28px;
 `)]), N("top-right", `
 right: 0;
 `, [so("top-right")]), N("top-left", `
 left: 0;
 `, [so("top-left")]), N("bottom-right", `
 right: 0;
 `, [so("bottom-right")]), N("bottom-left", `
 left: 0;
 `, [so("bottom-left")]), N("scrollable", [N("top-right", `
 top: 0;
 `), N("top-left", `
 top: 0;
 `), N("bottom-right", `
 bottom: 0;
 `), N("bottom-left", `
 bottom: 0;
 `)]), k("notification-wrapper", `
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
 `)]), k("notification", `
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
 `, [z("avatar", [k("icon", `
 color: var(--n-icon-color);
 `), k("base-icon", `
 color: var(--n-icon-color);
 `)]), N("show-avatar", [k("notification-main", `
 margin-left: 40px;
 width: calc(100% - 40px); 
 `)]), N("closable", [k("notification-main", [D("> *:first-child", `
 padding-right: 20px;
 `)]), z("close", `
 position: absolute;
 top: 0;
 right: 0;
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `)]), z("avatar", `
 position: absolute;
 top: var(--n-padding-top);
 left: var(--n-padding-left);
 width: 28px;
 height: 28px;
 font-size: 28px;
 display: flex;
 align-items: center;
 justify-content: center;
 `, [k("icon", "transition: color .3s var(--n-bezier);")]), k("notification-main", `
 padding-top: var(--n-padding-top);
 padding-bottom: var(--n-padding-bottom);
 box-sizing: border-box;
 display: flex;
 flex-direction: column;
 margin-left: 8px;
 width: calc(100% - 8px);
 `, [k("notification-main-footer", `
 display: flex;
 align-items: center;
 justify-content: space-between;
 margin-top: 12px;
 `, [z("meta", `
 font-size: var(--n-meta-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `), z("action", `
 cursor: pointer;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-action-text-color);
 `)]), z("header", `
 font-weight: var(--n-title-font-weight);
 font-size: var(--n-title-font-size);
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-title-text-color);
 `), z("description", `
 margin-top: 8px;
 font-size: var(--n-description-font-size);
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-description-text-color);
 `), z("content", `
 line-height: var(--n-line-height);
 margin: 12px 0 0 0;
 font-family: inherit;
 white-space: pre-wrap;
 word-wrap: break-word;
 transition: color .3s var(--n-bezier-ease-out);
 color: var(--n-text-color);
 `, [D("&:first-child", "margin: 0;")])])])])]);
function so(e) {
  const r = e.split("-")[1] === "left" ? "calc(-100%)" : "calc(100%)";
  return k("notification-wrapper", [D("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: translate(${r}, 0);
 `), D("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: translate(0, 0);
 `)]);
}
const pd = "n-notification-api", CC = Object.assign(Object.assign({}, ue.props), {
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
}), yC = J({
  name: "NotificationProvider",
  props: CC,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Ae(e), r = M([]), o = {}, i = /* @__PURE__ */ new Set();
    function a(m) {
      const v = ln(), g = () => {
        i.add(v), o[v] && o[v].hide();
      }, b = Or(Object.assign(Object.assign({}, m), {
        key: v,
        destroy: g,
        hide: g,
        deactivate: g
      })), {
        max: x
      } = e;
      if (x && r.value.length - i.size >= x) {
        let w = !1, A = 0;
        for (const y of r.value) {
          if (!i.has(y.key)) {
            o[y.key] && (y.destroy(), w = !0);
            break;
          }
          A++;
        }
        w || r.value.splice(A, 1);
      }
      return r.value.push(b), b;
    }
    const l = ["info", "success", "warning", "error"].map((m) => (v) => a(Object.assign(Object.assign({}, v), {
      type: m
    })));
    function s(m) {
      i.delete(m), r.value.splice(r.value.findIndex((v) => v.key === m), 1);
    }
    const u = ue("Notification", "-notification", bC, fC, e, n), d = {
      create: a,
      info: l[0],
      success: l[1],
      warning: l[2],
      error: l[3],
      open: f,
      destroyAll: p
    }, c = M(0);
    me(pd, d), me(Vo, {
      props: e,
      mergedClsPrefixRef: n,
      mergedThemeRef: u,
      wipTransitionCountRef: c
    });
    function f(m) {
      return a(m);
    }
    function p() {
      Object.values(r.value).forEach((m) => {
        m.hide();
      });
    }
    return Object.assign({
      mergedClsPrefix: n,
      notificationList: r,
      notificationRefs: o,
      handleAfterLeave: s
    }, d);
  },
  render() {
    var e, n, r;
    const {
      placement: o
    } = this;
    return h(et, null, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e), this.notificationList.length ? h(Eo, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, h(hC, {
      class: this.containerClass,
      style: this.containerStyle,
      scrollable: this.scrollable && o !== "top" && o !== "bottom",
      placement: o
    }, {
      default: () => this.notificationList.map((i) => h(mC, Object.assign({
        ref: (a) => {
          const l = i.key;
          a === null ? delete this.notificationRefs[l] : this.notificationRefs[l] = a;
        }
      }, Ir(i, ["destroy", "hide", "deactivate"]), {
        internalKey: i.key,
        onInternalAfterLeave: this.handleAfterLeave,
        keepAliveOnHover: i.keepAliveOnHover === void 0 ? this.keepAliveOnHover : i.keepAliveOnHover
      })))
    })) : null);
  }
});
function wC() {
  const e = he(pd, null);
  return e === null && fn("use-notification", "No outer `n-notification-provider` found."), e;
}
function gd() {
  const e = he(hd, null);
  return e === null && fn("use-modal", "No outer <n-modal-provider /> founded."), e;
}
const BC = J({
  name: "InjectionExtractor",
  props: {
    onSetup: Function
  },
  setup(e, {
    slots: n
  }) {
    var r;
    return (r = e.onSetup) === null || r === void 0 || r.call(e), () => {
      var o;
      return (o = n.default) === null || o === void 0 ? void 0 : o.call(n);
    };
  }
}), SC = {
  message: aC,
  notification: wC,
  loadingBar: X1,
  dialog: td,
  modal: gd
};
function AC({
  providersAndProps: e,
  configProviderProps: n
}) {
  let r = uc(i);
  const o = {
    app: r
  };
  function i() {
    return h(Gu, te(n), {
      default: () => e.map(({
        type: s,
        Provider: u,
        props: d
      }) => h(u, te(d), {
        default: () => h(BC, {
          onSetup: () => o[s] = SC[s]()
        })
      }))
    });
  }
  let a;
  return rr && (a = document.createElement("div"), document.body.appendChild(a), r.mount(a)), Object.assign({
    unmount: () => {
      var s;
      if (r === null || a === null) {
        Tt("discrete", "unmount call no need because discrete app has been unmounted");
        return;
      }
      r.unmount(), (s = a.parentNode) === null || s === void 0 || s.removeChild(a), a = null, r = null;
    }
  }, o);
}
function ow(e, {
  configProviderProps: n,
  messageProviderProps: r,
  dialogProviderProps: o,
  notificationProviderProps: i,
  loadingBarProviderProps: a,
  modalProviderProps: l
} = {}) {
  const s = [];
  return e.forEach((d) => {
    switch (d) {
      case "message":
        s.push({
          type: d,
          Provider: iC,
          props: r
        });
        break;
      case "notification":
        s.push({
          type: d,
          Provider: yC,
          props: i
        });
        break;
      case "dialog":
        s.push({
          type: d,
          Provider: ld,
          props: o
        });
        break;
      case "loadingBar":
        s.push({
          type: d,
          Provider: G1,
          props: a
        });
        break;
      case "modal":
        s.push({
          type: d,
          Provider: vd,
          props: l
        });
    }
  }), AC({
    providersAndProps: s,
    configProviderProps: n
  });
}
const FC = {
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
function PC(e) {
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
  return Object.assign(Object.assign({}, FC), {
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
const xd = {
  name: "Form",
  common: He,
  self: PC
}, $C = {
  iconSize: "22px"
};
function DC(e) {
  const {
    fontSize: n,
    warningColor: r
  } = e;
  return Object.assign(Object.assign({}, $C), {
    fontSize: n,
    iconColor: r
  });
}
const EC = {
  name: "Popconfirm",
  common: He,
  peers: {
    Button: Pa,
    Popover: jr
  },
  self: DC
};
function zC(e) {
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
const kC = {
  name: "Spin",
  common: He,
  self: zC
}, TC = {
  thPaddingSmall: "6px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "6px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px"
};
function RC(e) {
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
  return Object.assign(Object.assign({}, TC), {
    fontSizeSmall: p,
    fontSizeMedium: m,
    fontSizeLarge: v,
    lineHeight: f,
    borderRadius: d,
    borderColor: vt(r, n),
    borderColorModal: vt(o, n),
    borderColorPopover: vt(i, n),
    tdColor: r,
    tdColorModal: o,
    tdColorPopover: i,
    tdColorStriped: vt(r, l),
    tdColorStripedModal: vt(o, l),
    tdColorStripedPopover: vt(i, l),
    thColor: vt(r, a),
    thColorModal: vt(o, a),
    thColorPopover: vt(i, a),
    thTextColor: s,
    tdTextColor: u,
    thFontWeight: c
  });
}
const OC = {
  name: "Table",
  common: He,
  self: RC
}, qr = "n-form", md = "n-form-item-insts", MC = k("form", [N("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [k("form-item", {
  width: "auto",
  marginRight: "18px"
}, [D("&:last-child", {
  marginRight: 0
})])])]);
var IC = function(e, n, r, o) {
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
const _C = Object.assign(Object.assign({}, ue.props), {
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
}), LC = J({
  name: "Form",
  props: _C,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Ae(e);
    ue("Form", "-form", MC, xd, e, n);
    const r = {}, o = M(void 0), i = (u) => {
      const d = o.value;
      (d === void 0 || u >= d) && (o.value = u);
    };
    function a(u) {
      return IC(this, arguments, void 0, function* (d, c = () => !0) {
        return yield new Promise((f, p) => {
          const m = [];
          for (const v of Fn(r)) {
            const g = r[v];
            for (const b of g)
              b.path && m.push(b.internalValidate(null, c));
          }
          Promise.all(m).then((v) => {
            const g = v.some((w) => !w.valid), b = [], x = [];
            v.forEach((w) => {
              var A, y;
              !((A = w.errors) === null || A === void 0) && A.length && b.push(w.errors), !((y = w.warnings) === null || y === void 0) && y.length && x.push(w.warnings);
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
      for (const u of Fn(r)) {
        const d = r[u];
        for (const c of d)
          c.restoreValidation();
      }
    }
    return me(qr, {
      props: e,
      maxChildLabelWidthRef: o,
      deriveMaxChildLabelWidth: i
    }), me(md, {
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
function wn() {
  return wn = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, wn.apply(this, arguments);
}
function NC(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, kr(e, n);
}
function Wi(e) {
  return Wi = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Wi(e);
}
function kr(e, n) {
  return kr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, kr(e, n);
}
function HC() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function ho(e, n, r) {
  return HC() ? ho = Reflect.construct.bind() : ho = function(i, a, l) {
    var s = [null];
    s.push.apply(s, a);
    var u = Function.bind.apply(i, s), d = new u();
    return l && kr(d, l.prototype), d;
  }, ho.apply(null, arguments);
}
function jC(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Vi(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Vi = function(o) {
    if (o === null || !jC(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof n < "u") {
      if (n.has(o)) return n.get(o);
      n.set(o, i);
    }
    function i() {
      return ho(o, arguments, Wi(this).constructor);
    }
    return i.prototype = Object.create(o.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), kr(i, o);
  }, Vi(e);
}
var WC = /%[sdj%]/g, bd = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (bd = function(n, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(o) {
    return typeof o == "string";
  }) && console.warn(n, r);
});
function qi(e) {
  if (!e || !e.length) return null;
  var n = {};
  return e.forEach(function(r) {
    var o = r.field;
    n[o] = n[o] || [], n[o].push(r);
  }), n;
}
function pt(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  var i = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var l = e.replace(WC, function(s) {
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
function VC(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Xe(e, n) {
  return !!(e == null || n === "array" && Array.isArray(e) && !e.length || VC(n) && typeof e == "string" && !e);
}
function qC(e, n, r) {
  var o = [], i = 0, a = e.length;
  function l(s) {
    o.push.apply(o, s || []), i++, i === a && r(o);
  }
  e.forEach(function(s) {
    n(s, l);
  });
}
function rs(e, n, r) {
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
function KC(e) {
  var n = [];
  return Object.keys(e).forEach(function(r) {
    n.push.apply(n, e[r] || []);
  }), n;
}
var os = /* @__PURE__ */ function(e) {
  NC(n, e);
  function n(r, o) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = r, i.fields = o, i;
  }
  return n;
}(/* @__PURE__ */ Vi(Error));
function UC(e, n, r, o, i) {
  if (n.first) {
    var a = new Promise(function(p, m) {
      var v = function(x) {
        return o(x), x.length ? m(new os(x, qi(x))) : p(i);
      }, g = KC(e);
      rs(g, r, v);
    });
    return a.catch(function(p) {
      return p;
    }), a;
  }
  var l = n.firstFields === !0 ? Object.keys(e) : n.firstFields || [], s = Object.keys(e), u = s.length, d = 0, c = [], f = new Promise(function(p, m) {
    var v = function(b) {
      if (c.push.apply(c, b), d++, d === u)
        return o(c), c.length ? m(new os(c, qi(c))) : p(i);
    };
    s.length || (o(c), p(i)), s.forEach(function(g) {
      var b = e[g];
      l.indexOf(g) !== -1 ? rs(b, r, v) : qC(b, r, v);
    });
  });
  return f.catch(function(p) {
    return p;
  }), f;
}
function GC(e) {
  return !!(e && e.message !== void 0);
}
function XC(e, n) {
  for (var r = e, o = 0; o < n.length; o++) {
    if (r == null)
      return r;
    r = r[n[o]];
  }
  return r;
}
function is(e, n) {
  return function(r) {
    var o;
    return e.fullFields ? o = XC(n, e.fullFields) : o = n[r.field || e.fullField], GC(r) ? (r.field = r.field || e.fullField, r.fieldValue = o, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: o,
      field: r.field || e.fullField
    };
  };
}
function as(e, n) {
  if (n) {
    for (var r in n)
      if (n.hasOwnProperty(r)) {
        var o = n[r];
        typeof o == "object" && typeof e[r] == "object" ? e[r] = wn({}, e[r], o) : e[r] = o;
      }
  }
  return e;
}
var Cd = function(n, r, o, i, a, l) {
  n.required && (!o.hasOwnProperty(n.field) || Xe(r, l || n.type)) && i.push(pt(a.messages.required, n.fullField));
}, YC = function(n, r, o, i, a) {
  (/^\s+$/.test(r) || r === "") && i.push(pt(a.messages.whitespace, n.fullField));
}, uo, ZC = function() {
  if (uo)
    return uo;
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
  var d = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", f = u.v4().source, p = u.v6().source, m = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", v = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", g = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", x = '(?:[/?#][^\\s"]*)?', w = "(?:" + d + "|www\\.)" + c + "(?:localhost|" + f + "|" + p + "|" + m + v + g + ")" + b + x;
  return uo = new RegExp("(?:^" + w + "$)", "i"), uo;
}, ls = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, fr = {
  integer: function(n) {
    return fr.number(n) && parseInt(n, 10) === n;
  },
  float: function(n) {
    return fr.number(n) && !fr.integer(n);
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
    return typeof n == "object" && !fr.array(n);
  },
  method: function(n) {
    return typeof n == "function";
  },
  email: function(n) {
    return typeof n == "string" && n.length <= 320 && !!n.match(ls.email);
  },
  url: function(n) {
    return typeof n == "string" && n.length <= 2048 && !!n.match(ZC());
  },
  hex: function(n) {
    return typeof n == "string" && !!n.match(ls.hex);
  }
}, JC = function(n, r, o, i, a) {
  if (n.required && r === void 0) {
    Cd(n, r, o, i, a);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = n.type;
  l.indexOf(s) > -1 ? fr[s](r) || i.push(pt(a.messages.types[s], n.fullField, n.type)) : s && typeof r !== n.type && i.push(pt(a.messages.types[s], n.fullField, n.type));
}, QC = function(n, r, o, i, a) {
  var l = typeof n.len == "number", s = typeof n.min == "number", u = typeof n.max == "number", d = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, f = null, p = typeof r == "number", m = typeof r == "string", v = Array.isArray(r);
  if (p ? f = "number" : m ? f = "string" : v && (f = "array"), !f)
    return !1;
  v && (c = r.length), m && (c = r.replace(d, "_").length), l ? c !== n.len && i.push(pt(a.messages[f].len, n.fullField, n.len)) : s && !u && c < n.min ? i.push(pt(a.messages[f].min, n.fullField, n.min)) : u && !s && c > n.max ? i.push(pt(a.messages[f].max, n.fullField, n.max)) : s && u && (c < n.min || c > n.max) && i.push(pt(a.messages[f].range, n.fullField, n.min, n.max));
}, Wn = "enum", ey = function(n, r, o, i, a) {
  n[Wn] = Array.isArray(n[Wn]) ? n[Wn] : [], n[Wn].indexOf(r) === -1 && i.push(pt(a.messages[Wn], n.fullField, n[Wn].join(", ")));
}, ty = function(n, r, o, i, a) {
  if (n.pattern) {
    if (n.pattern instanceof RegExp)
      n.pattern.lastIndex = 0, n.pattern.test(r) || i.push(pt(a.messages.pattern.mismatch, n.fullField, r, n.pattern));
    else if (typeof n.pattern == "string") {
      var l = new RegExp(n.pattern);
      l.test(r) || i.push(pt(a.messages.pattern.mismatch, n.fullField, r, n.pattern));
    }
  }
}, we = {
  required: Cd,
  whitespace: YC,
  type: JC,
  range: QC,
  enum: ey,
  pattern: ty
}, ny = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Xe(r, "string") && !n.required)
      return o();
    we.required(n, r, i, l, a, "string"), Xe(r, "string") || (we.type(n, r, i, l, a), we.range(n, r, i, l, a), we.pattern(n, r, i, l, a), n.whitespace === !0 && we.whitespace(n, r, i, l, a));
  }
  o(l);
}, ry = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Xe(r) && !n.required)
      return o();
    we.required(n, r, i, l, a), r !== void 0 && we.type(n, r, i, l, a);
  }
  o(l);
}, oy = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (r === "" && (r = void 0), Xe(r) && !n.required)
      return o();
    we.required(n, r, i, l, a), r !== void 0 && (we.type(n, r, i, l, a), we.range(n, r, i, l, a));
  }
  o(l);
}, iy = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Xe(r) && !n.required)
      return o();
    we.required(n, r, i, l, a), r !== void 0 && we.type(n, r, i, l, a);
  }
  o(l);
}, ay = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Xe(r) && !n.required)
      return o();
    we.required(n, r, i, l, a), Xe(r) || we.type(n, r, i, l, a);
  }
  o(l);
}, ly = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Xe(r) && !n.required)
      return o();
    we.required(n, r, i, l, a), r !== void 0 && (we.type(n, r, i, l, a), we.range(n, r, i, l, a));
  }
  o(l);
}, sy = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Xe(r) && !n.required)
      return o();
    we.required(n, r, i, l, a), r !== void 0 && (we.type(n, r, i, l, a), we.range(n, r, i, l, a));
  }
  o(l);
}, uy = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (r == null && !n.required)
      return o();
    we.required(n, r, i, l, a, "array"), r != null && (we.type(n, r, i, l, a), we.range(n, r, i, l, a));
  }
  o(l);
}, dy = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Xe(r) && !n.required)
      return o();
    we.required(n, r, i, l, a), r !== void 0 && we.type(n, r, i, l, a);
  }
  o(l);
}, cy = "enum", fy = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Xe(r) && !n.required)
      return o();
    we.required(n, r, i, l, a), r !== void 0 && we[cy](n, r, i, l, a);
  }
  o(l);
}, hy = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Xe(r, "string") && !n.required)
      return o();
    we.required(n, r, i, l, a), Xe(r, "string") || we.pattern(n, r, i, l, a);
  }
  o(l);
}, vy = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Xe(r, "date") && !n.required)
      return o();
    if (we.required(n, r, i, l, a), !Xe(r, "date")) {
      var u;
      r instanceof Date ? u = r : u = new Date(r), we.type(n, u, i, l, a), u && we.range(n, u.getTime(), i, l, a);
    }
  }
  o(l);
}, py = function(n, r, o, i, a) {
  var l = [], s = Array.isArray(r) ? "array" : typeof r;
  we.required(n, r, i, l, a, s), o(l);
}, mi = function(n, r, o, i, a) {
  var l = n.type, s = [], u = n.required || !n.required && i.hasOwnProperty(n.field);
  if (u) {
    if (Xe(r, l) && !n.required)
      return o();
    we.required(n, r, i, s, a, l), Xe(r, l) || we.type(n, r, i, s, a);
  }
  o(s);
}, gy = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Xe(r) && !n.required)
      return o();
    we.required(n, r, i, l, a);
  }
  o(l);
}, mr = {
  string: ny,
  method: ry,
  number: oy,
  boolean: iy,
  regexp: ay,
  integer: ly,
  float: sy,
  array: uy,
  object: dy,
  enum: fy,
  pattern: hy,
  date: vy,
  url: mi,
  hex: mi,
  email: mi,
  required: py,
  any: gy
};
function Ki() {
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
var Ui = Ki(), Qn = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = Ui, this.define(r);
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
    return o && (this._messages = as(Ki(), o)), this._messages;
  }, n.validate = function(o, i, a) {
    var l = this;
    i === void 0 && (i = {}), a === void 0 && (a = function() {
    });
    var s = o, u = i, d = a;
    if (typeof u == "function" && (d = u, u = {}), !this.rules || Object.keys(this.rules).length === 0)
      return d && d(null, s), Promise.resolve(s);
    function c(g) {
      var b = [], x = {};
      function w(y) {
        if (Array.isArray(y)) {
          var S;
          b = (S = b).concat.apply(S, y);
        } else
          b.push(y);
      }
      for (var A = 0; A < g.length; A++)
        w(g[A]);
      b.length ? (x = qi(b), d(b, x)) : d(null, s);
    }
    if (u.messages) {
      var f = this.messages();
      f === Ui && (f = Ki()), as(f, u.messages), u.messages = f;
    } else
      u.messages = this.messages();
    var p = {}, m = u.keys || Object.keys(this.rules);
    m.forEach(function(g) {
      var b = l.rules[g], x = s[g];
      b.forEach(function(w) {
        var A = w;
        typeof A.transform == "function" && (s === o && (s = wn({}, s)), x = s[g] = A.transform(x)), typeof A == "function" ? A = {
          validator: A
        } : A = wn({}, A), A.validator = l.getValidationMethod(A), A.validator && (A.field = g, A.fullField = A.fullField || g, A.type = l.getType(A), p[g] = p[g] || [], p[g].push({
          rule: A,
          value: x,
          source: s,
          field: g
        }));
      });
    });
    var v = {};
    return UC(p, u, function(g, b) {
      var x = g.rule, w = (x.type === "object" || x.type === "array") && (typeof x.fields == "object" || typeof x.defaultField == "object");
      w = w && (x.required || !x.required && g.value), x.field = g.field;
      function A(T, C) {
        return wn({}, C, {
          fullField: x.fullField + "." + T,
          fullFields: x.fullFields ? [].concat(x.fullFields, [T]) : [T]
        });
      }
      function y(T) {
        T === void 0 && (T = []);
        var C = Array.isArray(T) ? T : [T];
        !u.suppressWarning && C.length && e.warning("async-validator:", C), C.length && x.message !== void 0 && (C = [].concat(x.message));
        var P = C.map(is(x, s));
        if (u.first && P.length)
          return v[x.field] = 1, b(P);
        if (!w)
          b(P);
        else {
          if (x.required && !g.value)
            return x.message !== void 0 ? P = [].concat(x.message).map(is(x, s)) : u.error && (P = [u.error(x, pt(u.messages.required, x.field))]), b(P);
          var I = {};
          x.defaultField && Object.keys(g.value).map(function(H) {
            I[H] = x.defaultField;
          }), I = wn({}, I, g.rule.fields);
          var _ = {};
          Object.keys(I).forEach(function(H) {
            var t = I[H], F = Array.isArray(t) ? t : [t];
            _[H] = F.map(A.bind(null, H));
          });
          var K = new e(_);
          K.messages(u.messages), g.rule.options && (g.rule.options.messages = u.messages, g.rule.options.error = u.error), K.validate(g.value, g.rule.options || u, function(H) {
            var t = [];
            P && P.length && t.push.apply(t, P), H && H.length && t.push.apply(t, H), b(t.length ? t : null);
          });
        }
      }
      var S;
      if (x.asyncValidator)
        S = x.asyncValidator(x, g.value, y, g.source, u);
      else if (x.validator) {
        try {
          S = x.validator(x, g.value, y, g.source, u);
        } catch (T) {
          console.error == null || console.error(T), u.suppressValidatorError || setTimeout(function() {
            throw T;
          }, 0), y(T.message);
        }
        S === !0 ? y() : S === !1 ? y(typeof x.message == "function" ? x.message(x.fullField || x.field) : x.message || (x.fullField || x.field) + " fails") : S instanceof Array ? y(S) : S instanceof Error && y(S.message);
      }
      S && S.then && S.then(function() {
        return y();
      }, function(T) {
        return y(T);
      });
    }, function(g) {
      c(g);
    }, s);
  }, n.getType = function(o) {
    if (o.type === void 0 && o.pattern instanceof RegExp && (o.type = "pattern"), typeof o.validator != "function" && o.type && !mr.hasOwnProperty(o.type))
      throw new Error(pt("Unknown rule type %s", o.type));
    return o.type || "string";
  }, n.getValidationMethod = function(o) {
    if (typeof o.validator == "function")
      return o.validator;
    var i = Object.keys(o), a = i.indexOf("message");
    return a !== -1 && i.splice(a, 1), i.length === 1 && i[0] === "required" ? mr.required : mr[this.getType(o)] || void 0;
  }, e;
}();
Qn.register = function(n, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  mr[n] = r;
};
Qn.warning = bd;
Qn.messages = Ui;
Qn.validators = mr;
const {
  cubicBezierEaseInOut: ss
} = vn;
function xy({
  name: e = "fade-down",
  fromOffset: n = "-4px",
  enterDuration: r = ".3s",
  leaveDuration: o = ".3s",
  enterCubicBezier: i = ss,
  leaveCubicBezier: a = ss
} = {}) {
  return [D(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
    opacity: 0,
    transform: `translateY(${n})`
  }), D(`&.${e}-transition-enter-to, &.${e}-transition-leave-from`, {
    opacity: 1,
    transform: "translateY(0)"
  }), D(`&.${e}-transition-leave-active`, {
    transition: `opacity ${o} ${a}, transform ${o} ${a}`
  }), D(`&.${e}-transition-enter-active`, {
    transition: `opacity ${r} ${i}, transform ${r} ${i}`
  })];
}
const my = k("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [k("form-item-label", `
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
 `, [z("asterisk", `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `), z("asterisk-placeholder", `
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]), k("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), N("auto-label-width", [k("form-item-label", "white-space: nowrap;")]), N("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [k("form-item-label", `
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
 `), z("text", `
 grid-area: text; 
 `), z("asterisk", `
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
 `), k("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), k("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), k("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [D("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), k("form-item-feedback", {
  transition: "color .3s var(--n-bezier)",
  color: "var(--n-feedback-text-color)"
}, [N("warning", {
  color: "var(--n-feedback-text-color-warning)"
}), N("error", {
  color: "var(--n-feedback-text-color-error)"
}), xy({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
function by(e) {
  const n = he(qr, null);
  return {
    mergedSize: O(() => e.size !== void 0 ? e.size : (n == null ? void 0 : n.props.size) !== void 0 ? n.props.size : "medium")
  };
}
function Cy(e) {
  const n = he(qr, null), r = O(() => {
    const {
      labelPlacement: v
    } = e;
    return v !== void 0 ? v : n != null && n.props.labelPlacement ? n.props.labelPlacement : "top";
  }), o = O(() => r.value === "left" && (e.labelWidth === "auto" || (n == null ? void 0 : n.props.labelWidth) === "auto")), i = O(() => {
    if (r.value === "top") return;
    const {
      labelWidth: v
    } = e;
    if (v !== void 0 && v !== "auto")
      return qt(v);
    if (o.value) {
      const g = n == null ? void 0 : n.maxChildLabelWidthRef.value;
      return g !== void 0 ? qt(g) : void 0;
    }
    if ((n == null ? void 0 : n.props.labelWidth) !== void 0)
      return qt(n.props.labelWidth);
  }), a = O(() => {
    const {
      labelAlign: v
    } = e;
    if (v) return v;
    if (n != null && n.props.labelAlign) return n.props.labelAlign;
  }), l = O(() => {
    var v;
    return [(v = e.labelProps) === null || v === void 0 ? void 0 : v.style, e.labelStyle, {
      width: i.value
    }];
  }), s = O(() => {
    const {
      showRequireMark: v
    } = e;
    return v !== void 0 ? v : n == null ? void 0 : n.props.showRequireMark;
  }), u = O(() => {
    const {
      requireMarkPlacement: v
    } = e;
    return v !== void 0 ? v : (n == null ? void 0 : n.props.requireMarkPlacement) || "right";
  }), d = M(!1), c = M(!1), f = O(() => {
    const {
      validationStatus: v
    } = e;
    if (v !== void 0) return v;
    if (d.value) return "error";
    if (c.value) return "warning";
  }), p = O(() => {
    const {
      showFeedback: v
    } = e;
    return v !== void 0 ? v : (n == null ? void 0 : n.props.showFeedback) !== void 0 ? n.props.showFeedback : !0;
  }), m = O(() => {
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
function yy(e) {
  const n = he(qr, null), r = O(() => {
    const {
      rulePath: l
    } = e;
    if (l !== void 0) return l;
    const {
      path: s
    } = e;
    if (s !== void 0) return s;
  }), o = O(() => {
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
        const c = ya(u, d);
        c !== void 0 && (Array.isArray(c) ? l.push(...c) : l.push(c));
      }
    }
    return l;
  }), i = O(() => o.value.some((l) => l.required)), a = O(() => i.value || e.required);
  return {
    mergedRules: o,
    mergedRequired: a
  };
}
var us = function(e, n, r, o) {
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
const wy = Object.assign(Object.assign({}, ue.props), {
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
function ds(e, n) {
  return (...r) => {
    try {
      const o = e(...r);
      return !n && (typeof o == "boolean" || o instanceof Error || Array.isArray(o)) || o != null && o.then ? o : (o === void 0 || Tt("form-item/validate", `You return a ${typeof o} typed value in the validator method, which is not recommended. Please use ${n ? "`Promise`" : "`boolean`, `Error` or `Promise`"} typed value instead.`), !0);
    } catch (o) {
      Tt("form-item/validate", "An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."), console.error(o);
      return;
    }
  };
}
const By = J({
  name: "FormItem",
  props: wy,
  setup(e) {
    lf(md, "formItems", se(e, "path"));
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r
    } = Ae(e), o = he(qr, null), i = by(e), a = Cy(e), {
      validationErrored: l,
      validationWarned: s
    } = a, {
      mergedRequired: u,
      mergedRules: d
    } = yy(e), {
      mergedSize: c
    } = i, {
      mergedLabelPlacement: f,
      mergedLabelAlign: p,
      mergedRequireMarkPlacement: m
    } = a, v = M([]), g = M(ln()), b = o ? se(o.props, "disabled") : M(!1), x = ue("Form", "-form-item", my, xd, e, n);
    Pe(se(e, "path"), () => {
      e.ignorePathChange || w();
    });
    function w() {
      v.value = [], l.value = !1, s.value = !1, e.feedback && (g.value = ln());
    }
    const A = (...F) => us(this, [...F], void 0, function* ($ = null, L = () => !0, R = {
      suppressWarning: !0
    }) {
      const {
        path: V
      } = e;
      R ? R.first || (R.first = e.first) : R = {};
      const {
        value: Q
      } = d, Z = o ? ya(o.props.model, V || "") : void 0, oe = {}, W = {}, G = ($ ? Q.filter((Ce) => Array.isArray(Ce.trigger) ? Ce.trigger.includes($) : Ce.trigger === $) : Q).filter(L).map((Ce, Se) => {
        const ye = Object.assign({}, Ce);
        if (ye.validator && (ye.validator = ds(ye.validator, !1)), ye.asyncValidator && (ye.asyncValidator = ds(ye.asyncValidator, !0)), ye.renderMessage) {
          const tt = `__renderMessage__${Se}`;
          W[tt] = ye.message, ye.message = tt, oe[tt] = ye.renderMessage;
        }
        return ye;
      }), re = G.filter((Ce) => Ce.level !== "warning"), Be = G.filter((Ce) => Ce.level === "warning"), ie = {
        valid: !0,
        errors: void 0,
        warnings: void 0
      };
      if (!G.length) return ie;
      const ge = V ?? "__n_no_path__", Me = new Qn({
        [ge]: re
      }), le = new Qn({
        [ge]: Be
      }), {
        validateMessages: We
      } = (o == null ? void 0 : o.props) || {};
      We && (Me.messages(We), le.messages(We));
      const Te = (Ce) => {
        v.value = Ce.map((Se) => {
          const ye = (Se == null ? void 0 : Se.message) || "";
          return {
            key: ye,
            render: () => ye.startsWith("__renderMessage__") ? oe[ye]() : ye
          };
        }), Ce.forEach((Se) => {
          var ye;
          !((ye = Se.message) === null || ye === void 0) && ye.startsWith("__renderMessage__") && (Se.message = W[Se.message]);
        });
      };
      if (re.length) {
        const Ce = yield new Promise((Se) => {
          Me.validate({
            [ge]: Z
          }, R, Se);
        });
        Ce != null && Ce.length && (ie.valid = !1, ie.errors = Ce, Te(Ce));
      }
      if (Be.length && !ie.errors) {
        const Ce = yield new Promise((Se) => {
          le.validate({
            [ge]: Z
          }, R, Se);
        });
        Ce != null && Ce.length && (Te(Ce), ie.warnings = Ce);
      }
      return !ie.errors && !ie.warnings ? w() : (l.value = !!ie.errors, s.value = !!ie.warnings), ie;
    });
    function y() {
      A("blur");
    }
    function S() {
      A("change");
    }
    function T() {
      A("focus");
    }
    function C() {
      A("input");
    }
    function P(F, $) {
      return us(this, void 0, void 0, function* () {
        let L, R, V, Q;
        return typeof F == "string" ? (L = F, R = $) : F !== null && typeof F == "object" && (L = F.trigger, R = F.callback, V = F.shouldRuleBeApplied, Q = F.options), yield new Promise((Z, oe) => {
          A(L, V, Q).then(({
            valid: W,
            errors: G,
            warnings: re
          }) => {
            W ? (R && R(void 0, {
              warnings: re
            }), Z({
              warnings: re
            })) : (R && R(G, {
              warnings: re
            }), oe(G));
          });
        });
      });
    }
    me(zi, {
      path: se(e, "path"),
      disabled: b,
      mergedSize: i.mergedSize,
      mergedValidationStatus: a.mergedValidationStatus,
      restoreValidation: w,
      handleContentBlur: y,
      handleContentChange: S,
      handleContentFocus: T,
      handleContentInput: C
    });
    const I = {
      validate: P,
      restoreValidation: w,
      internalValidate: A
    }, _ = M(null);
    Qe(() => {
      if (!a.isAutoLabelWidth.value) return;
      const F = _.value;
      if (F !== null) {
        const $ = F.style.whiteSpace;
        F.style.whiteSpace = "nowrap", F.style.width = "", o == null || o.deriveMaxChildLabelWidth(Number(getComputedStyle(F).width.slice(0, -2))), F.style.whiteSpace = $;
      }
    });
    const K = O(() => {
      var F;
      const {
        value: $
      } = c, {
        value: L
      } = f, R = L === "top" ? "vertical" : "horizontal", {
        common: {
          cubicBezierEaseInOut: V
        },
        self: {
          labelTextColor: Q,
          asteriskColor: Z,
          lineHeight: oe,
          feedbackTextColor: W,
          feedbackTextColorWarning: G,
          feedbackTextColorError: re,
          feedbackPadding: Be,
          labelFontWeight: ie,
          [U("labelHeight", $)]: ge,
          [U("blankHeight", $)]: Me,
          [U("feedbackFontSize", $)]: le,
          [U("feedbackHeight", $)]: We,
          [U("labelPadding", R)]: Te,
          [U("labelTextAlign", R)]: Ce,
          [U(U("labelFontSize", L), $)]: Se
        }
      } = x.value;
      let ye = (F = p.value) !== null && F !== void 0 ? F : Ce;
      return L === "top" && (ye = ye === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": V,
        "--n-line-height": oe,
        "--n-blank-height": Me,
        "--n-label-font-size": Se,
        "--n-label-text-align": ye,
        "--n-label-height": ge,
        "--n-label-padding": Te,
        "--n-label-font-weight": ie,
        "--n-asterisk-color": Z,
        "--n-label-text-color": Q,
        "--n-feedback-padding": Be,
        "--n-feedback-font-size": le,
        "--n-feedback-height": We,
        "--n-feedback-text-color": W,
        "--n-feedback-text-color-warning": G,
        "--n-feedback-text-color-error": re
      };
    }), H = r ? Ne("form-item", O(() => {
      var F;
      return `${c.value[0]}${f.value[0]}${((F = p.value) === null || F === void 0 ? void 0 : F[0]) || ""}`;
    }), K, e) : void 0, t = O(() => f.value === "left" && m.value === "left" && p.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: _,
      mergedClsPrefix: n,
      mergedRequired: u,
      feedbackId: g,
      renderExplains: v,
      reverseColSpace: t
    }, a), i), I), {
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
    }, h(ct, {
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
function Sy(e) {
  const {
    primaryColor: n,
    baseColor: r
  } = e;
  return {
    color: n,
    iconColor: r
  };
}
const Ay = {
  name: "IconWrapper",
  common: He,
  self: Sy
}, Fy = k("icon-wrapper", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`), Py = Object.assign(Object.assign({}, ue.props), {
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
}), $y = J({
  name: "IconWrapper",
  props: Py,
  setup(e, {
    slots: n
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = ue("IconWrapper", "-icon-wrapper", Fy, Ay, e, r), a = O(() => {
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
    }), l = o ? Ne("icon-wrapper", void 0, a, e) : void 0;
    return () => {
      const s = qt(e.size);
      return l == null || l.onRender(), h("div", {
        class: [`${r.value}-icon-wrapper`, l == null ? void 0 : l.themeClass.value],
        style: [a == null ? void 0 : a.value, {
          height: s,
          width: s,
          borderRadius: qt(e.borderRadius),
          backgroundColor: e.color,
          color: e.iconColor
        }]
      }, n);
    };
  }
}), yd = "n-popconfirm", wd = {
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
}, cs = Fn(wd), Dy = J({
  name: "NPopconfirmPanel",
  props: wd,
  setup(e) {
    const {
      localeRef: n
    } = $r("Popconfirm"), {
      inlineThemeDisabled: r
    } = Ae(), {
      mergedClsPrefixRef: o,
      mergedThemeRef: i,
      props: a
    } = he(yd), l = O(() => {
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
    }), s = r ? Ne("popconfirm-panel", void 0, l, a) : void 0;
    return Object.assign(Object.assign({}, $r("Popconfirm")), {
      mergedClsPrefix: o,
      cssVars: r ? void 0 : l,
      localizedPositiveText: O(() => e.positiveText || n.value.positiveText),
      localizedNegativeText: O(() => e.negativeText || n.value.negativeText),
      positiveButtonProps: se(a, "positiveButtonProps"),
      negativeButtonProps: se(a, "negativeButtonProps"),
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
    } = this, i = Et(o.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && h(zr, Object.assign({
      size: "small",
      onClick: this.handleNegativeClick
    }, this.negativeButtonProps), {
      default: () => this.localizedNegativeText
    }), this.positiveText !== null && h(zr, Object.assign({
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
    }, Et(o.icon, () => [h(yt, {
      clsPrefix: n
    }, {
      default: () => h(_o, null)
    })])) : null, a) : null), i ? h("div", {
      class: [`${n}-popconfirm__action`]
    }, i) : null);
  }
}), Ey = k("popconfirm", [z("body", `
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `, [z("icon", `
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]), z("action", `
 display: flex;
 justify-content: flex-end;
 `, [D("&:not(:first-child)", "margin-top: 8px"), k("button", [D("&:not(:last-child)", "margin-right: 8px;")])])]), zy = Object.assign(Object.assign(Object.assign({}, ue.props), Wr), {
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
}), ky = J({
  name: "Popconfirm",
  props: zy,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Ae(), r = ue("Popconfirm", "-popconfirm", Ey, EC, e, n), o = M(null);
    function i(s) {
      var u;
      if (!(!((u = o.value) === null || u === void 0) && u.getMergedShow())) return;
      const {
        onPositiveClick: d,
        "onUpdate:show": c
      } = e;
      Promise.resolve(d ? d(s) : !0).then((f) => {
        var p;
        f !== !1 && ((p = o.value) === null || p === void 0 || p.setShow(!1), c && pe(c, !1));
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
        f !== !1 && ((p = o.value) === null || p === void 0 || p.setShow(!1), c && pe(c, !1));
      });
    }
    return me(yd, {
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
    return h(Vr, Ir(n, cs, {
      theme: r.peers.Popover,
      themeOverrides: r.peerOverrides.Popover,
      internalExtraClass: ["popconfirm"],
      ref: "popoverInstRef"
    }), {
      trigger: e.activator || e.trigger,
      default: () => {
        const o = sn(n, cs);
        return h(Dy, Object.assign(Object.assign({}, o), {
          onPositiveClick: this.handlePositiveClick,
          onNegativeClick: this.handleNegativeClick
        }), e);
      }
    });
  }
}), Ty = D([D("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), k("spin-container", `
 position: relative;
 `, [k("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [Lo()])]), k("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), k("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [N("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]), k("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), k("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [N("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]), Ry = {
  small: 20,
  medium: 18,
  large: 16
}, Oy = Object.assign(Object.assign({}, ue.props), {
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
}), Bd = J({
  name: "Spin",
  props: Oy,
  setup(e) {
    process.env.NODE_ENV !== "production" && ot(() => {
      e.spinning !== void 0 && at("spin", "`spinning` is deprecated, please use `show` instead.");
    });
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r
    } = Ae(e), o = ue("Spin", "-spin", Ty, kC, e, n), i = O(() => {
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
      } = c, v = typeof u == "number" ? Vn(u) : c[U("size", u)];
      return {
        "--n-bezier": d,
        "--n-opacity-spinning": f,
        "--n-size": v,
        "--n-color": p,
        "--n-text-color": m
      };
    }), a = r ? Ne("spin", O(() => {
      const {
        size: u
      } = e;
      return typeof u == "number" ? String(u) : u[0];
    }), i, e) : void 0, l = ea(e, ["spinning", "show"]), s = M(!1);
    return ot((u) => {
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
      mergedStrokeWidth: O(() => {
        const {
          strokeWidth: u
        } = e;
        if (u !== void 0) return u;
        const {
          size: d
        } = e;
        return Ry[typeof d == "number" ? "medium" : d];
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
    }, h(Nr, {
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
    }, r), h(ct, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? s : null
    })) : s;
  }
}), My = D([k("table", `
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
 `, [D("th", `
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
 `, [D("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), D("td", `
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
 `, [D("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), N("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `, [D("tr", [D("&:last-child", [D("td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]), N("single-line", [D("th", `
 border-right: 0px solid var(--n-merged-border-color);
 `), D("td", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), N("single-column", [D("tr", [D("&:not(:last-child)", [D("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]), N("striped", [D("tr:nth-of-type(even)", [D("td", "background-color: var(--n-td-color-striped)")])]), Ve("bottom-bordered", [D("tr", [D("&:last-child", [D("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])]), Zi(k("table", `
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `, [D("th", `
 background-color: var(--n-th-color-modal);
 `), D("td", `
 background-color: var(--n-td-color-modal);
 `)])), Fs(k("table", `
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `, [D("th", `
 background-color: var(--n-th-color-popover);
 `), D("td", `
 background-color: var(--n-td-color-popover);
 `)]))]), Iy = Object.assign(Object.assign({}, ue.props), {
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
}), _y = J({
  name: "Table",
  props: Iy,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Ae(e), i = ue("Table", "-table", My, OC, e, n), a = gt("Table", o, n), l = O(() => {
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
          borderRadius: w,
          thFontWeight: A,
          lineHeight: y,
          borderColorModal: S,
          borderColorPopover: T,
          tdColorStriped: C,
          tdColorStripedModal: P,
          tdColorStripedPopover: I,
          [U("fontSize", u)]: _,
          [U("tdPadding", u)]: K,
          [U("thPadding", u)]: H
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
        "--n-border-color-popover": T,
        "--n-border-radius": w,
        "--n-font-size": _,
        "--n-th-color": m,
        "--n-th-color-modal": v,
        "--n-th-color-popover": g,
        "--n-th-font-weight": A,
        "--n-th-text-color": b,
        "--n-line-height": y,
        "--n-td-padding": K,
        "--n-th-padding": H,
        "--n-td-color-striped": C,
        "--n-td-color-striped-modal": P,
        "--n-td-color-striped-popover": I
      };
    }), s = r ? Ne("table", O(() => e.size[0]), l, e) : void 0;
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
}), Ly = /* @__PURE__ */ Object.assign({
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
    return (r, o) => (Ke(), lt(te(Gu), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: te(uh),
      "date-locale": te(B0),
      "theme-overrides": n
    }, {
      default: st(() => [
        Yn(te(vd), null, {
          default: st(() => [
            Yn(te(ld), null, {
              default: st(() => [
                an(r.$slots, "default")
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
function Ny(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Sd = { exports: {} };
(function(e) {
  function n() {
    var r = 0, o = 1, i = 2, a = 3, l = 4, s = 5, u = 6, d = 7, c = 8, f = 9, p = 10, m = 11, v = 12, g = 13, b = 14, x = 15, w = 16, A = 17, y = 0, S = 1, T = 2, C = 3, P = 4;
    function I(t, F) {
      return 55296 <= t.charCodeAt(F) && t.charCodeAt(F) <= 56319 && 56320 <= t.charCodeAt(F + 1) && t.charCodeAt(F + 1) <= 57343;
    }
    function _(t, F) {
      F === void 0 && (F = 0);
      var $ = t.charCodeAt(F);
      if (55296 <= $ && $ <= 56319 && F < t.length - 1) {
        var L = $, R = t.charCodeAt(F + 1);
        return 56320 <= R && R <= 57343 ? (L - 55296) * 1024 + (R - 56320) + 65536 : L;
      }
      if (56320 <= $ && $ <= 57343 && F >= 1) {
        var L = t.charCodeAt(F - 1), R = $;
        return 55296 <= L && L <= 56319 ? (L - 55296) * 1024 + (R - 56320) + 65536 : R;
      }
      return $;
    }
    function K(t, F, $) {
      var L = [t].concat(F).concat([$]), R = L[L.length - 2], V = $, Q = L.lastIndexOf(b);
      if (Q > 1 && L.slice(1, Q).every(function(W) {
        return W == a;
      }) && [a, g, A].indexOf(t) == -1)
        return T;
      var Z = L.lastIndexOf(l);
      if (Z > 0 && L.slice(1, Z).every(function(W) {
        return W == l;
      }) && [v, l].indexOf(R) == -1)
        return L.filter(function(W) {
          return W == l;
        }).length % 2 == 1 ? C : P;
      if (R == r && V == o)
        return y;
      if (R == i || R == r || R == o)
        return V == b && F.every(function(W) {
          return W == a;
        }) ? T : S;
      if (V == i || V == r || V == o)
        return S;
      if (R == u && (V == u || V == d || V == f || V == p))
        return y;
      if ((R == f || R == d) && (V == d || V == c))
        return y;
      if ((R == p || R == c) && V == c)
        return y;
      if (V == a || V == x)
        return y;
      if (V == s)
        return y;
      if (R == v)
        return y;
      var oe = L.indexOf(a) != -1 ? L.lastIndexOf(a) - 1 : L.length - 2;
      return [g, A].indexOf(L[oe]) != -1 && L.slice(oe + 1, -1).every(function(W) {
        return W == a;
      }) && V == b || R == x && [w, A].indexOf(V) != -1 ? y : F.indexOf(l) != -1 ? T : R == l && V == l ? y : S;
    }
    this.nextBreak = function(t, F) {
      if (F === void 0 && (F = 0), F < 0)
        return 0;
      if (F >= t.length - 1)
        return t.length;
      for (var $ = H(_(t, F)), L = [], R = F + 1; R < t.length; R++)
        if (!I(t, R - 1)) {
          var V = H(_(t, R));
          if (K($, L, V))
            return R;
          L.push(V);
        }
      return t.length;
    }, this.splitGraphemes = function(t) {
      for (var F = [], $ = 0, L; (L = this.nextBreak(t, $)) < t.length; )
        F.push(t.slice($, L)), $ = L;
      return $ < t.length && F.push(t.slice($)), F;
    }, this.iterateGraphemes = function(t) {
      var F = 0, $ = {
        next: (function() {
          var L, R;
          return (R = this.nextBreak(t, F)) < t.length ? (L = t.slice(F, R), F = R, { value: L, done: !1 }) : F < t.length ? (L = t.slice(F), F = t.length, { value: L, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && ($[Symbol.iterator] = function() {
        return $;
      }), $;
    }, this.countGraphemes = function(t) {
      for (var F = 0, $ = 0, L; (L = this.nextBreak(t, $)) < t.length; )
        $ = L, F++;
      return $ < t.length && F++, F;
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
      t == 128658 ? w : 128102 <= t && t <= 128105 ? A : m;
    }
    return this;
  }
  e.exports && (e.exports = n);
})(Sd);
var Hy = Sd.exports;
const jy = /* @__PURE__ */ Ny(Hy), Wy = new jy(), Vy = (e = "") => Wy.countGraphemes(e);
function qy(e) {
  return e && typeof e == "object" && typeof e.then == "function";
}
const Ad = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ vo({
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
  emits: /* @__PURE__ */ vo(["blur", "input"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = ps(e, "modelValue"), o = n;
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
    return (s, u) => (Ke(), lt(te(Pb), {
      "input-props": { autocomplete: "off" },
      type: e.type,
      size: e.size,
      "show-password-on": e.showPassword ? "click" : void 0,
      value: r.value,
      maxlength: e.maxlength,
      "show-count": e.showCount,
      "count-graphemes": e.maxlength != null && e.maxlength > 0 || e.showCount ? te(Vy) : void 0,
      placeholder: e.placeholder,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      onInput: l,
      onBlur: a
    }, Yi({ _: 2 }, [
      e.prefixIcon ? {
        name: "prefix",
        fn: st(() => [
          Yn(te(Ea), dc(cc(e.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly"]));
  }
});
var hr = void 0, Gn = {}, Gi;
Gn.throttle = Gi = function(e, n, r, o) {
  var i, a = 0;
  typeof n != "boolean" && (o = r, r = n, n = hr);
  function l() {
    var s = this, u = +/* @__PURE__ */ new Date() - a, d = arguments;
    function c() {
      a = +/* @__PURE__ */ new Date(), r.apply(s, d);
    }
    function f() {
      i = hr;
    }
    o && !i && c(), i && clearTimeout(i), o === hr && u > e ? c() : n !== !0 && (i = setTimeout(o ? f : c, o === hr ? e - u : e));
  }
  return Gn.guid && (l.guid = r.guid = r.guid || Gn.guid++), l;
};
Gn.debounce = function(e, n, r) {
  return r === hr ? Gi(e, n, !1) : Gi(e, r, n !== !1);
};
const Ta = function(e, n, r) {
  return Gn.debounce(n || 300, r ?? !0, e);
}, iw = function(e, n, r) {
  return Gn.throttle(n || 300, r ?? !1, e);
}, Ky = /* @__PURE__ */ Object.assign({
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
      }), M(f);
    }();
    function i() {
      const f = {};
      return e.model.forEach((p) => {
        p.slot && (f[p.field] = pc(p.value));
      }), { ...o.value, ...f };
    }
    const a = r, l = Oa("form"), s = Ta(function() {
      document.activeElement && document.activeElement.blur(), l.value.validate((f) => {
        a("submit", { formData: i(), valid: !f || f.length === 0, errors: f });
      }).catch(() => null);
    }), u = Oa("formItem");
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
    return n({ restoreValidation: d }), (f, p) => (Ke(), lt(te(LC), {
      ref: "form",
      "show-label": e.showLabel,
      "label-placement": e.labelPlacement,
      "label-width": "auto",
      "label-align": e.labelPlacement === "left" ? "right" : "left",
      model: te(o),
      rules: e.rules,
      onSubmit: fc(te(s), ["prevent"])
    }, {
      default: st(() => [
        (Ke(!0), br(et, null, hc(e.model, (m) => (Ke(), lt(te(By), {
          ref_for: !0,
          ref: "formItem",
          key: m.field,
          label: m.label,
          path: m.field,
          "feedback-class": e.feedbackSizeClass ? `p-form-item-feedback-${e.feedbackSizeClass}` : "",
          first: !0
        }, {
          default: st(() => [
            !m.slot && m.type === "input" ? (Ke(), lt(vc(te(Ad)), cn({
              key: 0,
              modelValue: te(o)[m.field],
              "onUpdate:modelValue": (v) => te(o)[m.field] = v,
              ref_for: !0
            }, { disabled: e.disabled, readonly: e.readonly, ...m.props }, {
              onInput: (v) => c(m.field)
            }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : an(f.$slots, m.field, { key: 1 })
          ]),
          _: 2
        }, 1032, ["label", "path", "feedback-class"]))), 128)),
        an(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["show-label", "label-placement", "label-align", "model", "rules", "onSubmit"]));
  }
}), Uy = /* @__PURE__ */ Object.assign({
  name: "PSelect",
  inheritAttrs: !1
}, {
  __name: "select",
  props: /* @__PURE__ */ vo({
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
  emits: /* @__PURE__ */ vo(["update", "change"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = gs(), o = n, i = ps(e, "modelValue"), a = Ta(function(l) {
      l !== i.value && Je(() => {
        o("change", l);
      }), i.value = l, o("update", l);
    }, 300);
    return (l, s) => (Ke(), lt(te(l1), {
      class: xs(`${te(r).class ? te(r).class : ""}`),
      style: bi(e.width ? `width:${e.width}` : ""),
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
      "onUpdate:value": te(a)
    }, {
      empty: st(() => [
        Yn(te($o), {
          size: "small",
          description: e.emptyDescription
        }, null, 8, ["description"])
      ]),
      _: 1
    }, 8, ["class", "style", "options", "value", "size", "placeholder", "disabled", "value-field", "label-field", "clearable", "show-checkmark", "onUpdate:value"]));
  }
}), Tr = /* @__PURE__ */ Object.assign({
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
  setup(e, { emit: n }) {
    const r = gs(), o = ms(), i = n, a = Ta(function() {
      i("click");
    }, 300);
    return (l, s) => (Ke(), lt(te(zr), {
      class: xs([
        te(r).class ? te(r).class : "",
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
      onClick: te(a)
    }, Yi({
      default: st(() => [
        !e.loading || e.loading && !e.loadingWithoutText ? (Ke(), lt(te(o).default, { key: 0 })) : Wt("", !0)
      ]),
      _: 2
    }, [
      l.$slots.icon ? {
        name: "icon",
        fn: st(() => [
          Yn(te(o).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "attr-type", "block", "size", "type", "loading", "ghost", "secondary", "text", "disabled", "onClick"]));
  }
}), Gy = /* @__PURE__ */ Object.assign({
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
    return (n, r) => (Ke(), lt(te(_y), {
      "bottom-bordered": e.bottomBordered,
      bordered: e.bordered,
      "single-column": e.singleColumn,
      "single-line": e.singleLine,
      size: e.size,
      striped: e.striped
    }, {
      default: st(() => [
        an(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["bottom-bordered", "bordered", "single-column", "single-line", "size", "striped"]));
  }
}), Xy = {
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
    function n() {
      e.onClose && e.onClose(), e.onNegativeClick && e.onNegativeClick();
    }
    function r() {
      e.onClose && e.onClose(), e.onPositiveClick && e.onPositiveClick();
    }
    return (o, i) => (Ke(), br(et, null, [
      e.negativeText ? (Ke(), lt(te(Tr), {
        key: 0,
        size: "xs",
        type: "default",
        "default-type": e.type,
        onClick: n
      }, {
        default: st(() => [
          on(po(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type"])) : Wt("", !0),
      e.positiveText ? (Ke(), lt(te(Tr), {
        key: 1,
        size: "xs",
        type: e.type,
        onClick: r
      }, {
        default: st(() => [
          on(po(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type"])) : Wt("", !0)
    ], 64));
  }
}, Yy = /* @__PURE__ */ J((e, {
  emit: n
}) => {
  const r = ms(), o = M(), i = () => {
    o.value.setShow(!1);
  };
  return () => h(ky, {
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
    action: () => h(Xy, {
      positiveText: e.positiveText,
      negativeText: e.negativeText,
      type: e.type,
      onClose: i,
      onPositiveClick: function() {
        n("positive-click");
      },
      onNegativeClick: function() {
        n("negative-click");
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
});
/*!
  * vue-promised v2.1.0
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
function Zy(e, n = 200) {
  const r = M(!1), o = M(!1), i = O(() => !r.value && !o.value), a = M(!1), l = M(), s = M();
  let u;
  return Pe(() => te(e), (d) => {
    if (r.value = !1, o.value = !1, l.value = null, !d) {
      s.value = null, u && clearTimeout(u), u = null;
      return;
    }
    te(n) > 0 ? (a.value = !1, u && clearTimeout(u), u = setTimeout(() => {
      a.value = !0;
    }, Number(te(n)))) : a.value = !0, d.then((c) => {
      d === te(e) && (s.value = c, o.value = !0);
    }).catch((c) => {
      d === te(e) && (l.value = c, r.value = !0);
    });
  }, { immediate: !0 }), { isPending: i, isRejected: r, isResolved: o, isDelayElapsed: a, error: l, data: s };
}
const Fd = ({ delay: e = 300, minPendingTime: n = 500, loadingValue: r = !1 } = {}) => {
  let o = 0, i = null;
  const a = () => {
    i && (clearTimeout(i), i = null);
  }, l = M(!!r), s = M(!!r);
  let u = null;
  const d = (c) => (l.value = c, new Promise((f) => {
    c === !0 ? f() : u = f;
  }));
  return Pe(
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
  ), bs(() => {
    u = null, a();
  }), { loading: s, waiting: l, setLoadingStatus: d };
}, Jy = {
  key: 1,
  class: "p-promised-loading"
}, Qy = /* @__PURE__ */ Object.assign({
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
    const n = O(() => ["small", "medium", "large"].includes(e.loadingSize) ? e.loadingSize : "medium"), r = O(() => {
      const g = { position: "absolute", left: "50%", zIndex: 2 };
      return e.loadingTop == null ? g.top = "50%" : g.top = `${e.loadingTop}px`, n.value === "small" ? (g.marginLeft = "-14px", e.loadingTop == null && (g.marginTop = "-14px")) : n.value === "medium" ? (g.marginLeft = "-17px", e.loadingTop == null && (g.marginTop = "-17px")) : n.value === "large" && (g.marginLeft = "-20px", e.loadingTop == null && (g.marginTop = "-20px")), g;
    }), o = se(() => e.promise), { data: i, error: a, isPending: l, isDelayElapsed: s, isResolved: u, isRejected: d } = Zy(o, 0), { loading: c, waiting: f } = Fd();
    Pe(
      () => l.value && s.value,
      (g) => {
        f.value = g;
      },
      { immediate: !1 }
    );
    const p = M(!1);
    Pe(d, (g) => {
      g === !0 && p.value === !1 && (p.value = g);
    }), Pe(u, (g) => {
      g === !0 && p.value === !0 && (p.value = !1);
    });
    function m(g) {
      let b = !0;
      if (typeof g == "object") {
        for (const x in g)
          if (typeof g[x] == "object" ? b = m(g[x]) : b = g[x] === "" || g[x] === null || g[x] === void 0, b === !1)
            break;
        return b;
      } else
        return g === "" || g === null || g === void 0;
    }
    function v(g) {
      return g == null || g === "" ? !0 : m(e.dataField ? g[e.dataField] : g);
    }
    return (g, b) => (Ke(), br("div", {
      style: bi(e.contentStyle)
    }, [
      !te(c) && !te(l) && !te(a) && !v(te(i)) || te(l) && te(f) && !p.value && !te(a) && !v(te(i)) ? an(g.$slots, "default", {
        key: 0,
        data: te(i)
      }) : Wt("", !0),
      te(c) ? (Ke(), br("div", Jy, [
        Yn(te(Bd), {
          size: n.value,
          style: bi(r.value)
        }, null, 8, ["size", "style"]),
        b[0] || (b[0] = gc("div", { class: "p-promised-loading-mask" }, null, -1))
      ])) : Wt("", !0),
      !te(c) && !te(l) && !te(a) && v(te(i)) ? (Ke(), lt(te($o), {
        key: 2,
        description: e.emptyDesc,
        size: "medium"
      }, Yi({ _: 2 }, [
        g.$slots.emptyExtra ? {
          name: "extra",
          fn: st(() => [
            an(g.$slots, "emptyExtra")
          ]),
          key: "0"
        } : void 0
      ]), 1032, ["description"])) : Wt("", !0),
      !te(c) && !te(l) && te(a) ? (Ke(), lt(te($o), {
        key: 3,
        description: te(a).message || e.errorDefaultDesc,
        size: "medium"
      }, null, 8, ["description"])) : Wt("", !0)
    ], 4));
  }
}), ew = {
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
    const { loading: n, waiting: r, setLoadingStatus: o } = Fd();
    function i(s, u) {
      const d = s({
        done: function() {
          return o(!1).then(() => {
            e.onLoading(!1);
          });
        }
      });
      if (d !== !1)
        if (qy(d)) {
          u === "positiveClick" && (o(!0), e.onLoading(!0));
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
    return (s, u) => (Ke(), br(et, null, [
      e.negativeText ? (Ke(), lt(te(Tr), {
        key: 0,
        size: "small",
        type: "default",
        "default-type": e.type,
        disabled: te(n),
        onClick: a
      }, {
        default: st(() => [
          on(po(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type", "disabled"])) : Wt("", !0),
      e.positiveText ? (Ke(), lt(te(Tr), {
        key: 1,
        size: "small",
        type: e.type,
        loading: te(n),
        loadingWithoutText: !1,
        onClick: l
      }, {
        default: st(() => [
          on(po(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type", "loading"])) : Wt("", !0)
    ], 64));
  }
};
function tw(e) {
  return typeof e == "string" ? function() {
    return h("p", { innerHTML: e });
  } : Array.isArray(e) ? function() {
    return h(
      "div",
      e.map((n) => h("p", { innerHTML: n }))
    );
  } : e;
}
const aw = () => {
  let e = null, n = null, r = null, o = null;
  const i = td(), a = (d = {}, c = { width: 430 }, f) => {
    const p = {
      autoFocus: !1,
      blockScroll: !0,
      bordered: !1,
      closable: !0,
      showIcon: !1,
      title: "提示",
      positiveText: "确定",
      negativeText: "取消",
      ...d,
      transformOrigin: "center",
      class: "p-dialog",
      contentClass: "p-dialog-content",
      actionClass: "p-dialog-action"
    };
    return p.closeOnEsc = !1, p.maskClosable = !1, p.iconPlacement = "left", p.titleClass = p.showIcon ? "p-dialog-title" : "p-dialog-title p-dialog-title-without-icon", p.style = "width: " + c.width + "px", f && (p.type = f), (p.positiveText || p.negativeText) && (p.action = function() {
      return h(ew, {
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
    }), p.content = tw(d.content), i.create(p);
  }, l = (d, c) => {
    d.negativeText == null && (d.negativeText = ""), d.positiveText == null && (d.positiveText = "我知道了"), d.closable == null && (d.closable = !1), d.showIcon == null && (d.showIcon = !0);
    const f = a(d, c, "success");
    return n = f, f;
  }, s = (d, c) => {
    d.negativeText == null && (d.negativeText = ""), d.positiveText == null && (d.positiveText = "我知道了"), d.closable == null && (d.closable = !1), d.showIcon == null && (d.showIcon = !0);
    const f = a(d, c, "warning");
    return r = f, f;
  }, u = (d, c) => {
    d.negativeText == null && (d.negativeText = ""), d.positiveText == null && (d.positiveText = "我知道了"), d.closable == null && (d.closable = !1), d.showIcon == null && (d.showIcon = !0);
    const f = a(d, c, "error");
    return o = f, f;
  };
  return bs(() => {
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
}, lw = () => {
  const e = gd();
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
      return r.content ? h(r.content, a.contentProps) : h("div", null);
    }, a.footer && (i.action = function() {
      return h(a.footer, a.footerProps);
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
}, sw = {
  install: (e, n = {}) => {
    const { prefix: r = "p" } = n;
    e.component(`${r}-practical`, Ly), e.component(`${r}-form`, Ky), e.component(`${r}-input`, Ad), e.component(`${r}-select`, Uy), e.component(`${r}-button`, Tr), e.component(`${r}-table`, Gy), e.component(`${r}-popconfirm`, Yy), e.component(`${r}-promised`, Qy), e.component(`${r}-icon-wrapper`, $y), e.component(`${r}-icon`, Ea), e.component(`${r}-input-group`, Eb), e.component(`${r}-input-group-label`, Tb), e.component(`${r}-popover`, Vr), e.component(`${r}-spin`, Bd), e.component(`${r}-collapse`, Jb), e.component(`${r}-collapse-item`, t1), e.component(`${r}-dropdown`, D1), e.component(`${r}-tooltip`, p1);
  }
};
export {
  ow as createDiscreteApi,
  Ta as debounce,
  sw as default,
  iw as throttle,
  Fd as useDelayLoading,
  aw as useDialog,
  lw as useModal
};
