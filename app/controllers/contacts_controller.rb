class ContactsController < ApplicationController
  def index
    @contacts = Contact.all
  end

  def new
    @contact = Contact.new
  end

  def create
    @contact = Contact.create(contact_params)

    respond_to do |format|
      if @contact.save
        format.json { render json: @contact }
        format.html { redirect_to contacts_route, notice: "Contact added successfully!"}
      else
        format.json { render json: @contact.errors.full_messages.join(', ') }
        format.html { render :new, flash[:alert] = @contact.errors.full_messages.join(', ') }
      end
    end
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    redirect_to root_path
  end

end
