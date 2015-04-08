json.array!(@default_categories) do |default_category|
  json.extract! default_category, :id, :title, :description, :color
  json.url default_category_url(default_category, format: :json)
end
