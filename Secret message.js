let mess = gets();
mess=mess.match(/[a-zA-Z]/g);
mess=mess.reverse().join('');
print(mess);
quit(0);
