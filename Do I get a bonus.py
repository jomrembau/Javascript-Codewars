def bonus_time(salary, bonus):
    if bonus:
        return f"${salary * 10}"
    else: return f"${salary}"

print(bonus_time(10000, True))