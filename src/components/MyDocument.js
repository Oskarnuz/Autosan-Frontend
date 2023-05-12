import React from "react";
import { PDFDownloadLink, Document, Page } from "react-pdf";
import CustomerForm from "./CustomerForm";
import VehicleForm from "./VehicleForm";

const MyDocument = () => (
  <Document>
    <Page>
      <CustomerForm />
      <VehicleForm />
    </Page>
  </Document>
);

const PrintPDF = () => {
  return (
    <div>
      <PDFDownloadLink document={<MyDocument />} fileName="formulario.pdf">
        {({ blob, url, loading, error }) =>
          loading ? "Cargando PDF..." : "Descargar PDF"
        }
      </PDFDownloadLink>
    </div>
  );
};

export default PrintPDF;
