// new

import React, { useState } from "react";
import "./Products.css";
import imgCushion from "../assets/MAX.png";
import imgHD from "../assets/lube_shakti_hd.png";
import imgPrince5ltr from "../assets/lube_shakti_prince_5ltr.png";
import imgPrince from "../assets/lube_shakti_prince.png";
import imgGreese from "../assets/Greese.webp";
import imgLpShakti from "../assets/Lpgreese.png";

const categories = ["All", "WORLD RIDE", "SMOOTH PRO WORLD PRO", "SMOOTHX", "WORLD POWER", "PREMIUM ", "RIDE PLUS ", "ULTRA RIDE / TURBO POWER","SYNTHETIC X"];

const categoryIcons = {
  "All": "🛢️",
  "WORLD RIDE": "🏍️",
  "SMOOTH PRO WORLD PRO": "⚙️",
  "SMOOTHX": "💧",
  "WORLD POWER": "⚡",
  "PREMIUM ": "👑",
  "RIDE PLUS ": "🔩",
  "ULTRA RIDE / TURBO POWER": "🚀",
  "SYNTHETIC X": "🧪",
};

const categoryCounts = {
  "All": 16,
  "Engine Oil": 3,
  "Gear Oil": 2,
  "Lubricating Grease Calcium": 2,
  "Synthetic Oil ": 2,
  "Bike Engine Oil ": 3,
  "Lubricating Oil ": 2,
  "Coolant Oil": 2,
};

const products = [
  { id: 1, name: "LubePower Ultra 4T", category: "Engine Oil", grade: "20W-50", pack: "1L / 5L / 20L", desc: "High-performance 4-stroke engine oil for bikes and cars", tag: "Best Seller", image: imgPrince },
  { id: 2, name: "LubePower Synth Pro", category: "Engine Oil", grade: "5W-30", pack: "1L / 4L", desc: "Full synthetic formula for modern fuel-efficient engines", tag: "Premium", image: imgPrince5ltr },
  { id: 3, name: "LubePower Diesel HD", category: "Engine Oil", grade: "15W-40", pack: "5L / 20L / 210L", desc: "Heavy-duty diesel engine oil for commercial vehicles", tag: "", image: imgHD },
  { id: 4, name: "LubePower Gear EP", category: "Synthetic Oil ", grade: "EP 90", pack: "1L / 5L / 20L", desc: "Extreme pressure gear oil for manual transmissions", tag: "", image: imgPrince },
  { id: 5, name: "LubePower Axle 140", category: "Synthetic Oil ", grade: "EP 140", pack: "5L / 20L", desc: "Heavy-duty axle and differential protection oil", tag: "Industrial", image: imgHD },
  { id: 6, name: "LubePower Hydro 46", category: "Lubricating Grease Calcium", grade: "ISO 46", desc: "Premium hydraulic support for industrial machinery", tag: "Industrial", image: imgGreese },
  { id: 7, name: "LubePower Hydro 68", category: "Lubricating Grease Calcium", grade: "ISO 68", pack: "20L / 210L", desc: "High-viscosity lubrication for heavy equipment", tag: "", image: imgLpShakti },
  { id: 8, name: "LubePower MP Grease", category: "Gear Oil", grade: "NLGI 2", pack: "500g / 1kg / 5kg", desc: "Multi-purpose lithium grease for bearings and chassis", tag: "Best Seller", image: imgPrince5ltr },
  { id: 9, name: "LubePower HT Grease", category: "Gear Oil", grade: "NLGI 3", pack: "1kg / 5kg", desc: "High-temperature grease for industrial applications", tag: "", image: imgPrince },
  { id: 10, name: "LubePower Cutting Oil", category: "Bike Engine Oil ", grade: "-", pack: "1L / 5L / 20L", desc: "Premium cutting and tapping fluid for metal machining", tag: "", image: imgHD },
  { id: 11, name: "LubePower Rust Guard", category: "Bike Engine Oil ", grade: "-", pack: "500ml / 5L", desc: "Anti-rust and corrosion protection spray for metals", tag: "New", image: imgPrince5ltr },
  { id: 12, name: "LubePower Radiator Cool", category: "Bike Engine Oil ", grade: "-", pack: "1L / 5L", desc: "Long-life coolant for engines that prevents overheating", tag: "New", image: imgCushion },
  { id: 13, name: "LubePower Lubricating Oil", category: "Lubricating Oil ", grade: "SAE 20", pack: "1L / 5L / 20L", desc: "Multi-purpose lubricating oil for smooth engine performance", tag: "New", image: imgPrince },
  { id: 14, name: "LubePower Industrial Lube", category: "Lubricating Oil ", grade: "SAE 40", pack: "5L / 20L", desc: "Heavy-duty lubrication for machinery and equipment", tag: "Industrial", image: imgHD },
  { id: 15, name: "LubePower Coolant Oil", category: "Coolant Oil", grade: "-", pack: "1L / 5L", desc: "Advanced coolant oil to prevent engine overheating", tag: "New", image: imgPrince5ltr },
  { id: 16, name: "LubePower Arctic Cool", category: "Coolant Oil", grade: "-", pack: "1L / 5L / 20L", desc: "Long-life radiator coolant for extreme temperature protection", tag: "Premium", image: imgCushion },
];

const tagColors = {
  "Best Seller": { bg: "#e8f4fd", color: "#1565c0", border: "#1565c0" },
  "Premium": { bg: "#fff8e1", color: "#f57f17", border: "#f57f17" },
  "Industrial": { bg: "#e8f5e9", color: "#2e7d32", border: "#2e7d32" },
  "New": { bg: "#fce4ec", color: "#c62828", border: "#c62828" },
};

const productHighlights = [
  { title: "Automotive Range", text: "Solutions for bikes, passenger cars, and diesel fleets." },
  { title: "Industrial Supply", text: "Hydraulic oils, greases, coolants, and workshop fluids." },
  { title: "Dealer Support", text: "Bulk pricing, repeat supply planning, and faster dispatch." },
];

const scrollTo = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

const Products = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter((p) => {
    const matchCat = active === "All" || p.category === active;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section className="products" id="products">
      <div className="products__shell">
        <div className="products__topbar">
          <div className="products__topbar-left">
            <h2 className="products__title">Our Products</h2>
            <p className="products__sub">500+ products engineered for performance</p>
          </div>
          <div className="products__search-wrap">
            <span className="search-icon" aria-hidden="true">&#128269;</span>
            <input
              className="products__search"
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>

        <div className="products__summary">
          {productHighlights.map((item) => (
            <div className="products__summary-card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          ))}
        </div>

        <div className="products__layout">
          <aside className="products__sidebar">
            <div className="sidebar__title">Products</div>
            <ul className="sidebar__list">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={`sidebar__btn ${active === cat ? "sidebar__btn--active" : ""}`}
                    onClick={() => setActive(cat)}
                  >
                    <span className="sidebar__icon">{categoryIcons[cat]}</span>
                    <span className="sidebar__label">{cat}</span>
                    <span className="sidebar__count">({categoryCounts[cat]})</span>
                  </button>
                </li>
              ))}
            </ul>

            <div className="sidebar__cta">
              <p>Can't find what you need?</p>
              <strong>We have 500+ products</strong>
              <a onClick={() => scrollTo("contact")} className="sidebar__cta-btn" style={{cursor:"pointer"}}>&#128196; Download Catalogue</a>
            </div>
          </aside>

          <div className="products__main">
            <div className="products__result-info">
              Showing <strong>{filtered.length}</strong> products
              {active !== "All" && <> in <strong>{active}</strong></>}
            </div>

            {filtered.length === 0 ? (
              <div className="products__empty">
                <p>No products found. Try a different search or category.</p>
              </div>
            ) : (
              <div className="products__grid">
                {filtered.map((product) => {
                  const tagStyle = tagColors[product.tag] || {};
                  return (
                    <div className="product__card" key={product.id}>
                      <div className="product__image">
                        {product.tag && (
                          <span
                            className="product__tag"
                            style={{
                              background: tagStyle.bg,
                              color: tagStyle.color,
                              border: `1px solid ${tagStyle.border}`,
                            }}
                          >
                            {product.tag}
                          </span>
                        )}
                        <img
                          src={product.image}
                          alt={product.name}
                          className="product__bottle-img"
                        />
                      </div>

                      <div className="product__info">
                        <span className="product__category-label">{product.category}</span>
                        <h3 className="product__name">{product.name}</h3>
                        <p className="product__desc">{product.desc}</p>
                        <div className="product__price-wrap">
                          <span className="product__price-label">Product Price</span>
                          <span className="product__price">{product.price}</span>
                        </div>
                        <div className="product__meta">
                          <span className="meta__item"><strong>Grade:</strong> {product.grade}</span>
                          <span className="meta__item"><strong>Pack:</strong> {product.pack}</span>
                        </div>
                        <a onClick={() => scrollTo("contact")} className="product__cta" style={{cursor:"pointer"}}>Get Quote &rarr;</a>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;