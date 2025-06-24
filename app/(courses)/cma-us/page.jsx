import InViewAnimateSection from "@/app/components/InViewAnimateSection";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CallbackForm from "@/app/components/CallbackForm";
import SubjectCard from "@/app/components/SubjectCard";
import { CONSTS } from "@/lib/constants";
import { cj } from "@/lib/utils";
import CasualPhoneCallSVG from "@/public/images/undraw-svg/casual-phone-call.svg"

const CMA_US = () => {
  return (
    <>
      <header className="course-heading relative flex flex-col md:flex-row gap-y-6 md:items-center">
        <Link
          href="/"
          className={cj(
            "flex items-center gap-x-1.5",
            "md:absolute md:left-8",
            "pr-6",
            "text-primary md:text-foreground/30 hover:text-foreground/60",
            "hover:scale-105",
            "transition ease-out duration-200"
          )}
        >
          <ChevronLeft className="w-4 md:w-8" />
          <span className="block md:hidden">Back</span>
        </Link>
        <h1 className="text-accent">
          Cost and Management Accounting, US (CMA US)
        </h1>
      </header>
      <InViewAnimateSection
        id="ca-main-page"
        className="course-page h-fit min-h-fit"
      >
        <p className="text-xl">
          The Certified Management Accountant (CMA US) is a globally recognized
          professional credential awarded by the Institute of Management
          Accountants (IMA), USA. It is a prestigious qualification that
          emphasizes advanced proficiency in financial planning, performance
          management, cost control, decision analysis, and internal controls.
          Tailored for finance professionals aiming to lead strategic business
          initiatives, the CMA US equips individuals with the skills needed to
          bridge accounting and management, enabling data-driven decision-making
          at the highest organizational levels. CMA holders are in high demand
          for roles such as Financial Analyst, Management Accountant, Corporate
          Controller, Finance Manager, and Chief Financial Officer (CFO) across
          multinational companies, consulting firms, and global business hubs.
          The CMA US qualification is highly respected for its international
          portability, rigorous standards, and real-world relevance, making it
          ideal for professionals seeking global career mobility. Pursuing the
          CMA is more than a certification—it’s a commitment to excellence,
          ethical leadership, and continuous professional growth in today’s
          dynamic and competitive business environment.
        </p>
      </InViewAnimateSection>
      <InViewAnimateSection className="py-16 !h-fit !min-h-fit mb-10 bg-[linear-gradient(to_bottom,transparent_0,var(--color-background)_64px,var(--color-background)_calc(100%-64px),transparent_100%)]">
        <h3 className="text-3xl font-bold mb-8">Course Route</h3>
        <div className="flex flex-col gap-y-4">
          {CONSTS.COURSES.CMA_US.map((subject, idx) => {
            return <SubjectCard key={idx} {...subject} route={["CMA US"]} />;
          })}
        </div>
      </InViewAnimateSection>
      <InViewAnimateSection className="pt-14">
        <h3 className="text-2xl font-bold mb-8 text-colored-foreground">
          Shall we call you?
        </h3>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <CallbackForm form="cma-us" />
          <div className="hidden lg:flex justify-center items-center ">
            <div className="w-96 h-96 min-h-fit text-accent">
              <CasualPhoneCallSVG />
            </div>
          </div>
        </div>
      </InViewAnimateSection>
    </>
  );
};

export default CMA_US;
