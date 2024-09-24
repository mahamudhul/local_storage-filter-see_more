import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getJobApplication } from '../../utility/localStorage';
import { Helmet } from 'react-helmet';

const Applied = () => {
    const jobs = useLoaderData();

    const [appliedJobs, setAppliedJobs] = useState([]);
    const [displayJobs, setDisplayJobs] = useState([]);

    // event handler
    const handleJobFilter = filter => {
        if (filter === 'all') {
            setDisplayJobs(appliedJobs)
        }
        else if (filter === 'remote') {
            const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
            setDisplayJobs(remoteJobs);
        }
        else if (filter === 'onsite') {
            const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
            setDisplayJobs(onsiteJobs);
        }
    }

    useEffect(() => {
        const storedJobIds = getJobApplication();
        if (jobs.length > 0) {

            // rules- 1
            const jobsApplied = jobs.filter(job => storedJobIds.includes(job.id));

            // rules- 2 

            // const jobsApplied = [];
            // for (const id of storedJobIds) {
            //     const job = jobs.find(job => job.id === id);
            //     if (job) {
            //         jobsApplied.push(job)
            //     }
            // }

            // console.log(jobs, storedJobIds, jobsApplied);
            setAppliedJobs(jobsApplied);
            setDisplayJobs(jobsApplied);

        }
    }, [jobs])
    // console.log(jobsApplied)

    return (
        <div>
            <Helmet>
                <title>Applied Jobs</title>
            </Helmet>
            <h2 className='text-4xl font-bold text-center my-20'>Applied Jobs</h2>

            {/* filter btn */}
            <div className='flex justify-end mb-10 mr-10'>
                <details className="dropdown">
                    <summary className="btn m-1">Filter</summary>
                    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li onClick={() => handleJobFilter('all')}><a>All</a></li>
                        <li onClick={() => handleJobFilter('remote')}><a>Remote</a></li>
                        <li onClick={() => handleJobFilter('onsite')}><a>On-site</a></li>
                    </ul>
                </details>
            </div>
            <div>
                {
                    displayJobs.map(job =>
                        <div key={job.id} className='flex-col gap-5'>
                            <div className='border border-slate-600 p-3'>
                                <p className='text-2xl'>{job.job_title}</p>
                                <p className='text-2xl'> <span className='font-bold'>Company: </span>{job.company_name}</p>
                                <p className='text-2xl'>{job.remote_or_onsite}</p>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Applied;