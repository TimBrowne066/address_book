require 'rails_helper'

feature "User filters contacts by dotcom email", js: true, server_rendering: true do

  scenario "User creates contacts and filters." do
    visit root_path
    fill_in "First Name", with: "Bob"
    fill_in "Last Name", with: "Bob"
    fill_in "Email", with: "Bob@bob.net"
    fill_in "Phone Number", with: "Bob"
    fill_in "Company", with: "Bob"
    click_button "submit"

    fill_in "First Name", with: "Bob"
    fill_in "Last Name", with: "Bob"
    fill_in "Email", with: "Bob@bob.com"
    fill_in "Phone Number", with: "Bob"
    fill_in "Company", with: "Bob"
    click_button "submit"

    expect(page).to have_content("Bob@bob.net")
    expect(page).to have_content("Bob@bob.com")

    click_button "DotCom email only"
    expect(page).to have_content("Bob@bob.com")
    expect(page).to_not have_content("Bob@bob.net")
  end

end
