class OverviewController < ApplicationController
  def index
    @latest_article = JournalArticle.order('date DESC').first
    @recent_locations = Entry.where('entries.location IS NOT NULL').order('date DESC').limit(5)
  end

  respond_to :json
  def pie_data
  @entries = Entry.joins(:category).select('sum(amount) as total, name, category_id as id, estimate').group(:category_id, :name, :estimate)
    respond_with(@entries)
  end
end
