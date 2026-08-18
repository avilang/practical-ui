const mockTree = [
  {
    key: 1,
    label: '未分类',
    code: 'UNCATEGORIZED',
    parentId: null,
    sort: 0
  },
  {
    key: 2,
    label: '玻璃胶免钉胶美缝剂',
    code: 'DB1FL0002',
    parentId: null,
    sort: 1,
    children: [
      {
        key: 3,
        label: '嘉翊结构胶，玻璃胶，云石胶',
        code: 'DB1FL0003',
        parentId: 2,
        sort: 0
      },
      {
        key: 4,
        label: '誉天星发泡胶',
        code: 'DB1FL0007',
        parentId: 2,
        sort: 1
      },
      {
        key: 5,
        label: '经阁发泡胶',
        code: 'DB1FL0006',
        parentId: 2,
        sort: 2
      },
      {
        key: 6,
        label: '三和、悍耐特发泡胶',
        code: 'DB1FL0005',
        parentId: 2,
        sort: 3
      },
      {
        key: 7,
        label: '启航免钉胶',
        code: 'DB1FL0008',
        parentId: 2,
        sort: 4
      },
      {
        key: 8,
        label: '启航美缝剂',
        code: 'DB1FL0009',
        parentId: 2,
        sort: 5
      }
    ]
  },
  {
    key: 9,
    label: 'RY测试',
    code: 'RY0001',
    parentId: null,
    sort: 2,
    children: [
      {
        key: 10,
        label: 'RY测试分类1',
        code: 'RY0002',
        parentId: 9,
        sort: 0,
        children: [
          {
            key: 11,
            label: 'RY测试分类1-1',
            code: 'RY0003',
            parentId: 10,
            sort: 0
          },
          {
            key: 15,
            label: 'RY测试分类1-2（带子级）',
            code: 'RY0004',
            parentId: 10,
            sort: 1,
            children: [
              {
                key: 16,
                label: 'RY测试分类1-2-1',
                code: 'RY0005',
                parentId: 15,
                sort: 0
              },
              {
                key: 17,
                label: 'RY测试分类1-2-2',
                code: 'RY0006',
                parentId: 15,
                sort: 1,
                children: [
                  {
                    key: 18,
                    label: 'RY深层叶子A',
                    code: 'RY0007',
                    parentId: 17,
                    sort: 0
                  },
                  {
                    key: 19,
                    label: 'RY深层叶子B',
                    code: 'RY0008',
                    parentId: 17,
                    sort: 1
                  }
                ]
              },
              {
                key: 38,
                label: 'RY测试分类1-2-3（带子级）',
                code: 'RY0010',
                parentId: 15,
                sort: 2,
                children: [
                  {
                    key: 39,
                    label: 'RY测试分类1-2-3-1',
                    code: 'RY0011',
                    parentId: 38,
                    sort: 0
                  },
                  {
                    key: 40,
                    label: 'RY测试分类1-2-3-2',
                    code: 'RY0012',
                    parentId: 38,
                    sort: 1,
                    children: [
                      {
                        key: 41,
                        label: 'RY支线叶子甲',
                        code: 'RY0013',
                        parentId: 40,
                        sort: 0
                      },
                      {
                        key: 42,
                        label: 'RY支线叶子乙',
                        code: 'RY0014',
                        parentId: 40,
                        sort: 1
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        key: 20,
        label: 'RY测试分类2（叶子）',
        code: 'RY0009',
        parentId: 9,
        sort: 1
      }
    ]
  },
  {
    key: 12,
    label: '五金类',
    code: 'HARDWARE',
    parentId: null,
    sort: 3,
    children: [
      { key: 13, label: '螺丝', code: 'HW001', parentId: 12, sort: 0 },
      {
        key: 21,
        label: '紧固件（带子级）',
        code: 'HW003',
        parentId: 12,
        sort: 1,
        children: [
          {
            key: 22,
            label: '外六角',
            code: 'HW004',
            parentId: 21,
            sort: 0,
            children: [
              { key: 23, label: 'M6', code: 'HW005', parentId: 22, sort: 0 },
              { key: 24, label: 'M8', code: 'HW006', parentId: 22, sort: 1 }
            ]
          },
          { key: 25, label: '内六角', code: 'HW007', parentId: 21, sort: 1 }
        ]
      },
      { key: 14, label: '螺母', code: 'HW002', parentId: 12, sort: 2 }
    ]
  },
  {
    key: 26,
    label: '深层级联调',
    code: 'DEEP001',
    parentId: null,
    sort: 4,
    children: [
      {
        key: 27,
        label: 'L2 父节点',
        code: 'DEEP002',
        parentId: 26,
        sort: 0,
        children: [
          {
            key: 28,
            label: 'L3 父节点',
            code: 'DEEP003',
            parentId: 27,
            sort: 0,
            children: [
              {
                key: 29,
                label: 'L4 父节点',
                code: 'DEEP004',
                parentId: 28,
                sort: 0,
                children: [
                  { key: 30, label: 'L5 叶子甲', code: 'DEEP005', parentId: 29, sort: 0 },
                  {
                    key: 31,
                    label: 'L5 父节点',
                    code: 'DEEP006',
                    parentId: 29,
                    sort: 1,
                    children: [
                      { key: 32, label: 'L6 叶子乙', code: 'DEEP007', parentId: 31, sort: 0 },
                      { key: 33, label: 'L6 叶子丙', code: 'DEEP008', parentId: 31, sort: 1 }
                    ]
                  },
                  { key: 34, label: 'L5 叶子丁', code: 'DEEP009', parentId: 29, sort: 2 }
                ]
              },
              { key: 35, label: 'L4 叶子戊', code: 'DEEP010', parentId: 28, sort: 1 }
            ]
          },
          { key: 36, label: 'L3 叶子己', code: 'DEEP011', parentId: 27, sort: 1 }
        ]
      },
      { key: 37, label: 'L2 叶子庚', code: 'DEEP012', parentId: 26, sort: 1 }
    ]
  },
  buildDeepLevelForest(50)
]

/**
 * Seeded PRNG — same mock shape across refreshes, looks irregular.
 * @param {number} seed
 */
function createRng(seed) {
  let s = seed >>> 0
  return () => {
    s += 0x6d2b79f5
    let t = Math.imul(s ^ (s >>> 15), 1 | s)
    t ^= t + Math.imul(t ^ (t >>> 7), 61 | t)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

/**
 * Top-level node: a depth-`levels` spine plus random siblings / short side branches
 * at many levels (for deep guide-line QA — not a single-child chain).
 */
function buildDeepLevelForest(levels = 50, startKey = 1000, seed = 20260812) {
  const rand = createRng(seed)
  let nextKey = startKey

  function allocKey() {
    const key = nextKey
    nextKey += 1
    return key
  }

  function leaf(level, parentId, label) {
    const key = allocKey()
    return {
      key,
      label,
      code: `DEEP50_${key}`,
      parentId,
      sort: 0
    }
  }

  function folder(level, parentId, label, children) {
    const key = allocKey()
    children.forEach((c, i) => {
      c.parentId = key
      c.sort = i
    })
    return {
      key,
      label,
      code: `DEEP50_${level}_${key}`,
      parentId,
      sort: 0,
      children
    }
  }

  /** Shallow random branch (1–3 levels) so total nodes stay UI-friendly. */
  function makeSideBranch(level, parentId, tag, index) {
    if (level > levels || rand() < 0.22) {
      return leaf(level, parentId, `D${level} ${tag}叶${index + 1}`)
    }
    const childCount = 2 + Math.floor(rand() * 3) // 2–4
    const kids = []
    for (let i = 0; i < childCount; i += 1) {
      if (level + 1 >= levels || rand() < 0.4) {
        kids.push(leaf(level + 1, null, `D${level + 1} ${tag}${index + 1}-${i + 1}`))
      } else {
        const grandCount = 2 + Math.floor(rand() * 2) // 2–3
        const grand = []
        for (let g = 0; g < grandCount; g += 1) {
          const suffix = String.fromCharCode(97 + g) // a, b, c
          if (level + 2 >= levels || rand() < 0.65) {
            grand.push(leaf(level + 2, null, `D${level + 2} ${tag}${index + 1}-${i + 1}${suffix}`))
          } else {
            grand.push(
              folder(level + 2, null, `D${level + 2} ${tag}支${index + 1}-${i + 1}${suffix}`, [
                leaf(level + 3, null, `D${level + 3} ${tag}${index + 1}-${i + 1}${suffix}1`),
                leaf(level + 3, null, `D${level + 3} ${tag}${index + 1}-${i + 1}${suffix}2`)
              ])
            )
          }
        }
        kids.push(folder(level + 1, null, `D${level + 1} ${tag}支${index + 1}-${i + 1}`, grand))
      }
    }
    return folder(level, parentId, `D${level} ${tag}支${index + 1}`, kids)
  }

  function buildSpine(level, parentId) {
    if (level > levels) return null

    if (level === levels) {
      return leaf(level, parentId, `D${level} 主链叶子`)
    }

    // Most levels get both leading and trailing siblings (guide-line stress).
    const beforeCount = level === 1 ? 1 + Math.floor(rand() * 2) : Math.floor(rand() * 3) // 0–2
    const afterCount =
      level % 3 === 0 || level >= levels - 2
        ? 1 + Math.floor(rand() * 2) // 1–2
        : Math.floor(rand() * 3) // 0–2

    const children = []
    for (let i = 0; i < beforeCount; i += 1) {
      children.push(makeSideBranch(level + 1, null, '前', i))
    }

    const spineChild = buildSpine(level + 1, null)
    if (spineChild) children.push(spineChild)

    for (let i = 0; i < afterCount; i += 1) {
      children.push(makeSideBranch(level + 1, null, '后', i))
    }

    const label = level === 1 ? '50层深度测试' : `D${level} 主链`
    return folder(level, parentId, label, children)
  }

  const root = buildSpine(1, null)
  root.sort = 5
  return root
}

export function getTree() {
  return Promise.resolve(structuredClone(mockTree))
}
