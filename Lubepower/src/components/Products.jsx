// import React, { useState } from "react";
// import "./Products.css";

// const categories = ["All", "Engine Oil", "Gear Oil", "Hydraulic Oil", "Greases", "Specialty"];

// const products = [
//   { id: 1, name: "LubePower Ultra 4T", category: "Engine Oil", grade: "20W-50", pack: "1L / 5L / 20L", desc: "High-performance 4-stroke engine oil for bikes & cars", tag: "Best Seller" },
//   { id: 2, name: "LubePower Synth Pro", category: "Engine Oil", grade: "5W-30", pack: "1L / 4L", desc: "Full synthetic formula for modern fuel-efficient engines", tag: "Premium" },
//   { id: 3, name: "LubePower Diesel HD", category: "Engine Oil", grade: "15W-40", pack: "5L / 20L / 210L", desc: "Heavy-duty diesel engine oil for commercial vehicles", tag: "" },
//   { id: 4, name: "LubePower Gear EP", category: "Gear Oil", grade: "EP 90", pack: "1L / 5L / 20L", desc: "Extreme pressure gear oil for manual transmissions", tag: "" },
//   { id: 5, name: "LubePower Axle 140", category: "Gear Oil", grade: "EP 140", pack: "5L / 20L", desc: "Heavy-duty axle and differential protection oil", tag: "Industrial" },
//   { id: 6, name: "LubePower Hydro 46", category: "Hydraulic Oil", grade: "ISO 46", pack: "20L / 210L", desc: "Premium hydraulic oil for industrial machinery", tag: "Industrial" },
//   { id: 7, name: "LubePower Hydro 68", category: "Hydraulic Oil", grade: "ISO 68", pack: "20L / 210L", desc: "High-viscosity hydraulic oil for heavy equipment", tag: "" },
//   { id: 8, name: "LubePower MP Grease", category: "Greases", grade: "NLGI 2", pack: "500g / 1kg / 5kg", desc: "Multi-purpose lithium grease for bearings & chassis", tag: "Best Seller" },
//   { id: 9, name: "LubePower HT Grease", category: "Greases", grade: "NLGI 3", pack: "1kg / 5kg", desc: "High-temperature grease for industrial applications", tag: "" },
//   { id: 10, name: "LubePower Cutting Oil", category: "Specialty", grade: "—", pack: "1L / 5L / 20L", desc: "Premium cutting & tapping fluid for metal machining", tag: "" },
//   { id: 11, name: "LubePower Rust Guard", category: "Specialty", grade: "—", pack: "500ml / 5L", desc: "Anti-rust & corrosion protection spray for metals", tag: "New" },
//   { id: 12, name: "LubePower Radiator Cool", category: "Specialty", grade: "—", pack: "1L / 5L", desc: "Long-life coolant for engines, prevents overheating", tag: "New" },
// ];

// const Products = () => {
//   const [active, setActive] = useState("All");

//   const filtered = active === "All" ? products : products.filter(p => p.category === active);

//   return (
//     <section className="products" id="products">
//       <div className="products__header">
//         <span className="section__eyebrow">Our Range</span>
//         <h2 className="products__title">Premium <span>Lubricants</span></h2>
//         <p className="products__sub">500+ products engineered for performance, trusted across industries</p>
//       </div>

//       <div className="products__filters">
//         {categories.map(cat => (
//           <button
//             key={cat}
//             className={`filter__btn ${active === cat ? "filter__btn--active" : ""}`}
//             onClick={() => setActive(cat)}
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       <div className="products__grid">
//         {filtered.map(product => (
//           <div className="product__card" key={product.id}>
//             {product.tag && <span className="product__tag">{product.tag}</span>}
//             <div className="product__icon">
//               <div className="oil__drop">
//                 <span>⚙</span>
//               </div>
//             </div>
//             <div className="product__info">
//               <span className="product__category">{product.category}</span>
//               <h3 className="product__name">{product.name}</h3>
//               <p className="product__desc">{product.desc}</p>
//               <div className="product__meta">
//                 <span className="meta__item"><strong>Grade:</strong> {product.grade}</span>
//                 <span className="meta__item"><strong>Pack:</strong> {product.pack}</span>
//               </div>
//             </div>
//             <a href="#contact" className="product__cta">Get Quote →</a>
//           </div>
//         ))}
//       </div>

//       <div className="products__cta-bar">
//         <p>Can't find what you need? We have 500+ products in our catalogue.</p>
//         <a href="#contact" className="btn__primary">Download Full Catalogue</a>
//       </div>
//     </section>
//   );
// };

// export default Products;

// mid chnages

// import React, { useState } from "react";
// import "./Products.css";

// const categories = ["All", "Engine Oil", "Gear Oil", "Lubricating Grease Calcium", "Synthetic Oil ", "Bike Engine Oil ", "Lubricating Oil ", "Coolant Oil"];

// const categoryIcons = {
//   "All": "🛢️",
//   "Engine Oil": "🔧",
//   "Gear Oil": "⚙️",
//   "Lubricating Grease Calcium": "💧",
//   "Synthetic Oil ": "🏭",
//   "Bike Engine Oil ": "⭐",
//   "Lubricating Oil ": "🔩",
//   "Coolant Oil": "❄️",
// };

// const categoryCounts = {
//   "All": 16,
//   "Engine Oil": 3,
//   "Gear Oil": 2,
//   "Lubricating Grease Calcium": 2,
//   "Synthetic Oil ": 2,
//   "Bike Engine Oil ": 3,
//   "Lubricating Oil ": 2,
//   "Coolant Oil": 2,
// };

// const categoryColors = {
//   "Engine Oil": "#1a3a5c",
//   "Gear Oil": "#2d5a27",
//   "Lubricating Grease Calcium": "#1a4a6b",
//   "Synthetic Oil ": "#5a3e1b",
//   "Bike Engine Oil ": "#4a1a5c",
//   "Lubricating Oil ": "#3b3b1a",
//   "Coolant Oil": "#1a4a4a",
// };

// const products = [
//   { id: 1,  name: "LubePower Ultra 4T",       category: "Engine Oil",       grade: "20W-50",  pack: "1L / 5L / 20L",    desc: "High-performance 4-stroke engine oil for bikes & cars",           tag: "Best Seller" },
//   { id: 2,  name: "LubePower Synth Pro",       category: "Engine Oil",       grade: "5W-30",   pack: "1L / 4L",           desc: "Full synthetic formula for modern fuel-efficient engines",         tag: "Premium" },
//   { id: 3,  name: "LubePower Diesel HD",       category: "Engine Oil",       grade: "15W-40",  pack: "5L / 20L / 210L",   desc: "Heavy-duty diesel engine oil for commercial vehicles",             tag: "" },
//   { id: 4,  name: "LubePower Gear EP",         category: "Synthetic Oil ",   grade: "EP 90",   pack: "1L / 5L / 20L",     desc: "Extreme pressure Synthetic Oil for manual transmissions",          tag: "" },
//   { id: 5,  name: "LubePower Axle 140",        category: "Synthetic Oil ",   grade: "EP 140",  pack: "5L / 20L",          desc: "Heavy-duty axle and differential protection oil",                  tag: "Industrial" },
//   { id: 6,  name: "LubePower Hydro 46",        category: "Lubricating Grease Calcium",    grade: "ISO 46",  pack: "20L / 210L",        desc: "Premium Lubricating Grease Calcium for industrial machinery",                   tag: "Industrial" },
//   { id: 7,  name: "LubePower Hydro 68",        category: "Lubricating Grease Calcium",    grade: "ISO 68",  pack: "20L / 210L",        desc: "High-viscosity Lubricating Grease Calcium for heavy equipment",                 tag: "" },
//   { id: 8,  name: "LubePower MP Grease",       category: "Gear Oil",         grade: "NLGI 2",  pack: "500g / 1kg / 5kg",  desc: "Multi-purpose lithium grease for bearings & chassis",              tag: "Best Seller" },
//   { id: 9,  name: "LubePower HT Grease",       category: "Gear Oil",         grade: "NLGI 3",  pack: "1kg / 5kg",         desc: "High-temperature grease for industrial applications",              tag: "" },
//   { id: 10, name: "LubePower Cutting Oil",     category: "Bike Engine Oil ", grade: "—",       pack: "1L / 5L / 20L",     desc: "Premium cutting & tapping fluid for metal machining",              tag: "" },
//   { id: 11, name: "LubePower Rust Guard",      category: "Bike Engine Oil ", grade: "—",       pack: "500ml / 5L",        desc: "Anti-rust & corrosion protection spray for metals",                tag: "New" },
//   { id: 12, name: "LubePower Radiator Cool",   category: "Bike Engine Oil ", grade: "—",       pack: "1L / 5L",           desc: "Long-life coolant for engines, prevents overheating",              tag: "New" },
//   { id: 13, name: "LubePower Lubricating Oil ",   category: "Lubricating Oil ",    grade: "SAE 20",  pack: "1L / 5L / 20L",     desc: "Multi-purpose lubricating oil for smooth engine performance",      tag: "New" },
//   { id: 14, name: "LubePower Industrial Lube", category: "Lubricating Oil ",    grade: "SAE 40",  pack: "5L / 20L",          desc: "Heavy-duty industrial lubricanting for machinery & equipment",        tag: "Industrial" },
//   { id: 15, name: "LubePower Coolant Oil",     category: "Coolant Oil",      grade: "—",       pack: "1L / 5L",           desc: "Advanced coolant oil to prevent engine overheating",               tag: "New" },
//   { id: 16, name: "LubePower Arctic Cool",     category: "Coolant Oil",      grade: "—",       pack: "1L / 5L / 20L",     desc: "Long-life radiator coolant for extreme temperature protection",     tag: "Premium" },
// ];

// const tagColors = {
//   "Best Seller": { bg: "#e8f4fd", color: "#1565c0", border: "#1565c0" },
//   "Premium":     { bg: "#fff8e1", color: "#f57f17", border: "#f57f17" },
//   "Industrial":  { bg: "#e8f5e9", color: "#2e7d32", border: "#2e7d32" },
//   "New":         { bg: "#fce4ec", color: "#c62828", border: "#c62828" },
// };

// const Products = () => {
//   const [active, setActive] = useState("All");
//   const [search, setSearch] = useState("");

//   const filtered = products.filter(p => {
//     const matchCat = active === "All" || p.category === active;
//     const matchSearch =
//       p.name.toLowerCase().includes(search.toLowerCase()) ||
//       p.desc.toLowerCase().includes(search.toLowerCase());
//     return matchCat && matchSearch;
//   });

//   return (
//     <section className="products" id="products">
//       {/* Top Header */}
//       <div className="products__topbar">
//         <div className="products__topbar-left">
//           <h2 className="products__title">Our Products</h2>
//           <p className="products__sub">500+ products engineered for performance</p>
//         </div>
//         <div className="products__search-wrap">
//           <span className="search-icon">🔍</span>
//           <input
//             className="products__search"
//             type="text"
//             placeholder="Search products..."
//             value={search}
//             onChange={e => setSearch(e.target.value)}
//           />
//         </div>
//       </div>

//       <div className="products__layout">
//         {/* LEFT SIDEBAR */}
//         <aside className="products__sidebar">
//           <div className="sidebar__title">Categories</div>
//           <ul className="sidebar__list">
//             {categories.map(cat => (
//               <li key={cat}>
//                 <button
//                   className={`sidebar__btn ${active === cat ? "sidebar__btn--active" : ""}`}
//                   onClick={() => setActive(cat)}
//                 >
//                   <span className="sidebar__icon">{categoryIcons[cat]}</span>
//                   <span className="sidebar__label">{cat}</span>
//                   <span className="sidebar__count">({categoryCounts[cat]})</span>
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Catalogue CTA */}
//           <div className="sidebar__cta">
//             <p>Can't find what you need?</p>
//             <strong>We have 500+ products</strong>
//             <a href="#contact" className="sidebar__cta-btn">📄 Download Catalogue</a>
//           </div>
//         </aside>

//         {/* RIGHT PRODUCT GRID */}
//         <div className="products__main">
//           <div className="products__result-info">
//             Showing <strong>{filtered.length}</strong> products
//             {active !== "All" && <> in <strong>{active}</strong></>}
//           </div>

//           {filtered.length === 0 ? (
//             <div className="products__empty">
//               <p>No products found. Try a different search or category.</p>
//             </div>
//           ) : (
//             <div className="products__grid">
//               {filtered.map(product => {
//                 const tagStyle = tagColors[product.tag] || {};
//                 const bgColor = categoryColors[product.category] || "#1a3a5c";
//                 return (
//                   <div className="product__card" key={product.id}>
//                     <div className="product__image" style={{ background: bgColor }}>
//                       {product.tag && (
//                         <span
//                           className="product__tag"
//                           style={{
//                             background: tagStyle.bg,
//                             color: tagStyle.color,
//                             border: `1px solid ${tagStyle.border}`,
//                           }}
//                         >
//                           {product.tag}
//                         </span>
//                       )}
//                       <div className="product__bottle">
//                         <svg viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
//                           <rect x="28" y="8" width="24" height="10" rx="3" fill="rgba(255,255,255,0.3)"/>
//                           <rect x="20" y="18" width="40" height="90" rx="6" fill="rgba(255,255,255,0.15)"/>
//                           <rect x="20" y="18" width="40" height="90" rx="6" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5"/>
//                           <rect x="20" y="28" width="40" height="20" fill="rgba(255,255,255,0.2)"/>
//                           <text x="40" y="65" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">LP</text>
//                           <text x="40" y="75" textAnchor="middle" fill="rgba(255,255,255,0.8)" fontSize="5" fontFamily="sans-serif">SHAKTI</text>
//                           <rect x="26" y="85" width="28" height="1.5" rx="1" fill="rgba(255,255,255,0.3)"/>
//                           <rect x="26" y="90" width="20" height="1.5" rx="1" fill="rgba(255,255,255,0.2)"/>
//                         </svg>
//                       </div>
//                     </div>

//                     <div className="product__info">
//                       <span className="product__category-label">{product.category}</span>
//                       <h3 className="product__name">{product.name}</h3>
//                       <p className="product__desc">{product.desc}</p>
//                       <div className="product__meta">
//                         <span className="meta__item"><strong>Grade:</strong> {product.grade}</span>
//                         <span className="meta__item"><strong>Pack:</strong> {product.pack}</span>
//                       </div>
//                       <a href="#contact" className="product__cta">Get Quote →</a>
//                     </div>
//                   </div>
//                 );
//               })}
//             </div>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;

// new changes

import React, { useState } from "react";
import "./Products.css";

// ===== IMAGE IMPORTS =====
import imgCushion from "../assets/lube_shakti_cushion.png";
import imgHD from "../assets/lube_shakti_hd.png";
import imgPrince5ltr from "../assets/lube_shakti_prince_5ltr.png";
import imgPrince from "../assets/lube_shakti_prince.png";

const categories = ["All", "Engine Oil", "Gear Oil", "Hydraulic Oil", "Greases", "Specialty"];

const categoryIcons = {
  "All": "🛢️",
  "Engine Oil": "🔧",
  "Gear Oil": "⚙️",
  "Hydraulic Oil": "💧",
  "Greases": "🏭",
  "Specialty": "⭐",
};

const categoryCounts = {
  "All": 12,
  "Engine Oil": 3,
  "Gear Oil": 2,
  "Hydraulic Oil": 2,
  "Greases": 2,
  "Specialty": 3,
};

const products = [
  { id: 1,  name: "LubePower Ultra 4T",      category: "Engine Oil",    grade: "20W-50",  pack: "1L / 5L / 20L",   desc: "High-performance 4-stroke engine oil for bikes & cars",        tag: "Best Seller", image: imgPrince      },
  { id: 2,  name: "LubePower Synth Pro",      category: "Engine Oil",    grade: "5W-30",   pack: "1L / 4L",          desc: "Full synthetic formula for modern fuel-efficient engines",      tag: "Premium",     image: imgPrince5ltr  },
  { id: 3,  name: "LubePower Diesel HD",      category: "Engine Oil",    grade: "15W-40",  pack: "5L / 20L / 210L",  desc: "Heavy-duty diesel engine oil for commercial vehicles",          tag: "",            image: imgHD          },
  { id: 4,  name: "LubePower Gear EP",        category: "Gear Oil",      grade: "EP 90",   pack: "1L / 5L / 20L",    desc: "Extreme pressure gear oil for manual transmissions",            tag: "",            image: imgPrince      },
  { id: 5,  name: "LubePower Axle 140",       category: "Gear Oil",      grade: "EP 140",  pack: "5L / 20L",         desc: "Heavy-duty axle and differential protection oil",               tag: "Industrial",  image: imgHD          },
  { id: 6,  name: "LubePower Hydro 46",       category: "Hydraulic Oil", grade: "ISO 46",  pack: "20L / 210L",       desc: "Premium hydraulic oil for industrial machinery",                tag: "Industrial",  image: imgCushion     },
  { id: 7,  name: "LubePower Hydro 68",       category: "Hydraulic Oil", grade: "ISO 68",  pack: "20L / 210L",       desc: "High-viscosity hydraulic oil for heavy equipment",              tag: "",            image: imgCushion     },
  { id: 8,  name: "LubePower MP Grease",      category: "Greases",       grade: "NLGI 2",  pack: "500g / 1kg / 5kg", desc: "Multi-purpose lithium grease for bearings & chassis",           tag: "Best Seller", image: imgPrince5ltr  },
  { id: 9,  name: "LubePower HT Grease",      category: "Greases",       grade: "NLGI 3",  pack: "1kg / 5kg",        desc: "High-temperature grease for industrial applications",           tag: "",            image: imgPrince      },
  { id: 10, name: "LubePower Cutting Oil",    category: "Specialty",     grade: "—",       pack: "1L / 5L / 20L",   desc: "Premium cutting & tapping fluid for metal machining",           tag: "",            image: imgHD          },
  { id: 11, name: "LubePower Rust Guard",     category: "Specialty",     grade: "—",       pack: "500ml / 5L",       desc: "Anti-rust & corrosion protection spray for metals",             tag: "New",         image: imgPrince5ltr  },
  { id: 12, name: "LubePower Radiator Cool",  category: "Specialty",     grade: "—",       pack: "1L / 5L",          desc: "Long-life coolant for engines, prevents overheating",          tag: "New",         image: imgCushion     },
];

const tagColors = {
  "Best Seller": { bg: "#e8f4fd", color: "#1565c0", border: "#1565c0" },
  "Premium":     { bg: "#fff8e1", color: "#f57f17", border: "#f57f17" },
  "Industrial":  { bg: "#e8f5e9", color: "#2e7d32", border: "#2e7d32" },
  "New":         { bg: "#fce4ec", color: "#c62828", border: "#c62828" },
};

const Products = () => {
  const [active, setActive] = useState("All");
  const [search, setSearch] = useState("");

  const filtered = products.filter(p => {
    const matchCat = active === "All" || p.category === active;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <section className="products" id="products">
      {/* Top Header */}
      <div className="products__topbar">
        <div className="products__topbar-left">
          <h2 className="products__title">Our Products</h2>
          <p className="products__sub">500+ products engineered for performance</p>
        </div>
        <div className="products__search-wrap">
          <span className="search-icon">🔍</span>
          <input
            className="products__search"
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="products__layout">
        {/* LEFT SIDEBAR */}
        <aside className="products__sidebar">
          <div className="sidebar__title">Categories</div>
          <ul className="sidebar__list">
            {categories.map(cat => (
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

          {/* Catalogue CTA */}
          <div className="sidebar__cta">
            <p>Can't find what you need?</p>
            <strong>We have 500+ products</strong>
            <a href="#contact" className="sidebar__cta-btn">📄 Download Catalogue</a>
          </div>
        </aside>

        {/* RIGHT PRODUCT GRID */}
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
              {filtered.map(product => {
                const tagStyle = tagColors[product.tag] || {};
                return (
                  <div className="product__card" key={product.id}>

                    {/* Product Image Area */}
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

                    {/* Product Info */}
                    <div className="product__info">
                      <span className="product__category-label">{product.category}</span>
                      <h3 className="product__name">{product.name}</h3>
                      <p className="product__desc">{product.desc}</p>
                      <div className="product__meta">
                        <span className="meta__item"><strong>Grade:</strong> {product.grade}</span>
                        <span className="meta__item"><strong>Pack:</strong> {product.pack}</span>
                      </div>
                      <a href="#contact" className="product__cta">Get Quote →</a>
                    </div>

                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;