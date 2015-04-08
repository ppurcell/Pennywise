json.array!(@register_items) do |register_item|
  json.extract! register_item, :id, :description, :date, :value
  json.url register_item_url(register_item, format: :json)
end
