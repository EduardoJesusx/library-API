# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

5.times do |i|
  Author.create!(
    name: Faker::Book.author,
    nationality: Faker::Address.state
  )
end

5.times do |i|
  BookType.create!(
    name: Faker::Book.genre,
    description: Faker::Company.catch_phrase
  )
end


  # :title, :publication_year, :description, :book_type_id, :author_id)


  # Faker::Company.logo