class ApplicationController < ActionController::API
  
  before_filter :cors_preflight_check
  after_filter :cors_set_access_control_headers
  
  def route_not_found
    render json: { error: 'Route not found' }, status: :not_found
  end

protected

def cors_set_access_control_headers
  headers['Access-Control-Allow-Origin'] = '*'
  headers['Access-Control-Allow-Methods'] = 'POST,DELETE, GET, PUT, PATCH, OPTIONS'
  headers['Access-Control-Allow-Headers'] = '*'
  headers['Access-Control-Max-Age'] = "1728000"
end

# If this is a preflight OPTIONS request, then short-circuit the
# request, return only the necessary headers and return an empty
# text/plain.

def cors_preflight_check
  if request.method == :options
    headers['Access-Control-Allow-Origin'] = '*'
    headers['Access-Control-Allow-Methods'] = 'POST,DELETE, GET, PUT, PATCH, OPTIONS'
    headers['Access-Control-Allow-Headers'] = '*'
    headers['Access-Control-Max-Age'] = '1728000'
    render :text => '', :content_type => 'text/plain'
  end
end
end
