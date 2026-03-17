from pathlib import Path
from openai import OpenAI
import zipfile
import os

client = OpenAI(api_key=os.environ["OPENAI_API_KEY"])

burclar = {
    "koc": "Koç",
    "boga": "Boğa",
    "ikizler": "İkizler",
    "yengec": "Yengeç",
    "aslan": "Aslan",
    "basak": "Başak",
    "terazi": "Terazi",
    "akrep": "Akrep",
    "yay": "Yay",
    "oglak": "Oğlak",
    "kova": "Kova",
    "balik": "Balık"
}

mp3_list = []

for key, burc in burclar.items():
    text = f"Tüm asaleti ve ihtişamıyla {burc} Burcu!"
    filename = f"{key}.mp3"

    with client.audio.speech.with_streaming_response.create(
        model="gpt-4o-mini-tts",
        voice="alloy",
        input=text,
        instructions="Speak in a dramatic and majestic tone."
    ) as response:
        response.stream_to_file(filename)

    mp3_list.append(filename)
    print(f"{burc} tamam")

# ZIP yap
with zipfile.ZipFile("burclar.zip", 'w') as zipf:
    for file in mp3_list:
        zipf.write(file)

print("ZIP hazır!")
