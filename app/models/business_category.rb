class BusinessCategory < ApplicationRecord
    belongs_to :business,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Business

    belongs_to :category,
        primary_key: :id,
        foreign_key: :category_id,
        class_name: :Category
end
