def add(num1,num2):
    return f'Addition: {num1+num2}'
def sub(num1,num2):
    return f'Subtraction: {num1-num2}'
def mul(num1,num2):
    return f'Multiplication: {num1*num2}'
def div(num1,num2):
    return f'Division: {num1/num2}'


def main():
    print('1.+','2.-','3./','4.*',sep='\n')
    value=int(input('Enter the choice: '))
    value_1=int(input('Enter the value1: '))
    value_2=int(input('Enter the value2: '))
    opera={1:add,2:sub,3:div,4:mul}
    if value==1:
        print(opera[1](value_1,value_2))
    elif value==2:
        print(opera[2](value_1,value_2))
    elif value==3:
        print(opera[3](value_1,value_2))
    elif value==4:
        print(opera[4](value_1,value_2))

if __name__=='__main__':
    main()


