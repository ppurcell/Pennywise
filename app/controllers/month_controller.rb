class MonthController < ApplicationController
  def index
    @entries = Entry.all
  end
end
