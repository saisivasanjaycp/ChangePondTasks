def Display_Items(items):
    print('Menu Items Available ===',items)
    print('-'*50)

def Add_Items(items):
    newitem = input('Enter the item to be Added :')
    items.append(newitem)
    print('Added Items list :',items)
    print('-'*50)

def Update_Items(items):
    exist_item = input('Which item to be updated ===')
    new_item = input('Enter item to be Replaced ===')
    var = items.index(exist_item)
    items[var]=new_item
    print('Updated List of items after Added:',items)
    print('-'*50)

def  Delete_Items(items):
    rem = input('Enter the item to be removed ===')
    items.remove(rem)
    print('Updated Item list after Removed :',items)
    print('-'*50)

def main():
    menu = ['Idli','Dosa','Biriyani','Shawarma']
    print('1.Display Menu')
    print('2.Add Items')
    print('3.Update Items')
    print('4.Delete Items')
    print('-'*50)

    options = int(input('Enter Your Options = '))
    if(options==1):
        Display_Items(menu)
    elif(options==2):
        Add_Items(menu)
    elif(options==3):
        Update_Items(menu)
    elif(options==4):
        Delete_Items(menu)
    else:
        print('Please enter Valid option')
       
if __name__ == "__main__":
    main() 