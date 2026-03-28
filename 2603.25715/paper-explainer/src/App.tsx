import { useState } from 'react'

// 论文信息
const paperInfo = {
  title: "两矩阵模型 ABBA、A{B,A}B 和 ABAB 的临界曲线",
  subtitle: "第一部分：蒙特卡洛方法",
  author: "Carlos I. Pérez Sánchez",
  originalTitle: "Critical curve of two-matrix models ABBA, A{B,A}B and ABAB, Part I: Monte Carlo"
}

// 核心要点数据
const keyPoints = [
  {
    title: "研究什么问题？",
    icon: "🔍",
    content: "科学家想要知道：当两个矩阵（可以想象成两个复杂的数字表格）相互作用时，在什么条件下这个系统是稳定的？",
    detail: "矩阵是数学中用来描述线性变换的工具。在物理学中，随机矩阵用来描述量子系统。这篇论文研究两个随机矩阵 A 和 B 的相互作用。"
  },
  {
    title: "三种矩阵模型",
    icon: "📊",
    content: "论文比较了三种不同的两矩阵模型：ABBA、A{B,A}B 和 ABAB，它们的区别在于矩阵乘积的顺序不同。",
    detail: "ABBA 模型：矩阵乘积为 ABBA\nA{B,A}B 模型：混合了 ABAB 和 ABBA\nABAB 模型：矩阵乘积为 ABAB"
  },
  {
    title: "蒙特卡洛方法",
    icon: "🎲",
    content: "使用计算机模拟（蒙特卡洛方法）来找到临界曲线 - 这是判断系统稳定性的边界。",
    detail: "蒙特卡洛方法是一种通过随机抽样来解决问题的计算算法。就像用随机投针来估算圆周率一样。"
  },
  {
    title: "临界曲线",
    icon: "📈",
    content: "临界曲线就像地图上的边界线：曲线内部系统稳定，外部则不稳定。",
    detail: "在 (g, h) 参数平面中，曲线内部的点对应稳定的物理系统，外部的点则对应不稳定的系统。"
  }
]

// 临界值数据
const criticalData = [
  { model: "ABAB (q=1)", slopePos: "+0.9755", slopeNeg: "-0.9657", anglePos: "44.28°", angleNeg: "-44°", gNeg: "0.362", gPos: "0.301" },
  { model: "A{B,A}B (q=1/2)", slopePos: "-0.0023", slopeNeg: "-0.9764", anglePos: "-0.135°", angleNeg: "-44.3°", gNeg: "0.167", gPos: "0.490" },
  { model: "ABBA (q=0)", slopePos: "+0.0027", slopeNeg: "-0.9696", anglePos: "0.155°", angleNeg: "-44.1°", gNeg: "0.256", gPos: "0.144" }
]

// 动画开关组件
function AnimatedSection({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  const [visible, setVisible] = useState(false)
  return (
    <div
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      style={{ transitionDelay: `${delay}ms` }}
      onMouseEnter={() => setVisible(true)}
    >
      {children}
    </div>
  )
}

// 模型对比卡片
function ModelCard({ model, color, description }: { model: string, color: string, description: string }) {
  return (
    <div className={`p-4 rounded-xl border-2 ${color} bg-white/50 backdrop-blur-sm`}>
      <div className="font-bold text-lg mb-2">{model}</div>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  )
}

// 相图组件
function PhaseDiagram({ activeModel, onModelChange }: { activeModel: number, onModelChange: (i: number) => void }) {
  const models = ['ABBA', 'A{B,A}B', 'ABAB']
  const colors = ['border-blue-400', 'border-purple-400', 'border-green-400']

  return (
    <div className="relative bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6">
      <div className="flex flex-wrap gap-2 mb-6">
        {models.map((m, i) => (
          <button
            key={m}
            onClick={() => onModelChange(i)}
            className={`px-4 py-2 rounded-full font-medium transition-all ${
              activeModel === i
                ? `${colors[i].split('-')[1]} bg-blue-500 text-white`
                : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
            }`}
          >
            {m}
          </button>
        ))}
      </div>

      {/* 简化的相图 */}
      <div className="relative h-64 bg-white rounded-xl border border-slate-200 overflow-hidden">
        <svg viewBox="0 0 400 250" className="w-full h-full">
          {/* 坐标轴 */}
          <line x1="40" y1="220" x2="380" y2="220" stroke="#334155" strokeWidth="2" />
          <line x1="40" y1="220" x2="40" y2="20" stroke="#334155" strokeWidth="2" />
          <text x="380" y="235" fontSize="12" fill="#64748b">g</text>
          <text x="15" y="25" fontSize="12" fill="#64748b">h</text>

          {/* 临界曲线 - 根据不同模型显示不同曲线 */}
          {activeModel === 0 && (
            <path
              d="M 50 50 Q 150 60, 250 120 T 350 200"
              fill="none"
              stroke="#3b82f6"
              strokeWidth="3"
              className="transition-all duration-500"
            />
          )}
          {activeModel === 1 && (
            <path
              d="M 50 50 Q 180 55, 280 130 T 370 210"
              fill="none"
              stroke="#8b5cf6"
              strokeWidth="3"
              className="transition-all duration-500"
            />
          )}
          {activeModel === 2 && (
            <path
              d="M 50 50 Q 120 70, 200 140 T 340 220"
              fill="none"
              stroke="#22c55e"
              strokeWidth="3"
              className="transition-all duration-500"
            />
          )}

          {/* 标注 */}
          <text x="55" y="45" fontSize="11" fill="#334155" fontWeight="bold">稳定区域</text>
          <text x="280" y="200" fontSize="11" fill="#334155">不稳定区域 →</text>

          {/* 关键点 */}
          <circle cx="80" cy="60" r="6" fill="#ef4444" />
          <text x="90" y="55" fontSize="9" fill="#64748b">临界点</text>
        </svg>
      </div>
      <p className="text-center text-sm text-slate-500 mt-3">
        图：{models[activeModel]} 模型的临界曲线示意图
      </p>
    </div>
  )
}

// 方法流程图
function MethodFlowchart() {
  const steps = [
    { num: "1", title: "定义模型", desc: "设定两个矩阵 A 和 B 的相互作用形式" },
    { num: "2", title: "构建链", desc: "创建马尔可夫链来采样矩阵配置" },
    { num: "3", title: "哈密顿演化", desc: "使用哈密顿动力学生成新提案" },
    { num: "4", title: "接受/拒绝", desc: "根据能量变化决定是否接受新状态" },
    { num: "5", title: "寻找边界", desc: "通过二分搜索定位稳定性的临界点" },
  ]

  return (
    <div className="bg-gradient-to-r from-slate-50 to-slate-100 rounded-2xl p-6">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        {steps.map((step, i) => (
          <div key={i} className="relative">
            <div className="bg-white rounded-xl p-4 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-lg mb-3">
                {step.num}
              </div>
              <h4 className="font-semibold text-slate-800 mb-1">{step.title}</h4>
              <p className="text-sm text-slate-500">{step.desc}</p>
            </div>
            {i < steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-2 transform -translate-y-1/2 text-slate-400">
                →
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

// 结论卡片
function ConclusionCard({ icon, title, content }: { icon: string, title: string, content: string }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
      <div className="text-3xl mb-3">{icon}</div>
      <h4 className="font-semibold text-slate-800 mb-2">{title}</h4>
      <p className="text-sm text-slate-600 leading-relaxed">{content}</p>
    </div>
  )
}

function App() {
  const [activeModel, setActiveModel] = useState(0)
  const [activePoint, setActivePoint] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* 头部 */}
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">论文</span>
            </div>
            <div>
              <h1 className="font-semibold text-slate-800 text-sm md:text-base">论文解读</h1>
              <p className="text-xs text-slate-500 hidden sm:block">通俗易懂版</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        {/* 标题区 */}
        <section className="text-center space-y-4 py-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
            <span>📚</span> 理论物理 · 随机矩阵
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight">
            {paperInfo.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-600">
            {paperInfo.subtitle}
          </p>
          <p className="text-sm text-slate-400 italic">
            {paperInfo.originalTitle}
          </p>
          <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
            <span>👤</span>
            <span>{paperInfo.author}</span>
          </div>
        </section>

        {/* 一句话总结 */}
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-6 md:p-8 text-white">
          <div className="flex items-start gap-4">
            <div className="text-4xl">💡</div>
            <div>
              <h2 className="font-semibold text-lg mb-2">一句话理解</h2>
              <p className="text-blue-50 leading-relaxed">
                这篇论文用计算机模拟的方法，找到了两个相互作用矩阵的"安全区域"边界——就像找出汽车能够安全行驶的速度和弯道曲率的极限组合。
              </p>
            </div>
          </div>
        </section>

        {/* 核心要点 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span>🎯</span> 核心要点
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {keyPoints.map((point, i) => (
              <AnimatedSection key={i} delay={i * 100}>
                <div
                  className="bg-white rounded-xl p-5 shadow-sm border border-slate-200 cursor-pointer hover:shadow-md transition-all hover:border-blue-300"
                  onClick={() => setActivePoint(activePoint === i ? null : i)}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{point.icon}</span>
                    <h3 className="font-semibold text-slate-800">{point.title}</h3>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">{point.content}</p>
                  {activePoint === i && (
                    <div className="mt-3 pt-3 border-t border-slate-100">
                      <p className="text-slate-500 text-sm whitespace-pre-line">{point.detail}</p>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* 通俗解释 */}
        <section className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-slate-200">
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span>📖</span> 通俗解释
          </h2>

          <div className="space-y-6">
            <div className="bg-amber-50 rounded-xl p-5 border border-amber-200">
              <h3 className="font-semibold text-amber-800 mb-3 flex items-center gap-2">
                <span>🎲</span> 什么是"矩阵模型"？
              </h3>
              <p className="text-amber-900 text-sm leading-relaxed mb-3">
                想象你有两堆积木，每堆积木都有 N×N 个。你可以按照不同方式把它们组合起来：
              </p>
              <ul className="text-amber-800 text-sm space-y-2 ml-4">
                <li>• ABBA = 先用 A 乘 B，再用 B 乘 A</li>
                <li>• ABAB = 按顺序 A-B-A-B 交替组合</li>
                <li>• A&#123;B,A&#125;B = AB 和 BA 的混合</li>
              </ul>
              <p className="text-amber-700 text-sm mt-3">
                不同的组合方式会导致不同的"游戏规则"，科学家想知道哪种组合在什么参数下是稳定的。
              </p>
            </div>

            <div className="bg-green-50 rounded-xl p-5 border border-green-200">
              <h3 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                <span>🗺️</span> 什么是"临界曲线"？
              </h3>
              <p className="text-green-900 text-sm leading-relaxed">
                想象一张地图，左边是"安全区域"，右边是"危险区域"。临界曲线就是它们之间的边界！
                地图上的每个点有两个坐标 (g, h)，代表不同的"游戏设置"。
              </p>
              <div className="mt-3 p-3 bg-white/50 rounded-lg">
                <p className="text-green-700 text-xs">
                  <strong>临界点 (g=1/12, h=0)：</strong> 当 h=0 时，所有模型都在 g=1/12 ≈ 0.0833 处达到临界状态
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
              <h3 className="font-semibold text-purple-800 mb-3 flex items-center gap-2">
                <span>🎯</span> 研究目标
              </h3>
              <p className="text-purple-900 text-sm leading-relaxed">
                对于含参量 q ∈ [0,1] 的两矩阵模型家族：
              </p>
              <div className="mt-3 p-3 bg-white/50 rounded-lg font-mono text-xs text-purple-800 overflow-x-auto">
                S(A,B) = ½Tr(A²+B²) - g/4·Tr(A⁴+B⁴) - h/2·Tr(A_q B_q A_q B_q)
              </div>
              <p className="text-purple-700 text-sm mt-3">
                其中 A_q B_q = qBA + (1-q)AB，代表不同模型的混合参数
              </p>
            </div>
          </div>
        </section>

        {/* 方法流程 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span>⚙️</span> 研究方法
          </h2>
          <MethodFlowchart />
        </section>

        {/* 相图可视化 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span>📊</span> 相图对比
          </h2>
          <PhaseDiagram activeModel={activeModel} onModelChange={setActiveModel} />
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 rounded-xl p-4 text-center">
              <div className="text-blue-600 font-semibold">ABBA (q=0)</div>
              <p className="text-xs text-blue-500 mt-1">最稳定的模型</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-4 text-center">
              <div className="text-purple-600 font-semibold">A&#123;B,A&#125;B (q=½)</div>
              <p className="text-xs text-purple-500 mt-1">介于两者之间</p>
            </div>
            <div className="bg-green-50 rounded-xl p-4 text-center">
              <div className="text-green-600 font-semibold">ABAB (q=1)</div>
              <p className="text-xs text-green-500 mt-1">最复杂的模型</p>
            </div>
          </div>
        </section>

        {/* 关键结果表格 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span>📋</span> 关键数据
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <thead className="bg-slate-100">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-700">模型</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-slate-700">斜率 λ₊</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-slate-700">斜率 λ₋</th>
                  <th className="px-4 py-3 text-center text-sm font-semibold text-slate-700">临界角</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {criticalData.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="px-4 py-3 text-sm font-medium text-slate-800">{row.model}</td>
                    <td className="px-4 py-3 text-sm text-center text-blue-600 font-mono">{row.slopePos}</td>
                    <td className="px-4 py-3 text-sm text-center text-red-600 font-mono">{row.slopeNeg}</td>
                    <td className="px-4 py-3 text-sm text-center text-slate-600">{row.anglePos} / {row.angleNeg}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-slate-500 mt-3 text-center">
            表：三种模型在 h→±∞ 极限下的渐进行为特征。λ₊ 和 λ₋ 分别表示正、负 h 方向的斜率。
          </p>
        </section>

        {/* 结论 */}
        <section>
          <h2 className="text-xl md:text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span>✨</span> 主要结论
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <ConclusionCard
              icon="🔬"
              title="临界曲线确定"
              content="通过蒙特卡洛模拟，成功定位了三种两矩阵模型在 (g, h) 参数平面上的临界曲线边界。"
            />
            <ConclusionCard
              icon="📐"
              title="渐进行为发现"
              content="当 |h|→∞ 时，所有模型的临界曲线都趋向于接近 45° 的斜率（λ ≈ ±1）。"
            />
            <ConclusionCard
              icon="⚖️"
              title="对称性分析"
              content="ABAB 模型展现出独特的不对称性：h→-h 时行为不同，这与 q<1 的模型形成鲜明对比。"
            />
            <ConclusionCard
              icon="🖥️"
              title="计算工具"
              content="开发了高效的 Python 程序，可应用于其他双变量两矩阵模型，甚至可扩展到多矩阵模型。"
            />
          </div>
        </section>

        {/* 阅读建议 */}
        <section className="bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 text-white">
          <h2 className="font-semibold text-lg mb-4 flex items-center gap-2">
            <span>💭</span> 给高中生的话
          </h2>
          <div className="space-y-3 text-slate-300 text-sm leading-relaxed">
            <p>
              这篇论文虽然涉及高等数学（矩阵、微积分、概率论），但核心思想其实很朴素：
              <strong className="text-white">用计算机模拟来探索复杂系统的边界</strong>。
            </p>
            <p>
              就像你在物理实验中测量物体何时会倒下一样，科学家们在"矩阵空间"中寻找系统稳定性的边界。
              蒙特卡洛方法就像是让计算机"投掷飞镖"，通过统计大量随机尝试来推断整体规律。
            </p>
            <p>
              如果你对物理或计算机模拟感兴趣，这类研究正是连接理论和计算的桥梁！
            </p>
          </div>
        </section>

        {/* 原文信息 */}
        <section className="text-center text-sm text-slate-400 py-4">
          <p>论文原文：arXiv:2603.25715</p>
          <p className="mt-1">作者：Carlos I. Pérez Sánchez</p>
        </section>
      </main>

      {/* 底部 */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-slate-200 mt-12">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-sm text-slate-500">
          论文解读 · 仅供参考学习
        </div>
      </footer>
    </div>
  )
}

export default App