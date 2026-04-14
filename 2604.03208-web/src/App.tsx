import { useState, useEffect } from 'react';
import './App.css';

interface Section {
  id: string;
  title: string;
  icon: string;
}

const sections: Section[] = [
  { id: 'overview', title: '概述', icon: '📖' },
  { id: 'problem', title: '难题', icon: '🤔' },
  { id: 'solution', title: '解决方案', icon: '💡' },
  { id: 'method', title: '原理解密', icon: '⚙️' },
  { id: 'results', title: '惊人成果', icon: '🚀' },
  { id: 'why', title: '为什么重要', icon: '⭐' },
];

const navItems = ['概述', '难题', '解决方案', '原理解密', '惊人成果', '为什么重要'];

export default function App() {
  const [activeSection, setActiveSection] = useState('overview');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  const renderHero = () => (
    <div className="hero-section">
      <div className="hero-badge">🤖 机器人 AI 论文解读</div>
      <h1 className="hero-title">
        <span className="title-main">分层规划与隐世界模型</span>
        <span className="title-sub">Hierarchical Planning with Latent World Models</span>
      </h1>
      <p className="hero-desc">
        让机器人像人类一样思考：先想"大方向"，再想"怎么做"
      </p>
      <div className="hero-meta">
        <span>📅 2026年4月</span>
        <span>👥 Meta FAIR & NYU</span>
      </div>
      <button className="cta-button" onClick={() => scrollToSection('overview')}>
        开始了解 →
      </button>
    </div>
  );

  const renderOverview = () => (
    <section id="overview" className="section">
      <h2 className="section-title">
        <span className="section-icon">📖</span>
        这篇论文讲了什么？
      </h2>
      <div className="card">
        <p className="intro-text">
          想象你让机器人去拿桌上的杯子。人类会怎么思考？
        </p>
        <div className="analogy-box">
          <div className="analogy-step">
            <div className="step-icon">👁️</div>
            <div className="step-text">
              <strong>第一步：大方向</strong>
              <span>"先走到桌子旁边"</span>
            </div>
          </div>
          <div className="step-arrow">↓</div>
          <div className="analogy-step">
            <div className="step-icon">🤖</div>
            <div className="step-text">
              <strong>第二步：具体动作</strong>
              <span>"伸手臂→抓取→抬起"</span>
            </div>
          </div>
        </div>
        <p className="key-insight">
          💡 <strong>这篇论文的核心思想：</strong>让机器人也学会这种"分层思考"的方式！
          就像有一个"高级大脑"制定计划，一个"低级大脑"执行动作。
        </p>
      </div>
    </section>
  );

  const renderProblem = () => (
    <section id="problem" className="section">
      <h2 className="section-title">
        <span className="section-icon">🤔</span>
        现有方法的难题
      </h2>
      <div className="problem-grid">
        <div className="problem-card">
          <div className="problem-icon">📈</div>
          <h3>误差累积</h3>
          <p>机器人预测越远的未来，错误越多。就像你天气预报预测一周后 vs. 明天，准确性差很多。</p>
        </div>
        <div className="problem-card">
          <div className="problem-icon">🎈</div>
          <h3>搜索爆炸</h3>
          <p>如果要一个动作一个动作地计划，就像要从北京到上海，每步只能走1米，需要计划几百万步！</p>
        </div>
        <div className="problem-card">
          <div className="problem-icon">🔄</div>
          <h3>舍近求远</h3>
          <p>有些任务需要"先后退再前进"。但机器人只会直接冲向目标，就像不会绕路的导航软件。</p>
        </div>
      </div>
    </section>
  );

  const renderSolution = () => (
    <section id="solution" className="section">
      <h2 className="section-title">
        <span className="section-icon">💡</span>
        本文解决方案：分层规划
      </h2>
      <div className="solution-intro">
        <p>论文提出了一种<strong>两层规划系统</strong>，就像给机器人装上了"人类大脑"：</p>
      </div>
      <div className="hierarchy-diagram">
        <div className="high-level">
          <div className="level-badge high">高层规划器</div>
          <div className="level-content">
            <div className="brain-icon">🧠</div>
            <div className="level-desc">
              <strong>任务：</strong>想大方向<br/>
              <strong>预测：</strong>几步之后的位置<br/>
              <strong>速度：</strong>快速、抽象
            </div>
          </div>
          <div className="level-output">
            <span className="output-label">输出：子目标</span>
            <div className="subgoal-example">"走到桌子旁边"</div>
          </div>
        </div>
        <div className="level-connector">
          <div className="connector-line"></div>
          <div className="connector-arrow">↓</div>
          <div className="connector-text">子目标</div>
        </div>
        <div className="low-level">
          <div className="level-badge low">低层规划器</div>
          <div className="level-content">
            <div className="brain-icon">⚡</div>
            <div className="level-desc">
              <strong>任务：</strong>执行具体动作<br/>
              <strong>预测：</strong>每一步怎么走<br/>
              <strong>速度：</strong>精细、准确
            </div>
          </div>
          <div className="level-output">
            <span className="output-label">输出：机器人动作</span>
            <div className="actions-example">"伸 0.3m → 抓 → 抬 0.2m"</div>
          </div>
        </div>
      </div>
    </section>
  );

  const renderMethod = () => (
    <section id="method" className="section">
      <h2 className="section-title">
        <span className="section-icon">⚙️</span>
        原理解密
      </h2>
      <div className="method-steps">
        <div className="method-step">
          <div className="step-number">1</div>
          <div className="step-content">
            <h3>编码器：把图像变成"思想"</h3>
            <p>机器人的"眼睛"看到的图像，被转换成一种抽象的"思维形式"——叫做<strong>隐状态</strong>。
               这就像你看一张照片后，脑子里留下的印象。</p>
          </div>
        </div>
        <div className="method-step">
          <div className="step-number">2</div>
          <div className="step-content">
            <h3>世界模型：预测未来</h3>
            <p>机器人有一个" imagination"（想象力）——能够预测如果做某个动作，未来会变成什么样。
               就像你想象"如果我推这个杯子，它会滚到哪里"。</p>
          </div>
        </div>
        <div className="method-step">
          <div className="step-number">3</div>
          <div className="step-content">
            <h3>高层规划：找方向</h3>
            <p>高层规划器在"思维空间"里搜索：<strong>"怎么做才能达到目标？"</strong>
               它只需要想几步之后的"大致方向"，不用想具体每一步。</p>
          </div>
        </div>
        <div className="method-step">
          <div className="step-number">4</div>
          <div className="step-content">
            <h3>低层规划：执行动作</h3>
          <p>低层规划器接收高层给的"子目标"，想："要达到这个子目标，我需要做哪些具体动作？"
               然后一个动作一个动作地执行。</p>
          </div>
        </div>
      </div>
      <div className="key-tech">
        <h3>🔑 关键技术：隐动作 (Latent Actions)</h3>
        <p>传统方法高层只用"起始到终点的位移"来描述动作。但这种方法丢失了中间的过程信息。
           本文发明了一种"隐动作"——用机器学习把一段动作序列压缩成一个抽象的"动作代码"。
           这个代码包含了动作的全部信息，比简单位移好44%！</p>
      </div>
    </section>
  );

  const renderResults = () => (
    <section id="results" className="section">
      <h2 className="section-title">
        <span className="section-icon">🚀</span>
        惊人成果
      </h2>
      <div className="results-intro">
        <p>论文在真实机器人和仿真环境上做了大量实验，效果非常惊人：</p>
      </div>
      <div className="results-comparison">
        <h3>📊 任务成功率对比</h3>
        <div className="comparison-table">
          <div className="table-header">
            <span>任务</span>
            <span>普通规划</span>
            <span>分层规划</span>
            <span>提升</span>
          </div>
          <div className="table-row highlight-row">
            <span>抓取放置</span>
            <span className="flat-rate">0%</span>
            <span className="hier-rate">70%</span>
            <span className="boost">+70%</span>
          </div>
          <div className="table-row">
            <span>抽屉操作</span>
            <span className="flat-rate">30%</span>
            <span className="hier-rate">70%</span>
            <span className="boost">+40%</span>
          </div>
          <div className="table-row">
            <span>推T任务</span>
            <span className="flat-rate">17%</span>
            <span className="hier-rate">61%</span>
            <span className="boost">+44%</span>
          </div>
          <div className="table-row">
            <span>迷宫导航</span>
            <span className="flat-rate">44%</span>
            <span className="hier-rate">83%</span>
            <span className="boost">+39%</span>
          </div>
        </div>
      </div>
      <div className="efficiency-box">
        <h3>⚡ 效率提升：计算时间减少 3倍！</h3>
        <p>分层规划不仅效果更好，还<strong>快了3倍</strong>！因为高层规划只需要想"大致方向"，
           减少了搜索空间的复杂度。</p>
      </div>
      <div className="real-robot">
        <h3>🤖 真实机器人实验</h3>
        <p>最令人惊讶的是：论文在<strong>真实的机械臂</strong>上测试成功！
           机器人只看了一张目标照片，就能自己规划如何抓取之前没见过的物体。
           这比很多需要大量训练数据的"视觉语言动作模型"效果好很多。</p>
      </div>
    </section>
  );

  const renderWhy = () => (
    <section id="why" className="section">
      <h2 className="section-title">
        <span className="section-icon">⭐</span>
        为什么这篇论文重要？
      </h2>
      <div className="contributions">
        <div className="contribution-card">
          <div className="contrib-number">1</div>
          <div className="contrib-content">
            <h3>零样本泛化</h3>
            <p>机器人可以在<strong>从未见过的环境</strong>中工作！
               不需要为每个新任务重新训练，就像人类能适应新房间一样。</p>
          </div>
        </div>
        <div className="contribution-card">
          <div className="contrib-number">2</div>
          <div className="contrib-content">
            <h3>通用框架</h3>
            <p>这个方法可以套用在不同的"世界模型"上——
               无论是什么架构，都能获得分层规划的好处。</p>
          </div>
        </div>
        <div className="contribution-card">
          <div className="contrib-number">3</div>
          <div className="contrib-content">
            <h3>让机器人更像人</h3>
            <p>人类解决问题时天然会"分层思考"——先想大方向，再想细节。
               这篇论文让机器人也学会了这种思考方式。</p>
          </div>
        </div>
        <div className="contribution-card">
          <div className="contrib-number">4</div>
          <div className="contrib-content">
            <h3>实用价值</h3>
            <p>在真实的双臂Franka机械臂上实现，证明了在<strong>现实世界</strong>中应用的可行性。</p>
          </div>
        </div>
      </div>
      <div className="future-box">
        <h3>🌟 未来展望</h3>
        <p>这项技术有望让机器人更好地帮助人类——从家务机器人到工厂自动化，
           甚至太空探索。想象一个能自动适应新环境的机器人助手！</p>
      </div>
    </section>
  );

  return (
    <div className="app">
      {/* Mobile Navigation */}
      {mobile && (
        <nav className="mobile-nav">
          <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? '✕ 关闭' : '☰ 菜单'}
          </button>
          {isMenuOpen && (
            <div className="menu-dropdown">
              {navItems.map((item, i) => (
                <button
                  key={i}
                  className={`menu-item ${activeSection === sections[i].id ? 'active' : ''}`}
                  onClick={() => scrollToSection(sections[i].id)}
                >
                  {sections[i].icon} {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      )}

      {/* Desktop Sidebar */}
      {!mobile && (
        <nav className="sidebar">
          <div className="sidebar-header">
            <span className="sidebar-icon">📄</span>
            <span className="sidebar-title">论文导航</span>
          </div>
          {sections.map((section) => (
            <button
              key={section.id}
              className={`nav-item ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              <span className="nav-icon">{section.icon}</span>
              <span className="nav-text">{section.title}</span>
            </button>
          ))}
        </nav>
      )}

      {/* Main Content */}
      <main className={`main-content ${mobile ? 'mobile-main' : ''}`}>
        {renderHero()}
        {renderOverview()}
        {renderProblem()}
        {renderSolution()}
        {renderMethod()}
        {renderResults()}
        {renderWhy()}
        <footer className="footer">
          <p>📚 论文来源：arXiv:2604.03208 | 代码：github.com/kevinghst/HWM_PLDM</p>
          <p>🎓 为中国高中生精心解读</p>
        </footer>
      </main>

      {/* Progress Indicator */}
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${((sections.findIndex(s => s.id === activeSection) + 1) / sections.length) * 100}%` }}
        />
      </div>
    </div>
  );
}
