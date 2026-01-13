export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="fako-section">
      <div className="container">
        <h2>{title}</h2>
        {children}
      </div>
    </section>
  );
}
