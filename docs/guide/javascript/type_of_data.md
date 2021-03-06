---
title: JavaScript的数据类型有哪些,存储有什么区别？
---

# JavaScript 的数据类型有哪些,存储有什么区别？

在 JavaScript 中有 8 种基本的数据类型（译注：7 种原始类型和 1 种引用类型）

## 数据类型的种类

js 中的数据类型大体分为两大类：一是基本的数据类型（简单数据类型、原始类型）二是复杂数据类型

|   种类   |       类型        |                    简述                     |
| :------: | :---------------: | :-----------------------------------------: |
| 原始类型 | Boolean(逻辑类型) |               只有 true false               |
|          |       Null        |                  只有 null                  |
|          |     Undefined     |           变量提升默认 undefined            |
|          |      Number       |      基于 754 标准 双精度 64 位 二进制      |
|          |      BigInt       | 2020 年初 Chrome Firefox Edge Node 都实现了 |
|          |      String       |                                             |
|          |      Symbol       |             通常用作对象的 key              |
| 复杂类型 |      Object       |               一组属性的集合                |

## 存储区别

- 6 种原始值：Undefined、Null、Boolean、Number、String 和 Symbol。保存原始值的变量是按值（by value）访问的，因为我们操作的就是**存储在变量中的实际值**。

- 引用值是保存在内存中的对象 JavaScript 不允许直接访问内存位置，因此也就不能直接操作对象所在的内存空间。在操作对象时，实际上操作的是对该对象的引用（reference）而非实际的对象本身
  保存引用值的变量是按引用（by reference）访问的

所以**通常情况下，栈空间都不会设置太大，主要用来存放一些原始类型的小数据**。而引用类型的数据占用的空间都比较大，所以这一类数据会被存放到堆中，**堆空间很大，能存放很多大的数据**，不过缺点是分配内存和回收内存都会占用一定的时间。
