class Business < ApplicationRecord
    validates :name, :address, :city, :state, :zip_code, :lat, :lng, presence:true

    has_many_attached :photos

    has_many :hours,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Hour

    has_many :reviews,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Review
    
    def average_rating
    end

    def self.search(value, position)
        
    end
    
end
