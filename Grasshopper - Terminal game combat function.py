def combat(health, damage):
    remaining_health =  health - damage
    if remaining_health <= 0:
        return 0
    else:
        return remaining_health

print(combat(100, 5))