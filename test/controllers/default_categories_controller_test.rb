require 'test_helper'

class DefaultCategoriesControllerTest < ActionController::TestCase
  setup do
    @default_category = default_categories(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:default_categories)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create default_category" do
    assert_difference('DefaultCategory.count') do
      post :create, default_category: { color: @default_category.color, description: @default_category.description, title: @default_category.title }
    end

    assert_redirected_to default_category_path(assigns(:default_category))
  end

  test "should show default_category" do
    get :show, id: @default_category
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @default_category
    assert_response :success
  end

  test "should update default_category" do
    patch :update, id: @default_category, default_category: { color: @default_category.color, description: @default_category.description, title: @default_category.title }
    assert_redirected_to default_category_path(assigns(:default_category))
  end

  test "should destroy default_category" do
    assert_difference('DefaultCategory.count', -1) do
      delete :destroy, id: @default_category
    end

    assert_redirected_to default_categories_path
  end
end
