import { TrendingResult } from "@/src/common/types";
import { EllipsisHorizontalCircleIcon } from "@heroicons/react/24/outline";

interface TrendingProps {
  result: TrendingResult;
}

const Trending: React.FC<TrendingProps> = ({ result }) => {
  return (
    <div className="hover:bg-white hover:bg-opacity-[0.03] px-4 py-2 cursor-pointer transition duration-200 ease-out flex items-center justify-between">
      <div className="space-y-0.5">
        <p className="text-[#6e767d] text-xs font-medium">{result.heading}</p>
        <h6 className="font-bold max-w-[250px] text-sm">
          {result.description}
        </h6>
        <p className="text-[#6e767d] text-xs font-medium max-w-[250px]">
          Trending with{" "}
          {result.tags &&
            result.tags.map((tag, index) => (
              <span className="tag" key={index}>
                {tag}
              </span>
            ))}
        </p>
      </div>

      {result.img ? (
        <img src={result.img} width={70} height={70} className="rounded-2xl" />
      ) : (
        <div className="icon group">
          <EllipsisHorizontalCircleIcon className="h-5 text-[#6e767d] group-hover:text-[#1d9bf0]" />
        </div>
      )}
    </div>
  );
};

export default Trending;
