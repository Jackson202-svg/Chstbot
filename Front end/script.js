const API_URL = "https://your-backend.onrender.com/chat"; // replace with your backend URL

async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  addMessage("You: " + message);
  input.value = "";

  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message })
    });
    const data = await response.json();
    addMessage("Bot: " + (data.reply || data.error));
  } catch {
    addMessage("Bot: (error connecting to server)");
  }
}

function addMessage(text) {
  const chatBox = document.getElementById("chat-box");
  const p = document.createElement("p");
  p.textContent = text;
  chatBox.appendChild(p);
  chatBox.scrollTop = chatBox.scrollHeight;
}
