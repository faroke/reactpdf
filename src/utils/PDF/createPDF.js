import {PDFDocument, rgb, StandardFonts} from 'pdf-lib';
function download(fileUrl, fileName) {
    const a = document.createElement("a");
    a.href = fileUrl;
    a.setAttribute("download", fileName);
    a.click();
}
async function createPdf(pages,filename) {
    const pdfDoc = await PDFDocument.create()
    const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman)
    const page = pdfDoc.addPage()
    const { width, height } = page.getSize()
    const fontSize = 30
    page.drawText('Creating PDFs in JavaScript is awesome!', {
        x: 50,
        y: height - 4 * fontSize,
        size: fontSize,
        font: timesRomanFont,
        color: rgb(0, 0.53, 0.71),
    })
    const pdfBytes = await pdfDoc.save()
    const data = new Blob([pdfBytes], {type: 'application/pdf'});
    download(data, filename + '.pdf');
}
export default createPdf;