import { useState } from 'react'
import { FaBook, FaGithubSquare } from 'react-icons/fa'

const RepoCard = ({repoDetails}) => {
    const [viewMoreDetails, setViewMoreDetails] = useState(false);

    const handleChangeActive = () => {
        setViewMoreDetails((prevState) => {
          return !prevState;
        });
      };

    console.log(repoDetails)
    return (
        <div className="w-1/3 mb-2 -mx-2 text-gray-500">
            <div class="mx-6 my-2">
                <div className='p-4 border rounded-md border-neutral-200 max-h-[400px]'>
                    <h3 class="font-bold text-base mb-2 text-center">{repoDetails.name}</h3>
                    <p class="text-sm mb-6 h-[80px]">
                        {repoDetails.description}
                    </p>
                    <p className='flex items-center mb-2 text-sm'>
                        <FaBook className="mr-2"/>
                        {repoDetails.owner.login}
                    </p>
                    <p className='flex items-center mb-2 text-sm'>
                       <FaGithubSquare className="mr-2"/>
                       <button onClick={handleChangeActive}>View more details</button> 
                    </p>
                    {viewMoreDetails && (
                        <div>test for state</div>
                    )}
                    <div>
                        View repository on {' '} 
                        <a href={repoDetails.html_url} target="_blank" rel="noreferrer" className='text-sky-600'>
                            GitHub
                        </a>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default RepoCard