import React from 'react'

const SignUp = () => {
  return (
    <main className='ml-auto bg-red-200  px-10 py-10 mt-10 rounded-sm flex-shrink'>
      <form>
        <section className='flex flex-col gap-3'>
          <label htmlFor="name">Full name</label>
          <input className='px-2 py-3 rounded-md outline-none '
            placeholder='Deepak Prakash'
          />
          <label htmlFor="email">Email address</label>
          <input className='px-2 py-3 rounded-md outline-none '
            placeholder='deepak@gmail.com'
          />
          <label htmlFor="html">Profession</label>
          <input className='px-2 py-3 rounded-md outline-none '
            placeholder='Frontend Developer'
          />
          <label htmlFor="html">Address</label>
          <input className='px-2 py-3 rounded-md outline-none '
            placeholder='Wagholi'
          />

          <div className='flex gap-2'>
            <div className='flex flex-col gap-2'>

              <label htmlFor="html">Country Code</label>
              <input
                className='px-2 py-3 rounded-md outline-none '
                placeholder='+91(IND)'
              />

            </div>
            <div className='flex flex-col gap-2'>

              <label htmlFor="html">Mobile</label>
              <input className='px-2 py-3 rounded-md outline-none '
                placeholder='9808034832'
              />

            </div>
          </div>

          <div className='flex gap-2'>
            <div className='flex flex-col gap-2'>

              <label htmlFor="html">City</label>
              <input className='px-2 py-3 rounded-md outline-none '
                placeholder='Deepak Prakash'
              />
            </div>
            <div className='flex flex-col gap-2'>

              <label htmlFor="html">State</label>
              <input className='px-2 py-3 rounded-md outline-none '
                placeholder='Maharastra'
              />
            </div>

          </div>

          <button className='text-white mt-5 bg-red-500 rounded-md py-3'>
            Next
          </button>
        </section>
      </form>
    </main>
  )
}

export default SignUp