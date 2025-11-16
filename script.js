document.addEventListener("DOMContentLoaded", function() {
    // 1. 結果の配列を増やす
    const results = [
        { title: "🌟 太陽 (The Sun)", detail: "大吉！最高の一日が訪れます。希望と成功に満ちた一日を過ごせるでしょう。", color: "#ffc107" },
        { title: "🍀 星 (The Star)", detail: "大吉！願いが叶う予感。落ち着いて行動すれば、運が味方します。", color: "#4caf50" },
        { title: "😊 節制 (Temperance)", detail: "中吉！バランスの取れた良い運勢。人間関係が円満に進みます。", color: "#2196f3" },
        { title: "🙂 恋人 (The Lovers)", detail: "小吉。恋愛運・対人運が上昇中。決断は慎重に。", color: "#ff9800" },
        { title: "😐 正義 (Justice)", detail: "吉。公平な判断が求められる日。普通の日でも意識次第で良い方向に！", color: "#607d8b" },
        { title: "🤔 吊るされた男 (The Hanged Man)", detail: "小凶。視点を変えることがカギ。停滞を感じたら、無理せず現状維持を。", color: "#f44336" },
        { title: "⚠️ 塔 (The Tower)", detail: "凶…。予期せぬ変化があるかも。しかし、これは古いものを壊すチャンスです！", color: "#e91e63" }
    ];

    const cardButtons = document.querySelectorAll('.card-btn');
    const resultDisplay = document.getElementById('result');
    let hasCardBeenDrawn = false; // 既にカードが引かれたかを判定するフラグ

    // 2. カードボタンにイベントリスナーを設定
    cardButtons.forEach(button => {
        button.addEventListener('click', function() {
            if (hasCardBeenDrawn) {
                // 既に引かれている場合は処理しない
                resultDisplay.textContent = "既に今日の運勢は引かれています。ページをリロードしてください。";
                return;
            }

            // 3. 選択されたカードを特定し、スタイルを変更
            this.classList.add('selected');
            hasCardBeenDrawn = true;

            // 4. ランダムに結果を一つ選ぶ
            const randomIndex = Math.floor(Math.random() * results.length);
            const selectedResult = results[randomIndex];

            // 5. 結果を表示
            resultDisplay.innerHTML = 
                `<span style="color: ${selectedResult.color}; font-size: 24px;">【${selectedResult.title}】</span><br>` +
                `${selectedResult.detail}`;
            
            // 6. 他のカードボタンを無効化
            cardButtons.forEach(btn => {
                if (btn !== this) {
                    btn.disabled = true;
                }
            });
        });
    });
});
