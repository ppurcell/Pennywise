class RegisterItemsController < ApplicationController
  before_action :set_register_item, only: [:show, :edit, :update, :destroy]

  # GET /register_items
  # GET /register_items.json
  def index
    @register_items = RegisterItem.all
  end

  # GET /register_items/1
  # GET /register_items/1.json
  def show
  end

  # GET /register_items/new
  def new
    @register_item = RegisterItem.new
  end

  # GET /register_items/1/edit
  def edit
  end

  # POST /register_items
  # POST /register_items.json
  def create
    @register_item = RegisterItem.new(register_item_params)

    respond_to do |format|
      if @register_item.save
        format.html { redirect_to @register_item, notice: 'Register item was successfully created.' }
        format.json { render :show, status: :created, location: @register_item }
      else
        format.html { render :new }
        format.json { render json: @register_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /register_items/1
  # PATCH/PUT /register_items/1.json
  def update
    respond_to do |format|
      if @register_item.update(register_item_params)
        format.html { redirect_to @register_item, notice: 'Register item was successfully updated.' }
        format.json { render :show, status: :ok, location: @register_item }
      else
        format.html { render :edit }
        format.json { render json: @register_item.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /register_items/1
  # DELETE /register_items/1.json
  def destroy
    @register_item.destroy
    respond_to do |format|
      format.html { redirect_to register_items_url, notice: 'Register item was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_register_item
      @register_item = RegisterItem.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def register_item_params
      params.require(:register_item).permit(:description, :date, :value)
    end
end
