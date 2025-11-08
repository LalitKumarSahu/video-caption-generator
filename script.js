
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if(bar){
  bar.addEventListener('click', () =>{
    console.log("Menu button clicked!"); // Debugging
    nav.classList.add('active');
  })
}

if(close){
  close.addEventListener('click', () =>{
    console.log("Close button clicked!"); // Debugging
    nav.classList.remove('active');
  })
}

// ---chatbot ai----------------->
function toggleChatbot() {
  let chatbot = document.getElementById("chatbot");
  chatbot.style.display = (chatbot.style.display === "none" || chatbot.style.display === "") ? "flex" : "none";
}

function sendMessage() {
  let input = document.getElementById("chat-input").value;
  let chatBody = document.getElementById("chat-body");
  
  if (input.trim() === "") return;

  let userMessage = document.createElement("div");
  userMessage.innerHTML = `<strong>You:</strong> ${input}`;
  chatBody.appendChild(userMessage);
  
  document.getElementById("chat-input").value = "";
}
