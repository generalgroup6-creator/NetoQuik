let intervalId = null;
let glow = true;

export default {
  startClock() {
    if (intervalId) clearInterval(intervalId);

    intervalId = setInterval(() => {
      const now = new Date();

      const hh = String(now.getHours()).padStart(2, "0");
      const mm = String(now.getMinutes()).padStart(2, "0");
      const ss = String(now.getSeconds()).padStart(2, "0");

      const gunler = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
      const aylar = ["Ocak","Şubat","Mart","Nisan","Mayıs","Haziran","Temmuz","Ağustos","Eylül","Ekim","Kasım","Aralık"];

      const tarih = `${now.getDate()} ${aylar[now.getMonth()]} ${now.getFullYear()} - ${gunler[now.getDay()]}`;

      // Hafif animasyon efekti (HTML olmadan)
      const renk = glow ? "#00E6FF" : "#0099CC";
      glow = !glow;

      storeValue("saat", `${hh}:${mm}:${ss}`);
      storeValue("tarih", tarih);
      storeValue("renk", renk);
    }, 1000);
  }
}
