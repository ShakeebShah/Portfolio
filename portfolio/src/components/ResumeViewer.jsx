import { useEffect, useRef, useState } from "react";
import * as pdfjs from "pdfjs-dist/legacy/build/pdf.mjs";
import workerUrl from "pdfjs-dist/legacy/build/pdf.worker.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

function ResumePage({ pageNumber, pdf }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    let cancelled = false;
    let renderTask;

    async function renderPage() {
      const page = await pdf.getPage(pageNumber);
      if (cancelled) return;

      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");
      const viewport = page.getViewport({ scale: 1.6 });

      canvas.width = viewport.width;
      canvas.height = viewport.height;

      renderTask = page.render({ canvasContext: context, viewport });
      await renderTask.promise;
    }

    renderPage();

    return () => {
      cancelled = true;
      renderTask?.cancel();
    };
  }, [pageNumber, pdf]);

  return (
    <canvas
      ref={canvasRef}
      className="mx-auto block h-auto w-full max-w-[900px] rounded-md bg-white shadow-2xl"
      aria-label={`Resume page ${pageNumber}`}
    />
  );
}

export default function ResumeViewer({ open, resumeUrl, onClose }) {
  const [pdf, setPdf] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, open]);

  useEffect(() => {
    if (!open) {
      setPdf(null);
      setError("");
      return undefined;
    }

    let active = true;
    let loadingTask;

    async function loadResume() {
      const response = await fetch(resumeUrl, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Resume request failed with ${response.status}`);
      }

      const data = new Uint8Array(await response.arrayBuffer());
      if (!active) return;

      loadingTask = pdfjs.getDocument({
        data,
        isOffscreenCanvasSupported: false,
        useWorkerFetch: false,
      });

      const document = await loadingTask.promise;
      if (active) {
        setPdf(document);
        setError("");
      }
    }

    loadResume()
      .then(() => {
        if (!active) return;
      })
      .catch((loadError) => {
        if (!active) return;
        console.error("Resume preview failed to load", loadError);
        setError("The resume preview could not be loaded.");
      });

    return () => {
      active = false;
      loadingTask?.destroy();
    };
  }, [open, resumeUrl]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-[#0b0d12]/95 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Resume viewer"
    >
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between gap-3 border-b border-[#232a3a] bg-[#0b0d12] px-4 py-3 sm:px-6">
          <p className="font-display text-lg font-semibold text-[#eef1f7]">Shakeeb CV</p>
          <div className="flex items-center gap-3">
            <a
              href={resumeUrl}
              download="Shakeeb_CV.pdf"
              className="rounded-full border border-[#34e7b8]/50 px-4 py-2 text-sm font-semibold text-[#34e7b8] transition-colors hover:bg-[#34e7b8]/10"
            >
              Download
            </a>
            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-[#232a3a] px-4 py-2 text-sm font-semibold text-[#c4c9d6] transition-colors hover:border-[#5b8cff]/60 hover:text-[#eef1f7]"
            >
              Close
            </button>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto bg-[#171c28] p-3 sm:p-5">
          {error && (
            <div className="mx-auto max-w-xl rounded-lg border border-[#ff6b6b]/40 bg-[#0b0d12] p-5 text-center text-[#eef1f7]">
              {error}
            </div>
          )}
          {!error && !pdf && (
            <div className="flex h-full items-center justify-center font-mono text-sm text-[#8b93a7]">
              Loading resume...
            </div>
          )}
          {pdf && (
            <div className="mx-auto flex max-w-5xl flex-col gap-5">
              {Array.from({ length: pdf.numPages }, (_, index) => (
                <ResumePage key={index + 1} pageNumber={index + 1} pdf={pdf} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
