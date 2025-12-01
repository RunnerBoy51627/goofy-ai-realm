const soloBtn = document.getElementById('solo-chat-btn');
const groupBtn = document.getElementById('group-chat-btn');
const chatArea = document.getElementById('chat-area');
const chatTitle = document.getElementById('chat-title');
const sendBtn = document.getElementById('send-btn');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-text');

let chatMode = null;

// Select chat mode
soloBtn.addEventListener('click', () => {
  chatMode = 'solo';
  chatTitle.textContent = "Chatting with: Quandale Dingle (AI)";
  chatArea.classList.remove('hidden');
});

groupBtn.addEventListener('click', () => {
  chatMode = 'group';
  chatTitle.textContent = "Chatting with: Human & Bot Group";
  chatArea.classList.remove('hidden');
});

// Send message
sendBtn.addEventListener('click', () => {
  const text = chatInput.value.trim();
  if(!text) return;

  // Add user message
  const msgDiv = document.createElement('div');
  msgDiv.textContent = "You: " + text;
  chatMessages.appendChild(msgDiv);

  // Placeholder for AI/bot response
  const botDiv = document.createElement('div');
  botDiv.textContent = (chatMode === 'solo') ? "Quandale Dingle: Heeey!" : "GroupBot: Heeey everyone!";
  botDiv.style.color = 'blue';
  chatMessages.appendChild(botDiv);

  chatInput.value = '';
  chatMessages.scrollTop = chatMessages.scrollHeight;
});
