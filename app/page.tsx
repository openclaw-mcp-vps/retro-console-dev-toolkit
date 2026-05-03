export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block mb-4 px-3 py-1 rounded-full border border-[#58a6ff]/30 bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-mono tracking-widest uppercase">
          Retro Console Dev Toolkit
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Modern Dev Tools for{" "}
          <span className="text-[#58a6ff]">Homebrew Retro Consoles</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          A web-based IDE with Monaco Editor, WebAssembly emulators for instant testing, and a cloud build pipeline that cross-compiles your code to real retro hardware — all in one place.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold text-lg hover:bg-[#79b8ff] transition-colors"
          >
            Start Building — $39/mo
          </a>
          <span className="text-[#8b949e] text-sm">No credit card required for trial</span>
        </div>
        <div className="mt-16 rounded-xl border border-[#30363d] bg-[#161b22] p-6 text-left font-mono text-sm overflow-x-auto">
          <div className="flex gap-2 mb-4">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]"></span>
            <span className="w-3 h-3 rounded-full bg-[#febc2e]"></span>
            <span className="w-3 h-3 rounded-full bg-[#28c840]"></span>
          </div>
          <p className="text-[#8b949e]">// main.c — NES Homebrew</p>
          <p><span className="text-[#ff7b72]">#include</span> <span className="text-[#a5d6ff]">&lt;nes.h&gt;</span></p>
          <p className="mt-2"><span className="text-[#ff7b72]">void</span> <span className="text-[#d2a8ff]">main</span><span className="text-[#c9d1d9]">()</span> {'{'}</p>
          <p className="pl-4"><span className="text-[#d2a8ff]">ppu_on_all</span><span className="text-[#c9d1d9]">();</span></p>
          <p className="pl-4"><span className="text-[#d2a8ff]">vram_adr</span><span className="text-[#c9d1d9]">(</span><span className="text-[#79c0ff]">NTADR_A</span><span className="text-[#c9d1d9]">(2,2));</span></p>
          <p className="pl-4"><span className="text-[#d2a8ff]">vram_write</span><span className="text-[#c9d1d9]">(</span><span className="text-[#a5d6ff]">&quot;HELLO RETRO WORLD&quot;</span><span className="text-[#c9d1d9]">, 17);</span></p>
          <p>{'}'}</p>
          <p className="mt-3 text-[#3fb950]">✓ Compiled · Deployed to emulator · Ready</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="rounded-xl border-2 border-[#58a6ff] bg-[#161b22] p-8">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-4xl font-bold text-white">$39</span>
            <span className="text-[#8b949e]">/month</span>
          </div>
          <p className="text-[#8b949e] mb-6">Everything you need to ship homebrew games</p>
          <ul className="space-y-3 mb-8">
            {[
              "Monaco Editor with retro platform syntax",
              "WebAssembly emulators (NES, GB, SNES, GBA)",
              "Cloud cross-compilation pipeline",
              "One-click ROM deployment & testing",
              "Integrated debugger with memory viewer",
              "Unlimited private projects"
            ].map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="text-[#3fb950] mt-0.5">✓</span>
                <span className="text-[#c9d1d9] text-sm">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full text-center px-6 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-bold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "Which retro platforms are supported?",
              a: "Currently NES, Game Boy, Game Boy Color, SNES, and GBA. More platforms including Sega Genesis and Atari 2600 are on the roadmap."
            },
            {
              q: "Do I need to install anything locally?",
              a: "No. The entire toolchain runs in your browser via WebAssembly. Emulation, compilation, and debugging all happen in the cloud or client-side — zero local setup."
            },
            {
              q: "Can I export my ROMs to run on real hardware?",
              a: "Yes. Every build produces a standard ROM file you can flash to a cartridge or load onto an EverDrive, SD2SNES, or similar flash cart."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <h3 className="font-semibold text-white mb-2">{q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] py-8 text-center text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Retro Console Dev Toolkit. Built for homebrew developers.
      </footer>
    </main>
  );
}
