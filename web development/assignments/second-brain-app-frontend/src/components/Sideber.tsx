import { AiOutlineYoutube } from "react-icons/ai";
import SideberItem from "./SideberItem";
import { BsTwitterX } from "react-icons/bs";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoLinkSharp } from "react-icons/io5";
import { FaHashtag } from "react-icons/fa";
import Card from "./Card";
import Button from "./Button";
import PlusIcon from "./icons/PlusIcon";
import ShareIcons from "./icons/ShareIcons";

const Sideber = () => {
  return (
    <div className="bg-main-bg">
      <div className="w-[15%] bg-white pl-9 h-screen absolute left-0 top-0 border-r-slate-300 border-r-2">
        <SideberItem
          title="Twitter"
          icon={<BsTwitterX className="text-lg" />}
        />
        <SideberItem
          title="Youtube"
          icon={<AiOutlineYoutube className="text-2xl" />}
        />
        <SideberItem
          title="Documents"
          icon={<IoDocumentTextOutline className="text-2xl" />}
        />
        <SideberItem
          title="Links"
          icon={<IoLinkSharp className="text-2xl" />}
        />
        <SideberItem title="Tags" icon={<FaHashtag className="text-2xl" />} />
      </div>
      <div className="ml-[18%] mr-[4%] h-screen">
        <div className="flex justify-between items-center">
          <h2 className="font-bold text-3xl">All Notes</h2>
          <div className="flex">
            <Button title="Add Content" icon={<PlusIcon />} variant="primary" />
            <Button
              title="Share Brain"
              icon={<ShareIcons />}
              variant="secondary"
            />
          </div>
        </div>
        <div className="flex gap-10 justify-between">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Sideber;
