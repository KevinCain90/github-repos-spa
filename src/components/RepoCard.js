import { useState, useEffect } from 'react'
import getReadme from '../services/getReadme';
import { FaBook, FaGithubSquare } from 'react-icons/fa'

const RepoCard = ({repoDetails}) => {
    const [viewMoreDetails, setViewMoreDetails] = useState(false);
    const [readme, setReadme] = useState("");

    useEffect(() => {
        getReadme(repoDetails).then(data => {
            setReadme(data);
        })
    }, [repoDetails]);

    const handleChangeActive = () => {
        setViewMoreDetails((prevState) => {
            return !prevState;
        });
    };

    return (
        <div className="w-1/3 mb-2 -mx-2 text-gray-500">
            <div class="mx-6 my-2">
                <div className='p-4 border rounded-md border-neutral-200 max-h-[400px]'>
                    <a href={repoDetails.owner.html_url}>
                        <h3 class="font-bold text-base mb-2 text-center text-sky-600">
                            {repoDetails.name}
                        </h3>
                    </a>
                    <p class="text-sm mb-6 h-[80px]">
                        {repoDetails.description}
                    </p>
                    <p className='flex items-center mb-2 text-sm'>
                        <FaBook className="mr-2"/>
                        {repoDetails.owner.login}
                    </p>
                    <p className='flex items-center mb-2 text-sm'>
                        <FaGithubSquare className="mr-2"/>
                        <a href={repoDetails.html_url} target="_blank" rel="noreferrer" className='text-sky-600'>
                            Repository link
                        </a>
                    </p>
                    <p className='mb-2 text-sm'>
                       <button onClick={handleChangeActive}>Click here to view more details</button> 
                    </p>
                    {viewMoreDetails && (
                        <div className='flex flex-col mb-2 text-sm'>
                            <p>
                                <b>Forks:</b> {repoDetails.forks}
                            </p>
                            <p>
                             <b>Likes:</b> {repoDetails.watchers}
                            </p>
                            <p>
                                <b>Stars:</b> {repoDetails.stargazers_count}
                            </p>
                            <p className='mb-4'>
                                <b>Issues:</b> {repoDetails.open_issues_count}
                            </p>
                            <p>
                               View readme in modal by clicking here
                            </p>
                        </div>
                    )}
                </div>
            </div>
           
        </div>
    )
}

export default RepoCard