import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {TextField, Container, Pagination, styled, AlertColor, Typography} from '@mui/material';
import BookTable from '../components/BookTable';
import Header from '../components/Header';
import {Loader} from "../components/Loader";
import SnackBar from "../components/SnackBars";

const SearchPageContainer = styled(Container)({
   marginTop: "30px",
})

const SearchPage: React.FC = () => {
    const [query, setQuery] = useState('');
    const [books, setBooks] = useState([]);
    const [page, setPage] = useState(1);
    const [avgSearchDuration, setAvgSearchDuration] = useState(0);
    const [searchDurations, setSearchDurations] = useState<number[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    
    const [openSnackbar, setOpenSnackbar] = useState<AlertColor | undefined>();
    const [snackbarText, setSnackbarText] = useState<string>("");
    
    const handleSearch = async (searchTerm: string) => {
        if (searchTerm.trim() === '') {
            setBooks([]);
            return;
        }
        setLoading(true)
        const startTime = Date.now();
        try {
            const response = await axios.get(`https://openlibrary.org/search.json`, {
                params: { q: searchTerm.toLowerCase(), page }
            });
            const endTime = Date.now();
            const duration = endTime - startTime;
            
            setSearchDurations((prev) => [...prev, duration]);
            setAvgSearchDuration(
                searchDurations.reduce((a, b) => a + b, duration) / (searchDurations.length + 1)
            );
            
            setBooks(response.data.docs);
            setLoading(false)
        } catch (error) {
            setOpenSnackbar("error");
            setSnackbarText('Error fetching books:' + error)
        }
    };
    
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleSearch(query);
        }, 1000);
        
        return () => clearTimeout(delayDebounceFn);
    }, [query, page]);
    
    const renderBookTable = ():React.ReactNode => {
        if(books.length === 0 && !loading){
            if(query.trim() !== ''){
            return (
                <Typography variant="h6" style={{ marginTop: '20px' }}>
                    No books found for the given search query.
                </Typography>
            )
            }else{
                return (
                    <Typography variant="h6" style={{ marginTop: '20px' }}>
                        Please, type search to find books.
                    </Typography>
                )
            }
        }
        return (
            <BookTable books={books} />
        )
    }
    
    return (
        <>
            <Header avgSearchDuration={avgSearchDuration} />
            <SearchPageContainer>
                {loading && <Loader/>}
                <TextField
                    label="Search for Books"
                    variant="outlined"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    fullWidth
                    style={{ marginBottom: '20px' }}
                />
                {renderBookTable()}
                <Pagination
                    count={10}
                    page={page}
                    onChange={(_, value) => setPage(value)}
                    style={{ marginTop: '20px' }}
                />
                <SnackBar
                    type={openSnackbar}
                    message={snackbarText}
                    handleClose={() => setOpenSnackbar(undefined)}
                />
            </SearchPageContainer>
        </>
    );
};

export default SearchPage;
