import InViewAnimateSection from "@/app/components/InViewAnimateSection";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import CallbackForm from "@/app/components/CallbackForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/app/components/ui/Accordion";
import SubjectCard from "@/app/components/SubjectCard";
import { CONSTS } from "@/lib/constants";
import Icons from "@/app/assets/icons";
import { cj } from "@/lib/utils";
import BusinessChatSVG from "@/public/images/undraw-svg/business-chat.svg"

const CS = () => {
  return (
    <>
      <div className="course-heading relative flex flex-col md:flex-row gap-y-6 md:items-center">
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
        <h1 className="text-accent">Company Secretary (CS)</h1>
      </div>
      <InViewAnimateSection
        id="ca-main-page"
        className="course-page h-fit min-h-fit"
      >
        <p className="text-xl">
          Company Secretary (CS) is a prestigious professional qualification
          that specializes in corporate governance, legal compliance, and
          company law, administered by the Institute of Company Secretaries of
          India (ICSI). It equips individuals with expert knowledge in areas
          such as corporate laws, securities regulations, tax planning, and
          strategic management. A qualified Company Secretary plays a vital role
          in ensuring that an organization operates within legal frameworks and
          upholds high standards of governance and ethical conduct. CS
          professionals are indispensable to boards of directors and senior
          management, often serving as Compliance Officers, Legal Advisors,
          Corporate Planners, and Governance Experts in both private and public
          sector organizations. The CS qualification opens the door to diverse
          career opportunities in law firms, multinational corporations,
          regulatory bodies, and financial institutions across India and
          globally. More than just a legal expert, a Company Secretary is a
          strategic partner in business operations, fostering transparency,
          accountability, and long-term sustainability. Pursuing CS is not
          merely about understanding the law—it's about shaping the legal and
          ethical backbone of modern businesses.
        </p>
      </InViewAnimateSection>
      <InViewAnimateSection className="py-16 !h-fit !min-h-fit mb-10 bg-[linear-gradient(to_bottom,transparent_0,var(--color-background)_64px,var(--color-background)_calc(100%-64px),transparent_100%)]">
        <h3 className="text-3xl font-bold mb-8">Course Route</h3>
        <Accordion type="single" collapsible>
          {Object.entries(CONSTS.COURSES.CS).map(([levelName, level]) => {
            return (
              <AccordionItem
                className="group hello"
                key={levelName}
                value={levelName.toLowerCase()}
              >
                {/* <Link href={`/ca/#level-${levelName.toLowerCase()}`}> */}
                <AccordionTrigger
                  asLink={`/ca/#level-${levelName.toLowerCase()}`}
                  id={`level-${levelName.toLowerCase()}`}
                  className="py-6 text-xl font-semibold group"
                >
                  <div className="flex items-center gap-x-4">
                    <Icons.BadgeStarIcon size={32} />
                    {levelName}
                  </div>
                </AccordionTrigger>
                {/* </Link> */}
                <AccordionContent>
                  <div className="flex flex-col">
                    {level.syllabus.map((group, groupIdx) => {
                      const groupDetail = level.group?.[groupIdx];
                      return (
                        <div
                          key={groupIdx}
                          className="not-first:pt-8 pb-8 not-last:border-b"
                        >
                          {!!groupDetail && (
                            <div className="flex flex-col gap-x-2 mb-4 ml-12">
                              {!!groupDetail.name && (
                                <h3 className="text-lg font-semibold">
                                  {groupDetail.name}
                                </h3>
                              )}
                              <p className="text-foreground/50">
                                Min aggregate marks to pass:{"  "}
                                <span className="font-semibold text-foreground text-base">
                                  {groupDetail.minAggPass}/
                                  {groupDetail.aggTotal}
                                </span>
                              </p>
                            </div>
                          )}
                          <div className="flex flex-col items-center gap-y-2">
                            {group.map((subject, subIdx) => {
                              return <SubjectCard key={subIdx} {...subject} />;
                            })}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>
      </InViewAnimateSection>
      <InViewAnimateSection className="pt-14">
        <h3 className="text-2xl font-bold mb-8 text-colored-foreground">
          Shall we call you?
        </h3>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2">
          <CallbackForm form="cs" />
          <div className="hidden lg:flex justify-center items-center ">
            <div className="w-96 h-96 min-h-fit text-accent">
              <BusinessChatSVG />
            </div>
          </div>
        </div>
      </InViewAnimateSection>
    </>
  );
};

export default CS;
