def max_(lst):
    if len(lst) == 0:
        return None
    if len(lst) == 1:
        return lst[0]
    else:
        sub_max = max_(lst[1:])
        return lst[0] if lst[0] > sub_max else sub_max

arr = [2, 3, 4, 5, 6, 7, 8]
print(max_(arr))
