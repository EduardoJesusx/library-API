import { Header } from "@/components/Header";
import { api } from "@/services/api";

async function getAuthors() {
	const response = await api.get('/authors')
	return response.data
}
interface Author {
	id: number;
	name: string;
	nationality: string;
}

export default async function Authors() {

	const authors = await getAuthors()

	return (
		<div>
			<Header />
			{
				authors.map((data: Author) => {
					return (
						<div className="flex">
							<p>{data.name}</p>
							<p>{data.nationality}</p>
							<a href={`/authors/${data.id}`} className="px-4">Show</a>
							<a href={`/authors/delete/	${data.id}`} className="px-4">Delete</a>
						</div>
					)
				})
			}
			<a href="/authors/new">New</a>
		</div>
	)
}