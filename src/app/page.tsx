import Image from "next/image";
import "./page.css";
import Countdown from "@/components/countdown";
import Form from "@/components/form";
import { Box } from "../components/Box";

export default function Home() {
  const banner1 = {
    url: "/img/banner1.webp",
    width: 543,
    heigth: 1024,
    alt: "sering mengalami",
  };
  const banner2 = {
    url: "/img/banner2.webp",
    width: 700,
    heigth: 859,
    alt: "kesehatan tulang jangan diabaikan",
  };

  const banner3 = {
    url: "/img/banner3.webp",
    width: 700,
    heigth: 850,
    alt: "solusi sehat tana obat",
  };

  const banner4 = {
    url: "/img/banner4.webp",
    width: 524,
    heigth: 1024,
    alt: "kandungan utama etawalin",
  };

  const banner5 = {
    url: "/img/banner5.webp",
    width: 700,
    heigth: 987,
    alt: "manfaat etawalin",
  };

  const banner6 = {
    url: "/img/banner6.webp",
    width: 524,
    heigth: 1024,
    alt: "kelebihan etawalin",
  };
  const banner7 = {
    url: "/img/banner7.webp",
    width: 700,
    heigth: 987,
    alt: "kelebihan etawalin",
  };
  const banner8 = {
    url: "/img/banner8.webp",
    width: 700,
    heigth: 987,
    alt: "kelebihan etawalin",
  };
  const banner9 = {
    url: "/img/banner9.webp",
    width: 700,
    heigth: 987,
    alt: "kelebihan etawalin",
  };
  const banner10 = {
    url: "/img/jangan-tunggu-sampai-esok.gif",
    width: 358,
    heigth: 112,
    alt: "jangan-tunggu-sampai-esok",
  };
  const banner11 = {
    url: "/img/banner10.webp",
    width: 680,
    heigth: 945,
    alt: "paket sehat",
  };
  const banner12 = {
    url: "/img/banner11.webp",
    width: 680,
    heigth: 850,
    alt: "paket sembuh",
  };
  const banner13 = {
    url: "/img/banner12.jpg",
    width: 680,
    heigth: 845,
    alt: "2 box lebih hemat",
  };
  const banner14 = {
    url: "/img/banner13.webp",
    width: 680,
    heigth: 777,
    alt: "jaminan original",
  };
  const banner15 = {
    url: "/img/banner14.webp",
    width: 495,
    heigth: 1024,
    alt: "pngiriman",
  };

  const gif2 = {
    url: "/img/gif2.gif",
    width: 498,
    heigth: 328,
    alt: "arrow",
  };
  const gif3 = {
    url: "/img/gif3.gif",
    width: 680,
    heigth: 136,
    alt: "arrow",
  };
  const gif4 = {
    url: "/img/jangan-tunggu-sampai-esok.gif",
    width: 358,
    heigth: 112,
    alt: "angan-tunggu-sampai-esok",
  };

  const pabrik = {
    url: "/img/pabrik.png",
    width: 680,
    heigth: 422,
    alt: "pabrik",
  };
  return (
    <main className="main-bbs">
      <Image
        className="full-image-bbs"
        loading="eager"
        src={banner1.url}
        width={banner1.width}
        height={banner1.heigth}
        alt={banner1.alt}
      />
      <div className="border-dashed-bbs">
        <h1>
          HATI-HATI MASALAH TULANG SENDI JANGAN DI ANGGAP SEPELE BERAKIBAT FATAL
          JIKA DIBIARKAN
        </h1>
      </div>
      <Image
        className="full-image-bbs"
        src={banner2.url}
        width={banner2.width}
        height={banner2.heigth}
        alt={banner2.alt}
      />
      <div className="border-dashed-bbs blue">
        <h1>YUKK MULAI JAGA KESEHATAN TULANG SENDI SEDINI MUNGKIN</h1>
      </div>
      <Image
        className="full-image-bbs"
        src={banner3.url}
        width={banner3.width}
        height={banner3.heigth}
        alt={banner3.alt}
      />
      <div className="border-solid-bbs yellow">
        <h1>MEREKA SUDAH MERASAKAN KHASIATNYA</h1>
      </div>
      <h1>SEKARANG GILIRAN ANDA !!!</h1>
      {/* react slick */}

      <div className="border-solid-bbs yellow">
        <h1>
          DENGAN FORMULASI YANG LEBIH KOMPLEKS SUSU ETAWALIN TERBUKTI EFEKTIF
          MEMBANTU ATASI MASALAH TULANG DAN SENDI
        </h1>
      </div>
      <Image
        className="full-image-bbs"
        src={banner4.url}
        width={banner4.width}
        height={banner4.heigth}
        alt={banner4.alt}
      />
      <Image
        className="full-image-bbs"
        src={banner5.url}
        width={banner5.width}
        height={banner5.heigth}
        alt={banner5.alt}
      />
      <Image
        className="full-image-bbs"
        src={banner6.url}
        width={banner6.width}
        height={banner6.heigth}
        alt={banner6.alt}
      />

      <div className="border-solid-bbs yellow">
        <h1>MEREKA JUGA SUDAH MERASAKAN LANGSUNG MANFAAT DARI SUSU ETAWALIN</h1>
      </div>

      <Image
        className="full-image-bbs"
        src={banner7.url}
        width={banner7.width}
        height={banner7.heigth}
        alt={banner7.alt}
      />
      <Image
        className="full-image-bbs"
        src={banner8.url}
        width={banner8.width}
        height={banner8.heigth}
        alt={banner8.alt}
      />
      <Image
        className="full-image-bbs"
        src={banner9.url}
        width={banner9.width}
        height={banner9.heigth}
        alt={banner9.alt}
      />

      <div className="border-solid-bbs yellow">
        <h1>PRODUK SUSU KESEHATAN TULANG DAN SENDI TERLARIS DI INDONESIA</h1>
      </div>

      <h2>9.675 </h2>
      <h3>TERJUAL SETIAP BULAN</h3>
      <h1>PROMO TERBATAS WAKTU</h1>
      <Countdown />
      <Image
        className="large-image-bbs"
        src={banner10.url}
        width={banner10.width}
        height={banner10.heigth}
        alt={banner10.alt}
      />
      <Image
        className="full-image-bbs"
        src={banner11.url}
        width={banner11.width}
        height={banner11.heigth}
        alt={banner11.alt}
      />
      <Image
        className="full-image-bbs"
        src={banner12.url}
        width={banner12.width}
        height={banner12.heigth}
        alt={banner12.alt}
      />
      <Image
        className="full-image-bbs"
        src={gif2.url}
        width={gif2.width}
        height={gif2.heigth}
        alt={gif2.alt}
      />
      <div className="border-solid-bbs yellow">
        <h1>ISI FORMULIR DI BAWAH INI DAN DAPATKAN</h1>
      </div>
      <Image
        className="full-image-bbs"
        src={gif3.url}
        width={gif3.width}
        height={gif3.heigth}
        alt={gif3.alt}
      />

      <Form />

      <Image
        className="large-image-bbs"
        src={gif4.url}
        width={gif4.width}
        height={gif4.heigth}
        alt={gif4.alt}
      />

      <Image
        className="full-image-bbs"
        src={banner13.url}
        width={banner13.width}
        height={banner13.heigth}
        alt={banner13.alt}
      />
      {/* react slick */}

      <div className="box-container-bbs">
        <Box
          textColor="#31708f"
          borderColor="#bcdff1"
          backgroundColor="#d9edf7"
          title="1 Box Etawalin 90rbu Saja"
          deskripsi="Pembelian 1 Box Belum Dapat Potongan Ongkir"
        />
        <Box
          textColor="#a94442"
          borderColor="#e8c4c4"
          backgroundColor="#f2dede"
          title="2 Box Etawalin 180rbu Saja"
          deskripsi="Pembelian 2 Box Sudah Dapat Potongan Ongkir"
        />
      </div>

      <Image
        className="full-image-bbs"
        src={banner14.url}
        width={banner14.width}
        height={banner14.heigth}
        alt={banner14.alt}
      />
      <Image
        className="full-image-bbs"
        src={banner15.url}
        width={banner15.width}
        height={banner15.heigth}
        alt={banner15.alt}
      />
      <Image
        className="full-image-bbs"
        src={pabrik.url}
        width={pabrik.width}
        height={pabrik.heigth}
        alt={pabrik.alt}
      />
    </main>
  );
}
