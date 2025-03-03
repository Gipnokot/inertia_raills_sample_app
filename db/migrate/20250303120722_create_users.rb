class CreateUsers < ActiveRecord::Migration[7.2]
  def change
    create_table :users do |t|
      t.string :name, null: false, limit: 100
      t.string :email, null: false, limit: 150
      t.text :bio, limit: 500

      t.timestamps
    end

    add_index :users, :email, unique: true
  end
end
