import React from "react";
import Detailone from "@/components/advice/Detailone";
import Detailtwo from "@/components/advice/Detailtwo";
import Detailthree from "@/components/advice/Detailthree";
import Detailfour from "@/components/advice/Detailfour";

const renderComponent = (slug: string) => {
  switch (slug) {
    case "detailone":
      return <Detailone />;
    case "detailtwo":
      return <Detailtwo />;
    case "detailthree":
      return <Detailthree />;
    case "detailfour":
      return <Detailfour />;
    default:
      return <div>Component not found</div>;
  }
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  return <div>{renderComponent((await params).slug)}</div>;
};

export default Page;
