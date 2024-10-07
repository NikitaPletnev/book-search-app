import React from 'react';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@mui/material';

interface Book {
    title: string;
    author_name?: string[];
    edition_count: number;
    first_publish_year: number;
}

interface BookTableProps {
    books: Book[];
}

const BookTable: React.FC<BookTableProps> = ({ books }) => {
    
    return (
        <TableContainer component={Paper} sx={{
            height: "calc(100vh - 250px)",
        }}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Title</TableCell>
                        <TableCell>Author</TableCell>
                        <TableCell>Edition Count</TableCell>
                        <TableCell>First Publish Year</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {books.map((book, index) => (
                        <TableRow key={index}>
                            <TableCell>{book.title}</TableCell>
                            <TableCell>{book.author_name?.join(', ')}</TableCell>
                            <TableCell>{book.edition_count}</TableCell>
                            <TableCell>{book.first_publish_year}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BookTable;
