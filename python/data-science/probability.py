SAMPLE_SPACE = {'Heads', 'Tails'}

def probability(space): 
  probability_heads = 1 / len(space)
  print(f'Probability of choosing heads is {probability_heads}')
  
def is_heads_or_tails(outcome): return outcome in SAMPLE_SPACE
def is_neither(outcome): return not is_heads_or_tails(outcome)

def is_heads(outcome): return outcome ==  'Heads'
def is_tails(outcome): return outcome == 'Tails'

def get_matching_event(event_condition, sample_space):
  return set([outcome for outcome in sample_space if event_condition(outcome)])

event_conditions = [is_heads_or_tails, is_heads, is_heads, is_heads, is_neither,is_tails]

def conditions():
  for event_condition in event_conditions:
    print(f"Event Condition: {event_condition.__name__}")
    event = get_matching_event(event_condition,SAMPLE_SPACE)
    print(f"Event: {event}\n")


def compute_probability(event_condition, generic_sample_space):
  event = get_matching_event(event_condition, generic_sample_space)
  return len(event) / len(generic_sample_space)

def eventProbability():
  for event_condition in event_conditions:
    prob = compute_probability(event_condition, SAMPLE_SPACE)
    name = event_condition.__name__
    print(f"Probability of event arising from '{name}' is {prob}")

eventProbability()