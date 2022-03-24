import logo from './logo.svg';
import './App.css';
import {PDFDocument, rgb, StandardFonts} from 'pdf-lib';
function download(fileUrl, fileName) {
  var a = document.createElement("a");
  a.href = fileUrl;
  a.setAttribute("download", fileName);
  a.click();
}
async function createPdf() {
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
  //document.getElementById('download_link').href = window.URL.createObjectURL(data);
  download(data, "test.pdf");

  //https://stackoverflow.com/questions/19327749/javascript-blob-filename-without-link
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a href="" id="download_link" download>DOWNLOAD</a>
        <div id="output">

        </div>
      </header>
    </div>
  );
}

export default App;
