require 'rails_helper'

feature "User sorts contacts by email", js: true, server_rendering: true do

  scenario "User creates contacts and sorts." do
    visit root_path
    fill_in "First Name", with: "Bob"
    fill_in "Last Name", with: "Bob"
    fill_in "Email", with: "DEF@bob.net"
    fill_in "Phone Number", with: "Bob"
    fill_in "Company", with: "Bob"
    click_button "submit"

    fill_in "First Name", with: "Bob"
    fill_in "Last Name", with: "Bob"
    fill_in "Email", with: "ABC@bob.com"
    fill_in "Phone Number", with: "Bob"
    fill_in "Company", with: "Bob"
    click_button "submit"
    click_button "Sort by email"

    expect(page).to have_content("Email: DEF@bob.net

Phone: Bob

Company: Bob

Delete
Bob Bob
Email: ABC@bob.com

Phone: Bob

Company: Bob")
  end

end
