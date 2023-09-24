"use client"

import './globals.css';
import Lottie from 'lottie-react';
import Image from 'next/image'

import heroImg from '../assets/64da0c6df0e5df9da7bab9a1_CHAT.png'
import productOfTheDay from '../assets/top-post-badge.svg';
import productOfTheWeek from '../assets/top-post-badge (1).svg';
import chat1 from '../assets/650881805e173a130c19c3e1_ioni_conversation.png'
import chatAnimation from '../assets/animation_lmxqd18v.json';
import ctaAnimation from '../assets/animation_cta.json';
import ctaExample from '../assets/6509bdbd732007f10f26f3c1_ioni_СTA.png'
import ctabg from '../assets/animation_ctabg.json';
import onebg from '../assets/animation_lmxrvsnj.json';
import joinusBg from '../assets/rectangle-bg-joinus.png';
import urlExample from '../assets/6509f5b4c6ce9ed292c06de9_URL_ioni.png'
import urlAnimation from '../assets/animation_url.json';
import multilingualExample from '../assets/6509f38fc6ce9ed292bd5407_ioni_multilanguage.png'
import multilingualAnimation from '../assets/animation_multilingual.json';
import statsAnimation from '../assets/animation_stats.json';
import featuresBg from '../assets/animation_features.json'


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col px-16">
      <div className="heroBackground h-[100vh] w-full "></div>
      <span className='heroBackgroundBlur'></span>
      {/* <div className="fakeNav h-[10vh] w-full"></div> */}
      
      <section className="one h-[90vh] flex justify-between pt-8">
        <div className="heroContent text-white pt-4 w-[55%] min-h-max h-[80vh] flex flex-col items-start justify-center">
          <div className="badges flex gap-8">
            <Image src={productOfTheDay} width={200} height={500} alt='heroImg'/>
            <Image src={productOfTheWeek} width={200} height={500} alt='heroImg'/>
          </div>
          <h1 className='text-white text-5xl font-bold mt-4 leading-[4rem]'>Boost your customer <br/> support productivity with <br/>ChatGPT-4</h1>
          <div className="heroIntro rounded-2xl p-6 mt-4 w-[80%]">
            <p className='text-lg'>Smart chatbot based on the latest AI technology, that talks like a human, and creates CTA for your customers.</p>
          </div>
          <button className='button-white mt-4 text-xl font-semibold'>Free Trial</button>
        </div>
        <div className="heroImg h-[80vh] flex items-center -mr-4">
          <Image src={heroImg} width={470} height={470} alt='heroImg'/>
        </div>
      </section>

      <section className="two min-h-max h-[80vh] pt-16 mb-16 flex items-center justify-center px-16 relative overflow-hidden">
        {/* <Lottie animationData={onebg} className=' absolute -top-32 left-0 -z-10 -ml-16' /> */}
        <div className='w-[50%]'>
          <Image src={chat1} width={800} alt='conversation1'/>
        </div>
        <div className="sectionTwoContent relative flex flex-col items-start w-[50%]">
          <Lottie animationData={chatAnimation} className='h-[20vh] relative float-left -ml-8' />
          <h1 className='text-4xl font-bold '>Replying to general and user-specific questions</h1>
          <p className='mt-4 text-xl'>Our AI chatbot can handle both general inquiries and complex questions. 
            <br/> To do this, it utilizes actions upon user requests to retrieve all relevant information about the user, including their support history, account details, and even banking information.</p>
          <button className='text-xl hover:text-blue-700 mt-8'>Learn more</button>
        </div>
      </section>
      
      <div className='fill'></div>

      <section className="three-cta flex items-center justify-center gap-8 min-h-fit h-[80vh] px-16 relative overflow-hidden">
        <Lottie animationData={ctabg} className='absolute top-0 left-0 -z-10 w-full -mt-16 -ml-24 h-[200vh]' />
        <div className="cta-content flex flex-col items-start w-[50%]">
          <Lottie animationData={ctaAnimation} className='h-[30vh] -mt-16' />
          <h1 className='text-4xl font-bold -mt-8'>Adding Call to Action when needed</h1>
          <p className='mt-4 text-xl'>You can set conditions under which requests will be transferred to a human agent, and set a Call to Action - for example, invite the user to visit the office or book a call.</p>
          <button className='text-xl hover:text-blue-700 mt-8'>Learn more</button>
        </div>
        <div className='w-[50%]'>
          <Image src={ctaExample} width={1500} alt='cta-example'  />
        </div>
      </section>

      <section className="joinus-small h-[40vh] text-white flex flex-col items-center justify-center">
        <div className='joinus-bg h-[40vh]'></div>
        <div className='flex flex-col items-center justify-center'>
          <h1 className='text-4xl font-bold'>Join now and elevate your business with AI</h1>
          <p className='text-xl mt-6'>Unlock Unlimited Potential with Our Free Trial</p>
          <button className=' text-white mt-4 text-xl font-semibold'>Free Trial</button>
        </div>
      </section>

      <section className="four-url flex items-center justify-center gap-8 min-h-fit h-[80vh] px-16 relative overflow-hidden">
        {/* <Lottie animationData={ctabg} className='absolute top-0 left-0 -z-10 w-full -mt-16 -ml-24 h-[200vh]' /> */}
        <div className='w-[50%]'>
          <Image src={urlExample} width={1500} alt='cta-example'  />
        </div>
        <div className="cta-content flex flex-col items-start w-[50%]">
          <Lottie animationData={urlAnimation} className='h-[20vh] -mt-16' />
          <h1 className='text-4xl font-bold '>Connecting with your data in a couple of clicks</h1>
          <p className='mt-4 text-xl'>Our AI chatbot ioni easily trains with your company data. You may upload data to Knowledge Base via HTML, Text or by an individual URL upload option.</p>
          <button className='text-xl hover:text-blue-700 mt-8'>Learn more</button>
        </div>
      </section>

      <section className="three-cta flex items-center justify-center gap-8 min-h-fit h-[80vh] px-16 relative overflow-hidden">
        {/* <Lottie animationData={ctabg} className='absolute top-0 left-0 -z-10 w-full -mt-16 -ml-24 h-[200vh]' /> */}
        <div className="cta-content flex flex-col items-start w-[50%]">
          <Lottie animationData={multilingualAnimation} className='h-[20vh] -mt-16' />
          <h1 className='text-4xl font-bold -mt-4'>Multilingual support</h1>
          <p className='mt-4 text-xl'>Grow your business without engaging multilingual customer support agents - our chatbot recognises 80+ languages and automatically translates questions and answers.</p>
          <button className='text-xl hover:text-blue-700 mt-8'>Learn more</button>
        </div>
        <div className='w-[50%]'>
          <Image src={multilingualExample} width={1500} alt='cta-example'  />
        </div>
      </section>

      
      <section className='stats w-full h-[70vh] flex items-center justify-center gap-32'>
        <Lottie animationData={statsAnimation} width={100} className='statsAnimation absolute left-0 -z-10' />
        <div className='flex flex-col items-center justify-center gap-8'>
          <h1 className='text-7xl font-extrabold tracking-wider'>92 <span className='text-xl -ml-5'>%</span></h1>
          <p className='text-xl font-semibold text-center'>Average response <br/> accuracy</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 -mt-6'>
          <h1 className='text-7xl font-extrabold tracking-wider'>+88 <span className='text-xl  -ml-5'>%</span></h1>
          <p className='text-xl font-semibold'>Agent productivity</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-8'>
          <h1 className='text-7xl font-extrabold tracking-wider'>3<span className='text-5xl'>x</span></h1>
          <p className='text-xl font-semibold text-center'>Reduce resolution times <br/> for general questions</p>
        </div>
      </section>

      <section className="features min-h-fit h-[100vh]">
        <div className='features-bg h-[100vh] w-full'></div>
      </section>

    </main>
  )
}
