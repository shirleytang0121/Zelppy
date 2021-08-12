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
        if value==nil
            Business.left_outer_joins(:categories)
            .where("lower(businesses.city) LIKE :position OR lower(businesses.state) LIKE :position", position: "%#{position.downcase}%" )
        elsif position==nil
            Business.left_outer_joins(:categories)
            .where("lower(categories.category_name) LIKE :value OR lower(businesses.name) LIKE :value", value: "%#{value.downcase}%" )
        else
            Business.left_outer_joins(:categories)
            .where("(lower(categories.category_name) LIKE :value OR lower(businesses.name) LIKE :value) AND (lower(businesses.city) LIKE :position OR lower(businesses.state) LIKE :position)", value: "%#{value.downcase}%", position: "%#{position.downcase}%" )
        end
       
    end
    
end
