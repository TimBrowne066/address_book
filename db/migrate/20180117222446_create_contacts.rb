class CreateContacts < ActiveRecord::Migration[5.1]
  def change
    create_table :contacts do |t|
      t.string :firstName
      t.string :lastName
      t.string :emailAddress
      t.string :phoneNumber
      t.string :companyName
    end
  end
end
