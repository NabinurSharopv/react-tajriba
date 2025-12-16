import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function Detail() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://69171cada7a34288a27f9293.mockapi.io/apis/bmw")
      .then((res) => {
        const products = res.data[0]?.products || [];

        const foundProduct = products.find(
          (item) => String(item.id) === String(id)
        );

        if (foundProduct) {
          let imageUrl = foundProduct.image;
          if (
            imageUrl?.includes("github.com") &&
            imageUrl.includes("/blob/")
          ) {
            imageUrl = imageUrl.replace("/blob/", "/raw/");
          }

          setProduct({ ...foundProduct, image: imageUrl });
        } else {
          setProduct(null);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log("DETAIL API ERROR:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <h2 className="text-center mt-10">Yuklanmoqda...</h2>;
  }

  if (!product) {
    return <h2 className="text-center mt-10">Mahsulot topilmadi</h2>;
  }

  return (
    <div className="max-w-[900px] m-auto mt-10 p-6 flex gap-8">
      {/* RASM */}
      <img
        src={product.image}
        alt={product.title}
        className="w-[400px] h-[400px] object-cover rounded-lg"
        onError={(e) => {
          e.target.src = "https://via.placeholder.com/400";
        }}
      />

      {/* MA'LUMOT */}
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>

        <p className="text-green-700 text-2xl font-semibold mt-3">
          ${product.price}
        </p>

        {product.oldPrice && (
          <p className="line-through text-gray-500">
            ${product.oldPrice}
          </p>
        )}

        <p className="mt-3 text-yellow-500">
          ⭐ {product.rating}
        </p>

        <p className="mt-3 text-gray-700">
          Kategoriya: {product.category}
        </p>

        <p className="mt-3 text-gray-700">
          Size: {product.size}
        </p>

        <p className="mt-4 text-gray-600">
          {product.description}
        </p>
      </div>
    </div>
  );
}

export default Detail;
