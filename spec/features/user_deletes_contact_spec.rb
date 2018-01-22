require 'rails_helper'

feature "User deletes contact", js: true, server_rendering: true do

  scenario "User deletes contact" do
    visit root_path
    fill_in "First Name", with: "Bob"
    fill_in "Last Name", with: "Bob"
    fill_in "Email", with: "Bob"
    fill_in "Phone Number", with: "Bob"
    fill_in "Company", with: "Bob"
    click_button "submit"
    click_button "Delete"
    expect(page).to_not have_content("Bob")
  end

end
