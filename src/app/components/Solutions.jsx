import Image from 'next/image'
import React from 'react'
import {BiCheck} from 'react-icons/bi'

const solutionsContent = {
    text: {
        headingSubTitle: 'Our Solutions',
        headingTitle: 'From safeguarding your home with state-of-the-art alarm systems',
        description: "From safeguarding your home with state-of-the-art alarm systems to offering reliable insurance options, we ensure that your family is protected in every aspect of life. With our Family Security Plan, you can rest easy knowing that you've taken the necessary steps to secure a brighter future for your family. Trust us to be your partner in safeguarding what matters most – your family's well-being.",
    },
    features: [
        {
            title: "Home Fire Safety"
        },
        {
            title: "Cybersecurity Solutions"
        },
        {
            title: "Emergency Preparedness"
        },
        {
            title: "Identity Theft Protection"
        },
    ], 
    cta: {
        btn1: {
            href: "#_",
            label: "Get Started"
        },
        btn2: {
            href: "#_",
            label: "How it works"
        },
    },
    images: {
        img1: '/images/solution-img-1-min.jpg',
        img2: '/images/solution-img-2-min.jpg',
        img3: '/images/solution-img-3-min.jpg',
    }, 
    experience: {
        year: "25+",
        label: " years of experience"
    }
}

const Solutions = () => {
  return (
    <section className='py-32 bg-light overflow-x-hidden'>
        <div className="container px-4 mx-auto">
            <div className='lg:flex space-x-2 justify-between'>
                <div className='lg:w-6/12 relative mb-10 lg:mb-0 z-10 before:absolute before:w-screen before:right-1/2 before:rounded-tr-[200px] before:z-[-1] before:rounded-br-3xl before:py-28 before:top-20 before:bg-white before:bottom-20'>
                    <div className="flex gap-2">
                        <div className="flex flex-col space-y-2">
                            <div>
                                <Image src={solutionsContent.images.img1} alt='img' width={626} height={640} className='object-cover h-full w-full rounded-lg' />
                            </div>
                            <div className='flex justify-end gap-2'>
                                <div className='w-4/12 flex'>
                                    <div className="ml-auto">
                                        <div className="w-10 h-10 bg-greenLight lg:w-24 lg:h-24 rounded-2xl rounded-bl-[200px]"></div>
                                    </div>
                                </div>

                                <div className="w-6/12">
                                    <Image src={solutionsContent.images.img2} alt='img' width={626} height={640} className='object-cover h-full w-full rounded-lg' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="lg:w-5/12 relative z-10"></div>
            </div>
        </div>
    </section>
  )
}

export default Solutions