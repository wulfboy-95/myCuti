#!/usr/bin/python3

"""
Author: Nicholas Lau Kheng Seng
License: All rights reserved.
Description: Tool for migrating users from MD5 password hashes to SHA256
password hashes.
"""

import hashlib
import sys

class User:
    def __init__(self, index, email, p_hash):
        self.index = index
        self.email = email
        self.hash = p_hash
    def gen_new_hash(self, password, salt):
        pw = bytes(password+salt,'latin1')
        sha2 = hashlib.sha256()
        sha2.update(pw)
        hash_sha2 = sha2.hexdigest()
        md5 = hashlib.md5()
        md5.update(pw)
        hash_md5 = md5.hexdigest()
        print(hash_md5)
        del(password)
        del(pw)
        sys.stdout.write("Password for ")
        sys.stdout.write(self.email)
        if self.hash == hash_sha2:
            sys.stdout.write(" is already using SHA256.\n")
            return True
        elif self.hash == hash_md5:
            self.hash = hash_sha2
            sys.stdout.write(" has been updated to SHA256.\n")
            return False
        else:
            sys.stdout.write(" does not match.\n")
            return True

if __name__ == "__main__":
    import getpass
    import json
    import sqlite3
    
    config_file = open("../config/app.json","r")
    config = json.load(config_file)
    salt = config["crypto_secret"]
    print(salt)
    
    conn = sqlite3.connect("../db.development.sqlite")
    c = conn.cursor()

    users = {}
    
    for row in c.execute("SELECT id, email, password FROM Users;"):
        index = row[0]
        email = row[1]
        pw = row[2]
        users[email] = User(index,email,pw)
        sys.stdout.write(email)
        sys.stdout.write("\n")

    cont = True
    while cont:
        email = input("Select email > ")

        if email in users:
            user = users[email]
            pw = getpass.getpass("Password > ")
            if not user.gen_new_hash(pw,salt):
                c.execute("UPDATE Users SET password = ? WHERE email = ?;",(user.hash,user.email))
            del(pw)
        else:
            sys.stdout.write("Could not find email.\n")

        while True:
            ans = input("Continue? (Y/n) > ")
            if ans.lower() == "n":
                cont = False
                break
            elif len(ans) == 0:
                break
    conn.commit()
    conn.close()
    config_file.close()
    
    
