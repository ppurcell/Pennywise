require 'test_helper'

class RegisterItemsControllerTest < ActionController::TestCase
  setup do
    @register_item = register_items(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:register_items)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create register_item" do
    assert_difference('RegisterItem.count') do
      post :create, register_item: { date: @register_item.date, description: @register_item.description, value: @register_item.value }
    end

    assert_redirected_to register_item_path(assigns(:register_item))
  end

  test "should show register_item" do
    get :show, id: @register_item
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @register_item
    assert_response :success
  end

  test "should update register_item" do
    patch :update, id: @register_item, register_item: { date: @register_item.date, description: @register_item.description, value: @register_item.value }
    assert_redirected_to register_item_path(assigns(:register_item))
  end

  test "should destroy register_item" do
    assert_difference('RegisterItem.count', -1) do
      delete :destroy, id: @register_item
    end

    assert_redirected_to register_items_path
  end
end
