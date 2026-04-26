const GOLD = "#bf9049";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-black text-white" style={{ fontFamily: "'Nunito Sans', sans-serif" }}>
      {/* ===== NAVBAR ===== */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-black"
        style={{ height: 87, padding: "0 53px" }}
      >
        <a
          href="/"
          className="uppercase no-underline text-white"
          style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(20px,2.5vw,32px)" }}
        >
          Alvy <span style={{ color: GOLD }}>Arnob</span>
        </a>
        <div className="flex items-center gap-10">
          <a href="/" className="text-white text-xs font-semibold uppercase tracking-wider hover:opacity-80 no-underline">Works</a>
          <a href="/" className="text-white text-xs font-semibold uppercase tracking-wider hover:opacity-80 no-underline">About Me</a>
          <a href="/" className="text-white text-xs font-semibold uppercase tracking-wider hover:opacity-80 no-underline">Contact</a>
        </div>
      </nav>

      {/* ===== MAIN ===== */}
      <main style={{ paddingTop: 87 }}>
        <div className="max-w-4xl mx-auto px-6 py-20">
          <h1 className="font-serif text-3xl tracking-[0.1em] uppercase mb-10 text-center"
              style={{ color: GOLD, fontFamily: "'DM Serif Display', serif" }}>
            Achievements & Awards
          </h1>

          <article
            className="rounded-lg p-8 md:p-10"
            style={{
              background: "linear-gradient(180deg, #0d0d0d 0%, #050505 100%)",
              border: `1px solid ${GOLD}33`,
              boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            }}
          >
            <div className="text-xs uppercase tracking-[0.2em] mb-3" style={{ color: GOLD }}>
              🎬 Finalist · 2024
            </div>
            <h2
              className="text-2xl md:text-3xl mb-4 text-white"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Animation Short — Film Festival
            </h2>
            <p className="text-sm md:text-base leading-relaxed text-gray-300 mb-4">
              Selected as a finalist at the South Asian Animation Festival 2024 for an original
              2D animated short film exploring themes of memory, identity, and the quiet poetry of
              everyday life. The piece was recognized for its hand-drawn craftsmanship, painterly
              color work, and emotionally resonant storytelling.
            </p>
            <p className="text-sm md:text-base leading-relaxed text-gray-400 mb-6">
              The short went on to screen at three additional regional festivals, earning a special
              jury mention for direction and earning praise from the festival circuit for its
              distinctive visual language and atmospheric sound design.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t" style={{ borderColor: `${GOLD}22` }}>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Year</div>
                <div className="text-sm text-white">2024</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Role</div>
                <div className="text-sm text-white">Director / Animator</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Medium</div>
                <div className="text-sm text-white">2D Animation</div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-gray-500 mb-1">Status</div>
                <div className="text-sm" style={{ color: GOLD }}>Finalist</div>
              </div>
            </div>
          </article>

          <div className="mt-12 text-center">
            <a
              href="/"
              className="inline-block text-xs uppercase tracking-[0.2em] no-underline pb-1"
              style={{ color: GOLD, borderBottom: `1px solid ${GOLD}` }}
            >
              ← Back to Portfolio
            </a>
          </div>
        </div>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="text-center" style={{ padding: "48px 20px 0" }}>
        <div
          className="uppercase mb-10 text-white"
          style={{ fontFamily: "'DM Serif Display', serif", fontSize: "clamp(28px,4vw,48px)", letterSpacing: "0.05em" }}
        >
          Alvy <span style={{ color: GOLD }}>Arnob</span>
        </div>
        <div className="flex justify-center gap-10 mb-8 flex-wrap text-sm">
          <a href="mailto:hello@alvyarnob.com" className="text-white no-underline hover:opacity-70">hello@alvyarnob.com</a>
          <a href="/" className="text-white no-underline hover:opacity-70">Instagram</a>
          <a href="/" className="text-white no-underline hover:opacity-70">Behance</a>
        </div>
        <div style={{ height: 1, background: "#fff", marginTop: 8 }} />
        <div className="py-6 text-xs text-gray-500">© {new Date().getFullYear()} Alvy Arnob. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Achievements;
