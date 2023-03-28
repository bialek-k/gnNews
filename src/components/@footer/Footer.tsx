import { useSelector } from "react-redux";
import { RootState } from "../../store";

import { AiOutlineClockCircle } from "react-icons/ai";
import { useTimer } from "../../hooks/useTimer";

export const Footer = () => {
  const { time } = useTimer();
  const numberOfArticles = useSelector((state: RootState) => state.quantity);

  return (
    <div className="absolute -bottom-48 left-0 h-48 w-full bg-neutral-900 py-4">
      <div className="content flex flex-col h-full  gap-2 justify-center items-center text-white">
        <p className="text-2xl font-bold ">
          ilość artykułów: {numberOfArticles.quantity}{" "}
        </p>
        <div className="time flex items-center gap-2">
          <AiOutlineClockCircle className="h-6 w-6" />
          {time.format("YYYY-MM-DD HH:mm:ss")}
        </div>
        <div className="author flex items-end">
          <p className="text-xs text-neutral-500 hover:scale-[1.08] duration-150">
            made with ♥ by{" "}
            <strong className="text-green-500/60 ">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/bialek-krzysztof/"
                className=""
              >
                Krzysztof Białek
              </a>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
};
