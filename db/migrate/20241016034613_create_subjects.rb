class CreateSubjects < ActiveRecord::Migration[7.0]
  def change
    create_table :subjects do |t|
      t.string :name
      t.references :teacher, foreign_key: { to_table: :users }

      t.timestamps
    end
  end
end
