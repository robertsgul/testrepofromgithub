// Visa vietnes informācija vienuviet. Aizpildi vai labo šeit — lapas atjaunosies pašas.
// Ja kaut kas ir null vai tukšs, attiecīgā vieta netiek rādīta.
window.SITE = {
  brand: "R.C. Pica",
  instagram: "r.c.pica",
  phone: null,            // piem. "+371 20000000"
  email: null,            // piem. "info@rcpica.lv"
  bookingEmail: null,     // uz kuru e-pastu sūtīt pieteikumus (ja nav, tiek rādīts tikai Instagram)
  location: null,         // piem. "Rīga un visa Latvija"
  hours: null,            // piem. "Pieteikumi: katru dienu 10:00–20:00"
  // Bildes: ieliec failus mapē assets/photos un ieraksti nosaukumus šeit.
  photos: [
    // { src: "assets/photos/bralji.jpg", alt: "Brāļi pie krāsns" },
  ],
  // Video: ieliec failu assets/video/pica.mp4 vai norādi Instagram reel saiti.
  video: { file: "assets/video/pica.mp4", instagramReel: null /* "https://www.instagram.com/reel/XXXX/" */ },
  // Ēdienkarte (ieraksti savas picas un cenas):
  menu: [
    // { name: "Margerita", desc: "Tomātu mērce, mocarella, baziliks", price: "7 €" },
  ],
};
