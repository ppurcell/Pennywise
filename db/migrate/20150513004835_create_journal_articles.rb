class CreateJournalArticles < ActiveRecord::Migration
  def change
    create_table :journal_articles do |t|
      t.string :location
      t.date :date
      t.text :description
      t.string :picture1
      t.string :picture2
      t.string :picture3
      t.string :picture4

      t.timestamps
    end
  end
end
