import React, { useEffect, useState } from 'react';
import Job from './Job';

const FeaturedJobs = () => {
    const [jobs, setJobs] = useState([]);
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])
    return (
        <div className='my-20'>
            <div className=' text-center'>
                <h1 className='text-5xl'>Featured Jobs list</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid grid-cols-3 md:grid-cols-2 gap-6 mt-5 '>
                {
                    jobs.slice(0, dataLength).map(job => <Job
                        key={job.id}
                        job={job}
                    ></Job>)
                }
            </div>
            <div className='text-center mt-5'>
                <div className={dataLength == jobs.length ? 'hidden' : ''}>
                    <button className='px-3 py-2 border border-gray-950 bg-emerald-500 rounded-xl' onClick={() => setDataLength(jobs.length)}>See all</button>
                </div>
            </div>
        </div >
    );
};

export default FeaturedJobs;