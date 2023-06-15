class BookTypesController < ApplicationController
  before_action :set_book_type, only: %i[ show update destroy ]

  # GET /book_types
  def index
    @book_types = BookType.all

    render json: @book_types
  end

  # GET /book_types/1
  def show
    render json: @book_type
  end

  # POST /book_types
  def create
    @book_type = BookType.new(book_type_params)

    if @book_type.save
      render json: @book_type, status: :created, location: @book_type
    else
      render json: @book_type.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /book_types/1
  def update
    if @book_type.update(book_type_params)
      render json: @book_type
    else
      render json: @book_type.errors, status: :unprocessable_entity
    end
  end

  # DELETE /book_types/1
  def destroy
    @book_type.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_book_type
      @book_type = BookType.find_by_id(params[:id])
      if @book_type.nil?
        render json: { error: "Not Found" }, status: :not_found
      end
    end

    # Only allow a list of trusted parameters through.
    def book_type_params
      params.require(:book_type).permit(:name, :description)
    end
end
