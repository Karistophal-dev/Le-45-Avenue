"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Item = {
  name: string;
  price: string;
  desc?: string;
  featured?: boolean;
  image?: string;
};

type SubSection = {
  label?: string;
  note?: string;
  items: Item[];
};

type Category = {
  label: string;
  note?: string;
  subsections: SubSection[];
};

const MENU: Category[] = [
  {
    label: "BURGERS",
    note: "formule avec boisson +1,50 €",
    subsections: [
      {
        items: [
          {
            name: "Pacy Burger",
            price: "12,00 €",
            desc: "150g bœuf + poulet croustillant — le burger signature",
            featured: true,
            image: "/food/pacy-burger.webp",
          },
          {
            name: "Hamburger 150g",
            price: "10,00 €",
            desc: "Steak haché, cheddar, pickles, sauce burger maison",
          },
          {
            name: "Double Burger 200g",
            price: "11,00 €",
            desc: "Double steak, double fromage, oignons caramélisés",
          },
          {
            name: "Méga Burger 300g",
            price: "12,00 €",
            desc: "Triple viande, cheddar fondu, sauce signature",
          },
          {
            name: "Chicken Burger",
            price: "7,00 €",
            desc: "Poulet croustillant, salade, sauce ranch",
          },
          {
            name: "Double Chicken Burger",
            price: "8,50 €",
            desc: "Double filet croustillant, cheddar, pickles",
          },
          {
            name: "Burger Kebab",
            price: "6,50 €",
            desc: "Viande grillée, crudités, sauce blanche maison",
          },
          {
            name: "Burger Royal",
            price: "8,00 €",
            desc: "Filet royal, laitue, tomates, sauce miel-moutarde",
          },
        ],
      },
    ],
  },
  {
    label: "SANDWICHS",
    note: "formule avec boisson +1,50 €",
    subsections: [
      {
        label: "Pain classique",
        items: [
          {
            name: "Kebab",
            price: "7,50 €",
            desc: "Veau tranché, crudités fraîches, sauce blanche maison",
          },
          {
            name: "Tenders",
            price: "7,50 €",
            desc: "Filets de poulet croustillants, salade, mayo",
          },
          {
            name: "Köfte",
            price: "7,50 €",
            desc: "Boulettes de viande grillées, tomates, oignons",
          },
          {
            name: "Merguez",
            price: "7,50 €",
            desc: "Merguez maison, poivrons confits, harissa",
          },
          {
            name: "Cordon Bleu",
            price: "7,50 €",
            desc: "Cordon bleu pané, salade, sauce moutarde",
          },
          {
            name: "Steak",
            price: "7,50 €",
            desc: "Steak haché, cheddar, salade fraîche, tomates",
          },
          {
            name: "Poulet",
            price: "7,50 €",
            desc: "Filet de poulet grillé, salade, sauce blanche",
          },
        ],
      },
      {
        label: "Au four · Galette",
        items: [
          {
            name: "Pain au Four",
            price: "10,00 €",
            desc: "Pain artisanal grillé, viande kebab fondante, fromage",
            featured: true,
            image: "/food/Pain%20au%20four.webp",
          },
          {
            name: "Royal",
            price: "9,50 €",
            desc: "Pain au four, poulet royal, cheddar, sauce signature",
          },
          {
            name: "Galette Royal",
            price: "9,50 €",
            desc: "Galette croustillante, garniture royale, fromage fondu",
          },
          {
            name: "Galette",
            price: "7,50 €",
            desc: "Galette fine, viande grillée, sauce maison",
          },
        ],
      },
    ],
  },
  {
    label: "TACOS",
    subsections: [
      {
        note: "Au four — galette ultra moelleuse, sauce fromagère",
        items: [
          {
            name: "1 Viande",
            price: "10,00 €",
            desc: "Viande grillée, sauce fromagère, frites intégrées",
          },
          {
            name: "2 Viandes",
            price: "11,00 €",
            desc: "Double frappe, double goût — le classique",
          },
          {
            name: "3 Viandes",
            price: "13,00 €",
            desc: "Le choix des vrais — intense et généreux",
            featured: true,
            image: "/food/tacos%203%20viandes.png",
          },
          {
            name: "4 Viandes",
            price: "15,00 €",
            desc: "L'ultime — pour les affamés sans compromis",
          },
        ],
      },
    ],
  },
  {
    label: "ASSIETTES",
    subsections: [
      {
        note: "Avec frites et salade",
        items: [
          {
            name: "Köfte",
            price: "13,00 €",
            desc: "Boulettes grillées, sauce maison",
          },
          {
            name: "Wings",
            price: "13,00 €",
            desc: "Ailes croustillantes, sauce piquante",
          },
          {
            name: "Poulet",
            price: "13,00 €",
            desc: "Filets de poulet rôtis, sauce blanche",
          },
          {
            name: "Cordon Bleu",
            price: "13,00 €",
            desc: "Cordon bleu maison, sauce moutarde",
          },
          {
            name: "Merguez",
            price: "13,00 €",
            desc: "Merguez grillées, harissa légère",
          },
          {
            name: "Steak",
            price: "13,00 €",
            desc: "Steak haché, cheddar fondu",
          },
          {
            name: "Kebab",
            price: "13,00 €",
            desc: "Veau tranché, sauce blanche maison",
          },
          {
            name: "Royal",
            price: "15,00 €",
            desc: "Sélection royale, sauce signature",
          },
          {
            name: "Mixte",
            price: "15,00 €",
            desc: "Le meilleur de tout — sélection de plusieurs viandes",
            featured: true,
            image: "/food/assiette%20mixte.webp",
          },
        ],
      },
    ],
  },
  {
    label: "SALADES & PANINI",
    subsections: [
      {
        label: "Salades",
        items: [
          {
            name: "Poulet Rôti",
            price: "9,00 €",
            desc: "Poulet mariné, légumes frais, vinaigrette maison",
            featured: true,
            image: "/food/salade%20roti.webp",
          },
          {
            name: "Thon",
            price: "9,00 €",
            desc: "Thon, tomates, olives, œufs durs, vinaigrette",
          },
          {
            name: "Chèvre",
            price: "9,00 €",
            desc: "Chèvre chaud, noix, mesclun, miel",
          },
        ],
      },
      {
        label: "Panini",
        note: "Pain ciabatta grillé",
        items: [
          {
            name: "Kebab · Poulet · Merguez · Steak",
            price: "7,00 €",
            desc: "Au choix, fromage fondu, garniture fraîche",
          },
          {
            name: "Panini Nutella",
            price: "5,00 €",
            desc: "Pain ciabatta grillé, Nutella généreux",
          },
        ],
      },
    ],
  },
  {
    label: "EXTRAS",
    subsections: [
      {
        label: "Barquettes de frites",
        items: [
          { name: "Petite", price: "2,50 €" },
          { name: "Moyenne", price: "3,00 €" },
          { name: "Grande", price: "3,50 €" },
          { name: "Méga", price: "5,00 €" },
        ],
      },
      {
        label: "Barquettes de viandes — à la pièce",
        items: [
          { name: "Wings", price: "1,00 €" },
          { name: "Tenders", price: "1,00 €" },
          { name: "Nuggets", price: "0,50 €" },
          { name: "Mozza Stick", price: "0,50 €" },
        ],
      },
      {
        label: "Barquettes de viandes — format",
        items: [
          { name: "Petite", price: "5,00 €" },
          { name: "Moyenne", price: "7,00 €" },
          { name: "Grande", price: "9,00 €" },
          { name: "Méga", price: "14,00 €" },
        ],
      },
      {
        label: "Suppléments",
        items: [
          { name: "Cheddar", price: "0,50 €" },
          { name: "Chèvre", price: "0,50 €" },
          { name: "Mozzarella", price: "0,50 €" },
          { name: "Galette PTD", price: "1,00 €" },
        ],
      },
      {
        label: "Menu Kid's",
        items: [
          { name: "Nuggets ou Viandes + Frites", price: "7,00 €" },
        ],
      },
    ],
  },
  {
    label: "DESSERTS & BOISSONS",
    subsections: [
      {
        label: "Desserts",
        items: [
          { name: "Tiramisu", price: "2,50 €", featured: true, image: "/food/tiramisu.webp" },
          { name: "Baklava", price: "4,00 €" },
          { name: "Glace Simple", price: "2,00 €" },
          { name: "Tarte aux Daim", price: "2,50 €" },
        ],
      },
      {
        label: "Boissons",
        items: [
          { name: "Canette 33cl", price: "1,50 €" },
          { name: "Bouteille 50cl", price: "2,00 €" },
          { name: "Bouteille 1,5L", price: "3,00 €" },
          { name: "Red Bull", price: "2,50 €" },
          { name: "Monster", price: "3,00 €" },
          { name: "Freez", price: "2,50 €" },
        ],
      },
    ],
  },
];

export default function MenuSection() {
  const [active, setActive] = useState(0);
  const tabsScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = tabsScrollRef.current;
    if (!container) return;
    const btns = container.querySelectorAll("button");
    btns[active]?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
  }, [active]);

  const category = MENU[active];

  // Extract the one featured item and remove it from its subsection
  let featured: Item | null = null;
  const sections = category.subsections.map((section) => ({
    ...section,
    items: section.items.filter((item) => {
      if (item.featured && !featured) {
        featured = item;
        return false;
      }
      return true;
    }),
  }));

  return (
    <section id="menu" style={{ background: "#111111", paddingBottom: 120 }}>
      {/* Header */}
      <div style={{ padding: "120px 10vw 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 24,
            marginBottom: 48,
          }}
        >
          <h2
            style={{
              fontFamily: "var(--font-pacifico)",
              fontSize: "clamp(48px, 8vw, 112px)",
              color: "#F0EBE3",
              lineHeight: 1,
            }}
          >
            Notre Carte
          </h2>
          {category.note && (
            <p
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#E8671A",
                background: "rgba(232, 103, 26, 0.08)",
                border: "1px solid rgba(232, 103, 26, 0.25)",
                borderRadius: 4,
                padding: "5px 12px",
              }}
            >
              {category.note}
            </p>
          )}
        </div>

        {/* Tabs — horizontal scroll on mobile */}
        <div style={{ position: "relative", marginBottom: 64 }}>
        <div
          ref={tabsScrollRef}
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            paddingBottom: 4,
          }}
        >
          <div
            style={{
              display: "flex",
              gap: 28,
              minWidth: "max-content",
              borderBottom: "1px solid #1A1A1A",
              paddingBottom: 0,
            }}
          >
            {MENU.map((cat, i) => (
              <button
                key={cat.label}
                onClick={() => setActive(i)}
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 700,
                  fontSize: 12,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: active === i ? "#F0EBE3" : "#777",
                  background: "none",
                  border: "none",
                  padding: "0 0 12px",
                  borderBottom:
                    active === i
                      ? "2px solid #E8671A"
                      : "2px solid transparent",
                  marginBottom: -1,
                  transition: "color 0.12s, border-color 0.12s",
                  whiteSpace: "nowrap",
                }}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
        {/* Fade hint — right edge */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 4,
            width: 56,
            background: "linear-gradient(to right, transparent, #111111)",
            pointerEvents: "none",
          }}
        />
        </div>
      </div>

      {/* Featured item */}
      {featured && (
        <div
          className={`featured-card${(featured as Item).image ? "" : " featured-card-no-img"}`}
          style={{
            background: "#161616",
            borderLeft: "3px solid #E8671A",
          }}
        >
          <div className="featured-card-text">
            <div>
              <p
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 700,
                  fontSize: 10,
                  letterSpacing: "0.24em",
                  textTransform: "uppercase",
                  color: "#E8671A",
                  marginBottom: 20,
                }}
              >
                — en vedette
              </p>
              <h3
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 700,
                  fontSize: "clamp(26px, 3.2vw, 48px)",
                  color: "#F0EBE3",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                {(featured as Item).name}
              </h3>
              {(featured as Item).desc && (
                <p
                  style={{
                    marginTop: 14,
                    fontFamily: "var(--font-poppins)",
                    fontWeight: 400,
                    fontSize: 13,
                    color: "#666",
                    lineHeight: 1.65,
                    maxWidth: 340,
                  }}
                >
                  {(featured as Item).desc}
                </p>
              )}
            </div>
            <p
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 700,
                fontSize: "clamp(26px, 2.8vw, 40px)",
                color: "#F5C842",
                letterSpacing: "-0.02em",
                marginTop: 28,
              }}
            >
              {(featured as Item).price}
            </p>
          </div>

          {(featured as Item).image && (
            <div style={{ position: "relative", overflow: "hidden" }}>
              <Image
                src={(featured as Item).image!}
                alt={(featured as Item).name}
                fill
                sizes="(max-width: 767px) 40vw, 25vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to right, #161616 0%, transparent 40%)",
                }}
              />
              <p
                style={{
                  position: "absolute",
                  bottom: 10,
                  right: 12,
                  zIndex: 2,
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 400,
                  fontSize: 9,
                  letterSpacing: "0.1em",
                  color: "rgba(255,255,255,0.28)",
                  pointerEvents: "none",
                }}
              >
                Images non contractuelles
              </p>
            </div>
          )}
        </div>
      )}

      {/* Typographic list */}
      <div style={{ margin: "0 10vw" }}>
        {sections.map((section, si) => {
          if (section.items.length === 0) return null;

          return (
            <div key={si}>
              {/* Subsection label / note */}
              {(section.label || section.note) && (
                <div
                  style={{
                    paddingTop: si === 0 && !featured ? 0 : 48,
                    paddingBottom: 4,
                    display: "flex",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: 10,
                  }}
                >
                  {section.label && (
                    <span
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontWeight: 700,
                        fontSize: 10,
                        letterSpacing: "0.22em",
                        textTransform: "uppercase",
                        color: "#E8671A",
                      }}
                    >
                      {section.label}
                    </span>
                  )}
                  {section.note && (
                    <span
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontWeight: 400,
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        color: "#666",
                      }}
                    >
                      {section.label ? `· ${section.note}` : section.note}
                    </span>
                  )}
                </div>
              )}

              {/* Items */}
              {section.items.map((item, i) => (
                <div key={`${si}-${i}`}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      padding: "22px 0 10px",
                      gap: 24,
                    }}
                  >
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3
                        style={{
                          fontFamily: "var(--font-poppins)",
                          fontWeight: 700,
                          fontSize: "clamp(18px, 2.4vw, 32px)",
                          color: "#F0EBE3",
                          letterSpacing: "-0.01em",
                          lineHeight: 1.1,
                          transition: "color 0.1s",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = "#E8671A";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = "#F0EBE3";
                        }}
                      >
                        {item.name}
                      </h3>
                      {item.desc && (
                        <p
                          style={{
                            marginTop: 5,
                            fontFamily: "var(--font-poppins)",
                            fontWeight: 400,
                            fontSize: 12,
                            color: "#666",
                            lineHeight: 1.5,
                          }}
                        >
                          {item.desc}
                        </p>
                      )}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-poppins)",
                        fontWeight: 700,
                        fontSize: "clamp(18px, 2.4vw, 32px)",
                        color: "#F5C842",
                        letterSpacing: "-0.01em",
                        flexShrink: 0,
                        transition: "color 0.1s",
                        fontVariantNumeric: "tabular-nums",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#E8671A";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "#F5C842";
                      }}
                    >
                      {item.price}
                    </p>
                  </div>
                  <div
                    style={{
                      height: 1,
                      background:
                        "linear-gradient(to right, #E8671A 0%, #1E1E1E 60%)",
                      opacity: 0.35,
                    }}
                  />
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
