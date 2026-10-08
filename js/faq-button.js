const faqs = document.querySelectorAll(".faq-list details");
faqs.forEach((faq) => {
  faq.addEventListener("toggle", () => {
    if (!faq.open) {
      return;
    }

    faqs.forEach((other) => {
      if (other !== faq) {
        other.open = false;
      }
    });
  });
});
