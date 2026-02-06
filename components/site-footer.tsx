"use client"

import { Mail, Linkedin, Instagram, Github, Heart, Code2 } from "lucide-react"

export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Columna 1: Marca y Newsletter */}
          <div className="md:col-span-1">
            <h3 className="font-serif text-3xl font-bold tracking-tight text-white">Camellia</h3>
            <p className="mt-4 text-sm leading-relaxed text-background/60">
              Pastelería artesanal con los mejores ingredientes. 
              Hacemos de tus momentos algo dulce y memorable.
            </p>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-background/40 mb-3">Dulzura en tu mail</p>
              <div className="flex max-w-sm items-center gap-2">
                <input 
                  type="email" 
                  placeholder="Tu correo..." 
                  className="w-full rounded-md border border-background/10 bg-background/5 px-3 py-2 text-sm text-white focus:border-white/30 focus:outline-none transition-all"
                />
                <button className="rounded-md bg-background px-3 py-2 text-sm font-medium text-foreground hover:bg-background/90 transition-colors">
                  OK
                </button>
              </div>
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Navegación</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {['Inicio', 'Productos', 'Puntos de Retiro', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase().replace(/ /g, '')}`} className="text-sm text-background/60 transition-colors hover:text-white">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Redes de la Pastelería */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">Seguinos</h4>
            <div className="mt-4 flex flex-col gap-4">
              <a href="https://www.instagram.com/camellia_bakery" target="_blank" className="group flex items-center gap-3 text-sm text-background/60 transition-all hover:text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/10 group-hover:border-white/40">
                  <Instagram className="h-4 w-4" />
                </span>
                @camellia_bakery
              </a>
              <a href="mailto:to2003pasteleria@gmail.com" className="group flex items-center gap-3 text-sm text-background/60 transition-all hover:text-white">
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-background/10 group-hover:border-white/40">
                  <Mail className="h-4 w-4" />
                </span>
                Email de consultas
              </a>
            </div>
          </div>

          {/* Columna 4: El Desarrollador (Vos) */}
          <div className="rounded-2xl bg-white/5 p-6 border border-white/5">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white flex items-center gap-2">
              <Code2 className="h-4 w-4 text-background/40" />
              Developer
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <p className="text-xs text-background/50 leading-relaxed">
                Sitio diseñado y desarrollado para Camellia.
              </p>
              <div className="flex gap-3">
                <a href="https://github.com/To2003" target="_blank" className="text-background/40 hover:text-white transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/tomás-aguilar-8b3603262" target="_blank" className="text-background/40 hover:text-white transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="mailto:tomasaguilar.code@gmail.com" className="text-background/40 hover:text-white transition-colors">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Barra Final */}
        <div className="mt-16 border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[10px] uppercase tracking-widest text-background/30">
            &copy; {currentYear} Camellia Pastelería. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1.5 text-xs text-background/40">
            Hecho con <Heart className="h-3 w-3 fill-red-500/50 text-red-500/50" /> por 
            <a href="https://github.com/To2003" target="_blank" className="font-medium text-background/60 hover:text-white underline-offset-4 hover:underline">
              Tomas Aguilar
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}