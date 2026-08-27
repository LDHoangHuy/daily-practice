const textArea = document.querySelector("#markdown-input");
const rawHTML = document.querySelector("#html-output");
const preview = document.querySelector("#preview");

function convertMarkdown() {
  const hReg = /^\s*(?<mark>#{1,3})\s(?<text>.+)/gm;
  const strReg = /(?<mark>\*{2}|_{2})(?<text>.*)\k<mark>/g;
  const emReg = /(?<mark>\*|_)(?<text>.*)\k<mark>/g;
  const imgReg = /!\[(?<altText>.*)\]\((?<imgSrc>.*)\)/g;
  const linkReg = /\[(?<linkText>.*)\]\((?<url>.*)\)/g;
  const quoteReg = /^\s*>\s(?<text>.+)($|\n)/gm;

  let htmlText = textArea.value
    .replace(hReg, (...args) => {
      const groups = args.pop();
      const el = `h${groups.mark.length}`;
      return `<${el}>${groups.text}</${el}>`;
    })
    .replace(strReg, (...args) => {
      const groups = args.pop();
      return `<strong>${groups.text}</strong>`;
    })
    .replace(emReg, (...args) => {
      const groups = args.pop();
      return `<em>${groups.text}</em>`;
    })
    .replace(imgReg, (...args) => {
      const groups = args.pop();
      const alt = groups.altText.trim();
      const src = groups.imgSrc.trim();
      return `<img alt="${alt}" src="${src}">`;
    })
    .replace(linkReg, (...args) => {
      const groups = args.pop();
      const linkText = groups.linkText;
      const url = groups.url.trim();
      return `<a href="${url}">${linkText}</a>`
    })
    .replace(quoteReg, (...args) => {
      const groups = args.pop();
      return `<blockquote>${groups.text}</blockquote>`;
    });
  return htmlText;
}

textArea.addEventListener("input", () => {
  rawHTML.innerText = convertMarkdown();
  preview.innerHTML = convertMarkdown();
});
