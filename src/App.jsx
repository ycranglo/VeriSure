
import { useState } from 'react';
import './App.css'


function App() {

  const [dec, setDec] = useState('')
  const [enc, setEnc] = useState('')
  const [Encmessage, setEncMessage] = useState('');
  const [Dencmessage, setDencMessage] = useState('');
  let arrayEncrypted = [];
    let arrayDencrypted = [];


  const messHashObj = [
    {
      encrypt: 'a',
      decrypt: '@'
    },
    {
      encrypt: 'b',
      decrypt: '#'
    },
      {
      encrypt: 'c',
      decrypt: '$'
    },
    {
      encrypt: 'd',
      decrypt: '%'
    },
    {
      encrypt: 'e',
      decrypt: '^'
    },
    {
      encrypt: 'f',
      decrypt: '&'
    },
    {
      encrypt: 'g',
      decrypt: '*'
    },
    {
      encrypt: 'h',
      decrypt: '('
    },
    {
      encrypt: 'i',
      decrypt: ')'
    },
    {
      encrypt: 'j',
      decrypt: '-'
    },
    {
      encrypt: 'k',
      decrypt: '='
    },
    {
      encrypt: 'l',
      decrypt: '_'
    },
    {
      encrypt: 'm',
      decrypt: '+'
    },
    {
      encrypt: 'n',
      decrypt: '['
    },
    {
      encrypt: 'o',
      decrypt: ']'
    },
    {
      encrypt: 'p',
      decrypt: '{'
    },
    {
      encrypt: 'q',
      decrypt: '}'
    },
    {
      encrypt: 'r',
      decrypt: '|'
    },
    {
      encrypt: 's',
      decrypt: ';'
    },
    {
      encrypt: 't',
      decrypt: ':'
    },
    {
      encrypt: 'u',
      decrypt: '"'
    },
    {
      encrypt: 'v',
      decrypt: ','
    },
    {
      encrypt: 'w',
      decrypt: '<'
    },
    {
      encrypt: 'x',
      decrypt: '.'
    },
    {
      encrypt: 'y',
      decrypt: '>'
    },
    {
      encrypt: 'z',
      decrypt: '/'
    },
    {
      encrypt: '1',
      decrypt: '?'
    },
    {
      encrypt: '2',
      decrypt: '€'
    },
    {
      encrypt: '3',
      decrypt: '©'
    },
    {
      encrypt: '4',
      decrypt: '®'
    },
    {
      encrypt: '5',
      decrypt: '~'
    },
    {
      encrypt: '6',
      decrypt: 'ㅎ'
    },
    {
      encrypt: '7',
      decrypt: 'ㅋ'
    },
    {
      encrypt: '8',
      decrypt: '¦'
    },
    {
      encrypt: '9',
      decrypt: 'ㄷ'
    },
    {
      encrypt: '0',
      decrypt: '…'
    },
  ]

console.log(messHashObj)



const handleFormSubmitEnc = (e) => {
  e.preventDefault();
  let charEnc = Encmessage.toLowerCase().split('');
  for (let i = 0; i < charEnc.length; i++) {
    for (let k = 0; k < messHashObj.length; k++) {
      if (charEnc[i] === messHashObj[k].encrypt) {
        arrayEncrypted[i] = messHashObj[k].decrypt;
      }
    }
  }
   let resultString = arrayEncrypted.join('')
    setEnc(resultString)
  console.log(arrayEncrypted);
  setEncMessage('')
};

  
  const handleFormSubmitDec = (e) => {
  e.preventDefault();
  let charDenc = Dencmessage.toLowerCase().split('');
  for (let i = 0; i < charDenc.length; i++) {
    for (let k = 0; k < messHashObj.length; k++) {
      if (charDenc[i] === messHashObj[k].decrypt) {
        arrayDencrypted[i] = messHashObj[k].encrypt;
      }
    }
  }
    let resultString = arrayDencrypted.join('')
    setDec(resultString)
      setDencMessage('')
    console.log(arrayDencrypted);
    
  };



//   useEffect(() => {
//   handleFormSubmitEnc
// },[])






  return (
    <>
      <div className='bg-[#05101a] min-h-screen'>
  <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
      <div className="text-center lg:w-2/3 w-full ">
        <h1 className="text-[#d97c30] font-[Montserrat] title-font sm:text-9xl text-6xl mb-4 black">VERI<span className='text-[#CBFFA9]'>SURE</span></h1>
              <a href="https://github.com/Angelo-misuhara/VeriSure" target='_blank' rel='noreferrer'>
                <p className=" text-[#f2f8fd] sm:text-2xl text-[.8rem] font-[Montserrat] leading-relaxed">ENCRYPT,DECRYPT YOUR MESSAGE!</p>
              </a>
              <p className=" text-[#f2f8fd] font-[Poppins] font-light leading-relaxed">from a-z,0-9</p>
        
      </div>
    </div>
  </section> 
  <div>
    <div className=' container mx-auto flex px-5 pt-[1rem] items-center justify-center flex-col'>
      <h1 className="mb-3 text-[#f2f8fd] sm:text-2xl text-[.8rem] font-[Montserrat] leading-relaxed">ENCRYPT HERE:</h1>
      <section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
    <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
        <div className="px-6 py-6 md:px-8 md:py-0">
            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100 font-[Montserrat]">ENCRYPTED MESSAGE:</h2>

                  <p className="break-all mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">{enc }</p>
        </div>
    </div>

    <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 lg:mr-11">
        <form onSubmit={handleFormSubmitEnc}>
            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input className="px-6 py-2 text-[#f2f8fd] placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"   onChange={(e) => setEncMessage(e.target.value)}  value={Encmessage} type="text" name="text" placeholder="Enter your message" aria-label="Enter your email"/>

                <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">Encrypt</button>
            </div>
                </form>
    </div>
            </section>
            
    </div>
        </div>
    <div>
    <div className=' container mx-auto flex px-5 pt-[5rem] items-center justify-center flex-col'>
      <h1 className="mb-3 text-[#f2f8fd] sm:text-2xl text-[.8rem] font-[Montserrat] leading-relaxed">DECRYPT HERE:</h1>
      <section className="flex flex-col max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 md:flex-row md:h-48">
    <div className="md:flex md:items-center md:justify-center md:w-1/2 md:bg-gray-700 md:dark:bg-gray-800">
        <div className="px-6 py-6 md:px-8 md:py-0">
            <h2 className="text-lg font-bold text-gray-700 dark:text-white md:text-gray-100 font-[Montserrat]">ENCRYPTED MESSAGE:</h2>

                  <p className="break-all mt-2 text-sm text-gray-600 dark:text-gray-400 md:text-gray-400">{dec }</p>
        </div>
    </div>

    <div className="flex items-center justify-center pb-6 md:py-0 md:w-1/2 lg:mr-11">
        <form onSubmit={handleFormSubmitDec}>
            <div className="flex flex-col p-1.5 overflow-hidden border rounded-lg dark:border-gray-600 lg:flex-row dark:focus-within:border-blue-300 focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
                <input className="px-6 py-2 text-[#f2f8fd] placeholder-gray-500 bg-white outline-none dark:bg-gray-800 dark:placeholder-gray-400 focus:placeholder-transparent dark:focus:placeholder-transparent"   onChange={(e) => setDencMessage(e.target.value)}  value={Dencmessage} type="text" name="text" placeholder="Enter your message" aria-label="Enter your email"/>

                <button className="px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">Encrypt</button>
            </div>
                </form>
    </div>
            </section>
            
    </div>
        </div>
    
        <div className='flex justify-center  rounded-md py-[5rem]'>
          <div className="relative overflow-x-auto">
    <table className="w-[80vw] text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3 text-[#f2f8fd]  font-[Montserrat]">
                    DECRYPT
                </th>
                <th scope="col" className="px-6 py-3 text-[#f2f8fd]  font-[Montserrat]">
                    ENCRYPT
                </th>
            </tr>
        </thead>
       <tbody>
                {messHashObj.map((item, index) => (
     
        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {item.encrypt}
            </th>
            <td className="px-6 py-4 ">
                {item.decrypt}
            </td>
        </tr>
    ))}
</tbody>
    </table>
</div>

  </div>




</div>
    </>
  )
}

export default App
