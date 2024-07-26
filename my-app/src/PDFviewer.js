import React from 'react';
import { Viewer, Worker } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

function PDFviewer() {
    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        // <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.7.570/es5/build/pdf.worker.js">
            <Viewer
                fileUrl='/sekiji.pdf'
                plugins={[defaultLayoutPluginInstance]}
            />
        </Worker>
    );
}

export default PDFviewer;
