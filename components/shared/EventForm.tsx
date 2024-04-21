"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { eventFormSchema } from "@/lib/validator";
import * as z from "zod";
import { eventDefaultValues } from "@/constants";
import Dropdown from "./Dropdown";
import { Textarea } from "@/components/ui/textarea";
import { FileUploader } from "./FileUploader";
import { useState } from "react";
import Image from "next/image";
import DatePicker from "react-datepicker";
import { useUploadThing } from "@/lib/uploadthing";

import "react-datepicker/dist/react-datepicker.css";
import { Checkbox } from "../ui/checkbox";
import { useRouter } from "next/navigation";
import { createEvent, updateEvent } from "@/lib/actions/event.actions";
import { IEvent } from "@/lib/database/models/event.model";

import { useRef } from "react";
import { Editor } from "@tinymce/tinymce-react";

type EventFormProps = {
  userId: string;
  type: "Create" | "Update";
  event?: IEvent;
  eventId?: string;
};

const EventForm = ({ userId, type, event, eventId }: EventFormProps) => {
  const [files, setFiles] = useState<File[]>([]);
  const editorRef = useRef(null);
  const initialValues =
    event && type === "Update"
      ? {
          ...event,
          startDateTime: new Date(event.startDateTime),
          endDateTime: new Date(event.endDateTime),
        }
      : eventDefaultValues;
  const router = useRouter();

  const { startUpload } = useUploadThing("imageUploader");

  const form = useForm<z.infer<typeof eventFormSchema>>({
    resolver: zodResolver(eventFormSchema),
    defaultValues: initialValues,
  });

  async function onSubmit(values: z.infer<typeof eventFormSchema>) {
    let uploadedImageUrl = values.imageUrl;

    if (files.length > 0) {
      const uploadedImages = await startUpload(files);

      if (!uploadedImages) {
        return;
      }

      uploadedImageUrl = uploadedImages[0].url;
    }
    if (type === "Create") {
      try {
        const newEvent = await createEvent({
          event: {
            ...values,
            description: values.description,
            imageUrl: uploadedImageUrl,
          },
          userId,
          path: "/profile",
        });

        if (newEvent) {
          form.reset();
          router.push(`/events/${newEvent._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }

    if (type === "Update") {
      if (!eventId) {
        router.back();
        return;
      }

      try {
        const updatedEvent = await updateEvent({
          userId,
          event: { ...values, imageUrl: uploadedImageUrl, _id: eventId },
          path: `/events/${eventId}`,
        });

        if (updatedEvent) {
          form.reset();
          router.push(`/events/${updatedEvent._id}`);
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-5"
      >
        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    placeholder="Event title"
                    {...field}
                    className="input-field"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Dropdown
                    onChangeHandler={field.onChange}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <Editor
                    apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                    onInit={(_evt, editor) => {
                      // @ts-ignore
                      editorRef.current = editor;
                    }}
                    onBlur={field.onBlur}
                    onEditorChange={(content) => field.onChange(content)}
                    initialValue=""
                    init={{
                      height: 280,
                      menubar: false,
                      plugins: [
                        "advlist",
                        "autolink",
                        "lists",
                        "link",
                        "image",
                        "charmap",
                        "preview",
                        "anchor",
                        "searchreplace",
                        "visualblocks",
                        "code",
                        "fullscreen",
                        "insertdatetime",
                        "media",
                        "table",
                        "code",
                        "help",
                        "wordcount",
                      ],
                      toolbar:
                        "undo redo | blocks | " +
                        "bold italic forecolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                      content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="imageUrl"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl className="h-72">
                  <FileUploader
                    onFieldChange={field.onChange}
                    imageUrl={field.value}
                    setFiles={setFiles}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Image
                      src="/assets/icons/location-grey.svg"
                      alt="calendar"
                      width={24}
                      height={24}
                    />

                    <Input
                      placeholder="Event location or Online"
                      {...field}
                      className="input-field"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="startDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="calendar"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <p className="ml-3 whitespace-nowrap text-grey-600">
                      Start Date:
                    </p>
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="MM/dd/yyyy h:mm aa"
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="endDateTime"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Image
                      src="/assets/icons/calendar.svg"
                      alt="calendar"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <p className="ml-3 whitespace-nowrap text-grey-600">
                      End Date:
                    </p>
                    <DatePicker
                      selected={field.value}
                      onChange={(date: Date) => field.onChange(date)}
                      showTimeSelect
                      timeInputLabel="Time:"
                      dateFormat="MM/dd/yyyy h:mm aa"
                      wrapperClassName="datePicker"
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-4 py-2">
                    <Image
                      src="/assets/icons/dollar.svg"
                      alt="dollar"
                      width={24}
                      height={24}
                      className="filter-grey"
                    />
                    <Input
                      type="number"
                      placeholder="Price"
                      {...field}
                      className="p-regular-16 border-0 bg-grey-50 outline-offset-0 focus:border-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                    />
                    <FormField
                      control={form.control}
                      name="isFree"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <div className="flex items-center">
                              <label
                                htmlFor="isFree"
                                className="whitespace-nowrap pr-3 leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                Free Ticket
                              </label>
                              <Checkbox
                                onCheckedChange={field.onChange}
                                checked={field.value}
                                id="isFree"
                                className="mr-2 h-5 w-5 border-2 border-primary-500"
                              />
                            </div>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem className="w-full ">
                <FormControl>
                  <div className="flex-center h-[54px] w-full overflow-hidden rounded-full bg-grey-50 px-5 py-2 bg-none ">
                    <Image
                      src="/assets/icons/brain.svg"
                      alt="link"
                      width={24}
                      height={24}
                    />

                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <SelectTrigger className="select-field">
                        <SelectValue placeholder="Skills" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="Teamwork">Teamwork</SelectItem>
                          <SelectItem value="Problem-Solving">
                            Problem-Solving
                          </SelectItem>
                          <SelectItem value="Communication Skills">
                            Communication Skills
                          </SelectItem>
                          <SelectItem value="Flexibility">
                            Flexibility
                          </SelectItem>
                          <SelectItem value="Time Management">
                            Time Management
                          </SelectItem>
                          <SelectItem value="Customer Service">
                            Customer Service
                          </SelectItem>
                          <SelectItem value="Attention to Detail">
                            Attention to Detail
                          </SelectItem>
                          <SelectItem value="Physical Stamina">
                            Physical Stamina
                          </SelectItem>
                          <SelectItem value="Leadership Skills">
                            Leadership Skills
                          </SelectItem>
                          <SelectItem value="Cultural Sensitivity">
                            Cultural Sensitivity
                          </SelectItem>
                          <SelectItem value="Event Planning">
                            Event Planning
                          </SelectItem>
                          <SelectItem value="Organizational Skills">
                            Organizational Skills
                          </SelectItem>
                          <SelectItem value="Adaptability">
                            Adaptability
                          </SelectItem>
                          <SelectItem value="Empathy">Empathy</SelectItem>
                          <SelectItem value="Negotiation Skills">
                            Negotiation Skills
                          </SelectItem>
                          <SelectItem value="Conflict Resolution">
                            Conflict Resolution
                          </SelectItem>
                          <SelectItem value="Decision Making">
                            Decision Making
                          </SelectItem>
                          <SelectItem value="Creativity">Creativity</SelectItem>
                          <SelectItem value="Resourcefulness">
                            Resourcefulness
                          </SelectItem>
                          <SelectItem value="Networking">Networking</SelectItem>
                          <SelectItem value="Emotional Intelligence">
                            Emotional Intelligence
                          </SelectItem>
                          <SelectItem value="Public Speaking">
                            Public Speaking
                          </SelectItem>
                          <SelectItem value="Team Building">
                            Team Building
                          </SelectItem>
                          <SelectItem value="Volunteer Management">
                            Volunteer Management
                          </SelectItem>
                          <SelectItem value="Risk Management">
                            Risk Management
                          </SelectItem>
                          <SelectItem value="Budget Management">
                            Budget Management
                          </SelectItem>
                          <SelectItem value="Project Management">
                            Project Management
                          </SelectItem>
                          <SelectItem value="Event Promotion">
                            Event Promotion
                          </SelectItem>
                          <SelectItem value="Conflict Management">
                            Conflict Management
                          </SelectItem>
                          <SelectItem value="Community Engagement">
                            Community Engagement
                          </SelectItem>
                          <SelectItem value="Logistics">Logistics</SelectItem>
                          <SelectItem value="Interpersonal Skills">
                            Interpersonal Skills
                          </SelectItem>
                          <SelectItem value="Volunteer Coordination">
                            Volunteer Coordination
                          </SelectItem>
                          <SelectItem value="Stress Management">
                            Stress Management
                          </SelectItem>
                          <SelectItem value="Critical Thinking">
                            Critical Thinking
                          </SelectItem>
                          <SelectItem value="Data Analysis">
                            Data Analysis
                          </SelectItem>
                          <SelectItem value="Marketing Skills">
                            Marketing Skills
                          </SelectItem>
                          <SelectItem value="Fundraising">
                            Fundraising
                          </SelectItem>
                          <SelectItem value="Innovation">Innovation</SelectItem>
                          <SelectItem value="Team Leadership">
                            Team Leadership
                          </SelectItem>
                          <SelectItem value="Social Media Management">
                            Social Media Management
                          </SelectItem>
                          <SelectItem value="Event Coordination">
                            Event Coordination
                          </SelectItem>
                          <SelectItem value="Decision-Making Under Pressure">
                            Decision-Making Under Pressure
                          </SelectItem>
                          <SelectItem value="Conflict Resolution">
                            Conflict Resolution
                          </SelectItem>
                          <SelectItem value="Volunteer Training">
                            Volunteer Training
                          </SelectItem>
                          <SelectItem value="Problem Identification">
                            Problem Identification
                          </SelectItem>
                          <SelectItem value="First Aid">First Aid</SelectItem>
                          <SelectItem value="Team Management">
                            Team Management
                          </SelectItem>
                          <SelectItem value="Crowd Management">
                            Crowd Management
                          </SelectItem>
                          <SelectItem value="Sponsorship Management">
                            Sponsorship Management
                          </SelectItem>
                          <SelectItem value="Vendor Management">
                            Vendor Management
                          </SelectItem>
                          <SelectItem value="Financial Management">
                            Financial Management
                          </SelectItem>
                          <SelectItem value="Safety Procedures">
                            Safety Procedures
                          </SelectItem>
                          <SelectItem value="Volunteer Recognition">
                            Volunteer Recognition
                          </SelectItem>
                          <SelectItem value="Problem Resolution">
                            Problem Resolution
                          </SelectItem>
                          <SelectItem value="Documentation Skills">
                            Documentation Skills
                          </SelectItem>
                          <SelectItem value="Empowerment">
                            Empowerment
                          </SelectItem>
                          <SelectItem value="Team Motivation">
                            Team Motivation
                          </SelectItem>
                          <SelectItem value="Event Evaluation">
                            Event Evaluation
                          </SelectItem>
                          <SelectItem value="Volunteer Engagement">
                            Volunteer Engagement
                          </SelectItem>
                          <SelectItem value="Digital Literacy">
                            Digital Literacy
                          </SelectItem>
                          <SelectItem value="Project Coordination">
                            Project Coordination
                          </SelectItem>
                          <SelectItem value="Event Logistics">
                            Event Logistics
                          </SelectItem>
                          <SelectItem value="Volunteer Recruitment">
                            Volunteer Recruitment
                          </SelectItem>
                          <SelectItem value="Community Outreach">
                            Community Outreach
                          </SelectItem>
                          <SelectItem value="Resource Management">
                            Resource Management
                          </SelectItem>
                          <SelectItem value="Marketing Strategy">
                            Marketing Strategy
                          </SelectItem>
                          <SelectItem value="Community Building">
                            Community Building
                          </SelectItem>
                          <SelectItem value="Event Security">
                            Event Security
                          </SelectItem>
                          <SelectItem value="Leadership Development">
                            Leadership Development
                          </SelectItem>
                          <SelectItem value="Volunteer Retention">
                            Volunteer Retention
                          </SelectItem>
                          <SelectItem value="Problem Prevention">
                            Problem Prevention
                          </SelectItem>
                          <SelectItem value="Crowdfunding">
                            Crowdfunding
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={form.formState.isSubmitting}
          className="button col-span-2 w-full"
        >
          {form.formState.isSubmitting ? "Submitting..." : `${type} Event `}
        </Button>
      </form>
    </Form>
  );
};

export default EventForm;
