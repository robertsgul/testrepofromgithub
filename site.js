// Visa vietnes informācija vienuviet. Aizpildi vai labo šeit — lapas atjaunosies pašas.
// Ja kaut kas ir null vai tukšs, attiecīgā vieta netiek rādīta.
window.SITE = {
  brand: "R.C. Pica",
  instagram: "r.c.pica",
  phones: ["+371 29444916", "+371 27077997"],
  email: null,            // piem. "info@rcpica.lv"
  bookingEmail: null,     // uz kuru e-pastu sūtīt pieteikumus (ja nav, tiek rādīts tikai Instagram)
  location: "Ceļojam pa visu Latvijas teritoriju",
  tagline: "Brāļu ceļojošā picērija",
  award: "European Street Food Awards 2026 — EXTRA MILE",
  hours: null,            // piem. "Pieteikumi: katru dienu 10:00–20:00"
  // Bildes: ieliec failus mapē assets/photos un ieraksti nosaukumus šeit.
  photos: [
    { src: "assets/photos/img_0786.jpg", alt: "R.C. Pica pica ar mocarellu un baziliku" },
    { src: "assets/photos/img_1421.jpg", alt: "R.C. Pica piekabe — Mūsu stāsts" },
    { src: "assets/photos/img_1840.jpg", alt: "R.C. Pica pica ar salami un sīpoliem" },
    { src: "assets/photos/img_1841.jpg", alt: "R.C. Pica pica ar salami un sīpoliem" },
  ],
  // Video: fails assets/video/pica.mp4 vai norādi Instagram reel saiti.
  // Izmēri (maini pēc patikas): logoHeight — logo augstums pikseļos; video.maxWidth — video platums pikseļos (augstums ierobežots ar 80% no ekrāna)
  logo: "assets/logo.png",
  logoHeight: 44,
  video: { file: "assets/video/pica.mp4", maxWidth: 900, instagramReel: null /* "https://www.instagram.com/reel/XXXX/" */ },
  // Ēdienkarte (ieraksti savas picas un cenas):
  menu: [
    // { name: "Margerita", desc: "Tomātu mērce, mocarella, baziliks", price: "7 €" },
  ],
};
