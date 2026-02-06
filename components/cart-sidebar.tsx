"use client"

import Image from "next/image"
import { Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react"
import { useCart } from "@/lib/cart-context"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet"

const WHATSAPP_NUMBER = "5491100000000"

function buildWhatsAppMessage(
  items: { product: { name: string; price: number }; quantity: number }[],
  total: number,
) {
  let msg = "Hola! Quiero hacer el siguiente pedido:\n\n"
  for (const item of items) {
    msg += `- ${item.product.name} x${item.quantity} ($${(item.product.price * item.quantity).toLocaleString("es-AR")})\n`
  }
  msg += `\n*Total: $${total.toLocaleString("es-AR")}*`
  msg += "\n\nGracias!"
  return encodeURIComponent(msg)
}

export function CartSidebar() {
  const { items, updateQuantity, removeItem, clearCart, totalPrice, isOpen, setIsOpen } =
    useCart()

  const handleCheckout = () => {
    if (items.length === 0) return
    const msg = buildWhatsAppMessage(items, totalPrice)
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank")
  }

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent className="flex flex-col bg-background" side="right">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 font-serif text-xl text-foreground">
            <ShoppingBag className="h-5 w-5 text-primary" />
            Tu Pedido
          </SheetTitle>
          <SheetDescription className="text-muted-foreground">
            Revisa tu seleccion y completa el pedido por WhatsApp.
          </SheetDescription>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 text-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-secondary">
              <ShoppingBag className="h-8 w-8 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              Tu carrito esta vacio. Agrega productos para empezar.
            </p>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 scrollbar-hide">
              <div className="flex flex-col gap-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 rounded-xl border border-border bg-card p-3"
                  >
                    <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-lg">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex flex-1 flex-col justify-between">
                      <div>
                        <h4 className="text-sm font-semibold text-foreground leading-tight">
                          {item.product.name}
                        </h4>
                        <p className="mt-0.5 text-xs text-muted-foreground">
                          ${item.product.price.toLocaleString("es-AR")} c/u
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity - 1)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
                            aria-label="Quitar uno"
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="w-5 text-center text-sm font-bold text-foreground">
                            {item.quantity}
                          </span>
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.product.id, item.quantity + 1)
                            }
                            className="flex h-7 w-7 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
                            aria-label="Agregar uno"
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.product.id)}
                          className="text-muted-foreground transition-colors hover:text-destructive"
                          aria-label="Eliminar producto"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Subtotal</span>
                <span className="text-lg font-bold text-foreground">
                  ${totalPrice.toLocaleString("es-AR")}
                </span>
              </div>

              <button
                type="button"
                onClick={handleCheckout}
                className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                <MessageCircle className="h-5 w-5" />
                Completar Pedido por WhatsApp
              </button>

              <button
                type="button"
                onClick={clearCart}
                className="mt-2 w-full rounded-full border border-border bg-transparent px-6 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  )
}
