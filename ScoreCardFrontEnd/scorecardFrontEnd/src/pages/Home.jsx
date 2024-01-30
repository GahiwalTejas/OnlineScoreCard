import React from 'react'
import Container from '../components/container/Container'

function Home() {
  return (
    <div className="w-full py-6 mt-4 ">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            {/* <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to Add Your Kabbadi Teams....
                            </h1> */}
                            <section className="card w-full text-white max-w-4xl bg-black rounded-lg border-black border-2 text-left shadow-md p-6 mb-8">
        <h2 className="text-2xl text-white font-bold mb-4 hover:bg-blue-700">Key Features:</h2>
        <ul>
          <li className="mb-2"><strong className=' text-blue-600'>Team Management Made Easy:</strong> Seamlessly add, edit, and manage your favorite Kabaddi teams.</li>
          <li className="mb-2"><strong className=' text-blue-600'>Comprehensive Player Stats:</strong> Dive deep into player statistics and performance metrics.</li>
          <li className="mb-2"><strong className=' text-blue-600'>Real-Time Score Updates:</strong> Stay in the loop with live score updates.</li>
          <li className="mb-2"><strong className=' text-blue-600'>User-Friendly Interface:</strong> Designed with simplicity in mind.</li>
        </ul>
      </section>
      <section className="card w-full max-w-4xl bg-transparent rounded-lg border-2 border-black shadow-md p-8 mb-8 ml-80">
        <h2 className="text-2xl font-bold mb-4 hover:bg-blue-700">Why Choose Kabbadi Pro?</h2>
        <ul>
          <li className="mb-2 "><strong className=' '>Unmatched Convenience:</strong> Access your Kabaddi scorecards anytime, anywhere.</li>
          <li className="mb-2"><strong>Rich Insights:</strong> Gain valuable insights into team and player performance.</li>
          <li className="mb-2"><strong>Community Engagement:</strong> Join a vibrant community of Kabaddi enthusiasts.</li>
        </ul>
      </section>
      <section className="card w-full text-white max-w-4xl bg-black rounded-lg border-black border-2 text-left shadow-md p-6 mb-8">
        <h2 className="text-2xl font-bold mb-4 hover:bg-blue-700">Get Started Today!</h2>
        <p className="mb-4 font-semibold text-green-700">Ready to take your Kabaddi experience to the next level? Sign up now and unlock a world of Kabaddi excitement with Kabbadi Pro.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Sign Up</button>
      </section>

                        </div>
                    </div>
                </Container>
            </div>
  )
}

export default Home