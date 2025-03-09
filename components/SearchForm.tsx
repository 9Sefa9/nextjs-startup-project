'use server'

import Form from 'next/form'
import { Search } from 'lucide-react';
import SearchFormReset from './SearchFormReset';
/*This is rendered on Server Side by using Form. Because:
* Prefetching
* Client Side Navigation on submission
* progressive enhancement
*/
function SearchForm({ query }: { query?: string }) {

    return (
        <Form action="/" scroll={false} className="search-form">
            <input
                name="query"
                defaultValue={query}
                className="search-input"
                placeholder="Search Startups"
            />
            <div className='flex gap-2'>
                {query && (<SearchFormReset />)}
                <button type="submit" className="search-btn text-white">
                    <Search className="size-50" />
                </button>
            </div>
        </Form>
    )
}

export default SearchForm