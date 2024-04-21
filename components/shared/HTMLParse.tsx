"use client";
import React from "react";
import { parse } from "node-html-parser";

const HTMLParse = ({ html }: { html: string }) => {
  const root = parse(html).text;

  return <p className="p-medium-16 text-slate-500 lg:p-regular-18">{root}</p>;
};

export default HTMLParse;
