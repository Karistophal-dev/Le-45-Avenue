"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Item = {
  name: string;
  price?: string;
  desc?: string;
  featured?: boolean;
  image?: string;
};

type SubSection = {
  label?: string;
  note?: string;
  tags?: string[];
  items: Item[];
};

type Category = {
  label: string;
  note?: string;
  subsections: SubSection[];
};

const MENU: Category[] = [
  {
    label: "TACOS BOWL",
    subsections: [
      {
        note: "Servi avec frites et sauce fromagère maison",
        items: [
          {
            name: "Bowl Tenders & Bacon de Boeuf",
            price: "10,90 €",
            desc: "Tenders, bacon, sauce cheddar, emmental",
            featured: true,
            image: "/food/bowl.png",
          },
          {
            name: "Bowl Kebab",
            price: "10,90 €",
            desc: "Émincé de kebab, cheddar, oignons frits",
          },
          {
            name: "Escalope Boursin",
            price: "10,90 €",
            desc: "Escalope de poulet nature, boursin",
          },
          {
            name: "Chicken Curry",
            price: "10,90 €",
            desc: "Émincé de poulet au curry, fromage",
          },
          {
            name: "Bowl CB",
            price: "10,90 €",
            desc: "Cordon bleu, emmental, cheddar",
          },
        ],
      },
    ],
  },
  {
    label: "BURGERS",
    note: "seul / en menu",
    subsections: [
      {
        label: "Classiques",
        note: "Au choix : salade, oignon, tomate, olive",
        items: [
          { name: "Burger Cheese", price: "6,00 € / 7,50 €", desc: "Steak 90g" },
          { name: "Burger Double Cheese", price: "7,00 € / 8,50 €", desc: "2 steaks 90g" },
          { name: "Burger Double Cheese Bacon", price: "7,50 € / 8,90 €", desc: "2 steaks 90g, bacon" },
          { name: "Burger Triple Cheese", price: "8,00 € / 9,50 €", desc: "3 steaks 90g" },
          { name: "Burger Country", price: "7,00 € / 8,50 €", desc: "Steak 90g, galette de pommes de terre" },
          { name: "Burger Chèvre Miel", price: "8,00 € / 9,50 €", desc: "2 steaks 90g, chèvre miel" },
          { name: "Burger Chicken", price: "7,00 € / 8,00 €", desc: "Filet de poulet pané" },
          { name: "Burger Raclette", price: "8,00 € / 9,50 €", desc: "Filet de poulet pané, galette de pommes de terre, raclette" },
          { name: "Burger Beef Chicken", price: "7,00 € / 8,50 €", desc: "Steak 90g, filet de poulet pané" },
          { name: "Burger Texas", price: "8,50 / 8,50 €", desc: "Filet de poulet pané, galette de pommes de terre" },
          { name: "Burger Fish", price: "7,50 € / 8,00 €", desc: "Filet de poisson pané" },
          { name: "Burger Végétarien", price: "7,00 € / 8,50 €", desc: "Galette de légumes, galette de pomme de terre" },
        ],
      },
      {
        label: "Premium",
        items: [
          {
            name: "Burger Frenchy",
            price: "12,90 €",
            desc: "Steak 150g, salade, oignon rings, cheddar, sauce burger",
            featured: true,
            image: "/food/pacy-burger.webp",
          },
          {
            name: "Le Raclette",
            price: "12,90 €",
            desc: "Steak 150g, sauce au poivre, salade, tomate, oignons frits, œuf, raclette",
          },
          {
            name: "Chicken Thai",
            price: "12,90 €",
            desc: "Escalope de poulet, sauce chili thai, emmental, œuf, salade, tomate, poivrons",
          },
        ],
      },
    ],
  },
  {
    label: "TACOS",
    subsections: [
      {
        tags: ["Pain tortilla", "Frites incluses", "Sauce fromagère maison", "Boisson +1 €"],
        note: "Viandes au choix : Steak, Kebab, Nuggets, Curry, Escalope, Cordon Bleu, Merguez, Tenders, Tandoori, Lardons",
        items: [
          { name: "Tacos 1 Viande", price: "8,00 €" },
          { name: "Tacos 2 Viandes", price: "9,50 €" },
          {
            name: "Tacos 3 Viandes",
            price: "11,00 €",
            featured: true,
            image: "/food/tacos%203%20viandes.png",
          },
        ],
      },
      {
        label: "Suppléments",
        items: [
          { name: "Cheddar", price: "1,00 €" },
          { name: "Boursin", price: "1,50 €" },
          { name: "Bacon", price: "1,50 €" },
          { name: "Chèvre", price: "1,50 €" },
          { name: "Lardons", price: "1,50 €" },
          { name: "Œuf", price: "1,50 €" },
          { name: "Jambon de dinde", price: "1,50 €" },
          { name: "Miel", price: "1,50 €" },
        ],
      },
    ],
  },
  {
    label: "SANDWICHS",
    note: "seul / en menu",
    subsections: [
      {
        note: "Pain au choix : Pain Truc ou Tortilla · Sauces : Ketchup, Mayo, Blanche, Andalouse, Biggy Burger, Algérienne, Chili Thaï, Samouraï, Poivre, Curry, Moutarde, Barbecue",
        items: [
          { name: "Kebab", price: "7,50 € / 8,50 €", desc: "Viande de kebab" },
          { name: "Kebab Boursin", price: "8,00 € / 9,00 €" },
          { name: "Kebab Chèvre Miel", price: "8,50 € / 9,50 €", desc: "Au four" },
          { name: "Mixte", price: "9,50 € / 11,00 €", desc: "2 viandes au choix, fromage" },
          { name: "Steak", price: "7,00 € / 8,50 €", desc: "Steak, fromage" },
          { name: "Bacon", price: "8,90 € / 9,90 €", desc: "2 steaks, fromage, bacon, œuf" },
          { name: "Buffalo", price: "8,90 € / 9,90 €", desc: "3 steaks, fromage, œuf" },
          { name: "Savoyard", price: "9,00 € / 10,00 €", desc: "Escalope de poulet, fromage, lardons, galette de pomme de terre" },
          { name: "Escalope", price: "8,50 € / 9,50 €", desc: "Escalope de poulet, fromage" },
          { name: "Escalope Boursin", price: "8,90 € / 9,90 €" },
          { name: "Chicken Curry", price: "8,50 € / 9,50 €", desc: "Émincé de poulet au curry jaune, fromage" },
          { name: "Chicken Tandoori", price: "8,50 € / 9,00 €", desc: "Émincé de poulet aux épices tandoori, fromage" },
        ],
      },
    ],
  },
  {
    label: "PIZZAS",
    note: "Senior 10,50 € · Méga 14,50 € · +4 € en livraison",
    subsections: [
      {
        label: "Base Tomate",
        items: [
          { name: "Marguerita", desc: "Sauce tomate, mozzarella" },
          { name: "Californie", desc: "Sauce tomate, mozzarella, pepperoni" },
          { name: "Reine", desc: "Sauce tomate, mozzarella, jambon, champignons" },
          { name: "Mexicaine", desc: "Sauce tomate, mozzarella, poivrons verts, viande hachée" },
          { name: "Chicken", desc: "Sauce tomate, mozzarella, oignons, poulet, crème fraîche" },
          { name: "4 Fromages", desc: "Sauce tomate, mozzarella, chèvre, emmental, reblochon" },
          { name: "Paysanne", desc: "Sauce tomate, mozzarella, poivrons, chorizo, merguez" },
          { name: "Garchoise", desc: "Sauce tomate, mozzarella, poivrons, thon, chèvre, crème fraîche" },
          { name: "Méditerranéenne", desc: "Sauce tomate, mozzarella, viande hachée, piment, œuf" },
          { name: "Végétarienne", desc: "Sauce tomate, mozzarella, oignons, poivrons, champignons, olives" },
          { name: "Kebab", desc: "Sauce tomate, mozzarella, oignons, viande de kebab, tomates fraîches, crème fraîche" },
          { name: "Servienne", desc: "Sauce tomate, mozzarella, oignons, poivrons, poulet, tomates fraîches" },
          { name: "Calzone", desc: "Sauce tomate, mozzarella, jambon, œuf" },
          { name: "Orientale", desc: "Sauce tomate, mozzarella, poivrons, merguez, olives, œuf" },
          { name: "Spicy Hot", desc: "Sauce tomate, mozzarella, viande hachée, tomates fraîches, piment" },
          { name: "Splendide", desc: "Sauce tomate, mozzarella, poivrons, pepperoni, jambon, viande hachée" },
          { name: "La Provençale", desc: "Sauce tomate, mozzarella, origan, herbes de provence, oignons, tomates fraîches, champignons" },
          { name: "Norvégienne", desc: "Sauce tomate, double mozzarella, saumon, crème fraîche", featured: true },
        ],
      },
      {
        label: "Base Crème Fraîche",
        items: [
          { name: "Saumon", desc: "Crème fraîche, mozzarella, saumon, pommes de terre" },
          { name: "La Royal", desc: "Crème fraîche, mozzarella, viande hachée, poulet, kebab" },
          { name: "La Texas", desc: "Crème fraîche, mozzarella, viande hachée, pommes de terre" },
          { name: "La Savoyarde", desc: "Crème fraîche, mozzarella, oignons, pomme de terre, reblochon" },
          { name: "La Chèvre Miel", desc: "Crème fraîche, mozzarella, chèvre, emmental, miel" },
          { name: "La Boursin", desc: "Crème fraîche, mozzarella, viande hachée, boursin" },
          { name: "La Chamonix", desc: "Crème fraîche, mozzarella, viande hachée, jambon, lardons, reblochon, pommes de terre" },
          { name: "La Vernonnaise", desc: "Crème fraîche, mozzarella, lardons, poulet, reblochon, pommes de terre" },
          { name: "La Pêcheur", desc: "Crème fraîche, mozzarella, oignons, thon, chèvre" },
          { name: "L'Italienne", desc: "Crème fraîche, mozzarella, lardons, pommes de terre, œuf, pesto" },
          { name: "La Campagnarde", desc: "Crème fraîche, mozzarella, oignons, tomates, lardons, olives" },
          { name: "La Western", desc: "Crème fraîche, mozzarella, jambon, chèvre, champignons" },
          { name: "La Suprême", desc: "Crème fraîche, mozzarella, lardons, poulet, pommes de terre" },
          { name: "La Spéciale 45", desc: "Crème fraîche, mozzarella, poulet, merguez, viande hachée" },
          { name: "La 4 Saisons", desc: "Crème fraîche, mozzarella, oignons, jambon, lardons, champignons" },
          { name: "La Fermière", desc: "Crème fraîche, mozzarella, poulet, pommes de terre, champignons" },
        ],
      },
      {
        label: "Bases Spéciales",
        items: [
          { name: "La Buffalo", desc: "Sauce barbecue, mozzarella, oignons, lardons, viande hachée, champignons" },
          { name: "La Biggy Burger", desc: "Sauce biggy, mozzarella, oignons, viande hachée, tomates, cheddar" },
          { name: "L'Algérienne", desc: "Sauce algérienne, mozzarella, oignons, poulet, jambon, cheddar" },
          { name: "La Monstrueuse", desc: "Sauce algérienne, mozzarella, viande hachée, poulet, merguez" },
          { name: "La New Yorkaise", desc: "Sauce barbecue, mozzarella, jambon, pepperoni, viande hachée" },
        ],
      },
    ],
  },
  {
    label: "ASSIETTES",
    note: "Servies avec boisson 33cl",
    subsections: [
      {
        items: [
          { name: "Kebab", price: "12,90 €" },
          { name: "Chicken Curry", price: "12,90 €" },
          {
            name: "2 Viandes au choix",
            price: "14,90 €",
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
        note: "Servies avec pain et boisson",
        items: [
          {
            name: "La César",
            price: "8,90 €",
            desc: "Salade, poulet, tomates, maïs, olives",
            featured: true,
            image: "/food/salade%20roti.webp",
          },
          { name: "La Végé", price: "8,90 €", desc: "Salade, chèvre, maïs, tomates, olives" },
          { name: "La Chef", price: "8,90 €", desc: "Salade, chèvre, poulet, jambon, tomates, maïs, olives" },
          { name: "La Pêcheur", price: "8,90 €", desc: "Salade, thon, chèvre, tomates, maïs, olives" },
        ],
      },
      {
        label: "Panini",
        note: "seul / en menu",
        items: [
          { name: "Viande hachée · Curry · Poulet · Thon · Le Chèvre · Le Norvégien", price: "4,80 € / 7,50 €" },
          { name: "Kinder Bueno", price: "3,80 €" },
          { name: "Kit Kat", price: "3,80 €" },
          { name: "Nutella", price: "3,20 €" },
        ],
      },
    ],
  },
  {
    label: "ACCOMPAGNEMENTS",
    subsections: [
      {
        label: "Cheesy Bread",
        items: [
          {
            name: "Cheesy Bread",
            price: "4,50 €",
            desc: "Bâtonnets de pâte, mozzarella, fromage râpé, boursin, ail",
          },
        ],
      },
      {
        label: "À partager",
        items: [
          { name: "Poulet croustillant", price: "5,90 €", desc: "6 pièces" },
          { name: "Chicken Wings", price: "5,90 €", desc: "6 pièces" },
          { name: "Nuggets", price: "5,90 €", desc: "8 pièces" },
          { name: "Bouchées de camembert", price: "5,90 €", desc: "8 pièces" },
          { name: "Mozza Sticks", price: "5,90 €", desc: "8 pièces" },
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
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(48px, 8vw, 112px)",
              color: "#F0EBE3",
              lineHeight: 1,
            }}
          >
            Notre Carte
          </h2>
          {category.note && !category.subsections.some((s) => s.label) && category.note !== "seul / en menu" && (
            <p
              style={{
                fontFamily: "var(--font-poppins)",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#C8873A",
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
                      ? "2px solid #C8873A"
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
            borderLeft: "3px solid #C8873A",
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
                  color: "#C8873A",
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
            {(featured as Item).price && (
              <p
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontWeight: 700,
                  fontSize: "clamp(26px, 2.8vw, 40px)",
                  color: "#C8873A",
                  letterSpacing: "-0.02em",
                  marginTop: 28,
                }}
              >
                {(featured as Item).price}
              </p>
            )}
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
              {(section.label || section.note || section.tags || (si === 0 && category.note)) && (
                <div
                  style={{
                    paddingTop: si === 0 && !featured ? 0 : 48,
                    paddingBottom: 4,
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: 16,
                  }}
                >
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {section.label && (
                      <span
                        style={{
                          display: "block",
                          fontFamily: "var(--font-poppins)",
                          fontWeight: 700,
                          fontSize: 10,
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          color: "#C8873A",
                        }}
                      >
                        {section.label}
                      </span>
                    )}
                    {section.tags && (
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 6,
                          marginTop: section.label ? 10 : 0,
                        }}
                      >
                        {section.tags.map((tag, ti) => {
                          const isPrice = tag.includes("€");
                          return (
                            <span
                              key={ti}
                              style={{
                                fontFamily: "var(--font-poppins)",
                                fontWeight: isPrice ? 700 : 400,
                                fontSize: 10,
                                letterSpacing: isPrice ? "0.12em" : "0.06em",
                                color: isPrice ? "#C8873A" : "#888",
                                background: isPrice
                                  ? "rgba(200, 135, 58, 0.1)"
                                  : "rgba(255,255,255,0.04)",
                                border: `1px solid ${isPrice ? "rgba(200,135,58,0.35)" : "rgba(255,255,255,0.08)"}`,
                                borderRadius: 3,
                                padding: "4px 9px",
                              }}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    )}
                    {section.note && section.note !== "seul / en menu" && (
                      <span
                        style={{
                          display: "block",
                          fontFamily: "var(--font-poppins)",
                          fontWeight: 400,
                          fontSize: 10,
                          letterSpacing: "0.1em",
                          color: "#555",
                          marginTop: section.tags ? 8 : section.label ? 5 : 0,
                        }}
                      >
                        {section.note}
                      </span>
                    )}
                  </div>
                  {((si === 0 && category.note === "seul / en menu") ||
                    section.note === "seul / en menu") && (
                    <div
                      style={{
                        display: "flex",
                        gap: 16,
                        alignItems: "flex-end",
                        flexShrink: 0,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-poppins)",
                          fontWeight: 700,
                          fontSize: 9,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "#F0EBE3",
                          minWidth: "clamp(65px, 8.5vw, 115px)",
                          textAlign: "right",
                          display: "block",
                        }}
                      >
                        Seul
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-poppins)",
                          fontWeight: 700,
                          fontSize: 9,
                          letterSpacing: "0.2em",
                          textTransform: "uppercase",
                          color: "#C8873A",
                          minWidth: "clamp(65px, 8.5vw, 115px)",
                          textAlign: "right",
                          display: "block",
                        }}
                      >
                        En menu
                      </span>
                    </div>
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
                          e.currentTarget.style.color = "#C8873A";
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
                    {item.price &&
                      ((category.note === "seul / en menu" && si === 0) ||
                        section.note === "seul / en menu") &&
                      item.price.includes(" / ") ? (
                      <div
                        style={{
                          display: "flex",
                          gap: 16,
                          flexShrink: 0,
                          alignItems: "baseline",
                        }}
                      >
                        <p
                          style={{
                            fontFamily: "var(--font-poppins)",
                            fontWeight: 700,
                            fontSize: "clamp(18px, 2.4vw, 32px)",
                            color: "#F0EBE3",
                            letterSpacing: "-0.01em",
                            fontVariantNumeric: "tabular-nums",
                            minWidth: "clamp(65px, 8.5vw, 115px)",
                            textAlign: "right",
                          }}
                        >
                          {item.price.split(" / ")[0].trim()}
                        </p>
                        <p
                          style={{
                            fontFamily: "var(--font-poppins)",
                            fontWeight: 700,
                            fontSize: "clamp(18px, 2.4vw, 32px)",
                            color: "#C8873A",
                            letterSpacing: "-0.01em",
                            fontVariantNumeric: "tabular-nums",
                            minWidth: "clamp(65px, 8.5vw, 115px)",
                            textAlign: "right",
                          }}
                        >
                          {item.price.split(" / ")[1].trim()}
                        </p>
                      </div>
                    ) : item.price ? (
                      <p
                        style={{
                          fontFamily: "var(--font-poppins)",
                          fontWeight: 700,
                          fontSize: "clamp(18px, 2.4vw, 32px)",
                          color: "#C8873A",
                          letterSpacing: "-0.01em",
                          flexShrink: 0,
                          transition: "color 0.1s",
                          fontVariantNumeric: "tabular-nums",
                        }}
                      >
                        {item.price}
                      </p>
                    ) : null}
                  </div>
                  <div
                    style={{
                      height: 1,
                      background:
                        "linear-gradient(to right, #C8873A 0%, #1E1E1E 60%)",
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
