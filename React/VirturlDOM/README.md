# Virtual DOM
Virtual DOM是一个基本的JavaScript对象，也是整个Virtual DOM树的基本

首先说说为什么要使用Virtual DOM，因为操作真实DOM
的耗费的性能代价太高，所以react内部使用js实现了
一套dom结构，在每次操作在和真实dom之前，使用实现好
的diff算法，对虚拟dom进行比较，递归找出有
变化的dom节点，然后对其进行更新操作。
为了实现虚拟DOM，我们需要把
每一种节点类型抽象成对象，每一种节点类型有自己的属性，
也就是prop，每次进行diff的时候，react会先比较
该节点类型，假如节点类型不一样，
那么react会直接删除该节点，
然后直接创建新的节点插入到其中，
假如节点类型一样，
那么会比较prop是否有更新，
假如有prop不一样，那么react会判定该节点有更新，
那么重渲染该节点，然后在对其子节点进行比较，
一层一层往下，直到没有子节点。

## 步骤
1. 生成Virtual DOM树、
2. 对比两棵树的差异
3. 更新视图

### 生成Virtual DOM树
DOM是前端工程师最常接触的内容之一，一个DOM节点
包含了很多的内容，但是一个抽
象出一个DOM节点
却只需要三部分：节点类型，节点属性、子节点。
所以围绕这三个部分，
我们可以使用JavaScript简单地实现一棵DOM树，
然后给节点实现渲染方法，
就可以实现虚拟节点到真是DOM的转化。

## 参考
- [y8n blog](https://github.com/y8n/blog/issues/5)
- [有赞](https://tech.youzan.com/vdom-2/)
