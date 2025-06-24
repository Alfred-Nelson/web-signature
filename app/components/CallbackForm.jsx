"use client";

import React from "react";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/Form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import validationSchema from "../utils/validationSchema";
import { Input } from "./ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/Select";
import { CONSTS } from "@/lib/constants";
import { Textarea } from "./ui/Textarea";
import { Button } from "./ui/Button";
import { insertContactToSheet, logInConsole } from "../actions/contact/action";
import { toast } from "sonner";
import StatusBasedSubmitContent from "./StatusBasedSubmitContent";
import helpers from "@/lib/helpers";
import SVGSpinner from "./SVGSpinner";

const CallbackForm = ({ form: formName }) => {
  const form = useForm({
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      course: formName,
      extra: "",
    },
    resolver: zodResolver(validationSchema.contactPage),
  });

  async function onSubmit() {
    try {
      const values = form.getValues();
      // await insertContactToSheet(values);
      await helpers.sleep(2000)
      form.reset();
      toast.success("We have recieved your request. Will call you back as soon as possible.")
    } catch(e) {
      console.error(e)
      toast.error(typeof e === "string" ? e : e?.message || "Something went wrong")
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-primary/10 rounded-md w-full h-full p-8 text-xl flex flex-col justify-between gap-y-6"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input
                    {...field}
                    placeholder="Phone"
                    type="tel"
                    onChange={(e) => {
                      const value = e.target.value;
                      const phoneNumberRegex = /^[0-9+\s()-]+$/;
                      if (phoneNumberRegex.test(value) || value === "") {
                        field.onChange(value);
                      }
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Input type="email" placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => {
            return (
              <FormItem>
                <Select
                  value={field.value}
                  onValueChange={field.onChange}
                  onOpenChange={(opx) => !opx && field.onBlur()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Course" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {CONSTS.OPTIONS.courseOptions.map((course) => {
                      return (
                        <SelectItem key={course.value} value={course.value}>
                          {course.label}
                        </SelectItem>
                      );
                    })}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <FormField
          control={form.control}
          name="extra"
          render={({ field }) => {
            return (
              <FormItem>
                <FormControl>
                  <Textarea
                    placeholder="Something you would like to tell us"
                    rows={5}
                    style={{ resize: "none" }}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            );
          }}
        />
        <Button 
          type="submit" 
          variant="default"
          disabled={form.formState.isSubmitting}
        >
          <StatusBasedSubmitContent 
            status={form.formState.isSubmitting ? "pending" : "idle"}
            content={{ 
              idle: "Send Your Request",
              pending: (
                <>
                  <SVGSpinner size={8} />
                  Sending Your Request
                </>
              )
            }} 
          />
        </Button>
      </form>
    </Form>
  );
};

export default CallbackForm;
