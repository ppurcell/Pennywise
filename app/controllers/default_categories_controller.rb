class DefaultCategoriesController < ApplicationController
  before_action :set_default_category, only: [:show, :edit, :update, :destroy]

  # GET /default_categories
  # GET /default_categories.json
  def index
    @default_categories = DefaultCategory.all
  end

  # GET /default_categories/1
  # GET /default_categories/1.json
  def show
  end

  # GET /default_categories/new
  def new
    @default_category = DefaultCategory.new
  end

  # GET /default_categories/1/edit
  def edit
  end

  # POST /default_categories
  # POST /default_categories.json
  def create
    @default_category = DefaultCategory.new(default_category_params)

    respond_to do |format|
      if @default_category.save
        format.html { redirect_to @default_category, notice: 'Default category was successfully created.' }
        format.json { render :show, status: :created, location: @default_category }
      else
        format.html { render :new }
        format.json { render json: @default_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /default_categories/1
  # PATCH/PUT /default_categories/1.json
  def update
    respond_to do |format|
      if @default_category.update(default_category_params)
        format.html { redirect_to @default_category, notice: 'Default category was successfully updated.' }
        format.json { render :show, status: :ok, location: @default_category }
      else
        format.html { render :edit }
        format.json { render json: @default_category.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /default_categories/1
  # DELETE /default_categories/1.json
  def destroy
    @default_category.destroy
    respond_to do |format|
      format.html { redirect_to default_categories_url, notice: 'Default category was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_default_category
      @default_category = DefaultCategory.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def default_category_params
      params.require(:default_category).permit(:title, :description, :color)
    end
end
