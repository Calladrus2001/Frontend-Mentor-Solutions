"use client";
import { useState, useRef } from "react";
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
  const [name, setName] = useState<string>("newMarkdown");
  const dialogRef = useRef<HTMLDialogElement>(null);
  const handleSave = () => {};
  const handleNewDoc = () => {};

  return (
    <>
      <div className="p-3 bg-gray-700 flex justify-between">
        <div className="flex gap-4 items-center text-white">
          <Sheet>
            <SheetTrigger>
              <Button variant="ghost" className="hover:text-black">
                <FaBars />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-gray-700 border-none">
              <SheetTitle className="text-white">MY DOCUMENTS</SheetTitle>
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
            <input
              type="text"
              className="bg-transparent text-white focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-6 items-center">
          <FaTrashAlt
            className="text-gray-500 cursor-pointer"
            onClick={() => dialogRef.current?.showModal()}
          />
          <Button className="bg-orange-500 hover:bg-orange-400" onClick={handleSave}>
            <FaSave className="mr-2" /> Save Changes
          </Button>
        </div>
      </div>
      <dialog ref={dialogRef} className="max-w-96 px-4 py-6 rounded-md">
        <h2 className="text-lg font-semibold">Delete this Document</h2>
        <p className="text-gray-400 text-sm my-4">
          Are you sure you want to delete this document and contents? This cannot be
          reversed.
        </p>
        <Button
          className="bg-orange-500 hover:bg-orange-400 outline-none"
          onClick={() => dialogRef.current?.close()}
        >
          Confirm and Delete
        </Button>
      </dialog>
    </>
  );
}
