class Business < ApplicationRecord
    validates :name, :address, :city, :state, :zip_code, :lat, :lng, presence:true

    has_many_attached :photos
    
end