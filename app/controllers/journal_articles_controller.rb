class JournalArticlesController < ApplicationController
  before_action :set_journal_article, only: [:show, :edit, :update, :destroy]

  # GET /journal_articles
  # GET /journal_articles.json
  def index
    @journal_articles = JournalArticle.all
  end

  # GET /journal_articles/1
  # GET /journal_articles/1.json
  def show
  end

  # GET /journal_articles/new
  def new
    @journal_article = JournalArticle.new
  end

  # GET /journal_articles/1/edit
  def edit
  end

  # POST /journal_articles
  # POST /journal_articles.json
  def create
    @journal_article = JournalArticle.new(journal_article_params)

    respond_to do |format|
      if @journal_article.save
        format.html { redirect_to @journal_article, notice: 'Journal article was successfully created.' }
        format.json { render :show, status: :created, location: @journal_article }
      else
        format.html { render :new }
        format.json { render json: @journal_article.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /journal_articles/1
  # PATCH/PUT /journal_articles/1.json
  def update
    respond_to do |format|
      if @journal_article.update(journal_article_params)
        format.html { redirect_to @journal_article, notice: 'Journal article was successfully updated.' }
        format.json { render :show, status: :ok, location: @journal_article }
      else
        format.html { render :edit }
        format.json { render json: @journal_article.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /journal_articles/1
  # DELETE /journal_articles/1.json
  def destroy
    @journal_article.destroy
    respond_to do |format|
      format.html { redirect_to journal_articles_url, notice: 'Journal article was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_journal_article
      @journal_article = JournalArticle.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def journal_article_params
      params.require(:journal_article).permit(:location, :date, :description, :picture1, :picture2, :picture3, :picture4)
    end
end
