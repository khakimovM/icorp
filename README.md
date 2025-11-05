<p align="center">
  <a href="http://nestjs.com/" target="blank">
    <img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" />
  </a>
</p>

<p align="center">
  <b>ICorp Test API — NestJS loyihasi</b><br/>
  <i>HTTP so‘rovlar bilan ishlovchi test avtomatlashtirilgan tizim</i>
</p>

---

## 🚀 Loyihani qisqacha tavsifi

Ushbu loyiha NestJS yordamida yozilgan bo‘lib, test API bilan o‘zaro aloqada bo‘ladi.  
Jarayon ikki bosqichda ishlaydi:

1. **Birinci bosqich** — foydalanuvchi `msg` yuboradi va server birinchi kod qismini oladi.
2. **Ikkinchi bosqich** — test API ikkinchi qismni serverga avtomatik yuboradi.
3. So‘ng yakuniy natijani `final` endpoint orqali ko‘rish mumkin.

---

## 🧩 Loyihani sinashning ikki usuli

### 🟢 1. **Serverdagi Swagger orqali sinash (oddiy usul)**

> Ushbu usulda siz loyihani serverda joylashtirilgan holatda sinab ko‘rishingiz mumkin.

#### 🔗 Swagger manzili:

```
http://51.20.133.17:3000/api/docs
```

#### 🔹 Bosqichlar:

1. Swagger sahifasiga kiring.
2. `GET /api/icorp/start` endpointini ishga tushiring (`text` parametrini kiriting).
3. Server avtomatik tarzda ikkinchi qismni (`second-part`) qabul qiladi.
4. So‘ng `GET /api/icorp/final` endpointini ishga tushirib yakuniy natijani oling.

> ⚠️ **Eslatma:** Bu usulda loglar (`console.log`) serverda ko‘rinmaydi.

---

### 🧠 2. **Loyihani lokalda ngrok orqali ishlatish (real loglarni ko‘rish uchun)**

Agar siz jarayonni **real vaqt loglari bilan** kuzatmoqchi bo‘lsangiz, loyihani o‘zingizning kompyuteringizda ishga tushirishingiz kerak.

#### 🔹 1-qadam: Loyihani klonlash

```bash
git clone https://github.com/khakimovM/icorp
cd icorp
```

#### 🔹 2-qadam: Kutubxonalarni o‘rnatish

```bash
yarn install
```

#### 🔹 3-qadam: `.env` faylini yaratish

`.env` fayl ichiga quyidagilarni yozing:

```env
APIURL=https://test.icorp.uz/interview.php
BASEURL=https://<YOUR_NGROK_URL>
PORT=3000
```

> **BASEURL** ni keyinchalik ngrok orqali olasiz.

#### 🔹 4-qadam: Serverni ishga tushirish

```bash
yarn start:dev
```

#### 🔹 5-qadam: Ngrok orqali global URL olish

Ngrok’ni o‘rnatish va ishlatish bo‘yicha to‘liq video qo‘llanma shu yerda:  
🎥 [YouTube: Ngrok o‘rnatish va sozlash](https://www.youtube.com/watch?v=pOv7gVqVzKI)

Ngrok o‘rnatilgandan so‘ng quyidagi buyruqni yozing:

```bash
ngrok http 3000
```

Ngrok sizga quyidagiga o‘xshash URL beradi:

```
https://velutinous-janna-shinily.ngrok-free.dev
```

Shu URL’ni `.env` fayldagi `BASEURL` qiymatiga yozasiz.

---

## 🧪 Sinov jarayoni (lokal yoki serverda)

1. `GET /api/icorp/start` — jarayonni boshlaydi, birinchi qismni oladi.
2. Server avtomatik tarzda `POST /api/icorp/second-part` orqali ikkinchi qismni qabul qiladi.
3. `GET /api/icorp/final` — yakuniy natijani qaytaradi.

---

## ⚙️ Ishga tushirish buyrug‘lari

```bash
# Development
$ yarn start:dev

# Production
$ yarn start:prod
```

---

## 📄 Muhim eslatma

> `BASEURL` har safar ngrok qayta ishga tushirilganda o‘zgaradi.  
> Shu sababli yangi ngrok URL’ni `.env` faylga yozib qo‘yish zarur.

---

## 🧰 Foydali manbalar

- [NestJS rasmiy hujjatlar](https://docs.nestjs.com)
- [Swagger haqida qo‘llanma](https://docs.nestjs.com/openapi/introduction)
- [Ngrok sayti](https://ngrok.com)
- [YouTube qo‘llanma (muxim video)](https://www.youtube.com/watch?v=pOv7gVqVzKI)

---

## 👨‍💻 Muallif

**Xakimov Muxammadaziz Ravshanjon o‘g‘li**  
GitHub: [@khakimovM](https://github.com/khakimovM)  
YouTube: [Muxammadaziz Dev](https://www.youtube.com/watch?v=pOv7gVqVzKI)  
Email: khakimovmukhammadaziz@gmail.com

---
