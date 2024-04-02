import React from 'react';
import Link from 'next/link';
import AccomodationFilters from './components/accomodation_filters';
import PlaceholderCard from '../components/placeholderCard';
const PLACEHOLDERS = 20


function Activities() {
  const [page,setPage] = useState(1);
  const [cardItems,setCardItems] = useState(null)
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
  return (
    <div>
        <div className='p-3 flex justify-end'>
          <Link href="/services/addActivity" className='bg-secondary-1 text-white rounded-full p-3 '>+ Add activity</Link>
        </div>
        <AccomodationFilters/>        
        <section className="mt-3 flex flex-row justify-center">
        <div className="grid grid-cols-12 gap-2 gap-y-6 max-w-6xl">
        {! cardItems ?
          <>
              { renderPlaceholderCards() }
              </>
          :<>
          {cardItems.map((item) => (
              <div key={item.id} className="col-span-12 sm:col-span-6 md:col-span-3">
                <card className="w-full flex flex-col">
                    <div>
                        {/* Image Video */}
                        <a href="#">
                            <img src={item.imageSrc} className="w-96 h-auto rounded-lg" alt="Video thumbnail" />
                        </a>                      
                    </div>
                    <div className="flex flex-row mt-2 gap-2">                      
                      
                        {/* Description */}
                        <div className="flex flex-col">
                            <div className='flex flex-row justify-between'>
                              <a href="#" className='flex flex-row justify-between'>
                                  <p className="text-gray-500 text-sm font-semibold">{item.title}</p>                             
                              </a>
                              <span className='flex flex-row text-sm'>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                </svg>
                                <p>4.5</p>
                              </span>
                            </div>                          
                            <a className="text-gray-400 text-xs mt-2 hover:text-gray-100 text-ellipsis overflow-hidden" href="#">
                                {item.channelName}
                            </a>
                            <p className="text-gray-400 text-xs mt-1">{item.price}</p>
                        </div>
                    </div>
                </card>
              </div>      
          ))}
          </>
        }
        </div>     
        </section>
    </div>
  );
}

export default Activities;