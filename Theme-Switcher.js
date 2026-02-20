const themes = [{
    name: "light",
    message: "Switch to light theme.",
},
{
    name: "dark",
    message: "Switch to dark theme.",
}];


const switchBtn = document.getElementById("theme-switcher-button");
const themeDropdown = document.getElementById("theme-dropdown");


switchBtn.addEventListener("click", () => {
    const isExpanded = switchBtn.getAttribute("aria-expanded") === "true";
    switchBtn.setAttribute("aria-expanded", String(!isExpanded));
    themeDropdown.hidden = isExpanded
});


const menuItems = document.querySelectorAll("[role='menuitem']");
menuItems.forEach(item => {
    item.addEventListener("click", () => {
        const bodyEl = document.querySelector("body");
        const statusEl = document.getElementById("status")
        let classValue = item.getAttribute("id").split("-")[1];
        bodyEl.setAttribute("class", "theme-" + classValue);
        let str = "";
        themes.forEach((t) => {
            if (t.name === classValue) {
                str = t.message
            }
        })
        statusEl.textContent = str;
        setTimeout(() => {
            statusEl.textContent = "";
        }, 5000)
    })
})