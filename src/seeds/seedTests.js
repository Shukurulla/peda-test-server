const TestSection = require('../models/TestSection');
const Test = require('../models/Test');

const sections = [
  { name: "Keys-stadi", slug: "keys-stadi", description: "Keys-stadi usulning diskursiv kompetensiyaga ta'siri yo'nalishlari testi", order: 1 },
  { name: "Pedagogik mahorat", slug: "pedagogik-mahorat", description: "Pedagogik mahorat testlari", order: 2 },
  { name: "Kasb standarti", slug: "kasb-standarti", description: "Kasb standarti testlari", order: 3 }
];

// Section 1: Keys-stadi (5 ta)
const keysStadiTests = [
  {
    questionNumber: 1,
    context: "2-sinf matematika darsida o'qituvchi boladan «6 + 7 necha bo'ladi?» deb so'raydi. Bola «eee... bilmadim... balki 12?» deb pauza qilib, keyin jim qoladi.",
    question: "O'qituvchi bu vaziyatda qanday yo'l tutishi mumkin?",
    variants: [
      { label: "A", text: "«Kel, birga sanaymiz: 6 ta olma, yana 7 ta... necha bo'ldi?»" },
      { label: "B", text: "«Yo'q, 13! Keyingisi!»" },
      { label: "C", text: "«Nima uchun shu oddiy savol javobini bilmaysan?!»" },
      { label: "D", text: "«Yo'q, 13! Bahong ikki!»" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 2,
    context: "3-sinf o'quvchilari tanaffusda o'yinchoq uchun talashib qoladi. Biri «Meniki! Ber!» deb baqiradi, ikkinchisi «Yo'q, men olganman!» deydi.",
    question: "O'qituvchi bu vaziyatda qanday yo'l tutishi mumkin?",
    variants: [
      { label: "A", text: "«Keling, navbatma-navbat aytamiz: sen nega xohlaysan, sen nega bermaysan? aniqliq kiritiladi»" },
      { label: "B", text: "«Qani nima uchun urishasan, ikkalanga ham yo'q.»" },
      { label: "C", text: "«Jim bo'linglar! Ikkingiz ham o'tiring!»" },
      { label: "D", text: "«Hechkimga berilmaydi bu!»" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 3,
    context: "1-sinfda o'qituvchi «Mening sevikli hayvonim» mavzusida hikoya so'raydi. Bola «Mening mushugim bor... u oq... u... eee... uyda yuguradi...» deb to'xtab qoladi.",
    question: "O'qituvchi bu vaziyatda qanday yo'l tutishi mumkin?",
    variants: [
      { label: "A", text: "«Oq mushukmi? U nima yeydi? U seni ko'rganda nima qiladi?» deb ochiq savollar berib, bolaning gapini davom ettiradi." },
      { label: "B", text: "To'g'ri va aniq gapirmasan bahongni pasaytiraman!" },
      { label: "C", text: "Nega mavzudan chetga chiqding, o'ylab hikoya qilishni o'rgan." },
      { label: "D", text: "«Yaxshi, o'tir!» deb keyingisiga o'tadi" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 4,
    context: "4-sinfda guruhda «Tabiat» rasmi chizish topshirig'i. Bir bola «Men osmonni ko'k qilaman», ikkinchisi «Yo'q, yashil bo'lsin!» deydi.",
    question: "O'qituvchi bu vaziyatda qanday yo'l tutishi mumkin?",
    variants: [
      { label: "A", text: "«Har biringiz o'z fikringizni ayting, keyin birgalikda qaror qabul qilamiz»" },
      { label: "B", text: "«O'zingiz hal qiling!» deb qoldiradi." },
      { label: "C", text: "«Men bilmadim, janjal qilishni bas qilinglar!»" },
      { label: "D", text: "«Guruh rahbaringiz aytsin!»" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 5,
    context: "Sinf rahbari onaga bolasini yozib bilmasligi, bunga harakat ham qilmasligi haqida ma'lum qildi. Onasi o'qituvchining gaplarini eshitgisi ham kelmay \"o'zingiz o'qitasiz, bunga majbursiz\" deb javob qaytardi.",
    question: "O'qituvchi bu vaziyatda qanday yo'l tutishi mumkin?",
    variants: [
      { label: "A", text: "Onaga tushuntirishga harakat qiladi va maktab psixologi bilan gaplashtiradi." },
      { label: "B", text: "Onaga baqirib ketadi." },
      { label: "C", text: "Bolasini boshqa maktabga olib ketishini aytadi." },
      { label: "D", text: "Jim indamasdan qoladi." }
    ],
    correctAnswer: "A"
  }
];

// Section 2: Pedagogik mahorat (50 ta)
const pedagogikMahoratTests = [
  {
    questionNumber: 1,
    question: "Maktabda to'rtinchi sinf o'quvchisida o'zgarishlar kuzatilmoqda. Avval yaxshi o'qigan, lekin o'qishi shu kunlarda orqaga chekinmoqda. Bundan tashvishlangan ustozlar maktab psixologini ish olib borishini tavsiya qilishdi. Lekin bu o'quvchi bundan bosh tortdi. Ushbu vaziyatda psixolog bolaning holatini aniqlash uchun qanday metoddan foydalanishi mumkin?",
    variants: [
      { label: "A", text: "Pedagogik kuzatish" },
      { label: "B", text: "Suhbat" },
      { label: "C", text: "Anketa" },
      { label: "D", text: "Tajriba" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 2,
    question: "Maktablarda kitobdagi bir bo'lim tugaganidan so'ng o'quvchilar bilim va amaliy ko'nikmalarini va o'rgangan malakalarini tekshirish uchun qanday metoddan foydalaniladi?",
    variants: [
      { label: "A", text: "Ta'lim muassasalarini hujjatlarini tahlil qilish metodi" },
      { label: "B", text: "Test metodi" },
      { label: "C", text: "Suhbat metodi" },
      { label: "D", text: "Anketa metodi" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 3,
    question: "Bolalar ijodini o'rganishning qanday turlari mavjud?",
    variants: [
      { label: "A", text: "Bilimlar bellashuvi; fan olimpiadalari" },
      { label: "B", text: "Turli mavzulardagi tanlovlar, maktab ko'rgazmalari" },
      { label: "C", text: "Festivallar, musobaqalar" },
      { label: "D", text: "Barchasi" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 4,
    question: "Moslashtiring. 1. O'qituvchining o'quv-tarbiyaviy faoliyatini puxta rejalashtirishi asosida yuzaga keladigan kasbiy pedagogik vaziyat bosqichlarini oldindan ko'ra olishi. 2. O'qituvchining o'z fani va boshqa fanlarni chuqur bilishida, o'zlashtirishda va amaliyotda namoyon etishi. a) Anglash qobiliyati, b) Bilish qobiliyati, c) Konstruktiv qobiliyati",
    variants: [
      { label: "A", text: "1c, 2b" },
      { label: "B", text: "1a, 2b" },
      { label: "C", text: "1b, 2a" },
      { label: "D", text: "1a, 2c" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 5,
    question: "Maktabda ona tili va adabiyot o'qituvchisi yosh bo'lishiga qaramay maktabda tashkil etiladigan turli tanlov, musobaqa, badiiy kechalarni tashkil qilishda vaqt reglamentiga, tadbir boshlanish, kulminatsion nuqta va natijaviy yakunga alohida e'tibor qaratadi. Ushbu vaziyatda o'qituvchining qanday qobiliyati namoyon bo'lmoqda?",
    variants: [
      { label: "A", text: "Didaktik qobiliyat" },
      { label: "B", text: "Anglash qobiliyati" },
      { label: "C", text: "Bilish qobiliyati" },
      { label: "D", text: "Konstruktiv qobiliyat" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 6,
    question: "Pedagogik bilimdonlik — pedagogning kasbiy faoliyatini mavjud ijtimoiy talab, huquqiy meyor va standartlarga muvofiq tashkil etishga bo'lgan qobilligi. Bilimdon pedagogga xos sifatlarni sanang. 1. Ijtimoiy subyektlar bilan o'zaro aloqa, madaniy muloqotda bo'lish. 2. Mutaxassislik yo'nalishi bo'yicha axborotlarni izlash, topish, ularni ta'lim mazmuniga tayangan holda qayta ishlash va kasbiy faoliyat jarayonida ulardan samarali foydalana bilish. 3. O'quv axborotlarini talabalar o'zlari topishiga o'rgatish.",
    variants: [
      { label: "A", text: "1, 2" },
      { label: "B", text: "1, 3" },
      { label: "C", text: "2, 3" },
      { label: "D", text: "1, 2, 3" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 7,
    question: "1. Hayrixohlik 2. Xushmuomilalik 3. Baxillik 4. Shaxsni muloqotdan qochishi 5. Gina-qudurat 6. Ko'mak berish. Sanalganlar orasidan simpatiyaga xos belgilarni sanang.",
    variants: [
      { label: "A", text: "1, 2, 6" },
      { label: "B", text: "3, 4, 5" },
      { label: "C", text: "1, 3, 4" },
      { label: "D", text: "2, 5, 6" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 8,
    question: "Moslikni toping. 1. Metodologik tahlil 2. Psixologik tahlil. A) O'quvchilarning kayfiyati, xushyorligi, ularning salomatligi... B) Ta'lim yo'nalishidagi hukumat qarorlari, talabalar... C) O'qituvchining tashqi qiyofasi, o'quvchilar bilan til topa olish mahorati...",
    variants: [
      { label: "A", text: "1a, 2b" },
      { label: "B", text: "1b, 2a" },
      { label: "C", text: "1a, 2c" },
      { label: "D", text: "1c, 2a" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 9,
    question: "Direktor o'rinbosari yosh mutaxassisning darslarini nazorat qildi. Yosh mutaxassis o'quvchilarning qabul qilish darajasi turli ekanligini hisobga olib, har bir o'quvchiga mos ravishda vazifalarni taqsimlab berdi. Dars so'ngida yangi mavzu barcha o'quvchi uchun birdek tushunarli ekanligi ma'lum bo'ldi. O'qituvchi ta'lim samaradorligini ta'minlash uchun qanday ko'nikmalarni namoyon etadi?",
    variants: [
      { label: "A", text: "Mazmunli ta'lim muhitini tashkil qilish va o'zgartirish" },
      { label: "B", text: "Turli xil muhitda har xil emotsional holatlardagi odamlar bilan aloqa qila bilish" },
      { label: "C", text: "O'zining ta'lim faoliyatini tahlil qilish va baholash" },
      { label: "D", text: "Dars vaqtini oqilona boshqarish shuningdek mas'uliyatli va ongli ravishda o'quvchilar ishini tashkil etish" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 10,
    question: "\"Pedagogik mahorat\" tushunchasi ta'rifini qamrab olgan javoblarni belgilang. 1. Madaniyatning yuqori darajasi, bilimdonlik va aqlzakovatning yuksak ko'rsatkichi. 2. O'z faniga doir bilimlarning mukammal sohibi. 3. Pedagogika va psixologiya kabi fanlar sohasidagi bilimlarni puxta egallaganligi. 4. O'quv tarbiyaviy ishlar metodikasini bilishi.",
    variants: [
      { label: "A", text: "1, 2, 3" },
      { label: "B", text: "1, 3, 4" },
      { label: "C", text: "1, 2, 3, 4" },
      { label: "D", text: "1, 2, 4" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 11,
    question: "O'qituvchi dars davomida suv bug'ga aylanib havoga ko'tariladi va yana yomg'ir, qor ko'rinishida suvga aylanib yerga tushadi dedi va bu holatni rasm orqali ko'rsatib berdi. Bu qaysi metod?",
    variants: [
      { label: "A", text: "Tasvir" },
      { label: "B", text: "Hikoya" },
      { label: "C", text: "Ma'ruza" },
      { label: "D", text: "Tushuntirish" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 12,
    question: "O'qituvchi dars davomida suv bug'ga aylanib havoga ko'tariladi va yana yomg'ir, qor ko'rinishida suvga aylanib yerga tushadi dedi va bu holatni doskada chizib ko'rsatdi. Bu qaysi metod?",
    variants: [
      { label: "A", text: "Tasvir" },
      { label: "B", text: "Hikoya" },
      { label: "C", text: "Ma'ruza" },
      { label: "D", text: "Tushuntirish" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 13,
    question: "O'qituvchi bolalarga ot so'z turkumi haqida qoidani aytib berishini so'radi. Bola qoidani o'z bilganlari asosida aytib berdi. Ushbu holatda Blum taksonomiyasining qaysi bosqichiga to'g'ri keladi?",
    variants: [
      { label: "A", text: "Bilish" },
      { label: "B", text: "Tushunish" },
      { label: "C", text: "Tahlil qilish" },
      { label: "D", text: "Sintez" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 14,
    question: "O'qituvchi doskaga daryo va dengizning rasmini ildi va o'quvchilardan bularning o'xshash va farqli tomonlarini, bog'liqliklarni aytishni so'radi. Bunda Blum taksonomiyasining qaysi bosqichiga to'g'ri kelmoqda?",
    variants: [
      { label: "A", text: "Bilish" },
      { label: "B", text: "Tushunish" },
      { label: "C", text: "Tahlil qilish" },
      { label: "D", text: "Sintez" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 15,
    question: "Maktabga yangi kelgan o'qituvchi ochiq dars tashkil qildi. Dars davomida bu o'qituvchining o'z fanini chuqur bilishi, boshqa fanlardan qisman xabardor ekanligi va fan yuzasidan o'rgangan bilimlarini amaliyotda juda yaxshi qo'llay olishi ma'lum bo'ldi. Bunda o'qituvchining qanday qobiliyati namoyon bo'lmoqda?",
    variants: [
      { label: "A", text: "Tashkilotchilik qobiliyati" },
      { label: "B", text: "Bilish qobiliyati" },
      { label: "C", text: "Konstruktiv qobiliyat" },
      { label: "D", text: "Anglash qobiliyati" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 16,
    question: "Umumiy o'rta ta'limning malaka talablarini sanang. 1. Bilim 2. Ko'nikma 3. Malaka 4. Kompetensiya 5. Baholash tizimi",
    variants: [
      { label: "A", text: "1, 2, 3" },
      { label: "B", text: "1, 2, 3, 4" },
      { label: "C", text: "1, 2, 3, 4, 5" },
      { label: "D", text: "1, 3, 4, 5" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 17,
    question: "Yozgi tatil vaqtida boshlang'ich ta'lim o'qituvchisi o'z ustida ishlab tayyorlov guruhlarida ishtirok etdi. O'quv yili boshidan boshlab bu o'qituvchi o'quvchilarning mantiqiy fikrlashini shakllantirish texnologiyalarini qo'llab, o'quvchilarning darsda faolliklarini oshirmoqda. Bunda \"pedagogik texnologiya\" tushunchasining qaysi darajasi namoyon bo'lmoqda?",
    variants: [
      { label: "A", text: "Makro daraja" },
      { label: "B", text: "Mikro daraja" },
      { label: "C", text: "Mezo daraja" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 18,
    question: "Maktab rahbari o'qituvchilar yig'ilishida o'qituvchilar har bir dars soatida o'tadigan mavzusini loyihalash va rejalashtirishini darsni texnologik xaritasi va modelini tuzib kelishi shartligini aytdi. Bunda \"pedagogik texnologiya\" tushunchasining qaysi darajasi namoyon bo'lmoqda?",
    variants: [
      { label: "A", text: "Makro daraja" },
      { label: "B", text: "Mikro daraja" },
      { label: "C", text: "Mezo daraja" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 19,
    question: "Respublika pedagogika fani doktor o'qituvchilari birgalikda yangi ta'lim metodini ishlab chiqdilar, amaliyotda kuzatdilar va uning samaradorligini kafolatlab, amaliyotga tatbiq qildilar. Bunda \"pedagogika texnologiya\" tushunchasining qaysi bosqichi namoyon bo'lmoqda?",
    variants: [
      { label: "A", text: "Umumpedagogik xususiyat" },
      { label: "B", text: "Xususiy-metodik" },
      { label: "C", text: "Lokal" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 20,
    question: "Moslashtiring. 1. Material ta'lim vositalari 2. Ideal ta'lim vositalari. A) O'quv qo'llanmalari, darsliklar, jadvallar, maketlar, modellar... B) Laboratoriya-praktikum qurollari... C) Chizmalar, sxemalar, diagrammalar, tasviriy san'at, nutq, xat...",
    variants: [
      { label: "A", text: "1a, 2b" },
      { label: "B", text: "1a, 2c" },
      { label: "C", text: "1c, 2a" },
      { label: "D", text: "1b, 2c" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 21,
    question: "Moslashtiring. 1. Interfaol ta'lim 2. Androgogika. A) Nafaqat o'qituvchini va o'quvchini, balki guruhlararo yoki alohida o'quvchilar orasidagi hamkorlik. B) Ta'lim nazariyasi - kattalar sub'yekti tomonidan bilim va ko'nikmalarni o'zlashtirishning o'ziga xos qonuniyatlarini ochib beradigan bo'limi. C) O'quvchilar shaxsiyatini rivojlantirishning ichki mexanizmlarini o'z ichiga olgan tizim.",
    variants: [
      { label: "A", text: "1a, 2b" },
      { label: "B", text: "1b, 2a" },
      { label: "C", text: "1c, 2b" },
      { label: "D", text: "1b, 2c" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 22,
    question: "Ta'limning texnik vositalari qanday funksiyalarni bajaradi? 1. Sifat va samaradorlikni oshirish 2. O'quv jarayonini jadallashtirish 3. Idrok qilishga yo'naltirish 4. Bilim olishga qiziqtirish 5. Bilimlarni va o'zini-o'zi nazorat qilishni ta'minlaydi",
    variants: [
      { label: "A", text: "1, 2, 3" },
      { label: "B", text: "2, 3, 4, 5" },
      { label: "C", text: "1, 2, 3, 4" },
      { label: "D", text: "1, 2, 3, 4, 5" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 23,
    question: "Ko'p yillardan beri o'qituvchilar dars berish jarayonida didaktik vositalardan foydalanib keladi. Didaktik vositalarga nimalar kiradi? 1. O'quv qo'llanmalar 2. Ko'rgazmalar 3. Namoyishli qurilmalar 4. Texnik vositalar",
    variants: [
      { label: "A", text: "1, 2, 3" },
      { label: "B", text: "1, 4" },
      { label: "C", text: "1, 2" },
      { label: "D", text: "1, 2, 3, 4" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 24,
    question: "O'qituvchi \"Yerning tuzilishi\" mavzusini o'rgatishda darslikdagi rasmlar, atlas xarita, slayd va diagrammalardan foydalandi. Har bir qatlamni tushuntirishda u tasvirni ko'rsatib, unga sharh berdi. Bu holatda o'qituvchi qaysi metoddan foydalangan?",
    variants: [
      { label: "A", text: "Tushuntirish metodi" },
      { label: "B", text: "Tasvir metodi" },
      { label: "C", text: "Namoyish metodi" },
      { label: "D", text: "Amaliy metod" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 25,
    question: "Darsda bir o'quvchi doim vazifalarni birinchi bajarib qo'yib boshqalar tugatguncha zerikib qoladi. Bunday holat takrorlanmasligi uchun o'qituvchi qanday yo'l tutishi kerak?",
    variants: [
      { label: "A", text: "Tengdoshlari tugatguncha faol o'quvchini qiyinroq vazifa bilan band qilish kerak" },
      { label: "B", text: "Vazifani osonlashtirish kerak shunda barcha birdek tugatadi" },
      { label: "C", text: "O'quvchiga tez bajarib qo'ymasligini tushuntirish kerak" },
      { label: "D", text: "O'quvchi vazifani bajarib bo'lgach boshqa o'quvchilarning vazifalariga yordam berishiga ruxsat berish" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 26,
    question: "Direktor o'rinbosari yosh mutaxassisning darslarini nazorat qildi. Yosh mutaxassis har bir o'quvchiga mos ravishda vazifalarni taqsimlab berdi. Dars so'ngida yangi mavzu barcha o'quvchi uchun birdek tushunarli ekanligi ma'lum bo'ldi. Shunda o'qituvchi qanday ko'nikmalarni namoyon etadi?",
    variants: [
      { label: "A", text: "Mazmunli ta'lim muhitini tashkil qilish va o'zgartirish" },
      { label: "B", text: "Turli xil muhitda har xil emotsional holatlardagi odamlar bilan aloqa qila bilish" },
      { label: "C", text: "O'zining ta'lim faoliyatini tahlil qilish va baholash" },
      { label: "D", text: "Dars vaqtini oqilona boshqarish, shuningdek mas'uliyatli va ongli ravishda o'quvchilar ishini tashkil etish" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 27,
    question: "Matematika fani o'qituvchisi darsda o'quvchilar zerikib qolayotganini sezdi. U bolalarni darsga bo'lgan qiziqishlarini qayta uyg'otish uchun turli texnologiyalardan foydalandi. Bunday holatda o'qituvchi kasbiy kompetentlikning qaysi mehnat harakatini bajargan hisoblanadi?",
    variants: [
      { label: "A", text: "Davlat ta'lim standartlari va o'quv dasturlarining maqsadlariga muvofiq o'quv rejalarini ishlab chiqish" },
      { label: "B", text: "O'quvchilarning ehtiyojlari va qiziqishlaridan kelib chiqib o'quv dasturini moslashtirish" },
      { label: "C", text: "O'z faoliyatini fanlararo kompetensiyalar predmetining korrelyatsiya va integratsiya tamoyillarini inobatga olgan holda rejalashtirish" },
      { label: "D", text: "O'quvchilarning bilimini baholash natijasida olingan ma'lumotlarni inobatga olgan holda rejalarni muvofiqlashtirish" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 28,
    question: "O'qituvchi o'quvchiga \"Otamdan qolgan dalalar\" asarini o'qish uchun vazifa sifatida berdi. O'qib bo'lgandan so'ng o'qituvchi \"ushbu asarda namoyon bo'lgan voqealar real hayotda uchratishimiz mumkinmi?\" degan savolni o'quvchiga berdi. Bunda qanday o'qitish namoyon bo'lmoqda?",
    variants: [
      { label: "A", text: "Didaktik o'qitish" },
      { label: "B", text: "Amaliy o'qitish" },
      { label: "C", text: "Izlanish usuli" },
      { label: "D", text: "Muammoli o'qitish" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 29,
    question: "O'qitishning qaysi usulida avval misollar, keyin umumiy qoida chiqariladi? Bu usulning afzalliklari: oson tushunadi, real misollardan o'rganadi. Kamchiliklari: har doim umumlashtirish to'g'ri xulosa bermasligi mumkin.",
    variants: [
      { label: "A", text: "Izlanish usuli" },
      { label: "B", text: "Muammoli usul" },
      { label: "C", text: "Induktiv usul" },
      { label: "D", text: "Deduktiv usul" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 30,
    question: "Sinfda bir o'quvchingizning grammatikadan juda kuchli, lekin uning og'zaki nutqi past. Bu o'quvchi bilan qanday ishlagan bo'lardingiz?",
    variants: [
      { label: "A", text: "Grammatikadan qayta-qayta gap yozdiraman" },
      { label: "B", text: "U o'quvchiga e'tibor bermayman" },
      { label: "C", text: "Grammatikasi yaxshiligidan foydalanib og'zaki nutqda sodda gaplar tuzdiraman" },
      { label: "D", text: "Ota-onasi bilan ishlashni aytaman" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 31,
    question: "O'qituvchi darsda yangi mavzuni tushuntirish jarayonida bir o'quvchining boshqa ish bilan bandligini payqadi va qolgan o'quvchilarning fikrini bo'lmaslik uchun bu o'quvchiga yuz va ko'z ishorasi orqali tanbeh berdi. Bunda pedagogik texnikaning qanday tashqi ko'rinishi namoyon bo'ladi?",
    variants: [
      { label: "A", text: "Pedagogik imidj" },
      { label: "B", text: "Pedagogik odob" },
      { label: "C", text: "Mimika" },
      { label: "D", text: "Pantomimika" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 32,
    question: "Qo'l harakatlari orqali o'qituvchi mavzuni yanada yaxshi tushuntirishi mumkin. Bunda pedagogik texnikaning qanday tashqi ko'rinishi namoyon bo'ladi?",
    variants: [
      { label: "A", text: "Pedagogik imidj" },
      { label: "B", text: "Pedagogik odob" },
      { label: "C", text: "Mimika" },
      { label: "D", text: "Pantomimika" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 33,
    question: "Ona tili fani o'qituvchisi o'quvchiga yangi lug'at o'rgatmoqchi, bunda o'qituvchining o'quv quroli qanaqa bo'lishi kerak?",
    variants: [
      { label: "A", text: "Tushunarli" },
      { label: "B", text: "Qiziqarli" },
      { label: "C", text: "O'qituvchi faoliyatini kamaytirish" },
      { label: "D", text: "O'quvchi ixtiyoriga topshirish kerak" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 34,
    question: "Kommunikativ qobiliyatning qanday yo'nalishlari mavjud? 1. O'quvchilarni ishontirish 2. O'quvchilarning ongiga ta'sir etish 3. O'zgalarga taqlid qilish 4. Faqat o'zini to'g'ri deb bilish",
    variants: [
      { label: "A", text: "1, 3, 4" },
      { label: "B", text: "2, 3, 4" },
      { label: "C", text: "1, 2, 3" },
      { label: "D", text: "1, 2, 3, 4" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 35,
    question: "4-sinf o'quvchilarning o'zlashtirishi pasayib ketdi. Sinf rahbari hamma ota-onaga qo'ng'iroq qilib chiqdi. Ular ishtirokida treninglar o'tkazdi. O'quvchilarga uy vazifalarni bajartirish bo'yicha tavsiyalar berdi. Bunday holatda o'qituvchi kasbiy kompetentlikning qaysi mehnat vazifasini bajargan hisoblanadi?",
    variants: [
      { label: "A", text: "O'quvchilarning ota-onalarini ta'lim jarayoniga jalb qilish" },
      { label: "B", text: "O'quvchilarning ota-onalarini sinf va maktab hayotiga jalb qilish" },
      { label: "C", text: "O'quvchilarning ota-onalarini qaror qabul qilishda ishtirok etishga jalb qilish" },
      { label: "D", text: "Tarbiyaviy muammolarni hal qilishda boshqa pedagogik xodimlar va mutaxassislar bilan hamkorlik qilish" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 36,
    question: "Pedagog ota-onalar va o'quvchilar bilan suhbatda so'z boyligining kengligi, fikr yuritayotganda mavzuga nisbatan chuqur bilimga ega ekanligi, bilimlarini o'z tafakkuri doirasida tahlil qila olishini namoyon etadi. Bunda pedagog nutqining asosiy xususiyatlaridan qay birini mohirona qo'llagan hisoblanadi?",
    variants: [
      { label: "A", text: "Nutqning mantiqiyligi" },
      { label: "B", text: "Nutqning tozaligi" },
      { label: "C", text: "Nutqning ifodaliligi" },
      { label: "D", text: "Nutqning go'zalligi" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 37,
    question: "O'qituvchi biror mavzu berganda, o'quvchi ushbu ma'lumotni asoslash uchun tanqidiy yondashuvdan foydalandi. Bu Blum taksonomiyasining qaysi bosqichi?",
    variants: [
      { label: "A", text: "Bilish" },
      { label: "B", text: "Qo'llash" },
      { label: "C", text: "Tahlil qilish" },
      { label: "D", text: "Baholash" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 38,
    question: "O'qituvchi mavzu yuzasidan qo'shimcha ma'lumotlar bilan ishlashni va zarur xulosalar qilishni topshirdi. Blum taksonomiyasining qaysi bosqichi amalga oshgan?",
    variants: [
      { label: "A", text: "Sintez" },
      { label: "B", text: "Qo'llash" },
      { label: "C", text: "Tahlil qilish" },
      { label: "D", text: "Baholash" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 39,
    question: "Siz darsga kiradigan sinfda bir o'quvchi amaliy mashqlarni bajaradi, lekin nazariyani xohlamaydi. Bunda o'qituvchi nima qilishi kerak?",
    variants: [
      { label: "A", text: "E'tiborsiz qoldirishi kerak" },
      { label: "B", text: "Motivatsiyasini oshirib kitob o'qib shug'ullanishga yordam berish kerak" },
      { label: "C", text: "Boshqa insonlarning ko'magidan foydalanish kerak" },
      { label: "D", text: "Ota-ona bola bilan shug'ullanishni aytish kerak" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 40,
    question: "O'qituvchi Nilufar o'zining dars berayotgan sinfida o'quvchilarning fan bo'yicha qiziqishi sustligi va bilimlarni o'zlashtirishda qiynalayotganini sezdi. U bu holatni ijobiy tomonga o'zgartirish maqsadida yangicha yondashuvni joriy qilishga qaror qildi. Quyidagi holatda ustoz tomonidan qo'llanishi eng ma'qul bo'lgan yangilik qaysi bo'lishi mumkin?",
    variants: [
      { label: "A", text: "Darsda ko'proq nazorat ishlarini o'tkazish" },
      { label: "B", text: "O'quvchilarga mustaqil ishlar sonini oshirish" },
      { label: "C", text: "Innovatsion metodlardan foydalanish" },
      { label: "D", text: "Qo'shimcha uy vazifalari tayinlash" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 41,
    question: "Blum taksonomiyasining qaysi bosqichida Nega?, Qayerda? kabi savollar beriladi?",
    variants: [
      { label: "A", text: "Bilish" },
      { label: "B", text: "Qo'llash" },
      { label: "C", text: "Tahlil qilish" },
      { label: "D", text: "Tushunish" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 42,
    question: "O'qituvchi dars rejasi bajarayotganda o'quvchilarning ishlash suratini kuzatadi va sodir bo'layotgan jarayonga javob-harakat qiladi. O'qituvchi o'quvchilar eplamayotgan vazifalarga qo'shimcha vaqt ajratadi. Ta'lim samaradorligini ta'minlashning qanday mehnat harakatlari namoyon bo'ladi?",
    variants: [
      { label: "A", text: "Dars maqsadlari asosida o'quvchilar uchun erishimli vazifalarni belgilash" },
      { label: "B", text: "Dars mavzusiga mos keladigan namoyish va tarqatma materiallardan foydalanish" },
      { label: "C", text: "Darsda vaqtdan oqilona foydalanish" },
      { label: "D", text: "Ta'lim jarayonini qo'llab-quvvatlash va ta'limiy muammolarni hal qilishda AKTdan foydalanish" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 43,
    question: "Kommunikativ nutqning muvaffaqiyatli bo'lishi uchun o'qituvchi o'zida notiqlik san'atiga xos qator maxsus qobiliyatlarni rivojlantirishi talab qilinadi. Muloqotda o'zining ruhiy holatini boshqara olish qobiliyatining asosiy tarkibiy qismlarini aniqlang. 1. Muloqot davomida g'azab, xafalik, stress yoki asabiylik kabi hissiyotlarni aniqlash va boshqarish. 2. Qiyin yoki keskin vaziyatlarda o'zini tinchlantirish va muammoni sovuqqonlik bilan hal qilish. 3. Suhbatdoshning hissiy holatini tushunishga harakat qilish va unga hurmat bilan munosabatda bo'lish. 4. Vaqtni samarali taqsimlash, maqsadlarni belgilash va ularga erishish uchun rejalar tuzish.",
    variants: [
      { label: "A", text: "1, 2, 3" },
      { label: "B", text: "1, 3, 4" },
      { label: "C", text: "1, 2, 4" },
      { label: "D", text: "2, 3, 4" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 44,
    question: "Quyida qayd etilgan ko'nikmalar o'qituvchining \"O'quv jarayonini rejalashtirish\" mehnat vazifalarining qaysi yo'nalishiga tegishli? Turli fan va mutaxassislik vakillari bilan samarali muloqot qilish, hamkorlikda tadqiqot va ta'lim jarayonlarini tashkil etish, turli sohalardagi bilimlarni solishtirish va bog'liqliklarni aniqlash.",
    variants: [
      { label: "A", text: "O'quvchilarning bilimini baholash natijasida olingan ma'lumotlarni inobatga olgan holda rejalarni muvofiqlashtirish" },
      { label: "B", text: "Fanlararo kompetensiyalarni fanga singdirish, o'z fanini boshqa fanlar bilan o'zaro bog'lash (korrelyatsiya)" },
      { label: "C", text: "Zamonaviy axborot texnologiyalarini fanga singdirish" },
      { label: "D", text: "Dars vaqtini oqilona rejalashtirish, darsning maqsad, shakl va usullarni aniqlash" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 45,
    question: "O'qituvchi dars o'tishda budan foydalansa, o'quvchi darsga oson tushunadi, real misollardan o'rganadi, lekin keltirilgan misollar umumlashmasi yaxlit natija bermasligi mumkin. Bu qanday usul?",
    variants: [
      { label: "A", text: "Induktiv usul" },
      { label: "B", text: "Deduktiv usul" },
      { label: "C", text: "Analogiya usuli" },
      { label: "D", text: "Amaliy usul" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 46,
    question: "O'qituvchi darsda ko'p hollarda o'quvchilarga qoida, ta'rif beradi, bu o'quvchilarning tez o'rganishiga, tizimli yondashuviga olib kelsa, ba'zan nazariya ko'p bo'lsa qiziqish pasayishiga olib keladi. Bu qaysi metod?",
    variants: [
      { label: "A", text: "Induktiv usul" },
      { label: "B", text: "Deduktiv usul" },
      { label: "C", text: "Analogiya usuli" },
      { label: "D", text: "Amaliy usul" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 47,
    question: "Agar o'qituvchi o'quvchining noto'g'ri xatti-harakatini tanqid qilmasdan, uning sabab va oqibatlari haqida gapirsa, nizoga sabab bo'lgan tomonlarga nisbatan muloyim va izchil muloqot orqali qanday to'g'ri va maqbul tarzda harakat qilish mumkinligini ko'rsata olsa, pedagogik nizolarni hal qilishning qanday usulini qo'llagan hisoblanadi?",
    variants: [
      { label: "A", text: "Suhbat usuli" },
      { label: "B", text: "Iltimos usuli" },
      { label: "C", text: "Ishontirish usuli" },
      { label: "D", text: "Tushuntirish usuli" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 48,
    question: "O'quvchilarga mavzuni tushuntirishni osonlashtirish maqsadida o'qituvchi darsni hikoya bilan boshladi: \"Bir kuni kichik qishloqda yashovchi Umar degan bola bobosiga yog'ochdan qoshiq yasab berdi...\" O'quvchilarning diqqati jamlangandan so'ng u asosiy dars mavzusini boshladi. Shunda pedagog qaysi ta'lim metodidan foydalandi?",
    variants: [
      { label: "A", text: "Ta'limda tasvir metodi" },
      { label: "B", text: "Ta'limda amaliy metodi" },
      { label: "C", text: "Ta'limda hikoya metodi" },
      { label: "D", text: "Ta'limda namoyish metodi" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 49,
    question: "Texnologiya fani o'qituvchi o'z kasbiy faoliyatida boshqalar bilan muloqot qilishga qiynaladi. O'qituvchi kommunikativ nutqini shakllantirmoqchi va o'z ustida ishlamoqchi. Bunda o'z-o'zini rivojlantirish va kasbiy o'sishning qanday mehnat harakatlari namoyon bo'lmoqda?",
    variants: [
      { label: "A", text: "O'zaro darslarda qatnashish, ularni tahlil qilish, undan o'zining kasbiy faoliyatida foydalanish" },
      { label: "B", text: "O'z tajribasini namoyish etish uchun ochiq darslarga tayyorgarlik ko'rish va o'tkazish" },
      { label: "C", text: "O'zining ta'lim faoliyatini (kuchli va zaif tomonlarini) yetarlicha baholash va kasbiy rivojlanish ehtiyojlarini belgilay olish" },
      { label: "D", text: "O'zining ish amaliyotida kerakli o'zgarishlarni amalga oshirish" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 50,
    question: "Ona tili o'qituvchisi Dilorom opa darsdan keyin o'zini tahlil qiladi: \"O'quvchilarga mavzuni tushuntirishda men juda tez gapirdimmi?\", \"Qiziqarli topshiriqlar yetarlimi?\". Shu savollar orqali u o'z faoliyatidagi kuchli va zaif tomonlarini anglaydi. Dilorom opaning o'z xatti-harakati va dars jarayonidagi faoliyatini tahlil qilishi nima deyiladi?",
    variants: [
      { label: "A", text: "Pedagogik mahorat" },
      { label: "B", text: "Pedagogik bilimdonlik" },
      { label: "C", text: "Pedagogik nazokat" },
      { label: "D", text: "Pedagogik refleksiya" }
    ],
    correctAnswer: "D"
  }
];

// Section 3: Kasb standarti (30 ta)
const kasbStandartiTests = [
  {
    questionNumber: 1,
    question: "Nima uchun o'quvchilarning yutuqlarini baholash va bahoni asoslab berish juda muhim?",
    variants: [
      { label: "A", text: "Sinf kesimida nisbiy baholash va o'quvchilarga individual ta'lim ehtiyojlaridan kelib chiqib, o'z vaqtida yordam berish" },
      { label: "B", text: "Maqsadga qay darajada erishganligini ko'rsatish, o'qishni davom ettirishga qiziqtirish, motivatsiya berish" },
      { label: "C", text: "O'quvchilarga o'zlarining asoslangan va mas'uliyatli qarorlarini qabul qilishga yordam berish" },
      { label: "D", text: "O'quvchilar erkin rivojlanishlari va o'zlarini namoyon eta olishlari uchun o'zaro hurmat muhitini yaratish" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 2,
    question: "Darsni boshlashdan avval o'qituvchi har bir o'quvchining darsdan tashqari vaqtda nima bilan shug'ullanishi haqida so'radi. Dars davomida barcha o'quvchi faol ishtirok etdi. O'qituvchi ta'lim samaradorligini ta'minlash maqsadida qanday usuldan foydalandi?",
    variants: [
      { label: "A", text: "O'quvchilarni darsga qiziqtirish va ularni faollashtirishda turli usul va texnologiyalardan foydalandi" },
      { label: "B", text: "O'quvchilar darsda faol qatnashishlarini motivatsiyalashda ularning shaxsiy qiziqishlaridan foydalandi" },
      { label: "C", text: "Motivatsion vaziyatlarni yaratish, ularning samaradorligini tahlil qilish texnologiyasidan foydalandi" },
      { label: "D", text: "Dars vaqtini oqilona boshqarish va o'quvchilar ishini ongli ravishda tashkil etish texnologiyasidan foydalandi" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 3,
    question: "\"Dars vaqtini oqilona tashkillashtirish, darsning maqsad, shakl va usullarini aniqlash\" o'qituvchilar kasbiy kompetensiyasining qaysi mehnat vazifasidagi ko'nikmalariga kiradi?",
    variants: [
      { label: "A", text: "Ta'lim samaradorligini ta'minlash" },
      { label: "B", text: "O'z-o'zini rivojlantirish va kasbiy o'sish" },
      { label: "C", text: "O'quv va tarbiyaviy faoliyatni tashkil etish" },
      { label: "D", text: "O'quv jarayonini rejalashtirish" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 4,
    question: "Darslarda mavzuga mos keladigan ko'rgazmali va tarqatma materiallardan qanday maqsadda foydalaniladi?",
    variants: [
      { label: "A", text: "Ta'lim samaradorligini ta'minlash uchun" },
      { label: "B", text: "O'z-o'zini rivojlantirish va kasbiy o'sish uchun" },
      { label: "C", text: "To'g'ri baholash va qayta aloqani o'rnatish uchun" },
      { label: "D", text: "Differensial yondashuvni ta'minlash uchun" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 5,
    question: "Ta'lim - bu...",
    variants: [
      { label: "A", text: "Ta'lim jarayonining yakuniy natijalariga erishish yo'llari" },
      { label: "B", text: "Belgilangan maqsadga erishish yo'lida o'qituvchi va o'quvchining o'zaro hamkorligi" },
      { label: "C", text: "Ta'lim jarayonida o'zlashtirilgan bilim, ko'nikma, malaka va fikrlash usullari tizimi" },
      { label: "D", text: "Ta'lim maqsadi va vazifalariga erishish yo'lidagi faoliyat turlari" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 6,
    question: "Oliy toifali o'qituvchi - kamida 8 yillik ish tajribasi talab qilishi qanday talab hisoblanadi?",
    variants: [
      { label: "A", text: "Ta'lim va o'qitishga qo'yiladigan talab" },
      { label: "B", text: "Faoliyatni amalga oshirishga ruxsat berish uchun maxsus talab" },
      { label: "C", text: "Pedagogik faoliyatga qo'yiladigan talab" },
      { label: "D", text: "Amaliy ish tajribasiga qo'yiladigan talab" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 7,
    question: "\"Inson kapitalini rivojlantirish, o'qitish va tarbiyalashning klassik va zamonaviy nazariyalari hamda shaxslararo va ijtimoiy aloqa jarayonlarini\" quyidagilarning qay biriga mansub?",
    variants: [
      { label: "A", text: "O'zlashtirishni baholash va qayta aloqani taqdim etish" },
      { label: "B", text: "Tarbiyaviy faoliyatni tashkil etish" },
      { label: "C", text: "Xavfsiz rivojlantiruvchi ta'lim muhitini yaratish va ta'minlash" },
      { label: "D", text: "O'z-o'zini rivojlantirish va kasbiy o'sish" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 8,
    question: "Quyidagilarning qaysi biri \"O'quv jarayonini rejalashtirish\" dagi zaruriy bilim?",
    variants: [
      { label: "A", text: "Zamonaviy axborot texnologiyalarini fanga singdirish" },
      { label: "B", text: "Fanni o'qitishning turli usullari" },
      { label: "C", text: "DTS va o'quv dasturlarining maqsadlariga muvofiq o'quv rejalarini ishlab chiqish" },
      { label: "D", text: "Dars vaqtini oqilona rejalashtirish, darsning maqsad, shakl va usullarni aniqlash" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 9,
    question: "Quyidagilarning qaysi biri \"O'quv jarayonini rejalashtirish\" dagi mehnat harakati? 1. Tegishli o'quv, namoyish va tarqatma materiallardan foydalanishni rejalashtirish. 2. Ta'limning aniq va o'lchanadigan natijalarini aniqlash. 3. O'quvchilarning bilimini baholash natijasida olingan ma'lumotlarni inobatga olgan holda rejalarni muvofiqlashtirish. 4. Ta'lim maqsadlariga erishish uchun har xil turdagi rejalarni tayyorlashning tuzilishi va tamoyillari.",
    variants: [
      { label: "A", text: "2" },
      { label: "B", text: "4" },
      { label: "C", text: "3" },
      { label: "D", text: "1" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 10,
    question: "Pedagogik mahorat nima? 1. O'qituvchilarning shaxsiy fazilatlarini belgilovchi xususiyat... 2. O'qituvchilarning shaxsiy va kasbiy fazilatlarini belgilovchi xususiyat... 3. O'qituvchilarning kasbiy fazilatlarini belgilovchi xususiyat... 4. Umumiy fazilatlarni belgilovchi...",
    variants: [
      { label: "A", text: "3" },
      { label: "B", text: "1" },
      { label: "C", text: "2" },
      { label: "D", text: "4" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 11,
    question: "Pedagogik mahoratning asosini tashkil etuvchi komponentlarni aniqlang. 1. Pedagogik texnikani qo'llay bilishi; pedagogik qobiliyatlarini namoyish eta olishi. 2. Pedagogik texnikani qo'llay bilishi; o'z fanining o'qitish metodikasini bilishi. 3. O'qituvchilik kasbiga sadoqat; o'z fanining o'qitish metodikasini bilishi; pedagogik qobiliyatlarini namoyish eta olishi; pedagogik texnikani qo'llay bilishi. 4. O'z fanining o'qitish metodikasini bilishi; pedagogik texnikani qo'llay bilishi; pedagogik qobiliyatlarini namoyish eta olishi.",
    variants: [
      { label: "A", text: "2" },
      { label: "B", text: "1" },
      { label: "C", text: "4" },
      { label: "D", text: "3" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 12,
    question: "O'qituvchilarning kasbiy pedagogik tayyorgarligi shartli ravishda qanday yo'nalishlarda olib boriladi?",
    variants: [
      { label: "A", text: "1 - Shaxsiy fazilatlar bo'yicha; maxsus va ixtisoslikka oid uslubiy bilimlarni egallash" },
      { label: "B", text: "2 - Shaxsiy fazilatlar; ruhiy psixologik; ijtimoiy va nazariy; ixtisoslikka oid uslubiy" },
      { label: "C", text: "4 - Shaxsiy fazilatlar; ruhiy psixologik; ijtimoiy-pedagogik va ilmiy-nazariy; maxsus va ixtisoslikka oid uslubiy" },
      { label: "D", text: "3 - Ruhiy psixologik; ijtimoiy-pedagogik va ilmiy-nazariy" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 13,
    question: "Qobiliyat bu - ...?",
    variants: [
      { label: "A", text: "Shaxsning individual-psixologik xususiyati, obyektiv shart-sharoitni ifodalovchi individual psixik sifatlar yig'indisi" },
      { label: "B", text: "Shaxsning individual-psixologik xususiyati, umumiy pedagogik sifatlar yig'indisi" },
      { label: "C", text: "Shaxsning individual-psixologik xususiyati, obyektiv shart-sharoitni ifodalovchi individual pedagogik sifatlar yig'indisi" },
      { label: "D", text: "Shaxsning individual-psixologik xususiyati, muayyan faoliyat yuzasidan layoqati va ishni muvaffaqiyatli amalga oshirish subyektiv shart-sharoitini ifodalovchi individual psixik sifatlar yig'indisi" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 14,
    question: "Shaxsning ichki qobiliyati nimada aks etadi?",
    variants: [
      { label: "A", text: "Falsafiy mulohazalar yuritishni, raqamlarni, matematikani, murakkab masalalarni hal qilishni sevadi" },
      { label: "B", text: "O'z-o'zini mukammal bilishi, tushunishi va his qilishi, irodasi mustahkam, qatiyatli" },
      { label: "C", text: "O'qituvchining o'z xatti-harakatlarini muvofiqlashtirish qobiliyati" },
      { label: "D", text: "Musiqani sevishadi, ohangni yaxshi his qilishadi" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 15,
    question: "Intellektning asosiy sifatlarini aniqlang. 1. Ilm olish; fikrlash tezligi; malakani shakllantirish. 2. Bilim, ko'nikma, malaka. 3. Ijod; fikrlash tezligi; mahorat. 4. Ijod; fikrlash tezligi; ko'nikmaga ega bo'lish.",
    variants: [
      { label: "A", text: "2" },
      { label: "B", text: "3" },
      { label: "C", text: "4" },
      { label: "D", text: "1" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 16,
    question: "O'quvchilar bilan muloqot qilish madaniyatining individual shaxsiy xususiyatlari berilgan qatorni aniqlang.",
    variants: [
      { label: "A", text: "4 - Har bir o'quvchining individual xususiyatlariga mos muloqot tizimini ishlab chiqishi" },
      { label: "B", text: "3 - Pedagogik faoliyatiga monand muloqot madaniyati modelini ishlab chiqishi" },
      { label: "C", text: "1 - O'quvchilar shaxsiy xususiyatlarini mustaqil tahlil qilish; ichki imkoniyatlariga tavsif berish; muloqot madaniyatini to'g'ri tashkil etishi" },
      { label: "D", text: "2 - Kamchiliklarga barham berish choralarini izlab topish" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 17,
    question: "Pedagogik muloqot - bu...?",
    variants: [
      { label: "A", text: "Shaxsning individual-psixologik xususiyati, ishni muvaffaqiyatli amalga oshirish obyektiv shart-sharoitini ifodalovchi psixik sifatlar yig'indisi" },
      { label: "B", text: "O'qituvchilarning shaxsiy va kasbiy fazilatlarini belgilovchi xususiyat" },
      { label: "C", text: "Shaxsning individual-psixologik xususiyati, muayyan faoliyat yuzasidan subyektiv shart-sharoitini ifodalovchi psixik sifatlar yig'indisi" },
      { label: "D", text: "O'qituvchining o'quvchilar bilan darsda va darsdan tashqari faoliyatda eng qulay psixologik muhitni vujudga keltirib, ijobiy ruhiy iqlimni yaratishi uchun imkoniyat beruvchi kasbiy munosabati" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 18,
    question: "Refleksiya so'zi qanday ma'noni anglatadi?",
    variants: [
      { label: "A", text: "Lotin tildan olingan bo'lib \"reflexsio\" - qayta tiklash ma'nosini ifodalaydi" },
      { label: "B", text: "Yunon tildan olingan bo'lib \"reflexsio\" - qayta takrorlash ma'nosini ifodalaydi" },
      { label: "C", text: "Lotin tildan olingan bo'lib \"reflexsio\" - orqaga qaytish ma'nosini ifodalaydi" },
      { label: "D", text: "Yunon tildan olingan bo'lib \"reflexsio\" - orqaga qaytish ma'nosini ifodalaydi" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 19,
    question: "Refleksiya - bu...?",
    variants: [
      { label: "A", text: "O'qituvchining o'quvchilar bilan eng qulay psixologik muhitni vujudga keltirib, ijobiy ruhiy iqlimni yaratishi uchun imkoniyat beruvchi kasbiy munosabati" },
      { label: "B", text: "Insonning uzluksiz hayot jarayonini go'yo bir daqiqaga to'xtatib, uzib qo'yadi va insonni xayolan uning sarhadlaridan olib chiqib ketadi" },
      { label: "C", text: "Shaxsning individual-psixologik xususiyati, muayyan faoliyat yuzasidan layoqati va ishni muvaffaqiyatli amalga oshirish subyektiv shart-sharoitini ifodalovchi sifatlar yig'indisi" },
      { label: "D", text: "O'qituvchilarning shaxsiy va kasbiy fazilatlarini belgilovchi xususiyat, kasbiy mahoratini takomillashtirib borish imkoniyatini ta'minlovchi faoliyat" }
    ],
    correctAnswer: "B"
  },
  {
    questionNumber: 20,
    question: "O'zaro fikr almashish omillari bilan bevosita bog'liq bo'lgan kommunikativ qobiliyatning qanday yo'nalishlari mavjud?",
    variants: [
      { label: "A", text: "1 - O'quvchilarni ishontirish; o'quvchilar ongiga ta'sir etish; o'zgalarga taqlid qilish" },
      { label: "B", text: "2 - O'quvchilarni moslashish; o'quvchilarga jismoniy ta'sir etish; o'zgalarga taqlid qilish" },
      { label: "C", text: "4 - O'quvchilarni ishontirish; o'quvchilar ongi va jismiga ta'sir etish; o'zgalarga taqlid qilish" },
      { label: "D", text: "3 - O'quvchilarni ishontirish va moslashish; o'quvchilarga jismoniy ta'sir etish; o'zgalarga taqlid qilish" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 21,
    question: "Ta'lim va tarbiya jarayonida o'qituvchi tomonidan pedagogik ta'sir ko'rsatishning asosiy usullari berilgan javobni aniqlang.",
    variants: [
      { label: "A", text: "4 - Talab, istiqbol, rag'batlantirish va jamoatchilik fikri" },
      { label: "B", text: "1 - Taklif, istiqbol, rag'batlantirish va jazolash" },
      { label: "C", text: "2 - Talab, istiqbol, rag'batlantirish va jazolash, jamoatchilik fikri" },
      { label: "D", text: "3 - Talab, taklif, istiqbol, rag'batlantirish va jazolash, jamoatchilik fikri" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 22,
    question: "So'z bilan og'zaki ta'sir qilishda o'qituvchi nutqi qanday bo'lishi maqsadga muvofiq bo'ladi?",
    variants: [
      { label: "A", text: "3 - O'qituvchi nutqi nihoyatda muxtasar, ravon, va muloyim bo'lishi, intonatsiyalar o'z o'rnida ishlatilishi kerak" },
      { label: "B", text: "1 - O'qituvchi nutqi nihoyatda qisqa, ravon, va muloyim bo'lishi intonatsiyalar o'z o'rnida ishlatilishi kerak" },
      { label: "C", text: "4 - O'qituvchi nutqi nihoyatda muxtasar, ravon, va muloyim bo'lishi, intonatsiyalar jazolash uchun ishlatilishi kerak" },
      { label: "D", text: "2 - O'qituvchi nutqi tushunarli va intonatsiyalar o'z o'rnida ishlatilishi kerak" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 23,
    question: "Rejalashtirilayotgan darsning shakl va usullari nimalarga mos kelishi lozim?",
    variants: [
      { label: "A", text: "Darsning maqsadlari, o'quvchilarning yosh xususiyatlari va o'zlashtirishiga mos kelishi lozim" },
      { label: "B", text: "O'quvchilarning jamoaviy va loyiha ishlarini tashkil etish va nazorat qilishga mos kelishi lozim" },
      { label: "C", text: "Turli xil ta'limiy ehtiyojlar, shuningdek iqtidorli o'quvchilar bilan ishlash tamoyillariga mos kelishi lozim" },
      { label: "D", text: "Bolalar bilan muloqot qilish, ularning qadr-qimmatini tan olish tamoyillariga mos kelishi lozim" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 24,
    question: "Qaysi holatlarda namunaviy o'quv rejalariga o'zgartirish kiritish mumkin?",
    variants: [
      { label: "A", text: "O'quvchilarning ehtiyojlari va qiziqishlaridan kelib chiqqan holda" },
      { label: "B", text: "Yuqori tashkilot va maktab ma'muriyati buyrug'iga asosan" },
      { label: "C", text: "Maktab ma'muriyati va metodik birlashma takliflariga ko'ra" },
      { label: "D", text: "Ota-onalar va o'quvchilarning ehtiyoji va talablariga binoan" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 25,
    question: "O'qituvchi dars davomida aksariyat o'quvchilarni tingladi. Noto'g'ri fikrlarni rad etmasdan, yo'naltiruvchi savollar bilan yangi mavzuni tushuntirishga harakat qildi. O'qituvchi tomonidan bunday usul nima maqsadda qo'llangan edi?",
    variants: [
      { label: "A", text: "O'quvchilarning jamoaviy va loyihaviy ishlarini to'g'ri va samarali tashkil etish maqsadida" },
      { label: "B", text: "Yoshga doir pedagogika va psixologiya, bolalar bilan ishlash usul va metodlarini to'g'ri qo'llash maqsadida" },
      { label: "C", text: "Dars davomida har bir o'quvchiga o'z g'oyalari va qarashlarini ifoda etish imkoniyatini berish maqsadida" },
      { label: "D", text: "O'quvchilar bilimini baholashning differensial yondashuvini hamda odilona baholash maqsadida" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 26,
    question: "O'quvchi bir loyiha ustida ishladi. O'qituvchi tomonidan loyiha taqdimotiga to'g'ri bildirilgan fikr variantlarini toping. 1) Vazifani belgilangan muddatdan oldin bajarganligini ta'kidlamoqchiman, ammo taqdimotdagi 1-muammo uchun keltirilgan ma'lumotlarni yangilash lozim. 2) Umuman olganda yomon emas. Ba'zi joylarida xatolar bor. 3) Loyiha ishi talab darajasida bajarilgan. Taqdimotga ba'zi o'zgartirishlar kiritish lozim. 4) Barakalla. Taqdimot ustida zo'r ishlabsan.",
    variants: [
      { label: "A", text: "1, 4" },
      { label: "B", text: "2, 3" },
      { label: "C", text: "1, 3" },
      { label: "D", text: "2, 4" }
    ],
    correctAnswer: "C"
  },
  {
    questionNumber: 27,
    question: "Mezonlarga asoslangan baholash tizimi qaysi muammolarni hal qiladi? 1. Ob'yektiv va shaffof baholash tizimi orqali ta'lim sifatini oshirishga hissa qo'shadi. 2. Xalqaro standartlarga javob beradigan yuqori sifatli baholash mexanizmini shakllantiradi. 3. O'quvchining o'qishdagi yutuqlari haqidagi dalillarni to'plash uchun yordam beradi. 4. Asosiy natijalarni umumlashtirish va ta'limiy natijalarni tahlil qilishga yordam beradi.",
    variants: [
      { label: "A", text: "1, 2, 4" },
      { label: "B", text: "2, 3, 4" },
      { label: "C", text: "1, 2, 3" },
      { label: "D", text: "1, 3, 4" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 28,
    question: "Maktabda ta'lim sifatini aniqlash uchun monitoring o'tkazish rejalashtirildi. Uning vazifalari to'g'ri ko'rsatilgan variantlarni belgilang: 1. Kerakli va yetarli ma'lumotlarni to'plash. 2. Sifatli ta'lim uchun ijtimoiy buyurtmaning bajarilishini nazorat qilish. 3. Rag'batlantiruvchi va motivatsion ta'sirni tashkil etish. 4. Ijtimoiy hotirjamlik to'g'risidagi ma'lumotlarni yig'ish. 5. Prognoz va zarur tuzatishlar kiritish bo'yicha tavsiyalar ishlab chiqish.",
    variants: [
      { label: "A", text: "2, 3, 4, 5" },
      { label: "B", text: "1, 2, 5" },
      { label: "C", text: "2, 4, 5" },
      { label: "D", text: "1, 2, 3, 5" }
    ],
    correctAnswer: "D"
  },
  {
    questionNumber: 29,
    question: "\"O'quv jarayonini rejalashtirish\" dagi mehnat harakatini aniqlang?",
    variants: [
      { label: "A", text: "Tegishli o'quv, namoyish va tarqatma materiallardan foydalanishni rejalashtirish" },
      { label: "B", text: "DTS va o'quv dasturlarining maqsadlariga muvofiq o'quv rejalarini ishlab chiqish" },
      { label: "C", text: "Xavfsiz rivojlantiruvchi ta'lim muhitini yaratish va ta'minlash" },
      { label: "D", text: "Faoliyatni amalga oshirishga ruxsat berish uchun maxsus talab" }
    ],
    correctAnswer: "A"
  },
  {
    questionNumber: 30,
    question: "Shaxsning ichki qobiliyati nimada aks etadi?",
    variants: [
      { label: "A", text: "O'z-o'zini mukammal bilishi, tushunishi va his qilishi, irodasi mustahkam, qatiyatli, har qanday vaziyatda o'z fikr-mulohazasini erkin bayon eta olishida" },
      { label: "B", text: "Ijod; fikrlash tezligi; ko'nikmaga ega bo'lishi" },
      { label: "C", text: "O'quvchilar shaxsiy xususiyatlarini mustaqil tahlil qilish; ichki imkoniyatlariga tavsif berish" },
      { label: "D", text: "Shaxsning individual-psixologik xususiyati, obyektiv shart-sharoitini ifodalovchi individual pedagogik sifatlar yig'indisi" }
    ],
    correctAnswer: "A"
  }
];

async function seedTests() {
  // Clear existing
  await TestSection.deleteMany({});
  await Test.deleteMany({});

  // Create sections
  const createdSections = [];
  for (const s of sections) {
    const section = await TestSection.create(s);
    createdSections.push(section);
  }

  // Seed keys-stadi
  for (const t of keysStadiTests) {
    await Test.create({ ...t, section: createdSections[0]._id });
  }

  // Seed pedagogik mahorat
  for (const t of pedagogikMahoratTests) {
    await Test.create({ ...t, section: createdSections[1]._id });
  }

  // Seed kasb standarti
  for (const t of kasbStandartiTests) {
    await Test.create({ ...t, section: createdSections[2]._id });
  }

  console.log(`Testlar seed qilindi: ${keysStadiTests.length} + ${pedagogikMahoratTests.length} + ${kasbStandartiTests.length} = ${keysStadiTests.length + pedagogikMahoratTests.length + kasbStandartiTests.length}`);
}

module.exports = seedTests;
