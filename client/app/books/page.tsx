import { Header } from "@/components/Header";
import { api } from "@/services/api";

async function getBooks() {
  const response = await api.get('/books')
  return response.data
}

interface Book {
  title: string;
  description: string;
  book_type_id: number;
  author_id: number;
  publication_year: string;
  image: string
}

export default async function Dashboard(){
  
  const books = await getBooks()

  return(
    <div>
      <Header/>
      {
        books.map((data:Book)=>{
          return(
            <div>
              {/* <img src={data.image} alt={data.title} /> */}
              <div>
                <p>{data.title}</p>
                <p>{data.publication_year}</p>
              </div>
            </div>
          ) 
        })
      }
    </div>
  )
}