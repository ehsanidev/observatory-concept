// script.js

// اطلاعات نقاط (مختصات و محتوا)
const points = [
    {
        x: 200,
        y: 150,
        title: "نقطه اول",
        text: "این توضیحات مربوط به نقطه اول است. هر محتوایی که می‌خواهید اینجا بنویسید."
    },
    {
        x: 500,
        y: 300,
        title: "نقطه دوم",
        text: "توضیحات نقطه دوم - می‌توانید لورم ایپسوم یا هر متن دلخواه قرار دهید."
    },
    {
        x: 800,
        y: 500,
        title: "نقطه سوم",
        text: "نقطه سوم: این یک نمونه متن طولانی‌تر است تا ببینید مودال چگونه رفتار می‌کند."
    },
    {
        x: 350,
        y: 600,
        title: "نقطه چهارم",
        text: "نقطه چهارم با توضیحات اختصاصی خودش."
    },
    {
        x: 700,
        y: 200,
        title: "نقطه پنجم",
        text: "پنجمین نقطه تعاملی روی تصویر"
    },
    {
        x: 100,
        y: 400,
        title: "نقطه ششم",
        text: "ششمین نقطه با توضیحات متفاوت"
    },
    {
        x: 900,
        y: 700,
        title: "نقطه هفتم",
        text: "نقطه هفتم در پایین صفحه"
    }
];

let activeLines = [];
let currentModalDot = null;
let resizeTimeout;

// ایجاد نقاط قرمز
function createRedDots() {
    const container = document.getElementById('contentArea');
    
    points.forEach((point, index) => {
        const dot = document.createElement('div');
        dot.className = 'red-dot';
        dot.style.left = point.x + 'px';
        dot.style.top = point.y + 'px';
        dot.setAttribute('data-index', index);
        dot.setAttribute('data-title', point.title);
        dot.setAttribute('data-text', point.text);
        dot.setAttribute('data-x', point.x);
        dot.setAttribute('data-y', point.y);
        
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            showModalWithLines(dot, point.title, point.text);
        });
        
        container.appendChild(dot);
    });
}

// نمایش مودال و خطوط چین دار
function showModalWithLines(dot, title, text) {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    
    // تنظیم محتوای مودال
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalText').innerText = text;
    
    // مختصات نقطه
    const dotRect = dot.getBoundingClientRect();
    const dotCenterX = dotRect.left + dotRect.width / 2;
    const dotCenterY = dotRect.top + dotRect.height / 2;
    
    // نمایش مودال
    modal.classList.add('show');
    
    // محاسبه موقعیت مودال (کنار نقطه)
    let modalLeft = dotCenterX + 20;
    let modalTop = dotCenterY;
    
    // اطمینان از ماندن مودال در صفحه
    const modalRect = modal.getBoundingClientRect();
    if (modalLeft + modalRect.width > window.innerWidth) {
        modalLeft = dotCenterX - modalRect.width - 20;
    }
    if (modalTop + modalRect.height > window.innerHeight) {
        modalTop = window.innerHeight - modalRect.height - 20;
    }
    if (modalTop < 10) modalTop = 10;
    if (modalLeft < 10) modalLeft = 10;
    
    modal.style.left = modalLeft + 'px';
    modal.style.top = modalTop + 'px';
    
    // رسم خطوط چین دار
    drawDottedLines(dotCenterX, dotCenterY, modalLeft, modalTop, modalRect.width, modalRect.height);
    
    overlay.classList.add('active');
    currentModalDot = dot;
}

// رسم 4 خط چین دار به چهار گوشه مودال
function drawDottedLines(dotX, dotY, modalLeft, modalTop, modalWidth, modalHeight) {
    // حذف خطوط قبلی
    removeDottedLines();
    
    // چهار گوشه مودال
    const corners = [
        { x: modalLeft, y: modalTop }, // گوشه بالا-چپ
        { x: modalLeft + modalWidth, y: modalTop }, // گوشه بالا-راست
        { x: modalLeft, y: modalTop + modalHeight }, // گوشه پایین-چپ
        { x: modalLeft + modalWidth, y: modalTop + modalHeight } // گوشه پایین-راست
    ];
    
    corners.forEach(corner => {
        const line = createDottedLine(dotX, dotY, corner.x, corner.y);
        document.body.appendChild(line);
        activeLines.push(line);
    });
}

// ایجاد یک خط چین دار بین دو نقطه
function createDottedLine(x1, y1, x2, y2) {
    const line = document.createElement('div');
    line.className = 'dotted-line';
    
    const length = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    const angle = Math.atan2(y2 - y1, x2 - x1) * 180 / Math.PI;
    
    line.style.width = length + 'px';
    line.style.left = x1 + 'px';
    line.style.top = y1 + 'px';
    line.style.transform = `rotate(${angle}deg)`;
    
    return line;
}

// حذف خطوط چین دار
function removeDottedLines() {
    activeLines.forEach(line => {
        if (line && line.parentNode) line.parentNode.removeChild(line);
    });
    activeLines = [];
}

// بستن مودال
function closeModal() {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    
    modal.classList.remove('show');
    overlay.classList.remove('active');
    removeDottedLines();
    currentModalDot = null;
}

// تنظیم مجدد خطوط هنگام اسکرول
window.addEventListener('scroll', () => {
    if (currentModalDot && document.getElementById('modal').classList.contains('show')) {
        const modal = document.getElementById('modal');
        const dotRect = currentModalDot.getBoundingClientRect();
        const dotCenterX = dotRect.left + dotRect.width / 2;
        const dotCenterY = dotRect.top + dotRect.height / 2;
        const modalRect = modal.getBoundingClientRect();
        
        removeDottedLines();
        drawDottedLines(dotCenterX, dotCenterY, modalRect.left, modalRect.top, modalRect.width, modalRect.height);
    }
});

// تنظیم مجدد هنگام تغییر اندازه پنجره
window.addEventListener('resize', () => {
    if (currentModalDot) {
        // با تاخیر کوچک برای جلوگیری از اجرای مکرر
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            const modal = document.getElementById('modal');
            if (modal.classList.contains('show')) {
                closeModal();
            }
        }, 200);
    }
});

// بستن مودال با کلیک روی overlay
document.getElementById('overlay').addEventListener('click', closeModal);

// بستن با کلید Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeModal();
    }
});

// اطمینان از حذف خطوط هنگام اسکرول سریع
let scrolling = false;
window.addEventListener('scroll', () => {
    if (!scrolling) {
        window.requestAnimationFrame(() => {
            if (currentModalDot && document.getElementById('modal').classList.contains('show')) {
                const modal = document.getElementById('modal');
                const dotRect = currentModalDot.getBoundingClientRect();
                const dotCenterX = dotRect.left + dotRect.width / 2;
                const dotCenterY = dotRect.top + dotRect.height / 2;
                const modalRect = modal.getBoundingClientRect();
                
                removeDottedLines();
                drawDottedLines(dotCenterX, dotCenterY, modalRect.left, modalRect.top, modalRect.width, modalRect.height);
            }
            scrolling = false;
        });
        scrolling = true;
    }
});

// راه‌اندازی اولیه پس از لود کامل صفحه
document.addEventListener('DOMContentLoaded', () => {
    createRedDots();
    
    // اضافه کردن استایل اضافی برای نقاط در صورت نیاز
    console.log('نقاط قرمز با انیمیشن ایجاد شدند');
});