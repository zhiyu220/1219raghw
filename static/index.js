document.getElementById("askButton").addEventListener("click", () => {
    const question = document.getElementById("question").value;
    const answerField = document.getElementById("answer");

    if (!question) {
        answerField.textContent = "請輸入問題！";
        return;
    }

    // 顯示轉圈圈
    spinnerContainer.style.display = "flex";

    fetch("/get_response", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: question }),
    })
    .then((response) => response.json())
    .then((data) => {
        spinnerContainer.style.display = "none"; // 隱藏轉圈圈
        if (data.response) { 
            answerField.textContent = data.response;
        } else {
            answerField.textContent = "錯誤：" + data.error;
        }
    })
    .catch((error) => {
        spinnerContainer.style.display = "none"; // 隱藏轉圈圈
        answerField.textContent = "請求失敗，請檢查網絡或後端服務。";
        console.error("Error:", error);
    });
});
