# 🍰 Pastelería Website | E-Commerce Platform

<!-- 4. **Limpieza Final:** -->
![Project Preview](/public/images/screenshot.png)

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white&style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

🚀 **[Live Demo →](https://camellia-bakery-website.vercel.app/)** | 📚 [Documentation](./docs) | 🐛 [Report Bug](https://github.com/To2003/camellia-bakery-website./issues)

> 🇺🇸 **English** | [🇪🇸 Español](#-spanish)

---

## 📋 About the Project

**Pastelería Website** is a modern, fully-responsive e-commerce platform built for showcasing and selling artisanal pastries and baked goods. This project demonstrates **Full-Stack development** capabilities with a focus on **clean architecture**, **component composition**, and **professional web standards**.

Developed as a portfolio piece to showcase expertise in:
- ✅ Modern React patterns and hooks
- ✅ Server-Side Rendering (SSR) with Next.js 14
- ✅ Type-safe development with TypeScript
- ✅ Responsive UI/UX design with Tailwind CSS
- ✅ State management with React Context
- ✅ E-commerce business logic (cart, filtering, product management)

---

## 🎯 Why I Built This (Motivation)

This project was developed as a **professional demonstration of Full-Stack development skills** and is designed to be presented to potential employers. It showcases:

### 💼 Technical Proficiency
- Understanding of **modern web architecture** (App Router, Server Components)
- **Clean Code** principles and best practices
- **Component-driven development** approach
- **Type safety** throughout the application
- **Responsive design** with mobile-first methodology

### 🎓 Learning Outcomes
- Real-world e-commerce patterns (product catalog, shopping cart, filtering)
- Managing complex state without Redux (Context API)
- Building reusable component systems
- Performance optimization techniques
- SEO-friendly architecture

### 🚀 Career Ready
This project demonstrates that I'm ready to:
- Contribute to production-level codebases
- Work with modern web technologies and frameworks
- Understand business requirements and translate them to technical solutions
- Write maintainable and scalable code

---

## ✨ Key Features

- 🛍️ **Dynamic Product Catalog** - Browse pastries with real-time filtering by category
- 🛒 **Smart Shopping Cart** - Add/remove items with automatic total calculation
- 🔍 **Category Filtering** - Filter products by Cakes, Cupcakes, Cookies, Cheesecakes, etc.
- 📱 **Fully Responsive** - Mobile-optimized interface using Tailwind CSS
- 🎨 **Modern UI/UX** - Beautiful product showcase with high-quality images
- 💳 **Order Summary** - Clear product details and pricing information
- 🌙 **Dark/Light Mode** - Theme switching with Next.js Themes
- ⚡ **Performance Optimized** - Lazy loading, code splitting, and image optimization
- ♿ **Accessible** - WCAG compliance with semantic HTML
- 📊 **Type-Safe** - Full TypeScript coverage for reliability
- 🔁 **ISR-enabled Catalog** - The product catalog is backed by Sanity.io and uses Incremental Static Regeneration (ISR) so content edits in Sanity update the site almost in real-time without full redeploys.

---

## 🚀 Tech Stack

### Frontend Framework & Language
- **Next.js 14** - React framework with App Router and SSR
- **React 19** - Latest React with improved performance
- **TypeScript 5** - Type-safe JavaScript for scalable applications

### Styling & UI
- **Tailwind CSS 3** - Utility-first CSS framework
- **Shadcn/ui Components** - Accessible component library built on Radix UI
- **Lucide React** - Modern icon library (600+ icons)
- **Next.js Themes** - Dark/Light mode implementation

### Headless CMS
- **Sanity.io (Headless CMS)** - Content and product management for the catalog and categories

### State Management & Forms
- **React Context API** - Lightweight state management for cart
- **React Hook Form** - Efficient form handling
- **Zod** - TypeScript-first schema validation

### Development Tools
- **ESLint** - Code quality and consistency
- **PostCSS & Autoprefixer** - CSS processing
- **pnpm** - Fast, disk space efficient package manager
- **Sanity.io (Headless CMS)**

### Deployment
- **Vercel** - Optimized hosting for Next.js applications

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** 18.17 or higher
- **npm**, **yarn**, or **pnpm** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/To2003/camellia-bakery-website
   cd pasteleria-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

4. **Build for production**
   ```bash
   npm run build
   npm start
   ```

---

## ⚙️ Environment Variables / Configuración

Add the following environment variables to .env.local (do not commit secrets):

- NEXT_PUBLIC_SANITY_PROJECT_ID
- NEXT_PUBLIC_SANITY_DATASET
- NEXT_PUBLIC_SANITY_API_VERSION

These variables are required for the Sanity client to fetch product and category data.

---

## 🔐 Admin Panel / Panel de Administración

To manage products and categories locally, open the admin panel at:
- /admin

Log in with an authorized Sanity account to edit content. Changes made in Sanity will be reflected on the site via ISR.

---

## 📂 Project Structure

```
pasteleria-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout component
│   ├── page.tsx                 # Home page
│   └── globals.css              # Global styles
│
├── components/                   # Reusable React components
│   ├── product-catalog.tsx      # Main product listing with filters
│   ├── product-card.tsx         # Individual product card
│   ├── cart-sidebar.tsx         # Shopping cart sidebar
│   ├── navbar.tsx               # Navigation header
│   ├── hero.tsx                 # Hero banner section
│   ├── features-banner.tsx      # Features showcase
│   ├── pickup-points.tsx        # Delivery locations
│   ├── instagram-share.tsx      # Social media integration
│   ├── site-footer.tsx          # Footer component
│   ├── theme-provider.tsx       # Dark/Light mode provider
│   │
│   └── ui/                      # Shadcn/ui components (40+ primitives)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── sheet.tsx
│       └── ... (reusable components)
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.tsx           # Mobile breakpoint detection
│   └── use-toast.ts             # Toast notification system
│
├── lib/                          # Utilities and context
│   ├── cart-context.tsx         # Shopping cart state management
│   ├── products.ts              # Product data and types
│   └── utils.ts                 # Helper functions
│
├── public/                       # Static assets
│   └── images/                  # Product images
│
├── styles/                       # Global stylesheets
│   └── globals.css
│
├── package.json                  # Dependencies
├── tsconfig.json                # TypeScript configuration
├── tailwind.config.ts           # Tailwind CSS configuration
├── next.config.mjs              # Next.js configuration
└── README.md                     # This file
```

---

## 💡 Architecture Highlights

### Component Composition
- **Atomic Design**: Small, reusable components that compose into larger features
- **Single Responsibility**: Each component has one clear purpose
- **Props-Driven**: Highly configurable through props

### State Management
```typescript
// Cart Context manages shopping state globally
interface CartItem extends Product {
  quantity: number;
}

// Provider wraps the application
<CartProvider>
  <App />
</CartProvider>
```

### Data Flow
```
Product List (lib/products.ts)
      ↓
ProductCard (renders)
      ↓
Add to Cart → CartContext (updates state)
      ↓
CartSidebar (reads from context, shows total)
```

---

## 🎯 Key Code Examples

### Shopping Cart Implementation
```typescript
// Custom hook for cart operations
const { items, addToCart, removeFromCart, total } = useCart();

// Usage in component
<button onClick={() => addToCart(product)}>
  Add to Cart
</button>
```

### Product Filtering
```typescript
// Real-time filter by category
const [activeCategory, setActiveCategory] = useState("Todos");
const filteredProducts = activeCategory === "Todos" 
  ? products 
  : products.filter(p => p.category === activeCategory);
```

### Responsive Design
```typescript
// Mobile detection hook
const isMobile = useIsMobile();

{isMobile && <MobileMenu />}
{!isMobile && <DesktopMenu />}
```

---

## 🔄 Development Workflow

### Available Scripts
```bash
# Development with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Code Quality
- TypeScript strict mode enabled
- ESLint configuration for consistent code
- Prettier formatting (configured in `.prettierrc`)

---

## 📊 Performance Metrics

### Lighthouse Targets
- **Performance**: 90+
- **Accessibility**: 95+
- **Best Practices**: 90+
- **SEO**: 100

### Optimizations Applied
- ✅ Image optimization with Next.js Image component
- ✅ Code splitting by route
- ✅ CSS purging with Tailwind
- ✅ Lazy loading for below-the-fold content
- ✅ Server-Side Rendering (SSR)
- ✅ Incremental Static Regeneration (ISR) for catalog updates via Sanity

---

## 🚀 Deployment

This project is optimized for deployment on **Vercel** (the creators of Next.js).

### Deploy to Vercel
1. Push code to GitHub
2. Connect repository to Vercel
3. Auto-deploy on every push

[Deploy Now →](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

---

## 📝 Future Enhancements

- [ ] Add payment integration (Stripe/MercadoPago)
- [ ] Implement user authentication
- [ ] Create admin dashboard for product management
- [ ] Add order tracking system
- [ ] Integrate email notifications
- [ ] Implement wishlist functionality
- [ ] Add product reviews and ratings
- [ ] Create inventory management system
- [ ] Add multi-language support (i18n)

---

## 🤝 Contributing

This is a portfolio project, but contributions and suggestions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](./LICENSE) file for details.

---

## 👨‍💻 About the Developer

**Tomás Aguilar** | Full-Stack Developer  
📧 Email: [tomasaguilar.code@gmail.com](mailto:tomasaguilar.code@gmail.com)  
🔗 LinkedIn: [Perfil](https://www.linkedin.com/in/tomás-aguilar-8b3603262)  
🐙 GitHub: [@To2003](https://github.com/To2003)  
🌐 Portfolio: [portfolio-website-to2003s-projects.vercel.app](https://portfolio-website-to2003s-projects.vercel.app)

---

## 🎖️ Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/ui](https://ui.shadcn.com)
- [Vercel](https://vercel.com)

---

<br />

<div align="center">

**[⬆ Back to top](#-pastelería-website--e-commerce-platform)**

</div>

---

<a id="spanish"></a>

# 🍰 Sitio Web Pastelería | Plataforma E-Commerce

![Next.js](https://img.shields.io/badge/Next.js-14-black?logo=next.js&logoColor=white&style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&style=flat-square)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white&style=flat-square)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3-06B6D4?logo=tailwindcss&logoColor=white&style=flat-square)
![License](https://img.shields.io/badge/Licencia-MIT-green?style=flat-square)

🚀 **[Demo en Vivo →](https://camellia-bakery-website.vercel.app/)** | 📚 [Documentación](./docs) | 🐛 [Reportar Error](https://github.com/To2003/camellia-bakery-website/issues)

> [🇺🇸 English](#-pastelería-website--e-commerce-platform) | 🇪🇸 **Español**

---

## 📋 Sobre el Proyecto

**Sitio Web Pastelería** es una plataforma de e-commerce moderna y completamente responsiva diseñada para mostrar y vender productos de pastelería artesanal. Este proyecto demuestra capacidades de **desarrollo Full-Stack** con enfoque en **arquitectura limpia**, **composición de componentes** y **estándares web profesionales**.

Desarrollado como pieza de portafolio para demostrar experiencia en:
- ✅ Patrones moderno de React y hooks
- ✅ Renderización del lado del servidor (SSR) con Next.js 14
- ✅ Desarrollo type-safe con TypeScript
- ✅ Diseño UI/UX responsivo con Tailwind CSS
- ✅ Gestión de estado con React Context
- ✅ Lógica de e-commerce (carrito, filtrado, gestión de productos)

---

## 🎯 Motivación (Mi Objetivo)

Este proyecto fue desarrollado como una **demostración profesional de habilidades en desarrollo Full-Stack** y está diseñado para presentarse a potenciales empleadores. Demuestra:

### 💼 Competencia Técnica
- Entendimiento de **arquitectura web moderna** (App Router, Server Components)
- Principios de **Clean Code** y mejores prácticas
- Enfoque de **desarrollo orientado a componentes**
- **Seguridad de tipos** en toda la aplicación
- **Diseño responsivo** con metodología mobile-first

### 🎓 Logros de Aprendizaje
- Patrones reales de e-commerce (catálogo, carrito, filtrado)
- Gestión de estado complejo sin Redux (Context API)
- Construcción de sistemas de componentes reutilizables
- Técnicas de optimización de rendimiento
- Arquitectura SEO-friendly

### 🚀 Listo para Trabajar
Este proyecto demuestra que estoy capacitado para:
- Contribuir a codebases de nivel producción
- Trabajar con tecnologías web modernas
- Entender requisitos empresariales y traducirlos a soluciones técnicas
- Escribir código mantenible y escalable

---

## ✨ Funcionalidades Clave

- 🛍️ **Catálogo Dinámico** - Explora pasteles con filtrado en tiempo real
- 🛒 **Carrito Inteligente** - Agrega/elimina artículos con cálculo automático
- 🔍 **Filtrado por Categoría** - Tortas, Cupcakes, Galletas, Cheesecakes, etc.
- 📱 **Totalmente Responsivo** - Interfaz optimizada para móviles
- 🎨 **Diseño Moderno** - Exhibición hermosa de productos con imágenes de calidad
- 💳 **Resumen de Orden** - Detalles claros de productos y precios
- 🌙 **Modo Oscuro/Claro** - Cambio de tema con Next.js Themes
- ⚡ **Optimizado** - Lazy loading, code splitting, optimización de imágenes
- ♿ **Accesible** - Cumplimiento WCAG con HTML semántico
- 📊 **Type-Safe** - Cobertura completa de TypeScript
- 🔁 **Catálogo con ISR** - El catálogo está respaldado por Sanity.io y utiliza Incremental Static Regeneration (ISR), por lo que las ediciones en Sanity se actualizan casi en tiempo real sin necesidad de redeploy completo.

---

## 🚀 Stack Tecnológico

### Framework y Lenguaje
- **Next.js 14** - Framework React con App Router y SSR
- **React 19** - Última versión de React con mejor rendimiento
- **TypeScript 5** - JavaScript type-safe para aplicaciones escalables

### Estilos y UI
- **Tailwind CSS 3** - Framework CSS utility-first
- **Componentes Shadcn/ui** - Librería de componentes accesibles basada en Radix UI
- **Lucide React** - Librería moderna de iconos (600+ iconos)
- **Next.js Themes** - Implementación de modo oscuro/claro

### Headless CMS
- **Sanity.io (Headless CMS)** - Gestión de contenido y productos para catálogo y categorías

### Gestión de Estado y Formularios
- **React Context API** - Gestión ligera de estado para carrito
- **React Hook Form** - Manejo eficiente de formularios
- **Zod** - Validación de esquemas orientada a TypeScript

### Herramientas de Desarrollo
- **ESLint** - Calidad y consistencia de código
- **PostCSS & Autoprefixer** - Procesamiento de CSS
- **pnpm** - Gestor de paquetes rápido y eficiente
- **Sanity.io (Headless CMS)**

### Despliegue
- **Vercel** - Hosting optimizado para aplicaciones Next.js

---

## 🚀 Instalación y Uso

### Requisitos Previos
- **Node.js** 18.17 o superior
- **npm**, **yarn**, o **pnpm** como gestor de paquetes

### Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/To2003/camellia-bakery-website
   cd pasteleria-website
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   # o
   pnpm install
   ```

3. **Ejecutar servidor de desarrollo**
   ```bash
   npm run dev
   # o
   pnpm dev
   ```
   Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

4. **Construir para producción**
   ```bash
   npm run build
   npm start
   ```

---

## ⚙️ Variables de Entorno / Configuración

Añade las siguientes variables en .env.local (no subir claves reales al repositorio):

- NEXT_PUBLIC_SANITY_PROJECT_ID
- NEXT_PUBLIC_SANITY_DATASET
- NEXT_PUBLIC_SANITY_API_VERSION

Estas variables son necesarias para que el cliente de Sanity obtenga los datos de productos y categorías.

---

## 🔐 Panel de Administración

Para gestionar productos y categorías localmente, abre el panel de administración en:
- /admin

Inicia sesión con una cuenta autorizada de Sanity para editar contenido. Los cambios realizados en Sanity se reflejan en el sitio mediante ISR.

---

## 📂 Estructura del Proyecto

```
pasteleria-website/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Componente layout raíz
│   ├── page.tsx                 # Página de inicio
│   └── globals.css              # Estilos globales
│
├── components/                   # Componentes React reutilizables
│   ├── product-catalog.tsx      # Listado principal de productos
│   ├── product-card.tsx         # Tarjeta de producto individual
│   ├── cart-sidebar.tsx         # Barra lateral del carrito
│   ├── navbar.tsx               # Encabezado de navegación
│   ├── hero.tsx                 # Sección hero con banner
│   ├── features-banner.tsx      # Exhibición de características
│   ├── pickup-points.tsx        # Ubicaciones de entrega
│   ├── instagram-share.tsx      # Integración social media
│   ├── site-footer.tsx          # Componente pie de página
│   ├── theme-provider.tsx       # Proveedor de tema oscuro/claro
│   │
│   └── ui/                      # Componentes Shadcn/ui (40+ primitivos)
│       ├── button.tsx
│       ├── card.tsx
│       ├── dialog.tsx
│       ├── drawer.tsx
│       ├── sheet.tsx
│       └── ... (componentes reutilizables)
│
├── hooks/                        # Custom React hooks
│   ├── use-mobile.tsx           # Detección de breakpoint mobile
│   └── use-toast.ts             # Sistema de notificaciones toast
│
├── lib/                          # Utilidades y context
│   ├── cart-context.tsx         # Gestión de estado del carrito
│   ├── products.ts              # Datos y tipos de productos
│   └── utils.ts                 # Funciones auxiliares
│
├── public/                       # Activos estáticos
│   └── images/                  # Imágenes de productos
│
├── styles/                       # Hojas de estilo globales
│   └── globals.css
│
├── package.json                  # Dependencias
├── tsconfig.json                # Configuración de TypeScript
├── tailwind.config.ts           # Configuración de Tailwind CSS
├── next.config.mjs              # Configuración de Next.js
└── README.md                     # Este archivo
```

---

## 💡 Aspectos Destacados de la Arquitectura

### Composición de Componentes
- **Diseño Atómico**: Componentes pequeños y reutilizables que se componen
- **Responsabilidad Única**: Cada componente tiene un propósito claro
- **Basado en Props**: Altamente configurable a través de props

### Gestión de Estado
```typescript
// Cart Context gestiona el estado globalmente
interface CartItem extends Product {
  quantity: number;
}

// Provider envuelve la aplicación
<CartProvider>
  <App />
</CartProvider>
```

### Flujo de Datos
```
Lista de Productos (lib/products.ts)
      ↓
ProductCard (renderiza)
      ↓
Agregar al Carrito → CartContext (actualiza estado)
      ↓
CartSidebar (lee del context, muestra total)
```

---

## 🎯 Ejemplos de Código Clave

### Implementación del Carrito
```typescript
// Custom hook para operaciones del carrito
const { items, addToCart, removeFromCart, total } = useCart();

// Uso en componente
<button onClick={() => addToCart(product)}>
  Agregar al Carrito
</button>
```

### Filtrado de Productos
```typescript
// Filtro en tiempo real por categoría
const [activeCategory, setActiveCategory] = useState("Todos");
const filteredProducts = activeCategory === "Todos" 
  ? products 
  : products.filter(p => p.category === activeCategory);
```

### Diseño Responsivo
```typescript
// Hook de detección móvil
const isMobile = useIsMobile();

{isMobile && <MobileMenu />}
{!isMobile && <DesktopMenu />}
```

---

## 🔄 Flujo de Desarrollo

### Scripts Disponibles
```bash
# Desarrollo con hot reload
npm run dev

# Build de producción
npm run build

# Iniciar servidor de producción
npm start

# Lint de código
npm run lint
```

### Calidad de Código
- TypeScript en modo estricto habilitado
- Configuración ESLint para consistencia
- Formateo Prettier (configurado en `.prettierrc`)

---

## 📊 Métricas de Rendimiento

### Objetivos Lighthouse
- **Rendimiento**: 90+
- **Accesibilidad**: 95+
- **Mejores Prácticas**: 90+
- **SEO**: 100

### Optimizaciones Aplicadas
- ✅ Optimización de imágenes con Next.js Image
- ✅ Code splitting por ruta
- ✅ Purga de CSS con Tailwind
- ✅ Lazy loading para contenido debajo del fold
- ✅ Server-Side Rendering (SSR)
- ✅ Incremental Static Regeneration (ISR) para actualizaciones del catálogo a través de Sanity

---

## 🚀 Despliegue

Este proyecto está optimizado para desplegar en **Vercel** (creadores de Next.js).

### Desplegar en Vercel
1. Push del código a GitHub
2. Conectar repositorio a Vercel
3. Auto-deploy en cada push

[Desplegar Ahora →](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

---

## 📝 Mejoras Futuras

- [ ] Integración de pagos (Stripe/MercadoPago)
- [ ] Implementar autenticación de usuarios
- [ ] Crear dashboard de administración
- [ ] Agregar sistema de rastreo de órdenes
- [ ] Integrar notificaciones por email
- [ ] Implementar funcionalidad de wishlist
- [ ] Agregar reseñas y calificaciones
- [ ] Crear sistema de gestión de inventario
- [ ] Agregar soporte multi-idioma (i18n)

---

## 🤝 Contribuciones

Este es un proyecto de portafolio, ¡pero las contribuciones y sugerencias son bienvenidas!

1. Fork del repositorio
2. Crear rama de feature (`git checkout -b feature/amazing-feature`)
3. Commit de cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abrir un Pull Request

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT** - ver el archivo [LICENSE](./LICENSE) para detalles.

---

## 👨‍💻 Sobre el Desarrollador

**Tomás Aguilar** | Desarrollador Full-Stack   
📧 Email: [tomasaguilar.code@gmail.com](mailto:tomasaguilar.code@gmail.com)  
🔗 LinkedIn: [Perfil](https://www.linkedin.com/in/tomás-aguilar-8b3603262)  
🐙 GitHub: [@To2003](https://github.com/To2003)  
🌐 Portfolio: [portfolio-website-to2003s-projects.vercel.app](https://portfolio-website-to2003s-projects.vercel.app/)

---

## 🎖️ Agradecimientos

- [Documentación de Next.js](https://nextjs.org/docs)
- [Documentación de React](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn/ui](https://ui.shadcn.com)
- [Vercel](https://vercel.com)

---

<br />

<div align="center">

**[⬆ Volver al inicio](#-sitio-web-pastelería--plataforma-e-commerce)**

</div>

---

<div align="center">

### Desarrollado con ❤️ por [Tomás Aguilar](https://github.com/To2003)

🌐 [Portafolio](https://portfolio-website-to2003s-projects.vercel.app/) • 📧 [Email](mailto:tomasaguilar.code@gmail.com) • 🔗 [LinkedIn](https://www.linkedin.com/in/tomás-aguilar-8b3603262) • 🐙 [GitHub](https://github.com/To2003)

</div>
