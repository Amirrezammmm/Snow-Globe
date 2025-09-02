 const snowContainer = document.getElementById("snow-container");

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.style.left = Math.random() * 100 + "vw";
    snowflake.style.animationDuration = (2 + Math.random() * 3) + "s";
    snowflake.style.opacity = Math.random();
    snowflake.style.width = snowflake.style.height = (5 + Math.random() * 5) + "px";
    snowContainer.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 5000);
  }

  let snowInterval = setInterval(createSnowflake, 100);

  setTimeout(() => {
    clearInterval(snowInterval);
    snowContainer.remove();
    document.getElementById("container").style.display = "flex";
  }, 10000);

  // انیمیشن کلیک
  const globe = document.getElementById("globe");
  let moving = false;

  globe.addEventListener("click", () => {
    if (moving) return;
    moving = true;
    globe.style.transform = "translateX(100px) rotate(10deg)";
    setTimeout(() => {
      globe.style.transform = "translateX(-60px) rotate(-10deg)";
      setTimeout(() => {
        globe.style.transform = "translateX(0) rotate(0)";
        setTimeout(() => {
          moving = false;
        }, 800);
      }, 800);
    }, 800);
  });