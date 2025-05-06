import Headings from "./Headings";
import WideCard from "./WideCard";

const Help = () => {
  const cards = [
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-earth-day-specialist-help-202504?wid=4000&hei=4167&fmt=p-jpg&qlt=95&.v=1742855758114",
      text: [
        "APPLE SPECIALIST",
        "Shop one on one with a Specialist online.",
        "",
        "",
      ],
      widthAndHeight: "min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145",
      text: [
        "TODAY AT APPLE",
        "Join free sessions at your Apple Store.",
        "",
        "Learn about the latest features and how to go further with your Apple devices.",
      ],
      widthAndHeight: "min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
      textThreeStyle: "text-[#1d1d1f] font-SFlight text-lg leading-tight",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-personal-setup-202408?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1727714996748",
      text: [
        "PERSONAL SETUP",
        "Set up your new device with help from a Specialist.",
        "",
        "Let us guide you through data transfer, the latest features and more, in an online, one-to-one session.",
      ],
      widthAndHeight: "min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
      textThreeStyle: "text-[#1d1d1f] font-SFlight text-lg leading-tight",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-earth-day-specialist-help-202504?wid=4000&hei=4167&fmt=p-jpg&qlt=95&.v=1742855758114",
      text: [
        "APPLE SPECIALIST",
        "Shop one on one with a Specialist online.",
        "",
        "",
      ],
      widthAndHeight: "min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-TAA-202310?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1697149577145",
      text: [
        "TODAY AT APPLE",
        "Join free sessions at your Apple Store.",
        "",
        "Learn about the latest features and how to go further with your Apple devices.",
      ],
      widthAndHeight: "min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
      textThreeStyle: "text-[#1d1d1f] font-SFlight text-lg leading-tight",
    },
    {
      link: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/store-card-50-personal-setup-202408?wid=960&hei=1000&fmt=p-jpg&qlt=95&.v=1727714996748",
      text: [
        "PERSONAL SETUP",
        "Set up your new device with help from a Specialist.",
        "",
        "Let us guide you through data transfer, the latest features and more, in an online, one-to-one session.",
      ],
      widthAndHeight: "min-w-[28rem] max-w-[28rem] h-[29.2rem]",
      textZeroStyle: "text-[#6e6e73] -mt-7",
      textOneStyle: "text-black",
      textThreeStyle: "text-[#1d1d1f] font-SFlight text-lg leading-tight",
    },
  ];
  return (
    <div className="max-lg:mx-5 ms-36 pb-10">
      <Headings
        text={["Help is here.", " Whenever and however you need it."]}
        textColor={"text-[#1d1d1f]"}
      />
      <div className="flex space-x-5  overflow-x-scroll no-scrollbar mt-5 py-1 pb-10">
        {cards.map((card, index) => {
          return (
            <WideCard
              key={index}
              text={card.text}
              textZeroStyle={card.textZeroStyle}
              widthAndHeight={card.widthAndHeight}
              textOneStyle={card.textOneStyle}
              textThreeStyle={card.textThreeStyle}
              link={card.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Help;
