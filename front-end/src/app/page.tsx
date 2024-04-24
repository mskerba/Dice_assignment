'use client';
import { Book } from "./components/table/columns";
import MainTable from "./components/table/table";
import NextTopLoader from 'nextjs-toploader';
import { useEffect, useState } from "react";
import { Button } from "@nextui-org/react";
import axios from 'axios';

export default function Home() {
  const full = 'https://6628e9c554afcabd07376bca.mockapi.io/assignement/books';
  const empty = 'https://6628e9c554afcabd07376bca.mockapi.io/test'
  const [books, setBooks] = useState<Book[]>([]);
  const [api, setApi] = useState<string>(empty);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, [api]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(api);
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFetchDataClick = () => {
    setApi((prev: string) => ((prev === empty) ? full : empty));
  };

  return (
    <main className="dark text-foreground bg-background">
      <section className='py-24 p-10 h-full'>
        <NextTopLoader />
        <div className='container'>
          <MainTable books={books}/>
          <Button color="primary" onClick={handleFetchDataClick} isLoading={loading}>
            {loading ? 'Loading' : 'Fetch Data'}
          </Button>
        </div>
      </section>
    </main>
  );
}
