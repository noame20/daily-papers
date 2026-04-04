import { useState, useEffect } from 'react'
import './App.css'

// 论文信息
const paperInfo = {
  title: 'CORAL: 迈向自主多智能体进化',
  subtitle: '用于开放式发现的自主多智能体进化框架',
  authors: '敖渠、周汉正、周子健 等 (MIT & NUS)',
  cnTitle: 'CORAL：迈向自主多智能体进化',
  tagline: '让AI agents自己学会探索未知世界，不再需要人类手把手教！'
}

// 核心要点数据
const keyPoints = [
  {
    icon: '🧠',
    title: '自主决策',
    desc: '不再用固定规则！AI智能体自己决定怎么探索、尝试什么方向'
  },
  {
    icon: '🤝',
    title: '多智能体协作',
    desc: '多个AI同时工作，共享知识，互相学习，加速发现更好的解法'
  },
  {
    icon: '📚',
    title: '知识积累',
    desc: '像人类科学家一样，记录成功经验和失败教训，不断进步'
  }
]

// 技术流程步骤
const processSteps = [
  { num: '1', title: '检索', desc: '从记忆库中找到相关经验', icon: '🔍' },
  { num: '2', title: '提议', desc: 'AI提出一个新的解决方案', icon: '💡' },
  { num: '3', title: '评估', desc: '测试这个方案的效果', icon: '✅' },
  { num: '4', title: '更新', desc: '把新学到的东西存到记忆库', icon: '💾' }
]

// 核心机制
const mechanisms = [
  {
    title: '共享持久记忆',
    icon: '🗄️',
    items: [
      'attempts/: 记录所有尝试过的方案和效果',
      'notes/: 存放观察、反思和学习笔记',
      'skills/: 保存可复用的技能和工具'
    ]
  },
  {
    title: '异步多智能体',
    icon: '⚡',
    items: [
      '每个智能体独立工作在自己的"隔间"',
      '通过共享文件交流，不互相干扰',
      '可以同时探索不同方向'
    ]
  },
  {
    title: '心跳机制',
    icon: '💓',
    items: [
      '定期反思：避免陷入死胡同',
      '整合发现：把零散成果系统化',
      '重新定向：调整搜索方向'
    ]
  }
]

// 实验结果
const results = [
  { task: 'GPU内核优化', metric: '性能提升', value: '20%', detail: '从1363周期降到1103周期' },
  { task: '数学问题', metric: '新SOTA', value: '8/11', detail: '在11个任务中8个达到最优' },
  { task: '搜索效率', metric: '提升率', value: '2.5×', detail: '比传统方法高2.5倍' },
  { task: '评估次数', metric: '节省', value: '10×', detail: '用更少的测试次数达到更好结果' }
]

// 三大贡献
const contributions = [
  {
    num: '01',
    title: '新范式',
    desc: '提出自主进化作为开放式发现的新范式，区别于固定的进化搜索和单次完成的智能体'
  },
  {
    num: '02',
    title: '框架设计',
    desc: '设计CORAL框架，通过共享记忆、异步执行和心跳机制实现真正的自主进化'
  },
  {
    num: '03',
    title: '实验验证',
    desc: '在数学、系统优化等任务上验证有效性，4个智能体协作能发现单智能体找不到的解'
  }
]

function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-50">
      {/* 顶部导航 */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-5'
      }`}>
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🐠</span>
            <span className={`font-bold text-xl ${scrolled ? 'text-slate-800' : 'text-white'}`}>CORAL</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#summary" className={`${scrolled ? 'text-slate-600' : 'text-white/90'} hover:text-blue-500 transition`}>摘要</a>
            <a href="#innovation" className={`${scrolled ? 'text-slate-600' : 'text-white/90'} hover:text-blue-500 transition`}>创新点</a>
            <a href="#method" className={`${scrolled ? 'text-slate-600' : 'text-white/90'} hover:text-blue-500 transition`}>方法</a>
            <a href="#results" className={`${scrolled ? 'text-slate-600' : 'text-white/90'} hover:text-blue-500 transition`}>成果</a>
          </div>
        </div>
      </nav>

      {/* Hero区域 */}
      <header className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>
        <div className="relative max-w-6xl mx-auto px-4 pt-32 pb-24">
          <div className="mb-6">
            <span className="inline-block bg-blue-500/20 border border-blue-400/30 text-blue-300 px-4 py-1.5 rounded-full text-sm mb-4">
              论文解读 · 2024
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {paperInfo.cnTitle}
          </h1>
          <p className="text-xl md:text-2xl text-blue-200 mb-6 max-w-3xl">
            {paperInfo.tagline}
          </p>
          <p className="text-slate-400 mb-8">
            原文：<span className="text-slate-300">{paperInfo.authors}</span>
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#summary" className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition flex items-center gap-2">
              开始了解
              <span>↓</span>
            </a>
            <a href="https://github.com/Human-Agent-Society/CORAL" target="_blank" rel="noopener" className="bg-slate-700 hover:bg-slate-600 text-white px-6 py-3 rounded-lg font-medium transition">
              GitHub源码
            </a>
          </div>
        </div>
        <div className="h-16 bg-gradient-to-b from-transparent to-slate-50"></div>
      </header>

      {/* 摘要部分 */}
      <section id="summary" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-slate-800 mb-6">这篇论文要解决什么问题？</h2>
            <div className="prose prose-lg text-slate-600">
              <p className="mb-4">
                想象一下：人类科学家想要发现一个<strong className="text-slate-800">没有标准答案</strong>的问题的最优解——
                比如写出最快的GPU代码、设计最优的物流方案。这时候，AI需要像真正的科学家一样，
                <strong className="text-slate-800">不断尝试、总结经验、互相学习</strong>，而不是一次性给出答案。
              </p>
              <p className="mb-4">
                但现有的AI方法有个问题：它们通常使用<strong className="text-slate-800">固定的规则</strong>来指导搜索，
                就像按照菜谱做菜一样。而这篇论文提出的<strong className="text-blue-600">CORAL</strong>，
                让AI智能体自己决定怎么探索！
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-100">
            <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <span className="text-2xl">💡</span> 核心思想
            </h3>
            <p className="text-slate-600 leading-relaxed">
              把<strong>多个AI智能体</strong>组织起来，让它们像一支研究团队一样工作——
              各自探索、互相交流、共享发现。通过这种方式，AI能够<strong>自主地发现越来越好的解决方案</strong>，
              而不需要人类科学家一步步指导。
            </p>
          </div>
        </div>
      </section>

      {/* 核心创新点 */}
      <section id="innovation" className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">CORAL的三大核心创新</h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            不同于传统的固定规则搜索，CORAL让AI智能体真正"活"起来
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {keyPoints.map((point, i) => (
              <div key={i} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-6 border border-slate-200 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{point.icon}</div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{point.title}</h3>
                <p className="text-slate-600">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 方法论详解 */}
      <section id="method" className="py-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-4">CORAL是怎么工作的？</h2>
          <p className="text-slate-500 text-center mb-12 max-w-2xl mx-auto">
            想象一个AI研究团队的工作方式
          </p>

          {/* 核心流程 */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">四步循环</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {processSteps.map((step, i) => (
                <div key={i} className="relative">
                  <div className="bg-white rounded-xl p-5 border-2 border-slate-200 hover:border-blue-400 transition text-center">
                    <div className="w-10 h-10 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold mx-auto mb-3">
                      {step.num}
                    </div>
                    <div className="text-3xl mb-2">{step.icon}</div>
                    <h4 className="font-bold text-slate-800 mb-1">{step.title}</h4>
                    <p className="text-sm text-slate-500">{step.desc}</p>
                  </div>
                  {i < 3 && (
                    <div className="hidden md:block absolute top-1/2 -right-6 transform -translate-y-1/2 text-slate-300 text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 三大机制 */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-slate-800 mb-8 text-center">三大核心机制</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {mechanisms.map((mech, i) => (
                <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-4">
                    <h4 className="text-white font-bold text-lg flex items-center gap-2">
                      <span className="text-2xl">{mech.icon}</span>
                      {mech.title}
                    </h4>
                  </div>
                  <div className="p-5">
                    <ul className="space-y-2">
                      {mech.items.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-slate-600 text-sm">
                          <span className="text-blue-500 mt-0.5">•</span>
                          <code className="bg-slate-100 px-1.5 py-0.5 rounded text-xs text-slate-700">{item.split(':')[0]}</code>
                          <span>{item.split(':')[1]}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 工作流程图 */}
          <div className="bg-white rounded-2xl border border-slate-200 p-8">
            <h3 className="text-xl font-bold text-slate-800 mb-6 text-center">多智能体协作示意图</h3>
            <div className="flex flex-col items-center">
              <div className="w-full max-w-3xl">
                {/* 中心hub */}
                <div className="flex flex-col items-center mb-8">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg">
                    <div className="text-2xl mb-1">🗄️</div>
                    <div className="font-bold">共享知识库</div>
                    <div className="text-sm text-blue-100">Attempts · Notes · Skills</div>
                  </div>
                </div>

                {/* 四个智能体 */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { name: 'Agent 1', color: 'from-green-400 to-green-500', emoji: '🤖' },
                    { name: 'Agent 2', color: 'from-purple-400 to-purple-500', emoji: '🤖' },
                    { name: 'Agent 3', color: 'from-orange-400 to-orange-500', emoji: '🤖' },
                    { name: 'Agent 4', color: 'from-pink-400 to-pink-500', emoji: '🤖' }
                  ].map((agent, i) => (
                    <div key={i} className={`bg-gradient-to-br ${agent.color} text-white p-4 rounded-xl text-center`}>
                      <div className="text-3xl mb-2">{agent.emoji}</div>
                      <div className="font-bold">{agent.name}</div>
                      <div className="text-xs text-white/80 mt-1">独立工作 + 共享知识</div>
                    </div>
                  ))}
                </div>

                {/* 连接线说明 */}
                <div className="mt-6 text-center text-slate-500 text-sm">
                  <p>每个智能体独立探索不同方向，通过共享文件互相学习</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 实验结果 */}
      <section id="results" className="bg-slate-900 py-16 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">惊人的实验成果</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            在多项任务上超越传统方法，取得新的最优成绩
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {results.map((result, i) => (
              <div key={i} className="bg-slate-800/50 backdrop-blur rounded-xl p-6 border border-slate-700 text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">{result.value}</div>
                <div className="text-slate-300 font-medium mb-1">{result.task}</div>
                <div className="text-slate-500 text-sm">{result.metric}: {result.detail}</div>
              </div>
            ))}
          </div>

          {/* 性能对比图 */}
          <div className="bg-white/5 rounded-2xl p-8 border border-slate-700">
            <h3 className="text-xl font-bold mb-6 text-center">GPU内核优化任务对比</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-32 text-right text-slate-300 text-sm">之前最优</div>
                <div className="flex-1 bg-slate-700 rounded-full h-8 relative overflow-hidden">
                  <div className="bg-slate-500 h-full rounded-full flex items-center justify-end pr-4 text-white text-sm" style={{width: '100%'}}>
                    1363 周期
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-right text-slate-300 text-sm">单智能体</div>
                <div className="flex-1 bg-slate-700 rounded-full h-8 relative overflow-hidden">
                  <div className="bg-blue-500 h-full rounded-full flex items-center justify-end pr-4 text-white text-sm" style={{width: '99%'}}>
                    1350 周期
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-32 text-right text-slate-300 text-sm">4智能体协作</div>
                <div className="flex-1 bg-slate-700 rounded-full h-8 relative overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-400 h-full rounded-full flex items-center justify-end pr-4 text-white text-sm font-bold" style={{width: '80%'}}>
                    1103 周期 ⭐ 新纪录！
                  </div>
                </div>
              </div>
            </div>
            <p className="text-center text-cyan-400 mt-6 font-medium">
              性能提升 20%！周期数从147,734降到1103
            </p>
          </div>
        </div>
      </section>

      {/* 三大贡献总结 */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-800 text-center mb-12">论文的三大贡献</h2>
          <div className="space-y-6">
            {contributions.map((c, i) => (
              <div key={i} className="flex gap-6 items-start bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md transition">
                <div className="text-5xl font-bold text-blue-100">{c.num}</div>
                <div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{c.title}</h3>
                  <p className="text-slate-600">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 总结 */}
      <section className="bg-gradient-to-br from-blue-600 to-cyan-600 py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">这意味着什么？</h2>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            CORAL展示了一个很有前景的方向：让AI智能体像真正的科学家一样自主协作、
            不断探索、互相学习。随着技术发展，这种<strong>自主进化</strong>的方法
            有望在更多科学和工程问题上取得突破。
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://github.com/Human-Agent-Society/CORAL" target="_blank" rel="noopener" className="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition">
              查看完整代码
            </a>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-slate-900 text-slate-400 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="mb-2">论文：CORAL: Towards Autonomous Multi-Agent Evolution for Open-Ended Discovery</p>
          <p className="text-sm">作者：敖渠、周汉正、周子健 等 (MIT, NUS, 斯坦福等)</p>
          <p className="text-sm mt-2">本页面由AI自动生成，用于论文解读</p>
        </div>
      </footer>
    </div>
  )
}

export default App