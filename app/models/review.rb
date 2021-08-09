class Review < ApplicationRecord
    validates :user_id, :business_id, :rating, presence:true

    has_many_attached :photos

    belongs_to :author,
      primary_key: :id,
      foreign_key: :user_id,
      class_name: :User

    belongs_to :business,
        primary_key: :id,
        foreign_key: :business_id,
        class_name: :Business

end
