def decimal_to_binary(decimal_num):
    binary_num = bin(decimal_num)[2:]
    return binary_num

# Example Usage
decimal_input = int(input("Enter a decimal number: "))
binary_output = decimal_to_binary(decimal_input)
print(f"The binary representation is: {binary_output}")
