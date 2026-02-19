def dont_give_me_five(start,end):
    num_list = []
    for x in range(start,end + 1):
        str_list = []
        i = str(x)
        for b in i:
            str_list.append(b)
        if "5" in str_list:
            continue
        else:
            num_list.append(x)

    return len(num_list)

print(dont_give_me_five(4,17))