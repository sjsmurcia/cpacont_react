const workstreams = [
  {
    number: "01",
    title: "Documentos de compra y venta",
    description:
      "Explorar la captura de datos de facturas para reducir el registro manual.",
    status: "En definición",
  },
  {
    number: "02",
    title: "Revisión contable",
    description:
      "Mantener la revisión y aprobación del equipo antes de usar cualquier dato.",
    status: "Requisito",
  },
  {
    number: "03",
    title: "Preparación de cierres",
    description:
      "Organizar la información para apoyar los cierres contables y fiscales.",
    status: "Objetivo",
  },
];

function App() {
  return (
    <main className="page-shell">
      <header className="topbar">
        <a className="brand" href="/" aria-label="CPA Contable, inicio">
          <span className="brand-mark">CPA</span>
          <span>Contable</span>
        </a>
        <span className="prototype-label">Prototipo en desarrollo</span>
      </header>

      <section className="hero">
        <p className="eyebrow">San Pedro Sula · Honduras</p>
        <h1>Más tiempo para el análisis. Menos tareas repetitivas.</h1>
        <p className="hero-copy">
          Una iniciativa de CPA para apoyar al equipo contable en la preparación
          de información para cierres, empezando por ordenar procesos que hoy
          dependen de trabajo manual.
        </p>
        <div className="notice" role="note">
          <span className="notice-dot" aria-hidden="true" />
          Este prototipo no procesa ni almacena documentos o datos de clientes.
        </div>
      </section>

      <section className="work-section" aria-labelledby="work-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Enfoque del proyecto</p>
            <h2 id="work-title">Un proceso, paso a paso</h2>
          </div>
          <span className="phase-label">Fase inicial</span>
        </div>
        <div className="work-grid">
          {workstreams.map((item) => (
            <article className="work-card" key={item.number}>
              <span className="card-number">{item.number}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <span className="card-status">{item.status}</span>
            </article>
          ))}
        </div>
      </section>

      <footer>
        <span>CPA Contable</span>
        <span>Prototipo técnico · No usar con información real</span>
      </footer>
    </main>
  );
}

export default App;
