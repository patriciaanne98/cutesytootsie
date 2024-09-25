const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");

// Change text and gif when the Yes button is clicked
yesBtn.addEventListener("click", () => {
  question.innerHTML = "Miss ya too Toad! 😘";
  gif.src = "https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTExejV5NXlkZ21rOHUwNHpuazQyaXVvZXJ5amU0c2t2dGFwanlqYiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Cac2vswIWcZu4dgCBA/giphy.gif";

yesBtn.style.display = "none";
noBtn.style.display = "none";
});

// Make the No button move randomly on hover
noBtn.addEventListener("mouseover", () => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const noBtnRect = noBtn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - noBtnRect.width;
  const maxY = wrapperRect.height - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});
