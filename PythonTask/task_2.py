fruits = ['mango',['fruitpulp','mixedpulp'],'banana',('apple','grapes')]
print(fruits)
print(fruits[0])
print(fruits[1])
print(fruits[1][0])
print(fruits[1][1])
print(fruits[3][0])
print(fruits[3][1])


Menu =['Dal','Paneer','Kofta','Tawa Paneer','Rice','Roti']
author_name =('j k rowling','rachel aaron','hans aanrud','verna aardema')
Timing = 'It\'s 7.30am'

for i in range(len(Menu)):
    print(Menu[i])

for i in range(len(author_name)):
    print(author_name[i])

for i in range(len(Timing)):
    print(Timing[i])

name = input('enter employee name : ')
salary =  int(input('enter salary : '))
company_name = input('enter company name :')

print(name,salary,company_name)

print('Hello World')
print('E:\ChangpondNewBatch\Python')

ins=[]
size=int(input('enter a size : '))
print('enter values')
for i in range(size):
    val=float(input())
    ins.append(val)
print('enter float values : ',ins)


ins1=[]
size=int(input('enter a size : '))
print('enter values')
for i in range(size):
    val=input()
    ins1.append(val)
print('enter float values : ',ins1)

Menu =['Dal','Paneer','Kofta','Tawa Paneer','Rice','Roti']
author_name =('j k rowling','rachel aaron','hans aanrud','verna aardema')
Timing = 'It\'s 7.30am'

i=0
while(i<len(Menu)):
    print(Menu[i])
    i+=1
i=0
while(i<len(author_name)):
    print(author_name[i])
    i+=1
i=0
while(i<len(Timing)):
    print(Timing[i])
    i+=1

val=[]
for i in range(3,16,3):
    val.append(i)
print('display result : ',*val)

val1=[]
for i in range(12,1,-3):
    val1.append(i)
print('display result : ',*val1)


i=3
while i in range(16):
    print(i)
    i+=3


i=12
while i in range(2,15):
    print(i)
    i-=3

Menu =['Dal','Paneer','Kofta','Tawa Paneer','Rice','Roti']

Menu[3]='malai paneer'
print(Menu)
Menu[4:]='tandoori roti','naan'
print(Menu)

fruits = ['mango',['fruitpulp','mixedpulp'],'banana',('apple','grapes')]
print(fruits[1][0])
print(fruits[3][0])



data = input('Enter the num :')
print(sum([int(i) for i in data]))
