import { imagePath } from '@/constants';
import { MovieApiResponse } from '@/types'
import { Star } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

const Card = ({ movie }: { movie: MovieApiResponse }) => {
   

  return (
    <div className="shadow-lg">
      <Link href={`/movies/${movie.title}/${movie.id}`}>
      <Image
        src={`${imagePath}${movie.poster_path}`}
        width={300}
        height={300}
        alt=""
        priority
        className="rounded-lg w-full"
      />
      </Link>
      <div className="px-2 my-3">
        <h1 className="text-primary text-xl font-semibold ">{movie.title}</h1>
        <div className="flex items-center justify-between my-2">
          <p>{movie.release_date}</p>
          <p className="flex gap-1 items-center">
            <Star className="text-orange-500"/> {movie.vote_average.toFixed(1)}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card