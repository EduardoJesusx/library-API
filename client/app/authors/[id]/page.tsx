'use client'
import { api } from "@/services/api"
import { useParams } from "next/navigation"

interface Author {
	name: string;
	nationality: string;
}


export default async function Page() {
	const { id } = useParams()

	async function getCurrentAuthor() {
		const response = await api.get(`/authors/${id}`)
		return response.data
	}

	const author = await getCurrentAuthor()

	return(
		<div>
			<div>{author.name}</div>
			<div>{author.nationality}</div>
			<a href="/authors">All authors</a>
		</div>
	)
}