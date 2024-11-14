import React from 'react'
import Nav from '../components/Nav'
import '../App.css'

import axios from "axios"
import { useState } from 'react'

export default function BookInspect() {

   const [userInfo, SetUserInfo] = useState({
    description: "",
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    state: "",
    address:"",
    progress:"",
    zipNo: ""

   });

   const handleChange = (e) => {
    const { name, value } = e.target;
    SetUserInfo((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


    
    

    async function  handleSubmit(e){
      e.preventDefault()

      try{
        const response = await axios.post("https://powerhouse-backend.onrender.com/api/inspections/bookinspection", userInfo,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        alert("Your Details was submitted Successfully");
        console.log(response.data)

        
      }
      catch(error) {
        console.error(
          "Error Submtting data:",
          error.response?.data || error.message
        );
        alert("Failed to Submit Data");
      }

    }

  return (
    <div>
        <Nav/>
        <form onSubmit={handleSubmit} className='mt-32'>
      <div className="space-y-12 bookInpect">
      <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base/7 font-semibold text-gray-900">Site Inspection Form</h2>
      <p className="mt-1 text-sm/6 text-gray-600">This information will be used strictly by Powerhouse for inspections  and further Site work and will be safely stored in our customer database</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        

        <div className="col-span-full">
          <label for="about" className="block text-sm/6 font-medium text-gray-900">Describe Your House, Estate and its properties</label>
          <div className="mt-2">
            <textarea onChange={handleChange} value={userInfo.description} id="about" name="description" rows="3" className="block w-full rounded-md border-0 px-5 outline-none py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-red-600 sm:text-sm/6"></textarea>
          </div>
          <p className="mt-3 text-sm/6 text-gray-600">Describe the type of property</p>
        </div>

        <div className="col-span-full">
          <label for="cover-photo" className="block text-sm/6 font-medium text-gray-900">Provide us an exterior image view of your property</label>
          <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
            <div className="text-center">
              <svg className="mx-auto h-12 w-12 text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" data-slot="icon">
                <path fill-rule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0 1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3 16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0 0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3 16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z" clip-rule="evenodd" />
              </svg>
              <div className="mt-4 flex text-sm/6 text-gray-600">
                <label for="file-upload" className="relative cursor-pointer rounded-md bg-white font-semibold text-red-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-600 focus-within:ring-offset-2 hover:text-red-500">
                  <span>Upload a file</span>
                  <input id="file-upload" name="file-upload" type="file" className="sr-only"/>
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs/5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base/7 font-semibold text-gray-900">Personal Information</h2>
      <p className="mt-1 text-sm/6 text-gray-600">Use a permanent address where you can receive mail.</p>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <label for="first-name" className="block text-sm/6 font-medium text-gray-900">First name</label>
          <div className="mt-2">
            <input type="text" name='firstName' onChange={handleChange } value={userInfo.firstName} id="first-name" autocomplete="given-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 outline-none px-5  sm:text-sm/6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label for="last-name" className="block text-sm/6 font-medium text-gray-900">Last name</label>
          <div className="mt-2">
            <input type="text" name='lastName' onChange={handleChange } value={userInfo.lastName} autocomplete="family-name" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-5 outline-none sm:text-sm/6"/>
          </div>
        </div>

        <div className="sm:col-span-4">
          <label for="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" name='email' onChange={handleChange } value={userInfo.email} type="email" autocomplete="email" className="block w-full rounded-md border-0 py-1.5  px-5 outline-none text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  sm:text-sm/6"/>
          </div>
        </div>

        <div className="sm:col-span-3">
          <label for="country" className="block text-sm/6 font-medium text-gray-900">Country</label>
          <div className="mt-2">
            <select onChange={handleChange } id="country" value={userInfo.country} name="country" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 px-5 outline-none sm:max-w-xs sm:text-sm/6">
              <option>----</option>
              <option>Nigeria</option>
              <option>United States</option>
              <option>Canada</option>
              <option>Togo</option>
              <option>Mexico</option>
              <option>Benin</option>
              <option>Ghana</option>
              <option>South Africa</option>
              <option>Australia</option>
              <option>Japan</option>
              <option>Germany</option>
              <option>Italy</option>
            </select>
          </div>
        </div>

        <div className="col-span-full">
          <label for="street-address" className="block text-sm/6 font-medium text-gray-900">Street address</label>
          <div className="mt-2">
            <input type="text" name='address' onChange={handleChange } value={userInfo.address} id="street-address" autocomplete="street-address" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400  outline-none px-5 sm:text-sm/6"/>
          </div>
        </div>

        <div className="sm:col-span-2 sm:col-start-1">
          <label className="block text-sm/6 font-medium text-gray-900">State</label>
          <div className="mt-2">
            <input 
            type="text" 
            name='state' 
            onChange={handleChange } 
            value={userInfo.state} 
            id="city" 
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-5 outline-none sm:text-sm/6"/>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label for="postal-code" className="block text-sm/6 font-medium text-gray-900">ZIP / Postal code</label>
          <div className="mt-2">
            <input type = "number" name= "zipNo" onChange={handleChange} value={userInfo.zipNo}   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-5 outline-none  sm:text-sm/6"/>
          </div>
        </div>
        <div className="sm:col-span-2">
          <label  className="block text-sm/6 font-medium text-gray-900">Readiness(In percentage)</label>
          <div className="mt-2">
            <input type = "number" name= "progress" onChange={handleChange} placeholder='Describe how Ready you are' value={userInfo.progress}   className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 px-5 outline-none  sm:text-sm/6"/>
          </div>
        </div>
      </div>
    </div>

    <div className="border-b border-gray-900/10 pb-12">
      <h2 className="text-base/7 font-semibold text-gray-900">Notifications</h2>
      <p className="mt-1 text-sm/6 text-gray-600">We'll always let you know about important changes, but you pick what else you want to hear about.</p>

      <div className="mt-10 space-y-10">
        <fieldset>
          <legend className="text-sm/6 font-semibold text-gray-900">By Email</legend>
          <div className="mt-6 space-y-6">
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input id="comments" name="comments" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"/>
              </div>
              <div className="text-sm/6">
                <label for="comments" className="font-medium text-gray-900">New Product</label>
                <p className="text-gray-500">Get notified when We have new products and Technologies</p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input id="candidates" name="candidates" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"/>
              </div>
              <div className="text-sm/6">
                <label for="candidates" className="font-medium text-gray-900">Offers and Promo</label>
                <p className="text-gray-500">Get notified when we have promotions and discounts</p>
              </div>
            </div>
            <div className="relative flex gap-x-3">
              <div className="flex h-6 items-center">
                <input id="offers" name="offers" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-600"/>
              </div>
              <div className="text-sm/6">
                <label for="offers" className="font-medium text-gray-900">Seminars</label>
                <p className="text-gray-500">Get notified on all our up coming Seminars</p>
              </div>
            </div>
          </div>
        </fieldset>
        
      </div>
    </div>
  </div>

  <div className="mt-6 flex items-center justify-end gap-x-6 mb-10">
    <button type="submit" className="bookButt rounded-md bg-red-500 px-3  py-2 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">Book Inspection</button>
  </div>
</form>
      
    </div>
  )
}
