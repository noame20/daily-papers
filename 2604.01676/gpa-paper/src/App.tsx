import { useState, useEffect } from 'react'
import './App.css'

// 论文数据
const paperData = {
  title: "GPA: Learning GUI Process Automation from Demonstrations",
  cnTitle: "GPA：从演示中学习图形用户界面流程自动化",
  authors: ["Zirui Zhao", "Junhao Liew", "Yan Yang", "Wenzhuo Yang", "Ziyang Luo", "Doyen Sahoo", "Silvio Savarese", "Junnan Li"],
  affiliation: "Salesforce AI Research",
  year: "2026"
}

// 核心创新点
const innovations = [
  {
    icon: "🎯",
    title: "智能定位",
    subtitle: "Sequential Monte Carlo",
    desc: "像人一样，根据周围元素的位置关系来找到目标按钮。即使界面变大变小，也能准确找到"
  },
  {
    icon: "✅",
    title: "可靠执行",
    subtitle: "Readiness Calibration",
    desc: "每次点击前都会检查是否准备就绪，确保动作不会在错误的时机执行"
  },
  {
    icon: "🔒",
    title: "隐私保护",
    subtitle: "Fully Local Execution",
    desc: "所有操作都在本地完成，截图永远不会上传到云端，保护你的数据安全"
  },
  {
    icon: "⚡",
    title: "极速运行",
    subtitle: "10× Faster",
    desc: "比传统AI代理快10倍，平均33秒完成复杂任务，而不是329秒"
  }
]

// 方法流程
const workflowSteps = [
  { phase: "演示阶段", icon: "📝", steps: ["你操作一次电脑", "系统记录每一步", "AI分析提取变量", "生成工作流模板"] },
  { phase: "执行阶段", icon: "🚀", steps: ["加载工作流程", "解析当前界面", "智能定位目标", "自动执行动作"] }
]

// 实验结果
const results = [
  { metric: "成功率", gpa: "100%", gemini: "89%", color: "#10b981" },
  { metric: "平均耗时", gpa: "33.7秒", gemini: "329.3秒", color: "#6366f1" },
  { metric: "简单任务", gpa: "100%", gemini: "93%", color: "#10b981" },
  { metric: "复杂任务", gpa: "100%", gemini: "88%", color: "#10b981" }
]

// 与其他方案对比
const comparison = [
  { feature: "学习方式", gpa: "只需演示1次", traditional: "手动编写代码", ai: "需要提示词工程" },
  { feature: "运行时", gpa: "本地轻量模型", traditional: "无AI", ai: "每次动作都要调用LLM" },
  { feature: "可靠性", gpa: "确定性，可靠重放", traditional: "界面变化易崩溃", ai: "非确定性，有随机风险" },
  { feature: "隐私", gpa: "完全本地，数据不出门", traditional: "本地", ai: "截图上传云端" },
  { feature: "速度", gpa: "快（~33秒）", traditional: "快", ai: "慢（~329秒）" }
]

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [animatedProgress, setAnimatedProgress] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🤖</span>
            <span className="font-bold text-lg text-slate-800">GPA 论文解读</span>
          </div>
          <div className="hidden md:flex gap-4 text-sm">
            <a href="#overview" className="text-slate-600 hover:text-blue-600 transition">概述</a>
            <a href="#method" className="text-slate-600 hover:text-blue-600 transition">方法</a>
            <a href="#innovation" className="text-slate-600 hover:text-blue-600 transition">创新</a>
            <a href="#result" className="text-slate-600 hover:text-blue-600 transition">结果</a>
            <a href="#compare" className="text-slate-600 hover:text-blue-600 transition">对比</a>
          </div>
        </nav>
      </header>

      {/* Hero区域 */}
      <section className="max-w-6xl mx-auto px-4 pt-12 pb-16">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span>📄</span> 论文解读
            <span className="mx-2">•</span>
            <span>Salesforce AI Research 2026</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4 leading-tight">
            {paperData.cnTitle}
          </h1>
          <p className="text-lg text-slate-600 mb-6 max-w-2xl mx-auto">
            一种只需演示一次就能自动化完成电脑操作的AI系统
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-sm text-slate-500">
            {paperData.authors.slice(0, 4).map((author, i) => (
              <span key={i} className="bg-slate-100 px-3 py-1 rounded-full">{author}</span>
            ))}
            <span className="text-slate-400">et al.</span>
          </div>
        </div>

        {/* 快速统计卡片 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center">
            <div className="text-3xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-blue-600">100%</div>
            <div className="text-sm text-slate-500">任务成功率</div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center">
            <div className="text-3xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-green-600">10×</div>
            <div className="text-sm text-slate-500">速度提升</div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center">
            <div className="text-3xl mb-2">🔒</div>
            <div className="text-2xl font-bold text-purple-600">100%</div>
            <div className="text-sm text-slate-500">本地隐私保护</div>
          </div>
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100 text-center">
            <div className="text-3xl mb-2">📝</div>
            <div className="text-2xl font-bold text-orange-600">1次</div>
            <div className="text-sm text-slate-500">只需演示一次</div>
          </div>
        </div>
      </section>

      {/* 什么是GPA */}
      <section id="overview" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              什么是 GPA？
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="bg-blue-50 rounded-2xl p-6 mb-6">
                <h3 className="font-bold text-lg text-blue-800 mb-3">💡 简单来说</h3>
                <p className="text-slate-700 leading-relaxed">
                  GPA（GUI Process Automation）是一种<strong>只需要演示一次</strong>，就能自动帮你完成重复性电脑操作的技术。
                </p>
                <p className="text-slate-700 leading-relaxed mt-3">
                  想象你教一个新手<strong>只需做一次</strong>，然后他就能<strong>一模一样地重复100次</strong>——这就是GPA。
                </p>
              </div>

              <div className="bg-orange-50 rounded-2xl p-6">
                <h3 className="font-bold text-lg text-orange-800 mb-3">🎯 能做什么？</h3>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span>自动填写表格、处理报销单</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span>自动搜索航班、预订酒店</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span>自动处理邮件、下载附件</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span>✅</span>
                    <span>自动操作企业软件（SAP、HR系统等）</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-slate-900 rounded-2xl p-6 text-white">
              <h3 className="font-bold text-lg mb-4">📊 论文标题</h3>
              <p className="text-slate-300 text-sm mb-4">{paperData.title}</p>
              <div className="border-t border-slate-700 pt-4">
                <div className="text-sm text-slate-400 mb-2">作者团队</div>
                <p className="text-white">{paperData.affiliation}</p>
              </div>
              <div className="mt-4 p-4 bg-slate-800 rounded-xl">
                <div className="text-sm text-slate-400 mb-1">核心理念</div>
                <p className="text-blue-400 font-medium">"Many GUI operations may not require expensive LLM agents"</p>
                <p className="text-slate-400 text-xs mt-2">（许多GUI操作可能不需要昂贵的LLM代理）</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 工作原理 */}
      <section id="method" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GPA 是怎样工作的？
            </span>
          </h2>

          {/* 阶段切换 */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex bg-slate-100 rounded-xl p-1">
              {workflowSteps.map((phase, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all ${
                    activeTab === i
                      ? 'bg-white shadow text-blue-600'
                      : 'text-slate-600 hover:text-slate-800'
                  }`}
                >
                  {phase.icon} {phase.phase}
                </button>
              ))}
            </div>
          </div>

          {/* 流程图 */}
          <div className="bg-white rounded-2xl shadow-lg border border-slate-100 p-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {workflowSteps[activeTab].steps.map((step, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`flex flex-col items-center ${i === 0 ? 'opacity-50' : ''}`}>
                    {i > 0 && (
                      <div className="hidden md:block absolute left-0 w-full h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200" />
                    )}
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center text-white text-2xl shadow-lg">
                      {i + 1}
                    </div>
                    <div className="mt-3 text-sm font-medium text-slate-700 text-center max-w-24">
                      {step}
                    </div>
                  </div>
                  {i < workflowSteps[activeTab].steps.length - 1 && (
                    <div className="hidden md:flex items-center text-slate-300">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-slate-50 rounded-xl">
              <div className="text-sm text-slate-600">
                {activeTab === 0 ? (
                  <span>🎬 <strong>演示阶段</strong>：你操作一次，系统自动记录并学习整个流程</span>
                ) : (
                  <span>🎯 <strong>执行阶段</strong>：GPA自动解析屏幕、定位目标、执行动作</span>
                )}
              </div>
            </div>
          </div>

          {/* UI Graph 可视化 */}
          <div className="mt-12 grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-slate-800 mb-4">🔵 界面图（UI Graph）</h3>
              <p className="text-slate-600 text-sm mb-4">
                GPA 把每个界面转换成一个"图"，图上的每个点是一个界面元素（按钮、输入框等），边表示它们的空间关系。
              </p>
              <div className="bg-white rounded-xl p-4 relative">
                <svg viewBox="0 0 300 180" className="w-full h-40">
                  {/* 背景网格 */}
                  <defs>
                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="300" height="180" fill="url(#grid)"/>

                  {/* 模拟界面元素 */}
                  <rect x="30" y="20" width="80" height="30" rx="4" fill="#e0e7ff" stroke="#6366f1" strokeWidth="2"/>
                  <text x="70" y="40" textAnchor="middle" fontSize="10" fill="#4338ca">标题</text>

                  <rect x="30" y="60" width="240" height="40" rx="4" fill="#fef3c7" stroke="#f59e0b" strokeWidth="2"/>
                  <text x="150" y="85" textAnchor="middle" fontSize="10" fill="#92400e">输入框</text>

                  <circle cx="60" cy="130" r="15" fill="#d1fae5" stroke="#10b981" strokeWidth="2"/>
                  <text x="60" y="134" textAnchor="middle" fontSize="8" fill="#065f46">☑</text>

                  <rect x="90" y="115" width="60" height="30" rx="4" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2"/>
                  <text x="120" y="134" textAnchor="middle" fontSize="8" fill="#5b21b6">按钮</text>

                  <rect x="160" y="115" width="60" height="30" rx="4" fill="#ede9fe" stroke="#8b5cf6" strokeWidth="2"/>
                  <text x="190" y="134" textAnchor="middle" fontSize="8" fill="#5b21b6">按钮</text>

                  {/* 边和连接 */}
                  <line x1="110" y1="50" x2="70" y2="115" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
                  <line x1="150" y1="100" x2="60" y2="115" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
                  <line x1="150" y1="100" x2="120" y2="115" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>
                  <line x1="150" y1="100" x2="190" y2="115" stroke="#94a3b8" strokeWidth="1" strokeDasharray="4"/>

                  {/* 高亮目标 */}
                  <circle cx="60" cy="130" r="22" fill="none" stroke="#ef4444" strokeWidth="3" strokeDasharray="4"/>
                  <text x="60" y="160" textAnchor="middle" fontSize="9" fill="#ef4444" fontWeight="bold">目标</text>
                </svg>
              </div>
              <p className="text-xs text-slate-500 mt-3 text-center">
                节点=界面元素 | 边=空间关系 | 红框=目标点击位置
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6">
              <h3 className="font-bold text-lg text-slate-800 mb-4">🎯 SMC 定位原理</h3>
              <p className="text-slate-600 text-sm mb-4">
                当目标元素难以直接匹配时，SMC（序贯蒙特卡洛）方法利用"邻居节点"来推断位置——就像你根据周围地标找路一样。
              </p>
              <div className="bg-white rounded-xl p-4 relative">
                <svg viewBox="0 0 300 180" className="w-full h-40">
                  <defs>
                    <pattern id="grid2" width="20" height="20" patternUnits="userSpaceOnUse">
                      <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f1f5f9" strokeWidth="1"/>
                    </pattern>
                  </defs>
                  <rect width="300" height="180" fill="url(#grid2)"/>

                  {/* 演示界面 */}
                  <text x="30" y="15" fontSize="9" fill="#64748b">演示界面</text>
                  <rect x="30" y="20" width="100" height="60" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
                  <rect x="40" y="30" width="30" height="20" rx="2" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1"/>
                  <text x="55" y="43" textAnchor="middle" fontSize="7" fill="#1d4ed8">文字A</text>
                  <circle cx="100" cy="50" r="8" fill="#fca5a5" stroke="#ef4444" strokeWidth="2"/>
                  <text x="100" y="70" textAnchor="middle" fontSize="7" fill="#dc2626">目标</text>

                  {/* 箭头 */}
                  <path d="M140 50 L160 50" stroke="#94a3b8" strokeWidth="2" markerEnd="url(#arrowhead)"/>
                  <defs>
                    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
                      <polygon points="0 0, 10 3.5, 0 7" fill="#94a3b8"/>
                    </marker>
                  </defs>

                  {/* 执行界面 */}
                  <text x="170" y="15" fontSize="9" fill="#64748b">执行界面（放大1.5倍）</text>
                  <rect x="170" y="20" width="120" height="80" rx="4" fill="#f1f5f9" stroke="#cbd5e1" strokeWidth="1"/>
                  <rect x="180" y="30" width="40" height="25" rx="2" fill="#bfdbfe" stroke="#3b82f6" strokeWidth="1"/>
                  <text x="200" y="46" textAnchor="middle" fontSize="7" fill="#1d4ed8">文字A</text>
                  <circle cx="240" cy="65" r="12" fill="#bbf7d0" stroke="#22c55e" strokeWidth="2" strokeDasharray="4"/>
                  <text x="240" y="115" textAnchor="middle" fontSize="7" fill="#16a34a">预测位置✓</text>

                  {/* 关系线 */}
                  <line x1="220" y1="42" x2="228" y2="55" stroke="#22c55e" strokeWidth="1" strokeDasharray="2"/>
                  <text x="230" y="35" fontSize="6" fill="#16a34a">邻居帮助</text>
                </svg>
              </div>
              <p className="text-xs text-slate-500 mt-3 text-center">
                通过"文字A"等邻居节点，推算出放大后"目标"的新位置
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 核心创新 */}
      <section id="innovation" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              核心技术亮点
            </span>
          </h2>
          <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
            GPA 的三大核心优势，让它比传统方法和现有AI代理都更强大
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {innovations.map((item, i) => (
              <div key={i} className="group bg-gradient-to-br from-slate-50 to-white rounded-2xl p-6 border border-slate-100 hover:shadow-xl hover:border-blue-200 transition-all duration-300">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg text-slate-800 mb-1">{item.title}</h3>
                <p className="text-xs text-blue-600 font-medium mb-3">{item.subtitle}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* 可靠性检查可视化 */}
          <div className="mt-12 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8">
            <h3 className="font-bold text-xl text-slate-800 mb-6 text-center">🛡️ Readiness Check（就绪检查）机制</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-blue-100 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">📸</span>
                </div>
                <p className="text-sm text-slate-600">截图当前界面</p>
              </div>
              <div className="text-2xl text-slate-300">→</div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-purple-100 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">🔍</span>
                </div>
                <p className="text-sm text-slate-600">解析UI图</p>
              </div>
              <div className="text-2xl text-slate-300">→</div>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
                  <span className="text-3xl">📊</span>
                </div>
                <p className="text-sm text-slate-600">计算置信度</p>
              </div>
              <div className="text-2xl text-slate-300">→</div>
              <div className="text-center">
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 ${animatedProgress ? 'bg-green-100' : 'bg-slate-100'}`}>
                  <span className="text-3xl">✅</span>
                </div>
                <p className="text-sm text-slate-600">置信度 &gt; 阈值？</p>
              </div>
            </div>
            <p className="text-center text-slate-600 text-sm mt-6">
              只有当置信度超过设定阈值时，GPA才会执行动作，否则会重试
            </p>
          </div>
        </div>
      </section>

      {/* 实验结果 */}
      <section id="result" className="py-16 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              实验结果
            </span>
          </h2>
          <p className="text-slate-600 text-center mb-12">
            16个桌面GUI任务的测试结果，GPA全面领先
          </p>

          {/* 结果卡片 */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {results.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6">
                <h3 className="font-bold text-slate-800 mb-4">{item.metric}</h3>
                <div className="flex items-center gap-6">
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">GPA</span>
                      <span className="font-bold text-green-600">{item.gpa}</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-full transition-all duration-1000"
                        style={{ width: animatedProgress ? (item.gpa === '100%' ? '100%' : '35%') : '0%' }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-600">Gemini</span>
                      <span className="font-bold text-slate-400">{item.gemini}</span>
                    </div>
                    <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-slate-300 to-slate-400 rounded-full transition-all duration-1000"
                        style={{ width: animatedProgress ? '35%' : '0%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 大字强调 */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-blue-100">GPA 成功率</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">89%</div>
                <p className="text-blue-100">Gemini 成功率</p>
              </div>
              <div>
                <div className="text-5xl font-bold mb-2">10×</div>
                <p className="text-blue-100">速度提升</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 三者对比 */}
      <section id="compare" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              GPA vs 传统RPA vs AI代理
            </span>
          </h2>
          <p className="text-slate-600 text-center mb-12">
            工作方式、可靠性、隐私保护的全方位对比
          </p>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-4 px-4 font-bold text-slate-800">特性</th>
                  <th className="text-center py-4 px-4 font-bold text-blue-600 bg-blue-50 rounded-t-xl">GPA ✨</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-600">传统RPA</th>
                  <th className="text-center py-4 px-4 font-medium text-slate-600">VLM AI代理</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row, i) => (
                  <tr key={i} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-4 px-4 font-medium text-slate-700">{row.feature}</td>
                    <td className="py-4 px-4 text-center bg-blue-50/50">
                      <span className="inline-flex items-center gap-1 text-blue-700 font-medium">
                        {row.gpa.includes('✅') ? '✅' : ''}{row.gpa}
                      </span>
                    </td>
                    <td className="py-4 px-4 text-center text-slate-600">{row.traditional}</td>
                    <td className="py-4 px-4 text-center text-slate-600">{row.ai}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 bg-amber-50 rounded-xl p-6">
            <h3 className="font-bold text-amber-800 mb-3">⚠️ GPA 的局限性</h3>
            <ul className="space-y-2 text-slate-700">
              <li>• <strong>没有推理能力</strong>：GPA是"录制-回放"系统，不会根据情况做判断</li>
              <li>• <strong>日期选择等需要推理的任务</strong>：如果界面需要判断当前状态（如选择特定日期），GPA可能无法正确工作</li>
              <li>• <strong>无法处理未记录的情况</strong>：如果流程中出现演示中没有的步骤，GPA不知道如何处理</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 总结 */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">📌 总结</h2>
          <div className="space-y-6 text-lg text-slate-300">
            <p>
              GPA 展示了<strong className="text-white">"演示一次，永久自动化"</strong>的可能性。
            </p>
            <p>
              通过<strong className="text-blue-400"> UI图 + SMC定位 + 就绪检查</strong>的组合，
              GPA 实现了<strong className="text-green-400">100%成功率</strong>和<strong className="text-green-400">10倍速度提升</strong>，
              同时<strong className="text-purple-400">完全保护隐私</strong>。
            </p>
            <p>
              这篇论文的核心洞察是：<br/>
              <em className="text-white">"许多GUI自动化任务，其实不需要昂贵的LLM，用更简单、更确定、更快速的方法就能完成。"</em>
            </p>
          </div>

          <div className="mt-12 inline-flex flex-wrap justify-center gap-4">
            <a
              href="https://www.salesforceairesearch.com/gpa"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-slate-900 rounded-full font-medium hover:bg-slate-100 transition"
            >
              🔗 查看原论文
            </a>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center text-sm">
          <p>论文解读 · {paperData.affiliation} · {paperData.year}</p>
          <p className="mt-2">由 AI 生成，仅供学习参考</p>
        </div>
      </footer>
    </div>
  )
}

export default App
