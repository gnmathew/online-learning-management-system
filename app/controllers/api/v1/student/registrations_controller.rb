module Api
  module V1
    module Student
      class RegistrationsController < AuthenticationController

        def create
          user = User.new(user_params)
          user.role = :student

          if user.save
            token = jwt_encode(user_id: user.id)
            
            render json: { token: token, user_id: user.id }, status: :created
          else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
          end
        end

        private

        def user_params
          params.require(:user).permit(:username, :email, :password)
        end
      end
    end
  end
end