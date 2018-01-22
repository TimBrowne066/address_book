class Api::V1::ContactsController < Api::V1::BaseController
  def index
    render json: Contact.all
  end

  def create
    contact = Contact.new(contact_params)

    respond_to do |format|
      if contact.save
        format.json { render json: contact }
      else
        format.json { render json: contact.errors.full_messages.join(', ') }
      end
    end
  end

  def destroy
    @contact = Contact.find(params[:id])
    @contact.destroy
    render json: { contacts: Contact.all }, status: :deleted
  end

  private

  def contact_params
    params.require(:contact).permit(:firstName, :lastName, :emailAddress, :phoneNumber, :companyName)
  end
end
