def divisible_by(numbers, divisor):
    new_list = [x for x in numbers if x % divisor == 0]
    return new_list

print(divisible_by([1,2,3,4,5,6],2))