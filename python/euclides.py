def euclid_sub(a, b):
    a = abs(a)
    b = abs(b)

    if a == 0:
        return b
    elif b == 0:
        return a

    while a != b:
        if a > b:
            a -= b
        else:
            b -= a
    return a


print(euclid_sub(1680, 640))
