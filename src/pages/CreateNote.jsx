import React from 'react'

const CreateNote = () => {
  return (
    <div className=' h-screen bg-gray-900 flex flex-col gap-8 items-center justify-center'>
      <div className="backbtn absolute left-9 top-9 text-white"> <button>Back</button> </div>
      <h1>Create Note</h1>
      <input type="text" id="" placeholder='Enter Note Title' className='h-[40px] text-center w-[400px] rounded-xl' required/>
      <textarea id="" placeholder='Enter Note' className='text-center w-[400px] rounded-xl' cols={10} rows={10}></textarea>
      <button className='border-solid border p-4 border-white rounded-xl text-white'>Create</button>
    </div>
  )
}

export default CreateNote