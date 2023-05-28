import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="mt-4">
      <div className="flex gap-3 items-center">
        <Image
          width={34}
          height={34}
          className=" h-[34px] w-[34px] rounded-full"
          src="/assets/elon_dai.jpg"
          alt="bill gates"
        />
        <h1 className="font-medium">Elon dai</h1>
      </div>
    </div>
  );
};

export default Contact;
