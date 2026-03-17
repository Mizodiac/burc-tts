from pathlib import Path
from openai import OpenAI
import os

# OpenAI API key’i ortam değişkeninden al
client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

# mp3 klasörü
mp3_folder = Path("mp3")
mp3_folder.mkdir(exist_ok=True)

# Burçlar ve eksik metinler
burclar = {
    "koc": {
        "ozellikler": "Koç burcunun özellikleri: lider ruhlu, enerjik ve cesur.",
        "gezegen": "Koç burcunun gezegeni Mars'tır.",
        "element": "Koç burcunun elementi Ateş'tir.",
        "sayi": "Koç burcunun uğurlu sayıları: 1, 8, 17."
    },
    "boga": {
        "ozellikler": "Boğa burcunun özellikleri: sabırlı, güvenilir ve sebatkar.",
        "gezegen": "Boğa burcunun gezegeni Venüs'tür.",
        "element": "Boğa burcunun elementi Toprak'tır.",
        "sayi": "Boğa burcunun uğurlu sayıları: 2, 6, 9."
    },
    "ikizler": {
        "ozellikler": "İkizler burcunun özellikleri: meraklı, iletişimci ve esnek.",
        "gezegen": "İkizler burcunun gezegeni Merkür'dür.",
        "element": "İkizler burcunun elementi Hava'dır.",
        "sayi": "İkizler burcunun uğurlu sayıları: 3, 7, 12."
    },
    "yengec": {
        "ozellikler": "Yengeç burcunun özellikleri: duygusal, koruyucu ve sadık.",
        "gezegen": "Yengeç burcunun gezegeni Ay'dır.",
        "element": "Yengeç burcunun elementi Su'dur.",
        "sayi": "Yengeç burcunun uğurlu sayıları: 2, 7, 11."
    },
    "aslan": {
        "ozellikler": "Aslan burcunun özellikleri: lider, yaratıcı ve cömert.",
        "gezegen": "Aslan burcunun gezegeni Güneş'tir.",
        "element": "Aslan burcunun elementi Ateş'tir.",
        "sayi": "Aslan burcunun uğurlu sayıları: 1, 5, 9."
    },
    "basak": {
        "ozellikler": "Başak burcunun özellikleri: analitik, çalışkan ve detaycı.",
        "gezegen": "Başak burcunun gezegeni Merkür'dür.",
        "element": "Başak burcunun elementi Toprak'tır.",
        "sayi": "Başak burcunun uğurlu sayıları: 5, 14, 23."
    },
    "terazi": {
        "ozellikler": "Terazi burcunun özellikleri: dengeli, adil ve estetikten hoşlanan.",
        "gezegen": "Terazi burcunun gezegeni Venüs'tür.",
        "element": "Terazi burcunun elementi Hava'dır.",
        "sayi": "Terazi burcunun uğurlu sayıları: 6, 15, 24."
    },
    "akrep": {
        "ozellikler": "Akrep burcunun özellikleri: tutkulu, kararlı ve sezgisel.",
        "gezegen": "Akrep burcunun gezegeni Mars ve Plüton'dur.",
        "element": "Akrep burcunun elementi Su'dur.",
        "sayi": "Akrep burcunun uğurlu sayıları: 8, 11, 18."
    },
    "yay": {
        "ozellikler": "Yay burcunun özellikleri: maceracı, iyimser ve özgür ruhlu.",
        "gezegen": "Yay burcunun gezegeni Jüpiter'dir.",
        "element": "Yay burcunun elementi Ateş'tir.",
        "sayi": "Yay burcunun uğurlu sayıları: 3, 7, 9."
    },
    "oglak": {
        "ozellikler": "Oğlak burcunun özellikleri: disiplinli, sabırlı ve kararlı.",
        "gezegen": "Oğlak burcunun gezegeni Satürn'dür.",
        "element": "Oğlak burcunun elementi Toprak'tır.",
        "sayi": "Oğlak burcunun uğurlu sayıları: 4, 8, 13."
    },
    "kova": {
        "ozellikler": "Kova burcunun özellikleri: özgün, entelektüel ve yenilikçi.",
        "gezegen": "Kova burcunun gezegeni Uranüs ve Satürn'dür.",
        "element": "Kova burcunun elementi Hava'dır.",
        "sayi": "Kova burcunun uğurlu sayıları: 4, 7, 11."
    },
    "balik": {
        "ozellikler": "Balık burcunun özellikleri: sezgisel, empatik ve yaratıcı.",
        "gezegen": "Balık burcunun gezegeni Neptün'dür.",
        "element": "Balık burcunun elementi Su'dur.",
        "sayi": "Balık burcunun uğurlu sayıları: 3, 7, 12."
    }
}

# Eksik mp3 üretimi
for burc, metinler in burclar.items():
    for key, text in metinler.items():
        filename = mp3_folder / f"{burc}_{key}.mp3"
        # Eğer dosya zaten varsa atla
        if filename.exists():
            print(f"{filename} zaten var, atlanıyor.")
            continue

        with client.audio.speech.with_streaming_response.create(
            model="gpt-4o-mini-tts",
            voice="alloy",
            input=text,
            instructions="Speak in a dramatic and majestic tone."
        ) as response:
            response.stream_to_file(filename)
        
        print(f"{burc} - {key} mp3 oluşturuldu: {filename}")

print("🎉 Eksik mp3’ler oluşturuldu ve mp3 klasörüne kaydedildi!")
