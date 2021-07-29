class Event < ApplicationRecord
    validates :title, presence: {message: "חובה למלא כותרת"}
    validates :date, presence: {message: "חובה למלא תאריך"}
end
