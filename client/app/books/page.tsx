import { Header } from "@/components/Header";
import { api } from "@/services/api";

async function getBooks() {
  const response = await api.get('/authors')
  return response.data
}

export default async function Dashboard(){
  
  const books = await getBooks()

  return(
    <div>
      <Header/>
      {
        books.map((data:any)=>{
          return data.name
        })
      }
    </div>
  )
}