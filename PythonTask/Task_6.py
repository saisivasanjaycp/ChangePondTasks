user_input = input("Enter numbers separated by spaces: ")
numbers = user_input.split()  

numbers = [int(num) for num in numbers]
search_number = int(input("Enter the number to search for: "))

repeat = 0
for num in numbers:
    if num == search_number:
        repeat += 1
print(f"{search_number} is repeating {repeat} times.")
