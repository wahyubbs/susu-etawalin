"use client";

import { useEffect } from "react";

import { ReactPixelTrack } from "./pixelEvent";

function Form() {
  const submitCalback = () => {
    ReactPixelTrack().then((ReactPixel) => {
      ReactPixel.track("Lead");
    });
  };

  useEffect(() => {
    let form = document.getElementById("form");
    form?.addEventListener("submit", submitCalback);

    return () => {
      form?.removeEventListener("submit", submitCalback);
    };
  }, []);

  return (
    <div className="form-container">
      <form action="https://app.loops.id/save-order/jha-etawalin-wl-form">
        <label>Masukkan nama lengkap anda *</label>
        <input
          data-label="Nama"
          required
          type="text"
          aria-required
          name="name"
          placeholder="Tulis Nama Anda"
        />
        <label>Masukkan no whatsapp anda *</label>
        <input
          data-label="phone"
          required
          pattern="[0]{1}[0-9]{8,12}"
          type="text"
          aria-required
          name="phone"
          placeholder="Sebutkan nomor HP aktif Anda: contoh 081234567890"
        />

        <input type="submit" name="address" value="Pesan Sekarang COD" />
      </form>
    </div>
  );
}

export default Form;
