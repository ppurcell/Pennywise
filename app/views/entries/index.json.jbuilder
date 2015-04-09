json.array!(@entries) do |entry|
  json.extract! entry, :id, :date, :category_id, :description, :amount
  json.url entry_url(entry, format: :json)
end
