// 定义一个卡片数据数组，每个对象代表一个3D资产
const cards = [
    {
        title: '3D模型1', // 卡片标题
        desc: '这是第一个3D模型的描述。', // 卡片描述
        img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80' // 卡片图片
    },
    {
        title: '3D模型2',
        desc: '这是第二个3D模型的描述。',
        img: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
    },
    {
        title: '3D模型3',
        desc: '这是第三个3D模型的描述。',
        img: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
    },
    {
        title: '3D模型4',
        desc: '这是第四个3D模型的描述。',
        img: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80'
    }
];

// 定义公开展示的数据数组，包含多个3D模型作品
const exploreCards = [
    {
        title: '现代建筑模型', // 卡片标题
        desc: '精美的现代建筑设计，包含完整的建筑结构和细节。', // 卡片描述
        img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80', // 卡片图片
        author: '建筑师张三', // 作者
        category: '建筑', // 分类
        likes: 128, // 点赞数
        views: 2048 // 浏览量
    },
    {
        title: '人物肖像雕塑',
        desc: '逼真的人物面部表情和肌肉结构，展现精湛的雕刻技艺。',
        img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80',
        author: '雕塑家李四',
        category: '人物',
        likes: 256,
        views: 3456
    },
    {
        title: '野生动物模型',
        desc: '栩栩如生的野生动物造型，完美还原动物的自然姿态。',
        img: 'https://images.unsplash.com/photo-1549366021-9f761d450615?auto=format&fit=crop&w=400&q=80',
        author: '动物艺术家王五',
        category: '动物',
        likes: 189,
        views: 2789
    },
    {
        title: '跑车模型',
        desc: '流线型跑车设计，展现速度与美学的完美结合。',
        img: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=400&q=80',
        author: '汽车设计师赵六',
        category: '车辆',
        likes: 312,
        views: 4567
    },
    {
        title: '自然风景',
        desc: '壮丽的自然景观，包含山川河流和植被的完整生态系统。',
        img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=400&q=80',
        author: '自然摄影师钱七',
        category: '自然',
        likes: 445,
        views: 5678
    },
    {
        title: '古代建筑',
        desc: '传统古典建筑风格，展现历史文化的深厚底蕴。',
        img: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?auto=format&fit=crop&w=400&q=80',
        author: '历史建筑专家孙八',
        category: '建筑',
        likes: 167,
        views: 2345
    },
    {
        title: '科幻机器人',
        desc: '未来科技感的机器人设计，融合了机械美学和人工智能元素。',
        img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=400&q=80',
        author: '科幻艺术家周九',
        category: '人物',
        likes: 523,
        views: 6789
    },
    {
        title: '海洋生物',
        desc: '神秘的海洋生物模型，展现深海世界的奇妙生物。',
        img: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=400&q=80',
        author: '海洋生物学家吴十',
        category: '动物',
        likes: 234,
        views: 3456
    }
];

// 获取3D资产卡片列表的容器元素
const cardList = document.getElementById('cardList');
// 获取公开展示卡片列表的容器元素
const exploreCardList = document.getElementById('exploreCardList');

// 生成3D资产卡片的函数
function generateCaptureCards() {
    // 清空现有内容
    cardList.innerHTML = '';
    
    // 遍历卡片数据数组，生成HTML结构并插入到页面中
    cards.forEach(card => {
        // 创建卡片的外层div
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card'; // 设置卡片样式类

        // 创建图片元素
        const img = document.createElement('img');
        img.className = 'card-img'; // 设置图片样式类
        img.src = card.img; // 设置图片地址
        img.alt = card.title; // 设置图片alt属性

        // 创建标题元素
        const title = document.createElement('div');
        title.className = 'card-title'; // 设置标题样式类
        title.textContent = card.title; // 设置标题内容

        // 创建描述元素
        const desc = document.createElement('div');
        desc.className = 'card-desc'; // 设置描述样式类
        desc.textContent = card.desc; // 设置描述内容

        // 将图片、标题和描述依次添加到卡片div中
        cardDiv.appendChild(img);
        cardDiv.appendChild(title);
        cardDiv.appendChild(desc);

        // 将卡片div添加到卡片列表容器中
        cardList.appendChild(cardDiv);
    });
}

// 生成公开展示卡片的函数（探索&发现页面）
function generateExploreCards(filteredCards = exploreCards) {
    // 清空现有内容
    exploreCardList.innerHTML = '';
    
    // 遍历公开展示卡片数据数组，生成HTML结构并插入到页面中
    filteredCards.forEach(card => {
        // 创建卡片的外层div
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card explore-card'; // 设置卡片样式类，包含公开展示特殊样式

        // 创建图片元素
        const img = document.createElement('img');
        img.className = 'card-img'; // 设置图片样式类
        img.src = card.img; // 设置图片地址
        img.alt = card.title; // 设置图片alt属性

        // 创建标题元素
        const title = document.createElement('div');
        title.className = 'card-title'; // 设置标题样式类
        title.textContent = card.title; // 设置标题内容

        // 创建描述元素
        const desc = document.createElement('div');
        desc.className = 'card-desc'; // 设置描述样式类
        desc.textContent = card.desc; // 设置描述内容

        // 创建作者信息元素
        const author = document.createElement('div');
        author.className = 'card-author'; // 设置作者样式类
        author.textContent = `作者: ${card.author}`; // 设置作者内容

        // 创建统计信息元素
        const stats = document.createElement('div');
        stats.className = 'card-stats'; // 设置统计样式类
        stats.textContent = `❤️ ${card.likes} | 👁️ ${card.views}`; // 设置统计内容

        // 将所有元素依次添加到卡片div中
        cardDiv.appendChild(img);
        cardDiv.appendChild(title);
        cardDiv.appendChild(desc);
        cardDiv.appendChild(author);
        cardDiv.appendChild(stats);

        // 将卡片div添加到公开展示卡片列表容器中
        exploreCardList.appendChild(cardDiv);
    });
}

// 页面切换功能，支持"我的3D资产"、"探索&发现"、"数据采集交流区"、"设置"页面
function switchPage(pageId) {
    // 隐藏所有页面
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.style.display = 'none'; // 隐藏页面
    });
    
    // 显示目标页面
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.style.display = 'block'; // 显示目标页面
    }
    
    // 更新菜单激活状态
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.classList.remove('active'); // 移除所有激活状态
    });
    
    // 激活当前菜单项
    const activeMenuItem = document.querySelector(`[data-page="${pageId}"]`);
    if (activeMenuItem) {
        activeMenuItem.classList.add('active'); // 添加激活状态
    }
}

// 搜索功能（探索&发现页面）
function searchCards(keyword) {
    // 过滤卡片数据
    const filteredCards = exploreCards.filter(card => {
        // 在标题、描述、作者或分类中搜索关键词
        return card.title.toLowerCase().includes(keyword.toLowerCase()) ||
               card.desc.toLowerCase().includes(keyword.toLowerCase()) ||
               card.author.toLowerCase().includes(keyword.toLowerCase()) ||
               card.category.toLowerCase().includes(keyword.toLowerCase());
    });
    
    // 重新生成过滤后的卡片
    generateExploreCards(filteredCards);
}

// 分类过滤功能（探索&发现页面）
function filterByCategory(category) {
    // 更新分类标签激活状态
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.classList.remove('active'); // 移除所有激活状态
    });
    
    // 激活当前分类标签
    event.target.classList.add('active'); // 添加激活状态
    
    // 过滤卡片数据
    let filteredCards;
    if (category === '全部') {
        filteredCards = exploreCards; // 显示全部卡片
    } else {
        filteredCards = exploreCards.filter(card => card.category === category); // 按分类过滤
    }
    
    // 重新生成过滤后的卡片
    generateExploreCards(filteredCards);
}

// 登录状态本地变量（假数据）
let isLoggedIn = false; // 是否已登录
let currentUser = null; // 当前用户信息

// 假用户数据库（仅前端演示用）
const fakeUsers = [
    { username: 'test', password: '123456', nickname: '测试用户', avatar: 'https://i.pravatar.cc/40?img=3' }
];

// 显示登录弹窗
function showLoginModal() {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'flex';
    switchTab('wechat');
}
// 隐藏登录弹窗
function hideLoginModal() {
    const loginModal = document.getElementById('loginModal');
    loginModal.style.display = 'none';
}
// 切换tab
function switchTab(tab) {
    const modalTabs = document.querySelectorAll('.modal-tab');
    const modalPanels = {
        wechat: document.getElementById('wechatPanel'),
        account: document.getElementById('accountPanel'),
        register: document.getElementById('registerPanel')
    };
    modalTabs.forEach(t => {
        t.classList.toggle('active', t.dataset.tab === tab);
    });
    Object.keys(modalPanels).forEach(key => {
        modalPanels[key].style.display = (key === tab) ? 'flex' : 'none';
    });
}
// 更新登录状态UI
function updateLoginUI() {
    const userAvatar = document.getElementById('userAvatar');
    const userName = document.getElementById('userName');
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    if (isLoggedIn && currentUser) {
        userAvatar.src = currentUser.avatar;
        userAvatar.style.display = '';
        userName.textContent = currentUser.nickname || currentUser.username;
        userName.style.display = '';
        loginBtn.style.display = 'none';
        logoutBtn.style.display = '';
    } else {
        userAvatar.style.display = 'none';
        userName.style.display = 'none';
        loginBtn.style.display = '';
        logoutBtn.style.display = 'none';
    }
}
// 页面加载后绑定所有登录注册相关事件
function bindLoginModalEvents() {
    const loginBtn = document.getElementById('loginBtn');
    const logoutBtn = document.getElementById('logoutBtn');
    const loginModal = document.getElementById('loginModal');
    const modalClose = document.getElementById('modalClose');
    const modalTabs = document.querySelectorAll('.modal-tab');
    const modalPanels = {
        wechat: document.getElementById('wechatPanel'),
        account: document.getElementById('accountPanel'),
        register: document.getElementById('registerPanel')
    };
    // 登录按钮点击
    loginBtn.onclick = showLoginModal;
    // 关闭弹窗
    modalClose.onclick = hideLoginModal;
    // 点击遮罩关闭弹窗
    document.querySelector('.modal-mask').onclick = hideLoginModal;
    // tab切换事件
    modalTabs.forEach(tab => {
        tab.onclick = function() {
            switchTab(this.dataset.tab);
        };
    });
    // 微信登录（假登录）
    document.getElementById('wechatLoginBtn').onclick = function() {
        isLoggedIn = true;
        currentUser = { username: 'wechat_user', nickname: '微信用户', avatar: 'https://i.pravatar.cc/40?img=5' };
        hideLoginModal();
        updateLoginUI();
    };
    // 账号登录
    document.getElementById('accountLoginBtn').onclick = function() {
        const username = document.getElementById('loginUsername').value.trim();
        const password = document.getElementById('loginPassword').value;
        const user = fakeUsers.find(u => u.username === username && u.password === password);
        if (user) {
            isLoggedIn = true;
            currentUser = user;
            hideLoginModal();
            updateLoginUI();
        } else {
            alert('用户名或密码错误！');
        }
    };
    // 注册
    document.getElementById('registerBtn').onclick = function() {
        const username = document.getElementById('registerUsername').value.trim();
        const password = document.getElementById('registerPassword').value;
        if (!username || !password) {
            alert('请输入用户名和密码');
            return;
        }
        if (fakeUsers.find(u => u.username === username)) {
            alert('用户名已存在');
            return;
        }
        const newUser = { username, password, nickname: username, avatar: 'https://i.pravatar.cc/40?img=4' };
        fakeUsers.push(newUser);
        alert('注册成功，请用新账号登录');
        switchTab('account');
    };
    // 退出登录
    logoutBtn.onclick = function() {
        isLoggedIn = false;
        currentUser = null;
        updateLoginUI();
    };
}

// 初始化页面，绑定菜单、搜索、分类等事件
function initPage() {
    // 生成3D资产卡片
    generateCaptureCards();
    
    // 生成公开展示卡片
    generateExploreCards();
    
    // 绑定菜单点击事件
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const pageId = this.getAttribute('data-page'); // 获取页面ID
            switchPage(pageId); // 切换页面
        });
    });
    
    // 绑定搜索功能
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput && searchBtn) {
        // 搜索按钮点击事件
        searchBtn.addEventListener('click', function() {
            const keyword = searchInput.value.trim(); // 获取搜索关键词
            searchCards(keyword); // 执行搜索
        });
        
        // 搜索框回车事件
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') { // 按下回车键
                const keyword = this.value.trim(); // 获取搜索关键词
                searchCards(keyword); // 执行搜索
            }
        });
    }
    
    // 绑定分类标签点击事件
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', function() {
            const category = this.textContent; // 获取分类名称
            filterByCategory(category); // 执行分类过滤
        });
    });
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initPage(); // 初始化页面
    updateLoginUI(); // 初始化登录UI
    bindLoginModalEvents(); // 绑定登录注册弹窗事件
    // 新建按钮逻辑：未登录弹登录，已登录可自定义
    const newBtn = document.querySelector('.new-btn');
    if (newBtn) {
        newBtn.onclick = function() {
            if (!isLoggedIn) {
                showLoginModal();
            } else {
                // 这里可放新建功能，暂时用alert演示
                alert('已登录，可执行新建操作');
            }
        };
    }
}); 