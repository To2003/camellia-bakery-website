"use client"

import Image from "next/image"

export function Hero() {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-pastry.jpg"
          alt="Pasteleria artesanal Camellia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <span className="mb-4 inline-block rounded-full border border-background/30 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-background/80">
            Pasteleria Artesanal
          </span>

          <h1 className="font-serif text-5xl font-bold leading-tight text-background md:text-7xl text-balance">
            Dulzura hecha a mano, con amor
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-background/80">
            Cada creacion esta pensada para hacer de tus momentos algo especial.
            Ingredientes de primera, tecnicas artesanales.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#productos"
              className="rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Ver Productos
            </a>
            <a
              href="https://wa.me/5491100000000?text=Hola!%20Quiero%20hacer%20un%20pedido%20personalizado"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-background/40 bg-transparent px-8 py-3.5 text-sm font-semibold text-background transition-colors hover:bg-background/10"
            >
              Pedido Personalizado
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
