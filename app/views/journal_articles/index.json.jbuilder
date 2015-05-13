json.array!(@journal_articles) do |journal_article|
  json.extract! journal_article, :id, :location, :date, :description, :picture1, :picture2, :picture3, :picture4
  json.url journal_article_url(journal_article, format: :json)
end
