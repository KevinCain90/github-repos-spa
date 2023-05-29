import { useState, useEffect } from 'react';
import getRepos from '../../services/getRepos';
import RepoCard from '../../components/RepoCard'; 
import { FaGithub } from 'react-icons/fa'

const SearchPage = () => {
    const [searchInput, setSearchInput] = useState("");
    const [searchResults, setSearchResults] = useState("");

    const handleChange = (e) => {
      setSearchInput(e.target.value)
    }

    useEffect(() => {
        getRepos(searchInput).then(data => {
            setSearchResults(data);
        });
    }, [searchInput]);

    return ( 
        <>
            <div className="w-full p-6 bg-[#0D1117] flex justify-center flex-row">
                <FaGithub color='white' size='50' className='mr-4'/>
                <input
                    className='h-[50px] w-[400px] p-2 rounded-md'
                    type="text"
                    placeholder="Search for repositories"
                    value={searchInput}
                    onChange={handleChange}
                />
            </div>
            <div className='container grid grid-cols-3 gap-4 m-auto my-8'>
                {searchResults && searchResults.length > 0 ?
                    searchResults.map(repo => (
                        <RepoCard repoDetails={repo} />
                    ))
                : 
                    <div className='p-4 text-lg'>No results, search for repositories...</div>
                }
            </div>
        </>
    )
}

export default SearchPage