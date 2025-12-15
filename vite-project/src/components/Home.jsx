import img1 from "../img/img1.png";
import img2 from "../img/img2.png";
import img3 from "../img/img3.png";
import img4 from "../img/img4.png";
import img6 from "../img/img6.png";
import img7 from "../img/img7.png";
import img8 from "../img/img8.png";
import img9 from "../img/img9.png";
import img10 from "../img/img10.png";
import img11 from "../img/img11.png";
import img12 from "../img/img12.png";
import img13 from "../img/img13.png";
import img14 from "../img/img14.png";
import img15 from "../img/img15.png";
import img16 from "../img/img16.png";
import img17 from "../img/img17.png";
import img18 from "../img/img18.png";
import img19 from "../img/img19.png";
import img20 from "../img/img20.png";
import img21 from "../img/img21.png";

import axios from "axios";
import { useEffect, useState } from "react";

const Home = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://69171cada7a34288a27f9293.mockapi.io/apis/bmw")
      .then((res) => {
        const products = res.data[0]?.products || [];

        // --- Rasmlar to'g'irlash (blob → raw) ---
        const fixedProducts = products.map((p) => {
          let imageUrl = p.image;

          if (imageUrl?.includes("github.com") && imageUrl.includes("/blob/")) {
            imageUrl = imageUrl.replace("/blob/", "/raw/");
          }

          return {
            ...p,
            image: imageUrl,
          };
        });

        setAllProducts(fixedProducts);
        setLoading(false);
      })
      .catch((err) => {
        console.log("API ERROR:", err);
        setLoading(false);
      });
  }, []);

  const handleImageError = (e) => {
    e.target.src = "https://via.placeholder.com/200x200?text=Plant";
  };

  if (loading) {
    return (
      <div className="p-6 text-center text-lg">Mahsulotlar yuklanmoqda...</div>
    );
  }

  return (
    <>
      <div className="max-w-[1250px] h-px bg-[#46A35880] m-auto mt-4"></div>

      <div className="max-w-[1250px] flex items-center mt-9 h-[450px] bg-[#F5F5F580] m-auto justify-around flex-wrap">
        <div>
          <p className="font-medium text-sm uppercase">Welcome to GreenShop</p>
          <h1 className="max-w-[560px] font-black text-[70px] leading-[70px] uppercase">
            Let’s Make a <span className="text-yellow-700">Better Planet</span>
          </h1>
          <p className="max-w-[557px] text-sm text-[#727272]">
            We are an online plant shop offering a wide range of trendy
            plants...
          </p>
          <button className="mt-10 w-[140px] h-10 bg-[#46A358] text-white rounded-md">
            SHOP NOW
          </button>
        </div>

        <div className="flex items-center justify-center">
          <img className="mt-[69px] ml-9" src={img1} alt="" />
          <img className="ml-[-190px]" src={img2} alt="" />
        </div>
      </div>
      <div className="flex items-start justify-center mt-9 gap-6">
        <div>
          <div className="w-[310px] bg-[#FBFBFB] p-4">
            <h1 className="font-bold text-lg">Categories</h1>

            <div className="flex justify-between mt-3">
              <p className="leading-10">
                HousePlants
                <br />
                PotterPlants
                <br />
                Seeds
                <br />
                Small Plants
                <br />
                BigPlants
                <br />
                Succulents
                <br />
                Terrariums
                <br />
                Gardening Tools
                <br />
              </p>

              <p className="leading-10 text-right">
                (33)
                <br />
                (12)
                <br />
                (65)
                <br />
                (39)
                <br />
                (23)
                <br />
                (17)
                <br />
                (19)
                <br />
                (13)
                <br />
              </p>
            </div>

            <h1 className="font-bold text-lg mt-4">Price Range</h1>

            <div className="flex items-center mt-3 ml-4">
              <div className="w-[15px] h-[15px] bg-[#46A358] rounded-full"></div>
              <div className="w-[160px] h-[3px] bg-[#46A358]"></div>
              <div className="w-[15px] h-[15px] bg-[#46A358] rounded-full"></div>
            </div>

            <p className="ml-4 mt-3 text-[15px]">Price: $39 - $1230</p>

            <button className="w-[90px] h-[35px] bg-[#46A358] text-white rounded-md ml-4 mt-3">
              Filter
            </button>
          </div>

          <div className="w-[310px] bg-blue-100 mt-5 pb-4">
            <img className="m-auto" src={img3} alt="" />
            <h1 className="font-bold text-[23px] text-center mt-4">
              UP TO 75% OFF
            </h1>
            <img className="m-auto" src={img4} alt="" />
          </div>
        </div>

        {/* PRODUCTS */}
        <div className="max-w-[890px]">
          <h1 className="text-3xl font-bold mb-5 text-center">
            🌿 O'simliklar
          </h1>

          <div className="flex flex-wrap gap-6 justify-center">
            {allProducts.map((item) => {
              // gambarlarni to‘g‘irlash (blob → raw)
              let imageUrl = item.image;
              if (
                imageUrl?.includes("github.com") &&
                imageUrl.includes("/blob/")
              ) {
                imageUrl = imageUrl.replace("/blob/", "/raw/");
              }

              return (
                <div
                  key={item.id}
                  className="w-[230px] border rounded-xl shadow p-4 flex flex-col hover:shadow-lg transition"
                >
                  {/* Asosiy rasm */}
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="w-full h-40 object-cover rounded"
                    onError={(e) =>
                      (e.target.src = "https://via.placeholder.com/200")
                    }
                  />

                  {/* Title */}
                  <h2 className="text-lg font-bold mt-2">{item.title}</h2>

                  {/* Narxlar */}
                  <p className="text-green-700 font-semibold text-[18px]">
                    ${item.price}
                  </p>

                  {item.oldPrice && (
                    <p className="text-gray-500 line-through text-sm">
                      ${item.oldPrice}
                    </p>
                  )}

                  {/* Reyting */}
                  <p className="text-yellow-500 mt-1">⭐ {item.rating}</p>

                  {/* Category */}
                  <p className="text-sm text-gray-600">
                    Kategoriya: {item.category}
                  </p>

                  {/* Size */}
                  <p className="text-sm text-gray-600">Size: {item.size}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="flex mr-20 mt-19 items-center justify-center gap-11">
        <img className=" h-[282px]" src={img6} alt="" />
        <img className=" h-[282px]" src={img7} alt="" />
      </div>
      <h1 className="font-bold text-3xl leading-4 tracking-[0%] text-center mt-31">
        Our Blog Posts
      </h1>
      <p className="font-normal text-sm leading-6 tracking-[0%] text-center text-[#727272] mt-2">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.{" "}
      </p>
      <div className="flex items-center justify-center gap-11 mt-7">
        <div>
          <img src={img8} alt="" />
          <div className="w-[268px] h-[167px] bg-[#FBFBFB] p-2">
            <p className="font-medium text-sm leading-4 tracking-[0%] text-[#46A358]">
              September 12 I Read in 6 minutes
            </p>
            <h3 className="w-[202px] h-[52px] font-bold text-xl leading-[26px] tracking-[0%]">
              Top 10 Succulents for Your Home
            </h3>
            <p className="w-[242px] h-11 font-normal text-sm leading-[22px] tracking-[0%] text-[#727272]">
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <div className="flex items-center gap-2">
              <p className="w-[70px] h-4 font-medium text-sm leading-4 tracking-[0%]">
                Read More
              </p>
              <img src={img9} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src={img10} alt="" />
          <div className="w-[268px] h-[167px] bg-[#FBFBFB] p-2">
            <p className="font-medium text-sm leading-4 tracking-[0%] text-[#46A358]">
              September 12 I Read in 6 minutes
            </p>
            <h3 className="w-[202px] h-[52px] font-bold text-xl leading-[26px] tracking-[0%]">
              Top 10 Succulents for Your Home
            </h3>
            <p className="w-[242px] h-11 font-normal text-sm leading-[22px] tracking-[0%] text-[#727272]">
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <div className="flex items-center gap-2">
              <p className="w-[70px] h-4 font-medium text-sm leading-4 tracking-[0%]">
                Read More
              </p>
              <img src={img9} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src={img11} alt="" />
          <div className="w-[268px] h-[167px] bg-[#FBFBFB] p-2">
            <p className="font-medium text-sm leading-4 tracking-[0%] text-[#46A358]">
              September 12 I Read in 6 minutes
            </p>
            <h3 className="w-[202px] h-[52px] font-bold text-xl leading-[26px] tracking-[0%]">
              Top 10 Succulents for Your Home
            </h3>
            <p className="w-[242px] h-11 font-normal text-sm leading-[22px] tracking-[0%] text-[#727272]">
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <div className="flex items-center gap-2">
              <p className="w-[70px] h-4 font-medium text-sm leading-4 tracking-[0%]">
                Read More
              </p>
              <img src={img9} alt="" />
            </div>
          </div>
        </div>
        <div>
          <img src={img12} alt="" />
          <div className="w-[268px] h-[167px] bg-[#FBFBFB] p-2">
            <p className="font-medium text-sm leading-4 tracking-[0%] text-[#46A358]">
              September 12 I Read in 6 minutes
            </p>
            <h3 className="w-[202px] h-[52px] font-bold text-xl leading-[26px] tracking-[0%]">
              Top 10 Succulents for Your Home
            </h3>
            <p className="w-[242px] h-11 font-normal text-sm leading-[22px] tracking-[0%] text-[#727272]">
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <div className="flex items-center gap-2">
              <p className="w-[70px] h-4 font-medium text-sm leading-4 tracking-[0%]">
                Read More
              </p>
              <img src={img9} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1200px] h-[250px] bg-[#FBFBFB] m-auto mt-21 flex items-center justify-center gap-5">
        <div>
          <img src={img13} alt="" />
          <h2 className="font-bold text-[17px] leading-4 tracking-[0%] text-[#3D3D3D] mt-1">
            Garden Care
          </h2>
          <p className="w-[204px] h-[66px] font-normal text-sm leading-[22px] tracking-[0%] mt-1 text-[#727272]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="w-1 h-44 bg-[#46A3581A]"></div>
        <div>
          <img src={img14} alt="" />
          <h2 className="font-bold text-[17px] leading-4 tracking-[0%] text-[#3D3D3D] mt-1">
            Garden Care
          </h2>
          <p className="w-[204px] h-[66px] font-normal text-sm leading-[22px] tracking-[0%] mt-1 text-[#727272]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div className="w-1 h-44 bg-[#46A3581A]"></div>
        <div>
          <img src={img15} alt="" />
          <h2 className="font-bold text-[17px] leading-4 tracking-[0%] text-[#3D3D3D] mt-1">
            Garden Care
          </h2>
          <p className="w-[204px] h-[66px] font-normal text-sm leading-[22px] tracking-[0%] mt-1 text-[#727272]">
            We are an online plant shop offering a wide range of cheap and
            trendy plants.
          </p>
        </div>
        <div>
          <h1 className="text-lg leading-4 tracking-[0%] font-bold">
            Would you like to join newsletters?
          </h1>
          <div>
            <input
              className="w-[354px] h-10 bg-white p-3 shadow-[0px_0px_20px_0px_#0000000F] mt-3"
              type="text"
              placeholder="enter your email address..."
            />
            <button className="w-[85px] h-10 rounded-tr-md rounded-br-md bg-[#46A358] text-white">
              Join
            </button>
            <p className=" w-[354px] font-normal text-[13px] leading-[22px] text-[#727272] mt-1">
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!{" "}
            </p>
          </div>
        </div>
      </div>
      <div className=" w-[1200px] h-[88px] bg-[#46A3581A] m-auto flex items-center justify-around">
        <img src={img16} alt="" />
        <div className="flex items-center gap-5">
          <img src={img17} alt="" />
          <p className=" w-44 h-11 font-normal text-sm leading-[22px] tracking-[0%] text-[#3D3D3D]">
            70 West Buckingham Ave. Farmingdale, NY 11735
          </p>
        </div>
        <div className="flex items-center gap-1">
          <img src={img18} alt="" />
          <p className=" font-normal text-sm leading-[22px] tracking-[0%] text-[#3D3D3D]">
            contact@greenshop.com
          </p>
        </div>
        <div className="flex items-center gap-1">
          <img src={img19} alt="" />
          <p className=" font-normal text-sm leading-[22px] tracking-[0%] text-[#3D3D3D]">
            contact@greenshop.com
          </p>
        </div>
      </div>
      <div className="flex items-center justify-evenly mt-5 flex-wrap">
        <div>
          <h1 className="font-bold text-lg leading-4 tracking-[0%] text-[#3D3D3D]">
            My Account
          </h1>
          <p className=" w-[81px] h-[150px] font-normal text-sm leading-[30px] tracking-[0%]">
            My Account Our stores Contact us Career Specials
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg leading-4 tracking-[0%] text-[#3D3D3D]">
            Help & Guide
          </h1>
          <p className=" w-[81px] h-[150px] font-normal text-sm leading-[30px] tracking-[0%]">
            Help Center How to Buy Shipping & Delivery Product Policy How to
            Return
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg leading-4 tracking-[0%] text-[#3D3D3D]">
            Categories
          </h1>
          <p className=" w-[81px] h-[150px] font-normal text-sm leading-[30px] tracking-[0%]">
            House Plants Potter Plants Seeds Small Plants Accessories
          </p>
        </div>
        <div>
          <h1 className="font-bold text-lg leading-4 tracking-[0%] text-[#3D3D3D]">
            Social Media
          </h1>
          <img className="w-50" src={img20} alt="" />
          <h1 className="font-bold text-lg leading-4 tracking-[0%]">
            We accept
          </h1>
          <img src={img21} alt="" />
        </div>
      </div>
      <div className="max-w-[1200px] h-[2px] bg-[#46A35833] m-auto mt-16"></div>
      <p className="w-[257px] h-[30px] font-normal text-sm leading-[30px] tracking-[0%] text-[#3D3D3D] m-auto mt-3">
        © 2021 GreenShop. All Rights Reserved.
      </p>
    </>
  );
};

export default Home;
