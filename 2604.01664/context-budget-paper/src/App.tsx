import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'

// 论文信息
const paperInfo = {
  title: "ContextBudget",
  cnTitle: `ContextBudget: 让AI"记忆"更聪明`,
  subtitle: "预算感知上下文管理助力长程搜索智能体",
  authors: "浙江大学 & 阿里巴巴集团",
  year: "2025"
}

// 为高中生简化的核心概念
const concepts = [
  {
    title: `AI的"记忆困境"`,
    desc: `就像人的工作记忆有限一样，AI处理信息的能力也有上限。当AI需要处理很长的对话或任务时，它可能会"忘记"之前的重要信息。`,
    icon: "🧠"
  },
  {
    title: "上下文是什么？",
    desc: `上下文就是AI需要记住的所有之前对话和推理过程。想象成AI的"草稿纸"——纸越大，能写的东西越多，但也有极限。`,
    icon: "📝"
  },
  {
    title: "预算感知的智能压缩",
    desc: "BACM教会AI根据剩余空间智能决定：哪些信息必须保留，哪些可以压缩，遇到空间紧张时该怎么办。",
    icon: "💡"
  }
]

// 核心创新点
const innovations = [
  {
    title: "先观察，再行动",
    cn: `在处理新信息前，先看看还有多少"草稿纸空间"`,
    detail: "传统方法直接添加信息，BACM先检查剩余空间，再决定是否需要压缩已有内容。",
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "三级压缩模式",
    cn: "灵活选择：不压缩 / 部分压缩 / 全部压缩",
    detail: "NULL(不压缩)：空间充足，正常工作\nPARTIAL(部分压缩)：选择性地合并一些早期内容\nFULL(全部压缩)：空间紧张时，全面压缩历史记录",
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "渐进式学习",
    cn: "从易到难训练AI的空间管理能力",
    detail: "训练时使用逐渐收紧的预算课程：先在宽松环境下学习，再适应紧张环境，类似人类的学习曲线。",
    color: "from-orange-500 to-yellow-500"
  }
]

// 实验结果数据
const results = [
  { setting: "简单任务(2目标)", baseline: "0.84", ours: "0.91", improvement: "+8.3%" },
  { setting: "中等任务(8目标)", baseline: "2.35", ours: "2.79", improvement: "+18.7%" },
  { setting: "困难任务(16目标)", baseline: "2.40", ours: "4.01", improvement: "+67%" },
  { setting: "极难任务(32目标)", baseline: "1.21", ours: "2.94", improvement: "+143%" }
]

// 方法流程步骤
const steps = [
  { num: "1", title: "观察状态", desc: "AI先看看当前剩余多少上下文空间，以及即将处理的信息有多大", color: "bg-blue-500" },
  { num: "2", title: "决策压缩", desc: "根据剩余空间，AI决定是否需要压缩历史记录，以及压缩多少", color: "bg-purple-500" },
  { num: "3", title: "执行操作", desc: "压缩或保留信息，然后添加新观察内容到上下文", color: "bg-orange-500" },
  { num: "4", title: "迭代优化", desc: "通过强化学习不断优化压缩策略，越来越智能", color: "bg-green-500" }
]

// 问题解答
const qaItems = [
  {
    question: `为什么AI需要"管理"上下文？`,
    answer: "AI的上下文窗口就像手机的运行内存——空间有限但任务需求无限。如果不加管理，AI会要么遗忘重要信息（过度压缩），要么因为空间不足而崩溃（上下文溢出）。"
  },
  {
    question: "BACM和之前的压缩方法有什么不同？",
    answer: `之前的方法是"静态压缩"——按固定规则压缩，不考虑当前还有多少空间。BACM是"动态感知"——根据实际剩余空间来决定压缩时机和强度，就像一个智能的储物管理员。`
  },
  {
    question: "这个研究有什么用？",
    answer: "可以让AI更好地完成需要长时间推理的任务，比如：多步骤的复杂问答、长时间网页浏览与信息整合、复杂的代码调试与修改等。"
  },
  {
    question: "三种压缩模式具体是什么？",
    answer: "NULL（无压缩）：空间充足，正常添加信息\nPARTIAL（部分压缩）：选择性合并部分早期信息\nFULL（完全压缩）：在空间紧张时，全面压缩所有历史\nAI会自动根据情况选择最合适的模式。"
  }
]

function App() {
  const [budgetLevel, setBudgetLevel] = useState(80)
  const [compressionMode, setCompressionMode] = useState<'NULL' | 'PARTIAL' | 'FULL'>('NULL')
  const [animatedProgress, setAnimatedProgress] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => setAnimatedProgress(budgetLevel), 100)
    return () => clearTimeout(timer)
  }, [budgetLevel])

  const getCompressionAdvice = (budget: number) => {
    if (budget > 60) return { mode: 'NULL', color: 'text-green-600', bgColor: 'bg-green-50', text: '空间充足，无需压缩' }
    if (budget > 30) return { mode: 'PARTIAL', color: 'text-yellow-600', bgColor: 'bg-yellow-50', text: '空间适中，建议部分压缩' }
    return { mode: 'FULL', color: 'text-red-600', bgColor: 'bg-red-50', text: '空间紧张，需要完全压缩' }
  }

  const advice = getCompressionAdvice(budgetLevel)

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* 头部 */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">{paperInfo.cnTitle}</h1>
              <p className="text-slate-500 text-sm mt-1">{paperInfo.title} · {paperInfo.authors}</p>
            </div>
            <Badge variant="secondary" className="bg-blue-100 text-blue-700">
              2025年研究
            </Badge>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-10">
        {/* 核心问题引入 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="text-4xl">🔍</span> 研究要解决什么问题？
          </h2>
          <Card className="border-l-4 border-l-blue-500">
            <CardHeader>
              <CardTitle className="text-xl text-slate-700">AI的"记忆瓶颈"</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600 text-lg leading-relaxed">
                就像人类的短时记忆容量有限一样，<strong className="text-blue-600">AI也有"上下文窗口"的限制</strong>。
                当AI需要完成很长、很复杂的任务时，它需要记住之前的所有步骤和发现，但空间是有限的。
              </p>
              <div className="bg-slate-100 rounded-lg p-4">
                <p className="text-slate-700 font-medium mb-2">核心矛盾：</p>
                <ul className="space-y-2 text-slate-600">
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span><strong>过度压缩</strong>：为了省空间删掉太多信息，导致重要证据丢失</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-500">❌</span>
                    <span><strong>压缩不足</strong>：空间被填满，导致任务中断或推理失败</span>
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 核心概念 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="text-4xl">📚</span> 先理解这些概念
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            {concepts.map((c, i) => (
              <Card key={i} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="text-5xl mb-4">{c.icon}</div>
                  <h3 className="font-bold text-lg text-slate-800 mb-2">{c.title}</h3>
                  <p className="text-slate-600 text-sm">{c.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 解决方案 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="text-4xl">💡</span> BACM解决方案
          </h2>
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-800">Budget-Aware Context Management</CardTitle>
              <CardDescription className="text-lg">预算感知的上下文管理系统</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-slate-700 leading-relaxed mb-4">
                BACM的核心思想是：<strong>让AI在做决策之前，先"看看"自己还有多少可用空间</strong>，
                然后根据空间情况动态决定是否压缩、压缩多少、保留哪些信息。
              </p>
              <div className="bg-white/60 rounded-lg p-4 text-slate-700">
                <p className="font-medium mb-2">🎯 一句话理解：</p>
                <p>教会AI成为自己存储空间的智能管理员，既不浪费空间，也不让重要信息"溢出"。</p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 三大创新点 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="text-4xl">🚀</span> 三大核心创新
          </h2>
          <div className="space-y-4">
            {innovations.map((item, i) => (
              <Card key={i} className="overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${item.color}`} />
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="text-3xl font-bold text-slate-300">{i + 1}</span>
                    <div>
                      <CardTitle className="text-xl">{item.title}</CardTitle>
                      <p className="text-purple-600 font-medium mt-1">{item.cn}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 whitespace-pre-line">{item.detail}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* 交互演示 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="text-4xl">🎮</span> 交互演示：AI如何做决策
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>模拟预算感知决策过程</CardTitle>
              <CardDescription>拖动滑块调整剩余上下文空间，看看AI会做出什么决策</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between text-sm font-medium">
                  <span>剩余上下文空间</span>
                  <span className={advice.color}>{budgetLevel}%</span>
                </div>
                <Progress value={animatedProgress} className="h-4" />
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={budgetLevel}
                  onChange={(e) => setBudgetLevel(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
              </div>

              <div className="grid grid-cols-3 gap-3">
                <Button
                  variant={compressionMode === 'NULL' ? 'default' : 'outline'}
                  className={`h-20 text-lg ${compressionMode === 'NULL' ? 'bg-green-500 hover:bg-green-600' : ''}`}
                  onClick={() => setCompressionMode('NULL')}
                >
                  <div>
                    <div className="font-bold">NULL</div>
                    <div className="text-xs opacity-80">不压缩</div>
                  </div>
                </Button>
                <Button
                  variant={compressionMode === 'PARTIAL' ? 'default' : 'outline'}
                  className={`h-20 text-lg ${compressionMode === 'PARTIAL' ? 'bg-yellow-500 hover:bg-yellow-600' : ''}`}
                  onClick={() => setCompressionMode('PARTIAL')}
                >
                  <div>
                    <div className="font-bold">PARTIAL</div>
                    <div className="text-xs opacity-80">部分压缩</div>
                  </div>
                </Button>
                <Button
                  variant={compressionMode === 'FULL' ? 'default' : 'outline'}
                  className={`h-20 text-lg ${compressionMode === 'FULL' ? 'bg-red-500 hover:bg-red-600' : ''}`}
                  onClick={() => setCompressionMode('FULL')}
                >
                  <div>
                    <div className="font-bold">FULL</div>
                    <div className="text-xs opacity-80">全部压缩</div>
                  </div>
                </Button>
              </div>

              <div className={`p-4 rounded-lg ${advice.bgColor}`}>
                <p className="font-bold text-lg">{advice.text}</p>
                <p className="text-sm mt-1 opacity-80">
                  {advice.mode === 'NULL' && '当前空间充足，AI会正常添加新信息，不做任何压缩。'}
                  {advice.mode === 'PARTIAL' && '空间开始紧张，AI会选择性压缩部分早期信息，保留最新的重要内容。'}
                  {advice.mode === 'FULL' && '空间非常紧张！AI必须全面压缩历史记录，确保新信息能够添加进来。'}
                </p>
              </div>

              <p className="text-sm text-slate-500 text-center">
                💡 提示：在实际使用中，AI会根据具体的剩余空间比例自动选择最合适的模式
              </p>
            </CardContent>
          </Card>
        </section>

        {/* 工作流程图 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="text-4xl">🔄</span> 工作流程图解
          </h2>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <div key={i} className="flex flex-col items-center text-center relative">
                  <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl font-bold mb-3`}>
                    {step.num}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-600 max-w-32">{step.desc}</p>
                  {i < steps.length - 1 && (
                    <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 text-slate-300 text-2xl">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 实验结果 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="text-4xl">📊</span> 实验结果
          </h2>
          <Card>
            <CardHeader>
              <CardTitle>性能对比（F1分数）</CardTitle>
              <CardDescription>BACM-RL vs 基线方法（MEM1）在不同难度任务下的表现</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {results.map((r, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{r.setting}</span>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-red-500 border-red-300">
                          基线: {r.baseline}
                        </Badge>
                        <Badge variant="default" className="bg-green-500">
                          ours: {r.ours}
                        </Badge>
                        <Badge className="bg-blue-600">{r.improvement}</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div className="flex-1 bg-slate-100 rounded-full h-6 overflow-hidden">
                        <div
                          className="bg-red-400 h-full flex items-center justify-end pr-2 text-xs text-white font-medium"
                          style={{ width: `${Math.min(100, (parseFloat(r.baseline) / parseFloat(r.ours)) * 100)}%` }}
                        >
                          {r.baseline}
                        </div>
                      </div>
                      <div className="flex-1 bg-slate-100 rounded-full h-6 overflow-hidden">
                        <div
                          className="bg-green-500 h-full flex items-center justify-end pr-2 text-xs text-white font-medium"
                          style={{ width: '100%' }}
                        >
                          {r.ours}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 font-medium">
                  🎯 关键发现：在极难任务(32目标)上，BACM相比基线提升达<strong>143%</strong>！
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* 关键数据 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="text-4xl">🏆</span> 关键数据一览
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="text-center bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-blue-600 mb-2">1.6×</div>
                <p className="text-sm text-blue-800">在高难度设置下的性能提升</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-green-600 mb-2">143%</div>
                <p className="text-sm text-green-800">32目标任务提升幅度</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-purple-600 mb-2">跨模型</div>
                <p className="text-sm text-purple-800">在7B和30B模型上都有效</p>
              </CardContent>
            </Card>
            <Card className="text-center bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
              <CardContent className="pt-6">
                <div className="text-4xl font-bold text-orange-600 mb-2">4k-16k</div>
                <p className="text-sm text-orange-800">适应不同预算空间</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* 常见问题 */}
        <section>
          <h2 className="text-3xl font-bold text-slate-800 mb-6 flex items-center gap-3">
            <span className="text-4xl">❓</span> 常见问题解答
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {qaItems.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium text-lg">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-slate-600 leading-relaxed">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        {/* 总结 */}
        <section>
          <Card className="bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-bold mb-4">📝 总结</h3>
              <div className="space-y-3 text-slate-200">
                <p>
                  <strong className="text-white">ContextBudget</strong>提出了一种新的思路：
                  让AI在处理信息之前先"看看"自己还有多少空间，然后智能地决定是否需要压缩历史记录。
                </p>
                <p>
                  这种<strong className="text-white">"预算感知"</strong>的方法使得AI能够在严格的空间限制下
                  更好地完成长程推理任务，为构建更强大的AI智能体迈出了重要一步。
                </p>
                <div className="pt-4 border-t border-slate-700">
                  <p className="text-sm text-slate-400">
                    论文来源：浙江大学 & 阿里巴巴集团 | 2025年
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* 底部 */}
      <footer className="bg-slate-100 border-t border-slate-200 mt-12">
        <div className="max-w-5xl mx-auto px-4 py-6 text-center text-slate-500 text-sm">
          本页面由AI生成，用于帮助理解学术论文 | 论文原文请参考arXiv:2604.01664
        </div>
      </footer>
    </div>
  )
}

export default App
