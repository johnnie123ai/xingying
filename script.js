// ===== 文章数据 =====
const articles = [
  // ========== 摄影知识 ==========
  {
    category: 'photo',
    sub: 'basic',
    title: '相机曝光三要素：光圈、快门、ISO的完全指南',
    excerpt: '理解光圈、快门速度和ISO感光度如何相互配合，掌握曝光三角的奥秘，让你的照片不再过曝或欠曝。',
    tags: ['基础知识', '曝光', '入门'],
    emoji: '📸',
    date: '2026-06-05',
    read: '12分钟'
  },
  {
    category: 'photo',
    sub: 'basic',
    title: 'RAW vs JPEG：为什么摄影爱好者都建议用RAW格式',
    excerpt: '深入了解RAW格式的优势，包括更大的动态范围、更多的后期空间，以及如何开始使用RAW拍摄。',
    tags: ['基础知识', '格式', '后期'],
    emoji: '💾',
    date: '2026-06-02',
    read: '8分钟'
  },
  {
    category: 'photo',
    sub: 'composition',
    title: '三分法构图：最经典也最有效的构图法则',
    excerpt: '三分法是摄影中最基本也最实用的构图技巧，掌握它能让你的照片瞬间提升一个档次。',
    tags: ['构图技巧', '入门', '经典'],
    emoji: '🎯',
    date: '2026-05-28',
    read: '6分钟'
  },
  {
    category: 'photo',
    sub: 'composition',
    title: '引导线构图：让视线跟随你的设计',
    excerpt: '利用道路、河流、建筑线条等自然引导线，引导观者视线聚焦画面主体，创造视觉流动感。',
    tags: ['构图技巧', '风光', '创意'],
    emoji: '🛤️',
    date: '2026-05-25',
    read: '7分钟'
  },
  {
    category: 'photo',
    sub: 'composition',
    title: '对称与平衡：营造画面的稳定感',
    excerpt: '对称构图能带来强烈的视觉冲击力，了解如何在风光、建筑摄影中运用对称法则。',
    tags: ['构图技巧', '建筑', '风光'],
    emoji: '🏛️',
    date: '2026-05-20',
    read: '9分钟'
  },
  {
    category: 'photo',
    sub: 'post',
    title: 'Lightroom基础调色：从0到1的色彩魔法',
    excerpt: '系统学习Lightroom的核心调色工具——曲线、HSL、色调分级，让照片拥有电影般的质感。',
    tags: ['后期修图', 'Lightroom', '调色'],
    emoji: '🎨',
    date: '2026-05-18',
    read: '15分钟'
  },
  {
    category: 'photo',
    sub: 'post',
    title: 'Photoshop图层蒙版完全解析',
    excerpt: '图层蒙版是PS中最强大的工具之一，学会它你就能精确控制每一部分的显示与隐藏。',
    tags: ['后期修图', 'Photoshop', '蒙版'],
    emoji: '🖌️',
    date: '2026-05-15',
    read: '12分钟'
  },
  {
    category: 'photo',
    sub: 'night',
    title: '银河拍摄全攻略：从准备到出片',
    excerpt: '详细讲解银河摄影的完整流程：选址、参数设置、对焦技巧、堆栈处理，拍出令人惊叹的银河大片。',
    tags: ['夜景星空', '银河', '攻略'],
    emoji: '🌌',
    date: '2026-05-12',
    read: '20分钟'
  },
  {
    category: 'photo',
    sub: 'night',
    title: '星轨拍摄：记录地球的自转',
    excerpt: '利用长时间曝光和堆栈技术，拍出优美的星轨照片，感受地球的每一次旋转。',
    tags: ['夜景星空', '长曝光', '技巧'],
    emoji: '⭐',
    date: '2026-05-08',
    read: '14分钟'
  },

  // ========== 天文知识 ==========
  {
    category: 'astro',
    sub: 'constellation',
    title: '夏季大三角：认识天空中最亮的三颗星',
    excerpt: '夏季夜晚抬头仰望，你就能找到由织女星、牛郎星和天津四组成的夏季大三角。',
    tags: ['星座观测', '夏季', '入门'],
    emoji: '💫',
    date: '2026-06-06',
    read: '8分钟'
  },
  {
    category: 'astro',
    sub: 'constellation',
    title: '猎户座：冬日夜空最显著的星座',
    excerpt: '猎户座是冬季夜空中最容易被识别的星座，三颗排成直线的"猎户腰带"几乎人人都见过。',
    tags: ['星座观测', '冬季', '入门'],
    emoji: '🦁',
    date: '2026-06-01',
    read: '10分钟'
  },
  {
    category: 'astro',
    sub: 'constellation',
    title: '使用星图APP：北斗七星到北极星',
    excerpt: '教你如何使用手机星图APP，从北斗七星找到北极星，学会基本的观星导航。',
    tags: ['星座观测', '工具', '入门'],
    emoji: '📱',
    date: '2026-05-28',
    read: '6分钟'
  },
  {
    category: 'astro',
    sub: 'deep',
    title: '梅西耶天体马拉松：一晚上看完110个深空目标',
    excerpt: '每年春季的"梅西耶天体马拉松"是天文爱好者年度盛事，挑战一晚上寻找并观测所有110个梅西耶天体。',
    tags: ['深空天体', '马拉松', '进阶'],
    emoji: '🏃',
    date: '2026-05-24',
    read: '18分钟'
  },
  {
    category: 'astro',
    sub: 'deep',
    title: '猎户座大星云：肉眼可见的遥远恒星摇篮',
    excerpt: '在夜空中用肉眼就能看到猎户座大星云（M42），它是离我们最近的活跃恒星形成区。',
    tags: ['深空天体', '星云', '科普'],
    emoji: '🌫️',
    date: '2026-05-20',
    read: '12分钟'
  },
  {
    category: 'astro',
    sub: 'deep',
    title: '仙女座大星系：我们最近的大星系邻居',
    excerpt: 'M31仙女座大星系是离银河系最近的大型星系，肉眼可见，它正以每秒110公里的速度向我们靠近。',
    tags: ['深空天体', '星系', '科普'],
    emoji: '🌀',
    date: '2026-05-15',
    read: '15分钟'
  },
  {
    category: 'astro',
    sub: 'planetary',
    title: '木星四卫星：伽利略的发现',
    excerpt: '1610年伽利略首次用望远镜观测到木星的四颗大卫星，这一发现彻底改变了人类对宇宙的认知。',
    tags: ['行星科学', '木星', '历史'],
    emoji: '🟤',
    date: '2026-05-10',
    read: '10分钟'
  },
  {
    category: 'astro',
    sub: 'planetary',
    title: '土星环的奥秘：并非真正"环"状',
    excerpt: '土星环主要由冰块和岩石碎片组成，宽度达28万公里，厚度却只有十几米，理解它的形成与结构。',
    tags: ['行星科学', '土星', '科普'],
    emoji: '🪐',
    date: '2026-05-05',
    read: '12分钟'
  },
  {
    category: 'astro',
    sub: 'telescope',
    title: '第一台望远镜：入门选购完全指南',
    excerpt: '面对市场上琳琅满目的望远镜品牌和技术参数，新手如何做出明智的选择？这篇指南告诉你。',
    tags: ['望远镜指南', '入门', '选购'],
    emoji: '🔭',
    date: '2026-05-01',
    read: '20分钟'
  },
  {
    category: 'astro',
    sub: 'telescope',
    title: '赤道仪 vs 经纬仪：跟踪天体该怎么选',
    excerpt: '观测深空天体需要跟踪天体的移动，赤道仪和经纬仪各有什么优劣？根据你的需求做出选择。',
    tags: ['望远镜指南', '设备', '对比'],
    emoji: '⚙️',
    date: '2026-04-28',
    read: '15分钟'
  },

  // ========== Vlog技巧 ==========
  {
    category: 'vlog',
    sub: 'shooting',
    title: '手机拍摄Vlog的10个专业技巧',
    excerpt: '不需要昂贵设备，掌握这10个技巧，用手机也能拍出电影感的Vlog视频。',
    tags: ['拍摄技巧', '手机', '入门'],
    emoji: '📱',
    date: '2026-06-07',
    read: '10分钟'
  },
  {
    category: 'vlog',
    sub: 'shooting',
    title: '稳定拍摄：防抖技巧与稳定器使用指南',
    excerpt: '手持拍摄抖动是新手最常见的问题，学习使用稳定器的正确姿势和防抖技巧。',
    tags: ['拍摄技巧', '稳定器', '技巧'],
    emoji: '🎥',
    date: '2026-06-03',
    read: '12分钟'
  },
  {
    category: 'vlog',
    sub: 'shooting',
    title: '光线运用：顺光、侧光、逆光的视觉效果',
    excerpt: '光线是视频的灵魂，学会利用不同光线方向创造不同的氛围和情感表达。',
    tags: ['拍摄技巧', '光线', '进阶'],
    emoji: '💡',
    date: '2026-05-30',
    read: '14分钟'
  },
  {
    category: 'vlog',
    sub: 'editing',
    title: '剪映Pro入门：新手也能快速上手的剪辑工具',
    excerpt: '剪映是目前最流行的手机/电脑剪辑软件之一，这篇教程带你从零开始掌握核心功能。',
    tags: ['剪辑方法', '剪映', '入门'],
    emoji: '✂️',
    date: '2026-05-25',
    read: '16分钟'
  },
  {
    category: 'vlog',
    sub: 'editing',
    title: '视频节奏感：如何控制剪辑的快慢',
    excerpt: '好的Vlog不是素材的堆砌，而是有节奏感的叙事。学习如何通过剪辑节奏控制观众的情绪。',
    tags: ['剪辑方法', '节奏', '进阶'],
    emoji: '🎵',
    date: '2026-05-20',
    read: '11分钟'
  },
  {
    category: 'vlog',
    sub: 'editing',
    title: '调色入门：让视频拥有统一色调',
    excerpt: '统一的色调能让视频更有质感，学习色彩理论在视频后期中的应用。',
    tags: ['剪辑方法', '调色', '进阶'],
    emoji: '🎬',
    date: '2026-05-15',
    read: '13分钟'
  },
  {
    category: 'vlog',
    sub: 'gear',
    title: '2026年Vlog设备清单：从手机到专业相机',
    excerpt: '不同预算下如何选择Vlog设备？从千元手机到万元专业套装，适合每个人的设备方案。',
    tags: ['设备推荐', '清单', '选购'],
    emoji: '📷',
    date: '2026-05-10',
    read: '18分钟'
  },
  {
    category: 'vlog',
    sub: 'gear',
    title: '外接麦克风：让Vlog声音提升一个档次',
    excerpt: '好视频三分靠画面七分靠声音，一款好的麦克风能让你的Vlog专业度大幅提升。',
    tags: ['设备推荐', '麦克风', '声音'],
    emoji: '🎙️',
    date: '2026-05-05',
    read: '10分钟'
  },
  {
    category: 'vlog',
    sub: 'story',
    title: 'Vlog叙事结构：如何讲好一个故事',
    excerpt: '好的Vlog不只是记录生活，更是讲述故事。学习经典叙事结构在你的Vlog中运用。',
    tags: ['叙事结构', '写作', '进阶'],
    emoji: '📖',
    date: '2026-05-01',
    read: '15分钟'
  },
  {
    category: 'vlog',
    sub: 'story',
    title: '开场30秒：如何抓住观众的注意力',
    excerpt: '在信息爆炸的时代，前30秒决定了观众是否继续观看。学习设计有吸引力的开场。',
    tags: ['叙事结构', '技巧', '入门'],
    emoji: '🎯',
    date: '2026-04-25',
    read: '8分钟'
  },
  {
    category: 'vlog',
    sub: 'story',
    title: 'Vlog结尾的"钩子"：让观众期待下一集',
    excerpt: '一个巧妙的结尾能让观众期待你的下一期内容，学习设计有效的结尾技巧。',
    tags: ['叙事结构', '技巧', '进阶'],
    emoji: '🪝',
    date: '2026-04-20',
    read: '9分钟'
  }
];

// 热门标签数据
const tags = [
  '入门', '进阶', '构图', '调色', '光线', '银河', '深空', '望远镜',
  '手机拍摄', '剪映', '稳定器', '设备', 'RAW', 'ISO', '曝光',
  '三分法', '引导线', '对称', 'HDR', '长曝光', '星轨', '星图',
  '叙事', '剪辑', '节奏', '麦克风', '色彩理论', '后期', '选片'
];

// ===== 页面导航 =====
function navigate(pageId) {
  // 隐藏所有页面
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  // 显示目标页面
  const page = document.getElementById(pageId);
  if (page) {
    page.classList.add('active');
  }
  // 更新导航高亮
  document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.getAttribute('href') === '#' + pageId) {
      item.classList.add('active');
    }
  });
  // 滚动到顶部
  window.scrollTo({ top: 0, behavior: 'smooth' });
  // 隐藏移动端菜单
  document.getElementById('navLinks').classList.remove('open');
}

// ===== 渲染文章卡片 =====
function createArticleCard(article) {
  return `
    <div class="article-card" data-category="${article.category}" data-sub="${article.sub}">
      <div class="article-image">${article.emoji}</div>
      <div class="article-body">
        <div class="article-tags">
          ${article.tags.map(t => `<span class="article-tag">${t}</span>`).join('')}
        </div>
        <h3 class="article-title">${article.title}</h3>
        <p class="article-excerpt">${article.excerpt}</p>
        <div class="article-meta">
          <span>${article.date}</span>
          <span>📖 ${article.read}</span>
        </div>
      </div>
    </div>
  `;
}

// 渲染首页最新文章（取最新8篇）
function renderRecentArticles() {
  const container = document.getElementById('recentArticles');
  const recent = articles.slice(0, 8).map(createArticleCard).join('');
  container.innerHTML = recent;
}

// 渲染摄影知识页
function renderPhotoArticles(filter = 'all') {
  const container = document.getElementById('photoArticles');
  let filtered = articles.filter(a => a.category === 'photo');
  if (filter !== 'all') {
    filtered = filtered.filter(a => a.sub === filter);
  }
  container.innerHTML = filtered.map(createArticleCard).join('');
}

// 渲染天文知识页
function renderAstroArticles(filter = 'all') {
  const container = document.getElementById('astroArticles');
  let filtered = articles.filter(a => a.category === 'astro');
  if (filter !== 'all') {
    filtered = filtered.filter(a => a.sub === filter);
  }
  container.innerHTML = filtered.map(createArticleCard).join('');
}

// 渲染Vlog技巧页
function renderVlogArticles(filter = 'all') {
  const container = document.getElementById('vlogArticles');
  let filtered = articles.filter(a => a.category === 'vlog');
  if (filter !== 'all') {
    filtered = filtered.filter(a => a.sub === filter);
  }
  container.innerHTML = filtered.map(createArticleCard).join('');
}

// ===== 筛选文章 =====
function filterArticles(category, sub) {
  // 更新按钮状态
  const filterBar = event.target.closest('.filter-bar');
  filterBar.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
  event.target.classList.add('active');

  switch(category) {
    case 'photo': renderPhotoArticles(sub); break;
    case 'astro': renderAstroArticles(sub); break;
    case 'vlog': renderVlogArticles(sub); break;
  }
}

// ===== 渲染标签云 =====
function renderTagCloud() {
  const container = document.getElementById('tagCloud');
  container.innerHTML = tags.map(tag => `<span class="tag-item">${tag}</span>`).join('');
}

// ===== 搜索功能 =====
function toggleSearch() {
  const searchBox = document.getElementById('searchBox');
  searchBox.classList.toggle('expanded');
  if (searchBox.classList.contains('expanded')) {
    document.getElementById('searchInput').focus();
  }
}

function showSearch() {
  document.getElementById('searchBox').classList.add('expanded');
}

function hideSearch() {
  setTimeout(() => {
    document.getElementById('searchBox').classList.remove('expanded');
  }, 200);
}

// ===== 主题切换 =====
function toggleTheme() {
  const body = document.body;
  const isLight = body.getAttribute('data-theme') === 'light';
  if (isLight) {
    body.setAttribute('data-theme', 'dark');
    document.querySelector('.theme-toggle').textContent = '🌙';
  } else {
    body.setAttribute('data-theme', 'light');
    document.querySelector('.theme-toggle').textContent = '☀️';
  }
}

// ===== 移动端菜单 =====
function toggleMenu() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ===== 滚动效果 =====
function handleScroll() {
  const navbar = document.getElementById('navbar');
  const backToTop = document.getElementById('backToTop');

  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== 星空背景生成 =====
function createStars() {
  const starField = document.getElementById('starField');
  const canvas = document.createElement('canvas');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  starField.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  const starCount = 200;

  for (let i = 0; i < starCount; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 1.5 + 0.5;
    const opacity = Math.random() * 0.8 + 0.2;

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
    ctx.fill();
  }
}

// ===== 初始化 =====
document.addEventListener('DOMContentLoaded', () => {
  createStars();
  renderRecentArticles();
  renderPhotoArticles();
  renderAstroArticles();
  renderVlogArticles();
  renderTagCloud();

  window.addEventListener('scroll', handleScroll);

  // 窗口大小变化时重绘星空
  window.addEventListener('resize', () => {
    const starField = document.getElementById('starField');
    starField.innerHTML = '';
    createStars();
  });
});
