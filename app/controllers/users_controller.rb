class UsersController < ApplicationController
  before_action :set_user, only: %w[show edit update destroy]

  def index
    users = User.all
    render inertia: "Users/Index", props: { users: users }
  end

  def show
    render inertia: "Users/Show", props: { user: @user }
  end

  def new
    render inertia: "Users/New"
  end

  def create
    user = User.new(user_params)
    if user.save
      redirect_to users_path, notice: "User successfully created."
    else
      render inertia: "Users/New", props: { errors: user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def edit
    render inertia: "Users/Edit", props: { user: @user }
  end

  def update
    if @user.update(user_params)
      redirect_to users_path, notice: "User successfully updated"
    else
      render inertia: "Users/Edit", props: { user: @user, errors: @user.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    @user.destroy
    redirect_to users_path, notice: "User successfully deleted"
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:name, :email, :bio)
  end
end
