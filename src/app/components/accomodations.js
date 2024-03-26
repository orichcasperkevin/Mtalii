import { useState,useEffect } from 'react';
import { useRouter } from 'next/navigation';
import PlaceholderCard from './placeholderCard';
import Image from 'next/image';
const PLACEHOLDERS = 20

export default function Accomodations(){
    const [page,setPage] = useState(1);
    const [cardItems,setCardItems] = useState(null)
    const router = useRouter();


    const getAccomodations = async () => {
        const res = await fetch(`http://5.189.189.26:31517/api/destinations?page=${page}`);
        const accomodations = await res.json();
        setCardItems(accomodations.results)
    };
      // Render placeholder cards
    const renderPlaceholderCards = () => {
        const placeholders = [];
        for (let i = 0; i < PLACEHOLDERS; i++) {
        placeholders.push(<PlaceholderCard key={i} />);
    }
    return placeholders;
  }
    useEffect(() => {
        getAccomodations()
      }, []);

    return<>
        <div className="grid grid-cols-12 gap-2 gap-y-6 max-w-6xl"> 
            {! cardItems ?
                <>
                { renderPlaceholderCards() }
                </>
            :<>
                {cardItems.map((item) => (
                    <div key={item.id} className="col-span-12 sm:col-span-6 md:col-span-3">
                        <card className="w-full flex flex-col" 
                        onClick={()=>{router.push(`/listing/${item.name}`)}}>
                            <div>
                                {/* Image url */}
                                <a href="#">
                                    <Image src={`https://picsum.photos/id/${item.id}/300/200`} className="w-96 bg-gray-200 h-auto rounded-lg" alt="" width={300} height={200} />
                                </a>                      
                            </div>
                            <div className="flex flex-row mt-2 gap-2">                      
                            
                                {/* Description */}
                                <div className="flex flex-col">
                                    <div className='flex flex-row justify-between'>
                                    <a href="#" className='flex flex-row justify-between'>
                                        <p className="text-gray-500 text-sm font-semibold">{item.name}</p>                             
                                    </a>
                                    <span className='flex flex-row text-sm'>
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                        </svg>
                                        <p>4.5</p>
                                    </span>
                                    </div>                          
                                    <a className="text-gray-400 text-xs mt-2 hover:text-gray-100 text-ellipsis overflow-hidden" href="#">
                                        {item.description}
                                    </a>
                                    <p className="text-gray-400 text-xs mt-1">{item.price_per_night}</p>
                                </div>
                            </div>
                        </card>
                    </div>      
                ))}
            </>
            }
        </div> 
    </>
}