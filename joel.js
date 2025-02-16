
// OpenAI API Key (Don't expose this publicly in a real-world app)
const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace this with your actual OpenAI API key

// Elements
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

// Event listener to send the message
sendBtn.addEventListener('click', async () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    appendMessage(userMessage, 'user');
    userInput.value = '';  // Clear the input field

    // Call the OpenAI API
  const responseMessage = await getResponseFromGPT(userMessage);
    appendMessage(responseMessage, 'gpt');
  }
});

// Function to append messages to the chat box
function appendMessage(message, sender) {
  const messageDiv = document.createElement('div');
  messageDiv.classList.add(sender);
  messageDiv.textContent = message;
  chatBox.appendChild(messageDiv);
  chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the bottom
}

// Function to send the message to GPT and get a response
async function getResponseFromGPT(message) {
  const data = {
    model: 'gpt-3.5-turbo',  // Change to 'gpt-4' for GPT-4
    messages: [{ role: 'user', content: message }],
  };

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${apiKey}`,
  };

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data),
  });

  const responseData = await response.json();
  return responseData.choices[0].message.content;
}
