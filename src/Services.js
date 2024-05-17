function Services({ img, alt, h, p, Link, t }) {
  return (
    <div>
      <div
        style={{
          border: "4px  solid white",
          width: "350px",
          padding: "10px ,20px",
        }}
      >
        <img src={img} alt={alt} />
        <h1>{h}</h1>
        <p>{p}</p>
        <a href={Link}>{t}</a>
      </div>
    </div>
  );
}
export default Services;
