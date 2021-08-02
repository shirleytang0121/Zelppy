json.set! user.id do
    json.extract! user, :id, :email, :firstname, :lastname, :birthday
end