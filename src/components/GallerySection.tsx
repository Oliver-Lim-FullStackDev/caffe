import React from "react"

type GalleryProps = {
  title: string
  subtitle?: string
  images: string[]
}

export function GallerySection({ title, subtitle, images }: GalleryProps) {
  return (
    <section className="bg-[#FFFFF6] py-16 px-6 md:px-20">
      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="font-extrabold text-4xl md:text-5xl text-black mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-base md:text-lg text-black">{subtitle}</p>
        )}
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 max-w-6xl mx-auto">
        {images.map((src, idx) => (
          <div
            key={idx}
            className="relative aspect-square w-full overflow-hidden rounded-none shadow-md"
          >
            <img
              src={src}
              alt={`gallery-image-${idx}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
