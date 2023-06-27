class Book < ApplicationRecord
  has_one_attached :image, resize_to_limit: [300, 100]
  belongs_to :book_type
  belongs_to :author
end
