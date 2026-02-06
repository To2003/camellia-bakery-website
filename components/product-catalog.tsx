"use client"

import { useState } from "react"
import { products, categories } from "@/lib/products"
import { ProductCard } from "@/components/product-card"

export function ProductCatalog() {
  const [active, setActive] = useState("Todos")

  const filtered =
    active === "Todos"
      ? products
      : products.filter((p) => p.category === active)

  return (
    <section id="productos" className="mx-auto max-w-7xl px-6 py-24">
      <div className="text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-primary">
          Nuestro catalogo
        </span>
        <h2 className="mt-2 font-serif text-4xl font-bold text-foreground md:text-5xl text-balance">
          Elegí tu favorito
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-muted-foreground leading-relaxed">
          Todos nuestros productos son elaborados con ingredientes premium y preparados el mismo dia de la entrega.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setActive(cat)}
            className={`rounded-full px-6 py-2.5 text-sm font-medium transition-all ${
              active === cat
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
