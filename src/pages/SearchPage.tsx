import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TextField, Container, Pagination } from '@mui/material';
import BookTable from '../components/BookTable';
import Header from '../components/Header';

const SearchPage: React.FC = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [avgSearchDuration, setAvgSearchDuration] = useState(0);
    const [searchDurations, setSearchDurations] = useState<number[]>([]);
    
    const handleSearch = async (searchTerm: string) => {
        if (searchTerm.trim() === '') {
            setBooks([]);
            return;
        }
        
        const startTime = Date.now();
        try {
            const response = await axios.get(`https://openlibrary.org/search.json`, {
                params: { q: searchTerm, page }
            });
            const endTime = Date.now();
            const duration = endTime - startTime;
            
            setSearchDurations((prev) => [...prev, duration]);
            setAvgSearchDuration(
                searchDurations.reduce((a, b) => a + b, duration) / (searchDurations.length + 1)
            );
            
            setBooks(response.data.docs);
        } catch (error) {
            console.error('Error fetching books:', error);
        }
    };
    
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleSearch(query);
        }, 500); // debounce for 500ms
        
        return () => clearTimeout(delayDebounceFn);
    }, [query, page]);
    
    return (
        <div>
            <Header avgSearchDuration={avgSearchDuration} />
            <Container>
                <TextField
                    label="Search for Books"
                    variant="outlined"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    fullWidth
                    style={{ marginBottom: '20px' }}
                />
                <BookTable books={books} />
                <Pagination
                    count={10}
                    page={page}
                    onChange={(_, value) => setPage(value)}
                    style={{ marginTop: '20px' }}
                />
            </Container>
        </div>
    );
};

export default SearchPage;
