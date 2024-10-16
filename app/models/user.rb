class User < ApplicationRecord
  enum role: { student: 0, teacher: 1 }

  has_many :subjects
end
