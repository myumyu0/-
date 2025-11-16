document.getElementById("btn").addEventListener("click", function() {
  const results = [
    "🌟 大吉！最高の一日が訪れます！",
    "😊 中吉！ちょっと良いことがありそう。",
    "🙂 小吉。落ち着いて行動すると運が味方します。",
    "😐 吉。普通の日でも意識次第で良い方向に！",
    "⚠️ 凶…ですが、行動を変えれば運勢も変わります！"
  ];

  const result = results[Math.floor(Math.random() * results.length)];
  document.getElementById("result").textContent = result;
});
