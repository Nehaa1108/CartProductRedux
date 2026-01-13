import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import "./App.css";

function App() {
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("");
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

//   const generateDetails = async () => {
//     setLoading(true);
//     setError("");

//     try {
//       const response = await fetch(
//         "https://api.openai.com/v1/chat/completions",
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: `Bearer YOUR_OPENAI_API_KEY`,
//           },
//           body: JSON.stringify({
//             model: "gpt-3.5-turbo",
//             messages: [
//               {
//                 role: "user",
//                 content: `
// Generate product details in JSON format with:
// - title
// - description (short)
// - keywords (array of 5 strings)

// Product Name: ${productName}
// Category: ${category}

// Return ONLY valid JSON.
//                 `,
//               },
//             ],
//           }),
//         }
//       );

//       const data = await response.json();
//       const aiText = data.choices[0].message.content;

//       const parsed = JSON.parse(aiText);
//       setProductData(parsed);
//     } catch (err) {
//       setError("Failed to generate AI content");
//     }

//     setLoading(false);
//   };


const generateDetails = () => {
  const keywordsPool = ["Premium", "Trending", "Top Choice", category, productName];
  const shuffled = keywordsPool.sort(() => 0.5 - Math.random());
  
  const aiResponse = {
    title: `Amazing ${productName} for ${category}`,
    description: `The ${productName} is a high-quality product in the ${category} category, perfect for modern customers.`,
    keywords: shuffled.slice(0, 5),
  };
  setProductData(aiResponse);
};

  return (
    <div className="container">
      <h1>AI Product Card Generator</h1>

      <input
        placeholder="Product Name"
        value={productName}
        onChange={(e) => setProductName(e.target.value)}
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />

      <button onClick={generateDetails}>
        {loading ? "Generating..." : "Generate Details"}
      </button>

      {error && <p className="error">{error}</p>}

      {productData && <ProductCard data={productData} />}
    </div>
  );
}

export default App;
