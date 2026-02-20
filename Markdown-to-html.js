const markdownInput = document.getElementById("markdown-input");
const rawHtml = document.getElementById("html-output");
const htmlPreview = document.getElementById("preview");

const regHeading1 = /^#{1} ([a-zA-Z0-9\s]{1,})$/gm;
const regHeading2 = /^#{2} (.*)$/gm;
const regHeading3 = /^#{3} (.*)$/gm;
const regBold = /^[*_]{2}(.*)[*_]{2}$/gm;
const regBoldHeading = /^#{1} [*_]{2}(.*)[*_]{2}/;
const regItalic = /^[*_]{1}(.*)[*_]{1}$/gm;
const regImg = /^!\[(.*)\]\((.*)\)$/gm;
const regLink = /^\[(.*)\]\((.*)\)$/gm;
const regQuote = /^> ([a-zA-Z0-9-_\s]+)$/gm;
const regQuoteStrongIta = /^> \*{2}(.*) \*{1}(.*)\*{3}/;
const regnotConvert = /(?<=[a-zA-Z0-9_-\s]+)[#>\w\s]+/;


function convertMarkdown() {

    let inputStr = markdownInput.value;
    let str;

    if (regHeading1.test(inputStr)) {
        str = inputStr.replace(regHeading1, "<h1>$1</h1>")

    } else if (regHeading2.test(inputStr)) {
        str = inputStr.replace(regHeading2, "<h2>$1</h2>")
    } else if (regHeading3.test(inputStr)) {
        str = inputStr.replace(regHeading3, "<h3>$1</h3>")
    } else if (regBold.test(inputStr)) {
        str = inputStr.replace(regBold, "<strong>$1</strong>")
    } else if (regBoldHeading.test(inputStr)) {
        str = inputStr.replace(regBoldHeading, "<h1><strong>$1</strong></h1>")
    }
    else if (regItalic.test(inputStr)) {
        str = inputStr.replace(regItalic, "<em>$1</em>")
    } else if (regImg.test(inputStr)) {
        str = inputStr.replace(regImg, '<img alt="$1" src="$2">')
    } else if (regLink.test(inputStr)) {
        str = inputStr.replace(regLink, '<a href="$2">$1</a>')
    } else if (regQuote.test(inputStr)) {
        str = inputStr.replace(regQuote, '<blockquote>$1</blockquote>')
    } else if (regQuoteStrongIta.test(inputStr)) {
        str = inputStr.replace(regQuoteStrongIta, "<blockquote><strong>$1 <em>$2</em></strong></blockquote>")
    } else if (regnotConvert.test(inputStr)) {
        return inputStr
    }

    return str
}
function raw(str) {

    return str.replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")

}
markdownInput.addEventListener("input", () => {
    const result = convertMarkdown();
    if (result) {
        const rawResult = raw(result);
        rawHtml.innerHTML = rawResult;
        htmlPreview.innerHTML = result
    } else {
        console.log(11)
    }
})
