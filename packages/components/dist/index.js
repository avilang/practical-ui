import { isVNode as Oa, Comment as _a, Fragment as Vr, defineComponent as xe, computed as W, ref as U, watch as _t, onMounted as vr, readonly as Ha, inject as be, getCurrentInstance as Zn, onBeforeUnmount as cr, renderSlot as Gr, onActivated as ka, onDeactivated as Wa, provide as Ur, onBeforeMount as Xr, shallowRef as Ia, watchEffect as Ze, h as d, Transition as sr, TransitionGroup as ja, toRef as xt, mergeProps as Na, nextTick as Tr, markRaw as xn, openBlock as Yr, createBlock as qr, unref as Se, withCtx as Qn, useAttrs as La, normalizeClass as Va, mergeModels as fn, useModel as Ga } from "vue";
function Ua(t) {
  return t.composedPath()[0] || null;
}
function hn(t) {
  return typeof t == "string" ? t.endsWith("px") ? Number(t.slice(0, t.length - 2)) : Number(t) : t;
}
function ei(t, r) {
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
const vn = {
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
}, ht = "^\\s*", vt = "\\s*$", Xe = "\\s*((\\.\\d+)|(\\d+(\\.\\d*)?))\\s*", Ye = "([0-9A-Fa-f])", qe = "([0-9A-Fa-f]{2})", Xa = new RegExp(`${ht}rgb\\s*\\(${Xe},${Xe},${Xe}\\)${vt}`), Ya = new RegExp(`${ht}rgba\\s*\\(${Xe},${Xe},${Xe},${Xe}\\)${vt}`), qa = new RegExp(`${ht}#${Ye}${Ye}${Ye}${vt}`), Ka = new RegExp(`${ht}#${qe}${qe}${qe}${vt}`), Ja = new RegExp(`${ht}#${Ye}${Ye}${Ye}${Ye}${vt}`), Za = new RegExp(`${ht}#${qe}${qe}${qe}${qe}${vt}`);
function de(t) {
  return parseInt(t, 16);
}
function tt(t) {
  try {
    let r;
    if (r = Ka.exec(t))
      return [de(r[1]), de(r[2]), de(r[3]), 1];
    if (r = Xa.exec(t))
      return [pe(r[1]), pe(r[5]), pe(r[9]), 1];
    if (r = Ya.exec(t))
      return [
        pe(r[1]),
        pe(r[5]),
        pe(r[9]),
        Tt(r[13])
      ];
    if (r = qa.exec(t))
      return [
        de(r[1] + r[1]),
        de(r[2] + r[2]),
        de(r[3] + r[3]),
        1
      ];
    if (r = Za.exec(t))
      return [
        de(r[1]),
        de(r[2]),
        de(r[3]),
        Tt(de(r[4]) / 255)
      ];
    if (r = Ja.exec(t))
      return [
        de(r[1] + r[1]),
        de(r[2] + r[2]),
        de(r[3] + r[3]),
        Tt(de(r[4] + r[4]) / 255)
      ];
    if (t in vn)
      return tt(vn[t]);
    throw new Error(`[seemly/rgba]: Invalid color value ${t}.`);
  } catch (r) {
    throw r;
  }
}
function Qa(t) {
  return t > 1 ? 1 : t < 0 ? 0 : t;
}
function Rr(t, r, n, i) {
  return `rgba(${pe(t)}, ${pe(r)}, ${pe(n)}, ${Qa(i)})`;
}
function wr(t, r, n, i, a) {
  return pe((t * r * (1 - i) + n * i) / a);
}
function Kr(t, r) {
  Array.isArray(t) || (t = tt(t)), Array.isArray(r) || (r = tt(r));
  const n = t[3], i = r[3], a = Tt(n + i - n * i);
  return Rr(wr(t[0], n, r[0], i, a), wr(t[1], n, r[1], i, a), wr(t[2], n, r[2], i, a), a);
}
function Ke(t, r) {
  const [n, i, a, o = 1] = Array.isArray(t) ? t : tt(t);
  return r.alpha ? Rr(n, i, a, r.alpha) : Rr(n, i, a, o);
}
function Zt(t, r) {
  const [n, i, a, o = 1] = Array.isArray(t) ? t : tt(t), { lightness: s = 1, alpha: l = 1 } = r;
  return eo([n * s, i * s, a * s, o * l]);
}
function Tt(t) {
  const r = Math.round(Number(t) * 100) / 100;
  return r > 1 ? 1 : r < 0 ? 0 : r;
}
function pe(t) {
  const r = Math.round(Number(t));
  return r > 255 ? 255 : r < 0 ? 0 : r;
}
function eo(t) {
  const [r, n, i] = t;
  return 3 in t ? `rgba(${pe(r)}, ${pe(n)}, ${pe(i)}, ${Tt(t[3])})` : `rgba(${pe(r)}, ${pe(n)}, ${pe(i)}, 1)`;
}
function ue(t, ...r) {
  if (Array.isArray(t))
    t.forEach((n) => ue(n, ...r));
  else
    return t(...r);
}
const cn = /* @__PURE__ */ new Set();
function ti(t, r) {
  const n = `[naive/${t}]: ${r}`;
  cn.has(n) || (cn.add(n), console.error(n));
}
function to(t, r) {
  console.error(`[naive/${t}]: ${r}`);
}
function ri(t, r) {
  throw new Error(`[naive/${t}]: ${r}`);
}
function Nt(t) {
  return t.some((r) => Oa(r) ? !(r.type === _a || r.type === Vr && !Nt(r.children)) : !0) ? t : null;
}
function Rt(t, r) {
  return t && Nt(t()) || r();
}
function ro(t, r, n) {
  return t && Nt(t(r)) || n(r);
}
function lt(t, r) {
  const n = t && Nt(t());
  return r(n || null);
}
function no(t) {
  return !(t && Nt(t()));
}
const pn = xe({
  render() {
    var t, r;
    return (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t);
  }
});
function Cn(t) {
  return t.replace(/#|\(|\)|,|\s|\./g, "_");
}
function dn(t) {
  const {
    left: r,
    right: n,
    top: i,
    bottom: a
  } = ei(t);
  return `${i} ${n} ${a} ${r}`;
}
function io(t) {
  let r = 0;
  for (let n = 0; n < t.length; ++n)
    t[n] === "&" && ++r;
  return r;
}
const ni = /\s*,(?![^(]*\))\s*/g, ao = /\s+/g;
function oo(t, r) {
  const n = [];
  return r.split(ni).forEach((i) => {
    let a = io(i);
    if (a) {
      if (a === 1) {
        t.forEach((s) => {
          n.push(i.replace("&", s));
        });
        return;
      }
    } else {
      t.forEach((s) => {
        n.push(
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (s && s + " ") + i
        );
      });
      return;
    }
    let o = [
      i
    ];
    for (; a--; ) {
      const s = [];
      o.forEach((l) => {
        t.forEach((x) => {
          s.push(l.replace("&", x));
        });
      }), o = s;
    }
    o.forEach((s) => n.push(s));
  }), n;
}
function lo(t, r) {
  const n = [];
  return r.split(ni).forEach((i) => {
    t.forEach((a) => {
      n.push((a && a + " ") + i);
    });
  }), n;
}
function so(t) {
  let r = [""];
  return t.forEach((n) => {
    n = n && n.trim(), // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    n && (n.includes("&") ? r = oo(r, n) : r = lo(r, n));
  }), r.join(", ").replace(ao, " ");
}
function mn(t) {
  if (!t)
    return;
  const r = t.parentElement;
  r && r.removeChild(t);
}
function pr(t, r) {
  return (r ?? document.head).querySelector(`style[cssr-id="${t}"]`);
}
function uo(t) {
  const r = document.createElement("style");
  return r.setAttribute("cssr-id", t), r;
}
function Qt(t) {
  return t ? /^\s*@(s|m)/.test(t) : !1;
}
const xo = /[A-Z]/g;
function ii(t) {
  return t.replace(xo, (r) => "-" + r.toLowerCase());
}
function fo(t, r = "  ") {
  return typeof t == "object" && t !== null ? ` {
` + Object.entries(t).map((n) => r + `  ${ii(n[0])}: ${n[1]};`).join(`
`) + `
` + r + "}" : `: ${t};`;
}
function ho(t, r, n) {
  return typeof t == "function" ? t({
    context: r.context,
    props: n
  }) : t;
}
function bn(t, r, n, i) {
  if (!r)
    return "";
  const a = ho(r, n, i);
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
  const s = t ? [
    t + " {"
  ] : [];
  return o.forEach((l) => {
    const x = a[l];
    if (l === "raw") {
      s.push(`
` + x + `
`);
      return;
    }
    l = ii(l), x != null && s.push(`  ${l}${fo(x)}`);
  }), t && s.push("}"), s.join(`
`);
}
function zr(t, r, n) {
  t && t.forEach((i) => {
    if (Array.isArray(i))
      zr(i, r, n);
    else if (typeof i == "function") {
      const a = i(r);
      Array.isArray(a) ? zr(a, r, n) : a && n(a);
    } else i && n(i);
  });
}
function ai(t, r, n, i, a) {
  const o = t.$;
  let s = "";
  if (!o || typeof o == "string")
    Qt(o) ? s = o : r.push(o);
  else if (typeof o == "function") {
    const h = o({
      context: i.context,
      props: a
    });
    Qt(h) ? s = h : r.push(h);
  } else if (o.before && o.before(i.context), !o.$ || typeof o.$ == "string")
    Qt(o.$) ? s = o.$ : r.push(o.$);
  else if (o.$) {
    const h = o.$({
      context: i.context,
      props: a
    });
    Qt(h) ? s = h : r.push(h);
  }
  const l = so(r), x = bn(l, t.props, i, a);
  s ? n.push(`${s} {`) : x.length && n.push(x), t.children && zr(t.children, {
    context: i.context,
    props: a
  }, (h) => {
    if (typeof h == "string") {
      const v = bn(l, { raw: h }, i, a);
      n.push(v);
    } else
      ai(h, r, n, i, a);
  }), r.pop(), s && n.push("}"), o && o.after && o.after(i.context);
}
function vo(t, r, n) {
  const i = [];
  return ai(t, [], i, r, n), i.join(`

`);
}
function Ht(t) {
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
function co(t, r, n, i) {
  const { els: a } = r;
  if (n === void 0)
    a.forEach(mn), r.els = [];
  else {
    const o = pr(n, i);
    o && a.includes(o) && (mn(o), r.els = a.filter((s) => s !== o));
  }
}
function gn(t, r) {
  t.push(r);
}
function po(t, r, n, i, a, o, s, l, x) {
  let h;
  if (n === void 0 && (h = r.render(i), n = Ht(h)), x) {
    x.adapter(n, h ?? r.render(i));
    return;
  }
  l === void 0 && (l = document.head);
  const v = pr(n, l);
  if (v !== null && !o)
    return v;
  const C = v ?? uo(n);
  if (h === void 0 && (h = r.render(i)), C.textContent = h, v !== null)
    return v;
  if (s) {
    const E = l.querySelector(`meta[name="${s}"]`);
    if (E)
      return l.insertBefore(C, E), gn(r.els, C), C;
  }
  return a ? l.insertBefore(C, l.querySelector("style, link")) : l.appendChild(C), gn(r.els, C), C;
}
function Co(t) {
  return vo(this, this.instance, t);
}
function mo(t = {}) {
  const { id: r, ssr: n, props: i, head: a = !1, force: o = !1, anchorMetaName: s, parent: l } = t;
  return po(this.instance, this, r, i, a, o, s, l, n);
}
function bo(t = {}) {
  const { id: r, parent: n } = t;
  co(this.instance, this, r, n);
}
const er = function(t, r, n, i) {
  return {
    instance: t,
    $: r,
    props: n,
    children: i,
    els: [],
    render: Co,
    mount: mo,
    unmount: bo
  };
}, go = function(t, r, n, i) {
  return Array.isArray(r) ? er(t, { $: null }, null, r) : Array.isArray(n) ? er(t, r, null, n) : Array.isArray(i) ? er(t, r, n, i) : er(t, r, n, null);
};
function Bo(t = {}) {
  const r = {
    c: (...n) => go(r, ...n),
    use: (n, ...i) => n.install(r, ...i),
    find: pr,
    context: {},
    config: t
  };
  return r;
}
function yo(t, r) {
  if (t === void 0)
    return !1;
  if (r) {
    const { context: { ids: n } } = r;
    return n.has(t);
  }
  return pr(t) !== null;
}
function Do(t) {
  let r = ".", n = "__", i = "--", a;
  if (t) {
    let c = t.blockPrefix;
    c && (r = c), c = t.elementPrefix, c && (n = c), c = t.modifierPrefix, c && (i = c);
  }
  const o = {
    install(c) {
      a = c.c;
      const m = c.context;
      m.bem = {}, m.bem.b = null, m.bem.els = null;
    }
  };
  function s(c) {
    let m, y;
    return {
      before(B) {
        m = B.bem.b, y = B.bem.els, B.bem.els = null;
      },
      after(B) {
        B.bem.b = m, B.bem.els = y;
      },
      $({ context: B, props: $ }) {
        return c = typeof c == "string" ? c : c({ context: B, props: $ }), B.bem.b = c, `${($ == null ? void 0 : $.bPrefix) || r}${B.bem.b}`;
      }
    };
  }
  function l(c) {
    let m;
    return {
      before(y) {
        m = y.bem.els;
      },
      after(y) {
        y.bem.els = m;
      },
      $({ context: y, props: B }) {
        return c = typeof c == "string" ? c : c({ context: y, props: B }), y.bem.els = c.split(",").map(($) => $.trim()), y.bem.els.map(($) => `${(B == null ? void 0 : B.bPrefix) || r}${y.bem.b}${n}${$}`).join(", ");
      }
    };
  }
  function x(c) {
    return {
      $({ context: m, props: y }) {
        c = typeof c == "string" ? c : c({ context: m, props: y });
        const B = c.split(",").map((D) => D.trim());
        function $(D) {
          return B.map((z) => `&${(y == null ? void 0 : y.bPrefix) || r}${m.bem.b}${D !== void 0 ? `${n}${D}` : ""}${i}${z}`).join(", ");
        }
        const H = m.bem.els;
        if (H !== null) {
          if (process.env.NODE_ENV !== "production" && H.length >= 2)
            throw Error(`[css-render/plugin-bem]: m(${c}) is invalid, using modifier inside multiple elements is not allowed`);
          return $(H[0]);
        } else
          return $();
      }
    };
  }
  function h(c) {
    return {
      $({ context: m, props: y }) {
        c = typeof c == "string" ? c : c({ context: m, props: y });
        const B = m.bem.els;
        if (process.env.NODE_ENV !== "production" && B !== null && B.length >= 2)
          throw Error(`[css-render/plugin-bem]: notM(${c}) is invalid, using modifier inside multiple elements is not allowed`);
        return `&:not(${(y == null ? void 0 : y.bPrefix) || r}${m.bem.b}${B !== null && B.length > 0 ? `${n}${B[0]}` : ""}${i}${c})`;
      }
    };
  }
  return Object.assign(o, {
    cB: (...c) => a(s(c[0]), c[1], c[2]),
    cE: (...c) => a(l(c[0]), c[1], c[2]),
    cM: (...c) => a(x(c[0]), c[1], c[2]),
    cNotM: (...c) => a(h(c[0]), c[1], c[2])
  }), o;
}
const Ao = "n", wo = `.${Ao}-`, Fo = "__", Eo = "--", oi = Bo(), li = Do({
  blockPrefix: wo,
  elementPrefix: Fo,
  modifierPrefix: Eo
});
oi.use(li);
const {
  c: _,
  find: Mf
} = oi, {
  cB: K,
  cE: S,
  cM: J,
  cNotM: Ue
} = li;
function X(t, r) {
  return t + (r === "default" ? "" : r.replace(/^[a-z]/, (n) => n.toUpperCase()));
}
const Cr = typeof document < "u" && typeof window < "u";
function kt(t) {
  const r = W(t), n = U(r.value);
  return _t(r, (i) => {
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
function or(t) {
  return t.composedPath()[0];
}
const So = {
  mousemoveoutside: /* @__PURE__ */ new WeakMap(),
  clickoutside: /* @__PURE__ */ new WeakMap()
};
function Po(t, r, n) {
  if (t === "mousemoveoutside") {
    const i = (a) => {
      r.contains(or(a)) || n(a);
    };
    return {
      mousemove: i,
      touchstart: i
    };
  } else if (t === "clickoutside") {
    let i = !1;
    const a = (s) => {
      i = !r.contains(or(s));
    }, o = (s) => {
      i && (r.contains(or(s)) || n(s));
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
function si(t, r, n) {
  const i = So[t];
  let a = i.get(r);
  a === void 0 && i.set(r, a = /* @__PURE__ */ new WeakMap());
  let o = a.get(n);
  return o === void 0 && a.set(n, o = Po(t, r, n)), o;
}
function $o(t, r, n, i) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const a = si(t, r, n);
    return Object.keys(a).forEach((o) => {
      Je(o, document, a[o], i);
    }), !0;
  }
  return !1;
}
function To(t, r, n, i) {
  if (t === "mousemoveoutside" || t === "clickoutside") {
    const a = si(t, r, n);
    return Object.keys(a).forEach((o) => {
      Ee(o, document, a[o], i);
    }), !0;
  }
  return !1;
}
function Ro() {
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
  function a(f, b, w) {
    const I = f[b];
    return f[b] = function() {
      return w.apply(f, arguments), I.apply(f, arguments);
    }, f;
  }
  function o(f, b) {
    f[b] = Event.prototype[b];
  }
  const s = /* @__PURE__ */ new WeakMap(), l = Object.getOwnPropertyDescriptor(Event.prototype, "currentTarget");
  function x() {
    var f;
    return (f = s.get(this)) !== null && f !== void 0 ? f : null;
  }
  function h(f, b) {
    l !== void 0 && Object.defineProperty(f, "currentTarget", {
      configurable: !0,
      enumerable: !0,
      get: b ?? l.get
    });
  }
  const v = {
    bubble: {},
    capture: {}
  }, C = {};
  function E() {
    const f = function(b) {
      const { type: w, eventPhase: I, bubbles: V } = b, L = or(b);
      if (I === 2)
        return;
      const e = I === 1 ? "capture" : "bubble";
      let F = L;
      const M = [];
      for (; F === null && (F = window), M.push(F), F !== window; )
        F = F.parentNode || null;
      const P = v.capture[w], A = v.bubble[w];
      if (a(b, "stopPropagation", n), a(b, "stopImmediatePropagation", i), h(b, x), e === "capture") {
        if (P === void 0)
          return;
        for (let G = M.length - 1; G >= 0 && !t.has(b); --G) {
          const fe = M[G], ae = P.get(fe);
          if (ae !== void 0) {
            s.set(b, fe);
            for (const Ce of ae) {
              if (r.has(b))
                break;
              Ce(b);
            }
          }
          if (G === 0 && !V && A !== void 0) {
            const Ce = A.get(fe);
            if (Ce !== void 0)
              for (const se of Ce) {
                if (r.has(b))
                  break;
                se(b);
              }
          }
        }
      } else if (e === "bubble") {
        if (A === void 0)
          return;
        for (let G = 0; G < M.length && !t.has(b); ++G) {
          const fe = M[G], ae = A.get(fe);
          if (ae !== void 0) {
            s.set(b, fe);
            for (const Ce of ae) {
              if (r.has(b))
                break;
              Ce(b);
            }
          }
        }
      }
      o(b, "stopPropagation"), o(b, "stopImmediatePropagation"), h(b);
    };
    return f.displayName = "evtdUnifiedHandler", f;
  }
  function R() {
    const f = function(b) {
      const { type: w, eventPhase: I } = b;
      if (I !== 2)
        return;
      const V = C[w];
      V !== void 0 && V.forEach((L) => L(b));
    };
    return f.displayName = "evtdUnifiedWindowEventHandler", f;
  }
  const c = E(), m = R();
  function y(f, b) {
    const w = v[f];
    return w[b] === void 0 && (w[b] = /* @__PURE__ */ new Map(), window.addEventListener(b, c, f === "capture")), w[b];
  }
  function B(f) {
    return C[f] === void 0 && (C[f] = /* @__PURE__ */ new Set(), window.addEventListener(f, m)), C[f];
  }
  function $(f, b) {
    let w = f.get(b);
    return w === void 0 && f.set(b, w = /* @__PURE__ */ new Set()), w;
  }
  function H(f, b, w, I) {
    const V = v[b][w];
    if (V !== void 0) {
      const L = V.get(f);
      if (L !== void 0 && L.has(I))
        return !0;
    }
    return !1;
  }
  function D(f, b) {
    const w = C[f];
    return !!(w !== void 0 && w.has(b));
  }
  function z(f, b, w, I) {
    let V;
    if (typeof I == "object" && I.once === !0 ? V = (P) => {
      j(f, b, V, I), w(P);
    } : V = w, $o(f, b, V, I))
      return;
    const e = I === !0 || typeof I == "object" && I.capture === !0 ? "capture" : "bubble", F = y(e, f), M = $(F, b);
    if (M.has(V) || M.add(V), b === window) {
      const P = B(f);
      P.has(V) || P.add(V);
    }
  }
  function j(f, b, w, I) {
    if (To(f, b, w, I))
      return;
    const L = I === !0 || typeof I == "object" && I.capture === !0, e = L ? "capture" : "bubble", F = y(e, f), M = $(F, b);
    if (b === window && !H(b, L ? "bubble" : "capture", f, w) && D(f, w)) {
      const A = C[f];
      A.delete(w), A.size === 0 && (window.removeEventListener(f, m), C[f] = void 0);
    }
    M.has(w) && M.delete(w), M.size === 0 && F.delete(b), F.size === 0 && (window.removeEventListener(f, c, e === "capture"), v[e][f] = void 0);
  }
  return {
    on: z,
    off: j
  };
}
const { on: Je, off: Ee } = Ro();
function zo(t, r) {
  return _t(t, (n) => {
    n !== void 0 && (r.value = n);
  }), W(() => t.value === void 0 ? r.value : t.value);
}
function Mo() {
  const t = U(!1);
  return vr(() => {
    t.value = !0;
  }), Ha(t);
}
const Oo = (typeof window > "u" ? !1 : /iPad|iPhone|iPod/.test(navigator.platform) || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) && // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
!window.MSStream;
function _o() {
  return Oo;
}
const Ho = "@css-render/vue3-ssr";
function ko(t, r) {
  return `<style cssr-id="${t}">
${r}
</style>`;
}
function Wo(t, r, n) {
  const { styles: i, ids: a } = n;
  a.has(t) || i !== null && (a.add(t), i.push(ko(t, r)));
}
const Io = typeof document < "u";
function dr() {
  if (Io)
    return;
  const t = be(Ho, null);
  if (t !== null)
    return {
      adapter: (r, n) => Wo(r, n, t),
      context: t
    };
}
function Bn(t, r) {
  console.error(`[vueuc/${t}]: ${r}`);
}
var Qe = [], jo = function() {
  return Qe.some(function(t) {
    return t.activeTargets.length > 0;
  });
}, No = function() {
  return Qe.some(function(t) {
    return t.skippedTargets.length > 0;
  });
}, yn = "ResizeObserver loop completed with undelivered notifications.", Lo = function() {
  var t;
  typeof ErrorEvent == "function" ? t = new ErrorEvent("error", {
    message: yn
  }) : (t = document.createEvent("Event"), t.initEvent("error", !1, !1), t.message = yn), window.dispatchEvent(t);
}, Wt;
(function(t) {
  t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Wt || (Wt = {}));
var et = function(t) {
  return Object.freeze(t);
}, Vo = /* @__PURE__ */ function() {
  function t(r, n) {
    this.inlineSize = r, this.blockSize = n, et(this);
  }
  return t;
}(), ui = function() {
  function t(r, n, i, a) {
    return this.x = r, this.y = n, this.width = i, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, et(this);
  }
  return t.prototype.toJSON = function() {
    var r = this, n = r.x, i = r.y, a = r.top, o = r.right, s = r.bottom, l = r.left, x = r.width, h = r.height;
    return { x: n, y: i, top: a, right: o, bottom: s, left: l, width: x, height: h };
  }, t.fromRect = function(r) {
    return new t(r.x, r.y, r.width, r.height);
  }, t;
}(), Jr = function(t) {
  return t instanceof SVGElement && "getBBox" in t;
}, xi = function(t) {
  if (Jr(t)) {
    var r = t.getBBox(), n = r.width, i = r.height;
    return !n && !i;
  }
  var a = t, o = a.offsetWidth, s = a.offsetHeight;
  return !(o || s || t.getClientRects().length);
}, Dn = function(t) {
  var r;
  if (t instanceof Element)
    return !0;
  var n = (r = t == null ? void 0 : t.ownerDocument) === null || r === void 0 ? void 0 : r.defaultView;
  return !!(n && t instanceof n.Element);
}, Go = function(t) {
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
}, zt = typeof window < "u" ? window : {}, tr = /* @__PURE__ */ new WeakMap(), An = /auto|scroll/, Uo = /^tb|vertical/, Xo = /msie|trident/i.test(zt.navigator && zt.navigator.userAgent), ye = function(t) {
  return parseFloat(t || "0");
}, st = function(t, r, n) {
  return t === void 0 && (t = 0), r === void 0 && (r = 0), n === void 0 && (n = !1), new Vo((n ? r : t) || 0, (n ? t : r) || 0);
}, wn = et({
  devicePixelContentBoxSize: st(),
  borderBoxSize: st(),
  contentBoxSize: st(),
  contentRect: new ui(0, 0, 0, 0)
}), fi = function(t, r) {
  if (r === void 0 && (r = !1), tr.has(t) && !r)
    return tr.get(t);
  if (xi(t))
    return tr.set(t, wn), wn;
  var n = getComputedStyle(t), i = Jr(t) && t.ownerSVGElement && t.getBBox(), a = !Xo && n.boxSizing === "border-box", o = Uo.test(n.writingMode || ""), s = !i && An.test(n.overflowY || ""), l = !i && An.test(n.overflowX || ""), x = i ? 0 : ye(n.paddingTop), h = i ? 0 : ye(n.paddingRight), v = i ? 0 : ye(n.paddingBottom), C = i ? 0 : ye(n.paddingLeft), E = i ? 0 : ye(n.borderTopWidth), R = i ? 0 : ye(n.borderRightWidth), c = i ? 0 : ye(n.borderBottomWidth), m = i ? 0 : ye(n.borderLeftWidth), y = C + h, B = x + v, $ = m + R, H = E + c, D = l ? t.offsetHeight - H - t.clientHeight : 0, z = s ? t.offsetWidth - $ - t.clientWidth : 0, j = a ? y + $ : 0, f = a ? B + H : 0, b = i ? i.width : ye(n.width) - j - z, w = i ? i.height : ye(n.height) - f - D, I = b + y + z + $, V = w + B + D + H, L = et({
    devicePixelContentBoxSize: st(Math.round(b * devicePixelRatio), Math.round(w * devicePixelRatio), o),
    borderBoxSize: st(I, V, o),
    contentBoxSize: st(b, w, o),
    contentRect: new ui(C, x, b, w)
  });
  return tr.set(t, L), L;
}, hi = function(t, r, n) {
  var i = fi(t, n), a = i.borderBoxSize, o = i.contentBoxSize, s = i.devicePixelContentBoxSize;
  switch (r) {
    case Wt.DEVICE_PIXEL_CONTENT_BOX:
      return s;
    case Wt.BORDER_BOX:
      return a;
    default:
      return o;
  }
}, Yo = /* @__PURE__ */ function() {
  function t(r) {
    var n = fi(r);
    this.target = r, this.contentRect = n.contentRect, this.borderBoxSize = et([n.borderBoxSize]), this.contentBoxSize = et([n.contentBoxSize]), this.devicePixelContentBoxSize = et([n.devicePixelContentBoxSize]);
  }
  return t;
}(), vi = function(t) {
  if (xi(t))
    return 1 / 0;
  for (var r = 0, n = t.parentNode; n; )
    r += 1, n = n.parentNode;
  return r;
}, qo = function() {
  var t = 1 / 0, r = [];
  Qe.forEach(function(s) {
    if (s.activeTargets.length !== 0) {
      var l = [];
      s.activeTargets.forEach(function(h) {
        var v = new Yo(h.target), C = vi(h.target);
        l.push(v), h.lastReportedSize = hi(h.target, h.observedBox), C < t && (t = C);
      }), r.push(function() {
        s.callback.call(s.observer, l, s.observer);
      }), s.activeTargets.splice(0, s.activeTargets.length);
    }
  });
  for (var n = 0, i = r; n < i.length; n++) {
    var a = i[n];
    a();
  }
  return t;
}, Fn = function(t) {
  Qe.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(a) {
      a.isActive() && (vi(a.target) > t ? n.activeTargets.push(a) : n.skippedTargets.push(a));
    });
  });
}, Ko = function() {
  var t = 0;
  for (Fn(t); jo(); )
    t = qo(), Fn(t);
  return No() && Lo(), t > 0;
}, Fr, ci = [], Jo = function() {
  return ci.splice(0).forEach(function(t) {
    return t();
  });
}, Zo = function(t) {
  if (!Fr) {
    var r = 0, n = document.createTextNode(""), i = { characterData: !0 };
    new MutationObserver(function() {
      return Jo();
    }).observe(n, i), Fr = function() {
      n.textContent = "".concat(r ? r-- : r++);
    };
  }
  ci.push(t), Fr();
}, Qo = function(t) {
  Zo(function() {
    requestAnimationFrame(t);
  });
}, lr = 0, el = function() {
  return !!lr;
}, tl = 250, rl = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, En = [
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
], Sn = function(t) {
  return t === void 0 && (t = 0), Date.now() + t;
}, Er = !1, nl = function() {
  function t() {
    var r = this;
    this.stopped = !0, this.listener = function() {
      return r.schedule();
    };
  }
  return t.prototype.run = function(r) {
    var n = this;
    if (r === void 0 && (r = tl), !Er) {
      Er = !0;
      var i = Sn(r);
      Qo(function() {
        var a = !1;
        try {
          a = Ko();
        } finally {
          if (Er = !1, r = i - Sn(), !el())
            return;
          a ? n.run(1e3) : r > 0 ? n.run(r) : n.start();
        }
      });
    }
  }, t.prototype.schedule = function() {
    this.stop(), this.run();
  }, t.prototype.observe = function() {
    var r = this, n = function() {
      return r.observer && r.observer.observe(document.body, rl);
    };
    document.body ? n() : zt.addEventListener("DOMContentLoaded", n);
  }, t.prototype.start = function() {
    var r = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), En.forEach(function(n) {
      return zt.addEventListener(n, r.listener, !0);
    }));
  }, t.prototype.stop = function() {
    var r = this;
    this.stopped || (this.observer && this.observer.disconnect(), En.forEach(function(n) {
      return zt.removeEventListener(n, r.listener, !0);
    }), this.stopped = !0);
  }, t;
}(), Mr = new nl(), Pn = function(t) {
  !lr && t > 0 && Mr.start(), lr += t, !lr && Mr.stop();
}, il = function(t) {
  return !Jr(t) && !Go(t) && getComputedStyle(t).display === "inline";
}, al = function() {
  function t(r, n) {
    this.target = r, this.observedBox = n || Wt.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return t.prototype.isActive = function() {
    var r = hi(this.target, this.observedBox, !0);
    return il(this.target) && (this.lastReportedSize = r), this.lastReportedSize.inlineSize !== r.inlineSize || this.lastReportedSize.blockSize !== r.blockSize;
  }, t;
}(), ol = /* @__PURE__ */ function() {
  function t(r, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = r, this.callback = n;
  }
  return t;
}(), rr = /* @__PURE__ */ new WeakMap(), $n = function(t, r) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n].target === r)
      return n;
  return -1;
}, nr = function() {
  function t() {
  }
  return t.connect = function(r, n) {
    var i = new ol(r, n);
    rr.set(r, i);
  }, t.observe = function(r, n, i) {
    var a = rr.get(r), o = a.observationTargets.length === 0;
    $n(a.observationTargets, n) < 0 && (o && Qe.push(a), a.observationTargets.push(new al(n, i && i.box)), Pn(1), Mr.schedule());
  }, t.unobserve = function(r, n) {
    var i = rr.get(r), a = $n(i.observationTargets, n), o = i.observationTargets.length === 1;
    a >= 0 && (o && Qe.splice(Qe.indexOf(i), 1), i.observationTargets.splice(a, 1), Pn(-1));
  }, t.disconnect = function(r) {
    var n = this, i = rr.get(r);
    i.observationTargets.slice().forEach(function(a) {
      return n.unobserve(r, a.target);
    }), i.activeTargets.splice(0, i.activeTargets.length);
  }, t;
}(), ll = function() {
  function t(r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof r != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    nr.connect(this, r);
  }
  return t.prototype.observe = function(r, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Dn(r))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    nr.observe(this, r, n);
  }, t.prototype.unobserve = function(r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Dn(r))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    nr.unobserve(this, r);
  }, t.prototype.disconnect = function() {
    nr.disconnect(this);
  }, t.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, t;
}();
class sl {
  constructor() {
    this.handleResize = this.handleResize.bind(this), this.observer = new (typeof window < "u" && window.ResizeObserver || ll)(this.handleResize), this.elHandlersMap = /* @__PURE__ */ new Map();
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
const Tn = new sl(), Or = xe({
  name: "ResizeObserver",
  props: {
    onResize: Function
  },
  setup(t) {
    let r = !1;
    const n = Zn().proxy;
    function i(a) {
      const { onResize: o } = t;
      o !== void 0 && o(a);
    }
    vr(() => {
      const a = n.$el;
      if (a === void 0) {
        Bn("resize-observer", "$el does not exist.");
        return;
      }
      if (a.nextElementSibling !== a.nextSibling && a.nodeType === 3 && a.nodeValue !== "") {
        Bn("resize-observer", "$el can not be observed (it may be a text node).");
        return;
      }
      a.nextElementSibling !== null && (Tn.registerHandler(a.nextElementSibling, i), r = !0);
    }), cr(() => {
      r && Tn.unregisterHandler(n.$el.nextElementSibling);
    });
  },
  render() {
    return Gr(this.$slots, "default");
  }
});
function ul(t) {
  const r = {
    isDeactivated: !1
  };
  let n = !1;
  return ka(() => {
    if (r.isDeactivated = !1, !n) {
      n = !0;
      return;
    }
    t();
  }), Wa(() => {
    r.isDeactivated = !0, n || (n = !0);
  }), r;
}
const Rn = "n-form-item";
function pi(t, {
  defaultSize: r = "medium",
  mergedSize: n,
  mergedDisabled: i
} = {}) {
  const a = be(Rn, null);
  Ur(Rn, null);
  const o = W(n ? () => n(a) : () => {
    const {
      size: x
    } = t;
    if (x) return x;
    if (a) {
      const {
        mergedSize: h
      } = a;
      if (h.value !== void 0)
        return h.value;
    }
    return r;
  }), s = W(i ? () => i(a) : () => {
    const {
      disabled: x
    } = t;
    return x !== void 0 ? x : a ? a.disabled.value : !1;
  }), l = W(() => {
    const {
      status: x
    } = t;
    return x || (a == null ? void 0 : a.mergedValidationStatus.value);
  });
  return cr(() => {
    a && a.restoreValidation();
  }), {
    mergedSizeRef: o,
    mergedDisabledRef: s,
    mergedStatusRef: l,
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
var Ci = typeof global == "object" && global && global.Object === Object && global, xl = typeof self == "object" && self && self.Object === Object && self, ct = Ci || xl || Function("return this")(), ft = ct.Symbol, di = Object.prototype, fl = di.hasOwnProperty, hl = di.toString, St = ft ? ft.toStringTag : void 0;
function vl(t) {
  var r = fl.call(t, St), n = t[St];
  try {
    t[St] = void 0;
    var i = !0;
  } catch {
  }
  var a = hl.call(t);
  return i && (r ? t[St] = n : delete t[St]), a;
}
var cl = Object.prototype, pl = cl.toString;
function Cl(t) {
  return pl.call(t);
}
var dl = "[object Null]", ml = "[object Undefined]", zn = ft ? ft.toStringTag : void 0;
function Lt(t) {
  return t == null ? t === void 0 ? ml : dl : zn && zn in Object(t) ? vl(t) : Cl(t);
}
function pt(t) {
  return t != null && typeof t == "object";
}
var bl = "[object Symbol]";
function gl(t) {
  return typeof t == "symbol" || pt(t) && Lt(t) == bl;
}
function Bl(t, r) {
  for (var n = -1, i = t == null ? 0 : t.length, a = Array(i); ++n < i; )
    a[n] = r(t[n], n, t);
  return a;
}
var ur = Array.isArray, yl = 1 / 0, Mn = ft ? ft.prototype : void 0, On = Mn ? Mn.toString : void 0;
function mi(t) {
  if (typeof t == "string")
    return t;
  if (ur(t))
    return Bl(t, mi) + "";
  if (gl(t))
    return On ? On.call(t) : "";
  var r = t + "";
  return r == "0" && 1 / t == -yl ? "-0" : r;
}
function nt(t) {
  var r = typeof t;
  return t != null && (r == "object" || r == "function");
}
function bi(t) {
  return t;
}
var Dl = "[object AsyncFunction]", Al = "[object Function]", wl = "[object GeneratorFunction]", Fl = "[object Proxy]";
function Zr(t) {
  if (!nt(t))
    return !1;
  var r = Lt(t);
  return r == Al || r == wl || r == Dl || r == Fl;
}
var Sr = ct["__core-js_shared__"], _n = function() {
  var t = /[^.]+$/.exec(Sr && Sr.keys && Sr.keys.IE_PROTO || "");
  return t ? "Symbol(src)_1." + t : "";
}();
function El(t) {
  return !!_n && _n in t;
}
var Sl = Function.prototype, Pl = Sl.toString;
function $l(t) {
  if (t != null) {
    try {
      return Pl.call(t);
    } catch {
    }
    try {
      return t + "";
    } catch {
    }
  }
  return "";
}
var Tl = /[\\^$.*+?()[\]{}|]/g, Rl = /^\[object .+?Constructor\]$/, zl = Function.prototype, Ml = Object.prototype, Ol = zl.toString, _l = Ml.hasOwnProperty, Hl = RegExp(
  "^" + Ol.call(_l).replace(Tl, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
);
function kl(t) {
  if (!nt(t) || El(t))
    return !1;
  var r = Zr(t) ? Hl : Rl;
  return r.test($l(t));
}
function Wl(t, r) {
  return t == null ? void 0 : t[r];
}
function Qr(t, r) {
  var n = Wl(t, r);
  return kl(n) ? n : void 0;
}
var Hn = Object.create, Il = /* @__PURE__ */ function() {
  function t() {
  }
  return function(r) {
    if (!nt(r))
      return {};
    if (Hn)
      return Hn(r);
    t.prototype = r;
    var n = new t();
    return t.prototype = void 0, n;
  };
}();
function jl(t, r, n) {
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
function Nl(t, r) {
  var n = -1, i = t.length;
  for (r || (r = Array(i)); ++n < i; )
    r[n] = t[n];
  return r;
}
var Ll = 800, Vl = 16, Gl = Date.now;
function Ul(t) {
  var r = 0, n = 0;
  return function() {
    var i = Gl(), a = Vl - (i - n);
    if (n = i, a > 0) {
      if (++r >= Ll)
        return arguments[0];
    } else
      r = 0;
    return t.apply(void 0, arguments);
  };
}
function Xl(t) {
  return function() {
    return t;
  };
}
var xr = function() {
  try {
    var t = Qr(Object, "defineProperty");
    return t({}, "", {}), t;
  } catch {
  }
}(), Yl = xr ? function(t, r) {
  return xr(t, "toString", {
    configurable: !0,
    enumerable: !1,
    value: Xl(r),
    writable: !0
  });
} : bi, ql = Ul(Yl), Kl = 9007199254740991, Jl = /^(?:0|[1-9]\d*)$/;
function gi(t, r) {
  var n = typeof t;
  return r = r ?? Kl, !!r && (n == "number" || n != "symbol" && Jl.test(t)) && t > -1 && t % 1 == 0 && t < r;
}
function en(t, r, n) {
  r == "__proto__" && xr ? xr(t, r, {
    configurable: !0,
    enumerable: !0,
    value: n,
    writable: !0
  }) : t[r] = n;
}
function mr(t, r) {
  return t === r || t !== t && r !== r;
}
var Zl = Object.prototype, Ql = Zl.hasOwnProperty;
function es(t, r, n) {
  var i = t[r];
  (!(Ql.call(t, r) && mr(i, n)) || n === void 0 && !(r in t)) && en(t, r, n);
}
function ts(t, r, n, i) {
  var a = !n;
  n || (n = {});
  for (var o = -1, s = r.length; ++o < s; ) {
    var l = r[o], x = void 0;
    x === void 0 && (x = t[l]), a ? en(n, l, x) : es(n, l, x);
  }
  return n;
}
var kn = Math.max;
function rs(t, r, n) {
  return r = kn(r === void 0 ? t.length - 1 : r, 0), function() {
    for (var i = arguments, a = -1, o = kn(i.length - r, 0), s = Array(o); ++a < o; )
      s[a] = i[r + a];
    a = -1;
    for (var l = Array(r + 1); ++a < r; )
      l[a] = i[a];
    return l[r] = n(s), jl(t, this, l);
  };
}
function ns(t, r) {
  return ql(rs(t, r, bi), t + "");
}
var is = 9007199254740991;
function Bi(t) {
  return typeof t == "number" && t > -1 && t % 1 == 0 && t <= is;
}
function tn(t) {
  return t != null && Bi(t.length) && !Zr(t);
}
function as(t, r, n) {
  if (!nt(n))
    return !1;
  var i = typeof r;
  return (i == "number" ? tn(n) && gi(r, n.length) : i == "string" && r in n) ? mr(n[r], t) : !1;
}
function os(t) {
  return ns(function(r, n) {
    var i = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, s = a > 2 ? n[2] : void 0;
    for (o = t.length > 3 && typeof o == "function" ? (a--, o) : void 0, s && as(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), r = Object(r); ++i < a; ) {
      var l = n[i];
      l && t(r, l, i, o);
    }
    return r;
  });
}
var ls = Object.prototype;
function yi(t) {
  var r = t && t.constructor, n = typeof r == "function" && r.prototype || ls;
  return t === n;
}
function ss(t, r) {
  for (var n = -1, i = Array(t); ++n < t; )
    i[n] = r(n);
  return i;
}
var us = "[object Arguments]";
function Wn(t) {
  return pt(t) && Lt(t) == us;
}
var Di = Object.prototype, xs = Di.hasOwnProperty, fs = Di.propertyIsEnumerable, _r = Wn(/* @__PURE__ */ function() {
  return arguments;
}()) ? Wn : function(t) {
  return pt(t) && xs.call(t, "callee") && !fs.call(t, "callee");
};
function hs() {
  return !1;
}
var Ai = typeof exports == "object" && exports && !exports.nodeType && exports, In = Ai && typeof module == "object" && module && !module.nodeType && module, vs = In && In.exports === Ai, jn = vs ? ct.Buffer : void 0, cs = jn ? jn.isBuffer : void 0, wi = cs || hs, ps = "[object Arguments]", Cs = "[object Array]", ds = "[object Boolean]", ms = "[object Date]", bs = "[object Error]", gs = "[object Function]", Bs = "[object Map]", ys = "[object Number]", Ds = "[object Object]", As = "[object RegExp]", ws = "[object Set]", Fs = "[object String]", Es = "[object WeakMap]", Ss = "[object ArrayBuffer]", Ps = "[object DataView]", $s = "[object Float32Array]", Ts = "[object Float64Array]", Rs = "[object Int8Array]", zs = "[object Int16Array]", Ms = "[object Int32Array]", Os = "[object Uint8Array]", _s = "[object Uint8ClampedArray]", Hs = "[object Uint16Array]", ks = "[object Uint32Array]", ne = {};
ne[$s] = ne[Ts] = ne[Rs] = ne[zs] = ne[Ms] = ne[Os] = ne[_s] = ne[Hs] = ne[ks] = !0;
ne[ps] = ne[Cs] = ne[Ss] = ne[ds] = ne[Ps] = ne[ms] = ne[bs] = ne[gs] = ne[Bs] = ne[ys] = ne[Ds] = ne[As] = ne[ws] = ne[Fs] = ne[Es] = !1;
function Ws(t) {
  return pt(t) && Bi(t.length) && !!ne[Lt(t)];
}
function Is(t) {
  return function(r) {
    return t(r);
  };
}
var Fi = typeof exports == "object" && exports && !exports.nodeType && exports, Mt = Fi && typeof module == "object" && module && !module.nodeType && module, js = Mt && Mt.exports === Fi, Pr = js && Ci.process, Nn = function() {
  try {
    var t = Mt && Mt.require && Mt.require("util").types;
    return t || Pr && Pr.binding && Pr.binding("util");
  } catch {
  }
}(), Ln = Nn && Nn.isTypedArray, Ei = Ln ? Is(Ln) : Ws;
function Ns(t, r) {
  var n = ur(t), i = !n && _r(t), a = !n && !i && wi(t), o = !n && !i && !a && Ei(t), s = n || i || a || o, l = s ? ss(t.length, String) : [], x = l.length;
  for (var h in t)
    s && // Safari 9 has enumerable `arguments.length` in strict mode.
    (h == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
    a && (h == "offset" || h == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
    o && (h == "buffer" || h == "byteLength" || h == "byteOffset") || // Skip index properties.
    gi(h, x)) || l.push(h);
  return l;
}
function Ls(t, r) {
  return function(n) {
    return t(r(n));
  };
}
function Vs(t) {
  var r = [];
  if (t != null)
    for (var n in Object(t))
      r.push(n);
  return r;
}
var Gs = Object.prototype, Us = Gs.hasOwnProperty;
function Xs(t) {
  if (!nt(t))
    return Vs(t);
  var r = yi(t), n = [];
  for (var i in t)
    i == "constructor" && (r || !Us.call(t, i)) || n.push(i);
  return n;
}
function Si(t) {
  return tn(t) ? Ns(t) : Xs(t);
}
var It = Qr(Object, "create");
function Ys() {
  this.__data__ = It ? It(null) : {}, this.size = 0;
}
function qs(t) {
  var r = this.has(t) && delete this.__data__[t];
  return this.size -= r ? 1 : 0, r;
}
var Ks = "__lodash_hash_undefined__", Js = Object.prototype, Zs = Js.hasOwnProperty;
function Qs(t) {
  var r = this.__data__;
  if (It) {
    var n = r[t];
    return n === Ks ? void 0 : n;
  }
  return Zs.call(r, t) ? r[t] : void 0;
}
var e0 = Object.prototype, t0 = e0.hasOwnProperty;
function r0(t) {
  var r = this.__data__;
  return It ? r[t] !== void 0 : t0.call(r, t);
}
var n0 = "__lodash_hash_undefined__";
function i0(t, r) {
  var n = this.__data__;
  return this.size += this.has(t) ? 0 : 1, n[t] = It && r === void 0 ? n0 : r, this;
}
function rt(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
rt.prototype.clear = Ys;
rt.prototype.delete = qs;
rt.prototype.get = Qs;
rt.prototype.has = r0;
rt.prototype.set = i0;
function a0() {
  this.__data__ = [], this.size = 0;
}
function br(t, r) {
  for (var n = t.length; n--; )
    if (mr(t[n][0], r))
      return n;
  return -1;
}
var o0 = Array.prototype, l0 = o0.splice;
function s0(t) {
  var r = this.__data__, n = br(r, t);
  if (n < 0)
    return !1;
  var i = r.length - 1;
  return n == i ? r.pop() : l0.call(r, n, 1), --this.size, !0;
}
function u0(t) {
  var r = this.__data__, n = br(r, t);
  return n < 0 ? void 0 : r[n][1];
}
function x0(t) {
  return br(this.__data__, t) > -1;
}
function f0(t, r) {
  var n = this.__data__, i = br(n, t);
  return i < 0 ? (++this.size, n.push([t, r])) : n[i][1] = r, this;
}
function $e(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
$e.prototype.clear = a0;
$e.prototype.delete = s0;
$e.prototype.get = u0;
$e.prototype.has = x0;
$e.prototype.set = f0;
var Pi = Qr(ct, "Map");
function h0() {
  this.size = 0, this.__data__ = {
    hash: new rt(),
    map: new (Pi || $e)(),
    string: new rt()
  };
}
function v0(t) {
  var r = typeof t;
  return r == "string" || r == "number" || r == "symbol" || r == "boolean" ? t !== "__proto__" : t === null;
}
function gr(t, r) {
  var n = t.__data__;
  return v0(r) ? n[typeof r == "string" ? "string" : "hash"] : n.map;
}
function c0(t) {
  var r = gr(this, t).delete(t);
  return this.size -= r ? 1 : 0, r;
}
function p0(t) {
  return gr(this, t).get(t);
}
function C0(t) {
  return gr(this, t).has(t);
}
function d0(t, r) {
  var n = gr(this, t), i = n.size;
  return n.set(t, r), this.size += n.size == i ? 0 : 1, this;
}
function Ct(t) {
  var r = -1, n = t == null ? 0 : t.length;
  for (this.clear(); ++r < n; ) {
    var i = t[r];
    this.set(i[0], i[1]);
  }
}
Ct.prototype.clear = h0;
Ct.prototype.delete = c0;
Ct.prototype.get = p0;
Ct.prototype.has = C0;
Ct.prototype.set = d0;
function m0(t) {
  return t == null ? "" : mi(t);
}
var $i = Ls(Object.getPrototypeOf, Object), b0 = "[object Object]", g0 = Function.prototype, B0 = Object.prototype, Ti = g0.toString, y0 = B0.hasOwnProperty, D0 = Ti.call(Object);
function A0(t) {
  if (!pt(t) || Lt(t) != b0)
    return !1;
  var r = $i(t);
  if (r === null)
    return !0;
  var n = y0.call(r, "constructor") && r.constructor;
  return typeof n == "function" && n instanceof n && Ti.call(n) == D0;
}
function w0(t, r, n) {
  var i = -1, a = t.length;
  r < 0 && (r = -r > a ? 0 : a + r), n = n > a ? a : n, n < 0 && (n += a), a = r > n ? 0 : n - r >>> 0, r >>>= 0;
  for (var o = Array(a); ++i < a; )
    o[i] = t[i + r];
  return o;
}
function F0(t, r, n) {
  var i = t.length;
  return n = n === void 0 ? i : n, !r && n >= i ? t : w0(t, r, n);
}
var E0 = "\\ud800-\\udfff", S0 = "\\u0300-\\u036f", P0 = "\\ufe20-\\ufe2f", $0 = "\\u20d0-\\u20ff", T0 = S0 + P0 + $0, R0 = "\\ufe0e\\ufe0f", z0 = "\\u200d", M0 = RegExp("[" + z0 + E0 + T0 + R0 + "]");
function Ri(t) {
  return M0.test(t);
}
function O0(t) {
  return t.split("");
}
var zi = "\\ud800-\\udfff", _0 = "\\u0300-\\u036f", H0 = "\\ufe20-\\ufe2f", k0 = "\\u20d0-\\u20ff", W0 = _0 + H0 + k0, I0 = "\\ufe0e\\ufe0f", j0 = "[" + zi + "]", Hr = "[" + W0 + "]", kr = "\\ud83c[\\udffb-\\udfff]", N0 = "(?:" + Hr + "|" + kr + ")", Mi = "[^" + zi + "]", Oi = "(?:\\ud83c[\\udde6-\\uddff]){2}", _i = "[\\ud800-\\udbff][\\udc00-\\udfff]", L0 = "\\u200d", Hi = N0 + "?", ki = "[" + I0 + "]?", V0 = "(?:" + L0 + "(?:" + [Mi, Oi, _i].join("|") + ")" + ki + Hi + ")*", G0 = ki + Hi + V0, U0 = "(?:" + [Mi + Hr + "?", Hr, Oi, _i, j0].join("|") + ")", X0 = RegExp(kr + "(?=" + kr + ")|" + U0 + G0, "g");
function Y0(t) {
  return t.match(X0) || [];
}
function q0(t) {
  return Ri(t) ? Y0(t) : O0(t);
}
function K0(t) {
  return function(r) {
    r = m0(r);
    var n = Ri(r) ? q0(r) : void 0, i = n ? n[0] : r.charAt(0), a = n ? F0(n, 1).join("") : r.slice(1);
    return i[t]() + a;
  };
}
var J0 = K0("toUpperCase");
function Z0() {
  this.__data__ = new $e(), this.size = 0;
}
function Q0(t) {
  var r = this.__data__, n = r.delete(t);
  return this.size = r.size, n;
}
function eu(t) {
  return this.__data__.get(t);
}
function tu(t) {
  return this.__data__.has(t);
}
var ru = 200;
function nu(t, r) {
  var n = this.__data__;
  if (n instanceof $e) {
    var i = n.__data__;
    if (!Pi || i.length < ru - 1)
      return i.push([t, r]), this.size = ++n.size, this;
    n = this.__data__ = new Ct(i);
  }
  return n.set(t, r), this.size = n.size, this;
}
function dt(t) {
  var r = this.__data__ = new $e(t);
  this.size = r.size;
}
dt.prototype.clear = Z0;
dt.prototype.delete = Q0;
dt.prototype.get = eu;
dt.prototype.has = tu;
dt.prototype.set = nu;
var Wi = typeof exports == "object" && exports && !exports.nodeType && exports, Vn = Wi && typeof module == "object" && module && !module.nodeType && module, iu = Vn && Vn.exports === Wi, Gn = iu ? ct.Buffer : void 0;
Gn && Gn.allocUnsafe;
function au(t, r) {
  return t.slice();
}
var Un = ct.Uint8Array;
function ou(t) {
  var r = new t.constructor(t.byteLength);
  return new Un(r).set(new Un(t)), r;
}
function lu(t, r) {
  var n = ou(t.buffer);
  return new t.constructor(n, t.byteOffset, t.length);
}
function su(t) {
  return typeof t.constructor == "function" && !yi(t) ? Il($i(t)) : {};
}
function uu(t) {
  return function(r, n, i) {
    for (var a = -1, o = Object(r), s = i(r), l = s.length; l--; ) {
      var x = s[++a];
      if (n(o[x], x, o) === !1)
        break;
    }
    return r;
  };
}
var xu = uu();
function Wr(t, r, n) {
  (n !== void 0 && !mr(t[r], n) || n === void 0 && !(r in t)) && en(t, r, n);
}
function fu(t) {
  return pt(t) && tn(t);
}
function Ir(t, r) {
  if (!(r === "constructor" && typeof t[r] == "function") && r != "__proto__")
    return t[r];
}
function hu(t) {
  return ts(t, Si(t));
}
function vu(t, r, n, i, a, o, s) {
  var l = Ir(t, n), x = Ir(r, n), h = s.get(x);
  if (h) {
    Wr(t, n, h);
    return;
  }
  var v = o ? o(l, x, n + "", t, r, s) : void 0, C = v === void 0;
  if (C) {
    var E = ur(x), R = !E && wi(x), c = !E && !R && Ei(x);
    v = x, E || R || c ? ur(l) ? v = l : fu(l) ? v = Nl(l) : R ? (C = !1, v = au(x)) : c ? (C = !1, v = lu(x)) : v = [] : A0(x) || _r(x) ? (v = l, _r(l) ? v = hu(l) : (!nt(l) || Zr(l)) && (v = su(x))) : C = !1;
  }
  C && (s.set(x, v), a(v, x, i, o, s), s.delete(x)), Wr(t, n, v);
}
function Ii(t, r, n, i, a) {
  t !== r && xu(r, function(o, s) {
    if (a || (a = new dt()), nt(o))
      vu(t, r, s, n, Ii, i, a);
    else {
      var l = i ? i(Ir(t, s), o, s + "", t, r, a) : void 0;
      l === void 0 && (l = o), Wr(t, s, l);
    }
  }, Si);
}
var Pt = os(function(t, r, n) {
  Ii(t, r, n);
});
const Vt = {
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
  fontSize: cu,
  fontFamily: pu,
  lineHeight: Cu
} = Vt, ji = _("body", `
 margin: 0;
 font-size: ${cu};
 font-family: ${pu};
 line-height: ${Cu};
 -webkit-text-size-adjust: 100%;
 -webkit-tap-highlight-color: transparent;
`, [_("input", `
 font-family: inherit;
 font-size: inherit;
 `)]), Pe = "n-config-provider", jt = "naive-ui-style";
function it(t, r, n, i, a, o) {
  const s = dr(), l = be(Pe, null);
  if (n) {
    const h = () => {
      const v = o == null ? void 0 : o.value;
      n.mount({
        id: v === void 0 ? r : v + r,
        head: !0,
        props: {
          bPrefix: v ? `.${v}-` : void 0
        },
        anchorMetaName: jt,
        ssr: s,
        parent: l == null ? void 0 : l.styleMountTarget
      }), l != null && l.preflightStyleDisabled || ji.mount({
        id: "n-global",
        head: !0,
        anchorMetaName: jt,
        ssr: s,
        parent: l == null ? void 0 : l.styleMountTarget
      });
    };
    s ? h() : Xr(h);
  }
  return W(() => {
    var h;
    const {
      theme: {
        common: v,
        self: C,
        peers: E = {}
      } = {},
      themeOverrides: R = {},
      builtinThemeOverrides: c = {}
    } = a, {
      common: m,
      peers: y
    } = R, {
      common: B = void 0,
      [t]: {
        common: $ = void 0,
        self: H = void 0,
        peers: D = {}
      } = {}
    } = (l == null ? void 0 : l.mergedThemeRef.value) || {}, {
      common: z = void 0,
      [t]: j = {}
    } = (l == null ? void 0 : l.mergedThemeOverridesRef.value) || {}, {
      common: f,
      peers: b = {}
    } = j, w = Pt({}, v || $ || B || i.common, z, f, m), I = Pt(
      // {}, executed every time, no need for empty obj
      (h = C || H || i.self) === null || h === void 0 ? void 0 : h(w),
      c,
      j,
      R
    );
    return {
      common: w,
      self: I,
      peers: Pt({}, i.peers, D, E),
      peerOverrides: Pt({}, c.peers, b, y)
    };
  });
}
it.props = {
  theme: Object,
  themeOverrides: Object,
  builtinThemeOverrides: Object
};
const jr = "n";
function rn(t = {}, r = {
  defaultBordered: !0
}) {
  const n = be(Pe, null);
  return {
    // NConfigProvider,
    inlineThemeDisabled: n == null ? void 0 : n.inlineThemeDisabled,
    mergedRtlRef: n == null ? void 0 : n.mergedRtlRef,
    mergedComponentPropsRef: n == null ? void 0 : n.mergedComponentPropsRef,
    mergedBreakpointsRef: n == null ? void 0 : n.mergedBreakpointsRef,
    mergedBorderedRef: W(() => {
      var i, a;
      const {
        bordered: o
      } = t;
      return o !== void 0 ? o : (a = (i = n == null ? void 0 : n.mergedBorderedRef.value) !== null && i !== void 0 ? i : r.defaultBordered) !== null && a !== void 0 ? a : !0;
    }),
    mergedClsPrefixRef: n ? n.mergedClsPrefixRef : Ia(jr),
    namespaceRef: W(() => n == null ? void 0 : n.mergedNamespaceRef.value)
  };
}
const du = {
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
}, mu = {
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
function ut(t) {
  return (r = {}) => {
    const n = r.width ? String(r.width) : t.defaultWidth;
    return t.formats[n] || t.formats[t.defaultWidth];
  };
}
function De(t) {
  return (r, n) => {
    const i = n != null && n.context ? String(n.context) : "standalone";
    let a;
    if (i === "formatting" && t.formattingValues) {
      const s = t.defaultFormattingWidth || t.defaultWidth, l = n != null && n.width ? String(n.width) : s;
      a = t.formattingValues[l] || t.formattingValues[s];
    } else {
      const s = t.defaultWidth, l = n != null && n.width ? String(n.width) : t.defaultWidth;
      a = t.values[l] || t.values[s];
    }
    const o = t.argumentCallback ? t.argumentCallback(r) : r;
    return a[o];
  };
}
function Ae(t) {
  return (r, n = {}) => {
    const i = n.width, a = i && t.matchPatterns[i] || t.matchPatterns[t.defaultMatchWidth], o = r.match(a);
    if (!o)
      return null;
    const s = o[0], l = i && t.parsePatterns[i] || t.parsePatterns[t.defaultParseWidth], x = Array.isArray(l) ? gu(l, (C) => C.test(s)) : (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      bu(l, (C) => C.test(s))
    );
    let h;
    h = t.valueCallback ? t.valueCallback(x) : x, h = n.valueCallback ? (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
      n.valueCallback(h)
    ) : h;
    const v = r.slice(s.length);
    return { value: h, rest: v };
  };
}
function bu(t, r) {
  for (const n in t)
    if (Object.prototype.hasOwnProperty.call(t, n) && r(t[n]))
      return n;
}
function gu(t, r) {
  for (let n = 0; n < t.length; n++)
    if (r(t[n]))
      return n;
}
function Ni(t) {
  return (r, n = {}) => {
    const i = r.match(t.matchPattern);
    if (!i) return null;
    const a = i[0], o = r.match(t.parsePattern);
    if (!o) return null;
    let s = t.valueCallback ? t.valueCallback(o[0]) : o[0];
    s = n.valueCallback ? n.valueCallback(s) : s;
    const l = r.slice(a.length);
    return { value: s, rest: l };
  };
}
function Bu(t) {
  const r = Object.prototype.toString.call(t);
  return t instanceof Date || typeof t == "object" && r === "[object Date]" ? new t.constructor(+t) : typeof t == "number" || r === "[object Number]" || typeof t == "string" || r === "[object String]" ? new Date(t) : /* @__PURE__ */ new Date(NaN);
}
let yu = {};
function Du() {
  return yu;
}
function Xn(t, r) {
  var l, x, h, v;
  const n = Du(), i = (r == null ? void 0 : r.weekStartsOn) ?? ((x = (l = r == null ? void 0 : r.locale) == null ? void 0 : l.options) == null ? void 0 : x.weekStartsOn) ?? n.weekStartsOn ?? ((v = (h = n.locale) == null ? void 0 : h.options) == null ? void 0 : v.weekStartsOn) ?? 0, a = Bu(t), o = a.getDay(), s = (o < i ? 7 : 0) + o - i;
  return a.setDate(a.getDate() - s), a.setHours(0, 0, 0, 0), a;
}
function Au(t, r, n) {
  const i = Xn(t, n), a = Xn(r, n);
  return +i == +a;
}
const wu = {
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
}, Fu = (t, r, n) => {
  let i;
  const a = wu[t];
  return typeof a == "string" ? i = a : r === 1 ? i = a.one : i = a.other.replace("{{count}}", r.toString()), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? "in " + i : i + " ago" : i;
}, Eu = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P"
}, Su = (t, r, n, i) => Eu[t], Pu = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"]
}, $u = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
}, Tu = {
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
}, Ru = {
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
}, zu = {
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
}, Mu = {
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
}, Ou = (t, r) => {
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
}, _u = {
  ordinalNumber: Ou,
  era: De({
    values: Pu,
    defaultWidth: "wide"
  }),
  quarter: De({
    values: $u,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: De({
    values: Tu,
    defaultWidth: "wide"
  }),
  day: De({
    values: Ru,
    defaultWidth: "wide"
  }),
  dayPeriod: De({
    values: zu,
    defaultWidth: "wide",
    formattingValues: Mu,
    defaultFormattingWidth: "wide"
  })
}, Hu = /^(\d+)(th|st|nd|rd)?/i, ku = /\d+/i, Wu = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i
}, Iu = {
  any: [/^b/i, /^(a|c)/i]
}, ju = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i
}, Nu = {
  any: [/1/i, /2/i, /3/i, /4/i]
}, Lu = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
}, Vu = {
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
}, Gu = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
}, Uu = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
}, Xu = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
}, Yu = {
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
}, qu = {
  ordinalNumber: Ni({
    matchPattern: Hu,
    parsePattern: ku,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: Ae({
    matchPatterns: Wu,
    defaultMatchWidth: "wide",
    parsePatterns: Iu,
    defaultParseWidth: "any"
  }),
  quarter: Ae({
    matchPatterns: ju,
    defaultMatchWidth: "wide",
    parsePatterns: Nu,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: Ae({
    matchPatterns: Lu,
    defaultMatchWidth: "wide",
    parsePatterns: Vu,
    defaultParseWidth: "any"
  }),
  day: Ae({
    matchPatterns: Gu,
    defaultMatchWidth: "wide",
    parsePatterns: Uu,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ae({
    matchPatterns: Xu,
    defaultMatchWidth: "any",
    parsePatterns: Yu,
    defaultParseWidth: "any"
  })
}, Ku = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy"
}, Ju = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a"
}, Zu = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}"
}, Qu = {
  date: ut({
    formats: Ku,
    defaultWidth: "full"
  }),
  time: ut({
    formats: Ju,
    defaultWidth: "full"
  }),
  dateTime: ut({
    formats: Zu,
    defaultWidth: "full"
  })
}, ex = {
  code: "en-US",
  formatDistance: Fu,
  formatLong: Qu,
  formatRelative: Su,
  localize: _u,
  match: qu,
  options: {
    weekStartsOn: 0,
    firstWeekContainsDate: 1
  }
}, tx = {
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
}, rx = (t, r, n) => {
  let i;
  const a = tx[t];
  return typeof a == "string" ? i = a : r === 1 ? i = a.one : i = a.other.replace("{{count}}", String(r)), n != null && n.addSuffix ? n.comparison && n.comparison > 0 ? i + "内" : i + "前" : i;
}, nx = {
  full: "y'年'M'月'd'日' EEEE",
  long: "y'年'M'月'd'日'",
  medium: "yyyy-MM-dd",
  short: "yy-MM-dd"
}, ix = {
  full: "zzzz a h:mm:ss",
  long: "z a h:mm:ss",
  medium: "a h:mm:ss",
  short: "a h:mm"
}, ax = {
  full: "{{date}} {{time}}",
  long: "{{date}} {{time}}",
  medium: "{{date}} {{time}}",
  short: "{{date}} {{time}}"
}, ox = {
  date: ut({
    formats: nx,
    defaultWidth: "full"
  }),
  time: ut({
    formats: ix,
    defaultWidth: "full"
  }),
  dateTime: ut({
    formats: ax,
    defaultWidth: "full"
  })
};
function Yn(t, r, n) {
  const i = "eeee p";
  return Au(t, r, n) ? i : t.getTime() > r.getTime() ? "'下个'" + i : "'上个'" + i;
}
const lx = {
  lastWeek: Yn,
  // days before yesterday, maybe in this week or last week
  yesterday: "'昨天' p",
  today: "'今天' p",
  tomorrow: "'明天' p",
  nextWeek: Yn,
  // days after tomorrow, maybe in this week or next week
  other: "PP p"
}, sx = (t, r, n, i) => {
  const a = lx[t];
  return typeof a == "function" ? a(r, n, i) : a;
}, ux = {
  narrow: ["前", "公元"],
  abbreviated: ["前", "公元"],
  wide: ["公元前", "公元"]
}, xx = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["第一季", "第二季", "第三季", "第四季"],
  wide: ["第一季度", "第二季度", "第三季度", "第四季度"]
}, fx = {
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
}, hx = {
  narrow: ["日", "一", "二", "三", "四", "五", "六"],
  short: ["日", "一", "二", "三", "四", "五", "六"],
  abbreviated: ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
  wide: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"]
}, vx = {
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
}, cx = {
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
}, px = (t, r) => {
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
}, Cx = {
  ordinalNumber: px,
  era: De({
    values: ux,
    defaultWidth: "wide"
  }),
  quarter: De({
    values: xx,
    defaultWidth: "wide",
    argumentCallback: (t) => t - 1
  }),
  month: De({
    values: fx,
    defaultWidth: "wide"
  }),
  day: De({
    values: hx,
    defaultWidth: "wide"
  }),
  dayPeriod: De({
    values: vx,
    defaultWidth: "wide",
    formattingValues: cx,
    defaultFormattingWidth: "wide"
  })
}, dx = /^(第\s*)?\d+(日|时|分|秒)?/i, mx = /\d+/i, bx = {
  narrow: /^(前)/i,
  abbreviated: /^(前)/i,
  wide: /^(公元前|公元)/i
}, gx = {
  any: [/^(前)/i, /^(公元)/i]
}, Bx = {
  narrow: /^[1234]/i,
  abbreviated: /^第[一二三四]刻/i,
  wide: /^第[一二三四]刻钟/i
}, yx = {
  any: [/(1|一)/i, /(2|二)/i, /(3|三)/i, /(4|四)/i]
}, Dx = {
  narrow: /^(一|二|三|四|五|六|七|八|九|十[二一])/i,
  abbreviated: /^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,
  wide: /^(一|二|三|四|五|六|七|八|九|十[二一])月/i
}, Ax = {
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
}, wx = {
  narrow: /^[一二三四五六日]/i,
  short: /^[一二三四五六日]/i,
  abbreviated: /^周[一二三四五六日]/i,
  wide: /^星期[一二三四五六日]/i
}, Fx = {
  any: [/日/i, /一/i, /二/i, /三/i, /四/i, /五/i, /六/i]
}, Ex = {
  any: /^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i
}, Sx = {
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
}, Px = {
  ordinalNumber: Ni({
    matchPattern: dx,
    parsePattern: mx,
    valueCallback: (t) => parseInt(t, 10)
  }),
  era: Ae({
    matchPatterns: bx,
    defaultMatchWidth: "wide",
    parsePatterns: gx,
    defaultParseWidth: "any"
  }),
  quarter: Ae({
    matchPatterns: Bx,
    defaultMatchWidth: "wide",
    parsePatterns: yx,
    defaultParseWidth: "any",
    valueCallback: (t) => t + 1
  }),
  month: Ae({
    matchPatterns: Dx,
    defaultMatchWidth: "wide",
    parsePatterns: Ax,
    defaultParseWidth: "any"
  }),
  day: Ae({
    matchPatterns: wx,
    defaultMatchWidth: "wide",
    parsePatterns: Fx,
    defaultParseWidth: "any"
  }),
  dayPeriod: Ae({
    matchPatterns: Ex,
    defaultMatchWidth: "any",
    parsePatterns: Sx,
    defaultParseWidth: "any"
  })
}, $x = {
  code: "zh-CN",
  formatDistance: rx,
  formatLong: ox,
  formatRelative: sx,
  localize: Cx,
  match: Px,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}, Tx = {
  name: "zh-CN",
  locale: $x
}, Rx = {
  name: "en-US",
  locale: ex
};
function zx(t) {
  const {
    mergedLocaleRef: r,
    mergedDateLocaleRef: n
  } = be(Pe, null) || {}, i = W(() => {
    var o, s;
    return (s = (o = r == null ? void 0 : r.value) === null || o === void 0 ? void 0 : o[t]) !== null && s !== void 0 ? s : mu[t];
  });
  return {
    dateLocaleRef: W(() => {
      var o;
      return (o = n == null ? void 0 : n.value) !== null && o !== void 0 ? o : Rx;
    }),
    localeRef: i
  };
}
function Gt(t, r, n) {
  if (!r) {
    process.env.NODE_ENV !== "production" && ri("use-style", "No style is specified.");
    return;
  }
  const i = dr(), a = be(Pe, null), o = () => {
    const s = n.value;
    r.mount({
      id: s === void 0 ? t : s + t,
      head: !0,
      anchorMetaName: jt,
      props: {
        bPrefix: s ? `.${s}-` : void 0
      },
      ssr: i,
      parent: a == null ? void 0 : a.styleMountTarget
    }), a != null && a.preflightStyleDisabled || ji.mount({
      id: "n-global",
      head: !0,
      anchorMetaName: jt,
      ssr: i,
      parent: a == null ? void 0 : a.styleMountTarget
    });
  };
  i ? o() : Xr(o);
}
function nn(t, r, n, i) {
  n || ri("useThemeClass", "cssVarsRef is not passed");
  const a = be(Pe, null), o = a == null ? void 0 : a.mergedThemeHashRef, s = a == null ? void 0 : a.styleMountTarget, l = U(""), x = dr();
  let h;
  const v = `__${t}`, C = () => {
    let E = v;
    const R = r ? r.value : void 0, c = o == null ? void 0 : o.value;
    c && (E += `-${c}`), R && (E += `-${R}`);
    const {
      themeOverrides: m,
      builtinThemeOverrides: y
    } = i;
    m && (E += `-${Ht(JSON.stringify(m))}`), y && (E += `-${Ht(JSON.stringify(y))}`), l.value = E, h = () => {
      const B = n.value;
      let $ = "";
      for (const H in B)
        $ += `${H}: ${B[H]};`;
      _(`.${E}`, $).mount({
        id: E,
        ssr: x,
        parent: s
      }), h = void 0;
    };
  };
  return Ze(() => {
    C();
  }), {
    themeClass: l,
    onRender: () => {
      h == null || h();
    }
  };
}
function an(t, r, n) {
  if (!r) return;
  const i = dr(), a = W(() => {
    const {
      value: l
    } = r;
    if (!l)
      return;
    const x = l[t];
    if (x)
      return x;
  }), o = be(Pe, null), s = () => {
    Ze(() => {
      const {
        value: l
      } = n, x = `${l}${t}Rtl`;
      if (yo(x, i)) return;
      const {
        value: h
      } = a;
      h && h.style.mount({
        id: x,
        head: !0,
        anchorMetaName: jt,
        props: {
          bPrefix: l ? `.${l}-` : void 0
        },
        ssr: i,
        parent: o == null ? void 0 : o.styleMountTarget
      });
    });
  };
  return i ? s() : Xr(s), a;
}
function Mx(t, r) {
  return xe({
    name: J0(t),
    setup() {
      var n;
      const i = (n = be(Pe, null)) === null || n === void 0 ? void 0 : n.mergedIconsRef;
      return () => {
        var a;
        const o = (a = i == null ? void 0 : i.value) === null || a === void 0 ? void 0 : a[t];
        return o ? o() : r;
      };
    }
  });
}
const Ox = xe({
  name: "Eye",
  render() {
    return d("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, d("path", {
      d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
      fill: "none",
      stroke: "currentColor",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
      "stroke-width": "32"
    }), d("circle", {
      cx: "256",
      cy: "256",
      r: "80",
      fill: "none",
      stroke: "currentColor",
      "stroke-miterlimit": "10",
      "stroke-width": "32"
    }));
  }
}), _x = xe({
  name: "EyeOff",
  render() {
    return d("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 512 512"
    }, d("path", {
      d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
      fill: "currentColor"
    }), d("path", {
      d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
      fill: "currentColor"
    }), d("path", {
      d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
      fill: "currentColor"
    }), d("path", {
      d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
      fill: "currentColor"
    }), d("path", {
      d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
      fill: "currentColor"
    }));
  }
}), Hx = xe({
  name: "ChevronDown",
  render() {
    return d("svg", {
      viewBox: "0 0 16 16",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, d("path", {
      d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
      fill: "currentColor"
    }));
  }
}), kx = Mx("clear", d("svg", {
  viewBox: "0 0 16 16",
  version: "1.1",
  xmlns: "http://www.w3.org/2000/svg"
}, d("g", {
  stroke: "none",
  "stroke-width": "1",
  fill: "none",
  "fill-rule": "evenodd"
}, d("g", {
  fill: "currentColor",
  "fill-rule": "nonzero"
}, d("path", {
  d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
}))))), on = xe({
  name: "BaseIconSwitchTransition",
  setup(t, {
    slots: r
  }) {
    const n = Mo();
    return () => d(sr, {
      name: "icon-switch-transition",
      appear: n.value
    }, r);
  }
}), Wx = xe({
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
    function n(l) {
      t.width ? l.style.maxWidth = `${l.offsetWidth}px` : l.style.maxHeight = `${l.offsetHeight}px`, l.offsetWidth;
    }
    function i(l) {
      t.width ? l.style.maxWidth = "0" : l.style.maxHeight = "0", l.offsetWidth;
      const {
        onLeave: x
      } = t;
      x && x();
    }
    function a(l) {
      t.width ? l.style.maxWidth = "" : l.style.maxHeight = "";
      const {
        onAfterLeave: x
      } = t;
      x && x();
    }
    function o(l) {
      if (l.style.transition = "none", t.width) {
        const x = l.offsetWidth;
        l.style.maxWidth = "0", l.offsetWidth, l.style.transition = "", l.style.maxWidth = `${x}px`;
      } else if (t.reverse)
        l.style.maxHeight = `${l.offsetHeight}px`, l.offsetHeight, l.style.transition = "", l.style.maxHeight = "0";
      else {
        const x = l.offsetHeight;
        l.style.maxHeight = "0", l.offsetWidth, l.style.transition = "", l.style.maxHeight = `${x}px`;
      }
      l.offsetWidth;
    }
    function s(l) {
      var x;
      t.width ? l.style.maxWidth = "" : t.reverse || (l.style.maxHeight = ""), (x = t.onAfterEnter) === null || x === void 0 || x.call(t);
    }
    return () => {
      const {
        group: l,
        width: x,
        appear: h,
        mode: v
      } = t, C = l ? ja : sr, E = {
        name: x ? "fade-in-width-expand-transition" : "fade-in-height-expand-transition",
        appear: h,
        onEnter: o,
        onAfterEnter: s,
        onBeforeLeave: n,
        onLeave: i,
        onAfterLeave: a
      };
      return l || (E.mode = v), d(C, E, r);
    };
  }
}), Ix = K("base-icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [_("svg", `
 height: 1em;
 width: 1em;
 `)]), fr = xe({
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
    Gt("-base-icon", Ix, xt(t, "clsPrefix"));
  },
  render() {
    return d("i", {
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
  cubicBezierEaseInOut: jx
} = Vt;
function hr({
  originalTransform: t = "",
  left: r = 0,
  top: n = 0,
  transition: i = `all .3s ${jx} !important`
} = {}) {
  return [_("&.icon-switch-transition-enter-from, &.icon-switch-transition-leave-to", {
    transform: `${t} scale(0.75)`,
    left: r,
    top: n,
    opacity: 0
  }), _("&.icon-switch-transition-enter-to, &.icon-switch-transition-leave-from", {
    transform: `scale(1) ${t}`,
    left: r,
    top: n,
    opacity: 1
  }), _("&.icon-switch-transition-enter-active, &.icon-switch-transition-leave-active", {
    transformOrigin: "center",
    position: "absolute",
    left: r,
    top: n,
    transition: i
  })];
}
const Nx = _([_("@keyframes rotator", `
 0% {
 -webkit-transform: rotate(0deg);
 transform: rotate(0deg);
 }
 100% {
 -webkit-transform: rotate(360deg);
 transform: rotate(360deg);
 }`), K("base-loading", `
 position: relative;
 line-height: 0;
 width: 1em;
 height: 1em;
 `, [S("transition-wrapper", `
 position: absolute;
 width: 100%;
 height: 100%;
 `, [hr()]), S("placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [hr({
  left: "50%",
  top: "50%",
  originalTransform: "translateX(-50%) translateY(-50%)"
})]), S("container", `
 animation: rotator 3s linear infinite both;
 `, [S("icon", `
 height: 1em;
 width: 1em;
 `)])])]), $r = "1.6s", Lx = {
  strokeWidth: {
    type: Number,
    default: 28
  },
  stroke: {
    type: String,
    default: void 0
  }
}, Li = xe({
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
  }, Lx),
  setup(t) {
    Gt("-base-loading", Nx, xt(t, "clsPrefix"));
  },
  render() {
    const {
      clsPrefix: t,
      radius: r,
      strokeWidth: n,
      stroke: i,
      scale: a
    } = this, o = r / a;
    return d("div", {
      class: `${t}-base-loading`,
      role: "img",
      "aria-label": "loading"
    }, d(on, null, {
      default: () => this.show ? d("div", {
        key: "icon",
        class: `${t}-base-loading__transition-wrapper`
      }, d("div", {
        class: `${t}-base-loading__container`
      }, d("svg", {
        class: `${t}-base-loading__icon`,
        viewBox: `0 0 ${2 * o} ${2 * o}`,
        xmlns: "http://www.w3.org/2000/svg",
        style: {
          color: i
        }
      }, d("g", null, d("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${o} ${o};270 ${o} ${o}`,
        begin: "0s",
        dur: $r,
        fill: "freeze",
        repeatCount: "indefinite"
      }), d("circle", {
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
      }, d("animateTransform", {
        attributeName: "transform",
        type: "rotate",
        values: `0 ${o} ${o};135 ${o} ${o};450 ${o} ${o}`,
        begin: "0s",
        dur: $r,
        fill: "freeze",
        repeatCount: "indefinite"
      }), d("animate", {
        attributeName: "stroke-dashoffset",
        values: `${5.67 * r};${1.42 * r};${5.67 * r}`,
        begin: "0s",
        dur: $r,
        fill: "freeze",
        repeatCount: "indefinite"
      })))))) : d("div", {
        key: "placeholder",
        class: `${t}-base-loading__placeholder`
      }, this.$slots)
    }));
  }
}), O = {
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
}, Vx = tt(O.neutralBase), Vi = tt(O.neutralInvertBase), Gx = `rgba(${Vi.slice(0, 3).join(", ")}, `;
function qn(t) {
  return `${Gx + String(t)})`;
}
function ce(t) {
  const r = Array.from(Vi);
  return r[3] = Number(t), Kr(Vx, r);
}
const ln = Object.assign(Object.assign({
  name: "common"
}, Vt), {
  baseColor: O.neutralBase,
  // primary color
  primaryColor: O.primaryDefault,
  primaryColorHover: O.primaryHover,
  primaryColorPressed: O.primaryActive,
  primaryColorSuppl: O.primarySuppl,
  // info color
  infoColor: O.infoDefault,
  infoColorHover: O.infoHover,
  infoColorPressed: O.infoActive,
  infoColorSuppl: O.infoSuppl,
  // success color
  successColor: O.successDefault,
  successColorHover: O.successHover,
  successColorPressed: O.successActive,
  successColorSuppl: O.successSuppl,
  // warning color
  warningColor: O.warningDefault,
  warningColorHover: O.warningHover,
  warningColorPressed: O.warningActive,
  warningColorSuppl: O.warningSuppl,
  // error color
  errorColor: O.errorDefault,
  errorColorHover: O.errorHover,
  errorColorPressed: O.errorActive,
  errorColorSuppl: O.errorSuppl,
  // text color
  textColorBase: O.neutralTextBase,
  textColor1: "rgb(31, 34, 37)",
  textColor2: "rgb(51, 54, 57)",
  textColor3: "rgb(118, 124, 130)",
  // textColor4: neutral(base.alpha4), // disabled, placeholder, icon
  // textColor5: neutral(base.alpha5),
  textColorDisabled: ce(O.alpha4),
  placeholderColor: ce(O.alpha4),
  placeholderColorDisabled: ce(O.alpha5),
  iconColor: ce(O.alpha4),
  iconColorHover: Zt(ce(O.alpha4), {
    lightness: 0.75
  }),
  iconColorPressed: Zt(ce(O.alpha4), {
    lightness: 0.9
  }),
  iconColorDisabled: ce(O.alpha5),
  opacity1: O.alpha1,
  opacity2: O.alpha2,
  opacity3: O.alpha3,
  opacity4: O.alpha4,
  opacity5: O.alpha5,
  dividerColor: "rgb(239, 239, 245)",
  borderColor: "rgb(224, 224, 230)",
  // close
  closeIconColor: ce(Number(O.alphaClose)),
  closeIconColorHover: ce(Number(O.alphaClose)),
  closeIconColorPressed: ce(Number(O.alphaClose)),
  closeColorHover: "rgba(0, 0, 0, .09)",
  closeColorPressed: "rgba(0, 0, 0, .13)",
  // clear
  clearColor: ce(O.alpha4),
  clearColorHover: Zt(ce(O.alpha4), {
    lightness: 0.75
  }),
  clearColorPressed: Zt(ce(O.alpha4), {
    lightness: 0.9
  }),
  scrollbarColor: qn(O.alphaScrollbar),
  scrollbarColorHover: qn(O.alphaScrollbarHover),
  scrollbarWidth: "5px",
  scrollbarHeight: "5px",
  scrollbarBorderRadius: "5px",
  progressRailColor: ce(O.alphaProgressRail),
  railColor: "rgb(219, 219, 223)",
  popoverColor: O.neutralPopover,
  tableColor: O.neutralCard,
  cardColor: O.neutralCard,
  modalColor: O.neutralModal,
  bodyColor: O.neutralBody,
  tagColor: "#eee",
  avatarColor: ce(O.alphaAvatar),
  invertedColor: "rgb(0, 20, 40)",
  inputColor: ce(O.alphaInput),
  codeColor: "rgb(244, 244, 248)",
  tabColor: "rgb(247, 247, 250)",
  actionColor: "rgb(250, 250, 252)",
  tableHeaderColor: "rgb(250, 250, 252)",
  hoverColor: "rgb(243, 243, 245)",
  // use color with alpha since it can be nested with header filter & sorter effect
  tableColorHover: "rgba(0, 0, 100, 0.03)",
  tableColorStriped: "rgba(0, 0, 100, 0.02)",
  pressedColor: "rgb(237, 237, 239)",
  opacityDisabled: O.alphaDisabled,
  inputColorDisabled: "rgb(250, 250, 252)",
  // secondary button color
  // can also be used in tertiary button & quaternary button
  buttonColor2: "rgba(46, 51, 56, .05)",
  buttonColor2Hover: "rgba(46, 51, 56, .09)",
  buttonColor2Pressed: "rgba(46, 51, 56, .13)",
  boxShadow1: "0 1px 2px -2px rgba(0, 0, 0, .08), 0 3px 6px 0 rgba(0, 0, 0, .06), 0 5px 12px 4px rgba(0, 0, 0, .04)",
  boxShadow2: "0 3px 6px -4px rgba(0, 0, 0, .12), 0 6px 16px 0 rgba(0, 0, 0, .08), 0 9px 28px 8px rgba(0, 0, 0, .05)",
  boxShadow3: "0 6px 16px -9px rgba(0, 0, 0, .08), 0 9px 28px 0 rgba(0, 0, 0, .05), 0 12px 48px 16px rgba(0, 0, 0, .03)"
}), Ux = {
  railInsetHorizontalBottom: "auto 2px 4px 2px",
  railInsetHorizontalTop: "4px 2px auto 2px",
  railInsetVerticalRight: "2px 4px 2px auto",
  railInsetVerticalLeft: "2px auto 2px 4px",
  railColor: "transparent"
};
function Xx(t) {
  const {
    scrollbarColor: r,
    scrollbarColorHover: n,
    scrollbarHeight: i,
    scrollbarWidth: a,
    scrollbarBorderRadius: o
  } = t;
  return Object.assign(Object.assign({}, Ux), {
    height: i,
    width: a,
    borderRadius: o,
    color: r,
    colorHover: n
  });
}
const Yx = {
  name: "Scrollbar",
  common: ln,
  self: Xx
}, {
  cubicBezierEaseInOut: Kn
} = Vt;
function qx({
  name: t = "fade-in",
  enterDuration: r = "0.2s",
  leaveDuration: n = "0.2s",
  enterCubicBezier: i = Kn,
  leaveCubicBezier: a = Kn
} = {}) {
  return [_(`&.${t}-transition-enter-active`, {
    transition: `all ${r} ${i}!important`
  }), _(`&.${t}-transition-leave-active`, {
    transition: `all ${n} ${a}!important`
  }), _(`&.${t}-transition-enter-from, &.${t}-transition-leave-to`, {
    opacity: 0
  }), _(`&.${t}-transition-leave-from, &.${t}-transition-enter-to`, {
    opacity: 1
  })];
}
const Kx = K("scrollbar", `
 overflow: hidden;
 position: relative;
 z-index: auto;
 height: 100%;
 width: 100%;
`, [_(">", [K("scrollbar-container", `
 width: 100%;
 overflow: scroll;
 height: 100%;
 min-height: inherit;
 max-height: inherit;
 scrollbar-width: none;
 `, [_("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), _(">", [
  // We can't set overflow hidden since it affects positioning.
  K("scrollbar-content", `
 box-sizing: border-box;
 min-width: 100%;
 `)
])])]), _(">, +", [K("scrollbar-rail", `
 position: absolute;
 pointer-events: none;
 user-select: none;
 background: var(--n-scrollbar-rail-color);
 -webkit-user-select: none;
 `, [J("horizontal", `
 height: var(--n-scrollbar-height);
 `, [_(">", [S("scrollbar", `
 height: var(--n-scrollbar-height);
 border-radius: var(--n-scrollbar-border-radius);
 right: 0;
 `)])]), J("horizontal--top", `
 inset: var(--n-scrollbar-rail-inset-horizontal-top); 
 `), J("horizontal--bottom", `
 inset: var(--n-scrollbar-rail-inset-horizontal-bottom); 
 `), J("vertical", `
 width: var(--n-scrollbar-width);
 `, [_(">", [S("scrollbar", `
 width: var(--n-scrollbar-width);
 border-radius: var(--n-scrollbar-border-radius);
 bottom: 0;
 `)])]), J("vertical--left", `
 inset: var(--n-scrollbar-rail-inset-vertical-left); 
 `), J("vertical--right", `
 inset: var(--n-scrollbar-rail-inset-vertical-right); 
 `), J("disabled", [_(">", [S("scrollbar", "pointer-events: none;")])]), _(">", [S("scrollbar", `
 z-index: 1;
 position: absolute;
 cursor: pointer;
 pointer-events: all;
 background-color: var(--n-scrollbar-color);
 transition: background-color .2s var(--n-scrollbar-bezier);
 `, [qx(), _("&:hover", "background-color: var(--n-scrollbar-color-hover);")])])])])]), Jx = Object.assign(Object.assign({}, it.props), {
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
}), Zx = xe({
  name: "Scrollbar",
  props: Jx,
  inheritAttrs: !1,
  setup(t) {
    const {
      mergedClsPrefixRef: r,
      inlineThemeDisabled: n,
      mergedRtlRef: i
    } = rn(t), a = an("Scrollbar", i, r), o = U(null), s = U(null), l = U(null), x = U(null), h = U(null), v = U(null), C = U(null), E = U(null), R = U(null), c = U(null), m = U(null), y = U(0), B = U(0), $ = U(!1), H = U(!1);
    let D = !1, z = !1, j, f, b = 0, w = 0, I = 0, V = 0;
    const L = _o(), e = it("Scrollbar", "-scrollbar", Kx, Yx, t, r), F = W(() => {
      const {
        value: g
      } = E, {
        value: T
      } = v, {
        value: N
      } = c;
      return g === null || T === null || N === null ? 0 : Math.min(g, N * g / T + hn(e.value.self.width) * 1.5);
    }), M = W(() => `${F.value}px`), P = W(() => {
      const {
        value: g
      } = R, {
        value: T
      } = C, {
        value: N
      } = m;
      return g === null || T === null || N === null ? 0 : N * g / T + hn(e.value.self.height) * 1.5;
    }), A = W(() => `${P.value}px`), G = W(() => {
      const {
        value: g
      } = E, {
        value: T
      } = y, {
        value: N
      } = v, {
        value: Z
      } = c;
      if (g === null || N === null || Z === null)
        return 0;
      {
        const oe = N - g;
        return oe ? T / oe * (Z - F.value) : 0;
      }
    }), fe = W(() => `${G.value}px`), ae = W(() => {
      const {
        value: g
      } = R, {
        value: T
      } = B, {
        value: N
      } = C, {
        value: Z
      } = m;
      if (g === null || N === null || Z === null)
        return 0;
      {
        const oe = N - g;
        return oe ? T / oe * (Z - P.value) : 0;
      }
    }), Ce = W(() => `${ae.value}px`), se = W(() => {
      const {
        value: g
      } = E, {
        value: T
      } = v;
      return g !== null && T !== null && T > g;
    }), at = W(() => {
      const {
        value: g
      } = R, {
        value: T
      } = C;
      return g !== null && T !== null && T > g;
    }), Te = W(() => {
      const {
        trigger: g
      } = t;
      return g === "none" || $.value;
    }), Re = W(() => {
      const {
        trigger: g
      } = t;
      return g === "none" || H.value;
    }), q = W(() => {
      const {
        container: g
      } = t;
      return g ? g() : s.value;
    }), ze = W(() => {
      const {
        content: g
      } = t;
      return g ? g() : l.value;
    }), He = (g, T) => {
      if (!t.scrollable) return;
      if (typeof g == "number") {
        ge(g, T ?? 0, 0, !1, "auto");
        return;
      }
      const {
        left: N,
        top: Z,
        index: oe,
        elSize: he,
        position: me,
        behavior: re,
        el: ve,
        debounce: Be = !0
      } = g;
      (N !== void 0 || Z !== void 0) && ge(N ?? 0, Z ?? 0, 0, !1, re), ve !== void 0 ? ge(0, ve.offsetTop, ve.offsetHeight, Be, re) : oe !== void 0 && he !== void 0 ? ge(0, oe * he, he, Be, re) : me === "bottom" ? ge(0, Number.MAX_SAFE_INTEGER, 0, !1, re) : me === "top" && ge(0, 0, 0, !1, re);
    }, Y = ul(() => {
      t.container || He({
        top: y.value,
        left: B.value
      });
    }), ke = () => {
      Y.isDeactivated || Fe();
    }, We = (g) => {
      if (Y.isDeactivated) return;
      const {
        onResize: T
      } = t;
      T && T(g), Fe();
    }, mt = (g, T) => {
      if (!t.scrollable) return;
      const {
        value: N
      } = q;
      N && (typeof g == "object" ? N.scrollBy(g) : N.scrollBy(g, T || 0));
    };
    function ge(g, T, N, Z, oe) {
      const {
        value: he
      } = q;
      if (he) {
        if (Z) {
          const {
            scrollTop: me,
            offsetHeight: re
          } = he;
          if (T > me) {
            T + N <= me + re || he.scrollTo({
              left: g,
              top: T + N - re,
              behavior: oe
            });
            return;
          }
        }
        he.scrollTo({
          left: g,
          top: T,
          behavior: oe
        });
      }
    }
    function bt() {
      yt(), te(), Fe();
    }
    function gt() {
      Ie();
    }
    function Ie() {
      Bt(), Me();
    }
    function Bt() {
      f !== void 0 && window.clearTimeout(f), f = window.setTimeout(() => {
        H.value = !1;
      }, t.duration);
    }
    function Me() {
      j !== void 0 && window.clearTimeout(j), j = window.setTimeout(() => {
        $.value = !1;
      }, t.duration);
    }
    function yt() {
      j !== void 0 && window.clearTimeout(j), $.value = !0;
    }
    function te() {
      f !== void 0 && window.clearTimeout(f), H.value = !0;
    }
    function le(g) {
      const {
        onScroll: T
      } = t;
      T && T(g), we();
    }
    function we() {
      const {
        value: g
      } = q;
      g && (y.value = g.scrollTop, B.value = g.scrollLeft * (a != null && a.value ? -1 : 1));
    }
    function Br() {
      const {
        value: g
      } = ze;
      g && (v.value = g.offsetHeight, C.value = g.offsetWidth);
      const {
        value: T
      } = q;
      T && (E.value = T.offsetHeight, R.value = T.offsetWidth);
      const {
        value: N
      } = h, {
        value: Z
      } = x;
      N && (m.value = N.offsetWidth), Z && (c.value = Z.offsetHeight);
    }
    function je() {
      const {
        value: g
      } = q;
      g && (y.value = g.scrollTop, B.value = g.scrollLeft * (a != null && a.value ? -1 : 1), E.value = g.offsetHeight, R.value = g.offsetWidth, v.value = g.scrollHeight, C.value = g.scrollWidth);
      const {
        value: T
      } = h, {
        value: N
      } = x;
      T && (m.value = T.offsetWidth), N && (c.value = N.offsetHeight);
    }
    function Fe() {
      t.scrollable && (t.useUnifiedContainer ? je() : (Br(), we()));
    }
    function Ut(g) {
      var T;
      return !(!((T = o.value) === null || T === void 0) && T.contains(Ua(g)));
    }
    function yr(g) {
      g.preventDefault(), g.stopPropagation(), z = !0, Je("mousemove", window, Dt, !0), Je("mouseup", window, Xt, !0), w = B.value, I = a != null && a.value ? window.innerWidth - g.clientX : g.clientX;
    }
    function Dt(g) {
      if (!z) return;
      j !== void 0 && window.clearTimeout(j), f !== void 0 && window.clearTimeout(f);
      const {
        value: T
      } = R, {
        value: N
      } = C, {
        value: Z
      } = P;
      if (T === null || N === null) return;
      const he = (a != null && a.value ? window.innerWidth - g.clientX - I : g.clientX - I) * (N - T) / (T - Z), me = N - T;
      let re = w + he;
      re = Math.min(me, re), re = Math.max(re, 0);
      const {
        value: ve
      } = q;
      if (ve) {
        ve.scrollLeft = re * (a != null && a.value ? -1 : 1);
        const {
          internalOnUpdateScrollLeft: Be
        } = t;
        Be && Be(re);
      }
    }
    function Xt(g) {
      g.preventDefault(), g.stopPropagation(), Ee("mousemove", window, Dt, !0), Ee("mouseup", window, Xt, !0), z = !1, Fe(), Ut(g) && Ie();
    }
    function Dr(g) {
      g.preventDefault(), g.stopPropagation(), D = !0, Je("mousemove", window, At, !0), Je("mouseup", window, wt, !0), b = y.value, V = g.clientY;
    }
    function At(g) {
      if (!D) return;
      j !== void 0 && window.clearTimeout(j), f !== void 0 && window.clearTimeout(f);
      const {
        value: T
      } = E, {
        value: N
      } = v, {
        value: Z
      } = F;
      if (T === null || N === null) return;
      const he = (g.clientY - V) * (N - T) / (T - Z), me = N - T;
      let re = b + he;
      re = Math.min(me, re), re = Math.max(re, 0);
      const {
        value: ve
      } = q;
      ve && (ve.scrollTop = re);
    }
    function wt(g) {
      g.preventDefault(), g.stopPropagation(), Ee("mousemove", window, At, !0), Ee("mouseup", window, wt, !0), D = !1, Fe(), Ut(g) && Ie();
    }
    Ze(() => {
      const {
        value: g
      } = at, {
        value: T
      } = se, {
        value: N
      } = r, {
        value: Z
      } = h, {
        value: oe
      } = x;
      Z && (g ? Z.classList.remove(`${N}-scrollbar-rail--disabled`) : Z.classList.add(`${N}-scrollbar-rail--disabled`)), oe && (T ? oe.classList.remove(`${N}-scrollbar-rail--disabled`) : oe.classList.add(`${N}-scrollbar-rail--disabled`));
    }), vr(() => {
      t.container || Fe();
    }), cr(() => {
      j !== void 0 && window.clearTimeout(j), f !== void 0 && window.clearTimeout(f), Ee("mousemove", window, At, !0), Ee("mouseup", window, wt, !0);
    });
    const Yt = W(() => {
      const {
        common: {
          cubicBezierEaseInOut: g
        },
        self: {
          color: T,
          colorHover: N,
          height: Z,
          width: oe,
          borderRadius: he,
          railInsetHorizontalTop: me,
          railInsetHorizontalBottom: re,
          railInsetVerticalRight: ve,
          railInsetVerticalLeft: Be,
          railColor: qt
        }
      } = e.value;
      return {
        "--n-scrollbar-bezier": g,
        "--n-scrollbar-color": T,
        "--n-scrollbar-color-hover": N,
        "--n-scrollbar-border-radius": he,
        "--n-scrollbar-width": oe,
        "--n-scrollbar-height": Z,
        "--n-scrollbar-rail-inset-horizontal-top": me,
        "--n-scrollbar-rail-inset-horizontal-bottom": re,
        "--n-scrollbar-rail-inset-vertical-right": a != null && a.value ? dn(ve) : ve,
        "--n-scrollbar-rail-inset-vertical-left": a != null && a.value ? dn(Be) : Be,
        "--n-scrollbar-rail-color": qt
      };
    }), Oe = n ? nn("scrollbar", void 0, Yt, t) : void 0;
    return Object.assign(Object.assign({}, {
      scrollTo: He,
      scrollBy: mt,
      sync: Fe,
      syncUnifiedContainer: je,
      handleMouseEnterWrapper: bt,
      handleMouseLeaveWrapper: gt
    }), {
      mergedClsPrefix: r,
      rtlEnabled: a,
      containerScrollTop: y,
      wrapperRef: o,
      containerRef: s,
      contentRef: l,
      yRailRef: x,
      xRailRef: h,
      needYBar: se,
      needXBar: at,
      yBarSizePx: M,
      xBarSizePx: A,
      yBarTopPx: fe,
      xBarLeftPx: Ce,
      isShowXBar: Te,
      isShowYBar: Re,
      isIos: L,
      handleScroll: le,
      handleContentResize: ke,
      handleContainerResize: We,
      handleYScrollMouseDown: Dr,
      handleXScrollMouseDown: yr,
      cssVars: n ? void 0 : Yt,
      themeClass: Oe == null ? void 0 : Oe.themeClass,
      onRender: Oe == null ? void 0 : Oe.onRender
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
      yPlacement: s,
      xPlacement: l,
      xScrollable: x
    } = this;
    if (!this.scrollable) return (t = r.default) === null || t === void 0 ? void 0 : t.call(r);
    const h = this.trigger === "none", v = (R, c) => d("div", {
      ref: "yRailRef",
      class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--vertical`, `${n}-scrollbar-rail--vertical--${s}`, R],
      "data-scrollbar-rail": !0,
      style: [c || "", this.verticalRailStyle],
      "aria-hidden": !0
    }, d(h ? pn : sr, h ? null : {
      name: "fade-in-transition"
    }, {
      default: () => this.needYBar && this.isShowYBar && !this.isIos ? d("div", {
        class: `${n}-scrollbar-rail__scrollbar`,
        style: {
          height: this.yBarSizePx,
          top: this.yBarTopPx
        },
        onMousedown: this.handleYScrollMouseDown
      }) : null
    })), C = () => {
      var R, c;
      return (R = this.onRender) === null || R === void 0 || R.call(this), d("div", Na(this.$attrs, {
        role: "none",
        ref: "wrapperRef",
        class: [`${n}-scrollbar`, this.themeClass, a && `${n}-scrollbar--rtl`],
        style: this.cssVars,
        onMouseenter: i ? void 0 : this.handleMouseEnterWrapper,
        onMouseleave: i ? void 0 : this.handleMouseLeaveWrapper
      }), [this.container ? (c = r.default) === null || c === void 0 ? void 0 : c.call(r) : d("div", {
        role: "none",
        ref: "containerRef",
        class: [`${n}-scrollbar-container`, this.containerClass],
        style: this.containerStyle,
        onScroll: this.handleScroll,
        onWheel: this.onWheel
      }, d(Or, {
        onResize: this.handleContentResize
      }, {
        default: () => d("div", {
          ref: "contentRef",
          role: "none",
          style: [{
            width: this.xScrollable ? "fit-content" : null
          }, this.contentStyle],
          class: [`${n}-scrollbar-content`, this.contentClass]
        }, r)
      })), o ? null : v(void 0, void 0), x && d("div", {
        ref: "xRailRef",
        class: [`${n}-scrollbar-rail`, `${n}-scrollbar-rail--horizontal`, `${n}-scrollbar-rail--horizontal--${l}`],
        style: this.horizontalRailStyle,
        "data-scrollbar-rail": !0,
        "aria-hidden": !0
      }, d(h ? pn : sr, h ? null : {
        name: "fade-in-transition"
      }, {
        default: () => this.needXBar && this.isShowXBar && !this.isIos ? d("div", {
          class: `${n}-scrollbar-rail__scrollbar`,
          style: {
            width: this.xBarSizePx,
            right: a ? this.xBarLeftPx : void 0,
            left: a ? void 0 : this.xBarLeftPx
          },
          onMousedown: this.handleXScrollMouseDown
        }) : null
      }))]);
    }, E = this.container ? C() : d(Or, {
      onResize: this.handleContainerResize
    }, {
      default: C
    });
    return o ? d(Vr, null, E, v(this.themeClass, this.cssVars)) : E;
  }
}), Qx = K("base-wave", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
`), ef = xe({
  name: "BaseWave",
  props: {
    clsPrefix: {
      type: String,
      required: !0
    }
  },
  setup(t) {
    Gt("-base-wave", Qx, xt(t, "clsPrefix"));
    const r = U(null), n = U(!1);
    let i = null;
    return cr(() => {
      i !== null && window.clearTimeout(i);
    }), {
      active: n,
      selfRef: r,
      play() {
        i !== null && (window.clearTimeout(i), n.value = !1, i = null), Tr(() => {
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
    return d("div", {
      ref: "selfRef",
      "aria-hidden": !0,
      class: [`${t}-base-wave`, this.active && `${t}-base-wave--active`]
    });
  }
}), tf = K("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [_(">", [S("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [_("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), _("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), S("placeholder", `
 display: flex;
 `), S("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [hr({
  originalTransform: "translateX(-50%) translateY(-50%)",
  left: "50%",
  top: "50%"
})])])]), Nr = xe({
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
    return Gt("-base-clear", tf, xt(t, "clsPrefix")), {
      handleMouseDown(r) {
        r.preventDefault();
      }
    };
  },
  render() {
    const {
      clsPrefix: t
    } = this;
    return d("div", {
      class: `${t}-base-clear`
    }, d(on, null, {
      default: () => {
        var r, n;
        return this.show ? d("div", {
          key: "dismiss",
          class: `${t}-base-clear__clear`,
          onClick: this.onClear,
          onMousedown: this.handleMouseDown,
          "data-clear": !0
        }, Rt(this.$slots.icon, () => [d(fr, {
          clsPrefix: t
        }, {
          default: () => d(kx, null)
        })])) : d("div", {
          key: "icon",
          class: `${t}-base-clear__placeholder`
        }, (n = (r = this.$slots).placeholder) === null || n === void 0 ? void 0 : n.call(r));
      }
    }));
  }
}), rf = xe({
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
      return d(Li, {
        clsPrefix: n,
        class: `${n}-base-suffix`,
        strokeWidth: 24,
        scale: 0.85,
        show: t.loading
      }, {
        default: () => t.showArrow ? d(Nr, {
          clsPrefix: n,
          show: t.showClear,
          onClear: t.onClear
        }, {
          placeholder: () => d(fr, {
            clsPrefix: n,
            class: `${n}-base-suffix__arrow`
          }, {
            default: () => Rt(r.default, () => [d(Hx, null)])
          })
        }) : null
      });
    };
  }
}), {
  cubicBezierEaseInOut: _e
} = Vt;
function nf({
  duration: t = ".2s",
  delay: r = ".1s"
} = {}) {
  return [_("&.fade-in-width-expand-transition-leave-from, &.fade-in-width-expand-transition-enter-to", {
    opacity: 1
  }), _("&.fade-in-width-expand-transition-leave-to, &.fade-in-width-expand-transition-enter-from", `
 opacity: 0!important;
 margin-left: 0!important;
 margin-right: 0!important;
 `), _("&.fade-in-width-expand-transition-leave-active", `
 overflow: hidden;
 transition:
 opacity ${t} ${_e},
 max-width ${t} ${_e} ${r},
 margin-left ${t} ${_e} ${r},
 margin-right ${t} ${_e} ${r};
 `), _("&.fade-in-width-expand-transition-enter-active", `
 overflow: hidden;
 transition:
 opacity ${t} ${_e} ${r},
 max-width ${t} ${_e},
 margin-left ${t} ${_e},
 margin-right ${t} ${_e};
 `)];
}
const af = Cr && "chrome" in window;
Cr && navigator.userAgent.includes("Firefox");
const Gi = Cr && navigator.userAgent.includes("Safari") && !af, of = {
  paddingTiny: "0 8px",
  paddingSmall: "0 10px",
  paddingMedium: "0 12px",
  paddingLarge: "0 14px",
  clearSize: "16px"
};
function lf(t) {
  const {
    textColor2: r,
    textColor3: n,
    textColorDisabled: i,
    primaryColor: a,
    primaryColorHover: o,
    inputColor: s,
    inputColorDisabled: l,
    borderColor: x,
    warningColor: h,
    warningColorHover: v,
    errorColor: C,
    errorColorHover: E,
    borderRadius: R,
    lineHeight: c,
    fontSizeTiny: m,
    fontSizeSmall: y,
    fontSizeMedium: B,
    fontSizeLarge: $,
    heightTiny: H,
    heightSmall: D,
    heightMedium: z,
    heightLarge: j,
    actionColor: f,
    clearColor: b,
    clearColorHover: w,
    clearColorPressed: I,
    placeholderColor: V,
    placeholderColorDisabled: L,
    iconColor: e,
    iconColorDisabled: F,
    iconColorHover: M,
    iconColorPressed: P
  } = t;
  return Object.assign(Object.assign({}, of), {
    countTextColorDisabled: i,
    countTextColor: n,
    heightTiny: H,
    heightSmall: D,
    heightMedium: z,
    heightLarge: j,
    fontSizeTiny: m,
    fontSizeSmall: y,
    fontSizeMedium: B,
    fontSizeLarge: $,
    lineHeight: c,
    lineHeightTextarea: c,
    borderRadius: R,
    iconSize: "16px",
    groupLabelColor: f,
    groupLabelTextColor: r,
    textColor: r,
    textColorDisabled: i,
    textDecorationColor: r,
    caretColor: a,
    placeholderColor: V,
    placeholderColorDisabled: L,
    color: s,
    colorDisabled: l,
    colorFocus: s,
    groupLabelBorder: `1px solid ${x}`,
    border: `1px solid ${x}`,
    borderHover: `1px solid ${o}`,
    borderDisabled: `1px solid ${x}`,
    borderFocus: `1px solid ${o}`,
    boxShadowFocus: `0 0 0 2px ${Ke(a, {
      alpha: 0.2
    })}`,
    loadingColor: a,
    // warning
    loadingColorWarning: h,
    borderWarning: `1px solid ${h}`,
    borderHoverWarning: `1px solid ${v}`,
    colorFocusWarning: s,
    borderFocusWarning: `1px solid ${v}`,
    boxShadowFocusWarning: `0 0 0 2px ${Ke(h, {
      alpha: 0.2
    })}`,
    caretColorWarning: h,
    // error
    loadingColorError: C,
    borderError: `1px solid ${C}`,
    borderHoverError: `1px solid ${E}`,
    colorFocusError: s,
    borderFocusError: `1px solid ${E}`,
    boxShadowFocusError: `0 0 0 2px ${Ke(C, {
      alpha: 0.2
    })}`,
    caretColorError: C,
    clearColor: b,
    clearColorHover: w,
    clearColorPressed: I,
    iconColor: e,
    iconColorDisabled: F,
    iconColorHover: M,
    iconColorPressed: P,
    suffixTextColor: r
  });
}
const sf = {
  name: "Input",
  common: ln,
  self: lf
}, Ui = "n-input";
function uf(t) {
  let r = 0;
  for (const n of t)
    r++;
  return r;
}
function ir(t) {
  return t === "" || t == null;
}
function xf(t) {
  const r = U(null);
  function n() {
    const {
      value: o
    } = t;
    if (!(o != null && o.focus)) {
      a();
      return;
    }
    const {
      selectionStart: s,
      selectionEnd: l,
      value: x
    } = o;
    if (s == null || l == null) {
      a();
      return;
    }
    r.value = {
      start: s,
      end: l,
      beforeText: x.slice(0, s),
      afterText: x.slice(l)
    };
  }
  function i() {
    var o;
    const {
      value: s
    } = r, {
      value: l
    } = t;
    if (!s || !l)
      return;
    const {
      value: x
    } = l, {
      start: h,
      beforeText: v,
      afterText: C
    } = s;
    let E = x.length;
    if (x.endsWith(C))
      E = x.length - C.length;
    else if (x.startsWith(v))
      E = v.length;
    else {
      const R = v[h - 1], c = x.indexOf(R, h - 1);
      c !== -1 && (E = c + 1);
    }
    (o = l.setSelectionRange) === null || o === void 0 || o.call(l, E, E);
  }
  function a() {
    r.value = null;
  }
  return _t(t, a), {
    recordCursor: n,
    restoreCursor: i
  };
}
const Jn = xe({
  name: "InputWordCount",
  setup(t, {
    slots: r
  }) {
    const {
      mergedValueRef: n,
      maxlengthRef: i,
      mergedClsPrefixRef: a,
      countGraphemesRef: o
    } = be(Ui), s = W(() => {
      const {
        value: l
      } = n;
      return l === null || Array.isArray(l) ? 0 : (o.value || uf)(l);
    });
    return () => {
      const {
        value: l
      } = i, {
        value: x
      } = n;
      return d("span", {
        class: `${a.value}-input-word-count`
      }, ro(r.default, {
        value: x === null || Array.isArray(x) ? "" : x
      }, () => [l === void 0 ? s.value : `${s.value} / ${l}`]));
    };
  }
}), ff = K("input", `
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
  S("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `),
  S("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
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
  S("input-el, textarea-el", `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [_("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), _("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), _("&:-webkit-autofill ~", [S("placeholder", "display: none;")])]),
  J("round", [Ue("textarea", "border-radius: calc(var(--n-height) / 2);")]),
  S("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [_("span", `
 width: 100%;
 display: inline-block;
 `)]),
  J("textarea", [S("placeholder", "overflow: visible;")]),
  Ue("autosize", "width: 100%;"),
  J("autosize", [S("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)]),
  // input
  K("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `),
  S("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `),
  S("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [_("&[type=password]::-ms-reveal", "display: none;"), _("+", [S("placeholder", `
 display: flex;
 align-items: center; 
 `)])]),
  Ue("textarea", [S("placeholder", "white-space: nowrap;")]),
  S("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `),
  // textarea
  J("textarea", "width: 100%;", [K("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), J("resizable", [K("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), S("textarea-el, textarea-mirror, placeholder", `
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
 `), S("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]),
  // pair
  J("pair", [S("input-el, placeholder", "text-align: center;"), S("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [K("icon", `
 color: var(--n-icon-color);
 `), K("base-icon", `
 color: var(--n-icon-color);
 `)])]),
  J("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [S("border", "border: var(--n-border-disabled);"), S("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), S("placeholder", "color: var(--n-placeholder-color-disabled);"), S("separator", "color: var(--n-text-color-disabled);", [K("icon", `
 color: var(--n-icon-color-disabled);
 `), K("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), K("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), S("suffix, prefix", "color: var(--n-text-color-disabled);", [K("icon", `
 color: var(--n-icon-color-disabled);
 `), K("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]),
  Ue("disabled", [S("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [_("&:hover", `
 color: var(--n-icon-color-hover);
 `), _("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), _("&:hover", [S("state-border", "border: var(--n-border-hover);")]), J("focus", "background-color: var(--n-color-focus);", [S("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]),
  S("border, state-border", `
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
  S("state-border", `
 border-color: #0000;
 z-index: 1;
 `),
  S("prefix", "margin-right: 4px;"),
  S("suffix", `
 margin-left: 4px;
 `),
  S("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [K("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), K("base-clear", `
 font-size: var(--n-icon-size);
 `, [S("placeholder", [K("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), _(">", [K("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), K("base-icon", `
 font-size: var(--n-icon-size);
 `)]),
  K("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `),
  ["warning", "error"].map((t) => J(`${t}-status`, [Ue("disabled", [K("base-loading", `
 color: var(--n-loading-color-${t})
 `), S("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${t});
 `), S("state-border", `
 border: var(--n-border-${t});
 `), _("&:hover", [S("state-border", `
 border: var(--n-border-hover-${t});
 `)]), _("&:focus", `
 background-color: var(--n-color-focus-${t});
 `, [S("state-border", `
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)]), J("focus", `
 background-color: var(--n-color-focus-${t});
 `, [S("state-border", `
 box-shadow: var(--n-box-shadow-focus-${t});
 border: var(--n-border-focus-${t});
 `)])])]))
]), hf = K("input", [J("disabled", [S("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]), vf = Object.assign(Object.assign({}, it.props), {
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
}), cf = xe({
  name: "Input",
  props: vf,
  setup(t) {
    process.env.NODE_ENV !== "production" && Ze(() => {
      t.showPasswordToggle && ti("input", '`show-password-toggle` is deprecated, please use `showPasswordOn="click"` instead');
    });
    const {
      mergedClsPrefixRef: r,
      mergedBorderedRef: n,
      inlineThemeDisabled: i,
      mergedRtlRef: a
    } = rn(t), o = it("Input", "-input", ff, sf, t, r);
    Gi && Gt("-input-safari", hf, r);
    const s = U(null), l = U(null), x = U(null), h = U(null), v = U(null), C = U(null), E = U(null), R = xf(E), c = U(null), {
      localeRef: m
    } = zx("Input"), y = U(t.defaultValue), B = xt(t, "value"), $ = zo(B, y), H = pi(t), {
      mergedSizeRef: D,
      mergedDisabledRef: z,
      mergedStatusRef: j
    } = H, f = U(!1), b = U(!1), w = U(!1), I = U(!1);
    let V = null;
    const L = W(() => {
      const {
        placeholder: u,
        pair: p
      } = t;
      return p ? Array.isArray(u) ? u : u === void 0 ? ["", ""] : [u, u] : u === void 0 ? [m.value.placeholder] : [u];
    }), e = W(() => {
      const {
        value: u
      } = w, {
        value: p
      } = $, {
        value: k
      } = L;
      return !u && (ir(p) || Array.isArray(p) && ir(p[0])) && k[0];
    }), F = W(() => {
      const {
        value: u
      } = w, {
        value: p
      } = $, {
        value: k
      } = L;
      return !u && k[1] && (ir(p) || Array.isArray(p) && ir(p[1]));
    }), M = kt(() => t.internalForceFocus || f.value), P = kt(() => {
      if (z.value || t.readonly || !t.clearable || !M.value && !b.value)
        return !1;
      const {
        value: u
      } = $, {
        value: p
      } = M;
      return t.pair ? !!(Array.isArray(u) && (u[0] || u[1])) && (b.value || p) : !!u && (b.value || p);
    }), A = W(() => {
      const {
        showPasswordOn: u
      } = t;
      if (u)
        return u;
      if (t.showPasswordToggle) return "click";
    }), G = U(!1), fe = W(() => {
      const {
        textDecoration: u
      } = t;
      return u ? Array.isArray(u) ? u.map((p) => ({
        textDecoration: p
      })) : [{
        textDecoration: u
      }] : ["", ""];
    }), ae = U(void 0), Ce = () => {
      var u, p;
      if (t.type === "textarea") {
        const {
          autosize: k
        } = t;
        if (k && (ae.value = (p = (u = c.value) === null || u === void 0 ? void 0 : u.$el) === null || p === void 0 ? void 0 : p.offsetWidth), !l.value || typeof k == "boolean") return;
        const {
          paddingTop: ee,
          paddingBottom: ie,
          lineHeight: Q
        } = window.getComputedStyle(l.value), Ne = Number(ee.slice(0, -2)), Le = Number(ie.slice(0, -2)), Ve = Number(Q.slice(0, -2)), {
          value: Ft
        } = x;
        if (!Ft) return;
        if (k.minRows) {
          const Et = Math.max(k.minRows, 1), Ar = `${Ne + Le + Ve * Et}px`;
          Ft.style.minHeight = Ar;
        }
        if (k.maxRows) {
          const Et = `${Ne + Le + Ve * k.maxRows}px`;
          Ft.style.maxHeight = Et;
        }
      }
    }, se = W(() => {
      const {
        maxlength: u
      } = t;
      return u === void 0 ? void 0 : Number(u);
    });
    vr(() => {
      const {
        value: u
      } = $;
      Array.isArray(u) || ve(u);
    });
    const at = Zn().proxy;
    function Te(u, p) {
      const {
        onUpdateValue: k,
        "onUpdate:value": ee,
        onInput: ie
      } = t, {
        nTriggerFormInput: Q
      } = H;
      k && ue(k, u, p), ee && ue(ee, u, p), ie && ue(ie, u, p), y.value = u, Q();
    }
    function Re(u, p) {
      const {
        onChange: k
      } = t, {
        nTriggerFormChange: ee
      } = H;
      k && ue(k, u, p), y.value = u, ee();
    }
    function q(u) {
      const {
        onBlur: p
      } = t, {
        nTriggerFormBlur: k
      } = H;
      p && ue(p, u), k();
    }
    function ze(u) {
      const {
        onFocus: p
      } = t, {
        nTriggerFormFocus: k
      } = H;
      p && ue(p, u), k();
    }
    function He(u) {
      const {
        onClear: p
      } = t;
      p && ue(p, u);
    }
    function Y(u) {
      const {
        onInputBlur: p
      } = t;
      p && ue(p, u);
    }
    function ke(u) {
      const {
        onInputFocus: p
      } = t;
      p && ue(p, u);
    }
    function We() {
      const {
        onDeactivate: u
      } = t;
      u && ue(u);
    }
    function mt() {
      const {
        onActivate: u
      } = t;
      u && ue(u);
    }
    function ge(u) {
      const {
        onClick: p
      } = t;
      p && ue(p, u);
    }
    function bt(u) {
      const {
        onWrapperFocus: p
      } = t;
      p && ue(p, u);
    }
    function gt(u) {
      const {
        onWrapperBlur: p
      } = t;
      p && ue(p, u);
    }
    function Ie() {
      w.value = !0;
    }
    function Bt(u) {
      w.value = !1, u.target === C.value ? Me(u, 1) : Me(u, 0);
    }
    function Me(u, p = 0, k = "input") {
      const ee = u.target.value;
      if (ve(ee), u instanceof InputEvent && !u.isComposing && (w.value = !1), t.type === "textarea") {
        const {
          value: Q
        } = c;
        Q && Q.syncUnifiedContainer();
      }
      if (V = ee, w.value) return;
      R.recordCursor();
      const ie = yt(ee);
      if (ie)
        if (!t.pair)
          k === "input" ? Te(ee, {
            source: p
          }) : Re(ee, {
            source: p
          });
        else {
          let {
            value: Q
          } = $;
          Array.isArray(Q) ? Q = [Q[0], Q[1]] : Q = ["", ""], Q[p] = ee, k === "input" ? Te(Q, {
            source: p
          }) : Re(Q, {
            source: p
          });
        }
      at.$forceUpdate(), ie || Tr(R.restoreCursor);
    }
    function yt(u) {
      const {
        countGraphemes: p,
        maxlength: k,
        minlength: ee
      } = t;
      if (p) {
        let Q;
        if (k !== void 0 && (Q === void 0 && (Q = p(u)), Q > Number(k)) || ee !== void 0 && (Q === void 0 && (Q = p(u)), Q < Number(k)))
          return !1;
      }
      const {
        allowInput: ie
      } = t;
      return typeof ie == "function" ? ie(u) : !0;
    }
    function te(u) {
      Y(u), u.relatedTarget === s.value && We(), u.relatedTarget !== null && (u.relatedTarget === v.value || u.relatedTarget === C.value || u.relatedTarget === l.value) || (I.value = !1), je(u, "blur"), E.value = null;
    }
    function le(u, p) {
      ke(u), f.value = !0, I.value = !0, mt(), je(u, "focus"), p === 0 ? E.value = v.value : p === 1 ? E.value = C.value : p === 2 && (E.value = l.value);
    }
    function we(u) {
      t.passivelyActivated && (gt(u), je(u, "blur"));
    }
    function Br(u) {
      t.passivelyActivated && (f.value = !0, bt(u), je(u, "focus"));
    }
    function je(u, p) {
      u.relatedTarget !== null && (u.relatedTarget === v.value || u.relatedTarget === C.value || u.relatedTarget === l.value || u.relatedTarget === s.value) || (p === "focus" ? (ze(u), f.value = !0) : p === "blur" && (q(u), f.value = !1));
    }
    function Fe(u, p) {
      Me(u, p, "change");
    }
    function Ut(u) {
      ge(u);
    }
    function yr(u) {
      He(u), Dt();
    }
    function Dt() {
      t.pair ? (Te(["", ""], {
        source: "clear"
      }), Re(["", ""], {
        source: "clear"
      })) : (Te("", {
        source: "clear"
      }), Re("", {
        source: "clear"
      }));
    }
    function Xt(u) {
      const {
        onMousedown: p
      } = t;
      p && p(u);
      const {
        tagName: k
      } = u.target;
      if (k !== "INPUT" && k !== "TEXTAREA") {
        if (t.resizable) {
          const {
            value: ee
          } = s;
          if (ee) {
            const {
              left: ie,
              top: Q,
              width: Ne,
              height: Le
            } = ee.getBoundingClientRect(), Ve = 14;
            if (ie + Ne - Ve < u.clientX && u.clientX < ie + Ne && Q + Le - Ve < u.clientY && u.clientY < Q + Le)
              return;
          }
        }
        u.preventDefault(), f.value || N();
      }
    }
    function Dr() {
      var u;
      b.value = !0, t.type === "textarea" && ((u = c.value) === null || u === void 0 || u.handleMouseEnterWrapper());
    }
    function At() {
      var u;
      b.value = !1, t.type === "textarea" && ((u = c.value) === null || u === void 0 || u.handleMouseLeaveWrapper());
    }
    function wt() {
      z.value || A.value === "click" && (G.value = !G.value);
    }
    function Yt(u) {
      if (z.value) return;
      u.preventDefault();
      const p = (ee) => {
        ee.preventDefault(), Ee("mouseup", document, p);
      };
      if (Je("mouseup", document, p), A.value !== "mousedown") return;
      G.value = !0;
      const k = () => {
        G.value = !1, Ee("mouseup", document, k);
      };
      Je("mouseup", document, k);
    }
    function Oe(u) {
      t.onKeyup && ue(t.onKeyup, u);
    }
    function sn(u) {
      switch (t.onKeydown && ue(t.onKeydown, u), u.key) {
        case "Escape":
          T();
          break;
        case "Enter":
          g(u);
          break;
      }
    }
    function g(u) {
      var p, k;
      if (t.passivelyActivated) {
        const {
          value: ee
        } = I;
        if (ee) {
          t.internalDeactivateOnEnter && T();
          return;
        }
        u.preventDefault(), t.type === "textarea" ? (p = l.value) === null || p === void 0 || p.focus() : (k = v.value) === null || k === void 0 || k.focus();
      }
    }
    function T() {
      t.passivelyActivated && (I.value = !1, Tr(() => {
        var u;
        (u = s.value) === null || u === void 0 || u.focus();
      }));
    }
    function N() {
      var u, p, k;
      z.value || (t.passivelyActivated ? (u = s.value) === null || u === void 0 || u.focus() : ((p = l.value) === null || p === void 0 || p.focus(), (k = v.value) === null || k === void 0 || k.focus()));
    }
    function Z() {
      var u;
      !((u = s.value) === null || u === void 0) && u.contains(document.activeElement) && document.activeElement.blur();
    }
    function oe() {
      var u, p;
      (u = l.value) === null || u === void 0 || u.select(), (p = v.value) === null || p === void 0 || p.select();
    }
    function he() {
      z.value || (l.value ? l.value.focus() : v.value && v.value.focus());
    }
    function me() {
      const {
        value: u
      } = s;
      u != null && u.contains(document.activeElement) && u !== document.activeElement && T();
    }
    function re(u) {
      if (t.type === "textarea") {
        const {
          value: p
        } = l;
        p == null || p.scrollTo(u);
      } else {
        const {
          value: p
        } = v;
        p == null || p.scrollTo(u);
      }
    }
    function ve(u) {
      const {
        type: p,
        pair: k,
        autosize: ee
      } = t;
      if (!k && ee)
        if (p === "textarea") {
          const {
            value: ie
          } = x;
          ie && (ie.textContent = `${u ?? ""}\r
`);
        } else {
          const {
            value: ie
          } = h;
          ie && (u ? ie.textContent = u : ie.innerHTML = "&nbsp;");
        }
    }
    function Be() {
      Ce();
    }
    const qt = U({
      top: "0"
    });
    function Yi(u) {
      var p;
      const {
        scrollTop: k
      } = u.target;
      qt.value.top = `${-k}px`, (p = c.value) === null || p === void 0 || p.syncUnifiedContainer();
    }
    let Kt = null;
    Ze(() => {
      const {
        autosize: u,
        type: p
      } = t;
      u && p === "textarea" ? Kt = _t($, (k) => {
        !Array.isArray(k) && k !== V && ve(k);
      }) : Kt == null || Kt();
    });
    let Jt = null;
    Ze(() => {
      t.type === "textarea" ? Jt = _t($, (u) => {
        var p;
        !Array.isArray(u) && u !== V && ((p = c.value) === null || p === void 0 || p.syncUnifiedContainer());
      }) : Jt == null || Jt();
    }), Ur(Ui, {
      mergedValueRef: $,
      maxlengthRef: se,
      mergedClsPrefixRef: r,
      countGraphemesRef: xt(t, "countGraphemes")
    });
    const qi = {
      wrapperElRef: s,
      inputElRef: v,
      textareaElRef: l,
      isCompositing: w,
      clear: Dt,
      focus: N,
      blur: Z,
      select: oe,
      deactivate: me,
      activate: he,
      scrollTo: re
    }, Ki = an("Input", a, r), un = W(() => {
      const {
        value: u
      } = D, {
        common: {
          cubicBezierEaseInOut: p
        },
        self: {
          color: k,
          borderRadius: ee,
          textColor: ie,
          caretColor: Q,
          caretColorError: Ne,
          caretColorWarning: Le,
          textDecorationColor: Ve,
          border: Ft,
          borderDisabled: Et,
          borderHover: Ar,
          borderFocus: Ji,
          placeholderColor: Zi,
          placeholderColorDisabled: Qi,
          lineHeightTextarea: ea,
          colorDisabled: ta,
          colorFocus: ra,
          textColorDisabled: na,
          boxShadowFocus: ia,
          iconSize: aa,
          colorFocusWarning: oa,
          boxShadowFocusWarning: la,
          borderWarning: sa,
          borderFocusWarning: ua,
          borderHoverWarning: xa,
          colorFocusError: fa,
          boxShadowFocusError: ha,
          borderError: va,
          borderFocusError: ca,
          borderHoverError: pa,
          clearSize: Ca,
          clearColor: da,
          clearColorHover: ma,
          clearColorPressed: ba,
          iconColor: ga,
          iconColorDisabled: Ba,
          suffixTextColor: ya,
          countTextColor: Da,
          countTextColorDisabled: Aa,
          iconColorHover: wa,
          iconColorPressed: Fa,
          loadingColor: Ea,
          loadingColorError: Sa,
          loadingColorWarning: Pa,
          [X("padding", u)]: $a,
          [X("fontSize", u)]: Ta,
          [X("height", u)]: Ra
        }
      } = o.value, {
        left: za,
        right: Ma
      } = ei($a);
      return {
        "--n-bezier": p,
        "--n-count-text-color": Da,
        "--n-count-text-color-disabled": Aa,
        "--n-color": k,
        "--n-font-size": Ta,
        "--n-border-radius": ee,
        "--n-height": Ra,
        "--n-padding-left": za,
        "--n-padding-right": Ma,
        "--n-text-color": ie,
        "--n-caret-color": Q,
        "--n-text-decoration-color": Ve,
        "--n-border": Ft,
        "--n-border-disabled": Et,
        "--n-border-hover": Ar,
        "--n-border-focus": Ji,
        "--n-placeholder-color": Zi,
        "--n-placeholder-color-disabled": Qi,
        "--n-icon-size": aa,
        "--n-line-height-textarea": ea,
        "--n-color-disabled": ta,
        "--n-color-focus": ra,
        "--n-text-color-disabled": na,
        "--n-box-shadow-focus": ia,
        "--n-loading-color": Ea,
        // form warning
        "--n-caret-color-warning": Le,
        "--n-color-focus-warning": oa,
        "--n-box-shadow-focus-warning": la,
        "--n-border-warning": sa,
        "--n-border-focus-warning": ua,
        "--n-border-hover-warning": xa,
        "--n-loading-color-warning": Pa,
        // form error
        "--n-caret-color-error": Ne,
        "--n-color-focus-error": fa,
        "--n-box-shadow-focus-error": ha,
        "--n-border-error": va,
        "--n-border-focus-error": ca,
        "--n-border-hover-error": pa,
        "--n-loading-color-error": Sa,
        // clear-button
        "--n-clear-color": da,
        "--n-clear-size": Ca,
        "--n-clear-color-hover": ma,
        "--n-clear-color-pressed": ba,
        "--n-icon-color": ga,
        "--n-icon-color-hover": wa,
        "--n-icon-color-pressed": Fa,
        "--n-icon-color-disabled": Ba,
        "--n-suffix-text-color": ya
      };
    }), ot = i ? nn("input", W(() => {
      const {
        value: u
      } = D;
      return u[0];
    }), un, t) : void 0;
    return Object.assign(Object.assign({}, qi), {
      // DOM ref
      wrapperElRef: s,
      inputElRef: v,
      inputMirrorElRef: h,
      inputEl2Ref: C,
      textareaElRef: l,
      textareaMirrorElRef: x,
      textareaScrollbarInstRef: c,
      // value
      rtlEnabled: Ki,
      uncontrolledValue: y,
      mergedValue: $,
      passwordVisible: G,
      mergedPlaceholder: L,
      showPlaceholder1: e,
      showPlaceholder2: F,
      mergedFocus: M,
      isComposing: w,
      activated: I,
      showClearButton: P,
      mergedSize: D,
      mergedDisabled: z,
      textDecorationStyle: fe,
      mergedClsPrefix: r,
      mergedBordered: n,
      mergedShowPasswordOn: A,
      placeholderStyle: qt,
      mergedStatus: j,
      textAreaScrollContainerWidth: ae,
      // methods
      handleTextAreaScroll: Yi,
      handleCompositionStart: Ie,
      handleCompositionEnd: Bt,
      handleInput: Me,
      handleInputBlur: te,
      handleInputFocus: le,
      handleWrapperBlur: we,
      handleWrapperFocus: Br,
      handleMouseEnter: Dr,
      handleMouseLeave: At,
      handleMouseDown: Xt,
      handleChange: Fe,
      handleClick: Ut,
      handleClear: yr,
      handlePasswordToggleClick: wt,
      handlePasswordToggleMousedown: Yt,
      handleWrapperKeydown: sn,
      handleWrapperKeyup: Oe,
      handleTextAreaMirrorResize: Be,
      getTextareaScrollContainer: () => l.value,
      mergedTheme: o,
      cssVars: i ? void 0 : un,
      themeClass: ot == null ? void 0 : ot.themeClass,
      onRender: ot == null ? void 0 : ot.onRender
    });
  },
  render() {
    var t, r;
    const {
      mergedClsPrefix: n,
      mergedStatus: i,
      themeClass: a,
      type: o,
      countGraphemes: s,
      onRender: l
    } = this, x = this.$slots;
    return l == null || l(), d("div", {
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
    }, d("div", {
      class: `${n}-input-wrapper`
    }, lt(x.prefix, (h) => h && d("div", {
      class: `${n}-input__prefix`
    }, h)), o === "textarea" ? d(Zx, {
      ref: "textareaScrollbarInstRef",
      class: `${n}-input__textarea`,
      container: this.getTextareaScrollContainer,
      triggerDisplayManually: !0,
      useUnifiedContainer: !0,
      internalHoistYRail: !0
    }, {
      default: () => {
        var h, v;
        const {
          textAreaScrollContainerWidth: C
        } = this, E = {
          width: this.autosize && C && `${C}px`
        };
        return d(Vr, null, d("textarea", Object.assign({}, this.inputProps, {
          ref: "textareaElRef",
          class: [`${n}-input__textarea-el`, (h = this.inputProps) === null || h === void 0 ? void 0 : h.class],
          autofocus: this.autofocus,
          rows: Number(this.rows),
          placeholder: this.placeholder,
          value: this.mergedValue,
          disabled: this.mergedDisabled,
          maxlength: s ? void 0 : this.maxlength,
          minlength: s ? void 0 : this.minlength,
          readonly: this.readonly,
          tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
          style: [this.textDecorationStyle[0], (v = this.inputProps) === null || v === void 0 ? void 0 : v.style, E],
          onBlur: this.handleInputBlur,
          onFocus: (R) => {
            this.handleInputFocus(R, 2);
          },
          onInput: this.handleInput,
          onChange: this.handleChange,
          onScroll: this.handleTextAreaScroll
        })), this.showPlaceholder1 ? d("div", {
          class: `${n}-input__placeholder`,
          style: [this.placeholderStyle, E],
          key: "placeholder"
        }, this.mergedPlaceholder[0]) : null, this.autosize ? d(Or, {
          onResize: this.handleTextAreaMirrorResize
        }, {
          default: () => d("div", {
            ref: "textareaMirrorElRef",
            class: `${n}-input__textarea-mirror`,
            key: "mirror"
          })
        }) : null);
      }
    }) : d("div", {
      class: `${n}-input__input`
    }, d("input", Object.assign({
      type: o === "password" && this.mergedShowPasswordOn && this.passwordVisible ? "text" : o
    }, this.inputProps, {
      ref: "inputElRef",
      class: [`${n}-input__input-el`, (t = this.inputProps) === null || t === void 0 ? void 0 : t.class],
      style: [this.textDecorationStyle[0], (r = this.inputProps) === null || r === void 0 ? void 0 : r.style],
      tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
      placeholder: this.mergedPlaceholder[0],
      disabled: this.mergedDisabled,
      maxlength: s ? void 0 : this.maxlength,
      minlength: s ? void 0 : this.minlength,
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
    })), this.showPlaceholder1 ? d("div", {
      class: `${n}-input__placeholder`
    }, d("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? d("div", {
      class: `${n}-input__input-mirror`,
      key: "mirror",
      ref: "inputMirrorElRef"
    }, " ") : null), !this.pair && lt(x.suffix, (h) => h || this.clearable || this.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? d("div", {
      class: `${n}-input__suffix`
    }, [lt(x["clear-icon-placeholder"], (v) => (this.clearable || v) && d(Nr, {
      clsPrefix: n,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      placeholder: () => v,
      icon: () => {
        var C, E;
        return (E = (C = this.$slots)["clear-icon"]) === null || E === void 0 ? void 0 : E.call(C);
      }
    })), this.internalLoadingBeforeSuffix ? null : h, this.loading !== void 0 ? d(rf, {
      clsPrefix: n,
      loading: this.loading,
      showArrow: !1,
      showClear: !1,
      style: this.cssVars
    }) : null, this.internalLoadingBeforeSuffix ? h : null, this.showCount && this.type !== "textarea" ? d(Jn, null, {
      default: (v) => {
        var C;
        return (C = x.count) === null || C === void 0 ? void 0 : C.call(x, v);
      }
    }) : null, this.mergedShowPasswordOn && this.type === "password" ? d("div", {
      class: `${n}-input__eye`,
      onMousedown: this.handlePasswordToggleMousedown,
      onClick: this.handlePasswordToggleClick
    }, this.passwordVisible ? Rt(x["password-visible-icon"], () => [d(fr, {
      clsPrefix: n
    }, {
      default: () => d(Ox, null)
    })]) : Rt(x["password-invisible-icon"], () => [d(fr, {
      clsPrefix: n
    }, {
      default: () => d(_x, null)
    })])) : null]) : null)), this.pair ? d("span", {
      class: `${n}-input__separator`
    }, Rt(x.separator, () => [this.separator])) : null, this.pair ? d("div", {
      class: `${n}-input-wrapper`
    }, d("div", {
      class: `${n}-input__input`
    }, d("input", {
      ref: "inputEl2Ref",
      type: this.type,
      class: `${n}-input__input-el`,
      tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
      placeholder: this.mergedPlaceholder[1],
      disabled: this.mergedDisabled,
      maxlength: s ? void 0 : this.maxlength,
      minlength: s ? void 0 : this.minlength,
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
    }), this.showPlaceholder2 ? d("div", {
      class: `${n}-input__placeholder`
    }, d("span", null, this.mergedPlaceholder[1])) : null), lt(x.suffix, (h) => (this.clearable || h) && d("div", {
      class: `${n}-input__suffix`
    }, [this.clearable && d(Nr, {
      clsPrefix: n,
      show: this.showClearButton,
      onClear: this.handleClear
    }, {
      icon: () => {
        var v;
        return (v = x["clear-icon"]) === null || v === void 0 ? void 0 : v.call(x);
      },
      placeholder: () => {
        var v;
        return (v = x["clear-icon-placeholder"]) === null || v === void 0 ? void 0 : v.call(x);
      }
    }), h]))) : null, this.mergedBordered ? d("div", {
      class: `${n}-input__border`
    }) : null, this.mergedBordered ? d("div", {
      class: `${n}-input__state-border`
    }) : null, this.showCount && o === "textarea" ? d(Jn, null, {
      default: (h) => {
        var v;
        const {
          renderCount: C
        } = this;
        return C ? C(h) : (v = x.count) === null || v === void 0 ? void 0 : v.call(x, h);
      }
    }) : null);
  }
});
function Ge(t) {
  return Kr(t, [255, 255, 255, 0.16]);
}
function ar(t) {
  return Kr(t, [0, 0, 0, 0.12]);
}
const pf = "n-button-group", Cf = {
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
function df(t) {
  const {
    heightTiny: r,
    heightSmall: n,
    heightMedium: i,
    heightLarge: a,
    borderRadius: o,
    fontSizeTiny: s,
    fontSizeSmall: l,
    fontSizeMedium: x,
    fontSizeLarge: h,
    opacityDisabled: v,
    textColor2: C,
    textColor3: E,
    primaryColorHover: R,
    primaryColorPressed: c,
    borderColor: m,
    primaryColor: y,
    baseColor: B,
    infoColor: $,
    infoColorHover: H,
    infoColorPressed: D,
    successColor: z,
    successColorHover: j,
    successColorPressed: f,
    warningColor: b,
    warningColorHover: w,
    warningColorPressed: I,
    errorColor: V,
    errorColorHover: L,
    errorColorPressed: e,
    fontWeight: F,
    buttonColor2: M,
    buttonColor2Hover: P,
    buttonColor2Pressed: A,
    fontWeightStrong: G
  } = t;
  return Object.assign(Object.assign({}, Cf), {
    heightTiny: r,
    heightSmall: n,
    heightMedium: i,
    heightLarge: a,
    borderRadiusTiny: o,
    borderRadiusSmall: o,
    borderRadiusMedium: o,
    borderRadiusLarge: o,
    fontSizeTiny: s,
    fontSizeSmall: l,
    fontSizeMedium: x,
    fontSizeLarge: h,
    opacityDisabled: v,
    // secondary
    colorOpacitySecondary: "0.16",
    colorOpacitySecondaryHover: "0.22",
    colorOpacitySecondaryPressed: "0.28",
    colorSecondary: M,
    colorSecondaryHover: P,
    colorSecondaryPressed: A,
    // tertiary
    colorTertiary: M,
    colorTertiaryHover: P,
    colorTertiaryPressed: A,
    // quaternary
    colorQuaternary: "#0000",
    colorQuaternaryHover: P,
    colorQuaternaryPressed: A,
    // default type
    color: "#0000",
    colorHover: "#0000",
    colorPressed: "#0000",
    colorFocus: "#0000",
    colorDisabled: "#0000",
    textColor: C,
    textColorTertiary: E,
    textColorHover: R,
    textColorPressed: c,
    textColorFocus: R,
    textColorDisabled: C,
    textColorText: C,
    textColorTextHover: R,
    textColorTextPressed: c,
    textColorTextFocus: R,
    textColorTextDisabled: C,
    textColorGhost: C,
    textColorGhostHover: R,
    textColorGhostPressed: c,
    textColorGhostFocus: R,
    textColorGhostDisabled: C,
    border: `1px solid ${m}`,
    borderHover: `1px solid ${R}`,
    borderPressed: `1px solid ${c}`,
    borderFocus: `1px solid ${R}`,
    borderDisabled: `1px solid ${m}`,
    rippleColor: y,
    // primary
    colorPrimary: y,
    colorHoverPrimary: R,
    colorPressedPrimary: c,
    colorFocusPrimary: R,
    colorDisabledPrimary: y,
    textColorPrimary: B,
    textColorHoverPrimary: B,
    textColorPressedPrimary: B,
    textColorFocusPrimary: B,
    textColorDisabledPrimary: B,
    textColorTextPrimary: y,
    textColorTextHoverPrimary: R,
    textColorTextPressedPrimary: c,
    textColorTextFocusPrimary: R,
    textColorTextDisabledPrimary: C,
    textColorGhostPrimary: y,
    textColorGhostHoverPrimary: R,
    textColorGhostPressedPrimary: c,
    textColorGhostFocusPrimary: R,
    textColorGhostDisabledPrimary: y,
    borderPrimary: `1px solid ${y}`,
    borderHoverPrimary: `1px solid ${R}`,
    borderPressedPrimary: `1px solid ${c}`,
    borderFocusPrimary: `1px solid ${R}`,
    borderDisabledPrimary: `1px solid ${y}`,
    rippleColorPrimary: y,
    // info
    colorInfo: $,
    colorHoverInfo: H,
    colorPressedInfo: D,
    colorFocusInfo: H,
    colorDisabledInfo: $,
    textColorInfo: B,
    textColorHoverInfo: B,
    textColorPressedInfo: B,
    textColorFocusInfo: B,
    textColorDisabledInfo: B,
    textColorTextInfo: $,
    textColorTextHoverInfo: H,
    textColorTextPressedInfo: D,
    textColorTextFocusInfo: H,
    textColorTextDisabledInfo: C,
    textColorGhostInfo: $,
    textColorGhostHoverInfo: H,
    textColorGhostPressedInfo: D,
    textColorGhostFocusInfo: H,
    textColorGhostDisabledInfo: $,
    borderInfo: `1px solid ${$}`,
    borderHoverInfo: `1px solid ${H}`,
    borderPressedInfo: `1px solid ${D}`,
    borderFocusInfo: `1px solid ${H}`,
    borderDisabledInfo: `1px solid ${$}`,
    rippleColorInfo: $,
    // success
    colorSuccess: z,
    colorHoverSuccess: j,
    colorPressedSuccess: f,
    colorFocusSuccess: j,
    colorDisabledSuccess: z,
    textColorSuccess: B,
    textColorHoverSuccess: B,
    textColorPressedSuccess: B,
    textColorFocusSuccess: B,
    textColorDisabledSuccess: B,
    textColorTextSuccess: z,
    textColorTextHoverSuccess: j,
    textColorTextPressedSuccess: f,
    textColorTextFocusSuccess: j,
    textColorTextDisabledSuccess: C,
    textColorGhostSuccess: z,
    textColorGhostHoverSuccess: j,
    textColorGhostPressedSuccess: f,
    textColorGhostFocusSuccess: j,
    textColorGhostDisabledSuccess: z,
    borderSuccess: `1px solid ${z}`,
    borderHoverSuccess: `1px solid ${j}`,
    borderPressedSuccess: `1px solid ${f}`,
    borderFocusSuccess: `1px solid ${j}`,
    borderDisabledSuccess: `1px solid ${z}`,
    rippleColorSuccess: z,
    // warning
    colorWarning: b,
    colorHoverWarning: w,
    colorPressedWarning: I,
    colorFocusWarning: w,
    colorDisabledWarning: b,
    textColorWarning: B,
    textColorHoverWarning: B,
    textColorPressedWarning: B,
    textColorFocusWarning: B,
    textColorDisabledWarning: B,
    textColorTextWarning: b,
    textColorTextHoverWarning: w,
    textColorTextPressedWarning: I,
    textColorTextFocusWarning: w,
    textColorTextDisabledWarning: C,
    textColorGhostWarning: b,
    textColorGhostHoverWarning: w,
    textColorGhostPressedWarning: I,
    textColorGhostFocusWarning: w,
    textColorGhostDisabledWarning: b,
    borderWarning: `1px solid ${b}`,
    borderHoverWarning: `1px solid ${w}`,
    borderPressedWarning: `1px solid ${I}`,
    borderFocusWarning: `1px solid ${w}`,
    borderDisabledWarning: `1px solid ${b}`,
    rippleColorWarning: b,
    // error
    colorError: V,
    colorHoverError: L,
    colorPressedError: e,
    colorFocusError: L,
    colorDisabledError: V,
    textColorError: B,
    textColorHoverError: B,
    textColorPressedError: B,
    textColorFocusError: B,
    textColorDisabledError: B,
    textColorTextError: V,
    textColorTextHoverError: L,
    textColorTextPressedError: e,
    textColorTextFocusError: L,
    textColorTextDisabledError: C,
    textColorGhostError: V,
    textColorGhostHoverError: L,
    textColorGhostPressedError: e,
    textColorGhostFocusError: L,
    textColorGhostDisabledError: V,
    borderError: `1px solid ${V}`,
    borderHoverError: `1px solid ${L}`,
    borderPressedError: `1px solid ${e}`,
    borderFocusError: `1px solid ${L}`,
    borderDisabledError: `1px solid ${V}`,
    rippleColorError: V,
    waveOpacity: "0.6",
    fontWeight: F,
    fontWeightStrong: G
  });
}
const mf = {
  name: "Button",
  common: ln,
  self: df
}, bf = _([K("button", `
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
 `, [J("color", [S("border", {
  borderColor: "var(--n-border-color)"
}), J("disabled", [S("border", {
  borderColor: "var(--n-border-color-disabled)"
})]), Ue("disabled", [_("&:focus", [S("state-border", {
  borderColor: "var(--n-border-color-focus)"
})]), _("&:hover", [S("state-border", {
  borderColor: "var(--n-border-color-hover)"
})]), _("&:active", [S("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})]), J("pressed", [S("state-border", {
  borderColor: "var(--n-border-color-pressed)"
})])])]), J("disabled", {
  backgroundColor: "var(--n-color-disabled)",
  color: "var(--n-text-color-disabled)"
}, [S("border", {
  border: "var(--n-border-disabled)"
})]), Ue("disabled", [_("&:focus", {
  backgroundColor: "var(--n-color-focus)",
  color: "var(--n-text-color-focus)"
}, [S("state-border", {
  border: "var(--n-border-focus)"
})]), _("&:hover", {
  backgroundColor: "var(--n-color-hover)",
  color: "var(--n-text-color-hover)"
}, [S("state-border", {
  border: "var(--n-border-hover)"
})]), _("&:active", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [S("state-border", {
  border: "var(--n-border-pressed)"
})]), J("pressed", {
  backgroundColor: "var(--n-color-pressed)",
  color: "var(--n-text-color-pressed)"
}, [S("state-border", {
  border: "var(--n-border-pressed)"
})])]), J("loading", "cursor: wait;"), K("base-wave", `
 pointer-events: none;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 animation-iteration-count: 1;
 animation-duration: var(--n-ripple-duration);
 animation-timing-function: var(--n-bezier-ease-out), var(--n-bezier-ease-out);
 `, [J("active", {
  zIndex: 1,
  animationName: "button-wave-spread, button-wave-opacity"
})]), Cr && "MozBoxSizing" in document.createElement("div").style ? _("&::moz-focus-inner", {
  border: 0
}) : null, S("border, state-border", `
 position: absolute;
 left: 0;
 top: 0;
 right: 0;
 bottom: 0;
 border-radius: inherit;
 transition: border-color .3s var(--n-bezier);
 pointer-events: none;
 `), S("border", {
  border: "var(--n-border)"
}), S("state-border", {
  border: "var(--n-border)",
  borderColor: "#0000",
  zIndex: 1
}), S("icon", `
 margin: var(--n-icon-margin);
 margin-left: 0;
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 max-width: var(--n-icon-size);
 font-size: var(--n-icon-size);
 position: relative;
 flex-shrink: 0;
 `, [K("icon-slot", `
 height: var(--n-icon-size);
 width: var(--n-icon-size);
 position: absolute;
 left: 0;
 top: 50%;
 transform: translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `, [hr({
  top: "50%",
  originalTransform: "translateY(-50%)"
})]), nf()]), S("content", `
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 min-width: 0;
 `, [_("~", [S("icon", {
  margin: "var(--n-icon-margin)",
  marginRight: 0
})])]), J("block", `
 display: flex;
 width: 100%;
 `), J("dashed", [S("border, state-border", {
  borderStyle: "dashed !important"
})]), J("disabled", {
  cursor: "not-allowed",
  opacity: "var(--n-opacity-disabled)"
})]), _("@keyframes button-wave-spread", {
  from: {
    boxShadow: "0 0 0.5px 0 var(--n-ripple-color)"
  },
  to: {
    // don't use exact 5px since chrome will display the animation with glitches
    boxShadow: "0 0 0.5px 4.5px var(--n-ripple-color)"
  }
}), _("@keyframes button-wave-opacity", {
  from: {
    opacity: "var(--n-wave-opacity)"
  },
  to: {
    opacity: 0
  }
})]), gf = Object.assign(Object.assign({}, it.props), {
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
    default: !Gi
  }
}), Bf = xe({
  name: "Button",
  props: gf,
  setup(t) {
    process.env.NODE_ENV !== "production" && Ze(() => {
      const {
        dashed: D,
        ghost: z,
        text: j,
        secondary: f,
        tertiary: b,
        quaternary: w
      } = t;
      (D || z || j) && (f || b || w) && ti("button", "`dashed`, `ghost` and `text` props can't be used along with `secondary`, `tertiary` and `quaternary` props.");
    });
    const r = U(null), n = U(null), i = U(!1), a = kt(() => !t.quaternary && !t.tertiary && !t.secondary && !t.text && (!t.color || t.ghost || t.dashed) && t.bordered), o = be(pf, {}), {
      mergedSizeRef: s
    } = pi({}, {
      defaultSize: "medium",
      mergedSize: (D) => {
        const {
          size: z
        } = t;
        if (z) return z;
        const {
          size: j
        } = o;
        if (j) return j;
        const {
          mergedSize: f
        } = D || {};
        return f ? f.value : "medium";
      }
    }), l = W(() => t.focusable && !t.disabled), x = (D) => {
      var z;
      l.value || D.preventDefault(), !t.nativeFocusBehavior && (D.preventDefault(), !t.disabled && l.value && ((z = r.value) === null || z === void 0 || z.focus({
        preventScroll: !0
      })));
    }, h = (D) => {
      var z;
      if (!t.disabled && !t.loading) {
        const {
          onClick: j
        } = t;
        j && ue(j, D), t.text || (z = n.value) === null || z === void 0 || z.play();
      }
    }, v = (D) => {
      switch (D.key) {
        case "Enter":
          if (!t.keyboard)
            return;
          i.value = !1;
      }
    }, C = (D) => {
      switch (D.key) {
        case "Enter":
          if (!t.keyboard || t.loading) {
            D.preventDefault();
            return;
          }
          i.value = !0;
      }
    }, E = () => {
      i.value = !1;
    }, {
      inlineThemeDisabled: R,
      mergedClsPrefixRef: c,
      mergedRtlRef: m
    } = rn(t), y = it("Button", "-button", bf, mf, t, c), B = an("Button", m, c), $ = W(() => {
      const D = y.value, {
        common: {
          cubicBezierEaseInOut: z,
          cubicBezierEaseOut: j
        },
        self: f
      } = D, {
        rippleDuration: b,
        opacityDisabled: w,
        fontWeight: I,
        fontWeightStrong: V
      } = f, L = s.value, {
        dashed: e,
        type: F,
        ghost: M,
        text: P,
        color: A,
        round: G,
        circle: fe,
        textColor: ae,
        secondary: Ce,
        tertiary: se,
        quaternary: at,
        strong: Te
      } = t, Re = {
        "--n-font-weight": Te ? V : I
      };
      let q = {
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
      const ze = F === "tertiary", He = F === "default", Y = ze ? "default" : F;
      if (P) {
        const te = ae || A;
        q = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": "#0000",
          "--n-text-color": te || f[X("textColorText", Y)],
          "--n-text-color-hover": te ? Ge(te) : f[X("textColorTextHover", Y)],
          "--n-text-color-pressed": te ? ar(te) : f[X("textColorTextPressed", Y)],
          "--n-text-color-focus": te ? Ge(te) : f[X("textColorTextHover", Y)],
          "--n-text-color-disabled": te || f[X("textColorTextDisabled", Y)]
        };
      } else if (M || e) {
        const te = ae || A;
        q = {
          "--n-color": "#0000",
          "--n-color-hover": "#0000",
          "--n-color-pressed": "#0000",
          "--n-color-focus": "#0000",
          "--n-color-disabled": "#0000",
          "--n-ripple-color": A || f[X("rippleColor", Y)],
          "--n-text-color": te || f[X("textColorGhost", Y)],
          "--n-text-color-hover": te ? Ge(te) : f[X("textColorGhostHover", Y)],
          "--n-text-color-pressed": te ? ar(te) : f[X("textColorGhostPressed", Y)],
          "--n-text-color-focus": te ? Ge(te) : f[X("textColorGhostHover", Y)],
          "--n-text-color-disabled": te || f[X("textColorGhostDisabled", Y)]
        };
      } else if (Ce) {
        const te = He ? f.textColor : ze ? f.textColorTertiary : f[X("color", Y)], le = A || te, we = F !== "default" && F !== "tertiary";
        q = {
          "--n-color": we ? Ke(le, {
            alpha: Number(f.colorOpacitySecondary)
          }) : f.colorSecondary,
          "--n-color-hover": we ? Ke(le, {
            alpha: Number(f.colorOpacitySecondaryHover)
          }) : f.colorSecondaryHover,
          "--n-color-pressed": we ? Ke(le, {
            alpha: Number(f.colorOpacitySecondaryPressed)
          }) : f.colorSecondaryPressed,
          "--n-color-focus": we ? Ke(le, {
            alpha: Number(f.colorOpacitySecondaryHover)
          }) : f.colorSecondaryHover,
          "--n-color-disabled": f.colorSecondary,
          "--n-ripple-color": "#0000",
          "--n-text-color": le,
          "--n-text-color-hover": le,
          "--n-text-color-pressed": le,
          "--n-text-color-focus": le,
          "--n-text-color-disabled": le
        };
      } else if (se || at) {
        const te = He ? f.textColor : ze ? f.textColorTertiary : f[X("color", Y)], le = A || te;
        se ? (q["--n-color"] = f.colorTertiary, q["--n-color-hover"] = f.colorTertiaryHover, q["--n-color-pressed"] = f.colorTertiaryPressed, q["--n-color-focus"] = f.colorSecondaryHover, q["--n-color-disabled"] = f.colorTertiary) : (q["--n-color"] = f.colorQuaternary, q["--n-color-hover"] = f.colorQuaternaryHover, q["--n-color-pressed"] = f.colorQuaternaryPressed, q["--n-color-focus"] = f.colorQuaternaryHover, q["--n-color-disabled"] = f.colorQuaternary), q["--n-ripple-color"] = "#0000", q["--n-text-color"] = le, q["--n-text-color-hover"] = le, q["--n-text-color-pressed"] = le, q["--n-text-color-focus"] = le, q["--n-text-color-disabled"] = le;
      } else
        q = {
          "--n-color": A || f[X("color", Y)],
          "--n-color-hover": A ? Ge(A) : f[X("colorHover", Y)],
          "--n-color-pressed": A ? ar(A) : f[X("colorPressed", Y)],
          "--n-color-focus": A ? Ge(A) : f[X("colorFocus", Y)],
          "--n-color-disabled": A || f[X("colorDisabled", Y)],
          "--n-ripple-color": A || f[X("rippleColor", Y)],
          "--n-text-color": ae || (A ? f.textColorPrimary : ze ? f.textColorTertiary : f[X("textColor", Y)]),
          "--n-text-color-hover": ae || (A ? f.textColorHoverPrimary : f[X("textColorHover", Y)]),
          "--n-text-color-pressed": ae || (A ? f.textColorPressedPrimary : f[X("textColorPressed", Y)]),
          "--n-text-color-focus": ae || (A ? f.textColorFocusPrimary : f[X("textColorFocus", Y)]),
          "--n-text-color-disabled": ae || (A ? f.textColorDisabledPrimary : f[X("textColorDisabled", Y)])
        };
      let ke = {
        "--n-border": "initial",
        "--n-border-hover": "initial",
        "--n-border-pressed": "initial",
        "--n-border-focus": "initial",
        "--n-border-disabled": "initial"
      };
      P ? ke = {
        "--n-border": "none",
        "--n-border-hover": "none",
        "--n-border-pressed": "none",
        "--n-border-focus": "none",
        "--n-border-disabled": "none"
      } : ke = {
        "--n-border": f[X("border", Y)],
        "--n-border-hover": f[X("borderHover", Y)],
        "--n-border-pressed": f[X("borderPressed", Y)],
        "--n-border-focus": f[X("borderFocus", Y)],
        "--n-border-disabled": f[X("borderDisabled", Y)]
      };
      const {
        [X("height", L)]: We,
        [X("fontSize", L)]: mt,
        [X("padding", L)]: ge,
        [X("paddingRound", L)]: bt,
        [X("iconSize", L)]: gt,
        [X("borderRadius", L)]: Ie,
        [X("iconMargin", L)]: Bt,
        waveOpacity: Me
      } = f, yt = {
        "--n-width": fe && !P ? We : "initial",
        "--n-height": P ? "initial" : We,
        "--n-font-size": mt,
        "--n-padding": fe || P ? "initial" : G ? bt : ge,
        "--n-icon-size": gt,
        "--n-icon-margin": Bt,
        "--n-border-radius": P ? "initial" : fe || G ? We : Ie
      };
      return Object.assign(Object.assign(Object.assign(Object.assign({
        "--n-bezier": z,
        "--n-bezier-ease-out": j,
        "--n-ripple-duration": b,
        "--n-opacity-disabled": w,
        "--n-wave-opacity": Me
      }, Re), q), ke), yt);
    }), H = R ? nn("button", W(() => {
      let D = "";
      const {
        dashed: z,
        type: j,
        ghost: f,
        text: b,
        color: w,
        round: I,
        circle: V,
        textColor: L,
        secondary: e,
        tertiary: F,
        quaternary: M,
        strong: P
      } = t;
      z && (D += "a"), f && (D += "b"), b && (D += "c"), I && (D += "d"), V && (D += "e"), e && (D += "f"), F && (D += "g"), M && (D += "h"), P && (D += "i"), w && (D += `j${Cn(w)}`), L && (D += `k${Cn(L)}`);
      const {
        value: A
      } = s;
      return D += `l${A[0]}`, D += `m${j[0]}`, D;
    }), $, t) : void 0;
    return {
      selfElRef: r,
      waveElRef: n,
      mergedClsPrefix: c,
      mergedFocusable: l,
      mergedSize: s,
      showBorder: a,
      enterPressed: i,
      rtlEnabled: B,
      handleMousedown: x,
      handleKeydown: C,
      handleBlur: E,
      handleKeyup: v,
      handleClick: h,
      customColorCssVars: W(() => {
        const {
          color: D
        } = t;
        if (!D) return null;
        const z = Ge(D);
        return {
          "--n-border-color": D,
          "--n-border-color-hover": z,
          "--n-border-color-pressed": ar(D),
          "--n-border-color-focus": z,
          "--n-border-color-disabled": D
        };
      }),
      cssVars: R ? void 0 : $,
      themeClass: H == null ? void 0 : H.themeClass,
      onRender: H == null ? void 0 : H.onRender
    };
  },
  render() {
    const {
      mergedClsPrefix: t,
      tag: r,
      onRender: n
    } = this;
    n == null || n();
    const i = lt(this.$slots.default, (a) => a && d("span", {
      class: `${t}-button__content`
    }, a));
    return d(r, {
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
    }, this.iconPlacement === "right" && i, d(Wx, {
      width: !0
    }, {
      default: () => lt(this.$slots.icon, (a) => (this.loading || this.renderIcon || a) && d("span", {
        class: `${t}-button__icon`,
        style: {
          margin: no(this.$slots.default) ? "0" : ""
        }
      }, d(on, null, {
        default: () => this.loading ? d(Li, {
          clsPrefix: t,
          key: "loading",
          class: `${t}-icon-slot`,
          strokeWidth: 20
        }) : d("div", {
          key: "icon",
          class: `${t}-icon-slot`,
          role: "none"
        }, this.renderIcon ? this.renderIcon() : a)
      })))
    }), this.iconPlacement === "left" && i, this.text ? null : d(ef, {
      ref: "waveElRef",
      clsPrefix: t
    }), this.showBorder ? d("div", {
      "aria-hidden": !0,
      class: `${t}-button__border`,
      style: this.customColorCssVars
    }) : null, this.showBorder ? d("div", {
      "aria-hidden": !0,
      class: `${t}-button__state-border`,
      style: this.customColorCssVars
    }) : null);
  }
}), yf = {
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
    validator: () => (to("config-provider", "`as` is deprecated, please use `tag` instead."), !0),
    default: void 0
  }
}, Df = xe({
  name: "ConfigProvider",
  alias: ["App"],
  props: yf,
  setup(t) {
    const r = be(Pe, null), n = W(() => {
      const {
        theme: m
      } = t;
      if (m === null) return;
      const y = r == null ? void 0 : r.mergedThemeRef.value;
      return m === void 0 ? y : y === void 0 ? m : Object.assign({}, y, m);
    }), i = W(() => {
      const {
        themeOverrides: m
      } = t;
      if (m !== null) {
        if (m === void 0)
          return r == null ? void 0 : r.mergedThemeOverridesRef.value;
        {
          const y = r == null ? void 0 : r.mergedThemeOverridesRef.value;
          return y === void 0 ? m : Pt({}, y, m);
        }
      }
    }), a = kt(() => {
      const {
        namespace: m
      } = t;
      return m === void 0 ? r == null ? void 0 : r.mergedNamespaceRef.value : m;
    }), o = kt(() => {
      const {
        bordered: m
      } = t;
      return m === void 0 ? r == null ? void 0 : r.mergedBorderedRef.value : m;
    }), s = W(() => {
      const {
        icons: m
      } = t;
      return m === void 0 ? r == null ? void 0 : r.mergedIconsRef.value : m;
    }), l = W(() => {
      const {
        componentOptions: m
      } = t;
      return m !== void 0 ? m : r == null ? void 0 : r.mergedComponentPropsRef.value;
    }), x = W(() => {
      const {
        clsPrefix: m
      } = t;
      return m !== void 0 ? m : r ? r.mergedClsPrefixRef.value : jr;
    }), h = W(() => {
      var m;
      const {
        rtl: y
      } = t;
      if (y === void 0)
        return r == null ? void 0 : r.mergedRtlRef.value;
      const B = {};
      for (const $ of y)
        B[$.name] = xn($), (m = $.peers) === null || m === void 0 || m.forEach((H) => {
          H.name in B || (B[H.name] = xn(H));
        });
      return B;
    }), v = W(() => t.breakpoints || (r == null ? void 0 : r.mergedBreakpointsRef.value)), C = t.inlineThemeDisabled || (r == null ? void 0 : r.inlineThemeDisabled), E = t.preflightStyleDisabled || (r == null ? void 0 : r.preflightStyleDisabled), R = t.styleMountTarget || (r == null ? void 0 : r.styleMountTarget), c = W(() => {
      const {
        value: m
      } = n, {
        value: y
      } = i, B = y && Object.keys(y).length !== 0, $ = m == null ? void 0 : m.name;
      return $ ? B ? `${$}-${Ht(JSON.stringify(i.value))}` : $ : B ? Ht(JSON.stringify(i.value)) : "";
    });
    return Ur(Pe, {
      mergedThemeHashRef: c,
      mergedBreakpointsRef: v,
      mergedRtlRef: h,
      mergedIconsRef: s,
      mergedComponentPropsRef: l,
      mergedBorderedRef: o,
      mergedNamespaceRef: a,
      mergedClsPrefixRef: x,
      mergedLocaleRef: W(() => {
        const {
          locale: m
        } = t;
        if (m !== null)
          return m === void 0 ? r == null ? void 0 : r.mergedLocaleRef.value : m;
      }),
      mergedDateLocaleRef: W(() => {
        const {
          dateLocale: m
        } = t;
        if (m !== null)
          return m === void 0 ? r == null ? void 0 : r.mergedDateLocaleRef.value : m;
      }),
      mergedHljsRef: W(() => {
        const {
          hljs: m
        } = t;
        return m === void 0 ? r == null ? void 0 : r.mergedHljsRef.value : m;
      }),
      mergedKatexRef: W(() => {
        const {
          katex: m
        } = t;
        return m === void 0 ? r == null ? void 0 : r.mergedKatexRef.value : m;
      }),
      mergedThemeRef: n,
      mergedThemeOverridesRef: i,
      inlineThemeDisabled: C || !1,
      preflightStyleDisabled: E || !1,
      styleMountTarget: R
    }), {
      mergedClsPrefix: x,
      mergedBordered: o,
      mergedNamespace: a,
      mergedTheme: n,
      mergedThemeOverrides: i
    };
  },
  render() {
    var t, r, n, i;
    return this.abstract ? (i = (n = this.$slots).default) === null || i === void 0 ? void 0 : i.call(n) : d(this.as || this.tag, {
      class: `${this.mergedClsPrefix || jr}-config-provider`
    }, (r = (t = this.$slots).default) === null || r === void 0 ? void 0 : r.call(t));
  }
}), Af = /* @__PURE__ */ Object.assign({
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
    return (n, i) => (Yr(), qr(Se(Df), {
      "preflight-style-disabled": "",
      abstract: "",
      "inline-theme-disabled": "",
      locale: Se(du),
      "date-locale": Se(Tx),
      "theme-overrides": r
    }, {
      default: Qn(() => [
        Gr(n.$slots, "default")
      ]),
      _: 3
    }, 8, ["locale", "date-locale"]));
  }
});
var $t = void 0, Ot = {}, Lr;
Ot.throttle = Lr = function(t, r, n, i) {
  var a, o = 0;
  typeof r != "boolean" && (i = n, n = r, r = $t);
  function s() {
    var l = this, x = +/* @__PURE__ */ new Date() - o, h = arguments;
    function v() {
      o = +/* @__PURE__ */ new Date(), n.apply(l, h);
    }
    function C() {
      a = $t;
    }
    i && !a && v(), a && clearTimeout(a), i === $t && x > t ? v() : r !== !0 && (a = setTimeout(i ? C : v, i === $t ? t - x : t));
  }
  return Ot.guid && (s.guid = n.guid = n.guid || Ot.guid++), s;
};
Ot.debounce = function(t, r, n) {
  return n === $t ? Lr(t, r, !1) : Lr(t, n, r !== !1);
};
const wf = function(t, r, n) {
  return Ot.debounce(300, !0, t);
}, Ff = /* @__PURE__ */ Object.assign({
  name: "PButton",
  inheritAttrs: !1
}, {
  __name: "button",
  props: {
    type: { type: String, default: "primary" },
    size: { type: String, default: "medium" },
    block: { type: Boolean, default: !1 }
  },
  emits: ["click"],
  setup(t, { emit: r }) {
    const n = La(), i = r, a = wf(function() {
      i("click");
    });
    return (o, s) => (Yr(), qr(Se(Bf), {
      class: Va(`${Se(n).class ? Se(n).class : ""}`),
      "attr-type": "button",
      focusable: !1,
      bordered: !0,
      keyboard: !1,
      block: t.block,
      size: t.size,
      type: t.type,
      onClick: Se(a)
    }, {
      default: Qn(() => [
        Gr(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "block", "size", "type", "onClick"]));
  }
});
function Ef(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Xi = { exports: {} };
(function(t) {
  function r() {
    var n = 0, i = 1, a = 2, o = 3, s = 4, l = 5, x = 6, h = 7, v = 8, C = 9, E = 10, R = 11, c = 12, m = 13, y = 14, B = 15, $ = 16, H = 17, D = 0, z = 1, j = 2, f = 3, b = 4;
    function w(e, F) {
      return 55296 <= e.charCodeAt(F) && e.charCodeAt(F) <= 56319 && 56320 <= e.charCodeAt(F + 1) && e.charCodeAt(F + 1) <= 57343;
    }
    function I(e, F) {
      F === void 0 && (F = 0);
      var M = e.charCodeAt(F);
      if (55296 <= M && M <= 56319 && F < e.length - 1) {
        var P = M, A = e.charCodeAt(F + 1);
        return 56320 <= A && A <= 57343 ? (P - 55296) * 1024 + (A - 56320) + 65536 : P;
      }
      if (56320 <= M && M <= 57343 && F >= 1) {
        var P = e.charCodeAt(F - 1), A = M;
        return 55296 <= P && P <= 56319 ? (P - 55296) * 1024 + (A - 56320) + 65536 : A;
      }
      return M;
    }
    function V(e, F, M) {
      var P = [e].concat(F).concat([M]), A = P[P.length - 2], G = M, fe = P.lastIndexOf(y);
      if (fe > 1 && P.slice(1, fe).every(function(se) {
        return se == o;
      }) && [o, m, H].indexOf(e) == -1)
        return j;
      var ae = P.lastIndexOf(s);
      if (ae > 0 && P.slice(1, ae).every(function(se) {
        return se == s;
      }) && [c, s].indexOf(A) == -1)
        return P.filter(function(se) {
          return se == s;
        }).length % 2 == 1 ? f : b;
      if (A == n && G == i)
        return D;
      if (A == a || A == n || A == i)
        return G == y && F.every(function(se) {
          return se == o;
        }) ? j : z;
      if (G == a || G == n || G == i)
        return z;
      if (A == x && (G == x || G == h || G == C || G == E))
        return D;
      if ((A == C || A == h) && (G == h || G == v))
        return D;
      if ((A == E || A == v) && G == v)
        return D;
      if (G == o || G == B)
        return D;
      if (G == l)
        return D;
      if (A == c)
        return D;
      var Ce = P.indexOf(o) != -1 ? P.lastIndexOf(o) - 1 : P.length - 2;
      return [m, H].indexOf(P[Ce]) != -1 && P.slice(Ce + 1, -1).every(function(se) {
        return se == o;
      }) && G == y || A == B && [$, H].indexOf(G) != -1 ? D : F.indexOf(s) != -1 ? j : A == s && G == s ? D : z;
    }
    this.nextBreak = function(e, F) {
      if (F === void 0 && (F = 0), F < 0)
        return 0;
      if (F >= e.length - 1)
        return e.length;
      for (var M = L(I(e, F)), P = [], A = F + 1; A < e.length; A++)
        if (!w(e, A - 1)) {
          var G = L(I(e, A));
          if (V(M, P, G))
            return A;
          P.push(G);
        }
      return e.length;
    }, this.splitGraphemes = function(e) {
      for (var F = [], M = 0, P; (P = this.nextBreak(e, M)) < e.length; )
        F.push(e.slice(M, P)), M = P;
      return M < e.length && F.push(e.slice(M)), F;
    }, this.iterateGraphemes = function(e) {
      var F = 0, M = {
        next: (function() {
          var P, A;
          return (A = this.nextBreak(e, F)) < e.length ? (P = e.slice(F, A), F = A, { value: P, done: !1 }) : F < e.length ? (P = e.slice(F), F = e.length, { value: P, done: !1 }) : { value: void 0, done: !0 };
        }).bind(this)
      };
      return typeof Symbol < "u" && Symbol.iterator && (M[Symbol.iterator] = function() {
        return M;
      }), M;
    }, this.countGraphemes = function(e) {
      for (var F = 0, M = 0, P; (P = this.nextBreak(e, M)) < e.length; )
        M = P, F++;
      return M < e.length && F++, F;
    };
    function L(e) {
      return 1536 <= e && e <= 1541 || // Cf   [6] ARABIC NUMBER SIGN..ARABIC NUMBER MARK ABOVE
      e == 1757 || // Cf       ARABIC END OF AYAH
      e == 1807 || // Cf       SYRIAC ABBREVIATION MARK
      e == 2274 || // Cf       ARABIC DISPUTED END OF AYAH
      e == 3406 || // Lo       MALAYALAM LETTER DOT REPH
      e == 69821 || // Cf       KAITHI NUMBER SIGN
      70082 <= e && e <= 70083 || // Lo   [2] SHARADA SIGN JIHVAMULIYA..SHARADA SIGN UPADHMANIYA
      e == 72250 || // Lo       ZANABAZAR SQUARE CLUSTER-INITIAL LETTER RA
      72326 <= e && e <= 72329 || // Lo   [4] SOYOMBO CLUSTER-INITIAL LETTER RA..SOYOMBO CLUSTER-INITIAL LETTER SA
      e == 73030 ? c : e == 13 ? n : e == 10 ? i : 0 <= e && e <= 9 || // Cc  [10] <control-0000>..<control-0009>
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
      917760 <= e && e <= 917999 ? o : 127462 <= e && e <= 127487 ? s : e == 2307 || // Mc       DEVANAGARI SIGN VISARGA
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
      e == 119149 ? l : 4352 <= e && e <= 4447 || // Lo  [96] HANGUL CHOSEONG KIYEOK..HANGUL CHOSEONG FILLER
      43360 <= e && e <= 43388 ? x : 4448 <= e && e <= 4519 || // Lo  [72] HANGUL JUNGSEONG FILLER..HANGUL JUNGSEONG O-YAE
      55216 <= e && e <= 55238 ? h : 4520 <= e && e <= 4607 || // Lo  [88] HANGUL JONGSEONG KIYEOK..HANGUL JONGSEONG SSANGNIEUN
      55243 <= e && e <= 55291 ? v : e == 44032 || // Lo       HANGUL SYLLABLE GA
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
      e == 55176 ? C : 44033 <= e && e <= 44059 || // Lo  [27] HANGUL SYLLABLE GAG..HANGUL SYLLABLE GAH
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
      55177 <= e && e <= 55203 ? E : e == 9757 || // So       WHITE UP POINTING INDEX
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
      129489 <= e && e <= 129501 ? m : 127995 <= e && e <= 127999 ? y : e == 8205 ? B : e == 9792 || // So       FEMALE SIGN
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
      e == 128658 ? $ : 128102 <= e && e <= 128105 ? H : R;
    }
    return this;
  }
  t.exports && (t.exports = r);
})(Xi);
var Sf = Xi.exports;
const Pf = /* @__PURE__ */ Ef(Sf), $f = new Pf(), Tf = (t = "") => $f.countGraphemes(t), Rf = /* @__PURE__ */ Object.assign({
  name: "PInput",
  inheritAttrs: !1
}, {
  __name: "input",
  props: /* @__PURE__ */ fn({
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    maxlength: { type: Number },
    showCount: { type: Boolean, default: !1 },
    trim: { type: Boolean, default: !0 }
  }, {
    modelValue: { type: String, default: "" },
    modelModifiers: {}
  }),
  emits: /* @__PURE__ */ fn(["blur", "input"], ["update:modelValue"]),
  setup(t, { emit: r }) {
    const n = Ga(t, "modelValue"), i = r;
    function a() {
      let l = n.value;
      if (t.trim) {
        const x = l.trim();
        n.value = x, l = x;
      }
      return l;
    }
    function o() {
      const l = a();
      i("blur", { value: l });
    }
    function s(l) {
      n.value = l;
      let x = l;
      t.trim && (x = x.trim()), i("input", { value: x });
    }
    return (l, x) => (Yr(), qr(Se(cf), {
      "input-props": { autocomplete: "off" },
      type: t.type,
      value: n.value,
      maxlength: t.maxlength,
      "show-count": t.showCount,
      "count-graphemes": t.maxlength != null && t.maxlength > 0 || t.showCount ? Se(Tf) : void 0,
      placeholder: t.placeholder,
      onInput: s,
      onBlur: o
    }, null, 8, ["type", "value", "maxlength", "show-count", "count-graphemes", "placeholder"]));
  }
}), Of = {
  install: (t, r = {}) => {
    const { prefix: n = "p" } = r;
    t.component(`${n}-config-provider`, Af), t.component(`${n}-button`, Ff), t.component(`${n}-input`, Rf);
  }
};
export {
  Of as default
};
