document.addEventListener('DOMContentLoaded', () => {
  const emptyAnchors = Array.from(document.querySelectorAll('a[href="#"]'));
  const formSearch = document.querySelector('form#formSearch');
  const images = Array.from(
    document.querySelectorAll('.property__image-container')
  );
  const propertyTexts = Array.from(
    document.querySelectorAll('.property__text')
  );
  const entryTexts = Array.from(document.querySelectorAll('.entry__text'));
  const isImages = images.length > 0;
  const isPropertyTexts = propertyTexts.length > 0;
  const isEntryTexts = entryTexts.length > 0;

  const truncate = (text, len = 80, end = '...') => {
    let isLarge, limit;
    isLarge = text.length > len;
    limit = len - end.length;
    if (isLarge) {
      return text.substring(0, limit) + end;
    }
    return text;
  };

  if (isPropertyTexts) {
    propertyTexts.forEach((text) => {
      text.innerText = truncate(text.innerText, 120);
    });
  }

  if (isEntryTexts) {
    entryTexts.forEach((text) => {
      text.innerText = truncate(text.innerText, 100);
    });
  }

  if (isImages) {
    let scroll;
    window.addEventListener('scroll', () => {
      scroll = this.scrollY / -20;
      images.forEach((img) => {
        img.style.backgroundPositionY = `${scroll}px`;
      });
    });
  }

  if (emptyAnchors.length > 0) {
    emptyAnchors.forEach((anchor) => {
      anchor.addEventListener('click', (e) => e.preventDefault());
    });
  }

  if (formSearch) {
    formSearch.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  }
});
