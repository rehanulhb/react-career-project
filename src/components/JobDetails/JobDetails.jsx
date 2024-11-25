import { MdLocationOn, MdLocalPhone, MdOutlineEmail } from "react-icons/md";
import { useLoaderData, useParams } from "react-router-dom";
import { PiSubtitles } from "react-icons/pi";
import { AiOutlineDollar } from "react-icons/ai";

const JobDetails = () => {
    const jobs = useLoaderData();
    const {id} =  useParams();
    const idInt = parseInt(id);

    const job = jobs.find(job => job.id === idInt)

    
    

    return (
        <div>
            
            <div className="grid md:grid-cols-4 ">
                <div className="border md:col-span-3 px-3">
                    
                    <h2>Job details of: {job.job_title}</h2>
                    <br />
                    <p>Company name: {job.company_name}</p>
                    <br />
                    <p><span className="text-xl">Job description: </span> {job.job_description}</p>
                    <br />
                    <p><span className="text-xl justify-around">Job responsibility: </span>{job. job_responsibility}</p>
                    <br />
                    <p><span className="text-xl justify-around">Educational requirements: </span>{job.educational_requirements}</p>
                    <br />
                    <p className="text-2xl">Experiences:</p>
                    
                    <p>{job.experiences}</p>
                    <br />
                    
                </div>
                <div className="border px-4 bg-gradient-to-r from-cyan-200 to-blue-100">
                       <h2 className="text-2xl text-center">Job Details</h2> 
                       <hr />
                       <div className="mt-4 ">
                            <h2 className="flex mr-4"><PiSubtitles className="text-2xl mr-2"></PiSubtitles>{job.job_title}</h2>
                            <h2 className="flex"><AiOutlineDollar className="text-2xl mr-2"></AiOutlineDollar>{job.salary}</h2>
                        </div>
                        <hr />
                       <div className="mt-4 f ">
                            <h2 className="text-center text-2xl">Contact information</h2>
                            <hr />
                            <br />
                            <h2 className="flex mr-4"><MdLocationOn className="text-2xl mr-2"></MdLocationOn>{job.location}</h2>
                            <br />
                            <p className="flex mr-4"><MdLocalPhone className="text-2xl mr-2"></MdLocalPhone>{job.contact_information.phone}</p>
                            <br />
                            <p className="flex mr-4"><MdOutlineEmail className="text-2xl mr-2"></MdOutlineEmail>{job.contact_information.email}</p>
                        </div>
                        <br />
                       <button className="btn btn-primary w-full">Apply Now</button>
                </div>

            </div>
        </div>
    );
};

export default JobDetails;