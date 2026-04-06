// import React from "react";
// import "./WhyUs.css";

// const reasons = [
//   {
//     icon: "🏆",
//     title: "Premium Quality",
//     desc: "Every product undergoes rigorous quality testing to meet international standards. ISO 9001:2015 certified manufacturing.",
//     color: "#b01e16",
//   },
//   {
//     icon: "🔬",
//     title: "Advanced Formula",
//     desc: "Our R&D team uses cutting-edge additive technology to develop lubricants that outperform competitors.",
//     color: "#154485",
//   },
//   {
//     icon: "🚚",
//     title: "Pan-India Delivery",
//     desc: "Reliable distribution network across 20+ states ensures timely delivery to your doorstep — bulk or retail.",
//     color: "#b01e16",
//   },
//   {
//     icon: "🛡️",
//     title: "Maximum Protection",
//     desc: "Our lubricants reduce engine wear by up to 40%, extending machine life and lowering maintenance costs.",
//     color: "#154485",
//   },
//   {
//     icon: "💰",
//     title: "Competitive Pricing",
//     desc: "Direct from manufacturer pricing with no middlemen — premium quality at prices that won't break your budget.",
//     color: "#b01e16",
//   },
//   {
//     icon: "🤝",
//     title: "Dedicated Support",
//     desc: "Expert technical support team available to help you choose the right lubricant for your specific application.",
//     color: "#154485",
//   },
// ];

// const stats = [
//   { value: "500+", label: "Products" },
//   { value: "20+", label: "Years" },
//   { value: "10K+", label: "Clients" },
//   { value: "20+", label: "States" },
// ];

// const WhyUs = () => {
//   return (
//     <section className="whyus" id="why-us">
//       <div className="whyus__top">
//         <div className="whyus__header">
//           <span className="section__eyebrow--light">Why LubePower</span>
//           <h2 className="whyus__title">The LubePower <span>Advantage</span></h2>
//           <p className="whyus__sub">We don't just sell lubricants — we deliver performance, protection, and peace of mind.</p>
//         </div>

//         <div className="whyus__stats">
//           {stats.map((s, i) => (
//             <div className="whyus__stat" key={i}>
//               <span className="whyus__stat-val">{s.value}</span>
//               <span className="whyus__stat-label">{s.label}</span>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="whyus__grid">
//         {reasons.map((r, i) => (
//           <div className="whyus__card" key={i} style={{ "--accent": r.color }}>
//             <div className="whyus__icon">{r.icon}</div>
//             <h3 className="whyus__card-title">{r.title}</h3>
//             <p className="whyus__card-desc">{r.desc}</p>
//             <div className="whyus__line"></div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyUs;
