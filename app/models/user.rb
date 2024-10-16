class User < ApplicationRecord
  has_secure_password

  validates :username, :email, presence: true, uniqueness: true

  enum role: { student: 0, teacher: 1 }

  has_many :assignments, foreign_key: 'student_id'
  has_many :subjects
end
