(async () => {
  console.log(`Loaded SpicetifyX theme`);

  let el;
  while (!el) {
    await new Promise((resolve) => setTimeout(resolve, 500));
    el = document.querySelector('[aria-label="Lyrics"]');
    console.log(el);
  }
  if (Spicetify.Config.extensions.includes("spicy-lyrics.mjs")) {
    el.remove();
  }
})();
