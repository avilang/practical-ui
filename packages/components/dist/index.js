import { createTextVNode as nn, Fragment as Je, Comment as qi, isVNode as Qd, defineComponent as J, inject as fe, getCurrentInstance as kr, watch as ke, onBeforeUnmount as Xe, ref as I, readonly as rn, computed as O, onMounted as Qe, onBeforeMount as Fn, reactive as Tr, provide as xe, withDirectives as kt, toRef as le, h, Teleport as Po, nextTick as Ze, renderSlot as Un, onActivated as ss, onDeactivated as us, mergeProps as un, shallowRef as ec, watchEffect as ot, Transition as ut, TransitionGroup as tc, vShow as Gn, cloneVNode as ds, Text as nc, markRaw as Ea, createApp as rc, unref as we, openBlock as rt, createBlock as vt, withCtx as pt, createVNode as $o, mergeModels as fo, useModel as cs, createSlots as fs, normalizeProps as oc, guardReactiveProps as ic, useTemplateRef as za, withModifiers as ac, createElementBlock as Ki, renderList as lc, resolveDynamicComponent as sc, toValue as uc, useAttrs as hs, normalizeClass as vs, normalizeStyle as dc, useSlots as ps, createCommentVNode as xr, toDisplayString as ho, onScopeDispose as gs } from "vue";
let vo = [];
const xs = /* @__PURE__ */ new WeakMap();
function cc() {
  vo.forEach((e) => e(...xs.get(e))), vo = [];
}
function ms(e, ...n) {
  xs.set(e, n), !vo.includes(e) && vo.push(e) === 1 && requestAnimationFrame(cc);
}
function Wt(e, n) {
  let { target: r } = e;
  for (; r; ) {
    if (r.dataset && r.dataset[n] !== void 0)
      return !0;
    r = r.parentElement;
  }
  return !1;
}
function Xn(e) {
  return e.composedPath()[0] || null;
}
function mr(e) {
  return typeof e == "string" ? e.endsWith("px") ? Number(e.slice(0, e.length - 2)) : Number(e) : e;
}
function jn(e) {
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
const ka = {
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
}, Jn = "^\\s*", Qn = "\\s*$", xn = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", mn = "([0-9A-Fa-f])", bn = "([0-9A-Fa-f]{2})", fc = new RegExp(`${Jn}rgb\\s*\\(${xn},${xn},${xn}\\)${Qn}`), hc = new RegExp(`${Jn}rgba\\s*\\(${xn},${xn},${xn},${xn}\\)${Qn}`), vc = new RegExp(`${Jn}#${mn}${mn}${mn}${Qn}`), pc = new RegExp(`${Jn}#${bn}${bn}${bn}${Qn}`), gc = new RegExp(`${Jn}#${mn}${mn}${mn}${mn}${Qn}`), xc = new RegExp(`${Jn}#${bn}${bn}${bn}${bn}${Qn}`);
function st(e) {
  return parseInt(e, 16);
}
function Bn(e) {
  try {
    let n;
    if (n = pc.exec(e))
      return [st(n[1]), st(n[2]), st(n[3]), 1];
    if (n = fc.exec(e))
      return [nt(n[1]), nt(n[5]), nt(n[9]), 1];
    if (n = hc.exec(e))
      return [
        nt(n[1]),
        nt(n[5]),
        nt(n[9]),
        fr(n[13])
      ];
    if (n = vc.exec(e))
      return [
        st(n[1] + n[1]),
        st(n[2] + n[2]),
        st(n[3] + n[3]),
        1
      ];
    if (n = xc.exec(e))
      return [
        st(n[1]),
        st(n[2]),
        st(n[3]),
        fr(st(n[4]) / 255)
      ];
    if (n = gc.exec(e))
      return [
        st(n[1] + n[1]),
        st(n[2] + n[2]),
        st(n[3] + n[3]),
        fr(st(n[4] + n[4]) / 255)
      ];
    if (e in ka)
      return Bn(ka[e]);
    throw new Error(`[seemly/rgba]: Invalid color value ${e}.`);
  } catch (n) {
    throw n;
  }
}
function mc(e) {
  return e > 1 ? 1 : e < 0 ? 0 : e;
}
function gi(e, n, r, o) {
  return `rgba(${nt(e)}, ${nt(n)}, ${nt(r)}, ${mc(o)})`;
}
function Yo(e, n, r, o, i) {
  return nt((e * n * (1 - o) + r * o) / i);
}
function ft(e, n) {
  Array.isArray(e) || (e = Bn(e)), Array.isArray(n) || (n = Bn(n));
  const r = e[3], o = n[3], i = fr(r + o - r * o);
  return gi(Yo(e[0], r, n[0], o, i), Yo(e[1], r, n[1], o, i), Yo(e[2], r, n[2], o, i), i);
}
function me(e, n) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : Bn(e);
  return n.alpha ? gi(r, o, i, n.alpha) : gi(r, o, i, a);
}
function qr(e, n) {
  const [r, o, i, a = 1] = Array.isArray(e) ? e : Bn(e), { lightness: l = 1, alpha: s = 1 } = n;
  return bc([r * l, o * l, i * l, a * s]);
}
function fr(e) {
  const n = Math.round(Number(e) * 100) / 100;
  return n > 1 ? 1 : n < 0 ? 0 : n;
}
function nt(e) {
  const n = Math.round(Number(e));
  return n > 255 ? 255 : n < 0 ? 0 : n;
}
function bc(e) {
  const [n, r, o] = e;
  return 3 in e ? `rgba(${nt(n)}, ${nt(r)}, ${nt(o)}, ${fr(e[3])})` : `rgba(${nt(n)}, ${nt(r)}, ${nt(o)}, 1)`;
}
function on(e = 8) {
  return Math.random().toString(16).slice(2, 2 + e);
}
function an(e, n = [], r) {
  const o = {};
  return n.forEach((i) => {
    o[i] = e[i];
  }), Object.assign(o, r);
}
function Rr(e, n = [], r) {
  const o = {};
  return Object.getOwnPropertyNames(e).forEach((a) => {
    n.includes(a) || (o[a] = e[a]);
  }), Object.assign(o, r);
}
function xi(e, n = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(nn(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        xi(o, n, r);
        return;
      }
      if (o.type === Je) {
        if (o.children === null) return;
        Array.isArray(o.children) && xi(o.children, n, r);
      } else {
        if (o.type === qi && n) return;
        r.push(o);
      }
    }
  }), r;
}
function ve(e, ...n) {
  if (Array.isArray(e))
    e.forEach((r) => ve(r, ...n));
  else
    return e(...n);
}
function Sn(e) {
  return Object.keys(e);
}
function je(e, ...n) {
  return typeof e == "function" ? e(...n) : typeof e == "string" ? nn(e) : typeof e == "number" ? nn(String(e)) : null;
}
const Ta = /* @__PURE__ */ new Set();
function at(e, n) {
  const r = `[naive/${e}]: ${n}`;
  Ta.has(r) || (Ta.add(r), console.error(r));
}
function Tt(e, n) {
  console.error(`[naive/${e}]: ${n}`);
}
function dn(e, n) {
  throw new Error(`[naive/${e}]: ${n}`);
}
function Ra(e) {
  switch (typeof e) {
    case "string":
      return e || void 0;
    case "number":
      return String(e);
    default:
      return;
  }
}
function mi(e, n = "default", r = void 0) {
  const o = e[n];
  if (!o)
    return Tt("getFirstSlotVNode", `slot[${n}] is empty`), null;
  const i = xi(o(r));
  return i.length === 1 ? i[0] : (Tt("getFirstSlotVNode", `slot[${n}] should have exactly one child`), null);
}
function Cc(e) {
  return (n) => {
    n ? e.value = n.$el : e.value = null;
  };
}
function bt(e) {
  return e.some((n) => Qd(n) ? !(n.type === qi || n.type === Je && !bt(n.children)) : !0) ? e : null;
}
function Et(e, n) {
  return e && bt(e()) || n();
}
function bi(e, n, r) {
  return e && bt(e(n)) || r(n);
}
function _e(e, n) {
  const r = e && bt(e());
  return n(r || null);
}
function yc(e, n, r) {
  const o = e && bt(e(n));
  return r(o || null);
}
function Ci(e) {
  return !(e && bt(e()));
}
function Zo(e) {
  const n = e.filter((r) => r !== void 0);
  if (n.length !== 0)
    return n.length === 1 ? n[0] : (r) => {
      e.forEach((o) => {
        o && o(r);
      });
    };
}
const yi = J({
  render() {
    var e, n;
    return (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e);
  }
}), wc = /^(\d|\.)+$/, Oa = /(\d|\.)+/;
function Vt(e, {
  c: n = 1,
  offset: r = 0,
  attachPx: o = !0
} = {}) {
  if (typeof e == "number") {
    const i = (e + r) * n;
    return i === 0 ? "0" : `${i}px`;
  } else if (typeof e == "string")
    if (wc.test(e)) {
      const i = (Number(e) + r) * n;
      return o ? i === 0 ? "0" : `${i}px` : `${i}`;
    } else {
      const i = Oa.exec(e);
      return i ? e.replace(Oa, String((Number(i[0]) + r) * n)) : e;
    }
  return e;
}
function po(e) {
  return e.replace(/#|\(|\)|,|\s|\./g, "_");
}
function Ma(e) {
  const {
    left: n,
    right: r,
    top: o,
    bottom: i
  } = St(e);
  return `${o} ${r} ${i} ${n}`;
}
function Bc(e) {
  let n = 0;
  for (let r = 0; r < e.length; ++r)
    e[r] === "&" && ++n;
  return n;
}
const bs = /\s*,(?![^(]*\))\s*/g, Sc = /\s+/g;
function Ac(e, n) {
  const r = [];
  return n.split(bs).forEach((o) => {
    let i = Bc(o);
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
function Fc(e, n) {
  const r = [];
  return n.split(bs).forEach((o) => {
    e.forEach((i) => {
      r.push((i && i + " ") + o);
    });
  }), r;
}
function Pc(e) {
  let n = [""];
  return e.forEach((r) => {
    r = r && r.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    r && (r.includes("&") ? n = Ac(n, r) : n = Fc(n, r));
  }), n.join(", ").replace(Sc, " ");
}
function Ia(e) {
  if (!e)
    return;
  const n = e.parentElement;
  n && n.removeChild(e);
}
function Do(e, n) {
  return (n ?? document.head).querySelector(`style[cssr-id="${e}"]`);
}
function $c(e) {
  const n = document.createElement("style");
  return n.setAttribute("cssr-id", e), n;
}
function Kr(e) {
  return e ? /^\s*@(s|m)/.test(e) : !1;
}
const Dc = /[A-Z]/g;
function Cs(e) {
  return e.replace(Dc, (n) => "-" + n.toLowerCase());
}
function Ec(e, n = "  ") {
  return typeof e == "object" && e !== null ? ` {
` + Object.entries(e).map((r) => n + `  ${Cs(r[0])}: ${r[1]};`).join(`
`) + `
` + n + "}" : `: ${e};`;
}
function zc(e, n, r) {
  return typeof e == "function" ? e({
    context: n.context,
    props: r
  }) : e;
}
function _a(e, n, r, o) {
  if (!n)
    return "";
  const i = zc(n, r, o);
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
    s = Cs(s), u != null && l.push(`  ${s}${Ec(u)}`);
  }), e && l.push("}"), l.join(`
`);
}
function wi(e, n, r) {
  e && e.forEach((o) => {
    if (Array.isArray(o))
      wi(o, n, r);
    else if (typeof o == "function") {
      const i = o(n);
      Array.isArray(i) ? wi(i, n, r) : i && r(i);
    } else o && r(o);
  });
}
function ys(e, n, r, o, i) {
  const a = e.$;
  let l = "";
  if (!a || typeof a == "string")
    Kr(a) ? l = a : n.push(a);
  else if (typeof a == "function") {
    const d = a({
      context: o.context,
      props: i
    });
    Kr(d) ? l = d : n.push(d);
  } else if (a.before && a.before(o.context), !a.$ || typeof a.$ == "string")
    Kr(a.$) ? l = a.$ : n.push(a.$);
  else if (a.$) {
    const d = a.$({
      context: o.context,
      props: i
    });
    Kr(d) ? l = d : n.push(d);
  }
  const s = Pc(n), u = _a(s, e.props, o, i);
  l ? r.push(`${l} {`) : u.length && r.push(u), e.children && wi(e.children, {
    context: o.context,
    props: i
  }, (d) => {
    if (typeof d == "string") {
      const c = _a(s, { raw: d }, o, i);
      r.push(c);
    } else
      ys(d, n, r, o, i);
  }), n.pop(), l && r.push("}"), a && a.after && a.after(o.context);
}
function kc(e, n, r) {
  const o = [];
  return ys(e, [], o, n, r), o.join(`

`);
}
function br(e) {
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
function Tc(e, n, r, o) {
  const { els: i } = n;
  if (r === void 0)
    i.forEach(Ia), n.els = [];
  else {
    const a = Do(r, o);
    a && i.includes(a) && (Ia(a), n.els = i.filter((l) => l !== a));
  }
}
function La(e, n) {
  e.push(n);
}
function Rc(e, n, r, o, i, a, l, s, u) {
  let d;
  if (r === void 0 && (d = n.render(o), r = br(d)), u) {
    u.adapter(r, d ?? n.render(o));
    return;
  }
  s === void 0 && (s = document.head);
  const c = Do(r, s);
  if (c !== null && !a)
    return c;
  const f = c ?? $c(r);
  if (d === void 0 && (d = n.render(o)), f.textContent = d, c !== null)
    return c;
  if (l) {
    const p = s.querySelector(`meta[name="${l}"]`);
    if (p)
      return s.insertBefore(f, p), La(n.els, f), f;
  }
  return i ? s.insertBefore(f, s.querySelector("style, link")) : s.appendChild(f), La(n.els, f), f;
}
function Oc(e) {
  return kc(this, this.instance, e);
}
function Mc(e = {}) {
  const { id: n, ssr: r, props: o, head: i = !1, force: a = !1, anchorMetaName: l, parent: s } = e;
  return Rc(this.instance, this, n, o, i, a, l, s, r);
}
function Ic(e = {}) {
  const { id: n, parent: r } = e;
  Tc(this.instance, this, n, r);
}
const Ur = function(e, n, r, o) {
  return {
    instance: e,
    $: n,
    props: r,
    children: o,
    els: [],
    render: Oc,
    mount: Mc,
    unmount: Ic
  };
}, _c = function(e, n, r, o) {
  return Array.isArray(n) ? Ur(e, { $: null }, null, n) : Array.isArray(r) ? Ur(e, n, null, r) : Array.isArray(o) ? Ur(e, n, r, o) : Ur(e, n, r, null);
};
function ws(e = {}) {
  const n = {
    c: (...r) => _c(n, ...r),
    use: (r, ...o) => r.install(n, ...o),
    find: Do,
    context: {},
    config: e
  };
  return n;
}
function Lc(e, n) {
  if (e === void 0)
    return !1;
  if (n) {
    const { context: { ids: r } } = n;
    return r.has(e);
  }
  return Do(e) !== null;
}
function Nc(e) {
  let n = ".", r = "__", o = "--", i;
  if (e) {
    let v = e.blockPrefix;
    v && (n = v), v = e.elementPrefix, v && (r = v), v = e.modifierPrefix, v && (o = v);
  }
  const a = {
    install(v) {
      i = v.c;
      const x = v.context;
      x.bem = {}, x.bem.b = null, x.bem.els = null;
    }
  };
  function l(v) {
    let x, b;
    return {
      before(g) {
        x = g.bem.b, b = g.bem.els, g.bem.els = null;
      },
      after(g) {
        g.bem.b = x, g.bem.els = b;
      },
      $({ context: g, props: w }) {
        return v = typeof v == "string" ? v : v({ context: g, props: w }), g.bem.b = v, `${(w == null ? void 0 : w.bPrefix) || n}${g.bem.b}`;
      }
    };
  }
  function s(v) {
    let x;
    return {
      before(b) {
        x = b.bem.els;
      },
      after(b) {
        b.bem.els = x;
      },
      $({ context: b, props: g }) {
        return v = typeof v == "string" ? v : v({ context: b, props: g }), b.bem.els = v.split(",").map((w) => w.trim()), b.bem.els.map((w) => `${(g == null ? void 0 : g.bPrefix) || n}${b.bem.b}${r}${w}`).join(", ");
      }
    };
  }
  function u(v) {
    return {
      $({ context: x, props: b }) {
        v = typeof v == "string" ? v : v({ context: x, props: b });
        const g = v.split(",").map((y) => y.trim());
        function w(y) {
          return g.map((S) => `&${(b == null ? void 0 : b.bPrefix) || n}${x.bem.b}${y !== void 0 ? `${r}${y}` : ""}${o}${S}`).join(", ");
        }
        const A = x.bem.els;
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
      $({ context: x, props: b }) {
        v = typeof v == "string" ? v : v({ context: x, props: b });
        const g = x.bem.els;
        if (process.env.NODE_ENV !== "production" && g !== null && g.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${v}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(b == null ? void 0 : b.bPrefix) || n}${x.bem.b}${g !== null && g.length > 0 ? `${r}${g[0]}` : ""}${o}${v})`;
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
const Hc = "n", Cr = `.${Hc}-`, jc = "__", Wc = "--", Bs = ws(), Ss = Nc({
  blockPrefix: Cr,
  elementPrefix: jc,
  modifierPrefix: Wc
});
Bs.use(Ss);
const {
  c: D,
  find: Jy
} = Bs, {
  cB: k,
  cE: z,
  cM: N,
  cNotM: Ve
} = Ss;
function Ui(e) {
  return D(({
    props: {
      bPrefix: n
    }
  }) => `${n || Cr}modal, ${n || Cr}drawer`, [e]);
}
function As(e) {
  return D(({
    props: {
      bPrefix: n
    }
  }) => `${n || Cr}popover`, [e]);
}
function Fs(e) {
  return D(({
    props: {
      bPrefix: n
    }
  }) => `&${n || Cr}modal`, e);
}
const Vc = (...e) => D(">", [k(...e)]);
function U(e, n) {
  return e + (n === "default" ? "" : n.replace(/^[a-z]/, (r) => r.toUpperCase()));
}
let Jo;
function qc() {
  return Jo === void 0 && (Jo = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes("jsdom")), Jo;
}
const er = typeof document < "u" && typeof window < "u", Ps = /* @__PURE__ */ new WeakSet();
function Kc(e) {
  Ps.add(e);
}
function Uc(e) {
  return !Ps.has(e);
}
function Gc(e, n, r) {
  var o;
  const i = fe(e, null);
  if (i === null) return;
  const a = (o = kr()) === null || o === void 0 ? void 0 : o.proxy;
  ke(r, l), l(r.value), Xe(() => {
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
function Xc(e, n, r) {
  const o = I(e.value);
  let i = null;
  return ke(e, (a) => {
    i !== null && window.clearTimeout(i), a === !0 ? r && !r.value ? o.value = !0 : i = window.setTimeout(() => {
      o.value = !0;
    }, n) : o.value = !1;
  }), o;
}
function $s(e) {
  const n = I(!!e.value);
  if (n.value)
    return rn(n);
  const r = ke(e, (o) => {
    o && (n.value = !0, r());
  });
  return rn(n);
}
function qe(e) {
  const n = O(e), r = I(n.value);
  return ke(n, (o) => {
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
function Gi() {
  return kr() !== null;
}
const Xi = typeof window < "u";
let Wn, hr;
const Yc = () => {
  var e, n;
  Wn = Xi ? (n = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || n === void 0 ? void 0 : n.ready : void 0, hr = !1, Wn !== void 0 ? Wn.then(() => {
    hr = !0;
  }) : hr = !0;
};
Yc();
function Zc(e) {
  if (hr)
    return;
  let n = !1;
  Qe(() => {
    hr || Wn == null || Wn.then(() => {
      n || e();
    });
  }), Xe(() => {
    n = !0;
  });
}
function so(e) {
  return e.composedPath()[0];
}
const Jc = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Qc(e, n, r) {
  if (e === "mousemoveoutside") {
    const o = (i) => {
      n.contains(so(i)) || r(i);
    };
    return {
      mousemove: o,
      touchstart: o
    };
  } else if (e === "clickoutside") {
    let o = !1;
    const i = (l) => {
      o = !n.contains(so(l));
    }, a = (l) => {
      o && (n.contains(so(l)) || r(l));
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
function Ds(e, n, r) {
  const o = Jc[e];
  let i = o.get(n);
  i === void 0 && o.set(n, i = /* @__PURE__ */ new WeakMap());
  let a = i.get(r);
  return a === void 0 && i.set(r, a = Qc(e, n, r)), a;
}
function ef(e, n, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Ds(e, n, r);
    return Object.keys(i).forEach((a) => {
      Le(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function tf(e, n, r, o) {
  if (e === "mousemoveoutside" || e === "clickoutside") {
    const i = Ds(e, n, r);
    return Object.keys(i).forEach((a) => {
      De(a, document, i[a], o);
    }), !0;
  }
  return !1;
}
function nf() {
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
  function i(C, P, M) {
    const _ = C[P];
    return C[P] = function() {
      return M.apply(C, arguments), _.apply(C, arguments);
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
      const { type: M, eventPhase: _, bubbles: K } = P, H = so(P);
      if (_ === 2)
        return;
      const t = _ === 1 ? "capture" : "bubble";
      let F = H;
      const $ = [];
      for (; F === null && (F = window), $.push(F), F !== window; )
        F = F.parentNode || null;
      const L = c.capture[M], R = c.bubble[M];
      if (i(P, "stopPropagation", r), i(P, "stopImmediatePropagation", o), d(P, u), t === "capture") {
        if (L === void 0)
          return;
        for (let V = $.length - 1; V >= 0 && !e.has(P); --V) {
          const Q = $[V], Z = L.get(Q);
          if (Z !== void 0) {
            l.set(P, Q);
            for (const re of Z) {
              if (n.has(P))
                break;
              re(P);
            }
          }
          if (V === 0 && !K && R !== void 0) {
            const re = R.get(Q);
            if (re !== void 0)
              for (const W of re) {
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
            for (const re of Z) {
              if (n.has(P))
                break;
              re(P);
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
      const { type: M, eventPhase: _ } = P;
      if (_ !== 2)
        return;
      const K = f[M];
      K !== void 0 && K.forEach((H) => H(P));
    };
    return C.displayName = "evtdUnifiedWindowEventHandler", C;
  }
  const v = p(), x = m();
  function b(C, P) {
    const M = c[C];
    return M[P] === void 0 && (M[P] = /* @__PURE__ */ new Map(), window.addEventListener(P, v, C === "capture")), M[P];
  }
  function g(C) {
    return f[C] === void 0 && (f[C] = /* @__PURE__ */ new Set(), window.addEventListener(C, x)), f[C];
  }
  function w(C, P) {
    let M = C.get(P);
    return M === void 0 && C.set(P, M = /* @__PURE__ */ new Set()), M;
  }
  function A(C, P, M, _) {
    const K = c[P][M];
    if (K !== void 0) {
      const H = K.get(C);
      if (H !== void 0 && H.has(_))
        return !0;
    }
    return !1;
  }
  function y(C, P) {
    const M = f[C];
    return !!(M !== void 0 && M.has(P));
  }
  function S(C, P, M, _) {
    let K;
    if (typeof _ == "object" && _.once === !0 ? K = (L) => {
      T(C, P, K, _), M(L);
    } : K = M, ef(C, P, K, _))
      return;
    const t = _ === !0 || typeof _ == "object" && _.capture === !0 ? "capture" : "bubble", F = b(t, C), $ = w(F, P);
    if ($.has(K) || $.add(K), P === window) {
      const L = g(C);
      L.has(K) || L.add(K);
    }
  }
  function T(C, P, M, _) {
    if (tf(C, P, M, _))
      return;
    const H = _ === !0 || typeof _ == "object" && _.capture === !0, t = H ? "capture" : "bubble", F = b(t, C), $ = w(F, P);
    if (P === window && !A(P, H ? "bubble" : "capture", C, M) && y(C, M)) {
      const R = f[C];
      R.delete(M), R.size === 0 && (window.removeEventListener(C, x), f[C] = void 0);
    }
    $.has(M) && $.delete(M), $.size === 0 && F.delete(P), F.size === 0 && (window.removeEventListener(C, v, t === "capture"), c[t][C] = void 0);
  }
  return {
    on: S,
    off: T
  };
}
const { on: Le, off: De } = nf(), sr = I(null);
function Na(e) {
  if (e.clientX > 0 || e.clientY > 0)
    sr.value = {
      x: e.clientX,
      y: e.clientY
    };
  else {
    const { target: n } = e;
    if (n instanceof Element) {
      const { left: r, top: o, width: i, height: a } = n.getBoundingClientRect();
      r > 0 || o > 0 ? sr.value = {
        x: r + i / 2,
        y: o + a / 2
      } : sr.value = { x: 0, y: 0 };
    } else
      sr.value = null;
  }
}
let Gr = 0, Ha = !0;
function go() {
  if (!Xi)
    return rn(I(null));
  Gr === 0 && Le("click", document, Na, !0);
  const e = () => {
    Gr += 1;
  };
  return Ha && (Ha = Gi()) ? (Fn(e), Xe(() => {
    Gr -= 1, Gr === 0 && De("click", document, Na, !0);
  })) : e(), rn(sr);
}
const rf = I(void 0);
let Xr = 0;
function ja() {
  rf.value = Date.now();
}
let Wa = !0;
function xo(e) {
  if (!Xi)
    return rn(I(!1));
  const n = I(!1);
  let r = null;
  function o() {
    r !== null && window.clearTimeout(r);
  }
  function i() {
    o(), n.value = !0, r = window.setTimeout(() => {
      n.value = !1;
    }, e);
  }
  Xr === 0 && Le("click", window, ja, !0);
  const a = () => {
    Xr += 1, Le("click", window, i, !0);
  };
  return Wa && (Wa = Gi()) ? (Fn(a), Xe(() => {
    Xr -= 1, Xr === 0 && De("click", window, ja, !0), De("click", window, i, !0), o();
  })) : a(), rn(n);
}
function Yn(e, n) {
  return ke(e, (r) => {
    r !== void 0 && (n.value = r);
  }), O(() => e.value === void 0 ? n.value : e.value);
}
function tr() {
  const e = I(!1);
  return Qe(() => {
    e.value = !0;
  }), rn(e);
}
function Yi(e, n) {
  return O(() => {
    for (const r of n)
      if (e[r] !== void 0)
        return e[r];
    return e[n[n.length - 1]];
  });
}
const of = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function af() {
  return of;
}
function lf(e = {}, n) {
  const r = Tr({
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
    (n === void 0 || n.value) && (Le("keydown", document, a), Le("keyup", document, l)), n !== void 0 && ke(n, (u) => {
      u ? (Le("keydown", document, a), Le("keyup", document, l)) : (De("keydown", document, a), De("keyup", document, l));
    });
  };
  return Gi() ? (Fn(s), Xe(() => {
    (n === void 0 || n.value) && (De("keydown", document, a), De("keyup", document, l));
  })) : s(), rn(r);
}
const Zi = "n-internal-select-menu", Es = "n-internal-select-menu-body", Eo = "n-modal-body", sf = "n-modal-provider", zs = "n-modal", zo = "n-drawer-body", Or = "n-popover-body", ks = "__disabled__";
function qt(e) {
  const n = fe(Eo, null), r = fe(zo, null), o = fe(Or, null), i = fe(Es, null), a = I();
  if (typeof document < "u") {
    a.value = document.fullscreenElement;
    const l = () => {
      a.value = document.fullscreenElement;
    };
    Qe(() => {
      Le("fullscreenchange", document, l);
    }), Xe(() => {
      De("fullscreenchange", document, l);
    });
  }
  return qe(() => {
    var l;
    const {
      to: s
    } = e;
    return s !== void 0 ? s === !1 ? ks : s === !0 ? a.value || "body" : s : n != null && n.value ? (l = n.value.$el) !== null && l !== void 0 ? l : n.value : r != null && r.value ? r.value : o != null && o.value ? o.value : i != null && i.value ? i.value : s ?? (a.value || "body");
  });
}
qt.tdkey = ks;
qt.propTo = {
  type: [String, Object, Boolean],
  default: void 0
};
function Bi(e, n, r = "default") {
  const o = n[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  return o();
}
function Si(e, n = !0, r = []) {
  return e.forEach((o) => {
    if (o !== null) {
      if (typeof o != "object") {
        (typeof o == "string" || typeof o == "number") && r.push(nn(String(o)));
        return;
      }
      if (Array.isArray(o)) {
        Si(o, n, r);
        return;
      }
      if (o.type === Je) {
        if (o.children === null)
          return;
        Array.isArray(o.children) && Si(o.children, n, r);
      } else o.type !== qi && r.push(o);
    }
  }), r;
}
function Va(e, n, r = "default") {
  const o = n[r];
  if (o === void 0)
    throw new Error(`[vueuc/${e}]: slot[${r}] is empty.`);
  const i = Si(o());
  if (i.length === 1)
    return i[0];
  throw new Error(`[vueuc/${e}]: slot[${r}] should have exactly one child.`);
}
let Jt = null;
function Ts() {
  if (Jt === null && (Jt = document.getElementById("v-binder-view-measurer"), Jt === null)) {
    Jt = document.createElement("div"), Jt.id = "v-binder-view-measurer";
    const { style: e } = Jt;
    e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e.visibility = "hidden", document.body.appendChild(Jt);
  }
  return Jt.getBoundingClientRect();
}
function uf(e, n) {
  const r = Ts();
  return {
    top: n,
    left: e,
    height: 0,
    width: 0,
    right: r.width - e,
    bottom: r.height - n
  };
}
function Qo(e) {
  const n = e.getBoundingClientRect(), r = Ts();
  return {
    left: n.left - r.left,
    top: n.top - r.top,
    bottom: r.height + r.top - n.bottom,
    right: r.width + r.left - n.right,
    width: n.width,
    height: n.height
  };
}
function df(e) {
  return e.nodeType === 9 ? null : e.parentNode;
}
function Rs(e) {
  if (e === null)
    return null;
  const n = df(e);
  if (n === null)
    return null;
  if (n.nodeType === 9)
    return document;
  if (n.nodeType === 1) {
    const { overflow: r, overflowX: o, overflowY: i } = getComputedStyle(n);
    if (/(auto|scroll|overlay)/.test(r + i + o))
      return n;
  }
  return Rs(n);
}
const Ji = J({
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
    xe("VBinder", (n = kr()) === null || n === void 0 ? void 0 : n.proxy);
    const r = fe("VBinder", null), o = I(null), i = (g) => {
      o.value = g, r && e.syncTargetWithParent && r.setTargetRef(g);
    };
    let a = [];
    const l = () => {
      let g = o.value;
      for (; g = Rs(g), g !== null; )
        a.push(g);
      for (const w of a)
        Le("scroll", w, f, !0);
    }, s = () => {
      for (const g of a)
        De("scroll", g, f, !0);
      a = [];
    }, u = /* @__PURE__ */ new Set(), d = (g) => {
      u.size === 0 && l(), u.has(g) || u.add(g);
    }, c = (g) => {
      u.has(g) && u.delete(g), u.size === 0 && s();
    }, f = () => {
      ms(p);
    }, p = () => {
      u.forEach((g) => g());
    }, m = /* @__PURE__ */ new Set(), v = (g) => {
      m.size === 0 && Le("resize", window, b), m.has(g) || m.add(g);
    }, x = (g) => {
      m.has(g) && m.delete(g), m.size === 0 && De("resize", window, b);
    }, b = () => {
      m.forEach((g) => g());
    };
    return Xe(() => {
      De("resize", window, b), s();
    }), {
      targetRef: o,
      setTargetRef: i,
      addScrollListener: d,
      removeScrollListener: c,
      addResizeListener: v,
      removeResizeListener: x
    };
  },
  render() {
    return Bi("binder", this.$slots);
  }
}), Qi = J({
  name: "Target",
  setup() {
    const { setTargetRef: e, syncTarget: n } = fe("VBinder");
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
    return e ? kt(Va("follower", this.$slots), [
      [n]
    ]) : Va("follower", this.$slots);
  }
}), In = "@@mmoContext", cf = {
  mounted(e, { value: n }) {
    e[In] = {
      handler: void 0
    }, typeof n == "function" && (e[In].handler = n, Le("mousemoveoutside", e, n));
  },
  updated(e, { value: n }) {
    const r = e[In];
    typeof n == "function" ? r.handler ? r.handler !== n && (De("mousemoveoutside", e, r.handler), r.handler = n, Le("mousemoveoutside", e, n)) : (e[In].handler = n, Le("mousemoveoutside", e, n)) : r.handler && (De("mousemoveoutside", e, r.handler), r.handler = void 0);
  },
  unmounted(e) {
    const { handler: n } = e[In];
    n && De("mousemoveoutside", e, n), e[In].handler = void 0;
  }
}, _n = "@@coContext", yr = {
  mounted(e, { value: n, modifiers: r }) {
    e[_n] = {
      handler: void 0
    }, typeof n == "function" && (e[_n].handler = n, Le("clickoutside", e, n, {
      capture: r.capture
    }));
  },
  updated(e, { value: n, modifiers: r }) {
    const o = e[_n];
    typeof n == "function" ? o.handler ? o.handler !== n && (De("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = n, Le("clickoutside", e, n, {
      capture: r.capture
    })) : (e[_n].handler = n, Le("clickoutside", e, n, {
      capture: r.capture
    })) : o.handler && (De("clickoutside", e, o.handler, {
      capture: r.capture
    }), o.handler = void 0);
  },
  unmounted(e, { modifiers: n }) {
    const { handler: r } = e[_n];
    r && De("clickoutside", e, r, {
      capture: n.capture
    }), e[_n].handler = void 0;
  }
};
function ff(e, n) {
  console.error(`[vdirs/${e}]: ${n}`);
}
class hf {
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
    o.has(n) ? o.delete(n) : r === void 0 && ff("z-index-manager/unregister-element", "Element not found when unregistering."), this.squashState();
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
const ei = new hf(), Ln = "@@ziContext", ea = {
  mounted(e, n) {
    const { value: r = {} } = n, { zIndex: o, enabled: i } = r;
    e[Ln] = {
      enabled: !!i,
      initialized: !1
    }, i && (ei.ensureZIndex(e, o), e[Ln].initialized = !0);
  },
  updated(e, n) {
    const { value: r = {} } = n, { zIndex: o, enabled: i } = r, a = e[Ln].enabled;
    i && !a && (ei.ensureZIndex(e, o), e[Ln].initialized = !0), e[Ln].enabled = !!i;
  },
  unmounted(e, n) {
    if (!e[Ln].initialized)
      return;
    const { value: r = {} } = n, { zIndex: o } = r;
    ei.unregister(e, o);
  }
}, vf = "@css-render/vue3-ssr";
function pf(e, n) {
  return `<style cssr-id="${e}">
${n}
</style>`;
}
function gf(e, n, r) {
  const { styles: o, ids: i } = r;
  i.has(e) || o !== null && (i.add(e), o.push(pf(e, n)));
}
const xf = typeof document < "u";
function Pn() {
  if (xf)
    return;
  const e = fe(vf, null);
  if (e !== null)
    return {
      adapter: (n, r) => gf(n, r, e),
      context: e
    };
}
function qa(e, n) {
  console.error(`[vueuc/${e}]: ${n}`);
}
const { c: tn } = ws(), ta = "vueuc-style";
function Ka(e) {
  return e & -e;
}
class Os {
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
      i[n] += r, n += Ka(n);
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
      a += r[n], n -= Ka(n);
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
function Ua(e) {
  return typeof e == "string" ? document.querySelector(e) : e();
}
const Ms = J({
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
      showTeleport: $s(le(e, "show")),
      mergedTo: O(() => {
        const { to: n } = e;
        return n ?? "body";
      })
    };
  },
  render() {
    return this.showTeleport ? this.disabled ? Bi("lazy-teleport", this.$slots) : h(Po, {
      disabled: this.disabled,
      to: this.mergedTo
    }, Bi("lazy-teleport", this.$slots)) : null;
  }
}), Yr = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ga = {
  start: "end",
  center: "center",
  end: "start"
}, ti = {
  top: "height",
  bottom: "height",
  left: "width",
  right: "width"
}, mf = {
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
}, bf = {
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
}, Cf = {
  "bottom-start": "right",
  "bottom-end": "left",
  "top-start": "right",
  "top-end": "left",
  "right-start": "bottom",
  "right-end": "top",
  "left-start": "bottom",
  "left-end": "top"
}, Xa = {
  top: !0,
  bottom: !1,
  left: !0,
  right: !1
  // left--
}, Ya = {
  top: "end",
  bottom: "start",
  left: "end",
  right: "start"
};
function yf(e, n, r, o, i, a) {
  if (!i || a)
    return { placement: e, top: 0, left: 0 };
  const [l, s] = e.split("-");
  let u = s ?? "center", d = {
    top: 0,
    left: 0
  };
  const c = (m, v, x) => {
    let b = 0, g = 0;
    const w = r[m] - n[v] - n[m];
    return w > 0 && o && (x ? g = Xa[v] ? w : -w : b = Xa[v] ? w : -w), {
      left: b,
      top: g
    };
  }, f = l === "left" || l === "right";
  if (u !== "center") {
    const m = Cf[e], v = Yr[m], x = ti[m];
    if (r[x] > n[x]) {
      if (
        // current space is not enough
        // ----------[ target ]---------|
        // -------[     follower        ]
        n[m] + n[x] < r[x]
      ) {
        const b = (r[x] - n[x]) / 2;
        n[m] < b || n[v] < b ? n[m] < n[v] ? (u = Ga[s], d = c(x, v, f)) : d = c(x, m, f) : u = "center";
      }
    } else r[x] < n[x] && n[v] < 0 && // opposite align has larger space
    // ------------[   target   ]
    // ----------------[follower]
    n[m] > n[v] && (u = Ga[s]);
  } else {
    const m = l === "bottom" || l === "top" ? "left" : "top", v = Yr[m], x = ti[m], b = (r[x] - n[x]) / 2;
    // center is not enough
    // ----------- [ target ]--|
    // -------[     follower     ]
    (n[m] < b || n[v] < b) && (n[m] > n[v] ? (u = Ya[m], d = c(x, m, f)) : (u = Ya[v], d = c(x, v, f)));
  }
  let p = l;
  return (
    // space is not enough
    n[l] < r[ti[l]] && // opposite position's space is larger
    n[l] < n[Yr[l]] && (p = Yr[l]), {
      placement: u !== "center" ? `${p}-${u}` : p,
      left: d.left,
      top: d.top
    }
  );
}
function wf(e, n) {
  return n ? bf[e] : mf[e];
}
function Bf(e, n, r, o, i, a) {
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
const Sf = tn([
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
]), na = J({
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
    const n = fe("VBinder"), r = qe(() => e.enabled !== void 0 ? e.enabled : e.show), o = I(null), i = I(null), a = () => {
      const { syncTrigger: p } = e;
      p.includes("scroll") && n.addScrollListener(u), p.includes("resize") && n.addResizeListener(u);
    }, l = () => {
      n.removeScrollListener(u), n.removeResizeListener(u);
    };
    Qe(() => {
      r.value && (u(), a());
    });
    const s = Pn();
    Sf.mount({
      id: "vueuc/binder",
      head: !0,
      anchorMetaName: ta,
      ssr: s
    }), Xe(() => {
      l();
    }), Zc(() => {
      r.value && u();
    });
    const u = () => {
      if (!r.value)
        return;
      const p = o.value;
      if (p === null)
        return;
      const m = n.targetRef, { x: v, y: x, overlap: b } = e, g = v !== void 0 && x !== void 0 ? uf(v, x) : Qo(m);
      p.style.setProperty("--v-target-width", `${Math.round(g.width)}px`), p.style.setProperty("--v-target-height", `${Math.round(g.height)}px`);
      const { width: w, minWidth: A, placement: y, internalShift: S, flip: T } = e;
      p.setAttribute("v-placement", y), b ? p.setAttribute("v-overlap", "") : p.removeAttribute("v-overlap");
      const { style: C } = p;
      w === "target" ? C.width = `${g.width}px` : w !== void 0 ? C.width = w : C.width = "", A === "target" ? C.minWidth = `${g.width}px` : A !== void 0 ? C.minWidth = A : C.minWidth = "";
      const P = Qo(p), M = Qo(i.value), { left: _, top: K, placement: H } = yf(y, g, P, S, T, b), t = wf(H, b), { left: F, top: $, transform: L } = Bf(H, M, g, K, _, b);
      p.setAttribute("v-placement", H), p.style.setProperty("--v-offset-left", `${Math.round(_)}px`), p.style.setProperty("--v-offset-top", `${Math.round(K)}px`), p.style.transform = `translateX(${F}) translateY(${$}) ${L}`, p.style.setProperty("--v-transform-origin", t), p.style.transformOrigin = t;
    };
    ke(r, (p) => {
      p ? (a(), d()) : l();
    });
    const d = () => {
      Ze().then(u).catch((p) => console.error(p));
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
      ke(le(e, p), u);
    }), ["teleportDisabled"].forEach((p) => {
      ke(le(e, p), d);
    }), ke(le(e, "syncTrigger"), (p) => {
      p.includes("resize") ? n.addResizeListener(u) : n.removeResizeListener(u), p.includes("scroll") ? n.addScrollListener(u) : n.removeScrollListener(u);
    });
    const c = tr(), f = qe(() => {
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
    return h(Ms, {
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
            ea,
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
var yn = [], Af = function() {
  return yn.some(function(e) {
    return e.activeTargets.length > 0;
  });
}, Ff = function() {
  return yn.some(function(e) {
    return e.skippedTargets.length > 0;
  });
}, Za = "ResizeObserver loop completed with undelivered notifications.", Pf = function() {
  var e;
  typeof ErrorEvent == "function" ? e = new ErrorEvent("error", {
    message: Za
  }) : (e = document.createEvent("Event"), e.initEvent("error", !1, !1), e.message = Za), window.dispatchEvent(e);
}, wr;
(function(e) {
  e.BORDER_BOX = "border-box", e.CONTENT_BOX = "content-box", e.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(wr || (wr = {}));
var wn = function(e) {
  return Object.freeze(e);
}, $f = /* @__PURE__ */ function() {
  function e(n, r) {
    this.inlineSize = n, this.blockSize = r, wn(this);
  }
  return e;
}(), Is = function() {
  function e(n, r, o, i) {
    return this.x = n, this.y = r, this.width = o, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, wn(this);
  }
  return e.prototype.toJSON = function() {
    var n = this, r = n.x, o = n.y, i = n.top, a = n.right, l = n.bottom, s = n.left, u = n.width, d = n.height;
    return { x: r, y: o, top: i, right: a, bottom: l, left: s, width: u, height: d };
  }, e.fromRect = function(n) {
    return new e(n.x, n.y, n.width, n.height);
  }, e;
}(), ra = function(e) {
  return e instanceof SVGElement && "getBBox" in e;
}, _s = function(e) {
  if (ra(e)) {
    var n = e.getBBox(), r = n.width, o = n.height;
    return !r && !o;
  }
  var i = e, a = i.offsetWidth, l = i.offsetHeight;
  return !(a || l || e.getClientRects().length);
}, Ja = function(e) {
  var n;
  if (e instanceof Element)
    return !0;
  var r = (n = e == null ? void 0 : e.ownerDocument) === null || n === void 0 ? void 0 : n.defaultView;
  return !!(r && e instanceof r.Element);
}, Df = function(e) {
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
}, vr = typeof window < "u" ? window : {}, Zr = /* @__PURE__ */ new WeakMap(), Qa = /auto|scroll/, Ef = /^tb|vertical/, zf = /msie|trident/i.test(vr.navigator && vr.navigator.userAgent), Ft = function(e) {
  return parseFloat(e || "0");
}, Vn = function(e, n, r) {
  return e === void 0 && (e = 0), n === void 0 && (n = 0), r === void 0 && (r = !1), new $f((r ? n : e) || 0, (r ? e : n) || 0);
}, el = wn({
  devicePixelContentBoxSize: Vn(),
  borderBoxSize: Vn(),
  contentBoxSize: Vn(),
  contentRect: new Is(0, 0, 0, 0)
}), Ls = function(e, n) {
  if (n === void 0 && (n = !1), Zr.has(e) && !n)
    return Zr.get(e);
  if (_s(e))
    return Zr.set(e, el), el;
  var r = getComputedStyle(e), o = ra(e) && e.ownerSVGElement && e.getBBox(), i = !zf && r.boxSizing === "border-box", a = Ef.test(r.writingMode || ""), l = !o && Qa.test(r.overflowY || ""), s = !o && Qa.test(r.overflowX || ""), u = o ? 0 : Ft(r.paddingTop), d = o ? 0 : Ft(r.paddingRight), c = o ? 0 : Ft(r.paddingBottom), f = o ? 0 : Ft(r.paddingLeft), p = o ? 0 : Ft(r.borderTopWidth), m = o ? 0 : Ft(r.borderRightWidth), v = o ? 0 : Ft(r.borderBottomWidth), x = o ? 0 : Ft(r.borderLeftWidth), b = f + d, g = u + c, w = x + m, A = p + v, y = s ? e.offsetHeight - A - e.clientHeight : 0, S = l ? e.offsetWidth - w - e.clientWidth : 0, T = i ? b + w : 0, C = i ? g + A : 0, P = o ? o.width : Ft(r.width) - T - S, M = o ? o.height : Ft(r.height) - C - y, _ = P + b + S + w, K = M + g + y + A, H = wn({
    devicePixelContentBoxSize: Vn(Math.round(P * devicePixelRatio), Math.round(M * devicePixelRatio), a),
    borderBoxSize: Vn(_, K, a),
    contentBoxSize: Vn(P, M, a),
    contentRect: new Is(f, u, P, M)
  });
  return Zr.set(e, H), H;
}, Ns = function(e, n, r) {
  var o = Ls(e, r), i = o.borderBoxSize, a = o.contentBoxSize, l = o.devicePixelContentBoxSize;
  switch (n) {
    case wr.DEVICE_PIXEL_CONTENT_BOX:
      return l;
    case wr.BORDER_BOX:
      return i;
    default:
      return a;
  }
}, kf = /* @__PURE__ */ function() {
  function e(n) {
    var r = Ls(n);
    this.target = n, this.contentRect = r.contentRect, this.borderBoxSize = wn([r.borderBoxSize]), this.contentBoxSize = wn([r.contentBoxSize]), this.devicePixelContentBoxSize = wn([r.devicePixelContentBoxSize]);
  }
  return e;
}(), Hs = function(e) {
  if (_s(e))
    return 1 / 0;
  for (var n = 0, r = e.parentNode; r; )
    n += 1, r = r.parentNode;
  return n;
}, Tf = function() {
  var e = 1 / 0, n = [];
  yn.forEach(function(l) {
    if (l.activeTargets.length !== 0) {
      var s = [];
      l.activeTargets.forEach(function(d) {
        var c = new kf(d.target), f = Hs(d.target);
        s.push(c), d.lastReportedSize = Ns(d.target, d.observedBox), f < e && (e = f);
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
}, tl = function(e) {
  yn.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(i) {
      i.isActive() && (Hs(i.target) > e ? r.activeTargets.push(i) : r.skippedTargets.push(i));
    });
  });
}, Rf = function() {
  var e = 0;
  for (tl(e); Af(); )
    e = Tf(), tl(e);
  return Ff() && Pf(), e > 0;
}, ni, js = [], Of = function() {
  return js.splice(0).forEach(function(e) {
    return e();
  });
}, Mf = function(e) {
  if (!ni) {
    var n = 0, r = document.createTextNode(""), o = { characterData: !0 };
    new MutationObserver(function() {
      return Of();
    }).observe(r, o), ni = function() {
      r.textContent = "".concat(n ? n-- : n++);
    };
  }
  js.push(e), ni();
}, If = function(e) {
  Mf(function() {
    requestAnimationFrame(e);
  });
}, uo = 0, _f = function() {
  return !!uo;
}, Lf = 250, Nf = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, nl = [
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
], rl = function(e) {
  return e === void 0 && (e = 0), Date.now() + e;
}, ri = !1, Hf = function() {
  function e() {
    var n = this;
    this.stopped = !0, this.listener = function() {
      return n.schedule();
    };
  }
  return e.prototype.run = function(n) {
    var r = this;
    if (n === void 0 && (n = Lf), !ri) {
      ri = !0;
      var o = rl(n);
      If(function() {
        var i = !1;
        try {
          i = Rf();
        } finally {
          if (ri = !1, n = o - rl(), !_f())
            return;
          i ? r.run(1e3) : n > 0 ? r.run(n) : r.start();
        }
      });
    }
  }, e.prototype.schedule = function() {
    this.stop(), this.run();
  }, e.prototype.observe = function() {
    var n = this, r = function() {
      return n.observer && n.observer.observe(document.body, Nf);
    };
    document.body ? r() : vr.addEventListener("DOMContentLoaded", r);
  }, e.prototype.start = function() {
    var n = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), nl.forEach(function(r) {
      return vr.addEventListener(r, n.listener, !0);
    }));
  }, e.prototype.stop = function() {
    var n = this;
    this.stopped || (this.observer && this.observer.disconnect(), nl.forEach(function(r) {
      return vr.removeEventListener(r, n.listener, !0);
    }), this.stopped = !0);
  }, e;
}(), Ai = new Hf(), ol = function(e) {
  !uo && e > 0 && Ai.start(), uo += e, !uo && Ai.stop();
}, jf = function(e) {
  return !ra(e) && !Df(e) && getComputedStyle(e).display === "inline";
}, Wf = function() {
  function e(n, r) {
    this.target = n, this.observedBox = r || wr.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return e.prototype.isActive = function() {
    var n = Ns(this.target, this.observedBox, !0);
    return jf(this.target) && (this.lastReportedSize = n), this.lastReportedSize.inlineSize !== n.inlineSize || this.lastReportedSize.blockSize !== n.blockSize;
  }, e;
}(), Vf = /* @__PURE__ */ function() {
  function e(n, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = n, this.callback = r;
  }
  return e;
}(), Jr = /* @__PURE__ */ new WeakMap(), il = function(e, n) {
  for (var r = 0; r < e.length; r += 1)
    if (e[r].target === n)
      return r;
  return -1;
}, Qr = function() {
  function e() {
  }
  return e.connect = function(n, r) {
    var o = new Vf(n, r);
    Jr.set(n, o);
  }, e.observe = function(n, r, o) {
    var i = Jr.get(n), a = i.observationTargets.length === 0;
    il(i.observationTargets, r) < 0 && (a && yn.push(i), i.observationTargets.push(new Wf(r, o && o.box)), ol(1), Ai.schedule());
  }, e.unobserve = function(n, r) {
    var o = Jr.get(n), i = il(o.observationTargets, r), a = o.observationTargets.length === 1;
    i >= 0 && (a && yn.splice(yn.indexOf(o), 1), o.observationTargets.splice(i, 1), ol(-1));
  }, e.disconnect = function(n) {
    var r = this, o = Jr.get(n);
    o.observationTargets.slice().forEach(function(i) {
      return r.unobserve(n, i.target);
    }), o.activeTargets.splice(0, o.activeTargets.length);
  }, e;
}(), qf = function() {
  function e(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof n != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Qr.connect(this, n);
  }
  return e.prototype.observe = function(n, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ja(n))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Qr.observe(this, n, r);
  }, e.prototype.unobserve = function(n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Ja(n))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Qr.unobserve(this, n);
  }, e.prototype.disconnect = function() {
    Qr.disconnect(this);
  }, e.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, e;
}();
class Kf {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || qf)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const mo = new Kf(), Br = J({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(e) {
    let n = !1;
    const r = kr().proxy;
    function o(i) {
      const { onResize: a } = e;
      a !== void 0 && a(i);
    }
    Qe(() => {
      const i = r.$el;
      if (i === void 0) {
        qa("resize-observer", "$el does not exist.");
        return;
      }
      if (i.nextElementSibling !== i.nextSibling && i.nodeType === 3 && i.nodeValue !== "") {
        qa("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      i.nextElementSibling !== null && (mo.registerHandler(i.nextElementSibling, o), n = !0);
    }), Xe(() => {
      n && mo.unregisterHandler(r.$el.nextElementSibling);
    });
  },
  render() {
    return Un(this.$slots, "default");
  }
});
let eo;
function Uf() {
  return typeof document > "u" ? !1 : (eo === void 0 && ("matchMedia" in window ? eo = window.matchMedia("(pointer:coarse)").matches : eo = !1), eo);
}
let oi;
function al() {
  return typeof document > "u" ? 1 : (oi === void 0 && (oi = "chrome" in window ? window.devicePixelRatio : 1), oi);
}
const Ws = "VVirtualListXScroll";
function Gf({ columnsRef: e, renderColRef: n, renderItemWithColsRef: r }) {
  const o = I(0), i = I(0), a = O(() => {
    const d = e.value;
    if (d.length === 0)
      return null;
    const c = new Os(d.length, 0);
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
  return xe(Ws, {
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
const ll = J({
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
      fe(Ws)
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
}), Xf = tn(".v-vl", {
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
]), Yf = J({
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
    const n = Pn();
    Xf.mount({
      id: "vueuc/virtual-list",
      head: !0,
      anchorMetaName: ta,
      ssr: n
    }), Qe(() => {
      const { defaultScrollIndex: t, defaultScrollKey: F } = e;
      t != null ? b({ index: t }) : F != null && b({ key: F });
    });
    let r = !1, o = !1;
    ss(() => {
      if (r = !1, !o) {
        o = !0;
        return;
      }
      b({ top: m.value, left: l.value });
    }), us(() => {
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
    }), { scrollLeftRef: l, listWidthRef: s } = Gf({
      columnsRef: le(e, "columns"),
      renderColRef: le(e, "renderCol"),
      renderItemWithColsRef: le(e, "renderItemWithCols")
    }), u = I(null), d = I(void 0), c = /* @__PURE__ */ new Map(), f = O(() => {
      const { items: t, itemSize: F, keyField: $ } = e, L = new Os(t.length, F);
      return t.forEach((R, V) => {
        const Q = R[$], Z = c.get(Q);
        Z !== void 0 && L.add(V, Z);
      }), L;
    }), p = I(0), m = I(0), v = qe(() => Math.max(f.value.getBound(m.value - mr(e.paddingTop)) - 1, 0)), x = O(() => {
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
      const { left: $, top: L, index: R, key: V, position: Q, behavior: Z, debounce: re = !0 } = t;
      if ($ !== void 0 || L !== void 0)
        y($, L, Z);
      else if (R !== void 0)
        A(R, Z, re);
      else if (V !== void 0) {
        const W = a.value.get(V);
        W !== void 0 && A(W, Z, re);
      } else Q === "bottom" ? y(0, Number.MAX_SAFE_INTEGER, Z) : Q === "top" && y(0, 0, Z);
    };
    let g, w = null;
    function A(t, F, $) {
      const { value: L } = f, R = L.sum(t) + mr(e.paddingTop);
      if (!$)
        u.value.scrollTo({
          left: 0,
          top: R,
          behavior: F
        });
      else {
        g = t, w !== null && window.clearTimeout(w), w = window.setTimeout(() => {
          g = void 0, w = null;
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
      const { value: V } = f, Q = a.value.get(t), Z = V.get(Q), re = (R = (L = ($ = F.borderBoxSize) === null || $ === void 0 ? void 0 : $[0]) === null || L === void 0 ? void 0 : L.blockSize) !== null && R !== void 0 ? R : F.contentRect.height;
      if (re === Z)
        return;
      re - e.itemSize === 0 ? c.delete(t) : c.set(t, re - e.itemSize);
      const G = re - Z;
      if (G === 0)
        return;
      V.add(Q, G);
      const ne = u.value;
      if (ne != null) {
        if (g === void 0) {
          const Be = V.sum(Q);
          ne.scrollTop > Be && ne.scrollBy(0, G);
        } else if (Q < g)
          ne.scrollBy(0, G);
        else if (Q === g) {
          const Be = V.sum(Q);
          re + Be > // Note, listEl shouldn't have border, nor offsetHeight won't be
          // correct
          ne.scrollTop + ne.offsetHeight && ne.scrollBy(0, G);
        }
        K();
      }
      p.value++;
    }
    const T = !Uf();
    let C = !1;
    function P(t) {
      var F;
      (F = e.onScroll) === null || F === void 0 || F.call(e, t), (!T || !C) && K();
    }
    function M(t) {
      var F;
      if ((F = e.onWheel) === null || F === void 0 || F.call(e, t), T) {
        const $ = u.value;
        if ($ != null) {
          if (t.deltaX === 0 && ($.scrollTop === 0 && t.deltaY <= 0 || $.scrollTop + $.offsetHeight >= $.scrollHeight && t.deltaY >= 0))
            return;
          t.preventDefault(), $.scrollTop += t.deltaY / al(), $.scrollLeft += t.deltaX / al(), K(), C = !0, ms(() => {
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
        const { itemResizable: t } = e, F = jn(f.value.sum());
        return p.value, [
          e.itemsStyle,
          {
            boxSizing: "content-box",
            width: jn(i.value),
            height: t ? "" : F,
            minHeight: t ? F : "",
            paddingTop: jn(e.paddingTop),
            paddingBottom: jn(e.paddingBottom)
          }
        ];
      }),
      visibleItemsStyle: O(() => (p.value, {
        transform: `translateY(${jn(f.value.sum(v.value))})`
      })),
      viewportItems: x,
      listElRef: u,
      itemsElRef: I(null),
      scrollTo: b,
      handleListResize: _,
      handleListScroll: P,
      handleListWheel: M,
      handleItemResize: S
    };
  },
  render() {
    const { itemResizable: e, keyField: n, keyToIndex: r, visibleItemsTag: o } = this;
    return h(Br, {
      onResize: this.handleListResize
    }, {
      default: () => {
        var i, a;
        return h("div", un(this.$attrs, {
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
                  const d = u[n], c = r.get(d), f = l != null ? h(ll, {
                    index: c,
                    item: u
                  }) : void 0, p = s != null ? h(ll, {
                    index: c,
                    item: u
                  }) : void 0, m = this.$slots.default({
                    item: u,
                    renderedCols: f,
                    renderedItemWithCols: p,
                    index: c
                  })[0];
                  return e ? h(Br, {
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
}), Ht = "v-hidden", Zf = tn("[v-hidden]", {
  display: "none!important"
}), sl = J({
  name: "Overflow",
  props: {
    getCounter: Function,
    getTail: Function,
    updateCounter: Function,
    onUpdateCount: Function,
    onUpdateOverflow: Function
  },
  setup(e, { slots: n }) {
    const r = I(null), o = I(null);
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
      let x = v ? v.offsetWidth : 0, b = !1;
      const g = s.children.length - (n.tail ? 1 : 0);
      for (let A = 0; A < g - 1; ++A) {
        if (A < 0)
          continue;
        const y = f[A];
        if (b) {
          y.hasAttribute(Ht) || y.setAttribute(Ht, "");
          continue;
        } else y.hasAttribute(Ht) && y.removeAttribute(Ht);
        const S = y.offsetWidth;
        if (x += S, m[A] = S, x > p) {
          const { updateCounter: T } = e;
          for (let C = A; C >= 0; --C) {
            const P = g - 1 - C;
            T !== void 0 ? T(P) : c.textContent = `${P}`;
            const M = c.offsetWidth;
            if (x -= m[C], x + M <= p || C === 0) {
              b = !0, A = C - 1, v && (A === -1 ? (v.style.maxWidth = `${p - M}px`, v.style.boxSizing = "border-box") : v.style.maxWidth = "");
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
    const a = Pn();
    return Zf.mount({
      id: "vueuc/overflow",
      head: !0,
      anchorMetaName: ta,
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
    return Ze(() => this.sync({
      showAllItemsBeforeCalculate: !1
    })), h("div", {
      class: "v-overflow",
      ref: "selfRef"
    }, [
      Un(e, "default"),
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
function Vs(e) {
  return e instanceof HTMLElement;
}
function qs(e) {
  for (let n = 0; n < e.childNodes.length; n++) {
    const r = e.childNodes[n];
    if (Vs(r) && (Us(r) || qs(r)))
      return !0;
  }
  return !1;
}
function Ks(e) {
  for (let n = e.childNodes.length - 1; n >= 0; n--) {
    const r = e.childNodes[n];
    if (Vs(r) && (Us(r) || Ks(r)))
      return !0;
  }
  return !1;
}
function Us(e) {
  if (!Jf(e))
    return !1;
  try {
    e.focus({ preventScroll: !0 });
  } catch {
  }
  return document.activeElement === e;
}
function Jf(e) {
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
let ir = [];
const Gs = J({
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
    const n = on(), r = I(null), o = I(null);
    let i = !1, a = !1;
    const l = typeof document > "u" ? null : document.activeElement;
    function s() {
      return ir[ir.length - 1] === n;
    }
    function u(b) {
      var g;
      b.code === "Escape" && s() && ((g = e.onEsc) === null || g === void 0 || g.call(e, b));
    }
    Qe(() => {
      ke(() => e.active, (b) => {
        b ? (f(), Le("keydown", document, u)) : (De("keydown", document, u), i && p());
      }, {
        immediate: !0
      });
    }), Xe(() => {
      De("keydown", document, u), i && p();
    });
    function d(b) {
      if (!a && s()) {
        const g = c();
        if (g === null || g.contains(Xn(b)))
          return;
        m("first");
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
    function f() {
      var b;
      if (!e.disabled) {
        if (ir.push(n), e.autoFocus) {
          const { initialFocusTo: g } = e;
          g === void 0 ? m("first") : (b = Ua(g)) === null || b === void 0 || b.focus({ preventScroll: !0 });
        }
        i = !0, document.addEventListener("focus", d, !0);
      }
    }
    function p() {
      var b;
      if (e.disabled || (document.removeEventListener("focus", d, !0), ir = ir.filter((w) => w !== n), s()))
        return;
      const { finalFocusTo: g } = e;
      g !== void 0 ? (b = Ua(g)) === null || b === void 0 || b.focus({ preventScroll: !0 }) : e.returnFocusOnDeactivated && l instanceof HTMLElement && (a = !0, l.focus({ preventScroll: !0 }), a = !1);
    }
    function m(b) {
      if (s() && e.active) {
        const g = r.value, w = o.value;
        if (g !== null && w !== null) {
          const A = c();
          if (A == null || A === w) {
            a = !0, g.focus({ preventScroll: !0 }), a = !1;
            return;
          }
          a = !0;
          const y = b === "first" ? qs(A) : Ks(A);
          a = !1, y || (a = !0, g.focus({ preventScroll: !0 }), a = !1);
        }
      }
    }
    function v(b) {
      if (a)
        return;
      const g = c();
      g !== null && (b.relatedTarget !== null && g.contains(b.relatedTarget) ? m("last") : m("first"));
    }
    function x(b) {
      a || (b.relatedTarget !== null && b.relatedTarget === r.value ? m("last") : m("first"));
    }
    return {
      focusableStartRef: r,
      focusableEndRef: o,
      focusableStyle: "position: absolute; height: 0; width: 0;",
      handleStartFocus: v,
      handleEndFocus: x
    };
  },
  render() {
    const { default: e } = this.$slots;
    if (e === void 0)
      return null;
    if (this.disabled)
      return e();
    const { active: n, focusableStyle: r } = this;
    return h(Je, null, [
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
function Xs(e, n) {
  n && (Qe(() => {
    const {
      value: r
    } = e;
    r && mo.registerHandler(r, n);
  }), Xe(() => {
    const {
      value: r
    } = e;
    r && mo.unregisterHandler(r);
  }));
}
let Nn = 0, ul = "", dl = "", cl = "", fl = "";
const hl = I("0px");
function Qf(e) {
  if (typeof document > "u") return;
  const n = document.documentElement;
  let r, o = !1;
  const i = () => {
    n.style.marginRight = ul, n.style.overflow = dl, n.style.overflowX = cl, n.style.overflowY = fl, hl.value = "0px";
  };
  Qe(() => {
    r = ke(e, (a) => {
      if (a) {
        if (!Nn) {
          const l = window.innerWidth - n.offsetWidth;
          l > 0 && (ul = n.style.marginRight, n.style.marginRight = `${l}px`, hl.value = `${l}px`), dl = n.style.overflow, cl = n.style.overflowX, fl = n.style.overflowY, n.style.overflow = "hidden", n.style.overflowX = "hidden", n.style.overflowY = "hidden";
        }
        o = !0, Nn++;
      } else
        Nn--, Nn || i(), o = !1;
    }, {
      immediate: !0
    });
  }), Xe(() => {
    r == null || r(), o && (Nn--, Nn || i(), o = !1);
  });
}
const oa = I(!1);
function vl() {
  oa.value = !0;
}
function pl() {
  oa.value = !1;
}
let ar = 0;
function eh() {
  return er && (Fn(() => {
    ar || (window.addEventListener("compositionstart", vl), window.addEventListener("compositionend", pl)), ar++;
  }), Xe(() => {
    ar <= 1 ? (window.removeEventListener("compositionstart", vl), window.removeEventListener("compositionend", pl), ar = 0) : ar--;
  })), oa;
}
function th(e) {
  const n = {
    isDeactivated: !1
  };
  let r = !1;
  return ss(() => {
    if (n.isDeactivated = !1, !r) {
      r = !0;
      return;
    }
    e();
  }), us(() => {
    n.isDeactivated = !0, r || (r = !0);
  }), n;
}
const Fi = "n-form-item";
function ia(e, {
  defaultSize: n = "medium",
  mergedSize: r,
  mergedDisabled: o
} = {}) {
  const i = fe(Fi, null);
  xe(Fi, null);
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
  return Xe(() => {
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
var Ys = typeof global == "object" && global && global.Object === Object && global, nh = typeof self == "object" && self && self.Object === Object && self, Rt = Ys || nh || Function("return this")(), ln = Rt.Symbol, Zs = Object.prototype, rh = Zs.hasOwnProperty, oh = Zs.toString, lr = ln ? ln.toStringTag : void 0;
function ih(e) {
  var n = rh.call(e, lr), r = e[lr];
  try {
    e[lr] = void 0;
    var o = !0;
  } catch {
  }
  var i = oh.call(e);
  return o && (n ? e[lr] = r : delete e[lr]), i;
}
var ah = Object.prototype, lh = ah.toString;
function sh(e) {
  return lh.call(e);
}
var uh = "[object Null]", dh = "[object Undefined]", gl = ln ? ln.toStringTag : void 0;
function $n(e) {
  return e == null ? e === void 0 ? dh : uh : gl && gl in Object(e) ? ih(e) : sh(e);
}
function sn(e) {
  return e != null && typeof e == "object";
}
var ch = "[object Symbol]";
function aa(e) {
  return typeof e == "symbol" || sn(e) && $n(e) == ch;
}
function Js(e, n) {
  for (var r = -1, o = e == null ? 0 : e.length, i = Array(o); ++r < o; )
    i[r] = n(e[r], r, e);
  return i;
}
var Ct = Array.isArray, fh = 1 / 0, xl = ln ? ln.prototype : void 0, ml = xl ? xl.toString : void 0;
function Qs(e) {
  if (typeof e == "string")
    return e;
  if (Ct(e))
    return Js(e, Qs) + "";
  if (aa(e))
    return ml ? ml.call(e) : "";
  var n = e + "";
  return n == "0" && 1 / e == -fh ? "-0" : n;
}
function cn(e) {
  var n = typeof e;
  return e != null && (n == "object" || n == "function");
}
function la(e) {
  return e;
}
var hh = "[object AsyncFunction]", vh = "[object Function]", ph = "[object GeneratorFunction]", gh = "[object Proxy]";
function sa(e) {
  if (!cn(e))
    return !1;
  var n = $n(e);
  return n == vh || n == ph || n == hh || n == gh;
}
var ii = Rt["__core-js_shared__"], bl = function() {
  var e = /[^.]+$/.exec(ii && ii.keys && ii.keys.IE_PROTO || "");
  return e ? "Symbol(src)_1." + e : "";
}();
function xh(e) {
  return !!bl && bl in e;
}
var mh = Function.prototype, bh = mh.toString;
function Dn(e) {
  if (e != null) {
    try {
      return bh.call(e);
    } catch {
    }
    try {
      return e + "";
    } catch {
    }
  }
  return "";
}
var Ch = /[\\^$.*+?()[\]{}|]/g, yh = /^\[object .+?Constructor\]$/, wh = Function.prototype, Bh = Object.prototype, Sh = wh.toString, Ah = Bh.hasOwnProperty, Fh = RegExp(
  "^" + Sh.call(Ah).replace(Ch, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function Ph(e) {
  if (!cn(e) || xh(e))
    return !1;
  var n = sa(e) ? Fh : yh;
  return n.test(Dn(e));
}
function $h(e, n) {
  return e == null ? void 0 : e[n];
}
function En(e, n) {
  var r = $h(e, n);
  return Ph(r) ? r : void 0;
}
var Pi = En(Rt, "WeakMap"), Cl = Object.create, Dh = /* @__PURE__ */ function() {
  function e() {
  }
  return function(n) {
    if (!cn(n))
      return {};
    if (Cl)
      return Cl(n);
    e.prototype = n;
    var r = new e();
    return e.prototype = void 0, r;
  };
}();
function Eh(e, n, r) {
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
function zh(e, n) {
  var r = -1, o = e.length;
  for (n || (n = Array(o)); ++r < o; )
    n[r] = e[r];
  return n;
}
var kh = 800, Th = 16, Rh = Date.now;
function Oh(e) {
  var n = 0, r = 0;
  return function() {
    var o = Rh(), i = Th - (o - r);
    if (r = o, i > 0) {
      if (++n >= kh)
        return arguments[0];
    } else
      n = 0;
    return e.apply(void 0, arguments);
  };
}
function Mh(e) {
  return function() {
    return e;
  };
}
var bo = function() {
  try {
    var e = En(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {
  }
}(), Ih = bo ? function(e, n) {
  return bo(e, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Mh(n),
    writable: !0
  });
} : la, _h = Oh(Ih), Lh = 9007199254740991, Nh = /^(?:0|[1-9]\d*)$/;
function ua(e, n) {
  var r = typeof e;
  return n = n ?? Lh, !!n && (r == "number" || r != "symbol" && Nh.test(e)) && e > -1 && e % 1 == 0 && e < n;
}
function da(e, n, r) {
  n == "__proto__" && bo ? bo(e, n, {
    configurable: !0,
    enumerable: !0,
    value: r,
    writable: !0
  }) : e[n] = r;
}
function Mr(e, n) {
  return e === n || e !== e && n !== n;
}
var Hh = Object.prototype, jh = Hh.hasOwnProperty;
function Wh(e, n, r) {
  var o = e[n];
  (!(jh.call(e, n) && Mr(o, r)) || r === void 0 && !(n in e)) && da(e, n, r);
}
function Vh(e, n, r, o) {
  var i = !r;
  r || (r = {});
  for (var a = -1, l = n.length; ++a < l; ) {
    var s = n[a], u = void 0;
    u === void 0 && (u = e[s]), i ? da(r, s, u) : Wh(r, s, u);
  }
  return r;
}
var yl = Math.max;
function qh(e, n, r) {
  return n = yl(n === void 0 ? e.length - 1 : n, 0), function() {
    for (var o = arguments, i = -1, a = yl(o.length - n, 0), l = Array(a); ++i < a; )
      l[i] = o[n + i];
    i = -1;
    for (var s = Array(n + 1); ++i < n; )
      s[i] = o[i];
    return s[n] = r(l), Eh(e, this, s);
  };
}
function Kh(e, n) {
  return _h(qh(e, n, la), e + "");
}
var Uh = 9007199254740991;
function ca(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= Uh;
}
function nr(e) {
  return e != null && ca(e.length) && !sa(e);
}
function Gh(e, n, r) {
  if (!cn(r))
    return !1;
  var o = typeof n;
  return (o == "number" ? nr(r) && ua(n, r.length) : o == "string" && n in r) ? Mr(r[n], e) : !1;
}
function Xh(e) {
  return Kh(function(n, r) {
    var o = -1, i = r.length, a = i > 1 ? r[i - 1] : void 0, l = i > 2 ? r[2] : void 0;
    for (a = e.length > 3 && typeof a == "function" ? (i--, a) : void 0, l && Gh(r[0], r[1], l) && (a = i < 3 ? void 0 : a, i = 1), n = Object(n); ++o < i; ) {
      var s = r[o];
      s && e(n, s, o, a);
    }
    return n;
  });
}
var Yh = Object.prototype;
function fa(e) {
  var n = e && e.constructor, r = typeof n == "function" && n.prototype || Yh;
  return e === r;
}
function Zh(e, n) {
  for (var r = -1, o = Array(e); ++r < e; )
    o[r] = n(r);
  return o;
}
var Jh = "[object Arguments]";
function wl(e) {
  return sn(e) && $n(e) == Jh;
}
var eu = Object.prototype, Qh = eu.hasOwnProperty, e0 = eu.propertyIsEnumerable, Co = wl(/* @__PURE__ */ function() {
  return arguments;
}()) ? wl : function(e) {
  return sn(e) && Qh.call(e, "callee") && !e0.call(e, "callee");
};
function t0() {
  return !1;
}
var tu = typeof exports == "object" && exports && !exports.nodeType && exports, Bl = tu && typeof module == "object" && module && !module.nodeType && module, n0 = Bl && Bl.exports === tu, Sl = n0 ? Rt.Buffer : void 0, r0 = Sl ? Sl.isBuffer : void 0, yo = r0 || t0, o0 = "[object Arguments]", i0 = "[object Array]", a0 = "[object Boolean]", l0 = "[object Date]", s0 = "[object Error]", u0 = "[object Function]", d0 = "[object Map]", c0 = "[object Number]", f0 = "[object Object]", h0 = "[object RegExp]", v0 = "[object Set]", p0 = "[object String]", g0 = "[object WeakMap]", x0 = "[object ArrayBuffer]", m0 = "[object DataView]", b0 = "[object Float32Array]", C0 = "[object Float64Array]", y0 = "[object Int8Array]", w0 = "[object Int16Array]", B0 = "[object Int32Array]", S0 = "[object Uint8Array]", A0 = "[object Uint8ClampedArray]", F0 = "[object Uint16Array]", P0 = "[object Uint32Array]", Oe = {};
Oe[b0] = Oe[C0] = Oe[y0] = Oe[w0] = Oe[B0] = Oe[S0] = Oe[A0] = Oe[F0] = Oe[P0] = !0;
Oe[o0] = Oe[i0] = Oe[x0] = Oe[a0] = Oe[m0] = Oe[l0] = Oe[s0] = Oe[u0] = Oe[d0] = Oe[c0] = Oe[f0] = Oe[h0] = Oe[v0] = Oe[p0] = Oe[g0] = !1;
function $0(e) {
  return sn(e) && ca(e.length) && !!Oe[$n(e)];
}
function D0(e) {
  return function(n) {
    return e(n);
  };
}
var nu = typeof exports == "object" && exports && !exports.nodeType && exports, pr = nu && typeof module == "object" && module && !module.nodeType && module, E0 = pr && pr.exports === nu, ai = E0 && Ys.process, Al = function() {
  try {
    var e = pr && pr.require && pr.require("util").types;
    return e || ai && ai.binding && ai.binding("util");
  } catch {
  }
}(), Fl = Al && Al.isTypedArray, ha = Fl ? D0(Fl) : $0, z0 = Object.prototype, k0 = z0.hasOwnProperty;
function ru(e, n) {
  var r = Ct(e), o = !r && Co(e), i = !r && !o && yo(e), a = !r && !o && !i && ha(e), l = r || o || i || a, s = l ? Zh(e.length, String) : [], u = s.length;
  for (var d in e)
    (n || k0.call(e, d)) && !(l && // Safari 9 has enumerable `arguments.length` in strict mode.
    (d == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    i && (d == "offset" || d == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    a && (d == "buffer" || d == "byteLength" || d == "byteOffset") || // Skip index properties.
    ua(d, u))) && s.push(d);
  return s;
}
function ou(e, n) {
  return function(r) {
    return e(n(r));
  };
}
var T0 = ou(Object.keys, Object), R0 = Object.prototype, O0 = R0.hasOwnProperty;
function M0(e) {
  if (!fa(e))
    return T0(e);
  var n = [];
  for (var r in Object(e))
    O0.call(e, r) && r != "constructor" && n.push(r);
  return n;
}
function va(e) {
  return nr(e) ? ru(e) : M0(e);
}
function I0(e) {
  var n = [];
  if (e != null)
    for (var r in Object(e))
      n.push(r);
  return n;
}
var _0 = Object.prototype, L0 = _0.hasOwnProperty;
function N0(e) {
  if (!cn(e))
    return I0(e);
  var n = fa(e), r = [];
  for (var o in e)
    o == "constructor" && (n || !L0.call(e, o)) || r.push(o);
  return r;
}
function iu(e) {
  return nr(e) ? ru(e, !0) : N0(e);
}
var H0 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/, j0 = /^\w*$/;
function pa(e, n) {
  if (Ct(e))
    return !1;
  var r = typeof e;
  return r == "number" || r == "symbol" || r == "boolean" || e == null || aa(e) ? !0 : j0.test(e) || !H0.test(e) || n != null && e in Object(n);
}
var Sr = En(Object, "create");
function W0() {
  this.__data__ = Sr ? Sr(null) : {}, this.size = 0;
}
function V0(e) {
  var n = this.has(e) && delete this.__data__[e];
  return this.size -= n ? 1 : 0, n;
}
var q0 = "__lodash_hash_undefined__", K0 = Object.prototype, U0 = K0.hasOwnProperty;
function G0(e) {
  var n = this.__data__;
  if (Sr) {
    var r = n[e];
    return r === q0 ? void 0 : r;
  }
  return U0.call(n, e) ? n[e] : void 0;
}
var X0 = Object.prototype, Y0 = X0.hasOwnProperty;
function Z0(e) {
  var n = this.__data__;
  return Sr ? n[e] !== void 0 : Y0.call(n, e);
}
var J0 = "__lodash_hash_undefined__";
function Q0(e, n) {
  var r = this.__data__;
  return this.size += this.has(e) ? 0 : 1, r[e] = Sr && n === void 0 ? J0 : n, this;
}
function An(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var o = e[n];
    this.set(o[0], o[1]);
  }
}
An.prototype.clear = W0;
An.prototype.delete = V0;
An.prototype.get = G0;
An.prototype.has = Z0;
An.prototype.set = Q0;
function ev() {
  this.__data__ = [], this.size = 0;
}
function ko(e, n) {
  for (var r = e.length; r--; )
    if (Mr(e[r][0], n))
      return r;
  return -1;
}
var tv = Array.prototype, nv = tv.splice;
function rv(e) {
  var n = this.__data__, r = ko(n, e);
  if (r < 0)
    return !1;
  var o = n.length - 1;
  return r == o ? n.pop() : nv.call(n, r, 1), --this.size, !0;
}
function ov(e) {
  var n = this.__data__, r = ko(n, e);
  return r < 0 ? void 0 : n[r][1];
}
function iv(e) {
  return ko(this.__data__, e) > -1;
}
function av(e, n) {
  var r = this.__data__, o = ko(r, e);
  return o < 0 ? (++this.size, r.push([e, n])) : r[o][1] = n, this;
}
function Ut(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var o = e[n];
    this.set(o[0], o[1]);
  }
}
Ut.prototype.clear = ev;
Ut.prototype.delete = rv;
Ut.prototype.get = ov;
Ut.prototype.has = iv;
Ut.prototype.set = av;
var Ar = En(Rt, "Map");
function lv() {
  this.size = 0, this.__data__ = {
    hash: new An(),
    map: new (Ar || Ut)(),
    string: new An()
  };
}
function sv(e) {
  var n = typeof e;
  return n == "string" || n == "number" || n == "symbol" || n == "boolean" ? e !== "__proto__" : e === null;
}
function To(e, n) {
  var r = e.__data__;
  return sv(n) ? r[typeof n == "string" ? "string" : "hash"] : r.map;
}
function uv(e) {
  var n = To(this, e).delete(e);
  return this.size -= n ? 1 : 0, n;
}
function dv(e) {
  return To(this, e).get(e);
}
function cv(e) {
  return To(this, e).has(e);
}
function fv(e, n) {
  var r = To(this, e), o = r.size;
  return r.set(e, n), this.size += r.size == o ? 0 : 1, this;
}
function Gt(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.clear(); ++n < r; ) {
    var o = e[n];
    this.set(o[0], o[1]);
  }
}
Gt.prototype.clear = lv;
Gt.prototype.delete = uv;
Gt.prototype.get = dv;
Gt.prototype.has = cv;
Gt.prototype.set = fv;
var hv = "Expected a function";
function ga(e, n) {
  if (typeof e != "function" || n != null && typeof n != "function")
    throw new TypeError(hv);
  var r = function() {
    var o = arguments, i = n ? n.apply(this, o) : o[0], a = r.cache;
    if (a.has(i))
      return a.get(i);
    var l = e.apply(this, o);
    return r.cache = a.set(i, l) || a, l;
  };
  return r.cache = new (ga.Cache || Gt)(), r;
}
ga.Cache = Gt;
var vv = 500;
function pv(e) {
  var n = ga(e, function(o) {
    return r.size === vv && r.clear(), o;
  }), r = n.cache;
  return n;
}
var gv = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g, xv = /\\(\\)?/g, mv = pv(function(e) {
  var n = [];
  return e.charCodeAt(0) === 46 && n.push(""), e.replace(gv, function(r, o, i, a) {
    n.push(i ? a.replace(xv, "$1") : o || r);
  }), n;
});
function au(e) {
  return e == null ? "" : Qs(e);
}
function lu(e, n) {
  return Ct(e) ? e : pa(e, n) ? [e] : mv(au(e));
}
var bv = 1 / 0;
function Ro(e) {
  if (typeof e == "string" || aa(e))
    return e;
  var n = e + "";
  return n == "0" && 1 / e == -bv ? "-0" : n;
}
function su(e, n) {
  n = lu(n, e);
  for (var r = 0, o = n.length; e != null && r < o; )
    e = e[Ro(n[r++])];
  return r && r == o ? e : void 0;
}
function xa(e, n, r) {
  var o = e == null ? void 0 : su(e, n);
  return o === void 0 ? r : o;
}
function Cv(e, n) {
  for (var r = -1, o = n.length, i = e.length; ++r < o; )
    e[i + r] = n[r];
  return e;
}
var uu = ou(Object.getPrototypeOf, Object), yv = "[object Object]", wv = Function.prototype, Bv = Object.prototype, du = wv.toString, Sv = Bv.hasOwnProperty, Av = du.call(Object);
function Fv(e) {
  if (!sn(e) || $n(e) != yv)
    return !1;
  var n = uu(e);
  if (n === null)
    return !0;
  var r = Sv.call(n, "constructor") && n.constructor;
  return typeof r == "function" && r instanceof r && du.call(r) == Av;
}
function Pv(e, n, r) {
  var o = -1, i = e.length;
  n < 0 && (n = -n > i ? 0 : i + n), r = r > i ? i : r, r < 0 && (r += i), i = n > r ? 0 : r - n >>> 0, n >>>= 0;
  for (var a = Array(i); ++o < i; )
    a[o] = e[o + n];
  return a;
}
function $v(e, n, r) {
  var o = e.length;
  return r = r === void 0 ? o : r, !n && r >= o ? e : Pv(e, n, r);
}
var Dv = "\\ud800-\\udfff", Ev = "\\u0300-\\u036f", zv = "\\ufe20-\\ufe2f", kv = "\\u20d0-\\u20ff", Tv = Ev + zv + kv, Rv = "\\ufe0e\\ufe0f", Ov = "\\u200d", Mv = RegExp("[" + Ov + Dv + Tv + Rv + "]");
function cu(e) {
  return Mv.test(e);
}
function Iv(e) {
  return e.split("");
}
var fu = "\\ud800-\\udfff", _v = "\\u0300-\\u036f", Lv = "\\ufe20-\\ufe2f", Nv = "\\u20d0-\\u20ff", Hv = _v + Lv + Nv, jv = "\\ufe0e\\ufe0f", Wv = "[" + fu + "]", $i = "[" + Hv + "]", Di = "\\ud83c[\\udffb-\\udfff]", Vv = "(?:" + $i + "|" + Di + ")", hu = "[^" + fu + "]", vu = "(?:\\ud83c[\\udde6-\\uddff]){2}", pu = "[\\ud800-\\udbff][\\udc00-\\udfff]", qv = "\\u200d", gu = Vv + "?", xu = "[" + jv + "]?", Kv = "(?:" + qv + "(?:" + [hu, vu, pu].join("|") + ")" + xu + gu + ")*", Uv = xu + gu + Kv, Gv = "(?:" + [hu + $i + "?", $i, vu, pu, Wv].join("|") + ")", Xv = RegExp(Di + "(?=" + Di + ")|" + Gv + Uv, "g");
function Yv(e) {
  return e.match(Xv) || [];
}
function Zv(e) {
  return cu(e) ? Yv(e) : Iv(e);
}
function Jv(e) {
  return function(n) {
    n = au(n);
    var r = cu(n) ? Zv(n) : void 0, o = r ? r[0] : n.charAt(0), i = r ? $v(r, 1).join("") : n.slice(1);
    return o[e]() + i;
  };
}
var Qv = Jv("toUpperCase");
function ep() {
  this.__data__ = new Ut(), this.size = 0;
}
function tp(e) {
  var n = this.__data__, r = n.delete(e);
  return this.size = n.size, r;
}
function np(e) {
  return this.__data__.get(e);
}
function rp(e) {
  return this.__data__.has(e);
}
var op = 200;
function ip(e, n) {
  var r = this.__data__;
  if (r instanceof Ut) {
    var o = r.__data__;
    if (!Ar || o.length < op - 1)
      return o.push([e, n]), this.size = ++r.size, this;
    r = this.__data__ = new Gt(o);
  }
  return r.set(e, n), this.size = r.size, this;
}
function zt(e) {
  var n = this.__data__ = new Ut(e);
  this.size = n.size;
}
zt.prototype.clear = ep;
zt.prototype.delete = tp;
zt.prototype.get = np;
zt.prototype.has = rp;
zt.prototype.set = ip;
var mu = typeof exports == "object" && exports && !exports.nodeType && exports, Pl = mu && typeof module == "object" && module && !module.nodeType && module, ap = Pl && Pl.exports === mu, $l = ap ? Rt.Buffer : void 0;
$l && $l.allocUnsafe;
function lp(e, n) {
  return e.slice();
}
function sp(e, n) {
  for (var r = -1, o = e == null ? 0 : e.length, i = 0, a = []; ++r < o; ) {
    var l = e[r];
    n(l, r, e) && (a[i++] = l);
  }
  return a;
}
function up() {
  return [];
}
var dp = Object.prototype, cp = dp.propertyIsEnumerable, Dl = Object.getOwnPropertySymbols, fp = Dl ? function(e) {
  return e == null ? [] : (e = Object(e), sp(Dl(e), function(n) {
    return cp.call(e, n);
  }));
} : up;
function hp(e, n, r) {
  var o = n(e);
  return Ct(e) ? o : Cv(o, r(e));
}
function El(e) {
  return hp(e, va, fp);
}
var Ei = En(Rt, "DataView"), zi = En(Rt, "Promise"), ki = En(Rt, "Set"), zl = "[object Map]", vp = "[object Object]", kl = "[object Promise]", Tl = "[object Set]", Rl = "[object WeakMap]", Ol = "[object DataView]", pp = Dn(Ei), gp = Dn(Ar), xp = Dn(zi), mp = Dn(ki), bp = Dn(Pi), en = $n;
(Ei && en(new Ei(new ArrayBuffer(1))) != Ol || Ar && en(new Ar()) != zl || zi && en(zi.resolve()) != kl || ki && en(new ki()) != Tl || Pi && en(new Pi()) != Rl) && (en = function(e) {
  var n = $n(e), r = n == vp ? e.constructor : void 0, o = r ? Dn(r) : "";
  if (o)
    switch (o) {
      case pp:
        return Ol;
      case gp:
        return zl;
      case xp:
        return kl;
      case mp:
        return Tl;
      case bp:
        return Rl;
    }
  return n;
});
var wo = Rt.Uint8Array;
function Cp(e) {
  var n = new e.constructor(e.byteLength);
  return new wo(n).set(new wo(e)), n;
}
function yp(e, n) {
  var r = Cp(e.buffer);
  return new e.constructor(r, e.byteOffset, e.length);
}
function wp(e) {
  return typeof e.constructor == "function" && !fa(e) ? Dh(uu(e)) : {};
}
var Bp = "__lodash_hash_undefined__";
function Sp(e) {
  return this.__data__.set(e, Bp), this;
}
function Ap(e) {
  return this.__data__.has(e);
}
function Bo(e) {
  var n = -1, r = e == null ? 0 : e.length;
  for (this.__data__ = new Gt(); ++n < r; )
    this.add(e[n]);
}
Bo.prototype.add = Bo.prototype.push = Sp;
Bo.prototype.has = Ap;
function Fp(e, n) {
  for (var r = -1, o = e == null ? 0 : e.length; ++r < o; )
    if (n(e[r], r, e))
      return !0;
  return !1;
}
function Pp(e, n) {
  return e.has(n);
}
var $p = 1, Dp = 2;
function bu(e, n, r, o, i, a) {
  var l = r & $p, s = e.length, u = n.length;
  if (s != u && !(l && u > s))
    return !1;
  var d = a.get(e), c = a.get(n);
  if (d && c)
    return d == n && c == e;
  var f = -1, p = !0, m = r & Dp ? new Bo() : void 0;
  for (a.set(e, n), a.set(n, e); ++f < s; ) {
    var v = e[f], x = n[f];
    if (o)
      var b = l ? o(x, v, f, n, e, a) : o(v, x, f, e, n, a);
    if (b !== void 0) {
      if (b)
        continue;
      p = !1;
      break;
    }
    if (m) {
      if (!Fp(n, function(g, w) {
        if (!Pp(m, w) && (v === g || i(v, g, r, o, a)))
          return m.push(w);
      })) {
        p = !1;
        break;
      }
    } else if (!(v === x || i(v, x, r, o, a))) {
      p = !1;
      break;
    }
  }
  return a.delete(e), a.delete(n), p;
}
function Ep(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(o, i) {
    r[++n] = [i, o];
  }), r;
}
function zp(e) {
  var n = -1, r = Array(e.size);
  return e.forEach(function(o) {
    r[++n] = o;
  }), r;
}
var kp = 1, Tp = 2, Rp = "[object Boolean]", Op = "[object Date]", Mp = "[object Error]", Ip = "[object Map]", _p = "[object Number]", Lp = "[object RegExp]", Np = "[object Set]", Hp = "[object String]", jp = "[object Symbol]", Wp = "[object ArrayBuffer]", Vp = "[object DataView]", Ml = ln ? ln.prototype : void 0, li = Ml ? Ml.valueOf : void 0;
function qp(e, n, r, o, i, a, l) {
  switch (r) {
    case Vp:
      if (e.byteLength != n.byteLength || e.byteOffset != n.byteOffset)
        return !1;
      e = e.buffer, n = n.buffer;
    case Wp:
      return !(e.byteLength != n.byteLength || !a(new wo(e), new wo(n)));
    case Rp:
    case Op:
    case _p:
      return Mr(+e, +n);
    case Mp:
      return e.name == n.name && e.message == n.message;
    case Lp:
    case Hp:
      return e == n + "";
    case Ip:
      var s = Ep;
    case Np:
      var u = o & kp;
      if (s || (s = zp), e.size != n.size && !u)
        return !1;
      var d = l.get(e);
      if (d)
        return d == n;
      o |= Tp, l.set(e, n);
      var c = bu(s(e), s(n), o, i, a, l);
      return l.delete(e), c;
    case jp:
      if (li)
        return li.call(e) == li.call(n);
  }
  return !1;
}
var Kp = 1, Up = Object.prototype, Gp = Up.hasOwnProperty;
function Xp(e, n, r, o, i, a) {
  var l = r & Kp, s = El(e), u = s.length, d = El(n), c = d.length;
  if (u != c && !l)
    return !1;
  for (var f = u; f--; ) {
    var p = s[f];
    if (!(l ? p in n : Gp.call(n, p)))
      return !1;
  }
  var m = a.get(e), v = a.get(n);
  if (m && v)
    return m == n && v == e;
  var x = !0;
  a.set(e, n), a.set(n, e);
  for (var b = l; ++f < u; ) {
    p = s[f];
    var g = e[p], w = n[p];
    if (o)
      var A = l ? o(w, g, p, n, e, a) : o(g, w, p, e, n, a);
    if (!(A === void 0 ? g === w || i(g, w, r, o, a) : A)) {
      x = !1;
      break;
    }
    b || (b = p == "constructor");
  }
  if (x && !b) {
    var y = e.constructor, S = n.constructor;
    y != S && "constructor" in e && "constructor" in n && !(typeof y == "function" && y instanceof y && typeof S == "function" && S instanceof S) && (x = !1);
  }
  return a.delete(e), a.delete(n), x;
}
var Yp = 1, Il = "[object Arguments]", _l = "[object Array]", to = "[object Object]", Zp = Object.prototype, Ll = Zp.hasOwnProperty;
function Jp(e, n, r, o, i, a) {
  var l = Ct(e), s = Ct(n), u = l ? _l : en(e), d = s ? _l : en(n);
  u = u == Il ? to : u, d = d == Il ? to : d;
  var c = u == to, f = d == to, p = u == d;
  if (p && yo(e)) {
    if (!yo(n))
      return !1;
    l = !0, c = !1;
  }
  if (p && !c)
    return a || (a = new zt()), l || ha(e) ? bu(e, n, r, o, i, a) : qp(e, n, u, r, o, i, a);
  if (!(r & Yp)) {
    var m = c && Ll.call(e, "__wrapped__"), v = f && Ll.call(n, "__wrapped__");
    if (m || v) {
      var x = m ? e.value() : e, b = v ? n.value() : n;
      return a || (a = new zt()), i(x, b, r, o, a);
    }
  }
  return p ? (a || (a = new zt()), Xp(e, n, r, o, i, a)) : !1;
}
function ma(e, n, r, o, i) {
  return e === n ? !0 : e == null || n == null || !sn(e) && !sn(n) ? e !== e && n !== n : Jp(e, n, r, o, ma, i);
}
var Qp = 1, eg = 2;
function tg(e, n, r, o) {
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
      if (!(f === void 0 ? ma(d, u, Qp | eg, o, c) : f))
        return !1;
    }
  }
  return !0;
}
function Cu(e) {
  return e === e && !cn(e);
}
function ng(e) {
  for (var n = va(e), r = n.length; r--; ) {
    var o = n[r], i = e[o];
    n[r] = [o, i, Cu(i)];
  }
  return n;
}
function yu(e, n) {
  return function(r) {
    return r == null ? !1 : r[e] === n && (n !== void 0 || e in Object(r));
  };
}
function rg(e) {
  var n = ng(e);
  return n.length == 1 && n[0][2] ? yu(n[0][0], n[0][1]) : function(r) {
    return r === e || tg(r, e, n);
  };
}
function og(e, n) {
  return e != null && n in Object(e);
}
function ig(e, n, r) {
  n = lu(n, e);
  for (var o = -1, i = n.length, a = !1; ++o < i; ) {
    var l = Ro(n[o]);
    if (!(a = e != null && r(e, l)))
      break;
    e = e[l];
  }
  return a || ++o != i ? a : (i = e == null ? 0 : e.length, !!i && ca(i) && ua(l, i) && (Ct(e) || Co(e)));
}
function ag(e, n) {
  return e != null && ig(e, n, og);
}
var lg = 1, sg = 2;
function ug(e, n) {
  return pa(e) && Cu(n) ? yu(Ro(e), n) : function(r) {
    var o = xa(r, e);
    return o === void 0 && o === n ? ag(r, e) : ma(n, o, lg | sg);
  };
}
function dg(e) {
  return function(n) {
    return n == null ? void 0 : n[e];
  };
}
function cg(e) {
  return function(n) {
    return su(n, e);
  };
}
function fg(e) {
  return pa(e) ? dg(Ro(e)) : cg(e);
}
function hg(e) {
  return typeof e == "function" ? e : e == null ? la : typeof e == "object" ? Ct(e) ? ug(e[0], e[1]) : rg(e) : fg(e);
}
function vg(e) {
  return function(n, r, o) {
    for (var i = -1, a = Object(n), l = o(n), s = l.length; s--; ) {
      var u = l[++i];
      if (r(a[u], u, a) === !1)
        break;
    }
    return n;
  };
}
var wu = vg();
function pg(e, n) {
  return e && wu(e, n, va);
}
function gg(e, n) {
  return function(r, o) {
    if (r == null)
      return r;
    if (!nr(r))
      return e(r, o);
    for (var i = r.length, a = -1, l = Object(r); ++a < i && o(l[a], a, l) !== !1; )
      ;
    return r;
  };
}
var xg = gg(pg);
function Ti(e, n, r) {
  (r !== void 0 && !Mr(e[n], r) || r === void 0 && !(n in e)) && da(e, n, r);
}
function mg(e) {
  return sn(e) && nr(e);
}
function Ri(e, n) {
  if (!(n === "constructor" && typeof e[n] == "function") && n != "__proto__")
    return e[n];
}
function bg(e) {
  return Vh(e, iu(e));
}
function Cg(e, n, r, o, i, a, l) {
  var s = Ri(e, r), u = Ri(n, r), d = l.get(u);
  if (d) {
    Ti(e, r, d);
    return;
  }
  var c = a ? a(s, u, r + "", e, n, l) : void 0, f = c === void 0;
  if (f) {
    var p = Ct(u), m = !p && yo(u), v = !p && !m && ha(u);
    c = u, p || m || v ? Ct(s) ? c = s : mg(s) ? c = zh(s) : m ? (f = !1, c = lp(u)) : v ? (f = !1, c = yp(u)) : c = [] : Fv(u) || Co(u) ? (c = s, Co(s) ? c = bg(s) : (!cn(s) || sa(s)) && (c = wp(u))) : f = !1;
  }
  f && (l.set(u, c), i(c, u, o, a, l), l.delete(u)), Ti(e, r, c);
}
function Bu(e, n, r, o, i) {
  e !== n && wu(n, function(a, l) {
    if (i || (i = new zt()), cn(a))
      Cg(e, n, l, r, Bu, o, i);
    else {
      var s = o ? o(Ri(e, l), a, l + "", e, n, i) : void 0;
      s === void 0 && (s = a), Ti(e, l, s);
    }
  }, iu);
}
function yg(e, n) {
  var r = -1, o = nr(e) ? Array(e.length) : [];
  return xg(e, function(i, a, l) {
    o[++r] = n(i, a, l);
  }), o;
}
function wg(e, n) {
  var r = Ct(e) ? Js : yg;
  return r(e, hg(n));
}
var ur = Xh(function(e, n, r) {
  Bu(e, n, r);
});
const fn = {
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
  fontSize: Bg,
  fontFamily: Sg,
  lineHeight: Ag
} = fn, Su = D("body", `
 margin: 0;
 font-size: ${Bg};
 font-family: ${Sg};
 line-height: ${Ag};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [D("input", `
 font-family: inherit;
 font-size: inherit;
 `)]), Kt = "n-config-provider", Fr = "naive-ui-style";
function se(e, n, r, o, i, a) {
  const l = Pn(), s = fe(Kt, null);
  if (r) {
    const d = () => {
      const c = a == null ? void 0 : a.value;
      r.mount({
        id: c === void 0 ? n : c + n,
        head: !0,
        props: {
          bPrefix: c ? `.${c}-` : void 0
        },
        anchorMetaName: Fr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      }), s != null && s.preflightStyleDisabled || Su.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: Fr,
        ssr: l,
        parent: s == null ? void 0 : s.styleMountTarget
      });
    };
    l ? d() : Fn(d);
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
      common: x,
      peers: b
    } = m, {
      common: g = void 0,
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
    } = T, M = ur({}, c || w || g || o.common, S, C, x), _ = ur(
      // {}, executed every time, no need for empty obj
      (d = f || A || o.self) === null || d === void 0 ? void 0 : d(M),
      v,
      T,
      m
    );
    return {
      common: M,
      self: _,
      peers: ur({}, o.peers, y, p),
      peerOverrides: ur({}, v.peers, P, b)
    };
  });
}
se.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const Oi = "n";
function Ae(e = {}, n = {
  defaultBordered: !0
}) {
  const r = fe(Kt, null);
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
    mergedClsPrefixRef: r ? r.mergedClsPrefixRef : ec(Oi),
    namespaceRef: O(() => r == null ? void 0 : r.mergedNamespaceRef.value)
  };
}
const Fg = {
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
}, Pg = {
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
function qn(e) {
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
    const l = a[0], s = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth], u = Array.isArray(s) ? Dg(s, (f) => f.test(l)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      $g(s, (f) => f.test(l))
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
function $g(e, n) {
  for (const r in e)
    if (Object.prototype.hasOwnProperty.call(e, r) && n(e[r]))
      return r;
}
function Dg(e, n) {
  for (let r = 0; r < e.length; r++)
    if (n(e[r]))
      return r;
}
function Au(e) {
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
function Eg(e) {
  const n = Object.prototype.toString.call(e);
  return e instanceof Date || typeof e == "object" && n === "[object Date]" ? new e.constructor(+e) : typeof e == "number" || n === "[object Number]" || typeof e == "string" || n === "[object String]" ? new Date(e) : /* @__PURE__ */ new Date(NaN);
}
let zg = {};
function kg() {
  return zg;
}
function Nl(e, n) {
  var s, u, d, c;
  const r = kg(), o = (n == null ? void 0 : n.weekStartsOn) ?? ((u = (s = n == null ? void 0 : n.locale) == null ? void 0 : s.options) == null ? void 0 : u.weekStartsOn) ?? r.weekStartsOn ?? ((c = (d = r.locale) == null ? void 0 : d.options) == null ? void 0 : c.weekStartsOn) ?? 0, i = Eg(e), a = i.getDay(), l = (a < o ? 7 : 0) + a - o;
  return i.setDate(i.getDate() - l), i.setHours(0, 0, 0, 0), i;
}
function Tg(e, n, r) {
  const o = Nl(e, r), i = Nl(n, r);
  return +o == +i;
}
const Rg = {
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
}, Og = (e, n, r) => {
  let o;
  const i = Rg[e];
  return typeof i == "string" ? o = i : n === 1 ? o = i.one : o = i.other.replace("{{count}}", n.toString()), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? "in " + o : o + " ago" : o;
}, Mg = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Ig = (e, n, r, o) => Mg[e], _g = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, Lg = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Ng = {
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
}, Hg = {
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
}, jg = {
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
}, Wg = {
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
}, Vg = (e, n) => {
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
}, qg = {
  ordinalNumber: Vg,
  era: $t({
    values: _g,
    defaultWidth: "wide"
  }),
  quarter: $t({
    values: Lg,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: $t({
    values: Ng,
    defaultWidth: "wide"
  }),
  day: $t({
    values: Hg,
    defaultWidth: "wide"
  }),
  dayPeriod: $t({
    values: jg,
    defaultWidth: "wide",
    formattingValues: Wg,
    defaultFormattingWidth: "wide"
  })
}, Kg = /^(\d+)(th|st|nd|rd)?/i, Ug = /\d+/i, Gg = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Xg = {
  any: [/^b/i, /^(a|c)/i]
}, Yg = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Zg = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Jg = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Qg = {
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
}, ex = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, tx = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, nx = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, rx = {
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
}, ox = {
  ordinalNumber: Au({
    matchPattern: Kg,
    parsePattern: Ug,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Dt({
    matchPatterns: Gg,
    defaultMatchWidth: "wide",
    parsePatterns: Xg,
    defaultParseWidth: "any"
  }),
  quarter: Dt({
    matchPatterns: Yg,
    defaultMatchWidth: "wide",
    parsePatterns: Zg,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Dt({
    matchPatterns: Jg,
    defaultMatchWidth: "wide",
    parsePatterns: Qg,
    defaultParseWidth: "any"
  }),
  day: Dt({
    matchPatterns: ex,
    defaultMatchWidth: "wide",
    parsePatterns: tx,
    defaultParseWidth: "any"
  }),
  dayPeriod: Dt({
    matchPatterns: nx,
    defaultMatchWidth: "any",
    parsePatterns: rx,
    defaultParseWidth: "any"
  })
}, ix = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, ax = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, lx = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, sx = {
  date: qn({
    formats: ix,
    defaultWidth: "full"
  }),
  time: qn({
    formats: ax,
    defaultWidth: "full"
  }),
  dateTime: qn({
    formats: lx,
    defaultWidth: "full"
  })
}, ux = {
  code: "en-US",
  formatDistance: Og,
  formatLong: sx,
  formatRelative: Ig,
  localize: qg,
  match: ox,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, dx = {
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
}, cx = (e, n, r) => {
  let o;
  const i = dx[e];
  return typeof i == "string" ? o = i : n === 1 ? o = i.one : o = i.other.replace("{{count}}", String(n)), r != null && r.addSuffix ? r.comparison && r.comparison > 0 ? o + "内" : o + "前" : o;
}, fx = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, hx = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, vx = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, px = {
  date: qn({
    formats: fx,
    defaultWidth: "full"
  }),
  time: qn({
    formats: hx,
    defaultWidth: "full"
  }),
  dateTime: qn({
    formats: vx,
    defaultWidth: "full"
  })
};
function Hl(e, n, r) {
  const o = "eeee p";
  return Tg(e, n, r) ? o : e.getTime() > n.getTime() ? "'下个'" + o : "'上个'" + o;
}
const gx = {
  lastWeek: Hl,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: Hl,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, xx = (e, n, r, o) => {
  const i = gx[e];
  return typeof i == "function" ? i(n, r, o) : i;
}, mx = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, bx = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, Cx = {
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
}, yx = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, wx = {
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
}, Bx = {
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
}, Sx = (e, n) => {
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
}, Ax = {
  ordinalNumber: Sx,
  era: $t({
    values: mx,
    defaultWidth: "wide"
  }),
  quarter: $t({
    values: bx,
    defaultWidth: "wide",
    argumentCallback: (e) => e - 1
  }),
  month: $t({
    values: Cx,
    defaultWidth: "wide"
  }),
  day: $t({
    values: yx,
    defaultWidth: "wide"
  }),
  dayPeriod: $t({
    values: wx,
    defaultWidth: "wide",
    formattingValues: Bx,
    defaultFormattingWidth: "wide"
  })
}, Fx = /^(第\s*)?\d+(日|时|分|秒)?/i, Px = /\d+/i, $x = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, Dx = {
  any: [/^(前)/i, /^(公元)/i]
}, Ex = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, zx = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, kx = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, Tx = {
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
}, Rx = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, Ox = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, Mx = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, Ix = {
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
}, _x = {
  ordinalNumber: Au({
    matchPattern: Fx,
    parsePattern: Px,
    valueCallback: (e) => parseInt(e, 10)
  }),
  era: Dt({
    matchPatterns: $x,
    defaultMatchWidth: "wide",
    parsePatterns: Dx,
    defaultParseWidth: "any"
  }),
  quarter: Dt({
    matchPatterns: Ex,
    defaultMatchWidth: "wide",
    parsePatterns: zx,
    defaultParseWidth: "any",
    valueCallback: (e) => e + 1
  }),
  month: Dt({
    matchPatterns: kx,
    defaultMatchWidth: "wide",
    parsePatterns: Tx,
    defaultParseWidth: "any"
  }),
  day: Dt({
    matchPatterns: Rx,
    defaultMatchWidth: "wide",
    parsePatterns: Ox,
    defaultParseWidth: "any"
  }),
  dayPeriod: Dt({
    matchPatterns: Mx,
    defaultMatchWidth: "any",
    parsePatterns: Ix,
    defaultParseWidth: "any"
  })
}, Lx = {
  code: "zh-CN",
  formatDistance: cx,
  formatLong: px,
  formatRelative: xx,
  localize: Ax,
  match: _x,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Nx = {
  name: "zh-CN",
  locale: Lx
}, Hx = {
  name: "en-US",
  locale: ux
};
function Pr(e) {
  const {
    mergedLocaleRef: n,
    mergedDateLocaleRef: r
  } = fe(Kt, null) || {}, o = O(() => {
    var a, l;
    return (l = (a = n == null ? void 0 : n.value) === null || a === void 0 ? void 0 : a[e]) !== null && l !== void 0 ? l : Pg[e];
  });
  return {
    dateLocaleRef: O(() => {
      var a;
      return (a = r == null ? void 0 : r.value) !== null && a !== void 0 ? a : Hx;
    }),
    localeRef: o
  };
}
function zn(e, n, r) {
  if (!n) {
    process.env.NODE_ENV !== "production" && dn("use-style", "No style is specified.");
    return;
  }
  const o = Pn(), i = fe(Kt, null), a = () => {
    const l = r.value;
    n.mount({
      id: l === void 0 ? e : l + e,
      head: !0,
      anchorMetaName: Fr,
      props: {
        bPrefix: l ? `.${l}-` : void 0
      },
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    }), i != null && i.preflightStyleDisabled || Su.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: Fr,
      ssr: o,
      parent: i == null ? void 0 : i.styleMountTarget
    });
  };
  o ? a() : Fn(a);
}
function Ne(e, n, r, o) {
  r || dn("useThemeClass", "cssVarsRef is not passed");
  const i = fe(Kt, null), a = i == null ? void 0 : i.mergedThemeHashRef, l = i == null ? void 0 : i.styleMountTarget, s = I(""), u = Pn();
  let d;
  const c = `__${e}`, f = () => {
    let p = c;
    const m = n ? n.value : void 0, v = a == null ? void 0 : a.value;
    v && (p += `-${v}`), m && (p += `-${m}`);
    const {
      themeOverrides: x,
      builtinThemeOverrides: b
    } = o;
    x && (p += `-${br(JSON.stringify(x))}`), b && (p += `-${br(JSON.stringify(b))}`), s.value = p, d = () => {
      const g = r.value;
      let w = "";
      for (const A in g)
        w += `${A}: ${g[A]};`;
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
function gt(e, n, r) {
  if (!n) return;
  const o = Pn(), i = O(() => {
    const {
      value: s
    } = n;
    if (!s)
      return;
    const u = s[e];
    if (u)
      return u;
  }), a = fe(Kt, null), l = () => {
    ot(() => {
      const {
        value: s
      } = r, u = `${s}${e}Rtl`;
      if (Lc(u, o)) return;
      const {
        value: d
      } = i;
      d && d.style.mount({
        id: u,
        head: !0,
        anchorMetaName: Fr,
        props: {
          bPrefix: s ? `.${s}-` : void 0
        },
        ssr: o,
        parent: a == null ? void 0 : a.styleMountTarget
      });
    });
  };
  return o ? l() : Fn(l), i;
}
function rr(e, n) {
  return J({
    name: Qv(e),
    setup() {
      var r;
      const o = (r = fe(Kt, null)) === null || r === void 0 ? void 0 : r.mergedIconsRef;
      return () => {
        var i;
        const a = (i = o == null ? void 0 : o.value) === null || i === void 0 ? void 0 : i[e];
        return a ? a() : n;
      };
    }
  });
}
const jx = J({
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
}), Wx = J({
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
}), Fu = J({
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
}), Vx = rr("close", h("svg", {
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
}))))), qx = J({
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
}), Kx = J({
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
}), Ux = J({
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
}), ba = rr("error", h("svg", {
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
}))))), So = rr("info", h("svg", {
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
}))))), Ca = rr("success", h("svg", {
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
}))))), Oo = rr("warning", h("svg", {
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
}))))), Gx = J({
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
}), Xx = rr("clear", h("svg", {
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
}))))), Mo = J({
  name: "BaseIconSwitchTransition",
  setup(e, {
    slots: n
  }) {
    const r = tr();
    return () => h(ut, {
      name: "icon-switch-transition",
      appear: r.value
    }, n);
  }
}), ya = J({
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
      } = e, f = s ? tc : ut, p = {
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
}), Yx = k("base-icon", `
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
    zn("-base-icon", Yx, le(e, "clsPrefix"));
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
}), Zx = k("base-close", `
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
 `)])]), Ir = J({
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
    return zn("-base-close", Zx, le(e, "clsPrefix")), () => {
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
        default: () => h(Vx, null)
      }));
    };
  }
}), Jx = J({
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
  cubicBezierEaseInOut: Qx
} = fn;
function $r({
  originalTransform: e = "",
  left: n = 0,
  top: r = 0,
  transition: o = `all .3s ${Qx} !important`
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
const em = D([D("@keyframes rotator", `
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
 `, [$r()]), z("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [$r({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), z("container", `
 animation: rotator 3s linear infinite both;
 `, [z("icon", `
 height: 1em;
 width: 1em;
 `)])])]), si = "1.6s", tm = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, _r = J({
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
  }, tm),
  setup(e) {
    zn("-base-loading", em, le(e, "clsPrefix"));
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
    }, h(Mo, null, {
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
        dur: si,
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
        dur: si,
        fill: "freeze",
        repeatCount: "indefinite"
      }), h("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * n};${1.42 * n};${5.67 * n}`,
        begin: "0s",
        dur: si,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : h("div", {
        key: "placeholder",
        class: `${e}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
});
function jl(e) {
  return Array.isArray(e) ? e : [e];
}
const Mi = {
  STOP: "STOP"
};
function Pu(e, n) {
  const r = n(e);
  e.children !== void 0 && r !== Mi.STOP && e.children.forEach((o) => Pu(o, n));
}
function nm(e, n = {}) {
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
function rm(e, n) {
  const { isLeaf: r } = e;
  return r !== void 0 ? r : !n(e);
}
function om(e) {
  return e.children;
}
function im(e) {
  return e.key;
}
function am() {
  return !1;
}
function lm(e, n) {
  const { isLeaf: r } = e;
  return !(r === !1 && !Array.isArray(n(e)));
}
function sm(e) {
  return e.disabled === !0;
}
function um(e, n) {
  return e.isLeaf === !1 && !Array.isArray(n(e));
}
function dm(e, n) {
  if (e.isLeaf === !0) {
    const r = n(e);
    if (Array.isArray(r) && r.length > 0)
      return !0;
  }
  return !1;
}
function ui(e) {
  var n;
  return e == null ? [] : Array.isArray(e) ? e : (n = e.checkedKeys) !== null && n !== void 0 ? n : [];
}
function di(e) {
  var n;
  return e == null || Array.isArray(e) ? [] : (n = e.indeterminateKeys) !== null && n !== void 0 ? n : [];
}
function cm(e, n) {
  const r = new Set(e);
  return n.forEach((o) => {
    r.has(o) || r.add(o);
  }), Array.from(r);
}
function fm(e, n) {
  const r = new Set(e);
  return n.forEach((o) => {
    r.has(o) && r.delete(o);
  }), Array.from(r);
}
function hm(e) {
  return (e == null ? void 0 : e.type) === "group";
}
function vm(e) {
  const n = /* @__PURE__ */ new Map();
  return e.forEach((r, o) => {
    n.set(r.key, o);
  }), (r) => {
    var o;
    return (o = n.get(r)) !== null && o !== void 0 ? o : null;
  };
}
class pm extends Error {
  constructor() {
    super(), this.message = "SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded.";
  }
}
function gm(e, n, r, o) {
  return Ao(n.concat(e), r, o, !1);
}
function xm(e, n) {
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
function mm(e, n, r, o) {
  const i = Ao(n, r, o, !1), a = Ao(e, r, o, !0), l = xm(e, r), s = [];
  return i.forEach((u) => {
    (a.has(u) || l.has(u)) && s.push(u);
  }), s.forEach((u) => i.delete(u)), i;
}
function ci(e, n) {
  const { checkedKeys: r, keysToCheck: o, keysToUncheck: i, indeterminateKeys: a, cascade: l, leafOnly: s, checkStrategy: u, allowNotLoaded: d } = e;
  if (!l)
    return o !== void 0 ? {
      checkedKeys: cm(r, o),
      indeterminateKeys: Array.from(a)
    } : i !== void 0 ? {
      checkedKeys: fm(r, i),
      indeterminateKeys: Array.from(a)
    } : {
      checkedKeys: Array.from(r),
      indeterminateKeys: Array.from(a)
    };
  const { levelTreeNodeMap: c } = n;
  let f;
  i !== void 0 ? f = mm(i, r, n, d) : o !== void 0 ? f = gm(o, r, n, d) : f = Ao(r, n, d, !1);
  const p = u === "parent", m = u === "child" || s, v = f, x = /* @__PURE__ */ new Set(), b = Math.max.apply(null, Array.from(c.keys()));
  for (let g = b; g >= 0; g -= 1) {
    const w = g === 0, A = c.get(g);
    for (const y of A) {
      if (y.isLeaf)
        continue;
      const { key: S, shallowLoaded: T } = y;
      if (m && T && y.children.forEach((_) => {
        !_.disabled && !_.isLeaf && _.shallowLoaded && v.has(_.key) && v.delete(_.key);
      }), y.disabled || !T)
        continue;
      let C = !0, P = !1, M = !0;
      for (const _ of y.children) {
        const K = _.key;
        if (!_.disabled) {
          if (M && (M = !1), v.has(K))
            P = !0;
          else if (x.has(K)) {
            P = !0, C = !1;
            break;
          } else if (C = !1, P)
            break;
        }
      }
      C && !M ? (p && y.children.forEach((_) => {
        !_.disabled && v.has(_.key) && v.delete(_.key);
      }), v.add(S)) : P && x.add(S), w && m && v.has(S) && v.delete(S);
    }
  }
  return {
    checkedKeys: Array.from(v),
    indeterminateKeys: Array.from(x)
  };
}
function Ao(e, n, r, o) {
  const { treeNodeMap: i, getChildren: a } = n, l = /* @__PURE__ */ new Set(), s = new Set(e);
  return e.forEach((u) => {
    const d = i.get(u);
    d !== void 0 && Pu(d, (c) => {
      if (c.disabled)
        return Mi.STOP;
      const { key: f } = c;
      if (!l.has(f) && (l.add(f), s.add(f), um(c.rawNode, a))) {
        if (o)
          return Mi.STOP;
        if (!r)
          throw new pm();
      }
    });
  }), s;
}
function bm(e, { includeGroup: n = !1, includeSelf: r = !0 }, o) {
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
function Cm(e) {
  if (e.length === 0)
    return null;
  const n = e[0];
  return n.isGroup || n.ignored || n.disabled ? n.getNext() : n;
}
function ym(e, n) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return n ? r[(i + 1) % o] : i === r.length - 1 ? null : r[i + 1];
}
function Wl(e, n, { loop: r = !1, includeDisabled: o = !1 } = {}) {
  const i = n === "prev" ? wm : ym, a = {
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
        const c = wa(d, a);
        c !== null ? s = c : u(i(d, r));
      } else {
        const c = i(d, !1);
        if (c !== null)
          u(c);
        else {
          const f = Bm(d);
          f != null && f.isGroup ? u(i(f, r)) : r && u(i(d, !0));
        }
      }
    }
  }
  return u(e), s;
}
function wm(e, n) {
  const r = e.siblings, o = r.length, { index: i } = e;
  return n ? r[(i - 1 + o) % o] : i === 0 ? null : r[i - 1];
}
function Bm(e) {
  return e.parent;
}
function wa(e, n = {}) {
  const { reverse: r = !1 } = n, { children: o } = e;
  if (o) {
    const { length: i } = o, a = r ? i - 1 : 0, l = r ? -1 : i, s = r ? -1 : 1;
    for (let u = a; u !== l; u += s) {
      const d = o[u];
      if (!d.disabled && !d.ignored)
        if (d.isGroup) {
          const c = wa(d, n);
          if (c !== null)
            return c;
        } else
          return d;
    }
  }
  return null;
}
const Sm = {
  getChild() {
    return this.ignored ? null : wa(this);
  },
  getParent() {
    const { parent: e } = this;
    return e != null && e.isGroup ? e.getParent() : e;
  },
  getNext(e = {}) {
    return Wl(this, "next", e);
  },
  getPrev(e = {}) {
    return Wl(this, "prev", e);
  }
};
function Am(e, n) {
  const r = n ? new Set(n) : void 0, o = [];
  function i(a) {
    a.forEach((l) => {
      o.push(l), !(l.isLeaf || !l.children || l.ignored) && (l.isGroup || // normal non-leaf node
      r === void 0 || r.has(l.key)) && i(l.children);
    });
  }
  return i(e), o;
}
function Fm(e, n) {
  const r = e.key;
  for (; n; ) {
    if (n.key === r)
      return !0;
    n = n.parent;
  }
  return !1;
}
function $u(e, n, r, o, i, a = null, l = 0) {
  const s = [];
  return e.forEach((u, d) => {
    var c;
    process.env.NODE_ENV !== "production" && dm(u, i) && console.error("[treemate]: node", u, "is invalid");
    const f = Object.create(o);
    if (f.rawNode = u, f.siblings = s, f.level = l, f.index = d, f.isFirstChild = d === 0, f.isLastChild = d + 1 === e.length, f.parent = a, !f.ignored) {
      const p = i(u);
      Array.isArray(p) && (f.children = $u(p, n, r, o, i, f, l + 1));
    }
    s.push(f), n.set(f.key, f), r.has(l) || r.set(l, []), (c = r.get(l)) === null || c === void 0 || c.push(f);
  }), s;
}
function Du(e, n = {}) {
  var r;
  const o = /* @__PURE__ */ new Map(), i = /* @__PURE__ */ new Map(), { getDisabled: a = sm, getIgnored: l = am, getIsGroup: s = hm, getKey: u = im } = n, d = (r = n.getChildren) !== null && r !== void 0 ? r : om, c = n.ignoreEmptyChildren ? (y) => {
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
      return rm(this.rawNode, c);
    },
    get shallowLoaded() {
      return lm(this.rawNode, c);
    },
    get ignored() {
      return l(this.rawNode);
    },
    contains(y) {
      return Fm(this, y);
    }
  }, Sm), p = $u(e, o, i, f, c);
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
  function x(y, S) {
    const T = v(y);
    return T ? T.getPrev(S) : null;
  }
  function b(y, S) {
    const T = v(y);
    return T ? T.getNext(S) : null;
  }
  function g(y) {
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
      return Am(p, y);
    },
    getNode: m,
    getPrev: x,
    getNext: b,
    getParent: g,
    getChild: w,
    getFirstAvailableNode() {
      return Cm(p);
    },
    getPath(y, S = {}) {
      return bm(y, S, A);
    },
    getCheckedKeys(y, S = {}) {
      const { cascade: T = !0, leafOnly: C = !1, checkStrategy: P = "all", allowNotLoaded: M = !1 } = S;
      return ci({
        checkedKeys: ui(y),
        indeterminateKeys: di(y),
        cascade: T,
        leafOnly: C,
        checkStrategy: P,
        allowNotLoaded: M
      }, A);
    },
    check(y, S, T = {}) {
      const { cascade: C = !0, leafOnly: P = !1, checkStrategy: M = "all", allowNotLoaded: _ = !1 } = T;
      return ci({
        checkedKeys: ui(S),
        indeterminateKeys: di(S),
        keysToCheck: y == null ? [] : jl(y),
        cascade: C,
        leafOnly: P,
        checkStrategy: M,
        allowNotLoaded: _
      }, A);
    },
    uncheck(y, S, T = {}) {
      const { cascade: C = !0, leafOnly: P = !1, checkStrategy: M = "all", allowNotLoaded: _ = !1 } = T;
      return ci({
        checkedKeys: ui(S),
        indeterminateKeys: di(S),
        keysToUncheck: y == null ? [] : jl(y),
        cascade: C,
        leafOnly: P,
        checkStrategy: M,
        allowNotLoaded: _
      }, A);
    },
    getNonLeafKeys(y = {}) {
      return nm(p, y);
    }
  };
  return A;
}
const de = {
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
}, Pm = Bn(de.neutralBase), Eu = Bn(de.neutralInvertBase), $m = `rgba(${Eu.slice(0, 3).join(", ")}, `;
function Vl(e) {
  return `${$m + String(e)})`;
}
function tt(e) {
  const n = Array.from(Eu);
  return n[3] = Number(e), ft(Pm, n);
}
const He = Object.assign(Object.assign({
  name: "common"
}, fn), {
  baseColor: de.neutralBase,
  // primary color
  primaryColor: de.primaryDefault,
  primaryColorHover: de.primaryHover,
  primaryColorPressed: de.primaryActive,
  primaryColorSuppl: de.primarySuppl,
  // info color
  infoColor: de.infoDefault,
  infoColorHover: de.infoHover,
  infoColorPressed: de.infoActive,
  infoColorSuppl: de.infoSuppl,
  // success color
  successColor: de.successDefault,
  successColorHover: de.successHover,
  successColorPressed: de.successActive,
  successColorSuppl: de.successSuppl,
  // warning color
  warningColor: de.warningDefault,
  warningColorHover: de.warningHover,
  warningColorPressed: de.warningActive,
  warningColorSuppl: de.warningSuppl,
  // error color
  errorColor: de.errorDefault,
  errorColorHover: de.errorHover,
  errorColorPressed: de.errorActive,
  errorColorSuppl: de.errorSuppl,
  // text color
  textColorBase: de.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: tt(de.alpha4),
  placeholderColor: tt(de.alpha4),
  placeholderColorDisabled: tt(de.alpha5),
  iconColor: tt(de.alpha4),
  iconColorHover: qr(tt(de.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: qr(tt(de.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: tt(de.alpha5),
  opacity1: de.alpha1,
  opacity2: de.alpha2,
  opacity3: de.alpha3,
  opacity4: de.alpha4,
  opacity5: de.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: tt(Number(de.alphaClose)),
  closeIconColorHover: tt(Number(de.alphaClose)),
  closeIconColorPressed: tt(Number(de.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: tt(de.alpha4),
  clearColorHover: qr(tt(de.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: qr(tt(de.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: Vl(de.alphaScrollbar),
  scrollbarColorHover: Vl(de.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: tt(de.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: de.neutralPopover,
  tableColor: de.neutralCard,
  cardColor: de.neutralCard,
  modalColor: de.neutralModal,
  bodyColor: de.neutralBody,
  tagColor: "#eee",
  avatarColor: tt(de.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: tt(de.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: de.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), Dm = {
  iconSizeTiny: "28px",
  iconSizeSmall: "34px",
  iconSizeMedium: "40px",
  iconSizeLarge: "46px",
  iconSizeHuge: "52px"
};
function Em(e) {
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
  return Object.assign(Object.assign({}, Dm), {
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
const zu = {
  name: "Empty",
  common: He,
  self: Em
}, zm = k("empty", `
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
 `)]), km = Object.assign(Object.assign({}, se.props), {
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
}), ku = J({
  name: "Empty",
  props: km,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r,
      mergedComponentPropsRef: o
    } = Ae(e), i = se("Empty", "-empty", zm, zu, e, n), {
      localeRef: a
    } = Pr("Empty"), l = O(() => {
      var c, f, p;
      return (c = e.description) !== null && c !== void 0 ? c : (p = (f = o == null ? void 0 : o.value) === null || f === void 0 ? void 0 : f.Empty) === null || p === void 0 ? void 0 : p.description;
    }), s = O(() => {
      var c, f;
      return ((f = (c = o == null ? void 0 : o.value) === null || c === void 0 ? void 0 : c.Empty) === null || f === void 0 ? void 0 : f.renderIcon) || (() => h(Ux, null));
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
          iconColor: x,
          extraTextColor: b
        }
      } = i.value;
      return {
        "--n-icon-size": p,
        "--n-font-size": m,
        "--n-bezier": f,
        "--n-text-color": v,
        "--n-icon-color": x,
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
}), Tm = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Rm(e) {
  const {
    scrollbarColor: n,
    scrollbarColorHover: r,
    scrollbarHeight: o,
    scrollbarWidth: i,
    scrollbarBorderRadius: a
  } = e;
  return Object.assign(Object.assign({}, Tm), {
    height: o,
    width: i,
    borderRadius: a,
    color: n,
    colorHover: r
  });
}
const Io = {
  name: "Scrollbar",
  common: He,
  self: Rm
}, {
  cubicBezierEaseInOut: ql
} = fn;
function _o({
  name: e = "fade-in",
  enterDuration: n = "0.2s",
  leaveDuration: r = "0.2s",
  enterCubicBezier: o = ql,
  leaveCubicBezier: i = ql
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
const Om = k("scrollbar", `
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
 `, [_o(), D("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Mm = Object.assign(Object.assign({}, se.props), {
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
}), Lr = J({
  name: "Scrollbar",
  props: Mm,
  inheritAttrs: !1,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Ae(e), i = gt("Scrollbar", o, n), a = I(null), l = I(null), s = I(null), u = I(null), d = I(null), c = I(null), f = I(null), p = I(null), m = I(null), v = I(null), x = I(null), b = I(0), g = I(0), w = I(!1), A = I(!1);
    let y = !1, S = !1, T, C, P = 0, M = 0, _ = 0, K = 0;
    const H = af(), t = se("Scrollbar", "-scrollbar", Om, Io, e, n), F = O(() => {
      const {
        value: B
      } = p, {
        value: j
      } = c, {
        value: X
      } = v;
      return B === null || j === null || X === null ? 0 : Math.min(B, X * B / j + mr(t.value.self.width) * 1.5);
    }), $ = O(() => `${F.value}px`), L = O(() => {
      const {
        value: B
      } = m, {
        value: j
      } = f, {
        value: X
      } = x;
      return B === null || j === null || X === null ? 0 : X * B / j + mr(t.value.self.height) * 1.5;
    }), R = O(() => `${L.value}px`), V = O(() => {
      const {
        value: B
      } = p, {
        value: j
      } = b, {
        value: X
      } = c, {
        value: te
      } = v;
      if (B === null || X === null || te === null)
        return 0;
      {
        const ie = X - B;
        return ie ? j / ie * (te - F.value) : 0;
      }
    }), Q = O(() => `${V.value}px`), Z = O(() => {
      const {
        value: B
      } = m, {
        value: j
      } = g, {
        value: X
      } = f, {
        value: te
      } = x;
      if (B === null || X === null || te === null)
        return 0;
      {
        const ie = X - B;
        return ie ? j / ie * (te - L.value) : 0;
      }
    }), re = O(() => `${Z.value}px`), W = O(() => {
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
    }), ne = O(() => {
      const {
        trigger: B
      } = e;
      return B === "none" || w.value;
    }), Be = O(() => {
      const {
        trigger: B
      } = e;
      return B === "none" || A.value;
    }), oe = O(() => {
      const {
        container: B
      } = e;
      return B ? B() : l.value;
    }), pe = O(() => {
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
        top: te,
        index: ie,
        elSize: ce,
        position: he,
        behavior: ge,
        el: ze,
        debounce: xt = !0
      } = B;
      (X !== void 0 || te !== void 0) && Se(X ?? 0, te ?? 0, 0, !1, ge), ze !== void 0 ? Se(0, ze.offsetTop, ze.offsetHeight, xt, ge) : ie !== void 0 && ce !== void 0 ? Se(0, ie * ce, ce, xt, ge) : he === "bottom" ? Se(0, Number.MAX_SAFE_INTEGER, 0, !1, ge) : he === "top" && Se(0, 0, 0, !1, ge);
    }, ae = th(() => {
      e.container || Me({
        top: b.value,
        left: g.value
      });
    }), We = () => {
      ae.isDeactivated || ee();
    }, Te = (B) => {
      if (ae.isDeactivated) return;
      const {
        onResize: j
      } = e;
      j && j(B), ee();
    }, be = (B, j) => {
      if (!e.scrollable) return;
      const {
        value: X
      } = oe;
      X && (typeof B == "object" ? X.scrollBy(B) : X.scrollBy(B, j || 0));
    };
    function Se(B, j, X, te, ie) {
      const {
        value: ce
      } = oe;
      if (ce) {
        if (te) {
          const {
            scrollTop: he,
            offsetHeight: ge
          } = ce;
          if (j > he) {
            j + X <= he + ge || ce.scrollTo({
              left: B,
              top: j + X - ge,
              behavior: ie
            });
            return;
          }
        }
        ce.scrollTo({
          left: B,
          top: j,
          behavior: ie
        });
      }
    }
    function Ce() {
      wt(), Fe(), ee();
    }
    function et() {
      it();
    }
    function it() {
      dt(), lt();
    }
    function dt() {
      C !== void 0 && window.clearTimeout(C), C = window.setTimeout(() => {
        A.value = !1;
      }, e.duration);
    }
    function lt() {
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
    function Ee(B) {
      const {
        onScroll: j
      } = e;
      j && j(B), Ye();
    }
    function Ye() {
      const {
        value: B
      } = oe;
      B && (b.value = B.scrollTop, g.value = B.scrollLeft * (i != null && i.value ? -1 : 1));
    }
    function Ke() {
      const {
        value: B
      } = pe;
      B && (c.value = B.offsetHeight, f.value = B.offsetWidth);
      const {
        value: j
      } = oe;
      j && (p.value = j.offsetHeight, m.value = j.offsetWidth);
      const {
        value: X
      } = d, {
        value: te
      } = u;
      X && (x.value = X.offsetWidth), te && (v.value = te.offsetHeight);
    }
    function Y() {
      const {
        value: B
      } = oe;
      B && (b.value = B.scrollTop, g.value = B.scrollLeft * (i != null && i.value ? -1 : 1), p.value = B.offsetHeight, m.value = B.offsetWidth, c.value = B.scrollHeight, f.value = B.scrollWidth);
      const {
        value: j
      } = d, {
        value: X
      } = u;
      j && (x.value = j.offsetWidth), X && (v.value = X.offsetHeight);
    }
    function ee() {
      e.scrollable && (e.useUnifiedContainer ? Y() : (Ke(), Ye()));
    }
    function Re(B) {
      var j;
      return !(!((j = a.value) === null || j === void 0) && j.contains(Xn(B)));
    }
    function hn(B) {
      B.preventDefault(), B.stopPropagation(), S = !0, Le("mousemove", window, Ot, !0), Le("mouseup", window, Mt, !0), M = g.value, _ = i != null && i.value ? window.innerWidth - B.clientX : B.clientX;
    }
    function Ot(B) {
      if (!S) return;
      T !== void 0 && window.clearTimeout(T), C !== void 0 && window.clearTimeout(C);
      const {
        value: j
      } = m, {
        value: X
      } = f, {
        value: te
      } = L;
      if (j === null || X === null) return;
      const ce = (i != null && i.value ? window.innerWidth - B.clientX - _ : B.clientX - _) * (X - j) / (j - te), he = X - j;
      let ge = M + ce;
      ge = Math.min(he, ge), ge = Math.max(ge, 0);
      const {
        value: ze
      } = oe;
      if (ze) {
        ze.scrollLeft = ge * (i != null && i.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: xt
        } = e;
        xt && xt(ge);
      }
    }
    function Mt(B) {
      B.preventDefault(), B.stopPropagation(), De("mousemove", window, Ot, !0), De("mouseup", window, Mt, !0), S = !1, ee(), Re(B) && it();
    }
    function Xt(B) {
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
        value: te
      } = F;
      if (j === null || X === null) return;
      const ce = (B.clientY - K) * (X - j) / (j - te), he = X - j;
      let ge = P + ce;
      ge = Math.min(he, ge), ge = Math.max(ge, 0);
      const {
        value: ze
      } = oe;
      ze && (ze.scrollTop = ge);
    }
    function It(B) {
      B.preventDefault(), B.stopPropagation(), De("mousemove", window, At, !0), De("mouseup", window, It, !0), y = !1, ee(), Re(B) && it();
    }
    ot(() => {
      const {
        value: B
      } = G, {
        value: j
      } = W, {
        value: X
      } = n, {
        value: te
      } = d, {
        value: ie
      } = u;
      te && (B ? te.classList.remove(`${X}-scrollbar-rail--disabled`) : te.classList.add(`${X}-scrollbar-rail--disabled`)), ie && (j ? ie.classList.remove(`${X}-scrollbar-rail--disabled`) : ie.classList.add(`${X}-scrollbar-rail--disabled`));
    }), Qe(() => {
      e.container || ee();
    }), Xe(() => {
      T !== void 0 && window.clearTimeout(T), C !== void 0 && window.clearTimeout(C), De("mousemove", window, At, !0), De("mouseup", window, It, !0);
    });
    const Yt = O(() => {
      const {
        common: {
          cubicBezierEaseInOut: B
        },
        self: {
          color: j,
          colorHover: X,
          height: te,
          width: ie,
          borderRadius: ce,
          railInsetHorizontalTop: he,
          railInsetHorizontalBottom: ge,
          railInsetVerticalRight: ze,
          railInsetVerticalLeft: xt,
          railColor: kn
        }
      } = t.value;
      return {
        "--n-scrollbar-bezier": B,
        "--n-scrollbar-color": j,
        "--n-scrollbar-color-hover": X,
        "--n-scrollbar-border-radius": ce,
        "--n-scrollbar-width": ie,
        "--n-scrollbar-height": te,
        "--n-scrollbar-rail-inset-horizontal-top": he,
        "--n-scrollbar-rail-inset-horizontal-bottom": ge,
        "--n-scrollbar-rail-inset-vertical-right": i != null && i.value ? Ma(ze) : ze,
        "--n-scrollbar-rail-inset-vertical-left": i != null && i.value ? Ma(xt) : xt,
        "--n-scrollbar-rail-color": kn
      };
    }), ct = r ? Ne("scrollbar", void 0, Yt, e) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: Me,
      scrollBy: be,
      sync: ee,
      syncUnifiedContainer: Y,
      handleMouseEnterWrapper: Ce,
      handleMouseLeaveWrapper: et
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
      xBarLeftPx: re,
      isShowXBar: ne,
      isShowYBar: Be,
      isIos: H,
      handleScroll: Ee,
      handleContentResize: We,
      handleContainerResize: Te,
      handleYScrollMouseDown: Xt,
      handleXScrollMouseDown: hn,
      cssVars: r ? void 0 : Yt,
      themeClass: ct == null ? void 0 : ct.themeClass,
      onRender: ct == null ? void 0 : ct.onRender
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
    }, h(d ? yi : ut, d ? null : {
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
      return (m = this.onRender) === null || m === void 0 || m.call(this), h("div", un(this.$attrs, {
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
      }, h(Br, {
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
      }, h(d ? yi : ut, d ? null : {
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
    }, p = this.container ? f() : h(Br, {
      onResize: this.handleContainerResize
    }, {
      default: f
    });
    return a ? h(Je, null, p, c(this.themeClass, this.cssVars)) : p;
  }
}), Tu = Lr, Im = {
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
function _m(e) {
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
    fontSizeHuge: x,
    heightTiny: b,
    heightSmall: g,
    heightMedium: w,
    heightLarge: A,
    heightHuge: y
  } = e;
  return Object.assign(Object.assign({}, Im), {
    optionFontSizeTiny: f,
    optionFontSizeSmall: p,
    optionFontSizeMedium: m,
    optionFontSizeLarge: v,
    optionFontSizeHuge: x,
    optionHeightTiny: b,
    optionHeightSmall: g,
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
const Ru = {
  name: "InternalSelectMenu",
  common: He,
  peers: {
    Scrollbar: Io,
    Empty: zu
  },
  self: _m
};
function Lm(e, n) {
  return h(ut, {
    name: "fade-in-scale-up-transition"
  }, {
    default: () => e ? h(yt, {
      clsPrefix: n,
      class: `${n}-base-select-option__check`
    }, {
      default: () => h(jx)
    }) : null
  });
}
const Kl = J({
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
    } = fe(Zi), m = qe(() => {
      const {
        value: g
      } = r;
      return g ? e.tmNode.key === g.key : !1;
    });
    function v(g) {
      const {
        tmNode: w
      } = e;
      w.disabled || f(g, w);
    }
    function x(g) {
      const {
        tmNode: w
      } = e;
      w.disabled || p(g, w);
    }
    function b(g) {
      const {
        tmNode: w
      } = e, {
        value: A
      } = m;
      w.disabled || A || p(g, w);
    }
    return {
      multiple: o,
      isGrouped: qe(() => {
        const {
          tmNode: g
        } = e, {
          parent: w
        } = g;
        return w && w.rawNode.type === "group";
      }),
      showCheckmark: d,
      nodeProps: c,
      isPending: m,
      isSelected: qe(() => {
        const {
          value: g
        } = n, {
          value: w
        } = o;
        if (g === null) return !1;
        const A = e.tmNode.rawNode[u.value];
        if (w) {
          const {
            value: y
          } = i;
          return y.has(A);
        } else
          return g === A;
      }),
      labelField: s,
      renderLabel: a,
      renderOption: l,
      handleMouseMove: b,
      handleMouseEnter: x,
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
    } = this, p = Lm(r, e), m = u ? [u(n, r), a && p] : [je(n[this.labelField], n, r), a && p], v = l == null ? void 0 : l(n), x = h("div", Object.assign({}, v, {
      class: [`${e}-base-select-option`, n.class, v == null ? void 0 : v.class, {
        [`${e}-base-select-option--disabled`]: n.disabled,
        [`${e}-base-select-option--selected`]: r,
        [`${e}-base-select-option--grouped`]: i,
        [`${e}-base-select-option--pending`]: o,
        [`${e}-base-select-option--show-checkmark`]: a
      }],
      style: [(v == null ? void 0 : v.style) || "", n.style || ""],
      onClick: Zo([d, v == null ? void 0 : v.onClick]),
      onMouseenter: Zo([c, v == null ? void 0 : v.onMouseenter]),
      onMousemove: Zo([f, v == null ? void 0 : v.onMousemove])
    }), h("div", {
      class: `${e}-base-select-option__content`
    }, m));
    return n.render ? n.render({
      node: x,
      option: n,
      selected: r
    }) : s ? s({
      node: x,
      option: n,
      selected: r
    }) : x;
  }
}), Ul = J({
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
    } = fe(Zi);
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
}), {
  cubicBezierEaseIn: Gl,
  cubicBezierEaseOut: Xl
} = fn;
function Lo({
  transformOrigin: e = "inherit",
  duration: n = ".2s",
  enterScale: r = ".9",
  originalTransform: o = "",
  originalTransition: i = ""
} = {}) {
  return [D("&.fade-in-scale-up-transition-leave-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${Gl}, transform ${n} ${Gl} ${i && `,${i}`}`
  }), D("&.fade-in-scale-up-transition-enter-active", {
    transformOrigin: e,
    transition: `opacity ${n} ${Xl}, transform ${n} ${Xl} ${i && `,${i}`}`
  }), D("&.fade-in-scale-up-transition-enter-from, &.fade-in-scale-up-transition-leave-to", {
    opacity: 0,
    transform: `${o} scale(${r})`
  }), D("&.fade-in-scale-up-transition-leave-from, &.fade-in-scale-up-transition-enter-to", {
    opacity: 1,
    transform: `${o} scale(1)`
  })];
}
const Nm = k("base-select-menu", `
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
 `, [Lo({
  enterScale: "0.5"
})])])]), Hm = J({
  name: "InternalSelectMenu",
  props: Object.assign(Object.assign({}, se.props), {
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
    } = Ae(e), o = gt("InternalSelectMenu", r, n), i = se("InternalSelectMenu", "-internal-select-menu", Nm, Ru, e, le(e, "clsPrefix")), a = I(null), l = I(null), s = I(null), u = O(() => e.treeMate.getFlattenedNodes()), d = O(() => vm(u.value)), c = I(null);
    function f() {
      const {
        treeMate: W
      } = e;
      let G = null;
      const {
        value: ne
      } = e;
      ne === null ? G = W.getFirstAvailableNode() : (e.multiple ? G = W.getNode((ne || [])[(ne || []).length - 1]) : G = W.getNode(ne), (!G || G.disabled) && (G = W.getFirstAvailableNode())), F(G || null);
    }
    function p() {
      const {
        value: W
      } = c;
      W && !e.treeMate.getNode(W.key) && (c.value = null);
    }
    let m;
    ke(() => e.show, (W) => {
      W ? m = ke(() => e.treeMate, () => {
        e.resetMenuOnOptionsChange ? (e.autoPending ? f() : p(), Ze($)) : p();
      }, {
        immediate: !0
      }) : m == null || m();
    }, {
      immediate: !0
    }), Xe(() => {
      m == null || m();
    });
    const v = O(() => mr(i.value.self[U("optionHeight", e.size)])), x = O(() => St(i.value.self[U("padding", e.size)])), b = O(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : /* @__PURE__ */ new Set()), g = O(() => {
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
    function M(W) {
      var G;
      Wt(W, "action") || (G = e.onKeyup) === null || G === void 0 || G.call(e, W);
    }
    function _(W) {
      var G;
      Wt(W, "action") || (G = e.onKeydown) === null || G === void 0 || G.call(e, W);
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
      const ne = c.value;
      if (!ne) return;
      const Be = d.value(ne.key);
      Be !== null && (e.virtualScroll ? (W = l.value) === null || W === void 0 || W.scrollTo({
        index: Be
      }) : (G = s.value) === null || G === void 0 || G.scrollTo({
        index: Be,
        elSize: v.value
      }));
    }
    function L(W) {
      var G, ne;
      !((G = a.value) === null || G === void 0) && G.contains(W.target) && ((ne = e.onFocus) === null || ne === void 0 || ne.call(e, W));
    }
    function R(W) {
      var G, ne;
      !((G = a.value) === null || G === void 0) && G.contains(W.relatedTarget) || (ne = e.onBlur) === null || ne === void 0 || ne.call(e, W);
    }
    xe(Zi, {
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
    }), xe(Es, a), Qe(() => {
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
          height: ne,
          borderRadius: Be,
          color: oe,
          groupHeaderTextColor: pe,
          actionDividerColor: Me,
          optionTextColorPressed: ae,
          optionTextColor: We,
          optionTextColorDisabled: Te,
          optionTextColorActive: be,
          optionOpacityDisabled: Se,
          optionCheckColor: Ce,
          actionTextColor: et,
          optionColorPending: it,
          optionColorActive: dt,
          loadingColor: lt,
          loadingSize: wt,
          optionColorActivePending: Fe,
          [U("optionFontSize", W)]: Ee,
          [U("optionHeight", W)]: Ye,
          [U("optionPadding", W)]: Ke
        }
      } = i.value;
      return {
        "--n-height": ne,
        "--n-action-divider-color": Me,
        "--n-action-text-color": et,
        "--n-bezier": G,
        "--n-border-radius": Be,
        "--n-color": oe,
        "--n-option-font-size": Ee,
        "--n-group-header-text-color": pe,
        "--n-option-check-color": Ce,
        "--n-option-color-pending": it,
        "--n-option-color-active": dt,
        "--n-option-color-active-pending": Fe,
        "--n-option-height": Ye,
        "--n-option-opacity-disabled": Se,
        "--n-option-text-color": We,
        "--n-option-text-color-active": be,
        "--n-option-text-color-disabled": Te,
        "--n-option-text-color-pressed": ae,
        "--n-option-padding": Ke,
        "--n-option-padding-left": St(Ke, "left"),
        "--n-option-padding-right": St(Ke, "right"),
        "--n-loading-color": lt,
        "--n-loading-size": wt
      };
    }), {
      inlineThemeDisabled: Q
    } = e, Z = Q ? Ne("internal-select-menu", O(() => e.size[0]), V, e) : void 0, re = {
      selfRef: a,
      next: H,
      prev: t,
      getPendingTmNode: T
    };
    return Xs(a, e.onResize), Object.assign({
      mergedTheme: i,
      mergedClsPrefix: n,
      rtlEnabled: o,
      virtualListRef: l,
      scrollbarRef: s,
      itemSize: v,
      padding: x,
      flattenedNodes: u,
      empty: g,
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
      handleKeyUp: M,
      handleKeyDown: _,
      handleMouseDown: K,
      handleVirtualListResize: S,
      handleVirtualListScroll: y,
      cssVars: Q ? void 0 : V,
      themeClass: Z == null ? void 0 : Z.themeClass,
      onRender: Z == null ? void 0 : Z.onRender
    }, re);
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
    }, h(_r, {
      clsPrefix: r,
      strokeWidth: 20
    })) : this.empty ? h("div", {
      class: `${r}-base-select-menu__empty`,
      "data-empty": !0
    }, Et(e.empty, () => [h(ku, {
      theme: o.peers.Empty,
      themeOverrides: o.peerOverrides.Empty,
      size: this.size
    })])) : h(Lr, {
      ref: "scrollbarRef",
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      scrollable: this.scrollable,
      container: n ? this.virtualListContainer : void 0,
      content: n ? this.virtualListContent : void 0,
      onScroll: n ? void 0 : this.doScroll
    }, {
      default: () => n ? h(Yf, {
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
        }) => l.isGroup ? h(Ul, {
          key: l.key,
          clsPrefix: r,
          tmNode: l
        }) : l.ignored ? null : h(Kl, {
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
      }, this.flattenedNodes.map((l) => l.isGroup ? h(Ul, {
        key: l.key,
        clsPrefix: r,
        tmNode: l
      }) : h(Kl, {
        clsPrefix: r,
        key: l.key,
        tmNode: l
      })))
    }), _e(e.action, (l) => l && [h("div", {
      class: `${r}-base-select-menu__action`,
      "data-action": !0,
      key: "action"
    }, l), h(Jx, {
      onFocus: this.onTabOut,
      key: "focus-detector"
    })]));
  }
}), jm = k("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), Wm = J({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(e) {
    zn("-base-wave", jm, le(e, "clsPrefix"));
    const n = I(null), r = I(!1);
    let o = null;
    return Xe(() => {
      o !== null && window.clearTimeout(o);
    }), {
      active: r,
      selfRef: n,
      play() {
        o !== null && (window.clearTimeout(o), r.value = !1, o = null), Ze(() => {
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
}), Vm = {
  space: "6px",
  spaceArrow: "10px",
  arrowOffset: "10px",
  arrowOffsetVertical: "10px",
  arrowHeight: "6px",
  padding: "8px 14px"
};
function qm(e) {
  const {
    boxShadow2: n,
    popoverColor: r,
    textColor2: o,
    borderRadius: i,
    fontSize: a,
    dividerColor: l
  } = e;
  return Object.assign(Object.assign({}, Vm), {
    fontSize: a,
    borderRadius: i,
    color: r,
    dividerColor: l,
    textColor: o,
    boxShadow: n
  });
}
const Nr = {
  name: "Popover",
  common: He,
  self: qm
}, fi = {
  top: "bottom",
  bottom: "top",
  left: "right",
  right: "left"
}, Ue = "var(--n-arrow-height) * 1.414", Km = D([k("popover", `
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
 width: calc(${Ue});
 height: calc(${Ue});
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
 top: calc(${Ue} / -2);
 left: calc(${jt("top-start")} - var(--v-offset-left));
 `), mt("top", `
 top: calc(${Ue} / -2);
 transform: translateX(calc(${Ue} / -2)) rotate(45deg);
 left: 50%;
 `), mt("top-end", `
 top: calc(${Ue} / -2);
 right: calc(${jt("top-end")} + var(--v-offset-left));
 `), mt("bottom-start", `
 bottom: calc(${Ue} / -2);
 left: calc(${jt("bottom-start")} - var(--v-offset-left));
 `), mt("bottom", `
 bottom: calc(${Ue} / -2);
 transform: translateX(calc(${Ue} / -2)) rotate(45deg);
 left: 50%;
 `), mt("bottom-end", `
 bottom: calc(${Ue} / -2);
 right: calc(${jt("bottom-end")} + var(--v-offset-left));
 `), mt("left-start", `
 left: calc(${Ue} / -2);
 top: calc(${jt("left-start")} - var(--v-offset-top));
 `), mt("left", `
 left: calc(${Ue} / -2);
 transform: translateY(calc(${Ue} / -2)) rotate(45deg);
 top: 50%;
 `), mt("left-end", `
 left: calc(${Ue} / -2);
 bottom: calc(${jt("left-end")} + var(--v-offset-top));
 `), mt("right-start", `
 right: calc(${Ue} / -2);
 top: calc(${jt("right-start")} - var(--v-offset-top));
 `), mt("right", `
 right: calc(${Ue} / -2);
 transform: translateY(calc(${Ue} / -2)) rotate(45deg);
 top: 50%;
 `), mt("right-end", `
 right: calc(${Ue} / -2);
 bottom: calc(${jt("right-end")} + var(--v-offset-top));
 `), ...wg({
  top: ["right-start", "left-start"],
  right: ["top-end", "bottom-end"],
  bottom: ["right-end", "left-end"],
  left: ["top-start", "bottom-start"]
}, (e, n) => {
  const r = ["right", "left"].includes(n), o = r ? "width" : "height";
  return e.map((i) => {
    const a = i.split("-")[1] === "end", s = `calc((${`var(--v-target-${o}, 0px)`} - ${Ue}) / 2)`, u = jt(i);
    return D(`[v-placement="${i}"] >`, [k("popover-shared", [N("center-arrow", [k("popover-arrow", `${n}: calc(max(${s}, ${u}) ${a ? "+" : "-"} var(--v-offset-${r ? "left" : "top"}));`)])])]);
  });
})]);
function jt(e) {
  return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)";
}
function mt(e, n) {
  const r = e.split("-")[0], o = ["top", "bottom"].includes(r) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
  return D(`[v-placement="${e}"] >`, [k("popover-shared", `
 margin-${fi[r]}: var(--n-space);
 `, [N("show-arrow", `
 margin-${fi[r]}: var(--n-space-arrow);
 `), N("overlap", `
 margin: 0;
 `), Vc("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${r}: 100%;
 ${fi[r]}: auto;
 ${o}
 `, [k("popover-arrow", n)])])]);
}
const Ou = Object.assign(Object.assign({}, se.props), {
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
function Mu({
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
const Um = J({
  name: "PopoverBody",
  inheritAttrs: !1,
  props: Ou,
  setup(e, {
    slots: n,
    attrs: r
  }) {
    const {
      namespaceRef: o,
      mergedClsPrefixRef: i,
      inlineThemeDisabled: a
    } = Ae(e), l = se("Popover", "-popover", Km, Nr, e, i), s = I(null), u = fe("NPopover"), d = I(null), c = I(e.show), f = I(!1);
    ot(() => {
      const {
        show: C
      } = e;
      C && !qc() && !e.internalDeactivateImmediately && (f.value = !0);
    });
    const p = O(() => {
      const {
        trigger: C,
        onClickoutside: P
      } = e, M = [], {
        positionManuallyRef: {
          value: _
        }
      } = u;
      return _ || (C === "click" && !P && M.push([yr, y, void 0, {
        capture: !0
      }]), C === "hover" && M.push([cf, A])), P && M.push([yr, y, void 0, {
        capture: !0
      }]), (e.displayDirective === "show" || e.animated && f.value) && M.push([Gn, e.show]), M;
    }), m = O(() => {
      const {
        common: {
          cubicBezierEaseInOut: C,
          cubicBezierEaseIn: P,
          cubicBezierEaseOut: M
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
          arrowOffsetVertical: re
        }
      } = l.value;
      return {
        "--n-box-shadow": R,
        "--n-bezier": C,
        "--n-bezier-ease-in": P,
        "--n-bezier-ease-out": M,
        "--n-font-size": t,
        "--n-text-color": F,
        "--n-color": L,
        "--n-divider-color": $,
        "--n-border-radius": V,
        "--n-arrow-height": Q,
        "--n-arrow-offset": Z,
        "--n-arrow-offset-vertical": re,
        "--n-padding": H,
        "--n-space": _,
        "--n-space-arrow": K
      };
    }), v = O(() => {
      const C = e.width === "trigger" ? void 0 : Vt(e.width), P = [];
      C && P.push({
        width: C
      });
      const {
        maxWidth: M,
        minWidth: _
      } = e;
      return M && P.push({
        maxWidth: Vt(M)
      }), _ && P.push({
        maxWidth: Vt(_)
      }), a || P.push(m.value), P;
    }), x = a ? Ne("popover", void 0, m, e) : void 0;
    u.setBodyInstance({
      syncPosition: b
    }), Xe(() => {
      u.setBodyInstance(null);
    }), ke(le(e, "show"), (C) => {
      e.animated || (C ? c.value = !0 : c.value = !1);
    });
    function b() {
      var C;
      (C = s.value) === null || C === void 0 || C.syncPosition();
    }
    function g(C) {
      e.trigger === "hover" && e.keepAliveOnHover && e.show && u.handleMouseEnter(C);
    }
    function w(C) {
      e.trigger === "hover" && e.keepAliveOnHover && u.handleMouseLeave(C);
    }
    function A(C) {
      e.trigger === "hover" && !S().contains(Xn(C)) && u.handleMouseMoveOutside(C);
    }
    function y(C) {
      (e.trigger === "click" && !S().contains(Xn(C)) || e.onClickoutside) && u.handleClickOutside(C);
    }
    function S() {
      return u.getTriggerElement();
    }
    xe(Or, d), xe(zo, null), xe(Eo, null);
    function T() {
      if (x == null || x.onRender(), !(e.displayDirective === "show" || e.show || e.animated && f.value))
        return null;
      let P;
      const M = u.internalRenderBodyRef.value, {
        value: _
      } = i;
      if (M)
        P = M(
          // The popover class and overlap class must exists, they will be used
          // to place the body & transition animation.
          // Shadow class exists for reuse box-shadow.
          [`${_}-popover-shared`, x == null ? void 0 : x.themeClass.value, e.overlap && `${_}-popover-shared--overlap`, e.showArrow && `${_}-popover-shared--show-arrow`, e.arrowPointToCenter && `${_}-popover-shared--center-arrow`],
          d,
          v.value,
          g,
          w
        );
      else {
        const {
          value: K
        } = u.extraClassRef, {
          internalTrapFocus: H
        } = e, t = !Ci(n.header) || !Ci(n.footer), F = () => {
          var $, L;
          const R = t ? h(Je, null, _e(n.header, (Z) => Z ? h("div", {
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
          }, n), V = e.scrollable ? h(Tu, {
            contentClass: t ? void 0 : `${_}-popover__content ${(L = e.contentClass) !== null && L !== void 0 ? L : ""}`,
            contentStyle: t ? void 0 : e.contentStyle
          }, {
            default: () => R
          }) : R, Q = e.showArrow ? Mu({
            arrowClass: e.arrowClass,
            arrowStyle: e.arrowStyle,
            arrowWrapperClass: e.arrowWrapperClass,
            arrowWrapperStyle: e.arrowWrapperStyle,
            clsPrefix: _
          }) : null;
          return [V, Q];
        };
        P = h("div", un({
          class: [`${_}-popover`, `${_}-popover-shared`, x == null ? void 0 : x.themeClass.value, K.map(($) => `${_}-${$}`), {
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
          onMouseenter: g,
          onMouseleave: w
        }, r), H ? h(Gs, {
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
      adjustedTo: qt(e),
      followerEnabled: c,
      renderContentNode: T
    };
  },
  render() {
    return h(na, {
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
      default: () => this.animated ? h(ut, {
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
}), Gm = Object.keys(Ou), Xm = {
  focus: ["onFocus", "onBlur"],
  click: ["onClick"],
  hover: ["onMouseenter", "onMouseleave"],
  manual: [],
  nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
};
function Ym(e, n, r) {
  Xm[n].forEach((o) => {
    e.props ? e.props = Object.assign({}, e.props) : e.props = {};
    const i = e.props[o], a = r[o];
    i ? e.props[o] = (...l) => {
      i(...l), a(...l);
    } : e.props[o] = a;
  });
}
const Hr = {
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
}, Zm = Object.assign(Object.assign(Object.assign({}, se.props), Hr), {
  internalOnAfterLeave: Function,
  internalRenderBody: Function
}), jr = J({
  name: "Popover",
  inheritAttrs: !1,
  props: Zm,
  __popover__: !0,
  setup(e) {
    process.env.NODE_ENV !== "production" && ot(() => {
      e.maxWidth !== void 0 && at("popover", "`max-width` is deprecated, please use `style` instead."), e.minWidth !== void 0 && at("popover", "`min-width` is deprecated, please use `style` instead."), e.arrow !== void 0 && at("popover", "`arrow` is deprecated, please use `showArrow` instead."), e.onHide !== void 0 && at("popover", "`on-hide` is deprecated, please use `on-update:show` instead."), e.onShow !== void 0 && at("popover", "`on-show` is deprecated, please use `on-update:show` instead.");
    });
    const n = tr(), r = I(null), o = O(() => e.show), i = I(e.defaultShow), a = Yn(o, i), l = qe(() => e.disabled ? !1 : a.value), s = () => {
      if (e.disabled) return !0;
      const {
        getDisabled: $
      } = e;
      return !!($ != null && $());
    }, u = () => s() ? !1 : a.value, d = Yi(e, ["arrow", "showArrow"]), c = O(() => e.overlap ? !1 : d.value);
    let f = null;
    const p = I(null), m = I(null), v = qe(() => e.x !== void 0 && e.y !== void 0);
    function x($) {
      const {
        "onUpdate:show": L,
        onUpdateShow: R,
        onShow: V,
        onHide: Q
      } = e;
      i.value = $, L && ve(L, $), R && ve(R, $), $ && V && ve(V, !0), $ && Q && ve(Q, !1);
    }
    function b() {
      f && f.syncPosition();
    }
    function g() {
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
        x(!0);
      }
    }
    function y() {
      const $ = s();
      if (e.trigger === "focus" && !$) {
        if (!u()) return;
        x(!1);
      }
    }
    function S() {
      const $ = s();
      if (e.trigger === "hover" && !$) {
        if (w(), p.value !== null || u()) return;
        const L = () => {
          x(!0), p.value = null;
        }, {
          delay: R
        } = e;
        R === 0 ? L() : p.value = window.setTimeout(L, R);
      }
    }
    function T() {
      const $ = s();
      if (e.trigger === "hover" && !$) {
        if (g(), m.value !== null || !u()) return;
        const L = () => {
          x(!1), m.value = null;
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
      u() && (e.trigger === "click" && (g(), w(), x(!1)), (L = e.onClickoutside) === null || L === void 0 || L.call(e, $));
    }
    function M() {
      if (e.trigger === "click" && !s()) {
        g(), w();
        const $ = !u();
        x($);
      }
    }
    function _($) {
      e.internalTrapFocus && $.key === "Escape" && (g(), w(), x(!1));
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
    return xe("NPopover", {
      getTriggerElement: H,
      handleKeydown: _,
      handleMouseEnter: S,
      handleMouseLeave: T,
      handleClickOutside: P,
      handleMouseMoveOutside: C,
      setBodyInstance: t,
      positionManuallyRef: v,
      isMountedRef: n,
      zIndexRef: le(e, "zIndex"),
      extraClassRef: le(e, "internalExtraClass"),
      internalRenderBodyRef: le(e, "internalRenderBody")
    }), ot(() => {
      a.value && s() && x(!1);
    }), {
      binderInstRef: r,
      positionManually: v,
      mergedShowConsideringDisabledProp: l,
      // if to show popover body
      uncontrolledShow: i,
      mergedShowArrow: c,
      getMergedShow: u,
      setShow: K,
      handleClick: M,
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
    if (!n && (r.activator ? o = mi(r, "activator") : o = mi(r, "trigger"), o)) {
      o = ds(o), o = o.type === nc ? h("span", [o]) : o;
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
        Ym(o, l ? "nested" : n ? "manual" : this.trigger, u);
      }
    }
    return h(Ji, {
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
        }), [[ea, {
          enabled: a,
          zIndex: this.zIndex
        }]]) : null, n ? null : h(Qi, null, {
          default: () => o
        }), h(Um, an(this.$props, Gm, Object.assign(Object.assign({}, this.$attrs), {
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
}), Jm = {
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
function Qm(e) {
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
    closeIconColorPressed: x,
    borderRadiusSmall: b,
    fontSizeMini: g,
    fontSizeTiny: w,
    fontSizeSmall: A,
    fontSizeMedium: y,
    heightMini: S,
    heightTiny: T,
    heightSmall: C,
    heightMedium: P,
    closeColorHover: M,
    closeColorPressed: _,
    buttonColor2Hover: K,
    buttonColor2Pressed: H,
    fontWeightStrong: t
  } = e;
  return Object.assign(Object.assign({}, Jm), {
    closeBorderRadius: b,
    heightTiny: S,
    heightSmall: T,
    heightMedium: C,
    heightLarge: P,
    borderRadius: b,
    opacityDisabled: f,
    fontSizeTiny: g,
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
    closeIconColorPressed: x,
    closeColorHover: M,
    closeColorPressed: _,
    borderPrimary: `1px solid ${me(i, {
      alpha: 0.3
    })}`,
    textColorPrimary: i,
    colorPrimary: me(i, {
      alpha: 0.12
    }),
    colorBorderedPrimary: me(i, {
      alpha: 0.1
    }),
    closeIconColorPrimary: i,
    closeIconColorHoverPrimary: i,
    closeIconColorPressedPrimary: i,
    closeColorHoverPrimary: me(i, {
      alpha: 0.12
    }),
    closeColorPressedPrimary: me(i, {
      alpha: 0.18
    }),
    borderInfo: `1px solid ${me(a, {
      alpha: 0.3
    })}`,
    textColorInfo: a,
    colorInfo: me(a, {
      alpha: 0.12
    }),
    colorBorderedInfo: me(a, {
      alpha: 0.1
    }),
    closeIconColorInfo: a,
    closeIconColorHoverInfo: a,
    closeIconColorPressedInfo: a,
    closeColorHoverInfo: me(a, {
      alpha: 0.12
    }),
    closeColorPressedInfo: me(a, {
      alpha: 0.18
    }),
    borderSuccess: `1px solid ${me(l, {
      alpha: 0.3
    })}`,
    textColorSuccess: l,
    colorSuccess: me(l, {
      alpha: 0.12
    }),
    colorBorderedSuccess: me(l, {
      alpha: 0.1
    }),
    closeIconColorSuccess: l,
    closeIconColorHoverSuccess: l,
    closeIconColorPressedSuccess: l,
    closeColorHoverSuccess: me(l, {
      alpha: 0.12
    }),
    closeColorPressedSuccess: me(l, {
      alpha: 0.18
    }),
    borderWarning: `1px solid ${me(s, {
      alpha: 0.35
    })}`,
    textColorWarning: s,
    colorWarning: me(s, {
      alpha: 0.15
    }),
    colorBorderedWarning: me(s, {
      alpha: 0.12
    }),
    closeIconColorWarning: s,
    closeIconColorHoverWarning: s,
    closeIconColorPressedWarning: s,
    closeColorHoverWarning: me(s, {
      alpha: 0.12
    }),
    closeColorPressedWarning: me(s, {
      alpha: 0.18
    }),
    borderError: `1px solid ${me(u, {
      alpha: 0.23
    })}`,
    textColorError: u,
    colorError: me(u, {
      alpha: 0.1
    }),
    colorBorderedError: me(u, {
      alpha: 0.08
    }),
    closeIconColorError: u,
    closeIconColorHoverError: u,
    closeIconColorPressedError: u,
    closeColorHoverError: me(u, {
      alpha: 0.12
    }),
    closeColorPressedError: me(u, {
      alpha: 0.18
    })
  });
}
const eb = {
  name: "Tag",
  common: He,
  self: Qm
}, tb = {
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
}, nb = k("tag", `
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
 `, [Ve("disabled", [D("&:hover", "background-color: var(--n-color-checked-hover);"), D("&:active", "background-color: var(--n-color-checked-pressed);")])])])]), rb = Object.assign(Object.assign(Object.assign({}, se.props), tb), {
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
}), ob = "n-tag", hi = J({
  name: "Tag",
  props: rb,
  setup(e) {
    process.env.NODE_ENV !== "production" && ot(() => {
      e.onCheckedChange !== void 0 && at("tag", "`on-checked-change` is deprecated, please use `on-update:checked` instead");
    });
    const n = I(null), {
      mergedBorderedRef: r,
      mergedClsPrefixRef: o,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = Ae(e), l = se("Tag", "-tag", nb, eb, e, o);
    xe(ob, {
      roundRef: le(e, "round")
    });
    function s() {
      if (!e.disabled && e.checkable) {
        const {
          checked: m,
          onCheckedChange: v,
          onUpdateChecked: x,
          "onUpdate:checked": b
        } = e;
        x && x(!m), b && b(!m), v && v(!m);
      }
    }
    function u(m) {
      if (e.triggerClickOnClose || m.stopPropagation(), !e.disabled) {
        const {
          onClose: v
        } = e;
        v && ve(v, m);
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
          color: x,
          textColor: b
        } = {}
      } = e, {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          padding: w,
          closeMargin: A,
          borderRadius: y,
          opacityDisabled: S,
          textColorCheckable: T,
          textColorHoverCheckable: C,
          textColorPressedCheckable: P,
          textColorChecked: M,
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
          [U("fontSize", v)]: re,
          [U("height", v)]: W,
          [U("color", m)]: G,
          [U("textColor", m)]: ne,
          [U("border", m)]: Be,
          [U("closeIconColor", m)]: oe,
          [U("closeIconColorHover", m)]: pe,
          [U("closeIconColorPressed", m)]: Me,
          [U("closeColorHover", m)]: ae,
          [U("closeColorPressed", m)]: We
        }
      } = l.value, Te = St(A);
      return {
        "--n-font-weight-strong": R,
        "--n-avatar-size-override": `calc(${W} - 8px)`,
        "--n-bezier": g,
        "--n-border-radius": y,
        "--n-border": Be,
        "--n-close-icon-size": Z,
        "--n-close-color-pressed": We,
        "--n-close-color-hover": ae,
        "--n-close-border-radius": L,
        "--n-close-icon-color": oe,
        "--n-close-icon-color-hover": pe,
        "--n-close-icon-color-pressed": Me,
        "--n-close-icon-color-disabled": oe,
        "--n-close-margin-top": Te.top,
        "--n-close-margin-right": Te.right,
        "--n-close-margin-bottom": Te.bottom,
        "--n-close-margin-left": Te.left,
        "--n-close-size": Q,
        "--n-color": x || (r.value ? V : G),
        "--n-color-checkable": _,
        "--n-color-checked": t,
        "--n-color-checked-hover": F,
        "--n-color-checked-pressed": $,
        "--n-color-hover-checkable": K,
        "--n-color-pressed-checkable": H,
        "--n-font-size": re,
        "--n-height": W,
        "--n-opacity-disabled": S,
        "--n-padding": w,
        "--n-text-color": b || ne,
        "--n-text-color-checkable": T,
        "--n-text-color-checked": M,
        "--n-text-color-hover-checkable": C,
        "--n-text-color-pressed-checkable": P
      };
    }), p = i ? Ne("tag", O(() => {
      let m = "";
      const {
        type: v,
        size: x,
        color: {
          color: b,
          textColor: g
        } = {}
      } = e;
      return m += v[0], m += x[0], b && (m += `a${po(b)}`), g && (m += `b${po(g)}`), r.value && (m += "c"), m;
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
    }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e)), !this.checkable && i ? h(Ir, {
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
}), ib = k("base-clear", `
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
 `, [$r({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), Ii = J({
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
    return zn("-base-clear", ib, le(e, "clsPrefix")), {
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
    }, h(Mo, null, {
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
          default: () => h(Xx, null)
        })])) : h("div", {
          key: "icon",
          class: `${e}-base-clear__placeholder`
        }, (r = (n = this.$slots).placeholder) === null || r === void 0 ? void 0 : r.call(n));
      }
    }));
  }
}), Iu = J({
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
      return h(_r, {
        clsPrefix: r,
        class: `${r}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: e.loading
      }, {
        default: () => e.showArrow ? h(Ii, {
          clsPrefix: r,
          show: e.showClear,
          onClear: e.onClear
        }, {
          placeholder: () => h(yt, {
            clsPrefix: r,
            class: `${r}-base-suffix__arrow`
          }, {
            default: () => Et(n.default, () => [h(Gx, null)])
          })
        }) : null
      });
    };
  }
}), ab = {
  paddingSingle: "0 26px 0 12px",
  paddingMultiple: "3px 26px 0 12px",
  clearSize: "16px",
  arrowSize: "16px"
};
function lb(e) {
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
    clearColor: x,
    clearColorHover: b,
    clearColorPressed: g,
    placeholderColor: w,
    placeholderColorDisabled: A,
    fontSizeTiny: y,
    fontSizeSmall: S,
    fontSizeMedium: T,
    fontSizeLarge: C,
    heightTiny: P,
    heightSmall: M,
    heightMedium: _,
    heightLarge: K
  } = e;
  return Object.assign(Object.assign({}, ab), {
    fontSizeTiny: y,
    fontSizeSmall: S,
    fontSizeMedium: T,
    fontSizeLarge: C,
    heightTiny: P,
    heightSmall: M,
    heightMedium: _,
    heightLarge: K,
    borderRadius: n,
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
    boxShadowActive: `0 0 0 2px ${me(l, {
      alpha: 0.2
    })}`,
    boxShadowFocus: `0 0 0 2px ${me(l, {
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
    boxShadowActiveWarning: `0 0 0 2px ${me(u, {
      alpha: 0.2
    })}`,
    boxShadowFocusWarning: `0 0 0 2px ${me(u, {
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
    boxShadowActiveError: `0 0 0 2px ${me(c, {
      alpha: 0.2
    })}`,
    boxShadowFocusError: `0 0 0 2px ${me(c, {
      alpha: 0.2
    })}`,
    colorActiveError: i,
    caretColorError: c,
    clearColor: x,
    clearColorHover: b,
    clearColorPressed: g
  });
}
const _u = {
  name: "InternalSelection",
  common: He,
  peers: {
    Popover: Nr
  },
  self: lb
}, sb = D([k("base-selection", `
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
 `)])])]), ub = J({
  name: "InternalSelection",
  props: Object.assign(Object.assign({}, se.props), {
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
    } = Ae(e), o = gt("InternalSelection", r, n), i = I(null), a = I(null), l = I(null), s = I(null), u = I(null), d = I(null), c = I(null), f = I(null), p = I(null), m = I(null), v = I(!1), x = I(!1), b = I(!1), g = se("InternalSelection", "-internal-selection", sb, _u, e, le(e, "clsPrefix")), w = O(() => e.clearable && !e.disabled && (b.value || e.active)), A = O(() => e.selectedOption ? e.renderTag ? e.renderTag({
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
    ke(le(e, "active"), (Y) => {
      Y || C();
    }), ke(le(e, "pattern"), () => {
      e.multiple && Ze(T);
    });
    function M(Y) {
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
      (!Y.relatedTarget || !(!((ee = l.value) === null || ee === void 0) && ee.contains(Y.relatedTarget))) && M(Y);
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
    const re = I(!1);
    function W(Y) {
      if (Y.key === "Backspace" && !re.value && !e.pattern.length) {
        const {
          selectedOptions: ee
        } = e;
        ee != null && ee.length && Z(ee[ee.length - 1]);
      }
    }
    let G = null;
    function ne(Y) {
      const {
        value: ee
      } = i;
      if (ee) {
        const Re = Y.target.value;
        ee.textContent = Re, T();
      }
      e.ignoreComposition && re.value ? G = Y : t(Y);
    }
    function Be() {
      re.value = !0;
    }
    function oe() {
      re.value = !1, e.ignoreComposition && t(G), G = null;
    }
    function pe(Y) {
      var ee;
      x.value = !0, (ee = e.onPatternFocus) === null || ee === void 0 || ee.call(e, Y);
    }
    function Me(Y) {
      var ee;
      x.value = !1, (ee = e.onPatternBlur) === null || ee === void 0 || ee.call(e, Y);
    }
    function ae() {
      var Y, ee;
      if (e.filterable)
        x.value = !1, (Y = d.value) === null || Y === void 0 || Y.blur(), (ee = a.value) === null || ee === void 0 || ee.blur();
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
      e.filterable ? (x.value = !1, (Y = d.value) === null || Y === void 0 || Y.focus()) : e.multiple ? (ee = s.value) === null || ee === void 0 || ee.focus() : (Re = u.value) === null || Re === void 0 || Re.focus();
    }
    function Te() {
      const {
        value: Y
      } = a;
      Y && (P(), Y.focus());
    }
    function be() {
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
    function Ce() {
      const {
        value: Y
      } = f;
      return Y;
    }
    function et() {
      return a.value;
    }
    let it = null;
    function dt() {
      it !== null && window.clearTimeout(it);
    }
    function lt() {
      e.active || (dt(), it = window.setTimeout(() => {
        S.value && (v.value = !0);
      }, 100));
    }
    function wt() {
      dt();
    }
    function Fe(Y) {
      Y || (dt(), v.value = !1);
    }
    ke(S, (Y) => {
      Y || (v.value = !1);
    }), Qe(() => {
      ot(() => {
        const Y = d.value;
        Y && (e.disabled ? Y.removeAttribute("tabindex") : Y.tabIndex = x.value ? -1 : 0);
      });
    }), Xs(l, e.onResize);
    const {
      inlineThemeDisabled: Ee
    } = e, Ye = O(() => {
      const {
        size: Y
      } = e, {
        common: {
          cubicBezierEaseInOut: ee
        },
        self: {
          borderRadius: Re,
          color: hn,
          placeholderColor: Ot,
          textColor: Mt,
          paddingSingle: Xt,
          paddingMultiple: At,
          caretColor: It,
          colorDisabled: Yt,
          textColorDisabled: ct,
          placeholderColorDisabled: Bt,
          colorActive: B,
          boxShadowFocus: j,
          boxShadowActive: X,
          boxShadowHover: te,
          border: ie,
          borderFocus: ce,
          borderHover: he,
          borderActive: ge,
          arrowColor: ze,
          arrowColorDisabled: xt,
          loadingColor: kn,
          // form warning
          colorActiveWarning: Wo,
          boxShadowFocusWarning: Tn,
          boxShadowActiveWarning: Rn,
          boxShadowHoverWarning: Vo,
          borderWarning: qo,
          borderFocusWarning: Vr,
          borderHoverWarning: Zt,
          borderActiveWarning: E,
          // form error
          colorActiveError: q,
          boxShadowFocusError: ue,
          boxShadowActiveError: $e,
          boxShadowHoverError: Ie,
          borderError: Pe,
          borderFocusError: _t,
          borderHoverError: Lt,
          borderActiveError: Nt,
          // clear
          clearColor: vn,
          clearColorHover: pn,
          clearColorPressed: or,
          clearSize: Ko,
          // arrow
          arrowSize: Uo,
          [U("height", Y)]: Go,
          [U("fontSize", Y)]: Xo
        }
      } = g.value, On = St(Xt), Mn = St(At);
      return {
        "--n-bezier": ee,
        "--n-border": ie,
        "--n-border-active": ge,
        "--n-border-focus": ce,
        "--n-border-hover": he,
        "--n-border-radius": Re,
        "--n-box-shadow-active": X,
        "--n-box-shadow-focus": j,
        "--n-box-shadow-hover": te,
        "--n-caret-color": It,
        "--n-color": hn,
        "--n-color-active": B,
        "--n-color-disabled": Yt,
        "--n-font-size": Xo,
        "--n-height": Go,
        "--n-padding-single-top": On.top,
        "--n-padding-multiple-top": Mn.top,
        "--n-padding-single-right": On.right,
        "--n-padding-multiple-right": Mn.right,
        "--n-padding-single-left": On.left,
        "--n-padding-multiple-left": Mn.left,
        "--n-padding-single-bottom": On.bottom,
        "--n-padding-multiple-bottom": Mn.bottom,
        "--n-placeholder-color": Ot,
        "--n-placeholder-color-disabled": Bt,
        "--n-text-color": Mt,
        "--n-text-color-disabled": ct,
        "--n-arrow-color": ze,
        "--n-arrow-color-disabled": xt,
        "--n-loading-color": kn,
        // form warning
        "--n-color-active-warning": Wo,
        "--n-box-shadow-focus-warning": Tn,
        "--n-box-shadow-active-warning": Rn,
        "--n-box-shadow-hover-warning": Vo,
        "--n-border-warning": qo,
        "--n-border-focus-warning": Vr,
        "--n-border-hover-warning": Zt,
        "--n-border-active-warning": E,
        // form error
        "--n-color-active-error": q,
        "--n-box-shadow-focus-error": ue,
        "--n-box-shadow-active-error": $e,
        "--n-box-shadow-hover-error": Ie,
        "--n-border-error": Pe,
        "--n-border-focus-error": _t,
        "--n-border-hover-error": Lt,
        "--n-border-active-error": Nt,
        // clear
        "--n-clear-size": Ko,
        "--n-clear-color": vn,
        "--n-clear-color-hover": pn,
        "--n-clear-color-pressed": or,
        // arrow-size
        "--n-arrow-size": Uo
      };
    }), Ke = Ee ? Ne("internal-selection", O(() => e.size[0]), Ye, e) : void 0;
    return {
      mergedTheme: g,
      mergedClearable: w,
      mergedClsPrefix: n,
      rtlEnabled: o,
      patternInputFocused: x,
      filterablePlaceholder: A,
      label: y,
      selected: S,
      showTagsPanel: v,
      isComposing: re,
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
      handlePatternInputInput: ne,
      handlePatternInputBlur: Me,
      handlePatternInputFocus: pe,
      handleMouseEnterCounter: lt,
      handleMouseLeaveCounter: wt,
      handleFocusout: $,
      handleCompositionEnd: oe,
      handleCompositionStart: Be,
      onPopoverUpdateShow: Fe,
      focus: We,
      focusInput: Te,
      blur: ae,
      blurInput: be,
      updateCounter: Se,
      getCounter: Ce,
      getTail: et,
      renderLabel: e.renderLabel,
      cssVars: Ee ? void 0 : Ye,
      themeClass: Ke == null ? void 0 : Ke.themeClass,
      onRender: Ke == null ? void 0 : Ke.onRender
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
    const p = a === "responsive", m = typeof a == "number", v = p || m, x = h(yi, null, {
      default: () => h(Iu, {
        clsPrefix: s,
        loading: this.loading,
        showArrow: this.showArrow,
        showClear: this.mergedClearable && this.selected,
        onClear: this.handleClear
      }, {
        default: () => {
          var g, w;
          return (w = (g = this.$slots).arrow) === null || w === void 0 ? void 0 : w.call(g);
        }
      })
    });
    let b;
    if (n) {
      const {
        labelField: g
      } = this, w = (t) => h("div", {
        class: `${s}-base-selection-tag-wrapper`,
        key: t.value
      }, c ? c({
        option: t,
        handleClose: () => {
          this.handleDeleteOption(t);
        }
      }) : h(hi, {
        size: r,
        closable: !t.disabled,
        disabled: o,
        onClose: () => {
          this.handleDeleteOption(t);
        },
        internalCloseIsButtonTag: !1,
        internalCloseFocusable: !1
      }, {
        default: () => f ? f(t, !0) : je(t[g], t, !0)
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
      }, h(hi, {
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
        }, h(hi, {
          size: r,
          ref: "counterRef",
          onMouseenter: this.handleMouseEnterCounter,
          disabled: o
        }, {
          default: () => `+${t}`
        })));
      }
      const C = p ? i ? h(sl, {
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
      }) : h(sl, {
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
      }, p ? A() : this.selectedOptions.map(w)) : void 0, M = v ? Object.assign({
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
      }, C, p ? null : y, x) : h("div", {
        ref: "multipleElRef",
        class: `${s}-base-selection-tags`,
        tabindex: o ? void 0 : 0
      }, C, x);
      b = h(Je, null, v ? h(jr, Object.assign({}, M, {
        scrollable: !0,
        style: "max-height: calc(var(--v-target-height) * 6.6);"
      }), {
        trigger: () => H,
        default: P
      }) : H, K);
    } else if (i) {
      const g = this.pattern || this.isComposing, w = this.active ? !g : !this.selected, A = this.active ? !1 : this.selected;
      b = h("div", {
        ref: "patternInputWrapperRef",
        class: `${s}-base-selection-label`,
        title: this.patternInputFocused ? void 0 : Ra(this.label)
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
      }, this.filterablePlaceholder)) : null, x);
    } else
      b = h("div", {
        ref: "singleElRef",
        class: `${s}-base-selection-label`,
        tabindex: this.disabled ? void 0 : 0
      }, this.label !== void 0 ? h("div", {
        class: `${s}-base-selection-input`,
        title: Ra(this.label),
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
      }, this.placeholder)), x);
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
} = fn;
function db({
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
 opacity ${e} ${Qt},
 max-width ${e} ${Qt} ${n},
 margin-left ${e} ${Qt} ${n},
 margin-right ${e} ${Qt} ${n};
 `), D("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${e} ${Qt} ${n},
 max-width ${e} ${Qt},
 margin-left ${e} ${Qt},
 margin-right ${e} ${Qt};
 `)];
}
const {
  cubicBezierEaseInOut: Pt,
  cubicBezierEaseOut: cb,
  cubicBezierEaseIn: fb
} = fn;
function Lu({
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
 opacity ${n} ${cb} ${o},
 margin-top ${n} ${Pt} ${o},
 margin-bottom ${n} ${Pt} ${o},
 padding-top ${n} ${Pt} ${o},
 padding-bottom ${n} ${Pt} ${o}
 ${r ? `,${r}` : ""}
 `), D(`&.fade-in-height-expand-transition-${u}-active`, `
 overflow: ${e};
 transition:
 max-height ${n} ${Pt},
 opacity ${n} ${fb},
 margin-top ${n} ${Pt},
 margin-bottom ${n} ${Pt},
 padding-top ${n} ${Pt},
 padding-bottom ${n} ${Pt}
 ${r ? `,${r}` : ""}
 `)];
}
function Fo(e) {
  return e.type === "group";
}
function Nu(e) {
  return e.type === "ignored";
}
function vi(e, n) {
  try {
    return !!(1 + n.toString().toLowerCase().indexOf(e.trim().toLowerCase()));
  } catch {
    return !1;
  }
}
function hb(e, n) {
  return {
    getIsGroup: Fo,
    getIgnored: Nu,
    getKey(o) {
      return Fo(o) ? o.name || o.key || "key-required" : o[e];
    },
    getChildren(o) {
      return o[n];
    }
  };
}
function vb(e, n, r, o) {
  if (!n) return e;
  function i(a) {
    if (!Array.isArray(a)) return [];
    const l = [];
    for (const s of a)
      if (Fo(s)) {
        const u = i(s[o]);
        u.length && l.push(Object.assign({}, s, {
          [o]: u
        }));
      } else {
        if (Nu(s))
          continue;
        n(r, s) && l.push(s);
      }
    return l;
  }
  return i(e);
}
function pb(e, n, r) {
  const o = /* @__PURE__ */ new Map();
  return e.forEach((i) => {
    Fo(i) ? i[r].forEach((a) => {
      o.set(a[n], a);
    }) : o.set(i[n], i);
  }), o;
}
const gb = er && "chrome" in window;
er && navigator.userAgent.includes("Firefox");
const Hu = er && navigator.userAgent.includes("Safari") && !gb, xb = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function mb(e) {
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
    fontSizeTiny: x,
    fontSizeSmall: b,
    fontSizeMedium: g,
    fontSizeLarge: w,
    heightTiny: A,
    heightSmall: y,
    heightMedium: S,
    heightLarge: T,
    actionColor: C,
    clearColor: P,
    clearColorHover: M,
    clearColorPressed: _,
    placeholderColor: K,
    placeholderColorDisabled: H,
    iconColor: t,
    iconColorDisabled: F,
    iconColorHover: $,
    iconColorPressed: L
  } = e;
  return Object.assign(Object.assign({}, xb), {
    countTextColorDisabled: o,
    countTextColor: r,
    heightTiny: A,
    heightSmall: y,
    heightMedium: S,
    heightLarge: T,
    fontSizeTiny: x,
    fontSizeSmall: b,
    fontSizeMedium: g,
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
    boxShadowFocus: `0 0 0 2px ${me(i, {
      alpha: 0.2
    })}`,
    loadingColor: i,
    // warning
    loadingColorWarning: d,
    borderWarning: `1px solid ${d}`,
    borderHoverWarning: `1px solid ${c}`,
    colorFocusWarning: l,
    borderFocusWarning: `1px solid ${c}`,
    boxShadowFocusWarning: `0 0 0 2px ${me(d, {
      alpha: 0.2
    })}`,
    caretColorWarning: d,
    // error
    loadingColorError: f,
    borderError: `1px solid ${f}`,
    borderHoverError: `1px solid ${p}`,
    colorFocusError: l,
    borderFocusError: `1px solid ${p}`,
    boxShadowFocusError: `0 0 0 2px ${me(f, {
      alpha: 0.2
    })}`,
    caretColorError: f,
    clearColor: P,
    clearColorHover: M,
    clearColorPressed: _,
    iconColor: t,
    iconColorDisabled: F,
    iconColorHover: $,
    iconColorPressed: L,
    suffixTextColor: n
  });
}
const ju = {
  name: "Input",
  common: He,
  self: mb
}, Wu = "n-input";
function bb(e) {
  let n = 0;
  for (const r of e)
    n++;
  return n;
}
function no(e) {
  return e === "" || e == null;
}
function Cb(e) {
  const n = I(null);
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
  return ke(e, i), {
    recordCursor: r,
    restoreCursor: o
  };
}
const Yl = J({
  name: "InputWordCount",
  setup(e, {
    slots: n
  }) {
    const {
      mergedValueRef: r,
      maxlengthRef: o,
      mergedClsPrefixRef: i,
      countGraphemesRef: a
    } = fe(Wu), l = O(() => {
      const {
        value: s
      } = r;
      return s === null || Array.isArray(s) ? 0 : (a.value || bb)(s);
    });
    return () => {
      const {
        value: s
      } = o, {
        value: u
      } = r;
      return h("span", {
        class: `${i.value}-input-word-count`
      }, bi(n.default, {
        value: u === null || Array.isArray(u) ? "" : u
      }, () => [s === void 0 ? l.value : `${l.value} / ${s}`]));
    };
  }
}), yb = k("input", `
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
]), wb = k("input", [N("disabled", [z("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]), Bb = Object.assign(Object.assign({}, se.props), {
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
}), Sb = J({
  name: "Input",
  props: Bb,
  setup(e) {
    process.env.NODE_ENV !== "production" && ot(() => {
      e.showPasswordToggle && at("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: n,
      mergedBorderedRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = se("Input", "-input", yb, ju, e, n);
    Hu && zn("-input-safari", wb, n);
    const l = I(null), s = I(null), u = I(null), d = I(null), c = I(null), f = I(null), p = I(null), m = Cb(p), v = I(null), {
      localeRef: x
    } = Pr("Input"), b = I(e.defaultValue), g = le(e, "value"), w = Yn(g, b), A = ia(e), {
      mergedSizeRef: y,
      mergedDisabledRef: S,
      mergedStatusRef: T
    } = A, C = I(!1), P = I(!1), M = I(!1), _ = I(!1);
    let K = null;
    const H = O(() => {
      const {
        placeholder: E,
        pair: q
      } = e;
      return q ? Array.isArray(E) ? E : E === void 0 ? ["", ""] : [E, E] : E === void 0 ? [x.value.placeholder] : [E];
    }), t = O(() => {
      const {
        value: E
      } = M, {
        value: q
      } = w, {
        value: ue
      } = H;
      return !E && (no(q) || Array.isArray(q) && no(q[0])) && ue[0];
    }), F = O(() => {
      const {
        value: E
      } = M, {
        value: q
      } = w, {
        value: ue
      } = H;
      return !E && ue[1] && (no(q) || Array.isArray(q) && no(q[1]));
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
    }), V = I(!1), Q = O(() => {
      const {
        textDecoration: E
      } = e;
      return E ? Array.isArray(E) ? E.map((q) => ({
        textDecoration: q
      })) : [{
        textDecoration: E
      }] : ["", ""];
    }), Z = I(void 0), re = () => {
      var E, q;
      if (e.type === "textarea") {
        const {
          autosize: ue
        } = e;
        if (ue && (Z.value = (q = (E = v.value) === null || E === void 0 ? void 0 : E.$el) === null || q === void 0 ? void 0 : q.offsetWidth), !s.value || typeof ue == "boolean") return;
        const {
          paddingTop: $e,
          paddingBottom: Ie,
          lineHeight: Pe
        } = window.getComputedStyle(s.value), _t = Number($e.slice(0, -2)), Lt = Number(Ie.slice(0, -2)), Nt = Number(Pe.slice(0, -2)), {
          value: vn
        } = u;
        if (!vn) return;
        if (ue.minRows) {
          const pn = Math.max(ue.minRows, 1), or = `${_t + Lt + Nt * pn}px`;
          vn.style.minHeight = or;
        }
        if (ue.maxRows) {
          const pn = `${_t + Lt + Nt * ue.maxRows}px`;
          vn.style.maxHeight = pn;
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
      Array.isArray(E) || ze(E);
    });
    const G = kr().proxy;
    function ne(E, q) {
      const {
        onUpdateValue: ue,
        "onUpdate:value": $e,
        onInput: Ie
      } = e, {
        nTriggerFormInput: Pe
      } = A;
      ue && ve(ue, E, q), $e && ve($e, E, q), Ie && ve(Ie, E, q), b.value = E, Pe();
    }
    function Be(E, q) {
      const {
        onChange: ue
      } = e, {
        nTriggerFormChange: $e
      } = A;
      ue && ve(ue, E, q), b.value = E, $e();
    }
    function oe(E) {
      const {
        onBlur: q
      } = e, {
        nTriggerFormBlur: ue
      } = A;
      q && ve(q, E), ue();
    }
    function pe(E) {
      const {
        onFocus: q
      } = e, {
        nTriggerFormFocus: ue
      } = A;
      q && ve(q, E), ue();
    }
    function Me(E) {
      const {
        onClear: q
      } = e;
      q && ve(q, E);
    }
    function ae(E) {
      const {
        onInputBlur: q
      } = e;
      q && ve(q, E);
    }
    function We(E) {
      const {
        onInputFocus: q
      } = e;
      q && ve(q, E);
    }
    function Te() {
      const {
        onDeactivate: E
      } = e;
      E && ve(E);
    }
    function be() {
      const {
        onActivate: E
      } = e;
      E && ve(E);
    }
    function Se(E) {
      const {
        onClick: q
      } = e;
      q && ve(q, E);
    }
    function Ce(E) {
      const {
        onWrapperFocus: q
      } = e;
      q && ve(q, E);
    }
    function et(E) {
      const {
        onWrapperBlur: q
      } = e;
      q && ve(q, E);
    }
    function it() {
      M.value = !0;
    }
    function dt(E) {
      M.value = !1, E.target === f.value ? lt(E, 1) : lt(E, 0);
    }
    function lt(E, q = 0, ue = "input") {
      const $e = E.target.value;
      if (ze($e), E instanceof InputEvent && !E.isComposing && (M.value = !1), e.type === "textarea") {
        const {
          value: Pe
        } = v;
        Pe && Pe.syncUnifiedContainer();
      }
      if (K = $e, M.value) return;
      m.recordCursor();
      const Ie = wt($e);
      if (Ie)
        if (!e.pair)
          ue === "input" ? ne($e, {
            source: q
          }) : Be($e, {
            source: q
          });
        else {
          let {
            value: Pe
          } = w;
          Array.isArray(Pe) ? Pe = [Pe[0], Pe[1]] : Pe = ["", ""], Pe[q] = $e, ue === "input" ? ne(Pe, {
            source: q
          }) : Be(Pe, {
            source: q
          });
        }
      G.$forceUpdate(), Ie || Ze(m.restoreCursor);
    }
    function wt(E) {
      const {
        countGraphemes: q,
        maxlength: ue,
        minlength: $e
      } = e;
      if (q) {
        let Pe;
        if (ue !== void 0 && (Pe === void 0 && (Pe = q(E)), Pe > Number(ue)) || $e !== void 0 && (Pe === void 0 && (Pe = q(E)), Pe < Number(ue)))
          return !1;
      }
      const {
        allowInput: Ie
      } = e;
      return typeof Ie == "function" ? Ie(E) : !0;
    }
    function Fe(E) {
      ae(E), E.relatedTarget === l.value && Te(), E.relatedTarget !== null && (E.relatedTarget === c.value || E.relatedTarget === f.value || E.relatedTarget === s.value) || (_.value = !1), Y(E, "blur"), p.value = null;
    }
    function Ee(E, q) {
      We(E), C.value = !0, _.value = !0, be(), Y(E, "focus"), q === 0 ? p.value = c.value : q === 1 ? p.value = f.value : q === 2 && (p.value = s.value);
    }
    function Ye(E) {
      e.passivelyActivated && (et(E), Y(E, "blur"));
    }
    function Ke(E) {
      e.passivelyActivated && (C.value = !0, Ce(E), Y(E, "focus"));
    }
    function Y(E, q) {
      E.relatedTarget !== null && (E.relatedTarget === c.value || E.relatedTarget === f.value || E.relatedTarget === s.value || E.relatedTarget === l.value) || (q === "focus" ? (pe(E), C.value = !0) : q === "blur" && (oe(E), C.value = !1));
    }
    function ee(E, q) {
      lt(E, q, "change");
    }
    function Re(E) {
      Se(E);
    }
    function hn(E) {
      Me(E), Ot();
    }
    function Ot() {
      e.pair ? (ne(["", ""], {
        source: "clear"
      }), Be(["", ""], {
        source: "clear"
      })) : (ne("", {
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
        tagName: ue
      } = E.target;
      if (ue !== "INPUT" && ue !== "TEXTAREA") {
        if (e.resizable) {
          const {
            value: $e
          } = l;
          if ($e) {
            const {
              left: Ie,
              top: Pe,
              width: _t,
              height: Lt
            } = $e.getBoundingClientRect(), Nt = 14;
            if (Ie + _t - Nt < E.clientX && E.clientX < Ie + _t && Pe + Lt - Nt < E.clientY && E.clientY < Pe + Lt)
              return;
          }
        }
        E.preventDefault(), C.value || X();
      }
    }
    function Xt() {
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
    function Yt(E) {
      if (S.value) return;
      E.preventDefault();
      const q = ($e) => {
        $e.preventDefault(), De("mouseup", document, q);
      };
      if (Le("mouseup", document, q), R.value !== "mousedown") return;
      V.value = !0;
      const ue = () => {
        V.value = !1, De("mouseup", document, ue);
      };
      Le("mouseup", document, ue);
    }
    function ct(E) {
      e.onKeyup && ve(e.onKeyup, E);
    }
    function Bt(E) {
      switch (e.onKeydown && ve(e.onKeydown, E), E.key) {
        case "Escape":
          j();
          break;
        case "Enter":
          B(E);
          break;
      }
    }
    function B(E) {
      var q, ue;
      if (e.passivelyActivated) {
        const {
          value: $e
        } = _;
        if ($e) {
          e.internalDeactivateOnEnter && j();
          return;
        }
        E.preventDefault(), e.type === "textarea" ? (q = s.value) === null || q === void 0 || q.focus() : (ue = c.value) === null || ue === void 0 || ue.focus();
      }
    }
    function j() {
      e.passivelyActivated && (_.value = !1, Ze(() => {
        var E;
        (E = l.value) === null || E === void 0 || E.focus();
      }));
    }
    function X() {
      var E, q, ue;
      S.value || (e.passivelyActivated ? (E = l.value) === null || E === void 0 || E.focus() : ((q = s.value) === null || q === void 0 || q.focus(), (ue = c.value) === null || ue === void 0 || ue.focus()));
    }
    function te() {
      var E;
      !((E = l.value) === null || E === void 0) && E.contains(document.activeElement) && document.activeElement.blur();
    }
    function ie() {
      var E, q;
      (E = s.value) === null || E === void 0 || E.select(), (q = c.value) === null || q === void 0 || q.select();
    }
    function ce() {
      S.value || (s.value ? s.value.focus() : c.value && c.value.focus());
    }
    function he() {
      const {
        value: E
      } = l;
      E != null && E.contains(document.activeElement) && E !== document.activeElement && j();
    }
    function ge(E) {
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
    function ze(E) {
      const {
        type: q,
        pair: ue,
        autosize: $e
      } = e;
      if (!ue && $e)
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
      re();
    }
    const kn = I({
      top: "0"
    });
    function Wo(E) {
      var q;
      const {
        scrollTop: ue
      } = E.target;
      kn.value.top = `${-ue}px`, (q = v.value) === null || q === void 0 || q.syncUnifiedContainer();
    }
    let Tn = null;
    ot(() => {
      const {
        autosize: E,
        type: q
      } = e;
      E && q === "textarea" ? Tn = ke(w, (ue) => {
        !Array.isArray(ue) && ue !== K && ze(ue);
      }) : Tn == null || Tn();
    });
    let Rn = null;
    ot(() => {
      e.type === "textarea" ? Rn = ke(w, (E) => {
        var q;
        !Array.isArray(E) && E !== K && ((q = v.value) === null || q === void 0 || q.syncUnifiedContainer());
      }) : Rn == null || Rn();
    }), xe(Wu, {
      mergedValueRef: w,
      maxlengthRef: W,
      mergedClsPrefixRef: n,
      countGraphemesRef: le(e, "countGraphemes")
    });
    const Vo = {
      wrapperElRef: l,
      inputElRef: c,
      textareaElRef: s,
      isCompositing: M,
      clear: Ot,
      focus: X,
      blur: te,
      select: ie,
      deactivate: he,
      activate: ce,
      scrollTo: ge
    }, qo = gt("Input", i, n), Vr = O(() => {
      const {
        value: E
      } = y, {
        common: {
          cubicBezierEaseInOut: q
        },
        self: {
          color: ue,
          borderRadius: $e,
          textColor: Ie,
          caretColor: Pe,
          caretColorError: _t,
          caretColorWarning: Lt,
          textDecorationColor: Nt,
          border: vn,
          borderDisabled: pn,
          borderHover: or,
          borderFocus: Ko,
          placeholderColor: Uo,
          placeholderColorDisabled: Go,
          lineHeightTextarea: Xo,
          colorDisabled: On,
          colorFocus: Mn,
          textColorDisabled: yd,
          boxShadowFocus: wd,
          iconSize: Bd,
          colorFocusWarning: Sd,
          boxShadowFocusWarning: Ad,
          borderWarning: Fd,
          borderFocusWarning: Pd,
          borderHoverWarning: $d,
          colorFocusError: Dd,
          boxShadowFocusError: Ed,
          borderError: zd,
          borderFocusError: kd,
          borderHoverError: Td,
          clearSize: Rd,
          clearColor: Od,
          clearColorHover: Md,
          clearColorPressed: Id,
          iconColor: _d,
          iconColorDisabled: Ld,
          suffixTextColor: Nd,
          countTextColor: Hd,
          countTextColorDisabled: jd,
          iconColorHover: Wd,
          iconColorPressed: Vd,
          loadingColor: qd,
          loadingColorError: Kd,
          loadingColorWarning: Ud,
          [U("padding", E)]: Gd,
          [U("fontSize", E)]: Xd,
          [U("height", E)]: Yd
        }
      } = a.value, {
        left: Zd,
        right: Jd
      } = St(Gd);
      return {
        "--n-bezier": q,
        "--n-count-text-color": Hd,
        "--n-count-text-color-disabled": jd,
        "--n-color": ue,
        "--n-font-size": Xd,
        "--n-border-radius": $e,
        "--n-height": Yd,
        "--n-padding-left": Zd,
        "--n-padding-right": Jd,
        "--n-text-color": Ie,
        "--n-caret-color": Pe,
        "--n-text-decoration-color": Nt,
        "--n-border": vn,
        "--n-border-disabled": pn,
        "--n-border-hover": or,
        "--n-border-focus": Ko,
        "--n-placeholder-color": Uo,
        "--n-placeholder-color-disabled": Go,
        "--n-icon-size": Bd,
        "--n-line-height-textarea": Xo,
        "--n-color-disabled": On,
        "--n-color-focus": Mn,
        "--n-text-color-disabled": yd,
        "--n-box-shadow-focus": wd,
        "--n-loading-color": qd,
        // form warning
        "--n-caret-color-warning": Lt,
        "--n-color-focus-warning": Sd,
        "--n-box-shadow-focus-warning": Ad,
        "--n-border-warning": Fd,
        "--n-border-focus-warning": Pd,
        "--n-border-hover-warning": $d,
        "--n-loading-color-warning": Ud,
        // form error
        "--n-caret-color-error": _t,
        "--n-color-focus-error": Dd,
        "--n-box-shadow-focus-error": Ed,
        "--n-border-error": zd,
        "--n-border-focus-error": kd,
        "--n-border-hover-error": Td,
        "--n-loading-color-error": Kd,
        // clear-button
        "--n-clear-color": Od,
        "--n-clear-size": Rd,
        "--n-clear-color-hover": Md,
        "--n-clear-color-pressed": Id,
        "--n-icon-color": _d,
        "--n-icon-color-hover": Wd,
        "--n-icon-color-pressed": Vd,
        "--n-icon-color-disabled": Ld,
        "--n-suffix-text-color": Nd
      };
    }), Zt = o ? Ne("input", O(() => {
      const {
        value: E
      } = y;
      return E[0];
    }), Vr, e) : void 0;
    return Object.assign(Object.assign({}, Vo), {
      // DOM ref
      wrapperElRef: l,
      inputElRef: c,
      inputMirrorElRef: d,
      inputEl2Ref: f,
      textareaElRef: s,
      textareaMirrorElRef: u,
      textareaScrollbarInstRef: v,
      // value
      rtlEnabled: qo,
      uncontrolledValue: b,
      mergedValue: w,
      passwordVisible: V,
      mergedPlaceholder: H,
      showPlaceholder1: t,
      showPlaceholder2: F,
      mergedFocus: $,
      isComposing: M,
      activated: _,
      showClearButton: L,
      mergedSize: y,
      mergedDisabled: S,
      textDecorationStyle: Q,
      mergedClsPrefix: n,
      mergedBordered: r,
      mergedShowPasswordOn: R,
      placeholderStyle: kn,
      mergedStatus: T,
      textAreaScrollContainerWidth: Z,
      // methods
      handleTextAreaScroll: Wo,
      handleCompositionStart: it,
      handleCompositionEnd: dt,
      handleInput: lt,
      handleInputBlur: Fe,
      handleInputFocus: Ee,
      handleWrapperBlur: Ye,
      handleWrapperFocus: Ke,
      handleMouseEnter: Xt,
      handleMouseLeave: At,
      handleMouseDown: Mt,
      handleChange: ee,
      handleClick: Re,
      handleClear: hn,
      handlePasswordToggleClick: It,
      handlePasswordToggleMousedown: Yt,
      handleWrapperKeydown: Bt,
      handleWrapperKeyup: ct,
      handleTextAreaMirrorResize: xt,
      getTextareaScrollContainer: () => s.value,
      mergedTheme: a,
      cssVars: o ? void 0 : Vr,
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
    }, d)), a === "textarea" ? h(Lr, {
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
        return h(Je, null, h("textarea", Object.assign({}, this.inputProps, {
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
        }, this.mergedPlaceholder[0]) : null, this.autosize ? h(Br, {
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
    }, [_e(u["clear-icon-placeholder"], (c) => (this.clearable || c) && h(Ii, {
      clsPrefix: r,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => c,
      icon: () => {
        var f, p;
        return (p = (f = this.$slots)["clear-icon"]) === null || p === void 0 ? void 0 : p.call(f);
      }
    })), this.internalLoadingBeforeSuffix ? null : d, this.loading !== void 0 ? h(Iu, {
      clsPrefix: r,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? d : null, this.showCount && this.type !== "textarea" ? h(Yl, null, {
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
      default: () => h(qx, null)
    })]) : Et(u["password-invisible-icon"], () => [h(yt, {
      clsPrefix: r
    }, {
      default: () => h(Kx, null)
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
    }, [this.clearable && h(Ii, {
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
    }) : null, this.showCount && a === "textarea" ? h(Yl, null, {
      default: (d) => {
        var c;
        const {
          renderCount: f
        } = this;
        return f ? f(d) : (c = u.count) === null || c === void 0 ? void 0 : c.call(u, d);
      }
    }) : null);
  }
}), Ab = k("input-group", `
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
 `)])])])])])]), Fb = {}, Pb = J({
  name: "InputGroup",
  props: Fb,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Ae(e);
    return zn("-input-group", Ab, n), {
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
}), $b = k("input-group-label", `
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
 `)]), Db = Object.assign(Object.assign({}, se.props), {
  size: {
    type: String,
    default: "medium"
  },
  bordered: {
    type: Boolean,
    default: void 0
  }
}), Eb = J({
  name: "InputGroupLabel",
  props: Db,
  setup(e) {
    const {
      mergedBorderedRef: n,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = se("Input", "-input-group-label", $b, ju, e, r), a = O(() => {
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
          [U("height", s)]: x
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
        "--n-height": x
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
function gn(e) {
  return ft(e, [255, 255, 255, 0.16]);
}
function ro(e) {
  return ft(e, [0, 0, 0, 0.12]);
}
const zb = "n-button-group", kb = {
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
function Tb(e) {
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
    borderColor: x,
    primaryColor: b,
    baseColor: g,
    infoColor: w,
    infoColorHover: A,
    infoColorPressed: y,
    successColor: S,
    successColorHover: T,
    successColorPressed: C,
    warningColor: P,
    warningColorHover: M,
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
  return Object.assign(Object.assign({}, kb), {
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
    border: `1px solid ${x}`,
    borderHover: `1px solid ${m}`,
    borderPressed: `1px solid ${v}`,
    borderFocus: `1px solid ${m}`,
    borderDisabled: `1px solid ${x}`,
    rippleColor: b,
    // primary
    colorPrimary: b,
    colorHoverPrimary: m,
    colorPressedPrimary: v,
    colorFocusPrimary: m,
    colorDisabledPrimary: b,
    textColorPrimary: g,
    textColorHoverPrimary: g,
    textColorPressedPrimary: g,
    textColorFocusPrimary: g,
    textColorDisabledPrimary: g,
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
    textColorInfo: g,
    textColorHoverInfo: g,
    textColorPressedInfo: g,
    textColorFocusInfo: g,
    textColorDisabledInfo: g,
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
    textColorSuccess: g,
    textColorHoverSuccess: g,
    textColorPressedSuccess: g,
    textColorFocusSuccess: g,
    textColorDisabledSuccess: g,
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
    colorHoverWarning: M,
    colorPressedWarning: _,
    colorFocusWarning: M,
    colorDisabledWarning: P,
    textColorWarning: g,
    textColorHoverWarning: g,
    textColorPressedWarning: g,
    textColorFocusWarning: g,
    textColorDisabledWarning: g,
    textColorTextWarning: P,
    textColorTextHoverWarning: M,
    textColorTextPressedWarning: _,
    textColorTextFocusWarning: M,
    textColorTextDisabledWarning: f,
    textColorGhostWarning: P,
    textColorGhostHoverWarning: M,
    textColorGhostPressedWarning: _,
    textColorGhostFocusWarning: M,
    textColorGhostDisabledWarning: P,
    borderWarning: `1px solid ${P}`,
    borderHoverWarning: `1px solid ${M}`,
    borderPressedWarning: `1px solid ${_}`,
    borderFocusWarning: `1px solid ${M}`,
    borderDisabledWarning: `1px solid ${P}`,
    rippleColorWarning: P,
    // error
    colorError: K,
    colorHoverError: H,
    colorPressedError: t,
    colorFocusError: H,
    colorDisabledError: K,
    textColorError: g,
    textColorHoverError: g,
    textColorPressedError: g,
    textColorFocusError: g,
    textColorDisabledError: g,
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
const Ba = {
  name: "Button",
  common: He,
  self: Tb
}, Rb = D([k("button", `
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
})]), er && "MozBoxSizing" in document.createElement("div").style ? D("&::moz-focus-inner", {
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
 `, [$r({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), db()]), z("content", `
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
})]), Ob = Object.assign(Object.assign({}, se.props), {
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
    default: !Hu
  }
}), Dr = J({
  name: "Button",
  props: Ob,
  setup(e) {
    process.env.NODE_ENV !== "production" && ot(() => {
      const {
        dashed: y,
        ghost: S,
        text: T,
        secondary: C,
        tertiary: P,
        quaternary: M
      } = e;
      (y || S || T) && (C || P || M) && at("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const n = I(null), r = I(null), o = I(!1), i = qe(() => !e.quaternary && !e.tertiary && !e.secondary && !e.text && (!e.color || e.ghost || e.dashed) && e.bordered), a = fe(zb, {}), {
      mergedSizeRef: l
    } = ia({}, {
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
        T && ve(T, y), e.text || (S = r.value) === null || S === void 0 || S.play();
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
      mergedRtlRef: x
    } = Ae(e), b = se("Button", "-button", Rb, Ba, e, v), g = gt("Button", x, v), w = O(() => {
      const y = b.value, {
        common: {
          cubicBezierEaseInOut: S,
          cubicBezierEaseOut: T
        },
        self: C
      } = y, {
        rippleDuration: P,
        opacityDisabled: M,
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
        secondary: re,
        tertiary: W,
        quaternary: G,
        strong: ne
      } = e, Be = {
        "--n-font-weight": ne ? K : _
      };
      let oe = {
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
      const pe = F === "tertiary", Me = F === "default", ae = pe ? "default" : F;
      if (L) {
        const Fe = Z || R;
        oe = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": Fe || C[U("textColorText", ae)],
          "--n-text-color-hover": Fe ? gn(Fe) : C[U("textColorTextHover", ae)],
          "--n-text-color-pressed": Fe ? ro(Fe) : C[U("textColorTextPressed", ae)],
          "--n-text-color-focus": Fe ? gn(Fe) : C[U("textColorTextHover", ae)],
          "--n-text-color-disabled": Fe || C[U("textColorTextDisabled", ae)]
        };
      } else if ($ || t) {
        const Fe = Z || R;
        oe = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": R || C[U("rippleColor", ae)],
          "--n-text-color": Fe || C[U("textColorGhost", ae)],
          "--n-text-color-hover": Fe ? gn(Fe) : C[U("textColorGhostHover", ae)],
          "--n-text-color-pressed": Fe ? ro(Fe) : C[U("textColorGhostPressed", ae)],
          "--n-text-color-focus": Fe ? gn(Fe) : C[U("textColorGhostHover", ae)],
          "--n-text-color-disabled": Fe || C[U("textColorGhostDisabled", ae)]
        };
      } else if (re) {
        const Fe = Me ? C.textColor : pe ? C.textColorTertiary : C[U("color", ae)], Ee = R || Fe, Ye = F !== "default" && F !== "tertiary";
        oe = {
          "--n-color": Ye ? me(Ee, {
            alpha: Number(C.colorOpacitySecondary)
          }) : C.colorSecondary,
          "--n-color-hover": Ye ? me(Ee, {
            alpha: Number(C.colorOpacitySecondaryHover)
          }) : C.colorSecondaryHover,
          "--n-color-pressed": Ye ? me(Ee, {
            alpha: Number(C.colorOpacitySecondaryPressed)
          }) : C.colorSecondaryPressed,
          "--n-color-focus": Ye ? me(Ee, {
            alpha: Number(C.colorOpacitySecondaryHover)
          }) : C.colorSecondaryHover,
          "--n-color-disabled": C.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": Ee,
          "--n-text-color-hover": Ee,
          "--n-text-color-pressed": Ee,
          "--n-text-color-focus": Ee,
          "--n-text-color-disabled": Ee
        };
      } else if (W || G) {
        const Fe = Me ? C.textColor : pe ? C.textColorTertiary : C[U("color", ae)], Ee = R || Fe;
        W ? (oe["--n-color"] = C.colorTertiary, oe["--n-color-hover"] = C.colorTertiaryHover, oe["--n-color-pressed"] = C.colorTertiaryPressed, oe["--n-color-focus"] = C.colorSecondaryHover, oe["--n-color-disabled"] = C.colorTertiary) : (oe["--n-color"] = C.colorQuaternary, oe["--n-color-hover"] = C.colorQuaternaryHover, oe["--n-color-pressed"] = C.colorQuaternaryPressed, oe["--n-color-focus"] = C.colorQuaternaryHover, oe["--n-color-disabled"] = C.colorQuaternary), oe["--n-ripple-color"] = "#0000", oe["--n-text-color"] = Ee, oe["--n-text-color-hover"] = Ee, oe["--n-text-color-pressed"] = Ee, oe["--n-text-color-focus"] = Ee, oe["--n-text-color-disabled"] = Ee;
      } else
        oe = {
          "--n-color": R || C[U("color", ae)],
          "--n-color-hover": R ? gn(R) : C[U("colorHover", ae)],
          "--n-color-pressed": R ? ro(R) : C[U("colorPressed", ae)],
          "--n-color-focus": R ? gn(R) : C[U("colorFocus", ae)],
          "--n-color-disabled": R || C[U("colorDisabled", ae)],
          "--n-ripple-color": R || C[U("rippleColor", ae)],
          "--n-text-color": Z || (R ? C.textColorPrimary : pe ? C.textColorTertiary : C[U("textColor", ae)]),
          "--n-text-color-hover": Z || (R ? C.textColorHoverPrimary : C[U("textColorHover", ae)]),
          "--n-text-color-pressed": Z || (R ? C.textColorPressedPrimary : C[U("textColorPressed", ae)]),
          "--n-text-color-focus": Z || (R ? C.textColorFocusPrimary : C[U("textColorFocus", ae)]),
          "--n-text-color-disabled": Z || (R ? C.textColorDisabledPrimary : C[U("textColorDisabled", ae)])
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
        "--n-border": C[U("border", ae)],
        "--n-border-hover": C[U("borderHover", ae)],
        "--n-border-pressed": C[U("borderPressed", ae)],
        "--n-border-focus": C[U("borderFocus", ae)],
        "--n-border-disabled": C[U("borderDisabled", ae)]
      };
      const {
        [U("height", H)]: Te,
        [U("fontSize", H)]: be,
        [U("padding", H)]: Se,
        [U("paddingRound", H)]: Ce,
        [U("iconSize", H)]: et,
        [U("borderRadius", H)]: it,
        [U("iconMargin", H)]: dt,
        waveOpacity: lt
      } = C, wt = {
        "--n-width": Q && !L ? Te : "initial",
        "--n-height": L ? "initial" : Te,
        "--n-font-size": be,
        "--n-padding": Q || L ? "initial" : V ? Ce : Se,
        "--n-icon-size": et,
        "--n-icon-margin": dt,
        "--n-border-radius": L ? "initial" : Q || V ? Te : it
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": S,
        "--n-bezier-ease-out": T,
        "--n-ripple-duration": P,
        "--n-opacity-disabled": M,
        "--n-wave-opacity": lt
      }, Be), oe), We), wt);
    }), A = m ? Ne("button", O(() => {
      let y = "";
      const {
        dashed: S,
        type: T,
        ghost: C,
        text: P,
        color: M,
        round: _,
        circle: K,
        textColor: H,
        secondary: t,
        tertiary: F,
        quaternary: $,
        strong: L
      } = e;
      S && (y += "a"), C && (y += "b"), P && (y += "c"), _ && (y += "d"), K && (y += "e"), t && (y += "f"), F && (y += "g"), $ && (y += "h"), L && (y += "i"), M && (y += `j${po(M)}`), H && (y += `k${po(H)}`);
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
      rtlEnabled: g,
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
        const S = gn(y);
        return {
          "--n-border-color": y,
          "--n-border-color-hover": S,
          "--n-border-color-pressed": ro(y),
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
    }, this.iconPlacement === "right" && o, h(ya, {
      width: !0
    }, {
      default: () => _e(this.$slots.icon, (i) => (this.loading || this.renderIcon || i) && h("span", {
        class: `${e}-button__icon`,
        style: {
          margin: Ci(this.$slots.default) ? "0" : ""
        }
      }, h(Mo, null, {
        default: () => this.loading ? h(_r, {
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
    }), this.iconPlacement === "left" && o, this.text ? null : h(Wm, {
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
}), Mb = {
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
function Ib(e) {
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
    modalColor: x,
    boxShadow1: b,
    popoverColor: g,
    actionColor: w
  } = e;
  return Object.assign(Object.assign({}, Mb), {
    lineHeight: o,
    color: a,
    colorModal: x,
    colorPopover: g,
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
const Vu = {
  name: "Card",
  common: He,
  self: Ib
}, _b = D([k("card", `
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
 `, [Fs({
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
 `)]), Ui(k("card", `
 background: var(--n-color-modal);
 `, [N("embedded", `
 background-color: var(--n-color-embedded-modal);
 `)])), As(k("card", `
 background: var(--n-color-popover);
 `, [N("embedded", `
 background-color: var(--n-color-embedded-popover);
 `)]))]), Sa = {
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
}, Lb = Sn(Sa), Nb = Object.assign(Object.assign({}, se.props), Sa), Hb = J({
  name: "Card",
  props: Nb,
  setup(e) {
    const n = () => {
      const {
        onClose: d
      } = e;
      d && ve(d);
    }, {
      inlineThemeDisabled: r,
      mergedClsPrefixRef: o,
      mergedRtlRef: i
    } = Ae(e), a = se("Card", "-card", _b, Vu, e, o), l = gt("Card", i, o), s = O(() => {
      const {
        size: d
      } = e, {
        self: {
          color: c,
          colorModal: f,
          colorTarget: p,
          textColor: m,
          titleTextColor: v,
          titleFontWeight: x,
          borderColor: b,
          actionColor: g,
          borderRadius: w,
          lineHeight: A,
          closeIconColor: y,
          closeIconColorHover: S,
          closeIconColorPressed: T,
          closeColorHover: C,
          closeColorPressed: P,
          closeBorderRadius: M,
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
        top: re,
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
        "--n-action-color": g,
        "--n-title-text-color": v,
        "--n-title-font-weight": x,
        "--n-close-icon-color": y,
        "--n-close-icon-color-hover": S,
        "--n-close-icon-color-pressed": T,
        "--n-close-color-hover": C,
        "--n-close-color-pressed": P,
        "--n-border-color": b,
        "--n-box-shadow": H,
        // size
        "--n-padding-top": re,
        "--n-padding-bottom": G,
        "--n-padding-left": W,
        "--n-font-size": V,
        "--n-title-font-size": Q,
        "--n-close-size": K,
        "--n-close-icon-size": _,
        "--n-close-border-radius": M
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
      }), this.closable && h(Ir, {
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
function jb(e) {
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
const Wb = {
  name: "Collapse",
  common: He,
  self: jb
}, Vb = k("collapse", "width: 100%;", [k("collapse-item", `
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
 `)])]), k("collapse-item", "margin-left: 32px;"), D("&:first-child", "margin-top: 0;"), D("&:first-child >", [z("header", "padding-top: 0;")]), N("left-arrow-placement", [z("header", [k("collapse-item-arrow", "margin-right: 4px;")])]), N("right-arrow-placement", [z("header", [k("collapse-item-arrow", "margin-left: 4px;")])]), z("content-wrapper", [z("content-inner", "padding-top: 16px;"), Lu({
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
 `)])])]), qb = Object.assign(Object.assign({}, se.props), {
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
}), qu = "n-collapse", Kb = J({
  name: "Collapse",
  props: qb,
  setup(e, {
    slots: n
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = I(e.defaultExpandedNames), l = O(() => e.expandedNames), s = Yn(l, a), u = se("Collapse", "-collapse", Vb, Wb, e, r);
    function d(x) {
      const {
        "onUpdate:expandedNames": b,
        onUpdateExpandedNames: g,
        onExpandedNamesChange: w
      } = e;
      g && ve(g, x), b && ve(b, x), w && ve(w, x), a.value = x;
    }
    function c(x) {
      const {
        onItemHeaderClick: b
      } = e;
      b && ve(b, x);
    }
    function f(x, b, g) {
      const {
        accordion: w
      } = e, {
        value: A
      } = s;
      if (w)
        x ? (d([b]), c({
          name: b,
          expanded: !0,
          event: g
        })) : (d([]), c({
          name: b,
          expanded: !1,
          event: g
        }));
      else if (!Array.isArray(A))
        d([b]), c({
          name: b,
          expanded: !0,
          event: g
        });
      else {
        const y = A.slice(), S = y.findIndex((T) => b === T);
        ~S ? (y.splice(S, 1), d(y), c({
          name: b,
          expanded: !1,
          event: g
        })) : (y.push(b), d(y), c({
          name: b,
          expanded: !0,
          event: g
        }));
      }
    }
    xe(qu, {
      props: e,
      mergedClsPrefixRef: r,
      expandedNamesRef: s,
      slots: n,
      toggleItem: f
    });
    const p = gt("Collapse", i, r), m = O(() => {
      const {
        common: {
          cubicBezierEaseInOut: x
        },
        self: {
          titleFontWeight: b,
          dividerColor: g,
          titlePadding: w,
          titleTextColor: A,
          titleTextColorDisabled: y,
          textColor: S,
          arrowColor: T,
          fontSize: C,
          titleFontSize: P,
          arrowColorDisabled: M,
          itemMargin: _
        }
      } = u.value;
      return {
        "--n-font-size": C,
        "--n-bezier": x,
        "--n-text-color": S,
        "--n-divider-color": g,
        "--n-title-padding": w,
        "--n-title-font-size": P,
        "--n-title-text-color": A,
        "--n-title-text-color-disabled": y,
        "--n-title-font-weight": b,
        "--n-arrow-color": T,
        "--n-arrow-color-disabled": M,
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
}), Ub = J({
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
      onceTrue: $s(le(e, "show"))
    };
  },
  render() {
    return h(ya, null, {
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
        return i ? kt(a, [[Gn, e]]) : e ? a : null;
      }
    });
  }
}), Gb = {
  title: String,
  name: [String, Number],
  disabled: Boolean,
  displayDirective: String
}, Xb = J({
  name: "CollapseItem",
  props: Gb,
  setup(e) {
    const {
      mergedRtlRef: n
    } = Ae(e), r = on(), o = qe(() => {
      var f;
      return (f = e.name) !== null && f !== void 0 ? f : r;
    }), i = fe(qu);
    i || dn("collapse-item", "`n-collapse-item` must be placed inside `n-collapse`.");
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
      triggerAreas: le(l, "triggerAreas"),
      mergedDisplayDirective: O(() => {
        const {
          displayDirective: f
        } = e;
        return f || l.displayDirective;
      }),
      arrowPlacement: O(() => l.arrowPlacement),
      handleClick(f) {
        let p = "main";
        Wt(f, "arrow") && (p = "arrow"), Wt(f, "extra") && (p = "extra"), l.triggerAreas.includes(p) && i && !e.disabled && i.toggleItem(d.value, o.value, f);
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
    } = this, u = bi(n.header, {
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
    }, bi(c, {
      collapsed: o
    }, () => {
      var f;
      return [h(yt, {
        clsPrefix: a
      }, {
        default: (f = e.expandIcon) !== null && f !== void 0 ? f : () => this.rtlEnabled ? h(Wx, null) : h(Fu, null)
      })];
    })), r === "left" && u), yc(d, {
      collapsed: o
    }, (f) => h("div", {
      class: `${a}-collapse-item__header-extra`,
      onClick: this.handleClick,
      "data-extra": !0
    }, f))), h(Ub, {
      clsPrefix: a,
      displayDirective: i,
      show: !o
    }, n));
  }
}), Yb = {
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
}, Ku = J({
  name: "ConfigProvider",
  alias: ["App"],
  props: Yb,
  setup(e) {
    const n = fe(Kt, null), r = O(() => {
      const {
        theme: x
      } = e;
      if (x === null) return;
      const b = n == null ? void 0 : n.mergedThemeRef.value;
      return x === void 0 ? b : b === void 0 ? x : Object.assign({}, b, x);
    }), o = O(() => {
      const {
        themeOverrides: x
      } = e;
      if (x !== null) {
        if (x === void 0)
          return n == null ? void 0 : n.mergedThemeOverridesRef.value;
        {
          const b = n == null ? void 0 : n.mergedThemeOverridesRef.value;
          return b === void 0 ? x : ur({}, b, x);
        }
      }
    }), i = qe(() => {
      const {
        namespace: x
      } = e;
      return x === void 0 ? n == null ? void 0 : n.mergedNamespaceRef.value : x;
    }), a = qe(() => {
      const {
        bordered: x
      } = e;
      return x === void 0 ? n == null ? void 0 : n.mergedBorderedRef.value : x;
    }), l = O(() => {
      const {
        icons: x
      } = e;
      return x === void 0 ? n == null ? void 0 : n.mergedIconsRef.value : x;
    }), s = O(() => {
      const {
        componentOptions: x
      } = e;
      return x !== void 0 ? x : n == null ? void 0 : n.mergedComponentPropsRef.value;
    }), u = O(() => {
      const {
        clsPrefix: x
      } = e;
      return x !== void 0 ? x : n ? n.mergedClsPrefixRef.value : Oi;
    }), d = O(() => {
      var x;
      const {
        rtl: b
      } = e;
      if (b === void 0)
        return n == null ? void 0 : n.mergedRtlRef.value;
      const g = {};
      for (const w of b)
        g[w.name] = Ea(w), (x = w.peers) === null || x === void 0 || x.forEach((A) => {
          A.name in g || (g[A.name] = Ea(A));
        });
      return g;
    }), c = O(() => e.breakpoints || (n == null ? void 0 : n.mergedBreakpointsRef.value)), f = e.inlineThemeDisabled || (n == null ? void 0 : n.inlineThemeDisabled), p = e.preflightStyleDisabled || (n == null ? void 0 : n.preflightStyleDisabled), m = e.styleMountTarget || (n == null ? void 0 : n.styleMountTarget), v = O(() => {
      const {
        value: x
      } = r, {
        value: b
      } = o, g = b && Object.keys(b).length !== 0, w = x == null ? void 0 : x.name;
      return w ? g ? `${w}-${br(JSON.stringify(o.value))}` : w : g ? br(JSON.stringify(o.value)) : "";
    });
    return xe(Kt, {
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
          locale: x
        } = e;
        if (x !== null)
          return x === void 0 ? n == null ? void 0 : n.mergedLocaleRef.value : x;
      }),
      mergedDateLocaleRef: O(() => {
        const {
          dateLocale: x
        } = e;
        if (x !== null)
          return x === void 0 ? n == null ? void 0 : n.mergedDateLocaleRef.value : x;
      }),
      mergedHljsRef: O(() => {
        const {
          hljs: x
        } = e;
        return x === void 0 ? n == null ? void 0 : n.mergedHljsRef.value : x;
      }),
      mergedKatexRef: O(() => {
        const {
          katex: x
        } = e;
        return x === void 0 ? n == null ? void 0 : n.mergedKatexRef.value : x;
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
      class: `${this.mergedClsPrefix || Oi}-config-provider`
    }, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e));
  }
});
function Zb(e) {
  const {
    boxShadow2: n
  } = e;
  return {
    menuBoxShadow: n
  };
}
const Jb = {
  name: "Select",
  common: He,
  peers: {
    InternalSelection: _u,
    InternalSelectMenu: Ru
  },
  self: Zb
}, Qb = D([k("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `), k("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [Lo({
  originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
})])]), e1 = Object.assign(Object.assign({}, se.props), {
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
}), t1 = J({
  name: "Select",
  props: e1,
  setup(e) {
    process.env.NODE_ENV !== "production" && ot(() => {
      e.items !== void 0 && at("select", "`items` is deprecated, please use `options` instead."), e.onChange !== void 0 && at("select", "`on-change` is deprecated, please use `on-update:value` instead.");
    });
    const {
      mergedClsPrefixRef: n,
      mergedBorderedRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = se("Select", "-select", Qb, Jb, e, n), l = I(e.defaultValue), s = le(e, "value"), u = Yn(s, l), d = I(!1), c = I(""), f = Yi(e, ["items", "options"]), p = I([]), m = I([]), v = O(() => m.value.concat(p.value).concat(f.value)), x = O(() => {
      const {
        filter: B
      } = e;
      if (B) return B;
      const {
        labelField: j,
        valueField: X
      } = e;
      return (te, ie) => {
        if (!ie) return !1;
        const ce = ie[j];
        if (typeof ce == "string")
          return vi(te, ce);
        const he = ie[X];
        return typeof he == "string" ? vi(te, he) : typeof he == "number" ? vi(te, String(he)) : !1;
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
        return !j.length || !e.filterable ? B : vb(B, x.value, j, e.childrenField);
      }
    }), g = O(() => {
      const {
        valueField: B,
        childrenField: j
      } = e, X = hb(B, j);
      return Du(b.value, X);
    }), w = O(() => pb(v.value, e.valueField, e.childrenField)), A = I(!1), y = Yn(le(e, "show"), A), S = I(null), T = I(null), C = I(null), {
      localeRef: P
    } = Pr("Select"), M = O(() => {
      var B;
      return (B = e.placeholder) !== null && B !== void 0 ? B : P.value.placeholder;
    }), _ = [], K = I(/* @__PURE__ */ new Map()), H = O(() => {
      const {
        fallbackOption: B
      } = e;
      if (B === void 0) {
        const {
          labelField: j,
          valueField: X
        } = e;
        return (te) => ({
          [j]: String(te),
          [X]: te
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
        value: te
      } = w, {
        value: ie
      } = H, ce = [];
      return B.forEach((he) => {
        if (te.has(he))
          ce.push(te.get(he));
        else if (j && X.has(he))
          ce.push(X.get(he));
        else if (ie) {
          const ge = ie(he);
          ge && ce.push(ge);
        }
      }), ce;
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
    }), L = ia(e), {
      mergedSizeRef: R,
      mergedDisabledRef: V,
      mergedStatusRef: Q
    } = L;
    function Z(B, j) {
      const {
        onChange: X,
        "onUpdate:value": te,
        onUpdateValue: ie
      } = e, {
        nTriggerFormChange: ce,
        nTriggerFormInput: he
      } = L;
      X && ve(X, B, j), ie && ve(ie, B, j), te && ve(te, B, j), l.value = B, ce(), he();
    }
    function re(B) {
      const {
        onBlur: j
      } = e, {
        nTriggerFormBlur: X
      } = L;
      j && ve(j, B), X();
    }
    function W() {
      const {
        onClear: B
      } = e;
      B && ve(B);
    }
    function G(B) {
      const {
        onFocus: j,
        showOnFocus: X
      } = e, {
        nTriggerFormFocus: te
      } = L;
      j && ve(j, B), te(), X && Me();
    }
    function ne(B) {
      const {
        onSearch: j
      } = e;
      j && ve(j, B);
    }
    function Be(B) {
      const {
        onScroll: j
      } = e;
      j && ve(j, B);
    }
    function oe() {
      var B;
      const {
        remote: j,
        multiple: X
      } = e;
      if (j) {
        const {
          value: te
        } = K;
        if (X) {
          const {
            valueField: ie
          } = e;
          (B = F.value) === null || B === void 0 || B.forEach((ce) => {
            te.set(ce[ie], ce);
          });
        } else {
          const ie = $.value;
          ie && te.set(ie[e.valueField], ie);
        }
      }
    }
    function pe(B) {
      const {
        onUpdateShow: j,
        "onUpdate:show": X
      } = e;
      j && ve(j, B), X && ve(X, B), A.value = B;
    }
    function Me() {
      V.value || (pe(!0), A.value = !0, e.filterable && At());
    }
    function ae() {
      pe(!1);
    }
    function We() {
      c.value = "", m.value = _;
    }
    const Te = I(!1);
    function be() {
      e.filterable && (Te.value = !0);
    }
    function Se() {
      e.filterable && (Te.value = !1, y.value || We());
    }
    function Ce() {
      V.value || (y.value ? e.filterable ? At() : ae() : Me());
    }
    function et(B) {
      var j, X;
      !((X = (j = C.value) === null || j === void 0 ? void 0 : j.selfRef) === null || X === void 0) && X.contains(B.relatedTarget) || (d.value = !1, re(B), ae());
    }
    function it(B) {
      G(B), d.value = !0;
    }
    function dt() {
      d.value = !0;
    }
    function lt(B) {
      var j;
      !((j = S.value) === null || j === void 0) && j.$el.contains(B.relatedTarget) || (d.value = !1, re(B), ae());
    }
    function wt() {
      var B;
      (B = S.value) === null || B === void 0 || B.focus(), ae();
    }
    function Fe(B) {
      var j;
      y.value && (!((j = S.value) === null || j === void 0) && j.$el.contains(Xn(B)) || ae());
    }
    function Ee(B) {
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
            value: te
          } = K;
          return B.filter((ie) => X.has(ie) || te.has(ie));
        } else
          return B.filter((te) => X.has(te));
      }
    }
    function Ye(B) {
      Ke(B.rawNode);
    }
    function Ke(B) {
      if (V.value) return;
      const {
        tag: j,
        remote: X,
        clearFilterAfterSelect: te,
        valueField: ie
      } = e;
      if (j && !X) {
        const {
          value: ce
        } = m, he = ce[0] || null;
        if (he) {
          const ge = p.value;
          ge.length ? ge.push(he) : p.value = [he], m.value = _;
        }
      }
      if (X && K.value.set(B[ie], B), e.multiple) {
        const ce = Ee(u.value), he = ce.findIndex((ge) => ge === B[ie]);
        if (~he) {
          if (ce.splice(he, 1), j && !X) {
            const ge = Y(B[ie]);
            ~ge && (p.value.splice(ge, 1), te && (c.value = ""));
          }
        } else
          ce.push(B[ie]), te && (c.value = "");
        Z(ce, t(ce));
      } else {
        if (j && !X) {
          const ce = Y(B[ie]);
          ~ce ? p.value = [p.value[ce]] : p.value = _;
        }
        Xt(), ae(), Z(B[ie], B);
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
        remote: te
      } = e;
      if (ne(j), X && !te) {
        if (!j) {
          m.value = _;
          return;
        }
        const {
          onCreate: ie
        } = e, ce = ie ? ie(j) : {
          [e.labelField]: j,
          [e.valueField]: j
        }, {
          valueField: he,
          labelField: ge
        } = e;
        f.value.some((ze) => ze[he] === ce[he] || ze[ge] === ce[ge]) || p.value.some((ze) => ze[he] === ce[he] || ze[ge] === ce[ge]) ? m.value = _ : m.value = [ce];
      }
    }
    function Re(B) {
      B.stopPropagation();
      const {
        multiple: j
      } = e;
      !j && e.filterable && ae(), W(), j ? Z([], []) : Z(null, null);
    }
    function hn(B) {
      !Wt(B, "action") && !Wt(B, "empty") && !Wt(B, "header") && B.preventDefault();
    }
    function Ot(B) {
      Be(B);
    }
    function Mt(B) {
      var j, X, te, ie, ce;
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
              const he = (X = C.value) === null || X === void 0 ? void 0 : X.getPendingTmNode();
              he ? Ye(he) : e.filterable || (ae(), Xt());
            } else if (Me(), e.tag && Te.value) {
              const he = m.value[0];
              if (he) {
                const ge = he[e.valueField], {
                  value: ze
                } = u;
                e.multiple && Array.isArray(ze) && ze.includes(ge) || Ke(he);
              }
            }
          }
          B.preventDefault();
          break;
        case "ArrowUp":
          if (B.preventDefault(), e.loading) return;
          y.value && ((te = C.value) === null || te === void 0 || te.prev());
          break;
        case "ArrowDown":
          if (B.preventDefault(), e.loading) return;
          y.value ? (ie = C.value) === null || ie === void 0 || ie.next() : Me();
          break;
        case "Escape":
          y.value && (Kc(B), ae()), (ce = S.value) === null || ce === void 0 || ce.focus();
          break;
      }
    }
    function Xt() {
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
    oe(), ke(le(e, "options"), oe);
    const Yt = {
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
    }, ct = O(() => {
      const {
        self: {
          menuBoxShadow: B
        }
      } = a.value;
      return {
        "--n-menu-box-shadow": B
      };
    }), Bt = i ? Ne("select", void 0, ct, e) : void 0;
    return Object.assign(Object.assign({}, Yt), {
      mergedStatus: Q,
      mergedClsPrefix: n,
      mergedBordered: r,
      namespace: o,
      treeMate: g,
      isMounted: tr(),
      triggerRef: S,
      menuRef: C,
      pattern: c,
      uncontrolledShow: A,
      mergedShow: y,
      adjustedTo: qt(e),
      uncontrolledValue: l,
      mergedValue: u,
      followerRef: T,
      localizedPlaceholder: M,
      selectedOption: $,
      selectedOptions: F,
      mergedSize: R,
      mergedDisabled: V,
      focused: d,
      activeWithoutMenuOpen: Te,
      inlineThemeDisabled: i,
      onTriggerInputFocus: be,
      onTriggerInputBlur: Se,
      handleTriggerOrMenuResize: It,
      handleMenuFocus: dt,
      handleMenuBlur: lt,
      handleMenuTabOut: wt,
      handleTriggerClick: Ce,
      handleToggle: Ye,
      handleDeleteOption: Ke,
      handlePatternInput: ee,
      handleClear: Re,
      handleTriggerBlur: et,
      handleTriggerFocus: it,
      handleKeydown: Mt,
      handleMenuAfterLeave: We,
      handleMenuClickOutside: Fe,
      handleMenuScroll: Ot,
      handleMenuKeydown: Mt,
      handleMenuMousedown: hn,
      mergedTheme: a,
      cssVars: i ? void 0 : ct,
      themeClass: Bt == null ? void 0 : Bt.themeClass,
      onRender: Bt == null ? void 0 : Bt.onRender
    });
  },
  render() {
    return h("div", {
      class: `${this.mergedClsPrefix}-select`
    }, h(Ji, null, {
      default: () => [h(Qi, null, {
        default: () => h(ub, {
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
      }), h(na, {
        ref: "followerRef",
        show: this.mergedShow,
        to: this.adjustedTo,
        teleportDisabled: this.adjustedTo === qt.tdkey,
        containerClass: this.namespace,
        width: this.consistentMenuWidth ? "target" : void 0,
        minWidth: "target",
        placement: this.placement
      }, {
        default: () => h(ut, {
          name: "fade-in-scale-up-transition",
          appear: this.isMounted,
          onAfterLeave: this.handleMenuAfterLeave
        }, {
          default: () => {
            var e, n, r;
            return this.mergedShow || this.displayDirective === "show" ? ((e = this.onRender) === null || e === void 0 || e.call(this), kt(h(Hm, Object.assign({}, this.menuProps, {
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
            }), this.displayDirective === "show" ? [[Gn, this.mergedShow], [yr, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]] : [[yr, this.handleMenuClickOutside, void 0, {
              capture: !0
            }]])) : null;
          }
        })
      })]
    }));
  }
}), n1 = {
  padding: "8px 14px"
};
function r1(e) {
  const {
    borderRadius: n,
    boxShadow2: r,
    baseColor: o
  } = e;
  return Object.assign(Object.assign({}, n1), {
    borderRadius: n,
    boxShadow: r,
    color: ft(o, "rgba(0, 0, 0, .85)"),
    textColor: o
  });
}
const o1 = {
  name: "Tooltip",
  common: He,
  peers: {
    Popover: Nr
  },
  self: r1
}, i1 = {
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
function a1(e) {
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
    heightHuge: x,
    textColor3: b,
    opacityDisabled: g
  } = e;
  return Object.assign(Object.assign({}, i1), {
    optionHeightSmall: p,
    optionHeightMedium: m,
    optionHeightLarge: v,
    optionHeightHuge: x,
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
    optionColorActive: me(n, {
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
    optionOpacityDisabled: g
  });
}
const l1 = {
  name: "Dropdown",
  common: He,
  peers: {
    Popover: Nr
  },
  self: a1
}, s1 = Object.assign(Object.assign({}, Hr), se.props), u1 = J({
  name: "Tooltip",
  props: s1,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Ae(e), r = se("Tooltip", "-tooltip", void 0, o1, e, n), o = I(null);
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
    return h(jr, Object.assign(Object.assign({}, this.$props), {
      theme: e.peers.Popover,
      themeOverrides: e.peerOverrides.Popover,
      builtinThemeOverrides: this.popoverThemeOverrides,
      internalExtraClass: n.concat("tooltip"),
      ref: "popoverRef"
    }), this.$slots);
  }
}), Uu = J({
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
function d1(e) {
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
const c1 = {
  name: "Icon",
  common: He,
  self: d1
}, f1 = k("icon", `
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
})]), h1 = Object.assign(Object.assign({}, se.props), {
  depth: [String, Number],
  size: [Number, String],
  color: String,
  component: [Object, Function]
}), Aa = J({
  _n_icon__: !0,
  name: "Icon",
  inheritAttrs: !1,
  props: h1,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r
    } = Ae(e), o = se("Icon", "-icon", f1, c1, e, n), i = O(() => {
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
          fontSize: Vt(l),
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
    return !((e = n == null ? void 0 : n.$options) === null || e === void 0) && e._n_icon__ && Tt("icon", "don't wrap `n-icon` inside `n-icon`"), a == null || a(), h("i", un(this.$attrs, {
      role: "img",
      class: [`${o}-icon`, l, {
        [`${o}-icon--depth`]: r,
        [`${o}-icon--color-transition`]: r !== void 0
      }],
      style: [this.cssVars, this.mergedStyle]
    }), i ? h(i) : this.$slots);
  }
}), Fa = "n-dropdown-menu", No = "n-dropdown", Zl = "n-dropdown-option";
function _i(e, n) {
  return e.type === "submenu" || e.type === void 0 && e[n] !== void 0;
}
function v1(e) {
  return e.type === "group";
}
function Gu(e) {
  return e.type === "divider";
}
function p1(e) {
  return e.type === "render";
}
const Xu = J({
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
    const n = fe(No), {
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
      menuPropsRef: x
    } = n, b = fe(Zl, null), g = fe(Fa), w = fe(Or), A = O(() => e.tmNode.rawNode), y = O(() => {
      const {
        value: R
      } = p;
      return _i(e.tmNode.rawNode, R);
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
        value: re
      } = i, {
        value: W
      } = a;
      return Q !== null ? W.includes(R) : Z !== null ? W.includes(R) && W[W.length - 1] !== R : re !== null ? W.includes(R) : !1;
    }), C = O(() => o.value === null && !s.value), P = Xc(T, 300, C), M = O(() => !!(b != null && b.enteringSubmenuRef.value)), _ = I(!1);
    xe(Zl, {
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
      V && !Wt({
        target: V
      }, "dropdownOption") && !Wt({
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
      siblingHasIcon: g.showIconRef,
      siblingHasSubmenu: g.hasSubmenuRef,
      menuProps: x,
      popoverBody: w,
      animated: s,
      mergedShowSubmenu: O(() => P.value && !M.value),
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
      v = h(Yu, Object.assign({}, w, {
        clsPrefix: a,
        scrollable: this.scrollable,
        tmNodes: this.tmNode.children,
        parentKey: this.tmNode.key
      }));
    }
    const x = {
      class: [`${a}-dropdown-option-body`, this.pending && `${a}-dropdown-option-body--pending`, this.active && `${a}-dropdown-option-body--active`, this.childActive && `${a}-dropdown-option-body--child-active`, this.mergedDisabled && `${a}-dropdown-option-body--disabled`],
      onMousemove: this.handleMouseMove,
      onMouseenter: this.handleMouseEnter,
      onMouseleave: this.handleMouseLeave,
      onClick: this.handleClick
    }, b = f == null ? void 0 : f(o), g = h("div", Object.assign({
      class: [`${a}-dropdown-option`, b == null ? void 0 : b.class],
      "data-dropdown-option": !0
    }, b), h("div", un(x, p), [h("div", {
      class: [`${a}-dropdown-option-body__prefix`, l && `${a}-dropdown-option-body__prefix--show-icon`]
    }, [d ? d(o) : je(o.icon)]), h("div", {
      "data-dropdown-option": !0,
      class: `${a}-dropdown-option-body__label`
    }, u ? u(o) : je((n = o[this.labelField]) !== null && n !== void 0 ? n : o.title)), h("div", {
      "data-dropdown-option": !0,
      class: [`${a}-dropdown-option-body__suffix`, s && `${a}-dropdown-option-body__suffix--has-submenu`]
    }, this.hasSubmenu ? h(Aa, null, {
      default: () => h(Fu, null)
    }) : null)]), this.hasSubmenu ? h(Ji, null, {
      default: () => [h(Qi, null, {
        default: () => h("div", {
          class: `${a}-dropdown-offset-container`
        }, h(na, {
          show: this.mergedShowSubmenu,
          placement: this.placement,
          to: m && this.popoverBody || void 0,
          teleportDisabled: !m
        }, {
          default: () => h("div", {
            class: `${a}-dropdown-menu-wrapper`
          }, r ? h(ut, {
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
    } = fe(Fa), {
      renderLabelRef: r,
      labelFieldRef: o,
      nodePropsRef: i,
      renderOptionRef: a
    } = fe(No);
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
}), x1 = J({
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
    return h(Je, null, h(g1, {
      clsPrefix: r,
      tmNode: e,
      key: e.key
    }), o == null ? void 0 : o.map((i) => {
      const {
        rawNode: a
      } = i;
      return a.show === !1 ? null : Gu(a) ? h(Uu, {
        clsPrefix: r,
        key: i.key
      }) : i.isGroup ? (Tt("dropdown", "`group` node is not allowed to be put in `group` node."), null) : h(Xu, {
        clsPrefix: r,
        tmNode: i,
        parentKey: n,
        key: i.key
      });
    }));
  }
}), m1 = J({
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
}), Yu = J({
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
    } = fe(No);
    xe(Fa, {
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
            }) => _i(u, i));
          const {
            rawNode: s
          } = a;
          return _i(s, i);
        });
      })
    });
    const o = I(null);
    return xe(Eo, null), xe(zo, null), xe(Or, o), {
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
      return a.show === !1 ? null : p1(a) ? h(m1, {
        tmNode: i,
        key: i.key
      }) : Gu(a) ? h(Uu, {
        clsPrefix: n,
        key: i.key
      }) : v1(a) ? h(x1, {
        clsPrefix: n,
        tmNode: i,
        parentKey: e,
        key: i.key
      }) : h(Xu, {
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
    }, r ? h(Tu, {
      contentClass: `${n}-dropdown-menu__content`
    }, {
      default: () => o
    }) : o, this.showArrow ? Mu({
      clsPrefix: n,
      arrowStyle: this.arrowStyle,
      arrowClass: void 0,
      arrowWrapperClass: void 0,
      arrowWrapperStyle: void 0
    }) : null);
  }
}), b1 = k("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [Lo(), k("dropdown-option", `
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
 `)])]), C1 = {
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
}, y1 = Object.keys(Hr), w1 = Object.assign(Object.assign(Object.assign({}, Hr), C1), se.props), B1 = J({
  name: "Dropdown",
  inheritAttrs: !1,
  props: w1,
  setup(e) {
    const n = I(!1), r = Yn(le(e, "show"), n), o = O(() => {
      const {
        keyField: H,
        childrenField: t
      } = e;
      return Du(e.options, {
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
    }), i = O(() => o.value.treeNodes), a = I(null), l = I(null), s = I(null), u = O(() => {
      var H, t, F;
      return (F = (t = (H = a.value) !== null && H !== void 0 ? H : l.value) !== null && t !== void 0 ? t : s.value) !== null && F !== void 0 ? F : null;
    }), d = O(() => o.value.getPath(u.value).keyPath), c = O(() => o.value.getPath(e.value).keyPath), f = qe(() => e.keyboard && r.value);
    lf({
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
    } = Ae(e), v = se("Dropdown", "-dropdown", b1, l1, e, p);
    xe(No, {
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
      doSelect: x,
      doUpdateShow: b
    }), ke(r, (H) => {
      !e.animated && !H && g();
    });
    function x(H, t) {
      const {
        onSelect: F
      } = e;
      F && ve(F, H, t);
    }
    function b(H) {
      const {
        "onUpdate:show": t,
        onUpdateShow: F
      } = e;
      t && ve(t, H), F && ve(F, H), n.value = H;
    }
    function g() {
      a.value = null, l.value = null, s.value = null;
    }
    function w() {
      b(!1);
    }
    function A() {
      M("left");
    }
    function y() {
      M("right");
    }
    function S() {
      M("up");
    }
    function T() {
      M("down");
    }
    function C() {
      const H = P();
      H != null && H.isLeaf && r.value && (x(H.key, H.rawNode), b(!1));
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
    function M(H) {
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
        [U("optionSuffixWidth", H)]: re,
        [U("optionIconPrefixWidth", H)]: W,
        [U("optionPrefixWidth", H)]: G,
        [U("fontSize", H)]: ne,
        [U("optionHeight", H)]: Be,
        [U("optionIconSize", H)]: oe
      } = $, pe = {
        "--n-bezier": F,
        "--n-font-size": ne,
        "--n-padding": L,
        "--n-border-radius": V,
        "--n-option-height": Be,
        "--n-option-prefix-width": G,
        "--n-option-icon-prefix-width": W,
        "--n-option-suffix-width": re,
        "--n-option-icon-suffix-width": Z,
        "--n-option-icon-size": oe,
        "--n-divider-color": R,
        "--n-option-opacity-disabled": Q
      };
      return t ? (pe["--n-color"] = $.colorInverted, pe["--n-option-color-hover"] = $.optionColorHoverInverted, pe["--n-option-color-active"] = $.optionColorActiveInverted, pe["--n-option-text-color"] = $.optionTextColorInverted, pe["--n-option-text-color-hover"] = $.optionTextColorHoverInverted, pe["--n-option-text-color-active"] = $.optionTextColorActiveInverted, pe["--n-option-text-color-child-active"] = $.optionTextColorChildActiveInverted, pe["--n-prefix-color"] = $.prefixColorInverted, pe["--n-suffix-color"] = $.suffixColorInverted, pe["--n-group-header-text-color"] = $.groupHeaderTextColorInverted) : (pe["--n-color"] = $.color, pe["--n-option-color-hover"] = $.optionColorHover, pe["--n-option-color-active"] = $.optionColorActive, pe["--n-option-text-color"] = $.optionTextColor, pe["--n-option-text-color-hover"] = $.optionTextColorHover, pe["--n-option-text-color-active"] = $.optionTextColorActive, pe["--n-option-text-color-child-active"] = $.optionTextColorChildActive, pe["--n-prefix-color"] = $.prefixColor, pe["--n-suffix-color"] = $.suffixColor, pe["--n-group-header-text-color"] = $.groupHeaderTextColor), pe;
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
        e.animated && g();
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
        ref: Cc(i),
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
      return h(Yu, un(this.$attrs, p, f));
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
    return h(jr, Object.assign({}, an(this.$props, y1), r), {
      trigger: () => {
        var o, i;
        return (i = (o = this.$slots).default) === null || i === void 0 ? void 0 : i.call(o);
      }
    });
  }
}), S1 = {
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
function A1(e) {
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
    borderRadius: x,
    fontWeightStrong: b,
    lineHeight: g,
    fontSize: w
  } = e;
  return Object.assign(Object.assign({}, S1), {
    fontSize: w,
    lineHeight: g,
    border: `1px solid ${v}`,
    titleTextColor: n,
    textColor: r,
    color: o,
    closeColorHover: s,
    closeColorPressed: u,
    closeIconColor: i,
    closeIconColorHover: a,
    closeIconColorPressed: l,
    closeBorderRadius: x,
    iconColor: m,
    iconColorInfo: d,
    iconColorSuccess: c,
    iconColorWarning: f,
    iconColorError: p,
    borderRadius: x,
    titleFontWeight: b
  });
}
const Zu = {
  name: "Dialog",
  common: He,
  peers: {
    Button: Ba
  },
  self: A1
}, Ho = {
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
}, Ju = Sn(Ho), F1 = D([k("dialog", `
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
 `)]), Ui(k("dialog", `
 width: 446px;
 max-width: calc(100vw - 32px);
 `)), k("dialog", [Fs(`
 width: 446px;
 max-width: calc(100vw - 32px);
 `)])]), P1 = {
  default: () => h(So, null),
  info: () => h(So, null),
  success: () => h(Ca, null),
  warning: () => h(Oo, null),
  error: () => h(ba, null)
}, Qu = J({
  name: "Dialog",
  alias: [
    "NimbusConfirmCard",
    // deprecated
    "Confirm"
    // deprecated
  ],
  props: Object.assign(Object.assign({}, se.props), Ho),
  setup(e) {
    const {
      mergedComponentPropsRef: n,
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o,
      mergedRtlRef: i
    } = Ae(e), a = gt("Dialog", i, r), l = O(() => {
      var m, v;
      const {
        iconPlacement: x
      } = e;
      return x || ((v = (m = n == null ? void 0 : n.value) === null || m === void 0 ? void 0 : m.Dialog) === null || v === void 0 ? void 0 : v.iconPlacement) || "left";
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
    const c = se("Dialog", "-dialog", F1, Zu, e, r), f = O(() => {
      const {
        type: m
      } = e, v = l.value, {
        common: {
          cubicBezierEaseInOut: x
        },
        self: {
          fontSize: b,
          lineHeight: g,
          border: w,
          titleTextColor: A,
          textColor: y,
          color: S,
          closeBorderRadius: T,
          closeColorHover: C,
          closeColorPressed: P,
          closeIconColor: M,
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
          [v === "top" ? "iconMarginIconTop" : "iconMargin"]: re,
          [v === "top" ? "closeMarginIconTop" : "closeMargin"]: W,
          [U("iconColor", m)]: G
        }
      } = c.value, ne = St(re);
      return {
        "--n-font-size": b,
        "--n-icon-color": G,
        "--n-bezier": x,
        "--n-close-margin": W,
        "--n-icon-margin-top": ne.top,
        "--n-icon-margin-right": ne.right,
        "--n-icon-margin-bottom": ne.bottom,
        "--n-icon-margin-left": ne.left,
        "--n-icon-size": R,
        "--n-close-size": Z,
        "--n-close-icon-size": H,
        "--n-close-border-radius": T,
        "--n-close-color-hover": C,
        "--n-close-color-pressed": P,
        "--n-close-icon-color": M,
        "--n-close-icon-color-hover": _,
        "--n-close-icon-color-pressed": K,
        "--n-color": S,
        "--n-text-color": y,
        "--n-border-radius": t,
        "--n-padding": L,
        "--n-line-height": g,
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
      mergedTheme: x,
      loading: b,
      type: g,
      mergedClsPrefix: w
    } = this;
    (e = this.onRender) === null || e === void 0 || e.call(this);
    const A = a ? h(yt, {
      clsPrefix: w,
      class: `${w}-dialog__icon`
    }, {
      default: () => _e(this.$slots.icon, (S) => S || (this.icon ? je(this.icon) : P1[this.type]()))
    }) : null, y = _e(this.$slots.action, (S) => S || c || d || u ? h("div", {
      class: [`${w}-dialog__action`, this.actionClass],
      style: this.actionStyle
    }, S || (u ? [je(u)] : [this.negativeText && h(Dr, Object.assign({
      theme: x.peers.Button,
      themeOverrides: x.peerOverrides.Button,
      ghost: !0,
      size: "small",
      onClick: v
    }, p), {
      default: () => je(this.negativeText)
    }), this.positiveText && h(Dr, Object.assign({
      theme: x.peers.Button,
      themeOverrides: x.peerOverrides.Button,
      size: "small",
      type: g === "default" ? "primary" : g,
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
      }, S) : h(Ir, {
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
}), ed = "n-dialog-provider", td = "n-dialog-api", $1 = "n-dialog-reactive-list";
function D1(e) {
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
const E1 = {
  name: "Modal",
  common: He,
  peers: {
    Scrollbar: Io,
    Dialog: Zu,
    Card: Vu
  },
  self: D1
}, Pa = Object.assign(Object.assign({}, Sa), Ho), z1 = Sn(Pa), k1 = J({
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
  }, Pa), {
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
    const n = I(null), r = I(null), o = I(e.show), i = I(null), a = I(null);
    ke(le(e, "show"), (b) => {
      b && (o.value = !0);
    }), Qf(O(() => e.blockScroll && o.value));
    const l = fe(zs);
    function s() {
      if (l.transformOriginRef.value === "center")
        return "";
      const {
        value: b
      } = i, {
        value: g
      } = a;
      if (b === null || g === null)
        return "";
      if (r.value) {
        const w = r.value.containerScrollTop;
        return `${b}px ${g + w}px`;
      }
      return "";
    }
    function u(b) {
      if (l.transformOriginRef.value === "center")
        return;
      const g = l.getMousePosition();
      if (!g || !r.value) return;
      const w = r.value.containerScrollTop, {
        offsetLeft: A,
        offsetTop: y
      } = b;
      if (g) {
        const S = g.y, T = g.x;
        i.value = -(A - T), a.value = -(y - S - w);
      }
      b.style.transformOrigin = s();
    }
    function d(b) {
      Ze(() => {
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
    const x = I(null);
    return ke(x, (b) => {
      b && Ze(() => {
        const g = b.el;
        g && n.value !== g && (n.value = g);
      });
    }), xe(Eo, n), xe(zo, null), xe(Or, null), {
      mergedTheme: l.mergedThemeRef,
      appear: l.appearRef,
      isMounted: l.isMountedRef,
      mergedClsPrefix: l.mergedClsPrefixRef,
      bodyRef: n,
      scrollbarRef: r,
      displayed: o,
      childNodeRef: x,
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
      if (s = mi(e), !s) {
        Tt("modal", "default slot is empty");
        return;
      }
      s = ds(s), s.props = un({
        class: `${l}-modal`
      }, n, s.props || {});
    }
    return this.displayDirective === "show" || this.displayed || this.show ? kt(h("div", {
      role: "none",
      class: `${l}-modal-body-wrapper`
    }, h(Lr, {
      ref: "scrollbarRef",
      theme: this.mergedTheme.peers.Scrollbar,
      themeOverrides: this.mergedTheme.peerOverrides.Scrollbar,
      contentClass: `${l}-modal-scroll-content`
    }, {
      default: () => {
        var u;
        return [(u = this.renderMask) === null || u === void 0 ? void 0 : u.call(this), h(Gs, {
          disabled: !this.trapFocus,
          active: this.show,
          onEsc: this.onEsc,
          autoFocus: this.autoFocus
        }, {
          default: () => {
            var d;
            return h(ut, {
              name: "fade-in-scale-up-transition",
              appear: (d = this.appear) !== null && d !== void 0 ? d : this.isMounted,
              onEnter: r,
              onAfterEnter: this.onAfterEnter,
              onAfterLeave: o,
              onBeforeLeave: i
            }, {
              default: () => {
                const c = [[Gn, this.show]], {
                  onClickoutside: f
                } = this;
                return f && c.push([yr, this.onClickoutside, void 0, {
                  capture: !0
                }]), kt(this.preset === "confirm" || this.preset === "dialog" ? h(Qu, Object.assign({}, this.$attrs, {
                  class: [`${l}-modal`, this.$attrs.class],
                  ref: "bodyRef",
                  theme: this.mergedTheme.peers.Dialog,
                  themeOverrides: this.mergedTheme.peerOverrides.Dialog
                }, an(this.$props, Ju), {
                  "aria-modal": "true"
                }), e) : this.preset === "card" ? h(Hb, Object.assign({}, this.$attrs, {
                  ref: "bodyRef",
                  class: [`${l}-modal`, this.$attrs.class],
                  theme: this.mergedTheme.peers.Card,
                  themeOverrides: this.mergedTheme.peerOverrides.Card
                }, an(this.$props, Lb), {
                  "aria-modal": "true",
                  role: "dialog"
                }), e) : this.childNodeRef = s, c);
              }
            });
          }
        })];
      }
    })), [[Gn, this.displayDirective === "if" || this.displayed || this.show]]) : null;
  }
}), T1 = D([k("modal-container", `
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
 `, [_o({
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
 `, [Lo({
  duration: ".25s",
  enterScale: ".5"
})])]), nd = Object.assign(Object.assign(Object.assign(Object.assign({}, se.props), {
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
}), Pa), {
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
}), rd = J({
  name: "Modal",
  inheritAttrs: !1,
  props: nd,
  setup(e) {
    process.env.NODE_ENV !== "production" && (e.onHide && at("modal", "`on-hide` is deprecated."), e.onAfterHide && at("modal", "`on-after-hide` is deprecated, please use `on-after-leave` instead."), e.onBeforeHide && at("modal", "`on-before-hide` is deprecated, please use `on-before-leave` instead."), e.overlayStyle && at("modal", "`overlay-style` is deprecated, please use `style` instead."));
    const n = I(null), {
      mergedClsPrefixRef: r,
      namespaceRef: o,
      inlineThemeDisabled: i
    } = Ae(e), a = se("Modal", "-modal", T1, E1, e, r), l = xo(64), s = go(), u = tr(), d = e.internalDialog ? fe(ed, null) : null, c = e.internalModal ? fe(sf, null) : null, f = eh();
    function p(T) {
      const {
        onUpdateShow: C,
        "onUpdate:show": P,
        onHide: M
      } = e;
      C && ve(C, T), P && ve(P, T), M && !T && M(T);
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
    function x() {
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
      T && ve(T), C && C();
    }
    function g() {
      const {
        onAfterLeave: T,
        onAfterHide: C
      } = e;
      T && ve(T), C && C();
    }
    function w(T) {
      var C;
      const {
        onMaskClick: P
      } = e;
      P && P(T), e.maskClosable && !((C = n.value) === null || C === void 0) && C.contains(Xn(T)) && p(!1);
    }
    function A(T) {
      var C;
      (C = e.onEsc) === null || C === void 0 || C.call(e), e.show && e.closeOnEsc && Uc(T) && (f.value || p(!1));
    }
    xe(zs, {
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
    const y = O(() => {
      const {
        common: {
          cubicBezierEaseOut: T
        },
        self: {
          boxShadow: C,
          color: P,
          textColor: M
        }
      } = a.value;
      return {
        "--n-bezier-ease-out": T,
        "--n-box-shadow": C,
        "--n-color": P,
        "--n-text-color": M
      };
    }), S = i ? Ne("theme-class", void 0, y, e) : void 0;
    return {
      mergedClsPrefix: r,
      namespace: o,
      isMounted: u,
      containerRef: n,
      presetProps: O(() => an(e, z1)),
      handleEsc: A,
      handleAfterLeave: g,
      handleClickoutside: w,
      handleBeforeLeave: b,
      doUpdateShow: p,
      handleNegativeClick: x,
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
    return h(Ms, {
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
        }, h(k1, Object.assign({
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
            return h(ut, {
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
        }), this.$slots)), [[ea, {
          zIndex: this.zIndex,
          enabled: this.show
        }]]);
      }
    });
  }
}), R1 = Object.assign(Object.assign({}, Ho), {
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
}), O1 = J({
  name: "DialogEnvironment",
  props: Object.assign(Object.assign({}, R1), {
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
    const n = I(!0);
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
    return h(rd, {
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
      default: () => h(Qu, Object.assign({}, an(this.$props, Ju), {
        style: this.internalStyle,
        onClose: o,
        onNegativeClick: r,
        onPositiveClick: e
      }))
    });
  }
}), M1 = {
  injectionKey: String,
  to: [String, Object]
}, od = J({
  name: "DialogProvider",
  props: M1,
  setup() {
    const e = I([]), n = {};
    function r(s = {}) {
      const u = on(), d = Tr(Object.assign(Object.assign({}, s), {
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
    return xe(td, l), xe(ed, {
      clickedRef: xo(64),
      clickedPositionRef: go()
    }), xe($1, e), Object.assign(Object.assign({}, l), {
      dialogList: e,
      dialogInstRefs: n,
      handleAfterLeave: i
    });
  },
  render() {
    var e, n;
    return h(Je, null, [this.dialogList.map((r) => h(O1, Rr(r, ["destroy", "style"], {
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
function id() {
  const e = fe(td, null);
  return e === null && dn("use-dialog", "No outer <n-dialog-provider /> founded."), e;
}
const I1 = {
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
function _1(e) {
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
  return Object.assign(Object.assign({}, I1), {
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
const ad = {
  name: "Form",
  common: He,
  self: _1
}, L1 = k("form", [N("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [k("form-item", {
  width: "auto",
  marginRight: "18px"
}, [D("&:last-child", {
  marginRight: 0
})])])]), Wr = "n-form", ld = "n-form-item-insts";
var N1 = function(e, n, r, o) {
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
const H1 = Object.assign(Object.assign({}, se.props), {
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
}), j1 = J({
  name: "Form",
  props: H1,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Ae(e);
    se("Form", "-form", L1, ad, e, n);
    const r = {}, o = I(void 0), i = (u) => {
      const d = o.value;
      (d === void 0 || u >= d) && (o.value = u);
    };
    function a(u) {
      return N1(this, arguments, void 0, function* (d, c = () => !0) {
        return yield new Promise((f, p) => {
          const m = [];
          for (const v of Sn(r)) {
            const x = r[v];
            for (const b of x)
              b.path && m.push(b.internalValidate(null, c));
          }
          Promise.all(m).then((v) => {
            const x = v.some((w) => !w.valid), b = [], g = [];
            v.forEach((w) => {
              var A, y;
              !((A = w.errors) === null || A === void 0) && A.length && b.push(w.errors), !((y = w.warnings) === null || y === void 0) && y.length && g.push(w.warnings);
            }), d && d(b.length ? b : void 0, {
              warnings: g.length ? g : void 0
            }), x ? p(b.length ? b : void 0) : f({
              warnings: g.length ? g : void 0
            });
          });
        });
      });
    }
    function l() {
      for (const u of Sn(r)) {
        const d = r[u];
        for (const c of d)
          c.restoreValidation();
      }
    }
    return xe(Wr, {
      props: e,
      maxChildLabelWidthRef: o,
      deriveMaxChildLabelWidth: i
    }), xe(ld, {
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
function Cn() {
  return Cn = Object.assign ? Object.assign.bind() : function(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
    }
    return e;
  }, Cn.apply(this, arguments);
}
function W1(e, n) {
  e.prototype = Object.create(n.prototype), e.prototype.constructor = e, Er(e, n);
}
function Li(e) {
  return Li = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, Li(e);
}
function Er(e, n) {
  return Er = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, Er(e, n);
}
function V1() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    })), !0;
  } catch {
    return !1;
  }
}
function co(e, n, r) {
  return V1() ? co = Reflect.construct.bind() : co = function(i, a, l) {
    var s = [null];
    s.push.apply(s, a);
    var u = Function.bind.apply(i, s), d = new u();
    return l && Er(d, l.prototype), d;
  }, co.apply(null, arguments);
}
function q1(e) {
  return Function.toString.call(e).indexOf("[native code]") !== -1;
}
function Ni(e) {
  var n = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return Ni = function(o) {
    if (o === null || !q1(o)) return o;
    if (typeof o != "function")
      throw new TypeError("Super expression must either be null or a function");
    if (typeof n < "u") {
      if (n.has(o)) return n.get(o);
      n.set(o, i);
    }
    function i() {
      return co(o, arguments, Li(this).constructor);
    }
    return i.prototype = Object.create(o.prototype, {
      constructor: {
        value: i,
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
    }), Er(i, o);
  }, Ni(e);
}
var K1 = /%[sdj%]/g, sd = function() {
};
typeof process < "u" && process.env && process.env.NODE_ENV !== "production" && typeof window < "u" && typeof document < "u" && (sd = function(n, r) {
  typeof console < "u" && console.warn && typeof ASYNC_VALIDATOR_NO_WARNING > "u" && r.every(function(o) {
    return typeof o == "string";
  }) && console.warn(n, r);
});
function Hi(e) {
  if (!e || !e.length) return null;
  var n = {};
  return e.forEach(function(r) {
    var o = r.field;
    n[o] = n[o] || [], n[o].push(r);
  }), n;
}
function ht(e) {
  for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
    r[o - 1] = arguments[o];
  var i = 0, a = r.length;
  if (typeof e == "function")
    return e.apply(null, r);
  if (typeof e == "string") {
    var l = e.replace(K1, function(s) {
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
function U1(e) {
  return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern";
}
function Ge(e, n) {
  return !!(e == null || n === "array" && Array.isArray(e) && !e.length || U1(n) && typeof e == "string" && !e);
}
function G1(e, n, r) {
  var o = [], i = 0, a = e.length;
  function l(s) {
    o.push.apply(o, s || []), i++, i === a && r(o);
  }
  e.forEach(function(s) {
    n(s, l);
  });
}
function Jl(e, n, r) {
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
function X1(e) {
  var n = [];
  return Object.keys(e).forEach(function(r) {
    n.push.apply(n, e[r] || []);
  }), n;
}
var Ql = /* @__PURE__ */ function(e) {
  W1(n, e);
  function n(r, o) {
    var i;
    return i = e.call(this, "Async Validation Error") || this, i.errors = r, i.fields = o, i;
  }
  return n;
}(/* @__PURE__ */ Ni(Error));
function Y1(e, n, r, o, i) {
  if (n.first) {
    var a = new Promise(function(p, m) {
      var v = function(g) {
        return o(g), g.length ? m(new Ql(g, Hi(g))) : p(i);
      }, x = X1(e);
      Jl(x, r, v);
    });
    return a.catch(function(p) {
      return p;
    }), a;
  }
  var l = n.firstFields === !0 ? Object.keys(e) : n.firstFields || [], s = Object.keys(e), u = s.length, d = 0, c = [], f = new Promise(function(p, m) {
    var v = function(b) {
      if (c.push.apply(c, b), d++, d === u)
        return o(c), c.length ? m(new Ql(c, Hi(c))) : p(i);
    };
    s.length || (o(c), p(i)), s.forEach(function(x) {
      var b = e[x];
      l.indexOf(x) !== -1 ? Jl(b, r, v) : G1(b, r, v);
    });
  });
  return f.catch(function(p) {
    return p;
  }), f;
}
function Z1(e) {
  return !!(e && e.message !== void 0);
}
function J1(e, n) {
  for (var r = e, o = 0; o < n.length; o++) {
    if (r == null)
      return r;
    r = r[n[o]];
  }
  return r;
}
function es(e, n) {
  return function(r) {
    var o;
    return e.fullFields ? o = J1(n, e.fullFields) : o = n[r.field || e.fullField], Z1(r) ? (r.field = r.field || e.fullField, r.fieldValue = o, r) : {
      message: typeof r == "function" ? r() : r,
      fieldValue: o,
      field: r.field || e.fullField
    };
  };
}
function ts(e, n) {
  if (n) {
    for (var r in n)
      if (n.hasOwnProperty(r)) {
        var o = n[r];
        typeof o == "object" && typeof e[r] == "object" ? e[r] = Cn({}, e[r], o) : e[r] = o;
      }
  }
  return e;
}
var ud = function(n, r, o, i, a, l) {
  n.required && (!o.hasOwnProperty(n.field) || Ge(r, l || n.type)) && i.push(ht(a.messages.required, n.fullField));
}, Q1 = function(n, r, o, i, a) {
  (/^\s+$/.test(r) || r === "") && i.push(ht(a.messages.whitespace, n.fullField));
}, oo, eC = function() {
  if (oo)
    return oo;
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
  var d = "(?:(?:[a-z]+:)?//)", c = "(?:\\S+(?::\\S*)?@)?", f = u.v4().source, p = u.v6().source, m = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)", v = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*", x = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))", b = "(?::\\d{2,5})?", g = '(?:[/?#][^\\s"]*)?', w = "(?:" + d + "|www\\.)" + c + "(?:localhost|" + f + "|" + p + "|" + m + v + x + ")" + b + g;
  return oo = new RegExp("(?:^" + w + "$)", "i"), oo;
}, ns = {
  // http://emailregex.com/
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
  // url: new RegExp(
  //   '^(?!mailto:)(?:(?:http|https|ftp)://|//)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-*)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$',
  //   'i',
  // ),
  hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
}, dr = {
  integer: function(n) {
    return dr.number(n) && parseInt(n, 10) === n;
  },
  float: function(n) {
    return dr.number(n) && !dr.integer(n);
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
    return typeof n == "object" && !dr.array(n);
  },
  method: function(n) {
    return typeof n == "function";
  },
  email: function(n) {
    return typeof n == "string" && n.length <= 320 && !!n.match(ns.email);
  },
  url: function(n) {
    return typeof n == "string" && n.length <= 2048 && !!n.match(eC());
  },
  hex: function(n) {
    return typeof n == "string" && !!n.match(ns.hex);
  }
}, tC = function(n, r, o, i, a) {
  if (n.required && r === void 0) {
    ud(n, r, o, i, a);
    return;
  }
  var l = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"], s = n.type;
  l.indexOf(s) > -1 ? dr[s](r) || i.push(ht(a.messages.types[s], n.fullField, n.type)) : s && typeof r !== n.type && i.push(ht(a.messages.types[s], n.fullField, n.type));
}, nC = function(n, r, o, i, a) {
  var l = typeof n.len == "number", s = typeof n.min == "number", u = typeof n.max == "number", d = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, c = r, f = null, p = typeof r == "number", m = typeof r == "string", v = Array.isArray(r);
  if (p ? f = "number" : m ? f = "string" : v && (f = "array"), !f)
    return !1;
  v && (c = r.length), m && (c = r.replace(d, "_").length), l ? c !== n.len && i.push(ht(a.messages[f].len, n.fullField, n.len)) : s && !u && c < n.min ? i.push(ht(a.messages[f].min, n.fullField, n.min)) : u && !s && c > n.max ? i.push(ht(a.messages[f].max, n.fullField, n.max)) : s && u && (c < n.min || c > n.max) && i.push(ht(a.messages[f].range, n.fullField, n.min, n.max));
}, Hn = "enum", rC = function(n, r, o, i, a) {
  n[Hn] = Array.isArray(n[Hn]) ? n[Hn] : [], n[Hn].indexOf(r) === -1 && i.push(ht(a.messages[Hn], n.fullField, n[Hn].join(", ")));
}, oC = function(n, r, o, i, a) {
  if (n.pattern) {
    if (n.pattern instanceof RegExp)
      n.pattern.lastIndex = 0, n.pattern.test(r) || i.push(ht(a.messages.pattern.mismatch, n.fullField, r, n.pattern));
    else if (typeof n.pattern == "string") {
      var l = new RegExp(n.pattern);
      l.test(r) || i.push(ht(a.messages.pattern.mismatch, n.fullField, r, n.pattern));
    }
  }
}, ye = {
  required: ud,
  whitespace: Q1,
  type: tC,
  range: nC,
  enum: rC,
  pattern: oC
}, iC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ge(r, "string") && !n.required)
      return o();
    ye.required(n, r, i, l, a, "string"), Ge(r, "string") || (ye.type(n, r, i, l, a), ye.range(n, r, i, l, a), ye.pattern(n, r, i, l, a), n.whitespace === !0 && ye.whitespace(n, r, i, l, a));
  }
  o(l);
}, aC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ge(r) && !n.required)
      return o();
    ye.required(n, r, i, l, a), r !== void 0 && ye.type(n, r, i, l, a);
  }
  o(l);
}, lC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (r === "" && (r = void 0), Ge(r) && !n.required)
      return o();
    ye.required(n, r, i, l, a), r !== void 0 && (ye.type(n, r, i, l, a), ye.range(n, r, i, l, a));
  }
  o(l);
}, sC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ge(r) && !n.required)
      return o();
    ye.required(n, r, i, l, a), r !== void 0 && ye.type(n, r, i, l, a);
  }
  o(l);
}, uC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ge(r) && !n.required)
      return o();
    ye.required(n, r, i, l, a), Ge(r) || ye.type(n, r, i, l, a);
  }
  o(l);
}, dC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ge(r) && !n.required)
      return o();
    ye.required(n, r, i, l, a), r !== void 0 && (ye.type(n, r, i, l, a), ye.range(n, r, i, l, a));
  }
  o(l);
}, cC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ge(r) && !n.required)
      return o();
    ye.required(n, r, i, l, a), r !== void 0 && (ye.type(n, r, i, l, a), ye.range(n, r, i, l, a));
  }
  o(l);
}, fC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (r == null && !n.required)
      return o();
    ye.required(n, r, i, l, a, "array"), r != null && (ye.type(n, r, i, l, a), ye.range(n, r, i, l, a));
  }
  o(l);
}, hC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ge(r) && !n.required)
      return o();
    ye.required(n, r, i, l, a), r !== void 0 && ye.type(n, r, i, l, a);
  }
  o(l);
}, vC = "enum", pC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ge(r) && !n.required)
      return o();
    ye.required(n, r, i, l, a), r !== void 0 && ye[vC](n, r, i, l, a);
  }
  o(l);
}, gC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ge(r, "string") && !n.required)
      return o();
    ye.required(n, r, i, l, a), Ge(r, "string") || ye.pattern(n, r, i, l, a);
  }
  o(l);
}, xC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ge(r, "date") && !n.required)
      return o();
    if (ye.required(n, r, i, l, a), !Ge(r, "date")) {
      var u;
      r instanceof Date ? u = r : u = new Date(r), ye.type(n, u, i, l, a), u && ye.range(n, u.getTime(), i, l, a);
    }
  }
  o(l);
}, mC = function(n, r, o, i, a) {
  var l = [], s = Array.isArray(r) ? "array" : typeof r;
  ye.required(n, r, i, l, a, s), o(l);
}, pi = function(n, r, o, i, a) {
  var l = n.type, s = [], u = n.required || !n.required && i.hasOwnProperty(n.field);
  if (u) {
    if (Ge(r, l) && !n.required)
      return o();
    ye.required(n, r, i, s, a, l), Ge(r, l) || ye.type(n, r, i, s, a);
  }
  o(s);
}, bC = function(n, r, o, i, a) {
  var l = [], s = n.required || !n.required && i.hasOwnProperty(n.field);
  if (s) {
    if (Ge(r) && !n.required)
      return o();
    ye.required(n, r, i, l, a);
  }
  o(l);
}, gr = {
  string: iC,
  method: aC,
  number: lC,
  boolean: sC,
  regexp: uC,
  integer: dC,
  float: cC,
  array: fC,
  object: hC,
  enum: pC,
  pattern: gC,
  date: xC,
  url: pi,
  hex: pi,
  email: pi,
  required: mC,
  any: bC
};
function ji() {
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
var Wi = ji(), Zn = /* @__PURE__ */ function() {
  function e(r) {
    this.rules = null, this._messages = Wi, this.define(r);
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
    return o && (this._messages = ts(ji(), o)), this._messages;
  }, n.validate = function(o, i, a) {
    var l = this;
    i === void 0 && (i = {}), a === void 0 && (a = function() {
    });
    var s = o, u = i, d = a;
    if (typeof u == "function" && (d = u, u = {}), !this.rules || Object.keys(this.rules).length === 0)
      return d && d(null, s), Promise.resolve(s);
    function c(x) {
      var b = [], g = {};
      function w(y) {
        if (Array.isArray(y)) {
          var S;
          b = (S = b).concat.apply(S, y);
        } else
          b.push(y);
      }
      for (var A = 0; A < x.length; A++)
        w(x[A]);
      b.length ? (g = Hi(b), d(b, g)) : d(null, s);
    }
    if (u.messages) {
      var f = this.messages();
      f === Wi && (f = ji()), ts(f, u.messages), u.messages = f;
    } else
      u.messages = this.messages();
    var p = {}, m = u.keys || Object.keys(this.rules);
    m.forEach(function(x) {
      var b = l.rules[x], g = s[x];
      b.forEach(function(w) {
        var A = w;
        typeof A.transform == "function" && (s === o && (s = Cn({}, s)), g = s[x] = A.transform(g)), typeof A == "function" ? A = {
          validator: A
        } : A = Cn({}, A), A.validator = l.getValidationMethod(A), A.validator && (A.field = x, A.fullField = A.fullField || x, A.type = l.getType(A), p[x] = p[x] || [], p[x].push({
          rule: A,
          value: g,
          source: s,
          field: x
        }));
      });
    });
    var v = {};
    return Y1(p, u, function(x, b) {
      var g = x.rule, w = (g.type === "object" || g.type === "array") && (typeof g.fields == "object" || typeof g.defaultField == "object");
      w = w && (g.required || !g.required && x.value), g.field = x.field;
      function A(T, C) {
        return Cn({}, C, {
          fullField: g.fullField + "." + T,
          fullFields: g.fullFields ? [].concat(g.fullFields, [T]) : [T]
        });
      }
      function y(T) {
        T === void 0 && (T = []);
        var C = Array.isArray(T) ? T : [T];
        !u.suppressWarning && C.length && e.warning("async-validator:", C), C.length && g.message !== void 0 && (C = [].concat(g.message));
        var P = C.map(es(g, s));
        if (u.first && P.length)
          return v[g.field] = 1, b(P);
        if (!w)
          b(P);
        else {
          if (g.required && !x.value)
            return g.message !== void 0 ? P = [].concat(g.message).map(es(g, s)) : u.error && (P = [u.error(g, ht(u.messages.required, g.field))]), b(P);
          var M = {};
          g.defaultField && Object.keys(x.value).map(function(H) {
            M[H] = g.defaultField;
          }), M = Cn({}, M, x.rule.fields);
          var _ = {};
          Object.keys(M).forEach(function(H) {
            var t = M[H], F = Array.isArray(t) ? t : [t];
            _[H] = F.map(A.bind(null, H));
          });
          var K = new e(_);
          K.messages(u.messages), x.rule.options && (x.rule.options.messages = u.messages, x.rule.options.error = u.error), K.validate(x.value, x.rule.options || u, function(H) {
            var t = [];
            P && P.length && t.push.apply(t, P), H && H.length && t.push.apply(t, H), b(t.length ? t : null);
          });
        }
      }
      var S;
      if (g.asyncValidator)
        S = g.asyncValidator(g, x.value, y, x.source, u);
      else if (g.validator) {
        try {
          S = g.validator(g, x.value, y, x.source, u);
        } catch (T) {
          console.error == null || console.error(T), u.suppressValidatorError || setTimeout(function() {
            throw T;
          }, 0), y(T.message);
        }
        S === !0 ? y() : S === !1 ? y(typeof g.message == "function" ? g.message(g.fullField || g.field) : g.message || (g.fullField || g.field) + " fails") : S instanceof Array ? y(S) : S instanceof Error && y(S.message);
      }
      S && S.then && S.then(function() {
        return y();
      }, function(T) {
        return y(T);
      });
    }, function(x) {
      c(x);
    }, s);
  }, n.getType = function(o) {
    if (o.type === void 0 && o.pattern instanceof RegExp && (o.type = "pattern"), typeof o.validator != "function" && o.type && !gr.hasOwnProperty(o.type))
      throw new Error(ht("Unknown rule type %s", o.type));
    return o.type || "string";
  }, n.getValidationMethod = function(o) {
    if (typeof o.validator == "function")
      return o.validator;
    var i = Object.keys(o), a = i.indexOf("message");
    return a !== -1 && i.splice(a, 1), i.length === 1 && i[0] === "required" ? gr.required : gr[this.getType(o)] || void 0;
  }, e;
}();
Zn.register = function(n, r) {
  if (typeof r != "function")
    throw new Error("Cannot register a validator by type, validator is not a function");
  gr[n] = r;
};
Zn.warning = sd;
Zn.messages = Wi;
Zn.validators = gr;
function CC(e) {
  const n = fe(Wr, null);
  return {
    mergedSize: O(() => e.size !== void 0 ? e.size : (n == null ? void 0 : n.props.size) !== void 0 ? n.props.size : "medium")
  };
}
function yC(e) {
  const n = fe(Wr, null), r = O(() => {
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
      return Vt(v);
    if (o.value) {
      const x = n == null ? void 0 : n.maxChildLabelWidthRef.value;
      return x !== void 0 ? Vt(x) : void 0;
    }
    if ((n == null ? void 0 : n.props.labelWidth) !== void 0)
      return Vt(n.props.labelWidth);
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
  }), d = I(!1), c = I(!1), f = O(() => {
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
function wC(e) {
  const n = fe(Wr, null), r = O(() => {
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
        const c = xa(u, d);
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
const {
  cubicBezierEaseInOut: rs
} = fn;
function BC({
  name: e = "fade-down",
  fromOffset: n = "-4px",
  enterDuration: r = ".3s",
  leaveDuration: o = ".3s",
  enterCubicBezier: i = rs,
  leaveCubicBezier: a = rs
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
const SC = k("form-item", `
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
}), BC({
  fromOffset: "-3px",
  enterDuration: ".3s",
  leaveDuration: ".2s"
})])])]);
var os = function(e, n, r, o) {
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
const AC = Object.assign(Object.assign({}, se.props), {
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
function is(e, n) {
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
const FC = J({
  name: "FormItem",
  props: AC,
  setup(e) {
    Gc(ld, "formItems", le(e, "path"));
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r
    } = Ae(e), o = fe(Wr, null), i = CC(e), a = yC(e), {
      validationErrored: l,
      validationWarned: s
    } = a, {
      mergedRequired: u,
      mergedRules: d
    } = wC(e), {
      mergedSize: c
    } = i, {
      mergedLabelPlacement: f,
      mergedLabelAlign: p,
      mergedRequireMarkPlacement: m
    } = a, v = I([]), x = I(on()), b = o ? le(o.props, "disabled") : I(!1), g = se("Form", "-form-item", SC, ad, e, n);
    ke(le(e, "path"), () => {
      e.ignorePathChange || w();
    });
    function w() {
      v.value = [], l.value = !1, s.value = !1, e.feedback && (x.value = on());
    }
    const A = (...F) => os(this, [...F], void 0, function* ($ = null, L = () => !0, R = {
      suppressWarning: !0
    }) {
      const {
        path: V
      } = e;
      R ? R.first || (R.first = e.first) : R = {};
      const {
        value: Q
      } = d, Z = o ? xa(o.props.model, V || "") : void 0, re = {}, W = {}, G = ($ ? Q.filter((be) => Array.isArray(be.trigger) ? be.trigger.includes($) : be.trigger === $) : Q).filter(L).map((be, Se) => {
        const Ce = Object.assign({}, be);
        if (Ce.validator && (Ce.validator = is(Ce.validator, !1)), Ce.asyncValidator && (Ce.asyncValidator = is(Ce.asyncValidator, !0)), Ce.renderMessage) {
          const et = `__renderMessage__${Se}`;
          W[et] = Ce.message, Ce.message = et, re[et] = Ce.renderMessage;
        }
        return Ce;
      }), ne = G.filter((be) => be.level !== "warning"), Be = G.filter((be) => be.level === "warning"), oe = {
        valid: !0,
        errors: void 0,
        warnings: void 0
      };
      if (!G.length) return oe;
      const pe = V ?? "__n_no_path__", Me = new Zn({
        [pe]: ne
      }), ae = new Zn({
        [pe]: Be
      }), {
        validateMessages: We
      } = (o == null ? void 0 : o.props) || {};
      We && (Me.messages(We), ae.messages(We));
      const Te = (be) => {
        v.value = be.map((Se) => {
          const Ce = (Se == null ? void 0 : Se.message) || "";
          return {
            key: Ce,
            render: () => Ce.startsWith("__renderMessage__") ? re[Ce]() : Ce
          };
        }), be.forEach((Se) => {
          var Ce;
          !((Ce = Se.message) === null || Ce === void 0) && Ce.startsWith("__renderMessage__") && (Se.message = W[Se.message]);
        });
      };
      if (ne.length) {
        const be = yield new Promise((Se) => {
          Me.validate({
            [pe]: Z
          }, R, Se);
        });
        be != null && be.length && (oe.valid = !1, oe.errors = be, Te(be));
      }
      if (Be.length && !oe.errors) {
        const be = yield new Promise((Se) => {
          ae.validate({
            [pe]: Z
          }, R, Se);
        });
        be != null && be.length && (Te(be), oe.warnings = be);
      }
      return !oe.errors && !oe.warnings ? w() : (l.value = !!oe.errors, s.value = !!oe.warnings), oe;
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
      return os(this, void 0, void 0, function* () {
        let L, R, V, Q;
        return typeof F == "string" ? (L = F, R = $) : F !== null && typeof F == "object" && (L = F.trigger, R = F.callback, V = F.shouldRuleBeApplied, Q = F.options), yield new Promise((Z, re) => {
          A(L, V, Q).then(({
            valid: W,
            errors: G,
            warnings: ne
          }) => {
            W ? (R && R(void 0, {
              warnings: ne
            }), Z({
              warnings: ne
            })) : (R && R(G, {
              warnings: ne
            }), re(G));
          });
        });
      });
    }
    xe(Fi, {
      path: le(e, "path"),
      disabled: b,
      mergedSize: i.mergedSize,
      mergedValidationStatus: a.mergedValidationStatus,
      restoreValidation: w,
      handleContentBlur: y,
      handleContentChange: S,
      handleContentFocus: T,
      handleContentInput: C
    });
    const M = {
      validate: P,
      restoreValidation: w,
      internalValidate: A
    }, _ = I(null);
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
          lineHeight: re,
          feedbackTextColor: W,
          feedbackTextColorWarning: G,
          feedbackTextColorError: ne,
          feedbackPadding: Be,
          labelFontWeight: oe,
          [U("labelHeight", $)]: pe,
          [U("blankHeight", $)]: Me,
          [U("feedbackFontSize", $)]: ae,
          [U("feedbackHeight", $)]: We,
          [U("labelPadding", R)]: Te,
          [U("labelTextAlign", R)]: be,
          [U(U("labelFontSize", L), $)]: Se
        }
      } = g.value;
      let Ce = (F = p.value) !== null && F !== void 0 ? F : be;
      return L === "top" && (Ce = Ce === "right" ? "flex-end" : "flex-start"), {
        "--n-bezier": V,
        "--n-line-height": re,
        "--n-blank-height": Me,
        "--n-label-font-size": Se,
        "--n-label-text-align": Ce,
        "--n-label-height": pe,
        "--n-label-padding": Te,
        "--n-label-font-weight": oe,
        "--n-asterisk-color": Z,
        "--n-label-text-color": Q,
        "--n-feedback-padding": Be,
        "--n-feedback-font-size": ae,
        "--n-feedback-height": We,
        "--n-feedback-text-color": W,
        "--n-feedback-text-color-warning": G,
        "--n-feedback-text-color-error": ne
      };
    }), H = r ? Ne("form-item", O(() => {
      var F;
      return `${c.value[0]}${f.value[0]}${((F = p.value) === null || F === void 0 ? void 0 : F[0]) || ""}`;
    }), K, e) : void 0, t = O(() => f.value === "left" && m.value === "left" && p.value === "left");
    return Object.assign(Object.assign(Object.assign(Object.assign({
      labelElementRef: _,
      mergedClsPrefix: n,
      mergedRequired: u,
      feedbackId: x,
      renderExplains: v,
      reverseColSpace: t
    }, a), i), M), {
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
    }, h(ut, {
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
}), PC = {
  closeMargin: "16px 12px",
  closeSize: "20px",
  closeIconSize: "16px",
  width: "365px",
  padding: "16px",
  titleFontSize: "16px",
  metaFontSize: "12px",
  descriptionFontSize: "12px"
};
function $C(e) {
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
    fontWeightStrong: x,
    boxShadow2: b,
    lineHeight: g,
    fontSize: w
  } = e;
  return Object.assign(Object.assign({}, PC), {
    borderRadius: v,
    lineHeight: g,
    fontSize: w,
    headerFontWeight: x,
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
const DC = {
  name: "Notification",
  common: He,
  peers: {
    Scrollbar: Io
  },
  self: $C
}, EC = {
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
function zC(e) {
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
    closeColorPressed: x
  } = e;
  return Object.assign(Object.assign({}, EC), {
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
    closeColorPressed: x,
    closeIconColor: r,
    closeIconColorHover: o,
    closeIconColorPressed: i,
    closeColorHoverInfo: v,
    closeColorPressedInfo: x,
    closeIconColorInfo: r,
    closeIconColorHoverInfo: o,
    closeIconColorPressedInfo: i,
    closeColorHoverSuccess: v,
    closeColorPressedSuccess: x,
    closeIconColorSuccess: r,
    closeIconColorHoverSuccess: o,
    closeIconColorPressedSuccess: i,
    closeColorHoverError: v,
    closeColorPressedError: x,
    closeIconColorError: r,
    closeIconColorHoverError: o,
    closeIconColorPressedError: i,
    closeColorHoverWarning: v,
    closeColorPressedWarning: x,
    closeIconColorWarning: r,
    closeIconColorHoverWarning: o,
    closeIconColorPressedWarning: i,
    closeColorHoverLoading: v,
    closeColorPressedLoading: x,
    closeIconColorLoading: r,
    closeIconColorHoverLoading: o,
    closeIconColorPressedLoading: i,
    loadingColor: f,
    lineHeight: p,
    borderRadius: m
  });
}
const kC = {
  name: "Message",
  common: He,
  self: zC
};
function TC(e) {
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
const RC = {
  name: "LoadingBar",
  common: He,
  self: TC
}, OC = {
  iconSize: "22px"
};
function MC(e) {
  const {
    fontSize: n,
    warningColor: r
  } = e;
  return Object.assign(Object.assign({}, OC), {
    fontSize: n,
    iconColor: r
  });
}
const IC = {
  name: "Popconfirm",
  common: He,
  peers: {
    Button: Ba,
    Popover: Nr
  },
  self: MC
};
function _C(e) {
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
const LC = {
  name: "Spin",
  common: He,
  self: _C
}, NC = {
  thPaddingSmall: "6px",
  thPaddingMedium: "12px",
  thPaddingLarge: "12px",
  tdPaddingSmall: "6px",
  tdPaddingMedium: "12px",
  tdPaddingLarge: "12px"
};
function HC(e) {
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
  return Object.assign(Object.assign({}, NC), {
    fontSizeSmall: p,
    fontSizeMedium: m,
    fontSizeLarge: v,
    lineHeight: f,
    borderRadius: d,
    borderColor: ft(r, n),
    borderColorModal: ft(o, n),
    borderColorPopover: ft(i, n),
    tdColor: r,
    tdColorModal: o,
    tdColorPopover: i,
    tdColorStriped: ft(r, l),
    tdColorStripedModal: ft(o, l),
    tdColorStripedPopover: ft(i, l),
    thColor: ft(r, a),
    thColorModal: ft(o, a),
    thColorPopover: ft(i, a),
    thTextColor: s,
    tdTextColor: u,
    thFontWeight: c
  });
}
const jC = {
  name: "Table",
  common: He,
  self: HC
};
function WC(e) {
  const {
    primaryColor: n,
    baseColor: r
  } = e;
  return {
    color: n,
    iconColor: r
  };
}
const VC = {
  name: "IconWrapper",
  common: He,
  self: WC
}, qC = k("icon-wrapper", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-icon-color);
`), KC = Object.assign(Object.assign({}, se.props), {
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
}), UC = J({
  name: "IconWrapper",
  props: KC,
  setup(e, {
    slots: n
  }) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: o
    } = Ae(e), i = se("IconWrapper", "-icon-wrapper", qC, VC, e, r), a = O(() => {
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
      const s = Vt(e.size);
      return l == null || l.onRender(), h("div", {
        class: [`${r.value}-icon-wrapper`, l == null ? void 0 : l.themeClass.value],
        style: [a == null ? void 0 : a.value, {
          height: s,
          width: s,
          borderRadius: Vt(e.borderRadius),
          backgroundColor: e.color,
          color: e.iconColor
        }]
      }, n);
    };
  }
}), dd = "n-loading-bar", cd = "n-loading-bar-api", GC = k("loading-bar-container", `
 z-index: 5999;
 position: fixed;
 top: 0;
 left: 0;
 right: 0;
 height: 2px;
`, [_o({
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
var io = function(e, n, r, o) {
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
function ao(e, n) {
  return `${n}-loading-bar ${n}-loading-bar--${e}`;
}
const XC = J({
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
    } = fe(dd), o = I(null), i = I(!1), a = I(!1), l = I(!1), s = I(!1);
    let u = !1;
    const d = I(!1), c = O(() => {
      const {
        loadingBarStyle: S
      } = n;
      return S ? S[d.value ? "error" : "loading"] : "";
    });
    function f() {
      return io(this, void 0, void 0, function* () {
        i.value = !1, l.value = !1, u = !1, d.value = !1, s.value = !0, yield Ze(), s.value = !1;
      });
    }
    function p() {
      return io(this, arguments, void 0, function* (S = 0, T = 80, C = "starting") {
        if (a.value = !0, yield f(), u) return;
        l.value = !0, yield Ze();
        const P = o.value;
        P && (P.style.maxWidth = `${S}%`, P.style.transition = "none", P.offsetWidth, P.className = ao(C, r.value), P.style.transition = "", P.style.maxWidth = `${T}%`);
      });
    }
    function m() {
      return io(this, void 0, void 0, function* () {
        if (u || d.value) return;
        a.value && (yield Ze()), u = !0;
        const S = o.value;
        S && (S.className = ao("finishing", r.value), S.style.maxWidth = "100%", S.offsetWidth, l.value = !1);
      });
    }
    function v() {
      if (!(u || d.value))
        if (!l.value)
          p(100, 100, "error").then(() => {
            d.value = !0;
            const S = o.value;
            S && (S.className = ao("error", r.value), S.offsetWidth, l.value = !1);
          });
        else {
          d.value = !0;
          const S = o.value;
          if (!S) return;
          S.className = ao("error", r.value), S.style.maxWidth = "100%", S.offsetWidth, l.value = !1;
        }
    }
    function x() {
      i.value = !0;
    }
    function b() {
      i.value = !1;
    }
    function g() {
      return io(this, void 0, void 0, function* () {
        yield f();
      });
    }
    const w = se("LoadingBar", "-loading-bar", GC, RC, n, r), A = O(() => {
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
      handleEnter: x,
      handleAfterEnter: b,
      handleAfterLeave: g,
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
    return h(ut, {
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
        })), [[Gn, this.loading || !this.loading && this.entering]]);
      }
    });
  }
}), YC = Object.assign(Object.assign({}, se.props), {
  to: {
    type: [String, Object, Boolean],
    default: void 0
  },
  containerClass: String,
  containerStyle: [String, Object],
  loadingBarStyle: {
    type: Object
  }
}), ZC = J({
  name: "LoadingBarProvider",
  props: YC,
  setup(e) {
    const n = tr(), r = I(null), o = {
      start() {
        var a;
        n.value ? (a = r.value) === null || a === void 0 || a.start() : Ze(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.start();
        });
      },
      error() {
        var a;
        n.value ? (a = r.value) === null || a === void 0 || a.error() : Ze(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.error();
        });
      },
      finish() {
        var a;
        n.value ? (a = r.value) === null || a === void 0 || a.finish() : Ze(() => {
          var l;
          (l = r.value) === null || l === void 0 || l.finish();
        });
      }
    }, {
      mergedClsPrefixRef: i
    } = Ae(e);
    return xe(cd, o), xe(dd, {
      props: e,
      mergedClsPrefixRef: i
    }), Object.assign(o, {
      loadingBarRef: r
    });
  },
  render() {
    var e, n;
    return h(Je, null, h(Po, {
      disabled: this.to === !1,
      to: this.to || "body"
    }, h(XC, {
      ref: "loadingBarRef",
      containerStyle: this.containerStyle,
      containerClass: this.containerClass
    })), (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e));
  }
});
function JC() {
  const e = fe(cd, null);
  return e === null && dn("use-loading-bar", "No outer <n-loading-bar-provider /> founded."), e;
}
const fd = {
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
}, hd = "n-message-api", vd = "n-message-provider", QC = D([k("message-wrapper", `
 margin: var(--n-margin);
 z-index: 0;
 transform-origin: top center;
 display: flex;
 `, [Lu({
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
 `, [$r()])]), z("close", `
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
 `)])]), ey = {
  info: () => h(So, null),
  success: () => h(Ca, null),
  warning: () => h(Oo, null),
  error: () => h(ba, null),
  default: () => null
}, ty = J({
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
    } = fe(vd), a = gt("Message", r, i), l = se("Message", "-message", QC, kC, o, i), s = O(() => {
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
          closeMargin: x,
          closeSize: b,
          iconSize: g,
          fontSize: w,
          lineHeight: A,
          borderRadius: y,
          iconColorInfo: S,
          iconColorSuccess: T,
          iconColorWarning: C,
          iconColorError: P,
          iconColorLoading: M,
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
        "--n-icon-size": g,
        "--n-close-icon-size": _,
        "--n-close-border-radius": K,
        "--n-close-size": b,
        "--n-close-margin": x,
        "--n-text-color": H,
        "--n-color": F,
        "--n-box-shadow": t,
        "--n-icon-color-info": S,
        "--n-icon-color-success": T,
        "--n-icon-color-warning": C,
        "--n-icon-color-error": P,
        "--n-icon-color-loading": M,
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
    }, (f = ny(u, n, i)) && c ? h("div", {
      class: `${i}-message__icon ${i}-message__icon--${n}-type`
    }, h(Mo, null, {
      default: () => f
    })) : null, h("div", {
      class: `${i}-message__content`
    }, je(o)), r ? h(Ir, {
      clsPrefix: i,
      class: `${i}-message__close`,
      onClick: d,
      absolute: !0
    }) : null));
  }
});
function ny(e, n, r) {
  if (typeof e == "function")
    return e();
  {
    const o = n === "loading" ? h(_r, {
      clsPrefix: r,
      strokeWidth: 24,
      scale: 0.85
    }) : ey[n]();
    return o ? h(yt, {
      clsPrefix: r,
      key: n
    }, {
      default: () => o
    }) : null;
  }
}
const ry = J({
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
    const r = I(!0);
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
    return h(ya, {
      appear: !0,
      onAfterLeave: this.handleAfterLeave,
      onLeave: this.onLeave
    }, {
      default: () => [this.show ? h(ty, {
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
}), oy = Object.assign(Object.assign({}, se.props), {
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
}), iy = J({
  name: "MessageProvider",
  props: oy,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Ae(e), r = I([]), o = I({}), i = {
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
    xe(vd, {
      props: e,
      mergedClsPrefixRef: n
    }), xe(hd, i);
    function a(u, d) {
      const c = on(), f = Tr(Object.assign(Object.assign({}, d), {
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
    return h(Je, null, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e), this.messageList.length ? h(Po, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, h("div", {
      class: [`${this.mergedClsPrefix}-message-container`, `${this.mergedClsPrefix}-message-container--${this.placement}`, this.containerClass],
      key: "message-container",
      style: this.containerStyle
    }, this.messageList.map((o) => h(ry, Object.assign({
      ref: (i) => {
        i && (this.messageRefs[o.key] = i);
      },
      internalKey: o.key,
      onInternalAfterLeave: this.handleAfterLeave
    }, Rr(o, ["destroy"], void 0), {
      duration: o.duration === void 0 ? this.duration : o.duration,
      keepAliveOnHover: o.keepAliveOnHover === void 0 ? this.keepAliveOnHover : o.keepAliveOnHover,
      closable: o.closable === void 0 ? this.closable : o.closable
    }))))) : null);
  }
});
function ay() {
  const e = fe(hd, null);
  return e === null && dn("use-message", "No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."), e;
}
const ly = J({
  name: "ModalEnvironment",
  props: Object.assign(Object.assign({}, nd), {
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
    const n = I(!0);
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
    return h(rd, Object.assign({}, this.$props, {
      show: i,
      onUpdateShow: e,
      onMaskClick: r,
      onEsc: o,
      onAfterLeave: n,
      internalAppear: !0,
      internalModal: !0
    }));
  }
}), as = "n-modal-provider", pd = "n-modal-api", sy = "n-modal-reactive-list", uy = {
  to: [String, Object]
}, dy = J({
  name: "ModalProvider",
  props: uy,
  setup() {
    const e = xo(64), n = go(), r = I([]), o = {};
    function i(u = {}) {
      const d = on(), c = Tr(Object.assign(Object.assign({}, u), {
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
    return xe(pd, s), xe(as, {
      clickedRef: xo(64),
      clickedPositionRef: go()
    }), xe(sy, r), xe(as, {
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
    return h(Je, null, [this.modalList.map((r) => {
      var o;
      return h(ly, Rr(r, ["destroy"], {
        to: (o = r.to) !== null && o !== void 0 ? o : this.to,
        ref: (i) => {
          i === null ? delete this.modalInstRefs[`n-modal-${r.key}`] : this.modalInstRefs[`n-modal-${r.key}`] = i;
        },
        internalKey: r.key,
        onInternalAfterLeave: this.handleAfterLeave
      }));
    }), (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e)]);
  }
});
function cy() {
  const e = fe(pd, null);
  return e === null && dn("use-modal", "No outer <n-modal-provider /> founded."), e;
}
const jo = "n-notification-provider", fy = J({
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
    } = fe(jo), o = I(null);
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
    }, n ? h(Lr, {
      theme: o.peers.Scrollbar,
      themeOverrides: o.peerOverrides.Scrollbar,
      contentStyle: {
        overflow: "hidden"
      }
    }, e) : e);
  }
}), hy = {
  info: () => h(So, null),
  success: () => h(Ca, null),
  warning: () => h(Oo, null),
  error: () => h(ba, null),
  default: () => null
}, $a = {
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
}, vy = Sn($a), py = J({
  name: "Notification",
  props: $a,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      mergedThemeRef: r,
      props: o
    } = fe(jo), {
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
          headerTextColor: x,
          descriptionTextColor: b,
          actionTextColor: g,
          borderRadius: w,
          headerFontWeight: A,
          boxShadow: y,
          lineHeight: S,
          fontSize: T,
          closeMargin: C,
          closeSize: P,
          width: M,
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
          cubicBezierEaseInOut: re
        }
      } = r.value, {
        left: W,
        right: G,
        top: ne,
        bottom: Be
      } = St(_);
      return {
        "--n-color": c,
        "--n-font-size": T,
        "--n-text-color": f,
        "--n-description-text-color": b,
        "--n-action-text-color": g,
        "--n-title-text-color": x,
        "--n-title-font-weight": A,
        "--n-bezier": re,
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
        "--n-width": M,
        "--n-padding-left": W,
        "--n-padding-right": G,
        "--n-padding-top": ne,
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
      default: () => hy[this.type]()
    }) : null) : null, this.closable ? h(Ir, {
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
}), gy = Object.assign(Object.assign({}, $a), {
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
}), xy = J({
  name: "NotificationEnvironment",
  props: Object.assign(Object.assign({}, gy), {
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
    } = fe(jo), r = I(!0);
    let o = null;
    function i() {
      r.value = !1, o && window.clearTimeout(o);
    }
    function a(v) {
      n.value++, Ze(() => {
        v.style.height = `${v.offsetHeight}px`, v.style.maxHeight = "0", v.style.transition = "none", v.offsetHeight, v.style.transition = "", v.style.maxHeight = v.style.height;
      });
    }
    function l(v) {
      n.value--, v.style.height = "", v.style.maxHeight = "";
      const {
        onAfterEnter: x,
        onAfterShow: b
      } = e;
      x && x(), b && b();
    }
    function s(v) {
      n.value++, v.style.maxHeight = `${v.offsetHeight}px`, v.style.height = `${v.offsetHeight}px`, v.offsetHeight;
    }
    function u(v) {
      const {
        onHide: x
      } = e;
      x && x(), v.style.maxHeight = "0", v.offsetHeight;
    }
    function d() {
      n.value--;
      const {
        onAfterLeave: v,
        onInternalAfterLeave: x,
        onAfterHide: b,
        internalKey: g
      } = e;
      v && v(), x(g), b && b();
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
      v ? Promise.resolve(v()).then((x) => {
        x !== !1 && i();
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
    return h(ut, {
      name: "notification-transition",
      appear: !0,
      // convert to any since Element is not compatible with HTMLElement
      onBeforeEnter: this.handleBeforeEnter,
      onAfterEnter: this.handleAfterEnter,
      onBeforeLeave: this.handleBeforeLeave,
      onLeave: this.handleLeave,
      onAfterLeave: this.handleAfterLeave
    }, {
      default: () => this.show ? h(py, Object.assign({}, an(this.$props, vy), {
        onClose: this.handleClose,
        onMouseenter: this.duration && this.keepAliveOnHover ? this.handleMouseenter : void 0,
        onMouseleave: this.duration && this.keepAliveOnHover ? this.handleMouseleave : void 0
      })) : null
    });
  }
}), my = D([k("notification-container", `
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
 `, [lo("top-right")]), N("top-left", `
 left: 0;
 `, [lo("top-left")]), N("bottom-right", `
 right: 0;
 `, [lo("bottom-right")]), N("bottom-left", `
 left: 0;
 `, [lo("bottom-left")]), N("scrollable", [N("top-right", `
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
function lo(e) {
  const r = e.split("-")[1] === "left" ? "calc(-100%)" : "calc(100%)";
  return k("notification-wrapper", [D("&.notification-transition-enter-from, &.notification-transition-leave-to", `
 transform: translate(${r}, 0);
 `), D("&.notification-transition-leave-from, &.notification-transition-enter-to", `
 transform: translate(0, 0);
 `)]);
}
const gd = "n-notification-api", by = Object.assign(Object.assign({}, se.props), {
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
}), Cy = J({
  name: "NotificationProvider",
  props: by,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Ae(e), r = I([]), o = {}, i = /* @__PURE__ */ new Set();
    function a(m) {
      const v = on(), x = () => {
        i.add(v), o[v] && o[v].hide();
      }, b = Tr(Object.assign(Object.assign({}, m), {
        key: v,
        destroy: x,
        hide: x,
        deactivate: x
      })), {
        max: g
      } = e;
      if (g && r.value.length - i.size >= g) {
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
    const u = se("Notification", "-notification", my, DC, e, n), d = {
      create: a,
      info: l[0],
      success: l[1],
      warning: l[2],
      error: l[3],
      open: f,
      destroyAll: p
    }, c = I(0);
    xe(gd, d), xe(jo, {
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
    return h(Je, null, (n = (e = this.$slots).default) === null || n === void 0 ? void 0 : n.call(e), this.notificationList.length ? h(Po, {
      to: (r = this.to) !== null && r !== void 0 ? r : "body"
    }, h(fy, {
      class: this.containerClass,
      style: this.containerStyle,
      scrollable: this.scrollable && o !== "top" && o !== "bottom",
      placement: o
    }, {
      default: () => this.notificationList.map((i) => h(xy, Object.assign({
        ref: (a) => {
          const l = i.key;
          a === null ? delete this.notificationRefs[l] : this.notificationRefs[l] = a;
        }
      }, Rr(i, ["destroy", "hide", "deactivate"]), {
        internalKey: i.key,
        onInternalAfterLeave: this.handleAfterLeave,
        keepAliveOnHover: i.keepAliveOnHover === void 0 ? this.keepAliveOnHover : i.keepAliveOnHover
      })))
    })) : null);
  }
});
function yy() {
  const e = fe(gd, null);
  return e === null && dn("use-notification", "No outer `n-notification-provider` found."), e;
}
const xd = "n-popconfirm", md = {
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
}, ls = Sn(md), wy = J({
  name: "NPopconfirmPanel",
  props: md,
  setup(e) {
    const {
      localeRef: n
    } = Pr("Popconfirm"), {
      inlineThemeDisabled: r
    } = Ae(), {
      mergedClsPrefixRef: o,
      mergedThemeRef: i,
      props: a
    } = fe(xd), l = O(() => {
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
    return Object.assign(Object.assign({}, Pr("Popconfirm")), {
      mergedClsPrefix: o,
      cssVars: r ? void 0 : l,
      localizedPositiveText: O(() => e.positiveText || n.value.positiveText),
      localizedNegativeText: O(() => e.negativeText || n.value.negativeText),
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
    } = this, i = Et(o.action, () => this.negativeText === null && this.positiveText === null ? [] : [this.negativeText !== null && h(Dr, Object.assign({
      size: "small",
      onClick: this.handleNegativeClick
    }, this.negativeButtonProps), {
      default: () => this.localizedNegativeText
    }), this.positiveText !== null && h(Dr, Object.assign({
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
      default: () => h(Oo, null)
    })])) : null, a) : null), i ? h("div", {
      class: [`${n}-popconfirm__action`]
    }, i) : null);
  }
}), By = k("popconfirm", [z("body", `
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
 `, [D("&:not(:first-child)", "margin-top: 8px"), k("button", [D("&:not(:last-child)", "margin-right: 8px;")])])]), Sy = Object.assign(Object.assign(Object.assign({}, se.props), Hr), {
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
}), Ay = J({
  name: "Popconfirm",
  props: Sy,
  __popover__: !0,
  setup(e) {
    const {
      mergedClsPrefixRef: n
    } = Ae(), r = se("Popconfirm", "-popconfirm", By, IC, e, n), o = I(null);
    function i(s) {
      var u;
      if (!(!((u = o.value) === null || u === void 0) && u.getMergedShow())) return;
      const {
        onPositiveClick: d,
        "onUpdate:show": c
      } = e;
      Promise.resolve(d ? d(s) : !0).then((f) => {
        var p;
        f !== !1 && ((p = o.value) === null || p === void 0 || p.setShow(!1), c && ve(c, !1));
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
        f !== !1 && ((p = o.value) === null || p === void 0 || p.setShow(!1), c && ve(c, !1));
      });
    }
    return xe(xd, {
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
    return h(jr, Rr(n, ls, {
      theme: r.peers.Popover,
      themeOverrides: r.peerOverrides.Popover,
      internalExtraClass: ["popconfirm"],
      ref: "popoverInstRef"
    }), {
      trigger: e.activator || e.trigger,
      default: () => {
        const o = an(n, ls);
        return h(wy, Object.assign(Object.assign({}, o), {
          onPositiveClick: this.handlePositiveClick,
          onNegativeClick: this.handleNegativeClick
        }), e);
      }
    });
  }
}), Fy = D([D("@keyframes spin-rotate", `
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
 `, [_o()])]), k("spin-body", `
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
 `)])]), Py = {
  small: 20,
  medium: 18,
  large: 16
}, $y = Object.assign(Object.assign({}, se.props), {
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
}), Dy = J({
  name: "Spin",
  props: $y,
  setup(e) {
    process.env.NODE_ENV !== "production" && ot(() => {
      e.spinning !== void 0 && at("spin", "`spinning` is deprecated, please use `show` instead.");
    });
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r
    } = Ae(e), o = se("Spin", "-spin", Fy, LC, e, n), i = O(() => {
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
      } = c, v = typeof u == "number" ? jn(u) : c[U("size", u)];
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
    }), i, e) : void 0, l = Yi(e, ["spinning", "show"]), s = I(!1);
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
        return Py[typeof d == "number" ? "medium" : d];
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
    }, h(_r, {
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
    }, r), h(ut, {
      name: "fade-in-transition"
    }, {
      default: () => this.active ? s : null
    })) : s;
  }
}), Ey = D([k("table", `
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
 `)])])])]), Ui(k("table", `
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `, [D("th", `
 background-color: var(--n-th-color-modal);
 `), D("td", `
 background-color: var(--n-td-color-modal);
 `)])), As(k("table", `
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `, [D("th", `
 background-color: var(--n-th-color-popover);
 `), D("td", `
 background-color: var(--n-td-color-popover);
 `)]))]), zy = Object.assign(Object.assign({}, se.props), {
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
}), ky = J({
  name: "Table",
  props: zy,
  setup(e) {
    const {
      mergedClsPrefixRef: n,
      inlineThemeDisabled: r,
      mergedRtlRef: o
    } = Ae(e), i = se("Table", "-table", Ey, jC, e, n), a = gt("Table", o, n), l = O(() => {
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
          thColorPopover: x,
          thTextColor: b,
          tdTextColor: g,
          borderRadius: w,
          thFontWeight: A,
          lineHeight: y,
          borderColorModal: S,
          borderColorPopover: T,
          tdColorStriped: C,
          tdColorStripedModal: P,
          tdColorStripedPopover: M,
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
        "--n-td-text-color": g,
        "--n-border-color": d,
        "--n-border-color-modal": S,
        "--n-border-color-popover": T,
        "--n-border-radius": w,
        "--n-font-size": _,
        "--n-th-color": m,
        "--n-th-color-modal": v,
        "--n-th-color-popover": x,
        "--n-th-font-weight": A,
        "--n-th-text-color": b,
        "--n-line-height": y,
        "--n-td-padding": K,
        "--n-th-padding": H,
        "--n-td-color-striped": C,
        "--n-td-color-striped-modal": P,
        "--n-td-color-striped-popover": M
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
}), Ty = J({
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
}), Ry = {
  message: ay,
  notification: yy,
  loadingBar: JC,
  dialog: id,
  modal: cy
};
function Oy({
  providersAndProps: e,
  configProviderProps: n
}) {
  let r = rc(i);
  const o = {
    app: r
  };
  function i() {
    return h(Ku, we(n), {
      default: () => e.map(({
        type: s,
        Provider: u,
        props: d
      }) => h(u, we(d), {
        default: () => h(Ty, {
          onSetup: () => o[s] = Ry[s]()
        })
      }))
    });
  }
  let a;
  return er && (a = document.createElement("div"), document.body.appendChild(a), r.mount(a)), Object.assign({
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
function Qy(e, {
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
          Provider: iy,
          props: r
        });
        break;
      case "notification":
        s.push({
          type: d,
          Provider: Cy,
          props: i
        });
        break;
      case "dialog":
        s.push({
          type: d,
          Provider: od,
          props: o
        });
        break;
      case "loadingBar":
        s.push({
          type: d,
          Provider: ZC,
          props: a
        });
        break;
      case "modal":
        s.push({
          type: d,
          Provider: dy,
          props: l
        });
    }
  }), Oy({
    providersAndProps: s,
    configProviderProps: n
  });
}
const My = /* @__PURE__ */ Object.assign({
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
    return (r, o) => (rt(), vt(we(Ku), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: we(Fg),
      "date-locale": we(Nx),
      "theme-overrides": n
    }, {
      default: pt(() => [
        $o(we(od), null, {
          default: pt(() => [
            Un(r.$slots, "default")
          ]),
          _: 3
        })
      ]),
      _: 3
    }, 8, ["locale", "date-locale"]));
  }
});
function Iy(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var bd = { exports: {} };
(function(e) {
  function n() {
    var r = 0, o = 1, i = 2, a = 3, l = 4, s = 5, u = 6, d = 7, c = 8, f = 9, p = 10, m = 11, v = 12, x = 13, b = 14, g = 15, w = 16, A = 17, y = 0, S = 1, T = 2, C = 3, P = 4;
    function M(t, F) {
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
      }) && [a, x, A].indexOf(t) == -1)
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
      if (V == a || V == g)
        return y;
      if (V == s)
        return y;
      if (R == v)
        return y;
      var re = L.indexOf(a) != -1 ? L.lastIndexOf(a) - 1 : L.length - 2;
      return [x, A].indexOf(L[re]) != -1 && L.slice(re + 1, -1).every(function(W) {
        return W == a;
      }) && V == b || R == g && [w, A].indexOf(V) != -1 ? y : F.indexOf(l) != -1 ? T : R == l && V == l ? y : S;
    }
    this.nextBreak = function(t, F) {
      if (F === void 0 && (F = 0), F < 0)
        return 0;
      if (F >= t.length - 1)
        return t.length;
      for (var $ = H(_(t, F)), L = [], R = F + 1; R < t.length; R++)
        if (!M(t, R - 1)) {
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
      129489 <= t && t <= 129501 ? x : 127995 <= t && t <= 127999 ? b : t == 8205 ? g : t == 9792 || // So       FEMALE SIGN
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
})(bd);
var _y = bd.exports;
const Ly = /* @__PURE__ */ Iy(_y), Ny = new Ly(), Hy = (e = "") => Ny.countGraphemes(e);
function jy(e) {
  return e && typeof e == "object" && typeof e.then == "function";
}
const Cd = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ fo({
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
  emits: /* @__PURE__ */ fo(["blur", "input"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = cs(e, "modelValue"), o = n;
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
    return (s, u) => (rt(), vt(we(Sb), {
      "input-props": { autocomplete: "off" },
      type: e.type,
      size: e.size,
      "show-password-on": e.showPassword ? "click" : void 0,
      value: r.value,
      maxlength: e.maxlength,
      "show-count": e.showCount,
      "count-graphemes": e.maxlength != null && e.maxlength > 0 || e.showCount ? we(Hy) : void 0,
      placeholder: e.placeholder,
      autofocus: e.autofocus,
      disabled: e.disabled,
      readonly: e.readonly,
      onInput: l,
      onBlur: a
    }, fs({ _: 2 }, [
      e.prefixIcon ? {
        name: "prefix",
        fn: pt(() => [
          $o(we(Aa), oc(ic(e.prefixIcon)), null, 16)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["type", "size", "show-password-on", "value", "maxlength", "show-count", "count-graphemes", "placeholder", "autofocus", "disabled", "readonly"]));
  }
});
var cr = void 0, Kn = {}, Vi;
Kn.throttle = Vi = function(e, n, r, o) {
  var i, a = 0;
  typeof n != "boolean" && (o = r, r = n, n = cr);
  function l() {
    var s = this, u = +/* @__PURE__ */ new Date() - a, d = arguments;
    function c() {
      a = +/* @__PURE__ */ new Date(), r.apply(s, d);
    }
    function f() {
      i = cr;
    }
    o && !i && c(), i && clearTimeout(i), o === cr && u > e ? c() : n !== !0 && (i = setTimeout(o ? f : c, o === cr ? e - u : e));
  }
  return Kn.guid && (l.guid = r.guid = r.guid || Kn.guid++), l;
};
Kn.debounce = function(e, n, r) {
  return r === cr ? Vi(e, n, !1) : Vi(e, r, n !== !1);
};
const Da = function(e, n, r) {
  return Kn.debounce(n || 300, r ?? !0, e);
}, ew = function(e, n, r) {
  return Kn.throttle(n || 300, r ?? !1, e);
}, Wy = /* @__PURE__ */ Object.assign({
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
      }), I(f);
    }();
    function i() {
      const f = {};
      return e.model.forEach((p) => {
        p.slot && (f[p.field] = uc(p.value));
      }), { ...o.value, ...f };
    }
    const a = r, l = za("form"), s = Da(function() {
      document.activeElement && document.activeElement.blur(), l.value.validate((f) => {
        a("submit", { formData: i(), valid: !f || f.length === 0, errors: f });
      }).catch(() => null);
    }), u = za("formItem");
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
    return n({ restoreValidation: d }), (f, p) => (rt(), vt(we(j1), {
      ref: "form",
      "show-label": e.showLabel,
      "label-placement": e.labelPlacement,
      "label-width": "auto",
      "label-align": e.labelPlacement === "left" ? "right" : "left",
      model: we(o),
      rules: e.rules,
      onSubmit: ac(we(s), ["prevent"])
    }, {
      default: pt(() => [
        (rt(!0), Ki(Je, null, lc(e.model, (m) => (rt(), vt(we(FC), {
          ref_for: !0,
          ref: "formItem",
          key: m.field,
          label: m.label,
          path: m.field,
          "feedback-class": e.feedbackSizeClass ? `p-form-item-feedback-${e.feedbackSizeClass}` : "",
          first: !0
        }, {
          default: pt(() => [
            !m.slot && m.type === "input" ? (rt(), vt(sc(we(Cd)), un({
              key: 0,
              modelValue: we(o)[m.field],
              "onUpdate:modelValue": (v) => we(o)[m.field] = v,
              ref_for: !0
            }, { disabled: e.disabled, readonly: e.readonly, ...m.props }, {
              onInput: (v) => c(m.field)
            }), null, 16, ["modelValue", "onUpdate:modelValue", "onInput"])) : Un(f.$slots, m.field, { key: 1 })
          ]),
          _: 2
        }, 1032, ["label", "path", "feedback-class"]))), 128)),
        Un(f.$slots, "default")
      ]),
      _: 3
    }, 8, ["show-label", "label-placement", "label-align", "model", "rules", "onSubmit"]));
  }
}), Vy = /* @__PURE__ */ Object.assign({
  name: "PSelect",
  inheritAttrs: !1
}, {
  __name: "select",
  props: /* @__PURE__ */ fo({
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
  emits: /* @__PURE__ */ fo(["update", "change"], ["update:modelValue"]),
  setup(e, { emit: n }) {
    const r = hs(), o = n, i = cs(e, "modelValue"), a = Da(function(l) {
      l !== i.value && Ze(() => {
        o("change", l);
      }), i.value = l, o("update", l);
    }, 300);
    return (l, s) => (rt(), vt(we(t1), {
      class: vs(`${we(r).class ? we(r).class : ""}`),
      style: dc(e.width ? `width:${e.width}` : ""),
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
      "onUpdate:value": we(a)
    }, {
      empty: pt(() => [
        $o(we(ku), {
          size: "small",
          description: e.emptyDescription
        }, null, 8, ["description"])
      ]),
      _: 1
    }, 8, ["class", "style", "options", "value", "size", "placeholder", "disabled", "value-field", "label-field", "clearable", "show-checkmark", "onUpdate:value"]));
  }
}), zr = /* @__PURE__ */ Object.assign({
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
    const r = hs(), o = ps(), i = n, a = Da(function() {
      i("click");
    }, 300);
    return (l, s) => (rt(), vt(we(Dr), {
      class: vs([
        we(r).class ? we(r).class : "",
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
      onClick: we(a)
    }, fs({
      default: pt(() => [
        !e.loading || e.loading && !e.loadingWithoutText ? (rt(), vt(we(o).default, { key: 0 })) : xr("", !0)
      ]),
      _: 2
    }, [
      l.$slots.icon ? {
        name: "icon",
        fn: pt(() => [
          $o(we(o).icon)
        ]),
        key: "0"
      } : void 0
    ]), 1032, ["class", "attr-type", "block", "size", "type", "loading", "ghost", "secondary", "text", "disabled", "onClick"]));
  }
}), qy = /* @__PURE__ */ Object.assign({
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
    return (n, r) => (rt(), vt(we(ky), {
      "bottom-bordered": e.bottomBordered,
      bordered: e.bordered,
      "single-column": e.singleColumn,
      "single-line": e.singleLine,
      size: e.size,
      striped: e.striped
    }, {
      default: pt(() => [
        Un(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["bottom-bordered", "bordered", "single-column", "single-line", "size", "striped"]));
  }
}), Ky = {
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
    return (o, i) => (rt(), Ki(Je, null, [
      e.negativeText ? (rt(), vt(we(zr), {
        key: 0,
        size: "xs",
        type: "default",
        "default-type": e.type,
        onClick: n
      }, {
        default: pt(() => [
          nn(ho(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["default-type"])) : xr("", !0),
      e.positiveText ? (rt(), vt(we(zr), {
        key: 1,
        size: "xs",
        type: e.type,
        onClick: r
      }, {
        default: pt(() => [
          nn(ho(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type"])) : xr("", !0)
    ], 64));
  }
}, Uy = /* @__PURE__ */ J((e, {
  emit: n
}) => {
  const r = ps(), o = I(), i = () => {
    o.value.setShow(!1);
  };
  return () => h(Ay, {
    ref: o,
    class: {
      "p-popconfirm": !0,
      "p-popconfirm-none-action": e.positiveText == null && e.positiveText == null
    },
    showIcon: !1
  }, {
    default: r.default,
    trigger: r.trigger,
    action: () => h(Ky, {
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
    }
  }
}), Gy = ({ delay: e = 300, minPendingTime: n = 500, loadingValue: r = !1 } = {}) => {
  let o = 0, i = null;
  const a = () => {
    i && (clearTimeout(i), i = null);
  }, l = I(!!r), s = I(!!r);
  let u = null;
  const d = () => (l.value = !1, new Promise((c) => {
    u = c;
  }));
  return ke(
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
  ), gs(() => {
    u = null, a();
  }), { loading: s, waiting: l, doneLoading: d };
}, Xy = {
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
    const { loading: n, waiting: r, doneLoading: o } = Gy();
    function i(s, u) {
      const d = s({
        done: function() {
          return o().then(() => {
            e.onLoading(!1);
          });
        }
      });
      if (d !== !1)
        if (jy(d)) {
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
    return (s, u) => (rt(), Ki(Je, null, [
      e.negativeText ? (rt(), vt(we(zr), {
        key: 0,
        size: "small",
        type: "default",
        disabled: we(n),
        onClick: a
      }, {
        default: pt(() => [
          nn(ho(e.negativeText), 1)
        ]),
        _: 1
      }, 8, ["disabled"])) : xr("", !0),
      e.positiveText ? (rt(), vt(we(zr), {
        key: 1,
        size: "small",
        type: e.type,
        loading: we(n),
        loadingWithoutText: !1,
        onClick: l
      }, {
        default: pt(() => [
          nn(ho(e.positiveText), 1)
        ]),
        _: 1
      }, 8, ["type", "loading"])) : xr("", !0)
    ], 64));
  }
};
function Yy(e) {
  return typeof e == "string" ? function() {
    return h("p", { innerHTML: e });
  } : Array.isArray(e) ? function() {
    return h(
      "div",
      e.map((n) => h("p", { innerHTML: n }))
    );
  } : e;
}
const tw = () => {
  let e = null, n = null, r = null, o = null;
  const i = id(), a = (d = {}, c = { width: 430 }, f) => {
    const p = {
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
    return p.closeOnEsc = !1, p.maskClosable = !1, p.showIcon = !0, p.iconPlacement = "left", p.style = "width: " + c.width + "px", f && (p.type = f), (p.positiveText || p.negativeText) && (p.action = function() {
      return h(Xy, {
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
    }), p.content = Yy(d.content), i.create(p);
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
  return gs(() => {
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
}, nw = {
  install: (e, n = {}) => {
    const { prefix: r = "p" } = n;
    e.component(`${r}-practical`, My), e.component(`${r}-form`, Wy), e.component(`${r}-input`, Cd), e.component(`${r}-select`, Vy), e.component(`${r}-button`, zr), e.component(`${r}-table`, qy), e.component(`${r}-popconfirm`, Uy), e.component(`${r}-icon-wrapper`, UC), e.component(`${r}-icon`, Aa), e.component(`${r}-input-group`, Pb), e.component(`${r}-input-group-label`, Eb), e.component(`${r}-popover`, jr), e.component(`${r}-spin`, Dy), e.component(`${r}-collapse`, Kb), e.component(`${r}-collapse-item`, Xb), e.component(`${r}-dropdown`, B1), e.component(`${r}-tooltip`, u1);
  }
};
export {
  Qy as createDiscreteApi,
  Da as debounce,
  nw as default,
  ew as throttle,
  Gy as useDelayLoading,
  tw as useDialog
};
