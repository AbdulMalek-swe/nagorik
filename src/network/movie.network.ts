//  all movie show api 
export const fetchMovie = async ({page,query }:{page:number,query:string}) => {
  const url = query
    ? `${process.env.NEXT_PUBLIC_API_URL1}&query=${query}&page=${page}`
    : `${process.env.NEXT_PUBLIC_API_URL}?api_key=${process.env.NEXT_PUBLIC_API_KEY}&page=${page}`;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  // single movie show api 
export const fetchSingleMovie = async ({id}:{id:string}) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SINGLE_API_KEY}/${id}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  };
  