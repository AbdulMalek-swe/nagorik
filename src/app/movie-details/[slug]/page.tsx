"use client"
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import {   fetchSingleMovie } from '@/network/movie.network';
import { MovieCardSkeleton } from '@/components/Card/CardSkeleton';
import Image from 'next/image';

const MovieDetails = ({ params }: { params: { slug: string } }) => {
  return (
    <div>
      <MovieDetailss movieId={params?.slug}/>
    </div>
 
);
};

export default MovieDetails; 

 

const MovieDetailss = ({ movieId}: { movieId: string }) => {
    const { data, error, isLoading } = useQuery({
    queryKey: ["movies",movieId ],
    queryFn:()=> fetchSingleMovie({id:movieId}),
  });

  if (isLoading) {
    return  <MovieCardSkeleton/>
  }

  if (error) {
    return <p className="text-red-500 text-center">Error: {error.message}</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <Image
          height={200}
           width={300}
          src={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
          alt={data.title}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="md:ml-4">
          <h2 className="text-2xl font-bold">{data.title}</h2>
          <p className="text-gray-700">{data.release_date}</p>
          <p className="mt-2">{data.overview}</p>
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Genres:</h3>
            <ul className="flex gap-2">
              {data.genres.map((genre: { id: number; name: string }) => (
                <li key={genre.id} className="bg-gray-200 px-2 py-1 rounded-full">
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

 