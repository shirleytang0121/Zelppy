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
    
    has_many :business_categories,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :BusinessCategory
    
    has_many :categories,
        through: :business_categories,
        source: :category
        
    def average_rating
        reviews.average(:rating)
    end

    def self.search(value, position)
        Business.where("")
    end
    
end
