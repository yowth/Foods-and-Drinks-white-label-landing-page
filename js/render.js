async function loadConfig() {
  const response = await fetch("./js/config.json");
  const config = await response.json();
  const get = (id) => document.getElementById(id);

  const setText = (id, value) => {
    const element = get(id);
    if (element && value != null) {
      element.textContent = value;
    }
  };

  const setAttr = (id, attr, value) => {
    const element = get(id);
    if (element && value != null && value !== "") {
      element.setAttribute(attr, value);
    }
  };

  //PAGE
  document.title = config.page?.title || "SaoBakery";
  setAttr("page-icon", "href", config.page?.icon);
  setAttr("header-logo", "src", config.page?.brand_logo);
  setAttr("footer-logo", "src", config.page?.brand_logo);

  //HERO
  const hero = config.hero || {};
  setText("hero-eyebrow", hero.eyebrow);
  setText("hero-title", hero.title);
  setText("hero-description", hero.description);

  hero.stats?.forEach((item, index) => {
    const number = index + 1;
    setText(`stat${number}`, item.stat);
    setText(`stat${number}-description`, item.stat_description);
  });

  //REVIEW
  const review = config.review || {};
  setText("review-eyebrow", review.eyebrow);
  setText("review-title", review.title);
  setText("review-description", review.description);

  review.comments_img?.forEach((item, index) => {
    const number = index + 1;
    setAttr(`comment${number}`, "src", item.comment);
  });

  //PRODUCTS
  const product = config.product || {};

  setText("product-eyebrow", product.eyebrow);
  setText("product-title", product.title);
  setText("product-description", product.description);

  product.products?.forEach((item, index) => {
    const number = index + 1;

    setText(`product${number}-name`, item.name);
    setText(`product${number}-description`, item.description);
    setText(`product${number}-price`, item.price);

    setAttr(`product${number}-img`, "src", item.image);
  });

  //FAQ
  const faq = config.faq || {};
  setText("faq-eyebrow", faq.eyebrow);
  setText("faq-title", faq.title);
  setText("faq-description", faq.description);

  faq.faqs?.forEach((item, index) => {
    const number = index + 1;
    setText(`faq${number}-question`, item.question);
    setText(`faq${number}-answer`, item.answer);
  });

  //FOOTER
  const footer = config.footer || {};
  setText("footer-description", footer.description);
  setText("socials-title", footer.socials_title);

  footer.socials_link?.forEach((item, index) => {
    const number = index + 1;
    setAttr(`social${number}-link`, "href", item.link);
    setAttr(`social${number}-logo`, "src", item.logo);
    setText(`social${number}-name`, item.name);
  });

  //COLORS
  const colors = config.colors || {};
  Object.entries(colors).forEach(([name, value]) => {
    document.documentElement.style.setProperty(`--${name}`, value);
  });

  //BACKGROUND
  const background = config.background_image || {};
  Object.entries(background).forEach(([name, value]) => {
    document.documentElement.style.setProperty(`--${name}`, `url("../${value}")`);
  });
}

loadConfig();
