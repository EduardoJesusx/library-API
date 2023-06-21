// import List from '@/components/List'
// import ListItem from '@/components/ListItem'
// import Nav from '@/components/Nav'
// import NavItem from '@/components/NavItem'
// import Image from 'next/image'
// import { api } from '@/services/api'

import Link from "next/link";
import { redirect } from 'next/navigation'

// export type AuthorType = {
//   name: String,
//   nacionality: String
// }

// export default async function Home() {

//   async function apiFetch(){
//     const response = await api.get(`/authors`)
//     return response.data
//   }

//   const authors:AuthorType[] = await apiFetch()

//   console.log(authors)

//   return (
//     <div className="divide-y divide-slate-100">
//       <Nav>
//         <NavItem href="/new" isActive>New </NavItem>
//         <NavItem href="/top">Top Rated</NavItem>
//         <NavItem href="/picks">Vincent's Picks</NavItem>
//       </Nav>
//       <List>
//         {authors.map((item) => (
//           <ListItem key={item} item={item} />
//         ))}
//       </List>
//     </div>
//   )
// }


export default function Home(){
  redirect('/books')
}