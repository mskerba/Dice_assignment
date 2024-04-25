'use client'
import { useState } from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue, Spinner} from "@nextui-org/react";
import { Book, columns } from "./columns";
import {useAsyncList} from "@react-stately/data";



export default function MainTable({ books }: { books: Book[] }) {
  const [isLoading, setIsLoading] = useState(true);



  return (
    <Table color="primary" selectionMode="multiple" selectionBehavior="replace"
        aria-label="Example static collection table"
        classNames={{
          base: "max-h-[520px] overflow-scroll-x",
          table: "min-h-[420px] ",
      }}>

        
        <TableHeader columns={columns} >
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
        </TableHeader>
        {
            (!books.length)?
            <TableBody emptyContent={"No rows to display."}>{[]}</TableBody> :
            <TableBody items={books}  >
            {(item:any) => (
              <TableRow key={item.id}>
                {(columnKey) => <TableCell >{getKeyValue(item, columnKey)}</TableCell>}
                </TableRow>
            )}
            </TableBody>


        }
    </Table>
  );
}
