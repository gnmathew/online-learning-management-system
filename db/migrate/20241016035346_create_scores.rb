class CreateScores < ActiveRecord::Migration[7.0]
  def change
    create_table :scores do |t|
      t.integer :value
      t.references :assignment

      t.timestamps
    end
  end
end
