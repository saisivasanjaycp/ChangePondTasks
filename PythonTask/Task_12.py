class Bank_Operations():
    def __init__(self):
        self.Bank_Balance = 500000

    def Check_Balance(self):
        return self.Bank_Balance
        
    def withdrawal(self):
        get_amount = int(input('Enter the Amount to be Withdrawed :'))
        if get_amount > self.Bank_Balance:
            print('Insufficient Balance')
        else:
            return f'Remaining Balance : {self.Bank_Balance-get_amount}'
        
    def Deposit(self):
        add_amount =  int(input('Enter the Amount to be deposited :'))
        return f'Remaining Balance : {self.Bank_Balance + add_amount}'
    
def main():
    obj = Bank_Operations()
    print('1. Check Balance\n2. Withdrawal \n3. Deposit Amount\n')
    choice=int(input('Enter the choice: '))
    if choice==1:
        print(obj.Check_Balance())
    elif choice==2:
        print(obj.withdrawal())
    elif choice==3:
        print(obj.Deposit())
    else:
        print('Your choice is invalid')
        
if __name__=='__main__':
    main()


