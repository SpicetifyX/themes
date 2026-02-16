(async () => {
    console.log(`Loaded SpicetifyX theme`)
    await new Promise((resolve) => setTimeout(resolve, 2500))
    const el = document.querySelector('[aria-label="History"]')
    el.remove()
})();