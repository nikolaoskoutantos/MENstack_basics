db.createUser(
    {
        user: "energy_user",
        pwd: "password",
        roles: [
            {
                role: "readWrite",
                db: "energy_market"
            }
        ]
    }
)