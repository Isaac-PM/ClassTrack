window.addEventListener('DOMContentLoaded', async () => {
    const app = await new App();
    await app.init();
    document.querySelector("#root").innerHTML = app.dom.innerHTML;
});
