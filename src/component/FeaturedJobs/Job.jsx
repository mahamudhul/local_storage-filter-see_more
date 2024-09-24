import React from 'react';
import { CiLocationOn } from "react-icons/ci";
import { MdAttachMoney } from "react-icons/md";
import { Link } from 'react-router-dom';



const Job = ({ job }) => {
    const { id, logo, company_name, job_title, remote_or_onsite, job_type, location, salary } = job;
    // console.log(logo);
    return (
        <div>
            <div className="card card-compact bg-base-100shadow-xl">
                <div className="card-body border border-gray-300 rounded-xl">
                    <h2 className="card-title text-orange-800 text-3xl">{company_name}</h2>
                    <p>{job_title}</p>
                    <div className='flex gap-3'>
                        <button className='px-2 py-1 border border-gray-400 rounded-xl'>{remote_or_onsite}</button>
                        <button className='px-2 py-1 border border-gray-400 rounded-xl'>{job_type}</button>
                    </div>
                    <div className='grid grid-cols-2 mb-4'>
                        <div className='flex items-center'>
                            <CiLocationOn />
                            <p>{location}</p>
                        </div>
                        <div className='flex items-center'>
                            <MdAttachMoney />
                            <p>{salary}</p>
                        </div>
                    </div>
                    <div className="card-actions ">
                        <Link to={`/job/${id}`}>
                            <button className="px-3 py-2 border border-gray-950 bg-emerald-500 rounded-xl">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;