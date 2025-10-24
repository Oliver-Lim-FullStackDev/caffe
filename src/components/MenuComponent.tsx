// components/menu/Menu.tsx
import React from "react";
import { Card, CardContent } from "./ui/card";

type MenuItem = {
  title: string;
  description: string;
};

type MenuCategory = {
  name: string;
  items: MenuItem[];
};

interface MenuProps {
  categories: MenuCategory[];
  description?: string;
}

export function MenuComponent({ categories, description }: MenuProps) {
  return (
    <section className="bg-[#FFFFF6] py-16 px-6 md:px-20">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="font-extrabold text-4xl md:text-5xl text-black mb-4">
          Menu
        </h1>
        {description && (
          <p className="text-base md:text-lg text-black max-w-2xl mx-auto">
            {description}
          </p>
        )}
      </div>

      {/* Categories grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {categories.map((category) => (
          <Card
            key={category.name}
            className="bg-black text-[#FFFFF6] border-2 border-black shadow-lg"
          >
            <CardContent className="p-6">
              <h2 className="uppercase font-extrabold text-2xl mb-6">
                {category.name}
              </h2>
              <ul className="space-y-6">
                {category.items.map((item) => (
                  <li key={item.title}>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-[#FFFFF6] opacity-90">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
