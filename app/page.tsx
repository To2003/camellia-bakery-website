"use client"

import { CartProvider } from "@/lib/cart-context"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { FeaturesBanner } from "@/components/features-banner"
import { ProductCatalog } from "@/components/product-catalog"
import { InstagramShare } from "@/components/instagram-share"
import { PickupPoints } from "@/components/pickup-points"
import { SiteFooter } from "@/components/site-footer"
import { CartSidebar } from "@/components/cart-sidebar"

export default function Page() {
  return (
    <CartProvider>
      <Navbar />
      <main>
        <Hero />
        <FeaturesBanner />
        <ProductCatalog />
        <InstagramShare />
        <PickupPoints />
      </main>
      <SiteFooter />
      <CartSidebar />
    </CartProvider>
  )
}
