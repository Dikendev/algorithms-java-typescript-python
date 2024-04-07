from itertools import product 

possible_children = ['Boy' ,'Girl']
sample_space = set()

for child1 in possible_children:
  for child2 in possible_children:
    for child3 in possible_children:
      for child4 in possible_children:
        outcome = (child1, child2, child3, child4)
        sample_space.add(outcome)

all_combinations = product(*(4*[possible_children]))
assert set(all_combinations) == sample_space

sample_space_efficient = set(product(possible_children, repeat=4))
assert sample_space == sample_space_efficient

print("Sample Space Efficient: ", sample_space_efficient)

def has_two_boys(outcome): return len([child for child in outcome if child == 'boy'] ==2) 
# prob = compute