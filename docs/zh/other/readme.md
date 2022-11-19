## git设置多个ssh

1. 生成 github 用的 ssh

```
$ ssh-keygen -t rsa -C "邮箱账户" -f ~/.ssh/github_rsa
```

2. 生成公司用的 ssh

```
$ ssh-keygen -t rsa -C "邮箱账户" -f ~/.ssh/id_rsa
```

3. 复制公钥到仓库

.ssh目录会生成4个文件，id_rsa和id_rsa.pub，github_rsa和github_rsa.pub，分别将他们的公钥文件（id_rsa.pub，github_rsa.pub）内容配置到对应的code仓库上

4. 创建 config 文件

添加以下内容

```
# github 
Host github.com 
    HostName github.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/github_rsa
# gitee
Host gitee.com
    HostName gitee.com
    PreferredAuthentications publickey
    IdentityFile ~/.ssh/id_rsa
```

5. 测试

```
$ ssh -T git@github.com
```