export function Box({
  borderColor,
  backgroundColor,
  textColor,
  title,
  deskripsi,
}: {
  textColor: string;
  borderColor: string;
  backgroundColor: string;
  title: string;
  deskripsi: string;
}) {
  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        borderColor: borderColor,
        color: textColor,
      }}
      className="box-bbs"
    >
      <h1
        style={{
          color: textColor,
        }}
      >
        {title}
      </h1>
      <p>{deskripsi}</p>
    </div>
  );
}
