import { Document, Page, pdfjs } from "react-pdf";
import workerSrc from "pdfjs-dist/legacy/build/pdf.worker.js";
import { useState } from "react";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PdfViewer({ file }) {
  const [numPages, setNumPages] = useState(null);
  const [page, setPage] = useState(1);

  function onLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="flex flex-col items-center w-full">
      <Document file={file} onLoadSuccess={onLoadSuccess}>
        <Page pageNumber={page} />
      </Document>

      <div className="flex gap-4 mt-4">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page <= 1}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded"
        >
          Previous
        </button>

        <button
          onClick={() => setPage(page + 1)}
          disabled={page >= numPages}
          className="px-4 py-2 bg-gray-300 dark:bg-gray-700 rounded"
        >
          Next
        </button>
      </div>

      <p className="mt-2">
        Page {page} of {numPages}
      </p>
    </div>
  );
}
