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
import featuresBg from '../assets/animation_features.json';
import ft1 from '../assets/features/ft1.svg';
import ft2 from '../assets/features/ft2.svg'
import ft3 from '../assets/features/ft3.svg'
import ft4 from '../assets/features/ft4.svg'
import ft5 from '../assets/features/ft5.svg'
import ft6 from '../assets/features/ft6.svg'
import ioniworkExample from '../assets/64df5ccd07e6565f7654df9a_AI Search.png';
import benefitsAnimation from '../assets/animation_benefits.json';

import w1 from '../assets/ioniworking/w1.svg'
import w2 from '../assets/ioniworking/w2.svg'
import w3 from '../assets/ioniworking/w3.svg'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="heroBackground h-[100vh] w-full "></div>
      <span className='heroBackgroundBlur'></span>
      {/* <div className="fakeNav h-[10vh] w-full"></div> */}
      
      <section className="one h-[90vh] flex justify-between pt-8 px-32">
        <div className="heroContent text-white pt-4 w-[55%] min-h-max h-[80vh] flex flex-col items-start justify-center">
          <div className="badges flex gap-8">
            <Image src={productOfTheDay} width={200} height={500} alt='heroImg'/>
            <Image src={productOfTheWeek} width={200} height={500} alt='heroImg'/>
          </div>
          <h1 className='text-white text-5xl font-bold mt-4 leading-[4rem]'>Boost your customer <br/> support productivity with <br/>ChatGPT-4</h1>
          <div className="heroIntro rounded-2xl p-6 mt-4 w-[80%]">
            <p className='text-lg'>Smart chatbot based on the latest AI technology, that talks like a human, and creates CTA for your customers.</p>
          </div>
          <button className='button-white-nav mt-6 text-xl font-semibold'>Free Trial</button>
        </div>
        <div className="heroImg h-[80vh] flex items-center -mr-4">
          <Image src={heroImg} width={470} height={470} alt='heroImg'/>
        </div>
      </section>

      <section className=" benefitsCard two min-h-max h-[100vh] flex items-center justify-center px-32 relative overflow-hidden">
        {/* <Lottie animationData={onebg} className=' absolute -top-32 left-0 -z-10 -ml-16' /> */}
        <div className='w-[50%]'>
          <Image src={chat1} width={800} alt='conversation1'/>
        </div>
        <div className="sectionTwoContent relative flex flex-col items-start w-[50%]">
          <Lottie animationData={chatAnimation} className='h-[20vh] relative float-left -ml-8' />
          <h1 className='text-4xl font-bold '>Replying to general and user-specific questions</h1>
          <p className='mt-4 text-xl'>Our AI chatbot can handle both general inquiries and complex questions. 
            <br/> To do this, it utilizes actions upon user requests to retrieve all relevant information about the user, including their support history, account details, and even banking information.</p>
          <button className='learnMore text-xl hover:text-blue-700 mt-8'>Learn more</button>
        </div>
      </section>
      
      <div className='fill'></div>

      <section className="three-cta flex items-center justify-center gap-8 min-h-fit h-[100vh] px-32 relative overflow-hidden">
        <Lottie animationData={ctabg} className='absolute top-0 left-0 -z-10 w-full -ml-24 h-[200vh]' />
        <div className="cta-content flex flex-col items-start w-[50%]">
          <Lottie animationData={ctaAnimation} className='h-[30vh] -mt-16' />
          <h1 className='text-4xl font-bold -mt-8'>Adding Call to Action when needed</h1>
          <p className='mt-4 text-xl'>You can set conditions under which requests will be transferred to a human agent, and set a Call to Action - for example, invite the user to visit the office or book a call.</p>
          <button className='learnMore text-xl hover:text-blue-700 mt-8'>Learn more</button>
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
          <button className='button-white-nav text-white mt-4 text-xl font-semibold'>Free Trial</button>
        </div>
      </section>

      <section className="four-url flex items-center justify-center gap-8 min-h-fit h-[80vh] px-32 relative overflow-hidden">
        {/* <Lottie animationData={ctabg} className='absolute top-0 left-0 -z-10 w-full -mt-16 -ml-24 h-[200vh]' /> */}
        <div className='w-[50%]'>
          <Image src={urlExample} width={1500} alt='cta-example'  />
        </div>
        <div className="cta-content flex flex-col items-start w-[50%]">
          <Lottie animationData={urlAnimation} className='h-[20vh] -mt-16' />
          <h1 className='text-4xl font-bold '>Connecting with your data in a couple of clicks</h1>
          <p className='mt-4 text-xl'>Our AI chatbot ioni easily trains with your company data. You may upload data to Knowledge Base via HTML, Text or by an individual URL upload option.</p>
          <button className='learnMore text-xl mt-8'>Learn more</button>
        </div>
      </section>

      <section className="three-cta flex items-center justify-center gap-8 min-h-fit h-[80vh] px-32 relative overflow-hidden">
        {/* <Lottie animationData={ctabg} className='absolute top-0 left-0 -z-10 w-full -mt-16 -ml-24 h-[200vh]' /> */}
        <div className="cta-content flex flex-col items-start w-[50%]">
          <Lottie animationData={multilingualAnimation} className='h-[20vh] -mt-16' />
          <h1 className='text-4xl font-bold -mt-4'>Multilingual support</h1>
          <p className='mt-4 text-xl'>Grow your business without engaging multilingual customer support agents - our chatbot recognises 80+ languages and automatically translates questions and answers.</p>
          <button className='learnMore text-xl hover:text-blue-700 mt-8'>Learn more</button>
        </div>
        <div className='w-[50%]'>
          <Image src={multilingualExample} width={1500} alt='cta-example'  />
        </div>
      </section>

      
      <section className='stats w-full h-[70vh] flex items-center justify-center gap-32'>
        <Lottie animationData={statsAnimation} width={100} className='statsAnimation absolute left-0 -z-10' />
        <div className='flex flex-col items-center justify-center gap-8'>
          <h1 className='statText text-7xl font-extrabold tracking-wider'>92 <span className='statText text-xl -ml-5'>%</span></h1>
          <p className='text-xl font-semibold text-center'>Average response <br/> accuracy</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 -mt-6'>
          <h1 className='statText text-7xl font-extrabold tracking-wider'>+88 <span className='statText text-xl  -ml-5'>%</span></h1>
          <p className='text-xl font-semibold'>Agent productivity</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-8'>
          <h1 className='statText text-7xl font-extrabold tracking-wider'>3<span className='statText text-5xl'>x</span></h1>
          <p className='text-xl font-semibold text-center'>Reduce resolution times <br/> for general questions</p>
        </div>
      </section>

      <section className="features min-h-fit h-[200vh] flex flex-col items-center  px-32 text-white">
        <div className='features-bg h-[200vh] '></div>
        <div className='flex flex-col items-center mt-12'>
          <h1 className='text-6xl font-bold tracking-wide' >Features</h1>
          <p className='mt-2 text-xl'>Automate customer service and bring its efficiency to a new level</p>
        </div>

        <div className="grid grid-flow-row grid-cols-2 gap-8 mt-16">
          <div className='featuresCard rounded-3xl p-8'>
            <Image src={ft1} width={60} alt='ft1'/>
            <h1 className='text-4xl font-bold mt-4'>AI Assistant</h1>
            <p className='mt-4 text-xl'>Get 'ready to send' draft or instruct AI briefly on what you want to say to get an extended answer.</p>
            <button className='learnMore text-xl hover:text-blue-700 mt-4'>Learn more</button>
          </div>
          <div className='featuresCard rounded-3xl p-8'>
            <Image src={ft2} width={60} alt='ft1'/>
            <h1 className='text-4xl font-bold mt-4'>AI Chatbot</h1>
            <p className='mt-4 text-xl'>Automatically resolve typical customer inquiries with AI, just as human agents do.</p>
            <button className='learnMore text-xl hover:text-blue-700 mt-4'>Learn more</button>
          </div>  
          <div className='featuresCard rounded-3xl p-8'>
            <Image src={ft3} width={60} alt='ft1'/>
            <h1 className='text-4xl font-bold mt-4'>AI Search</h1>
            <p className='mt-4 text-xl'>Search that provides genuine results for any queries.</p>
            <button className='learnMore text-xl hover:text-blue-700 mt-4'>Learn more</button>
          </div>    
          <div className='featuresCard rounded-3xl p-8'>
            <Image src={ft4} width={60} alt='ft1'/>
            <h1 className='text-4xl font-bold mt-4'>AI Widget Builder</h1>
            <p className='mt-4 text-xl'>Create your personalized AI Chatbot Widget in a couple of clicks.</p>
            <button className='learnMore text-xl hover:text-blue-700 mt-4'>Learn more</button>
          </div>      
          <div className='featuresCard rounded-3xl p-8'>
            <Image src={ft5} width={60} alt='ft1'/>
            <h1 className='text-4xl font-bold mt-4'>AI Conversation Analytics</h1>
            <p className='mt-4 text-xl'>Improve CSAT score by analyzing AI conversations with customers.</p>
            <button className='learnMore text-xl hover:text-blue-700 mt-4'>Learn more</button>
          </div>  
          <div className='featuresCard rounded-3xl p-8'>
            <Image src={ft6} width={60} alt='ft1'/>
            <h1 className='text-4xl font-bold mt-4'>Chatbot to Human</h1>
            <p className='mt-4 text-xl'>Transfer your customer from AI chatbot to a human agent whenever needed.</p>
            <button className='learnMore text-xl hover:text-blue-700 mt-4'>Learn more</button>
          </div>  
        </div>

        <div className='flex items-center justify-between w-full  h-[50vh]'>
          <h1 className='text-6xl font-bold'>Start your AI journey with us!</h1>
          <button className='button-white-nav mt-4 text-xl font-semibold'>Get Started</button>
        </div>
      </section>

      <section className='benefitsCard ioni-working px-32 h-[100vh] min-h-fit flex flex-col items-center justify-center gap-16'>
        <div className='flex flex-col items-center justify-center '>
          <h1 className='text-5xl font-bold'>How does ioni work?</h1>
          <p className='text-xl mt-4'>Three easy steps to get started exploring Ioni</p>
        </div>

        <div className='flex'>
          <div className='flex flex-col justify-center w-full gap-8'>
            <div className="working-content gap-8 flex items-start w-[85%]">
              <Image src={w1} width={50} alt='w1' />
              <div>
                <h1 className='text-2xl font-bold -mt-4'>1. Add data</h1>
                <p className='mt-2'>Add HTML and text pages to you AI database and start testing the chat.</p>
              </div>  
            </div>

            <div className="working-content gap-8 flex items-start w-[85%]">
              <Image src={w2} width={50} alt='w1' />
              <div>
                <h1 className='text-2xl font-bold -mt-4'>2. Create AI assistant</h1>
                <p className='mt-2'>Create and customise a personal chatbot that perfectly matches the brand voice and your business visual style.</p>
              </div>
            </div>

            <div className="working-content gap-8 flex items-start w-[85%]">
              <Image src={w3} width={50} alt='w1' />
              <div>
                <h1 className='text-2xl font-bold -mt-4'>2. Analyse conversations</h1>
                <p className='mt-2'>Check answers and adjust your AI bot. Add questions from your support requests, check the answer and edit if needed. ioni will self learn and automatically improve auto responses.</p>
              </div>
            </div>
          </div>

          <div className='w-[100%]'>
              <Image src={ioniworkExample} width={1500} alt='cta-example'  />
          </div> 
        </div>

        
      </section>

      <section className='benefits h-[100vh] min-h-max relative flex flex-col items-center justify-center'>
        <Lottie animationData={benefitsAnimation} className='h-[100vh] absolute top-0 left-0 -z-50 opacity-50' />
        <div className='flex flex-col items-center px-32'>
          <h1 className='text-5xl font-bold tracking-wide' >Benefits</h1>
          <p className='mt-2 text-xl'>Streamline your workflow with AI.</p>
        </div>

        <div className="grid grid-flow-row grid-cols-2 gap-8 mt-16 px-32">
          <div className='benefitsCard rounded-3xl p-8'>
            <h1 className='text-3xl font-bold'>Immediate responses</h1>
            <p className='mt-4 text-lg'>Bring your CSAT Scores to a new level,  resolving customer issues in the shortest possible time.</p>
          </div>
          <div className='benefitsCard rounded-3xl p-8'>
            <h1 className='text-3xl font-bold'>Human-in-the-loop</h1>
            <p className='mt-4 text-lg'>To ensure the quality of using AI generated text, you can always keep a human in the workflow to verify all answers before sending them.</p>
          </div>
          <div className='benefitsCard rounded-3xl p-8'>
            <h1 className='text-3xl font-bold'>Self learning</h1>
            <p className='mt-4 text-lg'>The AI system is constantly learning and self-improving with each interaction. When an agent rejects the draft and provides feedback, the AI algorithm adapts and fine-tunes its search and suggestion capabilities.</p>
          </div>
          <div className='benefitsCard rounded-3xl p-8'>
            <h1 className='text-3xl font-bold '>Human level recognition</h1>
            <p className='mt-4 text-lg'>AI recognizes customer inquiries at a human-level by analyzing the intent and meaning behind them. Accurate interpretation enables the AI system to provide the most pertinent solutions.</p>
          </div>
        </div>

      </section>

      <section className='useCases flex flex-col items-center justify-center h-[120vh] px-32 bg-[#0A2540]'>
        {/* <div className='bg bg-[#0A2540] absolute top-0 left-0 w-full h-[100vh] -z-50'></div> */}
        <div className='flex items-center justify-between w-full'>
          <div className='flex flex-col text-white'>
              <h1 className='text-5xl font-bold tracking-wide float-left' >Use Cases</h1>
              <p className='mt-2 text-xl'>Learn how ioni can drive your customer support.</p>
          </div>
          <button className="button-white-nav text-white">Contact Sales</button>
        </div>
        

        <div className="grid grid-flow-row grid-cols-2 gap-8 mt-16">
          <div className='benefitsCard rounded-3xl p-8'>
            <h1 className='text-3xl font-bold'>Replying for general non-specific questions</h1>
            <p className='mt-4 text-lg'>Standard inquiries now can be answered in a matter of seconds. The quality of responses is even higher than that of human agents, as ioni uses the latest AI technology, and is not susceptible to the influence of human factors.</p>
          </div>
          <div className='benefitsCard rounded-3xl p-8'>
            <h1 className='text-3xl font-bold'>Replying to user-specific questions</h1>
            <p className='mt-4 text-lg'>For solving complex questions, this AI tool utilizes actions upon user request to retrieve all relevant information about the user, including their support history, account details, and even banking information.</p>
          </div>
          <div className='benefitsCard rounded-3xl p-8'>
            <h1 className='text-3xl font-bold'>Replying for RAQs</h1>
            <p className='mt-4 text-lg'>ioni is capable of answering even difficult questions if the necessary information is available in the documentation or if a ticket with a similar question has been created before. It performs auto-improvement of your AI database and easily finds context-related queries within it.</p>
          </div>
          <div className='benefitsCard rounded-3xl p-8'>
            <h1 className='text-3xl font-bold '>Smooth newcomers onboarding</h1>
            <p className='mt-4 text-lg'>Training new customer support agents always takes time, but with automation of many processes, new employees no longer need to memorize a vast amount of information and can be effectively productive from day one.</p>
          </div>
        </div>
      </section>

      <section className='reviews h-[100vh] flex items-center justify-center pl-32'>
        <div className='w-[40%]'>
          <h1 className='text-6xl font-extrabold text-[#0A2540]'>See why people <br/>choose ioni.</h1>
        </div>
        <div className='w-[60%]'>Review cards carousel</div>
      </section>

    </main>
  )
}
