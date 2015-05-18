class OverviewController < ApplicationController
  def index
    @latest_article = JournalArticle.order('date DESC').first
    @recent_locations = Entry.where('entries.location IS NOT NULL').order('date DESC').limit(5)
  end
end
