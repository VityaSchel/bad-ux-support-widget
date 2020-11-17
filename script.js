const inputs = document.querySelectorAll("#user-form > input");
inputs.forEach((input, i) => {
  input.style.display = i > 2 ? "none" : "block";
  input.addEventListener("input", () => { inputs[i+1].style.display = "block" });
});

const chat_heading = document.querySelector("#chat-header");
chat_heading.addEventListener("click", toggle_chat);

const chat = document.querySelector("#chat");
const opened_chat = document.querySelector("#opened-chat");
function toggle_chat() {
  chat.classList.toggle("opened");
}

const user_form = document.querySelector("#user-form");
const chat_history = document.querySelector("#chat-history");
const message = document.querySelector("#message");
message.addEventListener("keydown", e => {
  if(e.key != "Enter") { return; }
  user_form.style.display = "block";
  chat_history.style.display = "none";
})
