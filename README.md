# پروژه نقاط تعاملی با انیمیشن و مودال / Interactive Dot Points Project with Animation & Modal

[فارسی](#فارسی) | [English](#english)

---

# فارسی

## 📋 معرفی
یک پروژه HTML/CSS/JS مدرن و تعاملی که شامل لایه‌های مختلف بصری، نقاط قرمز با انیمیشن نور، مودال اطلاعاتی و خطوط اتصال چین‌دار است.

## ✨ ویژگی‌ها

- **پس‌زمینه چندلایه:** GIF متحرک + گرادیانت محو + تصویر ثابت
- **نقاط تعاملی:** دایره‌های قرمز 5x5 پیکسلی با انیمیشن نور تنفسی
- **افکت هاور:** قطع انیمیشن و بزرگ شدن نقطه با نور شدیدتر
- **مودال اطلاعاتی:** نمایش محتوای هر نقطه در یک مودال سفید با دکمه بستن
- **خطوط اتصال:** 4 خط چین قرمز از نقطه به چهار گوشه مودال
- **تجربه کاربری روان:** بستن مودال با کلیک خارج، کلید Escape یا دکمه بستن
- **ریسپانسیو:** سازگار با موبایل و تبلت
- **عملکرد بهینه:** استفاده از تکنیک‌های بهینه‌سازی برای رندرینگ روان

## 🛠️ تکنولوژی‌ها

- HTML5
- CSS3 (Grid, Flexbox, Animations, Gradients)
- JavaScript (ES6+)

## 📁 ساختار پروژه

```
project/
│
├── index.html          # ساختار اصلی صفحه
├── styles.css          # استایل‌ها و انیمیشن‌ها
├── script.js           # منطق و رویدادهای جاوااسکریپت
├── your-gif.gif        # فایل GIF پس‌زمینه (تغییر دهید)
└── your-image.jpg      # تصویر اصلی زمینه (تغییر دهید)
```

## 🚀 نحوه استفاده

### 1. جایگزینی تصاویر

```css
/* در styles.css */
body {
    background-image: url('مسیر-به-گیف-شما.gif');
}

.main-container {
    background-image: url('مسیر-به-تصویر-شما.jpg');
}
```

### 2. تنظیم نقاط تعاملی

در فایل `script.js`، آرایه `points` را ویرایش کنید:

```javascript
const points = [
    {
        x: 200,        // موقعیت افقی (پیکسل از چپ)
        y: 150,        // موقعیت عمودی (پیکسل از بالا)
        title: "عنوان نقطه اول",
        text: "توضیحات کامل این نقطه..."
    },
    // نقاط بیشتر...
];
```

### 3. سفارشی‌سازی انیمیشن

مقادیر انیمیشن را در `styles.css` تنظیم کنید:

```css
@keyframes breathingGlow {
    0% { box-shadow: 0 0 1px rgba(255,0,0,0.2); }
    50% { box-shadow: 0 0 12px rgba(255,0,0,1); }
    100% { box-shadow: 0 0 1px rgba(255,0,0,0.2); }
}

.red-dot {
    animation-duration: 2.5s;  /* سرعت انیمیشن */
    width: 5px;
    height: 5px;
}
```

### 4. اجرای پروژه

به سادگی فایل `index.html` را در مرورگر باز کنید.

## 🎨 سفارشی‌سازی پیشرفته

### تغییر رنگ نقاط

```css
.red-dot {
    background: radial-gradient(circle, #ff4444, #cc0000);
    /* تغییر به آبی: */
    background: radial-gradient(circle, #4444ff, #0000cc);
}
```

### تغییر گرادیانت پس‌زمینه

```css
body::before {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0.8) 100%
    );
}
```

### تغییر استایل مودال

```css
.modal {
    background-color: #f9f9f9;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0,0,0,0.3);
}
```

## 📱 ریسپانسیو

پروژه به صورت خودکار برای دستگاه‌های مختلف بهینه می‌شود:

- **موبایل:** اندازه مودال کوچک‌تر، فاصله کمتر
- **تبلت:** تنظیمات میانی
- **دسکتاپ:** نمایش کامل امکانات

## 🔧 رفع اشکال

**مشکل:** نقاط قرمز نمایش داده نمی‌شوند  
**راه‌حل:** مطمئن شوید `contentArea` در HTML وجود دارد و CSS به درستی لود شده است

**مشکل:** تصاویر لود نمی‌شوند  
**راه‌حل:** مسیر فایل‌ها را بررسی کنید و از وجود تصاویر اطمینان حاصل کنید

**مشکل:** خطوط چین دار نامنظم هستند  
**راه‌حل:** این به دلیل تغییر اندازه پنجره است؛ با رفرش صفحه حل می‌شود

## 📝 نکات اضافی

- برای عملکرد بهتر، از تصاویر با حجم کم استفاده کنید
- مختصات نقاط را متناسب با ابعاد تصویر اصلی تنظیم کنید
- می‌توانید تعداد نقاط را به دلخواه افزایش دهید

## 📄 لایسنس

این پروژه رایگان و متن‌باز است.

---

# English

## 📋 Introduction
A modern, interactive HTML/CSS/JS project featuring multiple visual layers, red dot points with glowing animation, information modals, and dashed connecting lines.

## ✨ Features

- **Multi-layer Background:** Animated GIF + Fading Gradient + Static Image
- **Interactive Points:** 5x5 pixel red circles with breathing glow animation
- **Hover Effect:** Animation stops with dot scaling and intensified glow
- **Information Modal:** Display point content in a white modal with close button
- **Connecting Lines:** 4 red dashed lines from dot to modal corners
- **Smooth UX:** Close modal by clicking outside, Escape key, or close button
- **Responsive:** Compatible with mobile and tablet devices
- **Optimized Performance:** Uses optimization techniques for smooth rendering

## 🛠️ Technologies

- HTML5
- CSS3 (Grid, Flexbox, Animations, Gradients)
- JavaScript (ES6+)

## 📁 Project Structure

```
project/
│
├── index.html          # Main page structure
├── styles.css          # Styles and animations
├── script.js           # JavaScript logic and events
├── your-gif.gif        # Background GIF file (replace)
└── your-image.jpg      # Main background image (replace)
```

## 🚀 How to Use

### 1. Replace Images

Replace the following files with your own images:

```css
/* In styles.css */
body {
    background-image: url('path-to-your-gif.gif');
}

.main-container {
    background-image: url('path-to-your-image.jpg');
}
```

### 2. Configure Interactive Points

Edit the `points` array in `script.js`:

```javascript
const points = [
    {
        x: 200,        // Horizontal position (pixels from left)
        y: 150,        // Vertical position (pixels from top)
        title: "First Point Title",
        text: "Complete description of this point..."
    },
    // More points...
];
```

### 3. Customize Animation

Adjust animation values in `styles.css`:

```css
@keyframes breathingGlow {
    0% { box-shadow: 0 0 1px rgba(255,0,0,0.2); }
    50% { box-shadow: 0 0 12px rgba(255,0,0,1); }
    100% { box-shadow: 0 0 1px rgba(255,0,0,0.2); }
}

.red-dot {
    animation-duration: 2.5s;  /* Animation speed */
    width: 5px;
    height: 5px;
}
```

### 4. Run the Project

Simply open `index.html` in your browser.

## 🎨 Advanced Customization

### Change Dot Colors

```css
.red-dot {
    background: radial-gradient(circle, #ff4444, #cc0000);
    /* Change to blue: */
    background: radial-gradient(circle, #4444ff, #0000cc);
}
```

### Change Background Gradient

```css
body::before {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0.8) 0%,
        rgba(0, 0, 0, 0.3) 50%,
        rgba(0, 0, 0, 0.8) 100%
    );
}
```

### Change Modal Style

```css
.modal {
    background-color: #f9f9f9;
    border-radius: 20px;
    box-shadow: 0 15px 50px rgba(0,0,0,0.3);
}
```

## 📱 Responsive Design

The project automatically optimizes for different devices:

- **Mobile:** Smaller modal size, reduced spacing
- **Tablet:** Intermediate settings
- **Desktop:** Full feature display

## 🔧 Troubleshooting

**Issue:** Red dots not displaying  
**Solution:** Ensure `contentArea` exists in HTML and CSS loads correctly

**Issue:** Images not loading  
**Solution:** Check file paths and verify images exist

**Issue:** Dashed lines are irregular  
**Solution:** This occurs due to window resizing; refresh the page to fix

## 📝 Additional Notes

- Use lightweight images for better performance
- Adjust point coordinates according to your main image dimensions
- You can increase the number of points as needed

## 📄 License

This project is free and open-source.

---

## 👨‍💻 توسعه‌دهنده / Developer

برای سوالات و پیشنهادات، با ما در ارتباط باشید / For questions and suggestions, feel free to reach out.

---
  
**آخرین بروزرسانی / Last Updated:** 2026
