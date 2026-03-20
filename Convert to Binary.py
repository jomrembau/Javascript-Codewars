def to_binary(n):
    binary =  bin(n)
    return int(binary[2:])

print(to_binary(5))