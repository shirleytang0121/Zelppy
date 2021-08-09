class Category < ApplicationRecord

    has_many :business_categories,
        primary_key: :id,
        foreign_key: :category_id,
        class_name: :BusinessCategory

    has_many :business,
        through: :business_categories,
        source: :business
end
