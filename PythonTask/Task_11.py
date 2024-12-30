class Menu_items():
    def __init__(self):
        self.items=['Idly','vada','Dosa','Biriyani','Roti']
    
    def Display_items(self):
        return self.items
    
    def Add_items(self):
        New_item = input('Enter the Item to be added :')
        if New_item not in self.items:
            self.items.append(New_item)
        else:
            print('Item is Already present !!!')
        return self.items

    def Remove_items(self):
        Rem_item = input('Enter the Item to be removed :')
        if Rem_item not in self.items:
            print('Item not present')
        else:
            self.items.remove(Rem_item)
        return self.items
        
    def update_items(self):
        print('Items present :',self.items)
        upd_item = input('Enter the Item to be updated :')
        if upd_item not in self.items:
            print('Item not present')
        else:
            Unew_item = input('Enter the new Item for Updation :')
            self.items[self.items.index(upd_item)]=Unew_item
        return self.items
def main():
    obj = Menu_items()
    print('1. Display Items\n2. Add Items \n3. Remove Items\n4. Update Items\n')
    choice=int(input('Enter the choice: '))
    if choice==1:
        print(obj.Display_items())
    elif choice==2:
        print(obj.Add_items())
    elif choice==3:
        print(obj.Remove_items())
    elif choice==4:
        print(obj.update_items())
    else:
        print('Your choice is invalid')
                  
if __name__=='__main__':
    main()