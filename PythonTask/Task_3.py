def Area_of_Circle(radius,pie=3.14):
    Aoc = pie * radius * radius 
    return Aoc


def main():
    r = int(input('Enter the Radius: '))
    print('Positional Argument',Area_of_Circle(r,3.14))
    print('First Argument Position sec argument default :')
    print(Area_of_Circle(r))
    print('Key argument:')
    print(Area_of_Circle(radius=r , pie=3.14))
    print('First Argument key sec argument default:')
    print(Area_of_Circle(radius=r))


if __name__ == "__main__":
    main() 