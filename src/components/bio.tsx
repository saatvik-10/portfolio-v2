'use client'

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Modal } from "./ui/animated-modal";
import { Download, Mail } from "lucide-react";

const Bio = () => {
  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/saatvik_resume.pdf";
    link.download = "Saatvik_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="flex items-center justify-between">
      <div className="flex flex-col gap-y-3">
        <div className="flex flex-col gap-y-1">
          <span className="text-2xl font-bold text-zinc-100 md:text-5xl">
            Saatvik Madan
          </span>
          <p className="text-xs text-zinc-300 md:text-base">
            Breaking code since birth...
            <br />
            You're welcome :{")"}
          </p>
        </div>
        <div className="flex flex-row gap-3">
          <Modal>
            <Button size={"sm"} className="group/modal-btn relative flex cursor-pointer justify-center overflow-hidden bg-zinc-100 text-xs text-gray-950 transition-colors hover:bg-gray-300 md:text-base">
              <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-80">
                CONTACT ME
              </span>
              <div className="absolute inset-0 flex -translate-x-80 items-center justify-center text-zinc-300 transition duration-500 group-hover/modal-btn:translate-x-0">
                <Mail className="size-6 text-gray-950" />
              </div>
            </Button>
          </Modal>
          <Modal>
            <Button size={"sm"}
              onClick={handleResumeDownload}
              className="group/modal-btn relative flex cursor-pointer justify-center overflow-hidden bg-zinc-100 text-xs text-gray-950 transition-colors hover:bg-gray-300 md:text-base"
            >
              <span className="text-center transition duration-500 group-hover/modal-btn:translate-x-80">
                HIRE ME
              </span>
              <div className="absolute inset-0 flex -translate-x-80 items-center justify-center text-zinc-300 transition duration-500 group-hover/modal-btn:translate-x-0">
                <Download className="size-6 text-gray-950" />
              </div>
            </Button>
          </Modal>
        </div>
      </div>
      <div className="size-28 overflow-hidden rounded-lg md:size-38">
        <Image
          src="/pfp.jpeg"
          alt="Profile picture"
          height={256}
          width={256}
          className="h-full w-full object-cover hover:scale-110 hover:transition-transform"
        />
      </div>
    </section>
  );
};

export default Bio;
