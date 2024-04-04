import { ResizableHandle, ResizablePanelGroup } from "@/components/ui/resizable";
import Panel from "@/components/Panel";

export default function Home() {
  return (
    <div>
      <ResizablePanelGroup direction="horizontal" className="w-full h-full">
        <Panel title="MARKDOWN" canBeHidden={false}></Panel>
        <ResizableHandle withHandle />
        <Panel title="PREVIEW" canBeHidden={true}></Panel>
      </ResizablePanelGroup>
    </div>
  );
}
