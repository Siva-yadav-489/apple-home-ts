type FootLinkListProps = {
  title: string;
  list: string[];
};
const FootLinkList = ({ title, list }: FootLinkListProps) => {
  return (
    <ul className="space-y-2.5 mb-5">
      <li className="text-xs font-SFmedium tracking-widest text-black">
        {title}
      </li>
      {list.map((item, index) => (
        <li
          key={index}
          className="text-xs font-SFlight text-[#000000b8] tracking-widest"
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FootLinkList;
