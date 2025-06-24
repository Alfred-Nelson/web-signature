"use client";

import React from "react";
import { CONSTS } from "@/lib/constants";
import { cj } from "@/lib/utils";
import CircularProgress from "./CircularProgress";
import { ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/Dialog";

/**
 *
 * @param {typeof CONSTS.COURSES.CS.cseet.syllabus[0][0]} subject
 * @returns
 */
const SubjectCard = (subject) => {
  return (
    <div className="flex flex-col md:flex-row gap-y-8 md:justify-between md:items-center group py-3 px-12 bg-background border rounded-xl w-full">
      <div className="flex flex-col-reverse md:flex-row gap-x-8 w-full">
        <div className="w-fit h-16 min-h-16 min-w-16 aspect-square text-emerald-400 relative hidden md:flex items-center justify-center">
          <CircularProgress progress={subject.pass / (subject.total || 100)} />
          <div className="absolute text-sm text-foreground flex flex-row-reverse md:flex-col">
            <p
              className={cj(
                "leading-[17px] font-semibold",
                subject.pass + (subject.total || 0) > 200
                  ? "text-[14px]"
                  : "text-sm"
              )}
            >
              {subject.pass}
              {!!subject.total ? `/${subject.total}` : "%"}
            </p>
            <p className="text-xs leading-[12px] opacity-40 text-center inline-block whitespace-nowrap">
              cut-off
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-full">
          <div>
            {subject.isElective && (
              <h6 className="font-medium text-lg">Elective</h6>
            )}
            {Array.isArray(subject.name) &&
              (subject.name.length > 1 ? (
                <ol className="list-[upper-roman]">
                  {subject.name.map((each, idx) => {
                    return (
                      <li key={idx}>
                        {typeof each === "string" ? (
                          <h6 className="font-medium text-lg">{each}</h6>
                        ) : (
                          <h6 className="font-medium text-lg">
                            {each.value}
                            <span className="ml-2 opacity-50 text-base font-normal inline-block whitespace-nowrap">
                              ({each.weightage}% weightage)
                            </span>
                          </h6>
                        )}
                      </li>
                    );
                  })}
                </ol>
              ) : (
                <h6 className="font-medium text-lg">{subject.name[0]}</h6>
              ))}
            {typeof subject.name === "string" && (
              <h6 className="font-medium text-lg">{subject.name}</h6>
            )}
            {!!subject.description &&
              typeof subject.description === "string" && (
                <p className="text-sm opacity-40">{subject.description}</p>
              )}
            {!!subject.description && Array.isArray(subject.description) && (
              <p className="text-sm opacity-40">
                {subject.description.join(" | ")}
              </p>
            )}
          </div>
          <div className="md:divide-x flex flex-col md:flex-row md:items-center">
            {!!subject.descriptive && (
              <p className={cj("text-sm w-fit md:pr-1")}>
                <span className="opacity-40">descriptive:</span>{" "}
                <span className="font-semibold">{subject.descriptive}%</span>
              </p>
            )}
            {!!subject.objective && (
              <p className={cj("text-sm w-fit md:pl-1")}>
                <span className="opacity-40">objective:</span>{" "}
                <span className="font-semibold">{subject.objective}%</span>
              </p>
            )}
            <p className={cj("text-sm w-fit block md:hidden")}>
              <span className="opacity-40">cut off:</span>{" "}
              <span className="font-semibold">
                {subject.pass}
                {!!subject.total ? `/${subject.total}` : "%"}
              </span>
            </p>
          </div>
        </div>
      </div>
      {!!(subject.modules || [])?.length && (
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <button
                type="button"
                onClick={() => {}}
                className={cj(
                  "cursor-pointer text-primary flex items-center gap-x-1.5 whitespace-nowrap",
                  "md:opacity-0 md:translate-x-10",
                  "focus:opacity-100 focus-within:translate-x-0",
                  "group-hover:opacity-100 group-hover:translate-x-0",
                  "transition ease-out duration-300"
                )}
              >
                View Modules
                <span>
                  <ChevronRight size={14} />
                </span>
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Modules</DialogTitle>
                <DialogDescription className="flex gap-x-2 items-center">
                  {subject.route.map((each) => {
                    return (
                      <React.Fragment key={each}>
                        <span>{each}</span>
                        <span>
                          <ChevronRight size={10} />
                        </span>
                      </React.Fragment>
                    );
                  })}
                  <span>{subject.name}</span>
                </DialogDescription>
              </DialogHeader>
              <ol>
                {subject.modules.map((module, idx) => {
                  return (
                    <li
                      key={idx}
                      className="py-4 list-decimal first:border-t border-b border-border/30"
                    >
                      {module.name}
                    </li>
                  );
                })}
              </ol>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
};

export default SubjectCard;
