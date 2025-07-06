import { cj } from "@/lib/utils";
import InViewAnimateSection from "./components/InViewAnimateSection";
import Image from "next/image";
import Card from "./components/Card";

// TODO: [ explore courses -> ] after the subheading
// TODO: coffee on paper
// TODO: svg for course card
// TODO: explore course on each card
// TODO: metadata
// TODO: sitemap
// TODO: opengraph

export default function Home() {
  return (
    <>
      <InViewAnimateSection sectionAnimFuncName="homeMainSection" id="home-main" className="!h-full flex flex-col items-center justify-center gap-y-10">
        <>
          <div className="w-full h-fit flex flex-col items-center gap-y-4">
            <Image
              src={"/images/namedLogo.svg"}
              alt="Signature logo"
              width={300}
              height={76}
              className={cj(
                "--initial-- opacity-[0.01] inline-block",
                "w-96 rounded-md py-2 h-auto"
              )}
            />
            <h1 className={cj("w-full mt-6 text-center")}>
              <span
                className={cj(
                  "--initial-- opacity-[0.01] inline-block",
                  "text-colored-foreground dark:text-foreground"
                )}
              >
                Committed to Academic Excellence
              </span>
              <br />
              <span
                delay={0.2}
                className={cj(
                  "--initial-- opacity-[0.01] inline-block",
                  "text-foreground dark:text-colored-foreground"
                )}
              >
                Shaping Skilled Professionals
              </span>
            </h1>
            <p
              className={cj(
                "--initial-- opacity-[0.01]",
                // "text-lg lg:text-2xl",
                "text-xl text-center",
                "lg:max-w-[40rem]",
                "text-foreground/40"
              )}
            >
              Signature offers a focused approach to commerce and management
              education, preparing students with both knowledge and practical
              skills. We develop well-rounded professionals ready to succeed in
              any business environment.
            </p>
          </div>
          <div
            className={cj(
              "cards w-full h-fit grid grid-cols-1 lg:grid-cols-5 gap-4",
              "[&>*]:hover:scale-105 [&>*]:opacity-[0.01] [&>*]:--initial--",
              // "has-hover:[&>*:not(:hover)]:scale-95"
            )}
          >
            <Card to="/ca" name={"CA"} fullName={["Chartered Accountancy"]} />
            <Card
              to="/cma-ind"
              name="CMA IND"
              fullName={["Cost and Management", "Accounting India"]}
            />
            <Card
              to="/cs"
              name={"CS"}
              fullName={["Company Secretary", "(India)"]}
            />
            <Card
              to="/cma-us"
              name="CMA US"
              fullName={["Cost and Management", "Accounting US"]}
            />
            <Card
              // asImage="/images/acca-seeklogo.png"
              to="/acca"
              name={"ACCA"}
              fullName={[
                "Association of Chartered",
                " Certified Accountants",
              ]}
            />
          </div>
        </>
      </InViewAnimateSection>
    </>
  );
}
