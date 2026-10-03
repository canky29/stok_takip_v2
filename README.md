# 🍰 Patuli Pastanesi / İşletme Yönetim Sistemi (V2)

Bu proje; bir pastane, fırın veya kafe işletmesinin **Tüm Üretim (İmalathane), Satış (Tezgâh) ve Finansal** süreçlerini tek bir merkezden, cihazlar arası eşzamanlı olarak yönetmek için geliştirilmiş kapsamlı bir otomasyon sistemidir. 

Firebase altyapısı sayesinde şubeler/katlar (alt kat - üst kat) arası anlık iletişim kurarken, yerel depolama (LocalStorage) mimarisiyle internet kesintilerinde bile kayıpsız çalışmaya devam eder.

---

## 🚀 Temel Özellikler ve Modüller

### 1. 🔐 Rol Bazlı Yetkilendirme
- **Yönetici (Admin):** Tüm finansal verilere, raporlara ve sistem ayarlarına tam erişim.
- **Tezgâh (Üst Kat):** Satış işlemleri, müşteri siparişi alma ve kasa yönetimi.
- **İmalathane (Alt Kat):** Akıllı sipariş takvimi, reçete maliyet hesabı ve eksik malzeme talebi oluşturma yetkisi.

### 2. 📅 Görsel Müşteri Sipariş Ajandası
- Müşterilerden alınan özel pasta / ürün siparişlerini (tarih, saat, özel notlar ve referans görseliyle) sisteme kaydeder.
- **İmalathane Ajandası:** Siparişleri "Bugün" ve "Yarın" etiketleriyle, teslim edilecekleri saat sırasına göre otomatik dizer. İmalathane karmaşasını bitirir.
- **WhatsApp Entegrasyonu:** Sipariş hazır olduğunda, müşteriye işletme konumu barındıran profesyonel bir kurumsal WhatsApp mesajı tek tıkla gönderilir.

### 3. 📦 Akıllı Stok & Envanter Yönetimi
- Depodaki hammaddelerin giriş-çıkış takibi yapılır.
- **Kritik Stok Uyarısı:** Stoğu azalan ürünler yöneticinin ekranına otomatik uyarı paneli olarak düşer.
- **Personel Talepleri:** İmalathane personeli, biten malzemeleri uygulama üzerinden tek tıkla yöneticiden talep edebilir.

### 4. 💰 Kasa & Hızlı Satış Ekranı
- Kategorize edilmiş ürünler, sepete ekleme, hızlı para üstü hesaplama (dahili hesap makinesi).
- Günlük ciro, fiş iptalleri ve anlık satış analizleri.

### 5. 🧾 Gelişmiş Ürün Maliyet (Reçete) Hesaplama
- Yeni üretilecek bir ürünün (örneğin 10 kişilik çikolatalı pasta) içine giren tüm hammaddeler gramajıyla eklenir.
- Sistem; güncel stok alış fiyatlarından ürünün **gerçek üretim maliyetini** ve hedef kâr marjına göre **önerilen satış fiyatını** saniyeler içinde hesaplar.

### 6. 💼 Finans, B2B ve Cari Takip
- **Tedarikçi Yönetimi:** Toptancılardan alınan ürünlerin borç/alacak bakiyeleri takip edilir.
- **Gider Takibi:** Kira, elektrik, su, maaş gibi işletme giderleri işlenir.
- **Personel Modülü:** Personellerin maaşları, aldıkları avanslar ve kalan hak edişleri sistemden düşülerek hesaplanır.

### 7. 📊 Excel (XLSX) Raporlama
- Kasa geçmişi, envanter durumu, giderler ve cari hesaplar tek tıkla Türkçe karakter destekli gerçek Excel (.xlsx) formatında cihaza indirilebilir.

---

## 🛠 Kullanılan Teknolojiler
- **HTML5, JavaScript (ES6+):** Saf (Vanilla) JavaScript ile sıfır gecikmeli yüksek performans.
- **Tailwind CSS:** Modern, esnek (responsive) ve mobil/tablet uyumlu kullanıcı arayüzü tasarımı.
- **Firebase Realtime Database:** Cihazlar (tablet, telefon, bilgisayar) arası anlık veri senkronizasyonu.
- **SheetJS (xlsx):** İstemci tarafında sunucuya ihtiyaç duymadan Excel veri işleme.
- **Lucide Icons:** Vektörel ve modern arayüz ikonları.

---

👨‍💻 **Geliştirici:** Uğurcan Kaya
