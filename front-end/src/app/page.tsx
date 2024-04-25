'use client';
import { Book } from "./components/table/columns";
import MainTable from "./components/table/table";
import NextTopLoader from 'nextjs-toploader';
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import axios from 'axios';

export default function Home() {
  const full = '/books';
  const empty = 'https://6628e9c554afcabd07376bca.mockapi.io/test'
  const [books, setBooks] = useState<Book[]>([]);
  const [api, setApi] = useState<string>(empty);
  const [loading, setLoading] = useState<boolean>(false);
  const [contentLength, setContentLength] = useState<nuber>(0)

  useEffect(() => {
    fetchData();
  }, [api]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(full);
	console.log(response.data);
      console.log(response, typeof response.headers['content-length'])
      setContentLength(Number(response.headers['content-length']))
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchDataClick = () => {
    setApi((prev: string) => ((prev === empty) ? full : empty));
    // setApi(full)
  };

  return (
    <main className="dark text-foreground bg-background">
      <section className='py-24 p-10 h-full'>
        <NextTopLoader />
        <div className='container'>
          <MainTable books={books}/>
          <Button className="mt-4" color="primary" onClick={handleFetchDataClick} isLoading={loading}>
            {loading ? 'Loading' : 'Fetch Data'}
          </Button>
          {
            loading &&
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 mt-4">
              <div className="h-1 bg-primary" style={{ width: '45%' }}></div>
            </div>
          }
        </div>
      </section>
    </main>
  );
}
