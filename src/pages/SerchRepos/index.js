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

    const sortOptions = [
        { label: "Best match", sort: "" },
        { label: "Most stars", sort: "stars" },
        { label: "Fewest stars", sort: "stars", order: "asc" },
        { label: "Most forks", sort: "forks" },
        { label: "Fewest forks", sort: "forks", order: "asc" },
    ];

    return ( 
        <>
            <div className="w-full p-6 bg-[#0D1117] flex justify-center flex-row">
                <FaGithub color='white' size='50' className='mr-4'/>
                <input
                    className='h-[50px] w-[400px] p-2 rounded-md mr-2'
                    type="text"
                    placeholder="Search for repositories"
                    value={searchInput}
                    onChange={handleChange}
                />
                <select className='h-[50px] w-[150px] p-2 rounded-md'>
                    {sortOptions.map(option => (
                        <option key={option.id}>
                          {option.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className='flex flex-wrap mx-40 my-8'>
                {searchResults && searchResults.length > 0 ?
                    searchResults.map(repo => (
                        <RepoCard repoDetails={repo} key={repo.id} />
                    ))
                : 
                    <div className='p-4 text-lg'>No results, search for repositories...</div>
                }
            </div>
        </>
    )
}

export default SearchPage