import { FaBook } from 'react-icons/fa'

const RepoCard = ({repoDetails}) => {
    console.log(repoDetails)
    return (
        <div className="w-1/3 mb-2 -mx-2 text-gray-500">
            <div class="mx-6 my-2">
                <div className='p-4 border rounded-md border-neutral-200 h-[250px]'>
                    <h3 class="font-bold text-base mb-2 text-center">{repoDetails.name}</h3>
                    <p class="text-sm mb-6 h-[80px]">
                        {repoDetails.description}
                    </p>
                    <p className='flex items-center mb-2 text-sm'>
                        <FaBook className="mr-2"/>
                        {repoDetails.owner.login}
                    </p>
                    <div className='justify-end'>
                        <a href={repoDetails.html_url} target="_blank" rel="noreferrer">
                            View repository
                        </a>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default RepoCard