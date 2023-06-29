class Solution():
    
  def two_sum(self, total_number: list[int], target: int) -> list[int]:
   previous_values = []

   for index in range(1,len(total_number)):
      current_number = total_number[index]
      needed_value = target - current_number
      index2 = previous_values[needed_value]

   if index2 != 0:
      return [index2, index]
   else: 
      previous_values[current_number] = index

if __name__ == "__main__":
   sm = Solution()
   array_numbers = [2,7,11,15]
   target_numbers = 9

   result = sm.two_sum(array_numbers, target_numbers) # => 0,1

   if result != 0:
      print('Sum is ', result)
   else:
      print('Numbers not found to sum') 