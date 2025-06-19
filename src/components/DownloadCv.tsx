import React from 'react';

const DownloadCv = () => {
  return (
    <div>
      <a
        href="/Seaf_CV.pdf"
        download="Seaf_CV.pdf"
        className="bg-emerald-500 text-white px-4 py-2 rounded-md"
      >
        Download CV
      </a>
    </div>
  );
};

export default DownloadCv;