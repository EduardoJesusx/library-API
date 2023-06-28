'use client'
import { api } from "@/services/api"
import { redirect, useParams } from "next/navigation"


export default async function deleteAuthor() {
	const { id } = useParams()

	async function deleteCurrentAuthor() {
		const response = await api.delete(`/authors/${id}`)
		return response.data
	}

    deleteCurrentAuthor()

	redirect(`/authors`)
}