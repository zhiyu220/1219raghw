document.getElementById("askButton").addEventListener("click", () => {
    const question = document.getElementById("question").value;
    const answerField = document.getElementById("answer");

    if (!question) {
        answerField.textContent = "請輸入問題！";
        return;
    }

    answerField.textContent = "正在處理您的問題...";

    fetch("/get_response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question }),
    })
    .then((response) => response.json())
    .then((data) => {
        if (data.answer) {
            answerField.textContent = data.answer;
        } else {
            answerField.textContent = "錯誤：" + data.error;
        }
    })
    .catch((error) => {
        answerField.textContent = "請求失敗，請檢查網絡或後端服務。";
        console.error("Error:", error);
    });
});
