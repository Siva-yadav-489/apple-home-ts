import Headings from "./Headings";
import WideCard from "./WideCard";
import ProductCard from "./ProductCard";

const Personalisation = () => {
  const productCards = [
    {
      text: [
        "Free Engraving",
        "AirPods 4 with Active Noise Cancellation",
        "MRP ₹17900.00 (Incl. of all taxes)",
      ],
      colorOptions: "hidden",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1725502639798",
    },
    {
      text: [
        "Free Engraving",
        "AirPods Pro 2",
        "MRP ₹24900.00 (Incl. of all taxes)",
      ],
      colorOptions: "hidden",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724041669458",
    },
    {
      text: [
        "Free Engraving",
        "Apple Pencil Pro",
        "MRP ₹11900.00 (Incl. of all taxes)",
      ],
      colorOptions: "hidden",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2D3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1713841707336",
    },
    {
      text: [
        "Free Engraving",
        "AirPods 4 with Active Noise Cancellation",
        "MRP ₹17900.00 (Incl. of all taxes)",
      ],
      colorOptions: "hidden",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-4-anc-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1725502639798",
    },
    {
      text: [
        "Free Engraving",
        "AirPods Pro 2",
        "MRP ₹24900.00 (Incl. of all taxes)",
      ],
      colorOptions: "hidden",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/airpods-pro-2-hero-select-202409?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1724041669458",
    },
    {
      text: [
        "Free Engraving",
        "Apple Pencil Pro",
        "MRP ₹11900.00 (Incl. of all taxes)",
      ],
      colorOptions: "hidden",
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MX2D3?wid=400&hei=400&fmt=jpeg&qlt=90&.v=1713841707336",
    },
  ];
  return (
    <div className="max-lg:mx-5 ms-36 pb-10">
      <Headings
        text={["Personalisation.", " Add something that really says Mom."]}
        textColor={"text-[#ff3c26]"}
      />
      <div className="flex space-x-5  overflow-x-scroll no-scrollbar mt-5 py-1 pb-10">
        <WideCard
          text={["FREE ENGRAVING", " Truly just for them."]}
          textZeroStyle={"-mt-7"}
          textOneStyle={"text-black"}
          widthAndHeight={"min-w-[24rem] max-w-[25rem] h-[31rem]"}
          link={
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-mothers-day-personalization-202504?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1742923152001"
          }
        />

        {productCards.map((card, index) => {
          return (
            <ProductCard
              key={index}
              link={card.link}
              text={card.text}
              colorOptions={card.colorOptions}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Personalisation;
