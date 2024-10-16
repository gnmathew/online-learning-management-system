class CreateAssignments < ActiveRecord::Migration[7.0]
  def change
    create_table :assignments do |t|
      t.string :name
      t.references :student, foreign_key: { to_table: :users }
      t.references :subject

      t.timestamps
    end
  end
end
