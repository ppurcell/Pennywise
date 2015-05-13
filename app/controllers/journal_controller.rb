class JournalController < ApplicationController
  def index
    @journal_articles = JournalArticle.paginate(:page=> params[:page], :per_page=> 3).order('date DESC');
    @odd_row = true;
  end
end
