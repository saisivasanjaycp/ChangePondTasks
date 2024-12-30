import sys

length=int(input('enter the length of the list : '))
my_list=[]

for i in range(length):
     my_list.append(int(input('Enter the data : ')))

max=-sys.maxsize - 1
min=sys.maxsize
add=0
for i in range(len(my_list)):
    if(my_list[i]>max):
        max=my_list[i]
    if(my_list[i]<min):
        min=my_list[i]
    add=add+my_list[i]
print(f"Maximum size of List:{max}\n Minimum size of List: {min}\n Added Element: {add}")
