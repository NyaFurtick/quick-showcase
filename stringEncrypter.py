# Nya Furtick
# This program asks a user to enter a message, encrypts the message, and displays the decrypted message

# Method to encrypt method
def encrypt_message(message):
    letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?'
    key = 'qazwsxedcrfvtgbyhnujmikolpQAZWSXEDCRFVTGBYHNUJMIKOLP!?'
    new_message = ''

    for idx in range(len(message)):

        char_in_letters = letters.find(message[idx])
        # Account for spaces in message using ASCII key codes
        if char_in_letters == -1:
            new_message += chr(32)
        else:    
            char_in_key = key[char_in_letters]
            new_message += char_in_key

    return new_message

# Accepts encrypted message and decrypts it
def decrypt_message(encrypted_message):

    letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?'
    key = 'qazwsxedcrfvtgbyhnujmikolpQAZWSXEDCRFVTGBYHNUJMIKOLP!?'
    new_message = ''

    for idx in range(len(encrypted_message)):

        char_in_key = key.find(encrypted_message[idx])
        # Account for spaces in message using ASCII key codes
        if char_in_key == -1:
            new_message += chr(32)
        else:
            char_in_letters = letters[char_in_key]
            new_message += char_in_letters

    return new_message
    
def main():
    # Get user input
    message = input('Enter a message for encryption: ')
        
    # Display results
    print('Original message: ', message)   
    encrypted = encrypt_message(message)
    print('Encrypted message: ', encrypted)
    decrypted = decrypt_message(encrypted)
    print('Decrypted message: ', decrypted)

    input('Press any key to exit')
    exit()
main()
