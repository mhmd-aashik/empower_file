import React from "react";
import VideoPlayer from "./VideoPlayer";

const VideoSction = () => {
  return (
    <section className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 px-8 gap-10 mt-8">
      <div className="flex justify-center flex-col items-center gap-10">
        <h3 className="md:text-4xl text-2xl  text-white font-bold font-spaceGrotesk text-center">
          Why be a Volunteer?
        </h3>

        <p className="text-xl md:font-semibold text-slate-400 text-center max-w-2xl">
          With more volunteers and more volunteer opportunities than any other
          service, VolunteerMatch is how good people and good causes get
          connected .
        </p>
      </div>
      <div className="mt-6 h-[200px] md:h-[300px] w-fit md:w-[50vh] mx-auto">
        <VideoPlayer/>
      </div>
    </section>
  );
};

export default VideoSction;
