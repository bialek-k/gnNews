import { HiViewList, HiViewGrid } from "react-icons/hi";
import { RootState } from "../../../store";

import { useSelector, useDispatch } from "react-redux";
import { viewListsActions } from "../../../store";

export const ViewList = () => {
  const viewList = useSelector((state: RootState) => state.view);
  const dispatch = useDispatch();

  return (
    <div className="displayList flex gap-2 items-center">
      <p className="text-white">Widok:</p>
      <div className="icons flex gap ">
        <HiViewList
          className={`h-8 w-8 hover:text-green-500 cursor-pointer ${
            viewList.view === "list" ? "text-green-500" : "text-white/70"
          }`}
          onClick={() =>
            dispatch(viewListsActions.changeViewList({ view: "list" }))
          }
        />
        <HiViewGrid
          className={`h-8 w-8  hover:text-green-500 cursor-pointer ${
            viewList.view === "grid" ? "text-green-500" : "text-white/50"
          }`}
          onClick={() =>
            dispatch(viewListsActions.changeViewList({ view: "grid" }))
          }
        />
      </div>
    </div>
  );
};
