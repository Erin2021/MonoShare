import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="헤더 border-y border-black w-full fixed mt-8">
      <div className="컨테이너 flex justify-between items-center px-6 py-3">
        <h1 className="">MonoShare</h1>
        <div className="flex gap-3">
          <Button>이건버튼</Button>
          <Button>이것도버튼</Button>
        </div>
      </div>
    </header>
  );
}
