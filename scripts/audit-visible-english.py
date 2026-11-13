"""List unchanged visible English text on every localized prerendered page."""
from html.parser import HTMLParser
from pathlib import Path


class TextNodes(HTMLParser):
    def __init__(self):
        super().__init__()
        self.body = False
        self.skip = 0
        self.parts = []
        self.alts = []

    def handle_starttag(self, tag, attrs):
        if tag == "img":
            self.alts.extend(value for key, value in attrs if key == "alt" and value)
        if tag == "body":
            self.body = True
        if tag in {"script", "style", "svg", "noscript", "details"}:
            self.skip += 1

    def handle_endtag(self, tag):
        if tag in {"script", "style", "svg", "noscript", "details"}:
            self.skip -= 1
        if tag == "body":
            self.body = False

    def handle_data(self, data):
        value = " ".join(data.split())
        if self.body and not self.skip and len(value) >= 18:
            self.parts.append(value)


def texts(path):
    parser = TextNodes()
    parser.feed(path.read_text(encoding="utf-8"))
    return set(parser.parts)


def alts(path):
    parser = TextNodes()
    parser.feed(path.read_text(encoding="utf-8"))
    return set(parser.alts)


dist = Path(__file__).resolve().parents[1] / "dist"
for locale in ("vi", "fr", "ko", "zh-hans", "zh-hant"):
    for localized in sorted((dist / locale).rglob("index.html")):
        relative = localized.relative_to(dist / locale)
        english = dist / relative
        if not english.exists():
            continue
        shared = sorted(texts(localized) & texts(english))
        shared = [value for value in shared if not value.startswith("Emis Dental")]
        if shared:
            print(f"/{locale}/" + str(relative.parent).replace("\\", "/"))
            for value in shared[:12]:
                print("  ", value[:130])

unchanged_alts = set()
for localized in (dist / "fr").rglob("index.html"):
    english = dist / localized.relative_to(dist / "fr")
    if english.exists():
        unchanged_alts.update(alts(localized) & alts(english))
print(f"Unchanged French image alt descriptions: {len(unchanged_alts)}")
for value in sorted(unchanged_alts)[:80]:
    print("  alt:", value[:120])
