import React from 'react'

const App = () => {
  return (
    <div  className='main h-screen w-screen bg-black flex'>
      <div className='h-full w-2/6 '>
        <h2 className='m-6 font-bold px-32 text-2xl uppercase text-white'>Protofilo.</h2>
        <h1 className='text-white top-2/4 left-64 uppercase font-medium text-4xl absolute'>my name is <br /> <span className='text-6xl'>mohit rai</span></h1>
        <button className='bottom-1/4 left-64 uppercase font-bold text-2xl py-2 px-4 bg-yellow-500 absolute'>i am a web developer</button>
      </div>
      <div className='h-full w-4/6 bg-gray-600 overflow-hidden'>
        <nav className='w-full flex justify-center gap-24 text-sm uppercase font-bold text-white align-center pt-6'>
          <h4 className='hover:underline hover:decoration-yellow-400'>home</h4>
          <h4 className='hover:underline hover:decoration-yellow-400'>about</h4>
          <h4 className='hover:underline hover:decoration-yellow-400'>work</h4>
          <h4 className='hover:underline hover:decoration-yellow-400'>flow</h4>
          <h4 className='hover:underline hover:decoration-yellow-400'>contact</h4>
        </nav>
        <img className='h-full overflow-hidden mt-4 object-cover object-center' src="https://plus.unsplash.com/premium_photo-1682434389560-96d533a6a10a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
    </div>
  )
}

export default App













































// import { useState } from 'react'

// const App = () => {
//   const [time, settime] = useState(new Date().toLocaleTimeString());
//   setInterval(() => {
//     settime(new Date().toLocaleTimeString());
//   }, 1000)
//   return (
//     <div>
//       <h1 className='text-5xl'>{time}</h1>
//     </div>
//   )
// }

// export default App


// import React from 'react'

// const App = () => {
//   const [gender, setgender] = useState("others")


//   return (
//     <div>
//       <form onSubmit={submitHandler}>

        

//       <
//         input 
//         name='gender'
//         checked={gender === "male"? true : false}
//         type="radio" 
//         onChange={(e) => setgender(e.target.value)}
//         /> male
//       <br />
//       <
//         input 
//         name='gender'
//         checked={gender === "female"? true : false}
//         type="radio" 
//         onChange={(e) => setgender(e.target.value)}
//         /> female
//       <br />
//       <
//         input 
//         name='gender'
//         checked={gender === "other"? true : false}
//         type="radio" 
//         onChange={(e) => setgender(e.target.value)}
//         /> other
//       <br />
      

//       </form>
//     </div>
//   )
// }

// export default App