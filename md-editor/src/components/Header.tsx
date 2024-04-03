"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { FaBars, FaRegFile, FaTrashAlt, FaSave } from "react-icons/fa";

export default function Header() {
  const handleSave = () => {};
  const handleDelete = () => {};
  const handleNewDoc = () => {};

  return (
    <div className="p-3 bg-gray-700 flex justify-between">
      <div className="flex gap-4 items-center text-white">
        <Sheet>
          <SheetTrigger>
            <Button variant="ghost" className="hover:text-black">
              <FaBars />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle>MY DOCUMENTS</SheetTitle>
            <SheetHeader className="my-4">
              <Button
                className="bg-orange-500 hover:bg-orange-400"
                onClick={handleNewDoc}
              >
                + New Document
              </Button>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <h4 className="font-bold tracking-widest">MARKDOWN</h4>
        <Separator orientation="vertical" className="mx-4 bg-gray-500" />
        <FaRegFile />
        <div className="flex flex-col text-sm">
          <p className="text-gray-500">Document Name</p>
          {/* //TODO: load the document name from somewhere */}
          <p>--the name--.md</p>
        </div>
      </div>
      <div className="flex gap-6 items-center">
        <FaTrashAlt className="text-gray-500 cursor-pointer" onClick={handleDelete} />
        <Button className="bg-orange-500 hover:bg-orange-400" onClick={handleSave}>
          <FaSave className="mr-2" /> Save Changes
        </Button>
      </div>
    </div>
  );
}
