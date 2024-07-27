'use client'
import {useCardStore} from '../store/CardStore'

const index = () => {

    const {card4, card2, onChangeCards4, onChangeCards2} = useCardStore();

  return (
    <section className='container flex items-center justify-between'>
        <div className='h-[56px] bg-white flex w-[308px] p-5 border border-lines rounded items-center justify-between'>
            <h3 className="text-[13px] leading-[15px]">
                Сортировка по:
            </h3>
            <select className="bg-inherit text-pink text-[13px] leading-[15px] pr-[40px]" name="sort" id="sort">
                <option value="All">Не выбрана</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </div>
        <div className='h-[56px]'>
            <input className='w-[632px] p-5 text-[13px] leading-[15px] border border-lines rounded pl-[43px]' type="text" placeholder='Например: Визитечная сайт для строительные компании'/>
        </div>
        <div className='h-[56px] bg-white flex justify-between items-center w-[308px] select-none p-[3px] border border-lines rounded text-[13px] leading-[15px]'>
            {
                card4 ? 
                <button 
                className="bg-btnBg3 py-[17px] px-[30px] rounded"
                onClick={onChangeCards4}
                >
                    4 - карточки
                </button>
                :
                <button 
                className="py-[17px] px-[30px]"
                onClick={onChangeCards4}
                >
                    4 - карточки
                </button>
            }
            {
                card2 ? 
                <button 
                className="bg-btnBg3 rounded py-[17px] px-[30px]"
                onClick={onChangeCards2}
                >
                    2 - карточки
                </button>
                :
                <button 
                className="py-[17px] px-[30px]"
                onClick={onChangeCards2}
                >
                    2 - карточки
                </button>
            }
        </div>
    </section>
  )
}

export default index

// {
// isOpen ? <FaXmark  className='icon'/> : <IoReorderTwoOutline className='icon'/>
// }



// const [card4, setCard4] = useState(true)
// const [card2, setCard2] = useState(false)
// const storedData = card4

// useEffect(() => {
//     localStorage.setItem('myData', card4);
//     const storedData = localStorage.getItem('myData');
//   }, []);

// const onChangeCards4 = () => {
//     if(!card4) {
//         setCard4(!card4)
//         setCard2(!card2)
//         localStorage.setItem('myData', card4);
//         console.log(storedData);
//     }
// };

// const onChangeCards2 = () => {
//     if(!card2) {
//         setCard2(!card2)
//         setCard4(!card4)
//         localStorage.setItem('myData', card4);
//         console.log(storedData);
//     }
// };