window.addEventListener("DOMContentLoaded", () => {
  document.title = "Lofi Music";
  function eventRemoveIcons(event) {
    const vertical = document.querySelector(".vertical");

    vertical.style.display = "none";

    if (event === "key") {
      return document.removeEventListener("keydown", eventRemoveIcons);
    } else if (event === "click") {
      return document.removeEventListener("mouseup", eventRemoveIcons);
    }
  }
  document.addEventListener("keydown", eventRemoveIcons("key"));
  document.addEventListener("mouseup", eventRemoveIcons("click"));

  const replaceText = (selector, text) => {
    const element = document.getElementById(selector);
    if (element) element.innerText = text;
  };

  for (const type of ["chrome", "node", "electron"]) {
    replaceText(`${type}-version`, process.versions[type]);
  }
});
