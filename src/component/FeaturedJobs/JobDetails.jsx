import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import { MdAttachMoney } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { saveJobApplication } from '../../utility/localStorage';

const JobDetails = () => {
    const jobs = useLoaderData();
    const { id } = useParams();
    const idIn = parseInt(id);
    // console.log(jobs, id)

    const job = jobs.find(job => job.id === idIn);
    // console.log(job)

    const { job_description, job_responsibility, educational_requirements, experiences, salary, job_title, contact_information } = job;

    // console.log(contact_information)


    const notify = () => {
        saveJobApplication(idIn);
        toast("You have applied successfully");
    }

    return (
        <div>
            <h1 className='my-20 text-4xl text-slate-800'>Jobs Details</h1>
            <div className='grid grid-cols-4 gap-5'>
                <div className='col-span-3 space-y-3'>
                    <p><span className='font-bold'>Job Description: </span><span>{job_description}</span></p>

                    <p><span className='font-bold'>Job Responsibility: </span>{job_responsibility}</p>

                    <p><span className='font-bold'>Educational Requirements: </span>{educational_requirements}</p>

                    <p><span className='font-bold'>Experiences: </span>{experiences}</p>
                </div>
                <div>
                    <h1>
                        Job Details
                    </h1>
                    <hr className="border-0 h-[1px] bg-black w-3/4  my-4" />
                    <div className='flex items-center'>
                        <MdAttachMoney />
                        <p><span className='font-bold'>Salary: </span> {salary}</p>
                    </div>
                    <div className='mb-10'>
                        <h1><span className='font-bold'>Job Title: </span> {job_title}</h1>
                    </div>


                    {/* Right side */}
                    <div>
                        <p><span className='font-bold'>Phone: </span>{contact_information.phone}</p>
                        <p><span className='font-bold'>Email: </span> {contact_information.email}</p>
                        <p><span className='font-bold'>Address: </span> {contact_information.address}</p>

                        <Link ><button onClick={notify} className="px-3 py-2 mt-5 border border-gray-950 bg-emerald-500 rounded-xl">Apply Now</button></Link>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;