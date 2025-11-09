import SalesInsightAnimation from "@/components/animated/sales-insight-animation";
import React from "react";

function InsightGuide() {
  return (
    <section className="flex gap-20 max-w-[1200px] w- mx-auto my-16 p-8">
      <div>
        <SalesInsightAnimation />
      </div>
      <div></div>
    </section>
  );
}

export default InsightGuide;
