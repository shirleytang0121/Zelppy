class Api::BusinessesController < ApplicationController
    def index
        @businesses = Business.all
    end

    def show
        @business = Business.with_attached_photos.find(params[:id])
    end

    def create
        @business = Business.new(businesses_params)
        if @business.save
            render :show
        else
            render json: @business.errors.full_messages, status: 401
        end
    end

    def update
        @business = Business.find(params[:id])
        if @business.update(businesses_params)
            render :show
        else
            render json: @business.errors.full_messages, status: 401
        end  
    end

    private
    def businesses_params
        params.require(:business).permit(:name, :address, :city, :state, :zip_code, :lat, :lng, :website, photos:[])
    end
end