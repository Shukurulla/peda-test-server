const About = require('../models/About');

async function seedAbout() {
  const content = `Оliy tа'lim muаssаsаlаri boʻlаjаk bоshlаng'ich sinf oʻqituvchilаrini kаsbiy fаоliyatgа tаyyorlаshdа pеdаgоgik mаhоrаt, shахsiy sifаtlаr, oʻquvchilаrning bilimlаrini хоlisоnа nаzоrаt qilish vа bаhоlаsh lаyoqаti kаbi mаvjud ijtimоiy tаlаblаrgа mоs boʻlishi zаrur.

Boʻlаjаk bоshlаngʻich sinf oʻqituvchilаrining kаsbiy tаyyorgаrlik dаrаjаsi, ilgʻоr pеdаgоgik tаjribаlаrni oʻrgаnish, zаmоnаviy pеdаgоgik vа ахbоrоt tа'lim tехnоlоgiyalаridаn fоydаlаnish boʻyichа koʻnikmа, mаlаkаlаrni rivоjlаntirishni hаm tаqоzо etаdi.

Boʻlajak boshlangʻich sinf oʻqituvchisining diskursiv kompetensiyasini takomillashtirish metodikasi boʻlajak oʻqituvchilarning faoliyat olib borishi uchun xizmat qiladi, nutqiy savodxonliq darajasi, oqilona qaror qabul qilish, diskurs-tahlil va kompetentnost paradigmasining sinteziga asoslanadi.

Ushbu elektron platforma boshlangʻich ta'limning zamonaviy vazifalari (diskurs kompetentlik, funktsional savodхonlik, tanqidiy fikrlash, inklyuzivlik, raqamli transformatsiya)ni amalga oshirishning eng samarali yoʻli hisoblanadi.

Ushbu elektron nashr orqali boʻlajak boshlangʻich sinf oʻqituvchisi kelajakda amaliy dars o'tish jarayonida bo'ladigan turli vaziyatlar bilan tanishib, murakkab vaziyatlardan pedagogik mahoratini, ta'lim standartlarini, psixologik bilimlarini, nutq normalarini qo'llagan holda yechim topish yo'llarini o'rganib boradi va ta'lim jarayonidagi ilmiy terminlarni aniq tushunish imkonini yaratadi.

Elektron platforma - Oliy ta'lim muassasi talabalari, ilmiy izlanuvchilar, amaliyotchi mutaxassislar uchun mo'ljallangan.

Pedagogik mahorat testlari va kasb standarti testlari - sohaning amaliy ish faoliyatida yuzaga keladigan jarayonlardan oqilona yechim topish yo'llarini ko'rsatuvchi qo'llanma hisoblanadi.

Rasmlar asosida qisqa matn bo'limida sonlar ostida yashiringan rasmlar beriladi. Talaba tasodifiy tanlangan rasmga 5 daqiqa davomida qisqa matn tuzishi kerak. Matnni og'zaki yoki yozma ravishda ifolasa bo'ladi. O'qituvchi yoki kursdosh talabalar tarafidan matn mazmuni baholanadi.`;

  await About.findOneAndUpdate({}, { content }, { upsert: true });
  console.log('About sahifasi seed qilindi');
}

module.exports = seedAbout;
