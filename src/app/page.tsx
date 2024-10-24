"use client";
import React, {   useState } from "react";
import { fetchMovie } from "@/network/movie.network";
import { useQuery } from "@tanstack/react-query"; 
import { MovieCard } from "@/components/Card/Card";
import { Toastify } from "@/components/Toastify/Index";
import { MovieCardSkeleton } from "@/components/Card/CardSkeleton";
import Pagination from "@/components/pagination/Pagination";
import { movieTypes } from "@/components/types/type";

const Movie = () => { 
  const [page, setPage] = useState<number>(1);
  const [query, setQuery] = useState<string>("");
  const [text, setText] = useState<string>("");
  // fetch movie
  const { data, error, isLoading } = useQuery({
    queryKey: ["movies", page,query],
    queryFn: () => fetchMovie({ page,query }),
  });
  console.log(data);
  // change page function here
  const handlePageChange = (newPage: number|string) => {
    if (newPage === "...") {
      setPage(Math.ceil(data?.total_pages / 2));
      return;
    } else if (newPage === " ...") {
      setPage(1); 
      return;
    } else if (newPage === "... ") {
      setPage(Math.ceil(data?.total_pages));
      return;
    } else {
      setPage(Number(newPage));
    }
  };
  // error show in toastify
  if (error) {
    Toastify.Error(error?.message);
  }
 
  // loading  show skeleton of movie card
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {Array.from({ length: 20 }).map((_, index) => (
          <MovieCardSkeleton key={index} />
        ))}
      </div>
    );
  }
  return (
    <div className="container mx-auto  ">
     <div className="flex items-center py-5">
         <input
            type="text"
            placeholder="Search movie..."
            className="text-black py-2 px-1  rounded-l-md outline-none w-full"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
         <button className="bg-blue-500 py-2 rounded-r-md px-4 font-bold "  onClick={()=>setQuery(text)}>Search</button>
  
     </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 items-center place-content-center justify-center">
        {data?.results?.map((movie: movieTypes) => (
          <MovieCard movie={movie} key={movie?.id} />
        ))}
      </div>
      <Pagination
      activePage  = {data?.page}
        page={page} 
        totalPage={data?.total_pages}
        handleChange={handlePageChange}
      />
    </div>
  );
};

export default Movie;
