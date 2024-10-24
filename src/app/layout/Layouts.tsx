"use client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { ToastContainer } from "react-toastify";

const Layouts = ({ children }: { children: React.ReactNode }) => {
    const queryClient = new QueryClient();
  return   <QueryClientProvider client={queryClient}>  {children}  <ToastContainer /></QueryClientProvider>
};

export default Layouts;
