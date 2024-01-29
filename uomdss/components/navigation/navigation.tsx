"use client";

import React from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";
import { LazyMotion, domAnimation } from "framer-motion";

const Navigation = () => {
  return (
    <>
      <LazyMotion features={domAnimation} strict>
        <Navbar />
        <Sidebar />
      </LazyMotion>
    </>
  );
};

export default Navigation;
