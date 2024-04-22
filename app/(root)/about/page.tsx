import React from "react";

const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-slate-500 pb-4">
            About Us
          </h1>
          <p className="font-normal text-base leading-6 text-slate-500 ">
            At Volunteer Sri Lanka, we're dedicated to making a positive impact
            in communities across this beautiful island nation. Our mission is
            simple yet powerful: to connect passionate volunteers like you with
            meaningful opportunities to contribute to the well-being and
            development of Sri Lanka.
          </p>
        </div>
        <div className="w-full lg:w-8/12 ">
          <img
            className="w-full h-full"
            src="/assets/group/sc.png"
            alt="A group of People"
          />
        </div>
      </div>

      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-slate-500 pb-4">
            Our Story
          </h1>
          <p className="font-normal text-base leading-6 text-slate-500 ">
            Founded by a group of local activists and international volunteers,
            our organization emerged from a shared belief in the transformative
            power of volunteerism. With firsthand experience of the challenges
            faced by communities in Sri Lanka, we set out to create a platform
            that fosters sustainable change through grassroots initiatives.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
            <div className="p-4 pb-6 flex justify-center flex-col items-center ">
              <img
                className="md:block hidden h-36 w-36 object-cover object-top"
                src="/assets/group/Aashik.jpg"
                alt="Liam featued Img"
              />
              <img
                className="md:hidden block"
                src="/assets/group/Aashik.jpg"
                alt="Liam featued Img"
              />
              <p className="font-medium text-xl uppercase leading-5  mt-4 text-white">
                Aashik
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden h-36 w-36"
                src="/assets/group/ij.jpg"
                alt="Alexa featured Img"
              />
              <img
                className="md:hidden block"
                src="/assets/group/ij.jpg"
                alt="Alexa featured Img"
              />
              <p className="font-medium text-xl leading-5 text-white mt-4">
                IJLAL
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden h-36 w-36 object-cover"
                src="/assets/group/ch.jpeg"
                alt="Olivia featured Img"
              />
              <img
                className="md:hidden block "
                src="/assets/group/ch.jpeg"
                alt="Olivia featured Img"
              />
              <p className="font-medium text-xl leading-5 uppercase text-white mt-4">
                Chathuri
              </p>
            </div>
            <div className="p-4 pb-6 flex justify-center flex-col items-center">
              <img
                className="md:block hidden h-36 w-36"
                src="/assets/group/ha.jpeg"
                alt="Liam featued Img"
              />
              <img
                className="md:hidden block"
                src="/assets/group/ha.jpeg"
                alt="Liam featued Img"
              />
              <p className="font-medium text-xl uppercase leading-5 mt-4 text-white">
                harsha
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
