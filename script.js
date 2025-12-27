async function search() {
  const q = document.getElementById("q").value;

  // APIを叩く
  const res = await fetch(`/api/scriptblox?q=${encodeURIComponent(q)}`);
  const data = await res.json();

  const list = document.getElementById("list");
  list.innerHTML = "";

  // データが無いとき
  if (!data || !data.result || !data.result.scripts) {
    list.textContent = "結果なし";
    return;
  }

  // 結果表示
  data.result.scripts.forEach(s => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <h3>${s.title}</h3>
      <p>${s.game?.name || "Unknown Game"}</p>
      <button onclick="copyText(\`${s.script}\`)">コピー</button>
    `;
    list.appendChild(card);
  });
}

// コピー用
function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("コピーした");
}
