const textArea = document.querySelector("#markdown-input");
const rawHTML = document.querySelector("#html-output");
const preview = document.querySelector("#preview");

//const quoteReg = /^\s*>\s(.+)($|\n.*)/g;
//^(?<before>.*) ... (?<after>.*)$
const hReg = /^\s*(?<mark>#{1,3})\s(?<text>.+)/gm;
const strEmReg = /(?<mark>\*{1,2}|_{1,2})(?<text>.*)\k<mark>/g;
const imgReg = /!\[(?<altText>.*)\]\((?<imgSrc>.*)\)/y;

//`<p>${groups.before}<strong>${groups.text}</strong>${groups.after}</p>`
//`<p>${groups.before}<em>${groups.text}</em>${groups.after}</p>`

textArea.addEventListener("input", () => {
  let htmlText = textArea.value
    .replace(hReg, (...args) => {
      const groups = args.pop();
      const el = `h${groups.mark.length}`;
      return `<${el}>${groups.text}</${el}>`;
    })
    .replace(strEmReg, (...args) => {
      const groups = args.pop();
      const el = groups.mark.length === 1 ? "em" : "strong";
      return `<${el}>${groups.text}</${el}>`;
    })
    .replace(imgReg, (...args) => {
      const groups = args.pop();
      const alt = groups.altText.trim();
      const src = groups.imgSrc.trim();
      return `<img alt="${alt}" src="${src}">`;
    });
  
  rawHTML.innerText = htmlText;
  preview.innerHTML = htmlText;
});
