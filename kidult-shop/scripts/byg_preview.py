#!/usr/bin/env python3
"""Bygger preview/big-kid-club-preview.html: en klikbar forhåndsvisning af butikken
med de samme produktdata som products.csv. Kør fra kidult-shop/:
    python3 scripts/byg_preview.py
"""
import importlib.util
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
spec = importlib.util.spec_from_file_location("produkter", ROOT / "scripts" / "byg_products_csv.py")
mod = importlib.util.module_from_spec(spec)
spec.loader.exec_module(mod)

data = [
    {"handle": p["handle"], "titel": p["titel"], "maerke": p["mærke"], "type": p["type"], "pris": p["pris"],
     "tags": p["tags"], "intro": p["intro"], "fakta": p["fakta"], "hvem": p["hvem"]}
    for p in mod.PRODUKTER
]
skabelon = (ROOT / "preview" / "skabelon.html").read_text(encoding="utf-8")
assert "/*DATA*/[]" in skabelon
ud = ROOT / "preview" / "big-kid-club-preview.html"
ud.write_text(skabelon.replace("/*DATA*/[]", json.dumps(data, ensure_ascii=False)), encoding="utf-8")
print(f"Skrev {ud.relative_to(ROOT)} ({len(data)} produkter)")
