class Api::ReviewsController < ApplicationController
    before_action :require_logged_in
    
    def index
        @reviews = Review.all.where(business_id: params[:business_id])
        render :index
    end

    def show
        @review = Review.with_attached_photos.find(params[:id])
        render :show
    end

    def create
        @review = Review.new(reviews_params)
        if @review.save
            render :show
        else
            render json: @reivew.errors.full_messages, status:422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @reivew.update(reviews_params)
            render :show
        else
            render json: @review.errors.full_messages, status:422
        end
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        render :show
    end

    private
    def reviews_params
        params.require(:reivew).permit(:body,:rating,:price_range, :user_id, :business_id)
    end
end
