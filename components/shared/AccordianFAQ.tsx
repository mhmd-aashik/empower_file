import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordianFAQ() {
  return (
    <div>
      <h1 className="text-white font-bold text-3xl text-center pb-6">
        Frequently Asked Questions
      </h1>
      <Accordion type="single" collapsible>
        <AccordionItem
          value="item-1"
          className="border-blue-950 border-2 px-8 py-1 mt-2 rounded-lg"
        >
          <AccordionTrigger className="text-[20px] font-medium text-slate-200 ">
            What kind of volunteer opportunities do you offer ?
          </AccordionTrigger>
          <AccordionContent className="text-slate-400 text-[16px]">
            We offer a wide range of volunteer opportunities to suit different
            interests and skills. From community outreach programs to
            environmental initiatives, there&apos;s something for everyone. You
            can explore our current volunteer openings on our website or contact
            us directly for more information.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem
          value="item-2"
          className="border-blue-950 border-2 px-8 py-1 mt-2 rounded-lg"
        >
          <AccordionTrigger className="text-[20px] font-medium text-slate-200 ">
            Do I need any specific skills or experience to volunteer ?
          </AccordionTrigger>
          <AccordionContent className="text-slate-400 text-[16px]">
            Not necessarily! While some positions may require specific skills or
            experience, many of our volunteer opportunities are open to
            individuals of all backgrounds and skill levels. We provide training
            and support to help you succeed in your role.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-3"
          className="border-blue-950 border-2 px-8 py-1 mt-2 rounded-lg"
        >
          <AccordionTrigger className="text-[20px] font-medium text-slate-200 ">
            Can I volunteer remotely ?
          </AccordionTrigger>
          <AccordionContent className="text-slate-400 text-[16px]">
            Yes, we offer remote volunteer opportunities for those who are
            unable to volunteer in person. Whether you&apos;re interested in
            virtual mentoring, online research projects, or remote
            administrative tasks, there are plenty of ways to make a difference
            from the comfort of your own home.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-4"
          className="border-blue-950 border-2 px-8 py-1 mt-2 rounded-lg"
        >
          <AccordionTrigger className="text-[20px] font-medium text-slate-200 ">
            How much time do I need to commit as a volunteer ?
          </AccordionTrigger>
          <AccordionContent className="text-slate-400 text-[16px]">
            The time commitment varies depending on the volunteer role and your
            availability. Some opportunities may require a few hours a week,
            while others may be more intensive. We&apos;ll work with you to find
            a volunteer schedule that fits your needs and lifestyle.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-5"
          className="border-blue-950 border-2 px-8 py-1 mt-2 rounded-lg"
        >
          <AccordionTrigger className="text-[20px] font-medium text-slate-200 ">
            {" "}
            What are the benefits of volunteering with your organization ?
          </AccordionTrigger>
          <AccordionContent className="text-slate-400 text-[16px]">
            Volunteering with us is a rewarding experience that allows you to
            make a positive impact on your community or cause you care about. In
            addition to the satisfaction of giving back, volunteering can also
            provide opportunities for personal and professional growth,
            networking, and skill development.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-6"
          className="border-blue-950 border-2 px-8 py-1 mt-2 rounded-lg"
        >
          <AccordionTrigger className="text-[20px] font-medium text-slate-200 ">
            {" "}
            Is there an age requirement for volunteering ?
          </AccordionTrigger>
          <AccordionContent className="text-slate-400 text-[16px]">
            The age requirement varies depending on the volunteer opportunity.
            Some positions may be open to volunteers of all ages, while others
            may have specific age restrictions or require parental consent for
            minors. We&apos;ll provide guidance on age requirements for each
            volunteer opportunity.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-7"
          className="border-blue-950 border-2 px-8 py-1 mt-2 rounded-lg"
        >
          <AccordionTrigger className="text-[20px] font-medium text-slate-200 ">
            I have a busy schedule. Can I still volunteer ?
          </AccordionTrigger>
          <AccordionContent className="text-slate-400 text-[16px]">
            Absolutely! We understand that everyone has different commitments
            and schedules. We offer flexible volunteer opportunities that can
            accommodate your availability. Whether you have a few hours a week
            or only occasional free time, there&apos;s a volunteer role
            that&apos;s right for you.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem
          value="item-8"
          className="border-blue-950 border-2 px-8 py-1 mt-2 rounded-lg"
        >
          <AccordionTrigger className="text-[20px] font-medium text-slate-200 ">
            Do you provide volunteer orientation and training ?
          </AccordionTrigger>
          <AccordionContent className="text-slate-400 text-[16px]">
            Yes, we offer volunteer orientation and training sessions to ensure
            that you&apos;re equipped with the knowledge and skills needed to
            excel in your role. These sessions cover topics such as the
            organization&apos;s mission and values, volunteer responsibilities,
            and specific training related to your volunteer position.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
}
