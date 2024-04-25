'use client';
import { Book } from "./components/table/columns";
import MainTable from "./components/table/table";
import NextTopLoader from 'nextjs-toploader';
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import axios from 'axios';

let x;
export default function Home() {
  const full = 'http://localhost:3004/books';
  const empty = 'https://6628e9c554afcabd07376bca.mockapi.io/test'
  const [books, setBooks] = useState<Book[]>([]);
  const [api, setApi] = useState<string>(empty);
  const [loading, setLoading] = useState<boolean>(false);
  const [contentLength, setContentLength] = useState<number>(0)
  const [percentLoding, setPercentLoding] = useState(0)

  useEffect(() => {
    fetchData();
  }, [api]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(api, {
        onDownloadProgress: (progressEvent:any) => {
          const loaded = progressEvent.loaded;
          const total = progressEvent.total;
          const percent = (loaded / total) * 100;
          setPercentLoding(percent);
        }
      });
      setBooks(response.data);

    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchDataClick = () => {
    setApi(full)
  };

  return (
    <main className="dark text-foreground bg-background h-lvh " style={{ backgroundColor: "black" }}>
      <section className='section py-24 p-10  h-lvh'>
        <NextTopLoader />
        <div className='container'>
          <MainTable books={books}/>
          <Button className="mt-4" color="primary" onClick={handleFetchDataClick} isLoading={loading}>
            {loading ? 'Loading' : 'Fetch Data'}
          </Button>
          {
            loading &&
            <div className="h-1 w-full bg-neutral-200 dark:bg-neutral-600 mt-4">
              <div className="h-1 bg-primary" style={{ width: `${percentLoding}%` }}></div>
            </div>
          }
        </div>
      </section>
    </main>
  );
}
