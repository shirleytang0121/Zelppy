class Api::BusinessesController < ApplicationController
    def index
        if params[:search]
            @businesses = Business.search(params[:search][:value],params[:search][:position])
        else
            @businesses = Business.all
        end  
        render :index
    end

    def show
        @business = Business.with_attached_photos.find(params[:id])
        render :show
    end

    def create
        @business = Business.new(businesses_params)
        if @business.save
            render :show
        else
            render json: @business.errors.full_messages, status: 422
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
