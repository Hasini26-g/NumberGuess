import random
print("Enter the range of numbers")

m=int(input("Enter lower range:"))
n=int(input("Enter higher range:"))

secret_num = random.randint(m,n)

while True:
    g=int(input("Enter your guess:"))
    if g==secret_num:
        print("Your guess is right!")
        break
    elif g>secret_num:
        print("You're close...Think of a lower number")   
    else:
        print("You're close...Think of a higher number")  
