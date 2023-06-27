import Image from 'next/image'

export function Header(){
  return(
    <header className=" flex justify-between px-8 text-lg h-24 items-center text-slate-600 bg-gray-50 ">
      <div className='flex justify-center items-center'>
        <a href="/">
          <Image width={100} height={100} alt='logo' src="/logo.svg"/>
        </a>
      </div>
      <nav className="w-1/2">
        <ul className="flex justify-between gap-3">
          {[{text: "Books", link: "/books"},{text: "Authors", link: "/authors"}, {text: "Genres", link: "/book_types"}].map(({text, link})=>(
            <NavLink text={text} link={link} key={link}/>

          ))}
        </ul>
      </nav>   
      <div ><a className="border rounded-full p-2 px-10 w-32 text-center hover:bg-slate-500 hover:text-white transition ease-in-out delay-50 bg-cyan-50 bd-100 " href="#">Login</a></div>   
    </header>
  )
}

function NavLink({ text, link  }:{text: string, link: string}){
  return(
    <li>
      <a className="hover:border-b-4 transition ease-in-out delay-10" href={ link }>{ text }</a>
    </li>
  )
}