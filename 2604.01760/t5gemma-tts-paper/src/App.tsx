import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('overview')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* 顶部导航 */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-950/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}>
        <nav className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-lg font-bold text-emerald-400">T5Gemma-TTS</h1>
            <div className="hidden md:flex gap-6 text-sm">
              {['overview', 'problem', 'solution', 'architecture', 'results', 'team'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`transition-colors ${
                    activeSection === section ? 'text-emerald-400' : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  {section === 'overview' ? '概述' :
                   section === 'problem' ? '问题' :
                   section === 'solution' ? '方案' :
                   section === 'architecture' ? '架构' :
                   section === 'results' ? '效果' : '团队'}
                </button>
              ))}
            </div>
          </div>
        </nav>
      </header>

      {/* Hero区域 */}
      <section id="overview" className="min-h-screen flex items-center justify-center px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium mb-6">
              📄 论文解读
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-emerald-400">T5Gemma-TTS</span>
              <br />
              <span className="text-2xl md:text-4xl font-normal text-slate-300">零样本语音克隆技术</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              用深度学习让机器开口说话 — 仅凭 3 秒参考音频就能克隆任意人的声音
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="font-semibold mb-2">多语言支持</h3>
              <p className="text-sm text-slate-400">英语、中文、日语</p>
              <p className="text-xs text-slate-500 mt-1">甚至能说未训练过的韩语</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">⏱️</div>
              <h3 className="font-semibold mb-2">精准时长控制</h3>
              <p className="text-sm text-slate-400">PM-RoPE 技术</p>
              <p className="text-xs text-slate-500 mt-1">生成语音的时长可精确控制</p>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-semibold mb-2">零样本克隆</h3>
              <p className="text-sm text-slate-400">无需目标说话人数据</p>
              <p className="text-xs text-slate-500 mt-1">3 秒音频即可克隆声音</p>
            </div>
          </div>

          <div className="animate-bounce text-slate-500 mt-8">
            ↓ 向下滚动了解更多
          </div>
        </div>
      </section>

      {/* 核心问题 */}
      <section id="problem" className="min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">🤔 现有技术有什么问题？</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            主流的零样本语音克隆系统大多采用「解码器-only」架构，这种架构存在一个根本性的缺陷
          </p>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-amber-400">「文本稀释」问题</h3>

            <div className="space-y-6">
              {/* 传统架构图解 */}
              <div className="bg-slate-950/50 rounded-xl p-6">
                <h4 className="text-sm font-medium text-slate-300 mb-4">传统解码器-only模型的工作方式：</h4>
                <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
                  <div className="flex-1 w-full">
                    <div className="bg-blue-500/20 border border-blue-500/40 rounded-lg p-3 text-center mb-2">
                      <span className="text-blue-400 font-medium">文本序列（固定）</span>
                    </div>
                    <div className="text-center text-xs text-slate-500">长度 T = 10个词</div>
                  </div>
                  <div className="text-slate-500 text-2xl">+</div>
                  <div className="flex-1 w-full">
                    <div className="bg-purple-500/20 border border-purple-500/40 rounded-lg p-3 text-center mb-2">
                      <span className="text-purple-400 font-medium">语音序列（不断增长）</span>
                    </div>
                    <div className="text-center text-xs text-slate-500">长度 S = 500 → 1000 → 2000...</div>
                  </div>
                </div>

                <div className="mt-6 bg-slate-800/50 rounded-lg p-4">
                  <div className="text-center text-sm text-slate-400 mb-3">注意力窗口中的占比变化</div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-20">生成开始</span>
                      <div className="flex-1 bg-slate-700 rounded-full h-4 overflow-hidden">
                        <div className="h-full bg-blue-500" style={{width: '20%'}}></div>
                        <div className="h-full bg-purple-500 -mt-4" style={{width: '80%'}}></div>
                      </div>
                      <span className="text-xs text-slate-400 w-16">文本 20%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-20">生成一半</span>
                      <div className="flex-1 bg-slate-700 rounded-full h-4 overflow-hidden">
                        <div className="h-full bg-blue-500" style={{width: '5%'}}></div>
                        <div className="h-full bg-purple-500 -mt-4" style={{width: '95%'}}></div>
                      </div>
                      <span className="text-xs text-slate-400 w-16">文本 5%</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 w-20">生成结束</span>
                      <div className="flex-1 bg-slate-700 rounded-full h-4 overflow-hidden">
                        <div className="h-full bg-blue-500" style={{width: '2%'}}></div>
                        <div className="h-full bg-purple-500 -mt-4" style={{width: '98%'}}></div>
                      </div>
                      <span className="text-xs text-slate-400 w-16">文本 2%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">⚠️</span>
                  <div>
                    <h4 className="font-semibold text-red-400 mb-2">问题本质</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      随着语音序列越来越长，文本在注意力机制中的「影响力」越来越小。
                      就像在嘈杂的房间里，背景音乐越来越大，你的声音越来越难被听清一样。
                      这导致<strong className="text-white">长文本的语音合成质量严重下降</strong>。
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 解决方案 */}
      <section id="solution" className="min-h-screen px-4 py-20 bg-gradient-to-b from-slate-950 to-slate-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">💡 T5Gemma-TTS 的解决方案</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            采用「编码器-解码器」架构，从根本上解决文本稀释问题
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* 方案1 */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold">编码器-解码器架构</h3>
              </div>
              <div className="bg-slate-950/50 rounded-xl p-4 mb-4">
                <div className="flex flex-col gap-3 text-sm">
                  <div className="bg-emerald-500/20 border border-emerald-500/40 rounded-lg p-3 text-center">
                    <span className="text-emerald-400 font-medium">📝 编码器：双向理解文本</span>
                    <p className="text-xs text-slate-400 mt-1">一次性处理完整文本，理解上下文</p>
                  </div>
                  <div className="text-center text-slate-500">↓</div>
                  <div className="bg-purple-500/20 border border-purple-500/40 rounded-lg p-3 text-center">
                    <span className="text-purple-400 font-medium">🔊 解码器：生成语音</span>
                    <p className="text-xs text-slate-400 mt-1">通过专门的「跨注意力」机制获取文本信息</p>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-sm text-emerald-300">
                  ✨ 关键优势：文本信息通过专门通道传递，不受语音长度影响
                </p>
              </div>
            </div>

            {/* 方案2 */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-full flex items-center justify-center">
                  <span className="text-emerald-400 font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold">PM-RoPE 时长控制</h3>
              </div>
              <div className="bg-slate-950/50 rounded-xl p-4 mb-4">
                <p className="text-sm text-slate-300 mb-4">
                  PM-RoPE（进度监控旋转位置编码）让模型能够<strong className="text-white">精确感知自己的生成进度</strong>。
                </p>
                <div className="bg-blue-950/30 border border-blue-500/30 rounded-lg p-4">
                  <div className="text-xs text-blue-300 mb-2">📊 生成进度感知</div>
                  <div className="relative">
                    <div className="h-2 bg-slate-700 rounded-full">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-3/4"></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 mt-1">
                      <span>0%</span>
                      <span className="text-blue-400">当前位置: 75%</span>
                      <span>100%</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-lg p-4">
                <p className="text-sm text-emerald-300">
                  ✨ 可以精确控制生成语音的时长，误差控制在 ±10% 以内
                </p>
              </div>
            </div>
          </div>

          {/* 技术亮点 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">🎯 三大核心创新</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🧠</span>
                </div>
                <h4 className="font-medium mb-2">预训练语言模型</h4>
                <p className="text-sm text-slate-400">
                  基于 T5Gemma 预训练模型，拥有强大的多语言理解能力，无需音素转换
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-amber-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">📈</span>
                </div>
                <h4 className="font-medium mb-2">大规模多语言训练</h4>
                <p className="text-sm text-slate-400">
                  约 17 万小时语音数据，覆盖英语、中文、日语三种类型差异大的语言
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-rose-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🌐</span>
                </div>
                <h4 className="font-medium mb-2">跨语言泛化能力</h4>
                <p className="text-sm text-slate-400">
                  虽未训练韩语，但依然能生成高质量韩语语音，展现强大迁移能力
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 架构图解 */}
      <section id="architecture" className="min-h-screen px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">🔧 模型架构</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            T5Gemma-TTS 的工作流程图解
          </p>

          {/* 流程图 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
            <div className="flex flex-col items-center gap-6">
              {/* 输入 */}
              <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl">
                <div className="flex-1 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 text-center">
                  <div className="text-blue-400 font-medium mb-2">📝 输入文本</div>
                  <div className="text-xs text-slate-400">"你好，欢迎来到AI的世界"</div>
                </div>
                <div className="flex-1 bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 text-center">
                  <div className="text-purple-400 font-medium mb-2">🎤 参考音频（3秒）</div>
                  <div className="text-xs text-slate-400">克隆目标说话人的声音</div>
                </div>
              </div>

              {/* 箭头 */}
              <div className="text-slate-500 text-2xl">↓</div>

              {/* 编码器 */}
              <div className="w-full max-w-4xl">
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-xl p-6">
                  <div className="text-center text-emerald-400 font-medium mb-4">🧠 T5Gemma 编码器（2B参数）</div>
                  <div className="bg-slate-950/50 rounded-lg p-4 text-sm text-slate-300 text-center">
                    双向理解文本含义，生成文本表示矩阵
                  </div>
                </div>
              </div>

              {/* 箭头 */}
              <div className="text-slate-500 text-2xl">↓</div>

              {/* 跨注意力 */}
              <div className="w-full max-w-4xl">
                <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
                  <div className="text-center text-cyan-400 font-medium mb-4">🔗 26层跨注意力（PM-RoPE）</div>
                  <div className="bg-slate-950/50 rounded-lg p-4 text-sm text-slate-300 text-center">
                    注入生成进度信号，时长控制精度 ±10%
                  </div>
                </div>
              </div>

              {/* 箭头 */}
              <div className="text-slate-500 text-2xl">↓</div>

              {/* 解码器 */}
              <div className="w-full max-w-4xl">
                <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-6">
                  <div className="text-center text-purple-400 font-medium mb-4">🔊 T5Gemma 解码器（2B参数）</div>
                  <div className="bg-slate-950/50 rounded-lg p-4 text-sm text-slate-300 text-center">
                    自回归生成音频Token序列
                  </div>
                </div>
              </div>

              {/* 箭头 */}
              <div className="text-slate-500 text-2xl">↓</div>

              {/* 输出 */}
              <div className="w-full max-w-4xl">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-6">
                  <div className="text-center text-amber-400 font-medium mb-4">🎵 XCodec2 解码</div>
                  <div className="bg-slate-950/50 rounded-lg p-4 text-sm text-slate-300 text-center">
                    转换为高质量语音波形
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 关键参数 */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-emerald-400 mb-1">4B</div>
              <div className="text-xs text-slate-400">总参数量</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-cyan-400 mb-1">26</div>
              <div className="text-xs text-slate-400">编码/解码器层数</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-purple-400 mb-1">170k</div>
              <div className="text-xs text-slate-400">训练小时数</div>
            </div>
            <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-4 text-center">
              <div className="text-2xl font-bold text-amber-400 mb-1">50Hz</div>
              <div className="text-xs text-slate-400">音频codec采样率</div>
            </div>
          </div>
        </div>
      </section>

      {/* 实验结果 */}
      <section id="results" className="min-h-screen px-4 py-20 bg-gradient-to-b from-slate-900/50 to-slate-950">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">📊 实验结果</h2>
          <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
            在日语、韩语等语言上展现出领先的性能表现
          </p>

          {/* 日语结果 - 突出展示 */}
          <div className="bg-gradient-to-r from-emerald-950/50 to-cyan-950/50 border border-emerald-500/30 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🇯🇵</span>
              <h3 className="text-xl font-semibold">日语表现（训练语言中数据最少）</h3>
              <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs rounded-full">最佳</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-950/50 rounded-xl p-4">
                <div className="text-sm text-slate-400 mb-1">说话人相似度 (SIM)</div>
                <div className="text-3xl font-bold text-emerald-400">0.677</div>
                <div className="text-xs text-slate-500 mt-1">vs XTTS v2: 0.622</div>
                <div className="mt-2 text-xs text-emerald-400">✓ 统计显著领先</div>
              </div>
              <div className="bg-slate-950/50 rounded-xl p-4">
                <div className="text-sm text-slate-400 mb-1">字符错误率 (CER)</div>
                <div className="text-3xl font-bold text-cyan-400">0.126</div>
                <div className="text-xs text-slate-500 mt-1">所有系统中最低</div>
              </div>
              <div className="bg-slate-950/50 rounded-xl p-4">
                <div className="text-sm text-slate-400 mb-1">自然度 (UTMOS)</div>
                <div className="text-3xl font-bold text-amber-400">3.82</div>
                <div className="text-xs text-slate-500 mt-1">与 Kokoro 4.03 接近</div>
              </div>
            </div>
          </div>

          {/* 跨语言能力 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🌟</span>
              <h3 className="text-xl font-semibold">惊人发现：未训练语言的泛化能力</h3>
            </div>
            <div className="bg-rose-950/30 border border-rose-500/30 rounded-xl p-6 mb-6">
              <div className="flex items-start gap-4">
                <span className="text-2xl">🇰🇷</span>
                <div>
                  <h4 className="font-semibold text-rose-400 mb-1">韩语（完全未训练）</h4>
                  <p className="text-sm text-slate-300">
                    T5Gemma-TTS 从未见过韩语训练数据，但韩语语音相似度达到 <strong className="text-white">0.747</strong>，
                    与训练过韩语的 XTTS v2 (0.741) 持平甚至略高！
                  </p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-slate-950/50 rounded-xl p-4 text-center">
                <div className="text-sm text-slate-400 mb-1">韩语 CER</div>
                <div className="text-2xl font-bold text-cyan-400">0.082</div>
                <div className="text-xs text-slate-500">可接受的水平</div>
              </div>
              <div className="bg-slate-950/50 rounded-xl p-4 text-center">
                <div className="text-sm text-slate-400 mb-1">韩语 SIM</div>
                <div className="text-2xl font-bold text-emerald-400">0.747</div>
                <div className="text-xs text-slate-500">与XTTS v2持平</div>
              </div>
              <div className="bg-slate-950/50 rounded-xl p-4 text-center">
                <div className="text-sm text-slate-400 mb-1">法语 CER</div>
                <div className="text-2xl font-bold text-cyan-400">0.48</div>
                <div className="text-xs text-slate-500">可理解</div>
              </div>
              <div className="bg-slate-950/50 rounded-xl p-4 text-center">
                <div className="text-sm text-slate-400 mb-1">德语 CER</div>
                <div className="text-2xl font-bold text-cyan-400">0.45</div>
                <div className="text-xs text-slate-500">可理解</div>
              </div>
            </div>
          </div>

          {/* PM-RoPE 消融实验 */}
          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">⚙️</span>
              <h3 className="text-xl font-semibold">PM-RoPE 的重要性</h3>
            </div>
            <p className="text-slate-400 text-sm mb-6">
              关闭 PM-RoPE 后，模型几乎无法正常工作：
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-xl p-6">
                <div className="text-emerald-400 font-medium mb-2">✅ 开启 PM-RoPE</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">字符错误率 (CER)</span>
                    <span className="text-emerald-400 font-medium">0.129</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">时长准确率 (DA)</span>
                    <span className="text-emerald-400 font-medium">79%</span>
                  </div>
                </div>
              </div>
              <div className="bg-red-950/30 border border-red-500/30 rounded-xl p-6">
                <div className="text-red-400 font-medium mb-2">❌ 关闭 PM-RoPE</div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">字符错误率 (CER)</span>
                    <span className="text-red-400 font-medium">0.982 ⚠️</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">时长准确率 (DA)</span>
                    <span className="text-red-400 font-medium">46%</span>
                  </div>
                </div>
                <p className="text-xs text-red-300 mt-3">
                  CER > 1.0 意味着生成的内容几乎无法辨认
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 团队信息 */}
      <section id="team" className="min-h-screen px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">👥 研究团队</h2>
          <p className="text-slate-400 text-center mb-12">来自日本的研究团队</p>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8 mb-8">
            <div className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center text-3xl">
                  👨‍💻
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Chihiro Arata</h3>
                  <p className="text-emerald-400 text-sm mb-2">第一作者</p>
                  <p className="text-slate-400 text-sm">Third Intelligence, Inc.</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl">
                  👨‍🎓
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Kiyoshi Kurihara</h3>
                  <p className="text-emerald-400 text-sm mb-2">通讯作者</p>
                  <p className="text-slate-400 text-sm">Third Intelligence, Inc.</p>
                  <p className="text-slate-500 text-sm">Matsuo Institute, Inc.</p>
                  <p className="text-slate-500 text-sm">东京大学 (University of Tokyo)</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-4">📚 更多信息</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="https://github.com/Aratako/T5Gemma-TTS" target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-slate-950/50 rounded-xl p-4 hover:bg-slate-800/50 transition-colors">
                <span className="text-2xl">🐙</span>
                <div>
                  <div className="font-medium">GitHub</div>
                  <div className="text-xs text-slate-400">开源代码与模型权重</div>
                </div>
              </a>
              <div className="flex items-center gap-3 bg-slate-950/50 rounded-xl p-4">
                <span className="text-2xl">📄</span>
                <div>
                  <div className="font-medium">arXiv</div>
                  <div className="text-xs text-slate-400">arXiv:2604.01760v1</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 页脚 */}
      <footer className="bg-slate-950 border-t border-slate-800 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-slate-500 text-sm mb-2">
            T5Gemma-TTS 技术报告 | 论文解读网站
          </p>
          <p className="text-slate-600 text-xs">
            为中国高中生精心打造 | 使用浅显易懂的语言解释前沿AI技术
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App
