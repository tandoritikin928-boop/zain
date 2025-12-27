export default async function handler(req, res) {
  try {
    const q = req.query.q || "fly";
    const r = await fetch(
      "https://api.scriptblox.com/search?q=" + encodeURIComponent(q)
    );
    const d = await r.json();
    res.status(200).json(d);
  } catch (e) {
    res.status(500).json({ error: e.toString() });
  }
}
