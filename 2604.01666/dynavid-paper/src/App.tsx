import { useState } from 'react'
import './index.css'

// 论文信息
const paperInfo = {
  title: 'DynaVid',
  subtitle: '用合成运动数据生成高度动态视频',
  authors: 'Wonjoon Jin, Jiyun Won, Janghyeok Han 等',
  affiliation: 'POSTECH & Microsoft Research Asia',
  year: '2025'
}

// 核心问题数据
const problems = [
  {
    icon: '📹',
    title: '训练数据稀缺',
    desc: '现有的视频数据集中，高速运动（如霹雳舞、快速旋转）的视频太少了'
  },
  {
    icon: '🎬',
    title: '控制困难',
    desc: '想让相机按特定轨迹运动（比如快速旋转），但模型很难学会'
  },
  {
    icon: '🤖',
    title: '画面失真',
    desc: '用渲染的合成视频训练，生成的画面看起来很假（像游戏画面）'
  }
]

// 解决方案
const solutions = [
  {
    step: '1',
    title: '合成运动数据',
    icon: '🎮',
    desc: '用电脑图形学渲染出「光流」（一种记录物体运动方向的数据），不包含真实画面，所以不会让模型学坏'
  },
  {
    step: '2',
    title: '两阶段生成',
    icon: '🔄',
    desc: '先让「运动生成器」学会怎么动，再让「视频生成器」根据运动生成真实画面'
  },
  {
    step: '3',
    title: '分离设计与控制',
    icon: '🎯',
    desc: '用「普吕克坐标」等控制信号，告诉模型相机该怎么动'
  }
]

// 关键创新点
const innovations = [
  {
    title: '分离运动与外观',
    icon: '⚡',
    highlight: '运动只看光流，外观只看真实画面',
    detail: '这样既能学到酷炫的运动，又保持真实的画面质感'
  },
  {
    title: '合成数据训练策略',
    icon: '🧪',
    highlight: '合成 + 真实数据混合训练',
    detail: '让模型不忘掉正常运动，同时学会极端动作'
  },
  {
    title: '相机可控生成',
    icon: '📷',
    highlight: '输入相机轨迹 → 输出对应视频',
    detail: '可以控制相机做180度旋转等极端运动'
  }
]

// 方法流程
const pipelineSteps = [
  { label: '文本描述', desc: '输入动作描述', color: 'bg-blue-500' },
  { label: '运动生成器', desc: '生成光流图', color: 'bg-purple-500' },
  { label: '视频生成器', desc: '生成真实画面', color: 'bg-green-500' },
  { label: '输出视频', desc: '高度动态结果', color: 'bg-orange-500' }
]

// 实验结果
const results = [
  { metric: 'FVD分数', before: '1775', after: '1351', lower: true, dataset: 'DynaVid-Human测试集' },
  { metric: '视觉质量', before: '0.70', after: '0.74', lower: false, dataset: 'Pexels数据集' },
  { metric: '相机旋转误差', before: '1.15°', after: '0.93°', lower: true, dataset: 'DynaVid-Camera' }
]

// 通俗类比
const analogies = [
  { icon: '🚗', title: '学开车', analogy: '先学「怎么转方向盘、踩油门」（运动），再学「怎么看路、保持车身稳定」（外观）' },
  { icon: '🎨', title: '学画画', analogy: '先确定「人物做什么动作」（光流），再画「穿什么衣服、什么场景」（真实画面）' },
  { icon: '🏃', title: '学跳舞', analogy: '先记住动作套路（运动模式），再配合音乐和表情（视觉风格）' }
]

function App() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/80 border-b border-slate-700">
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              DynaVid 论文解读
            </h1>
            <div className="hidden md:flex gap-6 text-sm">
              <button onClick={() => setActiveTab('overview')} className={`hover:text-cyan-400 transition ${activeTab === 'overview' ? 'text-cyan-400' : 'text-slate-400'}`}>概述</button>
              <button onClick={() => setActiveTab('problem')} className={`hover:text-cyan-400 transition ${activeTab === 'problem' ? 'text-cyan-400' : 'text-slate-400'}`}>问题</button>
              <button onClick={() => setActiveTab('method')} className={`hover:text-cyan-400 transition ${activeTab === 'method' ? 'text-cyan-400' : 'text-slate-400'}`}>方法</button>
              <button onClick={() => setActiveTab('result')} className={`hover:text-cyan-400 transition ${activeTab === 'result' ? 'text-cyan-400' : 'text-slate-400'}`}>结果</button>
            </div>
          </div>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {/* Hero 区域 */}
        <section className="text-center py-16">
          <div className="inline-block px-4 py-1 bg-cyan-500/20 rounded-full text-cyan-400 text-sm mb-6">
            2025 | 视频生成 | AI研究
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              DynaVid
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-4">
            学习用合成运动数据生成高度动态视频
          </p>
          <p className="text-slate-400 mb-8">
            {paperInfo.authors} · {paperInfo.affiliation}
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400">研究机构：</span>
              <span className="text-cyan-400">POSTECH & 微软亚洲研究院</span>
            </div>
            <div className="px-4 py-2 bg-slate-800 rounded-lg border border-slate-700">
              <span className="text-slate-400">关键词：</span>
              <span className="text-cyan-400">视频生成 | 光流 | 运动控制</span>
            </div>
          </div>
        </section>

        {/* 一句话总结 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-lg font-semibold text-cyan-400 mb-3">💡 一句话理解</h2>
            <p className="text-lg text-slate-200 leading-relaxed">
              DynaVid 解决了一个核心问题：<strong className="text-white">现有的AI很难生成「看起来真实」同时「运动很激烈」的视频</strong>。
              它的办法很巧妙——先让AI学会「怎么动」（用合成数据），再让AI学会「长什么样」（用真实数据），两者分开学习最后合在一起！
            </p>
          </div>
        </section>

        {/* 核心问题 */}
        <section className="mb-16" id="problem">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-red-500/20 rounded-lg flex items-center justify-center text-xl">⚠️</span>
            核心问题：AI生成动态视频有多难？
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {problems.map((p, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-red-500/50 transition">
                <div className="text-4xl mb-4">{p.icon}</div>
                <h3 className="text-lg font-semibold text-red-400 mb-2">{p.title}</h3>
                <p className="text-slate-400 text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 通俗类比 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center text-xl">🎯</span>
            通俗理解：就像学跳舞
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {analogies.map((a, i) => (
              <div key={i} className="bg-gradient-to-br from-purple-500/10 to-slate-800/50 rounded-xl p-6 border border-purple-500/30">
                <div className="text-4xl mb-4">{a.icon}</div>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">{a.title}</h3>
                <p className="text-slate-300 text-sm italic">"{a.analogy}"</p>
              </div>
            ))}
          </div>
        </section>

        {/* 方法论 */}
        <section className="mb-16" id="method">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center text-xl">🔧</span>
            解决方法：两阶段生成框架
          </h2>

          {/* 流程图 */}
          <div className="bg-slate-800/50 rounded-2xl p-8 mb-8">
            <h3 className="text-lg font-semibold mb-6 text-center text-slate-300">DynaVid 工作流程</h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-2">
              {pipelineSteps.map((step, i) => (
                <div key={i} className="flex items-center">
                  <div className={`${step.color} rounded-xl px-6 py-4 text-center min-w-[140px]`}>
                    <div className="text-xs text-white/70 mb-1">{step.label}</div>
                    <div className="text-sm font-medium">{step.desc}</div>
                  </div>
                  {i < pipelineSteps.length - 1 && (
                    <div className="hidden md:block text-slate-500 text-2xl mx-2">→</div>
                  )}
                  {i < pipelineSteps.length - 1 && (
                    <div className="md:hidden text-slate-500 text-2xl my-2">↓</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 三步解决方案 */}
          <div className="grid md:grid-cols-3 gap-6">
            {solutions.map((s, i) => (
              <div key={i} className="bg-gradient-to-br from-green-500/10 to-slate-800/50 rounded-xl p-6 border border-green-500/30">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center font-bold">{s.step}</span>
                  <h3 className="text-lg font-semibold text-green-400">{s.title}</h3>
                </div>
                <div className="text-3xl mb-3">{s.icon}</div>
                <p className="text-slate-300 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 关键技术：光流 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center text-xl">🌊</span>
            关键技术：什么是「光流」？
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">📖 通俗解释</h3>
              <p className="text-slate-300 mb-4">
                光流就像是给视频中的每个像素标注「它要去哪里」。
              </p>
              <p className="text-slate-400 text-sm">
                举个例子：拍摄一个人挥手的视频，光流会记录画面中每个点（比如手的某个位置）的运动方向和速度，<strong className="text-white">但不记录那个人长什么样、穿什么衣服</strong>。
              </p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-semibold text-purple-400 mb-4">🎯 为什么用光流？</h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>只记录运动，不记录外观 → 不会把「假画面」学进去</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>可以精确控制 → 想让物体往哪动就往哪动</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span>电脑图形学可以完美生成 → 要多少有多少</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 核心创新点 */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-yellow-500/20 rounded-lg flex items-center justify-center text-xl">✨</span>
            核心创新点
          </h2>
          <div className="space-y-6">
            {innovations.map((inn, i) => (
              <div key={i} className="bg-gradient-to-r from-yellow-500/5 to-slate-800/50 rounded-xl p-6 border border-yellow-500/30">
                <div className="flex items-start gap-4">
                  <span className="text-3xl">{inn.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-yellow-400 mb-2">{inn.title}</h3>
                    <p className="text-cyan-400 font-medium mb-2">{inn.highlight}</p>
                    <p className="text-slate-400 text-sm">{inn.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 实验结果 */}
        <section className="mb-16" id="result">
          <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center text-xl">📊</span>
            实验结果
          </h2>

          {/* 性能对比 */}
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700 mb-8">
            <h3 className="text-lg font-semibold mb-6 text-center">性能提升一览</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-400">指标</th>
                    <th className="text-center py-3 px-4 text-slate-400">之前（其他模型）</th>
                    <th className="text-center py-3 px-4 text-slate-400">之后（DynaVid）</th>
                    <th className="text-left py-3 px-4 text-slate-400">数据集</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((r, i) => (
                    <tr key={i} className="border-b border-slate-700/50">
                      <td className="py-4 px-4 font-medium text-white">{r.metric}</td>
                      <td className="py-4 px-4 text-center text-red-400">{r.before}</td>
                      <td className="py-4 px-4 text-center text-emerald-400 font-bold">{r.after}</td>
                      <td className="py-4 px-4 text-slate-400 text-xs">{r.dataset}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-slate-500 text-xs mt-4 text-center">
              注：FVD分数越低越好（越真实），其他分数越高越好
            </p>
          </div>

          {/* 应用场景 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-emerald-500/10 to-slate-800/50 rounded-xl p-6 border border-emerald-500/30">
              <h3 className="text-lg font-semibold text-emerald-400 mb-4">🎬 应用场景 1：人体动作生成</h3>
              <p className="text-slate-300 text-sm mb-4">
                给一段文字描述（如「一个穿着橙色运动服的人在跳霹雳舞」），生成对应的高动态人体动作视频。
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4 text-xs text-slate-400">
                对比测试：DynaVid vs CogVideoX vs Wan2.2-5B<br/>
                结果：DynaVid 生成的视频动作更自然、更符合描述
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500/10 to-slate-800/50 rounded-xl p-6 border border-blue-500/30">
              <h3 className="text-lg font-semibold text-blue-400 mb-4">📷 应用场景 2：相机控制</h3>
              <p className="text-slate-300 text-sm mb-4">
                输入相机运动轨迹（如「从左到右旋转180度」），生成对应的画面变化视频。
              </p>
              <div className="bg-slate-900/50 rounded-lg p-4 text-xs text-slate-400">
                对比测试：DynaVid vs AC3D vs GEN3C<br/>
                结果：在极端相机运动下，DynaVid 画面更稳定、更真实
              </div>
            </div>
          </div>
        </section>

        {/* 总结 */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-2xl p-8 border border-cyan-500/30">
            <h2 className="text-2xl font-bold mb-6 text-center">📝 总结</h2>
            <div className="max-w-2xl mx-auto space-y-4 text-slate-300">
              <p className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">1.</span>
                <span><strong className="text-white">核心问题：</strong>现有AI难以生成「真实且高度动态」的视频</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">2.</span>
                <span><strong className="text-white">解决方案：</strong>用合成光流数据训练「运动」，用真实视频训练「外观」</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-cyan-400 font-bold">3.</span>
                <span><strong className="text-white">效果：</strong>可以生成霹雳舞、快速相机运动等极端动态视频，质量超越现有方法</span>
              </p>
            </div>
          </div>
        </section>

        {/* 底部信息 */}
        <footer className="text-center text-slate-500 text-sm border-t border-slate-800 pt-8">
          <p>论文原文：arXiv:2604.01666</p>
          <p className="mt-2">本页面由 AI 生成，用于学术交流与教育目的</p>
        </footer>
      </main>
    </div>
  )
}

export default App