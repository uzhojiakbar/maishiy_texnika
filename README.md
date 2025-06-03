# Maishiy Texnika Ta'mirlash Sayti

Bu loyiha zamonaviy va professional ko‘rinishga ega bo‘lgan maishiy texnika ta’mirlash xizmatlari uchun landing page hisoblanadi. Sayt orqali foydalanuvchilar ustani chaqirish uchun ariza qoldirishi, xizmatlar va jamoa haqida ma’lumot olishi, mijozlar fikrlari bilan tanishishi mumkin.

## Loyihaning asosiy imkoniyatlari

- **Zamonaviy dizayn** – barcha bo‘limlar professional va responsive (mobilga mos) ko‘rinishda.
- **Usta chaqirish formasi** – foydalanuvchi ariza yuborishi va admin panel orqali arizalarni boshqarish.
- **Xizmatlar ro‘yxati** – asosiy xizmatlar kartochkalar ko‘rinishida.
- **Jamoa bo‘limi** – ustalar haqida ma’lumotlar dinamik tarzda chiqariladi.
- **Mijozlar fikri** – real feedbacklar kartochka ko‘rinishida.
- **Admin panel** – arizalarni ko‘rish, bajarilganini belgilash va o‘chirish.
- **Toast bildirishnomalari** – harakatlar muvaffaqiyati yoki xatoliklar uchun.
- **Footer** – aloqa ma’lumotlari va ijtimoiy tarmoqlar.

## Texnologiyalar

- **Frontend:** HTML5, CSS3 (Bootstrap va custom), JavaScript (Vanilla)
- **Backend:** PHP (arizalarni qabul qilish va boshqarish uchun)
- **Ma’lumotlar bazasi:** MySQL (arizalar uchun)
- **Ikonkalar:** FontAwesome

## Loyihani ishga tushirish

1. **Kodni yuklab oling yoki klon qiling:**

   ```
   git clone https://github.com/uzhojiakbar/maishiy_texnika.git
   ```

2. **XAMPP yoki boshqa lokal serverda loyihani joylashtiring.**

   - Loyihani `htdocs` papkasiga joylashtiring (masalan: `c:\xampp\htdocs\maishiy_texnika`).

3. **Ma’lumotlar bazasini import qiling:**

   - `ustalar_production` nomli MySQL bazasini yarating.
   - `php` papkasidagi kerakli SQL fayllarni import qiling (agar mavjud bo‘lsa).

4. **`config` va PHP fayllarni sozlang:**

   - `php/usta_chaqirish.php` va boshqa PHP fayllarda baza ulanishini tekshiring.

5. **Saytga browser orqali kiring:**
   ```
   http://localhost/maishiy_texnika/
   ```

## Muhim fayllar va papkalar

- `index.html` – asosiy sahifa
- `css/main.css` – asosiy stillar
- `js/admin.js` – admin panel va toastlar
- `js/hero-bg.js` – hero section fon animatsiyasi
- `php/usta_chaqirish.php` – ariza yuborish backend
- `php/get_applications.php`, `php/mark_done.php`, `php/delete_application.php` – admin uchun API
- `img/` – barcha rasm va ikonka fayllari

## Admin panel

- Admin panelga kirish uchun:  
  **Login:** `admin`  
  **Parol:** `admin`
- Admin panel orqali arizalarni ko‘rish, bajarilganini belgilash va o‘chirish mumkin.

## Dizayn va UX

- Barcha bo‘limlar zamonaviy, minimalist va mobilga mos.
- Formalar, kartalar va tugmalar uchun maxsus hover va fokus effektlar.
- Toast bildirishnomalari foydalanuvchi uchun qulaylik yaratadi.

## Litsenziya

Loyiha ochiq va o‘zgartirish uchun mo‘ljallangan.

---
