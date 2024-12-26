def add(val1,val2):
    return val1+val2
def sub(val1,val2):
    return val1-val2
def mul(val1,val2):
    return val1*val2
def divide(val1,val2):
    return val1/val2
def floordiv(val1,val2):
    return val1//val2
def power(val1,val2):
    return val1**val2

def main():
    print('Operation Symbols === + , - , * , / , // , ** ')
    print('-'*50)
    symbol=input('select your symbol : ')
    val1=int(input('enter your first number : '))
    val2=int(input('enter your second number : '))
    print('-'*50)
    
    if(symbol=='+'): print(add(val1,val2))
    elif(symbol=='-'): print(sub(val1,val2))
    elif(symbol=='*'): print(mul(val1,val2))
    elif(symbol=='/'): print(divide(val1,val2))
    elif(symbol=='//'): print(floordiv(val1,val2))
    elif(symbol=='**'): print(power(val1,val2))
    else: print('your had entered a wrong one')
    

if __name__=='__main__':
    main()