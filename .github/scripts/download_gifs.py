import requests
from pathlib import Path

# icons klasörü
icons_folder = Path("icons")
icons_folder.mkdir(exist_ok=True)

# GIF listesi
gifs = {
    "mars_spin.gif": "https://upload.wikimedia.org/wikipedia/commons/0/0b/Mars_spin.gif",
    "venus_spin.gif": "https://upload.wikimedia.org/wikipedia/commons/6/66/Venus_spin.gif",
    "merkur_spin.gif": "https://upload.wikimedia.org/wikipedia/commons/4/4d/Mercury_spin.gif",
    "ay_spin.gif": "https://upload.wikimedia.org/wikipedia/commons/9/97/Moon_spin.gif",
    "gunes_spin.gif": "https://upload.wikimedia.org/wikipedia/commons/c/c3/Sun_spin.gif",
    "jupiter_spin.gif": "https://upload.wikimedia.org/wikipedia/commons/2/20/Jupiter_spin.gif",
    "saturn_spin.gif": "https://upload.wikimedia.org/wikipedia/commons/e/e5/Saturn_spin.gif",
    "uranus_spin.gif": "https://upload.wikimedia.org/wikipedia/commons/3/3a/Uranus_spin.gif",
    "neptun_spin.gif": "https://upload.wikimedia.org/wikipedia/commons/5/55/Neptune_spin.gif"
}

for filename, url in gifs.items():
    path = icons_folder / filename
    if path.exists():
        print(f"{filename} zaten var, atlanıyor.")
        continue
    try:
        r = requests.get(url, headers={"User-Agent": "Mozilla/5.0"}, timeout=20)
        r.raise_for_status()
        with open(path, "wb") as f:
            f.write(r.content)
        print(f"{filename} indirildi.")
    except requests.exceptions.RequestException as e:
        print(f"{filename} indirilemedi: {e}")
