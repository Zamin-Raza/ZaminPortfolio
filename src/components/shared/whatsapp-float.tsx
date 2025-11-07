"use client"
import { MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function WhatsAppFloat() {
  const handleWhatsAppClick = () => {
    const phoneNumber = "923367231826"
    const message = "Hello Zamin! I saw your portfolio and would like to connect with you."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative group">
        <Button
          onClick={handleWhatsAppClick}
          className="flex items-center gap-2 pl-4 pr-5 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 bg-[#25D366] hover:bg-[#128C7E] hover:scale-105 text-white font-medium"
          aria-label="Contact on WhatsApp"
        >
          {/* WhatsApp Icon */}
          <MessageCircle className="w-5 h-5" fill="currentColor" />
          {/* Text - hidden on mobile, visible on desktop */}
          <span className="hidden sm:inline-block">Contact Me</span>
        </Button>
        
        {/* Subtle background glow */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-20 -z-10 blur-sm"></div>

        {/* Notification dot */}
        <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></div>
      </div>
      
      {/* Tooltip for mobile */}
      <div className="absolute right-20 bottom-2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap shadow-lg sm:hidden">
        💬 Chat on WhatsApp!
        <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
      </div>
    </div>
  )
}