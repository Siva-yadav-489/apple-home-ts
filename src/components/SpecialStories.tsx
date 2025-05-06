import Headings from "./Headings";
import WideCard from "./WideCard";

const SpecialStories = () => {
  return (
    <div className="max-lg:mx-5 ms-36 pb-10">
      <Headings
        text={[
          "Special stores.",
          " Exclusive savings for students and educators.",
        ]}
        textColor={"text-[#1d1d1f]"}
      />
      <div className=" mt-5 py-1 pb-10 max-md:overflow-x-scroll no-scrollbar">
        <WideCard
          text={["EDUCATION", "Buy a new Mac or iPad with education savings."]}
          textZeroStyle={"-mt-7"}
          textOneStyle={"text-black"}
          widthAndHeight={"min-w-[24rem] max-w-[25rem] h-[31rem]"}
          link={
            "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-40-bts-edu-macbook-air-ipad-air-202503?wid=800&hei=1000&fmt=p-jpg&qlt=95&.v=1739502784046"
          }
        />
      </div>
    </div>
  );
};

export default SpecialStories;
