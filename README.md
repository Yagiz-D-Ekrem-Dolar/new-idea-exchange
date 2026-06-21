# NEW IDEA EXCHANGE

Kurumsal inovasyon, fikir paylaşımı, anonim geri bildirim, oylama, AI analiz, yönetici paneli ve admin paneli içeren responsive demo uygulaması.

## Çalıştırma

```powershell
node server.js
```

Ardından tarayıcıda aç:

```text
http://localhost:4173/
```

## Demo Notları

- İlk girişte şirket içi demo key istenir: `NIE-DEMO-2026`.
- Login ekranındaki demo hesap seçimi rol bazlı menüyü değiştirir.
- `Lena Fischer` yönetici panelini, `Markus Bauer` yönetici ve admin panelini gösterir.
- AI analiz akışı `/api/ai/analyze-idea` endpoint'i üzerinden çalışır.
- `GROQ_API_KEY` veya `GROK_API_KEY` frontend'e yazılmaz; sunucu tarafı ortam değişkeni olarak ayrılmıştır. Anahtar yoksa demo analiz yanıtı döner.
