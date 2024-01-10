import ProjectData from "../models/ProjectData";
import { RouterFocusProps } from "../models/Router";

export default function DevConsult({
  project,
  setFocus,
}: {
  project: ProjectData;
  setFocus: RouterFocusProps["setFocus"];
}) {
  console.log(project);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl font-bold">DevConsult</h1>
      <p className="text-2xl mt-5">This is the project page for DevConsult</p>
    </div>
  );
}
