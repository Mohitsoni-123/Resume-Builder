import React from 'react'
import { FaBriefcase, FaFolder, FaGlobe, FaLinkedin, FaMailchimp, FaMap, FaPhone, FaUser } from 'react-icons/fa6'

function PersonalInfoForm({data, onChange}) {
    const handleChange = (field, value)=>{
        onChange({...data, [field]:value})
    }

    const field = [
        {key: "fullName", label: "Full Name", icon: FaUser, type: "text", required: true},
        {key: "email", label: "Email Address", icon: FaMailchimp, type: "email", required: true},
        {key: "phone", label: "Phone Number", icon: FaPhone, type: "tel"},
        {key: "location", label: "Location", icon: FaMap, type: "text"},
        {key: "profession", label: "Profession", icon: FaBriefcase, type: "text"},
        {key: "linkedin", label: "LinkedIn Profile", icon: FaLinkedin, type: "url"},
        {key: "website", label: "Personal Website", icon: FaGlobe, type: "url"},
    ]
  return (
    <div className='px-4 py-4'>
      <h3 className='text-lg font-semibold text-gray-900'>Personal Information</h3>
      <p className='text-sm text-gray-600'>Get Started with the personal information</p>

      <div className='flex items-center gap-2'>
        <label>
            {
                data.image ? (
                    <img src={typeof data.image==='string' ? data.image : URL.createObjectURL(data.image)} alt="user-image" className='w-16 h-16 rounded-full object-cover mt-5 ring-slate-300 hover:opacity-80'/>
                ) : (
                    <div className='inline-flex items-center gap-2 mt-2 cursor-pointer text-slate-600 hover:text-slate-800'>
                        <FaUser className='size-10 p-2.5 border rounded-full'/>
                        upload user image
                    </div>
                )
            }
            <input type='file' accept='image.jpeg, image.png' className='hidden' onChange={(e)=>handleChange("image", e.target.files[0])} />
        </label>

        {
            typeof data.image==='object' && (
                <div>

                </div>
            )
        }
      </div>

        {
            field.map((field)=>{
                const Icon = field.icon;
                return (
                    <div key={field.key} className='space-y-1 mt-5'>
                        <label className='flex items-center gap-2 text-sm font-medium text-gray-600'>
                            <Icon className='size-4'/>
                            {field.label}
                            {field.required && <span className='text-red-500'>*</span>}
                        </label>
                        <input type={field.type} value={data[field.key] || ""} onChange={(e)=> handleChange(field.key, e.target.value)} className='mt-1 w-full px-3 py-2 border border-gray-300 rounded-lg outline-none focus:ring focus:ring-blue-500 focus:border-blue-500 transition-colors text-sm' placeholder={`Enter your ${field.label.toLowerCase()}`} required={field.required}/>
                    </div>
                )
            })
        }
    </div>
  )
}

export default PersonalInfoForm