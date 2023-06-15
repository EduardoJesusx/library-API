class ApplicationController < ActionController::API
  def route_not_found
    render json: { error: 'Route not found' }, status: :not_found
  end
end
