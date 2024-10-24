import { movieTypes } from "@/components/types/type";
import Image from "next/image";
import Link from "next/link";

export const MovieCard = ({ movie }:{movie:movieTypes}) => {
    return (
      <Link href={`movie-details/${movie?.id}`} className="max-w-xs   rounded-lg shadow-lg bg-white dark:bg-gray-800 overflow-hidden">
        <Image
          width={200}
          height={300}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white truncate">
            {movie.title}
          </h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {movie.release_date}
          </p>
          <p className="mt-2 text-sm text-gray-700 dark:text-gray-300 line-clamp-3">
            {movie.overview}
          </p>
        </div>
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-sm text-gray-500 dark:text-gray-400">
            Rating: <strong>{movie.vote_average}</strong> / 10
          </span>
        </div>
      </Link>
    );
  };
  
   